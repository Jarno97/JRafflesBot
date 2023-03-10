process['env']['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';
const _0x48dad3 = require('fs'), _0x3bf245 = new Date()['toDateString']() + '\x20' + new Date()['getHours']() + '\x20' + new Date()['getMinutes']() + '\x20' + new Date()['getSeconds']();
function _0x359435(_0x3ed9ef) {
    const _0xe2a79f = _0x48dad3['createWriteStream'](_0x3ed9ef, { 'flags': 'a' }), _0x14e722 = console['log'];
    console['log'] = function () {
        const _0x1872f0 = Array['prototype']['slice']['call'](arguments), _0x100c07 = _0x1872f0['join']('\x20') + '\x0a';
        _0xe2a79f['write'](_0x100c07), _0x14e722['apply'](console, _0x1872f0);
    };
}
_0x359435('../logs/log\x20' + _0x3bf245);
var _0x53a94c = require('tough-cookie'), _0x328bb9 = require('node-imap'), _0x3459c6 = require('util')['inspect'];
const _0x235caf = require('mailparser')['simpleParser'], { EmbedBuilder: _0x310587 } = require('discord.js');
var _0x4e52e2 = require('exe');
const { execFile: _0x29c5aa } = require('child_process'), _0x5f424d = require('puppeteer-extra'), _0x5787c4 = require('puppeteer-extra-plugin-recaptcha'), _0x456420 = require('puppeteer-extra-plugin-stealth'), _0x43af63 = require('chalk'), _0x9f406c = require('node-bash-title'), _0xf02506 = require('axios'), _0x3be0d7 = require('papaparse');
var _0x46e390 = require('random-name');
const _0xaea765 = require('request');
var _0x2b5c54 = require('prompt');
const _0x3bf13d = _0xaea765['jar']();
var _0x91debc = {};
const _0x279bb9 = '1067398661929181186/wvxr1d4nwFDFE-hAKBisU_mVWLloqatitfWvCqqIv38EUYiJMm_Pr3VKsuLsUBKN3PPj', _0x13ad4e = '1067398862056210432/TZs7kSEcDtUD13Vzl7VQhculxdtocZI8HKU7l_fW_W0qthftmSpHxNDY9NB3Hc4v6Yhy', _0x5ddd12 = '1068515411877957743/t_TXlLhYbeQmPL19hyGeNqi1G0KPT8KCBYOVOcryGMvXPfIUBEpNZRBCC1j7OFRej4A6', _0x3558ad = '1068519704525807616/luGgvM1ZbR7g1zM5-10y5yceL2OGVCjrlkB6XxQL-hdoHUJ6hwSVAn6vVNyieHWLqPHE', _0x394a7f = '1070657276525940746/GSfXwIxjuRjwmP3sTDw73M4V2P5OJqMFgZyECtpBwFmtXGINvj1xFsVsZ2KwGBpJNHpn', _0x215339 = '1072865476457287711/EePVQu0bb06IdHG3FfG7M-JDaE-38prupCPoCqaduP6mG_tsshUSaKidyfyVx0YgNC7e';
var _0x41e169 = 'https://discord.com/api/webhooks/', _0x34ded3 = '' + _0x41e169 + _0x5ddd12, _0x22e26c = '' + _0x41e169 + _0x3558ad, _0x1b7c81 = '' + _0x41e169 + _0x279bb9, _0x13fc34 = '' + _0x41e169 + _0x13ad4e, _0x48b9ae = '' + _0x41e169 + _0x394a7f, _0x3f0a58 = '' + _0x41e169 + _0x215339;
const _0x3b6e0f = JSON['parse'](_0x48dad3['readFileSync']('../package.json', 'utf-8')), _0x1e9692 = _0x3b6e0f['version'];
var _0x33c890, _0x19246b, _0x539e7a, _0x33ff79, _0x26c663, _0x1d56f7, _0x52fb85, _0x3e617e;
const _0x23f1c2 = 'pk_7R7rRwMpveiR8OufEx9xIDMdU8Y95GgvGLF59wWRqklMwhXdpDnh5sN2KfaPHjEe';
let _0xf361c5 = ![];
const _0x165056 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', _0x40b627 = '0123456789';
var _0x36bd93 = _0x165056['split']('');
const _0x7ee3ba = require('auto-git-update'), { PageEmittedEvents: _0x3cec86 } = require('puppeteer'), { getRandomValues: _0x1498fe } = require('crypto'), { resolve: _0xf5e426 } = require('path'), { Console: _0xaefef } = require('console'), _0x150508 = {
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
}, _0x385e39 = new _0x7ee3ba(_0x150508);
async function _0x3210e3() {
    _0x26c663 = _0x48dad3['readdirSync']('../proxies'), _0x33ff79 = _0x48dad3['readdirSync']('../tasks'), !_0x48dad3['existsSync']('../accounts/fenom.csv') && _0x48dad3['writeFileSync']('../accounts/fenom.csv', 'Email,Password\x0a'), !_0x48dad3['existsSync']('../accounts/bstn.csv') && _0x48dad3['writeFileSync']('../accounts/bstn.csv', 'Email,Password\x0a'), !_0x48dad3['existsSync']('../accounts/eql.csv') && _0x48dad3['writeFileSync']('../accounts/eql.csv', 'Email,Password,Phone\x0a'), !_0x48dad3['existsSync']('../failed-tasks.csv') && _0x48dad3['writeFileSync']('../failed-tasks.csv', 'Time,Store,Mode,Url,Size,Follower,FirstName,LastName,Address1,Address2,HouseNumber,Zip,City,State,Country,Phone,Email,Password,PaymentMethod,CardType,NameOnCard,CardNumber,ExpiryDate,CVV,IsBillingSame,BillingFirstName,BillingLastName,BillingAddress1,BillingAddress2,BillingHouseNumber,BillingZip,BillingCity,BillingState,BillingCountry,BillingPhone\x0a'), !_0x48dad3['existsSync']('../successful-tasks.csv') && _0x48dad3['writeFileSync']('../successful-tasks.csv', 'Time,Store,Mode,Url,Size,Follower,FirstName,LastName,Address1,Address2,HouseNumber,Zip,City,State,Country,Phone,Email,Password,PaymentMethod,CardType,NameOnCard,CardNumber,ExpiryDate,CVV,IsBillingSame,BillingFirstName,BillingLastName,BillingAddress1,BillingAddress2,BillingHouseNumber,BillingZip,BillingCity,BillingState,BillingCountry,BillingPhone\x0a'), _0x91debc = JSON['parse'](_0x48dad3['readFileSync']('../settings.json', 'utf-8')), !_0x91debc['delay'] && (_0x91debc['delay'] = 0x3c, _0x48dad3['writeFileSync']('../settings.json', JSON['stringify'](_0x91debc, null, 0x2))), !_0x91debc['masterMail'] && (_0x91debc['masterMail'] = 'yourmail@gmail.com', _0x48dad3['writeFileSync']('../settings.json', JSON['stringify'](_0x91debc, null, 0x2))), !_0x91debc['masterPassword'] && (_0x91debc['masterPassword'] = 'read\x20the\x20guide\x20on\x20how\x20to\x20get\x20an\x20APP\x20PASSWORD', _0x48dad3['writeFileSync']('../settings.json', JSON['stringify'](_0x91debc, null, 0x2))), !_0x91debc['captchaKey'] && (_0x91debc['captchaKey'] = '', _0x48dad3['writeFileSync']('../settings.json', JSON['stringify'](_0x91debc, null, 0x2))), !_0x91debc['useRandomProxy'] && (_0x91debc['useRandomProxy'] = !![], _0x48dad3['writeFileSync']('../settings.json', JSON['stringify'](_0x91debc, null, 0x2))), !_0x91debc['shuffleTasks'] && (_0x91debc['shuffleTasks'] = ![], _0x48dad3['writeFileSync']('../settings.json', JSON['stringify'](_0x91debc, null, 0x2))), !_0x91debc['webhook'] && (_0x91debc['webhook'] = '', _0x48dad3['writeFileSync']('../settings.json', JSON['stringify'](_0x91debc, null, 0x2))), _0x91debc['delay'] <= 0x1388 && (_0x91debc['delay'] = _0x91debc['delay'] * 0x3e8), _0x91debc['AfewDelay'] && (delete _0x91debc['AfewDelay'], _0x48dad3['writeFileSync']('../settings.json', JSON['stringify'](_0x91debc, null, 0x2))), _0x91debc['MahaDelay'] && (delete _0x91debc['MahaDelay'], _0x48dad3['writeFileSync']('../settings.json', JSON['stringify'](_0x91debc, null, 0x2))), _0x91debc['footshopDelay'] && (delete _0x91debc['footshopDelay'], _0x48dad3['writeFileSync']('../settings.json', JSON['stringify'](_0x91debc, null, 0x2))), _0x91debc['MahaDelay'] = _0x91debc['delay'], _0x41e169 = _0x91debc['webhook'], _0x1d56f7 = _0x91debc['licenseKey'];
}
let _0x56ad17, _0xf5324b = [], _0x6bd0d6;
const _0x3f09d6 = _0x2fd631 => new Promise(_0x421e92 => setTimeout(_0x421e92, _0x2fd631));
function _0x565a5c(_0x48a7e2, _0x1725f0) {
    return Math['floor'](Math['random']() * (_0x1725f0 - _0x48a7e2 + 0x1) + _0x48a7e2);
}
function _0x527815(_0x53bfaf) {
    let _0x29979b = _0x53bfaf['length'], _0x4f2c03;
    while (_0x29979b != 0x0) {
        _0x4f2c03 = Math['floor'](Math['random']() * _0x29979b), _0x29979b--, [_0x53bfaf[_0x29979b], _0x53bfaf[_0x4f2c03]] = [
            _0x53bfaf[_0x4f2c03],
            _0x53bfaf[_0x29979b]
        ];
    }
    return _0x53bfaf;
}
async function _0x1e1701(_0x4ad39f) {
    return _0xf02506['get']('https://api.hyper.co/v4/licenses/' + _0x4ad39f, { 'headers': { 'Authorization': 'Bearer\x20' + _0x23f1c2 } })['then'](_0x3384f1 => _0x3384f1['data'])['catch'](() => null);
}
;
async function _0x8b410a(_0x414b40) {
    console['clear']();
    if (_0x414b40 == 'AWGH-0N92-JE6S-HOHU') {
        console['log']('Please\x20paste\x20your\x20key\x20here:');
        var _0x1f6a3a = await _0x2b5c54['get']('License');
        if (_0x1f6a3a['License'] == 'AWGH-0N92-JE6S-HOHU')
            return console['log']('Error\x20please\x20use\x20the\x20key\x20on\x20the\x20JRaffles\x20dashboard'), await _0x3f09d6(0xbb8), _0x8b410a(_0x414b40);
        _0x414b40 = _0x1f6a3a['License'], _0x91debc['licenseKey'] = _0x414b40, _0x1d56f7 = _0x414b40, _0x48dad3['writeFileSync']('../settings.json', JSON['stringify'](_0x91debc));
    }
    console['log']('Checking\x20license\x20' + _0x1d56f7 + '...'), await _0x3f09d6(0x320);
    const _0x26f4d5 = await _0x1e1701(_0x414b40);
    _0x52fb85 = JSON['stringify'](_0x26f4d5['user']['discord']['username'])['substring'](0x1)['slice'](0x0, -0x1), _0x3e617e = JSON['stringify'](_0x26f4d5['user']['discord']['avatar'])['substring'](0x1)['slice'](0x0, -0x1);
    if (!_0x26f4d5)
        return console['log']('License\x20not\x20found');
    if (!_0x26f4d5['user'])
        return console['log']('License\x20not\x20bound');
    return _0x26f4d5['status'] === 'active' ? (console['log']('License\x20is\x20good\x20to\x20go!'), _0xf361c5 = !![]) : (console['log']('Could\x20not\x20find\x20license..'), _0xf361c5 = ![]);
}
async function _0x25f3bc() {
    var _0x1a3650 = await _0x2b5c54['get']('Module');
    return console['clear'](), _0x1a3650['Module'];
}
;
async function _0x3de314() {
    var _0x3b002a = await _0x2b5c54['get']('Setting');
    return console['clear'](), _0x3b002a['Setting'];
}
async function _0x495cbe() {
    console['clear'](), console['log']('Choose\x20A\x20File\x20to\x20Run\x20\x0a');
    for (var _0x497419 = 0x0; _0x497419 < _0x33ff79['length']; _0x497419++) {
        console['log']('\x20(' + _0x497419 + ')\x20' + _0x33ff79[_0x497419]);
    }
    console['log']('');
    var _0x3a706e = await _0x2b5c54['get']('Task');
    if (_0x3a706e['Task'] > _0x33ff79['length'] - 0x1 || isNaN(_0x3a706e['Task']) == !![])
        return console['log']('Invalid\x20selection'), await _0x3f09d6(0x3e8), _0x495cbe();
    var _0x4c0db9 = _0x48dad3['readFileSync']('../tasks/' + _0x33ff79[_0x3a706e['Task']], 'utf-8');
    return _0x539e7a = _0x3be0d7['parse'](_0x4c0db9, { 'header': !![] })['data'], console['clear'](), console['log']('Running\x20' + _0x43af63['blue'](_0x33ff79[_0x3a706e['Task']])), _0x33c890 = _0x33ff79[_0x3a706e['Task']], _0x539e7a;
}
async function _0xec00a5() {
    console['clear'](), console['log']('Choose\x20Proxies\x20to\x20Use\x20\x0a');
    for (var _0x29ece4 = 0x0; _0x29ece4 < _0x26c663['length']; _0x29ece4++) {
        console['log']('\x20(' + _0x29ece4 + ')\x20' + _0x26c663[_0x29ece4]);
    }
    console['log']('');
    var _0x24713a = await _0x2b5c54['get']('Proxies');
    if (_0x24713a['Proxies'] > _0x26c663['length'] - 0x1 || isNaN(_0x24713a['Proxies']) == !![])
        return console['log']('Invalid\x20selection'), await _0x3f09d6(0x3e8), _0xec00a5();
    var _0x15ee6a = _0x48dad3['readFileSync']('../proxies/' + _0x26c663[_0x24713a['Proxies']], 'utf-8')['split']('\x0a');
    let _0x4d5038 = _0x15ee6a['map']((_0x3206c6, _0x34573c) => {
        sanatizeProxy = _0x3206c6['replace']('\x0d', '');
        if (_0x15ee6a[_0x34573c + 0x1] != undefined)
            return '' + sanatizeProxy;
        return '' + sanatizeProxy;
    });
    return _0x19246b = _0x26c663[_0x24713a['Proxies']], console['clear'](), _0x4d5038;
}
async function _0xb04946() {
    var _0x3febda = await _0x2b5c54['get']('Value');
    return console['clear'](), _0x3febda['Value'];
}
async function _0x135228(_0x3866b0) {
    console['clear'](), console['log']('What\x20would\x20you\x20like\x20to\x20do?\x20\x0a');
    for (var _0x4ce3f7 = 0x0; _0x4ce3f7 < _0x3866b0['length']; _0x4ce3f7++) {
        console['log']('\x20(' + _0x4ce3f7 + ')\x20[' + _0x3866b0[_0x4ce3f7]['name'] + ']');
    }
    ;
    console['log']('');
    var _0x39219b = await _0x2b5c54['get']('Module');
    return _0x39219b['Module'];
}
async function _0xfa30fa() {
    var _0x2d1e90 = await _0x2b5c54['get']('Password');
    return console['clear'](), _0x2d1e90['Password'];
}
;
async function _0xea53ac() {
    var _0x3c5ecc = await _0x2b5c54['get']('Links');
    return _0x3c5ecc['Links'];
}
;
async function _0x212a66() {
    console['log']('Choose\x20a\x20Raffle\x20to\x20enter:\x20\x0a');
    for (var _0x11c557 = 0x0; _0x11c557 < _0xf5324b['length']; _0x11c557++) {
        console['log']('\x20(' + _0x11c557 + ')\x20' + _0xf5324b[_0x11c557]);
    }
    ;
    console['log']();
    let _0x53646c = await _0x2b5c54['get']('Product');
    return console['clear'](), _0x53646c['Product'];
}
;
function _0x10f5d5() {
    var _0x17e347 = new Date(Date['now']())['toLocaleTimeString']();
    return _0x17e347;
}
;
function _0x8972d8() {
    var _0x458f85 = new Date(Date['now']())['toLocaleString']();
    return _0x458f85['replace'](',', '');
}
async function _0x325d88(_0x54af10, _0x2de743) {
    let _0x403dbc = { 'headers': { 'content-type': 'application/json' } };
    if (_0x1e9692 != 'devkey') {
        await _0xf02506['post'](_0x54af10, _0x2de743, _0x403dbc);
        return;
    }
    return console['log']('devkey\x20settings\x20enabled,\x20not\x20sending\x20webhooks');
}
;
async function _0x19f655(_0x56a25c, _0x4bfd50, _0x408be0, _0x1781d1, _0xcc10aa) {
    if (!_0x1781d1 && _0x408be0 == 'dev') {
        var _0x320afc = new _0x310587()['setColor'](0xc0d6d6)['setTitle']('Successful\x20Raffle\x20Entry')['setAuthor']({
            'name': 'JRaffles',
            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
            'url': 'https://twitter.com/JRaffles_'
        })['setThumbnail'](_0x4bfd50['logo'])['addFields']({
            'name': 'Store',
            'value': '' + _0x4bfd50['store'],
            'inline': !![]
        })['addFields']({
            'name': 'Size',
            'value': '' + _0x56a25c['Size'],
            'inline': !![]
        })['addFields']({
            'name': 'Delay',
            'value': '' + _0x91debc['delay'],
            'inline': !![]
        })['addFields']({
            'name': 'User',
            'value': '' + _0x52fb85,
            'inline': !![]
        })['addFields']({
            'name': 'URL',
            'value': '' + _0x56a25c['Url'],
            'inline': !![]
        })['addFields']({
            'name': 'Mail',
            'value': '' + _0x56a25c['Email'],
            'inline': !![]
        })['setTimestamp']()['setFooter']({
            'text': 'JRaffles\x20v' + _0x1e9692,
            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
        });
        return _0x320afc['data'];
    } else {
        if (_0x1781d1 && _0x408be0 == 'dev') {
            var _0x320afc = new _0x310587()['setColor'](0xc0d6d6)['setTitle']('Failed\x20Raffle\x20Entry')['setAuthor']({
                'name': 'JRaffles',
                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                'url': 'https://twitter.com/JRaffles_'
            })['setThumbnail'](_0x4bfd50['logo'])['addFields']({
                'name': 'User',
                'value': '' + _0x52fb85,
                'inline': !![]
            }, {
                'name': 'Store',
                'value': '' + _0x4bfd50['store'],
                'inline': !![]
            }, {
                'name': 'Size',
                'value': '' + _0x56a25c['Size'],
                'inline': !![]
            }, {
                'name': 'Delay',
                'value': '' + _0x91debc['delay'],
                'inline': !![]
            })['addFields']({
                'name': 'ERROR',
                'value': '' + _0xcc10aa,
                'inline': !![]
            })['addFields']({
                'name': 'URL',
                'value': '' + _0x56a25c['Url']
            })['addFields']({
                'name': 'Mail',
                'value': '' + _0x56a25c['Email'],
                'inline': !![]
            })['setTimestamp']()['setFooter']({
                'text': 'JRaffles\x20v' + _0x1e9692,
                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
            });
            return _0x320afc['data'];
        } else {
            if (_0x408be0 == 'pub') {
                var _0x320afc = new _0x310587()['setColor'](0xc0d6d6)['setTitle']('Succesful\x20Raffle\x20Entry')['setAuthor']({
                    'name': 'JRaffles',
                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                    'url': 'https://twitter.com/JRaffles_'
                })['setThumbnail'](_0x4bfd50['logo'])['addFields']({
                    'name': 'Store',
                    'value': '' + _0x4bfd50['store'],
                    'inline': !![]
                }, {
                    'name': 'Size',
                    'value': '' + _0x56a25c['Size'],
                    'inline': !![]
                }, {
                    'name': 'Delay',
                    'value': '' + _0x91debc['delay'],
                    'inline': !![]
                })['addFields']({
                    'name': 'URL',
                    'value': '||' + _0x56a25c['Url'] + '||'
                })['setTimestamp']()['setFooter']({
                    'text': 'JRaffles\x20v' + _0x1e9692,
                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                });
                return _0x320afc['data'];
            } else {
                if (_0x408be0 == 'acc' && !_0x1781d1) {
                    var _0x320afc = new _0x310587()['setColor'](0xc0d6d6)['setTitle']('Account\x20Generated')['setAuthor']({
                        'name': 'JRaffles',
                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                        'url': 'https://twitter.com/JRaffles_'
                    })['setThumbnail'](_0x4bfd50['logo'])['addFields']({
                        'name': 'User',
                        'value': '' + _0x52fb85,
                        'inline': !![]
                    }, {
                        'name': 'Store',
                        'value': '' + _0x4bfd50['store'],
                        'inline': !![]
                    }, {
                        'name': 'Delay',
                        'value': '' + _0x91debc['delay'],
                        'inline': !![]
                    })['setTimestamp']()['setFooter']({
                        'text': 'JRaffles\x20v' + _0x1e9692,
                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                    });
                    return _0x320afc['data'];
                } else {
                    if (_0x408be0 == 'acc' && _0x1781d1) {
                        var _0x320afc = new _0x310587()['setColor'](0xc0d6d6)['setTitle']('Account\x20Generation\x20Failed')['setAuthor']({
                            'name': 'JRaffles',
                            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                            'url': 'https://twitter.com/JRaffles_'
                        })['setThumbnail'](_0x4bfd50['logo'])['addFields']({
                            'name': 'User',
                            'value': '' + _0x52fb85,
                            'inline': !![]
                        }, {
                            'name': 'Error',
                            'value': '' + _0xcc10aa,
                            'inline': !![]
                        }, {
                            'name': 'Store',
                            'value': '' + _0x4bfd50['store'],
                            'inline': !![]
                        }, {
                            'name': 'Delay',
                            'value': '' + _0x91debc['delay'],
                            'inline': !![]
                        })['setTimestamp']()['setFooter']({
                            'text': 'JRaffles\x20v' + _0x1e9692,
                            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                        });
                        return _0x320afc['data'];
                    } else {
                        if (_0x408be0 == 'open') {
                            var _0x320afc = new _0x310587()['setColor'](0xc0d6d6)['setTitle']('User\x20Opened\x20JRaffles')['setAuthor']({
                                'name': 'JRaffles',
                                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                                'url': 'https://twitter.com/JRaffles_'
                            })['setThumbnail'](_0x3e617e)['addFields']({
                                'name': 'User',
                                'value': '' + _0x52fb85,
                                'inline': !![]
                            })['setTimestamp']()['setFooter']({
                                'text': 'JRaffles\x20v' + _0x1e9692,
                                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                            });
                            return _0x320afc['data'];
                        } else {
                            if (!_0x1781d1 && _0x408be0 == 'ver') {
                                var _0x320afc = new _0x310587()['setColor'](0xc0d6d6)['setTitle']('Successful\x20Verification')['setAuthor']({
                                    'name': 'JRaffles',
                                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                                    'url': 'https://twitter.com/JRaffles_'
                                })['setThumbnail'](_0x4bfd50['logo'])['addFields']({
                                    'name': 'User',
                                    'value': '' + _0x52fb85,
                                    'inline': !![]
                                }, {
                                    'name': 'Store',
                                    'value': '' + _0x4bfd50['store'],
                                    'inline': !![]
                                }, {
                                    'name': 'Delay',
                                    'value': '' + _0x91debc['delay'],
                                    'inline': !![]
                                })['setTimestamp']()['setFooter']({
                                    'text': 'JRaffles\x20v' + _0x1e9692,
                                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                                });
                                return _0x320afc['data'];
                            } else {
                                if (_0x1781d1 && _0x408be0 == 'ver') {
                                    var _0x320afc = new _0x310587()['setColor'](0xc0d6d6)['setTitle']('Verification\x20Failed')['setAuthor']({
                                        'name': 'JRaffles',
                                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                                        'url': 'https://twitter.com/JRaffles_'
                                    })['setThumbnail'](_0x4bfd50['logo'])['addFields']({
                                        'name': 'User',
                                        'value': '' + _0x52fb85,
                                        'inline': !![]
                                    }, {
                                        'name': 'Error',
                                        'value': '' + _0xcc10aa,
                                        'inline': !![]
                                    }, {
                                        'name': 'Store',
                                        'value': '' + _0x4bfd50['store'],
                                        'inline': !![]
                                    }, {
                                        'name': 'Delay',
                                        'value': '' + _0x91debc['delay'],
                                        'inline': !![]
                                    })['setTimestamp']()['setFooter']({
                                        'text': 'JRaffles\x20v' + _0x1e9692,
                                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                                    });
                                    return _0x320afc['data'];
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
async function _0x3a2fba(_0x112e55, _0xddbf20) {
    var _0x3bd970 = _0x112e55[_0xddbf20]['Address1']['split'](''), _0x14cfb4 = _0x112e55[_0xddbf20]['Address2']['split'](''), _0x4f8ed7 = _0x112e55[_0xddbf20]['Email']['split']('@');
    for (var _0x7b5541 = 0x0; _0x7b5541 < _0x3bd970['length']; _0x7b5541++) {
        if (_0x3bd970[_0x7b5541] == 'X') {
            var _0x4bf2d4 = Math['round'](Math['random']() * (_0x165056['length'] - 0x1));
            _0x3bd970[_0x7b5541] = _0x36bd93[_0x4bf2d4];
        }
    }
    ;
    for (var _0x7b5541 = 0x0; _0x7b5541 < _0x14cfb4['length']; _0x7b5541++) {
        if (_0x14cfb4[_0x7b5541] == 'X') {
            var _0x4bf2d4 = Math['round'](Math['random']() * (_0x165056['length'] - 0x1));
            _0x14cfb4[_0x7b5541] = _0x36bd93[_0x4bf2d4];
        }
    }
    ;
    _0x112e55[_0xddbf20]['FirstName'] == 'RANDOM' && (_0x112e55[_0xddbf20]['FirstName'] = _0x46e390['first']());
    _0x112e55[_0xddbf20]['LastName'] == 'RANDOM' && (_0x112e55[_0xddbf20]['LastName'] = _0x46e390['last']());
    _0x4f8ed7[0x0] == 'RANDOM' ? _0x4f8ed7[0x0] = '' + _0x46e390['first']() + _0x46e390['last']() + _0x565a5c(0x1, 0x270f) + '@' : _0x4f8ed7[0x0] = _0x4f8ed7[0x0] + '@';
    _0x112e55[_0xddbf20]['Email'] = _0x4f8ed7['join'](''), _0x112e55[_0xddbf20]['Address1'] = _0x3bd970['join'](''), _0x112e55[_0xddbf20]['Address2'] = _0x14cfb4['join']('');
    _0x112e55[_0xddbf20]['Phone'] == 'RANDOM' && (_0x112e55[_0xddbf20]['Phone'] = '0' + _0x565a5c(0x5f5e100, 0x3b9ac9ff));
    if (_0x112e55[_0xddbf20]['Follower'] == 'RANDOM') {
        var _0x531ce3 = _0x565a5c(0x1, 0x270f);
        _0x112e55[_0xddbf20]['Follower'] = '' + _0x46e390['first']() + _0x46e390['last']() + _0x531ce3 + '\x20';
    }
    _0x112e55[_0xddbf20]['HouseNumber'] == 'RANDOM' && (_0x112e55[_0xddbf20]['HouseNumber'] = _0x565a5c(0x1, 0xc8));
    if (_0x112e55[_0xddbf20]['Address1'] == 'RANDOM') {
        var _0x2b8409 = Math['round'](Math['random']() * (_0x165056['length'] - 0x1)), _0x3dd485 = _0x36bd93[_0x2b8409];
        _0x112e55[_0xddbf20]['Address1'] = _0x46e390['last']() + 'straat', _0x112e55[_0xddbf20]['Zip'] == '' && (_0x112e55[_0xddbf20]['Postcode'] = _0x565a5c(0x3e8, 0x270f) + '\x20' + _0x3dd485 + _0x3dd485, _0x112e55[_0xddbf20]['Zip'] = _0x112e55[_0xddbf20]['Postcode']), _0x112e55[_0xddbf20]['HouseNumber'] = '' + _0x565a5c(0x1, 0xc8);
    }
    return;
}
;
async function _0x3d3128(_0xee4867, _0x2e3f5f) {
    _0x48dad3['appendFileSync']('../failed-tasks.csv', _0x8972d8() + ',' + _0x2e3f5f['store'] + ',' + _0x2e3f5f['name'] + ',' + _0xee4867['Url'] + ',' + _0xee4867['Size'] + ',' + _0xee4867['Follower'] + ',' + _0xee4867['FirstName'] + ',' + _0xee4867['LastName'] + ',' + _0xee4867['Address1'] + ',' + _0xee4867['Address2'] + ',' + _0xee4867['HouseNumber'] + ',' + _0xee4867['Zip'] + ',' + _0xee4867['City'] + ',' + _0xee4867['State'] + ',' + _0xee4867['Country'] + ',' + _0xee4867['Phone'] + ',' + _0xee4867['Email'] + ',' + _0xee4867['Password'] + ',' + _0xee4867['PaymentMethod'] + ',' + _0xee4867['CardType'] + ',' + _0xee4867['NameOnCard'] + ',' + _0xee4867['CardNumber'] + ',' + _0xee4867['ExpiryDate'] + ',' + _0xee4867['CVV'] + ',' + _0xee4867['IsBillingSame'] + ',,,,,,,,,,\x0a');
}
async function _0x1b4968(_0x2a5274, _0x3c662a) {
    _0x48dad3['appendFileSync']('../successful-tasks.csv', _0x8972d8() + ',' + _0x3c662a['store'] + ',' + _0x3c662a['name'] + ',' + _0x2a5274['Url'] + ',' + _0x2a5274['Size'] + ',' + _0x2a5274['Follower'] + ',' + _0x2a5274['FirstName'] + ',' + _0x2a5274['LastName'] + ',' + _0x2a5274['Address1'] + ',' + _0x2a5274['Address2'] + ',' + _0x2a5274['HouseNumber'] + ',' + _0x2a5274['Zip'] + ',' + _0x2a5274['City'] + ',' + _0x2a5274['State'] + ',' + _0x2a5274['Country'] + ',' + _0x2a5274['Phone'] + ',' + _0x2a5274['Email'] + ',' + _0x2a5274['Password'] + ',' + _0x2a5274['PaymentMethod'] + ',' + _0x2a5274['CardType'] + ',' + _0x2a5274['NameOnCard'] + ',' + _0x2a5274['CardNumber'] + ',' + _0x2a5274['ExpiryDate'] + ',' + _0x2a5274['CVV'] + ',' + _0x2a5274['IsBillingSame'] + ',,,,,,,,,,\x0a');
}
function _0x1e8ff3() {
    let _0x5cd27b = proxyFile['split']('\x0a'), _0x5c92c6 = _0x5cd27b['map']((_0x4ad88e, _0x571c95) => {
        sanatizeProxy = _0x4ad88e['replace']('\x0d', '');
        if (_0x5cd27b[_0x571c95 + 0x1] != undefined)
            return '' + sanatizeProxy;
        return '' + sanatizeProxy;
    });
    return _0x5c92c6;
}
;
async function _0x583438(_0x3eb671) {
    var _0x6f4631 = _0x3eb671[0x1]['split'](':');
    const _0x14d19c = await _0x5f424d['launch']({
        'headless': !![],
        'args': ['--proxy-server=' + _0x6f4631[0x0] + ':' + _0x6f4631[0x1] + ',--no-sandbox\x27,\x0a\x20\x20\x20\x20\x20\x20\x27--disable-setuid-sandbox,--force-device-scale-factor=0.3']
    });
    try {
        const _0xa5a5df = await _0x14d19c['newPage']();
        await _0xa5a5df['authenticate']({
            'username': '' + _0x6f4631[0x2],
            'password': '' + _0x6f4631[0x3]
        }), console['log'](_0x10f5d5() + '\x20[' + _0x4b4650[taskModule]['name'] + ']\x20Afew\x20Scraper\x20started'), await _0xa5a5df['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0xa5a5df['setRequestInterception'](!![]), _0xa5a5df['on']('request', _0x1d792a => {
            _0x1d792a['resourceType']() === 'image' || _0x1d792a['resourceType']() === 'font' || _0x1d792a['resourceType']() === 'media' ? _0x1d792a['abort']() : _0x1d792a['continue']();
        }), await _0xa5a5df['goto']('https://en.afew-store.com/collections/sneaker-raffles'), console['log'](_0x10f5d5() + '\x20[' + _0x4b4650[taskModule]['name'] + ']\x20Looking\x20for\x20Raffles'), await _0xa5a5df['waitForTimeout'](0xbb8), await _0xa5a5df['waitForSelector']('.product-card');
        const _0x32e290 = await _0xa5a5df['$$eval']('a.product-card', _0x389c3d => {
            return _0x389c3d['map'](_0xb321cf => _0xb321cf['href']);
        });
        return _0xf5324b = _0x32e290;
    } catch (_0x801702) {
        console['log']('\x20' + _0x801702);
    } finally {
        _0x14d19c['close'](), console['clear']();
    }
}
;
async function _0x4616b8(_0x4bd35d, _0x59114d) {
    _0x5f424d['use'](_0x456420()), _0x5f424d['use'](_0x5787c4({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x91debc['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x5bb889 = 0x0; _0x5bb889 < bouncewear['length']; _0x5bb889++) {
        await _0x3a2fba(bouncewear, _0x5bb889);
        if (bouncewear[_0x5bb889]['Email'] == '' || bouncewear[_0x5bb889]['Password'] == '' || bouncewear[_0x5bb889]['FirstName'] == '' || bouncewear[_0x5bb889]['LastName'] == '') {
            console['log'](_0x10f5d5() + '\x20[' + _0x4b4650[taskModule]['name'] + ']\x20Task\x20' + (_0x5bb889 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x91debc['useRandomProxy'] = ![])
            var _0x2473a6 = _0x1e8ff3()[_0x5bb889]['split'](':');
        else
            var _0x14b989 = Math['round'](Math['random']() * (_0x1e8ff3()['length'] - 0x1)), _0x2473a6 = _0x1e8ff3()[_0x14b989]['split'](':');
        const _0x5473fe = await _0x5f424d['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x2473a6[0x0] + ':' + _0x2473a6[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x4f828d = await _0x5473fe['newPage']();
            await _0x4f828d['authenticate']({
                'username': '' + _0x2473a6[0x2],
                'password': '' + _0x2473a6[0x3]
            }), console['log'](_0x10f5d5() + '\x20[' + _0x59114d['name'] + ']\x20Task\x20' + (_0x5bb889 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x4f828d['setRequestInterception'](!![]), _0x4f828d['on']('request', _0x3895fc => {
                _0x3895fc['resourceType']() === 'image' || _0x3895fc['resourceType']() === 'font' || _0x3895fc['resourceType']() === 'media' ? _0x3895fc['abort']() : _0x3895fc['continue']();
            }), await _0x4f828d['goto'](_0x4bd35d), await _0x3f09d6(0xbb8), await _0x4f828d['waitForSelector']('#RegisterForm-FirstName'), console['log'](_0x10f5d5() + '\x20[' + _0x59114d['name'] + ']\x20Task\x20' + (_0x5bb889 + 0x1) + '\x20:\x20Filling\x20information'), await _0x4f828d['type']('#RegisterForm-FirstName', '' + bouncewear[_0x5bb889]['FirstName']), await _0x3f09d6(0x226), await _0x4f828d['type']('#RegisterForm-LastName', '' + bouncewear[_0x5bb889]['LastName']), await _0x3f09d6(0x226), await _0x4f828d['type']('#RegisterForm-email', '' + bouncewear[_0x5bb889]['Email']), await _0x3f09d6(0x226), await _0x4f828d['type']('#RegisterForm-password', '' + bouncewear[_0x5bb889]['Password']), await _0x3f09d6(0x226), await _0x4f828d['click']('#marketing'), console['log'](_0x10f5d5() + '\x20[' + _0x59114d['name'] + ']\x20Task\x20' + (_0x5bb889 + 0x1) + '\x20:\x20Submitting..'), await _0x4f828d['$eval']('#RegisterForm', _0x38176b => _0x38176b['submit']()), await _0x3f09d6(0x1f40), console['log'](_0x10f5d5() + '\x20[' + _0x59114d['name'] + ']\x20Task\x20' + (_0x5bb889 + 0x1) + '\x20:\x20Solving\x20Captcha'), await _0x4f828d['solveRecaptchas'](), await _0x4f828d['click']('.shopify-challenge__button.btn');
            async function _0x2e98ba() {
                for (var _0x4ddb96 = 0x0; _0x4ddb96 < 0x4; _0x4ddb96++) {
                    try {
                        console['log']('try'), await _0x4f828d['waitForSelector']('.shopify-challenge__error', { 'timeout': 0x1388 }), console['log'](_0x10f5d5() + '\x20[' + _0x59114d['name'] + ']\x20Task\x20' + (_0x5bb889 + 0x1) + '\x20:\x20' + _0x43af63['red']('Catpcha\x20failed,\x20retrying..')), await _0x4f828d['solveRecaptchas'](), await _0x4f828d['click']('.shopify-challenge__button.btn');
                    } catch {
                        console['log']('catch');
                        break;
                    }
                }
            }
            await _0x2e98ba(), console['log'](_0x10f5d5() + '\x20[' + _0x59114d['name'] + ']\x20Task\x20' + (_0x5bb889 + 0x1) + '\x20:\x20Captcha\x20Solved'), await _0x3f09d6(0x1f4);
            try {
                await _0x4f828d['waitForSelector']('.featured-title'), await _0x3f09d6(0x1f4), console['log'](_0x43af63['green'](_0x10f5d5() + '\x20[' + _0x59114d['name'] + ']\x20Task\x20' + (_0x5bb889 + 0x1) + '\x20:\x20Account\x20' + bouncewear[_0x5bb889]['Email'] + '\x20Generated!')), _0x48dad3['appendFileSync']('../accounts/bouncewear.csv', '\x0a' + bouncewear[_0x5bb889]['Email'] + ',' + bouncewear[_0x5bb889]['Password']), console['log'](_0x43af63['yellow'](_0x10f5d5() + '\x20[' + _0x59114d['name'] + ']\x20Task\x20' + (_0x5bb889 + 0x1) + '\x20:\x20Account\x20' + bouncewear[_0x5bb889]['Email'] + '\x20Saved\x20in\x20\x27accounts/bouncewear.csv\x27'));
            } catch (_0x4570de) {
                console['log'](_0x43af63['red'](_0x10f5d5() + '\x20[' + _0x4b4650[taskModule]['name'] + ']\x20Task\x20' + (_0x5bb889 + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x4570de));
            }
        } catch (_0x11eec8) {
            console['log'](_0x43af63['red'](_0x10f5d5() + '\x20[' + _0x4b4650[taskModule]['name'] + ']\x20Task\x20' + (_0x5bb889 + 0x1) + '\x20:\x20' + _0x11eec8));
        } finally {
            _0x5473fe && _0x5473fe['close'](), console['log']('Waiting\x20for\x20' + _0x91debc['delay'] + '\x20ms'), await _0x3f09d6(_0x91debc['delay']);
        }
    }
}
async function _0x57b38b(_0x5f2cd1, _0x36065d, _0x32ba5b) {
    _0x5f424d['use'](_0x456420()), _0x5f424d['use'](_0x5787c4({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x91debc['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x5c9c30 = 0x0; _0x5c9c30 < _0x36065d['length']; _0x5c9c30++) {
        _0x9f406c(_0x5f2cd1['name'] + '\x20Task\x20' + (_0x5c9c30 + 0x1) + '\x20/\x20' + _0x36065d['length'] + '\x20||\x20File:\x20' + _0x33c890 + '\x20Proxies:\x20' + _0x19246b);
        var _0x5cbc64 = [{
            'type': 'rich',
            'title': 'Succesful\x20SevenStore\x20Entry',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x52fb85
                },
                {
                    'name': 'Product',
                    'value': '' + _0x36065d[_0x5c9c30]['Url']
                },
                {
                    'name': 'Size',
                    'value': '' + _0x36065d[_0x5c9c30]['Size']
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x91debc['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x91debc['version']
                }
            ]
        }];
        const _0x6b531e = { 'embeds': _0x5cbc64 };
        await _0x3a2fba(_0x36065d, _0x5c9c30);
        if (_0x36065d[_0x5c9c30]['Email'] == '' || _0x36065d[_0x5c9c30]['Password'] == '' || _0x36065d[_0x5c9c30]['FirstName'] == '' || _0x36065d[_0x5c9c30]['LastName'] == '') {
            console['log'](_0x10f5d5() + '\x20[' + _0x5f2cd1['name'] + ']\x20Task\x20' + (_0x5c9c30 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        (_0x36065d[_0x5c9c30]['Password'] == '' || _0x36065d[_0x5c9c30]['Password'] == undefined) && (_0x36065d[_0x5c9c30]['Password'] = 'ErehsaWonRaj1!');
        if (_0x91debc['useRandomProxy'] = ![])
            var _0x1f23af = _0x32ba5b[_0x5c9c30]['split'](':');
        else
            var _0x1daa2b = Math['round'](Math['random']() * (_0x32ba5b['length'] - 0x1)), _0x1f23af = _0x32ba5b[_0x1daa2b]['split'](':');
        const _0x5c4972 = await _0x5f424d['launch']({
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x1f23af[0x0] + ':' + _0x1f23af[0x1],
                '--no-sandbox',
                '--incognito',
                '--disable-web-security',
                '--disable-features=IsolateOrigins',
                '\x20--disable-site-isolation-trials',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x30a403 = await _0x5c4972['newPage']();
            await _0x30a403['authenticate']({
                'username': '' + _0x1f23af[0x2],
                'password': '' + _0x1f23af[0x3]
            }), console['log'](_0x10f5d5() + '\x20[' + _0x5f2cd1['name'] + ']\x20Task\x20' + (_0x5c9c30 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x30a403['setRequestInterception'](!![]), _0x30a403['on']('request', _0x34bb8c => {
                _0x34bb8c['resourceType']() === 'image' || _0x34bb8c['resourceType']() === 'font' || _0x34bb8c['resourceType']() === 'media' ? _0x34bb8c['abort']() : _0x34bb8c['continue']();
            }), await _0x30a403['setViewport']({
                'width': 0x500,
                'height': 0x2d0
            }), await _0x30a403['goto']('' + _0x36065d[_0x5c9c30]['Url'], {
                'waitUntil': 'networkidle2',
                'timeout': 0x1d4c0
            }), await _0x30a403['waitForSelector']('#btnPdpAtb'), console['log'](_0x10f5d5() + '\x20[' + _0x5f2cd1['name'] + ']\x20Task\x20' + (_0x5c9c30 + 0x1) + '\x20:\x20Choosing\x20size\x20' + _0x36065d[_0x5c9c30]['Size']);
            const _0x1e067e = await _0x30a403['$$eval']('div.pointer.pdpsizeoption.f-12.f-color3', _0x1be310 => {
                return _0x1be310['map'](_0x4de796 => _0x4de796['innerText']);
            }), _0x44c2ca = await _0x30a403['$$']('div.pointer.pdpsizeoption.f-12.f-color3'), _0x2387d0 = ![];
            if (_0x36065d[_0x5c9c30]['Size'] == 'RANDOM') {
                var _0x5932c7 = Math['round'](Math['random']() * (_0x44c2ca['length'] - 0x1));
                await _0x44c2ca[_0x5932c7]['click']();
            } else
                for (var _0x9d43f5 = 0x0; _0x9d43f5 < _0x1e067e['length']; _0x9d43f5++) {
                    if (_0x1e067e[_0x9d43f5] != _0x36065d[_0x5c9c30]['Size'])
                        continue;
                    try {
                        await _0x44c2ca[_0x9d43f5]['click']();
                    } catch {
                        console['log'](_0x43af63['red'](_0x10f5d5() + '\x20[' + _0x5f2cd1['name'] + ']\x20Task\x20' + (_0x5c9c30 + 0x1) + '\x20:\x20Size\x20Not\x20Found')), _0x2387d0 = !![];
                    }
                }
            if (_0x2387d0)
                continue;
            await _0x3f09d6(0x578), await _0x30a403['click']('#btnPdpAtb'), await _0x30a403['waitForSelector']('.fa.fa-check-circle.f-color8.f-30.valign-middle-important'), await _0x3f09d6(0x3e8), console['log'](_0x10f5d5() + '\x20[' + _0x5f2cd1['name'] + ']\x20Task\x20' + (_0x5c9c30 + 0x1) + '\x20:\x20Getting\x20Checkout\x20Session'), await _0x30a403['goto']('https://www.sevenstore.com/login/?target=checkout'), await _0x30a403['waitForSelector']('#email'), await _0x30a403['type']('#email', _0x36065d[_0x5c9c30]['Email']), await _0x3f09d6(0x226), await _0x30a403['click']('#guest-submit'), await _0x3f09d6(0x1b58), console['log'](_0x10f5d5() + '\x20[' + _0x5f2cd1['name'] + ']\x20Task\x20' + (_0x5c9c30 + 0x1) + '\x20:\x20Filling\x20Information'), await _0x30a403['waitForSelector']('#firstname'), await _0x30a403['type']('#firstname', _0x36065d[_0x5c9c30]['FirstName'], 0x1f4), await _0x3f09d6(0x190), await _0x30a403['waitForSelector']('#surname'), await _0x30a403['type']('#surname', _0x36065d[_0x5c9c30]['LastName'], 0x1f4), await _0x3f09d6(0x190), await _0x30a403['waitForSelector']('#mobile'), await _0x30a403['type']('#mobile', _0x36065d[_0x5c9c30]['Phone'], 0x1f4), await _0x3f09d6(0x190), await _0x30a403['click']('#enterManualDiv'), await _0x3f09d6(0x5dc), await _0x30a403['waitForSelector']('#address1'), await _0x30a403['type']('#address1', _0x36065d[_0x5c9c30]['Address1'] + '\x20' + _0x36065d[_0x5c9c30]['HouseNumber'], 0x226), await _0x3f09d6(0x384), await _0x30a403['waitForSelector']('#address2'), await _0x30a403['type']('#address2', '' + _0x36065d[_0x5c9c30]['Address2'], 0x226), await _0x3f09d6(0x320);
            const _0xd755a5 = await _0x30a403['$$eval']('#countryselect_view3\x20>\x20option', _0x2deae9 => {
                return _0x2deae9['map'](_0x1e18a6 => _0x1e18a6['value']);
            });
            var _0x57f6a9;
            for (var _0x1ae2cd = 0x0; _0x1ae2cd < _0xd755a5['length']; _0x1ae2cd++) {
                if (_0xd755a5[_0x1ae2cd]['startsWith']('' + _0x36065d[_0x5c9c30]['Country'])) {
                    _0x57f6a9 = _0xd755a5[_0x1ae2cd];
                    break;
                }
                continue;
            }
            await _0x30a403['select']('#countryselect_view3', '' + _0x57f6a9), await _0x30a403['waitForSelector']('#address4'), await _0x30a403['type']('#address4', '' + _0x36065d[_0x5c9c30]['City'], 0x1f4), await _0x3f09d6(0x384), await _0x30a403['waitForSelector']('#postcode'), await _0x30a403['type']('#postcode', '' + _0x36065d[_0x5c9c30]['Zip'], 0x1f4), await _0x3f09d6(0x4b0);
            const _0x26ec62 = await _0x30a403['url']();
            console['log'](_0x10f5d5() + '\x20[' + _0x5f2cd1['name'] + ']\x20Task\x20' + (_0x5c9c30 + 0x1) + '\x20:\x20Submitting\x20Entry');
            const _0x11f2ec = _0x26ec62['split']('?')[0x1], _0x1ca6ad = await _0x30a403['$']('#co_address_submit');
            await _0x1ca6ad['evaluate'](_0x9a67a6 => _0x9a67a6['click']()), await _0x3f09d6(0x1388), await _0x30a403['goto']('https://www.sevenstore.com/checkout/pay/?' + _0x11f2ec), console['log'](_0x10f5d5() + '\x20[' + _0x5f2cd1['name'] + ']\x20Task\x20' + (_0x5c9c30 + 0x1) + '\x20:\x20Getting\x20Payment\x20session'), await _0x30a403['waitForSelector']('#paymentbuttons'), await _0x3f09d6(0x1388), await _0x30a403['click']('#paymentbuttons\x20>\x20div'), await _0x3f09d6(0x1c2), await _0x30a403['waitForSelector']('#card-number'), await _0x30a403['waitForSelector']('#card-number\x20>\x20div\x20>\x20iframe');
            const _0x287d35 = await _0x30a403['$']('#card-number\x20>\x20div\x20>\x20iframe'), _0x81326c = await _0x287d35['contentFrame']();
            await _0x81326c['waitForSelector']('.InputContainer'), await _0x81326c['click']('.InputContainer\x20>\x20input'), await _0x3f09d6(0x578), await _0x30a403['type']('#card-number', '' + _0x36065d[_0x5c9c30]['CreditNumber']), await _0x3f09d6(0xfa), await _0x30a403['type']('#card-expiry', '' + _0x36065d[_0x5c9c30]['ExpiryDate']), await _0x3f09d6(0xfa), await _0x30a403['type']('#card-cvc', '' + _0x36065d[_0x5c9c30]['CVV']), await _0x3f09d6(0x7d0), await _0x30a403['click']('#card-button'), console['log'](_0x10f5d5() + '\x20[' + _0x5f2cd1['name'] + ']\x20Task\x20' + (_0x5c9c30 + 0x1) + '\x20:\x20Awaiting\x203DS');
            try {
                await _0x30a403['waitForSelector']('.btn-auxilliary.btn-sub.fullwidth', { 'timeout': 0x493e0 }), console['log'](_0x43af63['green'](_0x10f5d5() + '\x20[' + _0x5f2cd1['name'] + ']\x20Task\x20' + (_0x5c9c30 + 0x1) + '\x20:\x20Raffle\x20Entered!')), await _0x325d88(_0x1b7c81, _0x6b531e);
            } catch {
                console['log'](_0x43af63['red'](_0x10f5d5() + '\x20[' + _0x5f2cd1['name'] + ']\x20Task\x20' + (_0x5c9c30 + 0x1) + '\x20:\x203DS\x20Failed')), _0x5cbc64[0x0]['title'] = 'Failed\x20Seven\x20Entry', _0x5cbc64[0x0]['description'] = '3DS\x20Failed', await _0x325d88(_0x13fc34, _0x6b531e);
            }
        } catch (_0x4ee050) {
            console['log'](_0x43af63['red'](_0x10f5d5() + '\x20[' + _0x5f2cd1['name'] + ']\x20Task\x20' + (_0x5c9c30 + 0x1) + '\x20:\x20' + _0x4ee050)), _0x5cbc64[0x0]['title'] = 'Failed\x20Seven\x20Entry', _0x5cbc64[0x0]['description'] = '' + _0x4ee050, await _0x325d88(_0x13fc34, _0x6b531e);
        } finally {
            _0x5c4972 && _0x5c4972['close']();
            if (_0x5c9c30 + 0x1 == _0x36065d['length']) {
                console['log'](_0x43af63['green']('Finished\x20tasks,\x20returning\x20to\x20Main\x20Menu')), await _0x3f09d6(0x7d0);
                break;
            }
            console['log']('Waiting\x20for\x20' + _0x91debc['AfewDelay'] + '\x20ms'), await _0x3f09d6(_0x91debc['AfewDelay']);
        }
    }
}
async function _0x2b76b7(_0x380bb8, _0x47cf81, _0x44bfaa, _0x59a058, _0x40b84f) {
    var _0x1081c0, _0x20db42 = {}, _0x586c0f = [], _0x2b1ea6 = {}, _0x311a22 = [
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
    ];
    !_0x59a058 && (_0x59a058 = {});
    if (_0x47cf81 != 'ver') {
        _0x9f406c(_0x44bfaa['name'] + '\x20Task\x20' + (_0x380bb8 + 0x1) + '\x20/\x20' + _0x59a058['length'] + '\x20||\x20File:\x20' + _0x33c890 + '\x20Proxies:\x20' + _0x19246b), await _0x3a2fba(_0x59a058, _0x380bb8), _0x586c0f = [{
            'type': 'rich',
            'title': 'Succesful\x20OQIUM\x20Entry',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x52fb85
                },
                {
                    'name': 'Size',
                    'value': '' + _0x59a058[_0x380bb8]['Size']
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x91debc['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x1e9692
                }
            ]
        }], _0x2b1ea6 = { 'embeds': _0x586c0f }, _0x20db42 = _0x44bfaa['data'];
        _0x47cf81 == 'exp' ? _0x20db42['data']['attributes']['email'] = '' + _0x59a058[_0x380bb8]['FirstName'] + _0x59a058[_0x380bb8]['LastName'] + _0x91debc['catchall'] : _0x20db42['data']['attributes']['email'] = '' + _0x59a058[_0x380bb8]['Email'];
        if (_0x59a058[_0x380bb8]['Size'] == 'RANDOM') {
        }
        _0x20db42['data']['attributes']['properties']['$first_name'] = '' + _0x59a058[_0x380bb8]['FirstName'], _0x20db42['data']['attributes']['properties']['$last_name'] = '' + _0x59a058[_0x380bb8]['LastName'], _0x20db42['data']['attributes']['properties']['$address1'] = _0x59a058[_0x380bb8]['Address1'] + '\x20' + _0x59a058[_0x380bb8]['Address2'] + '\x20' + _0x59a058[_0x380bb8]['HouseNumber'], _0x20db42['data']['attributes']['properties']['$zip'] = '' + _0x59a058[_0x380bb8]['Zip'], _0x20db42['data']['attributes']['properties']['$city'] = '' + _0x59a058[_0x380bb8]['City'], _0x20db42['data']['attributes']['properties']['$country'] = '' + _0x59a058[_0x380bb8]['Country'], _0x20db42['data']['attributes']['properties']['Size'] = '' + _0x59a058[_0x380bb8]['Size'], _0x20db42['data']['attributes']['properties']['$phone_number'] = '' + _0x59a058[_0x380bb8]['Phone'], _0x20db42['data']['attributes']['properties']['Instagram\x20Account'] = '' + _0x59a058[_0x380bb8]['Follower'];
    }
    if (_0x91debc['useRandomProxy'] = ![])
        var _0x32aa8c = _0x40b84f[_0x380bb8]['split'](':');
    else
        var _0xb1279 = Math['round'](Math['random']() * (_0x40b84f['length'] - 0x1)), _0x32aa8c = _0x40b84f[_0xb1279]['split'](':');
    var _0x369519 = {
        'jar': _0x3bf13d,
        'followAllRedirects': !![],
        'method': 'POST',
        'url': _0x44bfaa['url'],
        'headers': _0x44bfaa['headers'],
        'body': JSON['stringify'](_0x20db42),
        'proxy': 'http://' + _0x32aa8c[0x2] + ':' + _0x32aa8c[0x3] + '@' + _0x32aa8c[0x0] + ':' + _0x32aa8c[0x1]
    };
    return _0x47cf81 != 'ver' && (_0x369519['url'] = _0x44bfaa['url'], _0x369519['headers'] = _0x44bfaa['headers']), _0x47cf81 == 'ver' && (_0x369519['method'] = 'GET'), new Promise(function (_0x498512, _0x3e46bf) {
        callback = async (_0x39ed78, _0x41e25f, _0x320e80) => {
            if (!_0x39ed78 && _0x41e25f['statusCode'] == 0xca || !_0x39ed78 && _0x41e25f['statusCode'] == 0xc8) {
                if (_0x47cf81 != 'ver') {
                    var _0x23eada = await _0x19f655(_0x59a058[_0x380bb8], _0x44bfaa, 'dev', ![]), _0x4cd44a = await _0x19f655(_0x59a058[_0x380bb8], _0x44bfaa, 'pub', ![]);
                    const _0x4a0699 = {
                        'succesDEVMSG': { 'embeds': [_0x23eada] },
                        'succesPUBMSG': { 'embeds': [_0x4cd44a] }
                    };
                    if (_0x91debc['webhook'] != undefined && _0x91debc['webhook'] != '')
                        try {
                            await _0x325d88(_0x91debc['webhook'], _0x4a0699['succesDEVMSG']);
                        } catch {
                        }
                    await _0x3f09d6(0xc8), await _0x325d88(_0x1b7c81, _0x4a0699['succesDEVMSG']), await _0x3f09d6(0xc8);
                    try {
                        await _0x325d88(_0x48b9ae, _0x4a0699['succesPUBMSG']);
                    } catch {
                    }
                    _0x1b4968(_0x59a058[_0x380bb8], _0x44bfaa);
                }
                _0x498512(console['log'](_0x43af63['green'](_0x10f5d5() + '\x20[' + _0x44bfaa['name'] + ']\x20Task\x20' + (_0x380bb8 + 0x1) + ':\x20Raffle\x20Entered!')));
            } else {
                if (_0x47cf81 != 'ver') {
                    var _0x53968e = '' + _0x39ed78, _0x5d3e4c = await _0x19f655(_0x59a058[_0x380bb8], _0x44bfaa, 'dev', !![], _0x53968e), _0x30419f = {};
                    _0x30419f['errorDEV'] = { 'embeds': [_0x5d3e4c] }, _0x3d3128(_0x59a058[_0x380bb8], _0x44bfaa), _0x91debc['webhook'] != undefined && _0x91debc['webhook'] != '' && await _0x325d88(_0x91debc['webhook'], _0x30419f['errorDEV']), await _0x325d88(_0x13fc34, _0x30419f['errorDEV']);
                }
                _0x3e46bf(console['log'](_0x10f5d5() + '\x20[' + _0x44bfaa['name'] + ']\x20Task\x20' + (_0x380bb8 + 0x1) + ':\x20' + _0x39ed78));
            }
        };
        try {
            _0x47cf81 != 'ver' && console['log'](_0x10f5d5() + '\x20[' + _0x44bfaa['name'] + ']\x20Task\x20' + (_0x380bb8 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x20db42['data']['attributes']['email']), _0xaea765(_0x369519, callback);
        } catch (_0x299b6e) {
            console['log'](_0x10f5d5() + '\x20Task\x20' + (_0x380bb8 + 0x1) + ':\x20' + _0x299b6e);
        }
    });
}
;
async function _0x34abb7(_0x265807, _0x460d0d) {
    if (_0x187509 != 'yes')
        var _0x187509 = '', _0x56905d = 0x0;
    var _0xad6cfe = [];
    async function _0x388ea3() {
        console['log']('How\x20many\x20links\x20would\x20you\x20like\x20to\x20verify?');
        var _0x33d2fd = await _0x2b5c54['get']('Quantity')['Quantity'], _0x5acf18 = new _0x328bb9({
            'user': _0x91debc['masterMail'],
            'password': _0x91debc['masterPassword'],
            'host': 'imap.gmail.com',
            'port': 0x3e1,
            'tls': !![],
            'autotls': 'always'
        });
        function _0x4ca2dc(_0xb2496b) {
            _0x5acf18['openBox']('INBOX', ![], _0xb2496b);
        }
        _0x5acf18['once']('ready', function () {
            _0x4ca2dc(function (_0x2f65d4, _0x426817) {
                console['clear'](), console['log']('Looking\x20For\x20Links');
                if (_0x2f65d4)
                    throw _0x2f65d4;
                _0x5acf18['seq']['search']([
                    'UNSEEN',
                    [
                        'SUBJECT',
                        'PayPal'
                    ]
                ], function (_0x346720, _0x488942) {
                    if (!_0x488942 || !_0x488942['length'])
                        console['log'](_0x10f5d5() + '\x20[' + _0x265807['name'] + ']\x20No\x20mails\x20found'), _0x5acf18['end']();
                    else {
                        var _0x1d5d5c = _0x5acf18['seq']['fetch'](_0x488942, {
                            'bodies': '',
                            'markSeen': !![]
                        });
                        _0x1d5d5c['on']('message', function (_0x285ff9, _0xd31210) {
                            var _0x53b854 = '(#' + _0xd31210 + ')\x20';
                            _0x285ff9['on']('body', function (_0x5e8185, _0x5d4c43) {
                                _0x235caf(_0x5e8185, (_0x5487e5, _0x4f8deb) => {
                                    if (_0x4f8deb['subject'] == 'PayPal\x20Konto\x20bestätigen' || _0x4f8deb['subject'] == 'Confirm\x20your\x20PayPal\x20account') {
                                        mes = _0x4f8deb['text']['split']('[')[0x2];
                                        var _0x2b31d3 = mes['split'](']')[0x0];
                                        _0xad6cfe['push'](_0x2b31d3);
                                    }
                                });
                            }), _0x285ff9['once']('end', function () {
                            });
                        }), _0x1d5d5c['once']('error', function (_0x432977) {
                            console['log']('Fetch\x20error:\x20' + _0x432977);
                        }), _0x1d5d5c['once']('end', function () {
                            _0x5acf18['end']();
                        });
                    }
                });
            });
        }), _0x5acf18['once']('error', function (_0x55b238) {
            console['log'](_0x43af63['red'](_0x55b238['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox');
        }), _0x5acf18['once']('end', async function () {
        }), _0x5acf18['connect']();
    }
    try {
        _0x388ea3(), await _0x3f09d6(0xfa0), console['log']('Found\x20' + _0xad6cfe['length'] + '\x20Links\x20in\x20Mailbox');
    } catch {
        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..'), await _0x3f09d6(0xfa0);
    }
    var _0x1aec84;
    _0x9f406c('' + _0x265807);
    var _0x14fcf3 = _0x460d0d[0x0]['split'](':'), _0x55bf0b;
    try {
        _0x55bf0b = await _0x5f424d['launch']({
            'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x14fcf3[0x0] + ':' + _0x14fcf3[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
    } catch {
        _0x55bf0b = await _0x5f424d['launch']({
            'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x14fcf3[0x0] + ':' + _0x14fcf3[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
    }
    try {
        console['log'](_0x10f5d5() + '\x20[' + _0x265807 + ']\x20Getting\x20Session');
        const _0x567c4d = await _0x55bf0b['newPage']();
        await _0x567c4d['authenticate']({
            'username': '' + _0x14fcf3[0x2],
            'password': '' + _0x14fcf3[0x3]
        }), await _0x567c4d['setViewport']({
            'width': 0x230,
            'height': 0x2d0
        }), await _0x567c4d, await _0x567c4d['goto']('https://www.paypal.com/signin');
        try {
            console['log'](_0x10f5d5() + '\x20[' + _0x265807 + ']\x20Log\x20in\x20to\x20your\x20Paypal\x20account..'), await _0x567c4d['waitForSelector']('#cwBalance', { 'timeout': 0x493e0 }), console['log'](_0x10f5d5() + '\x20[' + _0x265807 + ']\x20Successfully\x20logged\x20in'), await _0x3f09d6(0x2710);
        } catch (_0x4dc9b9) {
            throw new Error('Login\x20session\x20expired\x20' + _0x4dc9b9);
        }
        for (var _0x4ff114 = 0x0; _0x4ff114 < _0xad6cfe['length']; _0x4ff114++) {
            console['log'](_0x10f5d5() + '\x20[' + _0x265807 + ']\x20Task\x20' + (_0x4ff114 + 0x1) + '\x20:\x20Starting\x20Verification'), _0x9f406c(_0x265807 + '\x20Task\x20' + (_0x4ff114 + 0x1) + '\x20/\x20' + _0xad6cfe['length']);
            const _0x251d02 = await _0x55bf0b['newPage']();
            await _0x251d02['goto']('' + _0xad6cfe[_0x4ff114], { 'waitUntil': 'networkidle2' }), await _0x3f09d6(0xbb8);
            try {
                const _0x59aeb1 = await _0x251d02['$']('#challenge-heading');
                _0x59aeb1 && (console['log'](_0x10f5d5() + '\x20[' + _0x265807 + ']\x20Task\x20' + (_0x4ff114 + 0x1) + '\x20:\x20' + _0x43af63['yellow']('2FA\x20Required')), await _0x251d02['waitForSelector']('.CheckoutButton_buttonWrapper_2VloF', { 'timeout': 0x493e0 }));
                await _0x3f09d6(0x9c40), await _0x251d02['waitForSelector']('#payment-submit-btn'), await _0x251d02['$eval']('#payment-submit-btn', _0x6dd17b => _0x6dd17b['click']()), await _0x251d02['click']('#payment-submit-btn');
                try {
                    await _0x251d02['waitForSelector']('img[alt=\x22AFEW\x20STORE\x22]'), await _0x3f09d6(0x5dc), console['log'](_0x43af63['green'](_0x10f5d5() + '\x20[' + _0x265807 + ']\x20Task\x20' + (_0x4ff114 + 0x1) + '\x20:\x20Link\x20Verified'));
                } catch (_0x4f9c5c) {
                    _0x187509 = 'yes';
                    throw new Error('Payment\x20Rejected:\x20' + _0x4f9c5c['message']);
                } finally {
                    if (_0x187509 == 'yes' && _0x56905d != 0x2) {
                        console['log'](_0x43af63['red'](_0x10f5d5() + '\x20[' + _0x265807['name'] + ']\x20Task\x20' + (_0x4ff114 + 0x1) + '\x20:\x20Retrying\x20(' + _0x56905d + '\x20/\x205)')), _0x4ff114 = _0x4ff114 - 0x1, _0x56905d = _0x56905d + 0x1;
                        continue;
                    }
                    _0x187509 == 'yes' && _0x56905d >= 0x2 && (_0x3d3128(csv[_0x4ff114], _0x265807), _0x187509 = 'no', _0x56905d = 0x0), await _0x251d02['close'](), await _0x3f09d6(0x4650);
                }
            } catch (_0x138ae9) {
                console['log'](_0x43af63['red'](_0x10f5d5() + '\x20[' + _0x265807 + ']\x20Task\x20' + (_0x4ff114 + 0x1) + '\x20:\x20' + _0x138ae9));
            }
        }
    } catch (_0x33881a) {
        console['log'](_0x43af63['red']('' + _0x33881a));
    } finally {
        await _0x55bf0b['close']();
    }
}
const _0x4b4650 = [
    {
        'name': '4ELEMENTOS',
        'modules': [
            {
                'name': '4ELEMENTOS\x20Raffle\x20Entries',
                'store': '4ELEMENTOS',
                'logo': 'https://cdn.lovesavingsgroup.com/logos/4elementos.jpg',
                'function': async function (_0x5c4bc7, _0x24fc0b, _0x2348ff) {
                    _0x5f424d['use'](_0x456420()), _0x5f424d['use'](_0x5787c4({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x91debc['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x3b2edc = 0x0; _0x3b2edc < _0x24fc0b['length']; _0x3b2edc++) {
                        if (_0x1ab346 != 'yes')
                            var _0x1ab346 = '', _0x5691e6 = 0x0;
                        var _0x521bf8;
                        try {
                            await _0x3a2fba(_0x24fc0b, _0x3b2edc);
                        } catch {
                            _0x1ab346 = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        _0x9f406c(_0x5c4bc7['name'] + '\x20Task\x20' + (_0x3b2edc + 0x1) + '\x20/\x20' + _0x24fc0b['length'] + '\x20||\x20File:\x20' + _0x33c890 + '\x20Proxies:\x20' + _0x19246b);
                        var _0x5dddcd = [
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
                        ], _0x5dc17a = Math['round'](Math['random']() * (_0x5dddcd['length'] - 0x1));
                        _0x24fc0b[_0x3b2edc]['Size'] == 'RANDOM' && (_0x24fc0b[_0x3b2edc]['Size'] = _0x5dddcd[_0x5dc17a]);
                        var _0x155d59 = Math['round'](Math['random']() * (_0x2348ff['length'] - 0x1)), _0x206a6c = _0x2348ff[_0x155d59]['split'](':'), _0x256fd0;
                        try {
                            _0x256fd0 = await _0x5f424d['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x206a6c[0x0] + ':' + _0x206a6c[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x256fd0 = await _0x5f424d['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x206a6c[0x0] + ':' + _0x206a6c[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            console['log'](_0x10f5d5() + '\x20[' + _0x5c4bc7['name'] + ']\x20Task\x20' + (_0x3b2edc + 0x1) + '\x20:\x20Getting\x20Session');
                            const _0x52dc11 = await _0x256fd0['newPage']();
                            await _0x52dc11['authenticate']({
                                'username': '' + _0x206a6c[0x2],
                                'password': '' + _0x206a6c[0x3]
                            }), await _0x52dc11['setRequestInterception'](!![]), _0x52dc11['on']('request', _0x4c036b => {
                                _0x4c036b['resourceType']() === 'image' || _0x4c036b['resourceType']() === 'font' || _0x4c036b['resourceType']() === 'media' ? _0x4c036b['abort']() : _0x4c036b['continue']();
                            }), await _0x52dc11['goto'](_0x24fc0b[_0x3b2edc]['Url'], { 'waitUntil': 'networkidle2' }), console['log'](_0x10f5d5() + '\x20[' + _0x5c4bc7['name'] + ']\x20Task\x20' + (_0x3b2edc + 0x1) + '\x20:\x20Starting\x20Entry'), await _0x52dc11['waitForSelector']('#accept-all-gdpr'), await _0x52dc11['click']('#accept-all-gdpr'), await _0x52dc11['waitForSelector']('#raffles-product'), await _0x3f09d6(0x3e8), await _0x52dc11['$eval']('#raffles-product', _0x1c1571 => _0x1c1571['click']()), await _0x3f09d6(0x1388), await _0x52dc11['waitForSelector']('.fancybox-inner\x20>\x20iframe');
                            var _0x35fb50 = await _0x52dc11['$']('.fancybox-inner\x20>\x20iframe'), _0x33551d = await _0x35fb50['contentFrame']();
                            console['log'](_0x10f5d5() + '\x20[' + _0x5c4bc7['name'] + ']\x20Task\x20' + (_0x3b2edc + 0x1) + '\x20:\x20Checking\x20Information'), await _0x33551d['waitForSelector']('input[name=\x22sm-form-email\x22]'), await _0x3f09d6(0x1f4), await _0x33551d['type']('input[name=\x22sm-form-email\x22]', _0x24fc0b[_0x3b2edc]['Email']), await _0x3f09d6(0xc8), await _0x33551d['type']('input[name=\x22sm-form-name\x22]', _0x24fc0b[_0x3b2edc]['FirstName'] + '\x20' + _0x24fc0b[_0x3b2edc]['LastName']), await _0x3f09d6(0xc8), await _0x33551d['type']('input[name=\x22sm-form-street\x22]', _0x24fc0b[_0x3b2edc]['Address1'] + '\x20' + _0x24fc0b[_0x3b2edc]['HouseNumber'] + '\x20' + _0x24fc0b[_0x3b2edc]['Address2']), await _0x3f09d6(0xc8), await _0x33551d['type']('input[name=\x22sm-form-city\x22]', _0x24fc0b[_0x3b2edc]['City']), await _0x3f09d6(0xc8), await _0x33551d['type']('input[name=\x22sm-form-province\x22]', _0x24fc0b[_0x3b2edc]['State']), await _0x3f09d6(0xc8), await _0x33551d['type']('input[name=\x22sm-form-zip\x22]', _0x24fc0b[_0x3b2edc]['Zip']), await _0x3f09d6(0xc8), await _0x33551d['type']('input[name=\x22sm-form-country\x22]', _0x24fc0b[_0x3b2edc]['Country']), await _0x3f09d6(0xc8), await _0x33551d['type']('input[name=\x22sm-form-phone\x22]', _0x24fc0b[_0x3b2edc]['Phone']), await _0x3f09d6(0xc8), await _0x33551d['type']('input[name=\x22sm-cst.instagram_user\x22]', _0x24fc0b[_0x3b2edc]['Follower']), await _0x3f09d6(0xc8), await _0x33551d['type']('input[name=\x22sm-cst.size\x22]', _0x24fc0b[_0x3b2edc]['Size']), await _0x3f09d6(0x1f4), await _0x33551d['click']('.icheckbox_simple-custom.icheckbox--CONSENT'), await _0x3f09d6(0x1f4), await _0x33551d['click']('.icheckbox_simple-custom'), await _0x3f09d6(0x1f4), console['log'](_0x10f5d5() + '\x20[' + _0x5c4bc7['name'] + ']\x20Task\x20' + (_0x3b2edc + 0x1) + '\x20:\x20Sending\x20Request'), await _0x33551d['$eval']('form', _0x58965a => _0x58965a['submit']()), console['log'](_0x43af63['green'](_0x10f5d5() + '\x20[' + _0x5c4bc7['name'] + ']\x20Task\x20' + (_0x3b2edc + 0x1) + '\x20:\x20Raffle\x20Entered!')), _0x1ab346 = '';
                            var _0x23a5cd = await _0x19f655(_0x24fc0b[_0x3b2edc], _0x5c4bc7, 'dev', ![]), _0x520fa1 = await _0x19f655(_0x24fc0b[_0x3b2edc], _0x5c4bc7, 'pub', ![]);
                            const _0x40468f = {
                                'succesDEVMSG': { 'embeds': [_0x23a5cd] },
                                'succesPUBMSG': { 'embeds': [_0x520fa1] }
                            };
                            try {
                                _0x91debc['webhook'] != undefined && _0x91debc['webhook'] != '' && await _0x325d88(_0x91debc['webhook'], _0x40468f['succesDEVMSG']), await _0x3f09d6(0xc8), await _0x325d88(_0x1b7c81, _0x40468f['succesDEVMSG']), await _0x3f09d6(0xc8), await _0x325d88(_0x48b9ae, _0x40468f['succesPUBMSG']);
                            } catch (_0x362234) {
                                console['log'](_0x43af63['yellow'](_0x10f5d5() + '\x20[' + _0x5c4bc7['name'] + ']\x20Task\x20' + (_0x3b2edc + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x362234));
                            }
                        } catch (_0x1598a6) {
                            console['log'](_0x43af63['red'](_0x10f5d5() + '\x20[' + _0x5c4bc7['name'] + ']\x20Task\x20' + (_0x3b2edc + 0x1) + '\x20:\x20' + _0x1598a6)), _0x521bf8 = '' + _0x1598a6;
                            var _0x1910a4 = await _0x19f655(_0x24fc0b[_0x3b2edc], _0x5c4bc7, 'dev', !![], _0x521bf8), _0x23a5cd = await _0x19f655(_0x24fc0b[_0x3b2edc], _0x5c4bc7, 'dev', ![]), _0x520fa1 = await _0x19f655(_0x24fc0b[_0x3b2edc], _0x5c4bc7, 'pub', ![]);
                            const _0x2bf162 = {
                                'succesDEVMSG': { 'embeds': [_0x23a5cd] },
                                'succesPUBMSG': { 'embeds': [_0x520fa1] }
                            };
                            _0x2bf162['errorDEV'] = { 'embeds': [_0x1910a4] }, _0x91debc['webhook'] != undefined && _0x91debc['webhook'] != '' && await _0x325d88(_0x91debc['webhook'], _0x2bf162['errorDEV']), await _0x325d88(_0x13fc34, _0x2bf162['errorDEV']), _0x1598a6 != 'Error\x20sending\x20entry.\x20Check\x20if\x20duplicate,\x20or\x20proxies.' && (_0x1ab346 = 'yes');
                        } finally {
                            _0x256fd0['close']();
                            if (_0x1ab346 == 'yes' && _0x5691e6 != 0x5 && _0x521bf8 != 'Size\x20Not\x20Found') {
                                console['log'](_0x43af63['red'](_0x10f5d5() + '\x20[' + _0x5c4bc7['name'] + ']\x20Task\x20' + (_0x3b2edc + 0x1) + '\x20:\x20Retrying\x20(' + _0x5691e6 + '\x20/\x205)\x20')), _0x3b2edc = _0x3b2edc - 0x1, _0x5691e6 = _0x5691e6 + 0x1;
                                continue;
                            }
                            _0x1ab346 == 'yes' && _0x5691e6 >= 0x5 && (_0x3d3128(_0x24fc0b[_0x3b2edc], _0x5c4bc7), _0x1ab346 = 'no', _0x5691e6 = 0x0), console['log'](_0x10f5d5() + '\x20[' + _0x5c4bc7['name'] + ']\x20Waiting\x20for\x20' + _0x91debc['delay'] + '\x20ms'), await _0x3f09d6(_0x91debc['delay']);
                        }
                    }
                }
            },
            {
                'name': '4ELEMENTOS\x20Link\x20Verification',
                'store': '4ELEMENTOS',
                'logo': 'https://cdn.lovesavingsgroup.com/logos/4elementos.jpg',
                'function': async function (_0x2f9d21, _0x2a4ea3) {
                    var _0xb1b1a3 = [];
                    async function _0x4a36d2() {
                        var _0x2eea2e = new _0x328bb9({
                            'user': _0x91debc['masterMail'],
                            'password': _0x91debc['masterPassword'],
                            'host': 'imap.gmail.com',
                            'port': 0x3e1,
                            'tls': !![],
                            'autotls': 'always'
                        });
                        function _0x3c7169(_0x1a3a32) {
                            _0x2eea2e['openBox']('INBOX', ![], _0x1a3a32);
                        }
                        _0x2eea2e['once']('ready', function () {
                            _0x3c7169(function (_0x304da1, _0x4c9854) {
                                console['clear'](), console['log']('Looking\x20For\x20Links');
                                if (_0x304da1)
                                    throw _0x304da1;
                                _0x2eea2e['seq']['search'](['UNSEEN'], function (_0x2f18ae, _0x435fda) {
                                    if (!_0x435fda || !_0x435fda['length'])
                                        console['log'](_0x10f5d5() + '\x20[' + _0x2f9d21['name'] + ']\x20No\x20mails\x20found'), _0x2eea2e['end']();
                                    else {
                                        var _0x1738c1 = _0x2eea2e['seq']['fetch'](_0x435fda, {
                                            'bodies': '',
                                            'markSeen': !![]
                                        });
                                        _0x1738c1['on']('message', function (_0x57e0eb, _0x160674) {
                                            var _0x386d45 = '(#' + _0x160674 + ')\x20';
                                            _0x57e0eb['on']('body', function (_0x2edc00, _0x24ce8a) {
                                                _0x235caf(_0x2edc00, (_0x3ec4e5, _0x602da1) => {
                                                    if (_0x602da1['subject'] == 'Confirm\x20your\x20subscription\x20to\x20the\x20Raffle\x20||\x20Confirma\x20tu\x20suscripción\x20al\x20Raffle') {
                                                        var _0x155ce2 = _0x602da1['html']['split']('\x0a');
                                                        for (var _0x327d9d = 0x0; _0x327d9d < _0x155ce2['length']; _0x327d9d++) {
                                                            if (_0x155ce2[_0x327d9d]['includes']('salesmanago') && _0x155ce2[_0x327d9d]['includes']('<td') && _0x155ce2[_0x327d9d]['includes']('href')) {
                                                                var _0x275f58 = _0x155ce2[_0x327d9d]['split']('href=\x22'), _0x2dfac1 = _0x275f58[0x1]['split']('\x22')[0x0];
                                                                _0xb1b1a3['push'](_0x2dfac1);
                                                                break;
                                                            }
                                                        }
                                                    }
                                                });
                                            }), _0x57e0eb['once']('end', function () {
                                            });
                                        }), _0x1738c1['once']('error', function (_0x547ac4) {
                                            console['log']('Fetch\x20error:\x20' + _0x547ac4);
                                        }), _0x1738c1['once']('end', function () {
                                            _0x2eea2e['end']();
                                        });
                                    }
                                });
                            });
                        }), _0x2eea2e['once']('error', function (_0x2f3848) {
                            console['log'](_0x43af63['red'](_0x2f3848['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox');
                        }), _0x2eea2e['once']('end', async function () {
                        }), _0x2eea2e['connect']();
                    }
                    async function _0x5137f4(_0x1b5955, _0x8f87d, _0x177151) {
                        for (var _0x1e109a = 0x0; _0x1e109a < _0x8f87d['length']; _0x1e109a++) {
                            async function _0x40de57(_0x145f64, _0x5b535d, _0x1036e1, _0x1ba90c, _0x24f236) {
                                var _0x4615c1, _0x2c21e4 = {}, _0x39f6f8 = [], _0x2053dc = {}, _0x541b10 = [
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
                                ], _0x1018c4 = Math['round'](Math['random']() * (_0x541b10['length'] - 0x1));
                                _0x1ba90c[_0x145f64]['Size'] == 'RANDOM' && (_0x1ba90c[_0x145f64]['Size'] = _0x541b10[_0x1018c4]);
                                !_0x1ba90c && (_0x1ba90c = {});
                                if (_0x91debc['useRandomProxy'] = ![])
                                    var _0x359032 = _0x24f236[_0x145f64]['split'](':');
                                else
                                    var _0x1e2665 = Math['round'](Math['random']() * (_0x24f236['length'] - 0x1)), _0x359032 = _0x24f236[_0x1e2665]['split'](':');
                                var _0x34b2bd = {
                                    'jar': _0x3bf13d,
                                    'followAllRedirects': !![],
                                    'method': 'POST',
                                    'url': _0x1036e1['url'],
                                    'headers': _0x1036e1['headers'],
                                    'body': JSON['stringify'](_0x2c21e4),
                                    'proxy': 'http://' + _0x359032[0x2] + ':' + _0x359032[0x3] + '@' + _0x359032[0x0] + ':' + _0x359032[0x1]
                                };
                                return _0x5b535d != 'ver' && (_0x34b2bd['url'] = _0x1036e1['url'], _0x34b2bd['headers'] = _0x1036e1['headers']), _0x5b535d == 'ver' && (_0x34b2bd['method'] = 'GET', _0x34b2bd['url'] = _0x1ba90c[_0x145f64]), new Promise(function (_0x339d12, _0x337968) {
                                    callback = async (_0x5a9f35, _0x25987e, _0x34d3b9) => {
                                        if (!_0x5a9f35 && _0x25987e['statusCode'] == 0xca || !_0x5a9f35 && _0x25987e['statusCode'] == 0xc8) {
                                            if (_0x5b535d != 'ver') {
                                                var _0x26e916 = await _0x19f655(_0x1ba90c[_0x145f64], _0x1036e1, 'dev', ![]), _0x4c33d1 = await _0x19f655(_0x1ba90c[_0x145f64], _0x1036e1, 'pub', ![]);
                                                const _0x3aecd6 = {
                                                    'succesDEVMSG': { 'embeds': [_0x26e916] },
                                                    'succesPUBMSG': { 'embeds': [_0x4c33d1] }
                                                };
                                                if (_0x91debc['webhook'] != undefined && _0x91debc['webhook'] != '')
                                                    try {
                                                        await _0x325d88(_0x91debc['webhook'], _0x3aecd6['succesDEVMSG']);
                                                    } catch {
                                                    }
                                                await _0x3f09d6(0xc8), await _0x325d88(_0x1b7c81, _0x3aecd6['succesDEVMSG']), await _0x3f09d6(0xc8);
                                                try {
                                                    await _0x325d88(_0x48b9ae, _0x3aecd6['succesPUBMSG']);
                                                } catch {
                                                }
                                                _0x1b4968(_0x1ba90c[_0x145f64], _0x1036e1);
                                            }
                                            _0x339d12(console['log'](_0x43af63['green'](_0x10f5d5() + '\x20[' + _0x1036e1['name'] + ']\x20Task\x20' + (_0x145f64 + 0x1) + ':\x20Raffle\x20Entered!')));
                                        } else {
                                            if (_0x5b535d != 'ver') {
                                                var _0x153d3e = '' + _0x5a9f35, _0x526496 = await _0x19f655(_0x1ba90c[_0x145f64], _0x1036e1, 'dev', !![], _0x153d3e), _0x2d5e0d = {};
                                                _0x2d5e0d['errorDEV'] = { 'embeds': [_0x526496] }, _0x3d3128(_0x1ba90c[_0x145f64], _0x1036e1), _0x91debc['webhook'] != undefined && _0x91debc['webhook'] != '' && await _0x325d88(_0x91debc['webhook'], _0x2d5e0d['errorDEV']), await _0x325d88(_0x13fc34, _0x2d5e0d['errorDEV']);
                                            }
                                            _0x337968(console['log'](_0x43af63['red'](_0x10f5d5() + '\x20[' + _0x1036e1['name'] + ']\x20Task\x20' + (_0x145f64 + 0x1) + ':\x20' + _0x5a9f35)));
                                        }
                                    };
                                    try {
                                        _0x5b535d != 'ver' ? console['log'](_0x10f5d5() + '\x20[' + _0x1036e1['name'] + ']\x20Task\x20' + (_0x145f64 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x2c21e4['data']['attributes']['email']) : console['log'](_0x10f5d5() + '\x20[' + _0x1036e1['name'] + ']\x20Task\x20' + (_0x145f64 + 0x1) + ':\x20Fetching\x20Response'), _0xaea765(_0x34b2bd, callback);
                                    } catch (_0x11f424) {
                                        console['log'](_0x10f5d5() + '\x20Task\x20' + (_0x145f64 + 0x1) + ':\x20' + _0x11f424);
                                    }
                                });
                            }
                            ;
                            try {
                                await _0x40de57(_0x1e109a, 'ver', _0x1b5955, _0x8f87d, _0x177151), console['log'](_0x10f5d5() + '\x20[' + _0x1b5955['name'] + ']\x20Sleeping\x20for\x20' + _0x91debc['delay'] + '\x20ms'), await _0x3f09d6(_0x91debc['delay']);
                            } catch (_0x379709) {
                            }
                        }
                    }
                    try {
                        _0x4a36d2(), await _0x3f09d6(0xfa0), console['log']('Found\x20' + _0xb1b1a3['length'] + '\x20Links\x20in\x20Mailbox');
                    } catch {
                        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..');
                    }
                    await _0x5137f4(_0x2f9d21, _0xb1b1a3, _0x2a4ea3);
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
            'function': async function (_0x3e4a95, _0x9efe62, _0x43c862) {
                for (var _0x54272a = 0x0; _0x54272a < _0x9efe62['length']; _0x54272a++) {
                    _0x91debc['AfewDelay'] = _0x91debc['delay'];
                    var _0x4871ec;
                    if (_0x3f4b82 != 'yes')
                        var _0x3f4b82 = '', _0xc58623 = 0x0;
                    var _0x2c370e = _0x9efe62[_0x54272a]['Url'];
                    _0x9f406c(_0x3e4a95['name'] + '\x20Task\x20' + (_0x54272a + 0x1) + '\x20/\x20' + _0x9efe62['length'] + '\x20||\x20File:\x20' + _0x33c890 + '\x20Proxies:\x20' + _0x19246b);
                    try {
                        await _0x3a2fba(_0x9efe62, _0x54272a);
                    } catch {
                        _0x3f4b82 = 'no';
                        throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                    }
                    async function _0x23d1d1(_0x5b8798) {
                        const _0x4ba9eb = _0x48dad3['readFileSync']('../successful-tasks.csv', 'utf8'), _0x2dea62 = _0x3be0d7['parse'](_0x4ba9eb, { 'header': !![] })['data'];
                        let _0x381266 = ![];
                        for (var _0x48c02e of _0x2dea62) {
                            if (_0x48c02e['Url'] == _0x5b8798['Url'] && _0x48c02e['Email'] == _0x5b8798['Email']) {
                                _0x381266 = !![];
                                break;
                            }
                        }
                        return _0x381266;
                    }
                    if (await _0x23d1d1(_0x9efe62[_0x54272a]) == !![]) {
                        console['log'](_0x10f5d5() + '\x20[' + _0x3e4a95['name'] + ']\x20Task\x20' + (_0x54272a + 0x1) + '\x20:\x20Task\x20Already\x20Entered,\x20Going\x20to\x20Next\x20Task');
                        continue;
                    }
                    var _0x13f5f9 = await _0x19f655(_0x9efe62[_0x54272a], _0x3e4a95, 'dev', ![]), _0x976872 = await _0x19f655(_0x9efe62[_0x54272a], _0x3e4a95, 'pub', ![]);
                    const _0x50d82a = {
                        'succesDEVMSG': { 'embeds': [_0x13f5f9] },
                        'succesPUBMSG': { 'embeds': [_0x976872] }
                    };
                    if (_0x9efe62[_0x54272a]['Email'] == '' || _0x9efe62[_0x54272a]['FirstName'] == '' || _0x9efe62[_0x54272a]['LastName'] == '' || _0x9efe62[_0x54272a]['Country'] == '' || _0x9efe62[_0x54272a]['Size'] == '' || _0x9efe62[_0x54272a]['Address1'] == '' || _0x9efe62[_0x54272a]['Zip'] == '') {
                        console['log'](_0x10f5d5() + '\x20[' + _0x3e4a95['name'] + ']\x20Task\x20' + (_0x54272a + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    if (_0x91debc['useRandomProxy'] = ![])
                        var _0x4fdedd = _0x43c862[_0x54272a]['split'](':');
                    else
                        var _0x483d21 = Math['round'](Math['random']() * (_0x43c862['length'] - 0x1)), _0x4fdedd = _0x43c862[_0x483d21]['split'](':');
                    const _0x44efd8 = await _0x5f424d['launch']({
                        'headless': !![],
                        'args': [
                            '--proxy-server=' + _0x4fdedd[0x0] + ':' + _0x4fdedd[0x1],
                            '--no-sandbox',
                            '--disable-setuid-sandbox'
                        ]
                    });
                    try {
                        var _0x227171 = JSON['parse'](_0x48dad3['readFileSync']('sizes.json', 'utf-8')), _0x2c370e = _0x9efe62[_0x54272a]['Url'], _0x3b160e = _0x9efe62[_0x54272a]['Size'], _0x2f40c6;
                        async function _0x10be42() {
                            var _0x1e490a = new _0x53a94c['CookieJar']();
                            console['log'](_0x10f5d5() + '\x20[' + _0x3e4a95['name'] + ']\x20Task\x20' + (_0x54272a + 0x1) + '\x20:\x20Getting\x20Session');
                            var _0x2a4039;
                            let _0x1e940b = {
                                'method': 'GET',
                                'cookieJar': _0x1e490a,
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
                                'proxy': 'http://' + _0x4fdedd[0x2] + ':' + _0x4fdedd[0x3] + '@' + _0x4fdedd[0x0] + ':' + _0x4fdedd[0x1]
                            }, _0x1a36d4 = _0x2c370e['replace']('de.afew-store.com', 'en.afew-store.com')['replace']('en.afew-store.com', 'raffles.afew-store.com'), _0x3ecc5d = _0x1a36d4 + '.json', _0x4fe604 = await _0xf02506(_0x3ecc5d);
                            console['log'](_0x10f5d5() + '\x20[' + _0x3e4a95['name'] + ']\x20Task\x20' + (_0x54272a + 0x1) + '\x20:\x20Getting\x20Variants');
                            let _0x440992 = _0x4fe604['data']['product']['variants'];
                            if (_0x3b160e != 'RANDOM') {
                                if (_0x440992[0x1]['option1']['includes']('W')) {
                                    const _0x1a064b = _0x227171['women']['find'](_0x2b489f => _0x2b489f['EUsize'] === _0x3b160e);
                                    _0x1a064b && (_0x3b160e = _0x1a064b['size']);
                                } else {
                                    if (_0x440992[0x1]['option1']['includes']('Y')) {
                                        const _0x91b5fc = _0x227171['GS']['find'](_0x172287 => _0x172287['EUsize'] === _0x3b160e);
                                        _0x91b5fc && (_0x3b160e = _0x91b5fc['size']);
                                    } else {
                                        const _0x37ccb6 = _0x227171['men']['find'](_0x50fc5c => _0x50fc5c['EUsize'] === _0x3b160e);
                                        _0x37ccb6 && (_0x3b160e = _0x37ccb6['size']);
                                    }
                                }
                                for (var _0x4aeb6e of _0x440992) {
                                    _0x4aeb6e['option1'] == _0x3b160e && (_0x2a4039 = _0x4aeb6e['id']);
                                }
                            } else {
                                var _0x37bcd5 = Math['round'](Math['random']() * (_0x440992['length'] - 0x1));
                                _0x2a4039 = _0x440992[_0x37bcd5]['id'];
                            }
                            console['log'](_0x10f5d5() + '\x20[' + _0x3e4a95['name'] + ']\x20Task\x20' + (_0x54272a + 0x1) + '\x20:\x20Adding\x20to\x20Cart'), addToCart = await _0xf02506('https://raffles.afew-store.com/cart/' + _0x2a4039 + ':1'), _0x2f40c6 = addToCart['request']['res']['responseUrl'];
                        }
                        try {
                            await _0x10be42();
                        } catch (_0x561ac3) {
                            if (_0x561ac3['message']['includes']('TUNN'))
                                throw new Error('Proxy\x20Connection\x20Error');
                            throw new Error('Proxy\x20Error');
                        }
                        const _0x1d593c = await _0x44efd8['newPage']();
                        await _0x1d593c['setDefaultNavigationTimeout'](0x1d4c0), await _0x1d593c['authenticate']({
                            'username': '' + _0x4fdedd[0x2],
                            'password': '' + _0x4fdedd[0x3]
                        }), await _0x1d593c['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x1d593c['setRequestInterception'](!![]), _0x1d593c['on']('request', _0x193fd1 => {
                            _0x193fd1['resourceType']() === 'image' || _0x193fd1['resourceType']() === 'font' || _0x193fd1['resourceType']() === 'media' ? _0x193fd1['abort']() : _0x193fd1['continue']();
                        });
                        try {
                            await _0x1d593c['goto'](_0x2f40c6, { 'waituntil': 'networkidle0' });
                        } catch {
                            throw new Error('Connection\x20Error');
                        }
                        console['log'](_0x10f5d5() + '\x20[' + _0x3e4a95['name'] + ']\x20Task\x20' + (_0x54272a + 0x1) + '\x20:\x20Submitting\x20Information');
                        try {
                            await _0x1d593c['waitForSelector']('#checkout_email');
                        } catch {
                            throw new Error('Proxy\x20Error');
                        }
                        await _0x1d593c['type']('#checkout_email', '' + _0x9efe62[_0x54272a]['Email']), await _0x3f09d6(0x320), await _0x1d593c['select']('#checkout_shipping_address_country', '' + _0x9efe62[_0x54272a]['Country']), await _0x1d593c['waitForTimeout'](0x258), await _0x1d593c['type']('#checkout_shipping_address_first_name', '' + _0x9efe62[_0x54272a]['FirstName']), await _0x1d593c['waitForTimeout'](0x320), await _0x1d593c['type']('#checkout_shipping_address_last_name', '' + _0x9efe62[_0x54272a]['LastName']), await _0x1d593c['waitForTimeout'](0x2bc), await _0x1d593c['type']('#checkout_shipping_address_address1', _0x9efe62[_0x54272a]['Address1'] + '\x20' + _0x9efe62[_0x54272a]['HouseNumber']), await _0x1d593c['waitForTimeout'](0x2bc), await _0x1d593c['type']('#checkout_shipping_address_address2', '' + _0x9efe62[_0x54272a]['Address2']), await _0x1d593c['waitForTimeout'](0x2bc);
                        _0x9efe62[_0x54272a]['Postcode'] == undefined ? await _0x1d593c['type']('#checkout_shipping_address_zip', '' + _0x9efe62[_0x54272a]['Zip']) : await _0x1d593c['type']('#checkout_shipping_address_zip', '' + _0x9efe62[_0x54272a]['Postcode']);
                        await _0x1d593c['waitForTimeout'](0x2bc), await _0x1d593c['type']('#checkout_shipping_address_city', '' + _0x9efe62[_0x54272a]['City']), await _0x1d593c['waitForTimeout'](0x2bc), console['log'](_0x10f5d5() + '\x20[' + _0x3e4a95['name'] + ']\x20Task\x20' + (_0x54272a + 0x1) + '\x20:\x20Getting\x20Shipping'), _0x1d593c['evaluate'](() => {
                            const _0x135e2b = document['querySelector']('#continue_button');
                            for (var _0x4eb033 = 0x0; _0x4eb033 < 0x5; _0x4eb033++) {
                                if (_0x135e2b) {
                                    _0x135e2b['click'](), _0x135e2b['click']();
                                    break;
                                } else
                                    _0x3f09d6(0xfa0);
                            }
                        }), await _0x1d593c['waitForTimeout'](0x9c4);
                        try {
                            await _0x1d593c['waitForSelector']('div.radio-wrapper', { 'timeout': 0x186a0 });
                        } catch {
                            throw new Error('Proxy\x20Error');
                        }
                        await _0x1d593c['waitForSelector']('form[data-shipping-method-form=\x22true\x22]'), await _0x1d593c['$eval']('form[data-shipping-method-form=\x22true\x22]', _0x718f7d => _0x718f7d['submit']()), await _0x1d593c['waitForTimeout'](0x7d0), console['log'](_0x10f5d5() + '\x20[' + _0x3e4a95['name'] + ']\x20Task\x20' + (_0x54272a + 0x1) + '\x20:\x20Finishing\x20Entry');
                        try {
                            await _0x1d593c['waitForSelector']('div[data-payment-subform=\x22required\x22]', { 'timeout': 0x186a0 });
                        } catch {
                            throw new Error('Proxy\x20Error');
                        }
                        await _0x3f09d6(0x3e8), await _0x1d593c['$eval']('body\x20>\x20div.content\x20>\x20div\x20>\x20div\x20>\x20main\x20>\x20div.step\x20>\x20div\x20>\x20form', _0x3c5001 => _0x3c5001['submit']()), await _0x3f09d6(0x3e8);
                        try {
                            await _0x1d593c['waitForSelector']('div[data-last-step=\x22true\x22]', { 'timeout': 0x186a0 });
                        } catch {
                            throw new Error('Proxy\x20Error');
                        }
                        await _0x1d593c['$eval']('body\x20>\x20div.content\x20>\x20div\x20>\x20div\x20>\x20main\x20>\x20div.step\x20>\x20form', _0x409449 => _0x409449['submit']());
                        try {
                            await _0x1d593c['waitForSelector']('div[data-step=\x22thank_you\x22]'), _0x3f4b82 = 'no', _0x1b4968(_0x9efe62[_0x54272a], _0x3e4a95), console['log'](_0x43af63['green'](_0x10f5d5() + '\x20[' + _0x3e4a95['name'] + ']\x20Task\x20' + (_0x54272a + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                            if (_0x91debc['webhook'] != undefined && _0x91debc['webhook'] != '')
                                try {
                                    await _0x325d88(_0x91debc['webhook'], _0x50d82a['succesDEVMSG']);
                                } catch {
                                }
                            await _0x3f09d6(0xc8), await _0x325d88(_0x1b7c81, _0x50d82a['succesDEVMSG']), await _0x3f09d6(0xc8);
                            try {
                                await _0x325d88(_0x48b9ae, _0x50d82a['succesPUBMSG']);
                            } catch {
                            }
                        } catch (_0x185b14) {
                            throw new Error('Connection\x20Error\x20Fetching\x20Response');
                        }
                    } catch (_0x28102a) {
                        _0x28102a['message']['includes']('selector') && (_0x28102a = 'Connection\x20Error');
                        console['log'](_0x43af63['red'](_0x10f5d5() + '\x20[' + _0x3e4a95['name'] + ']\x20Task\x20' + (_0x54272a + 0x1) + '\x20:\x20' + _0x28102a)), _0x4871ec = '' + _0x28102a;
                        var _0x21b03d = await _0x19f655(_0x9efe62[_0x54272a], _0x3e4a95, 'dev', !![], _0x4871ec);
                        _0x50d82a['errorDEV'] = { 'embeds': [_0x21b03d] }, _0x91debc['webhook'] != undefined && _0x91debc['webhook'] != '' && await _0x325d88(_0x91debc['webhook'], _0x50d82a['errorDEV']), await _0x325d88(_0x13fc34, _0x50d82a['errorDEV']), _0x3f4b82 = 'yes';
                    } finally {
                        _0x44efd8 && _0x44efd8['close']();
                        if (_0x3f4b82 == 'yes' && _0xc58623 != 0x5 && _0x4871ec != 'Size\x20Not\x20Found') {
                            console['log'](_0x43af63['red'](_0x10f5d5() + '\x20[' + _0x3e4a95['name'] + ']\x20Task\x20' + (_0x54272a + 0x1) + '\x20:\x20Retrying\x20(' + _0xc58623 + '\x20/\x205)')), _0x54272a = _0x54272a - 0x1, _0xc58623 = _0xc58623 + 0x1;
                            continue;
                        }
                        _0x3f4b82 == 'yes' && _0xc58623 >= 0x5 && (_0x3d3128(_0x9efe62[_0x54272a], _0x3e4a95), _0x3f4b82 = 'no', _0xc58623 = 0x0);
                        if (_0x54272a + 0x1 == _0x9efe62['length']) {
                            await _0x3f09d6(0x7d0);
                            break;
                        }
                        console['log']('Waiting\x20for\x20' + _0x91debc['AfewDelay'] + '\x20ms'), await _0x3f09d6(_0x91debc['AfewDelay']);
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
                'function': async function (_0x121409, _0x409e66, _0x467c29) {
                    _0x5f424d['use'](_0x456420()), _0x5f424d['use'](_0x5787c4({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x91debc['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x2a615f = 0x0; _0x2a615f < _0x409e66['length']; _0x2a615f++) {
                        if (_0x54aca5 != 'yes')
                            var _0x54aca5 = '', _0x2c670b = 0x0;
                        var _0x54b376;
                        try {
                            await _0x3a2fba(_0x409e66, _0x2a615f);
                        } catch {
                            _0x54aca5 = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        _0x9f406c(_0x121409['name'] + '\x20Task\x20' + (_0x2a615f + 0x1) + '\x20/\x20' + _0x409e66['length'] + '\x20||\x20File:\x20' + _0x33c890 + '\x20Proxies:\x20' + _0x19246b);
                        var _0x32a610 = await _0x19f655(_0x409e66[_0x2a615f], _0x121409, 'acc', ![]);
                        const _0x379caf = { 'succesDEVMSG': { 'embeds': [_0x32a610] } }, _0x29af16 = 'https://www.bstn.com/eu_en/customer/account/create/';
                        var _0x4199ce = Math['round'](Math['random']() * (_0x467c29['length'] - 0x1)), _0x1d7d44 = _0x467c29[_0x4199ce]['split'](':');
                        const _0x19de7e = await _0x5f424d['launch']({
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x1d7d44[0x0] + ':' + _0x1d7d44[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                        try {
                            const _0x2ba653 = await _0x19de7e['newPage']();
                            await _0x2ba653['authenticate']({
                                'username': '' + _0x1d7d44[0x2],
                                'password': '' + _0x1d7d44[0x3]
                            }), console['log'](_0x10f5d5() + '\x20[' + _0x121409['name'] + ']\x20Task\x20' + (_0x2a615f + 0x1) + '\x20:\x20Getting\x20Session'), await _0x2ba653['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x2ba653['setRequestInterception'](!![]), _0x2ba653['on']('request', _0xdc9462 => {
                                _0xdc9462['resourceType']() === 'image' ? _0xdc9462['abort']() : _0xdc9462['continue']();
                            });
                            try {
                                await _0x2ba653['goto']('' + _0x29af16), await _0x2ba653['waitForSelector']('button[class=\x22cf2Lf6\x22]');
                            } catch {
                                throw new Error('Proxy\x20Error');
                            }
                            await _0x2ba653['click']('button[class=\x22cf2Lf6\x22]'), console['log'](_0x10f5d5() + '\x20[' + _0x121409['name'] + ']\x20Task\x20' + (_0x2a615f + 0x1) + '\x20:\x20Passing\x20Cloudflare'), await _0x3f09d6(0x7d0), console['log'](_0x10f5d5() + '\x20[' + _0x121409['name'] + ']\x20Task\x20' + (_0x2a615f + 0x1) + '\x20:\x20Checking\x20Credentials'), await _0x3f09d6(0x190), await _0x2ba653['waitForSelector']('#firstname'), await _0x2ba653['type']('#firstname', _0x409e66[_0x2a615f]['FirstName'], { 'delay': 0xf0 }), await _0x3f09d6(0x190), await _0x2ba653['type']('#lastname', _0x409e66[_0x2a615f]['LastName'], { 'delay': 0xe6 }), await _0x3f09d6(0x190), await _0x2ba653['type']('#email_address', _0x409e66[_0x2a615f]['Email'], { 'delay': 0x122 }), await _0x3f09d6(0x190), await _0x2ba653['type']('#password', _0x409e66[_0x2a615f]['Password'], { 'delay': 0x82 }), await _0x3f09d6(0x1f4), await _0x2ba653['type']('#password-confirmation', _0x409e66[_0x2a615f]['Password'], { 'delay': 0x7c }), console['log'](_0x10f5d5() + '\x20[' + _0x121409['name'] + ']\x20Task\x20' + (_0x2a615f + 0x1) + '\x20:\x20Sending\x20Request'), await _0x3f09d6(0x2bc), await _0x2ba653['$eval']('#form-validate', _0x16e980 => _0x16e980['submit']()), await _0x3f09d6(0x1388);
                            const _0x5021de = await _0x2ba653['$']('#email_address-error');
                            if (_0x5021de)
                                throw new Error('Invalid\x20Email');
                            const _0x375632 = await _0x2ba653['$']('#password-error');
                            if (_0x375632)
                                throw new Error('Invalid\x20Password');
                            await _0x2ba653['waitForSelector']('div.mesg-success'), _0x54aca5 = 'no', console['log'](_0x43af63['green'](_0x10f5d5() + '\x20[' + _0x121409['name'] + ']\x20Task\x20' + (_0x2a615f + 0x1) + '\x20:\x20Account\x20' + _0x409e66[_0x2a615f]['Email'] + '\x20Generated')), _0x48dad3['appendFileSync']('../accounts/bstn.csv', '\x0a' + _0x409e66[_0x2a615f]['Email'] + ',' + _0x409e66[_0x2a615f]['Password']);
                            try {
                                _0x91debc['webhook'] != undefined && _0x91debc['webhook'] != '' && await _0x325d88(_0x91debc['webhook'], _0x379caf['succesDEVMSG']);
                            } catch {
                            }
                            await _0x325d88(_0x22e26c, _0x379caf['succesDEVMSG']), console['log'](_0x43af63['yellow'](_0x10f5d5() + '\x20[' + _0x121409['name'] + ']\x20Task\x20' + (_0x2a615f + 0x1) + '\x20:\x20After\x20your\x20all\x20tasks\x20are\x20finished,\x20run\x20\x27BSTN\x20Account\x20Verifier\x27'));
                        } catch (_0x3efe63) {
                            console['log'](_0x43af63['red'](_0x10f5d5() + '\x20[' + _0x121409['name'] + ']\x20Task\x20' + (_0x2a615f + 0x1) + '\x20:\x20' + _0x3efe63)), _0x54b376 = '' + _0x3efe63;
                            var _0x44a46 = await _0x19f655(_0x409e66[_0x2a615f], _0x121409, 'acc', !![], _0x54b376);
                            _0x379caf['errorDEV'] = { 'embeds': [_0x44a46] }, _0x91debc['webhook'] != undefined && _0x91debc['webhook'] != '' && await _0x325d88(_0x91debc['webhook'], _0x379caf['errorDEV']), await _0x325d88(_0x13fc34, _0x379caf['errorDEV']), _0x54aca5 = 'yes';
                        } finally {
                            _0x19de7e['close']();
                            if (_0x54aca5 == 'yes' && _0x2c670b != 0x5) {
                                console['log'](_0x43af63['red'](_0x10f5d5() + '\x20[' + _0x121409['name'] + ']\x20Task\x20' + (_0x2a615f + 0x1) + '\x20:\x20Retrying\x20(' + _0x2c670b + '\x20/\x205)')), _0x2a615f = _0x2a615f - 0x1, _0x2c670b = _0x2c670b + 0x1;
                                continue;
                            }
                            _0x54aca5 == 'yes' && _0x2c670b >= 0x5 && (_0x3d3128(_0x409e66[_0x2a615f], _0x121409), _0x54aca5 = 'no', _0x2c670b = 0x0), console['log'](_0x10f5d5() + '\x20[' + _0x121409['name'] + ']\x20Waiting\x20for\x20' + _0x91debc['delay'] + '\x20ms'), await _0x3f09d6(_0x91debc['delay']);
                        }
                    }
                }
            },
            {
                'name': 'BSTN\x20Account\x20Verifier',
                'store': 'BSTN',
                'logo': 'https://www.snkrempire.com/wp-content/uploads/2017/11/E3QHwMSP_400x400.png',
                'function': async function (_0x4f0842, _0x39a784) {
                    var _0x218959 = ![], _0x14b631 = [];
                    async function _0x13da9a() {
                        var _0x1a7f0d = new _0x328bb9({
                            'user': _0x91debc['masterMail'],
                            'password': _0x91debc['masterPassword'],
                            'host': 'imap.gmail.com',
                            'port': 0x3e1,
                            'tls': !![],
                            'autotls': 'always'
                        });
                        function _0x5b6d5e(_0x1fd4d6) {
                            _0x1a7f0d['openBox']('INBOX', ![], _0x1fd4d6);
                        }
                        _0x1a7f0d['once']('ready', function () {
                            _0x5b6d5e(function (_0x211f74, _0x538043) {
                                console['clear'](), console['log']('Looking\x20For\x20Links');
                                if (_0x211f74)
                                    throw _0x211f74;
                                _0x1a7f0d['seq']['search']([
                                    'UNSEEN',
                                    [
                                        'SUBJECT',
                                        'Please\x20confirm\x20your\x20BSTN\x20Store\x20account'
                                    ]
                                ], function (_0x30d1d9, _0x4f5d45) {
                                    if (!_0x4f5d45 || !_0x4f5d45['length'])
                                        console['log'](_0x10f5d5() + '\x20[' + _0x4f0842['name'] + ']\x20No\x20mails\x20found'), _0x1a7f0d['end']();
                                    else {
                                        var _0x2061d5 = _0x1a7f0d['seq']['fetch'](_0x4f5d45, {
                                            'bodies': '',
                                            'markSeen': !![]
                                        });
                                        _0x2061d5['on']('message', function (_0xd54086, _0x4e0c7b) {
                                            var _0x5273ac = '(#' + _0x4e0c7b + ')\x20';
                                            _0xd54086['on']('body', function (_0xb57039, _0x239a87) {
                                                _0x235caf(_0xb57039, (_0xdc540b, _0x5574ec) => {
                                                    var _0x1fc6d3 = _0x5574ec['text']['split']('[')[0x2], _0x57ed3c = _0x1fc6d3['split'](']')[0x0];
                                                    _0x14b631['push'](_0x57ed3c);
                                                });
                                            }), _0xd54086['once']('end', function () {
                                            });
                                        }), _0x2061d5['once']('error', function (_0x668a9f) {
                                            console['log']('Fetch\x20error:\x20' + _0x668a9f), _0x218959 = !![];
                                        }), _0x2061d5['once']('end', function () {
                                            _0x1a7f0d['end'](), _0x218959 = !![];
                                        });
                                    }
                                });
                            });
                        }), _0x1a7f0d['once']('error', function (_0x13758e) {
                            console['log'](_0x43af63['red'](_0x13758e['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox'), _0x218959 = !![];
                        }), _0x1a7f0d['once']('end', async function () {
                            _0x218959 = !![];
                        }), _0x1a7f0d['connect']();
                    }
                    async function _0x4ad5e6(_0x31161c, _0x30c189, _0x1a51ab) {
                        _0x5f424d['use'](_0x456420());
                        for (var _0x36ac89 = 0x0; _0x36ac89 < _0x30c189['length']; _0x36ac89++) {
                            if (_0x2eeff7 != 'yes')
                                var _0x2eeff7 = '', _0xced9bc = 0x0;
                            var _0x4821b5 = Math['round'](Math['random']() * (_0x1a51ab['length'] - 0x1)), _0x1e1965 = _0x1a51ab[_0x4821b5]['split'](':');
                            const _0x379521 = await _0x5f424d['launch']({
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x1e1965[0x0] + ':' + _0x1e1965[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                            try {
                                const _0x37d970 = await _0x379521['newPage']();
                                await _0x37d970['authenticate']({
                                    'username': '' + _0x1e1965[0x2],
                                    'password': '' + _0x1e1965[0x3]
                                }), console['log'](_0x10f5d5() + '\x20[' + _0x31161c['name'] + ']\x20Task\x20' + (_0x36ac89 + 0x1) + '\x20:\x20Starting\x20Verification'), await _0x37d970['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x37d970['setRequestInterception'](!![]), _0x37d970['on']('request', _0x24fac9 => {
                                    _0x24fac9['resourceType']() === 'image' || _0x24fac9['resourceType']() === 'font' || _0x24fac9['resourceType']() === 'media' ? _0x24fac9['abort']() : _0x24fac9['continue']();
                                }), console['log'](_0x10f5d5() + '\x20[' + _0x31161c['name'] + ']\x20Task\x20' + (_0x36ac89 + 0x1) + '\x20:\x20Getting\x20Session');
                                try {
                                    await _0x37d970['goto'](_0x30c189[_0x36ac89]);
                                } catch {
                                    _0x2eeff7 = 'yes';
                                    throw new Error('Connection\x20Error');
                                }
                                console['log'](_0x10f5d5() + '\x20[' + _0x31161c['name'] + ']\x20Task\x20' + (_0x36ac89 + 0x1) + '\x20:\x20Passing\x20Cloudflare'), await _0x37d970['waitForTimeout'](0xbb8);
                                try {
                                    await _0x37d970['waitForSelector']('.account-nav'), _0x2eeff7 = 'no', console['log'](_0x43af63['green'](_0x10f5d5() + '\x20[' + _0x31161c['name'] + ']\x20Task\x20' + (_0x36ac89 + 0x1) + '\x20:\x20Verification\x20Successful'));
                                    var _0x5c86db = await _0x19f655(null, _0x31161c, 'ver', ![]);
                                    const _0x467ade = { 'succesDEVMSG': { 'embeds': [_0x5c86db] } };
                                    await _0x325d88(_0x3f0a58, _0x467ade['succesDEVMSG']);
                                } catch {
                                    _0x2eeff7 = 'no';
                                    throw new Error('Link\x20Already\x20Verified,\x20skipping..');
                                }
                            } catch (_0x227828) {
                                console['log'](_0x43af63['red'](_0x10f5d5() + '\x20[' + _0x31161c['name'] + ']\x20Task\x20' + (_0x36ac89 + 0x1) + '\x20:\x20' + _0x227828));
                                var _0x513d06 = _0x227828, _0x279601 = await _0x19f655(null, _0x31161c, 'ver', !![], _0x513d06);
                                const _0x34f238 = { 'errorDEVMSG': { 'embeds': [_0x279601] } };
                                _0x91debc['webhook'] != undefined && _0x91debc['webhook'] != '' && await _0x325d88(_0x91debc['webhook'], _0x34f238['errorDEVMSG']), await _0x325d88(_0x13fc34, _0x34f238['errorDEVMSG']);
                            } finally {
                                _0x379521['close']();
                                if (_0x2eeff7 == 'yes' && _0xced9bc != 0x5) {
                                    console['log'](_0x43af63['red'](_0x10f5d5() + '\x20[' + _0x31161c['name'] + ']\x20Task\x20' + (_0x36ac89 + 0x1) + '\x20:\x20Retrying\x20(' + _0xced9bc + '\x20/\x205)')), _0x36ac89 = _0x36ac89 - 0x1, _0xced9bc = _0xced9bc + 0x1;
                                    continue;
                                }
                                _0x2eeff7 == 'yes' && _0xced9bc >= 0x5 && (_0x2eeff7 = 'no', _0xced9bc = 0x0), console['log'](_0x10f5d5() + '\x20[' + _0x31161c['name'] + ']\x20Waiting\x20for\x20' + _0x91debc['delay'] + '\x20ms'), await _0x3f09d6(_0x91debc['delay']);
                            }
                        }
                    }
                    try {
                        _0x13da9a();
                        while (!_0x218959) {
                            await _0x3f09d6(0xfa0);
                        }
                        console['log']('Found\x20' + _0x14b631['length'] + '\x20Links\x20in\x20Mailbox');
                    } catch {
                        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..'), await _0x3f09d6(0x7d0);
                    }
                    await _0x4ad5e6(_0x4f0842, _0x14b631, _0x39a784);
                }
            },
            {
                'name': 'BSTN\x20Raffle\x20Entries',
                'store': 'BSTN',
                'logo': 'https://www.snkrempire.com/wp-content/uploads/2017/11/E3QHwMSP_400x400.png',
                'function': async function (_0x578b7f, _0x4e0713, _0x245b37) {
                    _0x5f424d['use'](_0x456420()), _0x5f424d['use'](_0x5787c4({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x91debc['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0xe4daa9 = 0x0; _0xe4daa9 < _0x4e0713['length']; _0xe4daa9++) {
                        var _0x53f4d9;
                        try {
                            await _0x3a2fba(_0x4e0713, _0xe4daa9);
                        } catch {
                            _0x18de92 = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        async function _0x206c25(_0x482b01) {
                            const _0x30404a = _0x48dad3['readFileSync']('../successful-tasks.csv', 'utf8'), _0x1cbed5 = _0x3be0d7['parse'](_0x30404a, { 'header': !![] })['data'];
                            let _0x44cf55 = ![];
                            for (var _0x3b9198 of _0x1cbed5) {
                                if (_0x3b9198['Url'] == _0x482b01['Url'] && _0x3b9198['Email'] == _0x482b01['Email']) {
                                    _0x44cf55 = !![];
                                    break;
                                }
                            }
                            return _0x44cf55;
                        }
                        if (await _0x206c25(_0x4e0713[_0xe4daa9]) == !![]) {
                            console['log'](_0x10f5d5() + '\x20[' + _0x578b7f['name'] + ']\x20Task\x20' + (_0xe4daa9 + 0x1) + '\x20:\x20Task\x20Already\x20Entered,\x20Going\x20to\x20Next\x20Task');
                            continue;
                        }
                        if (_0x18de92 != 'yes')
                            var _0x18de92 = '', _0x2fd47a = 0x0;
                        _0x9f406c(_0x578b7f['name'] + '\x20Task\x20' + (_0xe4daa9 + 0x1) + '\x20/\x20' + _0x4e0713['length'] + '\x20||\x20File:\x20' + _0x33c890 + '\x20Proxies:\x20' + _0x19246b);
                        var _0x4ae0af = Math['round'](Math['random']() * (_0x245b37['length'] - 0x1)), _0x35f15a = _0x245b37[_0x4ae0af]['split'](':'), _0x27d7a3;
                        try {
                            _0x27d7a3 = await _0x5f424d['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x35f15a[0x0] + ':' + _0x35f15a[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x27d7a3 = await _0x5f424d['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x35f15a[0x0] + ':' + _0x35f15a[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x1c62f2 = await _0x27d7a3['newPage'](), _0x3c4026 = await _0x1c62f2['target']()['createCDPSession'](), { windowId: _0x13d665 } = await _0x3c4026['send']('Browser.getWindowForTarget');
                            await _0x1c62f2['setViewport']({
                                'width': 0x501,
                                'height': 0x2d0
                            });
                            var _0x5d9cb3 = [{
                                'name': 'cf_clearance',
                                'value': 'uyuh7Wo9shR3zcpWvbWJ04mG0iNC2N25mhp1FNAbHYY-1676282182-0-1-9764d0ee.e7bea100.c0658f0e-160',
                                'domain': '.bstn.com',
                                'path': '/',
                                'expires': 1707818183.331533,
                                'httpOnly': !![],
                                'secure': !![]
                            }];
                            await _0x1c62f2['authenticate']({
                                'username': '' + _0x35f15a[0x2],
                                'password': '' + _0x35f15a[0x3]
                            }), console['log'](_0x10f5d5() + '\x20[' + _0x578b7f['name'] + ']\x20Task\x20' + (_0xe4daa9 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x1c62f2['goto']('' + _0x4e0713[_0xe4daa9]['Url'], { 'waitUntil': 'networkidle2' }), console['log'](_0x10f5d5() + '\x20[' + _0x578b7f['name'] + ']\x20Task\x20' + (_0xe4daa9 + 0x1) + '\x20:\x20Solving\x20Cloudflare');
                            try {
                                await _0x1c62f2['waitForSelector']('.nonLoggedSpecific_nonLogged__SCu0L');
                            } catch {
                                throw new Error('Blocked\x20by\x20Cloudflare');
                            }
                            await _0x3c4026['send']('Browser.setWindowBounds', {
                                'windowId': _0x13d665,
                                'bounds': { 'windowState': 'minimized' }
                            }), await _0x3f09d6(0x1388), await _0x1c62f2['waitForSelector']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x1c62f2['focus']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x3f09d6(0x1f4), console['log'](_0x10f5d5() + '\x20[' + _0x578b7f['name'] + ']\x20Task\x20' + (_0xe4daa9 + 0x1) + '\x20:\x20Logging\x20in'), await _0x1c62f2['$eval']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb', _0x4bcb9c => _0x4bcb9c['click']()), await _0x1c62f2['click']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x1c62f2['click']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x3f09d6(0x7d0), await _0x1c62f2['waitForSelector']('#email-login'), await _0x1c62f2['type']('#email-login', '' + _0x4e0713[_0xe4daa9]['Email']), await _0x3f09d6(0xdac), await _0x1c62f2['waitForSelector']('#password'), await _0x1c62f2['type']('#password', '' + _0x4e0713[_0xe4daa9]['Password'], { 'delay': 0xe6 }), await _0x3f09d6(0x157c);
                            try {
                                await _0x1c62f2['$eval']('.login_accountInfo__FCIxY\x20>\x20button[type=\x22submit\x22]', _0x5b49fa => _0x5b49fa['click']());
                            } catch {
                            }
                            try {
                                await _0x1c62f2['waitForSelector']('.swatchOptions_sizeTiles__Lizc2');
                            } catch (_0x858770) {
                            }
                            await _0x3f09d6(0x3e8);
                            const _0x3964ec = await _0x1c62f2['$']('.enteredDraw_container__2KmQ_');
                            if (_0x3964ec)
                                throw new Error('Duplicate\x20Entry');
                            console['log'](_0x10f5d5() + '\x20[' + _0x578b7f['name'] + ']\x20Task\x20' + (_0xe4daa9 + 0x1) + '\x20:\x20Choosing\x20Size\x20' + _0x4e0713[_0xe4daa9]['Size']);
                            try {
                                if (_0x4e0713[_0xe4daa9]['Size'] != 'RANDOM') {
                                    var _0xbaa23f = _0x4e0713[_0xe4daa9]['Size']['replace']('.', ',');
                                    const _0x45be70 = await _0x1c62f2['$x']('//div[contains(text(),\x20' + _0xbaa23f + ')]');
                                    await _0x45be70[0x0]['click']();
                                } else {
                                    const _0x24d3d8 = await _0x1c62f2['$$']('div.swatchTile_tile__IRH9Q');
                                    var _0x15b9ba = Math['round'](Math['random']() * (_0x24d3d8['length'] - 0x1));
                                    await _0x24d3d8[_0x15b9ba]['click']();
                                }
                            } catch {
                                throw new Error('Softblocked,\x20Rotating\x20proxy');
                            }
                            await _0x3f09d6(0x1f4);
                            const _0x1911a1 = await _0x1c62f2['$']('.addressList_addressItem__LE2PB');
                            if (_0x1911a1 && _0x4e0713[_0xe4daa9]['Mode'] != 'NEW') {
                            } else
                                console['log'](_0x10f5d5() + '\x20[' + _0x578b7f['name'] + ']\x20Task\x20' + (_0xe4daa9 + 0x1) + '\x20:\x20Filling\x20Address'), await _0x1c62f2['click']('div.product_shipping__zEfqd\x20>\x20div\x20>\x20div.legend_legend__sQIiF\x20>\x20div.legend_header__iHZIh\x20>\x20div\x20>\x20button'), await _0x3f09d6(0x5dc), await _0x1c62f2['waitForSelector']('#firstname'), await _0x1c62f2['type']('#firstname', '' + _0x4e0713[_0xe4daa9]['FirstName']), await _0x3f09d6(0x1f4), await _0x1c62f2['waitForSelector']('#firstname'), await _0x1c62f2['type']('#lastname', '' + _0x4e0713[_0xe4daa9]['LastName']), await _0x3f09d6(0x1f4), await _0x1c62f2['waitForSelector']('#firstname'), await _0x1c62f2['type']('#street', '' + _0x4e0713[_0xe4daa9]['Address1']), await _0x3f09d6(0x1f4), await _0x1c62f2['waitForSelector']('#firstname'), await _0x1c62f2['type']('#houseNumber', _0x4e0713[_0xe4daa9]['HouseNumber'] + '\x20' + _0x4e0713[_0xe4daa9]['Address2']), await _0x3f09d6(0x1f4), await _0x1c62f2['waitForSelector']('#firstname'), await _0x1c62f2['select']('#country_code', '' + _0x4e0713[_0xe4daa9]['Country']), await _0x3f09d6(0x1f4), await _0x1c62f2['type']('#postcode', '' + _0x4e0713[_0xe4daa9]['Zip']), await _0x3f09d6(0x1f4), await _0x1c62f2['type']('#city', '' + _0x4e0713[_0xe4daa9]['City']), await _0x3f09d6(0x1f4), await _0x1c62f2['type']('#telephone', '' + _0x4e0713[_0xe4daa9]['Phone']), await _0x3f09d6(0x1f4), await _0x1c62f2['click']('.addressModal_submit__dOiL4\x20>\x20button[type=\x22submit\x22]');
                            await _0x3f09d6(0x9c4);
                            try {
                                await _0x1c62f2['type']('#instagram_name', '' + _0x4e0713[_0xe4daa9]['Follower']), await _0x1c62f2['click']('.note_groupBtn__WLDwH\x20>\x20button');
                            } catch {
                            }
                            console['log'](_0x10f5d5() + '\x20[' + _0x578b7f['name'] + ']\x20Task\x20' + (_0xe4daa9 + 0x1) + '\x20:\x20Finishing\x20Entry'), await _0x3f09d6(0x5dc);
                            try {
                                await _0x1c62f2['click']('.checkBox_boxHolder__wLGVe');
                            } catch {
                            }
                            await _0x3f09d6(0x5dc), await _0x1c62f2['$eval']('.termConditions_TC__hll9k\x20>\x20button', _0x5514bb => _0x5514bb['click']()), await _0x3f09d6(0x1388);
                            try {
                                await _0x1c62f2['waitForSelector']('.success_msg__2HjJY');
                            } catch {
                                await _0x1c62f2['reload']({ 'waitUntil': 'networkidle2' });
                                if (_0x4e0713[_0xe4daa9]['Size'] != 'RANDOM') {
                                    var _0xbaa23f = _0x4e0713[_0xe4daa9]['Size']['replace']('.', ',');
                                    const _0x4ef661 = await _0x1c62f2['$x']('//div[contains(text(),\x20' + _0xbaa23f + ')]');
                                    await _0x4ef661[0x0]['click']();
                                } else {
                                    const _0x4c4fcb = await _0x1c62f2['$$']('div.swatchTile_tile__IRH9Q');
                                    var _0x15b9ba = Math['round'](Math['random']() * (_0x4c4fcb['length'] - 0x1));
                                    await _0x4c4fcb[_0x15b9ba]['click']();
                                }
                                await _0x3f09d6(0x5dc);
                                try {
                                    await _0x1c62f2['hover']('#instagram_name'), await _0x1c62f2['type']('#instagram_name', '' + _0x4e0713[_0xe4daa9]['Follower']), await _0x1c62f2['click']('.note_groupBtn__WLDwH\x20>\x20button');
                                } catch {
                                }
                                console['log'](_0x10f5d5() + '\x20[' + _0x578b7f['name'] + ']\x20Task\x20' + (_0xe4daa9 + 0x1) + '\x20:\x20Retrying\x20(' + _0x2fd47a + '\x20/\x205)'), await _0x1c62f2['hover']('.checkBox_boxHolder__wLGVe'), await _0x3f09d6(0x5dc), await _0x1c62f2['click']('.checkBox_boxHolder__wLGVe'), await _0x3f09d6(0x157c), await _0x1c62f2['$eval']('.termConditions_TC__hll9k\x20>\x20button', _0x3da0d1 => _0x3da0d1['click']()), await _0x3f09d6(0x1388), await _0x1c62f2['waitForSelector']('.success_msg__2HjJY');
                            }
                            _0x18de92 = 'no', _0x1b4968(_0x4e0713[_0xe4daa9], _0x578b7f), console['log'](_0x43af63['green'](_0x10f5d5() + '\x20[' + _0x578b7f['name'] + ']\x20Task\x20' + (_0xe4daa9 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                            var _0x25d583 = await _0x19f655(_0x4e0713[_0xe4daa9], _0x578b7f, 'dev', ![]), _0x11b697 = await _0x19f655(_0x4e0713[_0xe4daa9], _0x578b7f, 'pub', ![]);
                            const _0x79b508 = {
                                'succesDEVMSG': { 'embeds': [_0x25d583] },
                                'succesPUBMSG': { 'embeds': [_0x11b697] }
                            };
                            try {
                                _0x91debc['webhook'] != undefined && _0x91debc['webhook'] != '' && await _0x325d88(_0x91debc['webhook'], _0x79b508['succesDEVMSG']), await _0x3f09d6(0xc8), await _0x325d88(_0x1b7c81, _0x79b508['succesDEVMSG']), await _0x3f09d6(0xc8), await _0x325d88(_0x48b9ae, _0x79b508['succesPUBMSG']);
                            } catch (_0x3b6e5f) {
                                console['log'](_0x43af63['yellow'](_0x10f5d5() + '\x20[' + _0x578b7f['name'] + ']\x20Task\x20' + (_0xe4daa9 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x3b6e5f));
                            }
                        } catch (_0x3a1084) {
                            console['log'](_0x43af63['red'](_0x10f5d5() + '\x20[' + _0x578b7f['name'] + ']\x20Task\x20' + (_0xe4daa9 + 0x1) + '\x20:\x20' + _0x3a1084)), _0x18de92 = 'yes', _0x53f4d9 = '' + _0x3a1084;
                            var _0x17ef1e = await _0x19f655(_0x4e0713[_0xe4daa9], _0x578b7f, 'dev', !![], _0x53f4d9), _0x25d583 = await _0x19f655(_0x4e0713[_0xe4daa9], _0x578b7f, 'dev', ![]), _0x11b697 = await _0x19f655(_0x4e0713[_0xe4daa9], _0x578b7f, 'pub', ![]);
                            const _0x1b4c21 = {
                                'succesDEVMSG': { 'embeds': [_0x25d583] },
                                'succesPUBMSG': { 'embeds': [_0x11b697] }
                            };
                            _0x1b4c21['errorDEV'] = { 'embeds': [_0x17ef1e] }, _0x91debc['webhook'] != undefined && _0x91debc['webhook'] != '' && await _0x325d88(_0x91debc['webhook'], _0x1b4c21['errorDEV']), await _0x325d88(_0x13fc34, _0x1b4c21['errorDEV']);
                        } finally {
                            _0x27d7a3['close']();
                            if (_0x18de92 == 'yes' && _0x2fd47a != 0x5) {
                                console['log'](_0x43af63['red'](_0x10f5d5() + '\x20[' + _0x578b7f['name'] + ']\x20Task\x20' + (_0xe4daa9 + 0x1) + '\x20:\x20Retrying\x20(' + _0x2fd47a + '\x20/\x205)')), _0xe4daa9 = _0xe4daa9 - 0x1, _0x2fd47a = _0x2fd47a + 0x1;
                                continue;
                            }
                            _0x18de92 == 'yes' && _0x2fd47a >= 0x5 && (_0x3d3128(_0x4e0713[_0xe4daa9], _0x578b7f), _0x18de92 = 'no', _0x2fd47a = 0x0), console['log'](_0x10f5d5() + '\x20[' + _0x578b7f['name'] + ']\x20Waiting\x20for\x20' + _0x91debc['delay'] + '\x20ms'), await _0x3f09d6(_0x91debc['delay']);
                        }
                    }
                }
            }
        ]
    },
    {
        'name': 'FENOM',
        'modules': [
            {
                'name': 'FENOM\x20Account\x20Generator',
                'store': 'FENOM',
                'logo': 'https://consumersiteimages.trustpilot.net/business-units/5de8db15496f380001d51371-198x149-1x.jpg',
                'function': async function (_0x2da25d, _0x18f0e2, _0xfba567) {
                    _0x5f424d['use'](_0x456420()), _0x5f424d['use'](_0x5787c4({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x91debc['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x2ea5d1 = 0x0; _0x2ea5d1 < _0x18f0e2['length']; _0x2ea5d1++) {
                        if (_0x449955 != 'yes')
                            var _0x449955 = '', _0x1647bd = 0x0;
                        var _0x5434a7;
                        try {
                            await _0x3a2fba(_0x18f0e2, _0x2ea5d1);
                        } catch {
                            _0x449955 = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        _0x9f406c(_0x2da25d['name'] + '\x20Task\x20' + (_0x2ea5d1 + 0x1) + '\x20/\x20' + _0x18f0e2['length'] + '\x20||\x20File:\x20' + _0x33c890 + '\x20Proxies:\x20' + _0x19246b);
                        var _0xf5df93 = await _0x19f655(_0x18f0e2[_0x2ea5d1], _0x2da25d, 'acc', ![]);
                        const _0x4a5cf4 = { 'succesDEVMSG': { 'embeds': [_0xf5df93] } }, _0x345c5d = 'https://www.fenom.com/en/authentication?create_account=1';
                        var _0x2cb80d = Math['round'](Math['random']() * (_0xfba567['length'] - 0x1)), _0x5558b5 = _0xfba567[_0x2cb80d]['split'](':'), _0xc6a093;
                        try {
                            _0xc6a093 = await _0x5f424d['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x5558b5[0x0] + ':' + _0x5558b5[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0xc6a093 = await _0x5f424d['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x5558b5[0x0] + ':' + _0x5558b5[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x328295 = await _0xc6a093['newPage']();
                            await _0x328295['setViewport']({
                                'width': 0x500 + _0x565a5c(0x1, 0x32),
                                'height': 0x2d9 + _0x565a5c(0x1, 0x32)
                            });
                            const _0x1f3a36 = await _0x328295['target']()['createCDPSession'](), { windowId: _0x42de20 } = await _0x1f3a36['send']('Browser.getWindowForTarget');
                            await _0x328295['authenticate']({
                                'username': '' + _0x5558b5[0x2],
                                'password': '' + _0x5558b5[0x3]
                            }), console['log'](_0x10f5d5() + '\x20[' + _0x2da25d['name'] + ']\x20Task\x20' + (_0x2ea5d1 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x328295['goto']('' + _0x345c5d, { 'waitUntil': 'networkidle2' }), await _0x3f09d6(0x1388), console['log'](_0x10f5d5() + '\x20[' + _0x2da25d['name'] + ']\x20Task\x20' + (_0x2ea5d1 + 0x1) + '\x20:\x20Solving\x20Cloudflare');
                            try {
                                const _0x76eeaa = await _0x328295['$eval']('input[value=\x22Verify\x20you\x20are\x20human\x22]');
                                _0x76eeaa && await _0x76eeaa['click']();
                            } catch {
                            }
                            await _0x1f3a36['send']('Browser.setWindowBounds', {
                                'windowId': _0x42de20,
                                'bounds': { 'windowState': 'minimized' }
                            });
                            try {
                                await _0x328295['waitForSelector']('input[name=\x22firstname\x22]', { 'timeout': 0x1d4c0 }), await _0x3f09d6(0xfa0);
                            } catch {
                                throw new Error('Blocked\x20by\x20cloudflare');
                            }
                            console['log'](_0x10f5d5() + '\x20[' + _0x2da25d['name'] + ']\x20Task\x20' + (_0x2ea5d1 + 0x1) + '\x20:\x20Checking\x20Credentials'), await _0x328295['type']('input[name=\x22firstname\x22]', '' + _0x18f0e2[_0x2ea5d1]['FirstName']), await _0x3f09d6(0x1f4), await _0x328295['type']('input[name=\x22lastname\x22]', '' + _0x18f0e2[_0x2ea5d1]['LastName']), await _0x3f09d6(0x1f4), await _0x328295['type']('input[name=\x22email\x22]', '' + _0x18f0e2[_0x2ea5d1]['Email']), await _0x3f09d6(0x1f4), await _0x328295['type']('input[name=\x22password\x22]', '' + _0x18f0e2[_0x2ea5d1]['Password']), await _0x3f09d6(0x258), await _0x328295['$eval']('input[name=\x22psgdpr\x22]', _0x32ac88 => _0x32ac88['click']()), await _0x3f09d6(0x1f4), console['log'](_0x10f5d5() + '\x20[' + _0x2da25d['name'] + ']\x20Task\x20' + (_0x2ea5d1 + 0x1) + '\x20:\x20Sending\x20Request'), await _0x328295['$eval']('#customer-form', _0x16e375 => _0x16e375['submit']());
                            try {
                                try {
                                    await _0x328295['waitForSelector']('.product-list.slider-fenom', { 'timeout': 0xea60 });
                                } catch {
                                    throw new Error('Succes-response\x20not\x20found');
                                }
                                _0x449955 = 'no', console['log'](_0x43af63['green'](_0x10f5d5() + '\x20[' + _0x2da25d['name'] + ']\x20Task\x20' + (_0x2ea5d1 + 0x1) + '\x20:\x20Account\x20' + _0x18f0e2[_0x2ea5d1]['Email'] + '\x20Generated')), _0x48dad3['appendFileSync']('../accounts/fenom.csv', '\x0a' + _0x18f0e2[_0x2ea5d1]['Email'] + ',' + _0x18f0e2[_0x2ea5d1]['Password']);
                                try {
                                    _0x91debc['webhook'] != undefined && _0x91debc['webhook'] != '' && await _0x325d88(_0x91debc['webhook'], _0x4a5cf4['succesDEVMSG']);
                                } catch {
                                }
                                await _0x325d88(_0x22e26c, _0x4a5cf4['succesDEVMSG']);
                            } catch (_0x29e87c) {
                                throw new Error('Account\x20generation\x20failed');
                            }
                        } catch (_0x43201b) {
                            console['log'](_0x43af63['red'](_0x10f5d5() + '\x20[' + _0x2da25d['name'] + ']\x20Task\x20' + (_0x2ea5d1 + 0x1) + '\x20:\x20' + _0x43201b)), _0x5434a7 = '' + _0x43201b;
                            var _0xdad1b7 = await _0x19f655(_0x18f0e2[_0x2ea5d1], _0x2da25d, 'acc', !![], _0x5434a7);
                            _0x4a5cf4['errorDEV'] = { 'embeds': [_0xdad1b7] }, _0x91debc['webhook'] != undefined && _0x91debc['webhook'] != '' && await _0x325d88(_0x91debc['webhook'], _0x4a5cf4['errorDEV']), await _0x325d88(_0x13fc34, _0x4a5cf4['errorDEV']), _0x449955 = 'yes';
                        } finally {
                            _0xc6a093['close']();
                            if (_0x449955 == 'yes' && _0x1647bd != 0x5 && _0x5434a7 != 'Size\x20Not\x20Found') {
                                console['log'](_0x43af63['red'](_0x10f5d5() + '\x20[' + _0x2da25d['name'] + ']\x20Task\x20' + (_0x2ea5d1 + 0x1) + '\x20:\x20Retrying\x20(' + _0x1647bd + '\x20/\x205)')), _0x2ea5d1 = _0x2ea5d1 - 0x1, _0x1647bd = _0x1647bd + 0x1;
                                continue;
                            }
                            _0x449955 == 'yes' && _0x1647bd >= 0x5 && (_0x3d3128(_0x18f0e2[_0x2ea5d1], _0x2da25d), _0x449955 = 'no', _0x1647bd = 0x0), console['log'](_0x10f5d5() + '\x20[' + _0x2da25d['name'] + ']\x20Waiting\x20for\x20' + _0x91debc['delay'] + '\x20ms'), await _0x3f09d6(_0x91debc['delay']);
                        }
                    }
                }
            },
            {
                'name': 'FENOM\x20Raffle\x20Entries',
                'store': 'FENOM',
                'logo': 'https://consumersiteimages.trustpilot.net/business-units/5de8db15496f380001d51371-198x149-1x.jpg',
                'function': async function _0xb4a0d5(_0x38564b, _0x296395, _0x2ba73e) {
                    _0x5f424d['use'](_0x456420()), _0x5f424d['use'](_0x5787c4({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x91debc['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x2c74fe = 0x0; _0x2c74fe < _0x296395['length']; _0x2c74fe++) {
                        if (_0x49527b != 'yes')
                            var _0x49527b = '', _0x21d876 = 0x0;
                        var _0x42f007;
                        try {
                            await _0x3a2fba(_0x296395, _0x2c74fe);
                        } catch {
                            _0x49527b = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        _0x9f406c(_0x38564b['name'] + '\x20Task\x20' + (_0x2c74fe + 0x1) + '\x20/\x20' + _0x296395['length'] + '\x20||\x20File:\x20' + _0x33c890 + '\x20Proxies:\x20' + _0x19246b);
                        const _0x5266b7 = 'https://www.fenom.com/en/authentication?create_account=1';
                        var _0x1d1277 = Math['round'](Math['random']() * (_0x2ba73e['length'] - 0x1)), _0x4c088d = _0x2ba73e[_0x1d1277]['split'](':'), _0x5a2306;
                        try {
                            _0x5a2306 = await _0x5f424d['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x4c088d[0x0] + ':' + _0x4c088d[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x5a2306 = await _0x5f424d['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x4c088d[0x0] + ':' + _0x4c088d[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x27d209 = await _0x5a2306['newPage'](), _0xbafb6d = await _0x27d209['target']()['createCDPSession'](), { windowId: _0x204a6f } = await _0xbafb6d['send']('Browser.getWindowForTarget');
                            await _0x27d209['authenticate']({
                                'username': '' + _0x4c088d[0x2],
                                'password': '' + _0x4c088d[0x3]
                            }), console['log'](_0x10f5d5() + '\x20[' + _0x38564b['name'] + ']\x20Task\x20' + (_0x2c74fe + 0x1) + '\x20:\x20Getting\x20Session'), await _0x27d209['goto']('https://www.fenom.com/en/authentication', { 'waitUntil': 'networkidle2' }), console['log'](_0x10f5d5() + '\x20[' + _0x38564b['name'] + ']\x20Task\x20' + (_0x2c74fe + 0x1) + '\x20:\x20Solving\x20Cloudflare'), await _0x3f09d6(0xbb8), await _0xbafb6d['send']('Browser.setWindowBounds', {
                                'windowId': _0x204a6f,
                                'bounds': { 'windowState': 'minimized' }
                            }), await _0x3f09d6(0x1f40);
                            try {
                                await _0x27d209['waitForSelector']('input[name=\x22email\x22]', { 'timeout': 0x1d4c0 });
                            } catch {
                                throw new Error('Blocked\x20by\x20cloudflare');
                            }
                            await _0x3f09d6(0x1388), console['log'](_0x10f5d5() + '\x20[' + _0x38564b['name'] + ']\x20Task\x20' + (_0x2c74fe + 0x1) + '\x20:\x20Logging\x20in'), await _0x27d209['type']('input[name=\x22email\x22]', '' + _0x296395[_0x2c74fe]['Email']), await _0x3f09d6(0x1f4), await _0x27d209['type']('input[name=\x22password\x22]', '' + _0x296395[_0x2c74fe]['Password']), await _0x3f09d6(0x258), await _0x27d209['$eval']('#login-form', _0xc50f95 => _0xc50f95['submit']()), await _0x27d209['waitForSelector']('.product-list.slider-fenom', { 'timeout': 0xea60 }), await _0x3f09d6(0x1f4), await _0x27d209['goto']('' + _0x296395[_0x2c74fe]['Url']), await _0x27d209['waitForSelector']('.prod-variant\x20>\x20ul\x20>\x20li'), console['log'](_0x10f5d5() + '\x20[' + _0x38564b['name'] + ']\x20Task\x20' + (_0x2c74fe + 0x1) + '\x20:\x20Choosing\x20Size\x20' + _0x296395[_0x2c74fe]['Size']);
                            if (_0x296395[_0x2c74fe]['Size'] != 'RANDOM') {
                                var _0x354af8 = '\x20' + _0x296395[_0x2c74fe]['Size'] + '\x20';
                                const _0x68477a = await _0x27d209['$x']('//span[contains(text(),\x20' + _0x354af8 + ')]');
                                await _0x68477a[0x0]['click']();
                            } else {
                                const _0x4acce6 = await _0x27d209['$$']('.prod-variant\x20>\x20ul\x20>\x20li');
                                var _0x21d2cb = Math['round'](Math['random']() * (_0x4acce6['length'] - 0x1));
                                await _0x4acce6[_0x21d2cb]['click']();
                            }
                            await _0x3f09d6(0x258), await _0x27d209['click']('#cookieChoiceDismiss'), await _0x3f09d6(0x3e8), await _0x27d209['type']('#instagram-account', '' + _0x296395[_0x2c74fe]['Follower']), await _0x3f09d6(0x28a), await _0x27d209['click']('#book-btn'), await _0x3f09d6(0xbb8);
                            try {
                                await _0x27d209['waitForSelector']('#recaptcha-container\x20>\x20div\x20>\x20div\x20>\x20iframe');
                            } catch {
                                throw new Error('Captcha\x20not\x20found');
                            }
                            await _0x3f09d6(0x1f4), console['log'](_0x10f5d5() + '\x20[' + _0x38564b['name'] + ']\x20Task\x20' + (_0x2c74fe + 0x1) + '\x20:\x20' + _0x43af63['cyan']('Solving\x20Captcha')), await _0x27d209['solveRecaptchas'](), console['log'](_0x10f5d5() + '\x20[' + _0x38564b['name'] + ']\x20Task\x20' + (_0x2c74fe + 0x1) + '\x20:\x20Finishing\x20Entry'), await _0x3f09d6(0x7d0), await _0x27d209['$eval']('#book-btn-for-sure', _0x5e3ad1 => _0x5e3ad1['click']()), await _0x3f09d6(0x12c), await _0x27d209['click']('#book-btn-for-sure'), await _0x3f09d6(0xdac);
                            const _0x45c8a3 = await _0x27d209['$eval']('.reservation-popup\x20>\x20.title', _0x6a5da1 => {
                                return _0x6a5da1['innerHTML'];
                            });
                            if (_0x45c8a3) {
                                _0x49527b = 'no', _0x1b4968(_0x296395[_0x2c74fe], _0x38564b), console['log'](_0x43af63['green'](_0x10f5d5() + '\x20[' + _0x38564b['name'] + ']\x20Task\x20' + (_0x2c74fe + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                                var _0x4bb563 = await _0x19f655(_0x296395[_0x2c74fe], _0x38564b, 'dev', ![]), _0x4dfc9a = await _0x19f655(_0x296395[_0x2c74fe], _0x38564b, 'pub', ![]);
                                const _0x1b56d6 = {
                                    'succesDEVMSG': { 'embeds': [_0x4bb563] },
                                    'succesPUBMSG': { 'embeds': [_0x4dfc9a] }
                                };
                                try {
                                    _0x91debc['webhook'] != undefined && _0x91debc['webhook'] != '' && await _0x325d88(_0x91debc['webhook'], _0x1b56d6['succesDEVMSG']), await _0x3f09d6(0xc8), await _0x325d88(_0x1b7c81, _0x1b56d6['succesDEVMSG']), await _0x3f09d6(0xc8), await _0x325d88(_0x48b9ae, _0x1b56d6['succesPUBMSG']);
                                } catch (_0x29a0de) {
                                    console['log'](_0x43af63['yellow'](_0x10f5d5() + '\x20[' + _0x38564b['name'] + ']\x20Task\x20' + (_0x2c74fe + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x29a0de));
                                }
                            } else
                                throw new Error('Error\x20sending\x20entry.\x20Check\x20if\x20duplicate,\x20or\x20proxies.');
                        } catch (_0x304121) {
                            console['log'](_0x43af63['red'](_0x10f5d5() + '\x20[' + _0x38564b['name'] + ']\x20Task\x20' + (_0x2c74fe + 0x1) + '\x20:\x20' + _0x304121)), _0x42f007 = '' + _0x304121;
                            var _0x2ababc = await _0x19f655(_0x296395[_0x2c74fe], _0x38564b, 'dev', !![], _0x42f007), _0x4bb563 = await _0x19f655(_0x296395[_0x2c74fe], _0x38564b, 'dev', ![]), _0x4dfc9a = await _0x19f655(_0x296395[_0x2c74fe], _0x38564b, 'pub', ![]);
                            const _0x251575 = {
                                'succesDEVMSG': { 'embeds': [_0x4bb563] },
                                'succesPUBMSG': { 'embeds': [_0x4dfc9a] }
                            };
                            _0x251575['errorDEV'] = { 'embeds': [_0x2ababc] }, _0x91debc['webhook'] != undefined && _0x91debc['webhook'] != '' && await _0x325d88(_0x91debc['webhook'], _0x251575['errorDEV']), await _0x325d88(_0x13fc34, _0x251575['errorDEV']), _0x304121 != 'Error\x20sending\x20entry.\x20Check\x20if\x20duplicate,\x20or\x20proxies.' && (_0x49527b = 'yes');
                        } finally {
                            _0x5a2306['close']();
                            if (_0x49527b == 'yes' && _0x21d876 != 0x5 && _0x42f007 != 'Size\x20Not\x20Found') {
                                console['log'](_0x43af63['red'](_0x10f5d5() + '\x20[' + _0x38564b['name'] + ']\x20Task\x20' + (_0x2c74fe + 0x1) + '\x20:\x20Retrying\x20(' + _0x21d876 + '\x20/\x205)')), _0x2c74fe = _0x2c74fe - 0x1, _0x21d876 = _0x21d876 + 0x1;
                                continue;
                            }
                            _0x49527b == 'yes' && _0x21d876 >= 0x5 && (_0x3d3128(_0x296395[_0x2c74fe], _0x38564b), _0x49527b = 'no', _0x21d876 = 0x0), console['log'](_0x10f5d5() + '\x20[' + _0x38564b['name'] + ']\x20Waiting\x20for\x20' + _0x91debc['delay'] + '\x20ms'), await _0x3f09d6(_0x91debc['delay']);
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
            'function': async function (_0x2700e8, _0x5cdd2c, _0x50ea9b) {
                _0x5f424d['use'](_0x456420()), _0x5f424d['use'](_0x5787c4({
                    'provider': {
                        'id': '2captcha',
                        'token': '' + _0x91debc['captchaKey']
                    },
                    'visualFeedback': !![]
                }));
                for (var _0x233e1f = 0x0; _0x233e1f < _0x5cdd2c['length']; _0x233e1f++) {
                    var _0x3e4af4;
                    if (_0x387fed != 'yes')
                        var _0x387fed = '', _0x4323ed = 0x0;
                    var _0x4d1f55 = [{
                        'type': 'rich',
                        'title': 'Succesful\x20Footshop\x20entry',
                        'description': '',
                        'color': 0xc0d6d6,
                        'fields': [
                            {
                                'name': 'User',
                                'value': '' + _0x52fb85
                            },
                            {
                                'name': 'Product',
                                'value': '' + _0x5cdd2c[_0x233e1f]['Url']
                            },
                            {
                                'name': 'Size',
                                'value': '' + _0x5cdd2c[_0x233e1f]['Size']
                            },
                            {
                                'name': 'Delay',
                                'value': '' + _0x91debc['footshopDelay']
                            },
                            {
                                'name': 'Version',
                                'value': '' + _0x1e9692
                            }
                        ]
                    }], _0x3b0f79 = await _0x19f655(_0x5cdd2c[_0x233e1f], _0x2700e8, 'dev', ![]), _0x2a40da = await _0x19f655(_0x5cdd2c[_0x233e1f], _0x2700e8, 'pub', ![]);
                    const _0x4e1b4f = {
                        'succesDEVMSG': { 'embeds': [_0x3b0f79] },
                        'succesPUBMSG': { 'embeds': [_0x2a40da] }
                    }, _0x37d207 = { 'embeds': _0x4d1f55 };
                    try {
                        await _0x3a2fba(_0x5cdd2c, _0x233e1f);
                    } catch {
                        _0x387fed = 'no';
                        throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                    }
                    if (_0x5cdd2c[_0x233e1f]['Email'] == '' || _0x5cdd2c[_0x233e1f]['FirstName'] == '' || _0x5cdd2c[_0x233e1f]['LastName'] == '' || _0x5cdd2c[_0x233e1f]['Country'] == '' || _0x5cdd2c[_0x233e1f]['Size'] == '' || _0x5cdd2c[_0x233e1f]['Address1'] == '' || _0x5cdd2c[_0x233e1f]['Zip'] == '') {
                        console['log'](_0x10f5d5() + '\x20[' + _0x2700e8['name'] + ']\x20Task\x20' + (_0x233e1f + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    if (_0x5cdd2c[_0x233e1f]['Email'] == '' || _0x5cdd2c[_0x233e1f]['FirstName'] == '' || _0x5cdd2c[_0x233e1f]['LastName'] == '' || _0x5cdd2c[_0x233e1f]['Country'] == '' || _0x5cdd2c[_0x233e1f]['Size'] == '' || _0x5cdd2c[_0x233e1f]['Address1'] == '' || _0x5cdd2c[_0x233e1f]['Zip'] == '' || _0x5cdd2c[_0x233e1f]['Phone'] == '') {
                        console['log'](_0x10f5d5() + '\x20[' + _0x2700e8['name'] + ']\x20Task\x20' + (_0x233e1f + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    const _0x40d88d = '' + _0x5cdd2c[_0x233e1f]['Url'];
                    if (_0x91debc['useRandomProxy'] = ![])
                        var _0x15e6cc = _0x50ea9b[_0x233e1f]['split'](':');
                    else
                        var _0x40c39e = Math['round'](Math['random']() * (_0x50ea9b['length'] - 0x1)), _0x15e6cc = _0x50ea9b[_0x40c39e]['split'](':');
                    const _0x4a2616 = await _0x5f424d['launch']({
                        'headless': !![],
                        'args': ['--proxy-server=' + _0x15e6cc[0x0] + ':' + _0x15e6cc[0x1]]
                    });
                    try {
                        const _0x2815d1 = await _0x4a2616['newPage']();
                        await _0x2815d1['authenticate']({
                            'username': '' + _0x15e6cc[0x2],
                            'password': '' + _0x15e6cc[0x3]
                        }), console['log'](_0x10f5d5() + '\x20[' + _0x2700e8['name'] + ']\x20Task\x20' + (_0x233e1f + 0x1) + '\x20:\x20Getting\x20Session'), await _0x2815d1['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x2815d1['setRequestInterception'](!![]), _0x2815d1['on']('request', _0x1d0a69 => {
                            _0x1d0a69['resourceType']() === 'image' || _0x1d0a69['resourceType']() === 'font' || _0x1d0a69['resourceType']() === 'media' ? _0x1d0a69['abort']() : _0x1d0a69['continue']();
                        });
                        try {
                            await _0x2815d1['goto'](_0x40d88d), await _0x3f09d6(0xbb8), await _0x2815d1['waitForSelector']('.control__JhutY');
                        } catch {
                            throw new Error('Proxy\x20Error');
                        }
                        await _0x2815d1['click']('.control__JhutY'), await _0x3f09d6(0x1f4);
                        if (_0x5cdd2c[_0x233e1f]['Size'] != 'RANDOM')
                            try {
                                const _0xd08c19 = await _0x2815d1['$x']('//div[contains(text(),\x20\x27' + _0x5cdd2c[_0x233e1f]['Size'] + '\x27)]');
                                await _0xd08c19[0x0]['click']();
                            } catch {
                                console['log'](_0x43af63['red'](_0x10f5d5() + '\x20[' + _0x2700e8['name'] + ']\x20Task\x20' + (_0x233e1f + 0x1) + '\x20:\x20Size\x20Not\x20Found'));
                                continue;
                            }
                        else {
                            const _0x3f94f4 = await _0x2815d1['$$']('.options__3UQpT\x20>\x20div.row');
                            var _0x294446 = Math['round'](Math['random']() * (_0x3f94f4['length'] - 0x1));
                            await _0x3f94f4[_0x294446]['click']();
                        }
                        await _0x3f09d6(0x4b0);
                        const _0x1a892b = await _0x2815d1['$x']('//span[contains(text(),\x20\x27Enter\x20raffle\x20now\x27)]');
                        await _0x1a892b[0x0]['click'](), await _0x2815d1['waitForSelector']('input[name=\x22email\x22]'), console['log'](_0x10f5d5() + '\x20[' + _0x2700e8['name'] + ']\x20Task\x20' + (_0x233e1f + 0x1) + '\x20:\x20Filling\x20Entry\x20Credentials'), await _0x2815d1['type']('input[name=\x22email\x22]', '' + _0x5cdd2c[_0x233e1f]['Email']), await _0x3f09d6(0x640), await _0x2815d1['type']('input[name=\x22phone\x22]', '' + _0x5cdd2c[_0x233e1f]['Phone']), await _0x3f09d6(0x4b0), await _0x2815d1['click']('button.btn.continue-button__1RtsS'), await _0x3f09d6(0x4b0);
                        try {
                            await _0x2815d1['type']('input[name=\x22firstName\x22]', '' + _0x5cdd2c[_0x233e1f]['FirstName']), await _0x3f09d6(0x258);
                        } catch {
                            const _0x158125 = await _0x2815d1['$$eval']('.invalid-feedback\x20>\x20div', _0x45c76a => {
                                return _0x45c76a['map'](_0x523b35 => _0x523b35['innerText']);
                            });
                            console['log'](_0x43af63['red'](_0x10f5d5() + '\x20[' + _0x2700e8['name'] + ']\x20Task\x20' + (_0x233e1f + 0x1) + '\x20:\x20' + _0x158125));
                            continue;
                        }
                        await _0x2815d1['type']('input[name=\x22lastName\x22]', '' + _0x5cdd2c[_0x233e1f]['LastName']), await _0x3f09d6(0xc8), await _0x2815d1['type']('input[name=\x22instagramUsername\x22]', '' + _0x5cdd2c[_0x233e1f]['Follower']), await _0x3f09d6(0x4b0), await _0x2815d1['click']('button.btn.continue-button__1RtsS'), await _0x3f09d6(0x3e8), console['log'](_0x10f5d5() + '\x20[' + _0x2700e8['name'] + ']\x20Task\x20' + (_0x233e1f + 0x1) + '\x20:\x20Filling\x20Shipping'), await _0x2815d1['select']('select[name=\x22country\x22]', '' + _0x5cdd2c[_0x233e1f]['Country']), await _0x3f09d6(0x2bc), await _0x2815d1['type']('input[name=\x22streetName\x22]', '' + _0x5cdd2c[_0x233e1f]['Address1']), await _0x3f09d6(0x258), await _0x2815d1['type']('input[name=\x22houseNumber\x22]', _0x5cdd2c[_0x233e1f]['HouseNumber'] + '\x20' + _0x5cdd2c[_0x233e1f]['Address2']), await _0x3f09d6(0xc8), await _0x2815d1['type']('input[name=\x22postalCode\x22]', '' + _0x5cdd2c[_0x233e1f]['Zip']), await _0x3f09d6(0x1f4), await _0x2815d1['type']('input[name=\x22city\x22]', '' + _0x5cdd2c[_0x233e1f]['City']), await _0x3f09d6(0x4b0), await _0x2815d1['click']('input[name=\x22consent::privacy-policy-101\x22]'), await _0x3f09d6(0x4b0), await _0x2815d1['click']('button.btn.continue-button__1RtsS'), await _0x3f09d6(0x4b0), console['log'](_0x10f5d5() + '\x20[' + _0x2700e8['name'] + ']\x20Task\x20' + (_0x233e1f + 0x1) + '\x20:\x20Solving\x20hCaptcha'), await _0x2815d1['solveRecaptchas'](), console['log'](_0x10f5d5() + '\x20[' + _0x2700e8['name'] + ']\x20Task\x20' + (_0x233e1f + 0x1) + '\x20:\x20hCaptcha\x20solved'), await _0x3f09d6(0xbb8), await _0x2815d1['click']('button.btn.continue-button__1RtsS'), await _0x3f09d6(0x1388), console['log'](_0x10f5d5() + '\x20[' + _0x2700e8['name'] + ']\x20Task\x20' + (_0x233e1f + 0x1) + '\x20:\x20Solving\x20Adyen'), await _0x2815d1['waitForSelector']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x2815d1['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x3f09d6(0x4b0), await _0x2815d1['type']('span[data-cse=\x22encryptedCardNumber\x22]', '' + _0x5cdd2c[_0x233e1f]['CardNumber']), await _0x3f09d6(0x320), await _0x2815d1['click']('span[data-cse=\x22encryptedExpiryDate\x22]'), await _0x2815d1['type']('span[data-cse=\x22encryptedExpiryDate\x22]', '' + _0x5cdd2c[_0x233e1f]['ExpiryDate']), await _0x3f09d6(0x4b0), await _0x2815d1['click']('span[data-cse=\x22encryptedSecurityCode\x22]'), await _0x2815d1['type']('span[data-cse=\x22encryptedSecurityCode\x22]', '' + _0x5cdd2c[_0x233e1f]['CVV']), await _0x3f09d6(0x226), await _0x2815d1['type']('input[name=\x22holderName\x22]', '' + _0x5cdd2c[_0x233e1f]['NameOnCard']), await _0x3f09d6(0x226), await _0x2815d1['click']('button.adyen-checkout__button'), console['log'](_0x10f5d5() + '\x20[' + _0x2700e8['name'] + ']\x20Task\x20' + (_0x233e1f + 0x1) + '\x20:\x20Awaiting\x203DS');
                        try {
                            await _0x2815d1['waitForSelector']('.thank-you__1AwOo', { 'timeout': 0x493e0 }), await _0x3f09d6(0xbb8);
                        } catch (_0x15fc9a) {
                            console['log'](_0x43af63['red'](_0x10f5d5() + '\x20[' + _0x2700e8['name'] + ']\x20Task\x20' + (_0x233e1f + 0x1) + '\x20:\x203DS\x20Failed')), _0x3e4af4 = '3DS\x20Error\x20' + _0x15fc9a;
                            var _0x1f626e = await _0x19f655(_0x5cdd2c[_0x233e1f], _0x2700e8, 'dev', !![], _0x3e4af4);
                            _0x4e1b4f['errorDEV'] = { 'embeds': [_0x1f626e] };
                            _0x91debc['webhook'] != undefined && _0x91debc['webhook'] != '' && await _0x325d88(_0x91debc['webhook'], _0x4e1b4f['errorDEV']);
                            await _0x325d88(_0x13fc34, _0x4e1b4f['errorDEV']);
                            continue;
                        }
                        _0x1b4968(_0x5cdd2c[_0x233e1f], _0x2700e8), console['log'](_0x43af63['green'](_0x10f5d5() + '\x20[' + _0x2700e8['name'] + ']\x20Task\x20' + (_0x233e1f + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                        if (_0x91debc['webhook'] != undefined && _0x91debc['webhook'] != '')
                            try {
                                await _0x325d88(_0x91debc['webhook'], _0x4e1b4f['succesDEVMSG']);
                            } catch {
                            }
                        await _0x3f09d6(0xc8), await _0x325d88(_0x1b7c81, _0x4e1b4f['succesDEVMSG']), await _0x3f09d6(0xc8);
                        try {
                            await _0x325d88(_0x48b9ae, _0x4e1b4f['succesPUBMSG']);
                        } catch {
                        }
                    } catch (_0x58d89b) {
                        console['log'](_0x10f5d5() + '\x20[' + _0x2700e8['name'] + ']\x20Task\x20' + (_0x233e1f + 0x1) + '\x20:\x20' + _0x58d89b), _0x3e4af4 = '' + _0x58d89b;
                        var _0x1f626e = await _0x19f655(_0x5cdd2c[_0x233e1f], _0x2700e8, 'dev', !![], _0x3e4af4);
                        _0x4e1b4f['errorDEV'] = { 'embeds': [_0x1f626e] }, _0x91debc['webhook'] != undefined && _0x91debc['webhook'] != '' && await _0x325d88(_0x91debc['webhook'], _0x4e1b4f['errorDEV']), await _0x325d88(_0x13fc34, _0x4e1b4f['errorDEV']), _0x387fed = 'yes';
                    } finally {
                        _0x4a2616['close']();
                        if (_0x387fed == 'yes' && _0x4323ed != 0x5) {
                            console['log'](_0x43af63['red'](_0x10f5d5() + '\x20[' + _0x2700e8['name'] + ']\x20Task\x20' + (_0x233e1f + 0x1) + '\x20:\x20Retrying\x20(' + _0x4323ed + '\x20/\x205)')), _0x233e1f = _0x233e1f - 0x1, _0x4323ed = _0x4323ed + 0x1;
                            continue;
                        }
                        console['log']('Waiting\x20for\x20' + _0x91debc['footshopDelay'] + '\x20ms'), await _0x3f09d6(_0x91debc['footshopDelay']);
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
            'function': async function (_0x592d10, _0x1b394a, _0x2beccf) {
                var _0x5dbb8c = ![], _0x56f82e = ![];
                if (_0x91debc['captchaKey'] == '' || _0x91debc['captchaKey'] == undefined)
                    return console['log'](_0x43af63['yellow']('No\x202Captcha\x20key\x20found\x20in\x20settings.json')), console['log']('Returning\x20to\x20Menu'), menu();
                _0x5f424d['use'](_0x456420()), _0x5f424d['use'](_0x5787c4({
                    'provider': {
                        'id': '2captcha',
                        'token': '' + _0x91debc['captchaKey']
                    },
                    'visualFeedback': !![]
                }));
                for (var _0xa739f2 = 0x0; _0xa739f2 < _0x1b394a['length']; _0xa739f2++) {
                    if (_0x1fa78b != 'yes')
                        var _0x1fa78b = '', _0x329c07 = 0x0;
                    var _0x577583, _0x5e47e7 = [{
                        'type': 'rich',
                        'title': 'Succesful\x20JD\x20entry',
                        'description': '',
                        'color': 0xc0d6d6,
                        'fields': [
                            {
                                'name': 'Product',
                                'value': '' + _0x1b394a[_0xa739f2]['Url']
                            },
                            {
                                'name': 'Size',
                                'value': '' + _0x1b394a[_0xa739f2]['Size']
                            },
                            {
                                'name': 'User',
                                'value': '' + _0x52fb85
                            },
                            {
                                'name': 'Delay',
                                'value': '' + _0x91debc['delay']
                            },
                            {
                                'name': 'Version',
                                'value': '' + _0x1e9692
                            }
                        ]
                    }];
                    const _0xb9344b = { 'embeds': _0x5e47e7 };
                    _0x9f406c(_0x592d10['name'] + '\x20Task\x20' + (_0xa739f2 + 0x1) + '\x20/\x20' + _0x1b394a['length'] + '\x20||\x20File:\x20' + _0x33c890 + '\x20Proxies:\x20' + _0x19246b);
                    try {
                        await _0x3a2fba(_0x1b394a, _0xa739f2);
                    } catch {
                        _0x1fa78b = 'no';
                        throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                    }
                    var _0x556711 = await _0x19f655(_0x1b394a[_0xa739f2], _0x592d10, 'dev', ![]), _0x36cd56 = await _0x19f655(_0x1b394a[_0xa739f2], _0x592d10, 'pub', ![]);
                    const _0x4c8671 = {
                        'succesDEVMSG': { 'embeds': [_0x556711] },
                        'succesPUBMSG': { 'embeds': [_0x36cd56] }
                    };
                    if (_0x91debc['webhook'] != undefined && _0x91debc['webhook'] != '')
                        try {
                            await _0x325d88(_0x91debc['webhook'], _0x4c8671['succesDEVMSG']);
                        } catch {
                        }
                    await _0x3f09d6(0xc8), await _0x325d88(_0x1b7c81, _0x4c8671['succesDEVMSG']), await _0x3f09d6(0xc8);
                    try {
                        await _0x325d88(_0x48b9ae, _0x4c8671['succesPUBMSG']);
                    } catch {
                    }
                    if (_0x1b394a[_0xa739f2]['Email'] == '' || _0x1b394a[_0xa739f2]['Url'] == '' || _0x1b394a[_0xa739f2]['FirstName'] == '' || _0x1b394a[_0xa739f2]['LastName'] == '') {
                        console['log'](_0x10f5d5() + '\x20[' + _0x4b4650[taskModule]['name'] + ']\x20Task\x20' + (_0xa739f2 + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    if (_0x91debc['useRandomProxy'] = ![])
                        var _0x11fc55 = _0x2beccf[_0xa739f2]['split'](':');
                    else
                        var _0x25f02c = Math['round'](Math['random']() * (_0x2beccf['length'] - 0x1)), _0x11fc55 = _0x2beccf[_0x25f02c]['split'](':');
                    const _0xb9b53e = await _0x5f424d['launch']({
                        'headless': ![],
                        'args': [
                            '--proxy-server=' + _0x11fc55[0x0] + ':' + _0x11fc55[0x1],
                            '--no-sandbox',
                            '--disable-setuid-sandbox'
                        ]
                    });
                    try {
                        const _0x270283 = await _0xb9b53e['newPage']();
                        await _0x270283['authenticate']({
                            'username': '' + _0x11fc55[0x2],
                            'password': '' + _0x11fc55[0x3]
                        }), console['log'](_0x10f5d5() + '\x20[' + _0x592d10['name'] + ']\x20Task\x20' + (_0xa739f2 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x270283['setRequestInterception'](!![]), _0x270283['on']('request', _0x5ba7a3 => {
                            _0x5ba7a3['resourceType']() === 'image' || _0x5ba7a3['resourceType']() === 'font' || _0x5ba7a3['resourceType']() === 'media' ? _0x5ba7a3['abort']() : _0x5ba7a3['continue']();
                        });
                        try {
                            await _0x270283['goto']('' + _0x1b394a[_0xa739f2]['Url'], {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            });
                        } catch {
                            throw new Error('Connection\x20Error');
                        }
                        try {
                            await _0x270283['waitForSelector']('#comp_firstname', { 'timeout': 0x7530 });
                        } catch {
                            throw new Error('Not\x20an\x20Active\x20Raffle');
                        }
                        console['log'](_0x10f5d5() + '\x20[' + _0x592d10['name'] + ']\x20Task\x20' + (_0xa739f2 + 0x1) + '\x20:\x20Filling\x20Information'), await _0x270283['type']('#comp_firstname', '' + _0x1b394a[_0xa739f2]['FirstName']), await _0x270283['waitForSelector']('#comp_lastname'), await _0x270283['type']('#comp_lastname', '' + _0x1b394a[_0xa739f2]['LastName']), await _0x270283['waitForSelector']('#comp_email'), await _0x270283['type']('#comp_email', '' + _0x1b394a[_0xa739f2]['Email']), await _0x270283['waitForSelector']('#comp_paypalemail'), await _0x270283['type']('#comp_paypalemail', '' + _0x1b394a[_0xa739f2]['Email']), await _0x270283['waitForSelector']('#comp_mobile_end'), await _0x270283['type']('#comp_mobile_end', '' + _0x1b394a[_0xa739f2]['Phone']), await _0x270283['waitForSelector']('#comp_dob'), await _0x270283['type']('#comp_dob', '08/09/1992'), console['log'](_0x10f5d5() + '\x20[' + _0x592d10['name'] + ']\x20Task\x20' + (_0xa739f2 + 0x1) + '\x20:\x20Choosing\x20Size');
                        if (_0x1b394a[_0xa739f2]['Size'] == 'RANDOM') {
                            const _0x3641f4 = await _0x270283['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x740f88 => {
                                return _0x740f88['map'](_0x5253e5 => _0x5253e5['value']);
                            });
                            var _0x5a8de9 = Math['round'](Math['random']() * (_0x3641f4['length'] - 0x2));
                            await _0x270283['select']('#shoesize', _0x3641f4[_0x5a8de9 + 0x1]), await _0x3f09d6(0x3e8);
                        } else {
                            const _0x255416 = await _0x270283['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x1292d2 => {
                                return _0x1292d2['map'](_0x2e4247 => _0x2e4247['innerText']);
                            }), _0x5f1e4f = await _0x270283['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x29323f => {
                                return _0x29323f['map'](_0x5dda23 => _0x5dda23['value']);
                            });
                            var _0x5e9c28 = _0x1b394a[_0xa739f2]['Size'];
                            for (var _0xcb1cd3 = 0x1; _0xcb1cd3 < _0x5f1e4f['length']; _0xcb1cd3++) {
                                var _0x185f53 = _0x255416[_0xcb1cd3]['split']('\x20')[0x0];
                                if (_0x185f53 == _0x5e9c28) {
                                    await _0x270283['select']('#shoesize', _0x5f1e4f[_0xcb1cd3]);
                                    break;
                                } else {
                                    if (_0xcb1cd3 + 0x1 == _0x5f1e4f['length'])
                                        throw new Error('Size\x20Not\x20Found..');
                                }
                            }
                        }
                        await _0x270283['waitForSelector']('#comp_address1'), await _0x270283['type']('#comp_address1', _0x1b394a[_0xa739f2]['Address1'] + '\x20' + _0x1b394a[_0xa739f2]['HouseNumber']), await _0x270283['waitForSelector']('#comp_address2'), await _0x270283['type']('#comp_address2', '' + _0x1b394a[_0xa739f2]['Address2']), await _0x270283['waitForSelector']('#comp_address2'), await _0x270283['type']('#comp_address3', '' + _0x1b394a[_0xa739f2]['City']), await _0x270283['waitForSelector']('#comp_postcode'), await _0x270283['type']('#comp_postcode', '' + _0x1b394a[_0xa739f2]['Zip']), console['log'](_0x10f5d5() + '\x20[' + _0x592d10['name'] + ']\x20Task\x20' + (_0xa739f2 + 0x1) + '\x20:\x20Sending\x20Entry'), await _0x3f09d6(0x4b0), await _0x270283['click']('label#emailhold'), await _0x3f09d6(0x5dc), await _0x270283['click']('#preauth_tandc_email\x20>\x20label'), await _0x3f09d6(0x5dc), await _0x270283['click']('#submit');
                        try {
                            await _0x270283['waitForSelector']('#paymentWrap');
                        } catch {
                            throw new Error('Could\x20not\x20find\x20Payment');
                        }
                        console['log'](_0x10f5d5() + '\x20[' + _0x592d10['name'] + ']\x20Task\x20' + (_0xa739f2 + 0x1) + '\x20:\x20' + _0x43af63['blue']('Awaiting\x20Paypal\x20Payment')), _0xb9b53e['on']('targetcreated', async _0x50ddb1 => {
                            if (_0x50ddb1['type']() === 'page') {
                                const _0x5dbad1 = await _0x50ddb1['page']();
                                async function _0x12773b() {
                                    try {
                                        await _0x270283['waitForSelector']('#error_message', { 'timeout': 0x493e0 }), _0x56f82e = !![];
                                        return;
                                    } catch {
                                    }
                                }
                                async function _0xfed1ed() {
                                    try {
                                        await _0x270283['waitForSelector']('#successMessage', { 'timeout': 0x493e0 }), _0x5dbb8c = !![];
                                        return;
                                    } catch {
                                    }
                                }
                                _0xfed1ed(), _0x12773b(), await _0x3f09d6(0x493e0);
                            }
                        });
                        async function _0x1d0661() {
                            for (let _0x26d532 = 0x0; _0x26d532 < 0x12c; _0x26d532++) {
                                if (_0x5dbb8c == !![]) {
                                    _0x1fa78b = 'no', _0x1b4968(_0x1b394a[_0xa739f2], _0x592d10), console['log'](_0x43af63['green'](_0x10f5d5() + '\x20[' + _0x592d10['name'] + ']\x20Task\x20' + (_0xa739f2 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                                    if (_0x91debc['webhook'] != undefined && _0x91debc['webhook'] != '')
                                        try {
                                            await _0x325d88(_0x91debc['webhook'], _0x4c8671['succesDEVMSG']);
                                        } catch {
                                        }
                                    await _0x3f09d6(0xc8), await _0x325d88(_0x1b7c81, _0x4c8671['succesDEVMSG']), await _0x3f09d6(0xc8);
                                    try {
                                        await _0x325d88(_0x48b9ae, _0x4c8671['succesPUBMSG']);
                                    } catch {
                                    }
                                    return;
                                } else {
                                    if (_0x56f82e)
                                        throw new Error('Paypal\x20Error:\x20Target\x20closed');
                                    else
                                        await _0x3f09d6(0x3e8);
                                }
                            }
                            throw new Error('Paypal\x20Error');
                        }
                        await _0x3f09d6(0xbb8), await _0x270283['click']('.zoid-outlet'), await _0x3f09d6(0x7d0), await _0x1d0661();
                    } catch (_0x4e43b6) {
                        console['log'](_0x43af63['red'](_0x10f5d5() + '\x20[' + _0x592d10['name'] + ']\x20Task\x20' + (_0xa739f2 + 0x1) + '\x20:\x20' + _0x4e43b6)), _0x577583 = '' + _0x4e43b6;
                        var _0x1d5d2d = await _0x19f655(_0x1b394a[_0xa739f2], _0x592d10, 'dev', !![], _0x577583);
                        _0x4c8671['errorDEV'] = { 'embeds': [_0x1d5d2d] }, _0x91debc['webhook'] != undefined && _0x91debc['webhook'] != '' && await _0x325d88(_0x91debc['webhook'], _0x4c8671['errorDEV']), await _0x325d88(_0x13fc34, _0x4c8671['errorDEV']);
                    } finally {
                        _0xb9b53e && _0xb9b53e['close']();
                        if (_0x1fa78b == 'yes' && _0x329c07 != 0x5 && _0x577583 != 'Size\x20Not\x20Found') {
                            console['log'](_0x43af63['red'](_0x10f5d5() + '\x20[' + _0x592d10['name'] + ']\x20Task\x20' + (_0xa739f2 + 0x1) + '\x20:\x20Retrying\x20(' + _0x329c07 + '\x20/\x205)')), _0xa739f2 = _0xa739f2 - 0x1, _0x329c07 = _0x329c07 + 0x1;
                            continue;
                        }
                        _0x1fa78b == 'yes' && _0x329c07 >= 0x5 && (_0x3d3128(afew[_0xa739f2], _0x592d10), _0x1fa78b = 'no', _0x329c07 = 0x0), console['log']('Waiting\x20for\x20' + _0x91debc['delay'] + '\x20ms'), await _0x3f09d6(_0x91debc['delay']);
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
                'function': async function (_0x45c324, _0x3718db, _0x577db3) {
                    _0x5f424d['use'](_0x456420()), _0x5f424d['use'](_0x5787c4({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x91debc['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x15388f = 0x0; _0x15388f < _0x3718db['length']; _0x15388f++) {
                        const _0x4e4347 = 'https://www.kickz.com/login';
                        if (_0x4fa555 != 'yes')
                            var _0x4fa555 = '', _0x5496b8 = 0x0;
                        _0x9f406c(_0x45c324['name'] + '\x20Task\x20' + (_0x15388f + 0x1) + '\x20/\x20' + _0x3718db['length'] + '\x20||\x20File:\x20' + _0x33c890 + '\x20Proxies:\x20' + _0x19246b);
                        try {
                            await _0x3a2fba(_0x3718db, _0x15388f);
                        } catch {
                            _0x4fa555 = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        var _0x4713e7 = [{
                            'type': 'rich',
                            'title': 'Succesful\x20Kickz\x20Account\x20Generated',
                            'description': '',
                            'color': 0xc0d6d6,
                            'fields': [
                                {
                                    'name': 'User',
                                    'value': '' + _0x52fb85
                                },
                                {
                                    'name': 'Delay',
                                    'value': '' + _0x91debc['delay']
                                },
                                {
                                    'name': 'Version',
                                    'value': '' + _0x1e9692
                                }
                            ]
                        }];
                        const _0x521b7f = { 'embeds': _0x4713e7 };
                        var _0x44f88b = await _0x19f655(_0x3718db[_0x15388f], _0x45c324, 'acc', ![]);
                        const _0x33a751 = { 'succesDEVMSG': { 'embeds': [_0x44f88b] } };
                        if (_0x3718db[_0x15388f]['Email'] == '' || _0x3718db[_0x15388f]['FirstName'] == '' || _0x3718db[_0x15388f]['LastName'] == '') {
                            console['log'](_0x10f5d5() + '\x20[' + _0x45c324['name'] + ']\x20Task\x20' + (_0x15388f + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        _0x3718db[_0x15388f]['Password'] == '' && (_0x3718db[_0x15388f]['Password'] = 'JRaffles23!');
                        if (_0x91debc['useRandomProxy'] = ![])
                            var _0x6215b3 = _0x577db3[_0x15388f]['split'](':');
                        else
                            var _0x36dd8c = Math['round'](Math['random']() * (_0x577db3['length'] - 0x1)), _0x6215b3 = _0x577db3[_0x36dd8c]['split'](':');
                        const _0x467e47 = await _0x5f424d['launch']({
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x6215b3[0x0] + ':' + _0x6215b3[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                        try {
                            const _0x9d76e9 = await _0x467e47['newPage']();
                            await _0x9d76e9['authenticate']({
                                'username': '' + _0x6215b3[0x2],
                                'password': '' + _0x6215b3[0x3]
                            }), console['log'](_0x10f5d5() + '\x20[' + _0x45c324['name'] + ']\x20Task\x20' + (_0x15388f + 0x1) + '\x20:\x20Getting\x20Session'), await _0x9d76e9['setRequestInterception'](!![]), _0x9d76e9['on']('request', _0x2ceb97 => {
                                _0x2ceb97['resourceType']() === 'image' || _0x2ceb97['resourceType']() === 'font' || _0x2ceb97['resourceType']() === 'media' ? _0x2ceb97['abort']() : _0x2ceb97['continue']();
                            }), await _0x9d76e9['goto'](_0x4e4347), await _0x3f09d6(0xbb8), console['log'](_0x10f5d5() + '\x20[' + _0x45c324['name'] + ']\x20Task\x20' + (_0x15388f + 0x1) + '\x20:\x20Starting\x20Registration'), await _0x9d76e9['waitForSelector']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x9d76e9['click']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x9d76e9['waitForSelector']('#button-register'), await _0x3f09d6(0x7d0), await _0x9d76e9['evaluate'](() => {
                                const _0x1c8f18 = document['querySelector']('#button-register');
                                _0x1c8f18['click']();
                            }), console['log'](_0x10f5d5() + '\x20[' + _0x45c324['name'] + ']\x20Task\x20' + (_0x15388f + 0x1) + '\x20:\x20Setting\x20Credentials'), await _0x3f09d6(0x1388), await _0x9d76e9['waitForSelector']('#customer_salutation'), await _0x9d76e9['select']('#customer_salutation', 'mr'), await _0x3f09d6(0x7d0), await _0x9d76e9['waitForSelector']('#customer_firstname'), await _0x9d76e9['type']('#customer_firstname', '' + _0x3718db[_0x15388f]['FirstName']), await _0x3f09d6(0x352), await _0x9d76e9['waitForSelector']('#customer_lastname'), await _0x9d76e9['type']('#customer_lastname', '' + _0x3718db[_0x15388f]['LastName']), await _0x3f09d6(0x352), await _0x9d76e9['type']('#email-input', '' + _0x3718db[_0x15388f]['Email']), await _0x3f09d6(0x352), await _0x9d76e9['type']('#email-confirm-input', '' + _0x3718db[_0x15388f]['Email']), await _0x3f09d6(0x352), await _0x9d76e9['type']('#register-password', '' + _0x3718db[_0x15388f]['Password']), await _0x3f09d6(0x352), await _0x9d76e9['type']('#password-confirm', '' + _0x3718db[_0x15388f]['Password']), await _0x3f09d6(0x352), console['log'](_0x10f5d5() + '\x20[' + _0x45c324['name'] + ']\x20Task\x20' + (_0x15388f + 0x1) + '\x20:\x20Sending\x20Credentials'), await _0x9d76e9['click']('#consent'), await _0x3f09d6(0x1f4);
                            const _0x331835 = await _0x9d76e9['$']('div.inputErrorMsg.b-form_section-message');
                            if (_0x331835) {
                                console['log'](_0x43af63['red'](_0x10f5d5() + '\x20[' + _0x45c324['name'] + ']\x20Task\x20' + (_0x15388f + 0x1) + '\x20:\x20Your\x20password\x20must\x20contain\x20at\x20least\x20one\x20uppercase\x20&\x20one\x20lowercase\x20letter,\x20one\x20number\x20and\x20one\x20special\x20character.'));
                                continue;
                            }
                            await _0x9d76e9['click']('#buttonRegister');
                            try {
                                await _0x9d76e9['waitForSelector']('#verificationCode');
                            } catch {
                                throw new Error('Account\x20already\x20registered');
                            }
                            console['log'](_0x10f5d5() + '\x20[' + _0x45c324['name'] + ']\x20Task\x20' + (_0x15388f + 0x1) + '\x20:\x20A\x20verification\x20code\x20has\x20been\x20sent\x20to\x20' + _0x3718db[_0x15388f]['Email']), await _0x3f09d6(0x4b0);
                            async function _0x4cea80() {
                                var _0x67d6c5, _0x5a81da = ![];
                                for (var _0x57ca46 = 0x0; _0x57ca46 < 0x18; _0x57ca46++) {
                                    async function _0x168c7d() {
                                        var _0x4ceadd = new _0x328bb9({
                                            'user': _0x91debc['masterMail'],
                                            'password': _0x91debc['masterPassword'],
                                            'host': 'imap.gmail.com',
                                            'port': 0x3e1,
                                            'tls': !![],
                                            'autotls': 'always'
                                        });
                                        function _0xe390cc(_0x29f643) {
                                            _0x4ceadd['openBox']('INBOX', ![], _0x29f643);
                                        }
                                        _0x4ceadd['once']('ready', function () {
                                            console['log'](_0x10f5d5() + '\x20[' + _0x45c324['name'] + ']\x20Task\x20' + (_0x15388f + 0x1) + '\x20:\x20Opened\x20Mailbox'), _0xe390cc(function (_0x21b9dc, _0x2d50ad) {
                                                console['log'](_0x10f5d5() + '\x20[' + _0x45c324['name'] + ']\x20Task\x20' + (_0x15388f + 0x1) + '\x20:\x20Looking\x20for\x20verification\x20mail');
                                                if (_0x21b9dc)
                                                    throw _0x21b9dc;
                                                _0x4ceadd['seq']['search']([
                                                    'UNSEEN',
                                                    [
                                                        'FROM',
                                                        'verification@kickz.com'
                                                    ]
                                                ], function (_0x13cd63, _0x496869) {
                                                    if (!_0x496869 || !_0x496869['length'])
                                                        console['log'](_0x10f5d5() + '\x20[' + _0x45c324['name'] + ']\x20No\x20mail\x20found,\x20retrying\x20in\x205\x20seconds'), _0x4ceadd['end']();
                                                    else {
                                                        var _0x14c78b = _0x4ceadd['seq']['fetch'](_0x496869, {
                                                            'bodies': '',
                                                            'markSeen': !![]
                                                        });
                                                        _0x14c78b['on']('message', function (_0x3c8d73, _0x44090c) {
                                                            var _0x81f43e = '(#' + _0x44090c + ')\x20';
                                                            _0x3c8d73['on']('body', function (_0x3fec3f, _0xc652ee) {
                                                                _0x235caf(_0x3fec3f, (_0x3be887, _0x5b4ead) => {
                                                                    if (_0x5b4ead['subject'] == 'Kickz\x20Account\x20Verification\x20Code') {
                                                                        var _0x3153ed = _0x5b4ead['html']['split']('<div\x20style=\x22display:block;font-family:Arial,sans-serif;font-size:\x2030px;font-weight:\x20600;line-height:24px;color:#333333\x22>'), _0x1a8ddc = _0x3153ed[0x1]['split']('<')[0x0];
                                                                        _0x67d6c5 = _0x1a8ddc;
                                                                    }
                                                                });
                                                            }), _0x3c8d73['once']('end', function () {
                                                            });
                                                        }), _0x14c78b['once']('error', function (_0x4e1f4a) {
                                                            console['log']('No\x20mail\x20found,\x20retrying\x20in\x205\x20seconds..');
                                                        }), _0x14c78b['once']('end', function () {
                                                            _0x4ceadd['end']();
                                                        });
                                                    }
                                                });
                                            });
                                        }), _0x4ceadd['once']('error', function (_0x317add) {
                                            console['log'](_0x43af63['red'](_0x317add['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox'), _0x5a81da = !![];
                                        }), _0x4ceadd['once']('end', async function () {
                                        }), _0x4ceadd['connect']();
                                    }
                                    _0x168c7d(), await _0x3f09d6(0x1388);
                                    if (_0x67d6c5)
                                        return _0x67d6c5;
                                    if (_0x5a81da)
                                        throw new Error('Error\x20connecting\x20to\x20imap');
                                    if (_0x57ca46 == 0x18)
                                        throw new Error('Mail\x20not\x20found');
                                }
                            }
                            ;
                            code = await _0x4cea80(), _0x3f09d6(0x320), console['log'](_0x10f5d5() + '\x20[' + _0x45c324['name'] + ']\x20Task\x20' + (_0x15388f + 0x1) + '\x20:\x20Verifying..'), await _0x9d76e9['type']('#verificationCode', code), await _0x3f09d6(0x1f4), await _0x9d76e9['click']('#buttonVerify'), await _0x3f09d6(0x190), await _0x9d76e9['click']('#buttonVerify'), await _0x3f09d6(0x3e8);
                            try {
                                await _0x9d76e9['waitForSelector']('div.b-user_greeting'), _0x4fa555 = 'no', console['log'](_0x43af63['green'](_0x10f5d5() + '\x20[' + _0x45c324['name'] + ']\x20Task\x20' + (_0x15388f + 0x1) + '\x20:\x20Account\x20' + _0x3718db[_0x15388f]['Email'] + '\x20Generated\x20&\x20Verified!')), _0x48dad3['appendFileSync']('../accounts/kickz-verified.csv', '\x0a' + _0x3718db[_0x15388f]['Email'] + ',' + _0x3718db[_0x15388f]['Password'] + ','), console['log'](_0x10f5d5() + '\x20[' + _0x45c324['name'] + ']\x20Task\x20' + (_0x15388f + 0x1) + '\x20:\x20Account\x20' + _0x3718db[_0x15388f]['Email'] + '\x20Saved\x20in\x20\x27accounts/kickz-verified.csv\x27');
                                try {
                                    _0x91debc['webhook'] != undefined && _0x91debc['webhook'] != '' && await _0x325d88(_0x91debc['webhook'], _0x33a751['succesDEVMSG']);
                                } catch {
                                }
                                await _0x325d88(_0x22e26c, _0x33a751['succesDEVMSG']);
                            } catch {
                                _0x4fa555 = 'no', console['log'](_0x43af63['red'](_0x10f5d5() + '\x20[' + _0x45c324['name'] + ']\x20Task\x20' + (_0x15388f + 0x1) + '\x20:\x20Verification\x20failed')), console['log'](_0x43af63['red'](_0x10f5d5() + '\x20[' + _0x45c324['name'] + ']\x20Task\x20' + (_0x15388f + 0x1) + '\x20:\x20Account\x20saved\x20in\x20\x27accounts/kickz-unverified.csv\x27'));
                            }
                        } catch (_0x4f6c3e) {
                            console['log'](_0x43af63['red'](_0x10f5d5() + '\x20[' + _0x45c324['name'] + ']\x20Task\x20' + (_0x15388f + 0x1) + '\x20:\x20' + _0x4f6c3e)), _0x4713e7[0x0]['title'] = 'Failed\x20kickz\x20Acc\x20Gen', _0x4713e7[0x0]['description'] = '' + _0x4f6c3e, await _0x325d88(_0x13fc34, _0x521b7f), _0x4fa555 = 'yes';
                        } finally {
                            _0x467e47 && _0x467e47['close']();
                            if (_0x4fa555 == 'yes' && _0x5496b8 != 0x5) {
                                console['log'](_0x43af63['red'](_0x10f5d5() + '\x20[' + _0x45c324['name'] + ']\x20Task\x20' + (_0x15388f + 0x1) + '\x20:\x20Retrying\x20(' + _0x5496b8 + '\x20/\x205)')), _0x15388f = _0x15388f - 0x1, _0x5496b8 = _0x5496b8 + 0x1;
                                continue;
                            }
                            _0x4fa555 == 'yes' && _0x5496b8 >= 0x5 && (_0x3d3128(_0x3718db[_0x15388f], _0x45c324), _0x4fa555 = 'no', _0x5496b8 = 0x0), console['log']('Waiting\x20for\x20' + _0x91debc['delay'] + '\x20ms'), await _0x3f09d6(_0x91debc['delay']);
                        }
                    }
                }
            },
            {
                'name': 'KICKZ\x20Raffle\x20Entries',
                'store': 'KICKZ',
                'logo': 'https://scontent-ams2-1.cdninstagram.com/v/t51.2885-19/240479500_928777121004310_8721482303708952556_n.jpg?stp=dst-jpg_s320x320&_nc_ht=scontent-ams2-1.cdninstagram.com&_nc_cat=1&_nc_ohc=9H1DnW3bwMAAX-W7Mo2&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfDjR8EqgPUyl8iQgx56K_94mx_vSIRsFkQbyEq02-zAUQ&oe=63E0E147&_nc_sid=8fd12b',
                'function': async function (_0x77eafe, _0x279ac6, _0x5aec90) {
                    _0x5f424d['use'](_0x456420()), _0x5f424d['use'](_0x5787c4({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x91debc['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x54bffb = 0x0; _0x54bffb < _0x279ac6['length']; _0x54bffb++) {
                        var _0x1f830c;
                        if (_0x2d38d5 != 'yes')
                            var _0x2d38d5 = '', _0x43a11b = 0x0;
                        _0x9f406c(_0x77eafe['name'] + '\x20Task\x20' + (_0x54bffb + 0x1) + '\x20/\x20' + _0x279ac6['length'] + '\x20||\x20File:\x20' + _0x33c890 + '\x20Proxies:\x20' + _0x19246b);
                        var _0x23ab1f = [{
                            'type': 'rich',
                            'title': 'Succesful\x20Kickz\x20Entry',
                            'description': '',
                            'color': 0xc0d6d6,
                            'fields': [
                                {
                                    'name': 'User',
                                    'value': '' + _0x52fb85
                                },
                                {
                                    'name': 'Product',
                                    'value': '' + _0x279ac6[_0x54bffb]['Url']
                                },
                                {
                                    'name': 'Size',
                                    'value': '' + _0x279ac6[_0x54bffb]['Size']
                                },
                                {
                                    'name': 'Delay',
                                    'value': '' + _0x91debc['delay']
                                },
                                {
                                    'name': 'Version',
                                    'value': '' + _0x1e9692
                                }
                            ]
                        }], _0x30a925 = await _0x19f655(_0x279ac6[_0x54bffb], _0x77eafe, 'dev', ![]), _0x21e427 = await _0x19f655(_0x279ac6[_0x54bffb], _0x77eafe, 'pub', ![]);
                        const _0x1b1725 = {
                            'succesDEVMSG': { 'embeds': [_0x30a925] },
                            'succesPUBMSG': { 'embeds': [_0x21e427] }
                        };
                        try {
                            await _0x3a2fba(_0x279ac6, _0x54bffb);
                        } catch {
                            _0x2d38d5 = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        if (_0x279ac6[_0x54bffb]['Email'] == '' || _0x279ac6[_0x54bffb]['Password'] == '' || _0x279ac6[_0x54bffb]['FirstName'] == '' || _0x279ac6[_0x54bffb]['LastName'] == '') {
                            console['log'](_0x10f5d5() + '\x20[' + _0x77eafe['name'] + ']\x20Task\x20' + (_0x54bffb + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        if (_0x91debc['useRandomProxy'] = ![])
                            var _0x57de30 = _0x5aec90[_0x54bffb]['split'](':');
                        else
                            var _0x7da221 = Math['round'](Math['random']() * (_0x5aec90['length'] - 0x1)), _0x57de30 = _0x5aec90[_0x7da221]['split'](':');
                        const _0x1aa703 = await _0x5f424d['launch']({
                            'headless': ![],
                            'args': [
                                '--proxy-server=' + _0x57de30[0x0] + ':' + _0x57de30[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                        try {
                            const _0x398693 = await _0x1aa703['newPage']();
                            await _0x398693['authenticate']({
                                'username': '' + _0x57de30[0x2],
                                'password': '' + _0x57de30[0x3]
                            }), console['log'](_0x10f5d5() + '\x20[' + _0x77eafe['name'] + ']\x20Task\x20' + (_0x54bffb + 0x1) + '\x20:\x20Getting\x20Session'), await _0x398693['setRequestInterception'](!![]), _0x398693['on']('request', _0x363527 => {
                                _0x363527['resourceType']() === 'image' || _0x363527['resourceType']() === 'font' || _0x363527['resourceType']() === 'media' ? _0x363527['abort']() : _0x363527['continue']();
                            }), await _0x398693['goto']('' + _0x279ac6[_0x54bffb]['Url'], { 'waitUntil': 'networkidle2' }), await _0x3f09d6(0x12c);
                            try {
                                await _0x398693['click']('a[title=\x22Sign\x20In\x22]');
                            } catch {
                                await _0x398693['click']('a[title=\x22sign\x20in\x22]');
                            }
                            console['log'](_0x10f5d5() + '\x20[' + _0x77eafe['name'] + ']\x20Task\x20' + (_0x54bffb + 0x1) + '\x20:\x20Logging\x20in'), await _0x398693['waitForSelector']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x398693['click']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x398693['waitForSelector']('#username'), await _0x398693['type']('#username', _0x279ac6[_0x54bffb]['Email']), await _0x398693['waitForSelector']('#password'), await _0x398693['type']('#password', _0x279ac6[_0x54bffb]['Password']), await _0x3f09d6(0x190), await _0x398693['click']('#buttonSubmit'), await _0x398693['waitForSelector']('div.b-user_greeting'), console['log'](_0x10f5d5() + '\x20[' + _0x77eafe['name'] + ']\x20Task\x20' + (_0x54bffb + 0x1) + '\x20:\x20Getting\x20Product'), await _0x3f09d6(0x1f4), await _0x398693['goto']('' + _0x279ac6[_0x54bffb]['Url'], { 'waitUntil': 'networkidle2' }), console['log'](_0x10f5d5() + '\x20[' + _0x77eafe['name'] + ']\x20Task\x20' + (_0x54bffb + 0x1) + '\x20:\x20Choosing\x20size\x20' + _0x279ac6[_0x54bffb]['Size']);
                            let _0x2e0af8 = _0x279ac6[_0x54bffb]['Size']['replace']('.5', '\x201/2');
                            await _0x398693['click']('button[title=\x22' + _0x2e0af8 + '\x22]'), await _0x3f09d6(0x1f4);
                            try {
                                await _0x398693['click']('button[data-tau=\x22add_new_address\x22]');
                            } catch {
                            }
                            await _0x3f09d6(0x12c), console['log'](_0x10f5d5() + '\x20[' + _0x77eafe['name'] + ']\x20Task\x20' + (_0x54bffb + 0x1) + '\x20:\x20Filling\x20Information'), await _0x398693['select']('#dwfrm_raffle_addressFields_salutation', 'mr'), await _0x3f09d6(0x12c), await _0x398693['type']('#dwfrm_raffle_addressFields_firstName', _0x279ac6[_0x54bffb]['FirstName']), await _0x3f09d6(0x12c), await _0x398693['type']('#dwfrm_raffle_addressFields_lastName', _0x279ac6[_0x54bffb]['LastName']), await _0x3f09d6(0x12c), await _0x398693['select']('#dwfrm_raffle_addressFields_country', _0x279ac6[_0x54bffb]['Country']), await _0x3f09d6(0x12c), await _0x398693['type']('#dwfrm_raffle_addressFields_city', _0x279ac6[_0x54bffb]['City']), await _0x3f09d6(0x12c);
                            _0x279ac6[_0x54bffb]['Postcode'] == undefined && (_0x279ac6[_0x54bffb]['Postcode'] = _0x279ac6[_0x54bffb]['Zip']);
                            await _0x398693['type']('#dwfrm_raffle_addressFields_postalCode', _0x279ac6[_0x54bffb]['Postcode']), await _0x3f09d6(0x12c), await _0x398693['type']('#dwfrm_raffle_addressFields_address1', _0x279ac6[_0x54bffb]['Address1']), await _0x3f09d6(0x12c), await _0x398693['type']('#dwfrm_raffle_addressFields_address2', _0x279ac6[_0x54bffb]['HouseNumber']), await _0x3f09d6(0x12c), await _0x398693['type']('#dwfrm_raffle_addressFields_additionalAddressInfo', _0x279ac6[_0x54bffb]['Address2']), await _0x3f09d6(0x12c), await _0x398693['click']('#dwfrm_raffle_addressFields_saveAddress'), await _0x3f09d6(0x12c), await _0x398693['type']('#dwfrm_raffle_raffleSpecificFields_instagramAccount', _0x279ac6[_0x54bffb]['Follower']), await _0x3f09d6(0x1f4), await _0x398693['click']('#dwfrm_raffle_raffleSpecificFields_consentOnConditions'), await _0x3f09d6(0x1f4), console['log'](_0x10f5d5() + '\x20[' + _0x77eafe['name'] + ']\x20Task\x20' + (_0x54bffb + 0x1) + '\x20:\x20' + _0x43af63['blue']('Awaiting\x20Paypal\x20Payment')), await _0x398693['click']('.b-paypal_button');
                            try {
                                await _0x398693['waitForSelector']('.b-raffle-message.m-success', { 'timeout': 0x493e0 }), _0x2d38d5 = 'no', _0x1b4968(_0x279ac6[_0x54bffb], _0x77eafe), console['log'](_0x43af63['green'](_0x10f5d5() + '\x20[' + _0x77eafe['name'] + ']\x20Task\x20' + (_0x54bffb + 0x1) + '\x20:\x20Raffle\x20Entered!')), _0x91debc['webhook'] != undefined && _0x91debc['webhook'] != '' && await _0x325d88(_0x91debc['webhook'], _0x1b1725['succesDEVMSG']), await _0x3f09d6(0xc8), await _0x325d88(_0x1b7c81, _0x1b1725['succesDEVMSG']), await _0x3f09d6(0xc8), await _0x325d88(_0x48b9ae, _0x1b1725['succesPUBMSG']);
                            } catch (_0x20282b) {
                                console['log'](_0x43af63['red'](_0x10f5d5() + '\x20[' + _0x77eafe['name'] + ']\x20Task\x20' + (_0x54bffb + 0x1) + '\x20:\x20Paypal\x20Error:\x20' + _0x20282b)), _0x1f830c = 'Error\x20while\x20entering\x20Paypal:\x20' + _0x20282b;
                                var _0x2cde7c = await _0x19f655(_0x279ac6[_0x54bffb], _0x77eafe, 'dev', !![], _0x1f830c);
                                _0x1b1725['errorDEV'] = { 'embeds': [_0x2cde7c] }, _0x91debc['webhook'] != undefined && _0x91debc['webhook'] != '' && await _0x325d88(_0x91debc['webhook'], _0x1b1725['errorDEV']), await _0x325d88(_0x13fc34, _0x1b1725['errorDEV']);
                            }
                        } catch (_0x32cb2c) {
                            console['log'](_0x43af63['red'](_0x10f5d5() + '\x20[' + _0x77eafe['name'] + ']\x20Task\x20' + (_0x54bffb + 0x1) + '\x20:\x20' + _0x32cb2c)), _0x1f830c = '' + _0x32cb2c;
                            var _0x2cde7c = await _0x19f655(_0x279ac6[_0x54bffb], _0x77eafe, 'dev', !![], _0x1f830c);
                            _0x1b1725['errorDEV'] = { 'embeds': [_0x2cde7c] }, _0x91debc['webhook'] != undefined && _0x91debc['webhook'] != '' && await _0x325d88(_0x91debc['webhook'], _0x1b1725['errorDEV']), await _0x325d88(_0x13fc34, _0x1b1725['errorDEV']), _0x2d38d5 = 'yes';
                        } finally {
                            _0x1aa703 && _0x1aa703['close']();
                            if (_0x2d38d5 == 'yes' && _0x43a11b != 0x5) {
                                console['log'](_0x43af63['red'](_0x10f5d5() + '\x20[' + _0x77eafe['name'] + ']\x20Task\x20' + (_0x54bffb + 0x1) + '\x20:\x20Retrying\x20(' + _0x43a11b + '\x20/\x205)')), _0x54bffb = _0x54bffb - 0x1, _0x43a11b = _0x43a11b + 0x1;
                                continue;
                            }
                            _0x2d38d5 == 'yes' && _0x43a11b >= 0x5 && (_0x3d3128(_0x279ac6[_0x54bffb], _0x77eafe), _0x2d38d5 = 'no', _0x43a11b = 0x0), console['log']('Waiting\x20for\x20' + _0x91debc['AfewDelay'] + '\x20ms'), await _0x3f09d6(_0x91debc['AfewDelay']);
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
                'function': async function (_0x2eb036, _0x111ff7, _0x404121) {
                    for (var _0x5b0bdd = 0x0; _0x5b0bdd < _0x111ff7['length']; _0x5b0bdd++) {
                        try {
                            await _0x3a2fba(_0x111ff7, _0x5b0bdd);
                        } catch {
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        async function _0x4cb94c(_0x138e92, _0xe155bc, _0x16ac20, _0x35062c, _0x5c1cb6) {
                            var _0x16fad6, _0x1dc2bd = {}, _0x528201 = [], _0x288c8d = {}, _0x42c912 = [
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
                            ], _0x47e123 = Math['round'](Math['random']() * (_0x42c912['length'] - 0x1));
                            !_0x35062c && (_0x35062c = {});
                            if (_0xe155bc != 'ver') {
                                _0x9f406c(_0x16ac20['name'] + '\x20Task\x20' + (_0x138e92 + 0x1) + '\x20/\x20' + _0x35062c['length'] + '\x20||\x20File:\x20' + _0x33c890 + '\x20Proxies:\x20' + _0x19246b), await _0x3a2fba(_0x35062c, _0x138e92), _0x1dc2bd = _0x16ac20['data'], _0x1dc2bd['data']['attributes']['email'] = '' + _0x35062c[_0x138e92]['Email'];
                                if (_0x35062c[_0x138e92]['Size'] == 'RANDOM') {
                                }
                                _0x1dc2bd['data']['attributes']['properties']['$first_name'] = '' + _0x35062c[_0x138e92]['FirstName'], _0x1dc2bd['data']['attributes']['properties']['$last_name'] = '' + _0x35062c[_0x138e92]['LastName'], _0x1dc2bd['data']['attributes']['properties']['$address1'] = _0x35062c[_0x138e92]['Address1'] + '\x20' + _0x35062c[_0x138e92]['Address2'] + '\x20' + _0x35062c[_0x138e92]['HouseNumber'], _0x1dc2bd['data']['attributes']['properties']['$zip'] = '' + _0x35062c[_0x138e92]['Zip'], _0x1dc2bd['data']['attributes']['properties']['$city'] = '' + _0x35062c[_0x138e92]['City'], _0x1dc2bd['data']['attributes']['properties']['$country'] = '' + _0x35062c[_0x138e92]['Country'], _0x35062c[_0x138e92]['Size'] == 'RANDOM' ? _0x1dc2bd['data']['attributes']['properties']['Size'] = 'US\x20W\x20/\x20EU\x20' + _0x42c912[_0x47e123] : _0x1dc2bd['data']['attributes']['properties']['Size'] = 'US\x20W\x20/\x20EU\x20' + _0x35062c[_0x138e92]['Size'], _0x1dc2bd['data']['attributes']['properties']['$phone_number'] = '' + _0x35062c[_0x138e92]['Phone'], _0x1dc2bd['data']['attributes']['properties']['Instagram\x20Account'] = '' + _0x35062c[_0x138e92]['Follower'];
                            }
                            if (_0x91debc['useRandomProxy'] = ![])
                                var _0x20c272 = _0x5c1cb6[_0x138e92]['split'](':');
                            else
                                var _0xee52ac = Math['round'](Math['random']() * (_0x5c1cb6['length'] - 0x1)), _0x20c272 = _0x5c1cb6[_0xee52ac]['split'](':');
                            var _0x1ddee3 = {
                                'jar': _0x3bf13d,
                                'followAllRedirects': !![],
                                'method': 'POST',
                                'url': _0x16ac20['url'],
                                'headers': _0x16ac20['headers'],
                                'body': JSON['stringify'](_0x1dc2bd),
                                'proxy': 'http://' + _0x20c272[0x2] + ':' + _0x20c272[0x3] + '@' + _0x20c272[0x0] + ':' + _0x20c272[0x1]
                            };
                            return _0xe155bc != 'ver' && (_0x1ddee3['url'] = _0x16ac20['url'], _0x1ddee3['headers'] = _0x16ac20['headers']), _0xe155bc == 'ver' && (_0x1ddee3['method'] = 'GET'), new Promise(function (_0x29c429, _0x192b27) {
                                callback = async (_0x32c115, _0xe8d6dd, _0x1c5004) => {
                                    if (!_0x32c115 && _0xe8d6dd['statusCode'] == 0xca || !_0x32c115 && _0xe8d6dd['statusCode'] == 0xc8) {
                                        if (_0xe155bc != 'ver') {
                                            var _0x85fe2a = await _0x19f655(_0x35062c[_0x138e92], _0x16ac20, 'dev', ![]), _0x13e00c = await _0x19f655(_0x35062c[_0x138e92], _0x16ac20, 'pub', ![]);
                                            const _0x17742e = {
                                                'succesDEVMSG': { 'embeds': [_0x85fe2a] },
                                                'succesPUBMSG': { 'embeds': [_0x13e00c] }
                                            };
                                            if (_0x91debc['webhook'] != undefined && _0x91debc['webhook'] != '')
                                                try {
                                                    await _0x325d88(_0x91debc['webhook'], _0x17742e['succesDEVMSG']);
                                                } catch {
                                                }
                                            await _0x3f09d6(0xc8), await _0x325d88(_0x1b7c81, _0x17742e['succesDEVMSG']), await _0x3f09d6(0xc8);
                                            try {
                                                await _0x325d88(_0x48b9ae, _0x17742e['succesPUBMSG']);
                                            } catch {
                                            }
                                            _0x1b4968(_0x35062c[_0x138e92], _0x16ac20);
                                        }
                                        _0x29c429(console['log'](_0x43af63['green'](_0x10f5d5() + '\x20[' + _0x16ac20['name'] + ']\x20Task\x20' + (_0x138e92 + 0x1) + ':\x20Raffle\x20Entered!')));
                                    } else {
                                        if (_0xe155bc != 'ver') {
                                            var _0x174fda = '' + _0x32c115, _0x4ee13b = await _0x19f655(_0x35062c[_0x138e92], _0x16ac20, 'dev', !![], _0x174fda), _0x2b6279 = {};
                                            _0x2b6279['errorDEV'] = { 'embeds': [_0x4ee13b] }, _0x3d3128(_0x35062c[_0x138e92], _0x16ac20), _0x91debc['webhook'] != undefined && _0x91debc['webhook'] != '' && await _0x325d88(_0x91debc['webhook'], _0x2b6279['errorDEV']), await _0x325d88(_0x13fc34, _0x2b6279['errorDEV']);
                                        }
                                        _0x192b27(console['log'](_0x43af63['red'](_0x10f5d5() + '\x20[' + _0x16ac20['name'] + ']\x20Task\x20' + (_0x138e92 + 0x1) + ':\x20' + _0x32c115)));
                                    }
                                };
                                try {
                                    _0xe155bc != 'ver' && console['log'](_0x10f5d5() + '\x20[' + _0x16ac20['name'] + ']\x20Task\x20' + (_0x138e92 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x1dc2bd['data']['attributes']['email']), _0xaea765(_0x1ddee3, callback);
                                } catch (_0x5ef43d) {
                                    console['log'](_0x10f5d5() + '\x20Task\x20' + (_0x138e92 + 0x1) + ':\x20' + _0x5ef43d);
                                }
                            });
                        }
                        ;
                        try {
                            await _0x4cb94c(_0x5b0bdd, 'nor', _0x2eb036, _0x111ff7, _0x404121), console['log'](_0x10f5d5() + '\x20[' + _0x2eb036['name'] + ']\x20Sleeping\x20for\x20' + _0x91debc['delay'] + '\x20ms'), await _0x3f09d6(_0x91debc['delay']);
                        } catch (_0x30c334) {
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
                'function': async function (_0x1f7fee, _0x429061, _0x3ccc07) {
                    var _0x885baf = [], _0x56f1e3 = ![];
                    async function _0x574981() {
                        var _0x5a6456 = new _0x328bb9({
                            'user': _0x91debc['masterMail'],
                            'password': _0x91debc['masterPassword'],
                            'host': 'imap.gmail.com',
                            'port': 0x3e1,
                            'tls': !![],
                            'autotls': 'always'
                        });
                        function _0x487fbb(_0x192294) {
                            _0x5a6456['openBox']('INBOX', ![], _0x192294);
                        }
                        _0x5a6456['once']('ready', function () {
                            _0x487fbb(function (_0x2bdec7, _0x2952ba) {
                                console['clear'](), console['log']('Looking\x20For\x20Links');
                                if (_0x2bdec7)
                                    throw _0x2bdec7;
                                _0x5a6456['seq']['search']([
                                    'UNSEEN',
                                    [
                                        'SUBJECT',
                                        'Confirm\x20Your\x20Subscription'
                                    ]
                                ], function (_0x59f684, _0x1a8c5a) {
                                    if (!_0x1a8c5a || !_0x1a8c5a['length'])
                                        console['log'](_0x10f5d5() + '\x20[' + _0x1f7fee['name'] + ']\x20No\x20mails\x20found'), _0x5a6456['end']();
                                    else {
                                        var _0x28bb54 = _0x5a6456['seq']['fetch'](_0x1a8c5a, {
                                            'bodies': '',
                                            'markSeen': !![]
                                        });
                                        _0x28bb54['on']('message', function (_0x8843e2, _0x5c55c9) {
                                            var _0xd57df6 = '(#' + _0x5c55c9 + ')\x20';
                                            _0x8843e2['on']('body', function (_0x46b85e, _0x51c744) {
                                                _0x235caf(_0x46b85e, (_0x2dd5e6, _0x47426a) => {
                                                    var _0x29e324 = _0x47426a['text']['split']('(')[0x1], _0x465348 = _0x29e324['split'](')')[0x0];
                                                    _0x885baf['push'](_0x465348);
                                                });
                                            }), _0x8843e2['once']('end', function () {
                                            });
                                        }), _0x28bb54['once']('error', function (_0x112eb6) {
                                            console['log']('Fetch\x20error:\x20' + _0x112eb6), _0x56f1e3 = !![];
                                        }), _0x28bb54['once']('end', function () {
                                            _0x5a6456['end']();
                                        });
                                    }
                                });
                            });
                        }), _0x5a6456['once']('error', function (_0x384a0a) {
                            console['log'](_0x43af63['red'](_0x384a0a['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox'), _0x56f1e3 = !![];
                        }), _0x5a6456['once']('end', async function () {
                            _0x56f1e3 = !![];
                        }), _0x5a6456['connect']();
                    }
                    async function _0x30cee7(_0x7ed1bb, _0x396cf7, _0x2ecbd4) {
                        for (var _0x5abed0 = 0x0; _0x5abed0 < _0x396cf7['length']; _0x5abed0++) {
                            async function _0x5d122c(_0x261b47, _0x513415, _0x266bdc, _0x3d58c6, _0x4e79b3) {
                                var _0x1ec7ee, _0x2b27a1 = {}, _0x3cec25 = [], _0x591d23 = {}, _0x4a5b3a = [
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
                                ], _0xadbb5 = Math['round'](Math['random']() * (_0x4a5b3a['length'] - 0x1));
                                _0x3d58c6[_0x261b47]['Size'] == 'RANDOM' && (_0x3d58c6[_0x261b47]['Size'] = _0x4a5b3a[_0xadbb5]);
                                !_0x3d58c6 && (_0x3d58c6 = {});
                                if (_0x91debc['useRandomProxy'] = ![])
                                    var _0x4b013d = _0x4e79b3[_0x261b47]['split'](':');
                                else
                                    var _0x3029eb = Math['round'](Math['random']() * (_0x4e79b3['length'] - 0x1)), _0x4b013d = _0x4e79b3[_0x3029eb]['split'](':');
                                var _0x506398 = {
                                    'jar': _0x3bf13d,
                                    'followAllRedirects': !![],
                                    'method': 'POST',
                                    'url': _0x266bdc['url'],
                                    'headers': _0x266bdc['headers'],
                                    'body': JSON['stringify'](_0x2b27a1),
                                    'proxy': 'http://' + _0x4b013d[0x2] + ':' + _0x4b013d[0x3] + '@' + _0x4b013d[0x0] + ':' + _0x4b013d[0x1]
                                };
                                return _0x513415 != 'ver' && (_0x506398['url'] = _0x266bdc['url'], _0x506398['headers'] = _0x266bdc['headers']), _0x513415 == 'ver' && (_0x506398['method'] = 'GET', _0x506398['url'] = _0x3d58c6[_0x261b47]), new Promise(function (_0x10fb4f, _0x4e3725) {
                                    callback = async (_0x4d9cb9, _0x36f22a, _0x2e8566) => {
                                        if (!_0x4d9cb9 && _0x36f22a['statusCode'] == 0xca || !_0x4d9cb9 && _0x36f22a['statusCode'] == 0xc8) {
                                            if (_0x513415 != 'ver') {
                                                var _0x32fc40 = await _0x19f655(_0x3d58c6[_0x261b47], _0x266bdc, 'dev', ![]), _0x63c675 = await _0x19f655(_0x3d58c6[_0x261b47], _0x266bdc, 'pub', ![]);
                                                const _0x2b7e1d = {
                                                    'succesDEVMSG': { 'embeds': [_0x32fc40] },
                                                    'succesPUBMSG': { 'embeds': [_0x63c675] }
                                                };
                                                if (_0x91debc['webhook'] != undefined && _0x91debc['webhook'] != '')
                                                    try {
                                                        await _0x325d88(_0x91debc['webhook'], _0x2b7e1d['succesDEVMSG']);
                                                    } catch {
                                                    }
                                                await _0x3f09d6(0xc8), await _0x325d88(_0x1b7c81, _0x2b7e1d['succesDEVMSG']), await _0x3f09d6(0xc8);
                                                try {
                                                    await _0x325d88(_0x48b9ae, _0x2b7e1d['succesPUBMSG']);
                                                } catch {
                                                }
                                                _0x1b4968(_0x3d58c6[_0x261b47], _0x266bdc);
                                            }
                                            _0x10fb4f(console['log'](_0x43af63['green'](_0x10f5d5() + '\x20[' + _0x266bdc['name'] + ']\x20Task\x20' + (_0x261b47 + 0x1) + ':\x20Raffle\x20Entered!')));
                                        } else {
                                            if (_0x513415 != 'ver') {
                                                var _0x1d3b17 = '' + _0x4d9cb9, _0x7087d0 = await _0x19f655(_0x3d58c6[_0x261b47], _0x266bdc, 'dev', !![], _0x1d3b17), _0x5aae45 = {};
                                                _0x5aae45['errorDEV'] = { 'embeds': [_0x7087d0] }, _0x3d3128(_0x3d58c6[_0x261b47], _0x266bdc), _0x91debc['webhook'] != undefined && _0x91debc['webhook'] != '' && await _0x325d88(_0x91debc['webhook'], _0x5aae45['errorDEV']), await _0x325d88(_0x13fc34, _0x5aae45['errorDEV']);
                                            }
                                            _0x4e3725(console['log'](_0x43af63['red'](_0x10f5d5() + '\x20[' + _0x266bdc['name'] + ']\x20Task\x20' + (_0x261b47 + 0x1) + ':\x20' + _0x4d9cb9)));
                                        }
                                    };
                                    try {
                                        _0x513415 != 'ver' ? console['log'](_0x10f5d5() + '\x20[' + _0x266bdc['name'] + ']\x20Task\x20' + (_0x261b47 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x2b27a1['data']['attributes']['email']) : console['log'](_0x10f5d5() + '\x20[' + _0x266bdc['name'] + ']\x20Task\x20' + (_0x261b47 + 0x1) + ':\x20Fetching\x20Response'), _0xaea765(_0x506398, callback);
                                    } catch (_0x5eaa19) {
                                        console['log'](_0x10f5d5() + '\x20Task\x20' + (_0x261b47 + 0x1) + ':\x20' + _0x5eaa19);
                                    }
                                });
                            }
                            ;
                            try {
                                await _0x5d122c(_0x5abed0, 'ver', _0x7ed1bb, _0x396cf7, _0x2ecbd4), console['log'](_0x10f5d5() + '\x20[' + _0x7ed1bb['name'] + ']\x20Sleeping\x20for\x20' + _0x91debc['delay'] + '\x20ms'), await _0x3f09d6(_0x91debc['delay']);
                            } catch (_0x37fff6) {
                            }
                        }
                    }
                    try {
                        _0x574981();
                        while (!_0x56f1e3) {
                            await _0x3f09d6(0xbb8);
                        }
                        console['log']('Found\x20' + _0x885baf['length'] + '\x20Links\x20in\x20Mailbox');
                    } catch {
                        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..'), await _0x3f09d6(0x9c4);
                    }
                    await _0x30cee7(_0x1f7fee, _0x885baf, _0x3ccc07);
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
                            'list_id': 'YAQ4Ja',
                            'custom_source': 'DN3707-100',
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
                                '$consent_form_id': 'TntaQ5',
                                '$consent_form_version': 0x81b1d1,
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
                'function': async function (_0x1392b5, _0x2b4a04, _0x3304b5) {
                    for (var _0x2dd87a = 0x0; _0x2dd87a < _0x2b4a04['length']; _0x2dd87a++) {
                        try {
                            await _0x3a2fba(_0x2b4a04, _0x2dd87a);
                        } catch {
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        async function _0x224c06(_0x5c1d8f, _0x355834, _0x4fe0d2, _0x50b457, _0x4bb213) {
                            var _0x384ccf, _0x40fd45 = {}, _0x39a19d = [], _0x497491 = {}, _0x289eee = [
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
                            ], _0x198ed9 = Math['round'](Math['random']() * (_0x289eee['length'] - 0x1));
                            !_0x50b457 && (_0x50b457 = {});
                            if (_0x355834 != 'ver') {
                                _0x9f406c(_0x4fe0d2['name'] + '\x20Task\x20' + (_0x5c1d8f + 0x1) + '\x20/\x20' + _0x50b457['length'] + '\x20||\x20File:\x20' + _0x33c890 + '\x20Proxies:\x20' + _0x19246b), _0x39a19d = [{
                                    'type': 'rich',
                                    'title': 'Succesful\x20OQIUM\x20Entry',
                                    'description': '',
                                    'color': 0xc0d6d6,
                                    'fields': [
                                        {
                                            'name': 'User',
                                            'value': '' + _0x52fb85
                                        },
                                        {
                                            'name': 'Size',
                                            'value': '' + _0x50b457[_0x5c1d8f]['Size']
                                        },
                                        {
                                            'name': 'Delay',
                                            'value': '' + _0x91debc['delay']
                                        },
                                        {
                                            'name': 'Version',
                                            'value': '' + _0x1e9692
                                        }
                                    ]
                                }], _0x497491 = { 'embeds': _0x39a19d }, _0x40fd45 = _0x4fe0d2['data'], _0x40fd45['data']['attributes']['email'] = '' + _0x50b457[_0x5c1d8f]['Email'];
                                if (_0x50b457[_0x5c1d8f]['Size'] == 'RANDOM') {
                                }
                                _0x40fd45['data']['attributes']['properties']['$first_name'] = '' + _0x50b457[_0x5c1d8f]['FirstName'], _0x40fd45['data']['attributes']['properties']['$last_name'] = '' + _0x50b457[_0x5c1d8f]['LastName'], _0x40fd45['data']['attributes']['properties']['$address1'] = _0x50b457[_0x5c1d8f]['Address1'] + '\x20' + _0x50b457[_0x5c1d8f]['Address2'] + '\x20' + _0x50b457[_0x5c1d8f]['HouseNumber'], _0x40fd45['data']['attributes']['properties']['$zip'] = '' + _0x50b457[_0x5c1d8f]['Zip'], _0x40fd45['data']['attributes']['properties']['$city'] = '' + _0x50b457[_0x5c1d8f]['City'], _0x40fd45['data']['attributes']['properties']['$country'] = '' + _0x50b457[_0x5c1d8f]['Country'], _0x50b457[_0x5c1d8f]['Size'] == 'RANDOM' ? _0x40fd45['data']['attributes']['properties']['Size'] = 'US\x20W\x20/\x20EU\x20' + _0x289eee[_0x198ed9] : _0x40fd45['data']['attributes']['properties']['Size'] = 'US\x20W\x20/\x20EU\x20' + _0x50b457[_0x5c1d8f]['Size'], _0x40fd45['data']['attributes']['properties']['$phone_number'] = '' + _0x50b457[_0x5c1d8f]['Phone'], _0x40fd45['data']['attributes']['properties']['Instagram\x20Account'] = '' + _0x50b457[_0x5c1d8f]['Follower'];
                            }
                            if (_0x91debc['useRandomProxy'] = ![])
                                var _0x185879 = _0x4bb213[_0x5c1d8f]['split'](':');
                            else
                                var _0x3e1938 = Math['round'](Math['random']() * (_0x4bb213['length'] - 0x1)), _0x185879 = _0x4bb213[_0x3e1938]['split'](':');
                            var _0x57c063 = {
                                'jar': _0x3bf13d,
                                'followAllRedirects': !![],
                                'method': 'POST',
                                'url': _0x4fe0d2['url'],
                                'headers': _0x4fe0d2['headers'],
                                'body': JSON['stringify'](_0x40fd45),
                                'proxy': 'http://' + _0x185879[0x2] + ':' + _0x185879[0x3] + '@' + _0x185879[0x0] + ':' + _0x185879[0x1]
                            };
                            return _0x355834 != 'ver' && (_0x57c063['url'] = _0x4fe0d2['url'], _0x57c063['headers'] = _0x4fe0d2['headers']), _0x355834 == 'ver' && (_0x57c063['method'] = 'GET'), new Promise(function (_0x502439, _0x24ca94) {
                                callback = async (_0x1dc639, _0x261ea9, _0x1360dc) => {
                                    if (!_0x1dc639 && _0x261ea9['statusCode'] == 0xca || !_0x1dc639 && _0x261ea9['statusCode'] == 0xc8) {
                                        if (_0x355834 != 'ver') {
                                            var _0x3355e7 = await _0x19f655(_0x50b457[_0x5c1d8f], _0x4fe0d2, 'dev', ![]), _0x366866 = await _0x19f655(_0x50b457[_0x5c1d8f], _0x4fe0d2, 'pub', ![]);
                                            const _0x5c53fe = {
                                                'succesDEVMSG': { 'embeds': [_0x3355e7] },
                                                'succesPUBMSG': { 'embeds': [_0x366866] }
                                            };
                                            if (_0x91debc['webhook'] != undefined && _0x91debc['webhook'] != '')
                                                try {
                                                    await _0x325d88(_0x91debc['webhook'], _0x5c53fe['succesDEVMSG']);
                                                } catch {
                                                }
                                            await _0x3f09d6(0xc8), await _0x325d88(_0x1b7c81, _0x5c53fe['succesDEVMSG']), await _0x3f09d6(0xc8);
                                            try {
                                                await _0x325d88(_0x48b9ae, _0x5c53fe['succesPUBMSG']);
                                            } catch {
                                            }
                                            _0x1b4968(_0x50b457[_0x5c1d8f], _0x4fe0d2);
                                        }
                                        _0x502439(console['log'](_0x43af63['green'](_0x10f5d5() + '\x20[' + _0x4fe0d2['name'] + ']\x20Task\x20' + (_0x5c1d8f + 0x1) + ':\x20Raffle\x20Entered!')));
                                    } else {
                                        if (_0x355834 != 'ver') {
                                            var _0x615709 = '' + _0x1dc639, _0x322703 = await _0x19f655(_0x50b457[_0x5c1d8f], _0x4fe0d2, 'dev', !![], _0x615709), _0x108ca4 = {};
                                            _0x108ca4['errorDEV'] = { 'embeds': [_0x322703] }, _0x3d3128(_0x50b457[_0x5c1d8f], _0x4fe0d2), _0x91debc['webhook'] != undefined && _0x91debc['webhook'] != '' && await _0x325d88(_0x91debc['webhook'], _0x108ca4['errorDEV']), await _0x325d88(_0x13fc34, _0x108ca4['errorDEV']);
                                        }
                                        _0x24ca94(console['log'](_0x43af63['red'](_0x10f5d5() + '\x20[' + _0x4fe0d2['name'] + ']\x20Task\x20' + (_0x5c1d8f + 0x1) + ':\x20' + _0x1dc639)));
                                    }
                                };
                                try {
                                    _0x355834 != 'ver' && console['log'](_0x10f5d5() + '\x20[' + _0x4fe0d2['name'] + ']\x20Task\x20' + (_0x5c1d8f + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x40fd45['data']['attributes']['email']), _0xaea765(_0x57c063, callback);
                                } catch (_0x39188e) {
                                    console['log'](_0x10f5d5() + '\x20Task\x20' + (_0x5c1d8f + 0x1) + ':\x20' + _0x39188e);
                                }
                            });
                        }
                        ;
                        try {
                            await _0x224c06(_0x2dd87a, 'nor', _0x1392b5, _0x2b4a04, _0x3304b5), console['log'](_0x10f5d5() + '\x20[' + _0x1392b5['name'] + ']\x20Sleeping\x20for\x20' + _0x91debc['delay'] + '\x20ms'), await _0x3f09d6(_0x91debc['delay']);
                        } catch (_0x4cc894) {
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
                'function': async function (_0x47cae6, _0xa5f96c, _0x2b89e0) {
                    var _0xa5f96c = [], _0x10bcd = ![];
                    async function _0x297f24() {
                        var _0x44534c = new _0x328bb9({
                            'user': _0x91debc['masterMail'],
                            'password': _0x91debc['masterPassword'],
                            'host': 'imap.gmail.com',
                            'port': 0x3e1,
                            'tls': !![],
                            'autotls': 'always'
                        });
                        function _0x2a1d88(_0x84dafd) {
                            _0x44534c['openBox']('INBOX', ![], _0x84dafd);
                        }
                        _0x44534c['once']('ready', function () {
                            _0x2a1d88(function (_0x24bf60, _0x19d197) {
                                console['clear'](), console['log']('Looking\x20For\x20Links');
                                if (_0x24bf60)
                                    throw _0x24bf60;
                                _0x44534c['seq']['search']([
                                    'UNSEEN',
                                    [
                                        'SUBJECT',
                                        'Confirm\x20Your\x20Subscription'
                                    ],
                                    [
                                        'FROM',
                                        'OQIUM'
                                    ]
                                ], function (_0x5727b5, _0x215e99) {
                                    if (!_0x215e99 || !_0x215e99['length'])
                                        console['log'](_0x10f5d5() + '\x20[' + _0x47cae6['name'] + ']\x20No\x20mails\x20found'), _0x44534c['end']();
                                    else {
                                        var _0x502245 = _0x44534c['seq']['fetch'](_0x215e99, {
                                            'bodies': '',
                                            'markSeen': !![]
                                        });
                                        _0x502245['on']('message', function (_0x5ee891, _0x1ace3c) {
                                            var _0x540ded = '(#' + _0x1ace3c + ')\x20';
                                            _0x5ee891['on']('body', function (_0x4214d9, _0x2311a6) {
                                                _0x235caf(_0x4214d9, (_0x1defcd, _0x45492d) => {
                                                    var _0x3c2629 = _0x45492d['text']['split']('(')[0x1], _0x2b5d33 = _0x3c2629['split'](')')[0x0];
                                                    _0xa5f96c['push'](_0x2b5d33);
                                                });
                                            }), _0x5ee891['once']('end', function () {
                                            });
                                        }), _0x502245['once']('error', function (_0x4e5a55) {
                                            console['log']('Fetch\x20error:\x20' + _0x4e5a55), _0x10bcd = !![];
                                        }), _0x502245['once']('end', function () {
                                            _0x44534c['end'](), _0x10bcd = !![];
                                        });
                                    }
                                });
                            });
                        }), _0x44534c['once']('error', function (_0x29246d) {
                            console['log'](_0x29246d), _0x10bcd = !![];
                        }), _0x44534c['once']('end', async function () {
                            _0x10bcd = !![];
                        }), _0x44534c['connect']();
                    }
                    async function _0x204265(_0x58cb15, _0x594a2a, _0x4618ee) {
                        for (var _0x419ed5 = 0x0; _0x419ed5 < _0x594a2a['length']; _0x419ed5++) {
                            async function _0x44ab00(_0x38d9c1, _0x23778a, _0x4e99dc, _0x4d6ec2, _0x4b455c) {
                                var _0x35cccb, _0x21bf00 = {}, _0x2164b6 = [], _0x2ea510 = {}, _0x51c934 = [
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
                                ], _0x2cd8df = Math['round'](Math['random']() * (_0x51c934['length'] - 0x1));
                                _0x4d6ec2[_0x38d9c1]['Size'] == 'RANDOM' && (_0x4d6ec2[_0x38d9c1]['Size'] = _0x51c934[_0x2cd8df]);
                                !_0x4d6ec2 && (_0x4d6ec2 = {});
                                if (_0x91debc['useRandomProxy'] = ![])
                                    var _0x268983 = _0x4b455c[_0x38d9c1]['split'](':');
                                else
                                    var _0x2f3c21 = Math['round'](Math['random']() * (_0x4b455c['length'] - 0x1)), _0x268983 = _0x4b455c[_0x2f3c21]['split'](':');
                                var _0x33d05a = {
                                    'jar': _0x3bf13d,
                                    'followAllRedirects': !![],
                                    'method': 'POST',
                                    'url': _0x4e99dc['url'],
                                    'headers': _0x4e99dc['headers'],
                                    'body': JSON['stringify'](_0x21bf00),
                                    'proxy': 'http://' + _0x268983[0x2] + ':' + _0x268983[0x3] + '@' + _0x268983[0x0] + ':' + _0x268983[0x1]
                                };
                                return _0x23778a != 'ver' && (_0x33d05a['url'] = _0x4e99dc['url'], _0x33d05a['headers'] = _0x4e99dc['headers']), _0x23778a == 'ver' && (_0x33d05a['method'] = 'GET', _0x33d05a['url'] = _0x4d6ec2[_0x38d9c1]), new Promise(function (_0x54fc7d, _0x2271b1) {
                                    callback = async (_0x4d541d, _0x29219b, _0x48b8b8) => {
                                        if (!_0x4d541d && _0x29219b['statusCode'] == 0xca || !_0x4d541d && _0x29219b['statusCode'] == 0xc8) {
                                            if (_0x23778a != 'ver') {
                                                var _0x3bde95 = await _0x19f655(_0x4d6ec2[_0x38d9c1], _0x4e99dc, 'dev', ![]), _0x4cc705 = await _0x19f655(_0x4d6ec2[_0x38d9c1], _0x4e99dc, 'pub', ![]);
                                                const _0x366ad8 = {
                                                    'succesDEVMSG': { 'embeds': [_0x3bde95] },
                                                    'succesPUBMSG': { 'embeds': [_0x4cc705] }
                                                };
                                                if (_0x91debc['webhook'] != undefined && _0x91debc['webhook'] != '')
                                                    try {
                                                        await _0x325d88(_0x91debc['webhook'], _0x366ad8['succesDEVMSG']);
                                                    } catch {
                                                    }
                                                await _0x3f09d6(0xc8), await _0x325d88(_0x1b7c81, _0x366ad8['succesDEVMSG']), await _0x3f09d6(0xc8);
                                                try {
                                                    await _0x325d88(_0x48b9ae, _0x366ad8['succesPUBMSG']);
                                                } catch {
                                                }
                                                _0x1b4968(_0x4d6ec2[_0x38d9c1], _0x4e99dc);
                                            }
                                            _0x54fc7d(console['log'](_0x43af63['green'](_0x10f5d5() + '\x20[' + _0x4e99dc['name'] + ']\x20Task\x20' + (_0x38d9c1 + 0x1) + ':\x20Raffle\x20Entered!')));
                                        } else {
                                            if (_0x23778a != 'ver') {
                                                var _0x12c17f = '' + _0x4d541d, _0x590ef5 = await _0x19f655(_0x4d6ec2[_0x38d9c1], _0x4e99dc, 'dev', !![], _0x12c17f), _0x46c159 = {};
                                                _0x46c159['errorDEV'] = { 'embeds': [_0x590ef5] }, _0x3d3128(_0x4d6ec2[_0x38d9c1], _0x4e99dc), _0x91debc['webhook'] != undefined && _0x91debc['webhook'] != '' && await _0x325d88(_0x91debc['webhook'], _0x46c159['errorDEV']), await _0x325d88(_0x13fc34, _0x46c159['errorDEV']);
                                            }
                                            _0x2271b1(console['log'](_0x43af63['red'](_0x10f5d5() + '\x20[' + _0x4e99dc['name'] + ']\x20Task\x20' + (_0x38d9c1 + 0x1) + ':\x20' + _0x4d541d)));
                                        }
                                    };
                                    try {
                                        _0x23778a != 'ver' ? console['log'](_0x10f5d5() + '\x20[' + _0x4e99dc['name'] + ']\x20Task\x20' + (_0x38d9c1 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x21bf00['data']['attributes']['email']) : console['log'](_0x10f5d5() + '\x20[' + _0x4e99dc['name'] + ']\x20Task\x20' + (_0x38d9c1 + 0x1) + ':\x20Fetching\x20Response'), _0xaea765(_0x33d05a, callback);
                                    } catch (_0x5c6d69) {
                                        console['log'](_0x10f5d5() + '\x20Task\x20' + (_0x38d9c1 + 0x1) + ':\x20' + _0x5c6d69);
                                    }
                                });
                            }
                            ;
                            try {
                                await _0x44ab00(_0x419ed5, 'ver', _0x58cb15, _0x594a2a, _0x4618ee), console['log'](_0x10f5d5() + '\x20[' + _0x58cb15['name'] + ']\x20Sleeping\x20for\x20' + _0x91debc['delay'] + '\x20ms'), await _0x3f09d6(_0x91debc['delay']);
                            } catch (_0x4ed84b) {
                            }
                        }
                    }
                    try {
                        _0x297f24();
                        while (!_0x10bcd) {
                            await _0x3f09d6(0xfa0);
                        }
                        console['log']('Found\x20' + _0xa5f96c['length'] + '\x20Links\x20in\x20Mailbox');
                    } catch {
                        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..');
                    }
                    await _0x204265(_0x47cae6, _0xa5f96c, _0x2b89e0);
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
                'function': async function (_0x400ce3, _0x314764, _0x231437) {
                    _0x5f424d['use'](_0x456420()), _0x5f424d['use'](_0x5787c4({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x91debc['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x2d47eb = 0x0; _0x2d47eb < _0x314764['length']; _0x2d47eb++) {
                        var _0x294840 = [{
                            'type': 'rich',
                            'title': 'Succesful\x20Patta\x20Account\x20Generated',
                            'description': '',
                            'color': 0xc0d6d6,
                            'fields': [
                                {
                                    'name': 'User',
                                    'value': '' + _0x52fb85
                                },
                                {
                                    'name': 'Delay',
                                    'value': '' + _0x91debc['delay']
                                },
                                {
                                    'name': 'Version',
                                    'value': '' + _0x1e9692
                                }
                            ]
                        }];
                        const _0x5645d2 = { 'embeds': _0x294840 };
                        _0x9f406c(_0x400ce3['name'] + '\x20Task\x20' + (_0x2d47eb + 0x1) + '\x20/\x20' + _0x314764['length'] + '\x20||\x20File:\x20' + _0x33c890 + '\x20Proxies:\x20' + _0x19246b);
                        try {
                            await _0x3a2fba(_0x314764, _0x2d47eb);
                        } catch {
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        var _0x32410e = await _0x19f655(_0x314764[_0x2d47eb], _0x400ce3, 'acc', ![]);
                        const _0x21b257 = { 'succesDEVMSG': { 'embeds': [_0x32410e] } };
                        if (_0x314764[_0x2d47eb]['Email'] == '' || _0x314764[_0x2d47eb]['FirstName'] == '' || _0x314764[_0x2d47eb]['LastName'] == '') {
                            console['log'](_0x10f5d5() + '\x20[' + _0x4b4650[taskModule]['name'] + ']\x20Task\x20' + (_0x2d47eb + 0x1) + '\x20:\x20Invalid\x20CSV'), await _0x3f09d6(0x7d0);
                            continue;
                        }
                        (_0x314764[_0x2d47eb]['Password'] == '' || _0x314764[_0x2d47eb] == undefined) && _0x314764[_0x2d47eb]['Password'] == 'JRaffles23!';
                        if (_0x91debc['useRandomProxy'] = ![])
                            var _0xf6882d = _0x231437[_0x2d47eb]['split'](':');
                        else
                            var _0x3d8030 = Math['round'](Math['random']() * (_0x231437['length'] - 0x1)), _0xf6882d = _0x231437[_0x3d8030]['split'](':');
                        const _0x20b00a = await _0x5f424d['launch']({
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0xf6882d[0x0] + ':' + _0xf6882d[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                        try {
                            const _0x51575f = await _0x20b00a['newPage']();
                            await _0x51575f['authenticate']({
                                'username': '' + _0xf6882d[0x2],
                                'password': '' + _0xf6882d[0x3]
                            }), console['log'](_0x10f5d5() + '\x20[' + _0x400ce3['name'] + ']\x20Task\x20' + (_0x2d47eb + 0x1) + '\x20:\x20Getting\x20Session'), await _0x51575f['setRequestInterception'](!![]), _0x51575f['on']('request', _0x40c509 => {
                                _0x40c509['resourceType']() === 'image' || _0x40c509['resourceType']() === 'font' || _0x40c509['resourceType']() === 'media' ? _0x40c509['abort']() : _0x40c509['continue']();
                            }), await _0x51575f['goto']('https://patta.nl/account/register'), await _0x3f09d6(0xbb8), await _0x51575f['waitForSelector']('#RegisterForm-FirstName'), console['log'](_0x10f5d5() + '\x20[' + _0x400ce3['name'] + ']\x20Task\x20' + (_0x2d47eb + 0x1) + '\x20:\x20Filling\x20information'), await _0x51575f['type']('#RegisterForm-FirstName', '' + _0x314764[_0x2d47eb]['FirstName']), await _0x3f09d6(0x226), await _0x51575f['type']('#RegisterForm-LastName', '' + _0x314764[_0x2d47eb]['LastName']), await _0x3f09d6(0x226), await _0x51575f['type']('#RegisterForm-email', '' + _0x314764[_0x2d47eb]['Email']), await _0x3f09d6(0x226), await _0x51575f['type']('#RegisterForm-password', '' + _0x314764[_0x2d47eb]['Password']), await _0x3f09d6(0x226), console['log'](_0x10f5d5() + '\x20[' + _0x400ce3['name'] + ']\x20Task\x20' + (_0x2d47eb + 0x1) + '\x20:\x20Submitting..'), await _0x51575f['$eval']('#RegisterForm', _0x23b675 => _0x23b675['submit']()), await _0x3f09d6(0x1f40);
                            try {
                                await _0x51575f['waitForSelector']('.home-page-grid__collection'), await _0x3f09d6(0x1f4), console['log'](_0x43af63['green'](_0x10f5d5() + '\x20[' + _0x400ce3['name'] + ']\x20Task\x20' + (_0x2d47eb + 0x1) + '\x20:\x20Account\x20' + _0x314764[_0x2d47eb]['Email'] + '\x20Generated!')), _0x48dad3['appendFileSync']('../accounts/patta.csv', '\x0a' + _0x314764[_0x2d47eb]['Email'] + ',' + _0x314764[_0x2d47eb]['Password']), console['log'](_0x43af63['yellow'](_0x10f5d5() + '\x20[' + _0x400ce3['name'] + ']\x20Task\x20' + (_0x2d47eb + 0x1) + '\x20:\x20Account\x20' + _0x314764[_0x2d47eb]['Email'] + '\x20Saved\x20in\x20\x27accounts/patta.csv\x27'));
                                try {
                                    _0x91debc['webhook'] != undefined && _0x91debc['webhook'] != '' && await _0x325d88(_0x91debc['webhook'], _0x21b257['succesDEVMSG']);
                                } catch {
                                }
                                await _0x325d88(_0x22e26c, _0x21b257['succesDEVMSG']);
                            } catch (_0x580b7b) {
                                console['log'](_0x43af63['red'](_0x10f5d5() + '\x20[' + _0x4b4650[taskModule]['name'] + ']\x20Task\x20' + (_0x2d47eb + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x580b7b));
                            }
                        } catch (_0x4476ab) {
                            console['log'](_0x43af63['red'](_0x10f5d5() + '\x20[' + _0x4b4650[taskModule]['name'] + ']\x20Task\x20' + (_0x2d47eb + 0x1) + '\x20:\x20' + _0x4476ab));
                        } finally {
                            _0x20b00a && _0x20b00a['close'](), console['log']('Waiting\x20for\x20' + _0x91debc['delay'] + '\x20ms'), await _0x3f09d6(_0x91debc['delay']);
                        }
                    }
                }
            },
            {
                'name': 'PATTA\x20Raffle\x20Entries',
                'store': 'Patta',
                'logo': 'https://cdn.shopify.com/s/files/1/0473/6965/0340/collections/patta_42f8af38-44b4-4c1b-a6f3-ec368a7b6f58_1200x1200.jpg?v=1665406562',
                'function': async function (_0x73f991, _0x46fae4, _0x5daef0) {
                    _0x5f424d['use'](_0x456420()), _0x5f424d['use'](_0x5787c4({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x91debc['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x3552b4 = 0x0; _0x3552b4 < _0x46fae4['length']; _0x3552b4++) {
                        var _0x233f1c;
                        if (_0x37b19c != 'yes')
                            var _0x37b19c = '', _0x4c4e3f = 0x0;
                        _0x9f406c(_0x73f991['name'] + '\x20Task\x20' + (_0x3552b4 + 0x1) + '\x20/\x20' + _0x46fae4['length'] + '\x20||\x20File:\x20' + _0x33c890 + '\x20Proxies:\x20' + _0x19246b);
                        try {
                            await _0x3a2fba(_0x46fae4, _0x3552b4);
                        } catch {
                            _0x37b19c = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        if (_0x46fae4[_0x3552b4]['Email'] == '' || _0x46fae4[_0x3552b4]['Password'] == '' || _0x46fae4[_0x3552b4]['FirstName'] == '' || _0x46fae4[_0x3552b4]['LastName'] == '') {
                            console['log'](_0x10f5d5() + '\x20[' + _0x4b4650[taskModule]['name'] + ']\x20Task\x20' + (_0x3552b4 + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        if (_0x91debc['useRandomProxy'] = ![])
                            var _0x33f066 = _0x5daef0[_0x3552b4]['split'](':');
                        else
                            var _0x116199 = Math['round'](Math['random']() * (_0x5daef0['length'] - 0x1)), _0x33f066 = _0x5daef0[_0x116199]['split'](':');
                        const _0x5831ca = await _0x5f424d['launch']({
                            'headless': ![],
                            'args': [
                                '--proxy-server=' + _0x33f066[0x0] + ':' + _0x33f066[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                        try {
                            const _0x373626 = await _0x5831ca['newPage']();
                            await _0x373626['authenticate']({
                                'username': '' + _0x33f066[0x2],
                                'password': '' + _0x33f066[0x3]
                            }), console['log'](_0x10f5d5() + '\x20[' + _0x73f991['name'] + ']\x20Task\x20' + (_0x3552b4 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x373626['setRequestInterception'](!![]), _0x373626['on']('request', _0x344f0f => {
                                _0x344f0f['resourceType']() === 'image' || _0x344f0f['resourceType']() === 'font' || _0x344f0f['resourceType']() === 'media' ? _0x344f0f['abort']() : _0x344f0f['continue']();
                            }), await _0x373626['goto']('https://www.patta.nl/nl/account/login', {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            }), await _0x373626['waitForSelector']('#CustomerEmail'), console['log'](_0x10f5d5() + '\x20[' + _0x73f991['name'] + ']\x20Task\x20' + (_0x3552b4 + 0x1) + '\x20:\x20Logging\x20in..'), await _0x373626['type']('#CustomerEmail', '' + _0x46fae4[_0x3552b4]['Email']), await _0x3f09d6(0x12c), await _0x373626['type']('#CustomerPassword', '' + _0x46fae4[_0x3552b4]['Password']), await _0x3f09d6(0x226), await _0x373626['$eval']('#customer_login', _0x546ce8 => _0x546ce8['submit']());
                            try {
                                await _0x373626['waitForSelector']('#orders'), await _0x3f09d6(0x4b0);
                            } catch {
                                console['log'](_0x43af63['red'](_0x10f5d5() + '\x20[' + _0x73f991['name'] + ']\x20Task\x20' + (_0x3552b4 + 0x1) + '\x20:\x20Task\x20failed,\x20invalid\x20credentials'));
                                continue;
                            }
                            await _0x373626['goto']('' + _0x46fae4[_0x3552b4]['Url'], {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            }), await _0x3f09d6(0xbb8), console['log'](_0x10f5d5() + '\x20[' + _0x73f991['name'] + ']\x20Task\x20' + (_0x3552b4 + 0x1) + '\x20:\x20Starting\x20Entry');
                            try {
                                await _0x373626['waitForSelector']('#email');
                            } catch {
                                console['log'](_0x43af63['red'](_0x10f5d5() + '\x20[' + _0x73f991['name'] + ']\x20Task\x20' + (_0x3552b4 + 0x1) + '\x20:\x20Duplicate\x20entry/\x20Account\x20error'));
                            }
                            await _0x373626['type']('#email', '' + _0x46fae4[_0x3552b4]['Email']), await _0x3f09d6(0x384), await _0x373626['type']('#first_name', '' + _0x46fae4[_0x3552b4]['FirstName']), await _0x3f09d6(0x514), await _0x373626['type']('#last_name', '' + _0x46fae4[_0x3552b4]['LastName']), await _0x3f09d6(0x514), await _0x373626['type']('#street_address', _0x46fae4[_0x3552b4]['Address1'] + '\x20' + _0x46fae4[_0x3552b4]['HouseNumber'] + '\x20' + _0x46fae4[_0x3552b4]['Address2']), await _0x3f09d6(0x2bc);
                            _0x46fae4[_0x3552b4]['Postcode'] == undefined && (_0x46fae4[_0x3552b4]['Postcode'] = _0x46fae4[_0x3552b4]['Zip']);
                            await _0x373626['type']('#zip_code', '' + _0x46fae4[_0x3552b4]['Postcode']), await _0x3f09d6(0x320), await _0x373626['type']('#city', '' + _0x46fae4[_0x3552b4]['City']), await _0x3f09d6(0x320), await _0x373626['type']('#bday', '01/01/1994'), await _0x3f09d6(0x320), await _0x373626['type']('#instagram', '' + _0x46fae4[_0x3552b4]['Follower']), await _0x3f09d6(0x352);
                            if (_0x46fae4[_0x3552b4]['Size'] == 'RANDOM') {
                                const _0x8b7882 = await _0x373626['$$eval']('div[id=\x22raffle__size-selector-container\x22]\x20>\x20label', _0x5a735d => {
                                    return _0x5a735d['map'](_0x2bc165 => _0x2bc165['textContent']);
                                });
                                var _0x3a0955 = Math['round'](Math['random']() * (_0x8b7882['length'] - 0x1));
                                console['log'](_0x10f5d5() + '\x20[' + _0x73f991['name'] + ']\x20Task\x20' + (_0x3552b4 + 0x1) + '\x20:\x20Picking\x20Random\x20Size\x20' + _0x8b7882[_0x3a0955]), await _0x373626['click']('label[data-eu-size=\x22' + _0x8b7882[_0x3a0955] + '\x22]');
                            } else {
                                console['log'](_0x10f5d5() + '\x20[' + _0x73f991['name'] + ']\x20Task\x20' + (_0x3552b4 + 0x1) + '\x20:\x20Picking\x20Size\x20' + _0x46fae4[_0x3552b4]['Size']);
                                try {
                                    await _0x373626['click']('label[data-eu-size=\x22' + _0x46fae4[_0x3552b4]['Size'] + '\x22]');
                                } catch {
                                    await _0x373626['click']('label[data-eu-size=\x22' + _0x46fae4[_0x3552b4]['Size'] + '.0\x22]');
                                }
                            }
                            await _0x3f09d6(0xbb8), await _0x373626['$$eval']('.raffle__checkbox-label', _0x32fabd => _0x32fabd['forEach'](_0x3e5c6b => _0x3e5c6b['click']())), await _0x3f09d6(0x7d0), console['log'](_0x10f5d5() + '\x20[' + _0x73f991['name'] + ']\x20Task\x20' + (_0x3552b4 + 0x1) + '\x20:\x20Submitting\x20Entry'), await _0x373626['click']('#raffle__form-submit'), await _0x3f09d6(0x1388);
                            try {
                                await _0x373626['waitForSelector']('#raffle__confirmation-message-container'), _0x37b19c = 'no', _0x1b4968(_0x46fae4[_0x3552b4], _0x73f991), console['log'](_0x43af63['green'](_0x10f5d5() + '\x20[' + _0x73f991['name'] + ']\x20Task\x20' + (_0x3552b4 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                            } catch (_0x7abf56) {
                                console['log'](_0x43af63['red'](_0x10f5d5() + '\x20[' + _0x4b4650[taskModule]['name'] + ']\x20Task\x20' + (_0x3552b4 + 0x1) + '\x20:\x20Raffle\x20entry\x20failed.\x20' + _0x7abf56));
                            }
                        } catch (_0x3b1262) {
                            console['log'](_0x43af63['red'](_0x10f5d5() + '\x20[' + _0x4b4650[taskModule]['name'] + ']\x20Task\x20' + (_0x3552b4 + 0x1) + '\x20:\x20' + _0x3b1262)), _0x37b19c = 'yes';
                        } finally {
                            _0x5831ca && _0x5831ca['close']();
                            if (_0x37b19c == 'yes' && _0x4c4e3f != 0x5 && _0x233f1c != 'Size\x20Not\x20Found') {
                                console['log'](_0x43af63['red'](_0x10f5d5() + '\x20[' + _0x73f991['name'] + ']\x20Task\x20' + (_0x3552b4 + 0x1) + '\x20:\x20Retrying\x20(' + _0x4c4e3f + '\x20/\x205)')), _0x3552b4 = _0x3552b4 - 0x1, _0x4c4e3f = _0x4c4e3f + 0x1;
                                continue;
                            }
                            _0x37b19c == 'yes' && _0x4c4e3f >= 0x5 && (_0x3d3128(_0x46fae4[_0x3552b4], _0x73f991), _0x37b19c = 'no', _0x4c4e3f = 0x0), console['log']('Waiting\x20for\x20' + _0x91debc['delay'] + '\x20ms'), await _0x3f09d6(_0x91debc['delay']);
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
                'function': async function (_0x537331, _0xe7b6c, _0x65f7e6) {
                    _0x5f424d['use'](_0x456420()), _0x5f424d['use'](_0x5787c4({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x91debc['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x5d7c96 = 0x0; _0x5d7c96 < _0xe7b6c['length']; _0x5d7c96++) {
                        if (_0x446c76 != 'yes')
                            var _0x446c76 = '', _0x47ed19 = 0x0;
                        var _0x45e6c9 = [{
                            'type': 'rich',
                            'title': 'Succesful\x20Patta\x20Account\x20Generated',
                            'description': '',
                            'color': 0xc0d6d6,
                            'fields': [
                                {
                                    'name': 'User',
                                    'value': '' + _0x52fb85
                                },
                                {
                                    'name': 'Delay',
                                    'value': '' + _0x91debc['delay']
                                },
                                {
                                    'name': 'Version',
                                    'value': '' + _0x1e9692
                                }
                            ]
                        }];
                        const _0x231e44 = { 'embeds': _0x45e6c9 };
                        _0x9f406c(_0x537331['name'] + '\x20Task\x20' + (_0x5d7c96 + 0x1) + '\x20/\x20' + _0xe7b6c['length'] + '\x20||\x20File:\x20' + _0x33c890 + '\x20Proxies:\x20' + _0x19246b);
                        try {
                            await _0x3a2fba(_0xe7b6c, _0x5d7c96);
                        } catch {
                            _0x446c76 = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        var _0x509868 = await _0x19f655(_0xe7b6c[_0x5d7c96], _0x537331, 'acc', ![]);
                        const _0xd90187 = { 'succesDEVMSG': { 'embeds': [_0x509868] } };
                        if (_0xe7b6c[_0x5d7c96]['Email'] == '' || _0xe7b6c[_0x5d7c96]['FirstName'] == '' || _0xe7b6c[_0x5d7c96]['LastName'] == '') {
                            console['log'](_0x10f5d5() + '\x20[' + _0x4b4650[taskModule]['name'] + ']\x20Task\x20' + (_0x5d7c96 + 0x1) + '\x20:\x20Invalid\x20CSV'), await _0x3f09d6(0x7d0);
                            continue;
                        }
                        (_0xe7b6c[_0x5d7c96]['Password'] == '' || _0xe7b6c[_0x5d7c96] == undefined) && _0xe7b6c[_0x5d7c96]['Password'] == 'JRaffles23!';
                        if (_0x91debc['useRandomProxy'] = ![])
                            var _0x561179 = _0x65f7e6[_0x5d7c96]['split'](':');
                        else
                            var _0xd9a855 = Math['round'](Math['random']() * (_0x65f7e6['length'] - 0x1)), _0x561179 = _0x65f7e6[_0xd9a855]['split'](':');
                        const _0x1a8159 = await _0x5f424d['launch']({
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x561179[0x0] + ':' + _0x561179[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                        try {
                            const _0x4e77ee = await _0x1a8159['newPage']();
                            await _0x4e77ee['authenticate']({
                                'username': '' + _0x561179[0x2],
                                'password': '' + _0x561179[0x3]
                            }), console['log'](_0x10f5d5() + '\x20[' + _0x537331['name'] + ']\x20Task\x20' + (_0x5d7c96 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x4e77ee['setRequestInterception'](!![]), _0x4e77ee['on']('request', _0x23ea6f => {
                                _0x23ea6f['resourceType']() === 'image' || _0x23ea6f['resourceType']() === 'font' || _0x23ea6f['resourceType']() === 'media' ? _0x23ea6f['abort']() : _0x23ea6f['continue']();
                            }), await _0x4e77ee['goto']('https://drop.slamjam.com/account/register'), await _0x3f09d6(0xbb8), await _0x4e77ee['waitForSelector']('#FirstName'), await _0x4e77ee['waitForSelector']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0x4e77ee['click']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), console['log'](_0x10f5d5() + '\x20[' + _0x537331['name'] + ']\x20Task\x20' + (_0x5d7c96 + 0x1) + '\x20:\x20Filling\x20information'), await _0x3f09d6(0x4b0), await _0x4e77ee['type']('#FirstName', '' + _0xe7b6c[_0x5d7c96]['FirstName']), await _0x3f09d6(0x226), await _0x4e77ee['type']('#LastName', '' + _0xe7b6c[_0x5d7c96]['LastName']), await _0x3f09d6(0x226), await _0x4e77ee['type']('#Email', '' + _0xe7b6c[_0x5d7c96]['Email']), await _0x3f09d6(0x2ee), await _0x4e77ee['type']('#ConfirmEmail', '' + _0xe7b6c[_0x5d7c96]['Email']), await _0x3f09d6(0x2ee), await _0x4e77ee['type']('#CreatePassword', '' + _0xe7b6c[_0x5d7c96]['Password']), await _0x3f09d6(0x2ee), await _0x4e77ee['type']('#CreateConfirmPassword', '' + _0xe7b6c[_0x5d7c96]['Password']), await _0x3f09d6(0x226), console['log'](_0x10f5d5() + '\x20[' + _0x537331['name'] + ']\x20Task\x20' + (_0x5d7c96 + 0x1) + '\x20:\x20Submitting..'), await _0x4e77ee['$eval']('#create_customer', _0x2bd49b => _0x2bd49b['submit']()), await _0x3f09d6(0x1388), console['log'](_0x10f5d5() + '\x20[' + _0x537331['name'] + ']\x20Task\x20' + (_0x5d7c96 + 0x1) + '\x20:\x20' + _0x43af63['cyan']('Solving\x20Captcha')), await _0x4e77ee['solveRecaptchas'](), console['log'](_0x10f5d5() + '\x20[' + _0x537331['name'] + ']\x20Task\x20' + (_0x5d7c96 + 0x1) + '\x20:\x20Captcha\x20solved'), await _0x4e77ee['$eval']('.shopify-challenge__container\x20>\x20form', _0x106489 => _0x106489['submit']());
                            try {
                                await _0x4e77ee['waitForSelector']('.product-card__image'), await _0x3f09d6(0x1f4), _0x446c76 = 'no', console['log'](_0x43af63['green'](_0x10f5d5() + '\x20[' + _0x537331['name'] + ']\x20Task\x20' + (_0x5d7c96 + 0x1) + '\x20:\x20Account\x20' + _0xe7b6c[_0x5d7c96]['Email'] + '\x20Generated!')), _0x48dad3['appendFileSync']('../accounts/slamjam.csv', '\x0a' + _0xe7b6c[_0x5d7c96]['Email'] + ',' + _0xe7b6c[_0x5d7c96]['Password']), console['log'](_0x43af63['yellow'](_0x10f5d5() + '\x20[' + _0x537331['name'] + ']\x20Task\x20' + (_0x5d7c96 + 0x1) + '\x20:\x20Account\x20' + _0xe7b6c[_0x5d7c96]['Email'] + '\x20Saved\x20in\x20\x27accounts/slamjam.csv\x27'));
                                try {
                                    _0x91debc['webhook'] != undefined && _0x91debc['webhook'] != '' && await _0x325d88(_0x91debc['webhook'], _0xd90187['succesDEVMSG']);
                                } catch {
                                }
                                await _0x325d88(_0x22e26c, _0xd90187['succesDEVMSG']);
                            } catch (_0x4b8d45) {
                                console['log'](_0x43af63['red'](_0x10f5d5() + '\x20[' + _0x4b4650[taskModule]['name'] + ']\x20Task\x20' + (_0x5d7c96 + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x4b8d45));
                            }
                        } catch (_0x330e79) {
                            console['log'](_0x43af63['red'](_0x10f5d5() + '\x20[' + _0x4b4650[taskModule]['name'] + ']\x20Task\x20' + (_0x5d7c96 + 0x1) + '\x20:\x20' + _0x330e79));
                        } finally {
                            _0x1a8159 && _0x1a8159['close']();
                            if (_0x446c76 == 'yes' && _0x47ed19 != 0x5) {
                                console['log'](_0x43af63['red'](_0x10f5d5() + '\x20[' + _0x537331['name'] + ']\x20Task\x20' + (_0x5d7c96 + 0x1) + '\x20:\x20Retrying\x20(' + _0x47ed19 + '\x20/\x205)')), _0x5d7c96 = _0x5d7c96 - 0x1, _0x47ed19 = _0x47ed19 + 0x1;
                                continue;
                            }
                            _0x446c76 == 'yes' && _0x47ed19 >= 0x5 && (_0x3d3128(_0xe7b6c[_0x5d7c96], _0x537331), _0x446c76 = 'no', _0x47ed19 = 0x0), console['log']('Waiting\x20for\x20' + _0x91debc['delay'] + '\x20ms'), await _0x3f09d6(_0x91debc['delay']);
                        }
                    }
                }
            },
            {
                'name': 'SLAM\x20JAM\x20Raffle\x20Entries',
                'store': 'SLAM\x20JAM',
                'logo': 'https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/2c778bc022405e206505',
                'function': async function (_0x4a7dd3, _0x437792, _0x2c542b) {
                    _0x5f424d['use'](_0x456420()), _0x5f424d['use'](_0x5787c4({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x91debc['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x187611 = 0x0; _0x187611 < _0x437792['length']; _0x187611++) {
                        var _0x51fcc0;
                        if (_0x2d23b1 != 'yes')
                            var _0x2d23b1 = '', _0x541bea = 0x0;
                        _0x9f406c(_0x4a7dd3['name'] + '\x20Task\x20' + (_0x187611 + 0x1) + '\x20/\x20' + _0x437792['length'] + '\x20||\x20File:\x20' + _0x33c890 + '\x20Proxies:\x20' + _0x19246b);
                        try {
                            await _0x3a2fba(_0x437792, _0x187611);
                        } catch {
                            _0x2d23b1 = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        if (_0x437792[_0x187611]['Email'] == '' || _0x437792[_0x187611]['Password'] == '' || _0x437792[_0x187611]['FirstName'] == '' || _0x437792[_0x187611]['LastName'] == '') {
                            console['log'](_0x10f5d5() + '\x20[' + _0x4a7dd3['name'] + ']\x20Task\x20' + (_0x187611 + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        if (_0x91debc['useRandomProxy'] = ![])
                            var _0x43ef30 = _0x2c542b[_0x187611]['split'](':');
                        else
                            var _0x351695 = Math['round'](Math['random']() * (_0x2c542b['length'] - 0x1)), _0x43ef30 = _0x2c542b[_0x351695]['split'](':');
                        const _0x47bd54 = await _0x5f424d['launch']({
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x43ef30[0x0] + ':' + _0x43ef30[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox',
                                '--disable-web-security',
                                '--disable-features=IsolateOrigins',
                                '\x20--disable-site-isolation-trials'
                            ]
                        });
                        try {
                            const _0x5826ab = await _0x47bd54['newPage']();
                            await _0x5826ab['authenticate']({
                                'username': '' + _0x43ef30[0x2],
                                'password': '' + _0x43ef30[0x3]
                            }), await _0x5826ab['setViewport']({
                                'width': 0x500,
                                'height': 0x2d0
                            }), console['log'](_0x10f5d5() + '\x20[' + _0x4a7dd3['name'] + ']\x20Task\x20' + (_0x187611 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x5826ab['setRequestInterception'](!![]), _0x5826ab['on']('request', _0x1a113a => {
                                _0x1a113a['resourceType']() === 'image' || _0x1a113a['resourceType']() === 'font' || _0x1a113a['resourceType']() === 'media' ? _0x1a113a['abort']() : _0x1a113a['continue']();
                            }), await _0x5826ab['goto']('https://drop.slamjam.com/account/login', {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            }), await _0x5826ab['waitForSelector']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0x5826ab['click']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0x3f09d6(0x258), await _0x5826ab['waitForSelector']('#CustomerEmail'), console['log'](_0x10f5d5() + '\x20[' + _0x4a7dd3['name'] + ']\x20Task\x20' + (_0x187611 + 0x1) + '\x20:\x20Logging\x20in..'), await _0x5826ab['type']('#CustomerEmail', '' + _0x437792[_0x187611]['Email']), await _0x3f09d6(0x12c), await _0x5826ab['type']('#CustomerPassword', '' + _0x437792[_0x187611]['Password']), await _0x3f09d6(0x226), await _0x5826ab['$eval']('#customer_login', _0x1f6e93 => _0x1f6e93['submit']()), await _0x3f09d6(0x7d0), await _0x5826ab['waitForSelector']('iframe[title=\x22reCAPTCHA\x22]'), console['log'](_0x10f5d5() + '\x20[' + _0x4a7dd3['name'] + ']\x20Task\x20' + (_0x187611 + 0x1) + '\x20:\x20' + _0x43af63['cyan']('Solving\x20Captcha')), await _0x5826ab['solveRecaptchas'](), console['log'](_0x10f5d5() + '\x20[' + _0x4a7dd3['name'] + ']\x20Task\x20' + (_0x187611 + 0x1) + '\x20:\x20Captcha\x20Solved'), await _0x5826ab['$eval']('.shopify-challenge__container\x20>\x20form', _0xd10a7b => _0xd10a7b['submit']());
                            try {
                                await _0x5826ab['waitForSelector']('.nav-account'), await _0x3f09d6(0x4b0);
                            } catch {
                                console['log'](_0x43af63['red'](_0x10f5d5() + '\x20[' + _0x4a7dd3['name'] + ']\x20Task\x20' + (_0x187611 + 0x1) + '\x20:\x20Task\x20failed,\x20invalid\x20credentials'));
                                continue;
                            }
                            await _0x5826ab['goto']('' + _0x437792[_0x187611]['Url'], {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            }), await _0x3f09d6(0xbb8), console['log'](_0x10f5d5() + '\x20[' + _0x4a7dd3['name'] + ']\x20Task\x20' + (_0x187611 + 0x1) + '\x20:\x20Starting\x20Entry');
                            try {
                                await _0x5826ab['waitForSelector']('#ProductSelect-product-template-raffle');
                            } catch {
                            }
                            await _0x5826ab['click']('.product-select-variant-wrapper'), await _0x3f09d6(0x320), await _0x5826ab['click']('li.product-select-variant__value[data-size=\x22' + _0x437792[_0x187611]['Size'] + '\x22]'), await _0x3f09d6(0x384), await _0x5826ab['$eval']('#AddToCartForm-product-template-raffle', _0x2793ce => _0x2793ce['submit']()), await _0x5826ab['waitForSelector']('.cart-order-summary__content'), await _0x3f09d6(0x514), await _0x5826ab['goto']('https://drop.slamjam.com/checkout'), await _0x3f09d6(0x514), await _0x5826ab['waitForSelector']('#checkout_shipping_address_country'), console['log'](_0x10f5d5() + '\x20[' + _0x4a7dd3['name'] + ']\x20Task\x20' + (_0x187611 + 0x1) + '\x20:\x20Filling\x20Information'), await _0x5826ab['select']('#checkout_shipping_address_country', '' + _0x437792[_0x187611]['Country']), await _0x3f09d6(0x200), await _0x5826ab['waitForSelector']('#checkout_shipping_address_first_name'), await _0x5826ab['type']('#checkout_shipping_address_first_name', '' + _0x437792[_0x187611]['FirstName']), await _0x3f09d6(0x237), await _0x5826ab['type']('#checkout_shipping_address_last_name', '' + _0x437792[_0x187611]['LastName']), await _0x3f09d6(0x1e0), await _0x5826ab['type']('#checkout_shipping_address_address1', _0x437792[_0x187611]['Address1'] + '\x20' + _0x437792[_0x187611]['HouseNumber']), await _0x3f09d6(0x514), await _0x5826ab['type']('#checkout_shipping_address_address2', '' + _0x437792[_0x187611]['Address2']), await _0x3f09d6(0x514);
                            _0x437792[_0x187611]['Postcode'] == undefined && (_0x437792[_0x187611]['Postcode'] = _0x437792[_0x187611]['Zip']);
                            await _0x5826ab['type']('#checkout_shipping_address_zip', '' + _0x437792[_0x187611]['Postcode']), await _0x3f09d6(0x2bc), await _0x5826ab['type']('#checkout_shipping_address_city', '' + _0x437792[_0x187611]['City']), await _0x3f09d6(0x320), await _0x5826ab['type']('#checkout_shipping_address_phone', '' + _0x437792[_0x187611]['Phone']), await _0x3f09d6(0x320), await _0x5826ab['click']('#continue_button'), await _0x3f09d6(0xbb8), await _0x5826ab['waitForSelector']('.summary-title'), await _0x3f09d6(0x320), await _0x5826ab['click']('#continue_button'), await _0x3f09d6(0x320), console['log'](_0x10f5d5() + '\x20[' + _0x4a7dd3['name'] + ']\x20Task\x20' + (_0x187611 + 0x1) + '\x20:\x20Finishing\x20Checkout'), await _0x5826ab['waitForSelector']('#checkout_credit_card_vault'), await _0x3f09d6(0x3e8);
                            var _0x17a9be = await _0x5826ab['$']('iframe[title=\x22Field\x20container\x20for:\x20Card\x20number\x22]'), _0x3913a0 = await _0x17a9be['contentFrame']();
                            await _0x3913a0['click']('#number'), await _0x3f09d6(0x3e8), await _0x3913a0['type']('#number', '' + _0x437792[_0x187611]['CardNumber'], { 'delay': 0x78 }), _0x17a9be = await _0x5826ab['$']('iframe[title=\x22Field\x20container\x20for:\x20Name\x20on\x20card\x22]'), _0x3913a0 = await _0x17a9be['contentFrame'](), await _0x3f09d6(0x1c2), await _0x3913a0['click']('#name'), await _0x3f09d6(0x1f4), await _0x3913a0['type']('#name', '' + _0x437792[_0x187611]['NameOnCard'], { 'delay': 0x78 }), _0x17a9be = await _0x5826ab['$']('iframe[title=\x22Field\x20container\x20for:\x20Expiration\x20date\x20(MM\x20/\x20YY)\x22]'), _0x3913a0 = await _0x17a9be['contentFrame'](), await _0x3f09d6(0x1c2), await _0x3913a0['click']('#expiry'), await _0x3f09d6(0x1f4), await _0x3913a0['type']('#expiry', '' + _0x437792[_0x187611]['ExpiryDate'], { 'delay': 0x78 }), _0x17a9be = await _0x5826ab['$']('iframe[title=\x22Field\x20container\x20for:\x20Security\x20code\x22]'), _0x3913a0 = await _0x17a9be['contentFrame'](), await _0x3f09d6(0x1c2), await _0x3913a0['click']('#verification_value'), await _0x3f09d6(0x1f4), await _0x3913a0['type']('#verification_value', '' + _0x437792[_0x187611]['CVV'], { 'delay': 0x78 }), await _0x5826ab['$eval']('#accepts-flag-raffle', _0x1a2578 => _0x1a2578['click']()), await _0x3f09d6(0x7d0), console['log'](_0x10f5d5() + '\x20[' + _0x4a7dd3['name'] + ']\x20Task\x20' + (_0x187611 + 0x1) + '\x20:\x20Processing\x20Order'), await _0x5826ab['$eval']('#continue_button', _0x1548ba => _0x1548ba['click']()), await _0x3f09d6(0x1b58), await _0x5826ab['waitForSelector']('.edit_checkout.animate-floating-labels'), await _0x5826ab['$eval']('.edit_checkout.animate-floating-labels', _0x1528a8 => _0x1528a8['submit']()), await _0x3f09d6(0x7d0);
                            try {
                                await _0x5826ab['waitForSelector']('div[data-step=\x22thank_you\x22]', { 'timeout': 0x493e0 }), _0x2d23b1 = 'no', _0x1b4968(_0x437792[_0x187611], _0x4a7dd3), console['log'](_0x43af63['green'](_0x10f5d5() + '\x20[' + _0x4a7dd3['name'] + ']\x20Task\x20' + (_0x187611 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                            } catch (_0x3b979d) {
                                throw new Error('Error\x20Processing\x20Order:\x20' + _0x3b979d['message']);
                            }
                            var _0x2e5fbb = await _0x19f655(_0x437792[_0x187611], _0x4a7dd3, 'dev', ![]), _0x1aaa2e = await _0x19f655(_0x437792[_0x187611], _0x4a7dd3, 'pub', ![]);
                            const _0x1926e9 = {
                                'succesDEVMSG': { 'embeds': [_0x2e5fbb] },
                                'succesPUBMSG': { 'embeds': [_0x1aaa2e] }
                            };
                            try {
                                _0x91debc['webhook'] != undefined && _0x91debc['webhook'] != '' && await _0x325d88(_0x91debc['webhook'], _0x1926e9['succesDEVMSG']), await _0x3f09d6(0xc8), await _0x325d88(_0x1b7c81, _0x1926e9['succesDEVMSG']), await _0x3f09d6(0xc8), await _0x325d88(_0x48b9ae, _0x1926e9['succesPUBMSG']);
                            } catch (_0x52390e) {
                                console['log'](_0x43af63['yellow'](_0x10f5d5() + '\x20[' + _0x4b4650[taskModule]['name'] + ']\x20Task\x20' + (_0x187611 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x52390e));
                            }
                        } catch (_0x2e8df1) {
                            console['log'](_0x43af63['red'](_0x10f5d5() + '\x20[' + _0x4b4650[taskModule]['name'] + ']\x20Task\x20' + (_0x187611 + 0x1) + '\x20:\x20' + _0x2e8df1)), _0x51fcc0 = '' + _0x2e8df1;
                            var _0x2e7641 = await _0x19f655(kickz[_0x187611], _0x4a7dd3, 'dev', !![], _0x51fcc0);
                            EMBEDS['errorDEV'] = { 'embeds': [_0x2e7641] }, _0x91debc['webhook'] != undefined && _0x91debc['webhook'] != '' && await _0x325d88(_0x91debc['webhook'], EMBEDS['errorDEV']), await _0x325d88(_0x13fc34, EMBEDS['errorDEV']), _0x2d23b1 = 'yes';
                        } finally {
                            _0x47bd54 && _0x47bd54['close']();
                            if (_0x2d23b1 == 'yes' && _0x541bea != 0x5 && _0x51fcc0 != 'Size\x20Not\x20Found') {
                                console['log'](_0x43af63['red'](_0x10f5d5() + '\x20[' + _0x4a7dd3['name'] + ']\x20Task\x20' + (_0x187611 + 0x1) + '\x20:\x20Retrying\x20(' + _0x541bea + '\x20/\x205)')), _0x187611 = _0x187611 - 0x1, _0x541bea = _0x541bea + 0x1;
                                continue;
                            }
                            _0x2d23b1 == 'yes' && _0x541bea >= 0x5 && (_0x3d3128(_0x437792[_0x187611], _0x4a7dd3), _0x2d23b1 = 'no', _0x541bea = 0x0), console['log']('Waiting\x20for\x20' + _0x91debc['delay'] + '\x20ms'), await _0x3f09d6(_0x91debc['delay']);
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
                'function': async function (_0x14fa81) {
                    var _0x47f919 = await _0xec00a5(), _0x47142a = _0x48dad3['readFileSync']('../failed-tasks.csv', 'utf-8'), _0x401e53 = _0x3be0d7['parse'](_0x47142a, { 'header': !![] })['data'];
                    for (var _0x2b2c9f = 0x0; _0x2b2c9f < _0x401e53['length']; _0x2b2c9f++) {
                        var _0x10a30f = _0x401e53[_0x2b2c9f]['Store'], _0x49bd70 = _0x401e53[_0x2b2c9f]['Mode'];
                        for (var _0x45580d of _0x4b4650) {
                            const _0x242e9e = _0x45580d['name']['includes'](_0x10a30f);
                            if (!_0x242e9e)
                                continue;
                            for (mode of _0x45580d['modules']) {
                                if (mode['name'] == _0x49bd70) {
                                    console['log']('Running\x20' + _0x43af63['cyan'](mode['name'])), await mode['function'](mode, [_0x401e53[_0x2b2c9f]], _0x47f919);
                                    var _0xa4031f = _0x47142a['split']('\x0a')['splice'](0x0, 0x1)['join']('\x0a');
                                    _0x48dad3['writeFileSync']('../failed-tasks.csv', _0xa4031f);
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
                    var _0x3e5bc5 = await _0x2b5c54['get']('Answer');
                    if (_0x3e5bc5['Answer']['toLowerCase']() == 'y') {
                        _0x48dad3['writeFileSync']('../failed-tasks.csv', 'Time,Store,Mode,Url,Size,Follower,FirstName,LastName,Address1,Address2,HouseNumber,Zip,City,State,Country,Phone,Email,Password,PaymentMethod,CardType,NameOnCard,CardNumber,ExpiryDate,CVV,IsBillingSame,BillingFirstName,BillingLastName,BillingAddress1,BillingAddress2,BillingHouseNumber,BillingZip,BillingCity,BillingState,BillingCountry,BillingPhone\x0a'), console['clear'](), console['log']('Cleared\x20Failed\x20Tasks'), await _0x3f09d6(0x3e8);
                        return;
                    }
                    if (_0x3e5bc5['Answer']['toLowerCase']() == 'n') {
                        console['clear'](), console['log']('Returning\x20to\x20Main\x20Menu'), await _0x3f09d6(0x3e8);
                        return;
                    }
                    return console['clear'](), console['log']('Invalid\x20Input'), await _0x3f09d6(0x3e8), this['function']();
                }
            }
        ]
    },
    { 'name': 'Paypal\x20Verification' },
    { 'name': 'Change\x20Settings' },
    { 'name': 'Reload\x20Settings' }
];
async function _0x3c32fc(_0xc90866) {
    var _0x508a8d = await _0xec00a5(), _0x378905 = _0x48dad3['readFileSync']('../failed-tasks.csv', 'utf-8'), _0x6aed67 = _0x3be0d7['parse'](_0x378905, { 'header': !![] })['data'];
    for (var _0x35f5e8 = 0x0; _0x35f5e8 < _0x6aed67['length']; _0x35f5e8++) {
        var _0xfacaa = _0x6aed67[_0x35f5e8]['Store'], _0x3d359b = _0x6aed67[_0x35f5e8]['Mode'];
        for (var _0x2fda14 of _0x4b4650) {
            const _0x32f72d = _0x2fda14['name']['includes'](_0xfacaa);
            if (_0x32f72d)
                for (mode of _0x4b4650[_0x2fda14]['modules']) {
                    const _0x151b1c = mode['name']['includes'](_0x3d359b);
                    _0x151b1c && (_0xc90866 = mode['name'], await mode['function'](_0xc90866, _0x6aed67[_0x35f5e8], _0x508a8d));
                }
        }
    }
}
async function _0x2dea99() {
    await _0x3210e3(), console['clear']();
    if (_0x1e9692 != 'devkey') {
        let _0x5b5d81 = await _0x385e39['autoUpdate']();
        if (_0x5b5d81 === 'yes')
            return _0x4e52e2('node\x20JRaffles.js');
        console['clear']();
    }
    if (_0x1d56f7 == '') {
        console['log']('No\x20key\x20found\x20in\x20settings.json');
        return await _0x3f09d6(0x2710);
        ;
    }
    await _0x8b410a(_0x1d56f7);
    if (_0xf361c5 === ![])
        return console['log']('Closing\x20Browser'), await _0x3f09d6(0xbb8);
    else
        try {
            var _0x2357c7 = [{
                'type': 'rich',
                'title': 'User\x20Opened\x20JRaffles',
                'description': '',
                'color': 0xc0d6d6,
                'fields': [
                    {
                        'name': 'User',
                        'value': '' + _0x52fb85
                    },
                    {
                        'name': 'Version',
                        'value': '' + _0x1e9692
                    }
                ]
            }];
            const _0x4bbd92 = { 'embeds': _0x2357c7 };
            var _0x296e3a = await _0x19f655(null, null, 'open', ![]);
            const _0x565b2f = { 'openDEVMSG': { 'embeds': [_0x296e3a] } };
            await _0x325d88(_0x34ded3, _0x565b2f['openDEVMSG']);
            async function _0x4faa62() {
                _0x9f406c('JRaffles\x20' + _0x1e9692), console['clear'](), console['log']('Welcome\x20to\x20' + _0x43af63['cyan']('JRaffles();') + '\x20' + _0x1e9692), console['log']('Choose\x20a\x20Module\x20to\x20run..\x0a');
                for (var _0x580f5e = 0x0; _0x580f5e < _0x4b4650['length'] - 0x4; _0x580f5e++) {
                    if (_0x580f5e >= 0xa) {
                        console['log']('\x20(' + _0x580f5e + ')\x20[' + _0x4b4650[_0x580f5e]['name'] + ']');
                        continue;
                    }
                    if (_0x4b4650[_0x580f5e]['name'] === 'Reload\x20Settings' || _0x4b4650[_0x580f5e]['name'] === 'Change\x20Settings')
                        continue;
                    else
                        console['log']('\x20(' + _0x580f5e + ')\x20\x20[' + _0x4b4650[_0x580f5e]['name'] + ']');
                }
                ;
                console['log']('\x0a\x20-----------------------------------------------------\x20\x0a'), console['log']('\x20(' + (_0x4b4650['length'] - 0x4) + ')\x20Failed\x20Tasks'), console['log']('\x20(' + (_0x4b4650['length'] - 0x3) + ')\x20Paypal\x20Verification'), console['log']('\x20(' + (_0x4b4650['length'] - 0x2) + ')\x20Change\x20Settings'), console['log']('\x20(' + (_0x4b4650['length'] - 0x1) + ')\x20Reload\x20Settings'), console['log'](''), taskModule = await _0x25f3bc();
                if (taskModule > _0x4b4650['length'] - 0x1 || isNaN(taskModule) == !![])
                    return console['log']('Invalid\x20selection'), await _0x3f09d6(0x3e8), _0x4faa62();
                if (_0x4b4650[taskModule]['name'] == 'BSTN') {
                    taskFunction = await _0x135228(_0x4b4650[taskModule]['modules']);
                    var _0xc36f98 = _0x4b4650[taskModule]['modules'][taskFunction];
                    console['clear']();
                    if (taskFunction == 0x2) {
                        var _0x3cb5ce = await _0xec00a5(), _0x1b3495 = await _0x495cbe();
                        _0x91debc['shuffleTasks'] && await _0x527815(_0x1b3495), await _0xc36f98['function'](_0xc36f98, _0x1b3495, _0x3cb5ce);
                    } else {
                        if (taskFunction == 0x0) {
                            var _0x3cb5ce = await _0xec00a5(), _0x1b3495 = await _0x495cbe();
                            _0x91debc['shuffleTasks'] && await _0x527815(_0x1b3495), await _0xc36f98['function'](_0xc36f98, _0x1b3495, _0x3cb5ce);
                        } else {
                            if (taskFunction == 0x1) {
                                var _0x3cb5ce = await _0xec00a5();
                                await _0xc36f98['function'](_0xc36f98, _0x3cb5ce);
                            }
                        }
                    }
                    return _0x4faa62();
                }
                if (_0x4b4650[taskModule]['name'] == 'FENOM') {
                    try {
                        taskFunction = await _0x135228(_0x4b4650[taskModule]['modules']);
                        var _0xc36f98 = _0x4b4650[taskModule]['modules'][taskFunction];
                        console['clear']();
                        if (taskFunction == 0x1) {
                            var _0x3cb5ce = await _0xec00a5(), _0x4711a8 = await _0x495cbe();
                            _0x91debc['shuffleTasks'] && await _0x527815(_0x4711a8), await _0xc36f98['function'](_0xc36f98, _0x4711a8, _0x3cb5ce);
                        } else {
                            if (taskFunction == 0x0) {
                                var _0x3cb5ce = await _0xec00a5(), _0x4711a8 = await _0x495cbe();
                                _0x91debc['shuffleTasks'] && await _0x527815(_0x4711a8), await _0xc36f98['function'](_0xc36f98, _0x4711a8, _0x3cb5ce);
                            }
                        }
                    } catch (_0x478bd1) {
                        console['log'](_0x478bd1), await _0x3f09d6(0xfa0);
                    }
                    return _0x4faa62();
                }
                if (_0x4b4650[taskModule]['name'] == '4ELEMENTOS') {
                    taskFunction = await _0x135228(_0x4b4650[taskModule]['modules']);
                    var _0xc36f98 = _0x4b4650[taskModule]['modules'][taskFunction];
                    console['clear']();
                    if (taskFunction == 0x1) {
                        var _0x3cb5ce = await _0xec00a5();
                        return await _0xc36f98['function'](_0xc36f98, _0x3cb5ce), _0x4faa62();
                    }
                    var _0x3cb5ce = await _0xec00a5(), _0x47b774 = await _0x495cbe();
                    return _0x91debc['shuffleTasks'] && await _0x527815(_0x47b774), await _0xc36f98['function'](_0xc36f98, _0x47b774, _0x3cb5ce), _0x4faa62();
                }
                if (_0x4b4650[taskModule]['name'] == 'AFEW\x20Store') {
                    taskFunction = await _0x135228(_0x4b4650[taskModule]['modules']);
                    var _0xc36f98 = _0x4b4650[taskModule]['modules'][taskFunction];
                    console['clear']();
                    var _0x3cb5ce = await _0xec00a5(), _0x47b774 = await _0x495cbe();
                    return _0x91debc['shuffleTasks'] && await _0x527815(_0x47b774), await _0xc36f98['function'](_0xc36f98, _0x47b774, _0x3cb5ce), _0x4faa62();
                }
                if (_0x4b4650[taskModule]['name'] == 'EQL') {
                    taskFunction = await _0x135228(_0x4b4650[taskModule]['modules']);
                    var _0xc36f98 = _0x4b4650[taskModule]['modules'][taskFunction];
                    console['clear']();
                    var _0x3cb5ce = await _0xec00a5(), _0x47b774 = await _0x495cbe();
                    return _0x91debc['shuffleTasks'] && await _0x527815(_0x47b774), await _0xc36f98['function'](_0xc36f98, _0x47b774, _0x3cb5ce), _0x4faa62();
                } else {
                    if (_0x4b4650[taskModule]['name'] == 'MAHA\x20Amsterdam') {
                        taskFunction = await _0x135228(_0x4b4650[taskModule]['modules']);
                        var _0xc36f98 = _0x4b4650[taskModule]['modules'][taskFunction];
                        console['clear']();
                        if (taskFunction == 0x0) {
                            var _0x3cb5ce = await _0xec00a5(), _0x56049d = await _0x495cbe();
                            return _0x91debc['shuffleTasks'] && await _0x527815(_0x56049d), await _0xc36f98['function'](_0xc36f98, _0x56049d, _0x3cb5ce), _0x4faa62();
                        } else {
                            if (taskFunction == 0x1) {
                                var _0x3cb5ce = await _0xec00a5();
                                return await _0xc36f98['function'](_0xc36f98, null, _0x3cb5ce), _0x4faa62();
                            }
                        }
                        ;
                    } else {
                        if (_0x4b4650[taskModule]['name'] == 'FOOTSHOP') {
                            taskFunction = await _0x135228(_0x4b4650[taskModule]['modules']);
                            var _0xc36f98 = _0x4b4650[taskModule]['modules'][taskFunction], _0x3cb5ce = await _0xec00a5(), _0x4c2513 = await _0x495cbe();
                            return _0x91debc['shuffleTasks'] && await _0x527815(_0x4c2513), await _0xc36f98['function'](_0xc36f98, _0x4c2513, _0x3cb5ce), await _0x3f09d6(0x1388), _0x4faa62();
                        } else {
                            if (_0x4b4650[taskModule]['name'] == 'OQIUM\x20Store') {
                                taskFunction = await _0x135228(_0x4b4650[taskModule]['modules']);
                                var _0xc36f98 = _0x4b4650[taskModule]['modules'][taskFunction];
                                console['clear']();
                                if (taskFunction == 0x0) {
                                    var _0x3cb5ce = await _0xec00a5(), _0x56049d = await _0x495cbe();
                                    return _0x91debc['shuffleTasks'] && await _0x527815(_0x56049d), await _0xc36f98['function'](_0xc36f98, _0x56049d, _0x3cb5ce), _0x4faa62();
                                } else {
                                    if (taskFunction == 0x1) {
                                        var _0x3cb5ce = await _0xec00a5();
                                        return await _0xc36f98['function'](_0xc36f98, null, _0x3cb5ce), _0x4faa62();
                                    }
                                }
                                ;
                            } else {
                                if (_0x4b4650[taskModule]['name'] == 'BOUNCEWEAR') {
                                    taskFunction = await _0x135228(_0x4b4650[taskModule]['modules']);
                                    var _0xc36f98 = _0x4b4650[taskModule]['modules'][taskFunction];
                                    console['clear']();
                                    if (taskFunction == 0x0)
                                        await _0x4616b8('https://bouncewear.com/nl/account/register', _0xc36f98);
                                    else {
                                        if (taskFunction == 0x1) {
                                        }
                                    }
                                    ;
                                } else {
                                    if (_0x4b4650[taskModule]['name'] == 'PATTA') {
                                        taskFunction = await _0x135228(_0x4b4650[taskModule]['modules']);
                                        var _0xc36f98 = _0x4b4650[taskModule]['modules'][taskFunction];
                                        console['clear']();
                                        if (taskFunction == 0x0) {
                                            var _0x3cb5ce = await _0xec00a5(), _0xf40b1c = await _0x495cbe();
                                            return _0x91debc['shuffleTasks'] && await _0x527815(_0xf40b1c), await _0xc36f98['function'](_0xc36f98, _0xf40b1c, _0x3cb5ce), _0x4faa62();
                                        } else {
                                            if (taskFunction == 0x1) {
                                                var _0x3cb5ce = await _0xec00a5(), _0xf40b1c = await _0x495cbe();
                                                return _0x91debc['shuffleTasks'] && await _0x527815(_0xf40b1c), await _0xc36f98['function'](_0xc36f98, _0xf40b1c, _0x3cb5ce), _0x4faa62();
                                            }
                                        }
                                        ;
                                    } else {
                                        if (_0x4b4650[taskModule]['name'] == 'SLAM\x20JAM') {
                                            taskFunction = await _0x135228(_0x4b4650[taskModule]['modules']);
                                            var _0xc36f98 = _0x4b4650[taskModule]['modules'][taskFunction];
                                            console['clear']();
                                            if (taskFunction == 0x0) {
                                                var _0x3cb5ce = await _0xec00a5(), _0x1f1c0a = await _0x495cbe();
                                                return _0x91debc['shuffleTasks'] && await _0x527815(_0x1f1c0a), await _0xc36f98['function'](_0xc36f98, _0x1f1c0a, _0x3cb5ce), _0x4faa62();
                                            } else {
                                                if (taskFunction == 0x1) {
                                                    var _0x3cb5ce = await _0xec00a5(), _0x1f1c0a = await _0x495cbe();
                                                    return _0x91debc['shuffleTasks'] && await _0x527815(_0x1f1c0a), await _0xc36f98['function'](_0xc36f98, _0x1f1c0a, _0x3cb5ce), _0x4faa62();
                                                }
                                            }
                                            ;
                                        } else {
                                            if (_0x4b4650[taskModule]['name'] == 'KICKZ') {
                                                taskFunction = await _0x135228(_0x4b4650[taskModule]['modules']);
                                                var _0xc36f98 = _0x4b4650[taskModule]['modules'][taskFunction];
                                                console['clear']();
                                                if (taskFunction == 0x0) {
                                                    var _0x3cb5ce = await _0xec00a5(), _0x481bf2 = await _0x495cbe();
                                                    return _0x91debc['shuffleTasks'] && await _0x527815(_0x481bf2), await _0xc36f98['function'](_0xc36f98, _0x481bf2, _0x3cb5ce), _0x4faa62();
                                                } else {
                                                    if (taskFunction == 0x1) {
                                                        var _0x3cb5ce = await _0xec00a5(), _0x481bf2 = await _0x495cbe();
                                                        return _0x91debc['shuffleTasks'] && await _0x527815(_0x481bf2), await _0xc36f98['function'](_0xc36f98, _0x481bf2, _0x3cb5ce), _0x4faa62();
                                                    }
                                                }
                                                ;
                                            } else {
                                                if (_0x4b4650[taskModule]['name'] == 'JD') {
                                                    taskFunction = await _0x135228(_0x4b4650[taskModule]['modules']);
                                                    var _0xc36f98 = _0x4b4650[taskModule]['modules'][taskFunction];
                                                    console['clear']();
                                                    if (taskFunction == 0x0) {
                                                        var _0x3cb5ce = await _0xec00a5(), _0x586862 = await _0x495cbe();
                                                        return _0x91debc['shuffleTasks'] && await _0x527815(_0x586862), await _0xc36f98['function'](_0xc36f98, _0x586862, _0x3cb5ce), _0x4faa62();
                                                    }
                                                } else {
                                                    if (_0x4b4650[taskModule]['name'] == 'Seven\x20Store')
                                                        return console['log']('returning\x20to\x20menu'), await _0x3f09d6(0x3e8), _0x4faa62();
                                                    else {
                                                        if (_0x4b4650[taskModule]['name'] == 'Paypal\x20Verification') {
                                                            var _0x5a50e2 = _0x4b4650[taskModule]['name'], _0x3cb5ce = await _0xec00a5();
                                                            return await _0x34abb7(_0x5a50e2, _0x3cb5ce), _0x4faa62();
                                                        } else {
                                                            if (_0x4b4650[taskModule]['name'] == 'Failed\x20Tasks') {
                                                                taskFunction = await _0x135228(_0x4b4650[taskModule]['modules']);
                                                                var _0xc36f98 = _0x4b4650[taskModule]['modules'][taskFunction];
                                                                return await _0xc36f98['function'](_0xc36f98), _0x4faa62();
                                                            } else {
                                                                if (_0x4b4650[taskModule]['name'] == 'Change\x20Settings') {
                                                                    console['log']('Choose\x20a\x20Setting\x20to\x20change\x20:\x0a');
                                                                    var _0x334b8e = 0x0;
                                                                    for (const _0x5293bf in _0x91debc) {
                                                                        console['log']('(' + _0x334b8e + ')\x20' + _0x5293bf + '\x20:\x20' + _0x91debc[_0x5293bf]), _0x334b8e++;
                                                                    }
                                                                    console['log']('\x0a\x20-----------------------------------------------------\x20\x0a'), console['log']('(' + _0x334b8e + ')\x20Return\x20to\x20Main\x20Menu');
                                                                    var _0x4f244e = await _0x3de314();
                                                                    if (_0x4f244e == _0x334b8e)
                                                                        return _0x4faa62();
                                                                    console['clear'];
                                                                    var _0x10ae6e = 0x0;
                                                                    for (var _0x4c9a0d in _0x91debc) {
                                                                        if (_0x4f244e == _0x10ae6e) {
                                                                            console['log']('Changing:\x20\x0a\x20\x0a\x20' + _0x4c9a0d + '\x20:'), _0x91debc[_0x4c9a0d] = await _0xb04946(), _0x48dad3['writeFileSync']('../settings.json', JSON['stringify'](_0x91debc));
                                                                            break;
                                                                        } else
                                                                            _0x10ae6e++;
                                                                    }
                                                                    return console['log']('Settings\x20Saved!'), await _0x3f09d6(0xbb8), _0x4faa62();
                                                                } else {
                                                                    if (_0x4b4650[taskModule]['name'] == 'Reload\x20Settings')
                                                                        return console['log']('Reloading\x20settings'), await _0x3210e3(), _0x4faa62();
                                                                    else {
                                                                        if (taskModule == 0x45) {
                                                                            _0x4b4650[0x45] = { 'name': 'AFEW\x20SECRET' };
                                                                            var _0x403eb6 = await _0xfa30fa();
                                                                            _0x403eb6 == 'ModuleVoorDeBoys' ? (await _0x583438(), await _0x212a66(), await afewFunction(_0xf5324b[_0x6bd0d6], 'sec')) : (console['log']('Wrong\x20password,\x20closing\x20in\x2010\x20seconds...'), await _0x3f09d6(0xbb8));
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
                await _0x4faa62();
            } catch (_0xcc8405) {
                return console['log'](_0xcc8405), _0x4faa62();
            }
        } catch (_0x2a6200) {
            return console['log'](_0x2a6200), await _0x3f09d6(0x3a98);
        }
}
;
_0x9f406c('JRaffles\x20' + _0x1e9692), _0x3210e3();
try {
    _0x2dea99();
} catch (_0x2a32e9) {
    var _0x1facfe = [{
        'type': 'rich',
        'title': 'Main\x20Menu\x20Error',
        'description': '',
        'color': 0xc0d6d6,
        'fields': [
            {
                'name': 'User',
                'value': '' + _0x52fb85
            },
            {
                'name': 'Version',
                'value': '' + _0x1e9692
            },
            {
                'name': 'Error',
                'value': '' + _0x2a32e9
            }
        ]
    }];
    const _0x376b60 = { 'embeds': _0x1facfe };
    _0x325d88(_0x13fc34, _0x376b60);
}